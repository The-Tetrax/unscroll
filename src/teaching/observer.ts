import type { LessonGuide } from './types'

// Original teaching examples. Existing references are inherited by lesson ID.
// Numbers describe hypothetical cases, not measured effects of these exercises.
export const observerGuides: LessonGuide[] = [
  {
    id: 'observer-001',
    title: 'Write what happened before explaining why',
    outcome: 'Separate a bounded observation, a possible explanation, and the check that could change it.',
    scene: 'An unattended registration desk at a neighborhood seed exchange.',
    sections: [
      {
        title: 'An empty desk at noon',
        paragraphs: [
          'You arrive at a seed exchange at noon. From the entrance, you can see an empty registration desk and three people waiting beside it. Your first note says the organizer has forgotten registration. That sentence has already gone beyond the scene. You saw no one behind this desk at this time; you did not see the organizer forget anything. A useful note keeps the viewing position and time because another entrance, an earlier minute, or a partly hidden desk could give you different information.',
        ],
      },
      {
        title: 'Give the explanation its own space',
        paragraphs: [
          'An observation describes what was available to your senses. An inference is the explanation you build from it. Write them in separate columns. Under observed, put empty desk at noon, viewed from entrance. Under possible explanations, put a short break, missing supplies, or registration moved elsewhere. You do not need to believe every possibility equally. Listing alternatives stops the first explanation from quietly becoming the fact that all later reasoning depends on. Even your observation can need correction if you miscounted or missed an obstruction.',
        ],
      },
      {
        title: 'Check the part that changes your next action',
        paragraphs: [
          'At 12:02 you ask an organizer where registration is happening. They say it moved into the hall while the desk was being repaired. Add that as an attributed answer, rather than rewriting your first note to suggest you knew it all along. You can now look for the hall registration point. The explanation about repairs remains something the organizer reported unless separately checked. You have enough information to find registration without collecting names, deciding who deserves blame, or reconstructing everything that happened before you arrived.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'The check at 12:02',
      alt: 'An arrival asks where registration is happening; an organizer identifies the hall.',
      caption: 'Fictional exchange. The answer locates registration; it does not make the earlier guess an observation.',
      items: [
        { label: 'Arrival', detail: 'The front desk is empty. Where is registration happening?' },
        { label: 'Organizer', detail: 'In the hall. We moved it while the desk was being repaired.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw three columns headed Observed, Possible explanation, and Check. Use the fictional seed exchange, not strangers.',
        'Put the noon view in the first column, including your position and the three waiting people.',
        'Write two different explanations, then draft one question that would help you find registration.',
        'Add the 12:02 answer with its speaker and time. Keep the earlier observation and guesses distinguishable.',
      ],
      notice: 'A reader can identify what you saw, what you guessed, and what someone later supplied.',
      troubleshooting: 'If a note assigns a motive, move it to possible explanations or remove it.',
    },
    recall: {
      prompt: 'The library printer has a queue and no pages in its output tray. What would your note and next check say?',
      hint: 'An empty tray does not identify the cause of waiting.',
      answer: 'Record the queue and empty tray at the viewing time. Possible causes include an unfinished job or a fault. Ask the desk about printer status rather than recording a breakdown as something you saw.',
    },
    quiz: {
      question: 'A display screen is blank when you enter a room. Which note best preserves the evidence?',
      options: [
        'Screen blank at 10:00 from the doorway; power status not checked.',
        'Screen switched off at 10:00; the blank image is the evidence.',
        'Screen failed before 10:00; check which component caused it.',
      ],
      correctIndex: 0,
      explanation: 'A blank image is observable. Being switched off or broken are possible explanations requiring another check.',
    },
    takeaway: 'Keep observations, explanations, and later checks separate enough to correct any one of them.',
    sourceNote: 'GOV.UK research guidance supports descriptive, contextual notes. The seed exchange and ledger exercise are original examples, not validated motive detection.',
  },
  {
    id: 'observer-002',
    title: 'Describe where things are, not just what is there',
    outcome: 'Record position and obstruction so another person could reconstruct a small arrangement.',
    scene: 'A storage box hides an instruction card on the reader\'s own worktable.',
    sections: [
      {
        title: 'The inventory misses the problem',
        paragraphs: [
          'You set up your own worktable with a storage box, an upright instruction card, and a pen. From your chair at the near edge, the box hides the card at the back. A note listing box, card, pen includes every object but loses the relationship that explains the hidden instructions. Someone could restore those three objects in a different order and leave the card fully visible. The missing information is not another object. It is where each object sits relative to the others and to your viewpoint.',
        ],
      },
      {
        title: 'Choose a reference that does not move',
        paragraphs: [
          'Start with a stable reference: the near edge is the edge beside your chair. The card stands at the back center, the box is between chair and card, and the pen lies to the left of the box when viewed from the chair. This last phrase matters. Left reverses if you walk around the table. Orientation also matters: a card facing away can be present without its writing being readable. A top view records the horizontal arrangement; it needs a separate note about height to explain what blocks a seated view.',
        ],
      },
      {
        title: 'Use reconstruction to find missing details',
        paragraphs: [
          'Suppose you move everything aside, then restore it from your note. The pen returns correctly, but the card now peeks over the box. Your note omitted that the box was taller than the visible writing. Add that height relationship, then check again from the chair without stretching upward. Reconstruction tests the usefulness of the description, not whether you have photographic memory. Keep private paperwork out of the setup. The result should explain a particular visibility problem, not label someone inattentive for missing instructions they could not easily see.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'The box is between viewer and card',
      alt: 'Top view: chair at the near edge, box in the middle, card behind it, pen on the left.',
      caption: 'Schematic, not to scale. The box is taller than the card writing; the arrow stops at the obstruction.',
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
        'On your own table, stand the card behind the box and place the pen to its left.',
        'Sit at the near edge. Adjust the box so it hides the card writing without unstable stacking.',
        'Sketch the top view and write the viewpoint, card direction, and relevant height relationship.',
        'Move the objects aside, restore them using the note, and inspect the card from the same seat.',
      ],
      notice: 'The restored arrangement recreates the obstruction, not merely the same object list.',
      troubleshooting: 'If visibility changes, add the missing height, facing direction, or distance relationship.',
    },
    recall: {
      prompt: 'A plant hides a desk clock from the sofa but not from the door. What must a useful sketch preserve?',
      hint: 'A single object list cannot represent two viewpoints.',
      answer: 'Mark sofa, door, clock, and plant, with the plant on the sofa-to-clock sightline. Note their relevant heights and the clock face direction. Check both views rather than claiming the clock is universally hidden.',
    },
    quiz: {
      question: 'Two sketches contain the same objects. Which extra note best helps restore the hidden card?',
      options: [
        'The box and card were both near the middle of the table.',
        'The card was smaller than the box and had short instructions.',
        'From the near-edge chair, the taller box stood between eye and writing.',
      ],
      correctIndex: 2,
      explanation: 'The third note specifies the blocking relationship and viewpoint. Size or approximate location alone does not establish the sightline.',
    },
    takeaway: 'Record viewpoint, facing direction, and relative position when an arrangement explains what was visible.',
    sourceNote: 'OpenStax explains perception; GOV.UK supports contextual description. The tabletop reconstruction is an original practice task, not a memory assessment.',
  },
  {
    id: 'observer-003',
    title: 'A detection count needs an error count',
    outcome: 'Distinguish hits, misses, false alarms, and correct rejections in a labeled example.',
    scene: 'Six hypothetical sound clips contain either a quiet notification bell or background sound.',
    sections: [
      {
        title: 'Calling more sounds a notification',
        paragraphs: [
          'While waiting for a message, every faint clink starts to sound like your notification. You might be noticing something real, but you are also making a decision about an uncertain sound. Imagine six labeled practice clips: three contain a bell and three contain only background noise. A listener says bell on two bell clips and two background clips. Counting just the two bells they caught hides half the story. We also need the bell they missed and the background sounds they mistakenly called bells.',
        ],
      },
      {
        title: 'Name the four possible outcomes',
        paragraphs: [
          'A hit is saying bell when a bell is present. A miss is saying no bell when one is present. A false alarm is saying bell when there is none. A correct rejection is saying no bell when there is none. In this invented set, there are two hits, one miss, two false alarms, and one correct rejection. The labels must come from the known clip contents, not from how confident the listener feels. There are three correct decisions out of six: the two hits plus the one correct rejection.',
        ],
      },
      {
        title: 'A different response rule is not better hearing',
        paragraphs: [
          'Now let the listener answer bell for every clip. Hits rise from two to three, but false alarms rise from two to three as well. There are still only three correct answers out of six. The decision threshold, meaning how much evidence the listener requires before answering bell, became more permissive. That does not establish improved ability to distinguish sounds. In other tasks, the costs of misses and false alarms differ, so the useful threshold can differ too. This paper example is not a hearing test or a diagnosis.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Clip contents by listener response',
      alt: 'Four cells cross actual bell presence with the listener\'s bell or no-bell response.',
      caption: 'Hypothetical six-clip results. Compare actual contents with the answer, not confidence.',
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
        'Write actual contents for six clips: bell, bell, bell, noise, noise, noise. No recordings are needed.',
        'Under them write the hypothetical responses: bell, bell, no bell, bell, bell, no bell.',
        'Label each pair with its outcome and count the four categories. Check that their counts total six.',
        'Replace every response with bell. Recount correct answers and false alarms before comparing the two rules.',
      ],
      notice: 'Both rules score three correct answers, although the always-bell rule produces more hits.',
      troubleshooting: 'If a category is unclear, ask separately what was present and what was answered.',
    },
    recall: {
      prompt: 'A spelling checker flags every word in a paragraph and catches every typo. Has its accuracy been established?',
      hint: 'Count correct words that were unnecessarily flagged too.',
      answer: 'No. Catching all typos measures only one part of performance. Count actual typos missed, correct words flagged, and correct words left alone using a checked reference paragraph.',
    },
    quiz: {
      question: 'A search filter finds more relevant files after a setting change. What else should be measured?',
      options: [
        'Whether the user feels more confident about the larger result list.',
        'Irrelevant files included and relevant files still missed on the same labeled set.',
        'Only the total number of returned files before and after the change.',
      ],
      correctIndex: 1,
      explanation: 'The labeled set exposes both kinds of error. A longer list or greater confidence cannot distinguish improved discrimination from a looser threshold.',
    },
    takeaway: 'More positive answers can increase detections without increasing accuracy.',
    sourceNote: 'OpenStax introduces signal detection and response thresholds. These six clips are a paper illustration, not recorded data or a sensory assessment.',
  },
  {
    id: 'observer-004',
    title: 'Could that detail be seen from there?',
    outcome: 'Separate opportunity to see a detail from noticing it, remembering it, or reporting it accurately.',
    scene: 'Two seats offer different views of a notice behind a display pillar.',
    sections: [
      {
        title: 'Two seats, one notice',
        paragraphs: [
          'After a craft workshop, one volunteer remembers a notice beside the supplies and another says they never saw it. Before choosing which account sounds more convincing, consider their positions. In our fictional room, a display pillar stands between the left seat and the notice, while the right seat has a clear view. Both volunteers could describe their experience without having the same visual information. You also need the time: a notice added after someone left was not available to that person, however clear the later view looks.',
        ],
      },
      {
        title: 'Trace the path to the detail',
        paragraphs: [
          'A sightline is the path from a viewing position to the thing being viewed. Draw each seat, the pillar, and the notice. A path that meets the pillar is obstructed, provided the pillar is tall enough to block the writing at that eye height. A clear top-view path only checks one part of visibility; distance, light, facing direction, and height still matter. Mark unknown conditions as unknown. Reconstructing the room today cannot establish that all those conditions were identical during the workshop yesterday.',
        ],
      },
      {
        title: 'Keep the conclusion as small as the test',
        paragraphs: [
          'Using your own objects, you can reproduce the proposed obstruction and see whether it is physically plausible. If the left view is blocked, the useful conclusion is that this arrangement limits that view. It does not establish what either volunteer noticed or remembered. Even an unobstructed notice can go unattended while someone is working. A practical response might be moving future instructions into both views, with the organizer\'s agreement. You do not need to stage a surprise memory test or turn a difference in accounts into a judgment about honesty.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Two paths toward the same notice',
      alt: 'The left seat\'s path meets a pillar; the right seat has a clear path to the notice.',
      caption: 'Hypothetical top view. Assume a pillar tall enough to block the writing; visibility does not prove attention.',
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
        'Put a folded card on your table and a stable box in front of it, both facing you.',
        'From a seated position, move the box until it hides the card writing. Mark that viewpoint on paper.',
        'Shift sideways without changing the objects. Mark a second viewpoint where the writing is visible.',
        'Draw both paths and finish the sentence: this setup establishes visibility from these positions, not what someone remembered.',
      ],
      notice: 'The two paths explain different access to the same writing without assigning personal qualities.',
      troubleshooting: 'If both views match, change lateral position or box placement, not your eye height.',
    },
    recall: {
      prompt: 'A colleague says a status light was off, but you saw it on later from another desk. What remains unchecked?',
      hint: 'Compare time as well as viewpoint.',
      answer: 'Check whether the light changed between observations and whether both desks offered a clear view. Your later observation does not settle its earlier state or what the colleague could see.',
    },
    quiz: {
      question: 'A current reconstruction shows a shelf hid part of a poster from one chair. What does that support?',
      options: [
        'That arrangement limits the view from that chair.',
        'The person in that chair could not remember any poster detail.',
        'The person with the clear view must have read the entire poster.',
      ],
      correctIndex: 0,
      explanation: 'The reconstruction supports a physical constraint. Memory and attention depend on more than the present sightline.',
    },
    takeaway: 'Check access to information before treating different reports as different levels of reliability.',
    sourceNote: 'Perception and memory references support separating viewing conditions from later reports. The room reconstruction is illustrative, not an account-verification procedure.',
  },
  {
    id: 'observer-005',
    title: 'They looked away. What do you actually know?',
    outcome: 'Use an observation to choose a useful question without pretending it reveals another person\'s thoughts.',
    scene: 'A friend looks away when cafe staff cannot find a booking; the confirmation shows tomorrow\'s date.',
    sections: [
      {
        title: 'An ordinary misunderstanding',
        paragraphs: [
          'You and a friend arrive at a cafe. The staff cannot find the booking. You ask your friend whether they booked the table. They look away, pause, and say, "I did it yesterday." Your first thought is that they are making this up. Notice the extra step: you saw a pause and a change in gaze, then supplied dishonesty as their cause. The practical problem is still a missing table reservation. The movement has not told you the booking date, branch, or whether the request was accepted.',
        ],
      },
      {
        title: 'Separate the movement from its meaning',
        paragraphs: [
          'Looking away is an observation, something you can describe. Saying they are lying is an interpretation, an explanation you added. The same action can happen while someone recalls a detail, feels uncomfortable, or finds it easier to speak without steady eye contact. Dishonesty is possible too; the movement does not select one explanation. Combining the glance with a pause does not turn them into a dependable truth meter. Communication styles and situations vary. You can acknowledge your uncertainty without asking the person to perform eye contact or explain their private feelings.',
        ],
      },
      {
        title: 'Check the booking, not the gesture',
        paragraphs: [
          'Ask, "Which confirmation did you receive? Shall we check the date and branch?" Suppose your friend chooses to open the confirmation and it shows tomorrow\'s date. You have found a specific problem to discuss with the staff. You have not proved what the earlier glance meant, and you do not need to. If there is no confirmation, keep that uncertainty too. A missing message does not automatically prove that someone lied. Ask how the booking was made, then choose the next practical step from the information available.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'What you saw',
        alt: 'Looking away before answering branches to remembering, discomfort, and other possibilities, not a verdict.',
        caption: 'Fictional cafe scene. These are possibilities, not answers supplied by the gesture. Check the booking instead.',
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
        caption: 'Fictional continuation. The record resolves a date problem, not the meaning of a glance.',
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
        'Use this fictional sentence: my teammate answered in a flat voice, so they disliked my idea.',
        'Write the observation alone: their voice sounded flat to me.',
        'List two possible explanations, such as disagreement or concentration, without selecting a winner.',
        'Draft a question about the idea: what part would you change? Stop there; do not study someone\'s behavior.',
      ],
      notice: 'Your next question collects relevant information rather than demanding proof of a feeling or motive.',
      troubleshooting: 'If your question still asks what a gesture means, ask about the task or specific concern instead.',
    },
    recall: {
      prompt: 'A colleague folds their arms during your proposal, then asks detailed questions. What would you discuss before judging their attitude?',
      hint: 'Questions can express interest, confusion, or criticism.',
      answer: 'Discuss the questions and ask which concerns remain. A specific objection is evidence of that objection. Neither folded arms nor detailed questions alone establishes rejection, enthusiasm, or a hidden motive.',
    },
    quiz: {
      question: 'A friend pauses before explaining a missing ticket. Which check is most relevant?',
      options: [
        'Compare the pause with how quickly they usually answer casual questions.',
        'Ask which ticket confirmation they received and check it together if they agree.',
        'Count whether several changes in gaze and posture happen together.',
      ],
      correctIndex: 1,
      explanation: 'The agreed record addresses the ticket. A personal baseline or a cluster of movements does not establish honesty.',
    },
    takeaway: 'Good observation improves your next question. It does not make you certain sooner.',
    sourceNote: 'The archived APA overview discusses limits of visual lie cues; communication guidance adds context. The cafe exchange is fictional, not a validated lie-detection procedure.',
  },
  {
    id: 'observer-006',
    title: 'Ask which conditions help someone contribute',
    outcome: 'Use voluntarily shared context to improve a task instead of building a private behavior profile.',
    scene: 'A brochure collaborator prefers written comments before a noisy group review.',
    sections: [
      {
        title: 'Lunch is not the same task as a review',
        paragraphs: [
          'Your colleague talks freely over lunch but gives short answers when the group reviews a club brochure. It is tempting to treat the lively lunch as their normal behavior and the quieter review as evidence that something is wrong. The settings differ: several people speak during the review, the layout is unfamiliar, and an answer is expected immediately. A comparison that ignores those conditions can mistake the demands of the task for a personal attitude. You have observed different participation, not discovered its cause or a diagnosis.',
        ],
      },
      {
        title: 'Make the comparison a shared question',
        paragraphs: [
          'A baseline is a reference condition used for comparison. For this task, a useful baseline is not how cheerful your colleague seems in unrelated settings. It is an agreed way of reviewing a brochure that they find workable. Ask whether receiving the draft in advance or sending comments in writing would help. They can choose an option without explaining a medical history or identifying a condition. Communication preferences vary within every group, including autistic people; a label would not tell you which adjustment this particular person wants.',
        ],
      },
      {
        title: 'Check the task result, not the personality',
        paragraphs: [
          'Suppose the colleague chooses advance written comments and flags that the venue address is missing. The concrete result is useful information about the brochure. It is not proof that they were anxious, bored, or unable to speak earlier. At the next review, ask whether this format still works rather than treating one preference as permanent. Keep only the arrangement needed for collaboration, such as send draft before discussion. Do not turn the agreement into permission to log behavior elsewhere or compare their participation against the most talkative person.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'Agree on a review format',
      alt: 'A collaborator chooses advance written comments and identifies a missing brochure address.',
      caption: 'Fictional exchange about this brochure, not a diagnostic interview.',
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
        'Choose a harmless shared task, or use the fictional brochure review.',
        'Write two format options you can actually offer, such as advance questions and written responses.',
        'Draft an invitation that does not request a reason or diagnosis. Include the option to keep the current format.',
        'Write a task-specific follow-up: did this format let you give the comments you wanted to give?',
      ],
      notice: 'The agreement describes a working condition and leaves personal explanations optional.',
      troubleshooting: 'If your note labels the person, replace the label with the requested format.',
    },
    recall: {
      prompt: 'A friend contributes little during a fast board-game explanation but enjoys playing later. What could you ask next time?',
      hint: 'Offer a change to the explanation, not a theory about the person.',
      answer: 'Ask whether a written turn summary or a slow practice round would help. Let them choose without assuming that quietness means disinterest or that the same format will always be preferred.',
    },
    quiz: {
      question: 'A collaborator requests questions before a meeting. What is the most useful note?',
      options: [
        'Speaks less than the team average during unfamiliar discussions.',
        'Probably needs extra time because they lack confidence in groups.',
        'Send questions before this review; check later whether the format works.',
      ],
      correctIndex: 2,
      explanation: 'The requested condition is actionable and attributed. Relative talkativeness and a guessed cause add a profile the person did not provide.',
    },
    takeaway: 'Build task context with someone, not a theory about them behind their back.',
    sourceNote: 'Communication and contextual-research guidance inform the approach. The brochure example illustrates an access choice, not a diagnostic baseline or tested intervention.',
  },
  {
    id: 'observer-007',
    title: 'Check what agreement means in this group',
    outcome: 'Distinguish acknowledgment from commitment without assigning meanings from someone\'s identity.',
    scene: 'A sketch-walk group uses explicit replies to settle a departure time.',
    sections: [
      {
        title: 'The nod did not settle the departure time',
        paragraphs: [
          'Your sketch-walk group discusses leaving at eight on Saturday. One person nods while checking the route. You add their name to the confirmed list, but later learn they were acknowledging the suggestion and still needed to check a bus. The nod was visible; the commitment was your interpretation. It is possible for everyone to communicate in good faith while using the same movement differently. Knowing a person\'s name, accent, nationality, or appearance would not settle what this particular nod meant during this particular decision.',
        ],
      },
      {
        title: 'Replace an assumed convention with a shared one',
        paragraphs: [
          'A convention is a meaning that people use together, such as treating a particular reply as confirmation. Instead of guessing which convention a participant uses, make the group\'s process explicit. Ask everyone to answer yes, no, or still checking about the eight o\'clock departure. Offer the same options in writing. This separates hearing the suggestion from accepting it and makes uncertainty a legitimate state. It also avoids singling out one person as culturally unusual when the actual problem is that the decision rule was never shared.',
        ],
      },
      {
        title: 'Store the answer that was actually given',
        paragraphs: [
          'Suppose the participant replies that they heard the plan but must check the bus, then later confirms eight in the group note. Record still checking first and confirmed after the explicit reply. A summary saying everyone nodded would lose that distinction. If the departure time changes to half past seven, ask again because the earlier yes concerned a different plan. You are not trying to eliminate ordinary gestures from conversation. You are using a clearer channel for the part that creates a commitment and affects other people\'s arrangements.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'From acknowledgment to confirmation',
      alt: 'The sketch-walk organizer checks agreement; a participant first needs to check a bus, then confirms.',
      caption: 'Fictional exchange. The second reply changes the plan status; the earlier nod did not.',
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
        'Write a fictional proposal: meet for a sketch walk at eight on Saturday.',
        'Add a response rule that distinguishes acknowledgment, agreement, and still checking.',
        'Draft one spoken and one written way to answer, offered to everyone.',
        'Change the proposed time and write the fresh confirmation question the change requires.',
      ],
      notice: 'A yes refers to a specific version of the plan, and uncertainty has a visible place.',
      troubleshooting: 'If a gesture still counts as a commitment, replace it with an explicit response check.',
    },
    recall: {
      prompt: 'Someone reacts to a shared shopping list with a thumbs-up icon. Does that mean they will buy everything?',
      hint: 'The reaction could acknowledge reading rather than accept a task.',
      answer: 'Ask which items, if any, they are agreeing to buy, using the same check for everyone. Record the named items rather than inferring a commitment from the icon or the person\'s background.',
    },
    quiz: {
      question: 'Several people nod at a proposed deadline. Which follow-up best checks commitment?',
      options: [
        'Count only the nods from people who usually speak directly.',
        'Use the chair\'s interpretation of the nods as the final agreement.',
        'Ask everyone to confirm, decline, or flag uncertainty about the stated deadline.',
      ],
      correctIndex: 2,
      explanation: 'An explicit shared check tests the actual plan. Familiarity with someone\'s style or one observer\'s interpretation cannot establish everyone\'s agreement.',
    },
    takeaway: 'Clarify the convention and commitment in use instead of predicting either from identity.',
    sourceNote: 'Communication and interview guidance support clarification. The group reply convention is an original practical framework, not a universal cultural code.',
  },
  {
    id: 'observer-008',
    title: 'Leave the unreadable character unreadable',
    outcome: 'Mark an uncertain reading before expectations turn a plausible completion into an apparent fact.',
    scene: 'A smudged model-parts label resembles the familiar drawer code B17 but the packing list says B47.',
    sections: [
      {
        title: 'The familiar drawer code',
        paragraphs: [
          'You are sorting your own model-making supplies. Most parts in this batch go in drawer B17, so a smudged label looks like B17 too. On a closer look, only B and the final 7 are clear. The middle character is a dark smear. If you copy B17 without a question mark, your note becomes more certain than the label. Later, when the part does not fit, you may treat that copied code as fresh evidence rather than the same unresolved reading in cleaner handwriting.',
        ],
      },
      {
        title: 'Expectation helps interpretation, not ink recovery',
        paragraphs: [
          'Perception combines incoming detail with prior knowledge, meaning what you already know or expect. Familiar patterns can help you read ordinary imperfect text. The problem starts when you lose track of which characters were visible and which were supplied by expectation. Write B?7, with the question mark marking the unknown position. That does not claim the code is random or that every possibility is equally likely. It preserves a gap that matters for choosing the correct drawer. Repeating B17 to yourself cannot add missing detail to the ink.',
        ],
      },
      {
        title: 'Check something that did not inherit your guess',
        paragraphs: [
          'The authorized packing list for this exact part identifies drawer B47. Check the part identifier too, so you are not borrowing a clear code from the wrong row. Add confirmed from packing list beside B47 and retain the earlier B?7 if you need the reading history. This is an independent check in the practical sense that the list was not copied from your guess. Enlarging the same blur or asking someone to read your transcription supplies no such new record. If no reliable reference exists, leave the code unresolved.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Visible characters versus checked code',
      alt: 'The smudged label supports B question mark 7; the matching packing-list row gives B47.',
      caption: 'Fictional drawer labels. The question mark preserves missing information rather than completing the expected B17.',
      items: [
        { label: 'Label reading: B?7', detail: 'B and 7 visible; the middle character is unresolved.' },
        { label: 'Matching record: B47', detail: 'The packing-list row for this part supplies the checked code.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen', 'Small scrap of paper'],
      steps: [
        'Write the sample code B47 on one line and copy it onto a separate reference line.',
        'Cover the middle character of the first line with a scrap. Do not try to forget the answer.',
        'Write what the exposed line alone supports, using a question mark for the covered position.',
        'Uncover the reference and label your final entry as checked there, not fully read from the covered line.',
      ],
      notice: 'Your record distinguishes available characters from information supplied by another source.',
      troubleshooting: 'Remembering the answer is fine. The task is to label its source, not manufacture visual uncertainty.',
    },
    recall: {
      prompt: 'Your own scanned ticket shows a blurred seat digit. A familiar seat number comes to mind. How would you check it?',
      hint: 'Use the original ticket record rather than repeating the expected number.',
      answer: 'Record the visible characters and mark the unclear digit. Consult the matching original ticket or authorized confirmation. A familiar number or sharper-looking enlargement does not necessarily recover the missing digit.',
    },
    quiz: {
      question: 'A parcel label seems to say MAPLE, but one letter is unreadable. What should your first note contain?',
      options: [
        'The visible letters and an unknown marker at the unreadable position.',
        'MAPLE, because it is the only street name you recognize nearby.',
        'MAPLE marked confirmed after reading your own transcription twice.',
      ],
      correctIndex: 0,
      explanation: 'The unknown marker preserves the evidence gap. Familiarity can suggest a candidate but does not establish which letter was printed.',
    },
    takeaway: 'A plausible completion is useful only while it remains distinguishable from a checked reading.',
    sourceNote: 'OpenStax explains the contribution of prior knowledge to perception. The label exercise is original and does not claim to recover absent image detail.',
  },
  {
    id: 'observer-009',
    title: 'Remove the event your question assumes',
    outcome: 'Ask about an uncertain event without supplying an action the other person may never have observed.',
    scene: 'A shared studio key is missing, and the first question assumes someone moved it.',
    sections: [
      {
        title: 'Where did you move the key?',
        paragraphs: [
          'The shared studio key is not on its hook. You ask a friend where they moved it after lunch. You meant to ask for help, but the question already says that they moved the key and that it happened after lunch. Neither detail has been established. Even offering drawer or shelf as choices leaves the assumed movement in place. Someone trying to be helpful may search their memory around the event you supplied rather than first asking whether they remember touching the key at all.',
        ],
      },
      {
        title: 'Let the event be absent from the answer',
        paragraphs: [
          'A presupposition is something a sentence treats as already true. Here, it is the friend moving the key. Start instead with what they remember about the key, if anything. That question permits seeing it, using it, hearing about it, or remembering nothing. Memory is reconstructed rather than played back like an untouched recording. Information introduced afterward can influence later reports, so a question should not add the disputed detail it is supposed to clarify. This is a reason for careful wording, not a guarantee that open answers will be accurate.',
        ],
      },
      {
        title: 'Follow a supplied detail without expanding it',
        paragraphs: [
          'Suppose your friend says they remember seeing the key beside a sketchbook in the morning. Ask which sketchbook they mean or whether they remember the location. Do not silently turn seeing into moving. If they are unsure about the time, keep that gap rather than repeatedly suggesting lunch until it sounds familiar. You can check the agreed shared storage places without deciding who caused the problem. Stop when the person has no more to add; a useful conversation is not a contest to produce a complete account.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'A question without an assumed movement',
      alt: 'A neutral question elicits a memory of seeing the key, with uncertainty about its location.',
      caption: 'Fictional exchange. Notice that seeing the key never becomes moving it.',
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
        'Write this fictional question: where did you put the scissors after the workshop?',
        'Underline each unverified detail: handling the scissors and doing so after the workshop.',
        'Rewrite it so someone can answer with no involvement or no memory.',
        'Invent a reply about seeing, not moving, the scissors. Draft a follow-up that preserves that distinction.',
      ],
      notice: 'Neither the opening nor the follow-up supplies the missing action.',
      troubleshooting: 'If you offer two locations, check whether both still assume someone put the object there.',
    },
    recall: {
      prompt: 'A plant label has changed. How would you ask a housemate about it without assuming they replaced it?',
      hint: 'Start with what they remember, not why they acted.',
      answer: 'Ask what they remember about the label, if anything. Follow details they volunteer and leave no memory as an acceptable answer. A question about why they replaced it would insert the very action still in doubt.',
    },
    quiz: {
      question: 'A shared charger is missing. Which opening introduces the least unverified information?',
      options: [
        'Did you leave the charger at home or bring it back here?',
        'What do you remember about the charger, if anything?',
        'When you borrowed the charger, where did you use it?',
      ],
      correctIndex: 1,
      explanation: 'The open question permits no involvement. The alternatives already assume transport or borrowing.',
    },
    takeaway: 'Do not put the event you need to check inside the question as an established fact.',
    sourceNote: 'Noba reviews suggestion and memory errors; GOV.UK discusses interviewing. The studio dialogue is original, not a method for extracting hidden truth.',
  },
  {
    id: 'observer-010',
    title: 'Walk through the last actual attempt',
    outcome: 'Find a task barrier by reconstructing a specific attempt instead of assigning a personality trait.',
    scene: 'A club volunteer cannot upload a poster because the form accepts PDF rather than JPG.',
    sections: [
      {
        title: 'Bad at forms is not a step',
        paragraphs: [
          'A volunteer says they are bad at forms after failing to upload a poster to a club page. That description gives you little to work with. Perhaps they could not find the button, lacked the required file, or submitted successfully but missed the confirmation. Ask whether they want help walking through the last actual attempt. A specific attempt has a sequence and a stopping point. A general opinion about forms blends several experiences and expectations, making it harder to identify what happened on this occasion.',
        ],
      },
      {
        title: 'Ask for the next observable step',
        paragraphs: [
          'The volunteer says they opened the upload form and selected a poster image. Ask what happened next, using their account rather than the ideal instructions as your route. In this fictional example, the selected file was a JPG and the form displayed PDF only. They did not press Submit afterward. Now you can distinguish a format barrier from an unavailable service or a missing confirmation. A barrier is simply the part that prevented progress here. It does not establish a general lack of organization, attention, or technical ability.',
        ],
      },
      {
        title: 'Keep unknown steps visible',
        paragraphs: [
          'Draw opened form, selected JPG, saw PDF-only message, stopped before submission. If the volunteer cannot remember the exact message, label that part uncertain and use an authorized example form to check the requirement later. Do not write the message as a quotation merely because it fits your theory. A possible next action is finding an appropriate PDF export, with permission, not filling every gap in the story. One account also does not show that everyone encounters this barrier or that the form designer intended to make uploading difficult.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'Where this upload stopped',
      alt: 'The volunteer opens the form, selects a JPG, sees a PDF-only message, and stops before submitting.',
      caption: 'Fictional attempt. The format message identifies a specific barrier, not a personal trait.',
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
        'Use the fictional poster attempt. Write what happened in four boxes, starting with opening the form.',
        'Circle the first box that explains why progress stopped.',
        'Replace bad at forms with a sentence naming the file format and requirement.',
        'Write one follow-up for an uncertain error message and one possible next action. Do not submit a real form.',
      ],
      notice: 'Your summary identifies a barrier another person could check without accepting a personality judgment.',
      troubleshooting: 'If the account says usually or always, return to the most recent specific attempt.',
    },
    recall: {
      prompt: 'A friend says renewing a library loan never works. What would you ask before recommending a solution?',
      hint: 'Distinguish opening the account, choosing the loan, and receiving a response.',
      answer: 'With permission, ask about the last renewal attempt and what happened after each reported step. An expired account and an item with a waiting list require different responses; do not choose between them before checking.',
    },
    quiz: {
      question: 'Someone says a checkout page is confusing. Which follow-up most directly investigates their actual attempt?',
      options: [
        'Would you prefer a simpler checkout if one were available?',
        'How confident do you usually feel about online purchases?',
        'What happened after you selected the delivery option last time?',
      ],
      correctIndex: 2,
      explanation: 'The last question anchors a sequence. Preferences and general confidence can matter, but neither identifies where this attempt stopped.',
    },
    takeaway: 'Replace broad labels with the last attempted step, its result, and what remains unknown.',
    sourceNote: 'GOV.UK interview guidance favors actual examples over idealized process descriptions. The poster upload is fictional and does not establish a general usability finding.',
  },
  {
    id: 'observer-011',
    title: 'Permission has a boundary',
    outcome: 'Define what an observation covers and pause when unrelated private information appears.',
    scene: 'A friend demonstrates recipe folders while an unrelated message appears on the same screen.',
    sections: [
      {
        title: 'A recipe demonstration is not access to everything',
        paragraphs: [
          'A friend agrees to show you how they organize recipes on a tablet. You want to learn whether folders are grouped by ingredients or by meals. While they switch folders, a private message appears. It is on the same screen, but it is not part of the agreed task. Being able to see something does not mean you have permission to copy, retain, or share it. The useful information for your question is the folder structure, not the sender, message contents, or other applications on the device.',
        ],
      },
      {
        title: 'Make the scope understandable before starting',
        paragraphs: [
          'Scope means the boundary of the activity. Explain that you want to note folder categories, whether anyone else will see the note, and when you will delete it. Ask separately before any recording; agreement to demonstrate is not automatically agreement to screenshots. Offer a way to skip a step or stop without supplying a reason. Consent is an ongoing choice about this activity, not a single yes that covers every later discovery. A person can agree to folder names and decline to show the recipes themselves.',
        ],
      },
      {
        title: 'Pause instead of collecting first',
        paragraphs: [
          'When the message appears, stop looking and pause your notes. Let the friend hide it, continue verbally, skip the screen, or end the demonstration. If you accidentally noted unrelated information, avoid sharing it and agree on removing it. Removing names later would not justify collecting the message in the first place; distinctive details can still reveal someone. The observation succeeds when it answers the agreed question within its boundary, not when it captures the largest possible amount of information. Your own mock folders are a sufficient fallback for practice.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'Keep the recipe task within its scope',
      alt: 'A friend agrees to folder-category notes, then chooses to pause when a private message appears.',
      caption: 'Fictional dialogue. Permission for categories does not include unrelated screen contents.',
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
        'Draft a scope for observing fictional recipe folders: purpose, allowed notes, audience, and deletion time.',
        'List what is outside scope, including messages, names, and unrelated applications.',
        'Write a sentence offering pause, skip, and stop without requiring an explanation.',
        'Rehearse your response to an incoming message on paper. Collect no actual private material.',
      ],
      notice: 'Your plan explains what to avoid collecting and what happens if the activity changes.',
      troubleshooting: 'If the boundary says anything useful, replace it with the specific information needed for the task.',
    },
    recall: {
      prompt: 'Someone shares a screen to explain slide formatting, and a salary spreadsheet appears. What should you do?',
      hint: 'The original task does not cover every visible document.',
      answer: 'Pause and avoid copying the spreadsheet. Let the person hide it, use a sample slide, or stop. Permission to observe formatting does not authorize collecting unrelated financial information.',
    },
    quiz: {
      question: 'A demonstration reveals information outside its agreed scope. Which response best respects the original permission?',
      options: [
        'Take a complete note now and remove identifying details afterward.',
        'Pause collection and let the participant choose how or whether to continue.',
        'Keep the information privately because the note will not be published.',
      ],
      correctIndex: 1,
      explanation: 'Pausing prevents collection beyond the agreement. Private storage and later anonymization do not expand the original consent.',
    },
    takeaway: 'Visibility is not permission. Collect only what the agreed task needs.',
    sourceNote: 'GOV.UK consent and note-taking guidance inform this framework. The everyday script is illustrative, not legal advice or a complete research-consent process.',
  },
  {
    id: 'observer-012',
    title: 'Leave room for someone to correct your note',
    outcome: 'Attach a correction with its source while preserving what was observed and what remains uncertain.',
    scene: 'A garden volunteer pauses a tool-loan form to find a plot number rather than abandoning it.',
    sections: [
      {
        title: 'Abandoned was your word',
        paragraphs: [
          'During an agreed demonstration of a community garden tool-loan form, a volunteer closes the form and opens a notebook. Your note says they abandoned the application. That wording could send a later discussion toward redesigning the form to prevent people giving up. But what you observed was a change of activity. You did not directly observe a decision to quit. Before using the note to explain the problem, offer a short factual summary for correction, without asking the volunteer to justify their behavior or disclose unrelated personal details.',
        ],
      },
      {
        title: 'Record who supplied the explanation',
        paragraphs: [
          'At 14:05 your observation is form closed, notebook opened. At 14:08 the volunteer explains that they paused to find their plot number and intended to return. Add that as the volunteer\'s explanation at 14:08. An attributed statement identifies who supplied the information; it does not pretend you directly observed the intention. Keep the earlier interpretation marked as corrected rather than silently rewriting the entire history. Someone reading later can then understand why the note changed and avoid treating two versions as two independent pieces of evidence.',
        ],
      },
      {
        title: 'Use feedback without making it a truth stamp',
        paragraphs: [
          'The correction suggests a practical question: does the form explain that a plot number will be needed? You can inspect an authorized sample to check that requirement. Agreement with your summary does not prove every remembered detail, and disagreement does not require a personal explanation. If the volunteer says they would rather remove a detail, respect the agreed note-handling rules. The aim is an account that can be challenged and improved, not a signature that protects your first interpretation from scrutiny or makes the participant responsible for all later conclusions.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Observation, interpretation, correction',
      alt: 'At 14:05 a form closes; an abandonment interpretation is later corrected by the volunteer at 14:08.',
      caption: 'Fictional timestamps, ordered but not drawn to a proportional time scale.',
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
        'Copy the fictional observation and the initial word abandoned into separate lines.',
        'Draft a neutral invitation to correct the factual summary without explaining private reasons.',
        'Add the volunteer\'s plot-number explanation with its speaker and later time.',
        'Mark abandoned as your corrected interpretation. Write one form requirement that could be checked separately.',
      ],
      notice: 'The revised note shows both the correction and where its information came from.',
      troubleshooting: 'If every line now looks directly observed, add speaker and timing labels to reported explanations.',
    },
    recall: {
      prompt: 'Your note says a friend rejected a recipe, but they explain that they saved it for a day with more time. How should it change?',
      hint: 'Preserve the visible action and attribute the later explanation.',
      answer: 'Keep whatever action you actually saw, such as closing the recipe. Mark rejected as your interpretation and attach the friend\'s explanation. Do not recast the intention as something you observed firsthand.',
    },
    quiz: {
      question: 'A participant corrects your account of a paused task. Which revision is most transparent?',
      options: [
        'Keep the observed pause and attach the participant\'s explanation with its source.',
        'Replace the whole note so the corrected version appears to be your original observation.',
        'Mark all details verified because the participant approved the general summary.',
      ],
      correctIndex: 0,
      explanation: 'Attribution preserves the distinction between observation and explanation. A rewrite or broad approval can hide remaining uncertainty.',
    },
    takeaway: 'A correction should improve the account without hiding how the account changed.',
    sourceNote: 'GOV.UK contextual research and note guidance inform correction and attribution. The tool-loan scene is an original example, not independent verification of reported intentions.',
  },
  {
    id: 'observer-013',
    title: 'List explanations that make different predictions',
    outcome: 'Use a hypothesis table to choose a distinguishing check while allowing overlap and missing causes.',
    scene: 'A rehearsal event is absent from the calendar currently displayed on a phone.',
    sections: [
      {
        title: 'The rehearsal disappeared from this view',
        paragraphs: [
          'You open your own calendar to check a rehearsal and cannot find it. The immediate temptation is to decide that someone canceled it. But the observation is narrower: the event is absent from the calendar view you opened. Perhaps the entry was never saved, belongs to a hidden calendar, or was canceled. There could also be another cause, such as a synchronization problem. A hypothesis is a possible explanation that can be compared with observations. Naming one does not establish that it happened or assign responsibility for it.',
        ],
      },
      {
        title: 'Write what each explanation would lead you to check',
        paragraphs: [
          'Give each explanation a column and write a relevant expectation beneath it. A hidden calendar suggests checking which calendars are displayed. An unsaved entry suggests looking for an authorized original invitation rather than assuming a saved event existed. A cancellation suggests checking the organizer\'s current notice. These are not guaranteed diagnostic signs: a missing invitation can have several explanations too. The purpose is to find a check whose possible answers would change your next action, rather than collect more descriptions that fit whichever story you already prefer.',
        ],
      },
      {
        title: 'Do not force one winner from an incomplete list',
        paragraphs: [
          'Suppose showing a hidden calendar reveals the rehearsal, and the organizer\'s notice also says it has been canceled. Both explanations apply: the display hid the entry, and a cancellation changed whether you should attend. Counting one supporting detail for each would not make them equally probable alternatives. The columns overlap, and their evidence has different relevance. Keep an other-cause column so an unexpected result can change the table. Use only records you are authorized to inspect, and stop when the practical question is answered without building a theory about someone\'s intentions.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Four possibilities for the missing rehearsal',
      alt: 'Four explanation columns pair an unsaved entry, hidden calendar, cancellation, and another cause with relevant checks.',
      caption: 'Fictional comparison. Columns can overlap; they are not equal-probability choices.',
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
        'Write the exact observation: rehearsal absent from the displayed calendar view.',
        'Draw columns for unsaved, hidden, canceled, and another cause. Add a relevant check to each.',
        'Use this fictional result: hidden calendar contains the event; organizer notice says canceled.',
        'Mark both supported explanations and write the practical conclusion about attendance. Do not assign percentages.',
      ],
      notice: 'The table handles two simultaneous causes without treating the initial list as exhaustive.',
      troubleshooting: 'If every check gives the same prediction, choose a record that distinguishes the proposed causes.',
    },
    recall: {
      prompt: 'Your exported photo looks dull. How could an explanation table avoid prematurely blaming the camera?',
      hint: 'Consider the capture, export, and display, plus another cause.',
      answer: 'Compare whether the original image is dull, whether export settings changed it, and whether another authorized display shows the same result. Allow multiple causes and an unlisted one; matching a story is not a probability calculation.',
    },
    quiz: {
      question: 'Two proposed causes both predict an empty folder. What would best distinguish them?',
      options: [
        'Count how many descriptive details can be written under each cause.',
        'Choose a check with different expected results, while allowing both or another cause.',
        'Assign each cause half the probability because there are two columns.',
      ],
      correctIndex: 1,
      explanation: 'Different predictions can guide a useful check. Detail counts and the number of columns do not establish probabilities.',
    },
    takeaway: 'An explanation table should expose useful checks, overlaps, and gaps, not manufacture certainty.',
    sourceNote: 'Bayesian inference supplies the evidence-comparison perspective; note guidance supports explicit records. This table is an organizing framework, not a formal probability model.',
  },
  {
    id: 'observer-014',
    title: 'A detailed story sits inside a broader event',
    outcome: 'Check that the probability assigned to a detailed event does not exceed its containing event.',
    scene: 'Twenty hypothetical deliveries include eight late arrivals, two caused by a van breakdown.',
    sections: [
      {
        title: 'A vivid breakdown story',
        paragraphs: [
          'You are planning a craft delivery and compare two predictions: it arrives late, or it arrives late because the van breaks down. The second is easier to picture. There is a van, a mechanical problem, and a reason for waiting. But every delivery that is late because of a breakdown is also late. Other delays can happen without a breakdown. Adding a cause narrows the story; it does not add more ways for the whole story to come true. Vividness cannot reverse that relationship.',
        ],
      },
      {
        title: 'Count the smaller event inside the larger one',
        paragraphs: [
          'Use a made-up set of twenty deliveries. Eight arrive late: two because of a breakdown and six for other reasons. Twelve arrive on time. Lateness occurs in eight out of twenty, or 40%. Lateness because of breakdown occurs in two out of twenty, or 10%. The two breakdown delays are already included in the eight late deliveries; do not add them to get ten. A subset is a smaller set wholly contained within another. Its count, and its probability using the same total, cannot exceed the containing set.',
        ],
      },
      {
        title: 'Keep the denominator attached',
        paragraphs: [
          'There is another legitimate question: among the eight late deliveries, how many involved breakdowns? That answer is two out of eight, or 25%. It uses a different denominator, meaning the total being compared against. It does not make breakdown-caused lateness 25% of all twenty deliveries. Before comparing percentages, write the population each describes. For planning your own delivery, these invented figures estimate nothing about the real service. They demonstrate a constraint: a detailed prediction containing lateness cannot be more likely than lateness alone for the same delivery and information.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Two breakdown delays are part of eight late deliveries',
      alt: 'Of twenty hypothetical deliveries, eight are late and two of those eight are late because of a breakdown.',
      caption: 'Invented counts with the same total of twenty. These bars overlap: do not add eight and two.',
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
        'Draw twenty small circles representing the fictional deliveries. Mark eight as late.',
        'Within those eight, mark two with B for breakdown. Leave twelve circles on time.',
        'Calculate late out of all, breakdown-late out of all, and breakdown-late out of late.',
        'Write 40%, 10%, and 25% beside their denominators. Explain why the last two answer different questions.',
      ],
      notice: 'The detailed event stays inside lateness, and every percentage names its reference total.',
      troubleshooting: 'If you get ten late deliveries, you counted the two breakdown cases twice.',
    },
    recall: {
      prompt: 'Someone assigns 30% to a picnic being canceled and 45% to cancellation because of rain. What needs correction?',
      hint: 'Every rain cancellation is also a cancellation.',
      answer: 'For the same picnic and information, the rain-cancellation probability cannot exceed all-cancellation probability. At least one estimate or event definition needs revision. The vivid rain explanation does not justify the reversed ordering.',
    },
    quiz: {
      question: 'Which pair can describe the same train journey using the same information?',
      options: [
        'Delayed: 40%; delayed because of a signal fault: 10%.',
        'Delayed: 10%; delayed because of a signal fault: 40%.',
        'Delayed: 20%; delayed because of a signal fault: 30%.',
      ],
      correctIndex: 0,
      explanation: 'A signal-fault delay is contained within all delays. Its probability cannot be larger, even when that cause sounds convincing.',
    },
    takeaway: 'Extra conditions narrow an event. Compare probabilities only after checking containment and denominators.',
    sourceNote: 'Seeing Theory explains compound probability. Delivery counts are invented to illustrate containment and conditional percentages, not estimate transport reliability.',
  },
  {
    id: 'observer-015',
    title: 'Ask how the missing evidence would have appeared',
    outcome: 'Trace an evidence-producing process before treating non-detection as proof that an event did not happen.',
    scene: 'A finished poster export does not appear in the folder view the designer checks.',
    sections: [
      {
        title: 'The poster is not in this folder',
        paragraphs: [
          'You export a club poster, open Downloads, and see no new file. It is tempting to conclude that the export failed. But several steps sit between requesting an export and seeing the finished file in this particular view. The editor must produce the file, it must be saved somewhere, and the folder view must include it. If you saved to Pictures or left a file-type filter active, a successful export could still be absent from Downloads. The missing item is evidence about a search result, not automatically the entire process.',
        ],
      },
      {
        title: 'Draw the path from event to record',
        paragraphs: [
          'Write requested export, file generated, saved to chosen location, and displayed in the checked folder view. For each link, ask what you actually know. A progress indicator reaching completion may support generation without identifying where the file went. A recent-files entry may identify a path without proving the file still exists. This is causal reasoning: asking which earlier steps must work for the later evidence to appear. A break at different links can produce the same final absence, so the last empty view alone cannot locate the break.',
        ],
      },
      {
        title: 'A dependable search makes absence more informative',
        paragraphs: [
          'Suppose you check the editor\'s chosen destination and find the poster in Pictures. The Downloads search was not capable of finding that file, even though the export succeeded. Conversely, if the documented process always saves there and a complete, current listing contains no file, absence weighs more against a saved export. The relevant question is how often this evidence would be missing despite success. Usually you lack an exact rate, so do not invent percentages. Check the authorized destination and status before repeating work or assigning a confident cause.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'From export request to visible file',
      alt: 'The poster must be generated, saved to a location, and included in the view before the search can show it.',
      caption: 'Fictional process. A file saved in Pictures will not appear in a Downloads-only listing.',
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
        'Draw the four stages for the fictional poster export. Make no changes to an actual computer.',
        'Mark which stage establishes a saved file and which merely requests one.',
        'Add the result: saved in Pictures, searched in Downloads. Explain the absent search result.',
        'Write one check of the destination and one condition that would make a missing file more informative.',
      ],
      notice: 'Your explanation identifies why this search could miss a successful export.',
      troubleshooting: 'If every arrow says failure, name the distinct mechanism at each step.',
    },
    recall: {
      prompt: 'A club member receives no newsletter. What should be checked before concluding they were never added to the list?',
      hint: 'Being added, sending, delivery, and inbox filtering are different steps.',
      answer: 'With appropriate permission, check list membership and the sending record, then the agreed delivery destination and filtering. No visible message can result from failures after membership was added, so absence alone does not identify that first step.',
    },
    quiz: {
      question: 'Which condition makes a missing routine receipt stronger evidence that a transaction did not complete?',
      options: [
        'The receipt is not visible in the inbox view normally used.',
        'The person remembers the usual receipt process in detail.',
        'The receipt process is dependable and the relevant complete records were checked.',
      ],
      correctIndex: 2,
      explanation: 'Reliable production and detection make absence informative. A habitual view or a remembered process can still miss an existing record.',
    },
    takeaway: 'Before interpreting absence, check how the evidence should have been produced and found.',
    sourceNote: 'Bayesian inference informs reasoning about non-detection under competing explanations. The export chain is an original illustration, not a claim about a particular editor.',
  },
  {
    id: 'observer-016',
    title: 'Carry the first update into the second',
    outcome: 'Update odds through two observations while keeping the sampling rule explicit.',
    scene: 'One of two boxes is chosen fairly, then counters are drawn with replacement from that same box.',
    sections: [
      {
        title: 'Choose the box once',
        paragraphs: [
          'Imagine two boxes with eight counters each. A contains six red and two blue; B contains two red and six blue. A fair choice selects one box, and both later draws use that same box. Before seeing a counter, A and B have equal chances. These starting probabilities are called priors. Draw a red counter. Red is six out of eight from A but two out of eight from B, so this observation is three times as likely under A. It favors A without ruling out B.',
        ],
      },
      {
        title: 'Odds make the update visible',
        paragraphs: [
          'Odds compare the probability of A with the probability of B. Equal chances give odds of one to one. The likelihood ratio compares how likely this observation is under the two boxes: six eighths divided by two eighths equals three. Multiply the starting odds by three to get three to one. That means three probability parts for A out of four total, or 75%. It does not mean three physical counters remain in A. Replace the counter and mix the box, restoring its original contents before the second draw.',
        ],
      },
      {
        title: 'Do not restart from equal chances',
        paragraphs: [
          'A second red counter supplies the same likelihood ratio because replacement restored each box\'s drawing probabilities. Start with the updated odds of three to one, not the original equal odds. Multiplying by three gives nine to one, so A has nine out of ten probability parts: 90%. The draws are independent once the box is fixed under these mixing rules, not simply because two observations occurred. Without replacement, a first red leaves five red of seven in A and one of seven in B. The next ratio would be five, not three.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Why a red draw favors A',
        alt: 'Box A has six red counters out of eight; box B has two red counters out of eight.',
        caption: 'Toy box contents. Both totals are eight, so the red-draw likelihood ratio is six divided by two.',
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
        caption: 'The box stays fixed. Replace and mix after each draw; do not reset the updated odds.',
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
        'Draw A with six red and two blue marks, and B with two red and six blue marks.',
        'Write choose once, same box, replace and mix. Record starting odds A:B as 1:1.',
        'Calculate the red likelihood ratio and update the odds after each of two red draws.',
        'Convert 9:1 to a probability using all ten parts. Explain why omitting replacement changes the second ratio.',
      ],
      notice: 'Your working shows 50%, then 75%, then 90%, with the replacement rule beside it.',
      troubleshooting: 'If you get 900%, update odds first and divide by the sum of both probability parts.',
    },
    recall: {
      prompt: 'A toy stamp generator is chosen fairly from P and Q. Each of two conditionally independent star marks is twice as likely under P. What are the final odds and probability?',
      hint: 'Multiply the odds twice, then count all probability parts.',
      answer: 'Start at 1:1, update to 2:1, then 4:1. P has four out of five parts, or 80%. This requires the stated independence given the generator; repeated copies of one mark would not supply two updates.',
    },
    quiz: {
      question: 'In the box example, a red counter is not replaced. What ratio should a second red supply?',
      options: [
        'Three, because the original boxes had a three-to-one red ratio.',
        'One, because the first observation already supplied all the evidence.',
        'Five, because the remaining red probabilities are 5/7 and 1/7.',
      ],
      correctIndex: 2,
      explanation: 'Removing a red changes both boxes\' possible contents. The next likelihood ratio must use those conditional probabilities, not the original ones.',
    },
    takeaway: 'Update the current odds with genuinely new evidence and the sampling conditions that produced it.',
    sourceNote: 'Seeing Theory supports Bayesian updating and conditional probability. The boxes and stamp generator are exact toy models, not estimates about real people or devices.',
  },
  {
    id: 'observer-017',
    title: 'Judge confidence across resolved forecasts',
    outcome: 'Compare a group of recorded probabilities with its outcome frequency without overreading a small sample.',
    scene: 'A fictional commute log contains ten bus-arrival forecasts, each recorded at 80%.',
    sections: [
      {
        title: 'One late bus does not settle your forecasting skill',
        paragraphs: [
          'Before leaving home, you write an 80% chance that the bus will reach your stop by 08:20. It arrives later. That is a miss for the stated event, but 80% never meant a promise. The forecast allowed a 20% chance of non-occurrence. To evaluate whether this level of confidence generally matches outcomes, you need a collection of forecasts recorded before their results, with clear rules for deciding what happened. Moving the deadline after the bus arrives would answer a different question from the one you forecast.',
        ],
      },
      {
        title: 'Put comparable forecasts in a bin',
        paragraphs: [
          'A bin is simply a group of forecasts with similar probabilities. In a fictional log, ten comparable bus-arrival forecasts were each recorded at 80%, and six of those events occurred. Their average predicted probability is 80%; their observed frequency is six out of ten, or 60%. Calibration describes the match between stated probabilities and frequencies across cases. In a large, suitable collection, events assigned about 80% should occur about 80% of the time. The twenty percentage point gap here is worth recording, but ten cases are too few for a confident verdict.',
        ],
      },
      {
        title: 'Keep the count and the dependencies',
        paragraphs: [
          'Several forecasts about the same bus on the same morning do not create several independent tests. They concern one outcome, and copying them into the bin would inflate its apparent size. Different mornings can also share roadworks or weather, so note important common conditions. Keep unresolved forecasts separate and retain the original probability, deadline, and outcome rule. The next useful step is more clearly defined resolved cases, not automatically cutting every future estimate by twenty points. A log makes confidence inspectable; keeping one does not by itself guarantee better predictions.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'The ten-forecast 80% bin',
      alt: 'Average predicted probability is 80 percent; observed event frequency is 60 percent among ten forecasts.',
      caption: 'Hypothetical ten-case bin. The gap is twenty percentage points; a small bin is noisy.',
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
        'Make ten fictional rows with forecast 80% and outcome six yes entries followed by four no entries.',
        'Calculate the mean forecast and observed frequency. Keep the count of ten beside the comparison.',
        'Write why adding another prediction of the same event would not add a new outcome.',
        'Draft one low-stakes future forecast with a deadline and check rule. Leave its result blank until resolved.',
      ],
      notice: 'Your record separates a single outcome, a bin-level comparison, and an unresolved prediction.',
      troubleshooting: 'If the event cannot be judged yes or no at its deadline, define it more narrowly.',
    },
    recall: {
      prompt: 'You forecast 70% for twenty separate hobby sessions being completed, and fourteen occur. What can you say?',
      hint: 'Compute the frequency, then keep the sample-size caveat.',
      answer: 'Fourteen out of twenty is 70%, matching that bin\'s mean forecast in this sample. It does not prove calibration for other probabilities, future sessions, or strongly related events.',
    },
    quiz: {
      question: 'One forecast recorded at 90% fails. Which conclusion is justified immediately?',
      options: [
        'It is one non-occurrence; calibration still requires a suitable collection of cases.',
        'The forecaster should lower every subsequent estimate by ten percentage points.',
        'The original probability should be changed to match the observed outcome.',
      ],
      correctIndex: 0,
      explanation: 'A 90% forecast allows misses. One result neither identifies a universal adjustment nor permits rewriting what was expected beforehand.',
    },
    takeaway: 'Calibration compares confidence with outcome frequency across cases, not certainty with one result.',
    sourceNote: 'scikit-learn explains probability calibration for models. The commute notebook adapts that mathematical diagnostic; its ten cases are invented and do not validate a training method.',
  },
  {
    id: 'observer-018',
    title: 'Score the probability you actually wrote down',
    outcome: 'Calculate binary Brier loss and compare forecasts on the same resolved events.',
    scene: 'Two fictional forecasts predict whether a library hold will be ready by Friday, but it is not.',
    sections: [
      {
        title: 'The deadline passes without the book',
        paragraphs: [
          'On Monday you record an 80% chance that your library hold will be ready by Friday. A second fictional forecast for the same event records 60%. Friday ends and the hold is not ready. Both leaned toward the wrong outcome, but one committed more strongly. To compare them consistently, keep the probabilities written before the result and use a fixed scoring rule. Replacing 80% with what now feels reasonable would evaluate hindsight rather than the forecast. The event definition and deadline must remain unchanged too.',
        ],
      },
      {
        title: 'Subtract the outcome, then square',
        paragraphs: [
          'For binary Brier loss, write probability as a decimal between zero and one. Code an event that occurs as one and an event that does not occur as zero. Subtract the outcome from the probability, then multiply that difference by itself. For the unsuccessful 80% forecast, 0.8 minus 0 equals 0.8, and 0.8 times 0.8 equals 0.64. For 60%, the loss is 0.6 times 0.6, or 0.36. Lower loss is better. Squaring makes both directions of error nonnegative and gives larger probability errors more weight.',
        ],
      },
      {
        title: 'One smaller loss is not a calibration verdict',
        paragraphs: [
          'If the hold had been ready, the same forecasts would score 0.04 and 0.16: 0.8 minus one is negative 0.2, whose square is 0.04. Confidence is not always punished; its value depends on whether it tracks outcomes over cases. Average losses across the same resolved events when comparing methods. Different event difficulty can distort a comparison across unrelated lists. Brier loss reflects more than calibration, including whether forecasts distinguish events that happen from those that do not. Also inspect probability bins before claiming your stated confidence matches long-run frequencies.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Friday result: hold not ready',
      alt: 'An 80 percent forecast has Brier loss 0.64; a 60 percent forecast has loss 0.36 when the event does not occur.',
      caption: 'Two hypothetical forecasts of the same outcome, coded zero. Lower binary Brier loss is better.',
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
        'Write the two fictional probabilities as 0.8 and 0.6, and the not-ready outcome as zero.',
        'For each forecast, subtract zero and square the difference. Label the losses 0.64 and 0.36.',
        'On a separate row, imagine the same hold was ready and code the outcome as one.',
        'Calculate 0.04 and 0.16 for that alternative. Explain why the more confident forecast is not always worse.',
      ],
      notice: 'Your scores change with the outcome while the recorded probabilities stay fixed.',
      troubleshooting: 'A negative loss means you forgot to square. A probability of 80 instead of 0.8 uses the wrong scale.',
    },
    recall: {
      prompt: 'A recorded 30% forecast predicts rain during a walk, and rain occurs. What is its binary Brier loss?',
      hint: 'Use 0.3 for the probability and one for occurrence.',
      answer: 'The difference is 0.3 minus one, or negative 0.7. Squaring gives 0.49. Keep the original 30% in the log; changing it after seeing rain would invalidate the check.',
    },
    quiz: {
      question: 'A 70% prediction does not occur. Which value is its binary Brier loss?',
      options: ['0.30', '0.49', '0.09'],
      correctIndex: 1,
      explanation: 'Non-occurrence is zero, so the loss is 0.7 squared, or 0.49. The other values confuse the remaining probability or the error for an event that occurred.',
    },
    takeaway: 'A fixed scoring rule can evaluate recorded forecasts only if their original probabilities remain intact.',
    sourceNote: 'scikit-learn discusses Brier loss and why it is not a calibration-only measure. The library forecasts are invented examples of the binary convention used here.',
  },
  {
    id: 'observer-019',
    title: 'Explaining a task changes the task',
    outcome: 'Describe how narration and attempt order affect a performance observation before attributing a difference.',
    scene: 'A volunteer folds a paper display once silently and once while explaining each fold.',
    sections: [
      {
        title: 'The narrated display takes longer',
        paragraphs: [
          'A volunteer agrees to show you how they fold a paper display. On the first attempt they work quietly. On the next, you ask them to explain every fold. The second attempt takes longer, so your note says their speed became worse. That misses a change you introduced. The volunteer is now doing the folding and producing an explanation for a listener. They may pause to name an edge, point at a crease, or check whether you understand. Those actions are part of the demonstration, not evidence of reduced folding skill.',
        ],
      },
      {
        title: 'The measurement includes its conditions',
        paragraphs: [
          'A measurement is an observation made under particular conditions, not a property extracted unchanged from a person. Here the conditions include narration, a listener, and the order of attempts. Practice on the first display might make the second easier, while explaining might add pauses. With only these two attempts, you cannot separate those influences or calculate a general narration effect. A faster second attempt would not prove narration speeds everyone up either. Keep the raw sequence and conditions rather than compressing them into a single judgment about ability.',
        ],
      },
      {
        title: 'Choose the mode that answers your question',
        paragraphs: [
          'If you want to understand the folding workflow, agree on an ordinary attempt first and ask about unclear steps afterward. If you want a tutorial, the explanation is part of the result you care about, so speed alone is a poor measure of its quality. Quiet observation still has conditions and must not become secret observation. In the worked example, a useful note says the narrated attempt included pauses to explain crease alignment. It does not label that duration normal speed or claim the first attempt revealed an untouched natural baseline.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Two attempts with different demands',
      alt: 'A quiet folding attempt precedes a narrated attempt with explanation pauses, followed by separate discussion.',
      caption: 'Fictional order, not a proportional duration chart. Practice and narration both differ across attempts.',
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
        'Fold one sheet in half twice silently, using a comfortable pace and a safe surface.',
        'Fold the second sheet the same way while explaining the edge alignment aloud to yourself.',
        'List any pointing, speaking, or pauses added on the second attempt. Exact timing is unnecessary.',
        'Write the attempt order and one reason a difference cannot be attributed to narration alone.',
      ],
      notice: 'Your note describes changed task demands rather than assigning a broad skill score.',
      troubleshooting: 'If nothing feels different, record that result. Do not force a slowdown to fit the example.',
    },
    recall: {
      prompt: 'A colleague sorts sample files slowly while explaining every naming rule. Can that time establish their usual sorting speed?',
      hint: 'Explanation is additional work, and observed practice has its own conditions.',
      answer: 'No. Record the narration requirement and any earlier practice. An agreed ordinary attempt could answer a different question, while a tutorial should also be judged by whether its explanation is usable.',
    },
    quiz: {
      question: 'A second assembly attempt is faster after the first was narrated. What can be concluded from those two trials?',
      options: [
        'Attempt order and narration differ, so their separate effects are not established.',
        'Narration always slows assembly by the observed time difference.',
        'The second attempt reveals the person\'s fixed natural speed.',
      ],
      correctIndex: 0,
      explanation: 'Practice, narration, and other conditions can contribute. Two differently arranged trials do not isolate one cause or establish a permanent baseline.',
    },
    takeaway: 'Record the conditions your measurement adds before explaining a performance difference.',
    sourceNote: 'GOV.UK contextual-research guidance distinguishes observation from continuous explanation. The paper task illustrates measurement conditions, not a quantified effect of narration.',
  },
  {
    id: 'observer-020',
    title: 'Solve the last move before choosing the first',
    outcome: 'Use backward reasoning to choose a winning move in a fully specified four-counter game.',
    scene: 'Two willing players play an open, no-stakes game with four counters and a last-counter-wins rule.',
    sections: [
      {
        title: 'Four counters and clear rules',
        paragraphs: [
          'Put four counters on the table. Two players alternate removing one or two counters, and whoever takes the last counter wins. Both players know the rules and can see the whole position. Before guessing what the other player will choose, work out what the rules allow near the end. With one counter left, the player whose turn it is can take it and win. With two left, they can take both. These are solved positions because a legal move ends the game immediately in that player\'s favor.',
        ],
      },
      {
        title: 'Three is bad for the player to move',
        paragraphs: [
          'Now consider three counters. Taking one leaves two for the other player, who can take both. Taking two leaves one, which the other player can also take. Every legal choice gives the opponent an immediate win if they play correctly. We call three a losing position for the player to move under these rules. Backward reasoning means using these already solved later positions to decide an earlier move. You do not need a theory about the opponent\'s personality because all the relevant alternatives are visible and small enough to inspect.',
        ],
      },
      {
        title: 'Leave the solved losing position',
        paragraphs: [
          'Return to four counters. Remove one, leaving three to your opponent. If they remove one, two remain for you; take both. If they remove two, one remains; take it. Removing two on your opening turn would instead leave the opponent two and an immediate win. The guarantee depends on these exact rules and your correct later move. If taking the last counter loses, or three counters can be removed, solve the game again. This small game demonstrates reasoning through alternatives, not control over real people or certainty in poorly specified situations.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'Both replies after you leave three',
      alt: 'From four counters, take one; either opponent reply leaves one or two counters for you to take and win.',
      caption: 'Exact toy-game rules: remove one or two, last counter wins. Both opponent branches end with your legal winning move.',
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
        'Write the exact rules and solve the positions with one and two counters remaining.',
        'Draw both legal moves from three and show why each lets the next player win.',
        'Start with four and trace both replies after removing one. Move the counters for each branch.',
        'Compare the alternative opening of removing two. If playing with someone, explain the pattern openly and use no stakes.',
      ],
      notice: 'Every possible reply to the chosen opening has a checked continuation, not just the expected reply.',
      troubleshooting: 'If a branch looks wrong, mark whose turn follows each removal before judging the position.',
    },
    recall: {
      prompt: 'Under the same rules, you start with seven counters. What opening leaves a losing position for the other player?',
      hint: 'Continue the one, two, three pattern to six.',
      answer: 'Take one and leave six. From six, the opponent leaves four or five; you can then leave three. The multiples of three are losing positions under correct play with these particular rules.',
    },
    quiz: {
      question: 'From four counters under the stated rules, which opening guarantees a win with correct later play?',
      options: [
        'Take two, because reducing the pile fastest always helps.',
        'Choose either move, because both leave a small pile.',
        'Take one, because both replies from three leave you a winning final move.',
      ],
      correctIndex: 2,
      explanation: 'Leaving three covers every legal reply. Taking two hands the opponent a pile they can remove immediately.',
    },
    takeaway: 'Solve terminal outcomes, then work backward through every legal reply that matters.',
    sourceNote: 'The game-theory reference provides the strategic framework. The four-counter solution is derived from stated rules and does not generalize to mind reading or interpersonal control.',
  },
  {
    id: 'observer-021',
    title: 'Use chance instead of a predictable pattern',
    outcome: 'Explain why a fresh equal-probability mix removes a fixed counter-move advantage in rock-paper-scissors.',
    scene: 'Two players openly agree to use hidden fair-die rolls before simultaneous rock-paper-scissors reveals.',
    sections: [
      {
        title: 'Always rock gives the other player an answer',
        paragraphs: [
          'In ordinary rock-paper-scissors, rock beats scissors, scissors beats paper, and paper beats rock. If you always choose rock, the other player can always choose paper. You do not need to study their face to avoid that pattern. In an agreed no-stakes practice version, a fair die chooses your move: faces one and two mean rock, three and four mean paper, five and six mean scissors. Roll before each round and reveal moves together. The other player knows this selection rule but does not see your roll before choosing.',
        ],
      },
      {
        title: 'Check all six possible faces',
        paragraphs: [
          'Suppose the other player commits to paper. Your die produces rock on two faces, so you lose on those two. It produces paper on two faces, giving ties, and scissors on two faces, giving wins. Each result therefore has probability two out of six, or one third. The same balance holds against a fixed rock or scissors choice. A mixed strategy is a rule that chooses among moves using probabilities. Here, no fixed counter-move has an advantage against your equal mix under the hidden-roll and simultaneous-reveal conditions.',
        ],
      },
      {
        title: 'Equal chances do not promise a balanced short run',
        paragraphs: [
          'A fresh independent roll means the next die result is not determined by the earlier ones. You can still roll rock several times and lose several rounds. Equal probabilities do not require a repeating rock, paper, scissors sequence; that sequence would become predictable. Nor does random choice guarantee a win in the next round. If the opponent sees the roll before choosing, they can counter the selected move and the analysis changes. Keep the exercise inside its openly agreed game rules rather than treating unpredictability as a way to manipulate everyday relationships.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Your die against a fixed paper move',
      alt: 'Two die faces lose to paper, two tie, and two win, giving equal probabilities.',
      caption: 'Enumerated possibilities, not results of six played rounds. Each fair die face has the same chance.',
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
        'Write the six die faces and assign two each to rock, paper, and scissors.',
        'Hold the opponent\'s move at paper and label each face win, tie, or loss.',
        'Repeat on paper for an opponent choosing rock. Check the same two-two-two count.',
        'If you play, agree on hidden fresh rolls and simultaneous reveals. Treat short-run results as outcomes, not a fairness proof.',
      ],
      notice: 'The balance comes from the complete set of equally likely faces, not from expecting every few rounds to balance.',
      troubleshooting: 'If one move appears on more faces, repair the mapping before using the equal-probability argument.',
    },
    recall: {
      prompt: 'Someone cycles rock, paper, scissors in that order and calls it random because each move appears equally often. What is missing?',
      hint: 'Equal totals and an unpredictable next move are different properties.',
      answer: 'The sequence reveals the next move once its pattern is known. A fresh independent random selection has equal probabilities without prescribing a fixed order, although repeats can still occur.',
    },
    quiz: {
      question: 'What does the agreed hidden fair-die method establish against a fixed opponent move?',
      options: [
        'The next three rounds must include one win, one tie, and one loss.',
        'Win, tie, and loss each have one-third probability on the next round.',
        'After two losses, a win is more likely because outcomes must balance.',
      ],
      correctIndex: 1,
      explanation: 'The mapping gives equal next-round probabilities. Short runs need not balance, and previous losses do not make a fresh independent roll compensate.',
    },
    takeaway: 'A random mix can remove an exploitable pattern under specified rules without guaranteeing individual wins.',
    sourceNote: 'Game theory and compound probability support the equal-mix calculation. This no-stakes exercise is not a strategy for predicting personalities or controlling relationships.',
  },
  {
    id: 'observer-022',
    title: 'Make the fallback plan shared, not merely sent',
    outcome: 'Resolve a coordination problem by agreeing on the same accessible place, time, and contact-failure plan.',
    scene: 'Two friends visit separate museum galleries and need a meeting plan that survives poor phone reception.',
    sections: [
      {
        title: 'Two sensible exits can still separate you',
        paragraphs: [
          'You and a friend split up to visit different museum galleries. The museum has a garden entrance and a street entrance. Each is a reasonable place to meet, but choosing one privately is not enough. If you choose the garden and your friend chooses the street, both choices can be sensible alone and fail together. This is a coordination problem: success depends on compatible choices. It differs from finding the single objectively best entrance. Even agreeing that the garden is pleasant does not establish that both people will wait there at a particular time.',
        ],
      },
      {
        title: 'Check the same plan reached both people',
        paragraphs: [
          'Before separating, propose the accessible bench inside the street entrance at three. Check that your friend can use that location and repeat the place and time in a shared note. Ask for confirmation, because sending a message does not establish that it arrived or was understood. Shared information means both people have the plan; coordination also benefits from knowing the other person received it. You do not need an endless chain of acknowledgments. A direct conversation and matching written summary can resolve the practical ambiguity before phone reception becomes uncertain.',
        ],
      },
      {
        title: 'Agree on what happens when contact fails',
        paragraphs: [
          'In this fictional plan, both friends agree to use that bench at three if messages fail, rather than independently switching entrances. If the area becomes unavailable, their agreed alternative is the staffed information desk. That fallback must also be accessible and understood by both. The plan is a tool for a routine outing, not an obligation to stay somewhere unsafe or ignore changing needs. If circumstances change, communicate when possible and use appropriate local help. The point is to replace guesses about another person\'s likely move with information both can act on.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'A museum plan both people can repeat',
      alt: 'Two friends confirm the street-entrance bench at three and the information desk if the bench area is unavailable.',
      caption: 'Fictional agreed plan. A place preference alone would not create this shared commitment.',
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
        'Use a fictional museum with two entrances. Write one place and time for meeting.',
        'Add a question checking that the location is accessible and acceptable to both people.',
        'Write a contact-failure rule and one fallback if the location is unavailable.',
        'Draft the other person\'s confirmation in your fictional example. For a real outing, obtain their actual agreement instead.',
      ],
      notice: 'The plan contains compatible actions, not two private guesses about an obvious landmark.',
      troubleshooting: 'If it says meet at the usual place, name the exact place before treating it as shared.',
    },
    recall: {
      prompt: 'Two collaborators each edit a different copy of a poster because both assume theirs is the shared version. What agreement would help?',
      hint: 'Match the working location and confirm receipt of the choice.',
      answer: 'Agree on one named shared file and how updates will be coordinated, then confirm both people can access it. Merely sending a link or choosing the newer-looking copy privately does not establish a shared working plan.',
    },
    quiz: {
      question: 'You sent a meeting-point update but received no acknowledgment. What is the information gap?',
      options: [
        'The chosen meeting point must be objectively worse than the old one.',
        'You do not yet know whether the other person received and accepted the changed plan.',
        'The other person now knows the update because sending and receiving are equivalent.',
      ],
      correctIndex: 1,
      explanation: 'Transmission alone does not establish shared understanding. The issue is agreement about the update, not whether the place seems reasonable to one person.',
    },
    takeaway: 'When success depends on matching choices, confirm the shared plan before separating.',
    sourceNote: 'Game theory frames coordination problems. The museum plan is an original everyday example, not a guarantee of contact or a formal common-knowledge protocol.',
  },
  {
    id: 'observer-023',
    title: 'Give no a workable branch',
    outcome: 'Plan a voluntary request with clear effort, an uncertainty branch, and a fallback that does not punish refusal.',
    scene: 'A club organizer asks for help carrying art-display boards and prepares a smaller display if help is unavailable.',
    sections: [
      {
        title: 'The event depends on a favor',
        paragraphs: [
          'You want a friend to help transport lightweight display boards to a club event. Your plan currently says ask friend, carry boards, set up display. That sequence hides a dependency: the friend has not agreed. It also hides the effort if you have not stated the number of boards, travel, and expected time. A request is voluntary only if declining remains a real option. The planning problem is yours to solve; it should not become a puzzle about how to make the other person unable to say no.',
        ],
      },
      {
        title: 'Draw agreement, uncertainty, and refusal',
        paragraphs: [
          'A decision tree is a sketch of possible next events and the actions you control after each one. Give this request three branches. If the friend agrees, confirm the task and let them raise limits. If they are unsure, agree on a reply time that suits them while keeping your fallback ready. If they decline, reduce the display or ask another willing helper with the same clear description. Do not label the branches loyal, unreliable, and unhelpful. They describe availability for a task, not the meaning of the friendship.',
        ],
      },
      {
        title: 'Test whether the fallback is real',
        paragraphs: [
          'In the worked plan, no help means using the smaller set of boards you can carry comfortably without strain. That is a change to your event, not a cost imposed on the friend. The uncertainty branch does not secretly become repeated reminders until they give in. A genuine fallback can also be postponement when reducing the task is unsuitable. Agreement now does not remove the possibility that circumstances change later. Keeping alternatives available makes it easier to respond to withdrawal without turning an ordinary favor into an obligation the person did not accept.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'Three replies to the display request',
      alt: 'A clear request branches into yes with agreed limits, unsure with a reply time, and no with a smaller display.',
      caption: 'Fictional planning tree. Each branch changes the organizer\'s plan without judging the friend.',
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
        'Use the fictional display request and write the effort and timing the helper would need to know.',
        'Draw yes, unsure, and no branches. Put an action you control under each.',
        'Check the no branch for pressure, guilt, hidden costs, or repeated requests. Replace these with a smaller plan.',
        'Add a fallback for changed availability after an initial yes. Do not send a real request just to test someone.',
      ],
      notice: 'The plan still works, or scales down clearly, when the other person declines.',
      troubleshooting: 'If no leads to event impossible, consider reducing, postponing, or seeking a different willing arrangement.',
    },
    recall: {
      prompt: 'You want a friend to review a long portfolio this weekend, but they are unsure. How would you preserve a genuine choice?',
      hint: 'Clarify the workload and prepare a plan that does not depend on wearing down uncertainty.',
      answer: 'State what reviewing involves, offer a smaller optional scope, and agree on a reply time only if they want one. Prepare self-review or another willing reviewer as the fallback, without treating refusal as disloyalty.',
    },
    quiz: {
      question: 'A volunteer declines a transport request. Which fallback preserves the voluntary nature of the request?',
      options: [
        'Ask again with the same workload because the event still needs help.',
        'Mark them as the helper for now and let them correct the plan later.',
        'Reduce the materials or seek another willing helper without penalizing the refusal.',
      ],
      correctIndex: 2,
      explanation: 'A real alternative lets no remain no. Repetition or assigning the role before agreement moves the burden back onto the person who declined.',
    },
    takeaway: 'A voluntary request needs a practical plan for refusal, not just polite wording.',
    sourceNote: 'Consent guidance and game-tree reasoning inform this ethical planning framework. The display example does not claim to predict or influence someone\'s emotions.',
  },
  {
    id: 'observer-024',
    title: 'Check whether both people can gain',
    outcome: 'Map joint task outcomes before treating a shared activity as a contest.',
    scene: 'Two repair-club volunteers must cover a welcome desk and prepare tool trays.',
    sections: [
      {
        title: 'Winning the preferred job can lose the shared result',
        paragraphs: [
          'Two volunteers are opening a repair-club session. Someone must cover the welcome desk and someone must prepare the tool trays. In this toy setup, either volunteer could do either task, but both tasks need coverage. If each independently chooses the welcome desk because it seems more visible, the trays remain unprepared. Both could feel they chose a useful role while the shared opening still fails. Before treating the roles as a contest for credit, ask what outcome each person wants and what constraints each needs respected.',
        ],
      },
      {
        title: 'Show every combination, not just your own choice',
        paragraphs: [
          'A payoff is the value someone gives an outcome; it is not necessarily money or points. Do not invent numerical payoffs for real people. Here both volunteers say they want the session ready, so sketch the four role combinations in words. Both at welcome leaves trays undone. Both at trays leaves welcome uncovered. Splitting the roles covers both tasks, whichever person takes which role. A zero-sum model means one person\'s gain is exactly another\'s loss. This shared task need not have that structure because both can benefit from a successful opening.',
        ],
      },
      {
        title: 'Use the map to negotiate a workable division',
        paragraphs: [
          'The four-cell map identifies two arrangements that cover the work, but it does not decide which is acceptable. One volunteer may need a seated role; another may be unfamiliar with the tools. Ask about willingness and access before assigning anything. Perhaps one prepares trays with a short orientation while the other takes the seated welcome position. If neither can safely cover a task, change the session plan rather than forcing the model to declare a winner. The map clarifies joint outcomes; the people still choose whether and how they participate.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Two volunteers, two roles',
      alt: 'Four combinations cross each volunteer\'s choice of welcome desk or tool trays.',
      caption: 'Toy task outcomes, not invented personal scores. The split-role cells cover both jobs.',
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
        'Draw a two-by-two grid with welcome and trays as the two choices for each fictional volunteer.',
        'Write which jobs are covered in all four cells, without scoring anyone\'s worth or motivation.',
        'Circle the two cells that cover both tasks. Add a question about willingness and access before choosing one.',
        'Write a fallback if a task cannot be covered safely or voluntarily, such as reducing the opening activities.',
      ],
      notice: 'You distinguish joint task success from personal credit and from whether a division is acceptable.',
      troubleshooting: 'If a cell says winner, replace it with the concrete jobs completed or left uncovered.',
    },
    recall: {
      prompt: 'Two friends preparing a film screening both start arranging chairs, leaving subtitles unchecked. How could this model help?',
      hint: 'Map the two jobs and ask which outcomes and roles both people accept.',
      answer: 'Show that duplicated chair work leaves subtitle checking uncovered, while a split can complete both. Confirm skills, access, and willingness before dividing roles; neither person needs to lose for the screening to improve.',
    },
    quiz: {
      question: 'Before treating two colleagues\' task choices as a competition, what should you establish?',
      options: [
        'Which outcomes they value and whether compatible choices could benefit both.',
        'Which person chooses first, so that choice can be treated as the winning one.',
        'Which role appears more prestigious, without asking either colleague.',
      ],
      correctIndex: 0,
      explanation: 'Task structure and expressed preferences determine the useful model. Order of choice and guessed prestige do not establish a zero-sum contest.',
    },
    takeaway: 'Model the joint outcome and stated preferences before importing a win-or-lose story.',
    sourceNote: 'The game-theory reference explains strategic outcomes. This simplified role grid is a discussion aid, not a measurement of anyone\'s real preferences.',
  },
  {
    id: 'observer-025',
    title: 'Remembering a fact is not remembering its source',
    outcome: 'Label how a remembered detail was learned and check the current source before passing it on.',
    scene: 'A neighborhood gardening talk is remembered as starting at six, but the current notice says half past six.',
    sections: [
      {
        title: 'Six sounds familiar',
        paragraphs: [
          'A neighbor asks when the gardening talk starts. Six comes to mind immediately. You can picture a green poster, but you also remember a friend mentioning the event and attending a similar talk last year. The time feels familiar without its origin being clear. If you answer that the current poster says six, you have added a source claim you cannot support. Two separate questions need attention: what detail do you remember, and where did that detail come from? Knowing the first does not guarantee you know the second.',
        ],
      },
      {
        title: 'Give the origin an honest label',
        paragraphs: [
          'Source monitoring means evaluating where remembered information came from. A detail may have been seen, heard from someone, inferred from a routine, or learned in an earlier setting. You can remember the content while mixing up that origin. Write remembered time: six; source uncertain. That is more useful than forcing a choice between poster and friend. It preserves both what came to mind and the gap that still needs checking. Even a confident source label can be mistaken, so a dated external record is useful when the distinction affects someone\'s plans.',
        ],
      },
      {
        title: 'Check the event, date, and version',
        paragraphs: [
          'You open the current public notice and match the talk title, venue, and date. It says half past six. Now your message can say the current notice lists half past six, with the relevant link or dated note. Do not claim you have discovered exactly where the earlier six came from; last year\'s event remains a possibility, not a recovered fact. If you had found an old poster, its clear wording would still answer the wrong event. Verification means checking that the source applies now, not merely finding something that resembles the memory.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'A familiar time and a checked notice',
      alt: 'The remembered time is six with uncertain origin; the matching current gardening-talk notice says half past six.',
      caption: 'Fictional event. Checking the current notice does not establish the origin of the earlier memory.',
      items: [
        { label: 'Remembered: six', detail: 'Poster, friend, or earlier talk? Source uncertain.' },
        { label: 'Checked: half past six', detail: 'Current notice; title, venue, and date matched.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen', 'An optional current public event notice'],
      steps: [
        'Use the fictional talk, or choose one nonprivate event detail you are about to share.',
        'Write the remembered detail and label its origin seen, heard, inferred, or source uncertain.',
        'For the fictional case, use the current-notice result above. For a real case, match title and date before checking the detail.',
        'Draft a message that names the checked source without pretending to know where an uncertain earlier memory originated.',
      ],
      notice: 'Your message distinguishes remembered content from the record that now supports it.',
      troubleshooting: 'If you cannot access a current source, keep the uncertainty in the message instead of filling it.',
    },
    recall: {
      prompt: 'You remember that a drawing workshop includes materials, but cannot recall whether you read it or assumed it from the price. What should you say?',
      hint: 'The origin matters before someone relies on the claim.',
      answer: 'Say you remember or assumed materials were included but have not verified that detail. Check the current workshop listing or ask the organizer before presenting it as something the listing explicitly states.',
    },
    quiz: {
      question: 'A familiar return-policy detail might come from an old purchase. Which statement is accurate before checking?',
      options: [
        'The current shop policy includes it because the detail is easy to recall.',
        'I read it on the latest receipt, although I cannot remember doing so.',
        'I remember the detail, but its source and current applicability need checking.',
      ],
      correctIndex: 2,
      explanation: 'The last statement preserves the source gap. Familiarity cannot establish either the original record or whether the policy still applies.',
    },
    takeaway: 'Keep a remembered detail, its remembered origin, and its current verification separate.',
    sourceNote: 'OpenStax and Noba describe reconstructive memory and source errors. The gardening-talk example is original and does not imply that source labels are infallible.',
  },
  {
    id: 'observer-026',
    title: 'A picture in your mind can remain a search guess',
    outcome: 'Use an imagined location as a possibility without promoting its familiarity into a remembered event.',
    scene: 'A missing library book is imagined on a kitchen chair but later found in a tote bag.',
    sections: [
      {
        title: 'The chair starts to feel familiar',
        paragraphs: [
          'You cannot find your library book. You imagine leaving it on a kitchen chair while putting away groceries. After returning to that picture several times, the chair begins to feel like the remembered answer. Yet the picture began as a guess. Repeating it made it more familiar without adding an observation of the book. You can still search the chair; you do not need to believe the imagined placement happened in order to check a plausible location. The distinction matters when you later describe what you actually remember.',
        ],
      },
      {
        title: 'Familiarity does not carry an origin label',
        paragraphs: [
          'Memory can combine remembered details, expectations, and information introduced later. An imagined scene can borrow real pieces, such as your kitchen and groceries, while adding an unverified action. Its vividness tells you how easily you can picture it, not whether that action occurred. Label the chair image imagined possibility. Keep remembered context, such as carrying the tote home, on a different line. This does not mean every vivid recollection is false. It means vividness alone cannot distinguish a genuine memory from a familiar construction in this particular search.',
        ],
      },
      {
        title: 'Let the search result stay in the present',
        paragraphs: [
          'In the fictional example, the chair is empty and the book is in your tote. Record found in tote now. That result does not prove the book was never on the chair earlier, nor does it establish who moved it or the exact sequence of events. You have solved the practical problem without manufacturing a history. Avoid repeated visualization or pressure intended to recover hidden events. This exercise concerns ordinary misplaced objects, not upsetting personal memories. If the search is unnecessary or uncomfortable, use the paper example and stop after separating the labels.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'A search possibility is checked, not promoted',
      alt: 'An imagined chair location leads to a search; the book is found in a tote, without proving its earlier route.',
      caption: 'Fictional sequence. The verified result concerns where the book is now, not the origin of the imagined scene.',
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
        'Copy three fictional statements: carried a tote home; imagined the book on a chair; found it in the tote.',
        'Label them remembered context, imagined possibility, and current checked result.',
        'Write a search plan using the chair guess without describing the guessed placement as an event.',
        'Add one earlier-history claim the final discovery does not prove. Do not repeatedly imagine the scene as a test.',
      ],
      notice: 'You can use a possibility to guide action while leaving its status as a guess intact.',
      troubleshooting: 'If a sentence says I must have, replace it with a possibility or the narrower checked result.',
    },
    recall: {
      prompt: 'You picture putting a spare battery in a camera pouch after someone suggests that location. How should you use the image?',
      hint: 'The suggestion supplies a search candidate, not an observation of the past.',
      answer: 'Check the pouch if it is yours and safe to inspect, while labeling the image as a suggested possibility. Finding the battery there establishes its present location, not the exact action or moment you imagined.',
    },
    quiz: {
      question: 'A guessed location becomes easier to picture after repetition. What has that repetition established?',
      options: [
        'The object was placed there, even if it has since moved.',
        'The image feels more familiar; the placement still needs evidence.',
        'The guess is now independent confirmation of the original possibility.',
      ],
      correctIndex: 1,
      explanation: 'Repetition can increase familiarity without adding evidence. It is neither a record of placement nor a second independent source.',
    },
    takeaway: 'An imagined scene can suggest where to look without becoming a claimed memory.',
    sourceNote: 'Noba and OpenStax discuss reconstruction, suggestion, and false memories. This object-search example is not a procedure for recovering personal memories.',
  },
  {
    id: 'observer-027',
    title: 'Keep the uncertainty you had before feedback',
    outcome: 'Preserve an initial recollection and its confidence separately from later agreement or correction.',
    scene: 'A picnic tablecloth is tentatively remembered as blue before a friend agrees and a photograph shows green.',
    sections: [
      {
        title: 'Agreement changes how the memory feels',
        paragraphs: [
          'After a picnic, you think the tablecloth was blue, but you are not sure. A friend agrees, and you repeat the story later as a clear memory of blue. The detail in your account may be the same, but its reported confidence has changed. If your note now says certain of blue and erases the original hesitation, a reader cannot see that feedback arrived between the two reports. Confidence is how sure you feel or say you are. It is not the same thing as an additional observation of the cloth.',
        ],
      },
      {
        title: 'Write the first state before checking',
        paragraphs: [
          'Research on memory shows that confirming feedback can affect reported confidence. For a harmless recall task, write both the detail and uncertainty before looking at an original or hearing another account. In this fictional record, the first line is perhaps blue, unsure. The second line says friend agreed after hearing my answer; I now feel more certain. That timing matters because the friend\'s agreement may not be independent of your suggestion. Low initial confidence does not prove the memory wrong, and high later confidence does not by itself make it accurate.',
        ],
      },
      {
        title: 'Attach the check instead of rewriting the beginning',
        paragraphs: [
          'Suppose an authorized photo clearly shows a green tablecloth in this example. Add the photo result and correct the practical description, while keeping the earlier sequence if the history matters. The photo does not need to explain why blue came to mind. If the image were poorly lit or ambiguous, it would not settle the color so neatly; checking a record includes checking whether it can answer the question. You are preserving what information was available at each stage, not arranging a test to make a friend doubt their memory.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Confidence changes before the color is checked',
      alt: 'An unsure blue recollection becomes more confident after agreement, then a clear photo supplies a green correction.',
      caption: 'Fictional ordered events, not a time scale. Feedback and the later photograph are different information sources.',
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
        'Arrange three objects on a table and inspect their order briefly without photographing other people or private material.',
        'Turn away and write their order, marking each uncertain detail before checking.',
        'Look back at the unchanged arrangement. Add corrections on a separate line rather than erasing the first answer.',
        'Write which statements came before the check and which came from looking again. Do not ask someone to supply misleading feedback.',
      ],
      notice: 'The record preserves your first answer even if the check changes your confidence or description.',
      troubleshooting: 'If you already checked, label the first confidence as unrecorded rather than reconstructing it afterward.',
    },
    recall: {
      prompt: 'You tentatively remember a song opening with drums. After reading a review, you sound certain. What should a useful note preserve?',
      hint: 'The review arrived between the first recollection and later confidence.',
      answer: 'Record the initial unsure drum memory and that the review was read before confidence increased. Replaying an authorized recording could check the opening, but the later certainty should not replace the earlier state.',
    },
    quiz: {
      question: 'Which note best preserves a recollection changed by agreement?',
      options: [
        'Initially unsure of blue; felt more certain after a friend agreed with my account.',
        'Definitely blue, because the uncertainty no longer feels important.',
        'Blue independently confirmed, although the friend only responded after hearing my answer.',
      ],
      correctIndex: 0,
      explanation: 'The first note keeps timing and confidence visible. Later agreement does not automatically count as an independent memory check.',
    },
    takeaway: 'Record initial uncertainty before feedback, then add later information without rewriting the earlier state.',
    sourceNote: 'Memory references discuss feedback and confidence effects. The picnic is fictional; the practice preserves records without claiming confidence never relates to accuracy.',
  },
  {
    id: 'observer-028',
    title: 'Recall separately before comparing accounts',
    outcome: 'Preserve what each willing person recalled before discussion adds shared information.',
    scene: 'Two friends remember different details of a pottery demonstration before discussing the tools.',
    sections: [
      {
        title: 'The same word appears after discussion',
        paragraphs: [
          'Two friends watch a pottery demonstration. One remembers a wooden shaping tool; the other remembers a metal loop but is unsure about the remaining tools. During conversation, the first friend describes the wooden tool in detail. Later, both mention it. That agreement might reflect two original observations, information shared during the discussion, or a mixture. Without an earlier record, you cannot tell just by counting matching later accounts. Neither person needs to be misleading anyone for a discussion to change the information available during later recall.',
        ],
      },
      {
        title: 'Preserve the accounts before they mix',
        paragraphs: [
          'Memory conformity means that one person\'s report can influence another person\'s later report of an event. For a low-stakes reconstruction, invite willing people to write short separate notes before comparing them. Each can leave gaps and decline to share details. Independence here concerns the information available when the notes were made; it does not guarantee accuracy. Both people could miss the same thing or share earlier expectations. The separate notes are valuable because they preserve provenance, meaning where a particular detail entered the record.',
        ],
      },
      {
        title: 'Label additions instead of voting memories true',
        paragraphs: [
          'In our example, note A says wooden tool, note B says metal loop; other tools uncertain. After comparison, B can add learned from A: wooden tool. That is more transparent than rewriting B\'s original note to include it. If a public demonstration guide identifies the tools, check whether it describes this actual session rather than a standard kit. Without a suitable record, leave the extra detail unresolved. This method is for ordinary shared learning, not amateur investigation, ranking people by memory, or treating disagreement as evidence about loyalty or honesty.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'When the wooden-tool detail entered each account',
      alt: 'Before discussion, A recalls a wooden tool while B recalls a metal loop; after discussion B attributes the wooden detail to A.',
      caption: 'Fictional accounts. The first two notes are separate, not successive observations by one person.',
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
        'Copy the fictional A and B notes on separate parts of a page, including B\'s uncertainty.',
        'Draw a line marking the start of their discussion.',
        'Below the line, add the wooden-tool detail to B\'s account with learned from A as its source.',
        'Write one thing the two later matching accounts do not establish. Keep the original notes unchanged.',
      ],
      notice: 'A reader can tell which detail was recalled separately and which arrived through conversation.',
      troubleshooting: 'If the final account erases gaps, restore them and label later additions explicitly.',
    },
    recall: {
      prompt: 'Three friends discuss a short film, then all remember an opening train sound. How could separate notes have helped?',
      hint: 'Agreement after discussion is not necessarily three independent recollections.',
      answer: 'Notes written before comparison would show who recalled the sound before hearing others. A later shared claim could then be labeled as original recall or discussion-supplied information, and checked against the film if available.',
    },
    quiz: {
      question: 'Why ask willing participants for separate short notes before comparing an ordinary event?',
      options: [
        'To guarantee that each note contains an accurate independent account.',
        'To preserve what each person reported before hearing the others.',
        'To make a majority vote a reliable substitute for checking the event.',
      ],
      correctIndex: 1,
      explanation: 'Separate notes preserve the information history. They neither guarantee accuracy nor turn the most common account into verified fact.',
    },
    takeaway: 'Keep independent recollections before discussion, and attribute details added afterward.',
    sourceNote: 'Noba reviews social influences on memory. The pottery accounts are invented; separate notes preserve provenance but cannot certify an account as accurate.',
  },
  {
    id: 'observer-029',
    title: 'Let context suggest a place to check',
    outcome: 'Use known routine details as retrieval cues without treating a newly prompted image as confirmation.',
    scene: 'A compact umbrella is missing after a grocery trip that involved a tote and a hallway shelf.',
    sections: [
      {
        title: 'Retrace the task, not an invented movie',
        paragraphs: [
          'Your compact umbrella is missing after a grocery trip. You remember carrying a tote and stopping at the hallway shelf to put down the shopping. Those are useful starting details. You do not remember putting the umbrella on that shelf. Instead of constructing a complete scene and rehearsing it until it feels right, ask which locations the known routine suggests checking. The tote pocket and shelf are search candidates because they connect with the task, not because their appearance in your imagination proves you used them for the umbrella.',
        ],
      },
      {
        title: 'A cue prompts recall without certifying it',
        paragraphs: [
          'A retrieval cue is something that helps bring information to mind. A familiar room, task, or object can serve as a cue because it was connected with the activity you are trying to remember. Returning attention to that context may suggest a detail or a next place to search. It does not attach a certificate of accuracy to whatever appears. Keep three labels: remembered context, possible location, and checked result. The labels let you use the suggestion without mixing it with the parts you already recalled before retracing the routine.',
        ],
      },
      {
        title: 'Use one cue, then make a concrete check',
        paragraphs: [
          'In the example, remembering the tote prompts you to check its side pocket, where the umbrella is found. The current result resolves the search. It does not establish the exact moment you put the umbrella there or exclude an earlier stop on the shelf. If the pocket is empty, note that and check the next safe, authorized candidate rather than intensifying the mental scene. Keep this exercise to ordinary items and routines. Essential appointments and instructions are better checked against current records, and distressing personal memories are outside this practice.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'From grocery context to an umbrella check',
      alt: 'Remembered tote use suggests its side pocket, where the umbrella is checked and found now.',
      caption: 'Fictional search. The cue creates a candidate; only inspection establishes the current location.',
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
        'Use the fictional umbrella search. Write only the two remembered context details from the story.',
        'List the tote pocket and hallway shelf as possible locations, not confirmed placements.',
        'Add the supplied result: umbrella found in tote pocket. Label it as a current check.',
        'Write one sentence that describes the useful role of the cue without claiming it proved the past.',
      ],
      notice: 'Your chain goes from known context to candidate to check, without skipping the uncertainty label.',
      troubleshooting: 'If retracing produces a detailed new scene, mark its additions tentative instead of adding them to known context.',
    },
    recall: {
      prompt: 'Returning to your drawing desk reminds you of a possible place for a missing eraser. What should happen next?',
      hint: 'The room supplied a cue, not a verified history.',
      answer: 'Check the suggested location if it is yours and safe to inspect. Record what you find now, while keeping any newly prompted placement image tentative. The strength of the reminder does not establish the earlier event.',
    },
    quiz: {
      question: 'A familiar room makes an object location come to mind. What is the most accurate next step?',
      options: [
        'Record the location as remembered fact because the room triggered it.',
        'Repeat the scene until it is clear enough to count as confirmation.',
        'Check the location and keep the prompted detail tentative until supported.',
      ],
      correctIndex: 2,
      explanation: 'Context can help generate a candidate, but verification still requires checking. Repetition and familiarity do not replace evidence.',
    },
    takeaway: 'Use context to guide a check, not to certify the memory it prompts.',
    sourceNote: 'Memory references discuss retrieval cues and reconstruction. The umbrella search is a practical framework, not a memory-recovery technique or guaranteed recall aid.',
  },
  {
    id: 'observer-030',
    title: 'Give a short list three familiar places',
    outcome: 'Build and check a three-stop memory route for material you deliberately want to learn.',
    scene: 'A familiar home route cues stamps, oats, and a library-book return without claiming those objects were physically there.',
    sections: [
      {
        title: 'Three errands without an ordered cue',
        paragraphs: [
          'You want to remember three errands: buy stamps, buy oats, and return a library book. Reading the list repeatedly leaves the items familiar, but you still need a way to bring each one back when you are out. Choose a route you already know with three distinct stops, such as the front gate, hallway mirror, and kitchen sink. The route supplies an order you do not have to learn from scratch. Keep the written list as the reference; the exercise is intentional learning, not a test of whether you can avoid using notes.',
        ],
      },
      {
        title: 'Attach one deliberate cue to each stop',
        paragraphs: [
          'Imagine a sheet of stamps covering the gate, a box of oats beside the mirror, and the library book balanced above the empty sink. These are invented associations, not memories of real placements. The method of loci uses locations as retrieval cues; loci simply means places. Visit the same stops in the same order and ask which errand each was assigned. The image need not be elaborate. If mental pictures are not useful for you, write or say the location-item pairs and try whether the ordered route still provides a workable cue.',
        ],
      },
      {
        title: 'Check omissions and wrong associations',
        paragraphs: [
          'Cover the list, mentally move from gate to mirror to sink, and write the three recalled errands. Then compare with the original. If oats disappears, strengthen that specific pair or choose a more distinct second stop rather than rebuilding everything. If the sink makes you think wash dishes, return to the intended library-book association. A mnemonic is an organizing aid, not photographic memory or proof that an event happened. Use external instructions whenever an omission could matter for safety, and keep the errands written down if maintaining the route becomes the harder task.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Gate, mirror, sink: the intended route',
      alt: 'Three familiar locations in route order cue stamps, oats, and a library-book return.',
      caption: 'Schematic imagined route, not a floor plan or actual object placements. One intended item belongs to each stop.',
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
        'Write three harmless errands and choose three distinct stops on a familiar route. Use the sample errands if preferred.',
        'Assign one errand to each stop with a short imagined, spoken, or written association.',
        'Cover the list and mentally visit the stops in order. Write whichever errands you recall, leaving gaps visible.',
        'Compare with the original list and repair one confusing pair. Keep the reference list for the real errands.',
      ],
      notice: 'Each location prompts an intended item that can be checked against the original list.',
      troubleshooting: 'If two stops blur together, choose locations that differ clearly or use an ordinary written checklist instead.',
    },
    recall: {
      prompt: 'You attach three speech points to a familiar route, but the second stop cues yesterday\'s shopping. What should you check?',
      hint: 'A retrieved item can be real learning from the wrong list.',
      answer: 'Compare the second cue with the intended speech outline and repair or replace the conflicting association. The route should retrieve the current material; a vivid old item is not evidence it belongs in the speech.',
    },
    quiz: {
      question: 'The imagined gate brings stamps to mind. What does that establish within this exercise?',
      options: [
        'The gate is functioning as an intentionally assigned retrieval cue.',
        'The stamps were physically left at the gate earlier.',
        'The stamps cannot be forgotten later because the image is vivid.',
      ],
      correctIndex: 0,
      explanation: 'The cue helps retrieve a deliberate association. It does not record a past placement or guarantee future recall.',
    },
    takeaway: 'Use a familiar route to organize intentional learning, then check what it retrieves.',
    sourceNote: 'The inherited memory reference discusses mnemonic methods; rhetoric is background, not evidence for this exact route. The errands exercise is original and offers no guaranteed recall effect.',
  },
  {
    id: 'observer-031',
    title: 'Check which list a remembered item belongs to',
    outcome: 'Recognize an old-list intrusion and separate competing memory cues without assuming old associations are erased.',
    scene: 'A home-doorway cue returns yesterday\'s envelopes instead of batteries for today\'s sketching trip.',
    sections: [
      {
        title: 'The doorway supplies the wrong item',
        paragraphs: [
          'Yesterday, your memory route put envelopes at the doorway for a shopping trip. Today, you reuse that doorway for batteries needed on a sketching outing. When you rehearse, envelopes come back immediately. The cue has retrieved something you learned, but from the wrong list. Easy recall is not the same as correct list membership. If you accept every familiar item without checking its task, the completed list can feel fluent while still omitting something you intended to bring. The original written list tells you which association belongs to today.',
        ],
      },
      {
        title: 'Older learning can compete with newer learning',
        paragraphs: [
          'Interference means that learning can make other material harder to retrieve accurately. When an older association intrudes on a newer task, it is often called proactive interference: the old learning affects what comes next. You do not need the term to diagnose your own memory; here it names a possible mechanism illustrated by the envelopes. The doorway was assigned two meanings, and one remains available. Repeating the mixed list without checking it can make the error more familiar. Simply declaring the old route retired does not erase the earlier association.',
        ],
      },
      {
        title: 'Separate the task cues and verify the result',
        paragraphs: [
          'Keep the old home route labeled shopping. For the sketching list, use a distinct studio route: hook for batteries, workbench for sketchbook, windowsill for the entry pass. Check each recalled item against today\'s written list and mark any old-list intrusion. Distinct routes and task labels are practical ways to reduce cue confusion, not a promise of unlimited memory storage. If the routes are harder to manage than the supplies, use the written packing list directly. The goal is bringing the right items, not proving that a mnemonic must work for every person or every task.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Yesterday\'s doorway and today\'s studio route',
      alt: 'The old shopping cue pairs the doorway with envelopes; the distinct sketching route pairs hook, workbench, and windowsill with current items.',
      caption: 'Fictional intentional associations. Separate cues do not erase the older list; membership still needs checking.',
      items: [
        { label: 'Shopping: home route', detail: 'Doorway cues envelopes. Keep this association labeled as the older shopping task.' },
        { label: 'Sketching: studio route', detail: 'Hook: batteries. Workbench: sketchbook. Windowsill: entry pass.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write yesterday\'s fictional doorway-envelope pair and today\'s intended list: batteries, sketchbook, entry pass.',
        'Mark envelopes as an old-list intrusion when it appears in the current recall. Do not add it to the intended list.',
        'Assign today\'s three items to hook, workbench, and windowsill, or three distinct familiar stops of your own.',
        'Recall the current list once and compare with the reference. If cues remain confusing, keep the written list instead.',
      ],
      notice: 'You check whether each item belongs to the current task, not just whether you remember it.',
      troubleshooting: 'If a stop still retrieves two items, label the task more clearly, change the stop, or abandon the route.',
    },
    recall: {
      prompt: 'While preparing a new talk, your old opening example keeps appearing at the first memory-route stop. How would you handle it?',
      hint: 'Verify the current outline before rehearsing the intrusion.',
      answer: 'Check the intended opening, label the old example as belonging to the earlier talk, and separate or replace the cue. A current outline can serve directly if managing multiple routes adds unnecessary work.',
    },
    quiz: {
      question: 'An old shopping item appears during recall of a new packing list. Which response addresses the actual problem?',
      options: [
        'Check its list membership and separate the competing cues if useful.',
        'Treat its quick arrival as evidence that the new list included it.',
        'Declare the old list erased and continue without checking the reference.',
      ],
      correctIndex: 0,
      explanation: 'The problem is a competing association from another task. Familiarity and a decision to retire a route do not establish current membership.',
    },
    takeaway: 'A readily recalled item can belong to the wrong task. Verify membership as well as recall.',
    sourceNote: 'OpenStax discusses interference and memory methods. Distinct routes and labels are practical suggestions here, not a tested recipe for unlimited or error-free recall.',
  },
  {
    id: 'observer-032',
    title: 'Do not polish a remembered gist into a quotation',
    outcome: 'Distinguish a remembered summary, an authorized exact record, and a newly confirmed agreement.',
    scene: 'A friend\'s conditional offer to check film subtitles is remembered as a definite Friday commitment.',
    sections: [
      {
        title: 'The condition disappears from the summary',
        paragraphs: [
          'You remember a friend agreeing to check subtitles for your short film by Friday. When planning the screening, you type a neat quotation saying they promised to finish them. But you do not remember the exact words. There may have been a condition about receiving the final edit first. Gist is the general meaning you retain from an exchange. It can be useful for remembering what the conversation concerned while omitting wording, uncertainty, or conditions that matter when another person\'s commitment is being described.',
        ],
      },
      {
        title: 'A quotation claims more than a paraphrase',
        paragraphs: [
          'A paraphrase gives the meaning in your own words. A quotation presents particular words as the speaker\'s actual wording. If you remember only the gist, label the note as a remembered summary and mark the missing condition. Do not add quotation marks just because the reconstructed sentence sounds natural. Memory does not preserve every exchange like a recording. An authorized contemporaneous message, meaning one written at the time, can check wording if it is the relevant exchange. A later summary copied from your memory is not an independent exact record.',
        ],
      },
      {
        title: 'Confirm the present without rewriting the past',
        paragraphs: [
          'In the fictional message thread, the earlier offer is to check timing if the final edit arrives first. You can use that record to correct your plan. If no such record exists, ask whether your friend can now review the current version by Friday. A fresh yes establishes a current agreement, not proof of the words spoken earlier. Record the version, task, and deadline actually agreed now, including remaining conditions. You do not need secret recordings or a debate about who remembers better to make the next shared action clear.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Three different kinds of subtitle information',
      alt: 'A remembered summary is checked against an earlier conditional message, then a new current commitment is confirmed.',
      caption: 'Fictional records in reading order, not a duration scale. A new agreement does not prove earlier wording.',
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
        'Write a fictional remembered summary: I think my friend offered subtitle help by Friday.',
        'Mark exact wording and conditions as uncertain. Do not place the remembered sentence in quotation marks.',
        'Draft a current clarification asking about the version, task, and deadline without claiming an earlier promise.',
        'Add a hypothetical new agreement on a separate line, labeled agreed now rather than proof of earlier wording.',
      ],
      notice: 'Your note separates what you remember from what is recorded and what is agreed now.',
      troubleshooting: 'If a polished sentence looks verbatim, remove quotation marks unless an authorized exact record supports it.',
    },
    recall: {
      prompt: 'You remember a sibling offering a lift, possibly depending on their work finish time. What should your planning message say?',
      hint: 'Ask about the current arrangement without presenting the uncertain gist as a promise.',
      answer: 'Say you remember discussing a possible lift and ask whether it now works given their finish time. Record the current answer and conditions. A new confirmation cannot establish every word or condition of the earlier conversation.',
    },
    quiz: {
      question: 'A colleague confirms today that they can help on Friday. What does that establish?',
      options: [
        'Your remembered quotation from last week was exact.',
        'The earlier conversation contained no conditions you forgot.',
        'A current agreement, without settling the earlier wording.',
      ],
      correctIndex: 2,
      explanation: 'The new answer supplies present information. It does not retroactively turn a paraphrase into an exact record or remove earlier uncertainty.',
    },
    takeaway: 'Label gist as gist, quote only supported wording, and keep new agreements distinct from old recollections.',
    sourceNote: 'OpenStax discusses reconstructive memory; GOV.UK supports careful notes. The subtitle conversation is fictional and is not a legal method for determining commitments.',
  },
]