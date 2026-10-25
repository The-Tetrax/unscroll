import { test as base, expect, type Page, type Request } from '@playwright/test'
import { lessonById, lessons } from '../../src/data'
import { createInitialState, ensureDaily } from '../../src/lib/learning'
import { backupSchema, editionSchema, lessonSchema, stateSchema } from '../../src/lib/schema'
import type { LibrarySnapshot } from '../../src/lib/storage'
import type { DiscoveryEdition } from '../../src/types'

const FALLBACK_URL = 'http://localhost:4173'
const CLOCK = '2030-06-15T12:00:00.000Z'
const DAY = '2030-06-15'
const STORAGE_KEY = 'unscroll-library-v1'
const ORIGINAL_ID = 'cinema-001'
const CONFLICT = 'Another tab changed this library. Export this tab’s backup before reloading to see the other tab’s changes. This tab has not overwritten them.'
const RECOVERY = 'Saved data could not be read. Your original data has not been changed. Restore a valid backup, or download the recovery data before resetting.'
const RESET_CONFIRMATION = 'Clear all your UNSCROLL progress, saved lessons, notes, collections, preferences and downloaded discoveries from this browser? This cannot be undone without a backup. Cancel and export a backup first if you want to keep your data.'
const RECOVERY_CONFIRMATION = 'Erase the unreadable local data and start over? Download recovery data first.'

const UNAVAILABLE: DiscoveryEdition = {
  date: DAY, status: 'unavailable', lessons: [],
  message: 'The integrity test edition is unavailable. Original lessons remain available.',
}

// Synthetic text with the real discovery schema, not copied Wikipedia content.
const OLD_DISCOVERY = lessonSchema.parse({
  id: 'wiki-991001', category: 'cinema', topic: 'Integrity fixtures',
  title: 'Integrity fixture: the old discovery response',
  hook: 'A reference retained before a library replacement.',
  body: ['This synthetic reference must not return when an older request finishes after import or reset.'],
  takeaway: 'An old response must not change the replacement library.',
  action: 'Check which library was active when the request began.',
  kind: 'discovery', evidence: 'reference', publishedAt: DAY,
  sources: [{ title: 'Aperture', url: 'https://en.wikipedia.org/wiki/Aperture', publisher: 'Wikipedia' }],
  attribution: {
    author: 'Wikipedia contributors', license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    historyUrl: 'https://en.wikipedia.org/w/index.php?title=Aperture&action=history',
  },
})
const LATE_EDITION: DiscoveryEdition = { date: DAY, status: 'fresh', lessons: [OLD_DISCOVERY] }

function issuedSnapshot(): LibrarySnapshot {
  const original = lessonById.get(ORIGINAL_ID)
  if (!original || original.kind === 'discovery') throw new Error('The fixture must reference a real original lesson')
  const state = createInitialState(DAY)
  // Seed an already-issued day so startup cannot make either tab stale by issuing a new queue.
  state.daily.ids = [original.id, ...lessons.filter((lesson) => lesson.id !== original.id).slice(0, 4).map((lesson) => lesson.id)]
  state.delivered = [...state.daily.ids]
  return { state: stateSchema.parse(state), discoveries: [] }
}

function oldLibrary(): LibrarySnapshot {
  const snapshot = issuedSnapshot()
  snapshot.state.name = 'Before replacement'
  snapshot.state.saved = [ORIGINAL_ID, OLD_DISCOVERY.id]
  snapshot.state.notes = { [ORIGINAL_ID]: 'The old library note. Keep it until replacement is confirmed.' }
  snapshot.state.completed = { [ORIGINAL_ID]: { date: '2030-06-14', correct: true } }
  snapshot.state.reviews = { [ORIGINAL_ID]: { due: DAY, interval: 1, repetitions: 0 } }
  snapshot.state.activity = { '2030-06-14': 1 }
  snapshot.state.xp = 20
  snapshot.state.collections = [{ id: 'old-notes', name: 'Before replacement', lessonIds: [ORIGINAL_ID, OLD_DISCOVERY.id] }]
  snapshot.discoveries = [structuredClone(OLD_DISCOVERY)]
  return snapshot
}

function clearedLibrary(): LibrarySnapshot {
  // Reset clears user data, then the real startup effect issues a new curated daily queue.
  return { state: ensureDaily(createInitialState(DAY), lessons, DAY), discoveries: [] }
}

function backupFileText(snapshot: LibrarySnapshot, exportedAt = CLOCK): string {
  const document = { app: 'UNSCROLL', version: 1, exportedAt, ...snapshot }
  backupSchema.parse(document)
  return JSON.stringify(document, null, 2)
}

interface PausedDiscovery {
  requested: Promise<Request>
  release: () => void
}

interface DiscoveryNetwork {
  requests: Request[]
  pauseNext: (edition: DiscoveryEdition) => PausedDiscovery
}

const test = base.extend<{ network: DiscoveryNetwork }>({
  network: [async ({ context, baseURL }, use) => {
    const origin = new URL(baseURL ?? FALLBACK_URL).origin
    const unavailable = JSON.stringify(editionSchema.parse(UNAVAILABLE))
    const externalRequests: string[] = []
    const pageErrors: string[] = []
    const watchPage = (page: Page) => { page.on('pageerror', (error) => pageErrors.push(error.message)) }
    context.pages().forEach(watchPage)
    context.on('page', watchPage)
    const releases: (() => void)[] = []
    let next: { started: (request: Request) => void; released: Promise<void>; body: string } | undefined
    const network: DiscoveryNetwork = {
      requests: [],
      pauseNext(edition) {
        if (next) throw new Error('A discovery request is already reserved')
        const body = JSON.stringify(editionSchema.parse(edition))
        let started!: (request: Request) => void
        let release!: () => void
        const requested = new Promise<Request>((resolve) => { started = resolve })
        const released = new Promise<void>((resolve) => { release = resolve })
        next = { started, released, body }
        releases.push(release)
        return { requested, release }
      },
    }
    await context.route('**/*', async (route) => {
      const request = route.request()
      const url = new URL(request.url())
      if (url.origin !== origin) {
        externalRequests.push(request.url())
        await route.abort('blockedbyclient')
      } else if (url.pathname === '/.netlify/functions/discover') {
        network.requests.push(request)
        const paused = next
        next = undefined
        if (paused) {
          paused.started(request)
          await paused.released
        }
        await route.fulfill({
          status: 200, contentType: 'application/json', headers: { 'Cache-Control': 'no-store' },
          body: paused?.body ?? unavailable,
        })
      } else {
        await route.continue()
      }
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Playwright's fixture callback, not a React hook.
    try { await use(network) }
    finally {
      releases.forEach((release) => release())
      await context.unrouteAll({ behavior: 'wait' })
      context.off('page', watchPage)
    }
    expect(externalRequests, 'Integrity tests must not contact external hosts').toEqual([])
    for (const request of network.requests) {
      expect(request.method()).toBe('GET')
      expect(request.postData(), 'Notes and progress must not be uploaded').toBeNull()
      expect(new URL(request.url()).search).toBe('')
    }
    expect(pageErrors, 'Uncaught application errors').toEqual([])
  }, { auto: true }],
})

// Each test gets Playwright's fresh context and inherits its configured browser/device project.
test.use({ serviceWorkers: 'block', timezoneId: 'Asia/Kolkata', locale: 'en-US' })
test.beforeEach(async ({ page }) => {
  await page.clock.setFixedTime(new Date(CLOCK))
})

function appUrl() {
  return new URL('/#/today', test.info().project.use.baseURL ?? FALLBACK_URL).href
}

async function readStored(page: Page): Promise<unknown> {
  return page.evaluate((key) => new Promise<unknown>((resolve, reject) => {
    const opening = indexedDB.open('keyval-store')
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      if (!db.objectStoreNames.contains('keyval')) {
        db.close()
        reject(new Error('The real idb-keyval object store is missing'))
        return
      }
      const transaction = db.transaction('keyval', 'readonly')
      const request = transaction.objectStore('keyval').get(key)
      let value: unknown
      request.onsuccess = () => { value = request.result }
      transaction.oncomplete = () => { db.close(); resolve(value) }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), STORAGE_KEY)
}

async function seedAndLoad(page: Page, value: unknown) {
  const documentUrl = new URL(appUrl())
  documentUrl.hash = ''
  // Establish the real app origin without mounting React. Commit the seed before loadLibrary runs.
  await page.route(documentUrl.href, (route) => route.fulfill({
    contentType: 'text/html', body: '<!doctype html><html lang="en"><head><title>Storage seed</title></head><body></body></html>',
  }), { times: 1 })
  await page.goto(appUrl())
  await page.evaluate(({ key, snapshot }) => new Promise<void>((resolve, reject) => {
    const opening = indexedDB.open('keyval-store')
    opening.onupgradeneeded = () => { opening.result.createObjectStore('keyval') }
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      const transaction = db.transaction('keyval', 'readwrite')
      transaction.objectStore('keyval').put(snapshot, key)
      transaction.oncomplete = () => { db.close(); resolve() }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), { key: STORAGE_KEY, snapshot: value })
  expect(await readStored(page)).toEqual(value)
  // A hash-only navigation would keep the seed document. Reload serves the unmodified app.
  await page.reload()
}

async function waitForStored(page: Page, snapshot: LibrarySnapshot) {
  await expect.poll(() => readStored(page), { message: 'Wait for the committed IndexedDB snapshot, not an optimistic render' }).toEqual(snapshot)
}

async function waitForUnavailable(page: Page) {
  await expect(page.locator('main#main')).toBeVisible()
  await expect(page.locator('.discovery-section .edition-status')).toHaveText(UNAVAILABLE.message!)
  await expect(page.getByRole('button', { name: 'Refresh', exact: true })).toBeEnabled()
}

async function navigate(page: Page, screen: 'today' | 'profile') {
  const link = page.locator('nav[aria-label="Main navigation"]:visible').locator(`a[href="#/${screen}"]`)
  await link.click()
  await expect(link).toHaveAttribute('aria-current', 'page')
  await expect(page.getByRole('heading', { level: 1, name: screen === 'profile' ? 'Your profile' : /LESS SCROLL\./ })).toBeVisible()
}

async function openNote(page: Page) {
  const lesson = lessonById.get(ORIGINAL_ID)!
  await page.locator('.daily-lineup .lesson-card').filter({
    has: page.getByRole('heading', { level: 3, name: lesson.title, exact: true }),
  }).locator('.lesson-card-main').click()
  const dialog = page.getByRole('dialog', { name: lesson.title, exact: true })
  await expect(dialog).toBeVisible()
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  return dialog
}

async function closeReader(page: Page) {
  await page.getByRole('dialog').getByRole('button', { name: 'Close lesson', exact: true }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
}

async function confirmAction(page: Page, action: () => Promise<unknown>, message: string, accept = true) {
  const handled = new Promise<{ type: string; message: string }>((resolve, reject) => {
    page.once('dialog', (dialog) => {
      const details = { type: dialog.type(), message: dialog.message() }
      void (accept ? dialog.accept() : dialog.dismiss()).then(() => resolve(details), reject)
    })
  })
  const [dialog] = await Promise.all([handled, action()])
  expect(dialog).toEqual({ type: 'confirm', message })
}

async function downloadText(page: Page, action: () => Promise<unknown>, filename: string) {
  const pending = page.waitForEvent('download')
  await action()
  const download = await pending
  expect(download.suggestedFilename()).toBe(filename)
  expect(await download.failure()).toBeNull()
  const stream = await download.createReadStream()
  const chunks: Buffer[] = []
  for await (const chunk of stream) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  return Buffer.concat(chunks).toString('utf8')
}

async function expectExport(page: Page, snapshot: LibrarySnapshot) {
  // Scope to Profile because the conflict banner also has an Export backup button.
  const button = page.getByRole('region', { name: 'Backups and clearing data', exact: true })
    .getByRole('button', { name: 'Export backup', exact: true })
  const text = await downloadText(page, () => button.click(), `unscroll-backup-${DAY}.json`)
  expect(text).toBe(backupFileText(snapshot))
  await expect(button).toBeEnabled()
}

async function releaseOldResponse(page: Page, paused: PausedDiscovery) {
  const request = await paused.requested
  const pendingResponse = page.waitForResponse((response) => response.request() === request)
  paused.release()
  const response = await pendingResponse
  expect(response.status()).toBe(200)
  expect(await response.finished()).toBeNull()
  expect(await response.json()).toEqual(LATE_EDITION)
  // Enabled Refresh proves the hook has consumed the body and left its finally block.
  await expect(page.getByRole('button', { name: 'Refresh', exact: true })).toBeEnabled()
  await expect(page.locator('.discovery-section .edition-status')).toHaveCount(0)
  await expect(page.locator('.discovery-grid .lesson-card-main')).toHaveCount(0)
}

test('A stale tab cannot overwrite a committed note and exports its own unsaved in-memory library', async ({ page, context }) => {
  const initial = issuedSnapshot()
  const baselineNote = 'Shared baseline before either tab edits.'
  initial.state.notes = { [ORIGINAL_ID]: baselineNote }
  await seedAndLoad(page, initial)
  await waitForUnavailable(page)
  await waitForStored(page, initial)

  const stalePage = await context.newPage()
  await stalePage.clock.setFixedTime(new Date(CLOCK))
  await stalePage.goto(appUrl())
  await waitForUnavailable(stalePage)
  await waitForStored(stalePage, initial)
  expect(await readStored(page)).toEqual(initial)
  const writer = await openNote(page)
  const staleReader = await openNote(stalePage)
  await expect(writer.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(baselineNote)
  await expect(staleReader.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(baselineNote)

  const committedNote = 'Written in the first tab.\nThis note must remain on disk.'
  await writer.getByRole('textbox', { name: /Your note or experiment/ }).fill(committedNote)
  const committed: LibrarySnapshot = { ...initial, state: { ...initial.state, notes: { [ORIGINAL_ID]: committedNote } } }
  await waitForStored(page, committed)
  expect(await readStored(stalePage)).toEqual(committed)
  // A disk read is not an app reload. This implementation detects conflicts, not automatic merging.
  await expect(staleReader.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(baselineNote)
  await expect(staleReader.getByRole('alert')).toHaveCount(0)
  await staleReader.getByRole('button', { name: 'Save this bite', exact: true }).click()
  await expect(staleReader.getByRole('alert')).toHaveText(CONFLICT)
  await expect(staleReader.getByRole('button', { name: 'Unsave this bite', exact: true })).toHaveAttribute('aria-pressed', 'true')
  expect(await readStored(stalePage)).toEqual(committed)

  const staleNote = 'Only in the stale tab: café experiment.\nExport this draft without overwriting the first tab.'
  await staleReader.getByRole('textbox', { name: /Your note or experiment/ }).fill(staleNote)
  await expect(staleReader.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(staleNote)
  await closeReader(stalePage)
  await navigate(stalePage, 'profile')
  const inMemory: LibrarySnapshot = {
    ...initial, state: { ...initial.state, saved: [ORIGINAL_ID], notes: { [ORIGINAL_ID]: staleNote } },
  }
  // Export awaits the real write queue, including the rejected save and subsequent note write.
  await expectExport(stalePage, inMemory)
  expect(await readStored(page)).toEqual(committed)
  expect(await readStored(stalePage)).toEqual(committed)

  await stalePage.reload()
  await expect(stalePage.getByRole('heading', { name: 'Your profile', exact: true })).toBeVisible()
  await expect(stalePage.getByRole('alert')).toHaveCount(0)
  await navigate(stalePage, 'today')
  await waitForUnavailable(stalePage)
  const reloaded = await openNote(stalePage)
  await expect(reloaded.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(committedNote)
  await expect(reloaded.getByRole('button', { name: 'Save this bite', exact: true })).toHaveAttribute('aria-pressed', 'false')
  expect(await readStored(stalePage)).toEqual(committed)
})

test('Import replaces the library while an older discovery request is held and ignores its valid late payload', async ({ page, network }) => {
  const previous = oldLibrary()
  const paused = network.pauseNext(LATE_EDITION)
  await seedAndLoad(page, previous)
  await paused.requested
  await expect(page.getByRole('button', { name: 'Checking', exact: true })).toBeDisabled()
  await waitForStored(page, previous)
  await navigate(page, 'profile')

  const imported = issuedSnapshot()
  imported.state.name = 'Restored reader'
  imported.state.saved = [ORIGINAL_ID]
  imported.state.notes = { [ORIGINAL_ID]: 'Imported camera experiment.\nKeep this replacement, not the old library.' }
  imported.state.reducedMotion = true
  const filename = 'integrity-import.json'
  const fileText = backupFileText(imported, '2030-06-14T12:00:00.000Z')
  await confirmAction(page, () => page.getByLabel('Choose an UNSCROLL JSON backup', { exact: true }).setInputFiles({
    name: filename, mimeType: 'application/json', buffer: Buffer.from(fileText, 'utf8'),
  }), `Import "${filename}" and replace the progress, saved lessons, notes, collections and preferences in this browser? Cancel and export a backup first if you want to keep your current library.`)
  await expect(page.getByRole('status').filter({ hasText: 'Backup imported.' }))
    .toHaveText('Backup imported. Your library now uses the progress, notes and preferences from that backup.')
  await expect(page.getByLabel('Nickname (optional)', { exact: true })).toHaveValue(imported.state.name)
  await waitForStored(page, imported)

  await navigate(page, 'today')
  await expect(page.getByRole('button', { name: 'Checking', exact: true })).toBeDisabled()
  await releaseOldResponse(page, paused)
  await navigate(page, 'profile')
  // The download observes in-memory data after response handling and drains any attempted writes.
  await expectExport(page, imported)
  expect(await readStored(page)).toEqual(imported)
  await page.reload()
  await navigate(page, 'today')
  await waitForUnavailable(page)
  await waitForStored(page, imported)
  const reader = await openNote(page)
  await expect(reader.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(imported.state.notes[ORIGINAL_ID])
})

test('Confirmed reset during a held refresh clears the old library without late discovery data reappearing', async ({ page, network }) => {
  const previous = oldLibrary()
  await seedAndLoad(page, previous)
  await waitForUnavailable(page)
  await waitForStored(page, previous)
  const paused = network.pauseNext(LATE_EDITION)
  await page.getByRole('button', { name: 'Refresh', exact: true }).click()
  await paused.requested
  await expect(page.getByRole('button', { name: 'Checking', exact: true })).toBeDisabled()
  await navigate(page, 'profile')
  await confirmAction(page, () => page.getByRole('button', { name: 'Clear progress and library', exact: true }).click(), RESET_CONFIRMATION)
  await expect(page.getByRole('status').filter({ hasText: 'Your local progress and library have been cleared.' }))
    .toHaveText('Your local progress and library have been cleared. You can start a new daily session.')
  const cleared = clearedLibrary()
  await waitForStored(page, cleared)

  await navigate(page, 'today')
  await expect(page.getByRole('button', { name: 'Checking', exact: true })).toBeDisabled()
  await releaseOldResponse(page, paused)
  await expect(page.locator('.xp-label')).toHaveText('0 XP')
  await navigate(page, 'profile')
  await expectExport(page, cleared)
  expect(await readStored(page)).toEqual(cleared)
  await page.reload()
  await navigate(page, 'today')
  await waitForUnavailable(page)
  await waitForStored(page, cleared)
  await expect(page.locator('.discovery-grid .lesson-card-main')).toHaveCount(0)
})

test('An invalid persisted snapshot remains recoverable and unchanged until reset is confirmed', async ({ page, network }) => {
  const original = issuedSnapshot()
  original.state.notes = { [ORIGINAL_ID]: 'Recovery original: café notes.\nPreserve this exact text before erasing anything.' }
  // Deliberately invalidate one field in the real persisted envelope, not a made-up storage key.
  const invalid = { ...original, state: { ...original.state, goal: 4 } }
  expect(stateSchema.safeParse(invalid.state).success).toBe(false)
  await seedAndLoad(page, invalid)
  await expect(page.getByRole('heading', { name: 'Your data is still here.', exact: true })).toBeVisible()
  await expect(page.getByRole('alert')).toHaveText(RECOVERY)
  await expect(page.locator('main#main')).toHaveCount(0)
  expect(await readStored(page)).toEqual(invalid)
  await page.reload()
  await expect(page.getByRole('alert')).toHaveText(RECOVERY)
  expect(await readStored(page)).toEqual(invalid)

  const recoveryText = await downloadText(page,
    () => page.getByRole('button', { name: 'Download recovery data', exact: true }).click(), 'unscroll-recovery.json')
  expect(recoveryText).toBe(JSON.stringify(invalid, null, 2))
  expect(await readStored(page)).toEqual(invalid)
  const reset = page.getByRole('button', { name: 'Reset after backing up', exact: true })
  await confirmAction(page, () => reset.click(), RECOVERY_CONFIRMATION, false)
  await expect(page.getByRole('alert')).toHaveText(RECOVERY)
  expect(await readStored(page)).toEqual(invalid)
  expect(network.requests, 'Recovery must not start discovery or write a replacement before confirmation').toHaveLength(0)

  await confirmAction(page, () => reset.click(), RECOVERY_CONFIRMATION)
  await waitForUnavailable(page)
  await expect(page.locator('.recovery-screen')).toHaveCount(0)
  await waitForStored(page, clearedLibrary())
  await page.reload()
  await waitForUnavailable(page)
  await expect(page.getByRole('alert')).toHaveCount(0)
  await waitForStored(page, clearedLibrary())
})