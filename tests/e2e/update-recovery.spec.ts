import AxeBuilder from '@axe-core/playwright'
import { test as base, expect, type Download, type Page, type Request as BrowserRequest } from '@playwright/test'
import { readFile, realpath, stat } from 'node:fs/promises'
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http'
import { extname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { learningPaths, lessonById } from '../../src/data'
import { appVersionSchema } from '../../src/lib/app-update'
import { createInitialState } from '../../src/lib/learning'
import { offlineManifestSchema, type OfflineManifest } from '../../src/lib/offline'
import { backupSchema, lessonSchema } from '../../src/lib/schema'
import { parseBackup, type LibrarySnapshot } from '../../src/lib/storage'

const DIST = fileURLToPath(new URL('../../dist/', import.meta.url))
const PUBLIC_API = fileURLToPath(new URL('../../public/api/', import.meta.url))
const WORKER_TIMEOUT = 120_000
const CLOCK = '2030-06-15T12:00:00.000Z'
const DAY = '2030-06-15'
const OLD_DAY = '2030-06-14'
const DATABASE = 'keyval-store'
const STORE = 'keyval'
const STORAGE_KEY = 'unscroll-library-v1'
const UPDATE_PATH = '/api/update.html'
const VERSION_PATH = '/api/app-version.json'
const LEGACY_CACHE = 'unscroll-recovery-legacy-shell-v1'
const RECOVERY_HEADING = 'Keep the old library. Replace only app files.'
const CONFIRMATION = 'I saved my work and closed other UNSCROLL windows.'

// The old shell deliberately has no React, storage initialization or update UI.
// Re-registering on controlled revisits would introduce an eager update into the fixture.
const LEGACY_HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Legacy app fixture</title></head>
<body><main><h1>Legacy cached app</h1></main><script>
if ('serviceWorker' in navigator && !navigator.serviceWorker.controller) {
  navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' });
}
</script></body></html>`

// Minimal old production behavior: a real precache, native install/claim, the
// same worker URL/scope, and a navigation fallback that excludes network API routes.
const LEGACY_WORKER = `const CACHE = ${JSON.stringify(LEGACY_CACHE)};
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.add('/index.html')));
});
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') event.waitUntil(self.skipWaiting());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.mode === 'navigate' && url.origin === self.location.origin
      && !/^\\/api\\//.test(url.pathname) && !/^\\/\\.netlify\\//.test(url.pathname)) {
    event.respondWith(caches.match('/index.html', { cacheName: CACHE }));
  }
});`

type AccessFailure = 401 | 403 | 'html' | null
interface HttpRequest {
  method: string
  url: string
  path: string
  body: string
  stage: 'legacy' | 'current'
  workerScript: boolean
  status: number | null
}
interface OutgoingRequest { method: string; url: string; body: string | null; resourceType: string; workerScript: boolean }
interface AuditEvent {
  kind: string
  database?: string
  mode?: IDBTransactionMode
  stores?: string[]
  oldVersion?: number
  state?: ServiceWorkerState | null
}
interface RecoveryProbe {
  events: AuditEvent[]
  initialController: ServiceWorker | null
  flush: () => Promise<void>
}
type ProbeWindow = Window & {
  __updateRecoveryProbe?: RecoveryProbe
  __reportRecoveryEvent: (event: AuditEvent) => Promise<void>
}
interface RecoveryServer {
  origin: string
  stage: 'legacy' | 'current'
  access: AccessFailure
  failedAsset: string | null
  version: ReturnType<typeof appVersionSchema.parse>
  inventory: OfflineManifest
  requests: HttpRequest[]
  outgoing: OutgoingRequest[]
  pageRequests: OutgoingRequest[]
  audit: AuditEvent[]
  canaries: string[]
  errors: string[]
}

const CONTENT_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8', '.md': 'text/markdown; charset=utf-8',
}

function inside(root: string, file: string) {
  const path = relative(root, file)
  return !isAbsolute(path) && path !== '..' && !path.startsWith(`..${sep}`)
}

function send(request: IncomingMessage, response: ServerResponse, entry: HttpRequest, status: number, type: string, body: Buffer | string) {
  const bytes = typeof body === 'string' ? Buffer.from(body, 'utf8') : body
  entry.status = status
  response.writeHead(status, {
    'Content-Type': type, 'Content-Length': bytes.byteLength,
    'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff',
  })
  response.end(request.method === 'HEAD' ? undefined : bytes)
}

async function startRecoveryServer() {
  // A freshly generated dist is a precondition. Never build, copy public files
  // over stale output, append to the current worker, or write fixture files here.
  const root = await realpath(DIST)
  const files = new Map(await Promise.all([
    'index.html', 'sw.js', 'offline-library.json', 'api/app-version.json',
    'api/update.html', 'api/update.js', 'api/update.css',
  ].map(async (name) => [name, await readFile(join(root, name))] as const)))
  for (const name of ['update.html', 'update.js', 'update.css']) {
    if (!files.get(`api/${name}`)!.equals(await readFile(join(PUBLIC_API, name)))) {
      throw new Error(`A fresh production build is required: dist/api/${name} differs from public/api/${name}`)
    }
  }
  const version = appVersionSchema.parse(JSON.parse(files.get('api/app-version.json')!.toString('utf8')))
  const inventory = offlineManifestSchema.parse(JSON.parse(files.get('offline-library.json')!.toString('utf8')))
  expect(version).toStrictEqual({ build: inventory.build, builtAt: inventory.builtAt, lessons: inventory.lessons, illustrations: inventory.illustrations })
  expect(inventory.paths.some((path) => path.startsWith('/api/')), 'The recovery route must stay outside the generated precache inventory').toBe(false)
  expect(files.get('index.html')!.toString('utf8')).not.toContain('Legacy cached app')
  const state: RecoveryServer = {
    origin: '', stage: 'legacy', access: null, failedAsset: null, version, inventory,
    requests: [], outgoing: [], pageRequests: [], audit: [], canaries: [], errors: [],
  }
  async function serve(request: IncomingMessage, response: ServerResponse, entry: HttpRequest) {
    const access = state.access
    const failedAsset = state.failedAsset
    const chunks: Buffer[] = []
    for await (const chunk of request) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
    entry.body = Buffer.concat(chunks).toString('utf8')
    const reply = (status: number, type: string, body: Buffer | string) => send(request, response, entry, status, type, body)
    let path: string
    try { path = decodeURIComponent(entry.url.split('?')[0]) }
    catch { reply(400, CONTENT_TYPES['.txt'], 'Invalid path'); return }
    // Reject traversal BEFORE URL normalization, plus drive letters, backslashes,
    // NULs, duplicate leading slashes and residual/double-encoded percent escapes.
    if (!/^\/[a-zA-Z0-9_./-]*$/.test(path) || path.startsWith('//') || path.split('/').some((part) => part === '.' || part === '..')) {
      reply(403, CONTENT_TYPES['.txt'], 'Forbidden path'); return
    }
    entry.path = path
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      response.setHeader('Allow', 'GET, HEAD')
      reply(405, CONTENT_TYPES['.txt'], 'Method not allowed'); return
    }
    // Model session expiry AFTER the recovery document was accessible. Real
    // Netlify can gate the document too; this is not a Netlify sign-in emulator.
    if (access !== null && (path === VERSION_PATH || path === '/sw.js')) {
      reply(access === 'html' ? 200 : access, CONTENT_TYPES['.html'], '<!doctype html><html lang="en"><title>Private site</title><h1>Site sign-in required</h1></html>')
      return
    }
    if (path === '/.netlify/functions/discover') {
      reply(503, CONTENT_TYPES['.json'], JSON.stringify({ date: DAY, status: 'unavailable', lessons: [], message: 'Discovery is disabled on this isolated test origin.' }))
      return
    }
    if (path === failedAsset) { reply(500, CONTENT_TYPES['.txt'], 'Selected precache asset unavailable'); return }
    if (path === '/sw.js') response.setHeader('Service-Worker-Allowed', '/')
    if (entry.stage === 'legacy' && path === '/sw.js') { reply(200, CONTENT_TYPES['.js'], LEGACY_WORKER); return }
    if (path === '/') path = '/index.html'
    if (entry.stage === 'legacy' && path === '/index.html') { reply(200, CONTENT_TYPES['.html'], LEGACY_HTML); return }
    const candidate = resolve(root, `.${path}`)
    if (!inside(root, candidate)) { reply(403, CONTENT_TYPES['.txt'], 'Forbidden path'); return }
    try {
      const file = await realpath(candidate)
      if (!inside(root, file)) { reply(403, CONTENT_TYPES['.txt'], 'Forbidden path'); return }
      if (!(await stat(file)).isFile()) { reply(404, CONTENT_TYPES['.txt'], 'Not found'); return }
      reply(200, CONTENT_TYPES[extname(path).toLowerCase()] ?? 'application/octet-stream', files.get(path.slice(1)) ?? await readFile(file))
    } catch (error) {
      const code = (error as NodeJS.ErrnoException).code
      if (code !== 'ENOENT' && code !== 'ENOTDIR') throw error
      reply(404, CONTENT_TYPES['.txt'], 'Not found')
    }
  }
  const server = createServer((request, response) => {
    const entry: HttpRequest = { method: request.method ?? '', url: request.url ?? '/', path: '', body: '', stage: state.stage,
      workerScript: request.headers['service-worker'] === 'script', status: null }
    state.requests.push(entry)
    void serve(request, response, entry).catch((error: unknown) => {
      state.errors.push(error instanceof Error ? error.message : String(error))
      if (response.headersSent) response.destroy()
      else send(request, response, entry, 500, CONTENT_TYPES['.txt'], 'Local server error')
    })
  })
  await new Promise<void>((ready, reject) => {
    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => { server.off('error', reject); ready() })
  })
  const address = server.address()
  if (!address || typeof address === 'string') { server.close(); throw new Error('Expected an ephemeral loopback TCP port') }
  state.origin = `http://127.0.0.1:${address.port}`
  return { state, close: () => new Promise<void>((closed, reject) => {
    server.close((error) => { if (error) reject(error); else closed() })
    server.closeAllConnections()
  }) }
}

async function observeRecovery(page: Page, events: AuditEvent[]) {
  await page.exposeFunction('__reportRecoveryEvent', (event: AuditEvent) => { events.push(event) })
  await page.addInitScript(({ updatePath }) => {
    if (location.pathname !== updatePath) return
    const host = window as ProbeWindow
    const pending: Promise<void>[] = []
    const probe: RecoveryProbe = { events: [], initialController: navigator.serviceWorker.controller,
      flush: async () => { await Promise.all(pending) } }
    host.__updateRecoveryProbe = probe
    const record = (event: AuditEvent) => {
      probe.events.push(event)
      pending.push(host.__reportRecoveryEvent(event).catch(() => {}))
    }
    // Observers delegate unchanged arguments/results to native APIs. No worker
    // state, lifecycle event, timer, Cache method, response or IDB value is faked.
    const open = IDBFactory.prototype.open
    IDBFactory.prototype.open = function (this: IDBFactory, ...args: Parameters<IDBFactory['open']>) {
      record({ kind: 'idb.open', database: args[0] })
      const request = Reflect.apply(open, this, args) as IDBOpenDBRequest
      request.addEventListener('upgradeneeded', (event) => {
        record({ kind: 'idb.upgrade', database: args[0], oldVersion: event.oldVersion })
        request.transaction?.addEventListener('complete', () => record({ kind: 'idb.upgrade-committed', database: args[0] }))
        request.transaction?.addEventListener('abort', () => record({ kind: 'idb.upgrade-aborted', database: args[0] }))
      })
      return request
    }
    const remove = IDBFactory.prototype.deleteDatabase
    IDBFactory.prototype.deleteDatabase = function (this: IDBFactory, ...args: Parameters<IDBFactory['deleteDatabase']>) {
      record({ kind: 'idb.delete', database: args[0] })
      return Reflect.apply(remove, this, args) as IDBOpenDBRequest
    }
    const databases = IDBFactory.prototype.databases
    if (typeof databases === 'function') {
      IDBFactory.prototype.databases = function (this: IDBFactory) {
        record({ kind: 'idb.enumerate' })
        return databases.call(this)
      }
    }
    const transaction = IDBDatabase.prototype.transaction
    IDBDatabase.prototype.transaction = function (this: IDBDatabase, ...args: Parameters<IDBDatabase['transaction']>) {
      // Do not consume a caller's iterable before the native method sees it.
      record({ kind: 'idb.transaction', database: this.name, mode: args[1] ?? 'readonly',
        stores: typeof args[0] === 'string' ? [args[0]] : Array.isArray(args[0]) ? [...args[0]] : undefined })
      return Reflect.apply(transaction, this, args) as IDBTransaction
    }
    const register = ServiceWorkerContainer.prototype.register
    ServiceWorkerContainer.prototype.register = function (this: ServiceWorkerContainer, ...args: Parameters<ServiceWorkerContainer['register']>) {
      record({ kind: 'worker.register' })
      return Reflect.apply(register, this, args) as Promise<ServiceWorkerRegistration>
    }
    const update = ServiceWorkerRegistration.prototype.update
    ServiceWorkerRegistration.prototype.update = function (this: ServiceWorkerRegistration) {
      record({ kind: 'worker.update' })
      return update.call(this)
    }
    const unregister = ServiceWorkerRegistration.prototype.unregister
    ServiceWorkerRegistration.prototype.unregister = function (this: ServiceWorkerRegistration) {
      record({ kind: 'worker.unregister' })
      return unregister.call(this)
    }
    navigator.serviceWorker.addEventListener('controllerchange', () => record({ kind: 'worker.controllerchange', state: navigator.serviceWorker.controller?.state ?? null }))
    window.addEventListener('pagehide', () => record({ kind: 'pagehide' }))
  }, { updatePath: UPDATE_PATH })
}

function requestDetails(request: BrowserRequest): OutgoingRequest {
  return { method: request.method(), url: request.url(), body: request.postData(), resourceType: request.resourceType(),
    workerScript: request.headers()['service-worker'] === 'script' }
}

function expectReadOnlyOperations(events: AuditEvent[]) {
  expect(events.filter((event) => event.kind === 'worker.unregister' || event.kind === 'idb.delete'
    || event.kind === 'idb.upgrade-committed' || (event.kind === 'idb.transaction' && event.mode !== 'readonly')),
  'The standalone page must never unregister, delete a database, commit a migration or request a writable transaction').toEqual([])
}

function expectPrivateRequests(server: RecoveryServer) {
  const safe = (request: { method: string; url: string; body: string | null }) => {
    const url = new URL(request.url, server.origin)
    const allowedQuery = [...url.searchParams].every(([key, value]) =>
      key === '__WB_REVISION__' ? /^[a-f0-9]{32}$/i.test(value) : key === 'signin' && url.pathname === UPDATE_PATH && value === '1')
    const text = `${decodeURIComponent(url.href)}\n${request.body ?? ''}`
    return url.origin === server.origin && request.method === 'GET' && !request.body && allowedQuery
      && !server.canaries.some((value) => text.includes(value))
  }
  expect(server.outgoing.filter((request) => !safe(request)), 'Browser requests must be same-origin GETs without library fields or bodies').toEqual([])
  // Server observation includes native worker precache requests not exposed by WebKit's page events.
  expect(server.requests.filter((request) => !safe(request)), 'Worker and document HTTP requests must not upload library data').toEqual([])
}

const test = base.extend<{ recovery: RecoveryServer }>({
  recovery: async ({ page, context }, use) => {
    const { state, close } = await startRecoveryServer()
    const errors: string[] = []
    const outgoing = (request: BrowserRequest) => { if (/^https?:/.test(request.url())) state.outgoing.push(requestDetails(request)) }
    const pageRequest = (request: BrowserRequest) => { if (/^https?:/.test(request.url())) state.pageRequests.push(requestDetails(request)) }
    const pageError = (error: Error) => { errors.push(error.message) }
    context.on('request', outgoing)
    page.on('request', pageRequest)
    page.on('pageerror', pageError)
    try {
      // Fix Date only. Native update checks, timeouts, activation and IO keep real time.
      await page.clock.setFixedTime(new Date(CLOCK))
      await observeRecovery(page, state.audit)
      // eslint-disable-next-line react-hooks/rules-of-hooks -- Playwright fixture continuation, not a React hook.
      await use(state)
      await page.evaluate(async () => { await (window as ProbeWindow).__updateRecoveryProbe?.flush() })
      expectReadOnlyOperations(state.audit)
      expectPrivateRequests(state)
      expect(errors, 'Uncaught page errors').toEqual([])
      expect(state.errors, 'Unexpected isolated server errors').toEqual([])
    } finally {
      context.off('request', outgoing)
      page.off('request', pageRequest)
      page.off('pageerror', pageError)
      await close()
    }
  },
})

// Inherit every configured browser/device project. No routes, stateful SW mocks,
// project skips or shared browser contexts. Full inventory assertions run only after applying.
test.use({ serviceWorkers: 'allow' })
test.describe.configure({ timeout: WORKER_TIMEOUT })

function libraryFixture(): LibrarySnapshot {
  const completed = ['cinema-001', 'design-001']
  const daily = ['money-001', 'thinking-001', 'tech-001']
  for (const id of [...completed, ...daily]) {
    if (!lessonById.get(id)?.revision) throw new Error(`The recovery fixture needs the actual original lesson ${id}`)
  }
  if (!learningPaths[0]) throw new Error('The recovery fixture needs an existing learning path')
  // Synthetic test prose in the real reference schema, not a fetched article or a teaching claim.
  const discovery = lessonSchema.parse({
    id: 'wiki-991027', category: 'cinema', topic: 'Recovery fixture', title: 'A retained recovery reference',
    hook: 'A saved reference must survive an app-file update.',
    body: ['Synthetic reference text retained in the device library for this browser test.'],
    takeaway: 'Replacing app files must keep retained references.', action: 'Compare the complete exported snapshot before and after updating.',
    kind: 'discovery', evidence: 'reference', publishedAt: OLD_DAY,
    sources: [{ title: 'Aperture', url: 'https://en.wikipedia.org/wiki/Aperture', publisher: 'Wikipedia' }],
    attribution: { author: 'Wikipedia contributors', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      historyUrl: 'https://en.wikipedia.org/w/index.php?title=Aperture&action=history' },
  })
  const snapshot: LibrarySnapshot = { state: {
    ...createInitialState('2030-06-10'), name: 'Recovery private reader', goal: 3, interests: ['cinema', 'money', 'design'],
    completed: { [completed[0]]: { date: OLD_DAY, correct: true }, [completed[1]]: { date: '2030-06-13', correct: false } },
    saved: [...completed, daily[0], discovery.id],
    notes: { [completed[0]]: 'Private recovery note: café window.\nKeep <the entire note> & its second line.',
      [completed[1]]: 'Private design note: keep the unsuccessful recall too.',
      [daily[0]]: 'Private unfinished note: compare both prices before deciding.',
      [discovery.id]: 'Private reference note: retain its source and license.' },
    reviews: { [completed[0]]: { due: DAY, interval: 1, repetitions: 0 },
      [completed[1]]: { due: '2030-06-16', interval: 3, repetitions: 1, lastReviewed: '2030-06-13' } },
    collections: [{ id: 'recovery-private-collection', name: 'Recovery private collection', lessonIds: [...completed, daily[0], discovery.id] }],
    activity: { '2030-06-13': 2, [OLD_DAY]: 1 }, delivered: [...completed, ...daily, discovery.id],
    daily: { date: DAY, ids: daily }, xp: 45, reducedMotion: true, welcomeDismissed: true,
    onboardingVersion: 1, readingSize: 'large', followedPath: learningPaths[0].id,
    readerDrafts: { [daily[0]]: { stage: 'try', choice: null, revealed: false, updatedAt: CLOCK, lessonRevision: lessonById.get(daily[0])!.revision } },
    practices: { [daily[0]]: { status: 'planned', plannedOn: OLD_DAY }, [completed[0]]: { status: 'tried', plannedOn: '2030-06-13', triedOn: OLD_DAY } },
  }, discoveries: [discovery] }
  // Validate fields, real lesson references and duplicates through the production
  // backup validator, before committing directly to idb-keyval's actual schema.
  expect(parseBackup(JSON.stringify({ app: 'UNSCROLL', version: 1, exportedAt: CLOCK, ...snapshot }), new Set(lessonById.keys()))).toStrictEqual(snapshot)
  return snapshot
}

async function seedLibrary(page: Page, server: RecoveryServer) {
  const snapshot = libraryFixture()
  server.canaries = [snapshot.state.name, ...Object.values(snapshot.state.notes), ...snapshot.state.collections.map((collection) => collection.name)]
  await page.evaluate(({ database, store, key, value }) => new Promise<void>((done, reject) => {
    const opening = indexedDB.open(database, 1)
    opening.onupgradeneeded = () => { opening.result.createObjectStore(store) }
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      const transaction = db.transaction(store, 'readwrite')
      transaction.objectStore(store).put(value, key)
      transaction.oncomplete = () => { db.close(); done() }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), { database: DATABASE, store: STORE, key: STORAGE_KEY, value: snapshot })
  expect(await readStored(page)).toStrictEqual(snapshot)
  return snapshot
}

async function readStored(page: Page): Promise<LibrarySnapshot | undefined> {
  // Only use after seeding. This reader aborts creation rather than silently
  // manufacturing a database when preservation fails. The empty-device test never calls it.
  return page.evaluate(({ database, store, key }) => new Promise<LibrarySnapshot | undefined>((done, reject) => {
    const opening = indexedDB.open(database)
    opening.onupgradeneeded = () => { opening.transaction?.abort(); reject(new Error('The seeded database disappeared')) }
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      if (!db.objectStoreNames.contains(store)) { db.close(); reject(new Error('The seeded object store disappeared')); return }
      const transaction = db.transaction(store, 'readonly')
      const request = transaction.objectStore(store).get(key)
      let value: LibrarySnapshot | undefined
      request.onsuccess = () => { value = request.result as LibrarySnapshot | undefined }
      transaction.oncomplete = () => { db.close(); done(value) }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), { database: DATABASE, store: STORE, key: STORAGE_KEY })
}

async function nativeState(page: Page) {
  return page.evaluate(async () => {
    const registration = await navigator.serviceWorker.getRegistration('/')
    return { scope: registration?.scope ?? null, controllerURL: navigator.serviceWorker.controller?.scriptURL ?? null,
      controller: navigator.serviceWorker.controller?.state ?? null, active: registration?.active?.state ?? null,
      waiting: registration?.waiting?.state ?? null, installing: registration?.installing?.state ?? null }
  })
}

async function expectNativeRegistration(page: Page, server: RecoveryServer, waiting: boolean) {
  // Read BOTH controller and registration on EVERY poll. WebKit can expose an
  // activating controller; do not compare JSHandle/wrapper identity or await ready just once.
  await expect.poll(() => nativeState(page), { timeout: WORKER_TIMEOUT, message: 'The native root registration and controller must independently settle' })
    .toEqual({ scope: `${server.origin}/`, controllerURL: `${server.origin}/sw.js`, controller: 'activated', active: 'activated',
      waiting: waiting ? 'installed' : null, installing: null })
}

async function expectLegacyCache(page: Page) {
  expect(await page.evaluate(async (name) => {
    if (!(await caches.keys()).includes(name)) return null
    const response = await caches.match('/index.html', { cacheName: name })
    return response ? { status: response.status, type: response.headers.get('content-type'), text: await response.text() } : null
  }, LEGACY_CACHE)).toStrictEqual({ status: 200, type: CONTENT_TYPES['.html'], text: LEGACY_HTML })
}

async function installLegacy(page: Page, server: RecoveryServer) {
  await page.goto(`${server.origin}/`, { waitUntil: 'load' })
  await expect(page.getByRole('heading', { name: 'Legacy cached app', exact: true })).toBeVisible()
  await expectNativeRegistration(page, server, false)
  await expectLegacyCache(page)
}

async function openRecovery(page: Page, server: RecoveryServer) {
  const response = await page.goto(`${server.origin}${UPDATE_PATH}`, { waitUntil: 'load' })
  expect(response?.status()).toBe(200)
  expect(response?.headers()['content-type']).toContain('text/html')
  await expect(page.getByRole('heading', { level: 1, name: RECOVERY_HEADING, exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Legacy cached app', exact: true })).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Check update', exact: true })).toBeEnabled()
  await expect(page.locator('#worker-status')).not.toContainText('Reading the existing root worker')
}

async function audit(page: Page) {
  return page.evaluate(async () => {
    const probe = (window as ProbeWindow).__updateRecoveryProbe
    if (!probe) throw new Error('Expected observers on the actual standalone recovery document')
    await probe.flush()
    return { events: probe.events, originalState: probe.initialController?.state ?? null }
  })
}

async function expectNoAutomaticWork(page: Page, server: RecoveryServer) {
  const observation = await audit(page)
  expect(observation.events.filter((event) => event.kind.startsWith('idb.') || ['worker.register', 'worker.update', 'worker.unregister'].includes(event.kind)),
    'Loading the standalone document may inspect registration state, but must not open storage or request an update').toEqual([])
  expect(server.requests.filter((request) => request.path === VERSION_PATH)).toEqual([])
  expect(server.pageRequests.filter((request) => new URL(request.url).pathname === '/sw.js' && request.resourceType === 'fetch' && !request.workerScript),
    'No document worker-access preflight on load').toEqual([])
  await expect(page.locator('#version-status')).toHaveText('The published version has not been checked.')
  await expect(page.locator('#latest-details')).toBeHidden()
}

async function expectVersion(page: Page, server: RecoveryServer) {
  await expect(page.locator('#latest-details')).toBeVisible()
  await expect(page.locator('#latest-build')).toHaveText(server.version.build)
  await expect(page.locator('#latest-built-at')).toHaveAttribute('datetime', server.version.builtAt)
  await expect(page.locator('#latest-lessons')).toHaveText(server.version.lessons.toLocaleString('en-US'))
  await expect(page.locator('#latest-illustrations')).toHaveText(server.version.illustrations.toLocaleString('en-US'))
}

async function checkUntilWaiting(page: Page, server: RecoveryServer) {
  await page.getByRole('button', { name: 'Check update', exact: true }).click()
  await expect(page.locator('#update-status')).toContainText('A downloaded worker is waiting.', { timeout: WORKER_TIMEOUT })
  await expect(page.getByRole('button', { name: 'Check update', exact: true })).toBeEnabled()
  await expectNativeRegistration(page, server, true)
  await expectVersion(page, server)
  await expect(page.getByRole('checkbox', { name: CONFIRMATION, exact: true })).not.toBeChecked()
  await expect(page.getByRole('button', { name: 'Apply downloaded update', exact: true })).toBeDisabled()
  const observation = await audit(page)
  expect(observation.originalState).toBe('activated')
  expect(observation.events.filter((event) => event.kind === 'worker.controllerchange')).toEqual([])
  expect(observation.events.some((event) => event.kind === 'worker.update')).toBe(true)
  expect(server.requests.some((request) => request.path === '/sw.js' && request.stage === 'current' && request.status === 200)).toBe(true)
}

async function expectRawBackup(download: Download, snapshot: LibrarySnapshot) {
  expect(download.suggestedFilename()).toBe(`unscroll-backup-${DAY}.json`)
  expect(await download.failure()).toBeNull()
  const stream = await download.createReadStream()
  if (!stream) throw new Error('The real browser download must expose a readable stream')
  const chunks: Buffer[] = []
  for await (const chunk of stream) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  const raw: unknown = JSON.parse(Buffer.concat(chunks).toString('utf8'))
  backupSchema.parse(raw)
  // Compare RAW parsed JSON, not Zod's output, so field stripping cannot hide data loss.
  expect(raw).toStrictEqual({ app: 'UNSCROLL', version: 1, exportedAt: CLOCK, ...snapshot })
}

test('A cached legacy root escapes to recovery, exports unchanged data and applies the generated worker only after confirmation', async ({ page, recovery }) => {
  await installLegacy(page, recovery)
  const snapshot = await seedLibrary(page, recovery)
  recovery.stage = 'current'
  await page.goto(`${recovery.origin}/`, { waitUntil: 'load' })
  await expect(page.getByRole('heading', { name: 'Legacy cached app', exact: true })).toBeVisible()
  await openRecovery(page, recovery)
  await expectNoAutomaticWork(page, recovery)

  const backupStart = recovery.requests.length
  const download = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Download device backup', exact: true }).click()
  await expectRawBackup(await download, snapshot)
  await expect(page.locator('#backup-status')).toContainText('Backup download requested.')
  // Assert the page's own transaction before the test reader adds another one.
  expect((await audit(page)).events.filter((event) => event.kind === 'idb.transaction'))
    .toEqual([{ kind: 'idb.transaction', database: DATABASE, mode: 'readonly', stores: [STORE] }])
  expect(await readStored(page)).toStrictEqual(snapshot)
  expectReadOnlyOperations((await audit(page)).events)
  expect(recovery.requests.slice(backupStart).filter((request) => request.path === VERSION_PATH)).toEqual([])
  await expectLegacyCache(page)

  await checkUntilWaiting(page, recovery)
  const confirmation = page.getByRole('checkbox', { name: CONFIRMATION, exact: true })
  const apply = page.getByRole('button', { name: 'Apply downloaded update', exact: true })
  await confirmation.check()
  await expect(apply).toBeEnabled()
  await confirmation.uncheck()
  await expect(apply).toBeDisabled()
  await confirmation.check()
  await expectNativeRegistration(page, recovery, true)
  expect(await readStored(page)).toStrictEqual(snapshot)
  await Promise.all([
    page.waitForEvent('domcontentloaded', { timeout: WORKER_TIMEOUT }),
    page.waitForRequest((request) => request.isNavigationRequest() && request.frame() === page.mainFrame(), { timeout: WORKER_TIMEOUT }),
    apply.click(),
  ])
  await expect(page).toHaveURL(`${recovery.origin}/#/profile?section=offline`, { timeout: WORKER_TIMEOUT })
  await expectNativeRegistration(page, recovery, false)
  await expect(page.getByRole('heading', { name: 'Your profile', exact: true })).toBeVisible()
  const offline = page.getByRole('region', { name: 'Offline library and updates', exact: true })
  await expect(offline.locator('.build-details > div').filter({ has: page.getByText('App build', { exact: true }) }).locator('dd')).toHaveText(recovery.version.build)
  await expect(offline.locator('.build-details time')).toHaveAttribute('datetime', recovery.version.builtAt)
  await expect(offline.locator('.offline-state[role="status"]')).toHaveText('Ready for offline reading', { timeout: WORKER_TIMEOUT })
  await expect(offline.getByRole('button', { name: 'Check for updates', exact: true })).toBeEnabled()
  await expect(offline.getByRole('link', { name: 'Open update recovery', exact: true })).toHaveAttribute('href', UPDATE_PATH)
  await expect(offline.getByRole('progressbar', { name: 'Offline files stored', exact: true })).toHaveAttribute('aria-valuenow', String(recovery.inventory.paths.length))
  await expect.poll(() => page.evaluate(async (required) => {
    const names = (await caches.keys()).filter((name) => name.includes('workbox-precache'))
    const requests = (await Promise.all(names.map(async (name) => (await caches.open(name)).keys()))).flat()
    const paths = new Set(requests.filter((request) => new URL(request.url).origin === location.origin).map((request) => new URL(request.url).pathname))
    return required.filter((path) => !paths.has(path))
  }, recovery.inventory.paths), { timeout: WORKER_TIMEOUT, message: 'Verify the real current precache once, including every generated lesson asset' }).toEqual([])
  await expect(page.getByRole('textbox', { name: 'Nickname (optional)', exact: true })).toHaveValue(snapshot.state.name)
  await expect(page.getByRole('radio', { name: 'Larger text', exact: true })).toBeChecked()
  const completions = page.getByRole('region', { name: 'Recent completions', exact: true })
  for (const id of Object.keys(snapshot.state.completed)) await expect(completions.getByRole('button', { name: lessonById.get(id)!.title, exact: true })).toBeVisible()
  const appDownload = page.waitForEvent('download')
  await page.getByRole('region', { name: 'Backups and clearing data', exact: true }).getByRole('button', { name: 'Export backup', exact: true }).click()
  await expectRawBackup(await appDownload, snapshot)
  expect(await readStored(page)).toStrictEqual(snapshot)
  await expectLegacyCache(page)
  await expect.poll(() => recovery.audit.filter((event) => event.kind === 'worker.controllerchange').length).toBe(1)
  // The actual document request and DOMContentLoaded above verify navigation.
  // An async exposed-function call started in pagehide can be lost at teardown.
  await expect.poll(() => recovery.requests.some((request) => request.path === '/.netlify/functions/discover' && request.status === 503)).toBe(true)
  expectPrivateRequests(recovery)
})

for (const denied of [
  { access: 401, label: 'HTTP 401', message: 'The private site returned HTTP 401.' },
  { access: 403, label: 'HTTP 403', message: 'The private site returned HTTP 403.' },
  { access: 'html', label: 'HTTP 200 sign-in HTML', message: 'The version endpoint did not return JSON.' },
] as const) {
  test(`Version access expiring as ${denied.label} blocks checking and activation without replacing the legacy controller`, async ({ page, recovery }) => {
    await installLegacy(page, recovery)
    const snapshot = await seedLibrary(page, recovery)
    await openRecovery(page, recovery)
    await expectNoAutomaticWork(page, recovery)
    // Expire only after navigation, not by pretending an unauthenticated Netlify document is public.
    recovery.stage = 'current'
    recovery.access = denied.access
    const boundary = recovery.requests.length
    await page.getByRole('button', { name: 'Check update', exact: true }).click()
    await expect(page.locator('#update-status')).toContainText(denied.message)
    await expect(page.locator('#update-status')).toHaveAttribute('data-tone', 'error')
    await expect(page.getByRole('button', { name: 'Check update', exact: true })).toBeEnabled()
    await expect(page.locator('#latest-details')).toBeHidden()
    await expect(page.locator('#latest-build')).toBeEmpty()
    await page.getByRole('checkbox', { name: CONFIRMATION, exact: true }).check()
    await expect(page.getByRole('button', { name: 'Apply downloaded update', exact: true })).toBeDisabled()
    await expectNativeRegistration(page, recovery, false)
    const observation = await audit(page)
    expect(observation.originalState).toBe('activated')
    expect(observation.events.filter((event) => ['worker.update', 'worker.register', 'worker.controllerchange'].includes(event.kind))).toEqual([])
    expect(recovery.requests.slice(boundary).filter((request) => request.path === VERSION_PATH).map((request) => request.status)).toEqual([denied.access === 'html' ? 200 : denied.access])
    expect(recovery.requests.slice(boundary).filter((request) => request.path === '/sw.js' && !request.workerScript), 'A rejected version must not reach the document worker preflight').toEqual([])
    const retry = page.getByRole('link', { name: 'Sign in and retry', exact: true })
    await expect(retry).toHaveAttribute('href', `${UPDATE_PATH}?signin=1`)
    await expect(retry).toHaveAttribute('target', '_top')
    await expect(retry).toHaveAttribute('referrerpolicy', 'no-referrer')
    // Exercise the network retry link, not an external account login or a route abort.
    await retry.click()
    await expect(page).toHaveURL(`${recovery.origin}${UPDATE_PATH}?signin=1`)
    await expect(page.getByRole('heading', { name: RECOVERY_HEADING, exact: true })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Check update', exact: true })).toBeEnabled()
    await expect(page.locator('#version-status')).toHaveText('The published version has not been checked.')
    expect(recovery.requests.filter((request) => request.path === VERSION_PATH)).toHaveLength(1)
    await audit(page)
    expect(recovery.audit.filter((event) => ['worker.update', 'worker.register', 'worker.controllerchange'].includes(event.kind)),
      'Opening the sign-in retry page still requires a separate explicit check').toEqual([])
    await expectNativeRegistration(page, recovery, false)
    expect(await readStored(page)).toStrictEqual(snapshot)
    await expectLegacyCache(page)
  })
}

test('One failed precache SVG leaves the legacy library intact and a fresh check succeeds after the asset is restored', async ({ page, recovery }) => {
  await installLegacy(page, recovery)
  const snapshot = await seedLibrary(page, recovery)
  await openRecovery(page, recovery)
  const asset = recovery.inventory.paths.find((path) => path.startsWith('/lesson-visuals/') && path.endsWith('.svg'))
  if (!asset) throw new Error('The generated inventory must contain an actual lesson SVG')
  recovery.stage = 'current'
  recovery.failedAsset = asset
  await page.getByRole('button', { name: 'Check update', exact: true }).click()
  await expect.poll(() => recovery.requests.some((request) => request.path === asset && request.status === 500), { timeout: WORKER_TIMEOUT }).toBe(true)
  await expect(page.locator('#update-status')).toHaveAttribute('data-tone', 'error', { timeout: WORKER_TIMEOUT })
  await expect(page.locator('#update-status')).toContainText(/became redundant|could not finish/)
  await expect(page.getByRole('button', { name: 'Check update', exact: true })).toBeEnabled()
  await expect(page.locator('#latest-details')).toBeHidden()
  await expectNativeRegistration(page, recovery, false)
  await page.getByRole('checkbox', { name: CONFIRMATION, exact: true }).check()
  await expect(page.getByRole('button', { name: 'Apply downloaded update', exact: true })).toBeDisabled()
  expect((await audit(page)).originalState).toBe('activated')
  expect(await readStored(page)).toStrictEqual(snapshot)
  await expectLegacyCache(page)

  const retryStart = recovery.requests.length
  recovery.failedAsset = null
  await checkUntilWaiting(page, recovery)
  expect(recovery.requests.slice(retryStart).some((request) => request.path === asset && request.status === 200)).toBe(true)
  await page.getByRole('checkbox', { name: CONFIRMATION, exact: true }).check()
  await expect(page.getByRole('button', { name: 'Apply downloaded update', exact: true })).toBeEnabled()
  // Successful download is not consent. Leave the actual new worker waiting.
  await expectNativeRegistration(page, recovery, true)
  expect(await readStored(page)).toStrictEqual(snapshot)
  await expectLegacyCache(page)
})

test('An empty device backup reports no library without creating a database, downloading a file or installing a worker', async ({ page, recovery }) => {
  recovery.stage = 'current'
  await openRecovery(page, recovery)
  await expectNoAutomaticWork(page, recovery)
  const enumerate = () => page.evaluate(async () => {
    if (typeof indexedDB.databases !== 'function') return null
    try { return (await indexedDB.databases()).map((database) => database.name).sort() }
    catch { return null } // Enumeration is optional; absence is otherwise proved by the native aborted creation.
  })
  const before = await enumerate()
  if (before !== null) expect(before).not.toContain(DATABASE)
  const downloads: Download[] = []
  const onDownload = (download: Download) => { downloads.push(download) }
  page.on('download', onDownload)
  try {
    await page.getByRole('button', { name: 'Download device backup', exact: true }).click()
    await expect(page.locator('#backup-status')).toContainText('No persisted UNSCROLL library was found in this browser.')
    await expect(page.getByRole('button', { name: 'Download device backup', exact: true })).toBeEnabled()
    const after = await enumerate()
    if (before !== null) expect(after).toStrictEqual(before)
    else {
      // On engines without enumeration, observe the PAGE's real guarded open.
      // Never open a missing database in the assertion to try to prove absence.
      await expect.poll(async () => (await audit(page)).events.some((event) => event.kind === 'idb.upgrade-aborted' && event.database === DATABASE)).toBe(true)
      expect((await audit(page)).events).toContainEqual({ kind: 'idb.upgrade', database: DATABASE, oldVersion: 0 })
    }
    expectReadOnlyOperations((await audit(page)).events)
    expect(downloads).toEqual([])
    expect(await nativeState(page)).toEqual({ scope: null, controllerURL: null, controller: null, active: null, waiting: null, installing: null })
    expect(await page.evaluate(() => caches.keys())).toEqual([])
    expect(recovery.requests.filter((request) => request.path === VERSION_PATH || request.path === '/sw.js')).toEqual([])
  } finally { page.off('download', onDownload) }
})

test('Loading recovery over a populated legacy origin only inspects registration and sends no version preflight or private library data', async ({ page, recovery }) => {
  await installLegacy(page, recovery)
  const snapshot = await seedLibrary(page, recovery)
  recovery.stage = 'current'
  const boundary = recovery.requests.length
  await openRecovery(page, recovery)
  await expectNoAutomaticWork(page, recovery)
  const observation = await audit(page)
  expect(observation.originalState).toBe('activated')
  expect(observation.events.filter((event) => event.kind === 'worker.controllerchange')).toEqual([])
  await expect(page.locator('script[src]')).toHaveCount(1)
  await expect(page.locator('script[src]')).toHaveAttribute('src', '/api/update.js')
  await expect(page.locator('#backup-status')).toHaveText('No library data is read or exported until you choose this button.')
  await expect(page.getByRole('button', { name: 'Apply downloaded update', exact: true })).toBeDisabled()
  const apiRequests = recovery.requests.slice(boundary).filter((request) => request.path.startsWith('/api/'))
  expect(apiRequests.map((request) => request.path).sort()).toEqual(['/api/update.css', '/api/update.html', '/api/update.js'])
  // Browsers may schedule their own soft update on navigation. The guard above
  // distinguishes that native script request from a page-initiated preflight/update().
  expect(recovery.requests.slice(boundary).filter((request) => request.path === '/sw.js' && !request.workerScript)).toEqual([])
  expect(await readStored(page)).toStrictEqual(snapshot)
  await expectLegacyCache(page)
  expectPrivateRequests(recovery)
})

test('Recovery controls fit a 320px viewport, work from the keyboard and pass the WCAG A/AA axe checks', async ({ page, recovery }) => {
  await page.setViewportSize({ width: 320, height: 844 })
  recovery.stage = 'current'
  await openRecovery(page, recovery)
  const check = page.getByRole('button', { name: 'Check update', exact: true })
  const backup = page.getByRole('button', { name: 'Download device backup', exact: true })
  const apply = page.getByRole('button', { name: 'Apply downloaded update', exact: true })
  const confirmation = page.getByRole('checkbox', { name: CONFIRMATION, exact: true })
  const retry = page.getByRole('link', { name: 'Sign in and retry', exact: true })
  await expect(backup).toBeEnabled()
  await expect(confirmation).toBeEnabled()
  await expect(apply).toBeDisabled()
  // Explicit zero tab stops keep recovery links reachable in Safari as well.
  const tab = 'Tab'
  await page.keyboard.press(tab)
  await expect(page.getByRole('link', { name: 'Skip to update controls', exact: true })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  await check.focus()
  await page.keyboard.press(tab)
  await expect(retry).toBeFocused()
  await page.keyboard.press(tab)
  await expect(confirmation).toBeFocused()
  await page.keyboard.press('Space')
  await expect(confirmation).toBeChecked()
  await expect(apply).toBeDisabled()
  await page.keyboard.press('Space')
  await expect(confirmation).not.toBeChecked()
  await page.keyboard.press(tab)
  await expect(backup).toBeFocused()
  for (const control of [check, backup, apply, retry, page.locator('label[for="saved-work"]')]) {
    await control.scrollIntoViewIfNeeded()
    const box = await control.boundingBox()
    if (!box) throw new Error('A recovery control has no visible bounds')
    expect(box.height).toBeGreaterThanOrEqual(44)
    expect(box.width).toBeGreaterThan(0)
    expect(box.x).toBeGreaterThanOrEqual(-1)
    expect(box.x + box.width).toBeLessThanOrEqual(321)
  }
  expect(await page.evaluate(() => ({ viewport: innerWidth, overflow: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) > document.documentElement.clientWidth })))
    .toEqual({ viewport: 320, overflow: false })
  const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  expect(result.violations, 'No exclusions from the standalone document accessibility scan').toEqual([])
})