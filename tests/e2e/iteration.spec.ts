import AxeBuilder from '@axe-core/playwright'
import { test as base, expect, type Locator, type Page, type Request } from '@playwright/test'
import { learningPaths, lessonById, lessons } from '../../src/data'
import { createInitialState, ensureDaily } from '../../src/lib/learning'
import { backupSchema, editionSchema, lessonSchema, stateSchema } from '../../src/lib/schema'
import type { LibrarySnapshot } from '../../src/lib/storage'
import type { AppState, DiscoveryEdition, Lesson, Page as AppPage, Practice, ReaderDraft } from '../../src/types'

// Fixed Date, live timers: UTC noon is 17:30 on the same local day in Kolkata.
const CLOCK = '2030-06-15T12:00:00.000Z'
const DAY = '2030-06-15'
const YESTERDAY = '2030-06-14'
const TOMORROW = '2030-06-16'
const FALLBACK_URL = 'http://localhost:4173'
const STORAGE_KEY = 'unscroll-library-v1'
const PAGE_SIZE = 12
const PRACTICE_LIMIT = 'Keep at most five experiments planned. Try or remove one before adding another.'
const PRACTICE_ONLY = 'Practice only. This review was not due; its date and XP are unchanged.'

type QuizLesson = Lesson & { quiz: NonNullable<Lesson['quiz']> }

function original(id: string): QuizLesson {
  const lesson = lessonById.get(id)
  if (!lesson?.quiz || lesson.kind === 'discovery') throw new Error(`Expected an original quiz lesson: ${id}`)
  return lesson as QuizLesson
}

function reference(id: string, title: string, article: string, category: Lesson['category']): Lesson {
  // Synthetic prose, not copied encyclopedia content. Attribution matches the production contract.
  return lessonSchema.parse({
    id, category, topic: 'Iteration test references', title: `Fixture reference: ${title}`,
    hook: 'Synthetic reference text for a deterministic browser test.',
    body: [
      'This is synthetic test text, not an excerpt from the linked Wikipedia article.',
      'This second paragraph checks that a backup keeps the complete reference and its attribution.',
    ],
    takeaway: 'Keep an external reference distinguishable from an original practical lesson.',
    action: 'Record one question to investigate using the linked source.',
    kind: 'discovery', evidence: 'reference', publishedAt: DAY,
    sources: [{ title, url: `https://en.wikipedia.org/wiki/${article}`, publisher: 'Wikipedia' }],
    attribution: {
      author: 'Wikipedia contributors', license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      historyUrl: `https://en.wikipedia.org/w/index.php?title=${article}&action=history`,
    },
  })
}

const REFERENCE = reference('wiki-990005', 'Color theory', 'Color_theory', 'design')
const NEXT_REFERENCE = reference('wiki-990006', 'Aperture', 'Aperture', 'cinema')
const EDITION: DiscoveryEdition = { date: DAY, status: 'fresh', lessons: [REFERENCE] }
const NEXT_EDITION: DiscoveryEdition = { date: DAY, status: 'fresh', lessons: [NEXT_REFERENCE] }
const UNAVAILABLE: DiscoveryEdition = {
  date: DAY, status: 'unavailable', lessons: [], message: 'No new references in this isolated browser fixture.',
}

interface PausedDiscovery {
  requested: Promise<Request>
  handled: Promise<void>
  release: () => void
}

interface DiscoveryNetwork {
  edition: DiscoveryEdition
  requests: Request[]
  pauseNext: (edition: DiscoveryEdition) => PausedDiscovery
}

const test = base.extend<{ network: DiscoveryNetwork }>({
  network: [async ({ context, page, baseURL }, use) => {
    const origin = new URL(baseURL ?? FALLBACK_URL).origin
    const externalRequests: string[] = []
    const pageErrors: string[] = []
    page.on('pageerror', (error) => pageErrors.push(error.message))
    const releases: (() => void)[] = []
    let next: { body: string; started: (request: Request) => void; released: Promise<void>; done: () => void } | undefined
    const network: DiscoveryNetwork = {
      edition: structuredClone(EDITION), requests: [],
      pauseNext(edition) {
        if (next) throw new Error('A discovery request is already reserved')
        let started!: (request: Request) => void
        let release!: () => void
        let done!: () => void
        const requested = new Promise<Request>((resolve) => { started = resolve })
        const released = new Promise<void>((resolve) => { release = resolve })
        const handled = new Promise<void>((resolve) => { done = resolve })
        next = { body: JSON.stringify(editionSchema.parse(edition)), started, released, done }
        releases.push(release)
        return { requested, handled, release }
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
        const body = paused?.body ?? JSON.stringify(editionSchema.parse(network.edition))
        try {
          if (paused) { paused.started(request); await paused.released }
          // Import aborts the real fetch. Do not turn an expected cancellation into a fixture error.
          if (request.failure() || page.isClosed()) {
            // Returning without handling an intercepted request leaves WebKit
            // and Playwright teardown waiting even after the fetch was aborted.
            await route.abort('aborted').catch(() => {})
            return
          }
          try {
            await route.fulfill({ status: 200, contentType: 'application/json', headers: { 'Cache-Control': 'no-store' }, body })
          } catch (error) {
            // The browser can cancel between the guard and fulfillment. Other route errors still fail.
            if (!request.failure() && !page.isClosed()) throw error
          }
        } finally { paused?.done() }
      } else {
        await route.continue()
      }
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Playwright fixture callback, not a React hook.
    try { await use(network) }
    finally {
      releases.forEach((release) => release())
      await context.unrouteAll({ behavior: 'wait' })
    }
    expect(externalRequests, 'No external source or other live host should be contacted').toEqual([])
    for (const request of network.requests) {
      expect(request.method()).toBe('GET')
      expect(request.postData(), 'Notes, drafts and practice records must not be uploaded').toBeNull()
      expect(new URL(request.url()).search).toBe('')
    }
    expect(pageErrors, 'Uncaught application errors').toEqual([])
  }, { auto: true }],
})

// Inherit all three configured browser/device projects. Real offline coverage stays in the PWA suite.
test.use({ serviceWorkers: 'block', timezoneId: 'Asia/Kolkata', locale: 'en-US' })
test.describe.configure({ timeout: 90_000 })
test.beforeEach(async ({ page }) => { await page.clock.setFixedTime(new Date(CLOCK)) })

const headings: Record<AppPage, string | RegExp> = {
  today: /LESS SCROLL\.|THAT’S A WRAP\./,
  explore: 'FIND YOUR NEXT OBSESSION.', vault: 'Your vault',
  review: /DON’T JUST READ IT\./, profile: 'Your profile',
}

function appUrl(screen: AppPage, params: Record<string, string> = {}) {
  const url = new URL('/', test.info().project.use.baseURL ?? FALLBACK_URL)
  const query = new URLSearchParams(params)
  url.hash = `/${screen}${query.size ? `?${query}` : ''}`
  return url.href
}

async function visit(page: Page, screen: AppPage, params: Record<string, string> = {}) {
  await page.goto(appUrl(screen, params))
  await expect(page.locator('main#main')).toBeVisible()
  if (!params.lesson && !params.path) await expect(page.getByRole('heading', { level: 1, name: headings[screen] })).toBeVisible()
}

async function navigate(page: Page, screen: AppPage) {
  const link = page.locator('nav[aria-label="Main navigation"]:visible').locator(`a[href="#/${screen}"]`)
  await link.click()
  await expect(link).toHaveAttribute('aria-current', 'page')
  await expect(page.getByRole('heading', { level: 1, name: headings[screen] })).toBeVisible()
}

async function reader(page: Page, lesson: Lesson) {
  // The dialog's accessible name changes on completion, so return a locator that still finds it then.
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog).toHaveAccessibleName(lesson.title)
  return dialog
}

async function openReader(page: Page, lesson: Lesson, screen: AppPage = 'explore', params: Record<string, string> = {}) {
  await visit(page, screen, { ...params, lesson: lesson.id })
  return reader(page, lesson)
}

async function closeReader(page: Page) {
  await page.getByRole('dialog').getByRole('button', { name: 'Close lesson', exact: true }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
}

function card(page: Page, lesson: Lesson) {
  return page.locator('main .lesson-card').filter({ has: page.getByRole('heading', { level: 3, name: lesson.title, exact: true }) })
}

function vaultEntry(page: Page, lesson: Lesson) {
  return page.locator('main .lesson-list > li').filter({ has: page.getByRole('heading', { level: 3, name: lesson.title, exact: true }) })
}

function practice(scope: Locator, lesson: Lesson) {
  return scope.getByRole('group', { name: `Practice for ${lesson.title}`, exact: true })
}

async function selectVault(page: Page, view: 'Practice' | 'Unfinished' | 'Notes', count: number) {
  const button = page.getByRole('group', { name: 'Vault view', exact: true }).getByRole('button', { name: `${view} (${count})`, exact: true })
  await button.click()
  await expect(button).toHaveAttribute('aria-pressed', 'true')
}

async function readStored(page: Page): Promise<LibrarySnapshot | undefined> {
  return page.evaluate((key) => new Promise<LibrarySnapshot | undefined>((resolve, reject) => {
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
      const request = transaction.objectStore('keyval').get(key)
      let snapshot: LibrarySnapshot | undefined
      request.onsuccess = () => { snapshot = request.result as LibrarySnapshot | undefined }
      transaction.oncomplete = () => { db.close(); resolve(snapshot) }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), STORAGE_KEY)
}

async function stored(page: Page) {
  const snapshot = await readStored(page)
  expect(snapshot, 'The real library must be committed to IndexedDB').toBeDefined()
  stateSchema.parse(snapshot!.state)
  snapshot!.discoveries.forEach((lesson) => lessonSchema.parse(lesson))
  return snapshot!
}

async function waitForStored(page: Page, select: (snapshot: LibrarySnapshot) => unknown, expected: unknown) {
  await expect.poll(async () => {
    const snapshot = await readStored(page)
    return snapshot ? select(snapshot) : undefined
  }, { message: 'Wait for an app-owned IndexedDB commit, not just an optimistic render' }).toEqual(expected)
}

function learningCredit(state: AppState) {
  return { xp: state.xp, completed: state.completed, reviews: state.reviews, activity: state.activity }
}

async function expectCredit(page: Page, state: AppState) {
  await waitForStored(page, (snapshot) => learningCredit(snapshot.state), learningCredit(state))
  await expect(page.locator('.xp-label')).toHaveText(`${state.xp} XP`)
}

async function expectDraft(page: Page, lesson: Lesson, value: Omit<ReaderDraft, 'updatedAt'>) {
  await waitForStored(page, (snapshot) => snapshot.state.readerDrafts?.[lesson.id], { ...value, updatedAt: CLOCK })
}

async function openToday(page: Page, edition = EDITION) {
  await visit(page, 'today')
  await expect(page.locator('.day-heading time')).toHaveAttribute('datetime', DAY)
  await expect(page.locator('.discovery-grid .lesson-card-main h3')).toHaveText(edition.lessons.map((lesson) => lesson.title))
  await expect(page.getByRole('button', { name: 'Refresh', exact: true })).toBeEnabled()
  await waitForStored(page, (snapshot) => ({ daily: snapshot.state.daily.date, count: snapshot.state.daily.ids.length, discoveries: snapshot.discoveries }),
    { daily: DAY, count: 5, discoveries: edition.lessons })
  return stored(page)
}

async function expectStage(dialog: Locator, stage: ReaderDraft['stage']) {
  const names = { read: /Understand$/, try: /Put it to use$/, recall: /Make it stick$/ }
  await expect(dialog.getByRole('navigation', { name: 'Lesson stages', exact: true }).getByRole('button', { name: names[stage] }))
    .toHaveAttribute('aria-current', 'step')
}

async function revealAnswer(dialog: Locator, lesson: QuizLesson, choice = lesson.quiz.correctIndex) {
  await expect(dialog.getByRole('group', { name: lesson.quiz.question, exact: true })).toBeVisible()
  await dialog.getByRole('radio').nth(choice).check()
  await dialog.getByRole('button', { name: 'Check my answer', exact: true }).click()
  await expect(dialog.locator('.quiz-feedback p')).toHaveText(lesson.quiz.explanation)
}

async function expectAnswer(dialog: Locator, lesson: QuizLesson, choice: number, revealed: boolean) {
  const radios = dialog.getByRole('radio')
  await expect(radios).toHaveCount(lesson.quiz.options.length)
  for (let index = 0; index < lesson.quiz.options.length; index += 1) {
    await expect(radios.nth(index)).toBeChecked({ checked: index === choice })
    await expect(radios.nth(index)).toBeEnabled({ enabled: !revealed })
  }
  await expect(dialog.locator('.quiz-feedback')).toHaveCount(revealed ? 1 : 0)
  if (revealed) {
    await expect(dialog.locator('.quiz-feedback p')).toHaveText(lesson.quiz.explanation)
    await expect(dialog.getByRole('button', { name: 'Check my answer', exact: true })).toHaveCount(0)
  } else {
    await expect(dialog.getByRole('button', { name: 'Check my answer', exact: true })).toBeEnabled()
  }
}

async function expectSources(dialog: Locator, lesson: Lesson) {
  await dialog.locator('.sources > summary').click()
  await expect(dialog.locator('.sources li')).toHaveCount(lesson.sources.length)
  for (const [index, source] of lesson.sources.entries()) {
    const item = dialog.locator('.sources li').nth(index)
    const link = item.getByRole('link')
    await expect(link).toHaveText(source.title)
    await expect(link).toHaveAttribute('href', source.url)
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', /noopener noreferrer/)
    await expect(item.locator(':scope > span')).toHaveText(source.publisher)
  }
  if (lesson.attribution) {
    await expect(dialog.locator('.attribution')).toContainText(lesson.attribution.author)
    for (const [name, href] of [[lesson.attribution.license, lesson.attribution.licenseUrl], ['Article history and authors', lesson.attribution.historyUrl]]) {
      const link = dialog.getByRole('link', { name, exact: true })
      await expect(link).toHaveAttribute('href', href)
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', /noopener noreferrer/)
    }
  }
}

function backupText(snapshot: LibrarySnapshot, exportedAt = CLOCK) {
  const document = { app: 'UNSCROLL', version: 1, exportedAt, ...snapshot }
  backupSchema.parse(document)
  return JSON.stringify(document, null, 2)
}

async function confirmAction(page: Page, action: () => Promise<unknown>, message: RegExp) {
  const handled = new Promise<{ type: string; message: string }>((resolve, reject) => {
    page.once('dialog', (dialog) => {
      const details = { type: dialog.type(), message: dialog.message() }
      void dialog.accept().then(() => resolve(details), reject)
    })
  })
  const [confirmation] = await Promise.all([handled, action()])
  expect(confirmation.type).toBe('confirm')
  expect(confirmation.message).toMatch(message)
}

async function importBackup(page: Page, text: string, name: string) {
  const pendingChooser = page.waitForEvent('filechooser')
  await page.getByRole('button', { name: 'Import backup', exact: true }).click()
  const chooser = await pendingChooser
  await confirmAction(page, () => chooser.setFiles({ name, mimeType: 'application/json', buffer: Buffer.from(text, 'utf8') }), /^Import ".+" and replace the progress, saved lessons, notes, collections and preferences in this browser\?/)
  await expect(page.getByRole('status').filter({ hasText: 'Backup imported.' }))
    .toHaveText('Backup imported. Your library now uses the progress, notes and preferences from that backup.')
  await expect(page.getByRole('button', { name: 'Import backup', exact: true })).toBeEnabled()
}

async function exportBackup(page: Page) {
  const pendingDownload = page.waitForEvent('download')
  await page.getByRole('region', { name: 'Backups and clearing data', exact: true }).getByRole('button', { name: 'Export backup', exact: true }).click()
  const download = await pendingDownload
  expect(download.suggestedFilename()).toBe(`unscroll-backup-${DAY}.json`)
  expect(await download.failure()).toBeNull()
  // Read the browser download in memory; no fixture files or saveAs paths are needed.
  const stream = await download.createReadStream()
  const chunks: Buffer[] = []
  for await (const chunk of stream) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  const text = Buffer.concat(chunks).toString('utf8')
  const document = backupSchema.parse(JSON.parse(text))
  expect(document.exportedAt).toBe(CLOCK)
  await expect(page.getByRole('button', { name: 'Export backup', exact: true })).toBeEnabled()
  return { text, document }
}

async function expectHorizontalLayout(page: Page, label: string) {
  await page.evaluate(async () => { await document.fonts.ready })
  const layout = await page.evaluate(() => {
    const width = window.innerWidth
    const selectors = [
      '#main', '.app-header', '.header-inner', '.mobile-nav', '.desktop-nav', '.lesson-card', '.lesson-card h3',
      '.panel', '.form-row', '.filter-row', '.field-input', '.button', '.chip', '.search-field', '.topic-select',
      '.practice-actions', '.practice-buttons', '.practice-entry', '.unfinished-entry', '.resume-notice',
      '.reader-dialog[open]', '.reader-shell', '.reader-content', '.reader-toolbar', '.reader-steps', '.reader-footer', '.quiz-option',
    ].join(',')
    const overflow = [...document.querySelectorAll<HTMLElement>(selectors)].flatMap((element) => {
      const box = element.getBoundingClientRect()
      if (!element.getClientRects().length || !box.width || getComputedStyle(element).visibility === 'hidden') return []
      if (box.left >= -1 && box.right <= width + 1 && element.scrollWidth <= element.clientWidth + 1) return []
      return [{ element: `${element.tagName}.${element.className}`, text: element.textContent?.trim().slice(0, 80),
        left: box.left, right: box.right, client: element.clientWidth, scroll: element.scrollWidth }]
    })
    return { width, documentWidth: document.documentElement.scrollWidth, overflow }
  })
  expect.soft(layout.documentWidth, `${label}: document width`).toBeLessThanOrEqual(layout.width + 1)
  expect.soft(layout.overflow, `${label}: clipping must not hide overflowing content`).toEqual([])
}

async function expectMobileReader(page: Page, dialog: Locator, label: string) {
  const viewport = page.viewportSize()!
  const shell = (await dialog.boundingBox())!
  expect.soft(Math.abs(shell.x), `${label}: left edge`).toBeLessThanOrEqual(1)
  expect.soft(Math.abs(shell.y), `${label}: top edge`).toBeLessThanOrEqual(1)
  expect.soft(Math.abs(shell.width - viewport.width), `${label}: full viewport width`).toBeLessThanOrEqual(1)
  expect.soft(Math.abs(shell.height - viewport.height), `${label}: full viewport height`).toBeLessThanOrEqual(1)
  const controls = dialog.locator('.reader-toolbar .icon-button, .reader-footer .button')
  await expect(controls, `${label}: three toolbar controls and two footer actions`).toHaveCount(5)
  for (const control of await controls.all()) {
    await expect(control, `${label}: toolbar and footer controls must stay on screen`).toBeInViewport({ ratio: 1 })
    const box = (await control.boundingBox())!
    expect.soft(box.width, label).toBeGreaterThanOrEqual(43.5)
    expect.soft(box.height, label).toBeGreaterThanOrEqual(43.5)
    expect.soft(box.x, label).toBeGreaterThanOrEqual(-1)
    expect.soft(box.y, label).toBeGreaterThanOrEqual(-1)
    expect.soft(box.x + box.width, label).toBeLessThanOrEqual(viewport.width + 1)
    expect.soft(box.y + box.height, label).toBeLessThanOrEqual(viewport.height + 1)
  }
}

async function scanAccessibility(page: Page, label: string) {
  const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  expect.soft(result.violations, `${label}: WCAG scan without rule exclusions`).toEqual([])
}

test('Unfinished restores Try, the chosen answer and revealed feedback, starts again, and completes only once', async ({ page }) => {
  const initial = await openToday(page)
  const lesson = original('design-001')
  const wrong = ((lesson.quiz.correctIndex + 1) % 3) as 0 | 1 | 2
  let dialog = await openReader(page, lesson)
  await expect(dialog.locator('.resume-notice')).toHaveCount(0)
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await expectDraft(page, lesson, { stage: 'try', choice: null, revealed: false })
  await expectCredit(page, initial.state)
  await closeReader(page)
  await navigate(page, 'vault')
  await selectVault(page, 'Unfinished', 1)
  await expect(vaultEntry(page, lesson).locator('.unfinished-entry')).toContainText('Resume at Put it to use. No completion XP yet.')
  await card(page, lesson).locator('.lesson-card-main').click()
  dialog = await reader(page, lesson)
  await expectStage(dialog, 'try')
  await expect(dialog.locator('.resume-notice')).toContainText('Your unfinished bite is restored. No completion was recorded.')
  await page.reload()
  dialog = await reader(page, lesson)
  await expectStage(dialog, 'try')
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await dialog.getByRole('radio').nth(wrong).check()
  await expectDraft(page, lesson, { stage: 'recall', choice: wrong, revealed: false })
  await closeReader(page)
  await card(page, lesson).locator('.lesson-card-main').click()
  await expectAnswer(await reader(page, lesson), lesson, wrong, false)
  await page.reload()
  dialog = await reader(page, lesson)
  await expectStage(dialog, 'recall')
  await expectAnswer(dialog, lesson, wrong, false)
  await dialog.getByRole('button', { name: 'Check my answer', exact: true }).click()
  await expectDraft(page, lesson, { stage: 'recall', choice: wrong, revealed: true })
  await expectCredit(page, initial.state)
  await closeReader(page)
  await expect(vaultEntry(page, lesson).locator('.unfinished-entry')).toContainText('Resume at Make it stick.')
  await card(page, lesson).locator('.lesson-card-main').click()
  await expectAnswer(await reader(page, lesson), lesson, wrong, true)
  await page.reload()
  dialog = await reader(page, lesson)
  await expectAnswer(dialog, lesson, wrong, true)
  await expect(dialog.getByRole('button', { name: 'Complete bite', exact: true })).toBeEnabled()

  await dialog.getByRole('button', { name: 'Start this bite again', exact: true }).click()
  await waitForStored(page, (snapshot) => snapshot.state.readerDrafts, undefined)
  await expectStage(dialog, 'read')
  await expect(dialog.locator('.resume-notice')).toHaveCount(0)
  await expectCredit(page, initial.state)
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await expect(dialog.locator('input[type="radio"]:checked')).toHaveCount(0)
  await expect(dialog.locator('.quiz-feedback')).toHaveCount(0)
  await expect(dialog.getByRole('button', { name: 'Check my answer', exact: true })).toBeDisabled()
  await revealAnswer(dialog, lesson)
  await dialog.getByRole('button', { name: 'Complete bite', exact: true }).click()
  await expect(dialog.locator('.reader-done')).toContainText('+20 XP. Recall this tomorrow.')
  await waitForStored(page, (snapshot) => ({ ...learningCredit(snapshot.state), drafts: snapshot.state.readerDrafts }), {
    xp: 20, completed: { [lesson.id]: { date: DAY, correct: true } },
    reviews: { [lesson.id]: { due: TOMORROW, interval: 1, repetitions: 0 } }, activity: { [DAY]: 1 }, drafts: undefined,
  })
  const completed = await stored(page)
  await closeReader(page)
  await expect(page.getByRole('button', { name: 'Unfinished (0)', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByRole('heading', { name: 'No unfinished steps.', exact: true })).toBeVisible()

  dialog = await openReader(page, lesson)
  await expectStage(dialog, 'read')
  await expect(dialog.locator('.resume-notice')).toHaveCount(0)
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await expect(dialog.locator('input[type="radio"]:checked')).toHaveCount(0)
  await expect(dialog.locator('.quiz-feedback')).toHaveCount(0)
  await revealAnswer(dialog, lesson, wrong)
  await dialog.getByRole('button', { name: 'Finish revisit', exact: true }).click()
  await expect(dialog.locator('.reader-done')).toContainText('Revisited. Your completion XP stays the same.')
  await closeReader(page)
  await page.reload()
  await expectCredit(page, completed.state)
  expect(await stored(page)).toEqual(completed)
})

test('Practice caps only planned experiments at five and persists tried, rejected undo, undo and removal without XP', async ({ page }) => {
  const initial = await openToday(page)
  const experiments = ['design-001', 'design-002', 'design-003', 'design-004', 'design-005', 'design-006'].map(original)
  const first = experiments[0]
  const sixth = experiments[5]
  const note = 'Keep this observation even when its practice record is removed.'
  const planned: Record<string, Practice> = {}
  for (const lesson of experiments.slice(0, 5)) {
    const dialog = await openReader(page, lesson)
    await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
    if (lesson.id === first.id) await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill(note)
    await practice(dialog, lesson).getByRole('button', { name: 'Plan this experiment', exact: true }).click()
    planned[lesson.id] = { status: 'planned', plannedOn: DAY }
    await waitForStored(page, (snapshot) => snapshot.state.practices, planned)
    await closeReader(page)
  }
  let dialog = await openReader(page, sixth)
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await practice(dialog, sixth).getByRole('button', { name: 'Plan this experiment', exact: true }).click()
  await expect(practice(dialog, sixth).getByRole('alert')).toHaveText(PRACTICE_LIMIT)
  expect((await stored(page)).state.practices).toEqual(planned)
  await expectCredit(page, initial.state)
  await closeReader(page)
  await navigate(page, 'vault')
  await selectVault(page, 'Practice', 5)
  await expect(page.getByRole('heading', { name: 'Ideas you put to use', exact: true })).toBeVisible()
  await expect(vaultEntry(page, first).locator('.practice-entry > p')).toHaveText(first.action)
  await practice(vaultEntry(page, first), first).getByRole('button', { name: 'Mark as tried', exact: true }).click()
  const tried: Record<string, Practice> = { ...planned, [first.id]: { status: 'tried', plannedOn: DAY, triedOn: DAY } }
  await waitForStored(page, (snapshot) => snapshot.state.practices, tried)
  await expect(practice(vaultEntry(page, first), first)).toContainText(`Tried ${DAY}. Your own record, not a skill rating.`)
  await expectCredit(page, initial.state)

  dialog = await openReader(page, sixth)
  await expectStage(dialog, 'try')
  await practice(dialog, sixth).getByRole('button', { name: 'Plan this experiment', exact: true }).click()
  const full: Record<string, Practice> = { ...tried, [sixth.id]: { status: 'planned', plannedOn: DAY } }
  await waitForStored(page, (snapshot) => snapshot.state.practices, full)
  await closeReader(page)
  await navigate(page, 'vault')
  await selectVault(page, 'Practice', 6)
  await expect(page.locator('main .lesson-list .lesson-card-main h3')).toHaveText([...experiments.slice(1), first].map((lesson) => lesson.title))
  const firstPractice = practice(vaultEntry(page, first), first)
  await firstPractice.getByRole('button', { name: 'Undo tried', exact: true }).click()
  await expect(firstPractice.getByRole('alert')).toHaveText(PRACTICE_LIMIT)
  expect((await stored(page)).state.practices).toEqual(full)
  await practice(vaultEntry(page, sixth), sixth).getByRole('button', { name: `Remove practice for ${sixth.title}`, exact: true }).click()
  await waitForStored(page, (snapshot) => snapshot.state.practices, tried)
  await firstPractice.getByRole('button', { name: 'Undo tried', exact: true }).click()
  await expect(firstPractice.getByRole('alert')).toHaveCount(0)
  await waitForStored(page, (snapshot) => snapshot.state.practices, planned)
  expect((await stored(page)).state.practices![first.id]).not.toHaveProperty('triedOn')
  await firstPractice.getByRole('button', { name: `Remove practice for ${first.title}`, exact: true }).click()
  const remaining = Object.fromEntries(Object.entries(planned).filter(([id]) => id !== first.id))
  await waitForStored(page, (snapshot) => ({ practices: snapshot.state.practices, note: snapshot.state.notes[first.id], draft: snapshot.state.readerDrafts?.[first.id]?.stage }),
    { practices: remaining, note, draft: 'try' })
  await expectCredit(page, initial.state)
  const beforeReload = await stored(page)
  await page.reload()
  await expect(page.getByRole('button', { name: 'Practice (4)', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('main .lesson-list .lesson-card-main h3')).toHaveText(experiments.slice(1, 5).map((lesson) => lesson.title))
  expect(await stored(page)).toEqual(beforeReload)
})

test('UI backup round-trip preserves original and external drafts, planned and tried practice, notes and attribution', async ({ page }) => {
  const initial = await openToday(page)
  const lesson = original('design-002')
  const notes = { [lesson.id]: 'Compare the muted green with the original.', [REFERENCE.id]: 'Café reference note. Check the article when researching later.' }
  for (const item of [lesson, REFERENCE]) {
    const dialog = await openReader(page, item)
    await dialog.getByRole('button', { name: 'Save this bite', exact: true }).click()
    await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
    await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill(notes[item.id])
    await practice(dialog, item).getByRole('button', { name: 'Plan this experiment', exact: true }).click()
    if (item.kind === 'discovery') await practice(dialog, item).getByRole('button', { name: 'Mark as tried', exact: true }).click()
    await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
    if (item.kind === 'discovery') await dialog.getByRole('button', { name: 'Reveal the reference', exact: true }).click()
    else await revealAnswer(dialog, lesson)
    await expectDraft(page, item, { stage: 'recall', choice: item.kind === 'discovery' ? null : lesson.quiz.correctIndex, revealed: true })
    await closeReader(page)
  }
  await expectCredit(page, initial.state)
  const before = await stored(page)
  expect(before.state.notes).toEqual(notes)
  expect(before.state.saved).toEqual([lesson.id, REFERENCE.id])
  expect(before.state.practices).toEqual({
    [lesson.id]: { status: 'planned', plannedOn: DAY },
    [REFERENCE.id]: { status: 'tried', plannedOn: DAY, triedOn: DAY },
  })
  await navigate(page, 'profile')
  const backup = await exportBackup(page)
  expect({ state: backup.document.state, discoveries: backup.document.discoveries }).toEqual(before)
  await confirmAction(page, () => page.getByRole('button', { name: 'Clear progress and library', exact: true }).click(), /^Clear all your UNSCROLL progress/)
  await expect(page.getByRole('status').filter({ hasText: 'Your local progress and library have been cleared.' })).toBeVisible()
  await waitForStored(page, (snapshot) => snapshot, { state: ensureDaily(createInitialState(DAY), lessons, DAY), discoveries: [] })
  await importBackup(page, backup.text, 'iteration-round-trip.json')
  await waitForStored(page, (snapshot) => snapshot, before)
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Your profile', exact: true })).toBeVisible()
  expect(await stored(page)).toEqual(before)
  await navigate(page, 'vault')
  await selectVault(page, 'Practice', 2)
  await expect(practice(vaultEntry(page, lesson), lesson).getByRole('button', { name: 'Mark as tried', exact: true })).toBeVisible()
  await expect(practice(vaultEntry(page, REFERENCE), REFERENCE).getByRole('button', { name: 'Undo tried', exact: true })).toBeVisible()
  await vaultEntry(page, lesson).getByRole('button', { name: 'Record what you noticed', exact: true }).click()
  let dialog = await reader(page, lesson)
  await expectStage(dialog, 'try')
  await expect(dialog.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(notes[lesson.id])
  await closeReader(page)
  await selectVault(page, 'Unfinished', 2)
  await card(page, lesson).locator('.lesson-card-main').click()
  await expectAnswer(await reader(page, lesson), lesson, lesson.quiz.correctIndex, true)
  await closeReader(page)
  await card(page, REFERENCE).locator('.lesson-card-main').click()
  dialog = await reader(page, REFERENCE)
  await expectStage(dialog, 'recall')
  await expect(dialog.getByRole('radio')).toHaveCount(0)
  await expect(dialog.locator('.quiz-feedback')).toContainText(REFERENCE.body[0])
  await expect(dialog.getByRole('button', { name: 'Reveal the reference', exact: true })).toHaveCount(0)
  await dialog.getByRole('navigation', { name: 'Lesson stages', exact: true }).getByRole('button', { name: /Understand$/ }).click()
  await expect(dialog.locator('.reader-prose > p')).toHaveText(REFERENCE.body)
  await expectSources(dialog, REFERENCE)
  await closeReader(page)
  await selectVault(page, 'Notes', 2)
  for (const item of [lesson, REFERENCE]) await expect(vaultEntry(page, item).locator('.panel')).toContainText(notes[item.id])
  await expectCredit(page, initial.state)
})

test('A canceled 6000-character paste keeps the old note and keyboard input stops at the 5000-character limit', async ({ page }) => {
  const initial = await openToday(page)
  const lesson = original('design-003')
  const dialog = await openReader(page, lesson)
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  const note = dialog.getByRole('textbox', { name: /Your note or experiment/ })
  const oldNote = 'Keep this café observation.'
  await note.fill(oldNote)
  await waitForStored(page, (snapshot) => snapshot.state.notes[lesson.id], oldNote)
  await expect(note).toHaveAttribute('maxlength', '5000')
  await expect(note).toHaveAttribute('aria-describedby', 'note-limit')
  const paste = await note.evaluate((element, text) => {
    const input = element as HTMLTextAreaElement
    input.focus()
    input.setSelectionRange(0, input.value.length)
    const formats: string[] = []
    const event = new ClipboardEvent('paste', { bubbles: true, cancelable: true, composed: true })
    Object.defineProperty(event, 'clipboardData', { value: { getData: (format: string) => {
      formats.push(format)
      return format === 'text' || format === 'text/plain' ? text : ''
    } } })
    const accepted = input.dispatchEvent(event)
    return { defaultPrevented: event.defaultPrevented, accepted, formats, value: input.value, size: text.length }
  }, 'x'.repeat(6000))
  // Synthetic paste has no default insertion, so unchanged text alone would not prove rejection.
  expect(paste).toEqual({ defaultPrevented: true, accepted: false, formats: ['text'], value: oldNote, size: 6000 })
  await expect(dialog.getByRole('alert')).toHaveText('That paste exceeds 5,000 characters. Nothing was pasted; shorten it first.')
  await expect(note).toHaveValue(oldNote)
  await expect(dialog.locator('#note-limit')).toHaveText(`${oldNote.length} / 5,000 characters.`)
  expect((await stored(page)).state.notes[lesson.id]).toBe(oldNote)

  const prefix = 'n'.repeat(4999)
  await note.fill(prefix)
  await note.press('End')
  await note.press('x')
  const atLimit = `${prefix}x`
  await expect(note).toHaveValue(atLimit)
  await expect(dialog.locator('#note-limit')).toHaveText('5,000 / 5,000 characters. Note limit reached.')
  await expect(dialog.getByRole('alert')).toHaveCount(0)
  await waitForStored(page, (snapshot) => snapshot.state.notes[lesson.id], atLimit)
  await note.press('y')
  await expect(note).toHaveValue(atLimit)
  expect((await stored(page)).state.notes[lesson.id]).toBe(atLimit)
  await page.reload()
  const restored = await reader(page, lesson)
  await expectStage(restored, 'try')
  await expect(restored.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(atLimit)
  await expect(restored.locator('#note-limit')).toHaveText('5,000 / 5,000 characters. Note limit reached.')
  await expectCredit(page, initial.state)
})

test('Search uses Patrick Jane and Sherlock path context and normalizes accents, colour and spaced terms without losing sources', async ({ page }) => {
  await openToday(page)
  await navigate(page, 'explore')
  const search = page.getByRole('searchbox', { name: 'Search lessons', exact: true })
  const titles = page.locator('.explore-results .lesson-card-main h3')
  const status = page.locator('.explore-results .section-heading [role="status"]')
  const relevantPaths = learningPaths.filter((path) => path.id === 'observe' || path.id === 'remember')
  expect(relevantPaths).toHaveLength(2)
  const pathIds = new Set(relevantPaths.flatMap((path) => path.lessonIds))
  const expected = lessons.filter((lesson) => pathIds.has(lesson.id))
  for (const query of ['Patrick Jane', '  SHÉRLOCK   HÓLMES  ']) {
    await search.fill(query)
    await expect(status).toHaveText(`${expected.length} bites`)
    const seen: string[] = []
    for (let offset = 0; offset < expected.length; offset += PAGE_SIZE) {
      await expect(titles).toHaveText(expected.slice(offset, offset + PAGE_SIZE).map((lesson) => lesson.title))
      seen.push(...await titles.allTextContents())
      if (offset + PAGE_SIZE < expected.length) {
        await page.getByRole('navigation', { name: 'Lesson pages', exact: true }).getByRole('button', { name: 'Next', exact: true }).click()
      }
    }
    expect(seen).toEqual(expected.map((lesson) => lesson.title))
  }

  const lesson = original('design-001')
  await search.fill('blackmagic pencil cup color')
  await expect(card(page, lesson)).toBeVisible()
  const canonicalTitles = await titles.allTextContents()
  const canonicalCount = await status.textContent()
  await search.fill('  BLÁCKMAGIC   PÉNCIL   CU\u0301P   COLOUR  ')
  await expect(titles).toHaveText(canonicalTitles)
  await expect(status).toHaveText(canonicalCount!)
  await card(page, lesson).locator('.lesson-card-main').click()
  const dialog = await reader(page, lesson)
  await expect(dialog.locator('.reader-prose > p')).toHaveText(lesson.body)
  await expectSources(dialog, lesson)
  await closeReader(page)
  await expect(search).toHaveValue('  BLÁCKMAGIC   PÉNCIL   CU\u0301P   COLOUR  ')
  await search.fill('blackmagic pencil cup colour zzzz-no-such-iteration-term')
  await expect(titles).toHaveCount(0)
  await expect(status).toHaveText('0 bites')
  await expect(page.getByRole('heading', { name: 'Try a different angle.', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Clear search', exact: true }).click()
  await expect(status).toHaveText(`${lessons.length + EDITION.lessons.length} bites`)
  await expect(titles).toHaveText(lessons.slice(0, PAGE_SIZE).map((item) => item.title))
})

test('Negative and fractional Explore and Vault pages show the complete first page rather than hiding or skipping results', async ({ page }) => {
  await openToday(page)
  await navigate(page, 'explore')
  const catalog = [...lessons, ...EDITION.lessons]
  for (let index = 0; index < PAGE_SIZE; index += 1) {
    const save = page.locator('.explore-results .save-button').nth(index)
    await save.click()
    await expect(save).toHaveAttribute('aria-pressed', 'true')
  }
  await page.getByRole('navigation', { name: 'Lesson pages', exact: true }).getByRole('button', { name: 'Next', exact: true }).click()
  await expect(page.locator('.explore-results .lesson-card-main h3').first()).toHaveText(lessons[PAGE_SIZE].title)
  await page.locator('.explore-results .save-button').first().click()
  const saved = lessons.slice(0, PAGE_SIZE + 1)
  await waitForStored(page, (snapshot) => snapshot.state.saved, saved.map((lesson) => lesson.id))
  const newestFirst = [...saved].reverse()
  for (const invalid of ['-3', '0', '0.5', '2.5']) {
    await visit(page, 'explore', { page: invalid })
    const exploreTitles = page.locator('.explore-results .lesson-card-main h3')
    await expect(exploreTitles).toHaveText(catalog.slice(0, PAGE_SIZE).map((lesson) => lesson.title))
    for (const title of await exploreTitles.all()) await expect(title).toBeVisible()
    await expect(page.locator('.explore-results .section-heading [role="status"]')).toHaveText(`${catalog.length} bites`)
    const explorePages = page.getByRole('navigation', { name: 'Lesson pages', exact: true })
    await expect(explorePages).toContainText(`1 / ${Math.ceil(catalog.length / PAGE_SIZE)}`)
    await expect(explorePages.getByRole('button', { name: 'Previous', exact: true })).toBeDisabled()
    await expect(explorePages.getByRole('button', { name: 'Next', exact: true })).toBeEnabled()
    await expectHorizontalLayout(page, `Explore page=${invalid}`)

    await visit(page, 'vault', { page: invalid })
    const vaultTitles = page.locator('main .lesson-list .lesson-card-main h3')
    await expect(vaultTitles).toHaveText(newestFirst.slice(0, PAGE_SIZE).map((lesson) => lesson.title))
    for (const title of await vaultTitles.all()) await expect(title).toBeVisible()
    await expect(page.getByRole('status').filter({ hasText: 'Showing 1 to' })).toHaveText(`Showing 1 to ${PAGE_SIZE} of ${saved.length} saved lessons.`)
    const vaultPages = page.getByRole('navigation', { name: 'Vault pages', exact: true })
    await expect(vaultPages).toContainText('Page 1 of 2')
    await expect(vaultPages.getByRole('button', { name: 'Previous page', exact: true })).toBeDisabled()
    await expect(vaultPages.getByRole('button', { name: 'Next page', exact: true })).toBeEnabled()
    await expectHorizontalLayout(page, `Vault page=${invalid}`)
  }
  await page.getByRole('navigation', { name: 'Vault pages', exact: true }).getByRole('button', { name: 'Next page', exact: true }).click()
  await expect(page.locator('main .lesson-list .lesson-card-main h3')).toHaveText(newestFirst.slice(PAGE_SIZE).map((lesson) => lesson.title))
})

test('Importing a legacy v1 backup clears an already displayed edition, aborts a held refresh and allows a new refresh', async ({ page, network }) => {
  await openToday(page)
  await expect(page.locator('.discovery-section .edition-status')).toHaveText(`Edition ${DAY} (UTC)`)
  await expect(card(page, REFERENCE)).toBeVisible()
  const paused = network.pauseNext(EDITION)
  await page.getByRole('button', { name: 'Refresh', exact: true }).click()
  const oldRequest = await paused.requested
  await expect(page.getByRole('button', { name: 'Checking', exact: true })).toBeDisabled()
  // Register before importing. Cancellation is a network event, not a synthesized page error.
  const canceled = page.waitForEvent('requestfailed', { predicate: (request) => request === oldRequest })
  const lesson = original('design-001')
  const legacy: LibrarySnapshot = { state: createInitialState(YESTERDAY), discoveries: [] }
  legacy.state.name = 'Legacy reader'
  legacy.state.saved = [lesson.id]
  legacy.state.notes = { [lesson.id]: 'A note from the older version 1 backup.' }
  expect(legacy.state).not.toHaveProperty('readerDrafts')
  expect(legacy.state).not.toHaveProperty('practices')
  expect(legacy.state).not.toHaveProperty('followedPath')
  const text = backupText(legacy, '2030-06-14T12:00:00.000Z')
  const imported: LibrarySnapshot = { state: ensureDaily(legacy.state, lessons, DAY), discoveries: [] }
  await navigate(page, 'profile')
  await importBackup(page, text, 'iteration-legacy-v1.json')
  await waitForStored(page, (snapshot) => snapshot, imported)
  await expect(page.getByLabel('Nickname (optional)', { exact: true })).toHaveValue('Legacy reader')
  await navigate(page, 'today')
  await expect(page.locator('.discovery-grid .lesson-card-main')).toHaveCount(0)
  await expect(page.locator('.discovery-section .edition-status'))
    .toHaveText('No downloaded edition is available. Refresh when connected; the original lesson library is still here.')
  await expect(page.getByRole('button', { name: 'Refresh', exact: true })).toBeEnabled()

  // The old route remains held while the replacement library starts and finishes a new request.
  network.edition = structuredClone(NEXT_EDITION)
  const countBeforeRefresh = network.requests.length
  await page.getByRole('button', { name: 'Refresh', exact: true }).click()
  await expect.poll(() => network.requests.length).toBe(countBeforeRefresh + 1)
  await expect(page.locator('.discovery-grid .lesson-card-main h3')).toHaveText([NEXT_REFERENCE.title])
  await expect(page.getByRole('button', { name: 'Refresh', exact: true })).toBeEnabled()
  paused.release()
  await paused.handled
  const failed = await canceled
  expect(failed).toBe(oldRequest)
  expect(failed.failure()?.errorText).toMatch(/abort|cancel|interrupt/i)
  const refreshed = { state: imported.state, discoveries: NEXT_EDITION.lessons }
  await waitForStored(page, (snapshot) => snapshot, refreshed)
  await expect(page.locator('.discovery-grid .lesson-card-main h3')).toHaveText([NEXT_REFERENCE.title])
  await expect(card(page, REFERENCE)).toHaveCount(0)
  await navigate(page, 'profile')
  const backup = await exportBackup(page)
  expect({ state: backup.document.state, discoveries: backup.document.discoveries }).toEqual(refreshed)
  expect(backup.document.state).not.toHaveProperty('readerDrafts')
  expect(backup.document.state).not.toHaveProperty('practices')
  await page.reload()
  await navigate(page, 'today')
  await expect(page.locator('.discovery-grid .lesson-card-main h3')).toHaveText([NEXT_REFERENCE.title])
  await waitForStored(page, (snapshot) => snapshot, refreshed)
})

test('A server-fresh edition from yesterday is labeled downloaded with its date and remains cached after reload', async ({ page, network }) => {
  const stale: DiscoveryEdition = {
    date: YESTERDAY, status: 'fresh', lessons: [{ ...REFERENCE, publishedAt: YESTERDAY }],
  }
  network.edition = stale
  await openToday(page, stale)
  const label = page.locator('.discovery-section .edition-status')
  await expect(label).toHaveText(`Downloaded edition ${YESTERDAY} (UTC), not a new edition for today.`)
  await expect(page.getByText(`Edition ${YESTERDAY} (UTC)`, { exact: true })).toHaveCount(0)
  await expect(page.getByText(`Edition ${DAY} (UTC)`, { exact: true })).toHaveCount(0)
  await card(page, REFERENCE).locator('.lesson-card-main').click()
  const dialog = await reader(page, REFERENCE)
  await expect(dialog.locator('.reader-meta')).toContainText('Wikipedia reference extract')
  await expect(dialog.locator('.reader-prose > p')).toHaveText(REFERENCE.body)
  await expectSources(dialog, REFERENCE)
  await dialog.getByRole('button', { name: 'Save this bite', exact: true }).click()
  await waitForStored(page, (snapshot) => snapshot.state.saved, [REFERENCE.id])
  await closeReader(page)
  const before = await stored(page)
  const requestsBefore = network.requests.length
  network.edition = structuredClone(UNAVAILABLE)
  await page.reload()
  await expect.poll(() => network.requests.length).toBeGreaterThan(requestsBefore)
  await expect(page.getByRole('button', { name: 'Refresh', exact: true })).toBeEnabled()
  await expect(label).toHaveText(`Downloaded edition ${YESTERDAY} (UTC). It may be older than today; saved references remain available.`)
  await expect(page.locator('.discovery-grid .lesson-card-main h3')).toHaveText([REFERENCE.title])
  await expect(page.getByText(`Edition ${DAY} (UTC)`, { exact: true })).toHaveCount(0)
  expect(await stored(page)).toEqual(before)
})

test('Completed and review readers ignore drafts, and repeating a review does not falsely report another scheduled review', async ({ page }) => {
  const initial = await openToday(page)
  const lesson = original('cinema-001')
  const unfinished = original('design-004')
  const seed = structuredClone(initial)
  seed.state.completed = { [lesson.id]: { date: YESTERDAY, correct: true } }
  seed.state.reviews = { [lesson.id]: { due: DAY, interval: 1, repetitions: 0 } }
  seed.state.activity = { [YESTERDAY]: 1 }
  seed.state.xp = 20
  // A valid backup can contain a stale draft for a completed lesson; it must not be resumed.
  seed.state.readerDrafts = {
    [lesson.id]: { stage: 'try', choice: lesson.quiz.correctIndex, revealed: true, updatedAt: CLOCK },
    [unfinished.id]: { stage: 'recall', choice: unfinished.quiz.correctIndex, revealed: true, updatedAt: CLOCK },
  }
  await navigate(page, 'profile')
  await importBackup(page, backupText(seed), 'iteration-review-v1.json')
  await waitForStored(page, (snapshot) => snapshot, seed)
  await navigate(page, 'vault')
  await selectVault(page, 'Unfinished', 1)
  await expect(page.locator('main .lesson-card-main h3')).toHaveText([unfinished.title])
  let dialog = await openReader(page, lesson)
  await expectStage(dialog, 'read')
  await expect(dialog.locator('.resume-notice')).toHaveCount(0)
  await dialog.getByRole('navigation', { name: 'Lesson stages', exact: true }).getByRole('button', { name: /Make it stick$/ }).click()
  await expect(dialog.locator('input[type="radio"]:checked')).toHaveCount(0)
  await expect(dialog.locator('.quiz-feedback')).toHaveCount(0)
  await closeReader(page)

  dialog = await openReader(page, unfinished, 'review', { mode: 'review' })
  await expect(dialog.getByRole('navigation', { name: 'Lesson stages', exact: true })).toHaveCount(0)
  await expect(dialog.locator('.resume-notice')).toHaveCount(0)
  await expect(dialog.locator('input[type="radio"]:checked')).toHaveCount(0)
  await expect(dialog.locator('.quiz-feedback')).toHaveCount(0)
  await revealAnswer(dialog, unfinished)
  await dialog.getByRole('button', { name: 'Got it', exact: true }).click()
  await expect(dialog.locator('.reader-done')).toContainText(PRACTICE_ONLY)
  await expect(dialog.getByText('Your next review is scheduled.', { exact: true })).toHaveCount(0)
  await expectCredit(page, seed.state)
  expect(await stored(page)).toEqual(seed)
  await closeReader(page)

  await navigate(page, 'review')
  await page.getByRole('button', { name: 'Start recall', exact: true }).click()
  dialog = await reader(page, lesson)
  await revealAnswer(dialog, lesson)
  await dialog.getByRole('button', { name: 'Got it', exact: true }).click()
  await expect(dialog.getByText('Your next review is scheduled.', { exact: true })).toBeVisible()
  const reviewed: LibrarySnapshot = { ...seed, state: {
    ...seed.state, xp: 25, activity: { [YESTERDAY]: 1, [DAY]: 1 },
    reviews: { [lesson.id]: { due: '2030-06-18', interval: 3, repetitions: 1, lastReviewed: DAY } },
  } }
  await waitForStored(page, (snapshot) => snapshot, reviewed)
  await closeReader(page)
  dialog = await openReader(page, lesson, 'review', { mode: 'review' })
  await expect(dialog.locator('.resume-notice')).toHaveCount(0)
  await expect(dialog.locator('input[type="radio"]:checked')).toHaveCount(0)
  await expect(dialog.locator('.quiz-feedback')).toHaveCount(0)
  await revealAnswer(dialog, lesson)
  await dialog.getByRole('button', { name: 'Easy recall', exact: true }).click()
  await expect(dialog.locator('.reader-done')).toContainText(PRACTICE_ONLY)
  await expect(dialog.getByText('Your next review is scheduled.', { exact: true })).toHaveCount(0)
  await expectCredit(page, reviewed.state)
  await closeReader(page)
  await page.reload()
  await expect(page.locator('.review-overview strong')).toHaveText(['0', '1', '1'])
  expect(await stored(page)).toEqual(reviewed)
})

test('Practice, Unfinished and restored reader states pass Axe and fit full mobile viewports without clipped controls', async ({ page }) => {
  test.setTimeout(120_000)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  const initial = await openToday(page)
  const lesson = original('design-001')
  let dialog = await openReader(page, lesson)
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill('Café experiment: compare the cup and its background.')
  await practice(dialog, lesson).getByRole('button', { name: 'Plan this experiment', exact: true }).click()
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await revealAnswer(dialog, lesson)
  await expectDraft(page, lesson, { stage: 'recall', choice: lesson.quiz.correctIndex, revealed: true })
  await closeReader(page)

  for (const viewport of [{ width: 320, height: 640 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport)
    await navigate(page, 'vault')
    await selectVault(page, 'Practice', 1)
    await expectHorizontalLayout(page, `Practice ${viewport.width}`)
    await expect(page.locator('nav.mobile-nav')).toBeInViewport({ ratio: 1 })
    if (viewport.width === 390) await scanAccessibility(page, 'Vault Practice')
    await selectVault(page, 'Unfinished', 1)
    await expectHorizontalLayout(page, `Unfinished ${viewport.width}`)
    if (viewport.width === 390) await scanAccessibility(page, 'Vault Unfinished')
    await card(page, lesson).locator('.lesson-card-main').click()
    dialog = await reader(page, lesson)
    await expectStage(dialog, 'recall')
    await expectAnswer(dialog, lesson, lesson.quiz.correctIndex, true)
    await expect(dialog.locator('.resume-notice')).toContainText('Your unfinished bite is restored.')
    await expectHorizontalLayout(page, `Restored Recall ${viewport.width}`)
    await expectMobileReader(page, dialog, `Restored Recall ${viewport.width}`)
    if (viewport.width === 390) await scanAccessibility(page, 'Restored Recall with feedback')
    await dialog.getByRole('navigation', { name: 'Lesson stages', exact: true }).getByRole('button', { name: /Put it to use$/ }).click()
    await expectStage(dialog, 'try')
    await expectHorizontalLayout(page, `Restored Try ${viewport.width}`)
    await expectMobileReader(page, dialog, `Restored Try ${viewport.width}`)
    if (viewport.width === 390) await scanAccessibility(page, 'Restored Try with practice and note')
    await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
    await closeReader(page)
  }

  // Forget only the unfinished position. The saved note and independent practice record stay intact.
  await vaultEntry(page, lesson).getByRole('button', { name: 'Forget this position', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'No unfinished steps.', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Pick up where you left off', exact: true })).toBeFocused()
  await waitForStored(page, (snapshot) => ({ drafts: snapshot.state.readerDrafts, practice: snapshot.state.practices?.[lesson.id], note: snapshot.state.notes[lesson.id] }), {
    drafts: undefined, practice: { status: 'planned', plannedOn: DAY }, note: 'Café experiment: compare the cup and its background.',
  })
  await expectCredit(page, initial.state)
  await page.reload()
  await expect(page.getByRole('button', { name: 'Unfinished (0)', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByRole('button', { name: 'Practice (1)', exact: true })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Notes (1)', exact: true })).toBeVisible()
})