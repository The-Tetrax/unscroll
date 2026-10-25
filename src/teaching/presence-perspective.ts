import type { LessonGuide } from './types'

// Original examples and diagrams. Practice budgets are suggestions, not study results.
// Omit sources so each guide inherits the URLs on its existing lesson record.
// Representative source checks: PLOS communication repair, ADA effective communication,
// and the Stanford Encyclopedia of Philosophy entry on the original position.
export const presencePerspectiveGuides: LessonGuide[] = [
  {
    id: 'presence-001',
    outcome: `Distinguish a felt body position from a judgment about how that position looks.`,
    scene: `A reader pauses over a library book with one hand resting beside their lap.`,
    sections: [
      {
        title: `A hand you are not watching`,
        paragraphs: [
          `You are reading a library book in a supported seat. Your right hand rests beside your lap, out of your immediate view. Before looking down, you have some sense of where it is. Perhaps the fingers feel curled and the wrist feels turned inward. That information is different from a thought such as "My hands probably look awkward." One describes a position you sense; the other evaluates an imagined appearance.`,
        ],
      },
      {
        title: `How position reaches awareness`,
        paragraphs: [
          `Proprioception is the sense of where your body parts are and how they move. Signals from muscles, tendons, and joints contribute to it. Vision and touch can supply additional information: seeing your fingers or feeling the seat beneath your hand is not the same source of information as sensing its position. These sources usually work together. You do not need to isolate them perfectly for this exercise. The useful distinction is between describing your own experience and inventing an observer's verdict about it.`,
        ],
      },
      {
        title: `Compare descriptions, not scores`,
        paragraphs: [
          `Suppose you write "fingers loosely curled, hand beside my lap," then look. The hand is where you expected, but the fingers are straighter. Your second description adds information; it does not mark the first as a personal failure. Leave the hand where it is if comfortable. There is no ideal pose to achieve and no need to close your eyes, balance, or stretch. Sensation and available movement differ. If attending inward is unpleasant, use a visible description only. You can still practice separating "hand on support" from "unconfident person."`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Where the hand rests`,
        alt: `Top view of a seated reader, a hand beside the lap, and a book farther forward.`,
        caption: `Locate the hand relative to the reader, not a model pose. This is a schematic, not an anatomy assessment.`,
        items: [
          { label: 'Reader and lap', detail: 'Supported seat', x: 25, y: 70, shape: 'person' },
          { label: 'Resting hand', detail: 'Beside the lap', x: 75, y: 70, shape: 'object' },
          { label: 'Library book', detail: 'Forward of the hand', x: 50, y: 20, shape: 'paper' },
        ],
      },
    ],
    practice: {
      minutes: 4,
      needs: [`A comfortable supported position`, `Paper or a private note`],
      steps: [
        `Settle safely and let an accessible hand rest without deliberately posing it. Keep your eyes open.`,
        `While looking elsewhere, describe its location and one detail of the fingers. "Unclear" is an acceptable description.`,
        `Look at the hand and write a separate visible description, without moving it to match your prediction.`,
        `Underline position words in both notes. Cross out any claim about confidence or how other people would judge you.`,
      ],
      notice: `You have two descriptions and can identify which information came from looking.`,
      troubleshooting: `If sensation is unclear, keep that uncertainty. Use a visible-only description rather than repeating until you feel accurate.`,
    },
    recall: {
      prompt: `While sorting photographs, you notice one shoulder feels raised and think "I must look anxious." What can you report without that interpretation?`,
      hint: `Separate your sensation from the imagined audience.`,
      answer: `Report that the shoulder feels raised, and check its visible position if useful. Neither report establishes anxiety or anyone else's impression. Adjust only for comfort or the task, not to correct an inferred personality.`,
    },
    quiz: {
      question: `Your felt finger position differs from what you see. What is the most defensible next step?`,
      options: [`Repeat until the descriptions match exactly.`, `Record the difference without assigning a confidence score.`, `Use the visible position to judge your social presence.`],
      correctIndex: 1,
      explanation: `The comparison adds information about this moment. Repetition is unnecessary, and neither sensation nor appearance measures social confidence.`,
    },
    takeaway: `Describe where your body is before adding a story about what it means.`,
    sourceNote: `OpenStax explains proprioception. This original observation exercise is not a diagnostic test, treatment, or validated way to change confidence.`,
  },
  {
    id: 'presence-002',
    outcome: `Choose hand support that makes an introduction usable without requiring stillness or a confidence pose.`,
    scene: `A new book-club member rehearses an introduction beside an armrest.`,
    sections: [
      {
        title: `The pose becomes another job`,
        paragraphs: [
          `Before a book-club introduction, Leena tries holding both hands visibly above her lap. She read that open hands look confident. Now she is thinking about keeping them level instead of remembering the book she wants to mention. She can finish the introduction, but maintaining the pose is an extra task. The practical question is smaller than "How should a confident person sit?" It is "Where can my hands go while I speak comfortably?"`,
        ],
      },
      {
        title: `Support changes the task`,
        paragraphs: [
          `A resting surface carries some of the load that otherwise has to be held against gravity. An armrest, lap, or cushion might provide that support, depending on the person and seat. Body-position sensations help you notice the arrangement without watching your hands continuously. Support does not require freezing. Moving a finger, changing position, or using a familiar harmless movement can remain part of participating. The point is to stop maintaining an unnecessary display, not to replace it with a new rule about perfectly relaxed hands.`,
        ],
      },
      {
        title: `Keep the words, change the support`,
        paragraphs: [
          `Leena tries the same sentence with a forearm on the armrest: "I am Leena, and I chose the novel for its unreliable narrator." She notices less effort in holding her hand up and can follow the sentence more easily. That is a useful personal result, not proof of a universal posture effect. If the armrest raises her shoulder uncomfortably, her lap is another option. She keeps whichever arrangement serves her body and message today. Another member may prefer moving their hands throughout the introduction and need no resting arrangement at all.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Support beneath the hand`,
        alt: `Side-view schematic showing Leena, her forearm and hand, and an armrest beneath them.`,
        caption: `The upward arrow indicates support, not a prescribed joint angle. Symbols are separated for legibility.`,
        items: [
          { label: 'Leena', detail: 'Speaks the introduction', x: 20, y: 25, shape: 'person' },
          { label: 'Forearm and hand', detail: 'Rest rather than hover', x: 75, y: 30, shape: 'object' },
          { label: 'Armrest', detail: 'Only if comfortable', x: 75, y: 80, shape: 'box' },
        ],
        arrows: [{ from: 2, to: 1, label: 'Support' }],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`A supported seat`, `One introduction sentence`],
      steps: [
        `Write your name and one harmless interest as a sentence. Rehearse privately rather than testing someone's reaction.`,
        `Say or compose it in your usual comfortable position; do not deliberately hold a tiring pose.`,
        `Try one available support, such as your lap. Keep the sentence the same and allow useful movement.`,
        `Note which arrangement required less holding effort, or write "no clear difference." Keep only a comfortable option.`,
      ],
      notice: `Your note names a practical difference in support, not an impression of authority.`,
      troubleshooting: `If support restricts movement or raises a shoulder, change the surface or return to your usual position.`,
    },
    recall: {
      prompt: `At a hobby demonstration, someone keeps repositioning their hands while explaining a model. What should determine whether the setup needs changing?`,
      hint: `Ask about the task and their comfort.`,
      answer: `Ask whether they want somewhere to rest the model or their hands. Movement alone does not show discomfort, incompetence, or poor attention. A requested support is useful; enforced stillness is not the goal.`,
    },
    quiz: {
      question: `Your lap feels easier than the armrest during rehearsal. What does that observation justify?`,
      options: [`Use your lap if it remains comfortable.`, `Keep the armrest because it is a designated support.`, `Choose whichever position looks most confident in a recording.`],
      correctIndex: 0,
      explanation: `You compared your own holding effort. A designated support need not suit you, and judging appearance answers a different question.`,
    },
    takeaway: `Let support serve participation rather than making posture another performance.`,
    sourceNote: `OpenStax and autistic adults' accounts of stimming provide background. The support comparison is original and makes no hormonal or interpersonal-effect claim.`,
  },
  {
    id: 'presence-003',
    outcome: `Arrange a shared diagram so looking at the task is a usable alternative to eye contact.`,
    scene: `Two friends position a planting sketch while planning a balcony garden.`,
    sections: [
      {
        title: `The sketch is off to one side`,
        paragraphs: [
          `Asha and Jo are planning balcony pots. Asha places the planting sketch beside her own shoulder, then asks Jo to keep looking at her while she explains. Jo has to choose between following the drawing and meeting that gaze expectation. Looking away could mean checking which pot Asha mentioned, not losing interest. The location of the page has made an ordinary conversation harder before either person has misunderstood a word.`,
        ],
      },
      {
        title: `Give attention a shared target`,
        paragraphs: [
          `A shared reference is something both people can consult, such as a sketch, map, or object. Placing it within both people's usable view makes references like "this pot" easier to follow. It also offers somewhere relevant to look besides the other person's eyes. Accounts by autistic people describe varied eye-contact experiences, including distraction and discomfort. They do not establish one preferred layout. A person who uses facial information or signing may need a different position from someone who prefers looking mainly at the page.`,
        ],
      },
      {
        title: `Move the page before prescribing a gaze`,
        paragraphs: [
          `Jo asks to bring the sketch forward between them. Now both can orient toward it rather than one person repeatedly turning toward a page off the other's shoulder. Asha names the herb pot; Jo points to the same label and asks about drainage. The useful change is that both can locate the subject. It is not a reduction in eye contact that everyone must copy. They check whether the lettering, viewing angle, and face visibility work, then adjust again if needed. No fixed head angle or glance count belongs in the agreement.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Sketch off Asha's shoulder`,
        alt: `Top view: Asha and Jo sit below a sketch placed forward and far to their right.`,
        caption: `Trace each viewing direction. The unequal arrangement is schematic, not a measurement of neck strain.`,
        items: [
          { label: 'Jo', detail: 'Looks across to sketch', x: 20, y: 75, shape: 'person' },
          { label: 'Asha', detail: 'Sketch near one shoulder', x: 80, y: 75, shape: 'person' },
          { label: 'Planting sketch', detail: 'Off to one side', x: 80, y: 20, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 2 }, { from: 1, to: 2 }],
      },
      {
        type: 'spatial',
        title: `Sketch forward between them`,
        alt: `The same people now have the planting sketch forward of the space between them.`,
        caption: `Both viewing directions reach the shared page. Ask whether this arrangement works rather than copying an angle.`,
        items: [
          { label: 'Jo', detail: 'Can follow pot labels', x: 20, y: 75, shape: 'person' },
          { label: 'Asha', detail: 'Names the same labels', x: 80, y: 75, shape: 'person' },
          { label: 'Planting sketch', detail: 'Shared reference', x: 50, y: 20, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 2 }, { from: 1, to: 2 }],
      },
    ],
    practice: {
      minutes: 6,
      needs: [`A simple drawing`, `A willing partner, or two paper place markers`],
      steps: [
        `Choose two labeled objects on a drawing and mark where each participant would be.`,
        `Place the drawing off to one side, then forward between the positions. Do not hold an uncomfortable posture.`,
        `Ask which position supports reading and communication. If alone, draft that question instead of assuming a preference.`,
        `Keep a sketch of the agreed layout and one remaining access adjustment.`,
      ],
      notice: `The layout gives both participants a usable reference without a gaze requirement.`,
      troubleshooting: `If text or faces become harder to see, reposition or provide separate accessible copies.`,
    },
    recall: {
      prompt: `A friend needs to see your face while discussing sewing instructions. How would you adapt the shared-reference idea?`,
      hint: `An alternative to eye contact must not remove needed information.`,
      answer: `Ask where the instructions and your face can both be seen comfortably. Try an angled arrangement or separate copy. Shared access, not side-by-side seating itself, is the objective.`,
    },
    quiz: {
      question: `Both can read the new layout, but one cannot follow facial information. What next?`,
      options: [`Keep it because page visibility improved.`, `Require them to look between page and face faster.`, `Adjust together to preserve both kinds of access.`],
      correctIndex: 2,
      explanation: `A layout succeeds only if its participants can use it. Page visibility alone does not resolve every communication need.`,
    },
    takeaway: `Arrange the shared task around the people using it, not an eye-contact quota.`,
    sourceNote: `PLOS eye-contact accounts are qualitative, not representative preferences. ADA guidance informs access; these garden layouts are original examples, not tested seating prescriptions.`,
  },
  {
    id: 'presence-004',
    outcome: `Replace a universal gaze rule with an individual, unmonitored participation agreement.`,
    scene: `A museum volunteer rewrites the welcome instructions for a multilingual orientation.`,
    sections: [
      {
        title: `A welcome rule excludes someone`,
        paragraphs: [
          `A museum's volunteer orientation includes "Show respect by maintaining eye contact." Riku wants to take notes while listening. Sana follows the demonstration best by watching the equipment. Neither knows whether the instruction permits that. The host intended to encourage attention, but the rule measures a visible behavior rather than whether anyone receives the information. A volunteer now has to choose between a useful way of learning and appearing to obey the welcome instructions.`,
        ],
      },
      {
        title: `A convention is not a personal preference`,
        paragraphs: [
          `A convention is a shared expectation that people learn in a setting. Gaze conventions vary, and individuals do not always follow a convention associated with their background. A study comparing Finnish and Japanese samples found differences in some judgments of photographed faces and gaze. That makes a single worldwide gaze rule doubtful, not a nationality-based replacement sensible. Neurodivergent experiences, vision, interpreting arrangements, and the task also matter. None lets the host infer exactly what Riku or Sana prefers without giving them a choice.`,
        ],
      },
      {
        title: `Make the permission usable`,
        paragraphs: [
          `The host replaces the rule: "Use notes, the demonstration, or another comfortable focus. Tell me if a different arrangement would help." Riku keeps writing and later asks how to label a storage tray. Sana requests a closer view of the demonstration. Those responses concern the activity rather than proving respectful gaze. The host does not secretly count glances after making the offer. If something remains unclear, they ask about that specific instruction. A local agreement can change as the activity changes, without anyone explaining a diagnosis or representing an entire culture.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `A different welcome`,
        alt: `The host offers gaze choices; volunteers request note-taking and a demonstration view.`,
        caption: `This fictional exchange replaces monitoring with concrete access requests.`,
        items: [
          { label: 'Host', detail: 'Use a comfortable focus. What arrangement would help?' },
          { label: 'Riku', detail: 'I will look at my notes while you explain.' },
          { label: 'Sana', detail: 'Could I see the demonstration from closer up?' },
          { label: 'Host', detail: 'Yes. Let us make that view available.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`Paper`, `The fictional museum instruction above`],
      steps: [
        `Copy the instruction and underline the actual goal: understanding the orientation.`,
        `Write a replacement that permits notes, another focus, and an access request without requiring disclosure.`,
        `Add one task question, such as "Which tray label remains unclear?", to check understanding.`,
        `Remove any glance count or nationality rule. Read your replacement as someone who never looks directly at the host.`,
      ],
      notice: `Your instruction allows a participant to learn without performing a particular gaze pattern.`,
      troubleshooting: `If the rewrite sounds like compulsory avoidance, explicitly allow looking at the speaker too.`,
    },
    recall: {
      prompt: `A debate club asks members to face the speaker throughout every contribution. How could you keep discussion workable without prescribing gaze?`,
      hint: `Keep the task expectation, loosen the visual performance.`,
      answer: `Ask members to let contributions finish and clarify relevant points, while permitting notes and agreed visual arrangements. Invite access adjustments privately or publicly. Do not assign preferences by cultural background.`,
    },
    quiz: {
      question: `A participant says looking directly at speakers helps them. What fits the new agreement?`,
      options: [`Allow that preference alongside other people's choices.`, `Ask them to avoid eye contact so everyone follows one rule.`, `Apply it only to people from the same cultural background.`],
      correctIndex: 0,
      explanation: `Individual choice includes direct gaze. Reversing a universal rule or sorting people by background still removes that choice.`,
    },
    takeaway: `Ask how people can participate; do not convert group averages into gaze instructions.`,
    sourceNote: `The cultural gaze study used particular samples and photographs. Autistic eye-contact accounts document variation. Neither source validates a gaze quota or individual cultural profile.`,
  },
  {
    id: 'presence-005',
    outcome: `Offer a warm greeting while leaving touch optional and refusal socially easy.`,
    scene: `A returning choir member meets a newcomer before rehearsal begins.`,
    sections: [
      {
        title: `Enthusiasm does not answer the question`,
        paragraphs: [
          `At choir rehearsal, Mateo recognizes a new member from an online singing group. He is pleased to meet her and begins moving in for a hug. She smiles but stays where she is. He knows she is smiling; he does not know whether she wants physical contact. Treating enthusiasm, stillness, or familiarity online as permission makes her responsible for stopping an action that has already begun. A greeting can remain friendly without creating that problem.`,
        ],
      },
      {
        title: `Keep control with the person being touched`,
        paragraphs: [
          `Consent means a person's voluntary permission for a particular action. Here the action is greeting touch, not the entire friendship. Permission to hug last week does not decide today, and agreeing to a handshake does not authorize another kind of contact. A useful offer includes a genuine alternative: "Would you like a hug, or shall we just say hello?" Use a communication method the person can access. Then wait without moving closer. An unclear response leaves the touch unagreed, not quietly approved.`,
        ],
      },
      {
        title: `Finish the welcome after a no`,
        paragraphs: [
          `Mateo stops at conversational distance and asks. The newcomer says, "Just hello today." He answers, "Good to meet you. We are using the blue songbooks," and continues normally. The welcome has not been withdrawn as a penalty. He does not ask whether something is wrong or invite the group to comment on her preference. Cultural greeting habits differ, but an individual can choose differently from an expected custom. What makes the offer voluntary is not polished wording alone; it is also accepting the answer without persuasion, touch, or a demand for reasons.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Welcome without a touch requirement`,
        alt: `Mateo offers a hug or hello, the newcomer chooses hello, and the introduction continues.`,
        caption: `Inspect what happens after the refusal. This is a fictional greeting, not a persuasion script.`,
        items: [
          { label: 'Mateo', detail: 'Would you like a hug, or shall we just say hello?' },
          { label: 'New member', detail: 'Just hello today.' },
          { label: 'Mateo', detail: 'Good to meet you. We are using the blue songbooks.' },
        ],
      },
    ],
    practice: {
      minutes: 4,
      needs: [`Paper or a private note`],
      steps: [
        `Imagine greeting someone at a hobby group. Write a welcome that works without any touch.`,
        `If touch is relevant, add a single optional offer with a clear no-touch alternative.`,
        `Write the reply "No thanks," then draft your next sentence about the shared activity.`,
        `Check that neither your wording nor imagined movement makes the person defend their answer. Rehearse privately.`,
      ],
      notice: `Your greeting remains complete and welcoming when touch is declined.`,
      troubleshooting: `If the follow-up asks why, replace it with practical information or an ordinary introduction.`,
    },
    recall: {
      prompt: `A teammate accepted a congratulatory high-five yesterday but does not respond to today's offer. What would respecting control over touch look like now?`,
      hint: `Previous agreement and current uncertainty are different.`,
      answer: `Do not complete the high-five or repeat the offer insistently. Congratulate them without touching. Yesterday's permission concerned yesterday, and no explanation is needed to continue the interaction.`,
    },
    quiz: {
      question: `A guest declines a handshake. Which continuation preserves the greeting without adding pressure?`,
      options: [`Offer a hug instead to find an acceptable form of contact.`, `Introduce yourself and continue without touch.`, `Ask privately why handshakes are uncomfortable before proceeding.`],
      correctIndex: 1,
      explanation: `A normal introduction accepts the refusal. Another touch offer or a required explanation can make declining socially costly.`,
    },
    takeaway: `An optional offer stays optional only when no does not interrupt the welcome.`,
    sourceNote: `Consent philosophy and disability etiquette inform this everyday application. The dialogue is original; cultural customs and friendly expressions do not replace individual permission.`,
  },
  {
    id: 'presence-006',
    outcome: `Identify your own obstruction and preserve another person's route out of a casual conversation.`,
    scene: `Two neighbors exchange a few words at the laundry-room exit.`,
    sections: [
      {
        title: `The exit becomes part of the invitation`,
        paragraphs: [
          `Nora meets Eli leaving the shared laundry room. She puts her laundry bag in the narrow passage and asks about the building picnic. Eli would need to step around the bag to leave. Nora may intend only a friendly chat, but the arrangement adds a physical obstacle to declining it. Saying "I will not keep you" does not remove the bag. Personal space includes a usable route, not just the gap between two people.`,
        ],
      },
      {
        title: `Check the arrangement you control`,
        paragraphs: [
          `An obstruction is something that interferes with movement: a body in a doorway, a trailing strap, or belongings on the route. Look at your own position and objects before interpreting someone else's movement. Comfortable conversational distance varies with the person, setting, and access needs. There is no useful universal distance to discover by approaching until someone retreats. That turns their discomfort into your measuring instrument. A clear route and a question about convenience preserve choices without asking the other person to demonstrate a boundary physically.`,
        ],
      },
      {
        title: `Clear the route, then ask`,
        paragraphs: [
          `Nora moves her bag beside her, away from the path to the exit, and asks, "Is now a good time, or shall I send the picnic details?" Eli chooses a message and leaves. The successful outcome is that the choice was usable, not that Nora secured a longer conversation. If the room has no suitable space, they can end the chat rather than inventing a cramped compromise. Keep doors, controls, and mobility routes accessible. Do not move another person's belongings or mobility aid to create your preferred layout without asking them.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Bag on the exit route`,
        alt: `Top view with Eli above the exit and Nora's bag between Eli and the exit.`,
        caption: `The route crosses the bag. This schematic shows obstruction, not a minimum clearance measurement.`,
        items: [
          { label: 'Nora', detail: 'Starts the chat', x: 20, y: 20, shape: 'person' },
          { label: 'Eli', detail: 'Heading out', x: 80, y: 20, shape: 'person' },
          { label: 'Nora\'s bag', detail: 'In the passage', x: 80, y: 50, shape: 'object' },
          { label: 'Exit', detail: 'Route needed', x: 80, y: 85, shape: 'box' },
        ],
        arrows: [{ from: 1, to: 3, label: 'Obstructed' }],
      },
      {
        type: 'spatial',
        title: `Bag moved beside Nora`,
        alt: `The bag is now on Nora's side; Eli has an unobstructed path to the exit.`,
        caption: `Only Nora's object changes position. Actual routes must suit the people using them.`,
        items: [
          { label: 'Nora', detail: 'Offers a later message', x: 20, y: 20, shape: 'person' },
          { label: 'Eli', detail: 'Can leave', x: 80, y: 20, shape: 'person' },
          { label: 'Nora\'s bag', detail: 'Off the route', x: 20, y: 75, shape: 'object' },
          { label: 'Exit', detail: 'Kept clear', x: 80, y: 85, shape: 'box' },
        ],
        arrows: [{ from: 1, to: 3, label: 'Clear route' }],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`Paper`, `A familiar doorway imagined from memory`],
      steps: [
        `Draw a doorway and mark where you might stop for a chat. Do not block a real passage to experiment.`,
        `Add your bag and draw the other person's route to the door.`,
        `Move only your marks until the route is clear; label one invitation to continue later.`,
        `Check that leaving needs no squeezing past you or moving your belongings.`,
      ],
      notice: `The sketch preserves an exit independently of whether the invitation is accepted.`,
      troubleshooting: `If no clear arrangement fits, choose another place with agreement or end the conversation.`,
    },
    recall: {
      prompt: `You ask a classmate a question beside a row of coat hooks. Your backpack blocks their coat. What should change first?`,
      hint: `Look for a practical constraint you created.`,
      answer: `Move your backpack and offer to talk later. Their reaching for a coat need not mean dislike. Remove the obstacle rather than making them explain their intention.`,
    },
    quiz: {
      question: `Someone steps away during your question. Which response best preserves their options?`,
      options: [`Match the step to keep the original distance.`, `Ask what their movement means before continuing.`, `Leave space and offer to continue another time.`],
      correctIndex: 2,
      explanation: `An option to leave respects movement without interpreting it. Following or requiring an explanation can make departure harder.`,
    },
    takeaway: `A clear exit makes the choice to continue real.`,
    sourceNote: `Disability etiquette and consent inform this framework. The layouts specify no universal personal distance or legally sufficient passage width.`,
  },
  {
    id: 'presence-007',
    outcome: `Offer seating around reach, sightlines, and movement instead of inferred rank or personality.`,
    scene: `A community stamp-making workshop prepares places around shared printed instructions.`,
    sections: [
      {
        title: `An end place has practical uses`,
        paragraphs: [
          `At a stamp-making workshop, Dee asks for the end place rather than a seat between other participants. The organizer nearly jokes that Dee wants to be in charge. But the request might concern getting to the exit, using the table, or seeing instructions. The organizer does not need to solve that mystery. A seat is part of the activity's equipment, and the person using it can report whether it works.`,
        ],
      },
      {
        title: `Several forms of access intersect`,
        paragraphs: [
          `A sightline is an unobstructed path between a viewer and something they need to see. Reach concerns whether materials and controls are usable from a position. Movement concerns arriving, leaving, and changing position. One place may improve a sightline while making reach worse. For example, sitting farther back reveals the whole instruction sheet but puts the ink pads out of reach. Ranking chairs as powerful or timid ignores these practical differences. Access planning starts with options and requests, not a personality theory attached to the table shape.`,
        ],
      },
      {
        title: `Adjust the materials as well as the seat`,
        paragraphs: [
          `The organizer asks Dee whether the end position works and whether the instructions should move. Dee requests a copy nearer the table edge. The organizer moves their own supply box away from the route and provides that copy. Another participant chooses a place with a clearer view of the instructor's face. Both choices can stand without deciding which person is more engaged. If someone uses a mobility aid, ask before offering assistance and never reposition it yourself without permission. A diagram can suggest questions, but only the participants can confirm this arrangement's usefulness.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Views and route at the workshop`,
        alt: `Two workshop places face instructions, with an exit beyond Dee's side.`,
        caption: `Trace the views, then inspect Dee's route. This top-view sketch omits furniture dimensions and individual access requirements.`,
        items: [
          { label: 'Other participant', detail: 'Chooses a usable view', x: 20, y: 75, shape: 'person' },
          { label: 'Dee', detail: 'Requests the end place', x: 80, y: 75, shape: 'person' },
          { label: 'Instructions', detail: 'Copies can move', x: 45, y: 20, shape: 'paper' },
          { label: 'Exit', detail: 'Keep approach clear', x: 85, y: 20, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 2 }, { from: 1, to: 2 }, { from: 1, to: 3 }],
      },
    ],
    practice: {
      minutes: 6,
      needs: [`Paper`, `A low-stakes activity layout`],
      steps: [
        `Sketch two places, the materials, and an exit for an activity you could arrange.`,
        `Draw sightlines to essential information and routes away. Mark any item that would require reaching across another person.`,
        `Draft an invitation to choose a place and request a material adjustment without explaining a diagnosis.`,
        `Revise your sketch using one hypothetical request. Mark actual preferences as still needing consultation.`,
      ],
      notice: `The revised plan changes an access condition rather than assigning people social roles.`,
      troubleshooting: `If changing seats fixes one issue but creates another, move or duplicate the materials too.`,
    },
    recall: {
      prompt: `A relative wants a different place at a board game even though everyone can see the board. What else should you ask about?`,
      hint: `Seeing is only one part of using a place.`,
      answer: `Ask what adjustment would help, including reach, chair comfort, hearing, or getting up. Accommodate the request where possible without inventing an explanation for the relative's personality.`,
    },
    quiz: {
      question: `Moving someone nearer the instructions blocks their exit route. Which revision fits?`,
      options: [`Keep the closer seat because instructions are the main task.`, `Preserve the route and offer a nearer instruction copy.`, `Choose a standard seat order to avoid individual exceptions.`],
      correctIndex: 1,
      explanation: `Duplicating information can preserve both access needs. Fixing visibility does not justify introducing a movement barrier.`,
    },
    takeaway: `A seating request is a reason to adjust access, not decode status.`,
    sourceNote: `United Spinal and ADA guidance emphasize individual communication and assistance needs. This workshop sketch is not a complete accessibility or jurisdictional compliance assessment.`,
  },
  {
    id: 'presence-008',
    outcome: `Repair a simultaneous start while preserving a return to both people's contributions.`,
    scene: `Two amateur astronomers begin discussing the same telescope view at once.`,
    sections: [
      {
        title: `Two people hear an opening`,
        paragraphs: [
          `After looking through a telescope, Sal says, "That bright point looked..." and stops briefly. Mira begins a question just as Sal resumes. Both heard a possible opening in the conversation. Mira could interpret the collision as deliberate interruption; Sal could make the same accusation. What they know immediately is narrower: their speech overlapped. They still need a way to hear the observation and the question about what was visible.`,
        ],
      },
      {
        title: `Turns require prediction`,
        paragraphs: [
          `Turn-taking is the coordination of who contributes next. People use words, timing, intonation, and other available signals to anticipate a possible ending. Because a response is prepared before perfect certainty about that ending, simultaneous starts can occur. Research across ten languages found shared tendencies to limit gaps and overlap, with variation in timing. That describes patterns, not a rule that everyone should respond within a fixed interval. Different communication methods and individual processing needs can require more explicit coordination than a quick conversational prediction provides.`,
        ],
      },
      {
        title: `Offer a turn and retain yours`,
        paragraphs: [
          `Mira says, "Go ahead with what you saw; I have a question afterward." Sal finishes describing the bright point, then asks for the question. Both contributions become available without settling whose prediction was more reasonable. The return matters: yielding is not the same as abandoning your point. If Mira repeatedly loses her turn, she can name the pattern and propose a clearer handoff. One accidental collision should not prove disrespect, but the possibility of accidents should not be used to excuse a continuing pattern that excludes someone from the discussion.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Observation, then question`,
        alt: `Mira yields briefly, Sal describes the view, and Sal returns the turn to Mira.`,
        caption: `Follow the promised return. This fictional repair does not assign a motive to the overlap.`,
        items: [
          { label: 'Mira', detail: 'Go ahead with what you saw; I have a question afterward.' },
          { label: 'Sal', detail: 'The bright point was near the edge of the view.' },
          { label: 'Sal', detail: 'What was your question?' },
          { label: 'Mira', detail: 'Was it visible before we adjusted the telescope?' },
        ],
      },
    ],
    practice: {
      minutes: 4,
      needs: [`Paper`, `Two fictional contributions`],
      steps: [
        `Write an observation and a question about an ordinary hobby. Label the two speakers.`,
        `Imagine they start together. Add a short offer of the turn that also requests a return.`,
        `Write the first contribution, then an explicit handoff to the second. Read both in order.`,
        `Check that neither contribution vanished. Add a separate process request for the case of repeated lost turns.`,
      ],
      notice: `The script contains both points and a recognizable return, not just an apology.`,
      troubleshooting: `If both speakers keep yielding, name an order once rather than extending the politeness exchange.`,
    },
    recall: {
      prompt: `Two people start at once on a family video call, and the delay makes another collision likely. What agreement could replace guessing?`,
      hint: `Make the next two turns identifiable.`,
      answer: `Name who will finish first and who follows, then explicitly return the turn. A connection delay is another reason not to infer intent from timing alone.`,
    },
    quiz: {
      question: `You yielded twice and never got to finish your update. What best addresses the pattern?`,
      options: [`Keep yielding because overlap can be accidental.`, `Assume the next overlap proves deliberate disrespect.`, `Name the missed turns and agree on an explicit return.`],
      correctIndex: 2,
      explanation: `A process request addresses the repeated exclusion without claiming to know intent. Explaining one collision does not solve a continuing pattern.`,
    },
    takeaway: `Repair the timing collision, and make sure the return actually happens.`,
    sourceNote: `Turn-taking and repair studies provide background. The telescope exchange is original; sample timing patterns are not universal etiquette deadlines.`,
  },
  {
    id: 'presence-009',
    outcome: `Create a recognizable invitation to contribute that includes a way to pass.`,
    scene: `A neighborhood seed-swap group decides how volunteers will offer planting advice.`,
    sections: [
      {
        title: `A glance fails to hand over`,
        paragraphs: [
          `At a seed swap, the host finishes describing tomato seeds and looks toward Priya, expecting her to speak about beans. Priya is reading the packet labels and misses the glance. Another volunteer starts instead. The host might conclude that Priya was not paying attention, but the intended invitation was never made available in a form she used. A handoff that exists only in one person's gaze can disappear before the next person recognizes it.`,
        ],
      },
      {
        title: `Separate opportunity from obligation`,
        paragraphs: [
          `A turn invitation identifies an available contribution; it need not demand one. Before the discussion, participants can agree that the host names the topic and invited person, with options to pass, return later, or write a contribution. The signal must suit the group: speech alone will not serve everyone either. The distinction is between making an opportunity perceivable and forcing a performance. Surprising the quietest person with a public question does the second without establishing the first. An agreed convention reduces guessing while leaving people control over participation.`,
        ],
      },
      {
        title: `Use the agreement during the activity`,
        paragraphs: [
          `The seed-swap group agrees on named invitations plus the same names in its shared notes. The host says, "Priya, beans next if you want, or we can return later." Priya asks to return after checking a label. The host marks that return and follows through. Another person contributes a written storage tip. Their contributions need not occupy identical time to be useful. At the end, the host asks whether anyone missed an invitation or return. That checks the process directly rather than treating silence or gaze as evidence of satisfaction.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `An invitation with a return`,
        alt: `The host invites Priya, Priya asks to return later, and the host offers that return.`,
        caption: `The same invitation is available in agreed shared notes. This fictional exchange includes a real pass option.`,
        items: [
          { label: 'Host', detail: 'Priya, beans next if you want, or we can return later.' },
          { label: 'Priya', detail: 'Later, please. I am checking the packet.' },
          { label: 'Host', detail: 'We have finished tomatoes. Would you like your turn now?' },
          { label: 'Priya', detail: 'Yes. These beans need a climbing support.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`Paper`, `An imagined small-group activity`],
      steps: [
        `Name a group task and draft a question asking participants which turn signal they can use.`,
        `Write one invitation naming a person and topic, with pass and later options.`,
        `Add a written or other agreed equivalent rather than assuming the spoken signal reaches everyone.`,
        `Draft the later return and a closing question about missed opportunities. Do not nominate real people without agreement.`,
      ],
      notice: `Someone can recognize, defer, and eventually use the opportunity in your script.`,
      troubleshooting: `If the invitation still sounds mandatory, explicitly permit passing without giving a reason.`,
    },
    recall: {
      prompt: `A craft group uses raised hands, but one member cannot see them. How would you revise the handoff without compelling contributions?`,
      hint: `Change access to the signal, not willingness to speak.`,
      answer: `Agree on a perceivable turn cue and communicate the order in a usable format. Keep passing and returning available. Do not require the member to monitor an inaccessible signal.`,
    },
    quiz: {
      question: `A member repeatedly passes during an agreed round. What is the appropriate immediate response?`,
      options: [`Honor the pass and keep agreed alternatives available.`, `Ask an easier question until they contribute aloud.`, `Remove their future invitations because they seem uninterested.`],
      correctIndex: 0,
      explanation: `Passing was part of the agreement. Neither compulsory speaking nor an inferred lack of interest follows from using that option.`,
    },
    takeaway: `Make a turn available in a usable form, and keep its acceptance voluntary.`,
    sourceNote: `ADA guidance and turn-taking research inform this framework. The seed-swap convention is original, not a tested requirement for equal speaking time.`,
  },
  {
    id: 'presence-010',
    outcome: `Explain a thinking pause and agree how the conversation will resume.`,
    scene: `A friend asks to borrow a camera before a weekend school performance.`,
    sections: [
      {
        title: `The quiet has several possible meanings`,
        paragraphs: [
          `Imani asks to borrow your camera for a school performance. You pause because you cannot remember whether your sibling needs it that weekend. Imani wonders whether the pause means reluctance, a technical problem, or that you did not hear. None of those possibilities is settled by the silence itself. Meanwhile, you are trying to reconstruct a calendar entry. A short explanation could remove one uncertainty without deciding the borrowing request before you have the information.`,
        ],
      },
      {
        title: `Name the unfinished task`,
        paragraphs: [
          `A thinking pause is time used for an unfinished part of responding: remembering, checking, composing, or considering. Conversation has timing expectations, so an unexplained delay can leave the other person unsure whether a turn is still in progress. Saying "I need to check whether the camera is free" identifies the task. It does not promise a yes. When checking will take longer, add a realistic return point or ask when an answer is needed. The useful information is what happens next, not an apology for needing time.`,
        ],
      },
      {
        title: `Return with the result or a revised plan`,
        paragraphs: [
          `You say you will check the shared calendar and answer that evening. Imani says an evening answer works. Later you discover the camera is already promised and report that plainly. The pause supported an accurate response rather than softening Imani into agreement. If the calendar is unavailable, send an update instead of letting the promised return disappear. Some people need more time to process or compose messages; naming a pause is an option, not a requirement to justify every delay. Avoid using silence deliberately to make someone anxious enough to concede.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Purpose and return point`,
        alt: `A camera request receives a stated calendar check, an agreed return, and an answer.`,
        caption: `The evening return is a fictional agreement, not a recommended waiting duration.`,
        items: [
          { label: 'Imani', detail: 'Could I borrow the camera on Saturday?' },
          { label: 'You', detail: 'I need to check another booking. Does an answer this evening work?' },
          { label: 'Imani', detail: 'Yes, that works.' },
          { label: 'You, later', detail: 'It is already promised for Saturday, so I cannot lend it then.' },
        ],
      },
    ],
    practice: {
      minutes: 4,
      needs: [`A private note`, `One fictional scheduling request`],
      steps: [
        `Write a request you cannot answer until one detail is checked. Name that missing detail.`,
        `Draft a pause statement that explains the check without implying agreement to the request.`,
        `Add a return point and a question about whether that timing works for the requester.`,
        `Write both a confirmed answer and an update for when the detail remains unavailable.`,
      ],
      notice: `The other person can tell whether to wait now or expect a later response.`,
      troubleshooting: `If your statement only says "Give me time," add the task and the next contact point.`,
    },
    recall: {
      prompt: `You are asked which poster design to print, but need to compare the small lettering. What would a useful pause statement contain?`,
      hint: `State the comparison and how you will return.`,
      answer: `Explain that you need to inspect lettering at print size, then agree when you will answer. Do not let the pause imply that a design is already approved.`,
    },
    quiz: {
      question: `Your promised check will take longer than expected. What best preserves the agreement?`,
      options: [`Remain silent until you can provide certainty.`, `Give a provisional yes so the person stops waiting.`, `Send an update and agree on a workable next step.`],
      correctIndex: 2,
      explanation: `An update restores coordination without inventing an answer. Neither silence nor unsupported agreement supplies the missing information.`,
    },
    takeaway: `A pause becomes easier to use when its purpose and return are clear.`,
    sourceNote: `Conversation timing research and consent provide background. This original scheduling script is not a universal response deadline or a method of interpersonal pressure.`,
  },
  {
    id: 'presence-011',
    outcome: `Turn an ambiguous vocal cue into a clear question about the requested action.`,
    scene: `Housemates discuss a portable fan while preparing food for a picnic.`,
    sections: [
      {
        title: `A question that could be a request`,
        paragraphs: [
          `While you pack picnic food, Arun asks, "Is that fan staying on?" His voice sounds sharp to you. You could answer yes, turn it off, or ask why he is annoyed. Each response assumes something different about the sentence. Perhaps the noise bothers him; perhaps he wants to know whether it will blow napkins away. What needs resolving is whether he wants an action and what that action is, not a verdict about his mood.`,
        ],
      },
      {
        title: `Voice adds information without fixing meaning`,
        paragraphs: [
          `Prosody means features such as pitch, rhythm, emphasis, and timing in speech. These features help listeners interpret an utterance, but they do not provide a universal dictionary of emotions or intentions. The same emphasis can be heard differently in another accent, language, context, or person's communication style. An indirect request leaves the desired action unstated: asking whether the fan will stay on could be a request to switch it off. Clarification makes that missing action available instead of requiring both people to guess the same implication.`,
        ],
      },
      {
        title: `Ask about the fan, not the character`,
        paragraphs: [
          `You ask, "Do you want the fan off, or are you checking where the napkins should go?" Arun explains that he cannot hear the picnic instructions over it. Now you can switch it off temporarily or move the conversation, with agreement. "Why are you angry?" would have introduced a claim he might have to dispute before discussing the noise. If you are the requester, say "Could we switch the fan off while we talk?" directly. Clear wording does not require a cheerful voice or removing an accent; it supplies information the practical decision needs.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Find the missing action`,
        alt: `An ambiguous fan question is clarified as a request to reduce noise during the conversation.`,
        caption: `The fictional reply supplies the reason; the voice alone did not establish it.`,
        items: [
          { label: 'Arun', detail: 'Is that fan staying on?' },
          { label: 'You', detail: 'Would you like it off while we talk?' },
          { label: 'Arun', detail: 'Yes. I cannot hear the instructions over it.' },
          { label: 'You', detail: 'I will turn it off for this conversation.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`Paper`, `An optional willing partner`],
      steps: [
        `Write "Are those boxes staying there?" and give it two possible practical meanings.`,
        `Write a clarification that asks about the boxes rather than assigning the speaker an emotion.`,
        `Draft a direct version of each intended request, naming the action and relevant object.`,
        `Ask a willing partner which action each version requests, or compare your versions privately for missing details.`,
      ],
      notice: `Each revised message names an action that the original sentence left uncertain.`,
      troubleshooting: `If the question still sounds like an accusation, remove "really" or "why are you" and ask what needs changing.`,
    },
    recall: {
      prompt: `A friend says "You are taking that route?" in a surprised voice while planning a walk. What would you clarify before changing the plan?`,
      hint: `Ask which information or action is missing.`,
      answer: `Ask whether they know a problem with the route or prefer an alternative. Their explanation can change the plan; the surprised sound alone does not establish what they want or why.`,
    },
    quiz: {
      question: `A teammate's flat delivery makes a request hard to interpret. Which response targets the uncertainty?`,
      options: [`Ask which change they are requesting.`, `Ask them to sound more interested before replying.`, `Assume the words are literal because delivery is unreliable.`],
      correctIndex: 0,
      explanation: `A specific question checks meaning. Correcting the voice adds a different demand, while automatically choosing a literal reading is still an assumption.`,
    },
    takeaway: `When tone leaves the action uncertain, ask about the action.`,
    sourceNote: `Prosody research and conversation-repair research provide background. These household dialogues are original, not a tested emotion-reading system or voice standard.`,
  },
  {
    id: 'presence-012',
    outcome: `Separate effort understanding speech from evidence about the accuracy of its claim.`,
    scene: `A repair-shop customer asks which replacement cable fits an old speaker.`,
    sections: [
      {
        title: `A difficult word changes your impression`,
        paragraphs: [
          `At a repair shop, a technician explains which cable fits your old speaker. You miss a connector name in an accent unfamiliar to you. A second assistant repeats a different recommendation in a familiar accent, and that answer feels easier to trust. Yet you have learned nothing new about which connector the speaker actually uses. Ease of understanding has slipped into your assessment of the technical claim, where evidence about the equipment belongs.`,
        ],
      },
      {
        title: `Processing ease and truth are different`,
        paragraphs: [
          `Processing ease is how readily you make sense of a message. Credibility is how believable you judge it to be. In experiments by Lev-Ari and Keysar, listeners gave lower credibility ratings to some trivia statements delivered with non-native accents. The result concerns listener judgments, not a deficit in speakers' intelligence or knowledge. A fluent sentence can be wrong, and a sentence you need repeated can be right. Difficulty decoding the delivery tells you to repair the exchange; it does not settle the claim being exchanged.`,
        ],
      },
      {
        title: `Check the connector rather than the accent`,
        paragraphs: [
          `You ask the technician to write the connector name or point to it on a product diagram. Together you compare the speaker's model information with the cable specification. Suppose the first recommendation matches and the second does not. The relevant evidence is the match, not which delivery sounded smoother. If documentation remains unclear, keep the purchase undecided rather than substituting confidence for verification. Ask only for the detail you missed, in a mutually usable format. The technician does not need to erase an accent, change identity, or pass an informal fluency test to deserve consideration.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Repair the name, then check it`,
        alt: `The customer requests the connector name in writing and compares it with the model specification.`,
        caption: `The fictional exchange separates hearing the claim from verifying it.`,
        items: [
          { label: 'Customer', detail: 'I missed the connector name. Could you write it or show the label?' },
          { label: 'Technician', detail: 'Here is the connector and its specification.' },
          { label: 'Customer', detail: 'Let us compare that with the speaker model information.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`Paper`, `Two fictional product recommendations`],
      steps: [
        `Write two competing cable recommendations without assigning either speaker an accent.`,
        `List the evidence needed to choose, such as connector type and the equipment specification.`,
        `Imagine missing one spoken term. Write a targeted request for repetition or a usable written equivalent.`,
        `Check that your decision rule would stay the same if the speakers exchanged delivery styles.`,
      ],
      notice: `The decision depends on the product evidence, while the repair concerns the missing term.`,
      troubleshooting: `If your rule says "sounds knowledgeable," replace that impression with a checkable specification or demonstration.`,
    },
    recall: {
      prompt: `Two gardening tutors disagree about a seed's planting season, and one is easier for you to understand. How would you evaluate the advice?`,
      hint: `First recover the claim, then compare evidence.`,
      answer: `Clarify each recommendation and check reliable guidance for that plant and climate. Familiarity of accent can affect your experience of listening, but it does not establish which advice fits the conditions.`,
    },
    quiz: {
      question: `You understood a fluent explanation but still lack evidence for it. What follows?`,
      options: [`Fluency can break the tie because comprehension was easier.`, `Check the claim using the same standard as the harder-to-hear explanation.`, `Prefer the harder-to-hear speaker to compensate for possible bias.`],
      correctIndex: 1,
      explanation: `Equal evidential standards address the problem. Neither fluency nor reversing the preference establishes accuracy.`,
    },
    takeaway: `Repair what you missed; verify what was claimed.`,
    sourceNote: `The accent experiments measured credibility judgments under specific conditions. They do not establish individual bias in every exchange or differences in speaker competence.`,
  },
  {
    id: 'presence-013',
    outcome: `Supply a usable reference point when pointing carries essential location information.`,
    scene: `A volunteer directs a visitor to a blue envelope on a labeled community notice shelf.`,
    sections: [
      {
        title: `The direction lives in the hand`,
        paragraphs: [
          `A visitor asks where to leave a membership form. You point across the community room and say, "In that envelope over there." You know which shelf your hand indicates. The visitor is looking at an interpreter and misses the gesture. Repeating "over there" louder does not add the missing location. The words contain no shelf name, and your viewpoint is not necessarily the visitor's viewpoint. The communication problem is an omitted reference, not demonstrated inattention.`,
        ],
      },
      {
        title: `Make the reference shared`,
        paragraphs: [
          `A reference point is a feature both people can identify, such as the entrance or a shelf label. Relative words like left depend on which way a person faces. Named references reduce that ambiguity when they are accessible. You could say "the shelf marked Membership, beside the entrance," then ask whether that description works. More speech is not always the answer: a usable text description, tactile information, or agreed assistance may fit better. Sign languages are languages with their own structure, not body-language clues to be decoded.`,
        ],
      },
      {
        title: `Name the shelf and the target`,
        paragraphs: [
          `In this room, the Membership shelf is beside the entrance; the Events shelf is across from it. The blue envelope is on Membership. You supply those names and the visitor confirms which shelf you mean. If color or printed labels are unavailable to them, ask which reference or assistance they would prefer rather than adding more visual detail. The check is whether the person can locate the destination using their communication method. Pointing may still accompany the explanation when useful. You are repairing an essential missing detail, not banning gestures from conversation.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Membership beside the entrance`,
        alt: `Top view with Events across from Membership; the Membership shelf and envelope are beside the entrance.`,
        caption: `The named entrance anchors the fictional layout; left and right alone would depend on viewpoint.`,
        items: [
          { label: 'Events shelf', detail: 'Not the destination', x: 20, y: 20, shape: 'box' },
          { label: 'Membership shelf', detail: 'Blue envelope here', x: 80, y: 20, shape: 'box' },
          { label: 'Visitor', detail: 'Needs a usable reference', x: 20, y: 80, shape: 'person' },
          { label: 'Entrance', detail: 'Beside Membership', x: 80, y: 80, shape: 'box' },
        ],
      },
      {
        type: 'dialogue',
        title: `Replace "there"`,
        alt: `A location is named and checked instead of conveyed only by pointing.`,
        caption: `Ask whether the reference works; a printed label is not universally accessible.`,
        items: [
          { label: 'Volunteer', detail: 'Membership shelf, beside the entrance. Is that a usable reference?' },
          { label: 'Visitor', detail: 'Yes, I can find that shelf.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: [`A safe tabletop`, `Two ordinary objects`, `Paper`],
      steps: [
        `Place two objects on the tabletop without blocking a route. Pick one as your destination.`,
        `Write directions from a clearly named starting point, without pointing or using only "there."`,
        `Check whether the directions still identify the object from the other side of the table.`,
        `Revise viewpoint-dependent words and add a question about which format the recipient can use.`,
      ],
      notice: `The target can be identified from your description without seeing your hand.`,
      troubleshooting: `If the landmarks are also inaccessible, ask about a different reference or assistance rather than piling on visual adjectives.`,
    },
    recall: {
      prompt: `During an audio call, you say "click here" while explaining a form. What information should replace the missing gesture?`,
      hint: `Name a control and its context.`,
      answer: `Identify the control by its accessible name and the relevant section, then check whether the listener can find it. A pointer position on your screen is not shared over audio.`,
    },
    quiz: {
      question: `A recipient cannot use your color-based direction. What should change?`,
      options: [`Agree on another usable label or reference.`, `Describe the shade in more detail.`, `Repeat the direction from your own viewpoint.`],
      correctIndex: 0,
      explanation: `A different reference repairs the access gap. More detail in an unavailable channel does not supply usable location information.`,
    },
    takeaway: `Essential location information must exist in a form the recipient can use.`,
    sourceNote: `ADA and AAC guidance inform access choices. The shelf layout is original and does not assume that speech, print, color, or gestures work for everyone.`,
  },
  {
    id: 'presence-014',
    outcome: `Respect an explicit refusal without using a facial movement to invent hidden agreement.`,
    scene: `A ceramicist declines an invitation to display work at a local fair while smiling.`,
    sections: [
      {
        title: `The smile does not reverse the sentence`,
        paragraphs: [
          `You invite Noor to display ceramics at a local fair. Noor smiles and says, "No, I cannot take a stall this month." You wonder whether the smile means encouragement to persuade them. It might accompany friendliness, discomfort, habit, or something else. The refusal, however, is already clear. Asking Noor to repeat it with a more serious face would make a visible performance the price of having the answer respected.`,
        ],
      },
      {
        title: `An observation is not a second transcript`,
        paragraphs: [
          `An observation describes something you noticed, such as a smile. An interpretation assigns meaning, such as "secretly wants to agree." Research reviewing facial expressions cautions against treating a particular facial movement as a dependable reading of an inner emotion. Context and people vary. Even knowing an emotion would not automatically tell you which invitation the person authorizes. There is no reliable percentage formula that makes face, voice, and words vote on consent. A cue can prompt clarification of an unclear practical detail; it cannot cancel an explicit boundary.`,
        ],
      },
      {
        title: `Respond to the answer you received`,
        paragraphs: [
          `You answer, "Understood. I will leave you off the stall list," and continue discussing the glazing workshop you both attended. That acts on the stated choice without requiring an explanation of the smile. If Noor instead said "Maybe, I need the setup times," then asking which times they need would address an actual uncertainty. These situations differ because one contains a refusal and the other a request for information. Do not turn an ordinary meaning check into repeated pressure for a yes. Warmth and a boundary can appear together without contradicting each other.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Act on the refusal`,
        alt: `Noor declines a stall, and the organizer removes the stall expectation without challenging the smile.`,
        caption: `The smile belongs to the scene description, not a hidden line of dialogue.`,
        items: [
          { label: 'Organizer', detail: 'Would you like a ceramics stall this month?' },
          { label: 'Noor', detail: 'No, I cannot take a stall this month.' },
          { label: 'Organizer', detail: 'Understood. I will leave you off the stall list.' },
        ],
      },
    ],
    practice: {
      minutes: 4,
      needs: [`Paper`, `The fictional fair invitation`],
      steps: [
        `Write the observable facts: Noor smiled and declined a stall.`,
        `List two possible meanings of the smile, keeping both explicitly uncertain.`,
        `Draft a response that accepts the refusal and removes the practical expectation.`,
        `Compare with "Maybe, I need the times." Write a clarification only for that genuinely unresolved version.`,
      ],
      notice: `You distinguish an uncertain cue from an already clear decision.`,
      troubleshooting: `If your response asks Noor to prove the refusal, remove the challenge and state what you will do next.`,
    },
    recall: {
      prompt: `A friend laughs while saying they do not want their photo posted. What should you do with the photo and the uncertainty about the laugh?`,
      hint: `Permission does not come from your preferred interpretation.`,
      answer: `Do not post the photo. Leave the laugh's meaning uncertain rather than using it as authorization. You have enough information to respect the stated boundary without resolving their emotion.`,
    },
    quiz: {
      question: `Someone declines a game invitation while sounding cheerful. Which response fits the available information?`,
      options: [`Check again because cheerfulness makes the answer ambiguous.`, `Offer a smaller commitment before accepting the refusal.`, `Accept the refusal and keep the conversation friendly.`],
      correctIndex: 2,
      explanation: `A cheerful delivery can coexist with a clear no. Neither repeated checking nor a substitute offer is needed to make the refusal count.`,
    },
    takeaway: `A facial cue is not permission to overrule a spoken or otherwise explicit boundary.`,
    sourceNote: `The facial-inference review and consent philosophy support these distinctions. This original dialogue teaches no lie detector, personality profile, or universal emotion code.`,
  },
  {
    id: 'presence-015',
    outcome: `Choose a repair question as specific as the part of the message you actually understood.`,
    scene: `A print-shop customer misses the paper size while arranging a poster proof.`,
    sections: [
      {
        title: `Most of the instruction arrived`,
        paragraphs: [
          `A print-shop worker says your poster proof will be ready on Friday, on a paper size you do not catch. You heard the day and understood that this is a proof rather than the final batch. "Could you repeat everything?" would work, but it makes both of you rebuild information already shared. You can instead identify the missing piece: "I heard Friday; which paper size will the proof use?" The worker now knows what needs repairing.`,
        ],
      },
      {
        title: `Three ways to signal a gap`,
        paragraphs: [
          `Conversation repair means resolving a problem in hearing or understanding. A broad request, such as "Could you repeat that?", leaves the location of the problem open. A targeted request names the missing part, such as "Which size?" A proposed understanding offers a candidate for confirmation: "Did you say A3?" Researchers found these kinds of repair across twelve sampled languages. Specific requests can preserve more shared information, but specificity must reflect what you really understood. If machinery covered the whole sentence, the broad request is the honest and useful choice.`,
        ],
      },
      {
        title: `Confirm a candidate without planting certainty`,
        paragraphs: [
          `Suppose you partly heard "A3" but are unsure. Asking "Did you say A3?" labels it as a candidate, not a confirmed order. The worker replies, "A4 for the proof; the final poster is A3." You repeat the distinction before proceeding. If the terms themselves are unfamiliar, ask what each refers to rather than merely repeating the sound. Repair succeeds when the needed meaning becomes shared. It is not a contest to use the fewest words, and a longer explanation is appropriate when the problem is conceptual rather than a missed syllable.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `A candidate receives a correction`,
        alt: `The customer checks A3, receives A4 for the proof, and confirms the distinction from the final poster.`,
        caption: `The paper labels are fictional order details. Notice that the guess remains a question until answered.`,
        items: [
          { label: 'Customer', detail: 'I heard Friday. Did you say A3 for the proof?' },
          { label: 'Worker', detail: 'A4 for the proof; the final poster is A3.' },
          { label: 'Customer', detail: 'Understood: Friday, A4 proof, then the A3 final poster.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`Paper`, `A pencil`],
      steps: [
        `Write "Bring the blue folder to Room 6 on Wednesday." Cover the room number with a small scrap.`,
        `Write a question that preserves the folder and day while asking for the missing room.`,
        `Now imagine hearing almost nothing. Write a broad repeat request for that different gap.`,
        `Uncover the original and write a confirmation. Mark any guess as a question rather than a fact.`,
      ],
      notice: `Your repair changes with the amount actually understood, and the confirmed version matches the instruction.`,
      troubleshooting: `If a word is audible but unfamiliar, ask for its meaning rather than requesting another identical repetition.`,
    },
    recall: {
      prompt: `A baker explains a pickup plan. You heard the location but do not know whether "after noon" includes twelve exactly. What would you ask?`,
      hint: `Identify whether the problem is hearing or meaning.`,
      answer: `Ask what earliest pickup time they mean, while keeping the known location. You heard the phrase; its practical interpretation is the gap. Repeating the whole plan need not resolve that ambiguity.`,
    },
    quiz: {
      question: `You heard every word of an instruction but do not understand a technical term. Which repair fits?`,
      options: [`Ask the speaker to repeat the sentence louder.`, `Ask what the unfamiliar term means in this task.`, `Confirm your best guess without mentioning uncertainty.`],
      correctIndex: 1,
      explanation: `The missing information is meaning, not volume. A targeted explanation repairs that gap without disguising a guess as understanding.`,
    },
    takeaway: `Locate the gap when you can; keep broad repair available when you cannot.`,
    sourceNote: `Dingemanse and colleagues studied naturally occurring repair across twelve languages. These print-shop and practice exchanges are original, not transcripts or speed targets.`,
  },
  {
    id: 'presence-016',
    outcome: `Repair how a request landed while keeping its practical need open for discussion.`,
    scene: `A kitchen helper's hurried request about a tray sounds like criticism of the cook.`,
    sections: [
      {
        title: `A reasonable request lands badly`,
        paragraphs: [
          `You are setting out cold food for a shared lunch and say, "Move that tray." The cook hears criticism of their arrangement and replies, "I have already made space." You intended to clear a spot for serving plates, not judge the cooking. Now there are two problems: the plates still need somewhere to go, and the cook understood a criticism. Repeating the same command louder would preserve both problems rather than clarifying either one.`,
        ],
      },
      {
        title: `Separate reception, intention, and request`,
        paragraphs: [
          `Reception is how the other person understood the exchange. Intention is what you were trying to do. The practical request is the change you want considered. These can differ without either person having a complete account of the other's mind. A repair can acknowledge reception, explain the intended action, and invite a response. Acknowledging that something sounded critical does not require admitting to a motive you did not have. Equally, saying "I meant well" does not automatically undo the effect or identify which tray should move.`,
        ],
      },
      {
        title: `Restate the need precisely`,
        paragraphs: [
          `You say, "That came out abruptly. I meant the empty tray beside the plates. Could we move it to the side shelf so people can serve themselves?" The cook explains that the shelf is full, and suggests another spot. You now have an ordinary arrangement problem to solve together. Your apology has not erased the need for serving space, and their reply is not reduced to oversensitivity. Voice, fatigue, cultural habits, and individual communication styles can affect an exchange. Repair the concrete misunderstanding rather than requiring a performance of cheerfulness from either person.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Keep the serving-space need`,
        alt: `An abrupt tray request is acknowledged, specified, and discussed with a practical alternative.`,
        caption: `The fictional repair names the object and purpose; it does not debate whether the cook should feel criticized.`,
        items: [
          { label: 'You', detail: 'That came out abruptly. Could we move the empty tray to make serving space?' },
          { label: 'Cook', detail: 'The side shelf is full. What about the spare counter?' },
          { label: 'You', detail: 'That works. The plates can stay here.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`Paper`, `One fictional low-stakes request`],
      steps: [
        `Write "Move that stack" and imagine the recipient hears criticism of their tidiness.`,
        `Add a sentence acknowledging the abrupt wording without declaring what the recipient must feel.`,
        `Name the stack, desired location, and practical reason. Leave room for an alternative.`,
        `Write a reply showing a real obstacle, then revise the arrangement while preserving the original need.`,
      ],
      notice: `The repaired exchange can discuss the object and obstacle instead of arguing about hidden motives.`,
      troubleshooting: `If the script says "Sorry you misunderstood," replace it with acknowledgment of your wording and a concrete restatement.`,
    },
    recall: {
      prompt: `Your request to lower music sounds like an insult to a friend's playlist. How could you repair the exchange without withdrawing the noise concern?`,
      hint: `Keep the musical preference separate from the practical need.`,
      answer: `Acknowledge the abrupt request and explain that you need lower volume to follow the conversation. Ask about a workable volume or location. You need not pretend the playlist was the problem.`,
    },
    quiz: {
      question: `The recipient accepts your repair but says your proposed solution will not work. What next?`,
      options: [`Withdraw the need because the first solution failed.`, `Discuss another solution to the same concrete need.`, `Repeat your intention until they accept the original solution.`],
      correctIndex: 1,
      explanation: `Repair opens practical negotiation; it does not guarantee your first proposal. The need and the proposed method are different things.`,
    },
    takeaway: `Acknowledge the exchange, specify the need, and leave room for a response.`,
    sourceNote: `Conversation-repair and prosody research provide background. This original rehearsal concerns ordinary misunderstandings, not an obligation to remain in a threatening interaction.`,
  },
  {
    id: 'presence-017',
    outcome: `Recognize message composition as an unfinished turn and follow the person's completion signal.`,
    scene: `A games-library member composes a borrowing question on a communication device.`,
    sections: [
      {
        title: `An answer is being made in the quiet`,
        paragraphs: [
          `At a games library, Nia asks Omar which game he wants to borrow. Omar starts composing a response on his communication device. Before it is ready, Nia asks whether he likes strategy games, then suggests a card game. The subject changes twice while Omar is still building the answer to the first question. What looked to Nia like an empty pause was actually occupied by work on a contribution. Adding questions made that work harder to complete.`,
        ],
      },
      {
        title: `Communication is not limited to immediate speech`,
        paragraphs: [
          `Augmentative and alternative communication, or AAC, includes methods that supplement or replace speech, such as writing, pictures, and speech-generating devices. People use different combinations and ways of composing. A turn can therefore be in progress before a listener hears or sees its final message. Ask how the person signals completion and whether any help is wanted. Do not assume a device pause means a lack of understanding. Speed, method, and intellectual ability are not interchangeable measures, and familiar sentence endings are not permission to supply someone's words.`,
        ],
      },
      {
        title: `Wait for the chosen signal`,
        paragraphs: [
          `Omar indicates that he will play the full message when it is ready. Nia leaves the original question in place and waits. The message asks whether the cooperative game can be borrowed for a whole week. That is different from simply naming a favorite game, which Nia might have guessed. She answers the borrowing question, then leaves another opportunity for a reply. She does not touch the device or finish the message unless Omar requests assistance. If she loses track, she clarifies after the turn rather than interrupting its composition with a new topic.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `One question stays open`,
        alt: `Nia agrees to wait, Omar completes his borrowing question, and Nia answers that question.`,
        caption: `The composition interval has no prescribed length. The fictional user's chosen completion signal governs the handoff.`,
        items: [
          { label: 'Nia', detail: 'I will wait until you play the full message.' },
          { label: 'Omar, completed message', detail: 'Can I borrow the cooperative game for a whole week?' },
          { label: 'Nia', detail: 'Yes, a week is available. Is there anything else you want to check?' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`A private text editor`, `The fictional game-library question`],
      steps: [
        `Write "Which game would you like?" and a separate note saying the answer is still being composed.`,
        `Draft a full answer that includes a borrowing question, rather than only a game title.`,
        `Read it only after you decide it is complete, then write a response to its actual question.`,
        `Draft a real-world question about completion signals and wanted assistance. Do not treat your typing speed as a model for another person.`,
      ],
      notice: `The completed message contributes something you could not infer from the first few words.`,
      troubleshooting: `If you start anticipating the ending, return to the original question and leave the composition interval unfilled.`,
    },
    recall: {
      prompt: `A club member writes responses by hand and pauses halfway through a sentence. What would let their contribution remain theirs?`,
      hint: `A pause inside composition is not automatically a handoff.`,
      answer: `Follow their agreed completion signal and ask before helping. Do not finish the sentence, turn the page, or introduce more questions simply because writing takes time.`,
    },
    quiz: {
      question: `You think you know a device user's sentence ending, but they have not finished. What fits?`,
      options: [`Wait for completion unless they request help.`, `Say the likely ending so they can correct it.`, `Ask a new yes-or-no question to shorten their response.`],
      correctIndex: 0,
      explanation: `Waiting preserves authorship. Guessing or replacing the question changes the message before the person has finished constructing it.`,
    },
    takeaway: `A message in preparation is participation, not an empty space to fill.`,
    sourceNote: `AAC and ADA guidance support communication access. This original rehearsal does not simulate disability, assess competence, or substitute for required communication support.`,
  },
  {
    id: 'presence-018',
    outcome: `Direct questions and decisions to the participant while preserving their chosen interpreting arrangement.`,
    scene: `An art-course registrar welcomes a student who uses a sign-language interpreter.`,
    sections: [
      {
        title: `The student disappears from the question`,
        paragraphs: [
          `At an art-course registration desk, a staff member asks an interpreter, "Which class does she want?" The student, Hana, is present and ready to decide. The interpreter provides access to the conversation; they are not the person choosing a class. A small change in address makes that distinction visible: "Which class would you like?" directed to Hana, using the interpreting arrangement she needs. Direct address does not require Hana to look into the registrar's eyes.`,
        ],
      },
      {
        title: `Two roles, one participant's decision`,
        paragraphs: [
          `An interpreter conveys meaning between languages or communication forms. A companion may provide other support, but neither role automatically owns the person's preferences. Allow time for the question to be interpreted and for the response to return before adding another question. Visual access may require the student to see the interpreter and the registrar in a workable arrangement. Ask about positioning instead of insisting on a fixed head angle. A relative is not automatically a qualified interpreter, and informal friendliness does not replace the support a formal service must provide.`,
        ],
      },
      {
        title: `Ask, wait, and confirm with Hana`,
        paragraphs: [
          `The registrar asks Hana which course she wants, then waits through interpretation. Hana asks whether printmaking materials are included. The registrar answers her question rather than asking the interpreter which package seems best. Before involving Hana's companion in payment details, the registrar checks whether Hana wants that involvement. The triangle in the diagram is only a starting arrangement: Hana and the interpreter may need another position. What must remain stable is authorship. The student's question, preference, and permission govern the exchange even when another person conveys the words or signs between participants.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Address and visual access`,
        alt: `Top-view triangle places Hana opposite the registrar, with the interpreter visible beside the registrar.`,
        caption: `Arrows distinguish direct address from interpreter access. Positions are schematic and must be agreed, not imposed.`,
        items: [
          { label: 'Registrar', detail: 'Questions go to Hana', x: 20, y: 20, shape: 'person' },
          { label: 'Interpreter', detail: 'Conveys the exchange', x: 80, y: 20, shape: 'person' },
          { label: 'Hana', detail: 'Chooses the class', x: 50, y: 80, shape: 'person' },
        ],
        arrows: [{ from: 0, to: 2, label: 'Address' }, { from: 2, to: 1, label: 'Visual access' }],
      },
      {
        type: 'dialogue',
        title: `Keep the question with Hana`,
        alt: `The registrar asks Hana directly, and Hana's interpreted response asks about materials.`,
        caption: `Interpretation carries these turns; it does not choose an answer.`,
        items: [
          { label: 'Registrar to Hana', detail: 'Which class would you like?' },
          { label: 'Hana, via interpreter', detail: 'Printmaking. Are the materials included?' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`Paper`, `Three labeled position markers`],
      steps: [
        `Label markers participant, staff, and interpreter. Arrange a hypothetical view without prescribing gaze.`,
        `Rewrite "What does he prefer?" as a question to the participant.`,
        `Add a pause for interpretation and a response before the next question.`,
        `Draft a permission check before involving a companion in personal details. Mark the layout as needing agreement.`,
      ],
      notice: `The participant remains the decision-maker in the script and layout.`,
      troubleshooting: `If you keep addressing the interpreter, replace third-person references with a direct question to the participant.`,
    },
    recall: {
      prompt: `A museum visitor brings a support companion who answers your first question. How can you establish the preferred arrangement without dismissing support?`,
      hint: `Ask the visitor about the companion's role.`,
      answer: `Address the visitor and ask how they want to communicate and involve the companion. Respect chosen assistance without automatically transferring decisions or private information to that person.`,
    },
    quiz: {
      question: `A student watches the interpreter rather than your face. What should guide your response?`,
      options: [`Ask them to look at you to confirm engagement.`, `Switch all questions to the interpreter.`, `Continue addressing the student within the agreed arrangement.`],
      correctIndex: 2,
      explanation: `Looking at interpretation can be how the student accesses your message. It does not transfer ownership of the conversation.`,
    },
    takeaway: `Support conveys a person's contribution; it does not replace the person.`,
    sourceNote: `United Spinal and U.S. ADA guidance inform this original example. A schematic and courtesy alone do not establish compliance with applicable interpreting requirements.`,
  },
  {
    id: 'presence-019',
    outcome: `Resolve a specific sound conflict without treating movement as proof of inattention.`,
    scene: `A podcast discussion group negotiates pen tapping on a resonant tabletop.`,
    sections: [
      {
        title: `One sound competes with another`,
        paragraphs: [
          `During a podcast discussion, Tessa taps a pen against the tabletop. Ren cannot hear a quiet speaker over the repeated clicks. Saying "Stop fidgeting and pay attention" adds a claim about Tessa's mind to a real sound problem. Ren can describe the actual conflict instead: the pen clicks cover parts of the speech. That description leaves room to change the sound without requiring every person in the group to sit still.`,
        ],
      },
      {
        title: `Movement can have a function`,
        paragraphs: [
          `Stimming refers to repetitive movements or sounds that some people use for sensory or emotional regulation. In qualitative research, autistic adults described functions including managing intense thoughts and feelings, as well as pressure to suppress these behaviors. Those accounts do not identify the meaning of Tessa's tapping or diagnose anyone who moves repeatedly. A visible action and its personal function are different kinds of information. You can ask about an accommodation without demanding an explanation of that function. The shared issue is whether everyone can participate, not who best displays stillness.`,
        ],
      },
      {
        title: `Change the conflicting feature`,
        paragraphs: [
          `Ren says, "The pen clicks are covering words for me. Could we find an option that keeps the sound lower?" Tessa chooses to move her fingers on a folded cloth instead. They check whether Ren can now hear and whether that alternative works for Tessa. A quiet option is not automatically suitable merely because someone else selected it. If it does not work, they can discuss another surface, position, or format. The agreement concerns an audible conflict in this setting, not a ban on movement or a requirement to conceal neurodivergent ways of participating.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Same discussion, different sound`,
        alt: `Pen taps on a hard table compete with speech; a chosen cloth-surface movement is quieter in the example.`,
        caption: `Compare the conflicting sound, not the person's attention. The cloth option is fictional and individually chosen.`,
        items: [
          { label: 'Pen on tabletop', detail: 'Clicks cover words for Ren.' },
          { label: 'Movement on cloth', detail: 'Tessa chooses an option; both check usability.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: [`Paper`, `Optional pen and folded cloth`],
      steps: [
        `Write "No fidgeting during discussion" and underline the hidden assumption about attention.`,
        `Replace it with a concrete requirement: speech must be accessible without competing tapping sounds.`,
        `Draft a request for a mutually usable alternative. If comfortable, compare your own pen sound on a table and cloth.`,
        `Write a follow-up that checks both hearing and whether the chosen alternative works for the person moving.`,
      ],
      notice: `Your revised request names a sound problem without demanding stillness or a diagnosis.`,
      troubleshooting: `If one alternative fails, reopen the choice. Do not turn a suggested surface into another mandatory behavior.`,
    },
    recall: {
      prompt: `A classmate rocks quietly while following an online tutorial, and nobody reports an access conflict. What would justify asking them to stop?`,
      hint: `Distinguish discomfort with appearance from an actual obstruction.`,
      answer: `Movement alone supplies no attention verdict or reason to impose stillness. Discuss a concrete access or safety issue if one arises, rather than inventing one from an unfamiliar style.`,
    },
    quiz: {
      question: `A quieter alternative still does not work for the person who was tapping. What next?`,
      options: [`Keep it because the hearing problem is solved.`, `Return to the old tapping without discussing hearing.`, `Seek another arrangement that addresses both participants' needs.`],
      correctIndex: 2,
      explanation: `An access agreement must remain usable for both people. Resolving one barrier does not require ignoring the other person's reported need.`,
    },
    takeaway: `Negotiate the actual conflict, not a performance of stillness.`,
    sourceNote: `Autistic adults' stimming accounts are qualitative and varied. ADA guidance informs access. The cloth comparison is an original option, not a prescribed regulation technique.`,
  },
  {
    id: 'presence-020',
    outcome: `Check a shared plan through each person's usable next step rather than matching communication styles.`,
    scene: `Two friends coordinate returning borrowed costumes to a community theatre.`,
    sections: [
      {
        title: `Agreement looks convincing but stays incomplete`,
        paragraphs: [
          `Jules and Amira arrange to return costumes to a community theatre. Jules speaks quickly and gestures; Amira types a list and looks mainly at it. Jules worries that they are not connecting. Yet matching gaze or animation would not answer the practical question: who brings the costumes, and who has the storeroom key? A conversation can look smooth while leaving that gap, or look unconventional while giving both people exactly the information they need.`,
        ],
      },
      {
        title: `Communication is a shared task`,
        paragraphs: [
          `Mutual understanding means that participants have enough shared meaning for the task, with ways to question and correct it. It is not identical behavior. In a story-transmission study, Crompton and colleagues compared autistic, non-autistic, and mixed groups. Mixed groups lost detail faster in that task; the study did not detect a difference between the two same-neurotype conditions. This challenges explanations that locate every communication difficulty in one kind of person. It does not predict every pairing, prove that styles must match, or justify grouping people by diagnosis.`,
        ],
      },
      {
        title: `Check both next steps and the unresolved part`,
        paragraphs: [
          `Jules says, "I will bring the costume bag on Thursday." Amira's list says she will collect the key, but only if the caretaker confirms availability. That conditional step was missing from Jules's understanding. They decide not to promise the return time until the caretaker replies, and record who will ask. Both can now describe what they will do and what remains uncertain. Neither has to adopt the other's gaze, speech speed, or preferred format. A useful check also permits refusal: if Amira cannot collect the key, the plan needs changing rather than a more enthusiastic-looking agreement.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Find the missing condition`,
        alt: `Jules names the costume task; Amira identifies the unconfirmed key; they assign the follow-up.`,
        caption: `Speech and typed text share this fictional exchange. Understanding is checked through the plan, not appearance.`,
        items: [
          { label: 'Jules, spoken', detail: 'I will bring the costume bag on Thursday.' },
          { label: 'Amira, typed', detail: 'I can collect the key if the caretaker confirms.' },
          { label: 'Jules', detail: 'Then the return time is still unconfirmed.' },
          { label: 'Amira', detail: 'I will ask the caretaker and update you.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: [`A willing partner or two fictional role cards`, `Paper or an accessible shared note`],
      steps: [
        `Choose a harmless shared task, such as returning a borrowed item. Agree on a usable communication format.`,
        `Each person states their own next action, including any condition that must be met first.`,
        `Compare the two accounts and identify one gap, mismatch, or confirmed agreement.`,
        `Record who will resolve any gap, and ask whether either person needs to decline or change a role.`,
      ],
      notice: `Both roles and remaining uncertainties are visible without scoring gaze or expressiveness.`,
      troubleshooting: `If "yes, understood" hides the details, ask each person to describe their own next action in their preferred format.`,
    },
    recall: {
      prompt: `One friend sends detailed texts while another prefers voice notes when arranging a picnic. How would you check that the mixed-format plan works?`,
      hint: `Look for usable roles and unresolved dependencies.`,
      answer: `Have each confirm their own contribution and any condition in a format they can use. Reconcile differences in location, supplies, or timing. Matching formats is optional; accessible shared meaning is the goal.`,
    },
    quiz: {
      question: `Everyone nods, but two people expect the other to bring the tickets. Which check would have helped?`,
      options: [`Each person describing their own next action.`, `A longer period of eye contact before finishing.`, `Everyone repeating that they agree with the plan.`],
      correctIndex: 0,
      explanation: `Naming individual actions exposes the conflicting assumptions. Nods and general agreement do not identify who holds the tickets.`,
    },
    takeaway: `Judge a conversation by usable understanding, questions, and choices, not resemblance to one style.`,
    sourceNote: `The peer-transfer study concerns a specific experimental task, not every relationship. ADA guidance informs access; this original planning check is not a validated intervention.`,
  },
  {
    id: 'perspective-001',
    outcome: `Separate an action you can take from a result that also requires someone else's decision.`,
    scene: `A projector borrower prepares an appeal against a duplicate rental charge.`,
    sections: [
      {
        title: `The refund is not the whole action`,
        paragraphs: [
          `A community projector hire appears twice on your statement, although the receipt records one rental. You want the extra charge reversed. That desired result matters, but it is not something you can produce just by deciding to have it. You can gather the receipt, identify the duplicate, and send a clear request through the provider's process. Confusing those actions with guaranteed success leaves only two apparent options: command the refund or feel that nothing can be done.`,
        ],
      },
      {
        title: `A Stoic distinction about agency`,
        paragraphs: [
          `Epictetus distinguishes what belongs to our judgment and choice from external outcomes. Agency means the capacity to act within a situation. Borrowing this Stoic distinction, evaluate the honesty and care of your appeal separately from the institution's response. The distinction does not say an unfair charge becomes acceptable because it is external. Nor does it make distress a chosen failure. Available action depends on resources, access, and other constraints. The lens asks where your next contribution is possible, not whether your will controls every condition affecting you.`,
        ],
      },
      {
        title: `Pursue the result without promising it`,
        paragraphs: [
          `Your note can say: "Available action: send the receipt and identify the duplicate. Required cooperation: the provider checks and reverses it." You keep a copy and identify a reasonable follow-up if no reply comes. A rejection may reveal missing evidence or a problem with the process, not proof that acting was pointless. You can seek help or challenge that process where feasible. This way of dividing responsibility preserves both sides: you remain accountable for your contribution, and the institution remains accountable for its conduct. Accepting limited control is not the same as endorsing an unjust result.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Action and required cooperation`,
        alt: `Preparing a documented appeal is contrasted with the provider's decision about the refund.`,
        caption: `These are different parts of the fictional problem, not a claim that the outcome is unimportant.`,
        items: [
          { label: 'Prepare the appeal', detail: 'Identify the duplicate and provide the receipt.' },
          { label: 'Provider reviews it', detail: 'Reversal requires a decision you cannot command.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: [`Paper`, `One low-stakes unresolved problem, real or fictional`],
      steps: [
        `Write the result you want without claiming you can guarantee it.`,
        `List one action genuinely available to you and the evidence or preparation it needs.`,
        `Name the cooperation or external change required. Keep responsibility for that part with the relevant person or institution.`,
        `Draft your next action and a reasonable follow-up. Use fictional details rather than storing private account information here.`,
      ],
      notice: `You have an actionable contribution and a separate dependency, rather than an impossible promise.`,
      troubleshooting: `If the action says "make them agree," rewrite it as a request, preparation, or available challenge.`,
    },
    recall: {
      prompt: `You submit a photograph to a community exhibition and are not selected. How would this lens assess your effort without declaring selection irrelevant?`,
      hint: `Distinguish your submission from the selector's decision.`,
      answer: `Review whether the work and submission met the criteria, seek useful feedback if available, and decide what to revise. Selection still matters to you, but it was not wholly within your command.`,
    },
    quiz: {
      question: `An appeal was prepared carefully but rejected. Which assessment best fits this Stoic application?`,
      options: [`The rejection alone determines whether the effort had value.`, `Because rejection is external, there is no reason to pursue redress.`, `Review your contribution while considering further available challenges.`],
      correctIndex: 2,
      explanation: `Limited control separates evaluation from guarantee. It does not erase the outcome's importance or forbid further action against unfairness.`,
    },
    takeaway: `Take responsibility for your available contribution without claiming command of the whole result.`,
    sourceNote: `The Epictetus entry supplies philosophical background. This modern appeal example is a contestable application, not legal advice or a claim that emotions obey commands.`,
  },
  {
    id: 'perspective-002',
    outcome: `Identify real discretion inside a role without pretending that constraints disappear.`,
    scene: `A badminton captain allocates cleanup duties after a community tournament.`,
    sections: [
      {
        title: `A role becomes an explanation for everything`,
        paragraphs: [
          `After a badminton tournament, the captain says the newest players must do all the cleanup because "that is what captains have to arrange." The hall agreement requires the court to be cleared before closing. It does not specify that newcomers must do it. Two different things have been joined: a real responsibility and one chosen way of fulfilling it. Treating the second as automatic hides the decision from discussion and places its cost on people with less influence.`,
        ],
      },
      {
        title: `Freedom is situated, not unlimited`,
        paragraphs: [
          `Existentialist accounts of freedom examine how people act within the situations they inhabit. Situated freedom means that choices occur amid real conditions: time, money, authority, obligations, and other people's decisions. A captain cannot simply ignore the closing time, but may have discretion over dividing tasks. Discretion is the room a requirement leaves for judgment. A role can describe duties without providing a complete ethical script. Recognizing that room makes the chosen method answerable to reasons instead of protecting it behind a label such as captain, employee, or eldest sibling.`,
        ],
      },
      {
        title: `Rewrite the method as a choice`,
        paragraphs: [
          `The captain tries a more accurate sentence: "I need to arrange cleanup, and I have been assigning it to newcomers." Now alternatives become visible: ask about availability, divide equipment tasks, or rotate responsibility across events. Players with transport deadlines can name those constraints before agreeing. None of this proves that every alternative is affordable or equally fair. It does show that the original method needs a reason beyond the role. The captain can revise a decision within their authority while seeking help for conditions they cannot change, rather than claiming either total freedom or no choice at all.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Same duty, different allocation`,
        alt: `Assigning cleanup to newcomers is compared with an agreed division of available tasks.`,
        caption: `Both fictional options aim to clear the hall. The role does not by itself select the allocation.`,
        items: [
          { label: 'Newcomers do everything', detail: 'A chosen burden disguised as a role requirement.' },
          { label: 'Discuss and divide tasks', detail: 'Availability and responsibility become explicit.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: [`Paper`, `One ordinary role you hold or can imagine`],
      steps: [
        `Write a sentence beginning "My role requires..." about a low-stakes task.`,
        `Separate the genuine requirement from the method you normally choose to meet it.`,
        `List two feasible methods and who bears the effort under each. Include a real constraint.`,
        `Rewrite your explanation as a choice you can justify, and identify whose agreement you would need before changing it.`,
      ],
      notice: `Your note distinguishes a duty, a constraint, and a discretionary method.`,
      troubleshooting: `If every alternative is unsafe or unavailable, do not invent freedom. Identify the authority or support needed to widen the options.`,
    },
    recall: {
      prompt: `A club treasurer says the role requires collecting payments only in person, but the rules require only an accurate record. What should be examined?`,
      hint: `Which part is required, and which part is a method?`,
      answer: `Examine whether an accessible alternative could preserve accurate records within the treasurer's authority. The collection method is not justified merely by naming the role; actual safeguards and constraints still matter.`,
    },
    quiz: {
      question: `A coordinator cannot change a deadline but can change how work is divided. Where does the relevant discretion lie?`,
      options: [`In treating the deadline as optional.`, `In justifying and revising the allocation within the deadline.`, `In claiming the deadline determines every allocation choice.`],
      correctIndex: 1,
      explanation: `The fixed condition limits freedom without eliminating all judgment. The available method still needs reasons and consideration of others.`,
    },
    takeaway: `A role constrains action, but its remaining choices are still choices.`,
    sourceNote: `Existentialism contains differing accounts of freedom and responsibility. This tournament example is an original lens on discretion, not a claim that people choose oppressive conditions.`,
  },
  {
    id: 'perspective-003',
    outcome: `Examine an ambition through its ordinary work as well as the recognition attached to it.`,
    scene: `An aspiring sound designer considers a prestigious qualification before trying the everyday tasks.`,
    sections: [
      {
        title: `The announcement is clearer than the work`,
        paragraphs: [
          `Mara imagines announcing that she has entered a respected sound-design course. She can picture the congratulatory messages but knows little about an ordinary editing session. This does not make the ambition false. Recognition, financial security, and belonging can be real reasons for pursuing training. It does mean that one part of the imagined future is vivid while another remains unexamined: the repeated work she would actually spend time doing after the announcement has passed.`,
        ],
      },
      {
        title: `Authenticity asks about endorsement`,
        paragraphs: [
          `Authenticity, in philosophical discussion, concerns how a life or commitment becomes one's own rather than merely performed or inherited. Philosophers disagree about its requirements. Endorsement means being able to examine and stand behind your reasons, not discovering a pure self untouched by other people. A goal introduced by family can be worth keeping. A rebellious goal can still be driven mainly by an audience. Temporarily removing applause is a thought experiment that makes neglected reasons visible; it is not a test that declares all social motivation illegitimate.`,
        ],
      },
      {
        title: `Sample a task before judging the whole ambition`,
        paragraphs: [
          `Mara makes a sound-cue list for a short scene: footsteps approach, a latch clicks, and a door opens. She enjoys deciding what each sound contributes even though nobody will see the list. That is one reason to investigate the course further, not proof of a destined career. The matrix separates interest in the work from interest in recognition. Either, both, or neither can be present. If only the title appeals, Mara can examine that honestly and compare other ways to meet her needs before spending money. One small sample cannot stand in for every part of the profession.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: `Work interest and recognition`,
        alt: `Four cells cross interest in sound-design work with interest in its public recognition.`,
        caption: `Rows distinguish work interest; columns distinguish recognition interest. These are reflection categories, not authenticity scores.`,
        items: [
          { label: 'Work yes, recognition yes', detail: 'Inspect both reasons for the course.' },
          { label: 'Work yes, recognition no', detail: 'The cue-list task still appeals privately.' },
          { label: 'Work no, recognition yes', detail: 'Examine what the title promises.' },
          { label: 'Work no, recognition no', detail: 'Reconsider why this goal remains.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: [`Paper`, `One ambition with a safe beginner task`],
      steps: [
        `Write the ambition without mentioning a title, announcement, or another person's reaction.`,
        `Name one ordinary task it involves. For sound design, list three sounds for someone entering a room.`,
        `Spend a few minutes doing that task privately with materials already available.`,
        `Record what appealed, what did not, and which practical or social reasons still matter. Choose one question for further investigation.`,
      ],
      notice: `You have a sample of the work and reasons beyond an imagined announcement.`,
      troubleshooting: `If the task is too advanced, choose planning or observation instead of buying training to perform the test.`,
    },
    recall: {
      prompt: `You want to become a volunteer mentor partly because a respected relative suggested it. How could you inspect the goal without rejecting its social origin?`,
      hint: `Ask what the commitment involves between moments of recognition.`,
      answer: `Learn about the ordinary preparation and support work, try a suitable supervised introductory task, and examine your reasons. A family influence neither proves nor disproves that you can endorse the commitment.`,
    },
    quiz: {
      question: `You enjoy a private sample task and also value the qualification's reputation. What follows?`,
      options: [`Both reasons deserve examination; their coexistence does not settle authenticity.`, `Public recognition cancels the private interest.`, `Enjoying one task proves the whole career is right for you.`],
      correctIndex: 0,
      explanation: `The experiment supplies reasons to inspect, not a verdict. Social motivation is not automatically false, and one sample is incomplete evidence.`,
    },
    takeaway: `Inspect the life an ambition involves, not only the story you could announce about it.`,
    sourceNote: `Authenticity and existentialism entries present contested philosophical accounts. This task sample is original and cannot certify a true self or predict career satisfaction.`,
  },
  {
    id: 'perspective-004',
    outcome: `Give a chosen ordinary task a defensible local reason without requiring a final answer about life's meaning.`,
    scene: `A family member sorts loose recipe cards for a shared cookbook.`,
    sections: [
      {
        title: `A small task meets a very large question`,
        paragraphs: [
          `You offered to sort loose recipe cards for a family cookbook. Halfway through, the work feels repetitive and you ask what the point of any of it is. A cousin still needs to find the lentil recipe, but suddenly that reason seems too small. You are asking the task to justify not only an afternoon's work but an entire life. Those are different questions, and the second need not be answered before you can assess the first.`,
        ],
      },
      {
        title: `What Camus means by the absurd`,
        paragraphs: [
          `For Camus, the absurd arises in the tension between our demand for ultimate meaning and a world that does not supply a satisfying final answer. It is not simply a synonym for silly or inconvenient. His philosophical response emphasizes continued engagement rather than resignation. Borrowed here, the lens permits acting for a limited reason while leaving the larger question unresolved. This is a perspective on living, not a scientific finding that meaning cannot exist. Other philosophies and religious traditions offer different accounts of the larger question.`,
        ],
      },
      {
        title: `Choose the bounded reason honestly`,
        paragraphs: [
          `You decide to group the cards by dish so your cousin can locate the lentil recipe. You do not claim that organizing cards is your destiny or that repetition secretly guarantees growth. You also check whether you still freely endorse the task: perhaps a smaller batch would meet the need without taking your entire afternoon. Continued engagement does not mean every demand deserves obedience. The local reason is enough only if it withstands ordinary scrutiny about usefulness, fairness, and available time. Finishing the batch can serve someone while leaving your ultimate questions genuinely open.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Two demands placed on the cards`,
        alt: `Waiting for a final life purpose is contrasted with sorting a chosen batch so a cousin can find a recipe.`,
        caption: `The comparison distinguishes questions of different scope; it does not prove a theory of meaning.`,
        items: [
          { label: 'Require an ultimate answer', detail: 'The recipe task must justify the whole life.' },
          { label: 'Use a local reason', detail: 'A chosen batch lets a cousin find the lentil recipe.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: [`A few papers or digital notes you own`, `A private note`],
      steps: [
        `Choose a small, freely accepted sorting task with no sensitive material or urgent obligation.`,
        `Name who benefits and exactly what becomes easier to find.`,
        `Set a modest stopping point, such as organizing one small group of notes, and complete it.`,
        `Write the local reason in one sentence. Leave larger meaning questions open rather than inventing a life lesson.`,
      ],
      notice: `A specific item is easier to find, and the reason for the task remains bounded.`,
      troubleshooting: `If no defensible beneficiary or purpose appears, choose another task rather than manufacturing significance for this one.`,
    },
    recall: {
      prompt: `You agreed to water a neighbor's plants but feel the task cannot answer your larger questions about purpose. How could this lens separate the decisions?`,
      hint: `A local commitment and an ultimate explanation have different scopes.`,
      answer: `Watering can have the ordinary reason of honoring an accepted commitment and caring for the plants. You can assess that reason without pretending it resolves ultimate meaning or makes every imposed chore worthwhile.`,
    },
    quiz: {
      question: `A repetitive volunteer task is also unfairly assigned. What does this Camus-inspired application permit?`,
      options: [`Keep doing it because engagement makes every task worthwhile.`, `Question the assignment while leaving ultimate meaning unresolved.`, `Stop considering fairness until a final life purpose is found.`],
      correctIndex: 1,
      explanation: `Local reasons still need scrutiny. Engagement amid uncertainty does not require accepting an unfair demand or postponing ordinary ethical judgment.`,
    },
    takeaway: `An ordinary reason can guide an action without becoming an answer to everything.`,
    sourceNote: `The Camus entry supplies the philosophical account. The recipe-card application is original, contested, and not a prescription to endure pointless or unfair labor.`,
  },
  {
    id: 'perspective-005',
    outcome: `Distinguish caring about something from requiring its current form to remain unchanged.`,
    scene: `Two friends adapt their regular park-sketching routine after one changes work shifts.`,
    sections: [
      {
        title: `The friendship and the routine are not identical`,
        paragraphs: [
          `Nell and Vic have sketched in the park on Sunday mornings for years. Vic's new work shifts make that time unavailable. Nell feels that losing the routine means losing the friendship, so every alternative sounds like a poor substitute. The old form did matter: it offered shared attention, regular contact, and the pleasure of drawing together. But those values are not identical to one fixed day and location, even though changing them can still feel sad.`,
        ],
      },
      {
        title: `Impermanence concerns dependence on conditions`,
        paragraphs: [
          `In Buddhist philosophical discussion, impermanence challenges the idea that conditioned things can remain permanently secure. Conditioned means dependent on causes and circumstances. This sketching routine depended on compatible schedules, available space, and both friends being willing and able to attend. When those conditions change, its current form may not persist. Borrowing the lens means noticing that dependence instead of treating the change as proof that the friendship was never valuable. It does not require withdrawing care. Buddhist traditions differ, and this small exercise does not represent all their teachings or practices.`,
        ],
      },
      {
        title: `Adapt the form without demanding a feeling`,
        paragraphs: [
          `Nell tells Vic what the routine provided and asks what remains workable. They try exchanging a sketch during the week and arranging an occasional park visit when both are free. That is not a claim that messages equal the old mornings or cancel the loss. It is a way to preserve some care under changed conditions. Either friend can say the trial is not enough and discuss it further. Sadness need not be corrected before adapting. The practical question is what they can sustain now, not how to prove that a valued relationship should never change.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Keep care, reconsider the form`,
        alt: `Insisting on unavailable Sundays is compared with an agreed sketch exchange and occasional park visit.`,
        caption: `The fictional adaptation preserves part of the routine's value, not an equivalent replacement for every loss.`,
        items: [
          { label: 'Only Sunday counts', detail: 'Care is tied to a condition that no longer holds.' },
          { label: 'Try another shared form', detail: 'Sketches and visits are agreed around present availability.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: [`Paper`, `A manageable changing routine`],
      steps: [
        `Choose an ordinary change, not a painful loss you do not want to examine.`,
        `Name the routine's current form and two things it provides, such as contact or shared enjoyment.`,
        `Identify which condition changed and propose one feasible way to preserve some of the value.`,
        `Draft an invitation to discuss that adaptation. Leave room for disagreement and sadness instead of requiring a positive response.`,
      ],
      notice: `Your proposal separates a valued relationship or activity from a single arrangement.`,
      troubleshooting: `If every alternative feels wrong, record the loss without forcing a solution. Adaptation can require more discussion or support.`,
    },
    recall: {
      prompt: `A community garden loses access to its usual plot. How could you consider impermanence without treating years of care as wasted?`,
      hint: `Separate previous value from permanent availability.`,
      answer: `Recognize the care and relationships the plot supported, then discuss what can continue elsewhere or in another form. The plot's loss is real; its temporary availability does not erase what happened there.`,
    },
    quiz: {
      question: `A new routine works practically, but you still miss the old one. What fits this application?`,
      options: [`The sadness shows the adaptation failed.`, `The new routine should be described as equally valuable in every way.`, `Adaptation and a remaining sense of loss can coexist.`],
      correctIndex: 2,
      explanation: `Recognizing change does not prescribe an emotion or require equivalence between old and new arrangements. Care can continue alongside loss.`,
    },
    takeaway: `Question demands for permanence without abandoning the things you care about.`,
    sourceNote: `The Buddha entry provides philosophical background. This original routine exercise is not a summary of Buddhism, a grief treatment, or a promise of relief.`,
  },
  {
    id: 'perspective-006',
    outcome: `Identify an opportunity excluded by a self-label and try a bounded beginner version.`,
    scene: `A technically skilled friend avoids a casual drawing activity to protect an expert identity.`,
    sections: [
      {
        title: `The label starts deciding for you`,
        paragraphs: [
          `Ravi is the person friends ask to solve computer problems. He enjoys that competence, but declines a casual drawing afternoon because he would be a beginner. Nobody expects him to teach drawing. The risk he is avoiding is appearing inexperienced in front of himself. "I am the technical person" has become more than a useful description of some skills; it now decides which unrelated experiences Ravi is allowed to attempt.`,
        ],
      },
      {
        title: `An identity can have an opportunity cost`,
        paragraphs: [
          `An identity is a way you understand and describe who you are, often shaped by relationships and repeated actions. Opportunity cost means what is forgone when one choice excludes another. Here the cost of protecting effortless expertise is a possible afternoon of drawing and company. An existential lens treats self-description as open to revision through action rather than a finished inventory. That does not make every identity restrictive: belonging, continuity, and professional competence can be valuable. The question is whether a particular exclusion is endorsed or merely enforced by an unexamined label.`,
        ],
      },
      {
        title: `Permit one beginner action`,
        paragraphs: [
          `Ravi privately sketches a house key with a pencil. He notices the long edge, the hole, and the teeth, then draws a second attempt. The result need not be attractive or announce a new artistic identity. It demonstrates that an expert in one area can undertake a beginner task in another without losing previous competence. If he dislikes drawing, that is information too. The trial does not promise a hidden vocation. It simply replaces an identity-based refusal with an experience he can evaluate, while leaving his responsibilities and valued technical community intact.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Expertise and a beginner sketch`,
        alt: `Avoiding the drawing afternoon protects an image; a private key sketch supplies experience without erasing technical skill.`,
        caption: `The comparison concerns one fictional exclusion, not a judgment that identity or expertise is bad.`,
        items: [
          { label: 'Protect effortless expertise', detail: 'Decline drawing before discovering what it is like.' },
          { label: 'Permit a beginner trial', detail: 'Sketch a key while keeping existing technical competence.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: [`Paper`, `A pencil`, `A house key or another safe object`],
      steps: [
        `Write a self-label that discourages one harmless activity, such as "I am not a drawing person."`,
        `For a beginner trial, place a key on paper and identify its long edge, hole, and teeth.`,
        `Draw those features twice without requiring a polished result. Use another accessible beginner task if drawing is unavailable.`,
        `Record what the trial revealed about the activity, separately from what you want to retain about your identity.`,
      ],
      notice: `You have a small experience to evaluate instead of only a label-based prediction.`,
      troubleshooting: `If the trial becomes a test of worth, shrink it to observing one feature and stop without grading the result.`,
    },
    recall: {
      prompt: `A reliable organizer avoids joining a beginner singing group because they usually lead things. What would a bounded identity-cost experiment look like?`,
      hint: `Participation need not become a new permanent identity.`,
      answer: `Try an optional introductory session as a learner, respecting the group's expectations. Compare the experience with what the organizer label excluded, without abandoning existing duties or promising to become a singer.`,
    },
    quiz: {
      question: `A beginner trial is enjoyable but difficult. What does it show about the original self-label?`,
      options: [`The label need not prohibit this activity.`, `The trial proves you should replace your profession.`, `Difficulty confirms that the old boundary should remain absolute.`],
      correctIndex: 0,
      explanation: `A small experience can loosen an exclusion without dictating a life change. Difficulty is expected in a beginner task, not an identity verdict.`,
    },
    takeaway: `Count what a self-description prevents before deciding how tightly to hold it.`,
    sourceNote: `Existentialism and authenticity inform this original thought-and-action exercise. It does not establish unlimited self-invention or require discarding protective identities and communities.`,
  },
  {
    id: 'perspective-007',
    outcome: `Turn one indefinitely deferred commitment into a feasible invitation without manufacturing urgency.`,
    scene: `A niece plans time to learn an aunt's bread recipe around an existing evening obligation.`,
    sections: [
      {
        title: `Later keeps moving`,
        paragraphs: [
          `You have wanted to learn your aunt's bread recipe for months. Each week you say you will visit when there is more time. No date is proposed, so neither person can plan around the intention. The recipe matters to you, but it occupies an imaginary future with no competing commitments. A calendar entry would not make the relationship more valuable; it would make one possible expression of that value concrete enough to accept, decline, or revise.`,
        ],
      },
      {
        title: `Finitude makes selection unavoidable`,
        paragraphs: [
          `Finitude means having limits, including limits on time and the possibilities a life can contain. Existential reflections use those limits to question the assumption that every meaningful option can remain available indefinitely. This is not a countdown or a command to maximize every hour. Choosing one commitment also leaves others unchosen, and rest belongs among legitimate uses of time. The practical question is which repeatedly deferred possibility you want to give an actual place, within the obligations and resources you really have rather than an idealized unlimited schedule.`,
        ],
      },
      {
        title: `Fit the commitment to the available time`,
        paragraphs: [
          `In this hypothetical evening, you have 45 free minutes. A 30-minute visit plus 20 minutes of travel each way would need 70 minutes, so that version does not fit. You could offer a 15-minute call to discuss ingredients, then arrange a longer visit together. Your aunt might prefer another day, and the invitation should allow that. The smaller commitment is not a trick to compress all relationships into efficient units. It is an honest proposal that respects a real limit. You have moved one value from indefinite later into a negotiable action without treating ordinary life as an emergency.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `What fits this evening?`,
        alt: `A visit needing seventy minutes is compared with a proposed fifteen-minute call within a forty-five-minute opening.`,
        caption: `Hypothetical time budget: 30 + 20 + 20 = 70 minutes. The call still requires agreement.`,
        items: [
          { label: 'Visit with travel', detail: '70 minutes needed; only 45 are available.' },
          { label: 'Ingredients call', detail: 'Offer 15 minutes, then arrange a longer visit.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: [`Your calendar or a fictional schedule`, `Paper`],
      steps: [
        `Choose one valued activity you keep assigning to "later," without selecting distressing material.`,
        `Estimate the whole commitment, including preparation or travel, and compare it with a genuine opening.`,
        `If it does not fit, propose a smaller meaningful version or a different time rather than removing necessary rest.`,
        `Draft an invitation with a clear decline or reschedule option. Do not book another person's time without agreement.`,
      ],
      notice: `The intention has become a feasible proposal with its full time cost visible.`,
      troubleshooting: `If the calendar is already full, reconsider scope or timing. Finitude is not a reason to overload it.`,
    },
    recall: {
      prompt: `You want to join a seasonal drawing outing, but its full duration conflicts with an existing commitment. What would this lens ask you to consider?`,
      hint: `Selection is different from panic or squeezing everything in.`,
      answer: `Decide whether a shorter agreed visit or another date is feasible, while respecting the existing commitment. You may have to let an option go. Finite time does not make every missed possibility a failure.`,
    },
    quiz: {
      question: `A meaningful visit does not fit the time you have. Which response best matches this use of finitude?`,
      options: [`Wait for a day with no competing demands before offering a time.`, `Squeeze the original visit into the opening and recover time elsewhere.`, `Choose a feasible version or another time, acknowledging the tradeoff.`],
      correctIndex: 2,
      explanation: `Limits require a choice. Neither indefinite postponement nor pretending every commitment fits makes that choice more honest.`,
    },
    takeaway: `Give one chosen commitment real space, including the time it actually requires.`,
    sourceNote: `Existentialism supplies the philosophical background. Times are invented for the example; this is not a mortality exercise or an instruction to optimize every hour.`,
  },
  {
    id: 'perspective-008',
    outcome: `Name a specific limitation in a principle while retaining the reasons that still support it.`,
    scene: `A reading-club organizer reconsiders the principle that every member should pay the same fee.`,
    sections: [
      {
        title: `A reasonable principle meets a difficult case`,
        paragraphs: [
          `A reading club needs contributions for room hire. You favor the same fee for everyone because it is simple and does not single people out. Another member says that the fee would prevent them attending. Your principle has a reason behind it, but it does not yet explain how to handle unequal ability to pay. You could defend the principle by dismissing the case, or abandon all confidence in your judgment. Neither is the only available response.`,
        ],
      },
      {
        title: `Humility can be specific`,
        paragraphs: [
          `Intellectual humility concerns recognizing and responding to limits in what you know or can justify. It is different from declaring yourself incapable or treating every view as equally credible. Here the limitation is precise: equal payment does not automatically mean equal burden or equal opportunity to attend. Naming that gap preserves the original reasons while revealing where they are insufficient. A serious objection is one that engages the principle's actual purpose, not merely an insult or a different preference. You can acknowledge it without suspending every decision indefinitely.`,
        ],
      },
      {
        title: `Narrow the claim and investigate the alternative`,
        paragraphs: [
          `You say, "Equal fees are simple, but I have not accounted for members who cannot afford them." The group can now examine a voluntary reduced contribution or another venue. Those alternatives raise questions too, including privacy and whether the room cost can still be met. Humility does not require pretending those problems vanish. It changes the next step from defending an absolute slogan to checking a particular unresolved case. You may retain a narrower principle: use a transparent contribution rule that accounts for participation barriers. That revision needs discussion and evidence, not a performance of endless uncertainty.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Reasons and unresolved questions`,
        alt: `An equal fee is simple but can exclude; a flexible contribution raises questions about cost and privacy.`,
        caption: `Neither fictional option is certified as best. Inspect what each reason leaves unanswered.`,
        items: [
          { label: 'Same fee for everyone', detail: 'Simple rule; affordability remains unresolved.' },
          { label: 'Flexible contributions', detail: 'Potential access benefit; cost and privacy need checking.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: [`Paper`, `An ordinary principle you can examine safely`],
      steps: [
        `Write a principle you endorse and one concrete reason for it.`,
        `Describe a serious case the principle handles poorly, such as an equal fee that blocks participation.`,
        `Write "My reason still supports..., but it does not yet explain..." and complete both parts.`,
        `Name one question to investigate and one narrower version worth discussing. Keep unsupported alternatives labeled as proposals.`,
      ],
      notice: `Your note identifies a specific limit without replacing the whole judgment with blanket doubt.`,
      troubleshooting: `If the objection is easy to dismiss, strengthen it using the interests of someone genuinely affected by the rule.`,
    },
    recall: {
      prompt: `You believe learning independently is always better, but a beginner needs feedback to notice a repeated mistake. How would intellectual humility change the claim?`,
      hint: `Keep the benefit you can defend and name its boundary.`,
      answer: `Retain reasons for independent practice while acknowledging that some errors need outside feedback. Investigate when guidance helps instead of defending "always" or concluding independent learning has no value.`,
    },
    quiz: {
      question: `A strong objection reveals a gap in your preferred rule. What demonstrates the humility taught here?`,
      options: [`State the gap and investigate it while retaining supported reasons.`, `Give every competing rule equal weight immediately.`, `Abandon the discussion because no rule can be perfect.`],
      correctIndex: 0,
      explanation: `A specific limitation guides inquiry. It neither makes all alternatives equally sound nor requires giving up the decision.`,
    },
    takeaway: `Knowing where your reasons stop is compatible with having reasons worth defending.`,
    sourceNote: `The humility entry surveys contested philosophical accounts. This original fee discussion is a reasoning exercise, not a validated measure of humility or a policy prescription.`,
  },
  {
    id: 'perspective-009',
    outcome: `Explain a defensible choice while acknowledging the distinct good it leaves behind.`,
    scene: `A mural volunteer chooses between a painting session and a sister's recital.`,
    sections: [
      {
        title: `One afternoon protects two different goods`,
        paragraphs: [
          `A mural group schedules its final painting session on the afternoon of your sister's recital. You value making art with the group and being present for your sister. Travel makes attending both impossible. If you choose the recital, it is tempting to tell yourself the mural never mattered much. That story may reduce discomfort, but it changes your account of a real interest simply because you cannot pursue it this time.`,
        ],
      },
      {
        title: `Pluralism does not promise one common scale`,
        paragraphs: [
          `Value pluralism is the philosophical view that some goods are genuinely distinct rather than versions of a single underlying good. Creative achievement and family connection may matter in different ways. Comparing them need not resemble adding prices in the same currency. This does not mean reasoned choice is impossible or that every preference deserves respect regardless of harm. It means a choice can be justified without proving the rejected good was worthless. Regret can register that remaining loss rather than automatically revealing that you chose incorrectly.`,
        ],
      },
      {
        title: `Give reasons without erasing the loss`,
        paragraphs: [
          `Suppose you had already promised to attend the recital and your sister particularly wants you there. You honor that commitment, tell the mural group promptly, and acknowledge missing the shared finishing work. Offering to help document the completed mural later might preserve some creative involvement, but it does not recreate the afternoon. You can say both "I had good reasons to choose this" and "I lost something I value." The lens does not decide every case in favor of family. Different commitments and circumstances could support another choice, with a different real loss remaining after it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `What each afternoon protects`,
        alt: `The recital protects a promise and family presence; the mural session protects shared creative work.`,
        caption: `These fictional goods are named separately, not converted into points that erase the rejected option.`,
        items: [
          { label: 'Attend the recital', detail: 'Honor the promise; miss the mural group finishing together.' },
          { label: 'Finish the mural', detail: 'Share the creative work; miss being present at the recital.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: [`Paper`, `A low-stakes unavoidable tradeoff`],
      steps: [
        `Name two feasible options that cannot both be fully pursued. Include existing commitments in the setup.`,
        `Write the distinct good each protects, avoiding labels such as "the sensible option" and "the selfish option."`,
        `Choose with reasons and write one sentence acknowledging what the rejected option genuinely loses.`,
        `Consider a small later accommodation if feasible, but do not describe it as canceling the whole loss.`,
      ],
      notice: `The chosen option has reasons, and the unchosen good remains recognizable.`,
      troubleshooting: `If you insist that feeling regret proves error, ask whether it instead reflects a good no available option could fully preserve.`,
    },
    recall: {
      prompt: `You choose a quieter home over a shorter commute and still miss the saved travel time. How would a pluralist account describe that regret?`,
      hint: `Ask whether two distinct benefits were in conflict.`,
      answer: `Quiet and available time can both matter. Missing the shorter commute can acknowledge a real cost without proving that choosing quiet was mistaken. The reasons still need examination in your actual circumstances.`,
    },
    quiz: {
      question: `You made a justified choice and still value what you gave up. What follows within this lens?`,
      options: [`You must reverse the decision to remove the regret.`, `A real loss can remain after a defensible decision.`, `The rejected value should be reclassified as unimportant.`],
      correctIndex: 1,
      explanation: `Distinct goods can conflict. Justification need not erase loss, while regret alone does not determine whether reversal is possible or better.`,
    },
    takeaway: `A good reason to choose one thing is not proof that the other thing had no value.`,
    sourceNote: `Value pluralism is a disputed philosophical position. The recital example is original and does not establish a universal ranking of family, creativity, or other goods.`,
  },
  {
    id: 'perspective-010',
    outcome: `Distinguish a formally offered resource from a usable opportunity and identify changeable barriers.`,
    scene: `A learner evaluates a free online editing class against caption access and shift times.`,
    sections: [
      {
        title: `A free place is not yet an opportunity`,
        paragraphs: [
          `Rosa receives a free place in an online editing class. The organizer says everyone now has the same opportunity. But Rosa needs captions to use the demonstrations, and the live session overlaps her work shift. The fee has been removed while two other barriers remain. Calling nonattendance a lack of motivation would turn an incomplete access arrangement into a character judgment before checking whether Rosa could actually use the offered place.`,
        ],
      },
      {
        title: `Resources need enabling conditions`,
        paragraphs: [
          `The capability approach evaluates people's real opportunities to do and be things they have reason to value. A resource is something supplied, such as a course place. A capability is a genuine opportunity to use available means, not merely permission on paper. Conditions that convert resources into opportunities include personal circumstances, social rules, and the environment. Here captions and a workable time are two such conditions. The distinction also preserves choice: having an accessible opportunity does not oblige Rosa to attend or prove that the course is the best use of her time.`,
        ],
      },
      {
        title: `Locate who can change each barrier`,
        paragraphs: [
          `Rosa can check her schedule and explain what format she uses. The organizer can investigate captioned recordings and an attendance window outside the live session. The matrix holds other conditions constant and shows why fixing only timing or only captions leaves a barrier in this example. If both are addressed, Rosa can decide whether to participate. This does not prove which barrier caused every absence, or that the organizer intended exclusion. It identifies questions to investigate and responsibilities for possible adjustments. Personal choices still matter, but they should be evaluated within the opportunities that were genuinely available.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: `Two conditions for Rosa's class`,
        alt: `Four cells cross available captions with usable timing; Rosa needs both.`,
        caption: `Rows: captions. Columns: timing. Other conditions stay fixed in this fictional example.`,
        items: [
          { label: 'Captions, usable time', detail: 'Both identified barriers removed; attendance remains a choice.' },
          { label: 'Captions, clashing time', detail: 'Rosa can access the content but cannot attend then.' },
          { label: 'No captions, usable time', detail: 'Time works; the demonstration remains inaccessible to Rosa.' },
          { label: 'No captions, clashing time', detail: 'Both barriers remain despite the free place.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: [`Paper`, `An ordinary opportunity you own or a fictional one`],
      steps: [
        `Name an offered resource, such as a class place, library membership, or shared tool.`,
        `List the conditions required to use it: time, format, location, equipment, or other relevant access.`,
        `Choose two possible barriers and identify who could change each, without assuming a cause you have not checked.`,
        `Draft one local adjustment and one specific request to the organizer. Leave participation voluntary after access improves.`,
      ],
      notice: `Your explanation names usable conditions rather than stopping at permission or motivation.`,
      troubleshooting: `If the map blames only the individual or only the system, check for decisions and constraints at both levels.`,
    },
    recall: {
      prompt: `A neighborhood workshop lends tools for free, but collection is only during working hours. What does the capability lens add to the word "free"?`,
      hint: `Ask whether the resource can become an actual choice.`,
      answer: `Check who can reach the collection window and what alternatives are feasible. Removing a price does not remove every barrier. Longer hours or an agreed collection arrangement might improve access, subject to evidence and resources.`,
    },
    quiz: {
      question: `A program removes a fee but participation stays low. What question best fits this approach?`,
      options: [`Which conditions still prevent people using the offered place?`, `Would stronger promotional messages make the free place more attractive?`, `Should the organizer count free places as the main success measure?`],
      correctIndex: 0,
      explanation: `The approach examines usable opportunity. Promotion or counting places can miss barriers between receiving an offer and using it.`,
    },
    takeaway: `An offered resource becomes an opportunity only through conditions that let someone use it.`,
    sourceNote: `The capability approach is contested. This original matrix illustrates access conditions, not proven causes of attendance.`,
  },
  {
    id: 'perspective-011',
    outcome: `Set an enoughness threshold around an item's purpose while distinguishing needs, pleasures, and status comparisons.`,
    scene: `A commuter reassesses a working backpack after admiring a friend's newer bag.`,
    sections: [
      {
        title: `The bag changes in your mind`,
        paragraphs: [
          `Mika's backpack carries the things needed for a normal day and closes securely. After a friend buys a more expensive model, the old bag suddenly feels inadequate. Nothing about its capacity changed that afternoon. What changed was the comparison. Mika may still want a different style, and wanting a pleasant object is not automatically a mistake. But "this no longer meets my needs" and "I would enjoy what my friend has" are different reasons that deserve different consideration.`,
        ],
      },
      {
        title: `A desire can lack a stopping point`,
        paragraphs: [
          `Epicurus distinguishes kinds of desire, including needs with limits and desires for status that can keep expanding. Enoughness means specifying what would satisfy a particular purpose rather than relying on competitive rank. Carrying required items can have a workable threshold; owning the most admired bag moves whenever someone else upgrades. This philosophical lens does not condemn every optional pleasure or make deprivation virtuous. A comfortable bag, secure housing, access equipment, and other material needs should not be dismissed as vanity. The question is what kind of reason is moving the threshold.`,
        ],
      },
      {
        title: `Write the threshold before comparing models`,
        paragraphs: [
          `Mika lists three requirements: the daily items fit, the fastening works, and carrying the usual load is comfortable. The current bag meets them. Mika can now decide whether a style change is worth a discretionary cost without disguising it as a functional failure. If a new responsibility adds equipment the bag cannot carry, the threshold legitimately changes. Enoughness is tied to circumstances, not a lifetime ban on replacement. The useful pause comes before browsing: name the task, inspect what already works, and separate a real shortfall from a comparison that has no natural endpoint.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Two standards for the backpack`,
        alt: `A purpose-based standard tests load, closure, and comfort; a status standard follows the most admired model.`,
        caption: `The fictional bag meets its stated task. This does not rank every optional purchase as wrong.`,
        items: [
          { label: 'Purpose threshold', detail: 'Daily items fit; fastening works; ordinary carrying is comfortable.' },
          { label: 'Comparison threshold', detail: 'The target moves when a friend buys a more admired bag.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: [`An item you already own`, `Paper`],
      steps: [
        `Choose an optional upgrade you are considering, without buying or loading anything unusually heavy.`,
        `Write the item's ordinary purpose and three concrete requirements.`,
        `Check your current item against those requirements using a normal, safe task.`,
        `List any separate pleasure or status reason honestly rather than relabeling it as a necessity.`,
        `Write one change in circumstances that would justify revisiting the threshold.`,
      ],
      notice: `You can distinguish a functional gap from an optional desire and a moving comparison.`,
      troubleshooting: `If the threshold demands the newest model, replace the model name with the task it must perform.`,
    },
    recall: {
      prompt: `A camera suited casual snapshots but cannot handle a new task you have agreed to undertake. Does enoughness require keeping it regardless?`,
      hint: `The threshold serves needs, not permanent austerity.`,
      answer: `No. Reassess the actual task, available alternatives, and the camera's limits. A changed requirement is different from upgrading solely because someone else's equipment carries more status.`,
    },
    quiz: {
      question: `Your present item still works, but you would enjoy a different design. Which description is most honest?`,
      options: [`The item has become functionally inadequate because the alternative appeals.`, `Any desire for a nicer design must be eliminated.`, `This is an optional pleasure to consider separately from a functional need.`],
      correctIndex: 2,
      explanation: `Distinguishing reasons does not forbid pleasure. It prevents a preference from being mistaken for a requirement the current item fails.`,
    },
    takeaway: `Define enough by a purpose before comparison defines it for you.`,
    sourceNote: `Epicurus supplies a philosophical distinction among desires. This original purchase reflection is not financial advice or a claim that material needs are merely attitudes.`,
  },
  {
    id: 'perspective-012',
    outcome: `Distinguish benefiting from specified variability from merely surviving it, and bound a learning trial.`,
    scene: `A workshop organizer tests a draft signup layout while keeping the working version untouched.`,
    sections: [
      {
        title: `A successful trial can support a narrow claim`,
        paragraphs: [
          `A workshop organizer tries a draft signup layout with invented short and long names. The long names expose cramped rows, which the organizer revises. The live signup process remains unchanged. This variation supplied useful feedback at a small, controlled cost. It would be a much larger claim to say that any disruption now improves the process, or that making real registrations fail would strengthen it. First specify what improves, under which variation, and who could lose.`,
        ],
      },
      {
        title: `Benefit is different from survival`,
        paragraphs: [
          `Antifragility concerns a beneficial response to certain increases in variability, not just resistance to damage. Consider a toy process whose result is its input multiplied by itself. Two inputs of 2 produce results of 4 and 4, averaging 4. Inputs of 1 and 3 produce results of 1 and 9, averaging 5. Both pairs have average input 2, but the more spread-out pair has a higher average result. This invented process benefits from that specified spread. A process that returned 4 every time would resist the variation without benefiting from it.`,
        ],
      },
      {
        title: `Keep the real analogy bounded`,
        paragraphs: [
          `The signup trial is not the toy formula and does not establish mathematical antifragility. It illustrates a bounded opportunity to learn: vary a draft, capture feedback, retain a fallback, and stop if costs exceed the agreed limit. The organizer risks only spare paper and a little personal time, not participants' registrations. Without recording and using the feedback, variation could simply waste materials. Without the fallback, the same experiment could damage the event. Neither resilience nor one useful trial proves that larger shocks will help. The idea is no justification for imposing hardship on people.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Same average input, different spread`,
        alt: `Two fixed inputs of two average four output points; inputs one and three average five under the square rule.`,
        caption: `Invented rule: result = input × input. Average inputs both equal 2; average results are 4 and 5.`,
        items: [
          { label: 'Inputs 2 and 2', detail: 'Results 4 and 4; (4 + 4) / 2 = 4.' },
          { label: 'Inputs 1 and 3', detail: 'Results 1 and 9; (1 + 9) / 2 = 5.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: [`Two scrap sheets`, `A pencil`, `Invented names only`],
      steps: [
        `Draw a draft signup row. Name the improvement you want, such as fitting longer names legibly.`,
        `Set a loss limit of the two sheets and this practice period. Keep all real registrations untouched.`,
        `Try short and long invented names, then revise the draft using the observed problem.`,
        `Record what improved, what remains untested, and the unchanged fallback. Do not generalize beyond this small trial.`,
      ],
      notice: `The revised draft addresses an observed variation without exposing anyone else's information or registration.`,
      troubleshooting: `If the trial has no clear benefit or cannot stay within its limit, stop rather than increasing disruption.`,
    },
    recall: {
      prompt: `A spare display survives a jolt unchanged. What additional evidence would be needed before calling it antifragile rather than resilient?`,
      hint: `No loss and positive benefit are different outcomes.`,
      answer: `Specify a result that improves under a defined range of variability, then establish that benefit under comparable conditions. Mere survival shows no such gain and does not justify testing larger shocks.`,
    },
    quiz: {
      question: `A draft improves after varied test inputs. Which conclusion stays within the evidence?`,
      options: [`The draft result justifies replacing the live process now.`, `This bounded trial supplied useful feedback; broader benefits remain unproved.`, `The finding should be dismissed because no real participants were involved.`],
      correctIndex: 1,
      explanation: `A narrow learning result is useful without becoming a universal claim. Controlled variation need not involve real-world damage.`,
    },
    takeaway: `Ask what benefits from which variation, within which loss limit.`,
    sourceNote: `Taleb and Douady give a mathematical account. The square example is invented arithmetic; the draft trial is an analogy, not evidence that adversity benefits people.`,
  },
  {
    id: 'perspective-013',
    outcome: `Rewrite a minor setback's interpretation without altering its facts or requiring a positive ending.`,
    scene: `A photographer misses a zine submission deadline and writes two accounts of the event.`,
    sections: [
      {
        title: `Three facts become a whole identity`,
        paragraphs: [
          `You finished a photo essay on Friday. The zine submission portal had closed on Thursday. Your work was not considered. Those are the known facts in this fictional setback. "I always ruin creative opportunities" adds a much broader interpretation, selecting this event as evidence for a permanent identity. "It was the best thing that could have happened" adds something unsupported too. You do not yet know what the missed submission will mean for future work.`,
        ],
      },
      {
        title: `A narrative links events and possibilities`,
        paragraphs: [
          `Narrative identity is an evolving account through which people connect experiences with a sense of who they are. A narrative selects events, relates them, and suggests what can happen next. That interpretive work is different from changing the events themselves. Research reviews connect some narrative features with adjustment, but associations do not establish that rewriting a story causes recovery. As a reflective lens, the useful question is what your present account permits or excludes. It need not convert harm into growth, settle your identity, or produce an inspirational conclusion.`,
        ],
      },
      {
        title: `Leave the next chapter undecided`,
        paragraphs: [
          `One account says, "I finished Friday, after Thursday's deadline, so the essay was not considered. This closes every serious creative path for me." Another preserves the facts but ends, "I missed this submission. I can decide later whether to revise the essay or seek another suitable outlet." The second does not guarantee publication or deny responsibility for checking dates. It keeps the future open to evidence and choice. You can also acknowledge disappointment without assigning a lesson to it. The aim is an accurate, revisable account, not compulsory optimism or a demand that every setback pay for itself in wisdom.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Same facts, different ending`,
        alt: `Both accounts preserve the missed deadline; only their claims about future possibilities differ.`,
        caption: `Both retain Friday completion, Thursday closure, and no consideration. The changed part is interpretation, not history.`,
        items: [
          { label: 'Permanent verdict', detail: 'This missed entry means every creative path is closed.' },
          { label: 'Unfinished account', detail: 'This entry was missed; the next use of the essay is undecided.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: [`Paper`, `A minor setback or the fictional photo essay`],
      steps: [
        `Choose manageable material and list three known facts without evaluations or predicted outcomes.`,
        `Write a short account using all three facts and your initial interpretation.`,
        `Write another account with the same facts but a different possible next step, without inventing a benefit.`,
        `Underline every factual statement and compare versions. Remove any new claim that the evidence does not support.`,
      ],
      notice: `The two accounts preserve history while making different future possibilities visible.`,
      troubleshooting: `If the second version feels falsely positive, leave the ending undecided. Skip painful material rather than forcing a reframing exercise.`,
    },
    recall: {
      prompt: `A pottery piece cracks before an exhibition. How could you describe it without saying either that you are hopeless or that the crack was a gift?`,
      hint: `Keep the event and uncertainty separate from a final identity judgment.`,
      answer: `State what happened and what you currently know about the crack. Acknowledge the disappointment and leave repair, learning, or another project as possibilities to investigate, not benefits already proved.`,
    },
    quiz: {
      question: `A more hopeful account requires claiming that rejection improved your work, although you have not revised it. What should change?`,
      options: [`Keep the claim because a positive ending is the exercise's goal.`, `Return to a permanent negative verdict because hope is uncertain.`, `Remove the invented benefit and leave the future outcome open.`],
      correctIndex: 2,
      explanation: `A revised interpretation must not fabricate facts. Openness to a next step does not require a guaranteed improvement or a final negative identity.`,
    },
    takeaway: `Change an interpretation carefully; do not rewrite the facts to earn a better ending.`,
    sourceNote: `Narrative-identity research and existentialism provide background. This original minor-setback exercise is not therapy, proof of causation, or a requirement to find redemption in harm.`,
  },
  {
    id: 'perspective-014',
    outcome: `Test a shared rule without knowing your own advantage, while retaining general knowledge about people's needs.`,
    scene: `Apartment residents compare rules for booking a shared washing machine.`,
    sections: [
      {
        title: `The rule looks fair from a fortunate place`,
        paragraphs: [
          `Your apartment building releases washing-machine slots as soon as they become free. You can check the booking page frequently, so first-come booking seems fair. A resident who cannot use a phone during work repeatedly misses the useful slots. Before defending the rule, imagine that you do not know which of those positions you will occupy. You still need laundry access, but can no longer build the rule around the advantage of your own current schedule.`,
        ],
      },
      {
        title: `What the veil removes and retains`,
        paragraphs: [
          `Rawls's original position is a philosophical thought experiment about principles of social justice. Its veil of ignorance removes knowledge of one's particular social position and advantages. It does not remove general knowledge about people and society. In this small analogy, you retain the fact that schedules and access needs differ, but do not know which schedule is yours. Rawls's full construction concerns society's basic institutions, not a laundry algorithm. Borrowing its impartiality question helps expose self-serving assumptions without pretending that one imagined vote determines the correct rule for every setting.`,
        ],
      },
      {
        title: `Compare positions, then consult people`,
        paragraphs: [
          `Compare instant booking with a daylong request window followed by rotation for contested slots. Assume, for this example, both residents can submit once during that window. The second rule reduces the advantage of constant checking, though it adds a wait and needs an understandable allocation process. The matrix shows each rule from both positions. After this thought experiment, ask actual residents about needs the draft misses, including accessible ways to request a slot. Imagining that a rule is acceptable is not obtaining consent. The exercise changes the reasons you consider; evidence and discussion still determine whether the arrangement is workable.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: `Booking rule by access position`,
        alt: `Two booking rules are compared for residents with different access to their phones.`,
        caption: `Rows: rules. Columns: access positions. Both fictional residents can submit within the window.`,
        items: [
          { label: 'Instant: frequent access', detail: 'Can compete whenever a useful slot appears.' },
          { label: 'Instant: offline at work', detail: 'Useful slots may disappear before checking.' },
          { label: 'Window: frequent access', detail: 'Submits a request; cannot win by constant refreshing.' },
          { label: 'Window: offline at work', detail: 'Can submit outside work within the agreed window.' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: [`Paper`, `A fictional shared-resource rule`],
      steps: [
        `Choose a low-stakes shared resource and draft two allocation rules without choosing your own place first.`,
        `Describe two positions with different access or scheduling constraints, retaining general knowledge of human needs.`,
        `Test each rule from each position and note an advantage you had previously treated as neutral.`,
        `Revise the draft and list questions for actual users. Do not treat the imagined exercise as their agreement.`,
      ],
      notice: `Your reasons no longer depend solely on occupying the most convenient position.`,
      troubleshooting: `If you erase all differences, restore general facts about needs. Impartiality is not pretending everyone has identical circumstances.`,
    },
    recall: {
      prompt: `A studio allocates quiet practice times to whoever arrives earliest. How would you use the veil idea without forgetting that some users work mornings?`,
      hint: `Keep general constraints while hiding which ones are yours.`,
      answer: `Compare rules knowing schedules differ but not knowing your own schedule. Examine burdens across possible positions, then consult actual users. The thought experiment can expose advantage without replacing their circumstances or consent.`,
    },
    quiz: {
      question: `Behind the veil in this booking analogy, which information should remain available?`,
      options: [`Your exact schedule so you can protect your preferred slot.`, `General knowledge that people have different schedules and access needs.`, `An assumption that actual residents already accepted the draft.`],
      correctIndex: 1,
      explanation: `The device restricts self-serving particular information, not relevant general facts. It supplies neither a private advantage nor actual consent.`,
    },
    takeaway: `Ask whether the rule is defensible before knowing which position will be yours.`,
    sourceNote: `The original-position entry explains Rawls's broader justice argument. This original laundry matrix is a limited analogy, not its full procedure or a certified fair policy.`,
  },
  {
    id: 'perspective-015',
    outcome: `Use the experience-machine question to distinguish pleasant experience from doing, relating, or achieving.`,
    scene: `A beginner compares learning to mend a jacket with an indistinguishable experience of mastery.`,
    sections: [
      {
        title: `The feeling could arrive without the skill`,
        paragraphs: [
          `You want to learn to mend a jacket. Imagine a machine could give you the same satisfying experience of mastering stitches, completing the repair, and admiring the result, while outside that experience no jacket is repaired and no skill is acquired. Would it supply everything you wanted? Perhaps part of the goal was the pleasant feeling. Perhaps another part was being able to mend the next tear or actually care for an object you use.`,
        ],
      },
      {
        title: `What the experience machine challenges`,
        paragraphs: [
          `Nozick's experience-machine thought experiment asks whether convincing desirable experiences would provide everything that makes a life good for its person. It challenges hedonism, understood here as the view that well-being consists in pleasure and the absence of pain, rather than a slogan about reckless enjoyment. To focus the question, imagine that the experiences really are indistinguishable and set aside worries about malfunction or cost. Then ask whether doing something, relating to real people, or engaging with reality matters beyond how it feels. Your answer identifies a commitment to examine, not a scientific verdict.`,
        ],
      },
      {
        title: `Inspect the reason for your answer`,
        paragraphs: [
          `If you prefer real mending because you value having the ability afterward, you have named something beyond the immediate feeling of mastery. If you object only because the machine might break, you are challenging an assumption rather than answering the intended question. Both concerns can matter in real decisions, but they do different work here. The thought experiment also does not condemn games, fiction, or virtual experiences; those can involve genuine skills and relationships. Change an assumption, such as whether a skill transfers outside the experience, and you may have changed the philosophical comparison itself.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Experience and achievement separated`,
        alt: `Real mending includes a skill and repaired jacket; the stipulated machine supplies only an indistinguishable experience.`,
        caption: `This is a hypothetical distinction, not a claim about actual virtual learning or current machines.`,
        items: [
          { label: 'Learn and mend', detail: 'Satisfying experience, acquired skill, and an actual repair.' },
          { label: 'Experience only', detail: 'Same stipulated feeling; no outside skill or repaired jacket.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: [`Paper`, `One ordinary achievement you value`],
      steps: [
        `Choose an achievement and list what you want from it, including feelings and any result beyond them.`,
        `Imagine receiving exactly the desired experience without the outside achievement, with safety and cost held equal.`,
        `Write your preference and identify whether its reason concerns experience, reality, skill, or relationships.`,
        `Change one assumption, such as real skill transfer, and explain whether that changes your answer.`,
      ],
      notice: `Your answer identifies a value and an assumption instead of merely declaring the machine good or bad.`,
      troubleshooting: `If every objection concerns malfunction, hold reliability fixed temporarily to inspect the intended contrast.`,
    },
    recall: {
      prompt: `A simulation teaches a real drawing skill that you can use outside it. Why is that not the same as receiving only the feeling of artistic mastery?`,
      hint: `Check what remains after the experience ends.`,
      answer: `The simulation includes an actual acquired ability, so it changes the experience-only assumption. The thought experiment does not establish that virtual settings lack real learning, relationships, or value.`,
    },
    quiz: {
      question: `You reject the imagined machine because doing the repair itself matters to you. What have you established?`,
      options: [`A reason to question a pleasure-only account, with assumptions still open to debate.`, `A personal preference that settles which theory of well-being is correct.`, `A reason to prefer physical lessons even when simulations teach the same real skills.`],
      correctIndex: 0,
      explanation: `The response reveals a philosophical commitment. It does not erase pleasure's value or generalize to simulations with real outcomes.`,
    },
    takeaway: `Ask what matters beyond feeling that an achievement happened.`,
    sourceNote: `The well-being entry discusses the experience machine and competing theories. This mending example is original; thought-experiment intuitions do not scientifically settle hedonism.`,
  },
  {
    id: 'perspective-016',
    outcome: `Use imagined repetition to inspect a genuinely revisable routine without condemning imposed conditions.`,
    scene: `A weekly game-group member reconsiders automatically accepting every Thursday invitation.`,
    sections: [
      {
        title: `The default gets another week`,
        paragraphs: [
          `Every Thursday, Dev accepts a game-group invitation without checking whether that evening still fits. Some sessions are enjoyable; others leave no room for cooking or a quiet hour Dev wanted. Looking back, Dev remembers the best sessions and treats them as the whole routine. Imagine instead the ordinary Thursday, including the automatic acceptance and rushed ending, returning again and again. Which parts would Dev actively choose, and which continue mainly because nobody has reconsidered them?`,
        ],
      },
      {
        title: `Recurrence as a question of endorsement`,
        paragraphs: [
          `Nietzsche's eternal recurrence is often approached as a thought experiment about affirming a life imagined to repeat. Here, affirmation means being able to endorse a way of living, not reporting constant happiness. Borrowing that interpretation, repetition makes an ordinary pattern harder to excuse as a temporary exception. This is not a claim that the universe literally repeats or that a perfect day can be engineered. It also does not require endorsing involuntary hardship. The relevant target for this small exercise is a recurring choice you genuinely have room to reconsider.`,
        ],
      },
      {
        title: `Keep what you choose, revise one default`,
        paragraphs: [
          `Dev decides that the friendship and games matter, but automatic weekly attendance does not. Dev asks the group about joining alternate weeks and confirms that this would work with how teams are arranged. The change preserves something valued while making room for another chosen activity. It need not make every Thursday admirable forever. If the routine involved a responsibility to another person, that responsibility would need discussion rather than disappearance. Imagined recurrence is a prompt for examining endorsement, not a moral score for leisure, productivity, disability, or circumstances that a person cannot safely change.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Two ways Thursday repeats`,
        alt: `Automatic weekly acceptance is compared with an agreed alternate-week game routine.`,
        caption: `The fictional choice preserves friendship without claiming that fewer games is universally better.`,
        items: [
          { label: 'Automatic acceptance', detail: 'The whole evening repeats without a fresh choice.' },
          { label: 'Agreed alternate weeks', detail: 'Dev endorses the game time and protects another chosen activity.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: [`Paper`, `A normal weekday from memory`],
      steps: [
        `Sketch an ordinary day, including necessary duties, rest, and discretionary activities.`,
        `Imagine that pattern repeating. Mark one part you endorse and one genuinely revisable default.`,
        `Propose a small change to the default while keeping effects on other people visible.`,
        `Draft any needed conversation and try the change only when feasible and agreed. Leave imposed conditions outside your self-judgment.`,
      ],
      notice: `Your plan distinguishes a chosen pattern from inertia without trying to redesign your entire life.`,
      troubleshooting: `If the reflection becomes a verdict that your life is wrong, narrow it to one ordinary controllable choice or stop.`,
    },
    recall: {
      prompt: `You enjoy a monthly cooking gathering but routinely volunteer for all the cleanup and resent that part. What would imagined repetition help you separate?`,
      hint: `A routine can contain both endorsed and unexamined elements.`,
      answer: `Separate the valued gathering from the automatic cleanup commitment. Discuss a fairer division rather than assuming you must abandon the whole activity or endorse the burden indefinitely.`,
    },
    quiz: {
      question: `A repeated routine includes a condition you cannot safely change. How should this exercise treat it?`,
      options: [`As evidence that you have failed to affirm life.`, `As a constraint, while focusing on choices actually available.`, `As something to remove immediately so the whole day becomes chosen.`],
      correctIndex: 1,
      explanation: `The bounded reflection examines revisable choices. It supplies no reason to blame a person for imposed conditions or demand an unsafe change.`,
    },
    takeaway: `Inspect what you repeatedly choose without turning the whole life into a pass-or-fail test.`,
    sourceNote: `The existentialism entry provides background for this interpretation of recurrence. The routine exercise is original, not cosmological evidence or a duty to approve of suffering.`,
  },
  {
    id: 'perspective-017',
    outcome: `Acknowledge effort and an unchosen enabling condition without making either explain everything.`,
    scene: `A scholarship winner considers the preparation and fortunate opening behind a successful art application.`,
    sections: [
      {
        title: `The portfolio did not create its own opportunity`,
        paragraphs: [
          `Mina wins an art scholarship after preparing a portfolio. The drawings required work, revision, and persistence. A neighbor also lent a quiet workspace, and the application period happened to reopen when Mina learned about it. Saying "It was all luck" erases the work. Saying "Every part was earned" erases conditions Mina did not create. Neither account is necessary to take pride in the achievement or to recognize that another capable applicant might not have had the same opening.`,
        ],
      },
      {
        title: `Luck complicates judgments of desert`,
        paragraphs: [
          `Moral luck is the philosophical problem of judgments about people depending on circumstances outside their control. Desert means what someone is thought to deserve because of their actions or qualities. Borrowing that question for success, preparation and opportunity can both affect whether effort leads to a recognized result. The four cells distinguish readiness from an available opening. They are logical possibilities, not probabilities or predictions about who wins. Acknowledging an enabling condition does not settle how rewards should be distributed, but it challenges the claim that an outcome measures personal worth all by itself.`,
        ],
      },
      {
        title: `Credit the work and widen the opening`,
        paragraphs: [
          `Mina can say, "I prepared the portfolio, and access to a workspace and the reopened application helped that work count." The sentence does not assign a percentage of credit to each factor. It identifies something that could be made less exclusive. Mina might share public application information with someone who wants it or ask whether the workspace can be offered more widely. Permission and the other person's goals matter. Recognizing luck is not permission to excuse misconduct, deny all responsibility, or assume that everyone wants the same path. The account credits work while acknowledging that access to the opportunity was not entirely self-created.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: `Preparation and an opening`,
        alt: `Four cells cross a prepared portfolio with an available application opening.`,
        caption: `Rows distinguish preparation; columns distinguish the opening. These hypothetical combinations are not success probabilities.`,
        items: [
          { label: 'Prepared, opening available', detail: 'The portfolio can be considered; selection is still uncertain.' },
          { label: 'Prepared, no opening', detail: 'Work exists without this chance to submit.' },
          { label: 'Unprepared, opening available', detail: 'An opportunity exists without a ready portfolio.' },
          { label: 'Unprepared, no opening', detail: 'Neither condition is present; this is not a character verdict.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: [`Paper`, `One modest achievement`],
      steps: [
        `Name an achievement and list the actions you actually contributed.`,
        `Identify an enabling condition you did not create, such as timing, access, support, or available information.`,
        `Write a combined account that retains both without inventing numerical shares of credit.`,
        `Draft an optional offer of a public resource or introduction, asking permission before involving another person.`,
      ],
      notice: `Your account credits effort without treating the result as proof that every advantage was deserved.`,
      troubleshooting: `If acknowledging help feels like denying work, write the two factual contributions separately before joining them.`,
    },
    recall: {
      prompt: `Two equally prepared applicants face different numbers of available places. How should that affect a claim that the winner worked harder?`,
      hint: `Outcome differences can arise without a difference in preparation.`,
      answer: `The result alone cannot establish greater effort. Investigate relevant circumstances and preparation instead of using selection as a complete measure of merit. Unequal opportunity can matter without making effort unreal.`,
    },
    quiz: {
      question: `A useful introduction helped you reach an opportunity after months of preparation. Which account fits?`,
      options: [`Assign most credit to preparation because it took longer.`, `Attribute the result mainly to the introduction because it came last.`, `Both contributed, without settling a complete theory of deserved reward.`],
      correctIndex: 2,
      explanation: `Effort and enabling conditions are compatible explanations. Recognizing both does not determine exact credit or automatically settle distribution.`,
    },
    takeaway: `Your contribution can be real without being the whole cause of the opportunity.`,
    sourceNote: `Moral-luck debates and the capability approach inform this original success example. It is a philosophical application, not a causal estimate or formula for distributing rewards.`,
  },
  {
    id: 'perspective-018',
    outcome: `Identify overlooked support work and discuss its distribution without removing the recipient's voice.`,
    scene: `Housemates discover the planning labor hidden behind their weekly grocery trip.`,
    sections: [
      {
        title: `The visible trip leaves work out`,
        paragraphs: [
          `Neve says, "I handle the groceries by myself," because Neve visits the shop and brings the bags home. Before that trip, Jo checks supplies, asks what everyone needs, plans meals, and updates the list. A paid shop worker stocks the goods. Neve's effort is real, but the claim of complete independence leaves other work outside the picture. Once the list is missed, the supposedly independent trip becomes much harder to complete usefully.`,
        ],
      },
      {
        title: `Care directs attention to relationships and needs`,
        paragraphs: [
          `Care ethics gives moral attention to dependence, relationships, and the work of responding to needs. Interdependence means people both provide and receive support rather than functioning as isolated units. This lens asks who notices a need, who organizes the response, who performs it, and whose preferences guide it. It does not assume every caring arrangement is fair. Unpaid labor can be taken for granted, paid workers can be poorly treated, and a helper can overrule the person receiving help. Meeting a need is one question; how the arrangement treats people is another.`,
        ],
      },
      {
        title: `Discuss the hidden task, not just gratitude`,
        paragraphs: [
          `Neve acknowledges Jo's planning and asks whether the current division still works. Jo wants a week without managing the list. They agree that Neve will check supplies and coordinate the next order, while each housemate keeps a say in what is bought. This is a specific redistribution, not an offer to "help more" that leaves Jo responsible for noticing everything. Jo can decline future planning rather than receiving gratitude that silently demands more service. Care does not create an unlimited obligation based on gender or family role, and receiving help does not erase a person's authority over their own preferences.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Two accounts of the grocery work`,
        alt: `A trip-only account omits list planning; a shared-work account includes planning, shopping, stocking, and household choices.`,
        caption: `The fictional comparison expands whose work is counted without treating every task as an unlimited duty.`,
        items: [
          { label: 'Count the trip only', detail: 'Neve carries bags; Jo\'s planning stays invisible.' },
          { label: 'Count the support too', detail: 'Planning, shopping, paid work, and recipients\' choices all matter.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: [`Paper`, `One ordinary household routine`],
      steps: [
        `Choose a routine and list preparation, coordination, visible work, and follow-up.`,
        `Mark who supplies each part, including paid work and your own contribution, without recording private details.`,
        `Identify who receives support and who decides what is wanted. Note one overlooked task or unasked preference.`,
        `Draft a discussion about one specific, voluntary redistribution or recognition. Do not assign someone new work without agreement.`,
      ],
      notice: `The map includes work that was previously invisible and a voice for the people receiving support.`,
      troubleshooting: `If "helping" still leaves one person managing every task, specify who will notice, plan, and complete the next step.`,
    },
    recall: {
      prompt: `A friend arranges all the details of a group outing and is thanked for being naturally organized. What would a care-based discussion add?`,
      hint: `Recognition should not hide the ongoing labor or assume consent.`,
      answer: `Name the coordination tasks and ask whether the friend wants to keep doing them. Discuss a specific division while retaining participants' preferences. Praise alone should not become an expectation of unlimited future work.`,
    },
    quiz: {
      question: `An arrangement meets a person's need but routinely ignores their preferences. What does care ethics ask you to examine?`,
      options: [`The recipient's voice and the power within the arrangement.`, `Only whether the helper worked hard enough.`, `Whether gratitude can replace discussion of preferences.`],
      correctIndex: 0,
      explanation: `Care includes relationships and authority, not only task completion. A need being met does not automatically make the arrangement respectful or fair.`,
    },
    takeaway: `Count the support behind independence, then ask how its work and decisions are shared.`,
    sourceNote: `Care ethics and capability discussions provide philosophical background. This original household map does not assign automatic duties by gender, family role, or receipt of help.`,
  },
  {
    id: 'perspective-019',
    outcome: `Question whether one discretionary interest must justify itself through work, money, or public improvement.`,
    scene: `An amateur draws imaginary islands without turning the page into portfolio content.`,
    sections: [
      {
        title: `A hobby receives a job description`,
        paragraphs: [
          `You enjoy drawing imaginary islands in an old notebook. Then you begin asking whether each page improves your portfolio, could sell as a print, or deserves a public progress post. These can be worthwhile projects, but they are not the only ways to spend time drawing. The questions have quietly changed the activity's terms. A page that was interesting to make now seems wasted unless it produces a measurable result beyond the experience itself.`,
        ],
      },
      {
        title: `Useful for whose purpose?`,
        paragraphs: [
          `The Zhuangzi questions narrow judgments of usefulness through stories and competing perspectives. An instrumental value is the value something has as a means to another end: drawing may help build a portfolio, for example. Borrowing this philosophical lens, ask whose end supplies the standard when an activity is called useless. A sketch can fail a career test without therefore having no interest or worth. Interpretations of the text differ, and this does not summarize Daoism. It challenges one exclusive measure rather than proving that all practical purposes should be abandoned.`,
        ],
      },
      {
        title: `Let one page remain a private interest`,
        paragraphs: [
          `For one small period of discretionary time, you draw a coastline and whatever features interest you. You do not promise to finish, post, monetize, or compare it with yesterday's page. If you later want a portfolio project, you can choose that separately. The experiment is not secretly justified by claiming that unmeasured leisure will make you more productive tomorrow. That would restore the very standard being questioned. Keep ordinary responsibilities and other people's needs in view while allowing this particular activity a different basis. The page can remain private and unfinished without needing a defense as an investment.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `The same island, different demands`,
        alt: `A portfolio standard requires progress; a private drawing interval has no promised output.`,
        caption: `Neither kind of drawing is forbidden. The fictional comparison makes an exclusive usefulness test visible.`,
        items: [
          { label: 'Every page must advance work', detail: 'The island needs a portfolio use or public improvement claim.' },
          { label: 'This page may stay private', detail: 'Drawing follows interest without a promised external result.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: [`Scrap paper and pencil, or another accessible interest`, `Discretionary time`],
      steps: [
        `Choose a short period that does not displace an agreed responsibility. Pick drawing or another accessible interest.`,
        `If drawing, make an irregular coastline and add features only while they interest you. No completed map is required.`,
        `Leave out a performance target, public post, sale plan, and before-and-after ranking for this interval.`,
        `Stop when the interval ends or interest fades. Note only which external demand you chose not to impose.`,
      ],
      notice: `One activity has been allowed without a promised career, income, or productivity result.`,
      troubleshooting: `If you begin measuring how restorative it was, return to the interest itself or stop. A beneficial feeling is not required.`,
    },
    recall: {
      prompt: `You enjoy singing privately, but advice about monetizing it makes every session feel like audition preparation. What option does this lens reveal?`,
      hint: `A possible use need not become the only justification.`,
      answer: `Reserve some singing as a private interest without measuring marketability. You can separately choose professional preparation if you want it. The hobby need not become either a business or a failed business.`,
    },
    quiz: {
      question: `A private hobby produces no sellable work and no measured improvement. What follows from the perspective taught here?`,
      options: [`Those missing outputs do not by themselves establish that the activity lacks value.`, `Its value depends on proving that tomorrow's work becomes faster.`, `The hobby should become a public progress challenge to justify the time.`],
      correctIndex: 0,
      explanation: `The lens questions an exclusively instrumental standard. Requiring later productivity or public progress simply reinstates that standard.`,
    },
    takeaway: `An interest need not become an investment to deserve a little chosen time.`,
    sourceNote: `The Zhuangzi entry describes diverse interpretations of usefulness and perspective. This original private-drawing exercise is not a complete account of Daoism or a productivity intervention.`,
  },
  {
    id: 'perspective-020',
    outcome: `Compare a shared rule through affected individuals' reasons rather than approval totals alone.`,
    scene: `A rehearsal studio compares a fixed cleanup morning with two feasible cleanup windows.`,
    sections: [
      {
        title: `A popular rule carries an uneven burden`,
        paragraphs: [
          `A shared rehearsal studio proposes that everyone clean on Saturday morning. Most members prefer one simple time. A night-shift worker would have to give up needed sleep to attend, but can clean on Friday evening. In this fictional setup, the studio is available at both times and the same tasks can be completed in either window. Counting raised hands tells you which proposal is popular. It does not yet answer whether the avoidable burden on that worker is justified.`,
        ],
      },
      {
        title: `Contractualism asks about reasons for rejection`,
        paragraphs: [
          `Scanlonian contractualism examines whether principles could be reasonably rejected by people who must live under them. A principle is a general rule, not just your preferred outcome this week. Reasonable rejection concerns reasons and burdens that others must take seriously; it is not an unlimited veto for every preference. The question is how a rule can be justified to each affected person. A small convenience for many does not automatically answer one person's serious objection. Compare alternative rules and the complaints each would generate, rather than treating the largest approval total as the whole argument.`,
        ],
      },
      {
        title: `Compare the burdens of feasible alternatives`,
        paragraphs: [
          `The group compares fixed Saturday attendance with choosing Friday evening or Saturday morning and recording completed tasks. Day workers can retain Saturday; the night worker can use Friday. The flexible rule adds some coordination, so the group checks that tasks will not be missed or duplicated. It appears to answer the stronger burden without imposing a comparable one, given the stated conditions. That is a reason to favor it, not proof that every flexible rota is fair. Ask actual participants what the example misses. Silence is not evidence of agreement, and invented objections should not replace people's accounts of their own circumstances.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: `Cleanup rule by participant position`,
        alt: `The matrix compares fixed and flexible cleanup for two work schedules.`,
        caption: `Rows: cleanup rules. Columns: work schedules. Both windows are feasible in this fictional setup.`,
        items: [
          { label: 'Fixed: day worker', detail: 'Convenient shared morning.' },
          { label: 'Fixed: night worker', detail: 'Must sacrifice needed sleep despite a feasible alternative.' },
          { label: 'Choice: day worker', detail: 'Can retain Saturday; records completed tasks.' },
          { label: 'Choice: night worker', detail: 'Can clean Friday; records completed tasks.' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: [`Paper`, `A low-stakes shared task or fictional rota`],
      steps: [
        `Draft two feasible general rules for the same task, including how completion would be known.`,
        `Describe the strongest individual objection to each rule and identify the burden behind it.`,
        `Compare seriousness and available alternatives rather than simply adding supporters. Label imagined circumstances as hypothetical.`,
        `Revise the draft and invite actual participants' objections in a usable format before adopting a rule.`,
      ],
      notice: `Your reasons address affected individuals, including someone whose burden a popularity count could hide.`,
      troubleshooting: `If every preference becomes a veto, ask what serious reason supports it and what burdens the alternatives impose.`,
    },
    recall: {
      prompt: `A shared kitchen shelf is unreachable for one user. How would you compare that rule with an accessible allocation?`,
      hint: `Compare individual burdens under both feasible rules.`,
      answer: `Ask what reasons each person has against each allocation. An unreachable shelf is more than a small preference about location. Examine whether an accessible alternative avoids that burden without imposing a comparable one, then consult the users.`,
    },
    quiz: {
      question: `Most members prefer a rule, but one offers a serious objection and a feasible alternative. What should the group do next?`,
      options: [`Treat the majority count as a complete justification.`, `Compare the individual's reasons with the burdens of the alternative.`, `Treat any stated objection as an automatic permanent veto.`],
      correctIndex: 1,
      explanation: `Contractualist reasoning examines justifiability through reasons. Neither popularity alone nor an unrestricted veto performs that comparison.`,
    },
    takeaway: `A shared rule needs reasons that address individual burdens, not just a favorable vote count.`,
    sourceNote: `Scanlonian contractualism is contested. This original cleanup example illustrates individual justification; it neither establishes universal agreement nor replaces consultation.`,
  },
]