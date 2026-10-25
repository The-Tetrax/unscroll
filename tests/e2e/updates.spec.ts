import { test as base, expect, type JSHandle, type Page, type Request as PlaywrightRequest } from '@playwright/test'
import { readFile, readdir, realpath, stat } from 'node:fs/promises'
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http'
import { extname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { lessonById, lessons } from '../../src/data'
import { offlineManifestSchema, type OfflineManifest } from '../../src/lib/offline'
import { backupSchema, stateSchema } from '../../src/lib/schema'
import type { LibrarySnapshot } from '../../src/lib/storage'

const DIST = fileURLToPath(new URL('../../dist/', import.meta.url))
const WORKER_TIMEOUT = 90_000
const CLOCK = '2030-06-15T12:00:00.000Z'
const STORAGE_KEY = 'unscroll-library-v1'
const NOTE_LESSON = 'cinema-001'
const READY = 'Ready for offline reading'
const STORAGE_ERROR = 'This change is only in memory. Device storage could not save it. Export a backup before closing the app.'
const UPDATE_ERROR = 'Export a backup before updating. This tab has changes that are not saved to device storage.'
const ACTIVATION_RECORD = 'unscroll-e2e-native-update'

interface ProductionServer {
  origin: string
  root: string
  revision: number
  inventory: OfflineManifest
  workerRevisions: number[]
  discoveryRequests: { method: string; search: string }[]
  pagePaths: Set<string>
  errors: string[]
}

interface VisualManifest {
  revision: string
  lessons: number
  visualCount: number
  assets: Record<string, { src: string; width: number; height: number; alt?: string }[]>
}

interface WaitingWorker {
  controller: ServiceWorker
  waiting: ServiceWorker
  registration: ServiceWorkerRegistration
  document: Document
}

const test = base.extend<{ production: ProductionServer }>({
  production: async ({ page, context }, use) => {
    const { state, close } = await startProductionServer()
    const externalRequests: string[] = []
    const pageErrors: string[] = []
    const observeRequest = (request: PlaywrightRequest) => {
      const url = new URL(request.url())
      if (/^https?:$/.test(url.protocol) && url.origin !== state.origin) externalRequests.push(url.href)
    }
    // Page requests exclude the worker's own precache fetches, including on WebKit.
    const observePageRequest = (request: PlaywrightRequest) => { state.pagePaths.add(new URL(request.url()).pathname) }
    const observeError = (error: Error) => { pageErrors.push(error.message) }
    context.on('request', observeRequest)
    page.on('request', observePageRequest)
    page.on('pageerror', observeError)
    try {
      // Only Date is fixed. Worker lifecycle events, timers and network IO remain native.
      await page.clock.setFixedTime(new Date(CLOCK))
      await page.goto(appUrl(state, '/profile'), { waitUntil: 'domcontentloaded' })
      await expectReady(page, state)
      await waitForStored(page, (snapshot) => snapshot.state.daily.ids.length > 0, true)
      // Workbox decides isUpdate when registering. Return to an already controlled app
      // before testing updates, rather than faking its first-install lifecycle flags.
      await page.reload({ waitUntil: 'domcontentloaded' })
      await expectReady(page, state)
      await waitForStored(page, (snapshot) => snapshot.state.daily.ids.length > 0, true)
      // eslint-disable-next-line react-hooks/rules-of-hooks -- Playwright fixture continuation, not a React hook.
      await use(state)
      expect(externalRequests, 'Only the per-test loopback origin may be contacted').toEqual([])
      expect(pageErrors, 'Uncaught application errors').toEqual([])
      expect(state.errors, 'Local production server errors').toEqual([])
      expect(state.discoveryRequests.length, 'Discovery must use the isolated HTTP server').toBeGreaterThan(0)
      for (const request of state.discoveryRequests) expect(request).toEqual({ method: 'GET', search: '' })
    } finally {
      context.off('request', observeRequest)
      page.off('request', observePageRequest)
      page.off('pageerror', observeError)
      await close()
    }
  },
})

// Inherit mobile-chromium, desktop-chromium and mobile-webkit without skips or routing.
test.use({ serviceWorkers: 'allow' })
test.describe.configure({ timeout: WORKER_TIMEOUT })

const CONTENT_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
}

function inside(root: string, file: string) {
  const path = relative(root, file)
  return !isAbsolute(path) && path !== '..' && !path.startsWith(`..${sep}`)
}

function send(request: IncomingMessage, response: ServerResponse, status: number, contentType: string, body: string | Buffer) {
  const bytes = typeof body === 'string' ? Buffer.from(body, 'utf8') : body
  response.writeHead(status, {
    'Content-Type': contentType,
    'Content-Length': bytes.byteLength,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  })
  response.end(request.method === 'HEAD' ? undefined : bytes)
}

async function startProductionServer() {
  // A current production build is a precondition. Nothing here builds or rewrites it.
  const root = await realpath(DIST)
  const inventory = offlineManifestSchema.parse(JSON.parse(await readFile(join(root, 'offline-library.json'), 'utf8')))
  const state: ProductionServer = {
    origin: '', root, inventory, revision: 0, workerRevisions: [], discoveryRequests: [], pagePaths: new Set(), errors: [],
  }
  async function serve(request: IncomingMessage, response: ServerResponse) {
    const target = request.url ?? '/'
    let path: string
    try { path = decodeURIComponent(target.split('?')[0]) }
    catch { send(request, response, 400, 'text/plain; charset=utf-8', 'Invalid path'); return }
    // Check before URL normalization, which would erase dot segments. The allow-list
    // also rejects backslashes, NULs, drive letters and double-encoded escapes.
    if (!/^\/[a-zA-Z0-9_./-]*$/.test(path) || path.startsWith('//') || path.split('/').some((part) => part === '..' || part === '.')) {
      send(request, response, 403, 'text/plain; charset=utf-8', 'Forbidden path')
      return
    }
    if (path === '/.netlify/functions/discover') {
      state.discoveryRequests.push({ method: request.method ?? '', search: new URL(target, state.origin).search })
      send(request, response, request.method === 'GET' ? 503 : 405, CONTENT_TYPES['.json'], JSON.stringify({
        date: CLOCK.slice(0, 10), status: 'unavailable', lessons: [], message: 'Discovery is disabled in this local browser test.',
      }))
      return
    }
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      response.setHeader('Allow', 'GET, HEAD')
      send(request, response, 405, 'text/plain; charset=utf-8', 'Method not allowed')
      return
    }
    if (path === '/') path = '/index.html'
    const revision = state.revision
    const candidate = resolve(root, `.${path}`)
    if (!inside(root, candidate)) { send(request, response, 403, 'text/plain; charset=utf-8', 'Forbidden path'); return }
    try {
      const file = await realpath(candidate)
      // A symlink must not turn an otherwise safe path into a read outside dist.
      if (!inside(root, file)) { send(request, response, 403, 'text/plain; charset=utf-8', 'Forbidden path'); return }
      if (!(await stat(file)).isFile()) { send(request, response, 404, 'text/plain; charset=utf-8', 'Not found'); return }
      let bytes = await readFile(file)
      if (path === '/sw.js') {
        // Preserve the generated worker and precache revisions. Only its actual HTTP
        // response bytes change, which triggers the browser's native update algorithm.
        bytes = Buffer.concat([bytes, Buffer.from(`\n// UNSCROLL browser test revision ${revision}\n`, 'utf8')])
        response.setHeader('Service-Worker-Allowed', '/')
        state.workerRevisions.push(revision)
      }
      send(request, response, 200, CONTENT_TYPES[extname(path).toLowerCase()] ?? 'application/octet-stream', bytes)
    } catch (error) {
      const code = (error as NodeJS.ErrnoException).code
      if (code !== 'ENOENT' && code !== 'ENOTDIR') throw error
      send(request, response, 404, 'text/plain; charset=utf-8', 'Not found')
    }
  }
  const server = createServer((request, response) => {
    void serve(request, response).catch((error: unknown) => {
      state.errors.push(error instanceof Error ? error.message : String(error))
      if (response.headersSent) response.destroy()
      else send(request, response, 500, 'text/plain; charset=utf-8', 'Local server error')
    })
  })
  await new Promise<void>((ready, reject) => {
    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => { server.off('error', reject); ready() })
  })
  const address = server.address()
  if (!address || typeof address === 'string') { server.close(); throw new Error('Expected an ephemeral loopback TCP port') }
  state.origin = `http://127.0.0.1:${address.port}`
  return {
    state,
    close: () => new Promise<void>((closed, reject) => {
      server.close((error) => { if (error) reject(error); else closed() })
      server.closeAllConnections()
    }),
  }
}

function appUrl(server: ProductionServer, fragment: string) {
  // Never use the preview server's inherited context baseURL for these tests.
  return `${server.origin}/#${fragment}`
}

function offlineSection(page: Page) {
  return page.getByRole('region', { name: 'Offline library and updates', exact: true })
}

async function precacheEntries(page: Page) {
  return page.evaluate(async () => {
    const names = (await caches.keys()).filter((name) => name.includes('workbox-precache'))
    return (await Promise.all(names.map(async (name) => {
      const cache = await caches.open(name)
      return (await cache.keys()).map((request) => ({ cache: name, url: request.url }))
    }))).flat()
  })
}

async function expectCounts(page: Page, manifest: OfflineManifest, cached: number) {
  const section = offlineSection(page)
  await expect(section.getByText(`${cached} of ${manifest.paths.length} required files found.`, { exact: false }))
    .toContainText(`${manifest.lessons} lessons and ${manifest.illustrations} diagrams.`)
  const progress = section.getByRole('progressbar', { name: 'Offline files stored', exact: true })
  await expect(progress).toHaveAttribute('aria-valuenow', String(cached))
  await expect(progress).toHaveAttribute('aria-valuemax', String(manifest.paths.length))
}

async function expectReady(page: Page, server: ProductionServer) {
  await expect(page.locator('main#main')).toBeVisible()
  await expect(page.getByRole('heading', { level: 1, name: 'Your profile', exact: true })).toBeVisible()
  await expect(offlineSection(page).locator('.offline-state[role="status"]')).toHaveText(READY, { timeout: WORKER_TIMEOUT })
  await page.waitForFunction(async () => {
    const registration = await navigator.serviceWorker.getRegistration()
    return navigator.serviceWorker.controller?.state === 'activated' && registration?.active === navigator.serviceWorker.controller
  }, undefined, { timeout: WORKER_TIMEOUT })
  await expect.poll(async () => {
    const entries = await precacheEntries(page)
    const paths = new Set(entries.flatMap(({ url }) => {
      const parsed = new URL(url)
      return parsed.origin === server.origin ? [parsed.pathname] : []
    }))
    return server.inventory.paths.filter((path) => !paths.has(path))
  }, { timeout: WORKER_TIMEOUT, message: 'Every required file must exist in the real same-origin Workbox precache' }).toEqual([])
  await expectCounts(page, server.inventory, server.inventory.paths.length)
  await expect(offlineSection(page).getByRole('button', { name: 'Check offline files', exact: true })).toBeEnabled()
}

async function readStored(page: Page): Promise<LibrarySnapshot | undefined> {
  return page.evaluate((key) => new Promise<LibrarySnapshot | undefined>((done, reject) => {
    const opening = indexedDB.open('keyval-store')
    opening.onupgradeneeded = () => {
      opening.transaction?.abort()
      reject(new Error('The application must create its own IndexedDB store first'))
    }
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      if (!db.objectStoreNames.contains('keyval')) { db.close(); reject(new Error('Missing application object store')); return }
      const transaction = db.transaction('keyval', 'readonly')
      const request = transaction.objectStore('keyval').get(key)
      let snapshot: LibrarySnapshot | undefined
      request.onsuccess = () => { snapshot = request.result as LibrarySnapshot | undefined }
      // A successful get alone is not the end of the transaction or a persistence barrier.
      transaction.oncomplete = () => { db.close(); done(snapshot) }
      transaction.onerror = transaction.onabort = () => { db.close(); reject(transaction.error) }
    }
  }), STORAGE_KEY)
}

async function waitForStored(page: Page, select: (snapshot: LibrarySnapshot) => unknown, expected: unknown) {
  let snapshot: LibrarySnapshot | undefined
  await expect.poll(async () => {
    snapshot = await readStored(page)
    return snapshot ? select(snapshot) : undefined
  }, { message: 'Wait for the final UI change to commit to real IndexedDB', timeout: WORKER_TIMEOUT }).toEqual(expected)
  if (!snapshot) throw new Error('The final application snapshot was not committed')
  stateSchema.parse(snapshot.state)
  return snapshot
}

async function saveNickname(page: Page, name: string) {
  const preferences = page.getByRole('region', { name: 'Preferences', exact: true })
  await preferences.getByRole('textbox', { name: 'Nickname (optional)', exact: true }).fill(name)
  await preferences.getByRole('button', { name: 'Save nickname', exact: true }).click()
  await expect(preferences.getByRole('status')).toHaveText('Nickname updated.')
  return waitForStored(page, (snapshot) => snapshot.state.name, name)
}

function requiredLesson(id: string) {
  const lesson = lessonById.get(id)
  if (!lesson?.guide) throw new Error(`Expected an original illustrated lesson: ${id}`)
  return lesson
}

async function saveNote(page: Page, server: ProductionServer, note: string) {
  const lesson = requiredLesson(NOTE_LESSON)
  await page.goto(appUrl(server, `/explore?lesson=${encodeURIComponent(lesson.id)}`), { waitUntil: 'domcontentloaded' })
  const dialog = page.getByRole('dialog', { name: lesson.title, exact: true })
  await expect(dialog).toBeVisible()
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('button', { name: 'Save this bite', exact: true }).click()
  await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill(note)
  await waitForStored(page, (snapshot) => ({
    note: snapshot.state.notes[lesson.id], saved: snapshot.state.saved.includes(lesson.id), stage: snapshot.state.readerDrafts?.[lesson.id]?.stage,
  }), { note, saved: true, stage: 'try' })
  await dialog.getByRole('button', { name: 'Close lesson', exact: true }).click()
  await expect(dialog).toHaveCount(0)
  await page.getByRole('button', { name: 'Your profile and settings', exact: true }).click()
  await expectReady(page, server)
}

async function downloadUpdate(page: Page, server: ProductionServer): Promise<JSHandle<WaitingWorker>> {
  await expect(page.locator('.update-notice')).toHaveCount(0)
  await expect(offlineSection(page).getByRole('button', { name: 'Install downloaded update', exact: true })).toHaveCount(0)
  const previous = await page.evaluateHandle(() => {
    const controller = navigator.serviceWorker.controller
    if (controller?.state !== 'activated') throw new Error('An activated original controller is required')
    return controller
  })
  try {
    const revision = ++server.revision
    await offlineSection(page).getByRole('button', { name: 'Check for updates', exact: true }).click()
    await expect.poll(() => server.workerRevisions, { timeout: WORKER_TIMEOUT, message: 'The browser must fetch the revised generated worker' }).toContain(revision)
    await page.waitForFunction(async () => (await navigator.serviceWorker.getRegistration())?.waiting?.state === 'installed',
      undefined, { timeout: WORKER_TIMEOUT })
    await expect(page.locator('.update-notice[role="status"]')).toContainText('A new version is ready. Your saved data stays.')
    await expect(page.locator('.update-notice').getByRole('button', { name: 'Update app', exact: true })).toBeEnabled()
    await expect(offlineSection(page).getByRole('button', { name: 'Install downloaded update', exact: true })).toBeEnabled()
    await expect(page.getByRole('alert')).toHaveCount(0)
    return await page.evaluateHandle(async (controller) => {
      const registration = await navigator.serviceWorker.getRegistration()
      if (!registration?.waiting || registration.waiting.state !== 'installed') throw new Error('The real update must remain waiting')
      if (registration.active !== controller || navigator.serviceWorker.controller !== controller) throw new Error('The update activated without consent')
      return { controller, waiting: registration.waiting, registration, document }
    }, previous)
  } finally { await previous.dispose() }
}

async function expectStillWaiting(worker: JSHandle<WaitingWorker>) {
  expect(await worker.evaluate((original) => ({
    sameDocument: original.document === document,
    originalControls: navigator.serviceWorker.controller === original.controller,
    originalActive: original.registration.active === original.controller,
    sameWaitingWorker: original.registration.waiting === original.waiting,
    controllerState: original.controller.state,
    waitingState: original.waiting.state,
  }))).toEqual({ sameDocument: true, originalControls: true, originalActive: true, sameWaitingWorker: true,
    controllerState: 'activated', waitingState: 'installed' })
}

async function distFiles(root: string, prefix = ''): Promise<string[]> {
  const entries = await readdir(join(root, prefix), { withFileTypes: true })
  return (await Promise.all(entries.map(async (entry) => {
    const path = join(prefix, entry.name)
    if (entry.isDirectory()) return distFiles(root, path)
    return entry.isFile() ? [`/${path.replaceAll('\\', '/')}`] : []
  }))).flat()
}

async function exportBackup(page: Page) {
  const section = page.getByRole('region', { name: 'Backups and clearing data', exact: true })
  const pending = page.waitForEvent('download')
  await section.getByRole('button', { name: 'Export backup', exact: true }).click()
  const download = await pending
  expect(download.suggestedFilename()).toBe('unscroll-backup-2030-06-15.json')
  expect(await download.failure()).toBeNull()
  // Read the download stream in memory. Do not saveAs or create fixture files.
  const stream = await download.createReadStream()
  if (!stream) throw new Error('The backup download has no readable stream')
  const chunks: Buffer[] = []
  for await (const chunk of stream) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  const backup = backupSchema.parse(JSON.parse(Buffer.concat(chunks).toString('utf8')))
  await expect(section.getByRole('button', { name: 'Export backup', exact: true })).toBeEnabled()
  await expect(section.getByRole('status').filter({ hasText: 'Backup download requested.' }))
    .toHaveText('Backup download requested. Check your browser downloads before clearing any data.')
  return backup
}

test('The real offline inventory detects one missing SVG, restores readiness, and cold-loads an unseen guide offline', async ({ page, context, production }) => {
  const manifest = production.inventory
  const servedManifest = await page.evaluate(async () => {
    const response = await fetch('/offline-library.json', { cache: 'no-cache' })
    if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) throw new Error('Expected the actual JSON offline inventory')
    return response.json()
  })
  expect(offlineManifestSchema.parse(servedManifest)).toEqual(manifest)
  // The inventory excludes its own subsequently emitted file and generated worker
  // machinery, but must include every other eligible built file, not just a sample.
  const required = (await distFiles(production.root)).filter((path) =>
    /\.(?:js|css|html|svg|png|woff2?|json|txt|md|webmanifest)$/i.test(path)
    && !/^\/(?:sw\.js|workbox-[^/]+\.js|offline-library\.json)$/.test(path))
  expect([...manifest.paths].sort()).toEqual(required.sort())
  expect(manifest.paths).toEqual(expect.arrayContaining([
    '/index.html', '/manifest.webmanifest', '/boot.js', '/brand-icon.svg', '/lesson-visuals/manifest.json',
    '/icons/icon-192.png', '/icons/icon-512.png', '/icons/maskable-512.png', '/icons/apple-touch-icon.png',
    '/asset-licenses.json', '/ATTRIBUTION.md', '/licenses/UNSCROLL-MIT.txt', '/licenses/barlow-condensed-OFL.txt', '/licenses/dm-sans-OFL.txt',
  ]))
  for (const pattern of [/^\/assets\/index-[^/]+\.js$/, /^\/assets\/knowledge-[^/]+\.js$/, /^\/assets\/workbox-window[^/]+\.js$/,
    /^\/assets\/[^/]+\.css$/, /^\/assets\/[^/]+\.woff$/, /^\/assets\/[^/]+\.woff2$/]) {
    expect(manifest.paths.some((path) => pattern.test(path)), `Required offline coverage: ${pattern}`).toBe(true)
  }
  const visuals = JSON.parse(await readFile(join(production.root, 'lesson-visuals', 'manifest.json'), 'utf8')) as VisualManifest
  expect(Object.keys(visuals.assets).sort()).toEqual(lessons.map((lesson) => lesson.id).sort())
  const allVisuals = lessons.flatMap((lesson) => {
    expect(lesson.guide, `Guide for ${lesson.id}`).toBeDefined()
    expect(visuals.assets[lesson.id], `Built illustrations for ${lesson.id}`).toHaveLength(lesson.guide!.visuals.length)
    return visuals.assets[lesson.id].map((asset) => asset.src)
  })
  expect(allVisuals.length).toBeGreaterThan(0)
  expect(new Set(allVisuals).size).toBe(allVisuals.length)
  expect(manifest.paths.filter((path) => path.startsWith('/lesson-visuals/') && path.endsWith('.svg')).sort()).toEqual([...allVisuals].sort())
  expect({ lessons: manifest.lessons, diagrams: manifest.illustrations }).toEqual({ lessons: lessons.length, diagrams: allVisuals.length })
  expect({ lessons: visuals.lessons, diagrams: visuals.visualCount }).toEqual({ lessons: lessons.length, diagrams: allVisuals.length })
  const before = await saveNickname(page, 'Offline inventory keeper')
  const unseen = requiredLesson('design-001')
  const unseenAssets = visuals.assets[unseen.id]
  expect(unseenAssets.length).toBeGreaterThan(0)
  const path = unseenAssets[0].src
  const held = await page.evaluateHandle(async (missingPath) => {
    const matches: { name: string; request: Request }[] = []
    for (const name of (await caches.keys()).filter((entry) => entry.includes('workbox-precache'))) {
      for (const request of await (await caches.open(name)).keys()) {
        const url = new URL(request.url)
        if (url.origin === location.origin && url.pathname === missingPath) matches.push({ name, request })
      }
    }
    if (matches.length !== 1) throw new Error(`Expected exactly one precached SVG, found ${matches.length}`)
    const { name, request } = matches[0]
    const cache = await caches.open(name)
    const response = await cache.match(request)
    if (!response?.ok || !response.headers.get('content-type')?.includes('image/svg+xml')) throw new Error('Missing original SVG response')
    const text = await response.clone().text()
    if (!await cache.delete(request)) throw new Error('The test could not remove its selected SVG')
    // Keep the actual Request (including Workbox's revision query) and Response.
    return { name, request, response, text }
  }, path)
  try {
    await offlineSection(page).getByRole('button', { name: 'Check offline files', exact: true }).click()
    await expect(offlineSection(page).locator('.offline-state[role="status"]')).toHaveText('Preparing the offline library')
    await expectCounts(page, manifest, manifest.paths.length - 1)
    const remaining = new Set((await precacheEntries(page)).map(({ url }) => new URL(url).pathname))
    expect(manifest.paths.filter((entry) => !remaining.has(entry))).toEqual([path])
    await expect(page.getByRole('button', { name: 'Offline-ready library', exact: true })).toHaveCount(0)
    expect(await readStored(page), 'Deleting an app asset must not delete the learning library').toEqual(before)
  } finally {
    try {
      const restored = await held.evaluate(async (original) => {
        const cache = await caches.open(original.name)
        await cache.put(original.request, original.response.clone())
        const response = await cache.match(original.request)
        return { sameBytes: Boolean(response && await response.text() === original.text),
          sameKey: (await cache.keys()).some((request) => request.url === original.request.url) }
      })
      expect(restored).toEqual({ sameBytes: true, sameKey: true })
    } finally { await held.dispose() }
  }
  await offlineSection(page).getByRole('button', { name: 'Check offline files', exact: true }).click()
  await expectReady(page, production)
  expect(await readStored(page)).toEqual(before)
  for (const asset of unseenAssets) expect(production.pagePaths.has(asset.src), `${asset.src} must not be warmed by an online page request`).toBe(false)
  const discoveryRequests = production.discoveryRequests.length
  try {
    // No request interception is installed, so WebKit's native worker handles navigation.
    await context.setOffline(true)
    await page.reload({ waitUntil: 'domcontentloaded' })
    await expectReady(page, production)
    expect(await page.evaluate(() => navigator.onLine)).toBe(false)
    await expect(page.locator('.connectivity-notice[role="status"]')).toHaveText('Offline. Your downloaded library and saved ideas are here.')
    await page.goto(appUrl(production, `/explore?lesson=${encodeURIComponent(unseen.id)}`), { waitUntil: 'domcontentloaded' })
    const dialog = page.getByRole('dialog', { name: unseen.title, exact: true })
    await expect(dialog).toBeVisible()
    await expect(dialog.locator('.teaching-section > h2')).toHaveText(unseen.guide!.sections.map((section) => section.title))
    await expect(dialog.locator('.teaching-section > p')).toHaveText(unseen.body)
    const images = dialog.locator('.teaching-visual > img.teaching-image')
    await expect(images).toHaveCount(unseenAssets.length)
    for (const [index, asset] of unseenAssets.entries()) {
      const image = images.nth(index)
      await image.scrollIntoViewIfNeeded()
      await expect(image).toBeVisible()
      await expect(image).toHaveAttribute('src', asset.src)
      await expect(image).toHaveAttribute('alt', asset.alt ?? unseen.guide!.visuals[index].alt)
      expect(await image.evaluate(async (element) => {
        if (!(element instanceof HTMLImageElement)) throw new Error('Expected a native image element')
        await element.decode()
        return { complete: element.complete, path: new URL(element.currentSrc).pathname, width: element.naturalWidth, height: element.naturalHeight }
      })).toEqual({ complete: true, path: asset.src, width: asset.width, height: asset.height })
    }
    expect(production.discoveryRequests.length, 'The offline exercise must not reach the HTTP discovery endpoint').toBe(discoveryRequests)
    expect(await readStored(page)).toEqual(before)
  } finally { await context.setOffline(false) }
})

test('A real waiting update can be deferred and installed from settings without losing committed notes or profile data', async ({ page, production }) => {
  const note = 'Compare two camera positions after installing the update.'
  await saveNote(page, production, note)
  const before = await saveNickname(page, 'Saved update profile')
  const url = page.url()
  const timeOrigin = await page.evaluate(() => performance.timeOrigin)
  const worker = await downloadUpdate(page, production)
  try {
    await page.locator('.update-notice').getByRole('button', { name: 'Later', exact: true }).click()
    await expect(page.locator('.update-notice')).toHaveCount(0)
    const install = offlineSection(page).getByRole('button', { name: 'Install downloaded update', exact: true })
    await expect(install).toBeEnabled()
    await expectStillWaiting(worker)
    expect(page.url()).toBe(url)
    expect(await page.evaluate(() => performance.timeOrigin)).toBe(timeOrigin)
    await expect(page.getByRole('textbox', { name: 'Nickname (optional)', exact: true })).toHaveValue(before.state.name)
    expect(await readStored(page)).toEqual(before)
    // Observe native worker identity across the real reload. This test-owned record
    // does not replace the registration, update functions, hook state or location APIs.
    await worker.evaluate((original, key) => {
      sessionStorage.removeItem(key)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        sessionStorage.setItem(key, JSON.stringify({
          replacedController: navigator.serviceWorker.controller !== original.controller,
          downloadedWorkerControls: navigator.serviceWorker.controller === original.waiting,
          previousState: original.controller.state,
        }))
      }, { once: true })
    }, ACTIVATION_RECORD)
    await Promise.all([
      page.waitForEvent('domcontentloaded', { timeout: WORKER_TIMEOUT }),
      page.waitForRequest((request) => request.isNavigationRequest() && request.frame() === page.mainFrame(), { timeout: WORKER_TIMEOUT }),
      install.click(),
    ])
    await expectReady(page, production)
    expect(page.url()).toBe(url)
    // Fixed Date replaces performance in this browser harness. The actual document
    // request and DOMContentLoaded above prove navigation without that mocked API.
    const record = await page.evaluate((key) => sessionStorage.getItem(key), ACTIVATION_RECORD)
    if (!record) throw new Error('No native controllerchange was recorded before the reload')
    expect(JSON.parse(record)).toEqual({ replacedController: true, downloadedWorkerControls: true, previousState: 'redundant' })
    expect(await page.evaluate(async () => {
      const registration = await navigator.serviceWorker.getRegistration()
      return { scope: registration?.scope, script: registration?.active?.scriptURL,
        active: registration?.active?.state, controls: registration?.active === navigator.serviceWorker.controller,
        waiting: Boolean(registration?.waiting), installing: Boolean(registration?.installing) }
    })).toEqual({ scope: `${production.origin}/`, script: `${production.origin}/sw.js`, active: 'activated', controls: true, waiting: false, installing: false })
    await expect(page.locator('.update-notice')).toHaveCount(0)
    await expect(offlineSection(page).getByRole('button', { name: 'Install downloaded update', exact: true })).toHaveCount(0)
    await expect(offlineSection(page).locator('.build-details')).toContainText(production.inventory.build)
    await expect(page.getByRole('textbox', { name: 'Nickname (optional)', exact: true })).toHaveValue(before.state.name)
    expect(await waitForStored(page, (snapshot) => ({ name: snapshot.state.name, notes: snapshot.state.notes }),
      { name: before.state.name, notes: before.state.notes })).toEqual(before)
    await expect(page.getByRole('alert')).toHaveCount(0)
    const lesson = requiredLesson(NOTE_LESSON)
    await page.goto(appUrl(production, `/explore?lesson=${encodeURIComponent(lesson.id)}`), { waitUntil: 'domcontentloaded' })
    const dialog = page.getByRole('dialog', { name: lesson.title, exact: true })
    await expect(dialog).toBeVisible()
    await expect(dialog.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(note)
    await expect(dialog.getByRole('button', { name: 'Unsave this bite', exact: true })).toHaveAttribute('aria-pressed', 'true')
    expect(await readStored(page)).toEqual(before)
  } finally { await worker.dispose() }
})

test('An unsaved nickname blocks real worker activation and reload, while backup export retains the in-memory change', async ({ page, production }) => {
  await saveNote(page, production, 'Keep this committed note when an update is blocked.')
  const before = await saveNickname(page, 'Committed profile')
  const worker = await downloadUpdate(page, production)
  const url = page.url()
  const timeOrigin = await page.evaluate(() => performance.timeOrigin)
  let documentLoads = 0
  const observeLoad = () => { documentLoads += 1 }
  page.on('domcontentloaded', observeLoad)
  // The only injected failure is a real IndexedDB put rejection in this page's realm
  // and application store. Reads, worker storage and other origins remain untouched.
  const failure = await page.evaluateHandle((storageKey) => {
    const original = IDBObjectStore.prototype.put
    let failedWrites = 0
    IDBObjectStore.prototype.put = function (this: IDBObjectStore, value: unknown, key?: IDBValidKey) {
      if (this.transaction.db.name === 'keyval-store' && this.name === 'keyval' && key === storageKey) {
        failedWrites += 1
        throw new DOMException('Test', 'QuotaExceededError')
      }
      return key === undefined ? original.call(this, value) : original.call(this, value, key)
    }
    return { count: () => failedWrites, restore: () => { IDBObjectStore.prototype.put = original } }
  }, STORAGE_KEY)
  try {
    const name = 'In-memory backup profile'
    const preferences = page.getByRole('region', { name: 'Preferences', exact: true })
    await preferences.getByRole('textbox', { name: 'Nickname (optional)', exact: true }).fill(name)
    await preferences.getByRole('button', { name: 'Save nickname', exact: true }).click()
    await expect(page.getByRole('alert').filter({ hasText: STORAGE_ERROR })).toContainText(STORAGE_ERROR)
    expect(await failure.evaluate((probe) => probe.count()), 'The application must have attempted a real put').toBeGreaterThan(0)
    await expect(preferences.getByRole('textbox', { name: 'Nickname (optional)', exact: true })).toHaveValue(name)
    expect(await readStored(page), 'The failed write must leave the committed snapshot unchanged').toEqual(before)
    await page.locator('.update-notice').getByRole('button', { name: 'Update app', exact: true }).click()
    await expect(offlineSection(page).getByRole('alert')).toHaveText(UPDATE_ERROR)
    await expect(page.locator('.update-notice').getByRole('button', { name: 'Update app', exact: true })).toBeEnabled()
    await expect(offlineSection(page).getByRole('button', { name: 'Install downloaded update', exact: true })).toBeEnabled()
    await expectStillWaiting(worker)
    expect(page.url()).toBe(url)
    expect(await page.evaluate(() => performance.timeOrigin)).toBe(timeOrigin)
    const backup = await exportBackup(page)
    expect(backup.exportedAt).toBe(CLOCK)
    expect({ state: backup.state, discoveries: backup.discoveries }).toEqual({ ...before, state: { ...before.state, name } })
    // Check again after the awaited backup operation, not just immediately after clicking.
    expect(await readStored(page)).toEqual(before)
    await expectStillWaiting(worker)
    await expect(offlineSection(page).getByRole('alert')).toHaveText(UPDATE_ERROR)
    expect(page.url()).toBe(url)
    expect(await page.evaluate(() => performance.timeOrigin)).toBe(timeOrigin)
    expect(documentLoads, 'A failed storage flush must not navigate or reload the document').toBe(0)
  } finally {
    page.off('domcontentloaded', observeLoad)
    try { await failure.evaluate((probe) => probe.restore()) }
    finally { await failure.dispose(); await worker.dispose() }
  }
})