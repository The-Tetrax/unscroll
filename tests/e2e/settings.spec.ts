import AxeBuilder from '@axe-core/playwright'
import { test, expect, type Locator, type Page } from '@playwright/test'
import { categories, lessonById } from '../../src/data'
import { backupSchema, stateSchema } from '../../src/lib/schema'
import type { LibrarySnapshot } from '../../src/lib/storage'

const CLOCK = '2030-06-15T12:00:00.000Z'
const STORAGE_KEY = 'unscroll-library-v1'
const UNSAVED_PREFERENCE = 'Export a backup before updating. This tab has changes that are not saved to device storage.'
const MEMORY_WARNING = 'This change is only in memory. Device storage could not save it. Export a backup before closing the app.'
const EXPORT_FEEDBACK = 'Backup download requested. Check your browser downloads before clearing any data.'
const STORAGE_EXCEPTION = 'Test storage permission failed.'
const INSTALL_EXCEPTION = 'Test install prompt failed.'
const INSTALL_PENDING = 'Follow the installation prompt in your browser.'
const INSTALL_ACCEPTED = 'Installation has been accepted or reported by your browser. Look for UNSCROLL on your home screen or in your app launcher.'
const INSTALL_UNAVAILABLE = 'There is no install prompt available in this browser. Use the steps for your device if its browser offers installation.'

function guidedLesson(id: string) {
  const lesson = lessonById.get(id)
  if (!lesson?.guide || !lesson.quiz || !lesson.revision || lesson.kind) throw new Error(`Expected a current original guided lesson: ${id}`)
  return { ...lesson, guide: lesson.guide, quiz: lesson.quiz, revision: lesson.revision }
}

const READING = guidedLesson('cinema-027')
const UNFINISHED = guidedLesson('money-001')

type StorageOutcome = 'denial' | 'exception' | 'grant'
type InstallOutcome = 'accepted' | 'dismissed' | 'error'
interface StorageProbe {
  persistedCalls: number
  persistCalls: number
  granted: boolean
  settle: () => void
}
interface InstallProbe {
  promptCalls: number
  defaultPrevented: boolean
  finishPrompt: () => void
  finishChoice: () => void
}
interface QuotaProbe {
  putCalls: number
  notices: string[]
  restore: () => void
}
type ProbeWindow = Window & {
  __settingsStorageProbe: StorageProbe
  __settingsInstallProbes: InstallProbe[]
  __settingsQuotaProbe: QuotaProbe
}

test.use({ serviceWorkers: 'block' })
test.beforeEach(async ({ page }) => {
  // Freeze Date only. Browser timers, focus and promise scheduling stay real.
  await page.clock.setFixedTime(new Date(CLOCK))
  await page.route('**/.netlify/functions/discover', (route) => route.fulfill({
    status: 503, contentType: 'application/json', body: '{}',
  }))
})

async function stored(page: Page): Promise<LibrarySnapshot | undefined> {
  // Read idb-keyval's real default database/store. Never seed or replace it.
  return page.evaluate((key) => new Promise<LibrarySnapshot | undefined>((resolve, reject) => {
    const opening = indexedDB.open('keyval-store')
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      if (!db.objectStoreNames.contains('keyval')) {
        db.close()
        reject(new Error('The application has not created its library object store'))
        return
      }
      const transaction = db.transaction('keyval', 'readonly')
      const request = transaction.objectStore('keyval').get(key)
      let snapshot: LibrarySnapshot | undefined
      request.onsuccess = () => { snapshot = request.result as LibrarySnapshot | undefined }
      // A successful request is not yet a completed transaction.
      transaction.oncomplete = () => { db.close(); resolve(snapshot) }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), STORAGE_KEY)
}

async function expectStored(page: Page, expected: LibrarySnapshot) {
  await expect.poll(() => stored(page), { message: 'Compare the entire committed library, including optional fields' }).toStrictEqual(expected)
}

function preferences(page: Page) {
  return page.getByRole('region', { name: 'Preferences', exact: true })
}

async function profileReady(page: Page) {
  await expect(page.getByRole('heading', { level: 1, name: 'Your profile', exact: true })).toBeVisible()
  await expect(preferences(page).getByRole('button', { name: 'Save nickname', exact: true })).toBeEnabled()
}

async function startProfile(page: Page) {
  await page.goto('/#/profile')
  await profileReady(page)
  await expect.poll(async () => (await stored(page))?.state.daily.ids.length).toBe(5)
  const snapshot = await stored(page)
  if (!snapshot) throw new Error('The initial library was not committed')
  stateSchema.parse(snapshot.state)
  return snapshot
}

async function expectBackup(page: Page, expected: LibrarySnapshot) {
  // The storage-warning banner has another export button. Exercise Profile's control.
  const region = page.getByRole('region', { name: 'Backups and clearing data', exact: true })
  const exportButton = region.getByRole('button', { name: 'Export backup', exact: true })
  const pendingDownload = page.waitForEvent('download')
  await exportButton.click()
  const download = await pendingDownload
  // The filename uses the browser's local date, not a hard-coded time zone.
  expect(download.suggestedFilename()).toMatch(/^unscroll-backup-\d{4}-\d{2}-\d{2}\.json$/)
  expect(await download.failure()).toBeNull()
  const stream = await download.createReadStream()
  if (!stream) throw new Error('The backup download has no readable content')
  const chunks: Buffer[] = []
  for await (const chunk of stream) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  const document: unknown = JSON.parse(Buffer.concat(chunks).toString('utf8'))
  backupSchema.parse(document)
  // Compare the raw document too, so parsing cannot hide extra or missing fields.
  expect(document).toStrictEqual({ app: 'UNSCROLL', version: 1, exportedAt: CLOCK, ...expected })
  await expect(region.getByRole('status').filter({ hasText: EXPORT_FEEDBACK })).toHaveText(EXPORT_FEEDBACK)
  await expect(exportButton).toBeEnabled()
}

async function openReader(page: Page, lesson = READING) {
  await page.goto(`/#/profile?lesson=${encodeURIComponent(lesson.id)}`)
  const dialog = page.locator('dialog.reader-dialog[open]')
  await expect(dialog).toHaveCount(1)
  await expect(dialog).toHaveAccessibleName(lesson.title)
  return dialog
}

async function closeReader(page: Page) {
  await page.locator('dialog.reader-dialog[open]').getByRole('button', { name: 'Close lesson', exact: true }).click()
  await expect(page.locator('dialog.reader-dialog')).toHaveCount(0)
}

async function expectReadingFonts(dialog: Locator, bodySize: '17px' | '20px', captionSize: '14px' | '18px') {
  const paragraphs = dialog.locator('.reader-prose .teaching-section > p')
  await expect(paragraphs).toHaveText(READING.guide.sections.flatMap((section) => section.paragraphs))
  for (const paragraph of await paragraphs.all()) await expect(paragraph).toHaveCSS('font-size', bodySize)
  const caption = dialog.locator('.teaching-visual > figcaption').first()
  await caption.scrollIntoViewIfNeeded()
  await expect(caption).toBeInViewport()
  await expect(caption).not.toHaveText('')
  await expect(caption).toHaveCSS('font-size', captionSize)
}

async function expectLargePractice(dialog: Locator) {
  const steps = dialog.locator('.practice-steps > li')
  await expect(steps).toHaveText(READING.guide.practice.steps)
  for (const step of await steps.all()) await expect(step).toHaveCSS('font-size', '20px')
  await expect(dialog.locator('.practice-observe p')).toHaveText(READING.guide.practice.notice)
  await expect(dialog.locator('.practice-observe p')).toHaveCSS('font-size', '20px')
  await dialog.locator('.practice-troubleshooting > summary').click()
  await expect(dialog.locator('.practice-troubleshooting p')).toBeVisible()
  await expect(dialog.locator('.practice-troubleshooting p')).toHaveText(READING.guide.practice.troubleshooting)
  await expect(dialog.locator('.practice-troubleshooting p')).toHaveCSS('font-size', '20px')
}

test('larger text changes real reader and practice text, survives reload and remains in the complete backup', async ({ page }) => {
  const before = await startProfile(page)
  expect(before.state).not.toHaveProperty('readingSize')
  await expect(preferences(page).getByRole('radio', { name: 'Standard text', exact: true })).toBeChecked()
  await preferences(page).getByRole('radio', { name: 'Larger text', exact: true }).check()
  await expect(preferences(page).getByRole('status')).toHaveText('Larger lesson text saved.')
  const large: LibrarySnapshot = { ...before, state: { ...before.state, readingSize: 'large' } }
  await expectStored(page, large)
  await expect(preferences(page).locator('.reading-preview')).toHaveCSS('font-size', '20px')

  await page.reload()
  await profileReady(page)
  await expect(preferences(page).getByRole('radio', { name: 'Larger text', exact: true })).toBeChecked()
  let dialog = await openReader(page)
  await expectReadingFonts(dialog, '20px', '18px')
  await page.reload()
  dialog = page.locator('dialog.reader-dialog[open]')
  await expect(dialog).toHaveAccessibleName(READING.title)
  await expectReadingFonts(dialog, '20px', '18px')
  await expectStored(page, large)

  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await expectLargePractice(dialog)
  const withDraft: LibrarySnapshot = { ...large, state: { ...large.state, readerDrafts: {
    ...large.state.readerDrafts,
    [READING.id]: { stage: 'try', choice: null, revealed: false, updatedAt: CLOCK, lessonRevision: READING.revision },
  } } }
  await expectStored(page, withDraft)
  await page.reload()
  dialog = page.locator('dialog.reader-dialog[open]')
  await expect(dialog).toHaveAccessibleName(READING.title)
  await expect(dialog.getByRole('navigation', { name: 'Lesson stages' }).getByRole('button', { name: /Put it to use$/ })).toHaveAttribute('aria-current', 'step')
  await expectLargePractice(dialog)
  await closeReader(page)
  await expect(preferences(page).getByRole('radio', { name: 'Larger text', exact: true })).toBeChecked()
  await expectBackup(page, withDraft)
  await expectStored(page, withDraft)
})

test('switching from larger to standard restores 17px reader paragraphs and persists without unrelated changes', async ({ page }) => {
  const before = await startProfile(page)
  await preferences(page).getByRole('radio', { name: 'Larger text', exact: true }).check()
  await expect(preferences(page).getByRole('status')).toHaveText('Larger lesson text saved.')
  await expectStored(page, { ...before, state: { ...before.state, readingSize: 'large' } })
  await expectReadingFonts(await openReader(page), '20px', '18px')
  await closeReader(page)

  await preferences(page).getByRole('radio', { name: 'Standard text', exact: true }).check()
  await expect(preferences(page).getByRole('status')).toHaveText('Standard lesson text saved.')
  const standard: LibrarySnapshot = { ...before, state: { ...before.state, readingSize: 'standard' } }
  await expectStored(page, standard)
  await expect(preferences(page).locator('.reading-preview')).toHaveCSS('font-size', '17px')
  await page.reload()
  await profileReady(page)
  await expect(preferences(page).getByRole('radio', { name: 'Standard text', exact: true })).toBeChecked()
  await expect(preferences(page).getByRole('radio', { name: 'Larger text', exact: true })).not.toBeChecked()
  await expectReadingFonts(await openReader(page), '17px', '14px')
  await closeReader(page)
  await expectBackup(page, standard)
  await expectStored(page, standard)
})

test('removing the last interest is rejected and neither memory nor the committed library loses that interest', async ({ page }) => {
  const before = await startProfile(page)
  const interests = preferences(page).getByRole('group', { name: 'Interests', exact: true })
  for (const category of categories.filter((entry) => entry.id !== 'money')) {
    await interests.getByRole('checkbox', { name: category.name, exact: true }).uncheck()
    await expect(preferences(page).getByRole('status')).toHaveText(`${category.name} removed. Future daily sessions will use your interests.`)
  }
  const oneInterest: LibrarySnapshot = { ...before, state: { ...before.state, interests: ['money'] } }
  await expectStored(page, oneInterest)
  const lastInterest = interests.getByRole('checkbox', { name: 'Money', exact: true })
  await expect(lastInterest).toBeChecked()
  await expect(interests.locator('input:checked')).toHaveCount(1)
  // uncheck() requires a changed checkbox. This attempted change must be refused.
  await lastInterest.click()
  await expect(preferences(page).getByRole('status')).toHaveText('Keep at least one interest selected.')
  await expect(lastInterest).toBeChecked()
  await expect(interests.locator('input:checked')).toHaveCount(1)
  await expect(preferences(page).getByRole('button', { name: 'Save nickname', exact: true })).toBeEnabled()
  await expectStored(page, oneInterest)
  await expectBackup(page, oneInterest)
  await page.reload()
  await profileReady(page)
  await expect(lastInterest).toBeChecked()
  await expect(interests.locator('input:checked')).toHaveCount(1)
  await expectStored(page, oneInterest)
})

async function recoveryLibrary(page: Page): Promise<LibrarySnapshot> {
  // Make nonempty progress, notes, a collection, practice and an unfinished bite
  // through the shipped UI, so a failed nickname save cannot pass by exporting defaults.
  const initial = await startProfile(page)
  const savedName = 'Saved reader'
  await preferences(page).getByRole('textbox', { name: 'Nickname (optional)', exact: true }).fill(savedName)
  await preferences(page).getByRole('button', { name: 'Save nickname', exact: true }).click()
  await expect(preferences(page).getByRole('status')).toHaveText('Nickname updated.')
  await expectStored(page, { ...initial, state: { ...initial.state, name: savedName } })

  const collectionName = 'Settings recovery'
  await page.goto('/#/vault')
  await page.locator('.collection-manager > summary').click()
  await page.getByRole('textbox', { name: 'New collection name', exact: true }).fill(collectionName)
  await page.getByRole('button', { name: 'Create collection', exact: true }).click()
  const option = page.getByLabel('Collection', { exact: true }).getByRole('option', { name: collectionName, exact: true })
  await expect(option).toHaveCount(1)
  const collectionId = await option.getAttribute('value')
  if (!collectionId) throw new Error('The UI did not create a collection ID')

  const completedNote = 'Café window: compare the same camera position.\nKeep this completed lesson note.'
  let dialog = await openReader(page)
  await dialog.getByRole('button', { name: 'Save this bite', exact: true }).click()
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill(completedNote)
  await dialog.getByRole('button', { name: 'Plan this experiment', exact: true }).click()
  await dialog.locator('.collection-picker > summary').click()
  await dialog.getByRole('checkbox', { name: collectionName, exact: true }).check()
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await dialog.getByRole('radio').nth(READING.quiz.correctIndex).check()
  await dialog.getByRole('button', { name: 'Check my answer', exact: true }).click()
  await dialog.getByRole('button', { name: 'Complete bite', exact: true }).click()
  await expect(dialog.locator('.reader-done')).toContainText('+20 XP. Recall this tomorrow.')
  await closeReader(page)

  const draftNote = 'An unfinished comparison.\nKeep this note and its reader position too.'
  dialog = await openReader(page, UNFINISHED)
  await dialog.getByRole('button', { name: 'Save this bite', exact: true }).click()
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill(draftNote)
  await closeReader(page)

  const day = initial.state.daily.date
  const tomorrow = new Date(`${day}T12:00:00Z`)
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)
  const expected: LibrarySnapshot = { ...initial, state: {
    ...initial.state, name: savedName, xp: 20,
    saved: [READING.id, UNFINISHED.id], notes: { [READING.id]: completedNote, [UNFINISHED.id]: draftNote },
    collections: [{ id: collectionId, name: collectionName, lessonIds: [READING.id] }],
    completed: { [READING.id]: { date: day, correct: true } },
    reviews: { [READING.id]: { due: tomorrow.toISOString().slice(0, 10), interval: 1, repetitions: 0 } },
    activity: { [day]: 1 }, practices: { [READING.id]: { status: 'planned', plannedOn: day } },
    readerDrafts: { [UNFINISHED.id]: { stage: 'try', choice: null, revealed: false, updatedAt: CLOCK, lessonRevision: UNFINISHED.revision } },
  } }
  await expectStored(page, expected)
  return expected
}

test('a storage-full nickname save never reports success and exports the complete unsaved in-memory library', async ({ page }) => {
  const before = await recoveryLibrary(page)
  const memoryName = 'Memory-only reader'
  const nickname = preferences(page).getByRole('textbox', { name: 'Nickname (optional)', exact: true })
  await nickname.fill(memoryName)
  await preferences(page).getByRole('status').evaluate((node, key) => {
    const nativePut = IDBObjectStore.prototype.put
    const probe: QuotaProbe = { putCalls: 0, notices: [], restore: () => {} }
    const observer = new MutationObserver(() => { probe.notices.push(node.textContent?.trim() ?? '') })
    observer.observe(node, { childList: true, characterData: true, subtree: true })
    // This is the only IndexedDB replacement in this file, restricted to the failing library write.
    IDBObjectStore.prototype.put = function (this: IDBObjectStore, value: unknown, recordKey?: IDBValidKey) {
      if (this.transaction.db.name === 'keyval-store' && this.name === 'keyval' && recordKey === key) {
        probe.putCalls += 1
        throw new DOMException('Test storage full', 'QuotaExceededError')
      }
      return nativePut.call(this, value, recordKey)
    }
    probe.restore = () => { IDBObjectStore.prototype.put = nativePut; observer.disconnect() }
    ;(window as ProbeWindow).__settingsQuotaProbe = probe
  }, STORAGE_KEY)

  try {
    await preferences(page).getByRole('button', { name: 'Save nickname', exact: true }).click()
    await expect(preferences(page).getByRole('status')).toHaveText(UNSAVED_PREFERENCE)
    await expect(preferences(page).getByRole('button', { name: 'Save nickname', exact: true })).toBeEnabled()
    await expect(nickname).toHaveValue(memoryName)
    await expect(page.getByRole('alert').filter({ hasText: MEMORY_WARNING })).toContainText(MEMORY_WARNING)
    await expectStored(page, before)

    await expectBackup(page, { ...before, state: { ...before.state, name: memoryName } })
    await expectStored(page, before)
    const observed = await page.evaluate(() => {
      const probe = (window as ProbeWindow).__settingsQuotaProbe
      return { putCalls: probe.putCalls, notices: probe.notices }
    })
    expect(observed.putCalls).toBe(1)
    expect(observed.notices).toContain(UNSAVED_PREFERENCE)
    expect(observed.notices).not.toContain('Nickname updated.')
    expect(observed.notices).not.toContain('Nickname cleared.')
  } finally {
    await page.evaluate(() => (window as ProbeWindow).__settingsQuotaProbe.restore())
  }

  await page.reload()
  await profileReady(page)
  await expect(nickname).toHaveValue(before.state.name)
  await expectStored(page, before)
})

const SHORTCUTS = [
  { button: 'Reading and pace', section: 'preferences', region: 'Preferences', heading: 'Preferences' },
  { button: 'Offline and updates', section: 'offline', region: 'Offline library and updates', heading: 'Offline library and updates' },
  { button: 'Install on my phone', section: 'install', region: 'Install UNSCROLL', heading: 'Install UNSCROLL' },
  { button: 'Backups and data', section: 'backup', region: 'Backups and clearing data', heading: 'Backups and local data' },
  { button: 'Learning history', section: 'learning', region: 'Learning progress', heading: 'Your learning' },
  { button: 'Help and privacy', section: 'privacy', region: 'Privacy and sources', heading: 'Moving to another phone?' },
] as const

async function expectNoHorizontalOverflow(page: Page) {
  const layout = await page.locator('main#main').evaluate((root) => {
    const width = document.documentElement.clientWidth
    const selectors = '.profile-shortcuts, .settings-section, .form-row, fieldset, .field-input, .button, .chip, h1, h2, h3, p, summary, li, .stats-grid, .activity-grid, .build-details'
    const overflow = [root, ...root.querySelectorAll<HTMLElement>(selectors)].flatMap((element) => {
      if (!element.getClientRects().length || getComputedStyle(element).visibility === 'hidden') return []
      const bounds = element.getBoundingClientRect()
      if (!bounds.width) return []
      const clipped = element.clientWidth > 0 && element.scrollWidth > element.clientWidth + 1
      if (bounds.left >= -1 && bounds.right <= width + 1 && !clipped) return []
      return [{ element: `${element.tagName}.${element.className}`, left: bounds.left, right: bounds.right,
        client: element.clientWidth, scroll: element.scrollWidth, text: element.textContent?.trim().slice(0, 80) }]
    })
    return { width, documentWidth: document.documentElement.scrollWidth, overflow }
  })
  expect(layout.width).toBe(320)
  expect(layout.documentWidth).toBeLessThanOrEqual(layout.width + 1)
  expect(layout.overflow, 'No horizontally clipped settings text or controls at 320px').toEqual([])
}

test('all six shortcuts scroll and focus their named regions using the keyboard, with no 320px overflow or axe violations', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 })
  const before = await startProfile(page)
  await page.evaluate(async () => { await document.fonts.ready })
  const shortcuts = page.getByRole('navigation', { name: 'Settings sections', exact: true })
  await expect(shortcuts.getByRole('button')).toHaveText(SHORTCUTS.map((shortcut) => shortcut.button))

  for (const [index, shortcut] of SHORTCUTS.entries()) {
    await test.step(shortcut.button, async () => {
      // Begin at a real preceding control. Do not focus or scroll the destination ourselves.
      await page.getByRole('button', { name: 'Your profile and settings', exact: true }).focus()
      for (let tab = 0; tab <= index; tab++) await page.keyboard.press('Tab')
      const button = shortcuts.getByRole('button', { name: shortcut.button, exact: true })
      await expect(button).toBeFocused()
      await expect(button).toHaveCSS('outline-style', 'solid')
      const region = page.getByRole('region', { name: shortcut.region, exact: true })
      const destination = await region.evaluate((element) => {
        const root = document.scrollingElement ?? document.documentElement
        const margin = Number.parseFloat(getComputedStyle(element).scrollMarginTop) || 0
        const padding = Number.parseFloat(getComputedStyle(root).scrollPaddingTop) || 0
        return Math.max(0, Math.min(element.getBoundingClientRect().top + window.scrollY - margin - padding, root.scrollHeight - window.innerHeight))
      })
      const previousScroll = await page.evaluate(() => window.scrollY)
      expect(destination, 'The shortcut must move the page, not merely edit its URL').toBeGreaterThan(previousScroll + 1)
      await page.keyboard.press('Enter')
      await expect(page).toHaveURL(new RegExp(`#\\/profile\\?section=${shortcut.section}$`))
      await expect(region).toBeFocused()
      await expect(region).toHaveAttribute('tabindex', '-1')
      await expect(region).toHaveCSS('outline-style', 'solid')
      await expect.poll(async () => Math.abs(await page.evaluate(() => window.scrollY) - destination)).toBeLessThanOrEqual(2)
      await expect(region.getByRole('heading', { level: 2, name: shortcut.heading, exact: true })).toBeInViewport()

      if (shortcut.section === 'preferences') {
        await page.keyboard.press('Tab')
        await expect(region.getByRole('textbox', { name: 'Nickname (optional)', exact: true })).toBeFocused()
      } else if (shortcut.section === 'backup') {
        await page.keyboard.press('Tab')
        await expect(region.getByRole('button', { name: 'Export backup', exact: true })).toBeFocused()
      } else if (shortcut.section === 'privacy') {
        await page.keyboard.press('Tab')
        await expect(region.getByRole('button', { name: 'How UNSCROLL works', exact: true })).toBeFocused()
        await page.keyboard.press('Tab')
        await expect(region.locator('details > summary')).toBeFocused()
        await page.keyboard.press('Enter')
        await expect(region.locator('details')).toHaveJSProperty('open', true)
      }
    })
  }
  await expectNoHorizontalOverflow(page)
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
  await expectStored(page, before)
})

async function mockStoragePermission(page: Page, initiallyGranted: boolean, outcome: StorageOutcome = 'denial') {
  await page.addInitScript(({ initiallyGranted, outcome, error }) => {
    const probe: StorageProbe = {
      persistedCalls: 0, persistCalls: 0, granted: initiallyGranted,
      settle: () => { throw new Error('No storage request is pending') },
    }
    ;(window as ProbeWindow).__settingsStorageProbe = probe
    // Replace only permission methods, not IndexedDB or the rest of StorageManager.
    // WebKit can discard expando properties on its native instance wrapper.
    // Patch only these two prototype methods so the permission fixture survives.
    Object.defineProperties(Object.getPrototypeOf(navigator.storage), {
      persisted: { configurable: true, value: async () => { probe.persistedCalls += 1; return probe.granted } },
      persist: { configurable: true, value: () => {
        probe.persistCalls += 1
        return new Promise<boolean>((resolve, reject) => {
          probe.settle = () => {
            if (outcome === 'exception') reject(new Error(error))
            else { probe.granted = outcome === 'grant'; resolve(probe.granted) }
          }
        })
      } },
    })
  }, { initiallyGranted, outcome, error: STORAGE_EXCEPTION })
}

async function storageCalls(page: Page) {
  return page.evaluate(() => {
    const probe = (window as ProbeWindow).__settingsStorageProbe
    return { persisted: probe.persistedCalls, persist: probe.persistCalls }
  })
}

test('an existing persistent-storage grant disables the granted control without requesting permission again', async ({ page }) => {
  await mockStoragePermission(page, true)
  const before = await startProfile(page)
  const region = page.getByRole('region', { name: 'Browser storage protection', exact: true })
  await expect(region.getByRole('button', { name: 'Storage protection granted', exact: true })).toBeDisabled()
  await expect(region.getByRole('button', { name: 'Request storage protection', exact: true })).toHaveCount(0)
  expect(await storageCalls(page)).toEqual({ persisted: 1, persist: 0 })
  await expectStored(page, before)

  await page.reload()
  await profileReady(page)
  await expect(region.getByRole('button', { name: 'Storage protection granted', exact: true })).toBeDisabled()
  expect(await storageCalls(page)).toEqual({ persisted: 1, persist: 0 })
  await expectStored(page, before)
})

const STORAGE_FEEDBACK: Record<StorageOutcome, string> = {
  denial: 'This browser did not grant persistent storage. You can keep using UNSCROLL. Export backups to protect your library.',
  exception: `Storage protection could not be requested. ${STORAGE_EXCEPTION} Keep a backup of your library.`,
  grant: 'This browser granted persistent storage for this site. Keep backups: deleting site data or losing your device can still remove your library.',
}

for (const outcome of ['denial', 'exception', 'grant'] as const) {
  test(`storage permission ${outcome} reports the browser result verbatim without a false grant`, async ({ page }) => {
    await mockStoragePermission(page, false, outcome)
    const before = await startProfile(page)
    const region = page.getByRole('region', { name: 'Browser storage protection', exact: true })
    const request = region.getByRole('button', { name: 'Request storage protection', exact: true })
    await expect(request).toBeEnabled()
    expect(await storageCalls(page)).toEqual({ persisted: 1, persist: 0 })
    await request.focus()
    await page.keyboard.press('Enter')
    await expect(region.getByRole('status')).toHaveText('Asking this browser to protect local storage...')
    await expect(region.getByRole('button', { name: 'Requesting protection...', exact: true })).toBeDisabled()
    await expect(region.getByRole('button', { name: 'Storage protection granted', exact: true })).toHaveCount(0)
    expect(await storageCalls(page)).toEqual({ persisted: 1, persist: 1 })

    await page.evaluate(() => (window as ProbeWindow).__settingsStorageProbe.settle())
    await expect(region.getByRole('status')).toHaveText(STORAGE_FEEDBACK[outcome])
    if (outcome === 'grant') {
      await expect(region.getByRole('button', { name: 'Storage protection granted', exact: true })).toBeDisabled()
      await expect(request).toHaveCount(0)
    } else {
      await expect(request).toBeEnabled()
      await expect(region.getByRole('button', { name: 'Storage protection granted', exact: true })).toHaveCount(0)
      await expect(region.getByRole('status')).not.toContainText(STORAGE_FEEDBACK.grant)
    }
    expect(await storageCalls(page)).toEqual({ persisted: 1, persist: 1 })
    await expectStored(page, before)
  })
}

const INSTALL_FEEDBACK: Record<InstallOutcome, string> = {
  accepted: "Installation accepted. Follow your browser's remaining steps and look for UNSCROLL on your home screen.",
  dismissed: 'Installation was dismissed. You can keep reading here or install later from the browser menu.',
  error: `The install request could not finish. ${INSTALL_EXCEPTION} You can still use UNSCROLL in this browser.`,
}

async function exerciseInstallPrompt(page: Page, outcome: InstallOutcome) {
  // Headless tests cannot accept a native OS install dialog. Supply the standard
  // event and its two promises; the real listener, hook and Profile handle them.
  const index = await page.evaluate(({ outcome, error }) => {
    const probes = (window as ProbeWindow).__settingsInstallProbes ??= []
    let resolvePrompt!: () => void
    let rejectPrompt!: (error: Error) => void
    let resolveChoice!: (value: { outcome: 'accepted' | 'dismissed'; platform: string }) => void
    const promptFinished = new Promise<void>((resolve, reject) => { resolvePrompt = resolve; rejectPrompt = reject })
    const userChoice = new Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>((resolve) => { resolveChoice = resolve })
    const probe: InstallProbe = {
      promptCalls: 0, defaultPrevented: false,
      finishPrompt: () => { if (outcome === 'error') rejectPrompt(new Error(error)); else resolvePrompt() },
      finishChoice: () => resolveChoice({ outcome: outcome === 'accepted' ? 'accepted' : 'dismissed', platform: 'web' }),
    }
    const event = new Event('beforeinstallprompt', { cancelable: true })
    Object.defineProperties(event, {
      prompt: { value: () => { probe.promptCalls += 1; return promptFinished } },
      userChoice: { value: userChoice },
    })
    probes.push(probe)
    window.dispatchEvent(event)
    probe.defaultPrevented = event.defaultPrevented
    return probes.length - 1
  }, { outcome, error: INSTALL_EXCEPTION })
  expect(await page.evaluate((index) => {
    const probe = (window as ProbeWindow).__settingsInstallProbes[index]
    return { calls: probe.promptCalls, prevented: probe.defaultPrevented }
  }, index)).toEqual({ calls: 0, prevented: true })

  const region = page.getByRole('region', { name: 'Install UNSCROLL', exact: true })
  const button = region.getByRole('button', { name: 'Install UNSCROLL', exact: true })
  await expect(button).toBeEnabled()
  await button.click()
  await expect(region.getByRole('status')).toHaveText(INSTALL_PENDING)
  // useInstall consumes the event before awaiting either promise.
  await expect(button).toHaveCount(0)
  await expect(region.getByText(INSTALL_ACCEPTED, { exact: true })).toHaveCount(0)
  expect(await page.evaluate((index) => (window as ProbeWindow).__settingsInstallProbes[index].promptCalls, index)).toBe(1)
  await page.evaluate((index) => (window as ProbeWindow).__settingsInstallProbes[index].finishPrompt(), index)
  if (outcome !== 'error') {
    await expect(region.getByRole('status')).toHaveText(INSTALL_PENDING)
    await expect(region.getByText(INSTALL_ACCEPTED, { exact: true })).toHaveCount(0)
    await page.evaluate((index) => (window as ProbeWindow).__settingsInstallProbes[index].finishChoice(), index)
  }
  await expect(region.getByRole('status')).toHaveText(INSTALL_FEEDBACK[outcome])
  await expect(button).toHaveCount(0)
  expect(await page.evaluate((index) => (window as ProbeWindow).__settingsInstallProbes[index].promptCalls, index)).toBe(1)
  return index
}

for (const outcome of ['accepted', 'dismissed', 'error'] as const) {
  test(`installation ${outcome} calls the offered prompt once, gives the correct feedback and cannot reuse it`, async ({ page }) => {
    const before = await startProfile(page)
    const index = await exerciseInstallPrompt(page, outcome)
    expect(index).toBe(0)
    const region = page.getByRole('region', { name: 'Install UNSCROLL', exact: true })
    if (outcome === 'accepted') {
      await expect(region.getByText(INSTALL_ACCEPTED, { exact: true })).toBeVisible()
      await expect(region.getByText(INSTALL_UNAVAILABLE, { exact: true })).toHaveCount(0)
    } else {
      await expect(region.getByText(INSTALL_UNAVAILABLE, { exact: true })).toBeVisible()
      await expect(region.getByText(INSTALL_ACCEPTED, { exact: true })).toHaveCount(0)
      await expect(region.getByRole('heading', { name: 'iPhone or iPad', exact: true })).toBeVisible()
      await expect(region.getByRole('heading', { name: 'Android', exact: true })).toBeVisible()
    }
    await expect(region.getByText('UNSCROLL is running in standalone app mode.', { exact: true })).toHaveCount(0)

    // Remount Profile through real navigation while retaining the app's install hook.
    await page.locator('nav[aria-label="Main navigation"]:visible').getByRole('link', { name: 'Explore', exact: true }).click()
    await expect(page).toHaveURL(/#\/explore$/)
    await page.getByRole('button', { name: 'Your profile and settings', exact: true }).click()
    await profileReady(page)
    await expect(region.getByRole('button', { name: 'Install UNSCROLL', exact: true })).toHaveCount(0)
    expect(await page.evaluate(() => (window as ProbeWindow).__settingsInstallProbes.map((probe) => probe.promptCalls))).toEqual([1])

    if (outcome === 'accepted') {
      await expect(region.getByText(INSTALL_ACCEPTED, { exact: true })).toBeVisible()
    } else {
      await expect(region.getByText(INSTALL_UNAVAILABLE, { exact: true })).toBeVisible()
      await expect(region.getByText(INSTALL_ACCEPTED, { exact: true })).toHaveCount(0)
      // Retrying needs a newly offered event, not the consumed or failed one.
      expect(await exerciseInstallPrompt(page, 'dismissed')).toBe(1)
      expect(await page.evaluate(() => (window as ProbeWindow).__settingsInstallProbes.map((probe) => probe.promptCalls))).toEqual([1, 1])
      await expect(region.getByText(INSTALL_ACCEPTED, { exact: true })).toHaveCount(0)
    }
    await expectStored(page, before)
  })
}