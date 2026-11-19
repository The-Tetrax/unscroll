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
  // Rates, counts and averages: the thinking lessons beside the places their numbers turn up.
  ['thinking-009', 'tech-037', 'Both fix the denominator before reading a rate. One divides failures by the chances each thing had to fail. The other checks who was counted before trusting a success percentage.'],
  ['thinking-010', 'observer-003', 'Both count the false alarms as well as the hits. One asks what share of an alarm pile is genuine. The other sorts every yes-or-no call into four boxes and counts all four.'],
  ['thinking-015', 'tech-038', 'Both look behind an average at the slowest cases. One shows how a correct average hides the worst experiences. The other reads percentiles as sorted positions that cannot be averaged.'],
  ['thinking-038', 'tech-011', 'Both ask what a speed-up leaves untouched. One works out the ceiling when a single stage of a job gets faster. The other shows why a faster plan barely shortens a round trip.'],
  ['thinking-036', 'tech-013', 'Both separate how much is waiting from how fast it moves. One shows that balanced rates leave an old backlog in place. The other shows how a busy link turns extra traffic into delay.'],
  ['thinking-036', 'money-037', 'Both keep a pile apart from the flows in and out of it. A backlog stays when the rates merely balance, and a card balance can rise when a minimum payment meets new purchases.'],
  ['thinking-037', 'fg-005', 'Both follow a reaction that feeds the problem it answers. Retries can keep a slowdown going, and corrections already sent but not yet arrived make the next correction overshoot.'],
  ['thinking-039', 'money-011', 'Both count what two things share before calling them separate. Two backups can fall to one cause, and two funds with different names can hold the same company.'],
  ['money-028', 'wellbeing-031', 'Both put two figures on the same base before comparing. One divides the price by the amount you will actually use. The other puts two labels on the same quantity in the same state.'],
  // Evidence, explanations and what one result can prove.
  ['thinking-011', 'observer-013', 'Both look for the clue that tells explanations apart. One asks whether evidence fits your preferred explanation better than its rivals. The other writes what each explanation would lead you to check.'],
  ['thinking-014', 'observer-015', 'Both doubt a clean result. One shows why no failures in a small test is not zero risk. The other traces each step that had to work for the missing evidence to appear where you looked.'],
  ['thinking-007', 'fg-001', 'Both ask what would have happened anyway. One subtracts the improvement a comparison group got without the change. The other explains why a rebound after a worst week proves little by itself.'],
  ['thinking-020', 'observer-028', 'Both ask whether agreeing answers are independent. Repeated readings from one instrument can share one error, and accounts compared after talking can share one borrowed memory.'],
  ['thinking-022', 'tech-005', 'Both refuse to treat one passed check as the whole outcome. One separates a necessary condition from a sufficient one. The other finds the last proven step between a Wi-Fi icon and an open page.'],
  ['thinking-023', 'work-040', 'Both match the size of a claim to its evidence. One asks what it takes to prove a claim about every case. The other records one protection that worked without calling the other paths safe.'],
  ['thinking-026', 'work-025', 'Both keep a failed attempt from proving too much. A broken argument does not make its claim false, and a test that did not reproduce a bug rules out only what it actually touched.'],
  ['work-023', 'cinema-001', 'Both change one thing at a time so a result has one explanation. One isolates the fix that mattered from a bundle of changes. The other corrects one visible fault per take from a plain baseline.'],
  ['work-033', 'life-018', 'Both test the safeguard itself. One asks whether a regression test would go red if the bug came back. The other restores one known file from a backup and opens it before trusting it.'],
  ['tech-040', 'life-018', 'Both ask for proof beyond a green light. One pairs outside-in checks with internal metrics and checks how old the green is. The other proves a backup by restoring a file and opening it.'],
  ['money-020', 'life-018', 'Both rehearse a recovery before it is needed, without breaking anything. One maps the route from a balance to a payment and where it could stop. The other restores one file into a test folder.'],
  // Status words that must keep one meaning: done, sent, saved, offline, undone.
  ['thinking-024', 'work-001', 'Both pin down what a status word must mean. One catches the word complete changing meaning in the middle of an argument. The other agrees beforehand what evidence of done someone could inspect.'],
  ['work-016', 'design-027', 'Both report a confirmed state, not an action taken. An update says what a teammate can now use, and an interface calls a map offline only after the system has confirmed it.'],
  ['life-015', 'design-027', 'Both separate arrived from in effect. A downloaded update may not be the running one, and a started download is not an offline map until the system confirms it.'],
  ['work-020', 'tech-017', 'Both separate received from accepted. A handoff closes when the next person says yes to owning it, and an acknowledged network delivery does not mean the application saved the request.'],
  ['work-020', 'observer-022', 'Both treat sending as half the job. A handoff needs a yes from the next person, and a meeting plan needs confirmation that it arrived, plus what you both do if phones fail.'],
  ['work-028', 'tech-022', 'Both keep accepted, finished and correct apart. One checks the outcome after a step reports success. The other keeps a background job pending until its own lifecycle gives a final result.'],
  ['thinking-032', 'work-029', 'Both ask what undo really restores. One tests any change for the state that is kept and can still be reached. The other shows that putting the old program back leaves what the new one wrote.'],
  // Forecasts, decisions and hindsight.
  ['thinking-016', 'work-018', 'Both stop a range from being heard as a promise. One separates how well an average is known from where one case may land. The other attaches assumptions and a checkpoint to an estimate.'],
  ['thinking-033', 'work-008', 'Both find the one uncertain point that decides the matter. One calculates where two options swap places. The other tests the assumption whose failure would sink a plan before polishing anything.'],
  ['thinking-034', 'work-036', 'Both keep hindsight out of a review. One judges a decision by what was knowable when it was made. The other rebuilds an incident with separate clocks for what happened, what was visible and what was understood.'],
  ['observer-027', 'thinking-034', 'Both preserve what was known before the outcome arrived. One writes down a memory and its confidence before any feedback. The other judges a decision by the information available when it was made.'],
  ['mind-032', 'observer-017', 'Both check confidence against results. One writes down how well you think you know a page and tests it later. The other groups forecasts by stated probability and counts how often they came true.'],
  ['thinking-028', 'money-027', 'The same idea in two settings: a choice costs the one best thing it displaces. One applies it to a free event and your time. The other applies it to an optional purchase and your money.'],
  ['work-009', 'cinema-035', 'Both write the reason down at the moment of choosing. One records the constraint that decided a design and what should reopen it. The other notes why a take was selected and keeps the others.'],
  // Routines, triggers and gaps.
  ['mind-009', 'life-005', 'Both tie an action to a trigger you can observe. One attaches a small routine to a moment that already happens. The other writes a maintenance reminder around what actually makes the task due.'],
  ['mind-010', 'money-030', 'Both decide before the tempting moment arrives. One writes what to do when a familiar blocker interrupts practice. The other writes a purchase condition and a full budget before seeing any sale.'],
  ['mind-014', 'wellbeing-040', 'Both treat a missed day as information, not a debt. One asks whether the trigger never came or something got in the way. The other resumes at the planned size without stacking sessions.'],
  ['mind-028', 'wellbeing-036', 'Both treat a gap as part of the plan. Spaced practice puts days between sessions and opens each with recall, and a demanding session is followed by an unbooked day kept for recovery.'],
  ['mind-021', 'life-010', 'Both move open states out of memory to where you can inspect them. One tables the items of an errand by state. The other gives each waiting request its own entry with a check date.'],
  ['tech-007', 'life-007', 'Both act well before an expiry. A DHCP lease is renewed before it runs out, and an admin deadline gets its preparation entry early enough for the reminder to arrive with time to act.'],
  // Access, fine print and what you keep.
  ['tech-026', 'money-035', 'Both say what a secure connection covers and what it does not. One marks the stretch of road that HTTPS protects. The other checks the identity and terms of a shop as questions the padlock cannot answer.'],
  ['tech-027', 'life-014', 'Both split access into two questions: who is let in, and what they may do there. One treats them as separate checks with separate evidence. The other checks both settings on a document link.'],
  ['tech-030', 'life-013', 'Both shrink access to fit the task. One scopes a role by action, target and duration. The other narrows what an app can reach to the one job you still use it for, then tests that job.'],
  ['money-022', 'life-022', 'Both read fine print against one specific event. One tests a described loss against the definitions and exclusions of a policy. The other asks of each warranty whether one feared failure is covered.'],
  ['money-025', 'life-016', 'Both prepare a record for the day you must find it. One keeps proof of ownership where the loss of the item cannot reach it. The other names files so the right one can be picked unopened.'],
  ['money-004', 'life-019', 'Both check what you keep before letting something go. One ends a subscription with the company that bills it and copies out needed files. The other opens an exported note outside its app.'],
  ['work-010', 'money-026', 'Both count the costs that come after the first one. An automation is costed over its whole operating life, and a purchase is compared by its price plus its running costs over the same use.'],
  // Proposals, plans and reviews.
  ['work-006', 'life-027', 'Both lead with the problem and hold back the favored fix. A proposal opens with the decision someone cannot make, and a repair report opens with the symptom, not a guessed part.'],
  ['work-013', 'people-035', 'Both handle an outcome that depends on someone else. One turns waiting on a team into a named need, an owner and a fallback. The other promises only your part and says what is not confirmed.'],
  ['people-035', 'perspective-001', 'Both split a request into your part and a decision that belongs to someone else. One promises only the asking and the reporting back. The other separates your action from results you do not control.'],
  ['work-014', 'cinema-062', 'Both secure a complete, working whole before any extras. One slices a feature into pieces that each leave the app working. The other records the whole event in one wide shot before detail shots.'],
  ['work-030', 'design-035', 'Both find gaps by watching someone new without coaching. One walks a newcomer through a checklist and writes in every answer they needed. The other gives a prototype user a goal, not a route.'],
  ['work-035', 'speaker-004', 'Both replace adjectives with one concrete case. Reviewers settle a disagreement on an input where their preferences differ, and a speaker backs a claim with a scene listeners can check.'],
  ['speaker-002', 'work-031', 'Both give the audience a route before the detail. One says the parts of a talk aloud and marks each change of subject. The other tells a reviewer what a change does and where to start reading.'],
  ['speaker-001', 'work-019', 'Both begin from what the audience needs to do. One builds a talk around one thing listeners should be able to explain. The other writes the same news for two readers with different decisions.'],
  // Listening, turns and what a person actually said.
  ['people-001', 'presence-017', 'Both wait for the end of a turn. One hears a whole account before choosing a reply. The other treats a message still being composed as a turn in progress and follows the signal its sender gives.'],
  ['people-004', 'speaker-009', 'Both use silence on purpose. A listener leaves a gap and offers a real choice to continue or stop, and a speaker places a pause between two complete ideas, then checks what was understood.'],
  ['tech-001', 'presence-008', 'Both are about taking turns on one shared channel. Wi-Fi devices spend time waiting before they send, and two people who start talking together need a repair that brings the yielded turn back.'],
  ['people-012', 'observer-032', 'Both keep a report the same size as what was said. One restates a complaint without enlarging it. The other keeps a remembered gist apart from an exact record and never presents it as a quotation.'],
  ['people-019', 'cinema-023', 'Both treat a wider audience as a new question. One asks before repeating a private story, naming who would hear what. The other agrees recording and sharing as separate decisions.'],
  ['people-021', 'observer-001', 'Both start from what was seen, before any explanation. One raises a problem as event, effect and requested change. The other keeps the observation, the possible explanations and one check in separate columns.'],
  ['people-023', 'observer-028', 'Both let each account stand alone before the accounts are compared. One offers two people separate turns and checks each was understood. The other has each witness write a note before anyone talks.'],
  ['mind-015', 'people-013', 'Both keep a feeling apart from a verdict about someone. One separates how you feel from why they acted. The other offers a guessed feeling as a question the person can correct.'],
  ['presence-004', 'observer-005', 'Both stop reading meaning into where someone looks. One replaces an eye-contact rule with an agreement people can use. The other treats a glance away as something seen, not a message.'],
  ['presence-012', 'speaker-005', 'Both keep how a speaker comes across from grading the claim. One separates ease of listening from truth. The other checks credibility, emotion and reasoning as three separate questions.'],
  ['observer-012', 'fg-012', 'Both keep the account a person gives beside your version of it. One adds their correction with a name and a time and marks the first reading as corrected. The other keeps the account when no form box fits.'],
  ['perspective-020', 'fg-012', 'Both give weight to the one person a system does not fit. One tests a shared rule by whether it can be justified to each person under it. The other keeps an account when the form has no box for it.'],
  // Arguments, sources and loaded questions.
  ['speaker-006', 'thinking-021', 'Both look under an argument at what it starts from. One says the unstated premise aloud and tries another in its place. The other checks the starting claims in a separate pass from the logic.'],
  ['speaker-008', 'observer-025', 'Both keep a claim attached to where it came from. One says the source and its kind of evidence aloud beside the claim. The other asks where a remembered detail was learned before passing it on.'],
  ['speaker-008', 'cinema-058', 'Both mark where evidence stops and interpretation begins. One names the source beside each spoken claim. The other keeps what an image shows, how a viewer reads it and what the maker said in separate notes.'],
  ['speaker-014', 'observer-009', 'Both find the fact a question quietly assumes. One corrects that premise and still answers the concern beneath it. The other removes it, so the question can be answered with no involvement at all.'],
  ['speaker-015', 'observer-008', 'Both leave a gap visible instead of filling it with a guess. One states exactly what is not known and keeps old figures dated. The other writes a placeholder for a character that cannot be read.'],
  ['speaker-007', 'cinema-057', 'Both stop one example from standing for a whole group. One presents a story as the experience of one person in one time and place. The other compares two film passages without ranking cultures.'],
  // Seeing a scene and reading a group.
  ['observer-002', 'cinema-056', 'Both describe an arrangement before explaining it. One records where each object sits from your viewpoint. The other reads a staged relationship from who can reach, see or move a prop.'],
  ['observer-004', 'cinema-014', 'Both check a sightline before anything else. One asks whether a witness could physically see a detail from where they sat. The other checks the action from the lens that will record it.'],
  ['observer-007', 'fg-004', 'Both stop guessing what a group wants. One gives everyone one explicit way to answer, instead of reading a nod. The other keeps your wish, your guess about others and their real answers apart.'],
  ['observer-010', 'design-025', 'Both judge by one real attempt, not a label or a liking. One walks through the last attempt to find the step where it stopped. The other defines success as reaching a named screen state.'],
  ['observer-011', 'fg-011', 'Both look at the edges of a permission. One agrees what an observation covers and stops when something outside it appears. The other asks what keeps a permission from being cancelled at will.'],
  // Fair rules and side effects.
  ['people-038', 'perspective-014', 'The same test in two settings: pick the rule before you know your place under it. One splits a shared cost that way. The other tests any shared rule, then asks the people who hold each position.'],
  ['perspective-012', 'fg-006', 'Both ask what a change could break as well as what it improves. One separates gaining from variation from merely surviving it. The other adds a balancing measure to catch work that only moved elsewhere.'],
]

export const linksById = new Map<string, LessonLink[]>()
for (const [first, second, why] of lessonPairs) {
  linksById.set(first, [...(linksById.get(first) ?? []), { id: second, why }])
  linksById.set(second, [...(linksById.get(second) ?? []), { id: first, why }])
}
