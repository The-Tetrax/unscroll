import { guides } from '../src/teaching/index'

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length
const sentences = (s: string) => s.split(/[.!?]+\s/).filter((x) => x.trim().length > 0)

function syllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, '')
  if (!w) return 0
  const m = w.replace(/e$/, '').match(/[aeiouy]{1,2}/g)
  return Math.max(1, m ? m.length : 1)
}

const HEDGES = [
  'does not establish', 'not a tested', 'not tested', 'illustrative', 'hypothetical', 'invented',
  'not a diagnosis', 'not a guarantee', 'does not promise', 'not measured', 'schematic',
  'deliberately limited', 'omitted', 'not a network diagnosis', 'need not', 'not the definition',
]

interface Row {
  id: string
  module: string
  bodyWords: number
  totalWords: number
  sections: number
  paragraphs: number
  avgSentenceLen: number
  longSentences: number
  fkGrade: number
  hedges: number
  defsInline: number
}

const moduleOf = (id: string) => id.replace(/-\d+$/, '')
const rows: Row[] = []

const filter = process.argv[2]
for (const g of guides) {
  if (filter && !g.id.startsWith(filter)) continue
  const paras = g.sections.flatMap((s) => s.paragraphs)
  const body = paras.join(' ')
  const practiceText = [...g.practice.steps, g.practice.notice, g.practice.troubleshooting].join(' ')
  const total = body + ' ' + practiceText + ' ' + g.recall.prompt + ' ' + g.recall.answer + ' ' + g.quiz.question + ' ' + g.quiz.explanation + ' ' + g.takeaway
  const sents = sentences(body)
  const sentLens = sents.map((s) => words(s))
  const avgLen = sentLens.length ? sentLens.reduce((a, b) => a + b, 0) / sentLens.length : 0
  const wordList = body.split(/\s+/).filter(Boolean)
  const sylls = wordList.reduce((a, w) => a + syllables(w), 0)
  const fk = sents.length && wordList.length ? 0.39 * (wordList.length / sents.length) + 11.8 * (sylls / wordList.length) - 15.59 : 0
  const lower = body.toLowerCase()
  const hedgeCount = HEDGES.reduce((a, h) => a + (lower.split(h).length - 1), 0)
  // appositive-style inline definitions: ", or X," / ", the unit" / "means" / "is a set of"
  const defsInline = (body.match(/, or [a-z]+,|, the [a-z ]+ (that|delivered|carried)| means | is a | is one |refers to/gi) || []).length
  rows.push({
    id: g.id, module: moduleOf(g.id), bodyWords: words(body), totalWords: words(total),
    sections: g.sections.length, paragraphs: paras.length,
    avgSentenceLen: Math.round(avgLen * 10) / 10,
    longSentences: sentLens.filter((l) => l > 25).length,
    fkGrade: Math.round(fk * 10) / 10, hedges: hedgeCount, defsInline,
  })
}

const byModule = new Map<string, Row[]>()
for (const r of rows) {
  if (!byModule.has(r.module)) byModule.set(r.module, [])
  byModule.get(r.module)!.push(r)
}

const pct = (arr: number[], p: number) => {
  const s = [...arr].sort((a, b) => a - b)
  return s[Math.min(s.length - 1, Math.floor((p / 100) * s.length))]
}

console.log('TOTAL guides:', rows.length)
const allBody = rows.map((r) => r.bodyWords)
console.log('BODY words: min', Math.min(...allBody), 'p25', pct(allBody, 25), 'median', pct(allBody, 50), 'p75', pct(allBody, 75), 'max', Math.max(...allBody), 'mean', Math.round(allBody.reduce((a, b) => a + b, 0) / allBody.length))
const allTotal = rows.map((r) => r.totalWords)
console.log('TOTAL words incl practice/recall/quiz: median', pct(allTotal, 50), 'p75', pct(allTotal, 75))
const allFk = rows.map((r) => r.fkGrade)
console.log('FK grade: p25', pct(allFk, 25), 'median', pct(allFk, 50), 'p75', pct(allFk, 75), 'max', Math.max(...allFk))
const allSent = rows.map((r) => r.avgSentenceLen)
console.log('Avg sentence words: median', pct(allSent, 50), 'p90', pct(allSent, 90))
console.log('Lessons with FK grade >= 12:', rows.filter((r) => r.fkGrade >= 12).length)
console.log('Lessons with FK grade >= 10:', rows.filter((r) => r.fkGrade >= 10).length)
console.log('Lessons with body < 300 words:', rows.filter((r) => r.bodyWords < 300).length)
console.log('Lessons with body < 350 words:', rows.filter((r) => r.bodyWords < 350).length)
console.log('Lessons with >=1 hedge phrase:', rows.filter((r) => r.hedges > 0).length, ' total hedges:', rows.reduce((a, r) => a + r.hedges, 0))
console.log('Lessons with >=3 inline definitions:', rows.filter((r) => r.defsInline >= 3).length)
console.log('')
console.log('module          n   bodyW(med)  FK(med)  sentLen(med)  hedges(sum)')
for (const [m, rs] of [...byModule.entries()].sort()) {
  const bw = rs.map((r) => r.bodyWords)
  const fk = rs.map((r) => r.fkGrade)
  const sl = rs.map((r) => r.avgSentenceLen)
  console.log(
    m.padEnd(15), String(rs.length).padStart(3), String(pct(bw, 50)).padStart(10), String(pct(fk, 50)).padStart(8),
    String(pct(sl, 50)).padStart(12), String(rs.reduce((a, r) => a + r.hedges, 0)).padStart(10),
  )
}
console.log('')
console.log('10 densest lessons (FK grade):')
for (const r of [...rows].sort((a, b) => b.fkGrade - a.fkGrade).slice(0, 10)) {
  console.log(' ', r.id, 'FK', r.fkGrade, 'avgSent', r.avgSentenceLen, 'body', r.bodyWords)
}
console.log('')
console.log('10 shortest bodies:')
for (const r of [...rows].sort((a, b) => a.bodyWords - b.bodyWords).slice(0, 10)) {
  console.log(' ', r.id, r.bodyWords, 'words,', r.sections, 'sections')
}
if (filter) {
  console.log('')
  console.log('Per lesson (filtered):')
  for (const r of rows) {
    const flags = [
      r.bodyWords < 420 || r.bodyWords > 900 ? 'BAND' : '',
      r.avgSentenceLen > 17 ? 'SENT' : '',
      r.fkGrade > 10.5 ? 'GRADE' : '',
    ].filter(Boolean).join(',')
    console.log(' ', r.id, 'body', r.bodyWords, 'FK', r.fkGrade, 'avgSent', r.avgSentenceLen, 'hedges', r.hedges, flags ? `<< ${flags}` : 'ok')
  }
}
