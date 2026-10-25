// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createInitialState } from '../src/lib/learning'
import { parseBackup, retainDiscoveries, serializeBackup } from '../src/lib/storage'
import type { LibrarySnapshot } from '../src/lib/storage'
import type { AppState, Lesson } from '../src/types'

// These tests exercise only pure functions, never IndexedDB or browser downloads.
vi.mock('idb-keyval', () => ({
  get: vi.fn(() => { throw new Error('Pure storage tests must not read IndexedDB') }),
  set: vi.fn(() => { throw new Error('Pure storage tests must not write IndexedDB') }),
}))

const DAY = '2026-10-25'
const EXPORTED_AT = '2026-10-25T12:34:56.000Z'
const CURATED_IDS = new Set(['curated-1', 'curated-2'])

function discovery(number = 1, publishedAt = DAY): Lesson {
  return {
    id: `wiki-${number}`, category: 'thinking', topic: 'Fixture reference',
    title: `Fixture article ${number}`, hook: 'A synthetic encyclopedia fixture.',
    body: ['This text exists only to exercise validation and offline retention.'],
    takeaway: 'This is external reference material.', action: 'Write one question to investigate.',
    sources: [{
      title: `Fixture article ${number}`, url: `https://en.wikipedia.org/wiki/Fixture_${number}`, publisher: 'Wikipedia',
    }],
    kind: 'discovery', evidence: 'reference', publishedAt,
    attribution: {
      author: 'Wikipedia contributors', license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      historyUrl: `https://en.wikipedia.org/w/index.php?title=Fixture_${number}&action=history`,
    },
  }
}

function snapshot(): LibrarySnapshot {
  return { state: createInitialState(DAY), discoveries: [discovery()] }
}

function backupDocument(library = snapshot()) {
  return { app: 'UNSCROLL', version: 1, exportedAt: EXPORTED_AT, ...library }
}

type BackupDocument = ReturnType<typeof backupDocument>
type ReferenceWriter = (state: AppState, id: string) => void

const references: [string, ReferenceWriter][] = [
  ['saved', (state, id) => { state.saved.push(id) }],
  ['completed', (state, id) => { state.completed[id] = { date: DAY, correct: null } }],
  ['notes', (state, id) => { state.notes[id] = 'Keep this reflection offline.' }],
  ['reviews', (state, id) => { state.reviews[id] = { due: '2026-10-26', interval: 1, repetitions: 0 } }],
  ['daily queue', (state, id) => { state.daily.ids.push(id) }],
  ['collections', (state, id) => { state.collections.push({ id: 'collection-1', name: 'Field notes', lessonIds: [id] }) }],
]

function datedDiscoveries(count: number): Lesson[] {
  return Array.from({ length: count }, (_, index) => discovery(
    index + 1, new Date(Date.UTC(2026, 0, index + 1)).toISOString().slice(0, 10),
  ))
}

function ids(lessons: Lesson[]): Set<string> {
  return new Set(lessons.map((lesson) => lesson.id))
}

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe('backup round trips', () => {
  it('round-trips an initial state with no downloaded discoveries', () => {
    const library: LibrarySnapshot = { state: createInitialState(DAY), discoveries: [] }
    expect(parseBackup(serializeBackup(library), CURATED_IDS)).toEqual(library)
  })

  it('writes the app, version and UTC export timestamp without mutating its snapshot', () => {
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date(EXPORTED_AT))
    const library = snapshot()
    const before = structuredClone(library)
    const text = serializeBackup(library)
    expect(JSON.parse(text)).toEqual({ app: 'UNSCROLL', version: 1, exportedAt: EXPORTED_AT, ...library })
    expect(library).toEqual(before)
  })

  it('preserves saved discoveries and attribution, notes, collections, completion and review history', () => {
    const library: LibrarySnapshot = {
      state: {
        ...createInitialState('2024-02-29'), name: 'Fixture reader', goal: 7,
        interests: ['mind', 'thinking', 'tech'],
        saved: ['curated-1', 'wiki-1'],
        notes: { 'curated-1': 'First line.\nSecond line.', 'wiki-1': 'Café notes: "__proto__" is ordinary text here.' },
        completed: {
          'curated-1': { date: '2026-10-24', correct: false },
          'wiki-1': { date: DAY, correct: null },
        },
        reviews: {
          'curated-1': { due: '2026-10-26', interval: 3, repetitions: 2, lastReviewed: '2026-10-23' },
          'wiki-1': { due: '2026-10-26', interval: 1, repetitions: 0 },
        },
        collections: [{ id: 'collection-1', name: 'Field notes', lessonIds: ['curated-1', 'wiki-1'] }],
        activity: { '2026-10-24': 1, [DAY]: 2 }, xp: 65,
        delivered: ['curated-1', 'curated-2', 'wiki-1'], daily: { date: DAY, ids: ['wiki-1', 'curated-2'] },
        reducedMotion: true, welcomeDismissed: true, followedPath: 'fixture-path',
      },
      discoveries: [discovery()],
    }
    const restored = parseBackup(serializeBackup(library), CURATED_IDS)
    expect(restored).toEqual(library)
    expect(restored.discoveries[0]!.attribution).toEqual(library.discoveries[0]!.attribution)
    expect(restored.discoveries[0]!.sources).toEqual(library.discoveries[0]!.sources)
  })

  it('accepts a genuine leap day in all calendar-date fields', () => {
    const date = '2024-02-29'
    const library: LibrarySnapshot = {
      state: {
        ...createInitialState(date),
        completed: { 'curated-1': { date, correct: true } },
        reviews: { 'curated-1': { due: date, interval: 1, repetitions: 1, lastReviewed: date } },
        activity: { [date]: 1 },
      },
      discoveries: [discovery(1, date)],
    }
    const document = { ...backupDocument(library), exportedAt: '2024-02-29T12:00:00.000Z' }
    expect(parseBackup(JSON.stringify(document), CURATED_IDS)).toEqual(library)
  })

  it('preserves delivery tombstones after the corresponding unprotected discoveries have been pruned', () => {
    const library: LibrarySnapshot = {
      state: { ...createInitialState(DAY), delivered: ['wiki-9999'] }, discoveries: [],
    }
    // Delivered IDs prevent recycling; unlike visible references, they need not retain article content.
    expect(parseBackup(serializeBackup(library), CURATED_IDS)).toEqual(library)
  })
})

describe('backup envelope and input validation', () => {
  it.each([
    ['empty text', ''], ['unfinished object', '{'],
    ['trailing comma', '{"app":"UNSCROLL",}'], ['undefined token', 'undefined'],
  ])('rejects malformed JSON: %s', (_name, text) => {
    expect(() => parseBackup(text, CURATED_IDS)).toThrow(/not valid JSON/i)
  })

  it.each([
    { name: 'null', value: null }, { name: 'array', value: [] },
    { name: 'string', value: 'UNSCROLL' }, { name: 'number', value: 42 },
  ])('rejects a valid JSON $name instead of a backup object', ({ value }) => {
    expect(() => parseBackup(JSON.stringify(value), CURATED_IDS)).toThrow()
  })

  const unsupported: [string, (document: BackupDocument) => void][] = [
    ['another application', (document) => { document.app = 'OTHER' }],
    ['an old envelope version', (document) => { document.version = 0 }],
    ['a future envelope version', (document) => { document.version = 2 }],
    ['a future state version', (document) => { Object.assign(document.state, { version: 2 }) }],
  ]

  it.each(unsupported)('rejects %s', (_name, corrupt) => {
    const document = backupDocument()
    corrupt(document)
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow(/unsupported version or invalid fields/i)
  })

  it('rejects input over 20,000,000 characters before attempting JSON parsing', () => {
    const text = JSON.stringify(backupDocument()).padEnd(20_000_001, ' ')
    const parse = vi.spyOn(JSON, 'parse')
    expect(() => parseBackup(text, CURATED_IDS)).toThrow(/too large/i)
    expect(parse).not.toHaveBeenCalled()
  })
})

describe('backup dates', () => {
  it.each(['2026-04-31', '2026-00-01', '2026-13-01', '2026-01-00', '2026-1-01', 'not-a-date'])(
    'rejects the invalid date %s rather than normalizing it', (date) => {
      const document = backupDocument()
      document.state.joined = date
      expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow()
    },
  )

  const dateFields: [string, (document: BackupDocument, date: string) => void][] = [
    ['joined', (document, date) => { document.state.joined = date }],
    ['daily date', (document, date) => { document.state.daily.date = date }],
    ['completion date', (document, date) => { document.state.completed['curated-1'] = { date, correct: true } }],
    ['review due date', (document, date) => { document.state.reviews['curated-1'] = { due: date, interval: 1, repetitions: 0 } }],
    ['last review date', (document, date) => {
      document.state.reviews['curated-1'] = { due: DAY, interval: 1, repetitions: 1, lastReviewed: date }
    }],
    ['activity date key', (document, date) => { document.state.activity = { [date]: 1 } }],
    ['discovery publication date', (document, date) => { document.discoveries[0]!.publishedAt = date }],
  ]

  it.each(dateFields)('rejects a nonexistent leap day in %s', (_name, corrupt) => {
    const document = backupDocument()
    corrupt(document, '2026-02-29')
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow()
  })

  it.each(['not-a-timestamp', '2026-02-30T12:00:00.000Z', '2026-10-25'])('rejects invalid exportedAt %s', (timestamp) => {
    const document = backupDocument()
    document.exportedAt = timestamp
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow()
  })
})

describe('backup discovery URLs and attribution', () => {
  const urlFields: [string, (lesson: Lesson, url: string) => void][] = [
    ['source URL', (lesson, url) => { lesson.sources[0]!.url = url }],
    ['license URL', (lesson, url) => { lesson.attribution!.licenseUrl = url }],
    ['history URL', (lesson, url) => { lesson.attribution!.historyUrl = url }],
  ]

  describe.each(urlFields)('%s', (_name, setUrl) => {
    it.each([
      ['HTTP', 'http://en.wikipedia.org/wiki/Fixture_1'],
      ['script scheme', 'javascript:alert(1)'],
      ['embedded credentials', 'https://fixture-user:fixture-password@en.wikipedia.org/wiki/Fixture_1'],
      ['relative path', '/wiki/Fixture_1'],
    ])('rejects %s', (_reason, url) => {
      const document = backupDocument()
      setUrl(document.discoveries[0]!, url)
      expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow()
    })
  })

  it.each([
    'https://fr.wikipedia.org/wiki/Fixture_1',
    'https://en.wikipedia.org.evil.example/wiki/Fixture_1',
    'https://example.org/wiki/Fixture_1',
  ])('rejects a discovery source outside English Wikipedia: %s', (url) => {
    const document = backupDocument()
    document.discoveries[0]!.sources[0]!.url = url
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow()
  })

  it('rejects original lessons in the discoveries array even if their retrieval question is valid', () => {
    const document = backupDocument()
    const lesson = document.discoveries[0]!
    delete lesson.kind
    lesson.quiz = {
      question: 'Which option is designated?', options: ['First', 'Second', 'Third'],
      correctIndex: 0, explanation: 'The first option is designated in this fixture.',
    }
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow(/invalid discovery content/i)
  })

  it('rejects a discovery without attribution', () => {
    const document = backupDocument()
    delete document.discoveries[0]!.attribution
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow()
  })

  it.each(['author', 'license', 'licenseUrl', 'historyUrl'] as const)('rejects attribution missing %s', (field) => {
    const document = backupDocument()
    Reflect.deleteProperty(document.discoveries[0]!.attribution!, field)
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow()
  })

  it('rejects a discovery without its publication date', () => {
    const document = backupDocument()
    delete document.discoveries[0]!.publishedAt
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow()
  })

  it('rejects a discovery whose ID is not a stable wiki ID', () => {
    const document = backupDocument()
    document.discoveries[0]!.id = 'original-999'
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow()
  })

  it('rejects a discovery with no article source', () => {
    const document = backupDocument()
    document.discoveries[0]!.sources = []
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow()
  })
})

describe('backup references and duplicate records', () => {
  it.each(references)('rejects a missing lesson referenced by %s', (_name, reference) => {
    const document = backupDocument()
    reference(document.state, 'wiki-9999')
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow(/missing lessons/i)
  })

  it.each(['identical', 'conflicting'] as const)('rejects %s discoveries with the same ID', (variant) => {
    const document = backupDocument()
    const duplicate = discovery()
    if (variant === 'conflicting') duplicate.title = 'A conflicting title for the same article ID'
    document.discoveries.push(duplicate)
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow(/duplicate records/i)
  })

  it('rejects duplicate collection IDs', () => {
    const document = backupDocument()
    document.state.collections = [
      { id: 'collection-1', name: 'First collection', lessonIds: ['curated-1'] },
      { id: 'collection-1', name: 'Second collection', lessonIds: ['wiki-1'] },
    ]
    expect(() => parseBackup(JSON.stringify(document), CURATED_IDS)).toThrow(/duplicate records/i)
  })
})

describe('prototype-like record keys', () => {
  const recordFields = [
    { field: 'completed', value: { date: DAY, correct: true } },
    { field: 'notes', value: 'Fixture note' },
    { field: 'reviews', value: { due: DAY, interval: 1, repetitions: 0 } },
  ] as const

  describe.each(recordFields)('$field', ({ field, value }) => {
    it.each(['__proto__', 'constructor', 'prototype'])('rejects the reserved key %s', (key) => {
      const document = backupDocument()
      // Define an own JSON key without invoking the __proto__ setter or changing Object.prototype.
      Object.defineProperty(document.state[field], key, { value, enumerable: true, configurable: true, writable: true })
      const text = JSON.stringify(document)
      expect(text).toContain(`"${key}":`)
      // Isolate key validation from missing-reference validation.
      const knownIds = new Set([...CURATED_IDS, key])
      expect(() => parseBackup(text, knownIds)).toThrow()
    })
  })
})

describe('discovery retention', () => {
  it.each([0, 3, 60, 61])('keeps at most 60 unprotected discoveries from an inventory of %i', (count) => {
    const all = datedDiscoveries(count)
    const library: LibrarySnapshot = { state: createInitialState(DAY), discoveries: [] }
    const retained = retainDiscoveries(library, [...all].reverse())
    expect(retained).toHaveLength(Math.min(count, 60))
    expect(ids(retained)).toEqual(ids(all.slice(Math.max(0, count - 60))))
  })

  it('keeps the newest publication dates across cached and incoming data, not just the latest arrivals', () => {
    const all = datedDiscoveries(90)
    const library: LibrarySnapshot = {
      state: createInitialState(DAY), discoveries: [...all.slice(30)].reverse(),
    }
    // Incoming articles are older than the cache and must not displace newer unprotected articles.
    const retained = retainDiscoveries(library, [...all.slice(0, 30)].reverse())
    expect(retained).toHaveLength(60)
    expect(ids(retained)).toEqual(ids(all.slice(30)))
  })

  it.each(references)('retains an old discovery referenced by %s beyond the recent 60', (_name, reference) => {
    const all = datedDiscoveries(90)
    const library: LibrarySnapshot = { state: createInitialState(DAY), discoveries: all.slice(0, 80) }
    reference(library.state, all[0]!.id)
    const retained = retainDiscoveries(library, all.slice(80))
    expect(retained).toHaveLength(61)
    expect(ids(retained)).toEqual(new Set([all[0]!.id, ...all.slice(30).map((lesson) => lesson.id)]))
    expect(retained.find((lesson) => lesson.id === all[0]!.id)).toEqual(all[0])
    expect(ids(retained).has(all[1]!.id)).toBe(false)
  })

  it('keeps all six reference types through successive refreshes while pruning unrelated old articles', () => {
    const all = datedDiscoveries(120)
    const library: LibrarySnapshot = { state: createInitialState(DAY), discoveries: all.slice(0, 75) }
    for (const [index, [, reference]] of references.entries()) reference(library.state, all[index]!.id)
    const first = retainDiscoveries(library, all.slice(75, 90))
    const second = retainDiscoveries({ state: library.state, discoveries: first }, all.slice(90))
    expect(first).toHaveLength(66)
    expect(second).toHaveLength(66)
    expect(ids(second)).toEqual(ids([...all.slice(0, 6), ...all.slice(60)]))
    for (const lesson of all.slice(0, 6)) {
      expect(second.find((retained) => retained.id === lesson.id)).toEqual(lesson)
    }
    expect(ids(second).has(all[6]!.id)).toBe(false)
  })

  it('deduplicates stable article IDs across cache and repeated incoming records', () => {
    const old = discovery(1, '2026-10-24')
    const updated = { ...discovery(1), title: 'Updated fixture article' }
    const other = discovery(2)
    const library: LibrarySnapshot = {
      state: { ...createInitialState(DAY), saved: [old.id] }, discoveries: [old],
    }
    const retained = retainDiscoveries(library, [updated, other, structuredClone(updated)])
    expect(retained).toHaveLength(2)
    expect(ids(retained)).toEqual(new Set([old.id, other.id]))
    expect(retained.find((lesson) => lesson.id === old.id)).toEqual(updated)
  })

  it('prunes delivered-only content without deleting the no-recycling ledger or breaking backup import', () => {
    const all = datedDiscoveries(90)
    const delivered = all.slice(0, 30).map((lesson) => lesson.id)
    const library: LibrarySnapshot = {
      state: { ...createInitialState(DAY), delivered: [...delivered] }, discoveries: all.slice(0, 70),
    }
    const retained = retainDiscoveries(library, all.slice(70))
    expect(ids(retained)).toEqual(ids(all.slice(30)))
    expect(library.state.delivered).toEqual(delivered)
    const pruned: LibrarySnapshot = { state: library.state, discoveries: retained }
    expect(parseBackup(serializeBackup(pruned), CURATED_IDS)).toEqual(pruned)
  })

  it('does not mutate state, cached article objects or the incoming array while merging and pruning', () => {
    const all = datedDiscoveries(90)
    const library: LibrarySnapshot = {
      state: { ...createInitialState(DAY), saved: [all[0]!.id] }, discoveries: [...all.slice(0, 75)].reverse(),
    }
    const incoming = [...all.slice(75)].reverse()
    const before = structuredClone({ library, incoming })
    retainDiscoveries(library, incoming)
    expect({ library, incoming }).toEqual(before)
  })
})