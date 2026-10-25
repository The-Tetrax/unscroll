import type { Category } from '../types'

export const categories: Category[] = [
  { id: 'mind', name: 'Psychology', subtitle: 'Know your own mind', description: 'Attention, habits, emotions, and the shortcuts your brain takes.', symbol: '◎', color: '#d6b9fa' },
  { id: 'work', name: 'Work & career', subtitle: 'Make your work count', description: 'Better decisions, clearer updates, and an early-career toolkit.', symbol: '↗', color: '#f0c777' },
  { id: 'money', name: 'Money', subtitle: 'Build your future', description: 'Fees, risk, spending, and financial concepts without the hype.', symbol: '¥', color: '#b9d9b1' },
  { id: 'life', name: 'Everyday life', subtitle: 'Small fixes. Better days.', description: 'Useful systems for your home, phone, routines, and decisions.', symbol: '※', color: '#ebbaa3' },
  { id: 'people', name: 'People skills', subtitle: 'Connect, without guessing', description: 'Listen well, set boundaries, and handle difficult conversations.', symbol: '⤮', color: '#e6b7c8' },
  { id: 'tech', name: 'Tech & systems', subtitle: 'Understand what connects', description: 'Networking, security, and engineering ideas you can use at work.', symbol: '⌘', color: '#accddd' },
  { id: 'thinking', name: 'Clear thinking', subtitle: 'Question the obvious', description: 'Mental models, probabilities, evidence, and better judgment.', symbol: '◇', color: '#d4ceb3' },
  { id: 'wellbeing', name: 'Wellbeing', subtitle: 'Look after the operator', description: 'Evidence-informed basics for sleep, movement, and recovery.', symbol: '≈', color: '#b5d4c6' },
  { id: 'cinema', name: 'Cinema & photography', subtitle: 'Train your cinematic eye', description: 'Phone filmmaking, directing, light, editing, sound, and cinema literacy.', symbol: '▧', color: '#edb592' },
  { id: 'design', name: 'Design & drawing', subtitle: 'Learn to see, then make', description: 'Colour, type, spacing, UI critique, and drawing through observation and construction.', symbol: '◒', color: '#c7cdb0' },
]

export const categoryById = Object.fromEntries(categories.map((category) => [category.id, category])) as Record<Category['id'], Category>