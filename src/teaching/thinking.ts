import type { LessonGuide } from './types'

// Original scenarios and illustrations. Linked references are inherited by lesson ID.
export const thinkingGuides: LessonGuide[] = [
  {
    id: 'thinking-001',
    title: 'Say exactly what would change the journey',
    outcome: 'Turn a vague improvement claim into a defined causal comparison.',
    scene: 'A proposed bus-priority signal at Elm junction during the morning commute.',
    sections: [
      {
        title: 'Which improvement are we discussing?',
        paragraphs: [
          'A fictional transport notice says that giving buses priority at Elm junction will improve the morning journey. That could mean shorter trips, fewer late arrivals, or less crowding. Those outcomes are related, but they are not interchangeable. Before deciding whether the proposal worked, choose the question. Suppose you care about average journey time from the depot to the station for scheduled buses leaving between seven and nine on weekday mornings. Now the claim names something that an observer could actually measure.',
        ],
      },
      {
        title: 'Two actions in the same week',
        paragraphs: [
          'The intervention is the action being evaluated: enable the specified bus-priority signal plan. Its alternative is to retain the existing plan. Imagine the same eligible journeys during the same future week under each action. The difference between their average durations is the effect you want to know. The unobserved alternative is called a counterfactual. It is not a prediction that last week must repeat. Rain, school holidays, and roadworks could change journey times even if nobody touched the signals.',
        ],
      },
      {
        title: 'A comparison is a substitute',
        paragraphs: [
          'Only one signal plan can operate for a particular journey. You therefore need a defensible substitute for the missing alternative, perhaps a carefully designed comparison across suitable periods or routes. Merely observing quicker trips after installation cannot separate the signal effect from quieter traffic.',
          'Write the comparison before looking at results: priority versus existing timing, eligible morning buses, depot-to-station duration, specified weekdays. If someone later reports fewer complaints instead, recognize that as a different outcome. A precise question does not prove causation, but it stops the evidence from silently answering a different question.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'The two journeys being compared',
      alt: 'Two alternative signal plans for the same eligible bus journeys and observation week.',
      caption: 'Fictional proposal. Hold the population, route, outcome, and week fixed; change only the specified signal plan.',
      items: [
        { label: 'Priority plan', detail: 'Eligible morning buses; depot-to-station journey minutes.' },
        { label: 'Existing plan', detail: 'The same journeys and week under the alternative action.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the claim: the new signal makes bus travel better. Circle the undefined word better.',
        'Replace it with depot-to-station journey minutes, and specify the morning buses and observation week.',
        'Write both signal plans as alternatives. Add one reason last week might be an imperfect comparison.',
      ],
      notice: 'Your revised sentence describes an action contrast rather than a general hope about transport.',
      troubleshooting: 'If the outcome is still broad, name the start and finish of one measurement.',
    },
    recall: {
      prompt: 'A library says a new booking form reduces frustration. What comparison would make that claim testable?',
      hint: 'Choose an action, alternative, eligible users, outcome, and period.',
      answer: 'Compare the new and existing forms for eligible reservations during a defined period, using a specified outcome such as abandoned attempts. Earlier reservations are not automatically the same-period counterfactual.',
    },
    quiz: {
      question: 'A shop installs clearer collection signs during a quiet week. Which question targets their causal effect?',
      options: [
        'Were collection times shorter than during the busiest previous week?',
        'What would these collections have taken this week with the old signs?',
        'Did people who noticed the signs report shorter collection times?',
      ],
      correctIndex: 1,
      explanation: 'The second question holds the target period and collections fixed. Earlier traffic or who noticed the signs can differ for reasons unrelated to the intervention.',
    },
    takeaway: 'Define the action and its alternative before choosing evidence about an effect.',
    sourceNote: 'Causal Inference: What If supplies the counterfactual framework. The transport proposal is fictional, not evidence for signal priority.',
  },
  {
    id: 'thinking-002',
    title: 'Find what caused both the response and the result',
    outcome: 'Identify a preexisting common cause that can distort a comparison.',
    scene: 'Sunny terrace planters receive extra watering but still show more wilting.',
    sections: [
      {
        title: 'The wetter pots look worse',
        paragraphs: [
          'Imagine a terrace with planters in sun and others under shade. The gardener gives extra water to the exposed planters because they dry faster. Later, those planters show more wilting. A photograph caption says that extra watering caused the problem. But the watering was not assigned without regard to the plants. Their exposure influenced the decision before anyone inspected the later leaves. Comparing the two watering groups also compares different growing conditions, even if every planter has the same label and size.',
        ],
      },
      {
        title: 'A common cause makes two arrows',
        paragraphs: [
          'In this proposed explanation, stronger sun exposure increases the need for watering and contributes to moisture loss that can lead to wilting. Draw an arrow from exposure to extra watering and another from exposure to later wilting. Exposure is a possible confounder: a prior factor that helps cause both treatment assignment and the outcome. The observed association therefore combines any effect of watering with differences that were already present. This does not establish that more water is harmless. It shows why this comparison cannot settle that question.',
        ],
      },
      {
        title: 'Compare before choosing adjustments',
        paragraphs: [
          'A more useful analysis would first consider comparable exposure, plant varieties, soil, and starting condition. Those factors need a causal reason for inclusion, not just a column in a spreadsheet. For example, moisture measured after watering could already reflect what the water changed; treating it like an unchanged background characteristic could erase part of the effect. On paper, ask what made the gardener choose extra water and whether that same factor could affect the leaves. That question exposes a specific comparison problem without prescribing a real watering experiment.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'Exposure is a proposed common cause',
      alt: 'Sun exposure points separately to extra watering and later wilting.',
      caption: 'Hypothetical causal sketch, not a plant diagnosis. Follow the two arrows from the earlier exposure.',
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
        'Copy three labels: earlier sun exposure, extra watering, later wilting.',
        'Draw the two arrows from exposure, explaining beside each how the connection could work.',
        'Write one background condition to compare and one post-watering measurement to treat cautiously.',
      ],
      notice: 'One earlier factor explains both group assignment and a route to the outcome.',
      troubleshooting: 'If your factor only affects the leaves, also ask why the gardener selected that group.',
    },
    recall: {
      prompt: 'Students seeking extra tutoring have lower final scores. What earlier factor could distort this comparison?',
      hint: 'Ask what prompted students to seek help.',
      answer: 'Starting difficulty could increase both tutoring uptake and the chance of a low final score. Compare relevant starting conditions before attributing the difference to tutoring itself.',
    },
    quiz: {
      question: 'Older bicycles receive more servicing and have more breakdowns. Which factor is the clearest potential confounder?',
      options: [
        'The repair receipt printed after servicing',
        'The number of components replaced during servicing',
        'Wear accumulated before the servicing decision',
      ],
      correctIndex: 2,
      explanation: 'Prior wear can affect both servicing decisions and breakdowns. Replacement counts may be consequences of servicing, while the receipt is a record rather than the proposed common cause.',
    },
    takeaway: 'An association can reflect the reason treatment was selected, not just what treatment did.',
    sourceNote: 'The inherited causal-inference reference explains confounding. The terrace mechanism is hypothetical and does not diagnose real plants.',
  },
  {
    id: 'thinking-003',
    title: 'Put the response on the timeline',
    outcome: 'Separate time that prompted an intervention from time the intervention could affect.',
    scene: 'A bicycle repair specialist joins a difficult job after a long initial inspection.',
    sections: [
      {
        title: 'A long repair attracts help',
        paragraphs: [
          'A fictional bicycle workshop notices that jobs involving its specialist take longer. Someone proposes keeping the specialist away to speed repairs. Consider one invented job: the bicycle arrives at 10:00, the general mechanic investigates until 11:20, and the specialist then helps finish at 11:40. The total visit lasts 100 minutes. But 80 of those minutes happened before the specialist joined. The difficult, prolonged repair could have caused the request for help rather than the help causing all the delay.',
        ],
      },
      {
        title: 'Earlier time cannot follow a later action',
        paragraphs: [
          'This is a direction-of-causation problem. A response can be associated with the problem that triggered it. Assigning the entire visit duration to specialist involvement gives that later action credit or blame for time already elapsed. The relevant starting point for evaluating the decision is 11:20. At that point, the question becomes what would happen next if this eligible job received specialist help versus continued without it. The 20 remaining minutes are an observation under one action, not the specialist effect by themselves.',
        ],
      },
      {
        title: 'Find comparable decisions',
        paragraphs: [
          'Comparing the remaining duration with simple repairs is still unfair: those jobs may never have needed escalation. You would want cases facing a similar decision after comparable symptoms and elapsed time. Perhaps the specialist saved time; perhaps coordination added some. The timeline alone cannot distinguish those possibilities. It can reject the impossible claim that the specialist caused the earlier 80 minutes. Record when help was requested, why, and what remained unfinished. Those details turn a vague blame statement into a question about a specific intervention at a specific stage.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'When could specialist help have an effect?',
      alt: 'Intake at 10:00, specialist arrival at 11:20, and completion at 11:40.',
      caption: 'Invented repair times. The first interval is 80 minutes; the second is 20. Positions are not a proportional time scale.',
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
        'Draw the three workshop times and calculate the interval before and after specialist arrival.',
        'Cross out the statement that specialist involvement caused the full 100-minute duration.',
        'Write the comparison you would need at 11:20, including what made the job eligible for help.',
      ],
      notice: 'Your evaluation starts at the decision rather than at the beginning of an unrelated clock.',
      troubleshooting: 'If you compare with easy repairs, add the unresolved fault and elapsed time to eligibility.',
    },
    recall: {
      prompt: 'A person starts using a route-planning app after repeatedly arriving late. What could explain an association between app use and lateness?',
      hint: 'Which event happened first?',
      answer: 'Earlier lateness may have prompted app adoption. Separate the earlier trips from later trips and compare suitable alternatives before deciding whether the app helps or harms punctuality.',
    },
    quiz: {
      question: 'A replacement editor joins after a film is already behind schedule. Which comparison best targets the replacement decision?',
      options: [
        'Similar delayed projects at the point when replacement became an option',
        'All projects using replacements versus all projects retaining their editor',
        'The whole project duration versus the replacement editor\'s usual working day',
      ],
      correctIndex: 0,
      explanation: 'The first comparison aligns the decision point and prior difficulty. Whole-project totals mix earlier delay with whatever the replacement later changes.',
    },
    takeaway: 'A response can follow a problem; it cannot cause time that passed before it began.',
    sourceNote: 'The causal reference informs the timing distinction. All workshop times are invented and do not measure specialist effectiveness.',
  },
  {
    id: 'thinking-004',
    title: 'Check the rule that admitted each example',
    outcome: 'Explain how selecting on a shared result can create a misleading association.',
    scene: 'An imaginary short-film showcase admits films with strong sound or a strong story.',
    sections: [
      {
        title: 'A pattern inside the shortlist',
        paragraphs: [
          'Imagine a showcase with a deliberately simplified admission rule: shortlist a film if its sound is strong, its story is strong, or both. Before selection, there are ten films in each of four groups: both strong, sound only, story only, and neither. These invented ratings are categories for an exercise, not objective measures of artistic quality.',
          'Across all forty films, half of the strong-sound group has a strong story, and half of the weak-sound group does too. There is no association in this starting table.',
        ],
      },
      {
        title: 'The missing cell changes the comparison',
        paragraphs: [
          'Now remove the ten films with neither quality. Among the remaining weak-sound films, all ten have strong stories; otherwise they could not qualify. Among the twenty strong-sound films, only ten have strong stories. Looking only at the shortlist makes weaker sound appear linked to stronger storytelling. Nobody changed a film. Selection changed which comparisons were possible. Shortlisting is a collider in this sketch, meaning a common result influenced by two separate factors. Restricting attention to that result can create an association between its causes.',
        ],
      },
      {
        title: 'Do not turn the pattern into a tradeoff',
        paragraphs: [
          'It would be a mistake to conclude that improving sound damages storytelling. The rule itself explains the pattern. Adding more shortlisted films under the same rule would not automatically remove it. Ask how examples entered the collection, which combinations could never appear, and what population the conclusion concerns. Real selection is rarely this tidy, and the ratings could already be related before selection. The exercise isolates one mechanism so you can recognize why an attractive portfolio, award list, or specialist queue might misrepresent the broader pool.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Sound by story before selection',
      alt: 'Four groups of ten films; only the weak-sound and weak-story group is excluded.',
      caption: 'Invented two-way table. Rows distinguish sound; columns distinguish story. Removing one cell creates the shortlist association.',
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
        'Copy the four cells with ten films in each, then circle the three admitted cells.',
        'Within admitted weak-sound films, calculate the share with strong stories: ten out of ten.',
        'Repeat for admitted strong-sound films: ten out of twenty. Explain the difference using the admission rule.',
      ],
      notice: 'The relationship appears after exclusion, without any causal effect of sound on story.',
      troubleshooting: 'Keep each denominator inside its sound group and inside the selected population.',
    },
    recall: {
      prompt: 'A repair queue admits devices with severe faults or priority cover. Why might ordinary-cover devices look more severely damaged there?',
      hint: 'What qualifies an ordinary-cover device for this queue?',
      answer: 'Ordinary-cover devices need severity to enter, while priority-covered devices can enter without it. Selection can create this pattern without cover changing the physical fault.',
    },
    quiz: {
      question: 'A scholarship shortlist admits high exam scores or exceptional portfolios. What should precede a claim that scores weaken portfolios?',
      options: [
        'Increase the shortlist size while keeping the same admission rule',
        'Check selection and compare the eligible applicant pool',
        'Compare only the highest exam scores within the shortlist',
      ],
      correctIndex: 1,
      explanation: 'The shared admission rule can generate the association. More selected cases or further restriction do not restore the combinations excluded by that rule.',
    },
    takeaway: 'A collection can create a pattern through what it excludes.',
    sourceNote: 'Causal Inference: What If covers collider selection. The showcase rule and ratings are fictional, not claims about festivals or creativity.',
  },
  {
    id: 'thinking-005',
    title: 'Do not remove the route through which help works',
    outcome: 'Distinguish a mediator from a background factor when evaluating a total effect.',
    scene: 'A printed index helps beginners locate facts in a local-history booklet.',
    sections: [
      {
        title: 'The index changes searching',
        paragraphs: [
          'Suppose beginners answer questions using a local-history booklet. Some receive a new printed index, while others use the booklet alone. The proposed benefit is straightforward: the index helps readers find the relevant pages sooner, leaving more of the allowed session for constructing complete answers. Someone suggests comparing answer completeness only between readers who spent exactly the same time searching. That sounds fair because time matters, but it could remove the very advantage the index is intended to provide.',
        ],
      },
      {
        title: 'Background versus pathway',
        paragraphs: [
          'Prior familiarity with the booklet exists before receiving the index. Search time is different: the index itself can change it. In the proposed chain, index access changes searching, which changes the opportunity to complete an answer. A variable that carries part of an effect is called a mediator. If the question concerns the total effect of offering the index, forcing search time to be equal blocks part of that chain. More adjustment is therefore not automatically a better answer to the original question.',
        ],
      },
      {
        title: 'Choose the effect before the analysis',
        paragraphs: [
          'You could instead ask whether the index helps beyond its effect on searching, perhaps by showing connections between topics. That is a different question, requiring its own design and assumptions. Simply adding observed search time to a calculation does not identify that direct effect. Readers who search equally long despite different tools might also differ in unmeasured difficulty. Draw what the index could change before deciding which variables to hold fixed. The diagram does not prove the mechanism, but it reveals whether the proposed comparison would hide a pathway you meant to evaluate.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'The proposed route to more complete answers',
      alt: 'Index access leads to shorter searching, which leaves time for more complete answers.',
      caption: 'Hypothetical pathway. Holding search time fixed removes this proposed contribution to the total effect.',
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
        'Draw index access, search time, and answer completeness in the proposed causal order.',
        'Add prior booklet familiarity outside the chain, marking that it exists before index access.',
        'Write separate questions about the total benefit and a benefit not operating through search time.',
      ],
      notice: 'Your two questions concern different effects even though they mention the same booklet.',
      troubleshooting: 'If every variable looks like background, ask whether receiving the index could change it.',
    },
    recall: {
      prompt: 'A checkout redesign reduces typing and abandonment. Why might holding typing time fixed miss some of its benefit?',
      hint: 'Could typing time be something the redesign changes?',
      answer: 'Reduced typing may carry part of the effect on abandonment. Holding it fixed removes that route, so the comparison no longer targets the full effect of the redesign.',
    },
    quiz: {
      question: 'A new sign reduces wrong turns, then travel time. Which variable is a proposed mediator?',
      options: [
        'Familiarity with the building before the sign was installed',
        'The destination assigned before the walk began',
        'Wrong turns made after seeing the new sign',
      ],
      correctIndex: 2,
      explanation: 'Wrong turns lie on the proposed sign-to-duration pathway. Prior familiarity and assigned destination precede exposure rather than carrying its effect.',
    },
    takeaway: 'A variable changed by the intervention may carry the effect you want to measure.',
    sourceNote: 'The inherited causal reference distinguishes total and pathway-specific effects. The booklet scenario illustrates a proposed mechanism, not a tested teaching intervention.',
  },
  {
    id: 'thinking-006',
    title: 'Untouched does not mean unaffected',
    outcome: 'Find a shared resource that lets an intervention spill into a comparison group.',
    scene: 'Two apartment laptops share a router while one changes its backup schedule.',
    sections: [
      {
        title: 'One laptop changes, both improve',
        paragraphs: [
          'Imagine two laptops sharing an apartment internet connection. Laptop A uploads large backups during the evening; laptop B plays a film. You propose moving only A\'s backups to another time, calling A the treated device and B the untouched comparison. But both use the same router and internet link. If A sends less traffic during the film, B may also wait less for the shared connection. Its own settings did not change, yet its experience could change because another device changed.',
        ],
      },
      {
        title: 'The effect crosses the label',
        paragraphs: [
          'This is interference between units: one unit\'s outcome depends on another unit\'s assigned action. A simple experiment often assumes that only each unit\'s own assignment matters. The apartment example violates that assumption if shared capacity carries the effect. Labeling B a control cannot insulate it from the router. Comparing improvement on A with improvement on B might then understate a benefit shared by both, though spillovers can distort other designs differently. The direction depends on what resource and outcomes the experiment involves.',
        ],
      },
      {
        title: 'Match the boundary to the question',
        paragraphs: [
          'Draw the shared path before deciding what to assign independently. If the question is about the household experience, the whole connection might be the relevant group. A comparison across suitable separate groups could avoid this particular spillover, while introducing other differences to assess. Alternatively, study spillovers explicitly rather than pretending they are absent. Do not disconnect anyone or alter a live router for this exercise. The useful first result is a design note explaining how a device outside the treatment list could still receive part of the treatment\'s consequences.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'Both laptops depend on the shared path',
      alt: 'Laptop A and laptop B both connect to one router, which connects to the internet link.',
      caption: 'Schematic fictional network, not physical room scale. Follow both paths to the shared router and link.',
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
        'Copy the two-laptop network without changing any actual device or connection.',
        'Trace how fewer uploads from A could change waiting on B through the shared link.',
        'Write whether your question concerns one laptop or the household, then propose an appropriate comparison boundary.',
      ],
      notice: 'The comparison boundary follows a possible effect, not just a list of changed settings.',
      troubleshooting: 'If no connection is visible, list the resources both groups depend on before drawing arrows.',
    },
    recall: {
      prompt: 'A school gives reading materials to selected pupils who share them with classmates. Why is the untreated label incomplete?',
      hint: 'Look for access through someone else.',
      answer: 'Classmates can receive material through treated pupils. Their outcomes may depend on another pupil\'s assignment, so the design should account for sharing or compare suitable groups.',
    },
    quiz: {
      question: 'Two printers share a job queue. Only one gets faster software. Which observation suggests interference?',
      options: [
        'Jobs on the unchanged printer wait less because the common queue clears sooner',
        'The upgraded printer finishes its own jobs sooner with unchanged queue conditions',
        'Both printer reports use the same definition of a completed page',
      ],
      correctIndex: 0,
      explanation: 'The unchanged printer is affected through another printer\'s treatment. Consistent measurement is desirable, while improvement confined to the upgraded printer does not itself show spillover.',
    },
    takeaway: 'Trace shared resources before deciding that a comparison group received no effect.',
    sourceNote: 'Causal Inference: What If provides the interference concept. This is a paper design exercise, not a recommendation to change shared network settings.',
  },
  {
    id: 'thinking-007',
    title: 'Subtract the change that might have happened anyway',
    outcome: 'Calculate a difference-in-differences contrast and state its untreated-trend assumption.',
    scene: 'Two library branches track late returns while one pilots reminder messages.',
    sections: [
      {
        title: 'Both branches improve',
        paragraphs: [
          'Two fictional library branches count late returns per 100 eligible loans using the same lateness rule. East introduces reminder messages; West does not. Before the pilot, East records 30 and West 20 late returns per 100 loans. Afterwards, East records 18 and West 16. East improved by 12, but West improved by 4 without the new messages. Perhaps a shared calendar change helped both. Crediting all 12 fewer late returns to the reminders ignores a change that also occurred elsewhere.',
        ],
      },
      {
        title: 'Work out the comparison',
        paragraphs: [
          'Difference-in-differences compares these changes rather than just the final levels. East\'s reduction is 30 minus 18, or 12. West\'s is 20 minus 16, or 4. Subtracting 4 from 12 gives 8 fewer late returns per 100 loans relative to West\'s change. Equivalently, if East would have improved by 4 without reminders, its untreated outcome would be 26; its observed outcome is 18. The starting levels need not match. What matters for this causal interpretation is the assumed similarity of changes without the intervention.',
        ],
      },
      {
        title: 'The missing trend is an assumption',
        paragraphs: [
          'That requirement is called parallel trends. It concerns what would have happened without reminders, including the unobserved later trend at East. Similar earlier trends make the comparison more credible but cannot prove that future counterfactual. If East also shortened loan periods or served a different borrower mix, the calculation could capture those differences. Check the timing, population, reporting rule, and other changes before calling eight a reminder effect. The subtraction is exact for these invented numbers; whether it identifies a cause depends on the design, not the arithmetic.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Late returns before and after the pilot',
      alt: 'East decreases from 30 to 18 late returns per 100 loans; West decreases from 20 to 16.',
      caption: 'Invented data. Compare reductions: (30 - 18) - (20 - 16) = 8. This contrast needs a credible untreated trend.',
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
        'Copy the four rates and calculate each branch\'s reduction using before minus after.',
        'Subtract the West reduction from East\'s, keeping the unit per 100 loans.',
        'Write the assumed East outcome without reminders and one East-only change that would threaten the comparison.',
      ],
      notice: 'You obtain eight fewer per 100, alongside a named assumption rather than a causal guarantee.',
      troubleshooting: 'If you obtain two, you compared final levels instead of changes from each starting level.',
    },
    recall: {
      prompt: 'A road pilot cuts average journey time from 40 to 32 minutes; a comparison route changes from 30 to 27. What is the contrast?',
      hint: 'Compare the two reductions, not the final times.',
      answer: 'The reductions are eight and three minutes, giving five minutes of additional reduction. A causal interpretation needs credible parallel untreated trends and no conflicting route-specific changes.',
    },
    quiz: {
      question: 'Earlier trends match, but only the pilot branch extends opening hours during the trial. What follows?',
      options: [
        'Matching earlier trends establishes the reminder effect despite the extension',
        'The extension could break the untreated-trend comparison',
        'Different starting rates make the method unusable regardless of the extension',
      ],
      correctIndex: 1,
      explanation: 'A concurrent branch-specific change can affect returns. Earlier trends are supporting evidence, not proof; unequal starting levels are not themselves the parallel-trends requirement.',
    },
    takeaway: 'Subtracting changes is easy; justifying the untreated comparison is the harder part.',
    sourceNote: 'The inherited Mixtape chapter explains difference-in-differences. All branch and road values are fictional teaching data.',
  },
  {
    id: 'thinking-008',
    title: 'Random assignment is not a representative audience',
    outcome: 'Separate a fair comparison within a study from evidence that it generalizes.',
    scene: 'Forty volunteers with recent phones test two versions of an offline museum map.',
    sections: [
      {
        title: 'A careful test with a narrow group',
        paragraphs: [
          'A fictional museum recruits forty volunteers who own recent phones. A chance procedure assigns each person to one of two map designs, and the organizers compare finding a named gallery. Random assignment makes the design choice independent of participant characteristics in the assignment process. It does not guarantee perfectly balanced groups in this particular small trial. Still, it provides a basis for a comparison that is different from letting confident navigators choose their favorite version. The tested population, however, remains those recruited volunteers.',
        ],
      },
      {
        title: 'Two different kinds of chance',
        paragraphs: [
          'Random assignment concerns which treatment the existing participants receive. Random sampling concerns who enters the study from a defined population. A fair assignment procedure cannot bring absent visitors into the room. People using older phones, large text, another language, or intermittent connectivity may encounter different obstacles. If those conditions change how the map works, the effect can differ outside the study. Generalization means carrying a result to another population or setting, and it needs an argument about those differences rather than the word randomized alone.',
        ],
      },
      {
        title: 'Keep the finding and its boundary',
        paragraphs: [
          'Suppose one design is easier for these volunteers under the tested conditions. Do not discard that useful finding just because the sample is limited. Report the conditions and identify what remains untested. A next study could deliberately cover older hardware and relevant accessibility settings, with appropriate recruitment and consent. It need not pretend that every phone user is interchangeable. In a review, make two separate notes: how assignment supported the internal comparison, and why a visitor unlike the volunteers might have a different experience. Each note answers a different question.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Two questions about the museum test',
      alt: 'Assignment decides which map volunteers receive; population coverage asks which visitors are included.',
      caption: 'Fictional study. A chance assignment among forty volunteers does not expand the kinds of phones or visitors sampled.',
      items: [
        { label: 'Assignment', detail: 'Which map does each recruited volunteer receive?' },
        { label: 'Population coverage', detail: 'Whose phones, languages, and access needs are represented?' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write two headings: assignment inside the test, and visitors outside the test.',
        'Under the first, describe chance assignment of the existing volunteers to the two maps.',
        'Under the second, name two absent conditions and explain how each could affect using the map.',
      ],
      notice: 'You retain the within-study finding without claiming it covers every museum visitor.',
      troubleshooting: 'Replace vague claims about diversity with a concrete interaction, such as text clipping at larger sizes.',
    },
    recall: {
      prompt: 'A drying technique is randomly assigned to identical fabric samples. Can the result automatically cover wool coats?',
      hint: 'Assignment does not change the material that was sampled.',
      answer: 'No. The comparison concerns the tested fabric and conditions. Wool may respond differently, so generalization needs relevant material evidence even if assignment was well designed.',
    },
    quiz: {
      question: 'A tool test randomizes new laptops but will be deployed on older machines. Which addition addresses the main generalization gap?',
      options: [
        'Randomize the same new laptops again with different labels',
        'Increase repetitions on the same new hardware only',
        'Include relevant older hardware and inspect whether the effect changes',
      ],
      correctIndex: 2,
      explanation: 'Older hardware adds missing conditions. Repetition can clarify the existing comparison but cannot directly test a hardware condition that never appears.',
    },
    takeaway: 'How treatment was assigned and who was studied are separate parts of the evidence.',
    sourceNote: 'The inherited causal and statistics references support this distinction. The museum recruitment and outcome are hypothetical.',
  },
  {
    id: 'thinking-009',
    title: 'Count faults against their opportunities',
    outcome: 'Choose a matching denominator before comparing reported failure frequencies.',
    scene: 'A bicycle rental shop compares puncture reports across two tire models.',
    sections: [
      {
        title: 'More reports can come from more rides',
        paragraphs: [
          'A fictional rental shop records 24 puncture reports for tire A and 12 for tire B in one month. Tire A looks worse if you stop at the counts. But A was used on 1,200 rentals and B on 300. For this exercise, each report represents a different rental with a puncture, both groups use the same reporting rule, and trip lengths are comparable. The larger group has more opportunities to produce reports. Counts describe the workload at the repair bench, not yet the risk on a rental.',
        ],
      },
      {
        title: 'Give each fraction its own bottom',
        paragraphs: [
          'Divide reported puncture rentals by eligible rentals for each tire. A gives 24 divided by 1,200, or 0.02: two reports per 100 rentals. B gives 12 divided by 300, or 0.04: four per 100. A has twice as many reports but half the reported proportion per rental. The denominator is the set of opportunities relevant to the numerator. Dividing both counts by all shop rentals would answer a different question: each model\'s contribution to reports across the whole shop.',
        ],
      },
      {
        title: 'A matching denominator is only a start',
        paragraphs: [
          'Real rentals may differ in distance, road surface, tire age, or reporting. If one group mostly takes longer trips, distance exposure might better match a question about punctures while riding. Repeated phone calls about one puncture should not become separate failed rentals. Also distinguish reports from all actual punctures: unreported events remain missing. The calculation does not prove that tire design caused the difference. It corrects one comparison error and leaves the next questions visible: comparable exposure, consistent counting, and uncertainty from limited observations.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Reported punctures per rental opportunity',
      alt: 'Tire A has two reported puncture rentals per 100 rentals; tire B has four.',
      caption: 'Invented data: 24 / 1,200 x 100 = 2; 12 / 300 x 100 = 4. Counts alone rank the models differently.',
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
        'Write two fictional groups: 18 damaged parcels in 900 deliveries; 10 in 250 deliveries.',
        'Divide each damage count by its own delivery count, then multiply by 100.',
        'Label the results two and four per 100 deliveries, and add one exposure difference worth checking.',
      ],
      notice: 'The group with more damaged parcels has the lower reported proportion in this invented comparison.',
      troubleshooting: 'Keep numerator and denominator from the same group, time window, and event definition.',
    },
    recall: {
      prompt: 'A larger apartment block reports more lift breakdowns than a smaller one. What would you ask before comparing reliability?',
      hint: 'How many lifts were exposed, for how long, and how heavily?',
      answer: 'Ask about lift count, observation time, usage, and the breakdown definition. A larger or busier installation can generate more reports without a higher comparable failure rate.',
    },
    quiz: {
      question: 'Two delivery services report 40 and 20 damaged parcels. Which missing information most directly enables a damage-per-delivery comparison?',
      options: [
        'Eligible deliveries for each service under the same reporting rule and period',
        'The total repair bill paid by the larger service',
        'The combined delivery total without separating the services',
      ],
      correctIndex: 0,
      explanation: 'Each numerator needs its matching exposure. Bills concern cost, while a pooled denominator obscures different opportunities within the two services.',
    },
    takeaway: 'Use a denominator that matches the event, group, and exposure being compared.',
    sourceNote: 'OpenIntro supplies statistical background. Tire and parcel counts are invented; reported proportions are not causal effects or product recommendations.',
  },
  {
    id: 'thinking-010',
    title: 'Ask what proportion of alerts are genuine',
    outcome: 'Calculate alert reliability without reversing a conditional probability.',
    scene: 'A film archive uses a scanner to flag potentially damaged video clips.',
    sections: [
      {
        title: 'Good detection can still produce many false alerts',
        paragraphs: [
          'An imaginary archive scans 1,000 video clips. Twenty are damaged and 980 are intact. Its detector flags 18 damaged clips and misses two. It also flags 49 intact clips, leaving 931 intact clips unflagged. These are invented counts with known underlying status so we can see the whole table. The detector catches 18 of the 20 damaged clips, giving 90% sensitivity. That sounds promising, but it does not mean that 90% of the clips in the alert queue are damaged.',
        ],
      },
      {
        title: 'Start inside the alerted group',
        paragraphs: [
          'There are 18 genuine alerts plus 49 false alerts, or 67 alerted clips. To answer how often an alert is genuine, use those 67 as the denominator: 18 divided by 67 is about 26.9%. Sensitivity starts inside the damaged group; alert reliability starts inside the alerted group. They are different conditional probabilities.',
          'The intact population is so large that a false-alert rate of 49 divided by 980, or 5%, contributes more alerts than the damaged population does. The starting frequency of damage matters.',
        ],
      },
      {
        title: 'Use the flag for its actual purpose',
        paragraphs: [
          'A flag can still be useful for directing inspection even when it is not a verdict. Inspect the flagged clip with an appropriate independent check rather than deleting it automatically. If the same scanner is applied to a collection with much more damage, its alert reliability can change even if sensitivity and false-alert behavior stay the same. Bayes\' theorem connects these quantities; the four-cell count table makes the connection visible without algebra. In practice, those inputs are estimates and may also change with file types or scanner settings.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Clip status by scanner result',
      alt: 'Damaged clips: 18 alerts and two misses. Intact clips: 49 alerts and 931 non-alerts.',
      caption: 'Invented 1,000-clip population. The alert column totals 67; only 18 are damaged. Sensitivity instead uses all 20 damaged clips.',
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
        'Copy the four counts and verify they sum to 1,000 clips.',
        'Circle the alerted clips only. Compute 18 / (18 + 49) as a percentage.',
        'Separately compute 18 / (18 + 2). Label the first alert reliability and the second sensitivity.',
      ],
      notice: 'About 26.9% and 90% answer different questions about the same scanner.',
      troubleshooting: 'Before dividing, complete the sentence: among all the clips that have which property?',
    },
    recall: {
      prompt: 'A shop gate detects most unscanned items. Why is that insufficient to judge whether a particular alarm indicates one?',
      hint: 'Include alarms produced when everything was scanned.',
      answer: 'You also need the frequency of unscanned items and false alarms among properly scanned items. Genuine cases must be compared with the entire alarm group, not only unscanned items.',
    },
    quiz: {
      question: 'A detector keeps the same sensitivity and false-positive rate but moves to a population with rarer faults. What generally happens to alert reliability?',
      options: [
        'It stays fixed because sensitivity did not change',
        'It decreases because healthy cases contribute a larger share of alerts',
        'It increases because the total population is healthier',
      ],
      correctIndex: 1,
      explanation: 'With a nonzero false-positive rate, rarer faults reduce the genuine share of alerts. Sensitivity conditions on faults, so it does not fix that share.',
    },
    takeaway: 'Among faults and among alerts are different denominators.',
    sourceNote: 'Seeing Theory explains Bayesian conditioning. All clip counts and scanner rates here are fictional, not claims about an archive product.',
  },
  {
    id: 'thinking-011',
    title: 'Look for evidence that separates explanations',
    outcome: 'Distinguish an observation compatible with a hypothesis from one that favors it over a rival.',
    scene: 'A blurred photograph of a street sign could reflect missed focus or camera movement.',
    sections: [
      {
        title: 'Both explanations predict a soft image',
        paragraphs: [
          'You photograph a stationary street sign and find that its letters look soft. One explanation is missed focus: the camera focused at the wrong distance. Another is camera movement during the exposure. Both can produce an unclear photograph. Saying that movement causes blur, and therefore this blur proves movement, skips the comparison. The observation is compatible with your preferred explanation, but it is also compatible with its rival. You need to ask what each explanation predicts about this particular image, not merely whether either could produce a bad result.',
        ],
      },
      {
        title: 'Ask what differs between the predictions',
        paragraphs: [
          'Suppose the letters and nearby stationary edges show repeated smearing in the same direction. That is more naturally expected from movement during exposure than from simple missed focus in this example. It therefore gives movement more relative support than the general observation that the image is soft. Bayesian reasoning calls this a likelihood comparison: how expected is the observation under each candidate explanation? Evidence equally expected under both leaves their relative odds unchanged. Evidence more expected under one moves those odds toward it, without making it certain.',
        ],
      },
      {
        title: 'Keep the starting information',
        paragraphs: [
          'What you knew before inspecting the crop still matters. A visibly moving camera and an uncertain focus selection supply different starting information. Do not silently replace that history with equal chances, or assign precise likelihoods from intuition. Also keep other possibilities available, such as a moving subject or image processing, if they fit the case. For a learning exercise, compare the two named explanations and identify a discriminating detail. A useful result is a better next check, such as reviewing the focus setting or a safely supported comparison shot, rather than a confident diagnosis from blur alone.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Two explanations for the same soft sign',
      alt: 'Missed focus and camera movement both predict softness; common directional smearing favors movement in this simplified comparison.',
      caption: 'Qualitative prediction comparison for a hypothetical photograph, not a diagnostic image or measured likelihood estimate.',
      items: [
        { label: 'Missed focus', detail: 'Soft edges are expected; common directional trails are less characteristic.' },
        { label: 'Camera movement', detail: 'Softness with shared directional smearing is more expected here.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write missed focus and camera movement as explanations for the fictional sign photograph.',
        'Under both, write soft letters. Explain why this detail alone does not separate them.',
        'Add common directional smearing and describe how it changes relative support without proving a cause.',
      ],
      notice: 'Your explanation compares predictions instead of listing facts that suit only a favorite story.',
      troubleshooting: 'If a clue seems decisive, ask whether the rival could also produce it and under what conditions.',
    },
    recall: {
      prompt: 'A parcel is missing. Both a wrong-address delivery and a depot delay predict no parcel at home. What would help separate them?',
      hint: 'Find a record whose content differs under the two explanations.',
      answer: 'A verified delivery location or a depot scan could discriminate better than another confirmation that the parcel is absent. Check the reliability and timing of that record too.',
    },
    quiz: {
      question: 'Two causes start at odds of three to one. A timeout is equally likely under each cause. What are the updated odds?',
      options: [
        'One to one, because both causes predict the timeout',
        'Six to one, because the timeout supports the leading cause again',
        'Three to one, because equal likelihoods leave their relative odds unchanged',
      ],
      correctIndex: 2,
      explanation: 'The likelihood ratio is one, so three-to-one prior odds remain three to one. Compatibility with both causes neither erases the prior information nor doubles its weight.',
    },
    takeaway: 'The useful clue is one the competing explanations predict differently.',
    sourceNote: 'Seeing Theory supplies the updating principle. The photographic comparison is an original qualitative illustration, not a calibrated fault classifier.',
  },
  {
    id: 'thinking-012',
    title: 'Choose a base rate that belongs to this situation',
    outcome: 'Assess the relevance and limitations of a historical reference class.',
    scene: 'A ferry passenger compares ordinary weekday history with a small sample from a holiday timetable.',
    sections: [
      {
        title: 'Which journeys produced the estimate?',
        paragraphs: [
          'A fictional ferry service was late on five of its last hundred ordinary weekday departures. You are planning a holiday trip after the timetable changed. Someone says the chance of delay is therefore 5%. That history is relevant information, but the proposed trip may not belong to the same conditions. Holiday crowds, departure spacing, and the new schedule could affect delay. A base rate is a frequency in a reference class, a group chosen as a comparison. It is not a permanent property attached to the ferry name.',
        ],
      },
      {
        title: 'Closer conditions can mean fewer observations',
        paragraphs: [
          'Suppose ten departures under the new holiday timetable have occurred, with two late. That is 20% in this smaller, more closely matched sample. It is tempting to declare the latest percentage the correct answer. But a fraction based on ten departures can change substantially with a few additional outcomes. The broad history offers more observations with weaker matching; the narrow history offers closer conditions with less information. Neither sample size alone nor recency alone settles which estimate should guide the particular trip.',
        ],
      },
      {
        title: 'Explain relevance instead of choosing a convenient rate',
        paragraphs: [
          'Describe the event consistently, such as departing more than ten minutes after the advertised time, then record what each sample includes. Ask which timetable differences could plausibly change that event. If comparable holiday history from earlier periods exists, it might help, but only if the schedule and reporting rule are relevant. You do not need to combine the samples with invented weights. A useful planning statement can acknowledge both historical evidence and unresolved change. Keep the estimate separate from your decision about how much spare travel time you need.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'More history or closer conditions?',
      alt: 'Ordinary weekdays show five late departures in 100; the new holiday timetable shows two in ten.',
      caption: 'Invented ferry records. The comparison concerns relevance and sample size; neither fraction is a guaranteed forecast.',
      items: [
        { label: 'Ordinary weekdays', detail: '5 / 100 late: 5%; more observations, older conditions.' },
        { label: 'New holiday timetable', detail: '2 / 10 late: 20%; closer conditions, fewer observations.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Copy each ferry sample with its population, count, and timetable condition.',
        'Write one reason the ordinary history may transfer and one reason it may not.',
        'Draft a forecast note that preserves the small holiday sample without presenting 20% as a settled probability.',
      ],
      notice: 'Each percentage now has a named population and a reason for relevance or caution.',
      troubleshooting: 'If you only write old versus new, identify the actual changed condition that could affect delay.',
    },
    recall: {
      prompt: 'A laptop model has a long battery-life history, but a new application changes its workload. Which history is most relevant?',
      hint: 'Match what consumes the battery, not only the model name.',
      answer: 'Look for evidence under comparable workloads and settings. The old history remains background, while a small new-workload sample needs uncertainty rather than automatic promotion to a definitive estimate.',
    },
    quiz: {
      question: 'A rain-delay estimate comes from summer daytime events, but the new event is a winter evening. What should be checked first?',
      options: [
        'Whether season and timing change the relevance of the reference class',
        'Whether the old sample contains more rows than every newer sample',
        'Whether the latest single event happened without rain',
      ],
      correctIndex: 0,
      explanation: 'The generating conditions determine relevance. More rows cannot erase systematic mismatch, and one recent outcome does not replace a defensible reference class.',
    },
    takeaway: 'A base rate needs both enough evidence and a reason to apply to the current case.',
    sourceNote: 'The inherited Bayesian and statistics sources provide the background. Ferry rates and timetable changes are fictional.',
  },
  {
    id: 'thinking-013',
    title: 'Trace evidence back to its origin',
    outcome: 'Avoid treating copied claims as independent corroboration.',
    scene: 'A local-history caption, blog, and video repeat one museum catalogue entry.',
    sections: [
      {
        title: 'Three mentions, one starting point',
        paragraphs: [
          'You are writing a caption about a fictional sculpture. A museum catalogue says it was unveiled in May 2010. A local blog gives the same date, and a video caption repeats it. Three matching mentions feel stronger than one. Then you inspect their references: the blog cites the catalogue, and the video credits the blog. All three may ultimately rely on one original assertion. Their agreement tells you that the date travelled consistently through this chain, not that three independent observers verified an unveiling.',
        ],
      },
      {
        title: 'Ask what the next item adds',
        paragraphs: [
          'Independent support concerns how evidence arises under the competing explanations. If the catalogue date were wrong, the blog and video could repeat the same error. Once you know what the catalogue says, discovering a faithful copy supplies little new information about the event itself. This is why multiplying separate evidential weights as though they were independent can exaggerate confidence. Different websites, authors, or formats are not enough. The relevant question is what genuinely new information an item supplies after the earlier items are already known.',
        ],
      },
      {
        title: 'A different record may answer a narrower question',
        paragraphs: [
          'Suppose you find an independently preserved invitation announcing the planned May unveiling. That adds information about the plan, but an invitation alone does not establish that the event happened as scheduled. A dated event report or a securely identified photograph could address another part of the claim, with its own limitations.',
          'Make a source tree and write the exact proposition supported at each branch. You can cite the catalogue honestly while marking the date as not independently confirmed. The goal is not to reject repeated information, but to stop repetition from masquerading as separate verification.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'How the unveiling date travelled',
      alt: 'Museum catalogue feeds a blog, which feeds a video caption.',
      caption: 'Fictional source chain. Follow citations toward the catalogue: three presentations can share one evidential origin.',
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
        'Draw the catalogue, blog, and video as a citation chain, preserving their direction of copying.',
        'Write what all three could say if the catalogue contained the same initial mistake.',
        'Add the independent invitation and label its limited support: the event was planned, not necessarily held.',
      ],
      notice: 'Your source count separates repeated wording from information that can independently challenge the claim.',
      troubleshooting: 'If every website looks independent, inspect what record each author used rather than where they published.',
    },
    recall: {
      prompt: 'A service alert creates an email, which automatically opens a ticket. How many independently observed failures does that establish?',
      hint: 'Separate observations from notifications about them.',
      answer: 'It establishes one underlying alert observation, not three independent failures. A ticket can add new evidence later, but its automatic creation is mostly determined by the original alert.',
    },
    quiz: {
      question: 'Two articles quote the same unnamed witness through one news release. Which follow-up adds the clearest new information?',
      options: [
        'Locate a third article quoting the same release',
        'Find a separately created record that bears on the specific event',
        'Count the two articles separately because their publishers differ',
      ],
      correctIndex: 1,
      explanation: 'A separate record can contribute information not already supplied by the release. Its relevance and reliability still matter; a different publisher alone does not establish independence.',
    },
    takeaway: 'Count new information, not the number of places a claim appears.',
    sourceNote: 'The inherited probability sources explain dependence. The sculpture, date, and documents are fictional examples of applying that principle to provenance.',
  },
  {
    id: 'thinking-014',
    title: 'A quiet sample is not a promise of zero risk',
    outcome: 'Interpret no observed failures using exposure, detection, and uncertainty.',
    scene: 'A stationery maker inspects twenty envelopes and finds no failed seams.',
    sections: [
      {
        title: 'What the inspection actually found',
        paragraphs: [
          'A fictional stationery maker tests twenty envelopes under a specified handling procedure and finds no failed seams. The observed failure proportion is zero divided by twenty, or zero. It is tempting to advertise that the seam cannot fail. But a finite sample can miss a possible event. The useful report names the envelopes, handling, number inspected, and detection rule. A seam that failed unnoticed would not appear in the count. Neither the word tested nor the number zero explains how much opportunity the inspection gave a relevant failure.',
        ],
      },
      {
        title: 'A nonzero risk can produce a zero count',
        paragraphs: [
          'For a toy calculation, suppose each envelope independently has a 10% chance of failing this procedure. Its chance of passing is then 90%. The chance that all twenty pass is 0.9 multiplied by itself twenty times, about 12.2%. So even this hypothetical nonzero failure probability sometimes produces a spotless twenty-envelope sample. This is a model illustration, not an estimate of the real seams. It shows why no observed failures does not logically imply that the underlying chance of failure is exactly zero.',
        ],
      },
      {
        title: 'Exposure has to be informative',
        paragraphs: [
          'More suitable independent trials with reliable detection can make some risk levels less compatible with the evidence. Repeatedly inspecting the same untouched envelope is not equivalent to testing new opportunities for failure. Likewise, a dry indoor procedure says little about wet transport unless the relationship is justified. Report what was tested and what remains outside the conditions. A formal bound requires an appropriate statistical method and assumptions; do not manufacture one by replacing the observed zero with certainty. The practical next question is which exposure would reveal the kinds of failures you actually care about.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Observed result versus unlimited claim',
      alt: 'Twenty inspected envelopes had zero observed seam failures; all future handling remains a broader claim.',
      caption: 'Fictional inspection. Under an independent 10% failure toy model, zero failures in twenty trials still occurs about 12.2% of the time.',
      items: [
        { label: 'What was observed', detail: '0 failed seams in 20 specified handling trials.' },
        { label: 'What is not established', detail: 'Zero possible failures in every future handling condition.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen', 'Optional calculator with powers'],
      steps: [
        'Draw twenty trial marks and label the fictional inspection zero detected seam failures.',
        'Write the passing probability as 0.9 and calculate 0.9 to the twentieth power, if available.',
        'Rewrite the report with its exposure and one excluded condition, without calling the true risk zero.',
      ],
      notice: 'Your claim remains useful while staying bounded by the actual inspection conditions.',
      troubleshooting: 'If the calculation is awkward, use the supplied 12.2% and explain what event that percentage describes.',
    },
    recall: {
      prompt: 'An app starts successfully every time in a short pilot on one phone. What remains unknown before a broader release?',
      hint: 'Separate the observed attempts from other devices and conditions.',
      answer: 'The pilot does not establish zero startup risk, especially on untested phones, storage conditions, or versions. Exposure, dependence between attempts, and failure detection all affect what the zero count teaches.',
    },
    quiz: {
      question: 'Which zero-failure result provides more relevant evidence about many different envelopes under the same handling procedure?',
      options: [
        'Inspecting one untouched envelope repeatedly without recreating the handling',
        'Counting only envelopes whose seams looked promising before the test',
        'Testing a suitably selected set of distinct envelopes with consistent detection',
      ],
      correctIndex: 2,
      explanation: 'Distinct relevant opportunities with consistent detection provide the intended exposure. Reinspection and selective admission can create many observations without comparable information.',
    },
    takeaway: 'Zero observed events is an exposure-limited result, not an unlimited safety guarantee.',
    sourceNote: 'OpenIntro provides probability and sampling background. The inspection and 10% model are fictional; no real product risk is estimated.',
  },
  {
    id: 'thinking-015',
    title: 'Read the slow requests behind the average',
    outcome: 'Use a distribution summary that exposes a slow minority of service requests.',
    scene: 'An online photo gallery serves ninety small previews quickly and ten requests slowly.',
    sections: [
      {
        title: 'An average below a second',
        paragraphs: [
          'A fictional photo gallery reports an average response time below one second. Its complete sample contains 100 requests: ninety take 0.2 seconds each and ten take 8 seconds each. Total response time is 90 x 0.2 plus 10 x 8, which equals 98 seconds. Divide by 100 and the mean is 0.98 seconds. The average is correctly calculated, yet ten requests still took eight seconds. An accurate summary can still be a poor answer to a question about those slow experiences.',
        ],
      },
      {
        title: 'Locate a request in the ordered list',
        paragraphs: [
          'Order the durations from quickest to slowest. The median, the middle value, is 0.2 seconds here. Using the nearest-rank definition, the 95th percentile is the duration at position 95 out of 100: eight seconds. A percentile names a position in the ordered observations, not a guarantee that all requests stay below it. In other samples, requests beyond that position could be much slower. Looking at the mean, a suitable upper percentile, and the slowest cases gives different views of the same distribution.',
        ],
      },
      {
        title: 'Ask which requests disappeared',
        paragraphs: [
          'This example includes every request and has no timeouts. Real reports may omit failed requests or record them at a cutoff, making an apparently quick service partly a story about what was excluded. Check request types and observation windows too: a thumbnail request and a full-resolution download have different jobs. A service requirement should say which population and part of the distribution it concerns. If the concern is a minority waiting too long, a mean-only target leaves that problem largely invisible even when the advertised arithmetic is correct.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Three summaries of the same requests',
      alt: 'Median 0.2 seconds, mean 0.98 seconds, and nearest-rank 95th percentile eight seconds.',
      caption: 'Invented complete sample: 90 requests at 0.2 seconds and 10 at 8 seconds. The mean is 98 / 100 = 0.98 seconds.',
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
        'Write the two gallery groups and calculate their combined duration, then the mean.',
        'Sketch positions 1 to 90 as quick and 91 to 100 as slow; locate position 95.',
        'Draft a service summary mentioning both the mean and slow group, plus whether timeouts are included.',
      ],
      notice: 'Your summary no longer suggests that the mean describes every visitor\'s wait.',
      troubleshooting: 'Do not average 0.2 and 8 equally; the groups contain different numbers of requests.',
    },
    recall: {
      prompt: 'A courier averages two days per delivery, but some parcels take a week. What should a time-sensitive customer ask?',
      hint: 'Ask about the relevant delivery distribution and exclusions.',
      answer: 'Ask about the share delivered by the needed date, slower outcomes, and treatment of failed or unresolved deliveries. The mean alone does not describe deadline reliability.',
    },
    quiz: {
      question: 'Two services have the same mean, but one omits timed-out requests. What should happen before comparing their speed claims?',
      options: [
        'Align request populations and timeout treatment, then inspect slow outcomes',
        'Treat the equal means as evidence of equal visitor experience',
        'Compare only the fastest successful requests from each service',
      ],
      correctIndex: 0,
      explanation: 'Different exclusions can distort the comparison. Equal means do not imply equal distributions, and restricting to the fastest successes hides the relevant slow cases.',
    },
    takeaway: 'An accurate average can conceal the part of the distribution that matters to the decision.',
    sourceNote: 'OpenIntro and the inherited reliability chapter provide background. Gallery counts and timings are fictional; the percentile definition is stated explicitly.',
  },
  {
    id: 'thinking-016',
    title: 'An interval for an average is not a deadline promise',
    outcome: 'Match an uncertainty interval to either a population mean or a future individual outcome.',
    scene: 'A print shop estimates average order completion while a customer needs one particular order.',
    sections: [
      {
        title: 'The customer is waiting for one order',
        paragraphs: [
          'A fictional print shop estimates that comparable orders take an average of 40 minutes. Its report gives a 95% confidence interval of 38 to 42 minutes for the mean. A customer concludes that their next order should finish within 42 minutes. That conclusion switches quantities. The reported interval concerns uncertainty about the average duration across comparable orders. An individual order can take longer or shorter because of its own processing variation, even if the shop has learned the average very precisely.',
        ],
      },
      {
        title: 'Prediction includes another source of variation',
        paragraphs: [
          'An interval intended for a new order is a prediction interval. Under the same usual regression model and coverage level, it includes uncertainty in the estimated mean plus variation of an individual new observation. Suppose the report instead supplies a prediction interval of 20 to 60 minutes for that order type. These bounds are invented model outputs to illustrate the distinction, not calculations from an unseen dataset. The wider span reflects the extra variation. Both intervals can be centered on 40 while answering different questions.',
        ],
      },
      {
        title: 'Read coverage and conditions together',
        paragraphs: [
          'If the customer needs the order within 50 minutes, the narrow mean interval does not settle the decision. The prediction interval extends beyond that deadline, but its endpoints alone do not tell you the exact chance of finishing by 50. The stated 95% coverage concerns repeated use of the interval procedure under its assumptions, not a guarantee about this order. Check whether the order type, queue conditions, and fitted model remain appropriate. First name the quantity you need, then ask whether the displayed interval was built for that quantity.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Two intervals, two targets',
      alt: 'Mean duration interval 38 to 42 minutes; new-order prediction interval 20 to 60 minutes.',
      caption: 'Illustrative model outputs, not fitted shop data. Equal 95% nominal coverage does not mean the intervals describe the same quantity.',
      items: [
        { label: 'Mean: 38 to 42 minutes', detail: 'Uncertainty about the average comparable-order duration.' },
        { label: 'New order: 20 to 60 minutes', detail: 'Also includes variation of an individual future order.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write two questions: what is the average duration, and when might my next order finish?',
        'Match each question to the supplied interval and underline the quantity being described.',
        'Write why neither the mean interval nor the prediction endpoints alone supply an exact by-50-minute probability.',
      ],
      notice: 'Your deadline question stays attached to a future order rather than the population average.',
      troubleshooting: 'If both intervals look interchangeable, ask what variation would remain with the true mean known.',
    },
    recall: {
      prompt: 'A battery study estimates mean runtime very precisely. Does that establish the runtime of your next charge?',
      hint: 'One charge can vary around an accurately known average.',
      answer: 'No. An individual-charge prediction must include relevant charge-to-charge variation and conditions. A confidence interval for the mean alone cannot provide that individual prediction.',
    },
    quiz: {
      question: 'A report offers an interval for mean parcel weight, but a machine must handle the next parcel. Which interval matches that need?',
      options: [
        'A narrower confidence interval for the same mean',
        'A prediction interval for a new comparable parcel',
        'The interval around the average of all previous daily means',
      ],
      correctIndex: 1,
      explanation: 'The machine faces an individual observation. Refining an average does not include the full parcel-to-parcel variation relevant to that observation.',
    },
    takeaway: 'Ask whether the interval describes an average or the next individual result.',
    sourceNote: 'The NIST prediction-interval page was checked for this distinction and coverage interpretation. Print-shop bounds are deliberately illustrative.',
  },
  {
    id: 'thinking-017',
    title: 'Read a p-value in the direction it was calculated',
    outcome: 'Explain what a p-value conditions on without confusing it with truth or practical importance.',
    scene: 'A fictional seedling study compares growth under two light schedules.',
    sections: [
      {
        title: 'What does the small number say?',
        paragraphs: [
          'A fictional seedling study compares two light schedules and reports a mean height difference of 0.4 centimetres with a p-value of 0.03. A reader says this means there is a 97% chance that the new schedule works. That interpretation reverses the calculation. The p-value begins by assuming a specified null model, here a model with no mean difference together with the test\'s other assumptions. It asks how unusual the observed test statistic, or something at least as extreme, would be under that model.',
        ],
      },
      {
        title: 'A conditional calculation is not a verdict',
        paragraphs: [
          'In this example, 0.03 means the specified model assigns 3% probability to test statistics at least as extreme by the test\'s rule. It is not a probability that the null model is true, and it is not the chance that randomness caused the result. The calculation does not automatically compare every alternative explanation, including measurement problems or flawed assignment. To interpret it, you need the study design, test definition, and assumptions. A threshold such as 0.05 can label a calculation without making those other questions disappear.',
        ],
      },
      {
        title: 'Keep size and usefulness visible',
        paragraphs: [
          'Suppose the grower would only change the schedule for a gain near three centimetres. A measured 0.4-centimetre difference is a different quantity from a p-value and should be reported alongside an appropriate uncertainty interval. The small p-value alone does not establish the gain needed for that decision. Conversely, a larger p-value would not prove that all worthwhile gains are impossible; limited data could leave them unresolved. Ask how large the estimated effect is, how uncertain it remains, and whether the experiment addresses the real growing conditions before making a practical claim.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'The direction of the p-value calculation',
      alt: 'Assume the null model, calculate the test statistic, and compare it with the model distribution.',
      caption: 'Fictional seedling example. The calculation goes from an assumed model to possible statistics, not from p to the probability a claim is true.',
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
        'Write the fictional result as two quantities: 0.4 centimetres estimated difference and p = 0.03.',
        'Finish the sentence: if the null model and assumptions held, the test statistic would be evaluated against what?',
        'Replace the 97%-chance claim with a request for effect uncertainty, design details, and the practical threshold.',
      ],
      notice: 'Your explanation separates the model calculation from the size and usefulness of the difference.',
      troubleshooting: 'If you write probability the null is true, reverse the sentence and begin with assuming the null.',
    },
    recall: {
      prompt: 'An interface study has p = 0.20. Why does that not establish that the designs are equivalent?',
      hint: 'Ask which differences the data still leave plausible.',
      answer: 'An inconclusive test can reflect limited information. Equivalence needs a defined acceptable difference and suitable analysis; the p-value alone does not rule out differences that matter.',
    },
    quiz: {
      question: 'A service reports a tiny speed gain with a small p-value. What best addresses whether customers should care?',
      options: [
        'Convert one minus p into the probability customers benefit',
        'Treat statistical detectability as evidence that the minimum useful gain was reached',
        'Inspect effect size, uncertainty, design, and the customer-relevant threshold',
      ],
      correctIndex: 2,
      explanation: 'Practical importance depends on the difference and its context. Neither complementing p nor equating statistical detectability with a useful gain answers that question.',
    },
    takeaway: 'A p-value evaluates a statistic under assumptions; it does not assign truth or usefulness.',
    sourceNote: 'The inherited ASA statement sets the interpretation limits. Seedling results are fictional; no experiment, fitted interval, or efficacy claim is asserted.',
  },
  {
    id: 'thinking-018',
    title: 'Knowing the average does not stop the variation',
    outcome: 'Separate uncertainty about a process average from variation between future outcomes.',
    scene: 'A ferry passenger studies boarding delays that vary with the arrival of connecting buses.',
    sections: [
      {
        title: 'Two different unknowns at the ferry',
        paragraphs: [
          'You want to understand how long boarding takes after reaching a ferry terminal. There are two different problems. You do not know the typical duration well yet, and individual departures differ because passengers arrive in uneven groups. More suitable observations can clarify the average. They do not, by themselves, stop connecting buses from arriving in clusters. Confusing these problems creates a false promise: once the dataset is large enough, every future boarding will be close to the average. Accurate knowledge of a variable process can still describe a variable process.',
        ],
      },
      {
        title: 'An average can sit between real outcomes',
        paragraphs: [
          'Use six invented boarding durations: 20, 20, 30, 30, 40, and 40 minutes. Their sum is 180, so the sample mean is 30 minutes. Two departures took ten minutes less and two ten minutes more than that mean. Learning the mean correctly does not change those observations. Even if the underlying average were known exactly, a model with genuine departure-to-departure variation would still predict differences. The sample minimum and maximum here describe these six observations; they are not a guaranteed interval for the next ferry.',
        ],
      },
      {
        title: 'Choose the question for the next measurement',
        paragraphs: [
          'If the goal is to estimate the average more reliably, collect relevant data with consistent definitions and account for dependence between observations. If the goal is to make boarding durations less variable, investigate the process that creates uneven arrivals or handling. Recording more rows is not itself a process change. Also check whether the timetable changed while data accumulated: mixing different regimes can make a precise average describe no current regime well. State whether the next action is intended to improve knowledge, reduce variation, or both, and explain the mechanism for each.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Learning the process versus changing it',
      alt: 'Measuring more comparable departures can clarify the average; changing arrival handling addresses a source of variation.',
      caption: 'Fictional durations total 180 minutes across six departures, giving a 30-minute mean. The 20-to-40 span is observed, not a prediction guarantee.',
      items: [
        { label: 'Improve the estimate', detail: 'Record relevant departures to learn typical boarding duration.' },
        { label: 'Reduce process variation', detail: 'Investigate uneven arrivals or handling that change individual durations.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the six supplied durations and calculate their 30-minute mean.',
        'Mark which departures differ from the mean and by how many minutes.',
        'Write separate proposals for learning the average and investigating what creates the spread.',
      ],
      notice: 'A correct average coexists with individual outcomes above and below it.',
      troubleshooting: 'If your proposed fix is only more measurements, specify how that would change actual boarding rather than knowledge.',
    },
    recall: {
      prompt: 'A printer\'s average job duration becomes precisely estimated, but paper jams still occur unpredictably. What has improved and what has not?',
      hint: 'Knowledge about a process is not the same as its behavior.',
      answer: 'The estimate of typical duration may have improved. The jam-related variation remains unless the underlying process changes; future-job predictions still need to include it.',
    },
    quiz: {
      question: 'A shop gathers many more delivery records without changing operations. Which claim is most defensible?',
      options: [
        'Relevant records may improve estimation while individual delivery variation remains',
        'The larger sample forces future deliveries to cluster around the old mean',
        'The larger sample establishes that seasonal process changes are absent',
      ],
      correctIndex: 0,
      explanation: 'Information can improve estimation without changing the process. Neither reduced variability nor stability across seasons follows from row count alone.',
    },
    takeaway: 'More knowledge of variation does not automatically mean less variation.',
    sourceNote: 'NIST distinguishes uncertainty in a mean from new-observation variation. The ferry sample is invented and supplies no formal forecast interval.',
  },
  {
    id: 'thinking-019',
    title: 'Separate the pattern you found from the test you planned',
    outcome: 'Label exploratory findings and design a specific follow-up without hiding the search.',
    scene: 'An amateur astronomy group searches many star and night-window comparisons for a brightness pattern.',
    sections: [
      {
        title: 'The striking result had many chances to appear',
        paragraphs: [
          'A fictional astronomy group inspects brightness estimates for thirty stars using four different night windows. That creates 120 star-window comparisons. One comparison gives a p-value of 0.04, and the group writes that its prediction was confirmed. But it did not predict that particular star and window before looking. It searched for a striking pattern and selected the one that looked strongest. That can be useful exploration. The problem is presenting the selected result as though it had been the only question facing the data.',
        ],
      },
      {
        title: 'Selection changes the evidential story',
        paragraphs: [
          'Even data with no relevant underlying change can contain unusual-looking subsets. Searching more candidates creates more opportunities to find one. The ordinary p-value for a selected comparison does not automatically account for that search. The comparisons may also be dependent because they share nights or instruments, so you cannot casually count them as independent tests. Preserve which stars, windows, and processing choices were inspected. This record explains how the question arose and prevents the most favorable version from becoming an invisible part of the evidence.',
        ],
      },
      {
        title: 'Let discovery produce a new question',
        paragraphs: [
          'Write a specific follow-up: which star, comparison stars, night window, measurement procedure, and change would be assessed in suitable new observations? Check possible instrument or processing explanations as well. If new data are unavailable, describe the finding as exploratory and use methods appropriate to the actual analysis history rather than pretending the selection did not happen. Confirmation is not achieved just by renaming the same chart a hypothesis. The discovery remains worth discussing; honest labeling tells the next reader which part generated the idea and which later evidence could challenge it.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'A search becomes a follow-up plan',
      alt: 'Inspect 120 comparisons, select a star-window pattern, specify a follow-up, then collect suitable new observations.',
      caption: 'Fictional astronomy workflow. Order distinguishes exploration from later testing; spacing does not represent elapsed time.',
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
        'Write an exploration log listing thirty stars, four windows, and any imagined processing choices.',
        'Label the selected star-window result exploratory rather than previously predicted.',
        'Draft the exact follow-up comparison and one instrument explanation it should address.',
      ],
      notice: 'The discovery and the evidence intended to test it occupy different stages of your plan.',
      troubleshooting: 'If the follow-up allows any star or any window to count, narrow it before looking again.',
    },
    recall: {
      prompt: 'You try many image filters and discover that one seems to improve ratings in one subgroup. How should you present it?',
      hint: 'Tell readers how the filter and subgroup were selected.',
      answer: 'Disclose the search and call it exploratory. Specify a later comparison using suitable new ratings or analysis accounting for selection, rather than treating the chosen subgroup as a prior prediction.',
    },
    quiz: {
      question: 'A researcher changes the time window until a result looks convincing. What is the best next report?',
      options: [
        'Report only the final window because it is the most informative-looking one',
        'Disclose the window search and distinguish the exploratory result from confirmation',
        'Call the final window preplanned because it is now written in the report',
      ],
      correctIndex: 1,
      explanation: 'The selection history is part of interpreting the result. Writing a choice down after inspection does not turn it into an advance prediction.',
    },
    takeaway: 'Exploration can generate a worthwhile question without already confirming its answer.',
    sourceNote: 'The inherited ASA statement supports transparency about analyses and selection. The astronomy search and p-value are fictional, not evidence of a stellar event.',
  },
  {
    id: 'thinking-020',
    title: 'Repeated readings can share the same error',
    outcome: 'Distinguish repeatable measurements from measurements that accurately target the intended quantity.',
    scene: 'A parcel scale repeatedly overstates a reference object because of a fixed offset.',
    sections: [
      {
        title: 'A stable answer can still be wrong',
        paragraphs: [
          'In a fictional measurement exercise, a reference object has a stipulated true mass of 250 grams. A parcel scale has a fixed positive offset of 30 grams, with small additional reading variation. It displays 278, 279, 280, 281, and 282 grams. The average is 280 grams, and the readings cluster closely together. Repeating them looks reassuring. Yet their shared offset makes the average 30 grams too high. Agreement among repeated readings is evidence about repeatability, not by itself evidence that the scale reports the intended mass correctly.',
        ],
      },
      {
        title: 'What repetition can and cannot cancel',
        paragraphs: [
          'The small deviations around 280 may partly cancel when averaged: here they sum to zero around that value. The fixed offset appears in every reading, so averaging preserves it. Taking more readings under the same conditions does not reveal the offset unless other information enters. A suitable reference, a documented calibration, or a different justified measurement procedure can address different uncertainty components. Extra decimal places on the average cannot substitute for that information. A measurement can be precise about the wrong value.',
        ],
      },
      {
        title: 'List the assumptions behind the subtraction',
        paragraphs: [
          'The same issue arises when subtracting timestamps from different clocks. If the receiving clock runs ahead, apparent one-way travel time includes the offset as well as the actual delay. Ask where timestamps are taken, how clocks are aligned, and what resolution and processing delays enter. For a real scale, do not assume an ordinary object has an exactly known mass just because its package has a label. Use approved reference procedures when accuracy matters. The first reasoning step is to identify systematic components that repeated observations might carry unchanged.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'The average retains the offset',
      alt: 'Stipulated reference mass is 250 grams; the mean of five scale readings is 280 grams.',
      caption: 'Invented readings: (278 + 279 + 280 + 281 + 282) / 5 = 280 grams. The shared positive error is 30 grams.',
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
        'Copy the five invented scale readings and calculate their mean.',
        'Subtract the stipulated 250-gram reference from each reading and from the mean.',
        'Write why another hundred readings from the unchanged scale would not by themselves establish the correct mass.',
      ],
      notice: 'The readings vary slightly while their average still carries the common positive error.',
      troubleshooting: 'Separate deviation from the sample mean from error relative to the stated reference mass.',
    },
    recall: {
      prompt: 'A receiving clock is ten milliseconds ahead, and actual network travel takes six milliseconds. What does timestamp subtraction report?',
      hint: 'The receiver adds its clock offset to the arrival timestamp.',
      answer: 'It reports sixteen milliseconds under these assumptions. Repeating the measurement does not remove the shared ten-millisecond offset; clock alignment needs separate evidence.',
    },
    quiz: {
      question: 'A thermometer repeatedly gives nearly identical readings. What additional evidence most directly addresses a possible fixed offset?',
      options: [
        'More repetitions in exactly the same unchanged condition',
        'Displaying the average to more decimal places',
        'A suitable reference comparison with documented uncertainty',
      ],
      correctIndex: 2,
      explanation: 'A reference comparison can reveal systematic disagreement. Repetition measures consistency, while formatting adds no information about the intended true quantity.',
    },
    takeaway: 'Repeated agreement does not remove a shared measurement error.',
    sourceNote: 'NIST uncertainty analysis supports considering measurement components beyond sampling. Masses, offsets, and timestamps are fictional; no real instrument calibration is performed.',
  },
  {
    id: 'thinking-021',
    title: 'Check the starting claims as well as the logic',
    outcome: 'Separate a valid deductive pattern from a sound argument with true premises.',
    scene: 'A community exhibition pass is evaluated using an outdated entry rule.',
    sections: [
      {
        title: 'A conclusion that follows from its starting points',
        paragraphs: [
          'An imaginary exhibition has passes marked with letters. A visitor reasons: every P pass allows Friday entry; Arun holds a P pass; therefore Arun may enter on Friday. The first two statements are premises, the starting claims. The last is the conclusion. If both premises are true with the same meaning of P pass and Friday entry, the conclusion must be true. This is a valid deductive pattern. Validity concerns the connection between statements, not how confidently someone reads them aloud.',
        ],
      },
      {
        title: 'A good connection cannot repair a false premise',
        paragraphs: [
          'Now suppose the first premise came from an outdated poster. The current exhibition guide restricts P passes to Thursday. The reasoning pattern has not changed, but one premise is false for this event. The argument therefore no longer establishes Friday entry.',
          'In deductive logic, a sound argument has both a valid inference and true premises. A conclusion can also happen to be true despite a bad argument: perhaps Arun has another authorization. That possibility does not rescue the outdated premise or make this particular reasoning sound.',
        ],
      },
      {
        title: 'Review in two passes',
        paragraphs: [
          'First inspect the premises: which event and dates does the pass rule cover, what is the current source, and which pass does Arun actually hold? Then inspect the inference: if those claims were true, could the conclusion still fail? This separates evidence problems from logical ones. A reviewer who only spots a tidy pattern can miss a stale rule; a reviewer who only checks facts can miss an invalid connection between them. Write each premise separately so an unsupported step cannot hide inside a fluent sentence. The result is an argument with checkable supports, not merely a persuasive conclusion.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'Both premises support the conclusion',
      alt: 'The universal P-pass rule and Arun holding a P pass both feed the Friday-entry conclusion.',
      caption: 'Fictional exhibition rule. The inference is valid only as a truth-preserving connection; the poster still needs a current factual check.',
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
        'Write the two pass premises and the conclusion on separate lines.',
        'Assume the premises are true and explain why the conclusion follows.',
        'Replace the first premise with the current Thursday-only rule and mark which factual support failed.',
      ],
      notice: 'You can explain the failure without claiming that every part of the reasoning pattern was invalid.',
      troubleshooting: 'Keep the same event and pass meaning throughout; changing the domain introduces another problem.',
    },
    recall: {
      prompt: 'A fabric bundle is claimed to contain only cotton, and a swatch came from that bundle. What needs checking besides the inference that the swatch is cotton?',
      hint: 'The pattern cannot verify its own starting claims.',
      answer: 'Check the bundle\'s actual fiber information and whether the swatch truly came from that bundle. The inference preserves truth if its premises hold; it does not establish those starting facts.',
    },
    quiz: {
      question: 'All models in series R support a feature; this device is in R. Which finding undermines soundness without changing that inference pattern?',
      options: [
        'The current support table lists an R model without the feature',
        'A current inventory independently confirms that this device belongs to R',
        'This device passes a feature test, without information about other R models',
      ],
      correctIndex: 0,
      explanation: 'The exception makes the universal premise false. Confirming membership supports the other premise, while one passing device does not establish or refute the universal support claim.',
    },
    takeaway: 'Check whether the premises are true and whether the conclusion follows; neither check replaces the other.',
    sourceNote: 'The inherited Stanford fallacies reference provides logical background. Exhibition rules and the fabric example are fictional, not verified product or entry claims.',
  },
  {
    id: 'thinking-022',
    title: 'Passing one gate does not mean passing them all',
    outcome: 'Distinguish a necessary condition from a sufficient condition in a stated rule.',
    scene: 'A library member has a valid card but still needs a confirmed study-room reservation.',
    sections: [
      {
        title: 'The card is required, not the whole booking',
        paragraphs: [
          'A fictional library requires a valid membership card at the time it confirms a study-room reservation. A member checks their card and says the room must therefore be booked. But the desired slot could already be occupied, or the booking request might not have been submitted. The card meets one requirement. It does not establish the outcome. Keeping this distinction clear avoids a familiar error: turning a successful preliminary check into a guarantee about a larger process that contains other conditions.',
        ],
      },
      {
        title: 'Read the implication in its supported direction',
        paragraphs: [
          'A necessary condition must hold for the outcome to occur under the stated rule. Here, a confirmed reservation implies that the card was valid when confirmation happened. The reverse does not follow: a valid card need not imply a confirmed reservation. A sufficient condition would be enough to establish the outcome, such as a complete set of conditions that the fictional booking rule explicitly guarantees will produce confirmation. Necessary and sufficient describe relationships, not how important a check feels or how difficult it was to pass.',
        ],
      },
      {
        title: 'Use a counterexample to test the reversal',
        paragraphs: [
          'Picture a valid card and a fully occupied afternoon. That combination obeys the library rule while leaving the person without a reservation. It is a counterexample to the reversed claim. Conversely, a confirmed reservation with an invalid card at confirmation would violate the stated rule, assuming accurate records. A card expiring later would be a different timing question. Write the requirement with its moment attached, then list what remains unresolved: slot availability, request submission, and actual confirmation. The aim is not to add endless gates, but to avoid declaring gates passed without evidence.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Card validity by booking confirmation',
      alt: 'A valid card can accompany either a confirmed or unconfirmed booking; an invalid card cannot accompany confirmation under the rule.',
      caption: 'Fictional rule, evaluated at the moment of confirmation. The valid-card, unconfirmed cell disproves the reversed implication.',
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
        'Write confirmed booking implies a card valid at confirmation, with an arrow in that direction.',
        'Create the valid-card, occupied-slot example and explain why it does not contradict the rule.',
        'List the evidence still needed before telling the member the room is reserved.',
      ],
      notice: 'A concrete counterexample separates a required condition from a guarantee.',
      troubleshooting: 'If you reverse the arrow, test whether a valid card could exist without any booking request.',
    },
    recall: {
      prompt: 'A film submission requires a playable file. Your file plays correctly. What remains uncertain about acceptance?',
      hint: 'Playback could be only one entry requirement.',
      answer: 'Deadlines, eligibility, required information, and selection may remain unresolved. Playability meets one necessary condition; it does not establish that every sufficient acceptance condition has been met.',
    },
    quiz: {
      question: 'Publishing approval requires a spelling check. The check passed. What conclusion fits that rule alone?',
      options: [
        'Publishing approval follows because its named prerequisite passed',
        'The spelling prerequisite is met, but other approval conditions may remain',
        'The spelling check is sufficient whenever no other condition was mentioned in this sentence',
      ],
      correctIndex: 1,
      explanation: 'The statement identifies a necessary condition, not an exhaustive approval rule. Silence about other conditions does not turn one prerequisite into sufficiency.',
    },
    takeaway: 'A required condition must hold, but meeting it may leave the outcome undecided.',
    sourceNote: 'The inherited logic reference supports the distinction. Library and publishing rules are invented examples, not descriptions of real policies.',
  },
  {
    id: 'thinking-023',
    title: 'Match the size of the claim to the evidence',
    outcome: 'Test a universal claim with an in-scope counterexample rather than an irrelevant exception.',
    scene: 'A fictional courier promises next-day delivery for a narrowly defined set of parcels.',
    sections: [
      {
        title: 'Every parcel needs a defined boundary',
        paragraphs: [
          'An imaginary courier claims that every prepaid parcel accepted before 14:00 on a weekday, within its listed local area, arrives by the next day. A friend offers one successful delivery as proof. Another offers a delayed international parcel as a refutation. Neither settles the claim. The successful parcel covers one case, not every eligible case. The international parcel is outside the stated local area. Scope words such as every, some, and within define what evidence must address; they are not decorative emphasis.',
        ],
      },
      {
        title: 'A counterexample must belong to the claim',
        paragraphs: [
          'Now consider a prepaid local parcel accepted at 13:00 on Tuesday that arrives on Friday, with no stated exception covering it. Verified records for that case contradict the next-day promise. One genuine in-scope counterexample is enough to refute a universal statement. It does not tell you how frequently the service misses the promise or which cause produced this delay. Those require other evidence. A universal logical claim and a statistical reliability estimate are different kinds of statement, even when they concern the same deliveries.',
        ],
      },
      {
        title: 'Narrow the statement openly',
        paragraphs: [
          'The courier might instead have evidence that a stated proportion arrived next day during a defined period. That would be a different, potentially supportable claim. It should not silently replace every with usually only after a failure appears. Likewise, do not add exclusions that were absent from the original promise just to protect it. Mark the population, deadline, and exceptions before inspecting cases. Then classify each observation as relevant support, an in-scope contradiction, or outside scope. This makes disagreement about the claim separate from disagreement about what a particular tracking record shows.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Scope by delivery outcome',
      alt: 'In-scope and out-of-scope parcels crossed with next-day and late delivery outcomes.',
      caption: 'Fictional promise. Only the in-scope late cell directly contradicts every eligible parcel arrives next day.',
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
        'Copy the courier promise and underline every, prepaid, local area, and the acceptance deadline.',
        'Classify a Tuesday 13:00 local prepaid parcel arriving Friday and an international parcel arriving late.',
        'Write which case contradicts the promise and what records would verify its eligibility and timing.',
      ],
      notice: 'Your challenge concerns a case inside the original boundary, not an exception invented during debate.',
      troubleshooting: 'If eligibility is unknown, mark it unresolved instead of assuming the case belongs inside the claim.',
    },
    recall: {
      prompt: 'A drawing tool claims every supported format exports correctly. A file fails in an explicitly unsupported format. What follows?',
      hint: 'Identify the claim\'s domain before using the failure.',
      answer: 'That failure does not refute the stated supported-format claim. A verified failure in a supported case would; one successful export cannot establish all supported cases.',
    },
    quiz: {
      question: 'A claim says all eligible devices reconnect within a minute. Which observation directly contradicts it?',
      options: [
        'A device outside the listed eligibility conditions takes two minutes',
        'One eligible device reconnects in twenty seconds',
        'A verified eligible device takes two minutes under the stated conditions',
      ],
      correctIndex: 2,
      explanation: 'The third case lies inside the universal claim and violates its time bound. An excluded case and a passing example have different logical roles.',
    },
    takeaway: 'A universal claim needs its boundary preserved when evidence is offered for or against it.',
    sourceNote: 'The inherited fallacies reference supplies argument-evaluation background. Courier promises and tracking events are fictional, not legal or service advice.',
  },
  {
    id: 'thinking-024',
    title: 'Keep the meaning of complete fixed',
    outcome: 'Replace an ambiguous status word with the exact property its evidence supports.',
    scene: 'A photo archive confuses a completed copy job with a verified usable backup.',
    sections: [
      {
        title: 'The progress bar has finished',
        paragraphs: [
          'An imaginary photo-copying application shows complete when its selected copy tasks have finished. You tell a friend that your backup is complete and therefore the archive is recoverable. The same word now does two jobs. In the interface, it means a scheduled operation finished. In your conclusion, it means the material you need can be restored and used. Those properties are connected only if additional conditions hold. A finished queue does not by itself show that every intended folder was selected or that restored files will open correctly.',
        ],
      },
      {
        title: 'Replace the shared word',
        paragraphs: [
          'An argument that relies on a term changing meaning involves equivocation. You can expose it by rewriting the first sentence as all selected copy tasks finished and the second as the intended archive can be recovered. The missing connection becomes visible. Perhaps some folders were never selected, or a copied file was already damaged before copying. The status could be entirely accurate within its defined scope while the broader claim remains untested. The issue is not that short status words are forbidden, but that their meaning must not quietly expand.',
        ],
      },
      {
        title: 'Add the missing checks, not a stronger adjective',
        paragraphs: [
          'For a real backup plan, inventory the intended material and use appropriate non-destructive restore checks in a separate location. Do not delete originals just to test this lesson. A sample restore can support claims about tested files, while leaving wider coverage questions open. In a report, say which tasks completed, which material was included, and what recovery check succeeded. Replacing complete with fully complete adds emphasis but no evidence. Precise wording helps someone see what is known and which next check would actually connect the operation status to usable recovery.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'One word covering different properties',
      alt: 'Copy tasks finished is an observed operation status; archive recoverability is a broader claim needing additional checks.',
      caption: 'Fictional application wording. Compare the exact properties rather than allowing complete to connect them automatically.',
      items: [
        { label: 'Tasks finished', detail: 'The selected copying operations reached their end state.' },
        { label: 'Archive recoverable', detail: 'The intended material can be restored and used.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the sentence: the copying is complete, so the archive is completely recoverable.',
        'Replace each use of complete with its exact property, without changing any files.',
        'Name one coverage check and one non-destructive recovery check missing between those properties.',
      ],
      notice: 'The revised argument exposes an evidence gap that the repeated status word concealed.',
      troubleshooting: 'If the revision still uses safe or healthy, replace those words with a testable observation too.',
    },
    recall: {
      prompt: 'A website is called up because its home page loads, then described as up for purchases. What changed in the argument?',
      hint: 'Loading a page and completing a transaction are different properties.',
      answer: 'Up shifted from page availability to purchase functionality. A working home page does not establish that checkout, payment, and confirmation work; those need relevant checks.',
    },
    quiz: {
      question: 'A file is called supported because it opens, then assumed supported for editing. Which clarification addresses the reasoning gap?',
      options: [
        'Specify opening versus editable features and check the latter separately',
        'Open more files in the same format without attempting an edit',
        'Repeat the opening test after restarting the application',
      ],
      correctIndex: 0,
      explanation: 'The properties differ. More opening cases or a restart can examine opening reliability, but neither tests the required editing behavior.',
    },
    takeaway: 'Replace broad status words with the properties actually observed.',
    sourceNote: 'The inherited logic reference discusses equivocation. The backup interface is fictional, and the exercise does not perform recovery or delete data.',
  },
  {
    id: 'thinking-025',
    title: 'Check what the expert actually tested',
    outcome: 'Use expert advice while checking whether its domain and conditions match the decision.',
    scene: 'A filmmaker recommends a microphone based on indoor recording with a different phone adapter.',
    sections: [
      {
        title: 'Useful experience with a missing condition',
        paragraphs: [
          'An experienced filmmaker recommends a small microphone because it gave clear speech in an indoor interview. You want to record outdoors using a different phone and adapter. Their experience is relevant: they have heard the microphone in a real recording setup. But the recommendation does not yet answer whether your phone accepts that connection or how wind affects the proposed arrangement. Expertise can supply evidence without supplying a guarantee across every setting. The question is which part of the advice transfers to the conditions you will actually use.',
        ],
      },
      {
        title: 'Ask about the basis, not the person\'s status',
        paragraphs: [
          'A useful follow-up is: which phone, adapter, recording mode, and environment did you use, and what did you compare? That question preserves the value of experience while revealing its boundary. Seniority alone cannot establish compatibility, just as selling microphones does not automatically make a recommendation false. Commercial interests can motivate closer checking, but affiliation is not a substitute for examining the claim. Separate relevant domain knowledge, firsthand observations, and assumptions about conditions the expert has not tested. They are different kinds of support.',
        ],
      },
      {
        title: 'Resolve the gap with matching evidence',
        paragraphs: [
          'Suppose the filmmaker confirms that the adapter was different and no outdoor comparison was made. You can still retain the narrower claim: the microphone performed acceptably in that indoor setup by their judgment. For your choice, consult the relevant compatibility information and, if practical, make an ordinary consented test in your own permitted setting before relying on it. Do not demand a universal verdict from one person. A careful recommendation can include I have not tested that combination. That limit is useful information, not evidence that the person lacks expertise altogether.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Tested setup and intended setup',
      alt: 'The expert tested indoor speech with one phone adapter; the learner plans outdoor speech with another adapter.',
      caption: 'Hypothetical recommendation. Inspect the changed conditions rather than ranking the speaker\'s status.',
      items: [
        { label: 'Expert\'s observation', detail: 'Indoor interview; known phone and adapter; clear speech by their judgment.' },
        { label: 'Your proposed recording', detail: 'Outdoor conditions; different phone and adapter; compatibility unverified.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write the microphone recommendation as a claim limited to the setup actually described.',
        'List the adapter and environment differences relevant to your fictional outdoor recording.',
        'Draft one respectful question about each gap and name a matching evidence source or test.',
      ],
      notice: 'You keep the useful observation while making its untested extensions explicit.',
      troubleshooting: 'If your question only asks whether the expert is trustworthy, replace it with a setup-specific question.',
    },
    recall: {
      prompt: 'A skilled baker recommends a timing rule developed with a different oven and pan. How would you use that advice?',
      hint: 'Preserve expertise while checking conditions that affect the result.',
      answer: 'Treat it as relevant experience with stated conditions, then ask about the oven, pan, and observable finish criteria. Do not assume the same time guarantees the same result in a different setup.',
    },
    quiz: {
      question: 'A specialist recommends software tested only on one operating system. What most directly addresses use on another?',
      options: [
        'The specialist\'s total years working with computers',
        'Evidence about the required features on the intended operating system',
        'The number of people who liked the original recommendation',
      ],
      correctIndex: 1,
      explanation: 'Matching platform evidence addresses the actual gap. Experience and popularity can inform context but cannot establish an untested compatibility claim.',
    },
    takeaway: 'Use expertise with a named domain, evidential basis, and boundary of applicability.',
    sourceNote: 'The inherited fallacies discussion informs this evaluation heuristic. The filmmaker and equipment experience are fictional, not a product review.',
  },
  {
    id: 'thinking-026',
    title: 'A failed justification does not prove the opposite',
    outcome: 'Separate rejection of an argument from evidence that its conclusion is false.',
    scene: 'A popular file compressor is described as lossless without evidence about restoration.',
    sections: [
      {
        title: 'Popularity does not establish exact restoration',
        paragraphs: [
          'A friend recommends an imaginary file compressor: professionals use it, so its output must be lossless. Lossless means that decoding can recover the original data exactly, not merely that the result looks similar. You correctly object that professional use does not establish that property for the chosen format and settings. Then you conclude that the compressor must discard data. That second leap is unsupported too. The offered argument failed to establish losslessness; it did not establish data loss. The underlying technical claim still needs evidence.',
        ],
      },
      {
        title: 'Keep two verdicts separate',
        paragraphs: [
          'A conclusion can be true even when someone gives a weak reason for it. The compressor might implement a documented lossless mode, while the friend simply described its popularity instead of its mechanism. Conversely, a persuasive reputation story could accompany a lossy mode.',
          'Write one verdict about the argument, such as popularity is insufficient support, and another about the claim, such as exact restoration remains unverified. This avoids turning logical criticism into a contest where exposing a mistake supposedly makes the critic\'s opposite conclusion true.',
        ],
      },
      {
        title: 'Name evidence that could settle the actual question',
        paragraphs: [
          'Relevant evidence includes the specified format and mode, reliable documentation, and appropriate encode-decode comparisons of original and restored data. A mismatch in a valid test would challenge exact restoration in that case; a successful sample would support the tested cases without proving every possible input. You need not run any compressor for this lesson. Draft the evidence request and keep the original files out of risk. The useful response is: that reason does not establish losslessness; let us check the selected mode and restoration behavior. It identifies the reasoning gap without pretending uncertainty is already a negative verdict.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Different claims need different support',
      alt: 'Popularity is insufficient proof of losslessness; verified restored-data differences would be evidence against exact restoration in a case.',
      caption: 'Hypothetical compressor. Rejecting one justification and finding contradictory technical evidence are different operations.',
      items: [
        { label: 'Argument not established', detail: 'Professional use alone does not show exact restoration.' },
        { label: 'Contrary evidence', detail: 'A valid test restoring different data would challenge losslessness in that case.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen'],
      steps: [
        'Copy the popularity argument and underline the missing connection to exact data restoration.',
        'Write separate labels for the argument verdict and the unresolved technical claim.',
        'Draft a request for mode documentation and a non-destructive test plan, without running any conversion.',
      ],
      notice: 'Your criticism rejects inadequate support without inventing a result about the compressor.',
      troubleshooting: 'If you write therefore it is lossy, add the independent evidence that would justify that conclusion.',
    },
    recall: {
      prompt: 'A person claims a bus route is faster because it is popular. You reject that reason. What remains to be investigated?',
      hint: 'A weak reason does not establish that the route is slower.',
      answer: 'Comparable journey times, departure conditions, and the chosen definition of faster remain relevant. Popularity might have other causes; rejecting it does not rank the routes by travel time.',
    },
    quiz: {
      question: 'An award is offered as proof that a poster is readable. You show that the award did not assess readability. What follows?',
      options: [
        'The poster is unreadable because its offered support failed',
        'Any unawarded poster is more readable by comparison',
        'The award does not establish readability; relevant reading evidence is still needed',
      ],
      correctIndex: 2,
      explanation: 'The criticism concerns the support, not a direct readability test. The poster could be readable for reasons the award argument did not supply.',
    },
    takeaway: 'Unsupported is different from disproved.',
    sourceNote: 'The inherited argument reference informs this distinction. The compressor scenario is fictional and does not establish properties of any real format.',
  },
  {
    id: 'thinking-027',
    title: 'Compare choices across more than the usual outcome',
    outcome: 'Compare probability-weighted outcomes while keeping preferences and constraints explicit.',
    scene: 'A passenger chooses between a shortcut bus route and a steadier main-road route.',
    sections: [
      {
        title: 'The fastest usual trip is not the only outcome',
        paragraphs: [
          'For a fictional journey, suppose traffic is clear with probability 80% and congested with probability 20%. A shortcut route takes 15 minutes when clear and 55 when congested. A main-road route takes 25 or 30 minutes in those same states. The shortcut wins in the more likely state. But the less likely congestion has a larger consequence there. Write all four outcomes before choosing. These probabilities and durations are invented to illustrate reasoning, not live traffic estimates or promises about either route.',
        ],
      },
      {
        title: 'Calculate what the average comparison actually values',
        paragraphs: [
          'The shortcut\'s expected duration is 0.8 x 15 plus 0.2 x 55, or 23 minutes. The main road gives 0.8 x 25 plus 0.2 x 30, or 26 minutes. Expected means probability-weighted average, not the duration guaranteed on the next trip. Minimizing that average favors the shortcut in this model. But that rule treats minutes as having a simple linear cost. Expected utility instead weights the desirability of outcomes, which need not track elapsed time in such a simple way.',
        ],
      },
      {
        title: 'The consequence can change the preference',
        paragraphs: [
          'Suppose your ordinary plan requires arrival within 35 minutes. In the toy table, the main road meets that condition in both states, while the shortcut misses it in the congestion state. You may prefer the main road despite its larger average. This is not a claim that everyone should always select the worst-case winner. It makes the preference and constraint visible. Real planning needs defensible probabilities, additional possible disruptions, accessibility, and costs. A decision table organizes those questions; it does not authorize ignoring a requirement just because a weighted average looks attractive.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Route by traffic state',
      alt: 'Shortcut takes 15 minutes clear and 55 congested; main road takes 25 clear and 30 congested.',
      caption: 'Invented two-state model: clear 80%, congested 20%. Expected times are 23 and 26 minutes, not individual-trip guarantees.',
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
        'Copy the route table and multiply each duration by its traffic-state probability.',
        'Add each route\'s weighted terms and verify the expected durations of 23 and 26 minutes.',
        'Circle outcomes above 35 minutes and write why a deadline preference could change the chosen route.',
      ],
      notice: 'The smallest expected duration and the preferred deadline outcome need not select the same route.',
      troubleshooting: 'Do not average the two state durations equally; their stated probabilities are different.',
    },
    recall: {
      prompt: 'A cheap print option usually works but occasionally requires reprinting. What belongs in a comparison with a more reliable option?',
      hint: 'Include the consequence of failure, not only the usual price.',
      answer: 'Include reprint cost, delay, acceptable quality, and defensible outcome probabilities. A lower typical price need not mean a preferred choice when a failed print has consequences that matter.',
    },
    quiz: {
      question: 'An option has the lowest expected cost but sometimes breaches a firm requirement. What should the comparison do?',
      options: [
        'Check feasibility and preferences rather than letting the average override the requirement',
        'Choose it because expected cost already incorporates every kind of consequence',
        'Reject every uncertain option regardless of whether its outcomes meet the requirement',
      ],
      correctIndex: 0,
      explanation: 'Expected cost is one model of value, not automatic permission to violate a constraint. Uncertainty alone also does not make every other feasible option unacceptable.',
    },
    takeaway: 'Probabilities, consequences, preferences, and constraints all belong in the choice.',
    sourceNote: 'Stanford\'s Decision Theory entry was checked for expected utility and its limits. Route calculations use explicit fictional assumptions, not a universal rule of rational preference.',
  },
  {
    id: 'thinking-028',
    title: 'Name the real alternative a free event displaces',
    outcome: 'Identify opportunity cost without adding every imaginable alternative together.',
    scene: 'A free neighborhood lecture competes with a planned two-hour drawing session.',
    sections: [
      {
        title: 'No ticket price, but a real choice',
        paragraphs: [
          'A neighborhood lecture has no admission fee. Including travel, it occupies the same two-hour Saturday block you had reserved for drawing. Calling the lecture free describes its ticket price, not every consequence of attending. You cannot spend that exact block doing both activities. Suppose drawing is the most valuable feasible alternative for you that afternoon. The opportunity cost of attending is the value of that displaced drawing session. This value need not be money, public achievement, or something anyone else would rank the same way.',
        ],
      },
      {
        title: 'The alternative must be possible',
        paragraphs: [
          'You might imagine a paid assignment, a trip, and time with a friend as alternatives too. But an assignment not offered and a friend who is unavailable are not feasible uses of this block. Do not inflate the cost by adding the value of every activity you can name. Opportunity cost concerns the best feasible alternative forgone. Rest can be that alternative. If drawing can move to another genuinely empty block without displacing anything valuable, the tradeoff also changes. Check the real schedule instead of assuming every postponement is costless.',
        ],
      },
      {
        title: 'Compare without forcing one universal answer',
        paragraphs: [
          'Perhaps this lecture covers a topic you have wanted to understand, and you prefer it to drawing today. Attending can still be a sensible choice with a nonzero opportunity cost. Naming the tradeoff does not mean rejecting anything without immediate payoff. It prevents zero price from ending the comparison prematurely.',
          'Write the lecture\'s benefits, the actual displaced option, and any existing commitments. Then choose using your priorities rather than a demand to monetize every hour. The finished reasoning should explain what you give up, not turn your entire weekend into a productivity calculation.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'Two uses of the same Saturday block',
      alt: 'Attend the free lecture including travel, or keep the planned drawing session in the same two-hour block.',
      caption: 'Hypothetical personal choice. The time block is shared; its subjective value is not assigned an invented money score.',
      items: [
        { label: 'Attend the lecture', detail: 'No admission fee; lecture and travel occupy two hours.' },
        { label: 'Keep the drawing session', detail: 'The preferred feasible alternative in that same two-hour block.' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pen', 'Your personal calendar, if useful'],
      steps: [
        'Choose one optional, low-stakes activity and mark the time it actually occupies, including travel.',
        'List feasible alternatives for that same block, allowing rest and existing personal commitments.',
        'Select the best displaced alternative by your priorities and explain the tradeoff without summing every option.',
      ],
      notice: 'Zero cash price no longer makes the choice look consequence-free.',
      troubleshooting: 'If an alternative depends on unavailable people or time, remove it from the feasible comparison.',
    },
    recall: {
      prompt: 'A free desk uses the only space where your keyboard instrument fits. What is a relevant opportunity cost?',
      hint: 'A scarce resource can be space rather than time.',
      answer: 'The best feasible use displaced by the desk may be keeping the instrument accessible. Compare that use, not the desk\'s zero price or every imagined use of the room combined.',
    },
    quiz: {
      question: 'A free class occupies your only available evening. Which comparison identifies its opportunity cost?',
      options: [
        'Add the value of every hobby and social event imaginable that evening',
        'Compare it with the best genuinely available use of that same evening',
        'Ignore time because no payment changes hands',
      ],
      correctIndex: 1,
      explanation: 'The next-best feasible displaced option is the relevant alternative. Adding mutually exclusive possibilities overstates cost, while zero payment does not remove a time tradeoff.',
    },
    takeaway: 'A choice gives up its best feasible displaced alternative, not every possible alternative.',
    sourceNote: 'OpenStax supplies opportunity-cost background. The lecture and personal priorities are hypothetical, not a prescription to value leisure in money.',
  },
  {
    id: 'thinking-029',
    title: 'Keep useful work without owing it more work',
    outcome: 'Separate irrecoverable past effort from current assets and future costs.',
    scene: 'An unfinished handmade costume competes with borrowing a suitable finished costume.',
    sections: [
      {
        title: 'Six hours are already gone either way',
        paragraphs: [
          'You have spent six hours making a costume when a friend offers a suitable finished one to borrow. Continuing feels necessary because otherwise those hours were wasted. But the hours have already passed whether you sew more or borrow. They are sunk effort: a past cost that this choice cannot recover. Spending more time does not return them. The decision now concerns what each option offers from this point forward, including enjoyment, fit, timing, remaining work, and any commitments to the person lending the alternative.',
        ],
      },
      {
        title: 'What the past produced can still matter',
        paragraphs: [
          'Suppose finishing would take three more hours from the current rough pieces. You discover that completed cuffs can be attached directly, reducing the remaining work to two hours. Those cuffs are a present asset, not merely a reason to justify history. Borrowing takes one hour for agreed collection and return arrangements in this fictional comparison. The relevant time comparison is two future hours versus one, not eight versus one. The six past hours are shared history; the reusable cuffs change a cost that still lies ahead.',
        ],
      },
      {
        title: 'The forward comparison need not favor abandoning',
        paragraphs: [
          'You might still choose to finish because you enjoy sewing or want the particular design. That is a future benefit, not a debt owed to past effort. Alternatively, borrowing could fit your available time better while you save the unfinished pieces for another occasion. Include real migration or switching costs, such as checking the borrowed fit and honoring the return plan. Ignoring sunk effort does not mean destroying useful work to prove detachment. Make three lists: unrecoverable history, assets available now, and consequences of each next action. Only the last two can change what happens from here.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'The remaining choice starts now',
      alt: 'Finish the costume in two further hours using existing cuffs, or borrow with one hour of arrangements.',
      caption: 'Invented time estimates. Six past hours are not recoverable under either option; existing cuffs reduce future sewing from three hours to two.',
      items: [
        { label: 'Finish the costume', detail: '2 future hours after reusing completed cuffs; keeps the chosen design.' },
        { label: 'Borrow the costume', detail: '1 future hour for collection and return arrangements; fit is already checked.' },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pen'],
      steps: [
        'Write six spent hours under history, then list the completed cuffs under assets available now.',
        'Compare two remaining sewing hours with one borrowing hour, keeping other benefits in separate words.',
        'Write a reason to finish that concerns future value, then a reason to borrow that concerns future constraints.',
      ],
      notice: 'Either choice can be defended without pretending that more work recovers elapsed hours.',
      troubleshooting: 'If a reason begins after all that effort, ask what future cost or benefit it actually changes.',
    },
    recall: {
      prompt: 'A half-written script could be replaced by an existing tool. Which parts of the unfinished work still belong in the comparison?',
      hint: 'Ask what can reduce costs or improve outcomes from now on.',
      answer: 'Reusable tests, working components, and acquired knowledge can affect future effort. Past hours alone cannot be recovered; remaining development, migration, and maintenance still matter.',
    },
    quiz: {
      question: 'A partly completed illustration has taken a weekend. Which reason is forward-looking rather than sunk-cost justification?',
      options: [
        'Stopping would make the weekend look poorly spent',
        'The original plan should be finished because it came first',
        'Existing sketches reduce the remaining work for the version you now prefer',
      ],
      correctIndex: 2,
      explanation: 'The sketches are present assets affecting future work. Protecting the appearance of past effort or the priority of an old plan does not itself improve future outcomes.',
    },
    takeaway: 'Past effort is gone; usable assets and future consequences remain relevant.',
    sourceNote: 'The inherited economics reference supplies choice and sunk-cost background. Costume times are invented and do not prescribe whether to finish a personal project.',
  },
  {
    id: 'thinking-030',
    title: 'Ask what a measurement would let you choose differently',
    outcome: 'Connect information gathering to a decision that its result could improve.',
    scene: 'A storage-box purchase depends on measuring a shelf gap before leaving home.',
    sections: [
      {
        title: 'One missing measurement controls the purchase',
        paragraphs: [
          'You are considering a storage box forty centimetres wide. In this fictional setup, you require two additional centimetres of clearance, so the shelf gap must be at least 42 centimetres. You can either buy the box or keep the smaller organizer already in use. The gap has not been measured. A ruler reading has a clear decision role: if the usable gap meets the requirement, buying remains an option; if it does not, you avoid a purchase that cannot serve its intended place.',
        ],
      },
      {
        title: 'Information earns its place through changed action',
        paragraphs: [
          'The value of information concerns how knowing something can improve a choice, accounting for the effort, delay, and other costs of finding it out. It is not the same as how detailed a report looks. Suppose instead that you have already decided to keep the current organizer regardless of the gap. Measuring might satisfy curiosity or document the room, but it would not resolve this purchase decision. Those other purposes can be legitimate. Naming them prevents an activity from being called necessary decision research when every plausible result leads to the same action.',
        ],
      },
      {
        title: 'Write the branches before collecting more',
        paragraphs: [
          'Before measuring, write the action for an adequate gap, an inadequate gap, and a borderline reading. The last matters because measurement itself can be uncertain. You might recheck a borderline case rather than buy on a rounded number. Also verify other requirements such as height and access if they could prevent use. A free, easy measurement that changes the feasible choice can be worthwhile; a costly investigation needs a stronger justification. The aim is not to stop learning unrelated facts, but to distinguish learning for interest from information that can alter a specific decision.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Purchase action by actual shelf clearance',
      alt: 'Buying works with adequate clearance but fails its purpose with inadequate clearance; keeping the current organizer remains feasible in both states.',
      caption: 'Fictional fit requirement: 40-centimetre box plus 2-centimetre clearance needs 42 centimetres. Measure before choosing, not to decorate the decision afterwards.',
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
        'Write the fictional 42-centimetre requirement and both available actions; no purchase is needed.',
        'Specify the next action for readings of 45 centimetres, 39 centimetres, and a borderline result.',
        'Explain whether learning the gap could change your choice, and identify another fit requirement if relevant.',
      ],
      notice: 'Each useful measurement has a decision branch rather than an undefined promise of more certainty.',
      troubleshooting: 'If every result produces the same action, name another purpose or reconsider collecting the measurement now.',
    },
    recall: {
      prompt: 'A photographer considers another test export, but either result leads to the same required compatibility check. What should they ask?',
      hint: 'Separate resolving a decision from documenting or exploring.',
      answer: 'Ask which later choice the export could change and at what cost. It might have another useful purpose, but it does not replace or resolve the unchanged compatibility requirement.',
    },
    quiz: {
      question: 'You will book a workshop only if your camera is compatible; date and cost are already acceptable. Which check most directly resolves the choice?',
      options: [
        'Confirm the supported-camera list with the organizer',
        'Find the typical number of participants in previous sessions',
        'Check how many optional practice files the class includes',
      ],
      correctIndex: 0,
      explanation: 'Compatibility determines the stated book-or-decline branch. Class size and practice files may inform other preferences, but do not resolve this particular missing condition.',
    },
    takeaway: 'Before gathering another fact, name the choice that could change when you learn it.',
    sourceNote: 'Stanford\'s Decision Theory entry was checked for value-of-information reasoning. Box dimensions and clearance are illustrative, not universal furniture tolerances.',
  },
  {
    id: 'thinking-031',
    title: 'Check every relevant criterion before removing an option',
    outcome: 'Identify dominance within a stated comparison without hiding an omitted requirement.',
    scene: 'Two fictional offline image converters differ in price while other required features appear matched.',
    sections: [
      {
        title: 'A simpler shortlist is possible',
        paragraphs: [
          'You need an offline image converter for personal artwork. Two fictional tools both handle the required formats, work on your computer, and have suitable licenses. Tool A costs 400 rupees and tool B costs 300. Suppose output quality, required features, support, and other relevant conditions are also verified as equal. B is no worse on those criteria and better on price. In this decision model, A is dominated by B. You can remove A without first assigning an exact money value to every feature.',
        ],
      },
      {
        title: 'Dominance depends on what the comparison contains',
        paragraphs: [
          'Now discover that B adds a watermark to the output mode you need, while A does not. If watermark-free artwork is required, the original comparison omitted a decisive condition. B no longer dominates A merely by costing less. Dominance means at least as good across the relevant comparisons and better in at least one, not best on your favorite column. When each option has an advantage that matters, you face a tradeoff. That tradeoff cannot be erased by calling the cheaper option obviously superior.',
        ],
      },
      {
        title: 'State the conditions of removal',
        paragraphs: [
          'Before pruning a shortlist, list the requirements and verify which claims are known, assumed, or untested. For software, include compatibility, permitted use, output restrictions, maintenance, and any costs beyond the headline price when relevant. A paid feature you never need may not matter, while a small restriction in the exact export mode may decide feasibility. Write A is dominated on these verified criteria under these conditions, rather than A is universally worse. If an important entry is unknown, keep the option provisionally instead of manufacturing certainty from an incomplete table.',
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: 'The price advantage needs matched output conditions',
      alt: 'Tool A costs 400 rupees and tool B 300; the comparison must also check the required watermark-free export mode.',
      caption: 'Fictional tools. B dominates only under the stated matching conditions; an output restriction can invalidate that conclusion.',
      items: [
        { label: 'Tool A: 400 rupees', detail: 'Required formats and platform work; check clean output and other requirements.' },
        { label: 'Tool B: 300 rupees', detail: 'Lower price is decisive only if required conditions are no worse.' },
      ],
    }],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pen'],
      steps: [
        'List price, platform, required formats, permitted use, and watermark-free output for the fictional tools.',
        'Assume all nonprice entries match and explain why A can be removed in that limited model.',
        'Change B\'s required output to watermarked and revise the verdict, keeping the omitted criterion visible.',
      ],
      notice: 'Your dominance claim changes when a relevant comparison changes, rather than surviving by ignoring it.',
      troubleshooting: 'If you only compare price, write the actual job the tool must perform before ranking it.',
    },
    recall: {
      prompt: 'One train ticket is cheaper with the same departure and seat, but cannot be changed. Is the dearer ticket dominated?',
      hint: 'Does changeability matter for the intended trip?',
      answer: 'Not necessarily. If flexibility matters, the dearer ticket has a relevant advantage. If all relevant conditions truly match, lower price can establish dominance within that narrower model.',
    },
    quiz: {
      question: 'Two printers trade lower ink cost against a required larger paper size. What best describes the comparison?',
      options: [
        'The lower-ink-cost printer dominates regardless of supported paper size',
        'A relevant tradeoff or feasibility constraint, not price-only dominance',
        'The larger printer dominates because one requirement always outweighs every other cost',
      ],
      correctIndex: 1,
      explanation: 'Paper support must be included, and a firm requirement can remove an infeasible option. A single attractive feature does not establish dominance across the relevant model.',
    },
    takeaway: 'Dominance is a conclusion about explicit criteria, not a synonym for cheaper.',
    sourceNote: 'The inherited decision-theory reference informs this framework. Tool prices and restrictions are invented; relevant preferences must be stated rather than assumed universal.',
  },
  {
    id: 'thinking-032',
    title: 'Ask what undo would really restore',
    outcome: 'Evaluate reversibility by preserved state, access, timing, and consequences that remain.',
    scene: 'A booklet designer can restore a layout file but cannot unprint already produced proofs.',
    sections: [
      {
        title: 'The file can go back; the paper cannot',
        paragraphs: [
          'You plan to crop a scanned drawing for a small booklet. Working on a separate copy preserves the original, so you call the change reversible. For the pixels in that working copy, restoration may be straightforward. But suppose you send the cropped layout for a printed proof first. Restoring the digital file does not recover the paper, ink, or time already used. Reversibility is not a single label attached to an edit. It depends on which parts of the situation you need to restore and which consequences have already left your control.',
        ],
      },
      {
        title: 'A later option needs the means to carry it out',
        paragraphs: [
          'A rollback is a planned return to a prior state. It is feasible only if that state is preserved, you retain access, the restoration method works, and you can perform it when needed. An undo button is not proof that all of these conditions hold. Saving an original separately preserves an option; overwriting it and assuming the application will remember forever does not. In a sequence of decisions, the value of trying something now depends partly on which later choices actually remain available.',
        ],
      },
      {
        title: 'Stage the choice before consequences spread',
        paragraphs: [
          'For the booklet, a private on-screen proof can come before printing. Name a review trigger, such as essential linework disappearing in the crop, and a return action, such as reopening the preserved original. Keep the old version until the relevant checks are complete. Also list what cannot be undone after each stage: printed material, shared copies, or another person\'s time. This does not mean every experiment should be avoided. It means a small-looking change should not be described as harmless simply because one file can be restored. Assess the whole sequence, not just its first command.',
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: 'Where restoration stops being complete',
      alt: 'Preserve the original, edit a separate copy, review privately, then print a proof with persistent material costs.',
      caption: 'Hypothetical booklet workflow. The sequence is schematic; restoring the original does not reverse paper and ink already consumed.',
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
        'Draft the booklet sequence on paper without changing any actual files or sending a print job.',
        'Mark the preserved state, restoration access, and the condition that would trigger returning to the original.',
        'List one consequence after printing that restoring the digital file would not undo.',
      ],
      notice: 'Your rollback description names what returns and what remains changed.',
      troubleshooting: 'If you only write press undo, specify what happens if the application closes or the proof has left you.',
    },
    recall: {
      prompt: 'A website setting can be restored, but customers received messages while it was enabled. What is missing from the reversibility claim?',
      hint: 'Restoring configuration and reversing communication are different tasks.',
      answer: 'The messages and their consequences remain after the setting changes back. A complete plan needs to describe those residual effects and any permitted follow-up, not just configuration restoration.',
    },
    quiz: {
      question: 'A trial can restore settings but changes information needed by the old version. Which check most directly tests rollback feasibility?',
      options: [
        'Verify that the old setting values can be selected again',
        'Measure how quickly the new version starts with its changed information',
        'Verify that preserved compatible state lets the old version actually resume',
      ],
      correctIndex: 2,
      explanation: 'The old configuration may be unusable without its required data. A selectable setting and a quick new-version startup do not establish that the prior state can resume.',
    },
    takeaway: 'A reversible setting can still create consequences that are not reversible.',
    sourceNote: 'Stanford\'s decision-theory discussion of sequential choices informs this heuristic. The booklet workflow is illustrative, not an operational rollback procedure.',
  },
  {
    id: 'thinking-033',
    title: 'Find the estimate that flips the choice',
    outcome: 'Calculate a decision-changing threshold and test plausible inputs on either side.',
    scene: 'A commuter compares a monthly transit pass with per-ride fares under uncertain attendance.',
    sections: [
      {
        title: 'One attendance estimate hides the tradeoff',
        paragraphs: [
          'In a fictional fare system, a monthly pass costs 600 rupees and individual rides cost 40 rupees. Both cover the same trips, with no other fees or relevant differences. You expect somewhere between twelve and eighteen rides next month because your schedule is not settled. At twelve rides, paying individually costs 480 rupees, so the pass costs 120 more. At eighteen rides, individual fares total 720 rupees, so the pass saves 120. Choosing one convenient ride estimate can conceal how readily the ranking changes.',
        ],
      },
      {
        title: 'Calculate the crossing point',
        paragraphs: [
          'The break-even point solves 40 times the ride count equals 600. Dividing 600 by 40 gives fifteen rides. Below fifteen, individual fares cost less; above fifteen, the pass costs less; at fifteen, the costs match. Sensitivity analysis asks how the recommendation changes when an uncertain input changes. Here it identifies a concrete threshold inside your plausible range. The range of twelve to eighteen is a planning assumption, not a confidence interval or a claim that every count within it is equally probable.',
        ],
      },
      {
        title: 'Improve the estimate that matters',
        paragraphs: [
          'Now checking your actual attendance calendar has a clear purpose: it could move the expected use to one side of fifteen. If every plausible schedule required more than twenty rides, fine-tuning the exact count would matter less to the cost ranking. Real passes may have route restrictions, refund conditions, or convenience benefits, so include relevant differences before treating price as the whole decision. If fares and attendance could change together, compare joint scenarios too. The useful output is a statement of when each option wins, not extra decimal places around an unsupported forecast.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Costs on both sides of fifteen rides',
      alt: 'At twelve rides individual fares cost 480 rupees versus a 600-rupee pass; at eighteen they cost 720 versus 600.',
      caption: 'Invented prices. Individual fares equal 40 x rides; the pass stays 600. The ranking crosses at 600 / 40 = 15 rides.',
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
        'Calculate individual-fare totals for twelve, fifteen, and eighteen rides using the fictional price.',
        'Compare each with 600 rupees and mark individual, equal, or pass as the cheaper choice.',
        'Write which attendance information could move the decision across fifteen and which fare assumptions need checking.',
      ],
      notice: 'Your recommendation has an explicit condition rather than depending silently on one guessed ride count.',
      troubleshooting: 'If both options seem to change with rides, remember that the hypothetical pass price is fixed.',
    },
    recall: {
      prompt: 'A print service has a setup fee but a lower price per page. What should you find before committing an uncertain page count?',
      hint: 'Find where the total-cost lines meet.',
      answer: 'Calculate the page count at which its total equals the alternative, then test plausible counts on both sides. Check whether quality, delivery, or other conditions change the comparison.',
    },
    quiz: {
      question: 'A tool wins only when maintenance takes fewer than three hours monthly; plausible estimates range from two to five. What is the useful next focus?',
      options: [
        'Improve the maintenance estimate because its threshold lies inside the plausible range',
        'Use two hours because it produces a clearer recommendation',
        'Treat the midpoint as measured and stop examining the range',
      ],
      correctIndex: 0,
      explanation: 'The uncertain input can reverse the ranking. Selecting a favorable endpoint or treating a midpoint as established hides that sensitivity rather than resolving it.',
    },
    takeaway: 'A threshold tells you which uncertain estimate could actually change the preferred option.',
    sourceNote: 'The inherited decision reference informs sensitivity reasoning. Fares, counts, and planning bounds are fictional, not actual transit prices or probability estimates.',
  },
  {
    id: 'thinking-034',
    title: 'Judge the choice using what was knowable then',
    outcome: 'Review a decision process separately from the single outcome that followed it.',
    scene: 'A rehearsal-room booking fails after an unannounced building problem despite relevant advance checks.',
    sections: [
      {
        title: 'An unlucky result can follow a careful choice',
        paragraphs: [
          'You book a rehearsal room after checking its availability, access arrangements, suitable equipment, and agreed price. On the day, an unannounced pipe failure closes the building. The rehearsal cannot happen there. It is easy to rewrite the decision as obviously foolish now that you know the outcome.',
          'But the question is what information was available when you chose. A reasonable choice under uncertainty can have an unfavorable result. Knowing afterwards which possibility occurred does not mean that outcome was predictable or avoidable beforehand.',
        ],
      },
      {
        title: 'Good luck does not certify the process either',
        paragraphs: [
          'Contrast a second fictional booking made without checking whether the room was open. The group arrives and happens to find it available. That successful outcome does not establish that skipping the check was a good procedure. Separate process quality from result: what options were feasible, what mattered, what evidence was reasonably obtainable, and how were remaining risks handled? This is not a way to excuse every failure. If an accessible closure notice existed before booking and was missed, that is relevant evidence of a preventable gap.',
        ],
      },
      {
        title: 'Leave a record before the result teaches hindsight',
        paragraphs: [
          'For a low-stakes choice, record the options, checked facts, uncertainties, and conditions that would make you reconsider. Later, compare that record with what happened. Ask whether the result reveals a missing check, an inaccurate belief, a process change, or an acknowledged risk occurring. Repeated outcomes can teach you about reliability, so do not ignore them. Just avoid using a single success or failure as the entire judgment. A useful review can say the room choice was supported, the closure was not reasonably knowable, and a feasible backup location would be worth considering next time.',
        ],
      },
    ],
    visuals: [{
      type: 'matrix',
      title: 'Decision process and realized outcome differ',
      alt: 'A supported or weak booking process can each be followed by either an available or unavailable room.',
      caption: 'Fictional possibilities, not measured frequencies. Read process evidence separately from the outcome observed later.',
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
        'For a small upcoming choice, write two feasible options and what matters before knowing the result.',
        'Record checked facts, one remaining uncertainty, and a reasonable condition for changing the choice.',
        'Imagine a disappointing result and list what evidence would distinguish a missed warning from an unforeseeable event.',
      ],
      notice: 'Your review criteria exist before hindsight supplies the answer.',
      troubleshooting: 'If your only criterion is it worked, add a fact that could have been checked at decision time.',
    },
    recall: {
      prompt: 'A train arrives on time despite a passenger ignoring an available disruption notice. What can the successful trip establish?',
      hint: 'Separate the realized arrival from the information the choice neglected.',
      answer: 'It establishes that this trip arrived on time, not that ignoring relevant notices is a sound decision process. Review the notice and alternatives using what was available before departure.',
    },
    quiz: {
      question: 'A carefully checked venue cancels unexpectedly. Which finding most directly changes the assessment of the original decision process?',
      options: [
        'The cancellation is frustrating in hindsight',
        'A relevant closure warning was publicly available before booking but overlooked',
        'A different venue happened to remain open that day',
      ],
      correctIndex: 1,
      explanation: 'An obtainable warning identifies a possible process gap at the time of choice. Frustration and another venue\'s realized outcome do not alone establish what should have been known.',
    },
    takeaway: 'Use outcomes to learn, but use decision-time information to assess the original reasoning.',
    sourceNote: 'The inherited decision-theory reference supports evaluating choices under uncertainty. The booking record is a practical heuristic and the venue events are fictional.',
  },
  {
    id: 'thinking-035',
    title: 'Write the workload assumptions beside the capacity estimate',
    outcome: 'Check whether a request-count model still represents resource demand after the workload changes.',
    scene: 'A map website replaces cheap cached lookups with more expensive custom route calculations.',
    sections: [
      {
        title: 'The request count stays the same',
        paragraphs: [
          'A fictional map service receives 100 requests each second. Previously each request used two milliseconds of processor time, so demand was 100 x 2 = 200 processor milliseconds per second. One processor core supplies at most 1,000 processor milliseconds in a second in this simplified model. The old request rate therefore used one fifth of that budget. Now the service starts computing custom routes instead of returning cheap cached results. The chart still shows 100 requests per second, but each request now needs twenty processor milliseconds.',
        ],
      },
      {
        title: 'The relationship behind the shortcut has changed',
        paragraphs: [
          'New demand is 100 x 20 = 2,000 processor milliseconds per second, twice the single-core budget. The same count now represents ten times the earlier processor work. If arrivals continue and nothing else changes, the core cannot complete that demand as fast as it arrives. A model based only on requests per second worked as a shortcut while per-request costs were sufficiently similar. The changed mix breaks that relationship. Renaming the chart or collecting more counts does not repair the missing cost information.',
        ],
      },
      {
        title: 'Keep a boundary with the model',
        paragraphs: [
          'Write the intended workload, software behavior, resource budget, and operating range beside a sizing rule. Name what should trigger review, such as introducing expensive route computation or increasing input size. This toy calculation considers processor work only; real capacity also depends on memory, waiting, parallelism, overhead, and other bottlenecks. It is not a production sizing recommendation. A model can remain useful within its stated boundary without describing everything. The practical skill is noticing when a familiar input no longer stands for the same demand, before treating an old rule as a permanent property of the service.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Same traffic, different processor demand',
      alt: 'Old workload needs 200 CPU milliseconds per second, new workload 2,000, against a single-core budget of 1,000.',
      caption: 'Invented CPU-only model: 100 requests/s x 2 or 20 CPU ms/request. Demand changes although request count does not.',
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
        'Calculate the old and new processor demand from the supplied request rate and cost per request.',
        'Compare both with the 1,000-millisecond single-core budget, without running any workload.',
        'Write the assumption that failed and one observation that should trigger reassessing a request-count sizing rule.',
      ],
      notice: 'You can explain why unchanged traffic counts do not imply unchanged capacity needs.',
      troubleshooting: 'Keep CPU time per request separate from elapsed response time and from requests per second.',
    },
    recall: {
      prompt: 'A painter estimates work by wall area, then takes a job with extensive detailed trim. Why might the old estimate fail?',
      hint: 'Does each unit of the counted input still require similar work?',
      answer: 'Area no longer represents labor in the same way when detailed edges dominate. The old relationship needs a boundary or added factors rather than more precise area measurements alone.',
    },
    quiz: {
      question: 'A storage estimate assumes a fixed average photo size. Which change most directly challenges it?',
      options: [
        'Photo count doubles while the file types and size distribution stay the same',
        'Storage used doubles when the count of otherwise similar photos doubles',
        'The collection shifts to much larger source images',
      ],
      correctIndex: 2,
      explanation: 'Larger source images change the size-per-photo relationship. More similar photos and proportionally greater storage are changes the original fixed-average model already represents.',
    },
    takeaway: 'A useful model states when its inputs still represent the quantities you care about.',
    sourceNote: 'The inherited SRE overload chapter discusses workload-dependent resource cost. All request costs are hypothetical and omit real-system capacity factors.',
  },
  {
    id: 'thinking-036',
    title: 'Balanced rates do not empty an existing backlog',
    outcome: 'Calculate a stock from arrivals and departures while keeping counts separate from rates.',
    scene: 'A community laundry has a pile of waiting towels after an earlier machine stoppage.',
    sections: [
      {
        title: 'The pile remains after work resumes',
        paragraphs: [
          'A fictional community laundry has 24 towels waiting after an earlier stoppage. New towels arrive at six per hour, and the restored process also finishes six per hour. Someone says the backlog is solved because completion now matches arrival. But after an hour, six have entered and six have left, leaving the original 24. After two hours, it is still 24. Balanced rates stop further accumulation; they do not remove work already present. The pile and the speed of work are different quantities.',
        ],
      },
      {
        title: 'Count what is there and what crosses the boundary',
        paragraphs: [
          'A stock is an amount present at a moment, here towels waiting. A flow is movement per unit time, such as towels arriving each hour. Over an interval, the next stock equals the starting stock plus arrivals minus departures, with other exits counted if they exist. Do not subtract six towels per hour directly from 24 towels without specifying the interval. Multiplying the hourly flow by the number of hours produces a towel count that can be added to or subtracted from the stock.',
        ],
      },
      {
        title: 'Draining requires an excess of departures',
        paragraphs: [
          'Suppose completion instead reaches ten towels per hour while arrivals remain six. The net reduction is four towels each hour. After one hour, 24 + 6 - 10 = 20 remain; after two, 24 + 12 - 20 = 16. Under these constant toy rates, the 24-towel backlog drains in six hours.',
          'Once empty, actual departures cannot exceed available towels indefinitely, so do not extend the arithmetic into a negative pile. Real arrivals and capacity vary. A recovery claim should inspect the remaining stock as well as whether the flow balance has improved.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'The waiting pile after two hours',
      alt: 'With six arrivals hourly, six completions leave 24 towels waiting after two hours; ten completions leave 16.',
      caption: 'Invented constant rates, both starting with 24 towels: 24 + 12 - 12 = 24; 24 + 12 - 20 = 16.',
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
        'Draw 24 marks representing waiting towels; no real laundry is needed.',
        'For one fictional hour, add six marks and cross out six. Count the remaining marks.',
        'Start again with 24, add six and remove ten for each of two hours, then count sixteen.',
        'Write the stock unit and flow unit separately, and state why the calculation stops at an empty pile.',
      ],
      notice: 'Matching flows leaves the pile unchanged; excess completion reduces it over time.',
      troubleshooting: 'Count crossed-out marks as departed, and multiply rates by the interval before combining them with the stock.',
    },
    recall: {
      prompt: 'A library processes returned books as fast as new returns arrive, but a trolley is already full. What must happen to clear it?',
      hint: 'The existing stock needs a net outflow.',
      answer: 'Processing must exceed arrivals for a period, or another accounted-for exit must reduce the stock. Matching arrivals only stops further growth of the existing trolley backlog.',
    },
    quiz: {
      question: 'A queue contains 18 items. During the next hour, eight arrive and eight finish. With no other exits, how many remain?',
      options: ['18 items', '8 items', '0 items'],
      correctIndex: 0,
      explanation: 'The next stock is 18 + 8 - 8 = 18. Eight is a flow count for that interval, not the remaining queue, and balanced flows do not erase the starting stock.',
    },
    takeaway: 'A backlog is an accumulated stock; it drains only through net departures over time.',
    sourceNote: 'The inherited reliability reference provides queueing context. Laundry counts and constant rates are an original simplified stock-flow illustration.',
  },
  {
    id: 'thinking-037',
    title: 'Trace how retries can keep a slowdown going',
    outcome: 'Explain an amplifying retry loop and identify where a design review should examine limits.',
    scene: 'Photo uploads time out and repeated attempts add work to the same slow service.',
    sections: [
      {
        title: 'The response adds more of the original problem',
        paragraphs: [
          'An imaginary photo service becomes slow while saving uploads. Clients do not receive an acknowledgment in time, so they try again. The extra attempts use the same service resources, making responses later still. This creates more timeouts and more retries. The first slowdown might have begun with a storage fault, but the reaction can help sustain the overload. Studying only the initiating fault misses the mechanism that keeps the system busy after users have already submitted the photos they wanted to send.',
        ],
      },
      {
        title: 'Count attempts, not just intended actions',
        paragraphs: [
          'Suppose thirty clients each make three total attempts, including the original. That is ninety request attempts: thirty original requests plus sixty repeats. These are invented counts, and they do not imply ninety distinct photos or ninety completed writes. Amplifying feedback means that a change reinforces itself through a loop; positive feedback is the same technical idea, not a claim that the effect is beneficial. Retrying can help with a brief isolated failure, but its effect differs when many clients add demand to a resource already unable to keep up.',
        ],
      },
      {
        title: 'Inspect the policies together',
        paragraphs: [
          'Limits, backoff, and retry budgets are design mechanisms for controlling extra work, not universal settings to copy. Check layers together: if an outer layer makes up to three attempts and each invokes an inner layer that makes up to three, the worst case can reach nine inner attempts for one intended action. Those totals include first attempts, not three additional retries at each layer. Ask the service owner how attempts are bounded, spaced, and handled safely when acknowledgments are missing. Draw the loop for review; do not generate load or change live retry settings as an informal exercise.',
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: 'The slowdown feeds back into itself',
      alt: 'Slow saving causes late acknowledgments, retries add work, and increased load feeds back to slower saving.',
      caption: 'Hypothetical loop. Thirty clients making three total attempts create ninety attempts, including sixty repeats; attempts are not completed photos.',
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
        'Draw the four-stage upload loop, including the arrow from increased load back to slower saving.',
        'Calculate thirty times three attempts and separate originals from the sixty repeats.',
        'Mark one point where a bounded policy could limit amplification, and draft a question for its owner.',
      ],
      notice: 'Your diagram explains how the response to failure can become another cause of failure.',
      troubleshooting: 'If the arrows end at retries, add what those retries do to the shared service resource.',
    },
    recall: {
      prompt: 'People repeatedly submit a booking form because confirmation is delayed. What should the designer inspect beyond the initial delay?',
      hint: 'Follow what repeated submissions do to the system.',
      answer: 'Inspect whether repeated submissions add processing or duplicate work and delay confirmation further. The response policy and handling of repeated requests can sustain the problem independently of its initial trigger.',
    },
    quiz: {
      question: 'An outer client makes two total attempts; each can trigger four inner attempts. What is the maximum inner-attempt count if none succeeds early?',
      options: ['6 attempts', '8 attempts', '4 attempts'],
      correctIndex: 1,
      explanation: 'Two outer attempts can each cause four inner attempts, giving 2 x 4 = 8. Adding the layer limits or looking only at the inner layer misses their composition.',
    },
    takeaway: 'The reaction to a fault belongs inside the system model, especially when it adds more load.',
    sourceNote: 'The inherited SRE chapters discuss retries and cascading overload. Attempt counts are fictional limits for reasoning, not recommended retry settings.',
  },
  {
    id: 'thinking-038',
    title: 'Calculate what the faster stage leaves unchanged',
    outcome: 'Estimate end-to-end speedup and its limit in a fixed sequential workload.',
    scene: 'A video export has separate reading, encoding, and writing stages.',
    sections: [
      {
        title: 'Three times faster at which part?',
        paragraphs: [
          'A fictional video export takes ten minutes: two reading source material, six encoding, and two writing the output. For this example the stages are sequential, the job is fixed, and there is no overlap. A proposed encoder is three times as fast. It is tempting to divide the entire ten-minute job by three. But the improvement only applies to encoding. Reading and writing remain part of the same job, with the same durations under these assumptions. A component speedup and a whole-job speedup are different quantities.',
        ],
      },
      {
        title: 'Rebuild the total from the parts',
        paragraphs: [
          'The new encoding time is six divided by three, or two minutes. Add the unchanged stages: 2 + 2 + 2 = 6 minutes. End-to-end speedup is old duration divided by new duration, 10 / 6, about 1.67 times. The job saves four minutes, not two thirds of its total duration. Amdahl\'s reasoning captures this limit: the portion you do not accelerate remains in the denominator of the total. An impressive improvement in one component can therefore produce a smaller improvement in the complete task.',
        ],
      },
      {
        title: 'Even the imagined perfect encoder has a floor',
        paragraphs: [
          'Imagine encoding takes no time at all. Reading and writing still require four minutes, so the ideal speedup ceiling in this model is 10 / 4 = 2.5 times. That is a model limit, not a prediction that a real encoder reaches it. Real changes may add overhead, change file size, overlap stages, or move the bottleneck. Measure the actual workflow before using the arithmetic to justify equipment or software. The useful first question is which fraction the proposal changes and which parts it leaves untouched, not merely the advertised component multiplier.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Total export duration, not encoder speed alone',
      alt: 'Original export ten minutes, three-times-faster encoding six minutes, and instantaneous encoding floor four minutes.',
      caption: 'Invented fixed sequential job: 2 + 6 + 2 = 10; 2 + 6 / 3 + 2 = 6; unchanged-stage floor = 4 minutes.',
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
        'Copy the three stage durations and verify the original ten-minute total.',
        'Replace only the six-minute stage with two minutes and calculate the new total and speedup.',
        'Set that stage to zero, calculate the four-minute floor, and list one real-world assumption to check.',
      ],
      notice: 'The whole-job multiplier is smaller than the accelerated component\'s multiplier.',
      troubleshooting: 'Do not multiply the unchanged reading and writing times by the encoder speedup.',
    },
    recall: {
      prompt: 'A parcel takes time to pack, travel, and be collected. What limits the benefit of faster packing alone?',
      hint: 'Hold the other stages fixed in a simple sequential model.',
      answer: 'Travel and collection remain. Even instantaneous packing leaves their combined duration, unless the change also alters those stages or their overlap.',
    },
    quiz: {
      question: 'A fixed twelve-minute job includes a three-minute stage made three times faster, with everything else unchanged. What is the new total?',
      options: ['4 minutes', '9 minutes', '10 minutes'],
      correctIndex: 2,
      explanation: 'Nine unchanged minutes remain, and the accelerated stage takes 3 / 3 = 1 minute, giving ten. Four accelerates everything; nine incorrectly removes the stage completely.',
    },
    takeaway: 'The unchanged part of a fixed workload limits the value of a local speedup.',
    sourceNote: 'The inherited Amdahl reference supplies the fixed-workload principle. Export times and sequential-stage assumptions are fictional, not benchmark results.',
  },
  {
    id: 'thinking-039',
    title: 'Look for the cause that can disable both copies',
    outcome: 'Explain why shared dependencies invalidate a simple independent-failure calculation.',
    scene: 'Two photo-backup drives depend on the same powered hub during a retrieval session.',
    sections: [
      {
        title: 'Two drives still share a route to failure',
        paragraphs: [
          'You keep photo copies on two drives connected through one powered hub. If a drive becomes unreadable, the other may still help. If the hub fails, neither is reachable through that setup even when both drives are healthy. Here the outcome is retrieval availability during a session, not permanent destruction of the files. Two separate device icons do not imply two independent chances of success. Independence concerns the causes and relationships behind failures, including shared power, connections, software, and mistakes that can affect both copies together.',
        ],
      },
      {
        title: 'Separate the shared failure from independent failures',
        paragraphs: [
          'For a toy model, suppose the hub fails during a session with probability 5%. When it works, each drive independently has a 10% chance of being unreadable. Assume the computer and other connections work. Ignoring the hub would give 0.1 x 0.1 = 0.01, or 1%, for both drives being unreadable.',
          'But total retrieval failure includes every hub-failure session, plus sessions where the hub works and both drives fail: 0.05 + 0.95 x 0.1 x 0.1 = 0.0595, or 5.95%. These deliberately invented probabilities are not hardware reliability estimates.',
        ],
      },
      {
        title: 'Redundancy answers a particular failure model',
        paragraphs: [
          'The second copy is not useless. It addresses some drive-specific failures while leaving a shared dependency. Draw what both copies rely on and ask which causes a different arrangement would actually remove. For a service, also consider whether the survivor has enough capacity after failover; a healthy replica can still be overwhelmed. Do not attach an availability percentage to a replica count without a supported dependency model. This exercise is only a diagram and calculation. It does not ask you to disconnect drives, alter backups, or test failure by putting personal data at risk.',
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: 'A shared hub sits above both copies',
      alt: 'One powered hub connects to drive A and drive B, creating a shared retrieval dependency.',
      caption: 'Schematic toy model, not room scale. Hub failure is 5%; conditional independent drive failure is 10% each when the hub works. Total unavailability is 5.95%.',
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
        'Draw the hub and both drives without touching any actual backup setup.',
        'Calculate the conditional both-drive failure probability as 0.1 x 0.1.',
        'Weight that by the 0.95 chance the hub works, add 0.05 for hub failure, and convert to 5.95%.',
        'Name the outcome as session retrieval availability, not permanent file loss.',
      ],
      notice: 'The shared failure route raises the total beyond the independent-drive calculation.',
      troubleshooting: 'Do not add the drive case unweighted; it belongs only to sessions where the hub works.',
    },
    recall: {
      prompt: 'Two lifts depend on one building power supply. What should be checked before multiplying their individual failure probabilities?',
      hint: 'Find causes that can disable both at once.',
      answer: 'Check shared power and other common dependencies, plus how individual failures were defined. Independence cannot be assumed merely because the building has two separate lifts.',
    },
    quiz: {
      question: 'Two service replicas share one upstream dependency. Which model most directly improves on multiplying replica failure rates?',
      options: [
        'Include upstream failure and conditional replica failures without double-counting shared cases',
        'Multiply rates measured only when the upstream works and apply that result to all sessions',
        'Average their failure rates and call that the probability both fail',
      ],
      correctIndex: 0,
      explanation: 'The shared route needs explicit representation. Working-upstream rates omit its failures, and averaging marginal rates does not calculate a joint failure probability.',
    },
    takeaway: 'Count shared failure causes before treating copies as independent protection.',
    sourceNote: 'The inherited reliability and statistics references support dependence modeling. All probabilities are artificial, conditional assumptions; no real availability claim is made.',
  },
  {
    id: 'thinking-040',
    title: 'Let the units check the estimate',
    outcome: 'Convert compatible data units and distinguish an ideal transfer estimate from effective performance.',
    scene: 'A filmmaker estimates transferring a 600-megabyte clip over a connection rated in megabits per second.',
    sections: [
      {
        title: 'The two megas count different things',
        paragraphs: [
          'You want to transfer a 600 MB clip over a connection described as 40 Mb/s. In this fictional calculation, MB means decimal megabytes and Mb means decimal megabits. One byte contains eight bits. Dividing 600 by 40 immediately gives fifteen, but fifteen is not the transfer duration in seconds because the numerator and denominator count different units. First convert the clip: 600 megabytes x 8 bits per byte = 4,800 megabits. The shared decimal mega factor is now compatible on both sides of the division.',
        ],
      },
      {
        title: 'Cancel the unit you are dividing by',
        paragraphs: [
          'Divide 4,800 megabits by 40 megabits per second. Megabits cancel, leaving seconds, and the ideal duration is 120 seconds. Dimensional analysis means carrying units through arithmetic so a result has the kind of quantity you intended. A packet count divided by a byte rate would not yield duration without information about bytes per packet. Also distinguish decimal prefixes from binary units such as mebibytes when they appear. A plausible-looking number can hide the wrong quantity; the unit line exposes the missing conversion before that number becomes a confident estimate.',
        ],
      },
      {
        title: 'Correct dimensions do not remove overhead',
        paragraphs: [
          'Suppose actual payload throughput in the toy example is 32 Mb/s after relevant overhead and other limits. The same clip then takes 4,800 / 32 = 150 seconds at that constant effective rate. Both calculations have correct units, but they use different assumptions about usable throughput. Real transfers can also include startup delays, varying rates, retransmissions, and storage bottlenecks. Matching units is a necessary check, not proof that the model includes everything. State whether the rate is a nominal link rate or an observed payload rate before presenting the estimate as a planning number.',
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: 'Same clip, two stated throughput assumptions',
      alt: 'A 600 decimal MB clip takes 120 seconds at 40 Mb/s and 150 seconds at 32 Mb/s payload throughput.',
      caption: 'Invented constant-rate examples. 600 MB x 8 = 4,800 Mb; divide by 40 or 32 Mb/s. Neither includes additional startup delay.',
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
        'Write 600 MB and 40 Mb/s with the words megabytes and megabits spelled out.',
        'Convert the clip to 4,800 megabits, then divide by 40 megabits per second and cancel units.',
        'Repeat with 32 Mb/s and explain why both unit-consistent answers depend on different rate assumptions.',
      ],
      notice: 'Your result is a duration with an explicit conversion and an explicit throughput assumption.',
      troubleshooting: 'If you obtain fifteen seconds, check whether bytes were divided directly by a bit rate.',
    },
    recall: {
      prompt: 'A container needs three litres and a steady tap supplies six litres per minute. What duration does the unit calculation give?',
      hint: 'Litres divided by litres per minute leaves minutes.',
      answer: 'Three divided by six gives half a minute, or thirty seconds. That estimate assumes a constant usable flow and no additional filling delay; correct units do not verify those conditions.',
    },
    quiz: {
      question: 'What is the ideal duration for 300 decimal MB at a constant 40 Mb/s, ignoring overhead?',
      options: ['7.5 seconds', '60 seconds', '480 seconds'],
      correctIndex: 1,
      explanation: '300 MB is 2,400 Mb; 2,400 / 40 = 60 seconds. The 7.5-second answer omits the conversion. Dividing 2,400 Mb by a wrongly mixed 5 MB/s produces 480 by converting the two sides in opposite directions.',
    },
    takeaway: 'Carry units through every step, then check whether the model assumptions describe the actual task.',
    sourceNote: 'OpenStax dimensional analysis supplies the principle. File sizes and rates are invented constant-rate examples, not measurements or bandwidth promises.',
  },
]