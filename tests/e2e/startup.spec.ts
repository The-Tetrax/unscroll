import { test as base, expect, type Locator, type Page, type TestInfo } from '@playwright/test'
import type { LibrarySnapshot } from '../../src/lib/storage'

const CLOCK = '2030-06-15T10:00:00.000Z'
const ENTRY_PATH = /^\/assets\/index-[^/]+\.js$/
const DISCOVER_PATH = '/.netlify/functions/discover'
const OPENING = 'Opening the illustrated library...'
const SLOW = 'The app is taking longer to open. On the first visit, keep your connection on while the library downloads.'

interface StartupNetwork {
  origin: string
  abortedEntries: Set<string>
  finishedPaths: Set<string>
}

const test = base.extend<{ network: StartupNetwork }>({
  network: async ({ context, page, baseURL }, use, info) => {
    const origin = new URL(baseURL ?? 'http://localhost:4173').origin
    expect(new URL(origin).hostname, 'Startup tests only contact localhost').toBe('localhost')
    const network: StartupNetwork = { origin, abortedEntries: new Set(), finishedPaths: new Set() }
    const discoveryResponses = new Set<string>()
    const externalRequests: string[] = []
    const pageErrors: string[] = []
    const consoleErrors: { text: string; url: string }[] = []
    page.on('pageerror', (error) => pageErrors.push(error.message))
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push({ text: message.text(), url: message.location().url })
    })
    page.on('requestfinished', (request) => {
      const url = new URL(request.url())
      if (url.origin === origin) network.finishedPaths.add(url.pathname)
    })
    await context.route('**/*', async (route) => {
      const request = route.request()
      const url = new URL(request.url())
      if (url.origin !== origin) {
        externalRequests.push(request.url())
        await route.abort('blockedbyclient')
      } else if (url.pathname === DISCOVER_PATH) {
        expect(request.method()).toBe('GET')
        expect(request.postData()).toBeNull()
        expect(url.search).toBe('')
        discoveryResponses.add(request.url())
        await route.fulfill({ status: 503, contentType: 'application/json',
          headers: { 'Cache-Control': 'no-store' }, body: JSON.stringify({ error: 'Discovery unavailable in startup tests' }) })
      } else {
        await route.continue()
      }
    })
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks -- Playwright fixture callback, not a React hook.
      await use(network)
    } finally {
      await context.unrouteAll({ behavior: 'wait' })
      await info.attach('browser-errors', { contentType: 'application/json',
        body: JSON.stringify({ pageErrors, consoleErrors, externalRequests }, null, 2) })
      // Allow only browser resource diagnostics for the exact URLs deliberately failed here.
      // An exception or console.error from application code is not an expected network failure.
      const unexpectedConsoleErrors = consoleErrors.filter(({ text, url }) => !(
        /^Failed to load resource:/.test(text) && (
          network.abortedEntries.has(url) || (discoveryResponses.has(url) && /\b503\b/.test(text))
        )
      ))
      expect.soft(externalRequests, 'No external requests').toEqual([])
      expect.soft(pageErrors, 'No uncaught browser exceptions').toEqual([])
      expect.soft(unexpectedConsoleErrors, 'No unexpected browser console errors').toEqual([])
    }
  },
})

// Inherit mobile Chromium, desktop Chromium, and mobile WebKit from the existing configuration.
// A previous service worker must not satisfy the entry request behind the interception.
test.use({ serviceWorkers: 'block' })
test.beforeEach(async ({ page }) => { await page.clock.install({ time: new Date(CLOCK) }) })

async function readStored(page: Page): Promise<LibrarySnapshot | undefined> {
  return page.evaluate(() => new Promise<LibrarySnapshot | undefined>((resolve, reject) => {
    const opening = indexedDB.open('keyval-store')
    // A read must fail, not silently recreate a database that the app accidentally deleted.
    opening.onupgradeneeded = () => { opening.transaction?.abort() }
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      if (!db.objectStoreNames.contains('keyval')) {
        db.close()
        reject(new Error('The application IndexedDB store is missing'))
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

async function capture(page: Page, info: TestInfo, name: string, element?: Locator, pendingModule = false) {
  const options = { animations: 'disabled', caret: 'hide', scale: 'css', timeout: 5000 } as const
  // WebKit's document.fonts.ready can wait for the deliberately held module.
  // Capture the actual fallback now; normal app captures still wait for fonts.
  const previous = process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY
  if (pendingModule) process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY = '1'
  try {
    const body = element ? await element.screenshot(options) : await page.screenshot({ ...options, fullPage: true })
    await info.attach(name, { body, contentType: 'image/png' })
  } finally {
    if (previous === undefined) delete process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY
    else process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY = previous
  }
}

async function expectNoInventedProgress(startup: Locator) {
  await expect(startup).not.toContainText(/\d+(?:\.\d+)?\s*%/)
  await expect(startup.locator('progress, [role="progressbar"], [aria-valuenow]')).toHaveCount(0)
  await expect(startup.locator('.startup-pages')).toHaveAttribute('aria-hidden', 'true')
}

async function expectAppReady(page: Page) {
  // StartupScreen is also a main element. Only this ID identifies the usable application.
  await expect(page.locator('main#main')).toBeVisible()
  await expect(page.locator('#startup-status')).toHaveCount(0)
  await expect(page.locator('main.startup-screen')).toHaveCount(0)
}

test('The real startup HTML stays usable while the entry bundle is held, then hands off to the app', async ({ page, network }, info) => {
  // Freeze before navigation so screenshots and assertions cannot spend the 12-second grace period.
  await page.clock.pauseAt(new Date('2030-06-15T10:01:00.000Z'))
  const isEntry = (url: URL) => url.origin === network.origin && ENTRY_PATH.test(url.pathname)
  let release!: () => void
  const gate = new Promise<void>((resolve) => { release = resolve })
  let heldRequests = 0
  await page.route(isEntry, async (route) => {
    heldRequests += 1
    await gate
    // This matcher already enforces the loopback origin. Release real production bytes.
    await route.continue()
  })
  const startup = page.locator('#root > main.startup-screen')
  const status = page.locator('#startup-status')
  const retry = page.locator('#startup-retry')
  try {
    // DOMContentLoaded waits for this module. Commit lets us inspect the HTML while it is still held.
    const response = await page.goto('/#/today', { waitUntil: 'commit' })
    expect(response?.ok()).toBe(true)
    await expect.poll(() => heldRequests, { message: 'The production entry request must actually be gated' }).toBeGreaterThan(0)
    await expect(startup.locator('.brand')).toBeVisible()
    await expect(startup.locator('.brand')).toHaveText('UNSCROLL.')
    await expect(startup.getByRole('heading', { level: 1, name: 'Your ideas, ready when you are.', exact: true })).toBeVisible()
    await expect(status).toBeVisible()
    await expect(status).toHaveRole('status')
    await expect(status).toHaveText(OPENING)
    await expect(retry).toBeHidden()
    await expect(page.locator('main#main')).toHaveCount(0)
    await expectNoInventedProgress(startup)
    // Observe the real fallback download and parser, without evaluating boot.js or injecting app state.
    await expect.poll(() => network.finishedPaths.has('/boot.js')).toBe(true)
    await expect.poll(() => page.evaluate(() => document.readyState)).not.toBe('loading')
    await capture(page, info, 'startup-entry-pending', undefined, true)

    await page.clock.fastForward(12_000)
    await expect(status).toHaveText(SLOW)
    await expect(retry).toBeVisible()
    await expect(retry).toHaveAccessibleName('Retry without clearing data')
    await expect(retry).toBeEnabled()
    await expect(page.locator('main#main')).toHaveCount(0)
    await expectNoInventedProgress(startup)

    await page.setViewportSize({ width: 320, height: 800 })
    await page.keyboard.press('Tab')
    await expect(retry).toBeFocused()
    await expect(retry).toBeInViewport({ ratio: 1 })
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
    }))
    expect(dimensions.viewport).toBe(320)
    expect(dimensions.document).toBeLessThanOrEqual(321)
    expect(dimensions.body).toBeLessThanOrEqual(321)
    // overflow-x: clip alone could hide broken content, so check every visible startup block too.
    for (const element of [startup, ...await startup.locator(':scope > .brand, :scope > h1, :scope > p, :scope > button').all()]) {
      const box = await element.boundingBox()
      expect(box, 'Every startup block has visible dimensions at 320px').not.toBeNull()
      expect(box!.width).toBeGreaterThan(0)
      expect(box!.height).toBeGreaterThan(0)
      expect(box!.x).toBeGreaterThanOrEqual(-1)
      expect(box!.x + box!.width).toBeLessThanOrEqual(321)
      expect(await element.evaluate((node) => node.scrollWidth <= node.clientWidth + 1), 'Startup text is not clipped').toBe(true)
    }
    const button = await retry.boundingBox()
    expect(button!.width).toBeGreaterThanOrEqual(44)
    expect(button!.height).toBeGreaterThanOrEqual(44)
    expect(await retry.evaluate((node) => node.matches(':focus-visible'))).toBe(true)
    await expect(retry).toHaveCSS('outline-style', 'solid')
    expect(await retry.evaluate((node) => Number.parseFloat(getComputedStyle(node).outlineWidth))).toBeGreaterThanOrEqual(2)
    await capture(page, info, 'startup-slow-320-focused', undefined, true)
  } finally {
    // Release before waiting for handlers, even if an assertion or screenshot failed.
    release()
    await page.unrouteAll({ behavior: 'wait' })
    await page.clock.resume()
  }
  await expectAppReady(page)
  await expect(page.locator('main#main').getByRole('heading', { level: 1, name: /LESS SCROLL\./ })).toBeVisible()
  await expect.poll(() => network.finishedPaths.has(DISCOVER_PATH)).toBe(true)
  await capture(page, info, 'startup-real-app-ready')
})

test('A failed entry reload preserves the real saved profile and the fallback retry recovers it', async ({ page, network }, info) => {
  await page.goto('/#/profile')
  await expectAppReady(page)
  const main = page.locator('main#main')
  await expect(main.getByRole('heading', { level: 1, name: 'Your profile', exact: true })).toBeVisible()
  const nickname = main.getByRole('textbox', { name: 'Nickname (optional)', exact: true })
  await nickname.fill('Startup survivor')
  await main.getByRole('button', { name: 'Save nickname', exact: true }).click()
  await expect(main.getByRole('region', { name: 'Preferences', exact: true }).getByRole('status')).toHaveText('Nickname updated.')
  await expect.poll(async () => (await readStored(page))?.state.name,
    { message: 'Wait for the app-owned IndexedDB commit, not the optimistic profile message' }).toBe('Startup survivor')
  await expect.poll(() => network.finishedPaths.has(DISCOVER_PATH)).toBe(true)
  const saved = await readStored(page)
  expect(saved).toBeDefined()

  const isEntry = (url: URL) => url.origin === network.origin && ENTRY_PATH.test(url.pathname)
  await page.route(isEntry, async (route) => {
    network.abortedEntries.add(route.request().url())
    await route.abort('failed')
  })
  const status = page.locator('#startup-status')
  const retry = page.locator('#startup-retry')
  try {
    // Unlike the held request, an aborted module settles, so parsing and deferred boot can finish.
    const response = await page.reload({ waitUntil: 'domcontentloaded' })
    expect(response?.ok()).toBe(true)
    expect(network.abortedEntries.size, 'The reload must fail a real production entry request').toBeGreaterThan(0)
    await expect(main).toHaveCount(0)
    await expect(status).toBeVisible()
    await expect(status).toHaveRole('status')
    // Some engines dispatch the script error before deferred boot installs its listener.
    // Its real 12-second timer must still provide a way out; never synthesize an error event.
    await page.clock.fastForward(12_000)
    await expect(status).toContainText(/^(An app file could not load\.|The app is taking longer to open\.)/)
    await expect(retry).toBeVisible()
    await expect(retry).toBeEnabled()
    await expect(retry).toHaveAccessibleName('Retry without clearing data')
    await expectNoInventedProgress(page.locator('#root > main.startup-screen'))
    expect(await readStored(page), 'The failed load must preserve the whole stored snapshot').toEqual(saved)
    await capture(page, info, 'startup-failed-entry')
  } finally {
    // Remove only page interception. The context still blocks external hosts and returns discovery 503.
    await page.unrouteAll({ behavior: 'wait' })
  }

  const [entryResponse] = await Promise.all([
    page.waitForResponse((response) => isEntry(new URL(response.url()))),
    retry.click(),
  ])
  expect(entryResponse.ok(), 'Retry downloads the real entry bundle successfully').toBe(true)
  await expectAppReady(page)
  await expect(main.getByRole('heading', { level: 1, name: 'Your profile', exact: true })).toBeVisible()
  await expect(nickname).toHaveValue('Startup survivor')
  await expect.poll(() => readStored(page), { message: 'Retry must retain every saved field, not only the nickname' }).toEqual(saved)
  await capture(page, info, 'startup-recovered-profile', main.getByRole('region', { name: 'Preferences', exact: true }))
})