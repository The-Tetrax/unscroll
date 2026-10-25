import AxeBuilder from '@axe-core/playwright'
import { test, expect, type Page } from '@playwright/test'
import type { LibrarySnapshot } from '../../src/lib/storage'

test.use({ serviceWorkers: 'block' })
test.beforeEach(async ({ page }) => {
  await page.clock.install({ time: new Date('2030-06-15T10:00:00Z') })
  await page.route('**/.netlify/functions/discover', (route) => route.fulfill({ status: 503, contentType: 'application/json', body: '{}' }))
})

async function stored(page: Page): Promise<LibrarySnapshot> {
  return page.evaluate(() => new Promise<LibrarySnapshot>((resolve, reject) => {
    const open = indexedDB.open('keyval-store')
    open.onerror = () => reject(open.error)
    open.onsuccess = () => {
      const db = open.result
      const tx = db.transaction('keyval', 'readonly')
      const request = tx.objectStore('keyval').get('unscroll-library-v1')
      request.onsuccess = () => resolve(request.result)
      tx.oncomplete = () => db.close()
      tx.onerror = () => reject(tx.error)
    }
  }))
}

async function start(page: Page) {
  await page.goto('/#/today')
  await expect(page.locator('.daily-lineup .lesson-card')).toHaveCount(5)
  await expect.poll(async () => (await stored(page)).state.daily.ids.length).toBe(5)
  await page.getByRole('button', { name: 'Set up my learning', exact: true }).click()
  const dialog = page.locator('dialog.onboarding-dialog')
  await expect(dialog).toBeVisible()
  return dialog
}

test('onboarding is optional, cancellation preserves preferences and focus, and the walkthrough reopens in settings', async ({ page }) => {
  const dialog = await start(page)
  const original = await stored(page)
  await dialog.getByRole('button', { name: 'Continue', exact: true }).click()
  await dialog.getByRole('checkbox').first().uncheck()
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Set up my learning', exact: true })).toBeFocused()
  expect(await stored(page)).toEqual(original)
  await page.getByRole('button', { name: 'Dismiss welcome', exact: true }).click()
  await page.goto('/#/profile')
  await page.getByRole('button', { name: 'How UNSCROLL works', exact: true }).click()
  await expect(dialog).toHaveAccessibleName('Read it. Try it. Recall it.')
  await dialog.getByRole('button', { name: 'Not now', exact: true }).click()
  await expect(page.getByRole('button', { name: 'How UNSCROLL works', exact: true })).toBeFocused()
})

test('setup validates topics and saves a one-lesson goal without replacing the issued list or progress', async ({ page }) => {
  const dialog = await start(page)
  const before = await stored(page)
  await dialog.getByRole('button', { name: 'Continue', exact: true }).click()
  for (const checkbox of await dialog.getByRole('checkbox').all()) await checkbox.uncheck()
  await expect(dialog.getByRole('button', { name: 'Continue', exact: true })).toBeDisabled()
  await expect(dialog.getByRole('status')).toHaveText('Choose at least one topic to continue.')
  await dialog.getByRole('checkbox', { name: /^Money/ }).check()
  await dialog.getByRole('button', { name: 'Continue', exact: true }).click()
  await dialog.getByRole('radio', { name: /One idea, no rush/ }).check()
  await dialog.getByRole('button', { name: 'Back', exact: true }).click()
  await expect(dialog.getByRole('checkbox', { name: /^Money/ })).toBeChecked()
  await dialog.getByRole('button', { name: 'Continue', exact: true }).click()
  await expect(dialog.getByRole('radio', { name: /One idea, no rush/ })).toBeChecked()
  await dialog.getByRole('button', { name: 'Save and start learning', exact: true }).click()
  await expect(dialog).toHaveCount(0)
  const after = await stored(page)
  expect(after).toEqual({ ...before, state: { ...before.state, goal: 1, interests: ['money'], welcomeDismissed: true, onboardingVersion: 1 } })
  await page.reload()
  await expect(page.locator('.onboarding-invite')).toHaveCount(0)
  await page.clock.fastForward(24 * 60 * 60 * 1000)
  await expect(page.locator('.daily-lineup .lesson-card')).toHaveCount(1)
  const next = await stored(page)
  expect(next.state.daily.ids.some((id) => before.state.daily.ids.includes(id))).toBe(false)
  expect(next.state.xp).toBe(0)
})

test('setup renders a real diagram and every step fits narrow screens with keyboard and accessible controls', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 })
  const dialog = await start(page)
  const image = dialog.locator('.setup-sample img')
  await expect.poll(() => image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true)
  for (let step = 0; step < 3; step++) {
    expect((await new AxeBuilder({ page }).include('.onboarding-dialog').analyze()).violations).toEqual([])
    expect(await dialog.evaluate((node) => node.scrollWidth <= node.clientWidth + 1)).toBe(true)
    await expect(dialog.locator('.setup-actions')).toBeInViewport({ ratio: .99 })
    await expect(dialog.getByRole('button', { name: 'Close setup without saving', exact: true })).toBeInViewport({ ratio: .99 })
    if (step < 2) await dialog.getByRole('button', { name: 'Continue', exact: true }).click()
  }
  const close = dialog.getByRole('button', { name: 'Close setup without saving', exact: true })
  await close.focus()
  await page.keyboard.press('Shift+Tab')
  await expect(dialog.getByRole('button', { name: 'Save and start learning', exact: true })).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(close).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
})

test('failed setup persistence stays visible and does not claim that preferences were saved', async ({ page }) => {
  const dialog = await start(page)
  const before = await stored(page)
  await dialog.getByRole('button', { name: 'Continue', exact: true }).click()
  await dialog.getByRole('button', { name: 'Continue', exact: true }).click()
  await page.evaluate(() => { IDBObjectStore.prototype.put = () => { throw new DOMException('Test storage full', 'QuotaExceededError') } })
  await dialog.getByRole('button', { name: 'Save and start learning', exact: true }).click()
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole('alert')).toContainText('not saved to device storage')
  expect(await stored(page)).toEqual(before)
})