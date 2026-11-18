import AxeBuilder from '@axe-core/playwright'
import { test, expect, type Locator, type Page } from '@playwright/test'
import { learningPaths, lessonById } from '../../src/data'
import type { LibrarySnapshot } from '../../src/lib/storage'

const STORAGE_KEY = 'unscroll-library-v1'
const THEME_HINT_KEY = 'unscroll-theme'
const PAPER = { light: 'rgb(247, 244, 237)', dark: 'rgb(26, 22, 23)' }
const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21aa']
const LESSON = lessonById.get('cinema-027')!

type ThemeWindow = Window & { __themesSeen: string[] }

test.use({ serviceWorkers: 'block' })
test.beforeEach(async ({ page }) => {
  await page.route('**/.netlify/functions/discover', (route) => route.fulfill({ status: 503, contentType: 'application/json', body: '{}' }))
  // Record every theme the document ever shows, starting before any page script runs.
  await page.addInitScript(() => {
    const seen: string[] = []
    ;(window as unknown as ThemeWindow).__themesSeen = seen
    new MutationObserver(() => {
      const theme = document.documentElement?.dataset.theme
      if (theme && seen.at(-1) !== theme) seen.push(theme)
    }).observe(document, { subtree: true, attributes: true, attributeFilter: ['data-theme'] })
  })
})

async function storedState(page: Page): Promise<LibrarySnapshot['state'] | undefined> {
  // Read idb-keyval's real default database and store. Never seed or replace it.
  return page.evaluate((key) => new Promise<LibrarySnapshot['state'] | undefined>((resolve, reject) => {
    const opening = indexedDB.open('keyval-store')
    opening.onerror = () => reject(opening.error)
    opening.onsuccess = () => {
      const db = opening.result
      if (!db.objectStoreNames.contains('keyval')) { db.close(); resolve(undefined); return }
      const transaction = db.transaction('keyval', 'readonly')
      const request = transaction.objectStore('keyval').get(key)
      let state: LibrarySnapshot['state'] | undefined
      request.onsuccess = () => { state = (request.result as LibrarySnapshot | undefined)?.state }
      transaction.oncomplete = () => { db.close(); resolve(state) }
      transaction.onabort = transaction.onerror = () => { db.close(); reject(transaction.error) }
    }
  }), STORAGE_KEY)
}

const themesSeen = (page: Page) => page.evaluate(() => (window as unknown as ThemeWindow).__themesSeen)
const themeHint = (page: Page) => page.evaluate((key) => window.localStorage.getItem(key), THEME_HINT_KEY)
const preferences = (page: Page) => page.getByRole('region', { name: 'Preferences', exact: true })

async function openLesson(page: Page) {
  await page.goto(`/#/explore?lesson=${LESSON.id}`)
  const dialog = page.locator('dialog.reader-dialog[open]')
  await expect(dialog).toHaveAccessibleName(LESSON.title)
  return dialog
}

async function expectNoViolations(page: Page, label: string) {
  const result = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze()
  expect(result.violations.map((violation) => ({ id: violation.id, nodes: violation.nodes.map((node) => node.target.join(' ')) })), label).toEqual([])
}

async function expectFitsWidth(dialog: Locator, controls: Locator, count: number, width: number) {
  // Measure with the bundled fonts, not a wider fallback that is still being swapped out.
  await dialog.page().evaluate(async () => { await document.fonts.ready })
  expect(await dialog.evaluate((node) => node.scrollWidth <= node.clientWidth + 1)).toBe(true)
  await expect(controls).toHaveCount(count)
  for (const control of await controls.all()) {
    const box = await control.boundingBox()
    expect(box, 'control is rendered').not.toBeNull()
    expect(box!.x).toBeGreaterThanOrEqual(-1)
    expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1)
    expect(await control.evaluate((node) => node.scrollWidth <= node.clientWidth + 1), 'label is not clipped').toBe(true)
  }
}

test.describe('on a device set to dark', () => {
  test.use({ colorScheme: 'dark' })

  test('the app is dark from the first paint, stores no choice, and follows the device when it changes', async ({ page }) => {
    await page.goto('/#/today')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect(page.locator('body')).toHaveCSS('background-color', PAPER.dark)
    await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark')
    await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#1a1617')
    await expect.poll(async () => (await storedState(page))?.daily.ids.length).toBe(5)
    expect(await storedState(page)).not.toHaveProperty('theme')
    expect(await themeHint(page)).toBeNull()
    expect(await themesSeen(page)).toEqual(['dark'])

    await page.emulateMedia({ colorScheme: 'light' })
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await expect(page.locator('body')).toHaveCSS('background-color', PAPER.light)
    await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#f7f4ed')
    expect(await storedState(page)).not.toHaveProperty('theme')
  })

  test('a saved Light choice wins over the device after a reload without a dark flash, and Match device restores it', async ({ page }) => {
    await page.goto('/#/profile')
    await expect(preferences(page).getByRole('radio', { name: 'Match device', exact: true })).toBeChecked()
    await preferences(page).getByRole('radio', { name: 'Light', exact: true }).check()
    await expect(preferences(page).getByRole('status')).toHaveText('Light appearance saved.')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await expect(page.locator('body')).toHaveCSS('background-color', PAPER.light)
    await expect.poll(async () => (await storedState(page))?.theme).toBe('light')
    expect(await themeHint(page)).toBe('light')

    await page.reload()
    await expect(preferences(page).getByRole('radio', { name: 'Light', exact: true })).toBeChecked()
    await expect(page.locator('body')).toHaveCSS('background-color', PAPER.light)
    expect(await themesSeen(page)).toEqual(['light'])

    await preferences(page).getByRole('radio', { name: 'Match device', exact: true }).check()
    await expect(preferences(page).getByRole('status')).toHaveText('Appearance now follows your device setting.')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect.poll(async () => (await storedState(page))?.theme).toBe('system')
    expect(await themeHint(page)).toBeNull()
  })

  test('every dark screen and reader step passes the WCAG A and AA checks', async ({ page }) => {
    test.slow()
    for (const route of ['today', 'explore', 'vault', 'review', 'profile']) {
      await page.goto(`/#/${route}`)
      await expect(page.locator('main#main')).toBeVisible()
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
      await page.evaluate(() => document.fonts.ready)
      await expectNoViolations(page, route)
    }
    const dialog = await openLesson(page)
    await dialog.getByRole('button', { name: 'Reading settings', exact: true }).click()
    await expectNoViolations(page, 'reader, understand step with settings open')
    await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
    await expectNoViolations(page, 'reader, practice step')
    await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
    await dialog.locator('.quiz-option').nth((LESSON.quiz!.correctIndex + 1) % 3).click()
    await dialog.getByRole('button', { name: 'Check my answer', exact: true }).click()
    await expectNoViolations(page, 'reader, recall step with a wrong answer revealed')
    await dialog.getByRole('button', { name: 'Complete bite', exact: true }).click()
    await expectNoViolations(page, 'reader, completed')
  })

  test('diagrams keep their light paper, and the mascot, hero and poster keep their fixed colors', async ({ page }) => {
    await page.goto('/#/today')
    const mascot = page.getByRole('img', { name: 'Ink, the original UNSCROLL fox mascot', exact: true })
    await expect(mascot.locator('.mascot-body')).toHaveCSS('stroke', 'rgb(35, 31, 32)')
    await expect(mascot.locator('.mascot-body > path').first()).toHaveCSS('fill', PAPER.light)
    await expect(page.locator('.daily-hero')).toHaveCSS('color', PAPER.light)
    // The poster stays brand red with ivory lettering. The lightened accent is for text and buttons.
    await expect(page.locator('.film-frame')).toHaveCSS('background-color', 'rgb(205, 42, 57)')
    await expect(page.locator('.film-frame .frame-copy')).toHaveCSS('color', 'rgb(255, 248, 239)')
    const dialog = await openLesson(page)
    const diagram = dialog.locator('.teaching-image').first()
    await diagram.scrollIntoViewIfNeeded()
    await expect(diagram).toHaveCSS('filter', 'brightness(0.88)')
  })
})

test('a light device keeps the light theme and an explicit Dark choice survives a reload and the backup', async ({ page }) => {
  await page.goto('/#/profile')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'light')
  expect(await themesSeen(page)).toEqual(['light'])
  await preferences(page).getByRole('radio', { name: 'Dark', exact: true }).check()
  await expect(preferences(page).getByRole('status')).toHaveText('Dark appearance saved.')
  await expect(page.locator('body')).toHaveCSS('background-color', PAPER.dark)
  await expect.poll(async () => (await storedState(page))?.theme).toBe('dark')

  await page.reload()
  await expect(preferences(page).getByRole('radio', { name: 'Dark', exact: true })).toBeChecked()
  expect(await themesSeen(page)).toEqual(['dark'])

  const pendingDownload = page.waitForEvent('download')
  await page.getByRole('region', { name: 'Backups and clearing data', exact: true }).getByRole('button', { name: 'Export backup', exact: true }).click()
  const stream = await (await pendingDownload).createReadStream()
  const chunks: Buffer[] = []
  for await (const chunk of stream) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  expect((JSON.parse(Buffer.concat(chunks).toString('utf8')) as LibrarySnapshot).state.theme).toBe('dark')
})

test('reading settings inside a lesson change the text size and theme and agree with the profile', async ({ page }) => {
  const dialog = await openLesson(page)
  const toggle = dialog.getByRole('button', { name: 'Reading settings', exact: true })
  const panel = dialog.getByRole('group', { name: 'Reading settings', exact: true })
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await expect(panel).toBeHidden()
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-expanded', 'true')
  await expect(panel.getByRole('radio', { name: 'Standard text', exact: true })).toBeChecked()
  await expect(panel.getByRole('radio', { name: 'Match device', exact: true })).toBeChecked()

  const paragraph = dialog.locator('.reader-prose .teaching-section > p').first()
  await expect(paragraph).toHaveCSS('font-size', '17px')
  await panel.getByRole('radio', { name: 'Larger text', exact: true }).check()
  await expect(paragraph).toHaveCSS('font-size', '20px')
  await panel.getByRole('radio', { name: 'Dark', exact: true }).check()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(dialog).toHaveCSS('background-color', PAPER.dark)
  await expect.poll(async () => { const state = await storedState(page); return [state?.readingSize, state?.theme] }).toEqual(['large', 'dark'])

  await page.setViewportSize({ width: 320, height: 640 })
  await expectFitsWidth(dialog, panel.locator('.chip'), 5, 320)
  await toggle.click()
  await expect(panel).toBeHidden()
  await expect(paragraph).toHaveCSS('font-size', '20px')

  await dialog.getByRole('button', { name: 'Close lesson', exact: true }).click()
  await page.goto('/#/profile')
  await expect(preferences(page).getByRole('radio', { name: 'Larger text', exact: true })).toBeChecked()
  await expect(preferences(page).getByRole('radio', { name: 'Dark', exact: true })).toBeChecked()
})

test('the reader shows how far the current step has been scrolled', async ({ page }) => {
  const dialog = await openLesson(page)
  const track = dialog.locator('.reader-progress')
  const filled = () => track.locator('span').evaluate((bar) => bar.getBoundingClientRect().width / bar.parentElement!.getBoundingClientRect().width)
  await expect(track).toBeVisible()
  await expect(track).toHaveAttribute('aria-hidden', 'true')
  expect(await filled()).toBeLessThan(0.02)

  const content = dialog.locator('.reader-content')
  await content.evaluate((node) => { node.scrollTop = (node.scrollHeight - node.clientHeight) / 2 })
  await expect.poll(filled).toBeGreaterThan(0.45)
  expect(await filled()).toBeLessThan(0.55)
  await content.evaluate((node) => { node.scrollTop = node.scrollHeight })
  await expect.poll(filled).toBeGreaterThan(0.98)

  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await expect(dialog.getByRole('heading', { level: 2, name: 'Take it into the real world.', exact: true })).toBeVisible()
  await expect.poll(async () => await track.isHidden() || await filled() < 0.02).toBe(true)
})

test('lesson step labels are at least 12px and fit a 320px screen', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 })
  const dialog = await openLesson(page)
  const steps = dialog.getByRole('navigation', { name: 'Lesson stages', exact: true }).getByRole('button')
  await expect(steps).toHaveCount(3)
  for (const step of await steps.all()) expect(parseFloat(await step.evaluate((node) => getComputedStyle(node).fontSize))).toBeGreaterThanOrEqual(12)
  await expectFitsWidth(dialog, steps, 3, 320)
  await expectFitsWidth(dialog, dialog.locator('.reader-toolbar button'), 4, 320)
})

test('Explore shortens the learning path grid until asked for all of it, and the followed path leads', async ({ page }, info) => {
  const preview = info.project.name === 'desktop-chromium' ? 8 : 6
  await page.goto('/#/explore')
  const grid = page.locator('#learning-path-list')
  const shown = grid.getByRole('button')
  await expect(grid.locator('button.path-tile')).toHaveCount(learningPaths.length)
  await expect(shown).toHaveCount(preview)
  await expect(shown.first()).toContainText(learningPaths[0].title)
  const toggle = page.getByRole('button', { name: `Show all ${learningPaths.length} paths`, exact: true })
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await expect(toggle).toHaveAttribute('aria-controls', 'learning-path-list')
  await toggle.click()
  await expect(shown).toHaveCount(learningPaths.length)
  const fewer = page.getByRole('button', { name: 'Show fewer paths', exact: true })
  await expect(fewer).toHaveAttribute('aria-expanded', 'true')
  await fewer.click()
  await expect(shown).toHaveCount(preview)

  const last = learningPaths.at(-1)!
  await page.goto(`/#/explore?path=${last.id}`)
  await page.getByRole('button', { name: 'Add to my daily mix', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Following this path', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'All learning paths', exact: true }).click()
  await expect(shown).toHaveCount(preview)
  await expect(shown.first()).toContainText(last.title)
  await expect(shown.first()).toContainText('Following')
  await expect(shown.nth(1)).toContainText(learningPaths[0].title)
})

test('a lesson left at step two is labeled In progress until it is completed', async ({ page }) => {
  await page.goto('/#/explore')
  const card = page.locator('.explore-results .lesson-card').first()
  const title = (await card.getByRole('heading', { level: 3 }).textContent())!
  await expect(card.locator('.lesson-card-progress')).toHaveCount(0)
  await card.locator('.lesson-card-main').click()
  const dialog = page.locator('dialog.reader-dialog[open]')
  await expect(dialog).toHaveAccessibleName(title)
  await dialog.getByRole('button', { name: 'Close lesson', exact: true }).click()
  await expect(card.locator('.lesson-card-progress'), 'opening a lesson is not progress').toHaveCount(0)

  await card.locator('.lesson-card-main').click()
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('button', { name: 'Close lesson', exact: true }).click()
  await expect(card.locator('.lesson-card-progress')).toHaveText('In progress')
  await expect(card).not.toContainText('Learned')

  await card.locator('.lesson-card-main').click()
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await dialog.getByRole('radio').first().check()
  await dialog.getByRole('button', { name: 'Check my answer', exact: true }).click()
  await dialog.getByRole('button', { name: 'Complete bite', exact: true }).click()
  await dialog.getByRole('button', { name: 'Close lesson', exact: true }).click()
  await expect(card.locator('.lesson-card-progress')).toHaveCount(0)
  await expect(card).toContainText('Learned')
})

test('the phone tab bar marks the current tab with weight as well as color', async ({ page }, info) => {
  test.skip(info.project.name === 'desktop-chromium', 'The bottom tab bar is the phone layout')
  await page.goto('/#/explore')
  const tabs = page.locator('.mobile-nav')
  await expect(tabs.getByRole('link', { name: 'Explore', exact: true })).toHaveAttribute('aria-current', 'page')
  await expect(tabs.getByRole('link', { name: 'Explore', exact: true })).toHaveCSS('font-weight', '700')
  await expect(tabs.getByRole('link', { name: 'Today', exact: true })).toHaveCSS('font-weight', '400')
})

test('the built stylesheet stops pull-to-refresh only for the installed app', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Pull-to-refresh is a Chrome on Android gesture, and the WebKit test build drops the property')
  await page.goto('/#/today')
  await expect(page.locator('main#main')).toBeVisible()
  // Browsers offer no way to emulate display-mode here, so read the shipped rule itself.
  const rules = await page.evaluate(() => [...document.styleSheets].flatMap((sheet) => [...sheet.cssRules])
    .filter((rule): rule is CSSMediaRule => rule instanceof CSSMediaRule && rule.conditionText.includes('display-mode: standalone'))
    .flatMap((rule) => [...rule.cssRules].map((inner) => inner.cssText)))
  expect(rules).toHaveLength(1)
  expect(rules[0]).toMatch(/^html, body \{ overscroll-behavior-y: contain; \}$/)
  await expect(page.locator('html')).toHaveCSS('overscroll-behavior-y', 'auto')
})
