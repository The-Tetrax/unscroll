import type { Lesson } from '../types'
import { mindThinkingLessons } from './mind-thinking'
import { workTechLessons } from './work-tech'
import { moneyLifeLessons } from './money-life'
import { peopleWellbeingLessons } from './people-wellbeing'
import { fieldcraftLessons, fieldcraftPaths } from './fieldcraft'
import { presencePerspectiveLessons, presencePerspectivePaths } from './presence-perspective'

export const lessons: Lesson[] = [
  ...mindThinkingLessons,
  ...workTechLessons,
  ...moneyLifeLessons,
  ...peopleWellbeingLessons,
  ...fieldcraftLessons,
  ...presencePerspectiveLessons,
]

export const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]))
export const learningPaths = [...fieldcraftPaths, ...presencePerspectivePaths]
export { categories, categoryById } from './categories'