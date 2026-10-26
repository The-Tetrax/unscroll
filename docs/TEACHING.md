# Illustrated lesson authoring contract

Approved 2026-10-25 after the owner rejected the condensed first edition; the approval samples are in lesson-rewrite-samples.md. Revised 2026-10-26 (guided-v2) after the owner found the production rewrite still too compressed: every guided-v1 body landed in a 230-303 word band, stacked several new terms per paragraph, and interrupted explanations with scope hedges. The unit is one idea thoroughly learned, not one minute filled. Quantity is not a substitute for clarity, and a word count is not a substitute for teaching.

## Structure

Author `LessonGuide[]` using src/teaching/types.ts. Each record keeps its existing lesson ID. The index will replace the old body, exercise, recap, and quiz with this guide; there must not be an old condensed fallback for a curated lesson.

- `id`: exact existing ID.
- `title`: optional clearer title, at most 80 characters. Preserve the actual concept, not unrelated clickbait.
- `outcome`: one concrete thing the reader will understand or do, at most 180 characters, written in words a beginner understands before reading the lesson. No untaught jargon.
- `scene`: a short, unique description of this lesson's example setting, for the diversity audit, not an on-screen eyebrow.
- `sections`: 3-5 sections, 420-900 words combined, usually 450-800. Follow this arc: first a real situation the reader recognizes, including why it matters to them; then build the idea gradually; then walk the worked example slowly with every number restated; finally boundaries and the common mistake. Use as many words as the idea needs within the band; never pad to reach a number, and never compress a hard idea to stay short. Distinct useful section headings.
- `visuals`: at least one TeachingVisual, at most three. It must show the SAME objects, people, numbers, or steps explained in the text. Not an unrelated symbol, generic inspirational photo, or repeated concept-map filler. Caption tells the reader what to look at first and discloses hypothetical numbers or schematic simplification. The rendering pipeline turns these into original offline SVG illustrations. Spatial subjects need spatial diagrams rather than text-only comparisons. Use 2-6 items; label <=32 characters, detail <=115 characters. Avoid superfluous words inside the image; the surrounding prose does the teaching.
- `practice`: minutes are a suggested 3-20 minute budget, not researched efficacy; ordinary materials (`needs`), 3-5 complete guided steps with a visible result, `notice` describes that result, `troubleshooting` says what to adjust when the result is absent. Steps state why they matter when the reason is not obvious: hold the phone still so the comparison stays fair. The first attempt must be doable without guessing missing setup details. No artificial timed emergency, intrusive observation, clinical treatment, or production-system changes.
- `recall`: a NEW situation with an open question (`prompt`), explained example answer (`answer`), and useful `hint`. It must test transfer, not ask the user to copy a definition. The answer walks the reasoning in the same plain register as the lesson, not a compressed verdict.
- `quiz`: exactly three plausible choices and a varied correctIndex (0, 1, or 2). A scenario question, NOT a trivial 'good behavior versus absurd behavior' quiz. The explanation teaches: why the chosen action fits, what the plausible alternative misses, in plain words. This is an optional recognition check after thinking, not the whole lesson.
- `takeaway`: short review recap after the teaching.
- `sourceNote`: scope/limitation in plain English. Do not claim that the exact new exercise or story was experimentally tested. Existing linked sources are inherited unless new `sources` are necessary. Never invent a paper, quotation, statistics, filmmaker intention, or source URL.

## Register: write for a beginner reading on a phone

These rules exist because the guided-v1 edition was technically defensible yet hard to learn from.

- One new term per paragraph. Introduce it with a plain-words definition in its own sentence, give an everyday analogy or comparison when the term names a mechanism, then immediately reuse the term in the running example. Never define a term only inside an appositive clause (a frame, the unit delivered across the link) and move on.
- Never use a term before the sentence that explains it. If a lesson needs more than four new terms, it is probably two lessons; teach fewer terms more thoroughly.
- Analogies are required for invisible mechanisms (radio contention, compounding, attention). The analogy comes first, then the real mechanism mapped onto it, then where the analogy stops working if that matters.
- Target a reading grade of 6-8 (validator rejects worse than 10.5 per lesson). Average sentence length at most 17 words. Prefer two short sentences over one qualified sentence. Concrete nouns over abstractions: the handle on the mug, not the subject detail.
- Second person where natural. No clipped expert aphorisms that assume the insight (The operation is.). Spell the reasoning out.
- Scope honesty without interruptions: invented numbers are still labeled where they appear (an illustrative three milliseconds). But research-scope hedges, negative definitions, and what-this-does-not-establish caveats live in the final boundaries section or the sourceNote, never in the middle of the first explanation of an idea.
- Paragraphs are plain text. The reader renders them without markdown, so no asterisks, backticks, or inline links inside prose.
- Worked numbers are restated step by step. Never leave arithmetic for the reader to infer; the prose, the visual, and the quiz must agree.

## Visual formats

Use the format that explains, not arbitrary rotation:
- `spatial`: top-view light setup, workstation layout, camera/subject position, perspective or network topology. Items have x and y coordinates 10-90 (percent of drawing area), a shape, label and short detail. Arrows refer to item indexes. 3-5 items and sensible spacing; do not overlap labels. Shapes: person, camera, light, object, screen, paper, eye, circle, box.
- `comparison`: two or four concrete alternatives; label names the alternative, detail names the observed effect.
- `flow`: 3-5 steps or causes, not a decorative restatement of section headings.
- `timeline`: events ordered in time, durations in detail, no invented proportional scale.
- `bars`: values from a worked numerical example in the prose. Every item needs nonnegative numeric value; unit states what is counted. All arithmetic must agree with prose.
- `matrix`: four distinct cells in a genuine two-way decision or classification, identified by labels.
- `layers`: an ordered stack, such as scene/sound or system layers.
- `swatches`: color/value/drawing distinctions with explicit color hex on items; labels and details describe the concept. Never claim a screen reproduces printed or calibrated color.
- `dialogue`: an ACTUAL brief exchange that demonstrates the skill, with speaker labels and utterances in detail, not a personality code.

For light/camera/drawing lessons, use at least one spatial or swatch visual where it fits the concept. Multiple diagrams can separate setup and result. The approved cinema-027 bounce diagram will be carried into production as a bespoke original illustration.

## Example diversity

The audience is a 23-year-old early-career networking employee and beginner filmmaker/artist, but not every lesson should become a packet capture or cup-on-a-table exercise.

- Psychology: attention and memory in everyday routines, learning, errands, reading, hobby decisions, personal organization. Define terms before using them.
- Thinking: practical judgments with invented but explicit data, evidence, cause, uncertainty and competing explanations.
- Career and tech: actual work situations and mechanisms, no confidential employer context or unsafe commands.
- Money: realistic hypothetical amounts, fees and tradeoffs, no personal investment recommendations or jurisdiction-generalized legal promises.
- Life: ordinary homes, transport, maintenance, errands and purchases, not an endless checklist of productivity tricks.
- People: distinct everyday conversations; sometimes family, friends, colleagues, groups, requests and disagreements. Respect consent and don't read honesty from body language.
- Wellbeing: accessible, general educational routines, no diagnosis, physical perfection, supplements, or guaranteed health effects.
- Cinema: different shots, locations, safe objects, performances, sound problems and editing decisions. No need to buy equipment. Avoid reusing mugs/chairs/window setups for unrelated concepts.
- Design: actual color, type, layout, interface, material and drawing examples. Do not turn every illustration into the same comparison card.
- Philosophy: accessible dilemmas, not academic terminology condensed into slogans. Positions are perspectives, not scientific verdicts.

Within a batch, vary the example settings and practice outputs. Reusing one object for a tightly connected comparison is useful; copying the same story into unrelated lessons is not. No em or en dashes. No corporate prose. No filler about 'unlocking potential'. No copied external illustrations. All visuals must have alt text and a explanatory caption.

## Revision mechanics

Guides are tagged with a per-module revision in src/teaching/index.ts. A module flips to guided-v2 only when every lesson in it meets this contract; the validator applies the deeper word band and readability gates per revision. Flipping a revision resets only incompatible unfinished quiz drafts, never notes, completions, or collections. The visual asset namespace is pinned separately (VISUAL_REVISION) so unchanged diagrams keep their URLs and are not re-downloaded.

## Definition of done

Every ID has new teaching, a specific visual, guided practice and transfer reasoning. Audit reading order, new terms, scenario diversity, numerical examples, and source scope, plus the depth audit in scripts/analyze-teaching-depth.ts (word band, reading grade, sentence length, hedge placement). Close-read a random sample of every rewritten module rather than trusting aggregate claims. Render every image, check label bounds, inspect representative contact sheets and actual phone reading. Validate all records, preserve existing progress/notes/collections and reset only incompatible unfinished quiz answers from the old edition. Keep private hosting private.