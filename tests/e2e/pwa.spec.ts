import { test as base, expect, type Locator, type Page } from '@playwright/test'
import { lessonById, lessons } from '../../src/data'
import { editionSchema } from '../../src/lib/schema'
import type { LibrarySnapshot } from '../../src/lib/storage'
import type { DiscoveryEdition, Lesson } from '../../src/types'

const FALLBACK_URL = 'http://localhost:4173'
const CLOCK = '2030-06-15T18:25:00.000Z'
const DAY = '2030-06-15'

// Kept inline so this spec can run independently of the service-worker-blocked app spec.
const EDITION: DiscoveryEdition = {
  date: DAY, status: 'fresh',
  lessons: [
    {
      id: 'wiki-990001', category: 'cinema', topic: 'Fixture references',
      title: 'Fixture reference: Aperture', hook: 'A deterministic reference for offline browser tests.',
      body: ['This synthetic aperture reference tests offline retention without downloading an external article.'],
      takeaway: 'Keep the source and attribution with a saved reference.',
      action: 'Write one question to investigate when a connection returns.',
      kind: 'discovery', evidence: 'reference', publishedAt: DAY,
      sources: [{ title: 'Aperture', url: 'https://en.wikipedia.org/wiki/Aperture', publisher: 'Wikipedia' }],
      attribution: {
        author: 'Wikipedia contributors', license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
        historyUrl: 'https://en.wikipedia.org/w/index.php?title=Aperture&action=history',
      },
    },
    {
      id: 'wiki-990002', category: 'mind', topic: 'Fixture references',
      title: 'Fixture reference: Spaced repetition', hook: 'A second deterministic offline reference.',
      body: ['This synthetic reference makes the downloaded edition distinct from the original lesson library.'],
      takeaway: 'Downloaded references must remain distinguishable from original lessons.',
      action: 'Note a question for a later source check.',
      kind: 'discovery', evidence: 'reference', publishedAt: DAY,
      sources: [{ title: 'Spaced repetition', url: 'https://en.wikipedia.org/wiki/Spaced_repetition', publisher: 'Wikipedia' }],
      attribution: {
        author: 'Wikipedia contributors', license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
        historyUrl: 'https://en.wikipedia.org/w/index.php?title=Spaced_repetition&action=history',
      },
    },
  ],
}

interface TeachingAsset {
  src: string
  width: number
  height: number
  alt?: string
}

interface NetworkState {
  offline: boolean
  fixtureResponses: number
  registrationModuleRequests: number
  externalRequests: string[]
}

const test = base.extend<{ network: NetworkState }>({
  network: [async ({ context, baseURL }, use) => {
    const origin = new URL(baseURL ?? FALLBACK_URL).origin
    const network: NetworkState = { offline: false, fixtureResponses: 0, registrationModuleRequests: 0, externalRequests: [] }
    const fixture = JSON.stringify(editionSchema.parse(EDITION))
    let releaseRegistration!: () => void
    const editionDelivered = new Promise<void>((resolve) => { releaseRegistration = resolve })
    await context.route('**/*', async (route) => {
      const request = route.request()
      const url = new URL(request.url())
      if (url.origin !== origin) {
        network.externalRequests.push(request.url())
        await route.abort('blockedbyclient')
      } else if (network.offline) {
        // A fulfilled route can bypass setOffline(). Never serve fixtures or missed assets offline.
        // Requests answered by the real service worker do not reach this route.
        await route.abort('internetdisconnected')
      } else if (url.pathname === '/.netlify/functions/discover') {
        expect(request.method()).toBe('GET')
        expect(request.postData()).toBeNull()
        expect(url.search).toBe('')
        network.fixtureResponses += 1
        await route.fulfill({ status: 200, contentType: 'application/json', body: fixture })
        releaseRegistration()
      } else if (/\/assets\/workbox-window[^/]*\.js$/.test(url.pathname)) {
        // Route the real lazy registration module, without changing its bytes or mocking browser APIs.
        // WebKit cannot route a worker-owned fetch. Keep the first discovery request uncontrolled,
        // then let the unmodified production worker register, precache, and take control normally.
        network.registrationModuleRequests += 1
        await editionDelivered
        await route.continue()
      } else {
        await route.continue()
      }
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Playwright's fixture callback, not a React hook.
    try { await use(network) }
    finally { releaseRegistration() }
    expect(network.externalRequests, 'PWA tests must not fetch external sources').toEqual([])
  }, { auto: true }],
})

test.use({ serviceWorkers: 'allow', timezoneId: 'Asia/Kolkata', locale: 'en-US' })
test.beforeEach(async ({ page }) => {
  await page.clock.setFixedTime(new Date(CLOCK))
})

function appUrl(fragment = '/today') {
  const url = new URL('/', test.info().project.use.baseURL ?? FALLBACK_URL)
  url.hash = fragment
  return url.href
}

async function readStored(page: Page): Promise<LibrarySnapshot | undefined> {
  return page.evaluate(() => new Promise<LibrarySnapshot | undefined>((resolve, reject) => {
    const opening = indexedDB.open('keyval-store')
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      if (!db.objectStoreNames.contains('keyval')) {
        db.close()
        reject(new Error('The application has not created its IndexedDB store'))
        return
      }
      const transaction = db.transaction('keyval', 'readonly')
      const request = transaction.objectStore('keyval').get('unscroll-library-v1')
      let snapshot: LibrarySnapshot | undefined
      request.onsuccess = () => { snapshot = request.result as LibrarySnapshot | undefined }
      transaction.oncomplete = () => { db.close(); resolve(snapshot) }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }))
}

async function openApp(page: Page, network: NetworkState) {
  await page.goto(appUrl())
  await expect(page.getByRole('heading', { level: 1, name: /LESS SCROLL\./ })).toBeVisible()
  await expect(page.locator('.daily-lineup .lesson-card-main')).toHaveCount(5)
  await expect(page.locator('.discovery-grid .lesson-card-main h3')).toHaveText(EDITION.lessons.map((lesson) => lesson.title))
  await expect.poll(async () => (await readStored(page))?.discoveries).toEqual(EDITION.lessons)
  expect(network.fixtureResponses, 'A fresh context must receive the routed edition before the offline exercise').toBeGreaterThan(0)
  await expect.poll(() => network.registrationModuleRequests, {
    message: 'The production build must retain its lazy workbox-window registration module',
  }).toBeGreaterThan(0)
}

async function readVisualAssets(): Promise<Record<string, TeachingAsset[]>> {
  const { default: assets } = await import('../../src/teaching/visual-assets.json', { with: { type: 'json' } })
  return assets
}

async function waitForPrecache(page: Page) {
  const assets = await readVisualAssets()
  expect(Object.keys(assets).sort(), 'Every original lesson must have a visual manifest entry')
    .toEqual(lessons.map((lesson) => lesson.id).sort())
  const visualPaths = lessons.flatMap((lesson) => {
    expect(lesson.guide, `Teaching guide for ${lesson.id}`).toBeDefined()
    expect(assets[lesson.id], `Manifest diagrams for ${lesson.id}`).toHaveLength(lesson.guide!.visuals.length)
    return assets[lesson.id].map((asset) => asset.src)
  }).sort()
  expect(visualPaths.length, 'The visual precache assertion must not be empty').toBeGreaterThan(0)
  expect(new Set(visualPaths).size, 'Each manifest diagram must have its own asset URL').toBe(visualPaths.length)
  // clientsClaim is part of the production PWA configuration. Do not skip WebKit here.
  await page.waitForFunction(() => navigator.serviceWorker?.controller?.state === 'activated', undefined, { timeout: 45_000 })
  const state = await page.evaluate(async () => (await navigator.serviceWorker.ready).active?.state)
  expect(state).toBe('activated')
  await expect.poll(async () => page.evaluate(async () => {
    const names = (await caches.keys()).filter((name) => name.includes('workbox-precache'))
    const requests = (await Promise.all(names.map(async (name) => (await caches.open(name)).keys()))).flat()
    const paths = requests.map((request) => new URL(request.url).pathname)
    return {
      shell: paths.includes('/index.html'),
      knowledge: paths.some((path) => /\/assets\/knowledge-[^/]+\.js$/.test(path)),
      entry: paths.some((path) => /\/assets\/index-[^/]+\.js$/.test(path)),
      css: paths.some((path) => path.endsWith('.css')),
      fonts: paths.some((path) => path.endsWith('.woff2')),
      icon192: paths.includes('/icons/icon-192.png'),
      icon512: paths.includes('/icons/icon-512.png'),
      maskable: paths.includes('/icons/maskable-512.png'),
      visualManifest: paths.includes('/lesson-visuals/manifest.json'),
      visuals: paths.filter((path) => path.startsWith('/lesson-visuals/') && path.endsWith('.svg')).sort(),
    }
  }), { message: `Wait for the actual production shell, knowledge chunk, fonts, CSS, icons, and all ${visualPaths.length} manifest diagrams in Cache Storage`, timeout: 45_000 })
    .toEqual({ shell: true, knowledge: true, entry: true, css: true, fonts: true, icon192: true, icon512: true, maskable: true,
      visualManifest: true, visuals: visualPaths })
}

async function expectReaderBody(dialog: Locator, lesson: Lesson) {
  const selector = lesson.kind === 'discovery' ? '.reader-prose > p' : '.teaching-section > p'
  await expect(dialog.locator(selector)).toHaveText(lesson.body)
}

async function expectOfflineIllustrations(dialog: Locator, lesson: Lesson) {
  expect(await dialog.page().evaluate(() => navigator.onLine)).toBe(false)
  expect(await dialog.page().evaluate(() => navigator.serviceWorker.controller?.state)).toBe('activated')
  expect(lesson.guide, `Illustrated teaching for ${lesson.id}`).toBeDefined()
  const assets = (await readVisualAssets())[lesson.id]
  expect(assets).toHaveLength(lesson.guide!.visuals.length)
  expect(assets.length).toBeGreaterThan(0)
  // Exclude the duplicate images inside the closed enlargement dialogs.
  const images = dialog.locator('.teaching-visual > img.teaching-image')
  await expect(images).toHaveCount(assets.length)
  for (const [index, asset] of assets.entries()) {
    const image = images.nth(index)
    await image.scrollIntoViewIfNeeded()
    await expect(image).toBeVisible()
    await expect(image).toHaveAttribute('src', asset.src)
    await expect(image).toHaveAttribute('alt', asset.alt ?? lesson.guide!.visuals[index].alt)
    const decoded = await image.evaluate(async (element) => {
      if (!(element instanceof HTMLImageElement)) throw new Error('Expected a real lesson image')
      await element.decode()
      return { complete: element.complete, src: new URL(element.currentSrc).pathname,
        width: element.naturalWidth, height: element.naturalHeight }
    })
    expect(decoded, `Offline decoding of ${asset.src}`).toEqual({ complete: true, src: asset.src, width: asset.width, height: asset.height })
  }
}

async function openReader(page: Page, lesson: Lesson) {
  await page.goto(appUrl(`/explore?lesson=${encodeURIComponent(lesson.id)}`))
  const dialog = page.getByRole('dialog', { name: lesson.title, exact: true })
  await expect(dialog).toBeVisible()
  await dialog.getByRole('navigation', { name: 'Lesson stages' }).getByRole('button', { name: /Understand$/ }).click()
  await expectReaderBody(dialog, lesson)
  return dialog
}

async function closeReader(page: Page) {
  await page.getByRole('dialog').getByRole('button', { name: 'Close lesson', exact: true }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
}

async function navigate(page: Page, screen: 'today' | 'explore' | 'vault' | 'review' | 'profile') {
  const link = page.locator('nav[aria-label="Main navigation"]:visible').locator(`a[href="#/${screen}"]`)
  await link.click()
  await expect(link).toHaveAttribute('aria-current', 'page')
  await expect(page.locator('main#main')).toBeVisible()
}

test('The installed worker cold-reloads offline with all 544 original lessons, saved discoveries, and notes', async ({ page, context, network }) => {
  test.setTimeout(180_000)
  const onlineVisualRequests = new Set<string>()
  // Page requests exclude the worker's own precache fetches. Detect accidental online warming.
  page.on('request', (request) => {
    const path = new URL(request.url()).pathname
    if (!network.offline && path.startsWith('/lesson-visuals/')) onlineVisualRequests.add(path)
  })
  await openApp(page, network)
  expect(lessons).toHaveLength(544)
  const original = lessonById.get('cinema-001')!
  const unopened = lessonById.get('design-001')!
  expect(original.revision, 'Drafts must carry the current lesson content revision').toBeTruthy()
  expect(unopened.category).not.toBe(original.category)
  const discovery = EDITION.lessons[0]
  const notes = {
    [original.id]: 'Offline camera experiment: compare both recordings.',
    [discovery.id]: 'Offline reference note: check the attributed article later.',
  }
  for (const lesson of [original, discovery]) {
    const dialog = await openReader(page, lesson)
    await dialog.getByRole('button', { name: 'Save this bite', exact: true }).click()
    await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
    await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill(notes[lesson.id])
    await closeReader(page)
  }
  await expect.poll(async () => {
    const snapshot = await readStored(page)
    return snapshot ? { version: snapshot.state.version, notes: snapshot.state.notes, saved: snapshot.state.saved,
      readerDrafts: snapshot.state.readerDrafts } : undefined
  }).toEqual({ version: 1, notes, saved: [original.id, discovery.id], readerDrafts: {
    [original.id]: { stage: 'try', choice: null, revealed: false, updatedAt: CLOCK, lessonRevision: original.revision },
    [discovery.id]: { stage: 'try', choice: null, revealed: false, updatedAt: CLOCK },
  } })
  await navigate(page, 'today')
  await waitForPrecache(page)
  const beforeOffline = await readStored(page)
  expect(beforeOffline).toBeDefined()
  expect(beforeOffline!.state.readerDrafts).not.toHaveProperty(unopened.id)
  const unopenedAssets = (await readVisualAssets())[unopened.id]
  expect(unopenedAssets).toHaveLength(unopened.guide!.visuals.length)
  for (const asset of unopenedAssets) {
    expect(onlineVisualRequests.has(asset.src), `${asset.src} must not have been opened online`).toBe(false)
  }
  const onlineFixtureResponses = network.fixtureResponses
  network.offline = true
  // End DevTools interception before exercising the real offline network stack.
  // WebKit intercepts document requests before the worker and an abort there
  // blocks a cached navigation. Native offline mode still forbids network IO.
  await context.unrouteAll({ behavior: 'wait' })
  await context.setOffline(true)
  await page.reload({ waitUntil: 'domcontentloaded' })
  await expect(page.getByRole('heading', { level: 1, name: /LESS SCROLL\./ })).toBeVisible()
  await expect(page.locator('.connectivity-notice')).toHaveText('Offline. Your downloaded library and saved ideas are here.')
  expect(await page.evaluate(() => navigator.onLine)).toBe(false)
  await expect(page.locator('.daily-lineup .lesson-card-main')).toHaveCount(5)
  expect(await readStored(page)).toEqual(beforeOffline)

  await navigate(page, 'vault')
  await expect(page.getByRole('button', { name: 'Saved (2)', exact: true })).toBeVisible()
  await expect(page.locator('main .lesson-card-main h3')).toHaveText([discovery.title, original.title])
  await page.getByRole('button', { name: 'Notes (2)', exact: true }).click()
  await expect(page.locator('main .lesson-card-main h3')).toHaveText([original.title, discovery.title])
  for (const note of Object.values(notes)) await expect(page.getByText(note, { exact: true })).toBeVisible()
  await page.reload({ waitUntil: 'domcontentloaded' })
  await expect(page.getByRole('button', { name: 'Notes (2)', exact: true })).toHaveAttribute('aria-pressed', 'true')
  for (const note of Object.values(notes)) await expect(page.getByText(note, { exact: true })).toBeVisible()
  const savedReference = await openReader(page, discovery)
  await expect(savedReference.getByRole('button', { name: 'Unsave this bite', exact: true })).toBeVisible()
  await savedReference.locator('.sources > summary').click()
  await expect(savedReference.locator('.attribution')).toContainText('Wikipedia contributors')
  await expect(savedReference.getByRole('link', { name: 'CC BY-SA 4.0', exact: true })).toHaveAttribute('href', discovery.attribution!.licenseUrl)
  const history = savedReference.getByRole('link', { name: 'Article history and authors', exact: true })
  await expect(history).toHaveAttribute('href', discovery.attribution!.historyUrl)
  await expect(history).toHaveAttribute('target', '_blank')
  await expect(history).toHaveAttribute('rel', /noopener noreferrer/)
  await savedReference.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await expect(savedReference.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(notes[discovery.id])
  await closeReader(page)

  await navigate(page, 'explore')
  const catalog = [...lessons, ...EDITION.lessons]
  const pages = Math.ceil(catalog.length / 12)
  const seen: string[] = []
  await expect(page.locator('.explore-results .section-heading [role="status"]')).toHaveText(`${catalog.length} bites`)
  // One paginated sweep proves the entire original library is present offline.
  for (let index = 0; index < pages; index += 1) {
    const titles = page.locator('.explore-results .lesson-card-main h3')
    const expected = catalog.slice(index * 12, (index + 1) * 12).map((lesson) => lesson.title)
    await expect(titles).toHaveText(expected)
    seen.push(...await titles.allTextContents())
    const pagination = page.getByRole('navigation', { name: 'Lesson pages', exact: true })
    await expect(pagination).toContainText(`${index + 1} / ${pages}`)
    const next = pagination.getByRole('button', { name: 'Next', exact: true })
    if (index < pages - 1) await next.click()
    else await expect(next).toBeDisabled()
  }
  expect(seen).toEqual(catalog.map((lesson) => lesson.title))
  expect(seen.slice(0, lessons.length)).toEqual(lessons.map((lesson) => lesson.title))
  expect(new Set(seen).size).toBe(catalog.length)
  await page.reload({ waitUntil: 'domcontentloaded' })
  await expect(page.locator('.explore-results .lesson-card-main h3')).toHaveText(catalog.slice((pages - 1) * 12).map((lesson) => lesson.title))
  await openReader(page, original)
  await page.reload({ waitUntil: 'domcontentloaded' })
  const originalDialog = page.getByRole('dialog', { name: original.title, exact: true })
  await expect(originalDialog).toBeVisible()
  await expectReaderBody(originalDialog, original)
  await expect(originalDialog.locator('.resume-notice')).toContainText('Your unfinished bite is restored. No completion was recorded.')
  await expect(originalDialog.getByRole('button', { name: 'Unsave this bite', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expectOfflineIllustrations(originalDialog, original)
  await originalDialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await expect(originalDialog.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(notes[original.id])
  await closeReader(page)

  // First open in a different category, with no stage change or extra draft write.
  await page.goto(appUrl(`/explore?lesson=${encodeURIComponent(unopened.id)}`))
  const unopenedDialog = page.getByRole('dialog', { name: unopened.title, exact: true })
  await expect(unopenedDialog).toBeVisible()
  await expect(unopenedDialog.getByRole('navigation', { name: 'Lesson stages' }).getByRole('button', { name: /Understand$/ }))
    .toHaveAttribute('aria-current', 'step')
  await expect(unopenedDialog.locator('.resume-notice')).toHaveCount(0)
  await expectReaderBody(unopenedDialog, unopened)
  await expectOfflineIllustrations(unopenedDialog, unopened)
  await closeReader(page)
  await navigate(page, 'review')
  await expect(page.getByRole('heading', { level: 1, name: /DON’T JUST READ IT\./ })).toBeVisible()
  await navigate(page, 'profile')
  await expect(page.getByRole('heading', { name: 'Your profile', exact: true })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Export backup', exact: true })).toBeEnabled()
  expect(await readStored(page)).toEqual(beforeOffline)
  expect(network.fixtureResponses, 'No offline response may come from the test fixture').toBe(onlineFixtureResponses)
})

interface AppManifest {
  id: string
  name: string
  short_name: string
  start_url: string
  scope: string
  display: string
  icons: { src: string; sizes: string; type: string; purpose?: string }[]
}

test('The production manifest names UNSCROLL and serves decodable 192px, 512px, and maskable PNG icons', async ({ page, network }) => {
  await openApp(page, network)
  const manifestLink = page.locator('link[rel="manifest"]')
  await expect(manifestLink).toHaveCount(1)
  const href = await manifestLink.getAttribute('href')
  expect(href).toBeTruthy()
  const manifestUrl = new URL(href!, page.url()).href
  const manifest = await page.evaluate(async (url) => {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Manifest fetch failed: ${response.status}`)
    return await response.json() as AppManifest
  }, manifestUrl)
  expect(manifest.name).toBe('UNSCROLL - A little wiser')
  expect(manifest.short_name).toBe('UNSCROLL')
  expect(manifest.id).toBe('/')
  expect(manifest.start_url).toBe('/#/today')
  expect(manifest.scope).toBe('/')
  expect(manifest.display).toBe('standalone')
  expect(manifest.icons).toEqual(expect.arrayContaining([
    expect.objectContaining({ src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' }),
    expect.objectContaining({ src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' }),
    expect.objectContaining({ src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }),
  ]))
  expect(manifest.icons).toHaveLength(3)

  const decoded = await page.evaluate(async ({ icons, baseUrl }) => {
    return Promise.all(icons.map(async (icon) => {
      const response = await fetch(new URL(icon.src, baseUrl))
      if (!response.ok) throw new Error(`Icon fetch failed: ${icon.src} (${response.status})`)
      const bytes = new Uint8Array(await response.arrayBuffer())
      const objectUrl = URL.createObjectURL(new Blob([bytes], { type: 'image/png' }))
      try {
        const image = new Image()
        image.src = objectUrl
        await image.decode()
        return { src: icon.src, contentType: response.headers.get('content-type'), signature: Array.from(bytes.slice(0, 8)),
          width: image.naturalWidth, height: image.naturalHeight }
      } finally { URL.revokeObjectURL(objectUrl) }
    }))
  }, { icons: manifest.icons, baseUrl: manifestUrl })
  for (const icon of decoded) {
    const size = icon.src.endsWith('icon-192.png') ? 192 : 512
    expect(icon.contentType).toContain('image/png')
    expect(icon.signature).toEqual([137, 80, 78, 71, 13, 10, 26, 10])
    expect({ width: icon.width, height: icon.height }, icon.src).toEqual({ width: size, height: size })
  }
  await navigate(page, 'profile')
  await expect(page.getByRole('region', { name: 'Install UNSCROLL', exact: true })).toContainText('Original lessons work offline after the app has loaded and cached its files.')
  // Browser-native install prompts are not synthesized. Manifest and real offline operation are asserted above.
})