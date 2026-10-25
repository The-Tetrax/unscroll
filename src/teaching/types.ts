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