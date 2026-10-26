import assert from 'node:assert/strict'
import { lessons, categories, learningPaths } from '../src/data/index.ts'
import { lessonSchema } from '../src/lib/schema.ts'
import { guides, guideRevisionById, GUIDED_V2 } from '../src/teaching/index.ts'
import { lessonGuideSchema } from '../src/teaching/schema.ts'

// Approximate Flesch-Kincaid grade; the fixed heuristic keeps the gate deterministic.
function readingGrade(prose: string): number {
  const sentences = prose.split(/[.!?]+(?:\s|$)/).filter((part) => part.trim().length > 0)
  const words = prose.split(/\s+/).filter(Boolean)
  const syllables = words.reduce((sum, word) => {
    const bare = word.toLowerCase().replace(/[^a-z]/g, '')
    if (!bare) return sum
    const groups = bare.replace(/e$/, '').match(/[aeiouy]{1,2}/g)
    return sum + Math.max(1, groups ? groups.length : 1)
  }, 0)
  if (!sentences.length || !words.length) return 0
  return 0.39 * (words.length / sentences.length) + 11.8 * (syllables / words.length) - 15.59
}

function averageSentenceWords(prose: string): number {
  const sentences = prose.split(/[.!?]+(?:\s|$)/).filter((part) => part.trim().length > 0)
  if (!sentences.length) return 0
  return sentences.reduce((sum, part) => sum + part.trim().split(/\s+/).length, 0) / sentences.length
}

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
  assert(lesson.guide && lesson.revision && lesson.revision === guideRevisionById.get(lesson.id), `${lesson.id}: missing contextual rewrite`)
  const guideResult = lessonGuideSchema.safeParse(lesson.guide)
  assert(guideResult.success, `${lesson.id}: ${guideResult.success ? '' : guideResult.error.message}`)
  assert(!scenes.has(lesson.guide.scene.toLowerCase()), `${lesson.id}: repeated example setting`)
  scenes.add(lesson.guide.scene.toLowerCase())
  visualCount += lesson.guide.visuals.length
  for (const paragraph of lesson.body) {
    assert(!paragraphs.has(paragraph), `${lesson.id}: duplicate paragraph`)
    paragraphs.add(paragraph)
  }
  const prose = lesson.body.join(' ')
  const words = prose.split(/\s+/).length
  if (lesson.revision === GUIDED_V2) {
    assert(words >= 420 && words <= 900, `${lesson.id}: guided-v2 explanation has ${words} words; one idea thoroughly learned needs 420-900`)
    const average = averageSentenceWords(prose)
    assert(average <= 17, `${lesson.id}: sentences average ${average.toFixed(1)} words; shorten them for beginners`)
    const grade = readingGrade(prose)
    assert(grade <= 10.5, `${lesson.id}: reading grade ${grade.toFixed(1)} is above the guided-v2 ceiling; simplify the wording`)
  } else {
    assert(words >= 200 && words <= 600, `${lesson.id}: explanation has ${words} words; verify context and depth`)
  }
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