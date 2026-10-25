import { createHash } from 'node:crypto'
import AxeBuilder from '@axe-core/playwright'
import { test as base, expect, type Locator, type Page, type Request } from '@playwright/test'
import { lessonById, lessons, originalLessonMetadata } from '../../src/data'
import { completeLesson, createInitialState } from '../../src/lib/learning'
import { backupSchema, editionSchema, stateSchema } from '../../src/lib/schema'
import type { LibrarySnapshot } from '../../src/lib/storage'
import { TEACHING_REVISION } from '../../src/teaching'
import type { LessonGuide } from '../../src/teaching/types'
import visualAssets from '../../src/teaching/visual-assets.json' with { type: 'json' }
import type { AppState, Lesson, ReaderDraft } from '../../src/types'

const CLOCK = '2030-06-15T12:00:00.000Z'
const OLD_TIME = '2030-06-14T12:00:00.000Z'
const DAY = '2030-06-15'
const OLD_DAY = '2030-06-14'
const TOMORROW = '2030-06-16'
const FALLBACK_URL = 'http://localhost:4173'
const STORAGE_KEY = 'unscroll-library-v1'
const UPDATED = 'This lesson now has a fuller explanation and a new question. Start with the updated lesson; your notes, saved items, and previous completions are unchanged.'
const UNAVAILABLE = editionSchema.parse({
  date: DAY, status: 'unavailable', lessons: [],
  message: 'No external references in this isolated teaching test. The original library remains available.',
})

type GuidedLesson = Lesson & { guide: LessonGuide; quiz: NonNullable<Lesson['quiz']>; revision: string }
interface VisualAsset { src: string; width: number; height: number; sha256: string; title?: string; alt?: string; caption?: string }
const assets = visualAssets as Record<string, VisualAsset[]>

function guided(id: string): GuidedLesson {
  const lesson = lessonById.get(id)
  if (!lesson?.guide || !lesson.quiz || !lesson.revision || lesson.kind) throw new Error(`Expected a current original guide: ${id}`)
  return lesson as GuidedLesson
}

const BOUNCE = guided('cinema-027')
const SOURCED = guided('design-023')
const COMPLETED = guided('money-001')

function illustration(lesson: GuidedLesson, index = 0) {
  const asset = assets[lesson.id]?.[index]
  const visual = lesson.guide.visuals[index]
  if (!asset || !visual) throw new Error(`Missing illustration metadata: ${lesson.id}/${index}`)
  return { ...asset, title: asset.title ?? visual.title, alt: asset.alt ?? visual.alt, caption: asset.caption ?? visual.caption, visual }
}

const test = base.extend<{ teachingNetwork: Request[] }>({
  teachingNetwork: [async ({ context, page, baseURL }, use) => {
    const origin = new URL(baseURL ?? FALLBACK_URL).origin
    const requests: Request[] = []
    const blocked: string[] = []
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await context.route('**/*', async (route) => {
      const request = route.request()
      const url = new URL(request.url())
      if (url.origin !== origin) {
        blocked.push(request.url())
        await route.abort('blockedbyclient')
      } else if (url.pathname === '/.netlify/functions/discover') {
        requests.push(request)
        try {
          await route.fulfill({ status: 503, contentType: 'application/json', headers: { 'Cache-Control': 'no-store' }, body: JSON.stringify(UNAVAILABLE) })
        } catch (error) {
          if (!request.failure() && !page.isClosed()) throw error
          await route.abort('aborted').catch(() => {})
        }
      } else if (url.pathname.startsWith('/.netlify/functions/') || url.pathname.startsWith('/api/')) {
        blocked.push(request.url())
        await route.abort('blockedbyclient')
      } else {
        await route.continue()
      }
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks -- Playwright fixture callback, not a React hook.
    try { await use(requests) }
    finally { await context.unrouteAll({ behavior: 'wait' }) }
    expect(blocked, 'Only the local app, local assets and the simulated discovery endpoint are permitted').toEqual([])
    expect(requests.length, 'The real client should reach the simulated 503 endpoint').toBeGreaterThan(0)
    for (const request of requests) {
      expect(request.method()).toBe('GET')
      expect(request.postData(), 'Notes, answers and progress must stay local').toBeNull()
      expect(new URL(request.url()).search).toBe('')
    }
    expect(errors, 'Uncaught application errors').toEqual([])
  }, { auto: true }],
})

// Inherit all three configured projects. Do not fake navigator.onLine or change
// connectivity; real offline/service-worker coverage belongs to the PWA suite.
test.use({ serviceWorkers: 'block', timezoneId: 'Asia/Kolkata', locale: 'en-US', reducedMotion: 'reduce' })
test.describe.configure({ timeout: 90_000 })
test.beforeEach(async ({ page }) => { await page.clock.setFixedTime(new Date(CLOCK)) })

function appUrl(screen: 'explore' | 'profile' = 'explore', lesson?: GuidedLesson) {
  const url = new URL('/', test.info().project.use.baseURL ?? FALLBACK_URL)
  url.hash = `/${screen}${lesson ? `?${new URLSearchParams({ lesson: lesson.id })}` : ''}`
  return url.href
}

function issuedSnapshot(): LibrarySnapshot {
  const state: AppState = {
    ...createInitialState(OLD_DAY), name: 'Teaching fixture', xp: 20, welcomeDismissed: true, reducedMotion: true,
    completed: { [COMPLETED.id]: { date: OLD_DAY, correct: true } },
    reviews: { [COMPLETED.id]: { due: TOMORROW, interval: 2, repetitions: 0 } }, activity: { [OLD_DAY]: 1 },
    saved: [BOUNCE.id, SOURCED.id],
    notes: {
      [BOUNCE.id]: 'Keep the handle observation.\nCafé window, same phone position.',
      [SOURCED.id]: 'Read the date and venue before judging the heading.',
      [COMPLETED.id]: 'Preserve this previously completed lesson note.',
    },
    collections: [{ id: 'teaching-notes', name: 'Teaching notes', lessonIds: [BOUNCE.id, SOURCED.id] }],
    practices: { [BOUNCE.id]: { status: 'planned', plannedOn: OLD_DAY } },
  }
  const reserved = new Set([BOUNCE.id, SOURCED.id, COMPLETED.id])
  state.daily = { date: DAY, ids: [BOUNCE.id, SOURCED.id, ...lessons.filter((lesson) => !reserved.has(lesson.id)).slice(0, state.goal - 2).map((lesson) => lesson.id)] }
  state.delivered = [COMPLETED.id, ...state.daily.ids]
  return { state: stateSchema.parse(state), discoveries: [] }
}

async function readStored(page: Page): Promise<LibrarySnapshot | undefined> {
  return page.evaluate((key) => new Promise<LibrarySnapshot | undefined>((resolve, reject) => {
    const opening = indexedDB.open('keyval-store')
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      if (!db.objectStoreNames.contains('keyval')) { db.close(); reject(new Error('The library object store is missing')); return }
      const transaction = db.transaction('keyval', 'readonly')
      const request = transaction.objectStore('keyval').get(key)
      let snapshot: LibrarySnapshot | undefined
      request.onsuccess = () => { snapshot = request.result as LibrarySnapshot | undefined }
      transaction.oncomplete = () => { db.close(); resolve(snapshot) }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), STORAGE_KEY)
}

async function waitForStored(page: Page, select: (snapshot: LibrarySnapshot) => unknown, expected: unknown) {
  await expect.poll(async () => {
    const snapshot = await readStored(page)
    return snapshot ? select(snapshot) : undefined
  }, { message: 'Wait for the application-owned IndexedDB commit, not only the rendered state' }).toEqual(expected)
}

async function seedAndLoad(page: Page, snapshot: LibrarySnapshot, lesson?: GuidedLesson, screen: 'explore' | 'profile' = 'explore') {
  stateSchema.parse(snapshot.state)
  // A separate query forces a document navigation even when a previous test step
  // was on another hash route. No React code runs until this transaction commits.
  const seedUrl = new URL('/?teaching-fixture=seed', appUrl()).href
  await page.route(seedUrl, (route) => route.fulfill({
    contentType: 'text/html', body: '<!doctype html><html lang="en"><head><title>Teaching storage fixture</title></head><body></body></html>',
  }), { times: 1 })
  await page.goto(seedUrl)
  await page.evaluate(({ key, value }) => new Promise<void>((resolve, reject) => {
    const opening = indexedDB.open('keyval-store')
    opening.onupgradeneeded = () => { opening.result.createObjectStore('keyval') }
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      const transaction = db.transaction('keyval', 'readwrite')
      transaction.objectStore('keyval').put(value, key)
      transaction.oncomplete = () => { db.close(); resolve() }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), { key: STORAGE_KEY, value: snapshot })
  expect(await readStored(page), 'The saved state exists before the reader mounts').toEqual(snapshot)
  await page.goto(appUrl(screen, lesson))
  await expect(page.locator('main#main')).toBeVisible()
}

async function reader(page: Page, lesson: GuidedLesson) {
  // Illustration dialogs stay mounted while closed. Never count all dialogs or
  // let an enlarged illustration stand in for the top-level lesson dialog.
  const dialog = page.locator('dialog.reader-dialog[open]')
  await expect(dialog).toHaveCount(1)
  await expect(dialog).toHaveRole('dialog')
  await expect(dialog).toHaveAccessibleName(lesson.title)
  await expect(dialog.getByRole('heading', { level: 1, name: lesson.title, exact: true })).toBeVisible()
  return dialog
}

async function openReader(page: Page, lesson: GuidedLesson) {
  await page.goto(appUrl('explore', lesson))
  return reader(page, lesson)
}

async function closeReader(page: Page) {
  await page.locator('dialog.reader-dialog[open]').getByRole('button', { name: 'Close lesson', exact: true }).click()
  await expect(page.locator('dialog.reader-dialog')).toHaveCount(0)
}

const stageNames = { read: /Understand$/, try: /Put it to use$/, recall: /Make it stick$/ }
async function expectStage(dialog: Locator, stage: ReaderDraft['stage']) {
  await expect(dialog.getByRole('navigation', { name: 'Lesson stages' }).getByRole('button', { name: stageNames[stage] })).toHaveAttribute('aria-current', 'step')
}

async function goToStage(dialog: Locator, stage: ReaderDraft['stage']) {
  await dialog.getByRole('navigation', { name: 'Lesson stages' }).getByRole('button', { name: stageNames[stage] }).click()
  await expectStage(dialog, stage)
}

function credit(state: AppState) {
  return { xp: state.xp, completed: state.completed, reviews: state.reviews, activity: state.activity }
}

function withoutDrafts(state: AppState) {
  const result = { ...state }
  delete result.readerDrafts
  return result
}

async function expectCredit(page: Page, baseline: AppState) {
  await waitForStored(page, (snapshot) => credit(snapshot.state), credit(baseline))
  await expect(page.locator('.xp-label')).toHaveText(`${baseline.xp} XP`)
}

async function expectLoaded(image: Locator, asset: VisualAsset) {
  await expect(image).toBeVisible()
  await image.scrollIntoViewIfNeeded()
  await expect(image).toHaveAttribute('src', asset.src)
  await expect(image).toHaveAttribute('width', String(asset.width))
  await expect(image).toHaveAttribute('height', String(asset.height))
  await expect.poll(() => image.evaluate((element: HTMLImageElement) => ({
    complete: element.complete, width: element.naturalWidth, height: element.naturalHeight,
  }))).toEqual({ complete: true, width: asset.width, height: asset.height })
}

async function expectUnderstand(dialog: Locator, lesson: GuidedLesson) {
  await expectStage(dialog, 'read')
  await expect(dialog.locator('.reader-hook')).toHaveText(lesson.guide.outcome)
  const sections = dialog.locator('.guided-prose > .teaching-section')
  await expect(sections).toHaveCount(lesson.guide.sections.length)
  for (const [index, section] of lesson.guide.sections.entries()) {
    await expect(sections.nth(index).getByRole('heading', { level: 2, name: section.title, exact: true })).toBeVisible()
    await expect(sections.nth(index).locator(':scope > p')).toHaveText(section.paragraphs)
    for (const paragraph of await sections.nth(index).locator(':scope > p').all()) await expect(paragraph).toBeVisible()
  }
  await expect(dialog.locator('.takeaway p')).toHaveText(lesson.guide.takeaway)
}

async function expectSources(dialog: Locator, lesson: GuidedLesson) {
  const sources = dialog.locator('.sources')
  await sources.locator(':scope > summary').click()
  await expect(sources.locator(':scope > p').first()).toHaveText(lesson.guide.sourceNote)
  await expect(sources.locator(':scope > p').first()).toBeVisible()
  const entries = sources.locator('li')
  await expect(entries).toHaveCount(lesson.sources.length)
  for (const [index, source] of lesson.sources.entries()) {
    const link = entries.nth(index).getByRole('link')
    await expect(link).toHaveText(source.title)
    await expect(link).toHaveAttribute('href', source.url)
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', /noopener noreferrer/)
    await expect(entries.nth(index).locator(':scope > span')).toHaveText(source.publisher)
  }
}

async function expectAnswer(dialog: Locator, lesson: GuidedLesson, choice: number | null, revealed: boolean) {
  const radios = dialog.getByRole('group', { name: lesson.quiz.question, exact: true }).getByRole('radio')
  await expect(radios).toHaveCount(lesson.quiz.options.length)
  await expect(dialog.locator('.quiz-option > span:not(.option-letter)')).toHaveText(lesson.quiz.options)
  for (const index of lesson.quiz.options.keys()) {
    await expect(radios.nth(index)).toBeChecked({ checked: index === choice })
    await expect(radios.nth(index)).toBeEnabled({ enabled: !revealed })
  }
  await expect(dialog.locator('.quiz-feedback')).toHaveCount(revealed ? 1 : 0)
  if (revealed) await expect(dialog.locator('.quiz-feedback p')).toHaveText(lesson.quiz.explanation)
  else await expect(dialog.getByRole('button', { name: 'Check my answer', exact: true })).toBeEnabled({ enabled: choice !== null })
}

async function expectHorizontalLayout(page: Page, scope: Locator, label: string) {
  await page.evaluate(async () => { await document.fonts.ready })
  const result = await scope.evaluate((root) => {
    const viewport = window.innerWidth
    const selectors = [
      '.reader-shell', '.reader-content', '.reader-toolbar', '.reader-steps', '.reader-footer',
      'h1', 'h2', 'h3', 'p', '.teaching-visual-heading', 'figcaption', '.visual-description',
      '.teaching-image', '.practice-materials', '.practice-steps', '.practice-observe',
      '.practice-troubleshooting', '.transfer-question', '.quiz-options', '.quiz-option',
      '.visual-viewer header', '.visual-viewer-scroll', '.field-input',
    ].join(',')
    const overflow = [root, ...root.querySelectorAll<HTMLElement>(selectors)].flatMap((element) => {
      if (!(element instanceof HTMLElement) || !element.getClientRects().length || element.closest('dialog:not([open])')) return []
      const rect = element.getBoundingClientRect()
      if (!rect.width || getComputedStyle(element).visibility === 'hidden') return []
      // Only the enlarged diagram's labelled inspection pane may scroll sideways.
      const scrollable = element.matches('.visual-viewer-scroll')
      if (rect.left >= -1 && rect.right <= viewport + 1 && (scrollable || element.scrollWidth <= element.clientWidth + 1)) return []
      return [{ element: `${element.tagName}.${element.className}`, left: rect.left, right: rect.right,
        client: element.clientWidth, scroll: element.scrollWidth, text: element.textContent?.trim().slice(0, 90) }]
    })
    return { viewport, documentWidth: document.documentElement.scrollWidth, overflow }
  })
  expect(result.documentWidth, `${label}: page width`).toBeLessThanOrEqual(result.viewport + 1)
  expect(result.overflow, `${label}: no clipped text or horizontal page overflow`).toEqual([])
}

async function scanAccessibility(page: Page, label: string) {
  const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  expect(result.violations, `${label}: WCAG scan without rule exclusions`).toEqual([])
}

test('cinema-027 loads the approved drawing with current descriptions and Escape returns focus without closing the lesson', async ({ page }) => {
  const initial = issuedSnapshot()
  const asset = illustration(BOUNCE)
  const downloaded = page.waitForResponse((response) => new URL(response.url()).pathname === asset.src && response.request().resourceType() === 'image')
  await seedAndLoad(page, initial, BOUNCE)
  const dialog = await reader(page, BOUNCE)
  await expectUnderstand(dialog, BOUNCE)
  const figure = dialog.locator('.teaching-visual').first()
  await expect(figure.locator('.teaching-visual-heading h3')).toHaveText(asset.title)
  await expect(figure.locator(':scope > figcaption')).toHaveText(asset.caption)
  await expect(figure.locator(':scope > figcaption')).toBeVisible()
  const image = figure.locator(':scope > img.teaching-image')
  await expectLoaded(image, asset)
  await expect(image).toHaveAccessibleName(asset.alt)
  expect(asset.alt, 'This approved drawing has a different description from the generic specification').not.toBe(asset.visual.alt)
  await expect(image).not.toHaveAttribute('alt', asset.visual.alt)
  const response = await downloaded
  expect(response.ok()).toBe(true)
  expect(response.headers()['content-type']).toContain('image/svg+xml')
  expect(createHash('sha256').update(await response.body()).digest('hex'), 'Verify the served bytes, not merely a nonzero image size').toBe(asset.sha256)
  await expectSources(dialog, BOUNCE)

  const enlarge = figure.getByRole('button', { name: `Enlarge diagram: ${asset.title}`, exact: true })
  await enlarge.focus()
  await enlarge.press('Enter')
  const viewer = page.locator('dialog.visual-viewer[open]')
  await expect(viewer).toHaveCount(1)
  await expect(viewer).toHaveRole('dialog')
  await expect(viewer).toHaveAccessibleName(`Enlarged diagram: ${asset.title}`)
  await expectLoaded(viewer.getByRole('img', { name: asset.alt, exact: true }), asset)
  await expect(viewer.locator(':scope > p')).toHaveText(asset.caption)
  await expect(dialog).toHaveJSProperty('open', true)
  await page.keyboard.press('Escape')
  await expect(page.locator('dialog.visual-viewer[open]')).toHaveCount(0)
  await expect(dialog).toBeVisible()
  await expect(dialog).toHaveAccessibleName(BOUNCE.title)
  await expect(enlarge).toBeFocused()
  await waitForStored(page, (snapshot) => snapshot, initial)
})

test('guided text, source overrides, image fallback and every practice field remain usable while notes retain their lesson ID', async ({ page }) => {
  const initial = issuedSnapshot()
  const asset = illustration(SOURCED)
  // A failed same-origin asset is deliberate; never disable the network or ask a
  // real external host to fail. The successful-image path is covered separately.
  await page.route(new URL(asset.src, appUrl()).href, (route) => route.fulfill({ status: 404, contentType: 'text/plain', body: 'Fixture diagram unavailable' }))
  await seedAndLoad(page, initial, SOURCED)
  let dialog = await reader(page, SOURCED)
  await expectUnderstand(dialog, SOURCED)
  expect(SOURCED.guide.sources).toBeDefined()
  await expectSources(dialog, SOURCED)
  const figure = dialog.locator('.teaching-visual').first()
  await figure.scrollIntoViewIfNeeded()
  await expect(figure.locator('.inline-notice')).toHaveText('This diagram could not load. Its explanation and all labels are available below.')
  await expect(figure.locator(':scope > img.teaching-image')).toHaveCount(0)
  await expect(figure.locator(':scope > figcaption')).toHaveText(asset.caption)
  const description = figure.locator('.visual-description')
  await expect(description).toHaveJSProperty('open', true)
  await expect(description.locator(':scope > p')).toHaveText(asset.alt)
  await expect(description.locator('li')).toHaveCount(asset.visual.items.length)
  for (const [index, item] of asset.visual.items.entries()) {
    await expect(description.locator('li').nth(index)).toContainText(`${item.label}.`)
    await expect(description.locator('li').nth(index)).toContainText(item.detail)
    await expect(description.locator('li').nth(index)).toBeVisible()
  }

  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await expectStage(dialog, 'try')
  const practice = SOURCED.guide.practice
  await expect(dialog.locator('.practice-duration')).toHaveText(`Allow about ${practice.minutes} minutes to try it, separate from reading.`)
  await expect(dialog.locator('.practice-materials > li')).toHaveText(practice.needs)
  await expect(dialog.locator('.practice-steps > li')).toHaveText(practice.steps)
  for (const item of await dialog.locator('.practice-materials > li, .practice-steps > li').all()) {
    await item.scrollIntoViewIfNeeded()
    // Subpixel intersection rounding can report 0.999 for a fully readable row.
    await expect(item).toBeInViewport({ ratio: .99 })
  }
  await expect(dialog.locator('.practice-observe p')).toHaveText(practice.notice)
  await expect(dialog.locator('.practice-observe p')).toBeVisible()
  const troubleshooting = dialog.locator('.practice-troubleshooting')
  await expect(troubleshooting.locator('p')).not.toBeVisible()
  await troubleshooting.locator('summary').click()
  await expect(troubleshooting.locator('p')).toHaveText(practice.troubleshooting)
  await expect(troubleshooting.locator('p')).toBeVisible()

  const note = 'The date was faint at phone size.\nKeep contrast and letter size as separate observations.'
  const input = dialog.getByRole('textbox', { name: /Your note or experiment/ })
  await expect(input).toHaveValue(initial.state.notes[SOURCED.id])
  await input.fill(note)
  const expected: LibrarySnapshot = { ...initial, state: { ...initial.state,
    notes: { ...initial.state.notes, [SOURCED.id]: note },
    readerDrafts: { [SOURCED.id]: { stage: 'try', choice: null, revealed: false, updatedAt: CLOCK, lessonRevision: TEACHING_REVISION } },
  } }
  await waitForStored(page, (snapshot) => snapshot, expected)
  await expectCredit(page, initial.state)
  await closeReader(page)
  dialog = await openReader(page, SOURCED)
  await expectStage(dialog, 'try')
  await expect(dialog.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(note)
  await page.reload()
  dialog = await reader(page, SOURCED)
  await expect(dialog.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(note)
  await waitForStored(page, (snapshot) => snapshot, expected)
})

test('a current-revision choice resumes, transfer hints and answers award no credit, and checked feedback survives reopening', async ({ page }) => {
  const initial = issuedSnapshot()
  const choice = ((BOUNCE.quiz.correctIndex + 1) % BOUNCE.quiz.options.length) as 0 | 1 | 2
  initial.state.readerDrafts = { [BOUNCE.id]: { stage: 'recall', choice, revealed: false, updatedAt: OLD_TIME, lessonRevision: TEACHING_REVISION } }
  await seedAndLoad(page, initial, BOUNCE)
  let dialog = await reader(page, BOUNCE)
  await expectStage(dialog, 'recall')
  await expect(dialog.locator('.resume-notice')).toContainText('Your unfinished bite is restored. No completion was recorded.')
  await expect(dialog.getByText(UPDATED, { exact: true })).toHaveCount(0)
  await expectAnswer(dialog, BOUNCE, choice, false)
  const transfer = dialog.getByRole('region', { name: 'Apply the idea to a new situation', exact: true })
  await expect(transfer.locator(':scope > p').first()).toHaveText(BOUNCE.guide.recall.prompt)
  await expect(transfer.locator(':scope > p').first()).toBeVisible()
  const hint = transfer.locator('details')
  await expect(hint.locator('p')).not.toBeVisible()
  await hint.locator('summary').click()
  await expect(hint.locator('p')).toHaveText(BOUNCE.guide.recall.hint)
  await expect(hint.locator('p')).toBeVisible()
  await expect(hint.getByRole('button', { name: 'Revisit the explanation', exact: true })).toBeVisible()
  const compare = transfer.getByRole('button', { name: 'Compare with an example answer', exact: true })
  await expect(compare).toHaveAttribute('aria-expanded', 'false')
  await compare.click()
  await expect(transfer.locator('.transfer-answer')).toHaveText(BOUNCE.guide.recall.answer)
  await expect(transfer.locator('.transfer-answer')).toBeVisible()
  await transfer.getByRole('button', { name: 'Hide the example reasoning', exact: true }).click()
  await expect(transfer.locator('.transfer-answer')).toHaveCount(0)
  await expectAnswer(dialog, BOUNCE, choice, false)
  await waitForStored(page, (snapshot) => snapshot, initial)
  await expectCredit(page, initial.state)

  await dialog.getByRole('button', { name: 'Check my answer', exact: true }).click()
  await expectAnswer(dialog, BOUNCE, choice, true)
  await expect(dialog.getByRole('button', { name: 'Complete bite', exact: true })).toBeEnabled()
  const expected: LibrarySnapshot = { ...initial, state: { ...initial.state,
    readerDrafts: { [BOUNCE.id]: { stage: 'recall', choice, revealed: true, updatedAt: CLOCK, lessonRevision: TEACHING_REVISION } },
  } }
  await waitForStored(page, (snapshot) => snapshot, expected)
  await expectCredit(page, initial.state)
  await closeReader(page)
  dialog = await openReader(page, BOUNCE)
  await expectStage(dialog, 'recall')
  await expectAnswer(dialog, BOUNCE, choice, true)
  await page.reload()
  dialog = await reader(page, BOUNCE)
  await expectAnswer(dialog, BOUNCE, choice, true)
  await waitForStored(page, (snapshot) => snapshot, expected)
  await expectCredit(page, initial.state)
})

test('missing and obsolete draft revisions reset the old quiz without losing notes, saved items or completion history', async ({ page }) => {
  for (const revision of [undefined, 'condensed-v0']) {
    await test.step(revision === undefined ? 'Draft has no revision' : 'Draft has an obsolete revision', async () => {
      const initial = issuedSnapshot()
      const choice = ((BOUNCE.quiz.correctIndex + 1) % BOUNCE.quiz.options.length) as 0 | 1 | 2
      initial.state.readerDrafts = {
        [BOUNCE.id]: { stage: 'recall', choice, revealed: true, updatedAt: OLD_TIME, ...(revision === undefined ? {} : { lessonRevision: revision }) },
        [SOURCED.id]: { stage: 'try', choice: null, revealed: false, updatedAt: OLD_TIME, lessonRevision: TEACHING_REVISION },
      }
      await seedAndLoad(page, initial, BOUNCE)
      let dialog = await reader(page, BOUNCE)
      await expectStage(dialog, 'read')
      await expect(dialog.getByText(UPDATED, { exact: true })).toBeVisible()
      await expect(dialog.locator('.resume-notice')).toHaveCount(0)
      await expect(dialog.getByRole('button', { name: 'Unsave this bite', exact: true })).toHaveAttribute('aria-pressed', 'true')
      // Mounting chooses fresh UI state, but does not rewrite the stored draft.
      await waitForStored(page, (snapshot) => snapshot, initial)
      await goToStage(dialog, 'recall')
      await expectAnswer(dialog, BOUNCE, null, false)
      await expect(dialog.getByRole('button', { name: 'Complete bite', exact: true })).toBeDisabled()
      const fresh: ReaderDraft = { stage: 'recall', choice: null, revealed: false, updatedAt: CLOCK, lessonRevision: TEACHING_REVISION }
      await waitForStored(page, (snapshot) => snapshot.state.readerDrafts, { ...initial.state.readerDrafts, [BOUNCE.id]: fresh })
      await waitForStored(page, (snapshot) => withoutDrafts(snapshot.state), withoutDrafts(initial.state))
      await expectCredit(page, initial.state)
      await goToStage(dialog, 'try')
      await expect(dialog.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(initial.state.notes[BOUNCE.id])
      await waitForStored(page, (snapshot) => snapshot.state.readerDrafts, { ...initial.state.readerDrafts, [BOUNCE.id]: { ...fresh, stage: 'try' } })
      await closeReader(page)
      dialog = await openReader(page, BOUNCE)
      await expectStage(dialog, 'try')
      await expect(dialog.locator('.resume-notice')).toBeVisible()
      await expect(dialog.getByText(UPDATED, { exact: true })).toHaveCount(0)
      await goToStage(dialog, 'recall')
      await expectAnswer(dialog, BOUNCE, null, false)
      await waitForStored(page, (snapshot) => snapshot.state.readerDrafts, { ...initial.state.readerDrafts, [BOUNCE.id]: fresh })
      await waitForStored(page, (snapshot) => withoutDrafts(snapshot.state), withoutDrafts(initial.state))
      await closeReader(page)
    })
  }
})

test('an old v1 backup retains saved and completed IDs and a revised lesson revisit cannot award completion XP again', async ({ page }) => {
  const initial = issuedSnapshot()
  initial.state.name = 'Before import'
  await seedAndLoad(page, initial, undefined, 'profile')
  await expect(page.getByRole('heading', { level: 1, name: 'Your profile', exact: true })).toBeVisible()
  const legacy = originalLessonMetadata.find((lesson) => lesson.id === BOUNCE.id)!
  expect(legacy.guide).toBeUndefined()
  const restored = issuedSnapshot()
  restored.state = completeLesson(restored.state, legacy, false, OLD_DAY)
  restored.state.name = 'Restored legacy reader'
  restored.state.notes[BOUNCE.id] = 'Written before the guided revision.\nKeep this note and its original completion.'
  delete restored.state.readerDrafts
  delete restored.state.practices
  const document = backupSchema.parse({ app: 'UNSCROLL', version: 1, exportedAt: OLD_TIME, ...restored })
  const region = page.getByRole('region', { name: 'Backups and clearing data', exact: true })
  const pendingChooser = page.waitForEvent('filechooser')
  await region.getByRole('button', { name: 'Import backup', exact: true }).click()
  const chooser = await pendingChooser
  const confirmation = new Promise<{ type: string; message: string }>((resolve, reject) => {
    page.once('dialog', (modal) => {
      const details = { type: modal.type(), message: modal.message() }
      void modal.accept().then(() => resolve(details), reject)
    })
  })
  const [confirmed] = await Promise.all([
    confirmation,
    chooser.setFiles({ name: 'legacy-teaching.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(document), 'utf8') }),
  ])
  expect(confirmed.type).toBe('confirm')
  expect(confirmed.message).toBe('Import "legacy-teaching.json" and replace the progress, saved lessons, notes, collections and preferences in this browser? Cancel and export a backup first if you want to keep your current library.')
  await expect(region.getByRole('status').filter({ hasText: 'Backup imported.' })).toHaveText('Backup imported. Your library now uses the progress, notes and preferences from that backup.')
  await expect(page.getByLabel('Nickname (optional)', { exact: true })).toHaveValue(restored.state.name)
  await waitForStored(page, (snapshot) => snapshot, restored)
  await page.getByRole('region', { name: 'Recent completions', exact: true }).getByRole('button', { name: BOUNCE.title, exact: true }).click()
  const dialog = await reader(page, BOUNCE)
  await expectUnderstand(dialog, BOUNCE)
  await expect(dialog.locator('.reader-meta')).toContainText('Revisiting / no extra completion XP')
  await expect(dialog.getByRole('button', { name: 'Unsave this bite', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await goToStage(dialog, 'try')
  await expect(dialog.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(restored.state.notes[BOUNCE.id])
  await goToStage(dialog, 'recall')
  await expectAnswer(dialog, BOUNCE, null, false)
  await dialog.getByRole('radio').nth(BOUNCE.quiz.correctIndex).check()
  await dialog.getByRole('button', { name: 'Check my answer', exact: true }).click()
  await dialog.getByRole('button', { name: 'Finish revisit', exact: true }).click()
  await expect(dialog.locator('.reader-done')).toContainText('Revisited. Your completion XP stays the same.')
  await expect(dialog.getByRole('button', { name: 'Saved to your Vault', exact: true })).toBeVisible()
  await waitForStored(page, (snapshot) => snapshot, restored)
  await expectCredit(page, restored.state)
  await closeReader(page)

  const pendingDownload = page.waitForEvent('download')
  await region.getByRole('button', { name: 'Export backup', exact: true }).click()
  const download = await pendingDownload
  expect(download.suggestedFilename()).toBe(`unscroll-backup-${DAY}.json`)
  expect(await download.failure()).toBeNull()
  const stream = await download.createReadStream()
  const chunks: Buffer[] = []
  for await (const chunk of stream) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  expect(backupSchema.parse(JSON.parse(Buffer.concat(chunks).toString('utf8')))).toEqual({ app: 'UNSCROLL', version: 1, exportedAt: CLOCK, ...restored })
  await page.reload()
  await expect(page.getByRole('heading', { level: 1, name: 'Your profile', exact: true })).toBeVisible()
  await waitForStored(page, (snapshot) => snapshot, restored)
  await expectCredit(page, restored.state)
})

test('320px reading and enlarged diagram inspection keep text reachable, contain horizontal scrolling and pass axe in each stage', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 })
  const initial = issuedSnapshot()
  const asset = illustration(BOUNCE)
  const downloaded = page.waitForResponse((response) => new URL(response.url()).pathname === asset.src && response.request().resourceType() === 'image')
  await seedAndLoad(page, initial, BOUNCE)
  const dialog = await reader(page, BOUNCE)
  const figure = dialog.locator('.teaching-visual').first()
  await expectLoaded(figure.locator(':scope > img.teaching-image'), asset)
  await figure.locator('.visual-description > summary').click()
  await expect(figure.locator('.visual-description > p')).toHaveText(asset.alt)
  await expectHorizontalLayout(page, dialog, 'Understand at 320px')
  await scanAccessibility(page, 'Understand with the diagram text expanded')
  const response = await downloaded
  expect(response.ok()).toBe(true)
  const svg = await response.text()
  const typography = await page.evaluate((source) => {
    const parsed = new DOMParser().parseFromString(source, 'image/svg+xml')
    return {
      errors: parsed.querySelectorAll('parsererror').length,
      sizes: [...parsed.querySelectorAll('text')].map((text) => Number.parseFloat(text.closest('[font-size]')?.getAttribute('font-size') ?? '')),
    }
  }, svg)
  expect(typography.errors).toBe(0)
  expect(typography.sizes.length).toBeGreaterThan(0)
  expect(typography.sizes.every((size) => Number.isFinite(size) && size > 0)).toBe(true)

  const enlarge = figure.getByRole('button', { name: `Enlarge diagram: ${asset.title}`, exact: true })
  await enlarge.focus()
  await enlarge.press('Enter')
  const viewer = page.locator('dialog.visual-viewer[open]')
  await expect(viewer).toHaveAccessibleName(`Enlarged diagram: ${asset.title}`)
  const image = viewer.getByRole('img', { name: asset.alt, exact: true })
  await expectLoaded(image, asset)
  const size = await image.boundingBox()
  expect(size).not.toBeNull()
  expect(size!.width, 'The inspection image must not shrink to a 320px thumbnail').toBeGreaterThanOrEqual(asset.width)
  expect(Math.min(...typography.sizes) * size!.width / asset.width, 'Smallest authored label at the actual inspection scale').toBeGreaterThanOrEqual(16)
  const close = viewer.getByRole('button', { name: 'Close enlarged diagram', exact: true })
  const pane = viewer.locator('.visual-viewer-scroll')
  await expect(pane).toHaveAttribute('aria-label', 'Diagram, scroll to inspect')
  await expect(pane).toHaveAttribute('tabindex', '0')
  await expect(close).toBeInViewport({ ratio: 1 })
  await expectHorizontalLayout(page, viewer, 'Enlarged diagram at 320px')
  await scanAccessibility(page, 'Native enlarged diagram dialog')
  await close.focus()
  await page.keyboard.press('Tab')
  await expect(pane).toBeFocused()
  const extent = await pane.evaluate((element) => {
    element.scrollTo({ left: 0, top: 0 })
    return { width: element.clientWidth, height: element.clientHeight, scrollWidth: element.scrollWidth, scrollHeight: element.scrollHeight }
  })
  expect(extent.width).toBeGreaterThan(0)
  expect(extent.height).toBeGreaterThan(0)
  expect(extent.scrollWidth).toBeGreaterThan(extent.width)
  expect(extent.scrollHeight).toBeGreaterThan(extent.height)
  await expect.poll(() => pane.evaluate((element) => ({ left: element.scrollLeft, top: element.scrollTop }))).toEqual({ left: 0, top: 0 })
  await pane.press('ArrowRight')
  await expect.poll(() => pane.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0)
  await pane.press('End')
  await expect.poll(() => pane.evaluate((element) => element.scrollHeight - element.clientHeight - element.scrollTop)).toBeLessThanOrEqual(1)
  await expectHorizontalLayout(page, viewer, 'Only the inspection pane scrolls')
  await close.click()
  await expect(page.locator('dialog.visual-viewer[open]')).toHaveCount(0)
  await expect(enlarge).toBeFocused()
  await expect(dialog).toHaveJSProperty('open', true)

  await goToStage(dialog, 'try')
  await dialog.locator('.practice-troubleshooting > summary').click()
  await expectHorizontalLayout(page, dialog, 'Guided practice at 320px')
  await scanAccessibility(page, 'Guided practice and troubleshooting')
  await goToStage(dialog, 'recall')
  await dialog.locator('.transfer-question details > summary').click()
  await dialog.getByRole('button', { name: 'Compare with an example answer', exact: true }).click()
  await expectHorizontalLayout(page, dialog, 'Transfer question at 320px')
  await scanAccessibility(page, 'Transfer reasoning and recognition choices')
  await expectCredit(page, initial.state)
  await waitForStored(page, (snapshot) => withoutDrafts(snapshot.state), withoutDrafts(initial.state))
})