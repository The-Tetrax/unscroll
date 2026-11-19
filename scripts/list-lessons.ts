// Authoring aid: prints a compact outline of lessons so photographs and connections can be planned.
// Usage: tsx scripts/list-lessons.ts [id-prefix ...] [--full] [--idea] [--counts]
import { lessons } from '../src/data/index.ts'

const args = process.argv.slice(2)
const prefixes = args.filter((value) => !value.startsWith('--'))
const full = args.includes('--full')
const idea = args.includes('--idea')

if (args.includes('--counts')) {
  const counts = new Map<string, number>()
  for (const lesson of lessons) {
    const key = `${lesson.id.split('-')[0]} (${lesson.category})`
    counts.set(key, (counts.get(key) ?? 0) + 1)
  }
  for (const [key, count] of counts) console.log(`${String(count).padStart(4)}  ${key}`)
  console.log(`${String(lessons.length).padStart(4)}  total`)
} else {
  for (const lesson of lessons) {
    if (prefixes.length && !prefixes.some((prefix) => lesson.id.startsWith(prefix))) continue
    const guide = lesson.guide!
    console.log(`${lesson.id} | ${lesson.title} | ${guide.outcome}`)
    if (full) {
      console.log(`   scene: ${guide.scene}`)
      console.log(`   sections: ${guide.sections.map((section) => section.title).join(' / ')}`)
      console.log(`   visuals: ${guide.visuals.map((visual) => `${visual.type}: ${visual.title}`).join(' / ')}`)
    }
    // The second section opens with the lesson's own comparison, which a picture should match.
    if (idea) console.log(`   idea: ${guide.sections[1].title}: ${guide.sections[1].paragraphs[0].slice(0, 280)}`)
  }
}
