import type { LessonGuide } from './types'

// Original teaching, scenarios, and schematic visuals. Sources are inherited by ID.
// Practice durations are suggested budgets, not experimentally established doses.
export const fieldGuides: LessonGuide[] = [
  {
    id: 'fg-001',
    title: 'Check why the worst week became the starting point',
    outcome: 'Explain why a rebound after a worst-ever week does not, on its own, show that the help which arrived after it worked, and say what kind of comparison would.',
    scene: 'A volunteer newsletter selects its worst week of late listings for extra editing help.',
    sections: [
      {
        title: 'The week that attracted attention',
        paragraphs: [
          'A volunteer newsletter puts out 20 listings every week. In this invented log, 5 were late in week one and 6 in week two. Then week three happened: 15 late listings out of 20. Someone asks for extra editing help, and a helper arrives. The next week, 7 listings are late. At the next meeting a grateful voice says the helper prevented 8 delays, because 15 minus 7 is 8.',
          'The subtraction is right. The story attached to it is the problem. Notice why the helper arrived at all: because week three was the worst week anyone could remember. The help was triggered by an extreme. That one fact changes how much the drop to 7 can tell you, and it is the thing almost everyone forgets to mention.',
        ],
      },
      {
        title: 'An extreme result contains more than a persistent problem',
        paragraphs: [
          'Think about the day you felt worst with a cold. If you took a new remedy that day, you would probably feel better the next day, and the remedy would get the credit. But you chose to act on your worst day, and the worst day of a cold is followed by a better day whether you take anything or not. The remedy might work. The timing just cannot show it.',
          'A weekly count mixes two things. One is the team\'s ongoing situation, like a slow approval process that costs a few late listings every week. The other is temporary noise: a contributor on holiday, a broken email, three people who all happened to run late in the same seven days. Picking the highest count picks a week where the noise piled up in one direction. Noise does not usually pile up the same way twice. So an extreme week tends to be followed by a less extreme one, even if nothing is done. Statisticians call this regression toward the mean. It is a tendency across many cases, not a rule for any single week. Week four could have been worse. And real help can be working at the same time as the natural settling back.',
        ],
      },
      {
        title: 'Keep the improvement and question its attribution',
        paragraphs: [
          'Write the result the careful way: 8 fewer late listings in the week after help arrived. Not 8 delays prevented by the helper. The first sentence is a fact from the log. The second is a claim about cause, and the log cannot support it alone.',
          'Then ask what would. The two earlier weeks, at 5 and 6, suggest that 15 was unusual, though three weeks is far too short to know the team\'s true normal. A fair comparison would look at similar teams or similar periods, check their workload, and ask how help was assigned. If contributors everywhere became more punctual in week four, perhaps because a deadline reminder went out, the helper\'s share shrinks. The practical habit is to keep two notes beside any improvement: how the starting point was chosen, and what else could explain the change.',
        ],
      },
      {
        title: 'Why this mistake is so easy to make',
        paragraphs: [
          'Help is almost always sent to the worst case, because that is where help seems most needed. That means the before-and-after comparison is almost always measured from an extreme. The result is a steady supply of interventions that look brilliant simply because they arrived on a bad day. The cold remedy, the new coach hired after a losing streak, the crackdown after a record month of complaints: all of them inherit the rebound.',
          'Two habits. When something improved after you acted, ask first why you acted then; if the answer is because it was the worst it had ever been, treat the rebound as expected and look for better evidence. And keep the observed change in your notes anyway, labelled as a change, because weakening an attribution is not the same as proving the help did nothing.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'The selected starting week is the tallest bar',
      alt: 'Late listings across four weeks: 5, 6, 15, and 7. Help begins after the week with 15.',
      caption: 'Look at the third bar first. Help was requested because this bar was the tallest, so the drop to 7 is measured from an extreme. Compare week four with weeks one and two as well, not only with week three. Illustrative counts, 20 listings each week.',
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
        'Copy the four weekly counts, 5, 6, 15, 7, and note that each week has 20 listings. Circle week three and write beside it why help was requested: because it was the worst. That reason is the whole lesson.',
        'Calculate the change from week three to week four and write it as 8 fewer late listings. Label it a change. Do not write effect or prevented, because those words claim a cause the log cannot show.',
        'Write two possible explanations side by side: the extra editing help, and a temporary pile-up of late contributors that did not repeat. Both fit the numbers equally well, which is the point.',
        'Name one comparison you would want, such as a similar team that got no help, and one condition it would have to match, like workload or the rule for receiving help. Without a matching condition the comparison proves little.',
      ],
      notice: 'Your note keeps the drop of 8, names how week three was selected, and leaves the cause open. Nothing has been thrown away and nothing has been over-claimed.',
      troubleshooting: 'If you have written that the help did nothing, soften that too. Extreme selection weakens the case for the helper; it does not make the case against. The honest position is that the log cannot tell you either way.',
    },
    recall: {
      prompt: 'You replace your drawing pencil after your best-ever sketch. The next drawing receives a lower score. Why is blaming the pencil premature?',
      hint: 'An unusually good starting point can include favorable temporary influences too.',
      answer: 'Your best-ever sketch was picked out because it was extreme, and extremes have luck in them: a subject that suited you, a good day, a generous scorer. The next drawing was always likely to score lower, new pencil or old, just as the day after your worst cold symptoms was always going to feel better. It is the cold remedy in reverse. To judge the pencil, draw several comparable sketches with each one and compare the averages, not one peak against one follow-up.',
    },
    quiz: {
      question: 'A club revises its reminder after its least-attended event. Attendance rebounds. Which detail most directly exposes extreme selection?',
      options: [
        'The new reminder was sent earlier than the previous reminder.',
        'The club chose that event because attendance was the lowest on record.',
        'Both events used the same room and registration form.',
      ],
      correctIndex: 1,
      explanation: 'Choosing the least-attended event on record means starting from an extreme, so some rebound was expected whatever the club did; that is the cold-remedy problem. An earlier reminder could genuinely matter, and a shared room makes the two events more comparable, but neither one removes the fact that the starting point was chosen for being the worst.',
    },
    takeaway: 'When help arrives because things were at their worst, expect some rebound for free; record the improvement as a change, write down how the starting week was chosen, and go looking for a comparison that was not picked for being extreme.',
    sourceNote: 'The inherited Bland and Altman articles explain regression toward the mean. These newsletter counts are invented; no editing intervention or practice benefit was tested.',
  },
  {
    id: 'fg-002',
    title: 'Calculate the groups before ranking the totals',
    outcome: 'Reproduce a case where one method wins inside every group but loses on the total, explain what the job mixture is doing, and say why how jobs were assigned still matters.',
    scene: 'A fictional repair desk compares two methods handling unequal mixtures of routine and difficult jobs.',
    sections: [
      {
        title: 'Two accurate rankings',
        paragraphs: [
          'A repair desk is comparing two ways of working, call them method A and method B, using an invented job log. For routine jobs, A finished 18 of 20 and B finished 48 of 60. Divide finished by attempted. A is at 90 percent, B at 80. For difficult jobs, A finished 36 of 60, which is 60 percent, and B finished 10 of 20, which is 50 percent. A wins on routine jobs. A wins on difficult jobs.',
          'Then the manager opens the dashboard, which shows one overall number per method. B is ahead. Nobody has made an arithmetic mistake. Both tables are correct. And yet they rank the methods in opposite orders, and if you only ever saw the dashboard you would choose the method that loses in every category.',
        ],
      },
      {
        title: 'A total weights every job, not every group equally',
        paragraphs: [
          'Imagine two students who each sit an easy exam and a hard exam. Student A scores higher than student B on the easy exam and higher on the hard exam. But A sat the hard exam three times and the easy one once, while B did the opposite. A\'s average is dragged toward the hard-exam score. B\'s is lifted toward the easy-exam score. B ends up with the higher average despite being worse at both exams. Nothing about ability changed. The mixture did the work.',
          'Now the repair desk. Add before dividing. A finished 18 plus 36, which is 54, out of 20 plus 60, which is 80 jobs. That is 67.5 percent. B finished 48 plus 10, which is 58, out of 80. That is 72.5 percent. Look at the job counts, not the percentages. A got 60 difficult jobs and 20 routine. B got 20 difficult and 60 routine. So A\'s total is mostly difficult-job performance: a quarter of 90 plus three quarters of 60 gives 67.5. B\'s total is mostly routine: three quarters of 80 plus a quarter of 50 gives 72.5. Each total leans toward the kind of job that method did most often. This reversal between the group rankings and the pooled ranking is what statisticians call Simpson\'s paradox. It stops feeling like a paradox once you can see the weights.',
        ],
      },
      {
        title: 'The missing question concerns assignment',
        paragraphs: [
          'You can remove the unfair weighting on paper. Ask what each method would score if it faced half routine and half difficult work. A: half of 90 plus half of 60 is 75. B: half of 80 plus half of 50 is 65. Under the same mixture, A leads by ten points. That is a fair arithmetic comparison for a stated workload.',
          'It is still not proof of what switching methods would cause. The real question is how jobs ended up with each method. Was difficulty recorded before the job was assigned, or decided afterwards? Did the desk send the hardest jobs to A because A was trusted with them? Those choices can hide or exaggerate a method\'s true effect. One trap runs the other way as well. If the grouping variable is something the method itself changed, splitting by it can hide part of the effect rather than reveal it. Neither the dashboard nor the subgroup table makes that judgment for you.',
        ],
      },
      {
        title: 'Where this shows up and what to do',
        paragraphs: [
          'Pooled totals that flip under grouping turn up in hospital league tables, school results, hiring statistics, and any comparison where the two sides did not face the same mix of cases. The warning sign is always the same: the groups are different sizes on each side.',
          'Two habits. Whenever a total compares two things, ask what each one was given to work with and write the counts next to the rates. And when the within-group and overall rankings disagree, do not pick the one you like; ask how cases were assigned, because that is where the answer lives.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Within each job type, A has the higher rate',
        alt: 'Routine: A 90%, B 80%. Difficult: A 60%, B 50%, with their different job counts.',
        caption: 'Read the pairs: A beats B on routine jobs and A beats B on difficult jobs. Then read the detail under each bar and notice the denominators, 20 against 60 and 60 against 20. Those unequal counts are what the overall figure is about to hide. Illustrative log.',
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
        caption: 'Same jobs, added up. B now leads. Both methods handled 80 jobs, so the totals look fair, but A\'s 80 were three quarters difficult and B\'s were three quarters routine. Equal totals do not mean equal mixtures.',
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
        'Draw a table with routine and difficult rows and A and B columns. Copy all four finished-of-attempted counts from the example. Keep the counts, not just percentages, because the counts are where the mixture hides.',
        'Work out the four group percentages. Then add finished and attempted within each method and work out its overall percentage. You should get A 67.5 and B 72.5, the reversal.',
        'Circle the method that handled more difficult jobs. Then compute both methods under a half-and-half mixture, half of each group rate added together. That is the exam-retake correction: same mixture, fair comparison.',
        'Write one question about assignment that the numbers cannot answer, such as whether difficulty was recorded before the job was handed out. This question decides whether the fair arithmetic is also a fair causal comparison.',
      ],
      notice: 'A leads within both types and trails overall, and your half-and-half figures come out at 75 and 65. You can now point at the job counts and say exactly why the dashboard flipped.',
      troubleshooting: 'If your pooled rates came out at 75 and 65 instead of 67.5 and 72.5, you averaged the two percentages equally instead of weighting them by actual job counts. Go back and add the raw counts first, then divide.',
    },
    recall: {
      prompt: 'Two language courses enroll different mixtures of beginners and experienced learners. Their overall pass rates disagree with both within-level rankings. What would you inspect before recommending a course?',
      hint: 'Reconstruct the denominators and ask how learners entered each course.',
      answer: 'Rebuild the denominators first: how many beginners and how many experienced learners each course enrolled, and how many passed at each level. That shows the mixture, which is the exam-retake problem; a course full of experienced learners can post a better overall pass rate while teaching worse at both levels. A common-mixture summary, say half and half, clears up the reversal on paper. Then ask how learners got into each course. If one course attracts stronger beginners, or lets people self-select by confidence, the comparison still is not telling you which course teaches better.',
    },
    quiz: {
      question: 'The repair desk wants a comparison for a future half-routine, half-difficult workload. Which summary addresses that target most directly?',
      options: [
        'Use B\'s existing pooled rate because both methods handled 80 jobs.',
        'Use A\'s routine rate because routine work is easier to compare.',
        'Apply the same half-and-half weights, while keeping assignment limitations explicit.',
      ],
      correctIndex: 2,
      explanation: 'The future workload is half and half, so weight both methods by that mixture and compare; that is the exam-retake correction applied to the question actually asked. B\'s pooled rate is weighted by a workload that was three quarters routine, so equal totals of 80 prove nothing about mixture. A routine-only rate ignores half the jobs you are planning for. The arithmetic is fair for the stated mixture and still leaves the assignment question open.',
    },
    takeaway: 'A total is a weighted average in disguise; write the counts beside the rates, recompute under a common mixture when the rankings flip, and then ask how the cases were assigned, because that question, not the dashboard, decides what the comparison means.',
    sourceNote: 'The inherited Stanford entry was spot-checked for weighting and causal-adjustment limits. All repair counts and standardized mixtures here are illustrative, not estimates of method effects.',
  },
  {
    id: 'fg-003',
    title: 'Give a revised estimate its reference period and release date',
    outcome: 'Tell a revised estimate of a past period apart from a new event, keep both the reference period and the release date, and write the revision so nobody can read it as growth.',
    scene: 'A community garden revises last week\'s visitor estimate when a late gate tally arrives.',
    sections: [
      {
        title: 'The garden did not gain seven Tuesday visitors',
        paragraphs: [
          'A community garden keeps a weekly visitor count. On Monday it publishes last week\'s figure: an estimated 52 visitors from the previous Monday through Sunday. On Tuesday a late gate tally turns up from one volunteer, and the figure for that same week becomes 59. Someone posts: attendance rose by seven today.',
          'Read that sentence the way a newcomer would. Seven more people visited on Tuesday. That is what it says. It is not what happened. Nobody counted anyone on Tuesday. Both numbers describe the same finished week, and the only things that changed between Monday and Tuesday were the pile of paper on the desk and the date on the bulletin. The garden did not grow. The estimate did.',
        ],
      },
      {
        title: 'One event period can have several published versions',
        paragraphs: [
          'Think of a school photo. The photo was taken on one particular morning in September. A first print comes out in October. A second print, with one child\'s name corrected in the caption, comes out in November. Nobody would say the class got bigger in November. The morning the photo describes did not move. Only the print changed. Published estimates work the same way, and getting the two dates confused is the whole mistake.',
          'Every estimate carries two clocks. The reference period is when the measured activity actually happened: last Monday through Sunday. The release date is when this particular version of the estimate came out: Monday, then Tuesday. A specific published version is sometimes called a vintage, like a wine labelled by the year it was made rather than the year you drink it. Keep both clocks and a newer estimate can never disguise itself as a newer event. In the garden, 59 minus 52 is a revision of 7 to one completed week, not a rise from Monday to Tuesday. Early estimates are still worth publishing, because waiting for every tally can mean waiting for weeks. But later does not automatically mean better. A missing tally arriving is one kind of revision. Changing the definition of who counts as a visitor is a different kind, and it needs a different explanation.',
        ],
      },
      {
        title: 'Write a sentence that preserves both clocks',
        paragraphs: [
          'A bulletin that cannot be misread says: Tuesday\'s estimate for last week is 59, revised from Monday\'s 52 after a late gate tally arrived. One period. Two releases. One stated reason. Keep Monday\'s 52 on the record rather than overwriting it. If someone made a decision on Monday, say ordering refreshments for 52, you will want to know what they were looking at.',
          'If you actually want to know whether attendance is growing, you need estimates for different reference periods, this week against last week. You also need to check that they were counted the same way and have reached a similar stage of revision. Comparing Monday\'s early figure for this week with the fully revised figure for last week builds a bias into the comparison before you start. Two numbers alone are never enough. You have to know whether they are two observations or two versions of one observation.',
        ],
      },
      {
        title: 'Where the two clocks get mixed up',
        paragraphs: [
          'This confusion is everywhere numbers get updated: unemployment figures revised months later, a company restating last quarter\'s sales, a weather station correcting yesterday\'s rainfall. In every case a headline can say rose or fell when nothing happened except a better count of something already over.',
          'Two habits. Whenever a figure changes, ask the school-photo question: did the event change, or did the print? And when you write a revision, name the period, both release dates, and the reason in the same sentence, so the next reader cannot turn your correction into a trend.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'One visitor week, two publication dates',
      alt: 'Last Monday through Sunday is the reference week. Monday publishes 52; Tuesday revises that week to 59.',
      caption: 'Start with the first item: that is the only thing that actually happened, one week of visitors. The next two items are not events; they are prints of the same photo on different days. The late tally added 7 to the estimate, not 7 people to Tuesday. Illustrative bulletin; spacing is not to scale.',
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
        'Draw four columns: reference period, release date, estimate, reason. Add one row for Monday and one for Tuesday. Two rows, because there were two prints of one photo.',
        'Fill both reference-period cells with the same previous week. Put 52 beside Monday and 59 beside Tuesday, with late gate tally as Tuesday\'s reason. Seeing the identical period written twice is what makes the mistake visible.',
        'Calculate the revision, 7, and rewrite the misleading announcement so that it describes a corrected estimate of last week and says nothing at all about Tuesday attendance.',
        'Under the table, write which extra period you would need, this week, to say anything about attendance change, and note that it must be counted the same way. Keep both original rows; never overwrite Monday.',
      ],
      notice: 'Your sentence names one past week, two release dates, and a revision of 7. Nobody reading it could think seven new people turned up on Tuesday.',
      troubleshooting: 'If both date columns in your second row say Tuesday, you have let the print move the photo. Put the previous week back in the reference column. Publishing a number never changes when the thing it measures happened.',
    },
    recall: {
      prompt: 'An electricity provider revises a completed billing month using a meter reading received later. What does a higher revised total tell you, and what remains unknown about this morning?',
      hint: 'Which time interval does the revised total describe?',
      answer: 'The higher total is a second print of the same photo: a better estimate of a month that has already finished, produced because a meter reading arrived late. It says nothing about this morning, because nothing from this morning is in it. What you know is the revision, new total minus old, and the reason for it. What stays unknown is today\'s use, which needs its own reference period. Before you compare usage across months, make sure each month\'s figure has had its late reading included, or you will be comparing a corrected print with an uncorrected one.',
    },
    quiz: {
      question: 'Friday\'s museum bulletin corrects Wednesday\'s estimate for last month after a duplicate is removed. Which comparison measures the revision?',
      options: [
        'Friday\'s and Wednesday\'s estimates for that same month.',
        'Friday\'s daily admissions and Wednesday\'s daily admissions.',
        'Last month\'s latest estimate and the preceding month\'s latest estimate.',
      ],
      correctIndex: 0,
      explanation: 'Friday\'s and Wednesday\'s figures are two prints of the same photo, last month, so their difference is exactly the revision. Friday\'s and Wednesday\'s daily admissions are two different days, which is a question about change, not correction. Comparing last month\'s latest estimate with the previous month\'s is also a change-over-time question, and a fair one, but it does not measure how much removing the duplicate altered the estimate.',
    },
    takeaway: 'Every figure has two clocks, when it happened and when this version came out; keep both, write revisions with the period, both dates, and the reason, and never let a better print of the same photo pass for a new event.',
    sourceNote: 'The inherited ONS methodology supports the reference-period and revision distinction, not current release schedules. The garden bulletin and its counts are invented.',
  },
  {
    id: 'fg-004',
    title: 'Separate your preference from the group preference you imagine',
    outcome: 'Keep what you want, what you guess others want, and what they have actually told you in three separate places, and write a preference question that does not smuggle in your guess.',
    scene: 'Two members of a weekend language club discover that nodding through check-ins did not reveal their preferences.',
    sections: [
      {
        title: 'A nod leaves several possibilities open',
        paragraphs: [
          'Isha goes to a weekend language club. She would much rather get short written updates than spend the first twenty minutes of every session in a live round-the-room check-in. She has never said so, because she assumes everyone else loves the check-in. When the organiser proposes another one, Isha nods. Across the room, Rowan sees the nod and chalks it up as one more vote for check-ins.',
          'In this fictional exchange, what Isha did in public and what she wants in private have come apart. And the nod itself tells you very little. She might be avoiding a discussion. She might be accepting a compromise she can live with. She might not care enough to speak. From the outside all three look identical, and Rowan has just counted one of them as enthusiasm.',
        ],
      },
      {
        title: 'A belief about other people is a separate answer',
        paragraphs: [
          'Picture a restaurant table where nobody wants dessert but everyone assumes the others do, so everyone orders one to be polite. Six desserts arrive at a table of six people who would all rather have had the bill. Nobody lied. Each person answered a question about the group instead of a question about themselves, and the group answer was made of six private guesses.',
          'When a whole group privately disagrees with a norm it believes everyone else supports, social psychologists call it pluralistic ignorance. Prentice and Miller studied a version of this on a university campus, comparing students\' own attitudes to drinking with what they estimated their peers\' attitudes to be, across four studies described in the inherited abstract. You do not need to diagnose a language club with anything that grand. Start with the smaller split you can actually check. What I prefer is one answer. What I think others prefer is a different answer. They can be wrong independently of each other. Even if Isha finds one other member who prefers written updates, she still does not know what most members want. She has swapped one assumption for one direct report. That is progress, and it is not a survey.',
        ],
      },
      {
        title: 'Ask for a preference, not agreement with your guess',
        paragraphs: [
          'Isha drafts an optional question: would live check-ins, written updates, another format, or no preference suit you? Look at what it does not do. It does not ask what the club wants, because that invites each person to guess at the table like the dessert diners. It asks what suits the respondent, and it offers no preference as a real answer rather than a failure to engage.',
          'In the dialogue, Rowan checks before answering: are you asking what I want, or what I think the club wants? That question is the whole skill in one line. Rowan then reports a personal preference for written updates and admits having assumed the others wanted live ones. Two people have now discovered they shared a wrong guess. A real decision would still need to consider who did not reply and whether people felt free to disagree with the organiser. Keep three boxes: your preference, your estimate of others, and their voluntary answers. Pour them together and a guess starts to look like a poll.',
        ],
      },
      {
        title: 'Why silence gets counted as agreement',
        paragraphs: [
          'Groups drift into formats nobody likes because every individual mistakes the others\' silence for support, and then adds their own silence to the pile. The check-in survives not because people want it but because each person believes they are the only one who does not. That belief seals itself shut until someone asks a question that is about the respondent and not about the room.',
          'Two habits. Before claiming to know what a group wants, write down how many people have actually told you, in their own words, and treat every nod as unknown. And when you draft the question, read it back and strike out any phrase that assumes the answer, like why everyone prefers.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'A question about one person\'s preference',
      alt: 'Isha offers an optional format question; Rowan asks whose preference matters, then reports a personal preference.',
      caption: 'Read Rowan\'s first line before anything else. It separates two different questions, what I want and what I think the club wants, and refuses to answer until it knows which is being asked. Then notice that the final line is one person\'s preference, not a verdict on the group. Original fictional exchange.',
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
        'Write three headings on a page: Isha\'s preference, her guess about others, direct reports. Three boxes, because the mistake is pouring them into one.',
        'Put her written-update preference under the first heading and her belief that everyone loves live check-ins under the second. Add Rowan\'s answer, and only Rowan\'s answer, under direct reports. Notice how thin that third column is.',
        'Draft an optional question with live, written, other, and no-preference choices. Read it back and check that it asks about the respondent, not the club. Do not send it; this is practice at writing, not polling.',
        'List what is still unknown: everyone who has not answered, and whether they felt free to. Then rewrite any sentence that says the club or everyone so that it is limited to these two members.',
      ],
      notice: 'Your page shows two personal preferences and one untested belief about the rest of the club, clearly apart. You can see exactly how little the third column holds.',
      troubleshooting: 'If your question starts with why everyone prefers or which format the club wants, you have built the dessert table into it. Remove the assumed consensus and ask about the person reading the question.',
    },
    recall: {
      prompt: 'You prefer a quieter family birthday but assume everyone expects a large party. What could you ask without announcing that the family secretly agrees with you?',
      hint: 'Separate your wish from a voluntary question addressed to each person.',
      answer: 'Say your own preference plainly: I would enjoy a quieter birthday. Then ask each person, separately and without pressure, what would suit them, with room for a different idea or no preference. That is the dessert-table fix, a question about the respondent rather than about the family. Do not announce that everyone secretly agrees with you, because you do not know that. One cousin agreeing is one direct report, and the people who have not answered are still unknown, not silent supporters.',
    },
    quiz: {
      question: 'A hobby group wants to learn members\' own preferences about sharing drafts. Which question collects that information?',
      options: [
        'Would you prefer private feedback, a group discussion, another format, or no preference?',
        'Which feedback format do you think most other members expect?',
        'Which feedback format has appeared most often in previous sessions?',
      ],
      correctIndex: 0,
      explanation: 'The first question asks each member what suits them personally and lets no preference count as an answer, which is the only way to find out what people privately want. The second measures what people think others expect, which is the dessert-table guess and can be wrong for everyone at once. The third records what has happened before, which may simply be the format nobody dared to question.',
    },
    takeaway: 'Keep three boxes, what you want, what you guess others want, and what they have actually said, and write your question about the person answering it; a room full of polite nods is not a poll, and your guess about the group is not evidence about the group.',
    sourceNote: 'Prentice and Miller were checked through the inherited abstract only. This fictional dialogue neither establishes a club-wide mismatch nor validates the question format.',
  },
  {
    id: 'fg-005',
    title: 'Count the corrections still waiting to arrive',
    outcome: 'Run a simple delayed-command game on paper and explain why correcting what you can see, without counting what is already in the pipe, makes you overshoot.',
    scene: 'A paper dispatch game compares two ways to move a counter toward position three.',
    sections: [
      {
        title: 'A command does not move the counter immediately',
        paragraphs: [
          'Draw a short track on paper. A counter sits at 0 and the target is 3. Each round you can send one command: move +1, move -1, or stay put with 0. The catch is the delay. A command does not take effect in the round you send it. It arrives two rounds later. So the command you send in round one arrives in round three, not round two. At the start of each round, first apply whatever command is due, then look at the track, then decide the next command.',
          'That is the entire game, and it is enough to produce a mistake that real systems make constantly. What you can see on the track is the present. What you have already sent, but which has not landed yet, is a future you have already committed to. The game is about keeping those two apart.',
        ],
      },
      {
        title: 'Two rules agree until round four',
        paragraphs: [
          'Most people have played this game in a shower with slow plumbing. You turn the tap toward hot. Nothing changes, because the hot water is still travelling along the pipe. So you turn it further. Still cold. Further again. Then all the hot water you asked for arrives at once and you jump out of the way. You did not want that much heat. You asked for it three times because the pipe had not yet delivered the first request. Every turn of the tap was a correction to a reading that was already out of date.',
          'Now the two rules. A position-only rule looks at the counter and nothing else: below target, send +1; above, send -1; on target, send 0. A pending-aware rule first adds up the current position plus every command still in the pipe, and only then makes the same comparison. For the first three rounds the rules behave identically. Both see 0, 0, then 1 at their decision points, and both send +1 each time. Round four is where they part. The counter now reads 2, and a +1 sent in round three is still due to land in round five. The position-only rule sees 2, which is below 3, and sends yet another +1, due in round six. The pending-aware rule calculates 2 plus the 1 in the pipe, gets 3, and sends 0. It has counted the hot water that is already on its way.',
        ],
      },
      {
        title: 'Read the queue as well as the final position',
        paragraphs: [
          'Follow both runs to the end. In the position-only run, the +1 lands in round five, taking the counter to 3, and the extra +1 lands in round six, taking it to 4. Now the counter is above target, so the rule sends -1, which will not arrive until round eight. It is still chasing. In the pending-aware run, the +1 lands in round five, the counter reads 3, the 0 lands in round six, and it still reads 3. Nothing non-zero is waiting. The track is calm.',
          'The overshoot was not caused by a bad decision in any single round. Each +1 was reasonable for the reading in front of it. The overshoot came from correcting a delayed reading again and again without crediting the corrections already sent. Meadows describes how delays in a feedback loop produce exactly this kind of swinging past the target and back. The lesson is to account for unfinished corrections before adding new ones. It is not a lesson about waiting through an urgent problem; sometimes you must act on what you can see. Real systems are also messier than the game: delays vary, deliveries fail, and new disturbances arrive mid-flight. The paper version holds all of that still so the single idea stands out.',
        ],
      },
      {
        title: 'Where the pipe is hiding',
        paragraphs: [
          'Once you have the shower in your head you notice pipes everywhere. You send a message, hear nothing, send a second, and the person receives both. A shop reorders stock that is already in a van. A team hires again because the last hire has not yet started. Each is a correction to a reading that does not yet include the previous correction.',
          'Two habits. Before correcting anything, ask what you have already sent that has not landed yet, and add it to what you can see. And when something overshoots, look back at the queue, not just the final reading; the cause is usually a stack of reasonable decisions made against stale information.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Pending-aware queue at the end of round four',
        alt: 'Position 2 now, plus 1 due in round five, and 0 due in round six.',
        caption: 'Read the three rows as now, then what is already in the pipe. The counter shows 2, but a +1 sent in round three is due in round five, so the real commitment is already 3. That is why the pending-aware rule sends 0 in round four. Illustrative fixed-delay queue; the rows are not a time scale.',
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
        caption: 'Compare the two bars after round six. Position-only reached 4 and is still carrying a -1 that will not land until round eight, so it will keep swinging. Pending-aware sits on the target with nothing non-zero waiting. Same starting state in both runs.',
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
        'Make two logs with six rows each and columns for round, arriving command, position, pending commands, and new command. The pending column is the pipe; it is the column the position-only rule ignores.',
        'Run one: start at 0 with an empty queue. In each round apply the arrival first, then decide using position only, and write each new command\'s due round two ahead. Writing the due round is what lets you see the pipe later.',
        'Reset to 0 and an empty queue. Run two: in each round add position plus every command still pending, then decide. Expect the first difference in round four, where 2 plus a pending 1 already equals 3.',
        'Compare positions after each arrival: 0, 0, 1, 2, 3, 4 in run one against 0, 0, 1, 2, 3, 3 in run two. The split appears only after the delayed commands land, which is exactly how a shower surprises you.',
        'Keep any command due after round six on the log. Mark run one\'s -1 due in round eight; that unfinished correction means the overshoot is not over yet.',
      ],
      notice: 'Only the position-only run overshoots inside six rounds, and its corrective -1 is still in the pipe. The pending-aware run lands on 3 and stays there because it counted what it had already sent.',
      troubleshooting: 'If a command seems to arrive one round after you send it, you have shortened the pipe. The first command, sent in round one, is due in round three. And remove a command from the pending column at the moment it arrives, before you total what is left, or you will count the same hot water twice.',
    },
    recall: {
      prompt: 'A fictional stationery shelf needs 10 notebooks. Six are present and four confirmed replacements are in transit. What matters before ordering more?',
      hint: 'Separate available stock from confirmed pending stock.',
      answer: 'Add the pipe to the shelf. Six on the shelf plus four confirmed in transit is already ten, so ordering more now would be the extra turn of the shower tap: a correction to a reading that does not yet include the correction already made. Before ordering, check that the four are genuinely on their way and when they will land, and check whether new demand has appeared since, because real deliveries fail and real needs change in ways the paper game does not. If both check out, the right order is zero.',
    },
    quiz: {
      question: 'The game counter is at 4, target 3, with one pending -1. What does the pending-aware rule send?',
      options: ['Another -1 because the counter is above target.', '0 because 4 plus the pending -1 equals 3.', '+1 to balance the negative command in transit.'],
      correctIndex: 1,
      explanation: 'The counter reads 4, but a -1 is already in the pipe, so the projected position is 4 minus 1, which is 3, exactly the target. Sending another -1 would be the extra turn of the tap and would carry the counter down to 2 once both corrections land. Sending +1 to balance the -1 would cancel a correction that is actually needed. Under the game\'s fixed delays, 0 is the only command that leaves the counter where you want it.',
    },
    takeaway: 'What you can see lags behind what you have already set in motion; before correcting again, add up every correction still in the pipe, because overshoot is usually a stack of reasonable decisions made against a stale reading.',
    sourceNote: 'Meadows supplies the feedback-delay framework. This original game assumes fixed delays, reliable delivery, and additive effects; it is not advice for safety-critical or production controls.',
  },
  {
    id: 'fg-006',
    title: 'Check where the saved meeting time went',
    outcome: 'Set up outcome, process, and balancing measures for a small change, add participant time correctly, and spot work that was moved somewhere else rather than saved.',
    scene: 'Four volunteers shorten an exhibition-planning meeting but spend more time clarifying decisions afterward.',
    sections: [
      {
        title: 'A shorter meeting can create a longer afternoon',
        paragraphs: [
          'Four volunteers planning an exhibition meet every week for 30 minutes. Someone proposes sending an agenda the day before so the meeting can be cut to 20. They try it. The call ends ten minutes early and everyone feels efficient. Then the messages start. Who is collecting the prints? Were the labels approved or only discussed? By mid-afternoon the group has spent more time typing about decisions than it would have spent making them.',
          'Squeeze one end of a balloon and the air moves to the other end. The balloon is no smaller. The meeting got shorter, and some of the work it used to contain moved into the afternoon, where nobody was measuring it. A change that only tracks the thing it set out to shrink will always look like a success, because the balloon is only being measured at the squeezed end.',
        ],
      },
      {
        title: 'Three measures answer different questions',
        paragraphs: [
          'A car dashboard has several gauges for a reason. The speedometer tells you whether you are going faster, which is what you wanted. The position of your foot on the pedal tells you whether you actually did the thing that should make you faster. The engine temperature gauge tells you whether getting faster is costing you something you did not intend. Drive with only the speedometer and you will be delighted right up to the moment the engine seizes.',
          'Improvement work uses the same three gauges, and the Institute for Healthcare Improvement gives them names. The outcome measure records the result you were after: meeting duration. The process measure records whether the change actually happened: did the agenda go out by the agreed deadline? The balancing measure watches for a cost pushed somewhere else: time spent afterwards clarifying decisions the shorter meeting left loose. Notice that a measure\'s role depends on the goal. For a different goal, agenda delivery might be the outcome. Notice too that counting an email is not the same as confirming anyone prepared. Define the balancing measure before you start collecting it. Clarification time means reading and replying about decisions left unresolved, estimated voluntarily by each participant. Do not quietly monitor people\'s messages, and do not count every ordinary new question as proof that the shorter meeting failed.',
        ],
      },
      {
        title: 'Add participant time to participant time',
        paragraphs: [
          'Put numbers on the balloon. The original meeting costs 4 people times 30 minutes, which is 120 participant-minutes, plus about 10 participant-minutes of follow-up: 130 in total. The trial costs 4 times 20, which is 80, plus 60 participant-minutes of clarification afterwards: 140. The meeting saved 40. The afternoon added 50. The group is 10 participant-minutes worse off.',
          'Two cautions about those numbers. First, participant-minutes are not clock minutes. If two people each spend 15 minutes replying at the same time, that is 30 participant-minutes, not 15, because the unit counts people\'s effort, not elapsed time on a wall. Mixing the two is the most common arithmetic slip here. Second, one pair of meetings proves a trade-off is possible, not that agendas cause extra work. Perhaps this agenda was vague, or this week\'s decisions were unusually fiddly. More observations, and some attention to whether the decisions were actually better or worse, would be needed before anyone changes the rule for good.',
        ],
      },
      {
        title: 'Where the air goes',
        paragraphs: [
          'Almost every efficiency change squeezes a balloon. Faster checkouts push work onto the help desk. Shorter forms push questions into phone calls. A quicker reply template pushes unresolved needs into follow-up tickets. None of that makes the change wrong. It makes the balancing gauge essential, because without it you cannot tell a real saving from a relocation.',
          'Two habits. Before trialling any change, write down all three gauges, including the one that would show the cost moving somewhere else. And when the outcome improves, go and look at the other end of the balloon before you celebrate.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Time moves across the meeting boundary',
      alt: 'Original meeting 120 participant-minutes plus 10 afterward; trial 80 plus 60 afterward.',
      caption: 'Add the bars in pairs. Original: 120 plus 10 is 130. Trial: 80 plus 60 is 140. The meeting bar shrank by 40 and the clarification bar grew by 50; that growth is the other end of the balloon. All four bars are participant-minutes, not clock minutes, so do not read them as the length of anyone\'s afternoon.',
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
        'Write the local goal, shorter meetings, and the change, an agenda sent by an agreed deadline. Naming the goal first matters because the role of each measure depends on it.',
        'Label the three gauges: duration is the outcome, agenda delivery is the process, and later clarification time is the balancing measure. Say in one line what question each one answers.',
        'Calculate both participant-time totals, 130 and 140, and write beside them that the afterwards figures are already summed across people. That note is what stops you adding clock minutes to participant-minutes.',
        'Draft how clarification time would be recorded, openly agreed and self-estimated, and a review condition such as more combined time or more unresolved decisions. Do not collect real messages; the point is to design the gauge, not to watch the team.',
      ],
      notice: 'Your plan can detect 40 participant-minutes saved in the meeting and 50 added afterwards. It would catch the balloon moving instead of only measuring the squeezed end.',
      troubleshooting: 'If you added 20 elapsed meeting minutes to 60 participant-minutes and got 80, you mixed units. Convert the meeting to 4 times 20, which is 80 participant-minutes, and then add the 60 for 140.',
    },
    recall: {
      prompt: 'A library speeds self-checkout by removing an instruction screen. What process and balancing measures would accompany transaction time?',
      hint: 'Record the proposed change and work that could move to another person.',
      answer: 'The process measure checks that the change actually happened: are customers really seeing the shorter screen sequence, or is the old one still showing on half the machines? The balancing measure looks at the other end of the balloon: how often someone now needs a staff member to help, and how many checkouts are abandoned part-way. Decide openly how those will be recorded before you start. If you only time the successful transactions, you have built a speedometer that ignores every driver who pulled over, and the fastest-looking result will be the one that quietly excludes the people who could not finish.',
    },
    quiz: {
      question: 'A support desk aims to close requests faster using a reply template. Which measure best checks a displaced cost?',
      options: ['Median time until the first reply.', 'Share of replies using the template.', 'Follow-up work caused by needs left unresolved at closure.'],
      correctIndex: 2,
      explanation: 'Follow-up work caused by needs left unresolved at closure is the engine temperature gauge: it watches for the cost that a speed target can push out of sight. Median time to first reply is the speedometer, the outcome itself. The share of replies using the template is the pedal position, confirming the change happened but saying nothing about what it cost.',
    },
    takeaway: 'Every change needs three gauges, the result you wanted, proof the change happened, and the cost it might push elsewhere; add participant-minutes to participant-minutes, and look at the other end of the balloon before calling a squeeze a saving.',
    sourceNote: 'The inherited IHI page defines the three measure roles. The exhibition example and time values are invented, not a study of meetings or a validated measurement scheme.',
  },
  {
    id: 'fg-007',
    title: 'Find the unfinished request behind the repeat contact',
    outcome: 'Tell a repeat contact caused by an unfinished first answer apart from a genuinely new need, and fix the original reply instead of discouraging the follow-up.',
    scene: 'A community camera-loan desk confirms a booking but leaves the borrower without a pickup location.',
    sections: [
      {
        title: 'The fast reply left a necessary question unanswered',
        paragraphs: [
          'Someone wants to borrow a camera from a community loan desk. They send one message: please reserve a camera for Friday, and where do I collect it? The desk replies within minutes: your Friday booking is confirmed. Tidy and fast. Also incomplete. The borrower writes again: thanks, where should I go? The desk answers that too, also quickly.',
          'A dashboard that measures reply speed is thrilled. Two messages, two fast answers. From the borrower\'s chair the picture is different. One request took two attempts because the first answer dropped half of it. The second message is not a new task and it is not a sign of a demanding customer. It is the first task, still unfinished, coming back around.',
        ],
      },
      {
        title: 'Classify why contact happened',
        paragraphs: [
          'You text a friend: what time and where tonight? They reply: 7. You have to text again. Nobody would describe your second text as a new conversation. It is the first question, half answered. Now imagine your friend proudly telling you they reply to every message within a minute. True, and beside the point. Speed measured per message rewards exactly the kind of answer that creates the next message.',
          'The consultancy Vanguard gave this a name: failure demand, meaning demand on a service that exists only because the service failed to do something properly the first time. The useful part is not the label but the question it forces: why did this contact happen? Not who sent it or whether they have been in touch before. Asking again for pickup directions that were left out: failure demand. Asking to switch Friday to Saturday because plans changed: a genuinely new need, and no failure at all. A scheduled call to check an item arrived safely: a planned part of good service, not a repeat. And some contacts simply do not tell you enough. A message that says only please call me could be any of the three. Leave it marked uncertain. Forcing it into a category to make the numbers tidy is how a desk ends up looking efficient while its borrowers are still lost.',
        ],
      },
      {
        title: 'Finish the original need upstream',
        paragraphs: [
          'The fix lives in the first reply, not the second. A confirmation that finishes the job says: your camera is reserved for Friday; collect it from the rear desk, open Friday from 16:00 to 18:00. Date, place, hours. Everything the borrower asked, plus the thing they would have asked next. Now the second message never needs sending, not because it was blocked but because there was nothing left to chase.',
          'Be careful what you do with the insight. It does not justify discouraging questions or promising that repeat contacts will vanish. A rule against follow-ups would make the message count fall while leaving borrowers standing outside the wrong door. And it is not a tool for blaming whoever typed the short reply. Use the categories to walk the service path and find where information goes missing, not to set a quota or hunt for a culprit.',
        ],
      },
      {
        title: 'Why fast and finished get confused',
        paragraphs: [
          'Reply speed is easy to measure and finishing a need is not, so organisations measure speed and hope it stands in for the other. It does not. A quick half-answer scores well on speed and generates the next contact, which also scores well on speed. The metric rewards the loop it should be catching.',
          'Two habits. When a contact repeats, write down the reason it repeated before you count it, and let uncertain be an honest answer. And when you find a service-generated repeat, trace it back to the earlier reply and fix that one, because the cheapest second message is the one that never has to be written.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'One omitted answer creates another contact',
      alt: 'A borrower asks to book and asks where to collect; the desk confirms only the booking, then supplies directions after a repeat.',
      caption: 'Compare the borrower\'s first and third lines. The third asks nothing new; it repeats the part of the first that the desk skipped. Then look at the desk\'s final line and imagine it as the first reply: date, place, hours. That is the whole fix. Original fictional exchange.',
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
        'List five fictional contacts: the initial booking; a request for missing pickup directions; a changed pickup day; a chase for an overdue confirmation that was promised; and a message saying only please call me. A mixed list, because the skill is telling them apart.',
        'Label each one as original need, repeat from an unmet need, changed need, or uncertain. Use uncertain whenever the reason is genuinely missing; do not guess to make the tally neat.',
        'For each repeat from an unmet need, draw a line back to the earlier omission or unkept promise that caused it. If you cannot find one, reconsider the label.',
        'Rewrite the booking confirmation with Friday, the rear desk, and 16:00 to 18:00, and keep a clear route for further questions. Finishing the first reply is the fix; closing the door is not.',
      ],
      notice: 'Missing directions and the overdue-promise chase are repeats from unmet needs, the changed day is a new need, and the bare please call me stays uncertain. Your rewritten confirmation would have prevented exactly one of the five.',
      troubleshooting: 'If you labelled every repeat as failure demand, go back and ask of each one whether the original service was incomplete or the borrower\'s plans changed. If you labelled none, reread the first desk reply and count what it left out.',
    },
    recall: {
      prompt: 'A repair shop reports fewer follow-up calls after removing its contact number. What would you need to know before calling that an improvement?',
      hint: 'A lower count can reflect lost access rather than completed service.',
      answer: 'Fewer calls could mean needs are being met first time, or it could mean people can no longer reach anyone to say they are not. The count cannot tell you which, any more than your friend\'s fast replies told you where to meet. Before calling it an improvement, check whether customers are receiving the promised information and the finished repair, and whether they still have a working route to report a problem. A shop that removed its number has not reduced failure demand; it has stopped measuring it.',
    },
    quiz: {
      question: 'Which equipment-desk contact most clearly arose from unfinished service?',
      options: ['A borrower requests an extra light for a newly added scene.', 'A borrower asks for the return address omitted from the promised instructions.', 'A borrower reschedules after a change to the filming date.'],
      correctIndex: 1,
      explanation: 'The missing return address was part of the original service, so asking for it is the half-answered text message: the first need coming back around. An extra light for a newly added scene is a new need created by a change in the project. Rescheduling after the filming date moved is also a changed need. Neither of those shows that the desk left something out the first time.',
    },
    takeaway: 'Count why a contact happened, not how fast it was answered; a repeat caused by a half-finished first reply is fixed by finishing the first reply, never by making the second one harder to send.',
    sourceNote: 'Failure demand is an inherited Vanguard practitioner framework with a commercial interest. No prevalence or savings claim is adopted; this desk and its dialogue are fictional.',
  },
  {
    id: 'fg-008',
    title: 'Write shared-use rules that can be maintained and challenged',
    outcome: 'Write rules for a shared resource that separate things that get used up from things that are merely occupied, name who restores them, and give users a route to change the rules.',
    scene: 'A community art room drafts separate use and replenishment rules for paper and scissors.',
    sections: [
      {
        title: 'A shared cupboard contains different kinds of shortage',
        paragraphs: [
          'A community art room keeps paper and scissors in one cupboard for everyone to use. On the door is a sign: please be considerate. Then a Tuesday session opens the cupboard to find three sheets of paper and no scissors at all. The sign has nothing to say. Be considerate does not tell anyone who buys paper, with whose money, or where the scissors went.',
          'Look closer and the two shortages are not the same kind of problem. Paper gets used up. A sheet that becomes a drawing is gone, and the only remedy is more paper. Scissors do not get used up. A pair that is missing is almost certainly in someone\'s bag or on a far table, and the remedy is getting it back, not buying more. A shared arrangement has to answer different questions for each: who may use it, what users write down, who restores it, and who can challenge the rule when it stops working.',
        ],
      },
      {
        title: 'Match the rule to the resource',
        paragraphs: [
          'Anyone who has lived in a shared flat knows both shortages by heart. Milk runs out, and the house needs a rule about who buys the next carton and from what money. The one good frying pan never runs out, but it is somehow always in the sink or in someone\'s room, and the house needs a different rule: wash it and put it back on the hook. A note on the fridge saying be nice fixes neither. One resource needs a restocking rule and the other needs a return rule.',
          'Try an illustrative paper rule. After each session, count the sheets. If fewer than 10 remain, request a pack of 20 from an agreed club fund. Walk it through: the cupboard starts with 14, the session uses 6, leaving 8. Eight is below 10, so the request is triggered. If 20 arrive before the next session, stock becomes 28. But notice what the threshold does not do: it does not order anything. Someone still has to be authorised to spend the fund, and there has to be somewhere to record that a request is pending so two people do not both order. The scissors rule looks nothing like this. It needs a marked tray to return them to and a way to flag a pair as temporarily missing. No arithmetic, just a hook for the frying pan. And both rules must work for a newcomer who has never met the regular organiser. A rule that assumes every user can put money in immediately would quietly lock out the person least able to raise the problem.',
        ],
      },
      {
        title: 'Governance includes the route for disagreement',
        paragraphs: [
          'Elinor Ostrom spent her career studying how groups of people actually manage shared resources: irrigation water, fishing grounds, grazing land. One of her findings was that the arrangements that last are made and maintained by the people who use the resource, and include a way for those people to change the rules. Her work does not hand you a cupboard policy. It tells you that the policy needs a door back into itself.',
          'So add a named review route. Where does someone go to say the threshold is too low, the fund is unfair, or the borrowing conditions do not fit? Who decides, and how do they tell everyone what was decided? Then test the draft against real people. A frequent user who gets through a pack a week might need a larger allocation. A newcomer might need the access instructions written down rather than passed on by word of mouth. For an actual room, the people affected need a chance to accept, reject, and rewrite the arrangement. A rule imposed from outside, however sensible, is just a longer version of the sign on the door.',
        ],
      },
      {
        title: 'Why be considerate is not a rule',
        paragraphs: [
          'Goodwill rules fail because they put the whole system inside each person\'s head and give nobody any authority. Everyone agrees to be considerate and nobody knows whether they are allowed to spend the fund. The cupboard runs out anyway, and the sign gets blamed on the people rather than the design.',
          'Two habits. For any shared thing, ask first whether it is used up or merely occupied, because that decides which kind of rule it needs. And never finish a rule without writing down who can change it and how, since a rule nobody can challenge will be ignored rather than improved.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Resource type by availability problem',
      alt: 'Four cells compare paper and scissors during normal use and when availability needs restoring.',
      caption: 'Read it row by row. The paper row is about counting and restocking, with 14 minus 6 and 8 plus 20 showing the threshold at work. The scissors row has no numbers at all; it is about a tray to return to and a way to flag a missing pair. Same cupboard, two different kinds of rule. Illustrative table.',
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
        'Draw a row for paper and a row for scissors. For each, write what gets consumed and what merely becomes unavailable. This is the milk-versus-frying-pan split, and it decides everything that follows.',
        'Copy the paper threshold and do the arithmetic: 14 minus 6 is 8, which is under 10, so a request fires; 8 plus 20 is 28. Then name a fictional person who is authorised to spend the fund, because a threshold with no authority behind it orders nothing.',
        'Add four things most signs forget: how a newcomer gets access, where tools are returned, how stock is checked, and where anyone goes to question the rules.',
        'Test the draft against a frequent paper user and against a newcomer with no money for replacements. Revise whichever part would shut one of them out, and label the card a proposal for the members to change, not a policy handed down.',
      ],
      notice: 'Your draft says how each resource is restored and how someone disagrees with the rules. It no longer leans on goodwill, and a stranger could follow it.',
      troubleshooting: 'If your rule ends at please replace it, you have written the fridge note. Add who is authorised to replace, from which fund, and what happens when the person who noticed the shortage cannot pay.',
    },
    recall: {
      prompt: 'Neighbors share a laundry room. Detergent runs out and machines remain occupied after cycles finish. Why would one replacement rule be insufficient?',
      hint: 'Distinguish consumable stock from access to a reusable resource.',
      answer: 'Detergent is the milk: it gets used up and needs a restocking rule with a named buyer and an agreed pot of money. Machines are the frying pan: nobody uses them up, but a finished load left sitting in the drum makes the machine unavailable, so they need a collection rule and a way to handle the laundry that is blocking the next person. One rule saying replace what you use addresses only the detergent. Both rules also need somewhere to go when a neighbour thinks they are unfair, or they will be quietly abandoned instead of fixed.',
    },
    quiz: {
      question: 'New art-room members cannot use the online route for disputing cupboard rules. Which change addresses that governance gap?',
      options: ['Offer a usable alternative review route and communicate decisions to members.', 'Raise the paper threshold so shortages happen less often.', 'Ask the current organizer to make more exceptions informally.'],
      correctIndex: 0,
      explanation: 'The gap is that new members have no way to take part in changing the rules, so the fix is a review route they can actually use, with decisions reported back. Raising the paper threshold changes how often the cupboard runs out, which is a supply question, not a participation one. Asking the organiser for more informal exceptions makes access depend on knowing the right person, which is the exact thing a newcomer lacks.',
    },
    takeaway: 'Decide whether a shared thing is used up or just occupied, write a restocking rule for the first and a return rule for the second, give both a named authority, and build in a route for the people who depend on it to challenge and change the rules.',
    sourceNote: 'The Nobel summary and Ostrom\'s publisher-deposited PNAS abstract support the governance perspective. The article body was not reviewed; this cupboard analogy is not a tested institutional recipe.',
  },
  {
    id: 'fg-009',
    title: 'Hand over the noticing and checking, not only the errand',
    outcome: 'Split a task into anticipating, options, decisions, monitoring, and execution, then propose a handoff that moves the thinking too, with the information, authority, and consent it needs.',
    scene: 'Friends divide the bread order for a picnic, discovering that collection is only one part of the work.',
    sections: [
      {
        title: 'The bread was collected, but who organized it?',
        paragraphs: [
          'Nila is organising a picnic and asks Sam to pick up the bread. Sam does. On Saturday afternoon the bread is on the blanket and Sam says, reasonably, that he handled the bread. But rewind the week. Nila checked how many people were coming. Nila found a bakery that would be open. Nila worked out how many loaves, sent Sam two reminders, and texted on Saturday morning to ask whether the bread had been picked up.',
          'Sam handled the bread hides most of what the bread actually took. It also hides something fairer to Sam: he was only ever asked to collect, and only ever given the authority to collect. Nobody here needs a label like organised or forgetful. The task just needs describing more accurately, so that the two of them can see which parts moved and which parts stayed put.',
        ],
      },
      {
        title: 'Separate four kinds of thinking from doing',
        paragraphs: [
          'Think about a restaurant. The waiter carries the plate to your table, and that is the only part you see. Before the plate, someone noticed the kitchen was running low on flour. Someone compared suppliers. Someone decided which one to order from and how much. Someone checked that the delivery actually arrived on Thursday. If the owner hired a waiter and announced that the food was now taken care of, they would still be running the kitchen single-handed, just with help at the final ten metres.',
          'The sociologist Allison Daminger interviewed 35 couples about how household work gets divided and pulled the thinking work apart into four kinds. Anticipating: noticing that a need is coming, like realising the headcount will decide the bread order. Identifying options: finding out which bakeries are open and what they sell. Deciding: picking an amount and a shop within whatever budget was agreed. Monitoring: checking that the bread actually turned up when needed. Collection is a fifth thing, execution, and it is the only one of the five that is visible from the picnic blanket. Her study was of couples and was read here through its abstract. It does not say how every household divides work, and it did not test this picnic. What it offers is a vocabulary. With it you can see that handing someone the errand can leave all four kinds of thinking exactly where they were.',
        ],
      },
      {
        title: 'Make the proposed responsibility executable',
        paragraphs: [
          'A fuller handoff names the whole chain. Could you own bread from checking the numbers through confirming it arrived? In practice that means: confirm the headcount on Friday, compare what is available, choose within a budget limit, collect on Saturday, and check it is at the picnic before people sit down. That is a different request from please pick up the bread, and it is fair to say so out loud.',
          'It also comes with needs attached. Sam cannot decide on a quantity without access to the headcount. He cannot choose a bakery without permission to choose. He needs a way to flag a problem if the budget will not stretch or the collection time clashes. The dialogue shows the acceptance being made explicit, with Sam naming what he needs before he agrees. If Sam agrees only to collection, write that down as the agreement and let the planning stay visibly with Nila. A name in an owner column does not create consent, remove constraints, or quietly transfer the remaining thinking.',
        ],
      },
      {
        title: 'Why the errand gets mistaken for the job',
        paragraphs: [
          'Execution is the part that happens in public, so it collects the credit and the blame. The noticing, comparing, deciding, and checking happen inside one person\'s head and phone, and nobody sees them unless they stop happening. That is why the person doing them often cannot explain why they feel so tired, and why the person doing the errand honestly believes the work was shared.',
          'Two habits. When you describe who handles something, list the five parts and name an owner for each, including unknown. And when you hand a task over, hand over the information and the authority with it, or admit that only the last ten metres have moved.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'Negotiating the whole bread responsibility',
      alt: 'Nila proposes responsibility from headcount to arrival; Sam asks for information and authority, then accepts defined work.',
      caption: 'Read Sam\'s first line closely. Before accepting, he names three things he needs: the headcount, a budget limit, and the authority to choose. That is the difference between owning the bread and being sent for it. Then compare the final agreed scope with simply collecting a loaf Nila already chose. Original fictional dialogue.',
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
        'Make five rows: anticipating, options, decisions, monitoring, and execution. Use the fictional picnic rather than analysing a real person\'s habits; the point is to practise the split, not to audit someone.',
        'For each row write the specific action and who currently owns it. Where you are not sure, write unknown. Guessing an owner is how the thinking work disappears from the table in the first place.',
        'Add three columns: proposed owner, information they need, and authority they need. Check that choosing bread comes with an agreed budget limit; a decision with no limit is not really delegated.',
        'Draft the request as a complete responsibility with an exception route, such as tell me if the budget or the time cannot work. Leave the acceptance line blank until the fictional dialogue supplies it, because a request is not an agreement.',
      ],
      notice: 'Your revised agreement says who checks the headcount and who confirms arrival, not only who goes to the shop. The kitchen is on the table, not just the waiter.',
      troubleshooting: 'If every planning row still ends with a reminder from Nila, nothing but collection has moved. Either transfer the noticing and checking explicitly, with the information and authority they need, or write down honestly that only the errand changed hands.',
    },
    recall: {
      prompt: 'One housemate books a repair after another finds the problem, researches providers, selects a slot, and checks completion. What remains to discuss before calling it a full handoff?',
      hint: 'Name the retained thinking tasks and the authority needed to move them.',
      answer: 'Booking is the waiter carrying the plate. Before calling it a full handoff, name the other four parts and who holds each: who noticed the problem, who researched providers, who picked the slot, and who will check the work was done properly. Then ask what the booking housemate would need to take those on: access to the research, authority to choose a provider within a limit, and a route to raise a problem. If those have not been agreed, the honest description is that one housemate did the planning and the other made a phone call, which is fine as long as both of them know that is what happened.',
    },
    quiz: {
      question: 'A friend volunteers to arrange board-game supplies. Which agreement includes planning rather than just execution?',
      options: ['Collect the items after I choose them and send a reminder.', 'Pay for the items on my completed shopping list.', 'Check what is missing, choose within our limit, obtain it, and confirm readiness.'],
      correctIndex: 2,
      explanation: 'The third agreement covers the whole chain: check what is missing is anticipating, choose within our limit is deciding with authority, obtain it is execution, and confirm readiness is monitoring. Collecting items after someone else chose them and sent a reminder, or paying for a finished list, are real work, but they are the waiter\'s ten metres; the noticing, comparing, and deciding stay with whoever wrote the list.',
    },
    takeaway: 'Split any task into noticing, comparing, deciding, checking, and doing; the visible errand is only the last of those, so hand over the information and authority for the other four or say plainly that they stayed behind.',
    sourceNote: 'Daminger\'s qualitative study was checked through its abstract only. The picnic handoff is an original analogy, not a tested redistribution method or a claim about any gender.',
  },
  {
    id: 'fg-010',
    title: 'Collect the fact only one person knows before the room vote',
    outcome: 'Get the facts that only one person holds onto the table, with their sources, before anyone states a preference, without letting a fact win just because it is new.',
    scene: 'Three volunteers combine attendance and seating information before choosing a repair-workshop room.',
    sections: [
      {
        title: 'The popular room cannot seat the planned group',
        paragraphs: [
          'Three volunteers are choosing a room for a repair workshop. Everyone has seen the photographs of the Loft: exposed beams, big windows, lovely light. So when someone asks which room people fancy, the Loft wins the early show of hands. Nobody has asked whether it fits.',
          'In this fictional exercise, each person is holding a fact the others do not have. Maya has the registration list: 18 people are coming. Dev has a booking sheet for the Loft: 12 seats. Kai has the sheet for the Cedar room: 24 seats. Until those three facts land on the same table, the group can carry on agreeing that the Loft looks pleasant, which is the one fact they all already share, while the fact that decides the question sits unspoken in three different pockets.',
        ],
      },
      {
        title: 'Unshared information can be absent from the decision',
        paragraphs: [
          'Imagine three friends assembling a jigsaw, except each of them has a piece in their pocket and does not know the others have pieces too. They spend the evening discussing the picture on the box, because that is the thing all three can see. The conversation feels productive. The puzzle stays unfinished. Nothing in the box picture tells them to check their pockets.',
          'Psychologists have built this situation on purpose and called it a hidden profile: information is spread around a group so that nobody starts with the complete picture, and then the group is asked to decide. The original Stasser and Titus abstract describes four-person groups that mostly failed to pool what only one of them knew. A later review of 65 studies found the effect varies with how the discussion is run. These are laboratory findings, read here through abstracts. They do not prove this particular group will fail, and no meeting format comes with a guarantee. What they justify is one specific question before any vote: what relevant fact has not reached the room yet? A preference is not a fact. Asking which room people like will not surface a seating count that nobody has thought to mention, because the person holding it may not realise it matters until the criterion is said aloud.',
        ],
      },
      {
        title: 'Record sources and change the criterion openly',
        paragraphs: [
          'So write the criterion down first. Every attendee needs a seat. Then collect facts, with their sources and dates, before anyone states a preference. Maya: 18 registered, from the registration list this morning. Dev: Loft seats 12, from the booking sheet. Kai: Cedar seats 24, same source. Now do the arithmetic in the open. The Loft is short by 18 minus 12, which is 6 seats. Cedar has 24 minus 18, which is 6 to spare. The Loft fails the seating requirement. Cedar passes it, though whether it is free on the date and suits the tools is still unchecked.',
          'Two cautions. Do not let the newest fact become the boss just because it is new. A dramatic late contribution still has to be checked against the criteria and traced to its source; a booking sheet from two years ago might be wrong. And people are allowed to decline to share. Someone may hold information they are not free to pass on, and a planning sheet you fill in alone is preparation for the conversation, not a substitute for it.',
        ],
      },
      {
        title: 'Why the shared fact wins the conversation',
        paragraphs: [
          'Facts everyone knows get repeated because they are safe: nobody will contradict you, and repeating them feels like agreement. A fact only you hold feels risky to raise, especially if it spoils the popular choice. So groups drift toward discussing the box picture and away from the pockets, and the drift feels like consensus.',
          'Two habits. Before asking anyone what they prefer, ask what they know that the others might not, and write the criterion on the wall so people can tell which pocket facts matter. And when a fact arrives, record where it came from before you let it change the decision.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Three separate facts reach one decision sheet',
      alt: 'Maya brings attendance of 18, Dev brings Loft capacity of 12, and Kai brings Cedar capacity of 24 to a shared sheet.',
      caption: 'Follow the three arrows into the shared sheet. Each person brings one fact the others lack, and only the sheet holds all three. Read the sheet\'s line last: Loft short by 6, Cedar 6 spare. That arithmetic only exists once the pockets are emptied. Illustrative map of information, not room geometry; the sheets still need checking.',
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
        'Draw three columns: fact, source, uncertainty. Enter the three fictional counts, 18 attendees, Loft 12, Cedar 24, with where each came from. Do not write anyone\'s favourite room yet; preferences come after facts, not before.',
        'Write the criterion at the top: every one of the 18 needs a seat. Then calculate each room\'s shortfall or spare capacity. The arithmetic is trivial; the point is that it was impossible before the three facts met.',
        'Add one fact nobody has checked, such as whether Cedar is free on the date, and name where it would be verified. A room that passes seating can still fail elsewhere.',
        'Draft an optional invitation for the next meeting: before we vote, does anyone know something about these rooms the rest of us might not? If you are working alone, label the sheet preparation; you cannot pool a group from one chair.',
      ],
      notice: 'One contributed fact flipped the eligible room, and your sheet shows the source of every number and what remains unchecked. Nobody\'s preference has been lost; it just comes after the pockets.',
      troubleshooting: 'If your sheet is a list of favourite rooms, you have been discussing the box picture. For each room, ask what document or observation could change whether it meets the seating requirement, and go and get that instead.',
    },
    recall: {
      prompt: 'Friends choose a walking route from familiar photos. One friend knows a gate is locked on Sundays. How should that information enter the choice?',
      hint: 'Record the relevant fact and check its source before counting preferences.',
      answer: 'Treat the locked gate as a piece in someone\'s pocket. Get it onto the table before anyone counts hands: who said the gate is locked, when, and is the walk actually on a Sunday? If it is, the popular route fails a requirement no photo could show, exactly like the Loft and its 12 seats. But a surprising new fact is not automatically true either, so if the source is a memory from two summers ago, check the access before you redraw the route. Facts first, with sources, then preferences.',
    },
    quiz: {
      question: 'A volunteer reports a room-access restriction no one else has heard about. What should the group do next?',
      options: ['Record its source and check how it affects the agreed requirements.', 'Accept it as decisive because it is new to the group.', 'Postpone it until after a preference vote establishes the favorite.'],
      correctIndex: 0,
      explanation: 'A fact nobody else had is exactly what pooling is for, so it goes on the sheet with its source and gets checked against the agreed requirements. Treating it as decisive because it is new skips the checking; a surprising fact can still be out of date. Postponing it until after a preference vote means voting on the box picture while the piece that decides the question stays in a pocket.',
    },
    takeaway: 'Write the criterion first, empty the pockets second, and vote last; a fact only one person holds can decide the question, but it still needs a source and a check before it does.',
    sourceNote: 'Both the original study and hidden-profile review were checked through abstracts only. The room counts and collection format are original, not a demonstrated meeting intervention.',
  },
  {
    id: 'fg-011',
    title: 'Ask what constrains the power behind permission',
    outcome: 'Tell being allowed in today apart from being protected against uncontrolled cancellation tomorrow, and check whether a review route is usable rather than merely printed.',
    scene: 'Two music clubs allow rehearsal access today but differ in cancellation rules and independent review.',
    sections: [
      {
        title: 'The same open door can hide different arrangements',
        paragraphs: [
          'Two music clubs will both let you rehearse this evening. At the first, the coordinator can cancel your access whenever they like, without giving a reason, and there is nobody you can go to about it. As it happens, the coordinator is lovely. At the second, cancellation has to follow published criteria, you can ask for the reasons in writing, and an independent reviewer can overturn a decision that broke the rules.',
          'Tonight the two clubs feel identical. The door is open in both. The difference only shows up later: the first time you disagree with a decision, or the day the lovely coordinator moves away and someone else takes the keys. One club is offering you a kindness. The other is offering you a position.',
        ],
      },
      {
        title: 'Freedom from interference and from uncontrolled power',
        paragraphs: [
          'Think of two tenants. One has a generous landlord and no written lease. The other has a written lease with notice periods and a route to a tribunal. Neither has been bothered for years. Ask them whether they feel free in their homes and both will say yes. Ask them whether they can afford to complain about the broken boiler, and only one of them can answer without first thinking about the landlord\'s mood. The first tenant is free from interference. The second is free from depending on someone\'s goodwill. Those are different things, and the difference does not wait for the landlord to turn nasty.',
          'Political philosophers in the republican tradition, which here means a line of thought about liberty and not a political party, call the second kind of freedom non-domination. The question it asks is not only whether anyone is interfering with you today but whether anyone holds uncontrolled power over your choices. Power is arbitrary in this sense when the person holding it can change the terms at will and the people affected cannot contest it. Note what that does not mean. It does not mean rude or unpredictable; a charming coordinator can hold entirely uncontrolled power. And it does not mean that any discretion is domination. A coordinator can have real room to decide while still being constrained, if reasons, limits, and review genuinely bind how the discretion is used.',
        ],
      },
      {
        title: 'A protection must be usable',
        paragraphs: [
          'Suppose the second club closes your rehearsal room for a documented repair, under its published rules. That interferes with your evening, and non-domination never promised you an uninterrupted room. The philosophical question is whether the closure followed accountable criteria and whether you could challenge it if it had not. A constrained no is different from an arbitrary no, even when both leave you outside the door.',
          'Then check that the constraints are real rather than printed. Can a member actually request a review, or does the request go through the coordinator whose decision is being challenged? Can the reviewer change the outcome, or only offer an opinion? Does anyone answer the appeal address? A grievance form that nobody reads is a lease with no tribunal behind it. This is a way of examining how power is arranged in an institution. It is not a legal verdict, and it is not advice to confront an authority that might be unsafe to confront.',
        ],
      },
      {
        title: 'Why kindness feels like enough',
        paragraphs: [
          'Generous power is the hardest kind to question, because questioning it feels ungrateful and nothing has gone wrong. That is exactly when a structure is cheapest to build. By the time you need the review route, the person who could have agreed to it may be the person you need it against.',
          'Two habits. When you are told you are free to do something, ask what would have to happen for that permission to be withdrawn and who could stop it. And when you design a rule for others, build in the route for challenging you, while you are still the one who would be challenged.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Where the second club constrains cancellation',
      alt: 'A member requests access from a coordinator, published criteria constrain the coordinator, and independent review can restore access.',
      caption: 'Trace the arrows in two loops. First the constraint loop: published criteria bind the coordinator before any decision reaches the room. Then the appeal loop: the member goes to the reviewer, and the reviewer\'s arrow lands on access itself, not on the coordinator\'s goodwill. If that last arrow were missing, the review would be an opinion. Illustrative power map.',
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
        'Write the two club policies side by side: personal permission with no review, and published criteria with independent review. Writing them out is what makes the open door stop looking identical.',
        'Underline everything that would survive the coordinator being replaced tomorrow. A history of kindness does not survive; a written limit does. This is the lease test.',
        'Trace how a member asks for a review and what the reviewer can actually change. Mark any point where the route runs back through the coordinator or where the reviewer can only advise.',
        'Draft one policy request, such as written reasons on refusal and an independent review route. Keep it fictional if making such a request somewhere real would be unsafe for you; the exercise is about seeing the structure, not about picking a fight.',
      ],
      notice: 'Your proposed protection changes what constrains the coordinator, not how well the member stays in favour. That is the whole shift: from being liked to being positioned.',
      troubleshooting: 'If your safeguard reads as a promise to be fair, you have written down the landlord\'s good nature. Ask who can challenge a decision, who decides the challenge, and what happens when the promise is broken; if the answers are nobody and nothing, the protection is a mood.',
    },
    recall: {
      prompt: 'A hobby server administrator has never removed your account but can do so without explanation or review. What would this philosophical view ask beyond your satisfaction today?',
      hint: 'Examine what limits the power, not only its past use.',
      answer: 'It would set aside the fact that nothing has gone wrong and ask what the administrator\'s power rests on. Is removal governed by rules you can read, with a reason you can request and someone independent who can reverse it, and would all of that still hold if a new administrator took over tomorrow? You are the tenant with the generous landlord and no lease. Years of good treatment describe how you have been treated. They do not describe what protects you, and the day you need the protection is the day goodwill is least likely to be on offer.',
    },
    quiz: {
      question: 'A club adds an appeal form, but only the coordinator can decide whether an appeal reaches the reviewer. Which concern remains?',
      options: ['The club still sometimes closes rooms for repairs.', 'Members now have a written form to complete.', 'The person whose decision is challenged still controls access to review.'],
      correctIndex: 2,
      explanation: 'If the coordinator decides which appeals reach the reviewer, the person being challenged still controls the challenge, so the member remains dependent on the coordinator\'s goodwill; the lease still runs through the landlord. The form itself is not the concern, and repair closures made under published rules are constrained decisions, not arbitrary ones, even though they interfere with rehearsals.',
    },
    takeaway: 'An open door tells you about today; ask what constrains the hand that could close it, whether the constraints would survive a change of hands, and whether the route for challenging a decision runs through anyone other than the person who made it.',
    sourceNote: 'The inherited Stanford republicanism entry presents a contested philosophical account. These clubs are fictional; the exercise is neither a legal test nor a claim that paper rules guarantee freedom.',
  },
  {
    id: 'fg-012',
    title: 'Keep the account when the feedback boxes do not fit',
    outcome: 'Keep a person\'s own account intact when the form has no box for it, propose a label they can correct, and ask who controls the categories in the first place.',
    scene: 'A workshop attendee reports exclusion through unexplained shorthand on a form offering only venue or content complaints.',
    sections: [
      {
        title: 'The form loses the reason participation stopped',
        paragraphs: [
          'A newcomer comes to a workshop and afterwards fills in the feedback form. They write: the group kept using shorthand nobody explained, so I could never tell when I was supposed to join in. The form has two boxes, venue and content. The reviewer picks content and summarises the response as disliked the lesson.',
          'Read the two versions next to each other. The attendee described a barrier: a thing that stopped them taking part. The summary describes a taste: they did not like it. The explanation, the shorthand, has vanished, and with it any chance of fixing the problem. The attendee\'s words were perfectly clear before the form tried to classify them. The form did the damage.',
        ],
      },
      {
        title: 'Categories distribute attention and authority',
        paragraphs: [
          'Anyone who has rung a helpline knows the feeling. Press one for billing, press two for technical faults. Your problem is that the engineer never turned up, which is neither, so you press two and spend twenty minutes being asked to restart your router. The menu did not just fail to describe your problem. It routed you to the wrong people and recorded you as a technical fault. Whoever wrote the menu decided which problems could exist.',
          'That is what categories do. They decide which reports get counted together, which get sent to someone responsible, and which fall outside scope and quietly disappear. If only the established organisers can change the categories, newcomers have little say over how their experiences enter the record at all. Philosophers have a term for the deeper version of this, hermeneutical injustice: the disadvantage some people face because they have less influence over the shared concepts through which experiences get publicly understood. Be careful with the term. A missing checkbox does not by itself prove injustice of that kind. Our attendee had a perfectly adequate explanation; the problem was an institution not listening to it. So ask two separate questions. Is useful language missing? And are existing descriptions being ignored? And never make the person learn a philosophical term before their report can be taken seriously.',
        ],
      },
      {
        title: 'Preserve the description before proposing a label',
        paragraphs: [
          'The repair starts with keeping the original words. The attendee\'s sentence goes into the record exactly as written, and the form gains an open response field so the next person is not forced into two boxes. Then, and only then, propose a label: would participation instructions describe this? Ask, rather than assign, and let the person correct or refuse.',
          'In the dialogue the attendee narrows the label: not participation instructions in general, because written instructions existed, but unexplained group shorthand. That correction is the category becoming accurate. Record who decides whether the new category stays and how the attendee will hear the outcome, so the classification stays answerable to the account instead of replacing it. A better category may help the next report reach the right people. It does not fix the shorthand, and it does not amount to a philosophical diagnosis of the workshop.',
        ],
      },
      {
        title: 'Why the summary wins',
        paragraphs: [
          'Forms exist to make many reports comparable, and comparability rewards short labels over long accounts. The reviewer who writes disliked the lesson is not being lazy; they are doing what the form asks. The loss happens by design, which is why it needs a designed remedy: keep the account, add the open field, make the labels revisable.',
          'Two habits. Whenever you summarise someone\'s report, keep their sentence beside your label and check that the mechanism survived the trip. And whenever you are given two boxes, ask who gets to add a third.',
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: 'Check the label against the retained account',
      alt: 'An attendee explains unexplained shorthand; a reviewer proposes a category and accepts a more precise correction.',
      caption: 'Read the attendee\'s first line and hold onto it; everything else in the exchange is about not losing it. Notice that the reviewer proposes a label as a question, and the attendee tightens it to unexplained group shorthand. The last line names who decides whether the new category survives. Original fictional exchange.',
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
        'Copy the shorthand account onto a page beside the two boxes, venue and content, and do not tick either. Feel the pull to pick one anyway; that pull is the form doing the damage.',
        'Add an open response field, and a provisional category called participation instructions. Keep the original account in its own space so the category never stands in for it.',
        'Use the dialogue\'s correction to narrow your label to unexplained group shorthand. Then write one sentence saying how a respondent could correct or decline your wording; a label nobody can refuse is a verdict.',
        'Name a fictional person who decides whether the category stays, and a route for telling the attendee what was decided. Mark the philosophical reading, injustice or not, as unestablished; the form exercise does not settle it.',
      ],
      notice: 'Your revised form keeps the barrier description intact even if the proposed category is rejected or renamed. The helpline menu now has a way to grow a third option.',
      troubleshooting: 'If your summary has drifted back to disliked the workshop, the mechanism has fallen out. Restore it: unexplained shorthand prevented the attendee knowing when to take part. A summary that cannot explain why is a taste, not a report.',
    },
    recall: {
      prompt: 'A building form offers only noise or repairs, but a resident reports being excluded from scheduling decisions. What should remain in the record before a new category is agreed?',
      hint: 'An available checkbox is not a substitute for the account.',
      answer: 'The resident\'s own description, in their own words, plus a way for them to add to it. That is the helpline caller\'s actual problem, kept on file before anyone presses a button for them. Then propose a category as a question, let the resident correct it, and write down who has the authority to add it to the form and how the resident will find out. The two-box form is evidence that the categories are too narrow. On its own it is not evidence of the deeper injustice philosophers describe; that would need you to know whether the resident\'s account is being refused, not just unlabelled.',
    },
    quiz: {
      question: 'Several people already use a clear term for a barrier, but a committee refuses to record it. What is the most relevant next question?',
      options: ['Which simpler word should those people learn instead?', 'Who controls the categories, and why are their existing accounts excluded?', 'Which existing category receives the highest number of responses?'],
      correctIndex: 1,
      explanation: 'When speakers already have a clear term and the committee will not record it, the shortage is not in their vocabulary; it is in who controls the form. So the question is about authority over the categories and why those accounts are kept out. Teaching the speakers a simpler word treats them as the problem. Counting which existing box is most popular says nothing about who was never offered a box.',
    },
    takeaway: 'Keep the person\'s sentence beside any label you give it, propose categories as questions that can be refused, and ask who holds the power to add a box, because a form with two options has already decided which problems are allowed to exist.',
    sourceNote: 'The inherited Stanford entry presents hermeneutical injustice and critiques. This original form exercise is not a diagnosis or an empirically tested intervention.',
  },
  {
    id: 'fg-013',
    title: 'Distinguish a leaning edge from a blurred edge',
    outcome: 'Explain why a moving straight edge can lean in a single video frame, using row timing, and tell that lean apart from the blur caused by motion during one exposure.',
    scene: 'A supported phone records a hand-drawn vertical stripe moving sideways across a tabletop view.',
    sections: [
      {
        title: 'A straight stripe leans in a paused frame',
        paragraphs: [
          'Draw a bold vertical stripe on a card. Prop your phone up so it cannot move, start recording, and slide the card gently sideways through the frame. Then pause the clip. Quite often the stripe in the paused frame leans, even though its edge looks reasonably sharp. The card did not bend. Sharpening the image would not straighten it, because the lean is not a focus problem.',
          'What you are looking at is a single frame that was not captured all at once. Different parts of it represent slightly different moments. That is the thing to examine before you call every wobbly edge camera shake. This lesson walks through why it happens, with the simplifying assumption that the sensor reads its rows from top to bottom. Actual phones use various modes, and the arithmetic is illustrative rather than a measurement of your device.',
        ],
      },
      {
        title: 'Follow the stripe across three sample times',
        paragraphs: [
          'Think of a flatbed scanner. The light bar travels down the page a line at a time, so the top of the page is captured a moment before the bottom. Now imagine sliding the sheet of paper sideways while the scanner is running. Each individual line is recorded crisply, but each line catches the paper in a slightly different place. Put the lines together and a straight vertical rule comes out as a diagonal. Nothing is blurred. Everything is simply recorded at different times.',
          'A rolling shutter does the same thing inside a camera: it exposes the sensor one row at a time, top to bottom in our simplified version. Give the rows some hypothetical timings. The upper row samples at 0 milliseconds, the middle row at 8, the lower row at 16. The stripe is moving steadily to the right, so at those three moments it sits at horizontal pixel positions 20, 24, and 28. Each later row catches it a little further along. Connect the three recorded positions and you get a slanted edge with a top-to-bottom offset of 28 minus 20, which is 8 pixels. At any single instant the stripe was perfectly vertical. The frame just stitched together three instants.',
        ],
      },
      {
        title: 'Exposure duration answers a different question',
        paragraphs: [
          'Now a second question that sounds similar and is not: how long is each row exposed for? In the example the stripe covers 4 pixels every 8 milliseconds, so it moves half a pixel per millisecond. If each row is exposed for 1 millisecond, the stripe travels only half a pixel during that row\'s exposure. That half pixel is the blur. It is tiny here, which is why the leaning edge can look sharp.',
          'So there are two separate things, and they have two separate fixes. The lean comes from the gap between rows, the scanner bar moving down the page, and the only ways to reduce it are less sideways motion during the readout or a faster readout. The blur comes from motion during each row\'s own exposure, and a shorter exposure shrinks it. A shorter exposure does nothing for the lean, because it does not make the rows record at the same moment. Both effects can be present in one clip, so inspect lean and smear separately, and be willing to write down that you saw neither. Stabilisation, light, readout speed, and processing all differ between phones, which is why this small test cannot name the cause of every distortion you will ever see.',
        ],
      },
      {
        title: 'Why the two get confused',
        paragraphs: [
          'Both effects show up as an edge that is not right, so the instinct is to reach for the same remedy, usually more light or a faster shutter. That fixes one and leaves the other, and then the slanted but crisp pole in the bus-window clip becomes a mystery. Holding the scanner picture in mind keeps them apart: sharpness is about each line, lean is about the gap between lines.',
          'Two habits. When an edge looks wrong in a paused frame, ask two questions in order: is it leaning, and is it smeared? And before you blame your hands, check whether the lean appears with the phone held perfectly still and only the subject moving.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'One stripe, three recorded positions',
      alt: 'Upper row at 0 milliseconds records x 20 pixels; middle at 8 records x 24; lower at 16 records x 28.',
      caption: 'Follow the three circles from top to bottom and read the time in each label: 0, 8, 16 milliseconds. Each later row caught the stripe further right, 20 then 24 then 28. Draw a line through the three and you have the 8-pixel lean. The arrows mean later in time, not a bent card. Illustrative samples, not sensor proportions.',
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
        'Draw a bold vertical stripe on a card. Prop the phone securely, well back from any table edge, with the card in view under ordinary steady light. A fixed phone is what lets you blame the subject\'s motion and not your hands.',
        'Record three short clips: the card still, then sliding sideways slowly, then a little faster. Keep the phone exactly where it was between clips, so motion speed is the only thing that changed.',
        'Pause each clip on a frame mid-slide. Judge two things separately: does the edge lean, and is the edge smeared? Then play at normal speed and watch for blur you might miss in a still.',
        'For each clip write one of four results: skew visible, blur visible, both, or neither. Keep the original clips, and record neither when that is what you saw; a null result is still a result.',
      ],
      notice: 'Your notes separate an edge whose position changes down the frame from an edge whose detail is smeared within a row. That is the scanner distinction, observed on your own clip.',
      troubleshooting: 'If blur is hiding the edge, slow the slide down or add ordinary light rather than chasing a faster effect. Do not whip the card, use flashing lights, or wave the phone around; you are testing a subject moving past a fixed camera, nothing else.',
    },
    recall: {
      prompt: 'A bus-window clip shows crisp but slanted poles. Why would a shorter exposure alone not necessarily straighten them?',
      hint: 'Compare the duration for one row with the timing difference between rows.',
      answer: 'A shorter exposure shortens how long each row is lit, so it cuts the blur within each row; that is why the poles already look crisp. It does nothing about the time gap between rows. The sensor is still the scanner bar working down the page while the bus moves, so the top of each pole is recorded at one moment and the bottom at a later one, and the pole comes out slanted no matter how brief each row\'s exposure is. To reduce the lean you would need less sideways motion during the readout or a sensor that reads out faster.',
    },
    quiz: {
      question: 'Assuming rolling-shutter skew is the cause, which change directly reduces the position difference recorded between rows?',
      options: ['Sharpen the same recorded edge.', 'Reduce sideways movement during the sensor readout.', 'Shorten exposure while leaving movement and readout timing unchanged.'],
      correctIndex: 1,
      explanation: 'The skew comes from the stripe moving between the moments the rows are read, so reducing sideways movement during the readout directly shrinks the row-to-row position change; it is sliding the paper more slowly while the scanner bar passes. Sharpening changes contrast at the edge and leaves its geometry alone. A shorter exposure shrinks the smear within each row, which is a different fault, and leaves the lean untouched.',
    },
    takeaway: 'A frame is captured over time, like a scanner bar moving down a page; a leaning edge means the rows caught different moments, a smeared edge means motion within one row\'s exposure, and they need different fixes, so inspect them separately.',
    sourceNote: 'The inherited RED guide explains staggered capture and skew. Sample times, pixel positions, and exposure length are illustrative, not phone specifications or measured results.',
  },
  {
    id: 'fg-014',
    title: 'Inspect the false pattern introduced by sampling',
    outcome: 'Explain how fine repeated detail can turn into broad false bands when a picture is shrunk, and record which viewing stage showed the bands without guessing at the cause.',
    scene: 'A phone preview of an original striped drawing changes when reduced to a smaller display size.',
    sections: [
      {
        title: 'A smaller picture can show a pattern the page lacks',
        paragraphs: [
          'You draw a patch of closely spaced parallel lines, photograph it, and look at the photo on your phone. Zoomed in, the lines are separate and crisp, exactly as drawn. Then you pinch out to fit the whole picture on the screen, and broad soft bands appear across the patch, like ripples. Zoom back in and they vanish. Nothing on the paper changed. The bands are not in the drawing.',
          'What you are seeing is fine repetition colliding with the grid of dots used to display it. The result goes by the name moire, and it is false detail: a pattern manufactured by the viewing, not recorded from the page. Shrinking the picture is one place it can happen. The camera sensor and the screen can produce their own artifacts too, which is why a change in appearance tells you that something in the chain introduced a pattern, without yet telling you which link.',
        ],
      },
      {
        title: 'A deliberately simple sampling example',
        paragraphs: [
          'You have probably seen the wagon wheel in an old western that seems to turn slowly backwards while the stagecoach races forward. The film camera takes 24 pictures a second. If the wheel turns almost exactly one spoke-gap between pictures, each frame shows a spoke just short of where the last one was, and your eye reads a slow reverse crawl. The wheel is spinning fast. The sampling is too coarse to show it, so it invents a slower motion instead.',
          'A shrunken image does the same thing with space instead of time. Take a repeating cycle of four columns: dark, mid-grey, light, mid-grey, then dark again. Now imagine a crude shrinking method that keeps only every fifth column: columns 0, 5, 10, 15, and 20. Because the original repeats every four, those five columns land at cycle positions 0, 1, 2, 3, and 0. The kept tones are dark, grey, light, grey, dark. Between column 0 and column 20 the drawing completed five full cycles. The five kept samples describe one slow cycle. A coarse grid has turned rapid repetition into a broad pattern that was never there, and the general name for that is aliasing. The swatch cards show these chosen tones; they are not the output of any particular program.',
        ],
      },
      {
        title: 'Compare the delivered view, not only the original',
        paragraphs: [
          'Real resizing is less crude than keeping every fifth column. Most software blends neighbouring pixels together before shrinking, which smooths away the fine repetition that would otherwise alias. The price is a loss of fine detail. So the right check is not to assume that sharper is better; it is to look at the actual small output you are delivering and see whether bands have appeared.',
          'Keep the original file. Write down the export dimensions and the size you viewed it at. If the shrunken view shows bands and the original does not, you have found a condition worth investigating. You have not proved a faulty sensor, and you have not yet separated capture from resizing from display, because you changed more than one thing between the two views. And if nothing changes, write that down too; it is real evidence about this test, and a different line spacing or a different piece of software may behave differently.',
        ],
      },
      {
        title: 'Why false detail is so convincing',
        paragraphs: [
          'Moire looks like information. It has structure, it repeats, and it moves when you zoom, all of which read as something real on the page. The wagon wheel looks like it is really turning backwards. The habit that protects you is remembering that any repeating pattern can be a conversation between the subject and the grid, and that the grid changes every time the picture is resized.',
          'Two habits. Judge repeated fine detail at the size it will actually be seen, not at full zoom. And when a pattern appears or disappears between two views, name the viewing condition in your note and leave the cause open until you have changed only one thing at a time.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'One source cycle repeats every four columns',
        alt: 'The source tone cycle is dark, mid-gray, light, mid-gray, repeating from phase zero.',
        caption: 'Read the four swatches left to right, then imagine them repeating: dark, grey, light, grey, dark, grey, light, grey. That is the fine pattern on the page, one full cycle every four columns. Illustrative tones, not calibrated greys.',
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
        caption: 'Now read these five. They are columns 0, 5, 10, 15, 20 of the pattern above, and they go dark, grey, light, grey, dark: one slow cycle. The page had five cycles in that span. The sampling kept one. That is the wagon wheel, in greyscale. Illustrative point sampling only.',
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
        'Draw one patch of close parallel lines and one with wider gaps on the same sheet. Photograph both together under steady ordinary light, so the two patches share every condition except spacing.',
        'Compare a zoomed-in view with fit-to-screen for each patch. Note bands, missing lines, or no visible change. The wide patch is your control; if it bands too, spacing is not the only thing going on.',
        'If your existing controls allow it, export a smaller copy and inspect that as well. Record the export dimensions and the viewing size, and keep the original untouched.',
        'Write which comparison changed the appearance. Leave the stage that caused it, capture, resize, or display, marked unknown unless you managed to change only one of them.',
      ],
      notice: 'Your record ties any false pattern to a stated viewing condition instead of assuming it was on the paper. The drawing is cleared; the chain is under suspicion.',
      troubleshooting: 'If no bands appear anywhere, keep that result rather than hunting for one. Different line spacing and smoother resizing filters often produce nothing visible, and nothing visible is a legitimate finding.',
    },
    recall: {
      prompt: 'A striped shirt looks normal in the original clip but banded in a messaging preview. What should you compare before blaming the camera?',
      hint: 'Separate the original, exported file, and displayed preview.',
      answer: 'Compare the stages one at a time, at stated and matching viewing sizes: the original clip on the same screen, the exported file, and the messaging preview. The stripes are the fine pattern and the preview is the coarse grid, so the preview is the likeliest place for the wagon wheel to appear, but likeliest is not proven. The camera is only to blame if the banding is in the original at a comparable size. If it appears only after the app shrinks and compresses the video, the camera recorded the shirt faithfully and the delivery step invented the bands.',
    },
    quiz: {
      question: 'A poster\'s fine pattern changes only in one small preview. Which check best narrows the cause?',
      options: ['Increase sharpening before inspecting any output.', 'Replace the camera because the original contains fine lines.', 'Compare the original and output under matched viewing conditions, then vary one stage.'],
      correctIndex: 2,
      explanation: 'Comparing the original and the small output under matched conditions, then changing one stage at a time, is the only way to find out where the pattern enters the chain. Sharpening first adds another variable and can make aliasing worse. Replacing the camera assumes the fault is at capture, when a pattern that shows up only in one small preview points at resizing or display, the coarse grid, not the lens.',
    },
    takeaway: 'Fine repetition plus a coarse grid can invent a slow broad pattern that was never on the page, like the backwards wagon wheel; inspect repeated detail at its delivered size, record the viewing condition, and keep the cause separate from the artifact until you have changed one thing at a time.',
    sourceNote: 'Cambridge in Colour is a specialist photography reference, not a university study. The tone cycle is an original simplified example; real resampling filters differ.',
  },
  {
    id: 'fg-015',
    title: 'Make a counter slow down without extending the sequence',
    outcome: 'Make a stop-motion move appear to slow down by changing the spacing between positions, while keeping the image count, the hold time, and the clip length exactly the same.',
    scene: 'A small paper counter crosses two 28-centimeter tracks, one evenly spaced and one planned to slow down.',
    sections: [
      {
        title: 'The same start and finish can contain different motion',
        paragraphs: [
          'You have made a tiny stop-motion clip: a paper counter crosses a strip of table in eight photographs. It works, but it moves like a robot, the same lurch every frame. You want a second version where the counter seems to glide in and slow down as it reaches the finish. And you want it to be exactly the same length as the first.',
          'The instinct is to add frames at the end, but that makes the clip longer. The better move is to keep everything fixed: camera, start point, finish point, eight images, time per image. Change only where the counter sits in the images in between. Stop motion builds movement out of separate placements. The viewer sees each placement for the same slice of time. So the distance between one placement and the next is what decides how fast the counter appears to travel.',
        ],
      },
      {
        title: 'Mark two complete spacing plans',
        paragraphs: [
          'Think of footprints in snow. Someone walking at a steady pace leaves evenly spaced prints. Someone slowing to a stop leaves prints that get closer and closer together, even though each step still took about the same time. You can read their speed from the gaps alone. Nobody had to tell you how long each step lasted; the spacing carries the motion.',
          'Now lay the footprints on a 28-centimetre track. For steady motion, place the counter at 0, 4, 8, 12, 16, 20, 24, and 28 centimetres: seven gaps of 4 each. For the slowing version, place it at 0, 7, 13, 18, 22, 25, 27, and 28. Check the gaps: 7, 6, 5, 4, 3, 2, 1. Add them up and you get 28, the same track. The start and finish have not moved and there are still eight placements. What changed is that the travel has been pushed toward the beginning. The counter covers a quarter of the track in its first step and a single centimetre in its last. In animation terms this is spacing, and it is a different lever from timing, which is how long each image stays on screen.',
        ],
      },
      {
        title: 'Count holds separately from position changes',
        paragraphs: [
          'Put the clock on it. If every image is held for a quarter of a second, eight images last 8 times 0.25, which is 2 seconds, and that includes holding the final image. The seven changes of position, from the first image to the last, span 1.75 seconds. In the slowing version the first step covers 7 centimetres in a quarter second and the last covers 1 centimetre in the same quarter second. Same time, shrinking distance: that is what slowing down looks like when it is built out of still photos. The steady version spreads the 28 centimetres evenly, 4 per quarter second, which is why it lurches.',
          'Expect the result to look stepped rather than silky. Eight frames is a sketch, not a film. Keep the framing and the lighting identical between shots. An accidental nudge of the phone will add motion of its own and hide what the spacing is doing. If your editor cannot set equal still durations, you can still compare the two marked strips as plans and see the footprints. What you cannot do is swipe through a gallery by hand and call it a timing test. Your thumb will not hold each image for the same quarter second.',
        ],
      },
      {
        title: 'Spacing and timing are different dials',
        paragraphs: [
          'People who are new to this tend to reach for the timing dial for everything: want it slower, hold the frames longer. That slows the whole clip, including the parts that were fine. Spacing lets you shape the motion inside a fixed length, which is almost always what you actually wanted. The two dials multiply together, and knowing which one you are turning is most of the craft.',
          'Two habits. Before you shoot, write out the full list of positions and check the gaps sum to the track length, so the finish does not drift. And when a clip feels wrong, ask whether the problem is how long each image is held or how far apart the placements are, because they need different fixes.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Keep the camera and the two endpoints fixed',
        alt: 'A fixed phone views a strip with start at 0 centimeters and finish at 28 centimeters.',
        caption: 'Look at what stays the same: the phone is fixed, image 1 sits at 0 centimetres and image 8 at 28 centimetres in both versions. Everything that differs between the steady and the slowing clip happens in the six placements between these two marks. Schematic arrangement, not to scale.',
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
        caption: 'Each bar is one quarter-second step. Read them left to right: 7 centimetres, then 4, then 1. Same time for each, shrinking distance; that is the footprints getting closer together. Only three of the seven gaps are shown, and the whole sequence still lasts 2 seconds.',
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
        'Mark two 28-centimetre strips, one with the steady positions and one with the slowing positions, using the complete lists. Join sheets if you need to, and label the marks image 1 through image 8. These are your two sets of footprints.',
        'Check that both strips begin at 0 and end at 28, then work out the seven gaps on each. The steady strip should give seven 4s; the slowing strip should give 7, 6, 5, 4, 3, 2, 1. If the gaps do not sum to 28 the finish has drifted.',
        'If you are recording, photograph the counter at each mark without moving the phone or changing the light between shots. Any camera movement adds motion that is not in your plan.',
        'Assemble with equal 0.25-second holds if your editor allows it, and watch both versions back to back. If it does not, keep the labelled strips and mark playback untested rather than swiping through a gallery and guessing.',
      ],
      notice: 'Both plans share endpoints and image count, yet the second plan\'s gaps shrink from 7 centimetres to 1. You changed the motion without touching the clock.',
      troubleshooting: 'If one version plays longer than the other, the timing dial has moved: check the hold settings and look for automatic transitions the editor added. And remember a manual gallery swipe is not an equal-time comparison, however steady your thumb feels.',
    },
    recall: {
      prompt: 'An icon must cover the same path in the same time but arrive more gently. Which variable would you change in its position plan?',
      hint: 'Keep the clock fixed and redistribute travel.',
      answer: 'Change the spacing, not the timing. Keep the start, the finish, and the total duration fixed, and move the intermediate positions so the icon covers more ground early and less and less as it approaches the end, the footprints bunching up before the stop. Each equal time step then carries a smaller distance near arrival, which reads as easing in, and the clip is still exactly as long as before. Holding the final frames longer would also feel gentler, but it would lengthen the sequence, which the brief rules out.',
    },
    quiz: {
      question: 'You double every still hold from 0.25 to 0.5 second without changing positions. What stays unchanged?',
      options: ['The 28-centimeter path and seven position gaps.', 'The 2-second total playback duration.', 'The amount traveled per second.'],
      correctIndex: 0,
      explanation: 'Doubling the holds turns the timing dial and leaves the spacing dial alone: the counter still visits the same eight positions along the same 28-centimetre path, with the same seven gaps between footprints. But eight holds of half a second now last 4 seconds instead of 2, so the total duration changes, and because the same distance is spread over twice the time, the travel per second halves. Holds and spacing are different levers.',
    },
    takeaway: 'Read motion from the gaps like footprints in snow: image count and hold length set how long the clip runs, and the distances between placements decide how fast it feels, so to slow an arrival without lengthening the sequence, bunch the positions near the finish.',
    sourceNote: 'The inherited Adobe pages are craft references. These positions and durations are original; no particular software, realism, or audience response is promised.',
  },
  {
    id: 'fg-016',
    title: 'Caption the sound when it becomes meaningful',
    outcome: 'Plan captions that carry speech and meaningful sounds at the moment they become audible, without revealing them early and without dressing up visual events as sound.',
    scene: 'An original parcel scene uses an offscreen sentence and knock to motivate a visible movement.',
    sections: [
      {
        title: 'The knock explains the next action',
        paragraphs: [
          'You have filmed a 15-second tabletop scene. A parcel sits in frame. From second 2 to second 4 a voice off camera says: the parcel is ready. From second 7 to 8 there is a gentle knock, also off camera. Then the parcel slides toward the edge of the frame, as if someone is pulling it toward a door you cannot see.',
          'Now watch it with the sound off. The parcel moves for no reason. Someone who cannot hear the recording is in exactly that position. They need the sentence and they need the knock, because the knock is the reason attention swings toward the unseen door. A transcript of the dialogue alone would give them the sentence and leave the knock, and therefore the whole scene, unexplained.',
        ],
      },
      {
        title: 'Preserve information and its arrival time',
        paragraphs: [
          'Anyone who has watched a film on a muted television in a gym or a waiting room has lived the difference. Subtitles give you the lines, and that is often enough. Then the music stops, every character freezes, and you have no idea why, because the thing that changed was a sound and the subtitles only carried words. The information was there in the room for everyone else. It did not reach you.',
          'Captions exist to carry both: speech and the sounds that mean something, each placed in time with the recording. In this plan the sentence appears from 2 to 4 seconds, and a short description of the knock appears from 7 to 8. The timing is not a nicety. Show the knock caption from the start and you have told the viewer what is coming before anyone could hear it, which rewrites the scene. Identify the speaker when it would otherwise be unclear, which includes an off-screen voice whose identity matters. You do not need to label every quiet stretch; silence that carries no meaning needs no caption. And notice the boundary at second 8. The parcel moving is visual. Describing that movement for someone who cannot see it is audio description, a separate decision for a separate channel. It is not something to smuggle in as a sound caption, because no sound happened.',
        ],
      },
      {
        title: 'Check the actual recording and exported result',
        paragraphs: [
          'Automatic captioning will usually get most of the words and will often miss the speaker, a mumbled phrase, and almost every non-speech sound. So listen to your own recording. Fix the wording. Put each caption at the moment the sound is actually audible in your clip, not at the sample times in this lesson, which belong to an imaginary recording. Check the caption sits where it does not cover the thing it is explaining.',
          'Then be honest about what you have. A list of timestamps and lines is a plan. It is not a captioned video. If your editing tools can burn or attach captions, export, play the result with captions switched on, and compare what you read against what you hear. If you cannot export, keep the plan and label the video as not yet captioned. Reporting a plan as a finished accessibility feature is how a muted viewer ends up watching a parcel move for no reason.',
        ],
      },
      {
        title: 'Why the knock gets left out',
        paragraphs: [
          'Speech is obviously information, so it gets captioned. Sounds feel like atmosphere, so they get skipped, right up until the moment one of them is the reason the next thing happens. The test is simple: if the sound were removed, would a hearing viewer be confused? If yes, it is information and it belongs in the captions, at the moment it arrives.',
          'Two habits. Watch your clip once with the sound off and write down every moment you could not explain; those are your missing captions. And keep two lists, what was heard and what was seen, so a visual event never gets dressed up as a sound.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Audio information in the parcel scene',
      alt: 'No necessary caption at 0 to 2 seconds; speech at 2 to 4; knock at 7 to 8; visual movement afterward.',
      caption: 'Read the four rows against the gym-television test. Rows two and three are things you would miss with the sound off, so they get captions, each at the time it becomes audible. Row one is silence that explains nothing, so it gets none. Row four is something you would see, which is a different channel entirely. Illustrative timings; use your own recording\'s clock.',
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
        'Record your own 15-second scene with one spoken sentence and one gentle off-screen knock. Keep other people and anything private out of frame; this is a test clip, not a home video.',
        'Play it back with sound and note the actual start and stop times of the sentence and the knock. Write the caption text beside those times. Your clip\'s clock, not this lesson\'s.',
        'Read your list against the recording once more. Check the words, confirm every meaningful sound has an entry, and delete any entry that announces the knock before it can be heard.',
        'If your tools allow it, add the captions, export, and watch the export with captions on, comparing eye and ear. If they do not, keep the timestamped plan and label the video not yet captioned.',
      ],
      notice: 'Your plan carries the sentence and the knock at the moments they become audible, and the parcel\'s later movement is left to the visual channel rather than being written up as a sound. A muted viewer would now know why the parcel moves.',
      troubleshooting: 'If automatic captions skipped the knock, add it by hand; that omission is normal. If you have no way to export a captioned copy, report a plan, not a captioned video, so nobody downstream assumes the work is finished.',
    },
    recall: {
      prompt: 'In a homemade mystery clip, music stops just before someone reacts. There is no speech. What caption information might matter, and when?',
      hint: 'Meaningful changes in sound can carry information without words.',
      answer: 'The music stopping is the gym-television moment: a hearing viewer feels the silence drop and understands the reaction, and a muted viewer sees someone react to nothing. If the stop explains the reaction, caption it, something like music stops, timed to the instant the music cuts. Not earlier, because an early caption would hand over the surprise before the clip does. And do not caption what caused the stop if the recording never shows or sounds it; you are carrying the audio across, not adding a narrator.',
    },
    quiz: {
      question: 'A key clatter at second 6 makes a character turn. Which caption plan preserves that information?',
      options: ['Show the key-clatter caption throughout the clip for context.', 'Place an accurate key-clatter description at the audible event.', 'Describe only the character turning, because it is visible.'],
      correctIndex: 1,
      explanation: 'An accurate description of the key clatter placed at second 6 gives a muted viewer the same information a hearing viewer gets, at the same moment, so the turn makes sense. Showing it throughout the clip announces the sound before it happens and rewrites the scene. Describing only the character turning records the visible reaction while dropping the audio event that caused it, which is the parcel moving for no reason.',
    },
    takeaway: 'Watch your clip with the sound off and caption every moment you could not explain, speech and meaningful sound alike, each at the instant it becomes audible; leave silence alone, keep visual events on their own channel, and never report a plan as a captioned video.',
    sourceNote: 'The inherited W3C guide supports accurate synchronized captions. These scene timings are original; a plan does not verify playback or replace audio description.',
  },
  {
    id: 'fg-017',
    title: 'Match the ellipse opening to the circular face you see',
    outcome: 'Draw a tilted circle by comparing how wide and how open it looks from where you are, instead of repeating the same oval at every tilt.',
    scene: 'A plain circular lid is viewed near the center of vision at three comfortable tilts.',
    sections: [
      {
        title: 'The lid stays circular while its image changes',
        paragraphs: [
          'Pick up a plain circular lid, a jam jar lid will do, and hold it in front of you at arm\'s length. Face-on, the opening is a full round shape. Now tilt the top edge away from you a little. The opening narrows. Tilt it further and it becomes a sliver. Turn it back and it opens up again. The lid has not changed shape once. Only its picture has.',
          'Most of us learned an oval at about age six and have been drawing that same oval on every cup, plate, and wheel since. The habit is strong enough to override what is in front of you. The fix is to compare the opening you can actually see before you add anything else: thickness, shine, a decorated rim. None of those details can rescue an opening drawn for a different tilt. They just decorate the wrong shape more confidently.',
        ],
      },
      {
        title: 'Use two spans to describe the opening',
        paragraphs: [
          'Think of a coin lying on a table. Stand directly over it and it is a circle. Crouch down so your eye is nearly level with the table and it is a thin line. Everywhere in between, it is an ellipse, and what changes as you move is one thing: how open it is from top to bottom. Side to side, the coin looks the same width from every position. Up and down is where the tilt shows.',
          'That gives you two measurements to carry around. The widest line through the centre of an ellipse is called the major axis. The shortest line through the same centre, at right angles to the first, is the minor axis. Plain words: how wide, and how open. Put numbers on them. Suppose every opening you draw is 60 millimetres wide. If the narrow span is 48, the ratio is 48 divided by 60, which is 0.8, a nearly face-on opening. A narrow span of 30 gives 0.5, half open. A narrow span of 12 gives 0.2, almost edge-on. The smaller the ratio, the more closed the opening. These are drawing proportions chosen to illustrate the idea, not measurements of your lid, and the ratio is not being converted into a viewing angle here. The landmark diagram shows where the two spans meet the rim for the 60 by 30 case.',
        ],
      },
      {
        title: 'Check the halves before decorating the contour',
        paragraphs: [
          'Lightly mark both axes on your sketch, then look at the four quarters they make. Is the left half the mirror of the right? Is the top half the mirror of the bottom? A lopsided contour can have the right overall width and height and still look wrong, and a small correction to one quarter fixes it. Then raise your eyes to the lid and ask the only question that matters: does my drawing open as much as that circular face opens from where I am sitting?',
          'Keep your head still while you compare, because moving it changes the tilt and therefore the answer. This is a near-centre, introductory observation exercise. When a circle sits well off to the side of your view, or when you are building a wide perspective drawing, the axes stop lining up as simply as they do here, so do not force every ellipse into one habitual orientation. The point for now is narrower: look, measure two spans, draw what the ratio says.',
        ],
      },
      {
        title: 'Why the childhood oval survives',
        paragraphs: [
          'The brain stores objects as what they are, not as how they appear from here, which is why you know the lid is round even as it looks like a sliver. Drawing requires the opposite: setting aside what you know and recording what you see. The two-span check is a small ritual that forces the switch, because you cannot measure a ratio from memory.',
          'Two habits. Before adding any detail to a circular object, write down its wide span and narrow span, even roughly, and compare the ratio to the object. And draw the same lid at three tilts in a row, so the habit of one oval for everything breaks against three different ratios on one page.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Four rim landmarks for the middle opening',
        alt: 'Left and right rim landmarks define a 60-millimeter span; top and bottom define a perpendicular 30-millimeter span.',
        caption: 'Find the two spans first. Left rim to right rim is 60 millimetres, the wide span. Top rim to bottom rim is 30, the narrow span, crossing the first at right angles through the centre. The ratio is 30 over 60, half open. Illustrative landmarks, not a traced ellipse or a scale drawing.',
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
        caption: 'All three openings are 60 millimetres wide, so the only thing that changes is the bar height: 48, 30, 12. Read each as a ratio, 0.8, 0.5, 0.2, and picture the coin as you crouch lower and lower toward the table. No tilt angle is being inferred.',
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
        'Hold the lid comfortably near the centre of your view and plant your head in one position. Moving your head changes the tilt, and the tilt is the thing you are trying to record.',
        'Make three small drawings: nearly face-on, partly tilted, and nearer edge-on. Look at each position for a few seconds before touching the pencil, so the drawing comes from the lid and not from the childhood oval.',
        'On each drawing, mark the wide span and the narrow span through the centre. Compare their proportions, then check that the four quarters mirror each other.',
        'Pick the opening that least matches the lid and correct it, leaving the first contour faintly visible beside the fix. The comparison is where the learning is.',
      ],
      notice: 'Your three openings differ in how open they are, following the three tilts, instead of repeating one memorised oval. The ratios on the page track the lid in your hand.',
      troubleshooting: 'If all three sketches look alike, ignore everything except the narrow span and redraw just that. And do not try to match the 48, 30, and 12 from the lesson; those illustrate the idea, and your lid at your tilts will give you its own numbers.',
    },
    recall: {
      prompt: 'A bicycle wheel in a reference is viewed almost edge-on, but your sketch looks nearly circular. What relationship would you correct before adding spokes?',
      hint: 'Compare the short span with the long one.',
      answer: 'Correct the ratio of the short span to the long span before anything else. An almost edge-on wheel is the coin seen from table level: the wide span stays the full diameter and the narrow span collapses to a fraction of it, so a nearly circular sketch is drawing the wheel you know instead of the wheel you see. Shrink the opening until the narrow span matches what the reference shows, check the four quarters mirror each other, then add spokes. Spokes drawn into the wrong ellipse only make the wrong ellipse more convincing.',
    },
    quiz: {
      question: 'A circular badge is drawn almost edge-on in this simplified view. Which 60-millimeter-wide profile is most closed?',
      options: ['A narrow span of 48 millimeters.', 'A narrow span of 30 millimeters.', 'A narrow span of 12 millimeters.'],
      correctIndex: 2,
      explanation: 'All three profiles share the 60-millimetre wide span, so the narrow span alone decides how open each one is, and 12 gives the smallest ratio, 0.2, the coin seen from nearly table level. The 48 profile is almost face-on and the 30 profile is half open. The badge is perfectly circular in every case; its picture is not, because the picture depends on the tilt.',
    },
    takeaway: 'A circle keeps its shape and its picture does not; before drawing any rim, measure how wide and how open it looks from where you are, draw that ratio, check the halves mirror, and only then add the details that cannot fix a wrong opening.',
    sourceNote: 'The inherited Drawabox lesson supplies introductory ellipse terminology. The profiles are original schematics; simplified axis checks are not universal projective-geometry rules.',
  },
  {
    id: 'fg-018',
    title: 'Build tone from line spacing and crossing layers',
    outcome: 'Build distinct hatched tones by changing line spacing and crossing layers instead of pressing harder, and use stroke direction to describe a curved surface.',
    scene: 'A ballpoint study compares four tonal patches and a curved paper ribbon.',
    sections: [
      {
        title: 'A pen leaves light between its marks',
        paragraphs: [
          'Take a ballpoint and try to shade a small square darker. The obvious move is to press harder. Press harder and the line gets a little darker, your hand gets tired, and the pen starts to skid and blob. There is a better lever, and it is already on the page: the white paper between your lines.',
          'A patch reads dark when ink covers more of the light paper and light when more paper shows through. So draw a family of separate parallel lines with gaps between them. The gaps are visible paper, and the patch reads light. Draw the next family closer together and the same pen at the same pressure produces a darker patch, simply because less paper is showing. That is hatching: tone built from repeated separate strokes, not from rubbing them into a smooth grey.',
        ],
      },
      {
        title: 'Cross another family over the first',
        paragraphs: [
          'Think of window blinds. Tilt the slats open and the room is bright. Tilt them halfway and it dims. Close them further and it is darker still. The slats never changed colour. What changed is how much light gets through the gaps. Hatching works the same way, and crosshatching is like hanging a second blind at an angle behind the first: the two sets of slats block gaps the other left open, and the room gets darker again without either blind being any blacker.',
          'On a flat practice patch, let the first family rise from lower left to upper right, and the crossing family fall from upper left to lower right. The direction diagram shows one stroke from each family; in practice you repeat many neighbouring strokes to build each layer. There is no magic crossing angle. What matters is that you keep the pressure comfortable and change only two things deliberately: how close the lines are, and how many layers cross. The four flat swatches in the first card are lightness targets, not pictures of actual ink. Aim to produce a spaced-line patch, a closer-line patch, a patch with one crossing layer, and a denser crossed patch. And protect your lightest patch. Once ink closes its gaps you cannot reopen them; the blinds only turn one way with a pen.',
        ],
      },
      {
        title: 'Tone and direction do different jobs',
        paragraphs: [
          'Now curl a strip of paper into a gentle bend and sketch it. This time let some of the hatch strokes curve across the strip as if they were drawn on its surface, following the bend. Put that sketch next to a flat patch of roughly the same darkness. The tones match. The two drawings do not say the same thing, because one of them tells you about a shape and the other does not.',
          'That is the split to carry forward. Density, how much paper is covered, controls how light or dark an area reads. Direction, which way the strokes run, can suggest which way a surface turns. Check both against the object rather than laying the same diagonal everywhere out of habit. Two cautions. Ink cannot restore a highlight, so decide where the light paper stays before you start. And pens and papers differ, so the spacing that gives you a midtone on one sheet may give you something else on the next.',
        ],
      },
      {
        title: 'Why pressure is the wrong lever',
        paragraphs: [
          'Pressure feels like control because it is effort, and effort feels like it should produce darkness. But it gives a narrow range, tires the hand, and wrecks the line. Spacing and layering give a wide, repeatable range at the same relaxed grip, and they leave a record on the page of exactly what you did, so you can do it again.',
          'Two habits. When a patch needs to be darker, close the gaps or add a crossing family before you press harder. And when a drawing looks flat despite being dark enough, look at stroke direction, not tone; the blinds may be closed but hanging the wrong way.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Four tone targets for different mark coverage',
        alt: 'Four flat targets progress from light to dark for spaced lines, closer lines, crossing, and denser crossing.',
        caption: 'Read the four swatches as four settings of the blinds, from open to nearly closed. Each step is reached by less paper showing, closer lines or another crossing layer, never by pressing harder. The tones are lightness targets only, not simulated ink; your paper and pen will land somewhere near them.',
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
        caption: 'Look at the two arrows: one family rises from lower left, the crossing family falls from upper left. Each arrow stands for one stroke; a real patch repeats dozens beside it. The angle is not sacred. The point is that a second family covers gaps the first left open.',
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
        'Draw four small empty squares. Fill the first with separated strokes and the second with closer strokes, keeping the pressure the same for both. The only thing that should change is the gap between lines.',
        'In the third square, add a crossing family over spaced lines; in the fourth, cross over closer lines. Write under each square what you changed, so the record on the page matches the swatch targets.',
        'Curl a scrap strip of paper into a soft bend, no sharp crease, and sketch it. Let one family of strokes curve with the surface instead of running straight across it.',
        'Place the ribbon sketch next to a flat patch of similar darkness and mark one place where stroke direction tells you about the bend. That mark is the difference between tone and shape.',
      ],
      notice: 'Your four squares step through distinct tones at one relaxed pressure, and the ribbon uses direction as well as darkness to say which way it curves. Blinds for tone, slats for direction.',
      troubleshooting: 'If all four squares have ended up equally dark, stop adding ink; you cannot reopen the gaps. Start a fresh square with wider spacing and keep your grip light, because pressing harder is the lever you are trying to stop using.',
    },
    recall: {
      prompt: 'A drawn pear has a dark shaded side but still looks like a flat cutout. What could you compare besides adding more ink?',
      hint: 'Look at how strokes relate to the observed surface.',
      answer: 'Compare the direction of your strokes with the way the pear actually curves. A dark side made of straight diagonal lines tells the eye only that the area is dark, like closed blinds hanging flat, so it reads as a cutout. Strokes that follow the swell of the fruit, wrapping around the form, give the eye a surface to believe in. Check the contour too, since a lumpy outline undoes any amount of shading. More ink would make the flat shape darker, not rounder; direction is what you are missing.',
    },
    quiz: {
      question: 'Your ballpoint midtone patch became too dark. What change best makes the next patch lighter?',
      options: ['Leave wider gaps or use fewer layers at similar pressure.', 'Add a dense crossing layer to smooth the patch.', 'Keep the same coverage but turn every line to another angle.'],
      correctIndex: 0,
      explanation: 'Wider gaps or fewer layers leave more light paper showing, which is the only thing that makes a hatched patch lighter; it is opening the blinds. Adding a dense crossing layer closes more gaps and makes the patch darker still. Turning every line to a new angle at the same coverage changes the texture and direction but leaves roughly the same amount of paper covered, so the tone barely moves.',
    },
    takeaway: 'Build tone like window blinds, by how much light paper shows through the gaps, and let stroke direction describe which way the surface turns; close gaps and add crossing layers before you ever press harder, and protect the light paper you cannot get back.',
    sourceNote: 'The inherited LACMA teaching article supports layered and directional hatching. These targets and diagrams are original craft studies, not copied artwork or universal mark-making rules.',
  },
  {
    id: 'fg-019',
    title: 'Suggest ridges with selected cast shadows',
    outcome: 'Suggest a ridged surface with a few selected cast shadows whose cause you can point to, leaving out detail deliberately instead of outlining every edge.',
    scene: 'Ridged cardboard under side light becomes two drawing studies: full outlines and selected shadows.',
    sections: [
      {
        title: 'Outlining every ridge gives every ridge equal attention',
        paragraphs: [
          'Set a piece of ridged cardboard on the table with a lamp or window off to one side, and look along the ridges. You can draw this two ways. The first traces every little edge of every ridge, a neat row of parallel outlines. The second ignores most of the edges and records only the dark shapes that sit beside some of the ridges, leaving stretches of paper untouched.',
          'The second drawing, done well, suggests the whole corrugated surface with far fewer marks, and it does so without wrapping a contour around every raised strip. The difference is not laziness. It is choosing which of the visible relationships to keep. And the choice has to start from a surface you can look at, because the alternative is drawing a zigzag texture symbol from memory, which describes cardboard in general and this cardboard not at all.',
        ],
      },
      {
        title: 'Trace why one particular patch is dark',
        paragraphs: [
          'Think of a low sun on a beach. The sand is covered in ripples, and you can see every one of them, not because anyone outlined them but because each ripple throws a small shadow onto the sand behind it. Walk the same beach at noon, sun overhead, and the ripples nearly vanish. Same sand, same shape. The shadows were doing the describing. A dark shape caused by something standing between a surface and the light is a cast shadow.',
          'The cross-section sketch shows the mechanism. Light comes from the upper left, hits a ridge, and the ridge blocks it from reaching the patch directly behind on the right. A patch further left has nothing in the way, so it stays lit. Look at where the arrows end: at the ridge, or at the lit paper. No arrow is drawn passing through the shadowed patch, because no light gets there. Now the cautions, which are the whole skill. Not everything dark is a cast shadow. A black printed stripe stays black however you light it; that is pigment. A surface that turns away from the light goes dark without anything blocking it; that is form shading. Reflections and dark materials add more. For this narrow study, pick only the patches where you can point at the ridge doing the blocking, and mark anything you cannot explain as uncertain rather than forcing it into the exercise.',
        ],
      },
      {
        title: 'Omit marks without losing the surface relationship',
        paragraphs: [
          'Make the two studies side by side. First, outline the ridges. Second, draw only selected cast-shadow shapes, enough of them to establish how far apart the ridges are and which way they run, and leave some neighbouring shadows out entirely. Then step back and ask whether the larger surface still reads as corrugated cardboard when half the edges are missing.',
          'Usually it does, and that is implicit texture: the marks suggest a field of small forms without outlining each one. It is a craft option, not a law. Outlines are fine when they serve the drawing. But if your selective version stops reading, the repair is to restore one observed shadow relationship, one more real patch behind one more real ridge, not to panic and fill every gap with ink. The eye completes a pattern from a few honest samples. It cannot complete a pattern from a smear.',
        ],
      },
      {
        title: 'Why a few true shadows beat many outlines',
        paragraphs: [
          'Outlines treat every ridge as equally important, which is how no ridge ends up important. A handful of cast shadows, each one caused by something you can point to, carries the light direction and the relief at the same time, because a cast shadow only exists where there is a light and a bump. The outline carries neither.',
          'Two habits. Before you darken any patch, ask what is blocking the light from it, and if you cannot answer, leave it light or mark it uncertain. And when a texture study feels overworked, erase alternate marks and see whether the surface survives; it usually does.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'A ridge blocks light from the patch behind it',
      alt: 'Light at upper left reaches a ridge or an exposed patch; the patch behind the ridge at lower right is in cast shadow.',
      caption: 'Follow the two arrows from the light. One stops at the ridge: that is the blocking, and the dark patch at lower right sits in the gap the ridge creates. The other reaches the exposed paper at lower left with nothing in the way. No arrow enters the shaded patch, which is the whole point. Illustrative cross-section, not measured lighting.',
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
        'Put the cardboard or crumpled strip where light arrives from one side, and draw a small arrow on your page marking that direction. Every shadow you choose must be consistent with it. Keep the paper away from hot lamps.',
        'Pick one ridge and find the patch it shadows, the low-sun beach ripple. Then look for dark areas that are not cast shadows, printed marks, turned-away faces, and set them aside rather than treating every dark mark alike.',
        'Make two small studies: one outlining the ridges, one using only selected cast-shadow shapes whose cause you can point to.',
        'In the second study, deliberately leave out some neighbouring shadows. Compare which version still communicates the surface, and if the selective one stops reading, restore one real shadow relationship rather than many.',
      ],
      notice: 'Your second study suggests ridges with fewer explicit boundaries, and every shadow in it has a ridge you can point to and a light direction it agrees with. That is the beach at low sun, on paper.',
      troubleshooting: 'If no clear shadow appears, the light is too flat; gently change the angle of the material in ordinary light until one ridge casts a visible shadow. If a dark patch still has no explainable cause, leave it unclassified rather than drawing it as a shadow.',
    },
    recall: {
      prompt: 'A patterned fabric has dark printed dots and darker patches beside folds. Which marks belong in a cast-shadow-only study, and what must you check?',
      hint: 'Ask what blocks the illumination, not merely what is dark.',
      answer: 'Only the patches where a fold stands between the light and another part of the fabric belong, the ripple shadows on the beach. Before including one, check the relationship: where is the light coming from, and which fold is blocking it from this patch? The printed dots stay dark under any light, so they are pigment and stay out. A dark reflection or a face of the fabric turned away from the light is also dark, and also not a cast shadow. Low value is not the test; blocked light is.',
    },
    quiz: {
      question: 'Which observed patch best fits the cardboard shadow study?',
      options: ['A black printed stripe that remains dark across lighting changes.', 'A patch behind a ridge where the ridge blocks the side light.', 'A dark face of a ridge turned away from the light, without another form blocking it.'],
      correctIndex: 1,
      explanation: 'The patch behind a ridge, where the ridge blocks the side light, is the one with a visible cause you can point to; it is the ripple shadow at low sun. The printed stripe stays dark under any lighting, so it is pigment, not shadow. The face turned away from the light is form shading, which is real and worth drawing in other studies but is exactly what this exercise sets aside.',
    },
    takeaway: 'Describe texture the way a low sun describes a beach, with a few cast shadows you can trace back to a ridge and a light, chosen and partly omitted, instead of outlining every edge; and before you darken a patch, be able to say what is blocking its light.',
    sourceNote: 'The inherited Drawabox texture lesson presents a shadow-focused exercise. This original cardboard study does not claim that all texture must exclude outlines or that every dark area is a shadow.',
  },
  {
    id: 'fg-020',
    title: 'Transfer a sketch through matching grid cells',
    outcome: 'Enlarge a sketch with a transfer grid by scaling width and height by the same factor, placing landmarks in matching cells, and checking them before adding detail.',
    scene: 'An original leaf silhouette moves from a 4-centimeter square into an 8-centimeter square.',
    sections: [
      {
        title: 'Enlargement preserves relationships inside the frame',
        paragraphs: [
          'You have drawn a small leaf silhouette that you like, and you want it twice the size for a card, without redesigning it and losing whatever made it work. Freehand enlargement tends to drift: the tip wanders, the widest point slides down. You need a way to carry every point of the contour to the right place at the new size.',
          'Here is the old method. Draw the leaf inside a 4 by 4 centimetre square and divide the square into four rows and four columns, so each cell is 1 centimetre on a side. Draw a target square 8 by 8 centimetres and divide it the same way, into four and four, so each cell is 2 centimetres. Now every cell in the small square has a twin in the big one. Whatever part of the leaf lives in a given small cell belongs in its twin, and because both the width and the height of the frame doubled, nothing gets stretched in only one direction.',
        ],
      },
      {
        title: 'Transfer landmarks before joining curves',
        paragraphs: [
          'It works like a grid reference on a map. Tell someone a landmark is in square B3, two thirds of the way across and a quarter of the way down, and they can find it on a map of any size, as long as the map has the same squares. The squares do the carrying. You never have to judge distances by eye across the whole page; you only ever judge a position inside one small cell.',
          'Put numbers on it. Measure from the upper-left corner, across first and then down. In the illustrative leaf, the tip sits at 2 across and 0.5 down in centimetres. Double both numbers for the target: 4 across, 1 down. The stem join at 2 across, 3.5 down becomes 4 across, 7 down. The widest left point at 0.75 across, 2 down becomes 1.5 across, 4 down, and the widest right point at 3.25 across, 2 down becomes 6.5 across, 4 down. Every coordinate is multiplied by the same 2. You can skip the arithmetic and just work by eye within cells: a point halfway across a small cell goes halfway across its big twin. Then mark each place where the contour crosses a grid line, and draw the curves between those anchors while looking at the original. The grid gives you locations. The shape of the curve between locations is still yours to observe.',
        ],
      },
      {
        title: 'A matching cell count does not guarantee matching proportions',
        paragraphs: [
          'Now the trap. Suppose you make the target 8 centimetres wide but only 4 high, and still divide it into four columns and four rows. Every cell has a twin. The method seems to work. But horizontal positions have doubled and vertical ones have not, so the leaf comes out stretched sideways, like a photo on a phone when you drag one edge instead of a corner. Same cell count, wrong proportions. Check the frame dimensions before you transfer a single mark.',
          'The second honest limitation is that the grid copies faithfully, and that includes copying mistakes. If the original tip is slightly off centre, the enlargement will have a slightly off-centre tip, now twice as visible. So compare the tip, the stem join, and the two widest points between the versions while both are still on the table. The historical squaring method, used for centuries to scale sketches up to paintings, is about proportional transfer. It does not compose the picture for you and it does not correct the drawing.',
        ],
      },
      {
        title: 'Why doubling the frame is not enough',
        paragraphs: [
          'People trust the grid because it feels mechanical, and that is also why they stop checking. The grid is only as honest as its two frames. If both dimensions grew by the same factor, it preserves every relationship; if they did not, it preserves a distortion with perfect fidelity. The cell count tells you nothing about which of these happened.',
          'Two habits. Before transferring, divide target width by source width and target height by source height, and refuse to start until the two numbers match. And after transferring, check three or four landmarks against the original before adding any detail, because veins drawn onto a stretched leaf only make the stretch harder to see.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Four target landmarks in the 8 cm square',
      alt: 'Target leaf tip at 4,1; stem join at 4,7; widest left at 1.5,4; widest right at 6.5,4 centimeters.',
      caption: 'Find the four circles and read the centimetre labels: each target coordinate is exactly double its source, tip (2, 0.5) to (4, 1), widest left (0.75, 2) to (1.5, 4), and so on. The arrows only show the order you travel round the contour; the real leaf edge curves between these anchors, so draw those curves on paper from the original. Schematic positions, not to screen scale.',
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
        'Draw your own leaf contour inside a 4-centimetre square and divide it into four equal rows and columns. Each cell is now a map square you can refer to.',
        'Draw an 8-centimetre target square with the same four-by-four divisions, and measure to confirm each target cell is 2 by 2 centimetres. This is the check that both dimensions doubled.',
        'Find the tip, the stem join, and the two widest points, and note where each sits inside its small cell. Place each one at the same fraction of its twin cell in the target.',
        'Mark every place the contour crosses a grid line, then draw the curves between those anchors while looking at the original, not at the grid.',
        'Before adding veins, compare the four landmarks across both versions. If one is off, correct it with the source sketch still visible; the grid will have copied the error faithfully, and this is where you catch it.',
      ],
      notice: 'Each landmark sits at the same fraction of its cell in both squares, and width and height have grown by the same factor of 2. The leaf is bigger and still the same leaf.',
      troubleshooting: 'If the enlargement looks stretched, measure the two frames first; one dimension has probably doubled while the other did not. Adding more contour detail will not repair unequal scale factors, any more than sharper focus fixes a squashed photo.',
    },
    recall: {
      prompt: 'A 6 by 4 centimeter emblem must fit a 12 by 6 frame. Would filling that frame preserve proportions? Suggest a proportional size.',
      hint: 'Divide each target dimension by its corresponding source dimension.',
      answer: 'No. Dividing target by source for each dimension gives 12 over 6, which is 2, for the width and 6 over 4, which is 1.5, for the height. Two different factors means the emblem stretches sideways, the dragged-edge photo. To keep its proportions, pick one factor and apply it to both. Using 1.5 gives 9 by 6, which fits the 6-centimetre height exactly and leaves 3 centimetres of horizontal space to share either side. That empty space is the price of keeping the shape, and it is worth paying.',
    },
    quiz: {
      question: 'Which target preserves the proportions of a 12 by 8 centimeter sketch?',
      options: ['16 by 12 centimeters.', '18 by 10 centimeters.', '18 by 12 centimeters.'],
      correctIndex: 2,
      explanation: 'For 18 by 12, both ratios are 1.5: 18 over 12 and 12 over 8. That is one factor applied to both dimensions, so the sketch keeps its proportions. The 16 by 12 target scales width by about 1.33 and height by 1.5, and 18 by 10 scales width by 1.5 and height by 1.25; each stretches the sketch one way. Drawing four-by-four grids on all of them would not change that.',
    },
    takeaway: 'A grid carries each point to its twin cell like a map reference, but only if both frames grew by the same factor; divide the two dimensions before you start, transfer landmarks before curves, and check them against the original before adding detail, because the grid copies errors as faithfully as it copies the leaf.',
    sourceNote: 'The inherited Royal Academy article explains squaring for transfer. The leaf and coordinates are original; the grid preserves errors as well as intended relationships.',
  },
  {
    id: 'fg-021',
    title: 'Keep the words people see inside the control name',
    outcome: 'Check that a control\'s hidden accessible name contains the exact words users can see on it, keep the visible phrase whole when adding context, and know what still needs testing in the browser.',
    scene: 'A sketch-gallery button visibly says Save sketch while its hidden name uses a different phrase.',
    sections: [
      {
        title: 'One button can present two different names',
        paragraphs: [
          'In a sketch-gallery app there is a button that says Save sketch. Behind the scenes, the developer gave it a different name for assistive software: Add artwork to collection. A sighted mouse user never notices. A person who controls their device by voice does. They read the button, say click Save sketch, and nothing happens, because the software is listening for a button called something else.',
          'The two phrases mean roughly the same thing, and that is the trap. Similar meaning is not the same as matching words. A speech tool matches text, not intentions. And nothing on the screen warns you, because the name the software uses is not necessarily printed anywhere. A perfectly polished button face can hide a mismatch that makes the button unusable for someone speaking to it.',
        ],
      },
      {
        title: 'Include the visible label, not a paraphrase',
        paragraphs: [
          'Imagine a restaurant where the menu says Garden Soup but the kitchen only recognises orders for Soup of the Day. You read the menu, you order exactly what it says, and the waiter comes back confused. The dish is the same. The words are not, and the words are the only thing you had to go on. Now imagine the kitchen accepts Garden Soup, with or without extra detail like Garden Soup, large. That works, because what you read is still inside what they hear.',
          'Browsers work out a control\'s accessible name from whatever labelling they can find: the text inside the button, a label associated with it, or an explicit ARIA name that developers can add. The catch is that an explicit ARIA name overrides the visible text, so a well-meant hidden phrase can silently replace the words users see. The accessibility guideline WCAG 2.5.3, called Label in Name, requires that the accessible name contain the visible text label for controls in its scope, and it sits at Level A, the baseline. So Save sketch to collection is fine: the visible phrase is intact and context follows. Save this new sketch is not, because it splits the visible phrase with an inserted word. Starting the name with the label is recommended practice rather than a separate rule. Differences of capitalisation or punctuation are not the problem; swapping or splitting the words is.',
        ],
      },
      {
        title: 'A written name is still a specification',
        paragraphs: [
          'Do the check on paper first. Write the visible label in one column and the proposed name in the next, for every control that will get a custom name. Save sketch next to Add artwork to collection fails on sight. Rename and Download PNG get the same treatment: if they need extra context, keep their visible words whole and add the context after.',
          'Then remember what paper cannot tell you. The name the browser actually computes can differ from the string you intended when several labelling mechanisms interact, so inspect the real control with a browser\'s accessibility tools. Then operate it, by keyboard and ideally by a speech tool. A matching name says nothing about whether the button has the right role, whether it can receive focus, or whether every tool handles it the same way. This criterion is one specific check about words. It is not a certificate for the interface.',
        ],
      },
      {
        title: 'Why paraphrases creep in',
        paragraphs: [
          'Developers add hidden names to be helpful: the visible label felt terse, so they wrote a fuller description for screen-reader users. The intention is good and the effect is a menu that says one thing while the kitchen listens for another. The fix is not to stop adding context. It is to add it around the visible words rather than instead of them.',
          'Two habits. Whenever you write a hidden name for a control, start by pasting in the visible label exactly, then append. And before signing off, read each button aloud as a voice command and ask whether the software, listening for its accessible name, would hear a match.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Two proposed names for the visible Save sketch button',
      alt: 'Add artwork to collection omits Save sketch; Save sketch to collection retains the visible phrase.',
      caption: 'Read both proposed names looking only for the two words Save sketch. In the first, they are missing entirely; a voice user saying what they see gets no match. In the second, they are there, in order, with the context added afterwards. Written specifications, not inspected browser output.',
      items: [
        { label: 'Add artwork to collection', detail: 'Related meaning, but the visible phrase Save sketch is absent.' },
        { label: 'Save sketch to collection', detail: 'The visible phrase stays intact before the added context.' },
      ],
    }],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw two columns, visible label and intended name, with rows for Save sketch, Rename, and Download PNG. The columns sit side by side because the check is a word-for-word comparison, not a meaning comparison.',
        'Write Add artwork to collection beside Save sketch and underline which of the visible words appear in it. None do. That is the menu and the kitchen disagreeing.',
        'Repair that name and propose names for the other two, keeping each visible phrase whole and in order, with any extra context added after it rather than inserted into it.',
        'Add a final row for later: inspect the computed name in the real browser, then operate the control. Mark both as untested on this paper plan, because a specification is not an implementation.',
      ],
      notice: 'Every proposed name contains its visible phrase intact, and your sheet separates what you intend the name to be from what the browser will be verified to compute. The menu and the kitchen now agree, on paper.',
      troubleshooting: 'If a proposed name merely means the same as the label, copy the visible phrase in first and only then add context. If you want to put a word in the middle of the phrase, do not; move it to the end.',
    },
    recall: {
      prompt: 'A course control visibly says Next chapter but is named Continue learning for software. What would you change and then verify?',
      hint: 'Keep the visible wording available as the command people can read.',
      answer: 'Change the accessible name so that it contains Next chapter, adding context after the phrase if it genuinely helps, such as Next chapter in this course. Continue learning is the kitchen listening for a dish the menu never names; a learner saying click Next chapter gets nothing. Then open the real page, inspect the computed name with the browser\'s accessibility tools, and operate the control by keyboard and by voice if you can. Editing a design mock-up fixes the drawing; only the inspected control tells you what the browser actually exposes.',
    },
    quiz: {
      question: 'A button visibly says Upload photo. Which proposed name preserves that phrase while identifying its destination?',
      options: ['Upload photo to album.', 'Upload a new photo to album.', 'Add image to album.'],
      correctIndex: 0,
      explanation: 'Upload photo to album keeps the two visible words together and in order, then adds the destination, which is the menu name with large added on the end. Upload a new photo to album pushes new into the middle of the visible phrase, so a user saying click Upload photo no longer matches a contiguous string. Add image to album means the same thing and shares none of the words, which is exactly the mismatch the criterion exists to catch.',
    },
    takeaway: 'Whatever words a user can read on a control must sit, whole and in order, inside the name the software hears; add context around the visible label rather than instead of it, then inspect the computed name in a real browser, because a matching string on paper proves nothing until the control is operated.',
    sourceNote: 'The inherited W3C Label in Name page was spot-checked: Level A, with label-first naming recommended rather than separately required. These examples are specifications, not an accessibility audit.',
  },
  {
    id: 'fg-022',
    title: 'Give modal focus an entry, a loop, and a return route',
    outcome: 'Specify where keyboard focus goes when a modal opens, how it stays inside while the modal is open, and where it returns on close, including a fallback when the opener has disappeared.',
    scene: 'A field-recording list opens a short Rename clip dialog with a title field, Save, and Cancel.',
    sections: [
      {
        title: 'The overlay has to change the keyboard journey',
        paragraphs: [
          'A list of field recordings has a Rename clip button beside each entry. Press it and a small box appears over the list with a title field, a Save button, and a Cancel button. With a mouse, you see the box, you click into it, you type. Now put the mouse away and use the keyboard only. Where is focus? If it is still on the button behind the box, pressing Tab walks you through the dimmed list while the dialog sits there ignoring you.',
          'Focus is the one element on the page that receives what you type and the keys you press. A dialog that appears without taking focus is, for a keyboard user, a dialog that has not really opened. And dimming the background is a visual hint, not a behaviour; the list is only truly unavailable if focus cannot get into it. The keyboard journey for a modal starts before the first keystroke inside it and ends only after it has closed and focus has somewhere to be.',
        ],
      },
      {
        title: 'Choose entry for the content and contain Tab movement',
        paragraphs: [
          'Think of a receptionist taking you into a side room to fill in a form. They walk you in and sit you at the desk, so you are not left standing in the doorway. While you are in there, the door is shut; you cannot drift back into the lobby and start pressing lift buttons. When you are done, or if you change your mind, they walk you back out to exactly the counter you came from. Three parts: taken in, kept in, returned.',
          'For this short rename form, being sat at the desk means initial focus lands in the title field. From there, Tab moves to Save, then to Cancel, then wraps back to the title field. Shift+Tab runs the same loop backwards. The Rename clip button that opened the dialog is outside the loop, in the lobby. Escape closes the dialog, and Cancel is the visible way to do the same thing. Each of those is a behaviour someone has to build; labelling the box modal in a design file produces none of them. One caution about the first step. Starting in the first input is right for a short form, and wrong as a universal rule. A dialog that opens with a long explanation should put focus on a static element at the start so nobody skips the text. A dialog confirming something irreversible might start on the least destructive button. Entry depends on what the content is.',
        ],
      },
      {
        title: 'Return to an element that still exists',
        paragraphs: [
          'The return trip is the part most often forgotten. After Save or Cancel, focus should go back to the Rename clip button that opened the dialog, the counter you came from. That is the normal case and it should be stated, not assumed.',
          'Now the exception. Suppose the dialog was part of deleting the recording, and when it closes the recording is gone, and so is its Rename button. You cannot return focus to an element that no longer exists; the attempt silently fails and focus drops to the top of the page. So specify a fallback destination that makes sense for what the user does next: the rename button of the neighbouring recording, or an Add recording button if the list is now empty. Decide this on paper before anyone writes code, and then test the real thing with a keyboard. The W3C modal pattern describes the journey and does not certify that any particular page makes it.',
        ],
      },
      {
        title: 'Why one missing leg breaks the whole trip',
        paragraphs: [
          'Entry, containment, and return are only useful together. Entry without containment drops the user into the form and then lets them Tab out the back into a dimmed list. Containment without return traps them, closes the door, and leaves them standing in the lobby with no idea where they are. The receptionist who does two of the three has not done the job.',
          'Two habits. For any overlay, write the three legs as three sentences, where focus goes in, how Tab is kept inside, and where focus goes on close, and refuse to call the spec finished until all three exist. And always add a fourth sentence for the day the opener is gone.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'The title field, Save, and Cancel form the active loop',
      alt: 'Rename clip opens into the title field. Tab cycles through title, Save, and Cancel; Cancel closes and returns to the opener.',
      caption: 'Trace the arrows as the receptionist\'s route. Open takes focus from the opener into the title field. The three Tab arrows form the closed loop, with Tab wraps bringing Cancel back to the title field so nobody escapes into the list. The last arrow, close and return, is the walk back to the opener. Illustrative route map, not a screen layout; Shift+Tab runs the loop in reverse.',
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
        'Draw the recording list, the Rename clip opener, and the three dialog controls. Hatch the background list to mark it unavailable while the modal is open; that hatching is the closed door, and your token must never land there.',
        'Move the token from the opener into the title field, then trace Tab through Save and Cancel and back to the title field. Trace Shift+Tab the other way. If the token can reach the list, containment is broken.',
        'Close the dialog two ways, Escape and Cancel, as separate routes. After each one, walk the token back to the opener and write return beside it.',
        'Now cross the opener out of the drawing and close the dialog again. Choose a remaining button that fits the next task, and label every behaviour on the page untested, because a token on paper is a plan and not an implementation.',
      ],
      notice: 'Every opening, every Tab boundary, and every closing path ends on a named, existing control. The token has been taken in, kept in, and returned, including on the day the opener is gone.',
      troubleshooting: 'If the token reaches the background before the dialog closes, the door is open; repair containment before anything else. If the return target has been removed, pick a real remaining control rather than writing return to opener and hoping.',
    },
    recall: {
      prompt: 'Deleting the last saved item closes its confirmation and removes its opener. Where could focus go, and why?',
      hint: 'Choose something available that supports the next sensible action.',
      answer: 'Focus cannot go back to the deleted item or its confirm button, because neither exists any more; the receptionist cannot walk you to a counter that has been taken away. Send it to whatever supports the sensible next action in a now-empty collection: an Add item button, or a Browse items control if there is one. The destination has to be a real element that can accept focus, and the choice should be written into the spec before implementation, because the default when a return target is missing is for focus to drop to the top of the page with no announcement.',
    },
    quiz: {
      question: 'A modal has Theme, Preview, and Close as its Tab stops. Focus is on Close, the last stop. What should Tab do while the modal stays open?',
      options: ['Return to the opener behind the overlay.', 'Continue to the next control on the background page.', 'Move to Theme, the first stop inside the modal.'],
      correctIndex: 2,
      explanation: 'While a modal is open, Tab stays inside it and wraps, so from Close, the last stop, Tab moves to Theme, the first stop. That is the shut door. Returning to the opener is what happens on closing, not on Tab. Continuing into the background page breaks containment and lets the user wander the dimmed lobby with the dialog still open.',
    },
    takeaway: 'A modal\'s keyboard journey has three legs, taken in, kept in, and returned, plus a fallback for when the opener no longer exists; specify all four as behaviours, because dimming the background and calling the box modal implements none of them.',
    sourceNote: 'The inherited W3C APG modal guidance was spot-checked, including content-dependent entry and return exceptions. This paper plan is not an implementation or WCAG conformance test.',
  },
  {
    id: 'fg-023',
    title: 'Keep the saved result when optional movement is disabled',
    outcome: 'Specify a nonmoving version of interaction feedback that keeps every fact the animation carried, the result, the destination, and the next action, and say how that version gets selected.',
    scene: 'A recipe card normally travels into a Weekend collection after saving; a second specification removes that travel.',
    sections: [
      {
        title: 'What did the flying recipe card tell you?',
        paragraphs: [
          'In a recipe app you tap Save and the card lifts off the page, shrinks, and swoops into a folder icon labelled Weekend. It is a pleasing half second. Now a user who gets dizzy from on-screen motion has switched animation off in their settings, taps Save, and the card simply sits there. Did it save? Where did it go? They tap again, and now they are not sure whether they have saved it twice.',
          'The animation was never only decoration. It carried two facts: the save succeeded, and the recipe went to Weekend. Switching the motion off and changing nothing else does not remove a flourish; it removes information. So the first job is not to shorten the flight. It is to write down, in plain words, what the flight was telling people, and then make sure every one of those facts still arrives when nothing moves.',
        ],
      },
      {
        title: 'Specify the same endpoints without travel',
        paragraphs: [
          'Think about paying by card in a shop. Some terminals play a little animation of the payment whooshing away. Nobody relies on it. What you actually rely on is the line that follows: approved, 12.40, and the receipt in your hand. Take away the whoosh and you have lost nothing you needed. Take away the receipt and you are standing there asking whether it went through. The information lives in the receipt, not in the whoosh.',
          'So build the receipt. In the stationary version, the Save button changes to Saved, a message that does not move says Saved to Weekend, and an Undo control stays available. No card travels, zooms, or bounces. The result and the destination are both visible, and neither relies on a colour change alone, which some people cannot perceive. Focus stays somewhere meaningful rather than being yanked over to the collection just to prove the save happened. The matrix card shows the point: for both settings, motion on and motion off, the before state and the after state carry identical information. Movement is an optional way of connecting them, not the content. Two things that do not count as an alternative. A flight that takes half as long is still a flight. And removing the success message along with the animation is not a quieter version; it is the receipt torn up.',
        ],
      },
      {
        title: 'State how the alternative is selected',
        paragraphs: [
          'The guideline behind this is WCAG 2.3.3, Animation from Interactions, at Level AAA, the most demanding tier. It asks that motion triggered by a user\'s action can be turned off, unless the motion is essential to the function or the information. A card flight is not essential; the receipt carries everything. So the specification has to say how the stationary version gets selected: an in-app setting, a supported system preference for reduced motion, or both.',
          'If you lean on the system preference, the app has to actually read it and honour it; writing respects reduced motion in a design document changes nothing by itself. Animation that starts on its own, without a user action, has separate rules and is not covered here. Nobody doing this exercise needs to watch a motion-heavy demo or judge how sensitive anyone is; you are specifying two states on paper. Later testing has to confirm three things: the preference is honoured, the information survives, and the next action is reachable. Two handsome screenshots prove none of them.',
        ],
      },
      {
        title: 'Why the message gets cut with the motion',
        paragraphs: [
          'Designers often build the message into the animation, so the words Saved to Weekend only ever appear as a label on the flying card. Turn off the flight and the label goes with it. That is how a motion setting quietly becomes an information setting. Separating the receipt from the whoosh at the design stage is what prevents it.',
          'Two habits. Before animating any feedback, write the plain-text receipt first and treat the motion as optional decoration layered on top. And when testing a reduced-motion mode, ask the receipt questions, did it work, where did it go, can I undo, before asking whether anything moved.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Motion setting by interaction state',
      alt: 'For both motion-on and motion-off settings, the initial control is Save and the final state is Saved to Weekend with Undo.',
      caption: 'Read the matrix down the after column. Motion on and motion off end in exactly the same place: Saved, Saved to Weekend, Undo. That identical pair is the receipt. The card flight is only mentioned in one cell, as something that may connect the states, never as the thing carrying the information. Illustrative specifications.',
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
        'Draw the recipe card before saving and write, in words, what its usual flight communicates: the save worked, and it went to Weekend. This list is the receipt the stationary version must still print.',
        'Draw the after state with nothing moving: Saved on the button, a stationary Saved to Weekend message, and Undo. Check that none of those facts depends on colour alone.',
        'Name the control or the supported system preference that selects this version, and write that travel, zoom, and bounce are all removed, not shortened. Half a flight is still a flight.',
        'Compare both versions for four things: result, destination, focus position, and the next action. Mark preference handling and real accessibility as untested, because paper cannot read a system setting.',
      ],
      notice: 'Your stationary specification still says what happened, where the recipe went, and how to undo it. Someone with motion switched off gets the full receipt; they just skip the whoosh.',
      troubleshooting: 'If your alternative turns out to be a faster or smaller version of the flight, start again from an immediate state change plus stationary text. If your alternative has no destination message, you have removed information, not motion; put the receipt back.',
    },
    recall: {
      prompt: 'A course completion screen normally swirls a checkmark before revealing Continue. What would a nonmoving equivalent need to preserve?',
      hint: 'Separate the completion information from the decorative movement.',
      answer: 'It needs the receipt without the whoosh: a stationary completion indicator with an explicit text label, something like Lesson complete, and the Continue button available immediately rather than after a swirl that no longer plays. Focus should land somewhere useful, on the indicator or on Continue, instead of being left wherever the animation would have moved it. And the whole thing has to be selected by an honoured preference. A course that only reveals Continue at the end of an animation it has just disabled would strand the learner on a finished screen with no way forward.',
    },
    quiz: {
      question: 'A user disables optional save animation. Which alternative retains its information without the movement?',
      options: ['Make the card travel to the collection faster.', 'Update Saved and show a stationary destination message with Undo.', 'Remove the travel and show only a brief destination-icon color change.'],
      correctIndex: 1,
      explanation: 'Updating the button to Saved and showing a stationary destination message with Undo is the receipt: completion, destination, and reversal all stated without anything moving. Making the card travel faster leaves the motion in place, just briefer, which is not an alternative. A brief colour change on a destination icon removes the travel but also removes most of the information, and colour alone is a signal some people cannot see.',
    },
    takeaway: 'Write the receipt before the whoosh: when optional motion is switched off, the same facts must still arrive, what happened, where it went, and how to undo it, in stationary text, selected by a preference the software actually honours.',
    sourceNote: 'The inherited W3C criterion is Level AAA and concerns interaction-triggered motion, with an essential-motion exception. These original paper states do not verify software preference support.',
  },
  {
    id: 'fg-024',
    title: 'Reserve the image footprint before the preview arrives',
    outcome: 'Calculate the space an image will need from its aspect ratio and reserve it before it loads, so a late picture does not push a button away, while still letting text grow.',
    scene: 'A sketch preview loads between an already visible title and Save button on a phone card.',
    sections: [
      {
        title: 'A late picture moves a button that was already available',
        paragraphs: [
          'A sketch card on a phone shows its title and a Save button straight away. The preview image takes a moment longer to download. You read the title, move your thumb toward Save, and at that instant the image arrives and shoves the button 180 pixels down the screen. Your thumb lands on whatever is there now. Everyone has done this, and everyone has blamed themselves.',
          'A faster connection shortens the window in which it can happen. It does not explain how to stop it, because on some connection, somewhere, the image will always arrive after the button. The real question is about space: how much room does the preview take up before its pixels exist? If the answer is none, the layout has to rearrange itself when the picture lands.',
        ],
      },
      {
        title: 'Compute the intended image rectangle',
        paragraphs: [
          'Think of saving a seat in a cinema. You put your coat on the chair next to you before your friend arrives. When they turn up, they sit down and nobody in the row has to shuffle along. Without the coat, their arrival means everyone shifting one seat over, popcorn and all. The coat does not make your friend arrive sooner. It makes their arrival change nothing for anyone else.',
          'The coat for an image is its footprint, and you can calculate it before a single pixel downloads. Suppose the preview has a 4:3 shape, four units wide for every three high, and it will be displayed 240 CSS pixels wide. Its height is 240 times three quarters, which is 180. Reserve a 240 by 180 slot in the loading state, by giving the slot those dimensions or by declaring the aspect ratio. Then walk the coordinates. Say the image starts 80 pixels below the top of the card and Save sits 12 pixels below the image. With no slot reserved, Save starts at 80 plus 12, which is 92, and after the image loads it starts at 80 plus 180 plus 12, which is 272: a jump of 180 pixels, the full height of the picture. With the 180-pixel slot already in place, Save starts at 272 while loading and at 272 after. The image arrives into space that was already counted.',
        ],
      },
      {
        title: 'Reserve media space without freezing the whole card',
        paragraphs: [
          'The diagram holds the title height constant on purpose, to isolate the effect of the image arriving. Real titles are not constant. A longer title, or a user with larger text settings, should still be allowed to wrap onto a second line and make the card taller. Fixing the whole card to one height and clipping whatever does not fit swaps a jumping button for a title you cannot read. Reserve the image rectangle; leave the text free to grow.',
          'Be clear about what this does and does not fix. Reserving media space removes one cause of layout shift, late images, and does nothing about others: a web font swapping in at a different size, a banner inserted above the card after load. It does not make the download faster. And a coordinate comparison on paper predicts a layout relationship; it is not a measured Cumulative Layout Shift score, and it is not proof that the interaction feels comfortable on a real device. Measure that separately.',
        ],
      },
      {
        title: 'Why the fix is so cheap and so often skipped',
        paragraphs: [
          'The shift happens because the layout engine is told about the image only when the image shows up, so the sensible-looking page it drew a moment ago was built on missing information. The engine is not wrong; it was never told the width and height. Two attributes, or one aspect-ratio rule, is all the coat on the chair costs.',
          'Two habits. For every image or video you place, know its aspect ratio before it loads and declare it, so the slot exists from the first paint. And when something on a page jumps, measure the jump against the height of whatever arrived late; if the numbers match, you have found the missing coat.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Reserved loading and loaded states keep Save aligned',
      alt: 'Both states reserve a 240 by 180 pixel preview starting at y 80; Save begins at y 272 in each.',
      caption: 'Compare the two Save boxes first: both start at y equals 272. Then look up at why. The loading slot on the left already occupies 240 by 180, ending at y equals 260, so when the image arrives on the right it fills a space that was always there, the coat on the chair. Illustrative CSS-pixel coordinates with the title height held fixed; the symbol sizes are schematic.',
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
        'Sketch a preview area 240 pixels wide and work out its height for a 4:3 image: 240 times three quarters. Write 180 on it. That number is the size of the coat.',
        'Using a top position of 80 and a gap of 12, draw the unreserved before and after states and mark Save at 92 and then at 272. The 180-pixel jump is the row shuffling along.',
        'Redraw the loading state with the 240 by 180 slot in place and check that Save now starts at 272 before and after the image arrives. If it does not, the slot height and the image height disagree.',
        'Give the card a longer title and let the card grow to fit it. Keep the image ratio fixed, but do not fix the card height or clip the text; the coat reserves one seat, not the whole row.',
      ],
      notice: 'In the reserved version the image\'s arrival adds no height at all, Save sits at 272 in both states, and a longer title is still free to wrap. One cause of the jump is gone and nothing else has been frozen.',
      troubleshooting: 'If the button still moves in your drawing, compare the slot height with the loaded image height; they must match for the same width. Change nothing else while you check, because a shifting title or gap will hide whether the image is the cause.',
    },
    recall: {
      prompt: 'A 3:4 portrait preview is 180 pixels wide, but its placeholder is a 180-pixel square. How much height is missing if the image keeps its ratio?',
      hint: 'Multiply width by the height-to-width ratio.',
      answer: 'A 3:4 portrait is three units wide for every four high, so at 180 pixels wide it needs 180 times four thirds, which is 240 pixels of height. The square placeholder reserves only 180, leaving 60 pixels unaccounted for, and whatever sits below the image will drop by exactly that much when it loads. Reserve the full 240, the right-sized coat, rather than freezing the whole card; the surrounding text should still be free to wrap.',
    },
    quiz: {
      question: 'A 4:3 preview will be 320 pixels wide. Which loading specification matches its footprint without clipping surrounding content?',
      options: ['Reserve 240 pixels of image height and let text wrap.', 'Reserve 320 pixels of image height because the width is 320.', 'Fix the entire card at 240 pixels high, including title and controls.'],
      correctIndex: 0,
      explanation: 'A 4:3 image that is 320 wide is 320 times three quarters, which is 240, tall, so reserving 240 pixels of image height is the coat that fits the seat, and letting text wrap keeps the rest of the row flexible. Reserving 320 assumes a square, which this image is not, and would leave an 80-pixel gap. Fixing the whole card at 240 clips the title and controls to solve a problem that only the image caused.',
    },
    takeaway: 'Put the coat on the chair: work out the image\'s height from its aspect ratio and reserve that rectangle before it loads, so its arrival changes nothing around it, while leaving the text free to grow and remembering that this fixes one cause of layout shift, not all of them.',
    sourceNote: 'The inherited web.dev guide explains reserved media space and layout-shift limits. Coordinates are original examples; no CLS measurement, download improvement, or complete stability is claimed.',
  },
]