import { chromium } from '@playwright/test'
import fs from 'node:fs/promises'

// Review aid: photographs each lesson picture as the reader shows it on a phone.
// Usage, with the preview server running: node scripts/capture-lesson-photos.mjs [--dark] [--links] <lesson-id> ...
const dark = process.argv.includes('--dark')
const links = process.argv.includes('--links')
const ids = process.argv.slice(2).filter((value) => !value.startsWith('--'))
const out = '.hallmark/photos/shots'
await fs.mkdir(out, { recursive: true })
const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, reducedMotion: 'reduce', serviceWorkers: 'block', locale: 'en-US', colorScheme: dark ? 'dark' : 'light' })
const page = await context.newPage()
await page.route('**/.netlify/functions/discover', (route) => route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ error: 'Offline visual-review fixture' }) }))
for (const id of ids) {
  await page.goto(`http://localhost:4173/#/explore?lesson=${id}`)
  const dialog = page.getByRole('dialog').first()
  await dialog.waitFor()
  await page.evaluate(() => document.fonts.ready)
  const figures = dialog.locator(links ? '.connected-lessons' : '.lesson-photo')
  const count = await figures.count()
  for (let index = 0; index < count; index += 1) {
    const figure = figures.nth(index)
    await figure.scrollIntoViewIfNeeded()
    if (!links) await figure.locator('img.lesson-photo-image').evaluate((image) => image.decode())
    const file = `${out}/${id}-${links ? 'links' : index + 1}${dark ? '-dark' : ''}.jpg`
    await figure.screenshot({ path: file, type: 'jpeg', quality: 72 })
    console.log(file)
  }
  if (!count) console.log(`${id}: nothing to capture`)
  await page.goto('http://localhost:4173/#/explore')
}
await browser.close()
