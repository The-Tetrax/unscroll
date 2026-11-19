// Authoring tool for lesson photographs. It is not part of the build, because it needs the network.
// It contacts Wikimedia hosts only and accepts public-domain, CC0, CC BY and CC BY-SA files only.
//
//   npm run photos -- find <wishlist.json> [--max 8]   search, then draw contact sheets of candidates
//   npm run photos -- show <batch> <lesson:n,n> ...     print metadata and draw large previews of chosen candidates
//   npm run photos -- add <picks.json>                  download, convert and record the chosen files
//   npm run photos -- edit <edits.json>                 rewrite the words of recorded pictures (offline)
//   npm run photos -- remove <lesson> [slot]            delete a recorded photograph
//   npm run photos -- review [id-prefix ...]            draw sheets of the recorded photographs (offline)
//   npm run photos -- sources [id-prefix ...]           print what each source page says, to check names and dates
//   npm run photos -- stats                             count the recorded photographs (offline)
import fs from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import sharp, { type OverlayOptions } from 'sharp'
import { lessons } from '../src/data/index.ts'
import { lessonPhotosSchema } from '../src/teaching/photo-schema.ts'
import type { LessonPhoto } from '../src/teaching/types.ts'

const AGENT = 'UNSCROLL-lesson-photos/1.0 (https://github.com/The-Tetrax/unscroll)'
const HOSTS = new Set(['commons.wikimedia.org', 'en.wikipedia.org', 'upload.wikimedia.org', 'thumb.wikimedia.org'])
const COMMONS = 'https://commons.wikimedia.org/w/api.php'
const WIKIPEDIA = 'https://en.wikipedia.org/w/api.php'
const WORK = '.hallmark/photos'
const DATA = 'src/teaching/photos.json'
const OUTPUT = 'public/lesson-photos'
const METADATA = 'License|LicenseShortName|LicenseUrl|Artist|Credit|ImageDescription|ObjectName|Restrictions|DateTimeOriginal'
const NOT_A_SUBJECT = /(?:logo|icon|ambox|question[ _]book|edit-clear|padlock|folder[ _]hexagonal|wiki(?:quote|source|books|data|versity|news|species|voyage|tionary)|commons-|oojs|nuvola|crystal[ _]clear|emblem|gnome-|disambig|flag[ _]of|pictogram|sound-icon|loudspeaker|text[ _]document|unbalanced[ _]scales|symbol[ _](?:support|oppose|neutral|category|list|portal|book))/i
const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]))

interface Found {
  file: string; width: number; height: number; mime: string; thumb: string; page: string
  license: string; licenseUrl?: string; author: string; work: string; description: string; date: string; restrictions: string; rejected?: string
  // Where the uploader says the file came from: their own work, or another website whose own terms must be read.
  source?: string
}
interface Candidate extends Found { n: number }
interface Pick {
  lesson: string; n?: number; file?: string; slot?: number; kind?: LessonPhoto['kind']; after?: number
  title: string; alt: string; caption: string; punchline?: string
  crop?: [number, number, number, number]; author?: string; work?: string; quality?: number; size?: number; fetch?: 1280 | 1920 | 3840
  // For a faint scan or plate: stretches the tones to the full range. The credit records the change.
  contrast?: boolean
}
interface ApiPage {
  title: string; missing?: boolean
  images?: { title: string }[]
  imageinfo?: { descriptionurl: string; width: number; height: number; mime: string; thumburl?: string; url: string; extmetadata?: Record<string, { value: unknown }> }[]
}
interface ApiResult {
  error?: { code: string; info: string }
  query?: { pages?: ApiPage[]; search?: { title: string }[]; normalized?: { from: string; to: string }[]; redirects?: { from: string; to: string }[] }
}

const pause = (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds))
const canonical = (title: string) => `File:${title.trim().replace(/^(?:File|Image):/i, '').replaceAll('_', ' ')}`
const reportFailure = (error: unknown) => { console.log(`   image not fetched: ${error instanceof Error ? error.message : String(error)}`); return null }

async function fetchChecked(address: string, accept: string): Promise<Response> {
  const target = new URL(address)
  if (target.protocol !== 'https:' || !HOSTS.has(target.hostname)) throw new Error(`Refusing to contact ${target.hostname}`)
  for (let attempt = 1; ; attempt += 1) {
    let wait = 1500 * attempt
    try {
      const response = await fetch(target, { headers: { 'User-Agent': AGENT, Accept: accept }, signal: AbortSignal.timeout(60_000) })
      if (!HOSTS.has(new URL(response.url).hostname)) throw Object.assign(new Error(`Redirected away from Wikimedia: ${response.url}`), { final: true })
      if (response.ok) return response
      if (response.status !== 429 && response.status < 500) throw Object.assign(new Error(`HTTP ${response.status} for ${target.href}`), { final: true })
      wait = Math.max(wait, (Number(response.headers.get('retry-after')) || 0) * 1000)
      throw new Error(`HTTP ${response.status} for ${target.href}`)
    } catch (error) {
      if ((error as { final?: boolean }).final || attempt >= 5) throw error
      await pause(wait)
    }
  }
}

async function api(base: string, parameters: Record<string, string | number>): Promise<ApiResult> {
  const url = new URL(base)
  for (const [key, value] of Object.entries({ format: 'json', formatversion: 2, ...parameters })) url.searchParams.set(key, String(value))
  // The search service sometimes answers that it is too busy. That passes, so the request is repeated a few times.
  for (let attempt = 1; ; attempt += 1) {
    await pause(120)
    const data = await (await fetchChecked(url.href, 'application/json')).json() as ApiResult
    if (!data.error) return data
    if (attempt >= 5 || !/busy|maxlag|ratelimited|timeout/i.test(data.error.code)) throw new Error(`Wikimedia API: ${data.error.code} ${data.error.info}`)
    await pause(4000 * attempt)
  }
}

async function download(address: string): Promise<Buffer> {
  const file = path.join(WORK, 'cache', crypto.createHash('sha1').update(address).digest('hex'))
  if (existsSync(file)) return fs.readFile(file)
  const bytes = Buffer.from(await (await fetchChecked(address, 'image/*')).arrayBuffer())
  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.writeFile(file, bytes)
  return bytes
}

async function pool<T, R>(items: T[], size: number, work: (item: T) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length)
  let next = 0
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, async () => {
    while (next < items.length) { const index = next; next += 1; results[index] = await work(items[index]) }
  }))
  return results
}

function plain(html: unknown): string {
  if (typeof html !== 'string') return ''
  const text = html.replace(/<(style|script)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code))).replace(/&amp;/g, '&')
    .replace(/[\u2013\u2014]/g, '-').replace(/\s+/g, ' ').trim()
  const twice = /^(.{3,}?)\s*\1$/.exec(text)
  return twice ? twice[1] : text
}

function license(code: string, address: string): { name: string; url?: string } | null {
  const id = code.trim().toLowerCase().replace(/-migrated$/, '')
  if (id === 'cc0' || id.startsWith('cc0-') || id === 'cc-zero') return { name: 'CC0 1.0', url: 'https://creativecommons.org/publicdomain/zero/1.0/' }
  if (id === 'pd' || id.startsWith('pd-') || id.startsWith('cc-pd') || id === 'pdm') return { name: 'Public domain' }
  const match = /^cc-by(-sa)?-([1-4]\.\d)(?:-([a-z]{2,4}))?$/.exec(id)
  if (!match) return null
  const [, share, version, region] = match
  const secure = address.replace(/^http:/, 'https:')
  return {
    name: `CC BY${share ? '-SA' : ''} ${version}${region ? ` ${region.toUpperCase()}` : ''}`,
    url: /^https:\/\/creativecommons\.org\/licenses\//.test(secure) ? secure : `https://creativecommons.org/licenses/by${share ? '-sa' : ''}/${version}/${region ? `${region}/` : ''}`,
  }
}

async function imageInfo(titles: string[], width: number): Promise<Map<string, Found>> {
  const found = new Map<string, Found>()
  const wanted = [...new Set(titles.map(canonical))]
  for (let offset = 0; offset < wanted.length; offset += 40) {
    const chunk = wanted.slice(offset, offset + 40)
    const data = await api(COMMONS, { action: 'query', titles: chunk.join('|'), prop: 'imageinfo', iiprop: 'url|size|mime|extmetadata', iiextmetadatafilter: METADATA, iiextmetadatalanguage: 'en', iiurlwidth: width, redirects: 1 })
    const renamed = new Map([...(data.query?.normalized ?? []), ...(data.query?.redirects ?? [])].map((entry) => [entry.to, entry.from]))
    for (const page of data.query?.pages ?? []) {
      const info = page.imageinfo?.[0]
      if (page.missing || !info) continue
      const meta = Object.fromEntries(Object.entries(info.extmetadata ?? {}).map(([key, entry]) => [key, typeof entry.value === 'string' ? entry.value : '']))
      const terms = license(meta.License ?? '', meta.LicenseUrl ?? '')
      const entry: Found = {
        file: page.title, width: info.width, height: info.height, mime: info.mime, thumb: info.thumburl ?? info.url, page: info.descriptionurl,
        license: terms?.name ?? `not accepted (${meta.License || meta.LicenseShortName || 'no license data'})`, ...(terms?.url ? { licenseUrl: terms.url } : {}),
        author: plain(meta.Artist) || plain(meta.Credit) || 'Unknown author',
        work: plain(meta.ObjectName) || page.title.replace(/^File:/, '').replace(/\.[a-z0-9]+$/i, '').replace(/[\u2013\u2014]/g, '-'),
        description: plain(meta.ImageDescription), date: plain(meta.DateTimeOriginal), restrictions: meta.Restrictions ?? '', source: plain(meta.Credit),
      }
      if (!terms) entry.rejected = `license ${meta.License || meta.LicenseShortName || 'unknown'}`
      else if (!/^image\/(?:jpeg|png|webp|tiff|svg\+xml)$/.test(info.mime)) entry.rejected = `type ${info.mime}`
      // A vector file has only a nominal size. Commons renders it at the width that is requested.
      else if (info.mime !== 'image/svg+xml' && (info.width < 200 || info.height < 200)) entry.rejected = 'too small'
      found.set(page.title, entry)
      // A redirect or an underscore form must find the same record.
      let alias = renamed.get(page.title)
      while (alias) { found.set(canonical(alias), entry); alias = renamed.get(alias) }
    }
  }
  return found
}

async function search(query: string, limit: number): Promise<string[]> {
  const data = await api(COMMONS, { action: 'query', list: 'search', srsearch: /filetype:/.test(query) ? query : `${query} filetype:bitmap`, srnamespace: 6, srlimit: limit, srinfo: '', srprop: '' })
  return (data.query?.search ?? []).map((hit) => canonical(hit.title))
}

async function articleFiles(article: string): Promise<string[]> {
  const data = await api(WIKIPEDIA, { action: 'query', titles: article, prop: 'images', imlimit: 'max', redirects: 1 })
  const page = data.query?.pages?.[0]
  if (!page || page.missing) { console.log(`   no Wikipedia article called "${article}"`); return [] }
  return (page.images ?? []).map((image) => canonical(image.title)).filter((title) => !NOT_A_SUBJECT.test(title))
}

const escapeXml = (value: string) => value.replace(/[&<>"']/g, (character) => `&#${character.charCodeAt(0)};`)
// Sheets are about 1500 pixels wide. Fewer columns give tiles large enough to read small details.
const tileWidth = (columns: number) => Math.floor(1500 / columns) - 4
const label = (width: number, height: number, text: string, size: number, fill: string) => Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" fill="${fill}"/><text x="6" y="${Math.round(height * 0.74)}" fill="#f7f4ed" font-family="Arial" font-size="${size}">${escapeXml(text)}</text></svg>`)

async function drawSheets(groups: { heading: string; tiles: { image: Buffer | null; tag: string }[] }[], directory: string, name: string, columns: number, tileWidth: number, tileHeight: number): Promise<string[]> {
  const gap = 4
  const headingHeight = 28
  const width = columns * (tileWidth + gap) + gap
  const pages: { composites: OverlayOptions[]; height: number }[] = [{ composites: [], height: gap }]
  for (const group of groups) {
    const needed = headingHeight + Math.max(1, Math.ceil(group.tiles.length / columns)) * (tileHeight + gap)
    let page = pages.at(-1)!
    if (page.height + needed > 1500 && page.composites.length) { page = { composites: [], height: gap }; pages.push(page) }
    page.composites.push({ input: label(width, headingHeight, group.heading.slice(0, Math.floor(width / 9.5)), 17, '#231f20'), left: 0, top: page.height })
    for (const [index, tile] of group.tiles.entries()) {
      const left = gap + (index % columns) * (tileWidth + gap)
      const top = page.height + headingHeight + Math.floor(index / columns) * (tileHeight + gap)
      const image = tile.image
        ? await sharp(tile.image).rotate().resize(tileWidth, tileHeight, { fit: 'contain', background: '#e7e1d8' }).flatten({ background: '#e7e1d8' }).png().toBuffer().catch(reportFailure)
        : null
      if (image) page.composites.push({ input: image, left, top })
      page.composites.push({ input: label(Math.min(tileWidth, 16 + tile.tag.length * 9), 22, image ? tile.tag : `${tile.tag} failed`, 15, '#bc2031'), left, top })
    }
    page.height += needed
  }
  await fs.mkdir(directory, { recursive: true })
  const files: string[] = []
  for (const [index, page] of pages.entries()) {
    if (!page.composites.length) continue
    const file = path.join(directory, `${name}-${index + 1}.jpg`)
    await sharp({ create: { width, height: page.height + gap, channels: 3, background: '#4a4445' } }).composite(page.composites).jpeg({ quality: 70 }).toFile(file)
    files.push(file)
  }
  return files
}

async function readData(): Promise<Record<string, LessonPhoto[]>> {
  return JSON.parse(await fs.readFile(DATA, 'utf8')) as Record<string, LessonPhoto[]>
}

async function writeData(data: Record<string, LessonPhoto[]>) {
  const sorted = Object.fromEntries(Object.entries(data).filter(([, photos]) => photos.length).sort(([left], [right]) => left.localeCompare(right)))
  const checked = lessonPhotosSchema.safeParse(sorted)
  if (!checked.success) throw new Error(`The photograph records are not valid: ${checked.error.message}`)
  for (const [id, photos] of Object.entries(sorted)) {
    const sections = lessonById.get(id)?.guide?.sections.length
    if (!sections) throw new Error(`${id} is not an original lesson`)
    for (const photo of photos) if (photo.after >= sections) throw new Error(`${id}: a photograph is placed after section ${photo.after + 1}, and the lesson has ${sections}`)
  }
  await fs.writeFile(DATA, `${JSON.stringify(sorted, null, 2)}\n`)
}

async function find(file: string, max: number, columns: number) {
  const batch = path.basename(file).replace(/\.json$/, '')
  const wish = JSON.parse(await fs.readFile(file, 'utf8')) as Record<string, { q?: string[]; wiki?: string[]; files?: string[] }>
  const directory = path.join(WORK, batch)
  const all: Record<string, Candidate[]> = {}
  const groups: { heading: string; tiles: { image: Buffer | null; tag: string }[] }[] = []
  for (const [id, wanted] of Object.entries(wish)) {
    const lesson = lessonById.get(id)
    if (!lesson) throw new Error(`Unknown lesson ${id}`)
    const lists: string[][] = []
    if (wanted.files?.length) lists.push(wanted.files.map(canonical))
    for (const article of wanted.wiki ?? []) lists.push(await articleFiles(article))
    for (const query of wanted.q ?? []) lists.push(await search(query, max + 8))
    const titles: string[] = []
    for (let index = 0; titles.length < 80 && lists.some((list) => index < list.length); index += 1) {
      for (const list of lists) if (index < list.length && !titles.includes(list[index])) titles.push(list[index])
    }
    const info = await imageInfo(titles, 330)
    const dropped = new Map<string, number>()
    const candidates: Candidate[] = []
    for (const title of titles) {
      const entry = info.get(title)
      const reason = !entry ? 'not on Commons' : entry.rejected
      if (reason) { dropped.set(reason, (dropped.get(reason) ?? 0) + 1); continue }
      if (candidates.length < max) candidates.push({ ...entry!, n: candidates.length + 1 })
    }
    all[id] = candidates
    const images = await pool(candidates, 4, (candidate) => download(candidate.thumb).catch(reportFailure))
    groups.push({
      heading: `${id}  ${lesson.title}`,
      tiles: candidates.map((candidate, index) => ({ image: images[index], tag: `${candidate.n} ${candidate.license.replace(/^CC /, '').replace('Public domain', 'PD')}` })),
    })
    console.log(`${id}: ${candidates.length} candidates${dropped.size ? `; dropped ${[...dropped].map(([reason, count]) => `${count} ${reason}`).join(', ')}` : ''}`)
  }
  await fs.mkdir(directory, { recursive: true })
  await fs.writeFile(path.join(directory, 'candidates.json'), JSON.stringify(all, null, 1))
  for (const sheet of await drawSheets(groups, directory, 'find', columns, tileWidth(columns), Math.round(tileWidth(columns) * 0.75))) console.log(sheet)
}

async function candidatesOf(batch: string): Promise<Record<string, Candidate[]>> {
  return JSON.parse(await fs.readFile(path.join(WORK, batch, 'candidates.json'), 'utf8')) as Record<string, Candidate[]>
}

async function show(batch: string, tokens: string[], columns: number) {
  const all = await candidatesOf(batch)
  const chosen = tokens.flatMap((token) => {
    const [id, numbers = ''] = token.split(':')
    return numbers.split(',').map((number) => {
      const candidate = all[id]?.find((entry) => entry.n === Number(number))
      if (!candidate) throw new Error(`No candidate ${token}`)
      return { id, candidate }
    })
  })
  const info = await imageInfo(chosen.map(({ candidate }) => candidate.file), 960)
  const images = await pool(chosen, 4, ({ candidate }) => download(info.get(candidate.file)?.thumb ?? candidate.thumb).catch(reportFailure))
  for (const { id, candidate } of chosen) {
    console.log(`${id}:${candidate.n}  ${candidate.file}`)
    console.log(`   ${candidate.width}x${candidate.height}  ${candidate.license}  by ${candidate.author.slice(0, 110)}${candidate.restrictions ? `  [${candidate.restrictions}]` : ''}`)
    console.log(`   ${candidate.description.slice(0, 300) || '(no description)'}`)
    console.log(`   source: ${info.get(candidate.file)?.source?.slice(0, 200) || '(none given)'}`)
  }
  const groups = []
  const perSheet = columns * (columns === 2 ? 2 : 3)
  for (let offset = 0; offset < chosen.length; offset += perSheet) {
    groups.push({ heading: `preview ${offset / perSheet + 1} of ${batch}`, tiles: chosen.slice(offset, offset + perSheet).map(({ id, candidate }, index) => ({ image: images[offset + index], tag: `${id}:${candidate.n}` })) })
  }
  for (const sheet of await drawSheets(groups, path.join(WORK, batch), 'show', columns, tileWidth(columns), Math.round(tileWidth(columns) * 0.75))) console.log(sheet)
}

async function add(file: string) {
  const input = JSON.parse(await fs.readFile(file, 'utf8')) as { batch?: string; picks: Pick[] }
  const all = input.batch ? await candidatesOf(input.batch) : {}
  const data = await readData()
  await fs.mkdir(OUTPUT, { recursive: true })
  const titles = input.picks.map((pick) => {
    const title = pick.file ? canonical(pick.file) : all[pick.lesson]?.find((entry) => entry.n === pick.n)?.file
    if (!title) throw new Error(`${pick.lesson}: name a file, or a candidate number from the batch`)
    return title
  })
  // A crop of a small detail needs a larger source than the default. Commons serves fixed thumbnail widths.
  const info = new Map<string, Found>()
  for (const width of new Set(input.picks.map((pick) => pick.fetch ?? 1280))) {
    const wanted = titles.filter((_, index) => (input.picks[index].fetch ?? 1280) === width)
    for (const [title, entry] of await imageInfo(wanted, width)) info.set(`${width} ${title}`, entry)
  }
  for (const [index, pick] of input.picks.entries()) {
    const lesson = lessonById.get(pick.lesson)
    const found = info.get(`${pick.fetch ?? 1280} ${titles[index]}`)
    if (!lesson?.guide) throw new Error(`Unknown lesson ${pick.lesson}`)
    if (!found || found.rejected) throw new Error(`${pick.lesson}: ${titles[index]} cannot be used (${found?.rejected ?? 'not on Commons'})`)
    const author = pick.author ?? found.author
    if (author.length > 90 && !pick.author) throw new Error(`${pick.lesson}: the author field is long, so name the author in the pick. It reads: ${author.slice(0, 200)}`)
    // An attribution license cannot be honored without a name to attribute.
    if (found.license.startsWith('CC BY') && /^unknown/i.test(author)) throw new Error(`${pick.lesson}: ${titles[index]} is under ${found.license} and names no author. Find the author on its Commons page or choose another file.`)
    const upright = await sharp(await download(found.thumb)).rotate().raw().toBuffer({ resolveWithObject: true })
    let image = sharp(upright.data, { raw: { width: upright.info.width, height: upright.info.height, channels: upright.info.channels } })
    if (pick.crop) {
      const [x, y, w, h] = pick.crop
      image = image.extract({ left: Math.round(x * upright.info.width), top: Math.round(y * upright.info.height), width: Math.round(w * upright.info.width), height: Math.round(h * upright.info.height) })
    }
    const edge = pick.size ?? 880
    if (pick.contrast) image = image.normalise()
    const output = await image.resize({ width: edge, height: edge, fit: 'inside', withoutEnlargement: true }).flatten({ background: '#ffffff' })
      .webp({ quality: pick.quality ?? 72, effort: 6 }).toBuffer({ resolveWithObject: true })
    const list = data[pick.lesson] ?? []
    const same = list.findIndex((photo) => photo.credit.source === found.page)
    const slot = pick.slot ? pick.slot - 1 : same >= 0 ? same : list.length
    if (slot > list.length || slot > 2) throw new Error(`${pick.lesson}: slot ${slot + 1} does not follow the photographs already recorded`)
    const name = `${pick.lesson}-${slot + 1}.webp`
    await fs.writeFile(path.join(OUTPUT, name), output.data)
    const kind = pick.kind ?? 'photo'
    const vector = found.mime === 'image/svg+xml'
    const changes = [vector && 'rendered from SVG', pick.crop && 'cropped', !vector && found.width > output.info.width && 'resized', pick.contrast && 'contrast raised', 'converted to WebP'].filter(Boolean).join(', ').replace(/, ([^,]+)$/, ' and $1')
    list[slot] = {
      src: `/lesson-photos/${name}`, width: output.info.width, height: output.info.height, bytes: output.data.length,
      sha256: crypto.createHash('sha256').update(output.data).digest('hex'), kind,
      after: pick.after ?? (kind === 'meme' ? lesson.guide.sections.length - 1 : Math.min(2, lesson.guide.sections.length - 1)),
      title: pick.title, alt: pick.alt, caption: pick.caption, ...(pick.punchline ? { punchline: pick.punchline } : {}),
      credit: { work: pick.work ?? found.work, author, license: found.license, ...(found.licenseUrl ? { licenseUrl: found.licenseUrl } : {}), source: found.page, changes: `${changes.charAt(0).toUpperCase()}${changes.slice(1)}.` },
    }
    data[pick.lesson] = list
    console.log(`${name}  ${output.info.width}x${output.info.height}  ${(output.data.length / 1024).toFixed(0)} KB  ${found.license}  ${author}`)
  }
  await writeData(data)
}

interface Edit { lesson: string; slot?: number; title?: string; alt?: string; caption?: string; punchline?: string | null; after?: number; kind?: LessonPhoto['kind']; author?: string; work?: string }

// Rewrites the words of recorded pictures after they have been viewed. Offline: the files do not change.
async function edit(file: string) {
  const input = JSON.parse(await fs.readFile(file, 'utf8')) as { edits: Edit[] }
  const data = await readData()
  for (const change of input.edits) {
    const slot = change.slot ?? 1
    const photo = data[change.lesson]?.[slot - 1]
    if (!photo) throw new Error(`${change.lesson}: no picture in slot ${slot}`)
    const { title, alt, caption, after, kind } = change
    Object.assign(photo, Object.fromEntries(Object.entries({ title, alt, caption, after, kind }).filter(([, value]) => value !== undefined)))
    if (change.punchline === null) delete photo.punchline
    else if (change.punchline) photo.punchline = change.punchline
    if (change.author) photo.credit.author = change.author
    if (change.work) photo.credit.work = change.work
    console.log(`${change.lesson} / ${slot} updated`)
  }
  await writeData(data)
}

async function remove(id: string, slot?: number) {
  const data = await readData()
  const list = data[id] ?? []
  const kept = slot ? list.filter((_, index) => index !== slot - 1) : []
  // Files are numbered by position, so the ones that stay are read before anything is deleted.
  const bytes = await Promise.all(kept.map((photo) => fs.readFile(path.join('public', photo.src))))
  for (const photo of list) await fs.rm(path.join('public', photo.src), { force: true })
  data[id] = kept.map((photo, index) => ({ ...photo, src: `/lesson-photos/${id}-${index + 1}.webp` }))
  for (const [index, photo] of data[id].entries()) await fs.writeFile(path.join('public', photo.src), bytes[index])
  await writeData(data)
  console.log(`${id}: ${list.length - kept.length} removed, ${kept.length} kept`)
}

async function review(prefixes: string[], columns: number) {
  const data = await readData()
  const entries = Object.entries(data).filter(([id]) => !prefixes.length || prefixes.some((prefix) => id.startsWith(prefix)))
    .flatMap(([id, photos]) => photos.map((photo, index) => ({ id, index, photo })))
  const groups = []
  const perSheet = columns * (columns === 2 ? 2 : 3)
  for (let offset = 0; offset < entries.length; offset += perSheet) {
    const part = entries.slice(offset, offset + perSheet)
    groups.push({
      heading: `${part[0].id} to ${part.at(-1)!.id}`,
      tiles: await Promise.all(part.map(async ({ id, index, photo }) => ({ image: await fs.readFile(path.join('public', photo.src)).catch(() => null), tag: `${id} / ${index + 1} ${photo.kind}` }))),
    })
  }
  for (const sheet of await drawSheets(groups, path.join(WORK, 'review'), prefixes.join('-').slice(0, 60) || 'all', columns, tileWidth(columns), Math.round(tileWidth(columns) * 0.75))) console.log(sheet)
  // The words are printed beside the sheets so each claim can be checked against its picture.
  if (prefixes.length) for (const { id, index, photo } of entries) console.log(`\n${id} / ${index + 1}  ${photo.title}\n   SHOWS: ${photo.alt}\n   SAYS: ${photo.punchline ? `[${photo.punchline}] ` : ''}${photo.caption}`)
}

// Looking at a picture cannot confirm a name, a place or a date. This prints what the source page says about each
// recorded picture, where the uploader says it came from, and the license it carries today, so those claims can be
// checked against it. A source that is another website has terms of its own, which this tool does not read.
async function sources(prefixes: string[], length: number) {
  const data = await readData()
  const entries = Object.entries(data).filter(([id]) => !prefixes.length || prefixes.some((prefix) => id.startsWith(prefix)))
    .flatMap(([id, photos]) => photos.map((photo, index) => ({ id, index, photo, file: canonical(decodeURIComponent(new URL(photo.credit.source).pathname.replace(/^\/wiki\//, ''))) })))
  const info = await imageInfo(entries.map((entry) => entry.file), 330)
  let changed = 0
  for (const { id, index, photo, file } of entries) {
    const found = info.get(file)
    const same = found?.license === photo.credit.license
    if (!same) changed += 1
    console.log(`\n${id} / ${index + 1}  ${file}`)
    console.log(`   LICENSE: ${found ? `${found.license}${same ? '' : `  (RECORDED AS ${photo.credit.license})`}` : 'NOT FOUND ON COMMONS'}  BY: ${(found?.author ?? '').slice(0, 100)}${found?.date ? `  DATED: ${found.date.slice(0, 50)}` : ''}`)
    console.log(`   PAGE SAYS: ${found?.description.slice(0, length) || '(no description)'}`)
    console.log(`   SOURCE: ${found?.source?.slice(0, 240) || '(none given)'}`)
  }
  console.log(`\n${entries.length} pictures checked, ${changed} with a missing page or a license that differs from the record.`)
}

async function stats() {
  const data = await readData()
  const groups = new Map<string, { lessons: number; covered: number; photos: number; bytes: number }>()
  for (const lesson of lessons) {
    const key = lesson.id.split('-')[0]
    const group = groups.get(key) ?? { lessons: 0, covered: 0, photos: 0, bytes: 0 }
    const photos = data[lesson.id] ?? []
    group.lessons += 1
    group.covered += photos.length ? 1 : 0
    group.photos += photos.length
    group.bytes += photos.reduce((sum, photo) => sum + photo.bytes, 0)
    groups.set(key, group)
  }
  const total = { lessons: 0, covered: 0, photos: 0, bytes: 0 }
  for (const [key, group] of groups) {
    console.log(`${key.padEnd(12)} ${String(group.covered).padStart(3)} of ${String(group.lessons).padStart(3)} lessons  ${String(group.photos).padStart(3)} files  ${(group.bytes / 1048576).toFixed(2)} MiB`)
    for (const field of ['lessons', 'covered', 'photos', 'bytes'] as const) total[field] += group[field]
  }
  console.log(`${'total'.padEnd(12)} ${String(total.covered).padStart(3)} of ${String(total.lessons).padStart(3)} lessons  ${String(total.photos).padStart(3)} files  ${(total.bytes / 1048576).toFixed(2)} MiB`)
}

const [command, ...rest] = process.argv.slice(2)
const flag = (name: string, fallback: number) => { const index = rest.indexOf(name); return index >= 0 ? Number(rest[index + 1]) : fallback }
// Flags and their values are not lesson IDs or file names.
const words = rest.filter((value, index) => !value.startsWith('--') && !rest[index - 1]?.startsWith('--'))
if (command === 'find') await find(words[0], flag('--max', flag('--cols', 8)), flag('--cols', 8))
else if (command === 'show') await show(words[0], words.slice(1), flag('--cols', 3))
else if (command === 'add') await add(words[0])
else if (command === 'edit') await edit(words[0])
else if (command === 'remove') await remove(words[0], words[1] ? Number(words[1]) : undefined)
else if (command === 'review') await review(words, flag('--cols', 3))
else if (command === 'sources') await sources(words, flag('--length', 420))
else if (command === 'stats') await stats()
else { console.log('Commands: find <wishlist.json> [--max 8] [--cols 8] | show <batch> <lesson:n,n> ... [--cols 3] | add <picks.json> | edit <edits.json> | remove <lesson> [slot] | review [id-prefix ...] [--cols 3] | sources [id-prefix ...] [--length 420] | stats'); process.exitCode = 1 }
