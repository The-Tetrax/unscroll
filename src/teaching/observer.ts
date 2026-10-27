import type { LessonGuide } from './types'

// Original teaching examples. Existing references are inherited by lesson ID.
// Numbers describe hypothetical cases, not measured effects of these exercises.
export const observerGuides: LessonGuide[] = [
  {
    id: 'observer-001',
    title: 'Write what happened before explaining why',
    outcome: `Keep three columns apart, what you saw from where and when, the explanations you can think of, and the one check that changes your next move, so a guess never quietly turns into a fact.`,
    scene: 'An unattended registration desk at a neighborhood seed exchange.',
    sections: [
      {
        title: 'An empty desk at noon',
        paragraphs: [
          `You arrive at a neighbourhood seed exchange at noon. From the entrance you can see the registration desk. Nobody is behind it. Three people are standing beside it, holding envelopes, looking around. You take out your notebook and write: the organiser has forgotten registration.`,
          `Read that sentence again. You did not see an organiser. You did not see anyone forget anything. You saw an empty desk and three waiting people, from one doorway, at one minute of the day. The sentence you wrote has already left the scene and started telling a story about a person you have not met. A useful note keeps the viewing position and the time attached, because a different entrance, two minutes earlier, or a desk partly hidden by a pillar could each have shown you something else.`,
        ],
      },
      {
        title: 'Give the explanation its own space',
        paragraphs: [
          `A doctor's notes keep two sections apart: what the patient reported and what the examination found, and then, separately, what the doctor thinks might be going on. The first part is evidence. The second is a list of possibilities, deliberately plural. Nobody writes appendicitis in the findings box, because findings are what was seen and felt, and appendicitis is a guess about what caused them. Keeping the boxes apart is what lets the next doctor correct the guess without losing the evidence.`,
          `An observation is what was available to your senses: the empty desk, the three people, noon, the entrance. An inference is the explanation you build on top of it. Write them in two columns. Under observed: empty desk at noon, viewed from entrance, three people waiting. Under possible explanations: someone is on a short break, the supplies have not arrived, registration has moved somewhere else. You do not have to rate these equally. The point of listing more than one is that the first explanation to arrive stops being the silent foundation for everything you think afterwards. And notice that the observation column can be wrong too, if you miscounted or missed an obstruction, so write it in a way that could be corrected.`,
        ],
      },
      {
        title: 'Check the part that changes your next action',
        paragraphs: [
          `At 12:02 you ask a person wearing an organiser's lanyard where registration is happening. They say: in the hall, we moved it while the desk was being repaired. Now add a third column, check, and write that answer in it, with the time and who said it. Do not go back and rewrite your noon note as if you had known about the repair all along. The noon note was true at noon. The 12:02 note is what someone told you two minutes later.`,
          `Look at what you now have. You can go and find registration in the hall, which was the only thing you actually needed. The explanation about repairs sits in the record as something the organiser reported, not something you verified, and that is fine; you do not need to verify it. You also did not need to collect anyone's name, decide who was to blame, or reconstruct everything that happened before you arrived. The check was sized to the decision in front of you, which was where to go next.`,
        ],
      },
      {
        title: 'Why the guess arrives first',
        paragraphs: [
          `The mind supplies a story faster than the eye supplies a description. An empty desk is uncomfortable, and the organiser forgot resolves the discomfort instantly, so it feels like what you saw. The cost shows up later, when you tell someone the organiser forgot and they repeat it, and nobody can trace it back to a single doorway at noon. Separating the columns is slower by about ten seconds and keeps the story from hardening.`,
          `Two habits. Whenever you write a note about something you noticed, include where you were and what time it was, so the note stays a view rather than a verdict. And before you accept your first explanation, write down one more, even a dull one, because the second line is what reminds you the first was a guess.`,
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'The check at 12:02',
      alt: 'An arrival asks where registration is happening; an organizer identifies the hall.',
      caption: `Read the arrival's question first and notice that it asks only what is needed to act, where registration is, not who is to blame. The organiser's answer goes in the check column with a time and a speaker. It locates registration; it does not turn the earlier guess about forgetting into something that was seen. Fictional exchange.`,
      items: [
        { label: 'Arrival', detail: 'The front desk is empty. Where is registration happening?' },
        { label: 'Organizer', detail: 'In the hall. We moved it while the desk was being repaired.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        `Draw three columns headed Observed, Possible explanation, and Check. Use the fictional seed exchange rather than real strangers, so you can practise the separation without anyone being judged.`,
        `In the first column write the noon view with your position and the three waiting people. Include the time and the doorway, because that is what keeps it an observation rather than a conclusion.`,
        `In the second column write two different explanations for the empty desk. Then draft one question that would help you find registration; that is the check sized to your actual need.`,
        `In the third column add the 12:02 answer with who said it and when. Look across the row and confirm a stranger could tell what you saw, what you guessed, and what you were told.`,
      ],
      notice: `A reader of your page can point to what you saw, what you guessed, and what someone later supplied, and could correct any one of the three without disturbing the others.`,
      troubleshooting: `If a note in the first column assigns a motive or a mental state, forgot, ignored, did not care, it is an explanation wearing an observation's clothes; move it to the second column or cut it. If you want to rewrite the noon note after the 12:02 answer, resist; add instead.`,
    },
    recall: {
      prompt: 'The library printer has a queue and no pages in its output tray. What would your note and next check say?',
      hint: 'An empty tray does not identify the cause of waiting.',
      answer: `Observed column: four people in the queue, output tray empty, 3:15, seen from the catalogue terminal. Possible explanations, plural: a large job is still processing, the printer has jammed, it is out of paper, someone's job is waiting for a payment. Check: ask at the desk whether the printer is working, because that is the question that decides whether you wait or go elsewhere. What you must not write in the first column is the printer is broken, because you did not see a fault; you saw an empty tray, which is consistent with a printer working perfectly on a long job. The doctor's findings box holds the tray, not the diagnosis.`,
    },
    quiz: {
      question: 'A display screen is blank when you enter a room. Which note best preserves the evidence?',
      options: [
        'Screen blank at 10:00 from the doorway; power status not checked.',
        'Screen switched off at 10:00; the blank image is the evidence.',
        'Screen failed before 10:00; check which component caused it.',
      ],
      correctIndex: 0,
      explanation: `Screen blank at 10:00 from the doorway, power status not checked, records exactly what was available to the eye, with time and position, and names what was not examined, so it can be corrected later. Switched off is an explanation; a blank screen is equally consistent with a sleeping display or a loose cable, so calling the blank image the evidence for switched off has smuggled a guess into the findings. Failed before 10:00 goes further still, asserting a fault and a time you did not witness.`,
    },
    takeaway: `Keep a doctor's notebook: what you saw, from where and when, in one column; the possible explanations, always more than one, in another; and the single check that changes your next move in a third, so that a guess made at noon can still be corrected at 12:02 without rewriting what was true at noon.`,
    sourceNote: 'GOV.UK research guidance supports descriptive, contextual notes. The seed exchange and ledger exercise are original examples, not validated motive detection.',
  },
  {
    id: 'observer-002',
    title: 'Describe where things are, not just what is there',
    outcome: `Record where each object sits relative to the others and to your viewpoint, including height and facing direction, so another person could rebuild the arrangement and see the same thing you saw.`,
    scene: 'A storage box hides an instruction card on the reader\'s own worktable.',
    sections: [
      {
        title: 'The inventory misses the problem',
        paragraphs: [
          `Set up your own worktable like this: a storage box, an instruction card standing upright, and a pen. Sit in your chair at the near edge. From there, the box completely hides the card. Someone sitting where you sit would have no idea there were instructions on the table at all.`,
          `Now write the note most people would write: box, card, pen. Every object is listed. The problem is gone. Someone reading that note could put the three things back in any order, with the card in plain view, and honestly say they had restored the table. The missing information is not a fourth object. It is where each thing sits in relation to the others and to the chair, which is the only fact that explains why the instructions were invisible.`,
        ],
      },
      {
        title: 'Choose a reference that does not move',
        paragraphs: [
          `Think of giving directions to your house. Turn left at the shop is useless unless the listener knows which way they are travelling, because left flips the moment they approach from the other end of the street. Good directions anchor to something fixed: coming from the station, the shop is on your right, turn there. The fixed starting point is what makes left and right mean anything.`,
          `Do the same for the table. Pick a reference that does not move: the near edge is the edge beside your chair. Then describe everything from there. The card stands at the back centre. The box sits between the chair and the card. The pen lies to the left of the box, as seen from the chair. That last phrase is the station in your directions; walk round the table and left becomes right. Two more things belong in the note. Facing direction, because a card turned away can be present and still unreadable. And height, because a top view, the kind you would sketch looking down, shows where things are on the surface but says nothing about what blocks a seated eye. Add a line: the box is taller than the card's writing.`,
        ],
      },
      {
        title: 'Use reconstruction to find missing details',
        paragraphs: [
          `Here is the test. Move everything aside, then rebuild the table using only your note. Suppose the pen goes back correctly and the box goes back between chair and card, but the card now peeks over the top of the box; you can read the first line from your seat. Your note said between but never said taller. That gap is exactly what the rebuild finds. Add the height relationship, rebuild again, and check from the chair without stretching up.`,
          `Notice what the exercise is testing. Not your memory; you had the note in your hand. It tests whether the description carried enough to recreate what you saw, which is a different and more useful thing. Keep any private paperwork out of the setup, since you will be describing it in detail. And keep the conclusion the size of the test: this arrangement hides the card from this chair. It does not follow that a person who missed the instructions was careless. From where they sat, there was nothing to miss.`,
        ],
      },
      {
        title: 'Why lists feel complete',
        paragraphs: [
          `A list of objects feels thorough because every item is accounted for, and counting feels like checking. But a scene is not a set of objects; it is a set of relationships between objects and an eye. Three things can be arranged dozens of ways, and only some of them hide the card. The inventory records the three things and throws away the arrangement, which was the only part that mattered.`,
          `Two habits. Whenever you describe where something is, name the fixed reference first, from the chair, from the door, before you say left or behind. And when a description matters, rebuild from it once and see what the rebuild gets wrong, because the rebuild will find the missing height or direction faster than rereading will.`,
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'The box is between viewer and card',
      alt: 'Top view: chair at the near edge, box in the middle, card behind it, pen on the left.',
      caption: `Find the eye at the bottom first; every direction in the note is measured from there, which is the fixed reference. Follow the arrow upward and see that it stops at the box, not the card: that is the obstruction. The top view cannot show height, so the caption carries it: the box is taller than the card's writing. Schematic, not to scale.`,
      items: [
        { label: 'Seated viewer', detail: 'Near edge; directions use this viewpoint.', x: 52, y: 85, shape: 'eye' },
        { label: 'Tall box', detail: 'Blocks the writing from the chair.', x: 52, y: 52, shape: 'box' },
        { label: 'Instruction card', detail: 'Upright, facing the chair.', x: 52, y: 18, shape: 'paper' },
        { label: 'Pen', detail: 'Left of the box from the chair.', x: 16, y: 52, shape: 'object' },
      ],
      arrows: [{ from: 0, to: 1, label: 'View blocked' }],
    }],
    practice: {
      minutes: 7,
      needs: ['Small box', 'Folded blank card', 'Pen', 'Paper'],
      steps: [
        `On your own table, stand the folded card up behind the box and put the pen to the left of the box. You are building a scene whose whole point is one hidden object.`,
        `Sit at the near edge and adjust the box until it hides the card's writing. Do not stack anything unstable to get there; move the box closer to you instead, since distance changes what it blocks.`,
        `Sketch the top view and write three notes beside it: the viewpoint you are using as reference, which way the card faces, and the height relationship between box and writing. These three are what a plain list leaves out.`,
        `Move everything aside, rebuild from the sketch and notes alone, then sit in the same chair and check. If you can read the card, find which of the three notes was missing or vague.`,
      ],
      notice: `The rebuilt table recreates the obstruction, not just the same three objects. Someone following your note would be unable to see the card from your chair, exactly as you were.`,
      troubleshooting: `If visibility changes after the rebuild, the note is missing a height, a facing direction, or a distance; add whichever one explains the difference rather than adding more objects. If you used left without saying from where, that is the direction with no station, and it will flip on the next reader.`,
    },
    recall: {
      prompt: 'A plant hides a desk clock from the sofa but not from the door. What must a useful sketch preserve?',
      hint: 'A single object list cannot represent two viewpoints.',
      answer: `Mark four things on the sketch: the sofa, the door, the clock, and the plant, and draw the plant sitting on the straight line from sofa to clock. That line is the sightline, and it is the whole explanation. Then add the two notes a top view cannot carry: the plant is at least as tall as the clock face from a seated eye on the sofa, and the clock face points towards the room rather than the wall. Finally, check from both positions rather than saying the clock is hidden. It is hidden from the sofa and visible from the door, which is a statement about two paths, not about the clock. Sofa, door, clock, plant as a list would let someone rebuild the room with the plant in a corner and the mystery gone.`,
    },
    quiz: {
      question: 'Two sketches contain the same objects. Which extra note best helps restore the hidden card?',
      options: [
        'The box and card were both near the middle of the table.',
        'The card was smaller than the box and had short instructions.',
        'From the near-edge chair, the taller box stood between eye and writing.',
      ],
      correctIndex: 2,
      explanation: `From the near-edge chair, the taller box stood between eye and writing names the fixed reference, the height relationship, and the blocking order in one line, which is everything a rebuild needs to recreate the obstruction. Both near the middle gives rough positions with no reference point and no order, so the card could end up in front. Smaller with short instructions describes the card itself and says nothing about where the eye was or what stood in the way.`,
    },
    takeaway: `Describe a scene the way you would give directions from the station: name the fixed viewpoint first, then say where each thing sits relative to the others, which way it faces, and how tall it is compared with what it might hide, and test the description by rebuilding from it, because a list of objects can be perfectly complete and still lose the one relationship that explained what you saw.`,
    sourceNote: 'OpenStax explains perception; GOV.UK supports contextual description. The tabletop reconstruction is an original practice task, not a memory assessment.',
  },
  {
    id: 'observer-003',
    title: 'A detection count needs an error count',
    outcome: `Sort every yes-or-no judgement into one of four boxes, hit, miss, false alarm, correct rejection, and count all four, so that saying yes more often is never mistaken for noticing better.`,
    scene: 'Six hypothetical sound clips contain either a quiet notification bell or background sound.',
    sections: [
      {
        title: 'Calling more sounds a notification',
        paragraphs: [
          `You are waiting for an important message. Your phone is face down across the room. Every faint clink from the kitchen, every tick of the radiator, starts to sound like your notification bell. You check the phone four times. Twice there was a message. Twice there was nothing.`,
          `Something real is happening here, and it is not that your hearing improved. You are making decisions about uncertain sounds, and you have lowered the bar for saying yes, that was it. To see the whole picture, imagine six practice clips with known contents: three contain the bell, three contain only background noise. A listener says bell for two of the bell clips and for two of the noise clips. If you only count the two bells they caught, you are telling half the story. The other half is the bell they missed and the two kitchen clinks they promoted to notifications.`,
        ],
      },
      {
        title: 'Name the four possible outcomes',
        paragraphs: [
          `A smoke alarm has four possible mornings. There is a fire and it sounds. There is a fire and it stays silent. There is no fire and it shrieks because you made toast. There is no fire and it stays quiet. Everyone judges an alarm on the first morning, but the toast morning is what makes people pull the battery out, and the silent-fire morning is the one that kills. All four matter, and a good alarm is judged on all four.`,
          `Detection research gives the four mornings names. A hit is saying bell when a bell is present. A miss is saying no bell when one is present. A false alarm is saying bell when there is only noise. A correct rejection is saying no bell when there is only noise. In the six-clip set: two hits, one miss, two false alarms, one correct rejection. Two things to notice. The labels come from the known clip contents, never from how sure the listener felt; confidence is not a category. And the number of correct decisions is the hits plus the correct rejections, two plus one, three out of six. Hits alone would have told you two and let you forget the rest.`,
        ],
      },
      {
        title: 'A different response rule is not better hearing',
        paragraphs: [
          `Now let the listener adopt a new rule: say bell for every clip, no matter what. Hits go up from two to three; they catch every bell. It looks like improvement. But false alarms also go up from two to three, because every noise clip is now called a bell, and correct rejections drop to zero. Count correct decisions: three hits plus zero correct rejections, three out of six. Exactly the same as before. Nothing about the listener's ears changed. The amount of evidence they required before saying bell dropped to nothing, and the extra hits were paid for one-to-one with extra false alarms.`,
          `That bar, how much evidence you demand before saying yes, is called the decision threshold. Moving it trades one kind of error for the other; it does not reduce the total. Sometimes moving it is the right call anyway. If missing the bell means missing a hospital, you should accept more false alarms. If every false alarm means an unnecessary trip across the room, you might accept more misses. The threshold is a choice about costs. It is not a measure of ability, and this paper exercise is not a hearing test or a diagnosis of anything.`,
        ],
      },
      {
        title: 'Why hits hog the credit',
        paragraphs: [
          `Hits are visible and satisfying; you heard the bell and there was a message. False alarms are mildly embarrassing and quickly forgotten, and correct rejections are invisible, because nothing happened and you did nothing. So memory keeps a tally of hits and quietly drops the other three boxes, and a jumpy listener feels like a sharp one. The four-box count exists because feelings keep only one box.`,
          `Two habits. Whenever someone reports how many they caught, ask how many they called that were not there, because the second number is what the first one cost. And when a change makes a detector seem better, check whether the total of correct decisions rose or whether the yeses simply moved from one error column to the other.`,
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Clip contents by listener response',
      alt: 'Four cells cross actual bell presence with the listener\'s bell or no-bell response.',
      caption: `Read the labels as two questions: what was actually in the clip, then what the listener answered. The top-left and bottom-right cells are the correct decisions, two hits and one correct rejection, three in total. The other two cells are the two kinds of error that counting hits alone would hide. Hypothetical six-clip results; the boxes are filled from known contents, not from confidence.`,
      items: [
        { label: 'Bell / answered bell', detail: '2 hits' },
        { label: 'Bell / answered no bell', detail: '1 miss' },
        { label: 'Noise / answered bell', detail: '2 false alarms' },
        { label: 'Noise / answered no bell', detail: '1 correct rejection' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        `Write the actual contents of six clips in a row: bell, bell, bell, noise, noise, noise. No recordings needed; the known answer key is what makes the four boxes possible.`,
        `Under each, write the hypothetical responses: bell, bell, no bell, bell, bell, no bell. Pair each response with the truth above it.`,
        `Label every pair hit, miss, false alarm, or correct rejection, then count each category. Check that the four counts add up to six; if not, a pair has been labelled from confidence rather than contents.`,
        `Now change every response to bell and recount. Compare correct decisions, hits plus correct rejections, between the two rules before saying which listener did better.`,
      ],
      notice: `Both rules produce three correct decisions out of six, even though the always-bell rule has one more hit. The extra hit was bought with an extra false alarm, like the alarm that catches every fire and every slice of toast.`,
      troubleshooting: `If a pair is hard to label, ask the two questions separately, what was present and what was answered, and the box follows. If your four counts total more or less than six, you have double-counted a pair or let a confident answer slip into hits.`,
    },
    recall: {
      prompt: 'A spelling checker flags every word in a paragraph and catches every typo. Has its accuracy been established?',
      hint: 'Count correct words that were unnecessarily flagged too.',
      answer: `No. Catching every typo is a perfect hit rate and nothing more; it is the alarm that goes off for every fire and every slice of toast. Fill in the other three boxes using a paragraph where you already know which words are wrong. Misses: typos it did not flag, here zero. False alarms: correct words it flagged, here every correct word in the paragraph. Correct rejections: correct words it left alone, here zero. A checker that underlines everything has simply set its threshold to flag always, which trades all its correct rejections for hits. Its correct decisions are only the typos, and a checker that flagged nothing would score the mirror image. Neither has shown it can tell a typo from a word.`,
    },
    quiz: {
      question: 'A search filter finds more relevant files after a setting change. What else should be measured?',
      options: [
        'Whether the user feels more confident about the larger result list.',
        'Irrelevant files included and relevant files still missed on the same labeled set.',
        'Only the total number of returned files before and after the change.',
      ],
      correctIndex: 1,
      explanation: `Counting irrelevant files included and relevant files still missed, on the same set where the right answers are known, fills in the false alarm and miss boxes, which is the only way to tell whether the filter discriminates better or has just lowered its threshold and returned more of everything. The user's confidence is a feeling about one box, hits, and feelings are not a category. The total returned tells you the threshold moved; it cannot tell you whether the extra results were the files you wanted or more toast.`,
    },
    takeaway: `Judge any detector the way you would judge a smoke alarm, on all four mornings: count hits, misses, false alarms, and correct rejections against a known answer key, add hits and correct rejections to get the real score, and treat a jump in hits with suspicion until you have seen what it cost in false alarms, because lowering the bar for yes is not the same as hearing better.`,
    sourceNote: 'OpenStax introduces signal detection and response thresholds. These six clips are a paper illustration, not recorded data or a sensory assessment.',
  },
  {
    id: 'observer-004',
    title: 'Could that detail be seen from there?',
    outcome: `Before weighing two accounts against each other, check whether each person could physically see the detail from where they sat and when, and keep that separate from what they noticed or remembered.`,
    scene: 'Two seats offer different views of a notice behind a display pillar.',
    sections: [
      {
        title: 'Two seats, one notice',
        paragraphs: [
          `After a craft workshop, two volunteers are tidying up. One says there was a notice beside the supplies about returning scissors to the tray. The other says there was no such notice; they would have seen it. Each is a little irritated with the other. Your instinct is to decide who sounds more reliable.`,
          `Hold that instinct and look at the room instead. In this fictional hall a display pillar stands between the left seat and the supplies table. The right seat has a clear view across. One volunteer sat on the left all afternoon. Both people are describing their experience honestly, and their experiences were different because the room gave them different information. There is a second question too: when was the notice put up? A notice pinned after someone left was not available to them, however obvious it looks now.`,
        ],
      },
      {
        title: 'Trace the path to the detail',
        paragraphs: [
          `In a theatre, some seats are sold as restricted view. The box office is not saying the people in those seats are inattentive. It is saying a pillar or a balcony edge sits on the straight line between that seat and part of the stage, so a scene played at stage left will be invisible from there no matter how hard the ticket holder watches. The ticket records the geometry in advance, so nobody argues afterwards about who was paying attention.`,
          `That straight line from an eye to a thing is a sightline. Draw the hall from above: both seats, the pillar, the notice. Draw a line from each seat to the notice. The left line runs into the pillar; that view is obstructed, provided the pillar is tall enough to cover the writing at a seated eye height. The right line is clear. Be careful about what a clear top-view line proves. It rules out one kind of obstruction. It says nothing about distance, lighting, whether the notice faced the seats, or whether the writing was large enough to read. Write those as unknown rather than assuming them. And a reconstruction today cannot prove the room was identical yesterday; it shows what is plausible, not what happened.`,
        ],
      },
      {
        title: 'Keep the conclusion as small as the test',
        paragraphs: [
          `You can test the obstruction with your own objects: a folded card for the notice, a box for the pillar, and your own eye moving between two positions. If the box hides the card from the left position, you have shown that this arrangement limits that view. That is the whole finding. It does not tell you what the left-seat volunteer noticed, what they remembered, or whether they would have read the notice with a clear view. People miss notices they can see perfectly well, especially while concentrating on something else.`,
          `The practical response follows from the small finding, not from a verdict about either person. Future instructions could go in both views, or be announced aloud, with the organiser's agreement. Nobody needs to be quizzed on their memory or asked who is telling the truth. The restricted-view ticket resolves the argument before it starts, by making the seat, not the person, responsible for what was missed.`,
        ],
      },
      {
        title: 'Why we judge the witness before the seat',
        paragraphs: [
          `When two accounts conflict, the fastest way to resolve the discomfort is to pick a person: one is observant, one is not. Checking the room is slower and less satisfying, because it often ends with both people being right. But the person-first route turns a pillar into a character flaw, and the flaw sticks to the volunteer long after the pillar is forgotten.`,
          `Two habits. When two accounts differ, sketch the positions and the time before you form a view about either person. And when a reconstruction shows an obstruction, write the conclusion as a sentence about the arrangement, this setup limits that view, and stop there.`,
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Two paths toward the same notice',
      alt: 'The left seat\'s path meets a pillar; the right seat has a clear path to the notice.',
      caption: `Follow the two arrows from the eyes at the bottom. The left arrow ends at the pillar, a restricted-view seat; the right arrow reaches the notice. That is the whole finding. The top view cannot show height, so assume a pillar tall enough to cover the writing from a seated eye. A clear path shows the notice was visible from the right seat, not that it was noticed. Hypothetical room.`,
      items: [
        { label: 'Left seat', detail: 'The pillar lies on this sightline.', x: 20, y: 84, shape: 'eye' },
        { label: 'Right seat', detail: 'Clear path in this arrangement.', x: 80, y: 84, shape: 'eye' },
        { label: 'Display pillar', detail: 'Blocks the left seated view.', x: 35, y: 52, shape: 'box' },
        { label: 'Notice', detail: 'Writing faces the seats.', x: 50, y: 20, shape: 'paper' },
      ],
      arrows: [{ from: 0, to: 2, label: 'Blocked' }, { from: 1, to: 3, label: 'Clear path' }],
    }],
    practice: {
      minutes: 7,
      needs: ['Folded card', 'Small box', 'Paper', 'Pen'],
      steps: [
        `Stand a folded card on your table as the notice and put a stable box in front of it as the pillar, both facing you. You are building a restricted-view seat on purpose.`,
        `Sit down and slide the box until it hides the card's writing from your eye. Mark that seated position on a sheet of paper; this is the left seat.`,
        `Without touching the objects, shift your chair sideways until the writing comes into view. Mark that second position; this is the right seat. The objects did not change, only the path.`,
        `Draw both lines from eye to card on your sheet and write the finishing sentence: this setup establishes visibility from these two positions, not what anyone noticed or remembered. Writing the limit down is the step that keeps the finding small.`,
      ],
      notice: `Two lines on one page explain how two honest people had different access to the same writing, and neither line says anything about either person's attention.`,
      troubleshooting: `If both positions show the writing, move your chair further sideways or bring the box closer to you; do not raise or lower your eye height, because that changes a variable the two-seat comparison is meant to hold still. If you find yourself writing who was right, cross it out and write which seat was restricted.`,
    },
    recall: {
      prompt: 'A colleague says a status light was off, but you saw it on later from another desk. What remains unchecked?',
      hint: 'Compare time as well as viewpoint.',
      answer: `Two things, and both are about the room rather than the colleague. First, time: your observation was later than theirs, and a status light can change state in between, so your on does not contradict their off any more than a theatre curtain being up at nine contradicts it being down at seven. Second, sightline: check whether both desks have a clear path to the light, at seated eye height, without a monitor or partition in the way. Until you have sketched both desks and noted both times, you have two honest reports from two restricted-view seats at two different moments, and nothing yet about who is reliable.`,
    },
    quiz: {
      question: 'A current reconstruction shows a shelf hid part of a poster from one chair. What does that support?',
      options: [
        'That arrangement limits the view from that chair.',
        'The person in that chair could not remember any poster detail.',
        'The person with the clear view must have read the entire poster.',
      ],
      correctIndex: 0,
      explanation: `A reconstruction shows geometry, so the only conclusion it supports is that this arrangement limits the view from that chair, the restricted-view ticket for that seat. It cannot show that the person there remembered nothing; part of the poster was visible, and memory is a separate question from sightline. And a clear view from the other chair shows the poster was available to that person, not that they read it; people look past visible things all the time.`,
    },
    takeaway: `Before judging two conflicting accounts, check the seats, not the people: sketch each viewpoint and the time, trace the sightline from eye to detail, and if a pillar sits on the line, write the conclusion as a fact about the arrangement, this setup limits that view, because a restricted-view seat explains a missed notice without making anyone unreliable.`,
    sourceNote: 'Perception and memory references support separating viewing conditions from later reports. The room reconstruction is illustrative, not an account-verification procedure.',
  },
  {
    id: 'observer-005',
    title: 'They looked away. What do you actually know?',
    outcome: `Treat a gesture as something you saw, not as a message about what someone is thinking, and let it point you to a useful question about the actual problem instead of a verdict about the person.`,
    scene: 'A friend looks away when cafe staff cannot find a booking; the confirmation shows tomorrow\'s date.',
    sections: [
      {
        title: 'An ordinary misunderstanding',
        paragraphs: [
          `You and a friend arrive at a cafe for a table your friend booked. The person at the desk scrolls, frowns, and says there is nothing under that name. You turn to your friend: did you book it? They look away for a second, pause, and say, I did it yesterday. Something in your chest decides, instantly, that they are making it up.`,
          `Slow that moment down. You saw a glance to the side and a pause. Then your mind supplied a cause, dishonesty, and attached it to the glance so smoothly that it felt like one event. It was two. And the practical problem has not moved an inch: there is still no table. The glance has told you nothing about the date on the booking, which branch it was for, or whether the request ever went through. Those are the facts that get you a table, and none of them live in your friend's eyes.`,
        ],
      },
      {
        title: 'Separate the movement from its meaning',
        paragraphs: [
          `Think of a car's warning light. It comes on, and you know one thing: a sensor tripped. You do not know whether the engine is about to fail, the fuel cap is loose, or the sensor itself is faulty. Anyone who has owned a car has seen all three. The light is real and worth noticing, but it does not tell you which of its causes is in play, and a mechanic who replaced the engine every time the light came on would not stay in business.`,
          `A glance is a warning light. Looking away is an observation; you can describe it and someone else could have seen it too. They are lying is an interpretation, one explanation among several that you added. The same movement happens when a person is trying to recall a detail, when they feel put on the spot, or when they simply find it easier to think without holding eye contact. Dishonesty is on the list as well. The movement does not pick a winner from the list, and stacking a pause on top of a glance does not turn two warning lights into a diagnosis. People's communication styles differ, and the same person differs across situations. You are allowed to feel unsure. What you are not entitled to is asking your friend to perform steady eye contact or explain their feelings to prove the light was false.`,
        ],
      },
      {
        title: 'Check the booking, not the gesture',
        paragraphs: [
          `So ask about the thing that can be checked. Which confirmation did you get? Shall we look at the date and the branch? That question is about the booking, not about your friend's face, and it can be answered with a screen rather than a defence. Suppose they open the email and the date says tomorrow. Now you have a specific, fixable problem to take to the desk. You have learned nothing about what the glance meant, and you no longer need to know.`,
          `Suppose instead there is no confirmation email at all. Hold the uncertainty there too. A missing message is consistent with a booking that never went through, an email in the spam folder, a phone booking with no written trace, and yes, with a booking that was never made. Ask how they booked, and choose the next practical step from what you actually have. The mechanic's job is to find the loose fuel cap, not to prove the driver was careless.`,
        ],
      },
      {
        title: 'Why the glance feels like proof',
        paragraphs: [
          `A glance arrives with a story attached because stories about people are the fastest thing the mind makes. The story resolves an uncomfortable moment, so it feels like insight rather than guesswork. But the cost is real: you treat a friend as a suspect over a table, and if the date turns out to be tomorrow you have accused someone of lying about an email they sent. The glance was a warning light. The fault was a calendar.`,
          `Two habits. When a gesture makes you suddenly sure about someone, write down the gesture in plain words and then at least two causes, so that your certainty has to survive the list. And turn your next question toward the thing that can be checked, the booking, the ticket, the record, because that question gets you a table and a verdict about a face never does.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'What you saw',
        alt: 'Looking away before answering branches to remembering, discomfort, and other possibilities, not a verdict.',
        caption: `Start at the single box on the left: that is the only thing you saw. Then follow the three arrows and notice that each one ends in a question mark. The gesture is the warning light; the three boxes are possible faults, and the arrows do not choose between them. Nothing here is a verdict about your friend. Fictional cafe scene.`,
        items: [
          { label: 'They looked away', detail: 'Before answering about the cafe booking.' },
          { label: 'Remembering?', detail: 'A possibility, not an established explanation.' },
          { label: 'Uncomfortable?', detail: 'A possibility, not an established explanation.' },
          { label: 'Something else?', detail: 'The movement does not select a cause.' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }],
      },
      {
        type: 'dialogue',
        title: 'Check the issue, not the gesture',
        alt: 'A neutral question checks the confirmation, which shows tomorrow\'s booking date.',
        caption: `Read your own line first and notice what it asks about: the confirmation, the date, the branch. Nothing about the glance. The friend's reply answers with a record rather than a defence, and the problem turns out to be a calendar. The glance is never explained, and it no longer needs to be. Fictional continuation.`,
        items: [
          { label: 'You', detail: 'Which confirmation did you receive? Shall we check the date and branch?' },
          { label: 'Friend', detail: 'Here it is. The date is tomorrow, not today.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        `Use this fictional sentence as your starting point: my teammate answered in a flat voice, so they disliked my idea. It contains a warning light and a diagnosis welded together.`,
        `Write the observation on its own line: their voice sounded flat to me. Notice that to me belongs there, because flatness is your impression, not a measurement.`,
        `Under it list two possible causes, such as disagreement and concentration on something else, without choosing between them. The list is what stops the first cause from winning by default.`,
        `Draft one question about the idea itself: what part would you change? Then stop. Do not draft a question about their voice, and do not start watching their behaviour for more clues.`,
      ],
      notice: `Your next question collects information about the idea, which you can act on, rather than demanding that someone prove or explain a feeling, which you cannot check and they may not owe you.`,
      troubleshooting: `If your drafted question still asks what a gesture or tone meant, rewrite it to ask about the task or the specific concern. If you cannot think of a second cause for the gesture, borrow concentration or tiredness; the point is to have a list, not to be right about it.`,
    },
    recall: {
      prompt: 'A colleague folds their arms during your proposal, then asks detailed questions. What would you discuss before judging their attitude?',
      hint: 'Questions can express interest, confusion, or criticism.',
      answer: `Discuss the questions. They are the part of the exchange that has content you can respond to and check. Folded arms are a warning light with half a dozen possible faults, cold room, habit, concentration, scepticism, and the detailed questions are the same: interest, confusion, and criticism all produce them. Neither tells you the fault. So answer each question properly and then ask which concerns are still open. If they say the budget line does not add up, you have a real objection, stated by the person, which you can address. If they say none, you have your answer. What you do not do is sit through the meeting decoding the arms, because the arms will never tell you what the budget question will.`,
    },
    quiz: {
      question: 'A friend pauses before explaining a missing ticket. Which check is most relevant?',
      options: [
        'Compare the pause with how quickly they usually answer casual questions.',
        'Ask which ticket confirmation they received and check it together if they agree.',
        'Count whether several changes in gaze and posture happen together.',
      ],
      correctIndex: 1,
      explanation: `Asking about the confirmation and checking it together goes straight to the record, which can actually resolve the missing ticket, and it treats the friend as a partner in the check rather than a suspect. Comparing the pause with their usual speed is trying to calibrate a warning light that has several unrelated causes; even a real difference would not tell you which cause. Counting gestures stacks more lights on the dashboard and still names no fault, while turning a friend into a subject of surveillance over a ticket.`,
    },
    takeaway: `A gesture is a warning light, not a diagnosis: write down what you saw in plain words, list at least two causes so your certainty has to survive the list, and then point your next question at the thing that can be checked, the booking, the ticket, the idea, because that gets you a table and decoding a face never does.`,
    sourceNote: 'The archived APA overview discusses limits of visual lie cues; communication guidance adds context. The cafe exchange is fictional, not a validated lie-detection procedure.',
  },
  {
    id: 'observer-006',
    title: 'Ask which conditions help someone contribute',
    outcome: `When someone contributes less in one setting than another, change the setting with them rather than building a theory about them, and keep only the working arrangement, never a behaviour profile.`,
    scene: 'A brochure collaborator prefers written comments before a noisy group review.',
    sections: [
      {
        title: 'Lunch is not the same task as a review',
        paragraphs: [
          `Over lunch your colleague is funny, quick, and full of opinions about everything from bus routes to biscuits. An hour later the group sits down to review the club brochure, and the same person gives one-word answers and looks at the table. It is very tempting to treat lunch as the real them and the review as a sign that something is wrong: they are bored, or annoyed, or hiding something.`,
          `Before you decide, look at what changed between the two scenes. At lunch, one conversation, familiar people, no stakes. In the review, several people talking over each other, a layout nobody has seen before, and an expectation that you respond right now. Those are different tasks with different demands. A comparison that ignores the demands will read the task's difficulty as the person's attitude. What you have actually observed is different participation in two different situations. You have not discovered why, and you are nowhere near a diagnosis.`,
        ],
      },
      {
        title: 'Make the comparison a shared question',
        paragraphs: [
          `A left-handed person at a table of right-handed scissors will cut badly. Nobody sensible concludes they are clumsy or do not care about the craft; you hand them left-handed scissors and the problem disappears. The useful question was never what is wrong with this person. It was which tool lets this person do the job. You did not need to know why they are left-handed or ask them to prove it.`,
          `Researchers call the reference point you compare against a baseline. The mistake here is choosing the wrong one. How cheerful your colleague seems at lunch is not a baseline for brochure reviews, any more than a right-hander's cutting is a baseline for a left-hander. The useful baseline is a review format that this person finds workable, and the fastest way to find it is to ask. Would it help to have the draft a day in advance? Would written comments suit better than live discussion? They can pick an option without explaining a medical history, naming a condition, or justifying themselves. Communication preferences vary inside every group of people, including autistic people, and no label would tell you which pair of scissors this particular person wants. Only they can.`,
        ],
      },
      {
        title: 'Check the task result, not the personality',
        paragraphs: [
          `Suppose your colleague says: send me the draft first and I will add comments before we meet. You do, and the next morning there is a comment on the last panel: the venue address is missing. That is the result to look at. It is a concrete improvement to the brochure that the noisy review did not produce. It is not evidence that they were anxious earlier, or bored, or unable to speak; it is evidence that the written format worked for this task.`,
          `At the next review, ask again whether the format still suits, because a preference stated once is not a permanent setting. And keep only what the collaboration needs: a note saying send draft before discussion. That note is about the process. It is not permission to start logging how often they speak, comparing them with the most talkative person in the room, or filing observations about their manner. You handed over the scissors. You do not then keep a file on the hand.`,
        ],
      },
      {
        title: 'Why the quiet person gets a theory',
        paragraphs: [
          `Quietness is a gap, and gaps get filled with explanations, usually about the person rather than the room. The explanation is unfalsifiable and private, so it is never corrected, and it quietly shapes how the person is treated. Asking which format helps is awkward for about five seconds and then produces a missing venue address. The theory produces nothing but a worse working relationship.`,
          `Two habits. When someone contributes less in one setting than another, list what is different about the settings before you think about the person. And when you offer an adjustment, offer it as a choice with no reason required, then judge it by the work it produces rather than by what it seems to reveal.`,
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'Agree on a review format',
      alt: 'A collaborator chooses advance written comments and identifies a missing brochure address.',
      caption: `Read your own opening line first and notice that it offers a choice of tools and asks for no reason. The colleague picks one without explaining anything. Then read the third line, which is the result: a missing address found. That line is the only thing worth keeping. Fictional exchange about this brochure, not a diagnostic interview.`,
      items: [
        { label: 'You', detail: 'Would an advance draft or written comments make this review easier?' },
        { label: 'Colleague', detail: 'Please send the draft first. I will add comments before we meet.' },
        { label: 'Next draft comment', detail: 'The venue address is missing from the last panel.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper or a private draft note'],
      steps: [
        `Choose a harmless shared task you are actually part of, or use the fictional brochure review. You want a real format problem, not a real person to analyse.`,
        `Write two format options you could genuinely offer, such as questions sent in advance and written responses afterwards. These are the pairs of scissors on the table.`,
        `Draft an invitation that offers the options and asks for no reason or explanation, and that includes keeping the current format as a choice. The no-reason part is what makes it an offer rather than an interrogation.`,
        `Write a follow-up question about the task, not the person: did this format let you give the comments you wanted to give? That question judges the scissors by the cut.`,
      ],
      notice: `Your agreement describes a working condition, send draft before discussion, and leaves every personal explanation optional. Someone reading the note would learn about the process and nothing about the person.`,
      troubleshooting: `If your note contains a label for the person, shy, anxious, difficult, replace it with the format they asked for; the label adds nothing the format does not. If your invitation includes the word why, remove it.`,
    },
    recall: {
      prompt: 'A friend contributes little during a fast board-game explanation but enjoys playing later. What could you ask next time?',
      hint: 'Offer a change to the explanation, not a theory about the person.',
      answer: `List what is different between the two scenes before thinking about the friend. The explanation is fast, verbal, delivered once, with everyone watching; the game itself is slower and hands-on. So offer a different pair of scissors for the explanation: would a written turn summary help, or a slow practice round before we play properly? Let them pick, with no reason required, and judge the choice by whether they join in more during the next explanation. What you should not do is decide that quiet during the rules means they are not interested, since they plainly enjoy playing, or assume that whatever they pick this time is how they will always want it.`,
    },
    quiz: {
      question: 'A collaborator requests questions before a meeting. What is the most useful note?',
      options: [
        'Speaks less than the team average during unfamiliar discussions.',
        'Probably needs extra time because they lack confidence in groups.',
        'Send questions before this review; check later whether the format works.',
      ],
      correctIndex: 2,
      explanation: `Send questions before this review, and check later whether the format works, records the tool the person asked for and a plan to judge it by results; it is about the process and came from them. Speaks less than the team average is a measurement of the person against the wrong baseline, the most talkative people, and starts a behaviour file nobody asked for. Lacks confidence in groups is a guessed cause the person never offered, which is a theory about the hand rather than a note about the scissors.`,
    },
    takeaway: `When someone goes quiet in one setting, hand them a different pair of scissors rather than writing a theory about their hands: list what differs between the settings, offer a format choice with no reason required, judge it by the work it produces, and keep only the process note, never a profile.`,
    sourceNote: 'Communication and contextual-research guidance inform the approach. The brochure example illustrates an access choice, not a diagnostic baseline or tested intervention.',
  },
  {
    id: 'observer-007',
    title: 'Check what agreement means in this group',
    outcome: `Tell the difference between someone acknowledging a plan and committing to it by giving the whole group one explicit way to answer, instead of reading the answer off a nod or a background.`,
    scene: 'A sketch-walk group uses explicit replies to settle a departure time.',
    sections: [
      {
        title: 'The nod did not settle the departure time',
        paragraphs: [
          `Your sketch-walk group is deciding when to leave on Saturday. Someone suggests eight o'clock. Across the table, one member nods while looking at the route map on their phone. You write their name on the confirmed list. On Friday evening they message to say they are still checking whether the early bus runs, and they never said they were coming at eight.`,
          `Go back to the moment. The nod was visible; everyone saw it. The commitment was something you added to the nod. They were telling you I have heard the suggestion, and you recorded I will be there at eight. Both of you were acting in good faith. The same small movement was carrying two different meanings, one in their head and one in yours, and nothing about knowing their name, their accent, where they grew up, or how they usually behave would have told you which meaning was in play for this nod, at this table, about this bus.`,
        ],
      },
      {
        title: 'Replace an assumed convention with a shared one',
        paragraphs: [
          `Think of the difference between read receipts and a reply. A read receipt tells you the message reached someone's screen. It tells you nothing about whether they agree, will act, or even finished reading. Plenty of arguments start when one person treats a blue tick as a yes. The reply is a separate act, and sensible people wait for it before they book the restaurant.`,
          `A shared meaning that people use together, like treating a particular word or signal as confirmation, is a convention. The trap is assuming you know which convention another person is using. The fix is not to study them until you can guess better; it is to make the group's convention explicit so nobody has to guess. Say: for Saturday at eight, please answer yes, no, or still checking, and writing is fine. Three options, offered to everyone identically. This separates the read receipt from the reply. It also gives uncertainty a legitimate place, so still checking is a proper answer rather than an awkward silence. And because the rule applies to the whole table, nobody is singled out as the person whose nods are unusual. The problem was never one person's nod. It was that the group had no stated way to say yes.`,
        ],
      },
      {
        title: 'Store the answer that was actually given',
        paragraphs: [
          `Suppose the member replies: I heard the plan, I am still checking my bus. Write still checking beside their name. On Friday they post in the group note: the bus works, yes to eight on Saturday. Now change the entry to confirmed, with the time of that message. Your record has two states for one person on two days, and that is correct. A summary that said everyone nodded on Tuesday would have flattened both into a yes that was never given.`,
          `One more case. Somebody later proposes leaving at half past seven instead. Ask the question again, from scratch, to everyone. The yes you collected was a yes to eight; it does not transfer to a different plan just because the difference is thirty minutes. None of this is an attempt to ban nodding or make conversation stiff. Gestures stay in the conversation. The explicit channel is reserved for the single moment that creates an obligation and affects other people's mornings.`,
        ],
      },
      {
        title: 'Why nods get counted as votes',
        paragraphs: [
          `Organisers want closure, and a nod looks like closure. Asking yes, no, or still checking feels fussy for a plan this small, so the organiser reads the room instead and writes down what they hoped to see. The bill arrives on Saturday morning, when three people are waiting at the station and one is at home having never agreed to anything. The fussy question takes ten seconds. The reading of the room takes a ruined walk.`,
          `Two habits. Whenever a plan depends on who is actually coming, ask for an explicit answer with still checking as a named option, offered to everyone the same way. And whenever the plan changes, treat every earlier yes as expired and ask again.`,
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'From acknowledgment to confirmation',
      alt: 'The sketch-walk organizer checks agreement; a participant first needs to check a bus, then confirms.',
      caption: `Read the organiser's line first and count the options: yes, no, still checking, with writing allowed, the same rule for everyone. The participant's first reply is a read receipt with a stated reason, not a yes. Only the later written line changes the plan's status. The nod that might have happened on Tuesday appears nowhere, because it never counted. Fictional exchange.`,
      items: [
        { label: 'Organizer', detail: 'For Saturday at eight, please reply yes, no, or still checking. Writing is fine.' },
        { label: 'Participant', detail: 'I heard the plan. I am still checking my bus.' },
        { label: 'Later written reply', detail: 'The bus works. Yes, I can meet at eight on Saturday.' },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ['Paper or a draft message'],
      steps: [
        `Write a fictional proposal: meet for a sketch walk at eight on Saturday. Keep it small; the point is that even small plans need a stated way to say yes.`,
        `Under it, write a response rule with three named answers: yes, no, still checking. Naming the third one is what turns uncertainty from a silence into an answer.`,
        `Draft one spoken and one written way to give those answers, and make both available to everyone. Offering the rule to the whole group is what keeps it from singling anyone out.`,
        `Now change the proposed time to half past seven and write the fresh question you would send. Notice that you have to ask everyone again; the earlier yes belonged to eight.`,
      ],
      notice: `Every yes on your list refers to one specific version of the plan, and anyone who is unsure has a proper word for it instead of a nod that someone else will interpret for them.`,
      troubleshooting: `If a nod or a thumbs-up is still being written down as a commitment, replace it with the explicit check; the gesture can stay in the conversation but it leaves the list. If asking the question feels fussy, remember it is ten seconds against a morning at the station.`,
    },
    recall: {
      prompt: 'Someone reacts to a shared shopping list with a thumbs-up icon. Does that mean they will buy everything?',
      hint: 'The reaction could acknowledge reading rather than accept a task.',
      answer: `No. A thumbs-up on a list is a read receipt with a smile on it. It could mean I saw this, I like the list, good idea, or I will buy everything, and the icon does not say which, any more than the nod said eight o'clock. So ask the explicit question, the same way for everyone: which items, if any, are you taking? Then record the named items beside the person, not the icon. If they answer the milk and the bread, that is the commitment, and the rest of the list is still unassigned. What their background or usual messaging style suggests about the thumbs-up is beside the point; you have a channel that produces an actual answer, so use it.`,
    },
    quiz: {
      question: 'Several people nod at a proposed deadline. Which follow-up best checks commitment?',
      options: [
        'Count only the nods from people who usually speak directly.',
        'Use the chair\'s interpretation of the nods as the final agreement.',
        'Ask everyone to confirm, decline, or flag uncertainty about the stated deadline.',
      ],
      correctIndex: 2,
      explanation: `Asking everyone to confirm, decline, or flag uncertainty about the stated deadline is the shared convention: one rule, three named answers, applied identically, producing replies rather than read receipts. Counting nods from people who usually speak directly sorts the room by assumed style and still treats a nod as a vote for the people it favours. Using the chair's interpretation makes one person's reading of the room the official record, which is exactly how the sketch-walk member ended up on a list they never joined.`,
    },
    takeaway: `A nod is a read receipt, not a reply: when a plan creates an obligation, give the whole group one explicit way to answer, yes, no, or still checking, record only the answer each person actually gave, and ask again from scratch whenever the plan changes, because no amount of knowing someone tells you what their nod meant about this bus.`,
    sourceNote: 'Communication and interview guidance support clarification. The group reply convention is an original practical framework, not a universal cultural code.',
  },
  {
    id: 'observer-008',
    title: 'Leave the unreadable character unreadable',
    outcome: `When part of a label or number cannot be read, write a placeholder for the missing part instead of the character you expect, and resolve it only from a source that did not inherit your guess.`,
    scene: 'A smudged model-parts label resembles the familiar drawer code B17 but the packing list says B47.',
    sections: [
      {
        title: 'The familiar drawer code',
        paragraphs: [
          `You are sorting a new batch of model-making parts into your storage drawers. Nearly everything in this batch belongs in drawer B17, so you have written B17 on a dozen bags already. The next bag has a smudged label. At a glance it says B17 too. You look closer. The B is clear. The final 7 is clear. The middle character is a dark smear that could be almost anything.`,
          `If you write B17 on the bag, your handwriting is now more confident than the label ever was. A week later the part does not fit anything in B17, and you look at your own neat B17 and think: but it says so right there. It does not. It says B, smear, 7, and the 1 was supplied by you, from the eleven bags before it. Your copy has turned an unresolved reading into what looks like independent evidence, in cleaner ink.`,
        ],
      },
      {
        title: 'Expectation helps interpretation, not ink recovery',
        paragraphs: [
          `When you do a crossword, 4 across might be a seven-letter word for a sea bird with the first letter P and last letter N. Your brain offers PELICAN before you have read the clue properly. That guess is useful; it is how crosswords get finished. But you write PELICAN in pencil, and if 5 down then needs an R where PELICAN has an I, you rub it out. The pencil is the acknowledgement that the word came from expectation, not from the clue, and that it has to survive a check.`,
          `Perception works the same way. What reaches your eye is combined with what you already know or expect, which psychologists call prior knowledge, and that combination is why you can read scrawled handwriting at all. The problem is not using expectation. It is losing track of which characters came from the ink and which came from you. So write B?7, with the question mark standing exactly where the smear is. The question mark does not claim the code is random or that every digit is equally likely; you can still think it is probably a 1. It records that one position is unknown, and that unknown is the thing that decides which drawer the part belongs in. Staring at the smudge again, or saying B17 to yourself with more conviction, cannot put ink back on the label.`,
        ],
      },
      {
        title: 'Check something that did not inherit your guess',
        paragraphs: [
          `The batch came with a packing list. Find the row for this exact part, matching the part identifier rather than just scanning for a B-something-7, so that you are not borrowing a clear code from the wrong line. The row says B47. Now write B47 on the bag, and beside it, confirmed from packing list. If you want the history, keep the B?7 as well. The pencil guess has been checked against 5 down and rubbed out.`,
          `Why the packing list and not something else? Because it is independent in the practical sense that matters: it was printed before you ever saw the smudge, so it cannot have inherited your 1. Enlarging the smudge on your phone gives you a bigger smudge. Asking a friend to read your transcription gives you their reading of your guess. Neither adds information the label did not have. And if there is no packing list, no order confirmation, no second source at all, then the honest state of the bag is B?7, and it stays unsorted until something independent turns up.`,
        ],
      },
      {
        title: 'Why the expected character wins',
        paragraphs: [
          `After eleven B17s the twelfth is not really read; it is recognised, and recognition is fast and confident and feels exactly like reading. The cost shows up only when the part fails to fit and your own tidy label argues against you. By then the smear is in a bin and the B17 in your handwriting is the only evidence left, and it is evidence of your expectation, not of the part.`,
          `Two habits. When any character in a code, name, or number is unclear, write a placeholder in that exact position rather than your best guess, and let the placeholder sit there until it is resolved. And resolve it only from a source that existed before your guess did, because a clearer look at the same smudge or a second opinion on your transcription is the guess wearing a new coat.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Visible characters versus checked code',
      alt: 'The smudged label supports B question mark 7; the matching packing-list row gives B47.',
      caption: `Look at the question mark on the left first. It sits exactly where the ink failed, and it is the pencil mark that keeps the expected 1 out of the record. Then look at the right-hand code and notice where it came from: a packing-list row matched to this part, a source that never saw your guess. The two are kept side by side so the reading history survives. Fictional drawer labels.`,
      items: [
        { label: 'Label reading: B?7', detail: 'B and 7 visible; the middle character is unresolved.' },
        { label: 'Matching record: B47', detail: 'The packing-list row for this part supplies the checked code.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen', 'Small scrap of paper'],
      steps: [
        `Write the code B47 on one line, then copy it onto a second line lower down as your reference. The second line stands in for the packing list, a source that exists before the smudge.`,
        `Cover the middle character of the first line with the scrap of paper. You will still remember it is a 4; do not try to forget. The exercise is about labelling sources, not about manufacturing doubt.`,
        `Write what the covered line alone supports: B?7, with the question mark in the covered position. The question mark goes where the ink is unavailable, even though your memory is offering a 4.`,
        `Uncover the reference line and write your final entry as B47, checked against reference, rather than B47, read from the label. The label of the source is the whole point.`,
      ],
      notice: `Your record tells apart the characters that were actually available on the line from the one supplied by another source, and anyone reading it could see which was which.`,
      troubleshooting: `If you feel silly writing a question mark for a character you remember, that is fine; remembering is not the problem, and the task is to label where the final character came from, not to pretend you do not know. If your final entry says read from label, ask yourself which line actually showed you the 4.`,
    },
    recall: {
      prompt: 'Your own scanned ticket shows a blurred seat digit. A familiar seat number comes to mind. How would you check it?',
      hint: 'Use the original ticket record rather than repeating the expected number.',
      answer: `Write the seat as the visible characters plus a placeholder, say row F, seat 2?, and notice that the familiar number in your head is the crossword guess in pencil. Then find a source that did not come from the scan: the original booking confirmation email, the ticket in the venue's app, or the box office record. Any of those was created before the scan blurred and cannot have inherited your guess. What does not count is zooming into the scan, which gives you a larger blur, or deciding that it must be the seat you usually book, which is the eleven bags of B17 talking. If no independent record can be found, the seat stays 2? and you ask at the venue.`,
    },
    quiz: {
      question: 'A parcel label seems to say MAPLE, but one letter is unreadable. What should your first note contain?',
      options: [
        'The visible letters and an unknown marker at the unreadable position.',
        'MAPLE, because it is the only street name you recognize nearby.',
        'MAPLE marked confirmed after reading your own transcription twice.',
      ],
      correctIndex: 0,
      explanation: `The visible letters with an unknown marker at the unreadable position is the pencil version: it records exactly what the ink supports and leaves the gap open for a source that can actually fill it. MAPLE because it is the only name you recognise promotes expectation to evidence; recognising one nearby street does not tell you what letter was printed, and streets you do not know exist. MAPLE confirmed by rereading your own transcription checks the guess against itself, which is the same smudge in your handwriting.`,
    },
    takeaway: `Read a smudged label the way you fill a crossword, in pencil: put a placeholder exactly where the ink fails rather than the character you expect, resolve it only against a source that existed before your guess, and treat a closer look at the same blur or a second opinion on your own copy as the guess in a new coat.`,
    sourceNote: 'OpenStax explains the contribution of prior knowledge to perception. The label exercise is original and does not claim to recover absent image detail.',
  },
  {
    id: 'observer-009',
    title: 'Remove the event your question assumes',
    outcome: `Spot the fact a question quietly treats as already true, take it out, and ask in a way that lets the other person answer with no involvement or no memory at all.`,
    scene: 'A shared studio key is missing, and the first question assumes someone moved it.',
    sections: [
      {
        title: 'Where did you move the key?',
        paragraphs: [
          `The shared studio key is not on its hook. You turn to your friend, who was in earlier, and ask: where did you move the key to after lunch? You meant it as a request for help. Listen to what the question actually says. It says that your friend moved the key. It says this happened after lunch. Neither of those is known. You have not seen the key since yesterday.`,
          `Even softening it does not help. Did you put it in the drawer or on the shelf? sounds gentler, but the moving is still baked in; the friend is only being offered a choice of where. A helpful person hearing that question will do something unfortunate. They will search their memory for a moment after lunch when they handled the key, because the question told them there was one. Nobody asked them the prior question, which is whether they remember touching the key at all.`,
        ],
      },
      {
        title: 'Let the event be absent from the answer',
        paragraphs: [
          `Have you stopped leaving the back door unlocked? is the classic trap. Yes admits you used to; no admits you still do. There is no answer that lets you say I never did. The sentence has a fact built into its foundations, and every reply you can give is built on top of that fact. The only way out is to refuse the question and ask for a different one.`,
          `Linguists call the built-in fact a presupposition: something a sentence treats as already settled before the question even starts. Where did you move the key presupposes the moving. The repair is to ask a question whose foundations are empty: what do you remember about the key, if anything? That version allows every honest answer, including I saw it this morning, I used it yesterday, someone mentioned it, and I have no memory of it at all. The if anything is doing real work; it makes nothing a proper answer rather than a failure. There is a second reason to care about this beyond politeness. Memory is not a recording that plays back untouched. It is rebuilt each time, and details fed in by a question can end up inside the rebuilt memory, so that the friend later sincerely remembers moving a key they never touched. Careful wording does not guarantee an accurate answer. It stops you from manufacturing an inaccurate one.`,
        ],
      },
      {
        title: 'Follow a supplied detail without expanding it',
        paragraphs: [
          `Suppose the friend says: I remember seeing it beside a sketchbook this morning. That is a real detail they supplied, and you can follow it. Which sketchbook? Do you remember where exactly it was lying? Each follow-up stays inside what they offered. What you must not do is silently upgrade seeing to moving. Saw it beside the sketchbook is not picked it up, and if your next question is so where did you put it after that, you have rebuilt the loaded question one step further along.`,
          `If they are unsure about the time, leave the gap. Do not say was it around lunchtime, then maybe just after lunch, then so after lunch then, until the phrase sounds familiar enough for them to agree. Familiarity produced by repetition feels exactly like memory from the inside. Meanwhile you can check the agreed storage places without deciding who caused the problem. And stop when the person has nothing more to add. The goal is to find a key, not to extract a complete story.`,
        ],
      },
      {
        title: 'Why the loaded version comes out first',
        paragraphs: [
          `By the time you speak, you have already imagined what happened: someone moved it, probably after lunch. The question comes out of that picture fully formed, and it feels efficient, because it skips straight to the detail you want. It is efficient at one thing only, which is getting your picture confirmed. The back-door question is efficient in the same way.`,
          `Two habits. Before asking about something uncertain, say the question silently and look for the verb that assumes an action, moved, put, borrowed, took, then remove it. And add if anything to the end, so that no memory and no involvement are answers the other person can give without feeling they have failed you.`,
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'A question without an assumed movement',
      alt: 'A neutral question elicits a memory of seeing the key, with uncertainty about its location.',
      caption: `Read your opening line first and notice what is missing from it: no moving, no after lunch, and an if anything at the end that makes no memory a real answer. Then follow the thread. The friend offers seeing; your follow-up asks about the sketchbook and the location, both details they supplied. Seeing never becomes moving, and the uncertain location stays uncertain. Fictional exchange.`,
      items: [
        { label: 'You', detail: 'What do you remember about the studio key, if anything?' },
        { label: 'Friend', detail: 'I remember seeing it beside a sketchbook this morning.' },
        { label: 'You', detail: 'Do you remember which sketchbook or where it was?' },
        { label: 'Friend', detail: 'The large green one. I am unsure where it was lying.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        `Write this fictional question down: where did you put the scissors after the workshop? Seeing it on paper makes the foundations easier to inspect than hearing it in your head.`,
        `Underline every detail the question treats as already true: that the person handled the scissors, and that it happened after the workshop. Those are the back door the question assumes was unlocked.`,
        `Rewrite the question so someone could answer with no involvement or no memory and not feel they had failed. Check that it ends with something like if anything.`,
        `Invent a reply about seeing the scissors, not moving them, and draft one follow-up that stays inside what was offered. If your follow-up contains put, move, or after that, it has rebuilt the loaded question.`,
      ],
      notice: `Neither your opening question nor your follow-up contains the action you are trying to find out about. The other person could truthfully answer both while having never touched the scissors.`,
      troubleshooting: `If you offered two locations as a kinder version, check whether both still assume someone put the object somewhere; offering a choice of drawers is still presupposing the drawer. If your follow-up upgrades seeing to moving, go back to the verb they used and ask about that.`,
    },
    recall: {
      prompt: 'A plant label has changed. How would you ask a housemate about it without assuming they replaced it?',
      hint: 'Start with what they remember, not why they acted.',
      answer: `Find the verb your first instinct supplies, probably why did you change the label or when did you swap it, and notice that both treat the swap as done and by them. Remove it. Ask instead: do you know anything about the label on the fern, if anything? That leaves room for I noticed it was different too, I replaced it because the old one faded, and I have no idea. Then follow only what they give you. If they say they saw a new label on Tuesday, ask about Tuesday, not about why they did it. The housemate who never touched the label can answer honestly, and the one who did can tell you so without having been accused of it first. Either way, nobody is handed a memory by the question.`,
    },
    quiz: {
      question: 'A shared charger is missing. Which opening introduces the least unverified information?',
      options: [
        'Did you leave the charger at home or bring it back here?',
        'What do you remember about the charger, if anything?',
        'When you borrowed the charger, where did you use it?',
      ],
      correctIndex: 1,
      explanation: `What do you remember about the charger, if anything, has empty foundations: it assumes no borrowing, no transport, no handling, and the if anything makes no memory a complete answer. Did you leave it at home or bring it back here offers two locations but both assume the person took the charger somewhere; it is the choice of drawers. When you borrowed the charger, where did you use it builds two unverified facts into the question, the borrowing and the using, and leaves the person no way to say I never had it.`,
    },
    takeaway: `Before you ask about something uncertain, check the question's foundations for the back door it assumes was unlocked: remove the verb that presupposes an action, end with if anything so that no memory is a real answer, and follow only the details the other person supplies, because a question that contains the event you are checking can plant that event in a memory that never held it.`,
    sourceNote: 'Noba reviews suggestion and memory errors; GOV.UK discusses interviewing. The studio dialogue is original, not a method for extracting hidden truth.',
  },
  {
    id: 'observer-010',
    title: 'Walk through the last actual attempt',
    outcome: `Turn a label like bad at forms into a sequence of steps from one real attempt, find the step where progress stopped, and name that step as the barrier instead of naming the person.`,
    scene: 'A club volunteer cannot upload a poster because the form accepts PDF rather than JPG.',
    sections: [
      {
        title: 'Bad at forms is not a step',
        paragraphs: [
          `A club volunteer tried to upload the new poster to the club's web page and it did not work. When you ask about it, they shrug and say: I am just bad at forms. It is said with a smile, and it closes the conversation, and it gives you absolutely nothing to fix.`,
          `Think about everything that sentence could be hiding. They might not have found the upload button. They might have had the wrong kind of file. They might have uploaded successfully and missed the confirmation message. Each of those needs a different fix, and bad at forms covers all of them equally. So ask whether they would mind walking through the last time they actually tried. A specific attempt has an order of events and a point where it stopped. A general opinion about forms is a blend of this attempt, past attempts, and a feeling about themselves, and the blend cannot be debugged.`,
        ],
      },
      {
        title: 'Ask for the next observable step',
        paragraphs: [
          `When a mechanic hears my car is rubbish, they do not nod and start replacing parts. They ask: what happened the last time it would not start? Did the dashboard light up? Did the engine turn over? Did you hear a click? Each answer narrows the fault, and the fault is always in the car's sequence of events, never in the owner's character. Nobody has ever fixed a car by agreeing that the driver is bad at cars.`,
          `Do the mechanic's walk-through. The volunteer says they opened the upload form and picked the poster image. Ask what happened next, and follow their account rather than the instructions on the page, because the instructions describe the ideal route and you need the actual one. In this fictional case, the file they chose was a JPG, and the form showed a message saying PDF only. They stopped there and never pressed Submit. Now you can tell three things apart that bad at forms had merged: the service was available, the file format was rejected, and no submission happened, so no confirmation was ever due. The step that stopped progress is called the barrier, and here it is a format mismatch. That barrier says nothing about the volunteer's organisation, attention, or technical ability. It says the form wanted a PDF and got a JPG.`,
        ],
      },
      {
        title: 'Keep unknown steps visible',
        paragraphs: [
          `Draw the attempt as four boxes: opened form, selected JPG, saw PDF-only message, stopped before Submit. If the volunteer cannot remember the exact wording of the message, write the box as uncertain rather than filling in words that fit your theory. You can check the real requirement later on an authorised sample form, and the sample is a better witness than a reconstructed quotation. Then the next action almost writes itself: export the poster as a PDF, with whoever owns the design agreeing, and try again.`,
          `Resist two temptations. One is to fill every gap in the story so it feels finished; an honest sequence with one uncertain box is more useful than a tidy one with an invented box. The other is to generalise. One volunteer's attempt does not show that everyone hits this barrier, and it certainly does not show that the form's designer wanted uploads to be hard. It shows that on this occasion, at this step, a JPG met a PDF requirement.`,
        ],
      },
      {
        title: 'Why labels feel like explanations',
        paragraphs: [
          `Bad at forms is comfortable for everyone. The volunteer gets to stop feeling the specific frustration, and the listener gets to stop asking. It sounds like a cause, so the conversation ends. But a trait is not a step, and you cannot fix a trait by Tuesday. The format message you can fix in ten minutes, and the only way to reach it is to walk back through the attempt one box at a time, the way the mechanic walks back to the click.`,
          `Two habits. Whenever someone explains a failure with a label about themselves, ask gently about the most recent specific attempt and what happened after each step. And when you reach a step they cannot recall, mark it unknown and check it against the real thing later rather than writing in what would make sense.`,
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'Where this upload stopped',
      alt: 'The volunteer opens the form, selects a JPG, sees a PDF-only message, and stops before submitting.',
      caption: `Read the boxes left to right as the mechanic's walk-through, then find the one where the fault lives: the PDF-only message in the third box. Notice that the first box shows the service was working, and the last box records that nothing was submitted, so no confirmation was ever due. The barrier is a format mismatch at one step. Nothing in the diagram describes the volunteer. Fictional attempt.`,
      items: [
        { label: 'Opened upload form', detail: 'The page was available.' },
        { label: 'Selected poster.JPG', detail: 'An image file, not a PDF.' },
        { label: 'Saw PDF-only message', detail: 'The selected format was not accepted.' },
        { label: 'Stopped before Submit', detail: 'No submission or confirmation is established.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        `Using the fictional poster attempt, write what happened as four boxes in order, starting with opening the form. The order is the point; a list of complaints is not a sequence.`,
        `Circle the first box that explains why progress stopped. There should be exactly one, and it should be a thing that happened, not a quality of the person.`,
        `Cross out bad at forms and write one sentence in its place that names the file format and the form's requirement. That sentence is something a second person could check.`,
        `Write one follow-up question you would ask about the uncertain error message, and one possible next action, such as exporting a PDF. Do not submit anything to a real form while practising.`,
      ],
      notice: `Your summary names a barrier another person could verify on a sample form, and nowhere in it does anyone have to accept a judgement about what kind of person they are.`,
      troubleshooting: `If the account keeps drifting into usually or always or every time, bring it back to the most recent attempt and ask what happened right after the last step they described. If you find yourself writing the error message as a quotation, check whether they actually remembered the words or whether you did.`,
    },
    recall: {
      prompt: 'A friend says renewing a library loan never works. What would you ask before recommending a solution?',
      hint: 'Distinguish opening the account, choosing the loan, and receiving a response.',
      answer: `Never works is bad at forms turned outward onto the library, and it hides at least three different faults. So, with their permission, do the mechanic's walk-through of the last attempt only. Did they get into the account, or did the login fail? If they got in, did the loan appear in the list, and what did they select? When they pressed renew, what came back: a confirmation, an error, nothing? An expired library card stops you at the first step, an item with someone else waiting stops you at the third with a specific message, and a slow page that never confirmed stops you at the end with silence. Each has a different fix. Recommending anything before you know which step stopped is replacing parts on a car you have not listened to.`,
    },
    quiz: {
      question: 'Someone says a checkout page is confusing. Which follow-up most directly investigates their actual attempt?',
      options: [
        'Would you prefer a simpler checkout if one were available?',
        'How confident do you usually feel about online purchases?',
        'What happened after you selected the delivery option last time?',
      ],
      correctIndex: 2,
      explanation: `Asking what happened after they selected the delivery option last time anchors the conversation to one real attempt at one specific step and asks for the next observable event, which is the mechanic's question. Asking whether they would prefer a simpler checkout invites an opinion about a hypothetical page and tells you nothing about where this attempt stopped. Asking how confident they usually feel measures a trait across many purchases, which is bad at forms as a survey question.`,
    },
    takeaway: `Treat bad at forms the way a mechanic treats my car is rubbish: walk back through the last real attempt one step at a time, find the single step where progress stopped, name that step rather than the person, and leave any step nobody remembers marked unknown until you can check it against the real form.`,
    sourceNote: 'GOV.UK interview guidance favors actual examples over idealized process descriptions. The poster upload is fictional and does not establish a general usability finding.',
  },
  {
    id: 'observer-011',
    title: 'Permission has a boundary',
    outcome: `Agree before you start exactly what an observation covers, and when something outside that boundary appears on the screen, stop collecting and let the other person decide what happens next.`,
    scene: 'A friend demonstrates recipe folders while an unrelated message appears on the same screen.',
    sections: [
      {
        title: 'A recipe demonstration is not access to everything',
        paragraphs: [
          `A friend has agreed to show you how they organise recipes on their tablet. You are curious whether they sort by ingredient or by meal, and they are happy to show you. They open the app and start flicking between folders. Halfway through, a message notification slides down from the top of the screen: a name, the first line of something personal, then it is gone.`,
          `You saw it. It was right there, on the same screen you were given permission to look at. But it was never part of the task. You agreed to explore how the folders are structured. The answer to that question does not include who messaged your friend or what they said. Being able to see something is not permission to note it, remember it on purpose, or mention it later. The permission was for folders. The notification was a stranger walking through the frame.`,
        ],
      },
      {
        title: 'Make the scope understandable before starting',
        paragraphs: [
          `Think of a plumber you have let into your house to fix the kitchen tap. They have your permission to be in the kitchen, open the cupboard under the sink, and run the water. They do not have permission to read the letters on the table, open the bedroom door, or photograph the living room. Nobody writes that down. Everyone understands that letting someone in for one job is not letting them in for everything. The job defines the rooms.`,
          `The boundary of an activity is its scope. The kindness is to say it out loud before you begin, because a tablet has no walls between rooms. Tell your friend what you want to note: folder categories only. Say who will see the note: nobody but you. Say when you will delete it: tonight. If you want a screenshot or a recording, ask for that separately. Agreeing to show you something is not agreeing to have it captured. And offer the exits. They can skip a screen, pause, or stop, and they do not owe you a reason. Consent here is not a single yes at the start that covers whatever turns up. It is an ongoing choice about this activity. Someone can happily agree to show folder names and still decline to show what is inside them.`,
        ],
      },
      {
        title: 'Pause instead of collecting first',
        paragraphs: [
          `When the message appears, the right move is immediate and small. Look away from the screen and stop writing. Say that a message came up and you have paused. Then let your friend choose. They might dismiss it and carry on. They might describe the next folder aloud without showing the screen, skip that section, or decide they have shown you enough. All of those are fine outcomes. None of them require you to have read the message.`,
          `If you realise you already jotted something from it, do not share it. Agree with your friend to cross it out. Be honest with yourself about the limits of tidying up afterwards. Stripping a name out of a note does not undo having collected the message. A distinctive detail can identify someone with no name attached. The plumber who read the letters has not fixed anything by promising to forget them. An observation succeeds when it answers the agreed question inside the agreed boundary. It does not get better by capturing more. And if you just want to practise describing folder structures, your own mock folders will do. Nobody's tablet needs to be involved.`,
        ],
      },
      {
        title: 'Why the boundary slips',
        paragraphs: [
          `Screens flatten rooms into one surface. The notification arrives looking exactly like the folders, and the eye reads it before the conscience catches up. Then curiosity adds a quiet argument: it was right there, and I will not tell anyone. But the friend agreed to show you a filing system. They did not agree to have their messages read by a well-meaning person who happened to be looking. The fact that nobody will ever know is not what made it wrong.`,
          `Two habits. Before any demonstration, say the scope aloud in one sentence: what you will note, who sees it, when it goes. Ask separately for any recording. And when something outside that sentence appears, stop first and ask second. The one order that cannot be undone is collect first and apologise later.`,
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'Keep the recipe task within its scope',
      alt: 'A friend agrees to folder-category notes, then chooses to pause when a private message appears.',
      caption: `Read your first line and count what it fixes before anything starts: what is noted, that there is no recording, and when the note is deleted. Then jump to your third line and notice the order of events: paused first, then a question, with the choice handed to the friend. The friend's final line is one of several good outcomes, and the message is never mentioned again. Fictional dialogue.`,
      items: [
        { label: 'You', detail: 'May I note only the folder categories? No recording; I will delete my note today.' },
        { label: 'Friend', detail: 'Yes, categories only. I can stop the demonstration at any point.' },
        { label: 'You', detail: 'A message appeared. I have paused. Would you prefer to skip this screen?' },
        { label: 'Friend', detail: 'Let us continue verbally without showing the tablet.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        `Write a scope for observing a fictional set of recipe folders, in four parts: the purpose, what you are allowed to note, who will see the note, and when it will be deleted. This is the plumber's job description, said before the door opens.`,
        `Underneath, list what is outside the scope: messages, names, other apps, the contents of the recipes themselves. Writing the outside list is what makes the boundary visible when something crosses it.`,
        `Write one sentence that offers pause, skip, and stop without asking for a reason. Check that it does not contain the word why.`,
        `On paper, rehearse the moment a message appears: write what you would say and the order you would do things in. Stop and then ask, not the reverse. Collect no real private material while practising.`,
      ],
      notice: `Your plan says what not to collect as clearly as what to collect, and it says what happens if the activity changes partway through. Someone reading only your plan could tell where the boundary is.`,
      troubleshooting: `If your scope says anything useful or whatever helps, it has no boundary; replace it with the specific information the task actually needs. If your rehearsal has you glancing at the message to see whether it matters, that glance is the collection, so move the stop earlier.`,
    },
    recall: {
      prompt: 'Someone shares a screen to explain slide formatting, and a salary spreadsheet appears. What should you do?',
      hint: 'The original task does not cover every visible document.',
      answer: `Stop looking and say so, in that order. The permission was for slide formatting, which is the kitchen tap; the spreadsheet is the letter on the table, and it does not become yours to read because the screen share put it in front of you. Say that a different document came up and you have looked away, then hand over the choice: they can close it, switch to a sample slide, or end the session. Do not copy anything, do not comment on what you saw, and do not reassure yourself that you will not repeat it, because not repeating it is the minimum rather than a fix. If anything from the spreadsheet is already in your notes, tell them and remove it together. Permission to watch formatting never included anyone's pay.`,
    },
    quiz: {
      question: 'A demonstration reveals information outside its agreed scope. Which response best respects the original permission?',
      options: [
        'Take a complete note now and remove identifying details afterward.',
        'Pause collection and let the participant choose how or whether to continue.',
        'Keep the information privately because the note will not be published.',
      ],
      correctIndex: 1,
      explanation: `Pausing collection and letting the participant choose keeps you inside the rooms you were let into and returns control to the person whose information it is; it is the only option where nothing outside the scope is taken. Noting everything and anonymising later has already collected the material, and removing names does not undo that or make distinctive details safe. Keeping it privately because it will not be published treats secrecy as consent, but the friend agreed to show folders, not to trust your discretion with their messages.`,
    },
    takeaway: `Treat an observation like letting a plumber into one room: say the scope aloud before you start, what you will note, who sees it, when it goes, ask separately for any recording, and when something outside that scope appears on the screen, stop first and ask second, because seeing is not permission and collecting cannot be undone by tidying up afterwards.`,
    sourceNote: 'GOV.UK consent and note-taking guidance inform this framework. The everyday script is illustrative, not legal advice or a complete research-consent process.',
  },
  {
    id: 'observer-012',
    title: 'Leave room for someone to correct your note',
    outcome: `When someone corrects your account of what they did, keep what you saw, add their explanation with their name and the time, and mark your first interpretation as corrected rather than erasing it.`,
    scene: 'A garden volunteer pauses a tool-loan form to find a plot number rather than abandoning it.',
    sections: [
      {
        title: 'Abandoned was your word',
        paragraphs: [
          `You are sitting with a volunteer at the community garden while they fill in the tool-loan form on a laptop. They have agreed to let you watch and take notes so the form can be improved. Partway through, they close the form and pick up a notebook. You write: 14:05, volunteer abandoned the application.`,
          `Imagine that line read aloud at next month's meeting. Someone will say the form is driving people away and propose a redesign to stop them giving up. All of that will rest on the word abandoned, and abandoned was your word, not theirs. What you observed was a window closing and a notebook opening. A change of activity. You did not see a decision to quit, because decisions are not visible; you saw an action and supplied the decision yourself. Before this note goes anywhere, the volunteer deserves a chance to see it and say whether it is right.`,
        ],
      },
      {
        title: 'Record who supplied the explanation',
        paragraphs: [
          `A hospital chart has a rule about this. The nurse writes what was measured: temperature 38.2 at 14:05. If the patient then says they just had a hot drink, the nurse adds: patient reports hot drink at 14:00. The reading stays. The explanation is added, with its source. Nobody crosses out the 38.2 and writes normal, and nobody writes the patient's explanation as though the thermometer had said it. The chart keeps the measurement and the story separate so the next shift can weigh both.`,
          `Do the same. At 14:05 you observed: form closed, notebook opened. At 14:08 the volunteer tells you they paused to find their plot number and were going to come back to the form. Write that as a new line: 14:08, volunteer explains they paused to find plot number, intended to return. The word explains and the volunteer's name mark it as something reported to you, not something you saw. Then go back to abandoned and mark it corrected, with an arrow to the 14:08 line, rather than deleting it. Someone reading the page later needs to see why the note changed. If the first version disappears, trouble follows. The next reader might find abandoned in your earlier email and intended to return in your final notes and treat them as two independent observations. They were one observation and one correction.`,
        ],
      },
      {
        title: 'Use feedback without making it a truth stamp',
        paragraphs: [
          `The correction has handed you something useful. If people have to stop to find a plot number, does the form warn them they will need one? You can check that on an authorised sample form, and if the warning is missing, that is a specific, checkable improvement that came out of the exchange. The redesign to stop people giving up has become a line of text near the top of the form.`,
          `Be careful about what the volunteer's agreement does and does not do. If they read your summary and say yes, that is right, they have confirmed the summary as they remember it. They have not certified every detail, and their memory of their own intentions three minutes ago is good but not perfect. If they disagree, they do not owe you an explanation of why. If they ask you to remove a detail, follow whatever you agreed about notes when you started. The goal is an account that can be challenged and improved by the person it describes. It is not a signature that shields your first interpretation, and it is not a way of making the volunteer responsible for whatever the meeting later decides.`,
        ],
      },
      {
        title: 'Why the rewrite is tempting',
        paragraphs: [
          `Once you know about the plot number, abandoned looks embarrassing, and the clean fix is to make it never have existed. But a note that shows its corrections is more trustworthy than a note that has none. Every observer gets things wrong, and a page with no corrections has either a perfect observer or a tidy one. The hospital chart with a reading and an explanation side by side is believed precisely because it did not smooth itself out.`,
          `Two habits. Whenever you write a word that describes someone's intention or state of mind, abandoned, refused, ignored, gave up, treat it as an interpretation and offer the person a short factual summary to correct. And when a correction arrives, add it with a name and a time and mark the old line corrected, so the page tells the story of how you came to know what you know.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Observation, interpretation, correction',
      alt: 'At 14:05 a form closes; an abandonment interpretation is later corrected by the volunteer at 14:08.',
      caption: `Read the first two entries together and notice they share a time but not a kind: one is what was seen, the other is what the observer wrote about it. The third entry is the chart note with its source, the volunteer, at 14:08. The last entry shows all three surviving on the page, with abandoned marked corrected rather than removed. Fictional timestamps, in order but not to scale.`,
      items: [
        { label: '14:05: observed', detail: 'Form closed; notebook opened.' },
        { label: '14:05: initial interpretation', detail: 'Observer wrote abandoned; intention was not observed.' },
        { label: '14:08: volunteer explains', detail: 'Paused to find plot number; intended to return.' },
        { label: 'Revised note', detail: 'Keep observation; attribute explanation; mark abandoned as corrected.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        `Write the fictional observation, form closed and notebook opened at 14:05, on one line, and the word abandoned on a separate line beneath it. Separating them on paper is the whole lesson in miniature: one is the thermometer reading, the other is your guess about it.`,
        `Draft a short, neutral invitation to correct the factual summary, something like here is what I noted, does that match what happened? Check that it asks for corrections, not for reasons.`,
        `Add the volunteer's plot-number explanation as a third line, with their name, the word explains, and the time 14:08. Those three markers are what keep a reported intention from looking like an observed one.`,
        `Go back to abandoned and mark it corrected with an arrow to the 14:08 line, leaving it legible. Then write one thing about the form you could check on a sample, such as whether it warns that a plot number is needed.`,
      ],
      notice: `Your revised page shows the observation, the first interpretation, the correction, and where the correction came from, all at once. A reader can see how the account changed and would not mistake the two versions for two witnesses.`,
      troubleshooting: `If every line on the page now reads as though you saw it directly, add speaker and time labels to anything that was reported to you. If you have crossed out abandoned so hard it cannot be read, rewrite it faintly beside the correction; the history is part of the record.`,
    },
    recall: {
      prompt: 'Your note says a friend rejected a recipe, but they explain that they saved it for a day with more time. How should it change?',
      hint: 'Preserve the visible action and attribute the later explanation.',
      answer: `Keep the thermometer reading: whatever you actually saw, probably that they closed the recipe or swiped past it, with the time. Then look at rejected and recognise it as your word for an intention you could not see, and mark it corrected. Add a new line: friend explains, saved for a day with more time, with the time they told you. Do not rewrite the original so it now says friend saved recipe for later as if you had watched them decide that; you watched a screen change, and the saving-for-later is their account of it. The page should end up with three things on it, the action, your corrected guess, and their attributed explanation, which is exactly how a chart would show a reading and the patient's hot drink.`,
    },
    quiz: {
      question: 'A participant corrects your account of a paused task. Which revision is most transparent?',
      options: [
        'Keep the observed pause and attach the participant\'s explanation with its source.',
        'Replace the whole note so the corrected version appears to be your original observation.',
        'Mark all details verified because the participant approved the general summary.',
      ],
      correctIndex: 0,
      explanation: `Keeping the observed pause and attaching the explanation with its source is the hospital chart: the reading stays, the story is added with a name and time, and a later reader can weigh both. Replacing the whole note so the correction looks like your original observation erases the history and lets a reported intention pass as something you witnessed. Marking everything verified because the participant approved a summary turns a quick yes into a certificate for every detail, which is more than the participant said and more than their memory could promise.`,
    },
    takeaway: `Keep your notes like a hospital chart: the reading you took stays on the page, the person's explanation goes beside it with their name and the time, and the word you guessed with, abandoned or rejected, is marked corrected rather than erased, because an account that shows how it changed is worth more than one that pretends it was never wrong.`,
    sourceNote: 'GOV.UK contextual research and note guidance inform correction and attribution. The tool-loan scene is an original example, not independent verification of reported intentions.',
  },
  {
    id: 'observer-013',
    title: 'List explanations that make different predictions',
    outcome: `Lay out several explanations side by side, write what each would lead you to check, and pick the check whose answer changes your next move, leaving room for two causes at once or an unlisted one.`,
    scene: 'A rehearsal event is absent from the calendar currently displayed on a phone.',
    sections: [
      {
        title: 'The rehearsal disappeared from this view',
        paragraphs: [
          `You open the calendar on your phone to check what time Thursday's rehearsal starts. It is not there. Thursday evening is blank. Your stomach drops slightly and a sentence forms: someone has cancelled it.`,
          `Pull the observation back to its actual size. What you know is that the event is absent from the calendar view you are looking at, on this phone, right now. That is all. There are several ordinary ways for an event to be missing from a view. It might never have been saved. It might live on a calendar that is currently hidden, the shared one or the work one. It might genuinely have been cancelled. Or something else, a sync hiccup or a wrong date, might be going on. Each of these is a possible explanation that can be compared against what you see, which is what a hypothesis is. Naming one, even the alarming one, does not make it true and does not point a finger at anyone.`,
        ],
      },
      {
        title: 'Write what each explanation would lead you to check',
        paragraphs: [
          `A doctor with a patient who has a cough does not settle on one cause and treat it. They hold several at once, a cold, an allergy, a chest infection, and for each they ask what would show up if that were the cause: a fever, a seasonal pattern, a particular sound in the chest. Then they order the one test whose result would split the possibilities apart. Lots of symptoms fit every cause; a good test is the one that fits some and not others.`,
          `Give each explanation a column and under it write what it would send you to look at. Hidden calendar: check which calendars this view is showing. Never saved: look for the original invitation or message, rather than assuming a saved event once existed. Cancelled: read the organiser's current notice. Another cause: note anything odd about sync, dates, or accounts. These checks are not guaranteed signs; a missing invitation itself has several explanations. The point is to find a check whose possible answers would change what you do next. Collecting more details that happen to fit the story you already prefer is not a check. It is a cough that fits every cause.`,
        ],
      },
      {
        title: 'Do not force one winner from an incomplete list',
        paragraphs: [
          `Now suppose you toggle the hidden calendars on and the rehearsal appears on Thursday at seven. And suppose that when you open the organiser's latest message, it says the rehearsal is off. Two explanations have both turned out true. The display was hiding the entry, and separately, a cancellation changed whether you should turn up. The table is not a competition where one column has to win. Causes overlap, and here they did.`,
          `Resist a tidy-sounding mistake: one piece of support per column does not make the columns equally likely. The evidence for hidden calendar and the evidence for cancelled are different kinds of thing with different weight, and the table does not add them up. Keep the other-cause column open so a result you did not expect has somewhere to go instead of being squeezed into an existing column. Use only records you are allowed to look at. And stop when the practical question is answered. You know not to go on Thursday. You do not need a theory about why anyone did anything.`,
        ],
      },
      {
        title: 'Why the first story wins by default',
        paragraphs: [
          `The alarming explanation arrives first because it carries a feeling, and a feeling is faster than a table. Once it is in place, the mind collects details that fit it and reads each one as confirmation, which is how a hidden calendar turns into a cancelled rehearsal and, by the evening, into someone not telling you. The columns exist to slow that down by a minute and make the alternatives visible before the collecting starts.`,
          `Two habits. Whenever a single explanation arrives with a feeling attached, write at least two more beside it before you check anything. And choose the check by asking which result would change what I do next, rather than which result would prove me right.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Four possibilities for the missing rehearsal',
      alt: 'Four explanation columns pair an unsaved entry, hidden calendar, cancellation, and another cause with relevant checks.',
      caption: `Read down each column as a cause paired with the one test a doctor would order for it. Then notice the fourth column: it has no cause, only a reminder to leave room. Two of these columns can both be true at once, as they are in the lesson, so the layout is a set of checks to run, not a vote with four candidates. Fictional comparison.`,
      items: [
        { label: 'Entry not saved', detail: 'Check whether an invitation or saved entry ever existed.' },
        { label: 'Calendar hidden', detail: 'Inspect which of your calendars this view includes.' },
        { label: 'Rehearsal canceled', detail: 'Read the organizer\'s current authorized notice.' },
        { label: 'Another cause', detail: 'Keep room for sync, date, or account differences.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen'],
      steps: [
        `Write the observation at its true size: rehearsal absent from the displayed calendar view. Not cancelled, not deleted; absent from this view. The sentence sets the limit of what you actually know.`,
        `Draw four columns headed unsaved, hidden, cancelled, and another cause. Under each, write the one thing you would look at if that were the cause. This is the doctor pairing each diagnosis with its test.`,
        `Apply this fictional result: the hidden calendar contains the event, and the organiser's notice says cancelled. Mark both columns as supported. Two true causes is a normal outcome, not a failure of the table.`,
        `Write the practical conclusion about attending in one sentence. Do not write percentages next to the columns; one supporting fact each does not make them equally likely, and the table was never a probability calculation.`,
      ],
      notice: `Your table holds two causes at the same time without strain, and the fourth column is still open for something you did not think of. The practical question, whether to go on Thursday, is answered without a story about anyone's motives.`,
      troubleshooting: `If every column sends you to look at the same thing, you have not found a distinguishing check yet; look for a record that would come out differently under different causes. If one column has filled up with details while the others stay empty, you are collecting for a favourite rather than testing.`,
    },
    recall: {
      prompt: 'Your exported photo looks dull. How could an explanation table avoid prematurely blaming the camera?',
      hint: 'Consider the capture, export, and display, plus another cause.',
      answer: `Put the observation at its real size first: this exported file looks dull on this screen. Then give the causes columns. Capture: was the original image dull too? Open the unexported original and look. Export: did a setting change it? Compare the export settings against a previous export that looked fine. Display: is it the screen? Open the same file on another device you are allowed to use. Another cause: lighting in the room, a colour profile, something you have not thought of. Each column has a different test, and the tests can come out true together; a slightly flat original and a compressing export setting could both be contributing. Blaming the camera before running the tests is picking the column with the feeling attached, and matching a story is not a probability.`,
    },
    quiz: {
      question: 'Two proposed causes both predict an empty folder. What would best distinguish them?',
      options: [
        'Count how many descriptive details can be written under each cause.',
        'Choose a check with different expected results, while allowing both or another cause.',
        'Assign each cause half the probability because there are two columns.',
      ],
      correctIndex: 1,
      explanation: `Choosing a check whose expected results differ between the two causes is the doctor ordering the test that splits the diagnoses; an empty folder fits both, so you need something that fits only one, and you keep the door open for both being true or a third cause. Counting descriptive details rewards whichever story you have thought about longest, which is collecting for a favourite rather than testing. Splitting probability in half because there are two columns treats the layout of the page as evidence, and the number of columns says nothing about how likely anything is.`,
    },
    takeaway: `Hold your explanations the way a doctor holds diagnoses: several at once, each paired with the one check that would show up differently if it were true, chosen by asking what would change your next move rather than what would prove you right, and with a spare column open for the cause you did not list, because two of them can be true at the same time and the table was never a vote.`,
    sourceNote: 'Bayesian inference supplies the evidence-comparison perspective; note guidance supports explicit records. This table is an organizing framework, not a formal probability model.',
  },
  {
    id: 'observer-014',
    title: 'A detailed story sits inside a broader event',
    outcome: `Notice when one prediction is a detailed version of another, never rate the detailed one above the broad one that contains it, and keep every percentage attached to the total it was counted against.`,
    scene: 'Twenty hypothetical deliveries include eight late arrivals, two caused by a van breakdown.',
    sections: [
      {
        title: 'A vivid breakdown story',
        paragraphs: [
          `You have ordered craft supplies for a workshop on Saturday and you are weighing two worries. First: the delivery arrives late. Second: the delivery arrives late because the courier's van breaks down. The second one is easier to picture. You can see the van on the hard shoulder, the driver on the phone, your box in the back. Because you can picture it, it feels more likely.`,
          `Now look at the logic underneath the pictures. Every delivery that is late because of a breakdown is also, simply, late. But a delivery can be late for a dozen other reasons: traffic, a wrong address, a depot backlog. So the breakdown story is a smaller piece of the lateness story. Adding a cause gives the story more detail and fewer ways to come true. Vividness pulls your estimate up; the arithmetic pulls it down, and the arithmetic is right.`,
        ],
      },
      {
        title: 'Count the smaller event inside the larger one',
        paragraphs: [
          `Think of Russian nesting dolls. The small painted doll sits inside the medium one, which sits inside the large one. You can hold the medium doll without the small one, but you cannot hold the small one on its own outside the medium. Whatever is true of the small doll's position is also true of the medium doll's. Late because of a breakdown is the small doll. Late is the medium doll around it.`,
          `Make it concrete with an invented set of twenty deliveries. Eight arrive late. Of those eight, two are late because of a breakdown and six are late for other reasons. The other twelve arrive on time. Lateness: eight out of twenty, which is 40%. Lateness because of breakdown: two out of twenty, which is 10%. Notice that the two breakdown deliveries are already among the eight late ones. If you add eight and two and get ten late deliveries, you have counted the small doll twice, once on its own and once inside the medium. A set entirely contained in another is called a subset, and its count can never exceed the set that contains it. Divide both by the same twenty and the same ordering holds for the percentages.`,
        ],
      },
      {
        title: 'Keep the denominator attached',
        paragraphs: [
          `There is a third, perfectly good question hiding here: of the deliveries that were late, how many involved a breakdown? That is two out of eight, which is 25%. It is a true number, and it is a different question. You are now counting against the eight late deliveries, not the twenty total. The number you divide by, the denominator, changed from twenty to eight, and the percentage jumped from 10% to 25% without a single delivery changing.`,
          `This is where people get caught. Someone hears breakdowns cause 25% of late deliveries and a minute later says there is a 25% chance of a breakdown delay, which would be two and a half times the real figure. Before comparing any two percentages, write down the population each one describes. For your Saturday box, these twenty invented deliveries estimate nothing about the real courier; they exist to show a constraint. For the same delivery, with the same information, a detailed prediction that contains lateness cannot be more likely than lateness alone.`,
        ],
      },
      {
        title: 'Why detail feels like likelihood',
        paragraphs: [
          `A story with a mechanism feels more real than a bare outcome, because the mind judges likelihood partly by how easily it can imagine the event. The van on the hard shoulder is easy to imagine. Late for an unspecified reason is a blank, and blanks feel improbable. But the blank contains the van and every other reason besides, which is exactly why it is the bigger doll.`,
          `Two habits. When you catch yourself rating a because-version of an event, write the plain version beside it and check the plain one is rated at least as high. And whenever you see or say a percentage, say the denominator in the same breath, out of all deliveries or out of the late ones, because the number means nothing without it.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Two breakdown delays are part of eight late deliveries',
      alt: 'Of twenty hypothetical deliveries, eight are late and two of those eight are late because of a breakdown.',
      caption: `Look at the short bar first and notice its detail says included in the eight. It is the small doll inside the medium one, so the two bars overlap rather than stack, and eight plus two is not a number here. Both bars share the same total of twenty, which is why their percentages can be compared directly. Invented counts.`,
      unit: 'deliveries out of 20',
      items: [
        { label: 'All late deliveries', detail: '8 / 20 = 40%', value: 8 },
        { label: 'Late because of breakdown', detail: '2 / 20 = 10%; included in the eight.', value: 2 },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        `Draw twenty small circles for the fictional deliveries and mark eight of them L for late. The circles make the containment visible in a way the numbers alone do not.`,
        `Inside those eight, mark two with a B for breakdown. Do not draw any new circles; the breakdown deliveries are already late ones. Leave the other twelve blank for on time.`,
        `Work out three fractions: late out of all twenty, breakdown-late out of all twenty, and breakdown-late out of the eight late. Write the denominator under each before you convert to a percentage.`,
        `Write 40%, 10%, and 25% beside their denominators and finish this sentence: the last two differ because the denominator changed from twenty to eight, not because the deliveries did.`,
      ],
      notice: `The breakdown circles never leave the late group, and every percentage on your page has its total written next to it. The small doll is inside the medium one, and you can see it.`,
      troubleshooting: `If you counted ten late deliveries, you drew the two breakdown cases as separate circles; erase them and mark B on two of the existing late ones. If 25% feels like it should be the chance of a breakdown delay, look at what you divided by.`,
    },
    recall: {
      prompt: 'Someone assigns 30% to a picnic being canceled and 45% to cancellation because of rain. What needs correction?',
      hint: 'Every rain cancellation is also a cancellation.',
      answer: `Cancellation because of rain is the small doll and cancellation is the medium doll around it, since every rained-off picnic is a cancelled picnic but picnics also get cancelled for illness, a double booking, or nobody turning up. So for the same picnic and the same information, the rain figure cannot be higher than the overall figure; 45% inside 30% is a doll that does not fit. At least one of the two numbers has to move, or the events need redefining; perhaps the 45% was meant as the chance of rain, not the chance of a rain cancellation, which is a different denominator. The vivid picture of a soaked picnic blanket explains why the mistake happened. It does not make the ordering legal.`,
    },
    quiz: {
      question: 'Which pair can describe the same train journey using the same information?',
      options: [
        'Delayed: 40%; delayed because of a signal fault: 10%.',
        'Delayed: 10%; delayed because of a signal fault: 40%.',
        'Delayed: 20%; delayed because of a signal fault: 30%.',
      ],
      correctIndex: 0,
      explanation: `Delayed at 40% and delayed because of a signal fault at 10% is the only pair where the small doll fits inside the medium one: every signal-fault delay is a delay, so the detailed figure must be no larger than the broad one. The second pair puts a 40% doll inside a 10% doll, and the third puts 30% inside 20%; both are impossible for the same journey and the same information, however convincing a signal fault sounds as a reason.`,
    },
    takeaway: `A prediction with a because in it is a smaller doll nested inside the plain prediction, so it can never be more likely than the plain one for the same event and information; write the plain version beside any detailed one and check the ordering, and never let a percentage leave the room without the total it was counted against, since 2 out of 8 and 2 out of 20 are the same two deliveries wearing different numbers.`,
    sourceNote: 'Seeing Theory explains compound probability. Delivery counts are invented to illustrate containment and conditional percentages, not estimate transport reliability.',
  },
  {
    id: 'observer-015',
    title: 'Ask how the missing evidence would have appeared',
    outcome: `Before treating not finding something as proof it never happened, trace each step that had to work for the evidence to appear where you looked, and check the step most likely to have broken.`,
    scene: 'A finished poster export does not appear in the folder view the designer checks.',
    sections: [
      {
        title: 'The poster is not in this folder',
        paragraphs: [
          `You have just finished the club poster and clicked Export. You open the Downloads folder to grab the file and attach it to an email. Nothing new is there. The most recent file is from last week. Your first conclusion is immediate: the export failed. You go back to the editor to do it again.`,
          `Wait a moment before redoing anything. Between clicking Export and seeing a file in Downloads there is a chain of things that all have to happen. The editor has to actually produce the file. The file has to be saved somewhere. And the folder you are looking at has to be the somewhere, with no filter hiding it. If the editor saved to Pictures because that is where it saved last time, or if Downloads is set to show only PDFs and you exported a PNG, the export could have worked perfectly and still be invisible from where you are standing. An empty folder tells you about one search in one place. It does not, on its own, tell you about the whole process.`,
        ],
      },
      {
        title: 'Draw the path from event to record',
        paragraphs: [
          `You post a birthday card to a friend, and a week later they say nothing arrived. Did you fail to post it? Not necessarily. The card had to be written, stamped, dropped in the box, collected, sorted, delivered to the right address, and then noticed on their doormat rather than kicked under the shoe rack. A break at any of those links produces the same result, a friend who saw no card. Their empty doormat is real evidence, but it points at the whole chain, not at you.`,
          `Draw the export the same way, as four links: export requested, file generated, saved to the chosen location, shown in the folder view you checked. Then ask what you actually know about each link. A progress bar that reached the end supports the file being generated, but says nothing about where it went. A recent-files entry in the editor supports a path, but not that the file is still there. This is causal reasoning in its simplest form: asking which earlier steps must have worked for the later evidence to exist. Because a break at any link leads to the same empty folder, the empty folder alone cannot tell you which link broke. You have to go and look at the links.`,
        ],
      },
      {
        title: 'A dependable search makes absence more informative',
        paragraphs: [
          `Suppose you open the editor's export settings and the destination says Pictures. You look in Pictures, and there is the poster, timestamped two minutes ago. The export worked. Your Downloads search was simply never capable of finding it, like checking the doormat when the card went to the office. Now imagine the opposite setup: the editor is documented to save only to Downloads, you have cleared every filter, you have refreshed, and the folder is still empty. In that case absence weighs much more heavily against a successful save, because the search was one that would have found the file if it existed.`,
          `The question to ask yourself is: how often would this evidence be missing even though the thing happened? When the answer is often, because of wrong folders and filters, a missing file means little. When the answer is almost never, a missing file means a lot. You will rarely have an exact rate, so do not invent a percentage to make the reasoning feel rigorous. Just check the real destination and the export status before you redo the work or decide what went wrong.`,
        ],
      },
      {
        title: 'Why absence feels like failure',
        paragraphs: [
          `An empty folder is a vivid nothing, and the mind fills a vivid nothing with the nearest explanation, which is usually it did not work. Redoing the export is quick and feels productive, so people do it, and then have two posters in Pictures and still nothing in Downloads, and conclude the editor is broken. The chain was fine the whole time. The search was looking at the wrong doormat.`,
          `Two habits. When something you expected is missing, sketch the links from the event to the place you looked before you conclude anything about the event. And before trusting an absence, ask how likely this search was to find the thing if it existed, because an absence is only as informative as the search that produced it.`,
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'From export request to visible file',
      alt: 'The poster must be generated, saved to a location, and included in the view before the search can show it.',
      caption: `Read the four boxes as the links in the postal chain, then find where it breaks: the third box says the poster was saved in Pictures, and the fourth says Downloads was checked. Every link up to the save worked. The empty folder was produced by looking in the wrong place, not by a failed export, and nothing about the first two boxes could have told you that. Fictional process.`,
      items: [
        { label: 'Export requested', detail: 'A request is not yet a finished file.' },
        { label: 'Poster generated', detail: 'The editor produces the output.' },
        { label: 'Saved in Pictures', detail: 'The chosen destination in this example.' },
        { label: 'Downloads checked', detail: 'Wrong folder: this view cannot show the saved poster.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        `Draw the four stages of the fictional poster export as boxes in a row: requested, generated, saved, shown in the checked view. Work on paper only; do not change anything on a real computer.`,
        `Mark which box would establish that a saved file exists and which only shows that one was asked for. A progress bar belongs to the second box, not the third; the distinction is the whole lesson.`,
        `Add the fictional result, saved in Pictures and searched in Downloads, and write one sentence explaining why the search came back empty even though every link up to the save worked.`,
        `Write one check of the real destination you would do first, and one condition under which an empty folder would actually be strong evidence, such as a documented single destination with all filters cleared.`,
      ],
      notice: `Your page explains how a successful export and an empty folder can both be true at once, and it names the one link where this particular chain broke, which was the search, not the export.`,
      troubleshooting: `If every arrow on your diagram just says failed, you have not described the links yet; give each one its own distinct way of breaking, wrong destination, filter active, file never generated. If you cannot say how likely the search was to find the file, you do not yet know how much the absence means.`,
    },
    recall: {
      prompt: 'A club member receives no newsletter. What should be checked before concluding they were never added to the list?',
      hint: 'Being added, sending, delivery, and inbox filtering are different steps.',
      answer: `Draw the postal chain before blaming the first link. The member had to be added to the list, the newsletter had to be sent to that list, the message had to be delivered to their address, and it had to land somewhere they actually look rather than a spam or promotions folder. A break at any of those produces exactly the same result, a member who saw no newsletter. So, with the right permission, check the list membership and the sending log first, then the address on file, then ask the member to look in their filtered folders. If they were added and the send log shows their address, the empty inbox is pointing further down the chain. Absence alone cannot tell you it was the first step that failed.`,
    },
    quiz: {
      question: 'Which condition makes a missing routine receipt stronger evidence that a transaction did not complete?',
      options: [
        'The receipt is not visible in the inbox view normally used.',
        'The person remembers the usual receipt process in detail.',
        'The receipt process is dependable and the relevant complete records were checked.',
      ],
      correctIndex: 2,
      explanation: `A dependable receipt process plus a check of the complete records is the search that would have found the receipt if it existed, so coming up empty genuinely weighs against the transaction having completed. Not seeing it in the usual inbox view is one look at one doormat, with filters and folders unexamined, so the absence could easily be produced by a working transaction. Remembering the process in detail describes the chain without checking any link of it, and memory of how things usually go is not a record of this one.`,
    },
    takeaway: `A missing file is an empty doormat, not a proof that nothing was posted: before you conclude the event failed, draw every link from the event to the place you looked, find the one most likely to have broken, and ask how often this search would miss the thing even if it happened, because an absence is only as strong as the search that produced it.`,
    sourceNote: 'Bayesian inference informs reasoning about non-detection under competing explanations. The export chain is an original illustration, not a claim about a particular editor.',
  },
  {
    id: 'observer-016',
    title: 'Carry the first update into the second',
    outcome: `Update your odds between two explanations one observation at a time, starting each update from where the last one left you, and check whether each draw was put back before reusing a multiplier.`,
    scene: 'One of two boxes is chosen fairly, then counters are drawn with replacement from that same box.',
    sections: [
      {
        title: 'Choose the box once',
        paragraphs: [
          `Picture two identical boxes on a table, each holding eight counters. Box A has six red and two blue. Box B has two red and six blue. A friend flips a coin, picks one box without telling you which, and sets it in front of you. Every counter you draw from now on comes from that one box. The question is: which box is it?`,
          `Before you draw anything, you have no reason to favour either; the coin was fair, so A and B are each at 50%. Those starting chances are called priors, and they are simply where you begin. Now you reach in and pull out a red counter. Think about how surprising that is under each story. If this is A, red was six chances out of eight. If this is B, red was only two out of eight. Red was three times as likely to happen if the box is A. That tips you toward A. It does not prove A, because B could still have given you one of its two reds.`,
        ],
      },
      {
        title: 'Odds make the update visible',
        paragraphs: [
          `Imagine a balance scale with A on one pan and B on the other, level to begin with. Each piece of evidence is a weight you add to one side. A red counter is a weight that favours A, and its size is set by how much more often A produces reds than B does. Add the weight and the scale tips. The next piece of evidence goes onto the scale as it now sits, tilted, not onto a scale you have secretly levelled again.`,
          `Odds are the scale written as numbers: the chance of A compared with the chance of B. Equal chances are odds of one to one. The size of the red counter's weight is called the likelihood ratio, and it is how likely the observation is under A divided by how likely it is under B: six eighths divided by two eighths, which is three. To update, multiply the current odds by the ratio. One to one times three gives three to one. That means A now holds three parts out of four total, which is 75%, and B holds one part out of four. It does not mean three red counters are left in A; the odds are about your belief, not the box's contents. Now put the red counter back and shake the box, so the contents are exactly as they started before the next draw.`,
        ],
      },
      {
        title: 'Do not restart from equal chances',
        paragraphs: [
          `You draw again and get a second red. Because you replaced the first counter, each box is back to its original mix, so a red is again three times as likely under A, and the likelihood ratio is three again. Here is the step people get wrong. The second multiplication starts from the tilted scale, three to one, not from the level one. Three to one times three is nine to one. A now holds nine parts out of ten, which is 90%. Someone who restarts from one to one each time will get 75% after two reds and stay there forever, throwing away half their evidence.`,
          `Two conditions made the repeat multiplier legal. The box stayed fixed, and you replaced and mixed, so the second draw did not depend on the first. That is what independent means here, and it comes from the rules you followed, not from the mere fact that two draws happened. Change the rules and the number changes. Suppose you had not replaced the first red. A would now hold five red out of seven and B one red out of seven, so a second red would be five times as likely under A, and the ratio would be five, not three. The multiplier always has to be computed for the box as it is at the moment of the draw.`,
        ],
      },
      {
        title: 'Why people level the scale',
        paragraphs: [
          `Each new observation feels like a fresh question, so the instinct is to judge it on its own, which quietly resets the odds to even every time. The result is that two pieces of evidence pointing the same way count for no more than one. Writing the current odds down before each update, and multiplying from there, is the whole correction. It feels like bookkeeping. It is the difference between 75% and 90%.`,
          `Two habits. Before each new observation, write down the odds you currently hold and update from that line, never from the starting line. And before reusing a likelihood ratio, check whether the sampling rule, replaced or not, has changed what the boxes would produce.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Why a red draw favors A',
        alt: 'Box A has six red counters out of eight; box B has two red counters out of eight.',
        caption: `Compare the heights first: six against two, with both boxes holding eight. That six-to-two comparison is the weight a red counter puts on the scale, and six divided by two is the likelihood ratio of three. Blue counters would tip the other way, by six over two in B's favour. Toy box contents, exact by construction.`,
        unit: 'red counters out of 8',
        items: [
          { label: 'Box A', detail: '6 red, 2 blue', value: 6 },
          { label: 'Box B', detail: '2 red, 6 blue', value: 2 },
        ],
      },
      {
        type: 'flow',
        title: 'Two red draws with replacement',
        alt: 'Odds for A versus B move from one to one, to three to one, to nine to one.',
        caption: `Follow the odds across the three boxes and notice that each step multiplies the previous odds, not the starting ones: one to one, then three to one, then nine to one. The scale is never levelled between draws. The replace-and-mix rule is what lets the same multiplier of three be used twice. Without it the second step would use five.`,
        items: [
          { label: 'Before drawing', detail: 'A:B = 1:1; A has 50% probability.' },
          { label: 'First red', detail: 'Multiply odds by 3: A:B = 3:1; A has 75%.' },
          { label: 'Second red', detail: 'Multiply by 3 again: A:B = 9:1; A has 90%.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        `Draw box A with six red and two blue marks and box B with two red and six blue. Having the contents in front of you is what makes the likelihood ratio a count rather than a formula.`,
        `Write the rules at the top of the page: box chosen once, same box throughout, replace and mix after each draw. Then write the starting odds A:B as 1:1. The rules are what will justify reusing the multiplier.`,
        `Compute the red likelihood ratio, six eighths over two eighths, which is three. Multiply 1:1 by three for the first red and write 3:1. Then multiply 3:1, not 1:1, by three for the second red and write 9:1.`,
        `Convert 9:1 to a probability by counting all ten parts: nine out of ten, 90%. Then write one sentence explaining why leaving the first red out of the box would make the second ratio five instead of three.`,
      ],
      notice: `Your working reads 50%, then 75%, then 90%, with each update starting from the line above it, and the replace-and-mix rule is written where you can see it beside the reused multiplier.`,
      troubleshooting: `If you got 900%, you multiplied a percentage instead of odds; go back to odds, update, then divide A's parts by the total of both. If you got 75% after two reds, you levelled the scale between draws; the second update must begin at 3:1.`,
    },
    recall: {
      prompt: 'A toy stamp generator is chosen fairly from P and Q. Each of two conditionally independent star marks is twice as likely under P. What are the final odds and probability?',
      hint: 'Multiply the odds twice, then count all probability parts.',
      answer: `Start the scale level at 1:1 because the choice was fair. The first star mark is a weight of two in P's favour, so the odds become 2:1. The second star mark goes onto the tilted scale, not a levelled one: 2:1 times two is 4:1. Count all the parts, four for P and one for Q, five in total, so P has four out of five, which is 80%. The multiply-twice step is only legal because the marks are stated to be independent given the generator, the equivalent of replace and mix. If the second mark were just a copy of the first, it would be the same evidence seen twice and would add no new weight at all.`,
    },
    quiz: {
      question: 'In the box example, a red counter is not replaced. What ratio should a second red supply?',
      options: [
        'Three, because the original boxes had a three-to-one red ratio.',
        'One, because the first observation already supplied all the evidence.',
        'Five, because the remaining red probabilities are 5/7 and 1/7.',
      ],
      correctIndex: 2,
      explanation: `Five is right because the weight has to be computed for the boxes as they are at the moment of the second draw: with one red removed, A holds five red of seven and B one red of seven, and five sevenths over one seventh is five. Three is the ratio for the original, refilled boxes, which only applies if you replaced and mixed. One would mean a second red carries no information, but a fresh draw from a fixed box is new evidence, and the scale should tip further.`,
    },
    takeaway: `Treat competing explanations as two pans on a balance scale: each observation is a weight sized by how much more often one explanation produces it than the other, you add it to the scale as it currently sits rather than levelling it first, and before reusing the same weight you check whether the sampling rule, replaced or not, has changed what the boxes would produce.`,
    sourceNote: 'Seeing Theory supports Bayesian updating and conditional probability. The boxes and stamp generator are exact toy models, not estimates about real people or devices.',
  },
  {
    id: 'observer-017',
    title: 'Judge confidence across resolved forecasts',
    outcome: `Judge whether your stated confidence matches reality by grouping forecasts made at the same probability and comparing that number with how often the events happened, without overreading a few cases.`,
    scene: 'A fictional commute log contains ten bus-arrival forecasts, each recorded at 80%.',
    sections: [
      {
        title: 'One late bus does not settle your forecasting skill',
        paragraphs: [
          `Before you leave the house you jot in a notebook: 80% chance the bus reaches my stop by 08:20. It arrives at 08:26. Standing at the stop, it is tempting to feel the forecast was wrong and that you are bad at this. But read what you wrote. Eighty percent was never a promise. It said, in plain language, that about one morning in five the bus would not make it. This was one of those mornings.`,
          `So one late bus cannot tell you whether 80% was a good number. To judge that, you need a pile of forecasts, each written down before the outcome was known, each with a clear rule for deciding what counts as yes or no. The rule matters. If you quietly move the deadline to 08:30 after the bus arrives, you are grading a different forecast from the one you made, and the grade means nothing.`,
        ],
      },
      {
        title: 'Put comparable forecasts in a bin',
        paragraphs: [
          `A weather presenter who says 70% chance of rain is making a promise about a crowd, not a day. If you collect every day they said 70% and it rained on about seven in ten of them, their 70% means what it says. If it rained on nine in ten, they were underselling. If it rained on four in ten, they were overconfident. No single Tuesday can tell you which; only the collection of 70% days can.`,
          `A group of forecasts made at roughly the same probability is called a bin. In your fictional commute log, ten bus forecasts were each recorded at 80%, and the bus made it on six of those mornings. The average stated probability in the bin is 80%. The observed frequency is six out of ten, which is 60%. The match between what you say and what happens, across a bin, is called calibration. In a large enough bin, events you call 80% should happen about 80% of the time. Here there is a gap of twenty percentage points, and that is worth writing down. But ten mornings is a small bin. Two more on-time buses would have made it 80% exactly, and two fewer would have made it 40%. The gap is a note to watch, not a verdict.`,
        ],
      },
      {
        title: 'Keep the count and the dependencies',
        paragraphs: [
          `Two things can quietly corrupt a bin. The first is counting the same event more than once. If you forecast the same bus on the same morning at 07:50 and again at 08:05, you have one outcome, not two, and putting both forecasts in the bin makes it look twice as big as it is. The second is forgetting that different mornings can share a cause. A week of roadworks makes five mornings behave like one, so write the shared conditions down beside the forecasts.`,
          `Keep unresolved forecasts in a separate list until their deadline passes, and never alter the original probability, deadline, or yes-or-no rule once written. When the bin shows a gap, the right next step is more clearly defined, resolved cases, not a reflex to knock twenty points off every future estimate. A log makes your confidence inspectable. Keeping one does not, on its own, make your forecasts better; what makes them better is reading the bins honestly and adjusting slowly.`,
        ],
      },
      {
        title: 'Why one result feels like a grade',
        paragraphs: [
          `A late bus is vivid and a notebook of ten mornings is not, so the single miss feels like the truth about your judgement and the bin feels like bookkeeping. The feeling runs the wrong way. The miss is one draw from a distribution you described in advance; the bin is the only place that distribution can be checked. Weather presenters are judged on seasons, not Tuesdays, for exactly this reason.`,
          `Two habits. Write every forecast with its probability, its deadline, and its yes-or-no rule before the outcome, and never edit those three afterwards. And when you want to know whether a number like 80% is honest, look at the whole bin of 80% forecasts, count them, and let a small count keep your conclusion small.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'The ten-forecast 80% bin',
      alt: 'Average predicted probability is 80 percent; observed event frequency is 60 percent among ten forecasts.',
      caption: `Read the two bars as a weather presenter's season: what was said, on the left, against what happened, on the right, across all ten mornings. The twenty-point gap is real and worth noting. Then read the detail text and notice the count: ten. Two different mornings would move the right-hand bar by twenty points on its own, so the bin is noisy. Hypothetical cases.`,
      unit: 'percent',
      items: [
        { label: 'Mean forecast', detail: 'Ten forecasts, each recorded at 80%.', value: 80 },
        { label: 'Observed frequency', detail: 'Six of ten events occurred: 60%.', value: 60 },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        `Make ten fictional rows, each with forecast 80%, and fill the outcome column with six yes entries and four no entries. You are building one bin of a weather presenter's 80% days.`,
        `Work out the mean forecast, 80%, and the observed frequency, 60%. Write the count of ten right beside the comparison, because the count is what tells you how seriously to take the gap.`,
        `Write one sentence explaining why a second forecast of the same bus on the same morning would not add a new row. One outcome is one outcome however many times you predicted it.`,
        `Draft one low-stakes forecast about something coming up, with a probability, a deadline, and a rule for deciding yes or no. Leave the outcome blank until the deadline passes, and promise yourself not to edit the other three.`,
      ],
      notice: `Your page holds three separate things: a single outcome that proves nothing on its own, a bin-level comparison with its count attached, and an unresolved forecast waiting honestly for its deadline.`,
      troubleshooting: `If you cannot say at the deadline whether the event happened, the rule was too vague; narrow the event until yes or no is obvious. If you feel the urge to adjust the 80% after seeing the result, that is hindsight grading itself, and the original number has to stay.`,
    },
    recall: {
      prompt: 'You forecast 70% for twenty separate hobby sessions being completed, and fourteen occur. What can you say?',
      hint: 'Compute the frequency, then keep the sample-size caveat.',
      answer: `Fourteen out of twenty is 70%, so in this bin your stated 70% matched the observed frequency exactly; the weather presenter said seven in ten and it rained on seven in ten. That is good news about this bin and nothing more. It does not tell you whether your 50% or 90% forecasts are honest, because those live in different bins. It does not guarantee next month's sessions, which may face different pressures. And if several of the twenty sessions were the same project on consecutive evenings, they may share a cause and count for less than twenty independent tests. Say: my 70% bin is well calibrated so far, across twenty related cases, and keep logging.`,
    },
    quiz: {
      question: 'One forecast recorded at 90% fails. Which conclusion is justified immediately?',
      options: [
        'It is one non-occurrence; calibration still requires a suitable collection of cases.',
        'The forecaster should lower every subsequent estimate by ten percentage points.',
        'The original probability should be changed to match the observed outcome.',
      ],
      correctIndex: 0,
      explanation: `A 90% forecast says the event will fail about one time in ten, so one failure is exactly what the forecast allowed for, and only a bin of 90% forecasts can show whether the number was honest. Cutting every future estimate by ten points reacts to a single Tuesday as if it were a season and would miscalibrate every other bin. Changing the original probability to fit the outcome is editing the exam paper after the marks are in; the record is only useful if what was written beforehand stays written.`,
    },
    takeaway: `Judge your confidence the way a weather presenter is judged, by the season and not the Tuesday: write each forecast with its probability, deadline, and yes-or-no rule before the outcome and never edit them, gather forecasts made at the same number into a bin, compare that number with how often the events actually happened, and let the size of the bin decide how much the gap is allowed to mean.`,
    sourceNote: 'scikit-learn explains probability calibration for models. The commute notebook adapts that mathematical diagnostic; its ten cases are invented and do not validate a training method.',
  },
  {
    id: 'observer-018',
    title: 'Score the probability you actually wrote down',
    outcome: `Score a yes-or-no forecast by subtracting what happened from the probability you wrote and squaring the gap, so two forecasts of one event compare fairly and the original numbers stay untouched.`,
    scene: 'Two fictional forecasts predict whether a library hold will be ready by Friday, but it is not.',
    sections: [
      {
        title: 'The deadline passes without the book',
        paragraphs: [
          `On Monday you reserve a library book and write in your log: 80% chance it is ready to collect by Friday. A friend who uses the same library looks at the queue and writes 60% for the same book and the same Friday. Friday evening comes and the hold is still not ready. Both of you leaned towards the wrong answer. You leaned harder.`,
          `It would be easy to say you were both wrong and leave it there, or to decide in hindsight that 60% was obviously the sensible number. Neither is useful. What you want is a fair way to put a number on how far off each forecast was, using only what was written down before Friday. That means two things stay frozen: the probabilities as recorded on Monday, and the event exactly as defined, ready by Friday, not ready by Saturday because the library was busy. Change either and you are no longer scoring the forecasts; you are scoring your memory of them.`,
        ],
      },
      {
        title: 'Subtract the outcome, then square',
        paragraphs: [
          `Think of a dartboard where the bullseye is what actually happened. If the hold was not ready, the bullseye sits at zero. If it was, the bullseye sits at one. Each forecast is a dart, and its probability is where it landed. Your score is how far the dart is from the bullseye, and because a dart six inches to the left is as bad as a dart six inches to the right, you square the distance so the sign disappears and bigger misses count for more.`,
          `That is the binary Brier loss. Write the probability as a decimal between zero and one. Code the outcome as one if the event happened and zero if it did not. Subtract the outcome from the probability, then multiply the difference by itself. Your 80% forecast: 0.8 minus 0 is 0.8, and 0.8 squared is 0.64. Your friend's 60%: 0.6 minus 0 is 0.6, squared is 0.36. Lower is better, because lower means the dart landed nearer the bullseye. Squaring does two jobs at once: it makes every miss a positive number, and it punishes a dart a long way out much more than a dart slightly out, since 0.8 squared is nearly twice 0.6 squared even though 0.8 is only a third more than 0.6.`,
        ],
      },
      {
        title: 'One smaller loss is not a calibration verdict',
        paragraphs: [
          `Now imagine the book had been ready. The bullseye moves to one. Your 80% dart: 0.8 minus 1 is negative 0.2, squared is 0.04. Your friend's: 0.6 minus 1 is negative 0.4, squared is 0.16. Suddenly the confident forecast is the better one. So confidence is not always punished. It is rewarded when it points the right way and punished when it does not, which is exactly what you want from a score.`,
          `This is also why one Friday settles nothing. To compare two forecasting methods you average their losses over the same set of resolved events, so that one method is not quietly handed the easy books. And be clear about what the Brier loss measures. It rewards forecasts that are both honest about frequency and good at telling the books that will be ready from the ones that will not. A low average loss is encouraging, but it is not the same as checking your 80% bin against its hit rate. Do both before claiming your confidence matches reality.`,
        ],
      },
      {
        title: 'Why hindsight rewrites the dart',
        paragraphs: [
          `After Friday, 80% feels foolish and 60% feels wise, and the hand itches to tidy the log so it looks wiser. But a dart cannot be moved after it lands, and a forecast cannot be rescored after the outcome without destroying the only thing the score was for. The embarrassing 0.64 is the useful number. It is what tells you, over many Fridays, whether your 80%s are landing where they should.`,
          `Two habits. Score every resolved forecast against the probability as written and the event as defined, and if the urge to adjust either one arrives, write the urge down instead. And compare methods only on the same events, averaged, rather than on one Friday that happened to favour the cautious dart.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Friday result: hold not ready',
      alt: 'An 80 percent forecast has Brier loss 0.64; a 60 percent forecast has loss 0.36 when the event does not occur.',
      caption: `Read the detail text under each bar first: it shows the subtraction and the squaring that produced the height. The bullseye is zero because the hold was not ready, so the taller bar is the dart that landed further out. Had the hold been ready, the bullseye would move to one and the bars would swap to 0.04 and 0.16. Two hypothetical forecasts of one outcome; lower is better.`,
      unit: 'binary Brier loss',
      items: [
        { label: 'Forecast 80%', detail: '(0.8 minus 0) squared = 0.64', value: 0.64 },
        { label: 'Forecast 60%', detail: '(0.6 minus 0) squared = 0.36', value: 0.36 },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        `Write the two fictional probabilities as decimals, 0.8 and 0.6, and the not-ready outcome as 0. Decimals matter: 80 minus 0 squared would give 6400, which is the right idea on the wrong scale.`,
        `For each forecast, subtract 0 and square the result. Label them 0.64 and 0.36 and note which is lower; that dart landed nearer the bullseye.`,
        `On a fresh row, pretend the hold was ready and code the outcome as 1. The bullseye has moved, and the same two darts are now at different distances from it.`,
        `Compute 0.04 and 0.16 for that row and write one sentence on why the more confident forecast wins here and loses above. Confidence is scored by direction, not by itself.`,
      ],
      notice: `Your two rows show the scores changing completely as the outcome changes, while the recorded probabilities never move. The darts stayed where they landed; only the bullseye was different.`,
      troubleshooting: `A negative loss means you forgot to square; distance cannot be negative. A loss of 6400 means you used 80 instead of 0.8. And if you find yourself wanting to score 0.6 for your own forecast because it now seems more reasonable, that is hindsight moving the dart.`,
    },
    recall: {
      prompt: 'A recorded 30% forecast predicts rain during a walk, and rain occurs. What is its binary Brier loss?',
      hint: 'Use 0.3 for the probability and one for occurrence.',
      answer: `Rain happened, so the bullseye is at 1. The dart is at 0.3. Distance: 0.3 minus 1 is negative 0.7. Square it to lose the sign and weight the miss: 0.49. That is a poor score, as it should be for a forecast that leaned fairly hard towards dry on a day it rained. The number to keep in the log is 0.49 next to the original 30%. Do not change the 30% to something that looks better now the walk is over, because the whole point of the score is to find out, across many walks, whether your 30%s are honest. One wet walk is one dart; the log is the board.`,
    },
    quiz: {
      question: 'A 70% prediction does not occur. Which value is its binary Brier loss?',
      options: ['0.30', '0.49', '0.09'],
      correctIndex: 1,
      explanation: `The event did not occur, so the bullseye is 0 and the dart is at 0.7; the distance is 0.7 and its square is 0.49. The value 0.30 is the leftover probability, 1 minus 0.7, which is a distance that was never squared and measured from the wrong end. The value 0.09 is 0.3 squared, which would be the right score if the event had happened and the bullseye were at 1.`,
    },
    takeaway: `Score a forecast like a dart on a board whose bullseye is what actually happened: write the probability as a decimal, code the outcome as one or zero, subtract and square, and never move the dart or the bullseye afterwards, because the only forecasts a score can judge are the ones that stayed exactly as they were written.`,
    sourceNote: 'scikit-learn discusses Brier loss and why it is not a calibration-only measure. The library forecasts are invented examples of the binary convention used here.',
  },
  {
    id: 'observer-019',
    title: 'Explaining a task changes the task',
    outcome: `Before explaining a difference between two attempts at a task, write down what you changed about the conditions, such as narration or attempt order, since those changes are part of the measurement.`,
    scene: 'A volunteer folds a paper display once silently and once while explaining each fold.',
    sections: [
      {
        title: 'The narrated display takes longer',
        paragraphs: [
          `A volunteer has agreed to show you how they fold the paper display stands for the club's stall. The first time, they just fold, quietly, and it takes about a minute. Then you ask them to do another one and talk you through every fold as they go. The second takes nearly two minutes. You write: speed worse on second attempt.`,
          `Look at what you did between the two attempts. You added a job. On the second display the volunteer was folding and also producing a running explanation for a listener who had never done it. That means pausing to name an edge, pointing at a crease, glancing up to see whether you have followed. Each of those is time, and each one was requested by you. The volunteer did not get slower at folding. The task got bigger, and your note blamed the person for the size of the task.`,
        ],
      },
      {
        title: 'The measurement includes its conditions',
        paragraphs: [
          `Time a friend running a hundred metres. Now time them running it again while carrying a tray of full glasses. The second time is slower, and nobody would write down that their running got worse. Everyone can see the tray. The trouble with narration is that it is an invisible tray. It adds load just as surely, but it does not show up in the photograph, so the slower time looks like a fact about the runner.`,
          `A measurement is a reading taken under particular conditions, not a quality lifted cleanly out of a person. Here the conditions are: with or without narration, with or without a listener, first attempt or second. Those last two pull in opposite directions. Having folded one display already might make the second quicker; explaining might make it slower. With two attempts, you cannot pull those apart, and you certainly cannot say narration costs forty seconds in general. If the second attempt had been faster, that would not prove explaining speeds people up either. It would just be two readings under two different sets of conditions. Keep the raw sequence and the conditions beside each time, and resist boiling them down into one word about ability.`,
        ],
      },
      {
        title: 'Choose the mode that answers your question',
        paragraphs: [
          `Decide what you actually want to know, and the right conditions follow. If the question is how does this person fold a display when nobody is watching the clock, agree on an ordinary attempt with no commentary, and save your questions about unclear steps for afterwards. If the question is can this person teach someone to fold a display, then the explanation is the thing you care about, and timing it is beside the point; a fast silent fold teaches nobody anything.`,
          `Either way, quiet observation is still observation under conditions, and it must never become watching someone without their knowledge. For the worked example, a useful note reads: second attempt included pauses to explain crease alignment to the observer. It records what was added. It does not call the two-minute time their normal speed, and it does not call the one-minute time their natural baseline, as if the first attempt had been free of conditions. It had a listener and a first-time nervousness of its own.`,
        ],
      },
      {
        title: 'Why the invisible tray gets missed',
        paragraphs: [
          `Observers notice changes in the person and forget changes they caused, because asking someone to explain feels like a small courtesy rather than an intervention. The volunteer, meanwhile, feels the extra load clearly and may read the note as a judgement. The gap between what the observer requested and what the observer recorded is where unfair conclusions grow.`,
          `Two habits. Before comparing two attempts, list every condition that differed between them, including the ones you introduced, and write that list above the times. And when you want a performance reading, agree the conditions in advance and ask your questions afterwards, so the tray is never on the runner while the clock is running.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Two attempts with different demands',
      alt: 'A quiet folding attempt precedes a narrated attempt with explanation pauses, followed by separate discussion.',
      caption: `Read the detail text of the second box and notice everything added to the folding: naming edges, pausing to explain. That is the invisible tray. Then notice the order, quiet first and narrated second, which means practice and narration both changed at once. The third box shows the alternative: ask afterwards, so neither time has to carry the other's load. Fictional sequence, not to scale.`,
      items: [
        { label: 'Attempt 1: quiet', detail: 'Fold the display with no continuous explanation.' },
        { label: 'Attempt 2: narrated', detail: 'Fold, name edges, and pause to explain crease alignment.' },
        { label: 'Afterward: clarify', detail: 'Discuss unclear steps without treating either time as a universal baseline.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Two sheets of scrap paper', 'Pen'],
      steps: [
        `Fold one sheet in half twice, quietly, at a comfortable pace on a clear surface. This is the run without the tray; notice that even so it has conditions, a first attempt, your own attention on the task.`,
        `Fold the second sheet the same way while explaining the edge alignment out loud, as if to someone who has never folded paper. You are putting the tray on; feel where it slows you.`,
        `List everything the second attempt added: pointing, naming, pausing, checking. You do not need to time either fold; the list of added actions is the measurement that matters here.`,
        `Write the order of the two attempts and one reason a difference between them cannot be pinned on narration alone. Practice from the first fold is the obvious candidate.`,
      ],
      notice: `Your note describes what changed in the task between the two attempts, rather than awarding yourself a folding score. Anyone reading it can see the tray.`,
      troubleshooting: `If the narrated fold felt no different, write that down honestly; the exercise is about recording conditions, not producing a slowdown to match the story. If you find yourself writing faster or slower without saying under what conditions, add the conditions first.`,
    },
    recall: {
      prompt: 'A colleague sorts sample files slowly while explaining every naming rule. Can that time establish their usual sorting speed?',
      hint: 'Explanation is additional work, and observed practice has its own conditions.',
      answer: `No. They were sorting with a tray of glasses in their hands: every naming rule explained aloud is work the ordinary task does not contain, so the time measures sorting plus teaching, not sorting. Write down that narration was required, whether they had sorted a similar batch just before, and that an observer was present. If you want their usual speed, agree an ordinary run with no commentary and ask your questions afterwards. If what you actually want is a tutorial on the naming rules, then the slow explained run is the useful one, and the way to judge it is whether you could now sort the files yourself, not how long it took.`,
    },
    quiz: {
      question: 'A second assembly attempt is faster after the first was narrated. What can be concluded from those two trials?',
      options: [
        'Attempt order and narration differ, so their separate effects are not established.',
        'Narration always slows assembly by the observed time difference.',
        'The second attempt reveals the person\'s fixed natural speed.',
      ],
      correctIndex: 0,
      explanation: `Two things changed between the trials at once, the tray came off and the person had one practice run behind them, so the faster second time could come from either or both, and two readings cannot separate them. Saying narration always slows assembly by that amount turns one pair of readings into a general law and ignores the practice effect entirely. Calling the second time a fixed natural speed pretends that attempt had no conditions, when it had a warm-up and an observer of its own.`,
    },
    takeaway: `Asking someone to explain while they work is putting a tray of glasses in a runner's hands: before you compare two attempts, list every condition that differed, including the ones you introduced and the order you ran them in, write those above the times, and if you want a clean reading, agree the conditions in advance and save your questions for afterwards.`,
    sourceNote: 'GOV.UK contextual-research guidance distinguishes observation from continuous explanation. The paper task illustrates measurement conditions, not a quantified effect of narration.',
  },
  {
    id: 'observer-020',
    title: 'Solve the last move before choosing the first',
    outcome: `Work out which positions near the end of a small game are already won or lost, then reason backwards from them to pick an opening move that leaves your opponent nothing good, whatever they do.`,
    scene: 'Two willing players play an open, no-stakes game with four counters and a last-counter-wins rule.',
    sections: [
      {
        title: 'Four counters and clear rules',
        paragraphs: [
          `Four counters sit on the table between you and a friend. The rules are tiny. You take turns. On your turn you remove one counter or two. Whoever takes the last counter wins. Nothing is hidden, nobody is bluffing, and there is nothing at stake except who makes the tea. Your friend says you can go first.`,
          `The instinct is to guess what your friend will do. Resist it, because there is a better place to start: the end. With one counter left, whoever's turn it is takes it and wins. With two left, whoever's turn it is takes both and wins. Those two positions are settled before anyone touches them. In each, the player to move has a legal move that ends the game in their favour immediately. Call them solved. Everything else in this game will be built on top of them.`,
        ],
      },
      {
        title: 'Three is bad for the player to move',
        paragraphs: [
          `A maze is often easiest to solve from the exit. Start at the finish, trace backwards, and every junction you reach is one where you already know which way leads out. By the time you arrive at the entrance, the whole route is marked. Starting at the entrance means guessing at each fork; starting at the exit means never guessing at all.`,
          `Walk the game backwards the same way. Three counters, your friend to move. If they take one, two are left for you, and two is solved: you take both. If they take two, one is left, and one is solved: you take it. Every legal move from three hands the next player a solved win. So three is a losing position for whoever has to move from it, under these rules, as long as the other player then plays correctly. This is backward reasoning: using the positions you have already solved to judge the position just before them. You need no theory about your friend's habits or mood. The alternatives are all on the table, there are only two of them, and you can check both.`,
        ],
      },
      {
        title: 'Leave the solved losing position',
        paragraphs: [
          `Now go back to the start, four counters, your move. You know three is a losing position for the player to move. So take one counter and leave three. Your friend must now take one or two. If they take one, two remain; you take both and win. If they take two, one remains; you take it and win. Both of their options have been checked, and both lead to the exit for you.`,
          `Compare the other opening. Take two, leaving two, and your friend takes both and makes you put the kettle on. The guarantee you have found rests on three things: these exact rules, your correct opening, and your correct follow-up. Change the rules, say the last counter loses, or players may take up to three, and the solved positions change, so you solve the maze again from its new exit. None of this is about reading people. It is a small, fully visible game where every branch can be inspected, which is precisely why the method works here and why it promises nothing about situations with hidden information or people whose choices are not on the table.`,
        ],
      },
      {
        title: 'Why people start at the entrance',
        paragraphs: [
          `The first move is the one in front of you, so it feels like the thing to think about, and the end of the game feels far away. But the first move only has a value because of what it leads to, and what it leads to is only knowable from the end. Players who guess at the opening and hope are playing the maze from the entrance, and in a four-counter game they lose to anyone who walked in from the exit.`,
          `Two habits. In any small, fully specified game, find the positions that are already won or lost before you think about your opening. And when you have a candidate move, check every legal reply to it, not just the reply you expect, because a guarantee that depends on your opponent cooperating is not a guarantee.`,
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'Both replies after you leave three',
      alt: 'From four counters, take one; either opponent reply leaves one or two counters for you to take and win.',
      caption: `Start at the two boxes on the right, the exits of the maze: one counter or two counters, both already solved in your favour. Then follow the arrows back to the middle box and see that every legal move from three leads to one of those exits. The left box is the opening that gets you there. Both of your opponent's branches are drawn, not just the likely one. Exact toy rules: take one or two, last counter wins.`,
      items: [
        { label: 'Start: 4, your turn', detail: 'Take 1 and leave 3.' },
        { label: '3, opponent\'s turn', detail: 'They must take 1 or 2.' },
        { label: 'They take 1: 2 remain', detail: 'You take both and win.' },
        { label: 'They take 2: 1 remains', detail: 'You take the last and win.' },
      ],
      arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 1, to: 3 }],
    }],
    practice: {
      minutes: 6,
      needs: ['Four counters or paper squares', 'Paper', 'Pen'],
      steps: [
        `Write the exact rules at the top of the page, take one or two and last counter wins, then solve the two smallest positions: with one counter left and with two. Mark both as wins for the player to move. These are the exits.`,
        `Lay out three counters and try both legal moves for the player to move. Show on paper why each one hands the other player a solved win. This is the first junction solved from the exit.`,
        `Lay out four counters and remove one. Now play your opponent's part twice, once taking one and once taking two, moving the real counters each time, and finish each branch with your winning move.`,
        `Try the other opening, removing two, and watch what your opponent can do. If you play this with someone, explain the whole pattern openly first and keep nothing at stake; the point is the reasoning, not the win.`,
      ],
      notice: `Every reply your opponent could make to your opening has a continuation you have checked by hand, not just the reply you were hoping for. That is what turns a good idea into a guarantee.`,
      troubleshooting: `If a branch seems to come out wrong, write whose turn it is beside each pile size before judging it; most errors come from losing track of who moves next. If you cannot see why three is losing, play it out from both sides with the counters rather than in your head.`,
    },
    recall: {
      prompt: 'Under the same rules, you start with seven counters. What opening leaves a losing position for the other player?',
      hint: 'Continue the one, two, three pattern to six.',
      answer: `Walk back from the exit. One and two are wins for the player to move. Three is a loss, because both moves hand over a win. Four and five are wins, because from each you can leave three. Six is a loss, because taking one leaves five and taking two leaves four, and both of those are wins for the other player. So from seven, take one and leave six. Whatever your friend does from six, they leave you four or five, and from either you leave them three, and the rest you have already solved. The losing positions are the multiples of three, under these exact rules and with correct play, and you found that without a single guess about what your friend prefers.`,
    },
    quiz: {
      question: 'From four counters under the stated rules, which opening guarantees a win with correct later play?',
      options: [
        'Take two, because reducing the pile fastest always helps.',
        'Choose either move, because both leave a small pile.',
        'Take one, because both replies from three leave you a winning final move.',
      ],
      correctIndex: 2,
      explanation: `Taking one leaves three, and three was solved from the exit as a losing position for whoever must move from it, since both of their replies hand you a one- or two-counter pile you can clear. Taking two leaves two, which is a solved win for your opponent; speed is not the goal, and the fastest reduction here loses outright. Treating the two openings as interchangeable ignores the backward solve entirely, and one of them leads straight to making the tea.`,
    },
    takeaway: `Solve a small game from the exit, not the entrance: find the positions that are already won or lost at the end, work backwards one step at a time to label the positions before them, choose the opening that leaves your opponent only losing positions, and check every legal reply rather than the one you expect, because a plan that needs the other player to cooperate is a hope, not a guarantee.`,
    sourceNote: 'The game-theory reference provides the strategic framework. The four-counter solution is derived from stated rules and does not generalize to mind reading or interpersonal control.',
  },
  {
    id: 'observer-021',
    title: 'Use chance instead of a predictable pattern',
    outcome: `Explain why letting a fair die pick your move, fresh each round and hidden until the reveal, means no fixed counter-move beats you on average, and why that promises nothing about the next round.`,
    scene: 'Two players openly agree to use hidden fair-die rolls before simultaneous rock-paper-scissors reveals.',
    sections: [
      {
        title: 'Always rock gives the other player an answer',
        paragraphs: [
          `You are playing rock-paper-scissors with a friend to decide who washes up. Rock beats scissors, scissors beats paper, paper beats rock. You have a habit, and you know it: you nearly always throw rock. Your friend has noticed too, and has started throwing paper every time. You keep losing and you keep washing up.`,
          `The problem is not that your friend can read your face. It is that you have a pattern, and any pattern can be answered. So you agree, out loud and with nothing at stake, to try a version where a die chooses for you. Faces one and two mean rock, three and four mean paper, five and six mean scissors. You roll before each round, behind your hand, and you both reveal at the same moment. Your friend knows exactly how the die is mapped to moves. What they cannot see is the roll.`,
        ],
      },
      {
        title: 'Check all six possible faces',
        paragraphs: [
          `A goalkeeper facing a penalty has the same problem you had. If they always dive left, every striker in the league learns to shoot right. Good keepers mix it up, and the point of mixing is not that any one dive is better; it is that the striker can no longer prepare an answer in advance. The keeper gives up trying to be right every time in exchange for never being predictable.`,
          `Now check the die the way a keeper would check their mix. Suppose your friend commits to paper, the move that used to beat you. Faces one and two give you rock, and paper beats rock: two losing faces. Faces three and four give paper against paper: two ties. Faces five and six give scissors, which cuts paper: two winning faces. Each outcome sits on two of six faces, so each has probability one third. Run the same check against a friend who commits to rock, or to scissors, and the count comes out two, two, two again. A rule that picks among moves using probabilities is called a mixed strategy, and this equal mix has a particular property: no single fixed counter-move does better than any other against it. Your friend's paper, which was a guaranteed win against your old habit, is now worth exactly as much as a coin toss. The conditions matter: the roll is hidden, and the reveal is simultaneous.`,
        ],
      },
      {
        title: 'Equal chances do not promise a balanced short run',
        paragraphs: [
          `Here is what the die does not do. It does not spread your results evenly over the next few rounds. Each roll is fresh and independent, meaning the die has no memory of the last roll, so you can throw rock three times running and lose three times running against paper. That is not the method failing. It is what equal chances look like up close. Equal probabilities also do not mean cycling rock, paper, scissors in order; that would give equal totals and a pattern anyone could read after one cycle.`,
          `Nor does randomness win you the next round. It removes your friend's guaranteed edge; it does not hand one to you. And if your friend can see the roll before choosing, the hidden-roll condition is gone, they counter whatever came up, and the whole analysis collapses. Keep this inside the game it was agreed for. Being unpredictable is a fine way to stop a friend exploiting your rock habit over the washing up. It is not a technique for managing people in everyday life, where the rules are not agreed and the stakes are not nothing.`,
        ],
      },
      {
        title: 'Why a losing streak feels like proof',
        paragraphs: [
          `Three losses in a row with a die in your hand feels like the die is broken or the method is nonsense, because the mind expects fairness to show up quickly and evenly. It does not. Fairness is a property of the six faces, visible when you enumerate them, and it reveals itself slowly in long runs. A keeper who dives left three times by chance has not become predictable; a keeper who always dives left has.`,
          `Two habits. When you want to remove a pattern someone can exploit, enumerate all the possibilities in your mixing rule and check the counts, rather than trusting that it feels random. And when a short run goes badly, judge the rule by the faces, not by the last three rounds.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Your die against a fixed paper move',
      alt: 'Two die faces lose to paper, two tie, and two win, giving equal probabilities.',
      caption: `Read the three bars as the goalkeeper's check: against a striker who always shoots one way, how often does each dive come up? Each bar is two faces out of six, so paper, the move that used to beat you every time, now wins only a third of the time. These are the six faces counted, not six rounds played; a real run of six could easily come out three, one, two.`,
      unit: 'die faces out of 6',
      items: [
        { label: 'Lose: rock', detail: 'Faces 1 and 2; paper beats rock.', value: 2 },
        { label: 'Tie: paper', detail: 'Faces 3 and 4; both choose paper.', value: 2 },
        { label: 'Win: scissors', detail: 'Faces 5 and 6; scissors beat paper.', value: 2 },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen', 'Optional fair six-sided die'],
      steps: [
        `Write the six die faces in a row and assign two to rock, two to paper, two to scissors. Check the count before anything else; a mapping with three rock faces would quietly bring your old habit back.`,
        `Fix the opponent's move at paper and label every face win, tie, or loss. You should get two of each. This is the keeper counting dives against a striker who always goes right.`,
        `Repeat the labelling with the opponent fixed at rock, then at scissors. The two-two-two count surviving all three is the whole argument; one fixed counter-move is now as good as another, which is to say no better than chance.`,
        `If you have a die and a willing friend, agree hidden fresh rolls and a simultaneous reveal, play a few rounds, and write the results down as results. A streak either way is an outcome of the method, not a verdict on it.`,
      ],
      notice: `The balance lives in the complete set of six equally likely faces, which you can see on the page, and not in any expectation that the next few rounds will come out even.`,
      troubleshooting: `If one move ended up on more faces than another, fix the mapping before using the equal-probability argument; the argument depends on two-two-two. If a short run of play looks lopsided and you want to conclude the die favours someone, go back to the enumerated faces, which have not changed.`,
    },
    recall: {
      prompt: 'Someone cycles rock, paper, scissors in that order and calls it random because each move appears equally often. What is missing?',
      hint: 'Equal totals and an unpredictable next move are different properties.',
      answer: `Unpredictability is missing. The cycle does give each move a third of the throws, so the totals look like the die's totals, but after watching one cycle an opponent knows exactly what comes next and can counter every throw. It is a goalkeeper who dives left, centre, right, left, centre, right; the striker only has to count. A fresh independent roll also gives each move a third of the throws over a long run, but the next move cannot be read from the last ones, which is the only property that stopped your friend's paper from winning. Equal shares are about the totals. Randomness is about the next throw, and a fresh roll can repeat the same move several times and still be doing its job.`,
    },
    quiz: {
      question: 'What does the agreed hidden fair-die method establish against a fixed opponent move?',
      options: [
        'The next three rounds must include one win, one tie, and one loss.',
        'Win, tie, and loss each have one-third probability on the next round.',
        'After two losses, a win is more likely because outcomes must balance.',
      ],
      correctIndex: 1,
      explanation: `The mapping puts each outcome on two of six faces, so win, tie, and loss each have a one-third chance on the next round against any fixed move; that is the keeper's count and it is all the method claims. Saying the next three rounds must contain one of each turns a probability into a schedule, and a fresh die keeps no schedule. Saying a win is more likely after two losses gives the die a memory it does not have; each roll starts from the same six faces.`,
    },
    takeaway: `Mix your moves the way a goalkeeper mixes dives: let a fair die choose, fresh and hidden each round, check by counting all six faces that every fixed counter-move now does no better than chance, and then accept that equal chances show up in long runs and not in the next three throws, inside a game whose rules you both agreed and nowhere else.`,
    sourceNote: 'Game theory and compound probability support the equal-mix calculation. This no-stakes exercise is not a strategy for predicting personalities or controlling relationships.',
  },
  {
    id: 'observer-022',
    title: 'Make the fallback plan shared, not merely sent',
    outcome: `When two people must end up in the same place, agree one exact spot and time, confirm the other person received it, and settle in advance what you both do if phones fail or the spot is unavailable.`,
    scene: 'Two friends visit separate museum galleries and need a meeting plan that survives poor phone reception.',
    sections: [
      {
        title: 'Two sensible exits can still separate you',
        paragraphs: [
          `You and a friend are at a museum. You want the sculpture wing; they want the photography floor. You agree to split up for an hour and meet afterwards. The museum has two exits, a garden entrance and a street entrance. Both are obvious, both have benches, and either would be a perfectly good place to meet. An hour later you are sitting in the garden and your friend is standing on the street, and neither phone has a signal inside the thick old walls.`,
          `Nobody did anything silly. Each of you chose a sensible exit. The trouble is that sensible on its own is not enough when the goal is to be in the same place; what matters is that the two choices match. This is a coordination problem. Success depends on compatible choices, not on either person finding the single best exit. Even agreeing earlier that the garden is lovely does not get you both onto the same bench at the same time.`,
        ],
      },
      {
        title: 'Check the same plan reached both people',
        paragraphs: [
          `A relay runner does not just stretch out an arm with the baton. They shout, the receiver looks back, and the exchange happens in a marked zone both have practised. Letting go of the baton before you know the other hand has closed on it is how relays get dropped. Handing a plan to someone works the same way: it is not delivered when you say it, it is delivered when they have it.`,
          `So before you separate, do the handover properly. Propose something exact: the bench just inside the street entrance, at three. Ask whether that spot works for your friend, since a bench up a flight of steps is not a meeting point for everyone. Write the place and time in a note you can both see. Then ask them to say it back. Sending a message proves the message left you; it does not prove it arrived or was understood. You do not need an endless loop of acknowledgements. One direct conversation and a matching written line settles it, and the time to settle it is now, while you can still hear each other, not later when the walls have eaten the signal.`,
        ],
      },
      {
        title: 'Agree on what happens when contact fails',
        paragraphs: [
          `The plan also needs a rule for when the plan breaks. In this fictional outing, you agree that if messages stop getting through, you both go to that same bench at three and wait, rather than each wandering to the exit you privately think the other would choose. And if the bench area is closed off, you both go to the staffed information desk. That fallback has to pass the same tests as the main plan: reachable by both of you, and said back by both of you.`,
          `Keep a sense of proportion. This is a tool for an ordinary afternoon, not a contract. It does not oblige anyone to sit somewhere they feel unsafe or to ignore a change in how they are feeling. If things change, say so when you can, and use the museum staff if you need them. The point of the whole exercise is small: replace two private guesses about what the other person will probably do with one piece of information both of you actually hold.`,
        ],
      },
      {
        title: 'Why people skip the handover',
        paragraphs: [
          `Saying meet you after feels like enough, because in your head the plan is complete and you forget the other person's head has a different plan in it. Obvious landmarks make it worse: each exit is so obviously the place to meet that nobody checks which obvious place they mean. The baton is dropped not through carelessness but through confidence that it was already caught.`,
          `Two habits. Before separating, name one exact place and one time, and have the other person say both back to you. And always add the if-phones-fail line while you can still talk, because the moment you need it is the moment you can no longer agree it.`,
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'A museum plan both people can repeat',
      alt: 'Two friends confirm the street-entrance bench at three and the information desk if the bench area is unavailable.',
      caption: `Read the friend's two lines first. Each one repeats the plan back: the bench, three o'clock, the same bench if phones fail, the desk if the bench is unavailable. That echo is the relay runner's hand closing on the baton. Then notice that the friend also confirms the spot works for them, which a preference for the garden never would have established. Fictional agreed plan.`,
      items: [
        { label: 'You', detail: 'Can we meet at the bench inside the street entrance at three?' },
        { label: 'Friend', detail: 'Yes, that location works for me. Same bench if phone reception fails.' },
        { label: 'You', detail: 'If that area is unavailable, use the staffed information desk instead?' },
        { label: 'Friend', detail: 'Agreed. I have the place, time, and fallback in our note.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper or a private draft note'],
      steps: [
        `Invent a museum with two entrances and write one exact meeting place and one time. Not by the exit; the bench inside the street entrance at three. Exactness is what stops two sensible people choosing two sensible places.`,
        `Add a question that checks the spot is reachable and acceptable for the other person. A meeting point only one of you can get to is not a meeting point.`,
        `Write the if-phones-fail rule, same bench at three, and one fallback if the bench area is closed, such as the information desk. Both must pass the same reachable-and-agreed test as the main plan.`,
        `Write the other person's confirmation as you would want to hear it, repeating place, time, and fallback. In a real outing you would get this from them, not write it for them; here you are practising what a closed hand on the baton sounds like.`,
      ],
      notice: `Your plan contains two matching actions and a shared rule for failure, rather than two private guesses about an obvious landmark. Either person could recite it without the other.`,
      troubleshooting: `If your plan says meet at the usual place, name the exact place; usual is where two people's memories quietly differ. If you have written the plan but not the confirmation, you have let go of the baton before the hand closed.`,
    },
    recall: {
      prompt: 'Two collaborators each edit a different copy of a poster because both assume theirs is the shared version. What agreement would help?',
      hint: 'Match the working location and confirm receipt of the choice.',
      answer: `This is the two-exits problem with files instead of benches. Each person chose a sensible copy, and the copies did not match. Fix it the same way. Agree on one named file in one named place, decide how updates will be made so that two people do not overwrite each other, and then confirm that both of you can actually open it, because a shared file one person cannot access is a bench up a flight of steps. Sending a link is letting go of the baton; the other person saying I have opened it and I am working in that one is the hand closing. Privately picking the copy that looks most recent is just choosing the garden again and hoping.`,
    },
    quiz: {
      question: 'You sent a meeting-point update but received no acknowledgment. What is the information gap?',
      options: [
        'The chosen meeting point must be objectively worse than the old one.',
        'You do not yet know whether the other person received and accepted the changed plan.',
        'The other person now knows the update because sending and receiving are equivalent.',
      ],
      correctIndex: 1,
      explanation: `Without an acknowledgement you know the message left you and nothing more; whether it arrived, was read, and was accepted is exactly the gap, and the baton is still in the air. Whether the new spot is better or worse than the old one is a separate question that has nothing to do with whether both of you now hold the same plan. Treating sending and receiving as the same thing is the assumption that drops relays.`,
    },
    takeaway: `Pass a plan like a relay baton, not by stretching out your arm but by feeling the other hand close: name one exact place and time, check it works for both of you, have it said back, and agree while you can still talk what you both do if phones fail or the spot is gone, because two sensible choices made privately are how two people end up at two different exits.`,
    sourceNote: 'Game theory frames coordination problems. The museum plan is an original everyday example, not a guarantee of contact or a formal common-knowledge protocol.',
  },
  {
    id: 'observer-023',
    title: 'Give no a workable branch',
    outcome: `Plan a favour so the effort is stated up front, an unsure answer has somewhere to go, and a no leads to a smaller plan of your own rather than pressure on the person who declined.`,
    scene: 'A club organizer asks for help carrying art-display boards and prepares a smaller display if help is unavailable.',
    sections: [
      {
        title: 'The event depends on a favor',
        paragraphs: [
          `You are organising the art club's stall at the community fair and you want a friend with a car to help carry the lightweight display boards. Your plan, written on a sticky note, says: ask Sam, carry boards, set up display. Three tidy steps. Read the middle one again. It assumes Sam said yes, and Sam has not yet been asked.`,
          `The note is hiding two things. First, a dependency: the whole stall now rests on an answer you do not have. Second, the size of the ask. You have not written down that there are eight boards, that they need a car with the seats down, or that the drop-off is at eight on a Saturday morning. Sam cannot agree to a workload nobody has described. A request is only voluntary if saying no is a real option, and it is only fair if the person knows what they are saying yes to. The stall is your problem to solve. It must not quietly become a puzzle about how to make Sam unable to refuse.`,
        ],
      },
      {
        title: 'Draw agreement, uncertainty, and refusal',
        paragraphs: [
          `A good restaurant booking has a plan for the table not being free. You phone, you ask for Saturday at seven, and if they are full you already know what you will do: try six, try Sunday, or cook at home. You do not phone back four times hoping the answer changes, and you do not tell the restaurant it has let you down. The booking is a request with branches, and the branches belong to you.`,
          `Sketch your request the same way, as a decision tree: a picture of the possible answers and what you will do after each one. Three branches. If Sam says yes, confirm the task as described and invite them to name any limits, such as not before nine. If Sam is unsure, agree a time by which they will let you know, chosen to suit them, and keep your fallback warm in the meantime. If Sam says no, you shrink the display to the boards you can carry yourself, or you ask someone else with the same honest description. Notice what the branches are called: yes, unsure, no. Not loyal, flaky, and unhelpful. They describe whether a person is free to do a task on a Saturday morning. They say nothing about the friendship.`,
        ],
      },
      {
        title: 'Test whether the fallback is real',
        paragraphs: [
          `Now check the no branch honestly. In the worked plan it reads: use the four boards that fit in a shopping trolley and set up a smaller display. That changes your event. It does not cost Sam anything, and that is the test. A fallback that quietly becomes guilt, a mention at the next meeting, or three follow-up messages is not a fallback. It is the yes branch wearing a disguise. The unsure branch has the same trap: agreeing a reply time is fine, but turning that into daily reminders until Sam gives in is pressure with a schedule.`,
          `Sometimes shrinking the task is not possible, and then the real fallback is postponing or doing without, which is still yours to own. Remember too that a yes today is not a yes forever; Sam's Saturday can change. Keeping your alternatives ready means that if they pull out on Friday night, you have a smaller stall rather than a grievance. The restaurant that gets fully booked is not betraying you, and a friend whose weekend fills up is not either.`,
        ],
      },
      {
        title: 'Why the no branch goes missing',
        paragraphs: [
          `When you really need the help, planning for refusal feels like planning to fail, so the sticky note skips straight from ask to carry. The result is that a no lands on you with nothing underneath it, and the only move left is to push. The push is never written in the plan. It just happens, because the plan left no other branch.`,
          `Two habits. Before asking anyone for a favour, write the effort in numbers, how many, how far, how long, and read it back as if you were the one being asked. And draw the no branch before you send the message, with an action under it that costs the other person nothing, because if you cannot write that action, you are not yet asking.`,
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'Three replies to the display request',
      alt: 'A clear request branches into yes with agreed limits, unsure with a reply time, and no with a smaller display.',
      caption: `Start at the first box and notice it is not the ask itself but the description of the ask: boards, travel, effort, timing. Then look at the three branches and check the labels, yes, unsure, no, and what sits under each. Every action under a branch is something the organiser does to their own plan. Nothing under no is aimed at the friend. Fictional planning tree.`,
      items: [
        { label: 'Describe the favor', detail: 'Boards, travel, effort, and timing before any commitment.' },
        { label: 'Yes', detail: 'Confirm the agreed task and limits; keep alternatives available.' },
        { label: 'Unsure', detail: 'Agree on a reply time; prepare the smaller display meanwhile.' },
        { label: 'No', detail: 'Use fewer boards or ask another willing helper.' },
      ],
      arrows: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        `Using the fictional display request, write what the helper would need to know before they could fairly say yes: how many boards, what vehicle, where, what time, how long. If any of those is missing, you have a hope, not a request.`,
        `Draw three branches labelled yes, unsure, and no. Under each, write one action that you take; the actions are about your plan, not about the friend.`,
        `Read the no branch as if you were the friend. Is there any guilt, hidden cost, or repeat ask hiding in it? If so, replace it with the smaller display you can manage alone or the next person you could ask with the same description.`,
        `Add one more line: what you do if a yes turns into a no on the Friday evening. Do not send a real request to anyone just to test the tree; the exercise is the drawing.`,
      ],
      notice: `Your plan still works, in a smaller form, if the other person declines, and the smaller form costs them nothing. The restaurant being full has a next step that is yours.`,
      troubleshooting: `If the no branch reads event impossible, your plan has no fallback yet; consider fewer boards, a later date, or a different willing arrangement before you ask. If the unsure branch has turned into a reminder schedule, cut it back to one agreed reply time.`,
    },
    recall: {
      prompt: 'You want a friend to review a long portfolio this weekend, but they are unsure. How would you preserve a genuine choice?',
      hint: 'Clarify the workload and prepare a plan that does not depend on wearing down uncertainty.',
      answer: `Start by stating the effort in numbers: forty pages, probably two hours, by Sunday evening. Then offer a smaller version they could choose instead, such as the first ten pages or just the opening statement, so that unsure has somewhere to go besides yes or no. If they want a deadline for deciding, agree one that suits them; if they do not, leave it. Meanwhile build your own fallback, reviewing it yourself with a checklist or asking a second person with the same honest description, so that their eventual answer changes your plan rather than your opinion of them. What you do not do is message again on Saturday morning and Saturday afternoon. A restaurant that says maybe gets one call back, not four.`,
    },
    quiz: {
      question: 'A volunteer declines a transport request. Which fallback preserves the voluntary nature of the request?',
      options: [
        'Ask again with the same workload because the event still needs help.',
        'Mark them as the helper for now and let them correct the plan later.',
        'Reduce the materials or seek another willing helper without penalizing the refusal.',
      ],
      correctIndex: 2,
      explanation: `Reducing the materials or asking someone else is the restaurant-is-full response: the next step belongs to you and costs the volunteer nothing, so their no stays a no. Asking again with the same workload treats refusal as a first offer in a negotiation, which is the yes branch in disguise. Marking them as the helper anyway shifts the work of refusing onto them a second time, and the plan now depends on someone who has already said they cannot.`,
    },
    takeaway: `Ask for a favour the way you book a restaurant: state exactly what you are asking for in numbers, have a branch ready for yes, for unsure, and for no, and make sure the action under no changes your plan rather than pressing on the person, because if you cannot write down what you will do when they decline, you are not yet asking, you are hoping with a deadline.`,
    sourceNote: 'Consent guidance and game-tree reasoning inform this ethical planning framework. The display example does not claim to predict or influence someone\'s emotions.',
  },
  {
    id: 'observer-024',
    title: 'Check whether both people can gain',
    outcome: `Before treating a shared task as a contest, write out what happens under every combination of choices, so you can see whether both people can come out ahead and which arrangements get the work done.`,
    scene: 'Two repair-club volunteers must cover a welcome desk and prepare tool trays.',
    sections: [
      {
        title: 'Winning the preferred job can lose the shared result',
        paragraphs: [
          `Two volunteers are opening the repair club on a Saturday morning. Two jobs need doing before the doors open: someone has to sit at the welcome desk to greet people and take names, and someone has to lay out the tool trays so each repair table has what it needs. Either volunteer could do either job. The welcome desk is by the door, in full view, and feels like the real face of the club. The trays are in the back room.`,
          `Both volunteers drift towards the desk. Each one is thinking, reasonably, that greeting people is useful and visible. At ten o'clock the first visitor arrives to a warm welcome from two people and a room full of empty tables. Both volunteers chose a useful job and the opening still failed, because they were quietly treating it as a contest for the better role when it was never a contest at all. Before you compete for the job that looks best, ask what result each of you wants and what each of you needs.`,
        ],
      },
      {
        title: 'Show every combination, not just your own choice',
        paragraphs: [
          `Two people carrying a sofa through a doorway are not competing. If both lift the front end, the back drags. If both lift the back, the front hits the frame. The sofa goes through when they take different ends, and it does not matter very much who takes which. Nobody wins the sofa. Either both of them get it through the door or neither does.`,
          `In game theory the value a person places on an outcome is called a payoff, and it is not usually money or points. Do not make up numbers for how much each volunteer values the desk; you have no idea, and the invented scores would just dress up a guess. Instead, since both volunteers have said they want the session ready on time, write the four combinations in plain words. Both at welcome: visitors greeted, tables bare. Both at trays: tables ready, nobody at the door. One at each, either way round: both jobs covered. A situation where one person's gain is exactly the other's loss is called zero-sum, and this one plainly is not. Two of the four cells are good for both people at once. The sofa goes through the door.`,
        ],
      },
      {
        title: 'Use the map to negotiate a workable division',
        paragraphs: [
          `The grid has told you which arrangements work. It has not told you which arrangement is right for these two people, and it cannot. One volunteer may need to sit down for the morning, which makes the desk the sensible job for them regardless of prestige. The other may never have laid out a tool tray and would need five minutes being shown. So ask. Who is comfortable with what? Who can reach the back room shelves? A good outcome here is one volunteer doing trays after a quick orientation while the other takes the seated welcome.`,
          `If it turns out that neither person can safely cover one of the jobs, the right move is to change the morning, perhaps opening fewer tables or asking a third person, not to force the grid to crown a winner. The map shows joint outcomes. The people still decide whether and how they take part, and the map is a reason to talk, not a substitute for talking.`,
        ],
      },
      {
        title: 'Why shared tasks turn into contests',
        paragraphs: [
          `The visible job attracts both people because visibility feels like contribution, and each person is only looking at their own square of the grid. Nobody draws the other three squares, so nobody notices that the two-at-the-desk square is a failure for both. Competing for the sofa's front end is natural when you have not pictured the sofa stuck in the door.`,
          `Two habits. When a shared task has roles to fill, write out every combination of who does what and say in words what gets done in each, before anyone picks. And then ask the people about comfort and access before assigning anything, because the grid can find the workable cells but only the volunteers can say which one they will actually do.`,
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Two volunteers, two roles',
      alt: 'Four combinations cross each volunteer\'s choice of welcome desk or tool trays.',
      caption: `Read the two corner cells first, both at welcome and both at trays, and notice that each leaves a job undone for everyone; those are the sofa with both people at one end. Then read the two middle cells: both jobs covered, either way round, which is what makes this not a contest. Every cell describes work completed, not anyone's worth, and the words subject to agreement and ability are the reminder that the grid does not pick for the people. Toy task outcomes.`,
      items: [
        { label: 'A welcome / B welcome', detail: 'Welcome covered; trays unprepared.' },
        { label: 'A welcome / B trays', detail: 'Both jobs covered, subject to agreement and ability.' },
        { label: 'A trays / B welcome', detail: 'Both jobs covered, subject to agreement and ability.' },
        { label: 'A trays / B trays', detail: 'Trays prepared; welcome uncovered.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        `Draw a two-by-two grid for two fictional volunteers, with welcome and trays as the choices along each side. Four cells, one for each combination of who does what.`,
        `In every cell write which jobs are covered and which are left undone, in plain words. Do not score anyone or guess what they value; the cells describe the state of the room at ten o'clock, not the people.`,
        `Circle the two cells where both jobs are covered. Beside them write one question you would ask about willingness and access before choosing between them; the grid has found the workable cells, and the people choose among them.`,
        `Write a fallback for the case where a job cannot be covered safely or voluntarily, such as opening with fewer tables. The grid is not allowed to force anyone into a cell.`,
      ],
      notice: `Your page keeps three things apart: whether the opening succeeds, who gets credit for which job, and whether a particular split is acceptable to the people doing it. Only the first is in the grid.`,
      troubleshooting: `If any cell says winner or loser, cross it out and write the concrete jobs done and not done; the sofa does not have a winner. If you have written numbers for how much each person values the desk, delete them, since you made them up.`,
    },
    recall: {
      prompt: 'Two friends preparing a film screening both start arranging chairs, leaving subtitles unchecked. How could this model help?',
      hint: 'Map the two jobs and ask which outcomes and roles both people accept.',
      answer: `Draw the grid: chairs and subtitles as the two jobs, four cells for who does what. The cell they are currently in, both on chairs, reads chairs arranged twice over, subtitles untested, and the screening may start with the wrong language on screen. The two split cells read both jobs done. That alone shows it was never a contest for the chair job; it was a sofa with two people on the same end. Then ask the questions the grid cannot answer. Who knows the subtitle menu on this projector? Who would rather be on their feet? One of them checks subtitles while the other finishes chairs, and nobody has lost anything, because the thing both of them wanted was a screening that works.`,
    },
    quiz: {
      question: 'Before treating two colleagues\' task choices as a competition, what should you establish?',
      options: [
        'Which outcomes they value and whether compatible choices could benefit both.',
        'Which person chooses first, so that choice can be treated as the winning one.',
        'Which role appears more prestigious, without asking either colleague.',
      ],
      correctIndex: 0,
      explanation: `Finding out what outcomes they value and drawing the combinations tells you whether this is a sofa, where both can gain, or a genuine contest, and that structure decides which model fits. Treating whoever chooses first as the winner assumes a contest before checking, and in the repair club it would hand the desk to the quicker volunteer and leave the trays empty. Ranking the roles by guessed prestige invents payoffs nobody stated and ignores that one person may need the seated job for reasons that have nothing to do with status.`,
    },
    takeaway: `Before competing for the better job, draw the sofa: write out every combination of who does what and what gets done in each, notice the cells where both people come out ahead, and then ask the people about comfort and access rather than assigning, because a shared task is only a contest if you have failed to picture the sofa stuck in the door.`,
    sourceNote: 'The game-theory reference explains strategic outcomes. This simplified role grid is a discussion aid, not a measurement of anyone\'s real preferences.',
  },
  {
    id: 'observer-025',
    title: 'Remembering a fact is not remembering its source',
    outcome: `When a detail comes to mind, ask separately where you learned it, label the origin honestly even if the answer is unsure, and check the current source before you pass the detail on as fact.`,
    scene: 'A neighborhood gardening talk is remembered as starting at six, but the current notice says half past six.',
    sections: [
      {
        title: 'Six sounds familiar',
        paragraphs: [
          `A neighbour stops you on the stairs and asks what time the gardening talk starts on Thursday. Six, you say, straight away. The number arrives with a feeling of certainty and a picture of a green poster. But as you say it, you notice other things floating alongside: a friend mentioning the talk last week, and the fact that you went to a similar one last spring, which may well have started at six.`,
          `The time feels familiar. Where the familiarity came from is a blur. If you tell your neighbour the poster says six, you have just made a claim about a source. You cannot actually stand behind it. There are two separate questions in play here. What detail do you remember? Six. Where did that detail come from? You do not know. Being sure of the first does not make you sure of the second. The second is what decides whether your neighbour should trust the six.`,
        ],
      },
      {
        title: 'Give the origin an honest label',
        paragraphs: [
          `A tin in the cupboard with the label torn off still has beans in it. You know what is inside. You just do not know which shop it came from or when you bought it. For eating the beans tonight, that is fine. For deciding whether the tin is within date, it is not. The honest thing is to say I have beans but I do not know how old they are. Guessing a shop and a date so the tin looks properly labelled is not honest.`,
          `Psychologists call the job of working out where a memory came from source monitoring. A detail may have been seen on a poster, heard from a friend, worked out from what usually happens, or picked up at an earlier version of the same event. You can hold the content clearly while having lost or muddled its origin. The muddle does not announce itself; a remembered six from last year feels exactly like a remembered six from this year's poster. So write what is actually true: remembered time, six; source uncertain. That is more useful than forcing yourself to pick poster or friend. It keeps both the detail and the gap in view. Even a confident source label can be wrong. That is why, when someone's evening depends on it, a dated external record beats your sense of where you read it.`,
        ],
      },
      {
        title: 'Check the event, date, and version',
        paragraphs: [
          `You find the current public notice and match it carefully: same talk title, same venue, this Thursday's date. It says half past six. Now you can message your neighbour with something you can stand behind: the current notice lists half past six, with a link or the date you checked. The six in your head has been overtaken by a labelled tin.`,
          `Resist one more temptation. You have not discovered where the six came from. Last year's talk is a plausible explanation, and it stays a possibility, not a recovered fact. And notice what would have happened if you had found an old poster saying six in a drawer. Its wording would be perfectly clear and perfectly irrelevant. It answers a question about a different Thursday. Verifying means checking that a source applies to this event, now. It does not mean finding something that looks like what you remember.`,
        ],
      },
      {
        title: 'Why familiarity impersonates a source',
        paragraphs: [
          `Content comes back fast and with feeling; origin comes back slowly, if at all. So the mind fills the origin slot with whatever is handiest, usually the most official-sounding candidate, the poster. The filled-in label feels as solid as the fact. The neighbour hears the poster says six and arrives half an hour early to an empty hall. They trusted a label you tore off and rewrote without noticing.`,
          `Two habits. Whenever a detail you are about to share came to you instantly, ask yourself where you learned it. If the answer is a shrug, say source uncertain out loud rather than naming the likeliest source. And before passing on anything with a time, a price, or a date in it, match the current notice on title, place, and date. A clear old source is just a torn label with confident handwriting.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'A familiar time and a checked notice',
      alt: 'The remembered time is six with uncertain origin; the matching current gardening-talk notice says half past six.',
      caption: `Read the left box as the tin with the torn label: the content is clear, six, and the detail text lists three possible shops it might have come from with no way to choose. Read the right box as the labelled tin: half past six, with the three things that were matched, title, venue, and date. Checking the right box does not tell you which shop the left box came from. Fictional event.`,
      items: [
        { label: 'Remembered: six', detail: 'Poster, friend, or earlier talk? Source uncertain.' },
        { label: 'Checked: half past six', detail: 'Current notice; title, venue, and date matched.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen', 'An optional current public event notice'],
      steps: [
        `Use the fictional gardening talk, or pick one real, non-private event detail you are about to tell someone, such as a start time or a price. Choose something where being wrong would cost the other person a little.`,
        `Write the detail on one line and, on the next, label where it came from: seen, heard, inferred, or source uncertain. Be honest about the shrug; source uncertain is a real answer and the most common one.`,
        `For the fictional case, use the current-notice result from the lesson. For a real case, find the current listing and match it on title, place, and date before you look at the detail, so you are not accepting a clear answer to the wrong event.`,
        `Draft the message you would actually send. It should name the checked source and should not claim to know where the earlier memory originated. The notice says half past six is fine; I always knew it was half past six is not.`,
      ],
      notice: `Your message tells the reader two different things and keeps them apart: what you remembered, with its uncertain origin, and what the current record says, with how you matched it.`,
      troubleshooting: `If you cannot reach a current source, keep the uncertainty in the message, I think six but I have not checked, rather than filling it with the likeliest source. If you catch yourself writing the poster says, stop and ask whether you have seen the poster this year.`,
    },
    recall: {
      prompt: 'You remember that a drawing workshop includes materials, but cannot recall whether you read it or assumed it from the price. What should you say?',
      hint: 'The origin matters before someone relies on the claim.',
      answer: `Say exactly what is true about the tin: I have it in my head that materials are included, but I am not sure whether I read that or worked it out from the price, so I have not verified it. Then do the check that applies to this workshop, now: open the current listing and look for the word materials, or ask the organiser. If the listing says it, you can pass it on as the listing states materials are included. If it does not, your assumption from the price stays an assumption. What you must not do is tell a friend to turn up without paper and pencils on the strength of a detail whose origin you cannot name, because a friend who arrives empty-handed to a workshop with no materials has paid for your torn label.`,
    },
    quiz: {
      question: 'A familiar return-policy detail might come from an old purchase. Which statement is accurate before checking?',
      options: [
        'The current shop policy includes it because the detail is easy to recall.',
        'I read it on the latest receipt, although I cannot remember doing so.',
        'I remember the detail, but its source and current applicability need checking.',
      ],
      correctIndex: 2,
      explanation: `Saying you remember the detail but its source and whether it still applies need checking keeps the content and the torn label separate and promises nothing you cannot back up. Saying the current policy includes it because it is easy to recall treats familiarity as proof, when an old purchase would feel exactly as familiar as a current one. Saying you read it on the latest receipt while admitting you cannot remember doing so is writing a shop name on the tin because it sounds official.`,
    },
    takeaway: `Treat a remembered detail like a tin with the label torn off: you may know exactly what is inside while having no idea where it came from, so say source uncertain rather than naming the likeliest source, and before anyone relies on the detail, match a current record on title, place, and date, because an old poster can be perfectly clear and still answer the wrong Thursday.`,
    sourceNote: 'OpenStax and Noba describe reconstructive memory and source errors. The gardening-talk example is original and does not imply that source labels are infallible.',
  },
  {
    id: 'observer-026',
    title: 'A picture in your mind can remain a search guess',
    outcome: `Use a place you have pictured as somewhere worth looking, without letting the picture turn into a memory of having put the thing there just because you have imagined it a few times.`,
    scene: 'A missing library book is imagined on a kitchen chair but later found in a tote bag.',
    sections: [
      {
        title: 'The chair starts to feel familiar',
        paragraphs: [
          `Your library book is due back tomorrow and you cannot find it. Standing in the kitchen, you try to think. You picture yourself coming in with the shopping, dropping the bags, and putting the book down on the kitchen chair to free a hand. It is a reasonable picture. You go back to it a few times while you look around, and each time it gets a little clearer: the chair, the book, the angle it was lying at.`,
          `By the fourth time, the chair feels like the answer. Notice what has actually happened. The picture started as a guess about what you might have done. Returning to it made it more familiar, and familiarity feels like memory, but nothing has been added except repetition. You have not seen the book on the chair. You can still go and look at the chair, and you should; it is a sensible place. What you do not need to do is believe the scene happened in order to check it, and the difference will matter when someone asks later where you last saw the book.`,
        ],
      },
      {
        title: 'Familiarity does not carry an origin label',
        paragraphs: [
          `A film set is built from real materials. The bricks are real, the door opens, the kettle boils. You can walk through it and touch everything, and none of that makes the house real. The realness of the pieces says nothing about whether anyone ever lived there. The sense of solidity comes from the materials, not from the history.`,
          `An imagined scene is a film set built from genuine parts. Your kitchen is real, the shopping was real, the chair is where it always is. Those real pieces give the scene its solidity. The one piece that matters, putting the book down, was supplied by you, and it borrowed the realness of everything around it. How vividly you can picture a scene tells you how good the set is. It does not tell you whether the event happened. Memory routinely blends things actually remembered with things expected and things suggested afterwards, and the blend does not come labelled. So label it yourself. Write imagined possibility beside the chair image, and keep remembered context, such as carrying the tote home, on a separate line. This is not a rule that vivid memories are false. It is a rule that in this search, vividness alone cannot tell a real memory from a well-built set.`,
        ],
      },
      {
        title: 'Let the search result stay in the present',
        paragraphs: [
          `In the fictional version, you check the chair and it is empty. You check the tote and the book is inside, under a receipt. Write: found in tote, now. That sentence is exactly as big as what you know. It does not say the book was never on the chair; it may have been, earlier, before you moved it without thinking. It does not say who moved it or in what order things happened. You have solved the problem without writing a history for it.`,
          `Two further cautions. Do not try to recover the hidden sequence by picturing the scene harder; more rehearsal builds a better set and finds no more books. And keep this to umbrellas and library books. The habit of labelling imagined scenes is for ordinary misplaced objects, not for difficult personal memories, which need different care. If a search is unnecessary or starts to feel uncomfortable, stop at the paper exercise, where the only thing you need to do is separate the labels.`,
        ],
      },
      {
        title: 'Why the set becomes the memory',
        paragraphs: [
          `Each time you revisit the chair image, it comes back more easily, and ease of recall is one of the main signals the mind uses to decide something really happened. So the guess earns a memory's credentials simply by being rehearsed. Later you say I definitely left it on the chair, and when it turns up in the tote you are puzzled, because the set was so convincing.`,
          `Two habits. When a location comes to mind during a search, write it down as a possibility and go and check it, rather than replaying the scene to decide whether it is true. And when you find the thing, record where it is now and stop, because the present location is the only fact the search has actually produced.`,
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'A search possibility is checked, not promoted',
      alt: 'An imagined chair location leads to a search; the book is found in a tote, without proving its earlier route.',
      caption: `Read the first box's label before anything else: imagined possibility. That label is attached before the chair is checked and it never changes, however empty or full the chair turns out to be. Then follow the boxes to the tote and notice the last one: the book's earlier route stays open. The set was useful for deciding where to look; it did not become a record of what happened. Fictional sequence.`,
      items: [
        { label: 'Chair image appears', detail: 'Label: imagined possibility, not verified recollection.' },
        { label: 'Check the chair', detail: 'It is empty in this example.' },
        { label: 'Check the tote', detail: 'The book is found here now.' },
        { label: 'Keep the history open', detail: 'Earlier placement and movement remain unestablished.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        `Copy three fictional statements onto separate lines: carried a tote home; imagined the book on a chair; found it in the tote. Three sentences that feel similar and are three different kinds of thing.`,
        `Label them: remembered context, imagined possibility, current checked result. The middle one is the film set, built from real parts around one supplied action.`,
        `Write a short search plan that uses the chair guess, check chair first, then tote, without ever describing the chair placement as something that happened. A possibility can direct a search without being promoted.`,
        `Add one sentence about the book's earlier history that finding it in the tote does not prove, for example that it was never on the chair. Do the exercise once; do not re-imagine the scene repeatedly to test how real it feels.`,
      ],
      notice: `You used a guess to decide where to look, found the book, and the guess is still labelled a guess on your page. The set did its job and never got mistaken for the house.`,
      troubleshooting: `If a sentence on your page says I must have, replace it with I may have, or with the smaller checked fact, found in tote. If you notice yourself replaying the chair scene to see whether it feels true, stop; the feeling is measuring the set, not the past.`,
    },
    recall: {
      prompt: 'You picture putting a spare battery in a camera pouch after someone suggests that location. How should you use the image?',
      hint: 'The suggestion supplies a search candidate, not an observation of the past.',
      answer: `Treat the image as a search candidate with a known origin: someone said pouch, and your mind built a set around the word. Label it suggested possibility, and if the pouch is yours and safe to open, go and check it, because a suggestion is a perfectly good reason to look somewhere. If the battery is there, write found in pouch, now. That establishes where it is and nothing about the moment you imagined; you may have put it there last week, or someone else may have. If the pouch is empty, cross the candidate off and move to the next sensible place rather than picturing the pouch scene more vividly. A picture that arrived because of a word someone said is a set built to order, and the realness of the pouch does not make the placing real.`,
    },
    quiz: {
      question: 'A guessed location becomes easier to picture after repetition. What has that repetition established?',
      options: [
        'The object was placed there, even if it has since moved.',
        'The image feels more familiar; the placement still needs evidence.',
        'The guess is now independent confirmation of the original possibility.',
      ],
      correctIndex: 1,
      explanation: `Repetition makes the image come back more easily, so it feels more familiar, and that is all it has done; the placement is exactly as unverified as it was the first time. Saying the object was placed there promotes a well-rehearsed set to an event on the strength of its own clarity. Calling the repeated guess independent confirmation mistakes the same guess, replayed, for a second source, when it is one picture viewed four times.`,
    },
    takeaway: `An imagined location is a film set built from real parts: use it to decide where to look, label it imagined possibility before you check, and when you find the object write only where it is now, because every replay makes the set more convincing and adds nothing to the history, and the solidity of your kitchen never proved that you put the book on the chair.`,
    sourceNote: 'Noba and OpenStax discuss reconstruction, suggestion, and false memories. This object-search example is not a procedure for recovering personal memories.',
  },
  {
    id: 'observer-027',
    title: 'Keep the uncertainty you had before feedback',
    outcome: `Write down what you remember and how sure you are before anyone agrees or disagrees with you, then add their feedback and any later check as separate lines instead of rewriting your first answer.`,
    scene: 'A picnic tablecloth is tentatively remembered as blue before a friend agrees and a photograph shows green.',
    sections: [
      {
        title: 'Agreement changes how the memory feels',
        paragraphs: [
          `A few days after a picnic, someone asks what colour the tablecloth was. Blue, you think, though you are not really sure; it might have been green. You say blue with a question mark in your voice. The friend who was there says yes, blue, I think so too. A week later you are telling the story and you say it was the blue cloth, flat and certain, and the question mark is gone.`,
          `The detail in your account has not changed. Your confidence has, and it changed because of something that happened after the memory, not because of anything you saw at the picnic. If your note now reads certain it was blue and the earlier hesitation has been erased, nobody reading it can tell that a friend's agreement arrived in between. Confidence is how sure you feel or say you are. It is not a second look at the cloth, and it should not be written up as if it were.`,
        ],
      },
      {
        title: 'Write the first state before checking',
        paragraphs: [
          `In a pub quiz, you write your answer down before the quizmaster reads the right one. That is the whole point of the pencil and the answer sheet. If you only decided your answer after hearing the correct one, you would find that you knew it all along, every single time. The sheet exists to catch what you actually thought before the room told you.`,
          `Memory research has shown that confirming feedback can push reported confidence up, so give your recollection a quiz sheet. For a harmless recall task, write the detail and your uncertainty down before you look at a photo or hear anyone else's version. In this fictional record, the first line reads: perhaps blue, unsure. Then the second: friend agreed after hearing my answer; I now feel more certain. The phrase after hearing my answer matters. Your friend may have been remembering the cloth, or may have been agreeing with you. Because you spoke first, there is no way to tell. One more thing the sheet protects you from. Being unsure at the start does not make the memory wrong, and feeling certain later does not make it right. Both are feelings about the answer, and the answer sheet records them as such.`,
        ],
      },
      {
        title: 'Attach the check instead of rewriting the beginning',
        paragraphs: [
          `Now suppose someone finds a photo from the picnic, taken in good light, and the tablecloth is clearly green. Add a third line: photo checked, green. Correct the practical description so that anyone who needs to know the colour gets green. But leave the first two lines where they are. The sheet now reads: unsure blue, then more confident blue after agreement, then green from the photo. That is the honest history of what you knew and when.`,
          `The photo does not have to explain why blue came to mind; that stays a mystery and it is fine for it to. And be fair to the photo too. If it had been taken at dusk, or the cloth were half in shadow, it could not settle the colour so neatly. Checking a record includes checking whether the record can actually answer the question. The purpose of all this is to preserve what information you had at each stage. It is not to set up a test that makes your friend doubt their own memory.`,
        ],
      },
      {
        title: 'Why the question mark disappears',
        paragraphs: [
          `A hesitant answer is slightly uncomfortable to hold, and agreement relieves the discomfort instantly, so the memory gets retold without the hedge and the hedge is soon forgotten. The retold version feels like a clear recollection because it has been said clearly several times. Nothing about the picnic has changed; only the number of times you have heard yourself say blue.`,
          `Two habits. Before you check anything or ask anyone, write the detail and your confidence down, even if only in a sentence to yourself. And when feedback or a check arrives, add it as a new line with its timing, so the first line survives and the sheet tells the truth about the order things happened in.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Confidence changes before the color is checked',
      alt: 'An unsure blue recollection becomes more confident after agreement, then a clear photo supplies a green correction.',
      caption: `Read the first box as the pub quiz sheet filled in before the answers were read: perhaps blue, unsure. Then notice that the second box changes only the confidence, not the colour, and that it happened after the first answer was spoken. The third box is a different kind of information altogether, a check against a record. The fourth keeps all three visible. Fictional events in order, not to scale.`,
      items: [
        { label: 'Initial recall', detail: 'Perhaps blue; unsure.' },
        { label: 'After friend agrees', detail: 'Feels more certain; agreement followed the first answer.' },
        { label: 'Photo checked', detail: 'In this example, a clear authorized image shows green.' },
        { label: 'Final record', detail: 'Correct the color; preserve the initial uncertainty and feedback order.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Three familiar objects of your own', 'Paper', 'Pen'],
      steps: [
        `Put three of your own objects in a row on a table and look at the order for a few seconds. Use your own things and photograph nothing; the exercise needs no one else's property or image.`,
        `Turn away and write the order down, marking any position you are unsure of with a question mark. This is the quiz sheet, filled in before the answers are read.`,
        `Turn back and compare with the unchanged row. Write any corrections on a new line below, and leave the first line exactly as it was, question marks included.`,
        `Label which statements were written before you looked again and which came from looking. Do not ask anyone to give you deliberately misleading feedback; the point is to protect your first answer, not to trick yourself.`,
      ],
      notice: `Your first answer is still on the page, with its original uncertainty, even though checking changed what you now believe. Anyone reading the sheet can see what you knew before you looked.`,
      troubleshooting: `If you looked back before writing anything, do not reconstruct how sure you felt; write first confidence not recorded and start again with a new row. If you find you have crossed out the first line so hard it cannot be read, that is the question mark disappearing; rewrite it faintly beside the correction.`,
    },
    recall: {
      prompt: 'You tentatively remember a song opening with drums. After reading a review, you sound certain. What should a useful note preserve?',
      hint: 'The review arrived between the first recollection and later confidence.',
      answer: `Three lines, in order. First, the quiz sheet: I think it opens with drums, not sure. Second, the feedback with its timing: read a review that mentioned the drum intro; now feel certain. Third, if you want to know, the check: played the opening, and whatever it turns out to be. The thing to protect is the first line and the order, because a note that only says definitely opens with drums hides that your certainty came from a reviewer and not from the song. If the recording later shows a guitar first, the three-line version tells you something useful about how reviews shape your memory. The one-line version just leaves you puzzled about how you could have been so sure.`,
    },
    quiz: {
      question: 'Which note best preserves a recollection changed by agreement?',
      options: [
        'Initially unsure of blue; felt more certain after a friend agreed with my account.',
        'Definitely blue, because the uncertainty no longer feels important.',
        'Blue independently confirmed, although the friend only responded after hearing my answer.',
      ],
      correctIndex: 0,
      explanation: `Initially unsure of blue, then more certain after a friend agreed with my account, keeps the quiz sheet intact and records both the confidence change and what caused it, in order. Definitely blue erases the hesitation because it has stopped feeling important, which is exactly the forgetting the sheet exists to prevent. Calling it independently confirmed contradicts itself in the same sentence: a friend who answered after hearing your answer may simply have agreed with you, and that is not an independent check.`,
    },
    takeaway: `Treat your memory like a pub quiz answer sheet: write the detail and your confidence down before anyone agrees or any photo appears, then add feedback and checks as new lines with their timing, because agreement only tells you how the memory feels now, and a sheet that has lost its first line can no longer tell you what you actually knew.`,
    sourceNote: 'Memory references discuss feedback and confidence effects. The picnic is fictional; the practice preserves records without claiming confidence never relates to accuracy.',
  },
  {
    id: 'observer-028',
    title: 'Recall separately before comparing accounts',
    outcome: `When several people reconstruct something they saw, get each willing person to write a short note before anyone talks, so you can later tell what was remembered from what was picked up in talk.`,
    scene: 'Two friends remember different details of a pottery demonstration before discussing the tools.',
    sections: [
      {
        title: 'The same word appears after discussion',
        paragraphs: [
          `Two friends go to a pottery demonstration. Afterwards, one of them clearly remembers a wooden shaping tool, a flat paddle the potter used on the side of the bowl. The other remembers a metal loop for trimming the base and is honestly hazy about what else was on the bench. Over coffee, the first friend describes the wooden paddle in loving detail: its shape, how it was held, the sound it made. A week later, asked about the demonstration, both of them mention the wooden tool.`,
          `Two people agreeing is not nothing. But think about what could produce that agreement. Both might have noticed the paddle on the day. Or one noticed it and the other absorbed it over coffee. Or some mixture, with the hazy friend having half-seen something that the description then sharpened into a paddle. Counting two matching accounts a week later cannot tell these apart. Nobody is lying or even careless. A conversation simply changes what information is in the room when people next try to remember.`,
        ],
      },
      {
        title: 'Preserve the accounts before they mix',
        paragraphs: [
          `When a teacher wants to know what each child actually learned, they do not ask the class to shout out answers together. They hand out sheets and the children write quietly. The shouting version always produces agreement, because the first confident voice becomes everyone's answer. The sheets produce something far more useful: twenty separate records of what each child had in their head before hearing anyone else.`,
          `Psychologists call the way one person's account seeps into another's memory conformity. The protection is the teacher's method. For a low-stakes reconstruction, ask the people who were there, if they are willing, to jot down a few lines each before any comparing begins. Leave gaps where they are unsure, and let anyone decline to share a detail. Independence here means something specific: that when each note was written, the writer had not yet heard the others. It does not mean the notes are accurate. Both friends could have missed the same tool. Both could have expected a paddle because potters usually have one. What the separate notes protect is provenance, the record of where each detail entered the account. That is a thing no amount of later discussion can recover once it is lost.`,
        ],
      },
      {
        title: 'Label additions instead of voting memories true',
        paragraphs: [
          `In the fictional example, note A says: wooden shaping tool. Note B says: metal loop; other tools uncertain. Then they talk. Afterwards B can add a line: learned from A, wooden tool. That is honest and useful. It is much better than B quietly rewriting the original note so that it now says wooden tool and metal loop as if both had been remembered on the day. The sheet was handed in; you do not get to alter it after the answers were read out.`,
          `If there is a public guide to the demonstration listing the tools, check whether it describes this actual session or just the standard kit any potter brings; a standard kit tells you what was probably there, not what was. Without a suitable record, the wooden tool stays labelled as B's second-hand detail, and that is a fine place for it to stay. Keep the whole method in proportion. It is for two friends reconstructing a pleasant afternoon, not for amateur investigation, not for ranking anyone's memory, and never for treating disagreement as a sign that someone is unreliable or not telling the truth.`,
        ],
      },
      {
        title: 'Why agreement feels like confirmation',
        paragraphs: [
          `Two voices saying the same thing sounds like two witnesses, and the mind counts it that way, forgetting that one voice may have taught the other. The hazy friend is not even aware of it; the paddle now feels like their own memory, because the description was vivid and the coffee was a week ago. By the time anyone asks, there is no trace of which friend brought the paddle to the table.`,
          `Two habits. Before comparing memories of anything you care about getting right, get each willing person to write a few lines first, gaps and all. And when a detail moves from one account into another during the conversation, write it into the second account with its source, learned from A, rather than letting it settle in as if it had always been there.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'When the wooden-tool detail entered each account',
      alt: 'Before discussion, A recalls a wooden tool while B recalls a metal loop; after discussion B attributes the wooden detail to A.',
      caption: `Read the first two boxes as two separate sheets handed in before anyone spoke; notice they are different people, not one person at two times. Then find the discussion box, which is where the paddle travels from A to B. The last box shows B's account afterwards with the detail labelled by its source, learned from A, rather than silently merged into B's own recall. Fictional accounts.`,
      items: [
        { label: 'Before discussion: A', detail: 'Wooden shaping tool; other details not recorded.' },
        { label: 'Before discussion: B', detail: 'Metal loop; other tools uncertain.' },
        { label: 'Discussion', detail: 'A describes the wooden tool to B.' },
        { label: 'After discussion: B', detail: 'Add wooden tool as learned from A, not as earlier independent recall.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        `Copy the fictional A and B notes onto different parts of a page, keeping B's other tools uncertain exactly as written. The gap is part of the record, not a flaw in it.`,
        `Draw a horizontal line across the page and label it discussion begins. Everything above the line is a sheet handed in before anyone spoke.`,
        `Below the line, write B's updated account and add the wooden tool with its source: learned from A. The source label is the only thing that makes the addition honest.`,
        `Write one sentence about what the two matching accounts a week later do not establish, for example that both friends saw the paddle. Leave the original notes above the line untouched.`,
      ],
      notice: `Anyone reading your page can tell which detail each friend recalled on their own and which one travelled across the coffee table, because the line and the label kept the provenance.`,
      troubleshooting: `If B's final account has lost its uncertainty and now lists every tool confidently, the gaps have been filled by the conversation; restore them and label what was added. If you find yourself deciding which friend has the better memory, stop, because the method does not rank people and was never meant to.`,
    },
    recall: {
      prompt: 'Three friends discuss a short film, then all remember an opening train sound. How could separate notes have helped?',
      hint: 'Agreement after discussion is not necessarily three independent recollections.',
      answer: `Three sheets written before the conversation would show how many of the three actually had the train sound in their heads before anyone said the word train. Perhaps all three did, in which case the agreement is as strong as it looks. Perhaps one did and mentioned it, and the other two now sincerely remember it, in which case the agreement is one recollection and two echoes. Without the sheets, the three matching accounts are indistinguishable from each other, and the only honest label for the train sound is discussed, origin unclear. With the sheets, you could write who recalled it independently, label the rest as learned in discussion, and if the film is available, simply watch the first ten seconds.`,
    },
    quiz: {
      question: 'Why ask willing participants for separate short notes before comparing an ordinary event?',
      options: [
        'To guarantee that each note contains an accurate independent account.',
        'To preserve what each person reported before hearing the others.',
        'To make a majority vote a reliable substitute for checking the event.',
      ],
      correctIndex: 1,
      explanation: `The notes preserve what each person had in their head before hearing the others, which is the teacher's quiet sheets rather than the shouted answers; that record of provenance is the only thing the method promises. It cannot guarantee accuracy, since everyone can miss or misremember the same thing on their own. And a majority among the notes is still not a check against the event; three people writing wooden paddle independently is good evidence, but it is not the same as a photo of the bench.`,
    },
    takeaway: `When several people are reconstructing an event, hand out quiet sheets before anyone shouts an answer: get each willing person to write a few lines first, gaps included, draw a line where the discussion starts, and label anything that crosses that line with where it came from, because once a detail has travelled from one memory into another there is no way to send it back.`,
    sourceNote: 'Noba reviews social influences on memory. The pottery accounts are invented; separate notes preserve provenance but cannot certify an account as accurate.',
  },
  {
    id: 'observer-029',
    title: 'Let context suggest a place to check',
    outcome: `Use the parts of a routine you genuinely remember to decide where to look for a lost object, and treat any new scene the search prompts as a candidate to check, not a memory that confirms itself.`,
    scene: 'A compact umbrella is missing after a grocery trip that involved a tote and a hallway shelf.',
    sections: [
      {
        title: 'Retrace the task, not an invented movie',
        paragraphs: [
          `It is raining and your compact umbrella is nowhere. The last time you had it was on yesterday's grocery run. Some of that trip you remember clearly. You carried the big canvas tote. When you got in, you stopped at the hallway shelf to put the shopping down before taking your shoes off. What you do not remember is doing anything with the umbrella. There is no scene of putting it anywhere.`,
          `There are two ways to go from here. One is to build the missing scene. Picture yourself at the shelf, imagine the umbrella in your hand, run the film until it feels right. The other is to ask which places the parts you actually remember point to. The tote and the shelf are worth checking because they were part of the real trip. They are not worth checking because an imagined version of the trip shows the umbrella sitting on them. That distinction sounds fussy. It stops sounding fussy when you later tell someone, with confidence, that you definitely left it on the shelf.`,
        ],
      },
      {
        title: 'A cue prompts recall without certifying it',
        paragraphs: [
          `Walking back into a room you left a minute ago, you suddenly remember why you came. The bin bag by the door reminds you it was bin night. The room did not tell you anything true or false. It handed you a thread, and the thread happened to lead somewhere real. Rooms are good at handing over threads. They are no good at all at telling you whether the thread is sound. A familiar room can just as easily hand you a plausible invention.`,
          `Psychologists call anything that helps bring information to mind a retrieval cue. A room, a task, an object you were holding: each can serve as a cue because it was tied to the activity you are trying to recall. Returning your attention to the grocery trip may well surface a detail or suggest a next place to search. What it cannot do is stamp the surfaced detail as accurate. So keep three labels on the page and refuse to let them merge. Remembered context: the things you recalled before you started retracing, the tote and the shelf. Possible location: the places those things point to, like the tote's side pocket. Checked result: what you actually found when you looked. The labels let you use the thread without mistaking it for the thing at the end of it.`,
        ],
      },
      {
        title: 'Use one cue, then make a concrete check',
        paragraphs: [
          `In the fictional version, thinking about the tote reminds you that it has a side pocket. That is a place a compact umbrella could sit unnoticed. You check. The umbrella is there. Write: found in tote side pocket, now. That sentence solves the practical problem completely. It does not tell you when you put it there. It does not rule out the umbrella having spent an hour on the shelf first. You have the present location and nothing about the route.`,
          `If the pocket had been empty, the honest move is to write pocket empty and go to the next sensible, safe place that the remembered context points to. Do not close your eyes and run the hallway scene again with more detail. More detail in an imagined scene is more invention, not more evidence. And keep this method for umbrellas. Appointment times and instructions should be checked against a current record, not reconstructed from a familiar room. Difficult personal memories are not something to retrace with a technique designed for lost objects.`,
        ],
      },
      {
        title: 'Why the prompted scene feels like a memory',
        paragraphs: [
          `When a cue produces an image, the image arrives with the same ease as a real recollection, because both come from the same machinery. The hallway is real, the shelf is real, and an imagined umbrella placed on it borrows their realness. The more you revisit the picture to see whether it is right, the more familiar it gets. Familiarity is exactly the feeling the mind uses to judge that something happened.`,
          `Two habits. When a lost-object search prompts a new scene, write it under possible location, not under remembered context, and go and look. And when you find the thing, record where it is now and resist filling in how it got there. The search has told you one fact; the rest would be yours.`,
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'From grocery context to an umbrella check',
      alt: 'Remembered tote use suggests its side pocket, where the umbrella is checked and found now.',
      caption: `Read the first box as the thread the room handed you: two things you genuinely recall. The second box is where the thread points, labelled candidate, not placement. The third box is the only action in the chain. The last box records the present location and says, in so many words, that the earlier route is unknown. Fictional search; inspection, not the cue, established the result.`,
      items: [
        { label: 'Remembered context', detail: 'Carried a tote; stopped at the hallway shelf.' },
        { label: 'Candidate location', detail: 'The tote side pocket could hold the umbrella.' },
        { label: 'Inspect the pocket', detail: 'Check your own bag safely.' },
        { label: 'Current result', detail: 'Umbrella found; exact earlier placement remains unknown.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        `Using the fictional umbrella story, write down only the two details that were genuinely remembered: carried the tote, stopped at the hallway shelf. Nothing about the umbrella goes on this line, because nothing about the umbrella was remembered.`,
        `Underneath, list the tote pocket and the hallway shelf as possible locations. Label them as candidates the context points to, not as places the umbrella was put.`,
        `Add the result the story supplies, umbrella found in tote pocket, and label it a current check. It is a fact about now.`,
        `Write one sentence describing what the tote cue did for you, suggested a pocket to look in, without saying it proved anything about yesterday. The thread led somewhere; it did not testify.`,
      ],
      notice: `Your page runs from known context, to candidate, to check, and at no point does a candidate get promoted to a memory or a found object get given a history.`,
      troubleshooting: `If retracing the trip produces a vivid new scene of putting the umbrella down, write its additions under possible location and mark them tentative; do not slide them up into the remembered context line. If you are tempted to rerun the scene for clarity, go and check a pocket instead.`,
    },
    recall: {
      prompt: 'Returning to your drawing desk reminds you of a possible place for a missing eraser. What should happen next?',
      hint: 'The room supplied a cue, not a verified history.',
      answer: `The desk has handed you a thread, the way a room reminds you it was bin night. Follow it: if the suggested place is yours and safe to look in, check it now. Write what you find as a present fact, eraser in the pencil tin or tin empty, and keep the image the desk prompted labelled as a possibility whatever the outcome. If the eraser is there, you know where it is; you do not know when it went in or whether the picture you had of putting it there was a memory or a good guess dressed as one. If it is not there, the next move is the next sensible place the desk points to, not a sharper replay of the same image. The strength of the reminder measures how good the cue was, not whether the event happened.`,
    },
    quiz: {
      question: 'A familiar room makes an object location come to mind. What is the most accurate next step?',
      options: [
        'Record the location as remembered fact because the room triggered it.',
        'Repeat the scene until it is clear enough to count as confirmation.',
        'Check the location and keep the prompted detail tentative until supported.',
      ],
      correctIndex: 2,
      explanation: `Checking the location while keeping the prompted detail tentative uses the room's thread for what it is good at, suggesting where to look, and leaves the verifying to the inspection, which is the only thing that can do it. Recording the location as fact because the room triggered it treats the cue as a witness, and rooms hand out invented threads as readily as real ones. Repeating the scene until it is clear builds familiarity, and familiarity is the feeling that fools you, not the evidence that settles it.`,
    },
    takeaway: `A familiar room hands you a thread, not a verdict: use the parts of the routine you genuinely remember to pick places to check, label anything the search prompts as a candidate rather than a memory, go and look, and when you find the object write down where it is now and nothing about how it got there, because the search produced one fact and the history would be yours.`,
    sourceNote: 'Memory references discuss retrieval cues and reconstruction. The umbrella search is a practical framework, not a memory-recovery technique or guaranteed recall aid.',
  },
  {
    id: 'observer-030',
    title: 'Give a short list three familiar places',
    outcome: `Learn a short list on purpose by attaching one item to each stop on a route you already know, then walk the route in your head and check what comes back against the written list.`,
    scene: 'A familiar home route cues stamps, oats, and a library-book return without claiming those objects were physically there.',
    sections: [
      {
        title: 'Three errands without an ordered cue',
        paragraphs: [
          `You have three errands for the afternoon: buy stamps, buy oats, return the library book. You read the list twice before leaving. By the time you are in the shop, the list feels familiar, you know there were three things, and you can only produce two of them. The third hovers just out of reach until you get home and see the library book on the table.`,
          `Reading a list makes it feel known. It does not give you a way to pull each item back out when you are standing in the aisle. What you need is an order you do not have to learn, and you already own several. The walk from your front gate, past the hallway mirror, to the kitchen sink is a sequence you could recite in your sleep. Borrow it. Keep the written list in your pocket as the reference. This is a method for learning something on purpose, not a test of whether you can manage without notes.`,
        ],
      },
      {
        title: 'Attach one deliberate cue to each stop',
        paragraphs: [
          `A coat rack by the door has hooks in a fixed order. If you always hang your keys on the first hook, your scarf on the second, and your bag on the third, you never have to remember where anything is. You just go to the hook. The hooks did not come with your things on them. You decided the pairing, and the fixed order of the hooks does the remembering for you.`,
          `Your route is a coat rack with three hooks. Hang stamps on the gate: picture a sheet of stamps stuck across the bars. Hang oats on the mirror: a box of oats propped on its ledge. Hang the library book on the sink: balanced over the empty basin. These pictures are pairings you have chosen, not memories of where things were. The technique has an old name, the method of loci. Loci is simply the Latin for places. To retrieve, walk the route in order and ask each stop what it is holding. The pictures do not need to be elaborate or clever; one clear object per stop is plenty. If mental pictures do not come easily to you, say or write the pair instead: gate stamps, mirror oats, sink book. Then see whether the ordered walk still hands you each item in turn.`,
        ],
      },
      {
        title: 'Check omissions and wrong associations',
        paragraphs: [
          `Now test it. Cover the list, walk from gate to mirror to sink, and write down what each stop gives you. Compare with the original. Suppose stamps and library book come back and the mirror gives you nothing. Do not scrap the whole route. Strengthen the one weak pair, perhaps by making the oats box absurdly large or choosing a more distinctive second stop. Suppose instead the sink hands you wash the dishes rather than the book. That is the hook doing what hooks do, holding whatever is usually there. Go back and hang the book on it more deliberately.`,
          `Keep a sense of what the method is. A mnemonic is a filing system, not a photographic memory. It is certainly not evidence that stamps were ever at your gate. Where forgetting would matter for safety, use a written instruction or a checklist and let the route be a backup. And if maintaining the route starts to take more effort than the errands, that is your answer. Write the three things down and go.`,
        ],
      },
      {
        title: 'Why reading feels like learning',
        paragraphs: [
          `Rereading a list produces a warm sense of recognition, and recognition is mistaken for recall. But recognition only works when the list is in front of you. In the aisle it is in your pocket, and you need recall, which is a different skill with a different test. The route provides the test. If the mirror gives you nothing, you have learned something useful before you left the house rather than in the shop.`,
          `Two habits. When you want to carry a short list without looking, hang one item on each stop of a route you already know, and walk it once with the list covered before you set off. And whenever a stop hands you the wrong thing, repair that single pairing rather than concluding the method is not for you.`,
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Gate, mirror, sink: the intended route',
      alt: 'Three familiar locations in route order cue stamps, oats, and a library-book return.',
      caption: `Follow the arrows in order, gate to mirror to sink, as if walking in from the street. Each stop is a hook on a coat rack with one item deliberately hung on it, and the detail text shows the pairing you chose. The arrangement is a schematic of the route, not a floor plan, and nothing here claims the stamps or oats were ever physically in these places.`,
      items: [
        { label: '1. Front gate', detail: 'Imagine stamps here: buy stamps.', x: 18, y: 75, shape: 'box' },
        { label: '2. Hallway mirror', detail: 'Imagine oats here: buy oats.', x: 50, y: 48, shape: 'object' },
        { label: '3. Kitchen sink', detail: 'Imagine library book here: return it.', x: 82, y: 20, shape: 'box' },
      ],
      arrows: [{ from: 0, to: 1, label: 'Next stop' }, { from: 1, to: 2, label: 'Next stop' }],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen', 'Three familiar locations you can recall safely'],
      steps: [
        `Write three harmless errands, or use stamps, oats, and library book. Then choose three stops on a route you know well, in the order you actually pass them. The order has to be one you already own.`,
        `Hang one errand on each stop with a short picture, or a spoken or written pair if pictures are not your thing. One item per hook; two items on a hook is how the rack gets confusing.`,
        `Cover the list, walk the route in your head, and write down whatever each stop hands you. Leave a visible gap for any stop that gives you nothing; the gap is the useful result.`,
        `Compare with the original list and repair the single weakest pairing, by making the picture more distinctive or picking a different stop. Keep the written list for the actual errands.`,
      ],
      notice: `Each stop produces the item you hung on it, and you can check the three answers against the list before you leave rather than discovering the gap in the shop.`,
      troubleshooting: `If two stops blur into one another, choose locations that look nothing alike, or accept that for this list a written checklist is the better tool. If a stop keeps handing you what is normally there, wash up instead of library book, make the hung item physically absurd so it displaces the habit.`,
    },
    recall: {
      prompt: 'You attach three speech points to a familiar route, but the second stop cues yesterday\'s shopping. What should you check?',
      hint: 'A retrieved item can be real learning from the wrong list.',
      answer: `The second hook still has yesterday's coat on it. Check what the stop is handing you against today's speech outline, not against how vividly it arrives: a clear picture of oats is real learning, but from a list you finished with yesterday. Then repair that one pairing. Either hang the second speech point on the same stop with a far more distinctive image, so it displaces the shopping, or move the speech points to a different route altogether so the two lists are not sharing hooks. What you should not do is let the oats into the speech because they turned up quickly, and you should not abandon the method because one hook was double-booked.`,
    },
    quiz: {
      question: 'The imagined gate brings stamps to mind. What does that establish within this exercise?',
      options: [
        'The gate is functioning as an intentionally assigned retrieval cue.',
        'The stamps were physically left at the gate earlier.',
        'The stamps cannot be forgotten later because the image is vivid.',
      ],
      correctIndex: 0,
      explanation: `The gate handing you stamps shows the hook is holding what you hung on it, which is exactly what an intentionally assigned cue is supposed to do. It does not mean stamps were ever at the gate; you chose that pairing deliberately and the picture is a filing label, not a memory of an event. And a vivid image today is no guarantee against forgetting next week, which is why the route gets walked and checked rather than trusted.`,
    },
    takeaway: `A familiar route is a coat rack with hooks in a fixed order: hang one item you want to remember on each stop, walk the route in your head to retrieve them, check what comes back against the written list before you leave, and repair any single hook that hands you nothing or the wrong thing, because the method is a filing system you built on purpose, not a record of where anything ever was.`,
    sourceNote: 'The inherited memory reference discusses mnemonic methods; rhetoric is background, not evidence for this exact route. The errands exercise is original and offers no guaranteed recall effect.',
  },
  {
    id: 'observer-031',
    title: 'Check which list a remembered item belongs to',
    outcome: `Spot when a memory cue hands you an item from an old list instead of today's, check each recalled item against the written list, and give the new task its own cues instead of overwriting the old.`,
    scene: 'A home-doorway cue returns yesterday\'s envelopes instead of batteries for today\'s sketching trip.',
    sections: [
      {
        title: 'The doorway supplies the wrong item',
        paragraphs: [
          `Yesterday you used your front doorway as the first stop on a memory route for a shopping trip, and you hung envelopes on it. It worked; you came home with envelopes. Today you are packing for a sketching outing. You reuse the same doorway for the first item on the new list, which is spare batteries for the camera. You rehearse the route. The doorway hands you envelopes, instantly and clearly.`,
          `Nothing has gone wrong with your memory. The cue did its job and retrieved something you learned; it just retrieved it from yesterday's list. The trouble is that envelopes arrived with exactly the fluency you would expect from the right answer. Fluency is very persuasive. If you accept every item that turns up smoothly, you can finish rehearsing with a list that feels complete and still leave the batteries in the drawer. The only thing that knows which items belong to today is the written list. That is what the rehearsal has to be checked against.`,
        ],
      },
      {
        title: 'Older learning can compete with newer learning',
        paragraphs: [
          `Reuse a whiteboard without wiping it properly and the old meeting's notes show through the new ones. You can still read today's writing, mostly. Every so often your eye catches a word from last week and you spend a moment working out which meeting it belongs to. The ghost writing is not a fault in the pen. It is what happens when one surface is asked to carry two sets of marks.`,
          `Memory researchers call this interference: something you have learned makes something else harder to retrieve cleanly. When it is the older material intruding on the newer task, as the envelopes are, the specific name is proactive interference. The earlier learning reaches forward and affects what comes after. You do not need the term to spot the problem in your own packing. It is useful to know that there is a mechanism here and not a personal failing. The doorway has been given two meanings, and the first one has not gone anywhere. Two things follow. Rehearsing the mixed list without checking it does not fix the error. It makes envelopes more familiar at the doorway, which is the opposite of what you want. And simply deciding that yesterday's route is retired does not wipe the board. The old pairing stays legible until something displaces it.`,
        ],
      },
      {
        title: 'Separate the task cues and verify the result',
        paragraphs: [
          `The practical fix is to stop sharing the board. Leave the home route labelled shopping, envelopes and all; it may be useful again. For the sketching trip, build a route somewhere else, say the studio. The hook by the door for batteries, the workbench for the sketchbook, the windowsill for the entry pass. Different places, different task, no ghost writing. Then rehearse the studio route once. Check each item that comes back against today's written list, and mark anything from the old list as an intrusion rather than quietly dropping it in.`,
          `Keep your expectations honest. Distinct routes and clear task labels reduce confusion between cues. They do not give you unlimited storage or guarantee that nothing will ever leak across. And if you find yourself maintaining two routes, three labels, and a checking procedure for three items, the routes have become the heavier task. Use the written packing list directly. The goal was always to arrive with batteries. It was never to prove that a memory technique works for every person and every list.`,
        ],
      },
      {
        title: 'Why the wrong item feels right',
        paragraphs: [
          `An item that arrives fast and clear feels like a correct answer, because that is how correct answers usually arrive. Envelopes at the doorway have every quality of a successful recall except membership of today's list. Membership is not something you can feel. The whiteboard ghost is perfectly legible; legibility is not the problem, provenance is.`,
          `Two habits. When a cue hands you an item, ask which list it belongs to before you accept it. Check against the current written list rather than against how readily it came. And when two tasks are competing for one set of cues, give the new task a fresh set of places instead of trying to overwrite the old pairing. Overwriting is slow and the old marks show through.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Yesterday\'s doorway and today\'s studio route',
      alt: 'The old shopping cue pairs the doorway with envelopes; the distinct sketching route pairs hook, workbench, and windowsill with current items.',
      caption: `Read the left box as the whiteboard that was never wiped: the doorway still says envelopes, and the detail text deliberately keeps it, labelled as the older task. Read the right box as a fresh board in a different room, three new places carrying three new items. The two boards do not overwrite each other; separation is what stops the ghost writing. Fictional pairings, chosen on purpose.`,
      items: [
        { label: 'Shopping: home route', detail: 'Doorway cues envelopes. Keep this association labeled as the older shopping task.' },
        { label: 'Sketching: studio route', detail: 'Hook: batteries. Workbench: sketchbook. Windowsill: entry pass.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen'],
      steps: [
        `Write yesterday's fictional pairing, doorway and envelopes, on one line, and today's intended list, batteries, sketchbook, entry pass, on another. Seeing both lists on the page is what lets you tell membership from fluency.`,
        `Rehearse the doorway and notice envelopes arriving. Mark it as an old-list intrusion next to today's list. Do not add it; the whole exercise is practising the refusal.`,
        `Assign today's three items to the hook, the workbench, and the windowsill, or to three distinct stops in a place of your own that has never carried a shopping list. New board, new room.`,
        `Rehearse the studio route once and check each item that comes back against the written list. If the cues are still crossing over, put the routes away and pack from the list; the list was always the reference.`,
      ],
      notice: `For each item that came back, you asked which list it belonged to, not just whether you remembered it. The envelopes are on the page, labelled, and not in the bag.`,
      troubleshooting: `If a stop still hands you two items, label the task more clearly, move the stop to a different room, or abandon the route for this list; all three are fine. If you find yourself rehearsing the mixed list to make it settle, stop, because every repetition writes the ghost a little darker.`,
    },
    recall: {
      prompt: 'While preparing a new talk, your old opening example keeps appearing at the first memory-route stop. How would you handle it?',
      hint: 'Verify the current outline before rehearsing the intrusion.',
      answer: `Treat the old example as ghost writing on a reused board. First check the current outline to confirm what the opening of the new talk is actually meant to be, so you are judging the intrusion against the list and not against how smoothly it arrives. Label the old example as belonging to the earlier talk; it was real learning, just from last month. Then either give the new talk a fresh set of places that the old one never used, or replace the first stop entirely so the two openings are not sharing a hook. If managing routes for talks is becoming more work than the talks, read from the outline. The outline is the written list, and it was always allowed to be the thing you use.`,
    },
    quiz: {
      question: 'An old shopping item appears during recall of a new packing list. Which response addresses the actual problem?',
      options: [
        'Check its list membership and separate the competing cues if useful.',
        'Treat its quick arrival as evidence that the new list included it.',
        'Declare the old list erased and continue without checking the reference.',
      ],
      correctIndex: 0,
      explanation: `Checking which list the item belongs to and giving the new task its own cues addresses what actually went wrong, which is two lists sharing one board; the written list decides membership and separation stops the ghost writing. Treating quick arrival as proof of membership is the mistake the lesson is about, since the envelopes arrived quickly precisely because they were well learned yesterday. Declaring the old list erased does not wipe anything, and skipping the reference removes the one check that could have caught the intrusion.`,
    },
    takeaway: `A reused memory cue is a whiteboard that was never wiped, so when an item arrives smoothly ask which list it came from and check it against today's written list rather than trusting the speed, give a new task its own fresh set of places instead of writing over the old ones, and if the routes become heavier than the packing, pack from the list.`,
    sourceNote: 'OpenStax discusses interference and memory methods. Distinct routes and labels are practical suggestions here, not a tested recipe for unlimited or error-free recall.',
  },
  {
    id: 'observer-032',
    title: 'Do not polish a remembered gist into a quotation',
    outcome: `Keep three things apart when describing what someone agreed: the gist you remember, any exact record made at the time, and a fresh agreement confirmed now, and never dress the first as the second.`,
    scene: 'A friend\'s conditional offer to check film subtitles is remembered as a definite Friday commitment.',
    sections: [
      {
        title: 'The condition disappears from the summary',
        paragraphs: [
          `A fortnight ago, over coffee, a friend offered to check the subtitle timing on your short film. Now you are drawing up the screening plan and you type: Priya promised to finish the subtitles by Friday. It reads cleanly. It goes in the shared document. It is also not quite what happened, and you know it. When you try to recall the actual words, there is a blank where the sentence should be, and a faint sense that she said something about needing the final edit first.`,
          `What you have is the gist, the general meaning you carried away from the conversation. Gist is genuinely useful. It tells you the chat was about subtitles and Friday and that Priya was willing. What gist quietly drops is wording, hesitation, and conditions. Those are exactly the parts that matter when you are writing down another person's commitment for other people to rely on. Promised to finish by Friday and offered to check timing once the final edit arrives are the same gist. They have very different consequences for Priya.`,
        ],
      },
      {
        title: 'A quotation claims more than a paraphrase',
        paragraphs: [
          `A journalist who writes the minister said the policy was a disaster, without quotation marks, is giving their own summary. They will be judged on whether it is fair. A journalist who writes the minister said, in quotation marks, this policy is a disaster, is claiming those were the words. They will be judged on whether the tape agrees. The marks are a promise about the tape. Reporters get into real trouble when they write the second kind of sentence with only the first kind of evidence.`,
          `The same promise applies in your planning document. A paraphrase gives the meaning in your words and admits it. A quotation presents particular words as the ones the speaker used. If all you have is gist, write it as gist: I remember Priya offering to help with subtitles, possibly conditional on getting the final edit, exact wording not recalled. Do not add quotation marks because the reconstructed sentence sounds natural. Natural-sounding is what reconstruction produces. Memory does not keep a tape. The only thing that can check wording is a record made at the time, such as a message she sent that day about this exact offer. A summary you wrote later from memory is not that record. It is the same gist, copied out in neater handwriting.`,
        ],
      },
      {
        title: 'Confirm the present without rewriting the past',
        paragraphs: [
          `Suppose you scroll back through the message thread and find it. Priya, two weeks ago: happy to check the timing once you send me the final edit. There is the condition you half-remembered. The tape, such as it is, does not say Friday at all. Use it to correct your plan. The final edit has to reach her before she can start, and Friday was your hope, not her promise.`,
          `Suppose instead there is no message, just the coffee. Then stop trying to reconstruct the past and ask about the present. Priya, could you review the current version by Friday? If she says yes, you have a fresh agreement with a date on it. Write down what was agreed now: the version, the task, the deadline, and any condition she attaches. What that new yes does not do is prove what she said a fortnight ago. It is new information, not a confirmation of the old. None of this requires a recording you did not tell her about. None of it requires arguing about whose memory is better. It requires writing down what you actually have.`,
        ],
      },
      {
        title: 'Why gist gets quotation marks',
        paragraphs: [
          `A plan looks more solid with definite commitments in it, and a remembered sentence, once typed, looks definite. The reconstruction is fluent, so it feels like recall, and the quotation marks arrive almost by themselves. The cost lands on the other person. She finds herself holding a promise she never made, written in words she never said, in a document other people are now relying on.`,
          `Two habits. When writing down what someone agreed, use quotation marks only if a record made at the time supports the exact words. Otherwise write I remember and name the uncertainty. And when a remembered agreement matters, confirm it afresh and record the new answer as new. Do not use today's yes to launder last fortnight's gist.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Three different kinds of subtitle information',
      alt: 'A remembered summary is checked against an earlier conditional message, then a new current commitment is confirmed.',
      caption: `Read the first box as the journalist's paraphrase: honest about being a summary and about its gaps. The second box is the tape, a message written at the time, and it contains the condition the summary dropped. The third box is a new agreement made today. None of the three can stand in for another; the fresh yes in particular does not retroactively make the summary accurate. Fictional records, in reading order.`,
      items: [
        { label: 'Remembered summary', detail: 'Thought review was agreed for Friday; exact conditions uncertain.' },
        { label: 'Earlier message', detail: 'Offer to check timing depended on receiving the final edit first.' },
        { label: 'New confirmation', detail: 'Agree now on the current version, review task, and Friday deadline.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        `Write a fictional remembered summary in your own words: I think my friend offered subtitle help by Friday. Begin with I think; that phrase is the paraphrase admitting what it is.`,
        `Underneath, mark exact wording as not recalled and conditions as uncertain. Check that the remembered sentence has no quotation marks around it, because you have no tape.`,
        `Draft a short message to the friend asking about the present: which version, what task, by when. It should not mention an earlier promise, because you cannot support one.`,
        `On a separate line, write a hypothetical reply and label it agreed now, with the date. Notice it tells you nothing about what was said at the coffee, and resist editing the first line to match it.`,
      ],
      notice: `Your page holds three different kinds of thing with three different labels: what you remember, what a record says if there is one, and what is agreed today. A reader could tell which is which at a glance.`,
      troubleshooting: `If a sentence on your page looks word-for-word and you cannot point to a message or note from the time, take the quotation marks off and write I remember in front of it. If you have let the new yes rewrite the old summary, separate them again; the past did not change when the present did.`,
    },
    recall: {
      prompt: 'You remember a sibling offering a lift, possibly depending on their work finish time. What should your planning message say?',
      hint: 'Ask about the current arrangement without presenting the uncertain gist as a promise.',
      answer: `Write the gist as gist and ask about now. Something like: I remember us talking about you maybe giving me a lift on Saturday, depending on when you finish work. Does that still work, and what time would you be free? That sentence does three honest things. It says I remember, so it is a paraphrase and not a quotation. It keeps the condition about work in, because you half-recall it and dropping it would turn an offer into a promise. And it asks a present-tense question, so whatever your sibling answers is a new agreement you can write down with its own conditions. If they say yes, record that as agreed today. It does not prove what they said last week, and your plan does not need it to.`,
    },
    quiz: {
      question: 'A colleague confirms today that they can help on Friday. What does that establish?',
      options: [
        'Your remembered quotation from last week was exact.',
        'The earlier conversation contained no conditions you forgot.',
        'A current agreement, without settling the earlier wording.',
      ],
      correctIndex: 2,
      explanation: `A fresh yes is new information about now: a current agreement with whatever conditions attach to it today. It cannot make last week's remembered quotation exact, because no tape was consulted and the reconstruction is as uncertain as it was before. Nor can it show that the earlier conversation had no conditions; a colleague agreeing today may be agreeing to something different from what they offered then, and the old gist stays gist.`,
    },
    takeaway: `Quotation marks are a promise about the tape, so when you write down what someone agreed, use them only if a record made at the time supports the exact words, otherwise write I remember and keep the uncertain conditions in, and when it matters, confirm the arrangement afresh and record today's answer as today's, because a new yes tells you about now and nothing about what was said over coffee.`,
    sourceNote: 'OpenStax discusses reconstructive memory; GOV.UK supports careful notes. The subtitle conversation is fictional and is not a legal method for determining commitments.',
  },
]