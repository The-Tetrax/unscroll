import { z } from 'zod'
import { CATEGORY_IDS } from '../types.ts'

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
  body: z.array(z.string().min(1).max(8000)).min(1).max(8),
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
    if (!lesson.id.startsWith('wiki-') || !lesson.attribution || !lesson.publishedAt) {
      ctx.addIssue({ code: 'custom', message: 'Discoveries require stable wiki IDs, date, and attribution' })
    }
    if (lesson.sources.some((source) => new URL(source.url).hostname !== 'en.wikipedia.org')) {
      ctx.addIssue({ code: 'custom', message: 'Discovery sources must be English Wikipedia articles' })
    }
  } else if (!lesson.quiz) {
    ctx.addIssue({ code: 'custom', message: 'An original lesson needs a retrieval question' })
  }
})

export const stateSchema = z.object({
  version: z.literal(1),
  name: z.string().max(40),
  goal: z.union([z.literal(3), z.literal(5), z.literal(7)]),
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
  followedPath: safeId.optional(),
}).strict()

export const editionSchema = z.object({
  date: dateSchema,
  lessons: z.array(lessonSchema).max(12),
  status: z.enum(['fresh', 'cached', 'unavailable']),
  message: z.string().max(600).optional(),
}).strict().refine((edition) => edition.lessons.every((lesson) => lesson.kind === 'discovery'), 'Edition can only contain attributed discoveries')

export const backupSchema = z.object({
  app: z.literal('UNSCROLL'),
  version: z.literal(1),
  exportedAt: z.string().datetime(),
  state: stateSchema,
  discoveries: z.array(lessonSchema).max(10000),
}).strict()