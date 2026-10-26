import type { LessonGuide } from './types'

// Original scenarios and illustrations. Linked references are inherited by lesson ID.
export const thinkingGuides: LessonGuide[] = [
  {
    id: 'thinking-001',
    title: 'Say exactly what would change the journey',
    outcome: 'Take a claim like this will make things better and pin down what is being compared with what, so that evidence can actually answer it.',
    scene: 'A proposed bus-priority signal at Elm junction during the morning commute.',
    sections: [
      {
        title: 'Which improvement are we discussing?',
        paragraphs: [
          'A notice goes up at the bus depot: giving buses priority at the Elm junction signal will improve the morning journey. Everyone nods. Then ask three people what improve means and you get three answers. Shorter trips. Fewer late arrivals. Less crowding on board. All three are good things, all three are connected, and none of them is the same as the others. A signal that shaves two minutes off the trip might do nothing for crowding at all.',
          'Before anyone can judge whether the change worked, somebody has to choose the question. Say you settle on this one: the average journey time from the depot to the station, for scheduled buses leaving between seven and nine on weekday mornings. Now the claim points at something an observer with a stopwatch could actually measure. The vague version could never be wrong, which is exactly what made it useless.',
        ],
      },
      {
        title: 'Two actions in the same week',
        paragraphs: [
          'Imagine a chef who wants to know whether a new oven makes better bread. The honest test is not comparing today\'s loaf with one from last winter, when the flour was different and the kitchen was colder. It is imagining the same dough, the same day, baked in each oven, and comparing those two loaves. Only one of them can exist. The other is what would have happened instead.',
          'That is the structure of every causal question. The intervention is the action being evaluated: run the bus-priority signal plan. Its alternative is to keep the existing plan. Picture the same eligible journeys during the same future week under each action. The gap between their average durations is the effect you want to know. The alternative that did not happen has a name: the counterfactual. It is not a prediction that last week will repeat itself. Rain, school holidays, and roadworks would all change journey times even if nobody touched the signals, so last week is a different loaf.',
        ],
      },
      {
        title: 'A comparison is a substitute',
        paragraphs: [
          'Only one signal plan can run for any given journey, so the counterfactual is never directly observed. You need a stand-in for it: a comparison designed carefully enough that it plausibly shows what would have happened. Suitable other weeks, or similar routes that kept the old timing, might serve. Simply noticing that trips got quicker after installation cannot separate the signal from quieter traffic that week.',
          'Write the comparison down before any results exist. Priority plan versus existing timing. Eligible morning buses. Depot-to-station minutes. The specified weekdays. Then, when someone later reports that complaints fell, you can see at a glance that complaints are a different outcome from journey minutes, and treat it as a separate claim rather than a confirmation. A precise question does not prove the signal caused anything. What it does is stop the evidence from quietly answering a question nobody asked.',
        ],
      },
      {
        title: 'What precision buys and what it does not',
        paragraphs: [
          'Pinning the question down does three honest things. It names the measurement, so disagreements become checkable. It names the alternative, so nobody mistakes before-and-after for a real comparison. And it fixes the population and period, so a result about morning buses cannot drift into a claim about all traffic.',
          'Two cautions keep this grounded. Choosing one question does not make the other improvements unimportant; crowding may matter more to passengers than minutes do, and that is a reason to ask a second precise question, not to retreat to the vague one. And a sharp question is only the first step. It tells you what evidence would count. It does not supply the evidence, and it does not by itself rule out all the other reasons journey times might have moved.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'The two journeys being compared',
      alt: 'Two alternative signal plans for the same eligible bus journeys and observation week.',
      caption: 'Look at what is identical across the two columns first: the buses, the route, the outcome, the week. Only the signal plan differs. That single difference is what makes the gap between them an effect rather than a coincidence. Fictional proposal.',
      items: [
        { label: 'Priority plan', detail: 'Eligible morning buses; depot-to-station journey minutes.' },
        { label: 'Existing plan', detail: 'The same journeys and week under the alternative action.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the claim as given: the new signal makes bus travel better. Circle the word better. That circle marks the spot where the claim can mean anything and therefore means nothing.',
        'Replace better with one measurable outcome, depot-to-station journey minutes, and add the population and period: scheduled morning buses, a specified week. Notice how much smaller and more checkable the claim just became.',
        'Write both signal plans as the two alternatives, side by side. Then add one reason last week is an imperfect stand-in for the counterfactual, such as weather or a school holiday. Naming that reason is what separates a comparison from a before-and-after story.',
      ],
      notice: 'Your revised sentence describes a contrast between two actions on the same journeys, not a general hope about transport. Someone could now disagree with it on evidence.',
      troubleshooting: 'If your outcome is still broad, name where the measurement starts and where it stops: depot door to station stop, in minutes. An outcome without a start and finish is still a hope.',
    },
    recall: {
      prompt: 'A library says its new online booking form reduces frustration. What comparison would make that claim testable?',
      hint: 'Pick an action, its alternative, the eligible users, one outcome, and a period.',
      answer: 'Start by replacing frustration with something observable, such as the share of booking attempts abandoned before confirmation. Then name the two actions: the new form versus the existing one. Fix the population and period: people making reservations during a defined month. The comparison is now abandoned attempts under each form for those reservations. The trap to avoid is treating last year\'s reservations as the counterfactual; different users, different demand, and a different catalogue make them a loaf from a different winter. A precise question like this does not prove the form helps, but it tells you what evidence would.',
    },
    quiz: {
      question: 'A shop installs clearer collection signs during a quiet week. Which question targets their causal effect?',
      options: [
        'Were collection times shorter than during the busiest previous week?',
        'What would these same collections have taken this week with the old signs?',
        'Did people who noticed the signs report shorter collection times?',
      ],
      correctIndex: 1,
      explanation: 'The second question holds the collections and the week fixed and changes only the signs, which is the counterfactual contrast. Comparing against the busiest previous week confuses the signs with the difference between a quiet week and a busy one. Asking only people who noticed the signs selects a different group of customers, and whatever makes someone notice signage might also make them quick at collecting.',
    },
    takeaway: 'Name the outcome, the two actions, the people, and the period before you look at any evidence, so the evidence cannot answer a different question.',
    sourceNote: 'Causal Inference: What If supplies the counterfactual framework. The transport proposal is fictional, not evidence for signal priority.',
  },
  {
    id: 'thinking-002',
    title: 'Find what caused both the response and the result',
    outcome: 'Spot the hidden earlier factor that decided who got the treatment and also shaped the outcome, so you stop blaming the treatment for a difference that was already there.',
    scene: 'Sunny terrace planters receive extra watering but still show more wilting.',
    sections: [
      {
        title: 'The wetter pots look worse',
        paragraphs: [
          'A terrace has planters in full sun and planters under shade. The gardener waters the sunny ones extra, because they dry out faster. A few weeks later the sunny planters are wilting more than the shaded ones. Someone photographs them and writes the caption: extra watering caused the wilting. The photo is real. The caption is a leap.',
          'Look at how the water was handed out. It was not sprinkled at random. The gardener chose the sunny planters precisely because they were struggling with heat, before anyone looked at a single wilted leaf. So the extra-water group and the normal-water group were never the same kind of planter. Comparing them compares two different growing conditions, and the watering is just the label stuck on top of that difference.',
        ],
      },
      {
        title: 'A common cause makes two arrows',
        paragraphs: [
          'People who carry umbrellas get rained on more than people who do not. Nobody concludes that umbrellas cause rain. A grey sky makes you grab the umbrella, and the grey sky brings the rain. One earlier thing pushes on both. Once you see that shape, you see it everywhere.',
          'Here the grey sky is sun exposure. Draw an arrow from exposure to extra watering: dry soil prompted the gardener. Draw a second arrow from exposure to wilting: heat pulls moisture out of leaves faster than roots can replace it. A factor like this, sitting earlier in time and feeding both the treatment and the outcome, is called a confounder. Because of it, the pattern you observe is a blend: whatever the water itself did, plus the difference the sun had already created. Notice what this does not prove. It does not show extra water is harmless. It shows that this particular comparison cannot answer the question either way.',
        ],
      },
      {
        title: 'Compare before choosing adjustments',
        paragraphs: [
          'The repair is to compare like with like: planters with similar exposure, similar varieties, similar soil, similar starting condition. Each of those earns its place for a causal reason, because it could plausibly shape both the decision to water and the health of the plant. A column in a spreadsheet is not a reason. Pick the factors by asking what could sit at the tail of both arrows.',
          'One factor needs special caution. Soil moisture measured after the watering is not background; it is partly a result of the water. Treat it like a fixed starting condition and you erase part of the very effect you are trying to see. On paper, the useful habit is a single question: what made the gardener choose this group, and could that same thing reach the leaves on its own? Asking it does not require a controlled experiment. It just exposes exactly where the photo caption went wrong.',
        ],
      },
      {
        title: 'Where confounders hide',
        paragraphs: [
          'Confounders are most dangerous when the treatment was chosen in response to a need. Sicker patients get stronger drugs. Struggling students get tutoring. Dry planters get water. In every case the group that received help started off worse, so a naive comparison makes the help look harmful, or hides how much it helped.',
          'Two mistakes to avoid. The first is adjusting for everything you can measure, which can accidentally include things the treatment changed and so distort the answer in a new way. The second is the opposite: assuming that because you have thought of one confounder you have found them all. Soil type, pot size, and plant age could each add their own arrows. Spotting the common cause is a skill of asking, not a guarantee of having asked enough.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'Exposure is a proposed common cause',
      alt: 'Sun exposure points separately to extra watering and later wilting.',
      caption: 'Start at the left box and follow both arrows out of it. One leads to the gardener\'s decision, the other straight to the leaves. The watering box has no arrow of its own into wilting here; that is the question the sketch leaves open. Hypothetical, not a plant diagnosis.',
      items: [
        { label: 'Earlier sun exposure', detail: 'Makes the exposed planters dry faster.' },
        { label: 'Extra watering', detail: 'The gardener responds to drying conditions.' },
        { label: 'Later wilting', detail: 'Exposure can contribute through moisture loss.' },
      ],
      arrows: [{ from: 0, to: 1 }, { from: 0, to: 2 }],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write three labels spaced out on the page: earlier sun exposure, extra watering, later wilting. Putting exposure first on the page reminds you it happened first in time.',
        'Draw the two arrows from exposure, and beside each one write a short sentence on how that connection could physically work: dry soil prompts watering; heat pulls moisture from leaves. An arrow you cannot explain is a guess, not a cause.',
        'Write one background condition you would want to match between groups, such as plant variety, and one measurement you would treat with caution because the water could have changed it, such as soil moisture afterward. Keeping these two kinds apart is the whole skill.',
      ],
      notice: 'A single earlier factor on your page explains both who got watered and one route to wilting. The caption blamed the middle box for what the left box did.',
      troubleshooting: 'If the factor you chose only affects the leaves, you have half a confounder. Go back and ask why the gardener picked that group. A true common cause has to reach the decision as well as the outcome.',
    },
    recall: {
      prompt: 'Students who seek extra tutoring end up with lower final scores than students who do not. What earlier factor could distort this comparison?',
      hint: 'Ask what prompted a student to go looking for help.',
      answer: 'The umbrella pattern again. Students who were already finding the course difficult are the ones most likely to seek tutoring, and that same difficulty makes a low final score more likely with or without help. So starting difficulty sits at the tail of both arrows: it drives the decision to get tutoring and it drives the outcome. Comparing tutored students with untutored ones compares strugglers with non-strugglers and then blames the tutoring. The fair comparison matches students on where they started before attributing anything to the help itself.',
    },
    quiz: {
      question: 'Older bicycles receive more servicing and also have more breakdowns. Which factor is the clearest potential confounder?',
      options: [
        'The repair receipt printed after servicing',
        'The number of components replaced during servicing',
        'Wear accumulated before the servicing decision',
      ],
      correctIndex: 2,
      explanation: 'Prior wear is the grey sky: it sends the bicycle in for servicing and it also makes breakdowns more likely, so it reaches both the decision and the outcome from earlier in time. Components replaced is a result of the servicing, not a cause of it, so adjusting for it would distort the picture rather than fix it. The receipt is just a record and pushes on nothing.',
    },
    takeaway: 'When a treatment was chosen in response to a need, ask what the need did on its own before you credit or blame the treatment.',
    sourceNote: 'The inherited causal-inference reference explains confounding. The terrace mechanism is hypothetical and does not diagnose real plants.',
  },
  {
    id: 'thinking-003',
    title: 'Put the response on the timeline',
    outcome: 'Separate the time that made someone call for help from the time the help could actually have changed, so a response does not get blamed for the problem it answered.',
    scene: 'A bicycle repair specialist joins a difficult job after a long initial inspection.',
    sections: [
      {
        title: 'A long repair attracts help',
        paragraphs: [
          'A bicycle workshop looks at its records and notices something uncomfortable. Jobs where the specialist got involved took longer than jobs where she did not. Someone suggests the obvious fix: keep the specialist out of repairs and things will speed up. The numbers seem to back it. The reasoning does not.',
          'Walk through one job. A bicycle comes in at 10:00. The general mechanic works on it, gets nowhere, and at 11:20 asks the specialist for help. Together they finish at 11:40. Total: 100 minutes. But look at where those minutes sit. Eighty of them had already passed before the specialist touched the bike. The repair was hard, the hard repair dragged on, and the dragging on is what prompted the call for help. The specialist did not cause the long job. The long job caused the specialist.',
        ],
      },
      {
        title: 'Earlier time cannot follow a later action',
        paragraphs: [
          'Fire engines are found at the biggest fires. Nobody concludes that fire engines cause big fires, because everyone knows the order of events: the fire was already large, and that is why the engines were called. The workshop is making the mistake that nobody makes about fire engines, just with less familiar labels. The pattern has a name, reverse causation, and its signature is a response that gets blamed for the problem that summoned it.',
          'The cure is to respect the clock. Charging the whole 100 minutes to specialist involvement gives a later action credit or blame for time that was already gone. The honest starting point for judging the decision is 11:20, the moment it was made. From there the question is sharp: for a job like this one, stuck after eighty minutes, what happens next with specialist help versus without it? The twenty minutes that followed are one observation under one of those two choices. They are not, on their own, the specialist\'s effect.',
        ],
      },
      {
        title: 'Find comparable decisions',
        paragraphs: [
          'Comparing those twenty minutes with the duration of easy repairs is still unfair, in a new way. Easy repairs never reached the point of needing help. The jobs that belong in the comparison are the ones that faced the same decision: similar symptoms, similar time already spent, a mechanic who was stuck. Some of those got the specialist and some soldiered on alone. That is the pair the workshop actually wants to compare.',
          'Be honest about what the timeline can and cannot settle. Perhaps the specialist saved time. Perhaps explaining the job to her added some. The clock alone cannot tell you which. What it can do, decisively, is reject the claim that she caused the first eighty minutes, because she was not there. So the records that matter are the ones that let you rebuild the decision: when help was requested, why, and what was still unfinished at that moment. Those three details turn a vague accusation into a question about a specific action at a specific stage.',
        ],
      },
      {
        title: 'Spotting the pattern elsewhere',
        paragraphs: [
          'Once you have the fire-engine shape in mind, it shows up constantly. People on strong medication are sicker than people on none. Projects with crisis consultants run late. Students with tutors have lower grades. In each case the response was triggered by the problem, and a naive comparison then charges the response with the problem\'s full history.',
          'Two cautions. Reverse causation does not mean the response is always innocent; a specialist really could slow things down, and the only way to know is the comparison at the decision point. And the timeline fix works only if the records actually capture when the decision was made. A total-duration column with no timestamp for the handover hides exactly the fact that matters.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'When could specialist help have an effect?',
      alt: 'Intake at 10:00, specialist arrival at 11:20, and completion at 11:40.',
      caption: 'Find the middle marker first. Everything to its left, eighty minutes, happened before the specialist existed in this story and cannot be her effect. Only the twenty minutes to its right are even eligible. Invented times; spacing is not to scale.',
      items: [
        { label: '10:00 intake', detail: 'General inspection begins.' },
        { label: '11:20 specialist joins', detail: '80 minutes have already passed.' },
        { label: '11:40 ready', detail: '20 further minutes; 100 minutes total.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw the three times on a line and work out the two intervals: 80 minutes before the specialist, 20 after. Writing the split down is what makes the 100-minute total stop looking like one thing.',
        'Write the original claim, specialist involvement caused the 100-minute repair, and cross it out. Beside it write the one fact that kills it: she arrived at minute 80.',
        'Write the comparison you would actually need, starting at 11:20: jobs with similar symptoms and similar time already spent, some helped and some not. Include what made this job eligible for help, because that eligibility is what the easy repairs lack.',
      ],
      notice: 'Your evaluation now starts at the moment of the decision, not at a clock that began running for reasons nobody is evaluating.',
      troubleshooting: 'If you find yourself comparing against easy repairs, stop and add two conditions to the comparison: an unresolved fault and comparable elapsed time. Without them you are comparing fires that needed engines with fires that put themselves out.',
    },
    recall: {
      prompt: 'A person starts using a route-planning app after repeatedly arriving late. Later, their records show app use is associated with lateness. What could explain that?',
      hint: 'Which came first, the app or the lateness?',
      answer: 'The fire-engine shape. The lateness came first and prompted the app, so every late trip from before the download sits in the same records as the app and makes it look guilty. To judge the app you have to split the timeline at the moment it was installed and compare only trips after that point, ideally against similar trips the person would have made without it. The app might help, might not, or might be used mostly on the chaotic days when lateness was likely anyway. The one thing the association cannot show is that the app caused trips that happened before it existed.',
    },
    quiz: {
      question: 'A replacement editor joins after a film is already behind schedule. Which comparison best targets the replacement decision?',
      options: [
        'Similar delayed projects at the point when replacement became an option',
        'All projects using replacements versus all projects retaining their editor',
        'The whole project duration versus the replacement editor\'s usual working day',
      ],
      correctIndex: 0,
      explanation: 'The first option lines up the clock at the decision and matches on the trouble that was already present, which is exactly what the workshop needed at 11:20. Comparing all replacement projects with all non-replacement projects mixes in every project that never fell behind, like comparing against easy repairs. Whole-project duration charges the replacement with delay that had accumulated before anyone thought of calling them.',
    },
    takeaway: 'Start the clock at the decision, compare against others who faced the same decision, and never blame a response for the time that summoned it.',
    sourceNote: 'The causal reference informs the timing distinction. All workshop times are invented and do not measure specialist effectiveness.',
  },
  {
    id: 'thinking-004',
    title: 'Check the rule that admitted each example',
    outcome: 'See how the rule that decides what gets into a collection can manufacture a pattern inside it that does not exist in the wider world.',
    scene: 'An imaginary short-film showcase admits films with strong sound or a strong story.',
    sections: [
      {
        title: 'A pattern inside the shortlist',
        paragraphs: [
          'A short-film showcase has a simple admission rule for this exercise: a film gets shortlisted if its sound is strong, or its story is strong, or both. Before anyone applies the rule, forty films are submitted, ten in each of four groups: strong sound and strong story, strong sound only, strong story only, and neither. These ratings are just categories for the exercise, not real judgements of art.',
          'Check the full pool for any connection between sound and story. Among the twenty strong-sound films, ten have strong stories, half. Among the twenty weak-sound films, ten have strong stories, also half. No relationship whatsoever. A film\'s sound tells you nothing about its story. Hold on to that fact, because it is about to seem to disappear.',
        ],
      },
      {
        title: 'The missing cell changes the comparison',
        paragraphs: [
          'Think about the people at a party who are either funny or good-looking, because the host invites on that basis. Among the guests, the ones who are not especially good-looking are all funny; they had to be, to get in. The good-looking guests include plenty who are not funny at all. Inside the party, looks and humour seem to trade off. Outside it, they never did. The guest list created the pattern.',
          'The showcase does exactly this. Apply the rule and the ten films with neither quality vanish. Now look at the weak-sound films that remain: all ten have strong stories, because a weak-sound film with a weak story was never let in. Look at the strong-sound films: twenty of them, only ten with strong stories. Inside the shortlist, weaker sound appears to go with stronger storytelling. Nobody changed a single film. The rule removed one corner of the table, and the pattern is the shape of the hole. In causal language the shortlist is a collider: a shared result that two separate factors each feed into. Look only at that result, and its causes start to look related.',
        ],
      },
      {
        title: 'Do not turn the pattern into a tradeoff',
        paragraphs: [
          'The tempting conclusion is that putting effort into sound costs you story. The rule explains the whole pattern on its own; no tradeoff is needed. And the pattern will not wash out with more data: shortlist a hundred films under the same rule and the hole is still there, just bigger. Whenever a collection shows you a surprising relationship, three questions come first. How did examples get in? Which combinations could never appear? And which population is the conclusion actually about: the shortlist, or every film made?',
          'Real selection is messier than this. Admission rules are fuzzy, and sound and story might genuinely be related before selection happens. The exercise strips all that away so the one mechanism stands alone and you can recognise it in the wild. Award lists, star portfolios, hospital wards, a specialist\'s queue: each is a collection with a door, and the door shapes what you see inside.',
        ],
      },
      {
        title: 'Where the door is hiding',
        paragraphs: [
          'Collider patterns are hard to notice because the selection often happened long before you arrived. You see the shortlist; you never saw the forty. The published papers, not the rejected ones. The successful startups, not the ones that folded. The patients who were admitted, not the ones sent home. In each case somebody applied a rule, and you are studying the survivors.',
          'Two cautions. First, restricting further does not help; comparing only the very best within the shortlist narrows the door rather than reopening it. Second, this is not a reason to distrust every pattern in every collection. It is a reason to ask, before trusting one, whether the admission rule could have produced it by itself. If the answer is yes, you need the full pool, or at least a clear account of who was turned away.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Sound by story before selection',
      alt: 'Four groups of ten films; only the weak-sound and weak-story group is excluded.',
      caption: 'Find the one excluded cell first. Then read down the weak-sound row: with that cell gone, every remaining weak-sound film has a strong story. The pattern is the shape of the hole, not a fact about films. Invented two-way table.',
      items: [
        { label: 'Strong sound / strong story', detail: '10 films; shortlisted.' },
        { label: 'Strong sound / weak story', detail: '10 films; shortlisted.' },
        { label: 'Weak sound / strong story', detail: '10 films; shortlisted.' },
        { label: 'Weak sound / weak story', detail: '10 films; excluded.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw the two-by-two table with ten films in each cell, and before doing anything else check the full pool: half of each sound group has a strong story. Write no relationship above the table so you remember what was true before the rule.',
        'Apply the rule by crossing out the weak-sound, weak-story cell. Circle the three cells that remain. This is all a shortlist reader will ever see.',
        'Within the shortlisted weak-sound films, work out the share with strong stories: ten of ten. Within the shortlisted strong-sound films: ten of twenty. Write both fractions, then explain the difference in one sentence that mentions only the admission rule and no property of any film.',
      ],
      notice: 'A relationship appeared the moment one cell was removed, with no film changing and no causal link between sound and story. You watched the door create the pattern.',
      troubleshooting: 'If your fractions come out wrong, check the denominators: each one must count only the shortlisted films within a single sound group. Mixing in excluded films or the other row undoes the exercise.',
    },
    recall: {
      prompt: 'A repair queue admits devices with severe faults or priority cover. Inside the queue, ordinary-cover devices look more severely damaged than priority-cover ones. Why might that be?',
      hint: 'What does an ordinary-cover device need in order to get into this queue?',
      answer: 'This is the party guest list. Priority-cover devices get into the queue whether or not their fault is severe; the cover alone admits them. Ordinary-cover devices have only one way in: a severe fault. So every ordinary-cover device in the queue is severe by necessity, while the priority-cover group includes minor faults too. Inside the queue, ordinary cover and severity look linked. The admission rule built that link; cover changes nothing about the physical damage. To know whether cover and severity are related in the real world you would need the full population of devices, including everything that never reached the queue.',
    },
    quiz: {
      question: 'A scholarship shortlist admits applicants with high exam scores or exceptional portfolios. Inside it, higher scores go with weaker portfolios. What should precede a claim that scores weaken portfolios?',
      options: [
        'Increase the shortlist size while keeping the same admission rule',
        'Check the selection rule and compare the full eligible applicant pool',
        'Compare only the highest exam scores within the shortlist',
      ],
      correctIndex: 1,
      explanation: 'The or-rule is the door, and it can produce the pattern entirely on its own; only the full pool, including everyone turned away, can show whether scores and portfolios are related for real. A bigger shortlist under the same rule has the same hole, just larger. Restricting to the top scorers narrows the door further and makes the manufactured pattern sharper, not truer.',
    },
    takeaway: 'Before trusting a pattern inside a collection, ask how things got in and which combinations the door never let through.',
    sourceNote: 'Causal Inference: What If covers collider selection. The showcase rule and ratings are fictional, not claims about festivals or creativity.',
  },
  {
    id: 'thinking-005',
    title: 'Do not remove the route through which help works',
    outcome: 'Tell apart a background difference you should match on from a step in the chain the help works through, so your comparison does not accidentally delete the benefit.',
    scene: 'A printed index helps beginners locate facts in a local-history booklet.',
    sections: [
      {
        title: 'The index changes searching',
        paragraphs: [
          'Beginners sit a short exercise: answer factual questions using a local-history booklet within a fixed session. Half of them also get a new printed index at the back. The idea behind the index is plain. Readers find the right page faster, which leaves more of the session for writing a complete answer. If that chain works, the index group should produce fuller answers.',
          'Then someone proposes a tidier comparison. To be fair, they say, compare answer quality only between readers who spent exactly the same time searching, so searching speed does not muddy the result. It sounds rigorous. It is a mistake, and an instructive one. Faster searching is not noise to be removed. It is the mechanism. Hold search time equal and you have thrown away the main thing the index was supposed to do.',
        ],
      },
      {
        title: 'Background versus pathway',
        paragraphs: [
          'Imagine testing whether a new fertiliser makes tomatoes heavier, and insisting on comparing only plants with the same leaf growth. Fertiliser makes tomatoes heavier partly by growing more leaves. Matching on leaf growth compares fertilised and unfertilised plants that have been forced to look alike on the very thing the fertiliser changes, and the benefit vanishes from the comparison while still being real in the garden.',
          'The distinction is about time and direction. Prior familiarity with the booklet existed before anyone handed out an index; it is background, and matching on it is sensible. Search time is different: the index itself changes it. In the proposed chain, index access shortens searching, and shorter searching leaves room for a fuller answer. A variable sitting in the middle of a chain like that, carrying part of the effect along, is called a mediator. If your question is the total effect of offering the index, holding a mediator fixed blocks part of the answer. More adjustment is not automatically more rigour. Sometimes it is a hole cut in the middle of the effect.',
        ],
      },
      {
        title: 'Choose the effect before the analysis',
        paragraphs: [
          'There is a legitimate question hiding inside the tidy proposal. You might want to know whether the index helps in some way other than speeding up search, perhaps by revealing how topics connect. That is a real and different question, about a direct effect rather than a total one, and it needs its own design and its own assumptions.',
          'What it does not get is a free answer from simply plugging search time into the calculation. Readers who searched for equally long despite having different tools may differ in ways you never measured; perhaps the index reader was tackling a harder question. So decide first which effect you are after, then draw what the index could plausibly change. The drawing proves nothing about the mechanism. What it does is show, before you run anything, whether the comparison you are about to make would quietly erase a path you meant to measure.',
        ],
      },
      {
        title: 'The temptation of adjusting for everything',
        paragraphs: [
          'The instinct behind the mistake is a good one: differences between groups feel like contamination, and removing them feels like care. The instinct goes wrong when it stops asking where each difference came from. A difference that existed before the treatment is a fair thing to match on. A difference the treatment created is part of the result.',
          'Two habits protect you. Before adjusting for any variable, ask whether the treatment could have changed it; if yes, it may be a mediator, and holding it fixed changes your question. And say out loud which effect you want, total or direct, before you look at the data. The two questions can both be worth asking. They are just not the same question, and a table that answers one will be misread as answering the other.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'The proposed route to more complete answers',
      alt: 'Index access leads to shorter searching, which leaves time for more complete answers.',
      caption: 'Follow the arrows left to right: the index reaches the answer by way of the middle box. Now imagine clamping that middle box so it cannot move. The chain is cut, and that is what holding search time fixed does. Hypothetical pathway.',
      items: [
        { label: 'Index supplied', detail: 'Readers can locate the relevant pages.' },
        { label: 'Search time changes', detail: 'Less of the fixed session is spent looking.' },
        { label: 'Answer completeness', detail: 'More session time remains to construct the answer.' },
      ],
      arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw three boxes in a row, index access, search time, answer completeness, with arrows left to right. The row is the proposed chain, and the order is the claim.',
        'Add a fourth box, prior booklet familiarity, off to the side, with a note that it existed before the index was handed out. Its position off the chain is the point: it is background, not a step.',
        'Write two questions. First: does offering the index produce fuller answers overall? Second: does the index help in some way other than speeding up search? Notice that the second one is the only one where fixing search time makes sense, and even then it needs more than a spreadsheet column.',
      ],
      notice: 'Your two questions are about different effects of the same booklet, and only one of them survives holding search time fixed. Knowing which is the whole lesson.',
      troubleshooting: 'If every variable on your page looks like background, test each one with a single question: could receiving the index change this? Anything that answers yes belongs on the chain, not beside it.',
    },
    recall: {
      prompt: 'A checkout redesign reduces typing and also reduces abandoned purchases. Why might comparing only sessions with equal typing time miss some of its benefit?',
      hint: 'Is typing time something the redesign itself changes?',
      answer: 'Typing time is the tomato leaves. The redesign works, at least partly, by making people type less, and less typing is one of the reasons fewer of them give up. Restrict the comparison to sessions with equal typing and you have forced the redesigned and old checkouts to look the same on the very thing the redesign changed. Whatever benefit flowed through that route disappears from the table while still being real for shoppers. If you specifically want to know whether the redesign helps in ways other than reducing typing, that is a different question with its own design; it does not come free from holding typing fixed.',
    },
    quiz: {
      question: 'A new sign reduces wrong turns, which in turn reduces travel time through a building. Which variable is a proposed mediator?',
      options: [
        'Familiarity with the building before the sign was installed',
        'The destination assigned before the walk began',
        'Wrong turns made after seeing the new sign',
      ],
      correctIndex: 2,
      explanation: 'Wrong turns sit in the middle of the chain: the sign changes them, and they change travel time, so they carry the effect along. Prior familiarity and the assigned destination both existed before anyone saw the sign; they are background to match on, not steps the sign works through. Holding wrong turns fixed would cut the chain and hide the sign\'s benefit.',
    },
    takeaway: 'Ask whether the treatment could have changed a variable before you hold it fixed; if it could, you may be about to delete the effect you came to measure.',
    sourceNote: 'The inherited causal reference distinguishes total and pathway-specific effects. The booklet scenario illustrates a proposed mechanism, not a tested teaching intervention.',
  },
  {
    id: 'thinking-006',
    title: 'Untouched does not mean unaffected',
    outcome: 'Find the shared resource that lets a change in one group leak into the group you were using as a comparison.',
    scene: 'Two apartment laptops share a router while one changes its backup schedule.',
    sections: [
      {
        title: 'One laptop changes, both improve',
        paragraphs: [
          'Two laptops share an apartment\'s internet connection. In the evenings, laptop A uploads large backups while laptop B streams a film. You want to know whether moving A\'s backups to the middle of the night makes things better, so you set up a tidy comparison: A is the treated device, B is the untouched control. Change A, leave B alone, compare.',
          'Then both laptops improve. B\'s film stops stuttering even though nobody touched a single setting on B. The tidy comparison just told you the change did nothing special for A, since B got better too. That conclusion is wrong, and the reason is sitting on the shelf blinking. Both laptops use the same router and the same connection to the outside world. When A stops flooding that connection, B gets more of it. B\'s settings did not change. B\'s world did, because A\'s did.',
        ],
      },
      {
        title: 'The effect crosses the label',
        paragraphs: [
          'Picture two people sharing a bathroom in the morning. One of them starts getting up twenty minutes earlier. The other never changes their alarm, yet they now get into the bathroom without waiting. Nobody would call the second person an untouched control; their morning improved precisely because the first person\'s did. The shared bathroom carries the change from one to the other.',
          'The technical name is interference between units: one unit\'s outcome depends on what another unit was assigned. A simple experiment usually leans on the assumption that each unit is affected only by its own assignment. The apartment breaks that assumption if the shared connection carries the effect, and no label you write on B can insulate it from the router. Here the leak made the treatment look weaker than it was, because the control improved too. In other setups a leak can make a treatment look stronger, or hide a harm. The direction depends on which resource is shared and what you are measuring, so the first job is simply to notice that a leak exists.',
        ],
      },
      {
        title: 'Match the boundary to the question',
        paragraphs: [
          'The fix starts with a drawing, not a decision. Sketch everything the two laptops depend on together before you decide what to assign separately. The shared path from both devices through the router to the internet is the leak, drawn plainly. Once it is visible, you can ask what your question actually concerns. If you care about the household\'s evening, the whole connection is one unit, and comparing it with itself on a different schedule, or with a similar household that kept the old one, is the honest shape.',
          'Comparing across separate households avoids this particular leak and introduces new differences, different internet plans and viewing habits, that you then have to think about. There is also a third option: stop pretending the spillover is absent and study it on purpose, measuring how much B gains when A moves. Do not unplug anyone or alter a live router for this exercise. The useful first product is a design note that explains, in one paragraph, how a device outside the treatment list could still receive part of the treatment\'s consequences.',
        ],
      },
      {
        title: 'Where leaks hide',
        paragraphs: [
          'Spillovers are easy to miss because they travel through things nobody listed as part of the experiment. A shared queue, a shared budget, a shared teacher, a shared water main. Pupils who received new books lend them to friends in the control group. A discount given to half a town\'s shops changes foot traffic for the other half. In each case the untreated label is accurate about what was assigned and silent about what was received.',
          'Two cautions. Not every shared thing leaks; two laptops on separate connections in separate flats share a city and a time zone, and that is fine. The test is whether the treatment plausibly changes something the control group then uses. And finding a leak does not wreck the study. It changes the right unit of comparison, or turns the spillover into something worth measuring in its own right.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Both laptops depend on the shared path',
      alt: 'Laptop A and laptop B both connect to one router, which connects to the internet link.',
      caption: 'Trace from each laptop toward the right and notice where the two lines merge: the router, then the single link. Anything that changes how much A sends through that merge point changes what B receives on the other side. Schematic, not room scale.',
      items: [
        { label: 'A: backups', detail: 'Its upload schedule changes.', x: 18, y: 24, shape: 'screen' },
        { label: 'B: film', detail: 'Its settings stay unchanged.', x: 18, y: 76, shape: 'screen' },
        { label: 'Router', detail: 'Both devices use this resource.', x: 53, y: 50, shape: 'box' },
        { label: 'Internet link', detail: 'Shared capacity can carry effects.', x: 84, y: 50, shape: 'circle' },
      ],
      arrows: [{ from: 0, to: 2 }, { from: 1, to: 2 }, { from: 2, to: 3 }],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw the two laptops, the router, and the internet link, with lines showing who connects to what. Change nothing on any real device; the drawing is the exercise. Notice how the two lines become one.',
        'Follow the path from A\'s reduced uploads to B\'s film in writing: A sends less, the shared link has spare capacity, B waits less. Each step is a mechanism you can name, which is what makes this a leak rather than a coincidence.',
        'Write one sentence stating whether your question is about one laptop or about the household\'s evening. Then write the comparison boundary that matches: a single device, or the whole connection. The boundary should follow the question, not the list of settings you changed.',
      ],
      notice: 'Your comparison boundary is now drawn around where the effect can travel, not around the one device whose settings were edited.',
      troubleshooting: 'If you cannot see any connection between the two groups, list every resource both of them use, bandwidth, time, money, people, space, before drawing arrows. Leaks run through resources, and resources are easy to forget when they are not on the treatment list.',
    },
    recall: {
      prompt: 'A school gives new reading materials to selected pupils, who then share them with classmates. Why is the untreated label on the classmates incomplete?',
      hint: 'Look for a route by which the material reaches people who were never given it.',
      answer: 'The classmates are the second person at the shared bathroom. They were assigned nothing, and they received something anyway, through a pupil who was. Their reading outcomes now partly depend on someone else\'s assignment, which is exactly the leak the untreated label hides. A comparison of treated pupils against their classmates would understate the materials\' effect, because the control group has been partly treated. The design has to either account for sharing, perhaps by measuring it, or compare whole classes or whole schools where sharing cannot cross the boundary.',
    },
    quiz: {
      question: 'Two printers share one job queue. Only one printer gets faster software. Which observation suggests interference?',
      options: [
        'Jobs on the unchanged printer wait less because the common queue clears sooner',
        'The upgraded printer finishes its own jobs sooner with unchanged queue conditions',
        'Both printer reports use the same definition of a completed page',
      ],
      correctIndex: 0,
      explanation: 'The shared queue is the router: when the fast printer drains it sooner, jobs headed for the slow printer wait less, so the untreated printer\'s outcome depends on the treated one\'s assignment. The upgraded printer improving on its own is just the treatment working, not a leak. A consistent page definition is good measurement practice and says nothing about spillover either way.',
    },
    takeaway: 'Before trusting a comparison group, trace every resource it shares with the treated group and ask whether the treatment could travel through it.',
    sourceNote: 'Causal Inference: What If provides the interference concept. This is a paper design exercise, not a recommendation to change shared network settings.',
  },
  {
    id: 'thinking-007',
    title: 'Subtract the change that might have happened anyway',
    outcome: 'Work out how much of an improvement belongs to the change you made, by subtracting the improvement a comparison group got without it, and say plainly what that subtraction assumes.',
    scene: 'Two library branches track late returns while one pilots reminder messages.',
    sections: [
      {
        title: 'Both branches improve',
        paragraphs: [
          'Two library branches count late returns the same way: late returns per 100 eligible loans. East starts sending reminder messages before due dates. West carries on as before. Before the pilot, East had 30 late returns per 100 loans and West had 20. Afterwards, East is down to 18 and West is down to 16.',
          'East\'s staff are delighted: 30 down to 18 is twelve fewer late returns per hundred. But look at West. It fell from 20 to 16, four fewer, and West sent no reminders at all. Something else was helping both branches that month, perhaps a holiday calendar that moved due dates, perhaps a quieter season. If you hand all twelve of East\'s improvement to the reminders, you are crediting them with a change that showed up at a branch they never touched.',
        ],
      },
      {
        title: 'Work out the comparison',
        paragraphs: [
          'Think of a parent measuring a child against the kitchen door frame. The child grew five centimetres this year. Did the new vitamins do that? Children grow anyway. If the sibling who took no vitamins grew three centimetres over the same year, the honest estimate for the vitamins is two, not five. You subtract the growth that was coming regardless.',
          'The library version has a name, difference-in-differences, and it compares the changes rather than the final numbers. East\'s change: 30 minus 18, which is 12. West\'s change: 20 minus 16, which is 4. The reminder estimate is 12 minus 4, which is 8 fewer late returns per 100 loans. Read it another way to check it. If East had followed West\'s path and improved by 4 without reminders, East would have landed at 26. East actually landed at 18. The gap is the same 8. Notice that East and West started at different levels, 30 and 20, and that is fine. The method never required them to match. What it requires is that their changes would have matched if nobody had sent a single reminder.',
        ],
      },
      {
        title: 'The missing trend is an assumption',
        paragraphs: [
          'That requirement has a name too: parallel trends. It says East, left alone, would have moved the way West moved. It is a claim about something nobody can observe, East\'s untreated path through a month in which East was in fact treated. Similar movement in earlier months makes the claim more believable. It cannot prove it, because the past is not the month in question.',
          'So before calling eight a reminder effect, check what else differed. Did East also shorten its loan period? Did it serve a different mix of borrowers, students on break perhaps? Did either branch change how it recorded lateness? Any East-only change during the pilot lands inside the eight and wears the reminders\' name. The subtraction itself is exact for these invented numbers. Whether it measures a cause is settled by the design and the assumption, never by the arithmetic.',
        ],
      },
      {
        title: 'Two ways to get it wrong',
        paragraphs: [
          'The first mistake is comparing final levels. East finished at 18, West at 16, so someone concludes reminders made East worse by two. That throws away everything you know about where each branch began, and East began ten points behind. Levels tell you where branches are. Changes tell you what moved them.',
          'The second mistake is treating the method as a machine that launders any two columns of numbers into a causal effect. It launders nothing. It converts the question did reminders work into a different question, did East move differently from how West moved, and that second question only answers the first if the parallel-trends assumption holds. Write the assumption down next to the result, every time, so the eight never travels anywhere without it.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Late returns before and after the pilot',
      alt: 'East decreases from 30 to 18 late returns per 100 loans; West decreases from 20 to 16.',
      caption: 'Compare the two drops, not the two final bars. East fell by 12, West by 4, and the difference between those drops is 8. The bars start at different heights on purpose: the method cares about movement, not level. Invented data.',
      unit: 'late returns per 100 loans',
      items: [
        { label: 'East before', detail: 'Reminders not yet introduced.', value: 30 },
        { label: 'East after', detail: 'Reminders introduced; reduction of 12.', value: 18 },
        { label: 'West before', detail: 'Existing process.', value: 20 },
        { label: 'West after', detail: 'Existing process; reduction of 4.', value: 16 },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        'Write the four rates in a small table, before and after for each branch, and work out each branch\'s own drop: before minus after. East 12, West 4. Doing each branch separately first is what stops you from comparing final levels.',
        'Subtract West\'s drop from East\'s and keep the unit attached: 8 fewer late returns per 100 loans. A number without its unit is the first thing to get misquoted.',
        'Write the assumed East outcome had it followed West\'s path, 26, and check that 26 minus 18 also gives 8. Then write one East-only change during the pilot, such as a shorter loan period, that would hide inside the 8 and wear the reminders\' name.',
      ],
      notice: 'You have eight fewer per hundred, and sitting right beside it a named assumption and a named threat. The number never travels without them.',
      troubleshooting: 'If you got 2, you subtracted West\'s final level from East\'s final level. Go back and compute each branch\'s change from its own starting point first; the method is about movement, not position.',
    },
    recall: {
      prompt: 'A road pilot cuts average journey time from 40 to 32 minutes. A comparison route with no changes goes from 30 to 27. What is the contrast, and what does it rest on?',
      hint: 'Compare the two reductions, not the two final times.',
      answer: 'The pilot route dropped 8 minutes, from 40 to 32. The comparison route dropped 3, from 30 to 27, with nothing done to it, so 3 minutes of improvement was happening anyway, lighter traffic or better weather perhaps. The contrast is 8 minus 3, five minutes of extra reduction attributable to the pilot. That is the sibling who took no vitamins. The five rests on the assumption that the pilot route would have dropped by 3 like its neighbour if nothing had been done, and it is threatened by anything that changed only on the pilot route during the trial, such as roadworks finishing or a new speed limit.',
    },
    quiz: {
      question: 'Earlier trends at the two branches match, but only the pilot branch extends its opening hours during the trial. What follows?',
      options: [
        'Matching earlier trends establish the reminder effect despite the extension',
        'The extension could break the untreated-trend comparison',
        'Different starting rates make the method unusable regardless of the extension',
      ],
      correctIndex: 1,
      explanation: 'Longer hours at one branch only is exactly the kind of East-only change that lands inside the eight and wears the reminders\' name, so the parallel-trends assumption is now in doubt for the trial period. Matching past trends is supporting evidence about the past, not proof about a month in which something else changed. Different starting levels were never the problem; the method compares movement, not position.',
    },
    takeaway: 'Subtract the comparison group\'s change from the treated group\'s change, then write down the assumption that the two would have moved alike, because the number is only as good as that sentence.',
    sourceNote: 'The inherited Mixtape chapter explains difference-in-differences. All branch and road values are fictional teaching data.',
  },
  {
    id: 'thinking-008',
    title: 'Random assignment is not a representative audience',
    outcome: 'Keep two questions apart: was the comparison inside the study fair, and does the result carry to people who were never in the room.',
    scene: 'Forty volunteers with recent phones test two versions of an offline museum map.',
    sections: [
      {
        title: 'A careful test with a narrow group',
        paragraphs: [
          'A museum wants to know which of two offline map designs helps visitors find a named gallery faster. It recruits forty volunteers, all of whom happen to own recent phones, and uses a coin-flip procedure to decide which map each person gets. Then it times them. This is a genuinely good way to run the comparison, and it is worth saying why before saying what it cannot do.',
          'If volunteers had picked their own map, the confident navigators might have gravitated to the sleek minimal one, and the result would partly measure confidence rather than design. Chance assignment breaks that link: nothing about a person decides which map they get. It does not promise the two groups of twenty are perfectly matched; with small numbers, luck can still tilt them. But it removes the systematic bias, and that is what makes the within-study comparison trustworthy. The catch is in the phrase within-study. The forty people in the room are the only people this result is about.',
        ],
      },
      {
        title: 'Two different kinds of chance',
        paragraphs: [
          'A chef perfects a recipe by blind-tasting two versions on the restaurant staff, assigned at random. The tasting is fair. It still tells her nothing about diners who cannot eat dairy, because none of the staff are lactose intolerant. The fairness of the tasting and the range of the tasters are two separate properties, and getting one right does nothing for the other.',
          'Random assignment decides which treatment the people already present receive. Random sampling decides who gets to be present, drawn from some defined wider population. They sound alike and do opposite jobs. A flawless assignment procedure cannot conjure the absent visitors into the room: people with older phones, with large text enabled, reading another language, on a flaky connection. If any of those conditions changes how the map behaves, the effect outside the study can differ from the effect inside it. Carrying a result to a new population is called generalisation, and it needs an argument about those differences. The word randomised is not that argument.',
        ],
      },
      {
        title: 'Keep the finding and its boundary',
        paragraphs: [
          'Suppose one design clearly wins among these volunteers under these conditions. That is a real result and it should not be thrown away because the sample was narrow. The honest move is to report it with its edges visible: faster for forty recent-phone volunteers finding one gallery, with older hardware and accessibility settings untested.',
          'A follow-up study can then go after the gaps on purpose, recruiting people with older phones and relevant accessibility settings, with proper consent. It does not have to pretend every phone user is interchangeable; it has to cover the conditions that plausibly change the result. In any review of such a study, make two separate notes rather than one blended verdict. One: how assignment supported the internal comparison. Two: why a visitor unlike these volunteers might have a different experience. They answer different questions, and blending them is how a narrow finding gets quoted as a universal one.',
        ],
      },
      {
        title: 'Where the confusion comes from',
        paragraphs: [
          'Randomised carries a glow. It is the gold standard, people say, and so a randomised result feels like it has earned universal trust. The glow is deserved for the question it answers, whether the comparison inside the study was fair. It is undeserved for the question it never touched, whether the people inside the study resemble the people you care about.',
          'Two habits keep the questions apart. Before reading any result, ask who was eligible and who actually showed up; that tells you the population the finding describes. And when someone objects that a study was not diverse, push for the mechanism: which specific condition would change how the treatment works, and why? Text clipping at large font sizes is an argument. Diversity in the abstract is a mood.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Two questions about the museum test',
      alt: 'Assignment decides which map volunteers receive; population coverage asks which visitors are included.',
      caption: 'Read the two columns as two different questions that happen to be about one study. The left one is answered well by coin-flipping among forty people. The right one is not touched by the coin at all. Fictional study.',
      items: [
        { label: 'Assignment', detail: 'Which map does each recruited volunteer receive?' },
        { label: 'Population coverage', detail: 'Whose phones, languages, and access needs are represented?' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write two headings side by side: assignment inside the test, and visitors outside the test. The physical separation on the page is the habit you are building.',
        'Under the first heading, describe how the forty volunteers were split between the two maps by chance, and write one sentence on what that protects against: people choosing the map that suits their confidence.',
        'Under the second, name two conditions absent from the volunteer group, such as an older phone or large-text settings, and for each one write the specific way it could change how the map works. If you cannot name a mechanism, it is not yet an objection.',
      ],
      notice: 'You have kept the within-study finding intact and drawn its boundary in the same breath, without claiming it covers every visitor or dismissing it because it does not.',
      troubleshooting: 'If your second column says the sample was not diverse enough, you have written a mood, not an argument. Replace it with one concrete interaction, such as labels clipping at larger text sizes, that would change the result.',
    },
    recall: {
      prompt: 'A drying technique is randomly assigned to identical cotton fabric samples and clearly wins. Does the result automatically cover wool coats?',
      hint: 'Assignment decides which sample gets which treatment. It does not change what the samples are made of.',
      answer: 'No. The coin flip made the cotton comparison fair; it did nothing to put wool in the study. This is the chef\'s dairy-free diners: the tasting was sound and the tasters did not include them. Wool fibres hold water differently and can felt under heat, so there is a concrete mechanism by which the drying technique could behave differently on a coat. The cotton result stands for cotton. Extending it to wool needs either evidence on wool or a convincing argument that the mechanism does not depend on fibre type, and a well-designed assignment supplies neither.',
    },
    quiz: {
      question: 'A software tool is tested with random assignment on new laptops, but it will be deployed on older machines. Which addition addresses the main generalisation gap?',
      options: [
        'Randomise the same new laptops again with different labels',
        'Increase repetitions on the same new hardware only',
        'Include relevant older hardware and inspect whether the effect changes',
      ],
      correctIndex: 2,
      explanation: 'Older hardware is the absent condition, and the only way to learn how the tool behaves on it is to put it in the study. Re-randomising the same laptops is the chef re-tasting with the same staff: fairer and fairer about a population that still excludes the people you care about. More repetitions sharpen the existing comparison and cannot reveal anything about a condition that never appears.',
    },
    takeaway: 'A fair coin decides who gets which treatment among the people present; it says nothing about the people who were never there, so report the finding with its edges showing.',
    sourceNote: 'The inherited causal and statistics references support this distinction. The museum recruitment and outcome are hypothetical.',
  },
  {
    id: 'thinking-009',
    title: 'Count faults against their opportunities',
    outcome: 'Before comparing how often two things fail, divide each failure count by the number of chances that thing had to fail, and pick that number with care.',
    scene: 'A bicycle rental shop compares puncture reports across two tire models.',
    sections: [
      {
        title: 'More reports can come from more rides',
        paragraphs: [
          'A rental shop tallies its puncture reports for the month. Tire A: 24 reports. Tire B: 12. Someone at the repair bench says the obvious thing, that A punctures twice as often, and suggests switching the fleet to B. The counts are accurate. The conclusion is upside down.',
          'A was fitted on 1,200 rentals that month. B was on 300. For this exercise, each report is one rental with one puncture, both groups use the same reporting rule, and trip lengths are similar. A had four times as many chances to puncture, so of course it produced more reports. A count tells you how busy the repair bench was. It does not yet tell you anything about the risk a rider faces when they roll out of the shop.',
        ],
      },
      {
        title: 'Give each fraction its own bottom',
        paragraphs: [
          'A city with a million people will record more burglaries than a town with ten thousand. Nobody concludes the city is more dangerous from the raw totals; they ask how many burglaries per thousand residents. The bottom of that fraction, the per thousand residents, is the denominator, and it is the number of opportunities the event had to occur. Without it, you are comparing busy with quiet, not safe with risky.',
          'Divide each tire\'s reports by its own rentals. A: 24 out of 1,200, which is 0.02, or two reports per hundred rentals. B: 12 out of 300, which is 0.04, four per hundred. A had twice the reports and half the rate. The ranking flips the moment each count gets its own bottom. One more thing to notice: dividing both counts by the shop\'s total rentals would also be a legitimate calculation, but it answers a different question, what share of the bench\'s workload each model contributes. It would not tell a rider which tire is safer under them.',
        ],
      },
      {
        title: 'A matching denominator is only a start',
        paragraphs: [
          'Rentals are a reasonable denominator, not the only one. If B\'s renters mostly took long gravel rides and A\'s took short trips on tarmac, then kilometres ridden would match the question better than rentals, because punctures happen per distance on rough ground, not per transaction at the counter. Choose the opportunity that actually generates the event.',
          'Then check the top of the fraction as carefully as the bottom. Three phone calls about one puncture are one puncture, not three. Reports are not punctures either; a rider who patched the tube themselves and said nothing is invisible to the tally, and if A\'s renters are the kind who report and B\'s are not, the rates are distorted again. The rate calculation fixed one error, the busy-versus-quiet error. It did not prove that tire design caused the difference, and it leaves the next questions standing in plain view: comparable exposure, consistent counting, and how much to trust a rate built on only twelve events.',
        ],
      },
      {
        title: 'The two ways the denominator lies',
        paragraphs: [
          'The first failure is the one the shop made: no denominator at all, so the bigger group looks worse by default. It shows up whenever a headline says this hospital had more deaths, this airline had more incidents, this brand had more complaints, with no mention of how many patients, flights, or sales.',
          'The second failure is subtler: a denominator that is present but mismatched. Punctures per rental when the question is about distance. Deaths per hospital when hospitals differ in size by a factor of ten. Complaints per year when one product has been on sale for a month. Before trusting any rate, say the full sentence out loud: this many events, among this many opportunities of exactly this kind, in this period. If any part of the sentence is fuzzy, the rate is too.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Reported punctures per rental opportunity',
      alt: 'Tire A has two reported puncture rentals per 100 rentals; tire B has four.',
      caption: 'Notice that the taller bar belongs to the tire with fewer total reports. Twelve reports out of 300 is a higher rate than 24 out of 1,200. The raw counts would have drawn these bars the other way round. Invented data.',
      unit: 'reported puncture rentals per 100 rentals',
      items: [
        { label: 'Tire A', detail: '24 reports among 1,200 eligible rentals.', value: 2 },
        { label: 'Tire B', detail: '12 reports among 300 eligible rentals.', value: 4 },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        'Write two invented delivery services side by side: 18 damaged parcels out of 900 deliveries, and 10 damaged out of 250. Before calculating, guess which looks worse from the counts alone. The guess is what you are about to correct.',
        'Divide each damage count by its own delivery count and multiply by 100: 18 over 900 gives 2, and 10 over 250 gives 4. Keep each numerator with its own denominator; the moment they cross, the comparison is meaningless.',
        'Label the results two and four per hundred deliveries, with the unit written out. Then add one exposure difference worth checking before trusting the comparison, such as parcel fragility or delivery distance, because a matching denominator is where the thinking starts, not where it ends.',
      ],
      notice: 'The service with more damaged parcels has the lower damage rate. The counts pointed one way and the rates point the other, which is exactly why the rate exists.',
      troubleshooting: 'If your two rates do not make sense, check that the top and bottom of each fraction come from the same group, the same time window, and the same definition of the event. Any mismatch between them quietly changes the question.',
    },
    recall: {
      prompt: 'A larger apartment block reports more lift breakdowns than a smaller one. What would you ask before comparing their reliability?',
      hint: 'How many lifts were exposed, for how long, and how heavily were they used?',
      answer: 'This is the city-versus-town problem wearing a different coat. Start with the denominators: how many lifts does each block have, over how many months, carrying how many trips? A block with six lifts running round the clock will log more breakdowns than a block with one lift used lightly, even if every lift is equally reliable. Then check the numerator: is a breakdown the same thing in both buildings, or does one log every stuck door while the other logs only full stoppages? Only after both ends of the fraction match can you say anything about reliability. More reports from a bigger, busier installation is what you would expect; it is not yet evidence of anything.',
    },
    quiz: {
      question: 'Two delivery services report 40 and 20 damaged parcels. Which missing information most directly enables a damage-per-delivery comparison?',
      options: [
        'Eligible deliveries for each service under the same reporting rule and period',
        'The total repair bill paid by the larger service',
        'The combined delivery total without separating the services',
      ],
      correctIndex: 0,
      explanation: 'Each count needs its own bottom: the deliveries that service made, in the same period, counting damage the same way. That is the denominator that turns a workload tally into a rate. The repair bill is about cost, a different question entirely. A pooled total gives both services the same denominator, which hides exactly the difference in opportunities the comparison needs to see.',
    },
    takeaway: 'Never compare two counts until each one has its own denominator, and make sure that denominator counts the kind of opportunity that actually produces the event.',
    sourceNote: 'OpenIntro supplies statistical background. Tire and parcel counts are invented; reported proportions are not causal effects or product recommendations.',
  },
  {
    id: 'thinking-010',
    title: 'Ask what proportion of alerts are genuine',
    outcome: 'Work out how much to trust an alarm by counting what is in the alarm pile, instead of being impressed by how rarely the detector misses.',
    scene: 'A film archive uses a scanner to flag potentially damaged video clips.',
    sections: [
      {
        title: 'Good detection can still produce many false alerts',
        paragraphs: [
          'An archive runs a damage scanner across 1,000 video clips. Because this is an exercise, we get to know the truth: 20 clips are damaged and 980 are intact. The scanner flags 18 of the 20 damaged clips and misses 2. It also flags 49 of the 980 intact clips, leaving 931 correctly alone.',
          'The sales sheet leads with one number: the scanner catches 18 of 20 damaged clips, 90 percent. That figure is called sensitivity, and it is true. An archivist hears it and assumes that when the scanner flags a clip, there is about a 90 percent chance the clip really is damaged. That is a different claim, and it is badly wrong. The two numbers answer different questions, and the sales sheet answered the one that sounds better.',
        ],
      },
      {
        title: 'Start inside the alerted group',
        paragraphs: [
          'Imagine a smoke alarm that goes off for 90 percent of real fires. It also goes off for burnt toast, steam from the shower, and a particularly aggressive candle. Over a year, you hear it fifty times, and one of those was a fire. The alarm is excellent at detecting fires and terrible as evidence that there is one. Both things are true at once, because real fires are rare and toast is not.',
          'The archive works the same way. Gather every clip the scanner flagged: 18 genuine alerts plus 49 false ones, 67 flagged clips in total. The question how often is an alert genuine lives inside that pile of 67. The answer is 18 out of 67, about 27 percent. Sensitivity started inside the damaged group, 20 clips. Alert reliability starts inside the alerted group, 67 clips. Different piles, different bottoms, different answers. The false-alert rate on intact clips is only 5 percent, 49 out of 980, which sounds small. But 980 is a big pile, and 5 percent of a big pile produced more alerts than 90 percent of a small one. How common the damage is to begin with drives everything.',
        ],
      },
      {
        title: 'Use the flag for its actual purpose',
        paragraphs: [
          'None of this makes the scanner useless. A flag that is right 27 percent of the time is still far better than inspecting clips at random, where you would hit damage 2 percent of the time. The scanner is a good way to decide which clips to look at. It is a bad way to decide which clips to delete. So treat a flag as a reason to inspect, with an independent check, never as a verdict to act on automatically.',
          'One more consequence follows. Move the same scanner to a collection where damage is common, say half the clips, and the alert pile changes shape: many more genuine alerts, the same modest number of false ones, and reliability shoots up without the scanner changing at all. Bayes\' theorem is the formal way of connecting these quantities, but you do not need the algebra. The four-cell table shows the whole relationship. Remember too that in real life the 90 and 5 percent are estimates, and they may drift with file types and scanner settings.',
        ],
      },
      {
        title: 'Why the swap is so easy to make',
        paragraphs: [
          'The two questions use almost the same words. If damaged, how likely is an alert? If alerted, how likely is damage? The grammar swaps two nouns and the meaning swaps entirely, and because the first number is usually the impressive one, it is the one people quote. Then the listener quietly hears it as the second.',
          'Two protections. Before you divide, finish the sentence: among all the clips that have which property? If the property is damaged, you are computing sensitivity. If it is flagged, you are computing reliability. And whenever someone quotes a detection rate, ask how common the thing being detected is. A superb detector for something very rare will still spend most of its alerts on toast.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Clip status by scanner result',
      alt: 'Damaged clips: 18 alerts and two misses. Intact clips: 49 alerts and 931 non-alerts.',
      caption: 'Find the two alert cells and add them: 18 plus 49 is 67. That is the pile an archivist actually faces, and only 18 of it is damage. The 90 percent figure never looked at this pile; it looked only at the 20 damaged clips. Invented population.',
      items: [
        { label: 'Damaged / alert', detail: '18 genuine alerts.' },
        { label: 'Damaged / no alert', detail: '2 missed damaged clips.' },
        { label: 'Intact / alert', detail: '49 false alerts.' },
        { label: 'Intact / no alert', detail: '931 correctly unflagged clips.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen', 'Calculator'],
      steps: [
        'Draw the two-by-two table with the four counts, 18, 2, 49, 931, and check they total 1,000. The check matters: a table that does not add up will produce confident nonsense.',
        'Circle only the two alert cells and compute 18 divided by 67 as a percentage, about 27. You are standing inside the pile of flagged clips, asking how many are real.',
        'Separately compute 18 divided by 20, which is 90 percent, and label the two results in words: the first is alert reliability, the second is sensitivity. Write one sentence under each saying which group it started from. Saying the group out loud is the whole protection.',
      ],
      notice: 'The same scanner, the same table, and two honest numbers that differ by a factor of three. Neither is wrong. They were never answering the same question.',
      troubleshooting: 'If you are unsure which number you have just computed, go back to the denominator and finish the sentence: among all the clips that are what? Damaged gives sensitivity. Flagged gives reliability. The word you fill in tells you what you measured.',
    },
    recall: {
      prompt: 'A shop\'s exit gate detects most items that were not scanned at the till. Why is that fact alone not enough to judge whether a particular alarm means someone has an unscanned item?',
      hint: 'Count the alarms that go off when everything was scanned properly.',
      answer: 'Detects most unscanned items is sensitivity: it starts inside the group of people carrying unscanned goods. The question at the gate is the other one: of all the alarms that sound, how many involve an unscanned item? To answer that you need two things the headline leaves out. How often does the gate alarm when everything was scanned, because of a faulty tag or a phone in a pocket? And how rare are unscanned items among all the shoppers walking through? If unscanned items are rare and false alarms are even occasional, most alarms will be false, exactly like the smoke alarm and the toast. A high detection rate tells the shop the gate is worth having. It does not tell a security guard what a given beep means.',
    },
    quiz: {
      question: 'A detector keeps the same sensitivity and the same false-positive rate, but is moved to a population where faults are much rarer. What generally happens to alert reliability?',
      options: [
        'It stays fixed, because sensitivity did not change',
        'It decreases, because healthy cases now contribute a larger share of the alerts',
        'It increases, because the total population is healthier',
      ],
      correctIndex: 1,
      explanation: 'Rarer faults mean fewer genuine alerts, while the big healthy population keeps producing its steady trickle of false ones, so the alarm pile fills up with toast. Sensitivity staying the same is irrelevant here because it never looked at the alarm pile in the first place. A healthier population does not make each alert more trustworthy; it makes it less, because there is less real damage for the alerts to be about.',
    },
    takeaway: 'Among the faulty and among the flagged are two different piles; always say which pile you are standing in before you trust a percentage.',
    sourceNote: 'Seeing Theory explains Bayesian conditioning. All clip counts and scanner rates here are fictional, not claims about an archive product.',
  },
  {
    id: 'thinking-011',
    title: 'Look for evidence that separates explanations',
    outcome: 'Tell the difference between a clue that fits your favourite explanation and a clue that fits it better than the alternatives.',
    scene: 'A blurred photograph of a street sign could reflect missed focus or camera movement.',
    sections: [
      {
        title: 'Both explanations predict a soft image',
        paragraphs: [
          'You photograph a street sign that is standing perfectly still, and the letters come out soft. Two explanations present themselves. The camera focused at the wrong distance. Or the camera moved during the exposure. You have a favourite already; perhaps you felt your hand twitch. So you look at the blur and think: movement causes blur, this is blur, therefore movement.',
          'That argument has skipped a step. Missed focus causes blur too. The softness you are looking at is compatible with your explanation, and it is equally compatible with the rival. A clue that both stories predict cannot tell you which story is true, however vividly it seems to confirm the one you already believed. The question is never whether an explanation could produce what you see. It is what each explanation predicts about this image that the other does not.',
        ],
      },
      {
        title: 'Ask what differs between the predictions',
        paragraphs: [
          'A doctor sees a patient with a fever. Flu causes fever; so does a dozen other things. The fever alone moves nothing. Then the doctor notices a particular rash. If the rash is common with one illness and rare with the others, the rash is doing real work: it is expected under one explanation and surprising under the rest. Good diagnosis is a hunt for rashes, not for fevers.',
          'Back to the sign. Look closer and suppose every letter and every nearby stationary edge is smeared in the same direction by the same amount. That pattern is what a camera sliding during exposure naturally produces. Missed focus softens things evenly in all directions; it has no reason to drag everything one way. So the shared directional smear is more expected under movement than under missed focus, and that is what gives movement more support. The formal version is a likelihood comparison: how expected is this observation under each candidate? A clue equally expected under both leaves their relative odds exactly where they were. A clue more expected under one shifts the odds toward it, by an amount that depends on how lopsided the expectation is, and never all the way to certainty.',
        ],
      },
      {
        title: 'Keep the starting information',
        paragraphs: [
          'The clue shifts odds; it does not create them from nothing. Where the odds started matters too. If you watched the camera wobble on a flimsy tripod, movement was already the front-runner before you zoomed in. If you remember fumbling the focus ring, missed focus was. Do not quietly reset to even odds the moment a new clue appears, and do not invent precise percentages from gut feeling; a qualitative more expected is honest, a made-up 80 percent is not.',
          'Keep the list of suspects open as well. A sign that was in fact swinging in the wind, or aggressive sharpening applied by the camera\'s software, could each produce their own signatures. For this exercise, the two named explanations and one discriminating detail are enough. The useful output is not a verdict but a better next check: look at the recorded focus distance, or take a comparison shot with the camera braced on something solid.',
        ],
      },
      {
        title: 'The confirmation trap',
        paragraphs: [
          'The mistake has a recognisable shape. You hold an explanation, you find an observation it predicts, and you count that as support. But you never asked whether the rivals predict the same observation, so the support is counterfeit. It feels like evidence because it matches; it is not evidence because it fails to distinguish.',
          'Two habits break the trap. For any clue that seems decisive, ask out loud: could the other explanation produce this too, and under what conditions? If the answer is yes, easily, the clue is a fever. And prefer clues that would embarrass one explanation if they turned up: the directional smear embarrasses missed focus; a sharp foreground with a soft sign embarrasses movement. Clues that cannot embarrass anyone cannot help anyone either.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Two explanations for the same soft sign',
      alt: 'Missed focus and camera movement both predict softness; common directional smearing favors movement in this simplified comparison.',
      caption: 'Read each column for what it predicts, then find the detail that appears in one prediction and not the other: the shared directional smear. Softness alone sits in both columns and settles nothing. Qualitative comparison for a hypothetical photograph.',
      items: [
        { label: 'Missed focus', detail: 'Soft edges are expected; common directional trails are less characteristic.' },
        { label: 'Camera movement', detail: 'Softness with shared directional smearing is more expected here.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write missed focus and camera movement as two column headings. Two columns, not one, is the habit: a single explanation can never be compared with anything.',
        'Under both columns write soft letters. Then write one sentence explaining why a clue that sits in both columns cannot choose between them, however strongly it matches the one you prefer.',
        'Add common directional smearing and place it where it belongs: strongly expected under movement, weakly expected under missed focus. Write how this shifts the balance, using the words more support rather than proof. The restraint is part of the skill.',
      ],
      notice: 'Your page compares what two explanations predict instead of collecting facts that happen to suit the one you started with. The directional smear earned its place; the softness did not.',
      troubleshooting: 'If a clue feels decisive, test it by asking whether the rival could produce it too, and how easily. If the rival produces it just as readily, you have found a fever, not a rash. Keep looking.',
    },
    recall: {
      prompt: 'A parcel has not arrived. Delivery to a wrong address and a delay at the depot both predict no parcel at your door. What would help separate them?',
      hint: 'Find a record whose contents would read differently under the two explanations.',
      answer: 'Checking the doorstep again is a fever: both explanations predict an empty step, so looking harder at it moves nothing. You want a rash, a record that the two stories predict differently. A delivery scan with a location is one: under wrong-address it shows somewhere that is not your home; under depot delay it shows no delivery scan at all, only a depot one. A photograph of the drop-off, if the courier takes them, is another. Then check how trustworthy that record is, since a scan can be mistimed or mislabelled. The point is to go looking for the observation that would embarrass one explanation, not to pile up observations that both explanations shrug off.',
    },
    quiz: {
      question: 'Two possible causes of a fault start at odds of three to one. A timeout is then observed, and it is equally likely under either cause. What are the updated odds?',
      options: [
        'One to one, because both causes predict the timeout',
        'Six to one, because the timeout supports the leading cause again',
        'Three to one, because equal likelihoods leave the relative odds unchanged',
      ],
      correctIndex: 2,
      explanation: 'The timeout is a fever: equally expected under both causes, so it carries no information about which one is responsible and the odds stay at three to one. Resetting to even odds throws away everything you knew before the timeout appeared. Doubling the lead counts a non-discriminating clue as if it were a rash, which is exactly the confirmation trap.',
    },
    takeaway: 'Hunt for the clue the explanations predict differently; a clue they all predict feels like confirmation and is worth nothing.',
    sourceNote: 'Seeing Theory supplies the updating principle. The photographic comparison is an original qualitative illustration, not a calibrated fault classifier.',
  },
  {
    id: 'thinking-012',
    title: 'Choose a base rate that belongs to this situation',
    outcome: 'Judge whether a past track record actually applies to the case in front of you, and handle the trade-off between lots of old data and a little relevant data.',
    scene: 'A ferry passenger compares ordinary weekday history with a small sample from a holiday timetable.',
    sections: [
      {
        title: 'Which journeys produced the estimate?',
        paragraphs: [
          'You are planning a ferry trip on a holiday weekend, and you need to know how likely a delay is so you can decide what connection to book. A friend has the answer ready: the ferry was late on five of its last hundred departures, so the chance is 5 percent. It sounds authoritative. It is also built on a hundred ordinary weekday sailings, and your trip is nothing like those.',
          'The timetable has just changed for the holiday period. Crowds are heavier, departures are spaced differently, crews are working a new rota. Any of those could change how often a boat leaves late. The five-in-a-hundred figure is real information, but it describes the group of sailings it was measured on, and that group is called a reference class. A base rate is a frequency inside a reference class. It is not a property stamped on the ferry\'s hull that follows it into every season.',
        ],
      },
      {
        title: 'Closer conditions can mean fewer observations',
        paragraphs: [
          'Think about judging a restaurant. It has a thousand reviews averaging four stars, but a new chef started last month, and the ten reviews since then average two. Which number tells you about dinner tonight? The thousand reviews are about a kitchen that no longer exists. The ten are about the right kitchen and could be swayed by two grumpy diners. Neither number is simply correct, and pretending one of them is would be the mistake.',
          'The ferry has the same shape. Ten departures have run on the new holiday timetable and two were late: 20 percent, four times the weekday figure. It is tempting to crown the new number as the truth, since it matches your conditions. But two out of ten is fragile. One more on-time sailing drags it to 18 percent; two more late ones push it toward 33. The broad history gives you many observations about the wrong conditions. The narrow history gives you the right conditions and hardly any observations. Sample size alone does not settle it, and neither does recency alone. You have to reason about both at once.',
        ],
      },
      {
        title: 'Explain relevance instead of choosing a convenient rate',
        paragraphs: [
          'Start by pinning down the event. Late by what standard? Say it is departing more than ten minutes after the advertised time, and make sure both samples used the same rule. Then write what each sample actually contains: which timetable, which season, how many sailings. Now ask the only question that matters for transfer: which of the differences between then and now could plausibly change whether a boat leaves late? Heavier passenger loading at the ramp is a real mechanism. A new coat of paint is not.',
          'If earlier holiday seasons were recorded under a comparable schedule, that history might be the best reference class of all, more relevant than weekdays and larger than ten. Check that the schedule and the lateness rule actually match before leaning on it. You do not have to blend the samples with invented weights to produce a single tidy number. A planning note can honestly say: weekday history suggests delays are rare; early holiday evidence suggests they may be more common under the new timetable; the holiday sample is small. Then decide how much spare time to leave as a separate step, because how risky it is and how much risk you can afford are different questions.',
        ],
      },
      {
        title: 'The two ways to pick the wrong class',
        paragraphs: [
          'The first error is grabbing the biggest pile of data without asking whether the conditions match. A large sample of the wrong thing is precise about something irrelevant, and its precision makes it more persuasive, not more useful. The second error is the mirror image: grabbing the handful of cases that match perfectly and treating their frequency as settled, when a few more cases could overturn it.',
          'Two habits guard against both. For any base rate someone hands you, ask what group it was measured on and what has changed since. And when a small matching sample disagrees with a large unmatched one, resist resolving the tension by picking a side. Write both down with their sizes and their conditions, name the change that might explain the gap, and let your decision carry the uncertainty rather than hiding it inside a single confident percentage.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'More history or closer conditions?',
      alt: 'Ordinary weekdays show five late departures in 100; the new holiday timetable shows two in ten.',
      caption: 'Read the second half of each line, not just the percentage. One side has many observations under conditions that no longer apply; the other has the right conditions and ten data points. Neither percentage is a forecast. Invented ferry records.',
      items: [
        { label: 'Ordinary weekdays', detail: '5 / 100 late: 5%; more observations, older conditions.' },
        { label: 'New holiday timetable', detail: '2 / 10 late: 20%; closer conditions, fewer observations.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write each ferry sample as a full sentence: how many sailings, how many late, under which timetable and season. Writing the conditions next to the number is what stops the number from floating free.',
        'Write one reason the weekday history might still transfer to the holiday trip, such as the same crew and the same route, and one reason it might not, such as heavier loading at the ramp. A reason must name a mechanism; old versus new is a label, not a reason.',
        'Draft a two-sentence planning note that keeps the holiday sample in view without declaring 20 percent the settled probability. Then, as a separate line, decide how much buffer you would leave. Keeping the estimate and the decision apart is the final habit.',
      ],
      notice: 'Every percentage on your page now travels with the group it came from and a stated reason it does or does not apply. Nothing is quoted bare.',
      troubleshooting: 'If your reasons say only old timetable versus new timetable, you have described a label change, not a cause. Name the specific thing that differs and could affect departure time: passenger volume, turnaround spacing, crew familiarity.',
    },
    recall: {
      prompt: 'A laptop model has years of battery-life data, but you are about to run a new application that works the machine much harder. Which history is most relevant?',
      hint: 'Match the thing that drains the battery, not the name on the lid.',
      answer: 'The restaurant with the new chef. Years of data describe the laptop under the workloads people used to run, and those workloads are the kitchen that no longer exists for your purposes. The right reference class is the same model under a comparable load: similar processor use, similar screen brightness, similar background activity. If only a small sample of that exists, it deserves to be reported as small, with the old history kept as background rather than deleted. What you should not do is quote the long-run figure as if the application did not matter, or crown the first three heavy-workload measurements as the new truth.',
    },
    quiz: {
      question: 'A rain-delay estimate was built from summer daytime events, but the new event is a winter evening. What should be checked first?',
      options: [
        'Whether season and time of day change the relevance of the reference class',
        'Whether the old sample has more rows than every newer sample',
        'Whether the most recent single event happened without rain',
      ],
      correctIndex: 0,
      explanation: 'Winter evenings and summer afternoons differ in exactly the conditions that produce rain, so the first job is to ask whether the old class describes the new situation at all. A bigger sample of the wrong season is precise about something irrelevant. One recent dry event is the two-grumpy-diners problem in reverse: a single case cannot stand in for a reference class.',
    },
    takeaway: 'A base rate is a frequency inside a group; before using it, name the group, name what has changed, and refuse to hide the trade-off between many old cases and few relevant ones.',
    sourceNote: 'The inherited Bayesian and statistics sources provide the background. Ferry rates and timetable changes are fictional.',
  },
  {
    id: 'thinking-013',
    title: 'Trace evidence back to its origin',
    outcome: 'Stop counting the same claim several times just because it appears in several places, and learn to ask what each new source actually adds.',
    scene: 'A local-history caption, blog, and video repeat one museum catalogue entry.',
    sections: [
      {
        title: 'Three mentions, one starting point',
        paragraphs: [
          'You are writing a caption for a sculpture and need its unveiling date. The museum catalogue says May 2010. A local-history blog says May 2010. A video about the neighbourhood says May 2010 in its captions. Three sources agree. You feel the comfortable click of a fact confirmed, and you type it in.',
          'Then you check the footnotes. The blog cites the catalogue. The video credits the blog. What looked like three witnesses is one witness and two people repeating what they heard. Their agreement is real, but it tells you only that the date travelled faithfully from catalogue to blog to video. It does not tell you that three people each went and verified an unveiling. If the catalogue had a typo, all three sources would carry it, in perfect agreement, and the click of confirmation would feel exactly the same.',
        ],
      },
      {
        title: 'Ask what the next item adds',
        paragraphs: [
          'A rumour sweeps through a school. By lunchtime thirty pupils are telling it. Nobody treats that as thirty pieces of evidence, because everyone understands that twenty-nine of them heard it from the first one. The number of mouths repeating a claim and the number of eyes that saw the event are different counts, and only the second one is evidence.',
          'The formal version asks how each piece of evidence came to exist. Once you know what the catalogue says, finding a faithful copy of it supplies almost nothing new about the sculpture. The copy was going to say May 2010 whether or not May 2010 is true, because it was copying. Treating the three as independent and stacking their weight is how confidence inflates beyond what anyone actually observed. Different websites, different authors, different formats are all beside the point. The only question is: after I already know the earlier sources, what does this one tell me that I did not have?',
        ],
      },
      {
        title: 'A different record may answer a narrower question',
        paragraphs: [
          'Now suppose you turn up an original printed invitation, preserved in a family album, announcing the unveiling for a date in May 2010. This did not come from the catalogue; it came from the event\'s own paperwork. That is a genuinely separate line back toward the past, and it adds information. Be precise about what it adds, though. An invitation proves the unveiling was planned for May. It does not prove the ceremony happened on schedule; events get postponed. A dated newspaper report or a photograph with a verifiable date would speak to whether it actually took place, each with its own limits.',
          'The practical tool is a source tree. Draw each source, draw the arrows showing who got what from whom, and at each branch write the exact claim it supports: planned, or happened, or recorded in the catalogue. You can still cite the catalogue honestly. You just mark the date as not independently confirmed until a separate branch supports it. The aim is not to distrust repeated information. It is to stop repetition from dressing up as verification.',
        ],
      },
      {
        title: 'Independence is about origin, not appearance',
        paragraphs: [
          'The error is easy because the surface features of independence are so visible. A blog and a video look nothing alike. They have different authors, different dates, different audiences. All of that is presentation. Independence lives in where the information came from, and that is usually buried in a footnote, a credit line, or nowhere at all.',
          'Two habits help. When sources agree, go looking for the arrows before you celebrate: who cites whom? And when you want to strengthen a claim, do not look for another place it is repeated; look for a differently created record, something that would have come into existence whether or not the first source was ever written. That is the only kind of agreement that counts twice.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'How the unveiling date travelled',
      alt: 'Museum catalogue feeds a blog, which feeds a video caption.',
      caption: 'Follow the arrows backward from the video and notice that every path ends at the same box. Three presentations, one origin. Cover the first box with your thumb and the other two have nothing left to stand on. Fictional source chain.',
      items: [
        { label: 'Museum catalogue', detail: 'Original assertion: unveiled in May 2010.' },
        { label: 'Local blog', detail: 'Repeats the date and cites the catalogue.' },
        { label: 'Video caption', detail: 'Repeats the date and credits the blog.' },
      ],
      arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw the catalogue, blog, and video as three boxes and connect them with arrows showing the direction of copying. Drawing the arrows is the point: the agreement looked like three facts until the arrows showed it was one.',
        'Write what all three sources would say if the catalogue had printed the wrong month. Seeing identical agreement on a wrong date is what breaks the spell of consensus.',
        'Add the invitation as a separate box with no arrow from the catalogue, and label exactly what it supports: the unveiling was planned for May. Then write what it does not support: that the event happened as scheduled. Precision about the claim is what makes the new branch useful.',
      ],
      notice: 'Your source count now separates mouths repeating a claim from records that could independently contradict it. Three became one, then one became two, and you know exactly why.',
      troubleshooting: 'If every source looks independent, you are judging by appearance. Ignore the publisher and the format and ask what record each author actually consulted. Independence is a question about origin, and it is usually in the footnotes.',
    },
    recall: {
      prompt: 'A monitoring alert fires, which automatically sends an email, which automatically opens a support ticket. How many independent observations of a failure does that give you?',
      hint: 'Separate observations of the event from notifications about the observation.',
      answer: 'One. The alert is the only thing that looked at the system. The email exists because the alert fired, and the ticket exists because the email arrived; neither of them checked anything. They are the twenty-nine pupils repeating the rumour, and if the alert was a false alarm, all three artefacts would exist in perfect agreement about a failure that never happened. A ticket can become independent evidence later, when a human investigates and records what they found. Its automatic creation adds nothing beyond the original alert.',
    },
    quiz: {
      question: 'Two newspaper articles quote the same unnamed witness, both drawing on one press release. Which follow-up adds the clearest new information?',
      options: [
        'Locate a third article that quotes the same release',
        'Find a separately created record that bears on the specific event',
        'Count the two articles separately because their publishers differ',
      ],
      correctIndex: 1,
      explanation: 'A record that came into existence on its own, a court filing, a photograph, a log, is a new branch in the source tree and can contradict the release in a way no copy of it ever could. A third article drawing on the same release is another mouth, not another pair of eyes. Different publishers are a difference in appearance; both articles still trace back to one origin and together they count once.',
    },
    takeaway: 'Count origins, not appearances; a claim repeated in ten places by people copying one source is one piece of evidence wearing ten outfits.',
    sourceNote: 'The inherited probability sources explain dependence. The sculpture, date, and documents are fictional examples of applying that principle to provenance.',
  },
  {
    id: 'thinking-014',
    title: 'A quiet sample is not a promise of zero risk',
    outcome: 'Understand why finding no failures in a small test does not mean failures cannot happen, and what would make a clean result actually informative.',
    scene: 'A stationery maker inspects twenty envelopes and finds no failed seams.',
    sections: [
      {
        title: 'What the inspection actually found',
        paragraphs: [
          'A small stationery company tests a new envelope. Twenty are put through a specified handling routine, folding, stuffing, sealing, a drop onto a desk, and then inspected. Not one seam fails. The marketing draft arrives the next morning: our seams cannot fail. Twenty out of twenty is a clean sheet, after all, and zero divided by twenty is zero.',
          'The arithmetic is right and the sentence is not. The inspection found no failures in twenty envelopes under one procedure with one way of checking. That is the entire content of the result. A seam that split in a way the inspector was not looking for would not be in the count. A seam that would split in a damp mailbag was never given the chance. The words tested and zero both sound like completeness. Neither one says how much opportunity the test actually gave a failure to show itself.',
        ],
      },
      {
        title: 'A nonzero risk can produce a zero count',
        paragraphs: [
          'Flip a coin that lands heads nine times out of ten. Flip it twenty times. Would you be astonished to see twenty heads in a row? You should not be. It happens about one time in eight. Now imagine someone who saw only that run of twenty heads announcing that the coin can never land tails. They have seen a perfectly ordinary outcome of a coin that lands tails ten percent of the time.',
          'Run the same arithmetic on the envelopes as a toy model. Suppose each envelope independently has a 10 percent chance of failing this procedure, so a 90 percent chance of passing. The chance that all twenty pass is 0.9 multiplied by itself twenty times, which comes to about 12.2 percent. Roughly one test in eight would come back spotless even though the seam fails one time in ten. This is an illustration, not an estimate of the real seams; the 10 percent was chosen to make the point. The point is that a zero count is fully compatible with a real, nonzero failure rate. It rules out the seam being terrible. It does not rule out the seam being imperfect.',
        ],
      },
      {
        title: 'Exposure has to be informative',
        paragraphs: [
          'What makes a clean result worth more? More genuine opportunities for failure, each independent of the others, with a detection method that would actually catch the failures you care about. A hundred distinct envelopes through the same routine tells you more than twenty. Two hundred tells you more again, and the range of failure rates still compatible with a clean sheet narrows as the count grows.',
          'Two things do not count as more exposure. Inspecting the same untouched envelope ten times is one opportunity examined ten times, not ten opportunities. And a dry indoor procedure says little about wet transport unless someone has shown why the two should behave alike. So report what was tested and name what was not: twenty envelopes, this routine, dry conditions, visual inspection. If you want a formal statement of how high the failure rate could still be, that requires a proper statistical method with stated assumptions. Writing zero and calling it certainty is not that method.',
        ],
      },
      {
        title: 'Where clean results mislead',
        paragraphs: [
          'The pattern appears far beyond envelopes. A new app launches perfectly fifty times on the developer\'s phone. A bridge inspection finds no cracks. A medicine shows no side effects in a trial of thirty people. Each is good news and each is bounded by its exposure: one phone, one inspection method, thirty people. The rarer the failure, the larger the clean sample needed before silence means much.',
          'Two habits. When you hear no failures, immediately ask: in how many independent tries, under what conditions, detected how? And when you report a clean result yourself, write the exposure into the same sentence as the zero, so nobody can quote one without the other. The useful next question is never whether to celebrate. It is which exposure would reveal the kind of failure you are actually worried about.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Observed result versus unlimited claim',
      alt: 'Twenty inspected envelopes had zero observed seam failures; all future handling remains a broader claim.',
      caption: 'Read the left side as a complete, honest report and the right side as the sentence marketing wanted to write. The gap between them is every condition that was never tested. Under the 10 percent toy model, the left side happens one time in eight even when seams do fail. Fictional inspection.',
      items: [
        { label: 'What was observed', detail: '0 failed seams in 20 specified handling trials.' },
        { label: 'What is not established', detail: 'Zero possible failures in every future handling condition.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen', 'Optional calculator with powers'],
      steps: [
        'Draw twenty tick marks in a row and label the row: zero seam failures detected, specified handling, dry conditions, visual check. Writing the conditions beside the ticks is what keeps the zero honest.',
        'Write the toy passing probability, 0.9, and if your calculator can do powers, compute 0.9 to the twentieth. You should get about 0.122. Say in words what that number is: the chance of a spotless twenty even when one envelope in ten would fail.',
        'Rewrite the marketing sentence so it reports the exposure and names one condition that was excluded, wet transport say, without ever claiming the true risk is zero. The honest version is longer and it is the only one that would survive the first damp mailbag.',
      ],
      notice: 'Your claim is still useful, twenty clean trials is real evidence against a terrible seam, and it stays inside the conditions that produced it. The zero has stopped pretending to be a guarantee.',
      troubleshooting: 'If the power calculation is awkward, use the supplied 12.2 percent and explain in one sentence which event it describes. The number matters less than understanding that an ordinary coin can run twenty heads.',
    },
    recall: {
      prompt: 'A new app starts successfully every time during a short pilot on one phone. What is still unknown before a broad release?',
      hint: 'Separate the attempts you observed from the devices and conditions you did not.',
      answer: 'Almost everything that matters for a broad release. The pilot shows the app starts reliably on that phone, with that storage state, that operating system version, over that short period. It is the twenty envelopes in dry conditions. It says nothing about older phones, nearly full storage, other OS versions, or poor connectivity, because none of those had any opportunity to cause a failure. The attempts may not even be independent if the phone cached something after the first launch. And if a startup failure would have looked like a slow start rather than a crash, the pilot may not have been watching for it. Report the clean pilot with its exposure, then ask which untested condition is most likely to break startup and test that.',
    },
    quiz: {
      question: 'Which zero-failure result provides more relevant evidence about many different envelopes under the same handling procedure?',
      options: [
        'Inspecting one untouched envelope repeatedly without recreating the handling',
        'Counting only envelopes whose seams looked promising before the test',
        'Testing a suitably selected set of distinct envelopes with consistent detection',
      ],
      correctIndex: 2,
      explanation: 'Distinct envelopes each given the full handling are separate opportunities for failure, and consistent detection means a failure would actually be counted; that is what lets a clean result narrow the plausible risk. Re-inspecting one untouched envelope is one opportunity looked at many times, like reading the same coin flip repeatedly. Pre-selecting promising seams tests the inspector\'s eye, not the envelope, and guarantees a flattering result.',
    },
    takeaway: 'Zero failures is a statement about the opportunities you gave failure to appear; report the opportunities with the zero, and never let the zero travel alone.',
    sourceNote: 'OpenIntro provides probability and sampling background. The inspection and 10% model are fictional; no real product risk is estimated.',
  },
  {
    id: 'thinking-015',
    title: 'Read the slow requests behind the average',
    outcome: 'See how a perfectly correct average can hide the people having the worst experience, and know which other numbers to ask for.',
    scene: 'An online photo gallery serves ninety small previews quickly and ten requests slowly.',
    sections: [
      {
        title: 'An average below a second',
        paragraphs: [
          'A photo gallery\'s status page proudly reports an average response time under one second. Behind that figure sit exactly 100 requests from the last hour, and we can see all of them. Ninety came back in 0.2 seconds each. Ten took 8 seconds each. Add it up: 90 times 0.2 is 18 seconds, 10 times 8 is 80 seconds, 98 seconds in total. Divide by 100 and the mean is 0.98 seconds. The status page is telling the truth.',
          'It is also telling you almost nothing about the ten people who sat through an eight-second wait, long enough to assume the site is broken and close the tab. The average is accurate and the slow experiences are invisible inside it. An honest number can still be the wrong number for the question someone is asking, and the question here is not how fast is the gallery on the whole but how bad is it for the people it is bad for.',
        ],
      },
      {
        title: 'Locate a request in the ordered list',
        paragraphs: [
          'A room has ten people in it. Nine earn an ordinary salary and one is a billionaire. The average income in that room is enormous and describes nobody. Line the ten up from poorest to richest instead, and the person standing in the middle gives you a far more honest picture of what a typical person there earns. That middle value is the median, and ordering is the trick that makes it work.',
          'Line up the gallery\'s 100 requests from quickest to slowest. Positions 1 to 90 are the 0.2-second requests; positions 91 to 100 are the 8-second ones. The median, the middle of the line, is 0.2 seconds: most visitors had a snappy experience. Now walk to position 95 and read the duration standing there: 8 seconds. That is the 95th percentile, under the nearest-rank definition, which simply means the value at position 95 out of 100. A percentile is a position in the line, not a ceiling; in another hour the requests beyond position 95 might be far slower still. Mean, median, and a high percentile are three different views of one set of numbers, and the slow minority only shows up in the third.',
        ],
      },
      {
        title: 'Ask which requests disappeared',
        paragraphs: [
          'This example is generous: every request completed and all 100 are in the table. Real reports are rarely so complete. A request that timed out after 30 seconds may be logged as a failure and dropped from the timing data, or recorded as exactly 30 seconds, or not recorded at all. A gallery can look fast partly because its slowest requests were quietly excluded from the list before anyone averaged it.',
          'Check what kind of requests are mixed in, too. A thumbnail and a full-resolution download are different jobs, and averaging them together blurs both. Check the window: last hour, last day, busiest hour? A service target worth having says which requests it covers and which part of the line it is measuring: 95 percent of thumbnail requests under half a second, for example. A target stated only as a mean leaves the eight-second group with nowhere to appear, even while the arithmetic remains flawless.',
        ],
      },
      {
        title: 'Picking the summary for the question',
        paragraphs: [
          'None of the three numbers is the right one in general. The mean is the right summary if you are paying for total server time, because total time is literally what it measures. The median is right if you want the typical visitor\'s experience. A high percentile is right if your worry is the minority who wait longest, which is usually the group that complains, leaves, and tells their friends.',
          'Two habits. Whenever someone gives you an average, ask for the median and a high percentile alongside it; if they are far apart, the distribution has a long tail and the average is hiding it. And whenever you set or read a performance target, ask which requests were excluded before the numbers were computed. A fast average built on the requests that finished is a story about the survivors.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Three summaries of the same requests',
      alt: 'Median 0.2 seconds, mean 0.98 seconds, and nearest-rank 95th percentile eight seconds.',
      caption: 'Look at how far apart the three bars are for a single set of 100 requests. The gap between the short median and the tall 95th percentile is the slow minority, and the mean sits between them describing no actual request. Invented complete sample.',
      unit: 'seconds per request',
      items: [
        { label: 'Median', detail: 'The middle requests are in the quick group.', value: 0.2 },
        { label: 'Mean', detail: 'Total request duration divided by 100.', value: 0.98 },
        { label: '95th percentile', detail: 'Nearest-rank position 95 is in the slow group.', value: 8 },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen', 'Calculator'],
      steps: [
        'Write the two groups, 90 requests at 0.2 seconds and 10 at 8 seconds, and compute the total: 18 plus 80 is 98 seconds. Divide by 100 for the mean, 0.98. Doing the arithmetic yourself is what convinces you the status page is not lying.',
        'Draw a line of 100 positions, mark 1 to 90 as quick and 91 to 100 as slow, and put your finger on position 95. Read the value there: 8 seconds. The physical act of walking the line is the percentile; nothing more mysterious is happening.',
        'Draft a two-sentence status summary that gives the mean and the 95th percentile together, states that ten requests took 8 seconds, and says whether any timed-out requests were excluded. Then compare it with under one second and notice which version a frustrated visitor would recognise.',
      ],
      notice: 'Your summary no longer invites anyone to believe the mean describes every visitor. The slow group has a number of its own, and the exclusions are stated rather than assumed.',
      troubleshooting: 'If you got a mean of 4.1, you averaged 0.2 and 8 as if there were one of each. There are ninety of one and ten of the other, so weight them: total duration first, then divide by the count.',
    },
    recall: {
      prompt: 'A courier advertises an average of two days per delivery, but some parcels take a week. What should a customer with a firm deadline ask?',
      hint: 'Ask about the shape of the delivery times and about what was left out, not the average.',
      answer: 'The average is the billionaire in the room: a two-day mean is compatible with most parcels arriving next day and a stubborn minority taking seven. A customer with a deadline is asking a percentile question, so ask it directly: what share of parcels arrive within the number of days I actually have? Then ask about the tail, how long the slowest ten percent take, and about exclusions: are lost or returned parcels counted in that two-day figure, or dropped from it? A courier that quotes only the mean is describing total transit time across all parcels, which is useful to the courier\'s accountant and nearly useless to someone who needs one specific box by Friday.',
    },
    quiz: {
      question: 'Two services report the same mean response time, but one omits timed-out requests from its figures. What should happen before comparing their speed claims?',
      options: [
        'Align the request populations and the timeout treatment, then inspect the slow outcomes',
        'Treat the equal means as evidence of equal visitor experience',
        'Compare only the fastest successful requests from each service',
      ],
      correctIndex: 0,
      explanation: 'One service has quietly removed its worst requests before averaging, so its mean is a story about survivors and the two figures are not measuring the same thing; the populations have to match before any comparison means anything. Equal means can sit on top of wildly different distributions, as the gallery shows. Comparing only the fastest requests throws away the slow tail entirely, which is the part a visitor actually suffers.',
    },
    takeaway: 'An average answers how much in total; when the question is how bad for whom, line the numbers up and read the far end of the line, after checking who was left out of it.',
    sourceNote: 'OpenIntro and the inherited reliability chapter provide background. Gallery counts and timings are fictional; the percentile definition is stated explicitly.',
  },
  {
    id: 'thinking-016',
    title: 'An interval for an average is not a deadline promise',
    outcome: 'Tell apart a range that describes how well the average is known from a range that describes where your one particular case might land.',
    scene: 'A print shop estimates average order completion while a customer needs one particular order.',
    sections: [
      {
        title: 'The customer is waiting for one order',
        paragraphs: [
          'A print shop has studied its records and reports that comparable orders take an average of 40 minutes. Being careful, it adds a 95 percent confidence interval for that average: 38 to 42 minutes. A customer reads this on the wall while handing over a job and does the natural thing. Worst case 42 minutes, they think, I can make my train.',
          'They have just swapped one quantity for another without noticing. The interval on the wall is about the average: it says the shop has pinned down the typical duration to within a couple of minutes either side of 40. It says nothing about how far any single order can wander from that typical value. A shop could know its average to the second and still have individual jobs that take 20 minutes or 60, depending on the printer queue and whether the toner runs out. Knowing the centre very precisely does not shrink the spread around it.',
        ],
      },
      {
        title: 'Prediction includes another source of variation',
        paragraphs: [
          'Think about the height of adult men in a country. From a large survey you might know the average to within a few millimetres. That does not mean the next man through the door will be within a few millimetres of average; he could easily be fifteen centimetres taller or shorter. Two different uncertainties are in play. How sure are we about the average? And how much does one person differ from it? Shrinking the first with more data does nothing to the second.',
          'An interval built for a single new order is called a prediction interval. It has to carry both uncertainties: the small one about where the average sits, plus the large one about how far an individual order strays from it. Suppose the shop\'s model gives a 95 percent prediction interval of 20 to 60 minutes for this order type. Those bounds are invented to illustrate the shape, not computed from real data. Notice that both intervals sit centred on 40 and that the prediction interval is ten times wider. Same centre, same 95 percent label, different question.',
        ],
      },
      {
        title: 'Read coverage and conditions together',
        paragraphs: [
          'Suppose the customer needs the order within 50 minutes. The 38-to-42 interval is irrelevant to that decision; it was never about one order. The 20-to-60 prediction interval is the right kind of object, and it reaches past 50, so the deadline is at risk. But resist reading the endpoints as a precise probability. The interval does not say there is some specific chance of finishing by 50; its two numbers mark a range that the procedure covers 95 percent of the time, under the model\'s assumptions, across many uses.',
          'That phrase, across many uses, is the honest meaning of 95 percent. It is a property of the method when repeated, not a guarantee stapled to this one job. And the whole thing rests on the order being genuinely comparable: same type of job, similar queue conditions, a model that still fits. So the reading order is fixed. First decide which quantity you actually need, the average or the next case. Then check whether the interval in front of you was built for that quantity. Only then read the numbers.',
        ],
      },
      {
        title: 'Why the swap is so tempting',
        paragraphs: [
          'Confidence intervals for a mean are everywhere, because they are what most reports compute. Prediction intervals are rarer, because they are wider and less flattering. So the narrow interval is the one on the wall, and the customer\'s question is the one it does not answer. The 95 percent label on both makes them look interchangeable when they are not even about the same thing.',
          'Two habits. When you see an interval, ask what it is an interval for: the average, or a new observation? If the report does not say, assume it is the average, because that is the default. And when your decision hinges on one case, your order, your parcel, your next battery charge, do not accept a mean interval as an answer; ask for the one that includes individual variation, and expect it to be uncomfortably wide.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Two intervals, two targets',
      alt: 'Mean duration interval 38 to 42 minutes; new-order prediction interval 20 to 60 minutes.',
      caption: 'Both intervals share a centre of 40 and a 95 percent label, so start by reading the second half of each line to see what each one is actually about. One describes the average; the other describes a single future order and is ten times wider for that reason. Illustrative bounds.',
      items: [
        { label: 'Mean: 38 to 42 minutes', detail: 'Uncertainty about the average comparable-order duration.' },
        { label: 'New order: 20 to 60 minutes', detail: 'Also includes variation of an individual future order.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write two questions on separate lines: what is the average order duration, and when might my next order finish? Having them on different lines is the habit; the customer\'s mistake was letting them merge.',
        'Match each question to the supplied interval and underline the quantity each interval describes, average or one order. Then write in one sentence why the second interval is so much wider: it carries an extra source of variation.',
        'Write why neither interval, read on its own, gives you an exact probability of finishing within 50 minutes. The mean interval is about the wrong quantity; the prediction interval marks a range, not a probability at a specific cutoff.',
      ],
      notice: 'Your deadline question is now firmly attached to a single future order rather than to the shop\'s long-run average. That is the whole correction.',
      troubleshooting: 'If the two intervals still feel interchangeable, ask: if I knew the true average exactly, would orders still vary? Yes, they would. That remaining variation is what the prediction interval contains and the mean interval does not.',
    },
    recall: {
      prompt: 'A battery study estimates the mean runtime of a phone model very precisely, to within a few minutes. Does that tell you how long your next charge will last?',
      hint: 'A single charge can wander well away from an average that is known to the minute.',
      answer: 'No. The study has nailed down the centre, the typical runtime across many charges and many phones. Your next charge is one draw from around that centre, and it carries its own variation: screen brightness, background apps, battery age, signal strength. That is the height of the next man through the door, not the national average. A prediction for one charge needs the charge-to-charge spread under conditions like yours, and it will come out as a wide range even though the mean is known precisely. A tight confidence interval for the average is real knowledge; it is just knowledge about a different quantity from the one you asked about.',
    },
    quiz: {
      question: 'A report gives an interval for the mean weight of parcels, but a sorting machine must cope with the very next parcel. Which interval matches that need?',
      options: [
        'A narrower confidence interval for the same mean',
        'A prediction interval for a new comparable parcel',
        'The interval around the average of all previous daily means',
      ],
      correctIndex: 1,
      explanation: 'The machine is about to meet one parcel, so it needs the range an individual parcel can occupy, which is what a prediction interval provides. Tightening the mean interval tells you the average more exactly and nothing about how heavy a single parcel might be. Averaging daily averages moves even further away from the individual case.',
    },
    takeaway: 'Before reading the numbers, ask whether the interval is about the average or about the next case; a precisely known centre never shrinks the spread around it.',
    sourceNote: 'The NIST prediction-interval page was checked for this distinction and coverage interpretation. Print-shop bounds are deliberately illustrative.',
  },
  {
    id: 'thinking-017',
    title: 'Read a p-value in the direction it was calculated',
    outcome: 'Say what a p-value actually measures, in plain words, without turning it into the probability that a claim is true or that a result matters.',
    scene: 'A fictional seedling study compares growth under two light schedules.',
    sections: [
      {
        title: 'What does the small number say?',
        paragraphs: [
          'A seedling study compares two light schedules. After a few weeks the seedlings under the new schedule are on average 0.4 centimetres taller. The report attaches a p-value of 0.03. A reader looks at that and says: so there is a 97 percent chance the new schedule works. It is the most natural sentence in the world. It runs the calculation backwards.',
          'The p-value starts from an assumption, not from the data. It assumes a particular model in which the schedules make no difference at all. It also assumes the test\'s other conditions about how measurements behave. Then it asks a question. If that model were true, how often would we see a difference this big or bigger, purely by the luck of which seedlings ended up in which group? The answer here is 3 percent. That is a statement about how surprising the data would be under a world of no difference. It is not a statement about how likely that world is.',
        ],
      },
      {
        title: 'A conditional calculation is not a verdict',
        paragraphs: [
          'Consider a courtroom. A forensic expert testifies that if the defendant were innocent, there would be only a 3 percent chance of finding this evidence. Jurors routinely hear that as a 97 percent chance of guilt. It is not. The probability of the evidence given innocence and the probability of innocence given the evidence are different numbers. Converting one to the other requires knowing how many innocent people there were to begin with. The p-value is the expert\'s sentence, not the juror\'s conclusion.',
          'So 0.03 means the no-difference model assigns 3 percent probability to a result at least this extreme by the test\'s rule. It is not the probability the model is true. It is not the chance that luck produced the result. And it has not compared the no-difference story against every rival. A crooked ruler, uneven watering, or seedlings that were not assigned at random would each explain a difference just as well. The p-value never looked at any of them. Interpreting it needs the design, the test, and the assumptions. A threshold such as 0.05 puts a label on the number. It does not make those other questions go away.',
        ],
      },
      {
        title: 'Keep size and usefulness visible',
        paragraphs: [
          'Now step back from the p-value to the thing the grower actually cares about. The seedlings grew 0.4 centimetres more. The grower has said they would only bother changing the schedule for a gain near 3 centimetres, because switching costs money and effort. A 0.4-centimetre gain with p of 0.03 is a real but tiny difference measured fairly precisely. It is not a 3-centimetre gain. No p-value can turn it into one.',
          'The size of the effect and the p-value are separate quantities. Both belong in the report, the size with an uncertainty interval around it. A small p-value tells you the data are hard to explain by chance alone under the model. It says nothing about whether the difference is big enough to matter. The reverse holds too. A large p-value does not prove the schedules are equivalent, because a small study can leave a worthwhile gain unresolved rather than ruled out. Before any practical claim, ask three things. How large is the estimated effect? How uncertain is it? Does the experiment resemble the real growing conditions?',
        ],
      },
      {
        title: 'The two reversals to watch for',
        paragraphs: [
          'The first reversal is the one the reader made: turning a probability of data given a model into a probability of a claim given the data. It is tempting because the second is what everyone wants to know, and the first is what the test provides. The second reversal is treating detectable as the same as important. A tiny effect in a large study can produce a very small p-value. It is still tiny.',
          'Two habits. Whenever you say p, finish the sentence with assuming no difference, the chance of data this extreme is, and see whether your claim still follows. And whenever a p-value appears, go looking for the effect size and its interval right next to it. If they are missing, the report has told you how surprising the data are. It has told you nothing about whether to care.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'The direction of the p-value calculation',
      alt: 'Assume the null model, calculate the test statistic, and compare it with the model distribution.',
      caption: 'Follow the arrows and notice they start from an assumption and end at a probability of data. There is no arrow running backwards from the 0.03 to how likely the assumption is; that reverse step is the one the reader invented. Fictional seedling example.',
      items: [
        { label: 'Assume the null model', detail: 'No mean difference, plus the specified test assumptions.' },
        { label: 'Calculate the statistic', detail: 'Summarize the observed contrast with the chosen test.' },
        { label: 'Compare under the model', detail: 'p = 0.03 for statistics at least as extreme by that rule.' },
      ],
      arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the result as two separate quantities on two separate lines: an estimated difference of 0.4 centimetres, and a p-value of 0.03. Keeping them apart on the page is the first defence against blending them.',
        'Complete this sentence in your own words: if the two schedules made no difference and the test\'s assumptions held, then a difference this large or larger would appear about this often. Read it back and confirm that it says nothing about how likely no difference is.',
        'Cross out the 97 percent claim and replace it with three requests: the uncertainty interval around 0.4, the design details including how seedlings were assigned, and the grower\'s practical threshold of 3 centimetres. Then write one sentence comparing 0.4 with 3.',
      ],
      notice: 'Your page now separates how surprising the data would be under one model from how big the effect is and whether anyone should act on it. Three different questions, three different lines.',
      troubleshooting: 'If you catch yourself writing the probability that the null is true, stop and reverse the sentence so it begins with assuming the null is true. The p-value only ever runs in that direction.',
    },
    recall: {
      prompt: 'A study comparing two interface designs reports p = 0.20. Why does that fail to establish that the designs are equivalent?',
      hint: 'Ask which differences the data still leave open, not which hypothesis won.',
      answer: 'A p-value of 0.20 says that under a no-difference model, data like these are not especially surprising. That is compatible with the designs being equivalent, and it is equally compatible with a real difference that the study was too small to pin down. Not finding something is not the same as showing it is absent. To claim equivalence you first have to say what difference would be too small to matter, then show that the data rule out anything bigger than that, which is a separate analysis with its own interval. A large p-value on its own leaves worthwhile differences unresolved, not excluded.',
    },
    quiz: {
      question: 'A service reports a tiny speed gain with a very small p-value. What best addresses whether customers should care?',
      options: [
        'Convert one minus p into the probability that customers benefit',
        'Treat statistical detectability as evidence that the minimum useful gain was reached',
        'Inspect the effect size, its uncertainty, the design, and the customer-relevant threshold',
      ],
      correctIndex: 2,
      explanation: 'Whether customers care depends on how big the gain is compared with what they would notice, and the p-value never measured that; only the effect size, its interval, and a stated threshold can. One minus p is the courtroom reversal, converting surprise under a model into a probability of benefit. Detectable and useful are different properties: a large enough study can detect a gain nobody would ever feel.',
    },
    takeaway: 'A p-value runs from an assumed model to the data and never back again; read it in that direction, then look elsewhere for size and importance.',
    sourceNote: 'The inherited ASA statement sets the interpretation limits. Seedling results are fictional; no experiment, fitted interval, or efficacy claim is asserted.',
  },
  {
    id: 'thinking-018',
    title: 'Knowing the average does not stop the variation',
    outcome: 'Separate two different problems that get mixed together: not yet knowing what the typical outcome is, and the outcomes genuinely differing from one another.',
    scene: 'A ferry passenger studies boarding delays that vary with the arrival of connecting buses.',
    sections: [
      {
        title: 'Two different unknowns at the ferry',
        paragraphs: [
          'You commute by ferry and want to know how long boarding takes once you reach the terminal. You start keeping notes. Some days it is twenty minutes; some days it is forty, because three connecting buses arrive at once and the ramp jams. After a few weeks a thought arrives: once I have enough data, I will know how long it takes.',
          'Half of that thought is right. There are two things you do not know, and they are different kinds of not knowing. The first is that you have not yet pinned down the typical duration; more good observations will fix that. The second is that boarding genuinely varies from one sailing to the next, because the buses arrive in clumps. No amount of note-taking will make the buses arrive evenly. Mix the two up and you end up with a false promise. Once the spreadsheet is big enough, every future boarding will sit close to the average. It will not. Perfect knowledge of a variable process still describes a variable process.',
        ],
      },
      {
        title: 'An average can sit between real outcomes',
        paragraphs: [
          'A weather station records a town\'s temperature every day for a century. Its estimate of the average July temperature is superb, accurate to a fraction of a degree. July days in that town still range from cool and grey to blazing. A hundred years of data has not narrowed that range by a single degree. The data told you the centre with great confidence. The days kept doing what days do.',
          'Take six invented boarding times: 20, 20, 30, 30, 40, and 40 minutes. They sum to 180, so the mean is 30. Now look at the individual sailings against that mean. Two were ten minutes quicker, two were ten minutes slower, two were spot on. Learning that the mean is 30 changes none of those six facts. Even if you somehow knew the true long-run average exactly, a process with real sailing-to-sailing variation would keep producing twenties and forties. And be careful with the extremes. The values 20 and 40 are the smallest and largest of these six observations. They are not a promise that the next sailing will land between them.',
        ],
      },
      {
        title: 'Choose the question for the next measurement',
        paragraphs: [
          'Because the two unknowns are different, they call for different actions. If your goal is to know the typical duration better, gather more relevant observations. Define boarding the same way every time, and watch for sailings that are not independent, such as a whole week disrupted by one broken ramp. If your goal is to make boarding less variable, data collection will not do it. You have to change the process that creates the clumps, perhaps by staggering the bus arrivals or opening a second ramp when three buses show up together.',
          'There is a trap in the middle. If the timetable changed halfway through your note-taking, you now have two different processes blended into one average. That average may describe neither of them well. A precise number for a mixture is precisely about nothing current. So before the next step, say which problem you are attacking, knowledge or variation or both. Name the mechanism by which the step would help. More rows in a spreadsheet is a mechanism for the first problem only.',
        ],
      },
      {
        title: 'The promise more data cannot keep',
        paragraphs: [
          'The confusion is understandable because more data really does shrink something: the uncertainty about the centre. Watching that number tighten feels like watching the whole problem shrink. But the spread of individual outcomes is a fact about the world, not a fact about your ignorance, and the world does not change because you measured it carefully.',
          'Two habits. When someone promises that more measurement will make outcomes predictable, ask which of the two unknowns they mean; if they mean the second, ask what in the process would actually change. And when you report an average you have estimated well, report the spread beside it, so nobody mistakes a well-known centre for a narrow range.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Learning the process versus changing it',
      alt: 'Measuring more comparable departures can clarify the average; changing arrival handling addresses a source of variation.',
      caption: 'Read the two columns as two different jobs. The left one is done with a notebook and patience. The right one needs someone to change how buses and ramps actually work. The six invented durations average 30 minutes, and the 20-to-40 span is what was observed, not what is guaranteed.',
      items: [
        { label: 'Improve the estimate', detail: 'Record relevant departures to learn typical boarding duration.' },
        { label: 'Reduce process variation', detail: 'Investigate uneven arrivals or handling that change individual durations.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the six durations, 20, 20, 30, 30, 40, 40, add them to get 180, and divide by six for a mean of 30. Do the arithmetic yourself so the mean feels like a summary you made, not a fact you were handed.',
        'Beside each duration, write how far it sits from 30: minus ten, zero, or plus ten. Then write one sentence: knowing the mean is 30 changed none of these six numbers. That sentence is the lesson.',
        'Write two separate proposals under two separate headings. Under knowing the average better: what you would record and how you would keep definitions consistent. Under reducing the spread: what about the buses or the ramp you would investigate. Check that the second proposal is not just more measuring.',
      ],
      notice: 'A correct, well-estimated average sits on your page alongside individual sailings ten minutes either side of it, and you have two different plans for two different problems.',
      troubleshooting: 'If your plan for reducing variation says collect more data, ask how an extra row in a notebook would change the way buses arrive at the ramp. It would not. Find the mechanism in the process, not in the spreadsheet.',
    },
    recall: {
      prompt: 'An office printer\'s average job time is now estimated very precisely, but paper jams still happen at random. What has improved, and what has not?',
      hint: 'Knowing a process well and the process behaving well are two different things.',
      answer: 'The estimate has improved: you know the typical job duration to within a few seconds, and that is real knowledge, like the weather station\'s century of Julys. The variation has not budged. Jams are part of the process, they arrive unpredictably, and each one throws an individual job far from the well-known average. Any prediction for the next specific job still has to carry the jam risk, so it will be a wide range around a precise centre. If you want the range to narrow, the step is to fix whatever causes the jams, worn rollers or damp paper, not to time more jobs. Measurement sharpened the knowledge; only a change to the printer can sharpen the behaviour.',
    },
    quiz: {
      question: 'A shop gathers many more delivery records without changing anything about its operations. Which claim is most defensible?',
      options: [
        'Relevant records may improve the estimate while individual delivery variation remains',
        'The larger sample forces future deliveries to cluster around the old mean',
        'The larger sample establishes that seasonal process changes are absent',
      ],
      correctIndex: 0,
      explanation: 'More good records tighten the shop\'s knowledge of the typical delivery time, and that is all they do; the deliveries themselves keep varying because nothing in the operation changed. Data cannot force future outcomes toward a mean, any more than a century of readings can make July days alike. And a bigger pile of records says nothing about whether seasons changed the process; if they did, the average is now a blend of regimes and describes none of them.',
    },
    takeaway: 'More data narrows how well you know the centre; only a change to the process narrows how far individual outcomes stray from it.',
    sourceNote: 'NIST distinguishes uncertainty in a mean from new-observation variation. The ferry sample is invented and supplies no formal forecast interval.',
  },
  {
    id: 'thinking-019',
    title: 'Separate the pattern you found from the test you planned',
    outcome: 'Be honest about the difference between stumbling on a pattern while searching and predicting it in advance, and turn the first into a fair test rather than a fake confirmation.',
    scene: 'An amateur astronomy group searches many star and night-window comparisons for a brightness pattern.',
    sections: [
      {
        title: 'The striking result had many chances to appear',
        paragraphs: [
          'An amateur astronomy group has brightness estimates for thirty stars, each measured in four different windows of the night. That is 120 star-and-window combinations. They look through all of them and one stands out: a particular star, in a particular window, shows a brightness change with a p-value of 0.04. The newsletter goes out: our prediction has been confirmed.',
          'But nobody predicted that star in that window. They looked at 120 possibilities and picked the most striking. There is nothing wrong with looking; that is how discoveries start. The problem is the word confirmed. It describes a question asked before the data were seen and then answered by the data. What actually happened is that the data were searched for anything interesting, and then the most interesting thing was written up as if it had been the only question all along.',
        ],
      },
      {
        title: 'Selection changes the evidential story',
        paragraphs: [
          'Fire a shotgun at the side of a barn, then walk over and paint a target around the tightest cluster of holes. Bullseye. Nobody is fooled, because they watched you paint the target afterward. The astronomy group painted its target afterward too, but the painting happened in a spreadsheet where nobody could see it, so the bullseye looks earned.',
          'Here is the mechanism. Even if nothing in the sky changed at all, 120 comparisons of noisy measurements will throw up a few that look remarkable purely by chance. One in twenty is the rough rate at which a no-change world produces a p below 0.05, so about six of the 120 would be expected to look striking for no reason. The standard p-value for the one you picked knows nothing about the 119 you discarded. And the comparisons are not even independent; they share nights, weather, and instruments, so you cannot just multiply your way to a corrected answer either. What you can do is keep the record: which stars, which windows, which processing choices were tried. That record is what stops the best-looking result from quietly becoming the whole story.',
        ],
      },
      {
        title: 'Let discovery produce a new question',
        paragraphs: [
          'The discovery is not worthless. It is a hypothesis, and a hypothesis is exactly what a search is supposed to produce. The honest next step is to write it down in a form that can be tested: this star, compared against these reference stars, in this window, measured by this procedure, is predicted to show this change in new observations. Everything is fixed before the next look. Then go and look, and check instrument and processing explanations while you are at it.',
          'If no new data can be gathered, the result can still be reported, as an exploratory finding, using methods that account for the search that produced it. What it cannot be is relabelled. Writing hypothesis above the same chart does not turn a painted target into a predicted one. Honest labelling tells the next reader which part of the work generated the idea and which later evidence could still knock it down.',
        ],
      },
      {
        title: 'Why the two get blurred',
        paragraphs: [
          'Nobody sets out to cheat. The search is genuinely exciting, the pattern is genuinely visible, and by the time the write-up happens the 119 dull comparisons have faded from memory. The report then describes what was found rather than how it was found, and the how is where all the evidential weight lives.',
          'Two habits protect you. Keep a log of what you looked at before you knew what you would find, so the denominator of the search survives. And ask of any result: was this question written down before the data were seen? If yes, a p-value means what it says. If no, you have a lead worth chasing with fresh data, and nothing more yet.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'A search becomes a follow-up plan',
      alt: 'Inspect 120 comparisons, select a star-window pattern, specify a follow-up, then collect suitable new observations.',
      caption: 'Find the boundary between the second and third boxes. Everything before it is searching and painting targets; everything after it is a question fixed in advance and then tested. The newsletter skipped straight from box two to the word confirmed. Fictional workflow; spacing is not time.',
      items: [
        { label: 'Search 120 comparisons', detail: '30 stars x 4 night windows.' },
        { label: 'Select one pattern', detail: 'Chosen after inspecting the results.' },
        { label: 'Specify a follow-up', detail: 'Fix the star, window, measurement, and comparison.' },
        { label: 'Check suitable new data', detail: 'Evaluate the stated question without hiding new searches.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write an exploration log: thirty stars, four windows, and any processing choices you imagine trying, such as two ways of correcting for cloud. Multiply them out and write the total number of looks. That number is the denominator the newsletter forgot.',
        'Write the selected star-and-window result and label it in capital letters: exploratory, chosen after inspection. Then write one sentence on why its p-value of 0.04 does not mean what it would mean for a single pre-stated question.',
        'Draft the follow-up as a fixed prediction: which star, which comparison stars, which window, which measurement procedure, what change is expected. Add one instrument or processing explanation the follow-up must also rule out. Check that nothing in your prediction is left open to be chosen later.',
      ],
      notice: 'The discovery and the test now sit at different stages of your plan, with a visible line between them. Anyone reading your log can see where the target was painted and where the shot was called.',
      troubleshooting: 'If your follow-up would count as a success for any star or any window that happens to look good, you have left the shotgun loaded. Narrow it until exactly one outcome counts before you look at any new data.',
    },
    recall: {
      prompt: 'You try a dozen image filters on a set of photos and notice that one seems to improve viewer ratings, but only among one age group. How should you present that?',
      hint: 'Tell the reader how the filter and the age group came to be the ones you are talking about.',
      answer: 'Say exactly how it was found: twelve filters, several age groups, and this is the combination that looked best after looking at all of them. That is a painted target, and the honest label is exploratory. The pattern might be real; interesting leads often come from exactly this kind of search. But its p-value does not carry the weight it would for a single pre-stated comparison, because dozens of filter-and-group pairs had a chance to look good by luck. The way forward is a fixed follow-up: this filter, this age group, new viewers, new ratings, written down before anyone looks. Presenting the chosen subgroup as if you had predicted it in advance is the shotgun with the paint still wet.',
    },
    quiz: {
      question: 'A researcher keeps adjusting the time window of an analysis until the result looks convincing. What is the best next report?',
      options: [
        'Report only the final window, because it is the most informative-looking one',
        'Disclose the window search and distinguish the exploratory result from confirmation',
        'Call the final window preplanned, because it is now written in the report',
      ],
      correctIndex: 1,
      explanation: 'Every window tried is part of the denominator, and hiding the others turns a search into a fake prediction; disclosing them lets a reader weigh the result for what it is and plan a fair follow-up. Reporting only the winning window is painting the target after the shot. Writing a choice down after inspecting the data does not move it backward in time; preplanned means chosen before you looked.',
    },
    takeaway: 'A pattern you found while searching is a question, not an answer; log the search, fix the prediction, and only then let new data confirm or refuse it.',
    sourceNote: 'The inherited ASA statement supports transparency about analyses and selection. The astronomy search and p-value are fictional, not evidence of a stellar event.',
  },
  {
    id: 'thinking-020',
    title: 'Repeated readings can share the same error',
    outcome: 'Understand why an instrument that gives the same answer every time can still be giving the wrong answer every time, and what kind of check would reveal it.',
    scene: 'A parcel scale repeatedly overstates a reference object because of a fixed offset.',
    sections: [
      {
        title: 'A stable answer can still be wrong',
        paragraphs: [
          'For this exercise, a reference weight is agreed to have a true mass of exactly 250 grams. A parcel scale has a hidden fault: it adds 30 grams to everything it weighs, on top of a little ordinary wobble from reading to reading. Put the reference on it five times and it shows 278, 279, 280, 281, and 282 grams. The average is 280. The readings are tightly bunched, never more than two grams apart.',
          'Five tries, five near-identical answers. It feels like the scale has proven itself. In fact it has proven exactly one thing: that it is consistent. Every one of those readings is about 30 grams too high, and the average inherits the whole 30 grams, because the fault is in every reading. Agreement among repeated measurements is evidence of repeatability. It is not, by itself, evidence that the scale is reporting the quantity you actually wanted.',
        ],
      },
      {
        title: 'What repetition can and cannot cancel',
        paragraphs: [
          'Imagine a watch that runs ten minutes fast. Check it a hundred times a day and it is ten minutes fast every time. Its steadiness is admirable and useless for telling the time. The only way to discover the fault is to compare it with something outside itself: a clock you trust. Looking at the watch harder, or more often, will never reveal it.',
          'The scale is the fast watch. Its small wobbles are random: sometimes a gram high, sometimes a gram low, and across the five readings they cancel out around 280. The 30-gram offset is different in kind. It is the same in every reading, so averaging preserves it perfectly; a thousand readings would average to 280 just as faithfully as five did. Repetition cannot see a fault that repetition shares. What can see it is new information from outside: a trusted reference weight, a documented calibration, or a different measurement method with its own independent errors. Writing the average to three decimal places is not new information. A measurement can be precise about the wrong value.',
        ],
      },
      {
        title: 'List the assumptions behind the subtraction',
        paragraphs: [
          'The same trap appears wherever you subtract one reading from another. Take a message that leaves one computer and arrives at another, and you want to know how long it travelled. Subtract the departure timestamp from the arrival timestamp. If the receiving computer\'s clock runs ten milliseconds ahead, your result includes those ten milliseconds along with the real travel time, and repeating the measurement a thousand times gives the same inflated answer a thousand times.',
          'So before trusting a subtraction, ask what else is baked into each number. Where was each timestamp taken? How are the two clocks aligned, and how do you know? What processing delay sits between the event and its stamp? For the scale, do not assume a bag of sugar weighs exactly what the label says; packaging labels are not reference standards. When accuracy matters, use a properly documented reference. The habit that underlies all of this is one question: which errors would appear identically in every repetition, so that repetition could never expose them?',
        ],
      },
      {
        title: 'Precise, accurate, and the gap between them',
        paragraphs: [
          'Two words carry the distinction. Precise means the readings agree with each other. Accurate means they agree with the truth. The scale is precise and inaccurate. A different scale might scatter its readings widely around exactly the right value, accurate and imprecise. The dangerous one is the first, because its consistency looks like trustworthiness.',
          'Two habits. When an instrument gives you steady readings, ask how you know they are centred on the truth rather than merely clustered. And when you want to improve a measurement, be clear which problem you are solving. More repetitions fix scatter. Only an external comparison fixes an offset, and no amount of the first will substitute for the second.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'The average retains the offset',
      alt: 'Stipulated reference mass is 250 grams; the mean of five scale readings is 280 grams.',
      caption: 'Compare the heights of the two bars: the gap between them is the 30-gram offset, and it survived the averaging completely. The five readings only ever wobbled by a gram or two around the right-hand bar; none of them came anywhere near the left one. Invented readings.',
      unit: 'grams',
      items: [
        { label: 'Reference mass', detail: '250 grams is stipulated for this example.', value: 250 },
        { label: 'Mean scale reading', detail: 'Small reading variation does not cancel the fixed offset.', value: 280 },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        'Write the five readings, 278 through 282, add them to 1,400, and divide by five for a mean of 280. Notice how little the readings differ from one another; that closeness is what makes the fault so easy to miss.',
        'Subtract the 250-gram reference from each reading and from the mean. You get 28, 29, 30, 31, 32, and 30. Write under them: the wobble cancels, the offset does not. Seeing the same 30 survive the average is the whole lesson.',
        'Write two or three sentences on why another hundred readings from this unchanged scale would still average 280 and still tell you nothing about the true mass. Then write the one thing that would: a comparison against a trusted reference.',
      ],
      notice: 'The readings on your page vary by a gram or two and their average is still exactly 30 grams wrong. Consistency and correctness have come apart in front of you.',
      troubleshooting: 'If you find yourself describing the readings as accurate because they agree, separate two different distances: how far each reading sits from the sample mean, which is small, and how far the mean sits from the true reference, which is 30 grams. Only the second one is error.',
    },
    recall: {
      prompt: 'A receiving computer\'s clock runs ten milliseconds ahead of the sender\'s. A message actually takes six milliseconds to travel. What does subtracting the timestamps report, and what would repeating the measurement do?',
      hint: 'The receiver stamps arrival with a clock that is already ahead.',
      answer: 'The subtraction reports sixteen milliseconds: six of real travel plus ten of clock offset, because the arrival stamp is ten milliseconds later than it should be. This is the watch that runs fast. Repeat the measurement a thousand times and you will get sixteen, give or take a little network jitter, a thousand times. The offset is in every reading identically, so no amount of repetition can expose it; the average just converges confidently on the wrong number. The only remedy is evidence about the clocks themselves, from outside the measurement: a synchronisation check against a common time source, or a round-trip measurement that cancels the offset by design.',
    },
    quiz: {
      question: 'A thermometer gives nearly identical readings every time. What additional evidence most directly addresses the possibility of a fixed offset?',
      options: [
        'More repetitions under exactly the same unchanged conditions',
        'Displaying the average to more decimal places',
        'A suitable reference comparison with documented uncertainty',
      ],
      correctIndex: 2,
      explanation: 'An offset is in every reading alike, so the only thing that can reveal it is a comparison with something outside the thermometer whose value is trusted, which is what a documented reference provides. More repetitions sharpen your knowledge of the thermometer\'s own consistency and leave the offset untouched, like checking a fast watch more often. Extra decimal places add digits, not information.',
    },
    takeaway: 'Repetition reveals scatter and hides offsets; to know whether steady readings are also true readings, you need a comparison from outside the instrument.',
    sourceNote: 'NIST uncertainty analysis supports considering measurement components beyond sampling. Masses, offsets, and timestamps are fictional; no real instrument calibration is performed.',
  },
  {
    id: 'thinking-021',
    title: 'Check the starting claims as well as the logic',
    outcome: 'Review any argument in two separate passes: does the conclusion follow from the starting claims, and are the starting claims actually true?',
    scene: 'A community exhibition pass is evaluated using an outdated entry rule.',
    sections: [
      {
        title: 'A conclusion that follows from its starting points',
        paragraphs: [
          'At a community exhibition, passes are marked with letters. A visitor reasons out loud: every P pass allows Friday entry; Arun holds a P pass; so Arun can come in on Friday. It is hard to argue with. If the first two statements are true, and the words mean the same thing throughout, the third one cannot be false. The first two are the premises, the starting claims. The third is the conclusion.',
          'That tight connection is what logicians call validity. A valid argument is one where true premises force a true conclusion. It is a property of the shape of the reasoning, the way the pieces lock together. It has nothing to do with how confidently the visitor says it, or how reasonable it sounds. And here is the thing people miss: validity also has nothing to do with whether the premises are true. The shape can be perfect while the contents are wrong.',
        ],
      },
      {
        title: 'A good connection cannot repair a false premise',
        paragraphs: [
          'Think of a recipe followed flawlessly. Every step done in order, every quantity exact. If the bag labelled sugar actually contained salt, the cake is ruined, and no amount of careful technique could have saved it. The method was perfect. One ingredient was wrong. The result fails anyway.',
          'Now suppose the visitor read the first premise off an old poster. The current exhibition guide restricts P passes to Thursday. Nothing about the reasoning has changed: the pattern is still valid, still watertight. But one premise is false for this event, so the argument no longer shows that Arun gets in on Friday. An argument that is both valid and has true premises is called sound, and that is the only kind that actually establishes its conclusion. One more wrinkle: Arun might still be allowed in on Friday, perhaps on a different pass. A true conclusion reached by a broken argument is luck, not proof, and it does not rescue the stale poster.',
        ],
      },
      {
        title: 'Review in two passes',
        paragraphs: [
          'Because validity and truth are separate properties, checking an argument is two jobs. First pass, the premises: which event and which dates does this pass rule cover, where did the rule come from, is that source current, and which pass does Arun actually hold? These are questions about evidence. Second pass, the inference: if every premise were true, is there any way the conclusion could still fail? That is a question about shape.',
          'Each pass catches what the other misses. A reviewer who only admires the tidy pattern waves through a stale rule. A reviewer who only checks the facts can approve two true premises connected by a step that does not follow. The practical trick is to write each premise on its own line, because an unsupported leap hides easily inside one fluent sentence and poorly across three short ones. The goal is an argument whose supports you can point at, not merely a conclusion you find persuasive.',
        ],
      },
      {
        title: 'Where arguments usually break',
        paragraphs: [
          'In everyday disputes, the shape is rarely the problem. People are good at if-all-then-this reasoning. What goes wrong is almost always a premise: a rule that changed, a category that does not quite include the case, a fact remembered from the wrong year. So when an argument feels airtight and the conclusion still seems off, look at the starting claims first. Airtight is a property of the shape, and the shape was never the suspect.',
          'Two cautions. Do not dismiss a whole argument as illogical when only a premise failed; the pattern may be perfectly good and reusable with a corrected fact. And do not accept a conclusion because it happens to be true. Arun getting in on Friday by another route tells you nothing about whether the poster was right, and if you accept the argument you will be wrong about the next P pass holder.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'Both premises support the conclusion',
      alt: 'The universal P-pass rule and Arun holding a P pass both feed the Friday-entry conclusion.',
      caption: 'The arrows show the shape, and the shape is fine: both premises flow into the conclusion. What the arrows cannot show is whether the top-left box is still true, and that is the box the old poster filled in. Fictional exhibition rule.',
      items: [
        { label: 'Rule premise', detail: 'Every P pass allows Friday entry.' },
        { label: 'Membership premise', detail: 'Arun holds a P pass.' },
        { label: 'Conclusion', detail: 'Arun may enter Friday if both premises are true.' },
      ],
      arrows: [{ from: 0, to: 2 }, { from: 1, to: 2 }],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the two premises and the conclusion on three separate lines. Splitting them is the point: a leap that hides in one sentence has nowhere to hide across three.',
        'Assume both premises are true for a moment and write one sentence explaining why the conclusion then has to follow. You have just checked the shape, and the shape passes.',
        'Now replace the first premise with the current rule, P passes are Thursday only, and mark which line changed. Write what failed: a fact, not the pattern. The recipe was fine; the bag was mislabelled.',
      ],
      notice: 'You can say exactly where the argument broke, at one premise, without pretending the reasoning pattern itself was faulty. Two passes, two different verdicts.',
      troubleshooting: 'If your check seems to pass and fail at once, make sure P pass and Friday entry mean the same thing on every line. Letting a word shift meaning between premises is a different failure, and it needs its own lesson.',
    },
    recall: {
      prompt: 'A fabric bundle is claimed to be all cotton, and a swatch is said to have come from that bundle. Someone concludes the swatch is cotton. Besides the logic, what needs checking?',
      hint: 'The reasoning pattern cannot verify its own starting claims.',
      answer: 'The shape is sound: if everything in the bundle is cotton and the swatch came from the bundle, the swatch is cotton. So the inference pass is done in a second. The work is all in the premise pass. Is the bundle really all cotton, or is that a label someone wrote on a box years ago? Did this swatch actually come from that bundle, or from a pile beside it? Each premise is a factual claim that the argument assumes and cannot check for itself. Verify the bundle\'s fibre record and the swatch\'s provenance, and only then does the tidy pattern earn its conclusion.',
    },
    quiz: {
      question: 'All models in series R support a feature; this device is in series R; so it supports the feature. Which finding undermines soundness without changing that inference pattern?',
      options: [
        'The current support table lists an R model without the feature',
        'A current inventory independently confirms that this device belongs to R',
        'This device passes a feature test, without information about other R models',
      ],
      correctIndex: 0,
      explanation: 'An R model without the feature makes the universal premise false, so the argument stops being sound even though its shape is untouched; that is the sugar bag turning out to be salt. Confirming the device is in R supports the second premise and strengthens the argument. One device passing a test says nothing about the all-models claim; it is a true conclusion reached without proving the premise.',
    },
    takeaway: 'Check the shape and check the facts as two separate passes; a perfect pattern built on a stale premise proves nothing, and neither pass can stand in for the other.',
    sourceNote: 'The inherited Stanford fallacies reference provides logical background. Exhibition rules and the fabric example are fictional, not verified product or entry claims.',
  },
  {
    id: 'thinking-022',
    title: 'Passing one gate does not mean passing them all',
    outcome: 'Tell the difference between a condition that must be met and a condition that is enough on its own, so one passed check never gets mistaken for a finished outcome.',
    scene: 'A library member has a valid card but still needs a confirmed study-room reservation.',
    sections: [
      {
        title: 'The card is required, not the whole booking',
        paragraphs: [
          'A library has a rule: to confirm a study-room reservation, the member must have a valid card at the moment of confirmation. A member checks their wallet, sees the card is in date, and announces that the room is therefore booked. It is a small, very human leap, and it is wrong. The slot they want might already be taken. They might never have submitted a request at all.',
          'The card satisfies one requirement. It does not produce the outcome. Having a valid passport is required to board an international flight, and nobody with a passport believes that alone puts them on the plane; you still need a ticket, a seat, and to arrive before the gate closes. The library member has made the same error in a less familiar setting: a preliminary check passed, and in their mind it quietly became a guarantee about a process that has several more gates in it.',
        ],
      },
      {
        title: 'Read the implication in its supported direction',
        paragraphs: [
          'The rule has a direction, and the direction matters. Read forward from the outcome: if a reservation was confirmed, then the card was valid at that moment. That is what the rule guarantees. Now try reading it backward: if the card is valid, then a reservation is confirmed. The rule says nothing of the kind, and the booking system never promised it.',
          'Two words carry this distinction. A necessary condition is one that must hold for the outcome to happen; the valid card is necessary for confirmation. A sufficient condition is one that, by itself, guarantees the outcome; a complete set of requirements that the booking rule says will always produce a confirmation would be sufficient. Necessary tells you what you cannot skip. Sufficient tells you when you are done. Neither word says anything about how important a check feels or how hard it was to pass. The passport check can be stressful and still be only necessary.',
        ],
      },
      {
        title: 'Use a counterexample to test the reversal',
        paragraphs: [
          'The fastest way to expose a reversed rule is to build one case where the condition holds and the outcome does not. Picture a member with a perfectly valid card on an afternoon when every room is full. The rule is satisfied; nobody is in a room. That single picture kills the backward reading. Now flip it: a confirmed reservation held by someone whose card was invalid at confirmation. If the records are accurate, that case breaks the rule itself, which is how you know the forward reading is the real one.',
          'Notice the phrase at confirmation. A card that expires next month is a different question about timing, not a counterexample. So write the requirement with its moment attached, and then list what the card leaves unresolved: is the slot free, was a request submitted, did confirmation actually happen? The aim is not to invent endless hurdles. It is to stop announcing gates passed when nobody has checked them.',
        ],
      },
      {
        title: 'Where the reversal sneaks in',
        paragraphs: [
          'The error thrives wherever a visible check stands in front of an invisible process. Your form was accepted, so the application is approved. The tests passed, so the release is ready. The file plays, so the submission is in. In each case a real, necessary step has been mistaken for the finish line, usually because the step was the only part you could see.',
          'Two habits. When you pass a check, ask what else the outcome requires; if you cannot list the other gates, you do not yet know whether you are through. And when a rule is stated as a requirement, say it out loud in the forward direction, from outcome to condition, before you let yourself reason from condition to outcome. The backward version is the one that gets people stranded at the gate.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Card validity by booking confirmation',
      alt: 'A valid card can accompany either a confirmed or unconfirmed booking; an invalid card cannot accompany confirmation under the rule.',
      caption: 'Find the cell that is both allowed and inconvenient: valid card, no booking. Its existence is what proves the card does not guarantee the room. Then find the one forbidden cell, invalid card with a confirmed booking: that is the rule\'s real content. Fictional rule, judged at the moment of confirmation.',
      items: [
        { label: 'Valid card / confirmed', detail: 'Consistent with the rule.' },
        { label: 'Valid card / unconfirmed', detail: 'Also consistent; the desired slot could be occupied.' },
        { label: 'Invalid card / confirmed', detail: 'Violates the stated rule if records are accurate.' },
        { label: 'Invalid card / unconfirmed', detail: 'Consistent with the rule.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the rule as an arrow in its supported direction: confirmed booking, arrow, card valid at confirmation. Drawing the arrow forces you to choose a direction, and choosing is where the thinking happens.',
        'Build the counterexample: a valid card and a fully booked afternoon. Write one sentence on why this case breaks the backward reading without breaking the rule. One concrete picture does more than a paragraph of definitions.',
        'List the evidence still needed before you could tell the member the room is theirs: a free slot, a submitted request, an actual confirmation. These are the other gates the passport does not open.',
      ],
      notice: 'A single concrete case has separated a condition you cannot skip from a condition that finishes the job. The card is on the must-have list and nowhere near the done list.',
      troubleshooting: 'If you drew the arrow the wrong way, test it: can a valid card exist with no booking request ever made? Obviously yes. An arrow that points from card to booking is broken by that one case, so turn it round.',
    },
    recall: {
      prompt: 'A film festival requires every submission to include a playable file. Your file plays perfectly. What is still uncertain about whether your film is accepted?',
      hint: 'Playback may be one of several entry requirements, and acceptance may involve more than requirements.',
      answer: 'Almost everything. Playability is the passport: necessary, and nowhere near sufficient. The festival may also require submission before a deadline, eligibility by length or completion date, a synopsis, a fee, and proper rights clearances, and each of those is another gate your working file says nothing about. Beyond the gates there is selection, which is not a condition at all but a judgement the programmers make among everything that passed. So the honest statement is narrow: one requirement is met. The reversed version, it plays so it is in, is the member announcing the room is booked because the card is in date.',
    },
    quiz: {
      question: 'Publishing approval requires a spelling check. The spelling check passed. What conclusion fits that rule alone?',
      options: [
        'Publishing approval follows, because its named prerequisite passed',
        'The spelling prerequisite is met, but other approval conditions may remain',
        'The spelling check is sufficient whenever no other condition was mentioned in this sentence',
      ],
      correctIndex: 1,
      explanation: 'The rule names something approval cannot happen without, which is a necessary condition, and says nothing about what approval requires in total; so the spelling pass is one gate cleared, no more. Treating it as the whole approval reads the arrow backward. And silence about other conditions is just silence: a sentence that fails to list the remaining gates has not abolished them.',
    },
    takeaway: 'Read every requirement from the outcome back to the condition, then ask what else the outcome needs; a gate you had to pass is rarely the last one.',
    sourceNote: 'The inherited logic reference supports the distinction. Library and publishing rules are invented examples, not descriptions of real policies.',
  },
  {
    id: 'thinking-023',
    title: 'Match the size of the claim to the evidence',
    outcome: 'Know what it takes to prove or disprove a claim that says every, and spot when the evidence being offered is about the wrong cases entirely.',
    scene: 'A fictional courier promises next-day delivery for a narrowly defined set of parcels.',
    sections: [
      {
        title: 'Every parcel needs a defined boundary',
        paragraphs: [
          'A courier advertises a promise with a lot of small print: every prepaid parcel accepted before 14:00 on a weekday, within its listed local area, arrives the next day. Two friends argue about it over coffee. One says it is clearly true, because her parcel arrived next day last week. The other says it is clearly false, because his parcel from abroad took nine days. Both are confident. Neither has touched the claim.',
          'Her parcel is one case, and the promise is about every case; a single success proves a universal claim about as well as one sunny day proves it never rains. His parcel came from another country, and the promise only ever covered the local area. He is refuting a claim the courier never made. The small print is doing real work here. Words like every, some, and within are not decoration; they define exactly which parcels the evidence has to be about.',
        ],
      },
      {
        title: 'A counterexample must belong to the claim',
        paragraphs: [
          'Suppose someone insists that all swans are white. Showing them a thousand white swans does not settle it, because the claim is about all swans and you have checked a thousand. Showing them a black goose does not settle it either, because a goose is not a swan. One black swan does. A universal claim is fragile in exactly one way: a single genuine case from inside its boundary that breaks the rule is enough to bring it down.',
          'So consider a third parcel: prepaid, local, accepted at 13:00 on a Tuesday, and delivered on Friday, with no stated exception that applies. If the records check out, that parcel is the black swan. It is inside every condition of the promise and it did not arrive next day, so the promise as stated is false. Notice what the black swan does not tell you. It does not say how often the courier misses, or why this one was late. Those are different questions needing different evidence. A claim that every parcel arrives next day and a claim that ninety-five percent do are different kinds of statement, even about the same van.',
        ],
      },
      {
        title: 'Narrow the statement openly',
        paragraphs: [
          'Faced with the Friday parcel, the courier has an honest option: retreat to a claim it can support, such as a stated percentage delivered next day over a defined period. That is a weaker promise and a defensible one. What it must not do is quietly swap every for usually after the failure appears and carry on as if nothing changed. Nor may it invent a new exclusion, say bad weather, that was nowhere in the original small print, purely to reclassify the inconvenient case as out of scope.',
          'The protection against both moves is to fix the boundary before looking at any parcels. Write down the population, the deadline, and the exceptions. Then sort each observation into one of three bins: support inside the boundary, contradiction inside the boundary, or outside the boundary and therefore irrelevant. Doing it in that order keeps two arguments apart that otherwise tangle: what the claim actually says, and what a particular tracking record actually shows.',
        ],
      },
      {
        title: 'The asymmetry worth remembering',
        paragraphs: [
          'Universal claims are hard to prove and easy to disprove. No pile of white swans finishes the job, because the next swan might be black; one black swan finishes it instantly. That asymmetry is why confident every statements deserve suspicion, and why the person offering a single success as proof has misunderstood what they are up against.',
          'Two habits. When you hear every or all or never, ask what single case would break it, and whether anyone has looked for that case. And when someone offers a counterexample, check it is actually inside the boundary before you let it count; a goose refutes nothing about swans, however black it is.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Scope by delivery outcome',
      alt: 'In-scope and out-of-scope parcels crossed with next-day and late delivery outcomes.',
      caption: 'Only one of the four cells can bring the promise down: in scope and late. Find it first. Then notice that the in-scope, next-day cell is merely consistent, a white swan, and that both out-of-scope cells are geese, whatever happened to them. Fictional promise.',
      items: [
        { label: 'In scope / next day', detail: 'Consistent case; not proof of every case.' },
        { label: 'In scope / late', detail: 'A verified example refutes the universal promise.' },
        { label: 'Out of scope / next day', detail: 'Does not extend the stated guarantee.' },
        { label: 'Out of scope / late', detail: 'Not a counterexample to this bounded claim.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Copy out the courier promise and underline every word that sets a boundary: every, prepaid, before 14:00, weekday, local area. Those underlines are the fence, and you are drawing it before any parcel arrives.',
        'Take two cases and place each one inside or outside the fence: a Tuesday 13:00 local prepaid parcel that arrives Friday, and an international parcel that arrives late. Write beside each one whether it is a swan or a goose.',
        'Write which case actually contradicts the promise, and list the records that would need checking before you trust it: payment status, acceptance time, delivery address within the listed area, delivery date. A black swan has to be a verified swan.',
      ],
      notice: 'Your challenge to the claim comes from a case inside the original fence, not from an exception somebody built during the argument. The boundary was fixed first and the parcels were sorted second.',
      troubleshooting: 'If you cannot tell whether a case is inside the fence, say so and leave it in a fourth bin marked unresolved. Assuming it belongs inside, because it would make a satisfying counterexample, is the same error as inventing an exclusion to protect the claim.',
    },
    recall: {
      prompt: 'A drawing tool claims every supported file format exports correctly. A file in a format the tool explicitly lists as unsupported fails to export. What follows?',
      hint: 'Find the claim\'s boundary before deciding what the failure means.',
      answer: 'Nothing follows about the claim, because the failed file is a goose. The promise was about supported formats, and this format is explicitly outside that fence, so its failure cannot be a counterexample however annoying it is. To refute the claim you would need a verified failure in a format the tool does list as supported: one black swan from inside the boundary. And the reverse holds too: a dozen supported formats exporting perfectly are white swans, consistent with the claim and not proof of it, because every means every and the next supported format might be the one that breaks.',
    },
    quiz: {
      question: 'A claim says all eligible devices reconnect within one minute. Which observation directly contradicts it?',
      options: [
        'A device outside the listed eligibility conditions takes two minutes',
        'One eligible device reconnects in twenty seconds',
        'A verified eligible device takes two minutes under the stated conditions',
      ],
      correctIndex: 2,
      explanation: 'The third case is inside the fence and breaks the time bound, which is all a universal claim needs to fall; it is the black swan. The ineligible device is a goose: the claim never covered it, so its two minutes are irrelevant. The twenty-second device is a white swan, perfectly consistent with the claim and incapable of proving it, because one success says nothing about all the others.',
    },
    takeaway: 'Draw the fence before you look at cases; a claim about every falls to one verified case inside the fence and is untouched by any number of cases outside it.',
    sourceNote: 'The inherited fallacies reference supplies argument-evaluation background. Courier promises and tracking events are fictional, not legal or service advice.',
  },
  {
    id: 'thinking-024',
    title: 'Keep the meaning of complete fixed',
    outcome: 'Catch the moment a status word quietly changes meaning mid-argument, and replace it with the exact thing the evidence actually shows.',
    scene: 'A photo archive confuses a completed copy job with a verified usable backup.',
    sections: [
      {
        title: 'The progress bar has finished',
        paragraphs: [
          'A photo-copying application finishes its queue and shows one word: complete. You tell a friend that your backup is complete and so your photo archive is safe; if the drive dies tomorrow, everything can be recovered. It feels like a single statement. It is actually two, and the word complete is doing a different job in each.',
          'In the application, complete means the copy tasks you selected have finished running. In your conclusion, complete means the photos you care about can be restored and opened when you need them. Those are connected only if several other things are also true: that you selected every folder that matters, that the originals were not already corrupted, that the copies can be read back. The progress bar knows nothing about any of that. It reported on its queue, and you heard a promise about your archive.',
        ],
      },
      {
        title: 'Replace the shared word',
        paragraphs: [
          'Think of a child who is told to clean their room, sweeps everything under the bed, and announces that the room is clean. The parent and the child are both using the word clean and meaning different things by it, and the argument that follows is really about which meaning was in force. When one word carries two meanings inside a single line of reasoning, logicians call it equivocation. The reasoning looks like it flows because the word stays the same; the meaning has jumped underneath it.',
          'The cure is mechanical. Rewrite each sentence with the word replaced by the exact property it stands for. All selected copy tasks finished. The intended archive can be recovered. Set those two sentences side by side and the gap between them is suddenly visible: nothing in the first one implies the second. Perhaps a folder was never selected. Perhaps a file was damaged before it was ever copied. The status message can be perfectly accurate within its own small scope while the larger claim has never been tested. Short status words are not the problem. Letting them quietly expand is.',
        ],
      },
      {
        title: 'Add the missing checks, not a stronger adjective',
        paragraphs: [
          'Once the gap is visible, the response is to fill it with evidence rather than emphasis. For a real backup, that means two kinds of check. First, coverage: compare an inventory of what you meant to protect against what was actually copied. Second, recovery: restore a sample to a separate location and open the files, without touching the originals, and certainly without deleting anything to see what happens. A successful sample restore supports a claim about those files. It leaves the wider coverage question honestly open.',
          'Then write the report in the same precise register. Which tasks completed, which material was included, which recovery check succeeded. Notice what does not help: changing complete to fully complete or totally safe. A stronger adjective adds volume and no information. Precise wording lets a reader see exactly what is known and, more usefully, which next check would actually connect the finished queue to a usable recovery.',
        ],
      },
      {
        title: 'Why the slide is so easy',
        paragraphs: [
          'Status words are designed to be short and reassuring, and the systems that display them are describing their own narrow job. The slide happens in the human reading them, who wants the narrow report to answer a broad worry. The word is the same; the hope does the rest. It happens with up, which can mean a page loads or a purchase works; with supported, which can mean a file opens or every feature works; with passed, which can mean one test ran or the release is ready.',
          'Two habits. Whenever a status word appears in your reasoning, ask what precisely was observed, and write that instead. And whenever you catch yourself reaching for a stronger version of the same word, stop; the urge to say fully complete is a signal that you have noticed the gap and are trying to shout across it rather than check it.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'One word covering different properties',
      alt: 'Copy tasks finished is an observed operation status; archive recoverability is a broader claim needing additional checks.',
      caption: 'Read both lines and notice the word complete appears in neither. That is the exercise done: with the shared word removed, the left side is something the application observed and the right side is something nobody has checked. The gap between them is where the missing tests live. Fictional wording.',
      items: [
        { label: 'Tasks finished', detail: 'The selected copying operations reached their end state.' },
        { label: 'Archive recoverable', detail: 'The intended material can be restored and used.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the sentence as you would say it: the copying is complete, so the archive is completely recoverable. Underline both uses of complete. Two underlines on one word is the warning sign.',
        'Rewrite the sentence with each underlined word replaced by the exact property it stands for, without touching any real files. You should end up with two plain statements and a visible gap between them.',
        'Name one coverage check and one non-destructive recovery check that would bridge the gap: an inventory comparison, and a sample restore to a separate folder that you then open. Write them as things you could actually do tomorrow.',
      ],
      notice: 'The rewritten argument shows an evidence gap that the repeated word was papering over. The two halves no longer look like they follow from each other, because they never did.',
      troubleshooting: 'If your rewrite still contains safe, healthy, or fine, you have swapped one elastic word for another. Replace each of those with an observation someone could make: this file opened, this folder appears in the copy.',
    },
    recall: {
      prompt: 'A website is described as up because its home page loads, and then, a sentence later, as up for customers wanting to buy something. What shifted?',
      hint: 'Loading a page and completing a purchase are different properties wearing the same word.',
      answer: 'The word up slid from one meaning to another between the two sentences: first it meant the home page responds, then it meant the shop works end to end. That is the room swept under the bed. A loading home page is a real observation and a narrow one; it says nothing about whether the product pages load, the basket holds items, the payment goes through, or the confirmation email arrives. Each of those is its own property needing its own check. Rewrite the two claims without the word up, the home page returned successfully and a purchase can be completed, and the gap between them is plain.',
    },
    quiz: {
      question: 'A file format is called supported because files in it open, and then assumed supported for editing. Which clarification addresses the reasoning gap?',
      options: [
        'Specify opening versus editing features and check editing separately',
        'Open more files in the same format without attempting an edit',
        'Repeat the opening test after restarting the application',
      ],
      correctIndex: 0,
      explanation: 'Supported slid from opens to can be edited, so the fix is to name the two properties separately and test the one nobody tested; that closes the gap with evidence rather than emphasis. Opening more files, or opening the same file after a restart, piles up observations about the property already established and leaves editing exactly as unchecked as before.',
    },
    takeaway: 'When a status word appears twice in one argument, replace each occurrence with what was actually observed; the gap that shows up is the check you still owe.',
    sourceNote: 'The inherited logic reference discusses equivocation. The backup interface is fictional, and the exercise does not perform recovery or delete data.',
  },
  {
    id: 'thinking-025',
    title: 'Check what the expert actually tested',
    outcome: 'Take good advice from someone who knows more than you without assuming it covers conditions they never tried.',
    scene: 'A filmmaker recommends a microphone based on indoor recording with a different phone adapter.',
    sections: [
      {
        title: 'Useful experience with a missing condition',
        paragraphs: [
          'You ask a filmmaker you admire which small microphone to buy. She recommends one without hesitation: she used it for an indoor interview last month and the speech came out clean. That is a real recommendation from real experience, and it is worth more than a hundred anonymous reviews. You are planning to record outdoors, on a different phone, through a different adapter.',
          'Her experience is relevant and it is also incomplete for your purpose, and both things are true at once. She has heard this microphone in a working setup; that is evidence. She has not plugged it into your phone, and she has not stood with it in wind. Expertise supplies evidence. It does not supply a guarantee that stretches across every setting the expert has never been in. The useful question is not whether to trust her. It is which part of what she knows carries over to the conditions you will actually face.',
        ],
      },
      {
        title: 'Ask about the basis, not the person\'s status',
        paragraphs: [
          'A friend who has driven across a country tells you the roads are excellent. Before you set off, you would want to know which roads, in which season, in what kind of car. Not because you doubt the friend, but because excellent roads in a summer sedan and excellent roads in a winter van are different claims, and only the friend knows which one they are making.',
          'So the follow-up to the filmmaker is a question about her setup, not about her credentials: which phone, which adapter, which recording mode, indoors or out, and what did she compare it against? That question keeps the full value of her experience and shows you exactly where its edges are. Two shortcuts lead nowhere. Her seniority cannot make an untested adapter compatible. And if she happened to sell microphones, that would be a reason to check more carefully, not proof she is wrong; affiliation is a prompt for scrutiny, not a substitute for it. What you are sorting is three different kinds of support: knowledge of the field, things she personally observed, and assumptions about conditions she never tried.',
        ],
      },
      {
        title: 'Resolve the gap with matching evidence',
        paragraphs: [
          'Suppose she answers honestly: different adapter, and no, never used it outside. Nothing about her expertise has collapsed. You keep the narrow claim intact, this microphone gave clean indoor speech in her setup by her judgment, and you go looking for the missing pieces elsewhere. The manufacturer\'s compatibility list covers your phone and adapter. A short test recording in your own garden, with permission if anyone else is in it, covers the wind.',
          'Notice what you did not do. You did not demand that one person deliver a universal verdict, and you did not throw out a good recommendation because it came with edges. A careful expert will often say I have not tested that combination. That sentence is not a confession of ignorance. It is the most useful thing in the conversation, because it tells you precisely where to look next.',
        ],
      },
      {
        title: 'Two ways to misuse an expert',
        paragraphs: [
          'The first misuse is deference: treating a recommendation as if the expert\'s standing had tested every condition on your behalf. The microphone becomes the right microphone, full stop, and the wind finds out otherwise. The second misuse is dismissal: discovering one untested condition and deciding the whole recommendation was worthless. Both treat expertise as all-or-nothing when it is always about something in particular.',
          'Two habits. When advice arrives, ask what was tested and under what conditions, in the same tone you would ask a friend about the roads. And when you find a gap, fill it with evidence that matches the gap: a compatibility table for compatibility, a test for performance, rather than more opinions about the person who gave the advice.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Tested setup and intended setup',
      alt: 'The expert tested indoor speech with one phone adapter; the learner plans outdoor speech with another adapter.',
      caption: 'Read down each column and mark every condition that differs between them: location, phone, adapter. Each difference is a question for the filmmaker or a check you make yourself. Nothing in the comparison is about how good she is at her job. Hypothetical recommendation.',
      items: [
        { label: 'Expert\'s observation', detail: 'Indoor interview; known phone and adapter; clear speech by their judgment.' },
        { label: 'Your proposed recording', detail: 'Outdoor conditions; different phone and adapter; compatibility unverified.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the recommendation as a claim limited to exactly what the filmmaker described: this microphone gave clean indoor speech with her phone and adapter. Shrinking it to its evidence is not disrespect; it is the first step in using it.',
        'List the conditions that differ for your outdoor recording: the adapter, the phone, wind, distance from the speaker. Each difference is a place where her experience might not reach.',
        'For each gap, write one respectful question you could ask her, and beside it the matching evidence source if she cannot answer: a compatibility list, a short test recording. The question is about her setup; the evidence matches the gap.',
      ],
      notice: 'You have kept everything the filmmaker actually observed and made its untested extensions visible as a short list of checks. Her advice is more useful now, not less.',
      troubleshooting: 'If the only question you wrote is whether she can be trusted, you have asked about the person instead of the setup. Replace it with a question that names a condition: did you ever try it outdoors?',
    },
    recall: {
      prompt: 'A skilled baker gives you a timing rule she developed with her own oven and her own pan. How should you use that advice?',
      hint: 'Keep the expertise; check the conditions that change the result.',
      answer: 'Treat the rule as what it is: a tested result under her conditions. Then ask the roads question. Which oven, fan or conventional, and what temperature? Which pan, dark metal or glass, what size? Those variables change baking time more than most people expect, so her twenty-five minutes might be your twenty or your thirty-two. Ask her what the finished bake looks and sounds like, because an observable finish test transfers between kitchens in a way a number does not. The rule is a good starting point and a bad guarantee, and the baker herself would probably say so.',
    },
    quiz: {
      question: 'A specialist recommends software she has tested only on one operating system. What most directly addresses using it on another?',
      options: [
        'The specialist\'s total years working with computers',
        'Evidence about the required features on the intended operating system',
        'The number of people who liked the original recommendation',
      ],
      correctIndex: 1,
      explanation: 'The gap is about one specific condition, a different operating system, so only evidence about that condition can close it: documentation or a test on the platform you will use. Years of experience describe the person and cannot reach a system she never tried, however many there are. Popularity counts people who agreed with the original claim, which was about a different platform all along.',
    },
    takeaway: 'Use an expert\'s advice for exactly what they tested, ask about the conditions rather than the credentials, and fill each gap with evidence that matches it.',
    sourceNote: 'The inherited fallacies discussion informs this evaluation heuristic. The filmmaker and equipment experience are fictional, not a product review.',
  },
  {
    id: 'thinking-026',
    title: 'A failed justification does not prove the opposite',
    outcome: 'Keep two verdicts apart: this argument does not work, and this claim is false. Winning the first never hands you the second.',
    scene: 'A popular file compressor is described as lossless without evidence about restoration.',
    sections: [
      {
        title: 'Popularity does not establish exact restoration',
        paragraphs: [
          'A friend recommends a file compressor with a confident reason: professionals use it, so it must be lossless. Lossless is a precise word. It means that when you decompress the file you get back every byte of the original, exactly, not something that looks the same. You spot the gap immediately. Lots of professionals use lossy tools too; popularity says nothing about what happens to the bytes.',
          'So far you are right. Then you take one more step: since the argument failed, the compressor must be throwing data away. That step is just as unsupported as your friend\'s. You showed that popularity does not prove losslessness. You did not show that the compressor is lossy. The technical question, what this tool does in this mode with these settings, is exactly as open as it was before either of you spoke.',
        ],
      },
      {
        title: 'Keep two verdicts separate',
        paragraphs: [
          'A defendant\'s lawyer gives a terrible alibi, full of holes, easily dismantled. The jury should throw out the alibi. The jury should not conclude from that alone that the defendant is guilty, because a bad defence and a true accusation are different things, and a person with a clumsy lawyer may still have been at home all evening. Demolishing an argument clears a space. It does not fill it.',
          'The same holds for the compressor. It might have a documented lossless mode, and your friend simply reached for the wrong reason, describing who uses it instead of how it works. Or a polished reputation story might be attached to a lossy format. Neither possibility is settled by the quality of the argument. So write two verdicts, on two lines. About the argument: popularity is insufficient support. About the claim: exact restoration remains unverified. Keeping them apart stops a logic discussion from becoming a contest where catching someone\'s mistake supposedly makes your opposite conclusion true.',
        ],
      },
      {
        title: 'Name evidence that could settle the actual question',
        paragraphs: [
          'The claim has its own kind of evidence, and none of it is about popularity. The specified format and mode. Reliable documentation of what that mode does. A proper test: compress a file, decompress it, compare the result with the original byte by byte. A mismatch in a valid test would count against exact restoration for that case. A clean match would support it for the files tested, without promising anything about every file ever.',
          'You do not need to run anything to practise this. Draft the evidence request and leave your originals untouched. The useful sentence to your friend is: that reason does not establish losslessness; let us check which mode is selected and how it restores. It names the gap in the reasoning and refuses to pretend that an open question is already a negative answer.',
        ],
      },
      {
        title: 'Why the leap feels so natural',
        paragraphs: [
          'Arguments feel like tug-of-war. When your opponent\'s grip slips, it feels as if you have gained ground. But in reasoning there is no rope. Their argument failing leaves the claim exactly where it was, and your conclusion needs its own evidence to move anywhere at all. The feeling of victory is real; the inference is not.',
          'Two habits. After you reject an argument, say out loud what you have and have not shown: I have shown the reason is weak; I have not shown the claim is false. And if you want to assert the opposite, treat it as a fresh claim that owes its own evidence, not as a prize for spotting someone else\'s error. Unsupported and disproved are neighbours in conversation and strangers in logic.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Different claims need different support',
      alt: 'Popularity is insufficient proof of losslessness; verified restored-data differences would be evidence against exact restoration in a case.',
      caption: 'Read the two columns as two different jobs. The left one is finished the moment you notice popularity proves nothing about bytes. The right one has not been started, and nothing in the left column starts it. Hypothetical compressor.',
      items: [
        { label: 'Argument not established', detail: 'Professional use alone does not show exact restoration.' },
        { label: 'Contrary evidence', detail: 'A valid test restoring different data would challenge losslessness in that case.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the friend\'s argument out in full, professionals use it so it must be lossless, and underline the place where the connection to exact byte restoration is missing. The underline is the whole of your first verdict.',
        'Write two labelled lines beneath it. Argument: popularity is insufficient support. Claim: exact restoration is unverified. Notice that the second line says unverified, not false. That one word is the lesson.',
        'Draft a short request for the evidence that would actually settle the claim: which mode, what the documentation says, and a compress-decompress-compare test on copies. Do not run anything; the exercise is knowing what evidence would count.',
      ],
      notice: 'Your criticism rejects a weak reason without inventing a result about the compressor. The claim is sitting exactly where it was, waiting for evidence, which is where it belongs.',
      troubleshooting: 'If your notes contain the phrase therefore it is lossy, stop and ask what independent evidence that therefore is standing on. If the answer is only that the friend\'s argument was bad, cross it out; a bad alibi is not a conviction.',
    },
    recall: {
      prompt: 'Someone claims a bus route is faster because it is the popular one. You point out that popularity is not speed. What still needs investigating?',
      hint: 'Rejecting a weak reason does not make the route slower.',
      answer: 'The question of which route is faster is entirely untouched. You have shown that popularity is a bad reason, and that is all. The popular route might still be faster; people might have noticed. It might be slower and popular for other reasons: it stops nearer the shops, or it is the one on the map. To actually rank the routes you need comparable journey times under the same conditions, a clear definition of faster, door to door or stop to stop, and enough trips to see past one lucky run. Concluding the popular route is slower because the argument for it was weak is the clumsy-alibi conviction.',
    },
    quiz: {
      question: 'A design award is offered as proof that a poster is readable. You show that the award never assessed readability. What follows?',
      options: [
        'The poster is unreadable, because its offered support failed',
        'Any poster without an award is more readable by comparison',
        'The award does not establish readability; evidence from actual reading is still needed',
      ],
      correctIndex: 2,
      explanation: 'You dismantled the argument, and the poster\'s readability is exactly as unknown as before; only a reading test can move it. Declaring the poster unreadable converts a demolished alibi into a conviction. Ranking unawarded posters higher inverts the same error, treating the absence of a bad argument as evidence of the opposite.',
    },
    takeaway: 'Rejecting a reason clears the ground; it builds nothing. Unsupported is where the claim was before, and disproved is a destination with its own fare.',
    sourceNote: 'The inherited argument reference informs this distinction. The compressor scenario is fictional and does not establish properties of any real format.',
  },
  {
    id: 'thinking-027',
    title: 'Compare choices across more than the usual outcome',
    outcome: 'Weigh what usually happens against what sometimes happens, and notice when a hard deadline should overrule a better average.',
    scene: 'A passenger chooses between a shortcut bus route and a steadier main-road route.',
    sections: [
      {
        title: 'The fastest usual trip is not the only outcome',
        paragraphs: [
          'Two bus routes get you to the same place. The shortcut is usually quick. The main road is never quick, but it is never terrible either. On a typical morning you take the shortcut without thinking, because on a typical morning it wins. The question is what happens on the mornings that are not typical.',
          'Put numbers on it, invented ones, to see the shape. Say traffic is clear 80 percent of the time and congested 20 percent. The shortcut takes 15 minutes when clear and 55 when congested, because it runs through a bottleneck. The main road takes 25 when clear and 30 when congested. Four outcomes, written down before choosing. The shortcut wins in the common case by ten minutes. In the uncommon case it loses by twenty-five. Those are not real traffic figures and they are not a promise about any route; they are a way of making a trade-off visible.',
        ],
      },
      {
        title: 'Calculate what the average comparison actually values',
        paragraphs: [
          'Imagine a coin that pays you 10 if it lands heads and costs you 2 if it lands tails. On average, over many flips, you come out ahead. That average is useful if you will flip the coin all year. It is less useful if you have one flip and losing 2 means missing the rent. The average describes the long run; your life is lived one flip at a time.',
          'Work out the long run for the buses. Shortcut: 0.8 times 15 plus 0.2 times 55, which is 12 plus 11, so 23 minutes. Main road: 0.8 times 25 plus 0.2 times 30, which is 20 plus 6, so 26 minutes. That probability-weighted average is called the expected duration, and the word expected is a trap: it does not mean the trip you should expect tomorrow, it means the average across many trips. Minimising it favours the shortcut by three minutes. But that rule quietly assumes every minute costs the same, so a 55-minute disaster is just 40 minutes worse than a 15-minute breeze. Real life often does not price minutes that way, which is why decision theory talks about expected utility, weighting how much each outcome actually matters to you, rather than raw minutes.',
        ],
      },
      {
        title: 'The consequence can change the preference',
        paragraphs: [
          'Now add one fact: you must arrive within 35 minutes, or you miss the appointment entirely. Look at the four cells again. The main road meets the deadline in both states, 25 and 30. The shortcut meets it when clear and blows straight through it when congested, 55. One trip in five, under this model, the shortcut turns a good morning into a wasted one.',
          'A sensible person might take the main road despite its worse average, and nothing about that is irrational. The three minutes you give up on ordinary days are buying out the one day in five that costs you the appointment. This is not a rule that everyone should always pick the option with the least-bad worst case. It is a demonstration that the average alone did not contain your constraint, and that the constraint changed the answer. A real plan would also need defensible probabilities, other possible disruptions, accessibility, and cost. The table organises those questions. It does not permit you to wave a requirement away because a weighted average looked attractive.',
        ],
      },
      {
        title: 'What the table is for',
        paragraphs: [
          'The point of writing all four cells is to stop the common case from hiding the rare one. People do not usually choose the shortcut because they weighed a 55-minute risk and accepted it. They choose it because they remember the 15-minute mornings and the 55-minute one has faded. The table puts the faded morning back on the page at its true weight.',
          'Two cautions. Do not average the two states equally; 80 and 20 are not 50 and 50, and the arithmetic goes wrong the moment you forget that. And do not let the table pretend to a precision the inputs lack. The 80 percent came from somewhere, and if that somewhere is a guess, the 23 and 26 are guesses too. The structure is still worth having, because it forces you to say which outcomes exist and which ones you can afford.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Route by traffic state',
      alt: 'Shortcut takes 15 minutes clear and 55 congested; main road takes 25 clear and 30 congested.',
      caption: 'Find the one cell that breaks a 35-minute deadline: shortcut, congested, 55 minutes. That cell carries 20 percent of the weight and all of the risk. The expected times, 23 and 26, are averages over many trips and describe no single morning. Invented two-state model.',
      items: [
        { label: 'Shortcut / clear', detail: '15 minutes; 80% state probability.' },
        { label: 'Shortcut / congested', detail: '55 minutes; 20% state probability.' },
        { label: 'Main road / clear', detail: '25 minutes; 80% state probability.' },
        { label: 'Main road / congested', detail: '30 minutes; 20% state probability.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen', 'Calculator'],
      steps: [
        'Draw the two-by-two table and multiply each duration by its state probability: 15 by 0.8, 55 by 0.2, 25 by 0.8, 30 by 0.2. Writing each product in its cell keeps the weights attached to the outcomes they belong to.',
        'Add each route\'s two products and check that you get 23 for the shortcut and 26 for the main road. If you got 35 and 27.5, you averaged the states equally; go back and use the 80 and 20.',
        'Draw a line through every cell above 35 minutes. Only one cell crosses it. Write two sentences: which route the average prefers, and which route a 35-minute deadline prefers, and why they disagree.',
      ],
      notice: 'The smallest average and the deadline-safe choice point at different routes, and you can say exactly which cell causes the disagreement. The average was true and it was not the whole story.',
      troubleshooting: 'If the two states feel equally likely as you work, look back at the stated probabilities. The whole exercise depends on the congested state being rarer and worse at the same time; treating them as equal flattens exactly the trade-off you are trying to see.',
    },
    recall: {
      prompt: 'A cheap print option usually works fine but occasionally produces a result that has to be reprinted. What belongs in a fair comparison with a more reliable, pricier option?',
      hint: 'Include what failure costs, not just what success costs.',
      answer: 'Lay out the same kind of table. For the cheap option: the usual price when it works, and when it fails, the reprint cost plus the delay plus whatever the delay costs you, a missed deadline perhaps. For the reliable option: its higher price, nearly every time. Then two more things the table needs: a defensible estimate of how often the cheap one fails, and your own constraint, such as whether a late print is merely annoying or ruins the event. A lower usual price is the 15-minute shortcut. Whether it is the right choice depends on the 55-minute cell and whether you can survive it.',
    },
    quiz: {
      question: 'An option has the lowest expected cost but sometimes breaches a firm requirement. What should the comparison do?',
      options: [
        'Check feasibility and preferences rather than letting the average override the requirement',
        'Choose it, because expected cost already incorporates every kind of consequence',
        'Reject every uncertain option, regardless of whether its outcomes meet the requirement',
      ],
      correctIndex: 0,
      explanation: 'The average was computed as if every unit of cost were interchangeable, and a breached requirement is not just a larger number, it is a different kind of outcome; so the constraint has to be checked cell by cell, not absorbed into the mean. Expected cost contains only what you put into it, and a hard deadline was never in the arithmetic. Rejecting all uncertain options throws out routes whose every outcome would have been fine.',
    },
    takeaway: 'Write every outcome with its weight, compute the average, and then ask which cells you could not survive; the average is a summary, not a permission slip.',
    sourceNote: 'Stanford\'s Decision Theory entry was checked for expected utility and its limits. Route calculations use explicit fictional assumptions, not a universal rule of rational preference.',
  },
  {
    id: 'thinking-028',
    title: 'Name the real alternative a free event displaces',
    outcome: 'Work out what a choice actually costs you by naming the single best thing you could have done instead, without pretending it is free and without adding up everything you can imagine.',
    scene: 'A free neighborhood lecture competes with a planned two-hour drawing session.',
    sections: [
      {
        title: 'No ticket price, but a real choice',
        paragraphs: [
          'A neighbourhood lecture is on this Saturday afternoon, and it is free. You had set aside that same two-hour block for drawing, something you have been meaning to get back to for months. The lecture sounds interesting. It costs nothing. So the decision feels obvious: why would you turn down something free?',
          'Because free describes the ticket, not the afternoon. The lecture, including getting there and back, takes the exact two hours you had reserved. You cannot spend that block drawing and also spend it in a lecture hall. If drawing is the most valuable thing you could realistically have done with that time, then attending the lecture costs you a drawing session. That cost has a name: opportunity cost, the value of the best alternative you give up. It does not have to be money. It does not have to be impressive. It only has to be real to you.',
        ],
      },
      {
        title: 'The alternative must be possible',
        paragraphs: [
          'A friend offers you a free seat at a concert. You think about everything else you could do that evening: finish a novel, cook something elaborate, call your sister, go for a run. It is tempting to feel that the concert is costing you all of those at once, and to feel vaguely robbed. But you only have one evening. You were going to do one of those things, maybe two. The concert displaces the one you would actually have chosen, not the whole list.',
          'Opportunity cost is about the single best feasible alternative, and feasible is doing real work in that sentence. A paid assignment nobody has offered you is not a feasible use of Saturday. A friend who is away is not available to meet. Adding their imagined value inflates the cost into something nothing could ever justify. Rest counts as a feasible alternative, and often a good one. And check the actual calendar: if drawing can move to another block that is genuinely empty, where it displaces nothing of value, then the lecture\'s cost shrinks. But do not assume every postponement is free. A block you call empty usually had something quiet in it.',
        ],
      },
      {
        title: 'Compare without forcing one universal answer',
        paragraphs: [
          'Suppose the lecture covers something you have wanted to understand for years, and this afternoon you would honestly rather hear it than draw. Then go. Attending is a perfectly sensible choice, and it still has a nonzero cost: the drawing session you did not have. Naming the cost does not mean refusing to pay it. It means paying it knowingly instead of pretending the bill was zero.',
          'The practical version is short. Write what the lecture offers you. Write the one thing it actually displaces. Note any commitment already attached to the block. Then choose, using your own priorities, without converting every hour into a wage. The finished reasoning should let you say what you gave up in one plain sentence. It should not turn your weekend into a spreadsheet.',
        ],
      },
      {
        title: 'Two ways to get the cost wrong',
        paragraphs: [
          'The first error is the one the word free invites: letting a zero price end the comparison before it starts. Free events, free trials, free desks that take up the only corner where your instrument fits. In every case the scarce thing being spent, time or space or attention, has no price tag, so it slips past unexamined.',
          'The second error is the overcorrection: tallying every alternative you can name until no choice could ever be worth making. Both errors skip the same step, which is identifying the one real alternative. Two habits fix both. Whenever something is free, ask what it occupies. And whenever the cost feels enormous, ask whether you have counted things you could not actually have done.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Two uses of the same Saturday block',
      alt: 'Attend the free lecture including travel, or keep the planned drawing session in the same two-hour block.',
      caption: 'Notice there are exactly two columns, not a list of everything you might have done. The block is shared and the right-hand column is the single best feasible thing it would otherwise hold. No invented money value is attached to either; the comparison is yours to weigh. Hypothetical choice.',
      items: [
        { label: 'Attend the lecture', detail: 'No admission fee; lecture and travel occupy two hours.' },
        { label: 'Keep the drawing session', detail: 'The preferred feasible alternative in that same two-hour block.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen', 'Your personal calendar, if useful'],
      steps: [
        'Pick one optional, low-stakes thing you are considering this week and write down the time it really occupies, including getting there and back. The travel is where free events hide half their cost.',
        'List what you could feasibly do with that same block instead. Allow rest. Allow existing commitments. Cross out anything that depends on people or opportunities that are not actually available; those are the imagined alternatives that inflate the bill.',
        'Circle the single best remaining alternative by your own priorities, and write one sentence: doing this means not doing that. Do not add the others; you were only ever going to do one.',
      ],
      notice: 'A zero price no longer makes the choice look consequence-free, and the cost on your page is one real thing rather than an impossible pile. You can now decide with the bill in view.',
      troubleshooting: 'If your best alternative depends on someone who is busy or a chance that has not been offered, it is not feasible this block. Remove it and look again; the real alternative is often humbler and still worth naming.',
    },
    recall: {
      prompt: 'Someone offers you a free desk, and the only place it fits is the corner where your keyboard instrument currently lives. What is the relevant opportunity cost?',
      hint: 'The scarce thing here is space, not time or money.',
      answer: 'The desk costs nothing to buy and it occupies the one corner that currently keeps your instrument out and playable. So the opportunity cost of accepting is the best feasible use of that corner you give up, and for you that is probably having the instrument accessible rather than boxed in a cupboard. That is the comparison: a desk against a reachable instrument, in that corner. Not the desk against the price of a desk, which is zero and irrelevant. Not the desk against every possible use of the whole room added together. One corner, two uses, your priorities. If you would rather have the desk, take it, knowing what it displaced.',
    },
    quiz: {
      question: 'A free evening class takes your only available evening each week. Which comparison identifies its opportunity cost?',
      options: [
        'Add together the value of every hobby and social event imaginable on that evening',
        'Compare it with the best genuinely available use of that same evening',
        'Ignore time, because no payment changes hands',
      ],
      correctIndex: 1,
      explanation: 'The class displaces one evening, so its cost is the single best thing that evening would otherwise have held, and nothing more. Adding every imaginable alternative counts things you could not have done simultaneously and produces a cost nothing could justify. Ignoring the time because the price is zero is the exact trap the word free sets.',
    },
    takeaway: 'Free describes the ticket; the cost is the one best thing the time or space would otherwise have held, so name that one thing and then decide.',
    sourceNote: 'OpenStax supplies opportunity-cost background. The lecture and personal priorities are hypothetical, not a prescription to value leisure in money.',
  },
  {
    id: 'thinking-029',
    title: 'Keep useful work without owing it more work',
    outcome: 'Stop letting hours you have already spent push you into spending more, while still counting the useful things those hours produced.',
    scene: 'An unfinished handmade costume competes with borrowing a suitable finished costume.',
    sections: [
      {
        title: 'Six hours are already gone either way',
        paragraphs: [
          'You are six hours into making a costume for a party when a friend texts: she has a finished one in your size, and you are welcome to borrow it. Your first feeling is almost physical. Six hours. If you borrow hers, those hours were wasted. So you should keep sewing, if only to make them count.',
          'Look at that feeling carefully, because it is lying to you about one thing. The six hours are gone. They are gone if you sew for three more; they are gone if you borrow the costume tonight. No choice available to you now can get them back, which makes them a sunk cost: effort already spent that the current decision cannot touch. Spending more time does not redeem them. It only spends more time. The decision in front of you is about what each path offers from this moment on: how the costume will look, whether it will fit, how long it will take, how much you enjoy the sewing, and what you owe the friend who is lending.',
        ],
      },
      {
        title: 'What the past produced can still matter',
        paragraphs: [
          'Think of someone who has eaten half of a huge restaurant meal and is full. The money is spent whether they stop or not. Forcing down the rest to get their money\'s worth gets nothing back; it just adds discomfort to the bill. But if they box the leftovers for tomorrow, the half-meal has produced something with real future value. The past is unrecoverable. The things it left behind are not.',
          'Back to the costume. Finishing from the current rough pieces would take about three more hours. Then you notice the cuffs are already complete and can be attached directly, which brings the remaining work down to two. Those cuffs are not a reason to honour the six hours; they are a present asset that changes a cost still ahead of you. Borrowing, in this fictional comparison, takes about an hour to arrange collection and return. So the honest time comparison is two future hours against one. It is not eight against one. The six are shared history on both sides of the ledger, and the cuffs are what the history left behind.',
        ],
      },
      {
        title: 'The forward comparison need not favor abandoning',
        paragraphs: [
          'None of this says you must borrow. You might finish because you love sewing, or because you want this particular design and nothing else will do. Those are future benefits, and they are entirely legitimate reasons. What they are not is a debt owed to the hours already spent. Equally, you might borrow because two hours is two hours you do not have this week, and tuck the unfinished pieces away for another occasion rather than binning them.',
          'Count the switching costs too. The borrowed costume needs trying on, and the return plan is a real commitment. Ignoring sunk cost does not mean abandoning useful work to prove you are unsentimental; the cuffs stay useful whichever way you go. The clearest tool is three lists. Unrecoverable history: six hours. Assets available now: finished cuffs, a friend\'s offer. Consequences of each next step: two hours and a chosen design, or one hour and a known fit. Only the second and third lists can change what happens from here.',
        ],
      },
      {
        title: 'How to hear the sunk cost talking',
        paragraphs: [
          'The sunk cost does not announce itself. It arrives as after all that effort, or I have come this far, or it would be a shame to stop now. Each phrase points backward. Each one is about protecting the appearance of the past rather than improving the future, and the test is simple: does this reason change any cost or benefit that lies ahead? If not, it is the half-eaten meal talking.',
          'Two cautions. Do not swing to the opposite error and treat all prior work as worthless because you have learned the phrase sunk cost; the cuffs are real. And do not confuse sunk cost with commitment to other people. A promise you made is a future obligation, not a past expense, and it belongs on the consequences list.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'The remaining choice starts now',
      alt: 'Finish the costume in two further hours using existing cuffs, or borrow with one hour of arrangements.',
      caption: 'Notice what is missing from both columns: the six hours already spent. They appear on neither side because they are identical on both. What does appear is the finished cuffs, quietly reducing the left column from three hours to two. Invented estimates.',
      items: [
        { label: 'Finish the costume', detail: '2 future hours after reusing completed cuffs; keeps the chosen design.' },
        { label: 'Borrow the costume', detail: '1 future hour for collection and return arrangements; fit is already checked.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw three columns headed history, assets now, and what each next step costs and gives. Put six spent hours under history and the completed cuffs under assets. Seeing the hours and the cuffs in different columns is the point: one is gone, the other is sitting on the table.',
        'Under the third column, write two future sewing hours against one borrowing hour, and beside each add the other benefits in plain words: chosen design, or confirmed fit. Keep the numbers and the feelings on separate lines so neither hides the other.',
        'Write one reason to finish that is about future value, such as wanting this design, and one reason to borrow that is about future constraints, such as a busy week. Check that neither reason mentions the six hours.',
      ],
      notice: 'Either choice on your page can be defended, and neither defence pretends that more sewing recovers elapsed hours. The cuffs got counted; the hours got acknowledged and left alone.',
      troubleshooting: 'If a reason you wrote begins with after all that effort or I have come this far, ask what future cost or benefit it changes. If the answer is none, it is the half-eaten meal, and it comes off the list.',
    },
    recall: {
      prompt: 'You are halfway through writing a script when you find an existing tool that does most of the job. Which parts of your unfinished work still belong in the comparison?',
      hint: 'Ask what could reduce future effort or improve the future result, not what you have already invested.',
      answer: 'The hours you spent are the six sewing hours: gone either way, and not an argument for anything. What survives into the comparison is whatever those hours left behind that still has use. Tests you wrote might check the existing tool too. Components that work might plug into it. Most of all, you now understand the problem far better than when you started, and that knowledge makes evaluating the tool quicker and safer. Those are the cuffs. Put them on the assets list, and then compare honestly: remaining development on your script, against the effort of adopting the tool, migrating, and maintaining whichever path you pick. Finish if the forward comparison favours it, not because stopping would make the hours look wasted.',
    },
    quiz: {
      question: 'A partly completed illustration has taken a whole weekend. Which reason to continue is forward-looking rather than a sunk-cost justification?',
      options: [
        'Stopping would make the weekend look poorly spent',
        'The original plan should be finished because it came first',
        'Existing sketches reduce the remaining work for the version you now prefer',
      ],
      correctIndex: 2,
      explanation: 'The sketches are present assets: they change how much work lies ahead, which is exactly what a decision made now should weigh. How the weekend will look is about protecting the appearance of the past and alters no future cost or benefit. Finishing a plan because it came first treats sequence as obligation; the forward comparison does not care which idea arrived earlier.',
    },
    takeaway: 'Spent hours cannot be rescued by spending more; count what they left behind, compare only what lies ahead, and let after all that effort fall off the list.',
    sourceNote: 'The inherited economics reference supplies choice and sunk-cost background. Costume times are invented and do not prescribe whether to finish a personal project.',
  },
  {
    id: 'thinking-030',
    title: 'Ask what a measurement would let you choose differently',
    outcome: 'Before gathering one more fact, check whether any possible answer would change what you do; if none would, you are not researching a decision, you are postponing it.',
    scene: 'A storage-box purchase depends on measuring a shelf gap before leaving home.',
    sections: [
      {
        title: 'One missing measurement controls the purchase',
        paragraphs: [
          'You are about to leave for the shop to buy a storage box that is forty centimetres wide. It is meant for a particular shelf. You want two centimetres of clearance so it slides in and out without scraping, which means the gap on that shelf needs to be at least 42 centimetres. You have not measured the gap. The ruler is in the kitchen drawer.',
          'This is the simplest possible case of a question worth asking before any fact-finding: what would I do differently depending on the answer? Here the answer is sharp. If the gap is 42 or more, buying stays on the table. If it is less, the box cannot do the one job you are buying it for, and you keep using the small organiser you already have. The measurement has a decision riding on it, and it costs you thirty seconds. That is information worth having, and it is worth having before you leave, not after.',
        ],
      },
      {
        title: 'Information earns its place through changed action',
        paragraphs: [
          'Imagine checking the weather forecast when you have already decided to take an umbrella no matter what. The forecast is still interesting. It might tell you something about the afternoon. But it is not helping you decide about the umbrella, because that decision was made before you looked, and rain or shine, the umbrella comes. Looking it up and calling it planning would be a small self-deception.',
          'The value of a piece of information lies in how much it can improve a choice, weighed against the effort, delay, and cost of getting it. That is a different thing from how thorough or detailed the information looks. Now suppose that, box or no box, you have already decided to keep the current organiser because you are moving flat next month. Measuring the gap would satisfy curiosity, or document the room for the next tenant. Those can be perfectly good reasons. But they are not this purchase decision, and naming them honestly stops a bit of idle measuring from being dressed up as necessary research when every possible reading leads to the same action.',
        ],
      },
      {
        title: 'Write the branches before collecting more',
        paragraphs: [
          'The useful habit is to write down what you will do under each possible answer before you go and get the answer. For the shelf: gap comfortably over 42, buy. Gap clearly under 42, keep the organiser. Gap right around 42, measure again rather than trusting a rounded number. That third branch matters because measurements have their own uncertainty, and a borderline reading deserves a second look, not a confident purchase.',
          'While you have the ruler out, check the other things that could stop the box working: height, and whether anything blocks the shelf front. A cheap, quick measurement that can change your choice is almost always worth making. An expensive or slow investigation needs a bigger decision riding on it before it earns its cost. None of this is a rule against learning things for their own sake. It is a way of telling apart learning because you are curious from learning because the answer will send you down a different path.',
        ],
      },
      {
        title: 'Where unnecessary research hides',
        paragraphs: [
          'Research that changes nothing is comfortable, which is why it is common. One more test export when either result leads to the same compatibility check anyway. One more survey when the decision is already made. One more comparison site when you know which one you are buying. Each feels diligent and each is a delay wearing diligence as a costume.',
          'Two habits. Before looking anything up for a decision, write the branches: if the answer is this, I do this; if that, I do that. If every branch ends in the same action, either name the other purpose the lookup serves or skip it for now. And when a branch is borderline, plan to re-measure rather than to round; the second look is the cheapest insurance you will ever buy.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Purchase action by actual shelf clearance',
      alt: 'Buying works with adequate clearance but fails its purpose with inadequate clearance; keeping the current organizer remains feasible in both states.',
      caption: 'Read the top row first: buying is a good outcome in one cell and a wasted trip in the other, and only the measurement tells you which cell you are in. Now read the bottom row: keeping the organiser is fine in both. That asymmetry is why the ruler is worth thirty seconds. Fictional 42-centimetre requirement.',
      items: [
        { label: 'Buy / adequate gap', detail: 'Box fits the stated width requirement.' },
        { label: 'Buy / inadequate gap', detail: 'Purchase cannot serve its intended shelf.' },
        { label: 'Keep / adequate gap', detail: 'Current organizer remains usable; purchase was possible.' },
        { label: 'Keep / inadequate gap', detail: 'Current organizer remains usable; avoids a non-fitting purchase.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the requirement, at least 42 centimetres, and the two actions available, buy or keep. No actual shopping is involved; the exercise is the shape of the decision.',
        'Write what you would do for three possible readings: 45 centimetres, 39 centimetres, and something right on 42. The third answer should be re-measure, not buy. Writing the branches before you measure is the whole technique.',
        'Answer in one sentence whether learning the gap could change your choice. Then name one other requirement, height or access, that could stop the box working and deserves a check while the ruler is out.',
      ],
      notice: 'Every measurement on your page has a branch attached to it, a thing you would do differently. None of them is there to make you feel more certain about a choice you had already made.',
      troubleshooting: 'If all three readings lead to the same action, you have found a measurement that does not serve this decision. Either write down the other purpose it serves, documenting the room say, or put the ruler back and decide now.',
    },
    recall: {
      prompt: 'A photographer is thinking about running one more test export, but whatever it shows, the next step is the same compatibility check with the printer. What should they ask themselves?',
      hint: 'Separate settling a decision from exploring or documenting.',
      answer: 'The umbrella question: which later choice could this export change, and at what cost in time? If the honest answer is that the compatibility check happens regardless, the export is not resolving anything; it is a comfortable delay. It might still be worth doing for another reason, to document settings, to learn how the software behaves, to have a reference file, and those reasons are fine when stated plainly. What the photographer should not do is call it decision research when no branch of the decision depends on it. Name the real purpose or skip it and run the check.',
    },
    quiz: {
      question: 'You will book a workshop only if your camera is compatible; the date and cost are already acceptable. Which check most directly resolves the choice?',
      options: [
        'Confirm the supported-camera list with the organizer',
        'Find the typical number of participants in previous sessions',
        'Check how many optional practice files the class includes',
      ],
      correctIndex: 0,
      explanation: 'Compatibility is the one open condition with a branch on it: supported means book, unsupported means decline. Class size and practice files might shape how much you enjoy the workshop, but neither one changes the book-or-decline decision as you have stated it; looking them up first is the forecast when the umbrella is already in your hand.',
    },
    takeaway: 'Write the branches before you measure; a fact is worth gathering when some answer would change what you do, and a fact that changes nothing is a delay, however diligent it feels.',
    sourceNote: 'Stanford\'s Decision Theory entry was checked for value-of-information reasoning. Box dimensions and clearance are illustrative, not universal furniture tolerances.',
  },
  {
    id: 'thinking-031',
    title: 'Check every relevant criterion before removing an option',
    outcome: 'Know when one option is genuinely better across the board and can be dropped, and when a cheaper price is quietly hiding a requirement you forgot to compare.',
    scene: 'Two fictional offline image converters differ in price while other required features appear matched.',
    sections: [
      {
        title: 'A simpler shortlist is possible',
        paragraphs: [
          'You need an offline tool to convert images of your own artwork. Two candidates survive the first look. Both handle the formats you need. Both run on your computer. Both have licences that permit personal use. Tool A costs 400 rupees; tool B costs 300. You check further and find that output quality, the features you require, support, and everything else you care about are the same.',
          'If all of that is verified, B is at least as good as A on every criterion and strictly better on one, the price. In the language of decision-making, A is dominated by B, and a dominated option can be removed without further agonising. Notice what you did not have to do: put a rupee value on every feature and total them up. Dominance lets you prune without a full scoring system, because there is no column where A wins and so nothing to trade off.',
        ],
      },
      {
        title: 'Dominance depends on what the comparison contains',
        paragraphs: [
          'Two flats are identical: same size, same street, same light, same lease. One is cheaper. You take the cheaper one, obviously. Then you learn it has no running water after 10 pm. Suddenly the flats were never identical; your comparison was missing a row, and the cheaper flat only looked dominant because the row that mattered was not on the sheet.',
          'Now suppose tool B stamps a watermark on exactly the export mode you need, and A does not. If clean output is a requirement, the earlier table was missing its decisive row. B is not better across the board any more; it is cheaper and worse on something you cannot do without. Dominance means at least as good on every relevant criterion and better on at least one. It does not mean best on your favourite column. The moment each option holds a real advantage, you are facing a trade-off, and no amount of calling the cheaper tool obviously superior makes the trade-off go away.',
        ],
      },
      {
        title: 'State the conditions of removal',
        paragraphs: [
          'Before you strike anything off a shortlist, write the requirements down and mark each cell honestly: verified, assumed, or not yet checked. For software that means compatibility, permitted use, output restrictions, how it is maintained, and any costs beyond the sticker price. Some rows will turn out not to matter; a paid feature you will never use is not a reason to prefer anything. Others, like one restriction in one export mode, decide whether the tool can do the job at all.',
          'Then phrase the conclusion with its conditions attached. A is dominated on these verified criteria under these conditions. Not: A is worse. The first sentence is true as far as it goes and invites someone to add a missing row. The second pretends the table is complete. And if an important cell is blank, keep the option provisionally. A shortlist pruned on an unfinished table has not been simplified; it has been guessed.',
        ],
      },
      {
        title: 'Where false dominance comes from',
        paragraphs: [
          'The pattern is nearly always the same: one criterion is vivid, usually price, and the others are assumed equal because checking them is tedious. The vivid criterion then does the work of the whole comparison. Cheaper ticket, cheaper printer, cheaper flat. The word cheaper feels like a verdict, and it is only ever a single row.',
          'Two habits. Before declaring an option dominated, say out loud what the tool, ticket, or flat actually has to do, and check that every part of that job has a row in the table. And when someone tells you an option is obviously better, ask them which column they are looking at. If they can name only one, they have found a preference, not dominance.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'The price advantage needs matched output conditions',
      alt: 'Tool A costs 400 rupees and tool B 300; the comparison must also check the required watermark-free export mode.',
      caption: 'Read past the prices to the second half of each line, where the real work is. B is only dominant if the clean-output check comes back equal, and a single watermark in the mode you need turns the cheaper tool into the one you cannot use. Fictional tools.',
      items: [
        { label: 'Tool A: 400 rupees', detail: 'Required formats and platform work; check clean output and other requirements.' },
        { label: 'Tool B: 300 rupees', detail: 'Lower price is decisive only if required conditions are no worse.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw a table with the two tools as columns and these rows: price, platform, required formats, permitted use, watermark-free output. Fill in what you know and mark every other cell as assumed or unchecked. The blank cells are the point of the exercise.',
        'Assume every non-price row matches and write one sentence explaining why A can be removed in that limited model. Use the word dominated and notice that you did not need to value any feature in rupees.',
        'Now change B\'s export row to watermarked and rewrite the verdict. Keep the watermark row visible in your table rather than quietly deleting it; the whole lesson is that the missing row was the decisive one.',
      ],
      notice: 'Your dominance claim changed the moment a relevant row changed. It did not survive by ignoring the row, which is how false dominance usually survives in real shortlists.',
      troubleshooting: 'If your table has only a price row, you have compared two numbers, not two tools. Write down the actual job the tool must perform, then add a row for each part of that job before you rank anything.',
    },
    recall: {
      prompt: 'Two train tickets have the same departure and the same seat. One is cheaper but cannot be changed. Is the dearer ticket dominated?',
      hint: 'Ask whether changeability matters for this particular trip.',
      answer: 'Only if flexibility is genuinely irrelevant to you. If there is any chance your plans shift, the dearer ticket holds a real advantage in a row the cheaper one loses, so neither dominates and you have a trade-off: a certain saving against an uncertain need to rebook. If your plans are fixed beyond doubt, the flexibility row collapses to equal and the cheaper ticket dominates within that narrower model. The answer depends on a row the price does not show you, which is the flat with no water after 10 pm all over again.',
    },
    quiz: {
      question: 'Two printers trade lower ink cost against a required larger paper size. What best describes the comparison?',
      options: [
        'The lower-ink-cost printer dominates regardless of supported paper size',
        'A relevant trade-off or feasibility constraint, not price-only dominance',
        'The larger printer dominates because one requirement always outweighs every other cost',
      ],
      correctIndex: 1,
      explanation: 'Each printer wins a row that matters, so neither is at least as good on everything, and dominance is off the table; if the larger paper is a hard requirement, the cheaper printer may simply be infeasible, which is a different kind of exclusion. Ignoring paper size is pruning on an unfinished table. Declaring the larger printer dominant inverts the error: one requirement decides feasibility, but it does not make every other row irrelevant.',
    },
    takeaway: 'Dominance is a verdict about a complete table of relevant criteria; cheaper is one row, and an option removed on one row has been guessed away, not reasoned away.',
    sourceNote: 'The inherited decision-theory reference informs this framework. Tool prices and restrictions are invented; relevant preferences must be stated rather than assumed universal.',
  },
  {
    id: 'thinking-032',
    title: 'Ask what undo would really restore',
    outcome: 'Judge whether a change is truly reversible by asking what state is preserved, whether you can still reach it, and which consequences have already left your hands.',
    scene: 'A booklet designer can restore a layout file but cannot unprint already produced proofs.',
    sections: [
      {
        title: 'The file can go back; the paper cannot',
        paragraphs: [
          'You are laying out a small booklet and want to crop a scanned drawing. You are careful: you work on a copy and leave the original scan untouched. So you call the crop reversible, and for the pixels in that working file you are right. If the crop looks wrong, you reopen the original and start again. Nothing lost.',
          'Then you send the cropped layout off for a printed proof. The proof comes back and the crop has cut off the drawing\'s best line. You can restore the file in two clicks. You cannot restore the paper, the ink, or the afternoon it took. Reversible was never a property of the crop. It was a property of one stage of what you did with the crop, and the stage after it had no undo. Reversibility is not a label you stick on an edit. It depends on which parts of the situation you would need to put back, and which have already travelled beyond your reach.',
        ],
      },
      {
        title: 'A later option needs the means to carry it out',
        paragraphs: [
          'Think of sending a message you might want to take back. If it is still in your drafts, deleting it is trivially reversible. Once it has left your outbox, the message is on someone else\'s phone, and the fact that your app shows an unsend button is a promise about your screen, not about theirs. Whether you can really undo depends on where the thing has got to and whether you still have a handle on it.',
          'A rollback is a planned return to an earlier state. For it to be real, four things have to hold: that state still exists somewhere, you still have access to it, the method of getting back actually works, and you can do it when the moment comes. An undo button is evidence of none of these by itself. Keeping the original scan in a separate file preserves an option. Overwriting it and trusting the application to remember forever does not. When decisions come in a sequence, the value of trying something now depends on which doors remain open afterwards, and that is only knowable if you look.',
        ],
      },
      {
        title: 'Stage the choice before consequences spread',
        paragraphs: [
          'The fix for the booklet is to put a cheap, private stage before the expensive, public one. Look at the crop on screen before sending anything to print. Decide in advance what would make you go back: the essential linework is lost, say. Decide in advance how you go back: reopen the preserved original. Keep the old version until every check you care about has passed, not until the new one merely looks fine.',
          'Then write down what each stage makes permanent. After printing: paper and ink. After sharing: copies you no longer control. After asking a colleague to review: their time. None of this argues against experimenting. It argues against describing a change as harmless because its first command can be undone, when its third command cannot. Assess the whole sequence, not the first step.',
        ],
      },
      {
        title: 'Where undo stops working',
        paragraphs: [
          'The pattern generalises well beyond booklets. A website setting can be switched back, but the emails it sent while on have been read. A software rollback can reinstall the old version, but the data the new version wrote may be in a shape the old one cannot read. In each case the restorable thing, a setting or a binary, is sitting next to an unrestorable one, and the word reversible gets attached to the pair.',
          'Two habits. For any change you call reversible, finish the sentence: reversible for which part, by what method, until when? And before each stage of a sequence, ask what this stage makes permanent that the previous one did not. The answer tells you where the cheap experiments end and the real commitments begin.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Where restoration stops being complete',
      alt: 'Preserve the original, edit a separate copy, review privately, then print a proof with persistent material costs.',
      caption: 'Find the step where undo stops reaching: the last one. Everything before it can be walked back to the preserved original; the paper and ink of the proof cannot. The private review sits just before that line, which is exactly why it belongs there. Hypothetical workflow.',
      items: [
        { label: 'Preserve original', detail: 'Keep the state needed to return.' },
        { label: 'Edit a separate copy', detail: 'The source remains untouched.' },
        { label: 'Review privately', detail: 'Return if essential linework is lost.' },
        { label: 'Print a proof', detail: 'Paper, ink, and elapsed time cannot be restored by undo.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the booklet sequence as four steps on paper without touching any real file or sending anything to print. The exercise is the map, not the journey.',
        'Beside the first step, mark the preserved state and how you would reach it. Beside the third, write the trigger that would send you back: essential linework lost. A rollback with no trigger is a hope; one with a trigger is a plan.',
        'Beside the fourth step, list one thing that restoring the digital file would not undo. Then try a fifth step, sharing the proof with a colleague, and list what that one makes permanent too.',
      ],
      notice: 'Your description of going back now names what returns and what stays changed, step by step. The word reversible has been replaced by a list of specifics, which is what it always should have been.',
      troubleshooting: 'If your rollback plan is just press undo, ask what happens if the application has been closed, or the file has been sent, or the proof is already on someone\'s desk. Each question exposes a condition that undo was silently assuming.',
    },
    recall: {
      prompt: 'A website setting can be restored to its old value, but customers received messages during the time it was switched on. What is missing from the claim that the change is reversible?',
      hint: 'Restoring a configuration and reversing a communication are different jobs.',
      answer: 'The setting is the message still in drafts: trivially restorable. The emails are the message already on someone else\'s phone: sent, read, perhaps acted upon. Flipping the setting back changes nothing about them. A complete account of reversibility has to name the residual effects, what customers now believe, what they may have done, and what follow-up is permitted and appropriate, rather than stopping at the configuration screen. Reversible for the setting, by toggling it, at any time. Not reversible for the messages, by any method, ever.',
    },
    quiz: {
      question: 'A trial can restore the old settings, but it also changes stored information that the old version needs. Which check most directly tests whether rollback is feasible?',
      options: [
        'Verify that the old setting values can be selected again',
        'Measure how quickly the new version starts with its changed information',
        'Verify that preserved compatible state lets the old version actually resume',
      ],
      correctIndex: 2,
      explanation: 'Rollback means the old version running again, and that needs data it can read, so the only test that counts is whether a preserved compatible state exists and the old version actually resumes on it. Being able to select the old settings is the unsend button on your own screen: a promise about the menu, not the system. The new version\'s startup speed says nothing about going backward at all.',
    },
    takeaway: 'Reversible is never a one-word answer; say what returns, by what means, until when, and which consequences have already left your hands.',
    sourceNote: 'Stanford\'s decision-theory discussion of sequential choices informs this heuristic. The booklet workflow is illustrative, not an operational rollback procedure.',
  },
  {
    id: 'thinking-033',
    title: 'Find the estimate that flips the choice',
    outcome: 'Work out the exact point where one option stops being cheaper than another, so you know which uncertain number is actually worth pinning down.',
    scene: 'A commuter compares a monthly transit pass with per-ride fares under uncertain attendance.',
    sections: [
      {
        title: 'One attendance estimate hides the tradeoff',
        paragraphs: [
          'A monthly transit pass costs 600 rupees. A single ride costs 40. Both cover the same trips, with no other fees or differences. Next month you will ride somewhere between twelve and eighteen times; you do not know exactly, because your schedule is still being shuffled. Someone asks whether the pass is worth it, and the honest first answer is: it depends on a number I do not have.',
          'Watch what happens at the two ends. Twelve rides at 40 rupees is 480, so paying per ride saves you 120 against the pass. Eighteen rides is 720, so the pass saves you 120 instead. Same prices, same month, opposite verdicts, and the only thing that changed was a ride count you guessed. Picking one convenient estimate, say fifteen because it is in the middle, and running the numbers once would hide how easily the ranking flips. The uncertainty is not a nuisance to be averaged away. It is the decision.',
        ],
      },
      {
        title: 'Calculate the crossing point',
        paragraphs: [
          'Think of two taps filling a bucket at different rates, one starting with water already in it. There is one moment when the levels are equal; before it, one tap is ahead, and after it, the other. The pass is a bucket that starts at 600 and never rises. Per-ride fares start at zero and rise 40 with every trip. The question is where the lines cross.',
          'That is one division. Forty times the number of rides equals 600, so the crossing is at 600 divided by 40, which is fifteen rides. Below fifteen, single fares cost less. Above fifteen, the pass costs less. At exactly fifteen they tie. This kind of check, asking how the recommendation moves when an uncertain input moves, is called sensitivity analysis, and here it has delivered something concrete: a threshold sitting right inside your plausible range. One caution about that range. Twelve to eighteen is a planning guess about your calendar. It is not a statistical interval, and it does not mean every count between is equally likely.',
        ],
      },
      {
        title: 'Improve the estimate that matters',
        paragraphs: [
          'Now you know what to go and find out. Opening your actual calendar has a purpose it did not have five minutes ago: it could push your expected rides to one side of fifteen or the other. Count the days you must travel, add the ones you probably will, and see which side of the line you land on. If the answer is sixteen or seventeen, buy the pass; if thirteen, do not; if it hovers at fifteen, it barely matters, and either choice is fine.',
          'Compare that with a different month where every plausible schedule has you riding at least twenty times. There, refining the count from twenty-two to twenty-four would change nothing, and the calendar can stay shut. Real passes may carry route limits, refund rules, or the quiet convenience of never queuing for a ticket, so put any of those that matter into the comparison before treating price as the whole story. And if fares and attendance could shift together, say a price rise alongside a new job, compare those scenarios jointly. The useful output is a plain statement of when each option wins, not a forecast quoted to two decimal places.',
        ],
      },
      {
        title: 'What the threshold tells you',
        paragraphs: [
          'A threshold does two jobs at once. It tells you which option wins under which conditions, and it tells you whether your uncertainty even matters. If the crossing point lies far outside anything plausible, stop worrying and decide. If it lies inside your range, as fifteen does here, that is the signal to spend a few minutes improving the one estimate that could change your mind.',
          'Two habits. When a choice depends on a number you are guessing, find the value of that number at which the choice flips, before you spend any effort refining the guess. And resist the two shortcuts that hide sensitivity: picking the endpoint that gives the answer you wanted, and treating a midpoint as if someone had measured it. Both produce a confident recommendation standing on a number nobody checked.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Costs on both sides of fifteen rides',
      alt: 'At twelve rides individual fares cost 480 rupees versus a 600-rupee pass; at eighteen they cost 720 versus 600.',
      caption: 'Compare the two pairs of bars: at twelve rides the pass bar is taller, at eighteen it is shorter. The pass bar never moves; only the fares bar climbs, 40 rupees a ride, and it passes the pass somewhere between these two pictures, at fifteen. Invented prices.',
      unit: 'rupees per month',
      items: [
        { label: '12 rides: individual', detail: '12 x 40 = 480.', value: 480 },
        { label: '12 rides: pass', detail: 'Fixed monthly price.', value: 600 },
        { label: '18 rides: individual', detail: '18 x 40 = 720.', value: 720 },
        { label: '18 rides: pass', detail: 'Same fixed monthly price.', value: 600 },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        'Work out the per-ride totals for twelve, fifteen, and eighteen rides at 40 rupees each: 480, 600, 720. Writing all three, not just the middle one, is what shows you the ranking moves.',
        'Set each total beside the fixed 600-rupee pass and label the cheaper option: individual, tie, pass. The tie at fifteen is your crossing point; write 600 divided by 40 beside it so you can see where the number came from.',
        'Write one sentence on what calendar information could move you across fifteen, and one on which price assumption, a fare change or a hidden fee, would shift the threshold itself. The first is about your life; the second is about the model.',
      ],
      notice: 'Your recommendation now has a condition attached: pass if more than fifteen rides, fares if fewer. It no longer leans silently on one guessed count that happened to feel reasonable.',
      troubleshooting: 'If both options seem to rise and fall with ride count, look again at the pass. Its price is fixed in this example; only the per-ride total moves. One flat line and one rising line is what gives you a single crossing point.',
    },
    recall: {
      prompt: 'A print service charges a setup fee but a lower price per page than its competitor. You are not sure how many pages you will need. What should you find before committing?',
      hint: 'Find where the two total-cost lines meet.',
      answer: 'The crossing point. The setup fee is the water already in the bucket; the lower per-page price is the slower tap. Write each service\'s total as fee plus pages times rate, set the two totals equal, and solve for pages. That page count is the threshold. Then hold your plausible range up against it: if every realistic count sits on one side, the decision is made and you can stop estimating; if the threshold falls inside your range, that is the signal to firm up your page count before choosing. Check too whether quality, turnaround, or delivery differ, because a crossing point only compares the rows you put into it.',
    },
    quiz: {
      question: 'A tool only pays off if monthly maintenance takes fewer than three hours, and plausible estimates run from two to five hours. What is the useful next focus?',
      options: [
        'Improve the maintenance estimate, because its threshold lies inside the plausible range',
        'Use two hours, because it produces a clearer recommendation',
        'Treat the midpoint as measured and stop examining the range',
      ],
      correctIndex: 0,
      explanation: 'Three hours sits squarely inside two to five, so the uncertain estimate can flip the verdict either way, and that is exactly when refining it earns its cost. Choosing two hours picks the endpoint that flatters the answer you wanted. Calling three and a half a measurement dresses a guess as data; the honest move is to narrow the range, not to pretend it is already narrow.',
    },
    takeaway: 'Find the number at which the choice flips, check whether it lands inside what you actually believe, and spend your effort only on the estimate that could change your mind.',
    sourceNote: 'The inherited decision reference informs sensitivity reasoning. Fares, counts, and planning bounds are fictional, not actual transit prices or probability estimates.',
  },
  {
    id: 'thinking-034',
    title: 'Judge the choice using what was knowable then',
    outcome: 'Review a decision by the information available when it was made, not by the single result that happened to follow, so you learn the right lesson from both bad luck and good.',
    scene: 'A rehearsal-room booking fails after an unannounced building problem despite relevant advance checks.',
    sections: [
      {
        title: 'An unlucky result can follow a careful choice',
        paragraphs: [
          'You book a rehearsal room for your group. You check the dates are free, that the building is accessible for everyone, that the piano is in tune, and that the price is what was agreed. On the day, a pipe bursts somewhere upstairs and the building is closed. The rehearsal cannot happen there. On the way home, the thought arrives: I should have known. That was a stupid booking.',
          'It was not, and the thought is a trick of timing. The pipe failure was unannounced. Nobody at the venue knew; no notice existed to be read. The question that matters for judging the booking is what you could have known when you made it, and the answer is: everything you checked, and nothing about the pipe. A sensible choice under uncertainty can produce a bad result. Learning afterwards which of the possible futures arrived does not mean that future was visible beforehand, and rewriting the decision as foolish because the dice came up badly teaches you nothing you can use next time.',
        ],
      },
      {
        title: 'Good luck does not certify the process either',
        paragraphs: [
          'A driver runs a red light at an empty junction and gets home safely. Nobody sensible concludes that running red lights is fine; the empty junction was luck, and the next one may not be. Judging the driver by the arrival rather than the decision would reward exactly the behaviour most likely to go wrong eventually.',
          'The booking has the same shape in reverse. Picture a second group that books without checking anything, turns up, and finds the room open and ready. Their good outcome does not make skipping the checks a good procedure; it makes them the driver at the empty junction. So separate two questions. What was the quality of the process: which options were realistic, what mattered, what evidence was reasonably available, how were the remaining risks handled? And what was the result? The first is about the decision; the second is partly about luck. This is not a licence to excuse every failure. If a closure notice had been posted on the venue\'s site a week before you booked and you never looked, that is a real gap in the process, and the bad result is pointing straight at it.',
        ],
      },
      {
        title: 'Leave a record before the result teaches hindsight',
        paragraphs: [
          'The practical defence is a short note written before the outcome exists. For any choice above trivial, jot down the options you considered, the facts you checked, what you were still unsure about, and what would make you change course. Two lines each is plenty. Then, when the result arrives, read the note instead of your memory, because memory is rewritten by the ending.',
          'Hold the result up against the note and ask which of four things it reveals. A check you should have made and did not. A belief you held that turned out wrong. A process that needs changing. Or a risk you knew about, accepted, and that happened to land. Repeated outcomes still teach: if the same venue closes three times, that is information about the venue. The rule is not to ignore results but to stop letting one result stand in for the whole judgement. A fair review of the rehearsal might read: the booking was well supported; the closure was not knowable; a backup room would be worth lining up next time.',
        ],
      },
      {
        title: 'Why hindsight is so convincing',
        paragraphs: [
          'Once you know how a story ends, every earlier moment seems to point toward it. The burst pipe makes the building look obviously fragile; the open room makes the unchecked booking look obviously fine. The feeling of obviousness is manufactured entirely by the ending, and it is strongest precisely when it is least deserved.',
          'Two habits. Write the decision down before the result, so there is something to compare the ending against other than a memory it has already edited. And when reviewing anyone\'s choice, including your own, ask the one question that cuts through: what was available to know at the time? If the answer is nothing more than what they used, the result was weather, and weather is not a verdict.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Decision process and realized outcome differ',
      alt: 'A supported or weak booking process can each be followed by either an available or unavailable room.',
      caption: 'Read the rows first, then the columns. Rows are what you controlled: how well you checked. Columns are what the world did afterward. All four cells happen; the diagonal ones feel fair and the off-diagonal ones feel like lessons, but only the rows carry information about the decision. Fictional possibilities.',
      items: [
        { label: 'Supported / room available', detail: 'Relevant checks and a favorable result.' },
        { label: 'Supported / room unavailable', detail: 'An unannounced closure can still prevent rehearsal.' },
        { label: 'Weak / room available', detail: 'An unchecked booking can succeed through luck.' },
        { label: 'Weak / room unavailable', detail: 'Review whether an available warning was missed.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Pick a small choice coming up this week and write two realistic options and what matters to you about them, before you know how anything turns out. This is the note your future self will read instead of a rewritten memory.',
        'Add the facts you have checked, one thing you are still unsure about, and a sensible condition that would make you change your mind. The uncertainty line is the one hindsight will later pretend was obvious.',
        'Now imagine the disappointing version of the result and write down what evidence would tell a missed warning apart from a genuine surprise: was there a notice, a pattern, a source you skipped? Deciding that test now is what stops the ending from supplying the answer later.',
      ],
      notice: 'Your criteria for judging the decision exist on paper before the outcome does. Whatever happens, you will grade the choice against them rather than against how it felt to find out.',
      troubleshooting: 'If your only criterion is whether it worked, you have written down the empty junction. Add at least one fact that could have been checked at decision time, because that is the thing a review can actually act on.',
    },
    recall: {
      prompt: 'A passenger ignores a disruption notice posted that morning, takes the train anyway, and arrives on time. What does the successful trip establish?',
      hint: 'Separate the arrival from the information the choice left unused.',
      answer: 'It establishes that this particular train ran on time, and nothing beyond that. The passenger is the driver at the empty junction: a notice was available, they did not read it, and the result happened to be kind. If you graded the decision by the arrival you would conclude that ignoring notices works, which is exactly the lesson most likely to strand them next week. Grade it by what was knowable instead. The notice existed before departure; a sound process would have read it and weighed the alternatives. The on-time arrival is weather, and weather is not a verdict on the process.',
    },
    quiz: {
      question: 'A carefully checked venue cancels unexpectedly. Which finding most directly changes the assessment of the original decision process?',
      options: [
        'The cancellation is frustrating in hindsight',
        'A relevant closure warning was publicly available before booking but was overlooked',
        'A different venue happened to remain open that day',
      ],
      correctIndex: 1,
      explanation: 'A warning that existed before the booking and went unread is information that was knowable at decision time, so it genuinely moves the process from supported to weak. Frustration is a fact about the ending, not about what could have been checked. Another venue staying open is the same kind of luck as the empty junction and says nothing about how well the chosen venue was vetted.',
    },
    takeaway: 'Grade a decision by what could have been known when it was made, write that down before the result arrives, and treat the result as weather unless it points to a check you skipped.',
    sourceNote: 'The inherited decision-theory reference supports evaluating choices under uncertainty. The booking record is a practical heuristic and the venue events are fictional.',
  },
  {
    id: 'thinking-035',
    title: 'Write the workload assumptions beside the capacity estimate',
    outcome: 'Notice when a convenient rule of thumb has quietly stopped meaning what it used to, because the thing you count no longer costs what it used to cost.',
    scene: 'A map website replaces cheap cached lookups with more expensive custom route calculations.',
    sections: [
      {
        title: 'The request count stays the same',
        paragraphs: [
          'A map service handles 100 requests every second. For a long time each request has been cheap: a lookup in a cache that takes about two milliseconds of processor time. So the processor does 100 times 2, which is 200 milliseconds of work per second. In this simplified model a single core can supply 1,000 milliseconds of work per second, so the service is using a fifth of what it has. Plenty of room. Everyone relaxes.',
          'Then a new feature ships. Instead of returning cached results, the service now calculates custom routes for each request. The traffic chart on the wall looks exactly as it did last week: 100 requests per second, steady as ever. But each of those requests now takes twenty milliseconds of processor time instead of two. The chart that everyone trusts has not changed. The thing the chart used to stand for has changed tenfold.',
        ],
      },
      {
        title: 'The relationship behind the shortcut has changed',
        paragraphs: [
          'A restaurant kitchen plans its staffing by covers, the number of diners per evening. That works because a typical diner orders a typical amount of cooking. Switch the menu from sandwiches to a seven-course tasting menu and eighty covers is still eighty covers on the booking sheet, while the kitchen is doing many times the work. The number of diners was never the real measure. It was a stand-in for cooking time, and it worked only while the two moved together.',
          'Do the arithmetic for the new map workload. One hundred requests times twenty milliseconds is 2,000 milliseconds of processor work per second, against a budget of 1,000. The core is being asked to do two seconds of work every second. If requests keep arriving at that rate and nothing else changes, work piles up faster than it can be finished. A capacity rule built on requests per second was a shortcut that stood in for processor time, and it held only while every request cost roughly the same. The new mix has broken that link. Relabelling the chart or counting more carefully cannot restore it, because the missing information, cost per request, was never on the chart in the first place.',
        ],
      },
      {
        title: 'Keep a boundary with the model',
        paragraphs: [
          'The defence is to write the assumptions next to the rule, where they can be seen. Beside a request-count sizing guide: assumes cached lookups at about two milliseconds each; valid up to roughly 400 requests per second on one core; review if any request type becomes substantially more expensive or inputs grow. Now the rule carries its own expiry conditions, and the route feature would have tripped one of them on the day it was proposed.',
          'Be honest about how small this model is. It counts processor time and nothing else. Real capacity also depends on memory, on requests waiting in queues, on how many things can run at once, and on overheads this sketch ignores entirely. It is not a production sizing recommendation. But a model does not have to describe everything to be useful; it has to describe its own limits. The skill being practised is noticing the moment a familiar input stops standing for the same demand, before an old rule of thumb gets mistaken for a permanent fact about the system.',
        ],
      },
      {
        title: 'Where stale rules hide',
        paragraphs: [
          'Every rule of thumb is a relationship frozen at the moment it was written: this many of X costs about this much of Y. The rule survives in a spreadsheet or a habit long after the relationship has drifted. Pages per hour for a printer, until the job switches to full-colour photographs. Wall area for a painter, until the room is all fiddly trim. Photos per gigabyte, until everyone upgrades to a camera with three times the resolution.',
          'Two habits. When you inherit a sizing rule, ask what per-unit cost it silently assumes and write that assumption beside it. And when something about the workload changes, the first question is not how many but how much each: has the cost per unit moved? If it has, the count is now measuring the wrong thing, however steady it looks.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Same traffic, different processor demand',
      alt: 'Old workload needs 200 CPU milliseconds per second, new workload 2,000, against a single-core budget of 1,000.',
      caption: 'Compare the first two bars and remember that both represent exactly 100 requests per second. The traffic did not change; the cost of each request did, by ten times. The third bar is the ceiling, and only one of the workloads fits under it. Invented CPU-only model.',
      unit: 'CPU milliseconds per second',
      items: [
        { label: 'Cached lookups', detail: '100 x 2 = 200 CPU ms needed each second.', value: 200 },
        { label: 'Custom routes', detail: '100 x 20 = 2,000 CPU ms needed each second.', value: 2000 },
        { label: 'One-core budget', detail: '1,000 CPU ms available per second in the toy model.', value: 1000 },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen', 'Optional calculator'],
      steps: [
        'Work out the old demand, 100 requests times 2 milliseconds, and the new demand, 100 times 20. Write both as milliseconds of processor work per second. Doing both multiplications side by side is what makes the tenfold jump visible under an unchanged request count.',
        'Set each result against the 1,000-millisecond single-core budget and write fits or does not fit. No workload needs to be run; the comparison is the exercise.',
        'Write one sentence naming the assumption that failed, every request costs about the same, and one observable change that should have triggered a review of the request-count rule, such as a new feature that does real computation per request.',
      ],
      notice: 'You can explain, with two multiplications, why a traffic chart that never moved was describing a service about to fall over. The count was steady; the meaning of the count was not.',
      troubleshooting: 'If the numbers blur together, keep three quantities on separate lines: processor time per request, requests per second, and how long a user waits for a response. The first two multiply to give demand; the third is a consequence, and mixing them produces nonsense.',
    },
    recall: {
      prompt: 'A painter prices jobs by wall area and has done so profitably for years. She takes on a room with extensive detailed trim, panelling, and window frames. Why might the old estimate fail?',
      hint: 'Ask whether each square metre still needs about the same amount of work.',
      answer: 'Because area was never the real measure of labour; it was a stand-in that worked while rooms were mostly flat wall. A square metre of plain wall is a few roller strokes. A square metre of panelled trim is an hour of cutting-in with a small brush. The room\'s area may be ordinary while the hours are triple, exactly like eighty covers on a tasting-menu night. The fix is not a more precise tape measure. It is either a boundary on the old rule, flat rooms only, or an added factor that captures the cost per unit the area was silently assuming.',
    },
    quiz: {
      question: 'A storage estimate assumes a fixed average photo size. Which change most directly challenges it?',
      options: [
        'Photo count doubles while the file types and size distribution stay the same',
        'Storage used doubles when the count of otherwise similar photos doubles',
        'The collection shifts to much larger source images',
      ],
      correctIndex: 2,
      explanation: 'Larger source images change the cost per unit, the size of each photo, which is the assumption the whole rule rests on; the count can stay flat while storage demand soars. Doubling the count of similar photos is just more of the same, and the rule handles it. Storage doubling when similar photos double is the rule working exactly as designed.',
    },
    takeaway: 'Every rule of thumb hides a cost per unit; write that cost beside the rule, and when the workload changes, ask how much each before you ask how many.',
    sourceNote: 'The inherited SRE overload chapter discusses workload-dependent resource cost. All request costs are hypothetical and omit real-system capacity factors.',
  },
  {
    id: 'thinking-036',
    title: 'Balanced rates do not empty an existing backlog',
    outcome: 'Keep two kinds of number apart, how much is piled up and how fast things move, so you stop declaring a backlog solved when it has merely stopped growing.',
    scene: 'A community laundry has a pile of waiting towels after an earlier machine stoppage.',
    sections: [
      {
        title: 'The pile remains after work resumes',
        paragraphs: [
          'A community laundry had a machine break down for a few hours. By the time it is fixed, 24 towels are sitting in a pile waiting to be washed. New towels keep arriving at six an hour, and the repaired machine gets through six an hour. Someone looks at the two rates, sees that they match, and says the backlog is sorted.',
          'Wait an hour and count the pile. Six towels came in; six went out; 24 are still there. Wait another hour: still 24. Matching the arrival rate was a real achievement, because it stopped the pile from growing. It did nothing to the pile that already existed. The amount waiting and the speed of the work are two different quantities, and the sentence the backlog is solved quietly swapped one for the other.',
        ],
      },
      {
        title: 'Count what is there and what crosses the boundary',
        paragraphs: [
          'Think of a bath with the tap running and the plug half out. The water level is one kind of quantity: litres in the bath right now. The tap and the drain are another: litres per minute, in and out. If the tap and the drain run at the same rate, the level holds exactly where it is, whether that is an inch of water or a bath about to overflow. Equal flows mean a steady level, not an empty bath.',
          'The level is called a stock: an amount present at one moment, here towels waiting. The tap and the drain are flows: movement per unit of time, towels per hour. The bookkeeping is one line. The stock at the end of an interval equals the stock at the start, plus everything that arrived, minus everything that left. Note the unit discipline this demands. You cannot subtract six towels per hour from 24 towels; the units do not match. First multiply the hourly flow by the number of hours to get a count of towels, and only then can it be added to or taken from the pile.',
        ],
      },
      {
        title: 'Draining requires an excess of departures',
        paragraphs: [
          'To lower the water you open the drain wider than the tap. Suppose the laundry adds a second machine and completions rise to ten an hour while arrivals stay at six. Now four more towels leave each hour than arrive. After one hour the pile is 24 plus 6 minus 10, which is 20. After two hours it is 24 plus 12 minus 20, which is 16. At four towels an hour, the 24-towel pile is gone in six hours.',
          'Two cautions on that arithmetic. It stops at zero: once the pile is empty, the machines cannot finish towels that have not arrived, so do not extend the line into a negative pile. And real arrivals and real capacity both wobble, so six hours is the answer to the toy, not a promise about Tuesday. The practical point survives the caveats. A recovery claim should look at the stock itself, how many are still waiting, not only at whether the flows have come back into balance.',
        ],
      },
      {
        title: 'Why the swap is tempting',
        paragraphs: [
          'Rates are what dashboards show and what fixes change. Repairing the machine restored a rate, and watching that rate come back to normal feels like watching the problem end. The pile is less visible; nobody graphs it, and it only announces itself when someone asks why their towel is still not back. So the rate gets celebrated and the stock gets forgotten.',
          'Two habits. Whenever you hear a backlog is cleared, ask for the count, not the rate: how many are waiting now, compared with an hour ago? And whenever you combine a rate with a count, write the units down first. If a line of arithmetic has towels per hour on one side and towels on the other, it is wrong before you have done any sums.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'The waiting pile after two hours',
      alt: 'With six arrivals hourly, six completions leave 24 towels waiting after two hours; ten completions leave 16.',
      caption: 'Both bars started at 24 two hours ago. The left one has not moved at all despite the machine running flat out; matched flows hold a level steady. The right one dropped by eight, which is two hours of a four-towel surplus. Invented constant rates.',
      unit: 'towels waiting after two hours',
      items: [
        { label: '6 completed per hour', detail: 'Matches 6 arrivals per hour; no net drainage.', value: 24 },
        { label: '10 completed per hour', detail: 'Exceeds arrivals by 4 per hour; drains 8 in two hours.', value: 16 },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw 24 marks for the waiting towels. No laundry involved; the marks are the stock, and watching them is the whole exercise.',
        'For one imagined hour, add six new marks and cross out six. Count what remains uncrossed. It is 24, and it will be 24 again next hour; feel how little the balanced rates did to the pile.',
        'Start over with 24. For each of two hours, add six and cross out ten. Count sixteen. Then write the two units on separate lines, towels and towels per hour, and one sentence on why the arithmetic has to stop when the pile reaches zero.',
      ],
      notice: 'Matched flows left your pile exactly where it started, and only an excess of departures over arrivals moved it. You have seen the difference between a level and a rate on paper.',
      troubleshooting: 'If your count comes out wrong, check two things: that every crossed-out mark was counted as departed, and that you multiplied each rate by the number of hours before adding or subtracting it from the pile. A rate on its own cannot touch a stock.',
    },
    recall: {
      prompt: 'A library processes returned books exactly as fast as new returns arrive, but the returns trolley is already full. What has to happen for the trolley to clear?',
      hint: 'The existing stock needs a net outflow, not a balanced one.',
      answer: 'The drain has to run wider than the tap. Processing must exceed arrivals for a while, so that more books leave the trolley each hour than land on it, or some other accounted-for exit must take books off it, such as a second person shelving from the same trolley. Matching the arrival rate is genuinely useful: the trolley will not get any fuller. But it holds the level exactly where it is, and a full trolley held steady is still a full trolley. Ask how many books are on it now versus an hour ago; if the answer is the same, nothing has been cleared.',
    },
    quiz: {
      question: 'A queue contains 18 items. During the next hour, eight arrive and eight finish. With no other exits, how many remain?',
      options: ['18 items', '8 items', '0 items'],
      correctIndex: 0,
      explanation: 'Start with 18, add the eight that arrived, subtract the eight that finished: 18 remain. Eight is the flow for that hour, a count of movement, not the size of the queue. Zero is the bath-is-empty mistake: balanced flows hold the level steady, and the level was 18.',
    },
    takeaway: 'A backlog is a level, not a rate; matching the inflow stops it growing, and only a surplus of departures over arrivals, multiplied by time, makes it smaller.',
    sourceNote: 'The inherited reliability reference provides queueing context. Laundry counts and constant rates are an original simplified stock-flow illustration.',
  },
  {
    id: 'thinking-037',
    title: 'Trace how retries can keep a slowdown going',
    outcome: 'See how a sensible reaction to failure, trying again, can become the thing that keeps a system failing, and know which questions to ask about limits before it does.',
    scene: 'Photo uploads time out and repeated attempts add work to the same slow service.',
    sections: [
      {
        title: 'The response adds more of the original problem',
        paragraphs: [
          'A photo-sharing service hits a rough patch: saving uploads gets slow, perhaps because a storage disk is struggling. Users tap upload and wait. The confirmation does not arrive in time, so the app does the sensible thing and tries again. Every one of those second attempts lands on the same struggling service, which now has more work than before and responds even more slowly. More timeouts. More retries.',
          'Notice what has happened to the original fault. The storage problem may have been brief, or even fixed by now. It does not matter. The reaction to it has taken over as the thing keeping the service busy, long after people have finished choosing the photos they wanted to send. If you investigate only the disk, you will find the spark and miss the fire. The mechanism that sustained the overload was the perfectly reasonable behaviour of trying again.',
        ],
      },
      {
        title: 'Count attempts, not just intended actions',
        paragraphs: [
          'Picture a crowd leaving a stadium through one gate that has jammed slightly. People at the back cannot see why they have stopped, so they push forward. The pushing makes the jam at the gate worse, which makes more people push. Nobody is behaving badly. Each person is doing the obvious thing, and the sum of obvious things is a crush that outlasts whatever first slowed the gate.',
          'Put numbers on the upload version. Thirty users each make three attempts in total, the original plus two retries. That is ninety requests arriving at the service: thirty that anyone meant to send and sixty repeats of them. The counts are invented, and they are not ninety photos or ninety completed saves; they are ninety demands on a resource that was already behind. A loop in which an effect feeds back to strengthen its own cause is called amplifying feedback. Engineers also call it positive feedback, which is a technical term for the loop\'s shape, not a claim that anything good is happening. Retrying is a fine strategy for one client hitting one brief glitch. It is a different strategy entirely when thousands of clients add demand to a resource that cannot keep up.',
        ],
      },
      {
        title: 'Inspect the policies together',
        paragraphs: [
          'The designs that tame the loop have names: a limit on how many attempts are allowed, backoff that spaces retries further apart each time, and a retry budget that caps repeated work across the whole system. These are mechanisms to be fitted to a particular service, not magic numbers to copy from a blog post. And they have to be read together, because they stack.',
          'Suppose an outer layer allows three attempts per action, and each of those attempts calls an inner layer that itself allows three. In the worst case, one tap on upload can become nine inner attempts. That is three times three, counting first attempts, not three extra retries at each level. Layers written by different teams on different days routinely multiply like this without anyone noticing. So the questions for a service owner are concrete. How many attempts can one action produce across all layers? How are they spaced? What happens to an attempt whose acknowledgment never comes? Draw the loop on paper for a design review. Do not create load or fiddle with live retry settings to see what happens; the stadium crowd is not a place to run experiments.',
        ],
      },
      {
        title: 'Why the loop is hard to see',
        paragraphs: [
          'Each retry is locally sensible, and local sense is what everyone checks. The app did the right thing; the service did the right thing; the user did the right thing. The failure lives in the loop between them, where no single component can see it, and where the obvious diagnosis is still the disk that started it.',
          'Two habits. When something slows down, ask what the clients do in response and where that response lands, because the response is part of the system. And when you review any retry logic, multiply the layers before you approve the numbers; three sounds modest until it meets another three.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'The slowdown feeds back into itself',
      alt: 'Slow saving causes late acknowledgments, retries add work, and increased load feeds back to slower saving.',
      caption: 'Follow the arrows all the way round and notice there is no exit: the fourth box points back to the first. That returning arrow is the whole lesson. Thirty clients making three attempts each put ninety requests into this circle, sixty of them repeats. Hypothetical loop.',
      items: [
        { label: 'Saving slows', detail: 'The service cannot respond as quickly.' },
        { label: 'Acknowledgments arrive late', detail: 'Clients reach their waiting limit.' },
        { label: 'Clients retry', detail: 'More attempts reach the same service.' },
        { label: 'Load increases', detail: 'Extra work can make saving slower again.' },
      ],
      arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 }],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Draw the four stages of the upload loop and connect them with arrows, including the one from increased load back to slower saving. Without that last arrow you have drawn a chain; with it you have drawn the thing that keeps going on its own.',
        'Multiply thirty clients by three attempts and split the ninety into thirty originals and sixty repeats. Write beside the sixty: this is the work nobody asked for. That line is what the service is drowning in.',
        'Mark one point on the loop where a bounded policy, a cap, a backoff, a budget, could weaken the feedback, and write one question you would put to the owner of that component about how attempts are limited and spaced.',
      ],
      notice: 'Your diagram shows how the response to a failure became a second cause of the failure, and you can point to the exact arrow that closes the circle.',
      troubleshooting: 'If your arrows stop at clients retry, you have drawn the stadium crowd pushing and forgotten the gate. Add what those retries do when they arrive at the shared service, and draw the arrow back to the start.',
    },
    recall: {
      prompt: 'People keep resubmitting a booking form because the confirmation page is slow to appear. What should the designer look at beyond the initial delay?',
      hint: 'Follow what each repeated submission does once it reaches the server.',
      answer: 'Follow the loop. Each resubmission is another request to the same slow system, so the question is what that request costs: does it trigger a fresh booking attempt, a duplicate record, another payment authorisation, another email? If so, the users pushing the button are the stadium crowd pushing toward the gate, and their reasonable impatience is adding exactly the work that makes the confirmation slower. The designer should inspect how repeated submissions are recognised and deduplicated, whether the button disables itself, and whether the first attempt can be acknowledged quickly even if processing takes longer. The initial delay started it; the resubmission policy is what decides whether it ends.',
    },
    quiz: {
      question: 'An outer client makes two attempts in total; each attempt can trigger up to four inner attempts. If nothing succeeds early, what is the maximum number of inner attempts?',
      options: ['6 attempts', '8 attempts', '4 attempts'],
      correctIndex: 1,
      explanation: 'Each of the two outer attempts can produce four inner ones, so the layers multiply: two times four is eight. Six adds the two limits together, which is not how nested retries compose. Four looks only at the inner layer and forgets that the outer one will run it twice.',
    },
    takeaway: 'Put the reaction to failure inside your picture of the system, count attempts rather than intentions, and multiply the retry limits across layers before you trust any of them.',
    sourceNote: 'The inherited SRE chapters discuss retries and cascading overload. Attempt counts are fictional limits for reasoning, not recommended retry settings.',
  },
  {
    id: 'thinking-038',
    title: 'Calculate what the faster stage leaves unchanged',
    outcome: 'Work out how much faster a whole job gets when only one part of it speeds up, and see why even an infinitely fast part has a hard ceiling.',
    scene: 'A video export has separate reading, encoding, and writing stages.',
    sections: [
      {
        title: 'Three times faster at which part?',
        paragraphs: [
          'Exporting a video takes ten minutes. Break it down and the time splits into three stages that run one after another. Two minutes reading the source files. Six minutes encoding. Two minutes writing the finished file to disk. For this example the stages do not overlap and the job itself does not change. Then a new encoder appears, advertised as three times as fast.',
          'The tempting arithmetic is ten divided by three: a little over three minutes for the whole export. But the encoder only touches encoding. Reading was two minutes before and is two minutes after. The new encoder never sees those files being read. Writing is the same story. A speedup for one component and a speedup for the whole job are different numbers. The advertisement, quite honestly, only ever gave you the first.',
        ],
      },
      {
        title: 'Rebuild the total from the parts',
        paragraphs: [
          'Think of a journey to the airport: ten minutes walking to the station, sixty on the train, ten on the shuttle bus. A new express train is three times as fast. Nobody expects the whole trip to take twenty-seven minutes. The walk is still ten and the shuttle is still ten. Only the middle leg shrinks. The journey goes from eighty minutes to forty. That is a fine improvement, and it is nowhere near three times faster overall.',
          'Do the export the same way. New encoding time: six divided by three, two minutes. Now add back what did not change. Two reading plus two encoding plus two writing is six minutes. The whole-job speedup is the old time over the new time, ten over six, about 1.67 times. You saved four minutes, not two thirds of the job. This is the reasoning usually credited to Amdahl. The part you did not speed up stays in the total. The bigger that unchanged part is, the less a dramatic improvement elsewhere can show through. A threefold gain in one stage became a 1.67-fold gain in the task, because the other stages were sitting there the whole time.',
        ],
      },
      {
        title: 'Even the imagined perfect encoder has a floor',
        paragraphs: [
          'Push the thought experiment to its limit. Suppose the encoder were infinitely fast and encoding took zero minutes. Reading and writing still take four minutes between them. So the best the export can ever do is four minutes, a ceiling of ten over four, or 2.5 times faster. No encoder, however miraculous, breaks through that ceiling. The ceiling is made of the stages the encoder cannot touch.',
          'That 2.5 is a property of the model, not a forecast about any real encoder. A real one might add overhead. It might produce a different file size that changes the write time. It might overlap stages in ways this sketch forbids, or shift the bottleneck somewhere new. So measure the real workflow before the arithmetic is used to justify buying anything. The first question to ask of any proposed speedup is not how much faster is the component. It is which fraction of my job does it change, and what is left untouched.',
        ],
      },
      {
        title: 'Where the untouched fraction hides',
        paragraphs: [
          'The error is common because component speedups are what vendors can measure and advertise. The fraction of your job that component occupies is something only you know. A twentyfold faster database query is thrilling until you notice the query was five percent of the page load. A faster oven does little for a recipe that is mostly chopping.',
          'Two habits. Before you get excited about a multiplier, time the stages of your actual job and find the fraction the improvement touches. The untouched fraction is your ceiling. And when a speedup is still worth having, say so in whole-job terms, four minutes saved on a ten-minute export. Do not repeat the component figure as if it described the task.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Total export duration, not encoder speed alone',
      alt: 'Original export ten minutes, three-times-faster encoding six minutes, and instantaneous encoding floor four minutes.',
      caption: 'Look at the bottom of each bar: four minutes of reading and writing are present in all three and never shrink. The encoder only ever worked on the part above that line, which is why the third bar, with encoding gone entirely, still stands four minutes tall. Invented fixed sequential job.',
      unit: 'minutes per fixed export',
      items: [
        { label: 'Original export', detail: '2 reading + 6 encoding + 2 writing.', value: 10 },
        { label: 'Encoding three times faster', detail: '2 reading + 2 encoding + 2 writing.', value: 6 },
        { label: 'Instant encoding limit', detail: '2 reading + 0 encoding + 2 writing.', value: 4 },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen', 'Calculator'],
      steps: [
        'Write the three stages with their durations, 2, 6, and 2, and add them to confirm ten. Seeing the job as three separate pieces is the step the advertisement skips.',
        'Change only the six to two, leave the other two numbers exactly as they are, and add again: six. Divide ten by six for the whole-job speedup, about 1.67. Compare that with the three on the box.',
        'Now set encoding to zero and add: four minutes, the floor. Write one real-world assumption the model makes that you would want to check, such as whether the stages really cannot overlap or whether the new encoder changes the output size.',
      ],
      notice: 'The whole-job multiplier on your page is smaller than the component multiplier, and you can point to the exact four minutes that explain the gap.',
      troubleshooting: 'If you got three and a third minutes, you divided the whole job by the encoder speedup. Only the encoding stage gets divided; reading and writing are the walk and the shuttle, and the express train never carries them.',
    },
    recall: {
      prompt: 'Sending a parcel involves packing it, its travel time, and the recipient collecting it. What limits the benefit of making packing alone much faster?',
      hint: 'Hold the other two stages fixed and ask what remains.',
      answer: 'The travel and the collection. Suppose packing is an hour, travel a day, and collection half a day; packing is a small slice of the total. Make packing instant and the parcel still spends a day in transit and half a day waiting to be collected, so the whole process barely moves. That untouched day and a half is the ceiling, exactly like the four minutes of reading and writing. A faster packer is only worth much if packing was a large fraction of the total, or if the change also somehow shortens travel or collection, which a packing improvement on its own does not.',
    },
    quiz: {
      question: 'A fixed twelve-minute job includes a three-minute stage that is made three times faster, with everything else unchanged. What is the new total?',
      options: ['4 minutes', '9 minutes', '10 minutes'],
      correctIndex: 2,
      explanation: 'Nine minutes of the job were never touched and stay at nine; the three-minute stage becomes one minute; nine plus one is ten. Four divides the whole job by three, which speeds up stages the improvement never reached. Nine removes the stage entirely, as if it had become instant rather than three times faster.',
    },
    takeaway: 'Only the stage you improved gets faster; add the unchanged stages back, and remember that they alone set the ceiling no improvement to that one stage can pass.',
    sourceNote: 'The inherited Amdahl reference supplies the fixed-workload principle. Export times and sequential-stage assumptions are fictional, not benchmark results.',
  },
  {
    id: 'thinking-039',
    title: 'Look for the cause that can disable both copies',
    outcome: 'Understand why two backups are not twice as safe if one failure can take out both, and how to count that shared risk honestly.',
    scene: 'Two photo-backup drives depend on the same powered hub during a retrieval session.',
    sections: [
      {
        title: 'Two drives still share a route to failure',
        paragraphs: [
          'Your photos live on two external drives, which feels prudent. Both plug into one powered hub, which plugs into your laptop. If one drive refuses to mount some evening, the other is right there. Two copies, two chances. The arithmetic of safety seems to be on your side.',
          'Now imagine the hub\'s power supply dies. Both drives are perfectly healthy and neither one can be reached, because the only road to them runs through the hub. The question here is not whether your files are destroyed; they are fine, sitting on two good disks. The question is whether you can get at them tonight, and the answer is no, twice over. Two drive icons on a desk do not add up to two independent chances of success. Independence is a fact about what can cause each failure. Shared power, a shared cable, shared software, or one mistake that hits both copies can turn two chances into one.',
        ],
      },
      {
        title: 'Separate the shared failure from independent failures',
        paragraphs: [
          'Think of two spare keys. One is with a neighbour, the other under a flowerpot. If the neighbour is out, the flowerpot still works; those failures are independent. Now suppose both spare keys are in the same lockbox on the wall, and you forget the lockbox code. Two keys, one failure, zero way in. The lockbox is a shared dependency, and it quietly sits above both of your backups.',
          'Put toy numbers on the hub to see how much it matters. Say the hub fails during a given session 5 percent of the time, and when it works, each drive independently fails to read 10 percent of the time. Pretend the hub does not exist and the arithmetic looks lovely: both drives failing is 0.1 times 0.1, which is 0.01, one session in a hundred. Now include the hub. You lose every session where the hub fails, 5 percent, plus the sessions where the hub works but both drives fail, 0.95 times 0.01, which is 0.0095. Total: 0.0595, almost 6 percent. The shared hub alone contributes five times as much risk as both drives together. These probabilities are invented to show the shape of the calculation, not to describe any real hardware.',
        ],
      },
      {
        title: 'Redundancy answers a particular failure model',
        paragraphs: [
          'The second drive is still worth having. It protects against the failures that are genuinely separate, one disk dying on its own, and in this toy model it cuts that risk from 10 percent to 1. What it does not do is protect against anything upstream of both drives, and no number of additional drives on the same hub would change that. The fix for a shared dependency is to remove the sharing, say by putting the second drive on a different connection or in a different building, not to add more copies below it.',
          'So before counting copies, draw what they all rely on and ask which causes a different arrangement would actually remove. The same logic applies to online services: two replicas behind one load balancer share the balancer; two servers in one rack share the rack\'s power. And check that the survivor can carry the load, because a healthy replica swamped by the traffic of its dead twin is a different kind of failure. Never attach an availability percentage to a count of copies without a model of what they share. This exercise is a diagram and a sum; it does not ask you to unplug anything or put real photos at risk to find out.',
        ],
      },
      {
        title: 'Where shared causes hide',
        paragraphs: [
          'Shared dependencies are hard to see because they are usually boring: a power strip, a cable, a login, a software update that both copies accept at the same time. Nobody thinks of the hub as part of the backup. It is infrastructure, and infrastructure is invisible until it fails and takes everything with it.',
          'Two habits. For any pair of things that are supposed to protect each other, trace the path from you to each one and mark every point where the two paths touch; each touch is a lockbox. And when someone multiplies two small failure probabilities to get a tiny one, ask what both items have in common before you believe the product.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'A shared hub sits above both copies',
      alt: 'One powered hub connects to drive A and drive B, creating a shared retrieval dependency.',
      caption: 'Start at the top box and notice that both arrows leave from it: that single box is the lockbox holding both keys. Cover it with your thumb and neither drive can be reached, however healthy they are. Toy model: hub 5 percent, each drive 10 percent given a working hub, total unavailability 5.95 percent.',
      items: [
        { label: 'Shared powered hub', detail: 'Its failure blocks this retrieval path to both drives.', x: 50, y: 20, shape: 'box' },
        { label: 'Drive A', detail: 'Independent 10% failure only conditional on a working hub.', x: 22, y: 76, shape: 'object' },
        { label: 'Drive B', detail: 'Independent 10% failure only conditional on a working hub.', x: 78, y: 76, shape: 'object' },
      ],
      arrows: [{ from: 0, to: 1 }, { from: 0, to: 2 }],
    }],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Pen', 'Calculator'],
      steps: [
        'Draw the hub above the two drives with an arrow to each, without touching your real backups. The drawing is the exercise, and the thing to notice is that both arrows come out of one box.',
        'Work out the chance both drives fail when the hub is working: 0.1 times 0.1, which is 0.01. This is the only part of the risk that having two drives actually reduces.',
        'Weight that by the 0.95 chance the hub is working, giving 0.0095, then add the 0.05 for sessions where the hub itself fails. Total 0.0595, or 5.95 percent. Compare it with the 1 percent you would have claimed by ignoring the hub.',
        'Write one line stating what the 5.95 percent describes: the chance you cannot reach your photos during a session, not the chance they are lost. The two are different, and the second is much smaller.',
      ],
      notice: 'The shared route pushed the real figure to nearly six times the independent-drives estimate, and almost all of that came from one box both arrows pass through.',
      troubleshooting: 'If you got 6 percent by adding 5 and 1, you counted the both-drives case in every session. It only happens in sessions where the hub works, so multiply it by 0.95 first; the difference is small here and the habit matters when the numbers are bigger.',
    },
    recall: {
      prompt: 'A building has two lifts, and someone proposes multiplying their individual failure rates to get the chance both are out of service at once. What should be checked first?',
      hint: 'Look for a cause that can stop both lifts in the same moment.',
      answer: 'Look for the lockbox. Both lifts run on the building\'s power supply, so a power cut stops both at once regardless of how reliable each one is on its own, and the product of the two individual rates says nothing about that. The same goes for a shared control system, a shared maintenance contractor who takes both offline together, or a fire alarm that parks both lifts. Also check how each individual rate was measured: if it already includes power cuts, multiplying would double-count them in one direction while missing the correlation in another. Two separate lift shafts prove the lifts are physically distinct. They do not prove the failures are independent.',
    },
    quiz: {
      question: 'Two service replicas share one upstream dependency. Which model most directly improves on multiplying their individual failure rates?',
      options: [
        'Include upstream failure and conditional replica failures without double-counting the shared cases',
        'Multiply rates measured only when the upstream works and apply that result to all sessions',
        'Average their failure rates and call that the probability both fail',
      ],
      correctIndex: 0,
      explanation: 'The shared upstream needs its own term, added to the both-replicas case weighted by the chance the upstream is working, which is exactly the hub calculation. Using only working-upstream rates everywhere leaves out the lockbox entirely, the largest risk in the example. Averaging two individual rates produces a number with no meaning as a joint probability at all.',
    },
    takeaway: 'Before multiplying failure chances, draw what the copies share; a dependency above both of them is one failure wearing two labels, and more copies below it buy nothing.',
    sourceNote: 'The inherited reliability and statistics references support dependence modeling. All probabilities are artificial, conditional assumptions; no real availability claim is made.',
  },
  {
    id: 'thinking-040',
    title: 'Let the units check the estimate',
    outcome: 'Carry units through a calculation so they catch the mistake for you, then remember that matching units is the start of a good estimate and not the end.',
    scene: 'A filmmaker estimates transferring a 600-megabyte clip over a connection rated in megabits per second.',
    sections: [
      {
        title: 'The two megas count different things',
        paragraphs: [
          'You have a 600 MB video clip to send and a connection advertised at 40 Mb/s. Six hundred divided by forty is fifteen, so you tell the editor it will take fifteen seconds. It takes much longer, and the editor is annoyed, and the arithmetic was perfectly correct. The problem is that 600 and 40 were never counting the same thing.',
          'MB with a capital B means megabytes. Mb with a small b means megabits. A byte is eight bits, so the two look almost identical on the page and differ by a factor of eight in meaning. Dividing bytes by bits per second gives you a number with no sensible unit at all, which is why it felt like seconds and was not. Fix it before dividing: 600 megabytes is 600 times 8, which is 4,800 megabits. Now both sides of the sum are in bits, and the shared mega prefix cancels cleanly, since both are decimal here.',
        ],
      },
      {
        title: 'Cancel the unit you are dividing by',
        paragraphs: [
          'If a recipe wants 500 grams of flour and your scoop holds 50 grams, you need ten scoops, and the grams cancel out to leave a plain count. Nobody would divide 500 grams by a scoop measured in millilitres and expect the answer to mean anything. Units are not decoration on a number; they are what the number is counting, and division only makes sense when the things being counted match.',
          'So divide 4,800 megabits by 40 megabits per second. The megabits cancel, leaving seconds, and the ideal answer is 120 seconds, two minutes rather than fifteen seconds. Carrying units through arithmetic like this is called dimensional analysis, and its whole value is that a wrong setup refuses to produce the unit you wanted. Try to divide a packet count by a rate in bytes per second and no seconds appear until you supply bytes per packet; the missing information announces itself. Watch for one more trap: decimal prefixes like megabyte, a million bytes, versus binary ones like mebibyte, 1,048,576 bytes. They differ by about 5 percent and show up in different tools without warning. A plausible-looking number can hide the wrong quantity; the unit line is where it gets caught.',
        ],
      },
      {
        title: 'Correct dimensions do not remove overhead',
        paragraphs: [
          'Two minutes is the ideal: every bit of the advertised rate carrying your clip, nothing else. Real connections spend some of their capacity on addressing, error checking, and acknowledgments, and share the rest with whatever else is happening. Suppose the throughput actually available to your clip is 32 Mb/s. Then 4,800 divided by 32 is 150 seconds, two and a half minutes.',
          'Both calculations are dimensionally correct. Both produce seconds. They differ because they assume different things about how much of the pipe you actually get, and that assumption is where the real estimate lives. Transfers also have startup delays, rates that wander, retransmissions when packets are lost, and disks at either end that may be slower than the network. Matching units is a necessary check: it stops you quoting fifteen seconds. It is not proof that the model contains everything that matters. Before handing anyone a planning number, say which rate you used, the figure on the box or a rate you have actually observed, and let them judge the gap.',
        ],
      },
      {
        title: 'What the units can and cannot catch',
        paragraphs: [
          'Units are a free, mechanical check that catches a whole category of error: mismatched quantities, skipped conversions, dividing when you meant to multiply. They cost nothing but the discipline of writing them down. What they cannot catch is a wrong assumption expressed in the right units; 40 and 32 megabits per second are both honest unit labels on two different beliefs about the connection.',
          'Two habits. Write the units on every quantity, including the intermediate ones, and do not accept an answer whose unit is not the one you set out to find. And once the units pass, ask the separate question: which of these numbers is a measurement and which is a hope? The box says 40. Your last three transfers say 32. Only one of those is evidence.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Same clip, two stated throughput assumptions',
      alt: 'A 600 decimal MB clip takes 120 seconds at 40 Mb/s and 150 seconds at 32 Mb/s payload throughput.',
      caption: 'Both bars come from the same 4,800 megabits and both have correct units; the gap between them is entirely a different assumption about how much of the connection the clip actually gets. Neither bar includes the fifteen-second mistake, because the conversion to bits happened first. Invented constant rates.',
      unit: 'seconds for a 600 decimal MB clip',
      items: [
        { label: 'Ideal 40 Mb/s', detail: '4,800 / 40 = 120 seconds.', value: 120 },
        { label: 'Payload 32 Mb/s', detail: '4,800 / 32 = 150 seconds.', value: 150 },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen', 'Calculator'],
      steps: [
        'Write 600 MB and 40 Mb/s, and underneath each spell the unit out in full: megabytes, megabits per second. The moment the words are written, the mismatch is impossible to miss.',
        'Convert the clip: 600 megabytes times 8 bits per byte is 4,800 megabits. Then divide by 40 megabits per second and cross out the megabits on the top and bottom. What survives the crossing-out is seconds, and the answer is 120.',
        'Repeat with 32 megabits per second to get 150 seconds. Then write one sentence on why both answers have perfect units and still disagree: they rest on different claims about usable throughput, and only one of those claims came from measurement.',
      ],
      notice: 'Your estimate is a duration with its conversion shown and its throughput assumption named. Anyone can check the arithmetic and anyone can argue with the assumption, which is exactly as it should be.',
      troubleshooting: 'If you got fifteen seconds, you divided megabytes by megabits per second without converting. Write the units beside the numbers and try to cancel them; they will not cancel, and that refusal is the check working.',
    },
    recall: {
      prompt: 'A container needs three litres and a steady tap supplies six litres per minute. What duration does the unit calculation give, and what does it leave out?',
      hint: 'Litres divided by litres per minute leaves minutes.',
      answer: 'Three litres divided by six litres per minute: the litres cancel and half a minute remains, thirty seconds. The units came out right, which means the setup was right, and that is the scoop-and-flour check doing its job. What it leaves out is everything the model assumed: that the tap really delivers six litres a minute from the first instant, that nothing splashes out, that the flow does not drop when someone runs a shower upstairs. Thirty seconds is the ideal, like the 120-second transfer. The units confirm the shape of the estimate; they say nothing about whether the tap keeps its promise.',
    },
    quiz: {
      question: 'What is the ideal duration for a 300 decimal MB file at a constant 40 Mb/s, ignoring overhead?',
      options: ['7.5 seconds', '60 seconds', '480 seconds'],
      correctIndex: 1,
      explanation: 'Convert first: 300 megabytes times 8 is 2,400 megabits; divide by 40 megabits per second and the megabits cancel to leave 60 seconds. The 7.5 answer divides bytes straight by bits per second and skips the conversion, which is the fifteen-second mistake again. The 480 answer converts the two sides in opposite directions, turning the rate into 5 megabytes per second and dividing bits by it.',
    },
    takeaway: 'Write the units on everything and refuse any answer whose unit is wrong; then, once the units agree, ask which of your numbers was measured and which was printed on the box.',
    sourceNote: 'OpenStax dimensional analysis supplies the principle. File sizes and rates are invented constant-rate examples, not measurements or bandwidth promises.',
  },
]