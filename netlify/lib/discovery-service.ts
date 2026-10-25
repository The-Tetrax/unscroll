import { getStore, type Store } from '@netlify/blobs'
import { z } from 'zod'
import { dateSchema, editionSchema, lessonSchema } from '../../src/lib/schema.ts'
import type { CategoryId, DiscoveryEdition, Lesson } from '../../src/types.ts'

export const MAX_DAILY_EXTRACTS = 6
export const UPSTREAM_TIMEOUT_MS = 8_000
export const DISCOVERY_TIMEOUT_MS = 22_000
export const MAX_WIKIPEDIA_BYTES = 256 * 1024
export const DISCOVERY_STORE_NAME = 'unscroll-discovery-v1'
export const DISCOVERY_STATE_KEY = 'control-v1'

const MAX_STORE_BYTES = 8 * 1024 * 1024
const MAX_SEEN_PAGES = 100_000
const WIKIPEDIA_ORIGIN = 'https://en.wikipedia.org'
const WIKIPEDIA_API = `${WIKIPEDIA_ORIGIN}/w/api.php`
const LICENSE_URL = 'https://creativecommons.org/licenses/by-sa/4.0/'
const USER_AGENT = 'UNSCROLL/1.0 (daily reference extracts; https://github.com/The-Tetrax/unscroll)'
const ERROR_TTL_SECONDS = 30
const EDITION_TTL_SECONDS = 3_600

const topics: readonly { topic: string; category: CategoryId; categories: readonly string[] }[] = [
  { topic: 'Psychology', category: 'mind', categories: ['Cognitive psychology', 'Psychological concepts', 'Social psychology'] },
  { topic: 'Reasoning', category: 'thinking', categories: ['Reasoning', 'Cognitive biases', 'Logical fallacies'] },
  { topic: 'Economics', category: 'money', categories: ['Microeconomics', 'Behavioral economics', 'Economics'] },
  { topic: 'Communication', category: 'people', categories: ['Interpersonal communication', 'Communication', 'Communication theory'] },
  { topic: 'Philosophy', category: 'life', categories: ['Epistemology', 'Ethics', 'Philosophical concepts'] },
  { topic: 'Computer networking', category: 'tech', categories: ['Computer networking', 'Network protocols', 'Internet protocols'] },
  { topic: 'Decision-making', category: 'work', categories: ['Decision theory', 'Decision-making', 'Problem solving'] },
  { topic: 'Learning', category: 'mind', categories: ['Learning', 'Educational psychology', 'Learning methods'] },
  { topic: 'Filmmaking', category: 'cinema', categories: ['Cinematography', 'Film techniques', 'Film editing'] },
  { topic: 'Visual design', category: 'design', categories: ['Graphic design', 'Typography', 'Color theory'] },
]

// Interleave topics, then rotate six categories at a time. This is a finite live
// pool, not a promise of infinite lessons. Exhausted cursors are never reset.
export const CATEGORY_POOL = [0, 1, 2].flatMap((index) => topics.map((topic) => ({
  title: `Category:${topic.categories[index]}`,
  topic: topic.topic,
  category: topic.category,
})))
const allowedCategories = new Set(CATEGORY_POOL.map((entry) => entry.title))

const queryConstants = {
  action: 'query', format: 'json', formatversion: '2', utf8: '1', maxlag: '5',
  generator: 'categorymembers', gcmnamespace: '0', gcmtype: 'page', gcmlimit: '8',
  prop: 'extracts|pageprops|info', ppprop: 'disambiguation',
  exintro: '1', explaintext: '1', exchars: '3000', exlimit: 'max',
} as const

const continuationSchema = z.object({
  continue: z.string().min(1).max(200).regex(/^[a-zA-Z0-9_|-]+$/),
  // eslint-disable-next-line no-control-regex -- Reject control bytes in untrusted continuation tokens.
  gcmcontinue: z.string().min(1).max(1_024).regex(/^[^\u0000-\u001f\u007f]+$/).optional(),
  excontinue: z.number().int().nonnegative().max(Number.MAX_SAFE_INTEGER).optional(),
}).strict().refine((value) => value.gcmcontinue !== undefined || value.excontinue !== undefined)
type Continuation = z.infer<typeof continuationSchema>

const pageSchema = z.object({
  pageid: z.number().int().positive().max(Number.MAX_SAFE_INTEGER).optional(),
  ns: z.number().int(),
  title: z.string().min(1).max(512),
  extract: z.string().max(8_000).optional(),
  missing: z.boolean().optional(),
  invalid: z.boolean().optional(),
  redirect: z.boolean().optional(),
  pageprops: z.object({ disambiguation: z.string().max(1_024).optional() }).optional(),
})
const wikipediaSchema = z.object({
  batchcomplete: z.boolean().optional(),
  continue: continuationSchema.optional(),
  query: z.object({ pages: z.array(pageSchema).max(20) }).optional(),
  error: z.object({ code: z.string(), info: z.string().optional() }).optional(),
}).refine((value) => !value.error && (value.query !== undefined || value.batchcomplete === true), 'Invalid Wikipedia response')

const pageIdSchema = z.string().regex(/^[1-9]\d{0,15}$/).refine((id) => Number.isSafeInteger(Number(id)))

function articleUrls(title: string) {
  const encoded = encodeURIComponent(title.replace(/ /g, '_'))
  return {
    article: `${WIKIPEDIA_ORIGIN}/wiki/${encoded}`,
    history: `${WIKIPEDIA_ORIGIN}/w/index.php?title=${encoded}&action=history`,
  }
}

const storedEditionSchema = editionSchema.superRefine((edition, context) => {
  if (edition.status !== 'fresh' || edition.lessons.length < 1 || edition.lessons.length > MAX_DAILY_EXTRACTS) {
    context.addIssue({ code: 'custom', message: 'Invalid stored edition' })
  }
  const ids = new Set<string>()
  for (const lesson of edition.lessons) {
    const urls = articleUrls(lesson.title)
    if (ids.has(lesson.id) || !pageIdSchema.safeParse(lesson.id.replace(/^wiki-/, '')).success
      || lesson.id !== `wiki-${lesson.id.replace(/^wiki-/, '')}`
      || lesson.publishedAt !== edition.date || lesson.evidence !== 'reference' || lesson.quiz
      || lesson.attribution?.author !== 'Wikipedia contributors'
      || lesson.attribution.license !== 'CC BY-SA 4.0' || lesson.attribution.licenseUrl !== LICENSE_URL
      || lesson.attribution.historyUrl !== urls.history
      || lesson.sources.length !== 1 || lesson.sources[0]?.url !== urls.article) {
      context.addIssue({ code: 'custom', message: 'Invalid discovery attribution or identity' })
    }
    ids.add(lesson.id)
  }
})

const cursorSchema = z.object({
  continuation: continuationSchema.nullable(),
  exhausted: z.boolean(),
}).strict().refine((cursor) => !cursor.exhausted || cursor.continuation === null)

const stateSchema = z.object({
  version: z.literal(1),
  // A per-page ledger in one CAS document avoids the non-atomic gap between
  // claiming six separate page keys and publishing their edition.
  seen: z.record(pageIdSchema, dateSchema).refine((seen) => Object.keys(seen).length <= MAX_SEEN_PAGES),
  cursors: z.record(z.string().refine((key) => allowedCategories.has(key)), cursorSchema),
  nextPoolIndex: z.number().int().min(0).max(CATEGORY_POOL.length - 1),
  latest: storedEditionSchema.nullable(),
}).strict().superRefine((state, context) => {
  if (Object.values(state.seen).some((date) => !state.latest || date > state.latest.date)
    || state.latest?.lessons.some((lesson) => state.seen[lesson.id.slice(5)] !== state.latest?.date)) {
    context.addIssue({ code: 'custom', message: 'Edition and seen ledger disagree' })
  }
})
type DiscoveryState = z.infer<typeof stateSchema>

export interface VersionedDiscoveryValue { value: unknown; etag: string }

export interface DiscoveryStore {
  readonly kind: 'memory' | 'blobs'
  read(key: string, signal: AbortSignal): Promise<VersionedDiscoveryValue | null>
  /** null means onlyIfNew, never an unconditional overwrite. */
  write(key: string, value: unknown, expectedEtag: string | null, signal: AbortSignal): Promise<boolean>
}

export interface DiscoveryOptions {
  fetch?: typeof globalThis.fetch
  store?: DiscoveryStore
  now?: () => Date
  signal?: AbortSignal
  /** Unpublished deploys may read, but must not consume the production ledger. */
  readOnly?: boolean
}

export function utcEditionDate(now: Date): string {
  return dateSchema.parse(now.toISOString().slice(0, 10))
}

function aborted(): DOMException {
  return new DOMException('Discovery deadline exceeded', 'AbortError')
}

// Racing is intentional: a broken fetch implementation or SDK retry loop may
// ignore abort. Check the signal before every write as well as bounding the wait.
function abortable<T>(operation: () => Promise<T>, signal: AbortSignal): Promise<T> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) { reject(aborted()); return }
    const onAbort = () => reject(aborted())
    signal.addEventListener('abort', onAbort, { once: true })
    Promise.resolve().then(() => {
      signal.throwIfAborted()
      return operation()
    }).then(resolve, reject).finally(() => signal.removeEventListener('abort', onAbort))
  })
}

async function withTimeout<T>(milliseconds: number, parent: AbortSignal | undefined, operation: (signal: AbortSignal) => Promise<T>): Promise<T> {
  const controller = new AbortController()
  const onAbort = () => controller.abort()
  parent?.addEventListener('abort', onAbort, { once: true })
  if (parent?.aborted) controller.abort()
  const timer = setTimeout(onAbort, milliseconds)
  try {
    return await abortable(() => operation(controller.signal), controller.signal)
  } finally {
    clearTimeout(timer)
    parent?.removeEventListener('abort', onAbort)
    controller.abort()
  }
}

async function boundedText(response: Response, maxBytes: number, signal: AbortSignal): Promise<string> {
  const advertisedLength = response.headers.get('content-length')
  if (advertisedLength !== null && Number(advertisedLength) > maxBytes) {
    void response.body?.cancel().catch(() => undefined)
    throw new Error('Response is too large')
  }
  if (!response.body) return ''
  const reader = response.body.getReader()
  const decoder = new TextDecoder('utf-8', { fatal: true })
  const chunks: string[] = []
  let bytes = 0
  try {
    while (true) {
      const chunk = await abortable(() => reader.read(), signal)
      if (chunk.done) break
      bytes += chunk.value.byteLength
      if (bytes > maxBytes) throw new Error('Response is too large')
      chunks.push(decoder.decode(chunk.value, { stream: true }))
    }
    chunks.push(decoder.decode())
    return chunks.join('')
  } catch (error) {
    void reader.cancel().catch(() => undefined)
    throw error
  } finally {
    reader.releaseLock()
  }
}

/** An exact API/parameter allowlist, not a generic Wikipedia URL proxy. */
export function isAllowedWikipediaUrl(input: string | URL): boolean {
  try {
    const url = new URL(input)
    if (url.origin !== WIKIPEDIA_ORIGIN || url.pathname !== '/w/api.php'
      || url.username || url.password || url.hash || url.port) return false
    const allowedKeys = new Set([...Object.keys(queryConstants), 'gcmtitle', 'continue', 'gcmcontinue', 'excontinue'])
    for (const key of url.searchParams.keys()) {
      if (!allowedKeys.has(key) || url.searchParams.getAll(key).length !== 1) return false
    }
    for (const [key, value] of Object.entries(queryConstants)) {
      if (url.searchParams.get(key) !== value) return false
    }
    if (!allowedCategories.has(url.searchParams.get('gcmtitle') ?? '')) return false
    if (['continue', 'gcmcontinue', 'excontinue'].some((key) => url.searchParams.has(key))) {
      const excontinue = url.searchParams.get('excontinue')
      if (excontinue !== null && !/^\d+$/.test(excontinue)) return false
      return continuationSchema.safeParse({
        continue: url.searchParams.get('continue') ?? undefined,
        gcmcontinue: url.searchParams.get('gcmcontinue') ?? undefined,
        excontinue: excontinue === null ? undefined : Number(excontinue),
      }).success
    }
    return true
  } catch { return false }
}

function categoryUrl(title: string, continuation: Continuation | null): URL {
  const url = new URL(WIKIPEDIA_API)
  for (const [key, value] of Object.entries(queryConstants)) url.searchParams.set(key, value)
  url.searchParams.set('gcmtitle', title)
  if (continuation) {
    for (const [key, value] of Object.entries(continuationSchema.parse(continuation))) {
      if (value !== undefined) url.searchParams.set(key, String(value))
    }
  }
  if (!isAllowedWikipediaUrl(url)) throw new Error('Disallowed Wikipedia request')
  return url
}

async function categoryBatch(pool: (typeof CATEGORY_POOL)[number], continuation: Continuation | null,
  fetcher: typeof globalThis.fetch, signal: AbortSignal) {
  const url = categoryUrl(pool.title, continuation)
  return withTimeout(UPSTREAM_TIMEOUT_MS, signal, async (requestSignal) => {
    const response = await abortable(() => fetcher(url, {
      method: 'GET', redirect: 'error', credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'no-store',
      headers: { Accept: 'application/json', 'User-Agent': USER_AGENT }, signal: requestSignal,
    }), requestSignal)
    if (response.status !== 200 || response.redirected
      || (response.url && !isAllowedWikipediaUrl(response.url))
      || response.headers.get('content-type')?.split(';')[0]?.trim().toLowerCase() !== 'application/json') {
      void response.body?.cancel().catch(() => undefined)
      throw new Error('Wikipedia did not return a JSON success response')
    }
    const parsed = wikipediaSchema.parse(JSON.parse(await boundedText(response, MAX_WIKIPEDIA_BYTES, requestSignal)))
    if (parsed.continue && JSON.stringify(parsed.continue) === JSON.stringify(continuation)) {
      throw new Error('Wikipedia returned a non-advancing cursor')
    }
    return parsed
  })
}

function toLesson(page: z.infer<typeof pageSchema>, pool: (typeof CATEGORY_POOL)[number], date: string): Lesson | null {
  if (!page.pageid || page.ns !== 0 || page.missing || page.invalid || page.redirect
    || page.pageprops?.disambiguation !== undefined || /\(disambiguation\)/i.test(page.title)
    || page.title.length > 180 || /^\.{1,2}$/.test(page.title) || !page.extract) return null
  // No generated summary or factual quiz. These are external extracts, with
  // only whitespace/dash normalization disclosed in the surrounding copy.
  const extract = page.extract.replace(/\r\n?/g, '\n').replace(/[\u2013\u2014]/g, '-')
    .replace(/[ \t]+/g, ' ').trim()
  if (extract.length < 240 || extract.length > 6_000 || extract.split(/\s+/).length < 40
    // eslint-disable-next-line no-control-regex -- Exclude non-text bytes from external extracts.
    || /<\/?[a-z][^>]*>|[\u0000-\u0008\u000b\u000c\u000e-\u001f]/i.test(extract)) return null
  const urls = articleUrls(page.title)
  return lessonSchema.parse({
    id: `wiki-${page.pageid}`, category: pool.category, topic: pool.topic, title: page.title,
    hook: 'An encyclopedia introduction to explore, not an authored practical lesson.',
    body: [extract],
    takeaway: 'External Wikipedia introduction. Whitespace and dash punctuation are normalized. Read the full article and its references for context.',
    action: 'Exploration and reflection exercise: open the source, choose one unfamiliar term, and write a question to investigate next. This is not a tested practical application.',
    sources: [{ title: page.title, url: urls.article, publisher: 'Wikipedia' }],
    evidence: 'reference', kind: 'discovery', publishedAt: date,
    attribution: { author: 'Wikipedia contributors', license: 'CC BY-SA 4.0', licenseUrl: LICENSE_URL, historyUrl: urls.history },
  })
}

export function createMemoryDiscoveryStore(): DiscoveryStore {
  const entries = new Map<string, VersionedDiscoveryValue>()
  let revision = 0
  return {
    kind: 'memory',
    async read(key, signal) {
      signal.throwIfAborted()
      const entry = entries.get(key)
      return entry ? structuredClone(entry) : null
    },
    async write(key, value, expectedEtag, signal) {
      signal.throwIfAborted()
      if ((entries.get(key)?.etag ?? null) !== expectedEtag) return false
      // No await between the comparison and write: atomic within this process.
      entries.set(key, { value: structuredClone(value), etag: `memory-${++revision}` })
      return true
    },
  }
}

type BlobClient = Pick<Store, 'getWithMetadata' | 'setJSON'>

export function createBlobDiscoveryStore(client: BlobClient): DiscoveryStore {
  return {
    kind: 'blobs',
    async read(key, signal) {
      return abortable(async () => {
        const entry = await client.getWithMetadata(key, { type: 'text', consistency: 'strong' })
        if (!entry) return null
        if (!entry.etag || new TextEncoder().encode(entry.data).byteLength > MAX_STORE_BYTES) {
          throw new Error('Invalid discovery store entry')
        }
        return { value: JSON.parse(entry.data) as unknown, etag: entry.etag }
      }, signal)
    },
    async write(key, value, expectedEtag, signal) {
      return abortable(async () => {
        if (new TextEncoder().encode(JSON.stringify(value)).byteLength > MAX_STORE_BYTES) {
          throw new Error('Discovery store limit reached; existing data was preserved')
        }
        const result = await client.setJSON(key, value,
          expectedEtag === null ? { onlyIfNew: true } : { onlyIfMatch: expectedEtag })
        if (result.modified && !result.etag) throw new Error('Unconfirmed conditional write')
        return result.modified
      }, signal)
    },
  }
}

const localStore = createMemoryDiscoveryStore()

function defaultStore(signal: AbortSignal): DiscoveryStore {
  try {
    // Only Netlify's trusted, injected storage context chooses SDK destinations.
    // No request URL, query, headers, body, profile or progress is passed to it.
    const boundedBlobFetch: typeof globalThis.fetch = (input, init) => withTimeout(UPSTREAM_TIMEOUT_MS, signal, async (requestSignal) => {
      const response = await abortable(() => globalThis.fetch(input, { ...init, redirect: 'error', signal: requestSignal }), requestSignal)
      const method = (init?.method ?? 'GET').toUpperCase()
      // The SDK's conditional-write path treats non-412 responses as modified.
      // Reject other errors here so an HTTP failure cannot masquerade as a commit.
      if (!response.ok && !(method === 'GET' && response.status === 404) && !(method === 'PUT' && response.status === 412)) {
        void response.body?.cancel().catch(() => undefined)
        throw new Error('Discovery storage request failed')
      }
      const text = await boundedText(response, MAX_STORE_BYTES, requestSignal)
      const headers = new Headers(response.headers)
      headers.delete('content-encoding')
      headers.delete('content-length')
      return new Response(response.status === 204 || response.status === 304 ? null : text, { status: response.status, headers })
    })
    // getStore is site-wide, unlike getDeployStore: editions survive deploys.
    return createBlobDiscoveryStore(getStore({ name: DISCOVERY_STORE_NAME, consistency: 'strong', fetch: boundedBlobFetch }))
  } catch (error) {
    const hosted = process.env.NETLIFY_LOCAL !== 'true'
      && (process.env.NETLIFY === 'true' || Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME))
    if (!hosted && error instanceof Error && error.name === 'MissingBlobsEnvironmentError') return localStore
    // Never start a new memory ledger on a deployed storage outage.
    throw error
  }
}

function emptyState(): DiscoveryState {
  return { version: 1, seen: {}, cursors: {}, nextPoolIndex: 0, latest: null }
}

async function archiveEdition(store: DiscoveryStore, edition: DiscoveryEdition, signal: AbortSignal): Promise<void> {
  const value = storedEditionSchema.parse(edition)
  const key = `editions/${value.date}`
  if (await abortable(() => store.write(key, value, null, signal), signal)) return
  const existing = await abortable(() => store.read(key, signal), signal)
  if (!existing || JSON.stringify(storedEditionSchema.parse(existing.value)) !== JSON.stringify(value)) {
    throw new Error('Conflicting immutable edition; existing data was preserved')
  }
}

async function scanCategories(state: DiscoveryState, date: string, fetcher: typeof globalThis.fetch, signal: AbortSignal) {
  const cursors = { ...state.cursors }
  const seen = new Set(Object.keys(state.seen))
  const lessons: Lesson[] = []
  const attempted = new Set<string>()
  let nextPoolIndex = state.nextPoolIndex
  let successfulBatches = 0

  // At most twelve fixed-category GETs in two waves of six. Two full upstream
  // timeouts take sixteen seconds, leaving room for storage in the 22s budget.
  for (let round = 0; round < 2 && lessons.length < MAX_DAILY_EXTRACTS; round++) {
    signal.throwIfAborted()
    const pools: typeof CATEGORY_POOL = []
    for (let checked = 0; checked < CATEGORY_POOL.length && pools.length < 6; checked++) {
      const pool = CATEGORY_POOL[nextPoolIndex]!
      nextPoolIndex = (nextPoolIndex + 1) % CATEGORY_POOL.length
      if (attempted.has(pool.title) || cursors[pool.title]?.exhausted) continue
      attempted.add(pool.title)
      pools.push(pool)
    }
    if (pools.length === 0) break
    const results = await Promise.allSettled(pools.map(async (pool) => {
      const response = await categoryBatch(pool, cursors[pool.title]?.continuation ?? null, fetcher, signal)
      const candidates = (response.query?.pages ?? []).map((page) => toLesson(page, pool, date))
        .filter((lesson): lesson is Lesson => lesson !== null).sort((a, b) => Number(a.id.slice(5)) - Number(b.id.slice(5)))
      return { pool, candidates, continuation: response.continue ?? null }
    }))
    signal.throwIfAborted()
    const batches = results.flatMap((result) => result.status === 'fulfilled' ? [result.value] : [])
    successfulBatches += batches.length
    // Round-robin candidates so one large category does not crowd out topics.
    for (let index = 0; index < 20 && lessons.length < MAX_DAILY_EXTRACTS; index++) {
      for (const batch of batches) {
        const candidate = batch.candidates[index]
        if (!candidate || seen.has(candidate.id.slice(5))) continue
        seen.add(candidate.id.slice(5))
        lessons.push(candidate)
        if (lessons.length === MAX_DAILY_EXTRACTS) break
      }
    }
    for (const batch of batches) {
      // Do not advance past unselected eligible candidates. Refetch that batch
      // next time; the ledger filters already published pages. No queue is lost.
      if (batch.candidates.every((candidate) => seen.has(candidate.id.slice(5)))) {
        cursors[batch.pool.title] = { continuation: batch.continuation, exhausted: batch.continuation === null }
      }
    }
  }
  return { lessons, cursors, nextPoolIndex, successfulBatches }
}

function fallbackEdition(date: string, latest: DiscoveryEdition | undefined, message: string): DiscoveryEdition {
  return latest
    ? { ...latest, status: 'cached', message: `${message} Showing the stored ${latest.date} edition, not new lessons.` }
    : { date, lessons: [], status: 'unavailable', message }
}

export async function getDiscoveryEdition(options: DiscoveryOptions = {}): Promise<DiscoveryEdition> {
  const date = utcEditionDate((options.now ?? (() => new Date()))())
  let latest: DiscoveryEdition | undefined
  let storageKind: DiscoveryStore['kind'] | undefined
  const remember = (edition: DiscoveryEdition | null) => {
    if (edition && edition.date <= date && (!latest || latest.date <= edition.date)) latest = edition
  }
  let result: DiscoveryEdition
  try {
    result = await withTimeout(DISCOVERY_TIMEOUT_MS, options.signal, async (signal) => {
      const store = options.store ?? defaultStore(signal)
      storageKind = store.kind
      for (let attempt = 0; attempt < 3; attempt++) {
        const snapshot = await abortable(() => store.read(DISCOVERY_STATE_KEY, signal), signal)
        // Corrupt/unknown state fails closed. Never erase a ledger to recover.
        const state = snapshot ? stateSchema.parse(snapshot.value) : emptyState()
        remember(state.latest)
        if (state.latest?.date === date) return { ...state.latest, status: 'cached' as const }

        if (!snapshot || (state.latest && state.latest.date > date)) {
          const existing = await abortable(() => store.read(`editions/${date}`, signal), signal)
          if (existing) {
            const edition = storedEditionSchema.parse(existing.value)
            if (edition.date !== date) throw new Error('Archive date mismatch')
            remember(edition)
            return { ...edition, status: 'cached' as const }
          }
          // A slow invocation crossing midnight must not move the clock or the
          // ledger backwards after a newer day's CAS has already won.
          if (state.latest && state.latest.date > date) {
            return fallbackEdition(date, latest, 'A newer UTC edition has already been published.')
          }
        }
        if (options.readOnly) return fallbackEdition(date, latest, 'This deploy cannot publish a discovery edition.')

        // Archive BEFORE advancing the head. If archival fails after yesterday's
        // commit, its full lessons remain in the head until archival is repaired.
        // All older editions are immutable and neither archives nor IDs expire.
        if (state.latest) await archiveEdition(store, state.latest, signal)
        const scan = await scanCategories(state, date, options.fetch ?? globalThis.fetch, signal)
        if (!scan.successfulBatches) return fallbackEdition(date, latest, 'Discovery sources are temporarily unavailable or this finite pool is exhausted.')
        const edition: DiscoveryEdition | null = scan.lessons.length
          ? { date, lessons: scan.lessons, status: 'fresh' } : null
        const nextState = stateSchema.parse({
          ...state, cursors: scan.cursors, nextPoolIndex: scan.nextPoolIndex,
          seen: { ...state.seen, ...Object.fromEntries(scan.lessons.map((lesson) => [lesson.id.slice(5), date])) },
          latest: edition ?? state.latest,
        })
        // This single CAS is the publication point: date, complete lesson bodies,
        // seen-page dates and cursors commit together. A loser rereads the winner
        // before selecting anything again; it never merges a stale ledger over it.
        if (!await abortable(() => store.write(DISCOVERY_STATE_KEY, nextState, snapshot?.etag ?? null, signal), signal)) continue
        if (!edition) return fallbackEdition(date, latest, 'No unseen eligible extracts were found in this bounded scan. Seen pages are not recycled.')
        remember(edition)
        try { await archiveEdition(store, edition, signal) } catch {
          // The committed head is durable even if this write times out. A future
          // edition cannot replace it until archiveEdition above succeeds.
        }
        return edition
      }
      return fallbackEdition(date, latest, 'Another publisher is updating discoveries. Please retry shortly.')
    })
  } catch {
    result = fallbackEdition(date, latest, 'Discovery could not refresh within its network or storage limits. Please retry later.')
  }
  if (storageKind === 'memory') {
    result = { ...result, message: [result.message, 'Local in-memory storage does not survive process restarts.'].filter(Boolean).join(' ') }
  }
  return result
}

function jsonResponse(edition: DiscoveryEdition, status: number, cacheControl: string, extraHeaders: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(edition), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'X-Content-Type-Options': 'nosniff', 'Cache-Control': cacheControl, ...extraHeaders },
  })
}

export async function handleDiscoveryRequest(request: Request, options: DiscoveryOptions = {}): Promise<Response> {
  const now = options.now ?? (() => new Date())
  const date = utcEditionDate(now())
  if (request.method !== 'GET') {
    return jsonResponse({ date, lessons: [], status: 'unavailable', message: 'Only GET is supported.' }, 405, 'no-store', { Allow: 'GET' })
  }
  // Reject, rather than interpret, every query parameter. Bodies, cookies,
  // authorization headers and personal learning state are never read/forwarded.
  if (new URL(request.url).search) {
    return jsonResponse({ date, lessons: [], status: 'unavailable', message: 'This endpoint does not accept query parameters.' }, 400, 'no-store')
  }
  const edition = await getDiscoveryEdition({ ...options, signal: options.signal ?? request.signal })
  const responseTime = now()
  const current = edition.lessons.length > 0 && edition.date === utcEditionDate(responseTime)
  // Do not keep yesterday's edition fresh in HTTP caches across UTC midnight.
  const midnight = new Date(`${utcEditionDate(responseTime)}T00:00:00Z`).getTime() + 86_400_000
  const ttl = current ? Math.max(0, Math.min(EDITION_TTL_SECONDS, Math.floor((midnight - responseTime.getTime()) / 1_000))) : ERROR_TTL_SECONDS
  return jsonResponse(edition, edition.status === 'unavailable' ? 503 : 200,
    `public, max-age=${current ? Math.min(60, ttl) : 0}, s-maxage=${ttl}, must-revalidate`,
    edition.status === 'unavailable' ? { 'Retry-After': String(ERROR_TTL_SECONDS) } : {})
}