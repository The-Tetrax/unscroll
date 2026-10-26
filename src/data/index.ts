import type { Lesson } from '../types'
import { mindThinkingLessons } from './mind-thinking'
import { workTechLessons } from './work-tech'
import { moneyLifeLessons } from './money-life'
import { peopleWellbeingLessons } from './people-wellbeing'
import { fieldcraftLessons, fieldcraftPaths } from './fieldcraft'
import { presencePerspectiveLessons, presencePerspectivePaths } from './presence-perspective'
import { cinemaLessons, cinemaPaths } from './cinema'
import { designLessons, designPaths } from './design'
import { fieldGuideLessons, fieldGuidePaths } from './field-guides'
import { guideById, guideRevisionById } from '../teaching'

export const originalLessonMetadata: Lesson[] = [
  ...mindThinkingLessons,
  ...workTechLessons,
  ...moneyLifeLessons,
  ...peopleWellbeingLessons,
  ...fieldcraftLessons,
  ...presencePerspectiveLessons,
  ...cinemaLessons,
  ...designLessons,
  ...fieldGuideLessons,
]

export const lessons: Lesson[] = originalLessonMetadata.map((original) => {
  const guide = guideById.get(original.id)
  const revision = guideRevisionById.get(original.id)
  if (!guide || !revision) throw new Error(`Missing illustrated teaching for ${original.id}`)
  return {
    ...original,
    title: guide.title ?? original.title,
    hook: guide.outcome,
    body: guide.sections.flatMap((section) => section.paragraphs),
    action: guide.practice.steps.join(' '),
    takeaway: guide.takeaway,
    quiz: guide.quiz,
    sources: guide.sources ?? original.sources,
    guide,
    revision,
  }
})

export const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]))
export const learningPaths = [...fieldcraftPaths, ...presencePerspectivePaths, ...cinemaPaths, ...designPaths, ...fieldGuidePaths]
export const newFieldGuides = fieldGuidePaths
export { categories, categoryById } from './categories'