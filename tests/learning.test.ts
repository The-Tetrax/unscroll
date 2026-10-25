// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest'
import { categories, learningPaths, lessonById, lessons } from '../src/data'
import {
  addDays, completeLesson, createInitialState, dueReviewIds, ensureDaily,
  localDate, readingMinutes, reviewLesson, streak,
} from '../src/lib/learning'
import type { ReviewGrade } from '../src/lib/learning'
import { lessonSchema } from '../src/lib/schema'
import { CATEGORY_IDS } from '../src/types'
import type { AppState, CategoryId, Lesson, Review } from '../src/types'

const DAY = '2026-10-25'
const REVIEW_ID = 'lesson-review'

function makeLesson(id: string, category: CategoryId = 'mind'): Lesson {
  return {
    id, category, topic: 'Fixture practice', title: `Fixture ${id}`,
    hook: 'Recall a distinction.', body: ['This is synthetic test content, not a factual lesson.'],
    takeaway: 'Explain the distinction.', action: 'Write one example.', evidence: 'framework',
    quiz: {
      question: 'Which answer is the fixture answer?', options: ['First', 'Second', 'Third'],
      correctIndex: 1, explanation: 'The second option is designated for this test.',
    },
    sources: [{ title: 'Fixture reference', url: 'https://example.org/reference', publisher: 'Fixture publisher' }],
  }
}

function makeDiscovery(id = 'wiki-1'): Lesson {
  const lesson = makeLesson(id, 'thinking')
  delete lesson.quiz
  return {
    ...lesson, kind: 'discovery', evidence: 'reference', publishedAt: DAY,
    sources: [{ title: 'Fixture article', url: 'https://en.wikipedia.org/wiki/Fixture', publisher: 'Wikipedia' }],
    attribution: {
      author: 'Wikipedia contributors', license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      historyUrl: 'https://en.wikipedia.org/w/index.php?title=Fixture&action=history',
    },
  }
}

function inventory(count: number): Lesson[] {
  return Array.from({ length: count }, (_, index) => makeLesson(
    `lesson-${String(index + 1).padStart(3, '0')}`, CATEGORY_IDS[index % CATEGORY_IDS.length]!,
  ))
}

function withReview(overrides: Partial<Review> = {}): AppState {
  return {
    ...createInitialState(DAY), xp: 40,
    completed: { [REVIEW_ID]: { date: '2026-10-24', correct: true } },
    reviews: { [REVIEW_ID]: { due: DAY, interval: 1, repetitions: 2, ...overrides } },
    activity: { [DAY]: 2 },
  }
}

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

describe('localDate', () => {
  it.each([
    ['UTC', '2026-01-02T00:05:00Z', '2026-01-02'],
    ['America/Los_Angeles', '2026-01-01T00:30:00Z', '2025-12-31'],
    ['Pacific/Kiritimati', '2026-12-31T12:30:00Z', '2027-01-01'],
    ['Asia/Kolkata', '2026-10-25T19:00:00Z', '2026-10-26'],
  ])('formats the local calendar date in %s at %s', (zone, instant, expected) => {
    vi.stubEnv('TZ', zone)
    expect(localDate(new Date(instant))).toBe(expected)
  })

  it('uses the current local date by default, not the UTC date', () => {
    vi.stubEnv('TZ', 'America/Los_Angeles')
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date('2024-03-01T07:30:00Z'))
    expect(localDate()).toBe('2024-02-29')
    expect(createInitialState().joined).toBe('2024-02-29')
    expect(createInitialState().daily.date).toBe('2024-02-29')
  })

  it.each([
    { name: 'spring gap', before: '2024-03-10T06:59:00Z', after: '2024-03-10T07:01:00Z', offsets: [300, 240], date: '2024-03-10' },
    { name: 'repeated autumn hour', before: '2024-11-03T05:30:00Z', after: '2024-11-03T06:30:00Z', offsets: [240, 300], date: '2024-11-03' },
  ])('keeps the calendar day through the $name', ({ before, after, offsets, date }) => {
    vi.stubEnv('TZ', 'America/New_York')
    const instants = [new Date(before), new Date(after)]
    // Check the native offsets so a worker that ignores TZ cannot give a false pass.
    expect(instants.map((instant) => instant.getTimezoneOffset())).toEqual(offsets)
    expect(instants.map((instant) => localDate(instant))).toEqual([date, date])
  })
})

describe('addDays', () => {
  it.each([
    ['2026-01-31', 1, '2026-02-01'],
    ['2026-04-30', 1, '2026-05-01'],
    ['2026-03-01', -1, '2026-02-28'],
    ['2026-05-01', -1, '2026-04-30'],
    ['2026-12-31', 1, '2027-01-01'],
    ['2027-01-01', -1, '2026-12-31'],
    ['2024-02-28', 1, '2024-02-29'],
    ['2024-02-29', 1, '2024-03-01'],
    ['2024-03-01', -1, '2024-02-29'],
    ['1900-02-28', 1, '1900-03-01'],
    ['2000-02-28', 1, '2000-02-29'],
    ['2024-02-29', 0, '2024-02-29'],
    ['2024-02-28', 3, '2024-03-02'],
  ] as const)('moves %s by %i calendar days to %s', (date, days, expected) => {
    expect(addDays(date, days)).toBe(expected)
  })

  it.each([
    ['2024-03-09', 2, '2024-03-11', 47],
    ['2024-03-11', -2, '2024-03-09', -47],
    ['2024-11-02', 2, '2024-11-04', 49],
    ['2024-11-04', -2, '2024-11-02', -49],
  ] as const)('crosses DST from %s by %i days without using 24-hour arithmetic', (date, days, expected, hours) => {
    vi.stubEnv('TZ', 'America/New_York')
    const start = new Date(`${date}T12:00:00`)
    const end = new Date(`${expected}T12:00:00`)
    expect((end.getTime() - start.getTime()) / 3_600_000).toBe(hours)
    expect(addDays(date, days)).toBe(expected)
  })
})

describe('finite daily queues', () => {
  it.each([3, 5, 7] as const)('issues exactly the goal of %i unique available lessons', (goal) => {
    const state = { ...createInitialState(DAY), goal }
    const library = inventory(20)
    const before = structuredClone({ state, library })
    const issued = ensureDaily(state, library, DAY)
    expect(issued.daily.date).toBe(DAY)
    expect(issued.daily.ids).toHaveLength(goal)
    expect(new Set(issued.daily.ids).size).toBe(goal)
    expect(issued.daily.ids.every((id) => library.some((lesson) => lesson.id === id))).toBe(true)
    expect(issued.delivered).toEqual(issued.daily.ids)
    expect({ state, library }).toEqual(before)
  })

  it('is deterministic for a fixed date, even when inventory arrives in a different order', () => {
    const library = inventory(24)
    const first = ensureDaily(createInitialState(DAY), library, DAY)
    const repeated = ensureDaily(createInitialState(DAY), structuredClone(library), DAY)
    const reordered = ensureDaily(createInitialState(DAY), [...library].reverse(), DAY)
    expect(repeated).toEqual(first)
    expect(reordered).toEqual(first)
  })

  it('keeps the issued queue when interests, selected path or incoming discoveries change that day', () => {
    const library = inventory(16)
    const issued = ensureDaily(createInitialState(DAY), library, DAY)
    const changed: AppState = { ...issued, interests: ['tech'], followedPath: 'another-path' }
    const pathIds = library.map((lesson) => lesson.id).reverse()
    const refreshed = ensureDaily(changed, [makeDiscovery(), ...library], DAY, pathIds)
    expect(refreshed).toEqual(changed)
    expect(refreshed.daily).toEqual(issued.daily)
    expect(refreshed.delivered).toEqual(issued.delivered)
  })

  it('does not refill after partial or full completion, despite spare inventory', () => {
    const library = inventory(12)
    let state = ensureDaily({ ...createInitialState(DAY), goal: 3 }, library, DAY)
    const issuedIds = [...state.daily.ids]
    for (const id of issuedIds) {
      state = completeLesson(state, library.find((lesson) => lesson.id === id)!, true, DAY)
      const refreshed = ensureDaily(state, library, DAY)
      expect(refreshed.daily.ids).toEqual(issuedIds)
      expect(refreshed.delivered).toEqual(issuedIds)
      expect(refreshed).toEqual(state)
      state = refreshed
    }
    expect(Object.keys(state.completed)).toHaveLength(3)
    expect(ensureDaily(state, library, DAY).daily.ids).toEqual(issuedIds)
  })

  it('does not top up an already-issued short queue when more lessons arrive', () => {
    const library = inventory(2)
    const issued = ensureDaily(createInitialState(DAY), library, DAY)
    expect(issued.daily.ids).toHaveLength(2)
    const refreshed = ensureDaily(issued, [...inventory(14), makeDiscovery()], DAY)
    expect(refreshed).toEqual(issued)
  })

  it('excludes both completed lessons and delivered-but-uncompleted lessons on a new day', () => {
    const library = inventory(12)
    const excluded = library.slice(0, 3).map((lesson) => lesson.id)
    const state: AppState = {
      ...createInitialState('2026-10-24'),
      completed: { [excluded[0]!]: { date: '2026-10-24', correct: true } },
      delivered: excluded.slice(1), daily: { date: '2026-10-24', ids: excluded.slice(1) },
    }
    const next = ensureDaily(state, library, DAY)
    expect(next.daily.ids).toHaveLength(5)
    expect(next.daily.ids.some((id) => excluded.includes(id))).toBe(false)
    expect(next.delivered).toEqual([...state.delivered, ...next.daily.ids])
    expect(next.completed).toEqual(state.completed)
  })

  it('drains the inventory across days without recycling completed or skipped deliveries', () => {
    const library = inventory(11)
    let state: AppState = { ...createInitialState(DAY), goal: 3 }
    const seen = new Set<string>()
    const dates = [DAY, '2026-10-26', '2026-10-27', '2026-10-28']
    for (const [index, date] of dates.entries()) {
      state = ensureDaily(state, library, date)
      expect(state.daily.ids).toHaveLength(index === 3 ? 2 : 3)
      for (const id of state.daily.ids) {
        expect(seen.has(id), `${date}: repeated ${id}`).toBe(false)
        expect(state.completed[id]).toBeUndefined()
        seen.add(id)
      }
      const first = library.find((lesson) => lesson.id === state.daily.ids[0])!
      state = completeLesson(state, first, true, date)
    }
    expect(seen).toEqual(new Set(library.map((lesson) => lesson.id)))
    expect(new Set(state.delivered).size).toBe(library.length)
    state = ensureDaily(state, library, '2026-10-29')
    expect(state.daily.ids).toEqual([])
    expect(ensureDaily(state, library, '2026-10-30').daily.ids).toEqual([])
  })

  it.each(['empty', 'completed', 'delivered'] as const)('keeps %s inventory empty on repeated and later days', (reason) => {
    const library = reason === 'empty' ? [] : inventory(8)
    let state = createInitialState('2026-10-24')
    if (reason === 'completed') {
      state.completed = Object.fromEntries(library.map((lesson) => [lesson.id, { date: '2026-10-24', correct: true }]))
    }
    if (reason === 'delivered') state.delivered = library.map((lesson) => lesson.id)
    const before = structuredClone(state)
    for (const date of [DAY, DAY, '2026-10-26', '2026-10-27']) {
      state = ensureDaily(state, library, date)
      expect(state.daily).toEqual({ date, ids: [] })
      expect(state.completed).toEqual(before.completed)
      expect(state.delivered).toEqual(before.delivered)
      expect(state.xp).toBe(before.xp)
    }
  })

  it('prefers interested categories when they can fill a diverse queue', () => {
    const preferred: CategoryId[] = ['mind', 'work', 'tech']
    const library = [
      makeLesson('other-1', 'life'), makeLesson('other-2', 'money'), makeLesson('other-3', 'people'),
      ...preferred.map((category) => makeLesson(`preferred-${category}`, category)),
    ]
    const state: AppState = { ...createInitialState(DAY), goal: 3, interests: preferred }
    const issued = ensureDaily(state, library, DAY)
    expect(new Set(issued.daily.ids)).toEqual(new Set(preferred.map((category) => `preferred-${category}`)))
  })

  it('uses other categories rather than repeating exhausted interests', () => {
    const library = [
      makeLesson('finished', 'mind'), makeLesson('life-1', 'life'),
      makeLesson('money-1', 'money'), makeLesson('tech-1', 'tech'),
    ]
    const state: AppState = {
      ...createInitialState(DAY), goal: 3, interests: ['mind'],
      completed: { finished: { date: '2026-10-24', correct: true } },
    }
    expect(new Set(ensureDaily(state, library, DAY).daily.ids)).toEqual(new Set(['life-1', 'money-1', 'tech-1']))
  })

  it.each([{ from: 3, to: 7 }, { from: 7, to: 3 }] as const)(
    'keeps the $from-lesson queue today and applies a goal of $to tomorrow', ({ from, to }) => {
      const library = inventory(24)
      const issued = ensureDaily({ ...createInitialState(DAY), goal: from }, library, DAY)
      const changed = { ...issued, goal: to }
      expect(ensureDaily(changed, library, DAY)).toEqual(changed)
      expect(changed.daily.ids).toHaveLength(from)
      const tomorrow = ensureDaily(changed, library, '2026-10-26')
      expect(tomorrow.goal).toBe(to)
      expect(tomorrow.daily.ids).toHaveLength(to)
      expect(tomorrow.daily.ids.some((id) => issued.daily.ids.includes(id))).toBe(false)
    },
  )

  it('starts with the first available selected-path step, skipping completed and delivered steps', () => {
    const pathIds = ['path-1', 'path-2', 'path-3', 'path-4', 'path-5']
    const library = [...inventory(12), ...[...pathIds].reverse().map((id) => makeLesson(id, 'thinking'))]
    const state: AppState = {
      ...createInitialState('2026-10-24'), goal: 3, interests: ['tech'], followedPath: 'fixture-path',
      completed: { 'path-1': { date: '2026-10-24', correct: true } },
      delivered: ['path-2'], daily: { date: '2026-10-24', ids: ['path-2'] },
    }
    const issued = ensureDaily(state, library, DAY, pathIds)
    expect(issued.daily.ids[0]).toBe('path-3')
    expect(issued.daily.ids).not.toContain('path-1')
    expect(issued.daily.ids).not.toContain('path-2')
    expect(new Set(issued.daily.ids).size).toBe(issued.daily.ids.length)
  })

  it('keeps every selected-path step in forward order across days without repeats', () => {
    const pathIds = Array.from({ length: 8 }, (_, index) => `path-${index + 1}`)
    const library = [...pathIds].reverse().map((id) => makeLesson(id, 'thinking'))
    let state: AppState = { ...createInitialState(DAY), goal: 3, followedPath: 'fixture-path' }
    const issuedIds: string[] = []
    // Path-only inventory must not be hash-shuffled after the first slot.
    for (const [index, date] of [DAY, '2026-10-26', '2026-10-27'].entries()) {
      state = ensureDaily(state, library, date, pathIds)
      expect(state.daily.ids).toEqual(pathIds.slice(index * 3, index * 3 + 3))
      issuedIds.push(...state.daily.ids)
      for (const id of state.daily.ids) state = completeLesson(state, library.find((lesson) => lesson.id === id)!, true, date)
    }
    expect(issuedIds).toEqual(pathIds)
    expect(new Set(issuedIds).size).toBe(pathIds.length)
    expect(ensureDaily(state, library, '2026-10-28', pathIds).daily.ids).toEqual([])
  })
})

describe('completion rewards', () => {
  it.each([
    { name: 'correct original', lesson: makeLesson('original-1'), correct: true, xp: 20 },
    { name: 'incorrect original', lesson: makeLesson('original-2'), correct: false, xp: 20 },
    { name: 'unanswered original', lesson: makeLesson('original-3'), correct: null, xp: 20 },
    { name: 'external discovery', lesson: makeDiscovery(), correct: null, xp: 10 },
  ])('awards completion XP once and schedules tomorrow for a $name', ({ lesson, correct, xp }) => {
    const state = { ...createInitialState(DAY), xp: 35, activity: { [DAY]: 2 } }
    const before = structuredClone(state)
    const completed = completeLesson(state, lesson, correct, DAY)
    expect(completed.xp).toBe(35 + xp)
    expect(completed.completed[lesson.id]).toEqual({ date: DAY, correct })
    expect(completed.reviews[lesson.id]).toEqual({ due: '2026-10-26', interval: 1, repetitions: 0 })
    expect(completed.activity).toEqual({ [DAY]: 3 })
    expect(state).toEqual(before)
  })

  it.each([makeLesson('original-1'), makeDiscovery()])('does not reward $id again or overwrite its answer and review history', (lesson) => {
    const correct = lesson.kind === 'discovery' ? null : true
    const first = completeLesson(createInitialState(DAY), lesson, correct, DAY)
    expect(completeLesson(first, lesson, false, DAY)).toEqual(first)
    const reviewed = reviewLesson(first, lesson.id, 'good', '2026-10-26')
    expect(reviewed.xp).toBe(first.xp + 5)
    expect(completeLesson(reviewed, lesson, false, '2026-10-27')).toEqual(reviewed)
    expect(reviewed.completed[lesson.id]).toEqual({ date: DAY, correct })
  })
})

describe('review scheduling and rewards', () => {
  it('lists overdue and due reviews by due date then ID, excluding future and already-reviewed entries', () => {
    const state = createInitialState(DAY)
    const review = (due: string, lastReviewed?: string): Review => ({ due, interval: 1, repetitions: 0, lastReviewed })
    state.reviews = {
      future: review('2026-10-26'), 'today-b': review(DAY),
      older: review('2026-10-23'), 'today-a': review(DAY),
      already: review('2026-10-22', DAY),
    }
    const before = structuredClone(state)
    expect(dueReviewIds(state, DAY)).toEqual(['older', 'today-a', 'today-b'])
    expect(dueReviewIds(createInitialState(DAY), DAY)).toEqual([])
    expect(state).toEqual(before)
  })

  it.each(['missing', 'not due', 'already reviewed today'] as const)('does not grade or reward a review that is %s', (condition) => {
    const state = withReview()
    if (condition === 'missing') delete state.reviews[REVIEW_ID]
    if (condition === 'not due') state.reviews[REVIEW_ID]!.due = '2026-10-26'
    if (condition === 'already reviewed today') state.reviews[REVIEW_ID]!.lastReviewed = DAY
    const before = structuredClone(state)
    expect(reviewLesson(state, REVIEW_ID, 'again', DAY)).toEqual(before)
    expect(state).toEqual(before)
  })

  it.each([
    { grade: 'again', interval: 1, due: '2026-10-26', repetitions: 0 },
    { grade: 'good', interval: 3, due: '2026-10-28', repetitions: 3 },
    { grade: 'easy', interval: 7, due: '2026-11-01', repetitions: 3 },
  ] as const)('schedules $grade after $interval days from an initial interval of one', ({ grade, interval, due, repetitions }) => {
    const state = withReview()
    const before = structuredClone(state)
    const reviewed = reviewLesson(state, REVIEW_ID, grade, DAY)
    expect(reviewed.reviews[REVIEW_ID]).toEqual({ interval, due, repetitions, lastReviewed: DAY })
    expect(reviewed.xp).toBe(45)
    expect(reviewed.activity).toEqual({ [DAY]: 3 })
    expect(reviewed.completed).toEqual(state.completed)
    expect(dueReviewIds(reviewed, DAY)).toEqual([])
    expect(state).toEqual(before)
  })

  it.each([
    { grade: 'again', previous: 42, interval: 1, due: '2026-10-26', repetitions: 0 },
    { grade: 'good', previous: 4, interval: 8, due: '2026-11-02', repetitions: 10 },
    { grade: 'easy', previous: 4, interval: 11, due: '2026-11-05', repetitions: 10 },
    { grade: 'easy', previous: 3, interval: 8, due: '2026-11-02', repetitions: 10 },
  ] as const)('reschedules $grade from $previous days to $interval days', ({ grade, previous, interval, due, repetitions }) => {
    const reviewed = reviewLesson(withReview({ interval: previous, repetitions: 9 }), REVIEW_ID, grade, DAY)
    expect(reviewed.reviews[REVIEW_ID]).toEqual({ interval, due, repetitions, lastReviewed: DAY })
  })

  it.each([
    { grade: 'good', previous: 200 }, { grade: 'easy', previous: 200 },
    { grade: 'good', previous: 365 }, { grade: 'easy', previous: 365 },
  ] as const)('caps $grade at 365 days from an interval of $previous', ({ grade, previous }) => {
    const reviewed = reviewLesson(withReview({ interval: previous }), REVIEW_ID, grade, DAY)
    expect(reviewed.reviews[REVIEW_ID]).toEqual({ due: '2027-10-25', interval: 365, repetitions: 3, lastReviewed: DAY })
  })

  it('does not award review XP or activity twice on the same day, even with a different grade', () => {
    const first = reviewLesson(withReview(), REVIEW_ID, 'good', DAY)
    expect(first.xp).toBe(45)
    for (const grade of ['again', 'good', 'easy'] satisfies ReviewGrade[]) {
      expect(reviewLesson(first, REVIEW_ID, grade, DAY)).toEqual(first)
    }
  })

  it('allows another reward on the next due day without a second reward that day', () => {
    const first = reviewLesson(withReview(), REVIEW_ID, 'again', DAY)
    const next = reviewLesson(first, REVIEW_ID, 'again', '2026-10-26')
    expect(next.xp).toBe(50)
    expect(next.activity).toEqual({ [DAY]: 3, '2026-10-26': 1 })
    expect(next.reviews[REVIEW_ID]).toEqual({ due: '2026-10-27', interval: 1, repetitions: 0, lastReviewed: '2026-10-26' })
    expect(reviewLesson(next, REVIEW_ID, 'easy', '2026-10-26')).toEqual(next)
  })

  it('schedules an overdue review from the day it is actually reviewed', () => {
    const reviewed = reviewLesson(withReview({ due: '2026-10-01' }), REVIEW_ID, 'good', DAY)
    expect(reviewed.reviews[REVIEW_ID]!.due).toBe('2026-10-28')
  })
})

describe('streak and reading time', () => {
  const streakCases: [string, string, Record<string, number>, number][] = [
    ['no activity', DAY, {}, 0],
    ['only today', DAY, { [DAY]: 3 }, 1],
    ['yesterday while today is pending', DAY, { '2026-10-24': 1, '2026-10-23': 2 }, 2],
    ['today and the two preceding days', DAY, { [DAY]: 1, '2026-10-24': 2, '2026-10-23': 1 }, 3],
    ['an explicit zero today', DAY, { [DAY]: 0, '2026-10-24': 1, '2026-10-23': 1 }, 2],
    ['a gap yesterday', DAY, { [DAY]: 2, '2026-10-24': 0, '2026-10-23': 3 }, 1],
    ['only older activity', DAY, { '2026-10-23': 1 }, 0],
    ['a leap-day boundary', '2024-03-01', { '2024-02-29': 1, '2024-02-28': 2 }, 2],
    ['a year boundary', '2027-01-01', { '2027-01-01': 1, '2026-12-31': 1, '2026-12-30': 1 }, 3],
  ]

  it.each(streakCases)('counts consecutive active dates with %s', (_name, date, activity, expected) => {
    const state = { ...createInitialState(date), activity }
    const before = structuredClone(state)
    expect(streak(state, date)).toBe(expected)
    expect(state).toEqual(before)
  })

  it.each([[4, 1], [180, 1], [181, 2], [361, 3]])('returns positive rounded minutes for %i words', (words, expected) => {
    const lesson: Lesson = {
      ...makeLesson('reading'), hook: 'Hook', action: 'Apply', takeaway: 'Remember',
      body: [Array.from({ length: words - 3 }, () => 'word').join(' ')],
    }
    expect(readingMinutes(lesson)).toBe(expected)
    expect(Number.isInteger(readingMinutes(lesson))).toBe(true)
    expect(readingMinutes(lesson)).toBeGreaterThan(0)
  })
})

describe('bundled library content contract', () => {
  it('contains the documented 544 lessons and at least 40 in each of ten categories', () => {
    expect(lessons).toHaveLength(544)
    expect(categories).toHaveLength(10)
    expect(new Set(categories.map((category) => category.id))).toEqual(new Set(CATEGORY_IDS))
    for (const category of CATEGORY_IDS) {
      expect(lessons.filter((lesson) => lesson.category === category).length, category).toBeGreaterThanOrEqual(40)
    }
  })

  it('has unique IDs and an index that contains every lesson without overwriting one', () => {
    expect(new Set(lessons.map((lesson) => lesson.id)).size).toBe(lessons.length)
    expect(lessonById.size).toBe(lessons.length)
    for (const lesson of lessons) expect(lessonById.get(lesson.id), lesson.id).toBe(lesson)
  })

  it('gives every original lesson an application, retrieval question, evidence label and safe source', () => {
    for (const lesson of lessons) {
      const parsed = lessonSchema.safeParse(lesson)
      expect(parsed.success, `${lesson.id}: ${parsed.success ? '' : parsed.error.message}`).toBe(true)
      expect(lesson.kind, lesson.id).toBeUndefined()
      expect(lesson.action.trim(), lesson.id).not.toBe('')
      expect(lesson.takeaway.trim(), lesson.id).not.toBe('')
      expect(lesson.quiz, lesson.id).toBeDefined()
      const quiz = lesson.quiz!
      expect(new Set(quiz.options).size, lesson.id).toBe(3)
      expect([0, 1, 2], lesson.id).toContain(quiz.correctIndex)
      expect(quiz.explanation.trim(), lesson.id).not.toBe('')
      expect(lesson.sources.length, lesson.id).toBeGreaterThan(0)
      for (const source of lesson.sources) {
        const url = new URL(source.url)
        expect(url.protocol, lesson.id).toBe('https:')
        expect(url.username, lesson.id).toBe('')
        expect(url.password, lesson.id).toBe('')
        expect(source.title.trim(), lesson.id).not.toBe('')
        expect(source.publisher.trim(), lesson.id).not.toBe('')
      }
    }
  })

  it('contains twenty-two uniquely identified nonempty paths with no repeated or missing lesson IDs', () => {
    expect(learningPaths).toHaveLength(22)
    expect(new Set(learningPaths.map((path) => path.id)).size).toBe(learningPaths.length)
    for (const path of learningPaths) {
      expect(path.lessonIds.length, path.id).toBeGreaterThan(0)
      expect(new Set(path.lessonIds).size, path.id).toBe(path.lessonIds.length)
      for (const id of path.lessonIds) expect(lessonById.has(id), `${path.id}: ${id}`).toBe(true)
    }
  })

  it('gives every bundled lesson a finite positive integer reading time', () => {
    for (const lesson of lessons) {
      const minutes = readingMinutes(lesson)
      expect(Number.isFinite(minutes), lesson.id).toBe(true)
      expect(Number.isInteger(minutes), lesson.id).toBe(true)
      expect(minutes, lesson.id).toBeGreaterThan(0)
    }
  })
})