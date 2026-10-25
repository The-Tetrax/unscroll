export const CATEGORY_IDS = ['mind', 'work', 'money', 'life', 'people', 'tech', 'thinking', 'wellbeing'] as const
export type CategoryId = (typeof CATEGORY_IDS)[number]

export interface Source {
  title: string
  url: string
  publisher: string
}

export interface Quiz {
  question: string
  options: [string, string, string]
  correctIndex: 0 | 1 | 2
  explanation: string
}

export interface Lesson {
  id: string
  category: CategoryId
  topic: string
  title: string
  hook: string
  body: string[]
  takeaway: string
  action: string
  quiz?: Quiz
  sources: Source[]
  evidence: 'research' | 'framework' | 'reference'
  kind?: 'discovery'
  publishedAt?: string
  attribution?: {
    author: string
    license: string
    licenseUrl: string
    historyUrl: string
  }
}

export interface Category {
  id: CategoryId
  name: string
  subtitle: string
  description: string
  symbol: string
  color: string
}

export interface Completion {
  date: string
  correct: boolean | null
}

export interface Review {
  due: string
  interval: number
  repetitions: number
  lastReviewed?: string
}

export interface Collection {
  id: string
  name: string
  lessonIds: string[]
}

export interface AppState {
  version: 1
  name: string
  goal: 3 | 5 | 7
  interests: CategoryId[]
  completed: Record<string, Completion>
  saved: string[]
  notes: Record<string, string>
  reviews: Record<string, Review>
  collections: Collection[]
  activity: Record<string, number>
  delivered: string[]
  daily: { date: string; ids: string[] }
  xp: number
  joined: string
  reducedMotion: boolean
  welcomeDismissed: boolean
  followedPath?: string
}

export interface DiscoveryEdition {
  date: string
  lessons: Lesson[]
  status: 'fresh' | 'cached' | 'unavailable'
  message?: string
}

export type Page = 'today' | 'explore' | 'vault' | 'review' | 'profile'