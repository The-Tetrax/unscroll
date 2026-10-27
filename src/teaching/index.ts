import { mindGuides } from './mind'
import { thinkingGuides } from './thinking'
import { workGuides } from './work'
import { techGuides } from './tech'
import { moneyGuides } from './money'
import { lifeGuides } from './life'
import { peopleGuides } from './people'
import { wellbeingGuides } from './wellbeing'
import { observerGuides } from './observer'
import { speakerGuides } from './speaker'
import { presencePerspectiveGuides } from './presence-perspective'
import { cinemaCameraGuides } from './cinema-camera'
import { cinemaLightEditGuides } from './cinema-light-edit'
import { cinemaSoundStudyGuides } from './cinema-sound-study'
import { designColourTypeGuides } from './design-colour-type'
import { designUxDrawGuides } from './design-ux-draw'
import { fieldGuides } from './field-guides'
import type { LessonGuide } from './types'

// Lesson text revisions. A module flips to GUIDED_V2 only when every lesson in it
// meets the guided-v2 contract in docs/TEACHING.md. Flipping resets only
// incompatible unfinished quiz drafts, never notes, completions, or collections.
export const GUIDED_V1 = 'guided-v1'
export const GUIDED_V2 = 'guided-v2'
// Asset URL namespace, pinned separately so unchanged diagrams keep their URLs
// and installed phones do not re-download the whole library on a text revision.
export const VISUAL_REVISION = 'guided-v1'

const modules: [list: LessonGuide[], revision: string][] = [
  [mindGuides, GUIDED_V2], [thinkingGuides, GUIDED_V2], [workGuides, GUIDED_V2], [techGuides, GUIDED_V2],
  [moneyGuides, GUIDED_V1], [lifeGuides, GUIDED_V1], [peopleGuides, GUIDED_V1], [wellbeingGuides, GUIDED_V2],
  [observerGuides, GUIDED_V1], [speakerGuides, GUIDED_V2], [presencePerspectiveGuides, GUIDED_V2],
  [cinemaCameraGuides, GUIDED_V1], [cinemaLightEditGuides, GUIDED_V1], [cinemaSoundStudyGuides, GUIDED_V1],
  [designColourTypeGuides, GUIDED_V1], [designUxDrawGuides, GUIDED_V1], [fieldGuides, GUIDED_V2],
]
export const guides = modules.flatMap(([list]) => list)
export const guideById = new Map(guides.map((guide) => [guide.id, guide]))
export const guideRevisionById = new Map(modules.flatMap(([list, revision]) => list.map((guide) => [guide.id, revision] as const)))