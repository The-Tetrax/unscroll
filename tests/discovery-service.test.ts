import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { editionSchema } from '../src/lib/schema'
import type { DiscoveryEdition } from '../src/types'
import discover from '../netlify/functions/discover'
import { config as dailyConfig, runDailyDiscovery } from '../netlify/functions/daily-discovery'
import {
  CATEGORY_POOL, DISCOVERY_STATE_KEY, DISCOVERY_STORE_NAME, DISCOVERY_TIMEOUT_MS,
  MAX_DAILY_EXTRACTS, MAX_WIKIPEDIA_BYTES, UPSTREAM_TIMEOUT_MS,
  createBlobDiscoveryStore, createMemoryDiscoveryStore, getDiscoveryEdition,
  handleDiscoveryRequest, isAllowedWikipediaUrl, utcEditionDate,
  type DiscoveryOptions, type DiscoveryStore,
} from '../netlify/lib/discovery-service'

const blobs = vi.hoisted(() => ({ getStore: vi.fn() }))
vi.mock('@netlify/blobs', () => ({ getStore: blobs.getStore }))

const ENDPOINT = 'https://unscroll.example/.netlify/functions/discover'
const DAY = '2026-10-25'
const INTRO = [
  'This is synthetic test text, not a factual encyclopedia claim.',
  'The fixture has enough words and characters to exercise the introduction length checks without relying on any live service.',
  'Its sentences stand in for plain text returned by the category generator.',
  'Tests use these paragraphs only to check transport, attribution, identity, storage and publication behavior.',
].join(' ')

function page(pageid: number, title = `Fixture article ${pageid}`) {
  return { pageid, ns: 0, title, extract: INTRO }
}

function wikiResponse(pages: unknown[], continuation?: Record<string, unknown>): Response {
  return Response.json({ batchcomplete: true, query: { pages }, ...(continuation ? { continue: continuation } : {}) })
}

function pageForCategory(url: URL, offset = 0) {
  const index = CATEGORY_POOL.findIndex((pool) => pool.title === url.searchParams.get('gcmtitle'))
  if (index < 0) throw new Error('Test observed an unapproved category')
  return page(offset + (index + 1) * 100)
}

function wikiFetch(reply: (url: URL) => Response | Promise<Response> = (url) => wikiResponse([pageForCategory(url)])) {
  return vi.fn<typeof globalThis.fetch>(async (input) => reply(new URL(input instanceof Request ? input.url : String(input))))
}

function options(fetcher = wikiFetch(), store = createMemoryDiscoveryStore(), date = DAY): DiscoveryOptions {
  return { fetch: fetcher, store, now: () => new Date(`${date}T12:00:00Z`) }
}

function ids(edition: DiscoveryEdition): string[] { return edition.lessons.map((lesson) => lesson.id) }
function signal(): AbortSignal { return new AbortController().signal }

async function control(store: DiscoveryStore) {
  const entry = await store.read(DISCOVERY_STATE_KEY, signal())
  if (!entry) throw new Error('Expected a committed control document')
  return entry.value as {
    version: 1
    seen: Record<string, string>
    cursors: Record<string, { continuation: Record<string, unknown> | null; exhausted: boolean }>
    nextPoolIndex: number
    latest: DiscoveryEdition | null
  }
}

beforeEach(() => {
  blobs.getStore.mockReset()
  blobs.getStore.mockImplementation(() => { throw new Error('Tests must inject a store') })
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('Wikipedia allowlist and transport', () => {
  it('uses only fixed category-generator GETs and does not forward personal request data', async () => {
    const fetcher = wikiFetch()
    const request = new Request(ENDPOINT, { headers: {
      Cookie: 'fixture-session=private', Authorization: 'Bearer fixture-only', 'X-Preferences': 'money',
    } })
    const response = await handleDiscoveryRequest(request, options(fetcher))
    expect(response.status).toBe(200)
    expect(fetcher.mock.calls).toHaveLength(6)
    for (const [input, init] of fetcher.mock.calls) {
      const url = new URL(String(input))
      expect(isAllowedWikipediaUrl(url)).toBe(true)
      expect(url.origin).toBe('https://en.wikipedia.org')
      expect(url.pathname).toBe('/w/api.php')
      expect(url.searchParams.get('generator')).toBe('categorymembers')
      expect(url.searchParams.get('gcmnamespace')).toBe('0')
      expect(url.searchParams.get('explaintext')).toBe('1')
      expect(url.searchParams.get('exintro')).toBe('1')
      expect(init?.method).toBe('GET')
      expect(init?.redirect).toBe('error')
      expect(init?.credentials).toBe('omit')
      expect(init?.body).toBeUndefined()
      expect(init?.signal).toBeInstanceOf(AbortSignal)
      const headers = new Headers(init?.headers)
      expect(headers.get('User-Agent')).toContain('UNSCROLL/1.0')
      expect(headers.get('User-Agent')).toContain('https://github.com/The-Tetrax/unscroll')
      expect(headers.get('Accept')).toBe('application/json')
      expect(headers.has('Cookie')).toBe(false)
      expect(headers.has('Authorization')).toBe(false)
      expect(headers.has('X-Preferences')).toBe(false)
    }
  })

  it('rejects hosts, paths, credentials, parameters and duplicates outside the exact allowlist', async () => {
    const fetcher = wikiFetch()
    await getDiscoveryEdition(options(fetcher))
    const valid = new URL(String(fetcher.mock.calls[0]![0]))
    const invalid = [
      'http://en.wikipedia.org/w/api.php',
      'http://169.254.169.254/latest/meta-data/',
      'http://127.0.0.1/',
      'https://[::1]/',
      'https://en.wikipedia.org.evil.example/w/api.php',
      'https://evil.example/en.wikipedia.org/w/api.php',
      'not a URL',
    ]
    for (const change of [
      (url: URL) => { url.protocol = 'http:' },
      (url: URL) => { url.hostname = 'fr.wikipedia.org' },
      (url: URL) => { url.username = 'user'; url.password = 'password' },
      (url: URL) => { url.port = '8443' },
      (url: URL) => { url.pathname = '/wiki/Reasoning' },
      (url: URL) => { url.pathname = '/w/other.php' },
      (url: URL) => { url.hash = '#fragment' },
      (url: URL) => { url.searchParams.set('action', 'parse') },
      (url: URL) => { url.searchParams.set('gcmtitle', 'Category:Unapproved input') },
      (url: URL) => { url.searchParams.set('url', 'http://127.0.0.1/') },
      (url: URL) => { url.searchParams.set('filter', 'personalized') },
      (url: URL) => { url.searchParams.append('gcmtitle', valid.searchParams.get('gcmtitle')!) },
      (url: URL) => { url.searchParams.delete('explaintext') },
      (url: URL) => { url.searchParams.set('gcmcontinue', 'missing companion token') },
      (url: URL) => { url.searchParams.set('continue', '-||'); url.searchParams.set('gcmcontinue', '\n') },
      (url: URL) => { url.searchParams.set('continue', '-||'); url.searchParams.set('excontinue', 'NaN') },
    ]) {
      const url = new URL(valid)
      change(url)
      invalid.push(url.toString())
    }
    expect(isAllowedWikipediaUrl(valid)).toBe(true)
    for (const url of invalid) expect(isAllowedWikipediaUrl(url), url).toBe(false)
  })

  it('rejects foreign continuation keys instead of copying them into a subsequent request', async () => {
    const fetcher = wikiFetch(() => wikiResponse([page(1)], {
      continue: 'gcmcontinue||', gcmcontinue: 'page|cursor', url: 'http://169.254.169.254/',
    }))
    const edition = await getDiscoveryEdition(options(fetcher))
    expect(edition.status).toBe('unavailable')
    expect(edition.lessons).toEqual([])
    for (const [input] of fetcher.mock.calls) expect(isAllowedWikipediaUrl(String(input))).toBe(true)
  })

  it('has a rotating live category pool covering all eight requested subject areas', () => {
    expect(new Set(CATEGORY_POOL.map((pool) => pool.topic))).toEqual(new Set([
      'Psychology', 'Reasoning', 'Economics', 'Communication', 'Philosophy', 'Computer networking', 'Decision-making', 'Learning',
    ]))
    expect(CATEGORY_POOL).toHaveLength(24)
    expect(new Set(CATEGORY_POOL.map((pool) => pool.title)).size).toBe(CATEGORY_POOL.length)
  })
})

describe('attributed, finite daily editions', () => {
  it('publishes at most six stable IDs with valid licensing, encoded sources and no factual quiz', async () => {
    const title = 'Attention & decisions / café'
    const fetcher = wikiFetch((url) => wikiResponse([{ ...pageForCategory(url), title, extract: `${INTRO}\n\nFixture punctuation\u2014only.` }]))
    const edition = await getDiscoveryEdition({ ...options(fetcher), now: () => new Date('2026-10-25T23:30:00-05:00') })
    expect(editionSchema.safeParse(edition).success).toBe(true)
    expect(edition.date).toBe('2026-10-26')
    expect(edition.status).toBe('fresh')
    expect(edition.lessons).toHaveLength(MAX_DAILY_EXTRACTS)
    expect(new Set(ids(edition)).size).toBe(MAX_DAILY_EXTRACTS)
    for (const lesson of edition.lessons) {
      expect(lesson.id).toMatch(/^wiki-[1-9]\d*$/)
      expect(lesson.kind).toBe('discovery')
      expect(lesson.evidence).toBe('reference')
      expect(lesson.publishedAt).toBe(edition.date)
      expect(lesson.quiz).toBeUndefined()
      expect(lesson.body).toEqual([`${INTRO}\n\nFixture punctuation-only.`])
      expect(lesson.action).toContain('Exploration and reflection exercise')
      expect(lesson.takeaway).toContain('External Wikipedia introduction')
      const encoded = encodeURIComponent(title.replace(/ /g, '_'))
      expect(lesson.sources).toEqual([{ title, url: `https://en.wikipedia.org/wiki/${encoded}`, publisher: 'Wikipedia' }])
      expect(lesson.attribution).toEqual({
        author: 'Wikipedia contributors', license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
        historyUrl: `https://en.wikipedia.org/w/index.php?title=${encoded}&action=history`,
      })
    }
  })

  it('returns the immutable same-day edition without fetching or minting more IDs', async () => {
    const store = createMemoryDiscoveryStore()
    const first = await getDiscoveryEdition(options(wikiFetch(), store))
    const mustNotFetch = wikiFetch(() => { throw new Error('Unexpected refresh') })
    const cached = await getDiscoveryEdition(options(mustNotFetch, store))
    expect(cached.status).toBe('cached')
    expect(cached.lessons).toEqual(first.lessons)
    expect(mustNotFetch).not.toHaveBeenCalled()
    expect(Object.keys((await control(store)).seen)).toHaveLength(6)
    const archive = await store.read(`editions/${DAY}`, signal())
    expect((archive?.value as DiscoveryEdition).lessons).toEqual(first.lessons)
  })

  it('deduplicates pages across categories/days and excludes non-articles, disambiguation, redirects and short/HTML extracts', async () => {
    const store = createMemoryDiscoveryStore()
    const fetcher = wikiFetch(() => wikiResponse([
      page(1), page(1), { ...page(2), ns: 14 },
      { ...page(3), pageprops: { disambiguation: '' } },
      { ...page(4), extract: 'Too short.' }, { ...page(5), redirect: true },
      { ...page(6), missing: true }, { ...page(7), extract: `<p>${INTRO}</p>` },
      { ...page(8), title: 'Fixture (disambiguation)' },
    ]))
    const first = await getDiscoveryEdition(options(fetcher, store))
    expect(ids(first)).toEqual(['wiki-1'])
    const next = await getDiscoveryEdition(options(fetcher, store, '2026-10-26'))
    expect(next.status).toBe('cached')
    expect(next.date).toBe(DAY)
    expect(next.lessons).toEqual(first.lessons)
    expect((await control(store)).seen).toEqual({ '1': DAY })
    fetcher.mockClear()
    const exhausted = await getDiscoveryEdition(options(fetcher, store, '2026-10-27'))
    expect(exhausted.lessons).toEqual(first.lessons)
    expect(exhausted.message).toContain('exhausted')
    expect(fetcher).not.toHaveBeenCalled()
  })

  it('preserves unselected candidates and advances persisted cursors only after they are consumed', async () => {
    const store = createMemoryDiscoveryStore()
    const continuation = { continue: 'gcmcontinue||', gcmcontinue: 'page|next' }
    const fetcher = wikiFetch((url) => url.searchParams.has('gcmcontinue')
      ? wikiResponse([page(100)])
      : wikiResponse(Array.from({ length: 8 }, (_, index) => page(index + 1)), continuation))
    const first = await getDiscoveryEdition(options(fetcher, store))
    expect(ids(first)).toEqual(['wiki-1', 'wiki-2', 'wiki-3', 'wiki-4', 'wiki-5', 'wiki-6'])
    expect((await control(store)).cursors).toEqual({})
    const second = await getDiscoveryEdition(options(fetcher, store, '2026-10-26'))
    expect(ids(second)).toEqual(['wiki-7', 'wiki-8'])
    expect(Object.values((await control(store)).cursors).some((cursor) => cursor.continuation?.gcmcontinue === 'page|next')).toBe(true)
    await getDiscoveryEdition(options(fetcher, store, '2026-10-27'))
    const later = await getDiscoveryEdition(options(fetcher, store, '2026-10-28'))
    expect(ids(later)).toEqual(['wiki-100'])
    expect(fetcher.mock.calls.some(([input]) => new URL(String(input)).searchParams.get('gcmcontinue') === 'page|next')).toBe(true)
    expect(Object.keys((await control(store)).seen)).toHaveLength(9)
  })

  it('returns an empty unavailable edition on a genuinely empty category pool', async () => {
    const edition = await getDiscoveryEdition(options(wikiFetch(() => Response.json({ batchcomplete: true }))))
    expect(edition.date).toBe(DAY)
    expect(edition.status).toBe('unavailable')
    expect(edition.lessons).toEqual([])
    expect(edition.message).toContain('not recycled')
  })

  it('does not let a read-only deploy publish, but lets it read an existing edition', async () => {
    const store = createMemoryDiscoveryStore()
    const fetcher = wikiFetch()
    const empty = await getDiscoveryEdition({ ...options(fetcher, store), readOnly: true })
    expect(empty.status).toBe('unavailable')
    expect(fetcher).not.toHaveBeenCalled()
    const first = await getDiscoveryEdition(options(fetcher, store))
    fetcher.mockClear()
    const cached = await getDiscoveryEdition({ ...options(fetcher, store), readOnly: true })
    expect(cached.lessons).toEqual(first.lessons)
    expect(fetcher).not.toHaveBeenCalled()
  })
})

describe('upstream failures and deadlines', () => {
  const badResponses: [string, () => Response][] = [
    ['HTML', () => new Response('<html>upstream failure</html>', { headers: { 'Content-Type': 'text/html' } })],
    ['invalid JSON', () => new Response('{', { headers: { 'Content-Type': 'application/json' } })],
    ['wrong JSON shape', () => Response.json({ query: { pages: 'not an array' } })],
    ['empty malformed object', () => Response.json({})],
    ['API error', () => Response.json({ error: { code: 'maxlag', info: 'Fixture error' } })],
    ['too many pages', () => wikiResponse(Array.from({ length: 21 }, (_, index) => page(index + 1)))],
    ['oversized declared body', () => new Response('{}', { headers: { 'Content-Type': 'application/json', 'Content-Length': String(MAX_WIKIPEDIA_BYTES + 1) } })],
    ['oversized streamed UTF-8 body', () => new Response('é'.repeat(MAX_WIKIPEDIA_BYTES / 2 + 1), { headers: { 'Content-Type': 'application/json' } })],
    ['redirect to private host', () => new Response(null, { status: 302, headers: { Location: 'http://127.0.0.1/' } })],
    ['upstream 503', () => new Response('Unavailable', { status: 503 })],
    ['upstream 429', () => new Response('Rate limited', { status: 429 })],
    ['already followed redirect', () => {
      const response = wikiResponse([page(1)])
      Object.defineProperty(response, 'redirected', { value: true })
      Object.defineProperty(response, 'url', { value: 'http://169.254.169.254/' })
      return response
    }],
  ]

  it.each(badResponses)('fails closed for %s without storing an edition', async (_name, makeResponse) => {
    const store = createMemoryDiscoveryStore()
    const fetcher = wikiFetch(() => makeResponse())
    const edition = await getDiscoveryEdition(options(fetcher, store))
    expect(edition.status).toBe('unavailable')
    expect(edition.lessons).toEqual([])
    expect(fetcher.mock.calls.length).toBeLessThanOrEqual(12)
    expect(await store.read(DISCOVERY_STATE_KEY, signal())).toBeNull()
    expect(await store.read(`editions/${DAY}`, signal())).toBeNull()
  })

  it('enforces eight-second request timeouts even if fetch ignores its abort signal', async () => {
    vi.useFakeTimers()
    const fetcher = vi.fn<typeof globalThis.fetch>(() => new Promise<Response>(() => undefined))
    const pending = getDiscoveryEdition({ ...options(), fetch: fetcher })
    await vi.advanceTimersByTimeAsync(2 * UPSTREAM_TIMEOUT_MS + 1)
    const edition = await pending
    expect(edition.status).toBe('unavailable')
    expect(fetcher.mock.calls).toHaveLength(12)
    expect(fetcher.mock.calls.every(([, init]) => init?.signal?.aborted)).toBe(true)
  })

  it('includes stalled body reads in the request timeout and cancels their streams', async () => {
    vi.useFakeTimers()
    const cancel = vi.fn()
    const fetcher = wikiFetch(() => new Response(new ReadableStream<Uint8Array>({ cancel }), {
      headers: { 'Content-Type': 'application/json' },
    }))
    const pending = getDiscoveryEdition(options(fetcher))
    await vi.advanceTimersByTimeAsync(2 * UPSTREAM_TIMEOUT_MS + 1)
    expect((await pending).status).toBe('unavailable')
    expect(cancel).toHaveBeenCalledTimes(12)
  })

  it('bounds the entire operation to 22 seconds even if the store never responds', async () => {
    vi.useFakeTimers()
    const store: DiscoveryStore = {
      kind: 'blobs', read: () => new Promise(() => undefined), write: vi.fn(async () => true),
    }
    const fetcher = wikiFetch()
    const pending = getDiscoveryEdition(options(fetcher, store))
    await vi.advanceTimersByTimeAsync(DISCOVERY_TIMEOUT_MS + 1)
    expect((await pending).status).toBe('unavailable')
    expect(store.write).not.toHaveBeenCalled()
    expect(fetcher).not.toHaveBeenCalled()
  })

  it('returns the previous edition and original publication date when the network fails', async () => {
    const store = createMemoryDiscoveryStore()
    const first = await getDiscoveryEdition(options(wikiFetch(), store))
    const broken = wikiFetch(() => { throw new TypeError('Fixture network failure') })
    const cached = await getDiscoveryEdition(options(broken, store, '2026-10-26'))
    expect(cached.status).toBe('cached')
    expect(cached.date).toBe(DAY)
    expect(cached.lessons).toEqual(first.lessons)
    expect(cached.message).toContain('not new lessons')
    expect(Object.keys((await control(store)).seen)).toHaveLength(6)
  })
})

describe('atomic publication and archive recovery', () => {
  it('makes concurrent cron/API publishers adopt one winner without burning the loser IDs', async () => {
    const store = createMemoryDiscoveryStore()
    const firstFetch = wikiFetch((url) => wikiResponse([pageForCategory(url, 10_000)]))
    const secondFetch = wikiFetch((url) => wikiResponse([pageForCategory(url, 20_000)]))
    const [first, second] = await Promise.all([
      getDiscoveryEdition(options(firstFetch, store)), getDiscoveryEdition(options(secondFetch, store)),
    ])
    expect(first.lessons).toHaveLength(6)
    expect(second.lessons).toEqual(first.lessons)
    expect([first.status, second.status].sort()).toEqual(['cached', 'fresh'])
    const state = await control(store)
    expect(Object.keys(state.seen).sort()).toEqual(ids(first).map((id) => id.slice(5)).sort())
    expect(state.latest?.lessons).toEqual(first.lessons)
  })

  it('does not allow a delayed previous-day writer to overwrite a newer UTC edition', async () => {
    const store = createMemoryDiscoveryStore()
    let release!: () => void
    let announce!: () => void
    const gate = new Promise<void>((resolve) => { release = resolve })
    const started = new Promise<void>((resolve) => { announce = resolve })
    const slow = wikiFetch(async (url) => { announce(); await gate; return wikiResponse([pageForCategory(url)]) })
    const olderPending = getDiscoveryEdition(options(slow, store))
    await started
    const newer = await getDiscoveryEdition(options(wikiFetch(), store, '2026-10-26'))
    release()
    const older = await olderPending
    expect(newer.status).toBe('fresh')
    expect(older.status).toBe('unavailable')
    expect((await control(store)).latest?.date).toBe('2026-10-26')
    expect(await store.read(`editions/${DAY}`, signal())).toBeNull()
  })

  it('retains a committed edition when archival fails, and blocks advancing until repair', async () => {
    const memory = createMemoryDiscoveryStore()
    let failArchive = true
    const store: DiscoveryStore = { ...memory, async write(key, value, expectedEtag, abortSignal) {
      if (failArchive && key.startsWith('editions/')) throw new Error('Fixture archive failure')
      return memory.write(key, value, expectedEtag, abortSignal)
    } }
    const fetcher = wikiFetch()
    const first = await getDiscoveryEdition(options(fetcher, store))
    expect(first.status).toBe('fresh')
    expect((await control(store)).latest?.lessons).toEqual(first.lessons)
    expect(await store.read(`editions/${DAY}`, signal())).toBeNull()
    fetcher.mockClear()
    const blocked = await getDiscoveryEdition(options(fetcher, store, '2026-10-26'))
    expect(blocked.status).toBe('cached')
    expect(blocked.lessons).toEqual(first.lessons)
    expect(fetcher).not.toHaveBeenCalled()
    failArchive = false
    const repaired = await getDiscoveryEdition(options(fetcher, store, '2026-10-26'))
    expect(repaired.status).toBe('fresh')
    expect(ids(repaired).some((id) => ids(first).includes(id))).toBe(false)
    expect((await store.read(`editions/${DAY}`, signal()))?.value).toMatchObject({ date: DAY, lessons: first.lessons })
    expect(Object.keys((await control(store)).seen)).toHaveLength(12)
  })

  it('reads the exact immutable archive for an older date without rolling back the ledger', async () => {
    const store = createMemoryDiscoveryStore()
    const first = await getDiscoveryEdition(options(wikiFetch(), store))
    const second = await getDiscoveryEdition(options(wikiFetch(), store, '2026-10-26'))
    const fetcher = wikiFetch()
    const archive = await getDiscoveryEdition(options(fetcher, store))
    expect(archive.status).toBe('cached')
    expect(archive.lessons).toEqual(first.lessons)
    expect((await control(store)).latest?.lessons).toEqual(second.lessons)
    expect(fetcher).not.toHaveBeenCalled()
  })

  it('does not return uncommitted lessons or fail over to a fresh ledger after a write failure', async () => {
    const memory = createMemoryDiscoveryStore()
    const store: DiscoveryStore = { ...memory, kind: 'blobs', write: vi.fn(async () => { throw new Error('Fixture failed write') }) }
    const edition = await getDiscoveryEdition(options(wikiFetch(), store))
    expect(edition.status).toBe('unavailable')
    expect(edition.lessons).toEqual([])
    expect(await memory.read(DISCOVERY_STATE_KEY, signal())).toBeNull()
  })

  it('fails closed on malformed saved state without overwriting it', async () => {
    const store = createMemoryDiscoveryStore()
    const corrupt = { version: 999, seen: { '1': DAY } }
    await store.write(DISCOVERY_STATE_KEY, corrupt, null, signal())
    const fetcher = wikiFetch()
    expect((await getDiscoveryEdition(options(fetcher, store))).status).toBe('unavailable')
    expect(fetcher).not.toHaveBeenCalled()
    expect((await store.read(DISCOVERY_STATE_KEY, signal()))?.value).toEqual(corrupt)
  })
})

describe('Netlify Blobs adapter and local fallback', () => {
  it('uses strong reads and exact onlyIfNew / onlyIfMatch write options', async () => {
    const sdk = {
      getWithMetadata: vi.fn(async () => ({ data: '{"fixture":true}', etag: '"v1"', metadata: {} })),
      setJSON: vi.fn(async () => ({ modified: true, etag: '"v2"' })),
    }
    const store = createBlobDiscoveryStore(sdk as unknown as Parameters<typeof createBlobDiscoveryStore>[0])
    expect(await store.read('fixture', signal())).toEqual({ value: { fixture: true }, etag: '"v1"' })
    expect(sdk.getWithMetadata).toHaveBeenCalledWith('fixture', { type: 'text', consistency: 'strong' })
    expect(await store.write('fixture', { next: 1 }, null, signal())).toBe(true)
    expect(await store.write('fixture', { next: 2 }, '"v1"', signal())).toBe(true)
    expect(sdk.setJSON).toHaveBeenNthCalledWith(1, 'fixture', { next: 1 }, { onlyIfNew: true })
    expect(sdk.setJSON).toHaveBeenNthCalledWith(2, 'fixture', { next: 2 }, { onlyIfMatch: '"v1"' })
    sdk.setJSON.mockResolvedValueOnce({ modified: false, etag: '' })
    expect(await store.write('fixture', {}, '"stale"', signal())).toBe(false)
    sdk.setJSON.mockResolvedValueOnce({ modified: true, etag: '' })
    await expect(store.write('fixture', {}, null, signal())).rejects.toThrow('Unconfirmed')
  })

  it('rejects missing read ETags instead of doing an unconditional write', async () => {
    const sdk = {
      getWithMetadata: vi.fn(async () => ({ data: '{}', etag: '', metadata: {} })),
      setJSON: vi.fn(async () => ({ modified: true, etag: '"v1"' })),
    }
    const store = createBlobDiscoveryStore(sdk as unknown as Parameters<typeof createBlobDiscoveryStore>[0])
    await expect(store.read('fixture', signal())).rejects.toThrow('Invalid discovery store entry')
    expect(sdk.setJSON).not.toHaveBeenCalled()
  })

  it('opens a site-wide store and rejects failed HTTP writes before the SDK can report a commit', async () => {
    vi.stubGlobal('fetch', vi.fn<typeof globalThis.fetch>(async () => new Response('Forbidden', { status: 403 })))
    blobs.getStore.mockImplementation((settings: { fetch: typeof globalThis.fetch }) => ({
      getWithMetadata: async () => null,
      setJSON: async () => {
        await settings.fetch('https://api.netlify.com/fixture-only', { method: 'PUT' })
        return { modified: true, etag: '"incorrect-success"' }
      },
    }))
    const edition = await getDiscoveryEdition({ fetch: wikiFetch(), now: () => new Date(`${DAY}T12:00:00Z`) })
    expect(edition.status).toBe('unavailable')
    expect(edition.lessons).toEqual([])
    expect(blobs.getStore).toHaveBeenCalledWith(expect.objectContaining({ name: DISCOVERY_STORE_NAME, consistency: 'strong', fetch: expect.any(Function) }))
  })

  it('falls back to process-local memory only when the local Blobs environment is absent', async () => {
    vi.stubEnv('NETLIFY_LOCAL', 'true')
    blobs.getStore.mockImplementation(() => {
      const error = new Error('Fixture missing local environment')
      error.name = 'MissingBlobsEnvironmentError'
      throw error
    })
    const fetcher = wikiFetch()
    const opts = { fetch: fetcher, now: () => new Date('2026-11-01T12:00:00Z') }
    const first = await getDiscoveryEdition(opts)
    const second = await getDiscoveryEdition(opts)
    expect(first.status).toBe('fresh')
    expect(first.message).toContain('does not survive process restarts')
    expect(second.status).toBe('cached')
    expect(second.lessons).toEqual(first.lessons)
  })

  it('does not silently switch to memory if a deployed function lacks Blobs credentials', async () => {
    vi.stubEnv('NETLIFY_LOCAL', 'false')
    vi.stubEnv('NETLIFY', 'true')
    blobs.getStore.mockImplementation(() => {
      const error = new Error('Fixture missing hosted environment')
      error.name = 'MissingBlobsEnvironmentError'
      throw error
    })
    const fetcher = wikiFetch()
    const edition = await getDiscoveryEdition({ fetch: fetcher, now: () => new Date(`${DAY}T12:00:00Z`) })
    expect(edition.status).toBe('unavailable')
    expect(fetcher).not.toHaveBeenCalled()
  })
})

describe('Web Request/Response endpoint and schedule', () => {
  it.each(['POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'])('returns JSON 405 for %s before touching storage or the network', async (method) => {
    const fetcher = wikiFetch()
    const response = await handleDiscoveryRequest(new Request(ENDPOINT, { method }), options(fetcher))
    expect(response.status).toBe(405)
    expect(response.headers.get('Allow')).toBe('GET')
    expect(response.headers.get('Cache-Control')).toBe('no-store')
    expect(response.headers.get('Content-Type')).toContain('application/json')
    expect((await response.json()).status).toBe('unavailable')
    expect(fetcher).not.toHaveBeenCalled()
    expect(blobs.getStore).not.toHaveBeenCalled()
  })

  it('exports a V2 default handler that rejects public POSTs', async () => {
    const response = await discover(new Request(ENDPOINT, { method: 'POST' }))
    expect(response).toBeInstanceOf(Response)
    expect(response.status).toBe(405)
    expect(blobs.getStore).not.toHaveBeenCalled()
  })

  it.each(['url=http%3A%2F%2F127.0.0.1', 'category=money', 'date=2020-01-01', 'seen=wiki-1', 'notes=private'])('rejects query input %s', async (query) => {
    const fetcher = wikiFetch()
    const response = await handleDiscoveryRequest(new Request(`${ENDPOINT}?${query}`), options(fetcher))
    expect(response.status).toBe(400)
    expect(response.headers.get('Cache-Control')).toBe('no-store')
    expect(fetcher).not.toHaveBeenCalled()
  })

  it('uses a longer edition TTL, a short error TTL, JSON only and nosniff', async () => {
    const good = await handleDiscoveryRequest(new Request(ENDPOINT), options())
    expect(good.status).toBe(200)
    expect(good.headers.get('Cache-Control')).toContain('s-maxage=3600')
    expect(good.headers.get('X-Content-Type-Options')).toBe('nosniff')
    expect(editionSchema.safeParse(await good.json()).success).toBe(true)
    const bad = await handleDiscoveryRequest(new Request(ENDPOINT), options(wikiFetch(() => new Response('<html>Bad</html>', { status: 503 }))))
    expect(bad.status).toBe(503)
    expect(bad.headers.get('Cache-Control')).toContain('s-maxage=30')
    expect(bad.headers.get('Retry-After')).toBe('30')
    expect(bad.headers.get('Content-Type')).toContain('application/json')
    expect(await bad.text()).not.toContain('<html>')
  })

  it('uses a short TTL when serving a previous-day fallback', async () => {
    const store = createMemoryDiscoveryStore()
    await getDiscoveryEdition(options(wikiFetch(), store))
    const response = await handleDiscoveryRequest(new Request(ENDPOINT), options(wikiFetch(() => { throw new Error('Offline') }), store, '2026-10-26'))
    expect(response.status).toBe(200)
    expect(response.headers.get('Cache-Control')).toContain('max-age=0, s-maxage=30')
    expect((await response.json()).date).toBe(DAY)
  })

  it('caps the edition TTL at UTC midnight and does not use a local-day edition key', async () => {
    const response = await handleDiscoveryRequest(new Request(ENDPOINT), {
      ...options(), now: () => new Date('2026-10-25T23:59:55Z'),
    })
    expect(response.headers.get('Cache-Control')).toContain('max-age=5, s-maxage=5')
    expect(utcEditionDate(new Date('2026-10-25T23:00:00-07:00'))).toBe('2026-10-26')
  })

  it('schedules 00:15 UTC and does not run for unpublished deploys', async () => {
    expect(dailyConfig.schedule).toBe('15 0 * * *')
    const fetcher = wikiFetch()
    const response = await runDailyDiscovery({ deploy: { id: 'preview', context: 'deploy-preview', published: false } }, options(fetcher))
    expect(response.status).toBe(204)
    expect(response.headers.get('Cache-Control')).toBe('no-store')
    expect(fetcher).not.toHaveBeenCalled()
  })

  it('lets published cron and lazy GET safely share the same daily edition', async () => {
    const store = createMemoryDiscoveryStore()
    const opts = options(wikiFetch(), store)
    const [scheduled, api] = await Promise.all([
      runDailyDiscovery({ deploy: { id: 'published', context: 'production', published: true } }, opts),
      handleDiscoveryRequest(new Request(ENDPOINT), opts),
    ])
    expect(scheduled.status).toBe(204)
    expect(api.status).toBe(200)
    expect((await api.json()).lessons).toHaveLength(6)
    expect(Object.keys((await control(store)).seen)).toHaveLength(6)
  })
})