import { CATEGORY_IDS } from '../types'
import type { AppState, Lesson } from '../types'

export function localDate(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function addDays(date: string, days: number): string {
  const [year, month, day] = date.split('-').map(Number)
  return localDate(new Date(year, month - 1, day + days, 12))
}

export function createInitialState(date = localDate()): AppState {
  return {
    version: 1, name: '', goal: 5, interests: [...CATEGORY_IDS],
    completed: {}, saved: [], notes: {}, reviews: {}, collections: [],
    activity: {}, delivered: [], daily: { date, ids: [] }, xp: 0, joined: date,
    reducedMotion: false, welcomeDismissed: false,
  }
}

export function stableHash(value: string): number {
  let hash = 2166136261
  for (const char of value) { hash ^= char.charCodeAt(0); hash = Math.imul(hash, 16777619) }
  return hash >>> 0
}

export function ensureDaily(
  state: AppState,
  lessons: Lesson[],
  date = localDate(),
  pathIds: string[] = [],
): AppState {
  // Today's queue is immutable once issued, including after completion or a goal change.
  if (state.daily.date === date && state.daily.ids.length > 0) return state
  const delivered = new Set(state.delivered)
  const available = lessons.filter((lesson) => !state.completed[lesson.id] && !delivered.has(lesson.id))
  const selected: Lesson[] = []
  const choose = (lesson: Lesson | undefined) => { if (lesson && !selected.includes(lesson)) selected.push(lesson) }
  choose(pathIds.map((id) => available.find((lesson) => lesson.id === id)).find(Boolean))
  const discovered = available.filter((lesson) => lesson.kind === 'discovery')
    .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '') || a.id.localeCompare(b.id))
  choose(discovered[0])
  const pathSet = new Set(pathIds)
  const sorted = available.filter((lesson) => lesson.kind !== 'discovery' && !pathSet.has(lesson.id))
    .sort((a, b) => Number(state.interests.includes(b.category)) - Number(state.interests.includes(a.category))
      || stableHash(`${date}:${a.id}`) - stableHash(`${date}:${b.id}`))
  for (const lesson of sorted) {
    if (selected.length >= state.goal) break
    if (!selected.some((entry) => entry.category === lesson.category)) choose(lesson)
  }
  const remainingPath = pathIds.map((id) => available.find((lesson) => lesson.id === id)).filter((lesson): lesson is Lesson => Boolean(lesson))
  for (const lesson of [...sorted, ...discovered, ...remainingPath]) {
    if (selected.length >= state.goal) break
    choose(lesson)
  }
  const ids = selected.slice(0, state.goal).map((lesson) => lesson.id)
  if (ids.length === 0 && state.daily.date === date) return state
  return { ...state, daily: { date, ids }, delivered: [...new Set([...state.delivered, ...ids])] }
}

export function completeLesson(state: AppState, lesson: Lesson, correct: boolean | null, date = localDate()): AppState {
  if (state.completed[lesson.id]) return state
  return {
    ...state,
    xp: state.xp + (lesson.kind === 'discovery' ? 10 : 20),
    completed: { ...state.completed, [lesson.id]: { date, correct } },
    reviews: { ...state.reviews, [lesson.id]: { due: addDays(date, 1), interval: 1, repetitions: 0 } },
    activity: { ...state.activity, [date]: (state.activity[date] ?? 0) + 1 },
  }
}

export type ReviewGrade = 'again' | 'good' | 'easy'

export function reviewLesson(state: AppState, id: string, grade: ReviewGrade, date = localDate()): AppState {
  const previous = state.reviews[id]
  if (!previous || previous.due > date || previous.lastReviewed === date) return state
  const interval = grade === 'again' ? 1 : Math.min(365, grade === 'easy'
    ? Math.max(7, Math.round(previous.interval * 2.8))
    : Math.max(3, Math.round(previous.interval * 2)))
  return {
    ...state,
    xp: state.xp + 5,
    reviews: { ...state.reviews, [id]: {
      due: addDays(date, interval), interval,
      repetitions: grade === 'again' ? 0 : previous.repetitions + 1,
      lastReviewed: date,
    } },
    activity: { ...state.activity, [date]: (state.activity[date] ?? 0) + 1 },
  }
}

export function dueReviewIds(state: AppState, date = localDate()): string[] {
  return Object.entries(state.reviews)
    .filter(([, review]) => review.due <= date && review.lastReviewed !== date)
    .sort(([a, left], [b, right]) => left.due.localeCompare(right.due) || a.localeCompare(b))
    .map(([id]) => id)
}

export function streak(state: AppState, date = localDate()): number {
  let cursor = state.activity[date] ? date : addDays(date, -1)
  let count = 0
  while (state.activity[cursor] > 0) { count += 1; cursor = addDays(cursor, -1) }
  return count
}

export function readingMinutes(lesson: Lesson): number {
  const words = [lesson.hook, ...lesson.body, lesson.action, lesson.takeaway].join(' ').split(/\s+/).length
  return Math.max(1, Math.ceil(words / 180))
}

export function levelFor(xp: number): { level: number; title: string; next: number; progress: number } {
  const level = Math.floor(xp / 200) + 1
  const titles = ['The beginning', 'Paying attention', 'Pattern finder', 'Clear thinker', 'Idea collector', 'Everyday practitioner']
  return { level, title: titles[Math.min(titles.length - 1, level - 1)], next: level * 200, progress: (xp % 200) / 200 }
}