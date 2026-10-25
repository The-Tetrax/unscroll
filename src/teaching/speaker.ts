import type { LessonGuide } from './types'

// Original practice speeches, not quotations from the linked speakers.
// Existing lesson references are inherited. Examples and numbers are hypothetical.
// Practice minutes and demonstration timings are planning budgets, not tested doses.
export const speakerGuides: LessonGuide[] = [
  {
    id: 'speaker-001',
    outcome: 'Choose a listener task and write an introduction that prepares people to do it.',
    scene: 'Introducing an original short story at a library reading evening.',
    sections: [
      {
        title: 'Before the first page',
        paragraphs: [
          `At a fictional library reading, you introduce a story about Leela finding an unopened letter in a returned book. Your first draft describes your writing course, the library building, and how long the story took. Those facts concern you. They do not tell listeners what kind of attention the reading invites. For this introduction, choose one task: afterward, listeners should be able to explain why Leela returns the letter without opening it. You need not reveal her decision before the reading begins.`,
        ],
      },
      {
        title: 'A task chooses the details',
        paragraphs: [
          `A listener task names something people can explain, distinguish, or decide, rather than a feeling you hope to produce. It gives you a way to select information. Here the relevant details are who finds the letter, why opening it is tempting, and what choice to follow. The building's history can wait. Aristotle's account of rhetoric attends to the judgment an audience is asked to make. Turning that attention into a small rehearsal task is a modern planning adaptation, not his prescribed template for literary readings.`,
        ],
      },
      {
        title: 'An introduction someone can use',
        paragraphs: [
          `Try this original wording: "Leela finds a sealed letter addressed to someone she misses. As I read, notice what makes her hesitate before opening it. We can compare our readings afterward; there is no required interpretation." This supplies a situation and a question without explaining the ending. In rehearsal, ask what the listener expects to follow. If they say only "a story about books," make the choice more explicit. Different interpretations after the reading are welcome. The check concerns whether your invitation was understandable, not whether listeners reached your preferred judgment.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'The introduction from a listener’s side',
        alt: 'The reader offers a choice to follow; a listener paraphrases that choice.',
        caption: 'This invented rehearsal checks the invitation, not agreement about the story.',
        items: [
          { label: 'Reader', detail: 'Leela finds a sealed letter. Notice what makes her hesitate before opening it.' },
          { label: 'Listener', detail: 'I am following whether she opens it, and why she might choose not to.' },
          { label: 'Reader', detail: 'Yes. We can compare different interpretations after the reading.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper and pen'],
      steps: [
        `Use this invented synopsis: Leela finds a letter, recognizes the addressee, and returns it unopened. Choose what listeners should explain afterward.`,
        `Write a two-sentence introduction naming the situation and one thing to listen for, without announcing the ending.`,
        `Read it aloud. Write the question a newcomer would expect the story to address.`,
        `Compare that question with your task. Remove one detail that serves neither, or revise the invitation if they differ.`,
      ],
      notice: 'Your introduction and the expected listener question concern the same choice.',
      troubleshooting: 'If the task is just "enjoy it," name a character decision listeners could discuss.',
    },
    recall: {
      prompt: 'You introduce a cooking demonstration about substituting ingredients. What listener task would guide your opening?',
      hint: 'Choose a distinction they can use, not a feeling about the chef.',
      answer: 'Ask listeners to distinguish substitutions that change texture from those that change flavor. Introduce one example of that distinction rather than the chef’s whole biography.',
    },
    quiz: {
      question: 'New volunteers must distinguish book returns from donations. Which opening fits that task?',
      options: [
        'Describe how the collection has grown before discussing either desk.',
        'Name both desks and explain which kind of book belongs at each.',
        'Explain the full sorting process before mentioning where books arrive.',
      ],
      correctIndex: 1,
      explanation: 'The desk distinction prepares the required choice. Collection history and sorting details can be useful later, but neither directly explains where to go.',
    },
    takeaway: 'Select details by what listeners need to understand or decide.',
    sourceNote: 'Aristotle informs the audience focus. The literary interpretation and rehearsal are original, not an experimentally validated teaching method.',
  },
  {
    id: 'speaker-002',
    outcome: 'Write an audible outline and transitions that remain useful without slides.',
    scene: 'Giving a short tour of handmade prints in a small gallery.',
    sections: [
      {
        title: 'A tour without visible headings',
        paragraphs: [
          `You are rehearsing a fictional gallery tour. You start beside a print, discuss the paper, mention the frame, and return to the printing process. A listener who cannot see your pointing has no signal that the subject changed. The facts might all belong, but their relationship is difficult to follow. An audible outline tells people what the parts are. A transition announces when you move between them. Both need words that mean something without a slide number or a gesture.`,
        ],
      },
      {
        title: 'An inspectable speaking choice',
        paragraphs: [
          `In the published text of his 2005 Stanford address, Steve Jobs announces three autobiographical stories and marks their beginnings. Those verbal section markers are present in the source. Calling them helpful for orientation is an interpretation you can test in your own rehearsal, not proof that three stories cause persuasion. Your gallery tour needs only two parts: how this print was made and how its display changes what visitors notice. Do not add a third subject just to copy a famous speech's count.`,
        ],
      },
      {
        title: 'Say the change of subject',
        paragraphs: [
          `Open with: "First I will explain how the ink reached this paper. Then we will look at the frame and the space around the image." After the process explanation, say: "That covers making the print. Now keep the same image in mind while we consider its frame." The shared image connects the sections; the verbs distinguish their jobs. Rehearse facing away from your imaginary display. Ask a listener, or inspect a recording, for the point where making becomes displaying. If that point is missing, repair the transition rather than adding another heading to a slide.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A spoken route through the print',
        alt: 'An opening names making and display, followed by a sentence introducing each part.',
        caption: 'These are original tour lines. The arrows indicate speaking order, not a required number of sections.',
        items: [
          { label: 'Opening route', detail: 'First, how ink reached this paper. Then, the frame and the space around the image.' },
          { label: 'Making the print', detail: 'Start with the paper: it received ink from the prepared surface.' },
          { label: 'Changing the subject', detail: 'That covers making the print. Now consider its frame around the same image.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'A drawing or imagined print'],
      steps: [
        `Name two parts of a tour of your drawing: how you made it and how you would display it.`,
        `Write an opening that names both parts, followed by one explanatory sentence for each.`,
        `Add a transition that closes the first subject and names the second. Avoid "as you see here."`,
        `Read without pointing. Mark every place where a listener would need a visual heading, then add the missing spoken cue.`,
      ],
      notice: 'The listener can name both parts and locate the change between them.',
      troubleshooting: 'If transitions say only "next," replace that word with the actual new subject.',
    },
    recall: {
      prompt: 'An audio-only induction covers borrowing equipment and returning it. How would you mark the change?',
      hint: 'Close one listener task before introducing the next.',
      answer: 'Say, "That explains collecting your equipment. Now I will cover checking it back in." This makes the boundary audible without assuming anyone sees the checklist.',
    },
    quiz: {
      question: 'A rehearsal partner loses the route when slides disappear. What revision addresses that finding?',
      options: [
        'Add more section titles to the slides for later reference.',
        'Tell a third story to match a successful commencement address.',
        'Name the sections aloud and announce each change of subject.',
      ],
      correctIndex: 2,
      explanation: 'Spoken markers address the missing audio information. Extra slide headings remain invisible, and copying a section count does not explain the route.',
    },
    takeaway: 'Let listeners hear both the outline and the section changes.',
    sourceNote: 'Stanford publishes the announced stories and transitions. Their usefulness here is an interpretive application, not evidence about Jobs’ rehearsal or universal structure.',
  },
  {
    id: 'speaker-003',
    outcome: 'Pitch a change by comparing the same task before and after, with conditions intact.',
    scene: 'Proposing a shared booking sheet for a film club’s tripod.',
    sections: [
      {
        title: 'Describe the present without inflating it',
        paragraphs: [
          `A fictional film club shares one tripod. Members currently ask in a group chat whether it is free. Your project pitch proposes a booking sheet. "Our system is chaos" says little about the actual task and insults people who manage it successfully. A bounded opening is more useful: "To find an available evening, we currently search the chat or ask the last borrower." The problem is finding current availability, not proving that everything about the club is broken.`,
        ],
      },
      {
        title: 'Keep the comparison on one task',
        paragraphs: [
          `Nancy Duarte's talk analyzes movement between present circumstances and a possible future. That is her interpretive framework for speeches, not experimental evidence of a universal persuasive effect. Adapt the contrast without enlarging the gap beyond your evidence. Your next line could be: "A shared sheet would put the requested evening and return time in one place, if borrowers update it." You have described where information would live. You have not shown that the tripod will always be available or that messages will disappear.`,
        ],
      },
      {
        title: 'Let the condition affect the proposal',
        paragraphs: [
          `Continue: "Chat still lets us negotiate changes quickly. The sheet would need an update whenever a return changes. I propose a two-week trial, with a paper booking option through the club organizer." Those are invented planning choices, not measured benefits.`,
          `If someone asks whether late returns vanish, answer no: the record and the return are different things. This limitation belongs in the pitch, not in an apology afterward. End the comparison with a testable question: during the trial, can members find the next available slot from the record, and where does it become inaccurate?`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Finding the same free evening',
        alt: 'Chat searches and a proposed sheet offer different ways to find tripod availability.',
        caption: 'The proposed column is conditional, not a measured result.',
        items: [
          { label: 'Current chat', detail: 'Search messages or ask the borrower. Changes can be negotiated in the conversation.' },
          { label: 'Proposed sheet', detail: 'Read the slot and return time. This works only while borrowers keep the record current.' },
        ],
      },
      {
        type: 'dialogue',
        title: 'A limit kept inside the pitch',
        alt: 'A member asks about late returns; the presenter distinguishes a record from a guarantee.',
        caption: 'Original exchange about the same tripod proposal.',
        items: [
          { label: 'Member', detail: 'Does the sheet prevent late returns?' },
          { label: 'Presenter', detail: 'No. It records plans; we still need to agree changes and update them.' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Paper and pen'],
      steps: [
        `Draw columns for the chat and proposed sheet. Compare only finding the next free tripod slot.`,
        `Write one spoken sentence for each column, keeping the future conditional.`,
        `Add who must update the sheet and how someone without digital access can book.`,
        `Read the pitch and underline any claimed benefit a trial would still need to check. Rewrite it as a question.`,
      ],
      notice: 'Both sides concern availability, and the proposal names its maintenance condition.',
      troubleshooting: 'If the future sounds certain, specify what must happen before its benefit follows.',
    },
    recall: {
      prompt: 'You propose advance meal orders at a club lunch. How would you contrast them with ordering on arrival?',
      hint: 'Separate moving a step from proving a shorter queue.',
      answer: 'Say advance orders move selection earlier if people submit and staff receive them. Whether serving becomes quicker remains a trial question.',
    },
    quiz: {
      question: 'A booking trial has not started. Which pitch sentence is supportable?',
      options: [
        'The sheet would collect availability in one place if kept current.',
        'The sheet will save time because it removes the chat search.',
        'The sheet is preferable because several members already like it.',
      ],
      correctIndex: 0,
      explanation: 'The first describes a conditional mechanism. Saved time needs checking; support from some members does not settle usability or maintenance.',
    },
    takeaway: 'Compare the same task, and keep future benefits conditional.',
    sourceNote: 'Duarte supplies contrast analysis. Fair comparisons and the trial are original adaptations, not tested outcomes or claims of universal persuasion.',
  },
  {
    id: 'speaker-004',
    outcome: 'Turn an abstract description into a specific scene without making it prove too much.',
    scene: 'Drafting a wedding toast about a couple’s consideration for guests.',
    sections: [
      {
        title: 'What does considerate look like?',
        paragraphs: [
          `A draft wedding toast calls Nila and Arun "wonderful, thoughtful, and generous." Guests hear approval, but no event tells them what you mean. For this fictional toast, use a small lunch that moved indoors when rain arrived. A guest came late after a long journey. Nila kept a plate aside; Arun made room beside the people the guest knew. The scene supplies actions, objects, and a consequence. You do not need a dramatic rescue or an embarrassing secret to make the description concrete.`,
        ],
      },
      {
        title: 'Explain the scene’s job',
        paragraphs: [
          `A concrete scene shows how an abstract description applies. It does not establish how someone behaves on every occasion. "They noticed what a late guest needed" fits the described actions. "They have never let anyone down" goes beyond them. In a real toast, use an event you can recount accurately and that the people involved are comfortable sharing. If you have invented this exercise's lunch, keep it labeled fictional; do not perform it as your personal memory. Warmth does not require presenting invention as evidence.`,
        ],
      },
      {
        title: 'An original toast passage',
        paragraphs: [
          `Try: "When our lunch moved inside, Nila saved a plate for the late arrival. Arun made space beside familiar faces. I think of that afternoon when I say they notice who has not yet been included." The last sentence is the speaker's interpretation of the actions, not a measurement of character.`,
          `Jobs' Stanford address similarly connects a general reflection on learning to his account of studying calligraphy. That autobiographical example is inspectable in the text. It does not prove that taking an unusual course causes later success, or that your toast needs his subject or language.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The lunch scene inside the toast',
        alt: 'A lunch moves indoors, a plate and place are kept, and the speaker interprets the welcome.',
        caption: 'These fictional actions support a bounded interpretation, not a verdict on the couple’s whole character.',
        items: [
          { label: 'The situation', detail: 'Rain moved lunch indoors. One guest was still traveling.' },
          { label: 'The visible actions', detail: 'Nila saved a plate. Arun made space beside familiar faces.' },
          { label: 'The speaker’s reading', detail: 'That afternoon is why I say they notice who has not yet been included.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Use the fictional lunch above. Write "considerate" and list the two actions that make that description understandable.`,
        `Draft three spoken sentences: the situation, the actions, and your interpretation. Keep them separate from a claim about every occasion.`,
        `Read the toast and cross out any universal claim such as "always." Keep the fictional label unless replacing the scene with a suitable real memory.`,
      ],
      notice: 'Someone can point to the action behind your description, while its limits remain visible.',
      troubleshooting: 'If the passage is still all adjectives, name what a person did with a specific object.',
    },
    recall: {
      prompt: 'You call a website confusing during a design review. What scene could clarify that claim without inventing user research?',
      hint: 'Describe one attempt and say whose attempt it was.',
      answer: 'Describe your own attempt to find the opening time and the links you followed. It illustrates your difficulty, not how often all visitors struggle.',
    },
    quiz: {
      question: 'A fictional story shows a visitor missing an unsigned doorway. What can the speaker reasonably say?',
      options: [
        'The story establishes that missing signs are the usual cause of lateness.',
        'The story illustrates how a missing sign could affect this arrival.',
        'The story confirms that adding a sign will solve the venue’s delays.',
      ],
      correctIndex: 1,
      explanation: 'The scene clarifies a possible mechanism. Frequency and the effect of a proposed fix need evidence beyond an invented example.',
    },
    takeaway: 'Show the action behind the description, then bound the interpretation.',
    sourceNote: 'Jobs’ calligraphy account is autobiographical, not causal proof. The toast is original fiction; its reading of consideration is explicitly subjective.',
  },
  {
    id: 'speaker-005',
    outcome: 'Check a proposal’s presented credibility, human consequences, and reasoning separately.',
    scene: 'Requesting a caption check before a community film screening.',
    sections: [
      {
        title: 'One proposal, different kinds of support',
        paragraphs: [
          `At a fictional screening meeting, you ask for a caption check before the event. "Trust me, audiences deserve better" combines a request for trust with an emotional appeal, but leaves the actual work unclear. You have reviewed the opening of one film and found that its file includes captions. You have not tested whether the venue's player displays them. That distinction is the useful starting point. Knowing a file contains captions is different from knowing what the audience will receive during projection.`,
        ],
      },
      {
        title: 'Three questions for the draft',
        paragraphs: [
          `Aristotle distinguishes persuasion through the speaker's presented character, the listener's emotions, and the argument. The familiar names are ethos, pathos, and logos. In plain terms, ask why this speaker should be relied on here, why the issue matters to people, and what supports the recommendation. These categories do not certify truth. A genuine qualification does not repair a weak inference. A moving consequence does not establish how often it occurs. Numbers also need context.`,
        ],
      },
      {
        title: 'Give each sentence a checkable job',
        paragraphs: [
          `Say: "I checked that this film file includes captions, but not the venue playback. If the captions fail, a viewer relying on them loses the dialogue. I propose testing a short passage on the event player before we advertise caption access." The first sentence bounds your experience. The second names a relevant consequence without inventing a person's distress. The third connects the untested condition to a specific check. Listen to the proposal with the emotional sentence removed: does the recommendation still have a reason? Then restore the human consequence without making it stand in for that reason.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Three sentences in the caption proposal',
        alt: 'The same proposal contains bounded experience, an access consequence, and a reason for testing playback.',
        caption: 'Original speaking order, not a required formula. Check what each sentence supports.',
        items: [
          { label: 'Experience and limit', detail: 'I checked the film file, but not playback at the venue.' },
          { label: 'Human consequence', detail: 'A viewer relying on captions loses dialogue if they do not display.' },
          { label: 'Reason for the request', detail: 'Test the event player before advertising that this screening has captions.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Three different pen marks'],
      steps: [
        `Copy the original three-sentence caption proposal. Mark experience with a circle, consequences with an underline, and reasoning with brackets.`,
        `Check what the speaker inspected and what remains untested. Keep that boundary in the first sentence.`,
        `Read the recommendation without the emotional consequence. Write the practical reason for the requested check.`,
        `Restore the consequence and remove any claim about how every viewer will feel. Keep the three marked functions visible.`,
      ],
      notice: 'The request has a reason even when the appeal to feeling is removed.',
      troubleshooting: 'If credibility means only "I care," add relevant experience and its limit, without inventing expertise.',
    },
    recall: {
      prompt: 'You propose a shaded rest area at a craft fair. How would you review the speech without treating concern as proof?',
      hint: 'Separate your observations, the human consequence, and the proposed response.',
      answer: 'State what you observed about the site, explain why rest options matter, and check whether the proposed area is usable. Caring about visitors does not verify that location.',
    },
    quiz: {
      question: 'A moving library appeal includes no reason that later opening addresses the reported problem. What needs revision?',
      options: [
        'The link between the problem and the proposed opening hours.',
        'The balance, so each rhetorical category occupies equal time.',
        'The biography, so the audience hears more about the speaker.',
      ],
      correctIndex: 0,
      explanation: 'The missing link concerns reasoning. Equal time is not a requirement, and a longer biography cannot establish that later hours address the need.',
    },
    takeaway: 'Check trust, consequences, and reasons without letting one substitute for another.',
    sourceNote: 'Aristotle supplies analytical categories, not a persuasion formula. The caption proposal is an original ethical review, not a tested intervention.',
  },
  {
    id: 'speaker-006',
    outcome: 'Expose the assumption connecting a fact to a recommendation and check alternatives.',
    scene: 'Deciding whether a zine fair needs more display panels.',
    sections: [
      {
        title: 'The missing step after therefore',
        paragraphs: [
          `In a hypothetical zine fair, twelve contributors have registered and eight display panels are available. You announce, "We have twelve contributors, so we need four more panels." The subtraction is correct only for a particular arrangement: each contributor needs a separate panel at the same time. Perhaps some want to share, or the program could rotate displays. Your sentence has compressed those planning choices into an apparently inevitable conclusion. A listener cannot assess the recommendation unless the important assumption is available to inspect.`,
        ],
      },
      {
        title: 'State the link in ordinary language',
        paragraphs: [
          `A premise is a statement an argument relies on. Here the missing premise is that each of the twelve contributors needs one panel simultaneously. With that condition, demand is twelve panels; twelve minus eight leaves a shortage of four. Without it, contributor count alone does not give panel demand. Aristotle's treatment of rhetorical argument invites attention to the relationship between premises and conclusions. An enthymeme is a rhetorical argument, not simply a fancy name for any sentence with a missing assumption. Its interpretation has a longer scholarly history.`,
        ],
      },
      {
        title: 'Make the recommendation conditional',
        paragraphs: [
          `Try: "If everyone displays separately throughout the fair, twelve entries need twelve panels. We have eight, leaving four to borrow. Before arranging that, I will ask whether anyone prefers sharing or a scheduled display." You have kept the arithmetic while reopening the arrangement. Suppose the imagined group agrees that four pairs can share, while the remaining four contributors display alone. Four shared panels plus four individual panels use the eight available. That alternative does not prove sharing is preferable; it shows why the original assumption matters. Space, legibility, and contributors' preferences still belong in the decision.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Panel demand depends on the arrangement',
        alt: 'Separate displays need twelve panels; eight are available; the described sharing arrangement needs eight.',
        caption: 'Hypothetical counts: four pairs plus four solo contributors use eight panels for twelve contributors.',
        unit: 'display panels',
        items: [
          { label: 'Separate displays', detail: 'Twelve contributors, one panel each, all at once.', value: 12 },
          { label: 'Available', detail: 'Eight panels already available to the fair.', value: 8 },
          { label: 'Sharing arrangement', detail: 'Four paired panels plus four solo panels.', value: 8 },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper and pen'],
      steps: [
        `Write the claim: twelve contributors and eight panels mean four more panels are needed. Circle the conclusion.`,
        `Add the condition that makes the subtraction relevant: one separate panel per contributor at the same time.`,
        `Sketch four paired displays and four solo displays. Count contributors and panels separately.`,
        `Draft a spoken recommendation that states the condition and asks about sharing before arranging more panels.`,
      ],
      notice: 'Both arrangements account for twelve contributors, but their panel requirements differ.',
      troubleshooting: 'If you count four pairs as four people, draw two initials on every shared panel.',
    },
    recall: {
      prompt: 'A class has grown, so someone recommends a second tutor. What premise should the speaker examine?',
      hint: 'An increase does not identify the limiting resource by itself.',
      answer: 'Check whether available teaching attention is insufficient for the planned activities, and whether another tutor addresses that constraint better than changing grouping or scheduling.',
    },
    quiz: {
      question: 'A workshop has ten people and six tools. What must be checked before claiming four more tools are necessary?',
      options: [
        'Whether earlier workshops had fewer people than this one.',
        'Whether borrowing four tools costs less than buying them.',
        'Whether everyone needs a separate tool at the same time.',
      ],
      correctIndex: 2,
      explanation: 'Simultaneous separate use connects attendance to tool demand. Past attendance and borrowing costs do not establish that four additional tools are needed.',
    },
    takeaway: 'Make the contested premise audible before treating a recommendation as settled.',
    sourceNote: 'Premise checking draws on Aristotle’s rhetorical arguments. The panel calculation is hypothetical; not all enthymemes are defined by omitted premises.',
  },
  {
    id: 'speaker-007',
    outcome: 'Keep a personal account attached to its teller instead of generalizing it to a community.',
    scene: 'Introducing recorded stories for a local oral-history exhibition.',
    sections: [
      {
        title: 'A headline larger than its evidence',
        paragraphs: [
          `A fictional oral-history exhibition includes Leena's account of arriving in town. She recalls lonely evenings before meeting people at a sewing group. Your introduction says, "Newcomers here have nobody." The line is memorable, but it turns one person's account into a condition shared by everyone who moves. Another participant, Yusuf, describes arriving to stay with relatives and cooking with neighbors. His account does not erase Leena's loneliness. It changes what you can responsibly claim about newcomers as a whole.`,
        ],
      },
      {
        title: 'More than a balancing anecdote',
        paragraphs: [
          `Chimamanda Ngozi Adichie's The danger of a single story examines how narrow, repeated narratives can flatten people and places. She draws on personal accounts and contrasts different stories. This is a speaker's argument about narrative representation, not a controlled test of an exhibition script. Applying it does not mean manufacturing a cheerful story for every difficult one. Ask whose experience you have, when it occurred, and who has not been heard. Multiple accounts still do not automatically form a representative sample, and nobody owes a presenter personal disclosure.`,
        ],
      },
      {
        title: 'Introduce two people, not one identity',
        paragraphs: [
          `Say: "Leena describes evenings alone during her first month here. Yusuf remembers joining relatives and neighbors for meals. These are two participants' accounts, shared with permission; they are not a survey of everyone who has moved to town." For a real exhibition, confirm permission for the intended use and preserve each teller's meaning. If you only have Leena's account, say so rather than inventing Yusuf. You can invite additional voluntary contributions without promising they will confirm your theme. A narrower introduction keeps the account meaningful while leaving room for experiences your collection does not contain.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two arrivals remain two accounts',
        alt: 'Leena remembers lonely evenings; Yusuf remembers meals with relatives and neighbors.',
        caption: 'Both people are fictional. Contrasting accounts illustrate scope, not the proportion of either experience in a town.',
        items: [
          { label: 'Leena’s first month', detail: 'Evenings felt lonely before I joined the sewing group.' },
          { label: 'Yusuf’s arrival', detail: 'I stayed with relatives and cooked with neighbors.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper and pen'],
      steps: [
        `Copy the fictional headline "Newcomers here have nobody" and the two accounts above. Underline the headline’s generalization.`,
        `Write an introduction naming whose experience each account describes and when. Keep the fictional label for this exercise.`,
        `List one missing perspective without inventing what that person would say.`,
        `Read your introduction. Remove any suggestion that two accounts establish what most newcomers experience; add a permission check for real use.`,
      ],
      notice: 'The introduction identifies individuals, time, and collection limits without canceling either account.',
      troubleshooting: 'If "some people" hides the scope, name the account and the occasion it describes.',
    },
    recall: {
      prompt: 'One apprentice describes an unhelpful mentor. How would you introduce the story in a careers discussion?',
      hint: 'Do not make one placement speak for an occupation.',
      answer: 'Identify it as that apprentice’s account of a particular placement, with permission. Explain that other placements have not been assessed rather than labeling all mentors.',
    },
    quiz: {
      question: 'You have one resident’s bus-route account and no broader survey. How should you introduce it?',
      options: [
        'Present it as an account of how the neighborhood experiences its buses.',
        'Wait for a positive account so both sides receive equal time.',
        'Identify the resident and journey, and say that wider experiences remain uncollected.',
      ],
      correctIndex: 2,
      explanation: 'State the account’s scope. One journey does not represent a neighborhood, and an opposite story is not required before sharing a bounded account.',
    },
    takeaway: 'Let a story describe its teller’s experience, not an entire group.',
    sourceNote: 'Adichie supplies the narrative critique. This application is interpretive; the exhibition and rehearsal are original fiction, not validated research on audiences.',
  },
  {
    id: 'speaker-008',
    outcome: 'Say the source and its evidential role beside the claim it supports.',
    scene: 'Explaining memory during a family-photograph discussion at a history club.',
    sections: [
      {
        title: 'A source listeners can hear',
        paragraphs: [
          `At a fictional history-club discussion, a family photograph prompts different memories of the same outing. You want to explain why recollection is not a recording. A slide says "Research proves our memories are wrong" with a small link underneath. That sentence overstates the point, and an audio-only listener misses the citation altogether. A useful spoken source tells people whose work you mean and what sort of support it supplies. It also leaves room for memories that are accurate rather than treating disagreement as proof of error.`,
        ],
      },
      {
        title: 'Match the claim to the source’s job',
        paragraphs: [
          `Cara Laney and Elizabeth Loftus's Noba chapter is an educational overview of eyewitness testimony and memory biases. It discusses research; it is not an experiment conducted with your club. You could say: "In their Noba overview, Laney and Loftus describe research on how later information can affect recollection." That names the authors, the resource, and the kind of evidence. Keep a full link in the handout, but do not make listeners wait for it to discover that your description was broader than the source supports.`,
        ],
      },
      {
        title: 'Mark where your own illustration begins',
        paragraphs: [
          `Follow with: "Here is an invented example, not a test of anyone here: after a picnic, someone mentions a red blanket, and another person begins to picture one." The scene illustrates a possible influence; it does not determine which relative remembers correctly or establish that the blanket was absent. If you offer a number, name whether it comes from a specific study, an estimate, or your hypothetical example. Leave out a figure you cannot check. A source's reputation cannot supply a missing connection between what it reports and what you say it demonstrates.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Where the evidence stops and illustration starts',
        alt: 'A spoken reference identifies a research overview before the presenter labels an invented picnic example.',
        caption: 'The sequence separates source role, supported topic, and original illustration.',
        items: [
          { label: 'Audible source', detail: 'In their Noba educational overview, Laney and Loftus describe memory research.' },
          { label: 'Bounded claim', detail: 'Later information can affect recollection; this does not mean every memory is false.' },
          { label: 'Original illustration', detail: 'Here is an invented picnic example about someone mentioning a red blanket.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The source description in this lesson'],
      steps: [
        `Write a spoken sentence naming Laney and Loftus, Noba, and the resource’s role as an educational overview.`,
        `Add the bounded claim about later information affecting recollection. Do not invent a percentage.`,
        `Introduce the picnic as an invented illustration, separate from the research description.`,
        `Read all three sentences without showing a slide. Mark whether a listener can distinguish review, claim, and illustration.`,
      ],
      notice: 'The evidence type and the invented example are identifiable from the speech alone.',
      troubleshooting: 'If "a study says" remains, replace it with the actual resource and its role.',
    },
    recall: {
      prompt: 'You cite one curator’s interview in a museum talk. How would you keep its scope audible?',
      hint: 'An interview is neither a survey nor your own experiment.',
      answer: 'Introduce it as that curator’s account from the interview and identify what it supports. Do not turn their experience into measured visitor behavior.',
    },
    quiz: {
      question: 'An audio presentation uses a guideline to justify a suggested routine. Which attribution fits?',
      options: [
        'Name the guideline beside the recommendation and call it guidance.',
        'Read the recommendation and leave the evidence type to the final link list.',
        'Describe the routine as tested because the guideline’s publisher is respected.',
      ],
      correctIndex: 0,
      explanation: 'The first makes the source’s role audible. A link list cannot repair an overstated claim, and guidance does not prove this routine was tested.',
    },
    takeaway: 'Name both the source and what kind of support it provides.',
    sourceNote: 'The inherited Noba overview supports the memory topic. Audible attribution is an original routine informed by rhetorical attention to claims and support.',
  },
  {
    id: 'speaker-009',
    outcome: 'Place a pause at a meaningful boundary and check what the listener understood.',
    scene: 'Explaining the end-of-turn rule of an invented card game.',
    sections: [
      {
        title: 'Two rules arriving as one rush',
        paragraphs: [
          `You are teaching a fictional card game. The rule is that drawing one card ends a turn, and that new card cannot be played until the next turn. You say both parts quickly while sorting the deck. A listener asks whether drawing starts another action. The issue is not a need for a more commanding voice. The instruction and its qualification have run together. First make the wording explicit, then consider whether a short boundary between the sentences makes their relationship easier to hear.`,
        ],
      },
      {
        title: 'Put the gap between complete ideas',
        paragraphs: [
          `Julian Treasure demonstrates pace and silence among speech tools in his TED talk. This offers examples to inspect, not a universal duration for an effective pause. For your game, say: "Draw one card to end your turn." Pause comfortably. Then say: "Keep that card until your next turn; you cannot play it now." The gap follows a complete instruction. Pausing halfway through "one card" would separate words that need to be heard together. A pause cannot rescue an ambiguous rule, so fix the sentence before rehearsing its timing.`,
        ],
      },
      {
        title: 'Check the rule rather than the performance',
        paragraphs: [
          `Ask a willing listener what happens after drawing, or record yourself and compare the two readings. If they understand the turn has ended but think the card can still be played, the qualification needs attention. Repeat that part plainly; do not keep lengthening the silence to pressure an answer. Give someone space to ask for repetition or use a written rule alongside speech. Fillers, accents, stammers, and different rhythms are not measures of intelligence. This rehearsal checks whether a particular instruction is received, not whether a speaker sounds like a professional narrator.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Where the pause divides the rule',
        alt: 'One reading splits the phrase one card; the other pauses after the complete turn-ending instruction.',
        caption: 'Pause marks show placement, not measured silence or a required speaking rhythm.',
        items: [
          { label: 'Phrase interrupted', detail: 'Draw one [pause] card to end your turn. Keep it until your next turn.' },
          { label: 'Instruction completed', detail: 'Draw one card to end your turn. [pause] Keep it until your next turn.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Optional private voice recorder'],
      steps: [
        `Copy the two-sentence game rule. Underline the action and circle the restriction on playing the new card.`,
        `Read it once without a deliberate boundary, then mark a pause after the complete instruction.`,
        `Read the marked version at a comfortable pace. Ask a willing listener to explain the next action, or compare recordings alone.`,
        `If the restriction is unclear, revise its words and repeat. Keep a written version beside the spoken rule.`,
      ],
      notice: 'The turn-ending instruction and the restriction remain distinct, complete thoughts.',
      troubleshooting: 'If the pause feels theatrical, shorten it and use clearer sentence boundaries instead.',
    },
    recall: {
      prompt: 'During a paper-folding demo, listeners start the next fold before seeing its direction. Where could you pause?',
      hint: 'Finish the current instruction before adding the next one.',
      answer: 'Pause after completing and showing the first fold, then explain the new direction. Check the demonstration’s wording and visibility rather than prescribing a fixed silence.',
    },
    quiz: {
      question: 'People confuse a confirmed date with a provisional backup date. Which delivery change fits?',
      options: [
        'Pause before every date but leave their status unstated.',
        'Name the confirmed date, pause, then explicitly label the backup provisional.',
        'Speak both dates faster so the comparison stays together.',
      ],
      correctIndex: 1,
      explanation: 'The words establish certainty and the pause separates the ideas. Timing alone does not tell listeners which date is provisional.',
    },
    takeaway: 'Use a pause to separate meaning, then check the meaning was received.',
    sourceNote: 'Treasure demonstrates pace and silence. This original rule rehearsal claims no ideal pause length or proven effect on authority or comprehension.',
  },
  {
    id: 'speaker-010',
    outcome: 'Choose vocal emphasis that matches the distinction listeners need to make.',
    scene: 'Clarifying which scarf performers should bring to a rehearsal.',
    sections: [
      {
        title: 'One sentence, different corrections',
        paragraphs: [
          `At a fictional theater rehearsal, performers need a plain scarf on Sunday. The date is settled, but someone plans to bring a patterned scarf. Say "Bring the plain scarf on Sunday" with a little emphasis on plain. Now imagine the opposite misunderstanding: the scarf is correct, but someone expects Saturday. The same sentence needs emphasis on Sunday instead. You have not changed the instruction's facts. You have changed which contrast the listener is invited to notice, and the surrounding conversation determines which contrast is relevant.`,
        ],
      },
      {
        title: 'Words must carry the distinction too',
        paragraphs: [
          `Prosody refers to patterns such as rhythm, stress, and intonation in speech. Treasure discusses and demonstrates vocal variation in his talk. Treat that demonstration as an option to rehearse, not a requirement to copy his sound. Stress alone can be missed or interpreted differently. Pair it with explicit wording: "Bring the plain scarf, not the patterned one. Sunday has not changed." A written reminder or caption should preserve that same distinction. People should not have to hear a subtle pitch change to receive the essential instruction.`,
        ],
      },
      {
        title: 'Keep certainty separate from emphasis',
        paragraphs: [
          `Suppose the director has not yet confirmed Sunday. An emphatic reading of the date must not turn a provisional plan into a promise. Say, "Sunday is proposed; I will share the confirmed date when it is agreed." The qualification belongs in the words, not a doubtful tone listeners must decode. During rehearsal, ask which detail changed and which remained the same. If the answer differs from your intention, change the sentence as well as the stress. A relatively flat voice is not evidence of dishonesty, and a lively voice is not evidence that a statement is true.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Which part of the scarf reminder changes?',
        alt: 'Emphasis on plain corrects the scarf choice; emphasis on Sunday corrects the date.',
        caption: 'The original sentence is identical; the labels identify the intended spoken stress, without requiring a particular accent.',
        items: [
          { label: 'Stress plain', detail: 'Bring the plain scarf on Sunday. Plain contrasts with patterned; the date is unchanged.' },
          { label: 'Stress Sunday', detail: 'Bring the plain scarf on Sunday. Sunday contrasts with Saturday; the scarf is unchanged.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper and pen'],
      steps: [
        `Write the scarf reminder twice. Above one copy write "wrong scarf"; above the other write "wrong day."`,
        `Underline the word that answers each misunderstanding and read both versions comfortably.`,
        `Add an explicit contrast to each version so the correction survives in plain text.`,
        `Change Sunday to an unconfirmed proposal. Rewrite the words so your strongest emphasis cannot imply a checked date.`,
      ],
      notice: 'Each version identifies the relevant correction and preserves whether the information is confirmed.',
      troubleshooting: 'If every word is emphasized, choose just the word answering the listener’s misunderstanding.',
    },
    recall: {
      prompt: 'Someone sends a draft instead of a signed form, but the deadline is unchanged. How would you phrase the reminder?',
      hint: 'The mistaken distinction concerns the document, not the time.',
      answer: 'Say, "Please send the signed form, not the draft; the deadline is unchanged." Emphasize signed if useful, while keeping the contrast explicit.',
    },
    quiz: {
      question: 'A teammate knows tonight’s deadline but has selected an older film cut. What should the reminder emphasize?',
      options: [
        'Tonight, to repeat the already agreed deadline.',
        'Send, to emphasize that an action is expected.',
        'Latest cut, with wording that distinguishes it from the older version.',
      ],
      correctIndex: 2,
      explanation: 'The misunderstanding concerns version, so the correction should name it. Deadline and action emphasis do not identify which cut to send.',
    },
    takeaway: 'Use emphasis to clarify a contrast already present in the words.',
    sourceNote: 'Treasure supplies a prosody demonstration, not proof about trustworthiness. The rehearsal does not require voice imitation, accent change, or a particular speaking style.',
  },
  {
    id: 'speaker-011',
    outcome: 'Test reception at the listener’s position without forcing volume or pitch.',
    scene: 'Checking speech audibility before an illustrated talk in a projector room.',
    sections: [
      {
        title: 'The presenter does not hear the back row',
        paragraphs: [
          `Before a fictional illustrated talk, you can hear yourself comfortably beside the screen. At the back, a willing helper misses words when the projector runs. That report concerns the communication setup, not the helper's attention or your confidence. Testing only from the front hides that difference. Ask which words were difficult to hear and test with the equipment that will actually be operating, while avoiding assumptions that one helper represents every audience member.`,
        ],
      },
      {
        title: 'Adjust the setup before straining',
        paragraphs: [
          `Treasure discusses volume as one available vocal tool. His talk does not establish that you should force a lower pitch, shout, or replace your usual voice. Try the venue microphone at a comfortable level and ask the organizer about placement or amplification. Stop if speaking hurts. Do not tamper with electrical equipment or obstruct ventilation to silence a projector. A quieter rehearsal cannot certify a noisy event, so make a note when actual conditions are unavailable. The result should describe what you tested, not promise universal audibility.`,
        ],
      },
      {
        title: 'Hearing words is one check',
        paragraphs: [
          `Use an original test line: "The pale rectangle is the doorway; the dark line beside it is a shadow." Ask the helper to report any missing words, then what each shape represents. If every word arrived but the distinction is unclear, more volume is not the repair; revise the explanation or describe the image again.`,
          `Ask about access requirements through the organizer and arrange suitable captions or written material. Neither hearing every word nor one successful paraphrase establishes accessibility for everyone. Keep room reception, explanation, and access arrangements as separate checks.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Check from the listening position',
        alt: 'A presenter and projector are at the front; both speech and projector noise reach a helper at the back.',
        caption: 'Schematic room, not an acoustic prediction. Arrows show the two sounds reaching the test position.',
        items: [
          { label: 'Presenter', detail: 'Comfortable speech level', x: 20, y: 22, shape: 'person' },
          { label: 'Projector', detail: 'Operating during the test', x: 80, y: 22, shape: 'object' },
          { label: 'Back-row helper', detail: 'Reports missing words', x: 50, y: 80, shape: 'person' },
        ],
        arrows: [
          { from: 0, to: 2, label: 'speech' },
          { from: 1, to: 2, label: 'room noise' },
        ],
      },
      {
        type: 'dialogue',
        title: 'After the words arrive',
        alt: 'A helper hears the words but asks which rectangle represents the doorway.',
        caption: 'This original exchange calls for explanation, not louder speech.',
        items: [
          { label: 'Helper', detail: 'I heard each word. Which rectangle is the doorway?' },
          { label: 'Presenter', detail: 'The pale rectangle. The dark line beside it is the shadow.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Paper', 'Optional willing helper and available room'],
      steps: [
        `Copy the doorway test line and draw its two shapes on paper.`,
        `With permission, ask a helper to listen from the farthest intended seat; alone, rehearse the wording only.`,
        `Speak comfortably and ask for missing words, not a rating of confidence.`,
        `If available, adjust microphone placement with the organizer and repeat. Do not force your voice.`,
        `Record what was checked and list untested room conditions or access arrangements.`,
      ],
      notice: 'Your notes distinguish missing words, unclear explanation, and untested access needs.',
      troubleshooting: 'Without a venue or helper, label reception untested rather than claiming the solo rehearsal verifies it.',
    },
    recall: {
      prompt: 'Remote listeners hear every word but cannot follow your diagram. What should change?',
      hint: 'Audibility and understanding are separate.',
      answer: 'Describe the diagram’s relationships and provide accessible supporting material. Increasing microphone volume does not explain a relationship that was never spoken.',
    },
    quiz: {
      question: 'A back-row helper misses words while the projector runs. What is the useful first response?',
      options: [
        'Check microphone and room setup at a comfortable speaking level.',
        'Lower your pitch while keeping the same equipment arrangement.',
        'Repeat the test at the front, where you heard yourself clearly.',
      ],
      correctIndex: 0,
      explanation: 'The first tests the reported reception problem. Pitch changes and a front-row check do not establish what reaches the back.',
    },
    takeaway: 'Check the listener’s reception, then explanation and access needs separately.',
    sourceNote: 'Treasure and the inherited communication guidance inform this adaptation. No pitch-based trust claim or universal accessibility result is implied.',
  },
  {
    id: 'speaker-012',
    outcome: 'Build recovery cues that preserve the next step and any accuracy-critical qualification.',
    scene: 'Rehearsing a one-minute demonstration of an imaginary photo-album prototype.',
    sections: [
      {
        title: 'Losing a sentence during a demonstration',
        paragraphs: [
          `You are demonstrating a fictional photo-album prototype: choose two sample pictures, label them, then preview the page. Halfway through, you lose the sentence about captions. A memorized script tells you exactly what you intended to say, but searching for that missing sentence can stop the explanation. A cue card offers a different kind of help. It records the job of the current section and where to go next. Keep a full script if useful, especially for access or accuracy; recovery cues need not replace it.`,
        ],
      },
      {
        title: 'Keep the qualification beside the cue',
        paragraphs: [
          `Your card might say: choose two pictures; label who or what each shows; preview the page. Under preview, write "Nothing is uploaded in this demo." That is a fact of this imaginary prototype, not a claim about every album app. If you forget your wording, say, "We have chosen the pictures. Next I will add a short label to each." You recover the task without inventing a feature. Do not leave a limit on a separate card you might skip while trying to sound fluent.`,
        ],
      },
      {
        title: 'Rehearse a restart on purpose',
        paragraphs: [
          `Use a suggested one-minute outline: ten seconds for the purpose, twenty for choosing, twenty for labels, and ten for the preview and its limit. These sixty seconds are a rehearsal budget, not an ideal pace. Stop once after choosing and resume from the labels cue. If you omit the upload qualification, return to it directly.`,
          `Jobs' address supplies an example of marked sections to study. Its published text does not tell you his rehearsal method. The restart drill is our own, not his documented method.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'A recoverable sixty-second demo',
        alt: 'The demo allocates ten seconds to purpose, twenty to choosing, twenty to labels, and ten to preview and limits.',
        caption: 'Hypothetical rehearsal allocation totaling sixty seconds. Items show order, not proportional screen widths.',
        items: [
          { label: '0 to 10 seconds', detail: '10 seconds: I will turn two sample pictures into a labeled page.' },
          { label: '10 to 30 seconds', detail: '20 seconds: Choose the two pictures. Restart from the next cue if needed.' },
          { label: '30 to 50 seconds', detail: '20 seconds: Next I will add a short label to each picture.' },
          { label: '50 to 60 seconds', detail: '10 seconds: Preview the page. Nothing is uploaded in this demo.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper cue card', 'Two rough picture sketches'],
      steps: [
        `Use the imaginary album demo. Write cues for choosing, labeling, and previewing the sketches.`,
        `Put "Nothing is uploaded in this demo" directly beside the preview cue.`,
        `Explain the first step, stop deliberately, then restart from the labeling cue without finding an exact memorized sentence.`,
        `Finish and check the preview qualification. If missing, say it plainly and revise the card’s placement.`,
      ],
      notice: 'You resume the explanation from a meaningful cue and retain the important limit.',
      troubleshooting: 'If a cue says only "next," replace it with the action and the object involved.',
    },
    recall: {
      prompt: 'During a fundraising report, you forget the sentence before a checked total and its cutoff date. What should the cue preserve?',
      hint: 'Keep the number and its boundary together.',
      answer: 'Keep the verified total beside the date and source note. Restart with the section’s purpose, then read those facts rather than guessing to maintain fluency.',
    },
    quiz: {
      question: 'You lose your wording before a demonstration’s limitation. Which recovery is accurate?',
      options: [
        'Move to the next feature and leave limitations for questions.',
        'Use the section cue and read the checked limitation beside it.',
        'Replace the forgotten limitation with a broader description from memory.',
      ],
      correctIndex: 1,
      explanation: 'The cue preserves structure and the checked boundary. Skipping or broadening the limitation changes the information the audience receives.',
    },
    takeaway: 'Prepare a place to resume, with critical facts and limits beside it.',
    sourceNote: 'Jobs’ visible sections are a reference, not evidence of his rehearsal habits. This original recovery drill and timing allocation are untested.',
  },
  {
    id: 'speaker-013',
    outcome: 'Answer the requested point first, then give the support and qualification it needs.',
    scene: 'Answering a timetable question after introducing a small film screening.',
    sections: [
      {
        title: 'The question is narrower than the presentation',
        paragraphs: [
          `After a fictional screening introduction, someone asks, "Does six o'clock mean the doors open or the film starts?" Your notes contain the director's biography, the venue history, and the whole program. None answers the immediate distinction. In this imagined notice, doors open at 18:00 and the film is scheduled for 18:30. Say the distinction first. A related answer can sound knowledgeable while making the listener wait for the one detail they need to arrange their arrival.`,
        ],
      },
      {
        title: 'Answer, support, and limit',
        paragraphs: [
          `Use: "Six is the door-opening time; the film is scheduled for half past six. That is the timetable on this event's notice. I cannot guarantee there will be no delay." The answer resolves the contrast. The support identifies where it came from. The limit keeps a schedule from becoming a promise about the future. These are jobs for an answer, not a ritual requiring three sentences every time. Sometimes a short answer with its condition is enough. If you do not know the requested fact, state that rather than filling the space with background.`,
        ],
      },
      {
        title: 'Clarify before answering a different question',
        paragraphs: [
          `If someone asks only "Is it six?", check whether they mean doors, the screening, or a meeting beforehand. A quick clarification is more direct than confidently answering the wrong question. Once the point is resolved, offer additional context if useful: "Would you also like the running time?" Do not automatically return to a prepared promotional line. Rhetorical attention to a claim and its support informs this original Q&A framework, but does not prove it is the best format for every setting. In rehearsal, mark the first sentence that actually resolves the question; move it forward if unrelated material comes before it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'The timetable answer before the background',
        alt: 'A visitor asks what six means; the presenter identifies doors at six and the screening at half past.',
        caption: 'Times belong to the fictional event notice, not a real screening or a guarantee against delays.',
        items: [
          { label: 'Visitor', detail: 'Does six mean doors open or the film starts?' },
          { label: 'Presenter', detail: 'Doors open at six; the film is scheduled for half past six.' },
          { label: 'Presenter', detail: 'That is the event notice’s timetable. Delays are still possible.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper and pen'],
      steps: [
        `Write a fictional notice: doors at 18:00, film scheduled at 18:30. Add the question "What happens at six?"`,
        `Draft an answer that resolves the time distinction immediately, names the notice, and avoids guaranteeing an exact start.`,
        `Read it aloud, then test the shorter question "Is it six?" Write a clarification before attempting an answer to that ambiguous version.`,
      ],
      notice: 'The requested distinction appears before background, and the schedule remains a schedule.',
      troubleshooting: 'If the opening sentence describes the whole event, move the requested fact ahead of it.',
    },
    recall: {
      prompt: 'After a drawing-class introduction, someone asks whether pencils are supplied. What would a checked answer include?',
      hint: 'Answer the materials question before describing the course.',
      answer: 'State what the verified materials list supplies and any exception, such as bringing your own colored pencils. Course history does not answer that distinction.',
    },
    quiz: {
      question: 'A course notice says registration closes Friday, while payment is due Monday. Someone asks when registration closes. What comes first?',
      options: [
        'Friday for registration, followed by the separate Monday payment deadline.',
        'An explanation of the payment process before mentioning Friday.',
        'The full course timetable so both deadlines have background.',
      ],
      correctIndex: 0,
      explanation: 'Friday answers the asked question; Monday is a useful distinction afterward. The other openings postpone the requested information.',
    },
    takeaway: 'Resolve the listener’s point before adding the rest of your knowledge.',
    sourceNote: 'The answer-support-limit sequence is an original application of rhetorical reasoning, not an attributed ancient script or experimentally established Q&A formula.',
  },
  {
    id: 'speaker-014',
    outcome: 'Check an embedded premise while still answering the concern behind a question.',
    scene: 'Discussing a changed timetable for neighborhood evening classes.',
    sections: [
      {
        title: 'A concern inside an overstatement',
        paragraphs: [
          `At a fictional timetable meeting, someone asks, "Why did you cancel every evening class?" The records show that Tuesday evening continues, while Thursday moved to the afternoon. The premise, or assumed fact, is that every evening class was canceled. It also raises a practical concern about access after work. If you respond only "That is false," you correct part of the wording but leave the concern unanswered. If you explain why every class was canceled, you accept something the record does not show.`,
        ],
      },
      {
        title: 'Correct the record without dodging the loss',
        paragraphs: [
          `Try: "Tuesday evening remains. Thursday moved to the afternoon because that room is unavailable in the evening. That still removes the Thursday option for people who work during the day. Are you asking whether another evening can be offered?" In this invented case, the room constraint is in the meeting notes. Do not supply it as a convenient excuse unless checked. The response distinguishes a factual correction from a genuine consequence. It also leaves the questioner free to clarify a different concern. You need not guess whether their wording came from anger, confusion, or incomplete information.`,
        ],
      },
      {
        title: 'Accept a premise when it is right',
        paragraphs: [
          `Suppose you then discover Tuesday was canceled too. Update your answer: "You are right; I used an outdated timetable. There are no evening sessions in the current version. I do not yet have an alternative to offer." Premise checking is not a way to win by finding a minor flaw in someone's phrasing. It requires your own claim to remain open to correction. In rehearsal, write the assumed fact and the underlying request separately, then answer each. A calm delivery does not prove your account correct.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'The timetable premise and the access concern',
        alt: 'The presenter corrects the claim about every class but acknowledges the loss of Thursday evening.',
        caption: 'The fictional record retains Tuesday. The correction does not erase Thursday’s loss.',
        items: [
          { label: 'Participant', detail: 'Why did you cancel every evening class?' },
          { label: 'Presenter', detail: 'Tuesday remains. Thursday moved because its room is unavailable that evening.' },
          { label: 'Presenter', detail: 'That still removes Thursday for people working days. Are you asking for another evening?' },
          { label: 'Participant', detail: 'Yes. Tuesday clashes with my shift.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper and pen'],
      steps: [
        `Write the fictional record: Tuesday remains; Thursday moved because its evening room is unavailable. Copy the question about every class.`,
        `Underline the assumed fact and write the access concern separately.`,
        `Draft a correction followed by an acknowledgment of the lost Thursday option and one clarifying question.`,
        `Change the record so both evenings are canceled. Rewrite the answer to acknowledge the now-correct premise.`,
      ],
      notice: 'Your answer changes when the record changes, while the practical concern remains addressed.',
      troubleshooting: 'If your answer stops at "not every class," add what the actual change means for participants.',
    },
    recall: {
      prompt: 'A club member asks why you ignored all feedback. Notes show some was discussed but replies were not sent. How would you answer?',
      hint: 'Discussion and acknowledgment are separate facts.',
      answer: 'State which feedback the record shows was considered, admit replies were missing, and address how members can learn the decisions. Do not use discussion to deny the communication gap.',
    },
    quiz: {
      question: 'Someone asks why a route was changed secretly. A public notice exists, but it omitted the date. What fits?',
      options: [
        'Point to the public notice and treat the question as fully answered.',
        'Apologize for the missing date and move straight to the route’s benefits.',
        'Identify the notice, acknowledge its missing date, and address how travelers were informed.',
      ],
      correctIndex: 2,
      explanation: 'The third preserves both facts and the concern. The notice challenges secrecy, but route benefits cannot repair its missing date.',
    },
    takeaway: 'Correct an unsupported premise without discarding an answerable concern.',
    sourceNote: 'Aristotle and GOV.UK interviewing guidance inform this original rehearsal. It is not a method for judging motives or avoiding responsibility.',
  },
  {
    id: 'speaker-015',
    outcome: 'State an unknown precisely and offer only a follow-up you can carry out.',
    scene: 'Answering a venue-cost question while planning a small animation workshop.',
    sections: [
      {
        title: 'An old price is not a current quote',
        paragraphs: [
          `During a fictional animation-workshop meeting, someone asks what hiring the room will cost this year. Your notes contain last year's room charge of 1,500 rupees, excluding equipment. There is no current quote. Saying "It costs 1,500" would turn a historical figure into today's price and drop its scope. Saying "I have no idea" would hide the limited information you do have. Separate the known record from the missing answer so listeners do not plan around a number you cannot verify.`,
        ],
      },
      {
        title: 'Name the gap without filling it',
        paragraphs: [
          `Try: "I do not have this year's quote. Last year's record lists 1,500 rupees for the room alone, without equipment; that is background, not a current estimate." The number remains attached to its date and exclusions. You can omit it entirely if it would distract from the missing quote. Treasure includes honesty among his speaking principles. Here, the boundary stays audible without promising trust or agreement.`,
        ],
      },
      {
        title: 'Promise your action, not someone else’s reply',
        paragraphs: [
          `If feasible, add: "I can ask the venue for a room-and-equipment quote and update our existing planning note on Friday. If they have not replied, I will mark the cost unconfirmed." You control asking and updating, not the venue's response. Do not promise a checked price by Friday unless you can deliver it. Use an agreed shared note rather than collecting personal contact details without permission. When follow-up is not feasible, say the price remains unknown and identify what would need checking. A visible unresolved question is more accurate than a confident guess quietly corrected after people have made decisions.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Keep the quote’s status visible',
        alt: 'An old room-only price is separated from an unknown current quote and a conditional follow-up.',
        caption: 'The price and Friday plan are hypothetical. No currency conversion or current rental price is implied.',
        items: [
          { label: 'Known background', detail: 'Last year: 1,500 rupees for the room alone. Equipment excluded.' },
          { label: 'Missing answer', detail: 'This year’s room-and-equipment quote has not been received.' },
          { label: 'Feasible follow-up', detail: 'Ask the venue; update Friday’s shared note even if the quote remains unconfirmed.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper and pen'],
      steps: [
        `Copy the fictional old price with its year and equipment exclusion. Label the current quote unknown.`,
        `Write a spoken answer that does not promote the old price into a current estimate.`,
        `Add a feasible follow-up route, including what you will report if no reply arrives. Keep it hypothetical for this rehearsal.`,
        `Read the answer and circle promises about your own actions. Remove promises that depend on another person’s response.`,
      ],
      notice: 'The answer distinguishes historical information, the unresolved quote, and an action you control.',
      troubleshooting: 'If a guessed price slips in, omit the number and state the exact information still needed.',
    },
    recall: {
      prompt: 'After an app demo, someone asks whether it exports transparent images. You have not tried that. What would you say?',
      hint: 'A related feature is not verification of this feature.',
      answer: 'Say you have not verified transparent export. If feasible, check the documentation and a sample export, then update the agreed notes; otherwise leave the feature unconfirmed.',
    },
    quiz: {
      question: 'A supplier has not replied about availability. Which statement offers an honest follow-up?',
      options: [
        'I will have confirmed availability by Friday because I sent the request.',
        'I will update the shared note Friday, including if availability is still unconfirmed.',
        'The item was available last month, so we can provisionally treat it as available now.',
      ],
      correctIndex: 1,
      explanation: 'The update is within your control; the supplier’s answer is not. Last month’s availability does not establish today’s stock.',
    },
    takeaway: 'State the gap and promise only a check or update you can perform.',
    sourceNote: 'Treasure’s honesty principle is the reference. This original follow-up routine has no claimed measured effect on credibility or audience behavior.',
  },
  {
    id: 'speaker-016',
    outcome: 'Close with a specific invitation whose effort, conditions, and optional nature are audible.',
    scene: 'Inviting neighbors to a short postcard exchange after an illustration session.',
    sections: [
      {
        title: 'An invitation needs more than enthusiasm',
        paragraphs: [
          `You finish a fictional illustration session by announcing a postcard exchange. "Let us all get involved" leaves listeners guessing what they would do, where they should go, and what commitment follows. Some want to draw; others would rather look, ask a question, or leave. An ending can give them enough information to choose without making participation a test of enthusiasm. Decide the actual invitation first. In this example, it is a twenty-minute exchange at the library's side table on Saturday at eleven.`,
        ],
      },
      {
        title: 'Make the conditions part of the close',
        paragraphs: [
          `Say: "If you would like to join, bring one original postcard design to the library side table on Saturday at eleven for a twenty-minute exchange. Spare paper is provided. You can also just look or take the details home." These are invented event arrangements, not information about a real library. The action, place, time, and effort are audible. If using other people's images is relevant, add that participants need permission to share them. Do not hide a materials cost or a longer commitment in details supplied only after someone agrees.`,
        ],
      },
      {
        title: 'Leave an honest decision available',
        paragraphs: [
          `Duarte's talk analyzes endings that connect a proposed future to action. It is an interpretation, not a universal rule or proof of effects. Here the pressure-free choice is an ethical adaptation: questions, later consideration, and declining remain acceptable. Avoid inventing limited places or implying that caring about the community requires attendance. Rehearse the ending and ask what someone would need to bring, how long it takes, and whether watching is allowed. If those answers are unclear, revise the conditions rather than adding a louder final appeal.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The postcard invitation in spoken order',
        alt: 'The close names a design to bring, the meeting details, the short commitment, and an option to watch.',
        caption: 'This fictional outline keeps the actual commitment and listener choice inside the spoken ending.',
        items: [
          { label: 'What to bring', detail: 'If you would like to join, bring one original postcard design.' },
          { label: 'Where and when', detail: 'Library side table, Saturday at eleven.' },
          { label: 'Effort and materials', detail: 'A twenty-minute exchange. Spare paper is provided.' },
          { label: 'Other choices', detail: 'You can just look, ask questions, or take the details home.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Draft a close for the fictional postcard exchange, using its place, time, duration, and materials arrangements.`,
        `Add what a participant would do and a clear option to watch or decline.`,
        `Read the close and list every commitment it implies. Remove any promise of results or unverified scarcity.`,
        `Hide the draft and summarize the invitation as a listener. Restore any condition missing from that summary.`,
      ],
      notice: 'A listener can describe the commitment and an acceptable alternative to joining.',
      troubleshooting: 'If the close says only "sign up," add the task and effort before the invitation.',
    },
    recall: {
      prompt: 'You end a reading group by inviting people to help host next month. What conditions should be audible?',
      hint: 'Interest is not agreement to an unspecified workload.',
      answer: 'Name the hosting tasks, expected preparation and meeting time, and how to ask questions or decide later. Do not equate declining with disliking the group.',
    },
    quiz: {
      question: 'A volunteer invitation needs a closing sentence. Which supports an informed choice?',
      options: [
        'The role takes one Saturday hour; read the tasks and ask questions before deciding.',
        'Register now; the detailed schedule will be explained after you commit.',
        'If the group matters to you, reserve Saturday and we will find you a task.',
      ],
      correctIndex: 0,
      explanation: 'The first supplies effort and room to decide. Later details conceal the commitment; linking care to attendance pressures a choice.',
    },
    takeaway: 'End with an honest invitation, including its conditions and room to decline.',
    sourceNote: 'Duarte informs the action-oriented ending; consent guidance informs voluntary choice. This original adaptation promises no measured persuasive effect.',
  },
]