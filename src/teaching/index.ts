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

export const TEACHING_REVISION = 'guided-v1'
export const guides = [
  ...mindGuides, ...thinkingGuides, ...workGuides, ...techGuides, ...moneyGuides, ...lifeGuides,
  ...peopleGuides, ...wellbeingGuides, ...observerGuides, ...speakerGuides, ...presencePerspectiveGuides,
  ...cinemaCameraGuides, ...cinemaLightEditGuides, ...cinemaSoundStudyGuides,
  ...designColourTypeGuides, ...designUxDrawGuides, ...fieldGuides,
]
export const guideById = new Map(guides.map((guide) => [guide.id, guide]))