import { z } from 'zod'
import { CATEGORY_IDS } from '../types.ts'
import { lessonGuideSchema } from '../teaching/schema.ts'

export const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
  const date = new Date(`${value}T12:00:00Z`)
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value
}, 'Invalid calendar date')

const safeId = z.string().min(1).max(120).regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/)
  .refine((value) => !['__proto__', 'constructor', 'prototype'].includes(value), 'Reserved record key')
const httpsUrl = z.string().max(2000).refine((value) => {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && !url.username && !url.password
  } catch { return false }
}, 'A public HTTPS source is required')

export const lessonSchema = z.object({
  id: safeId,
  category: z.enum(CATEGORY_IDS),
  topic: z.string().min(1).max(120),
  title: z.string().min(1).max(180),
  hook: z.string().max(500),
  body: z.array(z.string().min(1).max(8000)).min(1).max(16),
  takeaway: z.string().min(1).max(1200),
  action: z.string().min(1).max(1800),
  quiz: z.object({
    question: z.string().min(1).max(800),
    options: z.tuple([z.string().min(1).max(700), z.string().min(1).max(700), z.string().min(1).max(700)]),
    correctIndex: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    explanation: z.string().min(1).max(1800),
  }).optional(),
  sources: z.array(z.object({ title: z.string().min(1).max(500), url: httpsUrl, publisher: z.string().min(1).max(300) })).min(1).max(5),
  evidence: z.enum(['research', 'framework', 'reference']),
  guide: lessonGuideSchema.optional(),
  revision: z.string().max(60).optional(),
  kind: z.literal('discovery').optional(),
  publishedAt: dateSchema.optional(),
  attribution: z.object({
    author: z.string().min(1).max(400),
    license: z.string().min(1).max(200),
    licenseUrl: httpsUrl,
    historyUrl: httpsUrl,
  }).optional(),
}).strict().superRefine((lesson, ctx) => {
  if (lesson.kind === 'discovery') {
    if (!/^wiki-[1-9]\d*$/.test(lesson.id) || !lesson.attribution || !lesson.publishedAt) {
      ctx.addIssue({ code: 'custom', message: 'Discoveries require stable wiki IDs, date, and attribution' })
    }
    const articleUrl = (value: string) => {
      try { const url = new URL(value); return url.origin === 'https://en.wikipedia.org' && url.pathname.startsWith('/wiki/') }
      catch { return false }
    }
    if (lesson.sources.some((source) => !articleUrl(source.url))) {
      ctx.addIssue({ code: 'custom', message: 'Discovery sources must be English Wikipedia articles' })
    }
    if (lesson.evidence !== 'reference' || lesson.quiz || lesson.guide || lesson.revision) ctx.addIssue({ code: 'custom', message: 'External extracts cannot pose as original research or illustrated lessons' })
    if (lesson.attribution) {
      let historyValid = false
      try {
        const url = new URL(lesson.attribution.historyUrl)
        historyValid = url.origin === 'https://en.wikipedia.org' && url.pathname === '/w/index.php' && url.searchParams.get('action') === 'history' && Boolean(url.searchParams.get('title'))
      } catch { /* Invalid URLs are reported as schema issues, never thrown. */ }
      if (!historyValid || lesson.attribution.author !== 'Wikipedia contributors'
        || lesson.attribution.license !== 'CC BY-SA 4.0' || lesson.attribution.licenseUrl !== 'https://creativecommons.org/licenses/by-sa/4.0/') {
        ctx.addIssue({ code: 'custom', message: 'External extracts require Wikipedia history and the correct CC BY-SA attribution' })
      }
    }
  } else if (!lesson.quiz) {
    ctx.addIssue({ code: 'custom', message: 'An original lesson needs a retrieval question' })
  }
})

export const stateSchema = z.object({
  version: z.literal(1),
  name: z.string().max(40),
  goal: z.union([z.literal(1), z.literal(3), z.literal(5), z.literal(7)]),
  interests: z.array(z.enum(CATEGORY_IDS)).min(1).max(CATEGORY_IDS.length),
  completed: z.record(safeId, z.object({ date: dateSchema, correct: z.boolean().nullable() })),
  saved: z.array(safeId).max(10000),
  notes: z.record(safeId, z.string().max(5000)),
  reviews: z.record(safeId, z.object({
    due: dateSchema,
    interval: z.number().int().min(1).max(365),
    repetitions: z.number().int().min(0).max(10000),
    lastReviewed: dateSchema.optional(),
  })),
  collections: z.array(z.object({
    id: safeId,
    name: z.string().trim().min(1).max(40),
    lessonIds: z.array(safeId).max(10000),
  })).max(40),
  activity: z.record(dateSchema, z.number().int().min(0).max(10000)),
  delivered: z.array(safeId).max(100000),
  daily: z.object({ date: dateSchema, ids: z.array(safeId).max(7) }),
  xp: z.number().int().min(0).max(100000000),
  joined: dateSchema,
  reducedMotion: z.boolean(),
  welcomeDismissed: z.boolean(),
  onboardingVersion: z.literal(1).optional(),
  readingSize: z.enum(['standard', 'large']).optional(),
  followedPath: safeId.optional(),
  readerDrafts: z.record(safeId, z.object({
    stage: z.enum(['read', 'try', 'recall']),
    choice: z.union([z.literal(0), z.literal(1), z.literal(2), z.null()]),
    revealed: z.boolean(),
    updatedAt: z.string().datetime(),
    lessonRevision: z.string().max(60).optional(),
  }).strict()).optional(),
  practices: z.record(safeId, z.object({
    status: z.enum(['planned', 'tried']),
    plannedOn: dateSchema,
    triedOn: dateSchema.optional(),
  }).strict().refine((practice) => practice.status === 'tried' ? Boolean(practice.triedOn && practice.triedOn >= practice.plannedOn) : practice.triedOn === undefined,
    'Practice dates must agree with their status')).optional(),
}).strict()

export const editionSchema = z.object({
  date: dateSchema,
  lessons: z.array(lessonSchema).max(12),
  status: z.enum(['fresh', 'cached', 'unavailable']),
  message: z.string().max(600).optional(),
}).strict()
  .refine((edition) => edition.lessons.every((lesson) => lesson.kind === 'discovery' && lesson.publishedAt === edition.date), 'Edition can only contain attributed discoveries from its stated date')
  .refine((edition) => new Set(edition.lessons.map((lesson) => lesson.id)).size === edition.lessons.length, 'An edition cannot contain duplicate articles')

export const backupSchema = z.object({
  app: z.literal('UNSCROLL'),
  version: z.literal(1),
  exportedAt: z.string().datetime(),
  state: stateSchema,
  discoveries: z.array(lessonSchema).max(10000),
}).strict()