import type { LessonGuide } from './types'

// Original teaching examples. Source links remain on the corresponding lessons.
// Practice minutes are planning budgets, not tested communication prescriptions.
export const peopleGuides: LessonGuide[] = [
  {
    id: 'people-001',
    outcome: 'Follow a complete account before choosing which concern to respond to.',
    scene: 'A friend describes a cancelled journey to visit his sister after her move.',
    sections: [
      {
        title: 'The part you have not heard yet',
        paragraphs: [
          `Dev says his weekend train was cancelled. You start remembering your own expensive journey home. Before you tell that story, he adds that the ticket was refunded. Then comes the part you had not expected: his sister has just moved, and he had promised to help her unpack. If you had jumped straight to refund advice, you would have answered a problem he had already solved. The unfinished account contained the information needed to choose your response.`,
        ],
      },
      {
        title: 'Attention has a competing task',
        paragraphs: [
          `Following another person and preparing your next story compete for attention. Active listening means giving their account priority while it is their turn. You need not remember every station name. Track what happened, what they say mattered, and what remains unclear. A pause can belong inside a thought, so do not treat every gap as an invitation. Put a distracting screen aside if practical. None of this requires fixed eye contact, a particular expression, or silence for a prescribed number of seconds.`,
        ],
      },
      {
        title: 'Let the ending change your reply',
        paragraphs: [
          `When Dev finishes, you say, "The refund is sorted, but you wanted to be there for your sister. Have I got that right?" He replies, "Yes, and I hate leaving her with all the boxes." Your response now concerns a missed commitment, not money. You can ask whether he wants to say more before discussing another visit. If he corrects the summary, use the correction. Success is not making Dev cheerful; it is responding to the concern he actually described. Your related travel story can still have a turn later.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'The last detail changes the subject',
        alt: 'Dev explains that his refund is settled but he missed helping his sister; the listener checks that concern.',
        caption: 'Read the whole fictional exchange before choosing between refund advice and a response about the missed visit.',
        items: [
          { label: 'Dev', detail: 'The train was cancelled. I got the fare back, but my sister had to unpack alone.' },
          { label: 'Listener', detail: 'The money is sorted; missing the chance to help her is the hard part?' },
          { label: 'Dev', detail: 'Yes. I wanted to be there for her.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen', 'Optional willing conversation partner'],
      steps: [
        `Use Dev's account: "Train cancelled; fare refunded. I missed helping my sister unpack." Hide the second sentence; a willing partner can read it instead.`,
        `Write the response you initially expect to give. Hear the complete thought, or uncover the ending, before answering.`,
        `Write one sentence naming what happened and what mattered, without introducing your own experience.`,
        `Ask the partner to correct it, or compare it with Dev's words. Revise any concern you supplied rather than heard.`,
      ],
      notice: 'Your final response includes the missed help, rather than assuming the refund is the outstanding problem.',
      troubleshooting: 'If your summary becomes a travel itinerary, keep only the event and the concern the speaker emphasized.',
    },
    recall: {
      prompt: 'A colleague describes a rejected proposal, then says the decision was fair but arrived after they had booked travel. What would you reflect?',
      hint: 'Separate the decision from the consequence they emphasize.',
      answer: 'Check whether the late notice and travel commitment are the concern. Defending the proposal would answer a disagreement they did not express.',
    },
    quiz: {
      question: 'A cousin is still explaining why a course withdrawal upset them. You know a similar course. What fits this point in the conversation?',
      options: [
        'Offer the alternative while the course details are fresh.',
        'Hear the remaining account, then check which consequence matters.',
        'Explain your own withdrawal so they know they are not alone.',
      ],
      correctIndex: 1,
      explanation: 'The remaining account can change the relevant concern. Alternatives and shared experiences may help later, but both select a response before that concern is clear.',
    },
    takeaway: 'Let the complete thought determine your reply, rather than using the opening to prepare your own.',
    sourceNote: 'Berkeley provides the listening framework. Dev and the exercise are original examples, not a tested script or a measure of empathy.',
  },
  {
    id: 'people-002',
    outcome: 'Replace a leading question with a bounded invitation to describe an exchange.',
    scene: 'A neighbour reports a disagreement about where bicycles belong in a shared courtyard.',
    sections: [
      {
        title: 'A question with an answer hidden inside',
        paragraphs: [
          `Your neighbour Priya says yesterday's courtyard discussion went badly. You dislike the new bicycle rack and ask, "Did Arun dismiss your idea again?" Priya now has to accept your account or correct it before telling her own. The word "again" also imports a history she has not described. You may intend solidarity, but the question starts with a conclusion. You still do not know whether the disagreement concerned the rack, its location, or how the conversation was arranged.`,
        ],
      },
      {
        title: 'Leave an answerable space',
        paragraphs: [
          `An open question leaves room for an account rather than requiring a yes or no to your theory. That does not mean asking for someone's entire history with the building. Choose a small event: "What happened when you suggested moving the rack?" A bounded question gives the speaker somewhere to begin. Avoid stacking questions about words, motives, witnesses, and feelings into one turn. If you need a factual detail afterward, a closed question such as "Was the entrance blocked?" can be useful. Open and closed questions have different jobs.`,
        ],
      },
      {
        title: 'Follow what the answer changes',
        paragraphs: [
          `Priya answers, "Arun agreed about the entrance. We disagreed about who would ask the caretaker." That answer changes the problem from rejection of a location to ownership of a task. You respond, "What had each of you understood about contacting the caretaker?" You are following information, not searching for another route to your original accusation. Priya may choose not to repeat the whole exchange. You can still understand the practical disagreement without obtaining a transcript. The useful result is a clearer account of the issue, not proof that your preferred neighbour was right.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two openings for the courtyard story',
        alt: 'A leading question assumes dismissal; an open question asks what happened when the rack was discussed.',
        caption: 'These alternative lines concern the same fictional meeting. Notice which one lets Priya supply the disagreement.',
        items: [
          { label: 'Conclusion inside', detail: 'Did Arun dismiss your idea again? The answer must first address your accusation.' },
          { label: 'Account invited', detail: 'What happened when you suggested moving the rack? Priya can name the actual issue.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A notebook or private draft'],
      steps: [
        `Copy this fictional question: "Did the organizer ignore your request for a later start?" Mark the assumed action.`,
        `Rewrite it as one question about the exchange, without deciding whether the request was ignored.`,
        `Supply two possible answers yourself: the organizer misunderstood the time; the organizer understood but could not change it.`,
        `Check whether both answers fit your question. Add one follow-up for each that asks about the remaining practical issue.`,
      ],
      notice: 'The opening accommodates different accounts, and the follow-ups change when the account changes.',
      troubleshooting: 'If both follow-ups still blame the organizer, remove motive words and ask what was said or agreed.',
    },
    recall: {
      prompt: 'A sibling says a shared shopping plan failed. You suspect their partner forgot. What could you ask without building in that explanation?',
      hint: 'Start with the point where arrangements were made.',
      answer: 'Ask what each person understood they would buy. That can reveal forgetting, unclear responsibilities, or a changed plan without requiring any one explanation.',
    },
    quiz: {
      question: 'A teammate says a review felt awkward, but has given no details. Which opening gathers their account?',
      options: [
        'What happened when you presented the draft?',
        'Was the deadline the main source of tension?',
        'Would written feedback have been easier for you?',
      ],
      correctIndex: 0,
      explanation: 'The first leaves the issue open. The other questions are reasonable later, but prematurely select a cause or solution before the teammate has described the review.',
    },
    takeaway: 'Ask about the exchange before asking someone to confirm your explanation of it.',
    sourceNote: 'Listening and principled negotiation inform these questions. The courtyard account is invented; an open question does not establish whose account is accurate.',
  },
  {
    id: 'people-003',
    outcome: 'Clarify an ambiguous description before choosing a change for a customer or collaborator.',
    scene: 'A customer calls a community concert flyer too busy during a print-shop proof review.',
    sections: [
      {
        title: 'One word, several possible problems',
        paragraphs: [
          `At a small print shop, a customer studies a concert flyer and says, "It is too busy." You could remove photographs, reduce the text, or make the background plainer. Those are different changes. The customer might mean visual clutter, difficulty finding the date, or that the event itself seems crowded. Acting immediately would spend time on your interpretation of a word rather than on a confirmed requirement. A familiar adjective can feel specific while leaving the actual problem undecided.`,
        ],
      },
      {
        title: 'Clarify without making a menu into a trap',
        paragraphs: [
          `Ask which part feels busy. If that question is hard to answer, offer a few possibilities: "Is it the pictures, the amount of text, or something else?" The final opening matters because your list is not exhaustive. A clarification should make an answer easier, not make the customer choose your vocabulary. Ask for a concrete experience, such as what they tried to find first. You are looking for a usable meaning in this conversation, not correcting how someone ought to use the word.`,
        ],
      },
      {
        title: 'Confirm the target before editing',
        paragraphs: [
          `The customer says, "I cannot find when the doors open. The pictures are fine." You check, "So keep the pictures and make the opening time easier to find?" They agree. Now moving the time beside the venue name is a relevant proposal; deleting every image is not. After showing a revised proof, ask them to find the time again. In this example they find it without scanning the small print. That is a result tied to their request. It does not prove the whole flyer is better or that every customer means the same thing by busy.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'From busy to a checkable request',
        alt: 'The customer clarifies that busy means the opening time is hard to find, not that the pictures should be removed.',
        caption: 'The fictional proof review turns an adjective into a specific editing choice and a way to check it.',
        items: [
          { label: 'Customer', detail: 'This flyer feels too busy.' },
          { label: 'Printer', detail: 'Which part: the pictures, the amount of text, or something else?' },
          { label: 'Customer', detail: 'I cannot find the opening time. Keep the pictures.' },
          { label: 'Printer', detail: 'Shall I move the time beside the venue, then show you another proof?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'A pretend invitation or announcement'],
      steps: [
        `Write "Make this simpler" above an announcement. Alone, invent a two-sentence invitation; no design software is needed.`,
        `List three possible meanings: fewer words, clearer order, or less unfamiliar vocabulary. Do not select one yet.`,
        `Write a question that allows all three meanings and an answer outside your list. Then choose one fictional answer.`,
        `Make only the change that answer calls for. Add a check, such as asking a reader to locate the date.`,
      ],
      notice: 'Your revision and its check address the chosen meaning, rather than every possible meaning of simpler.',
      troubleshooting: 'If the proposed change is still vague, name the exact information or feature the reader struggles to use.',
    },
    recall: {
      prompt: 'A housemate asks for the kitchen to be clean before visitors arrive. What would you clarify before promising?',
      hint: 'Different people may mean different tasks and finishing times.',
      answer: 'Ask which tasks are needed and when visitors arrive. Clearing the worktop and washing the floor are distinct commitments hidden inside clean.',
    },
    quiz: {
      question: 'A colleague asks for a lighter presentation without explaining further. What is the most useful next move?',
      options: [
        'Remove half the slides to reduce its length.',
        'Replace technical phrases with everyday language.',
        'Ask whether lighter means shorter, less technical, or something else.',
      ],
      correctIndex: 2,
      explanation: 'Clarification distinguishes plausible requests. Both edits could be appropriate, but neither follows from the adjective alone.',
    },
    takeaway: 'Translate the vague word into a concrete target with the speaker before making a change.',
    sourceNote: 'Berkeley recommends clarifying meaning. The print-shop exchange applies that idea; the revised flyer is illustrative, not a measured design experiment.',
  },
  {
    id: 'people-004',
    outcome: 'Offer a speaker room to continue or stop without assigning a meaning to their pause.',
    scene: 'An aunt pauses while describing an uncomfortable family reunion during a kitchen conversation.',
    sections: [
      {
        title: 'The unfinished kitchen story',
        paragraphs: [
          `Your aunt is telling you about a family reunion. She reaches, "Then your uncle asked about next year," and stops while folding a tea towel. You are tempted to rescue the conversation with a cheerful question about the food. Another temptation is to ask what she is hiding. Neither follows from what you observed. She may be choosing words, considering whether to share more, or simply have finished the part she wants to tell. Her pause does not choose among those possibilities.`,
        ],
      },
      {
        title: 'Space is not a demand',
        paragraphs: [
          `Leave a natural gap rather than racing to fill it. There is no universal number of seconds that makes listening respectful. If the silence remains uncertain, offer a choice: "Would you like to finish that thought, or leave it there?" Both options must be acceptable. Staring expectantly until someone discloses more is pressure, even without words. People also differ in how much time they need to formulate an answer. A quiet response, looking away, or handling an object is not a reliable verdict about interest or honesty.`,
        ],
      },
      {
        title: 'Follow the choice she actually makes',
        paragraphs: [
          `Your aunt replies, "I want to explain, but I am trying not to speak for him." You say, "Take your time; you can just tell me your part." She explains that she felt put on the spot about hosting. Now you have information supplied by her rather than inferred from the towel. If instead she says, "Let's leave it," move on without a final probing question. In either version, the result is a choice about continuing. You have not uncovered a secret feeling, and you do not need to persuade her that more talking would be better.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same invitation, two valid replies',
        alt: 'After an offer to continue or stop, the aunt may ask for time or choose to leave the story there.',
        caption: 'These are alternative endings, not steps in a sequence. Neither ending proves what the original pause meant.',
        items: [
          { label: 'Continue', detail: 'Aunt: I need a moment. Listener: Take your time; tell only your part.' },
          { label: 'Stop', detail: 'Aunt: Let us leave it there. Listener: Okay. No further explanation needed.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Optional willing partner'],
      steps: [
        `Write a harmless unfinished story about an awkward invitation. With a willing partner, agree that either person may stop.`,
        `Read the opening, then leave a gap. Alone, imagine receiving only that opening without knowing its ending.`,
        `Draft one invitation that permits both continuing and stopping. Write a response for each possible choice.`,
        `Read the stopping branch again. Remove any last question that still asks for the private part of the story.`,
      ],
      notice: 'Your stopping branch ends the inquiry, while the continuing branch leaves the speaker control of the detail.',
      troubleshooting: 'If your invitation sounds like an interrogation, offer leaving it there explicitly and shorten the sentence.',
    },
    recall: {
      prompt: 'A new colleague goes quiet while answering an optional question about their weekend. How could you respond without treating silence as rejection?',
      hint: 'Make answering optional rather than diagnosing the quiet.',
      answer: 'Allow some space, then offer to move on. They can answer later or not at all; silence alone does not establish their attitude toward you.',
    },
    quiz: {
      question: 'A friend pauses in a personal story, and you are unsure whether it is finished. Which response preserves their choice?',
      options: [
        'Ask whether they want to continue or leave it there.',
        'Switch to a lighter topic to spare them discomfort.',
        'Ask a detailed question to help them restart.',
      ],
      correctIndex: 0,
      explanation: 'Checking avoids selecting a meaning for the pause. Changing topics or prompting detail may fit after they indicate a preference, but each assumes that preference now.',
    },
    takeaway: 'Leave room for a pause, and let the speaker decide whether it becomes more conversation.',
    sourceNote: 'This adapts listening guidance to pauses and communication differences. It is not a method for interpreting body language or detecting concealed information.',
  },
  {
    id: 'people-005',
    outcome: 'Share a relevant experience briefly, then return the turn without assuming the experiences match.',
    scene: 'Two running-club members talk after one attends a social event where she knows nobody.',
    sections: [
      {
        title: 'Connection can become a detour',
        paragraphs: [
          `After a club run, Leena describes arriving alone at the group's social evening. You remember your first work party and tell her about the difficult train journey, the buffet, and a conversation with your manager. Several minutes later, her story has vanished. You were trying to connect, not compete, but your example became the new subject. The problem is not that personal stories are forbidden. It is that the other person's unfinished concern no longer has a place in the exchange.`,
        ],
      },
      {
        title: 'Give the example one job',
        paragraphs: [
          `Choose the one detail that explains your connection: arriving without knowing anyone. Leave out details that only make your own story entertaining. Then hand the conversation back with a question about her experience. Avoid "I know exactly how you felt," because a shared setting does not establish a shared feeling. She may have enjoyed being anonymous but disliked not knowing how to join a table. Your story can be a bridge if it makes room for that difference rather than erasing it.`,
        ],
      },
      {
        title: 'A shorter story leaves room for correction',
        paragraphs: [
          `You say, "I once arrived alone at a work party and could not work out where to sit. Was finding a way into the group the awkward part for you?" Leena replies, "Not quite. Everyone was friendly, but I wanted to leave early without seeming rude." You answer that concern instead of supplying more seating stories. If you already took over, a small repair works: "I wandered into my own story. You were saying you wanted to leave early." Then stop. A lengthy apology about being a poor listener would take another turn away from her.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A connection that allows a difference',
        alt: 'The listener shares one seating difficulty, then Leena clarifies that her concern was leaving early.',
        caption: 'The final answer does not match the listener\'s experience. That difference is the useful result of returning the turn.',
        items: [
          { label: 'Listener', detail: 'At my first work party I could not find a seat. Was joining in awkward for you?' },
          { label: 'Leena', detail: 'Joining was fine. I wanted to leave early without seeming rude.' },
          { label: 'Listener', detail: 'So it was ending the evening, not getting started. What happened when you left?' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a private note'],
      steps: [
        `Use the fictional prompt "My first class was awkward." Write a related experience of your own in three sentences.`,
        `Underline the single detail relevant to arriving at a new class. Cut the other details for this exercise.`,
        `Add a question that returns to the speaker and permits a different experience. Rehearse both turns yourself.`,
        `Invent an unexpected answer, such as enjoying class but struggling to leave on time. Write a reply about that answer.`,
      ],
      notice: 'Your last reply follows the new answer rather than continuing your original story.',
      troubleshooting: 'If the connection needs a long explanation, omit your story and ask about the person\'s experience directly.',
    },
    recall: {
      prompt: 'A customer mentions learning to use a camera. You share one beginner mistake, then notice you are listing your equipment. How can you recover?',
      hint: 'Return to their task without making the recovery another personal story.',
      answer: 'Stop the equipment list and ask what they are trying to photograph. A brief acknowledgement of the detour is enough to return the turn.',
    },
    quiz: {
      question: 'You have just shared a related disappointment. Which next move checks whether it actually connects?',
      options: [
        'Describe how you eventually solved it, to complete the story.',
        'Ask whether their difficulty was similar or different, then follow their answer.',
        'Offer another example in case the first was not close enough.',
      ],
      correctIndex: 1,
      explanation: 'A check gives the other person a turn and permits differences. Finishing your solution or adding examples keeps selecting the subject yourself.',
    },
    takeaway: 'A personal example earns its place by helping the other person continue, not by proving identical experience.',
    sourceNote: 'Berkeley discusses listening and turn-taking. This club conversation illustrates those practices without claiming that a particular story length guarantees connection.',
  },
  {
    id: 'people-006',
    outcome: 'Ask what form of support is wanted before turning a complaint into a solution session.',
    scene: 'A colleague discusses missing out on a training place during a lunch break.',
    sections: [
      {
        title: 'Help has several forms',
        paragraphs: [
          `At lunch, Tomas says he did not get a place on a training course. You know another course and reach for your phone. He has not asked for alternatives. He may want to describe his disappointment, think through a next step, or simply eat with someone after a difficult morning. Each calls for different participation from you. Offering information is not wrong in itself, but choosing that form of help before checking can leave his actual request unheard.`,
        ],
      },
      {
        title: 'Ask a question whose answer changes your action',
        paragraphs: [
          `A permission check is useful when its answer controls what happens next. Try, "Would ideas help, or would you rather I just listen?" You can include practical company if that fits: "We could also leave work talk for lunch." Do not present listening as the inferior option. If Tomas chooses listening, stop browsing courses. If he chooses ideas, find out what he needs from the course before recommending one. An invitation to help with one decision is not permission to manage his wider career.`,
        ],
      },
      {
        title: 'The first useful result may be no plan',
        paragraphs: [
          `Tomas says, "Just let me complain for a minute. I do not want another application today." You put the phone away and respond, "You had been looking forward to that place. What part of the news was hardest?" He explains that he had already rearranged his week. Nothing gets booked at lunch. That is not a failed conversation: you provided the support he requested. Later he might ask about another course, and you can have a separate discussion. Do not keep asking for permission every few minutes as a way of wearing down the first answer.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A support check changes the next action',
        alt: 'The listener offers listening or ideas, Tomas chooses listening, and the phone search stops.',
        caption: 'This fictional sequence ends without a course recommendation because that is the form of support Tomas selected.',
        items: [
          { label: 'Offer', detail: 'Would ideas help, or would you rather I listen?' },
          { label: 'Answer', detail: 'Just listen. I do not want another application today.' },
          { label: 'Follow through', detail: 'Put away the course search. Ask about the disappointment instead.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Optional willing partner'],
      steps: [
        `Choose a fictional small disappointment, such as missing a workshop. Write your first instinctive suggestion.`,
        `Replace that suggestion with a support question offering listening, ideas, or leaving the topic for now.`,
        `Alone, write a reply for each choice. With a willing partner, let them choose which fictional branch to rehearse.`,
        `Check that the listening and leave-it branches contain no recommendation. Keep the ideas branch conditional on their request.`,
      ],
      notice: 'The same opening complaint leads to different next actions depending on the support requested.',
      troubleshooting: 'If all branches end with your suggestion, remove it and write what listening alone would sound like.',
    },
    recall: {
      prompt: 'Your neighbour describes a frustrating delivery. You know the complaint process, but they have asked no question. What can you say first?',
      hint: 'Check whether information is the help they want now.',
      answer: 'Ask whether they want to talk it through or hear the complaint options. If they want company, knowing the process does not override that choice.',
    },
    quiz: {
      question: 'A friend says a rehearsal went badly. Which response best avoids assuming the desired support?',
      options: [
        'Suggest a smaller practice goal for next time.',
        'Describe a rehearsal that went badly for you.',
        'Ask whether they want company, listening, or help thinking about the next rehearsal.',
      ],
      correctIndex: 2,
      explanation: 'The support check lets the friend choose. A practice suggestion and a shared story can each be useful, but neither is automatically requested by a complaint.',
    },
    takeaway: 'Choose the kind of help with the person, not merely the kind you are ready to give.',
    sourceNote: 'The listening source cautions against premature advice. The lunch example and its support choices are original teaching applications, not validated counselling scripts.',
  },
  {
    id: 'people-007',
    outcome: 'Respect a refusal of advice while stating your own realistic listening availability.',
    scene: 'A friend wants to vent about flat hunting during a short evening call.',
    sections: [
      {
        title: 'Advice can hide in a question',
        paragraphs: [
          `Maya calls after another disappointing flat viewing. You ask whether she wants suggestions, and she says, "No, I just want to vent." Your next sentence is, "Have you tried widening the search area?" The question mark does not change its job: it recommends widening the search. Maya now has to explain why she has not done that, or repeat a refusal you already heard. The permission check was decorative unless her answer changes the conversation that follows.`,
        ],
      },
      {
        title: 'Respect does not mean unlimited availability',
        paragraphs: [
          `You can listen without prescribing a next move. Reflect what she has said, ask a neutral clarification, or offer quiet company. You also have a limit: you can talk until your evening class starts. Say that clearly rather than accepting an indefinite call and becoming resentful. Her control over whether to receive advice and your control over your availability are separate. Neither cancels the other. Listening for a short agreed period is an offer of attention, not a purchase that entitles you to give instructions afterward.`,
        ],
      },
      {
        title: 'A refusal that actually changes the call',
        paragraphs: [
          `You answer, "No suggestions. I can listen until seven. What was the most frustrating part of this viewing?" Maya says the photographs showed a different room. You respond, "You spent an evening getting there for something that was not as shown." You do not add a recommendation about checking listings. At seven, you close the call as agreed. If she later asks, "What would you try?" you can clarify whether she wants ideas now. A changed invitation can open a new discussion; your repeated wish to offer the same idea cannot substitute for it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'After Maya says no suggestions',
        alt: 'One response disguises a search recommendation as a question; the other offers bounded listening.',
        caption: 'Compare what each line asks Maya to do. Only the second leaves her free from defending a search decision.',
        items: [
          { label: 'Advice continues', detail: 'Have you tried a wider area? Maya must now discuss your proposed solution.' },
          { label: 'Refusal changes the call', detail: 'No suggestions. I can listen until seven. What happened at the viewing?' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A private note'],
      steps: [
        `Copy "I want to vent, not get suggestions." Under it, draft a response about a fictional delayed parcel.`,
        `Underline recommendations, including questions beginning "Have you tried" or "Could you just." Remove those doing advice work.`,
        `Add an honest listening limit for the rehearsal, then one reflection about the inconvenience. No partner is required.`,
        `Read your reply as the caller. Check that you could continue the story without defending or accepting a proposed action.`,
      ],
      notice: 'The reply offers attention and a clear limit, with no hidden assignment for the speaker.',
      troubleshooting: 'If removing advice leaves nothing, reflect a concrete loss such as time spent waiting or a missed plan.',
    },
    recall: {
      prompt: 'A sibling declines help choosing a course but keeps discussing the uncertainty. Does continuing to talk reopen permission for recommendations?',
      hint: 'Talking about a decision is different from asking you to direct it.',
      answer: 'No. Keep listening within your availability. A new explicit request can reopen advice; continued description alone does not replace the earlier refusal.',
    },
    quiz: {
      question: 'A friend says no advice, and you can talk for ten minutes. Which response respects both limits?',
      options: [
        'Listen briefly, then offer one suggestion before the call ends.',
        'Say you can listen for ten minutes without recommendations.',
        'Ask whether hearing just one option might still be useful.',
      ],
      correctIndex: 1,
      explanation: 'The second accepts the refusal and states your availability. The others reopen the declined offer immediately or make listening conditional on receiving advice.',
    },
    takeaway: 'No advice means removing the recommendation, not disguising it as curiosity.',
    sourceNote: 'Listening and boundary guidance support this distinction. The example concerns an ordinary voluntary call, not an obligation to remain available indefinitely.',
  },
  {
    id: 'people-008',
    outcome: 'Use earlier attempts and stated constraints to shape advice that has actually been requested.',
    scene: 'A sibling asks for help with repeated confusion over a shared household shopping list.',
    sections: [
      {
        title: 'The obvious suggestion already exists',
        paragraphs: [
          `Your brother asks how to stop his household buying duplicate groceries. You suggest a shared list. He replies that they have used one for months. Now he has to explain the existing system before you can help. You could have started there. Advice needs permission, but permission alone does not supply context. Before proposing a tool or a conversation, ask what has already been attempted and what happened. A failed result does not necessarily mean nobody tried the obvious approach.`,
        ],
      },
      {
        title: 'Find the point where the attempt breaks',
        paragraphs: [
          `Ask, "How are you using the list now, and where does it stop working?" Your brother says everyone adds items, but nobody marks who is buying them. Two people see milk and each picks it up. The problem is not access to a list; it is the missing assignment between seeing an item and purchasing it. Ask about constraints too. One housemate shops without mobile data, so recommending constant live updates would miss another part of the situation. These questions gather design information, not evidence that he deserves assistance.`,
        ],
      },
      {
        title: 'Make the next option answer the actual gap',
        paragraphs: [
          `You check your understanding: "The list is shared, but purchases are not claimed before people leave." He agrees. You offer, "Would agreeing who covers each item before a shopping trip fit better than adding another app?" He thinks it might, provided the others agree. The resulting proposal concerns ownership and timing, not software replacement. It still needs discussion with the housemates; your brother cannot silently assign their work. If he says an item-claiming rule was tried too, ask what prevented it from working rather than defending the freshness of your suggestion.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Locate the missing agreement',
        alt: 'Milk is listed, two shoppers read it without assigning ownership, and both buy it; a proposed claim comes before shopping.',
        caption: 'This fictional shopping sequence identifies a coordination gap. It does not show that another app is needed.',
        items: [
          { label: 'Shared entry', detail: 'List: milk. Everyone can see it.' },
          { label: 'Unassigned action', detail: 'Two shoppers each think: I can get that.' },
          { label: 'Duplicate result', detail: 'Both return with milk.' },
          { label: 'Proposed change', detail: 'Before leaving: I will buy the milk. Does that work for everyone?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper and pen'],
      steps: [
        `Use a fictional group that keeps missing rehearsal start times. Draw columns for attempt, result, and constraint.`,
        `Enter "sent reminders," "people still arrived late," and "two members finish work at the proposed start."`,
        `Write a question about that constraint before offering another reminder system. Supply a possible answer yourself.`,
        `Draft one optional suggestion based on the answer, and identify who would need to agree before it could happen.`,
      ],
      notice: 'Your proposed next step responds to a specific failure point rather than repeating an existing attempt.',
      troubleshooting: 'If the advice could have been written before reading the columns, name which result or constraint changes it.',
    },
    recall: {
      prompt: 'A colleague asks for ideas because meeting notes are not getting read. What would you find out before recommending shorter notes?',
      hint: 'Length is only one possible failure point.',
      answer: 'Ask how notes are shared, what earlier changes achieved, and what readers need from them. Missing access or unclear ownership would need a different response from length.',
    },
    quiz: {
      question: 'A friend requests help with a chore rota. You learn one already exists but tasks mean different things to each person. What fits?',
      options: [
        'Explore agreeing what each task includes before changing the rota tool.',
        'Recommend a reminder app so the existing rota gets more attention.',
        'Suggest rotating more often so every person tries every task.',
      ],
      correctIndex: 0,
      explanation: 'Clarifying task scope addresses the reported gap. Reminders and more frequent rotation may be useful elsewhere but do not resolve different meanings of the tasks.',
    },
    takeaway: 'Ask where the previous attempt broke before deciding what the next attempt should change.',
    sourceNote: 'Listening and negotiation guidance inform these questions. This coordination problem is specific to the invented household, not a general rule.',
  },
  {
    id: 'people-009',
    outcome: 'Offer a reasoned option without turning permission to hear it into an obligation to act.',
    scene: 'A sister in a new city asks about meeting people who share her interest in board games.',
    sections: [
      {
        title: 'An idea turns into a schedule',
        paragraphs: [
          `Your sister has moved to a new city and asks for ideas about meeting people. You mention a board-game evening because she enjoys cooperative games. Then you start picking her first date, asking whether she has registered, and requesting an update afterward. The original invitation was to share ideas. It was not an agreement to attend an event or report progress. Advice has crossed into managing a decision that still belongs to her, even if every follow-up sounds encouraging.`,
        ],
      },
      {
        title: 'Make the option useful on its own',
        paragraphs: [
          `An optional suggestion can contain substance. Explain the connection to something she has said, identify a relevant drawback, and distinguish checked information from a guess. For example, games provide a shared activity, but a noisy venue might not suit her. Do not pretend to know an event's accessibility or atmosphere without checking. Offer to look into details only if she wants that help. Leaving the choice open is not the same as offering a vague "do whatever"; it means providing information without attaching a duty to please you.`,
        ],
      },
      {
        title: 'Acceptance can mean only hearing you out',
        paragraphs: [
          `You say, "A board-game evening might fit because you like having an activity to start conversations. I have not checked how noisy it is. Want to look at it, or leave the idea for now?" She answers, "I will keep it in mind. This week I want some quiet." You leave it there. The result is an additional possibility she can assess later, not a booking. If you want to follow up, ask whether that would be welcome rather than assuming it. Her decision not to try your option is not evidence that she wasted your help.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Information without homework',
        alt: 'A sibling explains why a game evening might fit, flags unknown noise, and accepts that her sister wants quiet this week.',
        caption: 'The fictional exchange ends with an available option, not an attendance commitment or a reporting requirement.',
        items: [
          { label: 'Sibling', detail: 'Games give you something shared to do. I have not checked the noise. Want to look?' },
          { label: 'Sister', detail: 'I will keep it in mind. I want quiet this week.' },
          { label: 'Sibling', detail: 'Okay. We can leave the idea there.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or an unsent draft'],
      steps: [
        `Invent a friend who wants an inexpensive weekend activity and has invited suggestions. Choose one ordinary option.`,
        `Write why it fits and one drawback or unknown. Do not invent prices, opening hours, or an accessibility claim.`,
        `Add a sentence that leaves deciding with the friend. Alone, rehearse their answer: "Not this weekend."`,
        `Write your response to that refusal. Delete any request for proof that they considered it or a promise to try later.`,
      ],
      notice: 'The option remains informative even when the imagined friend declines it.',
      troubleshooting: 'If the reply creates guilt, remove references to your effort and return to the person\'s stated preference.',
    },
    recall: {
      prompt: 'A colleague agrees to hear about a course you enjoyed but does not enroll. What, if anything, did the original agreement require?',
      hint: 'Separate receiving information, enrolling, and reporting back.',
      answer: 'It covered hearing the suggestion. Enrollment and follow-up were separate choices, so you should not treat the absence of either as a broken commitment.',
    },
    quiz: {
      question: 'A friend asks for walking-route ideas, then says they may stay home. Which reply keeps your suggestion optional?',
      options: [
        'Ask them to try the shortest route once before deciding.',
        'Offer to book transport so the decision becomes easier.',
        'Accept that choice and leave the route information available if wanted.',
      ],
      correctIndex: 2,
      explanation: 'Accepting the choice preserves ownership. A trial walk or transport booking could help if requested, but both add commitments after the friend has expressed uncertainty.',
    },
    takeaway: 'Permission to hear an idea does not create a promise to use it or report back.',
    sourceNote: 'This combines listening with respect for boundaries. The example does not claim a particular social activity will suit everyone or produce friendships.',
  },
  {
    id: 'people-010',
    outcome: 'Check the exact scope of permission before editing, sharing, or sending something for another person.',
    scene: 'A neighbour asks for a spelling check on a draft message about a communal repair.',
    sections: [
      {
        title: 'The invitation has a boundary',
        paragraphs: [
          `Your neighbour Elsie shows you a message she intends to send about a broken entrance light. She asks, "Could you check the spelling?" You notice a sentence that could be clearer and know another resident who has dealt with the caretaker. It is tempting to rewrite the draft, forward it for advice, and get the repair moving. But Elsie invited a spelling check. Each further action changes either her wording, the audience, or who speaks on her behalf.`,
        ],
      },
      {
        title: 'Separate kinds of help',
        paragraphs: [
          `Reading, suggesting, editing, sharing, and sending are distinct actions. Permission for one does not automatically cover the next. Name the action you want to offer: "There is a sentence I found unclear. Would you like a suggestion, or spelling only?" If she accepts a suggestion, show it separately so she can choose. A promise that another recipient is trustworthy does not replace permission to share. Nor does agreeing on the final wording authorize pressing send. Keep the account and recipient under the owner's control unless a different arrangement is explicitly requested.`,
        ],
      },
      {
        title: 'A smaller service can be the complete task',
        paragraphs: [
          `Elsie says, "Spelling only. I want it to sound like me." You mark two errors without replacing her sentences. At the end you say, "Those are the spelling changes; I have not sent or shared anything." She applies them and decides when to contact the caretaker. The useful result is the help she requested, not the largest intervention you could provide. If she later asks you to send it, confirm the exact recipient and version first. That new request can expand the task, but it does not retroactively authorize an earlier forward.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Check before expanding the task',
        alt: 'Elsie requests spelling only, the helper offers a wording suggestion, and accepts her narrower request.',
        caption: 'Each line concerns the same fictional draft. The helper finishes within the permission actually given.',
        items: [
          { label: 'Elsie', detail: 'Could you check the spelling in this repair message?' },
          { label: 'Helper', detail: 'Would you also like a wording suggestion, or spelling only?' },
          { label: 'Elsie', detail: 'Spelling only. I want it to sound like me.' },
          { label: 'Helper', detail: 'Two spelling changes marked. Nothing sent or shared.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'A fictional two-sentence message'],
      steps: [
        `Write a pretend message about a missing parcel. Above it, write the request "Check the spelling only."`,
        `List four possible actions: identify a typo, rewrite the complaint, show a friend, and send to the delivery company.`,
        `Mark what the existing request covers. For each other action, draft a specific permission question; rehearse both roles alone.`,
        `Finish with a completion note that states what changed and what was not done. Do not send the practice message.`,
      ],
      notice: 'The original permission covers one action; the remaining actions stay separate offers rather than assumed permissions.',
      troubleshooting: 'If a question says only "Can I help more?", replace it with the actual edit, recipient, or sending action.',
    },
    recall: {
      prompt: 'A cousin lets you improve a job application paragraph. Can you upload the revised document to their account because the deadline is near?',
      hint: 'Editing a document and submitting it have different consequences.',
      answer: 'Not from editing permission alone. Ask about submission specifically, including the final version and destination, and leave control with the applicant unless explicitly delegated.',
    },
    quiz: {
      question: 'A friend approves your suggested wording but has not discussed sending. What should happen next?',
      options: [
        'Return the approved wording and let them send, unless they explicitly ask you to do it.',
        'Send the approved draft because they already accepted its content.',
        'Forward it to a knowledgeable mutual friend for a final check.',
      ],
      correctIndex: 0,
      explanation: 'Approval of content is not approval of sending or a new audience. Both alternatives expand the action beyond the permission described.',
    },
    takeaway: 'Ask again when the help changes from discussing words to changing them, sharing them, or acting on them.',
    sourceNote: 'Boundary and listening sources inform this example of ordinary assistance. It does not establish legal agency or authorization rules.',
  },
  {
    id: 'people-011',
    outcome: 'Acknowledge a reported feeling without confirming an unverified explanation of other people\'s motives.',
    scene: 'A cousin discovers photographs of a dinner she was not invited to and feels excluded.',
    sections: [
      {
        title: 'Two claims in one sentence',
        paragraphs: [
          `Your cousin Noor shows you photographs of a dinner with several friends. She says, "I feel left out. They must all be tired of me." The first part describes her experience. The second explains other people's thoughts. You know the photographs exist and that she says the omission hurt. You do not know who arranged the dinner or why she was not invited. Saying "Yes, they clearly do not value you" would add your authority to an explanation neither of you has established.`,
        ],
      },
      {
        title: 'Support without a verdict',
        paragraphs: [
          `Reflecting means putting your understanding back into words so the speaker can confirm or correct it. It need not endorse every attached conclusion. "Finding those pictures hurt, especially because you expected to be included" recognizes what Noor reported. You can then ask what she knows about the arrangements. Avoid swinging straight to "I am sure it was an accident," which substitutes another unverified story. Support does not require certainty in either direction. You can stay with a person's disappointment while keeping the cause of the event open.`,
        ],
      },
      {
        title: 'Let the unknown remain visible',
        paragraphs: [
          `Noor explains that one friend had mentioned meeting up but never sent a date. You say, "So you expected an invitation, and we do not yet know how this dinner was organized." She agrees that the missed expectation is the part she wants to discuss. You have not excused the organizers or proved they excluded her deliberately. If she wants ideas, you could discuss asking the organizer directly. If she wants only to talk, do that instead. The result is a conversation grounded in hurt and known events, without manufacturing a group verdict about her worth.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What can this reply honestly support?',
        alt: 'One statement reflects Noor\'s reported disappointment; the other certifies an unverified motive for the dinner invitation.',
        caption: 'Both lines respond to the same photographs. Only the first stays within what Noor reported and you know.',
        items: [
          { label: 'Experience acknowledged', detail: 'You expected to be included, so finding those pictures hurt.' },
          { label: 'Motive added', detail: 'They left you out because they no longer value you.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Write this fictional statement: "Nobody replied to my invitation. They think I am boring."`,
        `Draw two columns: reported event and supplied explanation. Place each part in the appropriate column.`,
        `Draft a supportive reply about waiting without responses. Keep the reason for the silence uncertain.`,
        `Rehearse a follow-up alone: ask a neutral question about the invitation, without replacing the negative explanation with guaranteed reassurance.`,
      ],
      notice: 'Your reply recognizes disappointment while leaving more than one explanation of the silence possible.',
      troubleshooting: 'If the reply sounds cold, name the missed expectation; do not compensate by inventing a reassuring motive.',
    },
    recall: {
      prompt: 'A colleague says, "My suggestion was not discussed. The team thinks I am useless." How could you respond?',
      hint: 'Recognize the experience without claiming access to the team\'s opinion.',
      answer: 'Acknowledge that having the suggestion passed over was discouraging. Ask what happened in the meeting before endorsing an explanation about the team.',
    },
    quiz: {
      question: 'A friend is upset because a message went unanswered. Which response supports them without deciding why?',
      options: [
        'They probably got busy; try not to take it personally.',
        'That silence sounds deliberate given how much this mattered.',
        'Waiting without an answer was upsetting. What do you know so far?',
      ],
      correctIndex: 2,
      explanation: 'The third recognizes the experience and asks for context. Both alternatives may sound supportive, but each supplies a motive not established by an unanswered message.',
    },
    takeaway: 'You can recognize hurt without certifying either blame or reassurance about an unknown motive.',
    sourceNote: 'Communication and listening guidance inform the distinction. This example does not provide a way to infer intentions from silence or social invitations.',
  },
  {
    id: 'people-012',
    outcome: 'Summarize the specific concern without expanding its frequency, severity, or target.',
    scene: 'A film-club member objects to one joke in an introduction, not to the presenter as a person.',
    sections: [
      {
        title: 'A summary can enlarge a complaint',
        paragraphs: [
          `After a film-club screening, Imani says, "I did not like the joke about people arriving late." You reply, "You think the presenter is insensitive." Your version sounds related, but it has changed the target. Imani described one joke; you described a person's character. She may now need to defend the presenter just to keep her original concern accurate. Even sympathetic summaries can create a larger disagreement than the speaker meant to raise. A reflection should not turn a moment into a personality assessment.`,
        ],
      },
      {
        title: 'Preserve the edges of the claim',
        paragraphs: [
          `Listen for scope: which event, which behavior, and how often? Words such as always, everyone, and never widen a statement unless the speaker used them deliberately. You need not repeat every word, but preserve the size of the claim. "The late-arrival joke bothered you" keeps the focus on the event. "You do not enjoy his introductions" adds a pattern. The difference matters because a request about one line in an introduction is easier to discuss precisely than an argument over the presenter's whole record.`,
        ],
      },
      {
        title: 'Use the correction rather than defending the summary',
        paragraphs: [
          `Imani says, "I usually like his introductions. This time I thought newcomers might feel singled out." You revise: "So the concern is that particular line, especially for new members?" She agrees. That leaves room to ask whether she wants to raise the wording with the presenter, without claiming she dislikes him. If she corrects you again, revise again. A summary is a check on your understanding, not a statement you must win. The practical result is a concern another person could repeat without accidentally accusing someone of a broader pattern.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Narrow the reflection back to the event',
        alt: 'Imani corrects a broad summary about the presenter, and the listener returns to the specific late-arrival joke.',
        caption: 'Notice which words disappear after the correction: the judgement of the presenter is replaced by the particular line.',
        items: [
          { label: 'Imani', detail: 'I did not like the late-arrival joke.' },
          { label: 'Listener', detail: 'You dislike his introductions?' },
          { label: 'Imani', detail: 'Usually I like them. This line could single out newcomers.' },
          { label: 'Listener', detail: 'That particular line, especially for new members. Have I understood?' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper or a private draft'],
      steps: [
        `Copy "The music at dinner made it hard to hear" and the summary "You never enjoy visiting them."`,
        `Mark what changed: the event became a pattern, and the music became the whole visit.`,
        `Write a new summary that preserves the original event and effect. This can be completed alone.`,
        `Add a fictional correction, "Only during the first course," and revise your summary to include that narrower scope.`,
      ],
      notice: 'The final summary is no broader than the speaker\'s corrected account.',
      troubleshooting: 'If you cannot point to words supporting a broad claim, remove it and return to the named event.',
    },
    recall: {
      prompt: 'A colleague says one chart was hard to read. How could you summarize that without implying they rejected the whole report?',
      hint: 'Keep the object and size of the criticism unchanged.',
      answer: 'Check which chart or feature was hard to read. Do not translate a readability issue into disagreement with the findings or the entire report.',
    },
    quiz: {
      question: 'A friend says this morning\'s interruption bothered them, but says nothing about a pattern. Which summary fits?',
      options: [
        'You feel unheard in this friendship.',
        'Being interrupted this morning bothered you; is that the issue?',
        'You want us to avoid discussing that subject again.',
      ],
      correctIndex: 1,
      explanation: 'The second preserves the event and checks it. The others infer a relationship pattern or a future rule that the friend has not stated.',
    },
    takeaway: 'Keep the event, frequency, and target of a summary no larger than the speaker\'s claim.',
    sourceNote: 'Berkeley supports paraphrasing and correction. The film-club example illustrates scope; it does not decide whether the original joke was acceptable.',
  },
  {
    id: 'people-013',
    outcome: 'Treat a guessed feeling as a question and accept the person\'s own correction.',
    scene: 'A customer gives a short reply while comparing two bicycle-repair options at a counter.',
    sections: [
      {
        title: 'A short reply does not name a feeling',
        paragraphs: [
          `At a bicycle-repair counter, you explain two options. The customer replies, "Fine," in a voice that sounds clipped to you. You assume anger about the price and begin defending the charges. The customer interrupts: "I am not angry. I do not understand which repair I need." Your response answered a feeling you inferred instead of the question they had. The short reply was an observation. Its emotional meaning was still uncertain, even if you had heard this customer speak more warmly before.`,
        ],
      },
      {
        title: 'An emotional label is optional',
        paragraphs: [
          `Sometimes it helps to check a feeling: "Are you frustrated with these options, or is something else unclear?" The wording should permit correction. You can also avoid the label entirely: "Which part would you like me to explain?" That may fit a service conversation better. Familiarity with someone can suggest questions worth asking, but a change from their usual tone does not prove anger, deception, or a hidden attitude. Use context to improve the question rather than to strengthen an accusation about what they must feel.`,
        ],
      },
      {
        title: 'Let their answer redirect the conversation',
        paragraphs: [
          `The customer says, "I am confused about why one option costs more." You reply, "Thanks for correcting me. One replaces the worn part; the other includes additional adjustment. Shall I separate the work and costs?" Now they can compare concrete options. You do not need to settle whether they were also annoyed. Their stated question is enough to guide your next explanation. If they do not want to discuss feelings, stay with the service task. The result you can inspect is whether the options are clearer, not whether you correctly decoded their tone.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A correction changes the service response',
        alt: 'The customer rejects an anger guess and asks for the repair options to be explained instead.',
        caption: 'Read the customer\'s correction as information. Nothing in the exchange establishes a reliable tone-to-feeling rule.',
        items: [
          { label: 'Helper', detail: 'Are you frustrated with the price, or is something else unclear?' },
          { label: 'Customer', detail: 'I am confused about what each option includes.' },
          { label: 'Helper', detail: 'Let us separate the work and costs so you can compare them.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Write "My teammate answered briefly, so they disliked my idea." Separate the observation from your interpretation.`,
        `Draft one tentative feeling check and one task question that does not require naming a feeling.`,
        `Rehearse both roles alone. Have the teammate answer, "I like it; I am unsure about the date."`,
        `Write a follow-up about the date. Delete any attempt to prove that the brief reply meant dislike anyway.`,
      ],
      notice: 'The final response follows the stated uncertainty rather than defending the original emotional guess.',
      troubleshooting: 'If the feeling check sounds intrusive, use the task question and let the person volunteer emotional context.',
    },
    recall: {
      prompt: 'Your brother speaks more quietly than usual about a move. You assume sadness, but he says he is concentrating on costs. What changes?',
      hint: 'His correction is more useful than your comparison with his usual voice.',
      answer: 'Use the cost concern to guide your response. Ask whether he wants to discuss it; the quieter voice does not override his account.',
    },
    quiz: {
      question: 'You guessed disappointment, but a friend says they feel relieved. What best keeps the reflection accurate?',
      options: [
        'Use relieved and ask what part brought relief, if they want to discuss it.',
        'Ask whether relief might be covering disappointment.',
        'Explain which details made disappointment seem more likely.',
      ],
      correctIndex: 0,
      explanation: 'Accepting the correction keeps the speaker in charge of describing their experience. The other replies prioritize your interpretation over the account you asked to understand.',
    },
    takeaway: 'A guessed feeling should be easy to correct; a change in tone is context, not a verdict.',
    sourceNote: 'Listening and communication sources inform tentative reflection. This lesson does not endorse diagnosing feelings, personality, or honesty from voice or movement.',
  },
  {
    id: 'people-014',
    outcome: 'Reflect an attraction and a concern together without deciding which should win.',
    scene: 'A parent considers an evening pottery course that offers creative time but adds a late journey home.',
    sections: [
      {
        title: 'Both parts belong to the decision',
        paragraphs: [
          `Your mother is considering an evening pottery course. She likes the chance to make something with other beginners. She also dislikes the late journey home. You want her to go and summarize, "You are excited to finally have a hobby." That leaves out the journey. If you were worried about her schedule, you might instead say, "It sounds too tiring." Both summaries turn a mixed account into a single direction. Her attraction and concern can exist at the same time without either being insincere.`,
        ],
      },
      {
        title: 'A balanced reflection is not a disguised vote',
        paragraphs: [
          `Try, "You want the creative time and company, and you are unsure about getting home so late." The word "and" lets both parts remain present. "But" is not banned, though it can make the first part sound cancelled by the second. The aim is to preserve what she said, not follow a magic wording rule. Ask whether you have missed another concern. Mixed feelings are not proof that someone needs a push, and a complete summary does not oblige you to find a perfect compromise.`,
        ],
      },
      {
        title: 'Understanding makes the next question narrower',
        paragraphs: [
          `She replies, "Yes. It is the last bus, not the class itself." Now, if she wants help, you can ask about the actual finish time and travel options rather than arguing about whether hobbies are worthwhile. A daytime course might preserve some benefits, or she might decide this one is not worth the travel. Those are later choices. The immediate result is a decision with its real dimensions visible. You have not converted her uncertainty into permission to enroll her, and you have not treated her concern as a reason she must give up.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What each summary leaves in view',
        alt: 'One summary retains only enthusiasm; a second includes the creative interest and the late journey concern.',
        caption: 'These are alternative reflections of the same fictional decision, not evidence that either course choice is correct.',
        items: [
          { label: 'Only the attraction', detail: 'You are excited about pottery. The late journey disappears from the summary.' },
          { label: 'Both concerns', detail: 'You want creative time and company, and you are unsure about the last bus home.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a private note'],
      steps: [
        `Invent a decision about joining a weekend group. Write one attraction and one practical concern in separate columns.`,
        `Combine them into a reflection without adding a recommendation. Work alone or invite a willing partner to read the decision.`,
        `Add a correction that makes one concern more specific, such as travel cost rather than lack of interest.`,
        `Rewrite the reflection with that correction, then add one question about information still needed for the decision.`,
      ],
      notice: 'Both original concerns remain recognizable after the reflection becomes more specific.',
      troubleshooting: 'If your summary ends with "so you should," remove the conclusion and ask whether the account is complete.',
    },
    recall: {
      prompt: 'A colleague wants a stretch assignment and worries about losing time for current work. How could you reflect the whole account?',
      hint: 'Ambition and workload concern need not cancel each other.',
      answer: 'Name both the learning opportunity and the concern about existing responsibilities. Then ask which workload detail needs clarification before discussing a choice.',
    },
    quiz: {
      question: 'A friend likes a shared flat\'s company but wants more privacy. Which reply checks both concerns?',
      options: [
        'The company seems worth trying even with less privacy.',
        'You want the social side and need space alone; what would private space involve?',
        'The privacy concern suggests waiting for a different flat.',
      ],
      correctIndex: 1,
      explanation: 'The second preserves both concerns and clarifies one. The alternatives may become reasonable choices, but they decide before checking the mixed account.',
    },
    takeaway: 'Keep the attraction and concern visible before moving from understanding to choosing.',
    sourceNote: 'Listening and interest-based negotiation inform this reflection. The course example does not establish that mixed concerns always have a mutually satisfying solution.',
  },
  {
    id: 'people-015',
    outcome: 'Check a fair account of another preference before explaining where your own differs.',
    scene: 'Two colleagues disagree about using a live demonstration or a recording in a team presentation.',
    sections: [
      {
        title: 'The apparent disagreement is too broad',
        paragraphs: [
          `Your colleague Ana wants a live demonstration in a team presentation. You prefer a recording. You assume she wants a more impressive show, and begin defending the reliability of video. She hears you dismiss a point she has not made. Before arguing, try describing her preference in language she recognizes. "You want the audience to see the steps happen in real time. Is that the main reason?" This is a check, not an announcement that the live demonstration has been approved.`,
        ],
      },
      {
        title: 'A correction reveals the actual difference',
        paragraphs: [
          `Ana answers, "Partly, but I mainly want people to ask questions at each step." Your original summary missed the interactive purpose. Use that correction rather than praising her view and repeating your old objection. You can now say, "You want questions during the sequence. I want to avoid spending the meeting recovering from a technical failure." Understanding and agreement are separate. You have represented her concern fairly while retaining your own. Neither person has to surrender a preference as the price of being heard.`,
        ],
      },
      {
        title: 'Options come after the check',
        paragraphs: [
          `Once Ana confirms the revised summary, you propose a recording that pauses after each step, with a live demonstration available afterward if time allows. She may accept, reject, or modify it. The option is relevant because it addresses questions during the sequence, not because it splits everything exactly in half. If the two needs cannot be met together, the disagreement is still clearer: interaction during the session versus recovery risk. A fair summary earns its value by changing what you respond to, not by sounding respectful before you ignore the answer.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Check the reason before proposing a format',
        alt: 'Ana clarifies that questions during each step matter, and her colleague states a concern about recovering from live failure.',
        caption: 'The original dialogue separates understanding, a different preference, and an option that still requires agreement.',
        items: [
          { label: 'Colleague', detail: 'You want everyone to see it happen live. Is that the main reason?' },
          { label: 'Ana', detail: 'Mainly I want questions at each step.' },
          { label: 'Colleague', detail: 'I want to avoid recovery delays. Could we pause a recording for questions?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper and pen'],
      steps: [
        `Choose a fictional disagreement about an outdoor or indoor group meal. Write a reason for each preference.`,
        `Draft a fair summary of the preference you do not share, followed by a check for correction.`,
        `Answer as the other person yourself, adding a reason you initially missed. Revise the summary before defending your preference.`,
        `Write your preference separately, then one possible arrangement. Label the arrangement "proposal," not "agreement."`,
      ],
      notice: 'The proposed arrangement responds to the corrected reason, while your own preference remains stated.',
      troubleshooting: 'If the summary sounds sarcastic, remove words such as merely or obviously and use the reason the person actually gave.',
    },
    recall: {
      prompt: 'A sibling wants a large birthday gathering; you prefer a small dinner. What can you do before debating the guest count?',
      hint: 'Check what the larger gathering provides without agreeing to host it.',
      answer: 'Summarize and check their reason, such as seeing distant relatives together. Then explain what matters about the smaller dinner and compare possible plans.',
    },
    quiz: {
      question: 'You summarize a neighbour\'s parking concern, and they correct your reason for it. What should come next?',
      options: [
        'Offer a compromise based on your first understanding.',
        'Accept their preferred arrangement to show you listened.',
        'Update the summary, then state your own concern before considering arrangements.',
      ],
      correctIndex: 2,
      explanation: 'The correction should change the discussion. A compromise built on the wrong reason misses it, while agreement is not required just to demonstrate understanding.',
    },
    takeaway: 'Understanding a preference accurately gives you a better disagreement; it does not commit you to the proposed plan.',
    sourceNote: 'Principled negotiation and listening support the distinction between understanding and agreement. The presentation format is an invented option, not a proven best practice.',
  },
  {
    id: 'people-016',
    outcome: 'State a personal limit as an action you can carry out rather than a command over someone else.',
    scene: 'A neighbour asks for daily plant watering, while the helper is available only on Saturday.',
    sections: [
      {
        title: 'Whose action does the sentence govern?',
        paragraphs: [
          `Your neighbour asks you to water balcony plants every day during a trip. You can visit on Saturday, but not throughout the week. "You need to stop going away so often" tries to control their travel. "I can water on Saturday; I cannot take the daily job" describes your participation. The distinction is not whether the sentence sounds gentle. It is whose action the limit governs. You can decide whether to accept this request without acquiring authority over when your neighbour travels.`,
        ],
      },
      {
        title: 'Make the limit usable for planning',
        paragraphs: [
          `State what you can do and what remains uncovered. Here the neighbour needs help on the other days, so clarify before they rely on you. Avoid "I will see what I can manage" when daily visits are already impossible. Offer Saturday only if you want to and it is useful. Disappointment does not automatically make the limit wrong, but check that the available help was understood.`,
        ],
      },
      {
        title: 'A limit does not erase an earlier promise',
        paragraphs: [
          `The neighbour replies, "Then I will ask someone else for weekdays. Could you still do Saturday?" You confirm that one visit. Now the arrangement matches your availability. If you had already promised the whole week, the conversation would need another part: acknowledge the changed commitment and discuss the gap. Calling a statement a boundary does not make earlier reliance disappear. Here, because you clarified before accepting, no daily coverage was promised. The result is a narrower agreement both people can plan around, not a rule requiring the neighbour to change their life.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: 'Whose action, and how specific?',
        alt: 'Four statements cross control of my action or your action with specific or vague wording.',
        caption: 'Rows: whose action. Columns: specific or vague. A specific statement about my participation gives a usable limit.',
        items: [
          { label: 'My action / specific', detail: 'I can water on Saturday, not on weekdays.' },
          { label: 'My action / vague', detail: 'I will somehow try to help.' },
          { label: 'Your action / specific', detail: 'You must cancel the weekday part of your trip.' },
          { label: 'Your action / vague', detail: 'You need to be more considerate.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or an unsent message'],
      steps: [
        `Invent a request to receive a neighbour's parcels all week. Choose the one day you could actually offer in the scenario.`,
        `Write the limit using your availability, not a command about their shopping or travel.`,
        `Rehearse alone: the neighbour asks for two extra days. Write a reply that keeps the original limit clear.`,
        `Add a confirmation of exactly what, if anything, you agree to do. Check that no earlier promise is silently cancelled.`,
      ],
      notice: 'The other person could plan the uncovered days without guessing whether you will eventually accept them.',
      troubleshooting: 'If your sentence mainly describes what they must do, rewrite it around the help you will provide or decline.',
    },
    recall: {
      prompt: 'A friend keeps a Saturday plan tentative. You have not committed yet and want to make other arrangements by Thursday. What limit could you state?',
      hint: 'Describe your planning action rather than requiring them to choose you.',
      answer: 'Explain that you can keep Saturday open until Thursday, then will make other plans if it remains unconfirmed. They remain free to confirm or decline.',
    },
    quiz: {
      question: 'You cannot provide ongoing lifts but can offer one this Friday. Which reply states a usable limit?',
      options: [
        'I can drive this Friday, but please arrange other weeks separately.',
        'I will try to drive whenever it does not become too much.',
        'You should change your schedule so you need fewer lifts.',
      ],
      correctIndex: 0,
      explanation: 'The first specifies your participation. The second leaves availability uncertain, and the third proposes control of the other person\'s schedule rather than stating your offer.',
    },
    takeaway: 'A personal limit tells others what you will do, not what they are allowed to choose.',
    sourceNote: 'The inherited boundary guidance informs this example. Shared responsibilities and existing commitments still require discussion rather than relabelling them away.',
  },
  {
    id: 'people-017',
    outcome: 'Decline a request truthfully without adding an excuse to solve or a replacement promise you do not want.',
    scene: 'Friends ask someone to host another weekend dinner when the person wants a quiet weekend at home.',
    sections: [
      {
        title: 'A false obstacle invites repair',
        paragraphs: [
          `Friends ask whether you can host dinner this weekend. You want quiet time, but saying so feels awkward. You claim the oven is broken. Someone offers takeaway, so your invented obstacle is solved. Now you must accept or invent another explanation. A false excuse gives people inaccurate information about what would make their request possible. The actual answer was that you did not want to host, not that you lacked a working oven.`,
        ],
      },
      {
        title: 'Truthful does not mean fully disclosed',
        paragraphs: [
          `You can say, "Thanks for asking. I am not hosting this weekend." That is a usable answer without a detailed account of your energy, finances, or private plans. Warmth and a clear decision can fit in the same sentence. "Maybe" is different: it leaves the organizer waiting or trying to change your circumstances. Offer another date only if you want to host then and can follow through. A compensating promise made to soften the moment creates a future task, not merely a more polite version of no.`,
        ],
      },
      {
        title: 'Keep the answer clear when alternatives appear',
        paragraphs: [
          `A friend replies, "We could keep it small and do the washing up." You appreciate the offer but still want a quiet weekend. "That is thoughtful, but I am still not hosting this time" keeps the decision intact without criticizing their suggestion. They can find another venue or cancel the meal. Someone may be disappointed, and you do not need to resolve that feeling by changing your answer. If you were already the confirmed host, you would owe an update about the changed plan. Here you are declining a new request, not quietly withdrawing an accepted responsibility.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A decline that survives a workaround',
        alt: 'The host declines, friends offer an easier dinner, and the host thanks them while keeping the answer clear.',
        caption: 'The fictional reply does not dispute whether takeaway is easier. Hosting is still not being offered.',
        items: [
          { label: 'Friend', detail: 'Could we have dinner at yours on Saturday?' },
          { label: 'You', detail: 'Thanks for asking. I am not hosting this weekend.' },
          { label: 'Friend', detail: 'We could bring takeaway and wash up.' },
          { label: 'You', detail: 'That is thoughtful, but I am still not hosting this time.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A private draft or paper'],
      steps: [
        `Choose a fictional optional request, such as lending a bicycle for the weekend. Decide honestly that you will decline.`,
        `Write a brief answer with appreciation if it fits, then the decision. Leave out invented mechanical faults or appointments.`,
        `Alone, write a reasonable workaround the requester might offer. Respond without creating a new excuse.`,
        `Check for accidental promises such as "next week instead." Keep them only if they are part of your intended offer.`,
      ],
      notice: 'The answer remains understandable even when the requester offers to make the task easier.',
      troubleshooting: 'If every reply needs another explanation, return to the decision itself rather than describing a removable obstacle.',
    },
    recall: {
      prompt: 'A colleague asks you to join an optional weekend club. You are not interested but do not want to discuss your weekend plans. What could you say?',
      hint: 'An honest decline can leave personal details private.',
      answer: 'Thank them for thinking of you and say you will not join. You need not invent a competing appointment or promise to attend another week.',
    },
    quiz: {
      question: 'You do not want to volunteer for an optional event and cannot offer a later date. Which reply is clearest?',
      options: [
        'I might help if my weekend stays free.',
        'I cannot help this time; perhaps ask me for the next one.',
        'Thank you for asking, but I am not taking this on.',
      ],
      correctIndex: 2,
      explanation: 'The third gives the actual decision without a new opening. The first implies uncertainty, and the second invites future involvement you have not chosen to offer.',
    },
    takeaway: 'Decline the request itself instead of inventing an obstacle or a compensating commitment.',
    sourceNote: 'Boundary guidance informs this refusal. It neither cancels existing commitments nor requires sharing private reasons.',
  },
  {
    id: 'people-018',
    outcome: 'State when your availability ends and close at that point without making an unreliable future promise.',
    scene: 'A relative calls before an evening class, leaving a short but genuine window to talk.',
    sections: [
      {
        title: 'Make the available window visible',
        paragraphs: [
          `Your uncle calls at 6:10 while you are getting ready for a class. You need to leave at 6:25 and would enjoy a short conversation. Without that limit, he may begin a long story you must interrupt. Start with the information that affects his choice: "I can talk until 6:25. Is that enough for what you wanted, or should we leave it for another time?" The opening lets him choose whether the topic fits.`,
        ],
      },
      {
        title: 'A short yes is different from an unlimited yes',
        paragraphs: [
          `The opening lets your uncle choose whether the topic fits. He might share one update or decide it deserves another conversation. Do not offer a specific future call merely to soften the limit unless you can make it. Time boundaries work through information and follow-through, not by convincing someone that your class is more valuable than their story. You can care about the conversation while having another commitment. If only a brief greeting is possible, say so rather than presenting a longer window that does not exist.`,
        ],
      },
      {
        title: 'Close the agreement you actually made',
        paragraphs: [
          `Your uncle chooses a short update about his garden. Near the end you say, "I need to leave now, as we said. I am glad the seedlings came through." You do not launch another question as you close. If the topic has grown, acknowledge that there is more to discuss and arrange another time only when both can commit. The useful outcome is a call whose ending was known in advance. It is not proof that nobody feels disappointed, and staying beyond the limit once does not turn future calls into open-ended obligations.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'An agreed short call',
        alt: 'At 6:10 the caller hears the 6:25 limit, chooses a short update, and the listener closes at the agreed time.',
        caption: 'The invented clock times show a stated ending and follow-through. The spacing is schematic, not a duration scale.',
        items: [
          { label: '6:10 / opening', detail: 'I can talk until 6:25. Does that fit what you wanted?' },
          { label: 'Topic chosen', detail: 'Yes, just a quick update about the seedlings.' },
          { label: '6:25 / close', detail: 'I need to leave now. I am glad the seedlings came through.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Your ordinary calendar, if useful'],
      steps: [
        `Choose a fictional call before a real type of commitment, such as a meal or class. Write a realistic stopping time.`,
        `Draft an opening that states the ending and asks whether the topic fits. Do not start an actual call for the drill.`,
        `Rehearse the caller choosing a short update, then write your closing sentence. Both roles can be read alone.`,
        `Check whether the closing introduces a new question or a future promise. Remove anything you cannot follow through on.`,
      ],
      notice: 'The opening and ending describe the same availability, with no hidden extension.',
      troubleshooting: 'If the limit feels abrupt, add warmth about the person or topic without weakening the actual ending.',
    },
    recall: {
      prompt: 'A neighbour visits while you have time for a brief chat but not a long visit. How can you make that usable for both of you?',
      hint: 'Name the limit before they settle into a longer conversation.',
      answer: 'Say how long you are available and ask whether a short chat works. Close when stated, rather than expecting them to infer your schedule.',
    },
    quiz: {
      question: 'A colleague asks for an optional debrief and you have a short gap. Which opening is most useful?',
      options: [
        'Start the discussion and mention the limit when the gap ends.',
        'State the stopping time and ask whether the topic fits that window.',
        'Offer a full discussion tomorrow before checking your calendar.',
      ],
      correctIndex: 1,
      explanation: 'Early information lets both people choose the scope. The other approaches hide the current limit or create a future commitment that may not be available.',
    },
    takeaway: 'State the end of your availability before someone plans around more time than you have.',
    sourceNote: 'Boundary and communication guidance inform these illustrative times. No call length is prescribed.',
  },
  {
    id: 'people-019',
    outcome: 'Ask permission for the actual audience and detail before passing on a private story.',
    scene: 'A volunteer privately explains leaving a group chat, and another member asks for the reason.',
    sections: [
      {
        title: 'The audience changes when you repeat it',
        paragraphs: [
          `A volunteer, Ben, privately explains that a changed family timetable is why he left the garden group's chat. Later another member asks, "Was he unhappy with us?" You could reassure them by forwarding his message. But the original audience was you. A screenshot gives the new recipient Ben's wording and possibly surrounding details he never chose to circulate. Removing his name would not make him unrecognizable in a small group. Access to information and permission to redistribute it are different things.`,
        ],
      },
      {
        title: 'Make a permission request specific',
        paragraphs: [
          `Ask Ben, "May I tell the garden group only that your availability changed, without sharing the family details?" That names both the audience and the content. A broad "Can I mention it?" leaves room for different expectations. If he says no, you can tell the questioner that the explanation is his to share. If he approves a short summary, use that summary rather than forwarding the complete conversation. Permission for one person to hear it does not automatically extend to the whole group.`,
        ],
      },
      {
        title: 'Keep the practical need separate from curiosity',
        paragraphs: [
          `Ben approves "My availability has changed" but wants family details kept private. You share exactly that. The group can replace his volunteer slot without the rest of the story. Curiosity does not require you to produce private evidence. Avoid promising absolute secrecy for every circumstance, but do not use hypothetical exceptions to justify ordinary gossip. Here the task is arranging coverage, and the approved detail is enough.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A private account becomes an approved summary',
        alt: 'Ben gives a private explanation, approves one sentence for the garden group, and only that sentence is shared.',
        caption: 'The fictional flow narrows the content before the audience expands. It does not authorize forwarding the original message.',
        items: [
          { label: 'Private account', detail: 'Ben explains family timetable details to one listener.' },
          { label: 'Specific check', detail: 'May I tell the garden group only that your availability changed?' },
          { label: 'Permission', detail: 'Yes, that sentence only. Please leave out the family details.' },
          { label: 'Shared summary', detail: 'Ben says his availability has changed.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or an unsent draft'],
      steps: [
        `Invent a private explanation for missing a club session. Do not use an actual private message for this exercise.`,
        `Write who wants to know and what practical decision they need to make. Separate that need from curiosity.`,
        `Draft a permission question naming the exact recipient and proposed summary. Answer it yourself with a narrower permission.`,
        `Write only the approved summary, then check it against the permission word by word. Keep the draft unsent.`,
      ],
      notice: 'The shared version contains no detail beyond the fictional permission and serves the stated practical need.',
      troubleshooting: 'If you need the full story to make the summary persuasive, remove the persuasion goal and preserve the person\'s chosen limit.',
    },
    recall: {
      prompt: 'A coworker privately explains needing a different shift. The team needs a rota update, not the reason. What should you check before saying more?',
      hint: 'Separate a scheduling fact from the private explanation behind it.',
      answer: 'Ask what scheduling information may be shared and with whom. Do not include the personal reason merely because it would answer the team\'s curiosity.',
    },
    quiz: {
      question: 'A friend allows you to tell one mutual friend that they are taking a break from a club. What does that cover?',
      options: [
        'That summary to the named friend, not the full message or a wider group.',
        'The full message to the named friend, because the topic is approved.',
        'The same summary to the club, because it contains no sensitive detail.',
      ],
      correctIndex: 0,
      explanation: 'Permission has both content and audience limits. The alternatives change one of those limits without checking.',
    },
    takeaway: 'Before repeating a personal account, check what may move and exactly who may receive it.',
    sourceNote: 'The boundary source provides general context. This everyday privacy example does not define professional confidentiality duties or every exceptional disclosure situation.',
  },
  {
    id: 'people-020',
    outcome: 'Update a standing offer early while acknowledging plans already made in reliance on it.',
    scene: 'An open invitation for a cousin to stay changes when the spare room becomes a workroom.',
    sections: [
      {
        title: 'The old offer is still information',
        paragraphs: [
          `Last year you told your cousin, "Stay with us whenever you visit." The spare room is now becoming a shared workroom, so overnight visits no longer fit. Your cousin still has the earlier offer to plan from. Hoping they stop asking does not update that information. Nor is it accurate to say they should have known the invitation was temporary when you never said so. A changed limit can be reasonable while the earlier offer was also real and meaningful.`,
        ],
      },
      {
        title: 'Separate future requests from confirmed arrangements',
        paragraphs: [
          `Tell them what changed and when the new limit applies: "The spare room will be a workroom from next month, so we cannot offer overnight stays after that." Then check whether a visit was already confirmed. A vague standing invitation and a specific booked weekend create different expectations. If you promised a particular stay, acknowledge the inconvenience of changing it and discuss what can still be done. You need not promise accommodation you cannot provide, but calling the change a boundary is not a reason to ignore reliance on your earlier yes.`,
        ],
      },
      {
        title: 'Resolve the known visit explicitly',
        paragraphs: [
          `Your cousin says they had already agreed with you to visit next weekend. You can still host that weekend before the room changes. You reply, "Next weekend is still confirmed. The change applies to later visits; please ask before making future travel plans." They now know which promise remains and which offer has ended. If the confirmed visit could not be honored, the conversation would need a practical discussion rather than that assurance. The result is a shared timeline, not a rewritten history in which you never offered the room.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Keep the promise and update the standing offer',
        alt: 'The host acknowledges the earlier invitation, confirms next weekend, and ends the open offer for later visits.',
        caption: 'In this fictional case the confirmed stay is still possible. A different constraint would require discussing that impact instead.',
        items: [
          { label: 'Acknowledge', detail: 'I did offer the spare room for your visits.' },
          { label: 'Confirmed visit', detail: 'Next weekend is still confirmed, before the room changes.' },
          { label: 'Future limit', detail: 'From next month we cannot host overnight. Please ask before planning later stays.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper and an ordinary calendar'],
      steps: [
        `Use a fictional standing offer to provide a lift every Friday. Choose a future date when that availability changes.`,
        `List whether any specific Friday was already confirmed. Keep that commitment separate from unrequested future dates.`,
        `Draft the update: acknowledge the old offer, state the new limit, and explain how confirmed plans will be addressed.`,
        `Rehearse the recipient asking about one confirmed date. Write a clear answer without inventing a replacement driver.`,
      ],
      notice: 'The update distinguishes what remains promised, what needs discussion, and what is no longer offered.',
      troubleshooting: 'If it sounds as though the earlier offer never existed, name it explicitly before explaining the change.',
    },
    recall: {
      prompt: 'You once offered unlimited feedback on a friend\'s drafts but can now read only one short piece a month. How would you update that?',
      hint: 'Separate the future limit from any draft you already agreed to read.',
      answer: 'Acknowledge the earlier offer, state the new scope, and discuss outstanding agreed drafts directly. Do not let the friend discover the change through unexplained silence.',
    },
    quiz: {
      question: 'Your recurring volunteer availability changes, and next week\'s shift is already confirmed. What belongs in the update?',
      options: [
        'Only the new availability, so the coordinator can infer the rest.',
        'A statement that recurring offers are never firm commitments.',
        'The future change and an explicit discussion of the already confirmed shift.',
      ],
      correctIndex: 2,
      explanation: 'The coordinator needs both pieces of information. A new general limit does not explain what happens to a specific commitment already used for planning.',
    },
    takeaway: 'Change the offer without changing the history: state the new limit and address existing reliance.',
    sourceNote: 'Boundary and communication guidance inform expectations here, not the legal status of accommodation or other contracts.',
  },
  {
    id: 'people-021',
    outcome: 'Connect an observable event to its effect and a request someone can actually answer.',
    scene: 'A colleague changes the opening slides shortly before a joint presentation without notifying the speaker.',
    sections: [
      {
        title: 'Start with the change, not the character judgement',
        paragraphs: [
          `You open a shared presentation and find that the first two slides have changed since your rehearsal. You say to Ravi, "You never respect my work." He replies that he was fixing an error. The conversation is now about his character and your use of never, not about how the changes affected the presentation. A more precise opening names what you saw: "The opening slides changed after yesterday's rehearsal, and I did not know before presenting." That gives Ravi an event he can confirm or correct.`,
        ],
      },
      {
        title: 'An I statement still needs substance',
        paragraphs: [
          `Starting with "I feel" does not automatically remove blame. "I feel that you disregard me" still claims something about Ravi's attitude. Instead, describe your experience and the practical effect: "I was thrown off because my notes no longer matched." Then make the request visible: "Could we flag changes to the opening before either of us presents?" The purpose is not to guarantee a calm response. It is to make the problem and requested action answerable without requiring agreement about an entire personality.`,
        ],
      },
      {
        title: 'Let facts and responsibility stay open to correction',
        paragraphs: [
          `Ravi explains that he corrected a mislabeled date but forgot to tell you. You can acknowledge the useful correction while discussing the missing notification: "The date needed fixing. I still need to know when my speaking notes are affected." Together you agree to send a short change summary before the next presentation. If Ravi says someone else edited the opening, check the shared record rather than defending the accusation. The issue remains coordination of changes. In the worked exchange, naming the event allows a specific agreement even though you initially felt personally dismissed.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'An answerable complaint about the slides',
        alt: 'A statement moves from the changed slides to mismatched notes and a request to flag changes before presenting.',
        caption: 'Each step adds information about the same fictional event. The request concerns notification, not proof of respect.',
        items: [
          { label: 'Event', detail: 'The opening slides changed after our rehearsal.' },
          { label: 'Effect', detail: 'My notes no longer matched, and I was thrown off.' },
          { label: 'Request', detail: 'Could we flag opening changes before either of us presents?' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Use the fictional complaint "You are careless with shared plans." Invent one observable event behind it.`,
        `Write the effect on you separately, such as arriving at an old meeting place. Avoid assigning a motive.`,
        `Add one request with a clear action, then rehearse the recipient asking which event you mean. Work alone.`,
        `Check that your opening answers that question and that the request could receive a clear yes, no, or counterproposal.`,
      ],
      notice: 'The draft identifies an event and an actionable request without needing a character judgement to connect them.',
      troubleshooting: 'If the request says only "be considerate," name the message, timing, or behavior that would address the impact.',
    },
    recall: {
      prompt: 'A housemate leaves laundry in the shared machine when you need it. How could you raise that without calling them selfish?',
      hint: 'Describe what happened, what it prevented, and the change you want.',
      answer: 'Name the finished load left in the machine, explain that you could not start yours, and ask how completed loads can be cleared promptly.',
    },
    quiz: {
      question: 'A friend changes a meeting place without telling you. Which opening makes the issue easiest to discuss?',
      options: [
        'I feel that you do not take my time seriously.',
        'I waited at the original place; could we confirm changes directly next time?',
        'I know you were trying to help, so let us forget the change.',
      ],
      correctIndex: 1,
      explanation: 'The second links the event to a request. The first still infers attitude, while the third assumes a motive and drops the coordination problem without addressing it.',
    },
    takeaway: 'Describe the event, its effect, and the next action you want, while leaving facts open to correction.',
    sourceNote: 'Utah State University explains personal statements and specific requests. Wording alone cannot guarantee agreement in this fictional workplace.',
  },
  {
    id: 'people-022',
    outcome: 'Keep one disagreement answerable while preserving separate concerns for another discussion.',
    scene: 'Neighbours discussing late music drift toward complaints about bicycles and unanswered group messages.',
    sections: [
      {
        title: 'The question keeps changing',
        paragraphs: [
          `You ask a neighbour about music continuing late on weeknights. Soon the discussion includes bicycles near the stairs, a missed building meeting, and unanswered messages. Every topic may matter, but nobody can tell what would resolve this conversation. An offer to lower the music receives an answer about a bicycle. The expanding list makes it difficult to distinguish a proposed solution from a request to defend the neighbour's whole record. Begin by naming the issue you want answered now: when amplified music will stop on weeknights.`,
        ],
      },
      {
        title: 'Separate is not the same as dismissed',
        paragraphs: [
          `You can say, "The bicycles also need discussion. Can we note that separately and finish the music timing first?" A short written note keeps the other concern from disappearing. Do not use focus as an excuse to exclude context that explains the current problem. Last Tuesday's late music is relevant to a discussion about repeated weeknight noise. A dispute about who buys cleaning supplies is probably a different issue. Ask how a past event connects rather than treating every old example as either essential evidence or forbidden history.`,
        ],
      },
      {
        title: 'Finish against the original question',
        paragraphs: [
          `Your neighbour says an earlier stop is possible on work nights but wants to discuss occasional gatherings separately. You agree on a weeknight stop time and note that weekend gatherings still need a conversation. Before leaving, restate what was settled and what was not. The bicycles remain on the list; they have not become silently acceptable. The observable result is a specific answer about music, plus a visible record of another open topic. A narrower conversation can end usefully without claiming the whole neighbour relationship has been repaired.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Now and separately',
        alt: 'One note holds the current question about weeknight music; another holds bicycles and weekend gatherings for separate discussion.',
        caption: 'These fictional notes distinguish scope, not importance. A parked concern remains open rather than automatically resolved.',
        items: [
          { label: 'Answer in this conversation', detail: 'What time will amplified music stop on weeknights?' },
          { label: 'Keep visibly open', detail: 'Bicycle storage and occasional weekend gatherings need separate agreements.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper with two columns'],
      steps: [
        `Write a fictional disagreement about a late shared meal. Add two unrelated complaints and one relevant earlier late meal.`,
        `Label columns "needed for this question" and "separate discussion." Place each complaint and explain the connection.`,
        `Draft a sentence proposing focus without dismissing the separate issues. Read both sides aloud yourself if working alone.`,
        `Write a closing note with one agreement and one unresolved concern. Check it against the original question.`,
      ],
      notice: 'A reader can tell which issue was answered and which remains open.',
      troubleshooting: 'If a supposedly separate event explains the present concern, include the relevant connection rather than excluding it automatically.',
    },
    recall: {
      prompt: 'A group discussion about missed deadlines shifts to which members are friendliest. How could you restore a useful focus?',
      hint: 'Return to the planning question without denying that other concerns might matter.',
      answer: 'Name the deadline issue and ask to address responsibilities and timing first. Record any distinct relationship concern for another conversation instead of using friendliness as evidence about the deadline.',
    },
    quiz: {
      question: 'While discussing a repeated noise problem, someone mentions last week\'s noise and an unrelated parcel dispute. What should you do?',
      options: [
        'Exclude both because old events should stay in the past.',
        'Discuss both fully before deciding on a noise agreement.',
        'Use the related noise example and note the parcel issue separately.',
      ],
      correctIndex: 2,
      explanation: 'Relevance, not age alone, determines scope. The noise example explains the pattern, while the parcel issue needs its own answer.',
    },
    takeaway: 'Keep the current question visible and give separate concerns a real place rather than adding them as accusations.',
    sourceNote: 'Communication and negotiation guidance inform this focus practice. The suggested notes organize discussion; they do not decide which concerns deserve priority in every dispute.',
  },
  {
    id: 'people-023',
    outcome: 'Offer a voluntary process for hearing two accounts without assuming equal blame or identical speaking needs.',
    scene: 'Two cousins disagree about who was supposed to pay a holiday-booking deposit.',
    sections: [
      {
        title: 'One account keeps interrupting the other',
        paragraphs: [
          `Two cousins, Asha and Leon, disagree about a holiday deposit. Asha says Leon promised to pay; Leon says he was only checking the booking link. Each begins a reply before the other finishes. You are present, but that does not automatically make you their referee. Ask whether they would like a simple turn-taking process. If both agree, each can explain what they understood, while the listener summarizes before responding. A written account is also possible if speaking over one another keeps happening.`,
        ],
      },
      {
        title: 'Fair attention does not predetermine the answer',
        paragraphs: [
          `The process aims to make the relevant claims understandable. It does not prove that both accounts are equally accurate or that responsibility must be divided evenly. Nor must each speaker use exactly the same number of seconds. Someone may need more time to formulate a sentence or prefer writing. Check whether each person has explained the commitment they understood and had a chance to correct the listener's summary. Then separate facts that can be checked from interpretations that remain disputed. Equal respect does not require treating every factual claim as established.`,
        ],
      },
      {
        title: 'Check the disputed commitment',
        paragraphs: [
          `Leon summarizes Asha's account: "You thought my message meant I would pay that evening." She confirms. Asha summarizes his: "You meant you would check the payment page." They agree to look at the relevant shared message. It says only, "I will look tonight," so neither payment nor its deadline was explicit. They arrange who will handle the deposit now and how future commitments will be confirmed. The turn-taking did not create a verdict of equal fault. It revealed the exact ambiguity that their earlier interruptions kept obscuring.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Two summaries before the record check',
        alt: 'Leon checks Asha\'s payment expectation, Asha checks Leon\'s interpretation, and they identify an ambiguous message.',
        caption: 'This invented exchange shows a fair hearing, not a rule that responsibility must be equal.',
        items: [
          { label: 'Leon', detail: 'You thought I had committed to paying that evening?' },
          { label: 'Asha', detail: 'Yes. You meant only that you would check the page?' },
          { label: 'Leon', detail: 'Yes. Let us check what the shared message actually says.' },
          { label: 'Shared message', detail: 'I will look tonight. Payment and a deadline are not explicit.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Optional willing partner'],
      steps: [
        `Write two fictional interpretations of "I will sort it": booking a table versus finding available restaurants.`,
        `Ask a willing partner to rehearse one account, or read both roles yourself. Agree to finish each account before replying.`,
        `Write a summary each speaker could confirm. Make one correction and update the relevant summary.`,
        `Underline the precise disputed commitment, then draft a future confirmation that removes that ambiguity.`,
      ],
      notice: 'The summaries expose the disputed action rather than deciding who has the better personality or speaking style.',
      troubleshooting: 'If the exercise becomes a rebuttal contest, switch to short written accounts and summarize each before responding.',
    },
    recall: {
      prompt: 'A fast-speaking colleague and a quieter one dispute a shared task. What would fair participation look like without a rigid stopwatch?',
      hint: 'Measure opportunity to explain and correct, not identical speaking duration.',
      answer: 'Agree on uninterrupted accounts, allow a written version or pauses, and check each summary. Responsibility should follow the relevant facts, not equal airtime or assumed equal blame.',
    },
    quiz: {
      question: 'Both people have explained a missed booking, but the shared record supports only one account. What follows from fair turn-taking?',
      options: [
        'Both were heard; the evidence can still support different levels of responsibility.',
        'Responsibility should be split evenly because both received a turn.',
        'Treat responsibility as undecidable because the two accounts still differ.',
      ],
      correctIndex: 0,
      explanation: 'Fair process provides attention, not equal blame. Relevant evidence can inform responsibility even when the speakers still disagree about their accounts.',
    },
    takeaway: 'Give each account room to be understood, then examine the actual commitments and evidence.',
    sourceNote: 'Listening and communication guidance inform the process. The deposit story is fictional and does not appoint an uninvited observer as mediator.',
  },
  {
    id: 'people-024',
    outcome: 'Propose a pause with a realistic check-in while distinguishing a break from a demand for surrender.',
    scene: 'Siblings repeatedly interrupt one another while planning who will clear up after a family meal.',
    sections: [
      {
        title: 'The discussion has become a loop',
        paragraphs: [
          `You and your brother are dividing cleanup after a family meal. You repeat that you cooked; he repeats that he shopped. Each interrupts before the other finishes, so neither account gets answered. In an ordinary safe disagreement, a pause can interrupt this pattern. Explain it, though: leaving with "Whatever" makes him guess whether you have abandoned the task, the conversation, or something more.`,
        ],
      },
      {
        title: 'A check-in is not a deadline for calm',
        paragraphs: [
          `Try, "We are repeating ourselves. I need a break. Can we check back after we have both eaten?" A check-in creates a shared expectation about revisiting the issue. It does not require either person to feel calm on command or agree when the time arrives. Make the return realistic rather than offering a time you know you cannot keep. Do not make the break conditional on "come back when you admit I am right." That uses withdrawal to demand a conclusion instead of creating space for a better exchange.`,
        ],
      },
      {
        title: 'Return to a smaller question',
        paragraphs: [
          `Your brother agrees. After eating, you ask whether now still works. You return to one question: "Which cleanup tasks remain, and who can do each?" Cooking and shopping can inform the division without becoming competing speeches about who cares more. If more time is needed, update the plan rather than simply disappearing. The worked result is a resumed discussion with a clear task, not proof that a pause always resolves conflict. If an exchange feels unsafe, prioritize leaving and getting support; you do not owe a return appointment to an unsafe conversation.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Pause, check, and return to the task',
        alt: 'One sibling requests a break, both agree to check after eating, and they resume with the remaining cleanup tasks.',
        caption: 'This fictional sequence shows a safe disagreement. The check-in reassesses readiness; it does not force resolution.',
        items: [
          { label: 'Name the loop', detail: 'We are repeating ourselves. I need a break.' },
          { label: 'Agree a check-in', detail: 'Can we check back after we have both eaten?' },
          { label: 'Check readiness', detail: 'Does now still work for talking about cleanup?' },
          { label: 'Narrow the question', detail: 'Which tasks remain, and who can do each?' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper and a calendar if useful'],
      steps: [
        `Choose a fictional minor disagreement about a shared errand. Write one sentence describing the conversational loop.`,
        `Draft a pause request and a realistic check-in point. Do not stage an actual argument to practice.`,
        `Rehearse alone a reply accepting the check-in, then one needing a different time. Make room for both.`,
        `Write the first concrete question for resuming. Check that it does not require either person to concede beforehand.`,
      ],
      notice: 'The other person can tell what is paused, when it will be checked, and what the next discussion concerns.',
      troubleshooting: 'If your return condition demands an apology or agreement, replace it with a readiness check and a specific topic.',
    },
    recall: {
      prompt: 'A safe group-planning discussion is looping, and one person cannot return tonight. How could a pause remain clear?',
      hint: 'Choose a realistic next contact rather than an impossible immediate return.',
      answer: 'Agree when and how to check back, and note the unresolved planning question. The check-in can assess readiness without promising that the issue will be settled then.',
    },
    quiz: {
      question: 'At an agreed check-in, one person says they need more time. What best preserves the purpose of the pause?',
      options: [
        'Insist on settling the issue now because a time was named.',
        'Check a realistic new contact time and keep the unresolved issue explicit.',
        'Leave the topic open indefinitely to avoid pressuring them.',
      ],
      correctIndex: 1,
      explanation: 'The check-in is for reassessing and coordinating, not enforcing emotional readiness. An updated expectation is clearer than either forced resolution or unexplained indefinite delay.',
    },
    takeaway: 'In a safe disagreement, pair a pause with a clear check-in and a specific question to return to.',
    sourceNote: 'Relationship and negotiation guidance inform this pause. It is not a treatment technique or a requirement to re-enter an unsafe exchange.',
  },
  {
    id: 'people-025',
    outcome: 'Choose a private conversation format both participants can use rather than treating one channel as superior.',
    scene: 'Volunteer event organizers disagree over a long text thread, with one preferring writing and the other a call.',
    sections: [
      {
        title: 'The channel has become another argument',
        paragraphs: [
          `Sam and Jo are volunteer organizers disputing an event's start time in a long text thread. Sam wants a call for a "serious conversation." Jo says writing gives them time to explain without interruption. They are now arguing about whose channel is more mature, which does not solve the scheduling problem. A call offers faster clarification; writing offers time to formulate and review an account. The choice should address those needs, not award maturity.`,
        ],
      },
      {
        title: 'Compare needs, not communication status',
        paragraphs: [
          `Ask what each format provides. Sam wants to resolve small misunderstandings quickly. Jo wants an uninterrupted explanation and a record of the eventual plan. Privacy, accessibility, available time, and the complexity of the topic all matter. Neither speech nor text is automatically fairer. A surprise call in a busy place may exclude someone just as a long message thread can. Also ask who will be present. Adding another organizer or forwarding messages changes the audience and should be discussed, not used to recruit support behind someone's back.`,
        ],
      },
      {
        title: 'A sequence can serve both needs',
        paragraphs: [
          `They agree to exchange short written accounts first, then have a scheduled call about the remaining questions. Jo can prepare the account; Sam can ask follow-ups after reading it. At the end, they write the agreed start time and any open issue. That sequence is one option, not a universal prescription. If a call remains inaccessible or unwanted, another written exchange may fit better. The outcome to check is whether both people can understand, answer, and review the actual planning decision, rather than whether one person succeeded in moving the conversation to their strongest format.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Agree the format before resuming',
        alt: 'Jo asks for time to write, Sam asks for quick clarification, and they propose written accounts followed by a scheduled call.',
        caption: 'The fictional sequence combines stated needs. It remains a proposal until both organizers agree.',
        items: [
          { label: 'Jo', detail: 'Writing lets me finish my explanation without interruption.' },
          { label: 'Sam', detail: 'I want to clarify the small questions without another long thread.' },
          { label: 'Proposal', detail: 'Short written accounts first, then a scheduled call and a written summary?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper with two columns'],
      steps: [
        `Use a fictional disagreement about a shared trip. Give one person a need for preparation and the other a need for clarification.`,
        `List what a message exchange and a scheduled conversation would each make easier or harder.`,
        `Draft a format proposal naming timing, participants, and how any agreement will be recorded. Work through both roles alone.`,
        `Test the proposal with a refusal of one channel. Revise it without calling that preference immature or evasive.`,
      ],
      notice: 'The proposed channel or sequence answers stated participation needs and keeps the audience explicit.',
      troubleshooting: 'If the plan only benefits the faster speaker or writer, add preparation time or a different response route.',
    },
    recall: {
      prompt: 'A family member wants to discuss a shared expense by message because they need the numbers in front of them. You prefer talking. What could you propose?',
      hint: 'Keep the need for reviewable numbers in view.',
      answer: 'Offer a written breakdown first, then ask whether a scheduled conversation would help. Keep an agreed written summary rather than treating a call as the only valid discussion.',
    },
    quiz: {
      question: 'A colleague prefers written feedback; you want quick clarification. Which proposal best acknowledges both needs?',
      options: [
        'Send a voice message instead, combining speech with asynchronous delivery.',
        'Call without warning so the issue does not become another long thread.',
        'Ask about written points first, followed by a mutually workable clarification step.',
      ],
      correctIndex: 2,
      explanation: 'The third checks a usable sequence. A voice message may still miss the need for writing, and an unexpected call does not establish availability or consent to that format.',
    },
    takeaway: 'A suitable channel enables both people to participate; it is not a prize for the more forceful preference.',
    sourceNote: 'Communication and boundary guidance inform channel choice. No format is inherently more honest, mature, or universally suitable.',
  },
  {
    id: 'people-026',
    outcome: 'Write an apology that names your action and its impact without demanding agreement about unrelated claims.',
    scene: 'Someone jokes about a friend\'s drawing in front of a small art group and later apologizes.',
    sections: [
      {
        title: 'The action needs a subject',
        paragraphs: [
          `During an art-group session, you joke that your friend's portrait looks like the subject's distant cousin. People laugh. Later your friend says they felt exposed while showing beginner work. "Sorry the session got awkward" names a situation but leaves your part unclear. "I made that joke about your drawing in front of the group" identifies the action you took. A specific apology lets the recipient see what you understand, rather than requiring them to decide whether a vague expression of regret covers the actual incident.`,
        ],
      },
      {
        title: 'Own what you know happened',
        paragraphs: [
          `Add the impact they described: "You were sharing work you felt unsure about, and I made it harder to do that." Avoid "if you were upset" when they have already told you they were. You can acknowledge the effect without claiming to know every feeling or agreeing with an unrelated accusation. If your friend says you have never supported them, you can apologize for the joke while keeping that broader claim for another conversation. Do not make agreement on your entire friendship a precondition for owning this event.`,
        ],
      },
      {
        title: 'Leave room after the apology',
        paragraphs: [
          `You say, "I made the joke about your portrait in front of everyone. I understand why that made sharing harder. I am sorry." Then stop and let your friend respond. They may want a correction to the group, a change in how feedback is offered, or time. Ask about a practical next step if appropriate, but do not attach a request that they reassure you immediately. In this example, the apology's first achievement is clarity about the action you own. Restored ease at the next session is a separate outcome you cannot require.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Vague regret and specific responsibility',
        alt: 'One apology refers to an awkward session; the other names the public joke about the friend\'s portrait.',
        caption: 'Compare which line tells the friend what the speaker is taking responsibility for. Neither line can compel forgiveness.',
        items: [
          { label: 'Situation without an actor', detail: 'Sorry the session became awkward.' },
          { label: 'Action owned', detail: 'I made that joke about your portrait in front of the group. I am sorry.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or an unsent draft'],
      steps: [
        `Invent a small mistake, such as interrupting a friend while they introduced an idea. Write what you actually did.`,
        `Add the impact they reported, or phrase an uncertain impact as something to check rather than declare.`,
        `Draft an apology with your action as the subject. Work alone; do not send it as part of the exercise.`,
        `Remove conditional wording that questions a known impact and any request for immediate reassurance. Read the shorter version again.`,
      ],
      notice: 'A reader can identify the action being apologized for without having to supply it from memory.',
      troubleshooting: 'If the draft says only "everything" or "the situation," replace that phrase with the particular action you own.',
    },
    recall: {
      prompt: 'You gave a customer the wrong collection time. How could you apologize without hiding behind "there was confusion"?',
      hint: 'Name who gave the information and what consequence is known.',
      answer: 'Say that you gave the wrong time and acknowledge the unnecessary journey if they made one. Then address the practical collection arrangement separately.',
    },
    quiz: {
      question: 'You interrupted a colleague, and they say they lost their chance to explain. Which apology identifies your responsibility?',
      options: [
        'I interrupted before you finished and cut off your explanation. I am sorry.',
        'I am sorry if the discussion felt rushed to you.',
        'I am sorry we both struggled to communicate clearly.',
      ],
      correctIndex: 0,
      explanation: 'The first owns the described action. The second makes an already reported effect conditional, and the third distributes responsibility without establishing a shared mistake.',
    },
    takeaway: 'Name the action you own and the impact you understand before asking what repair is needed.',
    sourceNote: 'The inherited Harvard Health apology guidance provides context. The art-group wording is an original rehearsal, not a formula that guarantees acceptance.',
  },
  {
    id: 'people-027',
    outcome: 'Explain a positive intention briefly without making it cancel responsibility for the impact.',
    scene: 'A colleague announces someone\'s accepted volunteer placement before that person has told their team.',
    sections: [
      {
        title: 'Good news can still be someone else\'s news',
        paragraphs: [
          `Mina tells you privately that she has been accepted for a volunteer placement. You are pleased and mention it at a team lunch. She had wanted to tell her manager first and announce the news herself. When she raises this, you say, "I was only excited for you." That may accurately describe your intention, but it does not restore her choice of timing and audience. Now she has to argue against your positive motive before the effect on her is even acknowledged.`,
        ],
      },
      {
        title: 'Keep explanation separate from excuse',
        paragraphs: [
          `An explanation helps someone understand how an action happened. An excuse is being used here to dismiss responsibility or make the impact seem invalid. The same fact can do either job depending on what follows. "I was excited, so you should not be upset" cancels her account. "I was excited and spoke without checking" identifies your decision. Start by naming the action and consequence; include intention only if it adds useful context. Your sincerity about meaning well does not determine whether the disclosure was welcome.`,
        ],
      },
      {
        title: 'Move from motive to what can change',
        paragraphs: [
          `You say, "I announced your placement before you were ready. I took away your chance to tell people yourself. I was excited, but I should have checked. I am sorry." Ask whether a follow-up would help without adding another audience. Mina asks you not to post about it and says she will handle the manager conversation. You respect that. The lunch announcement cannot be undone, but another unapproved disclosure can be prevented. Next time, ask before sharing personal news.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Intention follows responsibility',
        alt: 'The speaker acknowledges announcing Mina\'s placement, explains the excitement briefly, and follows her request not to post it.',
        caption: 'In this invented exchange, the motive explains the action but does not erase the lost choice over the announcement.',
        items: [
          { label: 'Speaker', detail: 'I announced your placement before you were ready. I should have checked.' },
          { label: 'Speaker', detail: 'I was excited, but that did not make it mine to announce. I am sorry.' },
          { label: 'Mina', detail: 'Please do not post it. I will handle the next conversation myself.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Invent a well-meant mistake, such as reorganizing a shared shelf without asking. Write the helpful intention separately.`,
        `Name a concrete impact, such as someone no longer finding their materials. Do not invent a personality explanation.`,
        `Draft responsibility first, then at most one sentence of useful context. Rehearse both roles alone.`,
        `Add a permission-based next step, such as asking what should be restored. Check that good intentions are not offered as payment for forgiveness.`,
      ],
      notice: 'The impact remains acknowledged even if the sentence about your intention is removed.',
      troubleshooting: 'If "I meant well" carries the whole apology, start again with the action and what it changed for the person.',
    },
    recall: {
      prompt: 'You edited a friend\'s speech to make it clearer, but they wanted only proofreading. How could you explain yourself without excusing the overreach?',
      hint: 'The helpful goal does not expand the permission originally given.',
      answer: 'Own changing the wording beyond the request. Mention the clarity goal briefly if useful, then offer to restore the original and ask what help is wanted.',
    },
    quiz: {
      question: 'You shared news without permission and had a positive motive. Which response puts that motive in the right place?',
      options: [
        'Explain the positive motive first so the person can judge the impact fairly.',
        'Acknowledge the lost choice, briefly explain if useful, and ask about a relevant next step.',
        'Avoid mentioning your action and promise to be more thoughtful in general.',
      ],
      correctIndex: 1,
      explanation: 'The second keeps responsibility intact. Leading with motive can make acknowledgement conditional, while a general promise leaves the specific action unnamed.',
    },
    takeaway: 'A good intention can explain your choice without excusing the effect or expanding the permission you had.',
    sourceNote: 'Apology and boundary guidance inform this example. It does not claim that lost privacy can always be restored by a later correction.',
  },
  {
    id: 'people-028',
    outcome: 'Correct misinformation for the audience that received it while avoiding unnecessary additional exposure.',
    scene: 'A garden-group message wrongly blames a volunteer for a delayed soil delivery.',
    sections: [
      {
        title: 'The private apology leaves a public error',
        paragraphs: [
          `In a garden-group chat, you write that Lou cancelled the soil delivery. You later learn the supplier moved the delivery date; Lou did not cancel anything. You apologize privately to Lou, who appreciates the message. The group, however, still has your incorrect account. A private apology addresses the interaction between you and Lou, but it does not update the people who might now blame Lou or make plans using the wrong information. Repair needs to match the consequence that is still present.`,
        ],
      },
      {
        title: 'Correct the smallest necessary audience and detail',
        paragraphs: [
          `Identify who received the error and what they need to know now. In this case, the original chat needs the delivery fact corrected. There is no reason to tell a wider neighbourhood group. Before adding Lou's private messages or explanation, ask permission; a correction is not an excuse to publish evidence from a private conversation. You can also ask Lou whether the proposed wording creates a new concern. Keep your own responsibility clear instead of writing "There seems to have been some confusion," which hides who supplied the false account.`,
        ],
      },
      {
        title: 'Replace the account rather than extending the story',
        paragraphs: [
          `You write, "Correction to my earlier message: the supplier moved the delivery. Lou did not cancel it. I got that wrong." Then provide the revised date only if it is confirmed and useful. There is no need to replay the whole accusation or describe Lou's reaction. If the group also used your error in a planning note, correct that record too. The worked result is that the original audience receives an accurate replacement account. Lou is not required to endorse your apology publicly or explain private details to make the correction count.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Repair the remaining information problem',
        alt: 'The original group receives a wrong claim, Lou gets a private apology, and the group still needs a factual correction.',
        caption: 'The fictional flow distinguishes two audiences. A private apology cannot update the group\'s mistaken information by itself.',
        items: [
          { label: 'Original group', detail: 'Receives the incorrect claim about Lou cancelling the delivery.' },
          { label: 'Private apology', detail: 'Lou hears that you recognize your mistake.' },
          { label: 'Group correction', detail: 'The supplier moved the delivery. Lou did not cancel it. I got that wrong.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper or an unsent draft'],
      steps: [
        `Invent an incorrect group message about who changed a meeting. List the original recipients and the corrected fact.`,
        `Write a private apology, then identify what those recipients would still wrongly believe after it.`,
        `Draft a short correction for only that audience. Rehearse alone without copying any real private messages.`,
        `Remove personal details that do not correct the error. Mark any added information that would need separate permission or verification.`,
      ],
      notice: 'The correction replaces the false fact without requiring a wider retelling or private supporting material.',
      troubleshooting: 'If your draft mainly explains why you made the mistake, lead with the corrected fact and own the error briefly.',
    },
    recall: {
      prompt: 'You wrongly credited a colleague\'s contribution to someone else in a team note. Is a private apology enough to fix the note?',
      hint: 'Ask who still has the inaccurate record.',
      answer: 'No. Correct the attribution in the note and notify the relevant original audience. Avoid expanding the audience or publishing private explanations unnecessarily.',
    },
    quiz: {
      question: 'A group still believes your mistaken claim after you apologized privately. What best addresses the remaining consequence?',
      options: [
        'Ask the affected person to tell the group you apologized.',
        'Explain privately to members who ask, avoiding another group message.',
        'Give the original group a brief factual correction that owns your error.',
      ],
      correctIndex: 2,
      explanation: 'A correction updates the original audience. Announcing an apology may leave the false fact intact; answering only people who ask leaves others uninformed.',
    },
    takeaway: 'Repair the information where it spread, using the smallest sufficient correction and audience.',
    sourceNote: 'Apology and boundary sources inform the example. The repair is proportionate to this fictional message, not a universal rule for formal public corrections.',
  },
  {
    id: 'people-029',
    outcome: 'Propose a feasible remedy that addresses the owner\'s actual loss.',
    scene: 'A neighbour returns a borrowed soup pot with a damaged handle and discusses replacement options.',
    sections: [
      {
        title: 'A generous phrase can leave the work to the owner',
        paragraphs: [
          `You return a neighbour's borrowed soup pot with a damaged handle. "I will do anything to make it right" leaves the owner to identify a remedy, research it, and check whether you can afford it. A concrete offer starts that work rather than passing it back. Acknowledge the damage, then propose a feasible next step: find a suitable replacement and check it with the owner before buying. A specific offer can still leave the final choice open.`,
        ],
      },
      {
        title: 'Suitability matters more than the gesture',
        paragraphs: [
          `The owner may need the pot's capacity, its fit on their cooker, or a lid that works for their usual meals. A smaller expensive pot is not automatically a better remedy. Ask which features matter, and be honest about your budget and timing. Do not attempt a makeshift handle repair and declare it safe. You are discussing a remedy, not demonstrating cookware repair expertise. Also distinguish the apology from the remedy: one acknowledges the action, while the other addresses what the owner has lost. Neither grants automatic access to borrow again.`,
        ],
      },
      {
        title: 'Turn the offer into an agreed next step',
        paragraphs: [
          `You say, "I damaged the handle. I can research a replacement today and send options before buying. What should I match?" The owner asks you to wait while they check the original model. Agree when to reconnect rather than buying immediately. If no suitable replacement fits your means, say so. You are offering a next action within your control, not a purchase the owner must accept or a promise of unlimited compensation.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A remedy the owner can assess',
        alt: 'Borrower and owner check the pot\'s model and capacity before choosing a replacement.',
        caption: 'The invented exchange checks suitability before purchase instead of treating any replacement as sufficient.',
        items: [
          { label: 'Borrower', detail: 'I damaged the handle. I can research a replacement today before buying anything.' },
          { label: 'Owner', detail: 'The capacity matters. Let me check the model first.' },
          { label: 'Borrower', detail: 'I will wait for that detail, then send suitable options for you to check.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper'],
      steps: [
        `Imagine losing a borrowed notebook. List losses beyond the physical cover, without using real borrowed property.`,
        `Write one thing you can actually offer and one thing you cannot promise to restore, such as irreplaceable notes.`,
        `Draft a remedy with an action and a proposed time. Rehearse the owner preferring another solution; play both roles alone.`,
        `Revise the offer to reflect that preference and your actual limits. Leave any purchase conditional on agreement.`,
      ],
      notice: 'The offer specifies useful work while admitting limits rather than claiming that any replacement settles the loss.',
      troubleshooting: 'If the plan depends on money or skills you do not have, narrow it and discuss what remains unresolved.',
    },
    recall: {
      prompt: 'You return a borrowed game with one piece missing. What should you check before buying an entirely different game?',
      hint: 'Match the remedy to what the owner actually needs restored.',
      answer: 'Ask whether a matching replacement piece is available and preferred. A different game may not restore the set they use, so check suitability and timing before purchasing.',
    },
    quiz: {
      question: 'You damaged a borrowed item and can afford one replacement option. Which offer is most useful?',
      options: [
        'Name the option and your limit, then check whether it meets the owner\'s needs before buying.',
        'Buy the option immediately so the apology includes a visible gesture.',
        'Promise any replacement the owner chooses and work out affordability afterward.',
      ],
      correctIndex: 0,
      explanation: 'The first makes a feasible proposal the owner can assess. Immediate purchase may miss the loss, and an unlimited promise may create another commitment you cannot keep.',
    },
    takeaway: 'Offer a remedy with a task, limits, and agreement rather than leaving the recipient to organize an unlimited promise.',
    sourceNote: 'The apology source informs practical repair. This invented property example does not establish compensation rules or certify a damaged item as safe.',
  },
  {
    id: 'people-030',
    outcome: 'Carry out an agreed repair while leaving forgiveness, contact, and reassurance under the recipient\'s control.',
    scene: 'Someone apologizes after forgetting an agreed cake collection for a sibling\'s celebration.',
    sections: [
      {
        title: 'The apology becomes a request for relief',
        paragraphs: [
          `You forgot to collect a cake for your sister's celebration, and she had to arrange another one. You apologize and agree to reimburse the extra cost. Then you ask, "Are we okay?" She says she needs time. You ask again the next morning and send another apology that evening. The repeated checks now ask her to relieve your discomfort. An apology can be sincere while its follow-up becomes pressure. Taking responsibility does not entitle you to an immediate return to warmth or a particular reply.`,
        ],
      },
      {
        title: 'Keep the repair separate from the response',
        paragraphs: [
          `You control whether you reimburse the agreed amount and change how you handle future commitments. Your sister controls whether she feels ready to talk or forgive. Do not make the reimbursement depend on hearing that everything is fine. Equally, do not assume that accepting reimbursement means the relationship is restored. These are different decisions. A useful apology leaves room for the recipient's account and pace instead of setting a deadline for closure. Silence after the apology is not an invitation to increase the number of messages.`,
        ],
      },
      {
        title: 'One practical confirmation can be enough',
        paragraphs: [
          `You reply, "I understand you need time. I will cover the extra cost as agreed and leave the conversation there." You complete the reimbursement using the arrangement already discussed. If a factual confirmation is necessary, keep it brief and do not attach "Please tell me you forgive me." A later check-in should be welcome, not assumed; if she asks for no further contact about it, respect that. The worked result is completed repair without purchasing reassurance. It does not promise renewed closeness, and a relationship decision can remain open after the practical task is finished.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two separate decisions after an apology',
        alt: 'The apologizer can complete the agreed reimbursement; the sister decides when or whether to discuss forgiveness.',
        caption: 'These fictional statements describe separate control. Completing one does not force the other.',
        items: [
          { label: 'My agreed action', detail: 'I will reimburse the extra cost as we agreed.' },
          { label: 'Her response', detail: 'I need time before discussing how I feel about this.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper or an unsent apology draft'],
      steps: [
        `Invent a small missed commitment. Write an apology and one practical repair that has been agreed in the scenario.`,
        `Underline sentences asking for forgiveness, reassurance, or renewed contact by a deadline.`,
        `Rehearse the recipient saying "I need time." Write a response that accepts this and preserves the agreed repair.`,
        `Keep only any necessary factual completion message. Work alone and leave the draft unsent; do not reopen a real dispute for practice.`,
      ],
      notice: 'The repair still happens even when the imagined recipient offers no immediate reassurance.',
      troubleshooting: 'If the final line asks whether everything is fixed now, replace it with the factual next action or omit it.',
    },
    recall: {
      prompt: 'A colleague accepts your correction of a credit error but remains distant. What can you reasonably conclude?',
      hint: 'Acceptance of a correction and restored closeness are not the same decision.',
      answer: 'The record has been corrected; their feelings or future trust are not established by that fact. Keep the agreed changes without demanding a warmer response.',
    },
    quiz: {
      question: 'After your apology, a friend asks for space while an agreed replacement is still due. What fits?',
      options: [
        'Delay the replacement until they are ready to reassure you.',
        'Complete the agreed repair with only necessary logistical contact, respecting their request for space.',
        'Send a fuller apology to make sure their request was not a misunderstanding.',
      ],
      correctIndex: 1,
      explanation: 'The second separates responsibility from reassurance. Delaying makes repair conditional, while another uninvited apology can disregard the stated request for space.',
    },
    takeaway: 'An apology offers responsibility and repair; it cannot require forgiveness or buy immediate reassurance.',
    sourceNote: 'Apology and relationship guidance inform this distinction. The example does not prescribe reconciliation or assume that every relationship should continue.',
  },
  {
    id: 'people-031',
    outcome: 'Turn a general offer into a shared understanding of task, timing, limits, and acceptance.',
    scene: 'A friend planning a move interprets an offer of help more broadly than the person making it intended.',
    sections: [
      {
        title: 'Two people hear different commitments',
        paragraphs: [
          `You offer to help a friend move on Saturday, imagining a short visit labeling boxes. Your friend assumes you will bring a car, carry furniture, and stay until the new flat is ready. The offer lacks detail, and other plans may now depend on an expectation you never intended. Clarifying before arrangements are made leaves more options than explaining the limits after the van arrives. Neither person needs to be acting unfairly.`,
        ],
      },
      {
        title: 'Specific does not mean ungenerous',
        paragraphs: [
          `State the task, when you are available, and limits that affect planning. "I can label and pack kitchen boxes from ten until noon. I do not have transport, and I cannot carry heavy furniture." That narrower offer is useful because the remaining needs are visible. Ask whether it fits rather than declaring yourself booked for a task nobody wants. There is no need to list every limitation in your life; include the ones that change how the other person can use the help you are actually offering.`,
        ],
      },
      {
        title: 'Close the gap between offer and agreement',
        paragraphs: [
          `Your friend says, "Packing before noon would help. I will arrange transport separately." You confirm, "Then I will come to pack the kitchen from ten to noon." Now both people have the same bounded commitment. If packing is already covered, the friend can decline the offer without rejecting you personally. If you later find you cannot attend, send an update while another arrangement remains possible. The worked result is not a larger contribution; it is a contribution whose task and limits are understood. Reliability begins before the task, when someone decides what they can safely plan around.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Turn help into an accepted task',
        alt: 'The helper offers kitchen packing from ten to noon without transport, and the friend confirms that specific contribution.',
        caption: 'The fictional dialogue separates an initial offer from a shared commitment. Transport remains someone else\'s unfilled task until arranged.',
        items: [
          { label: 'Helper', detail: 'I can pack kitchen boxes from ten to noon. I cannot provide transport.' },
          { label: 'Friend', detail: 'That helps. I will arrange transport separately.' },
          { label: 'Helper', detail: 'Confirmed: kitchen packing on Saturday, ten to noon.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and an ordinary calendar'],
      steps: [
        `Choose a fictional offer to help at a community sale. List three different tasks "help" could mean.`,
        `Select one task and a realistic time window. Add a limit that would affect the organizer's plan.`,
        `Write the offer and rehearse an organizer accepting or declining it. Play both roles yourself if alone.`,
        `For the accepted branch, write a final confirmation. Check that it names the same task and time, with no extra work assumed.`,
      ],
      notice: 'The organizer could assign the remaining work without guessing what your contribution includes.',
      troubleshooting: 'If your offer still says only "help out," replace it with a verb and the specific task object.',
    },
    recall: {
      prompt: 'A colleague asks you to review a document. You can check the opening today, not the whole draft. What should your offer include?',
      hint: 'Scope and timing both affect what they can rely on.',
      answer: 'State that you can review the opening by a specific time, clarify the kind of feedback, and ask whether that limited review is useful.',
    },
    quiz: {
      question: 'A friend needs help at a stall, and you can cover only the opening hour. Which offer is most usable?',
      options: [
        'I should be around in the morning if things work out.',
        'I can help, but please do not give me too much to do.',
        'I can handle the welcome desk for the opening hour; would that help?',
      ],
      correctIndex: 2,
      explanation: 'The third gives a task and time for acceptance. The other offers leave either availability or scope undefined, so the organizer cannot plan the remaining coverage.',
    },
    takeaway: 'A reliable offer names a task and time, states relevant limits, and gets accepted before it becomes a commitment.',
    sourceNote: 'Communication and boundary sources inform clear commitments. The packing scenario is a planning rehearsal, not guidance on physically moving furniture.',
  },
  {
    id: 'people-032',
    outcome: 'Keep interest separate from confirmation and align your answer time with the organizer\'s actual deadline.',
    scene: 'A group dinner needs a final headcount before one person can confirm a competing plan.',
    sections: [
      {
        title: 'Enthusiasm can be mistaken for a booking',
        paragraphs: [
          `A group is booking dinner for Saturday. You reply, "Sounds great!" You mean that you would like to come, but the organizer includes you in the headcount. You still need to check a family plan. When the restaurant requires confirmation, your uncertainty becomes the organizer's problem. Interest and commitment can sound similar in casual messages, so label the difference when someone must arrange places, money, or transport. A friendly tone cannot tell the organizer whether you have actually checked your availability.`,
        ],
      },
      {
        title: 'Two deadlines need to fit',
        paragraphs: [
          `Say, "I am interested but not confirmed. I can give a firm answer on Friday. When do you need the headcount?" The organizer needs it on Thursday evening. Your answer time is therefore too late for this booking unless they can genuinely accommodate a later addition. Do not assume that naming a decision time reserves a place until then. Ask what flexibility exists. If none does, decline the reserved place rather than giving a provisional yes that the organizer must treat as firm.`,
        ],
      },
      {
        title: 'Make the status change explicit',
        paragraphs: [
          `You reply, "I cannot confirm before your deadline, so please leave me out of the booking. If my plans clear, I can ask whether an extra place is available." The organizer can now finalize a reliable number. You have not rejected the group or promised to join later. If your availability becomes certain before the deadline instead, say "Confirmed, include me" rather than sending another enthusiastic reaction. The useful result is a visible status: interested, confirmed, or not included. Everyone should not have to infer that status from emojis, silence, or how keen your earlier message sounded.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'The answer time misses the booking deadline',
        alt: 'A guest can confirm Friday, the organizer needs a Thursday headcount, and the guest declines the reserved place.',
        caption: 'The fictional deadlines are incompatible unless the organizer offers real flexibility. Interest alone cannot reserve the place.',
        items: [
          { label: 'Guest', detail: 'Interested, but I can only confirm Friday. When is your deadline?' },
          { label: 'Organizer', detail: 'Thursday evening. The headcount must be final.' },
          { label: 'Guest', detail: 'Please leave me out of this booking. I cannot confirm in time.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper or an unsent message'],
      steps: [
        `Invent a group event with a fixed headcount deadline. Choose a later date when your availability will become clear.`,
        `Write a message distinguishing interest from confirmation and asking whether the later answer is workable.`,
        `Rehearse the organizer saying no. Write a decline of the reserved place rather than a conditional yes.`,
        `Now move your answer date earlier and write the confirmation branch. Compare the explicit status in both versions.`,
      ],
      notice: 'Both branches let the organizer determine whether to include you without interpreting your enthusiasm.',
      troubleshooting: 'If you use "probably" beside "count me in," choose which planning status you actually intend and state it.',
    },
    recall: {
      prompt: 'A colleague needs a volunteer roster today, but you will know your availability tomorrow. What should you clarify?',
      hint: 'Your uncertainty deadline may be later than the planning deadline.',
      answer: 'Explain when you can confirm and ask whether the roster allows that. If it does not, decline the slot rather than letting a tentative offer become assumed coverage.',
    },
    quiz: {
      question: 'You want to attend but cannot confirm until after a nonflexible booking deadline. What is fairest?',
      options: [
        'Decline the reserved place and ask separately about any later availability.',
        'Accept provisionally and promise to update as soon as you know.',
        'Ask the organizer to treat your enthusiasm as likely attendance.',
      ],
      correctIndex: 0,
      explanation: 'A fixed headcount requires a usable decision. A provisional yes or likely attendance still transfers unresolved uncertainty to the organizer.',
    },
    takeaway: 'Label tentative plans and make your decision time fit the deadline others must use.',
    sourceNote: 'Communication and boundary guidance inform this planning distinction. The dinner deadlines are invented examples, not assumptions about restaurant policies.',
  },
  {
    id: 'people-033',
    outcome: 'Send a useful early update that separates confirmed facts, estimates, and proposed alternatives.',
    scene: 'A delayed train threatens a promise to bring a group\'s event tickets to the meeting point.',
    sections: [
      {
        title: 'Certainty may arrive too late to help',
        paragraphs: [
          `You promised to bring the group's tickets to the theatre entrance. Your train stops with no restart estimate. Waiting until you know you will be late avoids sending an uncertain message, but your friends are already travelling to meet you. An update is useful when uncertainty affects their choices, not only when failure is certain. If they hear early, another agreed way of receiving the tickets might still be possible.`,
        ],
      },
      {
        title: 'Separate the fact from the estimate',
        paragraphs: [
          `A clear message might say, "My train is stopped and there is no restart estimate. I may miss our meeting time. I am checking whether the tickets can be transferred." The stopped train is known. Missing the meeting is a possibility. Transfer is being checked, not yet promised. Do not quietly replace the original arrival time with a new guess. If you have a credible estimate, label it as an estimate and say when you will update. False precision gives others a new certainty they should not rely on.`,
        ],
      },
      {
        title: 'Offer an alternative without silently changing the plan',
        paragraphs: [
          `In this fictional case, transfer is available. You ask one friend whether they are willing to receive the group's tickets and whether the destination details are correct. After agreement, you transfer and check receipt. The group can enter even if you arrive later. If transfer were unavailable, say that and discuss the remaining options honestly. Early notice does not remove the inconvenience or excuse the missed promise. It preserves choices while choices still exist. The alternative becomes the new arrangement only after the people relying on it know and accept what is changing.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'An update before the meeting is missed',
        alt: 'The traveler reports the stopped train, labels possible lateness, checks ticket transfer, and confirms a new arrangement only after agreement.',
        caption: 'The fictional sequence distinguishes a known delay from a possible outcome and a checked alternative.',
        items: [
          { label: 'Known', detail: 'My train is stopped; no restart estimate has been given.' },
          { label: 'Uncertain', detail: 'I may miss our meeting time.' },
          { label: 'Check and offer', detail: 'Transfer is available. Are you willing to receive the tickets?' },
          { label: 'Confirm', detail: 'Transfer sent after agreement; please confirm receipt.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and an ordinary calendar'],
      steps: [
        `Invent a promise to bring materials to a hobby session. Add a transport delay with an uncertain arrival time.`,
        `Write three lines: what is known, what may change, and when another update will come.`,
        `Add one alternative as a proposal, not a completed decision. Rehearse alone the recipient accepting or declining it.`,
        `Check that neither branch contains a guaranteed arrival or another person's participation that has not been confirmed.`,
      ],
      notice: 'The recipient can see what changed and which choices are still available without mistaking an estimate for a promise.',
      troubleshooting: 'If you wait for a perfect answer, identify one fact already relevant to their planning and send that with its uncertainty.',
    },
    recall: {
      prompt: 'A draft you promised a colleague may be delayed because one input is missing. What should an early update distinguish?',
      hint: 'Separate the missing input from your estimate and any reduced-scope proposal.',
      answer: 'State what input is missing, how it may affect delivery, and any provisional timing. Offer a partial draft only as an option for the colleague to assess.',
    },
    quiz: {
      question: 'You might miss a promised handover but do not yet know by how much. What is most useful now?',
      options: [
        'Wait until the delay can be stated precisely.',
        'Report the relevant uncertainty, known facts, and when you can update again.',
        'Give a reassuring new time so the other person has something definite.',
      ],
      correctIndex: 1,
      explanation: 'Early, qualified information preserves options. Waiting may remove them, while an unsupported definite time replaces one uncertain commitment with another.',
    },
    takeaway: 'An update is useful before certainty arrives if it helps someone protect the choices they still have.',
    sourceNote: 'Communication and reliability guidance inform this example. Ticket transfer is a fictional available option, not a claim about every booking system.',
  },
  {
    id: 'people-034',
    outcome: 'Close a finished commitment with the status information another person needs to take their next step.',
    scene: 'A borrowed key is returned by the agreed method, but its owner is still waiting for confirmation.',
    sections: [
      {
        title: 'Done for you, still uncertain for them',
        paragraphs: [
          `You return a borrowed key exactly as agreed with your neighbour. You think the task is finished and go home. Your neighbour is waiting to leave because they do not know the key has arrived. The physical action is complete, but the shared arrangement still contains an unanswered question. From their perspective, the key may be returned, delayed, or still with you. A short completion message can remove that uncertainty without asking for praise or turning the return into a long account of your afternoon.`,
        ],
      },
      {
        title: 'Report the status you can support',
        paragraphs: [
          `Say what was done and any detail needed to locate or use the result. Keep sensitive details within the agreed private channel. "The key has been returned by the method we agreed" may be enough if the location is already understood. If delivery is uncertain, do not say the owner has received it; ask them to confirm. Sending, delivering, and receiving can be different states. Which one matters depends on the arrangement and the next action someone intends to take. Match the update to that dependency rather than issuing a generic "done."`,
        ],
      },
      {
        title: 'Close only what is actually finished',
        paragraphs: [
          `Your neighbour confirms they have the key and can leave. No follow-up question remains about the return. Contrast that with "I have started heading over," which is a progress update, not completion. If you promised two items and returned only one, name the remaining item instead of letting "done" cover both. The useful result is a shared status precise enough for the other person's next decision. Completion messages are most valuable when someone is waiting on the information; they need not become constant reporting of every small action in a friendship.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Different statuses imply different next steps',
        alt: 'An on-the-way message reports progress, while a returned-and-confirmed message closes the key handover.',
        caption: 'Both messages can be truthful. Only the second establishes the completion needed in this fictional arrangement.',
        items: [
          { label: 'Progress only', detail: 'I am heading over with the key. The owner still cannot rely on having it.' },
          { label: 'Return confirmed', detail: 'Returned as agreed. Owner: I have it now, thank you.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper or a private note'],
      steps: [
        `Invent a task to send a workshop handout to a friend. Write what "finished" must mean for them to use it.`,
        `Draft an update for a file merely prepared and another for a file sent through the agreed channel.`,
        `Add a receipt check if access remains uncertain. Rehearse the friend saying the attachment did not arrive, playing both roles alone.`,
        `Revise the status honestly rather than repeating "done." Stop when the remaining uncertainty is visible.`,
      ],
      notice: 'The update distinguishes progress, sending, and confirmed access instead of collapsing them into one claim.',
      troubleshooting: 'If the message asks for appreciation, replace that request with the practical status or information still needed.',
    },
    recall: {
      prompt: 'You upload a draft to a shared folder, but a colleague is waiting for it before reviewing. What closes the loop?',
      hint: 'Uploading does not guarantee they know where it is or can open it.',
      answer: 'Notify them through the agreed channel with the location and version. If access is uncertain, check it rather than assuming upload means successful handover.',
    },
    quiz: {
      question: 'You have sent an agreed document, but delivery is unconfirmed and the recipient needs it now. Which update is most accurate?',
      options: [
        'Everything is completed; they can check whenever convenient.',
        'The document is nearly finished, to avoid overstating progress.',
        'The document has been sent through the agreed channel; can they confirm access?',
      ],
      correctIndex: 2,
      explanation: 'The third states the completed action while checking the remaining dependency. The first assumes receipt, and the second understates what is already done.',
    },
    takeaway: 'Finish the task, then close the uncertainty that another person still needs resolved.',
    sourceNote: 'Communication and relationship sources inform this handover example. It recommends useful status updates, not monitoring every action or demanding constant availability.',
  },
  {
    id: 'people-035',
    outcome: 'Promise the action you control while keeping another person\'s approval or availability explicitly uncertain.',
    scene: 'A customer asks a community print-stall helper whether the absent artist can sign a custom order.',
    sections: [
      {
        title: 'A helpful answer assigns someone else\'s time',
        paragraphs: [
          `At a community print stall, a customer asks whether the artist can sign a custom order before the weekend. The artist is not there. You want to be helpful and say, "Yes, she will do it." The customer now plans around an agreement the artist never made. You have promised both someone else's labor and an outcome you cannot verify. If she declines, she may feel pressured to rescue your promise, while the customer reasonably feels that the stall changed a confirmed arrangement.`,
        ],
      },
      {
        title: 'Separate your task from their decision',
        paragraphs: [
          `You can commit to asking the artist and reporting the answer by a time you can meet. You cannot commit to the signature until the person with authority agrees. Say, "I can ask whether a signature by Friday is possible and update you tomorrow. It is not confirmed yet." That is a useful service rather than an evasive answer. Include the uncertainty before the customer relies on it. The same distinction applies to introductions, lifts, approvals, and access to equipment that belongs to someone else.`,
        ],
      },
      {
        title: 'Report a no without passing on pressure',
        paragraphs: [
          `The artist says she cannot sign this week. You tell the customer that answer by the promised update time and ask whether an unsigned print or a later inquiry would be useful. Do not describe the customer's disappointment as a reason the artist must change her availability. You kept the promise you actually made: ask and report. If you had already guaranteed the signature, own that overstatement and correct it rather than blaming the artist for refusing an unmade commitment. The result is accurate planning information, even when the hoped-for outcome is unavailable.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A request is not a confirmed service',
        alt: 'The stall helper offers to ask about a Friday signature and report tomorrow, while making clear that the artist has not agreed.',
        caption: 'The fictional promise covers asking and reporting. The signature remains the artist\'s decision.',
        items: [
          { label: 'Customer', detail: 'Can the artist sign this before the weekend?' },
          { label: 'Helper', detail: 'I can ask about Friday and update you tomorrow. It is not confirmed yet.' },
          { label: 'Later update', detail: 'She cannot sign this week. Would an unsigned print still be useful?' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Invent a friend asking to borrow your housemate's camera. Draw columns for your action and the housemate's decision.`,
        `Place asking and reporting in your column; place lending approval and conditions in the housemate's column.`,
        `Draft an offer with a realistic update time and explicit uncertainty. Rehearse a refusal yourself without contacting anyone.`,
        `Write the update you would send. Check that it does not blame or pressure the housemate for declining.`,
      ],
      notice: 'The promise remains keepable whether the third person says yes or no.',
      troubleshooting: 'If your offer contains "they will," replace it with what you will ask or confirm unless agreement already exists.',
    },
    recall: {
      prompt: 'A colleague wants an introduction to a friend of yours. What can you promise before asking that friend?',
      hint: 'Contact details and willingness to meet remain under the friend\'s control.',
      answer: 'Offer to ask whether the friend welcomes an introduction and report back. Do not share contact details or promise a meeting before permission is given.',
    },
    quiz: {
      question: 'You want to help a customer obtain another team\'s approval, but that team has not agreed. Which commitment is honest?',
      options: [
        'Promise approval because the request looks routine.',
        'Promise to submit the request and report its status by a realistic time, without guaranteeing approval.',
        'Promise a likely approval date and revise it if the team objects.',
      ],
      correctIndex: 1,
      explanation: 'The second separates your controllable actions from another team\'s decision. Routine appearance or a likely date does not create their approval.',
    },
    takeaway: 'Promise to ask and report when the outcome depends on someone who has not agreed yet.',
    sourceNote: 'Boundary and communication guidance inform the scope of the promise. The print-stall example does not define formal commercial approval processes.',
  },
  {
    id: 'people-036',
    outcome: 'Find the needs behind competing proposals and compare options against what each person actually names.',
    scene: 'Friends choosing between a picnic and a cafe discover separate needs for quiet conversation and reliable shelter.',
    sections: [
      {
        title: 'The venue is the proposal, not the whole need',
        paragraphs: [
          `You want a picnic for a catch-up; your friend prefers a cafe. Repeating the two venue names makes the decision sound like a contest over who chooses. Ask what the cafe provides: "What matters to you about meeting there?" Your friend wants shelter if the weather changes. You explain that you suggested a picnic because conversation was difficult in the noisy cafe last time. A position is the option someone proposes. An interest is the need or concern that makes that option attractive.`,
        ],
      },
      {
        title: 'Ask about interests without claiming to uncover secrets',
        paragraphs: [
          `The relevant interests are what people tell you, not hidden motives you diagnose. Share yours as well as asking theirs; otherwise the conversation can feel like an interview designed to find weaknesses. A useful question invites context rather than accusation. "What would make the cafe work for you?" differs from "Why are you always so difficult about picnics?" The first gathers a decision criterion. It does not promise that a new option exists, and your friend can decline to explain private reasons while still stating a practical requirement.`,
        ],
      },
      {
        title: 'Compare possibilities against the named needs',
        paragraphs: [
          `You suggest checking a covered courtyard and a quieter cafe. Both might provide shelter and easier conversation, but their availability and conditions need checking. In this fictional discussion, the quiet cafe has seats and both agree it fits. You did not split the afternoon evenly between two unwanted venues; you found another proposal that addressed the stated interests. If no suitable option were available, choosing another day or making separate plans could remain reasonable. Interest-based negotiation expands what can be considered. It does not make every disagreement solvable or require either person to accept your preferred compromise.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'From venue positions to named interests',
        alt: 'One friend wants shelter, the other wants easier conversation, and they consider a quieter sheltered venue.',
        caption: 'The fictional exchange uses reasons the friends state themselves. The final venue still needs checking and agreement.',
        items: [
          { label: 'Friend', detail: 'I prefer a cafe because I want shelter if it rains.' },
          { label: 'You', detail: 'I suggested a picnic because the last cafe was too noisy to talk.' },
          { label: 'New possibility', detail: 'Could we check a quieter cafe or a covered courtyard?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper with two columns'],
      steps: [
        `Invent two plans for a family afternoon, such as a museum and a park. Write one stated need behind each.`,
        `Draft a neutral question about each proposal, then answer both yourself without adding hidden motives.`,
        `Generate two other possibilities and test each against both named needs, including any missing information.`,
        `Mark the best-fitting possibility as a proposal. Add a sentence checking agreement rather than announcing the plan for everyone.`,
      ],
      notice: 'At least one new option is compared with the stated needs, not just with who first suggested it.',
      troubleshooting: 'If the needs are simply the venue names again, ask what feature or experience each venue is meant to provide.',
    },
    recall: {
      prompt: 'A colleague wants a morning meeting while you prefer afternoon. What could you ask before bargaining over the hour?',
      hint: 'Find out what each timing protects or enables.',
      answer: 'Ask what matters about the morning slot and explain your afternoon reason. Focus time, attendance, or a deadline may suggest options beyond splitting the difference.',
    },
    quiz: {
      question: 'Two housemates propose different dinner times. Which question most directly explores the interests behind the proposals?',
      options: [
        'What does that time make easier for you, and what would another time disrupt?',
        'Would taking turns choosing the time be the fairest solution?',
        'Could we choose the midpoint between our preferred times?',
      ],
      correctIndex: 0,
      explanation: 'The first asks what the proposals provide. Alternating or using a midpoint are possible arrangements, but neither reveals whether the timing meets the actual needs.',
    },
    takeaway: 'Ask what a proposal provides before treating the proposal itself as the only negotiable choice.',
    sourceNote: 'Harvard\'s principled negotiation distinguishes interests from positions. This original dialogue offers no guaranteed agreement.',
  },
  {
    id: 'people-037',
    outcome: 'Compare complete task-and-time arrangements without hiding effort or treating silence as agreement.',
    scene: 'Two volunteers divide sorting, labeling, display setup, and packing away for a community book swap.',
    sections: [
      {
        title: 'Single tasks hide linked preferences',
        paragraphs: [
          `Rhea and Sam are preparing an afternoon book swap. Four jobs remain: sorting, category labels, display setup, and packing away. Rhea is available before lunch and enjoys sorting. Sam arrives after lunch and prefers display work. Deciding each job separately misses those linked preferences. A package presents several choices as one complete arrangement, so each person can see what accepting one part means for their other tasks and available time.`,
        ],
      },
      {
        title: 'Put complete alternatives beside one another',
        paragraphs: [
          `Package A gives Rhea sorting and labeling before lunch; Sam arranges the display after lunch and packs away after the event. Package B gives Rhea display setup and labeling before lunch; Sam sorts after lunch and packs away. Both cover the same four jobs. A seems to fit their stated preferences better, but two jobs each does not prove equal effort. Sorting a large donation could take far longer than arranging the display. Ask about workload, timing, and any preparation hidden inside a task before calling the package fair.`,
        ],
      },
      {
        title: 'Preferences create options, not assignments',
        paragraphs: [
          `They discuss the size of the donation and whether sorting before lunch is realistic. Rhea accepts package A only after they reduce the number of books displayed this time; Sam confirms the later tasks fit. That adjustment is part of the agreement, not a silent extra burden. Neither volunteer's reluctance to argue counts as approval. Trading different preferences can make an arrangement work better without splitting every job identically, but everyone must be able to compare and reject it. If the total work remains too much, recruit help with permission or reduce scope rather than assigning leftovers to the quietest person.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: 'Two packages, the same four jobs',
        alt: 'Rows compare packages A and B; columns show Rhea\'s before-lunch tasks and Sam\'s later tasks.',
        caption: 'Rows are packages; columns are people. Counts match, but effort is unmeasured and needs discussion.',
        items: [
          { label: 'A / Rhea', detail: 'Before lunch: sort books and add category labels.' },
          { label: 'A / Sam', detail: 'After lunch: arrange the display. After the event: pack away.' },
          { label: 'B / Rhea', detail: 'Before lunch: arrange the display and add category labels.' },
          { label: 'B / Sam', detail: 'After lunch: sort books. After the event: pack away.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper divided into a four-cell grid'],
      steps: [
        `Invent two housemates sharing shopping, cooking, washing up, and putting groceries away. Give each one timing constraint and one preference.`,
        `Make two complete packages, using rows for packages and columns for people. Include every task in each package.`,
        `Check the total effort, not just task count. Rehearse each person's objections yourself if working alone.`,
        `Revise one package around an objection and write a question asking whether both accept the full revised arrangement.`,
      ],
      notice: 'Both alternatives cover the same work, and an objection changes the proposal rather than becoming an unwanted assignment.',
      troubleshooting: 'If one package hides shopping, travel, or cleanup, add that work before comparing how fair the options seem.',
    },
    recall: {
      prompt: 'Two colleagues divide a workshop. One likes preparing materials; the other prefers presenting. What should a fair package make visible?',
      hint: 'Include preparation, delivery, and follow-up rather than comparing only time on stage.',
      answer: 'Show the whole set of tasks, timing, and workload for each person. Their preferences can inform a trade, but both must agree to the full burden.',
    },
    quiz: {
      question: 'Two volunteers each receive two tasks, but one package includes all the travel and cleanup. What should happen before agreement?',
      options: [
        'Accept it because the task counts match.',
        'Rotate packages next time so the larger burden will even out later.',
        'Compare the hidden effort and revise the full package with both volunteers.',
      ],
      correctIndex: 2,
      explanation: 'Effort matters beyond task count. Equal counts and an unspecified future rotation do not establish an acceptable current burden for both people.',
    },
    takeaway: 'Compare the whole arrangement, including hidden work, and let each person accept or reject it.',
    sourceNote: 'Harvard\'s value-creation guidance informs these original packages. Matching task counts does not establish fairness.',
  },
  {
    id: 'people-038',
    outcome: 'Discuss a checkable cost-sharing standard before selecting the outcome it would justify.',
    scene: 'Two friends compare equal and room-adjusted shares for a hypothetical holiday rental with different rooms.',
    sections: [
      {
        title: 'Fair can mean several different rules',
        paragraphs: [
          `Two friends are considering a rental costing a hypothetical $180 per night. Each would use one bedroom. One room is larger and has a private bathroom; the other is smaller and uses a shared bathroom. An equal split would be $90 each. A room-adjusted split might be $100 and $80. Neither follows automatically from the word fair. If someone chooses the larger room first and only then argues for equal shares, their proposed rule also protects a result they already prefer.`,
        ],
      },
      {
        title: 'Choose a relevant standard before assigning rooms',
        paragraphs: [
          `Discuss what the split should reflect while both choices remain open. Equal access to the whole rental, private room amenities, or an agreed budget limit are different considerations. Checkable information, such as the room descriptions and total price, can anchor the discussion. It cannot decide every value judgement. Floor area does not capture noise, privacy, or individual affordability by itself. An objective criterion means a basis that can be examined independently of who argues most forcefully; it is not a machine that produces one morally correct price.`,
        ],
      },
      {
        title: 'Test the rule against either room assignment',
        paragraphs: [
          `They agree that the private bathroom warrants some premium, discuss the amount, and both accept $100 for that room and $80 for the other before choosing. The amounts still total $180. Ask whether the rule would remain acceptable if room assignments changed; that can expose a standard chosen only for personal advantage. Either friend can reject the rental if the resulting options do not fit. These numbers are a worked proposal, not a market valuation. The useful outcome is an explicit basis and informed agreement, rather than a preferred result presented as the only possible definition of fairness.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two proposed splits of the same total',
        alt: 'An equal split is 90 dollars each; a negotiated room premium makes the shares 100 dollars and 80 dollars, both totaling 180.',
        caption: 'Hypothetical per-night proposals. The premium is negotiated in the story, not calculated from a valuation formula.',
        items: [
          { label: 'Equal shares', detail: '$90 + $90 = $180. Treat both people as sharing the rental equally.' },
          { label: 'Agreed room premium', detail: '$100 + $80 = $180. Reflect the private bathroom through a discussed premium.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Optional calculator'],
      steps: [
        `Use a fictional $120 shared purchase with unequal usage. Write two possible standards, such as equal access and expected use.`,
        `Create one proposed split for each standard. Check that both sets of shares total $120.`,
        `List one consideration each standard leaves out. Rehearse both participants alone, swapping which share each would pay.`,
        `Write a question asking whether the standard fits before anyone commits to the purchase or a share.`,
      ],
      notice: 'Both arithmetic totals work, yet the discussion still has to justify which standard fits the situation.',
      troubleshooting: 'If a rule seems fair only when it lowers your share, test it after swapping roles and explain the difference.',
    },
    recall: {
      prompt: 'A group shares a hired studio, but some members use it longer. What should they discuss before setting individual charges?',
      hint: 'Equal membership and time used are different possible standards.',
      answer: 'Agree which costs are shared equally and whether usage should affect any part. Check reservations and total costs, then discuss what the rule misses before assigning amounts.',
    },
    quiz: {
      question: 'Two people disagree about a shared cost. Which process best avoids selecting a rule only to defend a preferred share?',
      options: [
        'Discuss checkable criteria and their limits before assigning the preferred shares.',
        'Choose shares first, then find a plausible standard that matches them.',
        'Split equally because that removes every judgement about fairness.',
      ],
      correctIndex: 0,
      explanation: 'The first examines a basis before it serves an outcome. Equal splitting is itself a choice of standard, not an escape from deciding what fairness should mean here.',
    },
    takeaway: 'Agree what the rule should reflect before using it to justify who gets or pays what.',
    sourceNote: 'Principled negotiation informs the criteria. Prices are invented arithmetic examples, not valuations or universal cost-sharing advice.',
  },
  {
    id: 'people-039',
    outcome: 'Compare a proposed agreement with a realistic fallback without inventing leverage or threatening the relationship.',
    scene: 'A concertgoer compares a friend\'s late lift with a train that reaches the venue before the performance.',
    sections: [
      {
        title: 'A fallback changes the decision',
        paragraphs: [
          `A friend offers a concert lift arriving at 7:10, after the 7:00 start. You want to catch the opening. In this fictional schedule, an $8 train arrives at the station at 6:35, followed by a ten-minute walk: venue arrival 6:45. That option lets you compare the lift with another way of attending, rather than with missing the event altogether. It also lets your friend keep their work schedule instead of leaving earlier for you.`,
        ],
      },
      {
        title: 'BATNA names the best available fallback',
        paragraphs: [
          `BATNA means best alternative to a negotiated agreement: what you would do if this particular agreement does not happen. It is not simply the option you wish existed. Check availability, total cost, timing, and any access needs. The train is useful only if the service, ticket, and route actually work for you; these invented times are not a timetable to use. If another feasible alternative is better, that becomes the relevant comparison. Declining an offer can be reasonable without declaring the offer unfair or the person unhelpful.`,
        ],
      },
      {
        title: 'Use the alternative without turning it into a threat',
        paragraphs: [
          `You say, "Thanks for offering. I want to catch the opening, so I will take the train and meet you there." Your friend keeps their work schedule, and you choose the verified fallback in the story. You do not invent a second driver or suggest that a real friend would change plans. A fallback supports your decision; it is not permission to manipulate someone else's. If the train is unavailable, acknowledge that your alternative has changed and reassess. A bluff can produce apparent agreement while leaving both people relying on information that was never true.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Compare arrivals, not pressure',
        alt: 'The lift arrives at 7:10; the hypothetical train and walk arrive at 6:45 for a 7:00 performance.',
        caption: 'The times and $8 fare are invented. The train comparison includes the ten-minute walk, not merely the station arrival.',
        items: [
          { label: 'Proposed lift', detail: 'Venue arrival 7:10. Misses the start of the 7:00 performance.' },
          { label: 'Checked fallback in story', detail: '$8 train: station 6:35 + 10-minute walk = venue 6:45.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'A public timetable or a fictional schedule'],
      steps: [
        `Choose a low-stakes outing and write a proposed shared travel plan. Use invented details if no real outing is planned.`,
        `Identify a fallback and record its full cost and door-to-door timing, including any walk or connection.`,
        `Compare whether each option meets the outing's needs. Mark unverified details rather than treating them as available.`,
        `Draft a courteous acceptance or decline based on the comparison. Rehearse alone without inventing another offer or demanding a personal sacrifice.`,
      ],
      notice: 'Your decision rests on a feasible alternative with explicit limits, not on a threat meant to change the other person.',
      troubleshooting: 'If the fallback depends on an unconfirmed favor, treat it as uncertain and check another option before relying on it.',
    },
    recall: {
      prompt: 'A borrowed projector is unavailable for your club night. How could a fallback help without pressuring the owner?',
      hint: 'Consider what you can genuinely do without that loan.',
      answer: 'Check a different available setup, rental, or revised activity and compare its costs and limits. Do not invent another offer or demand the owner change their plans.',
    },
    quiz: {
      question: 'Your preferred fallback depends on a friend who has not replied. How should it affect the current negotiation?',
      options: [
        'Treat it as available because the friend usually helps.',
        'Keep it uncertain and verify a feasible alternative before relying on it.',
        'Compare its expected cost now and confirm availability after declining the current offer.',
      ],
      correctIndex: 1,
      explanation: 'Past helpfulness does not establish availability. Comparing costs while postponing that check can leave you without either the current offer or a feasible fallback.',
    },
    takeaway: 'A real fallback helps you choose; a bluff merely asks someone else to react to invented circumstances.',
    sourceNote: 'Harvard\'s BATNA guidance informs the comparison. The transport details are hypothetical, and a fallback is not presented as a threat or a guarantee.',
  },
  {
    id: 'people-040',
    outcome: 'Define a trial\'s tasks, review, endpoint, and fallback before beginning.',
    scene: 'Two housemates try shared dinners on two weekdays and plan how to review the workload after two weeks.',
    sections: [
      {
        title: 'Try it needs an ending',
        paragraphs: [
          `Jo and Lee agree to try shared dinners, but Jo imagines alternating every evening and Lee expects two meals a week. They specify the trial before starting: for two weeks, Jo cooks Mondays and Lee cooks Wednesdays. The cook buys ingredients; the other clears up. Other evenings remain separate. Now the plan names tasks and timing, rather than a friendly intention each can interpret differently. It still needs an ending and a review.`,
        ],
      },
      {
        title: 'Choose what the review will examine',
        paragraphs: [
          `They arrange to review on the Sunday after the second Wednesday. Each will note whether dinner fitted their schedule, whether shopping and cleanup felt manageable, and any cost concern to discuss. Those observations connect the review to the needs the arrangement was meant to serve. A trial is not a test one person passes by never objecting. They also agree that it ends after the two weeks unless both explicitly extend or replace it. If no new agreement is reached, each arranges their own meals rather than assuming silent continuation.`,
        ],
      },
      {
        title: 'Change the plan through another agreement',
        paragraphs: [
          `At the review, Jo says Monday shopping made dinner too late. Lee enjoyed sharing meals but found Wednesday cleanup rushed. They consider buying ingredients earlier and changing the second evening. Neither alteration becomes effective just because one person suggests it. They check whether the revised responsibilities fit both schedules and agree on another limited trial, or return to separate meals. The useful outcome is a decision informed by the experience, including a legitimate option to stop. Reviewability prevents a temporary yes from becoming a permanent obligation by accident; it does not guarantee that the arrangement will suit both people.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A dinner trial with a defined end',
        alt: 'Two housemates agree a two-week dinner trial, review the workload, and continue only by mutual agreement.',
        caption: 'A fictional two-week trial, not an optimal duration. Silence does not extend it.',
        items: [
          { label: 'Agree tasks', detail: 'Jo: Mondays. Lee: Wednesdays. Cook shops; the other clears. Two weeks only.' },
          { label: 'Notice the fit', detail: 'Record timing, shopping, cleanup, and cost concerns.' },
          { label: 'Review', detail: 'Sunday after the second Wednesday: what worked, and what needs changing?' },
          { label: 'Choose explicitly', detail: 'Both agree an extension or revision; otherwise each arranges their own meals.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper and a calendar'],
      steps: [
        `Invent a temporary arrangement for sharing a hobby workspace. Write who does what and when the trial starts and ends.`,
        `Choose two observable things to review, such as access clashes and cleanup left unfinished.`,
        `Add a review date and an agreed fallback if no extension is accepted. Keep the trial safe to stop.`,
        `Rehearse the review alone using one fictional success and one problem. Draft a revision that still requires both people's agreement.`,
      ],
      notice: 'The trial has a visible endpoint, review evidence, and a clear next state without treating silence as consent.',
      troubleshooting: 'If stopping leaves an essential task uncovered, agree how that task will be handled before beginning the trial.',
    },
    recall: {
      prompt: 'A group tries rotating meeting facilitation without defining its duration. What should they clarify before making it permanent?',
      hint: 'Specify responsibilities, a review, and the default if no extension is agreed.',
      answer: 'Agree how long the rotation runs, what participants will review, and who handles facilitation afterward if there is no new agreement. Ask everyone affected rather than inferring consent from silence.',
    },
    quiz: {
      question: 'A trial ends, and one participant has not agreed to an extension. What best respects the trial\'s terms?',
      options: [
        'Continue because no explicit objection was received.',
        'Extend for one more cycle to collect more experience before asking again.',
        'Use the agreed end-of-trial fallback and seek explicit agreement for any new arrangement.',
      ],
      correctIndex: 2,
      explanation: 'More observations do not authorize an extension, and silence is not consent. Use the agreed fallback until everyone accepts a new arrangement.',
    },
    takeaway: 'Agree the trial, review evidence, endpoint, and change process before a temporary arrangement starts.',
    sourceNote: 'Value-creation and communication guidance inform this original dinner trial. Its duration is illustrative, not experimentally established.',
  },
]