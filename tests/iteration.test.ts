// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest'
import { learningPaths, lessonById, lessons } from '../src/data'
import {
  clearReaderDraft, completeLesson, createInitialState, MAX_PLANNED_PRACTICES,
  saveReaderDraft, setPractice,
} from '../src/lib/learning'
import { backupSchema, editionSchema, lessonSchema, stateSchema } from '../src/lib/schema'
import { parseBackup, retainDiscoveries, serializeBackup } from '../src/lib/storage'
import type { LibrarySnapshot } from '../src/lib/storage'
import { matchesLesson, normalizeSearch, noteExcerpt } from '../src/lib/search'
import { cachedEdition, labelEdition, readDiscoveryResponse } from '../src/lib/discovery-client'
import type { AppState, DiscoveryEdition, Lesson, Practice, ReaderDraft } from '../src/types'

// Pure helpers only: no IndexedDB calls, browser downloads or live requests.
const DAY = '2026-10-25'
const PREVIOUS_DAY = '2026-10-24'
const NEXT_DAY = '2026-10-26'
const NOW = '2026-10-25T12:00:00.000Z'
const LATER = '2026-10-26T12:00:00.000Z'
const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' }
const CURATED_IDS = new Set(lessons.map((lesson) => lesson.id))

function original(id: string): Lesson {
  const lesson = lessonById.get(id)
  if (!lesson || lesson.kind || !lesson.quiz) throw new Error(`Expected a bundled original lesson: ${id}`)
  return lesson
}

const ORIGINAL = original('design-001')
const OTHER = original('design-002')
const COMPLETED = original('design-003')
const PRACTICE_IDS = Array.from({ length: 12 }, (_, index) => original(`design-${String(index + 1).padStart(3, '0')}`).id)

function draft(overrides: Partial<ReaderDraft> = {}): ReaderDraft {
  return { stage: 'read', choice: null, revealed: false, updatedAt: NOW, ...overrides }
}

function withHistory(): AppState {
  return {
    ...createInitialState('2026-10-22'), name: 'Fixture reader', xp: 25,
    completed: { [COMPLETED.id]: { date: '2026-10-22', correct: true } },
    reviews: { [COMPLETED.id]: { due: DAY, interval: 1, repetitions: 0, lastReviewed: PREVIOUS_DAY } },
    activity: { '2026-10-22': 1, [PREVIOUS_DAY]: 1 },
    saved: [OTHER.id],
    notes: {
      [ORIGINAL.id]: 'Compare the cup with its background.\nKeep this note.',
      [OTHER.id]: 'Mute the green instead of changing its hue.',
    },
    collections: [{ id: 'design-notes', name: 'Design notes', lessonIds: [OTHER.id] }],
    delivered: [COMPLETED.id, ORIGINAL.id, OTHER.id], daily: { date: DAY, ids: [ORIGINAL.id, OTHER.id] },
    reducedMotion: true, welcomeDismissed: true,
  }
}

function learningCredit(state: AppState) {
  return { xp: state.xp, completed: state.completed, activity: state.activity, reviews: state.reviews }
}

function discovery(number = 1, publishedAt = DAY): Lesson {
  // Schema-valid synthetic extracts, not copied encyclopedia claims or invented course quizzes.
  return {
    id: `wiki-${number}`, category: 'design', topic: 'Fixture reference',
    title: `Fixture article ${number}: café`, hook: 'Synthetic reference text for offline tests.',
    body: [
      'This is test text, not a factual encyclopedia claim.',
      'A second paragraph checks that the complete extract survives retention and export.',
    ],
    takeaway: 'External reference fixture, not an assessed practical lesson.',
    action: 'Record one question to investigate.',
    sources: [{ title: `Fixture article ${number}`, url: `https://en.wikipedia.org/wiki/Fixture_${number}`, publisher: 'Wikipedia' }],
    evidence: 'reference', kind: 'discovery', publishedAt,
    attribution: {
      author: 'Wikipedia contributors', license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      historyUrl: `https://en.wikipedia.org/w/index.php?title=Fixture_${number}&action=history`,
    },
  }
}

function edition(date = DAY, status: DiscoveryEdition['status'] = 'fresh'): DiscoveryEdition {
  return { date, status, lessons: status === 'unavailable' ? [] : [discovery(1, date)] }
}

function backupDocument(snapshot: LibrarySnapshot) {
  return { app: 'UNSCROLL', version: 1, exportedAt: NOW, ...snapshot }
}

function streamResponse(chunks: Uint8Array[], init: ResponseInit = { headers: JSON_HEADERS }) {
  let index = 0
  const pull = vi.fn((controller: ReadableStreamDefaultController<Uint8Array>) => {
    const chunk = chunks[index++]
    if (chunk === undefined) controller.close()
    else controller.enqueue(chunk)
  })
  const cancel = vi.fn()
  // Disable prefetch so pull counts measure what the response reader actually requests.
  const body = new ReadableStream<Uint8Array>({ pull, cancel }, { highWaterMark: 0 })
  return { response: new Response(body, init), body, pull, cancel }
}

afterEach(() => { vi.restoreAllMocks() })

describe('reader drafts', () => {
  it('saves unfinished reading without XP, completion, activity or review credit', () => {
    const state = withHistory()
    const before = structuredClone(state)
    const next = saveReaderDraft(state, ORIGINAL.id, { stage: 'read', choice: null, revealed: false }, NOW)
    expect(next).toEqual({ ...before, readerDrafts: { [ORIGINAL.id]: draft() } })
    expect(next.completed[ORIGINAL.id]).toBeUndefined()
    expect(learningCredit(next)).toEqual(learningCredit(before))
    expect(state).toEqual(before)
  })

  it('preserves stages, every answer index and reveal state through navigation changes', () => {
    const changes: Omit<ReaderDraft, 'updatedAt'>[] = [
      { stage: 'read', choice: null, revealed: false },
      { stage: 'try', choice: null, revealed: false },
      { stage: 'recall', choice: null, revealed: false },
      { stage: 'recall', choice: 0, revealed: false },
      { stage: 'recall', choice: 1, revealed: false },
      { stage: 'recall', choice: 2, revealed: false },
      { stage: 'recall', choice: 2, revealed: true },
      { stage: 'try', choice: 2, revealed: true },
    ]
    let state = withHistory()
    for (const [index, change] of changes.entries()) {
      const before = structuredClone(state)
      const updatedAt = new Date(Date.UTC(2026, 9, 25, 12, index)).toISOString()
      const next = saveReaderDraft(state, ORIGINAL.id, change, updatedAt)
      expect(next.readerDrafts?.[ORIGINAL.id]).toEqual({ ...change, updatedAt })
      expect(stateSchema.safeParse(next).success).toBe(true)
      expect(learningCredit(next)).toEqual(learningCredit(before))
      expect(state).toEqual(before)
      expect(change).not.toHaveProperty('updatedAt')
      state = next
    }
  })

  it('returns the same state and timestamp when only the save time changes', () => {
    const value = { stage: 'recall', choice: 0, revealed: true } as const
    const state = saveReaderDraft(withHistory(), ORIGINAL.id, value, NOW)
    const unchanged = saveReaderDraft(state, ORIGINAL.id, { ...value }, LATER)
    expect(unchanged).toBe(state)
    expect(unchanged.readerDrafts?.[ORIGINAL.id]?.updatedAt).toBe(NOW)
  })

  it('saves a changed lesson revision even when the stage, answer and reveal state are unchanged', () => {
    expect(ORIGINAL.revision).toBeTruthy()
    const value = { stage: 'recall', choice: 0, revealed: true } as const
    const baseline: AppState = { ...withHistory(), readerDrafts: { [OTHER.id]: draft({ stage: 'try' }) } }
    for (const previousRevision of [undefined, 'fixture-previous-revision']) {
      expect(previousRevision).not.toBe(ORIGINAL.revision)
      const previous = { ...value, ...(previousRevision ? { lessonRevision: previousRevision } : {}) }
      const state = saveReaderDraft(baseline, ORIGINAL.id, previous, NOW)
      const before = structuredClone(state)
      const current = { ...value, lessonRevision: ORIGINAL.revision! }
      const next = saveReaderDraft(state, ORIGINAL.id, current, LATER)
      expect(next).not.toBe(state)
      expect(next).toEqual({ ...before, readerDrafts: {
        ...before.readerDrafts, [ORIGINAL.id]: { ...current, updatedAt: LATER },
      } })
      expect(stateSchema.safeParse(next).success).toBe(true)
      expect(learningCredit(next)).toEqual(learningCredit(before))
      expect(saveReaderDraft(next, ORIGINAL.id, { ...current }, '2026-10-27T12:00:00.000Z')).toBe(next)
      expect(next.readerDrafts?.[ORIGINAL.id]?.updatedAt).toBe(LATER)
      expect(state).toEqual(before)
      expect(previous).not.toHaveProperty('updatedAt')
      expect(current).not.toHaveProperty('updatedAt')
    }
  })

  it('ignores draft saves for completed lessons without disturbing another unfinished lesson', () => {
    const completed = completeLesson(withHistory(), ORIGINAL, true, DAY)
    const state = saveReaderDraft(completed, OTHER.id, { stage: 'try', choice: null, revealed: false }, NOW)
    const before = structuredClone(state)
    expect(saveReaderDraft(state, ORIGINAL.id, { stage: 'recall', choice: 1, revealed: true }, LATER)).toBe(state)
    expect(state.readerDrafts).not.toHaveProperty(ORIGINAL.id)
    expect(state).toEqual(before)
  })

  it('completes once, clearing only its own draft and retaining the other draft and both notes', () => {
    const state: AppState = {
      ...withHistory(),
      readerDrafts: {
        [ORIGINAL.id]: draft({ stage: 'recall', choice: 0, revealed: true }),
        [OTHER.id]: draft({ stage: 'try' }),
      },
    }
    const before = structuredClone(state)
    const completed = completeLesson(state, ORIGINAL, true, DAY)
    expect(completed.readerDrafts).toEqual({ [OTHER.id]: before.readerDrafts![OTHER.id] })
    expect(completed.completed[ORIGINAL.id]).toEqual({ date: DAY, correct: true })
    expect(completed.reviews[ORIGINAL.id]).toEqual({ due: NEXT_DAY, interval: 1, repetitions: 0 })
    expect(completed.xp).toBe(before.xp + 20)
    expect(completed.activity).toEqual({ ...before.activity, [DAY]: 1 })
    expect(completed.notes).toEqual(before.notes)
    expect(completeLesson(completed, ORIGINAL, false, NEXT_DAY)).toBe(completed)
    expect(state).toEqual(before)
  })

  it('discards a draft without deleting notes or practice and removes the final optional draft map', () => {
    const baseline: AppState = {
      ...withHistory(), readerDrafts: { [OTHER.id]: draft({ stage: 'try' }) },
      practices: { [ORIGINAL.id]: { status: 'planned', plannedOn: DAY } },
    }
    const state = saveReaderDraft(baseline, ORIGINAL.id, { stage: 'recall', choice: 2, revealed: true }, NOW)
    const before = structuredClone(state)
    const discarded = clearReaderDraft(state, ORIGINAL.id)
    expect(discarded).toEqual(baseline)
    const empty = clearReaderDraft(discarded, OTHER.id)
    expect(empty).not.toHaveProperty('readerDrafts')
    expect(empty.notes).toEqual(before.notes)
    expect(empty.practices).toEqual(before.practices)
    expect(learningCredit(empty)).toEqual(learningCredit(before))
    expect(state).toEqual(before)
  })

  it('treats clearing a missing draft as an identity-preserving no-op', () => {
    const withoutDrafts = withHistory()
    const withOtherDraft: AppState = { ...withHistory(), readerDrafts: { [OTHER.id]: draft() } }
    expect(clearReaderDraft(withoutDrafts, ORIGINAL.id)).toBe(withoutDrafts)
    expect(clearReaderDraft(withOtherDraft, ORIGINAL.id)).toBe(withOtherDraft)
  })
})

describe('self-reported practice', () => {
  it('allows five planned items and rejects both a sixth plan and an undo into a full list atomically', () => {
    let state = createInitialState(DAY)
    for (const id of PRACTICE_IDS.slice(0, 5)) state = setPractice(state, id, 'planned', DAY)
    expect(MAX_PLANNED_PRACTICES).toBe(5)
    expect(Object.values(state.practices!)).toHaveLength(5)
    const before = structuredClone(state)
    expect(() => setPractice(state, PRACTICE_IDS[5]!, 'planned', DAY)).toThrow(/five/i)
    expect(setPractice(state, PRACTICE_IDS[0]!, 'planned', NEXT_DAY)).toBe(state)
    expect(state).toEqual(before)
    const withTried = setPractice(state, PRACTICE_IDS[5]!, 'tried', DAY)
    const beforeUndo = structuredClone(withTried)
    expect(() => setPractice(withTried, PRACTICE_IDS[5]!, 'planned', NEXT_DAY)).toThrow(/five/i)
    expect(withTried).toEqual(beforeUndo)
  })

  it('does not cap tried records or count them toward five plans, and trying a plan frees a slot', () => {
    const initial = createInitialState(DAY)
    let state = initial
    for (const id of PRACTICE_IDS.slice(0, 6)) state = setPractice(state, id, 'tried', PREVIOUS_DAY)
    for (const id of PRACTICE_IDS.slice(6, 11)) state = setPractice(state, id, 'planned', DAY)
    expect(Object.values(state.practices!).filter((item) => item.status === 'tried')).toHaveLength(6)
    expect(Object.values(state.practices!).filter((item) => item.status === 'planned')).toHaveLength(5)
    const before = structuredClone(state)
    const tried = setPractice(state, PRACTICE_IDS[6]!, 'tried', NEXT_DAY)
    const replenished = setPractice(tried, PRACTICE_IDS[11]!, 'planned', NEXT_DAY)
    expect(Object.values(replenished.practices!).filter((item) => item.status === 'tried')).toHaveLength(7)
    expect(Object.values(replenished.practices!).filter((item) => item.status === 'planned')).toHaveLength(5)
    expect(learningCredit(replenished)).toEqual(learningCredit(initial))
    expect(state).toEqual(before)
  })

  it('records supplied calendar dates, retains the original plan date and handles a backwards clock', () => {
    const planned = setPractice(withHistory(), ORIGINAL.id, 'planned', DAY)
    expect(planned.practices?.[ORIGINAL.id]).toEqual({ status: 'planned', plannedOn: DAY })
    const tried = setPractice(planned, ORIGINAL.id, 'tried', NEXT_DAY)
    expect(tried.practices?.[ORIGINAL.id]).toEqual({ status: 'tried', plannedOn: DAY, triedOn: NEXT_DAY })
    const direct = setPractice(withHistory(), OTHER.id, 'tried', DAY)
    expect(direct.practices?.[OTHER.id]).toEqual({ status: 'tried', plannedOn: DAY, triedOn: DAY })
    const futurePlan = setPractice(withHistory(), ORIGINAL.id, 'planned', NEXT_DAY)
    const earlierTry = setPractice(futurePlan, ORIGINAL.id, 'tried', DAY)
    expect(earlierTry.practices?.[ORIGINAL.id]).toEqual({ status: 'tried', plannedOn: DAY, triedOn: DAY })
    for (const state of [planned, tried, direct, earlierTry]) expect(stateSchema.safeParse(state).success).toBe(true)
  })

  it('keeps repeated planned, tried and missing-removal requests idempotent even on a later date', () => {
    const initial = withHistory()
    const planned = setPractice(initial, ORIGINAL.id, 'planned', DAY)
    const tried = setPractice(planned, ORIGINAL.id, 'tried', NEXT_DAY)
    expect(setPractice(planned, ORIGINAL.id, 'planned', '2026-11-01')).toBe(planned)
    expect(setPractice(tried, ORIGINAL.id, 'tried', '2026-11-01')).toBe(tried)
    expect(setPractice(initial, ORIGINAL.id, null, NEXT_DAY)).toBe(initial)
    expect(tried.practices?.[ORIGINAL.id]?.triedOn).toBe(NEXT_DAY)
  })

  it('undoes tried by removing triedOn without resetting plannedOn or awarding learning credit', () => {
    const planned = setPractice(withHistory(), ORIGINAL.id, 'planned', DAY)
    const tried = setPractice(planned, ORIGINAL.id, 'tried', NEXT_DAY)
    const before = structuredClone(tried)
    const undone = setPractice(tried, ORIGINAL.id, 'planned', '2026-10-27')
    expect(undone.practices?.[ORIGINAL.id]).toEqual({ status: 'planned', plannedOn: DAY })
    expect(undone.practices?.[ORIGINAL.id]).not.toHaveProperty('triedOn')
    expect(learningCredit(undone)).toEqual(learningCredit(before))
    expect(stateSchema.safeParse(undone).success).toBe(true)
    expect(tried).toEqual(before)
  })

  it('removes only the requested practice and cleans up an empty map without losing notes or drafts', () => {
    const initial: AppState = { ...withHistory(), readerDrafts: { [ORIGINAL.id]: draft() } }
    const planned = setPractice(initial, ORIGINAL.id, 'planned', DAY)
    const state = setPractice(planned, OTHER.id, 'tried', DAY)
    const before = structuredClone(state)
    const removed = setPractice(state, ORIGINAL.id, null, NEXT_DAY)
    expect(removed.practices).toEqual({ [OTHER.id]: before.practices![OTHER.id] })
    const cleared = setPractice(removed, OTHER.id, null, NEXT_DAY)
    expect(cleared).toEqual(initial)
    expect(cleared).not.toHaveProperty('practices')
    expect(setPractice(cleared, OTHER.id, null, NEXT_DAY)).toBe(cleared)
    expect(state).toEqual(before)
  })

  it('does not edit completion, XP, activity or a due review during a completed lesson practice lifecycle', () => {
    const initial = withHistory()
    const before = structuredClone(initial)
    let state = initial
    for (const status of ['planned', 'tried', 'planned', null] as const) {
      const previous = structuredClone(state)
      const next = setPractice(state, COMPLETED.id, status, DAY)
      expect(learningCredit(next)).toEqual(learningCredit(before))
      expect(next.notes).toEqual(before.notes)
      expect(next.daily).toEqual(before.daily)
      expect(state).toEqual(previous)
      state = next
    }
    expect(state).toEqual(before)
    expect(initial).toEqual(before)
  })
})

describe('backup and validation compatibility', () => {
  it('round-trips an old version 1 backup without inserting optional draft or practice fields', () => {
    const legacy: LibrarySnapshot = { state: withHistory(), discoveries: [discovery()] }
    const before = structuredClone(legacy)
    const restored = parseBackup(JSON.stringify(backupDocument(legacy)), CURATED_IDS)
    expect(restored).toEqual(legacy)
    expect(restored.state.version).toBe(1)
    expect(restored.state).not.toHaveProperty('readerDrafts')
    expect(restored.state).not.toHaveProperty('practices')
    expect(restored.state).not.toHaveProperty('followedPath')
    expect(parseBackup(serializeBackup(restored), CURATED_IDS)).toEqual(legacy)
    expect(legacy).toEqual(before)
  })

  it('round-trips legacy and older-revision drafts without silently migrating saved answers', () => {
    expect(ORIGINAL.revision).toBeTruthy()
    const article = discovery(11, PREVIOUS_DAY)
    for (const previousRevision of [undefined, 'fixture-previous-revision']) {
      expect(previousRevision).not.toBe(ORIGINAL.revision)
      const legacy: LibrarySnapshot = {
        state: { ...withHistory(), readerDrafts: {
          [ORIGINAL.id]: draft({ stage: 'recall', choice: 0, revealed: true,
            ...(previousRevision ? { lessonRevision: previousRevision } : {}) }),
          [article.id]: draft({ stage: 'recall', revealed: true }),
        } },
        discoveries: [article],
      }
      const before = structuredClone(legacy)
      const restored = parseBackup(JSON.stringify(backupDocument(legacy)), CURATED_IDS)
      expect(restored).toStrictEqual(before)
      expect(restored.state.readerDrafts?.[ORIGINAL.id]?.lessonRevision).toBe(previousRevision)
      if (previousRevision === undefined) expect(restored.state.readerDrafts![ORIGINAL.id]).not.toHaveProperty('lessonRevision')
      expect(restored.state.readerDrafts![article.id]).not.toHaveProperty('lessonRevision')
      expect(parseBackup(serializeBackup(restored), CURATED_IDS)).toStrictEqual(before)
      expect(legacy).toStrictEqual(before)
    }
  })

  it('round-trips original and external drafts, planned and tried records, and full attributed extracts', () => {
    expect(ORIGINAL.revision).toBeTruthy()
    const older = discovery(11, PREVIOUS_DAY)
    const newer = discovery(12)
    const state: AppState = {
      ...withHistory(), followedPath: 'colour',
      readerDrafts: {
        [ORIGINAL.id]: draft({ stage: 'recall', choice: 0, revealed: true, lessonRevision: ORIGINAL.revision! }),
        [older.id]: draft({ stage: 'recall', choice: null, revealed: true }),
      },
      practices: {
        [OTHER.id]: { status: 'planned', plannedOn: DAY },
        [older.id]: { status: 'planned', plannedOn: PREVIOUS_DAY },
        [newer.id]: { status: 'tried', plannedOn: PREVIOUS_DAY, triedOn: DAY },
      },
    }
    state.notes[older.id] = 'Café reflection.\nKeep the complete extract and its attribution offline.'
    state.saved.push(newer.id)
    const snapshot: LibrarySnapshot = { state, discoveries: [older, newer] }
    const before = structuredClone(snapshot)
    const restored = parseBackup(serializeBackup(snapshot), CURATED_IDS)
    expect(restored).toEqual(before)
    expect(restored.state.version).toBe(1)
    expect(restored.state.readerDrafts?.[ORIGINAL.id]?.lessonRevision).toBe(ORIGINAL.revision)
    expect(restored.state.readerDrafts![older.id]).not.toHaveProperty('lessonRevision')
    for (const article of restored.discoveries) {
      expect(article.body).toHaveLength(2)
      expect(article.attribution).toEqual(snapshot.discoveries.find((item) => item.id === article.id)!.attribution)
      expect(article.quiz).toBeUndefined()
    }
    expect(snapshot).toEqual(before)
  })

  it('retains old draft, planned and tried discoveries beyond the recent 60 through successive refreshes and export', () => {
    const all = Array.from({ length: 120 }, (_, index) => discovery(
      index + 1, new Date(Date.UTC(2026, 0, index + 1)).toISOString().slice(0, 10),
    ))
    const snapshot: LibrarySnapshot = {
      state: {
        ...createInitialState(DAY), readerDrafts: { [all[0]!.id]: draft({ stage: 'try' }) },
        practices: {
          [all[1]!.id]: { status: 'planned', plannedOn: PREVIOUS_DAY },
          [all[2]!.id]: { status: 'tried', plannedOn: PREVIOUS_DAY, triedOn: DAY },
        },
      },
      discoveries: all.slice(0, 80),
    }
    const before = structuredClone({ snapshot, all })
    const first = retainDiscoveries(snapshot, all.slice(80, 100))
    const retained = retainDiscoveries({ state: snapshot.state, discoveries: first }, all.slice(100))
    expect(first).toHaveLength(63)
    expect(retained).toHaveLength(63)
    expect(new Set(retained.map((lesson) => lesson.id))).toEqual(new Set([...all.slice(0, 3), ...all.slice(60)].map((lesson) => lesson.id)))
    for (const article of all.slice(0, 3)) expect(retained.find((item) => item.id === article.id)).toEqual(article)
    expect(retained.some((lesson) => lesson.id === all[3]!.id)).toBe(false)
    const protectedSnapshot = { state: snapshot.state, discoveries: retained }
    expect(parseBackup(serializeBackup(protectedSnapshot), CURATED_IDS)).toEqual(protectedSnapshot)
    expect({ snapshot, all }).toEqual(before)
  })

  it('rejects missing lesson references in either new record map instead of returning an importable snapshot', () => {
    const missing = 'missing-iteration-lesson'
    expect(CURATED_IDS.has(missing)).toBe(false)
    for (const field of ['readerDrafts', 'practices'] as const) {
      const snapshot: LibrarySnapshot = { state: withHistory(), discoveries: [discovery()] }
      if (field === 'readerDrafts') snapshot.state.readerDrafts = { [missing]: draft() }
      else snapshot.state.practices = { [missing]: { status: 'planned', plannedOn: DAY } }
      const before = structuredClone(snapshot)
      // Isolate reference integrity from record-shape validation.
      expect(stateSchema.safeParse(snapshot.state).success, field).toBe(true)
      expect(() => parseBackup(serializeBackup(snapshot), CURATED_IDS), field).toThrow(/references missing lessons/i)
      expect(snapshot).toEqual(before)
    }
  })

  it('validates draft stages, answer bounds, reveal booleans and timestamps without accepting extra fields', () => {
    const valid = draft({ stage: 'recall', choice: 0, revealed: true })
    expect(stateSchema.safeParse({ ...withHistory(), readerDrafts: { [ORIGINAL.id]: valid } }).success).toBe(true)
    for (const lessonRevision of [ORIGINAL.revision, 'r'.repeat(60)]) {
      expect(stateSchema.safeParse({ ...withHistory(), readerDrafts: { [ORIGINAL.id]: { ...valid, lessonRevision } } }).success).toBe(true)
    }
    const invalid: [string, unknown][] = [
      ['completed stage', { ...valid, stage: 'done' }],
      ['negative choice', { ...valid, choice: -1 }],
      ['fourth choice', { ...valid, choice: 3 }],
      ['string choice', { ...valid, choice: '0' }],
      ['string reveal flag', { ...valid, revealed: 'true' }],
      ['date instead of timestamp', { ...valid, updatedAt: DAY }],
      ['malformed timestamp', { ...valid, updatedAt: 'not-a-timestamp' }],
      ['numeric revision', { ...valid, lessonRevision: 1 }],
      ['null revision', { ...valid, lessonRevision: null }],
      ['overlong revision', { ...valid, lessonRevision: 'r'.repeat(61) }],
      ['extra reward field', { ...valid, xp: 20 }],
    ]
    for (const [name, value] of invalid) {
      expect(stateSchema.safeParse({ ...withHistory(), readerDrafts: { [ORIGINAL.id]: value } }).success, name).toBe(false)
    }
  })

  it('requires real practice calendar dates and triedOn to agree with status and plannedOn', () => {
    const valid: Practice[] = [
      { status: 'planned', plannedOn: '2024-02-29' },
      { status: 'tried', plannedOn: '2024-02-29', triedOn: '2024-02-29' },
      { status: 'tried', plannedOn: '2024-02-29', triedOn: '2024-03-01' },
    ]
    const check = (value: unknown) => stateSchema.safeParse({
      ...createInitialState('2024-02-29'), practices: { [ORIGINAL.id]: value },
    }).success
    for (const value of valid) expect(check(value)).toBe(true)
    const invalid: [string, unknown][] = [
      ['nonexistent plan date', { status: 'planned', plannedOn: '2026-02-29' }],
      ['malformed plan date', { status: 'planned', plannedOn: 'tomorrow' }],
      ['nonexistent tried date', { status: 'tried', plannedOn: DAY, triedOn: '2026-11-31' }],
      ['missing tried date', { status: 'tried', plannedOn: DAY }],
      ['tried date on a plan', { status: 'planned', plannedOn: DAY, triedOn: DAY }],
      ['tried before planned', { status: 'tried', plannedOn: DAY, triedOn: PREVIOUS_DAY }],
    ]
    for (const [name, value] of invalid) expect(check(value), name).toBe(false)
  })

  it('requires the actual Wikipedia author, license and history attribution rather than merely nonempty fields', () => {
    const article = discovery()
    expect(lessonSchema.safeParse(article).success).toBe(true)
    const attribution = article.attribution!
    const invalid = [
      undefined,
      { ...attribution, author: 'UNSCROLL' },
      { ...attribution, license: 'CC BY 4.0' },
      { ...attribution, licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' },
      { ...attribution, historyUrl: 'https://en.wikipedia.org/wiki/Fixture_1' },
      { ...attribution, historyUrl: 'https://en.wikipedia.org/w/index.php?title=Fixture_1&action=view' },
      { ...attribution, historyUrl: 'https://en.wikipedia.org/w/index.php?action=history' },
      { ...attribution, historyUrl: 'https://en.wikipedia.org.example/w/index.php?title=Fixture_1&action=history' },
    ]
    for (const value of invalid) expect(lessonSchema.safeParse({ ...article, attribution: value }).success).toBe(false)
    const foreignSource = { ...article, sources: [{ ...article.sources[0]!, url: 'https://en.wikipedia.org.example/wiki/Fixture_1' }] }
    expect(lessonSchema.safeParse(foreignSource).success).toBe(false)
  })

  it('makes safeParse return failure, not throw, for broken source, license and history URLs at every envelope level', () => {
    const fields: [string, (article: Lesson, url: string) => void][] = [
      ['source', (article, url) => { article.sources[0]!.url = url }],
      ['license', (article, url) => { article.attribution!.licenseUrl = url }],
      ['history', (article, url) => { article.attribution!.historyUrl = url }],
    ]
    for (const [field, change] of fields) for (const url of ['not a URL', 'https://[', '/wiki/Fixture_1', 'javascript:alert(1)']) {
      const article = discovery()
      change(article, url)
      const checks: [string, () => { success: boolean }][] = [
        ['lesson', () => lessonSchema.safeParse(article)],
        ['edition', () => editionSchema.safeParse({ ...edition(), lessons: [article] })],
        ['backup', () => backupSchema.safeParse(backupDocument({ state: withHistory(), discoveries: [article] }))],
      ]
      for (const [level, check] of checks) {
        let success: boolean | undefined
        const context = `${level}: ${field}: ${url}`
        expect(() => { success = check().success }, context).not.toThrow()
        expect(success, context).toBe(false)
      }
    }
  })

  it('rejects duplicate article IDs and publication dates that disagree with the edition date', () => {
    const valid = edition()
    const article = valid.lessons[0]!
    expect(editionSchema.safeParse(valid).success).toBe(true)
    for (const duplicate of [structuredClone(article), { ...article, title: 'Conflicting fixture title' }]) {
      expect(editionSchema.safeParse({ ...valid, lessons: [article, duplicate] }).success).toBe(false)
    }
    expect(editionSchema.safeParse({ ...valid, date: NEXT_DAY }).success).toBe(false)
    expect(editionSchema.safeParse({ ...valid, lessons: [article, discovery(2, PREVIOUS_DAY)] }).success).toBe(false)
  })

  it('keeps external extracts separate from original lessons and does not invent factual quizzes for them', () => {
    const article = discovery()
    expect(lessonSchema.safeParse(ORIGINAL).success).toBe(true)
    expect(lessonSchema.safeParse(article).success).toBe(true)
    expect(article.quiz).toBeUndefined()
    expect(lessonSchema.safeParse({ ...article, quiz: ORIGINAL.quiz }).success).toBe(false)
    expect(ORIGINAL.guide).toBeDefined()
    expect(ORIGINAL.revision).toBeTruthy()
    expect(lessonSchema.safeParse({ ...article, guide: ORIGINAL.guide }).success).toBe(false)
    expect(lessonSchema.safeParse({ ...article, revision: ORIGINAL.revision }).success).toBe(false)
    for (const evidence of ['research', 'framework']) {
      expect(lessonSchema.safeParse({ ...article, evidence }).success).toBe(false)
    }
    expect(editionSchema.safeParse({ ...edition(), lessons: [ORIGINAL] }).success).toBe(false)
    expect(() => parseBackup(serializeBackup({ state: withHistory(), discoveries: [ORIGINAL] }), CURATED_IDS)).toThrow(/invalid discovery content/i)
  })
})

describe('library search and note excerpts', () => {
  it('normalizes NFKD accents and compatibility characters, color spelling, case and whitespace', () => {
    const normalized = normalizeSearch(' \tＣＯＬＯＵＲ  café cafe\u0301 \nColor THEORY ')
    expect(normalized).toBe('color cafe cafe color theory')
    expect(normalizeSearch(normalized)).toBe(normalized)
  })

  it('matches every query term across actual lesson fields without requiring a contiguous phrase', () => {
    expect(matchesLesson(ORIGINAL, '  ORCHARD\nPÉAR\tCOLOUR ')).toBe(true)
    expect(matchesLesson(ORIGINAL, 'pear orchard')).toBe(true)
    expect(matchesLesson(ORIGINAL, 'pear xylophone')).toBe(false)
    expect(matchesLesson(ORIGINAL, ' \n\t ')).toBe(true)
  })

  it('matches supplied real learning-path context without pretending it belongs to the lesson text', () => {
    const path = learningPaths.find((entry) => entry.id === 'colour')
    expect(path).toBeDefined()
    expect(path!.lessonIds).toContain(ORIGINAL.id)
    const context = `${path!.title} ${path!.description} ${path!.inspiration}`
    expect(matchesLesson(ORIGINAL, 'blackmagic orchard pear colour')).toBe(false)
    expect(matchesLesson(ORIGINAL, 'blackmagic orchard pear colour', context)).toBe(true)
    expect(matchesLesson(ORIGINAL, 'blackmagic xylophone', context)).toBe(false)
  })

  it('searches long prose and each guide-only field using isolated, schema-valid fixtures', () => {
    // Do not spread ORIGINAL and only replace its body: its guide would still contribute search text.
    const fixture: Lesson = {
      id: 'search-001', category: 'design', topic: 'Fixture search', title: 'Fixture color comparison',
      hook: 'Synthetic search fixture.', body: [
        'Synthetic fixture text. '.repeat(60).trim(),
        `${'More fixture text. '.repeat(60)}lastbodymarker.`,
      ],
      action: 'Write a fixture observation.', takeaway: 'Keep the fixture separate from real teaching.', evidence: 'framework',
      quiz: { question: 'Which fixture option is designated?', options: ['First', 'Second', 'Third'], correctIndex: 0, explanation: 'The first is designated for this fixture.' },
      sources: [{ title: 'Fixture source', url: 'https://example.org/fixture', publisher: 'Fixture publisher' }],
    }
    const guide: NonNullable<Lesson['guide']> = {
      id: fixture.id, outcome: fixture.hook, scene: 'Synthetic fixture comparison.',
      sections: fixture.body.map((paragraph, index) => ({ title: `Fixture section ${index + 1}`, paragraphs: [paragraph] })),
      visuals: [{ type: 'comparison', title: 'Fixture diagram', alt: 'Two synthetic fixture labels.', caption: 'Compare the fixture labels.',
        items: [{ label: 'First', detail: 'First fixture detail.' }, { label: 'Second', detail: 'Second fixture detail.' }] }],
      practice: { minutes: 3, needs: ['Paper'], steps: ['Draw a fixture.', 'Label the fixture.', 'Compare the labels.'],
        notice: 'Inspect the fixture labels.', troubleshooting: 'Check the fixture again.' },
      recall: { prompt: 'What changed in the fixture?', answer: 'The fixture label changed.', hint: 'Compare both labels.' },
      quiz: fixture.quiz!, takeaway: fixture.takeaway, sourceNote: 'Synthetic content for search tests only.',
    }
    const before = structuredClone({ fixture, guide })
    expect(lessonSchema.safeParse(fixture).success).toBe(true)
    expect(fixture).not.toHaveProperty('guide')
    expect(matchesLesson(fixture, 'LASTBODYMÁRKER colour')).toBe(true)
    const needle = 'guideonlymarker'
    const fields: [string, (value: NonNullable<Lesson['guide']>) => void][] = [
      ['practice notice', (value) => { value.practice.notice = needle }],
      ['practice troubleshooting', (value) => { value.practice.troubleshooting = needle }],
      ['recall prompt', (value) => { value.recall.prompt = needle }],
      ['recall answer', (value) => { value.recall.answer = needle }],
      ['visual title', (value) => { value.visuals[0]!.title = needle }],
      ['visual caption', (value) => { value.visuals[0]!.caption = needle }],
      ['visual item label', (value) => { value.visuals[0]!.items[0]!.label = needle }],
      ['visual item detail', (value) => { value.visuals[0]!.items[0]!.detail = needle }],
    ]
    for (const [field, change] of fields) {
      const candidate = { ...structuredClone(fixture), guide: structuredClone(guide) }
      expect(matchesLesson(candidate, needle), field).toBe(false)
      change(candidate.guide)
      expect(lessonSchema.safeParse(candidate).success, field).toBe(true)
      expect(matchesLesson(candidate, `${needle} colour lastbodymarker`), field).toBe(true)
      expect(matchesLesson(candidate, `${needle} xylophone`), field).toBe(false)
      expect(matchesLesson({ ...candidate, guide: undefined }, needle), field).toBe(false)
    }
    expect({ fixture, guide }).toEqual(before)
  })

  it('compacts note whitespace, truncates at a word boundary and bounds a single unbroken word', () => {
    const text = '\n  Compare   the\tgray scrap against\nits actual neighbors.  '
    expect(noteExcerpt(text, 24)).toBe('Compare the gray scrap…')
    expect(noteExcerpt(' \tcolor  pencil\n ', 12)).toBe('color pencil')
    expect(noteExcerpt(' \n\t ')).toBe('')
    expect(noteExcerpt('x'.repeat(25), 10)).toBe(`${'x'.repeat(10)}…`)
    const long = noteExcerpt('Compare the gray scrap. '.repeat(20))
    expect(long.length).toBeLessThanOrEqual(241)
    expect(long.endsWith('…')).toBe(true)
  })
})

describe('discovery edition labels', () => {
  it('labels both stale and future server editions cached instead of fresh for today', () => {
    for (const date of [PREVIOUS_DAY, NEXT_DAY]) {
      const received = edition(date)
      const before = structuredClone(received)
      const labeled = labelEdition(received, DAY, true)
      expect(labeled.status).toBe('cached')
      expect(labeled.date).toBe(date)
      expect(labeled.lessons).toEqual(before.lessons)
      expect(labeled.message).toContain(date)
      expect(received).toEqual(before)
    }
  })

  it('keeps current online editions as returned, including an already cached status and message', () => {
    for (const status of ['fresh', 'cached'] as const) {
      const received = { ...edition(DAY, status), message: 'Fixture server status.' }
      expect(labelEdition(received, DAY, true)).toBe(received)
      expect(received.status).toBe(status)
    }
  })

  it('labels a current offline edition cached without changing its date or full lesson content', () => {
    const received = edition()
    const before = structuredClone(received)
    const labeled = labelEdition(received, DAY, false)
    expect(labeled.status).toBe('cached')
    expect(labeled.date).toBe(DAY)
    expect(labeled.lessons).toEqual(before.lessons)
    expect(labeled.message).toContain(DAY)
    expect(received).toEqual(before)
  })

  it('keeps an empty cache unavailable and does not promote empty unavailable editions online or offline', () => {
    const empty = cachedEdition([], DAY)
    expect(empty).toMatchObject({ date: DAY, status: 'unavailable', lessons: [] })
    expect(empty.message).toBeTruthy()
    for (const online of [true, false]) {
      expect(labelEdition(empty, NEXT_DAY, online)).toBe(empty)
      const received = edition(PREVIOUS_DAY, 'unavailable')
      expect(labelEdition(received, DAY, online)).toBe(received)
    }
  })

  it('builds a cached snapshot from at most six items of its latest real publication date, not today', () => {
    const latest = Array.from({ length: 8 }, (_, index) => discovery(index + 10, PREVIOUS_DAY))
    const downloaded = [discovery(1, '2026-10-20'), latest[0]!, discovery(2, '2026-10-23'), ...latest.slice(1)]
    const before = structuredClone(downloaded)
    const cached = cachedEdition(downloaded, DAY)
    expect(cached.status).toBe('cached')
    expect(cached.date).toBe(PREVIOUS_DAY)
    expect(cached.lessons).toHaveLength(6)
    expect(cached.lessons).toEqual(latest.slice(0, 6))
    expect(cached.lessons.every((lesson) => lesson.publishedAt === PREVIOUS_DAY)).toBe(true)
    expect(cached.message).toContain(PREVIOUS_DAY)
    expect(editionSchema.safeParse(cached).success).toBe(true)
    expect(downloaded).toEqual(before)
  })
})

describe('bounded discovery response reading', () => {
  it('accepts the exact byte limit and decodes a multibyte character split across streamed chunks', async () => {
    const expected = edition()
    const bytes = new TextEncoder().encode(JSON.stringify(expected))
    const accent = bytes.indexOf(0xc3)
    expect(accent).toBeGreaterThanOrEqual(0)
    const { response, body, cancel } = streamResponse([bytes.subarray(0, accent + 1), bytes.subarray(accent + 1)])
    const bulkReads = [vi.spyOn(response, 'text'), vi.spyOn(response, 'json'), vi.spyOn(response, 'arrayBuffer')]
    await expect(readDiscoveryResponse(response, bytes.byteLength)).resolves.toEqual(expected)
    for (const read of bulkReads) expect(read).not.toHaveBeenCalled()
    expect(cancel).not.toHaveBeenCalled()
    expect(body.locked).toBe(false)
  })

  it('accepts a JSON 503 unavailable edition so its empty state and date remain usable', async () => {
    const expected = { ...edition(DAY, 'unavailable'), message: 'No new reference is available.' }
    const response = Response.json(expected, { status: 503 })
    expect(response.ok).toBe(false)
    await expect(readDiscoveryResponse(response)).resolves.toEqual(expected)
  })

  it('rejects non-JSON content types, missing types, failed HTTP statuses and absent bodies before reading', async () => {
    const bytes = new TextEncoder().encode(JSON.stringify(edition()))
    const invalid: ResponseInit[] = [
      { headers: { 'Content-Type': 'text/html' } },
      { headers: {} },
      { status: 502, headers: JSON_HEADERS },
    ]
    for (const init of invalid) {
      const { response, body, pull } = streamResponse([bytes], init)
      try {
        await expect(readDiscoveryResponse(response)).rejects.toThrow('Discovery response unavailable')
        expect(pull).not.toHaveBeenCalled()
        expect(body.locked).toBe(false)
      } finally { await body.cancel() }
    }
    await expect(readDiscoveryResponse(new Response(null, { headers: JSON_HEADERS }))).rejects.toThrow('Empty discovery response')
  })

  it('rejects malformed JSON and valid JSON with an invalid edition shape after releasing the reader', async () => {
    const invalid = ['{', 'null', '{}', JSON.stringify({ ...edition(), date: '2026-02-30' })]
    for (const text of invalid) {
      const { response, body } = streamResponse([new TextEncoder().encode(text)])
      await expect(readDiscoveryResponse(response)).rejects.toThrow()
      expect(body.locked).toBe(false)
    }
  })

  it('rejects oversized Content-Length before acquiring a reader without allocating the declared body', async () => {
    // Exercise the default 300,000-byte boundary and a huge declaration using only two payload bytes.
    for (const declared of [300_001, Number.MAX_SAFE_INTEGER]) {
      const { response, body, pull, cancel } = streamResponse([new TextEncoder().encode('{}')], {
        headers: { ...JSON_HEADERS, 'Content-Length': String(declared) },
      })
      const getReader = vi.spyOn(body, 'getReader')
      await expect(readDiscoveryResponse(response)).rejects.toThrow('Discovery response too large')
      expect(getReader).not.toHaveBeenCalled()
      expect(pull).not.toHaveBeenCalled()
      expect(cancel).toHaveBeenCalledTimes(1)
      expect(body.locked).toBe(false)
    }
  })

  it('counts cumulative streamed bytes, cancels at overflow and never pulls the remaining tail', async () => {
    const encoder = new TextEncoder()
    // Each accented character is two bytes. Neither chunk alone exceeds the three-byte budget.
    const { response, body, pull, cancel } = streamResponse([
      encoder.encode('é'), encoder.encode('é'), encoder.encode('This tail must not be read.'),
    ])
    expect(response.headers.has('Content-Length')).toBe(false)
    await expect(readDiscoveryResponse(response, 3)).rejects.toThrow('Discovery response too large')
    expect(pull).toHaveBeenCalledTimes(2)
    expect(cancel).toHaveBeenCalledTimes(1)
    expect(body.locked).toBe(false)
  })

  it('rejects malformed UTF-8 instead of replacing bytes and cancels before reading further content', async () => {
    const { response, body, pull, cancel } = streamResponse([
      Uint8Array.of(0xc3, 0x28), new TextEncoder().encode('Unread tail'),
    ])
    await expect(readDiscoveryResponse(response, 64)).rejects.toThrow()
    expect(pull).toHaveBeenCalledTimes(1)
    expect(cancel).toHaveBeenCalledTimes(1)
    expect(body.locked).toBe(false)
  })
})