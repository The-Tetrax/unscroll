// The attribute lets Node load this file directly in the browser tests. The bundler accepts it too.
import records from './photos.json' with { type: 'json' }
import type { LessonPhoto } from './types'

export const lessonPhotos = records as unknown as Record<string, LessonPhoto[]>
export const photoCount = Object.values(lessonPhotos).reduce((sum, list) => sum + list.length, 0)
