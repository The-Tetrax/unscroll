// Checks shared by the content validator and the unit tests for the two things attached to lessons
// from outside the guides: pictures by other people, and links between lessons.
import fs from 'node:fs'
import crypto from 'node:crypto'
import { lessons } from '../src/data/index.ts'
import { lessonPairs } from '../src/teaching/connections.ts'
import { lessonPhotosSchema } from '../src/teaching/photo-schema.ts'
import type { LessonPhoto } from '../src/teaching/types.ts'

const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]))
export const PHOTO_DATA = 'src/teaching/photos.json'
export const PHOTO_FOLDER = 'public/lesson-photos'
export const PHOTO_CREDITS = `${PHOTO_FOLDER}/CREDITS.md`

export function readPhotos(): Record<string, LessonPhoto[]> {
  return JSON.parse(fs.readFileSync(PHOTO_DATA, 'utf8')) as Record<string, LessonPhoto[]>
}

export function checkPhotos(): { lessons: number; photos: number; bytes: number } {
  const data = readPhotos()
  const parsed = lessonPhotosSchema.safeParse(data)
  if (!parsed.success) throw new Error(`Picture records: ${parsed.error.message}`)
  const captions = new Set<string>()
  const expected = new Set<string>(['CREDITS.md'])
  let photos = 0
  let bytes = 0
  for (const [id, list] of Object.entries(data)) {
    const sections = lessonById.get(id)?.guide?.sections.length
    if (!sections) throw new Error(`${id}: pictures belong to original lessons only`)
    for (const [index, photo] of list.entries()) {
      const name = `${id}-${index + 1}.webp`
      if (photo.src !== `/lesson-photos/${name}`) throw new Error(`${id}: picture ${index + 1} must be stored as ${name}`)
      if (photo.after >= sections) throw new Error(`${id}: a picture follows section ${photo.after + 1}, and the lesson has ${sections}`)
      if (captions.has(photo.caption)) throw new Error(`${id}: a caption is repeated from another picture`)
      if (photo.caption === photo.alt) throw new Error(`${id}: the caption must teach, not repeat the description`)
      captions.add(photo.caption)
      const file = fs.readFileSync(`${PHOTO_FOLDER}/${name}`)
      if (file.length !== photo.bytes || crypto.createHash('sha256').update(file).digest('hex') !== photo.sha256) throw new Error(`${name}: the file does not match its record`)
      expected.add(name)
      photos += 1
      bytes += file.length
    }
  }
  const stray = fs.existsSync(PHOTO_FOLDER) ? fs.readdirSync(PHOTO_FOLDER).filter((name) => !expected.has(name)) : []
  if (stray.length) throw new Error(`Files without a picture record: ${stray.join(', ')}`)
  if (photos && fs.readFileSync(PHOTO_CREDITS, 'utf8') !== creditsMarkdown()) throw new Error('lesson-photos/CREDITS.md is out of date. Run npm run assets.')
  return { lessons: Object.keys(data).length, photos, bytes }
}

export function creditsMarkdown(): string {
  const data = readPhotos()
  const count = Object.values(data).reduce((sum, list) => sum + list.length, 0)
  const lines = [
    '# Lesson picture credits',
    '',
    `UNSCROLL shows ${count} pictures by other people in ${Object.keys(data).length} lessons. Each one is in the public domain or under a Creative Commons license that allows reuse with credit. They are not covered by the project's MIT license, and each keeps the license named here. Every file comes from Wikimedia Commons and was changed only as stated. A credit does not mean that the author endorses UNSCROLL.`,
    '',
    'This file is generated from src/teaching/photos.json by npm run assets.',
  ]
  for (const [id, list] of Object.entries(data)) {
    lines.push('', `## ${id}: ${lessonById.get(id)?.title ?? ''}`)
    for (const photo of list) {
      lines.push('', `- File: ${photo.src.slice(1)}`, `  Work: ${photo.credit.work}`, `  Author: ${photo.credit.author}`,
        `  License: ${photo.credit.license}${photo.credit.licenseUrl ? `, ${photo.credit.licenseUrl}` : ''}`, `  Source: ${photo.credit.source}`, `  Changes: ${photo.credit.changes}`)
    }
  }
  return `${lines.join('\n')}\n`
}

export function checkConnections(): { pairs: number; lessons: number } {
  const seen = new Set<string>()
  const perLesson = new Map<string, number>()
  for (const [first, second, why] of lessonPairs) {
    for (const id of [first, second]) {
      if (!lessonById.has(id)) throw new Error(`Connection to an unknown lesson: ${id}`)
      perLesson.set(id, (perLesson.get(id) ?? 0) + 1)
      if (perLesson.get(id)! > 4) throw new Error(`${id}: more than four connections stops being a short list`)
    }
    if (first === second) throw new Error(`${first}: a lesson cannot connect to itself`)
    const key = [first, second].sort().join(' + ')
    if (seen.has(key)) throw new Error(`${key}: connected twice`)
    seen.add(key)
    if (why.length < 40 || why.length > 260 || /[\u2013\u2014]/.test(why) || !/[.?]$/.test(why)) throw new Error(`${key}: the reason must be one or two plain sentences of 40 to 260 characters`)
  }
  return { pairs: lessonPairs.length, lessons: perLesson.size }
}
