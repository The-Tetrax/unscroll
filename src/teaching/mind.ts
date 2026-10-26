import type { LessonGuide } from './types'

export const mindGuides: LessonGuide[] = [
  {
    id: 'mind-001',
    title: 'Leave yourself a starting point before a break',
    outcome: 'Write a three-line note before you step away from a task, so that when you come back you pick up the thread instead of starting the thinking again from nothing.',
    scene: 'Pausing a grocery list before checking the cupboard for tomatoes',
    sections: [
      {
        title: 'The list is open, but the decision is missing',
        paragraphs: [
          'You are writing a grocery list for tomorrow. Pasta is on it. Onions are on it. You are halfway through deciding whether to add tinned tomatoes when a friend calls and you take it. Twenty minutes later you come back to the list, and something odd happens. The words are all still there. Pasta, onions. But you cannot remember whether you actually went and looked in the cupboard for tomatoes, or only thought about looking. So you read the recipe again, and you start the same small decision over from the beginning.',
          'Nothing was deleted from the screen. What vanished was your place inside the reasoning: which things you had already settled, which thing you were still unsure about, and what you were about to go and do about it. The list stored the answers you had reached. It never stored the question you were in the middle of.',
        ],
      },
      {
        title: 'Write the state, not the whole history',
        paragraphs: [
          'A bookmark does not copy out the chapter you just read. It marks the page, so you can open the book and go on. A restart note is a bookmark for a train of thought. It records the state you were in, not the story of how you got there, and it is addressed to the person who matters most and remembers least: you, after the break.',
          'There is a body of research on what happens to attention when people switch tasks, including the finding that thoughts about the previous task tend to linger into the next one; that lingering is called attention residue. Losing your place when you return is a cousin of that problem, not the same thing. The note does not claim to erase the cost of being interrupted. Interruptions cost something whatever you do. What the note does is far more modest and far more reliable: it keeps the context from evaporating while you are gone.',
        ],
      },
      {
        title: 'A completed note for the grocery list',
        paragraphs: [
          'Here is the whole note. Done: pasta and onions are on the list. Still deciding: do we need tomatoes for the sauce? First action: check the lower cupboard shelf for an unopened tin, then add tomatoes if there is none. Three lines, under thirty words, written in the fifteen seconds between the phone ringing and answering it.',
          'Each line does one job. The first stops you re-deciding things already decided. The second keeps the uncertainty honest instead of letting it blur into a vague sense that the list is nearly done. The third hands you a physical action, so you return by walking to the cupboard rather than by staring at the screen trying to remember. Compare it with the note most people would write: finish shopping list. Both name the task. Only one tells you what to do in the first ten seconds back. Leave the note next to the list, and when you return, do the first action before you reconsider anything. If your plans changed during the break, update the note. It is a bookmark, not an order.',
        ],
      },
      {
        title: 'When the note earns its keep',
        paragraphs: [
          'The note matters most when the task has an open question in it. If you were simply typing a list you already knew, there is nothing to save; you would just carry on. It is the half-made decision that evaporates, and the half-made decision is exactly what feels too small to write down.',
          'Two cautions. Write the note before you leave, not after you return; the moment of leaving is when the context is still in your head, and it is the one moment that feels too rushed to spend on it. And keep the third line concrete: a verb, an object, and where to find it. Check the lower shelf for a tin is a first action. Think about tomatoes is the problem you were trying to avoid.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Where the grocery decision resumes',
        alt: 'Pasta and onions are settled, tomatoes remain uncertain, and checking the lower shelf is the next action.',
        caption: 'Read the three boxes left to right as the three lines of the note: settled, uncertain, next action. Notice that the last box is something you do with your hands and eyes, not an instruction to concentrate harder. That is what makes it a place to start.',
        items: [
          { label: 'Pasta and onions', detail: 'Already on the list; leave this choice alone.' },
          { label: 'Tomatoes?', detail: 'Cupboard stock has not been checked.' },
          { label: 'Lower shelf', detail: 'Look for an unopened tin before adding tomatoes.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A safely paused personal task', 'Paper or a private note'],
      steps: [
        'Pick a list, a draft, or a hobby task you could walk away from without harm. Not cooking, not anything with a hob or a blade; this exercise is about attention, and it should cost nothing if it goes wrong.',
        'Before you pause, write three short lines: one thing that is settled, one question still open, and one physical or on-screen action that would move the question forward. Keep the whole note under thirty words so it is quicker to write than to skip.',
        'Leave the note with the task and take your normal break. You do not need to manufacture an interruption; ordinary life will supply one.',
        'When you come back, read the note and do only its first action before you think about anything else. Then look at the wording: if any line made you guess what you meant, rewrite it now while you know.',
      ],
      notice: 'You started with a specific check instead of rebuilding every earlier decision in your head. The note held your place; you did not have to.',
      troubleshooting: 'If your first action says continue, finish, or keep going, it is not an action yet. Replace it with a verb, an object, and a location: check the lower shelf for a tin. The more boring and physical it sounds, the better it works.',
    },
    recall: {
      prompt: 'You are choosing a backpack online and have to stop. You have confirmed the size you want, but you still do not know whether your lunchbox will fit inside. What restart line would help?',
      hint: 'Name the question that is still open and the first comparison that would answer it.',
      answer: 'Something like: size settled at 20 litres; still unsure whether the lunchbox fits; first action: measure the lunchbox and compare it with the internal dimensions of the two shortlisted bags. The first part stops you re-reading every bag listing. The second keeps the real uncertainty in view. The third sends you to a tape measure rather than back to the browser, which is where the decision actually gets made. Without the note, you return, forget which size you picked, and the whole comparison starts again.',
    },
    quiz: {
      question: 'A jigsaw session stops with one corner unfinished. Which note offers the clearest restart?',
      options: ['The puzzle is nearly finished; continue the corner.', 'Several blue pieces were difficult to place.', 'Blue corner unresolved; compare the two straight-edged pieces beside the box.'],
      correctIndex: 2,
      explanation: 'The third note names what is open and hands you a specific pair of pieces to pick up, so you resume with your hands rather than your memory. The first is a progress report with continue in it, which tells you nothing about where to start. The second describes how it felt, which is honest and useless as a bookmark.',
    },
    takeaway: 'Before you step away, write what is settled, what is open, and the first physical action; it takes fifteen seconds and it saves the decision you were in the middle of.',
    sourceNote: 'Leroy provides background on task switching. This original grocery example and note format were not tested in that study.',
  },
  {
    id: 'mind-002',
    title: 'Batch by the rule you are using',
    outcome: 'Group small tasks by the kind of thinking each one needs, not by the app or the pile they happen to share, so your brain can stay in one mode for a stretch.',
    scene: 'Checking addresses and composing messages for three birthday cards',
    sections: [
      {
        title: 'One pile of cards, two kinds of work',
        paragraphs: [
          'Three birthday cards sit on the table. Each needs its address checked against your contacts and a personal message written inside. You do what feels natural: pick up the first card, check its address, write its message, pick up the second card, check, write, and so on. Same table, same pen, same stack. And somehow it feels like starting over every ninety seconds.',
          'It feels that way because it is. Checking an address means holding a postcode in your head and matching it character by character against a record. Writing a message means thinking about a particular person and finding something warm and true to say. Those are different mental jobs, and every time you put down one and pick up the other, there is a small cost to changing gear. The envelope is not the useful unit here. The operation is.',
        ],
      },
      {
        title: 'Switching means selecting a new rule',
        paragraphs: [
          'A cook preparing a meal does not chop one onion, fry it, chop one carrot, fry it. They chop everything first, then fry. Partly that is about the pan. Mostly it is because chopping and frying need different attention, different tools in hand, different things to watch, and alternating between them means constantly re-setting both.',
          'Psychologists who study task switching compare what happens when people repeat the same kind of task with what happens when they change kinds. Each kind of task has a rule: what information to attend to and what response to give. Repeating keeps the rule loaded. Changing means unloading one rule and loading another, and that reloading is where the friction lives. Sharing a desk, a pen, or an app does not make two operations the same operation; the rule is what counts. For work with no urgent deadline, batching keeps one rule active across several items. It does not remove the need to think; the third address can still be tricky. And anything urgent, or anything that genuinely depends on something else being done first, follows its own order regardless.',
        ],
      },
      {
        title: 'Count changes, not imagined minutes saved',
        paragraphs: [
          'Write the two orders down. Check, write, check, write, check, write: every step changes rule, five changes across six operations. Check, check, check, write, write, write: one change, in the middle. Those two numbers describe the shape of the work. They are not a measurement of time saved, and they are not an effect size from a study. They just make the difference visible.',
          'So try the second order. Check all three addresses first, ticking each envelope as you confirm it. Then write all three messages. One practical wrinkle: keep each card with its envelope throughout, because the one thing worse than switching rules is matching the wrong message to the right address at the end. And if one card has to go in the post this afternoon, do that whole card first. A tidy batch is a convenience; the birthday is the point.',
        ],
      },
      {
        title: 'When batching is the wrong move',
        paragraphs: [
          'Batching has limits, and knowing them matters as much as knowing the trick. If the tasks depend on each other, the message you write changes what you need to check, say, then they have an order of their own. If one item is urgent, it jumps the batch. And if a batch grows large enough that you lose track of which items are done, you have traded a switching cost for a confusion cost.',
          'Two habits. When several small tasks share a surface, an inbox, a table, a window, ask what you are actually doing to each one, and write that verb down; the verbs are the real groups. And keep batches small enough to see at a glance, with a plain mark on each finished item, so the arrangement helps you rather than becoming one more thing to manage.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Rule changes across six operations',
        alt: 'Alternating address checks and messages has five rule changes; grouping the checks then messages has one.',
        caption: 'Read the bars as a count of gear changes, nothing more. Same six operations, same three cards; one order asks you to change what you are doing five times and the other asks once. Bar length is not time, effort, or productivity.',
        unit: 'rule changes',
        items: [
          { label: 'Check, write, repeat', detail: 'Change after each operation.', value: 5 },
          { label: 'Checks, then messages', detail: 'Change once between the groups.', value: 1 },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['A short nonurgent task list', 'A pen'],
      steps: [
        'Pick four to six small tasks with no deadline today and no dependency forcing their order. If something is urgent, do it first and leave it out of this exercise.',
        'Beside each task write the operation as a single precise verb: compare, calculate, compose, look up. The verb is the rule your brain has to load, and two tasks with the same verb belong together even if they live in different apps.',
        'Rearrange so matching verbs sit together, but keep every item labelled with its object or recipient so nothing gets mixed up in the new order.',
        'Work through one group and notice where a different rule still crept in. That tells you whether your verbs were honest or whether one task was secretly two.',
      ],
      notice: 'Your new order repeats one kind of thinking for a stretch instead of merely keeping one window open. The onions all got chopped before anything hit the pan.',
      troubleshooting: 'If the batch makes you lose track of what is done, it has grown too big. Cut it in half and add a visible tick or cross to each item; a batch you cannot see at a glance has stopped helping.',
    },
    recall: {
      prompt: 'Your inbox has receipts whose totals you need to check and invitations that need thoughtful replies. How would you batch them?',
      hint: 'They are all email. What are you actually doing to each one?',
      answer: 'Ignore the fact that they share an inbox and look at the verbs. Checking a receipt total is arithmetic and matching: hold a number, compare it with another. Replying to an invitation is composing: think about a person, decide what you want, find the words. Two different rules, so two batches: all the receipt checks together, then all the replies, subject to any reply that genuinely has to go today. The inbox is the table the cards were sitting on. It tells you where the work is, not what kind of work it is.',
    },
    quiz: {
      question: 'You are sorting photos and writing captions. Which batch repeats the same rule?',
      options: ['Choose the sharper photo from each pair before drafting any captions.', 'Finish a selection and a caption for each photo in turn.', 'Keep everything in the same editing window while alternating tasks.'],
      correctIndex: 0,
      explanation: 'Judging sharpness pair after pair keeps one comparison rule loaded; captioning is composing, a different rule, and it waits its turn. Doing each photo start to finish alternates rules every time, which may be right when a caption depends on the choice but does not minimise switching. One window is the shared table: same surface, same five gear changes.',
    },
    takeaway: 'Group tasks by the verb, not the venue; when nothing is urgent or dependent, do all of one kind of thinking before you start the next.',
    sourceNote: 'Task-switching research supports the distinction between rules. The card sequence illustrates that distinction, not a tested workflow benefit.',
  },
  {
    id: 'mind-003',
    title: 'Stop optional alerts before they arrive',
    outcome: 'Understand why ignoring a notification is not the same as never receiving it, and how to silence only the optional ones without cutting off anything that matters.',
    scene: 'Reading a mystery chapter while a group chat vibrates on the table',
    sections: [
      {
        title: 'You never picked up the phone',
        paragraphs: [
          'You are deep in a mystery novel. The detective is three sentences into explaining who did it. Your phone, face down on the table, buzzes once. You do not touch it. You are proud of not touching it. Then you notice you have read the same line twice, because somewhere under the words you are wondering whether that buzz was about tonight\'s plans.',
          'You did not reply. You did not even look. By the usual way of counting, you were not interrupted at all, since you never opened another app. But something was interrupted. The buzz handed you a new thing to notice, interpret, and decide not to act on, and all three of those happened while the detective was talking. The interruption was not the reply you did not send. It was the arrival.',
        ],
      },
      {
        title: 'Delivery and response are separate decisions',
        paragraphs: [
          'Imagine someone knocking on your door every few minutes while you are trying to read. You can resolve not to answer, and you can keep that resolution, and you will still hear every knock and wonder every time who it is. The only way to read in peace is for the knocking to stop. Not answering and not being knocked on are different things, and only one of them is restful.',
          'A laboratory study of attention found exactly this: notifications hurt performance on a demanding task even when participants never touched the phone. That finding does not give you a fixed cost per buzz, and it does not say every reader loses the same amount. What it does establish is that responding is not required for an alert to take something from you. So there are two separate controls, not one. Whether the alert reaches you at all, which is a settings question. And when you choose to engage with it, which is a willpower question. Face down hides the screen and leaves the knock. Muting the conversation stops the knock. Checking at the end of the chapter decides when you open the door.',
        ],
      },
      {
        title: 'Keep the needed exception',
        paragraphs: [
          'The honest complication is that not every knock is optional. Say your sibling is due to call about picking up the car, and the book-club chat is the thing buzzing. Before you open the book, mute the chat using controls you understand, and leave your sibling\'s calls fully audible. At the end of the chapter, open the chat on purpose and read everything that arrived. You have postponed one optional channel for forty minutes. You have not declared the people in it unimportant.',
          'If your phone cannot separate those two channels cleanly, do not improvise with blunt settings. Choose a smaller change, or read at a time when the call is not expected. And never, for this exercise, silence anything to do with work you are responsible for, someone you care for, or safety. The question to ask of any setup is simple: does it let the optional messages wait without breaking a real obligation? If it does both, it is right. If it breaks the obligation, it is wrong however peaceful it feels.',
        ],
      },
      {
        title: 'Why willpower is the wrong tool',
        paragraphs: [
          'People reach for willpower because it feels virtuous and costs nothing to set up. But every buzz you successfully ignore has still been noticed and processed, and the ignoring itself takes effort you were saving for the book. You can win every round and still lose the chapter. Settings are less heroic and more effective, because they decide the matter once, in advance, when you are calm.',
          'Two habits. When something keeps pulling at you, ask whether you are controlling delivery or controlling your response, and move the control upstream if you can. And when you mute, mute narrowly: one conversation, one app, for one session, with everything required left exactly as it was. The goal is a quiet room with the door still working.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two face-down phones, different delivery',
        alt: 'A face-down phone still vibrates for the chat; a phone with that chat muted leaves the expected call available.',
        caption: 'Both phones are face down, so the screen tells you nothing; look at what still arrives. The left one keeps knocking. The right one has one conversation quiet and the expected call untouched. Compare deliveries, not resolve. Schematic settings, not instructions for any particular phone.',
        items: [
          { label: 'Display hidden', detail: 'The chat buzz still arrives during the chapter.' },
          { label: 'Optional chat muted', detail: 'Chat waits; the expected pickup call remains available.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Your phone', 'A short personal reading task'],
      steps: [
        'Name one app or one conversation that regularly buzzes while you read and that could honestly wait half an hour. One, not a general purge; the exercise is about precision.',
        'Before touching any setting, list what must stay audible: a call you are expecting, anything for work or care. If you are unsure what a setting does, leave it alone. A wrong mute is worse than a buzz.',
        'Mute only the one optional source, then read a short passage. If something still interrupts you, just notice it; this is observation, not a test of character.',
        'At a natural stopping point, open the muted source deliberately and read what arrived. If this was a trial, restore the setting; if it worked, consider keeping it for reading sessions.',
      ],
      notice: 'During the passage, the optional source never asked you to decide anything, because there was nothing to decide. The knocking stopped, and the door still worked for everyone who needed it.',
      troubleshooting: 'If alerts from the muted source still arrive, look at that source\'s own sound and vibration controls rather than reaching for a phone-wide silence. The fix is narrow or it is not the fix.',
    },
    recall: {
      prompt: 'You are comparing travel dates across two tabs and keep losing your place, even though you never click the shopping banners that pop up. What could you change?',
      hint: 'Change what reaches you, not how well you resist it.',
      answer: 'Those banners are knocks on the door. You are not answering, and you are still hearing every one, and each time you have to notice it, classify it as ignorable, and find the dates again. Pause the shopping app\'s notifications for the length of the comparison, and leave your travel apps and personal contacts exactly as they are, since a message from the person you are travelling with is the one thing you do want. Resisting a banner happens after it has already reached you and already cost you the dates. Stopping it from arriving costs nothing during the comparison and is decided once, in advance.',
    },
    quiz: {
      question: 'A music app alerts you during study, but you never open it. Which conclusion fits?',
      options: ['The interruption cost must equal the time it would have taken to respond.', 'An alert can affect attention even without an app switch.', 'Leaving the screen dark prevents every kind of notification interruption.'],
      correctIndex: 1,
      explanation: 'The knock reached you and you processed it, whether or not you answered; the laboratory finding is precisely that unanswered notifications still hurt performance. The cost is not the reply time, because no reply happened and something was still lost. A dark screen hides the light and leaves the sound and vibration knocking exactly as before.',
    },
    takeaway: 'Decide upstream, once and narrowly, which optional sources may reach you while you read; resisting a buzz is work, and not receiving it is rest.',
    sourceNote: 'The linked notification experiment used a laboratory attention task. The reading arrangement is an original application, not a guaranteed improvement.',
  },
  {
    id: 'mind-004',
    title: 'Return from a break with a named check',
    outcome: 'Use a natural pause in repetitive checking to say out loud what you are checking for, so you come back doing the task instead of just looking at the page.',
    scene: 'Checking dates in a neighborhood newsletter before moving to its next page',
    sections: [
      {
        title: 'Reading the page stops being checking',
        paragraphs: [
          'The neighbourhood newsletter lists a dozen upcoming events. Your job is to make sure each printed date matches the organiser\'s schedule. For the first few you are careful: eyes to the newsletter, eyes to the schedule, back again. Somewhere around the seventh event the entries start to feel familiar. Your eyes keep moving down the page, the words keep going in, and you reach the bottom. Then someone asks which dates you confirmed, and you realise you cannot say.',
          'You read every line. You stopped checking at some point you cannot locate. This is the particular failure of repetitive work with a clear criterion: the criterion fades while the motion continues. Reading each entry and checking each date against a record look identical from the outside. They feel almost identical from the inside. That is exactly why the second quietly turns into the first.',
        ],
      },
      {
        title: 'A pause can include reorientation',
        paragraphs: [
          'A lifeguard scanning a pool does not stare continuously for an hour. Lifeguards are trained to break the scan, look away, and come back to it, because an unbroken stare stops seeing. The pause is not slacking off. It is what lets the eyes return to the job as a job rather than as a blur of water.',
          'There is a laboratory finding in the same spirit. In a vigilance task, brief and occasional breaks from the task helped people keep performing. That fits the idea that a goal fades under constant use and is refreshed by being set down and picked up again. It is a narrower claim than interruptions are good for you. A demanding conversation during the break, or a glance at another unfinished project, does not refresh the goal; it replaces it with a new one. For repetitive work that suits it, the shape is simple. Finish a small unit, look away briefly, and then say the criterion out loud before you continue. Saying it is the reorientation. Nothing here prescribes an interval that everyone should use. A short pause is not a substitute for rest when what you need is rest.',
        ],
      },
      {
        title: 'Resume with the next unverified date',
        paragraphs: [
          'Here is the move for the newsletter. At the bottom of the first page, put a small mark beside the last event you actually confirmed. Set the page down and look at something else for a moment. When you pick it up, say: compare the next event date with the organiser\'s schedule. Then find the first unmarked entry and do exactly that.',
          'That one sentence carries the three things the fading criterion had lost. The target: the next date. The reference: the organiser\'s schedule. The action: compare. Set it against what people usually say to themselves, which is read more carefully. That tells you to try harder at an operation you have stopped doing. It names no target, no reference, no action, and it leaves you reading more carefully instead of checking. Two more practical notes. If you spend the pause opening a message thread, you will come back thinking about your reply, not about dates. And if you keep losing your place even with the marks, make the next unit smaller and the marks clearer. The method is adjustable, and it should be adjusted.',
        ],
      },
      {
        title: 'Why familiarity is the enemy here',
        paragraphs: [
          'The seventh event is harder to check than the first. Not because it is more complicated, but because it is less strange. Novelty holds attention for free. Once the format is familiar, the eye predicts what it will see and starts confirming the prediction rather than the date. The checking criterion is the only thing that resists this drift. It resists only while it is actively held.',
          'Two habits. Mark the last item you verified before any pause, so that where you were and where you were merely looking cannot blur together. And begin every return by stating the comparison, not the page. The page tells you where you are. The comparison tells you what you are doing there.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'A page boundary with a return instruction',
        alt: 'Mark the last checked event, pause, restate the date comparison, and begin at the next unmarked event.',
        caption: 'Look at the third step first. It is the one most people skip, and it is where the lifeguard\'s scan gets its purpose back. The mark in step one is what makes step four possible. Events are ordered, not drawn to scale, and no particular pause length is implied.',
        items: [
          { label: 'Page finished', detail: 'Mark the last verified event.' },
          { label: 'Brief pause', detail: 'Look away without starting a message thread.' },
          { label: 'Return instruction', detail: 'Compare dates with the supplied schedule.' },
          { label: 'Next event', detail: 'Begin at the first unmarked entry.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['A short repetitive personal checking task', 'A pencil'],
      steps: [
        'Pick something low-stakes and repetitive, such as checking names on your own invitation list against the list you actually sent. Before you start, write the exact comparison in one line: this against that. That line is the criterion you are about to protect.',
        'Check a small group of items, five or six, and put a mark beside the last one you genuinely verified. Then take a natural pause: stand up, look out of the window. Not your phone.',
        'Return by saying the criterion aloud and pointing to the first unmarked item. Say it even if it feels silly; the saying is the reorientation.',
        'Check another small group, then look back at your marks. Can you tell from them alone what was verified and what was only read? If not, the marks need to be clearer.',
      ],
      notice: 'You can say what the next pass is checking for, not just which page it is on. The criterion survived the pause instead of dissolving into reading.',
      troubleshooting: 'If the work still feels mechanical after a pause, you may be at the limit of what a short reorientation can do. Shrink the unit to three items, or stop and take a real break; a tired checker who keeps going is just a reader with a pencil.',
    },
    recall: {
      prompt: 'You are reviewing a set of subtitles to find places where a speaker name is missing. You take a short break. What do you say to yourself when you come back?',
      hint: 'Include what you are checking for and where the unchecked work begins.',
      answer: 'Something like: starting at the next unmarked subtitle, check whether a speaker name is needed and whether it is there. That sentence has the target, each subtitle in turn; the criterion, name needed and name present; and the starting point, the first one you have not marked. What you must not do is simply press play and watch, because watching is the subtitle equivalent of reading the newsletter: the lines go past, they feel checked, and at the end you cannot say which ones you actually examined. The lifeguard looks away and then looks back at the pool as a pool, not as scenery.',
    },
    quiz: {
      question: 'Which newsletter pause best preserves the checking task?',
      options: ['Stop at any moment and resume wherever the page looks familiar.', 'Finish the page, then open a new conversation before returning.', 'Mark the boundary, pause, and name the date comparison on return.'],
      correctIndex: 2,
      explanation: 'The mark tells you where checking ended, and naming the comparison tells you what checking is; together they turn the return into the task rather than into more reading. Familiarity is the problem, not the solution: the entries that look familiar are precisely the ones you drifted past. A new conversation replaces the fading goal with a fresh one, and you come back carrying the wrong thing.',
    },
    takeaway: 'Mark the last thing you truly checked, look away, and come back by saying the comparison out loud; the page tells you where you are, the sentence tells you what you are doing.',
    sourceNote: 'The brief-break finding concerns a vigilance experiment. Newsletter checking and the return sentence are practical suggestions, not a validated schedule.',
  },
  {
    id: 'mind-005',
    title: 'A successful search does not check the whole page',
    outcome: 'Stop letting a careful check of one thing turn into confidence about everything else on the page, and give each important detail its own deliberate pass.',
    scene: 'Proofreading guest names on an invitation while overlooking its meeting room',
    sections: [
      {
        title: 'All the names are right',
        paragraphs: [
          'You are proofreading the invitation for a small reunion. You go down the guest list name by name, comparing each one with the master list, and you catch a misspelling. Good. The page looks clean and you send it to print. A week later someone points out that the invitation still says Garden Hall, and the organiser moved the whole thing to the Library Room ten days ago. You looked straight at that line. Several times.',
          'The name check did not fail. It did exactly what you asked of it and found exactly the kind of error it was looking for. The failure was the quiet step afterwards, where a successful check of names became a feeling that the page was right. Your eyes passed over Garden Hall; your attention never asked it a question. A review is not a glance at a page. It is a specific comparison with a specific scope, and anything outside that scope has not been reviewed, however many times you have seen it.',
        ],
      },
      {
        title: 'Attention selects what serves the current task',
        paragraphs: [
          'If you are hunting for your keys, you can walk past a letter on the doormat three times without registering it. You were not blind to the letter; it was in your field of view every time. You were searching for keys, and attention was busy matching everything against keys, and a white envelope does not match. The letter was seen and not noticed, which are different things.',
          'Psychologists call the laboratory version of this inattentional blindness: people engaged in one visual task miss a clearly visible, unexpected event in front of them. The invitation is a practical cousin of that effect, not a re-run of the experiment, but the mechanism is the same. A named target makes you good at finding that target and leaves everything else without the same scrutiny. Experience does not widen the scope; experienced proofreaders miss room names too. The honest fix is not to resolve to notice anything odd, which is a promise attention cannot keep. It is to give the next important detail its own pass, with its own target and its own reference to compare against.',
        ],
      },
      {
        title: 'Give the room its own review',
        paragraphs: [
          'Label what you did: pass one, guest names checked against the master list. Then run pass two with a different target and a different reference: the room, the date, and the start time, each compared with the organiser\'s most recent confirmation. Now Garden Hall is not a line your eye slides past. It is a specific thing being held up against a specific record, and the record says Library Room. You correct it and note which confirmation you used.',
          'This does not make the checklist a guarantee. Had you compared against an older confirmation, the second pass would have confirmed Garden Hall with great confidence; a checklist built on a stale reference preserves the error very tidily. What the two passes buy you is visibility. Anyone reading your notes can see what was compared, against what, and therefore what has not been compared at all. Someone else can then pick up the unchecked detail, instead of assuming that a page which has clearly been proofread has been proofread in every way that matters.',
        ],
      },
      {
        title: 'The feeling of done',
        paragraphs: [
          'The dangerous moment is not during the name check. It is just after, when the effort of checking produces a general sense of completion that spreads across the whole page. Effort feels like coverage. The more carefully you checked the names, the more the room feels checked too, and nothing about the room has changed.',
          'Two habits. When you finish a review, write down its scope in a few words before you let yourself feel finished: names checked against master list. The writing makes the boundary visible to you. And before declaring any document ready, ask what else on it could be wrong and has not had a pass of its own; if you cannot name a reference you compared it against, it is unverified, and the honest label is unverified rather than fine.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two passes through the same invitation',
        alt: 'A guest-list comparison checks names; an organizer-confirmation comparison finds Garden Hall should be Library Room.',
        caption: 'Read the second half of each line, where the reference is named. The left pass compared against the guest list and could only ever find name errors. The right pass compared against the confirmation and found the room. Same page, two different questions asked of it.',
        items: [
          { label: 'Names pass', detail: 'Guest list confirms spellings; room is not checked.' },
          { label: 'Logistics pass', detail: 'Latest confirmation says Library Room, not Garden Hall.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['A personal draft with checkable details', 'Its reference information'],
      steps: [
        'Pick a low-stakes draft with details that can be checked against something: an invitation, a packing list, a short form. Name one narrow check in writing, such as names against the master list. One target, one reference.',
        'Do that check and nothing else. Then write a label for what you just did, in the past tense: names checked against master list. The label is the boundary, and writing it down is what stops the feeling of done from spreading.',
        'Choose a different important detail, the date or the venue or the amount, and compare it against its own correct reference in a separate pass. Notice how different it feels to look for a room than to look for a name on the same page.',
        'Record any correction you made and, honestly, one detail these two passes still have not established. That last line is the one that would have saved the reunion.',
      ],
      notice: 'Your notes now distinguish what was checked from what was merely visible. A reader can see exactly which questions the page has been asked, and which it has not.',
      troubleshooting: 'If you cannot name the reference you would compare a detail against, do not mark it checked. Write unverified beside it instead. A polished page with one honest unverified on it is safer than a polished page with none.',
    },
    recall: {
      prompt: 'You go through a packing list and confirm every charger is in the bag. Does that tell you the travel documents are packed? What do you do next?',
      hint: 'Separate the target you just searched for from the next target.',
      answer: 'No. You were hunting for chargers, and everything in the bag got matched against chargers; a passport is the letter on the doormat, seen and not noticed. The charger check is real evidence about chargers and nothing else. So run a second pass with a new target and a new reference: the list of required documents against the actual contents of the bag, item by item, passport in hand. Then label both passes so that at the airport you know what was checked and what was merely in view. The effort you put into the chargers does not transfer to the documents, however thorough it felt.',
    },
    quiz: {
      question: 'You corrected the prices on a poster. Which conclusion is justified?',
      options: ['The displayed prices were checked; the event address still needs its own check.', 'The whole poster is reliable because the price review was careful.', 'A second general glance is equivalent to checking the address against its source.'],
      correctIndex: 0,
      explanation: 'The price pass supports a claim about prices, full stop; the address has had no comparison against any reference and so remains unverified. Carefulness with prices is effort, and effort feels like coverage without being coverage. A general glance has no target and no reference, so it is the eye sliding past Garden Hall again, however attentive it feels.',
    },
    takeaway: 'Write down the scope of every check before you feel finished, and give each detail that matters its own pass against its own reference; seen is not checked.',
    sourceNote: 'Inattentional-blindness research motivates limited-scope review. The invitation example and two-pass procedure are original heuristics, not guaranteed detection methods.',
  },
  {
    id: 'mind-006',
    title: 'Choose sound conditions for the memory task',
    outcome: 'Notice when background talk is competing with the exact thing you are trying to hold in your head, and change the setup instead of blaming your memory.',
    scene: 'Remembering three walking directions while a radio discussion plays',
    sections: [
      {
        title: 'You remember the places, but not their order',
        paragraphs: [
          'You are about to leave the house. A friend has texted a short route: pass the library, cross the footbridge, then into the park. The radio is on in the kitchen, two presenters talking about something you are not following. You read the route twice, put the phone in your pocket, and try to say it back. Library, park, footbridge? Footbridge first? All three places feel completely familiar. The order has gone soft.',
          'That is a specific kind of forgetting. You have not lost the items; you have lost their sequence, and for a route the sequence is the whole point. It is also worth noticing what the radio was doing. You were not listening to it. You could not tell anyone what the presenters said. And yet it was there, in the same room, in the same language, while you were trying to hold three words in a line.',
        ],
      },
      {
        title: 'Unattended does not mean irrelevant',
        paragraphs: [
          'Try counting a stack of coins while someone next to you reads out random numbers. You are not listening to them. You are counting. But the numbers get in anyway, because they are the same kind of thing you are trying to hold, and your counting slips. The same person reading a shopping list in a language you do not speak would bother you far less. The interference is not about volume or politeness. It is about the overlap between what is being said and what you are trying to keep.',
          'Memory researchers have studied this under the name unattended speech, and the result is consistent: speech you are not attending to still disrupts short-term recall of items in order, which they call serial recall. The order is what suffers most, which is exactly what happened with library, footbridge, park. You do not have to understand the speech or care about it. The sound is still in the room. The finding does not say silence improves everything for everyone. You may sort laundry perfectly well to the radio, because laundry does not ask you to hold a verbal sequence. It says that this particular demand, ordered words in the head, is the one that background talk competes with. So for the route you have two levers: change the sound, or stop relying on your head by keeping the order written down. Writing it down also changes the task itself, from recall to consultation, and that is usually the better task for a walk.',
        ],
      },
      {
        title: 'Compare the arrangement, not your character',
        paragraphs: [
          'The fix for the route is two small moves. Pause the radio, or step into another room, and rehearse library, footbridge, park once or twice in the quiet. Then write those three words on a scrap of paper or in a note on your phone, to glance at when you are safely stopped, not while crossing the road. You have reduced the competing speech during the moment that needed it, and you have taken the sequence out of memory for the part of the day where memory is least reliable.',
          'A home trial can tell you whether this arrangement feels better, and it is worth a few minutes. It cannot tell you that the radio caused your earlier hesitation. One better attempt is one better attempt: the second route might have been easier, you were more awake, you had practised. Use the comparison to pick a convenient setup for next time. Do not use it to diagnose your attention span, and never mute sounds you rely on for safety or block out the traffic to test your recall.',
        ],
      },
      {
        title: 'Matching the room to the job',
        paragraphs: [
          'The useful skill here is not a rule about silence. It is noticing what kind of work you are about to do and asking whether the room suits it. Holding a phone number, a list of names in order, a set of directions: these are serial verbal tasks, and background talk is their particular enemy. Reading a long article, choosing a colour, folding sheets: different demands, different tolerances.',
          'Two habits. When you are about to hold a sequence of words in your head, check whether anyone, including a radio, is producing other words in the room, and give yourself thirty seconds of quiet or a written note. And when you forget an order you felt sure of, look at the room before you look at yourself; the setup is easier to change than your memory and often more to blame.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same route, different support',
        alt: 'Library, footbridge, park is rehearsed with a radio discussion playing or with speech paused and a route note visible.',
        caption: 'The three places are identical on both sides, so look at what differs around them: competing talk on the left, quiet plus a note on the right. The right side changes two things at once, the room and the task, which is why it tends to work. Schematic, not measured recall.',
        items: [
          { label: 'Speech playing', detail: 'Hold library, footbridge, park in order while talk continues.' },
          { label: 'Speech paused + note', detail: 'Rehearse the order, then keep it available to consult safely.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'An optional background sound source, if already present'],
      steps: [
        'At home, write three familiar places in an order you choose. Read them, cover the paper, and say the order back. Notice whether the items or the order is the thing that wobbles.',
        'If there is optional speech playing, a radio or a podcast, pause it. Then try a different set of three places of similar familiarity, so you are not just remembering the first list better the second time.',
        'Compare where you hesitated in each attempt. Treat this as a feel for the setup, not as an experiment; two attempts cannot separate the room from practice or alertness.',
        'Decide which support suits your next real sequence task: quiet, a visible note, or both. Write that decision down so it is ready before the next route arrives.',
      ],
      notice: 'You can now separate remembering the three items from remembering their order, and you know which of the two the background talk was eating.',
      troubleshooting: 'If you notice no difference between the attempts, do not manufacture one. Keep the written note anyway, since it costs nothing, and leave every alarm or alert you depend on exactly as it was.',
    },
    recall: {
      prompt: 'You have to introduce a panel of five speakers in a fixed order, and music with chatter nearby is making rehearsal difficult. What would you try?',
      hint: 'The order is a verbal sequence, and the event itself can tolerate a note.',
      answer: 'Both levers. Find a quieter corner for the few minutes of rehearsal, because five names in order is exactly the serial verbal task that nearby talk disrupts, like counting coins while someone reads out numbers. Then prepare a small card with the five names in sequence and hold it during the introductions, which turns the job from recall into reading and removes the risk entirely at the moment it matters. Nobody in the audience minds a card. Everybody notices a name said in the wrong order.',
    },
    quiz: {
      question: 'Which task most closely matches the unattended-speech finding?',
      options: ['Selecting a wall colour while listening to a podcast.', 'Recalling a short list of names in the order they were presented.', 'Organising books by their visible cover size.'],
      correctIndex: 1,
      explanation: 'Names in presented order is serial verbal recall, the exact demand the studies measured, and background speech competes with it the way read-out numbers compete with counting. Colour choice and shelving by size are visual tasks; you may have sound preferences for them, but the unattended-speech research says nothing about them either way.',
    },
    takeaway: 'When you must hold words in order, give yourself a quiet moment or a written note; background talk you are not even listening to competes for exactly that.',
    sourceNote: 'The linked study concerns unattended sound and short-term memory. The route exercise is illustrative and cannot measure an individual sound effect.',
  },
  {
    id: 'mind-007',
    title: 'Keep both versions visible when comparing',
    outcome: 'Find what actually changed between two versions of a document by matching them line against line, instead of trusting a memory of the old one that was never as exact as it felt.',
    scene: 'Comparing old and revised reading-group invitations with one changed location',
    sections: [
      {
        title: 'The revised invitation looks familiar',
        paragraphs: [
          'An updated invitation arrives from your reading group. Same typeface, same green border, same Saturday in bold at the top. You glance at it and think: they have tidied the layout. You remember the old one well enough, and this looks like it. What you do not notice is that the meeting place has changed from Reading Room to Courtyard. The time is still ten. Everything that your eye checked was unchanged, and the one line that mattered slipped past because the page as a whole felt the same.',
          'The trap is in the phrase you remember the old one well enough. You remember its look. You remember roughly what it said. You do not have its exact wording stored anywhere you can consult, and the question what changed needs exactly that. An impression of the old version is a feeling, not a reference. The old version itself is a reference, and it is probably still in your inbox.',
        ],
      },
      {
        title: 'Replace remembering with matching',
        paragraphs: [
          'Spot-the-difference puzzles put the two pictures next to each other for a reason. If they showed you one picture, took it away, and then showed the other, you would find almost nothing, because you would be comparing a drawing with your memory of a drawing. Side by side, your eyes can go hat to hat, window to window, and the missing button jumps out. The puzzle is hard enough with both pictures in view. From memory it is nearly impossible.',
          'Documents work the same way. Put the old and new invitations next to each other and compare region by region: heading against heading, time against time, place against place. Now the job is matching, which eyes are good at, rather than holding the old wording in your head while you read the new one, which they are bad at. You still have to pick the right regions and read what they say; the layout will not do that for you. There is a well-known finding in attention research that people routinely fail to see an obvious change happening right in front of them when their attention is elsewhere. That research did not test invitations, but its warning applies: having seen a page does not mean knowing what was on it. Side by side is a practical answer to that limit. It is not a guarantee that every difference will be caught.',
        ],
      },
      {
        title: 'A difference is not automatically a correction',
        paragraphs: [
          'Lay the two invitations together and write down what you find. Time: ten in both. Place: Reading Room became Courtyard. Now you know precisely which fact needs confirming before you tell anyone where to go. Check the organiser\'s latest message. Perhaps the courtyard is booked; perhaps someone edited the wrong line.',
          'This keeps two jobs apart. Detection: the text changed. Judgement: is the new text right? Finding Courtyard in the new version settles the first and says nothing about the second. A text-comparison tool can do the detection for you, highlighting every edit; it has no idea whether a courtyard exists. If your screen is too small to show both pages legibly, compare one labelled line at a time rather than flipping between whole pages and trusting the overall look, because the overall look is exactly what fooled you in the first place.',
        ],
      },
      {
        title: 'Why familiarity is the problem',
        paragraphs: [
          'Familiar things are processed fast and shallow. That is what familiarity is for: it lets you walk through your own house without inspecting every door. But it means a familiar-looking document gets a familiar-looking read, and a single changed word in an unchanged layout is the hardest kind of change to catch. The revision was designed, innocently, to look like the thing you already knew.',
          'Two habits. When a new version of anything arrives and your first thought is this looks the same, treat that thought as a signal to fetch the old one, not as a conclusion. And when you do find a difference, write it down as a question for someone rather than as a fact you now know; Courtyard is a change to confirm, not a place to turn up.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Read the location line in both versions',
        alt: 'The old invitation says Saturday, ten, Reading Room; the revision says Saturday, ten, Courtyard.',
        caption: 'Go word by word across the two lines, the way you would compare two pictures in a puzzle. Saturday matches. Ten matches. Then the last words part company. That is detection; whether Courtyard is correct is a separate question for the organiser. Invented pair.',
        items: [
          { label: 'Old invitation', detail: 'Saturday at ten. Meet in the Reading Room.' },
          { label: 'Revised invitation', detail: 'Saturday at ten. Meet in the Courtyard.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Two personal versions of a short document, or the fictional pair above', 'A note'],
      steps: [
        'Write old and new at the top of each version. Mixing up which came first turns a change into its reverse, so label before you look.',
        'Put both where you can see them at once. If the screen is too small, isolate one matching line from each, side by side, and work through the lines in turn. Never compare a line against your memory of the other version.',
        'Compare heading, time, and place as three separate matches, and record each result exactly: what changed, and at least one thing that stayed the same. The unchanged detail proves you actually compared rather than skimmed.',
        'Beside each change, write who could confirm it. The newer version is not automatically right; it is just newer.',
      ],
      notice: 'Your list says Reading Room became Courtyard, not the layout looks different. One of those can be checked with a phone call; the other cannot be checked at all.',
      troubleshooting: 'If the layout keeps pulling your eye, do the text comparison first with the styling ignored, then make a separate pass for colours and fonts if they matter. Mixing the two passes is how a changed word hides behind an unchanged border.',
    },
    recall: {
      prompt: 'A revised train itinerary arrives and looks like the one you remember. How would you check whether the return station has changed?',
      hint: 'Make the old station a reference you can look at, not a memory you consult.',
      answer: 'Do not ask yourself what the old return station was; fetch the old itinerary and put the two return legs side by side, station name against station name, like the two pictures in the puzzle. Then confirm whatever you find against the live booking, because a change in the document is a question, not an answer. The dates matching and the layout matching tell you nothing about the station; they are the green border on the invitation, and the station is the Courtyard line.',
    },
    quiz: {
      question: 'A side-by-side comparison reveals a new address in a flyer. What has been established?',
      options: ['The address text changed; its correctness still needs checking.', 'The new address is correct because it is in the latest file.', 'The whole flyer has been verified because a difference was found.'],
      correctIndex: 0,
      explanation: 'Detection and judgement are separate: the comparison proved the words changed and said nothing about whether the new words are right. Newer is not the same as correct; someone may have edited the wrong line. And finding one difference does not verify the rest of the flyer, since each other line still needs its own match.',
    },
    takeaway: 'Fetch the old version and match it against the new one line by line; then treat every difference you find as something to confirm, not something you now know.',
    sourceNote: 'The inherited source studies visual attention. Side-by-side invitation review is an original heuristic, not a directly tested intervention in that paper.',
  },
  {
    id: 'mind-008',
    title: 'Agree on what may interrupt a focus block',
    outcome: 'Set up a stretch of uninterrupted time as a short agreement with the people around you, with a return time and one clear exception, instead of a silence they have to guess at.',
    scene: 'Reading in a shared flat while a housemate expects a parcel delivery',
    sections: [
      {
        title: 'Quiet time still includes shared responsibilities',
        paragraphs: [
          'You want an hour with a course chapter. You share a flat, and your housemate is waiting for a parcel but needs to pop out. Two ways this goes wrong, and both are easy. You silently stop checking your phone, the courier rings, nobody answers, and the parcel goes back to the depot. Or you leave everything on, your housemate messages about dinner, then about whose turn it is to buy milk, and the chapter loses its thread three times in twenty minutes.',
          'Nobody in either story is being inconsiderate. The housemate has no way of knowing which messages you want and when. You have no way of enforcing a boundary nobody has heard about. A focus block fails when it is a private decision that other people are expected to discover by bumping into it. It works when it is a small, spoken agreement about when you are available, with a boundary and an exception.',
        ],
      },
      {
        title: 'Decide the exception before each message arrives',
        paragraphs: [
          'A surgeon in theatre is not reachable, and everyone knows it, and nobody is offended. But there is always a way through for the one call that cannot wait, and everyone knows what qualifies. The system works because the exception was agreed before the operation started, not improvised when a phone rang.',
          'Research on task switching explains why this matters more than it seems. Moving between reading a chapter and sorting out dinner is not just a matter of glancing at a screen; it means putting down one way of thinking and picking up another, and the cost is paid every time, whether or not the message was important. An agreement does not remove that cost. What it removes is the decision. Without an agreement, every buzz asks you to judge, right now, whether this one is worth switching for, and the judging is itself a switch. With an agreement, dinner messages have already been sorted into later, and only the parcel call has a route through. Three things make the agreement real: what can wait, when you will come back to it, and how the exception reaches you. Use a channel you will genuinely notice. Promising to be reachable on a device you have just muted is not an exception, it is a trap for both of you.',
        ],
      },
      {
        title: 'A parcel exception that both people understand',
        paragraphs: [
          'The whole conversation takes twenty seconds. You: I am reading until six. I will look at the dinner messages then. If the courier needs me before that, ring me rather than texting. Housemate: Fine. I will only call about the delivery. You: Calls are on loud. Then you check that they are.',
          'Now the line is practical rather than moral. Dinner waits; the parcel rings. If the delivery turns into a saga, three calls and a missing form, the honest move is to end or move the reading block, not to keep pretending the original boundary still fits. And when six arrives, you open the dinner messages as promised. That last step is the one people skip when the chapter gets interesting, and skipping it is what teaches housemates that your boundaries are not worth respecting. The return time is part of the deal, not a courtesy.',
        ],
      },
      {
        title: 'When the block does not fit',
        paragraphs: [
          'Sometimes you sketch the agreement and discover that most of what might come up genuinely cannot wait. If you are the one expecting the parcel, or you are on call, or a child is asleep upstairs, then an hour of unreachability is not a boundary you can honestly offer. The answer is not a looser promise. It is a shorter block, a different time, or a task that tolerates being picked up and put down.',
          'Two habits. Before any focus block, say the three things out loud to whoever is affected: until when, what waits, what gets through. And test the exception channel before you start, because an agreement that routes emergencies through a muted phone is worse than no agreement at all; it makes everyone feel covered while covering nothing.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'An explicit exception in a shared flat',
        alt: 'A reader says routine dinner messages wait until six, and the housemate agrees to call for the parcel delivery.',
        caption: 'Look for the three ingredients in the exchange: a return time, six; a single exception, the courier; and a channel that will actually be heard, a call on loud. Then notice the housemate repeating the exception back, which is how both people find out they understood the same thing. Fictional exchange.',
        items: [
          { label: 'Reader', detail: 'Dinner messages at six. Call if the courier needs me sooner.' },
          { label: 'Housemate', detail: 'Agreed. I will call about the delivery, not dinner plans.' },
          { label: 'Reader', detail: 'Calls are audible. I will check the other messages at six.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A nonurgent personal task', 'A draft message'],
      steps: [
        'Think of a block of time you would like to protect and ask honestly who might reasonably need you during it. Write their names down. If the list is long, that is useful information about whether this is the right hour.',
        'Draft the three parts in one or two sentences: when the block ends, what can wait until then, and the one exception with the channel it should use. Keep the exception singular; two exceptions become a list, and a list becomes everything.',
        'Check the channel is actually open on your end and that the plan does not quietly override something you are already responsible for. A parcel exception does nothing if your ringer is off.',
        'If the block involves another person, say the agreement to them and listen for them to repeat the exception back. If it involves nobody else, you have a plan, not an agreement, and that is fine too.',
      ],
      notice: 'Someone else could read your draft and tell exactly which request is allowed to interrupt you and when the ordinary replies resume. The boundary exists outside your head.',
      troubleshooting: 'If, writing the draft, you find that nearly everything qualifies as urgent, the block is wrong, not the people. Shorten it to twenty minutes, move it to a quieter hour, or pick a task you can drop and resume without losing much.',
    },
    recall: {
      prompt: 'You are volunteering at an event and would like to study during a quiet patch in the afternoon. What has to be settled before you start?',
      hint: 'Your role may make some interruptions non-optional, and not yours to waive.',
      answer: 'Who is covering what you are there to do. A focus block is an agreement about availability, and in this case the person you need to agree it with is the organiser, not yourself: is someone else watching the door for the next hour, what are you still expected to respond to, and how will they reach you if a visitor turns up? If the honest answer is that you remain responsible for arrivals, then the surgeon has not left theatre, and the right move is a task you can put down the moment someone appears, or studying later. Deciding privately that the quiet patch is yours is exactly the silent boundary that fails.',
    },
    quiz: {
      question: 'A teammate may need your approval on something while you are drafting a document. Which boundary is workable?',
      options: ['Mute everything until the draft feels complete.', 'Agree on an approval-call exception and a time for routine replies.', 'Keep all chats open so every message receives the same priority.'],
      correctIndex: 1,
      explanation: 'The approval is a real dependency, so it gets a named route through, and everything else gets a return time; that is the surgeon\'s one call that cannot wait. Muting everything blocks the teammate and makes you the reason their work stalled. Leaving all chats open puts the approval and the lunch plans on the same footing and pays a switching cost for each of them.',
    },
    takeaway: 'Say three things out loud before you go quiet: when you will be back, what waits until then, and the one way a genuine need can reach you.',
    sourceNote: 'Task-switching research supplies background. The interruption agreement is a coordination framework, not an experimental finding about household or work messages.',
  },
  {
    id: 'mind-009',
    title: 'Give a small routine an observable starting signal',
    outcome: 'Attach a small action to a moment that already happens in your day and that you can actually see, so the action stops needing a fresh decision every time.',
    scene: 'Putting pocket receipts into an envelope after hanging keys by the door',
    sections: [
      {
        title: 'The receipts have no collection moment',
        paragraphs: [
          'Receipts breed. There are three in your jacket, a crumpled one in your bag, two folded into your wallet. You have meant for weeks to gather them somewhere sensible. The plan in your head is sort the receipts sometime this evening, and every evening sometime loses to whatever is actually happening when you walk in: the kettle, the post, a message, dinner.',
          'The plan is not lazy. It is incomplete. It describes a result you want and says nothing about when to begin, so each evening you have to decide afresh whether now is the moment, and now never quite is. Meanwhile there is something you already do, every single time you come home, without deciding anything: you hang your keys on the hook by the door. That moment is visible, it is reliable, and it is sitting there unused.',
        ],
      },
      {
        title: 'A cue links a context to a response',
        paragraphs: [
          'Think of brushing your teeth. You do not decide to do it; you find yourself at the sink after getting into your pyjamas, because years of repetition have welded the two together. Pyjamas on, teeth brushed. The pyjamas are not a reminder you set. They are just a thing that happens, and the brushing has learned to follow it.',
          'Habit researchers describe this as a response becoming linked to a recurring context, and they call the part of the context that triggers the response a cue. The key hook is a candidate cue. Finishing the hang is the signal; checking your pockets for receipts is the response. Two things follow from the research that are easy to forget. First, the link is built by repetition, so writing the sentence down is the start, not the finish; the first week will still take a deliberate nudge. Second, the cue has to be something you can actually recognise in the moment. When I feel organised is not a cue, because the feeling has no edge you can notice. After I hang my keys has an edge. It only works, of course, if you really do hang your keys, every time, in the same place.',
        ],
      },
      {
        title: 'Keep the response smaller than the whole project',
        paragraphs: [
          'The temptation is to attach the whole receipt project to the hook: collect, sort by category, check against the bank, update the budget. Do that and the response becomes a twenty-minute job you will not start in a coat with a bag on your shoulder, and the cue will quietly stop firing. The routine should do one thing: pockets checked, receipts into the envelope that lives beside the hook. Sorting is a different task for a different moment.',
          'Set it up so the response needs nothing you have to go and find. Put the envelope on the shelf under the hook now, not when you first need it. Then walk the sequence once, in slow motion, to feel its shape: keys on hook, hand into pockets, paper into envelope. On a day with no receipts, the pocket check is the whole routine and it still counts; the point is the pairing, not the paper. And if you usually arrive with your hands too full to do this comfortably, do not treat that as a willpower problem. Move the cue to the moment you put your bag down. The signal should fit the real shape of your arrival, not the other way round.',
        ],
      },
      {
        title: 'When the cue is wrong',
        paragraphs: [
          'A cue fails for boring reasons, not moral ones. It happens too rarely to build a link. It happens at a moment when the response is awkward. It is not really a single moment at all, more a vague stretch of time. Each of these shows up as the routine simply not happening, which feels like a failure of character and is actually a failure of design.',
          'Two habits. Pick cues from things you already do without thinking, and describe the exact moment they end: the click of the keys on the hook. And keep the attached response small enough to finish in under a minute while still wearing your coat. If the routine is not happening, change the cue or shrink the response before you blame yourself.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A doorway cue with one small response',
        alt: 'Hanging keys leads to checking pockets and placing loose receipts into a nearby envelope.',
        caption: 'Notice where the chain stops: at the envelope, not at a sorted budget. The first box is something you already do every day, and the last box is close enough to it that you can finish with your coat still on. Everything heavier happens somewhere else, later.',
        items: [
          { label: 'Keys on hook', detail: 'An event you already recognize on arriving home.' },
          { label: 'Check pockets', detail: 'Look for loose receipts, not every document you own.' },
          { label: 'Receipt envelope', detail: 'Collect the papers here; sort them at another time.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Materials for one small personal routine'],
      steps: [
        'Choose an event that already happens in your day without any effort, such as hanging keys or putting the kettle on, and write down exactly how you know it has just finished. The edge is what makes it a cue rather than a mood.',
        'Attach one response that takes under a minute. Name the object and where it goes, or the single question you will answer. If your response has an and in it, it is probably two responses; keep one.',
        'Walk the pairing once, slowly, and put the materials where the response happens so nothing has to be fetched. Then write down the next real moment the cue will occur, so you know when the first repetition is due.',
      ],
      notice: 'Your plan now has a starting event you can see and an action you can finish on the spot. The decision about when has been made once, in advance, instead of every evening.',
      troubleshooting: 'If the cue happens only now and then, or the response is awkward at that moment, change the event rather than trying harder. Teeth brushing attached to a weekly cue would never have stuck either.',
    },
    recall: {
      prompt: 'You want to write one sentence about each day in a notebook, and you keep forgetting. What cue-and-response pair could carry it?',
      hint: 'Find something you already do every evening, near where a notebook could live.',
      answer: 'Find the pyjamas moment. Something like: after I plug my phone into its evening charger, I write one sentence in the notebook beside it. The charger is a good cue because it happens every night, in the same place, and has a clear end: the cable clicks in. The response is small enough to finish standing up. It works only if two conditions hold, which are worth checking honestly: the charging really is nightly and in one spot, and the notebook and a pen are already sitting there rather than in another room. A cue that fires with nothing to hand teaches you to skip it.',
    },
    quiz: {
      question: 'Which reading plan has the clearest cue and response?',
      options: ['Read more whenever the evening becomes quiet.', 'Keep a book nearby so reading remains possible.', 'After putting away my lunch plate, read the next paragraph.'],
      correctIndex: 2,
      explanation: 'The lunch plate is a recognisable, daily moment with a clear end, and the next paragraph is a response small enough to always finish; that is the pyjamas-and-toothbrush shape. Whenever the evening becomes quiet has no edge you can notice and will lose to whatever is happening. A nearby book makes reading possible without ever saying when it starts.',
    },
    takeaway: 'Borrow a moment you already have, describe exactly where it ends, and hang one small finishable action on it; the repetition does the rest.',
    sourceNote: 'Wood and Rünger review context-linked repetition. The receipt routine is an original application, not a tested habit prescription.',
  },
  {
    id: 'mind-010',
    title: 'Decide what to do when a predictable blocker arrives',
    outcome: 'Write down in advance what you will do when the thing that usually derails your practice session happens again, so the derailment leads to a smaller version of the practice instead of to your phone.',
    scene: 'Moving an outdoor contour-drawing practice indoors when it rains',
    sections: [
      {
        title: 'Rain keeps cancelling the same plan',
        paragraphs: [
          'Your plan is to sketch the outline of the balcony plant after lunch. It is a good plan. It has a time, a place, and a subject. Then it rains, the balcony chair is soaked, and the session is over before it starts. You stand in the doorway for a moment, and then you are on the sofa scrolling, and the afternoon is gone. This has happened four times this month.',
          'The rain was never the surprise. It rains here. The surprise was that each time, you had to invent an alternative on the spot, in the exact moment when the original plan had just collapsed and your motivation with it. Inventing a new session and starting it are two jobs, and the doorway is a bad place to do either. Notice what the plan was really for: practising outlines. The balcony was one place to do that. It was never the point.',
        ],
      },
      {
        title: 'An if-then plan connects a condition to an action',
        paragraphs: [
          'Every car carries a spare wheel. Nobody decides, at the roadside with a flat tyre, whether to own one; the decision was made in a garage years earlier, when nothing was wrong. The spare is not as good as the real wheel, and it does not pretend to be. It is good enough to keep the journey going, and it was chosen in advance so that the roadside moment needs no thinking at all.',
          'Psychologists call the planning version of this an implementation intention: a sentence that names a situation you will recognise and the specific thing you will do when it arrives. I want to draw more is a goal, and goals do not say what happens in the doorway. If the balcony is wet after lunch, I will sketch the outline of my shoe at the desk is a plan, and it does. Two features make the sentence work. The condition has to be something you can see; a wet chair qualifies, feeling uninspired does not. And the action has to be within your control and still serve the original purpose. Drawing a shoe indoors teaches you nothing about outdoor light. It does keep your hand following the edge of an object, which was the skill you were actually after. Be honest about that trade. The spare wheel is a spare, not the wheel.',
        ],
      },
      {
        title: 'Prepare enough to make the fallback real',
        paragraphs: [
          'A plan that needs materials you have to hunt for is a plan you will skip. So leave a pencil and the sketchbook on the desk today, while it is dry and nothing is at stake. Now the fallback runs itself: you see the wet chair, you walk to the desk, you put a clean shoe on the paper and trace its outer edge. No search, no tutorial to pick, no polished drawing expected. One outline, and the session has happened.',
          'If the desk is also unavailable, this plan simply cannot run, and that is fine. Revise it later. An if-then plan is not a vow to defeat every obstacle; it is one spare wheel for one predictable puncture. Keep exactly one alternative ready rather than a menu, because a menu puts you back in the doorway choosing. And never let a fallback become a way round a real restriction: if the balcony is wet because it is unsafe, or a place is closed because you are not allowed in, the plan is to do something else, not to find a loophole.',
        ],
      },
      {
        title: 'Why the moment of failure is the worst time to plan',
        paragraphs: [
          'When a plan collapses, two things happen at once. You lose the activity, and you lose the small push that had got you as far as the doorway. Deciding what to do instead now costs effort you no longer have, and the sofa costs nothing. That is not weakness; it is the predictable shape of the moment, and the fix is to move the deciding to a different, easier moment.',
          'Two habits. For any practice that keeps getting cancelled by the same thing, write the if-then sentence on a calm day, with the condition you can see and the smaller action that keeps the skill alive. And put the fallback\'s materials in place at the same time, because a spare wheel in the garage at home does nothing for you at the roadside.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The rain fallback preserves outline practice',
        alt: 'A wet balcony triggers moving a shoe to the desk and drawing its outer contour with prepared materials.',
        caption: 'Read the first box as the thing you can see from the doorway, and the last box as what you will have done ten minutes later. The subject changed from plant to shoe; the skill, following an edge with a pencil, did not. This branch runs only when the stated blocker appears.',
        items: [
          { label: 'Wet balcony', detail: 'The planned outdoor seat is unavailable.' },
          { label: 'Shoe at desk', detail: 'Use the prepared pencil and sketchbook indoors.' },
          { label: 'Outer contour', detail: 'Finish one outline, without pretending to study outdoor light.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['A personal learning goal', 'A note'],
      steps: [
        'Name one obstacle that has cancelled the same practice more than once, and beside it write the narrow skill that practice was really for. Separating the skill from the setting is what gives you room to substitute.',
        'Write the sentence: If [something I can see], then I will [one specific alternative action]. Read the condition back and ask whether a stranger could tell you when it is true. Wet chair passes. Not in the mood fails.',
        'List what the alternative needs, pencil, paper, a shoe, and go and put those things where the alternative happens, now, while you are not in the doorway.',
        'Walk the plan through on paper once: what it practises, and what it honestly does not replace. Write that second part down so you do not later mistake a month of shoes for a month of plants.',
      ],
      notice: 'The blocker now leads straight to an available action with nothing to fetch and nothing to choose. The deciding happened today; the doorway only has to recognise rain.',
      troubleshooting: 'If your fallback turns out to need the same thing the blocker took away, a dry seat or an open website, it is not a fallback. Pick a different task that serves the same narrow skill with what is left.',
    },
    recall: {
      prompt: 'Your language practice depends on a website that goes offline now and then. What fallback would keep some useful practice alive on those days?',
      hint: 'Use material you have already checked and have to hand, not answers you would have to invent.',
      answer: 'Choose the spare wheel on a day the site is up. Something like: if the site is unavailable when I sit down, I will answer three vocabulary prompts from the saved set and check them against the saved answers. The condition is visible, an error page, and the action needs only a file you already have. It preserves retrieval practice, which is a real part of what the site gives you. Be honest about what it does not do: if the website\'s main value was listening to spoken audio, the saved prompts do not replace that, and a month of outages would leave a gap. The fallback is good enough to keep moving, not a substitute for the real wheel.',
    },
    quiz: {
      question: 'A shared instrument is often occupied when you want to practise. Which plan handles that blocker most specifically?',
      options: ['Make music practice a higher priority each week.', 'If it is occupied, mark the rhythm in my saved score at the table.', 'Choose any activity that feels musical when the instrument is busy.'],
      correctIndex: 1,
      explanation: 'The second plan has a condition you can see, someone at the instrument, and a prepared action with its materials named, a saved score at a table; that is a spare wheel chosen in advance. Making practice a priority is a goal and says nothing about the doorway moment. Any activity that feels musical hands you a menu to choose from at exactly the moment choosing is hardest.',
    },
    takeaway: 'For the obstacle you can predict, write the if-then sentence and stage the materials on a calm day, so the derailment has one prepared place to go instead of the sofa.',
    sourceNote: 'Implementation-intention research informs the planning structure. The drawing and music alternatives are teaching examples, not experimentally tested equivalents.',
  },
  {
    id: 'mind-011',
    title: 'Prepare the first useful move',
    outcome: 'Clear away the hunting and tidying that stands between you and a hobby you actually like, so starting costs one action, while leaving every real decision and every safety check in place.',
    scene: 'Preparing a jigsaw tray and reference picture before the next hobby session',
    sections: [
      {
        title: 'Before the puzzle comes the search',
        paragraphs: [
          'You genuinely like doing a small jigsaw after dinner. It is calming, it is yours, and most evenings you do not do it. The pieces are in a box in the hall cupboard. The picture on the lid is somewhere under the post. The one table big enough has laundry on it. You weigh up moving the laundry, finding the lid, fetching the box, and somewhere in the weighing the phone game wins, because the phone game is already in your hand.',
          'Nothing about this says you have gone off jigsaws. Liking something does not remove its setup, and the setup here is three separate searches before the first piece gets compared with the picture. None of those searches is the hobby. They are the cost of reaching the hobby, paid afresh every evening, and every evening they are enough to tip the choice toward the thing that costs nothing to start.',
        ],
      },
      {
        title: 'Convenience changes the starting context',
        paragraphs: [
          'A chef lays out every chopped ingredient in small bowls before service begins. The French call it mise en place, everything in its place. The point is not tidiness for its own sake. It is that when an order arrives, the cook\'s first move is cooking, not rummaging for the garlic. The thinking about what goes where happened earlier, in a calm hour, so that the busy moment needs no thinking at all.',
          'Habit research says something compatible: actions become linked to the situations they repeatedly happen in, and a situation that has the materials ready is one that points at the action. Arranging a consistent, usable start is a practical use of that idea, not a magic trick. It does not make every convenient activity automatic, and it does not mean all effort is bad. The distinction to hold onto is between setup that is irrelevant to the skill and work that is the skill. Finding the lid is setup. Comparing a piece against the lid is the puzzle. And a third category sits apart from both: safety and access checks serve a different purpose, and convenience is never a reason to leave small pieces where a toddler or a dog can reach them.',
        ],
      },
      {
        title: 'A ready tray still leaves a real choice',
        paragraphs: [
          'So at the end of tonight\'s session, do the chef\'s job for tomorrow. Put the loose pieces and the lid picture into a shallow tray with a cover, and store it somewhere safe and reachable. Tuck a note on top: Next: compare the green edge pieces beside the finished corner. Tomorrow evening the start is one retrieval and one known first move. You still decide whether tonight is a jigsaw night. The tray just stops that decision from being made by the laundry.',
          'The tray solves nothing about the puzzle itself. What it removes is the three searches that stood between the moment after dinner and the first useful action. Watch for the trap on the other side, though. If preparing the start takes longer than the session it prepares for, you have built a new chore. One clear tray in one safe place beats a labelled storage system that becomes its own unfinished project.',
        ],
      },
      {
        title: 'What to clear and what to keep',
        paragraphs: [
          'The test for anything you are tempted to remove from the start is a single question: is this part of the skill, or part of reaching the skill? Searching, clearing, and fetching are reaching. Comparing, judging, and choosing are the skill, and they stay. A note that says compare the green edges removes a search. A note that says the green piece goes top left removes the puzzle.',
          'Two habits. After each session, spend the last two minutes setting up the next one, while the materials are already in your hands. And when the start still feels heavy, list what you actually did before the first useful move; the list is usually three small searches, and each one can be designed away without touching the hobby itself.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What happens before the first puzzle piece?',
        alt: 'Scattered materials require three searches; a safely stored tray keeps pieces, picture, and a next-step note together.',
        caption: 'Count the verbs on the left: find, uncover, clear. Three jobs before the hobby begins. On the right there is one, retrieve, and the first real move is already written down. The comparison is about setup; it makes no claim about motivation or speed.',
        items: [
          { label: 'Scattered materials', detail: 'Find pieces, uncover the picture, clear a working surface.' },
          { label: 'Prepared tray', detail: 'Retrieve the closed tray and compare the green edge pieces.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Materials for a small personal routine', 'A suitable storage place'],
      steps: [
        'Pick one routine you would like to start more easily. Do not assume it has to be daily; the aim is a lighter start, not a stricter schedule.',
        'Write down everything you search for or decide between sitting down and the first useful action. Be honest and specific: find the box, uncover the picture, clear the table. The list is the problem made visible.',
        'Remove one search by keeping the needed items together in a safe, reachable place. One search, not all of them; you can remove another next week if this one helps.',
        'Write the next useful operation on a note and put it with the materials. Make sure the note removes a search, not a decision: compare the green edges, not the green piece goes top left. Leave every safety check exactly where it was.',
        'Try the prepared start once. Keep the arrangement only if it genuinely shortened the setup; if it added its own fuss, simplify it.',
      ],
      notice: 'Your first move now belongs to the activity, comparing a piece with a picture, instead of to the hunt for its materials. The mise en place was done in a calm moment, so the busy moment needs none.',
      troubleshooting: 'If the arrangement means taking over a shared table or shelf, switch to a portable, lidded container you can put away. A prepared start that annoys the people you live with will not survive the week.',
    },
    recall: {
      prompt: 'Before each short study session you spend several minutes finding the same saved article and remembering why you wanted it. What could you prepare?',
      hint: 'Preserve both where it is and why you meant to open it.',
      answer: 'Do the chef\'s job once. Keep a single bookmark for the article, and next to it a one-line note with the question you were trying to answer and the section you meant to read. That removes two searches, for the file and for your own intention, and leaves the actual study untouched: you still have to read the section and think about the question. What you must not do is write the answer on the note, because then you have removed the session, not the setup.',
    },
    quiz: {
      question: 'You search for the same guide before every study session. Which change targets that setup cost?',
      options: ['Keep its link and your intended question together in an approved note.', 'Schedule longer sessions to allow more searching time.', 'Choose a different guide each time to keep the subject interesting.'],
      correctIndex: 0,
      explanation: 'The note removes the repeated search for the guide and for your own purpose, which is exactly the setup standing between you and the work. Longer sessions pay for the search instead of removing it; the garlic is still in the cupboard. A new guide each time adds a fresh search on top of the old one.',
    },
    takeaway: 'Spend the last two minutes of each session laying out the next one, so starting costs one retrieval, and keep every real decision and every safety check out of the tray.',
    sourceNote: 'The habit review provides context-response theory. Preparing a puzzle tray is an original design suggestion, not a measured intervention from the review.',
  },
  {
    id: 'mind-012',
    title: 'Replace a cue that your new schedule removed',
    outcome: 'When a routine quietly dies after your days change shape, look first for the moment that used to start it, and find a new moment to carry it, before you conclude you have lost interest.',
    scene: 'Moving a one-line diary from the evening train ride to closing a home-work laptop',
    sections: [
      {
        title: 'The diary stopped when the journey stopped',
        paragraphs: [
          'For two years you wrote one sentence about your day in a small notebook on the evening train. It was the nicest minute of the commute. Then your job moved home. A week into working from the kitchen table, the notebook is still in the bag by the door, and you have not written a word. You still want the record. You just do not seem to be doing it.',
          'The easy story is that you have lost the habit, or the discipline, or the interest. Before you accept that, try a simpler story. The sentence was never the whole routine. The routine was a train seat, the end of a workday, and a notebook already in your bag, all arriving together at about half past five. Those three things have stopped arriving together. Wanting the sentence back does not bring the train back, and without the train the sentence has nothing to hang on.',
        ],
      },
      {
        title: 'The context was part of the routine',
        paragraphs: [
          'Think about a plant that thrived on a particular windowsill. Move house, put it on a different sill, and it droops. Nobody says the plant has lost motivation. They say the new sill faces north, or the radiator is underneath it, and they look for a spot that gives the plant what the old one gave it. The plant did not change. Its conditions did.',
          'Habit research describes routines the same way: a repeated action becomes tied to the situation it keeps happening in, and the situation is part of what makes the action happen. Your diary was tied to a specific moment, the workday ending while you sat still with the notebook to hand. A change of schedule or place can remove that moment entirely, even though writing a sentence remains perfectly possible at any hour. So the useful question is not how can I try harder. It is which moment in the new day sits in the same place the train used to: at the end of work, reliable, calm enough to write, and near the notebook. It does not need to be half past five. It needs to be real.',
        ],
      },
      {
        title: 'Change the start before changing everything',
        paragraphs: [
          'Say the thing that now marks the end of your working day is closing the laptop. That is a good candidate. It is physical, it happens once, and it means the same thing the train used to mean: work is over. Put the notebook on the shelf beside where the laptop lives and write the new pairing down: after closing the laptop for the evening, write one ordinary moment from the day. Keep anything confidential from work out of it. The response is unchanged, one sentence; only the starting event has moved.',
          'For the first week or two, expect to do this on purpose. The old routine felt automatic because the train had rehearsed it a few hundred times, and the laptop has rehearsed it zero times, in a different room. If the laptop keeps reopening in the evening for one more email, it is not a clean ending, and you need a steadier marker, such as putting your work things away in the drawer. One more caution: change only the cue. If you also switch to a new notebook, a new length, and a new goal for the diary at the same time, and it still does not stick, you will have no idea which change was the problem.',
        ],
      },
      {
        title: 'Diagnose the setting before the self',
        paragraphs: [
          'When a good routine stops after a move, a new job, a baby, or a change of season, the instinct is to look inward. The more useful first look is outward: what event used to start this, and does that event still happen here? Very often it does not, and no amount of resolve can rebuild a trigger that your calendar deleted.',
          'Two habits. For any routine that has lapsed, write down the old starting event, the old place, and the old materials, and circle whichever ones have disappeared. Then choose one observable moment in the new schedule to carry the same small response, put the materials there, and give it a fortnight of deliberate repetition before you judge anything about yourself.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Same diary response, a new starting event',
        alt: 'The old routine begins in the evening train seat; the new one begins when the home-work laptop is closed.',
        caption: 'Cover the first half of each line and the second halves are nearly identical: open the notebook, write a sentence. All the change is in the first half, the moment that starts it. That is the windowsill moving, not the plant.',
        items: [
          { label: 'Old commute', detail: 'Sit on the evening train, open the notebook, write a sentence.' },
          { label: 'Home workday', detail: 'Close the laptop for the evening, then use the nearby notebook.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A note about one disrupted routine'],
      steps: [
        'Pick a routine that faded after something in your life changed. Write down the old starting event, where it happened, and what materials were already to hand. Three short lines; this is the old windowsill.',
        'Circle the part that disappeared. Usually it is the event, not the materials or the desire. Then choose one moment in your current days that happens reliably, at a similar point, and is calm enough for the response. Write it as: after [event], I [response].',
        'Keep the response exactly as small as it was. Put its materials at the new starting point tonight, and rehearse the pairing once on purpose, knowing it will feel deliberate for a while.',
      ],
      notice: 'You can say in one sentence what the schedule removed and what now replaces it. The diagnosis is about the setting, and the fix is one moved cue, not a new personality.',
      troubleshooting: 'If your new cue happens only occasionally, or depends on being in the right mood, it is not a cue, it is a hope. Pick a duller, more reliable event: the kettle, the drawer, the door.',
    },
    recall: {
      prompt: 'You used to review your vocabulary cards after your weekly trip to the library, and the library has closed for repairs. What should you look at first?',
      hint: 'Separate the learning you did from the trip that used to start it.',
      answer: 'Look at the trip, not at your commitment. The library visit was the windowsill: it ended somewhere, it put you in a studying frame of mind, and the cards were in your bag. The repairs removed the event, not your interest, and the ten-minute review itself is as possible as ever. So find another weekly event that lands in a similar spot and keep the cards beside it, such as unpacking the weekly delivery or putting the recycling out on its fixed night. Keep the review exactly as it was, ten minutes with the same cards, so that the only thing you have changed is what starts it.',
    },
    quiz: {
      question: 'A short daily sketch routine vanishes after you move house. Which first question is most useful?',
      options: ['Could a longer weekend session replace the daily sketch?', 'Would a different drawing subject revive my interest?', 'Does the event that used to trigger sketching still happen here?'],
      correctIndex: 2,
      explanation: 'A house move is exactly the kind of change that deletes a starting event while leaving the skill and the desire untouched, so the first check is whether the old cue still exists at all. Changing the schedule or the subject rewrites the routine before you know what broke; it is repotting the plant when all it needed was a different windowsill.',
    },
    takeaway: 'When a routine stops after your days change, find the moment that used to start it, move that moment, and leave everything else alone until the new cue has had time to take.',
    sourceNote: 'Habit theory treats recurring context as part of the mechanism. This diary transition is an illustrative adaptation, not a tested schedule repair.',
  },
  {
    id: 'mind-013',
    title: 'Make checking habitual, not sending automatic',
    outcome: 'Let your fingers learn the start of a routine, and make sure what they learn is to look, not to send, so a familiar screen can never carry something to the wrong place.',
    scene: 'Preparing to share a family photograph when the most recent chat is a work group',
    sections: [
      {
        title: 'The familiar tap points to a different recipient',
        paragraphs: [
          'You share photos with your family all the time. Open the picture, tap share, tap the top conversation, done. Your thumb knows the dance. Today the picture is from the weekend picnic and the top conversation, because you were messaging about a deadline an hour ago, is the work group. Your thumb is halfway through the dance before your eyes have read a single name.',
          'The screen looks exactly as it always does. The sequence of taps is identical. What has changed is the meaning of the last tap, because its destination changed, and nothing about the ease of the movement tells you that. This is the price of fluency: a response that has been repeated enough times becomes ready to fire in any situation that looks right, and looking right is not the same as being right. The one detail that varied, the recipient, is precisely the one the fluent sequence skipped.',
        ],
      },
      {
        title: 'Let the cue start an inspection',
        paragraphs: [
          'A pilot who has flown a thousand times still reads the checklist aloud before takeoff. Not because the pilot has forgotten how to fly, but because the checklist is the habit. The routine that experience has made automatic is the act of looking: flaps, fuel, doors. Takeoff itself is never automatic. It waits for the looking to finish and come up clean.',
          'Habit research explains why the pilot\'s approach works. Responses attach themselves to familiar situations, and that attachment is useful when the response is harmless, like reaching for a notebook. For actions with consequences, sharing, deleting, paying, changing something that cannot easily be changed back, the trick is to aim the automatic part at a check rather than at the final move. Make the thing your thumb learns to do first be reading the recipient. The check has to expose whatever can vary. For a photo that means three questions: who is this going to, what does the picture actually show, and did the people in it agree to it being shared? A vague habit like be careful fails this test. It names no question, so it becomes one more thing you say without looking.',
        ],
      },
      {
        title: 'A photo-sharing routine with a stopping point',
        paragraphs: [
          'Rehearse it on paper, where nothing can go wrong. Write Photo of the family picnic at the top of a page. Below it, as a mock recipient label, write Work group. Now run the routine: the first move is to read both lines together. They do not match. The picture is for family and the label says work, so the routine stops here, and you would choose the family group instead. Even then, two checks remain before any real send: what the image shows, and whether everyone in it is happy for it to travel.',
          'Notice what the routine has and has not automated. It has not automated approval; nothing goes anywhere on habit alone. It has automated the arrival of the right questions, at the moment before an action that would be hard to undo. Practise this with made-up names and fictional pictures; there is no reason to open a live share sheet to learn it. The same shape works for formal procedures at work, where it supports the required checks without ever standing in for the actual authorisation.',
        ],
      },
      {
        title: 'Where to put the automatic part',
        paragraphs: [
          'The lesson is not to distrust habits. Habits are what let you do anything at all without exhausting deliberation. The lesson is about placement: the automatic part belongs at the start of a consequential action, as a look, and never at the end, as a send. Fluency in looking is safe. Fluency in sending is how the picnic ends up in the work chat.',
          'Two habits. For any action you perform often and cannot easily reverse, name the one detail that varies and make reading it the first move, every time, even when you are sure. And keep a genuine stopping point in the routine, a place where a mismatch halts you; a check that can never fail is not a check, it is a ritual.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Where the picnic photo should stop',
        alt: 'A picnic photo is paired with Work group; checking the recipient exposes a mismatch and stops the send.',
        caption: 'Follow the path and notice it has no send box at the end. The habit runs from the picture to reading the recipient, finds a mismatch, and halts. That is the pilot\'s checklist coming up wrong: the automatic part was the looking, and the looking did its job.',
        items: [
          { label: 'Picnic photo', detail: 'Intended audience: family; image and permission still need checking.' },
          { label: 'Read recipient', detail: 'The current destination says Work group.' },
          { label: 'Stop the draft', detail: 'The destination does not fit the intended audience.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper only', 'Fictional names and destinations'],
      steps: [
        'Write one made-up consequential action and its intended destination at the top of a page, such as share picnic photo, to family. Keep it fictional; the point is the shape of the check, not the content.',
        'Below it, write a mock confirmation label with a different destination, such as Work group. Do not open a real app or a real share sheet at any point in this exercise.',
        'List the concrete checks the routine must run before anything is sent: does the destination match the intended audience, what does the picture actually show, has everyone in it agreed. Three questions, each with a yes or no answer.',
        'Decide whether your paper example should stop, and write which check failed. If it would have sailed through, change the label until it would not; a routine that never stops has not been tested.',
      ],
      notice: 'The familiar starting move now produces a look that can genuinely halt the action. You have put the automatic part where it is safe and left the send deliberate.',
      troubleshooting: 'If every example you write passes, your check is a ritual rather than a gate. Invent a plausible mismatch, the wrong group or a stranger in the background of the photo, and write down exactly what would make the routine say stop.',
    },
    recall: {
      prompt: 'A checkout screen you use every week has, this time, an old delivery address pre-filled. What should your usual checkout routine make you do?',
      hint: 'The screen is familiar; the destination is wrong.',
      answer: 'The routine should begin with reading, not with the buy button: the item, the total, and the address, every time, including the hundredth time. Today that read finds an address you moved out of last year, so the routine stops the checkout until it is fixed. What it must not do is let a familiar screen carry you to confirm and leave you to notice the problem when the parcel arrives at the old flat. The pilot reads the fuel gauge before every takeoff, not because the plane usually has fuel, but because the one time it does not is the only time that matters.',
    },
    quiz: {
      question: 'Before deleting an old album, which routine best guards against removing the wrong items?',
      options: ['Check how much storage the album occupies.', 'Check the selected album, its intended contents, and whether recovery is available.', 'Check how recently the album was opened.'],
      correctIndex: 1,
      explanation: 'Deleting is hard to reverse, so the check has to expose what can vary: is this the album you meant, does it contain what you think, and can you get it back if not; a mismatch on any of those halts the action. Storage size and last-opened date say something about whether deleting is worthwhile and nothing about whether you have the right album selected, so they cannot stop the wrong deletion.',
    },
    takeaway: 'Teach your hands to look first and send last; a habit aimed at the check can halt a mistake, and a habit aimed at the send cannot.',
    sourceNote: 'This safety framework applies habit theory to ordinary interfaces. It is not a tested sharing protocol or a substitute for required controls.',
  },
  {
    id: 'mind-014',
    title: 'Track opportunities instead of judging a broken streak',
    outcome: 'When a small routine misses a day, work out whether the trigger never came or whether it came and something got in the way, because those two gaps need completely different fixes.',
    scene: 'Reviewing five evenings of guitar practice after putting dinner dishes away',
    sections: [
      {
        title: 'The streak hides two different misses',
        paragraphs: [
          'Your plan is simple: after the dinner dishes go away, you practise one guitar chord change for a few minutes. Monday, done. Tuesday, you eat at a friend\'s, so there are no dishes at home and the moment never arrives. Wednesday, done. Thursday, the dishes go away, you reach for the guitar, and it is wedged behind three storage boxes from the weekend clear-out; you give up. Friday, done.',
          'Open the habit app and it shows three ticks and two crosses, and a streak that broke on Tuesday and again on Thursday. Both crosses look identical. For the purpose of making this plan work, they could not be more different. On Tuesday the starting signal never happened. On Thursday it happened perfectly and a pile of boxes stood between it and your hands. One is a missing opportunity; the other is a blocked one. A tick-box cannot tell them apart, and treating them as the same kind of failure leads you to the wrong repair for both.',
        ],
      },
      {
        title: 'Repetition does not follow one universal deadline',
        paragraphs: [
          'A gardener whose seedling did not sprout does not conclude they are bad at gardening. They check: did I water it, did it get sun, did a slug get there first? Each answer points at a different thing to change. A streak counter is a gardener who records only sprouted or not, and then feels bad about the number.',
          'The research on everyday habit formation supports the gardener\'s approach more than the counter\'s. A well-known study that tracked people building new daily routines found that the time it took varied enormously between people and between behaviours; there is no magic number of days after which anything becomes automatic. The same study found that missing a single opportunity did not noticeably derail the process. That is reassuring, and it is not a blanket promise that any pattern of misses is harmless. The practical move is to treat each miss as information about the setup rather than as a verdict on your character. Did the cue happen? Did the response follow? If not, what stood between them? Those three questions tell you what to change. Resetting an imaginary counter to zero tells you nothing.',
        ],
      },
      {
        title: 'Read the five-evening record',
        paragraphs: [
          'Go back over the week with the gardener\'s questions. Five planned evenings. Three times the cue came and you practised. Once the cue came and you did not, Thursday. Once the cue never came at all, Tuesday. So the honest count is four opportunities, three taken. These are numbers from a made-up diary, not research measurements, and three out of four is not a score for how strong the habit is. It is a description of what happened.',
          'Each gap now suggests its own fix. Thursday says: keep the guitar where you can reach it, which has nothing to do with motivation and everything to do with boxes. Tuesday says: either accept that this is a home-dinner routine and let eating-out nights go, or pick a second realistic cue for evenings away. Neither evening calls for a punishment session to make up for it. You simply return at the next opportunity, make the one adjustment, and watch whether it changes what happens. And you keep writing down the conditions, not just whether a box got ticked, because the conditions are the only part that can teach you anything.',
        ],
      },
      {
        title: 'What a streak cannot see',
        paragraphs: [
          'Streaks are motivating until they break, and then they are demoralising in exact proportion to how motivating they were. Worse, they are blind to the one distinction that matters for repair. A missed day caused by a missing cue is not a lapse at all; the plan never got its chance to run. A missed day with the cue present is the plan failing in a specific, fixable place.',
          'Two habits. Record the cue and the response as separate columns, so that absent and blocked never collapse into one cross. And when you see a blocked day, ask what physically stood between the signal and the action before you ask anything about yourself; it is usually a box, a battery, or a missing pencil, and none of those is a character flaw.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'What happened on five planned evenings?',
        alt: 'Three evenings included practice, one included the cue but blocked access, and one had no home-dinner cue.',
        caption: 'Look at the two short bars, because they are the whole lesson. A streak app would draw them as one bar labelled missed. Here they are split: one evening the signal came and boxes got in the way, and one evening the signal never came at all. Different bars, different fixes. Invented diary counts.',
        unit: 'planned evenings',
        items: [
          { label: 'Practiced', detail: 'Monday, Wednesday, Friday.', value: 3 },
          { label: 'Cue, no practice', detail: 'Thursday: guitar blocked by storage boxes.', value: 1 },
          { label: 'No cue', detail: 'Tuesday: dinner elsewhere.', value: 1 },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Recent recollections, or the fictional diary above'],
      steps: [
        'Before you count anything, write the cue and the response for one small routine as two separate things: after X, I do Y. If you cannot name the cue, that is already your answer to why the routine is patchy.',
        'For the last several planned occasions, mark each one as cue present, cue absent, or honestly unknown. Do not reconstruct a flattering version; unknown is a perfectly good entry.',
        'For each occasion where the cue was present, write whether the response followed and, if not, what physically got in the way. A box, a dead battery, a missing pencil. Be concrete; be careful here means nothing.',
        'Pick one obstacle from the list and decide the single change that removes it, then write down the next real occasion when the cue will come so you know when to look.',
      ],
      notice: 'Your record explains two kinds of gap instead of lumping them into one failure. You can point at the Thursday boxes and the Tuesday dinner out and see that they need different things from you.',
      troubleshooting: 'If you cannot remember what happened on past evenings clearly enough to classify them, do not guess. Start a fresh two-column record from tonight; a week of honest data beats a month of reconstructed streak.',
    },
    recall: {
      prompt: 'Your reading routine runs after the bus ride home, and yesterday you walked instead. The app shows a broken streak. What does the miss actually tell you?',
      hint: 'Ask whether the starting event happened at all.',
      answer: 'It tells you the cue was absent, and nothing more. The bus is the dishes: the signal that starts the reading never arrived, so the plan never got a chance to fail. That is the gardener\'s seedling that was never planted, not one that died. The question it raises is a design question, not a discipline one: is reading a bus-day routine you are content to skip on walking days, or do walking days need their own cue, such as reading for ten minutes when you first sit down at home? Either answer is fine. What the miss cannot support is the conclusion that a cue which did appear failed to work, because it did not appear.',
    },
    quiz: {
      question: 'A drawing cue occurred as planned, but the pencil case was missing. What change targets that record?',
      options: ['Put the materials at the cue location before the next opportunity.', 'Add another reminder at the same cue.', 'Shorten the drawing task to leave more time for searching.'],
      correctIndex: 0,
      explanation: 'The cue worked and the obstacle was physical access, so the repair is physical: put the pencils where the cue happens. It is the Thursday guitar and the boxes. Another reminder addresses a noticing problem you did not have, and a shorter task still begins with the same search for the same missing pencils.',
    },
    takeaway: 'Record whether the cue came and what happened next as two separate facts; a missing signal and a blocked one look identical on a streak and need opposite repairs.',
    sourceNote: 'Lally and colleagues studied self-reported everyday routines. This diary is invented; opportunity tracking is an application, not their automaticity measure.',
  },
  {
    id: 'mind-015',
    title: 'Name a feeling without deciding someone else\'s motive',
    outcome: 'Catch the moment a sentence about how you feel quietly turns into a verdict about why someone else acted, and pull the two apart so you can respond to what actually happened.',
    scene: 'Feeling disappointed when a friend cancels a board-game evening by message',
    sections: [
      {
        title: 'A cancellation becomes a verdict',
        paragraphs: [
          'A friend texts at four o\'clock: sorry, cannot make games night after all. You had been looking forward to it since Monday. You start typing a reply and the first words out are: you obviously do not care about spending time with me. Your thumb hovers over send.',
          'Read that sentence back. It contains no feeling. It contains a theory about the inside of your friend\'s head, stated as fact, built on an eleven-word text that gave no reason at all. The cancellation is real; you can point at it. The not caring is something you added, and the message does not contain it. Pulling the two apart is not the same as pretending the evening is fine. It just means you describe what you have, a cancelled plan and a sinking feeling, without decorating it with a motive you have not been told.',
        ],
      },
      {
        title: 'A feeling word describes your experience',
        paragraphs: [
          'A weather report says it is raining. It does not say the sky is being spiteful. One statement is about what is happening to you; the other is a story about intent, and it adds nothing you can check. When you are getting wet, the useful sentence is the first one, because it tells you to find an umbrella rather than to argue with a cloud.',
          'Psychologists use the term affect labeling for putting an emotional experience into words, and there is laboratory research suggesting that doing so has measurable effects in certain tasks. Keep that research in proportion: it does not make your chosen word a diagnosis, it does not explain why the feeling arose, and it does not promise the feeling will go away once named. What labeling does is give you a true sentence. I feel disappointed is about you and is simply correct. They do not value me is about them and is a guess. Watch for the hybrid, too: I feel ignored sounds like a feeling and smuggles in a claim about what the other person did. When a feeling word has a verdict folded inside it, ask what happened and what you felt, separately. Disappointed, irritated, flat, uncertain: any ordinary word that fits well enough will do. There is no prize for the perfect emotional category.',
        ],
      },
      {
        title: 'Keep the event and the question available',
        paragraphs: [
          'Try writing it privately before you reply. The message says tonight is cancelled. I feel disappointed because I expected company and had been looking forward to it. That is two true sentences and nothing else. The reason for the cancellation stays blank, because your friend has not filled it in, and a blank is more honest than a guess. From there, a reply is easy: that is a shame, I was looking forward to it; want to pick another evening? Or you decide to call someone else and have a different kind of night.',
          'None of this means swallowing a real problem. If this is the fourth cancellation in two months, the issue is reliability, and that deserves a conversation, one built on the actual pattern of four dates rather than on a theory about caring. Naming your feeling does not oblige you to tolerate anything, and it does not oblige you to share more than you want. What it does is stop one sentence doing two jobs at once, reporting your evening and convicting your friend, when it only has evidence for the first.',
        ],
      },
      {
        title: 'Why the verdict arrives so fast',
        paragraphs: [
          'A disappointment with no explanation attached is uncomfortable, and the mind fills the gap quickly with the nearest available story. They do not care is nearest because it is simple and because it turns a sad feeling into an angry one, which is easier to hold. The speed of the story is not evidence for it. It is evidence that you are disappointed.',
          'Two habits. When you notice a sentence about another person\'s motive forming, check whether they have actually told you that motive; if not, move it to a separate line marked guess. And keep a short list of ordinary feeling words you can reach for without effort, because the point of the exercise is a good-enough true word, found quickly, before the verdict gets sent.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two sentences after the same cancellation',
        alt: 'They do not care assigns a motive; I feel disappointed that tonight is cancelled states a feeling and event.',
        caption: 'Ask of each sentence: what would I need to know to be sure this is true? The left one needs access to someone else\'s mind. The right one needs only your own evening and your own chest. Neither sentence explains why the friend cancelled; only the friend can.',
        items: [
          { label: 'Motive claim', detail: 'They do not care about spending time with me.' },
          { label: 'Feeling + event', detail: 'I feel disappointed that tonight\'s game is cancelled.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A private note', 'A mild example or the fictional cancellation'],
      steps: [
        'Write down what observably happened, with no motive attached. Use the fictional games-night text if you would rather not use your own week. The test: could a stranger reading the message agree with your sentence?',
        'Add one ordinary feeling word about your own experience: disappointed, flat, annoyed. If a guess about the other person sneaks in, do not delete it; move it to its own line and label it guess. Seeing the two lines apart is the whole exercise.',
        'Draft one practical next step, a question or a plan, without sending it. Check that it does not demand the other person prove how they feel about you; a question about rescheduling passes, a question about whether they even wanted to come does not.',
      ],
      notice: 'Your note now holds three separate things: an event you can point at, a feeling that is simply yours, and an honest blank where the reason belongs. The weather report has no spiteful sky in it.',
      troubleshooting: 'If the example you chose turns out to be more painful than you expected, stop and switch to the fictional cancellation. This is a wording exercise, and it should stay light; it is not a place to process something heavy.',
    },
    recall: {
      prompt: 'A tutor corrects a date in your essay, and the thought arrives: they think I am hopeless. How could you rewrite that privately?',
      hint: 'Name the correction and your own reaction, not the inside of the tutor\'s head.',
      answer: 'Something like: the tutor corrected the date in paragraph two; I felt embarrassed when they pointed it out. Two sentences, both checkable. The event is on the page in red ink. The embarrassment is yours and nobody can dispute it. What has been removed is hopeless, which is a theory about the tutor\'s whole opinion of you, extracted from a single corrected date; it is the spiteful sky. The rewrite also leaves the useful thing available: the correction itself, which you can check and learn from. The verdict version left you nothing to do except feel bad.',
    },
    quiz: {
      question: 'A friend replies later than you expected. Which note separates experience from motive?',
      options: ['I feel that they are deliberately avoiding me.', 'They replied late, which confirms that the friendship matters less to them.', 'I felt uneasy while waiting; I do not yet know why the reply was late.'],
      correctIndex: 2,
      explanation: 'The third note reports a feeling that is simply yours and leaves the reason as an honest blank, which is all the late reply actually supports. The first puts I feel in front of a motive claim, and the grammar does not turn a verdict into a feeling. The second treats one late reply as confirmation of a theory it was never evidence for.',
    },
    takeaway: 'Say what happened and what you felt as two separate true sentences, and leave the other person\'s reason blank until they fill it in; a feeling is yours to name, a motive is theirs to give.',
    sourceNote: 'The affect-labeling paper provides research background. This private wording exercise is educational, not treatment, diagnosis, or a promised change in mood.',
  },
  {
    id: 'mind-016',
    title: 'Try an interpretation that still fits the comment',
    outcome: 'When a small comment stings more than its words deserve, find a reading that drops the sting but keeps the practical point, so you fix the real thing instead of defending against an imagined one.',
    scene: 'A friend reading a bean-salad recipe asks when the beans should be added',
    sections: [
      {
        title: 'A recipe question feels like a personal judgment',
        paragraphs: [
          'You type up your bean-salad recipe and send it to a friend who asked for it. Twenty minutes later: when do the beans go in? Six words, no punctuation, and your face goes hot. What you hear is: you cannot even explain a salad. You open the recipe to defend it and discover that the ingredients list says beans and the method goes straight from chop the vegetables to serve. The beans never appear. Your friend was not judging you. They were standing in their kitchen holding a tin with nowhere to put it.',
          'Two things are true here and they need to stay separate. You felt embarrassed; that is real and it is yours. The recipe is missing a step; that is real and it is on the page. The third thing, the sweeping verdict about your ability to explain anything, is neither in the message nor on the page. It arrived with the embarrassment and attached itself to the question, and it is the only part of the whole episode that does not survive a second look.',
        ],
      },
      {
        title: 'Reappraisal changes the meaning you assign',
        paragraphs: [
          'Imagine a stranger bumps your shoulder on a crowded platform. First reading: how rude. Then you see the white cane. Same bump, same shoulder, and the meaning has changed completely, along with how you feel about it. Nothing about the event moved. Your interpretation did, because a fact you had missed came into view.',
          'Psychologists call that move cognitive reappraisal: reconsidering what a situation means rather than wrestling with your reaction after it has arrived. In the standard model of emotion regulation it sits early in the sequence, at the point where meaning gets assigned, which is different from putting on a calm face once the feeling has already formed. For the recipe, the reappraised reading is plain: my friend is following the method and hit a gap. The discipline is that the new reading has to fit the evidence at least as well as the old one. They secretly think the recipe is perfect would feel nicer and is supported by nothing. There is no problem would be comfortable and false, because the beans really are missing. A good reappraisal keeps the inconvenient fact and drops only the conclusion that fact never supported.',
        ],
      },
      {
        title: 'Answer the request that is actually present',
        paragraphs: [
          'With the verdict gone, the reply writes itself. You are right, I missed that step in the method. I will add the beans just before the serving instruction. Then you open the recipe and actually fix it, so that the next person who follows it does not end up holding a tin. What began as a referendum on whether you should ever share a recipe again has become a one-line edit.',
          'None of this requires believing your friend is a saint, or that every criticism you ever receive is fair. If a comment comes wrapped in an insult, the insult is a separate thing and you can deal with it separately. Reappraisal is not forced cheerfulness and it is not a licence for other people to treat you badly. In an ordinary case like this one, its only job is to make the missing step easy to talk about, without pretending the step was there all along.',
        ],
      },
      {
        title: 'The two ways a reinterpretation goes wrong',
        paragraphs: [
          'A reappraisal can fail by being too flattering or too dismissive, and both failures share a cause: they stop fitting the facts. The flattering version invents approval nobody expressed and leaves the beans out of the recipe. The dismissive version declares the comment meaningless and does the same. Each one protects your feelings by sacrificing the useful information, which is a bad trade for a salad and a worse one for anything that matters.',
          'Two habits. When a comment stings, write down its literal words first, before any interpretation, and ask what those words actually request. And test any new reading against the same question you would ask of the old one: what in the message supports this? If the answer is nothing, you have swapped one unsupported story for another.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Keep the recipe question concrete',
        alt: 'A friend asks when beans are added; the writer acknowledges an omitted step and offers to revise the method.',
        caption: 'Read the writer\'s line and notice what it does not contain: no apology for being hopeless, no defence of the recipe, no guess about what the friend really thinks. It names the gap and the fix. The friend\'s last line shows what the question was always about.',
        items: [
          { label: 'Friend', detail: 'When do the beans go in?' },
          { label: 'Writer', detail: 'That step is missing from my written method. I will add the instruction before the serving step.' },
          { label: 'Friend', detail: 'Thanks. That was the part I could not follow.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'A mild comment or the fictional recipe exchange'],
      steps: [
        'Copy out the exact words of the comment, nothing more. No tone, no guessed motive, no emphasis the writer did not put there. The literal words are the evidence, and everything else is interpretation.',
        'Below them, write the reading that made the comment feel bigger than its words. Be honest; you cannot test a story you refuse to state. For the recipe: you cannot explain anything properly.',
        'Underline what the comment actually establishes, a missing step, and write what it leaves unknown, the friend\'s overall opinion of you. The second list is where the sting lives, and it is empty of evidence.',
        'Draft a new reading that keeps the real problem and drops the verdict. Check it against the words: is there anything in the message that supports it? If you had to invent praise or deny the gap to make it work, it fails the same test the old reading failed.',
        'Write the reply that answers the concrete request. Leave it as a draft; the exercise is in the writing, not the sending.',
      ],
      notice: 'Your new interpretation still contains the thing that needs fixing. You have changed the meaning of the comment without changing the facts, which is the only kind of reappraisal that lasts.',
      troubleshooting: 'If your reinterpretation makes the problem vanish or conjures approval out of six words, it has gone too far. Narrow it until it says only what the message says, plus a reasonable guess about why someone would send it.',
    },
    recall: {
      prompt: 'Someone looking at your hand-drawn route sketch asks which entrance it uses. How could you interpret and answer that?',
      hint: 'A missing label does not have to become a judgement about whether you can draw maps.',
      answer: 'Read the literal words: which entrance. That is a person trying to use the sketch who has reached a point where it does not tell them what they need. The reading that fits is that the entrance is unlabelled, and the fix is to check which one you meant and write it on. The reading that does not fit is that they think the whole sketch is useless, or that you are bad at this; nothing in a four-word question supports either, just as nothing in when do the beans go in supported a verdict on recipe-writing. Label the entrance, leave their broader opinion as the unknown it actually is, and move on.',
    },
    quiz: {
      question: 'A reviewer asks for an example in your explanation. Which interpretation preserves the request?',
      options: ['They need a case that shows how the idea works; I can add one.', 'They probably agree with everything and are just being polite.', 'The explanation must be unusable because an example was requested.'],
      correctIndex: 0,
      explanation: 'The first reading fits the literal request and gives you something to do: add an example. The second invents approval the reviewer never expressed, the flattering failure. The third turns a single request into a verdict on the whole piece, the dismissive failure dressed as humility. Both of those drop the one useful fact in the comment, which is that an example is wanted.',
    },
    takeaway: 'Write down the literal words, drop the verdict they never contained, and keep the problem they did; the interpretation that survives is the one that fits the evidence and leaves you something to fix.',
    sourceNote: 'Gross\'s process model distinguishes reappraisal from other strategies. The recipe dialogue is a nonclinical teaching example, not a tested emotional intervention.',
  },
  {
    id: 'mind-017',
    title: 'Change the situation before the same frustration returns',
    outcome: 'Spot a small irritation that keeps happening for a practical, fixable reason, and propose a change to the setup with the people involved, instead of rehearsing how to endure it more gracefully.',
    scene: 'Two flatmates repeatedly plan different activities at the same shared table',
    sections: [
      {
        title: 'The argument starts before either person speaks',
        paragraphs: [
          'After dinner you carry your sketchbook and pencils to the big table in the shared flat. A minute later your flatmate arrives carrying a half-built thousand-piece puzzle on a board, heading for the same table. Nobody said anything earlier. You both stand there. One of you feels pushed out of a space you had already claimed. The other feels accused of something for simply walking into their own kitchen. This has happened four evenings out of the last seven.',
          'Each time, you have tried to handle it better. Sound less irritated. Give way more quickly. Do not take it personally. Each time, the collision happens anyway, because the thing causing it is not either person\'s mood. It is that two plans for one table are invisible until both plans arrive with their materials. Managing your reaction more skilfully leaves that structure exactly where it was, ready to produce the same scene tomorrow.',
        ],
      },
      {
        title: 'Regulation can begin upstream',
        paragraphs: [
          'If a kitchen drawer bangs your hip every time you walk past it, you can practise not flinching. Or you can move the drawer\'s contents and stop leaving it open. The second option is less heroic and it works. It changes the thing that produces the flinch rather than your response to it. Most repeated frustrations have a drawer somewhere in them.',
          'The standard model of emotion regulation has a name for the drawer option: situation modification. You alter some part of the situation before or while the feeling is forming, rather than changing how you interpret it or how you show it afterwards. The flatmate problem has an obvious drawer. It is not a clash of personalities. It is the fact that two plans for one surface stay private until they physically collide. Two rules keep the fix honest. It has to be something within your power to change, and it has to respect that the table is shared. You cannot quietly decide the table is yours after dinner. You can ask whether a small shared note about who wants the table, and when, would help. It would let both of you see a clash early enough to sort it out while it is still a conversation rather than a stand-off.',
        ],
      },
      {
        title: 'Make the competing plans visible earlier',
        paragraphs: [
          'The proposal is tiny. A sticky note on the fridge, or a line in the flat chat: drawing after dinner tonight; puzzle later? Your flatmate can say fine, or suggest swapping the order. Or they can explain that the puzzle cannot be moved without wrecking it, in which case you have learned something that changes the plan. The negotiation now happens at six o\'clock over the fridge, not at eight o\'clock over a table covered in two people\'s things. A workable arrangement might be alternate evenings, or a portable board for the puzzle, or nothing more formal than the note itself. It does not need a booking system.',
          'Be clear about what the change does and does not do. It removes the surprise, which was the fuel. It does not guarantee you will agree. It does not make your frustration on a bad evening somehow illegitimate. After a week, look at whether the clashes got easier to resolve. If nobody reads the note, the question is what signal both of you would actually notice, not whether the idea was good. And if the real issue turns out to be a deeper disagreement about who gets the shared space, that deserves a direct conversation. Better labelling is not a substitute for it.',
        ],
      },
      {
        title: 'Where to look for the drawer',
        paragraphs: [
          'Recurring friction nearly always has a structural piece. A missing bit of information, an unclear owner, an ambiguous time, a thing that lives in the wrong place. People reach for self-control because it feels like the mature response, and because changing the setup requires asking someone. But a frustration that comes back on schedule is telling you about the schedule, not about your character.',
          'Two habits. When the same annoyance returns a third time, stop working on your reaction and describe the situation as if you were a stranger. What did each person know, and when? The gap in that description is the drawer. And frame the fix as a request to the people who share the space. A change you impose will be resented into failure. A change you propose can actually be agreed.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'When do the table plans become visible?',
        alt: 'Without a shared note both activities arrive together; with an agreed note the flatmates can resolve the overlap beforehand.',
        caption: 'Look at the timing in each line, not the outcome. On the left, the two plans meet for the first time at the table, with materials in hand. On the right, they meet earlier, as words, while there is still room to adjust. Nothing here says who gets the table; it only moves the moment they find out.',
        items: [
          { label: 'Plans stay private', detail: 'Drawing materials and puzzle arrive at the table together.' },
          { label: 'Plans shared first', detail: 'An overlap is discussed before either setup occupies the space.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['A private draft', 'A mild recurring inconvenience'],
      steps: [
        'Pick an irritation that has happened at least three times. Describe it in plain, external terms, what happened and in what order, with no guesses about why anyone did what they did. If the word always or never appears, rewrite it as a count.',
        'Find the practical gap in that description: a time nobody stated, an owner nobody named, a location nobody agreed, a piece of information one person had and the other did not. That gap is the drawer that keeps banging your hip.',
        'Draft the smallest change that closes the gap, and write beside it who has to agree before it can be used. If the answer is nobody, check again; shared space nearly always means shared consent.',
        'Write one thing you will look at after a single trial to judge whether it helped, such as whether the clash was discussed before anyone sat down. Then either keep the draft or raise it with the people involved, as a request.',
      ],
      notice: 'Your proposal changes what happens before the disagreement, not how politely you survive it. The drawer is closed; nobody has had to practise not flinching.',
      troubleshooting: 'If the change needs authority you do not have, over the room, the schedule, or someone else\'s habits, phrase it as a question, not a rule. Would it help if we... is a proposal; from now on we... is an announcement, and announcements about shared space tend to start the argument they were meant to prevent.',
    },
    recall: {
      prompt: 'A shared games controller is often unavailable because nobody knows who has it at any given moment. What upstream change could you propose?',
      hint: 'Target the missing information without turning it into an accusation about who keeps taking it.',
      answer: 'The drawer here is information: the controller\'s location is known only to whoever last picked it up. So the fix is to make that location visible, not to find a culprit. Propose to the group a fixed return spot, a shelf or a basket, or a two-word note in the shared chat when someone borrows it. That lets anyone see availability before they go looking, which is the moment the frustration currently begins. Ask rather than decree, because the controller belongs to everyone and a rule nobody agreed to will be ignored. Then see after a week whether the hunt has stopped; if it has not, ask what signal people would actually notice.',
    },
    quiz: {
      question: 'Which action changes a recurring handoff situation rather than only your reaction to it?',
      options: ['Practise sounding neutral each time the handoff is unclear.', 'Privately reinterpret every unclear handoff as well intended.', 'Agree on a field stating who has the shared item and when it comes back.'],
      correctIndex: 2,
      explanation: 'The agreed field removes the missing information that creates the confusion in the first place, so the next handoff starts from a different situation; that is moving the drawer. Sounding neutral and reinterpreting the handoff are both ways of flinching more gracefully, and they have their uses, but the information is still missing and the next handoff will be just as unclear.',
    },
    takeaway: 'When the same frustration comes back on schedule, find the practical gap that produces it and propose closing it with the people who share the space, before you spend another evening practising composure.',
    sourceNote: 'Situation modification comes from the process model. The shared-table proposal is an original everyday example, not a tested conflict-resolution method.',
  },
  {
    id: 'mind-018',
    title: 'A steady voice does not settle the whole issue',
    outcome: 'Keep three things apart after a difficult interaction: how you came across, how you actually felt, and what still needs doing, so a calm conversation does not quietly stand in for a solved problem.',
    scene: 'Speaking calmly to a shop about shoes delivered in the wrong size',
    sections: [
      {
        title: 'The call sounded calm',
        paragraphs: [
          'The shoes arrive a size too small. You call the shop, explain the mismatch in a level voice, and ask how to return them. The person on the line is pleasant. The call lasts three minutes and ends with them promising to email instructions. You hang up and notice that you are still irritated, and that there is still a box of wrong shoes on the floor, and that nothing about the call changed either fact.',
          'It is tempting to treat the smooth phone call as the end of the episode. It was not. Three separate things happened and only one of them is finished. You expressed yourself calmly; that is done. You still feel annoyed; that is just true. The return is not arranged; that is a task, and it is waiting. Collapse the three into one impression of a call that went well, and the task disappears behind the impression until you trip over the box next week.',
        ],
      },
      {
        title: 'Expression and experience can differ',
        paragraphs: [
          'A duck gliding across a pond looks serene. Underneath, its feet are paddling hard. Nobody watching from the bank can tell how hard from the glide, and the duck does not become calm by looking calm. The surface and the effort beneath it are two different things, and the surface is the only one anyone else can see.',
          'Emotion researchers draw the same line. Expressive suppression is the technical name for holding back an outward display; reappraisal is changing what you take a situation to mean. Studies comparing them find that they have different consequences, and in particular that damping down the display does not reliably damp down the feeling. A steady voice on the phone tells an observer nothing about which process was running inside you. This is not an argument that every feeling should be aired on the spot. Restraint was exactly right on that call; the shop assistant needed a clear question, not your afternoon. The point is narrower. Composure is not evidence that the feeling has gone. You are entitled to say I was calm and I am still annoyed in the same breath, and you are not entitled to look at a colleague\'s equally calm face and conclude they are fine.',
        ],
      },
      {
        title: 'Check the remaining task separately',
        paragraphs: [
          'After the call, write three lines. I explained the size problem calmly. I still feel irritated about the whole errand. I am waiting for the return instructions. The third line is the one that matters practically, and it does not require the second line to be resolved first; you can be annoyed and organised at the same time. Put the shoebox, the order number, and the delivery note together so that when the email arrives you can act on it in two minutes instead of hunting.',
          'If the call had ended with something unresolved, a disagreement about who pays for postage say, that goes on a fourth line, because politeness is not agreement and a pleasant tone on both sides can leave a dispute exactly where it was. You can decide later whether another conversation is needed. None of this prescribes how you should have felt or performed; nobody has to glide perfectly. It is about keeping an accurate record of three different things that a single word like fine would blur together.',
        ],
      },
      {
        title: 'Why the blur happens',
        paragraphs: [
          'Handling an interaction well feels like an achievement, and it is one. The trouble is that the feeling of having done well arrives at the end of the call and spreads over everything nearby, including the unfinished errand and the irritation you are still carrying. The smooth surface of the duck gets mistaken for a still pond.',
          'Two habits. After any interaction that took some composure, write what you said, what you feel, and what is still open as three separate lines, and look at the third one before you file the episode under handled. And when you catch yourself reading someone else\'s calm as contentment or agreement, ask them instead; their feet may be paddling, and the only way to know is to look below the waterline, which from the bank you cannot do.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'After a calm return enquiry',
        alt: 'During the call the mismatch is explained steadily; afterward irritation remains and return instructions are still pending.',
        caption: 'Read the three entries as three different kinds of fact. The first is what anyone on the call could hear. The second is something only you can report, the paddling feet. The third is a task with a next step. A single tidy impression of the call would have swallowed the last two.',
        items: [
          { label: 'During the call', detail: 'The delivered size does not match my order.' },
          { label: 'After the call', detail: 'I still feel irritated about the unfinished errand.' },
          { label: 'Remaining task', detail: 'Wait for and follow the shop\'s actual return instructions.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A private note', 'A mild interaction or the fictional shoe call'],
      steps: [
        'Write down what you said or did on the outside, in plain terms, without assigning it a meaning: I explained the size problem in an even voice. This is the glide, the part an observer could have seen.',
        'On a separate line, write how you actually feel now, if you want to record it. Irritated, flat, relieved, nothing much. This is the paddling, and nobody else gets a vote on it.',
        'On a third line, write the practical question that is still open, or write none remains. If one remains, add its next step and where the relevant bits, the box, the order number, now live.',
      ],
      notice: 'A calm interaction and an unfinished task now sit side by side in one honest record. Neither one has been allowed to stand in for the other.',
      troubleshooting: 'If you notice yourself writing about what the other person probably felt, stop and cross it out. You have their surface and nothing else; return to your own lines and the facts you both agreed.',
    },
    recall: {
      prompt: 'A teammate sounds composed at the end of a difficult discussion. Can you take it that they agree with the decision that was reached?',
      hint: 'Agreement and controlled expression are different claims, and only one of them is visible.',
      answer: 'No. You are standing on the bank watching a duck. The composed voice tells you they chose not to display whatever they feel, which is a reasonable choice in a meeting, and it tells you nothing about whether they agree, whether they are frustrated, or whether they have concerns they decided to hold. The only way to find out is to ask: is there anything about this you are not comfortable with, or anything that still needs doing? Treating their calm as consent is how a decision gets recorded as unanimous and then quietly fails three weeks later.',
    },
    quiz: {
      question: 'A call sounded calm, but you still feel annoyed and you are waiting for instructions. Which record is accurate?',
      options: ['Calm call; frustration resolved; instructions pending.', 'Controlled tone; annoyance remains; instructions pending.', 'Annoyance remains, so the entire call must have failed.'],
      correctIndex: 1,
      explanation: 'Three separate facts, three separate entries: the tone was controlled, the feeling is still there, the task is still open. The first option lets the calm surface rewrite the feeling into resolved, which is the duck mistaken for a still pond. The third runs the error backwards, treating a leftover feeling as proof the call achieved nothing, when it achieved exactly what it set out to.',
    },
    takeaway: 'After a difficult exchange, record what you showed, what you feel, and what is still open as three different facts; composure settles the first and says nothing about the other two.',
    sourceNote: 'The linked suppression study distinguishes emotion processes. This example makes no diagnosis and does not recommend expression or suppression in every situation.',
  },
  {
    id: 'mind-019',
    title: 'Move attention while keeping a return condition',
    outcome: 'During an ordinary wait, put your attention on something you can actually do, while leaving a written promise to return to the thing you are waiting for, so redirecting never slides into forgetting.',
    scene: 'Waiting for a bicycle repair shop to confirm collection while repeatedly reopening the same message',
    sections: [
      {
        title: 'Refreshing is not changing the answer',
        paragraphs: [
          'The bike shop texted this morning: we will let you know by four whether it is ready for collection. It is half past one. You have opened that message eleven times. It still says by four. You cannot book the collection, you cannot plan the evening around it, and each reread leaves you a little more annoyed about the waiting and no closer to the bike.',
          'There is a real difference between two things that feel the same. Monitoring is watching for a reply that could arrive at any moment and that you need to act on quickly. Rereading is looking at words that have not changed and will not change until the shop decides. The first can bring you new information. The second only keeps the frustrating part of the afternoon in front of your eyes. The message has nothing more to give you until four, and your attention is the only thing being spent.',
        ],
      },
      {
        title: 'Redirection changes the focus, not the dependency',
        paragraphs: [
          'You put a cake in the oven for forty minutes. You do not stand at the oven door watching it rise; you set a timer and go and do the washing up. The cake is still in the oven. The timer is what lets you walk away without the cake becoming a thing you forgot. Attention goes to the dishes; responsibility stays with the timer.',
          'The emotion-regulation model calls the walking-away part attentional deployment: choosing which part of a situation gets your attention. It is a legitimate move, and it does not involve pretending anything. The bike is not ready. The shop has done nothing wrong. The dependency is real and stays real while you look elsewhere. What separates redirection from neglect is the timer: a written condition that says when you will check again and what you will do if nothing has arrived. Without it, going and doing something else is just hoping you remember. With it, it is a plan. One honest limit: if the situation needs live monitoring, or you would have to act within minutes of a reply, walking away does not fit. This is about a nonurgent wait inside an agreed window, which is most waits.',
        ],
      },
      {
        title: 'Give the waiting item a place to stay',
        paragraphs: [
          'Write the timer down. Bike collection unconfirmed. Shop said by four. If nothing by four, ring them once. Leave the phone where you will hear a call, because the shop might ring rather than text. Now the waiting has an address, a deadline, and a next step, and none of those live in your head any more.',
          'Then pick a task whose next step does not depend on the bike. Sorting the shelf of books you have been meaning to sort is a good one: it is physical, it has visible progress, and nothing about it requires knowing whether a brake cable has been fitted. At four, do exactly what the note says. If the shop texts at half past two, the plan changes with the new information, and that is fine; the note was never a vow to wait until four, only a promise not to forget. Redirecting let the shelf get sorted. The note made sure the bike did not get lost in the process.',
        ],
      },
      {
        title: 'Why the reread is so tempting',
        paragraphs: [
          'Checking feels like doing something about the wait. It has the shape of action, a tap, a glance, a small jolt of hope, and it costs nothing visible. But it cannot change the message, and each check renews the irritation without renewing the information. The afternoon becomes about the delay rather than about anything you could finish.',
          'Two habits. When you notice yourself reopening an unchanged message, ask whether a reply could actually have arrived since last time; if not, you are rereading, and the useful move is a timer. And write the return condition before you turn to the other task, not after, because a plan made while you are already absorbed in the bookshelf is a plan you will not make.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'A bicycle wait with a return point',
        alt: 'Record collection as unconfirmed, sort books while the call remains audible, and follow up at four if no reply arrives.',
        caption: 'The first and last boxes are the timer: a note made before you walk away and a specific action when it goes off. The middle box is where your attention actually goes. Four is a made-up agreed time, not advice about how long to wait, and a reply arriving early changes the plan.',
        items: [
          { label: 'Record the dependency', detail: 'Collection is unconfirmed; shop expects to reply by four.' },
          { label: 'Independent task', detail: 'Sort books while the expected call remains audible.' },
          { label: 'Return condition', detail: 'At four, follow up once if no reply has arrived.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['A nonurgent pending item or the fictional bicycle example', 'A note'],
      steps: [
        'Write down what you are waiting for and ask, honestly, whether anything could usefully be checked right now. If the answer is no, you have confirmed that rereading would be rereading, and the rest of this exercise applies.',
        'Write the return condition: a time or event, consistent with whatever was agreed, and the single thing you will do if nothing has arrived by then. That line is the oven timer, and it is what makes walking away responsible.',
        'Choose a small task that does not need the missing answer, and make sure the channel the reply will use, a call, a text, a doorbell, is one you will still notice while doing it.',
        'Do the first step of the task. Put the waiting note somewhere you will see it at the return point, on the kettle, as a phone alarm, wherever your eyes will be at four.',
      ],
      notice: 'Your new task genuinely does not depend on the reply, and the pending item still has a written next contact. Attention moved; responsibility stayed on the note.',
      troubleshooting: 'If you keep drifting back to the message anyway, the return reminder is not vivid enough; set an alarm rather than relying on a note. And if something about the situation changes, the shop calls early or the plan for the evening shifts, revise the note rather than ignoring the new facts out of loyalty to the old plan.',
    },
    recall: {
      prompt: 'A friend has not yet confirmed where you are meeting this evening, but you could spend the time now getting ready the book you are lending them. What does responsible redirection look like?',
      hint: 'Keep the location question alive, and pick work that does not need its answer.',
      answer: 'Set the timer first. Write when you will check for the location again and what you will do if you still have nothing, say, message them at five. Keep the phone where you will hear it. Then go and find the book, check it is the right one, put it by the door; none of that needs to know whether you are meeting at the café or the park. What responsible redirection does not look like is treating the location as settled: do not set off anywhere, do not plan a route, do not tell anyone else where you will be. The cake is in the oven; you can do the washing up, but you cannot serve it yet.',
    },
    quiz: {
      question: 'While an agreed, nonurgent reply is pending, which plan redirects attention without dropping the issue?',
      options: ['Do an independent task and keep a specific follow-up condition.', 'Reread the old exchange whenever the delay comes to mind.', 'Start another task and rely on remembering to return sometime later.'],
      correctIndex: 0,
      explanation: 'The first plan has both halves: attention goes to something useful, and a written condition says when to come back and what to do. That is the oven timer. Rereading keeps attention on words that cannot change and spends the afternoon on the delay. Starting another task with only a vague intention to return is walking away from the oven and hoping; sometimes the cake survives, and the plan deserves no credit when it does.',
    },
    takeaway: 'Write the return condition first, then move your attention to something you can finish; the note holds the responsibility so that your head does not have to.',
    sourceNote: 'Attentional deployment is part of the emotion-regulation process model. This ordinary waiting plan is educational, not treatment or a universal coping rule.',
  },
  {
    id: 'mind-020',
    title: 'Change your response when the situation changes',
    outcome: 'Match how you handle a frustration to what you can actually do about it right now, and switch approaches when new information makes a different move possible.',
    scene: 'Responding to an unclear room change for a community music rehearsal',
    sections: [
      {
        title: 'The same frustration can need different actions',
        paragraphs: [
          'The rehearsal has moved. The message from the organiser names the building and nothing else: no room, no entrance, no floor. Irritating, but at this moment there is an obvious thing to do, which is ask. You send the question. Then the organiser goes quiet for two hours, and the obvious thing to do has evaporated; asking again cannot make an answer arrive faster. Later still, the reply comes, the room is confirmed, and it turns out the entrance is on the far side of the building from where you usually park. Now the thing to do is change your route.',
          'Three moments, one steady background hum of mild annoyance, and three completely different situations underneath it. In the first you lack information someone can give you. In the second you lack information nobody can give you yet. In the third you have the information and face a practical problem. The feeling barely changed across the afternoon. What you could usefully do changed each time, and a response that fitted at two o\'clock would have been useless at three and wrong at five.',
        ],
      },
      {
        title: 'Flexibility means checking the fit',
        paragraphs: [
          'A driver meeting fog slows down. A driver meeting a closed road turns round. A driver meeting a red light waits. Nobody would call the first driver inconsistent for not slowing down at the red light; they would call them sensible for reading the road. The skill is not having one way of driving. It is noticing what kind of obstacle this is and picking the response that matches.',
          'Researchers who study emotion regulation have given that skill a name, regulatory flexibility, and the idea is exactly the driver\'s: choose and revise your approach according to the situation and to how it is working, rather than crowning one strategy as universally best. Three questions do the work. What is changeable right now? What does the situation actually need from me? And what would tell me that my current approach has stopped fitting? Each of the ordinary tools has a situation it suits. Asking suits missing information that someone can supply. Turning your attention elsewhere, with a return time, suits a wait you cannot shorten. Changing the practical plan suits a confirmed logistical problem. Rethinking an interpretation suits the moment a fact gets tangled up with a story about yourself or someone else. None of them asks you to pretend the afternoon was pleasant.',
        ],
      },
      {
        title: 'Follow the information through the rehearsal example',
        paragraphs: [
          'Two o\'clock: ask, specifically. Which room, and which entrance should we use? That is the only move with any chance of changing the situation, so make it well. Three o\'clock, no reply: stop asking. Write down when you will check again, and mark up the rhythm in your own score, which needs no room number. Five o\'clock, reply arrives: stop treating the location as unknown, because it is not. Look up the new entrance, work out the walk from the car park, leave ten minutes earlier.',
          'The feedback loop matters as much as the choices. If the reply names the room but still skips the entrance, the right move is to ask about the entrance, not to abandon asking and try some new coping method at random; the approach was right, the answer was incomplete. If the new room turns out to be up two flights with no lift and you cannot manage stairs, that is not a reinterpretation problem. Say the concrete access need and ask about an alternative. Flexibility is in service of the actual obstacle. It is never a requirement to stay quiet, nor to find a cheerful angle on everything.',
        ],
      },
      {
        title: 'The two failures of rigidity',
        paragraphs: [
          'One rigid driver keeps slowing down for everything, including the closed road, because slowing down worked in the fog. The other rigid driver changes manoeuvre every thirty seconds whether or not the road has changed. The first is loyalty to a method; the second is restlessness dressed as adaptability. Both ignore the one thing that should decide the response, which is the road in front of them.',
          'Two habits. When a frustrating situation lasts more than a few minutes, ask periodically what has changed since you last chose a response, and whether that change opens or closes an option. And before switching approach, name what the switch is for; if you cannot point to new information or clear feedback that the old approach stopped working, you are not adapting, you are fidgeting.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Let new information change the next action',
        alt: 'Ask about an unclear rehearsal room, work on a score while the reply is pending, then adjust travel after confirmation.',
        caption: 'Read the three boxes as three different roads, not three stages of one plan. Fog, red light, diversion. The response in each box is chosen by what is possible at that moment, and the arrival of the reply is what moves you from the second box to the third. Sequence only; no fixed durations.',
        items: [
          { label: 'Room unclear', detail: 'Ask for the room and entrance.' },
          { label: 'Reply pending', detail: 'Keep a return point; work on the available score.' },
          { label: 'Location confirmed', detail: 'Check the entrance and revise the arrival route.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'A mild situation or the rehearsal example'],
      steps: [
        'Write down what is frustrating in one line, then underneath it list the relevant facts in two columns: known and missing. The missing column tells you whether asking is even possible.',
        'Mark each missing item with who could supply it and whether they can right now. Anything you could change yourself goes in a third column. This is reading the road: fog, red light, or diversion.',
        'Pick the response that fits what the columns show: ask, change the plan, rethink an interpretation that has got tangled with a fact, or turn away with a return time. Write one sentence on why this one fits now.',
        'Write the single piece of feedback that would make you change that response: a reply arriving, a deadline passing, the answer turning out to be incomplete. Deciding this in advance is what separates adapting from fidgeting.',
      ],
      notice: 'Your plan says why this response fits the present moment and names the signal that would retire it. It is a driver reading the road, not a driver committed to one speed.',
      troubleshooting: 'If the only goal you can write down is to stop feeling annoyed, the exercise has nothing to work with. Replace it with a practical need the response should serve, getting to the right room on time, and choose from there; the annoyance usually eases as a side effect of having something to do.',
    },
    recall: {
      prompt: 'A delivery has been delayed. An hour ago you could only wait for information; now the courier has offered you a choice of three collection days. What changes?',
      hint: 'A decision that was not available before is available now.',
      answer: 'The road has changed from red light to junction. An hour ago, with nothing to decide, turning your attention elsewhere with a return time was the right move, and continuing it would have been fine. Now there is a decision on the table that only you can make, and the fitting response is to stop waiting and start comparing: which of the three days actually works, what else is on, whether one needs rearranging. Keeping yourself distracted at this point would be the driver still slowing for fog after it has lifted, missing the one moment when action was both possible and useful. The feeling of waiting may linger. The situation has stopped being one.',
    },
    quiz: {
      question: 'You receive the clarification you were waiting for. What does flexibility suggest?',
      options: ['Keep the waiting strategy, because it helped earlier.', 'Change strategies repeatedly to avoid settling on one.', 'Reassess the task and act on the information now available.'],
      correctIndex: 2,
      explanation: 'New information changed what is controllable, so the right move is to look at the road again and respond to what is now there. Keeping the waiting strategy is loyalty to a method after its situation has gone. Switching constantly is the other rigidity, restlessness mistaken for adaptability; flexibility is about fit, not frequency of change.',
    },
    takeaway: 'Read the situation before choosing how to handle it, and read it again whenever something changes; the right response is the one that fits what you can do now, not the one that worked an hour ago.',
    sourceNote: 'The regulatory-flexibility framework emphasizes context and feedback. This rehearsal example is nonclinical and does not identify one universally best strategy.',
  },
  {
    id: 'mind-021',
    title: 'Put open task states somewhere you can inspect',
    outcome: 'When an errand has several items in different states, write the states down in a small table so you can look up where you are instead of re-searching your own memory.',
    scene: 'Preparing library returns with four books in different location and due-status combinations',
    sections: [
      {
        title: 'Which book did you already look for?',
        paragraphs: [
          'Four library books, one errand. The blue novel is due today and already sitting in your bag. The atlas is due today and nowhere to be found. The photo essay is on the shelf but not due for a fortnight. The poetry collection is also missing, but it is not due either. You have opened the library app three times and walked past the shelf twice. Each time you arrive at the shelf you cannot remember whether you were looking for the atlas or the poetry. You cannot remember whether you already checked here.',
          'The trouble is not that four titles are too many to remember. It is that each title carries two facts, where it is and whether it is due. Those two facts decide a different action for each book. Eight facts and four decisions, all shifting as you find things. All held in a head that is also trying to remember whether the kettle is on. The errand feels bigger than it is. You are storing the state of it in the one place that keeps overwriting itself.',
        ],
      },
      {
        title: 'External storage can carry the changing state',
        paragraphs: [
          'A surgeon does not try to remember which of forty instruments have been returned to the tray. There is a count sheet. A nurse ticks each one off, and at the end everyone looks at the sheet rather than at their memory. The sheet does not make anyone smarter. It takes a job that memory does badly, tracking a changing state across many items. It gives that job to paper, which does it perfectly.',
          'Psychologists call this cognitive offloading: using something outside your head to hold or process what would otherwise have to be held inside it. For the library errand, the outside thing is a three-column table. Title, what I have checked, what to do next. Now the question did I already search the shelf for the atlas has an answer you can read rather than reconstruct. One caution that the surgeon\'s sheet also obeys: writing a thing down does not make it true. The due dates have to come from the actual library account. The locations come from actually looking in the bag and on the shelf. If you are not sure whether you checked somewhere, the honest entry is unsure, not probably. The table is valuable because it keeps verified facts and open questions in view. It does not replace the checking.',
        ],
      },
      {
        title: 'Use the record to choose the next search',
        paragraphs: [
          'Fill in the four rows. Blue novel: in bag, due, ready to return. Photo essay: on shelf, not due, leave it out of today\'s trip. Atlas: missing, due, search next. Poetry: missing, not due, keep listed so it does not vanish. Laid out this way, the errand has one urgent job, the atlas. It has one finished job and two that can wait. Five minutes ago all four felt equally urgent and equally unfinished.',
          'The table has the shape of two questions crossed: found or missing, due or not due. The cell that is both missing and due is where you go next. When you find the atlas, update its row immediately. Then the table never sends you back to a search you have already done. And keep the table small. A record of every place you have ever looked becomes its own clutter. What belongs on it is the current state and the next action. Yesterday\'s guesses get crossed out rather than left to be mistaken for facts.',
        ],
      },
      {
        title: 'What offloading does and does not do',
        paragraphs: [
          'The table moves the state out of your head. That is all it does, and it is a lot. It does not verify anything; a confident wrong entry is worse than a blank. It does not teach you the material. You will not remember the books better for having listed them. And it does not stay accurate on its own. A table nobody updates after the atlas turns up will send you to look for a book that is already in the bag.',
          'Two habits. When an errand has more than three items, or any item has more than one fact attached, stop trying to hold it. Draw the table before you take another step. And every time you learn something, found it, checked that shelf, not due until the twelfth, write it into the row before you do anything else. The moment you turn to the next book is exactly the moment the last one gets overwritten.',
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: 'Location crossed with due status',
        alt: 'Found and due: blue novel; found and not due: photo essay; missing and due: atlas; missing and not due: poetry.',
        caption: 'Find the cell that is both missing and due; that is the only book that needs searching for today. The other three cells each have a different, calmer action attached. In real life the due column comes from the library account, never from memory.',
        items: [
          { label: 'Found + due', detail: 'Blue novel: already in the return bag.' },
          { label: 'Found + not due', detail: 'Photo essay: leave it out of this return task.' },
          { label: 'Missing + due', detail: 'Atlas: the next book to locate.' },
          { label: 'Missing + not due', detail: 'Poetry: record it for later attention.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'A small personal errand or the fictional books'],
      steps: [
        'List three or four items from one errand, and beside each one write the question or two that decide what to do with it: where is it, is it due, has it been confirmed. If you cannot name the question, you cannot know when the item is done.',
        'Rule three columns: item, what I have actually checked, next action. Fill in only what you have verified, and write unknown or not yet checked wherever that is the truth. The blank cells are the table being honest.',
        'Read the table and pick the one action it makes most urgent. Do it, or rehearse doing it if this is a paper exercise.',
        'Update that item\'s row before you look at anything else. The test of a good table is that it never sends you back to a shelf you have already searched.',
      ],
      notice: 'You can point at the next unresolved item without replaying the whole errand in your head. The surgeon reads the count sheet; you read the table.',
      troubleshooting: 'If the table starts filling with history, every shelf checked, every date looked up, you have turned a count sheet into a diary. Keep the current state and the next action in the table, and put background detail somewhere else or cross it out.',
    },
    recall: {
      prompt: 'You are comparing repair quotes from three shops and cannot remember which one actually confirmed it could collect the item. What would you write down?',
      hint: 'Record the evidence and the status, not just the shop names.',
      answer: 'Draw the count sheet. One row per shop, with three columns: what they actually said, in their words or as close as you can get; whether collection is confirmed, declined, or unanswered; and the next thing you need to ask them. The middle column is the one memory keeps corrupting, because a friendly email and a confirmed collection feel the same a day later and are not. Keep unanswered as its own honest state, distinct from both yes and no. Then when a reply comes in, update that row before opening the next message, so the table stays ahead of your memory rather than behind it.',
    },
    quiz: {
      question: 'You make a table of missing books and the searches you have completed. What has the table itself achieved?',
      options: ['An independent check that every entry matches the bag and the shelves.', 'An available record of the task state, whose entries still need verification.', 'Evidence that the search history can now be recalled without notes.'],
      correctIndex: 1,
      explanation: 'The table holds the state outside your head, which is exactly its job, and it holds whatever you wrote in it, true or not; the checking is still yours to do. It cannot verify itself any more than the surgeon\'s count sheet can look in the tray. And offloading moves information out of memory rather than strengthening memory, so the table proves nothing about what you could recall without it.',
    },
    takeaway: 'Give the changing state of an errand to paper, which holds it perfectly, and keep the checking for yourself, which paper cannot do; write only the current state and the next action, and update the row before you move on.',
    sourceNote: 'The cognitive-offloading review supplies the concept. The library record is an original organizational example, not a measured memory benefit.',
  },
  {
    id: 'mind-022',
    title: 'Put the needed explanation beside its object',
    outcome: 'When a diagram and the words that explain it live in different places, move the short, necessary words next to the thing they describe, so your eyes stop commuting between the two.',
    scene: 'Reading a community-center study map whose check-in instruction is separated from reception',
    sections: [
      {
        title: 'The map sends your eyes away from the route',
        paragraphs: [
          'You are studying a practice map of a community centre before a workshop. The map shows three boxes connected by arrows: A, then B, then C. Turn the page and a legend explains them. A is the entrance. B is reception, where visitors collect a pass. C is the workshop room. To understand the route you read the map and hold B in your head. You flip to the legend, find B, read collect a pass, flip back. Then you try to attach that meaning to the right box before it fades.',
          'Notice what you were trying to learn and what you ended up doing. You wanted to know where to go. What you spent your effort on was maintaining a running match between letters and meanings across two pages. That matching is real work, and it is not route knowledge. It is a tax the layout imposed on the way to the route knowledge. When the legend has six entries instead of three, the tax quietly eats the lesson.',
        ],
      },
      {
        title: 'Separated information can add a joining task',
        paragraphs: [
          'Imagine assembling flat-pack furniture where the picture of each step is on one sheet and the words for each step are on another sheet in the box. Every step, you look at the picture, look at the words, and work out which words go with which picture. The furniture is no harder than before. The instructions have simply split one job into three. Good instruction sheets put the three words next to the picture they belong to. The joining job disappears.',
          'Researchers who study how instructional materials are laid out have looked closely at this. Sometimes a learner has to combine two sources of information that only make sense together, a diagram and its explanation. Moving back and forth between them adds processing that contributes nothing to understanding. The name for it is the split-attention problem. The remedy is selective integration. Put the short, necessary words where they are needed, and only those. Collect your pass here belongs beside reception. You cannot understand why reception is on the route without it. A paragraph about when the building was built does not belong on the map at all. Integrate everything and the labels crowd each other. Then the route is harder to read than it was with the legend.',
        ],
      },
      {
        title: 'Follow the map without memorizing its legend',
        paragraphs: [
          'Redraw the sketch. Entrance, with an arrow to Reception, which now carries the words collect your pass here, with an arrow to Workshop. Follow the arrows once and the whole route makes sense on a single glance. You walk in. You stop at reception because that is where the pass is. You continue to the workshop. The explanation sits on the place it explains instead of floating behind a letter on another page.',
          'The test of a good revision is whether it removes a lookup, not whether it adds words. If two labels now collide, shorten one or spread the boxes out. Do not shrink the type until nothing is legible. And keep separate anything that is optional or that you already understand. A note you do not need is just another thing to read past. One honest limit: this is a sketch for learning how to lay out a diagram. It is not navigation advice for any real building, and real access instructions come from the venue.',
        ],
      },
      {
        title: 'Where the split hides',
        paragraphs: [
          'Split attention is everywhere once you look for it. A chart with a colour key in the corner, so you read the bar, find the colour, find the key, find the label, and come back. A recipe with the quantities in a table at the top and the method underneath, so every step sends you scrolling up. A form whose field labels are in one column and whose help text is three screens away. In each case the information is all present. The layout charges you a commute to use it.',
          'Two habits. When you find yourself flipping between two parts of a page to understand one thing, that flip is the signal. Ask what short phrase, placed where you are looking, would let you stop. And when you make a diagram for someone else, write the one thing they must know about each object directly on it. Put everything else somewhere they can choose to visit.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Attach check-in to reception',
        alt: 'A schematic route runs from the lower-left entrance to lower-middle reception, then upper-right workshop; the pass instruction sits at reception.',
        caption: 'Follow the arrows from entrance to workshop and notice that you never needed to look anywhere else. The one sentence you had to know is written on the box it belongs to. A fictional top-view sketch for learning layout, not a map of any real building.',
        items: [
          { label: 'Entrance', detail: 'Start here.', x: 16, y: 73, shape: 'box' },
          { label: 'Reception', detail: 'Collect your pass here.', x: 52, y: 73, shape: 'box' },
          { label: 'Workshop', detail: 'Continue after check-in.', x: 82, y: 23, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The fictional map or a personal study diagram'],
      steps: [
        'Sketch three boxes, entrance, reception, workshop, joined by arrows in that order. Label them only with letters, A, B, C, and put the meanings in a separate legend at the bottom of the page.',
        'Now try to follow the route using the sketch as drawn. Count the number of times your eyes have to leave the map for the legend and come back. That count is the tax.',
        'Move just the pass instruction up beside reception, keeping the words short enough that the route and the other labels still have room. Leave the entrance and workshop meanings where they were if they are obvious from the arrows.',
        'Follow the route again and name the specific lookup that disappeared. If you can name it, you understand what the revision did and why it was not simply adding text.',
      ],
      notice: 'The one explanation you actually needed is now read at the moment you need it, on the object it belongs to. The furniture instructions have the words next to the picture.',
      troubleshooting: 'If the sketch gets crowded, do not shrink everything to fit. Remove the optional prose first, then spread the boxes out. Crowding is the sign that you integrated something that should have stayed in the legend.',
    },
    recall: {
      prompt: 'A study diagram labels a cable as D, and a page later explains what that cable is for. What revision would help a beginner?',
      hint: 'Keep the two pieces that depend on each other together, without dragging in everything else.',
      answer: 'Put a short purpose label, three or four words, directly on the line for cable D, so a beginner reading the diagram learns what the cable does at the moment they see it. That is the flat-pack picture with its words beside it. Leave the long background explanation on its own page, where it can be read once rather than commuted to on every glance. The learner now connects meaning to the right line without carrying the letter D across a page turn, and the diagram stays uncluttered because only the necessary phrase moved.',
    },
    quiz: {
      question: 'Which diagram edit most directly removes unnecessary matching?',
      options: ['Put the necessary arrow explanation beside the arrow it describes.', 'Move the explanation farther away to make the diagram look cleaner.', 'Repeat the full chapter beside every object in the drawing.'],
      correctIndex: 0,
      explanation: 'Placing the necessary words on the arrow joins two things that only make sense together, so the reader stops commuting between them; that is the whole fix. Moving the explanation further away makes the page tidier and the commute longer. Pasting the entire chapter beside every object swaps one problem for another: nothing is far away now, and nothing is readable either.',
    },
    takeaway: 'Write the one thing a reader must know about each object directly on it, keep everything optional somewhere else, and judge the result by the lookups it removes rather than the words it adds.',
    sourceNote: 'Instruction-format research supports attention to separated, interdependent information. The venue sketch is original and schematic, not a tested building map.',
  },
  {
    id: 'mind-023',
    title: 'Inspect a worked solution before guessing the method',
    outcome: 'When you can see an answer but not how anyone got there, study a fully worked example step by step, say why each step exists, and then try a fresh problem with the answer covered.',
    scene: 'Learning unit-price reasoning from a fictional notebook purchase for a club',
    sections: [
      {
        title: 'The final answer does not show how to begin',
        paragraphs: [
          'A worksheet problem: a club pays 48 pounds for six identical notebooks, and the question is what four would cost at the same price each, with no delivery charge. The answer key says 32 pounds. You stare at 48, 6, 4, and 32 and try to find an operation that turns the first three into the last one. Forty-eight minus six minus four? No. Forty-eight times four over six? That works, but you are not sure why, and the next problem on the sheet uses different numbers and the trick stops fitting.',
          'This is what it looks like to search for a method by trial and error. You can spend a whole session doing it, land on the right number twice by luck, and finish knowing nothing you can use tomorrow. The answer key tells you where to end. It leaves out every decision along the way, and the decisions are the thing you were meant to learn. A worked example puts those decisions back in. It shows not just which numbers appear but why each calculation is the useful one at that moment.',
        ],
      },
      {
        title: 'Reduce search while the procedure is unfamiliar',
        paragraphs: [
          'Watching a cook make an omelette teaches you more than being handed a plate with an omelette on it. The plate tells you what success looks like. The watching tells you that the pan is hot before the eggs go in, that you stir and then stop stirring, that you fold when the top is still slightly wet. Each of those is a decision you would have had to discover by ruining eggs. The demonstration lets you see them instead.',
          'Research on how people learn procedures draws the same distinction. A beginner facing an open problem spends most of their attention choosing between possible moves, and very little noticing the relationship that would make one move obviously right. A worked example removes the choosing and leaves the relationship exposed for inspection. For the notebooks the relationship is a constant price per notebook. Divide 48 by 6 to get 8 pounds for one. Multiply 8 by 4 to get 32 for four. The 8 is the whole point: once you know what one costs, any quantity is one multiplication away. The example assumes identical notebooks at a steady price with nothing added; it is a model of a shop, not a claim about every real till.',
        ],
      },
      {
        title: 'Explain the steps, then change the numbers',
        paragraphs: [
          'Now say out loud why each step is there. Dividing by six strips away the quantity you were given, leaving the price of a single notebook. Multiplying by four applies that single price to the quantity you were asked about. If all you memorise is divide then multiply, you will divide by the wrong number the moment a problem is phrased differently. Label the middle value in words, price of one, and the arithmetic stays tied to its meaning.',
          'Then test yourself on a changed case before the method goes cold. Five notebooks cost 30 pounds at a constant price each; what do two cost? Cover the next sentence and work it. One costs 6, so two cost 12. If that came easily, the relationship has moved into your head. If it did not, go back and find which step you could not explain, because that is the one you were copying rather than understanding. The worked example is scaffolding. It is meant to come down once you can stand without it, and copying its final number into the next problem is a sign it has not come down yet.',
        ],
      },
      {
        title: 'When examples help and when they stop helping',
        paragraphs: [
          'Worked examples earn their keep when the procedure is new. Once you can explain every step, reading more examples becomes passive; you nod along and learn nothing further, which is why the covered-answer attempt matters so much. The sequence is: inspect, explain, attempt, check the reasoning, not just the number.',
          'Two habits. When an answer key gives you a result with no route, do not reverse-engineer it by guessing operations; find or write out a full worked version first, with each step labelled by what it means. And after any worked example, immediately try a problem with different numbers and the answer hidden, because the gap between following a solution and producing one is where the learning actually happens.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Keep the meaning of the intermediate £8',
        alt: 'Six notebooks cost £48; dividing by six gives £8 per notebook; multiplying by four gives £32.',
        caption: 'Look at the middle box before the last one. The £8 is not an answer to anything on the worksheet, and it is the most important number on the page: it is the price of one, and once you have it, four or forty or four hundred notebooks are one step away. Invented prices, steady unit price, no extras.',
        items: [
          { label: 'Six cost £48', detail: 'Known total for identical notebooks.' },
          { label: 'One costs £8', detail: '£48 divided by six gives the reusable unit price.' },
          { label: 'Four cost £32', detail: 'Four times £8 applies that price to the requested quantity.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'The two fictional notebook examples'],
      steps: [
        'Read the six-notebook solution slowly and write, in words, what the intermediate 8 represents. Not the number; the meaning. If your sentence does not contain the phrase one notebook, keep going.',
        'Explain to yourself why dividing comes before multiplying in this problem, and what would go wrong if you did them the other way round. This is the omelette demonstration: you are watching the decision, not the plate.',
        'Cover the second worked case completely. Five notebooks cost 30 pounds; work out what two cost on your own, labelling the middle value as you go.',
        'Check your answer against 12, and then check your route against the method: did you find the price of one first? A right answer by a different accident is not a pass.',
      ],
      notice: 'You can name the relationship, a steady price per item, that makes each step the obvious one. The method has stopped being a sequence of operations and become a reason.',
      troubleshooting: 'If a number in your working has no label you can say out loud, stop and give it one before continuing: 48 is the total, 6 is the count, 8 is the price of one. Unlabelled numbers are where guessing creeps back in.',
    },
    recall: {
      prompt: 'A beginner can paste a spreadsheet formula that divides a total by a count, but cannot say why the division is there. What support would help?',
      hint: 'Show the meaning of the intermediate value before you take the example away.',
      answer: 'Give them the omelette demonstration, not the plate. Show one fully worked case with every quantity labelled in words: this cell is the total spent, this is the number of items, and the division produces the amount per item. Ask them to explain the division back to you in their own words, then hand them a changed case, a different total and count, with the formula hidden, and have them build it. A pasted formula is the answer key with the route removed; it works until the first time the layout changes, and then the beginner has nothing to fall back on because they never saw the decisions.',
    },
    quiz: {
      question: 'You cannot see how a worksheet calculation starts. Which solution best exposes the unfamiliar procedure?',
      options: ['A polished final answer with the intermediate lines removed.', 'A sequence whose decisions and intermediate values are explained.', 'Several answer variants without an explanation of when each applies.'],
      correctIndex: 1,
      explanation: 'The explained sequence shows the decisions, which is the one thing a beginner cannot reconstruct from the answer alone; that is the cook you can watch. A final answer with the middle removed is the plate, and it leaves you guessing operations until one happens to fit. Several unexplained variants are several plates, and you still do not know when to use which.',
    },
    takeaway: 'Study a worked example for the reasons behind each step, label every intermediate value with what it means, and then prove it has moved into your head by solving a changed case with the answer hidden.',
    sourceNote: 'Cognitive-load research informs worked-example use. The notebook prices and teaching sequence are invented, not measurements from that research.',
  },
  {
    id: 'mind-024',
    title: 'Keep the guidance you need and fade what is redundant',
    outcome: 'Shorten the instructions you have genuinely outgrown, keep the ones you still lean on, and decide which is which by what your hands can actually do, not by how familiar the words feel.',
    scene: 'Replacing a familiar paper-fan folding script with a short prompt while retaining help',
    sections: [
      {
        title: 'The instructions now describe moves you already know',
        paragraphs: [
          'The first time you made a paper fan, the instructions were a lifeline. Fold a strip in from one edge. Turn the sheet over. Fold back the same width. Turn again. Keep alternating until you run out of paper. You read each line, did the thing, read the next. By the fifth fan, something has changed. You are still reading every line, and the reading has become its own small chore running alongside the folding, because your hands already know which way the next fold goes before your eyes reach the sentence that says so.',
          'That does not mean the instructions have become useless. One line still earns its place: keep the widths even, because your folds do still drift wider as you go. And if someone handed you a diagram for a double fan with a pleated hinge, you would want the whole script back, every word of it. The question is not whether to have instructions. It is which instructions, for this task, at this point in your learning.',
        ],
      },
      {
        title: 'Useful support depends on existing knowledge',
        paragraphs: [
          'Stabilisers on a child\'s bicycle are exactly right for the first weeks. A few months later, the same stabilisers stop the child from leaning into turns, and the thing that was helping is now the thing in the way. Nobody concludes that stabilisers are bad. They conclude that this child, on this bike, has grown past them, and they take them off while keeping a steadying hand on the saddle for the first wobbly ride.',
          'Learning researchers have documented the same pattern in instruction and named it the expertise-reversal effect: guidance that genuinely helps a beginner can lose its benefit, and even get in the way, as the learner\'s knowledge grows. The mechanism is simple. Someone who already knows a step has to read and process an explanation of it anyway, and that processing duplicates what they could have supplied themselves. Two cautions follow from the research rather than from common sense. First, the fit is about specific knowledge, not a general label; you can be expert at the alternating folds and a complete novice at the hinge, in the same fan. Second, the test is performance, not feeling. Being bored by the script is not evidence you know the procedure, and recognising every word is not the same as producing the next fold unprompted. The honest test is to cover the detailed instruction, attempt the task, and restore the help wherever an actual error shows you still needed it.',
        ],
      },
      {
        title: 'Try a smaller prompt, not no support at all',
        paragraphs: [
          'So for a fan you have made five times, replace the full script with a single line: alternate direction; keep widths even. Keep the long version within reach, folded over or on the next page, but out of your immediate line of sight so you are not reading it by reflex. Make three or four folds. Look at them. Is the direction right? Are the widths roughly even? If yes, the short prompt is enough and the script can stay folded. If you hesitate about which way the next fold goes, open the script to that line and read it, rather than guessing twice and ruining the sheet.',
          'There is one boundary this lesson must not cross. It is about optional explanations that exist to teach you something. A required check is a different kind of thing, and it stays required however familiar its wording has become. Knowing exactly how to do a procedure proves nothing about whether today\'s target, permission, or conditions are the right ones, and a checklist you have read a hundred times is not a checklist you may skip. Fade the folding script. Never fade the pre-flight check.',
        ],
      },
      {
        title: 'Where the judgement goes wrong',
        paragraphs: [
          'Two mistakes sit on either side of good fading. Keeping every word of the script forever, because it feels safe, turns learning material into clutter and slows the hands that no longer need it. Dropping the script because it feels familiar, before your performance has actually earned that, produces the fan with the uneven pleats and the sigh. Both mistakes come from using feeling as the measure.',
          'Two habits. When an instruction starts to feel redundant, test it instead of trusting the feeling: cover it, perform, inspect the result, and let the result decide. And when you strip guidance down, strip it to a short prompt rather than to nothing, and keep the full version one page away, the way the parent keeps a hand near the saddle.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two levels of support for the same fan',
        alt: 'A novice uses each fold instruction; a learner who can already fold uses an alternating-direction prompt with the script available.',
        caption: 'Notice that the right-hand card does not say no instructions. It keeps one line you still need, widths even, and leaves the door open to the full script. The stabilisers came off; the hand is still near the saddle. These cards describe guidance, not how the fan is built.',
        items: [
          { label: 'Full fold script', detail: 'Fold a strip, turn the sheet, fold back the same width, repeat.' },
          { label: 'Familiar-task prompt', detail: 'Alternate direction; keep widths even. Reopen the script if needed.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Scrap paper', 'The fold instructions above, or a familiar study example'],
      steps: [
        'If you have never made a paper fan, do not start by fading anything. Follow the full script slowly for one complete fan, reading each line as you go. Fading is for a procedure you have actually performed, not one you have read about.',
        'Once you can say the sequence aloud without looking, fold the detailed script out of sight and leave only the short prompt visible: alternate direction; keep widths even. This is taking the stabilisers off.',
        'Make several folds and inspect them honestly for direction and for roughly even width. The inspection, not your confidence, is what tells you whether the short prompt was enough.',
        'If any fold went wrong, reopen the script to exactly that line and read it. Then write down which piece of support you still used; that is the guidance you have not outgrown yet, and it stays.',
      ],
      notice: 'What remains in front of you is a prompt for something you genuinely still need, and the explanation you have outgrown is one page away rather than deleted. Your performance decided the split, not your boredom.',
      troubleshooting: 'If the fan comes out wrong with the short prompt, put the full script back without any sense of failure. Reducing help was never the goal; making a good fan was, and the script is how you learn to do that until you can do it without it.',
    },
    recall: {
      prompt: 'In a spreadsheet, you know the setup steps cold but are learning a new formula. Should both parts get the same detailed guidance?',
      hint: 'Expertise can sit in one part of a task and be entirely absent from the part next to it.',
      answer: 'No, and treating them alike is the expertise-reversal mistake in both directions at once. Keep the full worked explanation for the new formula, with every intermediate value labelled, because that is where you are a beginner and the stabilisers belong. Shrink the setup instructions to a one-line prompt, because your hands already know those moves and reading them in full is just clutter between you and the formula. Then watch your actual performance: if a setup error appears, restore that one instruction, because the error has shown you the prompt was too short. Fit the help to the specific knowledge in each part, and let mistakes, not familiarity, tell you where the fit is wrong.',
    },
    quiz: {
      question: 'You solve familiar examples unaided but need help with new ones. Which support plan fits?',
      options: ['Use equally short notes for familiar and unfamiliar tasks.', 'Reread the full introduction before every familiar problem.', 'Shorten demonstrated redundancy while retaining needed help and required checks.'],
      correctIndex: 2,
      explanation: 'Guidance should match what you have actually shown you can do: short prompts where performance has earned them, full help where it has not, and required checks untouched regardless, since those were never learning material. Equally short notes take the stabilisers off the bike you cannot yet ride. Rereading the full introduction every time keeps them on the bike you can.',
    },
    takeaway: 'Let what your hands can do, not how familiar the words feel, decide which instructions shrink to a prompt and which stay in full; and never let a required check fade just because you have read it before.',
    sourceNote: 'The expertise-reversal source concerns instructional fit. The fan exercise is an original illustration, not a tested claim about paper-folding instruction.',
  },
  {
    id: 'mind-025',
    title: 'Learn a part, then reconnect the journey',
    outcome: 'Break a many-step task into pieces small enough to understand one at a time, without losing track of how each piece hands over to the next, which is the part that actually makes the whole thing work.',
    scene: 'Studying a fictional museum journey with a walk, bus, train transfer, and final walk',
    sections: [
      {
        title: 'Every stage is unfamiliar at once',
        paragraphs: [
          'You are learning a route to a museum in a city you do not know. Walk to a bus stop. Take the bus to the station. Change to a train. Walk from the museum stop to the entrance. Four stages, and every one of them is new. Which stop, which bus, which exit from the station, which platform, which way out at the far end. You read the directions through three times. By the third time the page feels thoroughly familiar. You still could not say what you do when you step off the bus.',
          'The instinct to break it up is right. Four unfamiliar stages at once is too many to hold. Studying one at a time lets you actually look at a single decision. But there is a wrong way to break it up, and it is the obvious way: memorise the names of the four stages as four separate facts. Walk, bus, train, walk. You can recite that list perfectly and remain completely lost at the station. The list has thrown away the only thing that mattered: how finishing one stage puts you in position to start the next.',
        ],
      },
      {
        title: 'Reduce novelty, not the relationships',
        paragraphs: [
          'A pianist learning a long piece does not learn bars one to eight, then bars nine to sixteen, as two unrelated chunks. They practise the hard passage on its own, yes. But they always start a bar early and run a bar past, so the join is rehearsed along with the passage. Chunks that have never been played into and out of fall apart in performance at exactly the seams.',
          'The theory behind this is about how much a learner can hold at once relative to what they already know. Several unfamiliar things that interact with each other are far harder to coordinate than the same things once a few connections are understood. So it makes sense to pick one connection and make it the thing you are studying. The trick is in what you keep in view while you do that. For the station transfer, you study the walk from where the bus drops you to where the train leaves. You do not need the museum\'s entrance instructions at the same moment; they can wait. But you must keep the bus arrival point and the train platform visible on the page. They are the bar before and the bar after. The transfer is only a transfer because of what it connects.',
        ],
      },
      {
        title: 'Put the transfer back into the whole route',
        paragraphs: [
          'When the station route makes sense on its own, run the whole journey through and say every handover aloud. The first walk ends at the bus stop. The bus ends at the station arrival point. The station route leads from that arrival point to the train platform. The train ends at the museum stop, where the last walk begins. Each stage finishes by producing exactly the starting condition of the stage after it. Saying so is how you check that you have the joins and not just the pieces.',
          'The check will sometimes fail, and the failure is useful. Suppose you can describe the station route beautifully but cannot say where the bus actually leaves you. Then the connection is not learned yet, whatever the fluency of the middle part suggests. Go back to that one gap. Do not reread the museum opening hours, which were never the problem. And keep in mind that this is a sketch for practising how to study a route. For a real journey you would check current timetables, step-free access, and the actual exits. A learning diagram can supply none of those.',
        ],
      },
      {
        title: 'The seam is where it breaks',
        paragraphs: [
          'Procedures almost never fail in the middle of a stage. They fail at the handovers, where one part has ended and the next has not quite begun. Stepping off the bus and not knowing which way to turn. Finishing the sauce and not knowing what it goes into. Studying parts in isolation feels productive precisely because it skips the seams. The seams are where you will stand bewildered later.',
          'Two habits. Whenever you study one piece of a longer process, keep the piece before and the piece after visible, even if only as a word at each edge. Name what passes across each boundary. And when you test yourself, test the joins. Not what is stage three, but what does stage two leave you holding, and what does stage three need you to be holding. If those two answers match, the seam is learned.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Keep the handoffs while studying the transfer',
        alt: 'A walk reaches the bus stop, the bus reaches the station, the station connection reaches the train platform, and the train leads to the final walk.',
        caption: 'Read the arrows, not the boxes. Each arrow is a handover: what the box on its left leaves you holding and what the box on its right needs you to be holding. The third box is the one being studied; the arrows into and out of it are the bar before and the bar after. Fictional route showing dependencies, not distances.',
        items: [
          { label: 'Walk to bus stop', detail: 'Supplies the starting place for the bus stage.' },
          { label: 'Bus to station', detail: 'Ends at the arrival point used by the transfer.' },
          { label: 'Station connection', detail: 'Study the path from bus arrival to train platform.' },
          { label: 'Train + final walk', detail: 'Leave the train at the museum stop, then reach the entrance.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'The fictional journey above'],
      steps: [
        'Draw four boxes in a row for the four stages. Under each one, write two short lines: what you are holding when it starts, and what you are holding when it ends. The second line of each box should match the first line of the next; where it does not, you have found a seam you do not understand.',
        'Circle the station connection as the one piece you will study first. It is the most tangled, which is exactly why it gets isolated.',
        'While you study it, keep the bus arrival point written at its left edge and the train platform at its right edge. Explain the connection out loud as a path from the one to the other, never as a free-floating description of a station.',
        'Trace the whole journey from the first box to the last, saying at each arrow what is handed across. If you stumble at an arrow, that arrow is tomorrow\'s study target, not the box beside it.',
      ],
      notice: 'You can explain the piece you focused on and slot it back into the route with its inputs and outputs intact. The passage was practised with a bar on either side, so the join holds.',
      troubleshooting: 'If the four stages feel like four unrelated facts you are reciting, stop adding detail to any of them. Go back to the arrows and write what crosses each one; detail inside a box is useless until the boxes are connected.',
    },
    recall: {
      prompt: 'You have practised one stage of a recipe on its own: making the sauce. What do you have to restore when you cook the whole dish?',
      hint: 'Ask what the stage takes in and what later step uses what it produces.',
      answer: 'The bar before and the bar after. Going in: the sauce needs certain ingredients ready and perhaps something from an earlier step, a stock or a pan of softened onions; if the earlier step has not produced those, the sauce cannot start. Coming out: the sauce is used by a later step at a particular moment, poured over something or stirred into something, and that step is waiting on it. Reciting the sauce steps perfectly tells you nothing about either join, which is why a cook who has only practised the sauce stands in the kitchen with a finished sauce and no idea what to do next. Reconnect it by writing what it receives and what receives it, following the actual recipe.',
    },
    quiz: {
      question: 'You studied a station transfer separately. Which check tests its connection to the rest of the journey?',
      options: ['Recite its label faster than before.', 'Explain what supplies its starting conditions and what follows its result.', 'Remove the adjacent stages so only its definition remains visible.'],
      correctIndex: 1,
      explanation: 'The transfer only exists as a link between a bus arrival and a train departure, so the only test of whether you have learned it as a link is to name both ends; that is checking the seam. A faster label is fluency with a word, not understanding of a join. Removing the neighbours practises the passage with no bar before or after, which is how pieces that sound fine alone fall apart at the station.',
    },
    takeaway: 'Study one hard piece at a time, but always with the piece before and the piece after at its edges, and test yourself on what crosses each boundary, because procedures break at the seams and not in the middle.',
    sourceNote: 'This segmentation framework applies cognitive-load principles. The route is invented and does not establish an optimal sequence for every learner.',
  },
  {
    id: 'mind-026',
    title: 'Hide one step before hiding the whole solution',
    outcome: 'When you can follow a worked solution but freeze on a blank page, cover just one step at a time, so that each mistake points at a specific gap rather than at a vague inability to solve.',
    scene: 'Converting a film duration of two hours and thirty-five minutes into minutes',
    sections: [
      {
        title: 'Following feels easier than starting alone',
        paragraphs: [
          'A film is listed as two hours and thirty-five minutes long. Your planning sheet wants minutes. The worked solution beside you reads: one hour is sixty minutes; two hours are therefore 120 minutes; add the remaining thirty-five to get 155. You read it and nod. Every line is obvious. You could not possibly get this wrong.',
          'Now cover the whole solution and try the next film cold. Suddenly there are four separate things to do at once. Recall that an hour is sixty minutes. Decide to multiply rather than add. Remember that the thirty-five is still waiting. Check the total makes sense. If you stall, or come out with 95 or 4,200, you have learned that you cannot do it yet, and almost nothing about why. Four candidate gaps, one failure, no way to tell them apart. The leap from fully supported to fully unsupported was too big to teach you anything.',
        ],
      },
      {
        title: 'A partial example isolates one demand',
        paragraphs: [
          'Teaching a child to ride a bike, you do not go from holding the saddle firmly to letting go entirely. You loosen your grip a little, so the child balances a bit and you catch the rest. If they wobble, you both know the wobble is about balance, not about pedalling or steering, because those are still being handled. One thing is being tested, so one thing can be learned from.',
          'The same idea in instruction is called a fading scaffold: support comes away gradually, one piece at a time, instead of all at once. Keep the setup and the early reasoning on the page, and hide only one step. Now the learner makes one independent decision, and the feedback is specific to that decision. For the film, leave two hours equals 120 minutes visible and hide only the final line. You have to supply 120 plus 35 equals 155, and say why the thirty-five gets added rather than multiplied. If you write 120 times 35, the error points at one exact place, the relationship between the hours part and the minutes part. It does not point at the hour conversion, because that was given to you. The gap has a name now, and a named gap can be fixed.',
        ],
      },
      {
        title: 'Remove another support when the reason is available',
        paragraphs: [
          'Once that step is solid, loosen the grip again. Try a new film, one hour and twenty minutes, with only one hour equals sixty minutes supplied. You now have to do the multiplication yourself and then the addition: sixty plus twenty, eighty minutes. Then a third film with nothing supplied at all, but with the reference close by so you can check afterwards rather than guess forever.',
          'The trigger for removing the next support is not that you copied the previous answer correctly; copying tells you nothing. It is that you produced the hidden step yourself and can say why it follows. If a gap opens up at any stage, put that one line back and try a fresh example, rather than reaching for the full solution again. The point is independent reasoning with feedback you can act on, not racing to a blank worksheet. And this is about learning scaffolds only. A required operational instruction, a safety step, a mandatory check, is not a scaffold to be faded away because you have grown used to it.',
        ],
      },
      {
        title: 'Why the all-or-nothing version fails',
        paragraphs: [
          'Going straight from worked example to blank page is the most common study pattern and one of the least informative. When it works, you cannot tell which parts you actually understood and which you got by luck. When it fails, you cannot tell which part failed. Either way, the next session starts from the same place as the last one.',
          'Two habits. When a solution seems obvious while visible, cover one line, not all of them, and make yourself produce that line with a reason attached. And treat every error as an address: it tells you where the gap is, and the smaller the hidden step, the more precise the address.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Change how much reasoning is supplied',
        alt: 'One completion task supplies two hours as 120 minutes; a later task supplies only the sixty-minute hour conversion.',
        caption: 'Compare how much is already written in each card. The left one hands you the conversion and asks only for the addition; the right one hands you less and asks for more. The blanks are where your hand goes. The full answers, 155 and eighty, are in the text above.',
        items: [
          { label: 'One missing step', detail: 'Two hours = 120 minutes. Add thirty-five: total ___.' },
          { label: 'Less supplied', detail: 'One hour = sixty minutes. One hour twenty minutes: total ___.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'A spare sheet for covering solutions'],
      steps: [
        'Copy the two-hour-thirty-five-minute setup and the line two hours equals 120 minutes. Cover only the final total with your spare sheet. You are loosening your grip on the saddle, not letting go.',
        'Complete the addition yourself and write one sentence on why the two parts are added together rather than multiplied. The sentence is the test; the number alone could be a lucky guess.',
        'Lift the sheet, check against 155, and if you went wrong, fix that one step and nothing else. The error has an address now.',
        'Try one hour twenty minutes with only the sixty-minute conversion given. Afterwards, write down which piece of information you still needed to be handed. That piece is the support you have not yet outgrown.',
      ],
      notice: 'Any mistake you made attaches to a specific hidden step, not to a general feeling of not being able to do conversions. The child wobbled on balance, and you both know it was balance.',
      troubleshooting: 'If the reduced version stalls you completely, do not reach for the whole worked solution again. Put back one useful line, the one you needed, and try a different set of numbers with that single support restored.',
    },
    recall: {
      prompt: 'You can follow a worked budget calculation line by line, but faced with a blank page you freeze. What intermediate exercise would you build for yourself?',
      hint: 'Keep enough visible to make exactly one decision on your own.',
      answer: 'Loosen the grip one notch. Take the worked budget and cover only its final calculation, leaving every input and every earlier step in view. Produce that last line yourself, with a sentence saying why those particular numbers combine that way. Check it. If it was right and you could explain it, cover the final two lines next time; if it was wrong, you now know precisely which relationship was missing, which the blank page could never have told you. Remove supports one at a time, each one only after you have produced the previous step with a reason, until the blank page is something you arrive at rather than something you are thrown into.',
    },
    quiz: {
      question: 'You completed a partially supplied duration calculation. What justifies covering another line next time?',
      options: ['The complete answer looks familiar on the page.', 'The copied solution is neat and error-free.', 'You produced the hidden step yourself and explained why it follows.'],
      correctIndex: 2,
      explanation: 'Producing the step with a reason is evidence that you no longer need that support, so loosening the grip further is earned. Familiarity is recognition, and recognition is exactly what the visible solution supplies for free. A neat copy proves your handwriting is tidy; the support did all the thinking.',
    },
    takeaway: 'Hide one step, produce it with a reason, check it, and only then hide the next; a small hidden step turns every mistake into an address you can go and fix.',
    sourceNote: 'Fading here is an instructional application of cognitive-load and expertise principles. The duration problems are original examples, not a tested learning schedule.',
  },
  {
    id: 'mind-027',
    title: 'Close the explanation and produce the sequence',
    outcome: 'Find out what you actually know by shutting the source and writing it from memory, then use the gap between your version and the real one to fix exactly what is missing.',
    scene: 'Learning the turn order in a short invented card-game rules sheet',
    sections: [
      {
        title: 'The rules seem obvious while they are visible',
        paragraphs: [
          'A friend has invented a card game and written the turn on a single sheet. Draw a card. Discard one card face up. Move your marker one space. Pass the draw pile to your left. You read it twice. Each step is sensible, each follows from the last, you could explain it to anyone. Then your friend takes the sheet away and asks you to run a turn, and you are suddenly not sure whether you move before you discard or after.',
          'Nothing went wrong with your reading. The page was doing half the work, and you did not notice because it was so easy. While the sheet was in front of you, each next step was already there to be recognised; you never had to produce it. Recognising that move comes after discard, when both words are on the page in that order, is a different act from pulling the sequence out of your own head with the page gone. The first feels like knowing. Only the second is.',
        ],
      },
      {
        title: 'Retrieval is more than looking again',
        paragraphs: [
          'You can read a route on a map ten times and still take a wrong turn the first time you drive it without the map. Someone who has driven it once, even badly, even having to stop and think at the junction, usually does better next time than someone who only ever looked. Looking shows you the road. Driving it makes you find the road, and finding is what gets remembered.',
          'Memory researchers call the act of pulling something out of your head retrieval practice, and they have tested it directly. In studies where people learned passages of text, those who were tested on what they remembered went on to recall more a week later than those who spent the same time rereading, even though rereading often looked better in the first few minutes. That finding is about those conditions and those materials; it is not a guarantee that every kind of memory will respond the same way. But the shape of it holds up well. For the card game, that means closing the whole sheet and writing the turn out. Hiding one word while the rest of the sequence stays visible is still mostly recognition; the neighbours give the answer away. And if you get stuck halfway, leave the gap visible on your page rather than peeking and then pretending the whole thing came from memory.',
        ],
      },
      {
        title: 'Use the mismatch to guide the correction',
        paragraphs: [
          'Say you write draw, move, discard, pass. Open the sheet and compare position by position. First and last are right. The middle two are swapped: discard comes before move. Write the corrected order and, more importantly, write the one relationship you got wrong, in words. You discard before you move. That sentence is the repair. There is no need to tear up the attempt because two steps traded places; two out of four were right, and you now know exactly which two were not.',
          'Then do it again later, sheet closed, and see whether the repaired relationship held. A few honest limits. In an actual game night, glancing at the rules is perfectly sensible; the closed-book version is a learning exercise, not a ban on references. And producing the turn order correctly does not mean you understand the strategy, the exceptions, or what happens when the draw pile runs out. Say what this attempt actually tested: four steps in order. Nothing more, and nothing less.',
        ],
      },
      {
        title: 'Why rereading feels better and works worse',
        paragraphs: [
          'Rereading is pleasant. Every line confirms what you already half-remember, so the whole experience is one of smooth agreement. Retrieval is uncomfortable, because it keeps showing you what is not there yet. The discomfort is the information. A session that felt effortless usually taught you less than one where you sat frowning at a blank page for a minute before the answer surfaced.',
          'Two habits. Whenever a page seems obvious, close it and try to write what it said; obviousness is the feeling of recognition, and you want to know what survives without the prompt. And when you check your attempt, write down the specific relationship you got wrong, not just the right answer, because the relationship is what you will need to produce next time.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The invented turn to reconstruct',
        alt: 'The sequence is draw a card, discard one face up, move the marker one space, and pass the draw pile left.',
        caption: 'Look at this once, then cover it completely before you try to write the four steps. Covering the whole thing is the point; leaving three boxes visible and hiding one would hand you the answer through its neighbours. Come back only to compare.',
        items: [
          { label: 'Draw', detail: 'Take a card from the draw pile.' },
          { label: 'Discard', detail: 'Place one card face up.' },
          { label: 'Move', detail: 'Move your marker one space.' },
          { label: 'Pass', detail: 'Give the draw pile to the player on your left.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The practice turn above'],
      steps: [
        'Read the four-step turn and make sure each step makes sense to you. Understanding comes first; you cannot retrieve what you never took in.',
        'Cover the text and the diagram completely, then write the sequence from memory. If you get stuck, leave a gap or a question mark. Do not peek and then carry on as if you had remembered.',
        'Open the reference and compare step by step. Mark what you left out, what you put in the wrong place, and anything you invented that was never there.',
        'Write the one relationship you got wrong as a plain sentence, such as discard comes before move. Then pick a time later today or tomorrow to close the sheet and try again.',
      ],
      notice: 'You can see exactly what you produced with no help at all, and exactly where it differs from the truth. The map is one thing; this is the drive.',
      troubleshooting: 'If nothing comes back at all, you were not ready to retrieve yet. Go back to the sheet and study a smaller piece, two steps with their reasons, then close it and try just those two. Guessing at random teaches nothing and rehearses wrong answers.',
    },
    recall: {
      prompt: 'A diagram of a process you know fairly well feels completely clear while you are looking at it. How would you check whether you actually understand it without the picture?',
      hint: 'Take away the cues before you try to explain anything.',
      answer: 'Close the diagram and draw or write it from memory: the main stages, in order, and the connections between them. Then put yours beside the original and compare. Everything you got right without looking is yours. Everything you missed or mislinked is what the diagram was supplying for you, and that is the part to study, with its reason, before trying again. Explaining a picture while it is in front of you is reading the map aloud; it feels like understanding and proves only that you can recognise what you see.',
    },
    quiz: {
      question: 'You want to be able to explain a museum guide to someone next week. Which attempt best checks retrieval now?',
      options: ['Write out the process after closing its explanation, then check what you wrote.', 'Paraphrase each label while the diagram stays visible.', 'Read the highlighted sequence until its wording sounds familiar.'],
      correctIndex: 0,
      explanation: 'Closing the source and producing the process is the drive, not the map: it forces you to find the content rather than recognise it, and the comparison afterwards shows exactly what was missing. Paraphrasing with the diagram in view and rereading until it sounds familiar both leave the page doing the remembering for you; the familiarity is real and it is not recall.',
    },
    takeaway: 'Shut the source, produce the sequence, and compare honestly; what you got wrong is not a failure but the precise list of what to learn next.',
    sourceNote: 'Roediger and Karpicke studied prose recall and retention. This card sequence is invented; corrective checking is a practical addition, not their exact procedure.',
  },
  {
    id: 'mind-028',
    title: 'Give learning another encounter after a gap',
    outcome: 'Spread practice out over days instead of piling it into one session, start each later session by trying to recall before you look, and let how much came back decide when the next session should be.',
    scene: 'Learning French weekday words for use on a trip next month',
    sections: [
      {
        title: 'Today\'s smooth answer has not reached next month',
        paragraphs: [
          'You have a trip to France next month and want a few weekday words ready. Monday, lundi. Tuesday, mardi. Wednesday, mercredi. You read the three pairs, cover the French, test yourself, read them again, test again. After ten minutes the answers arrive instantly. It feels done.',
          'What you have is good evidence about ten minutes ago. The question your trip is asking is different: will lundi still be there in four weeks, after a hundred other things have gone through your head? Nothing you did today can answer that, because every test happened within minutes of the reading it was testing. You never let the words go cold and then checked whether they came back. Using all your practice at once is like checking a plant is watered by looking at it the moment after you watered it. Of course it is. The question is next Tuesday.',
        ],
      },
      {
        title: 'Spacing depends partly on the retention goal',
        paragraphs: [
          'A gardener does not pour a week\'s water onto a plant on Monday and then nothing until Sunday. Little and often keeps the roots alive; one soaking followed by drought does not. And how often depends on the plant and the weather. A cactus on a cool windowsill wants a very different schedule from basil in August.',
          'Memory behaves more like the plant than like a bucket you fill once. Researchers call practice spread over time distributed practice, and the studies of word and fact learning are consistent on the main point: the same total practice, spaced out, is remembered for longer than the same practice crammed together. They also find something subtler. The gap that works best depends partly on how long you need the material to last. A test next week and a trip next month call for different spacing. What the research does not give you is a single magic interval, longest-is-best, or a schedule that fits every learner and every word. So when the later session arrives, begin with recall, not rereading. Try lundi, mardi, mercredi before you look. Then check and correct. If nothing came back, you needed more support and a shorter gap before the next try. If all three came back easily, the next gap can be longer, and the words are starting to be ready for the trip rather than for the minute after study.',
        ],
      },
      {
        title: 'Schedule the question, not just a reminder to study',
        paragraphs: [
          'Most people put study French in the calendar. That produces a session in which you reread the three pairs, feel reassured, and learn nothing about retention. Put the question in the calendar instead: what are the French words for Monday, Tuesday, and Wednesday? Keep the answers somewhere separate, to be opened only after you have tried. A reasonable first plan is one attempt tomorrow and another later in the week. Those are appointments, not findings; nobody has tested those exact intervals on these exact words.',
          'At each appointment, write down which words you actually produced before you opened the answers. Lundi came, mardi came, mercredi did not. A tick in the calendar records that you turned up; the word list records what survived. Use the list, not the tick, to set the next gap. And since the goal is the trip, put one more check a few days before you leave, because that is the one that actually matters. Spacing arranges the practice across time. It does not do the understanding, the recalling, or the checking for you.',
        ],
      },
      {
        title: 'The feeling of done',
        paragraphs: [
          'A single intense session produces a strong sense of mastery, and that sense is not lying about the present moment. It is just silent about the future, and the future is what you were studying for. The only test of durability is time passing, and the only way to run that test is to stop, let the words go cold, and come back.',
          'Two habits. For anything you need beyond today, split the practice into at least two sessions separated by a night\'s sleep, and make the second session start with your eyes closed to the answers. And record what you produced, not whether you practised; the record of what came back is the only thing that can tell you when to come back again.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The same weekday question returns',
        alt: 'Study the weekday pairs today, recall tomorrow, try again later in the week, and adjust the next gap from performance.',
        caption: 'Notice that only the first box says study. Every later box says attempt or try, and the last one chooses its own date based on what came back. Little and often, with the watering can going where the soil is dry. Illustrative appointments, not a proven schedule or a scale.',
        items: [
          { label: 'Today', detail: 'Study lundi, mardi, mercredi and their English meanings.' },
          { label: 'Tomorrow', detail: 'Attempt the weekday prompt before checking the answer.' },
          { label: 'Later in the week', detail: 'Try again; note which words remained available.' },
          { label: 'Next appointment', detail: 'Choose the gap using recall and the trip date.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['A calendar or reminder', 'One checked learning question'],
      steps: [
        'Pick something you need to remember beyond today, and write down when you will actually use it. The use date is what the spacing is for; without it you cannot judge whether a gap is long or short.',
        'Write the prompt as a question you could answer out loud, and put the checked answer somewhere separate. For the weekdays: the question on one side, lundi, mardi, mercredi on the other.',
        'Put the question, not the words revise, in your calendar for tomorrow, with a note that the answer stays closed until you have tried. This is the whole difference between watering the plant and looking at it.',
        'Leave a line to record what came back and a line for the next date. The waiting between sessions is not part of this six minutes; it is the experiment running.',
      ],
      notice: 'Your plan contains a future attempt to produce the words, not just a plan to read them again. The test of durability is built in.',
      troubleshooting: 'If the calendar fills with reminders you keep snoozing, you have too many plants on the windowsill. Cut back to two or three questions and keep those honest, rather than scheduling one enormous catch-up that becomes a cramming session with a different name.',
    },
    recall: {
      prompt: 'You need a procedure next month, and right after reading it today you can repeat it perfectly. What evidence are you missing?',
      hint: 'The thing you are preparing for includes a delay, and your evidence does not.',
      answer: 'You are missing any test with time in it. Perfect repetition straight after reading tells you the procedure went in; it says nothing about whether it will still be there after four weeks of other things, which is the only question next month cares about. The plant looks watered because you just watered it. Put the procedure in your calendar as a question, try to write it out tomorrow with the source closed, record what came back and what did not, and set the following attempt from that record. If tomorrow\'s attempt is patchy, the gap was too long or the study too shallow; if it is clean, stretch the next gap toward the real date.',
    },
    quiz: {
      question: 'You are learning words for a trip next month. What should guide the length of the next practice gap?',
      options: ['How many successful repetitions you can fit into today.', 'How easily the source reads immediately after studying it.', 'Whether you could produce the words at the later attempt.'],
      correctIndex: 2,
      explanation: 'What came back after a gap is the only evidence about durability, so it is the only thing that can tell you whether the next gap should stretch or shrink; that is checking the soil before watering. Repetitions today all happen before anything has had a chance to fade. Ease of rereading is recognition with the answer in front of you, which is exactly what the trip will not provide.',
    },
    takeaway: 'Water little and often: come back after a gap, try to recall before you look, write down what survived, and let that record set the next date.',
    sourceNote: 'The review synthesizes verbal-recall research. These appointments are examples, not validated intervals or individual predictions.',
  },
  {
    id: 'mind-029',
    title: 'Correct why the tempting answer was wrong',
    outcome: 'When a quiz tells you the right answer, go back and find the reason the wrong one looked right, because that reason is what will trip you up next time, not the letter you picked.',
    scene: 'Confusing the mean with the middle value in a quiz about three invented journey times',
    sections: [
      {
        title: 'The wrong answer has a plausible reason',
        paragraphs: [
          'A practice quiz gives you three journey times, three minutes, five minutes, ten minutes, and asks for the mean. You look at them, line them up in order, and pick the one in the middle: five. The feedback says six. Your first instinct is to write down answer B, six, and move on. The quiz will not ask that exact question again anyway.',
          'Stop and notice what just happened. You did not guess. You applied a rule, confidently and correctly, and it was the wrong rule for the question. Taking the middle value of an ordered list gives you the median. The mean is something else: add everything up and share it out equally. Your five was not a random error. It was the right answer to a question nobody asked, and if you only memorise six, the rule that produced five is still sitting there, ready to fire the next time three numbers appear.',
        ],
      },
      {
        title: 'Wrong options can become familiar too',
        paragraphs: [
          'A doctor who treats the fever and never asks what caused it will see the same patient back in a week. The fever was real and the medicine worked, but the infection underneath was never touched. Correcting an answer without correcting the reasoning behind it is treating the fever. The wrong rule is the infection, and it is still in there.',
          'Multiple-choice quizzes make this worse in a specific, well-documented way. Every time you read the options, you read the wrong ones too, and research on test-taking finds that distractors you have seen can later feel familiar and get chosen again, precisely because you have encountered them. So finishing the quiz does not finish the learning, especially for an option that had a convincing story attached in your head. The repair is to work the convincing story through. Three plus five plus ten is eighteen. Eighteen shared equally across three journeys is six minutes each. That is the mean. Five is still, genuinely, the median of this list. Naming what the tempting answer would have been correct for is far more useful than filing it as a number to avoid, because now you know when five would be right and when it would not.',
        ],
      },
      {
        title: 'Keep a contrast you can use next time',
        paragraphs: [
          'Write the two rules side by side in plain words. For the mean, combine all the times and share the total equally across the three journeys. For the median, order the times and take the one in the middle. Then change the numbers, so you are testing the distinction and not your memory of the quiz. Four, six, and eleven minutes. Add to twenty-one, share across three: a mean of seven. Order them, take the middle: a median of six. Two different answers, two different questions, and now you can see which is which.',
          'One caution. If the quiz feedback only says six without explaining why, do not invent an explanation and rehearse it; check a reliable reference first. A study card built on a guess at the correction is a second infection. A good card does not ask for the answer letter. It asks for the reasoning that separates the two rules, and it keeps the checked explanation available for after you have tried.',
        ],
      },
      {
        title: 'Where wrong answers come from',
        paragraphs: [
          'Most wrong answers on things you have studied are not ignorance. They are a real rule applied in the wrong place, or two similar ideas that have blurred into one. That is why memorising the correct option does so little: it adds a fact without untangling the two ideas, and the tangle is what generated the error.',
          'Two habits. When feedback corrects you, write down what the tempting answer would have been right for before you write down the correct one; if you cannot say, you have not found the tangle yet. And always test the correction on changed numbers or a changed example, because recognising the old question is not the same as being able to tell the two rules apart.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Five and six answer different questions',
        alt: 'For journey times three, five, and ten, the median is five and the mean is six because the total eighteen is divided by three.',
        caption: 'Read the second half of each line, where the rule lives. Both numbers are correct; they answer different questions about the same three times. The quiz asked the right-hand question, and your hand reached for the left-hand rule. Invented times.',
        items: [
          { label: 'Median: five minutes', detail: 'The middle value after ordering three, five, ten.' },
          { label: 'Mean: six minutes', detail: 'Add to eighteen, then divide by the three journeys.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The worked question above or a quiz with reliable feedback'],
      steps: [
        'Write down which option tempted you and, honestly, the reason it seemed to fit. Not it just looked right; the actual rule your mind applied. This is finding the infection under the fever.',
        'Read the feedback and name the relationship your answer confused. For the journey times: middle-of-the-list versus total-shared-equally. Say both in words.',
        'Write a two-line contrast: what the correct rule does, and what the tempting rule would have been correct for. The second line is the one most people skip, and it is the one that stops the error coming back.',
        'Change the numbers to four, six, and eleven, and work both rules. Check you get a mean of seven and a median of six. If you can do that without looking back, the tangle is undone.',
      ],
      notice: 'Your correction explains when each rule applies, so the next set of three numbers will not fool you. Answer B has been replaced by a reason.',
      troubleshooting: 'If you cannot justify why the two rules give different answers, do not make a study card yet. A card you rehearse before you understand it just makes the confusion more fluent. Check a reference, then make the card.',
    },
    recall: {
      prompt: 'A quiz distractor said that ignoring an alert prevents any interruption. You picked it and were marked wrong. What correction would deal with the reasoning that made it tempting?',
      hint: 'Separate the alert arriving from you choosing to reply to it.',
      answer: 'Find what the distractor would have been right about. Ignoring an alert does prevent one thing: the time you would have spent replying. That is real, and it is why the option sounded sensible. What it does not prevent is the alert arriving and pulling at your attention in the first place, which happens whether or not you reply. So the correction is the contrast: not replying saves the reply; it does not stop the arrival. Memorising that the notification option was wrong leaves the plausible half of the reasoning intact, and the same half-truth will look convincing again in different words.',
    },
    quiz: {
      question: 'You chose a familiar distractor in a vocabulary quiz. Which follow-up repairs the error?',
      options: ['Reread only the correct wording until it feels familiar.', 'Explain the mistaken relationship and test the correction on a changed case.', 'Repeat the question immediately without reading its explanation.'],
      correctIndex: 1,
      explanation: 'Explaining what made the wrong option tempting and then testing the fix on new material is treating the infection rather than the fever. Rereading the correct wording adds familiarity to one answer while leaving the attractive wrong rule untouched, and the distractor was already familiar, which is how it got chosen. Repeating the question unexplained rehearses the same tangle again.',
    },
    takeaway: 'When feedback says you were wrong, find the question your answer would have been right for; fixing that confusion is what stops the error, and memorising the correct letter is not.',
    sourceNote: 'The multiple-choice and learning-techniques sources inform feedback use. The journey values are invented arithmetic examples, not study results.',
  },
  {
    id: 'mind-030',
    title: 'Make a short, checkable attempt before revealing',
    outcome: 'When a prompt gives you enough to work with, commit to an answer before you look, then check it, without turning a quick attempt into a long guessing session on something you could never have guessed.',
    scene: 'Completing a familiar opposite-word card before turning it over',
    sections: [
      {
        title: 'There is a moment before the answer appears',
        paragraphs: [
          'A vocabulary card reads: tall, opposite, begins with s. Your hand is already reaching to flip it. Pause for two seconds and say the word first. Short. Now flip. Short. The card agrees with you, and something small but real happened in those two seconds that would not have happened if you had flipped straight away. You used the relationship, opposite, and the letter cue, s, to produce the answer. Reading tall and short printed together would have handed you the pair with no production at all.',
          'Notice how much the card gave you. You know what tall means. You know what an opposite is. You have the first letter. The gap you had to cross was narrow, and that is exactly why the attempt was worth making. A card that said only a Finnish word for tree, opposite, with no cue, in a language you have never studied, would give you nothing to reason from. Staring at it for a minute would not be learning. It would be waiting.',
        ],
      },
      {
        title: 'Generation creates something to check',
        paragraphs: [
          'A pub-quiz team that blurts out an answer before the host reads it out remembers the answer whether they were right or wrong. The team that waits silently and nods along when the answer is read remembers almost nothing by the next round. The difference is not cleverness. The first team committed to something, so the reveal became a comparison; for the second team the reveal was just more information going past.',
          'Memory researchers have measured this and call it the generation effect: under studied conditions, information you produce yourself is remembered better than the same information read off a page. Two cautions come with that finding. It does not say that any hard guess is good for you, and it does not say that guessing for longer produces more learning. What matters is that the prompt gives you a real basis for an attempt, that the attempt is bounded, and that you can check it immediately afterwards. So the rule is simple. When the context supports it, say or write your candidate, then reveal and compare. When you cannot form a reasonable candidate, take a hint or read the explanation; that is not cheating, it is recognising you have reached the edge of what you know. Refusing to flip an unfamiliar card is not rigour. It is speculation with the lights off.',
        ],
      },
      {
        title: 'Keep the attempt separate from the correction',
        paragraphs: [
          'The next card: full, opposite, begins with e. You write empty, flip, and confirm. Easy. A harder card arrives and you write something you are not sure of. Here is the discipline that matters: leave your uncertain answer on the page long enough to compare it with the reveal. The temptation is to glance at the answer and quietly feel that you had basically known it all along. The pub-quiz team wrote their answer down before the host spoke, and that is the only reason they can be honest about whether they got it.',
          'What the written attempt gives you is a visible question for the feedback to answer. What did I produce, and how does it differ from the target? Without the attempt there is nothing to compare, and the reveal teaches you only that an answer exists. One boundary, and it matters: this is about learning from cards and quizzes, where a wrong guess costs nothing. Predicting a study answer is nothing like running an uncertain command on a live system, adjusting equipment you do not understand, or giving someone instructions you have not verified. Keep guesses where guesses are free.',
        ],
      },
      {
        title: 'The two ways to waste the moment',
        paragraphs: [
          'One waste is flipping immediately, every time, so that every card becomes reading and nothing is ever produced. The other is the opposite: treating the reveal as a defeat, sitting on an unfamiliar card for minutes, and calling the struggle effort. The first never generates. The second generates nothing but frustration, because there was no basis to generate from.',
          'Two habits. Before any reveal, ask whether you have enough context to make a real attempt; if yes, commit to a word out loud or on paper in a few seconds. If no, take the hint and move on. And whatever you commit to, keep it visible until you have compared it with the answer, because the comparison is where the learning lives, and a candidate you have already half-forgotten cannot be compared with anything.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The card has a cue, an attempt, and a check',
        alt: 'The prompt tall, opposite beginning with s, leads to the candidate short, which is compared with the revealed answer short.',
        caption: 'Look at the middle box. It is the one that disappears when you flip too fast, and it is the only one where you did anything. The first box gave you enough to fill it in; the last box lets you check. A prompt with no cue and no familiarity would leave the middle box blank, and a blank is not an attempt.',
        items: [
          { label: 'Tall: opposite, s...', detail: 'The relation and initial letter constrain the answer.' },
          { label: 'Candidate: short', detail: 'Produce it before turning the card.' },
          { label: 'Check: short', detail: 'Compare the attempt with the verified target.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'A familiar question with a checked answer'],
      steps: [
        'Use the full-to-empty pair, or pick any prompt where you genuinely have enough context to try. If you would have to guess at random, pick a different prompt; the exercise needs a narrow gap, not a chasm.',
        'Cover the answer and write your candidate down, in ink, before you look. If you are unsure, write the word and a question mark beside it rather than writing nothing. The pub-quiz team wrote before the host spoke.',
        'Reveal and compare, word against word. If you were wrong on something you had a real basis for, note the difference. If you were wrong because the topic was simply unfamiliar, that is a signal to study it first and make a prompt later.',
      ],
      notice: 'You have a real pre-reveal attempt sitting on the page next to the checked answer, and the gap between them, or the match, is something you can actually learn from.',
      troubleshooting: 'If the prompt allows many correct answers, the comparison afterwards is useless because anything could be right. Tighten the relation or add a cue, opposite beginning with e, so that one answer is being asked for.',
    },
    recall: {
      prompt: 'A study guide asks you to predict the next step of a process you have already learned, with a reveal button underneath. How should you use the button?',
      hint: 'The prediction needs something to stand on and something to be checked against.',
      answer: 'Write the next step and one short reason for it before you press anything, then press and compare your line against the documented one. You have learned the process, so you have a basis for the prediction, which makes it a real attempt rather than a guess. If the guide moves on to a process you have not learned, the button is not a test you are failing by pressing it; press it, read the explanation, and come back to predict once you have something to predict from. The pub-quiz team shouts answers to questions they half-know. Nobody learns anything by sitting in silence over a question in a language they do not speak.',
    },
    quiz: {
      question: 'A card hides a familiar next step and gives enough context. Which use combines generation with feedback?',
      options: ['Produce a candidate, then verify it.', 'Read the answer first, then rewrite it.', 'Attempt an answer and check it only if it feels uncertain.'],
      correctIndex: 0,
      explanation: 'Producing before revealing is the generation, and verifying afterwards is the feedback; together they are the quiz team writing down an answer and then hearing the host. Reading first turns the whole thing into copying, with nothing produced. Checking only when you feel unsure trusts confidence to detect your own errors, and confidence is precisely what a fluent wrong answer feels like.',
    },
    takeaway: 'When the card gives you enough to go on, commit to an answer in seconds and then check it; when it gives you nothing, read, learn, and save the attempt for a card you can actually reason about.',
    sourceNote: 'Slamecka and Graf studied the generation effect. These ordinary word pairs illustrate a bounded attempt; no universal benefit or exact timing is claimed.',
  },
  {
    id: 'mind-031',
    title: 'Use the same principle with different objects',
    outcome: 'Test whether you have really learned a method by applying it to a problem that looks different on the surface, and be able to say what stayed the same underneath.',
    scene: 'Transferring per-item price reasoning to comparing two fictional ribbon lengths',
    sections: [
      {
        title: 'The new question does not look like the old card',
        paragraphs: [
          'Last week you learned to compare two packs of pencils by working out the price of a single pencil in each. Today you are in a haberdashery looking at ribbon. One spool is three metres for nine pounds. Another is five metres for ten pounds. Your eye goes straight to nine, because nine is less than ten, and your hand goes to the first spool. Then the question on the worksheet stops you: which spool has the lower price per metre?',
          'Everything visible has changed. Pencils became ribbon. Packs became spools. Counts became metres. And because it all looks different, the method you learned last week does not announce itself; it sits quietly behind the new nouns while your instinct picks the smaller number. Yet the relationship underneath is identical. Take a total price and divide it by the quantity it buys. Noticing that the ribbon problem is the pencil problem in a different coat is the whole skill, and it is a skill that reciting the pencil answer does not give you.',
        ],
      },
      {
        title: 'Transfer needs application, not just recitation',
        paragraphs: [
          'Someone who has learned to parallel park outside their own house can usually do it outside a friend\'s house too, on a different street, between different cars. If they could only park in the one spot they practised in, nobody would say they had learned to park. They would have learned one spot. The test of a skill is whether it comes with you to a place it has never been.',
          'Learning researchers call that coming-with-you transfer: using what you learned in a situation that differs from the one you learned it in. It is a separate outcome from being able to repeat the original answer, and studies of repeated testing have measured it separately, asking people new inferential questions rather than the ones they practised. The lesson from that work is not that recitation is useless but that it proves less than it feels like it proves. A good transfer check keeps the principle and changes the surface. For the ribbon, the one extra move is to say the unit the question asks for, per metre, out loud before touching a number, because the pull toward the cheaper total is strong and it answers a question nobody asked. Change a few features at a time. If pencils become ribbon and pounds become euros and the question is reworded all at once, a failure could mean you did not recognise the principle or that you were lost in the new material, and you cannot tell which.',
        ],
      },
      {
        title: 'Show what stayed the same',
        paragraphs: [
          'Now do the arithmetic. Nine pounds for three metres: nine divided by three is three pounds per metre. Ten pounds for five metres: ten divided by five is two pounds per metre. The second spool is cheaper by the metre, even though its total is a pound more. That is the pencil method, wearing ribbon. The calculation assumes the lengths and prices are exactly as stated and there is nothing extra to pay.',
          'Be clear about what you have and have not shown. You have shown that you can find and compare a unit price when the objects change. You have not shown which spool to buy. If you only need a metre and a half, the three-metre spool wastes less. If you have exactly nine pounds, the five-metre spool is out of reach whatever its unit price. If you want satin and only one spool is satin, the arithmetic is beside the point. The transfer check tests a narrow skill, and it is worth stating that skill in words, divide the total by the quantity, rather than remembering that the second option won.',
        ],
      },
      {
        title: 'Why surface features fool us',
        paragraphs: [
          'Memory files things by what they look like, and the pencil problem looks like pencils. When ribbon arrives, nothing in the picture says pencils, so the method does not come forward on its own. This is not a failure of intelligence; it is how recognition works, and it is why someone can ace every problem in a chapter and freeze on the mixed exam where the chapter headings are gone.',
          'Two habits. After learning any method, invent one problem that uses it with different objects and different units, and solve it before you let yourself feel finished. And when you solve it, write the principle in a sentence with no nouns from either problem in it: divide the total by how much it buys. That sentence is the thing that travels.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Compare ribbon prices in the same unit',
        alt: 'A three-metre spool at £9 costs £3 per metre; a five-metre spool at £10 costs £2 per metre.',
        caption: 'Notice that the taller bar belongs to the spool with the lower sticker price. The bars measure pounds per metre, which is the question that was asked, and the total price is the question your eye wanted to answer instead. Invented prices; no purchase advice.',
        unit: '£ per metre',
        items: [
          { label: 'Three metres for £9', detail: '£9 divided by three metres.', value: 3 },
          { label: 'Five metres for £10', detail: '£10 divided by five metres.', value: 2 },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The fictional ribbon comparison'],
      steps: [
        'Write the pencil principle in one plain sentence, with no pencils in it: to compare prices, divide each total by the quantity it buys. If your sentence mentions pencils, it has not left the car park yet.',
        'List what changed in the ribbon problem, objects, units, numbers, and then write the exact unit the question asks for. Saying per metre before you calculate is what stops the cheaper total from answering the wrong question.',
        'Work both unit prices, three pounds and two pounds per metre, and write one sentence on which spool is cheaper in that unit and why the totals mislead.',
        'Add one thing the calculation does not settle, the length you actually need or a budget cap, then look back at the pencil example and point to the step that was identical.',
      ],
      notice: 'Your explanation links the two problems through a relationship, not through any shared word. You could now do the same with paint tins or bus fares.',
      troubleshooting: 'If the new problem feels like a different subject entirely, you have changed too much at once. Keep the numbers simple and change only the objects, so the question is whether you recognise the method and not whether you can cope with new material.',
    },
    recall: {
      prompt: 'You learned to leave a restart note before pausing a shopping list. How could the same principle help with a drawing you have to put down half-finished?',
      hint: 'Keep what the note does and change what it is about.',
      answer: 'Strip the principle of its shopping nouns first: before pausing, write what is settled, what is still open, and the first thing to check on return. Then put drawing nouns back in. Settled: the outline and the left-hand shading are done. Open: whether the right edge matches the reference. First check: hold the sketch beside the photo and compare that edge. The objects changed completely, groceries to graphite, and the function of the note did not: it saves the decision you were in the middle of so you do not rebuild it from scratch. If you can do that swap, you learned the note. If you can only write shopping notes, you learned shopping.',
    },
    quiz: {
      question: 'You learned a method using ticket prices. Which practice best checks whether it transfers?',
      options: ['Repeat the original ticket problem with its explanation visible.', 'Apply the relationship to different objects and explain why it fits.', 'Reread the definition until the original example feels familiar.'],
      correctIndex: 1,
      explanation: 'Taking the method to new objects and saying why it applies is parking on a different street: the skill either comes with you or it does not, and you find out. Repeating the ticket problem with its explanation in view tests recognition of one spot. Rereading until it feels familiar builds a feeling about the old example and says nothing about whether the principle will surface when the nouns change.',
    },
    takeaway: 'Change the objects, keep the principle, and write the principle in a sentence with no nouns from either problem; that sentence is what you actually learned.',
    sourceNote: 'The repeated-testing source examines transfer to new questions. The ribbon comparison is an original illustration, not a tested consumer decision or guaranteed transfer effect.',
  },
  {
    id: 'mind-032',
    title: 'Compare study confidence with later recall',
    outcome: 'Treat the feeling that you know something as a prediction, write it down, and then check it against what you can actually produce later with the page closed.',
    scene: 'Rehearsing a walking-group introduction containing a meeting point, route, and finish',
    sections: [
      {
        title: 'The introduction reads smoothly',
        paragraphs: [
          'You are leading a walking group on Saturday and have written a three-line introduction. Meet at the clock tower. Follow the river path. Finish at the glasshouse. You read it over twice on Thursday night. It flows. You know this. You put the note away certain you will remember all three.',
          'Friday evening, note closed, you try it. Clock tower, yes. Glasshouse, yes. And the bit in the middle has gone. You cannot say which path. This feels like a contradiction, confident on Thursday and blank on Friday, but it is not. Thursday was a reading task with the answer in front of you. Friday was a production task after a gap with nothing to look at. Different tasks, different conditions, different results. Thursday\'s smoothness was a true report about Thursday. It was never evidence about Friday, and you treated it as if it were.',
        ],
      },
      {
        title: 'Fluency can influence confidence',
        paragraphs: [
          'A song you have heard a hundred times feels completely known. Try singing the second verse in a quiet room with no music playing and listen to what happens. The words that arrive effortlessly when the recording is on dissolve halfway through the first line. The recording was supplying them; you were recognising, not producing. Hearing is not the same as having.',
          'Memory researchers have measured this gap. In studies of retrieval practice, people who reread material repeatedly grew more confident than people who tested themselves, and yet the self-testers remembered more when the delayed check came. The ease of the reread was feeding the confidence and doing less for the memory. The lesson is not that confidence is worthless. It is that confidence is a forecast, and a forecast should be written down and then compared with the weather, not defended. So for the introduction, do three things before any test. Decide what counts: the meeting point, the route, the finish, each with the right detail. Predict how many of the three you will produce. Then let some ordinary life happen, an evening, a night\'s sleep, and close the note and try. One rule: no peeking halfway and then counting the peeked item as remembered. The forecast gets compared with the real weather or not at all.',
        ],
      },
      {
        title: 'Use the mismatch to select the next practice',
        paragraphs: [
          'In the example, the forecast was three and the Friday result was two. The gap has a name: the river path. That is not a disappointment to brood over; it is the most useful thing the exercise could have told you, because it says exactly what to do next. Spend two minutes on why the route connects the clock tower to the glasshouse, the river runs between them, and then check again later. The missing piece now has a reason attached, which is what it lacked when you read it on Thursday.',
          'Keep the result in proportion. One gap between forecast and recall is not a verdict on your memory or your character. The delay, the material, and how you scored it all shaped the number. A later success is likewise evidence about that attempt, nothing grander. And keep the whole thing small. The point of comparing prediction with performance is to change what you study next. If it turns into an elaborate tracking spreadsheet, the tracking has eaten the studying. Before Saturday, of course, the actual route details get checked against a map, not against your memory of a note.',
        ],
      },
      {
        title: 'Why the feeling lies in one direction',
        paragraphs: [
          'Confidence from rereading is almost always too high, and it is too high in a predictable way. Everything you reread is right there, so the sense of knowing is manufactured by the page rather than by you. The song is always perfect while the recording plays. The only honest measure is what you can do when the recording is off, and that measure is only available after a gap, with the source closed, on a question you set yourself in advance.',
          'Two habits. Whenever a page feels obvious, write a number: how many of its points will I produce tomorrow with it closed? Then actually test tomorrow. And when the number comes back lower, name the specific thing that was missing and study that, rather than rereading the whole page and manufacturing the same confidence again.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Prediction and later production',
        alt: 'The learner predicts three points but later produces two: clock tower and glasshouse, omitting river path.',
        caption: 'The gap between the two bars is the lesson. It is exactly one point tall and it has a name, river path, which tells you what to study. A forecast of three felt completely honest on Thursday; the weather on Friday was two. Invented result, not a research effect size.',
        unit: 'correct points out of three',
        items: [
          { label: 'Predicted', detail: 'Meeting point, route, and finish expected.', value: 3 },
          { label: 'Produced later', detail: 'Clock tower and glasshouse; river path missing.', value: 2 },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Three checked points from a short explanation'],
      steps: [
        'Pick three points you want to remember, or use the walking introduction, and write down exactly what a correct answer must contain for each. Scoring decided in advance is what makes the later comparison honest.',
        'Study them, then write a single number: how many of the three you expect to produce later with the page closed. This is the forecast, and it goes on paper so it cannot quietly revise itself.',
        'Do something else, ideally sleep on it. Then, with every answer covered, write what you can. The waiting is not part of the six minutes; it is the experiment running.',
        'Put the forecast and the result side by side. Name the specific gap, river path, and make that, not the whole page, the target of your next two minutes of study.',
      ],
      notice: 'What you study next was chosen by what you actually produced, not by how smooth the page felt. The recording was off, and you heard what was really there.',
      troubleshooting: 'If you cannot tell whether an answer counts as correct, the question was too vague to test. Rewrite it to name the required points, meeting place, route, finish, before you make another forecast.',
    },
    recall: {
      prompt: 'An explanation feels completely clear while it is highlighted on the page. What would let you check whether that feeling predicts what you can say tomorrow?',
      hint: 'Separate the prediction from the test, and remove the highlighting before the test.',
      answer: 'Write a specific question about the explanation tonight, and write down your forecast: how fully you expect to answer it tomorrow. Then tomorrow, with the page closed and the highlighting out of sight, answer it in writing. Lay the answer beside the forecast and compare the actual content, not the feeling. The highlighting is the recording playing; it makes every line sound known. Only the closed-page attempt after a gap tells you what you own, and the forecast on paper is what stops you from deciding afterwards that you had basically known it all along.',
    },
    quiz: {
      question: 'You expect to explain a guide tomorrow. Which check best tests the confidence that today\'s rereading produced?',
      options: ['How confident you feel after one more read.', 'How quickly you can point to the steps while the guide is open.', 'An answer produced after a gap, without access to the explanation.'],
      correctIndex: 2,
      explanation: 'Only the closed-source attempt after a gap tests what the confidence was a forecast about; it is singing the verse with the recording off. Another read produces more of the same confidence from the same source. Pointing to steps while the guide is open is recognition with the answers in view, which is precisely the condition that inflates confidence in the first place.',
    },
    takeaway: 'Write your confidence down as a number before the test, test with the page closed after a gap, and let the difference between the two tell you what to study; the feeling of knowing is a forecast, not a result.',
    sourceNote: 'Roediger and Karpicke distinguish study confidence from delayed retention. The walking introduction and three-versus-two result are invented teaching examples.',
  },
  {
    id: 'mind-033',
    title: 'Mix familiar examples to practice choosing the rule',
    outcome: 'Once you know two or three ideas separately, practise them shuffled together, so that you learn to tell which one a problem needs before you start answering it.',
    scene: 'Sorting fictional message statements into observations and interpretations without category headings',
    sections: [
      {
        title: 'The heading can answer the first question for you',
        paragraphs: [
          'A communication worksheet has two pages. The first is headed Observations, and every sentence on it is an observation; you read each one and explain correctly why it counts. The second is headed Interpretations, and you do the same. Full marks, twice. Then the teacher cuts the pages up, shuffles the sentences into one pile, and hands it back. Suddenly you are hesitating over sentences you explained perfectly five minutes ago.',
          'Nothing about the sentences changed. What changed is that the heading used to make the first decision for you. On the labelled pages, you never had to ask which kind of claim is this; the top of the page had already said. The shuffled pile asks that question for the first time, and it turns out you had not practised answering it. Before going further, be sure the distinction itself is solid. An observation reports something checkable: a message arrived on Monday. An interpretation adds a meaning the message did not supply: the late reply shows disrespect.',
        ],
      },
      {
        title: 'Interleaving can practice discrimination',
        paragraphs: [
          'A tennis coach who feeds you fifty forehands in a row is teaching you the forehand. A coach who mixes forehands, backhands, and volleys at random is teaching you something the first coach cannot: reading the ball as it comes and choosing the stroke. In a match nobody tells you which shot is coming. The choosing is half the game, and blocked drills never practise it.',
          'Learning researchers call the mixed version interleaving, as opposed to practising each type in its own block. Its particular gift is discrimination: before you can apply a rule, you have to decide which rule applies, and interleaving is the only format that makes you do that. Reviews of the research find real benefits that depend on the materials and the setup; it is not a promise that scrambling any lesson improves it. Three conditions keep it useful. Mix ideas you have already met, since shuffling things you have never learned produces confusion with nothing to choose from. Mix ideas you genuinely need to tell apart, because that is the decision being practised. And keep feedback close by, so that a wrong classification gets corrected before it settles in as a new habit. The aim is a meaningful choice at the start of each item, not maximum difficulty for its own sake.',
        ],
      },
      {
        title: 'Explain the feature that decides each case',
        paragraphs: [
          'Take four fictional sentences, shuffled. The reply arrived Monday. They do not respect my time. They wrote that they were busy. They wanted to avoid me. For each one, name the type first and the reason second. The first reports an event you could check against a timestamp. The third reports what a message literally said. The second attaches an attitude the message never stated. The fourth attaches a motive, which is even further from anything you could verify.',
          'The third sentence is the one worth slowing down on. They wrote that they were busy is an observation about the message, not proof that they were busy; it reports the words, and the words are checkable. That subtlety is why the exercise beats hunting for suspicious vocabulary. Respect and avoid are not banned words; they are signals that the sentence has moved from what happened to what it meant. Keep the sentences invented. The point is to practise the decision, not to start classifying the private motives of real people who have texted you.',
        ],
      },
      {
        title: 'When mixing helps and when it hurts',
        paragraphs: [
          'Interleaving earns its keep after the separate ideas are in place and before the exam, the conversation, or the match where no one labels the problems. Used too early, it is a coach feeding random shots to someone who has never held a racquet; the learner cannot choose between strokes they do not yet have. Used without feedback, it quietly teaches wrong classifications with great fluency.',
          'Two habits. Once you can explain each idea on its own page, make a shuffled set of the familiar ones and practise naming the type before you do anything else with each item. And after every item, check the type against a source, because the decision you are training is the one most likely to feel right while being wrong.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Choose the claim type before checking',
        alt: 'Four fictional statements report a Monday reply, infer disrespect, report the word busy, and infer avoidance.',
        caption: 'There is no heading on this card, and that is the point. For each statement, decide the type before reading on: A and C report an event or the words of a message; B and D add an attitude or a motive. The shuffle is the exercise, and C is the one that catches people.',
        items: [
          { label: 'Statement A', detail: 'The reply arrived Monday.' },
          { label: 'Statement B', detail: 'They do not respect my time.' },
          { label: 'Statement C', detail: 'They wrote that they were busy.' },
          { label: 'Statement D', detail: 'They wanted to avoid me.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Four slips of paper', 'The fictional statements above'],
      steps: [
        'Before touching the slips, say the distinction aloud in your own words: an observation reports something checkable, an interpretation adds a meaning. If you cannot say it cleanly, learn it from the labelled version first; mixing comes after.',
        'Write one statement on each slip, shuffle them face down, and turn them over one at a time. For each, name the type first, then say the single feature that decided it. The order matters: type, then reason.',
        'Check each call against the worked explanation above. If one keeps coming out wrong, especially statement C, take it out, study why it is an observation about words rather than a claim about facts, and shuffle again.',
      ],
      notice: 'You are choosing the concept from the content of each sentence, with no heading to lean on. That is the forehand-or-backhand decision, and it is the one the real conversation will ask of you.',
      troubleshooting: 'If every slip feels like a coin toss, the shuffle has come too early. Go back to two types with one clear example of each in front of you, then rebuild the mixed set once those feel solid.',
    },
    recall: {
      prompt: 'You know two calculation methods well, but you have only ever practised them under separate headings. What would a mixed set add that the separate pages cannot?',
      hint: 'The new step happens before any calculating starts.',
      answer: 'It adds the decision the headings have been making for you: which method does this problem need? On a page headed Method A, you never ask; the question is pre-answered. In a shuffled set you must read each problem, recognise its shape, and choose, which is the forehand-or-backhand moment and the thing that will actually be asked of you in an exam or at work. Keep the worked solutions to hand so that a wrong choice of method gets caught immediately, because choosing wrongly with confidence is precisely the habit the mixed set exists to prevent.',
    },
    quiz: {
      question: 'You know two methods separately but confuse them when questions arrive unlabelled. Which practice targets that gap?',
      options: ['Mix familiar problem types, choose the method for each, and check the choice.', 'Do larger separate blocks with each method named in the heading.', 'Alternate reading definitions with watching fully explained solutions.'],
      correctIndex: 0,
      explanation: 'The gap is in choosing, and only a shuffled set with feedback makes you choose and then tells you whether you chose well; that is the coach mixing the shots. Bigger blocks under headings practise each method more and the choice not at all. Reading and watching can deepen your grasp of each method and never ask you which one a given problem wants.',
    },
    takeaway: 'Learn each idea on its own first, then shuffle the familiar ones and practise naming the type before you answer; the choosing is the skill the headings were hiding.',
    sourceNote: 'The learning-techniques review discusses interleaving and its limits. This fictional statement set is an application, not a tested communication intervention.',
  },
  {
    id: 'mind-034',
    title: 'Keep a first success eligible for a later check',
    outcome: 'Treat the first time you get something right as a milestone rather than a finish line, and give it one more chance to fail later so you find out whether it actually stuck.',
    scene: 'Keeping a Portugal-capital card in practice after recalling Lisbon correctly once',
    sections: [
      {
        title: 'The first correct answer feels finished',
        paragraphs: [
          'You are preparing for a friendly geography quiz with a stack of cards. For three sessions the Portugal card has beaten you; you keep saying Madrid. Then today, card up, and out it comes: Lisbon. A small glow of triumph. You put the card on the done pile with real satisfaction, and the done pile is where cards go to be forgotten about, which is precisely the problem.',
          'Something real did happen. The answer was there today when it was not there last week, and that is worth noticing. But look at what the done pile is claiming. It says this fact is now permanently available. All you actually know is that it was available once, this afternoon, after three sessions in which it was not. Whether Lisbon is still there in ten days, after other capitals and ordinary life have been through your head, is a question you have not asked. The done pile answers it by assumption.',
        ],
      },
      {
        title: 'Retrieval after initial learning can still matter',
        paragraphs: [
          'A plant that finally shows a green shoot is not finished. It is started. The gardener who stops watering the moment the shoot appears, on the grounds that it has clearly worked, will be standing over a dry pot in a fortnight. The shoot is evidence that something took. It is not evidence that nothing more is needed.',
          'Memory research backs the gardener. Studies that compared what happened after people first learned something, continuing to study it versus continuing to retrieve it, found that further retrieval changed how much was still there later. So an item becoming correct once does not make all further practice pointless; the first success is the shoot, and some watering still matters. The question is not how to keep every card in rotation forever, which would bury you. It is how to keep access to the facts that still matter to you. Keep the Lisbon card in play for a later attempt, after a gap that suits your goal. When it comes round, cover the answer and try before you look. If it keeps coming back reliably, it can receive less and less attention, with just an occasional chance to catch forgetting before the quiz does.',
        ],
      },
      {
        title: 'Use later performance to decide what changes',
        paragraphs: [
          'The Portugal card returns in a week. You say Lisbon before turning it over, and Lisbon it is. Write down that this attempt succeeded, nothing grander; it does not make the fact unforgettable, it makes it two for two. If instead Madrid slips out again, correct the pair, say why Lisbon, and put the card back into a sensible future slot. A miss now does not erase last week\'s success any more than last week\'s success guaranteed today.',
          'You are also allowed to decide a fact is no longer worth the water. If Portugal\'s capital turns out not to matter for anything you care about, retire the card on purpose and say so. That is a decision about your priorities, and it is a perfectly good one; it is simply not the same as believing one success made the fact permanent. Keep the whole review small enough that new material and real life still fit. And notice the trap on the other side: repeating Lisbon ten times in a row right now until it feels effortless is not a later check. It is watering the pot ten times this afternoon and then never again.',
        ],
      },
      {
        title: 'Why the done pile is so tempting',
        paragraphs: [
          'Getting something right after failing at it feels like crossing a line, and crossing lines is how we are used to measuring progress. But memory does not have a line. It has a slope, and the first correct answer is a point on the way up that can still slide back. The done pile turns a point into a verdict, and the verdict is pleasant because it ends the work.',
          'Two habits. When a card finally comes right, write the date on it instead of filing it, and set the next time you will ask it; the date is the record of a shoot, not a certificate. And when you are tempted to retire something, say the reason out loud: because it does not matter any more is a fine reason, and because I got it once is not one.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The Lisbon card is correct, then checked later',
        alt: 'A first Lisbon answer is correct, the card remains eligible, and a later closed-answer attempt informs future review.',
        caption: 'Notice that the middle box is not a done pile. It holds the card between successes, and the third box decides what happens next based on what actually came back. The green shoot in box one is a beginning; nothing in this sequence is a guarantee. Stages, not fixed intervals.',
        items: [
          { label: 'First success', detail: 'Portugal\'s capital is recalled as Lisbon.' },
          { label: 'Keep eligible', detail: 'Set aside for a later question, not permanent retirement.' },
          { label: 'Later retrieval', detail: 'Attempt before revealing; use the result to adjust review.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['One recently correct study question', 'A reminder or review list'],
      steps: [
        'Pick one thing you got right recently for the first time and still want to keep. Write today\'s date beside it instead of putting it anywhere called done.',
        'Choose a later moment for it to come round again, a few days out, and add it to your list without adding a single extra repetition to today. The shoot has appeared; you are scheduling the next watering, not flooding the pot.',
        'Write one line on how you will attempt it when it returns, answer covered first, and one line on what you will do if you miss: correct it, say why, and give it another future slot.',
        'When that later attempt happens, let the actual result set the next gap. A success stretches it; a miss shortens it; neither one is a final verdict.',
      ],
      notice: 'You are treating got it once and have it for good as two different claims, and only the second one needs the later check to earn it.',
      troubleshooting: 'If your review list grows past what you can honestly keep up with, prune by usefulness and say so: this one does not matter to me any more. That is a decision. Do not instead promise yourself you will revisit everything forever, because a promise like that collapses into a done pile within a week.',
    },
    recall: {
      prompt: 'You explained a procedure correctly once and now want to stop checking it altogether. What does that single success actually establish?',
      hint: 'Keep the claim the same size as the evidence: one occasion.',
      answer: 'It establishes that you could explain the procedure on that occasion, and that is all. It is the first green shoot, not the harvest. Whether the explanation is still there after a month of not using it is a separate question, and a single later attempt with the source closed is the cheapest way to answer it. You may well find it has stuck, in which case you have earned a longer gap before the next check rather than no check at all. One more thing the success does not establish: that the real task can now be done from memory. A procedure that matters may still deserve its checklist every time, however well you can recite it.',
    },
    quiz: {
      question: 'After one correct Lisbon answer, which review plan fits?',
      options: ['Move it to a finished pile and review only the items you missed.', 'Keep a later check if it still matters, then adjust from how that goes.', 'Repeat it immediately until it feels smooth, then retire it from review.'],
      correctIndex: 1,
      explanation: 'One later attempt after a gap is the only thing that can tell you whether Lisbon stayed, and letting that result set the next gap keeps the review honest and finite. The finished pile converts one success into a permanent verdict by assumption. Repeating immediately until smooth waters the pot ten times this afternoon and never again; smoothness today is not availability next week.',
    },
    takeaway: 'A first correct answer is a green shoot, not a certificate; date it, ask it again after a gap, and let that later answer, not the glow of today, decide how much more attention it needs.',
    sourceNote: 'The repeated-retrieval study informs continued practice after initial learning. The geography card and review decisions are original examples without prescribed intervals.',
  },
  {
    id: 'mind-035',
    title: 'Find a meaningful choice inside a required topic',
    outcome: 'When you must learn something you did not choose, separate the part that is genuinely fixed from the parts you can shape, and use one of those to connect the work to something you actually care about.',
    scene: 'Choosing an art-supply list as the practice example in a required spreadsheet module',
    sections: [
      {
        title: 'The topic is required, but the example may not be',
        paragraphs: [
          'Your course has a compulsory module on sorting spreadsheets. The practice file is a warehouse stock list: part numbers, bin locations, reorder quantities. You draw in your spare time and have a messy pile of pencils, papers, and paints you have been meaning to organise for a year. Every minute spent sorting imaginary widgets feels like a minute stolen from something you would rather be doing.',
          'Hold the two things apart for a moment. The requirement is real and specific: you must show that you can sort a table so that every row stays intact, each item keeping its own price and quantity when the order changes. That is non-negotiable and you cannot wish it away. But look at what the requirement does not say. It does not say the rows must be widgets. It does not say the practice must use the supplied file. The skill is fixed; the material it is practised on may not be. People tend to see a required task as all-or-nothing, total freedom or total control. Most required tasks are neither. They are a fixed core with a soft edge, and the soft edge is where your choice lives.',
        ],
      },
      {
        title: 'Autonomy concerns a sense of volition',
        paragraphs: [
          'A child who must eat vegetables but gets to choose between carrots and peas eats more vegetables, and not because the choice is large. It is because the meal stopped being entirely something done to them and became, in one small respect, something they did. The vegetables did not become optional. The child\'s relationship to the plate changed.',
          'Psychologists who study motivation describe this with self-determination theory, which distinguishes between acting from a sense of personal endorsement and acting mainly under pressure. The word they use is autonomy, and it is easy to mishear. It does not mean having no obligations, and it does not mean refusing guidance. It means experiencing what you do as, in some part, chosen. A required task can carry that experience if it contains a real choice about its purpose, its example, or its approach, with the requirement itself untouched. The choice has to touch something that matters to the work, though. Picking the colour of your spreadsheet tabs while every learning decision stays fixed will not change how detached the exercise feels. Choosing a question you genuinely want answered can. How do I sort my supply list by cost without separating any material from its price? That question is yours, and the required operation is now the way to answer it.',
        ],
      },
      {
        title: 'Ask which part is genuinely flexible',
        paragraphs: [
          'The practical move is a question, not an assumption. In a fictional version of the conversation, you ask the tutor: can I use an invented art-supply table for the sorting exercise instead of the stock list? The tutor says yes, as long as you demonstrate the same checks, every item still attached to its own information after the sort. You build a small table of your own, work through the guided example on it, and then do a second sort unaided. The assessment is unchanged. The material is yours.',
          'Be honest about what the choice buys. It does not promise you will enjoy spreadsheets. It gives the required skill a question you recognise, which is a different and more reliable thing than enjoyment. And be honest about the limits. If the example is fixed for assessment reasons, look for a choice elsewhere, perhaps in how you practise before the assessment, or ask why that example is required; there may be a good reason. What you must not do is assume permission that was never given, skip the skill being assessed, or talk yourself into a story in which every compulsory task secretly hides a passion. Some do not, and saying so is more useful than pretending.',
        ],
      },
      {
        title: 'Where the choice is and is not',
        paragraphs: [
          'Two mistakes bracket this skill. The first is treating the whole task as imposed and sitting through it resentfully, never looking for the soft edge. The second is treating a cosmetic preference, tab colours, font size, as if it were the meaningful choice, and then wondering why the work still feels like someone else\'s. A meaningful choice changes the question the work is answering. A cosmetic one changes how the answer looks.',
          'Two habits. For any required task, write the requirement in one sentence first, exactly as stated, before deciding what is optional; guessing at flexibility is how people get caught out. Then ask one question of the task: what do I actually want this skill to do for me? If there is an honest answer, find the allowed place to use it. If there is not, do the task well and move on, without the story.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Negotiate the example, not the required skill',
        alt: 'A learner asks to use a fictional art-supply table; the tutor allows it while keeping the required sorting checks.',
        caption: 'Read the tutor\'s line and notice what it holds onto: the check that every item stays with its information. That is the fixed core. Everything the learner changes is at the soft edge, and the learner asked rather than assumed. Carrots or peas; the vegetables stay. Fictional exchange.',
        items: [
          { label: 'Learner', detail: 'May I practice sorting with an invented art-supply table?' },
          { label: 'Tutor', detail: 'Yes. Show that each item stays attached to its information.' },
          { label: 'Learner', detail: 'Then I will test the sort I need for planning materials.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['A required learning task', 'Paper'],
      steps: [
        'Write the actual requirement in one sentence, as it is stated, not as you remember it. Underline the verbs: demonstrate, sort, show. Do not guess yet which parts are optional; the sentence tells you what is fixed.',
        'Write one question you personally want this skill to answer, in your own words and about your own life. If nothing comes, that is honest information too; skip to doing the task well.',
        'Find the soft edge: an example, a method, or a practice route that the requirement does not pin down. If you are unsure whether it is allowed, ask. Permission you assumed is not permission.',
        'Draft a short practice plan that uses your question as the material while meeting every underlined verb from step one. Check it against the requirement sentence before you start.',
      ],
      notice: 'The task now has one part that is yours, and the required standard has not moved an inch. The vegetables are still on the plate; you chose the carrots.',
      troubleshooting: 'If the only choices available are cosmetic, the colour of a tab, the order of your notes, say so plainly rather than dressing them up. A small honest it is just required beats a story about hidden meaning, and it leaves you free to do the thing efficiently and get back to your drawing.',
    },
    recall: {
      prompt: 'A mandatory course on a software platform seems unrelated to anything you do, but the practice scenarios are described as flexible. What choice could connect it to your purpose?',
      hint: 'Find a real question of your own that fits inside the allowed scope.',
      answer: 'Start by writing the requirement exactly, which is probably something like demonstrate these operations on the platform; the scenario is the soft edge. Then ask what you would actually use the platform for, and build or borrow a scenario that resembles that: a fictional version of a task you expect to face, or a public example from your own field, rather than the generic one supplied. Work the required operations on your scenario. The course requirement is met to the letter, the confidentiality rules are respected because the scenario is fictional or public, and the work is now answering a question you recognise. If the scenarios turn out to be fixed after all, ask why before assuming, and look for the choice in how you practise instead.',
    },
    quiz: {
      question: 'A course topic is fixed, but the practice examples are flexible. Which choice connects the work to your own purpose?',
      options: ['Use the standard example only because everyone else uses it.', 'Choose the shortest example without considering what you want to learn.', 'Choose an allowed example that answers a question you personally care about.'],
      correctIndex: 2,
      explanation: 'A question you care about turns the allowed choice into something that changes your relationship to the work; that is the carrots-or-peas moment, with the requirement intact. Following everyone else is a decision made by the room, not by you. Picking the shortest example optimises for being done, which is a reasonable goal and a different one from connecting the skill to a purpose.',
    },
    takeaway: 'Write the requirement exactly, then look for the soft edge, an example or method it leaves open, and fill it with a question of your own; if there is no soft edge, say so and do the task well without the story.',
    sourceNote: 'Self-determination theory supplies the autonomy framework. The spreadsheet conversation is invented and does not promise enjoyment or authorize changing course requirements.',
  },
  {
    id: 'mind-036',
    title: 'Make progress visible in one specific capability',
    outcome: 'Judge whether you have got better at something by naming one narrow thing a reader can now do that they could not do before, instead of relying on praise, polish, or a general feeling of improvement.',
    scene: 'Improving directions from a courtyard gate to a starred workshop door on a fictional map',
    sections: [
      {
        title: 'Better at explaining is too broad to inspect',
        paragraphs: [
          'You are asked to write directions to a workshop room for people arriving at a community building. Your first draft: turn right and use the starred door. It is short and confident and it sounds like directions. Then you look at the map. The route starts at the courtyard gate, runs straight ahead to a noticeboard, and only then turns right toward the starred door. Your sentence contains a turn and no place to turn from. A newcomer reading it would be standing at the gate, wondering: right from where?',
          'Now imagine trying to improve on that draft by making the font bolder, or adding a friendly welcome line. The sentence would look better and leave the reader exactly as lost. The gap is informational, not cosmetic. And notice how useless the phrase I want to get better at explaining is for finding it. Better at explaining does not point at anything. A reader can identify the starting place and the landmark for the turn does. Progress you can see has to be progress in something you can name.',
        ],
      },
      {
        title: 'Competence concerns effectiveness in a task',
        paragraphs: [
          'A swimmer who wants to know whether they are improving does not ask the coach for encouragement. They look at a time for a specific distance, this week against last week. The time is narrow, it is checkable, and it is about the swimmer\'s actual effect on the water. A general sense of swimming better, or a kind word from the poolside, is pleasant and tells them nothing they can train on.',
          'Self-determination theory lists competence, the experience of being genuinely effective at something, among the things that sustain motivation. The useful implication for learning is that effectiveness has to be visible to be experienced, and it becomes visible through a specific before-and-after comparison, not through collecting praise or choosing tasks that were never hard. Three moves make the comparison real. Define the capability narrowly: a reader knows where to start and where the turn happens. Keep the first attempt, unedited, so the revision has something concrete to be better than. And judge against a reference, the map, rather than against how polished or confident the new version feels. A sentence can feel much better and be no more useful. The map does not care how it feels.',
        ],
      },
      {
        title: 'Repair the missing orientation',
        paragraphs: [
          'Rewrite from the map. Enter through the courtyard gate. Walk to the noticeboard, turn right, and use the starred workshop door. Put the two versions side by side. What changed is not the tone or the length; it is that the turn now happens at a place the reader can see, reached from a place the reader is standing. That is the capability, repaired. Before you call it accurate, trace every clause against the diagram: gate, straight on, noticeboard, right, starred door. Each one has to match an arrow.',
          'Then be exact about what you have demonstrated. You have improved these directions, for this route, on this map. That is real and worth noticing. It is not mastery of explanation in general, and it is not proof that every visitor will find the room; a real building might need lift locations or step-free routes the sketch does not show. Write the next gap down separately rather than letting the success swallow it. Specific evidence lets you recognise an improvement at its true size, which is the only size at which it can be built on.',
        ],
      },
      {
        title: 'Why vague progress feels good and teaches nothing',
        paragraphs: [
          'Praise and polish both produce a glow, and the glow feels like getting better. But the swimmer\'s time is the only thing the coach can actually coach, and a repaired direction is the only thing you can actually repeat. Broad improvement cannot be reproduced on purpose because nothing in it says what to do again.',
          'Two habits. Before revising anything, write the one capability you are trying to improve as a sentence about what the reader can then do. And keep the old draft; the comparison between two real versions is where you see the change, and a single polished version with its past deleted can only be admired, never learned from.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The missing start and turn landmark',
        alt: 'From the lower-left courtyard gate, travel upward to the noticeboard, then turn right toward the upper-right starred workshop door.',
        caption: 'Find the two things the first draft left out: the gate where you begin, and the noticeboard where the turn happens. The arrow labelled turn right only makes sense because the noticeboard is there to turn at. A fictional top-view map; the fix is information, not wording.',
        items: [
          { label: 'Courtyard gate', detail: 'The stated starting point.', x: 18, y: 77, shape: 'box' },
          { label: 'Noticeboard', detail: 'Reach this landmark before turning right.', x: 18, y: 24, shape: 'paper' },
          { label: 'Starred door', detail: 'The workshop destination.', x: 78, y: 24, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2, label: 'Turn right' }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The fictional route diagram'],
      steps: [
        'Write the first draft exactly, turn right and use the starred door, and draw a box around it. Do not edit it. This is last week\'s swim time, and you need it untouched for the comparison to mean anything.',
        'Write the criterion as a sentence about the reader: they must know where to start and the landmark at which to turn. Not clearer or better; a thing the reader can do.',
        'Revise the directions from the map, then trace each clause against the arrows in order. Any clause without a matching arrow is decoration.',
        'Underline the words in the new version that carry the repaired capability, gate and noticeboard, and write one limit the exercise does not cover, such as step-free access. The underline is the progress; the limit keeps it honest.',
      ],
      notice: 'You can point to a specific gap that is now closed, and to the two words that closed it. The draft did not become nicer. It became usable by a stranger at the gate.',
      troubleshooting: 'If your criterion comes out as it reads better or it seems clearer, you have written a feeling. Replace it with something a reader could be observed doing: find the gate, identify the turn. If you cannot name an action, you cannot check for progress.',
    },
    recall: {
      prompt: 'You rewrite an explanation with much nicer formatting, but the same reasoning step is still missing. What would show real progress instead?',
      hint: 'Compare what the reader can now explain, not what the page now looks like.',
      answer: 'Find the missing step and put it in, then check it against the source, and then look at whether a reader of the new version can say how the earlier observation leads to the conclusion. That is the swimmer\'s time: a narrow, checkable change in what the explanation enables. The formatting is the bolder font on the directions; it alters the look and leaves the reader in exactly the same place. Keep the old version beside the new one so the added step is visible as a difference, and say plainly that the progress is in this one piece of reasoning, not in explaining as a whole.',
    },
    quiz: {
      question: 'You revise directions after a reader could not find the start. Which comparison demonstrates progress?',
      options: ['The revision corrects the missing step and matches the reference map.', 'The revision receives a broad compliment about your talent for writing.', 'The revision has more pages and a more elaborate layout.'],
      correctIndex: 0,
      explanation: 'A specific repaired gap that checks out against the map is the swim time: a change in what the directions actually do for a reader. A compliment about talent is the glow from the poolside; it feels like progress and names nothing you could repeat. More pages and layout can accompany an improvement or bury the same missing start under more words.',
    },
    takeaway: 'Name the one thing a reader should be able to do, keep the old draft, fix the gap, check it against the reference, and claim exactly that much; progress you can point at is the only kind you can build on.',
    sourceNote: 'The competence concept comes from self-determination theory. This map exercise illustrates inspectable progress, not a measured motivational effect.',
  },
  {
    id: 'mind-037',
    title: 'Give an explanation a willing recipient',
    outcome: 'Let someone else\'s real question give your learning a purpose, offered rather than imposed, scoped to what they asked, and honest about what you still need to check.',
    scene: 'Using a paper folder sketch to answer a friend\'s question about opening a holiday photo folder',
    sections: [
      {
        title: 'A small question gives the lesson a use',
        paragraphs: [
          'A friend is trying to tidy up two years of holiday photos and asks you, a little embarrassed: if I open the Holiday folder, does that move the pictures somewhere? It is a small question with a worry behind it. You have been learning how computers organise files, and here is the first person who has ever wanted to know what you know.',
          'There are two ways to respond. One is to send them a forty-minute tutorial on file systems, because you have just learned about file systems and it is all interesting. The other is to ask: would a two-minute sketch of how folders work help? The second one treats their question as the thing that matters, which it is. It also leaves them free to say no thanks, which they might. A friend asking is an invitation. A friend being handed a lesson they did not ask for is being told they ought to know more, and nobody enjoys that.',
        ],
      },
      {
        title: 'Connection is not the same as performance pressure',
        paragraphs: [
          'Think of the difference between a neighbour who shows you how to fix a dripping tap because you asked, and a neighbour who corrects the way you hold a screwdriver every time they walk past. Both know about taps. Only one of them is a conversation you want to have again. The knowledge is identical; what differs is whether it arrived because you wanted it.',
          'Self-determination theory calls the feeling in the first case relatedness: a sense of genuine connection with other people. Teaching something can build that connection when it answers a need the other person actually has and leaves room for them to ask again. What does not reliably build it is a leaderboard, a compulsory demonstration, or any setup where you have to appear expert. Those turn an exchange into a test of standing, and standing is the enemy of the small admission that makes learning possible: I am not sure, let me check. So keep the scope honest. Explain the one thing you were asked, using information you have verified, and when a detail is beyond what you know, say so plainly. A relationship that makes uncertainty easy to voice is worth more than one in which you always had the answer.',
        ],
      },
      {
        title: 'Answer the folder question without touching real photos',
        paragraphs: [
          'Take a piece of paper and draw three nested boxes. The big one is Photos. Inside it, Holiday. Inside that, one picture, Beach. Now the explanation is a sentence: opening a folder shows you what is inside it, the way opening a drawer shows you the socks without moving them anywhere. Opening is looking. Moving and deleting are separate actions that you would have to choose on purpose. Trace it on the paper, not on your friend\'s actual photo library, because the point is to make them confident, not to experiment with the pictures they are worried about.',
          'Then ask the question that keeps the exchange theirs: which part is still fuzzy? If they say, but what about the albums in my phone\'s photo app, you have reached the edge of what you know. Say so. I am not certain that app\'s albums behave like ordinary folders; let me check before I tell you. The conversation has still done its job. One worry is gone, a second has a plan, and you were a person who knew one useful thing rather than a person pretending to know everything.',
        ],
      },
      {
        title: 'When helping turns into performing',
        paragraphs: [
          'The slide is easy to miss from the inside. You start answering the question and end up demonstrating how much you have learned. The signs are a widening scope, an explanation that keeps going after the question has been answered, and a reluctance to say I do not know. All three are about you, and the exchange was supposed to be about them.',
          'Two habits. Before explaining anything, repeat the question back in one sentence so you know exactly what was asked, and stop when that is answered. And treat let me check as a normal part of helping rather than a failure; the neighbour who says I would want to look at the tap before guessing is the one you trust.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Ask before explaining',
        alt: 'A friend asks about opening a folder; the learner offers a paper explanation.',
        caption: 'Notice that the learner\'s line is a question, not a lecture. It answers the worry in one word and then offers, rather than delivers, the explanation. The friend can still say no. Invented, voluntary exchange.',
        items: [
          { label: 'Friend', detail: 'Does opening Holiday move the pictures?' },
          { label: 'Learner', detail: 'No. Want to trace an ordinary folder example on paper?' },
        ],
      },
      {
        type: 'layers',
        title: 'One containing-folder example',
        alt: 'Photos contains Holiday; Holiday contains the Beach picture.',
        caption: 'Read from the outside in, like opening a drawer and then a box inside the drawer. Nothing moves when you look. This is a sketch of ordinary folders and says nothing about how a particular phone app arranges its albums.',
        items: [
          { label: 'Photos', detail: 'Contains the Holiday folder.' },
          { label: 'Holiday', detail: 'Contains the Beach picture.' },
          { label: 'Beach picture', detail: 'One file inside Holiday.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'A willing peer\'s question or the fictional folder question'],
      steps: [
        'Pick one small question that someone has actually asked you, or use the folder question on paper without involving anyone. Write the question down in their words; that sentence is the whole scope.',
        'Prepare an explanation that fits on half a page, with one concrete example, and put a mark beside anything you are not certain of. The marks are not weaknesses; they are the places where you will say let me check.',
        'If a real person is involved, ask whether they would like the explanation before giving it, then invite exactly one follow-up question. If you are working alone, write down the follow-up question you think they would ask.',
        'Keep the example on paper and away from anyone\'s actual files. Before extending the explanation past the original question, verify the uncertain parts; do not let the momentum of helping carry you into guessing.',
      ],
      notice: 'Your explanation answers one real question, stops when it is answered, and leaves room for the words I need to check. It is the neighbour fixing the tap you asked about.',
      troubleshooting: 'If you notice the explanation growing, or yourself reluctant to admit a gap, it has become a performance. Reread the question you wrote down in step one and cut everything that does not serve it.',
    },
    recall: {
      prompt: 'A peer on your course asks about one step they find confusing. How could you make the exchange useful without pretending you have the whole subject nailed down?',
      hint: 'Offer an explanation the size of the question, and keep your uncertainty visible.',
      answer: 'Start by asking what exactly is confusing, and repeat it back so you are both looking at the same step. Then explain that one step with an example you have actually checked, on paper or in a scratch file, not in their work. Invite a single follow-up. If the follow-up runs past what you know, say so and offer to find out together, because let me check from a peer is worth more than a confident guess that turns out wrong a week later. You are the neighbour who fixes the tap you were asked about and says they would want to look before guessing at the boiler.',
    },
    quiz: {
      question: 'A friend asks about one confusing chart label. Which exchange best serves that shared question?',
      options: ['Send a complete chart course before checking which part they need.', 'Offer a checked example, listen to their question, and acknowledge uncertainty.', 'Prepare a polished talk before asking what the label prevents them from understanding.'],
      correctIndex: 1,
      explanation: 'The bounded exchange keeps the friend\'s actual question at the centre and leaves room for I am not sure, which is what makes them comfortable asking again. A full course delivers everything except the one thing they wanted. A polished talk prepared before you know the problem is the screwdriver correction: it is about the helper, and the friend is just the audience.',
    },
    takeaway: 'Repeat the question back, answer exactly that with something you have checked, stop, and say let me check for the rest; a willing recipient turns your learning into help, and help is the size of the question.',
    sourceNote: 'Relatedness is part of self-determination theory. The folder exchange is an original example, not a guarantee of motivation or app-specific file guidance.',
  },
  {
    id: 'mind-038',
    title: 'Give a learning session a checkable finish',
    outcome: 'Before you start studying something, decide what you will be able to explain at the end and how you will check it, so the session has a finish line instead of a vague sense of having read enough.',
    scene: 'Learning when an editable poster project and a flattened sharing image serve different needs',
    sections: [
      {
        title: 'More reading does not define the finish',
        paragraphs: [
          'You want to understand how saving and exporting work in your drawing app. Tomorrow you need to change the text on a poster you made last month. You sit down with the plan read more about file formats. An hour later you have read about compression, colour profiles, and three acronyms. You feel vaguely more informed. You still do not know which file to open tomorrow to change the text.',
          'The plan had no edge. Read more can continue forever, because it names an activity and not a result. The only stopping signal it offers is tiredness. Compare it with a question. Which kind of saved file keeps the text as a separate thing I can still edit, and which kind is just a picture for sharing? That has an answer. You can tell when you have it. And it is the exact thing tomorrow\'s task needs. The session can end the moment you can answer it with a checked example, however many or few pages that took.',
        ],
      },
      {
        title: 'Specify learning when the method is unfamiliar',
        paragraphs: [
          'Someone training for a race does not run until they feel like they have run enough. They run a distance, at a pace, and the watch tells them when they are done. The finish is defined before the shoes go on. Study sessions almost never get that courtesy. That is why they drift. It is why they end with the feeling of having done something without being able to say what.',
          'Research on goal setting finds that specific goals focus attention and effort better than vague ones. There is an important caveat. A specific target cannot conjure knowledge you do not have; feedback, understanding, and the difficulty of the task all still matter. For an unfamiliar subject the useful kind of goal is a learning goal. It says what you will be able to understand or explain, not how much activity you will log. Write the product and its check together. Write a short comparison of the editable project file and the flattened export, and say which one lets me change the text later. That gives every page you read a job. It tells you when the job is done. Read until I feel productive hands the stopping decision to a feeling. Feelings about productivity are notoriously unrelated to whether you have understood anything.',
        ],
      },
      {
        title: 'Use an explicit example and stop at its boundary',
        paragraphs: [
          'For this illustrative app the rule is simple. Saving the project keeps every layer separate, text on its own layer, background on another. Exporting for sharing flattens all of that into a single image. So your comparison should say two things. To change the text later, I need the editable project file. The flattened image is for showing people how it looks, and the text in it is just pixels. Keeping both files serves both needs. Real apps have their own rules and their own documentation. You would check those before trusting this one.',
          'Now the check. Does your written comparison keep the distinction clear? Does it answer tomorrow\'s question about which file to open? If yes, the session has produced what it set out to produce. Stop. The temptation at this point is to keep going, because colour profiles are genuinely interesting and the acronyms are right there. Notice what you would be doing. You would be quietly replacing a finished goal with an endless one, and the endless one has no watch to stop it. Write the interesting tangents down as separate future questions and close the laptop.',
        ],
      },
      {
        title: 'What a checkable finish buys you',
        paragraphs: [
          'A defined product does two things a page count cannot. It tells you what to read for, so the irrelevant material is visibly irrelevant and you skim it without guilt. And it tells you when you are done. The session ends on a result rather than on exhaustion, and tomorrow you open the right file instead of staring at two.',
          'Two habits. Before any study session, write the question it should let you answer and the form the answer will take: a sentence, a comparison, a worked example. And when the answer is in hand, stop, even if the next chapter looks fascinating. The fascination goes on a list, and the list is for a session with its own finish line.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The distinction the session must explain',
        alt: 'An editable poster project retains separate layers; a flattened sharing image preserves the displayed appearance but not separate editable text layers.',
        caption: 'This card is the finish line. When you can say, in your own words, why the left column is the one you open to change the text and the right column is the one you send to a friend, the session is over. The rules here belong to an illustrative app; a real one has its own documentation.',
        items: [
          { label: 'Editable project', detail: 'Separate layers remain available for changing the poster text.' },
          { label: 'Flattened sharing image', detail: 'Shares the appearance without the separate editable text layers.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The illustrative app rules above'],
      steps: [
        'Write the question the session must answer: which file do I open tomorrow to change the poster text? Not read about formats; a question with an answer. This is setting the watch before the run.',
        'Write what the finished product will look like: a short comparison, a few sentences, that names which output serves the text change and which serves sharing.',
        'Write the comparison using the stated rules, then check it against them line by line. Does it say the editable project keeps the text layer and the flattened image does not? Does it say which one to open?',
        'When the comparison passes, write done beside it and list any other question that came up, colour profiles say, as a separate future session. Do not fold it into this one.',
      ],
      notice: 'Someone else reading your page could tell exactly what finished means here and could see that the comparison demonstrates it. The session ended on a result, not on a feeling.',
      troubleshooting: 'If your completion check turns out to be I read the chapter, you have measured activity, not learning. Replace it with a question the reading should let you answer or a decision it should let you make, and test yourself against that.',
    },
    recall: {
      prompt: 'Your stated goal is to understand routing better. How could you give one study session a finish you could actually check?',
      hint: 'Pick one narrow question and decide what the answer will look like before you start.',
      answer: 'Shrink it to one case. Choose a single documented example of route selection and set the goal as: explain, in a paragraph, why the route chosen in this example fits the stated criteria. The product is the paragraph; the check is reading it against the reference and confirming the reasoning matches. That is the watch on the runner\'s wrist. Understand routing better has no edge and will absorb every hour you give it; one explained example has an edge, teaches something real, and leaves you a clear next question for the next session rather than a general feeling of having read about routing.',
    },
    quiz: {
      question: 'You want to understand two export choices in one session. Which goal lets you check that you learned it?',
      options: ['Finish the chapter and highlight every format name.', 'Explore the interface until the choices feel familiar.', 'Explain the distinction using a checked example and a stated criterion.'],
      correctIndex: 2,
      explanation: 'The third goal names a product, an explanation, and a way to test it, the example and the criterion, so you know when you are done and whether you got it right. Finishing the chapter measures pages turned. Exploring until it feels familiar hands the finish to a feeling, and familiarity with buttons is not the same as knowing which file to open tomorrow.',
    },
    takeaway: 'Set the watch before the run: write the question the session must answer and what the answer will look like, check the answer when you have it, and stop there, putting every tempting tangent on a list for a session of its own.',
    sourceNote: 'Goal-setting research informs specificity and feedback. The app behavior is stipulated for this example, not universal file-format advice or a tested study goal.',
  },
  {
    id: 'mind-039',
    title: 'Ask which part of the work can be changed next',
    outcome: 'When feedback arrives as a verdict, turn it into a question about one specific, editable part of the draft, and check the answer before you build on it.',
    scene: 'Reviewing a fictional empty-events bug report that omits the active filter',
    sections: [
      {
        title: 'A judgment does not tell you what to edit',
        paragraphs: [
          'You have written a bug report. It says: I opened Events and no results appeared. A colleague reads it and says it needs more detail. That is all they say. The first question that forms in your head is the wrong one: am I actually any good at writing these? It feels like the natural response, and it would lead you nowhere, because even a definitive answer, yes or no, would not tell you which word to change.',
          'Here is the question that goes somewhere: what in this report can another person not reproduce or judge? Someone reading your sentence does not know what the screen looked like before you opened Events, what settings were on, or what you expected to see. Those are gaps in the report, and gaps can be filled. A verdict on the writer cannot be acted on. A missing condition can be typed in. The skill is to feel the verdict forming and redirect it toward the draft.',
        ],
      },
      {
        title: 'Feedback can direct attention toward different targets',
        paragraphs: [
          'Picture a driving instructor. One says you are a nervous driver. Another says you braked late into that corner because you were still looking at the mirror. The first comment is about you and gives you nothing to do except feel nervous about being nervous. The second is about one action on one corner, and you can change it on the next corner. Same lesson, same car, completely different usefulness.',
          'A large review of feedback studies found something that surprises people: feedback does not reliably improve performance, and in a meaningful share of cases it makes things worse. The pattern behind that is where the feedback points attention. Comments aimed at the person tend to pull attention away from the task. Comments aimed at the task, or at a specific process inside the task, leave attention where the fix is. So when you receive a verdict, ask for a target instead: which condition is missing, which step is ambiguous, where does the conclusion run ahead of the evidence? One more caution, because specific feedback is not automatically correct feedback. The instructor who names the corner could still be wrong about the mirror. Check a specific comment against the task and the reference before acting on it. You are after a good revision decision, not obedience to whoever sounds most certain.',
        ],
      },
      {
        title: 'Find the missing filter without inventing a cause',
        paragraphs: [
          'Back to the bug report. Instead of asking whether it is good enough, you ask: what would you need in order to reproduce the empty list yourself? Your colleague thinks for a second and asks which filter was active when you opened Events. You check your notes. Upcoming only. You add that line to the report, and you add a proposed next step: compare the result with the filter set to All events. The report now contains the starting state and a test that someone could actually run.',
          'Then comes the moment where good reports go wrong. It is tempting to write the filter caused the empty list, because it feels like the natural conclusion of the conversation. But nobody has made the comparison yet. The feedback found a missing piece of information; it did not establish an explanation. Write what you know, the filter that was active, and what you will check, the comparison, and leave the cause blank until the check is done. Afterwards, reread the draft as a stranger and ask whether they could now identify the starting state and see what is still open.',
        ],
      },
      {
        title: 'Why the verdict is so tempting and so useless',
        paragraphs: [
          'A verdict feels like the big question, so asking it feels like taking feedback seriously. But it has no handle. Am I good at this? can be answered and still leave the report exactly as unreproducible as before, whereas which filter? repairs a sentence in thirty seconds. The small question is the serious one.',
          'Two habits. Whenever feedback comes as a judgment, translate it before you feel it: what in the draft would need to change for that judgment to be different? And keep two columns in your revision, what the feedback told you is missing and what the feedback made you suspect; only the first column goes straight into the report, and the second waits for a check.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A review question leads to an editable condition',
        alt: 'A writer asks what is needed to reproduce an empty list; the reviewer asks for the filter, and the writer identifies Upcoming only.',
        caption: 'Read the writer\'s first line. It does not ask is this good; it asks what you would need to reproduce it, and that question is what turns a vague needs more detail into a specific missing filter. Notice the last line records the filter and proposes a check, without claiming the filter is the cause.',
        items: [
          { label: 'Writer', detail: 'What would you need to reproduce the empty list?' },
          { label: 'Reviewer', detail: 'Which filter was active when you opened Events?' },
          { label: 'Writer', detail: 'Upcoming only. I will record it and propose checking All events.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The fictional draft or a nonconfidential personal explanation'],
      steps: [
        'Choose a draft and write, in one line, the job it should let a reader do: reproduce the bug, follow the route, make the decision. Feedback is only useful measured against that job.',
        'Catch the verdict question, am I good at this, and write beside it a replacement about the draft: which condition, observation, or reasoning step is missing for the reader to do the job? This is the instructor naming the corner instead of the driver.',
        'Use the fictional filter exchange, or a willing reviewer\'s reply, to draft one specific revision. Add the missing piece in the words a stranger would need.',
        'Reread the revision and check two things: does it close the gap, and has any suggested explanation slipped in as a fact? If you wrote the filter caused it before comparing, move that sentence to a next check line.',
      ],
      notice: 'The feedback produced an edit or a check that another person could look at. Nothing about the exchange was a score, and nothing in the draft claims more than was observed.',
      troubleshooting: 'If the comment stays broad, needs work or unclear, ask for one concrete example of where a reader got stuck. If the comment is specific but unsupported, verify it against the task before changing the claim; specific is not the same as right.',
    },
    recall: {
      prompt: 'Someone tells you your travel directions are confusing. What feedback question would actually help you revise them?',
      hint: 'Find the place where the reader loses the route.',
      answer: 'Ask where exactly they lost the thread: which starting point, landmark, or turn could they not identify? That is the instructor naming the corner. Confusing is a verdict with no handle; the gate, the noticeboard, and the right turn are sentences you can repair. Once they name the spot, check that instruction against the map yourself rather than taking their word for it, and fix that one thing. Asking whether you are generally good at explaining would feel like taking the criticism seriously and would leave the directions exactly as confusing as before.',
    },
    quiz: {
      question: 'A reviewer cannot follow your report. Which request best locates the next evidence gap?',
      options: ['Could you give the report an overall clarity score?', 'Could you rewrite the whole report in your preferred style?', 'Which step needs another observation before the conclusion follows?'],
      correctIndex: 2,
      explanation: 'The third request points at one step in the task, which is where a fix can happen; it is the corner, not the driver. A clarity score is a verdict with nothing to edit. A full rewrite in someone else\'s style might improve things, but it hands the work away and still does not isolate which observation was missing, so you learn nothing about what to include next time.',
    },
    takeaway: 'When feedback arrives as a judgment, translate it into a question about one missing condition, observation, or reasoning step, fix that, and keep anything the feedback merely suggested in a separate column until you have checked it.',
    sourceNote: 'The feedback review documents varied intervention effects. The report and dialogue are invented; task-focused feedback still needs judgment and verification.',
  },
  {
    id: 'mind-040',
    title: 'Value the result without pretending to enjoy every step',
    outcome: 'Tell the difference between enjoying a task and genuinely wanting what it produces, so you can do dull necessary things without faking enthusiasm or treating boredom as proof they are pointless.',
    scene: 'Labeling moving boxes so bedding can be found on the first evening in a new home',
    sections: [
      {
        title: 'Labeling boxes is still dull',
        paragraphs: [
          'It is the last evening before a house move. The furniture is wrapped, the kitchen is in boxes, and you have reached the part nobody puts on a moving-day montage: writing on the boxes. Bedroom: sheets and pillowcases. Kitchen: mugs. Marker pen, cardboard, repeat. It is not interesting. It will not become interesting. And yet tomorrow night, in a new house with thirty identical brown boxes, you will want to go to bed without opening twenty of them to find a duvet cover.',
          'Notice the two feelings sitting side by side without cancelling each other out. The labelling is boring. The reason for the labelling matters to you a great deal. There is a strange cultural pressure to collapse these, to tell yourself you have discovered the quiet joy of organisation before you are allowed to pick up the pen. You do not need to. Enjoying an activity and wanting the result it produces are two separate reasons for doing something, and the second one is perfectly good on its own.',
        ],
      },
      {
        title: 'An endorsed purpose can be instrumental',
        paragraphs: [
          'Think about brushing your teeth. Almost nobody enjoys it. Almost nobody experiences it as an imposition either; you do it because you want your teeth, and that reason is entirely your own. Compare that with a form your manager insists you fill in for reasons nobody has explained. Both tasks are dull. Only one of them feels like pressure, because only one of them has a purpose you have not taken on as yours.',
          'Self-determination theory draws this line carefully. Intrinsic motivation is doing something for its own interest or pleasure. Extrinsic motivation is doing it for an outcome beyond the activity, and the theory\'s useful point is that extrinsic reasons come in grades, from pure external pressure through to purposes you have fully made your own. Teeth-brushing is extrinsic and fully endorsed. The mystery form is extrinsic and not. So for the boxes there are two honest reasons available. You might enjoy lettering, in which case the labelling is its own reward. Or you might simply want to find the bedding tonight, which depends on an outcome beyond the pen strokes but is no less yours for that. Naming the distinction matters because it blocks a bad inference: this is boring, therefore it does not matter. Boredom tells you about the activity. It tells you nothing about the value of the result.',
        ],
      },
      {
        title: 'Define the adequate result from the purpose',
        paragraphs: [
          'Once the purpose is clear, it also tells you how much work is enough. If the goal is finding bedding on the first night, then a legible room-and-contents label on a side you can see when the boxes are stacked is the whole job. A colour-coded inventory with numbered boxes and a spreadsheet would be more work and would not get you to bed any sooner. Write the label, glance inside to confirm it matches, put the box where its side shows, move to the next one. Stop when the boxes you will need tonight can be told apart from the ones that can wait.',
          'Two guardrails keep this honest. First, having a real reason for one task does not make every demand reasonable; you can still question a requirement that serves no purpose you recognise, ask for help with a job too big for one person, or shrink something that has grown past its point. Second, you are not obliged to find a noble purpose behind everything you do. The framework explains one specific decision: you are doing a small dull thing because you want what it gives you. It asks you to be clear about that. It does not ask you to pretend the dull thing got fun.',
        ],
      },
      {
        title: 'Why the honest reason lasts longer than the fake one',
        paragraphs: [
          'Manufactured enthusiasm runs out around box twelve, and when it goes it takes the task with it, because the task was resting on a feeling that was never real. I want to find the duvet tonight does not run out. It is still true at box thirty. Reasons that are actually yours survive boredom; reasons you performed for yourself do not.',
          'Two habits. When a task is dull, say so out loud and then ask separately whether you want what it produces; keep the two answers apart. And let the purpose set the finish line, so the dull task is exactly as big as the result requires and not one decorative step bigger.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two reasons to label the bedding box',
        alt: 'Someone can enjoy lettering itself or value finding sheets later, without those reasons being identical.',
        caption: 'Both columns are real reasons and either one is enough to pick up the pen. Look at the right column: it is the teeth-brushing reason, dull activity, wanted result, fully your own. Wanting readable labels never required enjoying the writing.',
        items: [
          { label: 'Enjoy the lettering', detail: 'The activity itself is interesting or pleasant.' },
          { label: 'Find bedding tonight', detail: 'A readable Bedroom: sheets label serves an endorsed purpose.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'One ordinary task you find dull'],
      steps: [
        'Name the task and write down honestly whether you enjoy doing it. No softening; the exercise only works if the first answer is true.',
        'Separately, write the practical result the task produces, who benefits from it, and whether you personally want that result. This is the teeth-versus-mystery-form question: is the purpose yours, or only someone else\'s?',
        'From the purpose, define the smallest finished product that fully serves it, the legible label rather than the colour-coded inventory. Write that down as the finish line.',
        'Find one embellishment you can drop, or one requirement that serves no purpose you can name, and remove or question it. Do not cut anything that is a genuine safeguard; the point is fitting the work to the purpose, not doing less for its own sake.',
      ],
      notice: 'You have a reason you believe, even though your opinion of the activity has not moved an inch. That is the sign you are standing on the purpose rather than on performed enthusiasm.',
      troubleshooting: 'If no purpose feels genuinely yours after step two, do not invent one. Write that down instead and look hard at the requirement itself; a task with no owner of its purpose is a task worth questioning, and faking a reason only postpones that conversation.',
    },
    recall: {
      prompt: 'You dislike writing handoff notes but want the next person to avoid repeating checks you have already done. How would you describe your reason, and what counts as finished?',
      hint: 'Separate liking the writing from valuing a usable handoff.',
      answer: 'Say both halves plainly. The writing is dull and I do not expect that to change; and I want the next person to know what state things are in and which check comes next, because I have been the person who redid a morning\'s work for lack of a note. The second half is the reason and it is entirely mine, like brushing teeth rather than filling in the mystery form. Finished means a short, accurate note that names the current state and the next check. Not a beautifully formatted document, not a performance of diligence; the smallest thing that lets the next person start where I stopped.',
    },
    quiz: {
      question: 'Which reason for labeling a moving box shows personally endorsed value rather than enjoyment or pressure?',
      options: ['I find labeling dull, but I value finding the bedding later.', 'I enjoy drawing letters and choosing their shapes.', 'I want to avoid criticism from the person insisting on labels.'],
      correctIndex: 0,
      explanation: 'The first reason is the teeth-brushing case: the activity is openly dull and the result is openly wanted, and the wanting is the speaker\'s own. The second is genuine enjoyment of the lettering, which is a fine reason but an intrinsic one, not a case of valuing the outcome. The third is the mystery form: the task is driven by avoiding someone else\'s disapproval, which is pressure rather than a purpose the speaker has made theirs.',
    },
    takeaway: 'Keep enjoying a task and wanting its result as two separate questions; a result you genuinely want is reason enough to do a dull thing, it sets how much of the thing is enough, and it does not require you to pretend the pen strokes became fun.',
    sourceNote: 'Self-determination theory distinguishes intrinsic interest from different forms of extrinsic motivation. The moving-box exercise is an original application, not a promise to remove boredom.',
  },
]