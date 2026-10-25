import type { LessonGuide } from './types'

// Original teaching, scenarios, and schematic visuals. Sources are inherited by ID.
// Practice durations are suggested budgets, not experimentally established doses.
export const fieldGuides: LessonGuide[] = [
  {
    id: 'fg-001',
    title: 'Check why the worst week became the starting point',
    outcome: 'Explain why improvement after an extreme result does not, by itself, measure the effect of help.',
    scene: 'A volunteer newsletter selects its worst week of late listings for extra editing help.',
    sections: [
      {
        title: 'The week that attracted attention',
        paragraphs: [
          'A volunteer newsletter prepares 20 listings each week. In this invented log, 5 are late in week one, 6 in week two, and 15 in week three. Extra editing help arrives after week three. The next week has 7 late listings. Someone credits the helper with preventing 8 delays, because 15 minus 7 equals 8. The subtraction is correct. The explanation needs more evidence: help began precisely because the starting week was the worst.',
        ],
      },
      {
        title: 'An extreme result contains more than a persistent problem',
        paragraphs: [
          'A weekly count can combine ongoing difficulties with temporary variation. Perhaps the team has a slow approval process, while several contributors also happened to send material late in week three. Selecting the highest count selects a week when unfavorable influences lined up. Those temporary influences need not repeat with the same strength. Under otherwise stable conditions, when repeated results are not perfectly linked, an extreme observation is expected to be followed by a less extreme one. This is regression toward the mean.',
          'It is an expectation across repeated cases, not a schedule that makes every bad week improve. The following week can be worse, and useful help can work alongside ordinary variation.',
        ],
      },
      {
        title: 'Keep the improvement and question its attribution',
        paragraphs: [
          'Describe the result as 8 fewer late listings after extra help, rather than 8 delays prevented by the helper. Earlier weeks show that 15 was unusual within this short log, but they do not establish the true long-run average. A suitable comparison would also track similar teams or periods, their workload, and why help was assigned. If contributors became more punctual everywhere, that matters. The practical check is to preserve the selection rule and competing explanations before deciding how much improvement belongs to the intervention.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'The selected starting week is the tallest bar',
      alt: 'Late listings across four weeks: 5, 6, 15, and 7. Help begins after the week with 15.',
      caption: 'Illustrative counts, with 20 listings each week. Inspect the extreme selection before attributing the drop of 8 to help.',
      unit: 'late listings',
      items: [
        { label: 'Week 1', detail: '5 of 20 late; before help.', value: 5 },
        { label: 'Week 2', detail: '6 of 20 late; before help.', value: 6 },
        { label: 'Week 3: selected', detail: '15 of 20 late; help requested afterward.', value: 15 },
        { label: 'Week 4', detail: '7 of 20 late; help present.', value: 7 },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Copy the four weekly counts and mark that each week contains 20 listings. Circle the week that triggered help.',
        'Calculate the observed change from week three to week four. Label it a change, not an effect.',
        'Write two possible explanations: extra editing support and a temporary contributor delay that did not repeat.',
        'Name a comparison you would want and one condition it must match, such as workload or the rule for receiving help.',
      ],
      notice: 'Your note retains the drop of 8 while leaving its causes open and naming how the starting week was selected.',
      troubleshooting: 'If you conclude that help did nothing, revise that sentence. Extreme selection weakens the attribution; it does not disprove an effect.',
    },
    recall: {
      prompt: 'You replace your drawing pencil after your best-ever sketch. The next drawing receives a lower score. Why is blaming the pencil premature?',
      hint: 'An unusually good starting point can include favorable temporary influences too.',
      answer: 'The best sketch was selected for being extreme. Subject difficulty, luck, or scoring variation could be less favorable next time. Compare several suitable drawings before attributing the fall to the pencil.',
    },
    quiz: {
      question: 'A club revises its reminder after its least-attended event. Attendance rebounds. Which detail most directly exposes extreme selection?',
      options: [
        'The new reminder was sent earlier than the previous reminder.',
        'The club chose that event because attendance was the lowest on record.',
        'Both events used the same room and registration form.',
      ],
      correctIndex: 1,
      explanation: 'Choosing the minimum selects an unusually unfavorable result. Earlier reminders could matter, and a shared room improves comparability, but neither removes the selection issue.',
    },
    takeaway: 'Keep an observed rebound separate from the effect claimed for whatever followed the extreme result.',
    sourceNote: 'The inherited Bland and Altman articles explain regression toward the mean. These newsletter counts are invented; no editing intervention or practice benefit was tested.',
  },
  {
    id: 'fg-002',
    title: 'Calculate the groups before ranking the totals',
    outcome: 'Reproduce a Simpson reversal and explain why case assignment matters to a causal comparison.',
    scene: 'A fictional repair desk compares two methods handling unequal mixtures of routine and difficult jobs.',
    sections: [
      {
        title: 'Two accurate rankings',
        paragraphs: [
          'A repair desk compares methods A and B using an invented job log. For routine jobs, A completes 18 of 20 and B completes 48 of 60. Divide completed jobs by attempted jobs: 18/20 is 90%, while 48/60 is 80%. For difficult jobs, A completes 36 of 60, or 60%; B completes 10 of 20, or 50%. A has the higher completion rate within both job types. Yet the manager sees B ahead on the overall dashboard.',
        ],
      },
      {
        title: 'A total weights every job, not every group equally',
        paragraphs: [
          'Add counts before dividing. A completes 18 + 36 = 54 of 20 + 60 = 80 jobs: 67.5%. B completes 48 + 10 = 58 of 60 + 20 = 80: 72.5%. Both totals are correct. A received 60 difficult jobs; B received only 20. The overall rates give more weight to the type each method handled more often.',
          'For A, routine jobs supply one quarter of the total, so 0.25 times 90% plus 0.75 times 60% equals 67.5%. For B, the weights reverse: 0.75 times 80% plus 0.25 times 50% equals 72.5%. This reversal between subgroup and pooled rankings is an example of Simpson\'s paradox.',
        ],
      },
      {
        title: 'The missing question concerns assignment',
        paragraphs: [
          'If both methods were summarized with half routine and half difficult jobs, their weighted rates would be 75% for A and 65% for B. That makes the arithmetic comparable under a chosen mixture; it does not prove what assigning a method would cause. Ask whether difficulty was recorded before assignment and whether other differences influenced the choice. Grouping by something the method itself changed could hide part of its effect. Neither the dashboard nor the subgroup table chooses the causal comparison for you.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Within each job type, A has the higher rate',
        alt: 'Routine: A 90%, B 80%. Difficult: A 60%, B 50%, with their different job counts.',
        caption: 'Illustrative log. Compare like job types and retain each denominator; these are not equal-sized groups.',
        unit: 'percent completed',
        items: [
          { label: 'Routine A', detail: '18 / 20 = 90%.', value: 90 },
          { label: 'Routine B', detail: '48 / 60 = 80%.', value: 80 },
          { label: 'Difficult A', detail: '36 / 60 = 60%.', value: 60 },
          { label: 'Difficult B', detail: '10 / 20 = 50%.', value: 50 },
        ],
      },
      {
        type: 'bars',
        title: 'The pooled ranking reverses',
        alt: 'Method A completes 67.5% overall and B 72.5%; A handles three times as many difficult jobs.',
        caption: 'Same illustrative jobs, regrouped. Both methods handle 80 jobs, but equal totals do not imply equal case mixtures.',
        unit: 'percent completed',
        items: [
          { label: 'A overall', detail: '54 / 80 = 67.5%; 60 difficult jobs.', value: 67.5 },
          { label: 'B overall', detail: '58 / 80 = 72.5%; 20 difficult jobs.', value: 72.5 },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        'Make routine and difficult rows with A and B columns. Copy all four completed/attempted counts from the example.',
        'Calculate the four subgroup percentages, then add counts within each method and calculate its overall percentage.',
        'Circle the method with more difficult jobs. Compute the two rates under an explicitly hypothetical half-and-half mixture.',
        'Write one assignment question that the numbers cannot answer, including when difficulty was classified.',
      ],
      notice: 'A leads within both types but trails overall; your half-and-half figures are 75% and 65%.',
      troubleshooting: 'If your pooled rates are 75% and 65%, you averaged percentages equally instead of weighting them by the actual job counts.',
    },
    recall: {
      prompt: 'Two language courses enroll different mixtures of beginners and experienced learners. Their overall pass rates disagree with both within-level rankings. What would you inspect before recommending a course?',
      hint: 'Reconstruct the denominators and ask how learners entered each course.',
      answer: 'Inspect attempted and passed counts within each starting level, their mixture, and enrollment rules. A common-mixture summary can clarify the reversal, but starting level and other assignment differences still need causal reasoning.',
    },
    quiz: {
      question: 'The repair desk wants a comparison for a future half-routine, half-difficult workload. Which summary addresses that target most directly?',
      options: [
        'Use B\'s existing pooled rate because both methods handled 80 jobs.',
        'Use A\'s routine rate because routine work is easier to compare.',
        'Apply the same half-and-half weights, while keeping assignment limitations explicit.',
      ],
      correctIndex: 2,
      explanation: 'Common weights describe the stated target mixture. Equal total job counts do not imply equal mixtures; a routine-only rate omits half the target workload.',
    },
    takeaway: 'A total is a weighted comparison. Check the mixture and the causal role of the grouping variable.',
    sourceNote: 'The inherited Stanford entry was spot-checked for weighting and causal-adjustment limits. All repair counts and standardized mixtures here are illustrative, not estimates of method effects.',
  },
  {
    id: 'fg-003',
    title: 'Give a revised estimate its reference period and release date',
    outcome: 'Distinguish a change in an estimate about the past from a new event or change between periods.',
    scene: 'A community garden revises last week\'s visitor estimate when a late gate tally arrives.',
    sections: [
      {
        title: 'The garden did not gain seven Tuesday visitors',
        paragraphs: [
          'On Monday, a community garden publishes an estimated 52 visitors for the previous Monday through Sunday. On Tuesday, a late gate tally changes that estimate to 59. A message announces that attendance rose by seven today. Readers could reasonably take that to mean seven additional people visited on Tuesday. But neither bulletin describes Tuesday\'s visits. Both concern the same completed week. Only the available record and the date of publication have changed.',
        ],
      },
      {
        title: 'One event period can have several published versions',
        paragraphs: [
          'The reference period tells you when the measured activity occurred. The release date tells you when this version of the estimate became available. A particular published version is sometimes called a vintage. Keeping both dates prevents a newer estimate from masquerading as a newer event. In the garden example, 59 minus 52 equals a revision of 7 visitors to the same week, not growth from Monday to Tuesday.',
          'Early estimates can be useful before every return arrives. Later information, corrections, or changed methods can revise them. That tradeoff between speed and completeness does not make every revision more accurate. A changed definition of who counts as a visitor would require a different explanation from a missing tally arriving.',
        ],
      },
      {
        title: 'Write a sentence that preserves both clocks',
        paragraphs: [
          'A more accurate bulletin says that Tuesday\'s estimate for last week is 59, revised from Monday\'s 52 after a late return. Keep the earlier release rather than silently overwriting it if you need to understand a decision made on Monday. To describe attendance growth, obtain estimates for different reference periods and check that their definitions and revision status are comparable. Two values alone are not enough: you must know whether they are different observations or two versions of one observation.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'One visitor week, two publication dates',
      alt: 'Last Monday through Sunday is the reference week. Monday publishes 52; Tuesday revises that week to 59.',
      caption: 'Illustrative bulletin, not garden data. The first item is the event period; the next two are releases. Spacing is not proportional.',
      items: [
        { label: 'Previous Monday to Sunday', detail: 'The same visitor week described by both estimates.' },
        { label: 'Monday release', detail: '52 visitors estimated; one gate tally missing.' },
        { label: 'Tuesday release', detail: '59 visitors for that week; late tally adds 7.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw columns for reference period, release date, estimate, and reason. Add separate Monday and Tuesday rows.',
        'Fill both reference-period cells with the same previous week. Enter 52 and 59 beside their release dates.',
        'Calculate the revision and rewrite the misleading announcement without describing any Tuesday attendance.',
        'Under the table, name the extra period you would need to compare weekly attendance. Keep both original release rows.',
      ],
      notice: 'Your sentence identifies one past week, two releases, and a revision of 7 rather than seven new Tuesday visits.',
      troubleshooting: 'If both date columns say Tuesday in the second row, restore the past reference week. Publication does not move the event.',
    },
    recall: {
      prompt: 'An electricity provider revises a completed billing month using a meter reading received later. What does a higher revised total tell you, and what remains unknown about this morning?',
      hint: 'Which time interval does the revised total describe?',
      answer: 'The higher total revises the completed month\'s estimate; it does not report this morning\'s usage. Preserve the period, both release dates, and the reading change before comparing actual use across periods.',
    },
    quiz: {
      question: 'Friday\'s museum bulletin corrects Wednesday\'s estimate for last month after a duplicate is removed. Which comparison measures the revision?',
      options: [
        'Friday\'s and Wednesday\'s estimates for that same month.',
        'Friday\'s daily admissions and Wednesday\'s daily admissions.',
        'Last month\'s latest estimate and the preceding month\'s latest estimate.',
      ],
      correctIndex: 0,
      explanation: 'The first compares releases about one reference period. The other comparisons describe different event periods and answer questions about change over time.',
    },
    takeaway: 'Ask when the activity happened and when this version of its estimate became available.',
    sourceNote: 'The inherited ONS methodology supports the reference-period and revision distinction, not current release schedules. The garden bulletin and its counts are invented.',
  },
  {
    id: 'fg-004',
    title: 'Separate your preference from the group preference you imagine',
    outcome: 'Draft a neutral preference question without treating silence or your own guess as a group result.',
    scene: 'Two members of a weekend language club discover that nodding through check-ins did not reveal their preferences.',
    sections: [
      {
        title: 'A nod leaves several possibilities open',
        paragraphs: [
          'Isha attends a weekend language club. She would rather read short written updates than spend the opening session on a live check-in, but she assumes the others enjoy it. When the organizer proposes another check-in, she nods. Rowan sees the nod and counts it as support. In this fictional exchange, the public behavior and the private preference differ. Isha might be avoiding a discussion, accepting a compromise, or feeling indifferent about speaking up. The nod does not select one explanation.',
        ],
      },
      {
        title: 'A belief about other people is a separate answer',
        paragraphs: [
          'Pluralistic ignorance concerns a group-level mismatch between people\'s private attitudes and the norm they believe others endorse. Begin with the smaller distinction you can check: what I prefer is different from what I think others prefer. Prentice and Miller studied this distinction in a campus alcohol context. Their abstract reports four studies comparing personal attitudes with estimates of peers\' attitudes. That does not establish a mismatch in a language club.',
          'Even discovering one other person who prefers written updates would not tell Isha what most members want. It would replace one unsupported assumption with one direct report. There is no need to turn that report into a diagnosis of the group.',
        ],
      },
      {
        title: 'Ask for a preference, not agreement with your guess',
        paragraphs: [
          'Isha can draft an optional question offering live check-ins, written updates, another format, or no preference. Asking which format suits the respondent gathers something different from asking which format everyone wants. The dialogue shows Rowan clarifying the question before answering. An actual decision would also need to consider who did not answer and whether people felt free to disagree. Keep your own preference, your estimate of others, and their voluntary responses in separate places; combining them makes a guess look like a poll.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'A question about one person\'s preference',
      alt: 'Isha offers an optional format question; Rowan asks whose preference matters, then reports a personal preference.',
      caption: 'Original fictional exchange. Notice the correction from guessing the group to reporting a personal preference, not a group verdict.',
      items: [
        { label: 'Isha', detail: 'Optional question: would live check-ins, written updates, or another format suit you?' },
        { label: 'Rowan', detail: 'Are you asking what I want, or what I think the club wants?' },
        { label: 'Isha', detail: 'Your own preference. No preference is also an answer; you can skip this.' },
        { label: 'Rowan', detail: 'I prefer written updates. I had assumed the others wanted live ones.' },
      ],
    }],
    practice: {
      minutes: 8,
      needs: ['Paper or a private note', 'Pen if using paper'],
      steps: [
        'Write headings for Isha\'s preference, her guess about others, and direct reports.',
        'Place her written-update preference and guessed live-check-in norm under different headings. Add Rowan\'s answer only under direct reports.',
        'Draft an optional question with live, written, other, and no-preference choices. Do not send it for this exercise.',
        'List the remaining unknowns. Replace claims about everyone with a statement limited to these two members.',
      ],
      notice: 'The note distinguishes two personal preferences from an untested belief about the rest of the club.',
      troubleshooting: 'If your question begins with why everyone prefers something, remove the assumed consensus and ask about the respondent instead.',
    },
    recall: {
      prompt: 'You prefer a quieter family birthday but assume everyone expects a large party. What could you ask without announcing that the family secretly agrees with you?',
      hint: 'Separate your wish from a voluntary question addressed to each person.',
      answer: 'State your own preference, then ask which format suits each willing respondent, allowing another option or no preference. Silence and one supporting answer still do not establish what the whole family wants.',
    },
    quiz: {
      question: 'A hobby group wants to learn members\' own preferences about sharing drafts. Which question collects that information?',
      options: [
        'Would you prefer private feedback, a group discussion, another format, or no preference?',
        'Which feedback format do you think most other members expect?',
        'Which feedback format has appeared most often in previous sessions?',
      ],
      correctIndex: 0,
      explanation: 'The first asks for a personal preference. The second measures a perceived norm, and the third records past practice; both can differ from what members privately want.',
    },
    takeaway: 'Your preference, your guess about others, and their reported preferences are different evidence.',
    sourceNote: 'Prentice and Miller were checked through the inherited abstract only. This fictional dialogue neither establishes a club-wide mismatch nor validates the question format.',
  },
  {
    id: 'fg-005',
    title: 'Count the corrections still waiting to arrive',
    outcome: 'Track a delayed command queue and distinguish current position from the position already scheduled.',
    scene: 'A paper dispatch game compares two ways to move a counter toward position three.',
    sections: [
      {
        title: 'A command does not move the counter immediately',
        paragraphs: [
          'Draw a track with a counter at 0 and a target at 3. Commands move it by +1, -1, or 0, but each command arrives two rounds after you issue it. At the start of a round, apply the command due before making another decision. A command sent in round one therefore arrives in round three, not round two. This paper game separates what you see now from changes already on their way.',
        ],
      },
      {
        title: 'Two rules agree until round four',
        paragraphs: [
          'A position-only rule sends +1 below the target, -1 above it, and 0 at the target. A pending-aware rule uses current position plus all commands still waiting, then makes the same comparison. Both rules send +1 in rounds one, two, and three. Their positions at those decision points are 0, 0, and 1.',
          'At round four, the counter reaches 2 and a +1 is still due in round five. The position-only rule sends another +1, due in round six. The pending-aware rule calculates 2 + 1 = 3 and sends 0. It recognizes a correction that has not yet appeared on the track.',
        ],
      },
      {
        title: 'Read the queue as well as the final position',
        paragraphs: [
          'After arrivals in rounds five and six, the position-only counter reads 3 then 4. At round six it sends -1, which will arrive in round eight. The pending-aware counter reads 3 then 3, with no nonzero correction waiting. Repeatedly correcting a delayed reading created the overshoot. Real systems can have uncertain delays and new disturbances, unlike this fixed, additive game. Meadows discusses how feedback delays contribute to oscillation; the lesson is to account for unfinished corrections, not to wait through an urgent problem.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Pending-aware queue at the end of round four',
        alt: 'Position 2 now, plus 1 due in round five, and 0 due in round six.',
        caption: 'Illustrative fixed-delay queue. The pending +1 already schedules arrival at the target; positions are not a time scale.',
        items: [
          { label: 'Round 4: now', detail: 'Position 2 after applying the command from round 2.' },
          { label: 'Round 5: due +1', detail: 'Sent in round 3; projected position becomes 3.' },
          { label: 'Round 6: due 0', detail: 'Sent in round 4; no additional movement needed.' },
        ],
      },
      {
        type: 'bars',
        title: 'Position after the round-six arrival',
        alt: 'Position-only rule reaches 4; pending-aware rule reaches the target of 3.',
        caption: 'Same illustrative starting state. The first run also has a -1 waiting for round eight; the second has no nonzero pending command.',
        unit: 'track position',
        items: [
          { label: 'Position only', detail: '4, one above the target of 3.', value: 4 },
          { label: 'Include pending', detail: '3, equal to the target.', value: 3 },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Paper', 'Pen', 'One counter'],
      steps: [
        'Make two six-row logs with columns for round, arriving command, position, pending commands, and new command.',
        'Start the first run at 0 with an empty queue. Apply arrivals first, then use the position-only rule; write each new command\'s due round.',
        'Reset to 0 and an empty queue. Repeat using position plus remaining pending commands before deciding.',
        'Compare positions after each arrival: 0, 0, 1, 2, 3, 4 versus 0, 0, 1, 2, 3, 3.',
        'Retain commands due after round six. Mark the first run\'s -1 due in round eight.',
      ],
      notice: 'Only the position-only run overshoots within six rounds; its corrective command is still waiting.',
      troubleshooting: 'If arrival happens too early, label the first command due in round three. Remove an arriving command before totaling the remaining queue.',
    },
    recall: {
      prompt: 'A fictional stationery shelf needs 10 notebooks. Six are present and four confirmed replacements are in transit. What matters before ordering more?',
      hint: 'Separate available stock from confirmed pending stock.',
      answer: 'Six plus four already totals 10 if all replacements arrive as expected. Check their status and any new demand before adding another order; uncertainty changes the simple model.',
    },
    quiz: {
      question: 'The game counter is at 4, target 3, with one pending -1. What does the pending-aware rule send?',
      options: ['Another -1 because the counter is above target.', '0 because 4 plus the pending -1 equals 3.', '+1 to balance the negative command in transit.'],
      correctIndex: 1,
      explanation: 'The projected position is already 3. Another correction would move beyond that scheduled result under the stated fixed-delay assumptions.',
    },
    takeaway: 'The visible state can lag behind decisions already made. Include the queue before correcting again.',
    sourceNote: 'Meadows supplies the feedback-delay framework. This original game assumes fixed delays, reliable delivery, and additive effects; it is not advice for safety-critical or production controls.',
  },
  {
    id: 'fg-006',
    title: 'Check where the saved meeting time went',
    outcome: 'Define outcome, process, and balancing measures without adding incompatible units or hiding displaced work.',
    scene: 'Four volunteers shorten an exhibition-planning meeting but spend more time clarifying decisions afterward.',
    sections: [
      {
        title: 'A shorter meeting can create a longer afternoon',
        paragraphs: [
          'Four exhibition volunteers normally meet for 30 minutes. A trial cuts the meeting to 20 minutes by sending an agenda beforehand. Everyone leaves sooner, but some decisions remain unclear. Later messages ask who is collecting prints and which labels are approved. Meeting duration improved. Whether the group saved work depends on what happened outside the meeting, not merely when the call ended. The planned change needs a way to notice costs that moved elsewhere.',
        ],
      },
      {
        title: 'Three measures answer different questions',
        paragraphs: [
          'For the local goal of shorter meetings, duration is an outcome measure: it records the result sought. Whether the agenda arrived by the agreed deadline is a process measure: it records whether the proposed change occurred. Time spent clarifying omitted decisions is a balancing measure: it checks a possible cost outside the target. IHI distinguishes these roles in improvement work. A measure\'s role depends on the goal; counting an email does not establish useful preparation.',
          'Define clarification work before recording it. Include time spent reading and replying about decisions left unresolved, with voluntary participant estimates. Do not secretly monitor messages or treat ordinary new questions as evidence that the shorter meeting failed.',
        ],
      },
      {
        title: 'Add participant time to participant time',
        paragraphs: [
          'In an illustrative pair of meetings, the original meeting uses 4 times 30 = 120 participant-minutes, plus 10 participant-minutes of clarification: 130 total. The trial uses 4 times 20 = 80, plus 60 afterward: 140 total. Saving 40 inside added 50 outside, leaving 10 more participant-minutes overall. These totals are not elapsed afternoon minutes: simultaneous work by different people counts separately. This example exposes a tradeoff, not proof that advance agendas cause extra work. More observations and attention to decision quality would still be needed.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Time moves across the meeting boundary',
      alt: 'Original meeting 120 participant-minutes plus 10 afterward; trial 80 plus 60 afterward.',
      caption: 'Illustrative participant time. Add the first two bars for 130 and the last two for 140; do not confuse these with elapsed meeting minutes.',
      unit: 'participant-minutes',
      items: [
        { label: 'Original: meeting', detail: '4 people times 30 minutes = 120.', value: 120 },
        { label: 'Original: clarification', detail: '10 participant-minutes afterward.', value: 10 },
        { label: 'Trial: meeting', detail: '4 people times 20 minutes = 80.', value: 80 },
        { label: 'Trial: clarification', detail: '60 participant-minutes afterward.', value: 60 },
      ],
    }],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        'Write the local goal, shorter meetings, and the change, an agenda sent by an agreed deadline.',
        'Label duration as outcome, agenda delivery as process, and later clarification time as balancing measure.',
        'Calculate both illustrative participant-time totals. State that later time is already summed across participants.',
        'Draft an openly agreed recording method and a review condition, such as more combined time or unresolved decisions. Do not collect real messages.',
      ],
      notice: 'Your plan detects 40 participant-minutes saved in the meeting alongside 50 added afterward.',
      troubleshooting: 'If you add 20 elapsed minutes to 60 participant-minutes, convert the meeting to 80 participant-minutes first.',
    },
    recall: {
      prompt: 'A library speeds self-checkout by removing an instruction screen. What process and balancing measures would accompany transaction time?',
      hint: 'Record the proposed change and work that could move to another person.',
      answer: 'Check whether the shorter screen sequence was used, then record assistance needed or unfinished checkouts. Define collection openly; a faster successful transaction alone excludes people who could not finish.',
    },
    quiz: {
      question: 'A support desk aims to close requests faster using a reply template. Which measure best checks a displaced cost?',
      options: ['Median time until the first reply.', 'Share of replies using the template.', 'Follow-up work caused by needs left unresolved at closure.'],
      correctIndex: 2,
      explanation: 'Follow-up work checks what the speed target could push outside closure. Reply time tracks speed; template use tracks the proposed process, not its consequences.',
    },
    takeaway: 'Define the intended result, confirm the process change, and check a cost that could move outside the target.',
    sourceNote: 'The inherited IHI page defines the three measure roles. The exhibition example and time values are invented, not a study of meetings or a validated measurement scheme.',
  },
  {
    id: 'fg-007',
    title: 'Find the unfinished request behind the repeat contact',
    outcome: 'Distinguish service-generated repeat work from changed needs and draft a fix to the original response.',
    scene: 'A community camera-loan desk confirms a booking but leaves the borrower without a pickup location.',
    sections: [
      {
        title: 'The fast reply left a necessary question unanswered',
        paragraphs: [
          'A borrower asks a community camera-loan desk to reserve a camera for Friday and explain where to collect it. The desk replies that the booking is confirmed. The borrower writes again asking for the location. A reply-speed dashboard sees two quickly answered messages. From the borrower\'s side, one request needed two contacts because the first answer omitted necessary information. The second contact did not introduce a new task or show that the borrower was difficult.',
        ],
      },
      {
        title: 'Classify why contact happened',
        paragraphs: [
          'Vanguard calls demand created by an earlier failure to meet a need failure demand. The useful distinction is the reason for the contact, not whether it came from a repeat customer. Asking again for omitted pickup directions fits. Changing Friday pickup to Saturday because plans changed introduces a changed need. A scheduled check that an item arrived can be a necessary part of a service, rather than a failure.',
          'Some records do not tell you enough. A message saying only please call me does not reveal whether the need is new, unresolved, or changed. Keep that contact uncertain instead of forcing it into a category that makes the desk look efficient.',
        ],
      },
      {
        title: 'Finish the original need upstream',
        paragraphs: [
          'An improved confirmation would include the reserved date, pickup place, and relevant opening hours. In the fictional exchange, the rear desk is open Friday from 16:00 to 18:00. Adding those details addresses the missing information before the borrower has to chase it. It does not justify preventing another question or promising that all repeat contacts disappear. A rule against follow-ups could lower message counts while leaving borrowers stranded. Use the categories to examine the service path and missing information, not to blame the person answering messages or impose a quota.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'One omitted answer creates another contact',
      alt: 'A borrower asks to book and asks where to collect; the desk confirms only the booking, then supplies directions after a repeat.',
      caption: 'Original fictional exchange. The second borrower message repeats part of the original need; it is not a new booking.',
      items: [
        { label: 'Borrower', detail: 'Please reserve a camera for Friday. Where do I collect it?' },
        { label: 'Desk', detail: 'Your Friday booking is confirmed.' },
        { label: 'Borrower', detail: 'Thanks. Where should I go to collect it?' },
        { label: 'Desk', detail: 'The rear desk, open Friday from 16:00 to 18:00.' },
      ],
    }],
    practice: {
      minutes: 10,
      needs: ['Paper', 'Pen'],
      steps: [
        'List five fictional contacts: initial booking; missing pickup directions; changed pickup day; chasing a promised overdue confirmation; please call me.',
        'Assign original need, repeat from unmet need, changed need, or uncertain to each. Use uncertain when the reason is missing.',
        'Connect each service-generated repeat to the earlier omission or unfulfilled promise that explains it.',
        'Rewrite the booking confirmation with Friday, the rear desk, and 16:00 to 18:00. Keep a route for further questions.',
      ],
      notice: 'Missing directions and chasing the overdue promise are repeats from unmet needs; the unexplained callback remains uncertain.',
      troubleshooting: 'If every repeat is labeled failure demand, ask whether the original service was incomplete or the borrower\'s plans changed.',
    },
    recall: {
      prompt: 'A repair shop reports fewer follow-up calls after removing its contact number. What would you need to know before calling that an improvement?',
      hint: 'A lower count can reflect lost access rather than completed service.',
      answer: 'Check whether customers receive the promised information and completed repair, and whether they can still report problems. Fewer calls alone cannot distinguish resolved needs from difficulty reaching the shop.',
    },
    quiz: {
      question: 'Which equipment-desk contact most clearly arose from unfinished service?',
      options: ['A borrower requests an extra light for a newly added scene.', 'A borrower asks for the return address omitted from the promised instructions.', 'A borrower reschedules after a change to the filming date.'],
      correctIndex: 1,
      explanation: 'The missing return address belongs to the original service. The extra light and new date change the need rather than demonstrate an earlier omission.',
    },
    takeaway: 'Count the reason a request recurs, then repair the earlier omission instead of making contact harder.',
    sourceNote: 'Failure demand is an inherited Vanguard practitioner framework with a commercial interest. No prevalence or savings claim is adopted; this desk and its dialogue are fictional.',
  },
  {
    id: 'fg-008',
    title: 'Write shared-use rules that can be maintained and challenged',
    outcome: 'Distinguish depleted supplies from temporarily unavailable tools and give users a route to revise shared rules.',
    scene: 'A community art room drafts separate use and replenishment rules for paper and scissors.',
    sections: [
      {
        title: 'A shared cupboard contains different kinds of shortage',
        paragraphs: [
          'A community art room shares paper and scissors. Paper is used up; scissors usually remain available for future sessions but cannot be used by two people in different places at once. A sign asking everyone to be considerate does not say what to do when paper runs out or a borrowed pair is missing. These are questions about how the arrangement works: who can use the resources, what users record, who restores availability, and who can challenge a rule.',
        ],
      },
      {
        title: 'Match the rule to the resource',
        paragraphs: [
          'Consider an illustrative paper rule: check stock after a session and request a pack of 20 sheets from an agreed club fund when fewer than 10 remain. Starting with 14 and using 6 leaves 8, so the request is triggered. If 20 arrive before any further use, stock becomes 28. Someone still needs authority to order and a way to record a pending request; a threshold alone does not replenish anything.',
          'Scissors need a return location and a way to mark a pair temporarily unavailable, not a sheet-replacement calculation. A newcomer should be able to understand both arrangements without knowing the regular organizer personally. A rule that assumes every user can pay immediately could exclude someone before they can raise the problem.',
        ],
      },
      {
        title: 'Governance includes the route for disagreement',
        paragraphs: [
          'Ostrom\'s work examines resource users and the arrangements through which they make and maintain rules. It does not supply one cupboard policy that works everywhere. Add a named review route where users can question the threshold, funding, or borrowing conditions, with decisions communicated back to them. A frequent user might need a larger allocation; a newcomer might need clearer access instructions. Test those cases against the draft. For a real room, the people affected need an opportunity to accept, reject, and revise the arrangement.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Resource type by availability problem',
      alt: 'Four cells compare paper and scissors during normal use and when availability needs restoring.',
      caption: 'Illustrative two-way rule table. Rows are paper and scissors; columns are ordinary use and restoring availability. The resources need different rules.',
      items: [
        { label: 'Paper / ordinary use', detail: '14 sheets minus 6 used leaves 8; record the remaining stock.' },
        { label: 'Paper / restore stock', detail: 'Below 10 triggers a request; 8 plus 20 delivered becomes 28.' },
        { label: 'Scissors / ordinary use', detail: 'Borrow from the marked tray; return at the end of the session.' },
        { label: 'Scissors / unavailable', detail: 'Mark the missing pair and use the agreed return or review route.' },
      ],
    }],
    practice: {
      minutes: 12,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw paper and scissors rows. Describe what is consumed and what is temporarily unavailable in each.',
        'Copy the paper threshold example and calculate 14 minus 6, then 8 plus 20. Name a fictional person authorized to order.',
        'Add newcomer access, a tool return location, a stock-check method, and a route to question the rules.',
        'Test a frequent paper user and a newcomer without replacement money. Revise one exclusion; keep the card a proposal, not an imposed policy.',
      ],
      notice: 'The draft explains restoration and disagreement instead of relying on goodwill.',
      troubleshooting: 'If your rule ends at please replace it, specify who can authorize replacement and what happens when a user cannot do it.',
    },
    recall: {
      prompt: 'Neighbors share a laundry room. Detergent runs out and machines remain occupied after cycles finish. Why would one replacement rule be insufficient?',
      hint: 'Distinguish consumable stock from access to a reusable resource.',
      answer: 'Detergent needs replenishment; machines need usable access and collection arrangements. Both require agreed responsibilities and a way to resolve disagreements, not merely a request to buy replacements.',
    },
    quiz: {
      question: 'New art-room members cannot use the online route for disputing cupboard rules. Which change addresses that governance gap?',
      options: ['Offer a usable alternative review route and communicate decisions to members.', 'Raise the paper threshold so shortages happen less often.', 'Ask the current organizer to make more exceptions informally.'],
      correctIndex: 0,
      explanation: 'A usable review route addresses participation in rule changes. More stock addresses supply; personal exceptions leave access dependent on the organizer.',
    },
    takeaway: 'Specify use, restoration, and contestation around the actual resource and the people who depend on it.',
    sourceNote: 'The Nobel summary and Ostrom\'s publisher-deposited PNAS abstract support the governance perspective. The article body was not reviewed; this cupboard analogy is not a tested institutional recipe.',
  },
  {
    id: 'fg-009',
    title: 'Hand over the noticing and checking, not only the errand',
    outcome: 'Map planning and execution separately, then propose a responsibility transfer with information, authority, and consent.',
    scene: 'Friends divide the bread order for a picnic, discovering that collection is only one part of the work.',
    sections: [
      {
        title: 'The bread was collected, but who organized it?',
        paragraphs: [
          'Nila asks Sam to collect bread for a picnic. Sam does the errand. Nila still checks how many people are coming, finds a shop, chooses an amount, sends reminders, and asks whether the bread arrived. Saying that Sam handled the bread hides several responsibilities that remained with Nila. It also hides what Sam was actually asked and authorized to do. Neither person needs a personality label for the task to be described more accurately.',
        ],
      },
      {
        title: 'Separate four kinds of thinking from doing',
        paragraphs: [
          'Allison Daminger\'s household-labor study distinguishes anticipating needs, identifying options, making decisions, and monitoring results. In the picnic, anticipating means noticing that the headcount will determine the order. Identifying options means finding suitable available choices. Deciding means selecting an amount and shop within an agreed budget. Monitoring means checking that the bread has arrived when needed. Collection is execution, a related but separate action.',
          'The abstract describes 70 interviews with members of 35 couples. It does not establish how every household divides work or test this picnic worksheet. The distinction is useful here as an analogy: a transfer of physical action can leave the planning responsibility where it was.',
        ],
      },
      {
        title: 'Make the proposed responsibility executable',
        paragraphs: [
          'A fuller handoff could ask Sam to confirm the headcount on Friday, compare available options, choose within a budget limit, collect on Saturday, and confirm arrival before the picnic starts. Sam needs access to the count, permission to choose, and a way to raise a problem if the budget or collection time will not work. The dialogue makes acceptance explicit. If Sam agrees only to collection, record that narrower agreement. A written owner column does not create consent, remove constraints, or transfer the remaining work by itself.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'Negotiating the whole bread responsibility',
      alt: 'Nila proposes responsibility from headcount to arrival; Sam asks for information and authority, then accepts defined work.',
      caption: 'Original fictional dialogue. Compare the agreed scope with simply collecting a preselected order; acceptance still matters.',
      items: [
        { label: 'Nila', detail: 'Could you own bread from checking numbers through confirming arrival, rather than just collecting?' },
        { label: 'Sam', detail: 'I can if I have the headcount, budget limit, and authority to choose an available option.' },
        { label: 'Nila', detail: 'Agreed. Check the count Friday and tell me if the budget or collection time cannot work.' },
        { label: 'Sam', detail: 'I accept that. I will choose, collect, and confirm it is at the picnic before we start.' },
      ],
    }],
    practice: {
      minutes: 10,
      needs: ['Paper', 'Pen'],
      steps: [
        'Make five rows: anticipating, options, decisions, monitoring, and execution. Use the fictional picnic, not another person\'s private behavior.',
        'Write the action and current owner in each row. Mark unknown ownership rather than guessing.',
        'Add a proposed owner, needed information, and authority. Check that choosing bread includes an agreed budget limit.',
        'Draft a request covering a complete responsibility and an exception route. Leave acceptance blank until the fictional dialogue supplies it.',
      ],
      notice: 'The revised agreement identifies who checks the count and arrival, not only who visits the shop.',
      troubleshooting: 'If every planning row still requires Nila\'s reminders, either transfer that responsibility explicitly or acknowledge that only collection moved.',
    },
    recall: {
      prompt: 'One housemate books a repair after another finds the problem, researches providers, selects a slot, and checks completion. What remains to discuss before calling it a full handoff?',
      hint: 'Name the retained thinking tasks and the authority needed to move them.',
      answer: 'Clarify who owns noticing, options, decisions, and follow-up, alongside booking. Agree access, limits, and exceptions; booking alone does not show that those responsibilities transferred.',
    },
    quiz: {
      question: 'A friend volunteers to arrange board-game supplies. Which agreement includes planning rather than just execution?',
      options: ['Collect the items after I choose them and send a reminder.', 'Pay for the items on my completed shopping list.', 'Check what is missing, choose within our limit, obtain it, and confirm readiness.'],
      correctIndex: 2,
      explanation: 'The third includes anticipation, choice, and monitoring. Collection and payment can be substantial work, but leave the earlier planning with someone else.',
    },
    takeaway: 'Name the thinking work, information, authority, and accepted scope alongside the visible errand.',
    sourceNote: 'Daminger\'s qualitative study was checked through its abstract only. The picnic handoff is an original analogy, not a tested redistribution method or a claim about any gender.',
  },
  {
    id: 'fg-010',
    title: 'Collect the fact only one person knows before the room vote',
    outcome: 'Pool decision-relevant facts with their sources before asking for preferences, without treating novelty as accuracy.',
    scene: 'Three volunteers combine attendance and seating information before choosing a repair-workshop room.',
    sections: [
      {
        title: 'The popular room cannot seat the planned group',
        paragraphs: [
          'A repair workshop needs a seat for every attendee. Everyone has seen attractive photographs of the Loft room, so an early preference round favors it. In this fictional planning exercise, Maya knows that 18 people are registered. Dev has a booking sheet showing only 12 seats in Loft. Kai has another showing 24 in Cedar. Until those facts are combined, the group can keep repeating the shared fact that Loft looks pleasant without checking whether it fits the workshop.',
        ],
      },
      {
        title: 'Unshared information can be absent from the decision',
        paragraphs: [
          'A hidden-profile task distributes relevant information among participants so that no single person starts with the complete picture. The Stasser and Titus abstract describes four-person groups that did not reliably pool distributed candidate information. A later meta-analysis abstract covers 65 studies and reports variation across conditions. These laboratory findings do not prove that this group will fail or that one meeting format prevents failure.',
          'They motivate a specific question: what relevant fact has not reached the group yet? A preference is not the same thing as that fact. Asking which room people like cannot reliably reveal the seating figures they have not mentioned.',
        ],
      },
      {
        title: 'Record sources and change the criterion openly',
        paragraphs: [
          'Collect the three facts before a vote, including where the counts came from and whether they are current. If the sheets are accurate, Loft is short by 18 minus 12 = 6 seats; Cedar has 24 minus 18 = 6 spare. Cedar passes this seating requirement, though availability and other needs remain unchecked. Do not treat the newest contribution as automatically decisive. Check it against the agreed criteria and its source. Participants can decline to share confidential information, and a solo planning sheet should remain labeled as preparation rather than a completed group exercise.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Three separate facts reach one decision sheet',
      alt: 'Maya brings attendance of 18, Dev brings Loft capacity of 12, and Kai brings Cedar capacity of 24 to a shared sheet.',
      caption: 'Illustrative information-sharing map, not room geometry. Arrows show facts entering the shared sheet; capacity and availability still need verification.',
      items: [
        { label: 'Maya', detail: 'Registration list: 18 attendees.', x: 18, y: 20, shape: 'person' },
        { label: 'Dev', detail: 'Loft booking sheet: 12 seats.', x: 50, y: 20, shape: 'person' },
        { label: 'Kai', detail: 'Cedar booking sheet: 24 seats.', x: 82, y: 20, shape: 'person' },
        { label: 'Shared decision sheet', detail: 'Loft short by 6; Cedar has 6 spare.', x: 50, y: 80, shape: 'paper' },
      ],
      arrows: [{ from: 0, to: 3, label: 'share' }, { from: 1, to: 3, label: 'share' }, { from: 2, to: 3, label: 'share' }],
    }],
    practice: {
      minutes: 10,
      needs: ['Paper', 'Pen'],
      steps: [
        'Make fact, source, and uncertainty columns for the workshop. Enter the three fictional counts without recording a favorite room.',
        'Write the criterion that all 18 attendees need seats. Calculate the shortfall or spare capacity for each room.',
        'Add an unchecked fact, such as availability on the chosen date, and name where it would be verified.',
        'Draft an optional invitation for relevant unshared facts before preferences. Working alone, label the sheet preparation, not a tested group result.',
      ],
      notice: 'A contributed fact changes room eligibility, while source accuracy and other requirements remain explicit.',
      troubleshooting: 'If the sheet contains only favorite rooms, ask what observation or document could change whether a room meets the seating requirement.',
    },
    recall: {
      prompt: 'Friends choose a walking route from familiar photos. One friend knows a gate is locked on Sundays. How should that information enter the choice?',
      hint: 'Record the relevant fact and check its source before counting preferences.',
      answer: 'Collect the gate information with its date or source, check whether the trip is on Sunday, and verify access if uncertain. A popular route can fail a requirement, but an unverified novel claim still needs checking.',
    },
    quiz: {
      question: 'A volunteer reports a room-access restriction no one else has heard about. What should the group do next?',
      options: ['Record its source and check how it affects the agreed requirements.', 'Accept it as decisive because it is new to the group.', 'Postpone it until after a preference vote establishes the favorite.'],
      correctIndex: 0,
      explanation: 'Pooling requires both inclusion and evaluation. Novelty does not establish accuracy; an early preference vote can proceed without information needed to define eligible choices.',
    },
    takeaway: 'Make relevant unshared facts available before preference collection, then evaluate their source and significance.',
    sourceNote: 'Both the original study and hidden-profile review were checked through abstracts only. The room counts and collection format are original, not a demonstrated meeting intervention.',
  },
  {
    id: 'fg-011',
    title: 'Ask what constrains the power behind permission',
    outcome: 'Distinguish being allowed access today from having usable protection against uncontrolled cancellation tomorrow.',
    scene: 'Two music clubs allow rehearsal access today but differ in cancellation rules and independent review.',
    sections: [
      {
        title: 'The same open door can hide different arrangements',
        paragraphs: [
          'Two fictional music clubs let you rehearse today. At the first, the coordinator can cancel access without giving reasons and nobody can review that decision. The coordinator happens to be generous. At the second, cancellation must follow published criteria, members can obtain reasons, and an independent reviewer can reverse an improper decision. Both doors are open now. The difference appears when you disagree with a future decision or a different coordinator takes over.',
        ],
      },
      {
        title: 'Freedom from interference and from uncontrolled power',
        paragraphs: [
          'Being left alone today is non-interference. Republican non-domination is a philosophical account that also asks whether someone holds uncontrolled power over your choices. Here republican names a philosophical tradition, not a political party. On this view, dependence on another person\'s goodwill matters even before they use their power against you. The question is what prevents them from changing the terms at will.',
          'Arbitrary power does not merely mean an unpredictable or rude decision. A friendly decision-maker can retain power that affected members cannot contest. Conversely, a coordinator can have discretion without that discretion being entirely uncontrolled, if reasons, limits, and review genuinely constrain its use.',
        ],
      },
      {
        title: 'A protection must be usable',
        paragraphs: [
          'Suppose the second club closes a room for a documented repair under its published criteria. The closure interferes with your rehearsal, but the philosophical question includes whether it follows accountable rules and can be challenged if misapplied. Non-domination does not promise uninterrupted access. Check whether members can actually request review, whether the reviewer can change the outcome, and whether the process depends on the coordinator\'s permission. A printed appeal address that nobody answers leaves the claimed protection incomplete. This is a way to examine institutional power, not a legal verdict or an instruction to confront an unsafe authority.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Where the second club constrains cancellation',
      alt: 'A member requests access from a coordinator, published criteria constrain the coordinator, and independent review can restore access.',
      caption: 'Illustrative power map. Follow the constraint and appeal routes, not personal friendliness. The reviewer must be able to affect access.',
      items: [
        { label: 'Member', detail: 'Can request access and contest a refusal.', x: 18, y: 20, shape: 'person' },
        { label: 'Coordinator', detail: 'Decides access under stated limits.', x: 82, y: 20, shape: 'person' },
        { label: 'Rehearsal access', detail: 'Can be withheld or restored.', x: 82, y: 80, shape: 'box' },
        { label: 'Published criteria', detail: 'Require reasons tied to the rules.', x: 50, y: 50, shape: 'paper' },
        { label: 'Independent reviewer', detail: 'Can reverse an improper cancellation.', x: 18, y: 80, shape: 'person' },
      ],
      arrows: [
        { from: 0, to: 1, label: 'request' },
        { from: 1, to: 2, label: 'decide' },
        { from: 3, to: 1, label: 'constrain' },
        { from: 0, to: 4, label: 'appeal' },
        { from: 4, to: 2, label: 'restore' },
      ],
    }],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the two club policies: personal permission without review, and criteria with independent review.',
        'Underline what survives replacement of the coordinator. Separate a history of kindness from an enforceable limit in the fictional policy.',
        'Trace how a member requests review and what the reviewer can change. Mark missing access or authority.',
        'Draft one policy request, such as written reasons and an independent review route. Keep this fictional if a real challenge would be unsafe.',
      ],
      notice: 'Your proposed protection changes how power is constrained rather than how the member stays in favor.',
      troubleshooting: 'If your safeguard is a promise to be fair, ask who can challenge a decision and what follows when that promise is broken.',
    },
    recall: {
      prompt: 'A hobby server administrator has never removed your account but can do so without explanation or review. What would this philosophical view ask beyond your satisfaction today?',
      hint: 'Examine what limits the power, not only its past use.',
      answer: 'It would ask whether removal is constrained by usable rules and contestation, including under a new administrator. A favorable history describes current treatment without establishing protection against uncontrolled power.',
    },
    quiz: {
      question: 'A club adds an appeal form, but only the coordinator can decide whether an appeal reaches the reviewer. Which concern remains?',
      options: ['The club still sometimes closes rooms for repairs.', 'Members now have a written form to complete.', 'The person whose decision is challenged still controls access to review.'],
      correctIndex: 2,
      explanation: 'That gatekeeping can preserve dependence on the coordinator. A form alone does not make review usable; accountable repair closures need not be arbitrary.',
    },
    takeaway: 'Look for usable constraints on power, including when the current decision-maker is kind.',
    sourceNote: 'The inherited Stanford republicanism entry presents a contested philosophical account. These clubs are fictional; the exercise is neither a legal test nor a claim that paper rules guarantee freedom.',
  },
  {
    id: 'fg-012',
    title: 'Keep the account when the feedback boxes do not fit',
    outcome: 'Preserve a person\'s description, propose a revisable category, and examine who controls the available vocabulary.',
    scene: 'A workshop attendee reports exclusion through unexplained shorthand on a form offering only venue or content complaints.',
    sections: [
      {
        title: 'The form loses the reason participation stopped',
        paragraphs: [
          'A new workshop attendee writes that the group kept using unexplained shorthand, so they could not tell when to join the activity. The form accepts only venue or content complaints. A reviewer files the response under content and summarizes it as disliked the lesson. That summary drops the account\'s explanation. The attendee described a barrier to participation, not a preference about the topic. Their words were understandable before the form tried to classify them.',
        ],
      },
      {
        title: 'Categories distribute attention and authority',
        paragraphs: [
          'Categories determine which reports can be counted together, sent to a responsible person, or dismissed as outside scope. If only established organizers can revise them, newcomers may have little influence over how their experiences enter the record. Philosophers use hermeneutical injustice for disadvantage connected to unequal participation in shared interpretation: some people have less influence over the concepts through which experiences become publicly understood.',
          'A missing checkbox alone does not establish that injustice. The attendee may already possess an adequate explanation while an institution refuses to hear it. Ask both whether useful language is missing and whether existing descriptions are being ignored. Avoid making the person learn a philosophical term before their report can be accepted.',
        ],
      },
      {
        title: 'Preserve the description before proposing a label',
        paragraphs: [
          'Keep the original report, add an open response route, and propose a provisional label such as participation instructions. Ask whether it represents the problem and allow correction or refusal. The dialogue shows the attendee narrowing the label to unexplained group shorthand. Record who decides whether the revised category is retained and how the attendee can learn the outcome. This keeps classification accountable to the account instead of replacing it. The category may help future reports reach the right review process, but the change does not by itself fix exclusion or demonstrate a philosophical diagnosis.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'Check the label against the retained account',
      alt: 'An attendee explains unexplained shorthand; a reviewer proposes a category and accepts a more precise correction.',
      caption: 'Original fictional exchange. The attendee already describes the barrier; the new category remains open to correction.',
      items: [
        { label: 'Attendee', detail: 'The group used shorthand without explaining it. I could not tell when I should join in.' },
        { label: 'Reviewer', detail: 'I will retain that description. Would participation instructions fit as a provisional category?' },
        { label: 'Attendee', detail: 'Please specify unexplained group shorthand. General written instructions were available.' },
        { label: 'Reviewer', detail: 'I will record that correction and explain who decides whether the category stays.' },
      ],
    }],
    practice: {
      minutes: 9,
      needs: ['Paper', 'Pen'],
      steps: [
        'Copy the shorthand account beside venue and content boxes, without forcing a selection.',
        'Add an open response field and a provisional participation-instructions category, retaining the original account separately.',
        'Use the dialogue\'s correction to narrow your label. Write how a respondent could correct or decline your wording.',
        'Name a fictional category reviewer and a route for communicating the decision. Mark the philosophical interpretation as unestablished.',
      ],
      notice: 'The revised form keeps the barrier description even if the proposed category is rejected or changed.',
      troubleshooting: 'If your summary becomes disliked the workshop, restore the missing mechanism: unexplained shorthand prevented knowing when to participate.',
    },
    recall: {
      prompt: 'A building form offers only noise or repairs, but a resident reports being excluded from scheduling decisions. What should remain in the record before a new category is agreed?',
      hint: 'An available checkbox is not a substitute for the account.',
      answer: 'Retain the description and a route to clarify it. Propose a revisable category and identify who controls that revision; the poor form alone does not prove interpretive injustice.',
    },
    quiz: {
      question: 'Several people already use a clear term for a barrier, but a committee refuses to record it. What is the most relevant next question?',
      options: ['Which simpler word should those people learn instead?', 'Who controls the categories, and why are their existing accounts excluded?', 'Which existing category receives the highest number of responses?'],
      correctIndex: 1,
      explanation: 'The issue may be refusal to accept available interpretations, not a lack of vocabulary in the speakers. Popular categories do not settle who is excluded from defining them.',
    },
    takeaway: 'Retain the account, keep proposed labels correctable, and ask who has authority over the categories.',
    sourceNote: 'The inherited Stanford entry presents hermeneutical injustice and critiques. This original form exercise is not a diagnosis or an empirically tested intervention.',
  },
  {
    id: 'fg-013',
    title: 'Distinguish a leaning edge from a blurred edge',
    outcome: 'Explain rolling-shutter skew using row timing and compare it with motion during an individual exposure.',
    scene: 'A supported phone records a hand-drawn vertical stripe moving sideways across a tabletop view.',
    sections: [
      {
        title: 'A straight stripe leans in a paused frame',
        paragraphs: [
          'Draw a bold vertical stripe on a card. Keep your phone stationary and move the card gently sideways while recording. A paused frame can show a leaning stripe even when its edge looks fairly sharp. The card did not necessarily bend, and sharpening the image would not straighten that geometry. Different parts of one frame can represent different moments. That timing difference is the feature to examine before calling every distorted edge camera shake.',
          'Rolling shutter exposes sensor rows at staggered times. For this illustration, assume rows are read from top to bottom; actual sensor modes differ.',
        ],
      },
      {
        title: 'Follow the stripe across three sample times',
        paragraphs: [
          'Use hypothetical row sample centers at 0, 8, and 16 milliseconds. A steadily moving stripe is at horizontal pixel positions 20, 24, and 28 at those moments. Each later row captures it farther right. The top-to-bottom offset is 28 minus 20 = 8 pixels. Joining those recorded positions produces a slanted edge even though the stripe was vertical at any single instant. The illustration isolates time differences within the frame; it is not a measurement of your phone.',
        ],
      },
      {
        title: 'Exposure duration answers a different question',
        paragraphs: [
          'Here the stripe moves 4 pixels in 8 milliseconds, or 0.5 pixel per millisecond. During a hypothetical 1-millisecond exposure it travels only 0.5 pixel within each row, while the row-to-row timing still produces the 8-pixel offset. Shorter exposure can reduce motion blur without making all rows record simultaneously. Both effects can coexist. In your clip, inspect lean and smearing separately and accept a result with no visible artifact. Stabilization, light, readout speed, and processing vary, so this small comparison cannot identify every cause of distortion.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'One stripe, three recorded positions',
      alt: 'Upper row at 0 milliseconds records x 20 pixels; middle at 8 records x 24; lower at 16 records x 28.',
      caption: 'Illustrative row samples, not sensor proportions. Connect the three positions to see the 8-pixel lean. Arrows indicate later sampling, not a bent card.',
      items: [
        { label: 'Upper row', detail: '0 ms; stripe at x = 20 pixels.', x: 24, y: 18, shape: 'circle' },
        { label: 'Middle row', detail: '8 ms; stripe at x = 24 pixels.', x: 50, y: 50, shape: 'circle' },
        { label: 'Lower row', detail: '16 ms; stripe at x = 28 pixels.', x: 76, y: 82, shape: 'circle' },
      ],
      arrows: [{ from: 0, to: 1, label: 'later' }, { from: 1, to: 2, label: 'later' }],
    }],
    practice: {
      minutes: 8,
      needs: ['Phone with video playback', 'Paper card', 'Dark pen', 'Stable phone support'],
      steps: [
        'Draw the stripe. Support the phone securely away from a table edge, with the card in view under ordinary steady light.',
        'Record the card still, then moving sideways at two comfortable speeds. Keep the phone in the same position.',
        'Pause the clips and compare edge lean separately from edge smearing. Also watch normal playback for blur.',
        'Write skew visible, blur visible, both, or neither for each clip. Keep the originals and record no visible artifact when appropriate.',
      ],
      notice: 'Your notes distinguish changes in edge position across the frame from detail smeared during an exposure.',
      troubleshooting: 'If blur hides the edge, try gentler movement or better ordinary light. Do not force whip pans, flashing lights, or unsupported phone movements.',
    },
    recall: {
      prompt: 'A bus-window clip shows crisp but slanted poles. Why would a shorter exposure alone not necessarily straighten them?',
      hint: 'Compare the duration for one row with the timing difference between rows.',
      answer: 'Shorter exposure reduces movement recorded within each row. Staggered row timing can still capture different horizontal pole positions within the same frame, leaving skew despite crisp edges.',
    },
    quiz: {
      question: 'Assuming rolling-shutter skew is the cause, which change directly reduces the position difference recorded between rows?',
      options: ['Sharpen the same recorded edge.', 'Reduce sideways movement during the sensor readout.', 'Shorten exposure while leaving movement and readout timing unchanged.'],
      correctIndex: 1,
      explanation: 'Less movement during readout reduces the row-to-row position change. Sharpening does not alter geometry; shorter exposure chiefly addresses blur within rows.',
    },
    takeaway: 'A frame has internal timing. Separate staggered row capture from movement during each exposure.',
    sourceNote: 'The inherited RED guide explains staggered capture and skew. Sample times, pixel positions, and exposure length are illustrative, not phone specifications or measured results.',
  },
  {
    id: 'fg-014',
    title: 'Inspect the false pattern introduced by sampling',
    outcome: 'Explain how fine repetition can become broad false bands and record the viewing stage without guessing its cause.',
    scene: 'A phone preview of an original striped drawing changes when reduced to a smaller display size.',
    sections: [
      {
        title: 'A smaller picture can show a pattern the page lacks',
        paragraphs: [
          'You photograph closely spaced lines in your own drawing. At a detailed view, they remain separate; fitted to a small preview, broad bands appear. Fine repetition can interact with the grid used to represent the picture. The new banding, often called moire, is false detail rather than proof of broad stripes on the page. Resizing is one place this can arise. Capture and display can introduce artifacts too, so a changed appearance does not by itself identify the responsible stage.',
        ],
      },
      {
        title: 'A deliberately simple sampling example',
        paragraphs: [
          'Imagine a repeating four-column tone cycle: dark, mid-gray, light, mid-gray, then dark again. A crude smaller preview keeps only source columns 0, 5, 10, 15, and 20. Because the original cycle repeats every four columns, these land at cycle positions 0, 1, 2, 3, and 0. The retained tones are dark, gray, light, gray, dark.',
          'From column 0 to column 20, the source completes five cycles, but those five retained samples describe one broad cycle. A coarser grid has represented rapid repetition as a slower pattern. This is aliasing. The swatches show selected tones, not a particular program\'s output.',
        ],
      },
      {
        title: 'Compare the delivered view, not only the original',
        paragraphs: [
          'Real resizing commonly combines neighboring pixels. Smoothing before reduction can suppress false patterns, at the cost of fine detail. Check the actual smaller output instead of assuming more sharpness always improves it. Keep the original; record export dimensions and viewing size. If the smaller view changes, you have identified a condition worth investigating. You have not proved sensor damage or isolated capture from resizing and display. An unchanged result is also useful evidence about this particular test.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'One source cycle repeats every four columns',
        alt: 'The source tone cycle is dark, mid-gray, light, mid-gray, repeating from phase zero.',
        caption: 'Illustrative tones, not calibrated grayscale. Repeat this four-column cycle to reconstruct the sampling example.',
        items: [
          { label: 'Cycle position 0', detail: 'Dark; next at column 4.', color: '#202020' },
          { label: 'Cycle position 1', detail: 'Mid-gray; next at column 5.', color: '#8C8C8C' },
          { label: 'Cycle position 2', detail: 'Light; next at column 6.', color: '#F5F5F5' },
          { label: 'Cycle position 3', detail: 'Mid-gray; next at column 7.', color: '#8C8C8C' },
        ],
      },
      {
        type: 'swatches',
        title: 'Sampling every fifth column makes one broad cycle',
        alt: 'Source columns 0, 5, 10, 15, and 20 yield dark, gray, light, gray, and dark.',
        caption: 'Illustrative point sampling only. Five original cycles over the 20-column span become one apparent cycle in these retained tones.',
        items: [
          { label: 'Column 0', detail: 'Cycle position 0: dark.', color: '#202020' },
          { label: 'Column 5', detail: 'Cycle position 1: gray.', color: '#8C8C8C' },
          { label: 'Column 10', detail: 'Cycle position 2: light.', color: '#F5F5F5' },
          { label: 'Column 15', detail: 'Cycle position 3: gray.', color: '#8C8C8C' },
          { label: 'Column 20', detail: 'Cycle position 0: dark.', color: '#202020' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Phone', 'Paper', 'Pen or pencil'],
      steps: [
        'Draw a patch of close parallel lines and a patch with wider gaps. Photograph both together under steady ordinary light.',
        'Compare a detailed view and fit-to-screen. Note bands, missing lines, or no visible change for each patch.',
        'If existing controls allow it, inspect a smaller exported copy too. Record dimensions and viewing size; keep the original.',
        'Write which comparison changed the appearance. Leave the processing stage unknown unless you isolated it.',
      ],
      notice: 'Your record ties any false detail to a stated viewing condition rather than assuming it was on the paper.',
      troubleshooting: 'If no bands appear, keep that result. Different spacing and software filters need not produce a visible artifact.',
    },
    recall: {
      prompt: 'A striped shirt looks normal in the original clip but banded in a messaging preview. What should you compare before blaming the camera?',
      hint: 'Separate the original, exported file, and displayed preview.',
      answer: 'Inspect those stages at stated, comparable viewing sizes while changing one condition at a time. The preview difference alone does not locate the artifact in capture, compression, resizing, or display.',
    },
    quiz: {
      question: 'A poster\'s fine pattern changes only in one small preview. Which check best narrows the cause?',
      options: ['Increase sharpening before inspecting any output.', 'Replace the camera because the original contains fine lines.', 'Compare the original and output under matched viewing conditions, then vary one stage.'],
      correctIndex: 2,
      explanation: 'Controlled comparisons narrow where the pattern appears. Sharpening changes another variable; a preview artifact alone does not demonstrate a camera fault.',
    },
    takeaway: 'Inspect repeated detail at its delivered size and keep the cause separate from the observed artifact.',
    sourceNote: 'Cambridge in Colour is a specialist photography reference, not a university study. The tone cycle is an original simplified example; real resampling filters differ.',
  },
  {
    id: 'fg-015',
    title: 'Make a counter slow down without extending the sequence',
    outcome: 'Separate image count and hold duration from the distances traveled between stop-motion positions.',
    scene: 'A small paper counter crosses two 28-centimeter tracks, one evenly spaced and one planned to slow down.',
    sections: [
      {
        title: 'The same start and finish can contain different motion',
        paragraphs: [
          'A paper counter crosses a tabletop strip in eight still images. You want a second version that appears to slow near the finish, without making the sequence longer. Keep the camera, endpoints, image count, and time per image fixed. Change the intermediate positions. Stop motion constructs movement from those separate placements, so the distances between them determine how much travel the viewer sees during each equal time interval.',
        ],
      },
      {
        title: 'Mark two complete spacing plans',
        paragraphs: [
          'For a 28-centimeter track, use positions 0, 4, 8, 12, 16, 20, 24, and 28 for steady spacing. There are seven gaps of 4 centimeters. For the slowing version, use 0, 7, 13, 18, 22, 25, 27, and 28. Its gaps are 7, 6, 5, 4, 3, 2, and 1; they still sum to 28. The finish does not move. Travel is redistributed toward the early part of the sequence.',
        ],
      },
      {
        title: 'Count holds separately from position changes',
        paragraphs: [
          'If every image is held for 0.25 second, eight images last 8 times 0.25 = 2 seconds, including the final image hold. The seven changes from first position to last span 1.75 seconds. In the slowing version, the first step covers 7 centimeters per 0.25 second and the last covers 1 centimeter in the same time. Equal gaps would instead distribute travel evenly.',
          'This short study will look stepped rather than perfectly smooth. Keep framing and lighting stable so accidental camera movement does not disguise the spacing. If your existing editor cannot set equal still durations, compare the marked strips as plans. Swiping manually through a gallery cannot verify the intended timing, and a spacing plan is not a tested animation export.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Keep the camera and the two endpoints fixed',
        alt: 'A fixed phone views a strip with start at 0 centimeters and finish at 28 centimeters.',
        caption: 'Schematic capture arrangement. The counter visits both endpoints in each version; phone position is unchanged. Not drawn to scale.',
        items: [
          { label: 'Start: 0 cm', detail: 'Image 1 in both versions.', x: 18, y: 25, shape: 'circle' },
          { label: 'Finish: 28 cm', detail: 'Image 8 in both versions.', x: 82, y: 25, shape: 'circle' },
          { label: 'Supported phone', detail: 'Frame the whole marked strip.', x: 50, y: 80, shape: 'camera' },
        ],
        arrows: [{ from: 0, to: 1, label: '28 cm travel' }, { from: 2, to: 0 }, { from: 2, to: 1 }],
      },
      {
        type: 'bars',
        title: 'Three steps from the slowing sequence',
        alt: 'The first step covers 7 centimeters, the fourth 4, and the seventh 1, all per quarter second.',
        caption: 'Illustrative distances for three of the seven gaps. Equal time with shrinking distance means slowing; the full sequence still lasts 2 seconds.',
        unit: 'centimeters per 0.25 second',
        items: [
          { label: 'Images 1 to 2', detail: 'Position 0 to 7: gap 7.', value: 7 },
          { label: 'Images 4 to 5', detail: 'Position 18 to 22: gap 4.', value: 4 },
          { label: 'Images 7 to 8', detail: 'Position 27 to 28: gap 1.', value: 1 },
        ],
      },
    ],
    practice: {
      minutes: 15,
      needs: ['Scrap paper', 'Ruler', 'Small counter', 'Optional supported phone and existing editor'],
      steps: [
        'Mark two 28-centimeter strips using the complete position lists. Join scrap sheets if needed; label images 1 through 8.',
        'Check that both strips begin at 0 and end at 28. Calculate the seven gaps for each.',
        'If recording, photograph the counter at each mark without moving the phone or changing the lighting.',
        'Use equal 0.25-second holds if available. Otherwise retain the labeled plans and mark playback untested.',
      ],
      notice: 'The endpoints and image count match, but the second plan\'s gaps shrink from 7 to 1 centimeter.',
      troubleshooting: 'If duration differs, check hold settings and any automatic transitions. A manual gallery swipe is not an equal-time comparison.',
    },
    recall: {
      prompt: 'An icon must cover the same path in the same time but arrive more gently. Which variable would you change in its position plan?',
      hint: 'Keep the clock fixed and redistribute travel.',
      answer: 'Reduce position gaps near arrival and cover more distance earlier, preserving endpoints and timing. Smaller late gaps mean less travel per equal interval without extending the duration.',
    },
    quiz: {
      question: 'You double every still hold from 0.25 to 0.5 second without changing positions. What stays unchanged?',
      options: ['The 28-centimeter path and seven position gaps.', 'The 2-second total playback duration.', 'The amount traveled per second.'],
      correctIndex: 0,
      explanation: 'The positions stay fixed, but eight holds now total 4 seconds. Travel per unit time decreases; changing holds is different from changing spacing.',
    },
    takeaway: 'Spacing distributes movement inside the clock; image count and hold duration establish the sequence length.',
    sourceNote: 'The inherited Adobe pages are craft references. These positions and durations are original; no particular software, realism, or audience response is promised.',
  },
  {
    id: 'fg-016',
    title: 'Caption the sound when it becomes meaningful',
    outcome: 'Plan synchronized captions for speech and meaningful non-speech sound without substituting them for visual description.',
    scene: 'An original parcel scene uses an offscreen sentence and knock to motivate a visible movement.',
    sections: [
      {
        title: 'The knock explains the next action',
        paragraphs: [
          'A parcel sits in a 15-second tabletop scene. An offscreen voice says, The parcel is ready, from second 2 to second 4. A gentle offscreen knock occurs from second 7 to second 8. The parcel then moves toward the edge of the frame. A viewer who cannot hear needs the words and the knock to understand the audio information available at those moments. A dialogue-only transcript would omit why attention turns toward the unseen door.',
        ],
      },
      {
        title: 'Preserve information and its arrival time',
        paragraphs: [
          'Captions represent speech and meaningful sounds in synchronization with the recording. In this illustrative plan, the spoken sentence appears from 2 to 4 seconds and a knock description appears from 7 to 8 seconds. Displaying the knock from the beginning reveals information before it becomes audible. Speaker identification is useful when the distinction would otherwise be unclear, including an offscreen speaker whose identity matters.',
          'There is no need to label every quiet interval when silence carries no additional meaning. The parcel\'s later movement is visual information; describing that movement belongs to a separate accessibility decision, not an invented sound caption. Captions and audio description address different information channels.',
        ],
      },
      {
        title: 'Check the actual recording and exported result',
        paragraphs: [
          'Automatic speech text can miss words, speakers, and non-speech events. Listen back to your own recording, correct the wording, and place entries at the actual audible times rather than forcing them to match this sample clock. Check that captions remain readable without covering the action they help explain. A timestamped plan records what should be added; it does not mean the video contains working captions. If existing editing controls permit an export, play that output with captions enabled and compare it with the sound. Without those controls, keep the plan and label delivery untested.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Audio information in the parcel scene',
      alt: 'No necessary caption at 0 to 2 seconds; speech at 2 to 4; knock at 7 to 8; visual movement afterward.',
      caption: 'Illustrative timing, not a proportional scale. The quiet gap from 4 to 7 needs no entry here. Use your recording\'s actual sound times.',
      items: [
        { label: '0 to 2 seconds', detail: 'No meaningful audio to caption in this opening.' },
        { label: '2 to 4 seconds', detail: 'Offscreen voice: The parcel is ready.' },
        { label: '7 to 8 seconds', detail: '[Knock at door] appears with the sound, not earlier.' },
        { label: '8 to 15 seconds', detail: 'Parcel moves: visual information, not a sound caption.' },
      ],
    }],
    practice: {
      minutes: 12,
      needs: ['Phone', 'Small empty box', 'Paper or private note', 'Optional existing caption editor'],
      steps: [
        'Record your own 15-second scene using one spoken sentence and a gentle offscreen knock. Keep private people and information out of frame.',
        'Replay with sound and note when the sentence and knock actually start and stop. Write their caption text beside those times.',
        'Check wording and meaningful sounds. Remove any entry announcing the knock early.',
        'Add and inspect captions in an exported copy if existing controls allow. Otherwise retain the timestamped plan and label the video not yet captioned.',
      ],
      notice: 'The plan preserves the sentence and knock at their audible times; the later visible movement is not mislabeled as sound.',
      troubleshooting: 'If automatic captions omit the knock, add it manually. If no working output is available, report a plan rather than a captioned video.',
    },
    recall: {
      prompt: 'In a homemade mystery clip, music stops just before someone reacts. There is no speech. What caption information might matter, and when?',
      hint: 'Meaningful changes in sound can carry information without words.',
      answer: 'If the music stopping explains the reaction, indicate that change when it happens. Do not announce it early or describe an unseen cause the recording has not established.',
    },
    quiz: {
      question: 'A key clatter at second 6 makes a character turn. Which caption plan preserves that information?',
      options: ['Show the key-clatter caption throughout the clip for context.', 'Place an accurate key-clatter description at the audible event.', 'Describe only the character turning, because it is visible.'],
      correctIndex: 1,
      explanation: 'The second preserves the sound and its timing. An early caption changes the reveal; describing the reaction alone omits the audio event that motivated it.',
    },
    takeaway: 'Caption accurate speech and meaningful sound at the time the recording makes them audible.',
    sourceNote: 'The inherited W3C guide supports accurate synchronized captions. These scene timings are original; a plan does not verify playback or replace audio description.',
  },
  {
    id: 'fg-017',
    title: 'Match the ellipse opening to the circular face you see',
    outcome: 'Compare an ellipse\'s narrow and wide spans instead of drawing the same oval at every tilt.',
    scene: 'A plain circular lid is viewed near the center of vision at three comfortable tilts.',
    sections: [
      {
        title: 'The lid stays circular while its image changes',
        paragraphs: [
          'Hold a plain circular lid near the center of your view. Nearly face-on, its opening looks broad. Turn it toward an edge-on view and the opening becomes narrower, although the physical lid has not changed shape. A familiar drawing habit can override this observation: every rim becomes the same oval. Compare the opening you see before adding thickness, shine, or a decorative edge. Those details cannot correct a profile that belongs to a different tilt.',
        ],
      },
      {
        title: 'Use two spans to describe the opening',
        paragraphs: [
          'An ellipse\'s major axis is its longest span through the center. Its minor axis is the perpendicular, shorter span through the same center. The names give you two concrete checks: how wide and how open. On a planned 60-millimeter-wide ellipse, narrow spans of 48, 30, and 12 millimeters give ratios of 48/60 = 0.8, 30/60 = 0.5, and 12/60 = 0.2. The last profile is the most closed.',
          'These are illustrative drawing proportions, not measurements of your lid or a conversion from ratio to a particular viewing angle. The landmark diagram shows where the spans meet the rim for the 60 by 30 example.',
        ],
      },
      {
        title: 'Check the halves before decorating the contour',
        paragraphs: [
          'Mark the two axes lightly and compare the halves on either side. A lopsided contour may need a small correction even if its overall width and height seem right. Then look back at the lid: does the drawing open as much as that circular face does from this viewpoint? Keep your head steady while comparing. This is an introductory near-center observation exercise, not a complete perspective construction rule. Off-center views and wider perspective setups complicate simplified alignments, so do not force every ellipse to follow one habitual orientation.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Four rim landmarks for the middle opening',
        alt: 'Left and right rim landmarks define a 60-millimeter span; top and bottom define a perpendicular 30-millimeter span.',
        caption: 'Illustrative axis landmarks, not a traced ellipse or a scale drawing. Follow the dimension labels; the two spans cross at the center.',
        items: [
          { label: 'Left rim', detail: 'One end of the wide span.', x: 18, y: 50, shape: 'circle' },
          { label: 'Right rim', detail: 'Opposite end; 60 mm across.', x: 82, y: 50, shape: 'circle' },
          { label: 'Top rim', detail: 'One end of the narrow span.', x: 50, y: 18, shape: 'circle' },
          { label: 'Bottom rim', detail: 'Opposite end; 30 mm across.', x: 50, y: 82, shape: 'circle' },
        ],
        arrows: [{ from: 0, to: 1, label: '60 mm' }, { from: 2, to: 3, label: '30 mm' }],
      },
      {
        type: 'bars',
        title: 'Narrow spans when every wide span is 60 mm',
        alt: 'Three openings have narrow spans 48, 30, and 12 millimeters with ratios 0.8, 0.5, and 0.2.',
        caption: 'Illustrative profile measurements. A smaller narrow-to-wide ratio means a more closed opening; no tilt angle is inferred.',
        unit: 'millimeters of narrow span',
        items: [
          { label: 'Open profile', detail: '48 / 60 = 0.8.', value: 48 },
          { label: 'Middle profile', detail: '30 / 60 = 0.5.', value: 30 },
          { label: 'Closed profile', detail: '12 / 60 = 0.2.', value: 12 },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Plain circular lid', 'Paper', 'Pencil'],
      steps: [
        'Hold the lid comfortably near the center of view and keep your head in one position.',
        'Make three small drawings: nearly face-on, partly tilted, and nearer edge-on. Observe each position before drawing it.',
        'Mark the widest and perpendicular narrowest spans. Compare their proportions and the balance of the halves.',
        'Correct the opening that least matches the observed lid. Keep the first contour visible for comparison.',
      ],
      notice: 'The three openings differ with the observed tilts instead of repeating one memorized oval.',
      troubleshooting: 'If every sketch looks alike, compare only the narrow span. Do not force the illustrative 48, 30, and 12 measurements onto your lid.',
    },
    recall: {
      prompt: 'A bicycle wheel in a reference is viewed almost edge-on, but your sketch looks nearly circular. What relationship would you correct before adding spokes?',
      hint: 'Compare the short span with the long one.',
      answer: 'Reduce the drawn opening to match the observed narrow-to-wide relationship, then check symmetry and orientation. Extra spokes cannot repair the wrong projected opening.',
    },
    quiz: {
      question: 'A circular badge is drawn almost edge-on in this simplified view. Which 60-millimeter-wide profile is most closed?',
      options: ['A narrow span of 48 millimeters.', 'A narrow span of 30 millimeters.', 'A narrow span of 12 millimeters.'],
      correctIndex: 2,
      explanation: 'The 12-millimeter span gives the smallest ratio, 0.2. Physical circularity does not require a circular image when the face is tilted.',
    },
    takeaway: 'Match the observed opening with narrow and wide spans before adding rim detail.',
    sourceNote: 'The inherited Drawabox lesson supplies introductory ellipse terminology. The profiles are original schematics; simplified axis checks are not universal projective-geometry rules.',
  },
  {
    id: 'fg-018',
    title: 'Build tone from line spacing and crossing layers',
    outcome: 'Make distinct hatch tones without relying only on pressure, then use stroke direction to describe a curved surface.',
    scene: 'A ballpoint study compares four tonal patches and a curved paper ribbon.',
    sections: [
      {
        title: 'A pen leaves light between its marks',
        paragraphs: [
          'With a ballpoint, a patch becomes darker as ink covers more of the light paper. Pressing harder can also make marks harder to control. Draw a family of separated lines instead. Their gaps leave visible paper. Move the lines closer together and the patch reads darker without requiring a heavier grip. Hatching means building tone from those repeated strokes rather than rubbing them into a smooth blend.',
        ],
      },
      {
        title: 'Cross another family over the first',
        paragraphs: [
          'Crosshatching adds a second family of strokes in another direction. For a flat practice patch, one family can rise from lower left to upper right, and another can fall from upper left to lower right. The direction diagram isolates one stroke from each family; repeat neighboring strokes to form layers. No crossing angle is required. Keep pressure comfortable while deliberately changing spacing or layers.',
          'The four flat swatches are lightness targets, not pictures of actual ink. Aim for a spaced-line patch, a closer-line patch, one with a crossing layer, and a denser crossed patch. Leave your lightest area alone before additional ink closes its gaps.',
        ],
      },
      {
        title: 'Tone and direction do different jobs',
        paragraphs: [
          'Now curl a strip of paper and sketch its bend. Some hatch strokes can curve across the strip as though following its surface. Compare that drawing with a flat patch of similar darkness: equal tone does not automatically describe equal shape. Stroke direction can suggest the bend while density controls how light or dark an area reads. Check against the paper rather than applying the same diagonal pattern everywhere. Ink cannot restore a highlight; pens and papers differ.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Four tone targets for different mark coverage',
        alt: 'Four flat targets progress from light to dark for spaced lines, closer lines, crossing, and denser crossing.',
        caption: 'Illustrative lightness only, not simulated hatch marks or calibrated ink. Use spacing and layers to approach these differences on your paper.',
        items: [
          { label: 'Spaced lines', detail: 'More paper stays exposed.', color: '#E0DCD2' },
          { label: 'Closer lines', detail: 'Less light paper between strokes.', color: '#B3AFA4' },
          { label: 'Crossing layer', detail: 'A second family covers additional gaps.', color: '#77736A' },
          { label: 'Denser crossing', detail: 'More coverage; preserve planned highlights.', color: '#37352F' },
        ],
      },
      {
        type: 'spatial',
        title: 'Two crossing stroke directions on a flat patch',
        alt: 'One stroke runs from lower left to upper right, and another from upper left to lower right.',
        caption: 'Original direction sketch with one stroke per family. Arrows show drawing direction, not a required angle or finished shading.',
        items: [
          { label: 'First start', detail: 'Lower left of the patch.', x: 20, y: 80, shape: 'circle' },
          { label: 'First end', detail: 'Upper right of the patch.', x: 80, y: 20, shape: 'circle' },
          { label: 'Crossing start', detail: 'Upper left of the patch.', x: 20, y: 20, shape: 'circle' },
          { label: 'Crossing end', detail: 'Lower right of the patch.', x: 80, y: 80, shape: 'circle' },
        ],
        arrows: [{ from: 0, to: 1, label: 'first family' }, { from: 2, to: 3, label: 'crossing family' }],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Ballpoint or pencil', 'Paper', 'A scrap paper strip'],
      steps: [
        'Draw four small empty squares. Fill the first with separated strokes and the second with closer strokes at similar pressure.',
        'Add a crossing family in the third square and denser crossing in the fourth. Label what you changed.',
        'Curl the scrap strip without creasing it sharply and sketch its bend. Curve one family of strokes with the surface.',
        'Compare the ribbon with a flat patch of similar darkness. Mark one place where direction describes the bend.',
      ],
      notice: 'The swatches differ in tone, and the ribbon uses direction as well as darkness to describe its surface.',
      troubleshooting: 'If all patches become equally dark, stop adding ink. Make a fresh light patch with wider gaps rather than pressing harder.',
    },
    recall: {
      prompt: 'A drawn pear has a dark shaded side but still looks like a flat cutout. What could you compare besides adding more ink?',
      hint: 'Look at how strokes relate to the observed surface.',
      answer: 'Compare contour and stroke direction with the pear\'s curvature. A family following the form can describe something a uniformly diagonal patch misses; darkness alone does not establish volume.',
    },
    quiz: {
      question: 'Your ballpoint midtone patch became too dark. What change best makes the next patch lighter?',
      options: ['Leave wider gaps or use fewer layers at similar pressure.', 'Add a dense crossing layer to smooth the patch.', 'Keep the same coverage but turn every line to another angle.'],
      correctIndex: 0,
      explanation: 'Wider gaps or fewer layers expose more light paper. Additional crossing adds coverage; changing direction alone does not reliably reduce it.',
    },
    takeaway: 'Use coverage for tone and direction for surface, preserving light paper before adding ink.',
    sourceNote: 'The inherited LACMA teaching article supports layered and directional hatching. These targets and diagrams are original craft studies, not copied artwork or universal mark-making rules.',
  },
  {
    id: 'fg-019',
    title: 'Suggest ridges with selected cast shadows',
    outcome: 'Choose shadow shapes caused by blocked light and omit some detail without outlining every surface feature.',
    scene: 'Ridged cardboard under side light becomes two drawing studies: full outlines and selected shadows.',
    sections: [
      {
        title: 'Outlining every ridge gives every ridge equal attention',
        paragraphs: [
          'Place ridged cardboard under side light and look across its surface. One drawing approach traces every small edge. Another records selected dark shapes beside the ridges and leaves some paper untouched. The second can suggest repeated relief without closing a contour around every raised strip. You are choosing which visible relationships to preserve, not decorating the page with a memorized zigzag texture. Start from a surface you can inspect rather than a pattern symbol you already know.',
        ],
      },
      {
        title: 'Trace why one particular patch is dark',
        paragraphs: [
          'A cast shadow falls where one form blocks light from reaching another surface. In the cross-section sketch, light comes from the upper left, reaches a ridge, and is blocked from the patch behind it on the right. A different patch to the left still receives light. The arrows end at the ridge or the lit paper; no light ray is drawn passing through the blocked patch.',
          'Dark printed pigment is different: it can stay dark while illumination changes. A surface turning away from light creates form shading, also distinct from a cast shadow. Reflections can produce further dark appearances. For this narrow study, choose patches whose blocked-light relationship you can identify and mark doubtful ones as uncertain.',
        ],
      },
      {
        title: 'Omit marks without losing the surface relationship',
        paragraphs: [
          'Draw one patch with ridge outlines, then another with selected cast-shadow shapes. In the second, keep enough observed shadows to establish the spacing and direction of ridges, while leaving some neighboring shapes out. Inspect whether the larger surface still reads without every edge being equally explicit. This is implicit texture: the marks suggest small forms without outlining each one. It is a craft option, not a rule against outlines. If selective omission makes the surface unreadable, restore one observed shadow relationship before filling every gap with ink.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'A ridge blocks light from the patch behind it',
      alt: 'Light at upper left reaches a ridge or an exposed patch; the patch behind the ridge at lower right is in cast shadow.',
      caption: 'Illustrative cross-section, not measured lighting. Arrows stop at the ridge and exposed paper. The shaded patch lies behind the obstruction, away from the light.',
      items: [
        { label: 'Side light', detail: 'Arrives from the upper left.', x: 18, y: 18, shape: 'light', color: '#F1C766' },
        { label: 'Raised ridge', detail: 'Blocks light toward the patch behind it.', x: 50, y: 50, shape: 'object', color: '#B59C79' },
        { label: 'Cast-shadow patch', detail: 'Blocked illumination, not printed pigment.', x: 82, y: 82, shape: 'paper', color: '#38312C' },
        { label: 'Exposed paper', detail: 'Receives light along an unobstructed path.', x: 18, y: 82, shape: 'paper', color: '#F7F1E7' },
      ],
      arrows: [{ from: 0, to: 1, label: 'blocked here' }, { from: 0, to: 3, label: 'reaches paper' }],
    }],
    practice: {
      minutes: 10,
      needs: ['Ridged cardboard or a crumpled paper strip', 'Paper', 'Pencil', 'Ordinary side light'],
      steps: [
        'Place the material where light comes from one side. Mark that direction on your drawing page; keep paper away from hot lamps.',
        'Identify a ridge and the patch it shadows. Set aside printed or uncertain dark areas instead of treating every dark mark alike.',
        'Make two small studies: one outlining ridges, another using only selected observed cast-shadow shapes.',
        'Leave out some neighboring shadows in the second study. Compare what still communicates the surface, and restore one relationship if needed.',
      ],
      notice: 'The second study suggests ridges with fewer explicit boundaries, using shadows whose cause you can explain.',
      troubleshooting: 'If no shadow is clear, gently change the material\'s angle in ordinary light. If the cause remains uncertain, leave the patch unclassified.',
    },
    recall: {
      prompt: 'A patterned fabric has dark printed dots and darker patches beside folds. Which marks belong in a cast-shadow-only study, and what must you check?',
      hint: 'Ask what blocks the illumination, not merely what is dark.',
      answer: 'Select patches where a fold blocks light from another surface, after checking the lighting relationship. Printed dots and dark reflections do not qualify merely because their values are low.',
    },
    quiz: {
      question: 'Which observed patch best fits the cardboard shadow study?',
      options: ['A black printed stripe that remains dark across lighting changes.', 'A patch behind a ridge where the ridge blocks the side light.', 'A dark face of a ridge turned away from the light, without another form blocking it.'],
      correctIndex: 1,
      explanation: 'The blocked patch is a cast shadow. The printed stripe is pigment; the turned surface can be form shading, which this particular exercise excludes.',
    },
    takeaway: 'Choose observed blocked-light shapes and deliberate omissions instead of outlining every texture feature.',
    sourceNote: 'The inherited Drawabox texture lesson presents a shadow-focused exercise. This original cardboard study does not claim that all texture must exclude outlines or that every dark area is a shadow.',
  },
  {
    id: 'fg-020',
    title: 'Transfer a sketch through matching grid cells',
    outcome: 'Enlarge an original contour with equal horizontal and vertical scale factors while checking corresponding landmarks.',
    scene: 'An original leaf silhouette moves from a 4-centimeter square into an 8-centimeter square.',
    sections: [
      {
        title: 'Enlargement preserves relationships inside the frame',
        paragraphs: [
          'You have a small leaf silhouette you like and want a larger version without redesigning it. Draw it inside a 4 by 4 centimeter square, divided into four rows and four columns. Make an 8 by 8 centimeter target square with the same grid divisions. The source cells are 1 centimeter wide and high; the target cells are 2. Corresponding cells identify where each piece of contour belongs while both dimensions grow by the same factor.',
        ],
      },
      {
        title: 'Transfer landmarks before joining curves',
        paragraphs: [
          'Measure positions from the upper-left corner, with horizontal distance first and downward distance second. In an illustrative leaf, the tip at (2, 0.5) centimeters becomes (4, 1). The stem join at (2, 3.5) becomes (4, 7). The widest left point at (0.75, 2) becomes (1.5, 4), and the widest right point at (3.25, 2) becomes (6.5, 4). Every coordinate is multiplied by 2.',
          'You can also work cell by cell: halfway across a source cell stays halfway across its matching target cell. Mark where the contour crosses grid borders, then draw the curves between those anchors. The grid supplies locations, not a new leaf shape.',
        ],
      },
      {
        title: 'A matching cell count does not guarantee matching proportions',
        paragraphs: [
          'If you widen the target to 8 centimeters but keep its height at 4, horizontal positions double while vertical positions do not. The leaf stretches sideways even though both grids still have four rows and four columns. Check frame dimensions before transferring detail. A grid also faithfully copies a mistake in the original, so compare the tip, stem join, and widest points while both versions remain visible. The historical squaring method concerns proportional transfer; it does not guarantee a better composition or correct the drawing for you.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Four target landmarks in the 8 cm square',
      alt: 'Target leaf tip at 4,1; stem join at 4,7; widest left at 1.5,4; widest right at 6.5,4 centimeters.',
      caption: 'Schematic landmarks measured from upper left, not to screen scale. Use the centimeter labels. Arrows give contour order, not straight leaf edges; draw connecting curves on paper.',
      items: [
        { label: 'Tip', detail: '(4, 1) cm; source was (2, 0.5).', x: 50, y: 12.5, shape: 'circle' },
        { label: 'Stem join', detail: '(4, 7) cm; source was (2, 3.5).', x: 50, y: 87.5, shape: 'circle' },
        { label: 'Widest left', detail: '(1.5, 4) cm; source was (0.75, 2).', x: 18.75, y: 50, shape: 'circle' },
        { label: 'Widest right', detail: '(6.5, 4) cm; source was (3.25, 2).', x: 81.25, y: 50, shape: 'circle' },
      ],
      arrows: [{ from: 0, to: 3 }, { from: 3, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 0 }],
    }],
    practice: {
      minutes: 12,
      needs: ['Paper', 'Pencil', 'Ruler'],
      steps: [
        'Draw your own leaf contour inside a 4-centimeter square. Divide it into four equal rows and columns.',
        'Draw an 8-centimeter target square with the same divisions. Check that each target cell is 2 by 2 centimeters.',
        'Locate the tip, stem join, and widest points in their source cells. Transfer the same within-cell positions to the target.',
        'Mark contour crossings at cell borders, then connect them with curves while consulting the original.',
        'Compare the landmarks before adding veins. Correct a mismatch without hiding the source sketch.',
      ],
      notice: 'Landmarks occupy corresponding fractions of cells, and both dimensions share the same enlargement factor.',
      troubleshooting: 'If the leaf looks stretched, check the frame dimensions first. More contour detail cannot repair unequal scale factors.',
    },
    recall: {
      prompt: 'A 6 by 4 centimeter emblem must fit a 12 by 6 frame. Would filling that frame preserve proportions? Suggest a proportional size.',
      hint: 'Divide each target dimension by its corresponding source dimension.',
      answer: 'The factors would be 12/6 = 2 and 6/4 = 1.5, so filling stretches it. A 9 by 6 version scales both dimensions by 1.5 and leaves horizontal space.',
    },
    quiz: {
      question: 'Which target preserves the proportions of a 12 by 8 centimeter sketch?',
      options: ['16 by 12 centimeters.', '18 by 10 centimeters.', '18 by 12 centimeters.'],
      correctIndex: 2,
      explanation: '18/12 and 12/8 both equal 1.5. The other rectangles use unequal horizontal and vertical factors, regardless of grid cell count.',
    },
    takeaway: 'Transfer positions inside corresponding cells and scale both directions by the same factor.',
    sourceNote: 'The inherited Royal Academy article explains squaring for transfer. The leaf and coordinates are original; the grid preserves errors as well as intended relationships.',
  },
  {
    id: 'fg-021',
    title: 'Keep the words people see inside the control name',
    outcome: 'Compare a visible label with an intended accessible name and preserve the visible phrase before testing implementation.',
    scene: 'A sketch-gallery button visibly says Save sketch while its hidden name uses a different phrase.',
    sections: [
      {
        title: 'One button can present two different names',
        paragraphs: [
          'A gallery button shows Save sketch. Its accessible name is Add artwork to collection. Someone using speech input reads the visible words and tries to activate Save sketch, while the software receives a different name for the control. The two phrases describe related intentions, but similarity of meaning does not guarantee that a spoken command will match. A polished button face cannot reveal this mismatch because the name used by assistive software is not necessarily printed on the screen.',
        ],
      },
      {
        title: 'Include the visible label, not a paraphrase',
        paragraphs: [
          'The browser computes an accessible name from available labeling information, such as the control\'s text, an associated label, or ARIA naming. An explicit ARIA name can override visible text. WCAG 2.5.3, Label in Name at Level A, requires the name to contain the visible text label for controls within its scope. Adding a different hidden phrase is not automatically an accessibility improvement.',
          'Save sketch to collection preserves Save sketch and adds context afterward. Save this new sketch interrupts the visible phrase. Starting the name with the label is a best practice, rather than an additional requirement. Minor capitalization and punctuation differences are not the word-substitution problem illustrated here.',
        ],
      },
      {
        title: 'A written name is still a specification',
        paragraphs: [
          'On paper, compare the visible label and proposed name before implementation. The same check applies to Rename and Download PNG: keep their visible wording when extra context is necessary. In the working interface, inspect the computed accessible name, since the result can differ from the intended string when several naming mechanisms interact. Then test the actual control\'s behavior. Matching these strings does not establish correct semantics, keyboard access, or compatibility with every speech tool. This criterion is one specific naming check, not a certificate for the whole interface.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Two proposed names for the visible Save sketch button',
      alt: 'Add artwork to collection omits Save sketch; Save sketch to collection retains the visible phrase.',
      caption: 'Illustrative name specifications, not inspected browser output. Compare the exact visible phrase Save sketch in each proposed name.',
      items: [
        { label: 'Add artwork to collection', detail: 'Related meaning, but the visible phrase Save sketch is absent.' },
        { label: 'Save sketch to collection', detail: 'The visible phrase stays intact before the added context.' },
      ],
    }],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Pen'],
      steps: [
        'Make visible-label and intended-name columns for Save sketch, Rename, and Download PNG.',
        'Put Add artwork to collection beside Save sketch. Underline which visible words are missing.',
        'Repair that name and propose the other two names, preserving each visible phrase intact and in order.',
        'Add a later check for the computed name and actual operation. Mark those implementation checks untested on this paper specification.',
      ],
      notice: 'Each proposed name retains its visible phrase, and the specification distinguishes written intent from a verified computed name.',
      troubleshooting: 'If a name only shares the same meaning, copy the visible phrase first and add necessary context without inserting words inside it.',
    },
    recall: {
      prompt: 'A course control visibly says Next chapter but is named Continue learning for software. What would you change and then verify?',
      hint: 'Keep the visible wording available as the command people can read.',
      answer: 'Use a name containing Next chapter, adding context if needed. Verify the computed name in the real control and test operation; editing a design label alone does not establish what the browser exposes.',
    },
    quiz: {
      question: 'A button visibly says Upload photo. Which proposed name preserves that phrase while identifying its destination?',
      options: ['Upload photo to album.', 'Upload a new photo to album.', 'Add image to album.'],
      correctIndex: 0,
      explanation: 'The first keeps Upload photo intact. The second inserts words into the phrase, and the third replaces it with a paraphrase.',
    },
    takeaway: 'Keep the visible label in the accessible name, then verify the name the actual implementation computes.',
    sourceNote: 'The inherited W3C Label in Name page was spot-checked: Level A, with label-first naming recommended rather than separately required. These examples are specifications, not an accessibility audit.',
  },
  {
    id: 'fg-022',
    title: 'Give modal focus an entry, a loop, and a return route',
    outcome: 'Specify the complete keyboard focus lifecycle of a modal, including a logical fallback when its opener disappears.',
    scene: 'A field-recording list opens a short Rename clip dialog with a title field, Save, and Cancel.',
    sections: [
      {
        title: 'The overlay has to change the keyboard journey',
        paragraphs: [
          'A recording list has a Rename clip button. Activating it opens a small dialog with a title field, Save, and Cancel. A mouse user sees the rectangle over the list, but a keyboard user also needs focus to enter it. Focus identifies which element receives keyboard interaction. While this modal is active, the background list is unavailable; a dimmed appearance alone does not implement that behavior. The journey begins before the first edit and ends after the overlay closes.',
        ],
      },
      {
        title: 'Choose entry for the content and contain Tab movement',
        paragraphs: [
          'For this short rename form, initial focus on the title field is a sensible plan. Tab then moves to Save, then Cancel, then back to the title field. Shift+Tab follows the reverse order. The opener is outside that active loop. Escape closes the dialog, and Cancel supplies a visible close action. These are behaviors, not results obtained merely by naming the overlay modal.',
          'Initial focus is content-dependent. A long explanation may need focus on an appropriate static element near its start so the beginning remains available. An irreversible confirmation may warrant starting on the least destructive action. Do not turn the title-field choice into a rule that every dialog starts in its first input.',
        ],
      },
      {
        title: 'Return to an element that still exists',
        paragraphs: [
          'After cancellation or a successful rename, focus normally returns to the Rename clip opener. If the opener disappears, perhaps because its recording was removed, specify a useful remaining destination. Another recording\'s rename button or an Add recording button for an empty list can fit the next step. A reference to a removed control cannot receive focus. Plan this exception before implementation, then test the actual keyboard behavior. The W3C modal pattern describes the lifecycle but does not certify accessibility merely because a diagram follows it.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'The title field, Save, and Cancel form the active loop',
      alt: 'Rename clip opens into the title field. Tab cycles through title, Save, and Cancel; Cancel closes and returns to the opener.',
      caption: 'Illustrative focus-route map, not a screen layout. The opener is outside the modal loop. Shift+Tab reverses the Tab route.',
      items: [
        { label: 'Rename clip opener', detail: 'Outside modal; usual return destination.', x: 18, y: 50, shape: 'box' },
        { label: 'Title field', detail: 'Initial focus for this short form.', x: 50, y: 18, shape: 'box' },
        { label: 'Save', detail: 'Second Tab stop in this plan.', x: 82, y: 50, shape: 'box' },
        { label: 'Cancel', detail: 'Last Tab stop; also closes the dialog.', x: 50, y: 82, shape: 'box' },
      ],
      arrows: [
        { from: 0, to: 1, label: 'open' },
        { from: 1, to: 2, label: 'Tab' },
        { from: 2, to: 3, label: 'Tab' },
        { from: 3, to: 1, label: 'Tab wraps' },
        { from: 3, to: 0, label: 'close and return' },
      ],
    }],
    practice: {
      minutes: 10,
      needs: ['Paper', 'Pen', 'A small focus token'],
      steps: [
        'Draw the recording list, Rename clip opener, and three dialog controls. Mark the background unavailable while the modal is open.',
        'Move the token from opener to title field. Trace Tab through Save and Cancel and back, then trace Shift+Tab in reverse.',
        'Try Escape and Cancel as separate closing routes. Return the token to the opener after each.',
        'Remove the opener from the drawing and repeat closing. Choose a remaining task-relevant button; label implementation behavior untested.',
      ],
      notice: 'Every opening, Tab boundary, and closing path ends at a specified, available focus destination.',
      troubleshooting: 'If the token reaches the background before closing, repair containment. If its return target is gone, choose a real remaining control.',
    },
    recall: {
      prompt: 'Deleting the last saved item closes its confirmation and removes its opener. Where could focus go, and why?',
      hint: 'Choose something available that supports the next sensible action.',
      answer: 'An Add item or Browse items control can provide a useful next step in the now-empty collection. Returning to the deleted item is impossible; the actual destination must exist and accept focus.',
    },
    quiz: {
      question: 'A modal has Theme, Preview, and Close as its Tab stops. Focus is on Close, the last stop. What should Tab do while the modal stays open?',
      options: ['Return to the opener behind the overlay.', 'Continue to the next control on the background page.', 'Move to Theme, the first stop inside the modal.'],
      correctIndex: 2,
      explanation: 'Tab wraps within an active modal. Returning to the opener belongs to closing; continuing into the background breaks containment.',
    },
    takeaway: 'Specify modal entry, contained movement, dismissal, and return focus as one keyboard lifecycle.',
    sourceNote: 'The inherited W3C APG modal guidance was spot-checked, including content-dependent entry and return exceptions. This paper plan is not an implementation or WCAG conformance test.',
  },
  {
    id: 'fg-023',
    title: 'Keep the saved result when optional movement is disabled',
    outcome: 'Specify a stationary equivalent for interaction feedback while preserving state, destination, and the next action.',
    scene: 'A recipe card normally travels into a Weekend collection after saving; a second specification removes that travel.',
    sections: [
      {
        title: 'What did the flying recipe card tell you?',
        paragraphs: [
          'A recipe app shows a card flying into the Weekend collection after you press Save. That motion communicates a destination and a successful state change. A person who disables optional motion still needs those facts. Simply removing the animation without showing a saved state leaves uncertainty about whether the action worked. Begin by writing the information the effect carries, rather than trying to preserve a shorter version of its travel.',
        ],
      },
      {
        title: 'Specify the same endpoints without travel',
        paragraphs: [
          'In the stationary version, Save changes to Saved, a nonmoving message says Saved to Weekend, and Undo remains available. No card travels, zooms, or bounces. The result and destination remain visible without depending on color alone. Preserve a meaningful focus position instead of moving the user to the collection just to demonstrate success. The comparison matrix shows identical before and after information for both preference settings; movement is an optional way of connecting those states.',
          'Making a flight take half as long still leaves a flight. A nonmoving alternative must remove the optional movement, not only reduce its duration or distance. Likewise, suppressing the success message removes information rather than merely changing its presentation.',
        ],
      },
      {
        title: 'State how the alternative is selected',
        paragraphs: [
          'WCAG 2.3.3, Animation from Interactions at Level AAA, requires a way to disable interaction-triggered motion unless it is essential to the functionality or information. Specify a control or supported user preference that selects the nonmoving version. An operating-system reduced-motion preference can inform that behavior where supported, but the implementation must actually honor it. Automatically started animation has separate considerations. This paper exercise does not require watching a provocative demonstration or assessing anyone\'s sensitivity. Later testing should verify preference handling, preserved information, and access to the next action, rather than claiming success from two attractive screenshots.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Motion setting by interaction state',
      alt: 'For both motion-on and motion-off settings, the initial control is Save and the final state is Saved to Weekend with Undo.',
      caption: 'Illustrative UI specifications. Rows are motion settings; columns are before and after. Both final states retain the same information without requiring travel.',
      items: [
        { label: 'Motion on / before', detail: 'Save is available; recipe is not yet saved.' },
        { label: 'Motion on / after', detail: 'Saved; Saved to Weekend; Undo. A card flight may connect the states.' },
        { label: 'Motion off / before', detail: 'Save is available; recipe is not yet saved.' },
        { label: 'Motion off / after', detail: 'Saved; Saved to Weekend; Undo. No travel, zoom, or bounce.' },
      ],
    }],
    practice: {
      minutes: 9,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw the recipe card before saving and write what its usual movement communicates: completion and destination.',
        'Draw a nonmoving after-state with Saved, Saved to Weekend, and Undo. Do not rely on a changed color alone.',
        'Name an in-app control or supported platform preference that selects this version. State that optional travel, zoom, and bounce are removed.',
        'Compare the two versions for result, destination, focus, and next action. Mark preference handling and actual accessibility untested.',
      ],
      notice: 'The nonmoving specification still says what happened, where the recipe went, and how to undo it.',
      troubleshooting: 'If your alternative only speeds up the flight, replace it with an immediate state update and stationary feedback.',
    },
    recall: {
      prompt: 'A course completion screen normally swirls a checkmark before revealing Continue. What would a nonmoving equivalent need to preserve?',
      hint: 'Separate the completion information from the decorative movement.',
      answer: 'Show a stationary completion indicator with an explicit text label and make Continue available without waiting for a swirl. Preserve the next action and meaningful focus while honoring the selected preference.',
    },
    quiz: {
      question: 'A user disables optional save animation. Which alternative retains its information without the movement?',
      options: ['Make the card travel to the collection faster.', 'Update Saved and show a stationary destination message with Undo.', 'Remove the travel and show only a brief destination-icon color change.'],
      correctIndex: 1,
      explanation: 'The second keeps completion, destination, and reversal explicit. Faster travel is still movement; a brief color-only signal does not provide the same clear information.',
    },
    takeaway: 'Preserve the state change and its meaning while removing optional interaction motion.',
    sourceNote: 'The inherited W3C criterion is Level AAA and concerns interaction-triggered motion, with an essential-motion exception. These original paper states do not verify software preference support.',
  },
  {
    id: 'fg-024',
    title: 'Reserve the image footprint before the preview arrives',
    outcome: 'Calculate an aspect-ratio placeholder that prevents an image from pushing a control down while allowing text to grow.',
    scene: 'A sketch preview loads between an already visible title and Save button on a phone card.',
    sections: [
      {
        title: 'A late picture moves a button that was already available',
        paragraphs: [
          'A sketch card shows its title and Save button before the preview downloads. When the image arrives, the button moves downward. A person who was about to select it now has to find it again. Faster downloads can shorten the delay but do not explain how to keep the layout stable when an image arrives late. The relevant design question is how much space the preview occupies before its pixels are available.',
        ],
      },
      {
        title: 'Compute the intended image rectangle',
        paragraphs: [
          'The preview has a 4:3 width-to-height ratio. At 240 CSS pixels wide, its height is 240 times 3/4 = 180 CSS pixels. Reserve that image footprint in the loading state using intended dimensions or aspect ratio. The empty slot and the loaded image then occupy the same height at that width.',
          'For an illustrative coordinate check, let the image start 80 pixels below the card\'s top and leave 12 pixels between its bottom and Save. Without reserved height, Save starts at 80 + 12 = 92. After loading it starts at 80 + 180 + 12 = 272, a shift of 180. With the 180-pixel slot already present, Save starts at 272 in both states.',
        ],
      },
      {
        title: 'Reserve media space without freezing the whole card',
        paragraphs: [
          'The diagram holds the preceding title height constant to isolate the image arrival. A longer title or larger text should still be allowed to wrap and make the card grow. Fixing the entire card height and clipping text trades one problem for another. Image reservation addresses one cause of layout shift; font changes and later inserted content can still move things. It also does not speed up the download. A paper coordinate comparison predicts a layout relationship, not a measured Cumulative Layout Shift score or a verified comfortable interaction.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Reserved loading and loaded states keep Save aligned',
      alt: 'Both states reserve a 240 by 180 pixel preview starting at y 80; Save begins at y 272 in each.',
      caption: 'Illustrative CSS-pixel coordinates with unchanged title height. Left is loading and right loaded; inspect matching Save positions, not the schematic symbol sizes.',
      items: [
        { label: 'Loading slot', detail: '240 by 180; top y = 80, bottom y = 260.', x: 24, y: 25, shape: 'paper' },
        { label: 'Loaded preview', detail: 'Same rectangle: 240 by 180; bottom y = 260.', x: 76, y: 25, shape: 'paper' },
        { label: 'Save while loading', detail: 'Top y = 260 + 12 = 272.', x: 24, y: 80, shape: 'box' },
        { label: 'Save after loading', detail: 'Top y = 260 + 12 = 272.', x: 76, y: 80, shape: 'box' },
      ],
      arrows: [{ from: 0, to: 1, label: 'image arrives' }, { from: 2, to: 3, label: 'same position' }],
    }],
    practice: {
      minutes: 10,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        'Sketch a 240-pixel-wide preview area and compute its height for a 4:3 image. Label the height 180.',
        'Use the illustrative top position of 80 and gap of 12. Draw unreserved before and after states with Save at 92 and 272.',
        'Redraw the loading state with the image slot present. Verify Save now starts at 272 both before and after loading.',
        'Try a longer title and let the card grow. Keep the image ratio, rather than fixing the whole card height or clipping text.',
      ],
      notice: 'Image arrival adds no height in the reserved comparison, while longer text remains free to wrap.',
      troubleshooting: 'If the button still shifts in your drawing, compare slot height with final image height. Keep other dimensions unchanged while isolating this cause.',
    },
    recall: {
      prompt: 'A 3:4 portrait preview is 180 pixels wide, but its placeholder is a 180-pixel square. How much height is missing if the image keeps its ratio?',
      hint: 'Multiply width by the height-to-width ratio.',
      answer: 'The portrait needs 180 times 4/3 = 240 pixels of height. The placeholder is 60 pixels short, so reserve 240 rather than freezing the surrounding card.',
    },
    quiz: {
      question: 'A 4:3 preview will be 320 pixels wide. Which loading specification matches its footprint without clipping surrounding content?',
      options: ['Reserve 240 pixels of image height and let text wrap.', 'Reserve 320 pixels of image height because the width is 320.', 'Fix the entire card at 240 pixels high, including title and controls.'],
      correctIndex: 0,
      explanation: '320 times 3/4 equals 240. Reserve the image rectangle, not a square or a fixed-height card that restricts text and controls.',
    },
    takeaway: 'Reserve the media rectangle early and leave the surrounding text layout flexible.',
    sourceNote: 'The inherited web.dev guide explains reserved media space and layout-shift limits. Coordinates are original examples; no CLS measurement, download improvement, or complete stability is claimed.',
  },
]