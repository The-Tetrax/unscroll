import assert from 'node:assert/strict'
import { lessons, categories, learningPaths } from '../src/data/index.ts'
import { lessonSchema } from '../src/lib/schema.ts'

const ids = new Set<string>()
const titles = new Set<string>()
const paragraphs = new Set<string>()
for (const lesson of lessons) {
  const result = lessonSchema.safeParse(lesson)
  assert(result.success, `${lesson.id}: ${result.success ? '' : result.error.message}`)
  assert(!ids.has(lesson.id), `Duplicate ID ${lesson.id}`)
  assert(!titles.has(lesson.title.toLowerCase()), `Duplicate title ${lesson.title}`)
  ids.add(lesson.id)
  titles.add(lesson.title.toLowerCase())
  assert(lesson.title.length <= 65, `${lesson.id}: title too long`)
  assert(lesson.hook.length <= 140, `${lesson.id}: hook too long`)
  assert(lesson.body.length === 2, `${lesson.id}: expected two paragraphs`)
  for (const paragraph of lesson.body) {
    assert(!paragraphs.has(paragraph), `${lesson.id}: duplicate paragraph`)
    paragraphs.add(paragraph)
  }
  const words = lesson.body.join(' ').split(/\s+/).length
  assert(words >= 70 && words <= 115, `${lesson.id}: body has ${words} words`)
  assert(!/[\u2013\u2014]/.test(JSON.stringify(lesson)), `${lesson.id}: forbidden long dash`)
  assert(lesson.quiz && new Set(lesson.quiz.options).size === 3, `${lesson.id}: invalid quiz options`)
}
assert.equal(lessons.length, 520, 'Expected 520 original lessons across ten categories')
for (const path of learningPaths) {
  assert(path.lessonIds.length > 0, `${path.id}: empty path`)
  assert.equal(new Set(path.lessonIds).size, path.lessonIds.length, `${path.id}: duplicate lesson`)
  for (const id of path.lessonIds) assert(ids.has(id), `${path.id}: missing ${id}`)
}
for (const category of categories) {
  const count = lessons.filter((lesson) => lesson.category === category.id).length
  assert(count >= 40, `${category.name}: not enough lessons`)
  console.log(`${category.name}: ${count}`)
}
console.log(`Validated ${lessons.length} original lessons, ${learningPaths.length} learning paths, ${paragraphs.size} unique paragraphs.`)