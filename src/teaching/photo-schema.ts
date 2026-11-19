import { z } from 'zod'

const noLongDash = (value: string) => !/[\u2013\u2014]/.test(value)
const text = (min: number, max: number) => z.string().trim().min(min).max(max).refine(noLongDash, 'No long dashes')
const secureUrl = (test: (url: URL) => boolean) => z.string().max(600).refine((value) => {
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password && test(url) } catch { return false }
})

// Only public-domain and Creative Commons BY, BY-SA and CC0 files are accepted. No NC, ND, GFDL-only or fair use.
export const PHOTO_LICENSE = /^(?:Public domain|CC0 1\.0|CC BY(?:-SA)? [1-4]\.\d(?: [A-Za-z]{2,4})?)$/
export const PHOTO_KINDS = ['photo', 'artwork', 'frame', 'scan', 'diagram', 'meme'] as const

export const lessonPhotoSchema = z.object({
  src: z.string().regex(/^\/lesson-photos\/[a-z]+-\d{3}-[1-3]\.webp$/),
  width: z.number().int().min(200).max(1280),
  height: z.number().int().min(200).max(1280),
  bytes: z.number().int().positive().max(240_000),
  sha256: z.string().regex(/^[a-f\d]{64}$/),
  kind: z.enum(PHOTO_KINDS),
  after: z.number().int().min(0).max(4),
  title: text(4, 72),
  alt: text(20, 420),
  caption: text(40, 600),
  punchline: text(4, 120).optional(),
  credit: z.object({
    work: text(1, 220),
    author: text(1, 140),
    license: z.string().regex(PHOTO_LICENSE),
    licenseUrl: secureUrl((url) => url.hostname === 'creativecommons.org').optional(),
    source: secureUrl((url) => url.hostname === 'commons.wikimedia.org' && url.pathname.startsWith('/wiki/File:')),
    changes: text(4, 120),
  }).strict(),
}).strict().superRefine((photo, context) => {
  if ((photo.kind === 'meme') !== Boolean(photo.punchline)) context.addIssue({ code: 'custom', message: 'A punchline belongs to a memory hook and nothing else' })
  if (photo.credit.license !== 'Public domain' && !photo.credit.licenseUrl) context.addIssue({ code: 'custom', message: 'A Creative Commons file needs its license link' })
})

export const lessonPhotosSchema = z.record(z.string().regex(/^[a-z]+-\d{3}$/), z.array(lessonPhotoSchema).min(1).max(3))
