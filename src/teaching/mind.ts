import type { LessonGuide } from './types'

export const mindGuides: LessonGuide[] = [
  {
    id: 'mind-001',
    title: 'Leave yourself a starting point before a break',
    outcome: 'Save the unfinished decision and a concrete first action so you can resume an everyday task.',
    scene: 'Pausing a grocery list before checking the cupboard for tomatoes',
    sections: [
      {
        title: 'The list is open, but the decision is missing',
        paragraphs: [
          'You are making a grocery list for tomorrow. Pasta and onions are already listed. You are deciding whether to add tinned tomatoes when a friend calls. Later, the list is still open, but you cannot remember whether you checked the cupboard or merely thought about checking it. You read the ingredients again and start the same decision from scratch.',
          'Nothing disappeared from the screen. What disappeared was your place in the reasoning: what was settled, what remained uncertain, and what you intended to inspect next.',
        ],
      },
      {
        title: 'Write the state, not the whole history',
        paragraphs: [
          'A restart note puts those missing pieces somewhere you can read. It is a small handover to your future self. Research on attention residue concerns thoughts about earlier work persisting after a switch. Forgetting your place on return is a related practical difficulty, not the definition of attention residue. This note is a way to preserve context, not a promise to remove every cost of interruption.',
        ],
      },
      {
        title: 'A completed note for the grocery list',
        paragraphs: [
          'Write: "Done: pasta and onions are on the list. Still deciding: do we need tomatoes for the sauce? First action: check the lower cupboard shelf for an unopened tin, then add tomatoes if none is there." The first line prevents repeating a settled choice. The second keeps uncertainty honest. The third supplies a place to begin.',
          'Compare that with "Finish shopping list." Both notes name the task, but only one tells you what to do on return. Put the useful note beside the list. When you come back, inspect the shelf before reconsidering the whole meal. If the plan changed during the break, update the note rather than following it blindly.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Where the grocery decision resumes',
        alt: 'Pasta and onions are settled, tomatoes remain uncertain, and checking the lower shelf is the next action.',
        caption: 'Read the saved state in order. The final box names an observable check, not a command to concentrate.',
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
        'Choose a list, draft, or hobby task that you can leave safely. Do not interrupt cooking or another safety-sensitive activity.',
        'Write one settled result, one open question, and one physical or on-screen action that would address it.',
        'Place the note with the task and take your normal break. No artificial interruption is needed.',
        'On return, read the note and try just its first action. Rewrite any wording that still makes you guess.',
      ],
      notice: 'You can begin a specific check without reconstructing every earlier choice.',
      troubleshooting: 'Replace "continue" with a verb, an object, and where to find it.',
    },
    recall: {
      prompt: 'You pause while choosing a backpack. Size is checked, but you do not know whether your lunchbox fits. What restart line would help?',
      hint: 'Name the unresolved fit question and the first comparison.',
      answer: 'Measure the lunchbox and compare it with the shortlisted bag\'s internal dimensions. That resumes the missing check instead of reopening every bag listing.',
    },
    quiz: {
      question: 'A puzzle session stops with one corner unfinished. Which note offers the clearest restart?',
      options: ['The puzzle is nearly finished; continue the corner.', 'Several blue pieces were difficult to place.', 'Blue corner unresolved; compare the two straight-edged pieces beside the box.'],
      correctIndex: 2,
      explanation: 'The last note identifies both the unresolved area and an available action. A progress summary or difficulty report preserves less of the next decision.',
    },
    takeaway: 'Save what is settled, what is uncertain, and where the next check starts.',
    sourceNote: 'Leroy provides background on task switching. This original grocery example and note format were not tested in that study.',
  },
  {
    id: 'mind-002',
    title: 'Batch by the rule you are using',
    outcome: 'Group nonurgent tasks by their mental operation rather than by the app or object they share.',
    scene: 'Checking addresses and composing messages for three birthday cards',
    sections: [
      {
        title: 'One pile of cards, two kinds of work',
        paragraphs: [
          'Three birthday cards need addresses checked and personal messages written. You verify the first address, compose its message, verify the second address, and continue that way. Everything happens at the same table. It still feels as though you keep starting over: checking an exact postcode and finding a warm sentence ask different things of you.',
          'The envelope is not the useful unit for this decision. The operation is. Address checking means matching details against a record. Message writing means choosing something you want to say to a particular person.',
        ],
      },
      {
        title: 'Switching means selecting a new rule',
        paragraphs: [
          'Task-switching experiments compare repeating a task rule with changing it. A rule tells you what information matters and which response to make. When the rule changes, you must select the new operation rather than merely continue the old one. Sharing a desk or an application does not make those operations identical.',
          'For work without an immediate deadline, batching keeps the same rule available across several items. It does not eliminate thinking, and the next item can still require judgment. Urgent requests and tasks that genuinely depend on one another need their own order.',
        ],
      },
      {
        title: 'Count changes, not imagined minutes saved',
        paragraphs: [
          'In this invented sequence, check, write, check, write, check, write contains five changes of rule. Check, check, check, write, write, write contains one. Those counts describe the arrangement, not measured time savings or research effect sizes.',
          'Try verifying all three addresses first. Mark each checked envelope, then write the messages. Keep each card paired with its envelope so the new arrangement does not create a matching problem. If one card must leave now, finish that card first; a tidy batch is not more important than its purpose.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Rule changes across six operations',
        alt: 'Alternating address checks and messages has five rule changes; grouping the checks then messages has one.',
        caption: 'Counts from the invented six-operation sequence above. Bar length is not time, effort, or productivity.',
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
        'Choose four to six small tasks that have no immediate deadline or dependency forcing their order.',
        'Label the operation beside each: compare, calculate, compose, or another precise verb.',
        'Group matching operations while keeping the objects and recipients identifiable.',
        'Complete one group and note where a different rule was still needed.',
      ],
      notice: 'The new order repeats a method, rather than merely keeping the same app open.',
      troubleshooting: 'If the batch causes confusion, reduce its size and add simple checked or unfinished markers.',
    },
    recall: {
      prompt: 'Your inbox contains receipt totals to check and invitations needing thoughtful replies. How would you batch it?',
      hint: 'Both are email, but what do you do with each?',
      answer: 'Check the receipt totals together, then compose the replies, subject to real deadlines. The grouping follows numerical verification versus writing, not the inbox location.',
    },
    quiz: {
      question: 'You are sorting photos and writing captions. Which batch repeats the same rule?',
      options: ['Choose the sharp photo from each pair before drafting captions.', 'Finish a selection and caption for each photo in turn.', 'Keep everything in the same editing window while alternating tasks.'],
      correctIndex: 0,
      explanation: 'Repeated sharpness comparisons keep the selection rule in use. Completing each photo can suit dependencies, but it does not minimize these rule changes.',
    },
    takeaway: 'Batch a repeated mental operation when timing and dependencies allow it.',
    sourceNote: 'Task-switching research supports the distinction between rules. The card sequence illustrates that distinction, not a tested workflow benefit.',
  },
  {
    id: 'mind-003',
    title: 'Stop optional alerts before they arrive',
    outcome: 'Distinguish ignoring a notification from preventing its arrival during a personal reading session.',
    scene: 'Reading a mystery chapter while a group chat vibrates on the table',
    sections: [
      {
        title: 'You never picked up the phone',
        paragraphs: [
          'You are reading a mystery novel when a group chat makes your phone vibrate. You leave it face down. A few lines later, you realize you are wondering whether the message concerns tonight\'s plans rather than following the character\'s explanation. You have not replied, but your attention has already moved toward a different question.',
          'It is tempting to count interruptions only when you open another app. That misses the moment when an alert becomes a new thing to notice, interpret, or resist.',
        ],
      },
      {
        title: 'Delivery and response are separate decisions',
        paragraphs: [
          'In a laboratory attention task, phone notifications disrupted performance even when participants did not interact with the phone. The finding does not tell us a fixed cost for every buzz, reader, or chapter. It does establish that replying is not required for a notification to affect a task.',
          'Putting the phone face down hides its display but can leave sound and vibration intact. Muting an optional conversation changes whether its alert arrives. Checking messages at a chosen point changes when you interact with them. Those are different controls, and you can choose them separately.',
        ],
      },
      {
        title: 'Keep the needed exception',
        paragraphs: [
          'Suppose your sibling is expected to call about a pickup, while the book-club chat can wait. Before reading, mute the chat using the controls you understand and keep the expected call available. At the end of the chapter, check the chat deliberately. You have postponed an optional channel, not declared other people unimportant.',
          'If your phone cannot separate those channels reliably, choose a smaller adjustment or another reading time. Never silence required work, care, or safety alerts for this exercise. The useful comparison is whether your chosen setup lets optional messages wait without breaking an actual responsibility.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two face-down phones, different delivery',
        alt: 'A face-down phone still vibrates for the chat; a phone with that chat muted leaves the expected call available.',
        caption: 'Compare notification delivery, not willpower. These are schematic settings, not instructions for a particular phone.',
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
        'Name one optional app or conversation that commonly alerts you while reading.',
        'Check which calls or alerts must remain available. Leave unfamiliar or required settings unchanged.',
        'Mute only the optional source and read a short passage. Note interruptions without judging yourself.',
        'At a natural stopping point, check messages and restore the setting if this was a temporary trial.',
      ],
      notice: 'The optional source no longer demands a decision during the passage.',
      troubleshooting: 'If alerts still arrive, inspect that source\'s sound and vibration controls rather than disabling everything.',
    },
    recall: {
      prompt: 'You ignore shopping banners while comparing travel dates, yet keep losing the dates. What could you change?',
      hint: 'Change what reaches you, not merely whether you click it.',
      answer: 'Pause optional shopping notifications for the comparison, leaving necessary travel and personal contacts available. Ignoring a visible banner happens after it has already reached you.',
    },
    quiz: {
      question: 'A music app alerts you during study, but you never open it. Which conclusion fits?',
      options: ['The interruption cost must equal the time needed to answer.', 'An alert can affect attention even without an app switch.', 'Leaving the screen dark prevents every kind of notification interruption.'],
      correctIndex: 1,
      explanation: 'Receiving an alert can matter before any response. The research does not provide a universal cost, and a dark display can still accompany sound or vibration.',
    },
    takeaway: 'Control optional delivery before relying on your ability to ignore it.',
    sourceNote: 'The linked notification experiment used a laboratory attention task. The reading arrangement is an original application, not a guaranteed improvement.',
  },
  {
    id: 'mind-004',
    title: 'Return from a break with a named check',
    outcome: 'Use a natural pause to restate the goal of repetitive work without inventing a universal timer rule.',
    scene: 'Checking dates in a neighborhood newsletter before moving to its next page',
    sections: [
      {
        title: 'Reading the page stops being checking',
        paragraphs: [
          'A neighborhood newsletter lists several upcoming events. Your job is to compare each printed date with the organizer\'s supplied schedule. At first you look back and forth carefully. Later, the entries become familiar and your eyes travel down the page without making the comparison. You reach the bottom but cannot say which dates you verified.',
          'The task has a clear criterion. The difficulty is keeping that criterion active through repeated, similar entries. Reading every word is not the same action as checking every date against a record.',
        ],
      },
      {
        title: 'A pause can include reorientation',
        paragraphs: [
          'A vigilance experiment found that brief, occasional diversions helped preserve performance, consistent with deactivating and reactivating a task goal. That is narrower than a claim that interruptions always help. A demanding conversation or another unfinished project can create a new task rather than a useful boundary.',
          'For suitable repetitive work, try finishing a small unit, looking away briefly, and stating the next criterion before returning. The criterion directs attention back to the operation you need. There is no research-backed interval in this lesson that everyone should obey, and a pause is not a substitute for rest when you need it.',
        ],
      },
      {
        title: 'Resume with the next unverified date',
        paragraphs: [
          'At the end of the newsletter\'s first page, mark the last checked event. Put the page down briefly.',
          'When you resume, say, "Compare the next event date with the organizer\'s schedule." Start at the first unmarked entry. That sentence contains the target, the reference, and the action.',
          'By contrast, "Read more carefully" leaves the operation vague. Opening a message thread during the pause can leave you thinking about a reply instead. Choose a boundary that suits the work and your responsibilities. If you keep losing your place, shorten the next review unit and make the checked marks clearer.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'A page boundary with a return instruction',
        alt: 'Mark the last checked event, pause, restate the date comparison, and begin at the next unmarked event.',
        caption: 'Events are ordered, not drawn to a time scale. No optimal pause duration is implied.',
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
        'Choose something safe, such as checking names against your own invitation list. Write the exact comparison.',
        'Check a small group and mark the last completed item before taking a natural pause.',
        'Return by saying the criterion and pointing to the next unchecked item.',
        'Complete another small group and check whether your marks show what was verified.',
      ],
      notice: 'You can describe what the next pass checks, not just which page it covers.',
      troubleshooting: 'If the task still feels mechanical, reduce the group size or stop for a proper break.',
    },
    recall: {
      prompt: 'You are reviewing subtitles for missing speaker names. What would you say after a pause?',
      hint: 'Include the target and where the unchecked work starts.',
      answer: 'Starting at the next unmarked subtitle, check whether a speaker name is needed and present. That restores this review\'s criterion rather than restarting a general watch-through.',
    },
    quiz: {
      question: 'Which newsletter pause best preserves the checking task?',
      options: ['Stop at any moment and resume wherever the page looks familiar.', 'Finish the page, then open a new conversation before returning.', 'Mark the boundary, pause, and name the date comparison on return.'],
      correctIndex: 2,
      explanation: 'A marked boundary and criterion provide an entry point. Familiarity does not identify verified entries, and a new conversation adds another goal.',
    },
    takeaway: 'A useful return begins with the criterion and the next unchecked item.',
    sourceNote: 'The brief-break finding concerns a vigilance experiment. Newsletter checking and the return sentence are practical suggestions, not a validated schedule.',
  },
  {
    id: 'mind-005',
    title: 'A successful search does not check the whole page',
    outcome: 'Separate a targeted inspection from other checks that still matter.',
    scene: 'Proofreading guest names on an invitation while overlooking its meeting room',
    sections: [
      {
        title: 'All the names are right',
        paragraphs: [
          'You proofread an invitation for a small reunion. You compare each guest\'s name with the list and correct a spelling. The page looks ready. Later, someone notices that the room still says Garden Hall even though the organizer changed it to Library Room. You looked at that line several times without checking its meaning.',
          'The name review succeeded at its own job. The mistake was turning that limited success into confidence about every detail on the page. A review needs a scope, even when the document is short.',
        ],
      },
      {
        title: 'Attention selects what serves the current task',
        paragraphs: [
          'Inattentional blindness describes missing an unexpected visible event while engaged in another visual task. It shows why looking in a direction is not equivalent to noticing everything there. Checking a printed invitation is a practical analogy, not a reenactment of that experiment.',
          'A named target helps you find relevant details but leaves other information without the same deliberate check. Experience does not make the scope unlimited. Rather than promising to notice anything unusual, assign another pass a different purpose and a reference against which to compare it.',
        ],
      },
      {
        title: 'Give the room its own review',
        paragraphs: [
          'Mark the first pass "Guest names checked." For the second, compare the room, date, and start time with the organizer\'s latest confirmation. Now Garden Hall conflicts with Library Room in a record you are deliberately consulting. Correct the room and record which confirmation you used.',
          'This does not make a checklist infallible. A checklist built from an outdated confirmation can preserve an error neatly. Its value is making each review operation visible: what you compared, what reference you used, and what remains unchecked. Someone else can then review the remaining issue instead of assuming that a polished page has been checked in every way.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two passes through the same invitation',
        alt: 'A guest-list comparison checks names; an organizer-confirmation comparison finds Garden Hall should be Library Room.',
        caption: 'Each pass has its own reference. Correct names do not establish a correct room.',
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
        'Choose a draft invitation, packing list, or similar low-stakes document and name one narrow check.',
        'Perform that check against its reference, then label exactly what you checked.',
        'Choose a different important detail and compare it with the appropriate reference in a second pass.',
        'Record any correction and one thing these two passes still do not establish.',
      ],
      notice: 'Your review record distinguishes checked targets from merely visible information.',
      troubleshooting: 'If you cannot name a reference, mark the detail unverified rather than declaring the whole draft correct.',
    },
    recall: {
      prompt: 'You found every charger on a packing list. Does that establish that all travel documents are packed? What comes next?',
      hint: 'Separate the target you searched for from the next target.',
      answer: 'No. Compare the required travel documents with the actual contents in a separate pass. Charger success is evidence about chargers, not proof of a complete bag.',
    },
    quiz: {
      question: 'You corrected prices on a poster. Which conclusion is justified?',
      options: ['The displayed prices were checked; the event address still needs its own check.', 'The whole poster is reliable because the price review was careful.', 'A second general glance is equivalent to checking the address against its source.'],
      correctIndex: 0,
      explanation: 'A targeted review supports a targeted claim. Another glance can still lack the address comparison that the decision requires.',
    },
    takeaway: 'Record the scope of a review instead of treating attention as complete coverage.',
    sourceNote: 'Inattentional-blindness research motivates limited-scope review. The invitation example and two-pass procedure are original heuristics, not guaranteed detection methods.',
  },
  {
    id: 'mind-006',
    title: 'Choose sound conditions for the memory task',
    outcome: 'Recognize when background speech competes with holding an ordered verbal sequence.',
    scene: 'Remembering three walking directions while a radio discussion plays',
    sections: [
      {
        title: 'You remember the places, but not their order',
        paragraphs: [
          'Before leaving home, you read a short route: pass the library, cross the footbridge, then enter the park. A radio discussion is playing nearby. When you try to repeat the route, all three places sound familiar, but you hesitate about which comes next. For this task, recognizing the landmarks is not enough. Their order is part of the answer.',
          'You might enjoy the radio while sorting laundry. That does not settle whether it suits holding a verbal sequence in mind. Different activities ask for different kinds of processing.',
        ],
      },
      {
        title: 'Unattended does not mean irrelevant',
        paragraphs: [
          'Research on unattended speech finds interference with short-term serial recall, meaning remembering items in their original order. Speech can matter even when you are not trying to listen to its meaning. Deliberately ignoring it does not remove the sound from the situation.',
          'That result is not a rule that silence improves every activity for everyone. It concerns particular memory demands. For the route, you can change the sound conditions, keep the sequence visible, or do both. An external note also changes the task: you are consulting directions rather than relying entirely on recall.',
        ],
      },
      {
        title: 'Compare the arrangement, not your character',
        paragraphs: [
          'Pause the optional radio discussion before rehearsing library, footbridge, park. Then write that order on a small note to consult when safely stopped. You have made two practical decisions: reduce competing speech during rehearsal and preserve the route outside memory for the actual walk.',
          'Do not test recall while crossing a road or block sounds needed for safety. A short home comparison can show whether an arrangement feels workable, but one better attempt cannot establish that sound caused the difference. Familiarity, order of attempts, and the difficulty of the material also change. Use the result to choose a convenient setup, not to diagnose your attention.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same route, different support',
        alt: 'Library, footbridge, park is rehearsed with a radio discussion playing or with speech paused and a route note visible.',
        caption: 'The route stays the same. This schematic compares arrangements, not measured recall scores.',
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
        'At home, write three familiar places in a chosen order. Read them, cover the list, and repeat the order.',
        'If optional speech is playing, pause it and try a different three-place sequence of similar familiarity.',
        'Compare where you hesitated, without treating the two attempts as a controlled experiment.',
        'Choose whether quiet, a visible note, or both would suit your next real sequence task.',
      ],
      notice: 'You separate remembering the items from remembering their order.',
      troubleshooting: 'If there is no difference, do not force one. Keep useful written support and required alarms available.',
    },
    recall: {
      prompt: 'You must remember the order of names for introducing a panel. Music with conversation nearby makes rehearsal difficult. What would you try?',
      hint: 'The sequence is verbal, and the event can also allow a note.',
      answer: 'Rehearse in a quieter place and prepare an allowed introduction card. A visible order reduces reliance on memory during the actual introductions.',
    },
    quiz: {
      question: 'Which task most closely matches the unattended-speech finding?',
      options: ['Selecting a wall color while listening to a podcast.', 'Recalling a short list of names in the order presented.', 'Organizing books by their visible cover size.'],
      correctIndex: 1,
      explanation: 'Ordered verbal recall matches the studied demand. Other tasks can have sound preferences, but the same research does not directly establish their effects.',
    },
    takeaway: 'Match the sound environment and memory support to the operation you need.',
    sourceNote: 'The linked study concerns unattended sound and short-term memory. The route exercise is illustrative and cannot measure an individual sound effect.',
  },
  {
    id: 'mind-007',
    title: 'Keep both versions visible when comparing',
    outcome: 'Find specific changes without treating familiarity with the old version as an exact record.',
    scene: 'Comparing old and revised reading-group invitations with one changed location',
    sections: [
      {
        title: 'The revised invitation looks familiar',
        paragraphs: [
          'A reading group sends an updated invitation. The typeface, color, and Saturday heading look unchanged. You remember the old version and assume the organizer has only tidied the layout. In fact, the meeting place changed from Reading Room to Courtyard, while the start time stayed at ten. The familiar appearance made the changed line easy to accept without comparison.',
          'When the question is what changed, your impression of the old invitation is not a complete reference. Keeping both versions available gives you something more precise to inspect.',
        ],
      },
      {
        title: 'Replace remembering with matching',
        paragraphs: [
          'A side-by-side comparison lets you match corresponding regions: heading against heading, time against time, location against location. That reduces the need to hold the earlier wording in memory while looking at the new version. You still have to choose the right regions and read their meaning.',
          'The inherited visual-attention source concerns inattentional blindness, not a direct test of this document-comparison technique. Its useful warning is that seeing a display does not establish complete awareness of its contents. Side-by-side review is a practical response to that limitation, not proof that every difference will be found.',
        ],
      },
      {
        title: 'A difference is not automatically a correction',
        paragraphs: [
          'Place the old and new invitations together. Record "Time: ten in both" and "Place: Reading Room became Courtyard." You now know which decision needs confirmation. Check the organizer\'s current message before telling the group where to meet.',
          'This separates detection from judgment. Finding Courtyard in the new version establishes that the text changed; it does not establish that the courtyard is booked. A text comparison tool can locate edits, but it cannot supply missing context. If your screen is small, compare one clearly labeled region at a time rather than rapidly flipping whole pages and trusting the overall look.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Read the location line in both versions',
        alt: 'The old invitation says Saturday, ten, Reading Room; the revision says Saturday, ten, Courtyard.',
        caption: 'Only the location changes in this invented pair. Detection comes before checking which location is correct.',
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
        'Label the versions old and new so their order remains clear.',
        'Keep both visible, or isolate matching lines if your screen cannot show both pages legibly.',
        'Compare heading, time, and place separately. Record exact differences and one unchanged detail.',
        'Mark which change needs an external confirmation rather than assuming the newer version is right.',
      ],
      notice: 'Your difference list contains changed content, not just "looks different."',
      troubleshooting: 'If layout distracts you, compare matching text regions first and leave visual styling for a separate pass.',
    },
    recall: {
      prompt: 'A revised train itinerary looks like the one you remember. How would you check whether the return station changed?',
      hint: 'Make the old station an available reference.',
      answer: 'Open the two return-leg entries together and compare station names, then confirm the current booking. Familiar dates or layout do not establish an unchanged station.',
    },
    quiz: {
      question: 'A comparison reveals a new address in a flyer. What has been established?',
      options: ['The address text changed; its correctness still needs checking.', 'The new address is correct because it is in the latest file.', 'The whole flyer has been verified because a difference was found.'],
      correctIndex: 0,
      explanation: 'A comparison identifies differences. Correctness and completeness are separate claims requiring their own evidence.',
    },
    takeaway: 'Keep both states available, then distinguish detecting a change from approving it.',
    sourceNote: 'The inherited source studies visual attention. Side-by-side invitation review is an original heuristic, not a directly tested intervention in that paper.',
  },
  {
    id: 'mind-008',
    title: 'Agree on what may interrupt a focus block',
    outcome: 'Set a temporary availability boundary that preserves an explicit route for genuinely time-sensitive needs.',
    scene: 'Reading in a shared flat while a housemate expects a parcel delivery',
    sections: [
      {
        title: 'Quiet time still includes shared responsibilities',
        paragraphs: [
          'You want to read a course chapter in a shared flat. Your housemate is expecting a parcel but needs to step out. If you silently stop checking messages, the parcel arrangement becomes uncertain. If every comment about dinner interrupts the chapter, the reading keeps losing its place. Neither person needs to be inconsiderate for the arrangement to fail.',
          'A focus block works better as an agreement about availability than as a private decision that everyone else must discover. The agreement needs both a boundary and an exception.',
        ],
      },
      {
        title: 'Decide the exception before each message arrives',
        paragraphs: [
          'Switching tasks involves changing the operation you are performing. Research on task switching explains why repeatedly changing between reading and coordination is not merely a matter of opening windows faster. An interruption agreement does not remove those costs. It reduces the need to decide afresh whether every routine message requires an immediate switch.',
          'Specify what can wait, when you will return to it, and how the other person should contact you for the agreed exception. Use a channel you can actually monitor. Do not promise to be reachable through a muted device or invent an exception that conflicts with an existing duty.',
        ],
      },
      {
        title: 'A parcel exception that both people understand',
        paragraphs: [
          'You say, "I am reading until six. I will check dinner messages then. If the courier needs me before that, call rather than text." Your housemate replies, "Fine. I will call only about the delivery." You confirm that calls remain audible.',
          'The distinction is now practical: dinner discussion waits; the parcel call interrupts. If the delivery becomes complicated, end or move the reading block rather than pretending the original boundary still fits. When six arrives, check the routine messages as promised. Keeping the return time credible is part of the agreement, not an optional courtesy after the interesting work finishes.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'An explicit exception in a shared flat',
        alt: 'A reader says routine dinner messages wait until six, and the housemate agrees to call for the parcel delivery.',
        caption: 'This fictional exchange includes a return time, an exception, and an audible channel.',
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
        'Identify who, if anyone, reasonably needs to reach you while you work.',
        'Draft the end point of the block, what can wait, and one concrete exception with its channel.',
        'Check that the channel is available and that the plan respects any existing responsibility.',
        'If the arrangement involves another person, ask for agreement before using it; otherwise keep this as a draft.',
      ],
      notice: 'Another person could tell which request interrupts and when routine replies resume.',
      troubleshooting: 'If most requests qualify as urgent, shorten or move the block instead of making an unrealistic promise.',
    },
    recall: {
      prompt: 'You are volunteering at an event and want to study during a quiet period. What must be settled first?',
      hint: 'Your role may make some interruptions nonoptional.',
      answer: 'Confirm coverage, required availability, and the contact route with the organizer. If you remain responsible for arrivals, use a task that tolerates interruption or study later.',
    },
    quiz: {
      question: 'A teammate may need an approval while you draft. Which boundary is workable?',
      options: ['Mute everything until the draft feels complete.', 'Agree on an approval-call exception and a time for routine replies.', 'Keep all chats open so every message receives the same priority.'],
      correctIndex: 1,
      explanation: 'The agreement separates a real dependency from routine coordination. Total silence can block the teammate; equal priority creates avoidable switching.',
    },
    takeaway: 'Protect a block with a credible return point and a clear exception.',
    sourceNote: 'Task-switching research supplies background. The interruption agreement is a coordination framework, not an experimental finding about household or work messages.',
  },
  {
    id: 'mind-009',
    title: 'Give a small routine an observable starting signal',
    outcome: 'Attach one specific response to an event you can recognize in your ordinary day.',
    scene: 'Putting pocket receipts into an envelope after hanging keys by the door',
    sections: [
      {
        title: 'The receipts have no collection moment',
        paragraphs: [
          'Receipts collect in your jacket, bag, and wallet. You intend to organize them, but "sometime this evening" competes with whatever happens after you arrive home. The intention names a desirable result without identifying the moment to start. Each evening requires another decision about whether now is the right time.',
          'You already hang your keys on a hook when you get home. That event is visible and recognizable. It can provide a starting signal for a small response: put any loose pocket receipts into the envelope beside the hook.',
        ],
      },
      {
        title: 'A cue links a context to a response',
        paragraphs: [
          'Habit research describes repeated responses becoming associated with recurring contexts. A cue is the part of the situation that signals the response. Here, finishing the familiar key-hanging action is the cue; collecting loose receipts is the response. Repeating the pairing matters. Writing a sentence about it does not make the action automatic overnight.',
          'A usable cue should occur often enough for your purpose and at a moment when the response is feasible. "When I feel organized" is hard to identify. "After hanging my keys" is easier to recognize, but only works if that is something you actually do.',
        ],
      },
      {
        title: 'Keep the response smaller than the whole project',
        paragraphs: [
          'The new routine collects receipts; it does not require sorting categories, checking totals, and making a budget at the doorway. Those are later tasks. Put an envelope where the response can happen without another search, and rehearse the sequence once: keys on hook, pockets checked, receipts in envelope.',
          'On a day with no receipts, the pocket check can finish the routine. If you routinely arrive carrying too much to do this comfortably, move the cue to putting your bag down. Choose a signal that fits the real sequence of your day instead of treating an awkward plan as a test of discipline.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A doorway cue with one small response',
        alt: 'Hanging keys leads to checking pockets and placing loose receipts into a nearby envelope.',
        caption: 'The collection step ends at the envelope. Sorting and budgeting are deliberately outside this routine.',
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
        'Choose an event that already happens in your day and write exactly how you recognize its end.',
        'Attach one manageable response. Name the object and where it goes, or the question you will answer.',
        'Rehearse the pairing once, prepare its materials, and record the next real opportunity to try it.',
      ],
      notice: 'Your plan contains a visible starting event and an action with a clear finish.',
      troubleshooting: 'If the cue is rare or the response awkward there, change the event before expanding the routine.',
    },
    recall: {
      prompt: 'You want to record one sentence about each day but keep forgetting. What cue-response pair could fit?',
      hint: 'Use an event that already occurs near an available notebook.',
      answer: 'After placing my phone on its usual evening charger, I will write one sentence in the nearby notebook. It works only if that charging event is regular and the materials are ready.',
    },
    quiz: {
      question: 'Which reading plan has the clearest cue and response?',
      options: ['Read more whenever the evening becomes quiet.', 'Keep a book nearby so reading remains possible.', 'After putting away my lunch plate, read the next paragraph.'],
      correctIndex: 2,
      explanation: 'The final plan names both a recognizable event and a bounded action. Nearby materials help, but do not by themselves specify when reading begins.',
    },
    takeaway: 'Choose a cue you can observe and a response you can finish.',
    sourceNote: 'Wood and Rünger review context-linked repetition. The receipt routine is an original application, not a tested habit prescription.',
  },
  {
    id: 'mind-010',
    title: 'Decide what to do when a predictable blocker arrives',
    outcome: 'Write a specific if-then fallback that preserves the purpose of a small learning session.',
    scene: 'Moving an outdoor contour-drawing practice indoors when it rains',
    sections: [
      {
        title: 'Rain keeps cancelling the same plan',
        paragraphs: [
          'You plan to sketch the outline of a plant on the balcony after lunch. When rain makes the seat wet, you abandon the session and browse your phone instead. The problem was predictable, but the decision about an alternative was left until the moment the original plan failed. Now you have to invent a new session as well as begin it.',
          'Your goal was practicing outlines. The balcony was one setting for that goal, not the goal itself. That distinction gives you room to prepare a useful fallback.',
        ],
      },
      {
        title: 'An if-then plan connects a condition to an action',
        paragraphs: [
          'An implementation intention specifies what you will do when a recognizable situation occurs. "I want to draw regularly" states a goal. "If the balcony is wet after lunch, I will sketch the outline of my shoe at the desk" names a condition and an executable response.',
          'The action should be within your control and relevant to the original purpose. It need not reproduce every feature of the planned session. Indoor shoe drawing does not practice outdoor lighting, but it can preserve the narrower task of following an object\'s contour. Make that substitution honest rather than claiming the two sessions are identical.',
        ],
      },
      {
        title: 'Prepare enough to make the fallback real',
        paragraphs: [
          'Leave a pencil and sketchbook at the desk. When you see the wet balcony, place a clean shoe on paper and draw its outer edge without attempting a polished illustration. The fallback now has a cue, materials, and a finish. You do not have to decide which online tutorial to find before beginning.',
          'If the desk is also unavailable, this particular plan cannot run. Revise the plan later instead of treating it as a promise to overcome every obstacle. Keep one realistic alternative ready, rather than another menu of choices. Never use a fallback to bypass a real safety or access restriction.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The rain fallback preserves outline practice',
        alt: 'A wet balcony triggers moving a shoe to the desk and drawing its outer contour with prepared materials.',
        caption: 'Follow this branch only when the stated blocker occurs. The subject changes; the outline task remains.',
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
        'Name one recurring obstacle and the narrow skill your original session was meant to practice.',
        'Write "If [observable blocker], then I will [specific alternative action]." Avoid mood-based conditions.',
        'List the materials the alternative needs and put them somewhere available.',
        'Walk through the plan on paper, including what it practices and what it does not replace.',
      ],
      notice: 'The blocker leads to an available action without requiring another large choice.',
      troubleshooting: 'If the fallback needs the blocked resource too, choose a different task serving the same narrow goal.',
    },
    recall: {
      prompt: 'A language exercise depends on a website that sometimes goes offline. What fallback would preserve some useful practice?',
      hint: 'Use material already checked and available, not invented answers.',
      answer: 'If the site is unavailable, I will answer three saved vocabulary prompts and check their saved answers. This preserves retrieval practice, but does not replace any missing listening activity.',
    },
    quiz: {
      question: 'A shared instrument is often occupied. Which plan handles that blocker most specifically?',
      options: ['Make music practice a higher priority each week.', 'If it is occupied, mark the rhythm in my saved score at the table.', 'Choose any activity that feels musical when the instrument is busy.'],
      correctIndex: 1,
      explanation: 'The if-then plan names a condition and a prepared response. Rhythm study is a partial substitute, not evidence that instrument technique was practiced.',
    },
    takeaway: 'Prepare a relevant next action for a blocker you can recognize.',
    sourceNote: 'Implementation-intention research informs the planning structure. The drawing and music alternatives are teaching examples, not experimentally tested equivalents.',
  },
  {
    id: 'mind-011',
    title: 'Prepare the first useful move',
    outcome: 'Remove repeated setup work from a chosen routine without removing safeguards or meaningful choices.',
    scene: 'Preparing a jigsaw tray and reference picture before the next hobby session',
    sections: [
      {
        title: 'Before the puzzle comes the search',
        paragraphs: [
          'You like working on a small jigsaw after dinner, but the pieces are in one cupboard, the reference picture is under papers, and the only clear surface holds laundry. By the time you have considered moving everything, a phone game seems easier to start. Enjoying the puzzle has not removed its setup requirements.',
          'These requirements are not all part of the skill you wanted to practice. Finding the same box and clearing the same tray each evening adds decisions before the first piece is compared.',
        ],
      },
      {
        title: 'Convenience changes the starting context',
        paragraphs: [
          'Habit research connects repeated responses with recurring contexts. Arranging a consistent, usable start is a practical application: when the chosen moment arrives, the materials already indicate what to do. This does not prove that every convenient activity becomes a habit, or that effort itself should always be removed.',
          'Distinguish irrelevant setup from the work that matters. Locating a reference picture is setup; comparing a piece with that picture is the puzzle. Safety and access controls serve another purpose again. Convenience is not a reason to leave small pieces where a child or pet could reach them.',
        ],
      },
      {
        title: 'A ready tray still leaves a real choice',
        paragraphs: [
          'After today\'s session, place the pieces and reference picture in a lidded tray stored safely. Leave a note: "Next: compare the green edge pieces beside the finished corner." At the next planned session, you retrieve one container and have a first operation ready. You still decide whether this is a suitable time to work.',
          'The tray does not solve the puzzle for you. It removes searches that repeatedly stand between the cue and the desired action. If preparation takes longer than the hobby session, simplify it. Keeping one clear starting area is more useful than building an elaborate organization system that becomes another unfinished project.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What happens before the first puzzle piece?',
        alt: 'Scattered materials require three searches; a safely stored tray keeps pieces, picture, and a next-step note together.',
        caption: 'Compare the required setup, not a measured increase in motivation or speed.',
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
        'Choose a routine you want to start more easily, without assuming you must do it every day.',
        'List what you search for or decide before the first useful action.',
        'Remove one repeated search by keeping the necessary items together in a safe place.',
        'Write the next useful operation beside them, without removing required checks.',
        'Try the prepared start once and keep only the arrangement that reduces actual setup.',
      ],
      notice: 'The first move serves the activity instead of searching for its materials.',
      troubleshooting: 'If the arrangement obstructs shared space, use a portable container rather than claiming the space permanently.',
    },
    recall: {
      prompt: 'You repeatedly lose a saved article before a short study session. What could you prepare?',
      hint: 'Preserve its location and why you meant to open it.',
      answer: 'Keep one bookmark with the question and intended section beside it. You remove repeated searching while retaining the reading and reasoning that make the session useful.',
    },
    quiz: {
      question: 'You search for the same guide before every study session. Which change targets that setup cost?',
      options: ['Keep its link and intended question together in an approved note.', 'Schedule longer sessions to allow more searching time.', 'Choose a different guide each time to keep the subject interesting.'],
      correctIndex: 0,
      explanation: 'The prepared link removes the repeated search. More time or fresh material can serve other purposes, but neither removes this setup step.',
    },
    takeaway: 'Make the first useful action easy to find, without making judgment optional.',
    sourceNote: 'The habit review provides context-response theory. Preparing a puzzle tray is an original design suggestion, not a measured intervention from the review.',
  },
  {
    id: 'mind-012',
    title: 'Replace a cue that your new schedule removed',
    outcome: 'Identify a missing routine trigger and choose a recognizable replacement in the changed setting.',
    scene: 'Moving a one-line diary from the evening train ride to closing a home-work laptop',
    sections: [
      {
        title: 'The diary stopped when the journey stopped',
        paragraphs: [
          'On the train home, you used to write one sentence about the day in a small notebook. Then your schedule changed to working at home. A week later, the notebook has not moved. You still want the record, but the train seat, familiar journey, and notebook in your bag no longer appear together.',
          'It would be easy to call this a loss of commitment. First check a simpler explanation: the situation that used to start the response disappeared. Wanting the same result does not recreate that situation.',
        ],
      },
      {
        title: 'The context was part of the routine',
        paragraphs: [
          'Habit accounts describe associations between repeated behavior and recurring context. The earlier routine included more than the sentence you wrote. It included a moment when the workday had ended and the notebook was available. A change of place or schedule can remove those signals even when the action itself remains possible.',
          'The useful question is therefore not just "How can I try harder?" Ask which recognizable event now occupies a similar place in the day. It need not occur at the old clock time. It needs to be reliable enough, appropriate to the new setting, and close to the materials you need.',
        ],
      },
      {
        title: 'Change the start before changing everything',
        paragraphs: [
          'Suppose closing your work laptop marks the end of your home workday. Place the personal notebook nearby and write: "After closing the laptop for the evening, record one ordinary moment." Keep confidential work details out. The diary response remains small; only its starting event changes.',
          'At first, rehearse the new pairing deliberately. Do not expect the old automatic feeling to appear immediately in a different room. If the laptop repeatedly reopens, choose a more stable event, such as clearing your work materials away. Changing the cue, notebook format, entry length, and goal all at once would make it harder to tell which part no longer fits.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Same diary response, a new starting event',
        alt: 'The old routine begins in the evening train seat; the new one begins when the home-work laptop is closed.',
        caption: 'Only the starting context changes. The intended response remains one personal sentence.',
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
        'Describe the old starting event, setting, and available materials for a routine that changed.',
        'Identify which part disappeared, then choose one observable event in the current schedule.',
        'Keep the response small and recognizable. Put its materials at the new starting point and rehearse once.',
      ],
      notice: 'You can name what the schedule removed and what now replaces it.',
      troubleshooting: 'If the new cue rarely happens, choose another actual event rather than a desired mood or ideal day.',
    },
    recall: {
      prompt: 'You reviewed vocabulary after a weekly library visit, but the library is temporarily closed. What should you inspect?',
      hint: 'Separate the learning response from the visit that triggered it.',
      answer: 'The visit may have supplied the start. Choose another recurring event with the cards available, such as putting away a weekly delivery, while keeping the small review itself unchanged.',
    },
    quiz: {
      question: 'A short sketch routine vanishes after moving house. Which first question is most useful?',
      options: ['Could a longer weekend session replace the daily sketch?', 'Would a different drawing subject revive interest?', 'Does the event that used to trigger sketching still happen here?'],
      correctIndex: 2,
      explanation: 'Inspect the changed context before changing the goal. A missing cue can explain the disruption without establishing that interest or ability disappeared.',
    },
    takeaway: 'When the setting changes, rebuild the start before judging the whole routine.',
    sourceNote: 'Habit theory treats recurring context as part of the mechanism. This diary transition is an illustrative adaptation, not a tested schedule repair.',
  },
  {
    id: 'mind-013',
    title: 'Make checking habitual, not sending automatic',
    outcome: 'Build a familiar starting routine that still requires deliberate judgment before a consequential action.',
    scene: 'Preparing to share a family photograph when the most recent chat is a work group',
    sections: [
      {
        title: 'The familiar tap points to a different recipient',
        paragraphs: [
          'You often share a photo with your family by choosing the most recent conversation. Today the most recent chat is a work group. Your hand follows the familiar sequence before you have read the group name. The interface looks ordinary, but the meaning of the action has changed because its destination changed.',
          'Nothing about doing the sequence easily establishes that it is appropriate now. Repetition can make a response ready to occur in a familiar-looking context, even when a detail deserves a fresh decision.',
        ],
      },
      {
        title: 'Let the cue start an inspection',
        paragraphs: [
          'Habit research describes context-linked responses. That efficiency can be useful for opening a notebook or gathering materials. For sharing, deleting, paying, or changing something consequential, a safer practical application is to make the familiar starting move a check rather than the final action.',
          'The check should expose the detail that can vary. For a photograph, read the recipient name and inspect what the image reveals. Also consider whether the people pictured agreed to that use. A routine phrase such as "be careful" does not identify any of those questions and can itself become something you repeat without inspection.',
        ],
      },
      {
        title: 'A photo-sharing routine with a stopping point',
        paragraphs: [
          'In a paper rehearsal, write "Photo of the family picnic" above a mock recipient label, "Work group." Your first response is to read both labels. The destination does not match the intended audience, so you stop and choose the family group instead. You still check the image and permission before any real sharing.',
          'The routine has not automated approval. It has made the relevant questions appear before an action that would be difficult to undo. Practice only with fictional labels here; there is no need to open a live share sheet. The same structure can support required workplace checks, but it never replaces the actual procedure or authorization.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Where the picnic photo should stop',
        alt: 'A picnic photo is paired with Work group; checking the recipient exposes a mismatch and stops the send.',
        caption: 'This path ends at a stopped draft. A familiar share screen is not permission to send.',
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
        'Write a fictional action, such as sharing a picnic picture, and its intended destination.',
        'Add a different destination to a mock confirmation label. Do not open a live sending interface.',
        'Write the concrete checks needed before proceeding: destination, contents, and permission.',
        'Mark whether the paper example should stop and explain which check failed.',
      ],
      notice: 'The familiar starting cue produces an inspection that can genuinely stop the action.',
      troubleshooting: 'If every example receives approval, add a plausible mismatch and make the stopping condition explicit.',
    },
    recall: {
      prompt: 'A familiar purchase screen contains an old delivery address. What should your usual checkout routine trigger?',
      hint: 'The screen can be familiar while the target is wrong.',
      answer: 'Read the item, total, and delivery destination before confirming. Finding the old address should stop checkout until it is corrected, not merely remind you to inspect the parcel later.',
    },
    quiz: {
      question: 'Before deleting an old album, which routine best guards against removing the wrong items?',
      options: ['Check how much storage the album occupies.', 'Check the selected album, intended contents, and available recovery.', 'Check how recently the album was opened.'],
      correctIndex: 1,
      explanation: 'Selection and recovery checks can stop a mistaken action. Storage and viewing history concern usefulness, not whether the intended items are selected.',
    },
    takeaway: 'Make verification the entry step, with a real option to stop.',
    sourceNote: 'This safety framework applies habit theory to ordinary interfaces. It is not a tested sharing protocol or a substitute for required controls.',
  },
  {
    id: 'mind-014',
    title: 'Track opportunities instead of judging a broken streak',
    outcome: 'Distinguish a missing cue from a missed response when reviewing a small routine.',
    scene: 'Reviewing five evenings of guitar practice after putting dinner dishes away',
    sections: [
      {
        title: 'The streak hides two different misses',
        paragraphs: [
          'Your plan is to practice a familiar guitar change after putting dinner dishes away. On Monday you do it. On Tuesday you eat elsewhere, so the dish-clearing event never occurs at home.',
          'Wednesday works. On Thursday the cue happens, but the guitar is buried behind storage boxes. Friday works again.',
          'A streak display marks Tuesday and Thursday as equivalent gaps. For improving this plan, they are different. One lacked the intended opportunity; the other had the cue but an obstacle between it and the response.',
        ],
      },
      {
        title: 'Repetition does not follow one universal deadline',
        paragraphs: [
          'A study tracking everyday habit formation found differing trajectories across people and behaviors. It does not support one magic number of days after which any activity becomes automatic. Missing one opportunity did not materially disrupt the modeled process in that study, but that is not a promise that every pattern of missed practice is irrelevant.',
          'Treat a missed session as information about the arrangement. Ask whether the cue occurred, whether the response followed, and what stood in between. This tells you more about a workable next step than restarting an imaginary progress counter from zero.',
        ],
      },
      {
        title: 'Read the five-evening record',
        paragraphs: [
          'The invented record contains five planned evenings: three responses, one cue without practice, and one evening without the cue. Four cue opportunities occurred, and three led to practice. These are example counts, not research measurements or a score for habit strength.',
          'Thursday suggests making the safely stored guitar accessible. Tuesday suggests either accepting that the routine belongs to home-dinner days or choosing another realistic cue for other days. Neither observation calls for a punishment session. Return at the next suitable opportunity and see whether the specific adjustment changes what happens. Keep recording the conditions, not just whether a box received a tick.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'What happened on five planned evenings?',
        alt: 'Three evenings included practice, one included the cue but blocked access, and one had no home-dinner cue.',
        caption: 'Invented diary counts total five evenings. These mutually exclusive categories do not measure automaticity.',
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
        'Write the cue and response for one small routine before counting successes.',
        'For several recent planned occasions, mark cue present, cue absent, or unknown.',
        'Where the cue occurred, record the response and any obstacle. Do not invent details you cannot recall.',
        'Choose one adjustment for a specific obstacle and identify the next suitable opportunity.',
      ],
      notice: 'The record explains different kinds of gaps rather than treating them as a single failure.',
      troubleshooting: 'If the history is unclear, start a fresh simple record rather than reconstructing a flattering streak.',
    },
    recall: {
      prompt: 'Your reading routine follows a bus ride, but you walked home yesterday. What does the miss tell you?',
      hint: 'Did the original starting event occur?',
      answer: 'The planned bus cue was absent. Decide whether reading is a bus-day routine or needs an alternative cue; the gap alone does not show that an available cue failed.',
    },
    quiz: {
      question: 'A drawing cue occurred, but the pencil case was missing. What change targets that record?',
      options: ['Put the materials at the cue location before the next opportunity.', 'Add another reminder at the same cue.', 'Shorten the drawing task to leave more time for searching.'],
      correctIndex: 0,
      explanation: 'The obstacle was access, not noticing the cue. Another reminder or a shorter drawing does not remove the search.',
    },
    takeaway: 'Ask whether the cue appeared and what happened next.',
    sourceNote: 'Lally and colleagues studied self-reported everyday routines. This diary is invented; opportunity tracking is an application, not their automaticity measure.',
  },
  {
    id: 'mind-015',
    title: 'Name a feeling without deciding someone else\'s motive',
    outcome: 'Separate your ordinary emotional experience from an unsupported explanation of another person\'s behavior.',
    scene: 'Feeling disappointed when a friend cancels a board-game evening by message',
    sections: [
      {
        title: 'A cancellation becomes a verdict',
        paragraphs: [
          'A friend messages that they cannot make tonight\'s board-game evening. You were looking forward to it. Your first draft reply begins, "You do not care about spending time with me." That sentence names a possible motive, not just the disappointment you are experiencing. The cancellation is real; the explanation you added is not established by that message.',
          'Separating those parts does not require pretending the change is welcome. It gives you a more accurate description from which to decide what to say or do next.',
        ],
      },
      {
        title: 'A feeling word describes your experience',
        paragraphs: [
          'Affect labeling means putting an emotional experience into words. Here, "I feel disappointed" describes your reaction. "They do not value me" claims to know another person\'s attitude. Even "I feel ignored" can contain an interpretation, so it helps to ask what observable event and ordinary feeling you mean.',
          'Research on affect labeling examines particular experimental tasks. It does not turn a chosen label into a diagnosis, prove why the feeling arose, or guarantee that naming it will make it disappear. Use a word that fits well enough, such as disappointed, irritated, or uncertain; there is no requirement to find a perfect emotional category.',
        ],
      },
      {
        title: 'Keep the event and the question available',
        paragraphs: [
          'Privately write, "The message says tonight is cancelled. I feel disappointed because I expected company." Leave the reason for the cancellation open unless your friend has explained it. You can then ask, "Would you like to choose another evening?" or decide to make other plans.',
          'If cancellations are recurring, the practical issue may be reliability, and that deserves discussion using the actual pattern. A feeling label does not require tolerating repeated problems or sharing more than you want. It prevents this one sentence from doing two jobs at once: reporting your experience and presenting an unverified verdict about your friend.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two sentences after the same cancellation',
        alt: 'They do not care assigns a motive; I feel disappointed that tonight is cancelled states a feeling and event.',
        caption: 'Compare what each sentence claims to know. Neither wording establishes why the friend cancelled.',
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
        'Write the observable event without a motive claim, using the fictional message if you prefer.',
        'Add one ordinary feeling word about your experience. Keep guesses about the other person on a separate line.',
        'Draft one practical next question or action without sending it. Check that it does not demand proof of a hidden feeling.',
      ],
      notice: 'The note distinguishes an event, your reaction, and what remains unknown.',
      troubleshooting: 'If the example feels too personal or intense, use the fictional cancellation and keep the exercise brief.',
    },
    recall: {
      prompt: 'A tutor corrects a detail and you think, "They think I am hopeless." How could you rewrite that privately?',
      hint: 'Name the correction and your experience, not the tutor\'s mind.',
      answer: 'I felt embarrassed when the tutor corrected the date. That identifies a feeling and an event while leaving their overall opinion unknown and the correction available to check.',
    },
    quiz: {
      question: 'A friend replies later than expected. Which note separates experience from motive?',
      options: ['I feel that they are deliberately avoiding me.', 'They replied late, which confirms that the friendship matters less to them.', 'I felt uneasy while waiting; I do not yet know why the reply was late.'],
      correctIndex: 2,
      explanation: 'The last note identifies the reaction and preserves uncertainty. Adding "I feel" before a motive claim does not make it a feeling label.',
    },
    takeaway: 'Describe your experience without using it as evidence of someone else\'s intent.',
    sourceNote: 'The affect-labeling paper provides research background. This private wording exercise is educational, not treatment, diagnosis, or a promised change in mood.',
  },
  {
    id: 'mind-016',
    title: 'Try an interpretation that still fits the comment',
    outcome: 'Reinterpret a mildly frustrating comment without denying its practical content.',
    scene: 'A friend reading a bean-salad recipe asks when the beans should be added',
    sections: [
      {
        title: 'A recipe question feels like a personal judgment',
        paragraphs: [
          'You send a friend your bean-salad recipe. They reply, "When do the beans go in?" You feel embarrassed and read the question as "You cannot explain anything properly." Looking again, you see that the ingredients list includes beans but the method jumps from preparing vegetables to serving. There is a genuine gap to fix.',
          'The embarrassing feeling and the missing instruction can both be real. The broad judgment about your ability is an additional interpretation, not something the friend actually wrote.',
        ],
      },
      {
        title: 'Reappraisal changes the meaning you assign',
        paragraphs: [
          'Cognitive reappraisal means reconsidering how you interpret a situation. In the emotion-regulation process model, changing an interpretation is different from merely hiding your expression after a reaction develops. For the recipe, a factual alternative is: "My friend is trying to follow the method and found an omitted step."',
          'The alternative must fit the available information. "They secretly think the recipe is perfect" would be comforting but unsupported. "There is no problem" would deny the missing instruction. A useful reappraisal leaves room for an inconvenient fact while removing a conclusion that the fact does not establish.',
        ],
      },
      {
        title: 'Answer the request that is actually present',
        paragraphs: [
          'You reply, "I missed that step in the written method. I will add it before the serving instruction." Then you check your own recipe and revise the sequence. The comment becomes a concrete editing task rather than a verdict on whether you should ever share a recipe again.',
          'This does not require assuming the friend had ideal intentions or that every criticism is valid. If someone adds an insult, you can address that separately. Reappraisal is not compulsory positivity or permission for mistreatment. In this ordinary example, its purpose is to make the missing step easier to discuss without pretending it was already there.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Keep the recipe question concrete',
        alt: 'A friend asks when beans are added; the writer acknowledges an omitted step and offers to revise the method.',
        caption: 'The exchange answers the actual question. It does not claim access to either person\'s hidden opinion.',
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
        'Copy the exact practical question, without adding a guessed tone or motive.',
        'Write the interpretation that makes the comment feel broader than its words.',
        'Identify what the comment actually establishes and what it leaves uncertain.',
        'Draft another interpretation that preserves the real problem without the unsupported personal verdict.',
        'Write a reply that addresses the concrete request. Keep it as a draft for this exercise.',
      ],
      notice: 'Your revised interpretation still contains the detail that needs attention.',
      troubleshooting: 'If it erases a real problem or invents praise, rewrite it more narrowly.',
    },
    recall: {
      prompt: 'Someone reviewing your route sketch asks which entrance it uses. How could you interpret and answer that question?',
      hint: 'A missing label need not become a judgment about your general ability.',
      answer: 'They need an entrance identified to use the sketch. Check the intended entrance and label it, while leaving any broader opinion uncertain.',
    },
    quiz: {
      question: 'A reviewer asks for an example in your explanation. Which interpretation preserves the request?',
      options: ['They need a case that shows how the idea works; I can add one.', 'They probably agree with everything and are just being polite.', 'The explanation must be unusable because an example was requested.'],
      correctIndex: 0,
      explanation: 'The first interpretation fits the concrete request. The others add an unsupported positive or negative judgment instead of clarifying the next edit.',
    },
    takeaway: 'Change the unsupported interpretation while keeping the real request intact.',
    sourceNote: 'Gross\'s process model distinguishes reappraisal from other strategies. The recipe dialogue is a nonclinical teaching example, not a tested emotional intervention.',
  },
  {
    id: 'mind-017',
    title: 'Change the situation before the same frustration returns',
    outcome: 'Identify a recurring, changeable source of mild friction and propose a practical adjustment with the people involved.',
    scene: 'Two flatmates repeatedly plan different activities at the same shared table',
    sections: [
      {
        title: 'The argument starts before either person speaks',
        paragraphs: [
          'You bring your drawing materials to the shared table after dinner. Your flatmate arrives with a large puzzle and expects to use the same space. Neither mentioned the plan earlier. The same awkward conversation has happened several evenings: one person feels displaced, the other feels accused, and the table remains the practical problem.',
          'Trying to sound less irritated during every collision leaves the collision in place. Before choosing another way to manage the reaction, ask whether something in the arrangement can change.',
        ],
      },
      {
        title: 'Regulation can begin upstream',
        paragraphs: [
          'The emotion-regulation process model includes situation modification: changing aspects of a situation before or while an emotional response develops. It is different from changing only your interpretation or outward expression. Here, the avoidable trigger is not a mysterious personality difference. It is that two plans for one surface remain invisible until both people arrive.',
          'A practical adjustment must stay within your control and respect shared ownership. You cannot silently declare the table yours. You can ask whether a simple note about intended use would help both people see a clash early enough to negotiate it.',
        ],
      },
      {
        title: 'Make the competing plans visible earlier',
        paragraphs: [
          'Propose a small shared note: "Drawing after dinner; puzzle later?" Your flatmate can accept, suggest the reverse order, or explain that the puzzle needs to remain assembled. The discussion now happens before materials fill the table. A suitable arrangement might use separate evenings or a portable puzzle board rather than a rigid booking system.',
          'The change addresses uncertainty about the space. It does not guarantee agreement or make frustration illegitimate. After trying an agreed arrangement, check whether clashes became easier to resolve. If the note goes unread, ask what signal both people would actually notice. If the issue is a deeper disagreement over access, discuss that directly rather than treating better labeling as a complete solution.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'When do the table plans become visible?',
        alt: 'Without a shared note both activities arrive together; with an agreed note the flatmates can resolve the overlap beforehand.',
        caption: 'The proposed change moves coordination earlier. It does not assign either flatmate priority.',
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
        'Describe the recurring situation without assigning anyone a hidden motive.',
        'Identify one practical uncertainty, such as timing, ownership, location, or missing information.',
        'Draft a small change that addresses that uncertainty and names who must agree before it is used.',
        'Write what you would inspect after one agreed trial, then keep or discuss the proposal appropriately.',
      ],
      notice: 'The proposal changes what happens before the disagreement, not just how politely you endure it.',
      troubleshooting: 'If the change needs authority you do not have, frame it as a request, not an instruction.',
    },
    recall: {
      prompt: 'A borrowed game controller is often unavailable because nobody knows who has it. What upstream change could you propose?',
      hint: 'Target the missing information without accusing a borrower.',
      answer: 'Ask the group to agree on a return place or a simple borrowing note. This makes availability visible earlier while preserving consent and room to discuss competing needs.',
    },
    quiz: {
      question: 'Which action changes a recurring handoff situation rather than only the reaction?',
      options: ['Practice sounding neutral each time the handoff is unclear.', 'Privately reinterpret every unclear handoff as well intended.', 'Agree on a field stating who has the shared item and when it returns.'],
      correctIndex: 2,
      explanation: 'The agreed field addresses the ambiguity before the next exchange. Composure and reinterpretation can serve other purposes, but leave that missing information unchanged.',
    },
    takeaway: 'Look for a practical trigger you can change with appropriate agreement.',
    sourceNote: 'Situation modification comes from the process model. The shared-table proposal is an original everyday example, not a tested conflict-resolution method.',
  },
  {
    id: 'mind-018',
    title: 'A steady voice does not settle the whole issue',
    outcome: 'Distinguish controlled expression, your private emotional experience, and an unresolved practical problem.',
    scene: 'Speaking calmly to a shop about shoes delivered in the wrong size',
    sections: [
      {
        title: 'The call sounded calm',
        paragraphs: [
          'A parcel contains shoes in the wrong size. You call the shop, explain the mismatch in a steady voice, and ask for the return instructions. When the call ends, you are still annoyed that the errand is unfinished. The calm conversation was useful, but it did not automatically change how you felt or complete the return.',
          'These are three separate things: what you expressed, what you experienced, and what remains to be done. Treating them as one can hide a practical task behind the impression that the interaction went smoothly.',
        ],
      },
      {
        title: 'Expression and experience can differ',
        paragraphs: [
          'Expressive suppression means inhibiting an outward emotional display. Reappraisal changes an interpretation of the situation. Research comparing these processes distinguishes their consequences; reducing a display does not necessarily reduce the experience in the same way. A calm voice alone also does not tell an observer which process occurred. Restraint can be appropriate while someone needs a clear question or update. The lesson is not that every feeling should be expressed immediately. It is that composure cannot serve as proof that no feeling remains. You can report your own reaction, but should not infer a colleague\'s inner state from an equally calm voice.',
        ],
      },
      {
        title: 'Check the remaining task separately',
        paragraphs: [
          'After the shoe call, note: "I explained the mismatch calmly. I still feel irritated. I am waiting for the shop\'s return instructions." That last sentence identifies something actionable without requiring the irritation to disappear first. Keep the parcel and order information together, then follow the actual instructions when they arrive.',
          'If there was an unresolved disagreement, record that too rather than treating politeness as agreement. You can decide later whether another conversation is needed. This ordinary example is about separating observations, not prescribing an emotional response. There is no requirement to perform calmness perfectly, and no basis for judging someone else\'s feelings from their outward appearance.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'After a calm return enquiry',
        alt: 'During the call the mismatch is explained steadily; afterward irritation remains and return instructions are still pending.',
        caption: 'The later feeling is self-reported in this fictional example, not inferred from a face or voice.',
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
        'Write what you said or did outwardly, without assigning a meaning to your appearance.',
        'On a separate line, name your own feeling afterward, if you want to record it.',
        'List the unresolved practical question or write that none remains. Choose a next step for that question.',
      ],
      notice: 'A calm interaction and an unfinished issue can appear in the same accurate record.',
      troubleshooting: 'If you start guessing another person\'s feelings, return to your own experience and the agreed facts.',
    },
    recall: {
      prompt: 'A teammate sounds composed after a difficult discussion. Can you assume they agree with the decision?',
      hint: 'Agreement is a different claim from controlled expression.',
      answer: 'No. Ask whether any concerns or actions remain. Their voice alone establishes neither agreement nor the absence of frustration.',
    },
    quiz: {
      question: 'A call sounded calm, but you still feel annoyed and await instructions. Which record is accurate?',
      options: ['Calm call; frustration resolved; instructions pending.', 'Controlled tone; annoyance remains; instructions pending.', 'Annoyance remains, so the entire call must have failed.'],
      correctIndex: 1,
      explanation: 'Expression, experience, and the dependency are separate. A steady tone does not prove a changed feeling; continued annoyance does not prove the call failed.',
    },
    takeaway: 'Assess expression, experience, and unfinished work separately.',
    sourceNote: 'The linked suppression study distinguishes emotion processes. This example makes no diagnosis and does not recommend expression or suppression in every situation.',
  },
  {
    id: 'mind-019',
    title: 'Move attention while keeping a return condition',
    outcome: 'Choose an independent task during an ordinary wait without losing responsibility for the pending issue.',
    scene: 'Waiting for a bicycle repair shop to confirm collection while repeatedly reopening the same message',
    sections: [
      {
        title: 'Refreshing is not changing the answer',
        paragraphs: [
          'The bicycle shop has said it will contact you by four about collection. It is still earlier than that, but you keep reopening the message. The wording has not changed. You cannot yet arrange the pickup, and the repeated check leaves you more occupied with the delay than with anything you can do.',
          'There is a difference between monitoring an expected reply and rereading a fixed message. The first can collect new information. The second may simply keep the frustrating part of the situation in view.',
        ],
      },
      {
        title: 'Redirection changes the focus, not the dependency',
        paragraphs: [
          'Attentional deployment is the process-model term for changing which aspect of a situation receives attention. You can focus temporarily on another available task without claiming the bicycle is ready or that the shop has done anything wrong. The unresolved dependency remains real.',
          'The difference between temporary redirection and neglect is a return condition. Record when you will check or follow up, and keep an agreed contact route available. If the situation needs active monitoring or immediate action, moving attention elsewhere may not fit. This example concerns an ordinary, nonurgent wait within an agreed contact window.',
        ],
      },
      {
        title: 'Give the waiting item a place to stay',
        paragraphs: [
          'Write: "Bicycle collection unconfirmed. Shop expects to contact me by four. If no reply then, contact the shop once." Keep the phone audible for that call. You can now organize a shelf of books, a task whose next step does not depend on the bicycle.',
          'At four, follow the recorded return condition. If a reply arrives earlier, reconsider the plan using that information. Temporary redirection lets another task proceed without pretending that the unfinished errand disappeared.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'A bicycle wait with a return point',
        alt: 'Record collection as unconfirmed, sort books while the call remains audible, and follow up at four if no reply arrives.',
        caption: 'Four is a fictional agreed contact point, not a recommended waiting duration. New information can change the plan.',
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
        'State what is missing and whether anything useful can be checked now.',
        'Write a reasonable follow-up condition consistent with any agreement or deadline.',
        'Choose a small task that does not require the missing answer, and preserve the needed contact route.',
        'Do its first step, then keep the pending note somewhere you will see at the return point.',
      ],
      notice: 'Your new task is independent, and the pending issue still has an explicit next contact.',
      troubleshooting: 'If you keep checking, make the return reminder clearer; if circumstances changed, revise the plan rather than ignoring them.',
    },
    recall: {
      prompt: 'A friend has not confirmed the meeting place, but you can prepare the book you are lending. What would responsible redirection look like?',
      hint: 'Preserve the location question and choose work that does not need its answer.',
      answer: 'Record when you will check the location again, keep the relevant contact available, and prepare the book. Do not start traveling as though the place were confirmed.',
    },
    quiz: {
      question: 'While an agreed, nonurgent reply is pending, which plan redirects attention without dropping the issue?',
      options: ['Do an independent task and keep a specific follow-up condition.', 'Reread the old exchange whenever the delay comes to mind.', 'Start another task and rely on remembering to return sometime later.'],
      correctIndex: 0,
      explanation: 'The first plan preserves a return point. Rereading can keep attention on unchanged information; an unscheduled intention leaves follow-up less explicit.',
    },
    takeaway: 'Move attention to something available while preserving the unfinished item\'s return point.',
    sourceNote: 'Attentional deployment is part of the emotion-regulation process model. This ordinary waiting plan is educational, not treatment or a universal coping rule.',
  },
  {
    id: 'mind-020',
    title: 'Change your response when the situation changes',
    outcome: 'Choose and revise a response to mild frustration using controllability, purpose, and new information.',
    scene: 'Responding to an unclear room change for a community music rehearsal',
    sections: [
      {
        title: 'The same frustration can need different actions',
        paragraphs: [
          'Your community music rehearsal has moved rooms, but the announcement names only the building. At first, the useful action is a clarifying question. After you send it, the organizer is unavailable for a while. Repeatedly asking the same question cannot produce an answer sooner. Later, the room is confirmed, but the entrance is different and your travel plan needs adjusting.',
          'These moments can all feel frustrating. They do not present the same opportunity for action. A strategy that fitted the first moment can become unhelpful in the second or third.',
        ],
      },
      {
        title: 'Flexibility means checking the fit',
        paragraphs: [
          'Regulatory flexibility is a framework for choosing and revising emotion-regulation strategies according to context and feedback. Instead of declaring one response universally best, ask what is changeable now, what the situation requires, and what would show that your current response is not working.',
          'Clarification addresses missing information when someone can supply it. Temporary redirection can fit an ordinary wait with a return point. Changing the practical plan fits a confirmed logistical problem. Reappraisal can help separate a factual change from an unsupported personal interpretation. None of these requires pretending that the inconvenience is enjoyable.',
        ],
      },
      {
        title: 'Follow the information through the rehearsal example',
        paragraphs: [
          'First ask, "Which room and entrance should we use?" While the answer is pending, note when to check again and mark the rhythm in your own score. Once the organizer replies, stop treating the location as unknown. Check the new entrance and adjust your arrival route if needed.',
          'Feedback matters. If the answer still omits the entrance, clarify that remaining detail rather than choosing a new coping method at random. If the revised location is inaccessible to you, explain the concrete access need and discuss an alternative. Flexibility serves the actual problem; it is not a requirement to remain quiet or reinterpret every obstacle positively.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Let new information change the next action',
        alt: 'Ask about an unclear rehearsal room, work on a score while the reply is pending, then adjust travel after confirmation.',
        caption: 'The strategy follows the current information. The timeline shows sequence, not fixed coping durations.',
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
        'Write what is frustrating and which relevant facts are known or missing.',
        'Identify what you can change now and what depends on someone else.',
        'Choose a fitting action: clarify, modify the plan, reconsider an interpretation, or redirect temporarily.',
        'Name one piece of feedback that would make you change that response.',
      ],
      notice: 'Your plan explains why the response fits now and when it should be revised.',
      troubleshooting: 'If the only goal is "feel nothing," replace it with a practical need the response should serve.',
    },
    recall: {
      prompt: 'A delivery is delayed. You can now choose a different collection day, whereas earlier you were only waiting for information. What changes?',
      hint: 'A previously unavailable decision is now possible.',
      answer: 'Move from temporary waiting to comparing the offered dates and selecting a workable one. Continuing to distract yourself would miss the new opportunity to resolve the practical issue.',
    },
    quiz: {
      question: 'You receive the clarification you were waiting for. What does flexibility suggest?',
      options: ['Keep the waiting strategy because it helped earlier.', 'Change strategies repeatedly to avoid settling on one.', 'Reassess the task and act on the information now available.'],
      correctIndex: 2,
      explanation: 'New information changes what is controllable. Flexibility means responding to that change, not loyalty to one method or constant switching for its own sake.',
    },
    takeaway: 'Choose for the current situation and revise when its conditions change.',
    sourceNote: 'The regulatory-flexibility framework emphasizes context and feedback. This rehearsal example is nonclinical and does not identify one universally best strategy.',
  },
  {
    id: 'mind-021',
    title: 'Put open task states somewhere you can inspect',
    outcome: 'Use a small external record to distinguish what is known, what is missing, and what to do next.',
    scene: 'Preparing library returns with four books in different location and due-status combinations',
    sections: [
      {
        title: 'Which book did you already look for?',
        paragraphs: [
          'You are preparing library returns. In this fictional example, the blue novel is due and already in your bag. The atlas is due but missing. A photo essay is on the shelf and not due yet. A poetry book is missing but also not due yet. You keep reopening the account and searching the same shelf because these different states blur together.',
          'Remembering four titles is only part of the demand. You are also tracking due status, location, and which action each combination requires.',
        ],
      },
      {
        title: 'External storage can carry the changing state',
        paragraphs: [
          'Cognitive offloading means using an external aid to reduce what must be held or processed internally. A small table can carry the current state of this errand: title, observation, and next action. You can then look up whether the atlas was found rather than repeatedly reconstructing the search.',
          'Writing something down does not make it true. Check the current account for due status and inspect the actual bag or shelf for location. Mark an uncertain observation as uncertain. The note is useful because it keeps verified facts and unresolved questions available, not because it replaces verification or teaches the material automatically.',
        ],
      },
      {
        title: 'Use the record to choose the next search',
        paragraphs: [
          'Record the blue novel as ready to return. Leave the photo essay out of this return task. Search for the atlas next because it is both missing and due. Keep the poetry book listed for later attention rather than letting it disappear from the record. The diagram crosses two questions: found or missing, and due or not due.',
          'Update the atlas row when it is found. Keep only search history that helps the next action, and separate obsolete guesses from current facts so the record remains usable.',
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: 'Location crossed with due status',
        alt: 'Found and due: blue novel; found and not due: photo essay; missing and due: atlas; missing and not due: poetry.',
        caption: 'The fictional two-way classification exposes the next urgent search. Due status must come from the actual account in real use.',
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
        'List three or four items and the questions that determine their next actions.',
        'Create columns for item, checked observation, and next action. Label unknowns explicitly.',
        'Use the record to choose one available action and complete or rehearse it.',
        'Update that row so it no longer sends you back to completed work.',
      ],
      notice: 'You can identify the next unresolved item without replaying the whole errand in memory.',
      troubleshooting: 'If the table grows unwieldy, keep current observations and link or store background detail separately.',
    },
    recall: {
      prompt: 'You compare repair quotes and cannot remember which shop confirmed collection. What would you record?',
      hint: 'Track evidence and status, not just shop names.',
      answer: 'For each shop, record its actual reply, whether collection is confirmed, and the next question. Keep unanswered items distinct from a confirmed refusal or acceptance.',
    },
    quiz: {
      question: 'You make a table of missing books and completed searches. What has the table itself achieved?',
      options: ['An independent check that every entry matches the bag and shelves.', 'An available task-state record, whose entries still need verification.', 'Evidence that the search history can now be recalled without notes.'],
      correctIndex: 1,
      explanation: 'Offloading changes where information is kept. It does not validate the entries or demonstrate unaided learning.',
    },
    takeaway: 'Store the current state and next action, not an unfiltered history.',
    sourceNote: 'The cognitive-offloading review supplies the concept. The library record is an original organizational example, not a measured memory benefit.',
  },
  {
    id: 'mind-022',
    title: 'Put the needed explanation beside its object',
    outcome: 'Reduce unnecessary matching between a diagram and the information required to understand it.',
    scene: 'Reading a community-center study map whose check-in instruction is separated from reception',
    sections: [
      {
        title: 'The map sends your eyes away from the route',
        paragraphs: [
          'A practice map of a community center marks the entrance A, reception B, and workshop C. On another page, the legend says that B is where visitors collect a pass. To understand the route, you must remember B, find its explanation, then mentally attach that explanation to the right place on the map.',
          'You are trying to learn where to go, but part of the work is maintaining a letter-to-meaning match. That extra matching is not the route knowledge you wanted to acquire.',
        ],
      },
      {
        title: 'Separated information can add a joining task',
        paragraphs: [
          'Research on instructional format examines the demands created when learners must integrate separated sources of information. If neither the diagram nor the explanation makes enough sense alone, moving repeatedly between them can add avoidable processing. This is often called a split-attention problem.',
          'The practical fix is selective integration. Put the short instruction "Collect your pass here" beside reception, where its meaning is needed. Keep the route visible. A paragraph about the building\'s history does not need to sit at that point, and adding every possible explanation could crowd the map until the labels become harder to follow.',
        ],
      },
      {
        title: 'Follow the map without memorizing its legend',
        paragraphs: [
          'In the revised study sketch, Entrance leads to Reception, labeled with the pass instruction, then to Workshop. You can follow the arrows and understand why reception is a stop along the way. The explanation belongs to a place rather than floating elsewhere behind a letter code.',
          'Check whether the revision removes a needed lookup, not merely whether it contains more text. If two labels collide, shorten one or give the objects more space. Preserve a separate explanation when it is optional or already understood. This is a fictional learning diagram, not navigation advice for any actual building; real access instructions must come from the venue.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Attach check-in to reception',
        alt: 'A schematic route runs from the lower-left entrance to lower-middle reception, then upper-right workshop; the pass instruction sits at reception.',
        caption: 'A fictional top-view study map. Read the pass instruction where reception appears, without consulting a distant legend.',
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
        'Sketch the entrance, reception, and workshop with arrows connecting them in that order.',
        'Put the pass instruction in a separate legend, then trace how you must look between legend and map.',
        'Move the short instruction beside reception, leaving enough space for the route and labels.',
        'Follow the route again and identify the lookup that the revision removed.',
      ],
      notice: 'A necessary explanation can be understood at the point where it is used.',
      troubleshooting: 'If the sketch becomes crowded, remove optional prose rather than shrinking all the labels.',
    },
    recall: {
      prompt: 'A study diagram shows a cable as D, while another page explains its purpose. What revision could help a beginner?',
      hint: 'Keep the dependent pieces together without adding unrelated text.',
      answer: 'Place a short purpose label beside that cable, keeping long background material elsewhere. The learner can then connect the explanation to the correct line without remembering the code.',
    },
    quiz: {
      question: 'Which diagram edit most directly removes unnecessary matching?',
      options: ['Put the necessary arrow explanation beside the arrow it describes.', 'Move the explanation farther away to make the diagram look cleaner.', 'Repeat the full chapter beside every object in the drawing.'],
      correctIndex: 0,
      explanation: 'The first edit joins dependent information at its point of use. Separation adds lookup; wholesale duplication creates clutter and extra reading.',
    },
    takeaway: 'Place necessary meaning where the reader needs to connect it.',
    sourceNote: 'Instruction-format research supports attention to separated, interdependent information. The venue sketch is original and schematic, not a tested building map.',
  },
  {
    id: 'mind-023',
    title: 'Inspect a worked solution before guessing the method',
    outcome: 'Use a worked example to understand intermediate reasoning, then attempt a related problem independently.',
    scene: 'Learning unit-price reasoning from a fictional notebook purchase for a club',
    sections: [
      {
        title: 'The final answer does not show how to begin',
        paragraphs: [
          'A club pays £48 for six identical notebooks. A worksheet asks what four would cost at the same unit price, with no extra fees. You see the answer, £32, but do not know which operation connects the numbers. Trying several calculations until one matches can occupy the whole session without revealing the method.',
          'A worked example supplies the missing intermediate decisions. It shows why a calculation is useful, not just which numbers appear on the way to an answer.',
        ],
      },
      {
        title: 'Reduce search while the procedure is unfamiliar',
        paragraphs: [
          'Cognitive-load research distinguishes open-ended problem search from learning an organized procedure. A beginner can spend available attention choosing possible moves rather than noticing the relationship that makes a move appropriate. Worked examples make that relationship available for inspection.',
          'Here, the useful relationship is a constant price per notebook. Divide £48 by six to find £8 for one notebook. Then multiply £8 by four to get £32. Finding the unit price creates a value you can reuse for a different quantity. The example assumes identical items and unchanged pricing; it is not a claim about every real shop offer.',
        ],
      },
      {
        title: 'Explain the steps, then change the numbers',
        paragraphs: [
          'Say why each step exists: division removes the original quantity, multiplication applies the requested quantity. If you only memorize "divide, then multiply," you can still choose the wrong numbers. Label the intermediate result "price of one" so the arithmetic stays connected to its meaning.',
          'For a new fictional case, five notebooks cost £30 at a constant unit price. Two would cost £12 because one costs £6. Cover this answer and attempt the reasoning before checking it.',
          'A worked example is a starting support, not a permanent substitute for deciding independently. If the new case fails, identify which relationship was unclear instead of copying the final number again.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Keep the meaning of the intermediate £8',
        alt: 'Six notebooks cost £48; dividing by six gives £8 per notebook; multiplying by four gives £32.',
        caption: 'All prices are invented. The calculation assumes a constant unit price and no additional fees.',
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
        'Read the six-notebook solution and write what the intermediate £8 represents.',
        'Explain why division comes before multiplication in this particular problem.',
        'Cover the second solution and calculate the cost of two notebooks when five cost £30.',
        'Check against £12 and inspect the reasoning, not only the final amount.',
      ],
      notice: 'You can name the relationship that makes each calculation appropriate.',
      troubleshooting: 'If a number has no meaning in your explanation, label its quantity and unit before calculating again.',
    },
    recall: {
      prompt: 'A beginner can copy a spreadsheet formula but cannot explain why it uses a total divided by a count. What support would help?',
      hint: 'Expose the intermediate meaning before removing the example.',
      answer: 'Show a worked case with the total, count, and resulting value labeled, then ask them to explain the division and solve a changed case. A pasted formula alone hides those decisions.',
    },
    quiz: {
      question: 'You cannot see how a worksheet calculation starts. Which solution best exposes the unfamiliar procedure?',
      options: ['A polished final answer with the intermediate lines removed.', 'A sequence whose decisions and intermediate values are explained.', 'Several answer variants without an explanation of when each applies.'],
      correctIndex: 1,
      explanation: 'Explained intermediate reasoning makes the method inspectable. A final answer or unorganized alternatives leave the beginner to infer the missing procedure.',
    },
    takeaway: 'Study why each step follows, then test the procedure on a changed case.',
    sourceNote: 'Cognitive-load research informs worked-example use. The notebook prices and teaching sequence are invented, not measurements from that research.',
  },
  {
    id: 'mind-024',
    title: 'Keep the guidance you need and fade what is redundant',
    outcome: 'Adjust personal study support using demonstrated performance rather than familiarity alone.',
    scene: 'Replacing a familiar paper-fan folding script with a short prompt while retaining help',
    sections: [
      {
        title: 'The instructions now describe moves you already know',
        paragraphs: [
          'When you first made a paper fan, each line helped: fold a strip from one edge, turn the paper over, fold the same width back, and continue alternating. After several successful attempts, reading that full script before every fold becomes another activity alongside the folding. You already know which direction comes next.',
          'That does not mean all instructions are unnecessary. You might still need a reminder to keep the widths even, or full support when trying an unfamiliar variation.',
        ],
      },
      {
        title: 'Useful support depends on existing knowledge',
        paragraphs: [
          'The expertise-reversal effect describes how guidance that helps novices can lose its benefit or interfere as relevant knowledge grows. A learner who already understands a step may have to process an explanation that duplicates what they can supply themselves. Instructional fit depends on the specific knowledge, not a general label such as beginner or expert.',
          'The practical test is performance with appropriate help available. Feeling bored is not proof that you know the procedure, and recognizing the words is not the same as producing the next move. Reduce a redundant explanation, attempt the task, and restore help where an error reveals a gap.',
        ],
      },
      {
        title: 'Try a smaller prompt, not no support at all',
        paragraphs: [
          'For a familiar fan, replace the full fold script with "Alternate direction; keep widths even." Keep the original instructions beside you but out of the immediate reading path. Make a few folds and inspect whether you can maintain the pattern. If direction becomes uncertain, reopen that part of the script rather than struggling through repeated guesses.',
          'This is about optional learning explanations. A required safety check remains necessary even if its wording is familiar. Knowing how to do an action does not prove that its target, permission, or conditions are correct today. Do not transfer the idea of reducing study guidance to skipping operational controls or equipment instructions.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two levels of support for the same fan',
        alt: 'A novice uses each fold instruction; a learner who can already fold uses an alternating-direction prompt with the script available.',
        caption: 'Choose support by demonstrated need. The cards describe guidance, not the final fan\'s geometry.',
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
        'If the fan is unfamiliar, follow the full sequence slowly before considering reduced guidance.',
        'Once you can explain the sequence, cover the detailed script and keep only the short prompt visible.',
        'Try several folds and inspect their direction and approximate width.',
        'Restore the specific instruction if you need it, then note which support remains useful.',
      ],
      notice: 'The remaining prompt addresses a real need, while unnecessary explanation can stay available in reserve.',
      troubleshooting: 'If you cannot complete the task accurately, restore guidance. Reducing help is not the goal by itself.',
    },
    recall: {
      prompt: 'You know a familiar spreadsheet operation but are learning a new formula. Should both receive the same detailed guidance?',
      hint: 'Expertise can differ between neighboring parts of a task.',
      answer: 'Keep detailed reasoning for the new formula while shortening already-mastered setup instructions. Restore any setup help if an error shows it is still needed.',
    },
    quiz: {
      question: 'You solve familiar examples unaided but need help with new ones. Which support plan fits?',
      options: ['Use equally short notes for familiar and unfamiliar tasks.', 'Reread the full introduction before every familiar problem.', 'Shorten demonstrated redundancy while retaining needed help and required checks.'],
      correctIndex: 2,
      explanation: 'Instruction should fit current knowledge. Familiarity alone does not justify removing help, and learning guidance is different from a required safety control.',
    },
    takeaway: 'Let demonstrated knowledge change optional guidance, not required safeguards.',
    sourceNote: 'The expertise-reversal source concerns instructional fit. The fan exercise is an original illustration, not a tested claim about paper-folding instruction.',
  },
  {
    id: 'mind-025',
    title: 'Learn a part, then reconnect the journey',
    outcome: 'Reduce simultaneous novelty while preserving the links that make a multistep task work.',
    scene: 'Studying a fictional museum journey with a walk, bus, train transfer, and final walk',
    sections: [
      {
        title: 'Every stage is unfamiliar at once',
        paragraphs: [
          'You are learning a fictional route to a museum: walk to the bus stop, take the bus to the station, change to a train, then walk from the museum stop to the entrance. Reading every detail repeatedly makes the page familiar without making the connections clear. Breaking the journey into parts can help you inspect one unfamiliar decision. But memorizing isolated stage names would leave the original problem unsolved: how does arriving from one stage let you begin the next?',
        ],
      },
      {
        title: 'Reduce novelty, not the relationships',
        paragraphs: [
          'Cognitive-load theory considers demands in relation to what a learner already knows. Several interacting unfamiliar elements can be harder to coordinate than the same elements after some relationships are understood. A useful subdivision makes one relationship the learning target while keeping the surrounding information available.',
          'For the transfer, leave the bus arrival point and the train departure platform visible. Study how the station route connects them. You do not need to memorize the museum\'s entrance instructions at the same moment, but you must still know which arrival feeds this transfer and which departure it serves.',
        ],
      },
      {
        title: 'Put the transfer back into the whole route',
        paragraphs: [
          'After studying the station connection, trace the complete route and explain each handoff. The first walk ends at the bus stop. The bus ends at the station arrival point. The station route leads to the train platform. The final walk begins at the museum stop. Each stage supplies the next stage\'s starting condition.',
          'If you can describe the station route but cannot identify where the bus leaves you, the connection still needs work. Return to that gap rather than rereading unrelated museum information. The diagram is only a fictional learning sketch. For real travel, verify current routes, access requirements, and timings.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Keep the handoffs while studying the transfer',
        alt: 'A walk reaches the bus stop, the bus reaches the station, the station connection reaches the train platform, and the train leads to the final walk.',
        caption: 'This fictional route highlights the station connection. It shows dependencies, not distances or real transport instructions.',
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
        'Draw four boxes for the route and write what starts and ends each stage.',
        'Circle the station connection as the one relationship to study first.',
        'Keep its incoming bus arrival and outgoing train platform visible while explaining the connection.',
        'Trace the whole journey again, naming how each stage supplies the next one.',
      ],
      notice: 'You can explain the focused part and reconnect it without losing its inputs or outputs.',
      troubleshooting: 'If the parts feel like unrelated facts, add the handoff between adjacent boxes before adding more detail.',
    },
    recall: {
      prompt: 'You learn one stage of a recipe: preparing the sauce. What must you restore when practicing the whole procedure?',
      hint: 'Ask what the stage receives and what uses its result.',
      answer: 'Reconnect the sauce preparation to the ingredients it requires and the later step that uses it, following the actual recipe. Naming the sauce steps alone does not coordinate the whole procedure.',
    },
    quiz: {
      question: 'You studied a station transfer separately. Which check tests its connection to the journey?',
      options: ['Recite its label faster than before.', 'Explain what supplies its starting conditions and what follows its result.', 'Remove adjacent stages so only its definition remains visible.'],
      correctIndex: 1,
      explanation: 'Integration concerns relationships between parts. A fluent label or isolated definition can leave those dependencies unlearned.',
    },
    takeaway: 'Study one unfamiliar relationship, then rebuild the connected task.',
    sourceNote: 'This segmentation framework applies cognitive-load principles. The route is invented and does not establish an optimal sequence for every learner.',
  },
  {
    id: 'mind-026',
    title: 'Hide one step before hiding the whole solution',
    outcome: 'Use a partially completed example to find a specific reasoning gap between following and solving.',
    scene: 'Converting a film duration of two hours and thirty-five minutes into minutes',
    sections: [
      {
        title: 'Following feels easier than starting alone',
        paragraphs: [
          'A film listing gives a duration of two hours and thirty-five minutes. Your planning sheet uses minutes. A worked solution says: one hour has sixty minutes; two hours therefore have 120 minutes; add the remaining thirty-five to get 155. With the solution visible, each line seems straightforward.',
          'Covering every line at once changes the task. Now you must recall the conversion, choose an operation, preserve the leftover minutes, and check the total. If you get stuck, it can be difficult to tell which part was missing.',
        ],
      },
      {
        title: 'A partial example isolates one demand',
        paragraphs: [
          'A fading scaffold removes support gradually. Keep the setup and earlier reasoning visible while completing one missing step. This gives you a smaller independent decision and makes feedback more specific. It is a practical instructional approach informed by cognitive-load principles and the changing usefulness of guidance.',
          'For the duration, leave "two hours = 120 minutes" visible and hide the final addition. Supply 120 + 35 = 155 and explain why the thirty-five is added. If you multiply 120 by thirty-five, the error points to the relationship between the two parts, not a failure to remember the hour conversion.',
        ],
      },
      {
        title: 'Remove another support when the reason is available',
        paragraphs: [
          'After checking that step, try a new duration, one hour and twenty minutes, with only "one hour = sixty minutes" supplied. The result is eighty minutes. Then attempt a related duration with no supplied conversion, keeping the reference available for checking afterward.',
          'Do not fade simply because you copied an answer correctly. Ask whether you produced the missing step and can explain it. If a gap appears, restore the relevant line and try a different example. The aim is independent reasoning with informative feedback, not reaching an empty worksheet as quickly as possible. Mandatory operational instructions are not optional scaffolds to remove through this exercise.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Change how much reasoning is supplied',
        alt: 'One completion task supplies two hours as 120 minutes; a later task supplies only the sixty-minute hour conversion.',
        caption: 'The blanks represent learner work. The full worked totals in the prose are 155 and eighty minutes.',
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
        'Copy the two-hour-thirty-five-minute setup and the supplied 120-minute conversion. Cover the final total.',
        'Complete the addition and write why it combines the two parts of the duration.',
        'Check against 155 minutes and correct the specific step if needed.',
        'Try one hour twenty minutes with less support, then explain which information you still needed.',
      ],
      notice: 'An error can be attached to a particular missing step instead of a vague inability to solve.',
      troubleshooting: 'If the reduced version is too difficult, restore one useful line rather than copying the whole solution again.',
    },
    recall: {
      prompt: 'You can follow a worked budget calculation but freeze on a blank page. What intermediate exercise would you create?',
      hint: 'Keep enough context to make one decision independently.',
      answer: 'Hide the final calculation while leaving its inputs and earlier reasoning visible. Complete it with an explanation, check it, then remove another support only when that step is manageable.',
    },
    quiz: {
      question: 'You completed a partially supplied duration calculation. What justifies covering another line next time?',
      options: ['The complete answer looks familiar on the page.', 'The copied solution is neat and error-free.', 'You produced the hidden step and explained why it follows.'],
      correctIndex: 2,
      explanation: 'Independent production with a reason is stronger evidence for fading that support. Familiarity and accurate copying still include help from the visible solution.',
    },
    takeaway: 'Remove enough help to reveal one checkable gap, not every gap at once.',
    sourceNote: 'Fading here is an instructional application of cognitive-load and expertise principles. The duration problems are original examples, not a tested learning schedule.',
  },
  {
    id: 'mind-027',
    title: 'Close the explanation and produce the sequence',
    outcome: 'Check what you can recall without the page, then correct missing or inaccurate steps.',
    scene: 'Learning the turn order in a short invented card-game rules sheet',
    sections: [
      {
        title: 'The rules seem obvious while they are visible',
        paragraphs: [
          'A short practice rules sheet describes an invented card-game turn: draw a card, discard one card face up, move your marker one space, then pass the draw pile left. While reading, you can point to each action and say it makes sense. Close the sheet, however, and you are unsure whether moving the marker comes before or after discarding.',
          'The earlier fluency included help from the page. The next step was already there to recognize. Remembering the procedure without that help asks you to produce the sequence yourself.',
        ],
      },
      {
        title: 'Retrieval is more than looking again',
        paragraphs: [
          'Retrieval practice means attempting to bring learned information to mind. Research using prose passages found better delayed retention from prior recall tests than from comparable repeated study opportunities, even though immediate performance could favor restudying. The result concerns the study conditions, not a guarantee that every memory task will improve equally.',
          'For the game, close the entire rules sheet and write the turn from memory. Hiding only one word while the surrounding sequence remains visible supplies substantial cues. Keep any uncertainty visible instead of quietly checking midway and treating the result as unaided recall.',
        ],
      },
      {
        title: 'Use the mismatch to guide the correction',
        paragraphs: [
          'Suppose you write draw, move, discard, pass. Reopen the source and compare each position. The missing relationship is that discarding comes before moving. Rewrite the corrected sequence and explain that specific difference. You do not need to condemn the entire attempt because two positions were reversed.',
          'Later, close the source again and try another recall. During an actual game, consulting the rules can be sensible; the closed-book step is a learning exercise, not a ban on useful references. Producing the turn order also does not establish that you understand every strategy or exception. Name the small piece of knowledge this attempt actually tested.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The invented turn to reconstruct',
        alt: 'The sequence is draw a card, discard one face up, move the marker one space, and pass the draw pile left.',
        caption: 'This original practice sequence is the reference. Hide the whole sequence before testing recall.',
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
        'Read the four-step turn and check that each action makes sense before testing it.',
        'Close or cover the prose and diagram, then write the sequence without peeking.',
        'Reopen the reference and mark omissions, order changes, or invented actions.',
        'Write one corrected relationship and choose a later opportunity to try recall again.',
      ],
      notice: 'The comparison shows what you produced without support and exactly what needs repair.',
      troubleshooting: 'If nothing comes back, study a smaller part with its meaning, then try again rather than guessing indefinitely.',
    },
    recall: {
      prompt: 'A diagram about a familiar process feels easy to explain while you look at it. How would you check unaided understanding?',
      hint: 'Remove the answer cues before producing an explanation.',
      answer: 'Close the diagram and reconstruct its main sequence and connections. Then compare with the reference, correcting the specific gaps rather than counting recognition as recall.',
    },
    quiz: {
      question: 'You want to explain a museum guide later. Which attempt best checks retrieval now?',
      options: ['Write the process after closing its explanation, then check it.', 'Paraphrase each label while the diagram remains visible.', 'Read the highlighted sequence until its wording sounds familiar.'],
      correctIndex: 0,
      explanation: 'The closed-source attempt requires production from memory. Paraphrasing and rereading can aid study, but still provide the information being tested.',
    },
    takeaway: 'Produce without the source, compare honestly, and repair the specific gap.',
    sourceNote: 'Roediger and Karpicke studied prose recall and retention. This card sequence is invented; corrective checking is a practical addition, not their exact procedure.',
  },
  {
    id: 'mind-028',
    title: 'Give learning another encounter after a gap',
    outcome: 'Spread practice across time and adjust later attempts using the retention goal and actual recall.',
    scene: 'Learning French weekday words for use on a trip next month',
    sections: [
      {
        title: 'Today\'s smooth answer has not reached next month',
        paragraphs: [
          'You are learning a few French weekday words for a trip next month. You read Monday, lundi; Tuesday, mardi; Wednesday, mercredi, then repeat the pairs several times. The answers now come quickly. That is useful evidence about the current session, but your travel question concerns whether the words will be available after other days and activities intervene.',
          'Using every practice opportunity immediately leaves that later availability untested. Another encounter after a gap gives you a different view of what remained accessible.',
        ],
      },
      {
        title: 'Spacing depends partly on the retention goal',
        paragraphs: [
          'Distributed practice spreads learning episodes over time. Research on verbal recall finds that spacing affects retention and that useful spacing depends partly on how long the material needs to be remembered. This is not a rule that the longest possible gap is always best, or that one calendar interval fits every learner and item.',
          'Begin the later encounter with recall rather than immediately reopening the answers. Then check and correct them. If nothing can be recalled, you may need more support and a shorter next gap. If the words remain available reliably, a later check can be farther away while still serving your goal.',
        ],
      },
      {
        title: 'Schedule the question, not just a reminder to study',
        paragraphs: [
          'Write the prompt "What are the French words for Monday, Tuesday, and Wednesday?" Keep the checked word pairs with the answer. A possible starting plan is another attempt tomorrow and one later in the week. Those are suggested appointments, not experimentally established intervals for these words.',
          'At each appointment, record which word you produced before opening the answer. A calendar tick shows attendance, not retention. Adjust the next encounter from that evidence, and include a check nearer the trip if the words still matter. Spacing distributes the practice; it does not remove the need to understand, retrieve, and verify the material.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The same weekday question returns',
        alt: 'Study the weekday pairs today, recall tomorrow, try again later in the week, and adjust the next gap from performance.',
        caption: 'Illustrative appointments, not an optimal schedule or a proportional time scale.',
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
        'Choose information you want to retain beyond today and state when you expect to use it.',
        'Write an answerable prompt with a separate checked answer, using the weekday pairs if useful.',
        'Schedule a later recall attempt and specify that the answer stays closed until after trying.',
        'Leave space to record the result and adjust the following gap. The waiting time is outside this practice budget.',
      ],
      notice: 'Your plan includes a later production attempt, not only more reading now.',
      troubleshooting: 'If reminders accumulate, reduce the number of active questions instead of assigning a large catch-up session.',
    },
    recall: {
      prompt: 'You need a procedure next month, but can repeat it perfectly right after reading today. What evidence is missing?',
      hint: 'The intended use includes a delay.',
      answer: 'You need later, unaided attempts after intervening activity. Schedule a question about the procedure and use its result to decide what to review and when.',
    },
    quiz: {
      question: 'You are learning words for next month\'s trip. What should guide the next practice gap?',
      options: ['How many successful immediate repetitions fit into today.', 'How easily the source reads immediately after study.', 'Whether the answer can be produced at the later attempt.'],
      correctIndex: 2,
      explanation: 'Later production tests availability after a gap. Immediate fluency does not supply that evidence or identify a universally suitable interval.',
    },
    takeaway: 'Plan another encounter, begin with recall, and let the result inform the next gap.',
    sourceNote: 'The review synthesizes verbal-recall research. These appointments are examples, not validated intervals or individual predictions.',
  },
  {
    id: 'mind-029',
    title: 'Correct why the tempting answer was wrong',
    outcome: 'Use quiz feedback to repair a mistaken relationship instead of memorizing the correct option position.',
    scene: 'Confusing the mean with the middle value in a quiz about three invented journey times',
    sections: [
      {
        title: 'The wrong answer has a plausible reason',
        paragraphs: [
          'A practice question gives three invented journey times: three, five, and ten minutes. It asks for their mean. You choose five because it is the middle value in the ordered list. Feedback says six. Simply writing "answer B" would preserve the result without repairing the reason five seemed convincing.',
          'Your choice was not random. You used a rule that answers a different question: the middle ordered value is the median. The mean instead adds the values and divides by how many there are.',
        ],
      },
      {
        title: 'Wrong options can become familiar too',
        paragraphs: [
          'Multiple-choice tests expose learners to incorrect alternatives as well as correct information. Research documents both learning benefits and the risk that distractors later contribute to errors. Finishing the quiz therefore does not finish the learning task, especially when one alternative had a convincing explanation in your mind.',
          'Correct the relationship that made the distractor attractive. For these times, three plus five plus ten is eighteen, and eighteen divided by three is six minutes. Five is still the median of this list. Naming what the alternative would answer is more useful than treating it as a meaningless number to avoid.',
        ],
      },
      {
        title: 'Keep a contrast you can use next time',
        paragraphs: [
          'Write: "For the mean, combine all the times and share the total equally across the three journeys. For the median, order the times and take the middle one."',
          'Now try four, six, and eleven minutes. Their mean is seven minutes; their median is six. The changed values check the distinction rather than the earlier answer position.',
          'If feedback does not explain why an option fits, consult a reliable reference before making a study card. Do not rehearse a guessed correction as though it were verified. A useful card asks for the reasoning that separates the alternatives and keeps the checked explanation available after the attempt.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Five and six answer different questions',
        alt: 'For journey times three, five, and ten, the median is five and the mean is six because the total eighteen is divided by three.',
        caption: 'These times are invented. The distractor is plausible because it is correct for a different summary.',
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
        'Write which alternative tempted you and the reason it seemed to fit.',
        'Read the explanation and identify the relationship your answer confused.',
        'Write a contrast explaining both the correct rule and what the alternative misses.',
        'Try the changed times, four, six, eleven, and check the mean of seven and median of six.',
      ],
      notice: 'The correction explains when each rule applies instead of preserving an answer letter.',
      troubleshooting: 'If you cannot justify the distinction, verify it before repeating the card.',
    },
    recall: {
      prompt: 'A quiz distractor says ignoring an alert prevents any interruption. What correction would address the tempting reasoning?',
      hint: 'Separate receiving a notification from replying to it.',
      answer: 'Ignoring a reply opportunity does not prevent the alert from arriving and drawing attention. Correct that distinction, rather than memorizing which option number mentioned notifications.',
    },
    quiz: {
      question: 'You chose a familiar distractor in a vocabulary quiz. Which follow-up repairs the error?',
      options: ['Reread only the correct wording until it feels familiar.', 'Explain the mistaken relationship and test the correction on a changed case.', 'Repeat the question immediately without reading its explanation.'],
      correctIndex: 1,
      explanation: 'A reasoned correction targets the misconception. Familiar wording or uncorrected repetition can leave the attractive wrong relationship intact.',
    },
    takeaway: 'Repair the reason for the error, not just its answer position.',
    sourceNote: 'The multiple-choice and learning-techniques sources inform feedback use. The journey values are invented arithmetic examples, not study results.',
  },
  {
    id: 'mind-030',
    title: 'Make a short, checkable attempt before revealing',
    outcome: 'Generate a candidate answer from useful context, then verify it without prolonged unsupported guessing.',
    scene: 'Completing a familiar opposite-word card before turning it over',
    sections: [
      {
        title: 'There is a moment before the answer appears',
        paragraphs: [
          'A vocabulary card shows "tall: opposite beginning with s." Before turning it over, you attempt "short." The reverse confirms the answer. Producing the candidate required using the relationship and letter cue, while reading the completed pair would have supplied the target without that attempt.',
          'This example is deliberately familiar enough to support a response. A blank card containing an unknown word from a language you have never studied would not provide the same useful basis for generation.',
        ],
      },
      {
        title: 'Generation creates something to check',
        paragraphs: [
          'Generation-effect research compares producing target information with simply reading it and finds memory advantages under studied conditions. It does not establish that any difficult guess is beneficial, or that longer guessing produces more learning. The relation, cue, prior knowledge, and opportunity to verify the target matter.',
          'Use a bounded attempt when the prompt gives you enough context. Say or write the candidate, then reveal the checked answer. If you cannot form a reasonable candidate, use a useful hint or study the explanation. Refusing to reveal an unfamiliar answer indefinitely turns a learning exercise into unsupported speculation.',
        ],
      },
      {
        title: 'Keep the attempt separate from the correction',
        paragraphs: [
          'Suppose another card asks for the opposite of full, beginning with e. You write "empty," then check it. On a harder item, you might write an uncertain answer. Preserve that attempt long enough to compare it with the reference instead of pretending you knew the revealed answer all along.',
          'The practical value is a visible question for feedback: what did you produce, and how does it compare with the target? These word pairs illustrate the method rather than reconstructing the study or supplying a vocabulary curriculum. Keep guesses inside a learning setting. Predicting a study answer is different from executing an uncertain command, changing equipment, or giving someone unverified instructions.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The card has a cue, an attempt, and a check',
        alt: 'The prompt tall, opposite beginning with s, leads to the candidate short, which is compared with the revealed answer short.',
        caption: 'The answer is familiar and bounded by context. An unknown prompt without a useful cue calls for study, not endless guessing.',
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
        'Use the full-to-empty word pair or choose a familiar prompt with enough context to attempt.',
        'Cover the answer and write a candidate, marking uncertainty rather than hiding it.',
        'Reveal the checked answer and compare. If the topic was unfamiliar, study it before making another prompt.',
      ],
      notice: 'You have a genuine pre-reveal attempt and a checked correction or confirmation.',
      troubleshooting: 'If the prompt permits many answers, narrow the relation or add a relevant cue before retrying.',
    },
    recall: {
      prompt: 'A study guide asks for the next step of a process you have already learned. How would you use the reveal button?',
      hint: 'The prediction needs context and a correction source.',
      answer: 'Attempt the next step with a short reason, then reveal and compare it with the documented sequence. If you lack the prerequisite knowledge, study the explanation instead of guessing for a long time.',
    },
    quiz: {
      question: 'A card hides a familiar next step and gives enough context. Which use combines generation with feedback?',
      options: ['Produce a candidate, then verify it.', 'Read the answer first, then rewrite it.', 'Attempt an answer and check only if it feels uncertain.'],
      correctIndex: 0,
      explanation: 'The first approach produces before revealing and checks afterward. Reading first supplies the target; confidence alone cannot establish that a generated answer is correct.',
    },
    takeaway: 'Attempt when context supports it, then check before treating the answer as known.',
    sourceNote: 'Slamecka and Graf studied the generation effect. These ordinary word pairs illustrate a bounded attempt; no universal benefit or exact timing is claimed.',
  },
  {
    id: 'mind-031',
    title: 'Use the same principle with different objects',
    outcome: 'Check whether a learned method survives changed wording, quantities, or units.',
    scene: 'Transferring per-item price reasoning to comparing two fictional ribbon lengths',
    sections: [
      {
        title: 'The new question does not look like the old card',
        paragraphs: [
          'You learned to compare packs of pencils by finding the price of one pencil. Later, you see ribbon sold in different lengths. In this fictional example, three metres cost £9 and five metres cost £10. Choosing the cheaper total would select the £9 spool, but the question asks which has the lower price per metre.',
          'The objects and units changed. The underlying relationship did not: divide a total price by the quantity it buys. Recognizing that relationship is part of using knowledge beyond its original wording.',
        ],
      },
      {
        title: 'Transfer needs application, not just recitation',
        paragraphs: [
          'Transfer means using learning in a changed situation. Research on repeated testing has examined performance on new inferential questions, not only repeated answers. It supports studying transfer as a distinct outcome rather than assuming that successful recitation proves every future application.',
          'A useful changed example preserves the principle while altering some surface details. For the ribbon, explicitly name the requested unit before calculating. Otherwise the familiar impulse to choose a lower total can answer a different question. Start with a manageable change; changing every feature at once can hide whether the problem is recognizing the principle or understanding new material.',
        ],
      },
      {
        title: 'Show what stayed the same',
        paragraphs: [
          'For the three-metre spool, £9 divided by three is £3 per metre. For the five-metre spool, £10 divided by five is £2 per metre. The second has the lower unit price, even though its total is higher. Those calculations assume the stated lengths and prices with no extra fees.',
          'This does not decide what you should buy. Needing only a short length, having a budget limit, or preferring a different material could change the purchase decision. The transfer check concerns a narrower skill: identifying and calculating comparable unit prices. Explain that preserved relationship instead of merely remembering that the second option won.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Compare ribbon prices in the same unit',
        alt: 'A three-metre spool at £9 costs £3 per metre; a five-metre spool at £10 costs £2 per metre.',
        caption: 'Invented prices. The bars show price per metre, not total cost or an overall purchase recommendation.',
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
        'State the earlier principle: compare prices by dividing each total by its quantity.',
        'Identify what changed in the ribbon problem and write the unit the question asks for.',
        'Calculate both unit prices and explain which has the lower value in that unit.',
        'Name one purchase consideration the calculation does not settle, then compare your reasoning with the example.',
      ],
      notice: 'Your explanation connects the old and new tasks through a relationship, not matching nouns.',
      troubleshooting: 'If the new task introduces too much unfamiliar content, change fewer features while keeping an independent attempt.',
    },
    recall: {
      prompt: 'You learned to leave a restart note for shopping. How could the same principle help with an unfinished drawing?',
      hint: 'Keep the function of the note while changing the material.',
      answer: 'Record what is settled, what remains uncertain, and the first visible check in the drawing, such as comparing one edge with the reference. The objects change; preserving the next decision remains the principle.',
    },
    quiz: {
      question: 'You learned a method with ticket prices. Which practice best checks whether it transfers?',
      options: ['Repeat the original ticket problem with its explanation visible.', 'Apply the relationship to different objects and explain why it fits.', 'Reread the definition until the original example feels familiar.'],
      correctIndex: 1,
      explanation: 'A changed application requires selecting and using the relationship. Recognition of an old answer can depend on cues that will not appear in the new task.',
    },
    takeaway: 'Change the example, preserve the principle, and explain the connection.',
    sourceNote: 'The repeated-testing source examines transfer to new questions. The ribbon comparison is an original illustration, not a tested consumer decision or guaranteed transfer effect.',
  },
  {
    id: 'mind-032',
    title: 'Compare study confidence with later recall',
    outcome: 'Use a delayed, unaided answer to check the confidence produced by fluent reading.',
    scene: 'Rehearsing a walking-group introduction containing a meeting point, route, and finish',
    sections: [
      {
        title: 'The introduction reads smoothly',
        paragraphs: [
          'You prepare a fictional walking-group introduction with three points: meet at the clock tower, follow the river path, finish at the glasshouse. After rereading the note, you predict you will remember all three. Later, with the note closed, you recall the clock tower and glasshouse but cannot name the route between them.',
          'The smooth reading and incomplete recall are not contradictory observations. They were different tasks under different conditions. One included the answer on the page; the other required producing it after a gap.',
        ],
      },
      {
        title: 'Fluency can influence confidence',
        paragraphs: [
          'In retrieval-practice research, repeated studying increased confidence even when testing produced better delayed retention. That finding warns against treating ease during study as a complete measure of what will be available later. Confidence is a prediction to compare with performance, not a result that needs to be defended.',
          'For the introduction, specify what counts before testing: meeting point, route, and finish, each with the correct detail. Predict how many you expect to produce. After another ordinary activity, close the note and try. Avoid peeking halfway through and then counting the supplied point as something you remembered independently.',
        ],
      },
      {
        title: 'Use the mismatch to select the next practice',
        paragraphs: [
          'In the invented result above, the prediction was three points and the unaided answer contained two. The missing point was the river path. That gives the next review a target: explain how the route connects the clock tower to the glasshouse, then check again later.',
          'One mismatch does not establish a personality trait or a general memory score. The delay, material, and scoring rule all matter. A correct later answer is evidence about that attempt, too. Keep the exercise small enough that comparing prediction with performance changes what you study next rather than becoming another elaborate tracking project. Actual walk details would still need checking before leading a group.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Prediction and later production',
        alt: 'The learner predicts three points but later produces two: clock tower and glasshouse, omitting river path.',
        caption: 'An invented result out of three specified points, not a research effect size or a personal assessment.',
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
        'Choose three points and define what a correct answer must include, using the fictional introduction if useful.',
        'After study, predict how many you will produce later without the note.',
        'After another normal activity, attempt recall with all answers covered. The gap is outside the active practice budget.',
        'Compare prediction and result, then choose one specific gap for the next review.',
      ],
      notice: 'Your next study choice follows observed recall rather than the smoothness of the source.',
      troubleshooting: 'If scoring is vague, rewrite the question to name the required points before making another prediction.',
    },
    recall: {
      prompt: 'An explanation feels easy while highlighted. What would let you check whether that feeling predicts tomorrow\'s answer?',
      hint: 'Separate the prediction from a later test without the highlighting.',
      answer: 'Write a specific question and predict your answer now, then attempt it tomorrow with the source closed. Compare the actual content produced with the earlier prediction.',
    },
    quiz: {
      question: 'You expect to explain a guide tomorrow. Which check best tests the confidence from today\'s rereading?',
      options: ['How confident you feel after another read.', 'How quickly you can point to steps while the guide is open.', 'An answer produced after a gap without access to the explanation.'],
      correctIndex: 2,
      explanation: 'Delayed unaided production tests the availability you predicted. Confidence and pointing to visible steps still depend on the study situation.',
    },
    takeaway: 'Treat confidence as a prediction and later recall as the check.',
    sourceNote: 'Roediger and Karpicke distinguish study confidence from delayed retention. The walking introduction and three-versus-two result are invented teaching examples.',
  },
  {
    id: 'mind-033',
    title: 'Mix familiar examples to practice choosing the rule',
    outcome: 'Use a small mixed set to distinguish known concepts before applying them.',
    scene: 'Sorting fictional message statements into observations and interpretations without category headings',
    sections: [
      {
        title: 'The heading can answer the first question for you',
        paragraphs: [
          'A communication worksheet has one page headed Observations and another headed Interpretations. You explain every sentence correctly while its heading is visible. Then the sentences are mixed together, and you hesitate. The separate pages supplied a decision that the mixed set now asks you to make: which kind of claim is this?',
          'Before mixing, learn the distinction. An observation reports something checkable, such as a message arriving on Monday. An interpretation adds a proposed meaning, such as deciding that the late reply shows disrespect.',
        ],
      },
      {
        title: 'Interleaving can practice discrimination',
        paragraphs: [
          'Interleaving mixes related examples instead of practicing each type only in a separate block. One useful demand is discrimination: choosing which concept or method fits before answering. Reviews of learning techniques discuss benefits that depend on the materials and conditions, not a guarantee that random mixing improves every lesson.',
          'Mix concepts you have already met and that you need to distinguish. Combining entirely unfamiliar topics may create confusion without a usable basis for choosing. Keep feedback available so that a mistaken classification does not become another familiar rule. The purpose is a meaningful decision, not making practice feel maximally difficult.',
        ],
      },
      {
        title: 'Explain the feature that decides each case',
        paragraphs: [
          'Consider four fictional statements: "The reply arrived Monday." "They do not respect my time." "They wrote that they were busy." "They wanted to avoid me." The first and third report a message event or wording. The second and fourth add an attitude or motive not established by the message alone.',
          'For each, name the type before explaining the reason. Reporting "They wrote they were busy" does not independently prove that they were busy; it reports what the message said. That distinction makes the exercise more useful than searching for a suspicious word. Keep the statements fictional rather than turning this into an attempt to classify strangers\' private motives.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Choose the claim type before checking',
        alt: 'Four fictional statements report a Monday reply, infer disrespect, report the word busy, and infer avoidance.',
        caption: 'The first and third report events or wording. The others add interpretations. The categories are mixed deliberately.',
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
        'Write one statement per slip and review the observation-versus-interpretation distinction first.',
        'Shuffle the slips without category labels. For each, choose the type and explain what feature decided it.',
        'Check against the worked explanation. If a distinction remains unclear, study it separately before mixing again.',
      ],
      notice: 'You select a concept from the content rather than borrowing it from a chapter heading.',
      troubleshooting: 'If every case feels like a guess, use fewer familiar types and restore an example of each.',
    },
    recall: {
      prompt: 'You know two calculation methods but always practice them under separate headings. What would a useful mixed set add?',
      hint: 'The extra step happens before the calculation.',
      answer: 'It would require identifying which method each familiar problem needs and explaining why. Keep checked solutions so incorrect method choices receive feedback.',
    },
    quiz: {
      question: 'You know two methods separately but confuse them in unlabeled questions. Which practice targets that gap?',
      options: ['Mix familiar problem types, choose the method, and check the choice.', 'Do larger separate blocks with each method named in the heading.', 'Alternate reading definitions with watching fully explained solutions.'],
      correctIndex: 0,
      explanation: 'The mixed set requires method selection. Separate headings supply that choice; reading and watching can clarify methods without testing which one to choose.',
    },
    takeaway: 'Mix to practice choosing among known methods, not to create confusion.',
    sourceNote: 'The learning-techniques review discusses interleaving and its limits. This fictional statement set is an application, not a tested communication intervention.',
  },
  {
    id: 'mind-034',
    title: 'Keep a first success eligible for a later check',
    outcome: 'Treat one correct recall as evidence about one attempt, then use later retrieval to assess durability.',
    scene: 'Keeping a Portugal-capital card in practice after recalling Lisbon correctly once',
    sections: [
      {
        title: 'The first correct answer feels finished',
        paragraphs: [
          'While preparing for a friendly geography quiz, you finally answer "Lisbon" when a card asks for Portugal\'s capital. You are pleased and move the card permanently into a finished pile. The answer was available on that attempt. What you have not yet checked is whether it will remain available after other facts, activities, and days intervene.',
          'A first success is a useful milestone. It shows something changed from an earlier miss, but it does not establish permanent access to the information.',
        ],
      },
      {
        title: 'Retrieval after initial learning can still matter',
        paragraphs: [
          'Research comparing continued study and retrieval after initial learning found that further retrieval affected later retention. An item becoming correct once therefore does not make all future practice pointless. The question is how to retain access to knowledge that still matters, not how to make every card occupy attention forever.',
          'Keep the card available for a later attempt, preferably after a gap appropriate to your learning goal. Begin with the question hidden from its answer, then check. If it becomes reliably available across later attempts, reduce the attention it receives while leaving an occasional opportunity to notice forgetting.',
        ],
      },
      {
        title: 'Use later performance to decide what changes',
        paragraphs: [
          'When the Portugal card returns later, attempt Lisbon before turning it over. If you remember it, record that occasion without declaring the information impossible to forget. If you miss it, correct the pair and return it to a manageable future review. A mistake does not erase the earlier successful attempt either.',
          'You can also decide that a fact no longer serves your purpose and retire it knowingly. That is a priority decision, not proof that first success guarantees retention. Keep the review finite so newer material and actual use still have space. Repeating a correct answer immediately until it feels effortless is not the same check as retrieving it after a meaningful gap.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The Lisbon card is correct, then checked later',
        alt: 'A first Lisbon answer is correct, the card remains eligible, and a later closed-answer attempt informs future review.',
        caption: 'These are practice stages, not fixed intervals. No stage guarantees permanent recall.',
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
        'Choose a question you answered correctly once and still want to retain.',
        'Record a later review opportunity without increasing today\'s session into an endless drill.',
        'Write how you will attempt before revealing and how a miss would be corrected.',
        'After that later attempt, use the actual result to adjust attention rather than relying on the first success.',
      ],
      notice: 'First success and durable availability are treated as different claims.',
      troubleshooting: 'If the review list is too large, prioritize useful questions; do not promise to repeat every item forever.',
    },
    recall: {
      prompt: 'You once explained a procedure correctly and now want to remove all future checks. What does that success establish?',
      hint: 'Keep the claim tied to the occasion tested.',
      answer: 'It establishes that you could explain it on that occasion. A later unaided attempt can test whether it remains available, while real tasks may still require their reference or checklist.',
    },
    quiz: {
      question: 'After one correct Lisbon answer, which review plan fits?',
      options: ['Move it to a finished pile and review only missed items.', 'Keep a later check if it still matters, then adjust from performance.', 'Repeat it immediately until smooth, then retire it from review.'],
      correctIndex: 1,
      explanation: 'Later retrieval checks continued availability. Retiring after one success or immediate fluency leaves retention after a gap untested.',
    },
    takeaway: 'A correct attempt is a milestone, not a lifetime guarantee.',
    sourceNote: 'The repeated-retrieval study informs continued practice after initial learning. The geography card and review decisions are original examples without prescribed intervals.',
  },
  {
    id: 'mind-035',
    title: 'Find a meaningful choice inside a required topic',
    outcome: 'Identify an allowed choice that connects a required learning task to a purpose you endorse.',
    scene: 'Choosing an art-supply list as the practice example in a required spreadsheet module',
    sections: [
      {
        title: 'The topic is required, but the example may not be',
        paragraphs: [
          'A course requires a spreadsheet sorting module. You would rather organize supplies for your drawing hobby than work through a generic stock list. The requirement is real: you must demonstrate that a table can be sorted while each item stays attached to its information. That does not necessarily determine every example or study method.',
          'Instead of treating the task as either total freedom or total control, separate the fixed requirement from choices that are actually available.',
        ],
      },
      {
        title: 'Autonomy concerns a sense of volition',
        paragraphs: [
          'Self-determination theory distinguishes motivation experienced as personally endorsed from behavior experienced mainly as pressure. Autonomy here means a sense of volition, not having no obligations or refusing guidance. A required activity can contain choices about its purpose, example, or approach without the requirement disappearing.',
          'The choice should mean something to the task. Selecting a decorative color while every learning decision remains fixed may not address why the activity feels detached from your interests. Choosing a relevant question can: "How can I sort my supply list without separating each material from its cost?" That connects the required operation to a use you recognize.',
        ],
      },
      {
        title: 'Ask which part is genuinely flexible',
        paragraphs: [
          'In a fictional course conversation, you ask, "Can I use an invented art-supply table for the sorting exercise?" The tutor says yes, provided the same required checks are demonstrated. You choose the example and work through a guided case, then attempt another sort independently.',
          'The choice does not guarantee enjoyment. It gives the work a personally relevant question while preserving its standard. If the example is fixed for assessment, look for an allowed practice choice elsewhere or ask why that example is required. Do not invent permission, skip the assessed skill, or turn every compulsory task into a story about hidden passion.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Negotiate the example, not the required skill',
        alt: 'A learner asks to use a fictional art-supply table; the tutor allows it while keeping the required sorting checks.',
        caption: 'A fictional agreement distinguishes a meaningful choice from an unchanged assessment requirement.',
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
        'Write the actual requirement and avoid guessing which parts are optional.',
        'List one relevant question you personally want that skill to answer.',
        'Choose an allowed example or method; ask for clarification if permission is uncertain.',
        'Draft a small practice plan that answers your question while preserving the required standard.',
      ],
      notice: 'The choice changes your relationship to the task without denying its constraints.',
      troubleshooting: 'If no meaningful choice is available, acknowledge that rather than pretending a cosmetic preference solves the problem.',
    },
    recall: {
      prompt: 'A required platform course feels unrelated to your work, but practice scenarios are flexible. What choice could make it more relevant?',
      hint: 'Choose a real question within the allowed scope.',
      answer: 'Select a public or fictional scenario resembling a task you expect to handle, and use the required skill to answer its question. Keep the course requirements and confidentiality rules intact.',
    },
    quiz: {
      question: 'A course topic is fixed, but practice examples are flexible. Which choice connects the work to your purpose?',
      options: ['Use the standard example only because everyone else uses it.', 'Choose the shortest example without considering what you want to learn.', 'Choose an allowed example that answers a personally relevant question.'],
      correctIndex: 2,
      explanation: 'The relevant question gives an allowed choice a purpose. Following the group or choosing only by length need not connect the skill to a reason you endorse.',
    },
    takeaway: 'Look for a real choice in the purpose or method while respecting the requirement.',
    sourceNote: 'Self-determination theory supplies the autonomy framework. The spreadsheet conversation is invented and does not promise enjoyment or authorize changing course requirements.',
  },
  {
    id: 'mind-036',
    title: 'Make progress visible in one specific capability',
    outcome: 'Compare attempts using a concrete criterion rather than vague praise or the neatness of the work.',
    scene: 'Improving directions from a courtyard gate to a starred workshop door on a fictional map',
    sections: [
      {
        title: 'Better at explaining is too broad to inspect',
        paragraphs: [
          'You write directions to a workshop: "Turn right and use the starred door." The sentence sounds tidy, but the reader has no starting point. On the fictional map, the route begins at the courtyard gate, goes straight to a noticeboard, and turns right toward the starred door. Your first draft omitted the information that makes the turn meaningful.',
          'Improving the font would make the sentence look better without repairing that gap. A useful progress criterion concerns what the directions let someone understand.',
        ],
      },
      {
        title: 'Competence concerns effectiveness in a task',
        paragraphs: [
          'Self-determination theory includes competence, the experience of being effective, among the conditions relevant to motivation. For learning, a specific before-and-after comparison can make growing capability easier to inspect. It is different from collecting general praise or selecting tasks with no remaining challenge.',
          'Define the capability narrowly: a reader can identify the starting place and the landmark where the turn happens. Keep the early attempt so the revision has something real to improve. Use a reference, such as the supplied map, rather than judging progress only from how confident or polished the new version feels.',
        ],
      },
      {
        title: 'Repair the missing orientation',
        paragraphs: [
          'Revise the directions to: "Enter through the courtyard gate. Walk to the noticeboard, turn right, and use the starred workshop door."',
          'The improvement is the added orientation. The turn now refers to a visible point reached from a stated starting place. Compare every part with the diagram before calling it accurate.',
          'This shows progress in writing these directions, not mastery of all explanation or proof that every visitor would find the room. A real venue could require access details absent from the fictional sketch. Identify the next remaining gap separately. Specific evidence lets you recognize an improvement without inflating it into a general judgment about your ability.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The missing start and turn landmark',
        alt: 'From the lower-left courtyard gate, travel upward to the noticeboard, then turn right toward the upper-right starred workshop door.',
        caption: 'A fictional top-view map. The revised directions add the gate and noticeboard, not merely more attractive wording.',
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
        'Copy the early direction, "Turn right and use the starred door," and keep it unchanged for comparison.',
        'Set a criterion: the reader must know the start and the landmark for the turn.',
        'Revise the sentence from the map, then check its sequence and direction against the arrows.',
        'Underline the information that changed the capability and name one limit of the example.',
      ],
      notice: 'You can point to a repaired information gap, not just a nicer-looking draft.',
      troubleshooting: 'If the criterion is "seems better," replace it with something a reader can identify or do.',
    },
    recall: {
      prompt: 'You rewrite an explanation with prettier formatting but the same missing reason. What would demonstrate more substantive progress?',
      hint: 'Compare what the reader can now explain.',
      answer: 'Add and verify the missing reasoning step, then show how it connects the earlier observation to the conclusion. Formatting alone does not establish that capability.',
    },
    quiz: {
      question: 'You revise directions after a reader cannot find the start. Which comparison demonstrates progress?',
      options: ['The revision corrects a missing step and matches the reference.', 'The revision receives a broad compliment about your talent.', 'The revision has more pages and a more elaborate layout.'],
      correctIndex: 0,
      explanation: 'A verified correction changes the capability being practiced. Praise and volume can accompany progress, but do not establish the same result.',
    },
    takeaway: 'Use a specific, checked improvement to recognize progress without overstating mastery.',
    sourceNote: 'The competence concept comes from self-determination theory. This map exercise illustrates inspectable progress, not a measured motivational effect.',
  },
  {
    id: 'mind-037',
    title: 'Give an explanation a willing recipient',
    outcome: 'Connect learning to another person\'s genuine question without pressure, public ranking, or pretending expertise.',
    scene: 'Using a paper folder sketch to answer a friend\'s question about opening a holiday photo folder',
    sections: [
      {
        title: 'A small question gives the lesson a use',
        paragraphs: [
          'A friend wants to organize holiday photographs but asks whether opening a folder moves the pictures out of it. You could send a long computing tutorial. A more useful starting point is to ask whether they want a short explanation of folders and opening them. Their question gives your own learning a recipient and a clear purpose. They can decline. A willing exchange is different from assigning someone a lesson because you think they should know more.',
        ],
      },
      {
        title: 'Connection is not the same as performance pressure',
        paragraphs: [
          'Self-determination theory describes relatedness as a sense of connection with others. A learning exchange can support that connection when it addresses a genuine need and leaves room for questions. A public leaderboard, compulsory demonstration, or demand to appear expert does not automatically provide the same experience.',
          'Keep the scope honest. You can explain a small concept with checked information and say when another detail needs verifying. The relationship should make uncertainty discussable, not turn every answer into a test of status.',
        ],
      },
      {
        title: 'Answer the folder question without touching real photos',
        paragraphs: [
          'Draw a paper example: Photos contains Holiday, and Holiday contains a Beach picture. Explain that opening the ordinary folder displays its contents; it is not a move or delete instruction. Trace the containing folders rather than experimenting with your friend\'s actual files.',
          'Ask, "Which part is still unclear?" If the next question concerns a particular photo app, check that app\'s instructions before claiming its albums behave like ordinary folders. The exchange has done useful work even if it ends with a question to verify. You have connected a small explanation to a person\'s concern without needing to perform complete expertise.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Ask before explaining',
        alt: 'A friend asks about opening a folder; the learner offers a paper explanation.',
        caption: 'An invented, voluntary exchange.',
        items: [
          { label: 'Friend', detail: 'Does opening Holiday move the pictures?' },
          { label: 'Learner', detail: 'No. Want to trace an ordinary folder example on paper?' },
        ],
      },
      {
        type: 'layers',
        title: 'One containing-folder example',
        alt: 'Photos contains Holiday; Holiday contains the Beach picture.',
        caption: 'Read from outer folder to contained file. This does not model every photo app\'s albums.',
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
        'Choose one small question someone wants answered, or use the fictional question without contacting anyone.',
        'Prepare a short explanation with a concrete example and mark anything that still needs checking.',
        'If sharing, ask permission and invite one question. Otherwise record a possible follow-up question on paper.',
        'Keep private files out of the example and verify unresolved details before extending the explanation.',
      ],
      notice: 'The explanation serves a specific question and leaves room to say "I need to check."',
      troubleshooting: 'If the task becomes a performance, narrow it to the recipient\'s actual question.',
    },
    recall: {
      prompt: 'A peer asks about one confusing step in a course. How could you make the exchange useful without pretending to know everything?',
      hint: 'Offer a bounded explanation and keep uncertainty visible.',
      answer: 'Ask what they want clarified, explain that step with a checked example, and invite a question. Verify anything outside your knowledge rather than bluffing.',
    },
    quiz: {
      question: 'A friend asks about one confusing chart label. Which exchange best serves that shared question?',
      options: ['Send a complete chart course before checking which part they need.', 'Offer a checked example, listen to their question, and acknowledge uncertainty.', 'Prepare a polished talk before asking what the label prevents them understanding.'],
      correctIndex: 1,
      explanation: 'The bounded exchange centers the actual question. A full course or polished talk can contain useful material while missing the need that prompted the request.',
    },
    takeaway: 'A willing recipient and a genuine question can give practice a useful purpose.',
    sourceNote: 'Relatedness is part of self-determination theory. The folder exchange is an original example, not a guarantee of motivation or app-specific file guidance.',
  },
  {
    id: 'mind-038',
    title: 'Give a learning session a checkable finish',
    outcome: 'Define a small learning product and the evidence that will count as completing it.',
    scene: 'Learning when an editable poster project and a flattened sharing image serve different needs',
    sections: [
      {
        title: 'More reading does not define the finish',
        paragraphs: [
          'You want to understand saving and exporting in a drawing app. "Read more about file formats" can continue indefinitely because it names an activity without a learning result. You could finish many pages and still be unsure which output you need when tomorrow\'s task is changing the text on a poster.',
          'A smaller question is inspectable: which output preserves the ability to edit the separate text, and which provides a sharing image? The session can end when you can answer that distinction using a checked example.',
        ],
      },
      {
        title: 'Specify learning when the method is unfamiliar',
        paragraphs: [
          'Goal-setting research examines how specific goals direct attention and effort, while recognizing the roles of feedback, knowledge, commitment, and task complexity. A demanding target does not create missing knowledge by itself. For a new subject, a learning goal can specify what you will understand or explain rather than merely how much activity you will produce.',
          'Define the product and its check together. "Write a short comparison of the editable project and flattened export, then explain which supports a text change" gives the reading a purpose. "Read until I feel productive" makes the stopping condition depend on a feeling that may not track understanding.',
        ],
      },
      {
        title: 'Use an explicit example and stop at its boundary',
        paragraphs: [
          'For this illustrative app, the project save retains separate layers and the sharing export is a flattened image. Your answer should say that a later change to the separate text needs the editable project; the flattened image serves sharing this appearance.',
          'Keeping both can serve both purposes. Real applications and export formats need their own documentation.',
          'The completion check is whether your comparison preserves that distinction and explains the later editing choice. Once it does, this session has its intended product. Do not quietly replace the finished learning goal with an endless search for every related detail.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The distinction the session must explain',
        alt: 'An editable poster project retains separate layers; a flattened sharing image preserves the displayed appearance but not separate editable text layers.',
        caption: 'These are the stated rules of the illustrative app. Check actual software and format behavior before relying on them.',
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
        'Write the learning question about changing poster text later, rather than a page-count target.',
        'Define the product: a short comparison explaining which output serves that need.',
        'Produce the comparison and check it against the stated project and export rules.',
        'Mark the bounded task complete when the distinction is accurate; list any separate future question without expanding this session.',
      ],
      notice: 'Another reader could tell what counts as finished and why the product demonstrates learning.',
      troubleshooting: 'If the check is "I read it," replace it with a question or decision the reading should enable.',
    },
    recall: {
      prompt: 'Your goal is "understand routing better." How could you give one study session an inspectable finish?',
      hint: 'Choose a narrow question and a checked learning product.',
      answer: 'Choose one documented route-selection example and explain why its selected route fits the stated criteria. Check the reasoning against the reference instead of using page count as completion.',
    },
    quiz: {
      question: 'You want to understand two export choices in one session. Which goal checks that learning?',
      options: ['Finish the chapter and highlight every format name.', 'Explore the interface until the choices feel familiar.', 'Explain the distinction using a checked example and an explicit criterion.'],
      correctIndex: 2,
      explanation: 'The final goal names both a product and a way to assess it. Feelings and volume leave the learning result uncertain.',
    },
    takeaway: 'Specify the learning product, its check, and where this session stops.',
    sourceNote: 'Goal-setting research informs specificity and feedback. The app behavior is stipulated for this example, not universal file-format advice or a tested study goal.',
  },
  {
    id: 'mind-039',
    title: 'Ask which part of the work can be changed next',
    outcome: 'Turn a broad feedback request into a question about a checkable, editable part of a draft.',
    scene: 'Reviewing a fictional empty-events bug report that omits the active filter',
    sections: [
      {
        title: 'A judgment does not tell you what to edit',
        paragraphs: [
          'Your fictional bug-report draft says, "I opened Events and no results appeared." A reviewer says the report needs more detail. You could ask whether you are good enough at technical writing, but that question would move attention away from the missing information. The useful issue is which part another person cannot reproduce or evaluate.',
          'The next request should locate an editable gap, not turn an incomplete report into a verdict on the writer.',
        ],
      },
      {
        title: 'Feedback can direct attention toward different targets',
        paragraphs: [
          'A review of feedback interventions found that feedback does not invariably improve performance. Feedback can direct attention toward the person, the task, or a process within the task. A broad self-judgment may leave less attention on the operation that needs changing.',
          'Ask for information you can test: which condition is missing, which step is ambiguous, or where the conclusion stops following from the evidence. Specific feedback is not automatically correct, either. Check it against the task and reference before accepting it. The aim is a useful revision decision, not obedience to every confident comment.',
        ],
      },
      {
        title: 'Find the missing filter without inventing a cause',
        paragraphs: [
          'You ask, "What would you need to reproduce the empty list?" The reviewer asks which filter was active. In the fictional case, it was Upcoming only. Add that condition to the draft and propose comparing it with All events. The report now contains a relevant setup detail and a testable next check.',
          'Do not write "the filter caused the problem" before making that comparison. The feedback identified missing information; it did not establish the explanation. After revising, check whether another reader can identify the starting state and what still needs clarification.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A review question leads to an editable condition',
        alt: 'A writer asks what is needed to reproduce an empty list; the reviewer asks for the filter, and the writer identifies Upcoming only.',
        caption: 'A fictional report review. The proposed comparison is not a performed test or a confirmed cause.',
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
        'Choose a draft and identify the practical job it should let a reader do.',
        'Replace a broad question about your ability with a question about one missing condition, observation, or reasoning step.',
        'Use the fictional filter feedback or a willing reviewer\'s response to draft a specific revision.',
        'Check whether the revision fixes that gap without turning a suggested explanation into an unverified fact.',
      ],
      notice: 'The feedback leads to an edit or a check that another person could inspect.',
      troubleshooting: 'If the comment stays broad, ask for one concrete example; if it lacks support, verify before changing the claim.',
    },
    recall: {
      prompt: 'Someone says your travel directions are confusing. What feedback question would help you revise them?',
      hint: 'Locate where the reader loses the route.',
      answer: 'Ask which starting point, landmark, or turn they cannot identify. Then check and repair that instruction instead of asking for a verdict on whether you are generally good at explaining.',
    },
    quiz: {
      question: 'A reviewer cannot follow your report. Which request best locates the next evidence gap?',
      options: ['Could you give the report an overall clarity score?', 'Could you rewrite the whole report in your preferred style?', 'Which step needs another observation before the conclusion follows?'],
      correctIndex: 2,
      explanation: 'The specific question locates missing support. A score does not identify it; a full rewrite can help but need not isolate the next reasoning change.',
    },
    takeaway: 'Ask for the next checkable change in the work, not a verdict on yourself.',
    sourceNote: 'The feedback review documents varied intervention effects. The report and dialogue are invented; task-focused feedback still needs judgment and verification.',
  },
  {
    id: 'mind-040',
    title: 'Value the result without pretending to enjoy every step',
    outcome: 'Distinguish enjoying an activity from personally endorsing the practical purpose it serves.',
    scene: 'Labeling moving boxes so bedding can be found on the first evening in a new home',
    sections: [
      {
        title: 'Labeling boxes is still dull',
        paragraphs: [
          'You are packing for a move and have reached the box labels. Writing "Bedroom: sheets and pillowcases" does not feel interesting. Yet you want to find bedding on the first evening without reopening every box. The writing remains dull while its purpose matters to you. It is unnecessary to describe labeling as a passion before deciding to do it. Enjoying a process and wanting the result it supports are different reasons for acting.',
        ],
      },
      {
        title: 'An endorsed purpose can be instrumental',
        paragraphs: [
          'Self-determination theory distinguishes intrinsic motivation, doing something for its inherent interest or enjoyment, from forms of extrinsic motivation that vary in how fully the person endorses the reason. A practical purpose can be personally accepted even when the activity itself is not enjoyable.',
          'For the boxes, enjoying decorative lettering would be one reason to write labels. Wanting to locate the bedding is another. The second reason depends on an outcome beyond the lettering, but it need not be experienced only as someone else\'s pressure. Naming that distinction avoids treating boredom as proof that the task has no value.',
        ],
      },
      {
        title: 'Define the adequate result from the purpose',
        paragraphs: [
          'If the purpose is finding bedding, a readable room-and-contents label is enough for this box. A decorative system with elaborate codes may add work without serving tonight\'s need. Write the useful label on an accessible side, check that it matches the contents, and stop when the necessary boxes can be identified.',
          'A personally meaningful explanation does not make every demand reasonable. You can still question unnecessary work, ask for help, or reduce an overlarge task. Nor must you discover a noble reason for everything you do. This framework clarifies one particular effort: you accept a small uninteresting step because you want the practical result it enables. It does not require pretending the step itself became fun.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two reasons to label the bedding box',
        alt: 'Someone can enjoy lettering itself or value finding sheets later, without those reasons being identical.',
        caption: 'The reasons can coexist. Wanting readable labels does not require enjoying the writing.',
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
        'Name the task and honestly note whether you enjoy doing it.',
        'Identify a practical result you personally value, if there is one, and who benefits from it.',
        'Define the smallest adequate finished product that serves that result.',
        'Remove one unnecessary embellishment or question a requirement that does not serve the purpose. Do not skip a real safeguard.',
      ],
      notice: 'Your reason can remain credible even if your opinion of the activity stays unchanged.',
      troubleshooting: 'If no purpose feels genuine, acknowledge that and examine the requirement instead of manufacturing enthusiasm.',
    },
    recall: {
      prompt: 'You dislike writing handoff notes but want the next person to avoid repeating completed checks. How would you describe your reason and finish?',
      hint: 'Separate liking the writing from valuing a usable handoff.',
      answer: 'I find the writing dull, but value making the current state and next check available. A concise, accurate handoff that serves that need is an adequate result without turning it into a performance.',
    },
    quiz: {
      question: 'Which reason for labeling a moving box shows personally endorsed value rather than enjoyment or pressure?',
      options: ['I find labeling dull, but value finding the bedding later.', 'I enjoy drawing letters and choosing their shapes.', 'I want to avoid criticism from the person insisting on labels.'],
      correctIndex: 0,
      explanation: 'The first reason endorses the practical outcome. The second describes enjoyment of lettering; the third emphasizes pressure to avoid criticism.',
    },
    takeaway: 'A useful, personally accepted purpose does not require enjoyment of every step.',
    sourceNote: 'Self-determination theory distinguishes intrinsic interest from different forms of extrinsic motivation. The moving-box exercise is an original application, not a promise to remove boredom.',
  },
]