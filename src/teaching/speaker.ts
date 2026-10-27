import type { LessonGuide } from './types'

// Original practice speeches, not quotations from the linked speakers.
// Existing lesson references are inherited. Examples and numbers are hypothetical.
// Practice minutes and demonstration timings are planning budgets, not tested doses.
export const speakerGuides: LessonGuide[] = [
  {
    id: 'speaker-001',
    outcome: `Choose one thing listeners should be able to explain afterwards, and write an introduction that points them at it instead of describing yourself.`,
    scene: 'Introducing an original short story at a library reading evening.',
    sections: [
      {
        title: 'Before the first page',
        paragraphs: [
          `It is a library reading evening, and you are about to read your short story aloud. It is about Leela, who finds an unopened letter tucked inside a returned library book, addressed to someone she misses. You have written an introduction. It mentions your writing course, the lovely old building, and the eleven months the story took. You read it over and it is all true and all about you.`,
          `None of it tells the people in the chairs what kind of attention the next fifteen minutes invites. They do not know whether to listen for plot, for language, for a twist, or for a mood. So pick one job for them. For this reading, the job is: afterwards, a listener should be able to explain why Leela returns the letter without opening it. You do not have to tell them her decision in advance. You have to tell them what to watch.`,
        ],
      },
      {
        title: 'A task chooses the details',
        paragraphs: [
          `Before a replay, a good football pundit says one thing: watch the left-back. Then the clip runs and everyone sees it, because they knew where to look. The pundit did not describe their own playing career first. They did not say watch everything, which is the same as saying nothing. One pointer, then the action. An introduction is the sentence before the replay.`,
          `A listener task is that pointer: something people will be able to explain, distinguish, or decide once the piece is over, rather than a feeling you hope to produce in them. Its practical value is that it tells you which details belong in the introduction and which can wait. If the task is about why Leela hesitates, then who finds the letter, why opening it is tempting, and which choice to follow are the details that earn a place. The building's history does not. Aristotle's writing on rhetoric pays close attention to the judgment an audience is being asked to make, and that is where this idea comes from. Turning it into a small rehearsal exercise for a library evening is a modern adaptation, not a template he wrote for story readings.`,
        ],
      },
      {
        title: 'An introduction someone can use',
        paragraphs: [
          `Try this wording, which is original to the exercise: Leela finds a sealed letter addressed to someone she misses. As I read, notice what makes her hesitate before opening it. We can compare our readings afterwards; there is no required interpretation. That gives listeners a situation and a question. It gives away nothing about the ending, and it leaves them free to disagree with you about what the hesitation means.`,
          `Then test it in rehearsal with one person. Read the introduction and ask them what they now expect the story to be about. If the answer is a story about books, the pointer was too vague and the choice needs to be more explicit. If the answer is whether she opens the letter and why she might not, the invitation worked. Notice what you are checking. Not whether the listener will reach your preferred reading of Leela, since different interpretations are the point of a reading. Only whether they understood where to look.`,
        ],
      },
      {
        title: 'Why introductions drift toward the speaker',
        paragraphs: [
          `Introductions get written by the person who knows the most and is the most nervous, so they fill with reassurance: credentials, effort, context. All of it is comfort for the speaker and noise for the listener, who has no idea yet what the piece is or what to do with it. Watch the left-back is harder to say than I have been writing for eleven months, and far more useful.`,
          `Two habits. Before you write an opening, finish the sentence afterwards, people should be able to, and build the introduction from that. And rehearse the opening on one person and ask what they expect next; if they cannot say, the pointer is missing.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'The introduction from a listener’s side',
        alt: 'The reader offers a choice to follow; a listener paraphrases that choice.',
        caption: `Read the listener's line first. It is a paraphrase of the pointer, whether she opens it and why she might not, which is the proof that the introduction worked. The reader's reply keeps the ending closed and the interpretations open. This invented rehearsal checks the invitation, not agreement about the story.`,
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
        `Use this invented synopsis: Leela finds a letter, recognises the addressee, and returns it unopened. Decide what a listener should be able to explain afterwards. That sentence is your left-back.`,
        `Write a two-sentence introduction that names the situation and one thing to listen for, without announcing the ending. If it mentions you, your course, or the room, cut that part.`,
        `Read it aloud to someone, or to a recording, and write down the question a newcomer would now expect the story to answer.`,
        `Compare that expected question with your task. If they match, remove one detail from the introduction that serves neither. If they differ, the pointer is unclear; revise the invitation, not the story.`,
      ],
      notice: `Your introduction and the question a listener expects are about the same choice. You pointed at the left-back and they looked at the left-back.`,
      troubleshooting: `If the only task you can write is enjoy it, you have not chosen anything yet; name one decision a character makes that listeners could discuss afterwards. If your draft keeps filling with your own background, write the task at the top of the page and delete every sentence that does not serve it.`,
    },
    recall: {
      prompt: 'You introduce a cooking demonstration about substituting ingredients. What listener task would guide your opening?',
      hint: 'Choose a distinction they can use, not a feeling about the chef.',
      answer: `Give them a distinction to carry away: afterwards, they should be able to tell a substitution that changes texture from one that changes flavour. That is the left-back for a cooking demonstration. The opening then writes itself: one example of each kind, and the instruction to watch for which is which as the dishes come together. The chef's training, the venue, and how long the recipe took are reassurance for the speaker and noise for the audience; they can wait until someone asks.`,
    },
    quiz: {
      question: 'New volunteers must distinguish book returns from donations. Which opening fits that task?',
      options: [
        'Describe how the collection has grown before discussing either desk.',
        'Name both desks and explain which kind of book belongs at each.',
        'Explain the full sorting process before mentioning where books arrive.',
      ],
      correctIndex: 1,
      explanation: `Naming both desks and saying which kind of book belongs at each prepares the exact choice the volunteers will have to make, so it is the pointer before the replay. The history of the collection is background that answers no question a new volunteer has on day one. The full sorting process is useful later but buries the one decision they need under steps they cannot yet place.`,
    },
    takeaway: `An introduction is the sentence before the replay: decide what listeners should be able to explain or decide afterwards, point them at that one thing, keep your own credentials and effort out of the way, and check with one rehearsal listener that they know where to look.`,
    sourceNote: 'Aristotle informs the audience focus. The literary interpretation and rehearsal are original, not an experimentally validated teaching method.',
  },
  {
    id: 'speaker-002',
    outcome: `Say the parts of a talk out loud before you start, and mark every change of subject in words, so a listener without slides or sight of your hands can still follow the route.`,
    scene: 'Giving a short tour of handmade prints in a small gallery.',
    sections: [
      {
        title: 'A tour without visible headings',
        paragraphs: [
          `You are rehearsing a short tour of handmade prints in a small gallery. You stand by the first print and talk about the paper. Then the frame. Then back to how the ink was laid down. Then the frame again. Each fact is accurate and belongs somewhere. Somebody listening with their eyes shut, or standing at the back behind a pillar, has no idea that you have changed subject three times. The only signal was your hand moving.`,
          `Two things are missing and they are different things. An audible outline tells people what the parts of the tour are, up front, in words. A transition tells them when you are leaving one part and entering the next. Both have to work without a slide number, a gesture, or the phrase as you can see here, because a surprising number of listeners cannot.`,
        ],
      },
      {
        title: 'An inspectable speaking choice',
        paragraphs: [
          `A radio commentator cannot point. Every change of play has to be said: the ball goes out to the left wing, now a corner, now the goalkeeper has it. Television commentators get lazy because the picture does the work. Radio commentators learn to name the move, because for their listener the words are the picture. A talk without slides is radio, and a talk with slides is radio for anyone who cannot see them well.`,
          `There is a well-known example you can check. In the published text of his 2005 Stanford address, Steve Jobs announces at the start that he will tell three stories, and then marks the beginning of each one in words. Those spoken section markers are in the source, and you can read them. What the source does not show is that three stories cause persuasion or that the structure worked for his audience. Calling the markers helpful is an interpretation you test in your own rehearsal, not a proven effect. Your gallery tour has two parts: how this print was made, and how displaying it changes what visitors notice. Two is the right number because the tour has two subjects. Do not add a third to match a famous speech.`,
        ],
      },
      {
        title: 'Say the change of subject',
        paragraphs: [
          `Open by giving the route in words: First I will explain how the ink reached this paper. Then we will look at the frame and the space around the image. That is the outline, audible, two parts, no slide. When you finish the first part, say so and name the second: That covers making the print. Now keep the same image in mind while we consider its frame. The image is the thread that connects the two halves. The verbs, making and considering, mark that the job has changed.`,
          `Rehearse facing away from your imaginary display, so your hands cannot help you. Then ask a listener, or play back a recording, and find the exact moment where making becomes displaying. If nobody can find it, the transition is the thing to repair. The temptation is to fix it by adding a heading to a slide. That is fixing radio by improving the television picture; the listener who was lost still cannot see it.`,
        ],
      },
      {
        title: 'Why next is not a transition',
        paragraphs: [
          `Speakers say next, moving on, and so because they are cheap and feel like structure. They are not. Next tells the listener that something changed and nothing about what; it is a sat-nav that says turn without saying where. The new subject has to be named, or the listener is navigating by hand gestures they cannot see.`,
          `Two habits. Before any talk, write the outline as a sentence you will actually say aloud, with the parts named. And at every boundary, close the old subject and name the new one in the same breath, then rehearse once with your eyes shut to hear whether the route survives.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A spoken route through the print',
        alt: 'An opening names making and display, followed by a sentence introducing each part.',
        caption: `Read the three boxes as radio commentary for the tour. The opening route names both parts in words. The second box starts the first part. The third box is the transition, and notice its two halves: it closes making the print and opens the frame around the same image. The arrows show speaking order; two parts is the tour's real count, not a rule.`,
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
        `Take a drawing you have made, or imagine one, and name two parts of a short tour of it: how you made it, and how you would display it. Two parts because there are two subjects, not because two is a magic number.`,
        `Write an opening that says both parts aloud, in order, followed by one explanatory sentence for each part. This is the route announced before the journey.`,
        `Write a transition that closes the first subject and names the second in the same sentence. Ban as you see here, next, and moving on; the new subject has to appear in words.`,
        `Read the whole thing without pointing, eyes off the picture. Mark every place where a listener would need a visible heading to know where they are, and add the missing spoken cue there.`,
      ],
      notice: `A listener with their eyes shut can name both parts and say where the change between them happened. The words are doing the work the hand used to do.`,
      troubleshooting: `If your transitions are all variations on next, replace each one with the name of the thing that comes next. If you keep reaching for a gesture, that is the spot that needs a sentence; the gesture is where the radio went silent.`,
    },
    recall: {
      prompt: 'An audio-only induction covers borrowing equipment and returning it. How would you mark the change?',
      hint: 'Close one listener task before introducing the next.',
      answer: `Say the boundary out loud and name both sides of it: That explains collecting your equipment. Now I will cover checking it back in. The first half closes the borrowing section so nobody is still waiting for more of it. The second names the new subject rather than just announcing that a change happened. In audio only, that sentence is the radio commentator calling the corner. Without it the listener hears borrowing details and returning details run together and has to guess, from a checklist they cannot see, where one stopped.`,
    },
    quiz: {
      question: 'A rehearsal partner loses the route when slides disappear. What revision addresses that finding?',
      options: [
        'Add more section titles to the slides for later reference.',
        'Tell a third story to match a successful commencement address.',
        'Name the sections aloud and announce each change of subject.',
      ],
      correctIndex: 2,
      explanation: `Naming the sections aloud and announcing each change of subject puts the route into the only channel the listener still has, the words; it is radio commentary for a talk that lost its pictures. Extra slide titles improve a picture the lost listener cannot see. Telling a third story to match a famous address copies a count instead of fixing the thing that failed, which was the missing spoken route.`,
    },
    takeaway: `Treat every talk as radio: say the outline out loud before you start, and at each boundary close the old subject and name the new one in words, because next and as you can see are hand gestures that a listener behind a pillar, or without the slides, will never receive.`,
    sourceNote: 'Stanford publishes the announced stories and transitions. Their usefulness here is an interpretive application, not evidence about Jobs’ rehearsal or universal structure.',
  },
  {
    id: 'speaker-003',
    outcome: `Pitch a change by comparing how one task is done now with how it would be done after, keeping the after side honest about what it depends on.`,
    scene: 'Proposing a shared booking sheet for a film club’s tripod.',
    sections: [
      {
        title: 'Describe the present without inflating it',
        paragraphs: [
          `Your film club owns one tripod. To find out whether it is free on Thursday, you scroll back through the group chat or message whoever had it last. You want to propose a shared booking sheet, and your first draft opens with: our current system is chaos. Two things are wrong with that sentence. It says nothing about the actual task, which is finding out when the tripod is free. And it insults the three members who have been quietly managing the chat for a year and mostly making it work.`,
          `A bounded opening does more with less: to find an available evening, we currently search the chat or ask the last borrower. That is the present, described as a task someone does. The problem you are solving is finding current availability. It is not proving that everything about the club is broken, and the pitch gets weaker, not stronger, every time it tries to.`,
        ],
      },
      {
        title: 'Keep the comparison on one task',
        paragraphs: [
          `Think of a before-and-after photo of a kitchen. The honest version shoots the same corner, same angle, same light, so the only thing that changed is the thing you did. The dishonest version shoots the before at night with the bins out and the after at noon with flowers on the table. Everyone has seen both, and everyone trusts the first and discounts the second. A pitch is a before-and-after photo of one task. Same corner, same light.`,
          `Nancy Duarte's talk on great speeches describes them as moving back and forth between what is and what could be. That is her reading of famous speeches, a useful frame, and not an experiment showing that the contrast persuades everyone. Borrow the shape without widening the gap beyond what you can show. Your after line could be: a shared sheet would put the requested evening and the return time in one place, if borrowers update it. You have said where the information would live. You have not claimed the tripod will always be available, or that the chat will fall silent, because you do not know that.`,
        ],
      },
      {
        title: 'Let the condition affect the proposal',
        paragraphs: [
          `The if clause is not a weakness to hide; it is a design input. Continue: chat still lets us negotiate changes quickly. The sheet would need an update whenever a return changes. I propose a two-week trial, with a paper booking option through the club organiser for anyone who does not want another app. Those are planning choices, invented for this exercise, not measured benefits. They exist because the condition forced them: if the sheet only works when updated, the pitch has to say who updates it and what happens for people who will not.`,
          `When a member asks whether the sheet will stop late returns, the answer is no, and it is a good answer. A record of plans and the act of bringing the tripod back are different things. Saying that limit inside the pitch costs you nothing and buys credibility; saying it in an apology three weeks later costs the whole proposal. Close the comparison with a question the trial can answer: during the two weeks, can members find the next free slot from the sheet alone, and where does it go wrong?`,
        ],
      },
      {
        title: 'Why the after photo gets flattered',
        paragraphs: [
          `People inflate the after side because they are excited and because a conditional sentence feels timid in a room. But the room contains someone who will ask about late returns, and if the pitch already answered them, that person becomes an ally. If it did not, they become the reason the vote fails. The honest photo wins slowly and the flattering one loses fast.`,
          `Two habits. Write the present as a task someone does, in one sentence, without adjectives about chaos. And read every after sentence looking for a hidden if; where you find one, say it out loud and let it change the plan.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Finding the same free evening',
        alt: 'Chat searches and a proposed sheet offer different ways to find tripod availability.',
        caption: `Check first that both columns describe the same task, finding a free evening, which is what makes this an honest before-and-after. Then read the last sentence of the proposed column: it carries the condition about borrowers keeping the record current. That sentence is the if the pitch has to design around, not a footnote. The proposed side is conditional, not a measured result.`,
        items: [
          { label: 'Current chat', detail: 'Search messages or ask the borrower. Changes can be negotiated in the conversation.' },
          { label: 'Proposed sheet', detail: 'Read the slot and return time. This works only while borrowers keep the record current.' },
        ],
      },
      {
        type: 'dialogue',
        title: 'A limit kept inside the pitch',
        alt: 'A member asks about late returns; the presenter distinguishes a record from a guarantee.',
        caption: `Read the presenter's no first. It is the limit stated inside the pitch rather than discovered afterwards, and it separates a record of plans from a guarantee of behaviour. The member who asked is now more likely to back the trial, not less. Original exchange about the same tripod proposal.`,
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
        `Draw two columns, current chat and proposed sheet, and write one task across the top: finding the next free tripod slot. Everything in both columns has to be about that task, same corner, same light.`,
        `Write one spoken sentence for each column. Keep the proposed sentence conditional: it would do X, if Y. The if is what you will design around.`,
        `Under the proposed column, add who must update the sheet and how a member without digital access can book. These lines exist because of the if; if you cannot write them, the condition has not been taken seriously.`,
        `Read the whole pitch aloud and underline every benefit a trial would still need to confirm, such as saves time. Rewrite each one as a question the two-week trial can answer.`,
      ],
      notice: `Both columns are about availability and nothing else, and the proposal names its own maintenance condition before anyone asks. A sceptic reading it has nothing left to catch you on.`,
      troubleshooting: `If the future column sounds certain, find the hidden if and say what must happen before the benefit follows. If the present column has started calling things chaos or broken, delete the adjective and describe the task as a member actually does it today.`,
    },
    recall: {
      prompt: 'You propose advance meal orders at a club lunch. How would you contrast them with ordering on arrival?',
      hint: 'Separate moving a step from proving a shorter queue.',
      answer: `Keep both sides on one task, getting a meal chosen and served, and keep the after side conditional. Now: people choose at the counter when they arrive. Proposed: people would choose earlier, if they submit the order and the kitchen actually receives it. That is the same corner in the same light. What you must not say is that serving will be quicker, because moving a step earlier does not prove a shorter queue; the kitchen might simply be slower on the day. Whether lunch is faster is a question for the first trial, so say it as a question.`,
    },
    quiz: {
      question: 'A booking trial has not started. Which pitch sentence is supportable?',
      options: [
        'The sheet would collect availability in one place if kept current.',
        'The sheet will save time because it removes the chat search.',
        'The sheet is preferable because several members already like it.',
      ],
      correctIndex: 0,
      explanation: `Saying the sheet would collect availability in one place if kept current describes a mechanism and names its condition; nothing in it needs a trial to be true. Saying it will save time is an after photo shot in better light: time saved is exactly what the trial has to measure, and the chat search may be replaced by a sheet search. Saying several members like it reports a preference, which settles neither whether the sheet works nor who will maintain it.`,
    },
    takeaway: `A pitch is a before-and-after photo of one task, so shoot both sides from the same corner in the same light: describe the present as something someone does, keep the future conditional, say the if out loud and let it shape the plan, and turn every unproven benefit into a question the trial can answer.`,
    sourceNote: 'Duarte supplies contrast analysis. Fair comparisons and the trial are original adaptations, not tested outcomes or claims of universal persuasion.',
  },
  {
    id: 'speaker-004',
    outcome: `Replace an adjective with one specific scene of actions and objects, then keep your interpretation of that scene small enough that the scene actually supports it.`,
    scene: 'Drafting a wedding toast about a couple’s consideration for guests.',
    sections: [
      {
        title: 'What does considerate look like?',
        paragraphs: [
          `You are drafting a wedding toast for Nila and Arun. The first version calls them wonderful, thoughtful, and generous. Everyone in the marquee will hear that you approve of them. Nobody will learn anything, because those three words could be said about any couple at any wedding, and they tell no one what you have actually seen.`,
          `So use a scene. For this exercise the scene is fictional: a small lunch last summer that moved indoors when the rain came. One guest arrived late after a long train journey. Nila had kept a plate aside for them. Arun shifted chairs so the latecomer sat next to the two people they already knew. That is the whole event. There is a plate, a chair, and a person who got to eat and talk. No dramatic rescue, no embarrassing secret. Concrete does not mean big; it means you can point at it.`,
        ],
      },
      {
        title: 'Explain the scene’s job',
        paragraphs: [
          `Think of an adjective as a label on a jar and a scene as the thing inside it. Generous is the label. Kept a plate aside is what is in the jar. Listeners cannot taste a label. When you show them what is inside, they decide for themselves what to call it, and they usually agree with you, which is far more persuasive than being told.`,
          `But one jar does not fill a shelf. The scene shows how your adjective applies in one instance; it does not prove how these people behave on every occasion. They noticed what a late guest needed fits the actions exactly. They have never let anyone down goes far beyond a plate and a chair, and the sharper listeners will feel the stretch. In a real toast, use an event you can recount accurately and that the people in it are happy to have shared. If you are working with this exercise's invented lunch, keep calling it invented. Do not perform a fiction as your own memory to make a toast warmer. Warmth survives honesty; it does not survive being caught.`,
        ],
      },
      {
        title: 'An original toast passage',
        paragraphs: [
          `Try this: when our lunch moved inside, Nila saved a plate for the late arrival. Arun made space beside familiar faces. I think of that afternoon when I say they notice who has not yet been included. Three sentences: situation, actions, interpretation. The last sentence is clearly marked as yours, I think of that afternoon when I say, which is the honest size for a conclusion drawn from one lunch. It is a reading of the actions, not a measurement of character.`,
          `There is a famous version of the same move. In his Stanford address, Steve Jobs links a general reflection about trusting that experiences connect later to a specific account of dropping in on a calligraphy class. The anecdote is in the published text and you can inspect it. What it does not do is prove that taking an unusual course causes later success, and it does not mean your toast needs his subject or his cadence. It shows one speaker putting something in the jar instead of only reading the label.`,
        ],
      },
      {
        title: 'Why adjectives creep back in',
        paragraphs: [
          `Adjectives feel safe because they cannot be wrong; nobody will stand up and dispute thoughtful. Scenes feel exposed because they are specific, and specific things can be misremembered or stretched. That exposure is the price of being believed. The fix for the risk is not to retreat to adjectives but to keep the scene accurate and the conclusion the same size as the evidence.`,
          `Two habits. For every adjective in a draft, write underneath it one thing the person did with a specific object, and if you cannot, cut the adjective. And read your interpretation sentence looking for always, never, and every; where you find one, shrink the claim back to what the scene showed.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The lunch scene inside the toast',
        alt: 'A lunch moves indoors, a plate and place are kept, and the speaker interprets the welcome.',
        caption: `Look at the middle box first: a plate and a chair, the only things in the jar. Then read the third box and notice that the speaker's reading is phrased as their own view of one afternoon, not a verdict. The gap between box two and box three is the gap an honest toast refuses to over-jump. These fictional actions support a bounded interpretation, not a judgement of the couple's whole character.`,
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
        `Using the fictional lunch above, write the word considerate at the top of the page, then underneath list the two actions that make the word mean something: a plate kept, a chair moved. The label and what is in the jar.`,
        `Draft three spoken sentences, one each for situation, actions, and your interpretation. Keep the interpretation sentence about this afternoon, not about every occasion, so its size matches the evidence.`,
        `Read the passage aloud and cross out any universal claim such as always or never. Keep the word fictional attached to the lunch unless you replace it with a real memory you can recount accurately and the couple would be glad to hear.`,
      ],
      notice: `Anyone hearing the toast can point to the action behind your description, and the limit of what you are claiming is visible in the way you phrased the last sentence.`,
      troubleshooting: `If the passage is still mostly adjectives, name what a person did with a specific object, and the adjective will usually become unnecessary. If your interpretation has grown to the couple's whole character, cut it back to what one plate and one chair can carry.`,
    },
    recall: {
      prompt: 'You call a website confusing during a design review. What scene could clarify that claim without inventing user research?',
      hint: 'Describe one attempt and say whose attempt it was.',
      answer: `Put something in the jar and say whose it is. Confusing is the label; the scene is your own attempt: I wanted the opening time, I clicked Visit, then About, then Contact, and found it in the footer after four pages. That is specific, checkable, and honest about its source, because you have said it was you. What it shows is that one person had trouble following one route. It does not show how often all visitors struggle, and you should not let the sentence drift towards users find it confusing, which would be inventing research you have not done.`,
    },
    quiz: {
      question: 'A fictional story shows a visitor missing an unsigned doorway. What can the speaker reasonably say?',
      options: [
        'The story establishes that missing signs are the usual cause of lateness.',
        'The story illustrates how a missing sign could affect this arrival.',
        'The story confirms that adding a sign will solve the venue’s delays.',
      ],
      correctIndex: 1,
      explanation: `Saying the story illustrates how a missing sign could affect this arrival keeps the claim the same size as the scene: one visitor, one doorway, one possible mechanism. Saying missing signs are the usual cause of lateness turns one invented visitor into a frequency, which needs counting real arrivals. Saying a sign will solve the delays predicts the result of a fix, which an invented story cannot test; both of those are reading a label the jar does not contain.`,
    },
    takeaway: `An adjective is a label and a scene is what is in the jar: show one specific thing a person did with a specific object, keep fiction labelled as fiction, and phrase your conclusion as your reading of that one occasion rather than a verdict on every occasion, so the claim stays the same size as the evidence.`,
    sourceNote: 'Jobs’ calligraphy account is autobiographical, not causal proof. The toast is original fiction; its reading of consideration is explicitly subjective.',
  },
  {
    id: 'speaker-005',
    outcome: `Pull a persuasive request apart into three separate checks, why trust this speaker, why it matters to people, and what the reasoning is, so that none of the three quietly stands in for the others.`,
    scene: 'Requesting a caption check before a community film screening.',
    sections: [
      {
        title: 'One proposal, different kinds of support',
        paragraphs: [
          `You are at the planning meeting for a community film screening, and you want the captions tested before the night. Your draft line is: trust me, audiences deserve better. It feels strong when you say it in your head. Read it coldly and it contains a demand for trust, an appeal to feeling, and no description of any work anyone should do.`,
          `Here is what you actually know. You opened one film's file and found that it includes a caption track. You have not tested whether the venue's player will display that track on the night. Those are two different facts, and the gap between them is the whole point of your request. Knowing a file contains captions tells you nothing about what the audience will receive from the projector.`,
        ],
      },
      {
        title: 'Three questions for the draft',
        paragraphs: [
          `Think of a job reference. A good one answers three separate things: who is writing and how well they know the candidate, why it matters that this person gets the job, and what they actually did that supports the recommendation. A reference that is all warmth and no examples gets discounted. One that is all examples from someone who barely knew them gets discounted too. Readers check the three parts independently, and a weak part is not rescued by a strong one.`,
          `Aristotle described persuasion the same way, as working through the speaker's presented character, the listeners' emotions, and the argument itself. The traditional names are ethos, pathos, and logos. In plain terms: why should this speaker be relied on here, why does the issue matter to people, and what supports the recommendation. These are categories for inspection, not a recipe. Being genuinely qualified does not repair a weak inference. A moving consequence does not show how often it happens. A number without context is a feeling in disguise.`,
        ],
      },
      {
        title: 'Give each sentence a checkable job',
        paragraphs: [
          `Rewrite the request as three sentences with one job each. I checked that this film file includes captions, but not the venue playback. If the captions fail, a viewer relying on them loses the dialogue. I propose testing a short passage on the event player before we advertise caption access. The first bounds your experience, stating what you did and did not check. The second names a real consequence without inventing a distressed person. The third ties the untested condition to one specific action.`,
          `Now run the reference-letter test. Read the proposal with the second sentence removed. Does the recommendation still have a reason? It does: the file is checked, the playback is not, so test the playback. The emotional sentence was adding weight, not carrying it. Put it back, because the consequence is true and relevant, but notice that it is no longer doing the job of the argument. Then try removing the first sentence. The request still makes sense, but nobody knows why you are the one to say it, which is a different hole.`,
        ],
      },
      {
        title: 'When one check pretends to be another',
        paragraphs: [
          `The common failure is substitution. Trust me is credibility offered in place of a reason. Audiences deserve better is feeling offered in place of a reason. A speaker with a real qualification lets it imply that the inference must be sound. None of these are lies, exactly. They are one column of the reference letter spilling over into another, and a careful listener feels the spill even if they cannot name it.`,
          `Two habits. For any request you are about to make, write three lines labelled trust, matters, and reason, and fill each one from the draft; an empty line tells you what is missing. And read the draft once with the emotional line covered up, to see whether a reason is still standing there on its own.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Three sentences in the caption proposal',
        alt: 'The same proposal contains bounded experience, an access consequence, and a reason for testing playback.',
        caption: `Read the first box and notice that it says what was not checked as well as what was; that limit is what makes the credibility honest. Then cover the middle box and read boxes one and three together: the request still has its reason. The middle box adds weight but is not carrying the argument. This is the original speaking order, not a required formula.`,
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
        `Copy the three-sentence caption proposal from the lesson. Circle the words that describe the speaker's experience, underline the words about consequences for people, and bracket the words that give the reason. Three marks, three columns of the reference letter.`,
        `Look at the circled part and write down what the speaker inspected and what remains untested. Make sure that boundary is spoken in the first sentence; credibility that hides its limit is the kind listeners discount.`,
        `Read the proposal aloud with the underlined consequence covered. Write the practical reason for the requested check in your own words. If you cannot, the feeling was standing in for the reasoning.`,
        `Restore the consequence. Strike out any phrase that claims how every viewer will feel, and keep only what follows if captions fail. Check that all three marks are still visible in the final version.`,
      ],
      notice: `The request still has a reason when the emotional sentence is removed, and it still has a consequence when the reason is removed. Each part can stand alone, which is why they are stronger together.`,
      troubleshooting: `If your credibility sentence amounts to I care about this, add relevant experience and its limit, without inventing expertise you do not have. If the reason sentence collapses when the feeling is covered, the proposal needs an actual mechanism, such as what was tested and what was not.`,
    },
    recall: {
      prompt: 'You propose a shaded rest area at a craft fair. How would you review the speech without treating concern as proof?',
      hint: 'Separate your observations, the human consequence, and the proposed response.',
      answer: `Write the three reference-letter lines. Trust: what you actually observed at the site, for example that the only benches were in full sun at midday on your visit, and that you did not visit at other times. Matters: why rest options matter to visitors, such as older people and parents with small children. Reason: whether the specific spot you propose is usable, shaded at the relevant hours, and clear of the stall routes. Caring about visitors fills the middle line convincingly and does nothing for the third. If the third line is empty, you have a feeling and a location but not yet a proposal.`,
    },
    quiz: {
      question: 'A moving library appeal includes no reason that later opening addresses the reported problem. What needs revision?',
      options: [
        'The link between the problem and the proposed opening hours.',
        'The balance, so each rhetorical category occupies equal time.',
        'The biography, so the audience hears more about the speaker.',
      ],
      correctIndex: 0,
      explanation: `The missing piece is the link between the problem and the proposed hours, which is the reason column of the reference letter; the appeal has feeling and possibly credibility, but nothing that shows later opening fixes what was reported. Equal time for the three categories was never the requirement; they are checks, not a quota. A longer biography adds to the trust column and cannot fill the empty reason column, which is exactly the substitution the lesson warns about.`,
    },
    takeaway: `Check a request the way a reader checks a job reference, who is speaking and how far their knowledge goes, why it matters to people, and what the reasoning actually is, as three separate columns, because trust me and people deserve better are feelings and credentials pretending to be a reason.`,
    sourceNote: 'Aristotle supplies analytical categories, not a persuasion formula. The caption proposal is an original ethical review, not a tested intervention.',
  },
  {
    id: 'speaker-006',
    outcome: `Find the unstated assumption hiding between a fact and a therefore, say it out loud, and check whether a different assumption changes the recommendation.`,
    scene: 'Deciding whether a zine fair needs more display panels.',
    sections: [
      {
        title: 'The missing step after therefore',
        paragraphs: [
          `You are organising a zine fair. Twelve contributors have registered. The hall has eight display panels. At the planning meeting you say: we have twelve contributors, so we need four more panels. Everyone nods, because twelve minus eight is four and the arithmetic is obviously right.`,
          `The arithmetic is right. The conclusion only follows under one particular arrangement, which nobody has said: that each of the twelve contributors needs their own panel, all at the same time. Perhaps two friends who make a joint zine would be happy to share. Perhaps the programme could show six zines in the morning and six in the afternoon. Your sentence has folded all those planning choices into a word, so, that makes the answer sound inevitable. A listener cannot judge whether four more panels is right, because the thing that makes it right or wrong was never put in front of them.`,
        ],
      },
      {
        title: 'State the link in ordinary language',
        paragraphs: [
          `A recipe says: this serves four, so for eight people double everything. The hidden assumption is that everyone eats one portion and nobody is sharing a starter or skipping dessert. Usually fine. But if three of the eight are small children, doubling wastes half the food, and the only way to notice is to say the assumption aloud: one adult portion each. Once it is spoken, you can check it against the actual guests.`,
          `The sentence an argument quietly relies on is called a premise. In the zine fair, the missing premise is: each of the twelve contributors needs one panel at the same time. With that premise stated, demand is twelve panels, supply is eight, shortage is four, and the recommendation is sound. Without it, a count of contributors is not a count of panels. Aristotle's writing on rhetorical argument draws attention to how premises and conclusions connect in speech, which is where this idea comes from. He used the term enthymeme for a rhetorical argument. That word has a long and contested scholarly history, and it does not simply mean any sentence with a missing step, so borrow the habit of looking for the premise rather than the label.`,
        ],
      },
      {
        title: 'Make the recommendation conditional',
        paragraphs: [
          `Say the premise in the room. If everyone displays separately for the whole fair, twelve entries need twelve panels. We have eight, which leaves four to borrow. Before I arrange that, I will ask whether anyone would prefer to share a panel or to display in a timed slot. The subtraction is intact. The arrangement is reopened. The decision has moved from inevitable to chosen, which is where it belonged.`,
          `Now try a different premise and watch the number move. Suppose four pairs of contributors agree to share, and the remaining four display alone. Four shared panels hold eight people; four solo panels hold the other four. That is eight panels for twelve contributors, and eight is what you already have. The shortage of four has gone to zero without changing a single registration. This does not prove that sharing is better. Shared panels are more crowded and harder to read, and some contributors will want their own space. What it proves is that the original assumption was doing all the work, and it deserved to be said.`,
        ],
      },
      {
        title: 'Why the so is never questioned',
        paragraphs: [
          `Arithmetic feels like proof, so a sentence with a correct subtraction in it borrows that feeling for the whole claim. The listener checks twelve minus eight, finds it right, and stops. The unstated premise never gets checked because it was never visible. The speaker often does not know they made it; the one-panel-each picture was simply the first one that came to mind.`,
          `Two habits. Whenever you hear or say a so, therefore, or which means, pause and write the sentence that would have to be true for the step to hold. And before recommending a number, try one alternative arrangement and see whether the number survives; if it does not, the choice of arrangement is the real decision.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Panel demand depends on the arrangement',
        alt: 'Separate displays need twelve panels; eight are available; the described sharing arrangement needs eight.',
        caption: `Compare the first and third bars first. Both represent the same twelve contributors, yet one needs twelve panels and the other eight. The only thing that changed between them is the unstated premise, one panel each at the same time. The middle bar is what the hall already has, so under the sharing arrangement the shortage disappears. Hypothetical counts: four pairs plus four solo contributors.`,
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
        `Write the claim in full: twelve contributors and eight panels mean four more panels are needed. Circle the conclusion, four more panels, so you can see exactly what the so is supposed to deliver.`,
        `Above the circle, write the sentence that has to be true for the subtraction to matter: one separate panel per contributor, all at the same time. This is the premise that was hiding; writing it down is the whole skill.`,
        `Sketch an alternative: four panels with two sets of initials each, and four panels with one. Count contributors and panels separately, twelve and eight, to confirm that the same people fit into fewer panels under a different premise.`,
        `Draft a spoken recommendation that states the premise as an if, keeps the arithmetic, and asks about sharing before arranging more panels. Read it aloud and check that a listener could disagree with the premise rather than the sum.`,
      ],
      notice: `Both sketches account for all twelve contributors, but one needs twelve panels and the other needs eight. The number that looked like a fact turned out to be a choice.`,
      troubleshooting: `If you keep counting four pairs as four people, write two sets of initials on every shared panel and count the initials. If you cannot find the hidden premise, ask what picture you had in your head when you did the subtraction; the picture is the premise.`,
    },
    recall: {
      prompt: 'A class has grown, so someone recommends a second tutor. What premise should the speaker examine?',
      hint: 'An increase does not identify the limiting resource by itself.',
      answer: `Write the sentence that has to be true for more students to mean another tutor: the amount of teaching attention available is now too little for the planned activities, and attention is the thing running short. Then test it against alternatives, the way four pairs tested the panel count. Would splitting into two groups taught at different times solve it? Would changing the activities to ones that need less one-to-one time? Would a bigger room matter more than a second person? If the recommendation survives those, it is sound. If it only survives under the picture of one tutor circulating among every student at once, that picture was the real claim and it should be said.`,
    },
    quiz: {
      question: 'A workshop has ten people and six tools. What must be checked before claiming four more tools are necessary?',
      options: [
        'Whether earlier workshops had fewer people than this one.',
        'Whether borrowing four tools costs less than buying them.',
        'Whether everyone needs a separate tool at the same time.',
      ],
      correctIndex: 2,
      explanation: `Whether everyone needs a separate tool at the same time is the hidden premise that turns ten people and six tools into a shortage of four; if people work in pairs or in two shifts, the same ten fit the six tools, exactly as the four pairs fitted eight panels. Earlier attendance is history and says nothing about today's arrangement. Borrowing versus buying is a question about how to get four tools, which only matters once you have shown that four are actually needed.`,
    },
    takeaway: `Every so hides a sentence that has to be true for the step to hold, like the one portion each inside a recipe's doubling rule: write that sentence down, say it as an if in the room, and try one alternative arrangement to see whether the recommended number survives, because when it does not, the arrangement was the real decision.`,
    sourceNote: 'Premise checking draws on Aristotle’s rhetorical arguments. The panel calculation is hypothetical; not all enthymemes are defined by omitted premises.',
  },
  {
    id: 'speaker-007',
    outcome: `Introduce a personal account as one person's experience of one time and place, so it stays true to its teller instead of being stretched into a claim about everyone like them.`,
    scene: 'Introducing recorded stories for a local oral-history exhibition.',
    sections: [
      {
        title: 'A headline larger than its evidence',
        paragraphs: [
          `You are writing the introduction for a local oral-history exhibition. One of the recordings is Leena's. She describes her first month in town: evenings alone in a rented room, until she found a sewing group and people to talk to. Your draft introduction opens with a line you are rather proud of. Newcomers here have nobody.`,
          `It is a good line and it is not true to the evidence. It has taken one woman's account of one month and turned it into a fact about every person who has ever moved to the town. Another recording in the same collection is Yusuf's. He arrived to stay with relatives and spent his first weeks cooking with the neighbours. His story does not cancel Leena's loneliness; both happened. What it does is show you how far your headline had wandered from what any single person actually said.`,
        ],
      },
      {
        title: 'More than a balancing anecdote',
        paragraphs: [
          `Think of a photograph with a caption. A photo of one wet street says nothing about the town's climate, but caption it rainy town and viewers will believe they have learned something about the weather. The honest caption is the one the photo can carry: High Street, Tuesday afternoon, March. The picture has lost none of its power. It has gained a frame that tells the viewer what they are actually looking at.`,
          `Chimamanda Ngozi Adichie's talk The danger of a single story is about what happens when one narrative about a place or a people is repeated until it becomes the only one, flattening everyone it describes. She argues from personal accounts and sets different stories side by side. It is a speaker's argument about representation, not a controlled study of exhibition scripts, so take it as a way of thinking rather than a proven method. Applying it does not mean hunting for a cheerful story to balance every hard one. It means asking three things: whose experience is this, when did it happen, and who has not been heard. Even two or three accounts do not add up to a representative sample. And nobody owes a presenter their personal story to fill a gap in the theme.`,
        ],
      },
      {
        title: 'Introduce two people, not one identity',
        paragraphs: [
          `Try this introduction. Leena describes evenings alone during her first month here. Yusuf remembers joining relatives and neighbours for meals. These are two participants' accounts, shared with permission; they are not a survey of everyone who has moved to town. Each account now has a name, a time, and a scope. Leena's loneliness is intact and specific. Yusuf's welcome is intact and specific. The visitor is told plainly that two people are not a town.`,
          `For a real exhibition, confirm that each teller agreed to this use and keep their meaning as they meant it, not trimmed to fit your theme. If you only have Leena's recording, say so, and do not invent a Yusuf to balance her. You can invite further voluntary contributions, but do not promise the audience that they will confirm your headline. The narrower introduction leaves room for the experiences your collection has not yet gathered, which is a more truthful thing to leave on the wall than a slogan.`,
        ],
      },
      {
        title: 'Why one story becomes everybody’s',
        paragraphs: [
          `Headlines generalise because generalisations are quotable, and because a single vivid account feels like it must stand for something bigger or why would it matter. It matters because it happened to Leena. That is enough. The moment it becomes newcomers, it stops being hers and becomes a claim about people who were never asked, some of whom would recognise themselves and many of whom would not.`,
          `Two habits. For every account you introduce, write the caption the photograph can carry, who, when, where, before you write anything else. And when you hear yourself say some people or newcomers or they, replace it with the name of the person who actually told you, and see whether the sentence is still one you can stand behind.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two arrivals remain two accounts',
        alt: 'Leena remembers lonely evenings; Yusuf remembers meals with relatives and neighbors.',
        caption: `Read the two labels before the quotes: each carries a name and a moment, which is the caption the photograph can carry. Then notice that neither quote is bigger than the other or cancels it. Both people are fictional. Setting them side by side shows how far a headline can drift from a single teller, not what proportion of newcomers feel either way.`,
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
        `Copy the fictional headline Newcomers here have nobody, then the two accounts from the lesson. Underline the word in the headline that does the generalising, newcomers, and write beside it the name of the one person whose account it came from.`,
        `Write a new introduction that gives each account its photograph caption: whose experience, and when it happened. Keep the word fictional attached for this exercise, so the invented people are never performed as real ones.`,
        `Write down one perspective your two accounts do not contain, such as someone who arrived with children, without inventing what that person would say. Naming the gap is honest; filling it with a guess is not.`,
        `Read your introduction aloud and strike out any phrase that lets two accounts stand for what most newcomers experience. Add a line noting that permission was confirmed, which a real exhibition would need.`,
      ],
      notice: `The introduction names individuals, times, and the limits of the collection, and both accounts are still there at full strength. Nothing was cancelled by being made specific.`,
      troubleshooting: `If some people or many newcomers has crept back in, replace it with the teller's name and the occasion they described. If you find yourself inventing a second story to balance the first, stop; say you have one account and invite more.`,
    },
    recall: {
      prompt: 'One apprentice describes an unhelpful mentor. How would you introduce the story in a careers discussion?',
      hint: 'Do not make one placement speak for an occupation.',
      answer: `Give it the caption the photograph can carry: this is one apprentice's account of one placement, told with their permission, and it describes what happened between them and one mentor in one workshop in one year. Then say plainly that you have not assessed other placements, so the room knows the scope. What you must not do is let the story become mentors in this trade do not help, which labels every mentor on the strength of one, including the ones who would have handled that apprentice well. The story keeps its force as a specific warning; it loses its truth the moment it becomes a general one.`,
    },
    quiz: {
      question: 'You have one resident’s bus-route account and no broader survey. How should you introduce it?',
      options: [
        'Present it as an account of how the neighborhood experiences its buses.',
        'Wait for a positive account so both sides receive equal time.',
        'Identify the resident and journey, and say that wider experiences remain uncollected.',
      ],
      correctIndex: 2,
      explanation: `Identifying the resident and the journey and saying that wider experiences are uncollected is the photograph with its honest caption: one person, one route, one time, with the gap named. Presenting it as how the neighbourhood experiences its buses is the rainy town caption, a claim about hundreds of people who were never asked. Waiting for a positive story to balance it misunderstands the lesson; a single bounded account can be shared as it is, and manufacturing a counterweight would be its own distortion.`,
    },
    takeaway: `A personal account is a photograph, and the honest caption is who, when, and where: introduce each story as its teller's experience of one time and place, name the perspectives you have not collected rather than inventing them, and treat any slip into newcomers or they as the moment the story stopped being true to the person who told it.`,
    sourceNote: 'Adichie supplies the narrative critique. This application is interpretive; the exhibition and rehearsal are original fiction, not validated research on audiences.',
  },
  {
    id: 'speaker-008',
    outcome: `Say out loud who the source is and what kind of evidence it gives, right next to the claim it supports, and mark clearly where the evidence stops and your own example begins.`,
    scene: 'Explaining memory during a family-photograph discussion at a history club.',
    sections: [
      {
        title: 'A source listeners can hear',
        paragraphs: [
          `At the history club, someone has brought a photograph of a family outing from the 1980s, and three relatives in the room remember the day three different ways. You want to explain why memory is not a recording. Your slide says: research proves our memories are wrong. Underneath, in small type, is a link.`,
          `Two things have gone wrong. The sentence claims far more than any research does. Nobody has proved that memories are wrong, only that they can be shaped. And the only trace of where the claim came from is a small link. A listener at the back, someone who is blind, or anyone hearing the recording later will never see it. A useful spoken source tells people whose work you mean and what sort of support it offers. It also leaves room for the relative whose memory of the day is perfectly accurate, because disagreement is not proof that anyone is wrong.`,
        ],
      },
      {
        title: 'Match the claim to the source’s job',
        paragraphs: [
          `Think of a witness in a courtroom. Before they say anything, someone establishes who they are and how they know what they know: I am the neighbour, I saw the car from my window. The jury then weighs what follows against that. A neighbour who saw the car is not the same as a mechanic who inspected it. Nobody pretends otherwise. The witness's standing is said aloud, before the testimony, so that everyone can judge it fairly.`,
          `Your source needs the same introduction. Cara Laney and Elizabeth Loftus wrote a chapter for Noba, an open educational psychology resource, surveying research on eyewitness memory and the ways memory can be biased. That is an educational overview. It is not an experiment run on your history club, and it is not a verdict on your aunt. So say: in their Noba overview, Laney and Loftus describe research showing that information received after an event can affect how people recall it. That sentence names the authors, the resource, the type of evidence, and the size of the claim. Put the full link in the handout. Do not make listeners wait for the handout to discover that your spoken version was bigger than the source.`,
        ],
      },
      {
        title: 'Mark where your own illustration begins',
        paragraphs: [
          `Then step out of the witness box and say so. Here is an invented example, not a test of anyone in this room. After a picnic, one person mentions a red blanket. Another person, who had not thought about a blanket at all, begins to picture one. The scene shows the kind of influence the research describes. It does not say which of your relatives is right about the 1980s outing, and it does not establish that there was no blanket.`,
          `If you give a number, say what sort of number it is: from a particular study, an estimate, or a figure in your made-up example. If you cannot check a figure, leave it out; a confident percentage you cannot trace is worse than no percentage. And remember that a respected name is not a bridge. Loftus's reputation does not connect what the research reports to what you say it demonstrates. Only the actual content of the source can do that, which is why you have to say what the content is.`,
        ],
      },
      {
        title: 'Why sources shrink to a link',
        paragraphs: [
          `Speakers bury sources because saying them feels clunky, and because a study says sounds authoritative without committing to anything checkable. The link on the slide feels like due diligence. But the listener who cannot see it has been given a claim with no witness. The listener who can see it has been given a witness with no stated standing. Neither can weigh what they heard.`,
          `Two habits. For every claim you support with a source, say three things in the same breath: who, what kind of thing it is, and what it actually supports. And whenever you move from the evidence into your own example, say the word invented or for instance out loud, so nobody mistakes your picnic for their data.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Where the evidence stops and illustration starts',
        alt: 'A spoken reference identifies a research overview before the presenter labels an invented picnic example.',
        caption: `Start with the first box and count what it contains: the authors, the resource, and the word overview, which tells the listener what kind of witness this is. The second box is the claim kept to the size the source supports, with the not every memory clause intact. The third box is where the speaker steps out of the witness box and says invented. The sequence separates source role, supported claim, and original illustration.`,
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
        `Write one spoken sentence that names Laney and Loftus, names Noba, and calls the chapter an educational overview. That is the witness stating who they are and how they know, before any testimony.`,
        `Add the bounded claim: information received after an event can affect how people recall it. Do not attach a percentage; you have not read one you can check, and a confident number you cannot trace is the thing this lesson is against.`,
        `Write the picnic scene and begin it with the words here is an invented example. The label is what keeps your illustration from being mistaken for the research.`,
        `Read all three sentences aloud with no slide. Ask whether a listener who heard only your voice could say which part was the overview, which was the claim, and which was your example. If any two blur, the boundary words are missing.`,
      ],
      notice: `From the speech alone, a listener can tell the kind of evidence from the invented example. The source has a name and a job, and the picnic is clearly yours.`,
      troubleshooting: `If a study says or research shows is still in your draft, replace it with the actual resource and what kind of thing it is. If your claim has grown back to memories are wrong, cut it to what the overview supports: later information can affect recall.`,
    },
    recall: {
      prompt: 'You cite one curator’s interview in a museum talk. How would you keep its scope audible?',
      hint: 'An interview is neither a survey nor your own experiment.',
      answer: `Put the witness in the box before the testimony. Say who the curator is, that this comes from an interview they gave, and what the interview actually supports: one experienced person's account of how visitors behaved in the galleries they ran. Then keep the claim that size. An interview is one person's recollection and judgement, so you cannot turn it into visitors spend an average of eight seconds per painting, which sounds like a measurement and is not one. If the curator estimated a figure, say they estimated it. The listener can then weigh a curator's impression for what it is, which is worth something, rather than being handed it disguised as data.`,
    },
    quiz: {
      question: 'An audio presentation uses a guideline to justify a suggested routine. Which attribution fits?',
      options: [
        'Name the guideline beside the recommendation and call it guidance.',
        'Read the recommendation and leave the evidence type to the final link list.',
        'Describe the routine as tested because the guideline’s publisher is respected.',
      ],
      correctIndex: 0,
      explanation: `Naming the guideline beside the recommendation and calling it guidance puts the witness in the box with their standing stated: the listener hears who, what kind of document, and what it supports, all in the same breath. Leaving the evidence type to a final link list gives an audio listener a claim with no witness at all, and a link cannot repair a claim that was already too big. Calling the routine tested because the publisher is respected uses a reputation as a bridge; a guideline recommends, and only an actual trial could show the routine was tested.`,
    },
    takeaway: `Treat every source like a witness who must state who they are and how they know before they speak: say the name, the kind of evidence, and the exact claim it supports in one breath, keep the claim no bigger than the source, and say invented aloud the moment you step from their evidence into your own example.`,
    sourceNote: 'The inherited Noba overview supports the memory topic. Audible attribution is an original routine informed by rhetorical attention to claims and support.',
  },
  {
    id: 'speaker-009',
    outcome: `Put a pause at the boundary between two complete ideas, never in the middle of one, and then check what the listener actually understood rather than how the pause sounded.`,
    scene: 'Explaining the end-of-turn rule of an invented card game.',
    sections: [
      {
        title: 'Two rules arriving as one rush',
        paragraphs: [
          `You are teaching friends a card game you made up. The rule has two parts. Drawing one card ends your turn. The card you just drew cannot be played until your next turn. You say both parts in one breath while shuffling the rest of the deck, and someone immediately asks: so if I draw, can I then do something else?`,
          `The problem is not your voice. You did not need to be louder or more commanding. The instruction and the restriction attached to it arrived as a single rush, and the listener could not hear where one ended and the other began. Fix the wording first, so each part is a complete sentence. Then consider whether a short gap between the two sentences makes their relationship easier to hear.`,
        ],
      },
      {
        title: 'Put the gap between complete ideas',
        paragraphs: [
          `A pause in speech works like a full stop on a page. The full stop goes after the sentence is complete, and it tells the reader that one thought is finished before the next starts. Nobody puts a full stop in the middle of a phrase. A pause placed after the draw but before the card splits a unit of meaning. A pause placed after end your turn marks the end of one complete thought.`,
          `Julian Treasure's TED talk on speaking demonstrates pace and silence among several vocal tools. His demonstration gives you something to inspect and try, not a recommended duration for a pause or proof that pausing makes people believe you. For your game, say: draw one card to end your turn. Pause comfortably, about as long as it takes to breathe. Then say: keep that card until your next turn; you cannot play it now. The gap follows a complete instruction and precedes a complete restriction. And remember that a pause cannot rescue a sentence that is ambiguous on its own. If the words are muddled, fix the words before you rehearse their timing.`,
        ],
      },
      {
        title: 'Check the rule rather than the performance',
        paragraphs: [
          `Now test the result, not the delivery. Ask a willing listener what happens after someone draws a card. Or record both readings and play them back. If your listener understands that the turn has ended but thinks the new card can still be played, the restriction did not land, and that is the sentence to work on. Repeat that part plainly. Do not keep lengthening the silence to pressure them into answering; a longer gap does not make an unclear sentence clearer.`,
          `Give people room to ask for a repeat, and have the rule written down beside the spoken version for anyone who finds speech harder to follow. Fillers, accents, stammers, and unusual rhythms are not measures of intelligence or of how good the rule is. This rehearsal asks one question: did a particular instruction arrive intact? It is not asking whether you sound like a professional narrator.`,
        ],
      },
      {
        title: 'Why pauses land in the wrong place',
        paragraphs: [
          `Speakers pause where they need to breathe or think, which is often mid-phrase, and they rush through boundaries because the next thought is already pressing. So the gaps fall where the speaker's head is, not where the listener's understanding needs them. Treating the pause as a full stop fixes this: it belongs after a complete idea, and it belongs there because the listener needs it, not because the speaker ran out of air.`,
          `Two habits. Before rehearsing timing, write the rule as separate complete sentences and read each on its own to make sure it stands. And after any run-through, ask the listener what happens next rather than how it sounded; the answer tells you which sentence to fix.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Where the pause divides the rule',
        alt: 'One reading splits the phrase one card; the other pauses after the complete turn-ending instruction.',
        caption: `Find the [pause] mark in each line first. In the top line it sits inside the phrase one card, like a full stop dropped into the middle of a sentence, and splits a unit of meaning. In the bottom line it follows end your turn, after the first complete thought. The marks show placement only, not a measured length of silence or a required rhythm.`,
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
        `Copy the two-sentence game rule. Underline the action, draw one card to end your turn, and circle the restriction, cannot play it until next turn. You are finding the two complete thoughts so you know where the full stop goes.`,
        `Read it once with no deliberate gap, the way it came out while shuffling. Then mark a pause after the complete first instruction, not inside it.`,
        `Read the marked version at a comfortable pace. Ask a willing listener what happens after drawing, or compare your two recordings; you are checking what arrived, not how it sounded.`,
        `If the restriction is still unclear, change its words and try again rather than lengthening the silence. Keep a written copy beside you for anyone who prefers to read the rule.`,
      ],
      notice: `The turn-ending instruction and the restriction are heard as two distinct, complete thoughts. The listener can say what happens after drawing without being asked twice.`,
      troubleshooting: `If the pause feels theatrical, shorten it and let the sentence boundary do the work; a breath is enough. If the listener still thinks the drawn card is playable, the words of the restriction are the problem, so rewrite them before touching the timing.`,
    },
    recall: {
      prompt: 'During a paper-folding demo, listeners start the next fold before seeing its direction. Where could you pause?',
      hint: 'Finish the current instruction before adding the next one.',
      answer: `Put the full stop after the first fold is complete and visible. Finish the fold, hold it up so everyone has seen the result, and pause there. Then say the direction of the next fold before anyone's hands move. The gap goes between two complete actions, not in the middle of describing one. Check it the same way as the card rule: watch whether people wait and fold the right way, rather than judging how the pause felt to you. If they still jump early, the fix is probably in the wording or in whether they could see your hands, not in a longer silence.`,
    },
    quiz: {
      question: 'People confuse a confirmed date with a provisional backup date. Which delivery change fits?',
      options: [
        'Pause before every date but leave their status unstated.',
        'Name the confirmed date, pause, then explicitly label the backup provisional.',
        'Speak both dates faster so the comparison stays together.',
      ],
      correctIndex: 1,
      explanation: `Naming the confirmed date, pausing, then explicitly calling the backup provisional puts the full stop between two complete ideas and lets the words carry the distinction, which a pause alone never can. Pausing before every date with their status unstated adds gaps without telling anyone which date is which; timing cannot supply missing information. Speaking both faster is the original mistake, two ideas arriving as one rush.`,
    },
    takeaway: `A pause is a spoken full stop: write the rule as separate complete sentences, put the gap after a finished thought and never inside a phrase, and then check what the listener can say happens next, because that answer, not how the silence felt, tells you which sentence still needs work.`,
    sourceNote: 'Treasure demonstrates pace and silence. This original rule rehearsal claims no ideal pause length or proven effect on authority or comprehension.',
  },
  {
    id: 'speaker-010',
    outcome: `Stress the one word that answers the listener's actual misunderstanding, and back it with explicit wording so the correction survives for anyone who misses the tone.`,
    scene: 'Clarifying which scarf performers should bring to a rehearsal.',
    sections: [
      {
        title: 'One sentence, different corrections',
        paragraphs: [
          `You are stage-managing an amateur theatre rehearsal. Performers need a plain scarf on Sunday. The date is settled and everyone knows it, but one performer has mentioned bringing a patterned one. So you say: bring the plain scarf on Sunday, leaning a little on plain. Now imagine the opposite mix-up. Everyone has the right scarf, but someone thinks the rehearsal is Saturday. The same eight words now need the weight on Sunday.`,
          `Nothing about the instruction has changed. Same scarf, same day. What changed is which contrast you are inviting the listener to notice: plain against patterned, or Sunday against Saturday. The surrounding conversation decides which contrast matters, and your stress should follow the misunderstanding that is actually in the room, not the word you happen to feel strongest about.`,
        ],
      },
      {
        title: 'Words must carry the distinction too',
        paragraphs: [
          `Think of a highlighter pen. On a page with one highlighted phrase, the eye goes straight to it and the reader knows that is the thing to check. Highlight every line and the page is yellow and the reader is back where they started. Highlight the wrong line and the reader checks the wrong thing with great care. Vocal stress is a highlighter for the ear: one mark, on the word that answers the question the listener actually has.`,
          `The patterns of rhythm, stress, and rise and fall in speech are called prosody. Julian Treasure discusses and demonstrates vocal variety in his talk, and his demonstration is worth hearing as a set of options to try, not a sound to copy. The limit of stress is that it is easy to miss. A listener who is tired, in a noisy room, or following in a second language may not catch a slight lean on one word. So pair the highlight with words that say the contrast outright: bring the plain scarf, not the patterned one; Sunday has not changed. Any written reminder or caption should carry that same contrast. Nobody should have to detect a pitch change to receive the essential instruction.`,
        ],
      },
      {
        title: 'Keep certainty separate from emphasis',
        paragraphs: [
          `Now suppose the director has not actually confirmed Sunday. An emphatic Sunday in your voice will sound like a promise, and a highlighter does not know the difference between a fact and a hope. Say the status in words: Sunday is proposed; I will share the confirmed date when it is agreed. The qualification lives in the sentence, where everyone receives it, not in a doubtful tone that listeners would have to decode.`,
          `During rehearsal, ask a listener two questions: which detail changed, and which stayed the same. If their answer does not match what you intended, change the sentence as well as the stress, because the stress was probably not the only thing misleading them. And hold onto one more distinction. A flat voice is not evidence of dishonesty, and a lively, confident voice is not evidence that a statement is true. Emphasis tells people where to look. It does not tell them what they will find.`,
        ],
      },
      {
        title: 'Why speakers highlight the wrong word',
        paragraphs: [
          `People stress the word that feels most important to them, which is usually the one they have been worrying about, rather than the one the listener got wrong. The stage manager who spent all week on scarves leans on scarf even when the room's confusion is about the day. Starting from the misunderstanding instead of from your own preoccupation puts the highlighter in the right place.`,
          `Two habits. Before you correct anyone, name the mix-up in your head, wrong scarf or wrong day, and stress only the word that answers it. And whenever a detail is not yet confirmed, say proposed or not yet agreed in words, so your most emphatic reading cannot turn a plan into a promise.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Which part of the scarf reminder changes?',
        alt: 'Emphasis on plain corrects the scarf choice; emphasis on Sunday corrects the date.',
        caption: `Read the two labels first and notice that the sentence underneath is identical in both. Only the highlighted word moves, and each label tells you which misunderstanding that highlight is answering. Then read the second half of each line: that is the explicit contrast carried in words, so the correction survives if the stress is missed. No particular accent or voice is required.`,
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
        `Write the scarf reminder twice. Above the first copy write wrong scarf; above the second write wrong day. You are naming the misunderstanding before choosing where the highlighter goes.`,
        `Underline the single word in each copy that answers its heading, then read both aloud at a comfortable level. One highlight per sentence; if you want to underline two words, you have not decided which mix-up you are fixing.`,
        `Add a second clause to each version that states the contrast in words, not the patterned one, or not Saturday. This is what reaches the listener who misses the stress entirely.`,
        `Change the scenario so Sunday is only a proposal. Rewrite the sentence so that even your most emphatic reading of Sunday cannot sound like a confirmed date.`,
      ],
      notice: `Each version points at exactly one correction, carries that correction in plain words as well as in stress, and says honestly whether the detail is confirmed.`,
      troubleshooting: `If you find yourself stressing every word, the page has gone yellow; go back to the heading and pick only the word that answers it. If you cannot decide which word, you have not identified the listener's mistake yet, so ask them what they think the plan is.`,
    },
    recall: {
      prompt: 'Someone sends a draft instead of a signed form, but the deadline is unchanged. How would you phrase the reminder?',
      hint: 'The mistaken distinction concerns the document, not the time.',
      answer: `Name the mix-up first: wrong document, right deadline. So the highlighter goes on signed, and the deadline is explicitly marked as unchanged so nobody starts worrying about the date. Please send the signed form, not the draft; the deadline is unchanged. Leaning on signed is useful if you are speaking, but the sentence already does the job in writing, because the contrast with the draft is said outright and the unchanged deadline is stated rather than implied. If you had stressed deadline instead, you would have sent a careful person off to check a date that was never in question.`,
    },
    quiz: {
      question: 'A teammate knows tonight’s deadline but has selected an older film cut. What should the reminder emphasize?',
      options: [
        'Tonight, to repeat the already agreed deadline.',
        'Send, to emphasize that an action is expected.',
        'Latest cut, with wording that distinguishes it from the older version.',
      ],
      correctIndex: 2,
      explanation: `The misunderstanding is about which version, so the highlighter belongs on latest cut, with words that say not the older one so the correction survives without the stress. Emphasising tonight points the listener at a deadline they already have right, which wastes the one highlight and may make them doubt the date. Emphasising send stresses an action nobody was confused about and still leaves them attaching the wrong file.`,
    },
    takeaway: `Vocal stress is a highlighter for the ear, so use one mark, on the word that answers the listener's actual mistake, say the contrast in plain words too for anyone who misses the tone, and keep certainty in the wording rather than the voice, because an emphatic reading can turn a proposal into a promise.`,
    sourceNote: 'Treasure supplies a prosody demonstration, not proof about trustworthiness. The rehearsal does not require voice imitation, accent change, or a particular speaking style.',
  },
  {
    id: 'speaker-011',
    outcome: `Test whether your words reach the farthest listener with the real equipment running, fix the setup rather than straining your voice, then check understanding and access as separate questions.`,
    scene: 'Checking speech audibility before an illustrated talk in a projector room.',
    sections: [
      {
        title: 'The presenter does not hear the back row',
        paragraphs: [
          `You are about to give an illustrated talk in a community room. Standing beside the screen, you can hear yourself perfectly well. A friend who has agreed to help sits in the back row while you run through the opening. When the projector fan starts, she says she is losing the ends of your sentences.`,
          `That report is about the room, the equipment, and the distance. It is not about her attention and it is not about your confidence. Testing only from the front, where you stand, would never have found it, because the presenter is the one person in the room who never hears what the back row hears. Ask her which words went missing. Test with the projector actually running, since that is the condition on the night. And remember that one helper is one pair of ears; she can tell you what reached her seat, not what will reach everyone.`,
        ],
      },
      {
        title: 'Adjust the setup before straining',
        paragraphs: [
          `Think of a phone call with a bad line. When the other person says you keep cutting out, you do not start shouting into the handset. You move to a window, switch off the speaker, or call back on a different connection. The problem is the channel, and the fix is to change the channel, not to force more through it. A room with a fan is a bad line between you and the back row.`,
          `Julian Treasure lists volume among the vocal tools in his talk, but nothing in it says you should push your voice, lower your pitch, or swap your normal speaking voice for a performance one. Start with the channel. Try the venue's microphone at a comfortable level. Ask the organiser about where it should be placed and whether the room has amplification you did not know about. If speaking begins to hurt, stop; a sore throat on the night is a worse outcome than a quieter talk. Do not fiddle with the projector's electrics or block its vents to hush the fan. And be honest about what you could not test: a quiet rehearsal with no fan cannot certify a noisy event, so write down that the real condition was unavailable rather than assuming it will be fine.`,
        ],
      },
      {
        title: 'Hearing words is one check',
        paragraphs: [
          `Use a test line that has content you can check, not just sound. The pale rectangle is the doorway; the dark line beside it is a shadow. Ask your helper first whether any words were missing. Then ask what each shape represents. Those are different questions and they can have different answers. If every word arrived but she cannot say which rectangle is the doorway, the problem is not volume. More microphone will not help. The explanation needs rewording, or the image needs describing again.`,
          `There is a third check, separate again. Ask the organiser, ahead of time, about access requirements, and arrange captions or written material where they are needed. Hearing every word is not the same as understanding the diagram, and one helper's successful paraphrase is not the same as the room being accessible to everyone in it. Keep reception, explanation, and access as three questions on your checklist, and tick them separately.`,
        ],
      },
      {
        title: 'Why the front row misleads',
        paragraphs: [
          `Speakers rehearse where they will stand, and where they stand is the one spot with no fan noise between them and their own voice. So the talk feels audible and the back row is a surprise. When the surprise comes, the instinct is to compensate with the body, louder, lower, more effort, because that feels like taking responsibility. The responsible move is the boring one: test from the far seat, with the real noise, and change the setup.`,
          `Two habits. Never sign off a room from the front; put a willing listener in the farthest intended seat with everything switched on, and ask for missing words, not for reassurance. And when the words arrive but the meaning does not, stop touching the volume and fix the sentence.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Check from the listening position',
        alt: 'A presenter and projector are at the front; both speech and projector noise reach a helper at the back.',
        caption: `Look at the back-row helper first: two arrows arrive at that seat, one carrying speech and one carrying room noise, and that seat is the only place in the diagram where both are heard together. The presenter at the front receives neither arrow, which is why testing from there finds nothing. This is a schematic room, not an acoustic prediction.`,
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
        caption: `Read the helper's line first and notice that it begins by confirming every word was heard. The question that follows is about meaning, not sound, so the presenter answers with a clearer explanation rather than a louder one. This original exchange is the second of the three checks.`,
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
        `Copy the doorway test line and draw its two shapes on paper. You want a line with checkable content, so that hearing it and understanding it can be tested separately.`,
        `With permission, ask a helper to sit in the farthest seat anyone will use, with the projector or any other noise source running. If you have no room or helper, rehearse the wording only and say so in your notes.`,
        `Speak at a comfortable level and ask which words were missing. Do not ask whether you sounded confident; that is a question about you, and this test is about the channel.`,
        `If a microphone is available, adjust its placement with the organiser and repeat the line. Do not push your voice to make up for the room, and stop if speaking hurts.`,
        `Write down exactly what was checked, from which seat, with what running, and list the room conditions and access arrangements you were not able to test.`,
      ],
      notice: `Your notes separate three things: words that went missing, meaning that did not land, and access needs that remain untested. Each has a different fix, and none of them is talking louder.`,
      troubleshooting: `If you had no venue or helper, label reception as untested rather than letting a solo run-through stand in for it; a quiet room cannot vouch for a noisy one. If the helper heard everything and still could not say which shape was the doorway, leave the microphone alone and rewrite the sentence.`,
    },
    recall: {
      prompt: 'Remote listeners hear every word but cannot follow your diagram. What should change?',
      hint: 'Audibility and understanding are separate.',
      answer: `This is the second check failing while the first passes, so volume is not the lever. Every word arrived; the relationship between the shapes did not, because it was never spoken. Describe the diagram in words: which shape is which, what sits beside what, what the arrow between them means. Then provide the picture in an accessible form, as a shared file or a described image, so people who cannot see your screen well have another route to it. Turning up the microphone would send the same unexplained diagram more loudly. It is the bad phone line mistake in reverse: the line is fine, and the message needs rewriting.`,
    },
    quiz: {
      question: 'A back-row helper misses words while the projector runs. What is the useful first response?',
      options: [
        'Check microphone and room setup at a comfortable speaking level.',
        'Lower your pitch while keeping the same equipment arrangement.',
        'Repeat the test at the front, where you heard yourself clearly.',
      ],
      correctIndex: 0,
      explanation: `Checking the microphone and room setup at a comfortable level treats the problem as a bad line and changes the channel, which is what the report described. Lowering your pitch with the same arrangement forces your body to compensate for the room and tests a change in you rather than in what reaches the seat. Repeating the test at the front measures the one position that never had the problem, so it can only produce a false pass.`,
    },
    takeaway: `A noisy room is a bad phone line, so test from the farthest seat with everything switched on, fix the microphone and setup rather than forcing your voice, and keep three separate ticks on your list, words that arrived, meaning that landed, and access needs met, because passing one of them says nothing about the other two.`,
    sourceNote: 'Treasure and the inherited communication guidance inform this adaptation. No pitch-based trust claim or universal accessibility result is implied.',
  },
  {
    id: 'speaker-012',
    outcome: `Build cue cards that record each section's job and what comes next, with any accuracy-critical limit written beside its cue, so you can lose a sentence and still recover the talk intact.`,
    scene: 'Rehearsing a one-minute demonstration of an imaginary photo-album prototype.',
    sections: [
      {
        title: 'Losing a sentence during a demonstration',
        paragraphs: [
          `You are demonstrating a photo-album prototype, invented for this exercise. The demo has three moves: choose two sample pictures, give each a label, preview the finished page. You have memorised a script. Thirty seconds in, the sentence about labels vanishes from your head. You know it was there. You know roughly what it said. You stand there hunting for the exact words while the audience watches you hunt.`,
          `A memorised script tells you exactly what you meant to say, and when a sentence drops out, that exactness becomes the trap: you are searching for one specific sentence instead of continuing the explanation. A cue card does a different job. It records what the current section is for and where the talk goes next. With that in hand, you do not need the lost sentence; you need the next move, and the card has it. Keep a full script too if it helps you, especially where exact wording matters for accuracy or access. Cues sit alongside the script. They do not replace it.`,
        ],
      },
      {
        title: 'Keep the qualification beside the cue',
        paragraphs: [
          `A recipe card is the model. It does not hold the cookbook's three paragraphs about the history of the dish. It holds the steps, in order, and any warning that matters sits on the step it belongs to: fold gently, do not stir. Nobody puts do not stir on a separate card at the back. If they did, the one time the cook was flustered would be the one time they stirred.`,
          `Your card might read: choose two pictures; label who or what each shows; preview the page. Under preview, write the limit that must not be lost: nothing is uploaded in this demo. That is a fact about this imaginary prototype, and a listener who assumed otherwise would leave with a false belief about what they saw. If you lose your wording, you say: we have chosen the pictures. Next I will add a short label to each. You have recovered the task without inventing a feature or promising one. The limit is on the same card as the step it qualifies, so you reach it in the normal course of reading down. The failure to avoid is putting the limit on a card you might skip while trying to sound fluent.`,
        ],
      },
      {
        title: 'Rehearse a restart on purpose',
        paragraphs: [
          `Give the demo a time budget so you can practise losing your place inside it. Ten seconds for the purpose, twenty for choosing, twenty for labels, ten for the preview and its limit. Those sixty seconds are a rehearsal allocation, not an ideal pace or a claim about attention spans. Now run it, and stop yourself deliberately after choosing, mid-sentence if you can bear it. Look at the card. Resume from the labels cue. You are practising the recovery, not the fluent version, because the fluent version does not need practice in the same way.`,
          `If on a run-through you reach the end and realise you skipped nothing is uploaded, go back to it directly and say it, then note that the card needs the limit moved closer to the cue. Steve Jobs's Stanford address is often cited for its clearly announced sections, and you can study those markers in the published text. What the text does not tell you is how he rehearsed, and this restart drill is our invention for this exercise, not his documented method.`,
        ],
      },
      {
        title: 'Why fluency eats the limit',
        paragraphs: [
          `When speakers lose a sentence, the thing they most want back is smoothness, and the fastest route to smoothness is to skip anything awkward. Limits are awkward. Nothing is uploaded is a small admission, and under pressure it is the first thing to go. That is exactly why it lives beside its cue and not on a separate card: so recovering the flow and stating the limit are the same action.`,
          `Two habits. Write cues as the job of the section plus the next action, never just the word next. And put every accuracy-critical qualification on the same line as the step it qualifies, then rehearse at least one deliberate stop-and-restart to prove you still say it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'A recoverable sixty-second demo',
        alt: 'The demo allocates ten seconds to purpose, twenty to choosing, twenty to labels, and ten to preview and limits.',
        caption: `Read the last segment first and notice that the limit, nothing is uploaded, is written inside the preview step rather than anywhere else; that placement is the whole point of the card. Then look at the second segment, which names the restart point for a deliberate stop. The sixty seconds are a hypothetical rehearsal budget, and the segments show order, not proportional widths.`,
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
        `Using the imaginary album demo, write three cues on one card: choose, label, preview. Each cue is the job of its section plus the next action, so that a glance tells you what to do rather than what to say.`,
        `Write nothing is uploaded in this demo directly under the preview cue, on the same card. This is the do not stir warning, and it belongs on its step.`,
        `Explain the first step aloud, then stop yourself on purpose. Look at the card and restart from the labelling cue without trying to find the exact sentence you lost. You are rehearsing the recovery, which is the part that needs practice.`,
        `Finish the run and check whether you said the preview limit. If you skipped it, say it plainly now, and move it on the card until it sits where your eye lands when you reach preview.`,
      ],
      notice: `You can resume the explanation from a cue that names a task, and the important limit is still said, because reaching the step and reaching the warning are the same glance.`,
      troubleshooting: `If a cue reads only next, it will not help you when you are lost; replace it with the action and the object, add a label to each picture. If you keep dropping the limit, it is on the wrong card or the wrong line; move it, do not rely on remembering it.`,
    },
    recall: {
      prompt: 'During a fundraising report, you forget the sentence before a checked total and its cutoff date. What should the cue preserve?',
      hint: 'Keep the number and its boundary together.',
      answer: `Treat the total and its cutoff date as a step and its do not stir warning: they go on the same line of the card, with the source note beside them. The verified figure, the date it was correct to, and where it came from are the accuracy-critical content, and they are exactly what fluency pressure would tempt you to blur into roughly ten thousand so far. When the sentence before them vanishes, restart from the purpose of the section, here is where the appeal stands, and then read the figure, date, and source from the card rather than reconstructing them from memory. The lost sentence was connective tissue; the number was the point, and the card has it.`,
    },
    quiz: {
      question: 'You lose your wording before a demonstration’s limitation. Which recovery is accurate?',
      options: [
        'Move to the next feature and leave limitations for questions.',
        'Use the section cue and read the checked limitation beside it.',
        'Replace the forgotten limitation with a broader description from memory.',
      ],
      correctIndex: 1,
      explanation: `Using the section cue and reading the checked limitation beside it is the recipe card working as designed: you recover the structure and the warning in the same glance, and the audience receives the same information they would have had without the stumble. Moving on and leaving limitations for questions assumes someone will ask, and anyone who does not leaves believing the demo did something it did not. Replacing the limitation with a broader description from memory is how nothing is uploaded becomes it syncs to the cloud, which is a different claim entirely.`,
    },
    takeaway: `A cue card is a recipe card, not a cookbook: write each section as its job plus the next action, put any accuracy-critical limit on the same line as the step it qualifies, and rehearse stopping and restarting on purpose, because under pressure the awkward limit is the first thing fluency will try to drop.`,
    sourceNote: 'Jobs’ visible sections are a reference, not evidence of his rehearsal habits. This original recovery drill and timing allocation are untested.',
  },
  {
    id: 'speaker-013',
    outcome: `Answer the exact point someone asked about in your first sentence, then add where the answer came from and what it does not promise, instead of making them wait through everything else you know.`,
    scene: 'Answering a timetable question after introducing a small film screening.',
    sections: [
      {
        title: 'The question is narrower than the presentation',
        paragraphs: [
          `You have just finished introducing a small community film screening. A hand goes up at the back. Does six o'clock mean the doors open or the film starts? You look down at your notes. They contain the director's biography, the history of the venue, the whole season's programme, and a paragraph about why you chose this film. Not one line of it answers the question.`,
          `The answer is simple. On this event's notice, doors open at 18:00 and the film is scheduled for 18:30. Say that, and say it first. The temptation is to begin with something related and knowledgeable, the programme context or how the timing was decided, and arrive at the distinction eventually. That sounds informed from the stage. From the chair, it is a person who needs to plan their bus being made to wait for the one detail they asked for.`,
        ],
      },
      {
        title: 'Answer, support, and limit',
        paragraphs: [
          `Think of asking a station attendant which platform the 6:15 leaves from. A good one says: platform four. Then, if it helps, that is what the board shows, though they sometimes change it at the last minute. Three things in that order: the answer, where it came from, and what it does not guarantee. A bad attendant starts by explaining how platform allocation works at this station, and you miss your train listening.`,
          `Your version: six is the door-opening time; the film is scheduled for half past six. That is the timetable on this event's notice. I cannot guarantee there will be no delay. The first sentence resolves the contrast the questioner actually raised. The second says where the fact lives, so they can check it. The third keeps a schedule from turning into a promise about the future, which no notice can make. These are jobs an answer can do, not a ritual that needs three sentences every time. Often the answer with its condition is enough. And if you do not know the requested fact, say that in the first sentence, rather than filling the gap with background that sounds like an answer and is not one.`,
        ],
      },
      {
        title: 'Clarify before answering a different question',
        paragraphs: [
          `Sometimes the question is too short to answer. Is it six? Six for what: doors, the film, a pre-screening meeting someone mentioned? A quick check, do you mean doors or the start of the film, is more direct than confidently answering the wrong version. It takes two seconds and saves a wrong bus.`,
          `Once the point is resolved, you can offer more if it is useful: would you also like the running time? That is an offer, not a return to your prepared promotional line. The habit of putting the claim first and the support beside it comes from a long tradition of thinking about rhetoric, and this question-and-answer shape is our application of it, not a proven format for every setting. In rehearsal, have someone ask you a narrow question, then listen back and mark the first sentence that actually resolves it. If anything unrelated comes before that sentence, move the sentence to the front.`,
        ],
      },
      {
        title: 'Why speakers answer the wider question',
        paragraphs: [
          `You prepared the whole presentation, so every question feels like an invitation to deliver more of it. The questioner did not ask for more of it; they asked for one fact. Answering the broad version makes you feel useful and makes them feel unheard. The platform attendant who explains allocation policy is being generous with the wrong thing.`,
          `Two habits. Before you open your mouth, repeat the narrow question in your head and make your first sentence the direct answer to it. And if the question is ambiguous, ask one clarifying question instead of guessing, because a confident answer to the wrong question costs more than a two-second check.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'The timetable answer before the background',
        alt: 'A visitor asks what six means; the presenter identifies doors at six and the screening at half past.',
        caption: `Read the presenter's first line and notice that it is nothing but the answer: doors at six, film at half past, the exact contrast the visitor raised. The second presenter line carries the support, the notice, and the limit, delays are possible, in that order. Nothing about the director or the venue appears. The times belong to this fictional event notice and are not a guarantee.`,
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
        `Write a fictional notice: doors at 18:00, film scheduled at 18:30. Underneath, write the question what happens at six? You are setting up a narrow question against a page of wider knowledge.`,
        `Draft an answer whose first sentence resolves the doors-or-film distinction, whose second names the notice as the source, and whose third avoids guaranteeing an exact start. Platform four, the board says so, they sometimes change it.`,
        `Read it aloud. Then try the shorter question is it six? Before answering, write the clarifying question you would ask, because that version has at least two possible meanings and guessing risks sending someone to the wrong bus.`,
      ],
      notice: `The requested distinction is the first thing out of your mouth, the source follows, and the schedule is still described as a schedule rather than a promise.`,
      troubleshooting: `If your opening sentence describes the whole event, cut it and move the requested fact to the front; background can follow if anyone wants it. If you do not actually know the answer, say so first instead of offering related information that sounds like one.`,
    },
    recall: {
      prompt: 'After a drawing-class introduction, someone asks whether pencils are supplied. What would a checked answer include?',
      hint: 'Answer the materials question before describing the course.',
      answer: `First sentence: the answer to what they asked. Yes, graphite pencils are supplied, or no, bring your own. Then the support: that is what the materials list for this course says. Then the limit or exception, if there is one: coloured pencils are not included, so bring those if you want colour. That is platform four, the board, and the last-minute change. The history of the class, who teaches it, and why drawing is good for you are things you know and nobody asked, and putting any of them before the pencil answer makes a person who is wondering what to pack wait for no reason. If you have not checked the materials list, say that first and offer to check.`,
    },
    quiz: {
      question: 'A course notice says registration closes Friday, while payment is due Monday. Someone asks when registration closes. What comes first?',
      options: [
        'Friday for registration, followed by the separate Monday payment deadline.',
        'An explanation of the payment process before mentioning Friday.',
        'The full course timetable so both deadlines have background.',
      ],
      correctIndex: 0,
      explanation: `Friday is the direct answer to the question asked, so it goes first; the Monday payment date is a useful distinction that follows as support, since someone could easily confuse the two. Explaining the payment process before saying Friday is the station attendant describing allocation policy while the train leaves. The full timetable buries one requested fact in a page of context the questioner did not ask for.`,
    },
    takeaway: `Answer like a good platform attendant: the direct answer to the narrow question first, then where it came from, then what it does not guarantee, and when the question itself is ambiguous, spend two seconds asking which version they mean rather than confidently answering the wrong one.`,
    sourceNote: 'The answer-support-limit sequence is an original application of rhetorical reasoning, not an attributed ancient script or experimentally established Q&A formula.',
  },
  {
    id: 'speaker-014',
    outcome: `Separate the assumed fact inside a loaded question from the real concern underneath it, correct the fact against the record, and still answer the concern instead of hiding behind the correction.`,
    scene: 'Discussing a changed timetable for neighborhood evening classes.',
    sections: [
      {
        title: 'A concern inside an overstatement',
        paragraphs: [
          `You are presenting the new timetable for the neighbourhood's evening classes. Someone asks, with some heat: why did you cancel every evening class? You know the record. Tuesday evening is still running. Thursday has moved from the evening to the afternoon because its room is no longer available at night. So every is wrong.`,
          `But look at what the question contains. There is an assumed fact, that every evening class is gone, and that fact is false. There is also a real concern wrapped around it: people who work during the day have fewer ways to attend. Answer only the fact, that is not true, and you have corrected a word while leaving the person's actual problem untouched. Accept the fact and explain why you cancelled everything, and you have agreed to something the record does not show. Neither response is honest, and neither is helpful.`,
        ],
      },
      {
        title: 'Correct the record without dodging the loss',
        paragraphs: [
          `A customer tells a shop assistant: you have stopped stocking everything I buy. The assistant checks and finds that one of the customer's three regular items is discontinued and the other two are on a different shelf now. The useful reply does two jobs. We still have the bread and the milk, they have moved to aisle three. The oat biscuits are discontinued, and I can tell you what replaced them. The customer's exaggeration is gently corrected, and the thing they actually lost is acknowledged and dealt with.`,
          `Your timetable version: Tuesday evening remains. Thursday moved to the afternoon because that room is unavailable in the evening. That still removes the Thursday option for people who work during the day. Are you asking whether another evening can be offered? Three moves. The record is corrected, with the reason, and only because the reason is in your meeting notes; do not supply a convenient-sounding excuse you have not checked. The genuine loss is named out loud rather than buried under the correction. And the questioner is handed back the floor to say what they actually want. You do not need to decide whether their every came from anger, confusion, or a photocopied old timetable. You only need to answer both halves.`,
        ],
      },
      {
        title: 'Accept a premise when it is right',
        paragraphs: [
          `Now suppose that after the meeting you check again and discover Tuesday was cancelled too, and your copy was out of date. The same discipline applies to you. Update the answer: you are right, I was using an outdated timetable. There are no evening sessions in the current version. I do not yet have an alternative to offer. The questioner's premise was correct, and the honest thing is to say so plainly, not to find a smaller flaw in their wording to stand on.`,
          `Premise checking is not a trick for winning exchanges by catching exaggerations. It is a way of making sure that what gets corrected is actually wrong and what gets answered is actually asked, and it only works if your own claim stays open to the same correction. In rehearsal, write the assumed fact on one line and the underlying request on another, then draft an answer to each. And remember that a calm, measured delivery does not make your account right; the record does.`,
        ],
      },
      {
        title: 'Why the correction swallows the concern',
        paragraphs: [
          `A false every is a gift to a nervous speaker: it gives you something you can refute with certainty, and refuting it feels like answering. So the correction gets the energy and the concern gets forgotten. The questioner, who did not care about the word every, hears a defence rather than a reply. Returning to the shop assistant: nobody wants to be told their sentence was inaccurate; they want their biscuits.`,
          `Two habits. When a question contains a claim, write the claim and the worry as two separate lines before you answer, and make sure your reply reaches the second line. And when you check the record and the questioner turns out to be right, say so in the first sentence, without softening.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'The timetable premise and the access concern',
        alt: 'The presenter corrects the claim about every class but acknowledges the loss of Thursday evening.',
        caption: `Read the presenter's two lines as two separate jobs. The first corrects the record and gives the checked reason. The second names what was genuinely lost and hands the question back. Then read the participant's final line: it is the real concern, a Tuesday shift clash, which the word every had been hiding. The fictional record retains Tuesday; the correction does not erase Thursday's loss.`,
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
        `Write the fictional record: Tuesday remains; Thursday moved because its evening room is unavailable. Below it, copy the question about cancelling every evening class. You want the record and the claim side by side so you can see where they differ.`,
        `On two separate lines, write the assumed fact, all evening classes are cancelled, and the access concern, fewer options for people who work days. Separating them is the step most answers skip.`,
        `Draft a reply with three parts: the correction with its checked reason, an acknowledgement of the lost Thursday evening, and one clarifying question back to the person. Read it and confirm it reaches the second line, not just the first.`,
        `Now change the record so both evenings are cancelled. Rewrite the answer so it accepts the premise plainly in the first sentence and states honestly that you have no alternative yet.`,
      ],
      notice: `Your answer changes when the record changes, and in both versions the practical concern is addressed rather than left behind the correction.`,
      troubleshooting: `If your reply stops at not every class, you have corrected a word and ignored a person; add what the actual change means for someone who works days. If you find yourself inventing a reason for the room change, stop and say only what the notes show.`,
    },
    recall: {
      prompt: 'A club member asks why you ignored all feedback. Notes show some was discussed but replies were not sent. How would you answer?',
      hint: 'Discussion and acknowledgment are separate facts.',
      answer: `Two lines first. The assumed fact: all feedback was ignored. The concern: members do not know whether anyone read what they wrote or what was decided. Then answer both. The notes show that the feedback on the booking system and the summer schedule was discussed at the April meeting, so ignored is not quite right. But no replies were sent, so from the members' side it looked exactly like being ignored, and that is a fair complaint. Then address the concern: here is how members will hear the decisions from now on. The trap is using the discussion to deny the communication gap, which is the shop assistant insisting the bread was never discontinued while the customer stands there without their biscuits.`,
    },
    quiz: {
      question: 'Someone asks why a route was changed secretly. A public notice exists, but it omitted the date. What fits?',
      options: [
        'Point to the public notice and treat the question as fully answered.',
        'Apologize for the missing date and move straight to the route’s benefits.',
        'Identify the notice, acknowledge its missing date, and address how travelers were informed.',
      ],
      correctIndex: 2,
      explanation: `Identifying the notice corrects the word secretly against the record, acknowledging the missing date admits the part of the premise that is true, and addressing how travellers were informed reaches the real concern; that is both lines answered. Pointing to the notice alone corrects the word and abandons the person, who still did not know when the route would change. Apologising and pivoting to the route's benefits accepts the flaw and then changes the subject, so the concern about being informed is never answered.`,
    },
    takeaway: `Treat a loaded question like the customer who says you stopped stocking everything: write the assumed fact and the real concern on separate lines, correct the fact only against the record you have checked, answer the concern in the same breath, and when the record shows the questioner was right, say so first and plainly.`,
    sourceNote: 'Aristotle and GOV.UK interviewing guidance inform this original rehearsal. It is not a method for judging motives or avoiding responsibility.',
  },
  {
    id: 'speaker-015',
    outcome: `Say exactly what you do not know, keep any old figure attached to its date and scope, and promise only the follow-up action that is yours to perform, never someone else's reply.`,
    scene: 'Answering a venue-cost question while planning a small animation workshop.',
    sections: [
      {
        title: 'An old price is not a current quote',
        paragraphs: [
          `You are in a planning meeting for a small animation workshop. Someone asks what hiring the room will cost this year. You flick through your notes and find one number: last year's charge, 1,500 rupees, for the room only, equipment not included. There is no quote for this year. Nobody has asked the venue yet.`,
          `Two easy answers are both wrong. It costs 1,500 takes a figure from last year, strips off the equipment exclusion, and presents it as today's price; people will start budgeting around it. I have no idea throws away the one piece of real information you do have. The honest answer sits between them: separate the record you hold from the answer you lack, so that nobody plans around a number you cannot stand behind.`,
        ],
      },
      {
        title: 'Name the gap without filling it',
        paragraphs: [
          `A weather forecaster who has not received today's data does not say it will be sunny because yesterday was. They say: I do not have today's forecast yet; yesterday was 24 degrees and dry, for what that is worth. The old reading is offered with its date on it, as background, and the missing forecast is named as missing. Nobody mistakes yesterday for today, because the forecaster did not let them.`,
          `Your version: I do not have this year's quote. Last year's record lists 1,500 rupees for the room alone, without equipment; that is background, not a current estimate. The number keeps its year and its exclusions attached. The word background does the work of stopping it becoming a plan. If even that would distract people, you can leave the number out and simply name the gap. Julian Treasure puts honesty among his principles for speaking that people want to listen to; the practice here is making the boundary of your knowledge audible, without claiming that doing so will make anyone trust or agree with you.`,
        ],
      },
      {
        title: 'Promise your action, not someone else’s reply',
        paragraphs: [
          `A gap invites a promise, and the promise is where people overreach. I will have the price by Friday depends on the venue answering an email, which is not in your gift. Promise only the part you control. I can ask the venue for a room-and-equipment quote and update our planning note on Friday. If they have not replied, I will mark the cost as unconfirmed. You are promising to ask and to update. You are not promising a number, because the number belongs to someone else's inbox.`,
          `Use the shared planning note the group already has, rather than collecting people's phone numbers to message them, which they have not agreed to. If following up is not something you can realistically do, say that too: the price is unknown, and someone would need to contact the venue about room and equipment. A visible open question, written down as open, is more useful than a confident guess that gets quietly corrected after people have made decisions based on it.`,
        ],
      },
      {
        title: 'Why gaps get filled with old numbers',
        paragraphs: [
          `Silence in a meeting feels like failure, and a number ends the silence. The old figure is right there in your notes, so it gets promoted to an answer, and the equipment exclusion falls off because it complicates the moment. Weeks later the real quote arrives higher, and the group has already set the ticket price. The forecaster who said sunny because yesterday was sunny is the one who gets blamed for the rain.`,
          `Two habits. Whenever you reach for a figure, say its date and its scope in the same sentence, or do not say it. And before you promise a follow-up, ask whether the thing you are promising is your action or another person's reply, and promise only the first.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Keep the quote’s status visible',
        alt: 'An old room-only price is separated from an unknown current quote and a conditional follow-up.',
        caption: `Start with the middle box, because it is the actual answer: the current quote is missing. The first box is yesterday's weather, with its year and its equipment exclusion still attached. The third box promises only asking and updating, and says what will be written if no reply comes. The price and the Friday plan are hypothetical; no real rental price or currency conversion is implied.`,
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
        `Copy the fictional old price with its year and the equipment exclusion written beside it. Under it, write current quote: unknown. You are putting the date on yesterday's weather before you say anything.`,
        `Write a spoken answer that names the gap first and offers the old figure only as labelled background. Read it and check that nothing in it could be mistaken for this year's price.`,
        `Add a follow-up that you could actually perform, asking the venue and updating the shared note, and include what you will write if no reply arrives. Keep it hypothetical for this rehearsal.`,
        `Read the whole answer and circle every promise. For each, ask: is this my action or someone else's response? Cross out any promise that depends on the venue replying.`,
      ],
      notice: `The answer keeps three things visibly apart: historical information with its date, the quote that is still missing, and an action that is yours to carry out.`,
      troubleshooting: `If a guessed figure slips in, cut the number entirely and state the exact information still needed. If your promise says I will have the price, rewrite it to I will ask and update, because the price is not yours to promise.`,
    },
    recall: {
      prompt: 'After an app demo, someone asks whether it exports transparent images. You have not tried that. What would you say?',
      hint: 'A related feature is not verification of this feature.',
      answer: `Name the gap first: I have not tested transparent export, so I cannot tell you. If there is relevant background, give it with its scope attached: I know it exports PNG, but I have not checked whether the transparency survives, and those are different things. That is yesterday's weather, labelled. Then promise only what you control: I can check the documentation and try one sample export tonight and put the result in the shared notes; if I cannot get a clear answer, I will mark it unconfirmed. What you must not do is say probably, yes, because PNG, which promotes a related feature into a verified one and sends someone off to build a workflow on a guess.`,
    },
    quiz: {
      question: 'A supplier has not replied about availability. Which statement offers an honest follow-up?',
      options: [
        'I will have confirmed availability by Friday because I sent the request.',
        'I will update the shared note Friday, including if availability is still unconfirmed.',
        'The item was available last month, so we can provisionally treat it as available now.',
      ],
      correctIndex: 1,
      explanation: `Updating the shared note on Friday, including if availability is still unconfirmed, promises only your own action and says what you will write if the gap remains, which is the only kind of promise you can keep. Having confirmed availability by Friday depends on the supplier replying, which sending a request does not guarantee. Treating last month's availability as today's is yesterday's weather presented as today's forecast; the date and the word provisionally do not stop people ordering against it.`,
    },
    takeaway: `Be the forecaster without today's data: name the gap first, offer any old figure only with its date and scope attached as background, and promise just the follow-up you can perform yourself, asking and updating, because the answer lives in someone else's inbox and a guess that gets quietly corrected later costs more than an open question written down as open.`,
    sourceNote: 'Treasure’s honesty principle is the reference. This original follow-up routine has no claimed measured effect on credibility or audience behavior.',
  },
  {
    id: 'speaker-016',
    outcome: `End with an invitation that says what to do, where, when, how long it takes, and what it costs, and that leaves watching, asking, or declining as equally acceptable answers.`,
    scene: 'Inviting neighbors to a short postcard exchange after an illustration session.',
    sections: [
      {
        title: 'An invitation needs more than enthusiasm',
        paragraphs: [
          `You are wrapping up an illustration session at the library, and you want to announce a postcard exchange for anyone interested. Your closing line is: let us all get involved. People smile and nod and leave, and not one of them knows what they have been invited to do, where they would go, or what saying yes would cost them in time, money, or embarrassment.`,
          `The room is not one person. Some want to draw. Some would rather watch others draw. Some have a question they are too shy to ask in front of everyone, and some simply want to go home. A good ending gives all of them enough information to choose, without making participation a loyalty test. So decide the actual invitation before you write the closing words. In this example it is a twenty-minute exchange at the library's side table, Saturday at eleven.`,
        ],
      },
      {
        title: 'Make the conditions part of the close',
        paragraphs: [
          `A good dinner invitation is a model. Come for dinner Saturday at seven, it is just pasta, bring nothing, and if you cannot make it no problem at all. Every uncertainty a guest might have is answered before they ask: when, how formal, what to bring, how bad it is to say no. Compare: you should come round sometime. That is warm, and it is not an invitation, because there is nothing to accept.`,
          `Your close, in that spirit: if you would like to join, bring one original postcard design to the library side table on Saturday at eleven for a twenty-minute exchange. Spare paper is provided. You can also just look, or take the details home. These arrangements are invented for the exercise, not facts about a real library. Notice what is now audible: the action, the place, the time, the duration, the materials, and two honourable alternatives to joining. If the exchange involves other people's images, add that participants need permission to share them. And never hide a cost or a longer commitment in details that only appear after someone has agreed; that is the sometime invitation with a bill attached.`,
        ],
      },
      {
        title: 'Leave an honest decision available',
        paragraphs: [
          `Nancy Duarte's analysis of great speeches looks at endings that connect a proposed future to a specific action. It is a reading of famous talks, not a rule and not proof that such endings work on everyone. The addition here is ethical rather than rhetorical: the choice has to be real. Asking a question, thinking about it until next week, and saying no are all acceptable outcomes, and the close should sound like it. Do not invent limited places to hurry people. Do not imply that caring about the neighbourhood means turning up on Saturday.`,
          `Rehearse the ending on one listener and ask three things: what would you need to bring, how long would it take, and could you just come and watch? If any answer is a shrug, the conditions are unclear, and the fix is to revise them. The wrong fix, which speakers reach for every time, is a louder and warmer final appeal. Volume does not supply the missing time, place, or cost. It just makes the vagueness more enthusiastic.`,
        ],
      },
      {
        title: 'Why closes go vague',
        paragraphs: [
          `Specifics feel small at the end of a talk. Twenty minutes at a side table sounds less stirring than let us all get involved, so the speaker trades the information for the feeling. But the feeling evaporates in the car park and the information would have survived. The guest who was told it is just pasta, bring nothing turns up. The one told come round sometime never does, and nobody is quite sure whose fault that is.`,
          `Two habits. Before writing a closing invitation, write the five facts, what, where, when, how long, what it costs, and make sure each one is said aloud. And include the no in the invitation itself, you can just look or take the details home, so declining is a stated option rather than a social failure.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The postcard invitation in spoken order',
        alt: 'The close names a design to bring, the meeting details, the short commitment, and an option to watch.',
        caption: `Read the last box first. The alternatives, looking, asking, and taking the details home, are inside the spoken close, which is what makes the choice real rather than implied. Then read upward and check the five facts: what to bring, where, when, how long, and that paper is provided. This fictional outline keeps the actual commitment and the listener's options together in one ending.`,
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
        `Draft a close for the fictional postcard exchange using its place, time, duration, and materials. Before writing sentences, list the five facts in a column, what, where, when, how long, cost, so none is forgotten in the prose.`,
        `Add what a participant would actually do once there, and write the no into the invitation: an explicit option to watch, ask, or decide later. The dinner invitation says if you cannot make it no problem, and so should you.`,
        `Read the close and list every commitment a listener could reasonably think they are making. Strike out any promised result, such as you will leave with new friends, and any scarcity you cannot verify, such as only six places.`,
        `Hide the draft and, as a listener, say the invitation back from memory. Any condition missing from your summary was not audible enough; put it back more plainly.`,
      ],
      notice: `A listener can describe the commitment in one breath, time, place, duration, what to bring, and can name an acceptable alternative to joining without feeling they have let anyone down.`,
      troubleshooting: `If your close says only sign up, you have written come round sometime; add the task and the effort before the invitation. If it has started to sound like a rally, cut the appeal and check whether the five facts are all still there; usually one went missing to make room for the feeling.`,
    },
    recall: {
      prompt: 'You end a reading group by inviting people to help host next month. What conditions should be audible?',
      hint: 'Interest is not agreement to an unspecified workload.',
      answer: `Make it the dinner invitation, not come round sometime. Say what hosting actually involves: choosing the book, sending one reminder message, and leading the first ten minutes of discussion. Say how much time that takes, perhaps an hour of preparation plus the meeting itself. Say when the decision is needed and how someone can ask questions or think about it until the next session. And say the no out loud: if hosting is not for you, that is fine, and it says nothing about how much you like the group. Someone who is interested has agreed to be interested; they have not agreed to an undefined workload, and the close should not treat a nod as a signature.`,
    },
    quiz: {
      question: 'A volunteer invitation needs a closing sentence. Which supports an informed choice?',
      options: [
        'The role takes one Saturday hour; read the tasks and ask questions before deciding.',
        'Register now; the detailed schedule will be explained after you commit.',
        'If the group matters to you, reserve Saturday and we will find you a task.',
      ],
      correctIndex: 0,
      explanation: `Saying the role takes one Saturday hour and inviting people to read the tasks and ask questions first gives the effort, the information, and the room to decide, which is the dinner invitation with the pasta and the no problem included. Register now with the schedule explained after you commit hides the commitment until the choice is already made, the sometime invitation with a bill attached. Tying the group mattering to reserving Saturday makes declining a statement about loyalty, which removes the honest no.`,
    },
    takeaway: `Close like a good dinner invitation rather than come round sometime: say what to do, where, when, how long, and what it costs, write the no into the invitation so watching or declining is a stated option, and when the ending feels weak, add a missing fact instead of a louder appeal, because enthusiasm evaporates in the car park and the time and place do not.`,
    sourceNote: 'Duarte informs the action-oriented ending; consent guidance informs voluntary choice. This original adaptation promises no measured persuasive effect.',
  },
]