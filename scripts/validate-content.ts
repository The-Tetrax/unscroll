import assert from 'node:assert/strict'
import { lessons, categories, learningPaths } from '../src/data/index.ts'
import { lessonSchema } from '../src/lib/schema.ts'
import { guides, TEACHING_REVISION } from '../src/teaching/index.ts'
import { lessonGuideSchema } from '../src/teaching/schema.ts'

const ids = new Set<string>()
const titles = new Set<string>()
const paragraphs = new Set<string>()
const scenes = new Set<string>()
let visualCount = 0
for (const lesson of lessons) {
  const result = lessonSchema.safeParse(lesson)
  assert(result.success, `${lesson.id}: ${result.success ? '' : result.error.message}`)
  assert(!ids.has(lesson.id), `Duplicate ID ${lesson.id}`)
  assert(!titles.has(lesson.title.toLowerCase()), `Duplicate title ${lesson.title}`)
  ids.add(lesson.id)
  titles.add(lesson.title.toLowerCase())
  assert(lesson.title.length <= 80, `${lesson.id}: title too long`)
  assert(lesson.hook.length <= 200, `${lesson.id}: hook too long`)
  assert(lesson.guide && lesson.revision === TEACHING_REVISION, `${lesson.id}: missing contextual rewrite`)
  const guideResult = lessonGuideSchema.safeParse(lesson.guide)
  assert(guideResult.success, `${lesson.id}: ${guideResult.success ? '' : guideResult.error.message}`)
  assert(!scenes.has(lesson.guide.scene.toLowerCase()), `${lesson.id}: repeated example setting`)
  scenes.add(lesson.guide.scene.toLowerCase())
  visualCount += lesson.guide.visuals.length
  for (const paragraph of lesson.body) {
    assert(!paragraphs.has(paragraph), `${lesson.id}: duplicate paragraph`)
    paragraphs.add(paragraph)
  }
  const words = lesson.body.join(' ').split(/\s+/).length
  assert(words >= 200 && words <= 600, `${lesson.id}: explanation has ${words} words; verify context and depth`)
  assert(!/[\u2013\u2014]/.test(JSON.stringify(lesson)), `${lesson.id}: forbidden long dash`)
  assert(lesson.quiz && new Set(lesson.quiz.options).size === 3, `${lesson.id}: invalid quiz options`)
}
assert.equal(lessons.length, 544, 'Expected 544 original lessons across ten categories')
assert.equal(guides.length, lessons.length, 'Each original lesson needs exactly one new guide')
assert.equal(new Set(guides.map((guide) => guide.id)).size, guides.length, 'Duplicate teaching guide ID')
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
console.log(`Validated ${lessons.length} rewritten lessons, ${learningPaths.length} paths, ${scenes.size} distinct scenes, ${visualCount} visuals and ${paragraphs.size} unique teaching paragraphs.`)