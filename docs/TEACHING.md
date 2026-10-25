# Illustrated lesson authoring contract

Approved 2026-10-25 after the owner rejected the condensed first edition. The approval samples are in lesson-rewrite-samples.md. The owner approved rewriting every original lesson, with varied examples relevant to each topic, a closely relevant visual for each lesson, and verification before publishing. Quantity is not a substitute for clarity.

## Structure

Author `LessonGuide[]` using src/teaching/types.ts. Each record keeps its existing lesson ID. The index will replace the old body, exercise, recap, and quiz with this guide; there must not be an old condensed fallback for a curated lesson.

- `id`: exact existing ID.
- `title`: optional clearer title, at most 80 characters. Preserve the actual concept, not unrelated clickbait.
- `outcome`: one concrete thing the reader will understand or do, at most 180 characters.
- `scene`: a short, unique description of this lesson's example setting, for the diversity audit, not an on-screen eyebrow.
- `sections`: usually 3 sections with 1-3 paragraphs each, roughly 230-420 words combined. A real situation first, a causal/plain-language explanation with terms introduced gently, then a worked application or contrasting outcome. More words are welcome when necessary; do not pad to satisfy a number. Distinct useful section headings. The old lesson's 100-word summary is not sufficient.
- `visuals`: at least one TeachingVisual, at most three. It must show the SAME objects, people, numbers, or steps explained in the text. Not an unrelated symbol, generic inspirational photo, or repeated concept-map filler. Caption tells the reader what to inspect and discloses hypothetical numbers or schematic simplification. The rendering pipeline turns these into original offline SVG illustrations. Spatial subjects need spatial diagrams rather than text-only comparisons. Use 2-6 items; label <=32 characters, detail <=115 characters. Avoid superfluous words inside the image; the surrounding prose does the teaching.
- `practice`: minutes are a suggested 3-20 minute budget, not researched efficacy; ordinary materials (`needs`), 3-5 complete guided steps with a visible result, `notice` describes that result, `troubleshooting` says what to adjust when the result is absent. The first attempt must be doable without guessing missing setup details. No artificial timed emergency, intrusive observation, clinical treatment, or production-system changes.
- `recall`: a NEW situation with an open question (`prompt`), explained example answer (`answer`), and useful `hint`. It must test transfer, not ask the user to copy a definition.
- `quiz`: exactly three plausible choices and a varied correctIndex (0, 1, or 2). A scenario question, NOT a trivial 'good behavior versus absurd behavior' quiz. Explain why the chosen action fits and what plausible alternative misses. This is an optional recognition check after thinking, not the whole lesson.
- `takeaway`: short review recap after the teaching.
- `sourceNote`: scope/limitation in plain English. Do not claim that the exact new exercise or story was experimentally tested. Existing linked sources are inherited unless new `sources` are necessary. Never invent a paper, quotation, statistics, filmmaker intention, or source URL.

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

## Definition of done

Every ID has new teaching, a specific visual, guided practice and transfer reasoning. Audit reading order, new terms, scenario diversity, numerical examples, and source scope. Render every image, check label bounds, inspect representative contact sheets and actual phone reading. Validate all records, preserve existing progress/notes/collections and reset only incompatible unfinished quiz answers from the old edition. Keep private hosting private.