import { z } from 'zod'

const shortText = (max: number) => z.string().trim().min(1).max(max)
const source = z.object({
  title: shortText(500), publisher: shortText(300),
  url: z.string().url().refine((value) => { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password }),
}).strict()

export const teachingVisualSchema = z.object({
  type: z.enum(['comparison', 'flow', 'timeline', 'bars', 'spatial', 'layers', 'swatches', 'matrix', 'dialogue']),
  title: shortText(120), alt: shortText(1000), caption: shortText(700),
  items: z.array(z.object({
    label: shortText(40), detail: shortText(160),
    value: z.number().finite().nonnegative().optional(),
    color: z.string().regex(/^#[a-f\d]{6}$/i).optional(),
    x: z.number().min(10).max(90).optional(), y: z.number().min(10).max(90).optional(),
    shape: z.enum(['person', 'camera', 'light', 'object', 'screen', 'paper', 'eye', 'circle', 'box']).optional(),
  }).strict()).min(2).max(6),
  arrows: z.array(z.object({ from: z.number().int().nonnegative(), to: z.number().int().nonnegative(), label: shortText(45).optional() }).strict()).max(12).optional(),
  unit: shortText(60).optional(),
}).strict().superRefine((visual, context) => {
  for (const arrow of visual.arrows ?? []) if (arrow.from >= visual.items.length || arrow.to >= visual.items.length || arrow.from === arrow.to) {
    context.addIssue({ code: 'custom', message: 'Invalid diagram connector index' })
  }
  if (visual.type === 'bars' && (!visual.unit || visual.items.some((item) => item.value === undefined))) context.addIssue({ code: 'custom', message: 'A bar diagram requires a unit and values' })
  if (visual.type === 'spatial' && visual.items.some((item) => item.x === undefined || item.y === undefined || !item.shape)) context.addIssue({ code: 'custom', message: 'A spatial diagram requires coordinates and shapes' })
  if (visual.type === 'swatches' && visual.items.some((item) => !item.color)) context.addIssue({ code: 'custom', message: 'A swatch diagram requires specific colors' })
})

export const lessonGuideSchema = z.object({
  id: z.string().regex(/^[a-z]+-\d{3}$/), title: shortText(80).optional(),
  outcome: shortText(200), scene: shortText(280),
  sections: z.array(z.object({ title: shortText(120), paragraphs: z.array(shortText(2200)).min(1).max(4) }).strict()).min(2).max(5),
  visuals: z.array(teachingVisualSchema).min(1).max(3),
  practice: z.object({
    minutes: z.number().int().min(1).max(30), needs: z.array(shortText(160)).min(1).max(6),
    steps: z.array(shortText(1000)).min(3).max(6), notice: shortText(700), troubleshooting: shortText(800),
  }).strict(),
  recall: z.object({ prompt: shortText(1000), answer: shortText(1600), hint: shortText(500) }).strict(),
  quiz: z.object({
    question: shortText(800), options: z.tuple([shortText(700), shortText(700), shortText(700)]),
    correctIndex: z.union([z.literal(0), z.literal(1), z.literal(2)]), explanation: shortText(1800),
  }).strict(),
  takeaway: shortText(1200), sourceNote: shortText(1600), sources: z.array(source).min(1).max(5).optional(),
}).strict()