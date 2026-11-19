import type { Quiz, Source } from '../types'

export interface VisualItem {
  label: string
  detail: string
  value?: number
  color?: string
  x?: number
  y?: number
  shape?: 'person' | 'camera' | 'light' | 'object' | 'screen' | 'paper' | 'eye' | 'circle' | 'box'
}

export interface TeachingVisual {
  type: 'comparison' | 'flow' | 'timeline' | 'bars' | 'spatial' | 'layers' | 'swatches' | 'matrix' | 'dialogue'
  title: string
  alt: string
  caption: string
  items: VisualItem[]
  arrows?: { from: number; to: number; label?: string }[]
  unit?: string
}

export interface LessonGuide {
  id: string
  title?: string
  outcome: string
  scene: string
  sections: { title: string; paragraphs: string[] }[]
  visuals: TeachingVisual[]
  practice: {
    minutes: number
    needs: string[]
    steps: string[]
    notice: string
    troubleshooting: string
  }
  recall: {
    prompt: string
    answer: string
    hint: string
  }
  quiz: Quiz
  takeaway: string
  sourceNote: string
  sources?: Source[]
}

// A real photograph, artwork, film frame or diagram by someone else, shown beside the original teaching.
// Records live in photos.json and are written by scripts/lesson-photos.ts.
export interface LessonPhoto {
  src: string
  width: number
  height: number
  bytes: number
  sha256: string
  kind: 'photo' | 'artwork' | 'frame' | 'scan' | 'diagram' | 'meme'
  after: number
  title: string
  alt: string
  caption: string
  punchline?: string
  credit: { work: string; author: string; license: string; licenseUrl?: string; source: string; changes: string }
}

export interface LessonLink { id: string; why: string }