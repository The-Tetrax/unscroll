import AxeBuilder from '@axe-core/playwright'
import { test, expect, type Page } from '@playwright/test'
import { categoryById, lessonById } from '../../src/data'
import { linksById } from '../../src/teaching/connections'
import { lessonPhotos, photoCount } from '../../src/teaching/photo-records'

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21aa']
// A lesson with one photograph under a Creative Commons license, and a lesson with a public-domain artwork.
const PICTURED = lessonById.get('cinema-004')!
const PHOTO = lessonPhotos[PICTURED.id][0]
const ARTWORK_LESSON = lessonById.get('cinema-025')!
const ARTWORK = lessonPhotos[ARTWORK_LESSON.id][0]
const LINKED = lessonById.get('cinema-007')!

test.use({ serviceWorkers: 'block' })
test.beforeEach(async ({ page }) => {
  await page.route('**/.netlify/functions/discover', (route) => route.fulfill({ status: 503, contentType: 'application/json', body: '{}' }))
})

async function openLesson(page: Page, id: string) {
  const lesson = lessonById.get(id)!
  await page.goto(`/#/explore?lesson=${id}`)
  const dialog = page.locator('dialog.reader-dialog[open]')
  await expect(dialog).toHaveAccessibleName(lesson.title)
  return dialog
}

async function expectNoViolations(page: Page, label: string) {
  const result = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze()
  expect(result.violations.map((violation) => ({ id: violation.id, nodes: violation.nodes.map((node) => node.target.join(' ')) })), label).toEqual([])
}

test('a lesson picture is a real local file with its caption and a credit that links to the license and the source', async ({ page }) => {
  expect(PHOTO.credit.licenseUrl, 'this case needs a Creative Commons picture').toBeTruthy()
  const requests: string[] = []
  page.on('request', (request) => requests.push(request.url()))
  const dialog = await openLesson(page, PICTURED.id)
  const figures = dialog.locator('figure.lesson-photo')
  await expect(figures).toHaveCount(lessonPhotos[PICTURED.id].length)
  const figure = figures.first()
  await figure.scrollIntoViewIfNeeded()
  await expect(figure.locator('.lesson-photo-heading h3')).toHaveText(PHOTO.title)
  await expect(figure.locator(':scope > figcaption')).toHaveText(PHOTO.caption)
  const image = figure.locator(':scope > img.lesson-photo-image')
  await expect(image).toHaveAttribute('alt', PHOTO.alt)
  const decoded = await image.evaluate(async (element) => {
    if (!(element instanceof HTMLImageElement)) throw new Error('Expected a real lesson picture')
    await element.decode()
    return { src: new URL(element.currentSrc).pathname, origin: new URL(element.currentSrc).origin === window.location.origin, width: element.naturalWidth, height: element.naturalHeight }
  })
  expect(decoded).toEqual({ src: PHOTO.src, origin: true, width: PHOTO.width, height: PHOTO.height })
  // The picture never comes from another host, and the credit is on screen without opening anything.
  expect(requests.filter((url) => new URL(url).origin !== new URL(page.url()).origin)).toEqual([])
  const credit = figure.locator(':scope > .photo-credit')
  await expect(credit).toBeVisible()
  await expect(credit).toContainText(`Photograph: ${PHOTO.credit.author}, ${PHOTO.credit.license}`)
  const license = credit.getByRole('link', { name: `${PHOTO.credit.license} license, opens a new tab`, exact: true })
  await expect(license).toHaveAttribute('href', PHOTO.credit.licenseUrl!)
  const source = credit.getByRole('link', { name: 'Wikimedia Commons source page, opens a new tab', exact: true })
  await expect(source).toHaveAttribute('href', PHOTO.credit.source)
  for (const link of [license, source]) {
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', /noopener noreferrer/)
  }
  // Nothing in the lesson is wider than the phone or desktop column it sits in.
  expect(await dialog.evaluate((node) => node.scrollWidth <= node.clientWidth + 1)).toBe(true)
  const box = await image.boundingBox()
  const column = await dialog.locator('.reader-content').boundingBox()
  expect(box!.x).toBeGreaterThanOrEqual(column!.x - 1)
  expect(box!.x + box!.width).toBeLessThanOrEqual(column!.x + column!.width + 1)
})

test('the enlarged picture names the work, its author and the changes, and Escape returns to the lesson', async ({ page }) => {
  const dialog = await openLesson(page, PICTURED.id)
  const figure = dialog.locator('figure.lesson-photo').first()
  const enlarge = figure.getByRole('button', { name: `Enlarge photograph: ${PHOTO.title}`, exact: true })
  await enlarge.scrollIntoViewIfNeeded()
  await enlarge.click()
  const viewer = figure.locator('dialog.photo-viewer[open]')
  await expect(viewer).toHaveAccessibleName(`Enlarged photograph: ${PHOTO.title}`)
  await expect(viewer.locator('.photo-viewer-notes > p').first()).toHaveText(PHOTO.caption)
  await expect(viewer.locator('.photo-credit')).toContainText(`${PHOTO.credit.work}, by ${PHOTO.credit.author}`)
  await expect(viewer.locator('.photo-credit')).toContainText(PHOTO.credit.changes)
  await expect(viewer.locator('img')).toHaveAttribute('alt', PHOTO.alt)
  await page.keyboard.press('Escape')
  await expect(viewer).toHaveCount(0)
  // The lesson itself stays open, and focus is back inside it.
  await expect(dialog).toHaveAccessibleName(PICTURED.title)
  await enlarge.click()
  await viewer.getByRole('button', { name: 'Close enlarged photograph', exact: true }).click()
  await expect(viewer).toHaveCount(0)
  await expect(dialog).toBeVisible()
})

test('a public-domain artwork is labeled as an artwork and credited without a license link', async ({ page }) => {
  expect(ARTWORK.kind).toBe('artwork')
  expect(ARTWORK.credit.license).toBe('Public domain')
  const dialog = await openLesson(page, ARTWORK_LESSON.id)
  const figure = dialog.locator('figure.lesson-photo').first()
  await figure.scrollIntoViewIfNeeded()
  const credit = figure.locator(':scope > .photo-credit')
  await expect(credit).toContainText(`Artwork: ${ARTWORK.credit.author}, public domain,`)
  await expect(credit.getByRole('link')).toHaveCount(1)
  await expect(credit.getByRole('link')).toHaveAttribute('href', ARTWORK.credit.source)
  await expect(figure.getByRole('button', { name: `Enlarge artwork: ${ARTWORK.title}`, exact: true })).toBeVisible()
})

test('a picture that cannot load is replaced by its description, and its caption and credit stay', async ({ page }) => {
  await page.route(`**${PHOTO.src}`, (route) => route.abort('failed'))
  const dialog = await openLesson(page, PICTURED.id)
  const figure = dialog.locator('figure.lesson-photo').first()
  await figure.scrollIntoViewIfNeeded()
  await expect(figure.locator('.inline-notice')).toHaveText(`This picture is not stored on this device yet. It shows: ${PHOTO.alt}`)
  await expect(figure.locator('img')).toHaveCount(0)
  await expect(figure.getByRole('button')).toHaveCount(0)
  await expect(figure.locator(':scope > figcaption')).toHaveText(PHOTO.caption)
  await expect(figure.locator(':scope > .photo-credit')).toContainText(PHOTO.credit.author)
})

for (const colorScheme of ['light', 'dark'] as const) {
  test(`a lesson with a picture and connected ideas passes the WCAG A and AA checks in the ${colorScheme} theme`, async ({ page }) => {
    await page.emulateMedia({ colorScheme })
    const dialog = await openLesson(page, LINKED.id)
    await expect(page.locator('html')).toHaveAttribute('data-theme', colorScheme)
    await page.evaluate(() => document.fonts.ready)
    await dialog.locator('figure.lesson-photo').first().scrollIntoViewIfNeeded()
    await expectNoViolations(page, `${colorScheme} lesson with a picture`)
    await dialog.locator('figure.lesson-photo').first().getByRole('button').click()
    await expectNoViolations(page, `${colorScheme} enlarged picture`)
  })
}

test('in the dark theme a diagram by someone else is dimmed like the app\'s own diagrams, and a photograph is not', async ({ page }) => {
  const diagramLesson = Object.entries(lessonPhotos).find(([, list]) => list[0].kind === 'diagram')![0]
  expect(PHOTO.kind).toBe('photo')
  await page.emulateMedia({ colorScheme: 'dark' })
  const dialog = await openLesson(page, diagramLesson)
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  const diagram = dialog.locator('figure.lesson-photo[data-kind="diagram"] > img.lesson-photo-image').first()
  await diagram.scrollIntoViewIfNeeded()
  await expect(diagram).toHaveCSS('filter', 'brightness(0.88)')
  const photoDialog = await openLesson(page, PICTURED.id)
  const photograph = photoDialog.locator('figure.lesson-photo[data-kind="photo"] > img.lesson-photo-image').first()
  await photograph.scrollIntoViewIfNeeded()
  await expect(photograph).toHaveCSS('filter', 'none')
})

test('connected ideas open the other lesson on the same page, and the back button returns', async ({ page }) => {
  const links = linksById.get(LINKED.id)!
  expect(links.length).toBeGreaterThan(0)
  const dialog = await openLesson(page, LINKED.id)
  const section = dialog.getByRole('region', { name: 'Connected ideas', exact: true })
  await section.scrollIntoViewIfNeeded()
  const items = section.getByRole('listitem')
  await expect(items).toHaveCount(links.length)
  for (const [index, { id, why }] of links.entries()) {
    const other = lessonById.get(id)!
    await expect(items.nth(index).locator('strong')).toHaveText(other.title)
    await expect(items.nth(index).locator('a > span')).toHaveText(why)
    await expect(items.nth(index).locator('small')).toHaveText(categoryById[other.category].name)
    await expect(items.nth(index).getByRole('link')).toHaveAttribute('href', `#/explore?lesson=${id}`)
  }
  const target = lessonById.get(links[0].id)!
  await items.first().getByRole('link').click()
  await expect(page.locator('dialog.reader-dialog[open]')).toHaveAccessibleName(target.title)
  await expect(page).toHaveURL(new RegExp(`#/explore\\?lesson=${target.id}$`))
  // The pair is shown from the other side too.
  const back = page.locator('dialog.reader-dialog[open]').getByRole('region', { name: 'Connected ideas', exact: true })
  await expect(back.getByRole('link', { name: new RegExp(LINKED.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) })).toHaveAttribute('href', `#/explore?lesson=${LINKED.id}`)
  await page.goBack()
  await expect(page.locator('dialog.reader-dialog[open]')).toHaveAccessibleName(LINKED.title)
})

test('connected ideas stay out of recall practice and out of lessons without a pair', async ({ page }) => {
  const alone = [...lessonById.values()].find((lesson) => lesson.guide && !linksById.has(lesson.id))!
  const dialog = await openLesson(page, alone.id)
  await expect(dialog.locator('.takeaway')).toBeVisible()
  await expect(dialog.locator('.connected-lessons')).toHaveCount(0)
  await page.goto(`/#/review?lesson=${LINKED.id}&mode=review`)
  const review = page.locator('dialog.reader-dialog[open]')
  await expect(review).toBeVisible()
  await expect(review.locator('.connected-lessons')).toHaveCount(0)
})

test('the profile lists every picture credit, and the credits file is published with the app', async ({ page }) => {
  await page.goto('/#/profile')
  await page.getByText('Privacy, sources and licenses', { exact: true }).click()
  const list = page.locator('details.photo-credit-list')
  await expect(list.locator('summary')).toHaveText(`All ${photoCount} picture credits`)
  await expect(list.locator('li')).toHaveCount(0)
  await list.locator('summary').click()
  await expect(list.locator('li')).toHaveCount(photoCount)
  const first = Object.entries(lessonPhotos)[0]
  const item = list.locator('li').first()
  await expect(item.locator('strong')).toHaveText(lessonById.get(first[0])!.title)
  await expect(item).toContainText(`${first[1][0].credit.work}, by ${first[1][0].credit.author}.`)
  await expect(item.getByRole('link', { name: 'Source on Wikimedia Commons (opens a new tab)', exact: true })).toHaveAttribute('href', first[1][0].credit.source)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true)
  const credits = await page.evaluate(async () => {
    const response = await fetch('/lesson-photos/CREDITS.md')
    return { ok: response.ok, text: await response.text() }
  })
  expect(credits.ok).toBe(true)
  expect(credits.text).toContain('# Lesson picture credits')
  for (const photo of Object.values(lessonPhotos).flat()) expect(credits.text).toContain(photo.credit.source)
})
