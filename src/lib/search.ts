import type { Lesson } from '../types'

export function normalizeSearch(text: string): string {
  return text.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase()
    .replace(/colou?r/gu, 'color').replace(/[^\p{L}\p{N}]+/gu, ' ').trim()
}

export function matchesLesson(lesson: Lesson, query: string, extraText = ''): boolean {
  const terms = normalizeSearch(query).split(/\s+/).filter(Boolean)
  const haystack = normalizeSearch([lesson.title, lesson.hook, lesson.topic, lesson.action, lesson.takeaway, ...lesson.body, extraText].join(' '))
  return terms.every((term) => haystack.includes(term))
}

export function noteExcerpt(text: string, limit = 240): string {
  const compact = text.replace(/\s+/g, ' ').trim()
  if (compact.length <= limit) return compact
  const cut = compact.slice(0, limit)
  const space = cut.lastIndexOf(' ')
  return `${space > limit / 2 ? cut.slice(0, space) : cut}…`
}