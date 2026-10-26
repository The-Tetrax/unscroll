import type { LessonGuide } from './types'

// Original examples and diagrams. Practice budgets are suggestions, not study results.
// Omit sources so each guide inherits the URLs on its existing lesson record.
// Representative source checks: PLOS communication repair, ADA effective communication,
// and the Stanford Encyclopedia of Philosophy entry on the original position.
export const presencePerspectiveGuides: LessonGuide[] = [
  {
    id: 'presence-001',
    outcome: `Tell the difference between feeling where your body is and judging how it looks to others.`,
    scene: `A reader pauses over a library book with one hand resting beside their lap.`,
    sections: [
      {
        title: `A hand you are not watching`,
        paragraphs: [
          `You are reading a library book in a comfortable chair. Your right hand rests somewhere beside your lap, out of view. Pause for a second: without looking, you have some sense of where that hand is. Maybe the fingers feel loosely curled, the wrist turned slightly inward. Nobody taught you to check; the information is just there.`,
          `Then a different kind of thought can arrive: my hands probably look awkward. Notice what just happened. The first was information from your body. The second was a verdict from an imaginary audience. They feel similar, arrive in the same quiet moment, and are completely different things. Learning to tell them apart is the skill in this lesson, and it matters because the second kind quietly taxes situations the first kind handles for free.`,
        ],
      },
      {
        title: `The body's quiet position sense`,
        paragraphs: [
          `The felt-position information has a name: proprioception, the sense of where your body parts are and how they are moving. Try the classic demonstration later: eyes closed, touch your nose. Your finger finds it without vision, because muscles, tendons, and joints constantly report position inward.`,
          `Vision and touch add their own separate reports. Seeing your fingers is one source; feeling the chair under your hand is another; the inward position sense is a third. They usually agree well enough that you never think about them, and you do not need to separate them perfectly. The useful line is simpler: all three describe your experience. None of them says anything about how you appear to other people.`,
        ],
      },
      {
        title: `Describe, then look`,
        paragraphs: [
          `Here is the whole exercise in one worked pass. Without looking, you write: fingers loosely curled, hand beside my lap. Then you look. The hand is where you expected, but the fingers are straighter than they felt. Interesting, and completely fine.`,
          `The second description added information; it did not grade the first one. Felt position and seen position often differ a little, because they come from different reporting systems. There is no score, no accuracy to train toward in this lesson, and no need to adjust the hand. You simply now own two honest descriptions instead of one.`,
        ],
      },
      {
        title: `Where the judgment belongs`,
        paragraphs: [
          `Now return to my hands probably look awkward. That sentence contains no position information at all. It invents an observer, guesses their verdict, and hands the verdict to you as if it were sensory fact. You can file it where it belongs: a story about an audience, not a report from your body. Report the sensation, check visibly if useful, and let the story pass unverified.`,
          `Two boundaries keep this honest. If attending inward feels unpleasant, which happens for some people, use visible descriptions only; the distinction between describing and judging works just as well from the outside. And none of this is a diagnostic test, a posture program, or a confidence technique. It is one small habit: know which of your sentences are measurements and which are verdicts.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Where the hand rests`,
        alt: `Top view of a seated reader, a hand beside the lap, and a book farther forward.`,
        caption: `Locate the hand relative to the reader before looking down. This is a schematic, not an anatomy assessment or a model pose.`,
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
        `Settle somewhere comfortable and let one hand rest naturally, without posing it. Keep your eyes open and on something else.`,
        `Describe the hand in writing from feel alone: its location and one finger detail. Unclear is a perfectly good description; the point is honest reporting, not accuracy.`,
        `Now look, and write a second description of what you see, without moving the hand to match your prediction. The two may differ, and that difference is information, not error.`,
        `Underline every position word in both notes, and cross out anything that is actually a verdict about confidence or how you might appear. Most people find at least one stowaway.`,
      ],
      notice: `You end with two descriptions and can say exactly which information came from feel and which from looking. Verdicts about appearance appear in neither.`,
      troubleshooting: `If the felt description will not come, keep the uncertainty and work from the visible description only. Repeating until you feel accurate is not the exercise.`,
    },
    recall: {
      prompt: `While sorting photographs, you notice one shoulder feels raised and immediately think: I must look anxious. What can you report without that interpretation?`,
      hint: `Separate the sensation from the imagined audience.`,
      answer: `The report is simply: my shoulder feels raised. You can look and add a visible description if that is useful. Neither the feeling nor the look establishes anxiety, and neither tells you what anyone else perceives; that part was an invented verdict stapled to a real sensation. Adjust the shoulder only if it is uncomfortable or in the way of sorting, not to correct an inferred personality.`,
    },
    quiz: {
      question: `Your felt finger position differs from what you see when you look. What is the most defensible next step?`,
      options: [`Repeat the exercise until the two descriptions match exactly.`, `Record the difference as information about this moment, without a score.`, `Use the visible position to judge how confident you appear.`],
      correctIndex: 1,
      explanation: `The two descriptions come from different reporting systems, so small disagreements are ordinary and carry no grade. Training them to match misunderstands the exercise, and appearance judgments import exactly the imagined-audience verdict the lesson separates out.`,
    },
    takeaway: `Feel is a measurement, looking is a measurement, and how I must look is neither. Keep the verdicts out of the data.`,
    sourceNote: `OpenStax explains proprioception. This original observation exercise is not a diagnostic test, treatment, or validated way to change confidence.`,
  },
  {
    id: 'presence-002',
    outcome: `Give your hands somewhere to rest while you speak, instead of running a confidence pose as a second job.`,
    scene: `A new book-club member rehearses an introduction beside an armrest.`,
    sections: [
      {
        title: `The pose becomes another job`,
        paragraphs: [
          `Before her first book-club introduction, Leena tries holding both hands open and visible above her lap, because an article said open hands look confident. Now watch what her attention is doing: part of it rehearses the book she wants to mention, and part of it supervises two hovering hands, keeping them level, keeping them open.`,
          `She can finish the introduction this way. But the pose is an extra task running alongside the real one, and it was recruited by a guess about how she appears. The practical question is much smaller than how should a confident person sit. It is: where can my hands go while I speak comfortably?`,
        ],
      },
      {
        title: `Let something else carry the weight`,
        paragraphs: [
          `Think of holding a shopping bag while chatting with a neighbor. You can hold it the whole time, and your arm quietly pays for every minute. Or you can set it on the bench beside you and forget it exists. Nothing about the conversation changes except that one ongoing effort stops.`,
          `A resting surface does the same for hands: an armrest, a lap, a cushion, a table edge. Whatever rests there stops being held against gravity, and your body's own position sense keeps quiet track of it without you watching. Support is not a rule about stillness, either. A resting hand can still gesture, fidget, or move in any familiar, harmless way and return. The goal is only to stop paying for an unnecessary display.`,
        ],
      },
      {
        title: `Same sentence, different support`,
        paragraphs: [
          `Leena runs the experiment. Same sentence both times: I am Leena, and I chose the novel for its unreliable narrator. First with the hovering open-hands pose, then with a forearm resting on the armrest.`,
          `With the armrest carrying the weight, she notices two small things: less effort spent holding, and the sentence easier to follow to its end. That is a useful personal result. Notice its honest size: it says this arrangement suits Leena, today, in this chair. It is not evidence of a universal posture effect, and the lesson makes no claim that any pose changes how audiences judge speakers.`,
        ],
      },
      {
        title: `Fit the support to the person`,
        paragraphs: [
          `The ending matters: if the armrest height nudges her shoulder upward, it was the wrong support for her body, and the lap wins today. Another member might speak best with hands moving the whole time and need no resting arrangement at all. Both are correct answers, because the test is comfort plus attention for the actual task, not obedience to a furniture feature.`,
          `Keep the boundary in view. This is a comfort experiment, not a performance technique: no claim about hormones, authority, or what observers conclude. If a position is comfortable and your words flow, it is doing its entire job, whatever it looks like.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Support beneath the hand`,
        alt: `Side-view schematic showing Leena, her forearm and hand, and an armrest beneath them.`,
        caption: `Follow the upward arrow: it marks support carrying weight, not a prescribed joint angle. Symbols are separated for legibility.`,
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
        `Write one sentence introducing yourself and a harmless interest. This rehearsal stays private; nobody's reaction is being tested.`,
        `Say the sentence in your usual sitting position, whatever it is. Do not add a pose; this run is your baseline.`,
        `Say it again with one available support carrying your hands or forearms, such as your lap or an armrest. Movement stays allowed; only the holding effort should change.`,
        `Note which run needed less effort to maintain, or write no clear difference, which is an equally valid result. Keep whichever arrangement is comfortable, and discard the experiment's loser without ceremony.`,
      ],
      notice: `Your note names a practical difference in holding effort, or honestly reports none. Nothing in it is a verdict about how authoritative you looked.`,
      troubleshooting: `If a support restricts movement you wanted, or hikes a shoulder, it failed the comfort test. Change the surface or return to your usual position; usual is a fine answer.`,
    },
    recall: {
      prompt: `At a hobby demonstration, someone keeps repositioning their hands while explaining a model they built. What should decide whether anything about the setup needs changing?`,
      hint: `Whose comfort, and which task?`,
      answer: `Their comfort and their task, which means asking rather than observing: would a surface for the model or their hands help? The repositioning alone is not evidence of discomfort, nervousness, or poor attention; plenty of people explain best while moving. A support they request is useful. Stillness imposed because movement looks unsettled would just be Leena's hovering pose, assigned to someone else.`,
    },
    quiz: {
      question: `During rehearsal your lap feels easier than the armrest. What does that observation justify?`,
      options: [`Use your lap, as long as it stays comfortable.`, `Keep the armrest, because it is the designated support.`, `Choose whichever position looks most confident in a recording.`],
      correctIndex: 0,
      explanation: `The experiment measured your holding effort, and the lap won, so the lap is the answer it supports. Furniture holds no authority over your comfort, and judging recorded appearance swaps the question back to the imagined audience the lesson started by retiring.`,
    },
    takeaway: `Hands need a place, not a performance. Let something carry the weight and spend the attention on your words.`,
    sourceNote: `OpenStax and autistic adults' accounts of stimming provide background. The support comparison is original and makes no hormonal or interpersonal-effect claim.`,
  },
  {
    id: 'presence-003',
    outcome: `Place a shared page so that looking at the task becomes a comfortable alternative to eye contact.`,
    scene: `Two friends position a planting sketch while planning a balcony garden.`,
    sections: [
      {
        title: `The sketch is off to one side`,
        paragraphs: [
          `Asha and Jo are planning balcony pots. Asha holds the planting sketch beside her own shoulder and asks Jo to keep looking at her while she explains. Jo is now stuck with a forced choice: follow the drawing, or meet the gaze expectation. Every glance at the page risks reading as drifting attention, when it is actually the opposite: checking which pot Asha just mentioned.`,
          `Nobody has misunderstood a word yet, and the conversation is already harder than it needs to be. The page's position did that, which is good news, because positions are easy to change.`,
        ],
      },
      {
        title: `Give attention a shared target`,
        paragraphs: [
          `A shared reference is anything both people can consult together: a sketch, a map, a list, the object itself. Think of two people reading one map spread on a car bonnet, versus one of them holding it against their chest. On the bonnet, this road here works with a pointing finger. Against the chest, the same words are a riddle.`,
          `A well-placed reference does two jobs at once. It makes pointing language land, because both people can locate this pot. And it quietly offers somewhere relevant to look besides the other person's eyes, which matters because eye-contact comfort genuinely varies. Accounts by autistic people describe eye contact as anything from fine to distracting to actively uncomfortable. A shared page removes the test without anyone having to announce a preference.`,
        ],
      },
      {
        title: `Move the page, watch the conversation change`,
        paragraphs: [
          `Jo asks to bring the sketch forward, between them. Small move, different conversation. Asha says the herb pot and taps the label; Jo points at the same label and asks about drainage. Both are oriented toward the plan rather than negotiating each other's faces, and looking down now obviously means working.`,
          `Name what improved, precisely: both people can locate the subject of every sentence. The point was never reducing eye contact as a rule; anyone who wants to look up and talk face to face still can. The page just stopped making that the only legitimate direction.`,
        ],
      },
      {
        title: `One layout does not fit everyone`,
        paragraphs: [
          `Before calling the new layout finished, they check it: is the lettering readable at this angle for both? Can each still see the other's face when they want it? That last check matters because the shared-page idea has real exceptions. Someone who follows speech partly through faces, or who signs, needs the speaker visible, not replaced by paper. For them, an angled arrangement or a second copy of the sketch may work better than a page planted in the middle.`,
          `So the rule worth keeping is the question, not the geometry: where can the page and the people all be seen comfortably by the people who need them? Ask it, adjust, and ask again when the task changes. No glance counts, no fixed angles, no universal seating chart.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Sketch off Asha's shoulder`,
        alt: `Top view: Asha and Jo sit below a sketch placed forward and far to their right.`,
        caption: `Trace each person's viewing line: Jo must choose between the page and Asha's face. The unequal arrangement is schematic, not a measurement of neck strain.`,
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
        caption: `Both viewing lines now reach the shared page comfortably. Ask whether an arrangement works for its people rather than copying the angle.`,
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
        `Pick a drawing with at least two labeled parts and mark where two participants would sit. If you are alone, the paper markers stand in for people.`,
        `Try the bad layout first: page off to one side. Trace each person's line of sight and notice who has to choose between page and face.`,
        `Move the page forward between the positions and trace the lines again. Say one pointing sentence, this part here, and check it would land for both.`,
        `If you have a partner, ask which layout supports reading and talking; if alone, write that question down, because asking is the step people skip. Sketch the winning layout plus one remaining adjustment it still needs.`,
      ],
      notice: `In the shared layout, looking at the page is obviously participation. Nobody has to perform attention and read labels at the same time.`,
      troubleshooting: `If the central position makes text or faces harder for either person, stop optimizing the middle: try an angle, or give each person their own copy. Access beats symmetry.`,
    },
    recall: {
      prompt: `A friend tells you they need to see your face while you two discuss sewing instructions. How do you adapt the shared-reference idea rather than abandoning it?`,
      hint: `The alternative to eye contact must not delete information someone needs.`,
      answer: `Ask where the instructions and your face can both sit comfortably in their view, then arrange for that: an angled layout, the page held beside your face, or a separate copy for each of you. The objective was always shared access to everything each person needs, and for your friend that includes your face. The page placement serves the people; the people do not serve the page.`,
    },
    quiz: {
      question: `In the new layout both people can read the page, but one can no longer follow facial information they rely on. What next?`,
      options: [`Keep the layout, since page visibility improved.`, `Ask them to glance between page and face more quickly.`, `Adjust the arrangement together until both kinds of access work.`],
      correctIndex: 2,
      explanation: `A layout succeeds only when its actual participants can use it, and this one deleted information someone needs. Keeping it crowns the page over the person, and asking for faster glancing hands the cost of the furniture back to the human.`,
    },
    takeaway: `Put the task where every participant can reach it with their eyes. The page should end the gaze test, not join it.`,
    sourceNote: `PLOS eye-contact accounts are qualitative, not representative preferences. ADA guidance informs access; these garden layouts are original examples, not tested seating prescriptions.`,
  },
  {
    id: 'presence-004',
    outcome: `Turn a show-respect-with-eye-contact rule into a participation agreement people can actually use.`,
    scene: `A museum volunteer rewrites the welcome instructions for a multilingual orientation.`,
    sections: [
      {
        title: `A welcome rule excludes someone`,
        paragraphs: [
          `A museum's volunteer orientation includes one line of etiquette: show respect by maintaining eye contact. Riku learns best while taking notes, eyes on the page. Sana follows the handling demonstration best by watching the equipment, not the demonstrator. Neither knows whether the rule permits their way of paying attention.`,
          `The host meant well: the rule was aimed at attention. But look at what it actually measures: a visible behavior, gaze direction, which is not the same thing as receiving information. Two attentive volunteers now face a silly choice between learning effectively and appearing to obey the welcome sheet.`,
        ],
      },
      {
        title: `Where the rule came from, and why it wobbles`,
        paragraphs: [
          `Gaze rules feel natural because they are conventions: shared expectations people absorb from a setting, like queueing habits or greeting styles. And conventions genuinely vary. One study comparing Finnish and Japanese participants found differences in how photographed faces and gaze directions were judged. The existence of such variation is enough to doubt any single worldwide gaze rule.`,
          `But catch the tempting wrong fix: replacing one universal rule with nationality-based rules, expecting eye contact from this person and aversion from that one. Individuals routinely differ from the conventions associated with their background. Add neurodivergent experiences, vision differences, interpreters, and the demands of the task itself, and the honest conclusion is that no rule lets a host infer what Riku or Sana needs. Only an offer does.`,
        ],
      },
      {
        title: `Rewrite the rule as an offer`,
        paragraphs: [
          `The host replaces the line with: use notes, the demonstration, or another comfortable focus, and tell me if a different arrangement would help. Watch what the volunteers do with that permission. Riku keeps writing and later asks how to label a storage tray. Sana asks for a closer view of the demonstration.`,
          `Both responses are about the activity, which is exactly the point: freed from performing respect, attention goes to the work. And the host's half of the bargain is real too: no quiet glance-counting after making the offer. An offer that is secretly monitored is just the old rule wearing a lanyard.`,
        ],
      },
      {
        title: `Check understanding the honest way`,
        paragraphs: [
          `What about the worry hiding under the original rule, that people are not following? Ask about the task, not the eyes: which tray label is still unclear? A task question measures understanding directly, which gaze never did. Someone can stare attentively and absorb nothing, or write notes head-down and catch every word.`,
          `Two boundaries finish the redesign. The agreement is local and revisable: what works in the orientation room may need adjusting in the gallery, so the offer stays open. And nobody owes a reason: a volunteer can use notes without explaining a diagnosis, and nobody is asked to represent a culture. The rule asked people to perform respect. The offer lets them participate, which was the goal all along.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `A different welcome`,
        alt: `The host offers gaze choices; volunteers request note-taking and a demonstration view.`,
        caption: `Read the exchange for what replaces monitoring: concrete access requests about the task. The conversation is fictional.`,
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
        `Copy the original rule and underline its actual goal, which is hiding inside it: volunteers understand the orientation. Gaze was only ever a proxy for that.`,
        `Write the replacement: permission for notes, another focus, or a different arrangement, requested without anyone disclosing a reason or diagnosis.`,
        `Add one task question the host can use instead of watching eyes, such as: which tray label is still unclear? This is the honest attention check.`,
        `Proofread your rewrite twice: once as someone who never looks at speakers, and once as someone who always does. Both readers should feel allowed. Strike any glance quota or by-nationality rule that crept in.`,
      ],
      notice: `Your instruction now permits every working style you could think of, and it still checks understanding, just directly instead of through eye direction.`,
      troubleshooting: `If your rewrite accidentally sounds like eye contact is now forbidden, you flipped the rule instead of retiring it. Add the missing option back: looking at the speaker is also a comfortable focus.`,
    },
    recall: {
      prompt: `A debate club requires members to face the speaker throughout every contribution. Keep the club functional, but fix the rule. What do you change?`,
      hint: `Keep the task expectation, release the visual performance.`,
      answer: `Separate the two things the rule bundled. Keep the genuine task expectations: let speakers finish, respond to the actual points, ask for clarification. Release the performance: permit notes, other comfortable focuses, and agreed visual arrangements, with adjustments requestable privately or publicly. And resist assigning gaze expectations by cultural background, which just replaces one wrong rule with several. Facing the speaker never measured listening; the quality of responses does.`,
    },
    quiz: {
      question: `After the rewrite, a participant says looking directly at speakers is what helps them follow. What fits the new agreement?`,
      options: [`Welcome that choice alongside everyone else's.`, `Ask them to avoid eye contact so the group follows one style.`, `Allow it only for people whose background convention matches.`],
      correctIndex: 0,
      explanation: `The agreement's whole point is individual choice, and direct gaze is one of the choices. Banning it flips the old rule instead of retiring it, and sorting permissions by background converts a population average into exactly the kind of individual prediction the lesson showed fails.`,
    },
    takeaway: `Ask how each person can participate, and check understanding through the task. Averages about groups never set the rule for the person in front of you.`,
    sourceNote: `The cultural gaze study used particular samples and photographs. Autistic eye-contact accounts document variation. Neither source validates a gaze quota or individual cultural profile.`,
  },
  {
    id: 'presence-005',
    outcome: `Offer a warm greeting that leaves touch genuinely optional, including after the person says no.`,
    scene: `A returning choir member meets a newcomer before rehearsal begins.`,
    sections: [
      {
        title: `Enthusiasm is not an answer`,
        paragraphs: [
          `At choir rehearsal, Mateo spots a new member he knows from an online singing group. Delighted, he starts moving in for a hug. She smiles, and stays exactly where she is. Freeze the scene there, because two different facts are on the table: he knows she is smiling, and he does not know whether she wants to be hugged.`,
          `Here is the problem with motion already underway: it quietly transfers the work. If she does not want the hug, she must now stop an action in progress, in front of people, in her first week. Reading enthusiasm, stillness, or we-know-each-other-online as permission puts the burden on the person with the least standing to object. A greeting can stay warm without creating that trap.`,
        ],
      },
      {
        title: `Permission, one action at a time`,
        paragraphs: [
          `Consent is a person's voluntary permission for a particular action, and the particular matters. The action in question is greeting touch today, not the friendship, not the online history. Last week's hug decided last week. Agreeing to a handshake authorizes a handshake, not whatever contact follows naturally.`,
          `A usable offer has two working parts. It names a real alternative, so declining has somewhere comfortable to land: would you like a hug, or shall we just say hello? And it is delivered standing still, in a way the person can access, followed by actual waiting. An unclear answer, a frozen smile, a half-step back, means the touch is unagreed. Silence approves nothing.`,
        ],
      },
      {
        title: `Watch the whole exchange`,
        paragraphs: [
          `Mateo catches himself, stops at conversational distance, and asks the two-option question. The newcomer says: just hello today. He answers: good to meet you, we are using the blue songbooks, and the conversation rolls on.`,
          `Read what did the work there. The welcome did not shrink after the no. He did not ask whether something was wrong, did not glance around to share a reaction, did not downgrade his friendliness as a quiet penalty. The refusal cost her nothing, which is exactly what makes the next offer, to her or anyone watching, honest.`,
        ],
      },
      {
        title: `What makes optional actually optional`,
        paragraphs: [
          `The polish of the wording is not the test. The test is what happens after no. If declining triggers persuasion, repeated offers, a request for reasons, or a cooler welcome, then the offer was a toll booth, not a choice. Voluntary means the no is cheap.`,
          `Two boundaries round this off. Greeting customs differ across families, regions, and communities, and an individual can still prefer something different from their expected custom, so the person in front of you outranks the custom behind them. And this works in every direction: your own no to a hug or handshake needs no justification either. A greeting is for welcoming someone, and it is complete with or without contact.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Welcome without a touch requirement`,
        alt: `Mateo offers a hug or hello, the newcomer chooses hello, and the introduction continues.`,
        caption: `Inspect the line after the refusal: the welcome continues at full warmth. This is a fictional greeting, not a persuasion script.`,
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
        `Imagine greeting a newcomer at a hobby group you attend. Write a welcome that is complete with no touch in it at all; this is your foundation, not a fallback.`,
        `If touch would be natural in that setting, add one offer with a built-in alternative, shaped like: would you like X, or shall we just say hello? One offer, two easy exits.`,
        `Write the reply no thanks, and then, before anything else, draft your next sentence about the shared activity: where things are, what happens first. This sentence is the whole skill.`,
        `Reread the exchange checking one thing: does the person who declined have to explain, apologize, or manage your feelings anywhere? If yes, revise until the no is free. Rehearse privately.`,
      ],
      notice: `Your greeting reads as equally warm on both branches. The follow-up sentence after the no is practical and ordinary, which is what tells the other person the no truly cost nothing.`,
      troubleshooting: `If your follow-up asks why or offers a different kind of touch instead, replace it with activity information. The search for an acceptable form of contact is pressure wearing a friendly face.`,
    },
    recall: {
      prompt: `A teammate accepted a congratulatory high-five yesterday but does not respond to your raised hand today. What does respecting control over touch look like right now?`,
      hint: `Yesterday's permission covered yesterday.`,
      answer: `Lower the hand and congratulate them in words, without completing the high-five, repeating the offer, or asking what changed. Permission attaches to a particular action at a particular time, so yesterday approved yesterday. Today's non-response is an answer you can act on: no touch now. The interaction continues normally, no explanation owed, and tomorrow is a fresh question if it comes up at all.`,
    },
    quiz: {
      question: `A guest declines your offered handshake. Which continuation keeps the greeting warm without adding pressure?`,
      options: [`Offer a hug instead, searching for a contact they accept.`, `Introduce yourself normally and carry on without touch.`, `Privately ask why handshakes are uncomfortable, so you know for next time.`],
      correctIndex: 1,
      explanation: `The ordinary introduction treats the refusal as settled and costless, which is what optional means. Cycling through other touch offers continues the negotiation the guest just ended, and requiring a reason, however kindly meant, makes declining expensive enough that next time they may just endure the handshake.`,
    },
    takeaway: `Offer once, with a built-in easy no, and keep the welcome at full warmth either way. The price of saying no is the measure of the offer.`,
    sourceNote: `Consent philosophy and disability etiquette inform this everyday application. The dialogue is original; cultural customs and friendly expressions do not replace individual permission.`,
  },
  {
    id: 'presence-006',
    outcome: `Spot when your own body or belongings have blocked someone's way out of a chat, and clear it before reading anything into their behavior.`,
    scene: `Two neighbors exchange a few words at the laundry-room exit.`,
    sections: [
      {
        title: `The exit becomes part of the invitation`,
        paragraphs: [
          `Nora runs into Eli as he is leaving the shared laundry room. She sets her laundry bag down in the narrow passage and asks about the building picnic. Friendly question, ordinary moment. Except that to leave now, Eli has to step around her bag.`,
          `Nora intends only a quick chat. But intentions do not move bags. Saying I will not keep you does not move bags either. Whatever her words offer, the arrangement says: this conversation continues until you physically negotiate your way out of it. Personal space is not just the gap between two people; it includes a usable route away.`,
        ],
      },
      {
        title: `Check the arrangement you control`,
        paragraphs: [
          `An obstruction is anything that interferes with movement: a body planted in a doorway, a trailing strap, a bag on the route, you leaning on the only clear counter. The useful habit is checking your own contributions first, before interpreting anything about the other person. It is like chatting in a supermarket with your trolley across the aisle: the other shopper's edging sideways is not a mood; it is geometry you created.`,
          `A tempting wrong turn here is hunting for the correct conversational distance, maybe by stepping closer until the other person stops retreating. Notice what that method does: it uses their discomfort as your measuring instrument. Comfortable distance genuinely varies by person, setting, and access needs, so there is no universal number to find. A clear route and an asked question get you everything the experiment would, without running it on a neighbor.`,
        ],
      },
      {
        title: `Clear the route, then ask`,
        paragraphs: [
          `Nora notices the bag, moves it to her own side of the passage, and asks: is now a good time, or shall I send the picnic details? Eli picks the message and heads out. Done.`,
          `Score that interaction by the right measure. Nora did not secure a longer conversation, and that was never the goal. She made the choice usable: Eli could stay or go without squeezing past anything or explaining himself. A shorter chat that was freely chosen beats a longer one held in place by a laundry bag.`,
        ],
      },
      {
        title: `Edges of the idea`,
        paragraphs: [
          `Three boundaries keep this practical. First, if the space simply has no workable arrangement, a cramped corridor with no side to stand on, the answer is to end or move the chat, not to invent a compromise that still blocks the way. Second, clear your own things, never other people's: moving someone's bag, and above all someone's mobility aid, to build your preferred layout is itself a boundary violation unless they ask you to.`,
          `Third, keep functional routes in mind by default: doors, light switches, lift buttons, the paths someone using a wheelchair or cane actually needs, which may be wider than the gap you would squeeze through. None of this requires measuring anything. It requires one glance at what you put where, and one honest question about timing.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Bag on the exit route`,
        alt: `Top view with Eli above the exit and Nora's bag between Eli and the exit.`,
        caption: `Follow Eli's route to the exit: it crosses the bag. This schematic shows obstruction, not a minimum clearance measurement.`,
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
        caption: `Only Nora's own object moved. Real routes must suit the people actually using them, including mobility aids.`,
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
        `Draw a doorway you know and mark where you would naturally stop for a chat. This stays on paper; no real passage gets blocked for the exercise.`,
        `Add your bag or backpack where you would actually set it down, then draw the other person's route to the door. Honest drawing matters more than a flattering one.`,
        `Move only your own marks, your position and your bag, until the route is clear. Then write one sentence that offers a later option: shall I message you the details?`,
        `Run the final check: could the person leave mid-sentence without squeezing past you, stepping over anything of yours, or apologizing? If not, keep moving your marks.`,
      ],
      notice: `The sketch preserves a free exit whether or not the chat continues. The offer of a later option does the same job in words that the clear route does in space.`,
      troubleshooting: `If no arrangement clears the route, that is a real answer: this is not a chatting spot. Move the conversation with their agreement, or make it a wave and a message.`,
    },
    recall: {
      prompt: `You stop a classmate with a question beside a row of coat hooks, and your backpack is sitting in front of their coat. They keep glancing toward it. What should change first?`,
      hint: `Look for the constraint you created before reading the glances.`,
      answer: `Move the backpack, immediately and without being asked, and offer to finish the question later. The glances needed no interpretation: whatever they mean, your bag is objectively between them and their coat, and that is the part you control. Reaching for a coat is not a verdict on you or your question, and the kind move is making their exit free before wondering about their mood.`,
    },
    quiz: {
      question: `Someone steps back while you are asking them something. Which response best preserves their options?`,
      options: [`Step forward to restore the original distance.`, `Ask what the step back means before continuing.`, `Leave the space open and offer to continue another time.`],
      correctIndex: 2,
      explanation: `Leaving the space and offering a later option respects the movement without demanding it be explained. Following them forward cancels the distance they just chose, and requiring a meaning turns an ordinary adjustment into a confrontation; both make leaving more expensive than staying.`,
    },
    takeaway: `Check what you put in the way before reading what they do. A chat is only an invitation when the way out is free.`,
    sourceNote: `Disability etiquette and consent inform this framework. The layouts specify no universal personal distance or legally sufficient passage width.`,
  },
  {
    id: 'presence-007',
    outcome: `Treat a seating request as an access question about reach, sightlines, and movement, not a personality clue.`,
    scene: `A community stamp-making workshop prepares places around shared printed instructions.`,
    sections: [
      {
        title: `The end seat and the joke that nearly happened`,
        paragraphs: [
          `At a community stamp-making workshop, Dee asks for the end place instead of a seat between other participants. The organizer feels a joke forming: someone wants to be in charge. It stays unsaid, fortunately, because the request probably has nothing to do with charge. The end seat might mean a clear path to the exit, usable table space, or an angle from which the instruction sheet is actually readable.`,
          `Here is the organizer's real job, and it is pleasantly small: not to solve the mystery of why Dee wants the seat. A seat is part of the activity's equipment, like the ink pads and the paper. The person using it is the only one who can report whether it works, and all the organizer has to do is make asking easy.`,
        ],
      },
      {
        title: `Three kinds of access hiding in every seat`,
        paragraphs: [
          `Think about choosing a cinema seat and you already know the categories. Can I see the screen? That is a sightline: an unobstructed path between a viewer and the thing they need to see. Can I reach my drink? That is reach: whether the materials and controls are usable from the position. Can I get out for the train without climbing over eight strangers? That is movement: arriving, leaving, changing position.`,
          `The three trade off against each other, which is why no single best seat exists. At the workshop, sitting farther back might reveal the whole instruction sheet while putting the ink pads out of reach. Ranking chairs as powerful or timid ignores all three real dimensions in favor of a story. Access planning starts from options and requests, never from a personality theory attached to the table shape.`,
        ],
      },
      {
        title: `Adjust the materials as well as the chairs`,
        paragraphs: [
          `Watch the adjustment actually happen. The organizer asks Dee two small questions: does the end position work, and should the instructions move? Dee requests a copy nearer the table edge. The organizer moves their own supply box off the route and provides the copy. Meanwhile another participant picks a seat with a clearer view of the instructor's face, perhaps because they follow speech better that way.`,
          `Notice that the furniture was never the only lever: duplicating a sheet, shifting a box, or angling a chair can fix what swapping seats cannot. And notice what nobody had to do: compete. Both choices stand on their own terms, with no ruling needed about which person is more engaged.`,
        ],
      },
      {
        title: `The asking rules`,
        paragraphs: [
          `A few boundaries keep this respectful. Nobody owes a diagnosis or a reason with their seating request; what would work better for you is the entire required disclosure. If someone uses a mobility aid, ask before offering help, and never reposition the aid yourself to suit a layout; it is part of their personal space, not the room's furniture.`,
          `And hold the diagram lightly. A sketch of seats and sightlines is a machine for generating good questions, not a verdict. Only the participants can confirm that this arrangement works, this time, for these bodies and these tasks. The organizer who asks twice beats the one who infers once.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Views and route at the workshop`,
        alt: `Two workshop places face instructions, with an exit beyond Dee's side.`,
        caption: `Trace each sightline to the instructions, then trace Dee's route to the exit: the end seat serves both. Top-view sketch; furniture dimensions and individual requirements omitted.`,
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
        `Sketch a small activity you could actually host: two places, the shared materials, and an exit. Board game, craft table, anything familiar.`,
        `Draw each person's sightline to the essential information and their route out. Circle anything a person would have to reach across someone else to use; those circles are your findings.`,
        `Draft the invitation you would say aloud: choose any place that works for you, and tell me if materials should move. Check it requests no reasons and no diagnoses.`,
        `Now test your layout against one hypothetical request, such as: I need the end seat. Revise the sketch, and mark real preferences as unknown until asked, because they are.`,
      ],
      notice: `Every fix in your revised plan changes a physical condition: a copy added, a box moved, a route cleared. None of it assigns anyone a social role.`,
      troubleshooting: `If moving a person fixes their sightline but breaks their reach or route, stop moving people and move the materials: duplicate the sheet, slide the supplies. Paper is easier to relocate than humans.`,
    },
    recall: {
      prompt: `A relative asks for a different place at the board-game table even though everyone can already see the board. What should you ask about before concluding anything?`,
      hint: `Seeing is one of three kinds of access.`,
      answer: `Ask the open question: what would work better about a different seat? The board covers sightlines only; reach to the pieces, chair comfort, hearing the rules over the room, and getting up easily are all live possibilities, and the relative is the only source of the real answer. Accommodate what you can, and resist writing a personality explanation for a request that is probably about elbow room.`,
    },
    quiz: {
      question: `Moving someone nearer the instructions would block their route to the exit. Which revision fits the access approach?`,
      options: [`Keep the closer seat, since reading the instructions is the main task.`, `Preserve the route and bring a copy of the instructions nearer to them.`, `Impose a standard seating order so there are no individual exceptions.`],
      correctIndex: 1,
      explanation: `Duplicating the information satisfies the sightline without spending the movement access, which the closer seat would have traded away. Fixing one access dimension never justifies breaking another, and a standard order simply refuses the question instead of answering it.`,
    },
    takeaway: `A seat has three jobs: see, reach, leave. Ask what would work, adjust things rather than decoding people, and let the user confirm.`,
    sourceNote: `United Spinal and ADA guidance emphasize individual communication and assistance needs. This workshop sketch is not a complete accessibility or jurisdictional compliance assessment.`,
  },
  {
    id: 'presence-008',
    outcome: `Repair talking over each other without blaming anyone, and make sure the yielded turn actually comes back.`,
    scene: `Two amateur astronomers begin discussing the same telescope view at once.`,
    sections: [
      {
        title: `Two people hear an opening`,
        paragraphs: [
          `After a look through the telescope, Sal says: that bright point looked... and stops for a breath. In that beat, Mira starts her question, just as Sal resumes. Two voices, one moment, both now talking over each other about the same patch of sky.`,
          `The tempting readings arrive instantly: Mira could hear it as Sal talking over her; Sal could file it as being interrupted. But strip it to what either of them actually knows, and it is only this: their speech overlapped. The real problem is smaller and more practical. One observation and one question both exist, and the conversation needs a way to collect them both.`,
        ],
      },
      {
        title: `Why collisions are built into talking`,
        paragraphs: [
          `Conversation runs on turn-taking: the coordination of who contributes next. Here is the part people miss: listeners do not wait for a turn to fully end before preparing to speak. They predict the ending from the words, the melody of the sentence, the timing, and they load their response in advance, like a relay runner starting to move before the baton arrives. Mostly the prediction lands. Sometimes two runners move at once.`,
          `Research across ten languages found the same broad tendencies, keeping gaps and overlaps short, with variation in exact timing. Read that as a description of how humans tend to coordinate, not a deadline anyone owes you. Some people and some communication methods need more time or more explicit handoffs than rapid prediction allows, and that is a difference in method, not in respect.`,
        ],
      },
      {
        title: `Offer the turn, and keep the return`,
        paragraphs: [
          `Mira repairs it with one sentence: go ahead with what you saw, I have a question afterward. Sal describes the bright point near the edge of the view, then hands back: what was your question? Mira asks whether it was visible before they adjusted the telescope.`,
          `Study the shape of that repair. Nobody ruled on whose prediction was more reasonable, because nothing needed ruling. And the yield came packaged with a claim ticket: I have a question afterward is not politeness, it is a reservation. Yielding a turn is not abandoning your point; the return is half of the repair, and Sal honoring it is what completed the exchange.`,
        ],
      },
      {
        title: `One collision is weather; a pattern is a problem`,
        paragraphs: [
          `A single overlap proves nothing about anyone; it is the relay runners both moving, and the repair above handles it in five seconds. But suppose Mira yields, and yields again, and the afterward never comes. Now there is a pattern: one person's contributions keep evaporating, whatever anyone intends.`,
          `Patterns deserve process, not accusations and not endurance. Mira can name it plainly and propose the fix: I have lost my question twice, can we agree the turn comes back after each observation? That request claims no mind-reading about motive, and it cannot be waved away with collisions happen, because the accident explanation covers single events, not a repeating direction of loss. Accidents are forgiven; patterns get agreements.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Observation, then question`,
        alt: `Mira yields briefly, Sal describes the view, and Sal returns the turn to Mira.`,
        caption: `Follow the promised return through the exchange: it is made, then honored. This fictional repair assigns no motive to the overlap.`,
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
        `Write one observation and one question about any hobby you like, and label the two speakers. These are the contributions your repair must not lose.`,
        `Stage the collision: both start at once. Write the yielding line with its claim ticket attached: you first, and then I have mine. The ticket is the part most people forget.`,
        `Write the first contribution, then the explicit handoff, then the second contribution. Read it through and confirm both points made it into the record.`,
        `Add one more script for the pattern case: a sentence that names two lost turns and proposes an agreed return, without guessing at anyone's motives.`,
      ],
      notice: `Your repair script contains zero apologies and zero verdicts, yet both contributions survive. The claim ticket and the honored handoff did all the work.`,
      troubleshooting: `If your two speakers get stuck yielding to each other, after you, no after you, have one of them simply name an order once: you, then me. Naming an order is coordination, not rudeness.`,
    },
    recall: {
      prompt: `On a family video call, the connection delay keeps making two people start at once. What agreement would replace the guessing?`,
      hint: `Make the next two turns identifiable in advance.`,
      answer: `Agree an explicit order for the next turns: name who finishes first and who follows, and have the finisher hand over by name. The delay means the usual timing predictions are working with stale information, so collisions are guaranteed and mean even less than usual. That is one more reason to read nothing about intent from the overlaps, and to let the structure, not the reflexes, carry the turn-taking while the delay lasts.`,
    },
    quiz: {
      question: `You have yielded twice in one discussion and never got to finish your update. What best addresses the situation?`,
      options: [`Keep yielding, since any single overlap can be accidental.`, `Treat the next overlap as proof of deliberate disrespect.`, `Name the missed turns and agree on an explicit return.`],
      correctIndex: 2,
      explanation: `A repeating loss is a process problem, and the process fix, naming it and agreeing the turn comes back, requires no claims about anyone's intent. Endless yielding lets the pattern continue, and declaring disrespect overreaches the evidence while making the fix harder to propose.`,
    },
    takeaway: `Overlaps are built into how talking works. Repair with a yield plus a claim ticket, and treat a repeating loss as a process to fix, not a motive to judge.`,
    sourceNote: `Turn-taking and repair studies provide background. The telescope exchange is original; sample timing patterns are not universal etiquette deadlines.`,
  },
  {
    id: 'presence-009',
    outcome: `Hand over turns with invitations people can actually perceive, including a free way to pass.`,
    scene: `A neighborhood seed-swap group decides how volunteers will offer planting advice.`,
    sections: [
      {
        title: `A glance fails to hand over`,
        paragraphs: [
          `At a neighborhood seed swap, the host finishes describing tomato seeds and looks meaningfully toward Priya, expecting her to pick up with beans. Priya is reading packet labels and never sees the look. After a beat of silence, another volunteer jumps in, and the moment is gone.`,
          `The host's easy conclusion is that Priya was not paying attention. But check what actually happened: the invitation existed only as a glance, a signal Priya was never going to receive while reading. A handoff that lives in one person's eyes can vanish before the intended person even knows it was made. The failure was in the delivery system, not the attention.`,
        ],
      },
      {
        title: `An invitation is an opportunity, not a summons`,
        paragraphs: [
          `A turn invitation marks a contribution as available: beans are next, and the floor is yours if you want it. Keep that separate from a demand to perform. The difference shows most sharply in the classic mistake, swinging a surprise public question at the quietest person in the room. That compels a performance without ever making a real opportunity perceivable, the worst of both halves.`,
          `The fix is boring and effective: agree the mechanism before the discussion. The host names the topic and the invited person out loud, the same information goes into the shared notes, and every invitation carries three built-in answers: speak now, come back to me later, or pass. The signal must suit the actual group; speech-only handoffs fail some people exactly the way glances failed Priya.`,
        ],
      },
      {
        title: `Watch the agreement at work`,
        paragraphs: [
          `The seed swap adopts named invitations plus the notes. The host says: Priya, beans next if you want, or we can return later. Priya, mid-label, asks to come back after she checks something. The host marks the return in the notes and, crucially, follows through once tomatoes finish. Priya takes her turn: these beans need a climbing support.`,
          `Another member contributes a storage tip in writing rather than aloud. Count the kinds of participation that just coexisted: immediate spoken, deferred spoken, and written, none requiring identical airtime to be useful. The agreement did not make people contribute; it made contributing reachable.`,
        ],
      },
      {
        title: `Check the process, not the silence`,
        paragraphs: [
          `At the end, the host asks one closing question: did anyone miss an invitation or a promised return? That audits the machinery directly. The alternative, reading silence or facial expressions as satisfaction, measures nothing; quiet can mean content, lost, or never invited, and the host cannot tell which from the outside.`,
          `Two boundaries complete the design. A pass is free: it needs no reason, and using it repeatedly is a legitimate way to attend a seed swap, not grounds for losing future invitations. And deferrals are debts: a return that is offered and forgotten teaches people that the options are decorative. Honor the mechanics and the mechanics keep working.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `An invitation with a return`,
        alt: `The host invites Priya, Priya asks to return later, and the host offers that return.`,
        caption: `Follow the deferral to its honored return two lines later. The same invitation also lives in agreed shared notes, and the pass option is real.`,
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
        `Pick a small group task you know, a book club or planning chat, and first draft the question you would ask the group: which turn signals can everyone here perceive?`,
        `Write one full invitation naming a person and topic, with the three answers built in: now, later, or pass. The pass must cost nothing and require no reason.`,
        `Add the second channel: the same invitation in shared notes or another agreed format, because a spoken signal alone recreates the glance problem for someone.`,
        `Script the honored return for a deferral, and the closing audit question: did anyone miss an invitation or return? Use invented names; real people get consulted, not conscripted.`,
      ],
      notice: `In your script, a person can notice the opportunity, put it off, and still receive it, all without anyone interpreting their face. The machinery carries what the glance used to drop.`,
      troubleshooting: `If your invitation still reads like a summons, the pass option is probably buried or conditional. Move it into the invitation itself: or we can skip it, no reason needed.`,
    },
    recall: {
      prompt: `A craft group hands over turns with raised hands, but one member cannot see them. How do you revise the handoff without compelling anyone to speak?`,
      hint: `Fix access to the signal, not willingness to contribute.`,
      answer: `Change the signal, keep the freedom. Agree a cue the member can perceive, a spoken name, a tap pattern, an order posted in a format they use, and distribute the turn order that way for everyone. The pass and the deferred return stay exactly as they were. The problem was never that the member would not respond to invitations; it was that the invitations were being broadcast on a channel they cannot receive, and compelling speech would fix the wrong half.`,
    },
    quiz: {
      question: `During an agreed round, one member passes every time. What is the appropriate response?`,
      options: [`Honor the passes and keep the agreed alternatives available.`, `Switch to easier questions until they contribute aloud.`, `Stop inviting them, since they appear uninterested.`],
      correctIndex: 0,
      explanation: `The pass is part of the agreement, so using it, even often, is participation on the agreed terms. Escalating with easier questions converts the invitation into pressure, and withdrawing future invitations punishes someone for exercising an option the group promised was free.`,
    },
    takeaway: `Put the turn where the person can perceive it, attach a free pass and a real return, and audit the process instead of reading faces.`,
    sourceNote: `ADA guidance and turn-taking research inform this framework. The seed-swap convention is original, not a tested requirement for equal speaking time.`,
  },
  {
    id: 'presence-010',
    outcome: `Use a thinking pause openly: name what you are checking and agree when the answer comes back.`,
    scene: `A friend asks to borrow a camera before a weekend school performance.`,
    sections: [
      {
        title: `The quiet has several possible meanings`,
        paragraphs: [
          `Imani asks to borrow your camera for Saturday's school performance. You go quiet, because you genuinely cannot remember whether your sibling booked it for that weekend. Reasonable pause. But look at it from Imani's side of the silence: is this reluctance? A problem with the camera? Did the question even land?`,
          `The silence supports all three readings equally, which is to say it supports none. Meanwhile your actual activity, reconstructing a calendar entry from memory, is invisible. One short sentence could hand Imani the real picture without deciding the request before you have the facts.`,
        ],
      },
      {
        title: `Name the unfinished task`,
        paragraphs: [
          `A thinking pause is time spent on the unfinished part of responding: remembering, checking, composing, weighing. Conversations run on timing expectations, so an unexplained gap reads as something, usually something wrong. Naming the task fixes that instantly: I need to check whether the camera is already booked.`,
          `Notice the sentence's careful size. It explains the delay without promising a yes; checking is not agreeing. When the check will outlast the conversation, attach a return point, I can tell you this evening, or flip it into a question, when do you need the answer by? The useful content is always what happens next. An apology for needing time carries no information; the plan does.`,
        ],
      },
      {
        title: `Return with the result, or with a revised plan`,
        paragraphs: [
          `You tell Imani: I need to check the shared calendar, does this evening work for an answer? It does. That evening the calendar shows the camera is promised to your sibling, and you report it straight: it is already booked Saturday, so I cannot lend it then.`,
          `Two things about that ending deserve underlining. The pause bought accuracy, not a softer way to say yes; a checked no beats an unchecked yes that collapses on Friday night. And the promised return arrived even though the news was negative. If the calendar had been unreachable, the move is the same: send an update and a new return point. A promised answer that silently evaporates is worse than either answer.`,
        ],
      },
      {
        title: `Whose pause, and what it is never for`,
        paragraphs: [
          `Keep two boundaries attached. First, naming a pause is a tool you may use, not a toll everyone owes. Some people routinely need more time to process speech or compose a reply, and they are not obliged to narrate or justify every delay. Offer the same patience you would want for your calendar check.`,
          `Second, the tool has a corrupt twin: deliberate silence deployed to make someone anxious enough to concede, the long pause as pressure tactic. The difference is purpose. A thinking pause serves the accuracy of your answer; a strategic silence serves your side of a negotiation. The first builds trust in your answers. The second teaches people that your quiet is a weapon, and they will stop asking you things.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Purpose and return point`,
        alt: `A camera request receives a stated calendar check, an agreed return, and an answer.`,
        caption: `Follow the three beats: the named check, the agreed evening return, and the honest no arriving on schedule. The timing is a fictional agreement, not a recommended duration.`,
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
        `Invent a request you could not answer immediately, borrowing something, confirming a date, and write down the one detail you would need to check first. Naming the missing detail is the core skill.`,
        `Draft your pause sentence: the check, stated plainly, with no yes hiding inside it. Test it by asking: could the requester mistake this for agreement? Revise until they could not.`,
        `Add the return point and the courtesy question: does this evening work, or when do you need to know? The requester gets a say in the timeline.`,
        `Write both endings: the answer delivered on time, and the update you would send if the check itself stalled. The second ending is the one that separates reliable people from hopeful ones.`,
      ],
      notice: `At every moment of your script, the other person knows whether to wait, when to expect news, and that no answer has been smuggled in early. That is the entire job of the pause sentence.`,
      troubleshooting: `If your draft just says give me some time, it names no task and no return, which is the original mysterious silence with words on it. Add what you are checking and when you will be back.`,
    },
    recall: {
      prompt: `You are asked which of two poster designs should go to print, and you need to see the small lettering at actual size first. What does a useful pause statement contain?`,
      hint: `The task, and the way back.`,
      answer: `Two parts: the named check, I need to look at the lettering at print size before choosing, and the agreed return, I can tell you by two, or does the printer need it sooner? Equally important is what the statement avoids: any wording that sounds like design A is probably fine, which would approve a poster you have not actually inspected. The pause exists to protect the answer's accuracy, so guard it from accidental early verdicts.`,
    },
    quiz: {
      question: `Your promised check is taking much longer than the agreed return time. What best preserves the agreement?`,
      options: [`Stay silent until you finally have a certain answer.`, `Give a provisional yes so the other person can stop waiting.`, `Send an update now and agree a workable next step.`],
      correctIndex: 2,
      explanation: `The agreement was an answer at a time, and the update renegotiates the time honestly while keeping coordination alive. Silence breaks the promise and reopens every anxious reading of the original pause, and a provisional yes invents the exact unchecked answer the pause existed to avoid.`,
    },
    takeaway: `Say what you are checking and when you will be back, then be back. The pause is for accuracy, never for pressure.`,
    sourceNote: `Conversation timing research and consent provide background. This original scheduling script is not a universal response deadline or a method of interpersonal pressure.`,
  },
  {
    id: 'presence-011',
    outcome: `When someone's tone is doing the talking, ask about the action they might want instead of diagnosing the mood.`,
    scene: `Housemates discuss a portable fan while preparing food for a picnic.`,
    sections: [
      {
        title: `A question that could be a request`,
        paragraphs: [
          `You are packing picnic food when your housemate Arun asks: is that fan staying on? Something in his voice lands sharp. In the half-second before you respond, three different replies are available: yes it is, switching it off apologetically, or why are you annoyed?`,
          `Stop and notice that each reply answers a different sentence. The words alone are a factual question about a fan. The sharpness suggests more, but suggests is the operative word: maybe the noise bothers him, maybe he is worried it will blow napkins off the counter, maybe his voice is just carrying the morning. What actually needs resolving is narrow and practical: does he want something done, and what?`,
        ],
      },
      {
        title: `Voice adds information without fixing meaning`,
        paragraphs: [
          `The sound layer of speech, pitch, rhythm, emphasis, timing, is called prosody, and it genuinely carries information. The trap is treating it as a dictionary, as if sharp reliably meant annoyed. The same emphasis reads differently across accents, languages, individual speaking styles, and plain tiredness. Flat delivery, for instance, is just how some people talk, and it predicts nothing about their investment.`,
          `Meanwhile the words themselves have a gap of their own. Is that fan staying on? is an indirect request: if Arun wants the fan off, the sentence never says so. Indirectness works when both people guess the same unstated action, and fails silently when they do not. Put uncertain tone on top of an unstated action, and the only reliable move left is asking.`,
        ],
      },
      {
        title: `Ask about the fan, not the character`,
        paragraphs: [
          `So you ask about the object: do you want the fan off, or are you checking where the napkins should go? Arun explains: he cannot hear the picnic instructions over it. Now the decision is easy, switch it off for the conversation or move the chat, by agreement.`,
          `Compare the road not taken: why are you angry? That sentence makes a claim about his inner state, which he must now dispute before anyone discusses the actual noise, and the fan conversation has become a feelings tribunal. The object question got the same information without charging anyone with a mood. Clarify the action; the emotions, if relevant, tend to explain themselves on the way.`,
        ],
      },
      {
        title: `When you are the one asking`,
        paragraphs: [
          `The lesson runs both directions. If you want the fan off, the kindest version is the direct one: could we switch the fan off while we talk? Naming the action and the object spares the other person the guessing game you just practiced escaping.`,
          `Two boundaries close this out. Clear wording is a gift anyone can give, but a cheerful voice is not a requirement for being understood, and nobody owes anyone an accent adjustment; the words can carry the load. And when you are the listener, your clarifying question is not an accusation of unclarity. It is just the honest admission that tone, in anyone's voice, is a hint and not a message.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Find the missing action`,
        alt: `An ambiguous fan question is clarified as a request to reduce noise during the conversation.`,
        caption: `Notice where the reason appears: in Arun's reply, after the clarifying question. The voice alone never contained it.`,
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
        `Write the ambiguous sentence: are those boxes staying there? Then write two genuinely different practical meanings it could carry, such as a request to move them and a question about whether to pack around them.`,
        `Draft the clarifying question that asks about the boxes and the wanted action, with zero mood vocabulary in it. No annoyed, no upset, no why are you.`,
        `Now write the direct version of each intended request, naming the action and the object: could you move the boxes off the stairs, and should I pack around the boxes?`,
        `If you have a willing partner, show them each version and ask what action it requests; if alone, check each version yourself for a missing object or actor. Every ambiguity you catch on paper is one you will not live out loud.`,
      ],
      notice: `Your direct versions transfer the request in one pass, and your clarifying question retrieves a missing action without putting anyone's character on trial. Those are the only two moves this skill needs.`,
      troubleshooting: `If your clarifying question still lands like an accusation, hunt for the smuggled verdict words: really, actually, why are you. Strip them and ask what, if anything, should change about the object.`,
    },
    recall: {
      prompt: `While planning a walking route, a friend says, in a surprised voice: you are taking that route? What do you clarify before changing any plans?`,
      hint: `Ask what information or action is missing, not what the surprise means.`,
      answer: `Ask the object-level question: do they know something about that route, construction, a mugging-prone underpass, a nicer parallel street, or do they simply prefer another way? Their answer may well change your plan, and legitimately so. But the surprised sound alone established nothing: it could be concern, curiosity, or how they always sound before coffee. Change plans on information, not on vocal weather.`,
    },
    quiz: {
      question: `A teammate's flat delivery makes it unclear what their request actually asks for. Which response targets the real uncertainty?`,
      options: [`Ask which specific change they are requesting.`, `Ask them to sound more interested so you can gauge importance.`, `Take the words fully literally, since tone is unreliable anyway.`],
      correctIndex: 0,
      explanation: `The uncertainty lives in the unstated action, so the question that names it is the one that resolves it. Requesting a different voice adds a demand while leaving the ambiguity intact, and defaulting to literal reading is still a guess, just one wearing a policy. Flat delivery, remember, is simply how some people speak.`,
    },
    takeaway: `Tone is a hint, not a message. When the action is unclear, ask about the object and the change, and leave the mood diagnosis out of it.`,
    sourceNote: `Prosody research and conversation-repair research provide background. These household dialogues are original, not a tested emotion-reading system or voice standard.`,
  },
  {
    id: 'presence-012',
    outcome: `Stop ease of listening from grading the truth of what was said, and check claims on their own evidence.`,
    scene: `A repair-shop customer asks which replacement cable fits an old speaker.`,
    sections: [
      {
        title: `A difficult word changes your impression`,
        paragraphs: [
          `At a repair shop, a technician explains which cable fits your old speaker. Their accent is unfamiliar to you, and you miss the connector name. A second assistant chimes in with a different recommendation, delivered in an accent you grew up around, and something in you relaxes: that answer feels more trustworthy.`,
          `Catch that feeling in the act, because inspect what actually changed between the two recommendations: nothing about the speaker, nothing about either cable. You received zero new facts about the equipment. The only difference was how much work your ears had to do, and that work quietly billed itself to the wrong account: your judgment of which claim is true.`,
        ],
      },
      {
        title: `Two dials that feel like one`,
        paragraphs: [
          `There are two separate dials here. Processing ease is how readily you decode a message: familiar accent, clear audio, simple words, all turn it up. Credibility is how believable you judge the claim to be. They are different instruments, but they sit close together, and ease leaks into credibility.`,
          `This leak has been measured. In experiments by Lev-Ari and Keysar, listeners rated some trivia statements as less credible when spoken with non-native accents, the same statements, downgraded for delivery. Read the result carefully: it describes a listener-side error, not any deficit in the speakers. The logic is plain once separated: a fluently delivered sentence can be flat wrong, and a sentence you needed repeated twice can be exactly right. Difficulty decoding tells you to repair the exchange. It tells you nothing about the claim inside it.`,
        ],
      },
      {
        title: `Check the connector, not the accent`,
        paragraphs: [
          `Back at the counter, the repair is simple: I missed the connector name, could you write it down or point to it on the diagram? The technician writes it. Now you and both staff can do the thing that actually decides the purchase: compare the speaker's model information against each cable's specification.`,
          `Suppose the first technician's recommendation matches the model sheet and the smoother-sounding one does not. The match is the evidence; the delivery was never any. And if the documentation stays unclear, the honest state is undecided, not whichever answer was easiest on the ear. Confidence borrowed from fluency is still borrowed.`,
        ],
      },
      {
        title: `Equal standards, both directions`,
        paragraphs: [
          `The rule that fixes this is symmetry: hold every claim to the same evidential bar, however it sounded. Do not promote the fluent explanation because it flowed, and do not reflexively promote the effortful one to compensate; reverse favoritism is still favoritism, just aimed elsewhere. The specification sheet does not care who read it aloud.`,
          `On the human side, keep the repair small and respectful: ask for the specific detail you missed, in a format both of you can use, and leave it there. The technician owes you the connector name. They do not owe you an accent adjustment, an identity explanation, or a fluency audition to have their technical claim weighed fairly.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Repair the name, then check it`,
        alt: `The customer requests the connector name in writing and compares it with the model specification.`,
        caption: `Follow where the decision happens: at the specification comparison, not in anyone's delivery. The exchange is fictional.`,
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
        `Invent two competing cable recommendations for one fictional speaker, and deliberately write them without assigning either speaker a voice or accent. The claims must stand naked.`,
        `List the evidence that would actually decide between them: connector type on the speaker, cable specification, maybe a returns policy. This list is your decision rule.`,
        `Now imagine you missed one spoken term. Write the targeted repair: the specific missing word, requested in writing or by pointing at a label. Small, precise, done.`,
        `Run the symmetry test: swap the two imaginary speakers' delivery styles and reread your decision rule. If the winner would change, delivery snuck into the rule; strike it out.`,
      ],
      notice: `Your decision rule contains only checkable items, so it gives the same verdict whoever reads the claims aloud, smoothly or slowly. That invariance is the whole skill.`,
      troubleshooting: `If your rule contains sounds knowledgeable or seemed confident, those are delivery impressions wearing evidence costumes. Replace each with something checkable: a spec, a label, a demonstration.`,
    },
    recall: {
      prompt: `Two gardening tutors disagree about when to plant a seed, and one of them is much easier for you to understand. How do you decide whose advice to follow?`,
      hint: `First recover both claims, then test them against something neither voice controls.`,
      answer: `Clarify both recommendations until you hold each claim accurately, asking for the bits you missed in whatever format works. Then check them against evidence that has no accent: the seed packet, reliable guidance for your plant and climate, the experience of local growers. Ease of listening affected your effort, and it is allowed to affect nothing else. If the harder-to-understand tutor matches the growing guide, that is the advice, comfort notwithstanding.`,
    },
    quiz: {
      question: `You understood a fluent explanation perfectly, but you have no evidence for its claim yet. What follows?`,
      options: [`Fluency can break the tie, since comprehension was easier.`, `Check the claim against the same standard as the harder-to-hear explanation.`, `Prefer the harder-to-hear speaker, to compensate for possible bias.`],
      correctIndex: 1,
      explanation: `Comprehension means the claim arrived intact, not that it is true, so it enters the same evidence queue as every other claim. Letting fluency break ties is exactly the leak the experiments documented, and overcorrecting toward the effortful speaker just repaints the bias. The standard stays flat; that is what makes it a standard.`,
    },
    takeaway: `Repair what you missed, then judge every claim by the same checkable evidence. Smooth delivery is comfort, not confirmation.`,
    sourceNote: `The accent experiments measured credibility judgments under specific conditions. They do not establish individual bias in every exchange or differences in speaker competence.`,
  },
  {
    id: 'presence-013',
    outcome: `Give directions that survive without your hand: named reference points the other person can actually use.`,
    scene: `A volunteer directs a visitor to a blue envelope on a labeled community notice shelf.`,
    sections: [
      {
        title: `The direction lives in the hand`,
        paragraphs: [
          `A visitor asks where to leave their membership form. You point across the community room: in that envelope over there. Perfectly clear, to you. But the visitor is watching their interpreter, and your pointing hand performs to an empty house. All they receive is the words, and the words contain no location at all.`,
          `The reflex at this moment is repeating over there louder, which adds volume to a sentence that was never carrying the information. Nothing about the visitor's attention failed; the direction simply lived in your hand, and the hand did not reach them. The fix is moving the information into a channel that does.`,
        ],
      },
      {
        title: `Make the reference shared`,
        paragraphs: [
          `The tool is a reference point: a feature both people can independently identify, like the entrance, or a shelf with a printed name. Phone directions already taught you this skill: nobody says over there into a phone, because the pointing finger obviously cannot travel. Face to face, the finger seems to work, which is exactly why its failures go unnoticed.`,
          `Watch out for the halfway fix, relative words. Left and right depend on which way each person faces, so on your left can send someone the wrong way while sounding precise. A named landmark, the shelf marked Membership, beside the entrance, points the same direction for everyone. Then close the loop with a question: does that description work for you?`,
        ],
      },
      {
        title: `Name the shelf and the target`,
        paragraphs: [
          `Run the actual room. The Membership shelf sits beside the entrance; the Events shelf faces it across the room; the blue envelope lives on Membership. You say: the shelf marked Membership, beside the entrance, the blue envelope on it. The visitor confirms they can find that shelf, and the form gets where it is going.`,
          `Notice the structure of what you said: a named landmark, a named target, and a check. No viewpoint words, no pointing required, although pointing may still happily accompany the words for anyone who can use it. You repaired an omission, not banned a gesture.`,
        ],
      },
      {
        title: `The reference must fit the person`,
        paragraphs: [
          `One more layer of honesty: a printed label and a color are themselves channels, and not universal ones. If the visitor cannot access color or print, piling on more visual adjectives is louder pointing all over again. Ask which reference would work: counting shelves from the entrance, a tactile marker, walking together.`,
          `Two boundaries finish the lesson. More speech is not automatically the answer; a text message, a tactile cue, or agreed assistance can each be the right channel. And a person watching an interpreter is not distracted: sign languages are full languages, and attending to one is attending to you. The test for your directions is always the same: can this person locate the destination through a channel they actually have?`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Membership beside the entrance`,
        alt: `Top view with Events across from Membership; the Membership shelf and envelope are beside the entrance.`,
        caption: `Use the named entrance to anchor the route: it reads the same from every viewpoint, which left and right would not. Fictional layout.`,
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
        caption: `The closing question is part of the direction: a printed label is not universally accessible, and only the visitor knows what works.`,
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
        `Set two objects on a table, pick one as the destination, and write directions to it starting from a named anchor, the kettle end of the table, without pointing and without a single there.`,
        `Now walk to the opposite side of the table and read your directions again. Any left or right that silently flipped is a viewpoint word; replace it with the anchor or a count: second object from the kettle.`,
        `Add the closing question to your script: is that reference usable for you? Write it down; it is the easiest step to skip and the one that catches every mismatch.`,
        `Final round: imagine your landmark itself is inaccessible, the label unreadable, the color unavailable. Write the alternative you would offer: a count, a tactile cue, or walking together.`,
      ],
      notice: `Your final directions identify the object from any side of the table, through a channel the recipient confirmed. The pointing finger became optional decoration.`,
      troubleshooting: `If your fix for an inaccessible landmark was describing it more vividly, you added detail to a channel the person does not have. Change the channel, not the adjective count.`,
    },
    recall: {
      prompt: `On an audio-only call, you catch yourself saying: now click here. What should replace the missing gesture?`,
      hint: `Your pointer lives on your screen; name something that lives on theirs.`,
      answer: `Name the control and its neighborhood: the Save button at the bottom of the Billing section. Your cursor position is a pointing finger the listener cannot see, so the name and context have to carry everything. Then check: can you find that? If their screen or software differs, the check catches it immediately, and you can navigate by what they report rather than by what you see.`,
    },
    quiz: {
      question: `Your direction relies on a color the recipient cannot use. What should change?`,
      options: [`Agree on a different label or reference they can use.`, `Describe the shade with more precision.`, `Repeat the direction from your own viewpoint.`],
      correctIndex: 0,
      explanation: `The failure is the channel, so the repair is a new reference, a position, a count, a tactile cue, chosen with the person. Refining the shade pours detail into the channel that is closed, and restating your viewpoint re-sends the exact information that never arrived.`,
    },
    takeaway: `Directions must live in a channel the other person has. Name a landmark, name the target, and ask whether it works.`,
    sourceNote: `ADA and AAC guidance inform access choices. The shelf layout is original and does not assume that speech, print, color, or gestures work for everyone.`,
  },
  {
    id: 'presence-014',
    outcome: `Act on the answer people actually give you, and stop recruiting their facial expressions as a second opinion.`,
    scene: `A ceramicist declines an invitation to display work at a local fair while smiling.`,
    sections: [
      {
        title: `The smile does not reverse the sentence`,
        paragraphs: [
          `You invite Noor to take a ceramics stall at the local fair. Noor smiles warmly and says: no, I cannot take a stall this month. And now a small voice in you starts negotiating: that smile, though. Maybe they want to be persuaded? Maybe the no is soft?`,
          `Hold the two pieces of evidence side by side. The sentence is explicit: no, this month, stall. The smile is genuinely ambiguous: friendliness, habit, mild awkwardness, enjoying your company, anything. One clear signal, one unclear signal. The negotiating voice wants the unclear one to outvote the clear one, which is backwards, and following it has a cost: it makes Noor repeat the refusal with a sterner face before it counts. Nobody should need to perform solemnity to be believed.`,
        ],
      },
      {
        title: `An observation is not a transcript`,
        paragraphs: [
          `Keep two words apart. An observation describes what you noticed: Noor smiled. An interpretation assigns it a meaning: Noor secretly wants to agree. The first is data; the second is authorship, and you are the author, not Noor.`,
          `Research reviewing facial expressions backs the caution: particular facial movements are not dependable readouts of inner emotion, because people and contexts vary too much. And notice the deeper gap: even if you somehow knew Noor felt cheerful, cheerfulness does not tell you what they authorize. There is no formula where face, voice, and words each cast votes and consent emerges from the tally. The words already answered the question that was asked.`,
        ],
      },
      {
        title: `Respond to the answer you received`,
        paragraphs: [
          `So you answer the sentence: understood, I will leave you off the stall list. Then you carry on being friendly about other things, the glazing workshop you both attended, because warmth was never the issue. The refusal is handled; the friendship continues; the smile keeps its privacy.`,
          `Now contrast the nearby case that genuinely needs a follow-up. If Noor had said: maybe, I need to see the setup times, there is a real open question, and asking which times they need addresses it. Learn the difference in shape: a refusal is an answer, while a maybe with a named condition is a request for information. Clarify the second kind. Accept the first.`,
        ],
      },
      {
        title: `Warmth and boundaries travel together`,
        paragraphs: [
          `The trap in this lesson has a familiar engine: wanting a yes, and mining the other person's face for one. A meaning check is legitimate when something practical is genuinely unclear. The same check repeated after a clear answer, are you sure, you seemed happy about it, is pressure with a magnifying glass.`,
          `Keep one more pairing straight: a warm manner and a firm boundary are not in tension, in Noor or in you. People smile while declining because they like you and do not want the stall. Both halves are true at once. Treat the smile as atmosphere and the sentence as the decision, and you will be the person others can give honest answers to, which is worth more than any single stall.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Act on the refusal`,
        alt: `Noor declines a stall, and the organizer removes the stall expectation without challenging the smile.`,
        caption: `Notice what is absent: no are-you-sure, no second offer. The smile belongs to the scene, not to the dialogue.`,
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
        `Write the observable facts of the scene, exactly two: Noor smiled, and Noor declined a stall this month. Resist writing a third fact; there is none.`,
        `List two different possible meanings of the smile and label both: uncertain. The point of the list is feeling how cheaply interpretations multiply.`,
        `Draft your response to the sentence alone: accept the refusal and remove the practical expectation, then add one friendly line about something else entirely.`,
        `Now write the contrast case: maybe, I need the setup times. Draft the clarifying question for this one, and notice why it earns one: it contains an actual open question.`,
      ],
      notice: `Your two drafts treat a clear answer and a genuine maybe completely differently, and neither of them ever put the smile on the witness stand.`,
      troubleshooting: `If your response to the no contains are you sure or a shrunken counteroffer, you are still negotiating with the face. Delete it and respond to the sentence.`,
    },
    recall: {
      prompt: `A friend laughs while saying: do not post that photo of me. What do you do with the photo, and what do you do with the laugh?`,
      hint: `One of the two signals answered the question. The other never addressed it.`,
      answer: `The photo stays unposted, full stop. The sentence was explicit, and it is the only signal that speaks to permission. The laugh can remain exactly what it is: unresolved, maybe embarrassment, maybe the photo being genuinely funny, maybe your friendship's usual register. You need zero certainty about the laugh to act correctly, because consent comes from what people authorize, not from your preferred reading of their face.`,
    },
    quiz: {
      question: `Someone declines a game invitation while sounding cheerful. Which response fits the evidence you actually have?`,
      options: [`Check again, since the cheerfulness makes the answer ambiguous.`, `Offer a smaller commitment before accepting the refusal.`, `Accept the refusal and keep the conversation friendly.`],
      correctIndex: 2,
      explanation: `The refusal was explicit and the cheer was unaddressed atmosphere, so only one signal answered the question. Re-asking makes gravity the price of being believed, and the shrunken counteroffer is persuasion in a smaller coat; both treat the mood as outvoting the words, which nothing in the evidence supports.`,
    },
    takeaway: `Faces are weather; sentences are answers. Accept the clear no, clarify only the genuine maybe, and let people be warm while they refuse you.`,
    sourceNote: `The facial-inference review and consent philosophy support these distinctions. This original dialogue teaches no lie detector, personality profile, or universal emotion code.`,
  },
  {
    id: 'presence-015',
    outcome: `Ask a repair question exactly as big as the gap in what you heard, and no bigger.`,
    scene: `A print-shop customer misses the paper size while arranging a poster proof.`,
    sections: [
      {
        title: `Most of the instruction arrived`,
        paragraphs: [
          `At the print shop, the worker tells you your poster proof will be ready on Friday, on, and here a trimming machine shrieks, some paper size you do not catch. Take stock of what you actually hold: the day, Friday, arrived intact. The fact that this is a proof, not the final run, arrived too. One word drowned.`,
          `The reflexive fix is: could you repeat everything? It works, but notice its cost: the worker rebuilds a whole sentence, and you re-listen to information you already own, all to recover one word. There is a cheaper, kinder tool: I heard Friday; which paper size will the proof use? Now the worker knows precisely what broke and fixes only that.`,
        ],
      },
      {
        title: `Three sizes of repair`,
        paragraphs: [
          `Fixing a breakdown in hearing or understanding is called conversation repair, and it comes in three sizes. The broad request, could you repeat that?, says something failed without saying what. The targeted request names the hole: which size? The candidate check offers your best guess for confirmation: did you say A3? Researchers found all three shapes doing daily work across twelve sampled languages; this is universal human toolkit, not etiquette.`,
          `The sizing rule is honesty. Your repair should be exactly as specific as your actual understanding. Caught everything but one word? Target the word. Machinery flattened the entire sentence? Then the broad request is not lazy, it is the truthful one, and pretending otherwise plants errors downstream.`,
        ],
      },
      {
        title: `A guess stays a question until answered`,
        paragraphs: [
          `Suppose you half-heard something like A3. The candidate check puts it up for review without smuggling it in as fact: did you say A3? The worker corrects it: A4 for the proof; the final poster is A3. Close the loop by replaying the whole distinction: Friday, A4 proof, then the A3 final.`,
          `See what the question mark accomplished. Your guess got tested while clearly labeled as a guess, so the correction arrived without friction. Stating A3 for Friday, then as settled fact would have forced the worker to contradict you, or worse, let the error through to a mislabeled order.`,
        ],
      },
      {
        title: `Hearing gaps and meaning gaps`,
        paragraphs: [
          `One more diagnostic before the tool is complete: not every gap is acoustic. If you heard the words perfectly but A-series paper sizes mean nothing to you, repetition cannot help; the same opaque syllables would arrive twice. That gap wants a meaning repair: what is the difference between A3 and A4 here? A concept-sized hole deserves a concept-sized answer, and asking for one is competence, not weakness.`,
          `And drop any instinct that shorter repairs score higher. Repair succeeds when the needed meaning becomes shared, full stop. A targeted word for a missed word, a patient explanation for an unfamiliar idea, a full repeat for a drowned sentence: each is the right size for its gap, and the skill is matching, not minimizing.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `A candidate receives a correction`,
        alt: `The customer checks A3, receives A4 for the proof, and confirms the distinction from the final poster.`,
        caption: `Watch the guess stay a question until the worker answers it, and the final line replay the whole distinction. Paper labels are fictional order details.`,
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
        `Write the instruction: bring the blue folder to Room 6 on Wednesday. Cover the room number with a scrap of paper; that scrap is your trimming machine.`,
        `Write the targeted repair for exactly that gap, keeping what you know: the blue folder on Wednesday, but which room? Feel how much of the sentence your question preserves.`,
        `Now imagine the whole sentence was drowned out. Write the honest broad request for that case, and notice it is the right tool here, not a failure of effort.`,
        `Half-uncover the scrap so you can plausibly guess, write the candidate check with its question mark, Room 6, was it?, then uncover fully and write the closing confirmation of the complete instruction.`,
      ],
      notice: `You produced three different repairs for three different gaps from one sentence. The question mark on the guess and the final replay are what kept errors from riding through.`,
      troubleshooting: `If a word was perfectly audible but means nothing to you, stop requesting repetition; the syllables are not the problem. Ask what the term means in this task; that is the matching repair.`,
    },
    recall: {
      prompt: `A baker explains the pickup plan. You caught the location fine, but you are not sure whether after noon includes twelve exactly. What do you ask?`,
      hint: `Is this a hearing gap or a meaning gap?`,
      answer: `A meaning-sized question, keeping what you hold: I have the location; what is the earliest time I could collect it? You heard every word, so a repeat would replay the same ambiguity at the same volume. The gap is in the phrase's practical interpretation, and only a question about the intended time dissolves it. Matching the repair to the gap also keeps the baker from re-explaining a location you never lost.`,
    },
    quiz: {
      question: `You heard every word of an instruction clearly, but one technical term is unfamiliar. Which repair fits the gap?`,
      options: [`Ask the speaker to repeat the sentence louder.`, `Ask what the unfamiliar term means for this task.`, `Confirm your best guess silently, without flagging the uncertainty.`],
      correctIndex: 1,
      explanation: `The hole is in meaning, so only an explanation fills it; louder repetition delivers the same unknown word with more volume. And an unflagged guess is the most dangerous move on the list: it files uncertainty as fact, exactly what the candidate check's question mark exists to prevent.`,
    },
    takeaway: `Size the repair to the gap: target the missing word, request the full repeat when everything drowned, and ask for meaning when meaning is what is missing.`,
    sourceNote: `Dingemanse and colleagues studied naturally occurring repair across twelve languages. These print-shop and practice exchanges are original, not transcripts or speed targets.`,
  },
  {
    id: 'presence-016',
    outcome: `Repair how a request landed without abandoning the request, and move the talk back to the practical problem.`,
    scene: `A kitchen helper's hurried request about a tray sounds like criticism of the cook.`,
    sections: [
      {
        title: `A reasonable request lands badly`,
        paragraphs: [
          `You are laying out cold food for a shared lunch, hands full, and you say: move that tray. The cook stiffens and answers: I have already made space. Somewhere between your mouth and their ears, a logistics request became a review of their kitchen management.`,
          `Count the problems, because there are now two. The serving plates still have nowhere to go, that problem has not moved, and the cook heard a criticism, which is new. The tempting move, repeating move that tray with more volume, preserves both problems in amber. Each needs its own fix, and the order matters.`,
        ],
      },
      {
        title: `Three things that are not each other`,
        paragraphs: [
          `Untangle the moment with three labels. Reception: how it landed, as criticism. Intention: what you were doing, clearing a spot for plates. The request itself: the change you want considered, one tray relocated. All three are real, and none of them is any of the others.`,
          `This untangling is what makes repair cheap. You can acknowledge the landing, that came out abruptly, without confessing a motive you never had, because acknowledging reception is not a guilty plea. And from the other side: announcing I meant well, however true, fixes nothing by itself. It neither un-stings the landing nor tells anyone which tray goes where. Intention is the one of the three that least needs airtime.`,
        ],
      },
      {
        title: `Restate the need precisely`,
        paragraphs: [
          `The working repair does all three jobs in two sentences: that came out abruptly. I meant the empty tray beside the plates; could we move it to the side shelf so people can serve themselves? Landing acknowledged, request specified, object, destination, and reason now visible, and the question mark leaves room for a reply.`,
          `The cook answers the practical layer: the side shelf is full, what about the spare counter? And just like that, you are two people solving an arrangement problem instead of two people litigating tone. Your acknowledgment did not erase the need for serving space, and their counterproposal is not oversensitivity: it is exactly the collaboration the repair was for.`,
        ],
      },
      {
        title: `What repair does not require`,
        paragraphs: [
          `Keep the tool free of three common adulterants. First, the fake apology: sorry you misunderstood acknowledges nothing of yours and awards blame on the way out; acknowledge your wording instead. Second, the cheerfulness tax: hurried speech happens, fatigue and habit shape voices, and neither party owes the other a sunny performance, only clarity about the tray. Third, the winner's version of repair, where you re-explain your good intention until the first proposal is accepted: repair opens a negotiation, it does not pre-decide it.`,
          `And one honest boundary around the whole lesson: this is machinery for ordinary domestic misfires between people of good will. A conversation that feels threatening is not a repair exercise, and nothing here obliges you to stay in one.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Keep the serving-space need`,
        alt: `An abrupt tray request is acknowledged, specified, and discussed with a practical alternative.`,
        caption: `Watch the second line: the cook responds to the need with an obstacle and an alternative, which is the repair succeeding. Nobody debates feelings.`,
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
        `Write the abrupt original: move that stack. Then write how it lands on a tired recipient: as a verdict on their tidiness. You now have the two problems on paper.`,
        `Draft the acknowledgment sentence, keeping it about your wording, that came out short, and free of instructions about what they must feel. One sentence is the right length.`,
        `Rebuild the request with its three missing parts: which stack, where to, and what for. Could we move the magazine stack to the bench so the table is free for dinner? End it with genuine room for a no or a counterproposal.`,
        `Write their obstacle, the bench is wet, and your next line. If your next line solves the dinner-space need some other way, the repair worked; if it re-argues for the bench, start step four again.`,
      ],
      notice: `Your finished script spends one sentence on the landing and all the rest on trays, stacks, and shelves. That ratio, mostly objects, barely any verdicts, is what a working repair looks like.`,
      troubleshooting: `If sorry you misunderstood crept in, flip its direction: name your wording, not their reading. And if your intention gets a third sentence of explanation, cut it; the specified request is your intention, shown rather than argued.`,
    },
    recall: {
      prompt: `Your request to lower the music came out sharp, and your friend heard an insult to their playlist. You still genuinely cannot follow the conversation over it. What does the repair sound like?`,
      hint: `Keep their taste and your need in separate sentences.`,
      answer: `Acknowledge the wording, then restate the need with its reason and an opening: that came out harsher than I meant. I am losing the conversation over the volume; could we turn it down a notch, or move to the kitchen? The playlist's quality never enters it, because the music was never the problem, the competing volume was. And their counterproposal, maybe moving rooms, answers your actual need just as well as the volume knob would.`,
    },
    quiz: {
      question: `The cook accepts your repair but says your proposed spot will not work. What comes next?`,
      options: [`Withdraw the need, since the first solution failed.`, `Discuss another way to meet the same concrete need.`, `Re-explain your good intention until the original spot is accepted.`],
      correctIndex: 1,
      explanation: `The need and your first idea for meeting it are different things, and only the idea was declined. Negotiating an alternative is the repair bearing fruit, while withdrawing the need abandons the plates and re-arguing the original spot converts your apology into a sales tactic.`,
    },
    takeaway: `One sentence for how it landed, then straight back to the object, the place, and the reason. The need survives the apology, and the first proposal is not the need.`,
    sourceNote: `Conversation-repair and prosody research provide background. This original rehearsal concerns ordinary misunderstandings, not an obligation to remain in a threatening interaction.`,
  },
  {
    id: 'presence-017',
    outcome: `Treat a message being composed as a turn in progress, and follow the person's own completion signal.`,
    scene: `A games-library member composes a borrowing question on a communication device.`,
    sections: [
      {
        title: `An answer is being made in the quiet`,
        paragraphs: [
          `At a games library, Nia asks Omar which game he would like to borrow. Omar starts composing his reply on his communication device. Into what she hears as silence, Nia adds: do you like strategy games? Then, a moment later: there is a good card game here. Three questions now stand between Omar and finishing his answer to the first one.`,
          `Nothing was empty about that pause. It was occupied, by the exact work Nia asked for. Each added question is like slipping a new note under the door of someone mid-letter: it does not speed the letter up, it hands the writer a growing pile. The turn had already started; it just had not become visible yet.`,
        ],
      },
      {
        title: `Speech is one way of talking, not the definition`,
        paragraphs: [
          `Omar's device is AAC, augmentative and alternative communication: the family of methods that supplement or replace speech, including writing, picture systems, and speech-generating devices. People mix and sequence these differently, which means one thing for conversation partners: a turn can be well underway before anything is hearable or visible.`,
          `Two assumptions deserve explicit retirement. A composition pause is not confusion; it is construction. And composition speed says nothing about understanding or intellect; the method's pace and the mind's pace are unrelated measures. The practical move is simply to ask, once: how will I know your message is ready, and do you want any help from me? Then believe the answers.`,
        ],
      },
      {
        title: `Wait for the chosen signal`,
        paragraphs: [
          `Rewind the library scene and run it right. Omar indicates he will play the full message when it is ready; that is his completion signal. Nia leaves her one question standing and waits. The message arrives: can I borrow the cooperative game for a whole week?`,
          `Worth the wait, notice: that is not a game title, which is all Nia's guessing could have produced. It is a different and better contribution, a borrowing question she can actually answer. She answers it, a week is available, and leaves space for whatever Omar builds next. The conversation is slower than Nia's usual tempo and fully functional, which is the only tempo test that matters.`,
        ],
      },
      {
        title: `Authorship is the line`,
        paragraphs: [
          `The boundaries here all protect one thing: the message stays the author's. Do not finish sentences, even ones you are sure you can predict; a familiar opening is not permission to write the ending. Do not touch or operate the device unless asked; it is the person's voice, not shared equipment. If you lose the thread while waiting, clarify after the turn completes rather than interrupting construction with repairs.`,
          `And if help is ever part of the arrangement, it is because the person requested that specific help, not because waiting felt long to you. Patience that expires is not access. The quiet is not a gap in the conversation; for those moments, it is the conversation.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `One question stays open`,
        alt: `Nia agrees to wait, Omar completes his borrowing question, and Nia answers that question.`,
        caption: `Notice what the completed message contains: a borrowing question no guess could have supplied. The interval has no prescribed length; the user's signal governs the handoff.`,
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
        `Write the question, which game would you like?, at the top of a private note, and below it begin composing a full answer that ends in a borrowing question, not just a title.`,
        `While composing, write in a margin every follow-up question you feel tempted to imagine arriving, do you like strategy games?, and watch how each one would have derailed the sentence in progress.`,
        `Declare the message complete only when you decide it is, then answer its actual question. Compare that answer with what guessing a game title would have produced.`,
        `Draft the one real-world question that sets this up with an actual person: how do you signal that your message is ready, and is there any help you want? Note that your own typing speed is no model for anyone else's method.`,
      ],
      notice: `The completed message contained a request that no amount of early guessing would have reached. Every margin question was pressure on the author, not help.`,
      troubleshooting: `If you caught yourself predicting the ending, go back to the single original question and let the interval stay unfilled. The urge to fill it is the habit this exercise retires.`,
    },
    recall: {
      prompt: `A club member writes their responses by hand and pauses halfway through a sentence. What keeps their contribution theirs?`,
      hint: `A pause inside composition is not a handoff.`,
      answer: `Follow their agreed completion signal, and if none has been agreed yet, ask once how they indicate being finished. Do not complete the sentence, rotate the page toward yourself, or stack new questions on top because handwriting takes time. A mid-sentence pause is construction, exactly like Omar's device pause, and help enters only by their request. The moment you write their ending, the contribution stops being theirs, however accurate the guess.`,
    },
    quiz: {
      question: `You are confident you know how a device user's sentence ends, and they have not finished composing. What fits?`,
      options: [`Wait for their completion signal unless they ask for help.`, `Say the likely ending aloud so they can simply confirm it.`, `Ask a quicker yes-or-no question to spare them the typing.`],
      correctIndex: 0,
      explanation: `Waiting is what keeps the message authored by its owner. Speaking the predicted ending converts their turn into your dictation with a veto, and swapping in an easier question discards the contribution they were actually building, which, as the library scene showed, is often something your guess would never contain.`,
    },
    takeaway: `Composition is participation. Learn the person's ready signal, hold your questions, and let the quiet finish its work.`,
    sourceNote: `AAC and ADA guidance support communication access. This original rehearsal does not simulate disability, assess competence, or substitute for required communication support.`,
  },
  {
    id: 'presence-018',
    outcome: `Keep your questions, answers, and permission checks aimed at the person, while their interpreter carries the words.`,
    scene: `An art-course registrar welcomes a student who uses a sign-language interpreter.`,
    sections: [
      {
        title: `The student disappears from the question`,
        paragraphs: [
          `At an art-course registration desk, a staff member turns to the interpreter and asks: which class does she want? Hana, the she in question, is standing right there, fully ready to choose her own class. In one small grammatical move, third person instead of second, the actual customer has been talked around.`,
          `The fix costs nothing: which class would you like?, said to Hana, through the interpreting arrangement she uses. Direct address is about where the question is aimed, not about eyes; Hana may be watching the interpreter throughout, and the question is still entirely hers.`,
        ],
      },
      {
        title: `Two roles, one decision-maker`,
        paragraphs: [
          `Keep the roles crisp. An interpreter converts meaning between languages or communication forms, in both directions; think of a bridge, not a spokesperson. A companion, if present, may help with other things. Neither role owns Hana's preferences, holds her decisions, or should receive her private details by default.`,
          `Interpretation also has rhythm. Your question travels out, the response travels back, and both legs take time, so finish one exchange before launching the next question into the pipeline. And the geometry is practical, not symbolic: Hana may need clear sight of the interpreter and you at once, so ask what positioning works rather than imposing a layout or a head angle.`,
        ],
      },
      {
        title: `Ask, wait, and confirm with Hana`,
        paragraphs: [
          `Watch the whole exchange run properly. The registrar asks Hana which course she wants, then waits through the interpretation. Hana chooses printmaking and asks whether materials are included. The registrar answers her, to her, rather than consulting the interpreter about which package seems best, because the interpreter has no opinion to give in this conversation; that is the bridge staying a bridge.`,
          `Then the permission moment: payment details come up, and Hana's companion is standing nearby. Before involving them, the registrar checks with Hana: would you like your companion included in this part? Support that is welcome for carrying bags may be unwelcome for bank details. The person decides the perimeter.`,
        ],
      },
      {
        title: `Arrangements flex; authorship does not`,
        paragraphs: [
          `Hold two things with different grips. Hold the layout loosely: the triangle in the diagram is a starting sketch, and Hana and the interpreter may rearrange it for sightlines or comfort. Hold authorship firmly: the questions, preferences, and permissions belong to Hana in every arrangement, whoever is conveying the words.`,
          `Two closing cautions. A student watching the interpreter instead of your face is not disengaged; that is literally how your words are reaching her, so keep talking to her. And a relative who happens to sign is not automatically a qualified interpreter; where formal interpreting is required, friendliness and improvisation do not substitute for it. Warm service plus clear roles: that is the whole recipe.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: `Address and visual access`,
        alt: `Top-view triangle places Hana opposite the registrar, with the interpreter visible beside the registrar.`,
        caption: `Follow the two arrows separately: the question aims at Hana while her visual access runs to the interpreter. Positions are a starting sketch to be agreed, not imposed.`,
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
        caption: `Both turns belong to Hana and the registrar; the interpretation carries them without choosing anything.`,
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
        `Label three markers: participant, staff, interpreter. Lay out a starting triangle, and write beside it the question that makes it adjustable: what positioning works for you two?`,
        `Take the sentence, what does he prefer?, and rewrite it as direct address: what would you prefer? Feel the grammatical shift carry the respect shift.`,
        `Script one full exchange with its rhythm marked: your question, a wait labeled interpretation out, the response, a wait labeled interpretation back, and only then your next question.`,
        `Add the permission check before a companion enters anything personal: would you like them included for this part? Note on the page that the layout needs agreement and the permission belongs to the participant.`,
      ],
      notice: `In your finished script, every question and every permission aims at the participant, and the pipeline never carries two questions at once. The interpreter's lines are everyone else's lines, carried.`,
      troubleshooting: `If third-person phrasing keeps sneaking back, does she want, could he sign here, convert each one mechanically: delete the pronoun-about and speak the you-question. The habit rebuilds one sentence at a time.`,
    },
    recall: {
      prompt: `A museum visitor arrives with a support companion, and the companion answers your first question before the visitor responds. How do you establish the arrangement without dismissing the support?`,
      hint: `The visitor decides the companion's role, not you and not the companion.`,
      answer: `Aim the next question explicitly at the visitor, and make it the arrangement question itself: how would you like us to handle questions, and how should your companion be involved? That respects whatever support the visitor actually wants, which might be extensive, while putting the decision where it belongs. What you avoid is ratifying the interception by default: answering the companion, handing them the visitor's choices, or sharing the visitor's personal details with them unasked.`,
    },
    quiz: {
      question: `Throughout registration, the student watches the interpreter rather than your face. What should guide your behavior?`,
      options: [`Ask her to look at you so you can confirm she is engaged.`, `Redirect all your questions to the interpreter, since she is watching them.`, `Keep addressing the student within the agreed arrangement.`],
      correctIndex: 2,
      explanation: `Watching the interpreter is how your words reach her; it is attention to you, routed correctly. Demanding eye contact would ask her to look away from the conversation itself, and switching your questions to the interpreter converts the bridge into a gatekeeper, removing the student from an exchange that is entirely about her choices.`,
    },
    takeaway: `Speak to the person, wait for the bridge both ways, and let them set the layout and the limits. Support carries a contribution; it never replaces the contributor.`,
    sourceNote: `United Spinal and U.S. ADA guidance inform this original example. A schematic and courtesy alone do not establish compliance with applicable interpreting requirements.`,
  },
  {
    id: 'presence-019',
    outcome: `Solve a real sound conflict by negotiating the sound, without putting anyone's attention or movement on trial.`,
    scene: `A podcast discussion group negotiates pen tapping on a resonant tabletop.`,
    sections: [
      {
        title: `One sound competes with another`,
        paragraphs: [
          `During a podcast discussion, Tessa taps a pen against the tabletop while listening. Across the table, Ren is losing the thread: the episode's quietest speaker keeps disappearing under the clicks. Ren has a genuine problem, and there are two very different sentences available for raising it.`,
          `Stop fidgeting and pay attention bundles a sound complaint with a verdict about Tessa's mind, and the verdict is not even accurate; people tap while listening intently all the time. The pen clicks are covering words for me names the actual conflict: two sounds competing for the same ears. The first sentence starts an argument about character. The second starts a negotiation about acoustics.`,
        ],
      },
      {
        title: `Movement can have a job to do`,
        paragraphs: [
          `Some repetitive movement is stimming: motion or sound a person uses for sensory or emotional regulation. In qualitative research, autistic adults described stimming as managing intense thought and feeling, and described the cost of being pressured to suppress it. For some people, the movement is part of how listening works, not a leak in it.`,
          `Hold the limits of that knowledge, in both directions. You cannot see a movement's function from outside, so Tessa's tapping is not yours to diagnose, and nobody owes the group an explanation of what their movement does for them before an accommodation can be discussed. The shared question was never who sits stillest. It is whether everyone can participate, Ren's ears and Tessa's hands included.`,
        ],
      },
      {
        title: `Change the conflicting feature`,
        paragraphs: [
          `So Ren negotiates the acoustics: the pen clicks are covering words for me; could we find an option that keeps the sound lower? Tessa picks one herself, moving her fingers on a folded cloth instead of the resonant tabletop. Then comes the step most groups skip: they check both sides. Can Ren hear the quiet speaker now? Does the cloth actually work for Tessa?`,
          `Both checks matter, because a quiet option is not automatically a suitable one; it was chosen, not imposed, and the chooser gets to report back. If the cloth fails Tessa, the negotiation simply reopens: a different surface, a seat farther from the microphone zone, a transcript on her phone. Options are plural; the agreement is whichever one clears both needs.`,
        ],
      },
      {
        title: `What the agreement is not`,
        paragraphs: [
          `Keep the result exactly its own size. The group agreed about one audible conflict in one room: tapping on that tabletop covered speech for one listener. They did not pass a stillness rule, a fidgeting ban, or a requirement that neurodivergent ways of participating stay hidden. Next session, new room, new acoustics: the specific agreement may not even be needed.`,
          `And when there is no conflict, there is nothing to negotiate. A movement that bothers nobody's access needs no meeting about it. Discomfort with how someone's participation looks is not an access issue, and dressing it up as one borrows the language of access to do the opposite of its job.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Same discussion, different sound`,
        alt: `Pen taps on a hard table compete with speech; a chosen cloth-surface movement is quieter in the example.`,
        caption: `Compare the two rows by the sound they make, which is the only thing that changed. The cloth option is fictional and was chosen by the person moving, then checked by both.`,
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
        `Write the rule, no fidgeting during discussion, and underline the assumption buried in it: that stillness equals attention. One underline is enough to see it is a guess about minds, not a fact about sound.`,
        `Replace the rule with the actual requirement: everyone needs to hear the speech, so competing sounds need managing. Notice the replacement mentions no one's hands and no one's character.`,
        `Draft the negotiating sentence for a real conflict: the clicks are covering words for me; could we find a quieter option? If you have the pen and cloth handy, tap each and hear the difference yourself.`,
        `Write the double check that closes the loop: can the listener hear now, and does the alternative work for the person moving? Both answers get equal weight, in writing.`,
      ],
      notice: `Your revised request names a sound, proposes nothing about stillness, and demands no explanation of anyone's movement. The double check treats both people's needs as real.`,
      troubleshooting: `If the chosen alternative fails the mover, reopen the options rather than quietly converting the suggestion into a rule. A fix that works for only one side is half a fix wearing a whole fix's name.`,
    },
    recall: {
      prompt: `A classmate rocks quietly while following an online tutorial, and nobody has reported any access conflict. What would justify asking them to stop?`,
      hint: `Find the actual obstruction, or notice there is none.`,
      answer: `Only a concrete access or safety conflict would justify opening that conversation, their movement blocking someone's sightline to shared material, say, and then the negotiation would be about the sightline, not the rocking. Here there is nothing: quiet movement, no competing sound, no blocked view. Feeling unaccustomed to how someone participates is not a conflict, and the movement may well be part of how they are following the tutorial at all.`,
    },
    quiz: {
      question: `The quieter alternative solves the hearing problem but turns out not to work for the person who was tapping. What next?`,
      options: [`Keep it, since the hearing problem is solved.`, `Return to the original tapping and drop the hearing issue.`, `Look for another arrangement that meets both people's needs.`],
      correctIndex: 2,
      explanation: `The agreement was always two-sided: Ren's hearing and Tessa's usable way of participating are both requirements, so an option failing either one sends the group back to the drawing board, not into a winner-takes-all. Keeping the broken fix quietly converts a chosen option into an imposed rule, and reverting abandons a real access need in the other direction.`,
    },
    takeaway: `Name the sound, not the character. Let the mover choose the alternative, check both sides, and keep the agreement the size of the actual conflict.`,
    sourceNote: `Autistic adults' stimming accounts are qualitative and varied. ADA guidance informs access. The cloth comparison is an original option, not a prescribed regulation technique.`,
  },
  {
    id: 'presence-020',
    outcome: `Judge a conversation by whether each person can state their next step, not by whether their styles match.`,
    scene: `Two friends coordinate returning borrowed costumes to a community theatre.`,
    sections: [
      {
        title: `Agreement looks convincing but stays incomplete`,
        paragraphs: [
          `Jules and Amira are arranging to return borrowed costumes to the community theatre. Jules talks fast and gestures with both hands; Amira types a list on her phone and mostly watches the list. Partway through, Jules gets a nagging feeling: are we even connecting? She is reading the mismatch of styles as a mismatch of understanding.`,
          `But run the practical test instead: who is bringing the costumes, and who has the storeroom key? If those answers exist, the conversation is working, whatever it looks like. A chat can be warm, animated, eye-contact-rich, and leave the key question entirely unsettled; it can look odd from outside and deliver both people exactly what they need. Smoothness and completeness are different properties.`,
        ],
      },
      {
        title: `Understanding is a shared product, not a shared style`,
        paragraphs: [
          `Mutual understanding means the people involved hold enough shared meaning for the task, plus working ways to question and correct it. Nothing in that definition mentions matching gaze, speed, or format, and research backs the omission. In a story-transmission study, Crompton and colleagues compared chains of autistic people, chains of non-autistic people, and mixed chains. The mixed chains lost story detail fastest; between the two same-neurotype kinds of chain, the study detected no difference.`,
          `Read that result at its honest size. It undermines the old assumption that communication difficulty lives inside one kind of person, suggesting instead that it can live between styles. It does not predict any particular pairing, does not prove styles must match, and licenses no sorting of people by diagnosis. What it leaves you with is practical: when understanding wobbles, suspect the fit, and check the plan rather than anyone's face.`,
        ],
      },
      {
        title: `Check next steps, and catch the hidden condition`,
        paragraphs: [
          `Watch the check find real treasure. Jules states her step: I will bring the costume bag on Thursday. Amira's typed list says she will collect the key, but her line carries a condition Jules never knew about: only if the caretaker confirms he is in. That conditional was invisible inside the general feeling of agreement, and it is the exact piece that would have stranded two people outside a locked storeroom on Thursday.`,
          `So they handle it like grown-ups with a plan: no promised return time until the caretaker replies, and a recorded owner for the follow-up, Amira will ask and update. Both can now recite their own step and the one open uncertainty. Neither adopted the other's tempo, gaze, or format to get there.`,
        ],
      },
      {
        title: `A real check permits a no`,
        paragraphs: [
          `One more property separates a genuine check from a ritual one: the answer is allowed to be inconvenient. If Amira cannot collect the key at all, the plan changes, and that is the check succeeding, not failing. A check that only accepts enthusiastic confirmation is a performance with a clipboard.`,
          `Beware the smooth imposter, yes, understood, all good. It feels like completion and contains no plan. The antidote is always the same question, asked in whatever format each person uses: tell me your next step, in your own words or your own list. Two clear steps and a named owner for each loose end: that is what understanding looks like from outside. Everything else is style, and style was never the point.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: `Find the missing condition`,
        alt: `Jules names the costume task; Amira identifies the unconfirmed key; they assign the follow-up.`,
        caption: `Follow the second line: the typed condition about the caretaker is the detail the smooth version would have buried. Speech and text share the exchange equally.`,
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
        `Pick a harmless two-person task, returning a borrowed item works, and let each person use whatever format suits them: speech, typed notes, a list. Formats are free; the plan is the deliverable.`,
        `Each person states their own next action, and here is the drill's core: include any condition attached to it. If the caretaker must confirm, the condition goes in the statement, out loud or in the list.`,
        `Compare the two accounts side by side and hunt for exactly one thing: a gap, a mismatch, or a hidden condition. Finding one is success, not failure; that is the check doing its job.`,
        `Record who resolves the loose end, and finish by asking the permission question: does either of you need to change or decline a role? An inconvenient answer here is the check working.`,
      ],
      notice: `Your finished plan shows two nameable next steps, every condition surfaced, and an owner for each uncertainty, and you produced it without scoring anyone's gaze, speed, or expressiveness.`,
      troubleshooting: `If the exchange keeps collapsing into yes, understood, ban the word yes for one round and require each person to describe their own action in their own format. The details have nowhere left to hide.`,
    },
    recall: {
      prompt: `Two friends plan a picnic: one sends detailed texts, the other replies in voice notes. How do you check the mixed-format plan actually works?`,
      hint: `Hunt for usable roles and unresolved dependencies, not matching formats.`,
      answer: `Run the same check that caught the caretaker condition: each person states their own contribution, with any attached condition, in the format they already use. Then reconcile the specifics, who brings food, who holds the location details, what depends on weather or transport, and record an owner for each open item. The formats never need to converge; a text and a voice note can carry the same plan perfectly. What must converge is the content: steps, conditions, owners.`,
    },
    quiz: {
      question: `Everyone nodded at the plan, yet two people each assumed the other was bringing the tickets. Which check would have caught it?`,
      options: [`Each person describing their own next action.`, `A longer round of eye contact before wrapping up.`, `Everyone repeating once more that they agree with the plan.`],
      correctIndex: 0,
      explanation: `The collision lived inside two silent assumptions, and only individually stated actions force assumptions into the open, where I will bring the tickets can finally meet no, I am bringing them. Nods and repeated agreement both measure the mood of the room, and the mood was genuinely fine; it was the ticket assignment that was broken.`,
    },
    takeaway: `Ask for next steps in each person's own format and welcome inconvenient answers. Matching styles is optional; a plan with owners is not.`,
    sourceNote: `The peer-transfer study concerns a specific experimental task, not every relationship. ADA guidance informs access; this original planning check is not a validated intervention.`,
  },
  {
    id: 'perspective-001',
    outcome: `Split any stuck problem into the action you can take and the decision that belongs to someone else.`,
    scene: `A projector borrower prepares an appeal against a duplicate rental charge.`,
    sections: [
      {
        title: `The refund is not the whole action`,
        paragraphs: [
          `A community projector hire shows up twice on your statement. Your receipt clearly records one rental. You want the duplicate charge reversed, obviously, and here a familiar mental trap opens. The mind treats get the refund as the thing to do, and since you cannot simply do it, the whole situation starts to feel like a wall.`,
          `Look again at that wall and it splits into two very different materials. Gathering the receipt, identifying the duplicate line, writing a clear request, sending it through the provider's process: all of that is genuinely yours to do, today. The reversal itself happens inside someone else's decision. Mash the two together, and only two moods are available: command the outcome, or conclude nothing can be done. Both are wrong, and the split shows why.`,
        ],
      },
      {
        title: `An old distinction about agency`,
        paragraphs: [
          `This split is ancient. The Stoic philosopher Epictetus distinguished what lies within our judgment and choice from outcomes that depend on the world. Borrowed for this statement problem: evaluate your appeal by its honesty and care, and evaluate the provider's response as the provider's conduct. Two report cards, two different names on them.`,
          `Handle the borrowed lens carefully, because it is often misread. It does not say the unfair charge is fine because it is external. It does not make your frustration a personal failure; feelings are not orders you give yourself. And what counts as available action honestly varies with resources, access, and circumstances. The lens asks exactly one question: where is my next possible contribution? It never asks you to approve of what the world does with it.`,
        ],
      },
      {
        title: `Pursue the result without promising it`,
        paragraphs: [
          `Watch the split organize the work. Your note reads: available action, send the receipt and identify the duplicate line. Required cooperation: the provider checks and reverses the charge. You keep a copy of everything and set a follow-up: if no reply in two weeks, ask again or escalate.`,
          `Now suppose the appeal is rejected. The split keeps even that informative instead of crushing. A rejection might reveal missing evidence, which is actionable; or a broken review process, which can itself be challenged or reported where that is feasible. What the rejection cannot do is reach back and make your careful appeal worthless, because your part was done well regardless of their part.`,
        ],
      },
      {
        title: `Both sides stay accountable`,
        paragraphs: [
          `The quiet power of the split is that it preserves accountability on both sides of the line. You remain answerable for your contribution: was the request clear, honest, on time? The institution remains answerable for its conduct: did it review fairly, respond at all? Collapsing the line in either direction loses something, either you carrying blame for decisions you never held, or the institution's conduct vanishing behind that is just how it is.`,
          `Keep one last distinction polished: accepting limited control is not endorsing the result. You can simultaneously acknowledge that the reversal is not yours to command and keep pursuing it through every channel you have. Serenity about the division of labor, persistence about the goal: the lens was always meant to hold both.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Action and required cooperation`,
        alt: `Preparing a documented appeal is contrasted with the provider's decision about the refund.`,
        caption: `Read the two columns as different owners, not different importance: your prepared appeal, their required decision. The fictional outcome still matters.`,
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
        `Write the result you want in one line, and resist decorating it with a guarantee. I want the duplicate charge reversed is complete; it does not need and I will make it happen.`,
        `Under available action, list what is genuinely yours: the evidence to gather, the request to write, the channel to use. Each item should be something you could start today.`,
        `Under required cooperation, name who must decide what. Writing the other party's name next to their part is the step that stops you from silently carrying it.`,
        `Close with your next action and one reasonable follow-up if silence follows. Use fictional details on paper rather than copying private account information into an exercise.`,
      ],
      notice: `The impossible task, make them refund it, has disappeared from your page, replaced by a doable contribution and a clearly labeled dependency. The goal is unchanged; the despair is gone.`,
      troubleshooting: `If any action item still reads like make them agree, it is a wish wearing a to-do list. Rewrite it as a request you can send, evidence you can attach, or a challenge you can file.`,
    },
    recall: {
      prompt: `You submit a photograph to a community exhibition and it is not selected. How does this lens assess your effort without pretending selection does not matter?`,
      hint: `Your submission and their decision get separate report cards.`,
      answer: `Grade your part on its own terms: did the work and the submission meet the stated criteria, was it on time, was it your honest best? Then treat the selectors' decision as theirs: seek feedback if any is offered, and decide what to revise or where else to submit. The disappointment is real, because the outcome genuinely mattered, and the lens never denies that. What it denies is the conclusion that a rejection travels backward and makes your effort worthless, or that trying again is pointless.`,
    },
    quiz: {
      question: `An appeal was prepared carefully and rejected anyway. Which assessment fits this Stoic application?`,
      options: [`The rejection alone determines whether the effort had value.`, `Since the rejection is external, there is no reason to pursue it further.`, `Review your own contribution, and consider the further challenges still available.`],
      correctIndex: 2,
      explanation: `The split grades your contribution by its care and keeps the institution answerable for its decision, so a rejection triggers review and possibly escalation, not a verdict on your worth. Letting the outcome define the effort collapses the line one way; abandoning the pursuit because outcomes are external collapses it the other, into fatalism the lens never taught.`,
    },
    takeaway: `Own your contribution completely, label the other party's decision as theirs, and keep pursuing the result you cannot command.`,
    sourceNote: `The Epictetus entry supplies philosophical background. This modern appeal example is a contestable application, not legal advice or a claim that emotions obey commands.`,
  },
  {
    id: 'perspective-002',
    outcome: `Find the real choices hiding inside a role, instead of letting the role's name explain every decision.`,
    scene: `A badminton captain allocates cleanup duties after a community tournament.`,
    sections: [
      {
        title: `A role becomes an explanation for everything`,
        paragraphs: [
          `After a community badminton tournament, the captain announces that the newest players will do all the cleanup, because that is what captains have to arrange. It sounds airtight: there is a hall agreement, the court must be cleared by closing, someone has to organize it.`,
          `But put the sentence under a light and it splits in two. The real requirement: the court gets cleared before closing. The chosen method: newcomers do it. The hall agreement contains the first and says nothing about the second. By welding them together, the captain has smuggled a decision past discussion, and, notice where the cost landed: on the people with the least standing to object. That is the usual destination of decisions dressed up as requirements.`,
        ],
      },
      {
        title: `Freedom with furniture in the room`,
        paragraphs: [
          `Existentialist writers examined how people act within situations they did not choose, and one useful phrase from that tradition is situated freedom: your choices are real, and they happen amid real conditions, time, money, authority, other people's decisions. The captain genuinely cannot wish away the closing time. That is the furniture in the room.`,
          `But between the walls of what is fixed, there is floor space, and the floor space has a name: discretion, the room a requirement leaves for judgment. Who cleans, in what division, by what rotation: all discretion. A role describes duties; it almost never supplies the complete script for performing them. The phrase that is just what captains do works precisely by hiding the floor space, and the same trick runs on employee, treasurer, and eldest sibling.`,
        ],
      },
      {
        title: `Rewrite the method as a choice`,
        paragraphs: [
          `Honesty here costs one sentence. The captain tries: I need to arrange cleanup, and I have been assigning it to the newcomers. Feel the difference: the first half states the duty, the second half owns the method as a decision, and decisions invite reasons.`,
          `Immediately, alternatives become speakable. Ask who is available; divide tasks by equipment; rotate the duty across events. Players with buses to catch can name their constraint before agreeing instead of discovering it mid-mop. None of this proves every alternative is equally fair or even feasible. It proves something smaller and more important: the old method now has to compete on reasons, like any other choice.`,
        ],
      },
      {
        title: `Neither total freedom nor no choice at all`,
        paragraphs: [
          `The lens has two failure modes, and both are worth naming. One is pretending the constraints are not real: the closing time, the hall rules, the captain's actual authority. Wishing those away is not freedom; it is a plan that collapses at closing time. The other is the original sin of the scene: pretending the discretion is not real, so that every choice arrives pre-made by the role.`,
          `The honest position holds both: revise what is within your authority, and seek help or change for what is not. And when every alternative in your situation genuinely is unavailable or unsafe, the lesson is not to invent freedom you do not have; it is to identify whose agreement, authority, or support would widen the options. Constraint names a boundary. It never signs your decisions for you.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Same duty, different allocation`,
        alt: `Assigning cleanup to newcomers is compared with an agreed division of available tasks.`,
        caption: `Both fictional columns clear the hall on time, which is the whole requirement. Everything that differs between them is discretion, and discretion needs reasons.`,
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
        `Write one sentence beginning: my role requires... about a low-stakes task you actually handle, as organizer, flatmate, club member, anything real.`,
        `Draw a line down the page and sort the sentence: genuine requirement on the left, your habitual method on the right. The sorting is the skill; most role sentences are a fused lump until this moment.`,
        `List two other feasible methods, and under each, note who bears the effort. Include at least one genuine constraint you cannot move, so the exercise stays honest.`,
        `Rewrite your original sentence as an owned choice: I need X done, and I have been doing it by Y. Then note whose agreement a change would need, which is tomorrow's conversation, drafted today.`,
      ],
      notice: `Your page now shows three separate things that used to be one blur: a duty, a constraint, and a method with alternatives. Only the method was ever yours to defend, and now you can.`,
      troubleshooting: `If every alternative you list is unsafe or unavailable, do not force optimism onto the page. Write instead who holds the authority or support that could widen the options; naming that person is the available action.`,
    },
    recall: {
      prompt: `A club treasurer insists the role requires collecting payments in person only, but the written rules require only an accurate record. What deserves examination?`,
      hint: `Which half is the requirement, and which half is a habit wearing its clothes?`,
      answer: `The gap between them. Accurate records are the duty; in-person collection is one method, and the role's name does not make it the mandatory one. The examination asks whether an accessible alternative, bank transfer with a logged reference, a payment card reader, could preserve accurate records within the treasurer's actual authority and the club's real safeguards. Maybe constraints surface, cash-only members, audit rules, and then those are the reasons on the table. What cannot stand in for reasons is the sentence: that is just what treasurers do.`,
    },
    quiz: {
      question: `A coordinator cannot move a deadline but can change how the work is divided. Where does their real discretion lie?`,
      options: [`In treating the deadline as optional.`, `In justifying and revising the division of work within the deadline.`, `In accepting that the deadline settles every allocation choice.`],
      correctIndex: 1,
      explanation: `The deadline is furniture: fixed, real, and silent on the question of who does what. The division of work is the floor space where judgment lives, so that is where reasons are owed. Ignoring the deadline mistakes wishing for freedom, and crediting it with every allocation decision is the role-sentence trick again, a choice hiding behind a constraint.`,
    },
    takeaway: `Requirements bound your choices; they do not make them. Say I chose this method out loud, and let it answer for itself.`,
    sourceNote: `Existentialism contains differing accounts of freedom and responsibility. This tournament example is an original lens on discretion, not a claim that people choose oppressive conditions.`,
  },
  {
    id: 'perspective-003',
    outcome: `Test an ambition against its ordinary Tuesday work, not just the announcement you would get to make.`,
    scene: `An aspiring sound designer considers a prestigious qualification before trying the everyday tasks.`,
    sections: [
      {
        title: `The announcement is clearer than the work`,
        paragraphs: [
          `Mara is considering a respected sound-design course. Watch what her imagination serves up: the moment of telling people. She can picture the congratulatory messages in detail, the respect in certain voices. What she cannot picture, because she has never looked, is an ordinary editing session, the actual Tuesday afternoon of the career.`,
          `This does not make the ambition fake. Recognition, financial security, belonging: all real reasons, and nobody should be embarrassed by them. The problem is narrower: one part of the imagined future is in high definition while the part she would live in daily is a blur. Decisions made on announcement footage alone have a way of arriving at jobs made entirely of Tuesdays.`,
        ],
      },
      {
        title: `What authenticity actually asks`,
        paragraphs: [
          `Philosophers discussing authenticity ask how a commitment becomes genuinely yours rather than merely performed or inherited, and they disagree plenty about the details. One workable core is endorsement: can you examine your reasons and stand behind them? Notice what that is not: it is not excavating some pure self untouched by other people, which nobody has.`,
          `Two course corrections follow immediately. A goal your family planted can be fully yours, if on inspection you endorse it; origin is not a verdict. And a goal chosen against your family can still be running mostly on audience, rebellion has spectators too. The thought experiment of removing the applause, what remains if nobody ever saw?, is a flashlight for finding neglected reasons. It is not a purity test that disqualifies every social motive.`,
        ],
      },
      {
        title: `Sample a Tuesday`,
        paragraphs: [
          `So Mara samples the blurred part. She takes a short scene and builds a sound-cue list: footsteps approach on gravel, a latch clicks, a door opens with a dry creak. Twenty minutes, no audience, no course fee. And she notices something useful: deciding what each sound contributes is absorbing, even with nobody watching.`,
          `Read the result at its honest size. One enjoyable cue list is a reason to investigate further, not a destiny certificate; professions contain many tasks, and she sampled one. The matrix in the diagram keeps the two questions separate: interest in the work, interest in the recognition. Either, both, or neither can be present, and each cell suggests a different next move.`,
        ],
      },
      {
        title: `If only the title appeals`,
        paragraphs: [
          `The most useful cell is the uncomfortable one: work no, recognition yes. Landing there is not a moral failure; it is information worth its weight in course fees. It says the real need is the recognition, the security, or the belonging, and those needs might be met several ways, some much cheaper than years of training for work that bores you.`,
          `Whatever cell she lands in, the method stays the same: examine the reasons, sample the ordinary work, and let both into the decision. The announcement lasts a day. The Tuesdays are the career, and they deserve at least twenty minutes of her attention before her money.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: `Work interest and recognition`,
        alt: `Four cells cross interest in sound-design work with interest in its public recognition.`,
        caption: `Find your cell honestly: each suggests a different next step, and none is a moral grade. Reflection categories, not authenticity scores.`,
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
        `Write the ambition stripped of its social packaging: no title, no announcement, no imagined reaction from anyone. Just the activity. Notice how much shorter the sentence gets.`,
        `Name one ordinary task the ambition contains. For sound design: list three sounds for someone entering a room at night. For other ambitions, find the equivalent small Tuesday unit.`,
        `Do the task now, privately, with what you already own. Ten minutes is plenty; nobody will ever see the result, which is exactly the experimental condition you need.`,
        `Write three findings: what pulled you in, what you were glad to finish, and which social or practical reasons still stand after the applause was removed. End with one question worth investigating before any money moves.`,
      ],
      notice: `You now hold two kinds of evidence the announcement never contained: how the actual work felt in your hands, and which of your reasons survive an empty room.`,
      troubleshooting: `If the beginner task is genuinely out of reach, do not buy training just to run the test. Sample the nearest free thing: watch the work being done, plan a piece of it on paper, or interview someone's Tuesday.`,
    },
    recall: {
      prompt: `You want to become a volunteer mentor, partly because a respected relative suggested it. How do you inspect the goal without rejecting its social origin?`,
      hint: `Origin is not a verdict; the ordinary work is the evidence.`,
      answer: `Treat the relative's suggestion as a lead, not a contaminant: plenty of endorsable commitments arrive through people we respect. Then sample the Tuesdays of mentoring, the preparation, the patient repetition, the supervised introductory session if the program offers one, and afterward run the endorsement check: with nobody watching and the relative never told, do the reasons still stand? If yes, the goal is yours now, whoever handed it to you. If what remains is mostly the wish to please them, that is valuable information about the real need, and worth addressing directly.`,
    },
    quiz: {
      question: `You enjoyed the private sample task, and you also care about the qualification's reputation. What follows?`,
      options: [`Both reasons deserve examination; their coexistence settles nothing by itself.`, `The recognition motive cancels the private interest.`, `Enjoying one task proves the whole career is right for you.`],
      correctIndex: 0,
      explanation: `The experiment produces reasons to inspect, not a verdict, and work-yes-recognition-yes is a perfectly honorable cell of the matrix. Social motives do not poison private ones, and one absorbing cue list is one task from a profession of many, so the finding funds further investigation rather than a deposit.`,
    },
    takeaway: `Sample the Tuesday before you buy the title. Reasons that survive an empty room are the ones worth building on.`,
    sourceNote: `Authenticity and existentialism entries present contested philosophical accounts. This task sample is original and cannot certify a true self or predict career satisfaction.`,
  },
  {
    id: 'perspective-004',
    outcome: `Let a small task run on a small, honest reason, without making it answer for the meaning of life.`,
    scene: `A family member sorts loose recipe cards for a shared cookbook.`,
    sections: [
      {
        title: `A small task meets a very large question`,
        paragraphs: [
          `You offered to sort a shoebox of loose recipe cards into a family cookbook. Forty minutes in, the novelty has worn off and your back aches slightly. A thought arrives with surprising force: what is the point of any of this?`,
          `Watch the scale jump in that question. The task had a point, a modest one: your cousin keeps asking for the lentil recipe and cannot find it. But the question that just arrived is not about lentils. The afternoon's small chore has been summoned to justify an entire existence. Of course it cannot. Almost nothing can. The useful move is noticing that two questions of wildly different sizes just got stapled together. Then gently unstaple them.`,
        ],
      },
      {
        title: `What Camus means by the absurd`,
        paragraphs: [
          `The philosopher Camus gave this collision a name. The absurd, in his sense, is not silliness; it is the standing tension between our demand for an ultimate, satisfying answer and a world that declines to hand one over. The recipe-card moment is that tension in miniature: you asked the universe for a final why, and got a shoebox.`,
          `Camus's response was not resignation but continued engagement: keep acting, keep choosing, with the big question left honestly open. Borrowed for ordinary life, the lens grants a specific permission. You may act for a limited reason while the ultimate one stays unresolved. Hold it as a perspective, not a proof. It is one way of living with the question, and other philosophies and religious traditions answer it differently.`,
        ],
      },
      {
        title: `Choose the bounded reason honestly`,
        paragraphs: [
          `Back to the cards, with the questions unstapled. The local reason stands on its own: group the cards by dish, and your cousin finds the lentil recipe this week. That is the whole justification. Notice what you are not required to claim: not that card-sorting is your calling, not that repetition secretly builds character, not that the afternoon carries a life lesson. A small reason, honestly sized.`,
          `And because the reason is small, it stays inspectable. Would half the box meet the actual need? Then sort half; continued engagement is not obedience to every demand on your time. The local reason is sufficient only while it survives ordinary scrutiny about usefulness, fairness, and what else your afternoon was for.`,
        ],
      },
      {
        title: `What the lens refuses to excuse`,
        paragraphs: [
          `One misuse needs a fence around it. Keep going without final answers is advice about the big question; it is not a gag order on small ones. Suppose the task is pointless: nobody benefits, nothing becomes easier to find. That is a reason to stop, discoverable without resolving the meaning of life. Suppose instead it is unfairly assigned, always you, never the others. Fairness is a local question too, and it stays fully askable.`,
          `So the practice has two moves, and both matter: let modest reasons be enough, and keep those modest reasons accountable. You finish the batch because the lentil recipe will be findable. You leave the cosmic question open because it does not block the doorway. And you push back on the third shoebox, because one honest afternoon was the agreement. All three can be true at once.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Two demands placed on the cards`,
        alt: `Waiting for a final life purpose is contrasted with sorting a chosen batch so a cousin can find a recipe.`,
        caption: `Compare the size of the question each column asks the same shoebox to answer. Distinguishing their scope is the lesson; no theory of meaning is proven.`,
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
        `Pick a small sorting task you freely accept, a drawer of receipts, a folder of photos, nothing sensitive and nothing urgent. Freely is part of the exercise.`,
        `Before starting, write the local reason in one line: who benefits, and what exactly becomes easier to find. If no honest line exists, pick a different task; significance is not manufactured on demand.`,
        `Set a modest stopping point, one small group of notes, and work to it. When the what is the point thought arrives, and it may, label it by size: that is the big question, visiting the small task.`,
        `Finish, then write one closing sentence stating only the local reason fulfilled: the lentil recipe is now findable. Resist appending a life lesson; the open question stays open, on purpose.`,
      ],
      notice: `Something specific is easier to find, the reason on paper never grew beyond its honest size, and the large question survived unanswered without stopping the work. All three were the point.`,
      troubleshooting: `If no defensible beneficiary or purpose ever appeared, the lens is not the problem and neither are you: the task fails local scrutiny. Decline it or renegotiate it; manufacturing meaning for pointless work is the misuse this lesson fences off.`,
    },
    recall: {
      prompt: `You agreed to water a neighbor's plants, and halfway through the week the chore feels meaningless against your larger questions about purpose. How does this lens separate the decisions?`,
      hint: `Measure each question at its own size.`,
      answer: `The watering runs on reasons its own size: you accepted a commitment, the neighbor is relying on it, and the plants genuinely need it. Those reasons are inspectable, and here they pass, so the can gets filled regardless of cosmic weather. Your larger questions about purpose remain entirely open, and they deserve their own time, not a hostage situation where the ferns dry out until meaning is resolved. And if the arrangement were unfair, three weeks unpaid while they ignore your messages, that is a local fairness question, fully askable without any philosophy.`,
    },
    quiz: {
      question: `A repetitive volunteer task turns out to be unfairly assigned, always to the same person. What does this Camus-inspired lens actually permit?`,
      options: [`Keep doing it, since engagement makes every task worthwhile.`, `Question the assignment while leaving ultimate meaning unresolved.`, `Set fairness aside until a final life purpose is found.`],
      correctIndex: 1,
      explanation: `The lens leaves the big question open while keeping every small one live, and fairness is a small question in exactly that sense: answerable now, with ordinary scrutiny. Reading engagement as endure everything converts a philosophy of honest action into a compliance tool, and postponing fairness until metaphysics resolves would postpone it forever.`,
    },
    takeaway: `Unstaple the afternoon from the universe. Act on reasons sized to the task, keep them accountable, and let the big question stay honestly open.`,
    sourceNote: `The Camus entry supplies the philosophical account. The recipe-card application is original, contested, and not a prescription to endure pointless or unfair labor.`,
  },
  {
    id: 'perspective-005',
    outcome: `Keep caring about what matters while letting go of the demand that its current form never change.`,
    scene: `Two friends adapt their regular park-sketching routine after one changes work shifts.`,
    sections: [
      {
        title: `The friendship and the routine are not identical`,
        paragraphs: [
          `For years, Nell and Vic have sketched in the park on Sunday mornings: same bench, same flask of coffee, pencils out by nine. Then Vic's work shifts change, and Sunday mornings are gone. Nell finds herself grieving oddly hard. Underneath the sadness sits an equation her mind wrote without asking: losing the routine equals losing the friendship. Every proposed alternative sounds like a cheap substitute, because the equation makes it one.`,
          `Look at what the Sunday mornings actually delivered: shared attention, regular contact, the particular pleasure of drawing side by side. Those are the values. The bench, the day, the hour: that was the container. The grief is real and allowed. And still, the equation is wrong, because containers and contents are different things.`,
        ],
      },
      {
        title: `A lens on why forms break`,
        paragraphs: [
          `Buddhist philosophical discussion offers a word for this: impermanence, the observation that conditioned things, things depending on causes and circumstances, do not stay fixed just because we lean on them. The sketching routine was conditioned through and through: it needed compatible schedules, an available park, two people willing and able to show up. Change any condition, and the form built on it wobbles.`,
          `Borrowing the lens means one specific move. When a cherished form breaks, look at the condition that changed, instead of concluding the thing itself was never solid or never real. Vic's shifts moved; nothing about the friendship was refuted. And borrow modestly: traditions within Buddhism differ, and one exercise about a sketching routine represents none of them fully. The lens asks you to notice dependence. It never asks you to stop caring.`,
        ],
      },
      {
        title: `Adapt the form without demanding a feeling`,
        paragraphs: [
          `Nell does the brave, ordinary thing: she tells Vic what the routine gave her, the regular contact, the drawing together, and asks what is workable now. They land on a trial: exchanging one sketch by message midweek, plus a park morning whenever both are free, unscheduled but real.`,
          `Keep the honesty in the arrangement. Nobody claims a photo of a sketch equals a shared bench. The trial is not a replacement; it is a way to keep some of the value alive under new conditions. Either friend can report that it is not enough and reopen the question. And the sadness is not a bug to fix before adapting. Nell can miss Sundays and send Wednesday sketches at the same time. Feelings are not gatekeepers of practical care.`,
        ],
      },
      {
        title: `What the lens does not demand`,
        paragraphs: [
          `Three fences keep this borrowed idea useful. It does not demand detachment. Noticing that the routine depended on conditions is compatible with loving it wholeheartedly while it lasted, and grieving it honestly now. It does not grade feelings: there is no deadline by which missing the old form becomes a failure of wisdom.`,
          `And it does not erase the past. The years of Sunday mornings happened, shaped the friendship, and keep their worth entirely, even though the form ended. Impermanence is not the claim that temporary things did not matter. It is closer to the opposite: temporary is what mattering looks like for conditioned things. So tend the values, hold the containers lightly, and renegotiate the containers as often as life requires.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Keep care, reconsider the form`,
        alt: `Insisting on unavailable Sundays is compared with an agreed sketch exchange and occasional park visit.`,
        caption: `Compare what each column protects: the left guards a container that no longer exists, the right carries some of its contents forward. No equivalence is claimed.`,
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
        `Pick an ordinary routine that is currently changing, a class moving online, a lunch spot closing, a schedule shift. Deliberately avoid a raw loss you do not want to examine; this is practice, not therapy.`,
        `Write two columns: the form, day, place, time, and what it provides, contact, enjoyment, rhythm. The two-column split is the entire skill; most grief equations collapse once the columns exist.`,
        `Circle the condition that changed, then propose one feasible way to carry some of the provides column forward. Modesty matters: some of the value, not a perfect replacement.`,
        `Draft the invitation you would send, naming what the routine gave you and asking what works now. Leave explicit room for the other person to feel sad, say no, or suggest something different.`,
      ],
      notice: `Your proposal protects values rather than defending a calendar slot, and nowhere did it require anyone, including you, to feel fine about the change first.`,
      troubleshooting: `If every alternative feels like a betrayal of the old form, stop proposing and just record the loss for now. Adaptation that will not come is information: the change may need more time, more talking, or more support, and forcing a solution is not the lens, it is denial wearing its clothes.`,
    },
    recall: {
      prompt: `A community garden loses access to its usual plot after years of shared work. How does impermanence apply without calling those years wasted?`,
      hint: `Separate what the plot grew from how long the plot lasted.`,
      answer: `The plot was a container: it depended on a lease, a landowner, a neighborhood, and one of those conditions changed. What it contained, the friendships, the skills, the habit of growing things together, was real and remains real; temporary availability does not reach backward and cancel what happened. The lens turns the group toward the practical question: which of those values can continue, in a new plot, in window boxes, in a seed-swap network? Mourning the old ground and planting somewhere new are not opposites; they are usually the same season.`,
    },
    quiz: {
      question: `The new routine works practically, but you still miss the old one. What does this application say about that?`,
      options: [`The lingering sadness shows the adaptation failed.`, `You should describe the new routine as equally valuable in every way.`, `Adaptation and a remaining sense of loss can coexist.`],
      correctIndex: 2,
      explanation: `The lens changes what you do with forms, not what you must feel about them: a working Wednesday exchange and a missed Sunday bench fit in the same life without contradiction. Grading the sadness as failure smuggles in a feelings deadline the idea never set, and declaring forced equivalence just relocates the dishonesty from the calendar to the heart.`,
    },
    takeaway: `Tend the values, hold their containers lightly. Forms depend on conditions; the caring was never the container.`,
    sourceNote: `The Buddha entry provides philosophical background. This original routine exercise is not a summary of Buddhism, a grief treatment, or a promise of relief.`,
  },
  {
    id: 'perspective-006',
    outcome: `Notice when a self-label is making your choices for you, and run one small beginner trial past it.`,
    scene: `A technically skilled friend avoids a casual drawing activity to protect an expert identity.`,
    sections: [
      {
        title: `The label starts deciding for you`,
        paragraphs: [
          `Ravi is the person friends call when a computer misbehaves, and he enjoys being that person. This week those same friends invited him to a casual drawing afternoon, and he declined almost before thinking: not really my thing, I would be hopeless.`,
          `Slow the moment down. Nobody asked Ravi to be good at drawing; it is a casual afternoon. The risk he dodged was not embarrassment in front of friends. It was appearing inexperienced in front of himself. Somewhere along the way, I am the technical person stopped being a handy description of some skills and started working as a border guard, stamping visas for which experiences Ravi is permitted to attempt.`,
        ],
      },
      {
        title: `Labels have a price tag nobody reads`,
        paragraphs: [
          `An identity is a way you understand and describe yourself, built from relationships and repeated actions, and identities do real work: belonging, continuity, professional pride. Nothing here says tear them up. But every firm self-description also carries an opportunity cost, the things forgone because the label rules them out. Ravi's expert label is quietly billing him an afternoon of drawing and company, and the invoice never gets itemized.`,
          `An existential lens treats a self-description as revisable through action, a working draft rather than a finished inventory. That reframe turns the question practical. Not: is this label true? Instead: is this particular exclusion something I actually endorse, or just something the label enforces while I am not looking?`,
        ],
      },
      {
        title: `Permit one beginner action`,
        paragraphs: [
          `The test is almost embarrassingly small. Ravi sits down privately with a pencil and draws his house key. He looks at it properly first: the long edge, the hole at the top, the little teeth. First attempt, then a second. Both drawings are clumsy, and the exercise succeeds anyway, because success was never a good drawing.`,
          `What the sketch demonstrates is the thing the label denied: an expert in one area can be a beginner in another, and nothing breaks. His technical competence survived twenty minutes of wobbly lines. And if he discovers he genuinely dislikes drawing, that is a fine result too; the difference is that now the refusal would be based on experience, not enforced by a border guard.`,
        ],
      },
      {
        title: `Loosen the grip, keep the identity`,
        paragraphs: [
          `Be precise about what the trial proves, because overclaiming kills the tool. One pleasant sketch does not reveal a hidden artistic vocation, demand new hobbies, or require Ravi to dismantle the technical identity his friendships and work are built on. Those remain intact and valuable.`,
          `The trial proves exactly one thing: the exclusion was optional. The label said this is not available to you, and twenty minutes said it is. That is the generalizable habit: when you catch a self-description vetoing a harmless experience, give the experience one small, private, ungraded chance to speak for itself. Count what the label prevents before deciding how tightly to hold it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Expertise and a beginner sketch`,
        alt: `Avoiding the drawing afternoon protects an image; a private key sketch supplies experience without erasing technical skill.`,
        caption: `Compare what each column actually costs and protects. One fictional exclusion is examined; nothing here says identity or expertise is bad.`,
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
        `Write down one self-label that discourages a harmless activity, in its honest border-guard form: I am not a drawing person, I am not someone who cooks, I do not dance.`,
        `Run the beginner trial the label forbids, scaled tiny. For drawing: lay a key on the paper and really look at it first, naming the long edge, the hole, and the teeth before touching the pencil.`,
        `Draw it twice, and let both attempts be exactly as clumsy as they are. The second attempt usually improves slightly, which is interesting, but a polished result is explicitly not the assignment.`,
        `Write two separate notes: what the activity was actually like, and what you still value about the identity. Keeping them separate is the skill; the label was fusing them.`,
      ],
      notice: `You now hold a real experience where the label used to hold a prediction. Whatever you decide about drawing, the decision has evidence in it now.`,
      troubleshooting: `If mid-trial the sketch starts feeling like a test of your worth, shrink the task until it cannot be one: observe and draw a single feature, the key's hole, then stop without grading anything.`,
    },
    recall: {
      prompt: `A reliable organizer avoids joining a beginner singing group because they are usually the one leading things. What would a bounded identity-cost experiment look like for them?`,
      hint: `One session as a learner, with the old identity waiting safely outside.`,
      answer: `Attend one optional introductory session purely as a beginner: follow instructions, be averagely lost, go home. The experiment tests exactly one claim, that someone who leads can also be led for an evening without anything collapsing. Their organizing roles, reputation, and duties are untouched by it. Afterward they compare the experience against what the leader label was excluding, and decide with evidence. No promise to become a singer is part of the trial, and disliking it is as valid a finding as loving it.`,
    },
    quiz: {
      question: `The beginner trial turns out enjoyable but difficult. What does that show about the original self-label?`,
      options: [`The label need not prohibit this activity.`, `The trial proves you should change professions.`, `The difficulty confirms the old boundary should stay absolute.`],
      correctIndex: 0,
      explanation: `The trial tested the exclusion, and the exclusion failed: the activity is available to you, enjoyably so. Difficulty is simply what beginner tasks feel like, evidence of newness rather than an identity verdict, and one nice afternoon is far too small a result to overturn a career. Labels get loosened by experience, not swapped wholesale.`,
    },
    takeaway: `Self-descriptions are drafts, not border guards. Before obeying an exclusion, give the excluded thing twenty ungraded minutes to make its case.`,
    sourceNote: `Existentialism and authenticity inform this original thought-and-action exercise. It does not establish unlimited self-invention or require discarding protective identities and communities.`,
  },
  {
    id: 'perspective-007',
    outcome: `Move one endlessly postponed commitment out of someday and into a time slot that actually exists.`,
    scene: `A niece plans time to learn an aunt's bread recipe around an existing evening obligation.`,
    sections: [
      {
        title: `Later keeps moving`,
        paragraphs: [
          `For months you have wanted to learn your aunt's bread recipe, the one nobody has written down. Every week the intention renews itself: I will visit when things calm down. No date ever gets proposed, so your aunt cannot plan for it, and neither can you. The wish is sincere, and it lives in a fantasy week with no shifts, no laundry, and no competing claims.`,
          `Here is the uncomfortable accounting: a commitment that never touches the calendar is not yet a commitment. It is a pleasant account balance you never spend. The recipe, meanwhile, exists only in one person's hands and memory.`,
        ],
      },
      {
        title: `Limits are what make choosing real`,
        paragraphs: [
          `Philosophers writing in the existential tradition take finitude seriously: a life has limits, of time above all, and those limits are not a design flaw. They are what makes selection meaningful. If every option stayed available forever, choosing would cost nothing and mean nothing. Because options expire, picking one is a real act.`,
          `Read the lens carefully, because it is often misread as panic. It is not a countdown clock, not a command to optimize every hour, and not a war on rest; rest is a legitimate, chosen use of finite time. The practical question it sharpens is small and recurring: of the things I keep deferring, which one do I want to give an actual place, inside the week I really have?`,
        ],
      },
      {
        title: `Fit the commitment to the available time`,
        paragraphs: [
          `Now the arithmetic that someday never does. This evening holds 45 free minutes. The imagined visit needs 30 minutes at your aunt's table plus 20 minutes of travel each way: 70 minutes total. It does not fit, and pretending otherwise just schedules a cancellation.`,
          `But the choice is not all or nothing. A 15-minute call fits: talk through the ingredient list, which flour, how old the starter, and book the proper visit together for a day that holds it. Send the invitation with room to breathe: would Thursday work, or another day? Your aunt gets a real proposal she can accept, decline, or move, which is more respect than a year of warm intentions ever delivered.`,
        ],
      },
      {
        title: `Selection, not squeezing`,
        paragraphs: [
          `Keep two failure modes in view. One is the familiar someday, which this lesson has already spent. The other is its panicked cousin: cramming the full visit into the 45 minutes anyway, arriving breathless, leaving mid-knead, and calling that honoring the relationship. Finitude asks for honest selection, never for compression of everything into too little space.`,
          `And selection means some options genuinely go unchosen, this season or forever. That is not failure; it is what choosing costs, and the cost is why the chosen thing carries weight. The smaller call is not a trick for making relationships efficient. It is what respecting a real limit looks like when the thing behind the limit matters.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `What fits this evening?`,
        alt: `A visit needing seventy minutes is compared with a proposed fifteen-minute call within a forty-five-minute opening.`,
        caption: `Run the arithmetic in the first column: 30 + 20 + 20 is 70 minutes against a 45-minute opening. The call fits and still needs your aunt's agreement.`,
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
        `Write down one valued activity you have deferred at least three times. Choose a warm one, a recipe, a call, a walk, not something distressing; this is a scheduling skill, not therapy.`,
        `Cost it honestly: the activity itself plus preparation plus travel. Then find a genuine opening in your actual week and put the two numbers side by side.`,
        `If it does not fit, and it often will not, design the smaller version that does: the call before the visit, the first chapter before the book club. Do not fund it by deleting your rest.`,
        `Draft the invitation with a decline-or-reschedule option built in, because the other person's time is theirs. Sending it is the step that converts intention into commitment.`,
      ],
      notice: `The deferred wish now has a size, a cost, and a proposed place in a real week. Whatever the other person answers, you are negotiating an actual plan instead of maintaining a pleasant fiction.`,
      troubleshooting: `If your calendar is genuinely full, the lesson is not to overload it; that is the panic mode. Shrink the scope further or pick a later real date, and let one deferred thing stay deferred, on purpose this time.`,
    },
    recall: {
      prompt: `You want to join a seasonal drawing outing, but its full duration collides with a commitment you already made. What does this lens ask you to do?`,
      hint: `Honest selection, not panic and not squeezing.`,
      answer: `First honor the arithmetic: the full outing does not fit around the existing commitment, and pretending it does schedules a broken promise. Then look for the feasible version, joining for the second half, or catching the next outing in the series, and propose it concretely. And if no version fits this season, let it go as a chosen cost rather than a failure. Finite time means every yes is purchased with unchosen options; the lens asks only that you do the purchasing consciously.`,
    },
    quiz: {
      question: `A meaningful visit does not fit the time you actually have. Which response matches this use of finitude?`,
      options: [`Wait for a future day with no competing demands before proposing anything.`, `Compress the full visit into the opening and recover the time somewhere later.`, `Propose a feasible smaller version or another date, accepting the tradeoff.`],
      correctIndex: 2,
      explanation: `The feasible proposal is the only option that treats both the limit and the value as real. Waiting for an empty day is someday wearing patience as a disguise, since such days rarely arrive unclaimed, and compression spends the relationship's time pretending the limit does not exist, which usually bills someone else for the overrun.`,
    },
    takeaway: `A commitment becomes real when it gets a size and a date. Choose consciously, shrink honestly, and let some options go unchosen on purpose.`,
    sourceNote: `Existentialism supplies the philosophical background. Times are invented for the example; this is not a mortality exercise or an instruction to optimize every hour.`,
  },
  {
    id: 'perspective-008',
    outcome: `Admit exactly where your principle runs out, without surrendering the parts of it that still hold.`,
    scene: `A reading-club organizer reconsiders the principle that every member should pay the same fee.`,
    sections: [
      {
        title: `A reasonable principle meets a difficult case`,
        paragraphs: [
          `Your reading club needs contributions for room hire, and you proposed the obvious rule: same fee for everyone. Your reasons are real: it is simple, nobody gets singled out, nobody has to discuss money. Then a member says quietly that the fee would stop them attending.`,
          `Feel the two exits the mind offers. Exit one: defend the rule and dismiss the case, they can manage, the fee is small. Exit two: collapse entirely, who am I to propose rules at all? Both exits are cheap, and both discard something true. The rule has good reasons and a genuine gap. The skill is holding those together.`,
        ],
      },
      {
        title: `Humility with coordinates`,
        paragraphs: [
          `Intellectual humility means recognizing and responding to the limits of what you know or can justify. The common caricature, endless I could be wrong about everything, is actually the opposite of the skill, because a blanket doubt locates nothing and changes nothing. Useful humility is specific, like a map note saying: accurate until this ridge.`,
          `Here the coordinates are precise: equal payment does not mean equal burden, so a rule aimed at fairness through sameness misses the member for whom sameness is a wall. Naming that exact gap preserves your reasons, simplicity, no singling out, while showing where they stop covering. One distinction keeps the practice honest: a serious objection engages your rule's actual purpose, like this one. Mere insults or bare preferences do not oblige a rewrite.`,
        ],
      },
      {
        title: `Narrow the claim, then investigate`,
        paragraphs: [
          `The honest sentence costs one breath: equal fees are simple, and I had not accounted for members who cannot afford them. No self-flagellation, no abandoning the chair. Now the group can actually work: maybe a voluntary reduced contribution, maybe a cheaper venue.`,
          `And humility keeps operating on the alternatives too, because they have gaps of their own: does a reduced-contribution option leak privacy by revealing who uses it? Does the room still get paid for? Acknowledging your rule's limit does not require pretending the replacement is flawless. It changes the activity from defending a slogan to checking the next unresolved case, which is what deciding well actually looks like.`,
        ],
      },
      {
        title: `Keep a narrower principle`,
        paragraphs: [
          `Where does this land? Often at a smaller, tougher claim: use a transparent contribution rule that accounts for participation barriers. Narrower than the original, harder to attack, and still actionable. That revision deserves discussion and evidence like anything else; narrowing is not a magic spell, just a better-fitting claim.`,
          `Notice what never happened: you never declared all rules equally good, never suspended the decision indefinitely, never performed uncertainty as a personality. The club still meets, the room still gets hired, and the member still gets through the door. Humility that is specific ends in better decisions. Humility that is theatrical ends in no decisions, which quietly favors whoever the old rule already suited.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Reasons and unresolved questions`,
        alt: `An equal fee is simple but can exclude; a flexible contribution raises questions about cost and privacy.`,
        caption: `Read both columns as live proposals with gaps: neither is certified best, and each reason has an unanswered question attached. That is the normal condition of rules.`,
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
        `Write down one principle you actually hold about everyday life, plus its best concrete reason. Keep it low-stakes: a house rule, a club norm, a personal policy.`,
        `Construct the serious objection yourself: describe one person for whom the rule genuinely fails, engaging the rule's own purpose. Building the strongest case against yourself is the core rep.`,
        `Complete the two-part sentence, both halves mandatory: my reason still supports..., but it does not yet explain... The but-half needs coordinates, not a vague confession.`,
        `Finish with one question to investigate and one narrower version of the principle worth discussing. Label any new alternative as a proposal with its own unchecked gaps.`,
      ],
      notice: `Your page holds a defended reason and a located limit at the same time, which neither of the two cheap exits, dismissal and collapse, could have produced.`,
      troubleshooting: `If your objection was easy to swat away, it was a strawman; rebuild it from the viewpoint of someone the rule actually burdens. The exercise only trains when the objection genuinely stings.`,
    },
    recall: {
      prompt: `You believe learning alone beats being taught, but a beginner you know keeps repeating the same mistake and cannot see it. How does specific humility revise your claim?`,
      hint: `Keep what the reason supports; give the gap coordinates.`,
      answer: `Run the two-part sentence: my reason still supports independent practice, it builds self-sufficiency and most sessions need no supervisor, but it does not yet explain errors the learner cannot perceive from inside. Blind-spot mistakes are precisely where outside feedback earns its keep. The claim narrows from always learn alone to practice independently, and bring in feedback for faults you cannot self-detect. The original value survives; the word always did not, and the beginner stops repeating the mistake.`,
    },
    quiz: {
      question: `A strong objection exposes a real gap in your preferred rule. Which response shows the humility taught here?`,
      options: [`Name the gap and investigate it, while keeping the reasons that still hold.`, `Immediately grant every competing rule equal standing.`, `Withdraw from the discussion, since no rule can be perfect.`],
      correctIndex: 0,
      explanation: `Specific humility maps exactly where the justification stops and works there, which keeps both the decision and the inquiry alive. Granting all rules equal standing abandons the evidence you still have, and withdrawing because perfection is impossible is the collapse exit, which, in practice, hands the outcome to whoever liked the old rule.`,
    },
    takeaway: `Say both halves out loud: what your reasons still support, and the exact case they do not cover yet. That sentence is where better rules come from.`,
    sourceNote: `The humility entry surveys contested philosophical accounts. This original fee discussion is a reasoning exercise, not a validated measure of humility or a policy prescription.`,
  },
  {
    id: 'perspective-009',
    outcome: `Make a defensible choice between two good things without rewriting history to pretend one was worthless.`,
    scene: `A mural volunteer chooses between a painting session and a sister's recital.`,
    sections: [
      {
        title: `One afternoon, two goods`,
        paragraphs: [
          `The mural group schedules its final painting session, the satisfying one where the whole wall comes together, on the same afternoon as your sister's recital. Travel time makes attending both impossible. You check twice. It is genuinely one or the other.`,
          `Watch what your mind starts doing as the recital wins: the mural was not that important anyway, I was losing interest. Feel how convenient that story is, and how false. Yesterday you cared about the mural. The caring did not evaporate; the calendar collided. Rewriting your interests to soften a collision changes your record of what you value, which is a high price for a slightly more comfortable afternoon.`,
        ],
      },
      {
        title: `Not everything converts to one currency`,
        paragraphs: [
          `There is a philosophical name for refusing that rewrite. Value pluralism holds that some goods are genuinely distinct, not disguised versions of one underlying good. Creative work with a group and presence at a family milestone may both matter, in different ways, and comparing them is not like comparing prices, where everything converts to the same currency and one number wins.`,
          `Mind the lens's limits, though. Pluralism does not make reasoned choice impossible; you still weigh, still decide, still answer for the decision. And it is not a shield for every preference regardless of harm. What it licenses is precise: a justified choice does not need to prove the rejected option was worthless. Both goods were real. Only one afternoon existed.`,
        ],
      },
      {
        title: `Choose with reasons, name the loss`,
        paragraphs: [
          `Here the reasons point clearly: you promised your sister weeks ago, and she particularly wants you there. Promises are reasons with weight. So you go to the recital, tell the mural group promptly so they can plan the wall without you, and say the honest sentence to yourself: I had good reasons to choose this, and I lost something I value.`,
          `Both halves of that sentence are true, and neither cancels the other. Maybe you offer to photograph the finished mural next week, a genuine small preservation of involvement. Call it what it is: a keepsake, not a resurrection of the afternoon you missed.`,
        ],
      },
      {
        title: `What the regret is telling you`,
        paragraphs: [
          `A week later, seeing the group's photos, you feel a pang. The single-currency view reads that pang as an error signal: regret means you chose wrong. The pluralist reading is kinder and more accurate: the pang is your accounting system registering a real loss that no available option could have avoided. Two goods conflicted; whichever you chose, something true got left on the table.`,
          `One last honesty check: nothing in this lesson ranks family over art in general. With different commitments, no promise, a once-ever mural unveiling, a sister with recitals every month, the reasons could point the other way, and the loss would simply sit on the opposite side. The method is the constant: choose with reasons, name what it costs, and let both stay true.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `What each afternoon protects`,
        alt: `The recital protects a promise and family presence; the mural session protects shared creative work.`,
        caption: `Read both columns as real goods, named separately on purpose: the comparison refuses to convert them into points where one score erases the other.`,
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
        `Pick a real but small fork: two options you cannot both take this week. Write them side by side, including any promises or commitments already attached to either.`,
        `Under each, name the distinct good it protects, in neutral words. Ban the loaded labels, the sensible option, the selfish one; those are verdicts smuggled in before the weighing.`,
        `Choose, and write your reasons in two or three lines. Then write the other sentence, the one this lesson exists for: what the rejected option genuinely loses. One honest line, no softening.`,
        `If a small later accommodation exists, photographing the mural, a postponed version, note it at its true size: a keepsake of the lost good, never a claim that nothing was lost.`,
      ],
      notice: `Your page shows a decision with reasons and a named loss, coexisting. Nowhere did you have to demote yesterday's values to justify today's choice.`,
      troubleshooting: `If you catch yourself writing it did not really matter anyway about something you cared about last week, stop and restore the record. The rewrite feels like comfort and costs you an accurate map of your own values.`,
    },
    recall: {
      prompt: `You chose a quieter home over a shorter commute, for good reasons, and months later you still miss the lost travel time. How does a pluralist account read that lingering regret?`,
      hint: `Two distinct benefits were in conflict; only one could be kept.`,
      answer: `Quiet and time are different goods, and your move protected one at the genuine cost of the other, so the regret is a truthful receipt, not an error alarm. The pluralist reading lets you keep saying both: the reasons for quiet were and remain sound, and the hour a week of lost time is a real cost worth missing. Whether anything should change now is a fresh question about your current circumstances, and the pang alone does not answer it; it only confirms that what you gave up was never worthless.`,
    },
    quiz: {
      question: `You made a justified choice and still genuinely value what you gave up. Within this lens, what follows?`,
      options: [`You must reverse the decision to make the regret stop.`, `A real loss can remain after a fully defensible decision.`, `The rejected value should be reclassified as unimportant.`],
      correctIndex: 1,
      explanation: `When distinct goods conflict, every available choice leaves one of them unserved, so a justified decision and an honest loss arrive together. Reversal is a separate question the regret alone cannot settle, and reclassifying the rejected good as worthless is exactly the history rewrite the lesson warns against: it comforts today by corrupting your record of what you value.`,
    },
    takeaway: `Say both sentences and mean them: I chose this for good reasons, and I lost something real. Your values deserve an honest ledger.`,
    sourceNote: `Value pluralism is a disputed philosophical position. The recital example is original and does not establish a universal ranking of family, creativity, or other goods.`,
  },
  {
    id: 'perspective-010',
    outcome: `Tell the difference between being offered a thing and being able to use it, then find who can move each barrier.`,
    scene: `A learner evaluates a free online editing class against caption access and shift times.`,
    sections: [
      {
        title: `A free place is not yet an opportunity`,
        paragraphs: [
          `Rosa gets good news: a free place in an online editing class. The organizer announces that everyone now has the same opportunity. Except Rosa follows video through captions, and the class demonstrations have none. And the live session sits exactly inside her work shift. The fee is gone; two walls remain.`,
          `Now watch the dangerous shortcut. When Rosa does not attend, the easy story is motivation: we gave her a free place and she did not bother. A character verdict has just been issued for what is actually an access failure, and nobody checked which it was. Keeping that shortcut out of your own thinking is the point of this lesson.`,
        ],
      },
      {
        title: `A ticket you cannot reach the station for`,
        paragraphs: [
          `The capability approach, developed in philosophy and economics, draws the needed line. A resource is what gets handed over: the course place, the ticket, the tool. A capability is a genuine, usable opportunity: being actually able to take the class. Between the two sit conversion conditions, the circumstances that turn paper permission into real possibility: personal factors, social arrangements, environment.`,
          `A free train ticket is the classic picture: generous, and worthless to someone with no way to reach the station. Rosa's conversion conditions are concrete: captions, because that is how she accesses demonstrations, and a time outside her shift. Note also what the approach protects at the far end: once the class is genuinely usable, attending stays Rosa's choice. Real opportunity includes the freedom to decline it.`,
        ],
      },
      {
        title: `Map each barrier to who can move it`,
        paragraphs: [
          `The matrix in the diagram does the sorting: captions yes or no, usable timing yes or no. Only one cell of the four contains an actual opportunity, and fixing a single barrier still leaves Rosa outside, captioned recordings she can never watch in time, or a perfect time slot narrating demonstrations she cannot follow. Partial fixes feel like progress and convert nothing.`,
          `Then the practical move: assign each barrier to whoever can actually move it. Rosa can state her format and check her schedule. The organizer can investigate captioned recordings and an attendance window beyond the live hour. Neither can do the other's part, which is exactly why the my offer was equal announcement settles nothing.`,
        ],
      },
      {
        title: `What the lens does and does not claim`,
        paragraphs: [
          `Keep the conclusions modest. The matrix does not prove which barrier caused any particular absence, and it does not accuse the organizer of intending exclusion; most conversion failures are oversights, which is why naming them works. It produces questions to investigate and a fair division of the fixing.`,
          `And personal responsibility stays in the picture, at its correct address: choices are evaluated within the opportunities genuinely available. Once the class has captions and a workable window, Rosa's attendance is hers to decide and hers to answer for. Before that, judging her motivation was grading a race she was never able to enter.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: `Two conditions for Rosa's class`,
        alt: `Four cells cross available captions with usable timing; Rosa needs both.`,
        caption: `Find the single cell that contains a real opportunity, then notice how the two half-fixed cells still exclude. Rows: captions. Columns: timing. Other conditions held fixed.`,
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
        `Pick an offered resource from your own life or invent one: a class place, a library membership, a shared workshop tool. Write it at the top as the offer.`,
        `List its conversion conditions underneath, everything required to actually use it: a workable time, a format you can access, transport, equipment, childcare, whatever is real for the user.`,
        `Choose the two shakiest conditions and build Rosa's matrix: four cells, and mark honestly which cells contain a usable opportunity. Usually it is one.`,
        `For each barrier, write who can move it, user, organizer, or someone else, plus one concrete step each: a specific request to send, a local adjustment to make. Mark causes you have not verified as unverified.`,
      ],
      notice: `Your explanation of nonuse now names checkable conditions and owners instead of stopping at they were offered it. The word motivation appears nowhere on the page.`,
      troubleshooting: `If your map pins everything on the individual, or everything on the organizer, it is probably half done: conversion failures usually involve decisions and constraints at both ends. Check both levels before assigning the whole story to either.`,
    },
    recall: {
      prompt: `A neighborhood workshop lends tools for free, but collection is only possible during standard working hours. What does the capability lens add to the word free?`,
      hint: `Follow the ticket to the station.`,
      answer: `Free removed one barrier, price, and left another standing: anyone working those same hours holds a ticket to a station they cannot reach. The lens asks who can actually convert the offer into use, and what would widen that group, an evening slot, a weekend window, an agreed pickup through a neighbor. Those are proposals to investigate against the workshop's real staffing and resources, not entitlements. But until some conversion condition moves, low uptake among working people is an access fact, not a motivation fact.`,
    },
    quiz: {
      question: `A program removes its fee, yet participation stays low. Which question fits the capability approach?`,
      options: [`Which conditions still prevent people from using the offered place?`, `Would stronger promotion make the free place more attractive?`, `Should the organizer report free places issued as the success measure?`],
      correctIndex: 0,
      explanation: `The approach looks for the conversion conditions between an offer and its use, because that is where free programs quietly fail: timing, format, transport, equipment. Promotion polishes the announcement of a place people still cannot use, and counting places issued measures generosity rather than opportunity, which is exactly the gap the lens exists to expose.`,
    },
    takeaway: `An offer becomes an opportunity only when someone can actually use it. Map the conditions, assign the barriers, and save the character judgments.`,
    sourceNote: `The capability approach is contested. This original matrix illustrates access conditions, not proven causes of attendance.`,
  },
  {
    id: 'perspective-011',
    outcome: `Decide what enough means for an item by its job, before a friend's upgrade decides it for you.`,
    scene: `A commuter reassesses a working backpack after admiring a friend's newer bag.`,
    sections: [
      {
        title: `The bag changes in your mind`,
        paragraphs: [
          `Mika's backpack has carried a normal day's things for three years and still closes securely. Then a friend turns up with a newer, pricier model, and on the walk home Mika's old bag starts to feel shabby, inadequate, somehow smaller. Nothing about the bag changed that afternoon. Its capacity, zips, and straps are identical to the morning.`,
          `What changed was the comparison standing next to it. That is worth catching, not because wanting a nicer bag is a sin, it is not, but because two completely different sentences are now wearing the same feeling. This no longer meets my needs is a claim about the bag. I would enjoy what my friend has is a claim about Mika. They deserve different treatment, and the feeling will not sort them for you.`,
        ],
      },
      {
        title: `Desires with a bottom, desires without one`,
        paragraphs: [
          `The ancient philosopher Epicurus sorted desires by whether they have a natural stopping point. Hunger has one: eat enough and it ends. The desire to own the most admired thing has none, because the target moves every time someone else upgrades. It is a staircase with no top floor; you can climb forever and never arrive.`,
          `Enoughness is the practical tool that falls out of this: define what would satisfy a specific purpose, and let that definition, not the staircase, set the threshold. Hold the lens with care. It does not condemn pleasure, does not make deprivation a virtue, and does not dismiss real material needs as vanity; a comfortable bag, secure housing, and access equipment are needs, full stop. The only question it asks is which kind of reason is moving your threshold right now.`,
        ],
      },
      {
        title: `Write the threshold before browsing`,
        paragraphs: [
          `Mika writes the bag's job as three requirements: the daily items fit, the fastening works, and carrying the usual load is comfortable. Then Mika checks the current bag against the list, honestly. Three for three. The bag passed; the feeling was about something else.`,
          `Now the real decision can happen in daylight. Mika may still buy a new bag, because wanting a nicer design is a legitimate reason to spend discretionary money. What Mika will not do is disguise that pleasure as a functional failure, which matters because disguised reasons are impossible to budget for. Name the pleasure as a pleasure and it becomes a choice with a price. Leave it disguised and it becomes a need with no ceiling.`,
        ],
      },
      {
        title: `Thresholds move when circumstances do`,
        paragraphs: [
          `Enoughness is tied to the job, so when the job changes, the threshold legitimately changes with it. If Mika takes on a role that adds a laptop and a second set of equipment the old bag cannot hold, the requirements list grows and the bag may genuinely fail it. That is a real shortfall, and replacing the bag is the correct answer, not a lapse.`,
          `The useful pause is always the same one, placed before browsing rather than after: name the task, inspect what already works against it, and separate a real shortfall from a comparison that has no natural endpoint. The staircase will still be there tomorrow. The question is whether you are climbing it on purpose.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Two standards for the backpack`,
        alt: `A purpose-based standard tests load, closure, and comfort; a status standard follows the most admired model.`,
        caption: `Check which column has a stopping point: the purpose threshold can be met, the comparison threshold moves whenever someone upgrades. The fictional bag meets its job; optional purchases are not ranked as wrong.`,
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
        `Pick one upgrade you have been eyeing, a bag, headphones, a jacket. Nothing gets bought during this exercise; you are only sorting reasons.`,
        `Write the item's ordinary job in one line, then three concrete requirements it must meet to do that job. Requirements are observable: fits the laptop, survives rain, closes securely.`,
        `Test the item you own against the three requirements during a normal, safe use. Score it honestly: a pass is a pass even if the item is scuffed.`,
        `Now list the other reasons separately, pleasure, style, the friend's new one, and label them what they are. Then write one circumstance change, a new commute, new equipment, that would legitimately rewrite the requirements.`,
      ],
      notice: `You can now point at three different things that used to be one feeling: a functional gap if any, an optional pleasure, and a moving comparison. Only the first is a need.`,
      troubleshooting: `If one of your requirements reads must be the current model or must be at least as good as theirs, that is the staircase in disguise. Replace the model name with the task the item has to perform.`,
    },
    recall: {
      prompt: `Your camera handled casual snapshots fine, but you have agreed to photograph a friend's wedding and it cannot cope with low light. Does enoughness mean keeping it anyway?`,
      hint: `The threshold serves the job, not permanent austerity.`,
      answer: `No. The job changed, so the requirements changed, and the camera now genuinely fails them: that is a real shortfall, not a status itch. Enoughness asks you to reassess the actual task, the camera's limits, and the alternatives, borrowing, renting, a used body, before buying. What it would challenge is a different story: upgrading a camera that still does your actual photography because someone at the club owns a more impressive one.`,
    },
    quiz: {
      question: `Your current item still does its job, and you would enjoy a different design. Which description is most honest?`,
      options: [`The item has become functionally inadequate because the alternative appeals to me.`, `Any desire for a nicer design must be eliminated.`, `This is an optional pleasure, to be weighed separately from a functional need.`],
      correctIndex: 2,
      explanation: `Sorting reasons is not banning pleasure: you can want the nicer design and buy it, as a pleasure with a known price. What the lens prevents is relabeling that pleasure as a requirement the old item suddenly fails, because disguised needs have no ceiling. Eliminating the desire entirely is the austerity misreading the lesson explicitly rejects.`,
    },
    takeaway: `Write the job's requirements before you browse. A pleasure with a price is fine; a pleasure disguised as a need is a staircase with no top.`,
    sourceNote: `Epicurus supplies a philosophical distinction among desires. This original purchase reflection is not financial advice or a claim that material needs are merely attitudes.`,
  },
  {
    id: 'perspective-012',
    outcome: `Tell the difference between a thing that gains from variation and a thing that merely survives it, and keep any trial small.`,
    scene: `A workshop organizer tests a draft signup layout while keeping the working version untouched.`,
    sections: [
      {
        title: `A successful trial supports a narrow claim`,
        paragraphs: [
          `A workshop organizer sketches a new signup sheet and, before printing it, fills the draft with invented names: some short, some absurdly long. The long ones immediately overflow their boxes. The organizer widens the rows. Meanwhile the real signup sheet, the one people actually use, never left the drawer.`,
          `That is a tidy little win: variation revealed a flaw at the cost of two scrap sheets. Now watch the claim inflate if nobody stops it. Variation helped, so disruption is good; stress makes systems stronger; letting real registrations fail would toughen the process. Each sentence is bigger than the last and less supported. The organizer learned one specific thing from one bounded trial. Hold the claim at that size.`,
        ],
      },
      {
        title: `Surviving a shake versus gaining from it`,
        paragraphs: [
          `The word antifragility names a specific property: a thing that gets better, on average, from certain increases in variability, not one that merely withstands them. A brick wall that survives wind is resilient. A thing that ends up ahead because of the wind would be antifragile. The distinction is sharp, and an invented arithmetic toy makes it visible.`,
          `Suppose a process returns its input multiplied by itself. Feed it 2 and 2: results 4 and 4, averaging 4. Now feed it 1 and 3, the same average input of 2, but spread apart: results 1 and 9, averaging 5. The spread-out inputs produced a higher average result, with nothing else changed. That process gains from that spread. A process that returned 4 no matter what would resist the spread without gaining anything. Same average in; the shape of the curve decides whether variation pays.`,
        ],
      },
      {
        title: `Keep the real analogy bounded`,
        paragraphs: [
          `The signup trial is not the squaring toy, and nothing about it establishes mathematical antifragility. What it illustrates is a bounded learning loop, which is useful on its own terms: vary a draft, capture what breaks, keep a fallback untouched, and stop if the cost exceeds an agreed limit. The organizer risked spare paper and twenty minutes, never anyone's actual registration.`,
          `Each part of that loop earns its place. Skip the capturing and the variation just wastes paper. Skip the fallback and the identical experiment could damage the event. Skip the limit and a useful trial becomes an open-ended gamble. The structure, not the mere presence of variation, is what made the win a win.`,
        ],
      },
      {
        title: `What one good trial does not license`,
        paragraphs: [
          `Two boundaries matter most. First, neither resilience nor one successful small trial proves larger shocks will help; the squaring toy gains from spread because of its particular shape, and most real processes have shapes nobody has measured. Second, and more important, the idea is no justification for imposing hardship on people. A draft form can be stressed on scrap paper. Participants cannot.`,
          `So the disciplined question is always three questions at once: what specifically improves, under which specific variation, and within what loss limit? Answer all three and you have an experiment. Answer none and you have a slogan about toughness, which is how reasonable people end up breaking working things on purpose.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Same average input, different spread`,
        alt: `Two fixed inputs of two average four output points; inputs one and three average five under the square rule.`,
        caption: `Check the arithmetic in both rows: the average input is 2 either way, yet the spread-out pair averages 5 instead of 4. Invented rule, result equals input times input.`,
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
        `Draw a draft signup row on scrap paper and write the one improvement you are hunting for, such as: long names must stay legible. A trial without a named target cannot produce a finding.`,
        `Set the loss limit out loud before starting: these two sheets and this practice period, nothing more. Confirm the real registration list, if one exists, stays untouched throughout.`,
        `Feed the draft varied inputs: a four-letter invented name, then a twenty-five-letter one. Watch what breaks, then revise the draft to fix the observed problem, not a hypothetical one.`,
        `Write three lines: what improved, what remains untested, and the fallback that never changed. Then resist the fourth line; this trial says nothing about bigger shocks or other systems.`,
      ],
      notice: `The revised draft fixes a problem you actually observed, the loss stayed inside its limit, and nobody's real information was ever at risk. That is the entire legitimate shape of the idea.`,
      troubleshooting: `If the trial produces no clear benefit, or threatens to exceed its two-sheet limit, stop. Escalating the disruption to force a lesson out of it is the slogan version, not the experiment.`,
    },
    recall: {
      prompt: `A spare display monitor takes a jolt during a move and works exactly as before. A colleague calls it antifragile. What is missing from that claim?`,
      hint: `No loss and positive gain are different outcomes.`,
      answer: `Evidence of gain. The monitor survived unchanged, which is resilience: it withstood the shake and ended where it started. Antifragility would require some specified result that actually improved because of a defined range of jolts, shown under comparable conditions, and no such result exists here. Note what the mislabel would license next: if the monitor were truly antifragile, bigger jolts would be an upgrade. Nobody believes that, which is the tell that the word was decoration.`,
    },
    quiz: {
      question: `A draft form improves after being tested with varied invented inputs. Which conclusion stays inside the evidence?`,
      options: [`The improved draft justifies replacing the live process immediately.`, `This bounded trial produced useful feedback; broader benefits remain unproved.`, `The finding should be dismissed because no real participants were involved.`],
      correctIndex: 1,
      explanation: `The trial earned exactly one narrow result, a better draft, and the discipline is claiming no more. Jumping straight to the live process skips the fallback logic that made the trial safe, and dismissing the finding because it used invented names gets things backwards: controlled variation on scrap paper is the point, not a weakness.`,
    },
    takeaway: `Ask what gains, from which variation, within what loss limit. Stress drafts on scrap paper, never people, and keep every claim the size of its trial.`,
    sourceNote: `Taleb and Douady give a mathematical account. The square example is invented arithmetic; the draft trial is an analogy, not evidence that adversity benefits people.`,
  },
  {
    id: 'perspective-013',
    outcome: `Retell a setback so the future stays open, without changing a single fact or forcing a happy ending.`,
    scene: `A photographer misses a zine submission deadline and writes two accounts of the event.`,
    sections: [
      {
        title: `Three facts become a whole identity`,
        paragraphs: [
          `You finished the photo essay on Friday. The zine's submission portal closed on Thursday. Your work was not considered. Three facts, all true, all small. And then, somewhere between the portal page and the kettle, a fourth sentence arrives wearing the costume of a fact: I always ruin creative opportunities.`,
          `Look at the size of what just got added. One missed date was promoted into a permanent trait and a prediction about every future attempt. That is a lot of cargo for three facts to carry. The opposite move is equally unearned: it was the best thing that could have happened. You do not yet know what the missed submission will mean. Both sentences claim to know.`,
        ],
      },
      {
        title: `The editor you did not know you hired`,
        paragraphs: [
          `Psychologists call the running account you keep of your own life a narrative identity: an evolving story that selects some events, links them together, and implies what can happen next. Everyone has one, and nobody wrote it deliberately. It behaves like a film editor who decides which scenes make the cut and what the final shot suggests.`,
          `The useful insight is that the editor's work is separate from the footage. Choosing which events to link, and what ending to imply, changes nothing about what happened; it changes what the account permits going forward. Research reviews find some narrative features associated with better adjustment, but association is not proof that rewriting a story causes recovery, so treat this as a reflective lens, not a cure. Its one question is modest: what does my current account allow, and what does it rule out?`,
        ],
      },
      {
        title: `Same footage, different final shot`,
        paragraphs: [
          `Write the setback both ways and watch where they diverge. Account one: I finished Friday, after Thursday's deadline, so the essay was not considered. This closes every serious creative path for me. Account two: I finished Friday, after Thursday's deadline, so the essay was not considered. I missed this submission. I can decide later whether to revise the essay or find another outlet.`,
          `The first three sentences are identical, and that is the point: every fact survived intact in both versions, including your responsibility for checking the date. Only the final shot changed. The second account does not promise publication or pretend the miss was clever. It simply declines to film an ending that has not happened yet.`,
        ],
      },
      {
        title: `Leave the next chapter undecided`,
        paragraphs: [
          `Notice what the open account does not require of you. It does not require cheerfulness: you can be properly disappointed inside it, and the disappointment needs no lesson attached to earn its place. It does not require growth: nothing says the setback must pay for itself in wisdom. It only requires that the future be left to evidence and choice rather than sealed by a verdict issued at the kettle.`,
          `Two fences keep the tool honest. Never improve the story by editing the footage; a better ending bought with invented facts is a worse account, not a better one. And some material is too raw for exercises; this lens is for minor setbacks you can look at steadily, not for grief you are still inside. Accurate, revisable, undecided: that is the whole standard.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Same facts, different ending`,
        alt: `Both accounts preserve the missed deadline; only their claims about future possibilities differ.`,
        caption: `Compare the two columns line by line: Friday, Thursday, and not considered appear in both. Only the final sentence differs, and that sentence is interpretation, not history.`,
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
        `Choose a small, manageable setback, or borrow the photo essay. List exactly three known facts, written so flatly that a stranger could verify each one: dates, outcomes, nothing evaluative.`,
        `Write a short account that uses all three facts and ends with whatever interpretation first arrived in your head, however harsh. You are capturing the editor's first cut.`,
        `Write a second account with the identical three facts and a different final sentence: one that names a possible next step without inventing any benefit or promising any result.`,
        `Underline every factual statement in both versions and check they match exactly. Then strike any sentence, in either version, that claims something the three facts cannot support.`,
      ],
      notice: `Both accounts preserve the same history word for word, yet they permit entirely different futures. The difference was never in what happened; it was in where the editor chose to cut.`,
      troubleshooting: `If the second version reads as falsely bright, you have overcorrected: cut the optimism back until the ending is merely undecided. And if the material turns out to be more painful than expected, stop; this is a reflection exercise, not a reframing drill to push through.`,
    },
    recall: {
      prompt: `A pottery piece cracks the night before an exhibition. How do you describe what happened without saying either that you are hopeless at this or that the crack was secretly a gift?`,
      hint: `Separate the event and its uncertainty from a verdict on who you are.`,
      answer: `State the footage and only the footage: the piece cracked, here is what you currently know about why, and it will not be in the show. Let the disappointment stand without a moral. Then leave the next chapter unfilmed: repair might be possible, the cause might teach something about drying times, another piece might go in next year, all possibilities to investigate rather than benefits already banked. Hopeless adds a permanent trait the one crack cannot support; a gift adds an outcome you have not yet seen.`,
    },
    quiz: {
      question: `Your more hopeful account only works if you claim the rejection improved your work, but you have not revised anything yet. What should change?`,
      options: [`Keep the claim, since a positive ending is the goal of the exercise.`, `Return to the permanent negative verdict, since hope is uncertain.`, `Remove the invented improvement and leave the outcome open.`],
      correctIndex: 2,
      explanation: `The rule is footage first: a better ending bought with a fact that has not happened is a worse account, so the invented improvement goes. That does not hand the story back to the permanent verdict, which was equally unsupported in the other direction. Openness needs no guaranteed gain; it only needs the next chapter left unfilmed.`,
    },
    takeaway: `Edit the interpretation, never the footage. Keep every fact, drop every verdict, and leave the next chapter honestly undecided.`,
    sourceNote: `Narrative-identity research and existentialism provide background. This original minor-setback exercise is not therapy, proof of causation, or a requirement to find redemption in harm.`,
  },
  {
    id: 'perspective-014',
    outcome: `Test a shared rule as if you did not know which position you would hold under it, then go and ask the people who do.`,
    scene: `Apartment residents compare rules for booking a shared washing machine.`,
    sections: [
      {
        title: `The rule looks fair from a fortunate place`,
        paragraphs: [
          `Your building releases washing-machine slots the moment they free up, first come, first served. You work from a laptop, check the booking page between tasks, and the rule feels perfectly fair: everyone has the same page, the same button. Then a neighbor mentions that she cannot touch her phone during her shifts, and the good slots are always gone by the time she can look.`,
          `Same page, same button, completely different odds. The rule was never neutral; it quietly rewarded a schedule like yours. Before defending it, try a small mental move: imagine you do not know which of the two schedules you will have next month. You still need clean laundry either way. You just cannot build the rule around an advantage you might not hold.`,
        ],
      },
      {
        title: `What the veil removes, and what it keeps`,
        paragraphs: [
          `That mental move has a famous source. The philosopher John Rawls proposed the original position, a thought experiment in which people choose principles of justice from behind a veil of ignorance: nobody knows their own wealth, talents, or place in society. Not knowing where you will land, you cannot rig the rules in your own favor. It is the oldest fairness trick in the book, cut the cake, then let the other person choose the slice, scaled up to a society.`,
          `Two precisions keep the borrowed tool working. The veil removes knowledge of your particular position; it does not remove general knowledge about how people live. You still know schedules differ and access needs vary; you just do not know which ones are yours. And Rawls aimed the device at the basic institutions of a whole society, not at a laundry rota. Borrow the impartiality question, not the full theory.`,
        ],
      },
      {
        title: `Compare the rules from both positions`,
        paragraphs: [
          `Now run the two rules through the veil. Rule one: instant booking, as now. Rule two: a daylong request window, after which contested slots rotate fairly. Assume, for the example, that both residents can submit once during the window. The matrix in the diagram shows each rule from each position, and the pattern is immediate: instant booking is wonderful from one seat and quietly punishing from the other, while the window rule flattens the advantage of constant refreshing.`,
          `Be honest about the window rule's own costs. It adds a wait, and it needs an allocation method everyone can understand and trust. Nothing here certifies it as the right answer. What the exercise did was expose an advantage you had been treating as neutral, which is exactly the thing the veil is for.`,
        ],
      },
      {
        title: `Imagining consent is not obtaining it`,
        paragraphs: [
          `Here is where the borrowed tool must hand over to real people. After the thought experiment, ask actual residents what the draft misses: someone may lack an easy way to submit a request at all; someone may need an accessible channel the matrix never imagined. You imagining that a rule is acceptable from every seat is not the same as the people in those seats agreeing to it.`,
          `So the veil changes which reasons you bring to the meeting; evidence and discussion still decide whether the arrangement works. And one last caution against overcorrecting: impartiality is not pretending everyone is identical. Erase the real differences in schedules and needs, and you have not become fair; you have just redrawn the rule around a fictional average resident who does not do laundry.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: `Booking rule by access position`,
        alt: `Two booking rules are compared for residents with different access to their phones.`,
        caption: `Read across each row from both seats before judging the rule: instant booking changes character entirely depending on who you are. Both fictional residents can submit within the window.`,
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
        `Pick a low-stakes shared resource, a meeting room, a communal bike, a practice slot, and draft two allocation rules for it. Write the rules before deciding which seat you occupy; order matters here.`,
        `Describe two positions with genuinely different constraints: different working hours, different access to a phone, different mobility. Keep the general facts of human life; hide only which position is yours.`,
        `Build the four-cell matrix and score each rule from each seat. Circle at least one advantage you had previously filed under just how it works. There is almost always one.`,
        `Revise the draft, then write the questions you would put to the real users, including whether everyone has an accessible way to participate at all. Mark the whole exercise as pre-consultation, because that is what it is.`,
      ],
      notice: `Your reasons for the rule no longer depend on your occupying the convenient seat, and your page ends with questions for real people rather than a verdict on their behalf.`,
      troubleshooting: `If your revised rule works by assuming everyone has the same schedule and access, you erased the general facts instead of your particular position. Put the differences back; fairness is built across them, not by deleting them.`,
    },
    recall: {
      prompt: `A music studio gives quiet practice time to whoever arrives first each morning. How do you apply the veil without forgetting that some members work morning shifts?`,
      hint: `Hide which constraints are yours; keep the fact that constraints exist.`,
      answer: `Step behind the veil carrying the general knowledge, members have different working hours, and leaving behind the particular knowledge, which hours are mine. From there, arrive-first rewards whoever happens to be free at dawn, which looks like luck rather than fairness once you might be the shift worker. Compare it against alternatives, a rotating roster or a request window, from every seat. Then take the draft to the actual members, because the exercise surfaced an advantage; it did not obtain anyone's agreement or replace their circumstances with your imagination.`,
    },
    quiz: {
      question: `Behind the veil in this booking analogy, which information should you keep?`,
      options: [`Your exact schedule, so you can protect your preferred slot.`, `The general knowledge that people have different schedules and access needs.`, `The assumption that the actual residents have already accepted the draft.`],
      correctIndex: 1,
      explanation: `The veil hides the particular facts that let you rig the rule, your own schedule above all, while keeping the general facts that make the rule relevant: people differ, and a fair rule must work across those differences. Assuming prior acceptance smuggles in the consent the exercise cannot provide; only asking real residents can.`,
    },
    takeaway: `Ask whether you would accept the rule without knowing your seat, keep the real differences in view, and then let the actual people answer.`,
    sourceNote: `The original-position entry explains Rawls's broader justice argument. This original laundry matrix is a limited analogy, not its full procedure or a certified fair policy.`,
  },
  {
    id: 'perspective-015',
    outcome: `Use the experience-machine question to find out whether you want the feeling of an achievement or the achievement itself.`,
    scene: `A beginner compares learning to mend a jacket with an indistinguishable experience of mastery.`,
    sections: [
      {
        title: `The feeling could arrive without the skill`,
        paragraphs: [
          `You want to learn to mend your jacket: the torn cuff, the loose button, the small satisfactions of fixing your own things. Now entertain a strange offer. A machine could give you the complete experience of learning, the fumbling first stitches, the growing confidence, the pride of holding up a finished repair, indistinguishable from the real thing. Outside the machine, the jacket stays torn and you cannot sew.`,
          `Would that give you everything you wanted? Sit with the question rather than answering fast, because the answer is a map of your own motives. Perhaps part of the goal really was the pleasant feeling of competence. Perhaps another part was being able to mend the next tear, or actually caring for an object you wear. The offer separates those parts, which ordinary life never does.`,
        ],
      },
      {
        title: `What the machine is testing`,
        paragraphs: [
          `The philosopher Robert Nozick built this thought experiment to test hedonism, the view that a good life consists in pleasant experience and the absence of pain, understood as a serious theory of well-being, not a slogan about reckless fun. If pleasant experience is all that matters, then a machine delivering perfect experiences should be an obvious yes. Most people hesitate. The hesitation is the data.`,
          `To make the test fair, you have to accept its rules. Stipulate that the experiences are genuinely indistinguishable, and set aside worries about malfunction, cost, or someone unplugging you; those are real concerns in real decisions, but they dodge the question. Then ask the intended thing: does doing something, relating to real people, or touching reality matter beyond how it feels? Your answer reveals a commitment to examine, not a scientific verdict on well-being.`,
        ],
      },
      {
        title: `Inspect the reason behind your answer`,
        paragraphs: [
          `Suppose you turn the machine down. Now ask why, because the reasons sort into kinds. If you refuse because you want to own the ability afterward, to mend the next tear in a real jacket, you have named something beyond the feeling of mastery: a skill that persists in the world. If you refuse because the machine might break, you have not answered the question; you have changed its rules, and the philosopher simply tightens the stipulation and asks again.`,
          `The same sorting works on acceptance. Taking the machine for the mending alone might reveal that, for this goal, the feeling honestly was the point, and that is a legitimate finding too. The exercise does not grade your answer. It makes the answer's reason visible.`,
        ],
      },
      {
        title: `What the thought experiment does not condemn`,
        paragraphs: [
          `A common misreading turns the machine into an attack on games, fiction, or anything virtual. It is not. A video game can build real skills and real friendships; a novel can change how you treat people. Those have effects that outlast the experience, which is exactly the feature the stipulated machine lacks. Change that assumption, let the skill transfer out, and you have changed the comparison itself, not refuted it.`,
          `So the lesson travels as a question you can carry into real choices: after this experience ends, what remains? Sometimes the honest answer is nothing, and I wanted it anyway, which is fine. Sometimes it is a mended jacket and a hand that knows how, which tells you the feeling was never the whole of what you were after.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Experience and achievement separated`,
        alt: `Real mending includes a skill and repaired jacket; the stipulated machine supplies only an indistinguishable experience.`,
        caption: `Compare what remains after each experience ends: the left column leaves a skill and a jacket, the right leaves nothing. A hypothetical distinction, not a claim about actual virtual learning.`,
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
        `Pick one achievement you actually want, finishing a course, running a distance, learning a dish, and list everything you want from it. Split the list into two columns: feelings, and things that would exist afterward.`,
        `Now imagine the machine: you receive the exact feelings column, perfectly, and nothing from the afterward column. Hold safety, cost, and reliability equal, so the only difference is what remains.`,
        `Write your preference, accept or decline, and under it the reason. Then classify the reason: is it about experience, about reality, about a skill, or about other people? One word is enough.`,
        `Change a single assumption, for instance let the skill transfer out of the machine into the world, and note whether your answer flips. If it does, you have found which feature was carrying the decision.`,
      ],
      notice: `Your answer is now attached to a named value and a named assumption, which is far more useful than a verdict on the machine. You know what you were actually after.`,
      troubleshooting: `If every objection you wrote is about malfunction or trust, you are arguing with the machine's engineering rather than its philosophy. Pin reliability at perfect for one more pass and see what objection is left.`,
    },
    recall: {
      prompt: `A drawing simulation teaches a real skill: after a month inside it, you can draw on paper. Why is that not the same as the machine handing you the feeling of artistic mastery?`,
      hint: `Check what remains after the experience ends.`,
      answer: `Because something remains: a genuine, transferable ability, which the stipulated machine explicitly does not provide. The simulation belongs on the left side of the diagram, with real learning, since its effects outlast the session, and that violates the machine's defining rule of experience only. This is why the thought experiment is not an argument against virtual tools: a simulation that produces real skills, or real friendships, is just a different kind of real practice. The question to ask of any experience is the same one: when it stops, what do I still have?`,
    },
    quiz: {
      question: `You reject the imagined machine because doing the repair yourself matters to you. What have you established?`,
      options: [`A reason to question a pleasure-only account of well-being, with the assumptions still open to debate.`, `A personal preference that settles which theory of well-being is correct.`, `A reason to prefer in-person lessons even when a simulation teaches the same real skill.`],
      correctIndex: 0,
      explanation: `Your refusal names a value beyond feeling, the real repair and the real skill, which is precisely the kind of evidence that puts pressure on hedonism, while one person's intuition cannot by itself settle a theory of well-being. And the refusal says nothing against simulations that leave real skills behind, since those fail the machine's experience-only rule and belong with genuine practice.`,
    },
    takeaway: `Ask what remains when the experience ends. If the answer matters to you, the feeling was never the whole goal.`,
    sourceNote: `The well-being entry discusses the experience machine and competing theories. This mending example is original; thought-experiment intuitions do not scientifically settle hedonism.`,
  },
  {
    id: 'perspective-016',
    outcome: `Imagine an ordinary day repeating to find the default you actually choose and the one that just keeps happening.`,
    scene: `A weekly game-group member reconsiders automatically accepting every Thursday invitation.`,
    sections: [
      {
        title: `The default gets another week`,
        paragraphs: [
          `Every Thursday, Dev's phone buzzes with the game-group invitation, and Dev's thumb says yes before Dev's brain checks the week. Some Thursdays are great. Others end in a rushed walk home, no dinner cooked, the quiet hour Dev wanted simply gone. Ask Dev about the group, though, and memory serves up the great nights and calls that the whole routine.`,
          `Memory does that: it keeps highlights and quietly discards the Tuesday-ish Thursdays. So try a different picture. Not the best session, but the ordinary one, automatic yes, rushed ending, repeating next week, and the week after, and on. Seen as a loop, the routine splits into two kinds of thing: the parts Dev would actively pick again, and the parts that continue only because nobody has looked at them in a year.`,
        ],
      },
      {
        title: `A thought experiment about endorsing, not enjoying`,
        paragraphs: [
          `The repeating-loop picture has a famous ancestor. Nietzsche's eternal recurrence asks you to imagine your life repeating exactly, forever, and to notice how you respond. One common reading treats it as a test of affirmation: could you say yes to this way of living? Affirmation here means endorsing the pattern, not reporting constant happiness; plenty of hard things are endorsable.`,
          `What repetition does to a routine is remove its favorite excuse. One rushed Thursday is an exception. The same rushed Thursday on an infinite loop is a policy, and policies invite the question: did I choose this? Hold the lens loosely in every other respect. It is not a claim that the universe literally repeats, not a recipe for a perfect day, and emphatically not a demand that you endorse hardship you never chose. Aim it only at recurring choices you genuinely have room to reconsider.`,
        ],
      },
      {
        title: `Keep what you choose, revise one default`,
        paragraphs: [
          `Dev runs the loop and finds the split cleanly. The friendships and the games: endorsed, would pick again. Automatic attendance every single week: not chosen, just unexamined. So Dev proposes one modest change, alternate weeks, and checks with the group that it works with how teams are arranged, because a change that breaks the thing for others is not a revision, it is a withdrawal.`,
          `Notice the size of the result. Dev keeps the valued thing and opens a space for another chosen activity on the off weeks. Nothing requires every future Thursday to be admirable, and nothing was torn down. One default got looked at and adjusted. That is the whole exercise working as intended.`,
        ],
      },
      {
        title: `What the loop must not become`,
        paragraphs: [
          `The failure mode is turning a focused question into a verdict on your entire life, which the loop can do if you let it run unbounded. Keep three fences up. If a routine involves a responsibility to another person, it needs a conversation, not a quiet disappearance. Conditions you cannot safely change, a job you need, a health constraint, a caring duty, are constraints to live within, not failures of affirmation to feel bad about.`,
          `And imagined recurrence scores nothing: not leisure against productivity, not your life against anyone else's. It is a prompt for examining endorsement, one ordinary controllable choice at a time. If the reflection starts producing the sentence my whole life is wrong, that is the signal to narrow it back to one Thursday, or to stop for today.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Two ways Thursday repeats`,
        alt: `Automatic weekly acceptance is compared with an agreed alternate-week game routine.`,
        caption: `Ask of each column: which parts were chosen, and which just recurred? The fictional change keeps the friendship and makes no claim that fewer games is better in general.`,
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
        `Sketch an ordinary weekday from memory, not a good one: duties, rest, and the discretionary bits, in the order they actually happen.`,
        `Now imagine that exact day repeating indefinitely. Mark one part you would actively choose again, and one default that only persists because nobody has reconsidered it. Both marks are required; the first keeps the exercise honest.`,
        `Propose a small change to the default, and write down who else it touches and how. A revision that quietly offloads work onto someone is not a revision.`,
        `Draft the conversation the change needs, if it needs one, and schedule the trial only when it is feasible and agreed. Leave any imposed condition off the page entirely; it is not what the loop is for.`,
      ],
      notice: `Your plan separates a chosen pattern from inertia and changes exactly one thing, with its effects on other people visible. Nobody's whole life got redesigned.`,
      troubleshooting: `If the reflection expands into a verdict that your life is wrong, the loop has slipped its bounds. Narrow it to one ordinary controllable choice, or close the notebook; the exercise is optional and the verdict was never part of it.`,
    },
    recall: {
      prompt: `You love a monthly cooking gathering but somehow always volunteer for all the cleanup, and you have started to resent the evenings. What does imagined repetition help you separate?`,
      hint: `A routine can hold an endorsed part and an unexamined part at once.`,
      answer: `Run the loop and the evening splits: the gathering, cooking with friends, eating together, is something you would choose again, while volunteering for every cleanup is a default that recurred into a job nobody assigned you. The resentment was pointing at the second part, not the first. The fix is a conversation about dividing cleanup fairly, not abandoning the gathering and not grimly endorsing the burden forever. Change the unexamined half; keep the chosen half.`,
    },
    quiz: {
      question: `Your repeated routine includes a condition you cannot safely change. How should this exercise treat it?`,
      options: [`As evidence that you have failed to affirm your life.`, `As a constraint, while the exercise focuses on the choices actually available.`, `As something to remove immediately, so the whole day becomes chosen.`],
      correctIndex: 1,
      explanation: `The loop examines revisable choices and has nothing to say about imposed conditions except that they bound the space you are choosing within. Reading them as a failure of affirmation blames a person for circumstances, and demanding their immediate removal would trade a philosophical prompt for an unsafe decision.`,
    },
    takeaway: `Picture the ordinary day on repeat, keep what you would choose again, and adjust one default. The loop is a question for a Thursday, not a grade for a life.`,
    sourceNote: `The existentialism entry provides background for this interpretation of recurrence. The routine exercise is original, not cosmological evidence or a duty to approve of suffering.`,
  },
  {
    id: 'perspective-017',
    outcome: `Give your effort full credit and the luck its honest share, without letting either story explain everything.`,
    scene: `A scholarship winner considers the preparation and fortunate opening behind a successful art application.`,
    sections: [
      {
        title: `The portfolio did not create its own opportunity`,
        paragraphs: [
          `Mina wins an art scholarship. The portfolio behind it took months: drawings made, hated, redrawn, persistence through weeks when nothing looked right. Also true: a neighbor lent a quiet room to work in, and the application window happened to reopen in the exact month Mina heard about it.`,
          `Two stories are now competing for the win. It was all luck erases the months of work. Every part was earned erases the room and the timing, conditions Mina did not create. Both stories are tidy, and both delete something true. Here is the quieter position: Mina can be fully proud of the work and still recognize that another applicant, equally capable, might never have had the quiet room or caught the window.`,
        ],
      },
      {
        title: `When circumstance gets into the verdict`,
        paragraphs: [
          `Philosophers call this tangle moral luck: our judgments about what people deserve keep depending on factors they never controlled. Desert is the technical word for what someone is thought to deserve on the basis of their actions and qualities. The puzzle shows up everywhere, from two equally careless drivers where only one hits something, to two equally prepared applicants where only one finds an open door.`,
          `The matrix in the diagram untangles one piece of it by separating two conditions: was the portfolio ready, and was there an opening to submit it to? Four logical combinations, and only one of them, prepared plus opening, produces a scholarship at all. Read the cells as possibilities, not probabilities, and never as character grades. Acknowledging the opening does not settle how rewards ought to be distributed; it only breaks the assumption that an outcome, by itself, measures a person's worth.`,
        ],
      },
      {
        title: `Say both halves in one sentence`,
        paragraphs: [
          `Mina's honest sentence turns out to be short: I prepared the portfolio, and access to a workspace and the reopened application helped that work count. No percentages. Nobody can meaningfully say the work was 60 percent and the room was 15, and the attempt to do so usually just restarts the argument between the two tidy stories.`,
          `What the sentence does instead is point at something changeable. The work is Mina's and stays Mina's. The enabling conditions are the kind of thing that could be made less exclusive: Mina might pass the public application information to someone who wants it, or ask whether the neighbor's room could be offered more widely. Permission matters on both counts, as do other people's actual goals; not everyone wants Mina's path.`,
        ],
      },
      {
        title: `What recognizing luck does not license`,
        paragraphs: [
          `Keep the fences clear, because this idea gets abused in both directions. Acknowledging luck is not an excuse for misconduct, does not dissolve responsibility for your own choices, and does not mean you should feel fraudulent about a real achievement. Mina drew the drawings. That fact needs no apology.`,
          `Nor does crediting effort require denying the door. The two-part account credits the work while telling the truth about access, which is the only version that lets you both take pride and widen the opening for the next person. One story makes you grateful and passive; the other makes you proud and blind. The sentence with both halves makes you proud and useful.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: `Preparation and an opening`,
        alt: `Four cells cross a prepared portfolio with an available application opening.`,
        caption: `Find the only cell where a scholarship is even possible, then notice how many prepared people the other cells could contain. Hypothetical combinations, not success probabilities or character verdicts.`,
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
        `Pick one modest achievement of your own and list, specifically, the actions you contributed: hours, drafts, decisions. Be generous and accurate; this column is yours.`,
        `Now list one enabling condition you did not create: timing, a loan of space or equipment, someone's tip, information arriving when it did. Equally accurate, equally unembarrassed.`,
        `Write the combined sentence: I did X, and Y helped that work count. If you feel the urge to add percentages, notice it and skip it; the shares cannot be measured and the urge is the two tidy stories fighting.`,
        `Draft one optional, permission-first offer that widens the door for someone else: sharing public application details, an introduction, a resource. Involve nobody without asking them first.`,
      ],
      notice: `Your account credits the effort in full and names the opening honestly, and neither half shrank to make room for the other. The last step turned recognition into something useful.`,
      troubleshooting: `If acknowledging help feels like it cancels your work, write the two contributions as separate factual lines first, then join them with and. The word and is doing the philosophy; the discomfort usually comes from hearing it as but.`,
    },
    recall: {
      prompt: `Two applicants prepared equally well, but one applied in a year with three times as many places available. Someone says the winner clearly worked harder. What is wrong with that?`,
      hint: `Outcomes can differ without any difference in effort.`,
      answer: `The outcome cannot carry that conclusion. By stipulation the preparation was equal, and the matrix shows what changed: the size of the opening, which neither applicant created. Reading effort off the result is the every part was earned story applied to someone else, and it quietly converts a difference in opportunity into a verdict on character. Investigate preparation and circumstances directly if you want to compare effort; a selection result measures who got through a door, not how hard each person pushed on it.`,
    },
    quiz: {
      question: `After months of preparation, a well-timed introduction got you in front of the right person. Which account fits?`,
      options: [`Assign most of the credit to preparation, because it took longer.`, `Attribute the result mainly to the introduction, because it came last.`, `Both contributed, and the account need not settle a complete theory of deserved reward.`],
      correctIndex: 2,
      explanation: `Effort and an enabling condition are compatible causes, and the honest sentence holds both without pricing them: duration does not buy credit and recency does not either. Trying to award exact shares restarts the fight between the two tidy stories, and nothing about recognizing both settles the larger question of how rewards should be distributed.`,
    },
    takeaway: `Say it with and: I did the work, and the opening helped it count. Then spend the pride on widening the door.`,
    sourceNote: `Moral-luck debates and the capability approach inform this original success example. It is a philosophical application, not a causal estimate or formula for distributing rewards.`,
  },
  {
    id: 'perspective-018',
    outcome: `See the planning work hidden behind a visible chore, and redistribute it without silencing the person being helped.`,
    scene: `Housemates discover the planning labor hidden behind their weekly grocery trip.`,
    sections: [
      {
        title: `The visible trip leaves work out`,
        paragraphs: [
          `Neve says, with some pride, I handle the groceries by myself. And Neve does go to the shop, every week, and carries the heavy bags up three flights. But rewind the week. Before the trip, Jo checked the cupboards, asked everyone what they needed, planned the meals, and wrote the list. At the shop, a paid worker had stocked every shelf Neve walked past.`,
          `Neve's effort is completely real. The word by myself is the problem: it draws the frame tightly around the one visible task and leaves everything that made the task possible outside the picture. The test comes the week Jo forgets the list. Suddenly the independent trip returns with three bags of things nobody needed and none of the things anyone did.`,
        ],
      },
      {
        title: `An ethics that counts the invisible half`,
        paragraphs: [
          `Care ethics is a branch of moral philosophy that puts dependence, relationships, and the work of meeting needs at the center, rather than treating people as self-sufficient units who occasionally help each other. Its starting fact is interdependence: everyone both gives and receives support, all the time, mostly unnoticed. Think of a stage play: the audience sees the actors, and the show stands on a crew nobody applauds.`,
          `The lens supplies four questions for any caring arrangement. Who notices the need? Who organizes the response? Who performs the visible work? And whose preferences steer it? Notice that the lens is not sentimental about care: unpaid labor can be taken for granted, paid workers can be badly treated, and a helper can steamroll the very person being helped. Meeting a need is one question. How the arrangement treats everyone inside it is a separate one.`,
        ],
      },
      {
        title: `Discuss the hidden task, not just gratitude`,
        paragraphs: [
          `Neve, to their credit, sees it: that is a lot of planning I never counted, Jo, does the split still work for you? Jo says what has been true for months: I would like a week without managing the list. So they trade specifics. Neve will check supplies and coordinate the next order; each housemate keeps a say in what gets bought.`,
          `Compare that with the usual non-fix: I will help more. Help more sounds generous and changes nothing, because Jo remains the person who must notice that help is needed and ask for it. The redistribution moved the noticing, not just the carrying. And Jo retains the right to decline planning in future, instead of receiving thanks that quietly functions as a renewal of contract.`,
        ],
      },
      {
        title: `What the lens does not demand`,
        paragraphs: [
          `Two misuses need fences. Care ethics does not assign unlimited duties by gender, birth order, or family role; the person who has always done the noticing is not thereby obligated to keep doing it, and a lens that counted hidden labor only to lock it in place would betray its own point. Any redistribution is specific and voluntary, agreed rather than assigned.`,
          `And receiving help never erases a person's authority over their own preferences. The housemate who no longer shops still decides what they eat. Gratitude is lovely and insufficient: thanks for a task is not the same as asking whether the person wants to keep performing it. Count the whole crew, then make sure the crew gets a vote.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `Two accounts of the grocery work`,
        alt: `A trip-only account omits list planning; a shared-work account includes planning, shopping, stocking, and household choices.`,
        caption: `Count the people in each column: one account credits a single carrier, the other credits the planner, the paid stocker, and the housemates whose preferences steer the list. Nothing here converts any task into an unlimited duty.`,
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
        `Pick one household routine, laundry, bins, a shared meal, and write it as four stages: preparation, coordination, the visible work, and follow-up. Most routines turn out to have all four once you look.`,
        `Beside each stage, mark who actually supplies it, including any paid worker in the chain and your own share. Keep it factual and keep other people's private details off the page.`,
        `Add two more lines: who receives the support, and who decides what is wanted. Then circle one overlooked task or one preference nobody has asked about recently.`,
        `Draft the conversation for one specific, voluntary change: either a redistribution of the noticing, or a genuine request for someone's preferences. Assign nobody new work on paper; that happens only by agreement.`,
      ],
      notice: `Your map shows work that was invisible a page ago, and it ends with the supported person holding a vote rather than a thank-you card.`,
      troubleshooting: `If your proposed change still leaves one person as the one who notices everything, it is help more in disguise. Name explicitly who will notice, who will plan, and who will do the next step.`,
    },
    recall: {
      prompt: `A friend organizes every detail of a group outing and is warmly thanked for being so naturally organized. What would a care-based conversation add to the thanks?`,
      hint: `Praise can hide labor and assume consent at the same time.`,
      answer: `It would name the actual tasks, the venue hunting, the headcount, the chasing of replies, and then ask the question the praise skipped: do you want to keep doing these? Naturally organized is a compliment that quietly makes the labor look effortless and permanent. The conversation offers a specific division, maybe one person books and another collects money, while keeping everyone's preferences about the outing in play. Thanks is fine. Thanks plus a real choice about future work is care.`,
    },
    quiz: {
      question: `An arrangement meets a person's need but routinely ignores their preferences. What does care ethics ask you to examine?`,
      options: [`The recipient's voice and the balance of power inside the arrangement.`, `Only whether the helper is working hard enough.`, `Whether gratitude can stand in for discussing preferences.`],
      correctIndex: 0,
      explanation: `The lens treats the relationship as part of the moral picture, so a need met over someone's head is a real failure even when the task is done well. Grading only the helper's effort recreates the single-carrier account, and gratitude, however sincere, cannot substitute for the recipient's authority over their own life.`,
    },
    takeaway: `Behind every by myself stands a crew. Count them, redistribute the noticing by agreement, and keep a vote for the person being helped.`,
    sourceNote: `Care ethics and capability discussions provide philosophical background. This original household map does not assign automatic duties by gender, family role, or receipt of help.`,
  },
  {
    id: 'perspective-019',
    outcome: `Let one interest exist without a job description, and notice when the demand for usefulness is quietly hijacking it.`,
    scene: `An amateur draws imaginary islands without turning the page into portfolio content.`,
    sections: [
      {
        title: `A hobby receives a job description`,
        paragraphs: [
          `You have an old notebook where you draw imaginary islands: coastlines, little harbors, a mountain where one seems due. It has been quietly enjoyable for years. Then, without any decision you can remember making, questions move in. Is this page improving my portfolio? Could it sell as a print? Should I post it as a progress update?`,
          `None of those questions is bad; portfolios, prints, and progress posts are all real projects. But notice what they did to the islands. The activity's terms changed. A page that was interesting to make is now a failed asset unless it produces something measurable beyond the making. The hobby got a performance review it never applied for.`,
        ],
      },
      {
        title: `Useless according to whom?`,
        paragraphs: [
          `The ancient Daoist text known as the Zhuangzi keeps poking at narrow ideas of usefulness through stories and shifting viewpoints, most famously a gnarled, knotted tree that no carpenter wants and that, for exactly that reason, grows old and vast and shades travelers. Useless for planks; magnificent for shade. The question hiding in the story is: useful for whose purpose?`,
          `Philosophers call value that something has as a means to a further end instrumental value. Drawing can have plenty of it: it can build a portfolio, earn money, impress people. The lens does not deny that. It denies that instrumental value is the only kind, and it asks whose end was silently appointed as the standard when something got called a waste of time. Read the borrowing modestly: interpretations of the text vary, this is no summary of Daoism, and nobody is being told to abandon practical purposes. One exclusive measuring stick is being questioned, not all measuring.`,
        ],
      },
      {
        title: `Let one page remain a private interest`,
        paragraphs: [
          `So run the small experiment. For one period of genuinely spare time, draw a coastline and add whatever features interest you, and nothing else. No promise to finish the map, no post, no price, no comparison with yesterday's island. If you want a portfolio project later, you can choose one on purpose; it just will not be this page.`,
          `The standard was always fine for the projects that actually have it. The trouble was its creeping claim to every page in the notebook. One page back under its own terms is a small reclamation, and it is enough to feel the difference.`,
        ],
      },
      {
        title: `The sneakiest way to lose the experiment`,
        paragraphs: [
          `Watch for the quiet relapse: justifying the private page by its payoff. Drawing for fun will recharge me so I am more productive tomorrow. That sentence sounds relaxed and is the same job description in a softer font; it still demands that the islands earn their keep, just on a longer invoice. A beneficial feeling is welcome if it arrives. It is not required, and measuring it defeats the purpose.`,
          `Keep the fences sensible in the other direction too. Agreed responsibilities and other people's needs stay exactly where they were; this is about a slice of discretionary time, not a license to skip things. Within that slice, though, the page may stay private and unfinished and unposted, without needing to defend itself as an investment. The knotted tree never applied to be a plank.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: `The same island, different demands`,
        alt: `A portfolio standard requires progress; a private drawing interval has no promised output.`,
        caption: `Compare what each column requires of the identical drawing. Neither kind of drawing is forbidden; the point is seeing the usefulness test when it claims exclusive rights.`,
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
        `Set aside a short period that does not displace anything you agreed to do. Pick drawing, or any accessible interest that has recently acquired a job description it did not ask for.`,
        `If drawing, make an irregular coastline on scrap paper and add features only as long as they interest you: a bay, a lighthouse, a river that goes nowhere useful. No finished map is required or even encouraged.`,
        `For this interval, explicitly leave out four things: a performance target, a public post, a sale plan, and a comparison with any earlier page. Write them on a corner of the paper, struck through, if it helps.`,
        `Stop when the time ends or the interest fades, whichever comes first, and write one line: which external demand did I not impose today? That line, not any feeling, is the record.`,
      ],
      notice: `One activity ran for a while on interest alone, with no promised career, income, or productivity return attached. Whether it felt restorative is beside the point and need not be reported.`,
      troubleshooting: `If you catch yourself rating how recharged you feel, the usefulness test has slipped back in through the side door. Return to the coastline or stop for today; a beneficial feeling was never the assignment.`,
    },
    recall: {
      prompt: `You sing privately and love it, but friends keep sending advice about monetizing your voice, and now every session feels like audition prep. What option does this lens open up?`,
      hint: `A possible use is not an obligatory justification.`,
      answer: `Reserve some of the singing as a private interest with no marketability test attached: sing because singing is interesting, and let that be the whole account. If you later want to pursue professional preparation, choose it separately and on purpose; nothing forbids it. What the lens dissolves is the false pair of options the advice created, where the hobby must become either a business or a failed one. The knotted tree was never a failed plank.`,
    },
    quiz: {
      question: `A private hobby produces no sellable work and no measured improvement. What follows from the perspective taught here?`,
      options: [`Those missing outputs do not, by themselves, show the activity lacks value.`, `Its value depends on proving that tomorrow's work becomes faster.`, `The hobby should become a public progress challenge to justify the time.`],
      correctIndex: 0,
      explanation: `The lens questions the assumption that instrumental output is the only kind of value, so the absence of such output settles nothing on its own. Demanding a productivity payoff tomorrow is the same test on a longer invoice, and converting the hobby into a public challenge reinstates the exact performance review the islands were escaping.`,
    },
    takeaway: `Useful for whose purpose? Let one interest stay off the invoice, and watch for the payoff argument sneaking it back on.`,
    sourceNote: `The Zhuangzi entry describes diverse interpretations of usefulness and perspective. This original private-drawing exercise is not a complete account of Daoism or a productivity intervention.`,
  },
  {
    id: 'perspective-020',
    outcome: `Judge a shared rule by whether it can be justified to each person living under it, not just by how many hands go up.`,
    scene: `A rehearsal studio compares a fixed cleanup morning with two feasible cleanup windows.`,
    sections: [
      {
        title: `A popular rule carries an uneven burden`,
        paragraphs: [
          `A shared rehearsal studio needs a cleanup routine, and the proposal on the table is simple: everyone cleans Saturday morning. Hands go up around the room. One member does not raise a hand. He works night shifts, and Saturday morning is the sleep he survives on. He could clean Friday evening instead, and in this fictional studio, the building is open then and the same tasks could be done just as well.`,
          `The vote is in and the vote is clear. But notice what the count actually measured: which proposal is popular. It said nothing about whether putting a real, avoidable cost on one person is justified by a small convenience for everyone else. Those are different questions, and the raised hands only answered the first.`,
        ],
      },
      {
        title: `A rule you could defend to each person`,
        paragraphs: [
          `The philosopher T. M. Scanlon proposed a test for rules that cuts underneath vote-counting: a principle is acceptable if nobody who has to live under it could reasonably reject it. Picture going around the room and justifying the rule to each member individually, face to face, including the night worker. Could you make the case to him? Not to the room; to him.`,
          `Two guardrails keep this from collapsing. A principle means a general rule, not whichever outcome you happen to prefer this week. And reasonable rejection is not an unlimited veto; it concerns burdens that others must take seriously, not every passing preference. The method is comparative: line up the feasible alternative rules, look at the strongest complaint each one would generate, and favor the rule whose worst complaint is weakest. A large pile of small conveniences does not automatically outweigh one serious objection, and that is exactly the arithmetic a hand-count gets wrong.`,
        ],
      },
      {
        title: `Compare the burdens of feasible alternatives`,
        paragraphs: [
          `So the group lays out two rules. Fixed: everyone cleans Saturday morning. Choice: each member cleans either Friday evening or Saturday morning and records the tasks completed. The matrix in the diagram shows each rule from both seats. Under fixed, the day workers get a convenient shared morning and the night worker loses needed sleep despite a workable alternative sitting right there. Under choice, the day workers can keep Saturday, and the night worker takes Friday.`,
          `The choice rule is not free. It adds coordination, so the group checks that tasks will not be skipped or done twice, which is what the recording step is for. But it answers the serious burden without creating a comparable one for anyone else. That is a strong reason to favor it. It is not proof that every flexible rota everywhere is fair; the conclusion is exactly as wide as the stated conditions.`,
        ],
      },
      {
        title: `Ask the real people`,
        paragraphs: [
          `The matrix was built from imagined circumstances, and imagined circumstances are where the method runs out. After the comparison, the group asks the actual members what the example misses: another shift pattern, a caring duty, someone for whom recording tasks on a phone is itself a barrier. Silence is not agreement, especially from the people a rule burdens most, who are often the least likely to object out loud.`,
          `And guard the other flank. If every stated preference became a veto, nothing could ever be decided, so when someone objects, ask what serious reason stands behind it and what burdens the alternatives would shift onto others. A rule justified to each person is the goal. A vote count and an unlimited veto are two different ways of never actually doing that justification.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: `Cleanup rule by participant position`,
        alt: `The matrix compares fixed and flexible cleanup for two work schedules.`,
        caption: `Find the worst cell in each row: the fixed rule's worst case is lost sleep, the choice rule's worst case is some recording effort. Comparing worst complaints is the method. Both windows are feasible in this fictional setup.`,
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
        `Take a shared task, real or invented, and draft two general rules for it, each including how the group would know the work got done. A rule without a completion check is a hope.`,
        `For each rule, write the single strongest objection one affected person could raise, and name the burden behind it: lost sleep, lost income, an inaccessible step. Rank the two burdens by seriousness, not by how many people share them.`,
        `Check whether the rule with the lighter worst-complaint shifts a comparable burden onto anyone else. If it does not, you have your reason to favor it; label every imagined circumstance as hypothetical.`,
        `Write the questions you would put to the actual participants, in a format they can all use, before adopting anything. The matrix was rehearsal; this is the performance.`,
      ],
      notice: `Your reasoning addresses the particular person a popularity count would have hidden, and it ends by consulting real people rather than crowning the imagined winner.`,
      troubleshooting: `If every preference on your page has become a veto, you have swapped one failure for another. Ask what serious reason supports each objection and what the alternatives would cost others; the method compares burdens, it does not collect complaints.`,
    },
    recall: {
      prompt: `In a shared kitchen, the agreed shelf for communal supplies is one that a wheelchair-using housemate cannot reach. How do you compare that rule with an accessible allocation?`,
      hint: `Compare each person's strongest objection under both feasible rules.`,
      answer: `Go around the room with both rules. Under the current shelf, one housemate's objection is that they cannot use the communal supplies at all, which is a serious burden, not a preference about tidiness. Under an accessible shelf, ask what the strongest objection would be, probably that someone else must bend a little further or that a cupboard gets reshuffled, a much lighter complaint. The accessible allocation answers a serious burden without imposing a comparable one, so it wins the comparison. Then confirm with the actual housemates, including the one affected, rather than assuming your matrix captured their kitchen.`,
    },
    quiz: {
      question: `Most members prefer a rule, but one member raises a serious objection and points to a feasible alternative. What should the group do next?`,
      options: [`Treat the majority count as a complete justification.`, `Compare that member's reasons against the burdens the alternative would create.`, `Treat any stated objection as an automatic, permanent veto.`],
      correctIndex: 1,
      explanation: `Justifying a rule to each person means weighing the serious objection against what the alternative would cost others, which is the comparison that actually settles it. A majority count never performed that comparison, and an automatic veto skips it from the other direction by refusing to weigh anything at all.`,
    },
    takeaway: `Go around the room, not just around the vote. Favor the rule whose worst complaint is lightest, then ask the real people what your matrix missed.`,
    sourceNote: `Scanlonian contractualism is contested. This original cleanup example illustrates individual justification; it neither establishes universal agreement nor replaces consultation.`,
  },
]