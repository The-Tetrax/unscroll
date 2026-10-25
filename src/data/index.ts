import type { Lesson } from '../types'
import { mindThinkingLessons } from './mind-thinking'
import { workTechLessons } from './work-tech'
import { moneyLifeLessons } from './money-life'
import { peopleWellbeingLessons } from './people-wellbeing'
import { fieldcraftLessons, fieldcraftPaths } from './fieldcraft'
import { presencePerspectiveLessons, presencePerspectivePaths } from './presence-perspective'
import { cinemaLessons, cinemaPaths } from './cinema'
import { designLessons, designPaths } from './design'

export const lessons: Lesson[] = [
  ...mindThinkingLessons,
  ...workTechLessons,
  ...moneyLifeLessons,
  ...peopleWellbeingLessons,
  ...fieldcraftLessons,
  ...presencePerspectiveLessons,
  ...cinemaLessons,
  ...designLessons,
]

export const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]))
export const learningPaths = [...fieldcraftPaths, ...presencePerspectivePaths, ...cinemaPaths, ...designPaths]
export { categories, categoryById } from './categories'