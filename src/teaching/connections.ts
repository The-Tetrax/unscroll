import type { LessonLink } from './types'

// Hand-picked pairs of lessons that explain each other. A pair is shown in both lessons,
// so each reason is written to read correctly from either side.
export const lessonPairs: [first: string, second: string, why: string][] = [
  // Light, tone and color: the film lessons and the design lessons meet here.
  ['cinema-007', 'design-011', 'Both deal with detail lost to brightness. One protects it while recording. The other shows why editing afterwards cannot bring it back.'],
  ['cinema-005', 'design-011', 'Both pull apart faults that look alike on a screen. One separates sharpness from brightness. The other separates tonal contrast from edge sharpness.'],
  ['cinema-043', 'design-012', 'Both match two shots by comparing one surface that appears in each: a white page beside a hand in one lesson, pattern paper on a sewing table in the other.'],
  ['cinema-031', 'design-010', 'Both face a room lit by a window and a warm lamp at once. One removes a source before recording. The other chooses which light a neutral sample stands for when correcting.'],
  ['cinema-044', 'design-008', 'Both keep a neutral, corrected copy before any look is applied, so the look stays a separate choice that can be undone.'],
  ['cinema-026', 'design-043', 'Both read an edge as a transition. One judges light by how gradually a shadow edge changes. The other draws each boundary as abrupt, gradual or lost.'],
  ['cinema-025', 'design-044', 'Both start from one light direction and ask which surfaces it reaches. One places a camera beside a window. The other sorts the shadow on an object from the shadow it throws.'],
  ['cinema-042', 'design-003', 'Both hold one thing fixed and change only its neighbor. A gray sample looks lighter or darker by its surround, and a shot suggests a different story by the image beside it.'],
  // Framing, viewpoint and drawing.
  ['cinema-004', 'design-046', 'Both treat placement as a choice to compare, not a rule to obey. One tests a subject centered and off center. The other tests several small studies before committing to one.'],
  ['cinema-008', 'design-041', 'Both follow from where the observer stands. Moving the camera changes relative sizes in a shot, and one eye level decides where a drawn box sends its edges.'],
  ['cinema-009', 'design-041', 'Eye level is the link. Camera height decides what the lens can see over, and that same level is the horizon a drawn box has to agree with.'],
  ['cinema-010', 'design-001', 'Both keep a subject readable by separating it from what lies behind it. One shifts the camera to open a gap between layers. The other changes how light or dark the background is.'],
  ['cinema-059', 'design-037', 'Both begin a drawing with direction and simple masses before any outline or polish. One plans three shots that way. The other studies how a leaf bends.'],
  ['cinema-061', 'design-045', 'Both learn from work you admire without passing a copy off as your own. One keeps the craft question and leaves the scene behind. The other labels study, recall and redesign as separate stages.'],
  ['design-038', 'fg-017', 'Both draw from structure instead of a memorized symbol. A kettle is built from volumes that can turn, and each round opening follows the ellipse you actually see at that tilt.'],
  ['design-042', 'fg-018', 'Value groups decide how dark each patch should be. Hatching is one way to reach those darks with a pen, through line spacing and crossing layers.'],
  ['design-044', 'fg-019', 'Both explain a dark patch by pointing to its cause. One sorts the shadow on an object from the shadow it throws. The other uses a few thrown shadows to suggest a whole ridged surface.'],
  ['design-040', 'fg-020', 'Both fix proportions with straight checks before any detail. An envelope compares angles and extents inside one drawing, and a grid carries landmarks across to a larger one.'],
  // Time and sampling in moving pictures.
  ['cinema-012', 'fg-013', 'Both separate timing questions hidden inside one video frame. Pictures per second and exposure time are different settings, and a leaning edge has a different cause from a smeared one.'],
  ['cinema-032', 'fg-014', 'Both show bands that exist only in the recording. They appear when a regular pattern, in time or in space, is sampled at a rate that does not match it.'],
  ['cinema-060', 'fg-015', 'Both keep the total length fixed and move time around inside it. One shifts hold time between storyboard panels. The other changes the spacing between stop-motion positions.'],
  ['cinema-022', 'fg-016', 'Both use a sound from outside the picture to set up what happens next. One chooses the moment the camera answers it. The other makes sure a caption carries it at the moment it is heard.'],
  // Interfaces that stay usable.
  ['design-026', 'fg-021', 'Both ask a control to say what it does. One gives each action a visible cue and its own control. The other makes sure the name read aloud contains the same visible words.'],
  ['design-028', 'fg-022', 'Both plan where keyboard focus lands. One sends it to the field that needs repair. The other gives a dialog an entry point, a loop and a way back.'],
  ['design-031', 'fg-023', 'Both carry the same facts through a second channel. A status must survive without its color, and a saved result must survive without its animation.'],
  ['design-024', 'fg-024', 'Both decide what a layout may reserve and what must stay free to grow. Image space is reserved before the picture loads, while text containers are left to expand.'],
  // Feedback and testing with other people.
  ['cinema-020', 'design-036', 'Both turn a vague reaction into one observation and one change to test, and both keep the comment on the work instead of the person who made it.'],
  ['cinema-063', 'design-035', 'Both test with a fresh viewer and no coaching. One asks what changed in a scene. The other gives a goal and watches whether the design alone gets someone there.'],
]

export const linksById = new Map<string, LessonLink[]>()
for (const [first, second, why] of lessonPairs) {
  linksById.set(first, [...(linksById.get(first) ?? []), { id: second, why }])
  linksById.set(second, [...(linksById.get(second) ?? []), { id: first, why }])
}
