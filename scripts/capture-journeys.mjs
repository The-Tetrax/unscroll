import { chromium } from '@playwright/test'
import fs from 'node:fs/promises'

const out = '.hallmark/journeys'
await fs.mkdir(out, { recursive: true })
const browser = await chromium.launch()
for (const [name, width, height] of [['phone', 390, 844], ['desktop', 1280, 900]]) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce', serviceWorkers: 'allow', locale: 'en-US' })
  const page = await context.newPage()
  await page.route('**/.netlify/functions/discover', (route) => route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ error: 'Offline visual-review fixture' }) }))
  const shot = async (label, fullPage = true) => { await page.screenshot({ path: `${out}/${name}-${label}.png`, fullPage }) }
  for (const route of ['today', 'explore', 'vault', 'review', 'profile']) {
    await page.goto(`http://localhost:4173/#/${route}`)
    await page.locator('main#main').waitFor()
    await page.evaluate(() => document.fonts.ready)
    await shot(route)
  }
  await page.goto('http://localhost:4173/#/explore?path=phone-eye')
  await page.getByRole('heading', { level: 1 }).waitFor()
  await shot('cinema-path')
  await page.getByRole('button', { name: 'Add to my daily mix' }).click()
  await page.locator('.explore-results .lesson-card-main').first().click()
  const dialog = page.getByRole('dialog')
  await dialog.waitFor()
  await shot('reader-understand', false)
  await dialog.getByRole('button', { name: 'Try this idea', exact: true }).click()
  await dialog.getByRole('textbox', { name: /Your note or experiment/ }).fill('Visual review sample: compare the same doorway from two camera heights.')
  await dialog.getByRole('button', { name: 'Save this bite', exact: true }).click()
  await shot('reader-experiment', false)
  await dialog.getByRole('button', { name: 'Test my recall', exact: true }).click()
  await dialog.getByRole('radio').first().check()
  await dialog.getByRole('button', { name: 'Check my answer', exact: true }).click()
  await shot('reader-feedback', false)
  await dialog.getByRole('button', { name: 'Complete bite', exact: true }).click()
  await shot('reader-complete', false)
  await dialog.getByRole('button', { name: 'Close lesson', exact: true }).click()
  await page.goto('http://localhost:4173/#/vault?view=notes')
  await page.getByRole('heading', { level: 1 }).waitFor()
  await shot('vault-with-note')
  await page.goto('http://localhost:4173/#/profile')
  await page.getByRole('heading', { level: 1 }).waitFor()
  await shot('profile-with-progress')
  await context.close()
}
await browser.close()
console.log('Captured 26 desktop/phone route and reader-state images in .hallmark/journeys. Sample notes are only in isolated review contexts.')