import type { LessonGuide } from './types'

// Original teaching and schematic illustrations. Sources are inherited by lesson ID.
// Practice minutes are suggested task budgets, not tested health interventions.
// Public pages consulted on 2026-10-25:
// https://www.cdc.gov/sleep/about/index.html
// https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/
// https://www.osha.gov/etools/computer-workstations/positions
export const wellbeingGuides: LessonGuide[] = [
  {
    id: 'wellbeing-001',
    outcome: "Separate the time available for sleep from the time spent preparing for it.",
    scene: "An evening film, a packed work bag, and a fixed bus departure the next day.",
    sections: [
      {
        title: "The film ends before the evening does",
        paragraphs: [
          "Kai needs to get up at 07:00 for a bus. At 22:30, one more episode looks like a small addition. But the episode is not the last task: a work bag needs packing, dishes need putting away, and there is still getting ready for bed. Counting from the moment the television stops overstates the time available for sleep. Those ordinary transitions occupy real space in the night.",
          "The useful starting question is not which bedroom product to buy. It is what must happen between the last optional activity and being ready to sleep.",
        ],
      },
      {
        title: "An opportunity is not a measurement",
        paragraphs: [
          "Sleep opportunity means the interval you leave available for sleeping. Actual sleep can be shorter because falling asleep takes time and waking can occur during the night. CDC guidance distinguishes getting enough sleep from sleep quality. A calendar can protect an opportunity; it cannot certify either the amount actually slept or how restorative the night was. Buying a darker curtain does not lengthen an interval that the evening schedule has already squeezed.",
        ],
      },
      {
        title: "Move the stopping point, not the alarm",
        paragraphs: [
          "In this invented plan, Kai stops the film at 22:30 and leaves 30 minutes for preparation. From 23:00 until 07:00, eight hours are available. That is arithmetic about this example, not a promise of eight hours asleep or a target for everyone. Packing the bag before the film makes the transition less crowded. If a caring responsibility cannot move, label it as fixed and look elsewhere for flexibility. Do not describe a constraint as a failure of discipline.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Where the evening time goes",
      alt: "Film stops at 22:30, preparation occupies 30 minutes, then sleep opportunity runs from 23:00 to 07:00.",
      caption: "Read the preparation interval separately from the sleep interval. These are invented times, not a proportional scale or personal prescription.",
      items: [
        { label: "Stop the film", detail: "22:30: leave the next episode for another day." },
        { label: "Prepare for bed", detail: "22:30 to 23:00: a 30 minute transition." },
        { label: "Sleep opportunity", detail: "23:00 to 07:00: eight hours available, not measured sleep." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["Paper or a private note", "Tomorrow's required waking time"],
      steps: [
        "Write the required waking time and the evening tasks that cannot move.",
        "Add getting ready for bed as its own interval, using your usual experience.",
        "Choose an earlier stopping point for one optional activity, without moving a necessary alarm.",
        "Draw the remaining sleep opportunity and mark any uncertainty rather than calling it sleep achieved.",
      ],
      notice: "The revised plan shows preparation and sleep opportunity as different blocks.",
      troubleshooting: "If nothing optional can move tonight, identify a future scheduling constraint instead of taking time from necessary care.",
    },
    recall: {
      prompt: "A late train arrives at 23:00, and unpacking takes another half hour. Where should the sleep opportunity begin?",
      hint: "Arrival and readiness for bed are different events.",
      answer: "Begin after necessary preparation, not at arrival. Count the available interval from there to waking, and consider moving optional unpacking rather than pretending the transition takes no time.",
    },
    quiz: {
      question: "An evening edit runs late before a fixed early departure. Which change directly creates more sleep opportunity?",
      options: ["Improve bedroom darkness while keeping the same task times.", "Finish an optional editing pass earlier.", "Pack earlier but extend editing by all the time saved."],
      correctIndex: 1,
      explanation: "Stopping optional work earlier releases time. Equipment can change the environment, but not the length of a schedule already occupied by tasks.",
    },
    takeaway: "Budget the transition into bed before counting the time available for sleep.",
    sourceNote: "CDC and NIH guidance supports adequate sleep opportunity. The schedule is an original example, not a treatment or a guarantee of sleep quality.",
  },
  {
    id: 'wellbeing-002',
    outcome: "Compare ordinary and free-day sleep plans without trading adequate sleep for clock precision.",
    scene: "A weekend market volunteer balances a late social evening with an ordinary office week.",
    sections: [
      {
        title: "Two days that barely resemble each other",
        paragraphs: [
          "Leena usually prepares for bed around 23:00 and gets up around 07:00. On a free Saturday, she plans a film until 02:00 and a late start the next day. Neither evening is a moral test. The scheduling issue is that her intended sleep opportunity has moved several hours, while Monday's start remains unchanged. Looking only at Monday's alarm hides the change that happened over the weekend.",
          "She sketches ordinary and free days beside each other before deciding which social plans are flexible.",
        ],
      },
      {
        title: "Regularity describes a pattern",
        paragraphs: [
          "The body's daily timing system responds to recurring cues, including light and darkness. CDC and NIH guidance therefore includes reasonably consistent bedtimes and waking times. Regular does not mean identical to the minute. A workable pattern must also leave enough opportunity for sleep. Forcing an early alarm after a short night simply to make two calendar entries match solves the appearance of consistency while ignoring the second requirement.",
        ],
      },
      {
        title: "Make the comparison usable",
        paragraphs: [
          "For her next free weekend, Leena considers ending the film earlier and keeping the morning near her ordinary pattern. She does not use this plan to punish herself for the previous late night. The comparison is between future arrangements she can actually choose. A late caregiving shift would instead be marked as a constraint, not erased from the drawing. The useful output is a feasible pattern with preparation and sleep space, rather than a streak of perfectly matched alarms that she cannot maintain.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Compare the whole sleep window",
      alt: "An ordinary day and a free day show both the evening stopping point and the following start.",
      caption: "The example compares both ends of the window. Clock times describe Leena's plans, not a recommended schedule for every reader.",
      items: [
        { label: "Ordinary day", detail: "Preparation around 23:00; waking around 07:00." },
        { label: "Late free day", detail: "Film continues until 02:00; the following start also shifts." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A private weekly calendar"],
      steps: [
        "Pick one upcoming ordinary day and one free day, not your most unusual week.",
        "Write planned preparation, sleep opportunity, and waking for each day.",
        "Circle one optional commitment responsible for a large shift between the two plans.",
        "Draft a smaller feasible shift while preserving adequate sleep opportunity on both days.",
      ],
      notice: "The two plans become easier to compare without hiding preparation or fixed responsibilities.",
      troubleshooting: "For rotating shifts or care duties, record the constraint and avoid forcing a standard daytime schedule onto it.",
    },
    recall: {
      prompt: "A friend keeps a precise early alarm but repeatedly delays bedtime. Does the alarm alone show a useful sleep pattern?",
      hint: "Inspect both ends of the interval.",
      answer: "No. Waking is regular, but sleep opportunity is shrinking. The evening stopping point and preparation need attention alongside the alarm, without assuming that schedule changes guarantee sleep.",
    },
    quiz: {
      question: "Which plan best reflects the general recommendation when next weekend is flexible?",
      options: ["A reasonably similar schedule with enough sleep space.", "Keep waking fixed while letting bedtime move much later.", "Keep bedtime fixed without checking the following day's required start."],
      correctIndex: 0,
      explanation: "The first plan considers regularity and available sleep together. The other plans fix one boundary while leaving the other unexamined.",
    },
    takeaway: "Consistency concerns a workable sleep pattern, not an isolated alarm time.",
    sourceNote: "CDC and NIH recommend regular timing alongside adequate sleep. This calendar exercise is not tailored guidance for shift work or persistent sleep difficulties.",
  },
  {
    id: 'wellbeing-003',
    outcome: "Trace an avoidable bedroom sound to its source before changing the whole room.",
    scene: "A shared flat has a vibrating phone against a bed frame and necessary hallway alarms.",
    sections: [
      {
        title: "A small device makes a large rattle",
        paragraphs: [
          "From bed, Arun hears a repeated buzz followed by a wooden rattle. The phone is leaning against the bed frame while charging. In the hall, a different device occasionally makes a necessary alert. Calling the whole flat noisy combines two separate problems: an avoidable vibration path and an alert that must remain noticeable. Before buying sound equipment, he identifies which sound happens where and what produces it.",
        ],
      },
      {
        title: "Follow the source and the surface",
        paragraphs: [
          "Sound can travel through air, and vibration can also pass into a surface that then radiates sound. A hard object touching the bed frame provides a direct route for the phone's movement. Moving it to a clear, stable bedside surface removes that particular contact. This is a targeted change, not soundproofing. It will not remove traffic outside or a neighbour's conversation. Separating the paths makes it possible to check whether the adjustment addresses the sound actually heard.",
        ],
      },
      {
        title: "Test the adjustment without hiding alerts",
        paragraphs: [
          "Arun moves the phone away from the frame, leaving the charger uncovered and its cable out of the walking route. Using an ordinary device test while awake, he checks that an essential phone alarm can still be heard from bed. The hallway alarm stays untouched. If television audio is the remaining disturbance, that calls for a conversation about volume or timing, not another phone adjustment. A room can become less disruptive without becoming perfectly silent, and quieter conditions alone do not explain every difficulty with sleep.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Remove the vibration contact",
      alt: "A phone sits on a clear bedside surface away from the bed frame; a separate hallway alarm remains unchanged.",
      caption: "Top-view position markers show the changed contact, not sound levels. The alarm is a separate source and is not part of the adjustment.",
      items: [
        { label: "Bed frame", detail: "The original phone contact made this rattle.", x: 22, y: 25, shape: 'object' },
        { label: "Phone", detail: "Moved clear of the frame on a stable surface.", x: 72, y: 25, shape: 'screen' },
        { label: "Sleeping position", detail: "Check the result from the usual position.", x: 22, y: 78, shape: 'person' },
        { label: "Hallway alarm", detail: "Necessary alert remains audible and unchanged.", x: 78, y: 78, shape: 'box' },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["Your bedroom", "A private note"],
      steps: [
        "From your usual resting position, identify one avoidable sound and its likely source.",
        "Distinguish it from necessary alarms or another person's equipment that is not yours to change.",
        "Adjust your own source safely, keeping vents, cables, and walking routes clear.",
        "Check the same position again and verify essential personal alerts remain usable.",
      ],
      notice: "You can name the particular sound that changed, rather than rating the whole room vaguely.",
      troubleshooting: "If it remains, recheck the source. Ask about shared noise rather than altering shared safety equipment.",
    },
    recall: {
      prompt: "A clock ticks loudly on a hollow shelf, but road noise also enters the room. What would a shelf change test?",
      hint: "Separate the two sound sources.",
      answer: "It tests whether the shelf contributes to the clock sound. It says nothing about road noise; a result should name the source affected rather than claim the room is soundproof.",
    },
    quiz: {
      question: "Moving a vibrating phone stops the bed-frame rattle but leaves television sound. What follows?",
      options: ["Keep adjusting the phone location before considering another source.", "Add background sound without checking the television's volume or timing.", "One source improved; the television needs a separate discussion."],
      correctIndex: 2,
      explanation: "The adjustment addressed one transmission path. Remaining noise does not erase that result or justify disabling necessary alerts.",
    },
    takeaway: "Identify the source, change its avoidable path, and keep essential alerts usable.",
    sourceNote: "CDC supports a quiet sleep environment. The vibration example is an original practical application, not an acoustic measurement or treatment for sleep problems.",
  },
  {
    id: 'wellbeing-004',
    outcome: "Check caffeine sources and timing without borrowing another person's cutoff rule.",
    scene: "An intercity bus passenger chooses a drink during an evening station stop.",
    sections: [
      {
        title: "The station menu is not just coffee",
        paragraphs: [
          "At an evening bus stop, Nia skips coffee and buys bottled tea, assuming it will not matter for her night. The label says it contains caffeine. A travel companion chooses an energy drink but calls it a vitamin drink. Product names and the reason for buying a drink do not change its ingredients. The relevant question is what the drink contains, then when it is being consumed relative to the planned sleep period.",
        ],
      },
      {
        title: "Alertness can outlast the journey",
        paragraphs: [
          "Caffeine is a stimulant: it can make someone feel more alert, and its effects can persist after the drink and the break are finished. NIH sleep guidance notes that these effects can last for hours. Feeling alert is not the same as having replaced sleep. Timing belongs in the decision because a drink used to stay engaged during travel can overlap with the period set aside for sleep later. People differ in sensitivity, so one passenger's experience cannot establish another's personal cutoff.",
        ],
      },
      {
        title: "Compare two actual labels",
        paragraphs: [
          "In this example, Nia finds two labels: the bottled tea lists caffeine, while the still fruit drink is explicitly labelled caffeine-free. She chooses the latter for this late stop. That comparison is about these products, not a claim that all tea or all fruit drinks have the same contents. If the information is absent, she can ask the seller or choose plain water. A sugar-free claim answers a different question and does not settle whether caffeine is present.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Same stop, different ingredients",
      alt: "The example bottled tea lists caffeine; the example still fruit drink explicitly says caffeine-free.",
      caption: "Inspect the ingredient information rather than the drink category. These are fictional labels, with no implied caffeine dose or sleep prediction.",
      items: [
        { label: "Bottled tea", detail: "This example label lists caffeine." },
        { label: "Still fruit drink", detail: "This example label explicitly says caffeine-free." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["A drink label or a product information page", "A private note"],
      steps: [
        "Choose a drink you sometimes have later in the day and read its caffeine information.",
        "Record whether caffeine is present, absent, or not established by the available label.",
        "Write when you usually drink it relative to your planned sleep period.",
        "Identify an available uncaffeinated alternative without inventing a personal safe cutoff.",
      ],
      notice: "Your note distinguishes ingredient evidence from a product name or marketing claim.",
      troubleshooting: "If the label is unclear, leave it unknown; do not interpret missing caffeine quantities as proof of none.",
    },
    recall: {
      prompt: "A late-night soft drink is labelled sugar-free. What still needs checking before treating it as uncaffeinated?",
      hint: "Sugar and caffeine are separate ingredients.",
      answer: "Check the caffeine or ingredient information. Sugar-free does not establish caffeine-free, and the time of drinking still matters even when a friend reports no difficulty afterward.",
    },
    quiz: {
      question: "A traveller avoids coffee but drinks caffeinated tea before the planned sleep period. What did the rule miss?",
      options: ["Caffeine from another source and its timing.", "Whether the tea's sugar content matches the coffee.", "Whether the tea is marketed as a relaxing drink."],
      correctIndex: 0,
      explanation: "Caffeine is not restricted to coffee. Sugar information and relaxation branding answer different questions and do not establish whether the tea is uncaffeinated.",
    },
    takeaway: "Read the caffeine information and consider timing, not just the word coffee.",
    sourceNote: "Inherited NIH and NHS references cover caffeine and drinks. This label exercise supplies no individual cutoff and does not predict or treat sleep difficulty.",
  },
  {
    id: 'wellbeing-005',
    outcome: "Separate a late large dinner from a blanket rule against eating in the evening.",
    scene: "A pottery class finishes late, leaving cooking and dinner next to bedtime.",
    sections: [
      {
        title: "The class ends, then dinner starts",
        paragraphs: [
          "A weekly pottery class ends at 21:30. Sam travels home, starts cooking, eats a substantial dinner, and immediately gets ready for bed. The issue is not that pottery or evening food is wrong. Cooking and the main meal have been left until the end of an already crowded evening. A useful plan considers when adequate food is available rather than simply writing an earlier bedtime over the same list of tasks.",
        ],
      },
      {
        title: "Size and timing are separate questions",
        paragraphs: [
          "NIH guidance distinguishes a heavy or large meal close to bedtime from a light snack. A large meal takes time to prepare, eat, and settle comfortably afterward. Moving straight from that meal into bed can be an uncomfortable transition for some people. The general recommendation is not evidence that every bite after a particular hour is harmful. Hunger and practical food access still matter, and a generic lesson cannot assign the amount that meets an individual's needs.",
        ],
      },
      {
        title: "Move the main meal where feasible",
        paragraphs: [
          "For the next class, Sam plans the familiar main meal before leaving, with enough time not to rush it. If hungry after returning, an ordinary snack remains an option. This moves the largest cooking and eating block without creating a rule to endure hunger. On a day when an earlier meal is impossible, the plan needs adapting to that constraint rather than copying the example's clock. The useful change is a more workable evening arrangement, not a special ingredient claimed to cause sleep.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Move the meal, keep food available",
      alt: "The main meal occurs before pottery class; after the 21:30 finish and travel, a snack remains available if wanted.",
      caption: "Follow the changed order of the example evening. The class time is fictional; spacing is not a universal meal-to-bed interval.",
      items: [
        { label: "Before class", detail: "Leave time for the familiar main meal without rushing." },
        { label: "Class and travel", detail: "Class ends at 21:30; allow for the journey home." },
        { label: "After returning", detail: "Food remains available if hungry; then prepare for bed." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["An evening schedule", "A note of available familiar foods"],
      steps: [
        "Choose an upcoming late activity and mark its travel and preparation time.",
        "Locate the main meal honestly, including the time needed to cook it.",
        "If feasible, move that block earlier without reducing access to adequate food.",
        "Write an after-return food option so the plan does not depend on ignoring hunger.",
      ],
      notice: "The plan changes a crowded meal block rather than introducing an arbitrary evening food ban.",
      troubleshooting: "If timing is fixed, simplify preparation using suitable available food; do not make skipping the meal the default solution.",
    },
    recall: {
      prompt: "A night-shift worker eats their main meal late by the clock but well before their sleep period. What comparison matters?",
      hint: "The relationship to sleep matters more than a universal hour.",
      answer: "Look at the meal's size and position relative to their actual sleep period and food needs. A daytime worker's evening cutoff does not automatically fit a different schedule.",
    },
    quiz: {
      question: "A late class repeatedly pushes the main meal against bedtime. Which plan best preserves the guidance's distinction?",
      options: ["Use one fixed food cutoff without considering the class schedule.", "Keep the large late dinner and add a marketed bedtime drink.", "Move the main meal if feasible and allow food later if hungry."],
      correctIndex: 2,
      explanation: "Moving the meal addresses its timing without requiring hunger. A blanket cutoff misses the meal-size distinction; an added drink leaves the crowded meal block unchanged.",
    },
    takeaway: "Adjust the main meal's timing without making evening hunger a goal.",
    sourceNote: "NIH distinguishes large meals near bedtime from a light snack. This original schedule is general education, not a prescribed diet or sleep treatment.",
  },
  {
    id: 'wellbeing-006',
    outcome: "Recognize movement in ordinary transport and domestic tasks without calling every task equivalent exercise.",
    scene: "A market journey combines a bus ride, wheeling along a level path, and carrying shopping indoors.",
    sections: [
      {
        title: "The activity happened between appointments",
        paragraphs: [
          "Maya says she did no activity because she did not visit a gym. Yet her market trip included wheeling from the bus stop along a level path and moving groceries into the kitchen. A friend took a short walk to the same market. These movements do not disappear because neither person wore sports clothes. Looking only for named workouts overlooks movement already embedded in travel, domestic work, and recreation.",
          "The bus ride itself is a different part of the journey. A trip can contain both movement and periods of sitting.",
        ],
      },
      {
        title: "Count the action, not the costume",
        paragraphs: [
          "WHO uses a broad definition of physical activity that includes movement across everyday settings. Muscles do work during suitable transport and household tasks as well as sport. The label describes what the body is doing, not where it happens or whether an app records it. Different actions create different demands, though. A brief kitchen task and a sustained recreational activity are not automatically interchangeable in intensity, duration, or the muscles involved.",
        ],
      },
      {
        title: "Make the accessible part visible",
        paragraphs: [
          "Maya marks the level path as movement and the bus section as seated travel. She keeps the accessible stop rather than choosing stairs to make the trip look more active. Her friend lists carrying a light bag but does not assume it supplies a complete strengthening programme. Their records now describe the day more accurately. The next decision can be about a feasible, familiar opportunity, not earning permission to count movement by making a journey longer, harder, or less accessible.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Different parts of one market trip",
      alt: "Bus travel is seated time; wheeling, walking, and moving groceries are everyday movement with different demands.",
      caption: "Compare actions, not achievement levels. These examples illustrate categories and do not assign calories, intensity, or equivalent exercise value.",
      items: [
        { label: "Bus section", detail: "Seated transport is part of the journey." },
        { label: "Level path", detail: "Maya wheels along an accessible route." },
        { label: "Friend's approach", detail: "A familiar walk also involves movement." },
        { label: "Kitchen arrival", detail: "Moving groceries is a different physical task." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["Paper or a private note", "A recent ordinary journey"],
      steps: [
        "Write the stages of a recent journey or household task you already know.",
        "Mark where movement occurred and where you were resting or travelling seated.",
        "Name the actual actions instead of using only workout or no workout labels.",
        "Identify one familiar accessible opportunity to keep, without adding distance or difficulty.",
      ],
      notice: "Your account contains specific movement outside formal exercise, with different demands left distinct.",
      troubleshooting: "If movement is limited, record that honestly. Do not invent a harder route or compare your access needs with another person's.",
    },
    recall: {
      prompt: "Someone dances while preparing a room for a gathering but records no activity because there was no class. What was missed?",
      hint: "Ask what happened physically, not where it was booked.",
      answer: "Recreational dancing and moving around the room are physical activity. They count as movement without establishing a particular intensity or replacing every other kind of activity.",
    },
    quiz: {
      question: "Which record best describes a commute containing a bus ride and a familiar walk?",
      options: ["Count only the part recorded by a workout app.", "The trip contains seated travel and everyday movement.", "Classify the whole trip from its main transport mode."],
      correctIndex: 1,
      explanation: "Separating the stages acknowledges ordinary movement without assigning the entire journey one intensity or requiring a formal workout label.",
    },
    takeaway: "Ordinary movement counts, but different actions still have different demands.",
    sourceNote: "The inherited WHO reference defines physical activity broadly. This journey audit is not a workout prescription, a calorie estimate, or an accessibility requirement.",
  },
  {
    id: 'wellbeing-007',
    outcome: "Interpret the talk test as a rough description of personal effort, not a speed target.",
    scene: "Two friends describe different effort while following the same familiar park path.",
    sections: [
      {
        title: "One pace, two experiences",
        paragraphs: [
          "Two friends follow a familiar park path together. Dev can chat comfortably; Noor says conversation is possible but singing would be difficult. Their shared pace does not prove shared effort. Fitness, terrain, conditions, and the person doing the movement all affect the demand. A route name or speed on a watch describes the outside of the activity, while these comments describe something about how it feels to each person.",
        ],
      },
      {
        title: "What the comparison actually describes",
        paragraphs: [
          "The NHS uses conversation as a rough way to describe activity intensity. Moderate effort generally allows talking but makes singing difficult; vigorous effort makes more than a few words difficult without a breath. These are descriptions, not instructions to reach either state. Breathing demand changes with effort, so speaking offers a simple clue without needing a shared speed. A sheltered level section and an exposed slope can also produce different experiences for the same person. The clue is imperfect and is not a fitness grade, a readiness assessment, or evidence that the activity suits everyone.",
        ],
      },
      {
        title: "Use the observation without chasing it",
        paragraphs: [
          "Noor's description resembles the NHS moderate-effort example. Dev does not need to accelerate until the same description fits. They can keep a comfortable outing or choose different arrangements that suit them. If speech is not an accessible or reliable comparison for someone, the spoken test need not be used at all. Reading the two accounts is enough to learn the distinction. Neither friend needs to sing, become breathless, or complete an extra distance to demonstrate that they understood the lesson.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Same path, different reported effort",
      alt: "Dev reports easy conversation; Noor can talk but would find singing difficult at the same pace.",
      caption: "These fictional reports illustrate relative effort. They are not diagnostic observations or a reason to copy another person's pace.",
      items: [
        { label: "Dev's account", detail: "Conversation feels easy at this pace." },
        { label: "Noor's account", detail: "Talking is possible; singing would be difficult." },
      ],
    }],
    practice: {
      minutes: 3,
      needs: ["The two written accounts above", "Paper or a note"],
      steps: [
        "Read Dev's and Noor's accounts without performing or increasing any activity.",
        "Underline the words describing effort rather than route, pace, or distance.",
        "Match Noor's account to the NHS description and explain why it is only approximate.",
        "Write one reason that this comparison cannot establish what another person should do.",
      ],
      notice: "Your answer distinguishes a description of effort from an instruction to reach it.",
      troubleshooting: "If you start ranking the friends, return to their words. The example supplies no fitness scores or personal targets.",
    },
    recall: {
      prompt: "The same gentle-looking hill feels easy to one companion and demanding to another. Which description is more useful than its appearance?",
      hint: "The outside view does not measure another person's effort.",
      answer: "Each person's own experience describes their effort more directly. The talk-test categories are rough descriptions where usable, not proof that both should maintain the same pace.",
    },
    quiz: {
      question: "A person can talk during an activity but finds singing difficult. What does that information support?",
      options: ["The pace should become everyone else's target.", "The activity is confirmed suitable for that person.", "It roughly resembles the NHS moderate-effort description."],
      correctIndex: 2,
      explanation: "The description helps name relative effort. It does not establish suitability, prescribe a pace, or require an increase in effort.",
    },
    takeaway: "Use effort descriptions to understand variation, not to set a shared performance requirement.",
    sourceNote: "NHS adult guidance supplies the talk-test comparison. The practice is a written interpretation task, not an exercise test or individual activity advice.",
  },
  {
    id: 'wellbeing-008',
    outcome: "Distinguish sustained aerobic demand from muscular resistance without designing an exercise programme.",
    scene: "A community garden volunteer sorts a week's walking and lifting activities by their demands.",
    sections: [
      {
        title: "Busy does not describe the kind of demand",
        paragraphs: [
          "Rafi walks to a community garden, sorts seed packets while seated, and sometimes moves supplies. Looking back, he writes only busy afternoon. That description hides useful differences. Walking involves repeated movement over time. Moving a load asks muscles to work against resistance. Sorting small packets can involve much less demand. The fact that all three happened at the garden does not put them into one interchangeable activity category.",
        ],
      },
      {
        title: "Two categories can overlap",
        paragraphs: [
          "Aerobic activity involves sustained movement that increases the work of breathing and circulation. Muscle-strengthening activity involves muscles working against sufficient resistance. Adult NHS guidance includes both rather than presenting a choice between them. An action can involve aspects of each, so the categories are not sealed boxes. Equally, handling any object does not automatically establish a strengthening session: the demand, muscles involved, and person doing it matter. The object alone cannot certify what an activity supplied.",
        ],
      },
      {
        title: "Classify before making assumptions",
        paragraphs: [
          "Rafi marks his familiar walk as mainly sustained movement and writes that moving supplies involved resistance, with the actual demand uncertain. He leaves seed sorting as a separate light task rather than forcing it into a category to complete the list. The NHS examples help him understand what the two terms mean. He also records that a trolley changed the supply task, so carrying and rolling should not be treated as identical. None of these observations authorizes a heavier load at the next garden visit. A category audit should reveal what is known and unknown about a week, not become a homemade progression plan.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Compare the demand, not the venue",
      alt: "Walking to the garden illustrates sustained movement; moving supplies illustrates resistance with the actual demand left unspecified.",
      caption: "The examples identify different demands. Neither the drawing nor an object name establishes a suitable load or a complete activity programme.",
      items: [
        { label: "Walking to the garden", detail: "Repeated movement over time; effort depends on the person." },
        { label: "Moving supplies", detail: "Muscles act against resistance; load and suitability are unspecified." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A list of recent familiar activities", "The linked NHS examples"],
      steps: [
        "List three activities you have already done; do not add a new physical task.",
        "Describe whether each involved sustained movement, resistance, both, or little of either.",
        "Compare your descriptions with the NHS examples, marking any uncertain category.",
        "Write one limitation of your list, such as not knowing the demand or muscles involved.",
      ],
      notice: "Your list describes more than whether the day felt busy and preserves uncertainty about activity demands.",
      troubleshooting: "If every object-handling task becomes strengthening, remove that assumption and describe only the resistance you actually know about.",
    },
    recall: {
      prompt: "A person cycles regularly and assumes that covers every kind of adult activity guidance. What distinction should they inspect?",
      hint: "One familiar activity need not supply every demand.",
      answer: "They should distinguish aerobic demand from muscle-strengthening activity across their week. Cycling can involve muscular work, but its name alone does not establish coverage of all strengthening needs.",
    },
    quiz: {
      question: "Which conclusion is justified after listing walking and occasional supply handling?",
      options: ["The tasks involve different demands that need describing.", "The walk automatically covers the resistance supplied by handling objects.", "Total time at the garden establishes the type of activity completed."],
      correctIndex: 0,
      explanation: "The actions reveal different demands. Total garden time includes other tasks, and one activity category does not automatically supply what another involves.",
    },
    takeaway: "Identify aerobic and resistance demands before assuming one active day covers everything.",
    sourceNote: "Inherited NHS and WHO guidance distinguishes activity types. This classification exercise sets no repetitions, loads, intensity targets, or individual exercise prescription.",
  },
  {
    id: 'wellbeing-009',
    outcome: "Recognize short periods of movement without treating them as a replacement for every activity need.",
    scene: "A library errand leaves several short familiar walking segments instead of a planned long outing.",
    sections: [
      {
        title: "The long outing no longer fits",
        paragraphs: [
          "Rain changes Isha's afternoon plans. There is no longer time for the long outing she imagined, but her library errand still contains short familiar walking segments. She is tempted to label the whole day inactive because the original plan disappeared. That is a comparison with an absent ideal, not a description of what happened. A short period of movement remains an activity even when it was not the main event on the calendar.",
        ],
      },
      {
        title: "Duration is not an entrance requirement",
        paragraphs: [
          "WHO guidance recognizes activity accumulated across a day and emphasizes that some activity is better than none. This removes the assumption that movement must first fill a large uninterrupted slot before it counts. It does not make every short task equal in demand, nor establish that any small contribution covers the full range of activity guidance. Counting a contribution and claiming completeness are two different decisions. A flexible record can acknowledge one without asserting the other.",
        ],
      },
      {
        title: "Add the movement, not the waiting",
        paragraphs: [
          "In this invented account, Isha walks five minutes to a stop, three minutes from the bus to the library, and four minutes on a later errand. Those segments total twelve minutes. The time seated on the bus is not included in that movement total. The arithmetic illustrates recording, not a daily target or advice to take that route. If a safe connection leaves no spare time, she does not create a rushed detour. Short opportunities are options, not a demand to fill every gap.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Three short movement segments",
      alt: "Five, three, and four minutes of walking occur at different points in an example afternoon, totalling twelve minutes.",
      caption: "Only the stated movement segments are added. The timeline omits travel and waiting gaps and is not drawn to proportional scale.",
      items: [
        { label: "To the stop", detail: "5 minutes of familiar walking." },
        { label: "To the library", detail: "3 minutes after the seated bus journey." },
        { label: "Later errand", detail: "4 minutes; the three segments total 12 minutes." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["A note of today's ordinary tasks"],
      steps: [
        "List any short familiar movement periods already present in your day.",
        "Keep waiting, seated travel, and uncertain durations separate from known movement.",
        "If durations are known, add them; otherwise describe the segments without inventing minutes.",
        "Write what the record shows and what it cannot establish about a complete activity pattern.",
      ],
      notice: "Small contributions remain visible without being promoted into proof that every activity need is met.",
      troubleshooting: "If there were no feasible movement opportunities, leave the list empty rather than adding an unsafe or inaccessible detour.",
    },
    recall: {
      prompt: "A planned dance class is cancelled, but someone moved during several household tasks. Should the record become zero activity?",
      hint: "The cancelled plan and completed actions are different facts.",
      answer: "No. Record the movement that occurred, while leaving its duration and demand honest. It contributes without being declared equivalent to the cancelled class or a complete weekly plan.",
    },
    quiz: {
      question: "What follows from adding the example's five, three, and four minute segments?",
      options: ["Include all travel time because the segments belong to one errand.", "Twelve minutes were recorded, without proving a complete activity pattern.", "The same twelve-minute total establishes equal effort on any route."],
      correctIndex: 1,
      explanation: "The sum describes the example's movement. It does not turn seated travel into movement or establish equal effort across different routes and people.",
    },
    takeaway: "Record short movement honestly without demanding that it replace the whole original plan.",
    sourceNote: "WHO supports contributions from activity across the day. The durations are invented arithmetic, not recommended amounts or an exercise prescription.",
  },
  {
    id: 'wellbeing-010',
    outcome: "Explain a warm-up as preparation for a chosen activity rather than a test of range or effort.",
    scene: "A community dance participant arrives late and considers joining an already demanding sequence.",
    sections: [
      {
        title: "The group is already moving",
        paragraphs: [
          "Tara arrives late to a familiar community dance session. The group has moved from its introduction into a more demanding sequence. Joining the current phrase immediately would match the room's timing, but not the preparation the other participants have already had. Social pressure to avoid standing out can hide that difference. A useful choice is to tell the facilitator she has just arrived and ask where a suitable entry point would be.",
        ],
      },
      {
        title: "Preparation has a different purpose",
        paragraphs: [
          "A warm-up introduces activity more gradually before its main demand. Comfortable, controlled preparation gives someone time to move into the task and attend to the movements involved. NHS guidance includes warming up before exercise, but the existence of an example routine does not make every movement in it appropriate for every person. The preparation is not a competition, a flexibility demonstration, or a guarantee that injury cannot happen. Its purpose is different from proving readiness through maximum effort.",
        ],
      },
      {
        title: "Keep the entry point flexible",
        paragraphs: [
          "Tara asks the facilitator for the session's familiar preparation option and permission to join at a later suitable point. She can also sit out if an appropriate entry is unavailable. The plan changes her participation rather than requiring her to catch up physically with people who started earlier. Reading a generic lesson cannot determine which movements or range are suitable for her. The transferable idea is to reserve a preparation stage and allow adaptation, rather than treating a late arrival as a reason to skip it.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Arrival is not the main effort",
      alt: "A late arrival is followed by a preparation decision before any suitable entry into the dance session.",
      caption: "This sequence shows the decision order, not exercise instructions. Durations depend on the activity and appropriate individual guidance.",
      items: [
        { label: "Arrive", detail: "The group has already completed its introductory stage." },
        { label: "Check preparation", detail: "Ask about an appropriate familiar entry option first." },
        { label: "Join or sit out", detail: "Enter at a suitable later point, or do not participate." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["Paper or a note", "A familiar recreational activity in mind"],
      steps: [
        "Choose an activity you already know; keep this practice a written planning task.",
        "Name its main demand and the preparation stage that would normally come before it.",
        "Draft a question for the facilitator about an appropriate entry if you arrive late.",
        "Include the option to sit out rather than copy unfamiliar movements or rush preparation.",
      ],
      notice: "Your plan leaves preparation distinct from the main activity and includes a usable alternative.",
      troubleshooting: "If you do not know suitable preparation, mark that question unresolved instead of inventing a movement routine.",
    },
    recall: {
      prompt: "A casual game starts before a newcomer has prepared. Does matching the group's first turn settle their readiness?",
      hint: "Group timing and individual preparation are separate.",
      answer: "No. A group can be ready while the newcomer is not. An appropriate preparation or later entry needs considering; participation can be declined rather than rushed.",
    },
    quiz: {
      question: "Which response to arriving late preserves the role of preparation?",
      options: ["Start with a shorter version of the group's current sequence.", "Copy another person's earlier warm-up without checking whether it suits you.", "Ask about suitable preparation and a later entry point."],
      correctIndex: 2,
      explanation: "The third option checks a suitable entry. A shortened main sequence or another person's routine has not established appropriate preparation for the late arrival.",
    },
    takeaway: "Protect a suitable preparation stage instead of making punctuality a physical catch-up task.",
    sourceNote: "NHS guidance explains warming up. This original planning exercise specifies no movements, range, repetitions, or guarantee of safety and is not individual exercise advice.",
  },
  {
    id: 'wellbeing-011',
    outcome: "Adjust chair height and foot support together while keeping the back supported and the desk usable.",
    scene: "A borrowed chair is raised to a fixed desk, leaving the user's feet without support.",
    sections: [
      {
        title: "One adjustment changes another contact",
        paragraphs: [
          "At a shared project room, Jules raises a chair so the keyboard is easier to reach with relaxed shoulders. The desk now feels better, but both feet have lost comfortable contact with the floor. Sliding forward until the toes reach seems like a solution. It also moves Jules away from the backrest. The problem is a relationship among desk height, chair height, seat position, and foot support, not a single incorrect body part.",
        ],
      },
      {
        title: "Support should not require hovering",
        paragraphs: [
          "A supported foot has somewhere stable to rest instead of requiring the legs to hold it in place. A supported back can use the chair without the person perching to reach the floor. OSHA includes both contacts in its workstation guidance. Solving desk access by removing foot support trades one awkward demand for another. Lowering the chair can create the opposite trade if it makes the shoulders rise to reach the keyboard. Check the relationships together rather than correcting each in isolation.",
        ],
      },
      {
        title: "Test the whole setup",
        paragraphs: [
          "The room has a stable footrest intended for this purpose. Jules places it where both feet can rest comfortably, sits back, and checks the keyboard again. There should still be room to shift position and enter or leave the chair. A loose pile of books is not an equivalent support. If no suitable adjustment is available, the useful result is identifying what equipment or workstation change is needed, not balancing on an unstable substitute. The diagram is a relationship sketch, not a pose to hold all afternoon.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Keep all three supports in view",
      alt: "A side-view sketch places back support behind a seated user, the desk ahead, and stable foot support below.",
      caption: "Inspect the contacts as a set. Position markers are schematic and do not specify joint angles, dimensions, or a universal sitting posture.",
      items: [
        { label: "Back support", detail: "Remain able to use it rather than perching forward.", x: 16, y: 25, shape: 'box' },
        { label: "Seated user", detail: "Check comfort and room to change position.", x: 43, y: 52, shape: 'person' },
        { label: "Desk and input", detail: "Reach without lifting the shoulders.", x: 80, y: 23, shape: 'box' },
        { label: "Stable foot support", detail: "Both feet have a secure resting surface.", x: 72, y: 83, shape: 'box' },
      ],
      arrows: [{ from: 0, to: 1, label: "back contact" }, { from: 1, to: 3, label: "feet rest" }],
    }],
    practice: {
      minutes: 5,
      needs: ["Your usual chair and desk", "An existing suitable footrest if needed"],
      steps: [
        "Sit in your usual working position and check back contact and foot support.",
        "Notice whether reaching the desk requires raised shoulders or sliding away from the backrest.",
        "Make one available chair adjustment or use a suitable stable footrest, without improvised stacking.",
        "Recheck typing reach, support, and the ability to change position or leave the chair.",
      ],
      notice: "A desk adjustment no longer hides a loss of support elsewhere in the setup.",
      troubleshooting: "If available equipment cannot fit these needs, record the mismatch and request an appropriate adjustment instead of forcing the position.",
    },
    recall: {
      prompt: "Lowering a chair restores foot contact but makes someone lift their shoulders to type. What has happened?",
      hint: "One contact improved while another relationship changed.",
      answer: "The change traded unsupported feet for an awkward desk relationship. Chair, desk, input height, and suitable foot support need considering together, rather than declaring the lower chair correct.",
    },
    quiz: {
      question: "A raised chair fits a fixed desk but leaves the feet unsupported. What should be checked next?",
      options: ["Lower the chair until the feet reach without rechecking the desk.", "Suitable foot support alongside back contact and typing reach.", "Add back cushioning while leaving the feet without a resting surface."],
      correctIndex: 1,
      explanation: "Support and reach interact. Lowering the chair can undo useful desk access, while back cushioning alone does not provide a surface for the feet.",
    },
    takeaway: "Treat desk reach, back contact, and foot support as one adjustable setup.",
    sourceNote: "OSHA's chair and position guidance supplies the support principles. The schematic is original and is not a personal ergonomic assessment or a treatment for discomfort.",
  },
  {
    id: 'wellbeing-012',
    outcome: "Center the display used for the current task and check readable text without leaning or sustained turning.",
    scene: "A video editor reads a side monitor while the laptop occupies the central desk position.",
    sections: [
      {
        title: "The central device is not the main task",
        paragraphs: [
          "A laptop occupies the middle of Ali's desk because that is where it is usually stored. A larger display sits to the side. During subtitle editing, almost every glance goes to that side display, so the head stays turned while the body faces forward. The layout reflects the equipment's history, not the work being done now. The primary screen is the one receiving most attention during the task, even if it is technically called the second monitor.",
        ],
      },
      {
        title: "Direction and readability work together",
        paragraphs: [
          "OSHA recommends a monitor position that permits comfortable forward viewing, with the screen top generally at or below eye level. A central screen can still be awkward if text is too small or the distance forces leaning. Conversely, larger text does not remove a sustained sideways turn. Position, distance, and display scaling solve related but distinct problems. Eyewear and individual needs affect the usable viewing angle, so a generic height rule should not become a requirement to lift the chin.",
        ],
      },
      {
        title: "Rebuild around the subtitle task",
        paragraphs: [
          "Ali moves the main subtitle display into the forward viewing position and keeps the laptop as an occasional reference. After sitting comfortably, Ali increases text size until the subtitle list is readable without moving closer. The chair and keyboard are checked again because rotating only the display can leave the hands pointed elsewhere. When the main task changes to writing on the laptop, the layout may need another check. Equipment should follow the active task rather than assign a fixed neck position to every task.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Put the active display ahead",
      alt: "In a top-view layout, the user faces the main subtitle display; an occasional laptop reference sits off to the side.",
      caption: "Follow the forward viewing arrow. This diagram shows direction only; screen height, readable text, and comfortable distance need separate checks.",
      items: [
        { label: "Main subtitle display", detail: "The screen used most for this editing task.", x: 45, y: 18, shape: 'screen' },
        { label: "Occasional laptop", detail: "Reference use rather than the main viewing position.", x: 82, y: 52, shape: 'screen' },
        { label: "User", detail: "Chair and input direction match the main display.", x: 45, y: 82, shape: 'person' },
      ],
      arrows: [{ from: 2, to: 0, label: "main viewing direction" }],
    }],
    practice: {
      minutes: 5,
      needs: ["Your usual workstation", "A familiar page of text"],
      steps: [
        "Identify which screen receives most attention during your current task.",
        "If safely adjustable, bring that screen into a comfortable forward viewing position.",
        "Adjust text size before accepting a posture that requires leaning closer to read.",
        "Check height, eyewear needs, keyboard direction, and chair position together with the page open.",
      ],
      notice: "The main text is readable while you face it comfortably, rather than compensating with a sustained turn.",
      troubleshooting: "If furniture or equipment cannot move safely, request help or a suitable station rather than shifting heavy hardware alone.",
    },
    recall: {
      prompt: "During a presentation review, a side screen becomes the main display for an hour. Which layout assumption should change?",
      hint: "Primary describes current use, not the connector number.",
      answer: "Reconsider the forward viewing position for that task. The usually secondary display has become primary in use; chair and input placement should still fit the revised arrangement.",
    },
    quiz: {
      question: "Text is centered but too small to read without leaning. Which change addresses the remaining issue?",
      options: ["Raise the screen until its centre reaches eye level.", "Keep the settings fixed and rely on reminders to sit farther back.", "Increase readable text size and recheck a comfortable distance."],
      correctIndex: 2,
      explanation: "Centering addresses direction, not text legibility. Scaling and distance need checking separately instead of making the body compensate for small text.",
    },
    takeaway: "Arrange the active display for forward viewing, then solve readability without leaning.",
    sourceNote: "Inherited OSHA monitor and position guidance informs this layout. The original diagram specifies no exact distance or individualized screen height.",
  },
  {
    id: 'wellbeing-013',
    outcome: "Remove obstacles that push the keyboard away and inspect its angle from the hands' working position.",
    scene: "A home transcription desk has a notebook and thick wrist rest crowding the typing area.",
    sections: [
      {
        title: "The keyboard is tidy but distant",
        paragraphs: [
          "A transcription desk has a notebook laid neatly between the user and the keyboard. A thick wrist rest occupies more of the near edge. The arrangement looks organized from the doorway, but every line of typing requires the shoulders and arms to reach forward. The notebook is convenient to store there and inconvenient to type around. Storage order is not the same as a usable working arrangement.",
          "The first change is to move an obstacle, not repeatedly remind the user to sit better.",
        ],
      },
      {
        title: "Reach and tilt create different demands",
        paragraphs: [
          "OSHA describes typing with relaxed shoulders, elbows near the body, and wrists roughly aligned with the forearms. A distant keyboard encourages reaching even if its keys feel comfortable. A steep keyboard angle can make the wrists bend upward even when the device is close. These are separate adjustments. Raising the keyboard's rear feet is therefore not automatically an improvement. The useful angle is the one that suits the hands in the actual seated setup, rather than the one that makes the keys look more visible.",
        ],
      },
      {
        title: "Test with ordinary typing",
        paragraphs: [
          "The notebook moves beside the typing area, and the keyboard comes closer. The user then checks its tilt while entering a familiar sentence. If the wrists bend upward, the rear feet can be lowered where the keyboard permits. A support should not create a hard edge that the wrists must press into during typing. The result is evaluated through the whole working reach: hands, shoulders, desk, and chair. A comfortable setup still allows pauses and changes of position rather than demanding one fixed pose.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Clear the typing approach",
      alt: "A top-view sketch places the keyboard in front of the user and moves the notebook to the side of the reach path.",
      caption: "The arrow marks the typing approach, not arm length. Keyboard tilt and wrist alignment must be checked from the user's actual position.",
      items: [
        { label: "Keyboard", detail: "Within a relaxed forward reach.", x: 55, y: 20, shape: 'box' },
        { label: "Notebook", detail: "Moved out of the typing approach.", x: 16, y: 51, shape: 'paper' },
        { label: "User", detail: "Elbows remain comfortably near the body.", x: 55, y: 82, shape: 'person' },
      ],
      arrows: [{ from: 2, to: 0, label: "clear approach" }],
    }],
    practice: {
      minutes: 5,
      needs: ["Your keyboard and chair", "A familiar sentence to type"],
      steps: [
        "From your normal seat, identify anything occupying the space between you and the keyboard.",
        "Move your own nonessential items aside and bring the keyboard within a relaxed reach.",
        "Type a familiar sentence slowly and inspect whether the keyboard angle bends your wrists upward.",
        "Try an available tilt adjustment, then recheck shoulders, wrist alignment, and contact with desk edges.",
      ],
      notice: "Typing no longer requires reaching around an object or holding the wrists at an imposed angle.",
      troubleshooting: "If moving the keyboard worsens desk-edge contact, reassess chair and input height instead of forcing the closer position.",
    },
    recall: {
      prompt: "A new keyboard is close enough, but its raised rear feet tilt the hands upward. Is distance the remaining problem?",
      hint: "Position and angle are different settings.",
      answer: "No. Check the tilt and the relationship to chair and desk height. A nearby keyboard can still impose an awkward wrist angle, so distance alone does not settle fit.",
    },
    quiz: {
      question: "A notebook pushes the keyboard beyond relaxed reach. Which change tests the most direct cause?",
      options: ["Move the notebook and recheck keyboard placement.", "Raise the keyboard's rear feet to make the keys easier to see.", "Add desk-edge cushioning without clearing the notebook from the approach."],
      correctIndex: 0,
      explanation: "Removing the obstacle tests the reach problem. Tilt or padding can change other aspects of the setup but do not clear the obstructed approach.",
    },
    takeaway: "Clear the typing reach, then check the keyboard angle in use.",
    sourceNote: "OSHA keyboard and position references inform these checks. The exercise is a reversible setup inspection, not a prescribed posture or treatment for hand symptoms.",
  },
  {
    id: 'wellbeing-014',
    outcome: "Explain why raising a laptop changes both viewing and typing, and when separate input permits independent adjustment.",
    scene: "A laptop is lifted on a stable stand for a long application-writing session.",
    sections: [
      {
        title: "The screen rises with the keyboard",
        paragraphs: [
          "Morgan places a laptop on an existing stable stand while writing an application. Reading the screen now involves less downward viewing. But the laptop's keyboard has risen too, so typing requires lifted arms. The screen improvement is real, and so is the new hand-position problem. A laptop joins two parts that a desktop workstation can position separately. Moving the whole device cannot independently choose a viewing height and an input height.",
        ],
      },
      {
        title: "Independent controls resolve a coupled problem",
        paragraphs: [
          "OSHA's monitor and keyboard guidance concerns different relationships: comfortable viewing on one hand, and relaxed shoulders with usable wrist alignment on the other. With a separate keyboard and pointing device, the laptop can remain at an appropriate viewing position while the hands work elsewhere. The mechanism is simple separation, not a special property of a branded stand. Raising only the screen side of the problem while continuing to type on the raised laptop leaves the two demands coupled.",
        ],
      },
      {
        title: "Use available equipment honestly",
        paragraphs: [
          "Morgan already has a separate keyboard and mouse, so they are placed on the desk within easy reach. The stand stays stable, laptop vents remain clear, and cables do not cross the walking route. Text size is checked before moving closer. Without separate input, this exact arrangement would not solve typing; a shorter task, a different available workstation, or a change of setup may be more workable. The lesson identifies the tradeoff rather than declaring a single laptop height correct for all tasks and bodies.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Separate viewing from input",
      alt: "A side-view sketch shows a user viewing a raised laptop while reaching to a separate lower keyboard and mouse.",
      caption: "The stand is assumed stable and ventilated. Positions show independent functions, not exact furniture heights or body angles.",
      items: [
        { label: "Raised laptop", detail: "Set for comfortable viewing.", x: 78, y: 18, shape: 'screen' },
        { label: "Separate input", detail: "Keyboard and mouse stay within relaxed reach.", x: 74, y: 82, shape: 'box' },
        { label: "User", detail: "Viewing and hand position can be checked separately.", x: 20, y: 50, shape: 'person' },
      ],
      arrows: [{ from: 2, to: 0, label: "view" }, { from: 2, to: 1, label: "input" }],
    }, {
      type: 'comparison',
      title: "What changed independently?",
      alt: "A stand alone moves the joined screen and keyboard; separate input allows hand position to remain lower.",
      caption: "Compare the controls available in each setup, not the appearance or price of the equipment.",
      items: [
        { label: "Stand alone", detail: "Screen and built-in keyboard rise together." },
        { label: "Stand plus separate input", detail: "Viewing and typing positions can differ." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["Your laptop setup", "Existing separate input devices if available"],
      steps: [
        "Inspect your current viewing angle and typing reach before moving any equipment.",
        "Note whether raising the laptop would also raise the hands' working surface.",
        "If suitable equipment is available, check separate input on a stable, unobstructed desk area.",
        "Verify comfortable reading, hand reach, ventilation, and cables; otherwise record the unresolved tradeoff.",
      ],
      notice: "You can explain which setting affects viewing and which affects hand position.",
      troubleshooting: "Without separate input or stable support, do not imitate the raised setup using a loose stack.",
    },
    recall: {
      prompt: "A tablet stand improves viewing, but typing on the raised touchscreen remains awkward. What design relationship is similar?",
      hint: "Display and input still occupy the same surface.",
      answer: "Viewing and input remain coupled. A suitable separate input method, if available, permits independent placement; improving the display angle alone does not settle hand comfort.",
    },
    quiz: {
      question: "A stand improves laptop viewing but leaves typing too high. Which arrangement allows independent adjustment?",
      options: ["Change screen tilt while typing on the raised laptop.", "Keep the raised display and use suitable separate keyboard and pointing devices.", "Lower the whole laptop until typing fits without rechecking viewing."],
      correctIndex: 1,
      explanation: "Separate input lets the hands work at a different height from the screen. Tilting or lowering the joined laptop does not provide independent input placement.",
    },
    takeaway: "A joined device couples two needs; separate input can make their placement independent.",
    sourceNote: "This applies inherited OSHA monitor and keyboard principles to a laptop. It is an original equipment comparison, not a guarantee of comfort or a buying recommendation.",
  },
  {
    id: 'wellbeing-015',
    outcome: "Locate the pointing device for relaxed use instead of leaving it beyond desk clutter.",
    scene: "A photo-selection workstation puts the mouse beyond a bottle, charger, and wide keyboard.",
    sections: [
      {
        title: "The mouse gets the leftover space",
        paragraphs: [
          "While selecting photographs, Sana repeatedly reaches around a bottle and charger to use the mouse. A wide keyboard occupies the middle of the desk, leaving the mouse beyond its far edge. The device is small, but the reach occurs with almost every selection. Buying a differently shaped mouse would change what the hand holds; it would not automatically change where the hand has to go. Position and device shape need examining separately.",
        ],
      },
      {
        title: "Repeated reach is part of the task",
        paragraphs: [
          "OSHA recommends keeping the pointing device close to the keyboard so it can be used without the upper arm repeatedly reaching away. An awkward operating position asks the body to compensate for the desk layout again and again. A tight grip is another demand, not proof that a mouse is being used efficiently. The fit depends on the person's hand, preferred input method, and task. An ergonomic label on a box does not answer those questions about a particular workstation.",
        ],
      },
      {
        title: "Clear, place, and test",
        paragraphs: [
          "Sana moves the bottle and charger to safe storage positions outside the active input area. The mouse comes beside the keyboard, with enough surface to operate it comfortably. If the keyboard's width still forces a reach, that remaining mismatch is noted rather than hidden by twisting the chair. A few familiar selections reveal whether the new location is usable. Recheck cable slack and the path to a drink as well: solving the reach should not introduce snagging or a spill beside electrical equipment.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Reserve space for the pointing device",
      alt: "A top-view layout places a mouse beside the keyboard and a drink outside the active input area.",
      caption: "Inspect the cleared operating area rather than treating these coordinates as reach measurements. The layout can be mirrored for the preferred hand.",
      items: [
        { label: "Keyboard", detail: "Its width affects the available mouse position.", x: 40, y: 20, shape: 'box' },
        { label: "Mouse", detail: "Beside the keyboard with usable surface space.", x: 80, y: 48, shape: 'object' },
        { label: "Drink storage", detail: "Outside the active input and cable area.", x: 14, y: 53, shape: 'object' },
        { label: "User", detail: "Test with the upper arm comfortably near the body.", x: 48, y: 84, shape: 'person' },
      ],
      arrows: [{ from: 3, to: 1, label: "clear input reach" }],
    }],
    practice: {
      minutes: 4,
      needs: ["Your pointing device", "A familiar selection task"],
      steps: [
        "Identify objects that make you reach around or beyond them to use the pointer.",
        "Move those objects to safe places, keeping drinks and cables out of the active area.",
        "Try a closer device position beside the keyboard using several ordinary selections.",
        "Check arm reach, grip, usable surface, and cable slack before accepting the layout.",
      ],
      notice: "Repeated selections can happen without reaching around the same obstacle each time.",
      troubleshooting: "If keyboard width still prevents a suitable position, identify that constraint rather than gripping harder or twisting to reach.",
    },
    recall: {
      prompt: "A new vertical mouse feels different in the hand but still sits beyond a sketchbook. Which problem remains?",
      hint: "Shape did not move the operating position.",
      answer: "The sketchbook still forces a reach. Placement needs a separate check even if the device shape suits the hand; a product change does not clear the desk path.",
    },
    quiz: {
      question: "After desk rearrangement, a mouse requires a sideways reach again. What should be tested first?",
      options: ["A closer clear operating position.", "A different mouse shape in the same distant position.", "A pointer-speed adjustment without inspecting the physical placement."],
      correctIndex: 0,
      explanation: "The changed reach is a layout issue. Shape and pointer speed can matter, but neither necessarily removes the distance to the device or an obstruction.",
    },
    takeaway: "Give the pointing device working space, not whatever space remains after storage.",
    sourceNote: "OSHA pointer and position guidance informs this reversible layout check. The diagram is not a reach measurement or proof that any device fits everyone.",
  },
  {
    id: 'wellbeing-016',
    outcome: "Understand daylight as a time cue while planning an ordinary accessible daytime setting, not an exposure dose.",
    scene: "An indoor workshop participant chooses between an enclosed corridor and a shaded courtyard for a daytime pause.",
    sections: [
      {
        title: "A whole day inside connected rooms",
        paragraphs: [
          "A training day moves between a meeting room, an enclosed corridor, and a basement dining area. During a daytime pause, Bea notices that the building also has an accessible shaded courtyard. Using it would change the light setting without requiring a sunrise trip or special equipment. The practical choice is between two available places during the day, not between being disciplined and failing to complete a morning ritual.",
        ],
      },
      {
        title: "Light carries timing information",
        paragraphs: [
          "Circadian timing is the body's roughly daily organization of functions such as sleep and wakefulness. The NIH overview describes light and darkness as major cues to this timing system. This is why the timing and setting of light belong in a discussion of an ordinary day. It does not follow that a generic lesson can assign an exact outdoor duration or predict a sleep response. Light conditions vary with weather, season, location, and surroundings, and a bright-looking space is not a calibrated measurement.",
        ],
      },
      {
        title: "Choose the setting that is usable",
        paragraphs: [
          "Bea checks that the courtyard route is accessible and the weather suitable, then chooses a shaded seat facing ordinary surroundings. There is no reason to stare toward the sun. On another day, the outdoor route may be closed or conditions unsuitable, so the choice changes. A comfortable indoor location remains an option rather than something to feel guilty about. The exercise produces a practical location plan and an understanding of light as a cue, not a claim that one outing fixes a difficult night.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Two daytime pause locations",
      alt: "An enclosed corridor and a shaded accessible courtyard offer different light settings during the same daytime break.",
      caption: "Compare the settings and access constraints. The drawing does not measure brightness or establish equivalent exposure through glass and outdoors.",
      items: [
        { label: "Enclosed corridor", detail: "An indoor option without an outdoor view." },
        { label: "Shaded courtyard", detail: "Daylight and ordinary surroundings, when conditions and access suit." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["A familiar daytime location", "Current access and weather information"],
      steps: [
        "Identify a daytime pause already available in your schedule rather than adding an early alarm.",
        "Name an accessible outdoor option and an indoor alternative near that activity.",
        "Check route access, shade, weather, and whether the location is comfortable to use.",
        "Write a suitable choice without assigning exposure minutes or making a sleep prediction.",
      ],
      notice: "Your plan names a real usable setting and its constraints, not an exact dose to complete.",
      troubleshooting: "If outdoors is unsuitable, keep the alternative. Do not seek stronger brightness or look toward the sun to compensate.",
    },
    recall: {
      prompt: "A friend claims every cloudy-day outing requires twice as long outside. What evidence is missing from that rule?",
      hint: "A timing cue is not a universal measured dose.",
      answer: "The rule assumes an exact exposure-response relationship for every person and setting. General circadian guidance does not supply that calculation, so it should not determine a personal duration.",
    },
    quiz: {
      question: "Which conclusion fits the courtyard example?",
      options: ["The courtyard provides the same measured light exposure on every day.", "A bright window view establishes equal exposure to the outdoor courtyard.", "Daylight offers a timing cue, with access and conditions still relevant."],
      correctIndex: 2,
      explanation: "NIH explains light as a cue, but the example measures no exposure. Different conditions and indoor settings cannot simply be assumed equivalent to the courtyard.",
    },
    takeaway: "Plan usable daytime surroundings without converting daylight into a universal dose.",
    sourceNote: "Inherited NIH circadian and sleep references support light as a cue and outdoor time where possible. This is not light therapy or a sleep prescription.",
  },
  {
    id: 'wellbeing-017',
    outcome: "Inspect total evening brightness instead of treating a warmer display setting as a complete solution.",
    scene: "Someone reads a warm-tinted phone beneath a bright kitchen ceiling light before bed.",
    sections: [
      {
        title: "The phone changes colour, the room does not",
        paragraphs: [
          "Owen turns on a warmer phone display while reading after dinner. The phone now looks amber, but a bright kitchen ceiling light remains overhead and the television is still on in the adjoining room. The setting changed one property of one device. It did not change how long reading continues, the other light sources, or the time left before bed. The whole environment is a better unit of inspection than the phone menu alone.",
        ],
      },
      {
        title: "Brightness and colour are not interchangeable",
        paragraphs: [
          "Light and darkness are cues to daily timing, and NIH sleep guidance recommends avoiding bright artificial light before sleep. A warmer colour appearance is different from reducing overall brightness. A screen can remain bright after its colours change, while room lighting continues contributing independently. This is not a claim that every visible light is harmful. Enough illumination is still needed to read comfortably, use the space, and move safely. Colour filters do not replace those practical decisions about the setting.",
        ],
      },
      {
        title: "Change one unnecessary source",
        paragraphs: [
          "Owen stops the unused television and moves the reading task to a comfortably lit area where the bright ceiling light is unnecessary. A modest task light remains, so the page and walking route are usable. If the phone still draws the evening beyond the planned stopping point, setting it aside addresses duration in a way a tint cannot. The result is a changed arrangement of sources and activity, not a promise that a particular bulb, setting, or colour will produce sleep.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Inspect all active sources",
      alt: "One setting changes only the phone tint; the other removes an unused television and unnecessary ceiling light while retaining useful task light.",
      caption: "The comparison separates a device colour setting from the room arrangement. It is schematic, not a measurement of light or sleep effects.",
      items: [
        { label: "Phone tint only", detail: "Bright ceiling light and unused television remain on." },
        { label: "Whole setting checked", detail: "Unused sources off; enough task and route light remains." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["An evening room you use", "Its existing lighting controls"],
      steps: [
        "List the lights and displays active during a typical pre-bed activity.",
        "Identify one source that is unnecessary for the task or safe movement.",
        "Reduce or switch off that source using normal controls, keeping the room usable.",
        "Check whether the task still crowds the sleep schedule even after the lighting change.",
      ],
      notice: "You have changed an actual source or activity boundary, not merely the colour of one screen.",
      troubleshooting: "If reducing a light makes reading or movement difficult, restore it and choose a different unnecessary source.",
    },
    recall: {
      prompt: "A tablet has a warm display, but its user reads under a bright overhead lamp for another hour. What remains unaddressed?",
      hint: "There are light sources and time boundaries outside the device setting.",
      answer: "The overhead light, display brightness, and extended activity still need consideration. A colour change alone does not manage the room or protect the available sleep interval.",
    },
    quiz: {
      question: "The phone tint is already warmer, but an unused television brightens the room. Which change addresses the unexamined source?",
      options: ["Turn off the unused television while keeping useful task lighting.", "Make the phone tint warmer while leaving the television on.", "Lower phone brightness but leave the unused television running."],
      correctIndex: 0,
      explanation: "Turning off the unused television removes that source. Phone adjustments affect a different device and do not change the television's contribution to the room.",
    },
    takeaway: "Check the room, the displays, and the stopping point instead of relying on a tint.",
    sourceNote: "NIH guidance supports avoiding bright artificial light before sleep. This original room check does not endorse filters, prescribe light levels, or guarantee sleep improvement.",
  },
  {
    id: 'wellbeing-018',
    outcome: "Trace screen glare to a window or lamp and test a layout change before compensating with posture.",
    scene: "An afternoon drawing desk develops a window reflection across the monitor as daylight changes.",
    sections: [
      {
        title: "The reflection moves into the work",
        paragraphs: [
          "At an afternoon drawing desk, a bright window patch appears across a digital sketch. Ren leans sideways to see around it. The screen was comfortable earlier, so the new posture seems like a small temporary adjustment. But the reflection remains through the next set of edits. The thing that changed is the relationship among incoming light, the screen surface, and the viewing position. Holding the body elsewhere leaves that relationship unresolved.",
        ],
      },
      {
        title: "Glare has a direction",
        paragraphs: [
          "A screen can reflect a bright source into the viewer's line of sight. That reflection competes with the detail the person wants to see, encouraging leaning or turning. OSHA therefore treats glare as part of workstation layout. Placing the monitor perpendicular to a window is one starting arrangement: the window is to the side rather than directly ahead or behind the viewer. Actual results depend on the screen, window, and changing daylight, so a diagram cannot guarantee that one angle removes every reflection.",
        ],
      },
      {
        title: "Test from the working position",
        paragraphs: [
          "Ren returns to a comfortable seated position, opens the same sketch, and tests a small safe monitor adjustment or the available blind control. The check is whether the bright patch leaves the important working area without creating another reflection. Raising screen brightness indefinitely is not the only response and may leave the source unchanged. Later daylight can require another check. A good adjustment makes the image usable from a comfortable position, not merely visible while the viewer continues leaning around the same patch.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Put the window beside the viewing line",
      alt: "A top-view desk places the window on the left, monitor ahead, and user below, with the viewing line directed forward.",
      caption: "The monitor plane is perpendicular to the side window in this schematic. Test actual reflections from the seat; no light rays or glare-free guarantee are implied.",
      items: [
        { label: "Side window", detail: "Use the available blind if needed.", x: 15, y: 48, shape: 'light' },
        { label: "Monitor", detail: "Screen faces the user rather than the side window.", x: 55, y: 18, shape: 'screen' },
        { label: "User", detail: "Check the same sketch from a comfortable position.", x: 55, y: 82, shape: 'person' },
      ],
      arrows: [{ from: 2, to: 1, label: "forward viewing line" }],
    }],
    practice: {
      minutes: 5,
      needs: ["Your monitor", "A familiar image or page", "Existing blind or lamp controls"],
      steps: [
        "From a comfortable working position, locate one reflection interfering with the same page or image.",
        "Identify its likely window or lamp source before changing screen brightness.",
        "Test one small safe layout or light-control adjustment while keeping the task visible.",
        "Return to the usual seat and check both the original patch and any new glare.",
      ],
      notice: "The working area is more usable without leaning away from the original viewing position.",
      troubleshooting: "If the reflection stays, recheck the source and angle. Do not move heavy equipment or block required lighting.",
    },
    recall: {
      prompt: "A desk is glare-free at noon but difficult to read later. Does the earlier result prove the current posture is the problem?",
      hint: "The light geometry can change over time.",
      answer: "No. Daylight direction and intensity can change, producing a new reflection. Recheck the source and layout from a comfortable position before asking the body to compensate.",
    },
    quiz: {
      question: "After text is enlarged, a lamp reflection still covers the working area. Which check directly addresses the remaining problem?",
      options: ["Try another step of text enlargement.", "Move the text window around the bright patch.", "Reposition the lamp or screen to change the reflection."],
      correctIndex: 2,
      explanation: "The reflection depends on the light and surface arrangement. Enlarging or relocating text may work around the patch without removing its source.",
    },
    takeaway: "Move or control the reflected light instead of sustaining a posture around it.",
    sourceNote: "Inherited OSHA environment and monitor references address glare and viewing posture. This original layout is schematic and must be checked under actual conditions.",
  },
  {
    id: 'wellbeing-019',
    outcome: "Aim a task lamp at paper while checking direct glare, screen reflection, and hand shadows.",
    scene: "A storyboard desk combines a printed page, a pencil, and a monitor showing reference frames.",
    sections: [
      {
        title: "One lamp serves two surfaces badly",
        paragraphs: [
          "A storyboard artist puts a desk lamp behind the monitor to brighten a printed shot list. The page improves, but the lamp is visible whenever the artist looks up at the screen. Moving the head hides the bulb while making the paper harder to see. Paper reflects light falling on it; a display produces its own image and can also reflect room lights. The two surfaces do not need identical illumination simply because they share a desk.",
        ],
      },
      {
        title: "Follow where the light lands",
        paragraphs: [
          "Task lighting directs useful illumination toward the work rather than raising brightness everywhere. OSHA's environment guidance pairs adequate illumination with controlling glare. The aim is not the brightest possible page. It is readable paper without a lamp shining directly into the eyes or reflecting across the display. A hand can also block the lamp and cast a shadow on the line being drawn. Lamp direction, the working hand, and the page location therefore need checking together.",
        ],
      },
      {
        title: "Check both tasks after adjusting",
        paragraphs: [
          "The artist moves the lamp to the side and aims it at the shot list using its normal adjustment. Then a pencil is held in the ordinary drawing position to see whether the hand shadows the current line. The monitor is checked from the same seat. If glare has simply moved from the eyes to the screen, the job is unfinished. A small page or lamp adjustment can be tested before buying brighter equipment. Keep the lamp stable and clear of paper rather than draping material over it to dim the bulb.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Direct the lamp toward the page",
      alt: "A lamp to the side aims at a central paper task, with the monitor elsewhere and the user checking both from below.",
      caption: "The arrow shows intended task illumination, not a calculated light beam. Mirror the arrangement if needed and check actual hand shadows and screen reflections.",
      items: [
        { label: "Task lamp", detail: "Stable, aimed at paper, out of direct view.", x: 15, y: 20, shape: 'light' },
        { label: "Shot list", detail: "Check the line beneath the working hand.", x: 47, y: 50, shape: 'paper' },
        { label: "Monitor", detail: "Recheck for reflections after moving the lamp.", x: 82, y: 20, shape: 'screen' },
        { label: "User", detail: "Inspect both tasks from the ordinary seat.", x: 50, y: 84, shape: 'person' },
      ],
      arrows: [{ from: 0, to: 1, label: "light toward task" }],
    }],
    practice: {
      minutes: 5,
      needs: ["An adjustable existing lamp", "A printed page", "Your usual pen or pencil"],
      steps: [
        "Place the page where you normally work and view it from your usual seat.",
        "Aim the lamp toward the page using normal controls, keeping it stable and unobstructed.",
        "Hold the pen in your working hand and check whether its shadow hides the line.",
        "Look toward any nearby display and adjust again if the lamp creates direct or reflected glare.",
      ],
      notice: "The paper remains readable during the task without making the adjacent display harder to view.",
      troubleshooting: "If the lamp cannot be repositioned, try a small page change. Never cover a lamp with fabric or paper.",
    },
    recall: {
      prompt: "A lamp lights a recipe but reflects in a tablet beside it. Would a brighter bulb necessarily solve both tasks?",
      hint: "Direction can matter more than additional brightness.",
      answer: "No. More light can strengthen the reflection. Reconsider lamp direction, page or tablet placement, and the usual viewing position so the useful task light does not create glare elsewhere.",
    },
    quiz: {
      question: "After moving a lamp, the bulb is hidden but the drawing hand shadows the page. What should be checked?",
      options: ["More brightness from the same lamp direction.", "Lamp direction relative to the working hand and paper.", "Lower monitor brightness with the lamp and page unchanged."],
      correctIndex: 1,
      explanation: "Removing direct glare is one check. The light must also reach the working line without being blocked by the hand.",
    },
    takeaway: "Aim light at the task, then test the hand shadow and neighbouring screen.",
    sourceNote: "OSHA environment guidance supports adequate task illumination and glare control. This original desk sketch is not a photometric design or a claim about eye treatment.",
  },
  {
    id: 'wellbeing-020',
    outcome: "Reduce unnecessary bedroom light while preserving a usable nighttime route and essential equipment functions.",
    scene: "A guest bedroom has a bright clock by the pillow and a dim light needed near the doorway.",
    sections: [
      {
        title: "Two lights do different jobs",
        paragraphs: [
          "In a guest bedroom, a bright clock faces the pillow. A lower light near the doorway helps the guest see the route through an unfamiliar room. Treating every visible light as the same problem would remove something useful along with something distracting. The first question is what each light is doing. The clock display provides information that may not need constant brightness, while the route light supports moving safely when the room is otherwise dark.",
        ],
      },
      {
        title: "Darkness is not an obstacle course",
        paragraphs: [
          "NIH sleep guidance recommends a dark bedroom and allows a dim night light when needed. These ideas are compatible because reducing unnecessary light does not require removing all orientation cues. Position and direction matter alongside brightness: a modest light aimed toward the floor serves a different purpose from a bright display facing the eyes. The goal is a usable environment, not winning a test of complete darkness. Individual access needs can change which lights are necessary and where they belong.",
        ],
      },
      {
        title: "Adjust the display, then inspect the route",
        paragraphs: [
          "With the host's permission, the guest uses the clock's normal dimming setting and checks that its alarm remains functional. The doorway light stays on. While fully awake, the guest checks the walking route for bags and trailing cables rather than discovering them in darkness. No cloth is placed over powered equipment, and no safety indicator is disabled. If the route becomes difficult to see, useful lighting is restored. The result is less avoidable brightness with the necessary functions still available.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Keep the route, reduce the display",
      alt: "A bed and doorway are connected by a clear route; a clock display is dimmed while a low route light remains.",
      caption: "Top-view markers distinguish two light functions. The route arrow is clear floor, not furniture, and the illustration specifies no measured light level.",
      items: [
        { label: "Bed", detail: "Check unnecessary brightness from the resting position.", x: 18, y: 23, shape: 'object' },
        { label: "Doorway", detail: "Keep the route to this point usable.", x: 82, y: 23, shape: 'box' },
        { label: "Clock display", detail: "Use normal dimming; retain necessary alarm function.", x: 18, y: 78, shape: 'screen' },
        { label: "Low route light", detail: "Retained where needed for safe movement.", x: 75, y: 78, shape: 'light' },
      ],
      arrows: [{ from: 0, to: 1, label: "clear route" }],
    }],
    practice: {
      minutes: 5,
      needs: ["Your room's existing controls", "Permission for any shared equipment"],
      steps: [
        "While fully awake, identify which lights are informational, unnecessary, or needed for movement.",
        "Use a normal setting to reduce one unnecessary display without covering powered equipment.",
        "Check the usual route for obstacles with needed route lighting still available.",
        "Verify alarms and essential indicators remain functional; restore lighting if the room becomes hard to navigate.",
      ],
      notice: "The room has less avoidable brightness without losing a usable route or necessary alerts.",
      troubleshooting: "If normal controls cannot reduce the display safely, leave it alone and consider a different nonessential light source.",
    },
    recall: {
      prompt: "A hotel room has a glowing television and a light needed to find the bathroom. Which distinction should guide the adjustment?",
      hint: "Ask what useful function each source serves.",
      answer: "Turn off an unused television using normal controls while keeping needed route lighting. The recommendation for darkness does not require removing orientation or creating a trip hazard.",
    },
    quiz: {
      question: "After dimming a clock, the doorway is difficult to find. Which response fits the guidance?",
      options: ["Restore suitable route lighting while keeping unnecessary display brightness reduced.", "Restore full clock brightness without checking the route arrangement.", "Move the clock away from the pillow without checking floor visibility."],
      correctIndex: 0,
      explanation: "Route visibility and display brightness are separate needs. A dim night light can coexist with reducing unnecessary bedroom light.",
    },
    takeaway: "Reduce the light that is unnecessary, not the light that makes the room usable.",
    sourceNote: "NIH bedroom guidance permits a dim night light. This original environment check is not a claim that any visible light prevents sleep or that darkness treats sleep problems.",
  },
  {
    id: 'wellbeing-021',
    outcome: "Add a usable interruption to prolonged sitting without treating it as a substitute for the rest of an active day.",
    scene: "A remote training afternoon runs through several modules while an evening recreational session is already planned.",
    sections: [
      {
        title: "The evening plan does not change the afternoon",
        paragraphs: [
          "A remote training course moves directly from one recorded module to the next. Priya remains seated through the sequence because an evening recreational session is already in the calendar. That session concerns a different part of the day. Its existence does not alter the long uninterrupted stretch happening now. Equally, taking a pause between modules would not make every other kind of activity unnecessary. Both observations can be true without ranking one as the only worthwhile action.",
        ],
      },
      {
        title: "Interrupt the demand that is continuous",
        paragraphs: [
          "Adult NHS and WHO guidance distinguishes being active from reducing prolonged sedentary time. A long seated task repeatedly asks the body to remain in a limited arrangement. A suitable interruption changes that pattern instead of merely promising movement later. Standing is not accessible or appropriate for everyone, and standing motionless is not the only alternative worth considering. A comfortable position change or familiar seated movement can be a workable interruption according to the person's circumstances, without pretending all options have identical physical effects.",
        ],
      },
      {
        title: "Give the course a stopping place",
        paragraphs: [
          "Priya turns off automatic progression between modules and leaves a note identifying the next module. That creates an actual place to pause. She can use a suitable familiar movement or change of position before continuing, rather than spending the entire interval reading the course chat in the same seat. The resume note reduces the practical cost of stopping. No timer in this example is a researched threshold. The result is a visible interruption opportunity in a task that otherwise keeps extending itself.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Make the module boundary usable",
      alt: "A training module ends, a resume note creates a pause, and the next module starts after an available interruption.",
      caption: "The sequence inserts a real stopping place. It specifies no ideal break interval or equivalent effect for different movement options.",
      items: [
        { label: "Finish this module", detail: "Stop automatic progression at the existing boundary." },
        { label: "Pause with a resume note", detail: "Use an appropriate position or movement change before continuing." },
        { label: "Open the next module", detail: "Resume deliberately rather than through autoplay." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["A long seated task", "Paper or a private resume note"],
      steps: [
        "Identify a seated task that tends to continue without an obvious stopping point.",
        "Choose its next safe boundary, such as a saved page or completed module.",
        "Write where to resume and remove an avoidable automatic continuation if you control it.",
        "Use the pause for a comfortable change suitable for you, without a prescribed movement routine.",
      ],
      notice: "The task now contains a usable interruption rather than only an intention to move later.",
      troubleshooting: "If a boundary is far away, find an earlier safe pause. Do not postpone a needed break to finish the plan.",
    },
    recall: {
      prompt: "Someone has a weekend hike planned but spends today's training session continuously seated. What separate scheduling question remains?",
      hint: "Future activity does not interrupt the current stretch.",
      answer: "Look for a suitable interruption in today's task. The hike and the pause address different parts of the activity pattern; neither automatically replaces the other.",
    },
    quiz: {
      question: "Which change directly interrupts the course's continuous seated sequence?",
      options: ["Schedule a longer recreational session next week.", "Switch course videos while retaining the same uninterrupted setup.", "Use a saved module boundary for a suitable change before resuming."],
      correctIndex: 2,
      explanation: "The boundary changes the current sequence. A later session or a new video does not itself interrupt the prolonged seated period.",
    },
    takeaway: "Create an interruption in the long seated task, alongside other activity rather than instead of it.",
    sourceNote: "NHS and WHO guidance includes activity and reducing prolonged sedentary time. This original task arrangement sets no movement prescription or universal break timer.",
  },
  {
    id: 'wellbeing-022',
    outcome: "Choose a visual pause that changes viewing distance rather than only changing nearby content.",
    scene: "A library archive reader switches between a scanned document and phone messages without leaving close viewing.",
    sections: [
      {
        title: "A new screen can keep the same demand",
        paragraphs: [
          "At a library archive desk, Ellis reads a scanned letter on a monitor, then opens messages on a phone for a break. The content and device change, but both tasks involve attending to detail nearby. Looking away from the original application is not necessarily looking away from close work. The same distinction applies to replacing a screen with small print held near the face. A visual pause is about the viewing task, not whether the next item feels recreational.",
        ],
      },
      {
        title: "Distance changes what the eyes are doing",
        paragraphs: [
          "Close detail asks the visual system to maintain near focus and alignment. Looking comfortably farther away changes that demand. OSHA includes viewing time as part of monitor guidance, rather than treating screen position as the whole issue. This does not require staring at a particular distant object or forcing the eyes through an exercise. A naturally placed, comfortably visible point across the room can serve the example. A bright lamp or the sun is not a suitable target, even when it is farther away.",
        ],
      },
      {
        title: "Use the room, not another feed",
        paragraphs: [
          "Ellis saves the document position and puts the phone down. From the same supported seat, the gaze can rest on a noticeboard across the reading room, without turning awkwardly or trying to decipher its smallest print. Normal blinking continues; there is no staring challenge. The pause changes distance while keeping the task easy to resume. If the room offers no comfortable view, the setup needs adapting rather than forcing a neck turn. An exact interval is not presented here as a proven threshold for everyone.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Change the distance of attention",
      alt: "A viewer looks between nearby document detail and a noticeboard farther across the room, rather than between two close screens.",
      caption: "Arrows distinguish near work from a farther comfortable view. Distances are schematic and do not prescribe a measured eye exercise.",
      items: [
        { label: "Viewer", detail: "Remain comfortably supported; no staring required.", x: 18, y: 30, shape: 'eye' },
        { label: "Nearby document", detail: "Close detail on the working screen.", x: 37, y: 78, shape: 'screen' },
        { label: "Noticeboard across room", detail: "A comfortable farther view, not tiny text to decode.", x: 84, y: 26, shape: 'paper' },
      ],
      arrows: [{ from: 0, to: 1, label: "near task" }, { from: 0, to: 2, label: "farther view" }],
    }],
    practice: {
      minutes: 3,
      needs: ["A saved stopping point", "A comfortable farther view in your current setting"],
      steps: [
        "Save your place in the close task so it is easy to resume.",
        "Identify a comfortably visible farther object without a bright light or awkward head turn.",
        "Let your gaze rest there naturally, rather than opening another nearby display.",
        "Return when appropriate and note which part of the viewing demand actually changed.",
      ],
      notice: "The pause changes near viewing, not merely the app, device, or subject matter.",
      troubleshooting: "If the farther target requires squinting or turning, choose an easier view instead of treating distance as a performance test.",
    },
    recall: {
      prompt: "Someone replaces phone scrolling with a paperback held at the same close distance. Has close viewing necessarily been interrupted?",
      hint: "Paper changes the medium, not automatically the distance.",
      answer: "No. Reading the book can continue a similar near-detail demand. A visual pause should change that demand rather than assume any non-screen activity does so.",
    },
    quiz: {
      question: "Which pause most directly changes sustained near-detail viewing?",
      options: ["Looking comfortably across the room without reading small detail.", "Reading a different document on the same nearby monitor.", "Moving from the monitor to a phone at a similar distance."],
      correctIndex: 0,
      explanation: "The first option changes viewing distance and detail demand. The other options change content or hardware while retaining close work.",
    },
    takeaway: "A visual pause changes the viewing demand, not just the content.",
    sourceNote: "OSHA monitor guidance includes viewing time. This original pause has no prescribed distance or proven timing threshold and is not treatment for persistent eye discomfort.",
  },
  {
    id: 'wellbeing-023',
    outcome: "Choose a pause that removes gripping and repeated input when those are the demands being interrupted.",
    scene: "A photo retoucher leaves mouse work for a handheld puzzle game during a break.",
    sections: [
      {
        title: "The break keeps the hands occupied",
        paragraphs: [
          "After selecting and retouching photographs, Jo opens a puzzle game on a phone. The work deadline disappears from view, but the hands keep gripping a device and tapping repeatedly. The game can feel like a mental change without providing the physical pause Jo intended for the hands. Breaks are not one interchangeable category. Their usefulness depends partly on which demand continues and which demand is actually removed.",
          "The same distinction applies when a video plays while someone continues holding a phone tightly.",
        ],
      },
      {
        title: "Remove the repeated action",
        paragraphs: [
          "OSHA's work-process guidance treats repetition and prolonged activity as concerns even when equipment is arranged well. Repeated clicking involves repeated small actions; holding a device also asks the hand to maintain a grip. Switching the entertainment does not automatically stop either. Putting the device on a stable surface removes the need to support it, while leaving the controls alone interrupts repeated input. A forceful stretch is not required to make that distinction or prove a break has happened.",
        ],
      },
      {
        title: "Make the alternative genuinely hands-free",
        paragraphs: [
          "Jo saves the edit, puts both devices down, and listens to a familiar audio programme through an already positioned speaker. The hands can rest comfortably instead of holding the phone for the whole interval. If choosing the programme leads to another long search, Jo can stop with something already available or choose quiet instead. The observable result is fewer ongoing hand actions during the pause, not a claim that a particular sound restores the body. Another break might address viewing distance or position, but those are separate checks.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Different content or different hand demand?",
      alt: "Mouse work followed by a handheld game keeps gripping and input; devices set down with audio allow the hands to rest.",
      caption: "Compare the actions of the hands. A mental change of subject and a pause from gripping can occur separately.",
      items: [
        { label: "Handheld puzzle", detail: "New content, but continued holding and tapping." },
        { label: "Devices down, audio on", detail: "No device support or repeated input is needed." },
      ],
    }],
    practice: {
      minutes: 3,
      needs: ["A stable place to put devices", "A saved stopping point"],
      steps: [
        "Name the repeated hand action in your current task, such as clicking or gripping.",
        "Save the task and put handheld equipment on a stable surface.",
        "Choose a pause that does not require those same actions; quiet is an available option.",
        "Notice whether the hands are actually free of device support and repeated input.",
      ],
      notice: "The named hand demand stops rather than continuing through a different app.",
      troubleshooting: "If setting up entertainment creates more tapping, use an already available option or leave the device alone.",
    },
    recall: {
      prompt: "After extensive typing, someone watches a video while holding a tablet. Which hand demand may still remain?",
      hint: "No tapping does not necessarily mean no holding.",
      answer: "Supporting and gripping the tablet can remain even without typing. A stable supported device or a non-device pause can remove that demand without requiring a forceful hand exercise.",
    },
    quiz: {
      question: "Which check shows whether a pause actually interrupts repeated device use by the hands?",
      options: ["Whether the next app is entertaining rather than work.", "Whether gripping and repeated input have stopped.", "Whether a touchscreen replaces the previous mouse and keyboard."],
      correctIndex: 1,
      explanation: "The physical actions identify the demand. Entertaining content and a change of input technology do not establish that holding and repeated operation have stopped.",
    },
    takeaway: "Match the pause to the repeated action, not just to a different activity label.",
    sourceNote: "OSHA work-process and pointer references address repetition and sustained activity. This original pause does not prescribe stretches or treat hand symptoms.",
  },
  {
    id: 'wellbeing-024',
    outcome: "Keep support and reach usable while changing position instead of holding a diagrammed pose indefinitely.",
    scene: "A proofreader treats a newly adjusted library chair as a position that must remain unchanged.",
    sections: [
      {
        title: "A good setup becomes a frozen rule",
        paragraphs: [
          "After adjusting a library chair, Cam tries to maintain exactly the same upright position through a long proofreading session. Moving feels like undoing the setup. Yet the purpose of the adjustment was to make the task usable, not to turn a comfortable starting position into a test of stillness. A photograph of a workstation captures one moment. It cannot show the variety of supported positions a person might use during an afternoon.",
        ],
      },
      {
        title: "Support and variation belong together",
        paragraphs: [
          "OSHA's position guidance explicitly includes changing position even when the starting arrangement is good. Small changes alter how the same task is being supported instead of keeping every contact and demand unchanged. This does not mean every possible position is equally useful for typing or reading. A change should preserve comfortable viewing and reach. Standing motionless for the whole session would still replace one fixed arrangement with another, not automatically provide the variation the original instruction was about.",
        ],
      },
      {
        title: "Recheck the task after the change",
        paragraphs: [
          "Cam uses the chair's normal backrest adjustment to find another comfortable supported position. The page and input devices are checked again because leaning back can increase the reach to the desk. If the hands now stretch forward, Cam adjusts the task position or chooses a different supported arrangement rather than holding the new posture at any cost. A suitable seated shift may be enough for this example; standing is not a requirement. The visible result is a usable second position, not a larger collection of posture rules.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "A position change affects reach",
      alt: "A side-view relationship sketch links the user with an adjustable backrest, a viewing screen, and a lower input surface.",
      caption: "Recheck all relationships after a chair change. The sketch does not prescribe a backrest angle or imply that one pose should be held continuously.",
      items: [
        { label: "Backrest adjustment", detail: "Use normal controls for a supported variation.", x: 15, y: 22, shape: 'box' },
        { label: "User", detail: "Choose a comfortable position, not maximum movement.", x: 35, y: 58, shape: 'person' },
        { label: "Viewing task", detail: "Remain readable without leaning to compensate.", x: 80, y: 18, shape: 'screen' },
        { label: "Input surface", detail: "Recheck the reach after changing the chair.", x: 78, y: 82, shape: 'box' },
      ],
      arrows: [{ from: 0, to: 1, label: "support" }, { from: 1, to: 3, label: "recheck reach" }],
    }],
    practice: {
      minutes: 4,
      needs: ["Your usual chair", "A familiar reading or typing task"],
      steps: [
        "Notice whether you have been trying to hold one working position without changing it.",
        "Try a small comfortable supported shift or an available chair adjustment using normal controls.",
        "Recheck the task's viewing position and the reach to any input devices.",
        "Keep only a variation that remains usable; return to the prior setting if it does not.",
      ],
      notice: "There is more than one comfortable usable arrangement, without losing support or creating a new reach.",
      troubleshooting: "If the change makes the task awkward, reduce it or reposition the task. Do not force an unfamiliar posture.",
    },
    recall: {
      prompt: "A person replaces all seated work with motionless standing. Which part of the position guidance have they not necessarily followed?",
      hint: "A different fixed position is still fixed.",
      answer: "They have not necessarily introduced variation. The guidance includes suitable changes of position, with support and task access checked, rather than declaring one posture correct for the entire day.",
    },
    quiz: {
      question: "Leaning back feels comfortable, but the keyboard now requires a long reach. What should happen next?",
      options: ["Keep the new position because it differs from the old one.", "Return to the previous setting and conclude all chair changes are unsuitable.", "Recheck input placement or choose another supported variation."],
      correctIndex: 2,
      explanation: "Variation should remain usable for the task. The need for change does not cancel comfortable reach, and one unsuccessful change does not forbid all variation.",
    },
    takeaway: "Change position while keeping the task usable; support is not a command to remain still.",
    sourceNote: "OSHA's publicly checked position guidance includes supported variation. This original exercise is not a posture prescription, a diagnosis, or a requirement to stand.",
  },
  {
    id: 'wellbeing-025',
    outcome: "Build a shared stopping point that permits individual breaks without making participation conditional on waiting.",
    scene: "Friends plan a documentary double bill with automatic playback and an uncertain gap between films.",
    sections: [
      {
        title: "The next film starts before anyone asks",
        paragraphs: [
          "Three friends arrange a documentary double bill. Automatic playback starts the second film as soon as the credits finish. One person wants water, another wants a position change, and a third assumes everyone is ready because nobody interrupted. The room's furniture is not the only part of the setup. The activity's structure makes stopping awkward by treating silence as agreement to continue. A shared break needs an actual place in the plan.",
        ],
      },
      {
        title: "An available pause is a process choice",
        paragraphs: [
          "OSHA's work-process guidance considers prolonged activity as well as equipment. Applying that principle to recreation means examining what keeps a session continuous. A natural boundary, such as the end of a film, makes a pause easier to coordinate. It is not a deadline that everyone must endure. People can need different breaks or prefer not to explain their reasons. A usable agreement reduces the social cost of stepping away rather than turning the break schedule into another rule that prevents it.",
        ],
      },
      {
        title: "Agree how restarting works",
        paragraphs: [
          "Before starting, the friends agree to stop between films and check readiness before beginning the next one. They also agree that anyone can step away sooner. Turning off autoplay makes the agreement visible in the equipment. The pause can serve water, comfortable movement, a viewing change, or quiet rest; nobody has to perform the same activity. For a live event that cannot pause, the group can instead make leaving and returning easy. The objective is permission and opportunity, not a scientifically optimal entertainment timetable.",
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: "Agree on stopping and restarting",
      alt: "Three friends agree to pause between films, allow earlier breaks, and check readiness before restarting.",
      caption: "This original exchange demonstrates the agreement itself. The film boundary is a convenient example, not a required waiting period.",
      items: [
        { label: "Alex", detail: "Can we pause between films and switch off autoplay?" },
        { label: "Rae", detail: "Yes. I may step away earlier, too." },
        { label: "Mo", detail: "Of course. We'll check before starting the next film." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A shared activity in mind", "Paper or a draft message"],
      steps: [
        "Choose an upcoming shared activity that can continue for a long stretch.",
        "Identify a natural pause and any autoplay or queue setting under your control.",
        "Draft an agreement allowing earlier individual breaks without requiring a reason.",
        "Include how the group will check before restarting; discuss the draft rather than assume consent.",
      ],
      notice: "The plan names a pause, permission to leave sooner, and a clear way to restart.",
      troubleshooting: "If the activity cannot stop, arrange an easy exit and return instead of demanding synchronized participation.",
    },
    recall: {
      prompt: "A multiplayer group agrees to pause after a round, but someone needs to leave before it ends. What should the agreement permit?",
      hint: "A planned boundary is an opportunity, not a minimum endurance requirement.",
      answer: "Allow the earlier break. The group can discuss how the game handles departures, but the shared schedule should not require someone to postpone a needed pause.",
    },
    quiz: {
      question: "Which arrangement makes a long shared viewing session easier to interrupt?",
      options: ["A planned gap, earlier individual breaks, and a restart check.", "A gap only if everyone requests it simultaneously.", "Autoplay with an assumption that silence means readiness."],
      correctIndex: 0,
      explanation: "The first arrangement makes stopping and restarting explicit. Unanimous requests or silent assumptions can conceal individual needs and keep the session continuous.",
    },
    takeaway: "Agree where to pause without requiring anyone to wait for that point.",
    sourceNote: "This is an original recreational application of OSHA work-process principles. The conversation and film schedule are not experimentally tested break protocols.",
  },
  {
    id: 'wellbeing-026',
    outcome: "Read a mixed meal by its ingredients and consider variety across meals rather than copying a plate diagram.",
    scene: "A shared kitchen serves a layered rice bowl with chickpeas, spinach, and plain yogurt.",
    sections: [
      {
        title: "The bowl does not look like the guide",
        paragraphs: [
          "At a shared dinner, a bowl contains rice, chickpeas, spinach, and plain yogurt spooned on top. The ingredients touch and overlap. Looking for neatly separated food-group sections would make the bowl appear to fail a diagram even though several groups are present. The NHS Eatwell Guide describes an overall eating pattern, not a requirement to arrange every meal into visible sectors. A curry, sandwich, or bowl can combine ingredients that serve different roles.",
        ],
      },
      {
        title: "Look inside the combined dish",
        paragraphs: [
          "Rice supplies a starchy component, chickpeas are a protein food that also supplies fibre, spinach contributes vegetables, and yogurt is a dairy food. These descriptions help identify variety without pretending an ingredient belongs to only one nutrient category. No single group supplies everything in an ordinary eating pattern. Equally, naming four groups does not establish the right amounts for a particular person. The useful question is what ingredients are present and what the wider pattern includes, not whether the meal resembles a picture.",
        ],
      },
      {
        title: "Use the next meal as another opportunity",
        paragraphs: [
          "The cook reviews the rest of the day and notices that lunch was mostly a plain roll. The evening bowl adds ingredients that were absent there. If yogurt is unsuitable, an appropriate alternative can be considered on its actual contents rather than assuming every substitute is nutritionally identical. There is no need to skip another meal to compensate for lunch or force every group into every snack. Looking across a day or week makes the guide useful in a household with shared dishes, changing schedules, and ordinary preferences.",
        ],
      },
    ],
    visuals: [{
      type: 'layers',
      title: "Read the ingredients in the bowl",
      alt: "Rice at the base, chickpeas, spinach, and a yogurt topping form one mixed bowl containing several food groups.",
      caption: "The layers follow this example's assembly order, not recommended proportions. The same ingredients could be mixed together and still contribute their food groups.",
      items: [
        { label: "Rice base", detail: "A starchy component." },
        { label: "Chickpeas", detail: "A protein food that also provides fibre." },
        { label: "Spinach", detail: "A vegetable ingredient." },
        { label: "Yogurt topping", detail: "A dairy ingredient, where suitable." },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ["A familiar mixed meal", "Paper or a private note"],
      steps: [
        "Choose a mixed meal you know and list its main ingredients without weighing them.",
        "Connect the ingredients to food groups using the linked Eatwell Guide.",
        "Consider other meals in the day or week before deciding what is missing.",
        "Name one feasible opportunity for variety that respects food access, preferences, and dietary requirements.",
      ],
      notice: "The meal becomes understandable by ingredients rather than by how neatly its components are separated.",
      troubleshooting: "If ingredients are uncertain, mark them unknown. Do not infer nutritional completeness from a dish name alone.",
    },
    recall: {
      prompt: "A vegetable and bean sandwich does not resemble the Eatwell picture. How can it still be assessed usefully?",
      hint: "Unpack ingredients before judging the plate's appearance.",
      answer: "Identify the bread, beans, and vegetables, then consider the wider pattern of meals. Mixed presentation does not remove food groups, and one sandwich need not reproduce the whole guide.",
    },
    quiz: {
      question: "Which review best fits a rice, chickpea, spinach, and yogurt bowl?",
      options: ["Judge only whether four equal sectors are visible.", "Identify ingredients and consider their place across meals.", "Assume four named groups prove every personal requirement is met."],
      correctIndex: 1,
      explanation: "The guide concerns an overall pattern, including mixed dishes. Presentation does not establish balance, and group names alone do not determine individual amounts.",
    },
    takeaway: "Assess the ingredients and the wider eating pattern, not the geometry of one plate.",
    sourceNote: "The NHS Eatwell page was checked for mixed dishes and balance across a day or week. This original bowl is not an individualized meal prescription.",
  },
  {
    id: 'wellbeing-027',
    outcome: "Compare a higher-fibre starchy option on a common label basis while keeping taste, cost, and suitability in view.",
    scene: "A shopper compares dry pasta labels for a familiar tomato-and-pea dinner.",
    sections: [
      {
        title: "Keep the meal, compare the staple",
        paragraphs: [
          "A shopper plans a familiar pasta dinner with tomatoes and peas. Two available packets differ mainly in the pasta: one standard and one wholewheat. Choosing between them does not require removing pasta from the meal. NHS guidance includes starchy foods as ordinary sources of energy and nutrients and suggests higher-fibre versions where suitable. The decision can be a small substitution within a familiar meal rather than a complete change of eating style.",
        ],
      },
      {
        title: "What higher fibre describes",
        paragraphs: [
          "Fibre is a component of plant foods that is not fully broken down by the body's digestive enzymes. Wholegrain versions retain more of the grain's outer parts and generally provide more fibre than their refined counterparts. A label can make the difference concrete for the products in hand. Compare the same quantity and preparation state: dry pasta figures and cooked pasta figures use different bases because cooking adds water. A front-of-pack word such as rustic does not establish the fibre amount.",
        ],
      },
      {
        title: "Read the example without turning it into a rule",
        paragraphs: [
          "The fictional standard packet lists 3 grams of fibre per 100 grams dry; the fictional wholewheat packet lists 8 grams on the same basis. The latter has 5 grams more per 100 grams dry in this comparison. Those numbers illustrate label reading, not universal pasta values or a recommended serving. Cost, cooking instructions, texture, and individual requirements still affect the choice. If the standard version is the workable option, tomatoes, peas, and other foods can contribute to variety without treating the dinner as a failure.",
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: "Compare fibre on the same dry basis",
      alt: "Fictional standard pasta has 3 grams of fibre per 100 grams dry, and wholewheat has 8, a difference of 5 grams.",
      caption: "Values are invented for this worked comparison, not typical product values or portions. Both bars use the same dry-food quantity.",
      unit: "g fibre per 100 g dry pasta",
      items: [
        { label: "Standard example", detail: "3 g fibre per 100 g dry.", value: 3 },
        { label: "Wholewheat example", detail: "8 g fibre per 100 g dry.", value: 8 },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["Two comparable starchy-food labels or the examples above", "Paper"],
      steps: [
        "Choose similar products and find the fibre figure on each nutrition panel.",
        "Check that quantity, units, and dry or prepared basis match before comparing.",
        "Write the difference, or mark the comparison incomplete if a matching basis is unavailable.",
        "Add one practical consideration such as cost, texture, or dietary suitability beside the result.",
      ],
      notice: "You have a specific fibre comparison without judging the entire meal from one packet.",
      troubleshooting: "If one label is cooked and the other dry, do not compare the numbers directly; find a common basis.",
    },
    recall: {
      prompt: "A brown-looking loaf says rustic, but no fibre figure has been checked. What would support a higher-fibre comparison?",
      hint: "Appearance is not a nutrient quantity.",
      answer: "Read the fibre information for comparable quantities and inspect the product description. Colour and rustic branding alone do not establish how it compares with another loaf.",
    },
    quiz: {
      question: "What do the fictional pasta labels establish?",
      options: ["The same numbers apply to 100 grams after cooking.", "The wholewheat option supplies more fibre regardless of the quantities compared.", "The wholewheat example has more fibre on the stated equal dry basis."],
      correctIndex: 2,
      explanation: "Only equal dry quantities were compared. Cooking adds water, and comparing different portion quantities can change the total fibre comparison.",
    },
    takeaway: "Compare higher-fibre options fairly without excluding starchy foods or ignoring practical fit.",
    sourceNote: "Inherited NHS starch and Eatwell references support higher-fibre options. Label values are explicitly invented; this is not an individual fibre target or dietary treatment.",
  },
  {
    id: 'wellbeing-028',
    outcome: "Choose usable fresh, frozen, or canned produce by contents, storage, and preparation rather than a freshness hierarchy.",
    scene: "An irregular work schedule makes a bag of fresh spinach harder to use than frozen peas and tinned tomatoes.",
    sections: [
      {
        title: "Buying fresh is not the same as using it",
        paragraphs: [
          "A shift worker buys fresh spinach with good intentions, then two late changes to the week leave it unused. Frozen peas and a tin of tomatoes already in the kitchen would fit a quick familiar meal more reliably. The relevant comparison is not a photograph of ideal shopping. It is which produce is available, suitable, and likely to be used safely under the person's actual schedule. The NHS Eatwell Guide includes fresh, frozen, and tinned forms.",
        ],
      },
      {
        title: "The form changes handling, not whether it is produce",
        paragraphs: [
          "Freezing and canning provide different ways to store food for later use. They do not make the vegetable stop being a vegetable. However, the full product can include other ingredients: peas in a sauce differ from plain frozen peas, and fruit in syrup differs from fruit in juice. Preparation matters too. Frozen does not automatically mean ready to eat, while an opened can needs the storage instructions appropriate to its contents. Product information is more useful than a blanket claim about the whole category.",
        ],
      },
      {
        title: "Match the pack to a real meal",
        paragraphs: [
          "For the next evening, the worker chooses peas whose cooking instructions fit the planned dish and tomatoes whose label lists the desired ingredients. Fresh carrots remain another usable option because there is a clear plan for them. The choice is not that frozen always wins. It is that storage, preparation effort, and likelihood of use belong alongside preference and cost. A produce item with a respected label is not useful if there is no safe storage space or practical way to prepare it when needed.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Compare usable forms of produce",
      alt: "Fresh carrots, frozen peas, plain tinned tomatoes, and fruit in syrup require different checks for use and preparation.",
      caption: "The cards compare product details, not nutritional rankings. Read each actual label; ingredients and preparation vary within every category.",
      items: [
        { label: "Fresh carrots", detail: "Need suitable storage and a plan to use them." },
        { label: "Frozen peas", detail: "Check cooking instructions and freezer space." },
        { label: "Tinned tomatoes", detail: "Check ingredients and storage after opening." },
        { label: "Fruit in syrup", detail: "The syrup is part of this product's contents." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A produce pack or label", "A familiar meal in mind"],
      steps: [
        "Choose one available fresh, frozen, or canned item that could fit a familiar meal.",
        "Read its ingredients to distinguish the produce from any sauce, syrup, or added seasoning.",
        "Check storage and preparation instructions, including what happens after opening if relevant.",
        "Write a feasible use for the item, or identify the missing storage or preparation requirement.",
      ],
      notice: "The choice has a practical route from storage to meal rather than relying on the word fresh.",
      troubleshooting: "If instructions or safe storage are unavailable, choose another option rather than assuming all products can be handled alike.",
    },
    recall: {
      prompt: "Two tins both contain peaches, but one uses juice and the other syrup. What should not be assumed?",
      hint: "The fruit name is not the complete ingredient list.",
      answer: "Do not assume identical contents just because both are canned peaches. Compare the surrounding liquid, relevant label information, and handling instructions for the actual products.",
    },
    quiz: {
      question: "A schedule makes fresh produce difficult to use before it spoils. Which comparison is most useful?",
      options: ["Available forms, actual contents, and feasible storage and preparation.", "Freshness at purchase without considering when the food will be used.", "Treating all canned and frozen versions as equivalent without reading labels."],
      correctIndex: 0,
      explanation: "A usable food choice includes handling and contents. Category labels and package images do not establish preparation or whether the item fits the schedule.",
    },
    takeaway: "Choose produce you can actually store, prepare, and use; fresh is not the only valid form.",
    sourceNote: "The checked NHS Eatwell page includes varied produce forms; inherited label guidance supports product checks. This original pantry example is not a food-storage protocol.",
  },
  {
    id: 'wellbeing-029',
    outcome: "Recognize pulses as protein foods while distinguishing ready-cooked and dried forms before planning a meal.",
    scene: "A packed-lunch plan compares a tin of cooked chickpeas with dried chickpeas in the cupboard.",
    sections: [
      {
        title: "The protein component is already in the cupboard",
        paragraphs: [
          "For a packed lunch, Amina plans a wrap with vegetables and looks for a protein ingredient. A tin of cooked chickpeas is available, but she initially treats it as only a side dish. Beans, peas, and lentils are pulses, and NHS guidance includes them among protein foods. A chickpea filling or lentil dish can therefore contribute a protein component without meat. The meal's familiar format does not determine which foods are allowed to do that job.",
        ],
      },
      {
        title: "One ingredient can contribute more than one thing",
        paragraphs: [
          "Pulses provide protein and fibre, so a single food can contribute in several ways. Food-group names are useful for planning variety, not exclusive labels for one nutrient. Calling chickpeas a protein food does not mean they supply everything a person needs or that other components become unnecessary. A wrap still includes its starchy base and vegetables, with other foods contributing across the day. Preference, access, and individual dietary requirements affect whether this is a suitable example to use.",
        ],
      },
      {
        title: "Cooked and dried are different starting points",
        paragraphs: [
          "Amina also finds dried chickpeas. They are the same kind of pulse but not the same state of preparation. The cooked tin's label may permit use after the specified handling, while the dried product requires its stated preparation and cooking before eating. Those instructions cannot be swapped because the names match. For this lunch, Amina chooses the form whose actual instructions fit the available time, then plans suitable storage for the finished food. The lesson is ingredient recognition plus preparation awareness, not a shortcut recipe for every bean.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Same pulse, different preparation state",
      alt: "Cooked canned chickpeas and dried chickpeas can both contribute protein and fibre but have different preparation requirements.",
      caption: "Compare the starting form before planning the wrap. This illustration does not replace either product's cooking or storage instructions.",
      items: [
        { label: "Cooked canned chickpeas", detail: "Follow this label's handling and storage instructions." },
        { label: "Dried chickpeas", detail: "Require the stated preparation and cooking before eating." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A pulse product label", "A familiar meal idea", "Paper"],
      steps: [
        "Choose a bean, pea, or lentil product and identify whether it is dried or already cooked.",
        "Read the preparation instructions rather than borrowing directions from another form of the food.",
        "Name the protein component it could provide in a familiar meal with other ingredients.",
        "Record required preparation and storage, or choose another plan if those requirements cannot be met.",
      ],
      notice: "Your meal idea names both the ingredient's role and the preparation still needed.",
      troubleshooting: "If the label is missing or unclear, do not improvise cooking requirements from the food's name alone.",
    },
    recall: {
      prompt: "A lentil dish is described as having no protein because it contains no meat. What distinction corrects that claim?",
      hint: "Protein foods are not restricted to animal foods.",
      answer: "Lentils are pulses and provide protein as well as fibre. That corrects the ingredient claim without establishing a complete meal or an individual's required quantity.",
    },
    quiz: {
      question: "A quick wrap uses cooked chickpeas, but only dried ones are available. Which check establishes what must happen before they can be used?",
      options: ["Whether the packet identifies chickpeas as a protein food.", "The preparation and cooking required for this form.", "Whether the dried and canned versions have a similar flavour."],
      correctIndex: 1,
      explanation: "The form changes the preparation needed, not whether the food is a pulse. Follow the actual product instructions instead of treating matching names as matching readiness.",
    },
    takeaway: "Pulses can supply protein and fibre; their form determines what preparation remains.",
    sourceNote: "The checked NHS Eatwell reference includes pulses as protein foods. This original comparison provides no cooking shortcut, nutrient target, or individualized meal prescription.",
  },
  {
    id: 'wellbeing-030',
    outcome: "Compare cooking-fat types without assuming plant origin, premium branding, or one substitution settles the whole meal.",
    scene: "A home cook compares rapeseed oil and coconut oil before preparing a familiar vegetable dish.",
    sections: [
      {
        title: "Both bottles come from plants",
        paragraphs: [
          "A cook finds rapeseed oil and coconut oil in the cupboard. Both come from plants, but that shared origin does not make their fat composition identical. A prominent natural label on one bottle does not answer the question either. NHS Eatwell guidance recommends choosing unsaturated oils and spreads in small amounts. The useful comparison is the kind of fat in the actual product and whether it suits the cooking task, not the confidence of the front label.",
        ],
      },
      {
        title: "Fat type is not a plant-versus-animal shortcut",
        paragraphs: [
          "Saturated and unsaturated describe different fat structures. Foods usually contain a mixture rather than only one type. Rapeseed, olive, and sunflower oils are examples of unsaturated choices in the guidance; coconut oil contains a high proportion of saturated fat despite being plant-derived. That distinction explains why checking composition is more informative than sorting bottles by origin. A preferred type still does not mean an unlimited amount, and avoiding every trace of fat is not the pattern described by the Eatwell Guide.",
        ],
      },
      {
        title: "Keep the recipe and the whole meal in view",
        paragraphs: [
          "For the familiar vegetable dish, the cook checks that the available rapeseed oil is suitable for the recipe and follows the recipe's modest amount rather than adding extra because the oil has a favourable label. The comparison does not require buying a premium bottle. Vegetables, a starchy component, and a suitable protein food remain separate meal decisions. Changing the oil cannot provide those missing ingredients. The practical output is a more informed choice among available cooking fats, not a verdict that one bottle makes every dish nutritionally complete.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Plant origin does not settle fat type",
      alt: "Rapeseed oil illustrates an unsaturated choice; coconut oil illustrates a plant-derived fat with a high saturated proportion.",
      caption: "These qualitative examples compare composition, not brands or cooking temperatures. Check the actual product and the recipe; neither card specifies an individual amount.",
      items: [
        { label: "Rapeseed oil", detail: "An unsaturated option named in NHS guidance." },
        { label: "Coconut oil", detail: "Plant-derived, but high in saturated fat." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A cooking-fat label", "A familiar recipe"],
      steps: [
        "Read the product name and ingredients rather than relying on a natural or premium claim.",
        "Identify whether it is an unsaturated option using the linked food guidance where needed.",
        "Check that the product and the recipe's amount fit the intended cooking task.",
        "Write what this choice changes and name another meal component it does not replace.",
      ],
      notice: "Your reasoning identifies fat type and use instead of treating origin or branding as the complete answer.",
      troubleshooting: "If a blend is unclear, keep the uncertainty and consult its composition information rather than inferring from the bottle colour.",
    },
    recall: {
      prompt: "A spread says plant-based, so someone assumes its fat composition must match olive oil. What should they inspect?",
      hint: "Origin and composition are different information.",
      answer: "Check the ingredients and relevant nutrition information. Plant origin alone does not establish the balance of saturated and unsaturated fats or whether the spread suits the planned use.",
    },
    quiz: {
      question: "Which reasoning best fits choosing a cooking fat for an ordinary meal?",
      options: ["Choose by plant origin without checking the type of fat.", "Use a higher price as evidence of a preferable fat composition.", "Check fat type, suitability, and a modest recipe amount together."],
      correctIndex: 2,
      explanation: "The guidance distinguishes type and amount. Shared origin and marketing do not establish composition, and one cooking ingredient does not describe the whole meal.",
    },
    takeaway: "Check the fat's composition and use without asking one oil to stand in for a varied meal.",
    sourceNote: "The checked NHS Eatwell page recommends small amounts of unsaturated oils. The original cupboard comparison is general education, not a personal nutrition prescription.",
  },
  {
    id: 'wellbeing-031',
    outcome: "Put nutrient figures on a common quantity before comparing similar products.",
    scene: "Two soup labels use different serving sizes, reversing the impression created by their salt-per-serving numbers.",
    sections: [
      {
        title: "The smaller number describes a smaller serving",
        paragraphs: [
          "Two fictional soups sit beside each other. Soup A lists 0.6 grams of salt per 150 gram serving. Soup B lists 0.8 grams per 250 gram serving. Comparing only 0.6 with 0.8 makes A look lower in salt, but the quantities of soup differ. The labels answer questions about two different portions. To compare the products themselves, first ask what each would contain in the same weight of soup.",
        ],
      },
      {
        title: "Use one common basis",
        paragraphs: [
          "UK nutrition panels usually provide values per 100 grams or 100 millilitres, as explained by the NHS. A common basis removes the serving-size difference from the comparison. When calculating from a serving, divide the nutrient amount by the serving quantity, then multiply by 100. Keep weight and volume distinct: grams and millilitres are not automatically interchangeable for every food. Also check whether both figures describe the soup as sold or after preparation; adding water changes the comparison basis. The arithmetic is about concentration in a specified quantity, not a personalized amount someone should eat.",
        ],
      },
      {
        title: "Calculate, then return to the intended portion",
        paragraphs: [
          "For Soup A, 0.6 divided by 150 and multiplied by 100 gives 0.4 grams of salt per 100 grams. For Soup B, 0.8 divided by 250 and multiplied by 100 gives 0.32 grams. B is lower on that common basis, even though its printed serving number was larger. The amount in an actual bowl still depends on how much soup is served. Comparing one nutrient also does not describe price, preference, or the whole meal. Keep the conclusion as narrow as the calculation supports.",
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: "Equal soup quantities change the comparison",
      alt: "On a common 100 gram basis, fictional Soup A contains 0.4 grams of salt and Soup B contains 0.32 grams.",
      caption: "Values are calculated from the fictional serving labels in the text. Both bars describe 100 grams of soup, not the original unequal servings.",
      unit: "g salt per 100 g soup",
      items: [
        { label: "Soup A", detail: "0.6 g per 150 g becomes 0.4 g per 100 g.", value: 0.4 },
        { label: "Soup B", detail: "0.8 g per 250 g becomes 0.32 g per 100 g.", value: 0.32 },
      ],
    }],
    practice: {
      minutes: 6,
      needs: ["Two comparable labels or the soup examples", "A calculator", "Paper"],
      steps: [
        "Choose one nutrient and write each label's amount together with its serving quantity and units.",
        "Find matching per-100 figures, or divide by the serving quantity and multiply by 100.",
        "Compare only when both figures refer to the same nutrient, units, and food basis.",
        "Write the narrow conclusion and note that an actual portion can change the amount consumed.",
      ],
      notice: "The comparison separates product concentration from the manufacturer's chosen serving size.",
      troubleshooting: "If one label uses weight and the other volume, find a matching basis instead of assuming they are equal.",
    },
    recall: {
      prompt: "Fictional yogurts list 4 grams of protein per 125 grams and 5 grams per 200 grams. Which has more per 100 grams?",
      hint: "Divide by the portion weight, then multiply by 100.",
      answer: "The first has 3.2 grams per 100 grams; the second has 2.5. The larger printed serving value does not establish a higher concentration when serving sizes differ.",
    },
    quiz: {
      question: "Two drinks list sugar per 150 millilitres and per 250 millilitres. Which comparison separates product differences from serving size?",
      options: ["Compare the two per-serving numbers as printed.", "Compare sugar for the same volume of each drink.", "Compare the total sugar in differently sized full bottles."],
      correctIndex: 1,
      explanation: "Equal volume supplies a common basis. Serving or bottle comparisons also reflect different quantities, which is a different question.",
    },
    takeaway: "Align nutrient, quantity, units, and preparation basis before comparing label numbers.",
    sourceNote: "Inherited NHS label guidance explains common comparison quantities. All soup and yogurt figures are invented; calculations describe labels, not personal nutrient targets.",
  },
  {
    id: 'wellbeing-032',
    outcome: "Scale a label from its stated serving to another quantity without treating the serving as a personal instruction.",
    scene: "A roasted-corn packet contains three labelled servings, but its front panel shows only one serving's salt.",
    sections: [
      {
        title: "The front number is not always the pack number",
        paragraphs: [
          "A fictional roasted-corn packet weighs 90 grams. Its nutrition information gives 0.2 grams of salt for a 30 gram serving. Someone reading only the prominent front number might assume the whole bag contains 0.2 grams. The problem is not a judgement about whether the snack should be eaten. It is a mismatch between the quantity being imagined and the quantity the printed number actually describes.",
          "The words per serving are part of the information, not small print that can be discarded.",
        ],
      },
      {
        title: "A serving is a reference quantity",
        paragraphs: [
          "The manufacturer's serving supplies a basis for the nutrient figures. It may or may not match what someone chooses to eat, shares with another person, or leaves in the packet. NHS label guidance notes that portion assumptions can differ. To scale the figures, first find how many labelled servings are in the quantity being considered. Divide that quantity by the labelled serving size. The resulting multiplier applies to the nutrient amount; it does not turn the serving into a personalized eating rule.",
        ],
      },
      {
        title: "Scale the example carefully",
        paragraphs: [
          "The 90 gram packet contains three 30 gram servings. One serving has 0.2 grams of salt, two have 0.4, and the full packet has 0.6 in this invented example. If a real label uses rounded figures, the calculated result is correspondingly approximate. A shared bowl requires knowing how much was actually included before claiming a total. The lesson's output is an accurate statement about a quantity, not a decision that one serving is always right or that finishing a packet proves anything about a person.",
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: "Scale the amount the label describes",
      alt: "Fictional salt amounts rise from 0.2 grams for one serving to 0.4 for two and 0.6 for the three-serving packet.",
      caption: "Each bar uses the same example product. The serving and packet sizes are invented reference quantities, not instructions about how much to eat.",
      unit: "g salt",
      items: [
        { label: "30 g: one serving", detail: "The stated 0.2 g on the example label.", value: 0.2 },
        { label: "60 g: two servings", detail: "Two times 0.2 g equals 0.4 g.", value: 0.4 },
        { label: "90 g: whole packet", detail: "Three times 0.2 g equals 0.6 g.", value: 0.6 },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A packaged-food label or the example", "A calculator or paper"],
      steps: [
        "Find the net pack quantity and the quantity used for the nutrition figures.",
        "Divide the whole pack by the labelled serving size, keeping the units the same.",
        "Multiply one nutrient figure by that result to describe the whole pack.",
        "Write the quantity beside the answer and mark any rounding or missing information.",
      ],
      notice: "The label's serving and the whole pack are clearly distinguished in your calculation.",
      troubleshooting: "If the pack uses a different basis, such as drained weight, find the matching nutrition basis before calculating.",
    },
    recall: {
      prompt: "A fictional 600 millilitre drink lists nutrients per 200 millilitres. What multiplier describes the whole bottle?",
      hint: "Divide the bottle volume by the reference volume.",
      answer: "Three: 600 divided by 200. Multiply the per-serving nutrient figure by three for the whole bottle, without treating the reference serving as an individualized drinking instruction.",
    },
    quiz: {
      question: "Two people share a fictional 90 gram packet listing 0.2 grams of salt per 30 grams. What describes the whole packet?",
      options: ["0.6 grams, because it contains three labelled servings.", "0.2 grams, because that is the printed front figure.", "0.4 grams, because two people share the packet."],
      correctIndex: 0,
      explanation: "The packet contains three reference servings, so multiply by three. The number of people sharing it does not change the packet's total amount.",
    },
    takeaway: "A nutrient number needs its quantity; scale it before applying it to the whole pack.",
    sourceNote: "NHS label guidance distinguishes portions and stated quantities. All example numbers are fictional; this is arithmetic education, not a portion prescription or food judgement.",
  },
  {
    id: 'wellbeing-033',
    outcome: "Use an ingredient list for composition and a nutrition panel for quantities, without making one answer the other's question.",
    scene: "A cereal package lists sugar last but also contains raisins and gives a total-sugars figure.",
    sections: [
      {
        title: "One package contains two kinds of evidence",
        paragraphs: [
          "A fictional cereal lists oats, raisins, sunflower seeds, and sugar in that order. Its nutrition panel lists 18 grams of total sugars per 100 grams. A shopper sees sugar last and assumes the total-sugars figure must be small. The ingredient list and nutrition panel are not contradicting each other. They answer different questions: what ingredients went into the product, and how much of a nutrient is present in a stated quantity.",
        ],
      },
      {
        title: "Order describes ingredient weight, not nutrient rank",
        paragraphs: [
          "UK ingredient lists generally place ingredients in descending order by weight. Oats appearing first therefore tells us about their relative amount in the recipe, not that they provide the most of every nutrient. Nutrients can come from several ingredients. In this example, raisins contribute naturally occurring sugars as well as the sugar added as an ingredient. The last position of the ingredient called sugar cannot by itself calculate total sugars. Nor does a short ingredient list establish that a product meets a particular person's needs.",
        ],
      },
      {
        title: "Match the question to the panel",
        paragraphs: [
          "To find whether this cereal contains raisins, the shopper reads the ingredient list. To compare total sugars with a similar cereal, the shopper reads the nutrition figures on a common quantity basis. The fictional 18 gram value is supplied by the panel, not reconstructed from the ingredient order. A wholesome claim on the front settles neither question. Keeping the two uses separate prevents an attractive ingredient name from standing in for a nutrient comparison, while still using the list for the composition information it actually provides.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Ask each panel its own question",
      alt: "The fictional cereal's ingredient list names oats, raisins, seeds, and sugar; its nutrition panel states 18 grams total sugars per 100 grams.",
      caption: "The example value is invented. Ingredient order does not supply exact nutrient quantities, including sugars contributed by more than one ingredient.",
      items: [
        { label: "Ingredient list", detail: "Oats, raisins, sunflower seeds, sugar: composition in weight order." },
        { label: "Nutrition panel", detail: "18 g total sugars per 100 g: a quantity on a stated basis." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A packaged-food label or the cereal example", "Paper"],
      steps: [
        "Read the ingredient list and write one composition question it answers directly.",
        "Find one nutrient figure and copy both its amount and reference quantity.",
        "Explain why ingredient order alone cannot calculate that nutrient figure.",
        "Check a front-of-pack claim against the relevant panel rather than accepting the claim alone.",
      ],
      notice: "Your note keeps ingredient presence and nutrient quantity as different kinds of information.",
      troubleshooting: "If you start assigning exact percentages from order alone, stop: order usually gives rank, not the missing amounts.",
    },
    recall: {
      prompt: "A sauce lists tomatoes first. Does that tell you its exact salt content per 100 grams?",
      hint: "The leading ingredient and a nutrient quantity are different facts.",
      answer: "No. The ingredient order describes relative recipe weights. Read the salt figure on the nutrition panel for a specified quantity rather than inferring it from the first ingredient.",
    },
    quiz: {
      question: "A cereal lists sugar last and raisins earlier. Where should a shopper check total sugars for comparison?",
      options: ["Only the position of the ingredient called sugar.", "Only the number of ingredients listed before sugar.", "The total-sugars figure for the same quantity on the nutrition panel."],
      correctIndex: 2,
      explanation: "Total sugars can come from several ingredients. Ingredient rank cannot calculate the nutrient amount or supply a like-for-like comparison by itself.",
    },
    takeaway: "Ingredients explain composition; nutrient figures explain amounts on a stated basis.",
    sourceNote: "Inherited NHS food-label guidance informs this UK-label example. The cereal and nutrient value are invented; labelling rules and formats differ by jurisdiction.",
  },
  {
    id: 'wellbeing-034',
    outcome: "Check fortification and nutrient figures when a plant drink replaces milk instead of assuming shared use means shared composition.",
    scene: "Two unsweetened plant drinks both work in porridge but list different calcium and protein information.",
    sections: [
      {
        title: "Both cartons work in the saucepan",
        paragraphs: [
          "Two plant drinks can both moisten porridge and pour into coffee. That shared kitchen function does not make their nutrients identical. A shopper compares a soy drink and an oat drink, both labelled unsweetened. The unsweetened description answers one question about the products, but it does not state their protein content or whether calcium has been added. A familiar use and similar carton shape are not evidence that a substitution changes nothing nutritionally.",
        ],
      },
      {
        title: "Fortified means something was added",
        paragraphs: [
          "Fortification means adding a nutrient during production. NHS guidance includes unsweetened calcium-fortified alternatives to dairy. The word plant-based does not itself establish that fortification happened. Read the ingredient and nutrition information for the specific carton, then compare the same volume. Protein is a separate figure worth checking because plant drinks vary. This is an ordinary substitution question, not a requirement that every beverage supply every nutrient or that one plant ingredient is suitable for all people.",
        ],
      },
      {
        title: "Keep the comparison product-specific",
        paragraphs: [
          "In this fictional comparison, Drink A lists added calcium and provides 120 milligrams of calcium plus 3 grams of protein per 100 millilitres. Drink B is not calcium-fortified and lists 20 milligrams of calcium plus 1 gram of protein on the same basis. The figures describe these invented cartons, not all soy or oat drinks. The shopper can now explain what would change in the substitution while also considering taste, cost, dietary requirements, and the rest of the eating pattern. Pouring equally well does not settle those differences.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Similar uses, different label information",
      alt: "Fictional Drink A lists added calcium with 120 milligrams calcium and 3 grams protein; Drink B lists 20 milligrams and 1 gram per 100 millilitres.",
      caption: "Both cards use 100 millilitres. These invented figures demonstrate comparison, not typical values for all plant drinks or a personal intake target.",
      items: [
        { label: "Drink A: fortified soy", detail: "Per 100 ml: calcium 120 mg; protein 3 g; unsweetened." },
        { label: "Drink B: unfortified oat", detail: "Per 100 ml: calcium 20 mg; protein 1 g; unsweetened." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A milk or plant-drink label", "A comparison label or the examples"],
      steps: [
        "Read whether the plant drink states calcium fortification rather than inferring it from the category.",
        "Copy calcium and protein information with their units and reference volume.",
        "Compare the same volume on the second label, marking missing information as unknown.",
        "Write what the substitution changes and one practical consideration beyond nutrient figures.",
      ],
      notice: "The comparison identifies actual composition differences despite the drinks having the same kitchen use.",
      troubleshooting: "If calcium is not listed, do not treat the blank as proof of zero or fortification; seek product information.",
    },
    recall: {
      prompt: "A carton says barista and foams well. Does that establish that its calcium and protein match milk?",
      hint: "A performance claim in coffee is not a nutrient statement.",
      answer: "No. Read fortification and nutrient information for the actual product on a common volume basis. Foaming ability does not establish calcium or protein equivalence.",
    },
    quiz: {
      question: "Which check best supports understanding an ordinary milk-to-plant-drink substitution?",
      options: ["Whether both cartons advertise an unsweetened product.", "Actual fortification and nutrient figures on a matching volume basis.", "Whether both products can be used in porridge."],
      correctIndex: 1,
      explanation: "Matching use or an unsweetened claim does not establish calcium and protein content. Fortification and nutrition information describe those product-specific differences.",
    },
    takeaway: "Check the carton, not just the category, when understanding a dairy substitution.",
    sourceNote: "Inherited NHS dairy and label references support checking suitable fortified alternatives. All comparison figures are invented; this lesson does not determine individual nutrient requirements.",
  },
  {
    id: 'wellbeing-035',
    outcome: "Make drinking access practical without adopting someone else's fixed fluid quota.",
    scene: "A museum ticket-desk worker has water in a distant locker but no workable refill plan.",
    sections: [
      {
        title: "The bottle exists but is not available",
        paragraphs: [
          "At a museum ticket desk, Taylor brings water but leaves it in a distant locker. During a busy period, reaching it becomes difficult, so drinking keeps being postponed. A colleague recommends a bottle marked with a personal daily target. That changes the markings, not the access problem. The practical question is where a drink can be kept safely and when it can be refilled under the workplace's actual arrangements.",
        ],
      },
      {
        title: "A quota does not describe every circumstance",
        paragraphs: [
          "CDC guidance notes that water needs vary, including with activity and surroundings, and that food and other drinks can contribute fluid. A colleague's total is therefore not a personalized instruction. Plain drinking water is a straightforward available option, but it is not the only fluid source in an ordinary day. A bottle challenge can distract from useful questions such as access, heat, activity, and existing individual guidance. The objective here is making ordinary drinking possible, not forcing a large amount to complete a marked line.",
        ],
      },
      {
        title: "Solve the access route",
        paragraphs: [
          "Taylor checks the desk's rules and finds an allowed stable place for a lidded drink away from electrical equipment. A refill point is identified for the next available break, with an alternative if it is closed. The arrangement also keeps the drink within a usable reach rather than obstructing the keyboard or walkway. No volume is assigned by this exercise. If an individual already has specific fluid guidance, that remains the relevant instruction. The visible improvement is access and a refill plan, not an empty bottle used as a score.",
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: "Make the drink accessible",
      alt: "Check the permitted desk location, place a secure drink away from equipment, and identify a refill opportunity.",
      caption: "This flow follows Taylor's access problem. It provides no volume target and does not imply that finishing a bottle proves adequate hydration.",
      items: [
        { label: "Check the location", detail: "Use a permitted, stable, reachable place." },
        { label: "Keep the drink usable", detail: "Secure lid; no blocked input area or electrical spill risk." },
        { label: "Plan a refill", detail: "Know an available source and a practical opportunity." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["A suitable drink container", "An available drinking-water source"],
      steps: [
        "Identify where drinking gets postponed because a drink or refill point is hard to access.",
        "Choose a permitted reachable place that avoids spills, electrical equipment, and blocked routes.",
        "Locate a suitable refill source and a realistic opportunity to use it.",
        "Keep the plan about access, following any existing individual fluid guidance rather than adding a quota.",
      ],
      notice: "The drink and refill route are usable without a new bottle-emptying target.",
      troubleshooting: "If the workplace restricts drinks nearby, arrange access during available breaks instead of ignoring the safety rule.",
    },
    recall: {
      prompt: "A long train journey has no reliable refill point. Does copying a friend's marked bottle solve the planning problem?",
      hint: "The missing information concerns access during this journey.",
      answer: "No. Plan suitable drinking access and availability for the journey while respecting individual needs. The markings neither supply a refill source nor establish a personal fluid requirement.",
    },
    quiz: {
      question: "Which conclusion fits the ticket-desk example?",
      options: ["A colleague's bottle target should become the worker's requirement.", "Only plain water can contribute any fluid.", "Usable access matters, while needs and fluid sources vary."],
      correctIndex: 2,
      explanation: "The guidance recognizes variation and multiple fluid sources. The example changes availability, not an individual's required amount.",
    },
    takeaway: "Make fluids accessible without turning a shared bottle target into a personal rule.",
    sourceNote: "Inherited CDC and NHS references describe fluid sources and varying needs. This original access exercise sets no intake quota and does not replace individual guidance.",
  },
  {
    id: 'wellbeing-036',
    outcome: "See recovery as planned space between demands rather than an empty slot automatically available for more activity.",
    scene: "A recreational club calendar shows one demanding session, an unbooked day, and pressure to fill that gap.",
    sections: [
      {
        title: "An empty calendar box already has a purpose",
        paragraphs: [
          "After a demanding club session, River sees an unbooked day in the calendar and receives an invitation to add another session. The blank space looks like wasted capacity only because the calendar records appointments, not recovery. Rest can have a role even when it does not produce a booking confirmation or completion badge. Before adding the invitation, River considers the sequence of demands rather than counting how many boxes contain an activity name.",
        ],
      },
      {
        title: "Changing the name may not change the demand",
        paragraphs: [
          "MedlinePlus includes rest as part of training because the body needs time to recover from demanding activity. A different session title does not necessarily mean a different physical demand: two activities can ask much of the same muscles or overall effort. Conversely, a genuinely restful interval is not a failed training session. The calendar alone cannot calculate the appropriate recovery interval for a particular person or activity. It can reveal when extra commitments repeatedly remove any room for recovery at all.",
        ],
      },
      {
        title: "Protect the gap without inventing a formula",
        paragraphs: [
          "In River's example, Monday contains the club session and Tuesday remains unbooked rather than automatically becoming another demanding appointment. The next proposed booking is considered separately. Those days illustrate a planning decision, not a recommended recovery duration. Ordinary responsibilities also remain visible: a day labelled rest can still contain substantial physical work. River records what the gap is meant to allow and declines the assumption that a new invitation must occupy it. The useful output is an honest demand-and-recovery sequence, not a diagnosis based on tiredness.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Give the unbooked day a purpose",
      alt: "A fictional Monday club session is followed by an unbooked Tuesday and a separate decision about the next invitation.",
      caption: "The sequence illustrates preserving recovery space. The named days are fictional and do not prescribe a recovery interval or training schedule.",
      items: [
        { label: "Monday session", detail: "A demanding club activity is already planned." },
        { label: "Tuesday gap", detail: "Not automatically filled by another demanding invitation." },
        { label: "Next booking decision", detail: "Consider remaining demands and recovery rather than empty boxes." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A private upcoming calendar", "A note of ordinary physical commitments"],
      steps: [
        "Mark upcoming activities you already know to be demanding, without testing your limits.",
        "Add relevant work, travel, or household demands that the activity calendar omits.",
        "Identify space currently available for recovery before accepting another optional booking.",
        "Write the purpose of that space and leave individual timing questions for appropriate guidance.",
      ],
      notice: "Recovery appears as an intentional part of the sequence rather than a blank to fill automatically.",
      troubleshooting: "If a supposed rest day contains demanding work, relabel the day honestly instead of assuming the word rest settles it.",
    },
    recall: {
      prompt: "A person replaces a rest interval with a different demanding sport and calls it recovery because the sport changed. What needs checking?",
      hint: "Activity names do not establish the physical demand.",
      answer: "Consider the actual effort and overlap in demands. A new sport can still remove recovery space; the name alone does not make a demanding session restful.",
    },
    quiz: {
      question: "What is the most justified interpretation of an unbooked day after demanding activity?",
      options: ["It may be intentional recovery space, not automatically spare capacity.", "It should take the next invitation because no activity is written there.", "A different demanding activity automatically preserves its recovery role."],
      correctIndex: 0,
      explanation: "An appointment calendar does not display every purpose or demand. Recovery needs consideration before an empty box is treated as an invitation to add more.",
    },
    takeaway: "Plan recovery alongside demands instead of filling every apparently empty activity slot.",
    sourceNote: "Inherited MedlinePlus guidance treats rest as part of training. This original calendar audit gives no recovery formula, diagnosis, or individualized exercise schedule.",
  },
  {
    id: 'wellbeing-037',
    outcome: "Base a return-to-activity decision on current circumstances rather than treating an old performance record as a requirement.",
    scene: "A former casual badminton player receives a competitive-session invitation after months away because of work changes.",
    sections: [
      {
        title: "The old result is still on the app",
        paragraphs: [
          "A badminton group sends Luis an invitation after several months away during a change of job. An old match record makes it tempting to return at exactly the previous level. The record proves what happened then, under those circumstances. It does not measure present readiness, the demands of the new session, or how a different work schedule affects participation. Returning to a familiar venue is not the same as returning to an unchanged situation.",
        ],
      },
      {
        title: "Familiarity and current capacity are different",
        paragraphs: [
          "Remembering a skill can make an activity feel familiar while the physical demand still needs reconsidering. Activity patterns and capacity can change during time away. NHS adult guidance therefore relates activity and intensity to current fitness rather than a historical personal best. A generic lesson cannot decide what starting level fits someone, especially after illness or injury. The useful reasoning is to remove the old result as an automatic minimum and identify what must be known about the current option.",
        ],
      },
      {
        title: "Ask about the format before committing",
        paragraphs: [
          "Luis asks whether the invitation is a fixed competitive session or a flexible social format where sitting out is acceptable. Transport home, the ability to leave, and expectations about participation are checked as well. If the only available format assumes an immediate return to old performance, declining or seeking a more suitable option remains possible. This does not create a new training programme. It produces a better-informed entry decision, with uncertainties left open for appropriate individual guidance instead of hidden behind confidence that the court looks familiar.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Past evidence and present questions",
      alt: "An old badminton record describes past performance; the current invitation requires checking format, demands, and flexibility.",
      caption: "The comparison does not estimate fitness. It separates what a historical record establishes from the information needed for a present decision.",
      items: [
        { label: "Old match record", detail: "Evidence of a previous performance in previous circumstances." },
        { label: "Current invitation", detail: "Check format, demands, flexibility, and present suitability." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A familiar activity in mind", "Paper or a draft question"],
      steps: [
        "Name an activity you might return to and the old expectation attached to it.",
        "List current practical circumstances that differ, without performing a fitness test.",
        "Draft a question about the format, flexibility, and ability to stop or sit out.",
        "Record any unresolved suitability question and avoid making a commitment from the old record alone.",
      ],
      notice: "Your decision has current questions and options instead of a requirement to reproduce past performance.",
      troubleshooting: "If current suitability is unclear, keep it unresolved and seek appropriate individual guidance rather than inventing a starting workload.",
    },
    recall: {
      prompt: "Someone returns to a familiar swimming venue after a long break. Does remembering the route and technique establish the previous workload is suitable?",
      hint: "Memory of the activity is not a current capacity assessment.",
      answer: "No. Familiarity and old performance are different from present suitability. The current activity demand and circumstances need considering without making the old workload a required starting point.",
    },
    quiz: {
      question: "Which information should carry more weight in a return decision than an old personal best?",
      options: ["Whether the equipment and court layout still feel familiar.", "Whether active friends still use the previous format.", "Current circumstances and whether the available format is suitable and flexible."],
      correctIndex: 2,
      explanation: "A current decision needs current information. Familiar surroundings and other people's continuity do not establish that the old demand fits now.",
    },
    takeaway: "An old achievement is history, not an instruction for the first session back.",
    sourceNote: "Inherited NHS activity guidance emphasizes appropriate current intensity. This original decision exercise gives no return programme and does not assess readiness after illness or injury.",
  },
  {
    id: 'wellbeing-038',
    outcome: "Protect access to ordinary meals around activity and travel without making food conditional on performance.",
    scene: "An evening dance rehearsal and two bus journeys leave dinner dependent on a cafe that closes early.",
    sections: [
      {
        title: "The activity has a booking, dinner does not",
        paragraphs: [
          "An evening dance rehearsal is booked, transport is checked, and the return bus is planned. Dinner is left to a cafe near the venue. Only later does Mia notice that the cafe closes before rehearsal ends. The calendar looks complete because it contains the named activity and both journeys, but access to food is missing. A good activity plan should account for the ordinary needs around the event, not just getting there and finishing it.",
        ],
      },
      {
        title: "Food is part of the day, not a reward",
        paragraphs: [
          "The body uses food for energy and nutrients during ordinary living as well as physical activity. MedlinePlus includes adequate food and fluids among recovery basics. Completing a particular performance is not the switch that creates permission to eat. Rest days also contain ordinary meals. The Eatwell Guide supplies a broad pattern for variety, not an individual calculation of how much someone needs around rehearsal. A generic lesson cannot turn the length of a class into a precise personal food requirement.",
        ],
      },
      {
        title: "Plan availability before the cafe closes",
        paragraphs: [
          "Mia makes a feasible plan for a familiar meal before travel or after returning home, according to the day's needs and timing. A suitable snack can remain available where useful; it is not treated as a compulsory substitute for dinner. Any food carried follows its storage instructions rather than spending the evening in conditions it cannot safely tolerate. If rehearsal is cancelled, the meal still belongs in the day. The observable result is a named food option with a place and time of access, not a performance-dependent permission slip.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Place food access around the journey",
      alt: "Before travel, food availability is checked; rehearsal and travel follow; the return plan includes a known meal rather than a closed cafe.",
      caption: "The sequence shows planning checkpoints, not prescribed meal intervals or portions. The cafe closure is part of the fictional example.",
      items: [
        { label: "Before travelling", detail: "Check a familiar meal option and any suitable food to carry." },
        { label: "Rehearsal and buses", detail: "Include the full outing, not just the booked activity." },
        { label: "Return food plan", detail: "Know what is available rather than rely on the closed cafe." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["An upcoming activity schedule", "Known food availability and storage instructions"],
      steps: [
        "Mark the activity and both journeys, including any likely waiting time.",
        "Check whether your usual meal access remains available across that whole interval.",
        "Name a feasible familiar meal or suitable backup, with safe storage if carrying food.",
        "Keep the food plan valid even if the activity changes or is cancelled.",
      ],
      notice: "The outing includes a realistic food option instead of an unnamed hope that somewhere will be open.",
      troubleshooting: "If carrying the planned food is unsuitable, arrange another accessible meal option rather than leaving safe storage unresolved.",
    },
    recall: {
      prompt: "A recreational session is cancelled after dinner has been planned. Does cancellation remove the reason for an ordinary meal?",
      hint: "Food supports ordinary living, not only completed exercise.",
      answer: "No. The person still has ordinary food needs. The plan can change with appetite and circumstances, but a meal is not earned only by completing the session.",
    },
    quiz: {
      question: "A late activity depends on a cafe that closes early. Which planning change addresses the actual gap?",
      options: ["Rely on another nearby cafe without checking its hours.", "Arrange a familiar accessible food option around the full outing.", "Carry an unspecified snack without checking suitability or remaining meal access."],
      correctIndex: 1,
      explanation: "The gap is usable food availability. An assumed opening time or unspecified snack leaves the practical meal plan unverified.",
    },
    takeaway: "Include food access in the activity plan, regardless of whether performance plans are completed.",
    sourceNote: "Inherited MedlinePlus and NHS references support adequate food and varied meals. This original access plan provides no calorie target, sports-nutrition formula, or individualized diet.",
  },
  {
    id: 'wellbeing-039',
    outcome: "Reassess an optional outdoor activity when conditions change instead of treating familiar distance and a water bottle as proof of suitability.",
    scene: "A planned outdoor sketch walk faces an extreme-heat forecast and an available indoor exhibition alternative.",
    sections: [
      {
        title: "The route is familiar, the day is different",
        paragraphs: [
          "A group plans a familiar outdoor sketch walk. It was comfortable on a previous mild day, but the current forecast warns of extreme heat. The route length and meeting point are unchanged, which makes keeping the plan feel consistent. Yet the environmental conditions are part of the activity's demand. Repeating the same map does not repeat the same experience when heat, shelter, water access, or the journey to the meeting point has changed.",
        ],
      },
      {
        title: "One precaution does not cancel the environment",
        paragraphs: [
          "MedlinePlus advises avoiding exercise in extreme heat or cold, and CDC notes that heat and activity affect water needs. Carrying drinking water addresses availability of fluid; it does not lower the surrounding temperature or remove exposure along the route. The reasoning is the same as other planning checks: identify what a precaution changes and what it leaves unchanged. A shaded section or familiar route is useful information, but neither automatically establishes that the whole outing is suitable under the new conditions.",
        ],
      },
      {
        title: "Change the plan rather than defend it",
        paragraphs: [
          "The group checks an indoor exhibition as an alternative, including opening times, access, and the journey there. If that option is not actually usable, postponing the optional outing remains possible. Nobody needs to preserve the original distance to prove commitment. The alternative is chosen because it addresses the changed exposure, not because any indoor location is automatically safe or comfortable. The lesson supplies no temperature threshold or treatment instructions. Its output is a revised plan based on current conditions and verified practical details rather than yesterday's successful route.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "The environment belongs in the plan",
      alt: "The same outdoor route differs between mild weather and an extreme-heat forecast; a checked indoor alternative or postponement changes the plan.",
      caption: "These fictional options compare exposure and practical choices, not measured risk. An indoor alternative still needs an access and conditions check.",
      items: [
        { label: "Previous mild outing", detail: "Past experience under different conditions." },
        { label: "Unchanged route in heat", detail: "Same distance, different environmental demand." },
        { label: "Indoor exhibition", detail: "An alternative only after checking access and travel." },
        { label: "Postponed outing", detail: "A valid option when a suitable alternative is unavailable." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["An optional outdoor plan", "Current local conditions information"],
      steps: [
        "Check current conditions for the outing rather than relying on the previous visit.",
        "Name what changed, including exposure, shelter, access, or travel conditions.",
        "Identify a more suitable time, checked setting, or postponement instead of assuming water solves everything.",
        "Verify the alternative's availability and communicate the changed plan without pressuring others to attend.",
      ],
      notice: "The revised option addresses the changed conditions rather than only preserving the original route.",
      troubleshooting: "If no suitable alternative can be verified, leave the optional outing postponed rather than treating uncertainty as reassurance.",
    },
    recall: {
      prompt: "A familiar recreation route faces extreme cold this time. Does previous success establish that the same plan remains suitable?",
      hint: "Past success depended partly on the old conditions.",
      answer: "No. Reassess the current environment and available alternatives. The route's familiarity does not cancel changed exposure, and postponing an optional activity can be the workable decision.",
    },
    quiz: {
      question: "A forecast warns of extreme heat before an optional outdoor session. Which response addresses the changed environment?",
      options: ["Check a suitable alternative setting or time, or postpone.", "Keep the route because its distance is unchanged.", "Carry a bottle and treat all remaining conditions as settled."],
      correctIndex: 0,
      explanation: "Changing exposure addresses the environmental difference. Familiar distance and water availability are relevant details, but they do not make all conditions suitable.",
    },
    takeaway: "Recheck the conditions, not just the route, and keep changing or postponing the plan available.",
    sourceNote: "Inherited MedlinePlus and CDC references discuss extreme conditions and fluid needs. This original planning comparison supplies no safety threshold, medical advice, or treatment protocol.",
  },
  {
    id: 'wellbeing-040',
    outcome: "Remove automatic catch-up demands from a missed activity and reconsider the next plan on its own terms.",
    scene: "A pool closure cancels a midweek visit, creating pressure to combine two planned sessions on Friday.",
    sections: [
      {
        title: "A cancellation becomes an invented debt",
        paragraphs: [
          "The local pool closes unexpectedly on Wednesday. Erin's activity tracker shows a missed visit, so the next thought is to add that entire session to Friday's plan. The empty check mark is being treated like unpaid work. But the body did not receive a transferable credit for the cancelled activity. Combining the two plans creates a different demand on Friday, even if the weekly total on the screen would look familiar.",
        ],
      },
      {
        title: "Totals hide the sequence",
        paragraphs: [
          "A weekly count can describe completed activity while concealing when its demands occurred. The same number of appointments spread across a week is not the same arrangement as several placed together. NHS guidance includes spreading activity, and MedlinePlus emphasizes recovery between demands. These principles do not prescribe an individual rescheduling formula. They explain why restoring a calendar total is not enough to justify an abrupt combined session. Records should describe the plan, not silently determine what level of effort is appropriate.",
        ],
      },
      {
        title: "Revise the next appointment, not the past",
        paragraphs: [
          "Erin marks Wednesday cancelled and considers Friday's original manageable plan without attaching a backlog. Existing weekend commitments and recovery space remain visible rather than being displaced to recreate the lost visit. If future plans need changing, that is a fresh decision based on current circumstances, not repayment of a missed check mark. The cancellation can also inform a practical backup for a future closure. A useful record now explains what happened and what is actually planned next, without turning an unavailable opportunity into a punishment or a performance obligation.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Resume without attaching a backlog",
      alt: "Wednesday's pool visit is marked cancelled, Friday is considered as its own plan, and weekend commitments and recovery remain visible.",
      caption: "The fictional days illustrate rescheduling logic, not a recommended activity frequency. A missed booking does not prescribe an extra workload later.",
      items: [
        { label: "Wednesday closure", detail: "Record a cancelled opportunity, not a physical debt." },
        { label: "Friday decision", detail: "Review the next plan without automatically combining sessions." },
        { label: "Weekend commitments", detail: "Keep other demands and recovery space visible." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A private activity calendar or the pool example", "Paper"],
      steps: [
        "Identify a missed optional activity and write the actual reason it did not happen.",
        "Separate that historical note from the next planned activity's demand.",
        "Remove any automatic catch-up addition and review other commitments and recovery space.",
        "Write a feasible next decision or an unresolved question, rather than a debt to complete.",
      ],
      notice: "The next plan stands on current circumstances instead of a requirement to repair a tracker total.",
      troubleshooting: "If the app keeps displaying a backlog, treat it as a record and revise its scheduling assumptions rather than increasing effort automatically.",
    },
    recall: {
      prompt: "A missed dance class leads someone to book two demanding classes together next time. What does the unchanged total fail to show?",
      hint: "Look at distribution and recovery, not only the number of classes.",
      answer: "The total hides a changed sequence and concentrated demand. The next plan needs its own suitability and recovery check; the missed class is not a requirement to combine workloads.",
    },
    quiz: {
      question: "After an unexpected pool closure, which response best avoids automatic catch-up loading?",
      options: ["Extend Friday until both planned visits are represented.", "Record the closure and reconsider the next manageable plan without a backlog.", "Move every later commitment solely to preserve the original weekly count."],
      correctIndex: 1,
      explanation: "The second response separates a past cancellation from current demand. Restoring a count by extending or compressing plans does not establish an appropriate arrangement.",
    },
    takeaway: "A missed activity is a fact to record, not a workload debt imposed on the next session.",
    sourceNote: "Inherited NHS and MedlinePlus guidance supports distributed activity and recovery. This original calendar exercise prescribes no workload, frequency, or personal training programme.",
  },
]