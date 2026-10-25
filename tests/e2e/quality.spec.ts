import { test, expect } from '@playwright/test'
import { lessonById } from '../../src/data'

test.use({ serviceWorkers: 'block' })
test.beforeEach(async ({ page }) => {
  await page.route('**/.netlify/functions/discover', (route) => route.fulfill({
    status: 503, contentType: 'application/json', body: JSON.stringify({ error: 'Isolated QA fixture' }),
  }))
})

test('Copying a lesson link excludes private Vault search text and navigation state', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: {
      writeText: async (value: string) => { (window as unknown as { copiedLesson: string }).copiedLesson = value },
    } })
  })
  await page.goto('/#/vault?q=private-personal-note&view=notes&lesson=cinema-001&stage=try')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await dialog.getByRole('button', { name: 'Copy lesson link', exact: true }).click()
  await expect(dialog.getByRole('status').filter({ hasText: 'Link copied' })).toBeVisible()
  const copied = await page.evaluate(() => (window as unknown as { copiedLesson: string }).copiedLesson)
  expect(copied).toBe(new URL('/#/explore?lesson=cinema-001', page.url()).href)
  expect(copied).not.toContain('private-personal-note')
  expect(copied).not.toContain('stage=')
})

test('Unbookmarking a collected lesson does not make its collection membership inaccessible', async ({ page }) => {
  const lesson = lessonById.get('cinema-001')!
  await page.goto('/#/vault')
  await page.locator('.collection-manager > summary').click()
  await page.getByLabel('New collection name', { exact: true }).fill('Camera experiments')
  await page.getByRole('button', { name: 'Create collection', exact: true }).click()
  const option = page.getByLabel('Collection', { exact: true }).locator('option').filter({ hasText: 'Camera experiments' })
  await expect(option).toHaveCount(1)
  const collection = await option.getAttribute('value')
  await page.goto('/#/explore?lesson=cinema-001')
  const dialog = page.getByRole('dialog', { name: lesson.title, exact: true })
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.locator('.collection-picker > summary').click()
  await dialog.getByRole('checkbox', { name: 'Camera experiments', exact: true }).check()
  await dialog.getByRole('button', { name: 'Unsave this bite', exact: true }).click()
  await expect(dialog.getByRole('checkbox', { name: 'Camera experiments', exact: true })).toBeChecked()
  await dialog.getByRole('button', { name: 'Close lesson', exact: true }).click()
  await page.goto(`/#/vault?collection=${collection}`)
  await expect(page.getByRole('button', { name: 'Saved (0)', exact: true })).toBeVisible()
  await expect(page.locator('.lesson-card h3')).toHaveText(lesson.title)
  await expect(page.getByRole('status').filter({ hasText: '1 of 1 collected lessons' })).toBeVisible()
  await page.reload()
  await expect(page.locator('.lesson-card h3')).toHaveText(lesson.title)
  await expect(page.getByRole('button', { name: `Save ${lesson.title}`, exact: true })).toHaveAttribute('aria-pressed', 'false')
})

test('Profile shortcuts reveal installation and backup controls without searching a long page', async ({ page }) => {
  await page.goto('/#/profile')
  await page.getByRole('button', { name: 'Install on my phone', exact: true }).click()
  await expect(page).toHaveURL(/section=install/)
  await expect(page.getByRole('heading', { name: 'Install UNSCROLL', exact: true })).toBeInViewport()
  await page.getByRole('button', { name: 'Backups and data', exact: true }).click()
  await expect(page).toHaveURL(/section=backup/)
  await expect(page.getByRole('heading', { name: 'Backups and local data', exact: true })).toBeInViewport()
})

test('A non-cinema followed path shows relevant artwork and completing from Explore returns to Explore', async ({ page }) => {
  await page.goto('/#/explore?path=observe')
  await page.getByRole('button', { name: 'Add to my daily mix', exact: true }).click()
  await page.goto('/#/today')
  await expect(page.locator('.frame-copy')).toHaveText('LOOKCLOSER.')
  const lesson = lessonById.get('observer-001')!
  await page.goto('/#/explore?path=observe&lesson=observer-001')
  const dialog = page.getByRole('dialog', { name: lesson.title, exact: true })
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await dialog.getByRole('radio').nth(lesson.quiz!.correctIndex).check()
  await dialog.getByRole('button', { name: 'Check my answer', exact: true }).click()
  await expect(dialog.locator('.quiz-feedback')).toBeInViewport()
  await dialog.getByRole('button', { name: 'Complete bite', exact: true }).click()
  await page.getByRole('dialog').getByRole('button', { name: 'Back to Explore', exact: true }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page).toHaveURL(/#\/explore\?path=observe$/)
})