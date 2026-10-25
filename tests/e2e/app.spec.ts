import { readFile } from 'node:fs/promises'
import AxeBuilder from '@axe-core/playwright'
import { test as base, expect, type BrowserContext, type Locator, type Page, type TestInfo } from '@playwright/test'
import { categories, learningPaths, lessonById, lessons } from '../../src/data'
import { backupSchema, editionSchema, lessonSchema, stateSchema } from '../../src/lib/schema'
import type { LibrarySnapshot } from '../../src/lib/storage'
import type { DiscoveryEdition, Lesson, Page as AppPage } from '../../src/types'

// 23:55 in Kolkata. Advancing six minutes crosses the local day, but not the UTC day.
const CLOCK = '2030-06-15T18:25:00.000Z'
const DAY = '2030-06-15'
const TOMORROW = '2030-06-16'
const FALLBACK_URL = 'http://localhost:4173'
const STORAGE_KEY = 'unscroll-library-v1'

// Synthetic text, not copied Wikipedia content. Both records satisfy the real edition schema.
const EDITION: DiscoveryEdition = {
  date: DAY,
  status: 'fresh',
  lessons: [
    {
      id: 'wiki-990001', category: 'cinema', topic: 'Fixture references',
      title: 'Fixture reference: Aperture', hook: 'A deterministic reference for browser tests.',
      body: ['This synthetic aperture reference exercises downloaded reading without contacting Wikipedia.'],
      takeaway: 'Distinguish a reference from a practical lesson.',
      action: 'Write one question to check against the linked article.',
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
      title: 'Fixture reference: Spaced repetition', hook: 'A second deterministic reference for browser tests.',
      body: ['This synthetic spaced-repetition reference tests retention and attribution, not factual article content.'],
      takeaway: 'Check the context of an external reference.',
      action: 'Write a question you would investigate before applying this reference.',
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

const UNAVAILABLE: DiscoveryEdition = {
  date: DAY, status: 'unavailable', lessons: [],
  message: 'The deterministic test edition is unavailable. Original lessons remain available.',
}

interface DiscoveryNetwork {
  edition: DiscoveryEdition
  requests: { url: string; method: string; body: string | null }[]
  externalRequests: string[]
}

async function routeAppRequests(context: BrowserContext, origin: string, network: DiscoveryNetwork) {
  await context.route('**/*', async (route) => {
    const request = route.request()
    const url = new URL(request.url())
    if (url.origin !== origin) {
      network.externalRequests.push(request.url())
      await route.abort('blockedbyclient')
    } else if (url.pathname === '/.netlify/functions/discover') {
      network.requests.push({ url: request.url(), method: request.method(), body: request.postData() })
      await route.fulfill({
        status: 200, contentType: 'application/json',
        headers: { 'Cache-Control': 'no-store' }, body: JSON.stringify(editionSchema.parse(network.edition)),
      })
    } else {
      await route.continue()
    }
  })
}

const test = base.extend<{ network: DiscoveryNetwork }>({
  network: [async ({ context, page, baseURL }, use) => {
    const network: DiscoveryNetwork = { edition: structuredClone(EDITION), requests: [], externalRequests: [] }
    const pageErrors: string[] = []
    page.on('pageerror', (error) => pageErrors.push(error.message))
    await routeAppRequests(context, new URL(baseURL ?? FALLBACK_URL).origin, network)
    await use(network)
    expect(network.externalRequests, 'The app must not contact external hosts during an E2E test').toEqual([])
    expect(network.requests.filter((request) => request.method !== 'GET' || request.body !== null || new URL(request.url).search !== ''),
      'Discovery requests must not upload notes, preferences, or progress').toEqual([])
    expect(pageErrors, 'Uncaught application errors').toEqual([])
  }, { auto: true }],
})

test.use({ serviceWorkers: 'block', timezoneId: 'Asia/Kolkata', locale: 'en-US' })
test.describe.configure({ timeout: 60_000 })
test.beforeEach(async ({ page }) => {
  await page.clock.install({ time: new Date(CLOCK) })
})

const screenHeadings: Record<AppPage, RegExp> = {
  today: /LESS SCROLL\.|THAT’S A WRAP\./,
  explore: /FIND YOUR NEXT OBSESSION\./,
  vault: /^Your vault$/,
  review: /DON’T JUST READ IT\./,
  profile: /^Your profile$/,
}

function appUrl(screen: AppPage, params: Record<string, string> = {}) {
  const url = new URL('/', test.info().project.use.baseURL ?? FALLBACK_URL)
  const query = new URLSearchParams(params)
  url.hash = `/${screen}${query.size ? `?${query}` : ''}`
  return url.href
}

function routeParams(page: Page) {
  return new URLSearchParams(new URL(page.url()).hash.split('?')[1] ?? '')
}

async function visit(page: Page, screen: AppPage, params: Record<string, string> = {}) {
  await page.goto(appUrl(screen, params))
  await expect(page.locator('main#main')).toBeVisible()
  if (!params.lesson && !params.path) {
    await expect(page.getByRole('heading', { level: 1, name: screenHeadings[screen] })).toBeVisible()
  }
}

async function navigate(page: Page, screen: AppPage) {
  // The inactive desktop/mobile navigation is hidden. Recall's name also contains its due badge.
  const link = page.locator('nav[aria-label="Main navigation"]:visible').locator(`a[href="#/${screen}"]`)
  await link.click()
  await expect(link).toHaveAttribute('aria-current', 'page')
  await expect(page.getByRole('heading', { level: 1, name: screenHeadings[screen] })).toBeVisible()
}

function original(id: string): Lesson {
  const lesson = lessonById.get(id)
  if (!lesson?.quiz || lesson.kind === 'discovery') throw new Error(`Expected an original quiz lesson: ${id}`)
  return lesson
}

function card(page: Page, title: string) {
  return page.locator('.lesson-card').filter({ has: page.getByRole('heading', { level: 3, name: title, exact: true }) })
}

async function reader(page: Page, lesson: Lesson) {
  const dialog = page.locator('.reader-dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog).toHaveRole('dialog')
  await expect(dialog).toHaveAccessibleName(lesson.title)
  await expect(dialog.locator('#reader-title')).toHaveText(lesson.title)
  return dialog
}

async function closeReader(page: Page) {
  await page.locator('.reader-dialog').getByRole('button', { name: 'Close lesson', exact: true }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
}

async function readStored(page: Page): Promise<LibrarySnapshot | undefined> {
  return page.evaluate((key) => new Promise<LibrarySnapshot | undefined>((resolve, reject) => {
    const opening = indexedDB.open('keyval-store')
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      if (!db.objectStoreNames.contains('keyval')) {
        db.close()
        reject(new Error('The real idb-keyval object store has not been created'))
        return
      }
      const transaction = db.transaction('keyval', 'readonly')
      const request = transaction.objectStore('keyval').get(key)
      let value: LibrarySnapshot | undefined
      request.onsuccess = () => { value = request.result as LibrarySnapshot | undefined }
      transaction.oncomplete = () => { db.close(); resolve(value) }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), STORAGE_KEY)
}

async function stored(page: Page) {
  const snapshot = await readStored(page)
  expect(snapshot, 'The application must persist its library in IndexedDB').toBeDefined()
  stateSchema.parse(snapshot!.state)
  return snapshot!
}

async function waitForStored(page: Page, select: (snapshot: LibrarySnapshot) => unknown, expected: unknown) {
  await expect.poll(async () => {
    const snapshot = await readStored(page)
    return snapshot ? select(snapshot) : undefined
  }, { message: 'Wait for the app-owned IndexedDB write, not just an optimistic render' }).toEqual(expected)
}

async function openFreshToday(page: Page, network: DiscoveryNetwork) {
  await visit(page, 'today')
  await expect(page.locator('.daily-lineup .lesson-card-main')).toHaveCount(5)
  await expect(page.locator('.discovery-section .edition-status')).toHaveText(network.edition.status === 'fresh'
    ? `Edition ${network.edition.date} (UTC)` : network.edition.message!)
  await waitForStored(page, (snapshot) => ({ count: snapshot.state.daily.ids.length, discoveries: snapshot.discoveries }),
    { count: 5, discoveries: network.edition.lessons })
  return stored(page)
}

async function seedStoredReview(page: Page, snapshot: LibrarySnapshot) {
  // Seed the public storage format, not React state, a development URL, or an injected app API.
  const checked: LibrarySnapshot = {
    state: stateSchema.parse(snapshot.state), discoveries: snapshot.discoveries.map((lesson) => lessonSchema.parse(lesson)),
  }
  await page.evaluate(({ key, value }) => new Promise<void>((resolve, reject) => {
    const opening = indexedDB.open('keyval-store')
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      const transaction = db.transaction('keyval', 'readwrite')
      transaction.objectStore('keyval').put(value, key)
      transaction.oncomplete = () => { db.close(); resolve() }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), { key: STORAGE_KEY, value: checked })
  expect(await readStored(page)).toEqual(checked)
  await page.reload()
  await expect(page.locator('main#main')).toBeVisible()
}

async function answerRecall(page: Page, lesson: Lesson, correct: boolean) {
  const dialog = page.locator('.reader-dialog')
  const quiz = lesson.quiz!
  const answer = correct ? quiz.correctIndex : (quiz.correctIndex + 1) % quiz.options.length
  await expect(dialog.getByRole('group', { name: quiz.question, exact: true })).toBeVisible()
  await expect(dialog.getByRole('button', { name: 'Check my answer', exact: true })).toBeDisabled()
  await dialog.getByRole('radio', { name: quiz.options[answer], exact: true }).check()
  await dialog.getByRole('button', { name: 'Check my answer', exact: true }).click()
  const feedback = dialog.locator('.quiz-feedback')
  await expect(feedback.getByRole('heading', { level: 2 })).toHaveText(correct ? 'That’s the distinction.' : 'Here’s the distinction.')
  await expect(feedback.locator('p')).toHaveText(quiz.explanation)
  await expect(dialog.locator('.quiz-option').nth(quiz.correctIndex)).toHaveClass(/is-correct/)
  if (!correct) await expect(dialog.locator('.quiz-option').nth(answer)).toHaveClass(/is-incorrect/)
  for (const radio of await dialog.getByRole('radio').all()) await expect(radio).toBeDisabled()
}

async function completeReader(page: Page, lesson: Lesson, correct = true, revisit = false) {
  const dialog = await reader(page, lesson)
  await expect(dialog.getByRole('navigation', { name: 'Lesson stages' }).getByRole('button', { name: /Understand$/ }))
    .toHaveAttribute('aria-current', 'step')
  await expect(dialog.locator(lesson.guide ? '.teaching-section > p' : '.reader-prose > p')).toHaveText(lesson.body)
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await expect(dialog.getByRole('heading', { name: 'Take it into the real world.', exact: true })).toBeVisible()
  if (lesson.guide) {
    await expect(dialog.locator('.reader-action > li')).toHaveText(lesson.guide.practice.steps)
  } else {
    await expect(dialog.locator('.reader-action')).toHaveText(lesson.action)
  }
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  const finish = dialog.getByRole('button', { name: revisit ? 'Finish revisit' : 'Complete bite', exact: true })
  await expect(finish).toBeDisabled()
  await answerRecall(page, lesson, correct)
  await expect(finish).toBeEnabled()
  await finish.click()
  await expect(dialog.getByRole('heading', { name: 'One idea. Yours now.', exact: true })).toBeVisible()
}

async function confirmAction(page: Page, action: () => Promise<unknown>, message: RegExp, accept: boolean) {
  const pendingDialog = page.waitForEvent('dialog')
  const pendingAction = action()
  const confirmation = await pendingDialog
  const type = confirmation.type()
  const text = confirmation.message()
  if (accept) await confirmation.accept()
  else await confirmation.dismiss()
  await pendingAction
  expect(type).toBe('confirm')
  expect(text).toMatch(message)
}

async function createCollection(page: Page, name: string) {
  const manager = page.locator('.collection-manager')
  if (await manager.getAttribute('open') === null) await manager.locator(':scope > summary').click()
  await page.getByLabel('New collection name', { exact: true }).fill(name)
  await page.getByRole('button', { name: 'Create collection', exact: true }).click()
  await expect(page.getByRole('status').filter({ hasText: `Collection "${name}" created.` })).toBeVisible()
  await waitForStored(page, (snapshot) => snapshot.state.collections.some((collection) => collection.name === name), true)
}

async function capture(page: Page, info: TestInfo, name: string, element?: Locator) {
  await page.evaluate(async () => { await document.fonts.ready })
  const viewport = page.viewportSize()!
  const path = info.outputPath(`${name}-${viewport.width}x${viewport.height}.png`)
  if (element) await element.screenshot({ path, animations: 'disabled', caret: 'hide' })
  else await page.screenshot({ path, fullPage: false, animations: 'disabled', caret: 'hide' })
  await info.attach(name, { path, contentType: 'image/png' })
}

test('Today issues five bites, opens the session, and keeps a saved lesson in Vault after reload', async ({ page, network }, info) => {
  const initial = await openFreshToday(page, network)
  expect(initial.state.daily.date).toBe(DAY)
  expect(new Set(initial.state.daily.ids).size).toBe(5)
  const issued = initial.state.daily.ids.map(original)
  await expect(page.locator('.daily-lineup .lesson-card-main h3')).toHaveText(issued.map((lesson) => lesson.title))
  await expect(page.getByRole('progressbar', { name: 'Daily bites completed' })).toHaveAttribute('aria-valuenow', '0')
  await expect(page.getByRole('progressbar', { name: 'Daily bites completed' })).toHaveAttribute('aria-valuemax', '5')
  await capture(page, info, 'today')

  await page.getByRole('button', { name: 'Start today’s session', exact: true }).click()
  const dialog = await reader(page, issued[0])
  await capture(page, info, 'reader', dialog)
  await dialog.locator('.sources > summary').click()
  await expect(dialog.locator('.sources li a')).toHaveCount(issued[0].sources.length)
  for (const [index, source] of issued[0].sources.entries()) {
    const link = dialog.locator('.sources li a').nth(index)
    await expect(link).toHaveText(source.title)
    await expect(link).toHaveAttribute('href', source.url)
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', /noopener/)
    await expect(link).toHaveAttribute('rel', /noreferrer/)
  }
  await dialog.getByRole('button', { name: 'Save this bite', exact: true }).click()
  await expect(dialog.getByRole('button', { name: 'Unsave this bite', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await waitForStored(page, (snapshot) => snapshot.state.saved, [issued[0].id])
  await closeReader(page)
  await navigate(page, 'vault')
  await expect(card(page, issued[0].title)).toBeVisible()
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Your vault', exact: true })).toBeVisible()
  await expect(card(page, issued[0].title).locator('.save-button')).toHaveAttribute('aria-pressed', 'true')
  await card(page, issued[0].title).locator('.lesson-card-main').click()
  await expect((await reader(page, issued[0])).getByRole('button', { name: 'Unsave this bite', exact: true })).toBeVisible()
})

test('Understand, Try, and Recall explain correct and wrong choices and award completion XP only once', async ({ page, network }) => {
  await openFreshToday(page, network)
  const first = original('cinema-001')
  const second = original('cinema-002')
  for (const [index, lesson] of [first, second].entries()) {
    await visit(page, 'explore', { lesson: lesson.id })
    await completeReader(page, lesson, index === 0)
    await expect(page.locator('.reader-done')).toContainText('+20 XP. Recall this tomorrow.')
    await expect(page.locator('.xp-label')).toHaveText(`${(index + 1) * 20} XP`)
    await waitForStored(page, (snapshot) => ({
      xp: snapshot.state.xp, completion: snapshot.state.completed[lesson.id], review: snapshot.state.reviews[lesson.id],
    }), {
      xp: (index + 1) * 20, completion: { date: DAY, correct: index === 0 },
      review: { due: TOMORROW, interval: 1, repetitions: 0 },
    })
    await closeReader(page)
  }
  const beforeRevisit = await stored(page)
  await visit(page, 'explore', { lesson: first.id })
  await expect(page.locator('.reader-meta')).toContainText('Revisiting / no extra completion XP')
  await completeReader(page, first, false, true)
  await expect(page.locator('.reader-done')).toContainText('Revisited. Your completion XP stays the same.')
  await expect(page.locator('.xp-label')).toHaveText('40 XP')
  await closeReader(page)
  await waitForStored(page, (snapshot) => snapshot.state, beforeRevisit.state)
  await page.reload()
  await expect(page.locator('.xp-label')).toHaveText('40 XP')
  expect((await stored(page)).state).toEqual(beforeRevisit.state)
})

test('Completing all five daily lessons ends the session without a refill or extra XP after reload', async ({ page, network }) => {
  const initial = await openFreshToday(page, network)
  const issued = initial.state.daily.ids.map(original)
  await page.getByRole('button', { name: 'Start today’s session', exact: true }).click()
  for (const [index, lesson] of issued.entries()) {
    await completeReader(page, lesson)
    await waitForStored(page, (snapshot) => Object.keys(snapshot.state.completed).length, index + 1)
    await expect(page.locator('.daily-progress [role="progressbar"]')).toHaveAttribute('aria-valuenow', String(index + 1))
    const next = page.locator('.reader-dialog').getByRole('button', { name: 'Next bite', exact: true })
    if (index < issued.length - 1) await next.click()
    else await expect(next).toHaveCount(0)
  }
  await page.locator('.reader-dialog').getByRole('button', { name: 'Back to my day', exact: true }).click()
  await expect(page.getByRole('heading', { level: 1, name: /THAT’S A WRAP\./ })).toBeVisible()
  await expect(page.getByText('Daily session complete', { exact: true })).toBeVisible()
  await waitForStored(page, (snapshot) => ({ daily: snapshot.state.daily, delivered: snapshot.state.delivered, xp: snapshot.state.xp, activity: snapshot.state.activity }),
    { daily: initial.state.daily, delivered: initial.state.delivered, xp: 100, activity: { [DAY]: 5 } })
  await page.reload()
  await expect(page.getByRole('heading', { level: 1, name: /THAT’S A WRAP\./ })).toBeVisible()
  await expect(page.locator('.daily-lineup .lesson-card.is-complete')).toHaveCount(5)
  await expect(page.locator('.daily-lineup .lesson-card-main h3')).toHaveText(issued.map((lesson) => lesson.title))
  await expect(page.getByRole('button', { name: /Start today’s session|Continue session/ })).toHaveCount(0)
  await expect(page.locator('.xp-label')).toHaveText('100 XP')
  expect((await stored(page)).state.daily).toEqual(initial.state.daily)
})

test('Interest and goal changes preserve today and apply after local midnight, before UTC midnight', async ({ page, network }) => {
  network.edition = structuredClone(UNAVAILABLE)
  const initial = await openFreshToday(page, network)
  await navigate(page, 'profile')
  const interests = page.getByRole('group', { name: 'Interests', exact: true })
  for (const category of categories.filter((entry) => entry.id !== 'cinema')) {
    await interests.getByRole('checkbox', { name: category.name, exact: true }).uncheck()
  }
  await page.getByRole('radio', { name: '3 lessons', exact: true }).check()
  await waitForStored(page, (snapshot) => ({ interests: snapshot.state.interests, goal: snapshot.state.goal, daily: snapshot.state.daily }),
    { interests: ['cinema'], goal: 3, daily: initial.state.daily })
  await navigate(page, 'today')
  await expect(page.locator('.daily-lineup .lesson-card-main h3')).toHaveText(initial.state.daily.ids.map((id) => original(id).title))
  await page.reload()
  await expect(page.locator('.daily-lineup .lesson-card-main')).toHaveCount(5)
  expect((await stored(page)).state.daily).toEqual(initial.state.daily)

  await page.clock.fastForward(6 * 60_000)
  await expect(page.locator('.day-heading time')).toHaveAttribute('datetime', TOMORROW)
  expect(await page.evaluate(() => new Date().toISOString().slice(0, 10))).toBe(DAY)
  await waitForStored(page, (snapshot) => ({ date: snapshot.state.daily.date, count: snapshot.state.daily.ids.length }),
    { date: TOMORROW, count: 3 })
  const nextDay = await stored(page)
  expect(nextDay.state.interests).toEqual(['cinema'])
  expect(nextDay.state.goal).toBe(3)
  expect(nextDay.state.daily.ids.filter((id) => initial.state.delivered.includes(id))).toEqual([])
  // Interests prioritize the first choice; the app deliberately keeps category diversity.
  expect(original(nextDay.state.daily.ids[0]).category).toBe('cinema')
  await page.reload()
  await expect(page.locator('.daily-lineup .lesson-card-main')).toHaveCount(3)
  expect((await stored(page)).state.daily).toEqual(nextDay.state.daily)
})

test('Explore filters cinema and subtopics, clears empty searches, and preserves path deep links', async ({ page, network }, info) => {
  await openFreshToday(page, network)
  await navigate(page, 'explore')
  await page.getByRole('button', { name: 'Cinema & photography', exact: true }).click()
  expect(routeParams(page).get('category')).toBe('cinema')
  const cinema = [...lessons, ...network.edition.lessons].filter((lesson) => lesson.category === 'cinema')
  await expect(page.locator('.explore-results .section-heading [role="status"]')).toHaveText(`${cinema.length} bites`)
  await page.getByLabel('Focus topic', { exact: true }).selectOption('Phone eye')
  const phoneLessons = cinema.filter((lesson) => lesson.topic === 'Phone eye')
  await expect(page.locator('.explore-results .lesson-card-main h3')).toHaveText(phoneLessons.map((lesson) => lesson.title))
  await page.getByRole('searchbox', { name: 'Search lessons', exact: true }).fill(phoneLessons[0].title)
  await expect(page.locator('.explore-results .lesson-card-main h3')).toHaveText([phoneLessons[0].title])
  await page.getByRole('searchbox', { name: 'Search lessons', exact: true }).fill('zzzz-unscroll-no-match-80491')
  await expect(page.getByRole('heading', { name: 'Try a different angle.', exact: true })).toBeVisible()
  await expect(page.locator('.explore-results .lesson-card-main')).toHaveCount(0)
  await page.getByRole('button', { name: 'Clear search', exact: true }).click()
  await expect(page.getByLabel('Focus topic', { exact: true })).toHaveValue('Phone eye')
  await expect(page.locator('.explore-results .lesson-card-main')).toHaveCount(phoneLessons.length)
  await page.getByRole('searchbox', { name: 'Search lessons', exact: true }).fill('zzzz-unscroll-no-match-80491')
  await page.getByRole('button', { name: 'Clear filters', exact: true }).click()
  await expect(page.getByRole('button', { name: 'All topics', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByRole('searchbox', { name: 'Search lessons', exact: true })).toHaveValue('')
  await expect(page.getByLabel('Focus topic', { exact: true })).toHaveValue('')

  const path = learningPaths.find((entry) => entry.id === 'phone-eye')!
  await page.locator('button.path-tile').filter({ has: page.getByRole('heading', { level: 3, name: path.title, exact: true }) }).click()
  await expect(page.getByRole('heading', { level: 1, name: path.title, exact: true })).toBeVisible()
  await expect(page.locator('.explore-results .lesson-card-main h3')).toHaveText(path.lessonIds.slice(0, 12).map((id) => original(id).title))
  await capture(page, info, 'explore-cinema-path')
  await page.getByRole('button', { name: 'Add to my daily mix', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Following this path', exact: true })).toBeVisible()
  await waitForStored(page, (snapshot) => snapshot.state.followedPath, path.id)
  await visit(page, 'explore', { path: path.id, lesson: path.lessonIds[1] })
  await reader(page, original(path.lessonIds[1]))
  await closeReader(page)
  expect(routeParams(page).get('path')).toBe(path.id)
  expect(routeParams(page).has('lesson')).toBe(false)
  await page.reload()
  await expect(page.getByRole('heading', { level: 1, name: path.title, exact: true })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Following this path', exact: true })).toBeVisible()
})

test('Explore paginates twelve results, disables its boundaries, and resets pagination on filters', async ({ page, network }) => {
  await openFreshToday(page, network)
  await navigate(page, 'explore')
  expect(lessons).toHaveLength(544)
  const catalog = [...lessons, ...network.edition.lessons]
  const pages = Math.ceil(catalog.length / 12)
  const titles = page.locator('.explore-results .lesson-card-main h3')
  const pagination = page.getByRole('navigation', { name: 'Lesson pages', exact: true })
  await expect(titles).toHaveText(catalog.slice(0, 12).map((lesson) => lesson.title))
  await expect(pagination.getByRole('button', { name: 'Previous', exact: true })).toBeDisabled()
  await expect(pagination).toContainText(`1 / ${pages}`)
  await pagination.getByRole('button', { name: 'Next', exact: true }).click()
  await expect(titles).toHaveText(catalog.slice(12, 24).map((lesson) => lesson.title))
  expect(routeParams(page).get('page')).toBe('2')
  await pagination.getByRole('button', { name: 'Previous', exact: true }).click()
  await expect(titles).toHaveText(catalog.slice(0, 12).map((lesson) => lesson.title))
  await visit(page, 'explore', { page: '999999' })
  await expect(pagination).toContainText(`${pages} / ${pages}`)
  await expect(titles).toHaveText(catalog.slice((pages - 1) * 12).map((lesson) => lesson.title))
  await expect(pagination.getByRole('button', { name: 'Next', exact: true })).toBeDisabled()
  await expect(pagination.getByRole('button', { name: 'Previous', exact: true })).toBeEnabled()
  await page.getByRole('button', { name: 'Cinema & photography', exact: true }).click()
  expect(routeParams(page).has('page')).toBe(false)
  await expect(titles).toHaveCount(12)
  await expect(pagination.getByRole('button', { name: 'Previous', exact: true })).toBeDisabled()
  await page.getByRole('button', { name: 'Learned', exact: true }).click()
  await expect(titles).toHaveCount(0)
  await expect(pagination).toHaveCount(0)
  await page.getByRole('button', { name: 'Clear filters', exact: true }).click()
  await expect(page.locator('.explore-results .section-heading [role="status"]')).toHaveText(`${catalog.length} bites`)
})

test('Notes autosave, are searchable in Notes Vault without a bookmark, and survive unsaving and reload', async ({ page, network }) => {
  await openFreshToday(page, network)
  const lesson = original('cinema-003')
  const note = 'Lens experiment E2E: compare the doorway.\nKeep this detail after unsaving.'
  await visit(page, 'explore', { lesson: lesson.id })
  const dialog = await reader(page, lesson)
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill(note)
  await waitForStored(page, (snapshot) => snapshot.state.notes[lesson.id], note)
  expect((await stored(page)).state.saved).toEqual([])
  await closeReader(page)
  await navigate(page, 'vault')
  await expect(page.getByRole('heading', { name: 'Nothing saved yet', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Notes (1)', exact: true }).click()
  await expect(card(page, lesson.title)).toBeVisible()
  await page.getByRole('searchbox', { name: 'Search notes and lessons', exact: true }).fill('Lens experiment E2E')
  await expect(card(page, lesson.title)).toBeVisible()
  await expect(page.locator('main .lesson-list > li .panel')).toContainText('Keep this detail after unsaving.')
  await page.getByRole('searchbox', { name: 'Search notes and lessons', exact: true }).fill('zzzz-missing-note-80491')
  await expect(page.getByRole('heading', { name: 'No matching lessons', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Clear search and collection filter', exact: true }).click()
  await page.getByRole('button', { name: `Open note for ${lesson.title}`, exact: true }).click()
  await reader(page, lesson)
  await expect(dialog.getByRole('button', { name: 'Try this idea', exact: true })).toHaveCount(0)
  await expect(dialog.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(note)
  await dialog.getByRole('button', { name: 'Save this bite', exact: true }).click()
  await waitForStored(page, (snapshot) => snapshot.state.saved, [lesson.id])
  await dialog.getByRole('button', { name: 'Unsave this bite', exact: true }).click()
  await waitForStored(page, (snapshot) => ({ saved: snapshot.state.saved, note: snapshot.state.notes[lesson.id] }), { saved: [], note })
  await page.reload()
  await reader(page, lesson)
  await expect(dialog.getByRole('textbox', { name: /Your note or experiment/ })).toHaveValue(note)
  await closeReader(page)
  await expect(page.getByRole('button', { name: 'Saved (0)', exact: true })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Notes (1)', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expect(card(page, lesson.title)).toBeVisible()
})

test('Collections reject case-insensitive duplicates and confirmed deletion removes only the selected group', async ({ page, network }) => {
  await openFreshToday(page, network)
  await navigate(page, 'vault')
  await createCollection(page, 'Field kit')
  await page.getByLabel('New collection name', { exact: true }).fill('  fIELD KIT  ')
  await page.getByRole('button', { name: 'Create collection', exact: true }).click()
  await expect(page.getByRole('status').filter({ hasText: 'A collection with that name already exists.' })).toBeVisible()
  await expect(page.getByLabel('New collection name', { exact: true })).toHaveAttribute('aria-invalid', 'true')
  expect((await stored(page)).state.collections.map((collection) => collection.name)).toEqual(['Field kit'])
  await createCollection(page, 'Keep me')

  const lesson = original('cinema-004')
  const note = 'Keep this experiment and its progress when a group is deleted.'
  await visit(page, 'explore', { lesson: lesson.id })
  const dialog = await reader(page, lesson)
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill(note)
  await dialog.locator('.collection-picker > summary').click()
  await dialog.getByRole('checkbox', { name: 'Field kit', exact: true }).check()
  await waitForStored(page, (snapshot) => snapshot.state.collections.find((collection) => collection.name === 'Field kit')?.lessonIds, [lesson.id])
  await dialog.getByRole('checkbox', { name: 'Field kit', exact: true }).uncheck()
  await waitForStored(page, (snapshot) => ({ saved: snapshot.state.saved, members: snapshot.state.collections[0].lessonIds }), { saved: [lesson.id], members: [] })
  await dialog.getByRole('checkbox', { name: 'Field kit', exact: true }).check()
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await answerRecall(page, lesson, true)
  await dialog.getByRole('button', { name: 'Complete bite', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'One idea. Yours now.', exact: true })).toBeVisible()
  await waitForStored(page, (snapshot) => snapshot.state.xp, 20)
  await closeReader(page)
  await navigate(page, 'vault')
  await page.getByLabel('Collection', { exact: true }).selectOption({ label: 'Field kit' })
  await expect(card(page, lesson.title)).toBeVisible()
  const beforeDelete = await stored(page)
  await page.locator('.collection-manager > summary').click()
  await page.getByText('Manage existing collections', { exact: true }).click()
  const remove = page.getByRole('button', { name: 'Delete collection Field kit', exact: true })
  await confirmAction(page, () => remove.click(), /^Delete the collection "Field kit"\? This removes only the group\./, false)
  await expect(remove).toBeVisible()
  expect((await stored(page)).state).toEqual(beforeDelete.state)
  await confirmAction(page, () => remove.click(), /^Delete the collection "Field kit"\? This removes only the group\./, true)
  await expect(remove).toHaveCount(0)
  await expect(page.getByLabel('Collection', { exact: true })).toHaveValue('')
  const expectedState = { ...beforeDelete.state, collections: beforeDelete.state.collections.filter((collection) => collection.name !== 'Field kit') }
  await waitForStored(page, (snapshot) => snapshot.state, expectedState)
  await expect(page.getByRole('button', { name: 'Delete collection Keep me', exact: true })).toBeVisible()
  await expect(card(page, lesson.title)).toBeVisible()
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Your vault', exact: true })).toBeVisible()
  expect((await stored(page)).state).toEqual(expectedState)
  await page.getByRole('button', { name: 'Notes (1)', exact: true }).click()
  await expect(page.locator('main .lesson-list > li .panel')).toContainText(note)
})

test('Vault paginates UI-saved lessons and resets the page when searching or clearing filters', async ({ page, network }) => {
  await openFreshToday(page, network)
  await navigate(page, 'explore')
  for (let index = 0; index < 12; index += 1) {
    const save = page.locator('.explore-results .save-button').nth(index)
    await save.click()
    await expect(save).toHaveAttribute('aria-pressed', 'true')
  }
  await page.getByRole('navigation', { name: 'Lesson pages', exact: true }).getByRole('button', { name: 'Next', exact: true }).click()
  await expect(page.locator('.explore-results .lesson-card-main h3').first()).toHaveText(lessons[12].title)
  await page.locator('.explore-results .save-button').first().click()
  await waitForStored(page, (snapshot) => snapshot.state.saved, lessons.slice(0, 13).map((lesson) => lesson.id))
  await navigate(page, 'vault')
  const titles = page.locator('main .lesson-list .lesson-card-main h3')
  const newestFirst = lessons.slice(0, 13).reverse()
  const pagination = page.getByRole('navigation', { name: 'Vault pages', exact: true })
  await expect(titles).toHaveText(newestFirst.slice(0, 12).map((lesson) => lesson.title))
  await expect(pagination).toContainText('Page 1 of 2')
  await expect(pagination.getByRole('button', { name: 'Previous page', exact: true })).toBeDisabled()
  await pagination.getByRole('button', { name: 'Next page', exact: true }).click()
  await expect(titles).toHaveText([lessons[0].title])
  await expect(pagination).toContainText('Page 2 of 2')
  await expect(pagination.getByRole('button', { name: 'Next page', exact: true })).toBeDisabled()
  await pagination.getByRole('button', { name: 'Previous page', exact: true }).click()
  await expect(titles).toHaveCount(12)
  await visit(page, 'vault', { page: '999' })
  await expect(titles).toHaveText([lessons[0].title])
  await page.getByRole('searchbox', { name: 'Search saved lessons', exact: true }).fill(lessons[12].title)
  await expect(titles).toHaveText([lessons[12].title])
  expect(routeParams(page).has('page')).toBe(false)
  await expect(pagination).toHaveCount(0)
  await page.getByRole('searchbox', { name: 'Search saved lessons', exact: true }).fill('zzzz-missing-save-80491')
  await expect(page.getByRole('heading', { name: 'No matching lessons', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Clear search and collection filter', exact: true }).click()
  await expect(titles).toHaveText(newestFirst.slice(0, 12).map((lesson) => lesson.title))
  await expect(pagination).toContainText('Page 1 of 2')
})

test('Profile downloads a real backup, rejects invalid JSON without loss, and restores the complete library', async ({ page, network }, info) => {
  await openFreshToday(page, network)
  await card(page, network.edition.lessons[0].title).locator('.save-button').click()
  const lesson = original('cinema-005')
  const note = 'Backup experiment: preserve this note, collection, and recall schedule.'
  await visit(page, 'explore', { lesson: lesson.id })
  const dialog = await reader(page, lesson)
  await dialog.getByRole('button', { name: 'Save this bite', exact: true }).click()
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill(note)
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await answerRecall(page, lesson, true)
  await dialog.getByRole('button', { name: 'Complete bite', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'One idea. Yours now.', exact: true })).toBeVisible()
  await closeReader(page)
  await navigate(page, 'vault')
  await createCollection(page, 'Backup kit')
  await card(page, lesson.title).locator('.lesson-card-main').click()
  await (await reader(page, lesson)).getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.locator('.collection-picker > summary').click()
  await dialog.getByRole('checkbox', { name: 'Backup kit', exact: true }).check()
  await closeReader(page)
  await navigate(page, 'profile')
  await page.getByLabel('Nickname (optional)', { exact: true }).fill('Backup reader')
  await page.getByRole('button', { name: 'Save nickname', exact: true }).click()
  await page.getByRole('radio', { name: '7 lessons', exact: true }).check()
  await page.getByRole('switch', { name: 'Reduce motion', exact: true }).check()
  await waitForStored(page, (snapshot) => ({ name: snapshot.state.name, goal: snapshot.state.goal, motion: snapshot.state.reducedMotion, xp: snapshot.state.xp }),
    { name: 'Backup reader', goal: 7, motion: true, xp: 20 })
  const beforeExport = await stored(page)
  expect(beforeExport.state.notes[lesson.id]).toBe(note)
  expect(beforeExport.state.collections[0].lessonIds).toEqual([lesson.id])
  expect(beforeExport.state.saved).toEqual([network.edition.lessons[0].id, lesson.id])

  const pendingDownload = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Export backup', exact: true }).click()
  const download = await pendingDownload
  expect(download.suggestedFilename()).toBe(`unscroll-backup-${DAY}.json`)
  const backupPath = info.outputPath('profile-backup.json')
  await download.saveAs(backupPath)
  const document = backupSchema.parse(JSON.parse(await readFile(backupPath, 'utf8')))
  expect({ state: document.state, discoveries: document.discoveries }).toEqual(beforeExport)
  await expect(page.getByRole('button', { name: 'Import backup', exact: true })).toBeEnabled()

  const badChooser = page.waitForEvent('filechooser')
  await page.getByRole('button', { name: 'Import backup', exact: true }).click()
  const badInput = await badChooser
  await confirmAction(page, () => badInput.setFiles({
    name: 'invalid-backup.json', mimeType: 'application/json', buffer: Buffer.from('{"app":"UNSCROLL","state":'),
  }), /^Import "invalid-backup.json" and replace/, true)
  await expect(page.getByRole('status').filter({ hasText: 'Backup not imported.' })).toContainText('not valid JSON')
  await expect(page.getByRole('status').filter({ hasText: 'Backup not imported.' })).toContainText('Your current library has been kept.')
  expect(await stored(page)).toEqual(beforeExport)
  await page.reload()
  await expect(page.getByLabel('Nickname (optional)', { exact: true })).toHaveValue('Backup reader')
  expect(await stored(page)).toEqual(beforeExport)

  const reset = page.getByRole('button', { name: 'Clear progress and library', exact: true })
  await confirmAction(page, () => reset.click(), /^Clear all your UNSCROLL progress/, false)
  expect(await stored(page)).toEqual(beforeExport)
  await confirmAction(page, () => reset.click(), /^Clear all your UNSCROLL progress/, true)
  await expect(page.getByRole('status').filter({ hasText: 'Your local progress and library have been cleared.' })).toBeVisible()
  await waitForStored(page, (snapshot) => ({ saved: snapshot.state.saved, notes: snapshot.state.notes, completed: snapshot.state.completed,
    collections: snapshot.state.collections, xp: snapshot.state.xp, discoveries: snapshot.discoveries, issued: snapshot.state.daily.ids.length }),
  { saved: [], notes: {}, completed: {}, collections: [], xp: 0, discoveries: [], issued: 5 })

  const pendingChooser = page.waitForEvent('filechooser')
  await page.getByRole('button', { name: 'Import backup', exact: true }).click()
  const input = await pendingChooser
  await confirmAction(page, () => input.setFiles(backupPath), /^Import "profile-backup.json" and replace/, true)
  await expect(page.getByRole('status').filter({ hasText: 'Backup imported.' })).toBeVisible()
  await waitForStored(page, (snapshot) => snapshot, beforeExport)
  await page.reload()
  await expect(page.getByLabel('Nickname (optional)', { exact: true })).toHaveValue('Backup reader')
  await expect(page.getByRole('radio', { name: '7 lessons', exact: true })).toBeChecked()
  await expect(page.getByRole('switch', { name: 'Reduce motion', exact: true })).toBeChecked()
  await expect(page.locator('.xp-label')).toHaveText('20 XP')
  expect(await stored(page)).toEqual(beforeExport)
  await navigate(page, 'vault')
  await page.getByRole('button', { name: 'Notes (1)', exact: true }).click()
  await page.getByLabel('Collection', { exact: true }).selectOption({ label: 'Backup kit' })
  await expect(card(page, lesson.title)).toBeVisible()
  await expect(page.locator('main .lesson-list > li .panel')).toContainText(note)
})

test('A due review uses the real IndexedDB schema, schedules three days ahead, and awards only five XP', async ({ page, network }) => {
  const snapshot = await openFreshToday(page, network)
  const lesson = original('cinema-001')
  snapshot.state.completed = { [lesson.id]: { date: '2030-06-14', correct: true } }
  snapshot.state.reviews = { [lesson.id]: { due: DAY, interval: 1, repetitions: 0 } }
  snapshot.state.activity = { '2030-06-14': 1 }
  snapshot.state.xp = 20
  snapshot.state.delivered = [...new Set([...snapshot.state.delivered, lesson.id])]
  await seedStoredReview(page, snapshot)
  await navigate(page, 'review')
  await expect(page.locator('.review-overview strong')).toHaveText(['1', '0', '0'])
  await page.getByRole('button', { name: 'Start recall', exact: true }).click()
  const dialog = await reader(page, lesson)
  await expect(dialog.locator('.reader-toolbar')).toContainText('Recall practice')
  await expect(dialog.getByRole('navigation', { name: 'Lesson stages' })).toHaveCount(0)
  await answerRecall(page, lesson, true)
  await dialog.getByRole('button', { name: 'Got it', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'A little more likely to stick.', exact: true })).toBeVisible()
  const expectedReview = { due: '2030-06-18', interval: 3, repetitions: 1, lastReviewed: DAY }
  await waitForStored(page, (value) => ({ xp: value.state.xp, review: value.state.reviews[lesson.id], activity: value.state.activity[DAY] }),
    { xp: 25, review: expectedReview, activity: 1 })
  await dialog.getByRole('button', { name: 'Back to reviews', exact: true }).click()
  await expect(page.locator('.review-overview strong')).toHaveText(['0', '1', '1'])
  await expect(page.getByRole('heading', { name: 'You’re caught up.', exact: true })).toBeVisible()
  await expect(page.locator('.empty-state')).toContainText('Your next review is 2030-06-18.')
  const afterReview = await stored(page)
  await visit(page, 'review', { lesson: lesson.id, mode: 'review' })
  await reader(page, lesson)
  await answerRecall(page, lesson, true)
  await dialog.getByRole('button', { name: 'Easy recall', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'A little more likely to stick.', exact: true })).toBeVisible()
  await expect(page.locator('.xp-label')).toHaveText('25 XP')
  await closeReader(page)
  await page.reload()
  await expect(page.locator('.review-overview strong')).toHaveText(['0', '1', '1'])
  expect((await stored(page)).state).toEqual(afterReview.state)
})

test('The native reader traps keyboard focus, restores it on Escape, and follows browser back and forward', async ({ page, network }) => {
  await openFreshToday(page, network)
  await navigate(page, 'explore')
  const opener = page.locator('.explore-results .lesson-card-main').first()
  await opener.focus()
  await opener.press('Enter')
  const dialog = await reader(page, lessons[0])
  await expect(dialog.locator('#reader-title')).toBeFocused()
  const first = dialog.getByRole('button', { name: 'Close lesson', exact: true })
  const last = dialog.getByRole('button', { name: 'Try this idea', exact: true })
  await last.focus()
  await page.keyboard.press('Tab')
  await expect(first).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(last).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(opener).toBeFocused()
  expect(await page.evaluate(() => document.body.style.overflowY)).not.toBe('hidden')
  expect(routeParams(page).has('lesson')).toBe(false)
  await opener.press('Enter')
  await reader(page, lessons[0])
  await page.goBack()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  expect(routeParams(page).has('lesson')).toBe(false)
  await expect(page.getByRole('heading', { name: screenHeadings.explore, level: 1 })).toBeVisible()
  await page.goForward()
  await reader(page, lessons[0])
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
})

async function expectReducedMotion(page: Page, selector: string) {
  const targets = page.locator(selector)
  expect(await targets.count(), `Motion targets must exist: ${selector}`).toBeGreaterThan(0)
  const styles = await targets.evaluateAll((elements) => elements.map((element) => {
    const style = getComputedStyle(element)
    const seconds = (value: string) => value.split(',').map((part) => parseFloat(part) / (part.trim().endsWith('ms') ? 1000 : 1))
    return { selector: element.className, animation: style.animationName, durations: [...seconds(style.animationDuration), ...seconds(style.transitionDuration)], scroll: style.scrollBehavior }
  }))
  for (const style of styles) {
    expect(style.animation, String(style.selector)).toBe('none')
    expect(style.durations.every((duration) => duration <= 0.00002), JSON.stringify(style)).toBe(true)
    expect(style.scroll).toBe('auto')
  }
}

test('Reduced motion persists and computed CSS also honors the operating-system preference', async ({ page, network }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  const initial = await openFreshToday(page, network)
  await navigate(page, 'profile')
  await page.getByRole('switch', { name: 'Reduce motion', exact: true }).check()
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'reduce')
  await waitForStored(page, (snapshot) => snapshot.state.reducedMotion, true)
  await expectReducedMotion(page, '.settings-section .button-primary')
  await page.reload()
  await expect(page.getByRole('switch', { name: 'Reduce motion', exact: true })).toBeChecked()
  await navigate(page, 'today')
  await expectReducedMotion(page, '.mascot-body, .mascot-scarf, .hero-action, .daily-progress .progress-track > span')
  await page.getByRole('button', { name: 'Start today’s session', exact: true }).click()
  await reader(page, original(initial.state.daily.ids[0]))
  await expectReducedMotion(page, '.reader-dialog[open], .reader-footer .button')
  await closeReader(page)
  await navigate(page, 'profile')
  await page.getByRole('switch', { name: 'Reduce motion', exact: true }).uncheck()
  await waitForStored(page, (snapshot) => snapshot.state.reducedMotion, false)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await navigate(page, 'today')
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'full')
  expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true)
  await expectReducedMotion(page, '.mascot-body, .mascot-scarf, .hero-action, .daily-progress .progress-track > span')
})

async function scanAccessibility(page: Page, info: TestInfo, label: string) {
  const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  await info.attach(`axe-${label}`, { body: JSON.stringify({ violations: result.violations, incomplete: result.incomplete }, null, 2), contentType: 'application/json' })
  // Soft assertions collect all screens in one report, but any violation still fails the test.
  expect.soft(result.violations, `${label}: ${JSON.stringify(result.violations.map((entry) => ({ id: entry.id, nodes: entry.nodes.map((node) => node.target) })))}`).toEqual([])
}

test('WCAG 2 A/AA and 2.1 AA checks cover all five screens and the mobile reader without exclusions', async ({ page, network }, info) => {
  test.setTimeout(120_000)
  await openFreshToday(page, network)
  for (const screen of ['today', 'explore', 'vault', 'review', 'profile'] as const) {
    await navigate(page, screen)
    await scanAccessibility(page, info, screen)
  }
  await page.setViewportSize({ width: 390, height: 844 })
  const lesson = original('cinema-002')
  await visit(page, 'explore', { lesson: lesson.id })
  const dialog = await reader(page, lesson)
  await scanAccessibility(page, info, 'reader-understand-390')
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await scanAccessibility(page, info, 'reader-try-390')
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await scanAccessibility(page, info, 'reader-recall-390')
  await answerRecall(page, lesson, false)
  await scanAccessibility(page, info, 'reader-feedback-390')
})

async function checkHorizontalLayout(page: Page, label: string) {
  await page.evaluate(async () => { await document.fonts.ready })
  const result = await page.evaluate(() => {
    const width = window.innerWidth
    const selectors = [
      '#main', '.app-header', '.header-inner', '.mobile-nav', '.desktop-nav', '.lesson-card', '.path-tile',
      '.panel', '.form-row', '.field-input', '.button', '.search-field', '.topic-select', '.reader-dialog[open]',
      '.reader-shell', '.reader-content', '.reader-toolbar', '.reader-steps', '.reader-footer', '.quiz-option',
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
  expect.soft(result.documentWidth, `${label}: document width`).toBeLessThanOrEqual(result.width + 1)
  expect.soft(result.overflow, `${label}: meaningful content must not be hidden by overflow-x: clip`).toEqual([])
}

async function checkTargets(page: Page, selector: string, minimum: number, label: string) {
  const boxes = await page.locator(selector).evaluateAll((elements) => elements.map((element) => {
    const box = element.getBoundingClientRect()
    return { name: element.getAttribute('aria-label') ?? element.textContent?.trim(), width: box.width, height: box.height }
  }))
  expect(boxes.length, `${label}: target selection must not be empty`).toBeGreaterThan(0)
  expect.soft(boxes.filter((box) => box.width < minimum - 0.5 || box.height < minimum - 0.5), `${label}: minimum ${minimum}px interactive targets`).toEqual([])
}

test('Layouts fit 320, 390, 768, 1280, and 1920px with usable primary targets and in-viewport reader controls', async ({ page, network }) => {
  test.setTimeout(120_000)
  await openFreshToday(page, network)
  for (const width of [320, 390, 768, 1280, 1920]) {
    const height = width <= 800 ? 844 : 800
    await page.setViewportSize({ width, height })
    for (const screen of ['today', 'explore', 'vault', 'review', 'profile'] as const) {
      await visit(page, screen)
      await checkHorizontalLayout(page, `${screen} at ${width}px`)
      await checkTargets(page, '#main .button-primary:visible, #main .lesson-card-main:visible', 44, `${screen} at ${width}px`)
      // Small glyphs still get full touch targets. Decorative shapes are not controls.
      await checkTargets(page, '.profile-button:visible, .icon-button:visible', 44, `compact controls at ${width}px`)
      const navigation = page.locator('nav[aria-label="Main navigation"]:visible')
      if (width <= 800) {
        await checkTargets(page, '.mobile-nav > a:visible', 44, `mobile navigation at ${width}px`)
        const box = (await navigation.boundingBox())!
        expect.soft(box.y).toBeGreaterThanOrEqual(0)
        expect.soft(box.y + box.height).toBeLessThanOrEqual(height + 1)
      }
    }
    const lesson = original('cinema-001')
    await visit(page, 'explore', { lesson: lesson.id })
    const dialog = await reader(page, lesson)
    // Reopening now restores the previous width's unfinished stage. Select
    // Understand explicitly so every size still tests all three stages.
    await dialog.getByRole('navigation', { name: 'Lesson stages' }).getByRole('button', { name: /Understand$/ }).click()
    for (const stage of ['understand', 'try', 'recall'] as const) {
      if (stage === 'try') await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
      if (stage === 'recall') await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
      await checkHorizontalLayout(page, `reader ${stage} at ${width}px`)
      await checkTargets(page, '.reader-toolbar .icon-button:visible, .reader-footer .button:visible', 44, `reader ${stage} at ${width}px`)
      const shell = (await dialog.boundingBox())!
      const footer = (await dialog.locator('.reader-footer').boundingBox())!
      expect.soft(shell.y).toBeGreaterThanOrEqual(-1)
      expect.soft(shell.y + shell.height).toBeLessThanOrEqual(height + 1)
      expect.soft(footer.y + footer.height).toBeLessThanOrEqual(height + 1)
    }
    await closeReader(page)
  }
})