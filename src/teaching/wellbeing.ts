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
    outcome: "Count the time it takes to get ready for bed as its own block, so the window you leave for sleep is the one you actually have, and move the last optional activity rather than the alarm.",
    scene: "An evening film, a packed work bag, and a fixed bus departure the next day.",
    sections: [
      {
        title: "The film ends before the evening does",
        paragraphs: [
          "It is 22:30. Kai has to be up at 07:00 for a bus, and the streaming service is offering one more episode. Forty minutes. It feels like a small thing to add. But look at what is still waiting after the credits: the work bag is not packed, the dishes are on the side, and there is the ordinary business of teeth, face, and finding the charger. Kai is counting the night from the moment the television goes off. The night does not start then.",
          "Those transitions are not nothing. They take real minutes, every evening, and when you forget to count them the time you think you have for sleep is bigger than the time you actually have. The useful question at 22:30 is not which pillow or blackout blind to buy. It is: what has to happen between the last optional thing I do and being ready to sleep, and how long does that take?",
        ],
      },
      {
        title: "An opportunity is not a measurement",
        paragraphs: [
          "Think about catching a flight. The ticket says 09:00, but nobody with experience plans to leave the house at 09:00. They count backwards: boarding closes at 08:30, security takes forty minutes, the train is thirty, walking to the station ten. The departure time is fixed. Everything that has to happen before it eats into the morning, and the person who forgets security is the person running through the terminal.",
          "Sleep has the same structure. The interval you leave clear for sleeping is your sleep opportunity: the gap between being ready for bed and the alarm. It is the only part of the night a calendar can protect. What happens inside it is a different matter. Falling asleep takes time, and most people wake briefly during the night, so actual sleep is shorter than the opportunity. CDC guidance separates getting enough sleep from sleep quality, and that distinction matters here. A schedule can give you a long enough window. It cannot certify how much of the window you slept, or how restorative it was. And no curtain, however dark, can lengthen a window that the evening has already squeezed shut.",
        ],
      },
      {
        title: "Move the stopping point, not the alarm",
        paragraphs: [
          "Run Kai's evening with the numbers. Stop the film at 22:30. Allow 30 minutes for the bag, the dishes, and getting ready. Ready for bed at 23:00. Alarm at 07:00. That leaves eight hours of opportunity. Play the extra episode instead and the same 30 minutes of preparation still has to happen, so ready-for-bed slides to 23:40 and the opportunity shrinks to seven hours twenty. The alarm did not move. The stopping point did all the work.",
          "Eight hours is arithmetic about this invented evening, not a promise that Kai will sleep eight hours and not a target for every reader. Two further moves make it more robust. Pack the bag before the film starts, so the transition is less crowded and less likely to overrun. And if something in the evening genuinely cannot move, a child who needs settling or a relative who needs help, label it as fixed and look for flexibility elsewhere. A fixed responsibility is a constraint on the schedule. It is not a failure of discipline, and calling it one helps nobody.",
        ],
      },
      {
        title: "Why the transition disappears from the plan",
        paragraphs: [
          "The transition vanishes because it is boring. Nobody looks forward to packing a bag, so nobody schedules it; the episode is vivid and the toothbrush is not. Plans are built around the things we notice and the gaps get filled by the things we do not. The security queue at the airport is the same: invisible in the plan, unavoidable in the morning.",
          "Two habits. When you decide whether to add one more thing to an evening, count the transition after it, in minutes, before you count the sleep. And protect the window, not the feeling: the plan's job is to leave enough opportunity, and what you do with it is a separate question with separate answers.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Where the evening time goes",
      alt: "Film stops at 22:30, preparation occupies 30 minutes, then sleep opportunity runs from 23:00 to 07:00.",
      caption: "Read the middle block first. The 30 minutes of preparation is the part most evening plans leave out, and it sits between the film and the sleep window, not inside either. Only the last block is sleep opportunity, and it is an interval left clear, not sleep measured. Invented times, not to scale, not a prescription.",
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
        "Write tomorrow's required waking time at the top, then list the evening tasks that genuinely cannot move. These are the fixed points, like the flight departure; everything else is arranged around them.",
        "Add getting ready for bed as its own block with its own minutes, based on how long it usually takes you rather than how long it ought to take. This is the security queue; it is the block most plans forget.",
        "Pick one optional activity and choose an earlier stopping point for it. Do not touch a necessary alarm; the stopping point is the lever, not the morning.",
        "Draw the sleep opportunity that remains and label it as opportunity. If you are unsure how long preparation really takes, write unsure rather than guessing low; a window you overstate is a window you will not get.",
      ],
      notice: "Your revised plan shows preparation and sleep opportunity as two different blocks, and you can say which optional thing moved to make room. Nothing has been claimed about sleep itself.",
      troubleshooting: "If nothing optional can move tonight, do not take the time from necessary care or from the transition. Write down the scheduling constraint you would need to change on a future night instead; tonight becomes a short night by circumstance, not by error.",
    },
    recall: {
      prompt: "A late train arrives at 23:00, and unpacking takes another half hour. Where should the sleep opportunity begin?",
      hint: "Arrival and readiness for bed are different events.",
      answer: "Not at 23:00. Arriving home is the plane landing, not being in bed. If unpacking and getting ready take half an hour, the sleep opportunity begins at 23:30, and that is the interval to count to the alarm. If the window looks too short, the thing to move is the optional part of the unpacking, which can wait until morning, not the alarm and not the pretence that the transition takes no time. Count honestly, then choose what to drop.",
    },
    quiz: {
      question: "An evening edit runs late before a fixed early departure. Which change directly creates more sleep opportunity?",
      options: ["Improve bedroom darkness while keeping the same task times.", "Finish an optional editing pass earlier.", "Pack earlier but extend editing by all the time saved."],
      correctIndex: 1,
      explanation: "Finishing the optional editing pass earlier is the only option that moves the stopping point, and the stopping point is what sets how much night is left. Darker curtains change the room, which is a different question; they cannot stretch a window the schedule has already used up. Packing earlier but spending the saved time on more editing leaves ready-for-bed exactly where it was, so the opportunity does not grow at all.",
    },
    takeaway: "Count backwards from the alarm like you count backwards from a flight: the transition into bed is a real block with real minutes, the sleep opportunity is only what is left after it, and the lever that changes the window is the stopping point of the last optional thing, never the alarm.",
    sourceNote: "CDC and NIH guidance supports adequate sleep opportunity. The schedule is an original example, not a treatment or a guarantee of sleep quality.",
  },
  {
    id: 'wellbeing-002',
    outcome: "Compare an ordinary day and a free day across the whole sleep window, both ends, and plan a repeatable pattern that keeps enough sleep opportunity instead of just matching alarm times.",
    scene: "A weekend market volunteer balances a late social evening with an ordinary office week.",
    sections: [
      {
        title: "Two days that barely resemble each other",
        paragraphs: [
          "Leena's weekdays run on rails: ready for bed around 23:00, up at 07:00 for the office. Then Saturday comes. She volunteers at the market in the morning, meets friends in the evening, and the plan is a film until 02:00 and a long lie-in on Sunday. There is nothing wrong with either day. Neither is a test of character.",
          "The scheduling problem is quieter than that. Her whole sleep window has slid three hours later on Saturday, and the Sunday lie-in slides it later again, while Monday's 07:00 has not moved an inch. If she only looks at the Monday alarm she will see nothing unusual. The thing that changed happened over the weekend, and it is invisible unless she puts an ordinary day and a free day side by side.",
        ],
      },
      {
        title: "Regularity describes a pattern",
        paragraphs: [
          "A dog that gets fed at six learns six. By quarter to, it is in the kitchen. Feed it at six all week and at ten on Saturday and it is confused twice: hungry at six on Saturday with nothing coming, and not ready at six on Monday. Nobody told the dog the time. It learned from repetition, and repetition is the only thing it can learn from.",
          "The body's daily timing system works the same way. It takes its cues from recurring signals, above all light and darkness, and it settles into whatever pattern those signals repeat. That is why CDC and NIH guidance includes keeping bedtimes and waking times reasonably consistent. Two things follow, and people often hear only the first. Regular does not mean identical to the minute; a pattern that holds within an hour or so is still a pattern. And regularity is not the whole requirement. The pattern also has to contain enough opportunity for sleep. A person who forces a 07:00 alarm after a 03:00 night, so that the two calendar entries match, has satisfied the appearance of consistency and ignored the second half of the advice. The dog fed at the right time with half a bowl is still hungry.",
        ],
      },
      {
        title: "Make the comparison usable",
        paragraphs: [
          "Leena draws the two days next to each other: stopping point, preparation, sleep opportunity, waking. The drawing makes the three-hour slide visible. Then she asks the only useful question, which is about the future: for the next free weekend, what could she actually choose? Ending the film earlier and keeping Sunday morning somewhere near her weekday pattern is one answer. It is a plan for next time, not a punishment for last time.",
          "The comparison only works if it is honest about what can move. If she had a late caring shift on Saturday night, that would go on the drawing as a fixed block, not get rubbed out to make the picture tidier. The goal is a pattern she can keep, with preparation and enough sleep space in it, on both kinds of day. It is not a streak of perfectly matched alarms that collapses the first week it meets real life.",
        ],
      },
      {
        title: "Why the alarm gets all the attention",
        paragraphs: [
          "Alarms are easy to see and easy to set, so they become the whole story of a sleep schedule. The evening end of the window has no alarm. It slides quietly, half an hour at a time, and nobody notices because nothing beeps. Drawing both ends of the window is the only way the slide becomes visible before Monday does it for you.",
          "Two habits. When you compare two days, compare both ends of the window, not just the morning. And when you plan a change, plan one you could repeat next week; a pattern you can keep beats a perfect one you cannot.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Compare the whole sleep window",
      alt: "An ordinary day and a free day show both the evening stopping point and the following start.",
      caption: "Compare the two rows end to end, not alarm to alarm. On the ordinary day the window sits at 23:00 to 07:00. On the free day both ends have moved: the film runs to 02:00 and the start shifts with it. That whole-window slide is what the Monday alarm cannot show you. Clock times are Leena's plans, not a recommended schedule.",
      items: [
        { label: "Ordinary day", detail: "Preparation around 23:00; waking around 07:00." },
        { label: "Late free day", detail: "Film continues until 02:00; the following start also shifts." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A private weekly calendar"],
      steps: [
        "Pick one ordinary day and one free day coming up this week. Choose a typical week, not your most chaotic one; the point is to see the normal slide, not the exceptional one.",
        "For each day write four things in order: planned stopping point, preparation, sleep opportunity, waking. Both ends of the window, every time; the evening end is the one that hides.",
        "Circle the one optional commitment that accounts for most of the difference between the two days. Usually there is one, and usually it is the thing that feels smallest at the time.",
        "Draft a smaller shift for the free day that keeps enough sleep opportunity on both days. Smaller, not zero: the dog can cope with half an hour. It is the three-hour jump that costs you Monday.",
      ],
      notice: "The two plans sit side by side with nothing hidden, including preparation and fixed responsibilities. You can point at the commitment that moved the window and at the smaller version you would choose next time.",
      troubleshooting: "If you work rotating shifts or have night-time care duties, do not force a standard daytime pattern onto the drawing. Record the constraint as fixed, and remember this exercise is about ordinary scheduling, not about managing shift work or a persistent sleep problem; those need their own advice.",
    },
    recall: {
      prompt: "A friend keeps a precise early alarm but repeatedly delays bedtime. Does the alarm alone show a useful sleep pattern?",
      hint: "Inspect both ends of the interval.",
      answer: "No. The friend is looking at the one end of the window that has an alarm on it and calling that a pattern. The morning is regular; the evening is sliding later and later, which means the sleep opportunity is shrinking night by night even though the alarm never changes. It is the dog fed at exactly six with less in the bowl each day. The stopping point and the preparation need the same attention the alarm gets, and even then a better schedule only protects the window; it does not guarantee what happens inside it.",
    },
    quiz: {
      question: "Which plan best reflects the general recommendation when next weekend is flexible?",
      options: ["A reasonably similar schedule with enough sleep space.", "Keep waking fixed while letting bedtime move much later.", "Keep bedtime fixed without checking the following day's required start."],
      correctIndex: 0,
      explanation: "A reasonably similar schedule with enough sleep space is the only plan that satisfies both halves of the guidance: a repeatable pattern the body clock can learn from, and a window long enough to sleep in. Keeping the alarm fixed while the bedtime drifts later keeps the appearance of regularity and quietly shrinks the opportunity. Keeping the bedtime fixed without checking the next morning's start fixes the other end and ignores the one that matters on Monday.",
    },
    takeaway: "The body clock learns from repetition like a dog learns dinner time, so compare both ends of the sleep window across ordinary and free days, and aim for a pattern you can actually keep that still leaves enough room to sleep, rather than matching alarms to the minute.",
    sourceNote: "CDC and NIH recommend regular timing alongside adequate sleep. This calendar exercise is not tailored guidance for shift work or persistent sleep difficulties.",
  },
  {
    id: 'wellbeing-003',
    outcome: "Trace one avoidable bedroom sound to its source and the surface amplifying it, fix that path, test the result from where you sleep, and leave necessary alarms untouched.",
    scene: "A shared flat has a vibrating phone against a bed frame and necessary hallway alarms.",
    sections: [
      {
        title: "A small device makes a large rattle",
        paragraphs: [
          "Arun is lying in bed in a shared flat, nearly asleep, when it starts: a short buzz, then a wooden rattle, then quiet, then again. His phone is on charge, propped against the bed frame, and every notification shakes the frame. Out in the hall, a different device makes an occasional necessary alert that nobody should silence. He lies there thinking the flat is noisy.",
          "The flat is noisy is two problems wearing one coat. One is a vibration that has found a path into a large wooden object; it is avoidable and it is his. The other is an alert that must stay audible. It is not his to change, and it is not the thing waking him up anyway. Before he buys earplugs or a white-noise machine for the whole room, the useful move is to work out which sound is happening where. Then, what is actually producing it.",
        ],
      },
      {
        title: "Follow the source and the surface",
        paragraphs: [
          "Hold a small music box in the air and wind it up: you can barely hear it. Set it down on a wooden table and the same tune fills the room. The mechanism did not get louder. The table did. A vibrating object pressed against a big surface turns that surface into a speaker. That is why a guitar has a body, and why a phone against a bed frame can wake a flat.",
          "Sound reaches you two ways. It travels through the air directly, and it travels as vibration into a surface, which then radiates sound of its own. Arun's phone is doing the second. Its buzz is small; the bed frame it touches is a soundboard. Move the phone onto a clear, stable bedside surface, not touching the frame, and that particular path is gone. Be clear about how small and specific this change is. It is not soundproofing. It will not touch traffic outside or the neighbour's conversation through the wall. Those arrive through the air and the building, not through the phone. Separating the paths is what lets him test whether the change fixed the sound he was actually hearing. Hoping a general improvement would cover it is not a test.",
        ],
      },
      {
        title: "Test the adjustment without hiding alerts",
        paragraphs: [
          "He moves the phone away from the frame, leaves the charger uncovered so it does not overheat, and routes the cable away from where feet go at night. Then, while still awake, he runs an ordinary device test: does the essential phone alarm still reach him in bed from the new position? It does. The hallway alarm he leaves exactly as it was, because it was never the problem and it is not his to touch.",
          "If the television through the wall is what remains, that is a different source with a different fix. It needs a conversation about volume or timing with the person watching it, not a third rearrangement of the phone. Two things are worth saying out loud. A room can become noticeably less disruptive without becoming silent, and less disruptive is a real result. And quieter conditions do not explain every difficulty with sleep. If the sound was never the main issue, removing it will not be the main fix.",
        ],
      },
      {
        title: "Why the whole room gets blamed",
        paragraphs: [
          "In the dark, with your eyes closed, every sound seems to come from everywhere, so the natural verdict is on the room. But rooms do not make noise. Sources do, through paths, and each path has its own cheap fix or no fix at all. Earplugs for the whole room treat the music box and the traffic as the same problem, and they are not.",
          "Two habits. When something disturbs you at night, name the source and the surface before you name the room. And after any change, test it from the position you actually sleep in, including a check that the alerts you need still get through.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Remove the vibration contact",
      alt: "A phone sits on a clear bedside surface away from the bed frame; a separate hallway alarm remains unchanged.",
      caption: "Look at the gap between the phone and the bed frame first: that gap is the whole fix, the music box lifted off the table. Then check the sleeping position, because that is where the result has to be judged. The hallway alarm sits apart on purpose; it is a separate source and nothing about it changes. Position markers only, not sound levels.",
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
        "Lie or sit in your usual sleeping position and pick one avoidable sound. Follow it to its likely source and to whatever surface it is touching; the music box is usually small and the table is usually what you hear.",
        "Separate that sound from necessary alarms and from anything belonging to another person. Those are not yours to adjust, and they are usually not the thing that disturbs you most.",
        "Make the adjustment to your own source safely: keep vents and chargers uncovered, keep cables out of walking routes, keep anything that must stay reachable within reach.",
        "Return to the same position and listen again, then run a quick waking test that your essential personal alerts still reach you. A quieter room that mutes your alarm has not improved.",
      ],
      notice: "You can name the particular sound that changed, the music box you lifted off the table, instead of giving the whole room a vague rating. And you have confirmed the alerts you rely on still work.",
      troubleshooting: "If the sound is still there, you have the wrong source or the wrong surface; go back and listen again rather than adding more changes. If the remaining sound is shared, television, a flatmate, a neighbour, the next step is a conversation, never an adjustment to shared safety equipment.",
    },
    recall: {
      prompt: "A clock ticks loudly on a hollow shelf, but road noise also enters the room. What would a shelf change test?",
      hint: "Separate the two sound sources.",
      answer: "A shelf change tests one thing: whether the hollow shelf is acting as the clock's soundboard, the table under the music box. Move the clock onto something solid or put a soft pad under it and listen from bed. If the tick drops, the shelf was the amplifier. That result says nothing at all about road noise, which arrives through the window and the wall by a completely different path, so the honest note is the clock got quieter, not the room is quiet now. Each source gets its own test and its own fix.",
    },
    quiz: {
      question: "Moving a vibrating phone stops the bed-frame rattle but leaves television sound. What follows?",
      options: ["Keep adjusting the phone location before considering another source.", "Add background sound without checking the television's volume or timing.", "One source improved; the television needs a separate discussion."],
      correctIndex: 2,
      explanation: "Moving the phone fixed one transmission path, the phone against the frame, and that is a real result that does not disappear because another sound remains. The television is a different source arriving through a different route, so it needs a different response, a conversation about volume or timing. Fiddling further with the phone chases a problem the phone is no longer causing, and masking the television with background sound without talking about it skips the actual source and risks covering alerts you need.",
    },
    takeaway: "Rooms do not make noise; sources do, through paths, so find the music box and the table it is sitting on, change the path that is yours to change, test the result from where you sleep, and leave every necessary alert exactly as loud as it was.",
    sourceNote: "CDC supports a quiet sleep environment. The vibration example is an original practical application, not an acoustic measurement or treatment for sleep problems.",
  },
  {
    id: 'wellbeing-004',
    outcome: "Check the caffeine information on any late drink instead of trusting its name, treat a silent label as unknown, and weigh timing before sleep without borrowing someone else's cutoff rule.",
    scene: "An intercity bus passenger chooses a drink during an evening station stop.",
    sections: [
      {
        title: "The station menu is not just coffee",
        paragraphs: [
          "An intercity bus pulls into an evening station stop. Nia has a rule about late coffee, so she walks past the coffee counter feeling organised and buys a bottled iced tea instead. Back on the bus she reads the label out of idle curiosity. Contains caffeine. Her travel companion, meanwhile, is drinking something tall and bright that he calls a vitamin drink. It is an energy drink. Vitamins are on the label too, but so is caffeine.",
          "Neither of them is being foolish. They are both doing what people do: judging a drink by its name and by why they bought it, not by what is in it. The name tea and the reason for a bit of a lift do not change the ingredients. The two questions that actually matter at a late stop are plain ones. What does this drink contain? And when am I drinking it, relative to when I plan to be asleep?",
        ],
      },
      {
        title: "Alertness can outlast the journey",
        paragraphs: [
          "People who have been told to cut down on salt usually start by putting the shaker away. Then they read a bread label, or a soup tin, and discover that most of the salt they eat was never in the shaker. Avoiding the obvious source felt like the whole job. It was the smallest part of it. Caffeine behaves the same way: coffee is the shaker, and the tea, the cola, the energy drink, and the chocolate bar are the bread and the soup.",
          "Caffeine is a stimulant. It makes you feel more alert, and the feeling does not switch off when the drink is finished or the bus stop is over; NIH sleep guidance notes that its effects can last for hours. That is why timing belongs in the decision. A drink chosen to stay awake for the last hour of a journey can still be working during the hours set aside for sleep afterwards, like a radiator that keeps giving off heat long after you turned it off. Two cautions. Feeling alert is not the same as having had the sleep you missed; the stimulant borrows attention, it does not repay rest. And people differ a great deal in how strongly and how long caffeine affects them, so your companion's cheerful nothing keeps me awake tells you about your companion and nothing about you.",
        ],
      },
      {
        title: "Compare two actual labels",
        paragraphs: [
          "Nia goes back to the kiosk and does the simple thing: she reads two labels. The bottled tea lists caffeine. A still fruit drink next to it says caffeine-free, in words, on the bottle. For this late stop she takes the fruit drink. That is a decision about these two products at this hour. It is not a rule that tea is always caffeinated or fruit drinks never are; another brand could go either way.",
          "When the label does not say, the honest reading is unknown, not none. She can ask the seller, or take plain water, which settles the question for free. And watch for the decoy claim. Sugar-free answers a question about sugar. It says nothing about caffeine, and a bottle can be proudly sugar-free and thoroughly caffeinated at the same time. Different ingredient, different line on the label.",
        ],
      },
      {
        title: "Why the coffee rule feels like enough",
        paragraphs: [
          "A rule about coffee is easy to follow and easy to feel good about, which is exactly why it survives even when it is not doing the job. The shaker is on the table where you can see it. The salt in the bread is not. Rules built around the visible source leave the invisible ones untouched, and the invisible ones are often bigger.",
          "Two habits. Read the caffeine line, not the product name, on anything you drink late in the day. And treat the time of drinking as part of the decision, without inventing a personal cutoff hour from one evening or from someone else's experience.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Same stop, different ingredients",
      alt: "The example bottled tea lists caffeine; the example still fruit drink explicitly says caffeine-free.",
      caption: "Read the two labels, not the two names. The bottled tea's label lists caffeine; the fruit drink's label says caffeine-free in words. The names tell you almost nothing, which is the point: the salt was in the bread. Fictional labels, with no caffeine quantity and no prediction about anyone's night.",
      items: [
        { label: "Bottled tea", detail: "This example label lists caffeine." },
        { label: "Still fruit drink", detail: "This example label explicitly says caffeine-free." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["A drink label or a product information page", "A private note"],
      steps: [
        "Choose one drink you sometimes have later in the day and read its caffeine information, the actual ingredient line rather than the front of the packet. This is checking the bread, not the shaker.",
        "Write down one of three things: caffeine present, caffeine absent, or not established by this label. The third answer is legitimate and common.",
        "Note when you usually drink it relative to the time you plan to be asleep, in hours. The radiator keeps giving off heat after it is turned off, so the gap matters.",
        "Find an uncaffeinated alternative that is actually available where you usually buy the drink. Do not invent a personal safe cutoff hour from this exercise; one evening and one label cannot tell you that.",
      ],
      notice: "Your note separates evidence from the label from the name on the front and the reason you bought it. You know what the drink contains, or you know that you do not know, and either is more useful than assuming.",
      troubleshooting: "If the label is vague or lists caffeine with no amount, leave it as unknown rather than reading the silence as none. If you catch yourself writing a cutoff time, cross it out; the exercise is about reading labels, not about setting rules for a body it has not met.",
    },
    recall: {
      prompt: "A late-night soft drink is labelled sugar-free. What still needs checking before treating it as uncaffeinated?",
      hint: "Sugar and caffeine are separate ingredients.",
      answer: "The caffeine line. Sugar-free is a claim about sugar and nothing else; it is like a loaf labelled low fat that is still full of salt. Read the ingredient or caffeine information, and if it is not stated, treat the drink as unknown rather than clear. Then look at the clock: a stimulant drunk late can still be working during the hours you meant to sleep, the radiator still warm after it is switched off. And a friend's report that the same drink never bothers them is information about the friend, not a safe cutoff for you.",
    },
    quiz: {
      question: "A traveller avoids coffee but drinks caffeinated tea before the planned sleep period. What did the rule miss?",
      options: ["Caffeine from another source and its timing.", "Whether the tea's sugar content matches the coffee.", "Whether the tea is marketed as a relaxing drink."],
      correctIndex: 0,
      explanation: "The rule was about coffee, so it missed caffeine arriving from another source, the tea, and it missed that the timing was the problem regardless of which drink carried it. That is the salt in the bread. Sugar content is a different ingredient and a different question. A relaxing label is marketing; it does not remove caffeine from the ingredient list, and reading it as reassurance is exactly the mistake the lesson is about.",
    },
    takeaway: "Coffee is the salt shaker and caffeine is in the bread too, so read the caffeine line on whatever you drink late in the day, treat a silent label as unknown rather than clear, count the hours to sleep because the effect outlasts the drink, and do not borrow anyone else's cutoff.",
    sourceNote: "Inherited NIH and NHS references cover caffeine and drinks. This label exercise supplies no individual cutoff and does not predict or treat sleep difficulty.",
  },
  {
    id: 'wellbeing-005',
    outcome: "Tell the difference between a large meal eaten right before bed and a blanket ban on evening food, and move the main meal earlier when the day allows without making hunger part of the plan.",
    scene: "A pottery class finishes late, leaving cooking and dinner next to bedtime.",
    sections: [
      {
        title: "The class ends, then dinner starts",
        paragraphs: [
          "Sam's pottery class finishes at 21:30. By the time the bus gets home it is after ten. Then the cooking starts: pasta, a sauce from scratch, a proper plate of food, because lunch was a long time ago. Dinner is eaten at the counter at 22:45. Sam goes more or less straight from the plate to the pillow, slightly too full and faintly regretful.",
          "It would be easy to draw the wrong lesson here. Pottery is not the problem and neither is eating in the evening. The problem is that the biggest job of the evening, cooking and eating a main meal, has been left until the end of an evening that was already full. Writing an earlier bedtime on top of the same list of tasks changes nothing. The tasks still take the time they take. A useful plan asks a different question: when in this day could a proper meal actually happen?",
        ],
      },
      {
        title: "Size and timing are separate questions",
        paragraphs: [
          "Suppose a forty-minute phone call right before you leave for work made you late one morning. The sensible response is to move long calls away from the door. The silly response is to ban all phone use before nine, so that you cannot even send a two-line text. A long call and a quick text are not the same event, even though both involve the phone. The rule has to be about the thing that caused the trouble. That was the size of the call and its timing, not the phone.",
          "NIH sleep guidance makes the same distinction about food. It separates a heavy or large meal close to bedtime from a light snack. A large meal takes time to make, time to eat, and time to settle comfortably afterwards. For some people, going straight from that meal to lying down is an uncomfortable transition. That is the whole of the general advice. It is not evidence that every mouthful after a particular hour is harmful. It does not say that going to bed hungry is a goal. Hunger is real, access to food is real, and a lesson written for everyone cannot tell any one person how much they need. The quick text is still allowed.",
        ],
      },
      {
        title: "Move the main meal where feasible",
        paragraphs: [
          "So for next week, Sam plans the familiar main meal before leaving for the class, early enough not to bolt it. After the class and the bus, if hunger turns up, an ordinary snack is there: toast, fruit, yoghurt, whatever is normal in that kitchen. The big cooking-and-eating block has moved to a part of the evening with room for it. Nothing has been banned, and nobody is going to bed hungry on principle.",
          "Some days will not allow it. If a shift runs late or the afternoon is spoken for, the earlier meal is simply not possible. The plan has to adapt to that rather than copy the example's clock. On those days the useful move is to simplify what gets cooked, not to skip eating. And be suspicious of any product that promises to fix the late dinner for you. The improvement here is a more workable arrangement of the evening. It is not a special drink or ingredient with sleep in its marketing.",
        ],
      },
      {
        title: "Why blanket rules feel safer than they are",
        paragraphs: [
          "A rule like nothing after eight is attractive because it is simple to state and simple to break. That makes it feel like discipline. But it bans the two-line text along with the forty-minute call, and it quietly turns hunger into a virtue. The guidance was never about the clock. It was about not stacking a large meal directly against lying down.",
          "Two habits. When an evening meal keeps landing on top of bedtime, look at where in the day the cooking could move before you look at the clock on the wall. And keep a plain snack option in every plan, so that the schedule never depends on pretending you are not hungry.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Move the meal, keep food available",
      alt: "The main meal occurs before pottery class; after the 21:30 finish and travel, a snack remains available if wanted.",
      caption: "Follow the order of the row, because the order is the change. The main meal now sits before the class, where there is time to cook and eat it. After the 21:30 finish and the journey home, the last block still has food in it if wanted; nothing has been banned. The class time is fictional, and the spacing is not a universal meal-to-bed gap.",
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
        "Choose an upcoming late activity, a class, a shift, a visit, and write its finish time plus the real travel and winding-down time after it. The evening is shorter than it looks once those are in.",
        "Find where the main meal currently falls and be honest about how long it takes, including the cooking, not just the eating. This is the forty-minute call; it needs to be seen at its true size.",
        "If the day allows it, move that block earlier, to a slot with room for it. Moving it must not mean eating less or worse; it means eating at a different time.",
        "Write down a plain after-return food option, so the plan has the two-line text built in. A plan that only works if you ignore hunger is a plan that will be abandoned.",
      ],
      notice: "Your plan has moved a crowded meal block to a part of the day that can hold it, without inventing a cutoff hour or making hunger part of the design.",
      troubleshooting: "If the timing genuinely cannot move, simplify the meal with suitable food you already have rather than skipping it. Skipping is never the default; a late simple meal beats an early principle.",
    },
    recall: {
      prompt: "A night-shift worker eats their main meal late by the clock but well before their sleep period. What comparison matters?",
      hint: "The relationship to sleep matters more than a universal hour.",
      answer: "Compare the meal to their sleep, not to the clock. A night-shift worker eating a main meal at 23:00 and sleeping at 08:00 has nine hours between the plate and the pillow, which is nothing like Sam going from counter to bed in fifteen minutes. The guidance is about a large meal landing directly against lying down. A daytime worker's evening cutoff is a rule built for a different day, and borrowing it would be banning the phone because someone else made a long call. Look at meal size, the gap before their actual sleep period, and whether they are getting enough to eat; the hour on the clock is the least informative part.",
    },
    quiz: {
      question: "A late class repeatedly pushes the main meal against bedtime. Which plan best preserves the guidance's distinction?",
      options: ["Use one fixed food cutoff without considering the class schedule.", "Keep the large late dinner and add a marketed bedtime drink.", "Move the main meal if feasible and allow food later if hungry."],
      correctIndex: 2,
      explanation: "Moving the main meal earlier when the day allows, and keeping food available later for hunger, keeps both halves of the guidance: it separates the large meal from bedtime and it does not make hunger a goal. A fixed cutoff that ignores the class schedule bans the quick text along with the long call. Keeping the large late dinner and adding a marketed bedtime drink leaves the crowded block exactly where it was and buys a product to feel better about it.",
    },
    takeaway: "The guidance is about a large meal stacked against lying down, not about the clock, so move the big cooking-and-eating block to a part of the day that can hold it, keep a plain snack in the plan for when hunger shows up, and treat any after-this-hour rule the way you would treat banning all phone calls because one long one made you late.",
    sourceNote: "NIH distinguishes large meals near bedtime from a light snack. This original schedule is general education, not a prescribed diet or sleep treatment.",
  },
  {
    id: 'wellbeing-006',
    outcome: "Notice the movement already inside ordinary journeys and chores, label sitting as sitting, and keep different actions distinct instead of calling every task equal exercise.",
    scene: "A market journey combines a bus ride, wheeling along a level path, and carrying shopping indoors.",
    sections: [
      {
        title: "The activity happened between appointments",
        paragraphs: [
          "Maya says she did no activity today. She did not go to a gym, so in her head the day is a blank. But rewind. She took the bus to the market, wheeled her chair from the stop along the level path to the stalls, did the shopping, came home, and moved all the groceries from the hallway to the kitchen. Her friend went to the same market on foot. Neither of them wore anything with a logo on it.",
          "None of that movement stops being movement because it happened in ordinary clothes on an ordinary errand. Looking for named workouts, and only named workouts, means missing most of what bodies actually do in a day: getting places, carrying things, cleaning, dancing in the kitchen. One more thing worth separating out. The bus ride was sitting. A single trip can contain both movement and stretches of not moving at all, and both deserve an honest label.",
        ],
      },
      {
        title: "Count the action, not the costume",
        paragraphs: [
          "Nobody thinks reading only counts if you do it in a library. The cereal box at breakfast, the bus timetable, the instructions on a packet: your brain is reading all day, and it would be odd to say I did no reading today because I did not open a novel. Reading is the activity, not the building. At the same time, nobody pretends that reading a cereal box and reading a dense textbook make the same demands. Same activity, very different workload.",
          "The World Health Organization defines physical activity broadly along the same lines: movement that uses the body's muscles, across all the ordinary settings of a day, including transport, housework, and recreation, not just sport. The label describes what the body is doing. It does not care where it happens, what you are wearing, or whether an app noticed. That is the first half. The second half is the cereal box and the textbook. Different actions make different demands. A thirty-second kitchen task and a sustained hour of recreation are both movement, but they differ in intensity, in duration, and in which muscles do the work. Nothing in this lesson lets you swap one for the other and call it equal.",
        ],
      },
      {
        title: "Make the accessible part visible",
        paragraphs: [
          "Maya rewrites her day. The level path from the bus stop gets marked as movement. The bus gets marked as seated travel. She keeps using the accessible stop, because choosing a flight of stairs to make the trip look more active would be a strange way to care for herself. Her friend writes down carrying a light bag home and does not pretend it amounted to a strength programme. Both records now describe what actually happened.",
          "And that is what the record is for. Once the day is written down honestly, the next decision can be about a real, familiar opportunity, the path she already uses, the walk he already takes. It does not have to be about earning permission to count movement by making a journey longer, harder, or less accessible than it needs to be. Movement that is already in your life is the easiest movement to keep.",
        ],
      },
      {
        title: "Why the gym gets to decide",
        paragraphs: [
          "Formal exercise has a name, a place, a time slot, and often a receipt, so it is easy to notice and easy to count. The wheel along the path has none of those, so it slips out of the tally even though the muscles were working. That blind spot has a cost: it makes people feel they did nothing on days when they did a fair amount, and it hides the opportunities that are already free.",
          "Two habits. When you review a day, write down the actions, wheeled, walked, carried, climbed, and let the labels come second. And never pay for an activity by making it harder or less accessible than your life requires; the movement already there counts as it is.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Different parts of one market trip",
      alt: "Bus travel is seated time; wheeling, walking, and moving groceries are everyday movement with different demands.",
      caption: "Read the four cards as actions, not as scores. One of them, the bus section, is sitting, and it is listed on purpose so that the trip is described honestly. The other three are movement of different kinds, like reading a cereal box, a timetable, and a textbook: all reading, not all the same job. No calories, intensities, or exercise equivalents are being assigned.",
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
        "Take a recent ordinary journey or household task, something you have already done, and write out its stages in order. Do not add a new task to have something to write; the point is to see what was already there.",
        "Mark each stage as movement or as sitting or resting. The bus, the sofa, and the waiting room all go in the second group, honestly.",
        "Name the actual actions, wheeled, walked, carried, lifted, danced, instead of sorting the day into workout and no workout. Reading the cereal box is still reading; say what kind.",
        "Pick one familiar, accessible piece of movement you already do and decide to keep it. Do not lengthen it, steepen it, or trade the accessible route for a harder one to make it count more.",
      ],
      notice: "Your record now contains specific movement that happened outside any formal exercise, with the different demands left distinct and the sitting labelled as sitting. It describes the day you had, not the day a fitness app would recognise.",
      troubleshooting: "If movement really is limited, write that down as it is; an honest short list is the right result. Do not invent a tougher route to fill the page, and do not measure your access needs against someone else's legs.",
    },
    recall: {
      prompt: "Someone dances while preparing a room for a gathering but records no activity because there was no class. What was missed?",
      hint: "Ask what happened physically, not where it was booked.",
      answer: "They missed the dancing. Moving around a room setting up chairs and dancing while doing it is physical activity in exactly the broad sense the WHO uses; the body was working, whether or not a class was booked. It is reading the cereal box and saying you did not read. What the record should not do is overclaim: an hour of dancing while tidying tells you that movement happened, not what intensity it reached or that it covers every other kind of activity. Write down what happened and what kind of movement it was, and leave the rest unknown.",
    },
    quiz: {
      question: "Which record best describes a commute containing a bus ride and a familiar walk?",
      options: ["Count only the part recorded by a workout app.", "The trip contains seated travel and everyday movement.", "Classify the whole trip from its main transport mode."],
      correctIndex: 1,
      explanation: "Saying the trip contains seated travel and everyday movement is the only description that matches what the body did: sitting on the bus, then walking. Counting only what a workout app recorded is deciding that reading only counts in a library. Classifying the whole trip by its main transport mode writes the walk out of existence, and calling it all a bus ride because the bus took longest is how a day full of ordinary movement becomes no activity.",
    },
    takeaway: "Movement is defined by what the body does, not by the building, the outfit, or the app, so count the wheeling, walking, and carrying that are already in your day, label the sitting as sitting, and remember that different actions make different demands, like a cereal box and a textbook are both reading and not the same job.",
    sourceNote: "The inherited WHO reference defines physical activity broadly. This journey audit is not a workout prescription, a calorie estimate, or an accessibility requirement.",
  },
  {
    id: 'wellbeing-007',
    outcome: "Read the talk test as a rough description of how hard an activity feels to one person, not as a speed to match or a test anyone has to pass.",
    scene: "Two friends describe different effort while following the same familiar park path.",
    sections: [
      {
        title: "One pace, two experiences",
        paragraphs: [
          "Two friends are walking the same park path at the same pace, side by side. Dev is chatting away about a film. Noor is keeping up and can answer, but says that if Dev asked her to sing the theme tune she would struggle. Same path, same speed, same afternoon. Two different experiences of effort.",
          "The speed does not tell you how hard either of them is working. Fitness, the surface underfoot, the wind, how much sleep each had, and simply who they are all shape the demand. A watch can report the pace and a map can name the route, but both of those describe the outside of the activity. Dev and Noor's remarks describe the inside, and the inside is where effort lives.",
        ],
      },
      {
        title: "What the comparison actually describes",
        paragraphs: [
          "Two people sit in the same room. One says it is pleasantly warm; the other reaches for a jumper. The thermostat on the wall says twenty degrees, and it is not lying, but it is describing the room, not either person. If you want to know whether someone is cold, the thermostat is the wrong instrument. You ask them. The talk test is the same idea applied to effort: an instrument each person reads off themselves.",
          "The NHS uses conversation as a rough way to describe how hard an activity feels. At moderate effort you can generally talk but would find singing difficult. At vigorous effort you cannot say more than a few words without pausing for breath. The reason it works at all is that breathing demand rises with effort, so how much speech you can manage is a simple clue to where you are, without needing a shared speed or any equipment. Notice what these are: descriptions, not instructions. Nobody is being told to reach either state. The clue is also imperfect. A sheltered level stretch and an exposed slope will produce different reports from the same person on the same day. And it is not a fitness grade, a test of whether someone is ready for an activity, or proof that the activity suits them.",
        ],
      },
      {
        title: "Use the observation without chasing it",
        paragraphs: [
          "Noor's remark, can talk but could not sing, sounds like the NHS moderate-effort description. That is useful information about Noor, today, on this path. It is not a target for Dev. Dev does not need to speed up until the same sentence fits; the pleasant walk is allowed to stay pleasant, and the two of them are free to arrange their outings however suits them both.",
          "And if speech is not a usable comparison for someone, because of how they breathe, how they speak, or how they communicate, the spoken test is not required. It is one rough clue among others, not a gate. For this lesson, reading the two accounts is the whole exercise. Neither friend needs to sing, get breathless, or walk an extra lap to prove the distinction landed.",
        ],
      },
      {
        title: "Why effort gets confused with pace",
        paragraphs: [
          "Pace is public and effort is private. Everyone can see the speed, so the speed becomes the thing people compare, and the quiet assumption follows that the same pace must mean the same work. It does not, any more than the same room means the same temperature to everyone in it. Mistaking the thermostat for the person is how someone ends up pushing to match a companion who was never trying.",
          "Two habits. When you want to know how hard something is for you, ask yourself the talk question rather than looking at anyone else's watch. And when a companion describes their effort, treat it as information about them, never as a pace you now owe.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Same path, different reported effort",
      alt: "Dev reports easy conversation; Noor can talk but would find singing difficult at the same pace.",
      caption: "Read the two accounts as two thermostats, one in each person. Dev's reads easy conversation; Noor's reads talking yes, singing no. The path and pace are identical, so the difference is entirely in the person. Fictional reports that illustrate relative effort; they are not diagnoses and not a reason to copy anyone's pace.",
      items: [
        { label: "Dev's account", detail: "Conversation feels easy at this pace." },
        { label: "Noor's account", detail: "Talking is possible; singing would be difficult." },
      ],
    }],
    practice: {
      minutes: 3,
      needs: ["The two written accounts above", "Paper or a note"],
      steps: [
        "Read Dev's and Noor's accounts as written. Do not get up and test anything; this is an exercise in interpretation, and the lesson has nothing to gain from your heart rate.",
        "Underline the words that describe effort, chat comfortably, singing would be difficult, and cross out anything about the route, pace, or distance. You are separating the thermostat on the wall from the person in the jumper.",
        "Match Noor's account to the NHS moderate-effort description and write one sentence on why the match is only rough. Terrain, wind, and the day all push the reading around.",
        "Write one reason this comparison cannot tell another person what they should do. If your sentence contains the word should, start it again.",
      ],
      notice: "Your answer treats the talk test as a description of one person's effort, not an instruction to reach a state or match a companion. You can say what Noor's remark tells you and what it does not.",
      troubleshooting: "If you find yourself ranking Dev and Noor, go back to their words; the example contains no fitness scores and no targets. If the spoken test does not suit how you breathe or communicate, note that and skip it; it is a clue, not a requirement.",
    },
    recall: {
      prompt: "The same gentle-looking hill feels easy to one companion and demanding to another. Which description is more useful than its appearance?",
      hint: "The outside view does not measure another person's effort.",
      answer: "The person's own account. The hill looks gentle from the outside the way a room looks the same to everyone in it, but how hard it feels is read off the person, not the slope. One companion says they could chat the whole way up; the other says they could talk but not sing, or could only manage a few words. Those are their thermostats, and each one describes only its owner. Where the talk test is usable it gives a rough label for that effort. It does not say the second person should keep up, and it does not say the hill is right or wrong for either of them.",
    },
    quiz: {
      question: "A person can talk during an activity but finds singing difficult. What does that information support?",
      options: ["The pace should become everyone else's target.", "The activity is confirmed suitable for that person.", "It roughly resembles the NHS moderate-effort description."],
      correctIndex: 2,
      explanation: "Being able to talk but not sing roughly matches the NHS description of moderate effort, for that person, at that moment; it is a reading from their own thermostat. It does not turn their pace into a target for anyone else, because the same pace produces different readings in different people. And it does not confirm the activity is suitable for them; the talk test describes effort, not readiness or safety.",
    },
    takeaway: "Effort is read off the person, not the path, like warmth is read off the person, not the thermostat, so use the talk test to describe your own effort roughly where it suits you, treat a companion's reading as information about them, and never let a shared pace become a shared obligation.",
    sourceNote: "NHS adult guidance supplies the talk-test comparison. The practice is a written interpretation task, not an exercise test or individual activity advice.",
  },
  {
    id: 'wellbeing-008',
    outcome: "Sort activities you have already done by whether they were sustained movement, muscles against resistance, both, or neither, and keep the audit honest without turning it into a training plan.",
    scene: "A community garden volunteer sorts a week's walking and lifting activities by their demands.",
    sections: [
      {
        title: "Busy does not describe the kind of demand",
        paragraphs: [
          "Rafi volunteers at a community garden. On a typical afternoon he walks there, spends an hour sitting at a bench sorting seed packets into envelopes, and now and then helps move bags of compost or trays of seedlings from the delivery point to the beds. At the end of the day his diary says: busy afternoon at the garden.",
          "That entry is true and almost useless, like a receipt that says shopping. Three very different things happened. The walk was repeated movement over time, enough to warm him up. Moving compost asked his muscles to push against a real weight. Sorting packets at a bench asked very little of either. The fact that all three happened in the same place on the same afternoon does not make them the same kind of activity, and a diary that merges them cannot tell him anything about his week.",
        ],
      },
      {
        title: "Two categories can overlap",
        paragraphs: [
          "Think about the difference between walking a dog for an hour and opening a stiff jar. The walk is long, steady, and gets your breathing going; the jar is over in a second and is all about muscles straining against something that resists. Both are things a body does. Nobody would say that because they walked the dog, the jar is now open. And nobody would say that opening one jar is a walk.",
          "Those are the two categories adult activity guidance talks about. Aerobic activity is the dog walk: sustained movement that raises the work of breathing and circulation. Muscle-strengthening activity is the jar: muscles working against enough resistance to be challenged. NHS guidance for adults includes both, side by side, rather than offering a choice between them. Two cautions keep the categories honest. First, they overlap. Carrying something heavy up a long hill is a bit of both, so the boxes are not sealed. Second, picking up an object does not automatically make a strengthening session. Whether the compost bag was a meaningful resistance depends on how heavy it was, which muscles did the work, and who was lifting it. The object cannot certify the activity; only the demand can.",
        ],
      },
      {
        title: "Classify before making assumptions",
        paragraphs: [
          "Rafi rewrites the entry. Walk to the garden: mainly sustained movement. Moving supplies: involved resistance, actual demand uncertain, because he did not weigh anything and some of it went on a trolley. Seed sorting: a light seated task, left on its own line rather than squeezed into a category to tidy the list. He also notes that rolling a trolley and carrying a bag are not the same job, even if both move compost.",
          "What he has now is a description of his week with its gaps marked. That is the entire purpose. The NHS examples helped him understand what the two words mean, and the audit tells him what he knows and what he does not. It does not tell him to lift heavier bags next week. A classification exercise is not a training plan. The moment it starts suggesting bigger loads it has stopped being a description and become a guess about his body that nobody has checked.",
        ],
      },
      {
        title: "Why busy swallows the detail",
        paragraphs: [
          "Busy is a feeling, and feelings are easy to write down. The afternoon felt full, so it goes in as full, and the question of what kind of full never gets asked. Categories feel pedantic until the week ends with a lot of walking and a vague sense that the jar must have been opened somewhere along the way.",
          "Two habits. When you record activity, name the action and the kind of demand, sustained or resistance or neither, instead of the feeling. And when you are not sure how much resistance something involved, write uncertain rather than rounding up; an honest gap is more useful than a flattering guess.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Compare the demand, not the venue",
      alt: "Walking to the garden illustrates sustained movement; moving supplies illustrates resistance with the actual demand left unspecified.",
      caption: "Compare the two cards by the kind of demand, not by where they happened. The walk is the dog walk: repeated movement over time, with the effort depending on the person. Moving supplies is the jar: muscles against resistance, with the actual load left unspecified on purpose. Neither card names a suitable weight or a complete programme, and neither should.",
      items: [
        { label: "Walking to the garden", detail: "Repeated movement over time; effort depends on the person." },
        { label: "Moving supplies", detail: "Muscles act against resistance; load and suitability are unspecified." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A list of recent familiar activities", "The linked NHS examples"],
      steps: [
        "List three activities you have already done this week. Do not add a new one to make the list look better; the exercise is about describing, not doing.",
        "For each, write whether it was mainly sustained movement, mainly resistance, some of both, or little of either. Dog walk, jar, both, or neither.",
        "Compare your labels with the NHS examples and put a question mark beside any you are not sure about. Carrying shopping might be resistance or might be very little, and you may not know.",
        "Write one limitation of your list, such as not knowing how heavy anything was or which muscles did the work. That sentence is what stops the list turning into a plan.",
      ],
      notice: "Your list says more than busy. It distinguishes kinds of demand and keeps the uncertain ones marked as uncertain, which is exactly as much as a description can honestly claim.",
      troubleshooting: "If every task that involved picking something up has become strengthening, you have let the object certify the activity. Go back and keep only the resistance you actually know about; a light tray is not a jar.",
    },
    recall: {
      prompt: "A person cycles regularly and assumes that covers every kind of adult activity guidance. What distinction should they inspect?",
      hint: "One familiar activity need not supply every demand.",
      answer: "They should look at their week through both categories rather than one. Cycling is the dog walk, sustained movement that works breathing and circulation, and it clearly involves the legs pushing against pedals, so it is not nothing on the strength side either. But the name cycling does not tell you whether the resistance was enough, how often, or which muscles beyond the legs were asked to do anything. Adult guidance includes both aerobic and muscle-strengthening activity, so the honest question is what in their week, if anything, is the jar. If the answer is unclear, write unclear rather than assuming the bike covered it.",
    },
    quiz: {
      question: "Which conclusion is justified after listing walking and occasional supply handling?",
      options: ["The tasks involve different demands that need describing.", "The walk automatically covers the resistance supplied by handling objects.", "Total time at the garden establishes the type of activity completed."],
      correctIndex: 0,
      explanation: "Walking and occasional supply handling involve different kinds of demand, and the only justified next step is to describe them separately, the dog walk and the jar. The walk cannot automatically cover the resistance in handling objects, because sustained movement and muscles against a load are different things. Total time at the garden includes an hour of seated sorting, so it says how long Rafi was there and nothing about what kind of activity he did.",
    },
    takeaway: "A dog walk and a stiff jar are both things your body does and neither stands in for the other, so describe each activity by its kind of demand, sustained or resistance or neither, mark what you do not know, and keep the description from quietly turning into a plan to lift more.",
    sourceNote: "Inherited NHS and WHO guidance distinguishes activity types. This classification exercise sets no repetitions, loads, intensity targets, or individual exercise prescription.",
  },
  {
    id: 'wellbeing-009',
    outcome: "Count the short stretches of movement already in a day, keep waiting and seated time out of the total, and record the contribution honestly without claiming it covers every activity need.",
    scene: "A library errand leaves several short familiar walking segments instead of a planned long outing.",
    sections: [
      {
        title: "The long outing no longer fits",
        paragraphs: [
          "Isha had planned a long walk this afternoon. Then it rains, the morning runs over, and the long walk is gone. What is left is a library errand: a few minutes to the bus stop, a short stretch from the bus to the library, a quick detour on the way back. Her first instinct is to write the day off. No walk, no activity, nothing to show.",
          "Look at what that verdict is actually measuring. It is comparing the afternoon to a plan that did not happen, and marking the real afternoon zero for failing to be the imaginary one. That is a comparison with an absent ideal, not a description of the day. A few minutes of walking is still walking, even when it was never the main event, and a record that only counts main events will miss most of a life.",
        ],
      },
      {
        title: "Duration is not an entrance requirement",
        paragraphs: [
          "Think of a coin jar on a shelf. Nobody refuses to drop in a twenty-pence piece because it is not a banknote. Small coins go in, the jar fills, and at the end of the month there is real money in it. Two things are also true about the jar. The coins have to be coins; dropping in buttons to make it look fuller fools nobody for long. And a jar of coins is not a salary. It contributes without pretending to be the whole income.",
          "WHO guidance on physical activity takes the coin-jar view. Activity accumulated across a day counts, and some activity is better than none. That removes a quiet assumption many people carry: that movement only counts once it fills a large uninterrupted slot, the way a walk only counts if it was the planned long one. The guidance does not say every short task is equal in demand; a brisk three minutes and a dawdling three minutes are different coins. And it does not say a handful of short walks covers the full range of what adult guidance describes. Counting a contribution and claiming completeness are two separate decisions. A good record makes the first without sliding into the second.",
        ],
      },
      {
        title: "Add the movement, not the waiting",
        paragraphs: [
          "Here is Isha's afternoon with numbers. Five minutes walking to the stop. Three minutes from the bus to the library door. Four minutes on a later errand. That is twelve minutes of walking, and twelve goes in the jar. The twenty-five minutes sitting on the bus does not, because sitting is not a coin; it is a button, and it stays out of the total however much of the afternoon it took up.",
          "The arithmetic is there to show how to record, not to set a target or to recommend her route to anyone. Two limits keep it honest. If a safe connection leaves no spare time, she does not invent a rushed detour to add coins; a short opportunity is an option, never an obligation to fill every gap. And if she does not actually know how long a segment took, she writes the segment down without a number rather than guessing one. A jar with honest coins in it tells her something. A jar padded with estimates and buttons tells her nothing.",
        ],
      },
      {
        title: "Why the cancelled plan wins the argument",
        paragraphs: [
          "A plan is vivid and a few minutes of walking is not, so when the plan collapses it takes the whole day's self-assessment with it. All or nothing feels like high standards. In practice it means the record only ever shows the days when the big thing happened, and those are the rare days.",
          "Two habits. When a plan falls through, list what actually happened before you grade the day. And keep the jar honest in both directions: never drop in waiting time to make it look fuller, and never leave out real movement because it was too small to feel like exercise.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Three short movement segments",
      alt: "Five, three, and four minutes of walking occur at different points in an example afternoon, totalling twelve minutes.",
      caption: "Read only the three labelled segments and add them: five, three, four, twelve. The bus journey between the first two is not drawn, because sitting is not a coin and does not go in the jar. The timeline is not to scale and the total is a record of one invented afternoon, not an amount to aim for.",
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
        "Look at today's ordinary tasks and list every short, familiar stretch of movement that was already in them. You are collecting coins that are already on the floor, not earning new ones.",
        "Put waiting, seated travel, and anything you are unsure of in a separate column. Those are buttons; they stay out of the jar no matter how much of the day they took.",
        "If you know how long each stretch took, add them up. If you do not, describe the segment and leave the minutes blank. An honest blank beats an invented number.",
        "Write two sentences: what the record shows, and what it cannot tell you about your week as a whole. The second sentence is what stops a dozen minutes from pretending to be a complete pattern.",
      ],
      notice: "Small contributions are visible on the page without being promoted into proof that every activity need is covered. The jar has coins in it, counted honestly, and you know it is a jar.",
      troubleshooting: "If there were no feasible movement opportunities today, leave the list empty. An empty jar is an accurate record; an unsafe or inaccessible detour added to fill it is not.",
    },
    recall: {
      prompt: "A planned dance class is cancelled, but someone moved during several household tasks. Should the record become zero activity?",
      hint: "The cancelled plan and completed actions are different facts.",
      answer: "No. The cancelled class is a plan that did not happen; the household tasks are things that did. Write down the movement that actually occurred, carrying washing upstairs, moving furniture, whatever it was, and be straight about its duration and how demanding it felt. Those are real coins and they go in the jar. What you do not do is call them equivalent to the dance class or to a full week of activity; they contribute to the total without standing in for the whole. Zero would be a record of the plan, not of the day.",
    },
    quiz: {
      question: "What follows from adding the example's five, three, and four minute segments?",
      options: ["Include all travel time because the segments belong to one errand.", "Twelve minutes were recorded, without proving a complete activity pattern.", "The same twelve-minute total establishes equal effort on any route."],
      correctIndex: 1,
      explanation: "Adding five, three, and four gives twelve minutes of recorded walking, and that is all it gives: a contribution, not evidence of a complete activity pattern. Travel time on the bus does not join the total just because it belonged to the same errand; sitting is a button, not a coin. And the same twelve-minute total on a different route, or for a different person, could involve quite different effort, so the number describes this afternoon and nothing wider.",
    },
    takeaway: "Treat movement like coins in a jar: short stretches count and add up, waiting time is a button that stays out, an honest blank beats a guessed number, and a jar of coins is a contribution, never a claim that the whole week is covered.",
    sourceNote: "WHO supports contributions from activity across the day. The durations are invented arithmetic, not recommended amounts or an exercise prescription.",
  },
  {
    id: 'wellbeing-010',
    outcome: "Treat a warm-up as the slip road onto an activity, something you still need when you arrive late, and ask about a suitable entry point or sit out rather than matching a room that started earlier.",
    scene: "A community dance participant arrives late and considers joining an already demanding sequence.",
    sections: [
      {
        title: "The group is already moving",
        paragraphs: [
          "Tara is late to her community dance session. By the time she gets in, the gentle introduction is long over. The group is deep into a fast, demanding sequence. The music is loud, everyone is moving, and the obvious thing to do is slip into the back row and pick up the phrase. Standing still while twenty people move feels worse than joining in.",
          "But joining the current phrase matches the room's clock, not Tara's body. Everyone else has had fifteen minutes of gradual build-up. She has had a bus ride and a cold corridor. The social pressure to blend in is doing its best to hide that difference. The useful move is small and slightly awkward. Catch the facilitator's eye, say she has just arrived, and ask where a sensible entry point would be.",
        ],
      },
      {
        title: "Preparation has a different purpose",
        paragraphs: [
          "A slip road exists so that a car can get up to motorway speed before it joins the traffic. Nobody pulls straight out of a lay-by into the fast lane because everyone else is already doing seventy. The fact that the traffic is fast is exactly why you need the slip road. The other cars being at speed tells you nothing about whether your engine is ready. It tells you what you have to get up to before you merge.",
          "A warm-up is the slip road. It introduces activity gradually before the main demand. That gives the body time to move into the task, and it gives the person time to pay attention to what the movements involve. NHS guidance includes warming up before exercise, and that is the extent of what the guidance establishes. It does not mean every movement in a published example routine suits every person. It does not mean a warm-up makes injury impossible. And notice what preparation is not. It is not a competition, not a flexibility demonstration, and not a way of proving readiness by going hard early. Getting onto the slip road and flooring it is missing the point of the slip road.",
        ],
      },
      {
        title: "Keep the entry point flexible",
        paragraphs: [
          "Tara asks for two things: the session's usual preparation option, and permission to join at a later suitable point once she has done it. The facilitator points her to a corner and tells her which phrase is coming up after the current one. If no appropriate entry turns out to be available, sitting this one out is a complete and respectable answer. It is not a failure.",
          "What she has changed is her participation, not her body. She is not trying to physically catch up with people who started earlier. That would mean doing the demanding sequence with less preparation than anyone in the room. Two boundaries. A lesson written for everyone cannot say which movements or how much range are suitable for Tara. That is between her, the facilitator, and anyone advising her personally. What transfers is the shape of the decision: reserve a preparation stage, adapt the entry around it, and never treat arriving late as a reason to skip the slip road.",
        ],
      },
      {
        title: "Why blending in feels safer than it is",
        paragraphs: [
          "In a room full of people moving in time, the body wants to match the room. That instinct is social, not physical. It is about not being the one standing still. The cost of asking where to join is a few seconds of being visibly late. The cost of merging from a standstill is paid by a body that nobody else in the room can feel.",
          "Two habits. When you arrive after the start of anything physical, ask what preparation the others had and make a version of it before you join. And keep sitting out on the list of acceptable outcomes. It should never feel like the only alternative to catching up is to pretend you were on time.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Arrival is not the main effort",
      alt: "A late arrival is followed by a preparation decision before any suitable entry into the dance session.",
      caption: "Read the three steps as a decision order, with the middle one as the slip road. Arriving is not the main effort, and joining is not automatic; between them sits the check for a suitable preparation option. The last step has two honest outcomes, join later or sit out. Durations are not shown because they depend on the activity and on individual guidance.",
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
        "Pick a recreational activity you already know. Keep this as a written planning exercise; nothing in it needs you to stand up, and the lesson gains nothing from a demonstration.",
        "Name the activity's main demand in one line, and the preparation stage that normally comes before it. That stage is the slip road; if you cannot describe it, that is a question for step three.",
        "Draft the sentence you would say to the facilitator if you arrived late: that you have just arrived, and a question about an appropriate way in. Write it so it is easy to say in a loud room.",
        "Add the option of sitting out, in writing, as an acceptable outcome. Plans that only allow joining tend to produce rushed preparation or copied movements that were never meant for you.",
      ],
      notice: "Your plan keeps preparation separate from the main activity, gives you a sentence to say when you are late, and includes a usable alternative to joining. Nobody has been asked to catch up physically with a room that started earlier.",
      troubleshooting: "If you do not know what suitable preparation for the activity looks like, write that down as an unresolved question for the facilitator rather than inventing a routine. Not knowing is fine; guessing with your body is the thing to avoid.",
    },
    recall: {
      prompt: "A casual game starts before a newcomer has prepared. Does matching the group's first turn settle their readiness?",
      hint: "Group timing and individual preparation are separate.",
      answer: "No. The group being ready is a fact about the group, like traffic already at seventy; it says nothing about the newcomer, who has had no slip road. Matching the first turn matches the game's clock, not the person's preparation. The newcomer can ask what the others did to get ready and do a version of it, join at a later point, or decline this round and watch. All three are complete answers. Pulling straight into the fast lane because everyone else is already moving is the one option the lesson rules out.",
    },
    quiz: {
      question: "Which response to arriving late preserves the role of preparation?",
      options: ["Start with a shorter version of the group's current sequence.", "Copy another person's earlier warm-up without checking whether it suits you.", "Ask about suitable preparation and a later entry point."],
      correctIndex: 2,
      explanation: "Asking about suitable preparation and a later entry point is the only response that puts a slip road before the merge; it checks what the body needs rather than what the room is doing. A shorter version of the group's current sequence is still the main sequence, just less of it, and it skips the preparation entirely. Copying someone else's earlier warm-up without checking whether it suits you borrows a routine built for a different body and calls it readiness.",
    },
    takeaway: "The other cars already being at speed is the reason you need the slip road, not a reason to skip it: when you arrive late to anything physical, ask what preparation the others had, do a suitable version of it or sit out, and never let blending in with the room stand in for getting your own body ready.",
    sourceNote: "NHS guidance explains warming up. This original planning exercise specifies no movements, range, repetitions, or guarantee of safety and is not individual exercise advice.",
  },
  {
    id: 'wellbeing-011',
    outcome: "Adjust chair height and foot support as one set with the desk, so fixing keyboard reach does not cost you back contact or dangling feet, and name the missing piece when the room cannot provide it.",
    scene: "A borrowed chair is raised to a fixed desk, leaving the user's feet without support.",
    sections: [
      {
        title: "One adjustment changes another contact",
        paragraphs: [
          "Jules is working in a shared project room on a borrowed chair at a desk that does not adjust. The keyboard is a little high, so Jules cranks the chair up until the shoulders can relax and the hands sit comfortably on the keys. Better. Then, a minute later, a new problem: both feet are now dangling, toes brushing the floor. Jules slides forward on the seat until the toes reach. That fixes the feet and leaves the back hanging in space with nothing behind it.",
          "Every one of those moves made sense on its own, and together they produced a worse position than the one Jules started with. The lesson is not that any one body part was wrong. It is that desk height, chair height, where you sit on the seat, and what your feet rest on are a set. Change one and the others move, whether you meant them to or not.",
        ],
      },
      {
        title: "Support should not require hovering",
        paragraphs: [
          "Anyone who has set up a bicycle knows this trap. Raise the saddle so your legs can pedal properly and suddenly you cannot get a foot flat on the ground at the lights. Lower the saddle so you can stand at the lights and now your knees are up by your ears when you pedal. The saddle was never the whole problem. The bike is a set of relationships between saddle, pedals, and ground, and the real fix might be a different frame, not a compromise height that is bad for both jobs.",
          "A workstation is the same set with different names. A supported foot has somewhere stable to rest, so the legs are not holding it up all day. A supported back can lean into the chair, so the person is not perched on the front edge to reach the floor. OSHA's workstation guidance includes both of those contacts, alongside the desk and keyboard. Solving the keyboard by taking away the feet, as Jules did, trades one awkward demand for another. Dropping the chair back down to restore the feet trades it straight back. Now the shoulders rise to reach the keys. Neither extreme is correct. The only way out is to look at the relationships together and find the piece of the set that is actually missing.",
        ],
      },
      {
        title: "Test the whole setup",
        paragraphs: [
          "In this room, the missing piece is in the corner: a proper footrest, stable, intended for the job. Jules keeps the chair at the height that suits the keyboard. The footrest goes where both feet can rest flat on it. Jules slides back so the backrest is doing its work, then checks the keyboard again with the shoulders relaxed. All three contacts are in place at once. There is still room to shift about, and still room to stand up and sit down without a performance.",
          "Two cautions. A pile of books, a box, or a bag is not a footrest; it moves, it tips, and a support you have to balance on is not support. And if the room has no suitable equipment, the correct result of the exercise is to write down what is missing and ask for it. A footrest, a different chair, an adjustable desk. Forcing a position that works for nothing is not an adjustment. The diagram shows the three contacts as a set to inspect, not a pose to hold rigidly all afternoon.",
        ],
      },
      {
        title: "Why one fix at a time goes wrong",
        paragraphs: [
          "Each adjustment is judged by the discomfort it was meant to relieve, so each one looks like a success at the moment it is made. The shoulders relaxed, so the chair height was right. The toes reached, so sliding forward was right. Nobody checks the back until the afternoon, and by then it is just how this chair feels.",
          "Two habits. After any single workstation change, run the full check, back, feet, shoulders, reach, before you call it done. And when the set cannot be satisfied with what is in the room, name the missing piece instead of balancing on a substitute.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Keep all three supports in view",
      alt: "A side-view sketch places back support behind a seated user, the desk ahead, and stable foot support below.",
      caption: "Look at the three contacts as one set: back support behind, desk and input ahead, stable foot support below. The two arrows mark the contacts that most often get lost when the chair goes up or down. This is a relationship sketch, like a bike with saddle, pedals, and ground; it gives no joint angles, no dimensions, and no universal posture to hold.",
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
        "Sit as you normally work and run the check in order: is your back using the backrest, and do both feet have a stable surface to rest on? These are the two contacts that quietly disappear when the chair moves.",
        "Reach for the keyboard and notice what your body does. If the shoulders rise, or you slide forward off the backrest to get there, a relationship in the set has shifted; name which one.",
        "Make one change that is actually available: a chair adjustment, or a proper stable footrest if the room has one. No stacks of books, no boxes; a wobbling substitute is the saddle set to a height that suits nothing.",
        "Recheck all of it: typing reach with relaxed shoulders, back contact, foot support, and whether you can still shift position and get in and out of the chair easily. One change, full check.",
      ],
      notice: "Fixing the desk reach no longer costs you support somewhere else. All three contacts hold at the same time, and you can say which piece of the set you changed to get there.",
      troubleshooting: "If the equipment in the room cannot satisfy all three contacts at once, do not force a compromise that is bad for everything. Write down the mismatch, chair too low for the desk, no footrest available, and request the appropriate adjustment; identifying the missing piece is a successful outcome.",
    },
    recall: {
      prompt: "Lowering a chair restores foot contact but makes someone lift their shoulders to type. What has happened?",
      hint: "One contact improved while another relationship changed.",
      answer: "They have swapped one problem for another, the bike saddle lowered so the feet reach the ground and the knees are now cramped on the pedals. Lowering the chair restored the feet and broke the relationship with the desk, so the shoulders are doing the work the chair height used to do. Neither the high chair nor the low chair is correct, because the set has a missing piece: with a fixed desk, the chair needs to suit the keyboard and the feet need their own stable support, a footrest, so that both contacts hold together. Declaring the lower chair right because the feet are happy repeats the mistake in the other direction.",
    },
    quiz: {
      question: "A raised chair fits a fixed desk but leaves the feet unsupported. What should be checked next?",
      options: ["Lower the chair until the feet reach without rechecking the desk.", "Suitable foot support alongside back contact and typing reach.", "Add back cushioning while leaving the feet without a resting surface."],
      correctIndex: 1,
      explanation: "Suitable foot support, checked alongside back contact and typing reach, is the only option that treats the position as a set; it is adding the right piece rather than compromising the saddle height. Lowering the chair until the feet reach, without rechecking the desk, undoes the keyboard fix and brings the shoulders up. Adding back cushioning while the feet still dangle addresses a contact that was not the problem and leaves the one that was.",
    },
    takeaway: "A chair, a desk, and your feet are a set like a saddle, pedals, and the ground: fixing one by sacrificing another is not a fix, so after any single change run the whole check, add the missing piece of support rather than balancing on a substitute, and when the room cannot provide it, say so.",
    sourceNote: "OSHA's chair and position guidance supplies the support principles. The schematic is original and is not a personal ergonomic assessment or a treatment for discomfort.",
  },
  {
    id: 'wellbeing-012',
    outcome: "Put the screen you actually look at during the current task straight in front of you, fix small text by resizing rather than leaning, and recheck the chair and keyboard when the layout turns.",
    scene: "A video editor reads a side monitor while the laptop occupies the central desk position.",
    sections: [
      {
        title: "The central device is not the main task",
        paragraphs: [
          "Ali's laptop sits in the middle of the desk because that is where it has always lived. A bigger monitor sits off to the right because that is where there was space when it arrived. Today Ali is editing subtitles, and the subtitle list lives on the big monitor. For three hours, nearly every glance goes right. The chair, the keyboard, and the body all face straight ahead at a laptop that is mostly showing the clock.",
          "The desk is arranged by the history of the equipment, not by the work being done this afternoon. That is the whole problem. The screen that matters is the one receiving most of your attention during the current task, whatever the cable says it is. Today the so-called second monitor is the primary display, and the desk has not been told.",
        ],
      },
      {
        title: "Direction and readability work together",
        paragraphs: [
          "Most living rooms have a television pointed at the sofa it faced on the day it was unpacked, even when everyone now sits in the armchair by the window. The family watches with their heads turned, evening after evening. Moving the television feels like a project and turning your head feels like nothing. Then someone finally swivels the stand to face the armchair, and the relief is immediate and slightly embarrassing. It was never about the television. It was about where the people actually look.",
          "OSHA's workstation guidance says the same thing in plainer terms. Position the monitor so you can look at it comfortably straight ahead, with the top of the screen generally at or below eye level. That is the direction problem, and swivelling the television solves it. There is a second, separate problem: readability. A screen can be perfectly centred and still make you lean in because the text is too small or the screen is too far away. Making the text bigger fixes that, but it does nothing about a head turned sideways. Position, distance, and text size are related levers for different faults, and you have to pull each one. One caution on height. Glasses, especially ones with a reading section at the bottom, change where the comfortable viewing angle is. The general height rule should never become a demand to lift your chin.",
        ],
      },
      {
        title: "Rebuild around the subtitle task",
        paragraphs: [
          "Ali swivels the television. The subtitle monitor comes into the straight-ahead position and the laptop moves to the side as an occasional reference. Then, sitting comfortably, Ali bumps up the text size on the subtitle list until it is readable without leaning forward. Two faults, two levers. The chair and keyboard get a second look too, because turning only the screen can leave the hands pointing at where the screen used to be.",
          "Tomorrow Ali might spend the day writing on the laptop, and then the layout deserves another look, because the primary display has changed again. That is the real principle. Equipment should follow the active task. A desk that assigns one fixed neck position to every job will be right for whichever job it was set up for and wrong for all the others.",
        ],
      },
      {
        title: "Why the layout outlives the task",
        paragraphs: [
          "Furniture has inertia and heads do not. Moving a monitor takes a minute and a decision. Turning your head takes nothing and no decision at all, so the head always wins in the moment and loses over the afternoon. The layout stays where it landed and the body quietly adapts to it.",
          "Two habits. When you start a task that will last more than a few minutes, ask which screen you will actually be looking at and whether it is in front of you. And when you catch yourself leaning in to read, change the text size before you change your posture.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Put the active display ahead",
      alt: "In a top-view layout, the user faces the main subtitle display; an occasional laptop reference sits off to the side.",
      caption: "Follow the single arrow from the user to the main subtitle display: that is the television now pointed at the armchair. The laptop sits to the side as an occasional reference, not as the thing the body faces. This shows direction only; screen height, readable text size, and comfortable distance are separate checks that the diagram does not make for you.",
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
        "Start with your current task, not your usual one, and work out which screen your eyes go to most. That screen is the primary display today, regardless of what the computer calls it.",
        "If it can be moved safely, bring that screen into a comfortable straight-ahead position. This is swivelling the television to face where you actually sit.",
        "Open a page of ordinary text on it and, before you lean in, increase the text size until you can read it from a comfortable sitting distance. Readability is the second lever; do not pay for small text with your neck.",
        "With the page open, check the rest of the set together: screen height for your eyes and glasses, keyboard pointing where you now face, chair position. Turning one piece often leaves another pointing at the old layout.",
      ],
      notice: "You can read the main text while facing it comfortably, without a sustained turn and without leaning in. The desk is arranged around the task you are doing, not the day the equipment arrived.",
      troubleshooting: "If the monitor or furniture cannot be moved safely on your own, ask for help or use a different station rather than shifting heavy hardware by yourself. A pulled back to fix a turned neck is not a trade worth making.",
    },
    recall: {
      prompt: "During a presentation review, a side screen becomes the main display for an hour. Which layout assumption should change?",
      hint: "Primary describes current use, not the connector number.",
      answer: "The assumption that the central screen is the main one. For that hour the side screen is where the eyes go, so it is the primary display in every sense that matters, like the armchair becoming the real seat. The forward viewing position should move to it: turn the screen toward you or turn the chair and keyboard toward the screen, and check that your hands are not still pointing at the old layout. Primary describes where you are looking right now, not which connector the cable is in, and when the hour ends and the task changes, the layout gets looked at again.",
    },
    quiz: {
      question: "Text is centered but too small to read without leaning. Which change addresses the remaining issue?",
      options: ["Raise the screen until its centre reaches eye level.", "Keep the settings fixed and rely on reminders to sit farther back.", "Increase readable text size and recheck a comfortable distance."],
      correctIndex: 2,
      explanation: "The text being centred has solved direction; the leaning tells you readability is still broken, and that is a separate lever. Increasing the text size and then rechecking a comfortable distance fixes the fault that is actually there. Raising the screen so its centre reaches eye level changes height, which was not the complaint, and can push the comfortable angle upward, especially with glasses. Relying on reminders to sit back leaves small text in place and asks the body to keep compensating for it.",
    },
    takeaway: "Point the screen at where you actually look, like finally turning the television toward the chair everyone sits in, then fix small text by making it bigger rather than by leaning in, check the chair and keyboard followed the turn, and expect to do it again when the task changes.",
    sourceNote: "Inherited OSHA monitor and position guidance informs this layout. The original diagram specifies no exact distance or individualized screen height.",
  },
  {
    id: 'wellbeing-013',
    outcome: "Move whatever sits between you and the keyboard, bring the keyboard into relaxed reach, and then check its tilt separately by typing a real sentence and watching your wrists.",
    scene: "A home transcription desk has a notebook and thick wrist rest crowding the typing area.",
    sections: [
      {
        title: "The keyboard is tidy but distant",
        paragraphs: [
          "A home transcription desk, set up with care. A notebook lies neatly between the user and the keyboard, where it is easy to grab. A thick wrist rest takes up most of the near edge. From the doorway it looks organised. From the chair, every line of typing means the shoulders roll forward and the arms stretch out. The keyboard is a notebook's width further away than the hands want it to be.",
          "The notebook is in the right place for storing and the wrong place for typing, and those are different questions. A tidy desk is arranged for how things look when nobody is using them. A usable desk is arranged for where the hands go when somebody is. The first change here is not a reminder to sit up straight, repeated every hour and forgotten every hour. It is to move the thing that is in the way.",
        ],
      },
      {
        title: "Reach and tilt create different demands",
        paragraphs: [
          "A car seat has two separate adjustments for a reason. One slides it forward and back so your feet reach the pedals. The other reclines the backrest so your back is comfortable. Nobody fixes a seat that is too far from the pedals by tilting it. Slide and tilt are different levers for different complaints, and getting one right tells you nothing about the other.",
          "Keyboards have the same two levers. OSHA describes typing with relaxed shoulders, elbows near the body, and wrists roughly in line with the forearms, and two separate things can break that picture. Distance is the slide: a keyboard that is too far away pulls the shoulders forward even if every key feels fine once you get there. Angle is the tilt: a keyboard propped steeply on its rear feet bends the wrists upward even when it is close enough. People often flip up the rear feet because it makes the keys easier to see, and that is the wrong reason. The useful angle is whichever one keeps the wrists level for your hands, in your chair, at your desk. Visibility is a different problem with a different fix.",
        ],
      },
      {
        title: "Test with ordinary typing",
        paragraphs: [
          "The notebook moves to the side of the typing area, still within reach, no longer in the approach. The keyboard comes in to where the elbows can stay close. Then the test, which is not a posture check but a job: type a sentence you know by heart and watch your wrists. If they angle upward, lower the rear feet if the keyboard lets you. If a wrist rest has become a hard edge the wrists press into mid-sentence, it is doing harm in the name of support.",
          "Judge the result across the whole reach, not one joint at a time: hands, shoulders, the desk edge, the chair height, together. And notice what a good setup allows. It allows you to pause, shift, lean back, and come back, rather than demanding one fixed pose held all afternoon. A desk that only works when you sit perfectly still is a desk that works for about four minutes.",
        ],
      },
      {
        title: "Why the tidy desk wins",
        paragraphs: [
          "Storage is visible and reach is not. You can see at a glance whether the desk is neat. You cannot see, from outside your own body, that your shoulders have been forward for an hour. So the layout gets optimised for the thing that can be seen, and the body quietly pays for the thing that cannot.",
          "Two habits. When typing feels like effort, look first at what is between you and the keyboard before you look at yourself. And treat distance and angle as two separate dials, slide and tilt, each checked with a real sentence rather than by how the keys look.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Clear the typing approach",
      alt: "A top-view sketch places the keyboard in front of the user and moves the notebook to the side of the reach path.",
      caption: "Follow the arrow from the user to the keyboard: that is the typing approach, and it is empty now. The notebook sits off to the side, out of the path but still within reach. The arrow is about a clear route, not arm length, and it says nothing about tilt; the keyboard angle has to be checked from the chair with your own wrists.",
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
        "Sit where you normally type and look at the space between your chest and the keyboard. Anything sitting there, a notebook, a mug, a thick rest, is the vase in the middle of the table. Name it.",
        "Move your own nonessential items out of the approach and slide the keyboard in until your elbows can stay near your sides. This is the seat slide; do it before you touch the tilt.",
        "Type a sentence you know by heart, slowly, and watch your wrists rather than the screen. If they bend upward, the keyboard is tilted too steeply for your hands, whatever it does for visibility.",
        "Adjust the rear feet if the keyboard allows it, then recheck the whole reach: shoulders relaxed, wrists level, no hard edge pressing into the wrists, chair height still right for the desk. Slide, then tilt, then the whole set.",
      ],
      notice: "Typing no longer means reaching around an object or holding your wrists at an angle the keyboard chose for you. You can name which lever you moved, distance or angle, and why.",
      troubleshooting: "If bringing the keyboard closer makes the desk edge dig into your forearms, the problem has moved to chair and input height; go back and reassess those rather than forcing the closer position. And if the keyboard cannot be tilted, note that as a limitation of the equipment, not a reason to bend your wrists to meet it.",
    },
    recall: {
      prompt: "A new keyboard is close enough, but its raised rear feet tilt the hands upward. Is distance the remaining problem?",
      hint: "Position and angle are different settings.",
      answer: "No. The slide is fine; it is the tilt that is wrong. A keyboard can be at exactly the right distance and still bend the wrists upward because its rear feet have propped the back edge high, like a car seat that is close enough to the pedals but reclined at a silly angle. Lower the feet if it lets you, then type a familiar sentence and check the wrists are level. And check the relationship to chair and desk height too, because a steep angle sometimes feels necessary only because the whole keyboard is sitting too high. Distance being right settles one dial of two.",
    },
    quiz: {
      question: "A notebook pushes the keyboard beyond relaxed reach. Which change tests the most direct cause?",
      options: ["Move the notebook and recheck keyboard placement.", "Raise the keyboard's rear feet to make the keys easier to see.", "Add desk-edge cushioning without clearing the notebook from the approach."],
      correctIndex: 0,
      explanation: "The notebook is the obstacle pushing the keyboard out of relaxed reach, so moving it and rechecking placement tests the cause directly; it is the vase coming off the table. Raising the rear feet changes the angle, which is the other dial, and does it for visibility rather than for the wrists. Cushioning the desk edge without clearing the notebook treats a symptom of the reach while leaving the reach itself exactly as long.",
    },
    takeaway: "Clear whatever sits between you and the keyboard before you blame your posture, then treat distance and angle as two separate dials like a car seat's slide and recline, each checked by typing a real sentence and watching your wrists rather than by how the keys look.",
    sourceNote: "OSHA keyboard and position references inform these checks. The exercise is a reversible setup inspection, not a prescribed posture or treatment for hand symptoms.",
  },
  {
    id: 'wellbeing-014',
    outcome: "Explain why raising a laptop moves the screen and the keyboard together, and how a separate keyboard and mouse let viewing height and typing height be set independently.",
    scene: "A laptop is lifted on a stable stand for a long application-writing session.",
    sections: [
      {
        title: "The screen rises with the keyboard",
        paragraphs: [
          "Morgan has a long application to write and a laptop to write it on. Hunched over the low screen for the first hour, Morgan borrows a sturdy stand from the shelf and lifts the laptop up. The screen is now much closer to eye level and the neck is grateful. Then Morgan starts typing again. The keyboard, being part of the laptop, has risen just as far. The arms are now lifted toward it like someone playing a piano on a high shelf.",
          "Both halves of that are real. The viewing improved. The typing got worse. That is not a mistake in how Morgan used the stand; it is what a laptop is. The screen and the keyboard are one object, and moving the object moves both. There is no stand height that gives you a screen at eye level and a keyboard at elbow level at the same time, because the two are a fixed distance apart.",
        ],
      },
      {
        title: "Independent controls resolve a coupled problem",
        paragraphs: [
          "On a bicycle, the saddle and the handlebars adjust separately, which is why one frame fits many bodies. Now imagine a bike where the handlebars were welded to the seat post. Raise the saddle so your legs can pedal and the bars come up with it, into your chest. Lower the bars to where your arms want them and your knees hit your chin. Nobody could set that bike up well. It is not a lack of skill; one lever is being asked to do two jobs.",
          "A laptop is the welded bike. OSHA's guidance for screens and keyboards concerns two different relationships: comfortable viewing for the eyes and neck on one side, and relaxed shoulders with level wrists for the hands on the other. A desktop workstation satisfies both because the monitor and keyboard are separate objects. A laptop on a stand satisfies one. The way out is not a cleverer stand; it is to cut the weld. Plug in a separate keyboard and mouse, leave the laptop up at viewing height, and the hands get their own height back. The mechanism is nothing more than separation. A branded stand does not do it. A stand that raises the screen half of the problem while you keep typing on the raised laptop leaves the two demands exactly as coupled as before.",
        ],
      },
      {
        title: "Use available equipment honestly",
        paragraphs: [
          "Morgan has a spare keyboard and mouse in a drawer. They go on the desk within easy reach, the laptop stays on the stand, and now the screen and the hands are at two different heights, which is the whole point. Three small checks follow. The stand is stable and not a stack of books. The laptop's vents are not blocked by the stand or a cushion. The cables do not cross where feet go. And text size gets checked before anyone leans toward the screen to read it.",
          "Without separate input, this arrangement does not solve typing, and it is better to say so than to pretend. For a short task, a lower laptop and some hunching may be the honest compromise. For a long one, a different workstation or a borrowed keyboard may be worth the trouble. What the lesson gives you is the trade-off, clearly named. It does not give you one correct laptop height, because there is none that works for every task, every desk, and every body.",
        ],
      },
      {
        title: "Why the stand gets blamed",
        paragraphs: [
          "When typing gets worse after a stand goes in, the stand looks like the culprit, and some people take it out again and go back to hunching. But the stand did exactly what it was asked; it raised the laptop. The fault is in asking one object to be at two heights at once. Blaming the stand hides the real fix, which costs one cable.",
          "Two habits. Before raising a laptop, ask what else rises with it and whether you can separate the two. And when a setup improves one thing and worsens another, look for the weld rather than for a better compromise height.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Separate viewing from input",
      alt: "A side-view sketch shows a user viewing a raised laptop while reaching to a separate lower keyboard and mouse.",
      caption: "Follow the two arrows from the user. The view arrow goes up to the raised laptop; the input arrow goes down to a separate keyboard and mouse. Two arrows, two heights: that is the weld cut. The stand is assumed stable and ventilated, and the positions show independent functions, not actual furniture heights or body angles.",
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
      caption: "Compare what each setup lets you adjust, not what it looks like or costs. In the first, the screen and built-in keyboard are one object and rise together, the welded bike. In the second, the raised display and the separate input can sit at different heights because they are different objects.",
      items: [
        { label: "Stand alone", detail: "Screen and built-in keyboard rise together." },
        { label: "Stand plus separate input", detail: "Viewing and typing positions can differ." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["Your laptop setup", "Existing separate input devices if available"],
      steps: [
        "Before moving anything, look at your current laptop setup and note two things separately: how far your eyes look down to the screen, and where your hands sit to type. Two notes, because they are two problems.",
        "Imagine raising the laptop and ask what else comes up with it. If the answer is the keyboard, you have found the weld; write it down.",
        "If you own a separate keyboard and mouse, put the laptop on a stable raised surface and the input devices on a clear stretch of desk within relaxed reach. Then look at the screen and type a sentence, and notice they no longer share a height.",
        "Check ventilation, cable routes, and stand stability, and bump the text size before leaning in. If you have no separate input, write the trade-off down as unresolved instead of forcing a height that is wrong for one half of the job.",
      ],
      notice: "You can say which setting changes viewing and which changes hand position, and you can point at the one cable that separated them. If the two are still coupled, you know why and have said so.",
      troubleshooting: "If you do not have separate input or a stable stand, do not improvise the raised setup with a loose stack of books under the laptop. A wobbling laptop with blocked vents is worse than a low one. Record the limitation and choose a shorter session or a different workstation.",
    },
    recall: {
      prompt: "A tablet stand improves viewing, but typing on the raised touchscreen remains awkward. What design relationship is similar?",
      hint: "Display and input still occupy the same surface.",
      answer: "The tablet is the welded bike too. The display and the on-screen keyboard are the same piece of glass, so angling the stand for the eyes also angles the typing surface for the hands, and there is no stand position that suits both. If a separate keyboard can be attached, the two come apart and each can go where it belongs; if not, improving the display angle only ever fixes the viewing half. Saying the typing is still awkward is not a failure of the stand. It is the trade-off, correctly observed.",
    },
    quiz: {
      question: "A stand improves laptop viewing but leaves typing too high. Which arrangement allows independent adjustment?",
      options: ["Change screen tilt while typing on the raised laptop.", "Keep the raised display and use suitable separate keyboard and pointing devices.", "Lower the whole laptop until typing fits without rechecking viewing."],
      correctIndex: 1,
      explanation: "Keeping the raised display and using separate keyboard and pointing devices is the only option that puts viewing and typing at two different heights, which is what independent adjustment means; it cuts the weld. Changing screen tilt while still typing on the raised laptop leaves the hands exactly where the stand put them. Lowering the whole laptop until typing fits brings the screen back down with it and recreates the hunch the stand was meant to fix.",
    },
    takeaway: "A laptop is a bike with the handlebars welded to the saddle: raising it lifts the screen and the keyboard together, so no stand height can serve both, and the fix is to cut the weld with a separate keyboard and mouse or to name the trade-off honestly when you cannot.",
    sourceNote: "This applies inherited OSHA monitor and keyboard principles to a laptop. It is an original equipment comparison, not a guarantee of comfort or a buying recommendation.",
  },
  {
    id: 'wellbeing-015',
    outcome: "Give the pointing device a clear spot beside the keyboard before changing its shape, test the position with the real task, and name any remaining reach caused by desk width or clutter.",
    scene: "A photo-selection workstation puts the mouse beyond a bottle, charger, and wide keyboard.",
    sections: [
      {
        title: "The mouse gets the leftover space",
        paragraphs: [
          "Sana is going through four hundred photographs from a shoot, choosing the keepers. Every choice is a click. The desk has a wide keyboard in the middle, a water bottle and a phone charger to the right of it, and the mouse beyond those, in whatever space was left. So every click means reaching past the bottle and around the charger, and over the afternoon that is a few hundred reaches.",
          "The mouse is a small object and the reach is a small movement, but the task repeats it with almost every selection, and that is what turns small into significant. Sana's first thought is a different mouse, one of the shaped ones. That would change what the hand holds. It would not change where the hand has to go to hold it. Shape and position are two separate questions, and the second one is the one causing the reaching.",
        ],
      },
      {
        title: "Repeated reach is part of the task",
        paragraphs: [
          "Picture a kitchen where the salt lives on a far shelf behind the fruit bowl. You cook at the hob and reach past the bananas for the salt, every dish, every day. Buying a nicer salt cellar does nothing; the reach is the same with a prettier pot. Moving the salt next to the hob does everything. Nobody would call the pretty pot a solution, yet that is what a new mouse is when the real problem is where the old one sits.",
          "OSHA's guidance puts the pointing device close to the keyboard, so it can be used without the upper arm repeatedly swinging away from the body. The word that matters is repeatedly. One reach is nothing. A reach repeated every few seconds for an afternoon asks the shoulder to keep compensating for the desk layout, over and over. Two more things worth knowing. A tight grip is a separate demand, not a sign that the mouse is being used well; if you are clamping it, something about the position or the device is wrong. And the right fit depends on your hand, how you prefer to point, and the job you are doing. The word ergonomic printed on a box answers none of those questions about this desk and this person.",
        ],
      },
      {
        title: "Clear, place, and test",
        paragraphs: [
          "Sana moves the bottle and the charger to safe spots outside the active area, the bottle well away from the electrics. The mouse comes in beside the keyboard with enough clear surface to move it comfortably. If the keyboard is so wide that the mouse still sits further out than the arm wants, that is a real constraint to write down. It is not something to hide by swivelling the chair a few degrees and pretending.",
          "Then the test, which is just the job: a few dozen ordinary selections in the new position. Does the upper arm stay near the body? Is the grip relaxed? Is there enough room? Two checks that are easy to forget. Cable slack, so the mouse is not tugging at the end of its lead and snagging. And the route to a drink, because clearing the desk should not have put a full bottle somewhere it can be knocked over onto a keyboard.",
        ],
      },
      {
        title: "Why the mouse ends up in the gap",
        paragraphs: [
          "The keyboard is large and gets placed first. The bottle and the charger are things you put down without thinking. The mouse is small and movable, so it ends up wherever is left, and wherever is left is usually too far. Nobody chose the position; it was the residue of other decisions. That is exactly why it needs choosing on purpose.",
          "Two habits. Set the pointing device's spot before you put anything else on that side of the desk, and treat it as reserved. And when a repeated reach bothers you, move the thing you are reaching past before you shop for the thing you are reaching for.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Reserve space for the pointing device",
      alt: "A top-view layout places a mouse beside the keyboard and a drink outside the active input area.",
      caption: "Follow the arrow from the user to the mouse: it is short and nothing sits in its way, because the drink has been moved to the far side and out of the cable area. The keyboard's width is drawn on purpose, since it decides how close the mouse can come. The coordinates are a layout to inspect, not reach measurements, and the whole picture mirrors for a left-handed setup.",
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
        "Sit at your desk and point at the mouse without touching it. Notice anything your hand would have to go around or past to reach it: a bottle, a charger, a sketchbook. Those are the fruit bowl in front of the salt.",
        "Move those objects somewhere safe, with drinks away from cables and electrics. You are moving the salt to the hob, not buying a new pot.",
        "Bring the mouse in beside the keyboard with clear surface around it, and do a handful of ordinary selections, ten or twenty, in that position. The test is the real task, not a single click.",
        "Check four things before you accept the layout: the upper arm stays near your body, the grip is relaxed, there is enough surface to move on, and the cable has slack. If the keyboard's width still pushes the mouse out, write that down as the remaining constraint.",
      ],
      notice: "Repeated selections happen without reaching past the same obstacle each time, and your arm stays where it is comfortable. If a reach remains, you can name the exact thing causing it.",
      troubleshooting: "If the keyboard is too wide to let the mouse sit where the arm wants, say so rather than gripping harder or twisting your torso toward it. A compact keyboard or a different arrangement is a legitimate next question; a tighter grip is never the fix.",
    },
    recall: {
      prompt: "A new vertical mouse feels different in the hand but still sits beyond a sketchbook. Which problem remains?",
      hint: "Shape did not move the operating position.",
      answer: "The reach. A vertical mouse changes the shape in the hand, which may suit the wrist, but the sketchbook is still between the hand and the mouse, so every selection still goes around it. It is the pretty salt cellar on the far shelf. Shape and position are separate checks, and a product has only ever addressed the first. Move the sketchbook out of the operating area, bring the mouse in beside the keyboard, and then judge whether the new shape helps from a position that is actually reachable.",
    },
    quiz: {
      question: "After desk rearrangement, a mouse requires a sideways reach again. What should be tested first?",
      options: ["A closer clear operating position.", "A different mouse shape in the same distant position.", "A pointer-speed adjustment without inspecting the physical placement."],
      correctIndex: 0,
      explanation: "A reach that came back after rearranging is a layout problem, so the first test is a closer, clear operating position for the device; it is moving the salt next to the hob. A different mouse shape in the same distant position changes what the hand holds and leaves the reach untouched. Adjusting pointer speed changes how far the cursor travels per movement and says nothing about how far the arm travels to the mouse.",
    },
    takeaway: "Move the fruit bowl before you buy a nicer salt cellar: give the pointing device a reserved spot beside the keyboard, clear whatever sits in the way, test with the real task, and when the reach is caused by the keyboard's width, name that constraint instead of gripping harder.",
    sourceNote: "OSHA pointer and position guidance informs this reversible layout check. The diagram is not a reach measurement or proof that any device fits everyone.",
  },
  {
    id: 'wellbeing-016',
    outcome: "Treat daylight as a timing cue the body uses rather than a dose to complete, and plan an ordinary accessible daytime place to encounter it without inventing minutes or predicting sleep.",
    scene: "An indoor workshop participant chooses between an enclosed corridor and a shaded courtyard for a daytime pause.",
    sections: [
      {
        title: "A whole day inside connected rooms",
        paragraphs: [
          "Bea's training day runs from a windowless meeting room along an enclosed corridor to a basement dining area and back. By mid-afternoon she realises she has not seen the sky since arriving. During a break she spots a small shaded courtyard off the corridor, with a bench, a ramp, and a door that is actually unlocked.",
          "The choice in front of her is small: spend fifteen minutes in the corridor by the vending machine, or spend them on the bench outside. No alarm had to go off at dawn for this. No equipment is involved. It is simply two available places during the day, one with daylight and one without. Picking between them is a practical question, not a test of discipline or a ritual she has failed to perform.",
        ],
      },
      {
        title: "Light carries timing information",
        paragraphs: [
          "Imagine a village where the church bells ring at noon and everyone sets their watches by them. The bells do not make anyone tired or awake. They tell the body of the village what time it is, so that everything else, lunch, work, closing up, lines up. Spend a whole day in a cellar and you never hear the bells, and by evening your watch is a little off from everyone else's. Nobody would say the bells are medicine. They are a signal.",
          "Daylight is the village bell for the body. The body runs a roughly daily schedule, circadian timing, for things like sleepiness and alertness, and the NIH overview describes light and darkness as the major cues that keep that schedule set. That is why when and where you encounter light belongs in any honest account of an ordinary day. It is also where the honest account stops. A general lesson cannot tell you how many minutes outside you need, any more than a village could tell you how many seconds of bell to listen to. It cannot predict tonight's sleep from this afternoon's bench. Light varies with weather, season, place, and surroundings, and a courtyard that looks bright is not a measurement of anything.",
        ],
      },
      {
        title: "Choose the setting that is usable",
        paragraphs: [
          "Bea checks the two things that actually matter: the route is accessible, and the weather is fine. Then she takes the shaded bench and looks at ordinary things, the wall, the planter, her coffee. There is no reason to look toward the sun, and nothing in the lesson suggests it. She hears the bells by being in the square; she does not need to climb the tower.",
          "Tomorrow the courtyard door might be locked or it might be raining sideways, and the choice flips to the indoor option without any guilt attached. The point of the exercise is a usable plan for where to spend a daytime pause, plus a clearer idea of light as a signal rather than a treatment. It is not a claim that one afternoon outside will repair a bad night, and anyone promising that is selling something.",
        ],
      },
      {
        title: "Why daylight turns into a dose",
        paragraphs: [
          "People reach for numbers because numbers feel like control: twenty minutes, before nine, twice as long if cloudy. But a signal is not a dose. The bells work by being heard at roughly the right time, not by being heard for a prescribed duration. Treating daylight as a prescription turns a free, ordinary thing into another task to fail.",
          "Two habits. When you plan a day, notice whether it has any daylight in it at all, and if it does not, find the courtyard. And when someone hands you an exact outdoor duration as a rule, ask what measurement it came from; usually the answer is nowhere.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Two daytime pause locations",
      alt: "An enclosed corridor and a shaded accessible courtyard offer different light settings during the same daytime break.",
      caption: "Compare the two cards as settings, not scores. The corridor is indoors with no outdoor view; the courtyard has daylight and ordinary surroundings, when the route and the weather allow. Nothing here measures brightness, and a bright window should not be assumed to equal the bench outside. It is a choice of where to hear the bells, not a dose.",
      items: [
        { label: "Enclosed corridor", detail: "An indoor option without an outdoor view." },
        { label: "Shaded courtyard", detail: "Daylight and ordinary surroundings, when conditions and access suit." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["A familiar daytime location", "Current access and weather information"],
      steps: [
        "Find a daytime pause that already exists in your schedule, a lunch break, a wait between tasks. Do not add an early alarm to manufacture one; the exercise uses the day you already have.",
        "Near that pause, name one accessible outdoor option and one indoor alternative. Two options, because the courtyard will not always be available.",
        "Check the practical things: the route, whether there is shade, today's weather, and whether the spot is comfortable to sit in. These, not brightness, decide which option you take.",
        "Write down which one suits today and why, without assigning minutes and without predicting tonight's sleep. A location and a reason are the whole output.",
      ],
      notice: "Your plan names a real place you could actually use and the constraints that would change your choice. It contains no exposure target and no promise about sleep, because neither belongs in it.",
      troubleshooting: "If outdoors is unsuitable today, take the indoor option and leave it there. Do not hunt for a brighter spot to compensate, and never look toward the sun; the bells are heard by being in the square, not by standing next to them.",
    },
    recall: {
      prompt: "A friend claims every cloudy-day outing requires twice as long outside. What evidence is missing from that rule?",
      hint: "A timing cue is not a universal measured dose.",
      answer: "The measurement. The rule treats daylight as a dose with a known exposure-response curve, so that cloud cover can be corrected for by doubling the time, and nobody has that curve for an ordinary person on an ordinary pavement. General circadian guidance says light is a major timing cue, the village bell, and stops there. It does not supply minutes, and it does not supply a cloud multiplier. The honest reply to the friend is that a cloudy day outside is still outside, that the signal is being heard, and that any exact duration is being invented rather than calculated.",
    },
    quiz: {
      question: "Which conclusion fits the courtyard example?",
      options: ["The courtyard provides the same measured light exposure on every day.", "A bright window view establishes equal exposure to the outdoor courtyard.", "Daylight offers a timing cue, with access and conditions still relevant."],
      correctIndex: 2,
      explanation: "Daylight offering a timing cue, with access and conditions still relevant, is all the courtyard example supports; it is the village bell, heard when Bea is in the square. The courtyard cannot provide the same measured exposure every day, because weather and season change it and nobody measured anything. And a bright window view cannot be assumed equal to being outdoors; glass and indoor settings differ in ways the drawing does not quantify.",
    },
    takeaway: "Daylight is the village bell, not a medicine: it tells the body what time it is, so plan an ordinary accessible daytime place where you can hear it when conditions allow, take the indoor option without guilt when they do not, and refuse to turn a signal into minutes.",
    sourceNote: "Inherited NIH circadian and sleep references support light as a cue and outdoor time where possible. This is not light therapy or a sleep prescription.",
  },
  {
    id: 'wellbeing-017',
    outcome: "Look at every light source in the evening room and the time you plan to stop, instead of treating one warm-coloured screen setting as the whole job.",
    scene: "Someone reads a warm-tinted phone beneath a bright kitchen ceiling light before bed.",
    sections: [
      {
        title: "The phone changes colour, the room does not",
        paragraphs: [
          "Owen has read somewhere that warm screens are better in the evening, so after dinner he switches his phone to its amber night setting and settles in to read. The phone now glows orange. Above him the kitchen ceiling light is on at full strength. Through the doorway the television is still running to an empty sofa. Owen feels he has done the sensible thing.",
          "He has changed one property of one device. The ceiling light is as bright as it was. The television is as bright as it was. The reading will still run until whenever it runs until, and the time left before bed is exactly what it was before the tint. If the aim was a dimmer, calmer evening, the phone menu was the smallest lever in the room, and the room is the thing to look at.",
        ],
      },
      {
        title: "Brightness and colour are not interchangeable",
        paragraphs: [
          "Putting an amber filter on a small torch while standing under a floodlight does not make the car park darker. It makes the torch orange. Two different things are being confused here: how much light there is, and what colour it is. A sunset is orange and gentle. A sodium streetlamp is orange and glaring. Colour tells you almost nothing about brightness on its own.",
          "Light and darkness are the body's main timing cues, and NIH sleep guidance recommends avoiding bright artificial light in the run-up to sleep. The word doing the work there is bright. A warmer colour is a change in tint; it is not a reduction in how much light is reaching the eyes. A screen can stay just as bright after its colours shift. The ceiling light and television carry on contributing on their own, untouched by anything the phone does. None of this is a claim that every visible light is harmful or that the evening should be spent in the dark. You still need enough light to read comfortably, use the kitchen, and get to the bathroom without finding the table with your shin. Those are practical decisions about the setting, and a colour filter makes none of them for you.",
        ],
      },
      {
        title: "Change one unnecessary source",
        paragraphs: [
          "Owen looks at the room instead of the menu. The television is playing to nobody, so it goes off. The reading moves to the armchair by a modest lamp, where the bright ceiling light is not needed, and the ceiling light goes off too. The lamp stays, because the page has to be readable and the route to bed has to be visible. Three sources were lit; now one is, and it is the useful one.",
          "Then the question the tint could never touch. If the phone keeps pulling the evening past the stopping point he meant to keep, the fix is to put the phone down. Duration is a decision about time, and no colour setting has an opinion about time. What Owen has at the end is a different arrangement of light sources and activities. It is not a promise that a particular bulb, setting, or shade of orange will deliver sleep, and nobody should sell it as one.",
        ],
      },
      {
        title: "Why the tint feels like enough",
        paragraphs: [
          "The tint is visible, instant, and on the device already in your hand, so it feels like action. Turning off a television in another room means getting up. The feeling of having done something attaches to the smallest, nearest lever, and the floodlight overhead goes on being a floodlight.",
          "Two habits. Before adjusting a screen setting, count the light sources in the room and ask which one is doing nothing useful. And keep the stopping point as a separate decision from the lighting, because no amount of amber shortens an hour.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Inspect all active sources",
      alt: "One setting changes only the phone tint; the other removes an unused television and unnecessary ceiling light while retaining useful task light.",
      caption: "Compare what actually changed in each card. In the first, the phone is orange and every other source is exactly as bright as before: the amber torch under the floodlight. In the second, the unused television and unnecessary ceiling light are off and a task light remains so the page and the route are usable. Schematic comparison, not a measurement of light or of sleep.",
      items: [
        { label: "Phone tint only", detail: "Bright ceiling light and unused television remain on." },
        { label: "Whole setting checked", detail: "Unused sources off; enough task and route light remains." },
      ],
    }],
    practice: {
      minutes: 4,
      needs: ["An evening room you use", "Its existing lighting controls"],
      steps: [
        "Sit where you usually spend the hour before bed and list every light and screen that is on: ceiling, lamps, television, phone, anything with a glow. The list is the room; the phone is one line on it.",
        "Pick one source that is doing no useful work for the task or for moving safely. An unwatched television is the usual candidate; a floodlight overhead while you read by a lamp is another.",
        "Switch it off or turn it down with its normal controls, and check the room is still usable: the page readable, the way to bed visible. Never drape anything over a lamp to dim it.",
        "Then ask the question the lighting cannot answer: does the activity itself run past the time you meant to stop? If it does, the stopping point is the next thing to change, not another setting.",
      ],
      notice: "You have changed an actual light source or an actual stopping time, not the colour of one screen. The room is dimmer where it can be and usable where it must be.",
      troubleshooting: "If turning something off makes reading or moving around difficult, turn it back on; that source was useful. Choose a different unnecessary one instead. The aim is fewer pointless lights, not a darker room at any cost.",
    },
    recall: {
      prompt: "A tablet has a warm display, but its user reads under a bright overhead lamp for another hour. What remains unaddressed?",
      hint: "There are light sources and time boundaries outside the device setting.",
      answer: "Almost everything. The warm tint changed the colour of the tablet and nothing else, like the amber torch under the floodlight. The overhead lamp is still bright, the tablet's own brightness may be unchanged, and the extra hour of reading is still an hour, eating into the sleep window exactly as it would have in white. The lamp is a source to switch off or move away from; the brightness is a slider separate from the tint; and the hour is a stopping-point decision that no display setting can make. A colour change manages none of those three.",
    },
    quiz: {
      question: "The phone tint is already warmer, but an unused television brightens the room. Which change addresses the unexamined source?",
      options: ["Turn off the unused television while keeping useful task lighting.", "Make the phone tint warmer while leaving the television on.", "Lower phone brightness but leave the unused television running."],
      correctIndex: 0,
      explanation: "The television is a separate light source that nobody is using, so turning it off removes a real contribution to the room's brightness while the task light keeps the room usable; it is switching off the floodlight. Making the phone tint warmer again changes the colour of the one device that was already orange and leaves the television blazing. Lowering the phone's brightness is at least a brightness change, but it is still a change to the wrong device while the unexamined source carries on.",
    },
    takeaway: "An amber filter on the torch in your hand does nothing about the floodlight overhead, so count the light sources in the room, switch off the ones doing no useful work while keeping the page and the route visible, and treat the time you stop as a separate decision no tint can make for you.",
    sourceNote: "NIH guidance supports avoiding bright artificial light before sleep. This original room check does not endorse filters, prescribe light levels, or guarantee sleep improvement.",
  },
  {
    id: 'wellbeing-018',
    outcome: "Trace a screen reflection to the window or lamp behind it, change the angle of the screen or the light rather than your neck, and recheck from a comfortable seat as the daylight moves.",
    scene: "An afternoon drawing desk develops a window reflection across the monitor as daylight changes.",
    sections: [
      {
        title: "The reflection moves into the work",
        paragraphs: [
          "Ren is drawing on a tablet-style monitor in the afternoon. At two o'clock the screen was fine. By half past three a bright rectangle of window has slid across the sketch, sitting right over the character's face. Ren leans to the left to see past it, finishes a line, leans back, leans left again for the next one. It was fine earlier, so this feels like a small temporary thing.",
          "The reflection is still there through the next twenty edits. What has changed is not Ren and not the drawing. It is the relationship between three things: where the light comes in, where the screen surface is, and where the eyes are. Leaning moves the third of those for as long as the lean lasts, and no longer. The relationship stays broken, and the body is being asked to hold the fix.",
        ],
      },
      {
        title: "Glare has a direction",
        paragraphs: [
          "Anyone who has read a glossy magazine under a lamp knows the move. The page catches the bulb, the words vanish into a white sheen, and you tilt the magazine a few degrees until the reflection slides off. Nobody tilts their head for an hour instead. The shine has a direction, from the lamp to the page to your eye, and the cheapest thing to change in that triangle is the page.",
          "A screen is a glossy page that happens to be fixed to a desk. It reflects whatever bright source sits in the right place behind you or beside you. The reflection lands on exactly the detail you wanted to see, which is why people lean and twist to find a gap in it. OSHA treats glare as a workstation layout question for that reason. The standard starting point is to put the monitor at right angles to the window, so the window is off to the side rather than behind the viewer, where it reflects, or in front, where it dazzles. That is a starting point and not a guarantee. Screens differ in how glossy they are, windows differ in size, and daylight moves across an afternoon. The angle that worked at two may need a nudge at half past three. The diagram shows the idea, not a promise.",
        ],
      },
      {
        title: "Test from the working position",
        paragraphs: [
          "Ren sits back into the comfortable position, the one the leaning was avoiding, and opens the same sketch. Then one small change: swivel the monitor a few degrees on its stand, or drop the blind a hand's width. The check is simple. Has the bright patch left the part of the screen where the work is, and has it gone without appearing somewhere else? If the answer is yes to both, stop there.",
          "Two things to resist. Pushing screen brightness up to fight the reflection is a real option in a pinch, but it leaves the source untouched and makes the whole screen harsher; it is squinting harder at the magazine. And declaring the problem solved while still leaning is not solving it. The test of a good adjustment is that the image is usable from the position you would choose if there were no window at all. An hour later, when the sun has moved on, it may be worth checking again.",
        ],
      },
      {
        title: "Why the body volunteers first",
        paragraphs: [
          "Leaning is instant and free, and it works for the line you are drawing right now. Moving the monitor means stopping, and the blind is across the room. So the body steps in, as it always does, and the posture that was meant to last ten seconds lasts the afternoon. The reflection never had to be endured; it only had to be redirected.",
          "Two habits. When you catch yourself leaning to see a screen, name the light source you are leaning away from before you do anything else. And change the angle of the screen or the light before you change the angle of your neck.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Put the window beside the viewing line",
      alt: "A top-view desk places the window on the left, monitor ahead, and user below, with the viewing line directed forward.",
      caption: "Read the layout as the magazine trick done with furniture. The window is at the side, the monitor faces the user, and the viewing line runs straight ahead, so the window is neither behind the viewer to reflect nor in front to dazzle. The screen is at right angles to the window in this schematic. No light rays are drawn and no glare-free promise is made; check the real reflections from your own seat.",
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
        "Sit in the position you would choose if there were no glare at all, open a familiar page or image, and find one reflection that sits on the part you need to see. Resist leaning; the lean is what you are trying to retire.",
        "Work out where the reflection is coming from, a window, a lamp, a light fitting, before you touch the brightness control. The source decides the fix.",
        "Make one small, safe change: swivel the monitor a few degrees, or use the existing blind or lamp control. Keep the task on screen while you do it so you can watch the patch move.",
        "Return to the comfortable seat and check two things: the original patch is off the working area, and no new one has appeared elsewhere. If it has, you have only tilted the magazine into a different lamp.",
      ],
      notice: "The working area is usable from the position you actually want to sit in, and you can name the source you redirected. Nobody is leaning.",
      troubleshooting: "If the reflection will not leave, you have the wrong source or the wrong angle; check again rather than pushing brightness up. Do not move heavy equipment on your own and do not block lighting you need for the room; a glare-free screen in a dark workspace is a different problem.",
    },
    recall: {
      prompt: "A desk is glare-free at noon but difficult to read later. Does the earlier result prove the current posture is the problem?",
      hint: "The light geometry can change over time.",
      answer: "No. At noon the sun was somewhere else, so the triangle of light, screen, and eye was fine, and the result from then says nothing about now. Daylight moves and changes strength through the afternoon, which is exactly how a new reflection appears on a desk that was clear at lunchtime. The posture is not the problem; it is the body's attempt at a fix. Recheck the source and the angle from a comfortable seat, tilt the magazine rather than the head, and expect that the answer may change again as the light does.",
    },
    quiz: {
      question: "After text is enlarged, a lamp reflection still covers the working area. Which check directly addresses the remaining problem?",
      options: ["Try another step of text enlargement.", "Move the text window around the bright patch.", "Reposition the lamp or screen to change the reflection."],
      correctIndex: 2,
      explanation: "A reflection is made by the arrangement of the lamp and the screen surface, so repositioning one of them is the only option that removes it; it is tilting the magazine. Enlarging the text another step makes the words bigger under the same white sheen. Moving the text window around the bright patch works around the reflection while leaving it exactly where it was, and the next thing you open will land under it again.",
    },
    takeaway: "A screen is a glossy page fixed to a desk, so when a reflection lands on your work, tilt the page not your head: find the source, swivel the screen or control the light, test from the seat you actually want, and expect to repeat it as the daylight moves.",
    sourceNote: "Inherited OSHA environment and monitor references address glare and viewing posture. This original layout is schematic and must be checked under actual conditions.",
  },
  {
    id: 'wellbeing-019',
    outcome: "Aim a task lamp at the paper, then check from your usual seat that the bulb is not in your eyes, not reflected on the screen, and not casting your drawing hand's shadow on the line.",
    scene: "A storyboard desk combines a printed page, a pencil, and a monitor showing reference frames.",
    sections: [
      {
        title: "One lamp serves two surfaces badly",
        paragraphs: [
          "A storyboard artist has a printed shot list on the desk and a monitor showing reference frames. The page is hard to read, so a desk lamp goes behind the monitor, pointing out toward the desk. The page lights up nicely. Then the artist looks up at the reference frames and gets the bare bulb straight in the eyes. Tilt the head down and the bulb is hidden but the page dims. Tilt up and the page is bright and the bulb is back.",
          "The lamp is trying to serve two surfaces that want different things. A page is lit by light falling on it from somewhere else; the more that lands, the easier it reads. A monitor makes its own light, so it does not need the lamp at all. Its glossy face will happily bounce the lamp back into your eyes. The two surfaces share a desk. That does not mean they share a lighting need.",
        ],
      },
      {
        title: "Follow where the light lands",
        paragraphs: [
          "Reading a map in a car at night, you point the torch at the map. You do not point it at your own face. You do not point it at the windscreen, where it turns into a glare you have to see past. Everyone does this without thinking, because the torch is in their hand and the result is instant. A desk lamp is a torch on a stalk. The same three rules apply; they are just easier to forget when the torch is bolted down.",
          "Task lighting means aiming useful light at the work rather than raising the brightness of the whole room. OSHA's environment guidance pairs adequate illumination with glare control, and the pairing is the point. More light is not the goal. Readable paper without a bulb in your eyes or a reflection on your screen is. There is a third thing that bites people with a pencil in their hand. Light has to travel from the lamp to the page. If your drawing hand is in the way, the line you are working on sits in your own shadow. Which side the lamp is on relative to the working hand matters as much as how bright it is. So three checks, together: direct glare into the eyes, reflection on the display, and shadow from the hand on the page.",
        ],
      },
      {
        title: "Check both tasks after adjusting",
        paragraphs: [
          "The artist moves the lamp to the side of the desk, on the opposite side from the drawing hand, and aims it down at the shot list using its ordinary joint. Check one: the bulb is out of the line of sight to the monitor. Check two: pick up a pencil, hold it in the drawing position, and look at the current line. Is it in shadow? Check three: from the same seat, look at the monitor. Has the glare that was in the eyes now moved onto the screen?",
          "If the answer to that last one is yes, the job is half done, not done. Nudge the lamp or shift the page a few centimetres and check all three again. A small change to where the paper sits is often enough and costs nothing. That makes it worth trying before anyone buys a brighter lamp. Two safety points. Keep the lamp stable and clear of the paper. Never drape a cloth or a sheet of paper over the shade to soften it; bulbs get hot and covered bulbs start fires.",
        ],
      },
      {
        title: "Why brighter is the wrong instinct",
        paragraphs: [
          "When a page is hard to read, brighter feels like the obvious answer. A brighter lamp pointed in the wrong direction makes the glare worse while barely helping the page. Direction is almost always the problem and almost never the first thing checked. The map torch teaches it instantly; the bolted-down lamp lets you forget it for years.",
          "Two habits. When you set a lamp, follow the light with your eye from bulb to page to screen and ask what each surface is getting. And before you reach for more brightness, move the lamp, the page, or your hand, in that order.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Direct the lamp toward the page",
      alt: "A lamp to the side aims at a central paper task, with the monitor elsewhere and the user checking both from below.",
      caption: "Follow the single arrow from the lamp to the shot list: that is where the light is meant to land, like the torch on the map. The lamp sits to the side and out of the direct line to the monitor. The arrow is an intention, not a calculated beam; mirror the layout for the other drawing hand and check real hand shadows and screen reflections from your own seat.",
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
        "Put the page where you actually work on it and sit in your usual seat. Lighting a page where it will not be when you draw tells you nothing.",
        "Aim the lamp at the page with its normal joints, keeping it stable and clear of the paper. Point the torch at the map, not at your face.",
        "Pick up your pen in your working hand and look at the line you would be drawing. If it is in shadow, the lamp is on the wrong side of your hand; move it round.",
        "Look up at any nearby screen from the same seat. If the bulb is in your eyes or a reflection sits on the display, adjust again; glare that has moved is glare that is not yet gone.",
      ],
      notice: "The page is readable while you draw, the line is not in your hand's shadow, and the screen beside it is no harder to see than before. Three checks, one lamp.",
      troubleshooting: "If the lamp cannot be repositioned, move the page a few centimetres or turn it slightly instead; small changes to the page often fix what a fixed lamp cannot. And never cover a lamp with fabric or paper to dim it, however tempting; use a lower setting or a different lamp.",
    },
    recall: {
      prompt: "A lamp lights a recipe but reflects in a tablet beside it. Would a brighter bulb necessarily solve both tasks?",
      hint: "Direction can matter more than additional brightness.",
      answer: "No. The reflection on the tablet comes from the lamp's direction, and a brighter bulb in the same spot makes that reflection stronger, not weaker; it is turning up a torch that is already pointed at the windscreen. The thing to change is the geometry: angle the lamp so it falls on the recipe without bouncing off the tablet, or shift the tablet a hand's width so it is out of the reflection, or move the recipe toward the light. Then check from where you actually stand to cook. Brightness is the last lever, and often the wrong one.",
    },
    quiz: {
      question: "After moving a lamp, the bulb is hidden but the drawing hand shadows the page. What should be checked?",
      options: ["More brightness from the same lamp direction.", "Lamp direction relative to the working hand and paper.", "Lower monitor brightness with the lamp and page unchanged."],
      correctIndex: 1,
      explanation: "Hiding the bulb was one check; the hand shadow fails the second, so the thing to look at is the lamp's direction relative to the working hand and the page, probably moving it to the other side. More brightness from the same direction makes a brighter page with the same dark line under the hand. Lowering monitor brightness changes a surface that was not part of the problem and leaves the shadow exactly where it was.",
    },
    takeaway: "A desk lamp is a torch on a stalk: point it at the page and not at your face or the screen, keep it on the opposite side from your drawing hand so the line is not in your own shadow, check all three from your usual seat, and reach for brightness last.",
    sourceNote: "OSHA environment guidance supports adequate task illumination and glare control. This original desk sketch is not a photometric design or a claim about eye treatment.",
  },
  {
    id: 'wellbeing-020',
    outcome: "Sort bedroom lights by what each one is for, dim the ones that only carry information, keep the low light that makes the route safe, and leave alarms and powered equipment untouched.",
    scene: "A guest bedroom has a bright clock by the pillow and a dim light needed near the doorway.",
    sections: [
      {
        title: "Two lights do different jobs",
        paragraphs: [
          "A guest bedroom. On the bedside table, a digital clock with big bright digits faces the pillow, glowing all night. Near the door, a small plug-in light at skirting-board height throws a soft pool onto the carpet so a guest can find the door in an unfamiliar room. A visitor lying there, kept company by the clock, might decide the room is too bright and want everything off.",
          "That would throw out something useful with something annoying. The two lights are not the same problem. The clock is information, and it does not need to be bright to be information; a glance at a dim display tells you the time just as well. The door light is about moving safely in the dark, in a room whose furniture you do not know. Before touching either switch, the question is: what is each light for?",
        ],
      },
      {
        title: "Darkness is not an obstacle course",
        paragraphs: [
          "A cinema is dark, and nobody complains that it is not dark enough because of the aisle lights. The little strips along the steps are there so you can get to your seat and back out again without falling over a stranger. The screen is bright because that is the point; the lights are dim and aimed at the floor because their job is your feet, not your eyes. Darkness and a usable room have always coexisted. The cinema just does it on purpose.",
          "NIH sleep guidance recommends a dark bedroom and, in the same breath, allows a dim night light where one is needed. Those fit together for the cinema reason. Reducing unnecessary light does not mean removing every cue you use to find your way. Three things matter, not one. Brightness, yes. But also position and direction: a modest light low on the wall, aimed at the floor, is doing a different job from a bright display pointed straight at the pillow, even if a light meter put them close. And necessity varies by person. Someone with poor night vision, a mobility aid, or a child down the hall has different lights that count as needed. The goal is a room you can use with the least avoidable glow, not a victory in a competition to achieve total black.",
        ],
      },
      {
        title: "Adjust the display, then inspect the route",
        paragraphs: [
          "The guest asks the host whether the clock can be dimmed, and it can; most have a setting. The digits drop to a faint glow, and the guest checks the alarm still works, because a clock that cannot wake you is not a clock. The door light stays exactly as it is. Then, awake and with the main light on, the guest walks the route from bed to door and moves the suitcase and a trailing charger cable out of it. Hazards are easier to find at ten at night than at three in the morning.",
          "Some things are off the table. No cloth gets draped over the clock or any powered device, because covered electronics get hot. No safety indicator, smoke alarm light, or the host's equipment gets switched off. And if dimming the clock somehow made the route harder to see, the right response would be to restore useful light, not to tough it out. The end state is less avoidable brightness, with every necessary function still working. That is the whole of the ambition.",
        ],
      },
      {
        title: "Why all light looks like the same problem at night",
        paragraphs: [
          "Lying awake, every glow in the room feels equally hostile, so the instinct is to kill them all. But the clock is bright because its designer chose bright, not because the time requires it, and the door light is on because someone thought about a stranger in the dark. One is removable brightness; the other is the cinema aisle. Telling them apart is the skill.",
          "Two habits. Before you switch anything off in a bedroom, ask what it is for and who needs it, including the version of you that gets up at three. And do the route check awake, with the lights on, because that is the only time you can see what you would trip over.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Keep the route, reduce the display",
      alt: "A bed and doorway are connected by a clear route; a clock display is dimmed while a low route light remains.",
      caption: "Read the two pairs separately. Bed and clock display: the display is dimmed to a faint glow because its job is information, which does not need brightness. Doorway and low route light: the light stays because its job is the route, the cinema aisle strip. The arrow marks clear floor between bed and door, not a piece of furniture, and no light level is being specified.",
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
        "While fully awake and with the main light on, list each light in the room and sort it into three groups: information, like a clock; unnecessary, like a standby glow; and needed for moving around. The sorting is the whole exercise.",
        "Pick one display from the first or second group and reduce it using its own normal setting. Never cover a powered device to dim it; if it has no dimmer, leave it and pick another.",
        "Walk the route from bed to door and bathroom with the route lighting as it will be at night, and move anything you could trip over. This is checking the aisle before the film starts.",
        "Confirm every alarm and essential indicator still works. If the room has become hard to navigate, put useful light back; a dark room you cannot cross safely is a failed adjustment.",
      ],
      notice: "The room has less avoidable glow and still has a usable route and working alerts. You can say what each remaining light is for.",
      troubleshooting: "If a display has no safe way to dim and no off switch you are allowed to use, leave it alone and reduce a different nonessential source instead. Turning the clock to face the wall is fine; covering it is not.",
    },
    recall: {
      prompt: "A hotel room has a glowing television and a light needed to find the bathroom. Which distinction should guide the adjustment?",
      hint: "Ask what useful function each source serves.",
      answer: "What each light is for. The glowing television is doing nothing for anyone and can go off with its own remote. The light that gets you to the bathroom is the cinema aisle strip: it exists so that a stranger in an unfamiliar room does not walk into a desk at three in the morning, and the guidance that recommends a dark bedroom explicitly makes room for a dim light like that. Turn off the useless source, keep the useful one, and do not rearrange the room into a trip hazard in the name of darkness.",
    },
    quiz: {
      question: "After dimming a clock, the doorway is difficult to find. Which response fits the guidance?",
      options: ["Restore suitable route lighting while keeping unnecessary display brightness reduced.", "Restore full clock brightness without checking the route arrangement.", "Move the clock away from the pillow without checking floor visibility."],
      correctIndex: 0,
      explanation: "Dimming the clock removed unnecessary brightness, and that stays; a doorway you cannot find means route lighting is now insufficient, so the fix is to restore suitable light for the route, the aisle strip, while leaving the display dim. Turning the clock back up to full solves the route problem with the wrong light, pointed at the pillow. Moving the clock away from the pillow without checking the floor rearranges the room in the dark and does nothing for the doorway.",
    },
    takeaway: "A bedroom can be dark the way a cinema is dark, with the aisle lights on: dim the displays whose only job is information, keep the low light whose job is your feet, check the route awake, never cover powered equipment, and leave every alarm working.",
    sourceNote: "NIH bedroom guidance permits a dim night light. This original environment check is not a claim that any visible light prevents sleep or that darkness treats sleep problems.",
  },
  {
    id: 'wellbeing-021',
    outcome: "Give a long seated task a real stopping place, with autoplay off and a resume note, and use it for a change that suits you, without treating it as a substitute for the rest of an active day.",
    scene: "A remote training afternoon runs through several modules while an evening recreational session is already planned.",
    sections: [
      {
        title: "The evening plan does not change the afternoon",
        paragraphs: [
          "Priya is on a remote training course. The modules are recorded and the platform helpfully starts the next one the moment the last one ends, so she has been in the same chair since lunch without a natural reason to get up. She is not worried about it. There is a dance session in the calendar for seven o'clock, and that feels like it covers the day.",
          "Two things are true at once and neither cancels the other. The evening session is real and worth doing, and it is about seven o'clock. It does nothing about the four unbroken hours happening now. Equally, standing up between modules would not make the evening unnecessary. People tend to rank these against each other, as if one good thing about movement settles all the others. They are just different parts of a day.",
        ],
      },
      {
        title: "Interrupt the demand that is continuous",
        paragraphs: [
          "On a long motorway drive, the fact that you are going for a big walk at the far end does not mean you skip every service station on the way. The walk is the destination. The stops are about the four hours in the driving seat, and they only happen if the road has exits and you take one. Autoplay is a motorway with the exits removed: you were never given a moment where stopping was the obvious thing to do.",
          "Adult guidance from the NHS and the WHO makes two separate points, and people tend to hear only the first. Be active. And, separately, reduce long unbroken stretches of sitting. The second one is about the afternoon, not the evening. A long seated task keeps asking the body to hold roughly one arrangement, and an interruption changes that pattern now, rather than promising movement later. What counts as an interruption is wide. Standing is not possible or sensible for everyone. Standing perfectly still is not obviously better than sitting. A comfortable change of position, or a familiar bit of seated movement, is a legitimate exit from the motorway, chosen to suit the person. None of that is a claim that all the options do the same thing to the body; it is a claim that the continuous stretch is the thing to break.",
        ],
      },
      {
        title: "Give the course a stopping place",
        paragraphs: [
          "Priya turns off automatic progression. Now, when a module ends, the screen waits. She writes a one-line note, next: module 6, and leaves it by the keyboard. That note is the exit sign. It makes stopping cheap, because she knows exactly where she will pick up. She no longer spends the gap scrolling the course chat in the same seat because the next video has not yet grabbed her.",
          "What she does in the gap is up to her and her body: a position change, a walk to the kettle, a familiar movement she already knows. No timer is specified here, and nothing about a particular interval is being claimed as a researched threshold. The result is simpler than that. A task that used to extend itself indefinitely now has visible places where stopping is the natural thing to do. Whether she takes every exit is a separate choice. At least the road has them again.",
        ],
      },
      {
        title: "Why the evening covers the afternoon in your head",
        paragraphs: [
          "A planned activity is vivid and sits on the calendar in writing, so it feels like the day's movement is handled. Four hours of autoplay leaves no trace at all. The mind credits the thing it can see and ignores the thing it cannot, and the continuous stretch quietly becomes the default for every afternoon with a course on it.",
          "Two habits. When something on a screen advances by itself, turn that off, so the boundaries belong to you. And when you catch yourself thinking later covers it, ask what is happening now, because the evening does not reach backwards.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Make the module boundary usable",
      alt: "A training module ends, a resume note creates a pause, and the next module starts after an available interruption.",
      caption: "Read the middle row as the exit that autoplay removed. The module ends, and instead of the next one starting on its own, a resume note holds the place while Priya uses the gap however suits her. No break length is prescribed and no movement option is claimed to equal another; the sequence simply gives a self-extending task a stopping place.",
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
        "Pick a seated task that tends to run on without an obvious end: a course with autoplay, a long document, a queue of videos. The motorway with no exits is the thing to find.",
        "Find its next safe boundary, a saved page, a finished module, a natural section end. That is where the exit will go.",
        "Write a one-line resume note and, if you control it, switch off anything that advances the task automatically. The note is what makes stopping cheap.",
        "Use the pause for a comfortable change that suits you, a different position, a short walk, a familiar seated movement. No routine is being prescribed, and the evening plan, if you have one, stays exactly where it is.",
      ],
      notice: "The task now has a real interruption built into it, not just an intention to move later. You can point at the boundary and the note that made it usable.",
      troubleshooting: "If the next boundary is a long way off, find an earlier safe one rather than pushing on to finish the plan. A needed pause does not wait for a tidy stopping point, and the resume note works just as well mid-section.",
    },
    recall: {
      prompt: "Someone has a weekend hike planned but spends today's training session continuously seated. What separate scheduling question remains?",
      hint: "Future activity does not interrupt the current stretch.",
      answer: "Whether today's session has any exits in it. The hike is the walk at the end of the motorway, and it is a good thing, but it is on Saturday; it does nothing for the hours in the chair this afternoon. Those two address different parts of an activity pattern: one is being active, the other is breaking up a long sedentary stretch, and guidance mentions both separately for that reason. The remaining question is where today's training can be paused, with a resume note and autoplay off, so that the afternoon stops being one unbroken drive.",
    },
    quiz: {
      question: "Which change directly interrupts the course's continuous seated sequence?",
      options: ["Schedule a longer recreational session next week.", "Switch course videos while retaining the same uninterrupted setup.", "Use a saved module boundary for a suitable change before resuming."],
      correctIndex: 2,
      explanation: "Using a saved module boundary for a suitable change before resuming is the only option that touches the current seated sequence; it is taking the exit. A longer recreational session next week is the walk at the far end of the motorway, worthwhile and irrelevant to this afternoon. Switching course videos while keeping the same uninterrupted setup changes what is on the screen and leaves the body exactly where it was.",
    },
    takeaway: "A planned walk at the destination does not replace the service stations on the way: switch off autoplay, give a long seated task real exits with a resume note, and use them in whatever way suits your body, alongside the evening's activity rather than instead of it.",
    sourceNote: "NHS and WHO guidance includes activity and reducing prolonged sedentary time. This original task arrangement sets no movement prescription or universal break timer.",
  },
  {
    id: 'wellbeing-022',
    outcome: "Choose a visual pause that changes how far away your eyes are working, by looking comfortably across the room, instead of swapping one close screen or page for another.",
    scene: "A library archive reader switches between a scanned document and phone messages without leaving close viewing.",
    sections: [
      {
        title: "A new screen can keep the same demand",
        paragraphs: [
          "Ellis has been reading a scanned nineteenth-century letter on a monitor in a library archive for an hour, nose a foot from the screen, picking out faded handwriting. Time for a break. Ellis picks up the phone and reads messages for five minutes, then goes back to the letter. It felt like a break. It was a change of subject.",
          "Look at what the eyes were doing in each case. Letter: close detail, a short distance away. Messages: close detail, a short distance away. The device changed, the content changed, the mood changed, and the visual job did not. The same thing happens when someone swaps a screen for a paperback held at the same distance. A visual pause is about what the eyes are being asked to do, not whether the next thing feels like leisure.",
        ],
      },
      {
        title: "Distance changes what the eyes are doing",
        paragraphs: [
          "If your right shoulder aches from a heavy shopping bag, swapping it for a different heavy bag on the same shoulder is not a rest, however nice the new bag is. Putting the bag down is. The relief has nothing to do with which bag; it comes from the shoulder stopping the thing it was doing. Eyes doing close work are the shoulder. The phone is a different bag.",
          "Close detail asks the visual system to hold near focus and keep both eyes aligned on something a short way off, continuously. Looking at something comfortably far away changes that demand; the holding relaxes. That is why OSHA's monitor guidance talks about viewing time, not just where the screen sits. Three cautions keep this sensible. You do not need to stare at a particular object or run the eyes through an exercise; a comfortably visible point across the room is enough, and normal blinking carries on. Nothing bright is a target: not a lamp, never the sun, however far away they are. And no exact interval is being presented here as a proven threshold for everyone. The point is the change of distance, not a stopwatch.",
        ],
      },
      {
        title: "Use the room, not another feed",
        paragraphs: [
          "Ellis saves the position in the scanned letter and puts the phone face down on the desk. Still sitting back in the same supported chair, no neck-craning, the gaze goes across the reading room to the noticeboard by the door. Not to read the small print on it, just to rest on it. Blink as normal. After a bit, back to the letter, which is exactly where it was left.",
          "The distance changed and the task stayed easy to resume; both halves matter. If the room offers nowhere comfortable to look, a wall two feet away or a window only reachable by twisting round, the answer is to adjust where you sit or face, not to force a neck turn in the name of eye care. One kind of pause is not another: this changes viewing distance. Hand demands and sitting position are separate checks with separate pauses.",
        ],
      },
      {
        title: "Why the phone feels like a rest",
        paragraphs: [
          "Attention got a holiday, so the whole person felt refreshed, and feelings of refreshment get credited to the eyes along with everything else. But the eyes never changed bags. The letter and the messages are indistinguishable to the focusing muscles, which is why a break can feel like a break and do nothing for the thing it was meant to rest.",
          "Two habits. Before calling something a visual pause, ask how far away your eyes are now looking compared with a minute ago. And when the answer is about the same, put the bag down: save your place, set the device aside, and look across the room.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "Change the distance of attention",
      alt: "A viewer looks between nearby document detail and a noticeboard farther across the room, rather than between two close screens.",
      caption: "Compare the two arrows from the viewer. The short one goes to the document, close work. The long one goes across the room to the noticeboard, and the point is the length, not the destination; the noticeboard is a comfortable place to rest the eyes, not small print to decode. Distances are schematic and no measured eye exercise is being prescribed.",
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
        "Save your place in the close task first, so that stopping costs nothing and resuming is a single step. A pause that is expensive to come back from is a pause you will skip.",
        "Without turning awkwardly, find something comfortably far away in your current room, a doorway, a poster, a tree through a window. Rule out anything bright. You are looking for a place to put the bag down, not a target to hit.",
        "Let your gaze rest there naturally, blinking as usual, instead of picking up another nearby screen. There is no staring, no focusing drill, no counting.",
        "When you come back, write one line: what actually changed about the viewing demand? If the honest answer is only the content, it was the other bag on the same shoulder.",
      ],
      notice: "The pause changed how far away your eyes were working, not just the app, the device, or the subject. You can name the near thing you stopped looking at and the far thing you looked at instead.",
      troubleshooting: "If the only far view requires squinting, a bright source, or twisting your neck, choose an easier one or adjust where you sit. Distance is a rest, not a performance test, and a strained neck is a poor trade for rested eyes.",
    },
    recall: {
      prompt: "Someone replaces phone scrolling with a paperback held at the same close distance. Has close viewing necessarily been interrupted?",
      hint: "Paper changes the medium, not automatically the distance.",
      answer: "No. The paperback is a different bag on the same shoulder. Held at the same distance as the phone, it asks the eyes for the same near focus and the same alignment, just on paper instead of glass. The medium changed; the demand did not. A visual pause has to change the distance the eyes are working at, so the real rest is putting both down, saving the place, and looking comfortably across the room for a while. Paper is not automatically a break any more than a nicer bag is automatically lighter.",
    },
    quiz: {
      question: "Which pause most directly changes sustained near-detail viewing?",
      options: ["Looking comfortably across the room without reading small detail.", "Reading a different document on the same nearby monitor.", "Moving from the monitor to a phone at a similar distance."],
      correctIndex: 0,
      explanation: "Looking comfortably across the room without trying to read anything small is the one option that changes the viewing distance, which is what rests the near-focus demand; it is putting the bag down. Reading a different document on the same nearby monitor changes the content and nothing else. Moving from the monitor to a phone at a similar distance changes the device and nothing else; it is the other heavy bag on the same shoulder.",
    },
    takeaway: "Swapping a screen for a phone is a different heavy bag on the same shoulder: a visual pause has to change how far away your eyes are working, so save your place, set the device down, and rest your gaze comfortably across the room, never on anything bright and never as a staring exercise.",
    sourceNote: "OSHA monitor guidance includes viewing time. This original pause has no prescribed distance or proven timing threshold and is not treatment for persistent eye discomfort.",
  },
  {
    id: 'wellbeing-023',
    outcome: "Choose a break that actually stops the gripping and repeated tapping your hands were doing, instead of swapping work on one device for play on another.",
    scene: "A photo retoucher leaves mouse work for a handheld puzzle game during a break.",
    sections: [
      {
        title: "The break keeps the hands occupied",
        paragraphs: [
          "Jo has spent the morning retouching photographs: select, click, drag, click, hundreds of times. Break time. Jo picks up the phone and opens a puzzle game, and for ten minutes the deadline disappears and the mind wanders somewhere pleasant. The right hand, meanwhile, is gripping the phone and tapping at the same rate it was clicking the mouse.",
          "The break worked for one part of Jo and not for the other. The head got a change of subject. The hands got a change of device. Breaks are not one interchangeable thing you either take or do not take; what a break does depends on which demand actually stops. The same is true of watching a video while clutching the phone tightly for twenty minutes: no tapping, but the grip never let go.",
        ],
      },
      {
        title: "Remove the repeated action",
        paragraphs: [
          "Imagine a waiter on a fifteen-minute break who spends it carrying trays of cups to the staff room and back because it is on the way. The feet have stopped serving tables. The arms have not stopped carrying. If the thing that ached was the arms, nothing has rested, however much the change of scenery felt like a pause. A break is only a break for the part of you that stops.",
          "OSHA's guidance on how work is organised treats repetition and prolonged activity as concerns in their own right, separate from whether the desk is set up well. A perfect mouse position does not change the fact that clicking it a thousand times is a thousand small repeated actions. Two different hand demands are in play. One is the repeated action itself: the tap, the click, the swipe. The other is holding: a phone or tablet has to be supported in the hand, and that is a grip maintained for as long as the device is up. Swapping work for a game stops neither. Putting the device on a stable surface removes the holding. Leaving the controls alone removes the repetition. Nobody needs to perform a forceful stretch to make a break count; the hands just need to stop doing the thing.",
        ],
      },
      {
        title: "Make the alternative genuinely hands-free",
        paragraphs: [
          "Jo saves the edit, puts the mouse down, puts the phone face down on the desk, and listens to a familiar radio programme through a speaker that is already on the shelf. The hands rest on the lap or the desk, open, doing nothing. If finding something to listen to turns into five minutes of scrolling a podcast app, that is the grip and the tapping sneaking back in. Pick what is already there, or choose quiet.",
          "The thing to look for at the end is observable and small: fewer ongoing hand actions during the pause than during the work. That is the whole claim. Nothing here says a particular sound heals anything. And a hands-free break is one kind of break; it does nothing for eyes that have been working close or a body that has been in one position for three hours. Those get their own checks.",
        ],
      },
      {
        title: "Why the puzzle feels like a rest",
        paragraphs: [
          "The mind is loud and the hands are quiet. Relief from the deadline arrives as a wave and gets credited to the whole body, while the fingers go on doing exactly what they were doing with nobody noticing. The waiter feels off duty the moment the apron comes off, tray or no tray.",
          "Two habits. Before a break, name the repeated action you are breaking from, in words: clicking, gripping, swiping. And then check your hands halfway through; if they are holding something and tapping it, the break has not reached them yet.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Different content or different hand demand?",
      alt: "Mouse work followed by a handheld game keeps gripping and input; devices set down with audio allow the hands to rest.",
      caption: "Compare the two cards by what the hands are doing, not by what the mind is enjoying. In the first, the content is new and the hand is still holding a device and tapping it, the waiter carrying trays on his break. In the second, both devices are down and nothing needs holding or pressing. A change of subject and a pause from gripping are separate things that can happen apart.",
      items: [
        { label: "Handheld puzzle", detail: "New content, but continued holding and tapping." },
        { label: "Devices down, audio on", detail: "No device support or repeated input is needed." },
      ],
    }],
    practice: {
      minutes: 3,
      needs: ["A stable place to put devices", "A saved stopping point"],
      steps: [
        "Before you stop, name the repeated hand action in the task you are leaving: clicking, swiping, gripping a stylus, holding a phone. Naming it is how you will know whether it stopped.",
        "Save your work, then put every handheld device on a stable surface, face down if that helps. The holding demand ends the moment you are not supporting anything.",
        "Choose a pause that does not need those same actions. Audio that is already set up, a window, or simple quiet all qualify. Quiet is not a failure to find something better.",
        "Halfway through, look at your hands. Are they free of both holding and repeated input? If one has crept back, that is the tray on the waiter's break; put it down again.",
      ],
      notice: "The hand demand you named has actually stopped instead of continuing under a different app. Your hands are open and resting, and you could say which action they are resting from.",
      troubleshooting: "If setting up the entertainment turns into more tapping and scrolling, you have swapped one repeated action for another. Use whatever is already playing or available, or leave the device alone entirely; silence is a perfectly good break.",
    },
    recall: {
      prompt: "After extensive typing, someone watches a video while holding a tablet. Which hand demand may still remain?",
      hint: "No tapping does not necessarily mean no holding.",
      answer: "The holding. Typing stopped, so the repeated action is gone, but a tablet watched in the hands is a tablet being gripped and supported for the whole video, and that is a continuous demand on the same hands and forearms that were typing. It is the waiter carrying the tray. Prop the tablet on a stand or a stable surface so nothing needs holding, or pick a pause that involves no device at all. No forceful hand exercise is required; the hands just need to stop holding and stop pressing.",
    },
    quiz: {
      question: "Which check shows whether a pause actually interrupts repeated device use by the hands?",
      options: ["Whether the next app is entertaining rather than work.", "Whether gripping and repeated input have stopped.", "Whether a touchscreen replaces the previous mouse and keyboard."],
      correctIndex: 1,
      explanation: "Whether gripping and repeated input have stopped is the only check that looks at what the hands are physically doing, which is the thing the break was for. Whether the next app is entertaining tells you about the mind, not the fingers; the puzzle is entertaining and the hands never stopped. Swapping a mouse and keyboard for a touchscreen changes the technology while the tapping and holding carry on, a different tray on the same break.",
    },
    takeaway: "A break only rests the part of you that stops, so name the repeated hand action before you pause, put every device down on a surface, choose something that needs no holding or tapping, and check your hands halfway through to see whether the break ever reached them.",
    sourceNote: "OSHA work-process and pointer references address repetition and sustained activity. This original pause does not prescribe stretches or treat hand symptoms.",
  },
  {
    id: 'wellbeing-024',
    outcome: "Change position during a long task while keeping the screen readable and the keyboard within reach, instead of holding one good setup still for hours or swapping it for a different frozen pose.",
    scene: "A proofreader treats a newly adjusted library chair as a position that must remain unchanged.",
    sections: [
      {
        title: "A good setup becomes a frozen rule",
        paragraphs: [
          "Cam has just spent ten minutes adjusting a library chair: height right, backrest right, feet flat, screen straight ahead. It feels good. Then Cam proofreads for three hours in exactly that position, afraid that shifting will undo the setup. By the end, the position that felt good at nine feels like a punishment, and Cam concludes the adjustment was wrong.",
          "The adjustment was fine. The mistake was turning a comfortable starting point into a test of stillness. The point of setting up a chair is to make the work usable, not to produce a pose you then owe the chair for the rest of the day. A photograph of a well-arranged workstation shows one moment. It cannot show the half dozen supported positions a person might move between across an afternoon, and it was never meant to forbid them.",
        ],
      },
      {
        title: "Support and variation belong together",
        paragraphs: [
          "Soldiers on ceremonial guard duty are trained to move. Standing perfectly motionless for an hour is how people faint on parade, so they shift weight, flex their toes inside their boots, make small invisible adjustments while looking entirely still. The best posture in the world becomes a stress position if you are not allowed to leave it. Bodies are built to move around a good position, not to be welded into one.",
          "OSHA's position guidance says this outright: even with a good starting arrangement, change position. A small shift alters which bits of you are carrying the load and how the same task is being supported, instead of keeping every contact and every demand identical for hours. Two boundaries keep the idea honest. First, not every position is equally good for typing or reading; a change should still leave the screen readable and the keyboard within reach, or it has traded one problem for another. Second, standing all day instead of sitting all day is not variation. It is a different fixed position. The instruction was never stand; it was do not freeze.",
        ],
      },
      {
        title: "Recheck the task after the change",
        paragraphs: [
          "Cam uses the chair's own backrest lever to recline a little into a second comfortable, supported position. Then the important part: look back at the page and reach for the keyboard. Leaning back has moved the body away from the desk, so the hands now stretch forward. That is the reach check failing, and it means this variation needs finishing, not abandoning.",
          "Cam pulls the keyboard closer, or sits a touch further forward in the reclined position, until the reach is relaxed again. Now there are two usable positions, and switching between them through the afternoon is the whole technique. Standing was never required; a seated shift was enough here. And the result is not a longer list of posture rules to obey. It is one more place to be comfortable while the work still gets done.",
        ],
      },
      {
        title: "Why a good setup turns into a cage",
        paragraphs: [
          "People invest effort in the setup and then protect the investment by not moving, as if comfort were a fragile arrangement that motion would break. But the setup is a base to move around, like the guard's stance. Protecting it by freezing is how a good chair gets blamed for an aching back.",
          "Two habits. When you notice you have been holding one position for a long time, change it a little on purpose, and then recheck the screen and the reach. And if a change makes the task awkward, fix the task or try a different change; do not conclude that moving was the mistake.",
        ],
      },
    ],
    visuals: [{
      type: 'spatial',
      title: "A position change affects reach",
      alt: "A side-view relationship sketch links the user with an adjustable backrest, a viewing screen, and a lower input surface.",
      caption: "Follow the two arrows in order. First, support: the backrest adjustment gives the user a second comfortable position. Second, recheck reach: leaning back moves the body away from the input surface, so the hands have to be checked before the new position counts as usable. The sketch names no backrest angle and does not suggest holding any single pose for long.",
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
        "Notice, honestly, whether you have been holding one working position for a long stretch because it was the position you set up. That stillness is the thing to interrupt, like the guard flexing toes in the boots.",
        "Make one small supported change: a slight recline using the chair's own control, a shift of weight, a different angle for the feet. Small and comfortable, not maximum movement.",
        "Then look at the screen and reach for the keyboard or mouse. If the text is still readable without leaning and the hands are relaxed, the variation passes.",
        "Keep any variation that passes and switch between it and the original through the session. If a change fails the reach test, adjust the task or try another; go back to the earlier setting rather than forcing an awkward one.",
      ],
      notice: "You have more than one comfortable, supported arrangement for the same task, and moving between them does not cost you readable text or relaxed reach. The setup is a base, not a cage.",
      troubleshooting: "If a position change makes the work awkward, make the change smaller or move the task to suit it rather than forcing an unfamiliar posture. One failed variation is information about that variation, not proof that you should stop moving.",
    },
    recall: {
      prompt: "A person replaces all seated work with motionless standing. Which part of the position guidance have they not necessarily followed?",
      hint: "A different fixed position is still fixed.",
      answer: "The variation. Replacing all sitting with all standing swaps one fixed position for another, like a guard who stands rigidly to attention all day and faints by lunchtime. The guidance includes changing position, with support and the reach to the task checked after each change, because the benefit comes from not staying in any one arrangement for too long. Standing can be one of the positions someone moves between; it is not an answer on its own, and standing motionless for hours is exactly the freezing the instruction was warning against.",
    },
    quiz: {
      question: "Leaning back feels comfortable, but the keyboard now requires a long reach. What should happen next?",
      options: ["Keep the new position because it differs from the old one.", "Return to the previous setting and conclude all chair changes are unsuitable.", "Recheck input placement or choose another supported variation."],
      correctIndex: 2,
      explanation: "Leaning back is a good variation only if the task still works from there, so the next move is to recheck the keyboard placement, pulling it closer, or to choose a different supported position that keeps the reach relaxed. Keeping the new position just because it is different accepts a long reach as the price of variety. Returning to the old setting and swearing off all chair changes treats one failed adjustment as proof that moving was the error, which is the guard deciding never to flex his toes again.",
    },
    takeaway: "A good setup is a base to move around, not a pose to hold, like a guard who shifts weight invisibly to stay upright: change position a little on purpose, recheck the screen and the reach after every change, and when a variation fails, fix the task or pick another rather than freezing again.",
    sourceNote: "OSHA's publicly checked position guidance includes supported variation. This original exercise is not a posture prescription, a diagnosis, or a requirement to stand.",
  },
  {
    id: 'wellbeing-025',
    outcome: "Agree a shared stopping point for a long group activity, with autoplay off and a restart check, while making clear that anyone can take a break earlier without needing a reason.",
    scene: "Friends plan a documentary double bill with automatic playback and an uncertain gap between films.",
    sections: [
      {
        title: "The next film starts before anyone asks",
        paragraphs: [
          "Three friends settle in for a documentary double bill. The streaming app is set to roll straight into the second film when the first one ends. As the credits start, Alex is thirsty, Rae has been in the same corner of the sofa for ninety minutes and wants to move, and Mo, hearing nobody say anything, assumes everyone is happy to carry on. The second film starts. Nobody got up.",
          "Nothing about the sofa or the room caused that. The structure of the evening did. Autoplay turned silence into consent, and the social cost of being the one who says wait climbed with every second of the opening titles. A shared break does not happen because people want one. It happens because there is a place in the plan where stopping is the default and nobody has to interrupt to get it.",
        ],
      },
      {
        title: "An available pause is a process choice",
        paragraphs: [
          "Groups out walking in hills often agree a regroup point before they set off: everyone stops at the stile and waits for the slowest. That agreement does two things at once. It gives the group a shared pause nobody has to negotiate, and it quietly frees everyone in between, because stopping to tie a lace or drink some water no longer needs announcing. What it does not mean is that nobody may stop before the stile. A regroup point is a place to meet, not a distance to endure.",
          "OSHA's guidance on how work is organised looks at prolonged activity as something separate from equipment; a good chair does not fix an eight-hour stretch with no pause in it. The same thinking transfers to a sofa. The question is what keeps a session continuous, and the answer here is a setting and an assumption. A natural boundary like the end of a film is a stile: it makes a pause easy to coordinate without anyone having to argue for it. It is not a minimum sentence that everyone must serve before being allowed up. People need different breaks at different times, and plenty of them would rather not explain why. A usable agreement lowers the cost of stepping away. The moment the break schedule becomes another rule that stops someone leaving, it has turned into the problem it was meant to solve.",
        ],
      },
      {
        title: "Agree how restarting works",
        paragraphs: [
          "Before pressing play, the friends agree three things. They will stop between the films. Anyone can step away sooner, no reason required. And before the second film starts, someone will ask whether everyone is ready rather than reading silence as a yes. Then Alex switches off autoplay, which is the agreement written into the equipment: the app can no longer decide for them.",
          "What people do with the gap is their own business: water, a stretch, a different seat, standing at the window, nothing at all. Nobody has to perform the same break. If the thing they were watching were live and could not pause, the group would instead make leaving and coming back easy, a seat near the door, a quick recap, no fuss. The goal is permission and opportunity, not a scientifically ideal timetable for watching documentaries.",
        ],
      },
      {
        title: "Why silence gets read as yes",
        paragraphs: [
          "In a group, the first person to say stop pays a small social cost, and autoplay charges it every single time by making continuing the free option. Everyone waits for someone else, and the film starts. Agreeing the stile in advance moves the cost: now continuing without checking is the thing that needs justifying.",
          "Two habits. Before any long shared activity, name the regroup point out loud and say that earlier breaks need no reason. And switch off whatever would carry on without a human pressing a button, so that the plan, not the machine, decides when the next thing starts.",
        ],
      },
    ],
    visuals: [{
      type: 'dialogue',
      title: "Agree on stopping and restarting",
      alt: "Three friends agree to pause between films, allow earlier breaks, and check readiness before restarting.",
      caption: "Read the three lines as the agreement being made, not as a rule being imposed. Alex names the stile, the gap between films, and asks to switch off autoplay. Rae adds the clause that matters most: earlier breaks are allowed. Mo adds the restart check, so silence never gets read as yes again. The film boundary is a convenient meeting point, not a required wait.",
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
        "Pick an upcoming shared activity that could run for a long stretch: a film night, a game session, a long call. Look for where it would otherwise never stop.",
        "Find its natural stile, a film ending, a round finishing, a chapter break, and look for any autoplay or queue setting that you control and could switch off.",
        "Draft the agreement in two sentences: where the shared pause is, and that anyone can step away earlier without giving a reason. The second sentence is the one people forget.",
        "Add how the group will check before restarting, then actually send or say the draft. An agreement you have only written in your own head is still just an assumption about everyone else.",
      ],
      notice: "Your plan names a pause, gives permission to leave sooner, and has a clear restart check. Nobody has to interrupt a film to get a glass of water, and silence no longer counts as consent.",
      troubleshooting: "If the activity genuinely cannot pause, a live match, a performance, do not try to force a gap; arrange an easy exit and return instead, a seat near the door, a quick catch-up. Synchronised participation was never the point.",
    },
    recall: {
      prompt: "A multiplayer group agrees to pause after a round, but someone needs to leave before it ends. What should the agreement permit?",
      hint: "A planned boundary is an opportunity, not a minimum endurance requirement.",
      answer: "The earlier break, without question. The end of the round is the stile: a convenient place for the group to pause together, not a minimum anyone has to endure before they are allowed to go. If someone needs to leave mid-round, the agreement should already have said that is fine, and the group can sort out separately how the game copes with a player stepping out. A shared schedule that makes a person postpone a needed break has stopped being a courtesy and become a constraint, which is exactly what the agreement was supposed to prevent.",
    },
    quiz: {
      question: "Which arrangement makes a long shared viewing session easier to interrupt?",
      options: ["A planned gap, earlier individual breaks, and a restart check.", "A gap only if everyone requests it simultaneously.", "Autoplay with an assumption that silence means readiness."],
      correctIndex: 0,
      explanation: "A planned gap, earlier individual breaks, and a restart check make stopping and restarting explicit and cheap; the stile is agreed, lace-tying is allowed, and nobody reads silence as consent. A gap only if everyone asks at the same moment makes the break depend on a coincidence and keeps the social cost on whoever speaks first. Autoplay with silence taken as readiness is the original problem: the machine decides, and the second film starts over three people who wanted to get up.",
    },
    takeaway: "Agree the regroup point before you set off and say out loud that stopping earlier needs no reason, then switch off anything that would roll on by itself, so that a long shared session has a place to pause that nobody has to interrupt to reach.",
    sourceNote: "This is an original recreational application of OSHA work-process principles. The conversation and film schedule are not experimentally tested break protocols.",
  },
  {
    id: 'wellbeing-026',
    outcome: "Read a mixed dish by what each ingredient is doing and judge variety across the day or week, instead of expecting every meal to look like the Eatwell plate picture.",
    scene: "A shared kitchen serves a layered rice bowl with chickpeas, spinach, and plain yogurt.",
    sections: [
      {
        title: "The bowl does not look like the guide",
        paragraphs: [
          "Dinner in a shared kitchen tonight is a bowl: rice at the bottom, a scoop of chickpeas, a handful of wilted spinach, and a spoonful of plain yogurt on top. Someone at the table has the NHS Eatwell Guide in their head, the picture of a plate divided into tidy coloured segments, and looks at the bowl with mild suspicion. Everything is touching. Nothing is in a segment. It does not look like the picture.",
          "The picture was never a template for a plate. The Eatwell Guide describes an overall pattern of eating, what a sensible mix looks like across a day or a week, drawn as a plate because a plate is easy to understand. It does not ask you to arrange each meal into visible wedges. A curry, a sandwich, a soup, and a bowl all combine ingredients that play different roles, and they do not stop playing those roles because they are stirred together.",
        ],
      },
      {
        title: "Look inside the combined dish",
        paragraphs: [
          "Think of the Eatwell plate as a toolbox with labelled compartments. The compartments make it easy to see what kinds of tools exist. But when you are actually fixing a shelf, the screwdriver, the drill, and the rawlplugs are all out on the floor in a heap, and nobody says the job is failing because the tools are not in their slots. The heap contains exactly the same tools. The compartments were for understanding, not for working.",
          "So open the bowl up. Rice is the starchy part, the bulk that carries the meal. Chickpeas are a protein food, and they bring fibre along too, which is a reminder that an ingredient can belong to more than one story. Spinach is the vegetable. Plain yogurt is dairy. That is four of the guide's groups in one bowl with no lines between them. Two things this does not tell you. No single group gives you everything, which is why the pattern matters more than any one ingredient. And naming four groups says nothing about how much of each is right for a particular person; the guide is about proportion across time, not a portion scale for one dinner. The useful questions are simply: what is actually in this, and what does the rest of the day look like?",
        ],
      },
      {
        title: "Use the next meal as another opportunity",
        paragraphs: [
          "The cook thinks back over the day. Lunch was a plain bread roll eaten at a desk, which is starch and not much else. Tonight's bowl happens to bring in the things lunch left out: protein, vegetables, dairy. That is the pattern working across a day rather than inside a single plate. If yogurt is off the menu for someone, a substitute goes in on the strength of its own label, not on the assumption that anything in a similar pot is nutritionally the same.",
          "What nobody needs to do is punish the roll by skipping a meal, or cram every food group into every snack to make the numbers balance by bedtime. Looking across a day or a week is what makes the guide usable in a real household, where dishes are shared, schedules move, and people have preferences. The plate is the compartments. The week is the job.",
        ],
      },
      {
        title: "Why the picture gets mistaken for a rule",
        paragraphs: [
          "A diagram is more memorable than the paragraph next to it, so the plate survives and the words about overall pattern fall away. Then every mixed meal looks like a failure to follow instructions it was never given, and people either feel guilty about stews or start plating food into segments for no nutritional reason at all.",
          "Two habits. When a meal does not look like the guide, list its ingredients and name what each one is doing before you judge it. And judge the pattern over the day or the week, because that is the scale the guide was drawn for.",
        ],
      },
    ],
    visuals: [{
      type: 'layers',
      title: "Read the ingredients in the bowl",
      alt: "Rice at the base, chickpeas, spinach, and a yogurt topping form one mixed bowl containing several food groups.",
      caption: "Read the layers as an ingredient list, bottom to top: rice is the starch, chickpeas the protein with fibre, spinach the vegetable, yogurt the dairy. The order is just how this bowl was assembled, not a proportion to copy, and the same four things stirred together would still be the same four food groups. The compartments are for understanding; the heap is dinner.",
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
        "Pick a mixed meal you know well, a curry, a stew, a sandwich, a bowl, and write down its main ingredients from memory. No weighing; you are listing tools, not measuring them.",
        "Beside each ingredient, write which Eatwell group it belongs to, using the linked guide. Expect some to belong to more than one story, like chickpeas bringing protein and fibre.",
        "Before deciding anything is missing, look at the other meals in the day or the week. A gap in one dish is often filled two meals later, and that is the pattern working as intended.",
        "Name one realistic place to add variety that respects what you can get, what you like, and any dietary requirement. One place, not a rebuild of every meal.",
      ],
      notice: "The meal makes sense as a list of ingredients doing different jobs, rather than as a shape that does or does not match a picture. You have judged the heap by its tools.",
      troubleshooting: "If you are not sure what is in a dish, write unknown next to it rather than guessing from the name. A dish name tells you what it is called, not what it is made of, and nutritional completeness cannot be read off a label like lasagne.",
    },
    recall: {
      prompt: "A vegetable and bean sandwich does not resemble the Eatwell picture. How can it still be assessed usefully?",
      hint: "Unpack ingredients before judging the plate's appearance.",
      answer: "Unpack it. A vegetable and bean sandwich is the Eatwell plate stacked vertically: bread is the starchy part, beans are a protein food with fibre, and the vegetables are the vegetables. Stacking them between two slices did not remove any of those. Then look sideways at the rest of the day, because one sandwich was never meant to reproduce the whole guide on its own; the pattern lives across meals. The sandwich can be perfectly sensible and still not look like the picture, for the same reason a heap of tools can be the right tools for the job.",
    },
    quiz: {
      question: "Which review best fits a rice, chickpea, spinach, and yogurt bowl?",
      options: ["Judge only whether four equal sectors are visible.", "Identify ingredients and consider their place across meals.", "Assume four named groups prove every personal requirement is met."],
      correctIndex: 1,
      explanation: "Identifying the ingredients and considering where they sit across the day's meals is how the guide was meant to be used: it describes an overall pattern and explicitly includes mixed dishes. Judging only whether four equal sectors are visible mistakes the diagram for a plating instruction. Assuming that four named groups prove every personal requirement is met goes too far the other way, because group names say nothing about amounts for a particular person.",
    },
    takeaway: "The Eatwell plate is a toolbox with labelled compartments, not a plating instruction: read a mixed meal by its ingredients and what each one is doing, then judge the pattern across the day or week, and never mistake a tidy picture for a rule about how dinner should look.",
    sourceNote: "The NHS Eatwell page was checked for mixed dishes and balance across a day or week. This original bowl is not an individualized meal prescription.",
  },
  {
    id: 'wellbeing-027',
    outcome: "Compare the fibre in two starchy staples fairly, per the same quantity in the same state, and keep taste, cost, and suitability in the decision rather than treating the number as the verdict.",
    scene: "A shopper compares dry pasta labels for a familiar tomato-and-pea dinner.",
    sections: [
      {
        title: "Keep the meal, compare the staple",
        paragraphs: [
          "A shopper is making the usual Tuesday dinner: pasta with tomatoes and peas. In the aisle there are two packets that would do, one standard, one wholewheat, otherwise much the same. Nothing about the meal needs to change. The sauce is the sauce. The only decision is which bag of pasta goes in the pan.",
          "This is worth saying because food advice often arrives as a demand to overhaul everything. NHS guidance treats starchy foods as an ordinary part of eating, a source of energy and nutrients, and suggests choosing higher-fibre versions where they suit you. That is a swap, not a conversion. The shopper is comparing two staples for a meal they already like, and the whole question fits on the back of two packets.",
        ],
      },
      {
        title: "What higher fibre describes",
        paragraphs: [
          "Supermarkets print a price per 100 grams on the shelf edge for a reason. A big packet at a higher price and a small packet at a lower price tell you nothing until both are put on the same basis, and the per-100-gram figure does that in one line. Comparing a nutrient works the same way. The number on its own is meaningless; the number per the same amount, in the same state, is a comparison.",
          "Fibre is the part of plant foods that the body's digestive enzymes do not fully break down. Wholegrain versions keep more of the grain's outer layers, which is where much of the fibre lives, so they generally carry more fibre than the refined versions of the same food. The nutrition panel turns generally into a number for the two packets actually in your hands. But the shelf-edge rule applies with one extra twist. Dry pasta and cooked pasta are not the same basis. Cooking soaks in water and spreads the same fibre through a heavier portion, so a per-100-gram figure for dry pasta will always look higher than one for cooked. Compare dry with dry or cooked with cooked, never across. And a word on the front, rustic, artisan, country, is packaging, not a quantity. The panel on the back is where the number is.",
        ],
      },
      {
        title: "Read the example without turning it into a rule",
        paragraphs: [
          "Here are two invented labels on the same basis. The standard packet lists 3 grams of fibre per 100 grams of dry pasta. The wholewheat packet lists 8 grams per 100 grams dry. The difference is 5 grams per 100 grams dry, in this comparison, between these two fictional packets. That is the whole of what the numbers establish.",
          "They do not establish typical pasta values, a recommended serving, or how much fibre anyone should eat. And the number is not the only column on the decision. Cost, cooking time, texture, what the household will actually eat, and any individual dietary requirement all sit beside it. If the standard packet is the one that works tonight, the tomatoes and peas are still vegetables, other meals still exist, and dinner has not failed anything. The lesson is how to read two labels fairly. It is not a verdict on the Tuesday pasta.",
        ],
      },
      {
        title: "Why the front of the packet wins",
        paragraphs: [
          "The front is designed to be looked at and the back is designed to be legal. Brown packaging, a wheat sheaf, and a word like rustic do the persuading before anyone turns the bag over, and a packet can look wholesome while carrying the same fibre figure as the plain one next to it. The per-100-gram line on the back is dull, which is exactly why it is trustworthy.",
          "Two habits. Compare nutrients the way you compare prices, per the same amount in the same state, and refuse to compare until the bases match. And when a front-of-pack word is doing the persuading, turn the packet over before you let it.",
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: "Compare fibre on the same dry basis",
      alt: "Fictional standard pasta has 3 grams of fibre per 100 grams dry, and wholewheat has 8, a difference of 5 grams.",
      caption: "Check the unit before the heights: both bars are grams of fibre per 100 grams of dry pasta, the same basis, which is the only reason the comparison is fair. Then read the difference, 8 minus 3, five grams. The values are invented for this worked example and are not typical products or portions; put a cooked figure next to a dry one and the picture would lie.",
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
        "Pick two similar products, two pastas, two breads, two cereals, or use the invented pair above, and find the fibre line on each nutrition panel. The back of the packet, not the front.",
        "Before you compare, check three things match: the quantity, usually per 100 grams; the unit; and whether the figure is for the dry or the prepared food. This is finding the shelf-edge price per 100 grams.",
        "If the bases match, write the difference. If they do not, write comparison incomplete and say why, rather than forcing two incompatible numbers together.",
        "Add one practical note beside the result: price, texture, cooking time, or a dietary need. The fibre figure is one column of the decision, not the decision.",
      ],
      notice: "You have a specific, fair fibre comparison between two products on one line, and you have not judged a whole meal or a whole diet from a single packet.",
      troubleshooting: "If one label gives figures as cooked and the other as dry, stop; those numbers cannot be compared directly, because cooking adds water and dilutes the per-100-gram figure. Look for a matching basis on the packet or online, and if there is none, record the comparison as incomplete.",
    },
    recall: {
      prompt: "A brown-looking loaf says rustic, but no fibre figure has been checked. What would support a higher-fibre comparison?",
      hint: "Appearance is not a nutrient quantity.",
      answer: "A fibre figure for a comparable amount, read from the nutrition panel, set against the same figure for the other loaf on the same basis. Rustic is a front-of-pack word and brown is a colour; neither is a quantity, and plenty of brown-looking loaves are coloured rather than wholemeal. It is comparing two packets by how premium the font looks instead of by the price per 100 grams. Turn the loaf over, find the fibre per 100 grams, check the ingredient list for wholemeal flour, and only then say which has more.",
    },
    quiz: {
      question: "What do the fictional pasta labels establish?",
      options: ["The same numbers apply to 100 grams after cooking.", "The wholewheat option supplies more fibre regardless of the quantities compared.", "The wholewheat example has more fibre on the stated equal dry basis."],
      correctIndex: 2,
      explanation: "The two fictional labels were compared per 100 grams of dry pasta, so the only thing they establish is that the wholewheat example has more fibre on that stated equal dry basis. The same numbers do not apply after cooking, because the water absorbed makes 100 grams of cooked pasta contain less pasta and therefore less fibre. And the comparison does not hold regardless of quantities: a small portion of wholewheat against a large portion of standard could go the other way in total, which is why the shelf-edge basis matters.",
    },
    takeaway: "Compare fibre the way a shelf edge compares price, per the same amount in the same state, dry against dry and never across; treat words like rustic as packaging, keep the staple you actually like, and put cost, texture, and fit beside the number rather than beneath it.",
    sourceNote: "Inherited NHS starch and Eatwell references support higher-fibre options. Label values are explicitly invented; this is not an individual fibre target or dietary treatment.",
  },
  {
    id: 'wellbeing-028',
    outcome: "Choose fresh, frozen, or tinned produce by what is actually in the packet, how it must be stored and prepared, and whether it will be used before it spoils, instead of ranking by freshness.",
    scene: "An irregular work schedule makes a bag of fresh spinach harder to use than frozen peas and tinned tomatoes.",
    sections: [
      {
        title: "Buying fresh is not the same as using it",
        paragraphs: [
          "A shift worker does the weekly shop with good intentions and buys a bag of fresh spinach. Then a shift moves, a friend is in hospital, and two evenings vanish. On Friday the spinach is a bag of green slime at the back of the fridge. Meanwhile the frozen peas have sat in the freezer all week ready to go. The tin of tomatoes in the cupboard would have made the quick pasta that actually got cooked on Wednesday.",
          "The comparison that matters is not the one in the photograph of ideal shopping, where everything is fresh and leafy. It is which form of produce will be available, suitable, and safely usable under the week this person actually has. The NHS Eatwell Guide counts fresh, frozen, and tinned produce alike. It is not the guide that ranks them. The ranking is a feeling about freshness, and the feeling is what bought the spinach.",
        ],
      },
      {
        title: "The form changes handling, not whether it is produce",
        paragraphs: [
          "The same novel can be a hardback, a paperback, or a file on your phone. It is the same story in every form. What changes is how you carry it, where you keep it, and whether it survives being dropped in the bath. Nobody says the paperback is not really the book. Freezing and canning are the paperback and the e-book of vegetables. They are different ways of storing the same thing so that it is there when you want it.",
          "Freezing and canning are preservation methods, ways of holding food steady until it is needed. They do not turn a pea into something other than a pea. What they can change is what else is in the packet. Peas in a sauce are peas plus a sauce. Peaches in syrup are peaches plus a lot of sugar water. Peaches in juice are not. The produce is still produce; the whole product is what you are buying. Preparation differs too. Frozen does not mean ready to eat, since most frozen vegetables need cooking. An opened tin needs whatever storage its contents call for, usually a covered container in the fridge and a short shelf life. None of that can be read off the word frozen or the word tinned. It is on the label of the particular product. That is why the label beats any blanket opinion about the category.",
        ],
      },
      {
        title: "Match the pack to a real meal",
        paragraphs: [
          "For the next free evening the shift worker picks peas whose cooking time suits the dish, and a tin of tomatoes whose ingredient list says tomatoes and not much else. Fresh carrots also go in the basket. There is an actual plan for them on Sunday and they keep for weeks. Fresh is not the loser here. It is simply held to the same test as everything else: is there a plan, and will it survive until the plan?",
          "Storage, preparation effort, and the honest likelihood of use sit beside preference and cost in the decision. A beautifully labelled vegetable that needs fridge space you do not have is not food. Neither is one that needs an hour of prep on an evening you will not have. It is a future bin bag. The guide includes all three forms so that the one you choose can be the one you will eat.",
        ],
      },
      {
        title: "Why fresh keeps winning the trolley",
        paragraphs: [
          "Fresh produce looks like virtue in the basket. The decision is made in the shop, where the week ahead looks calmer than it will be. The bag of spinach is bought by an optimist and thrown away by a realist, and they are the same person five days apart. Frozen and tinned are bought by the realist from the start.",
          "Two habits. When you pick up fresh produce, name the meal and the day it is for. If you cannot, put it back or pick a form that waits. And read the ingredient list on frozen and tinned packs, because the category tells you how it is stored and the label tells you what you are actually getting.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Compare usable forms of produce",
      alt: "Fresh carrots, frozen peas, plain tinned tomatoes, and fruit in syrup require different checks for use and preparation.",
      caption: "Read each card as a handling check, not a ranking. Fresh carrots need storage and a plan. Frozen peas need freezer space and a cooking time. Tinned tomatoes need an ingredient check and a storage rule once opened. Fruit in syrup is a reminder that the whole product, not just the fruit, is what you buy. Same story, different formats; read the actual label every time.",
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
        "Choose one fresh, frozen, or tinned item that could go into a meal you already make. Start from the meal, not the shelf; the spinach was bought the other way round.",
        "Read the ingredient list and separate the produce from anything travelling with it: a sauce, a syrup, added salt or seasoning. Peas plus sauce is a different purchase from peas.",
        "Check the storage and preparation instructions, including what to do once a tin or packet is opened. The category does not tell you this; the label does.",
        "Write down a realistic use: which meal, which day. If you cannot, write down what is missing instead, freezer space, time to prep, a plan, because that missing thing is the reason the spinach went in the bin.",
      ],
      notice: "Your choice has a route from the shop to the plate that you can actually describe, and it does not rest on the word fresh. The form was chosen for the week you have.",
      troubleshooting: "If a product gives no clear instructions, or you have no safe place to store it once opened, choose a different one rather than assuming all tins and bags behave alike. Not knowing how to handle a food is a reason to pick another, not a reason to guess.",
    },
    recall: {
      prompt: "Two tins both contain peaches, but one uses juice and the other syrup. What should not be assumed?",
      hint: "The fruit name is not the complete ingredient list.",
      answer: "That they are the same product because they are both tins of peaches. The fruit is the same; what surrounds it is not, and the surrounding liquid is part of what you eat. Peaches in syrup come with a good deal of sugar water, peaches in juice come with juice, and the label is the only place that tells you which, along with anything else added. It is the same story in two formats, but one format came with a lot of extra pages. Read the ingredient list, compare what matters to you, and check the handling instructions for the actual tin in your hand.",
    },
    quiz: {
      question: "A schedule makes fresh produce difficult to use before it spoils. Which comparison is most useful?",
      options: ["Available forms, actual contents, and feasible storage and preparation.", "Freshness at purchase without considering when the food will be used.", "Treating all canned and frozen versions as equivalent without reading labels."],
      correctIndex: 0,
      explanation: "Available forms, actual contents, and whether you can store and prepare the item are the things that decide whether food gets eaten rather than binned, which is the problem the schedule created. Freshness at the moment of purchase ignores the only question that matters, when it will be used, and is how the spinach ended up as slime. Treating every frozen and tinned version as identical without reading labels throws away the one tool, the ingredient list, that tells peas from peas in sauce.",
    },
    takeaway: "Fresh, frozen, and tinned are the hardback, paperback, and e-book of the same vegetable: pick the format that will still be edible on the day you actually cook, read the label for what else is in the packet and how to store it once open, and judge every form by the same question, will it make it to the plate.",
    sourceNote: "The checked NHS Eatwell page includes varied produce forms; inherited label guidance supports product checks. This original pantry example is not a food-storage protocol.",
  },
  {
    id: 'wellbeing-029',
    outcome: "Count beans, peas, and lentils as protein foods when planning a meal, and tell a ready-cooked tin from a dried bag so you follow the right preparation for the form you have.",
    scene: "A packed-lunch plan compares a tin of cooked chickpeas with dried chickpeas in the cupboard.",
    sections: [
      {
        title: "The protein component is already in the cupboard",
        paragraphs: [
          "Amina is putting together a packed lunch: a wrap with salad and something to make it filling. She opens the cupboard looking for a protein ingredient, sees a tin of chickpeas, and moves past it. Chickpeas, in her head, are a side dish. They are the thing you put next to the real food. She goes on looking for the real food.",
          "The real food was the tin. Beans, peas, and lentils are pulses, and NHS guidance lists them among the protein foods alongside meat, fish, and eggs. A chickpea filling, a lentil dish, a spoonful of beans in a wrap: each can do the protein job of a lunch without meat anywhere near it. The format of the meal does not decide which foods are allowed to do that job. Amina's habit did. Habits can be looked at.",
        ],
      },
      {
        title: "One ingredient can contribute more than one thing",
        paragraphs: [
          "In a lot of workplaces someone is listed under one department and quietly does two jobs. The person in accounts who also fixes the printer is still in accounts. The org chart just names one of the things they do. Food groups are an org chart. They are drawn to help you plan variety, not to insist that each ingredient does exactly one thing and nothing else.",
          "Pulses are the accounts person who also fixes the printer. They are a protein food, and they bring fibre with them, so one tin does work in two columns. That is useful to know and easy to overstate. Calling chickpeas a protein food does not mean they supply everything a body needs. It does not make the other parts of the wrap optional. The bread is still the starchy base, the salad is still the vegetables, and other foods across the day fill in the rest of the pattern. Whether this particular example suits any particular person depends on preference, what they can get, and any dietary requirement. A food group can see none of those.",
        ],
      },
      {
        title: "Cooked and dried are different starting points",
        paragraphs: [
          "Further back in the cupboard Amina finds a bag of dried chickpeas. Same pulse, same food group, completely different distance from lunch. The tinned ones are cooked. The label tells you how to handle and store them and you can eat them more or less as they are. The dried ones are the flat-pack version: the same table, but several hours of soaking and cooking away from being a table. The instructions on the bag are the only ones that apply to them.",
          "The names match; the instructions do not. You cannot borrow the tin's handling for the bag because they are both called chickpeas. For today's lunch Amina picks the form whose actual instructions fit the time she has, which is the tin. She plans somewhere to keep the finished wrap cool until she eats it. What she has learned is two things at once: which foods can do the protein job, and that a food's form decides how much work is left before it can do it. Neither is a shortcut recipe for every bean.",
        ],
      },
      {
        title: "Why the side dish never gets promoted",
        paragraphs: [
          "Most people learned what counts as protein from the centre of a dinner plate, and the centre was usually meat. Anything that arrived at the edge got filed as a side, and the filing stuck. The tin of chickpeas has been doing a protein job all along. It just never got the title.",
          "Two habits. When you are looking for the protein in a meal, include pulses in the search before you decide there is nothing in. And before you plan around any pulse, check whether it is the assembled table or the flat-pack. Read its own label rather than the one next to it.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Same pulse, different preparation state",
      alt: "Cooked canned chickpeas and dried chickpeas can both contribute protein and fibre but have different preparation requirements.",
      caption: "Read the two cards as the same pulse at two different distances from lunch. The cooked tin is the assembled table: follow its own handling and storage instructions and it is ready. The dried bag is the flat-pack: soaking and cooking as stated on its own packet come first. Matching names do not mean matching readiness, and this picture replaces neither label.",
      items: [
        { label: "Cooked canned chickpeas", detail: "Follow this label's handling and storage instructions." },
        { label: "Dried chickpeas", detail: "Require the stated preparation and cooking before eating." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A pulse product label", "A familiar meal idea", "Paper"],
      steps: [
        "Pick a bean, pea, or lentil product you have, and decide first whether it is already cooked or dried. That is the assembled-or-flat-pack question, and everything else depends on it.",
        "Read the preparation instructions on that product's own packaging. Do not borrow the directions from a different form of the same food; the tin and the bag share a name, not a method.",
        "Name the job it could do in a meal you already make, such as the protein in a wrap or a salad, alongside the other ingredients that are still needed. Write the other ingredients down too, so the pulse is not asked to be the whole meal.",
        "Record what preparation and storage the finished food needs. If you cannot meet those today, choose a different form or a different plan rather than guessing the cooking from the name.",
      ],
      notice: "Your meal idea names the role the pulse plays and the preparation still standing between it and the plate. The side dish has been promoted, and the flat-pack has been recognised as flat-pack.",
      troubleshooting: "If the label is missing or unreadable, do not improvise soaking or cooking times from what you remember about a different bean. Find the instructions for this product, or use a form whose instructions you have.",
    },
    recall: {
      prompt: "A lentil dish is described as having no protein because it contains no meat. What distinction corrects that claim?",
      hint: "Protein foods are not restricted to animal foods.",
      answer: "Lentils are pulses, and pulses are protein foods; the NHS lists them in the same group as meat, fish, and eggs. A dish with no meat can have plenty of protein in it, because the group was never defined by the animal. Lentils also bring fibre, so they are the accounts person fixing the printer, doing two jobs under one name. What the correction does not do is make the lentil dish a complete meal on its own or say how much protein any particular person needs; it only fixes the claim that there is none.",
    },
    quiz: {
      question: "A quick wrap uses cooked chickpeas, but only dried ones are available. Which check establishes what must happen before they can be used?",
      options: ["Whether the packet identifies chickpeas as a protein food.", "The preparation and cooking required for this form.", "Whether the dried and canned versions have a similar flavour."],
      correctIndex: 1,
      explanation: "Dried chickpeas and cooked ones are the same pulse at different stages, so the only thing that tells you what must happen before using the dried ones is the preparation and cooking required for that form, the flat-pack instructions. Whether the packet calls them a protein food is true of both and changes nothing about readiness. Flavour similarity is beside the point; a dried chickpea tastes like nothing until it has been soaked and cooked.",
    },
    takeaway: "Pulses do the protein job and bring fibre with them, so include them when you look for the protein in a meal, and treat dried and cooked as the flat-pack and the assembled table: same pulse, different distance from the plate, and only each product's own label tells you how far.",
    sourceNote: "The checked NHS Eatwell reference includes pulses as protein foods. This original comparison provides no cooking shortcut, nutrient target, or individualized meal prescription.",
  },
  {
    id: 'wellbeing-030',
    outcome: "Compare two cooking fats by the kind of fat they actually contain rather than by plant origin or a natural label, use a modest amount, and keep the rest of the meal as separate decisions.",
    scene: "A home cook compares rapeseed oil and coconut oil before preparing a familiar vegetable dish.",
    sections: [
      {
        title: "Both bottles come from plants",
        paragraphs: [
          "A cook is about to make a familiar vegetable dish and opens the cupboard to find two bottles: rapeseed oil and coconut oil. The coconut oil has a leafy label with the word natural on it in large friendly letters. Both oils come from plants. On that basis the cook is about to treat them as interchangeable.",
          "Shared origin is not shared composition. Two things can come from plants and be built from very different fats, and a cheerful label about nature does not change what is in the bottle. NHS Eatwell guidance says to choose unsaturated oils and spreads, and to use small amounts of them. The useful comparison, then, is what kind of fat each product mostly contains and whether it suits the job in the pan, not how confident the front label sounds.",
        ],
      },
      {
        title: "Fat type is not a plant-versus-animal shortcut",
        paragraphs: [
          "Balsa and oak both come from trees. One floats and snaps between your fingers; the other holds up a staircase for two hundred years. Nobody would build a bookcase out of balsa because it is tree-based. Where something comes from tells you very little about what it is like, and from plants is as broad a category as from trees.",
          "Saturated and unsaturated are names for different fat structures, and most foods contain a mixture rather than purely one. Rapeseed, olive, and sunflower oils are the examples the guidance gives of unsaturated choices. Coconut oil comes from a plant and is nonetheless high in saturated fat, which is exactly why the shortcut fails: it is the balsa in the timber yard. Checking composition tells you something; sorting bottles by plant or animal does not. Two further boundaries. A preferred type is not a licence for an unlimited amount, since the guidance says small amounts whichever oil you choose. And avoiding all fat is not what the Eatwell pattern describes either. Some fat, of a sensible kind, in modest quantity, is the shape of the advice.",
        ],
      },
      {
        title: "Keep the recipe and the whole meal in view",
        paragraphs: [
          "For the vegetable dish the cook checks that the rapeseed oil is suitable for the recipe and then uses the recipe's amount, which is modest. The favourable label is not a reason to add an extra glug; a better type of fat is still fat. Nothing here requires buying a fancier bottle, either. The ordinary rapeseed oil already in the cupboard is the unsaturated option the guidance names.",
          "And the oil is one decision among several. The vegetables, the starchy part of the meal, and a suitable protein food are separate choices that the cooking fat cannot make for you. Swapping oils does not put the missing ingredients on the plate. What the cook has at the end is a more informed pick between two bottles already owned, not a verdict that the right oil makes a dish nutritionally complete.",
        ],
      },
      {
        title: "Why natural does so much work",
        paragraphs: [
          "Words like natural and plant-based carry a glow of health without making any specific claim, which is precisely why they sell. They describe where a thing came from and let the shopper imagine the rest. Oak and balsa are equally natural. The question was never origin; it was always what the stuff is made of.",
          "Two habits. When a label leans on origin, plant, natural, traditional, turn the bottle round and look at the composition instead. And keep the amount small whichever oil wins, because the guidance has two halves and the second one is about quantity.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Plant origin does not settle fat type",
      alt: "Rapeseed oil illustrates an unsaturated choice; coconut oil illustrates a plant-derived fat with a high saturated proportion.",
      caption: "Read the two cards as oak and balsa: both from plants, built differently. Rapeseed is an unsaturated oil named in NHS guidance. Coconut oil is plant-derived and high in saturated fat, which is the whole reason origin cannot be the test. The cards compare composition, not brands, prices, or cooking temperatures, and neither says how much to use; that comes from the recipe.",
      items: [
        { label: "Rapeseed oil", detail: "An unsaturated option named in NHS guidance." },
        { label: "Coconut oil", detail: "Plant-derived, but high in saturated fat." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A cooking-fat label", "A familiar recipe"],
      steps: [
        "Take a cooking fat from your kitchen and read the product name and ingredient list, not the front-of-pack claim. Natural, plant-based, and traditional are about origin; you are after what it is made of.",
        "Work out whether it is one of the unsaturated options, using the linked guidance to check if you are unsure. This is the timber-yard question: oak or balsa, regardless of the fact that both came from a tree.",
        "Check the product suits the recipe and the cooking task, and read the recipe's amount. A preferred oil used by the half-cup is still a lot of fat; the amount is the second half of the advice.",
        "Write one sentence on what this choice changes, and name one part of the meal it does not touch, such as the vegetables or the protein. The oil is one decision, not the dinner.",
      ],
      notice: "Your reasoning names the type of fat and the amount for the task, instead of treating plant origin or a premium label as the whole answer. You could explain why coconut oil does not get a pass for coming from a coconut.",
      troubleshooting: "If the product is a blend and the label is vague about what is in it, keep that uncertainty on the page and look up its composition rather than guessing from the bottle colour or the leaf on the label. A pale oil is not evidence of anything.",
    },
    recall: {
      prompt: "A spread says plant-based, so someone assumes its fat composition must match olive oil. What should they inspect?",
      hint: "Origin and composition are different information.",
      answer: "The ingredients and the nutrition information, specifically the balance of saturated and unsaturated fat. Plant-based tells you the source, and plant sources include coconut and palm as well as olive, so it is the timber yard again: oak and balsa are both trees. The spread might well be an unsaturated option; the point is that the label has not told you, and olive oil's composition cannot be transferred to it by association. Read the panel, check it suits the planned use, and keep the amount modest whatever the answer turns out to be.",
    },
    quiz: {
      question: "Which reasoning best fits choosing a cooking fat for an ordinary meal?",
      options: ["Choose by plant origin without checking the type of fat.", "Use a higher price as evidence of a preferable fat composition.", "Check fat type, suitability, and a modest recipe amount together."],
      correctIndex: 2,
      explanation: "Checking the fat type, whether it suits the task, and the recipe's modest amount together follows both halves of the guidance, type and quantity, and keeps the oil as one decision among several. Choosing by plant origin alone is building the bookcase out of balsa because it came from a tree. Using price as evidence of composition trusts the shelf tag to do a job only the ingredient panel can do, and premium bottles of saturated fats exist in every supermarket.",
    },
    takeaway: "Plant origin is the timber yard, not the test: oak and balsa both grow on trees, and rapeseed and coconut oil both come from plants, so read the composition to find the unsaturated option, use the recipe's small amount whichever bottle you pick, and remember the oil cannot put the vegetables or the protein on the plate.",
    sourceNote: "The checked NHS Eatwell page recommends small amounts of unsaturated oils. The original cupboard comparison is general education, not a personal nutrition prescription.",
  },
  {
    id: 'wellbeing-031',
    outcome: "Put two label figures on the same quantity, per 100 grams or millilitres in the same state, before comparing products, and keep the conclusion as narrow as the arithmetic allows.",
    scene: "Two soup labels use different serving sizes, reversing the impression created by their salt-per-serving numbers.",
    sections: [
      {
        title: "The smaller number describes a smaller serving",
        paragraphs: [
          "Two tins of soup, side by side on the shelf. Soup A says 0.6 grams of salt per serving. Soup B says 0.8 grams per serving. A shopper watching their salt picks up A, because 0.6 is less than 0.8, and that is the whole of the thinking. Then the small print: A's serving is 150 grams. B's is 250 grams.",
          "The two numbers were never describing the same amount of soup. One is a small bowl, the other a large one. Comparing them as printed is comparing a small bowl of one soup with a large bowl of another and concluding something about the soups. The labels answered questions about two different portions. To compare the products, you first have to ask what each would contain in the same weight of soup.",
        ],
      },
      {
        title: "Use one common basis",
        paragraphs: [
          "A car with a sixty-litre tank goes further on a full tank than a car with a forty-litre tank. Nobody concludes from that which car is more efficient. The tank is not the measure; miles per gallon is, and it is written that way precisely so that two cars with different tanks can be compared. Per 100 grams is the miles per gallon of a food label. It strips out the size of the tank, which here is the manufacturer's choice of serving.",
          "UK nutrition panels normally give values per 100 grams or per 100 millilitres, as the NHS explains, and that column is there for exactly this purpose. When a label only gives a per-serving figure, you make your own per-100: divide the nutrient amount by the serving quantity, then multiply by 100. Three cautions. Keep weight and volume apart; grams and millilitres are not interchangeable for every food, so compare grams with grams or millilitres with millilitres. Check that both figures describe the soup in the same state, as sold or as prepared, because adding water to a concentrate changes the basis. And remember what the number is: a concentration in a specified quantity. It says nothing about how much anyone should eat.",
        ],
      },
      {
        title: "Calculate, then return to the intended portion",
        paragraphs: [
          "Soup A: 0.6 divided by 150, times 100, gives 0.4 grams of salt per 100 grams. Soup B: 0.8 divided by 250, times 100, gives 0.32 grams per 100 grams. On a common basis B is the lower-salt soup, which is the opposite of what the per-serving numbers suggested. The shopper who picked A by comparing 0.6 with 0.8 picked the saltier product.",
          "Then step back to the bowl. The amount of salt someone actually eats depends on how much soup goes in it, so a big bowl of B can still contain more salt than a small bowl of A. The per-100 figure tells you which soup is more concentrated; the ladle decides the rest. And one nutrient is one column. Price, taste, what else is in the tin, and the rest of the meal are untouched by this calculation. Keep the conclusion exactly as narrow as the arithmetic: per 100 grams, B has less salt than A.",
        ],
      },
      {
        title: "Why the printed number wins",
        paragraphs: [
          "The per-serving figure is big, bold, and often on the front, and the serving size is small and on the back. The design makes the comparison feel finished before the tank size has been checked. Manufacturers are not obliged to pick the same serving as each other, and a smaller serving makes any number look better.",
          "Two habits. Before comparing any two label numbers, say out loud what quantity each one describes, and refuse to compare until the quantities match. And when the match is missing, build it: divide by the serving, multiply by 100, and compare the miles per gallon.",
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: "Equal soup quantities change the comparison",
      alt: "On a common 100 gram basis, fictional Soup A contains 0.4 grams of salt and Soup B contains 0.32 grams.",
      caption: "Read the unit under the bars first: grams of salt per 100 grams of soup, the same tank size for both. Then read the heights: A at 0.4, B at 0.32, the reverse of the per-serving impression. These bars were calculated from the fictional 150-gram and 250-gram servings in the text; they describe 100 grams of each soup, not the original unequal bowls.",
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
        "Choose one nutrient and, for each of two labels, write down three things together: the amount, the serving quantity it belongs to, and the units. Writing the quantity next to the number is what stops the tank sizes slipping past you.",
        "Look for a per-100 column on each panel. If there is none, make one: divide the amount by the serving quantity and multiply by 100. That is your miles per gallon.",
        "Only compare when the nutrient, the units, and the state of the food match on both sides. Grams against millilitres, or concentrate against made-up soup, is not a comparison.",
        "Write the conclusion as narrowly as the calculation allows, per 100 grams of each product, and add a line noting that the actual bowl will hold whatever you ladle into it.",
      ],
      notice: "Your comparison separates how concentrated each product is from the serving size the manufacturer happened to choose. You can point at the two per-100 figures and explain why the printed numbers pointed the other way.",
      troubleshooting: "If one label gives weight and the other volume, do not assume a millilitre weighs a gram for soups, sauces, or anything thick; find a matching basis, or mark the comparison as not possible from these labels. A guessed conversion is worse than an honest blank.",
    },
    recall: {
      prompt: "Fictional yogurts list 4 grams of protein per 125 grams and 5 grams per 200 grams. Which has more per 100 grams?",
      hint: "Divide by the portion weight, then multiply by 100.",
      answer: "The first one. Four grams in 125 grams is 4 divided by 125 times 100, which is 3.2 grams per 100 grams. Five grams in 200 grams is 5 divided by 200 times 100, which is 2.5 grams per 100 grams. The second yogurt printed the bigger number because it printed the bigger pot, the larger tank going further on a fill. Put both on the per-100 basis and the first is the more concentrated source of protein, by a clear margin. How much protein you actually get still depends on which pot, and how much of it, you eat.",
    },
    quiz: {
      question: "Two drinks list sugar per 150 millilitres and per 250 millilitres. Which comparison separates product differences from serving size?",
      options: ["Compare the two per-serving numbers as printed.", "Compare sugar for the same volume of each drink.", "Compare the total sugar in differently sized full bottles."],
      correctIndex: 1,
      explanation: "Comparing sugar for the same volume of each drink is the common basis, the miles per gallon; it removes the serving sizes the two manufacturers chose and leaves only the drinks. Comparing the per-serving numbers as printed compares 150 millilitres of one with 250 of the other, which is the soup mistake. Comparing totals in full bottles of different sizes answers a real but different question, how much is in each bottle, and says nothing about which drink is sweeter per mouthful.",
    },
    takeaway: "Per 100 grams is the miles per gallon of a food label: before comparing two numbers, make sure they describe the same quantity in the same state, build the per-100 figure yourself if the panel does not give it, and then remember that the bowl, not the label, decides how much you actually eat.",
    sourceNote: "Inherited NHS label guidance explains common comparison quantities. All soup and yogurt figures are invented; calculations describe labels, not personal nutrient targets.",
  },
  {
    id: 'wellbeing-032',
    outcome: "Scale a nutrient figure from the label's serving to the whole pack, or to the amount you actually have, by dividing to find a multiplier, without treating the serving as advice about how much to eat.",
    scene: "A roasted-corn packet contains three labelled servings, but its front panel shows only one serving's salt.",
    sections: [
      {
        title: "The front number is not always the pack number",
        paragraphs: [
          "A bag of roasted corn, 90 grams. On the front, in a tidy little badge, it says 0.2 grams of salt. Someone picks it up, reads the badge, and thinks: 0.2 grams for the bag, that is nothing. They eat the bag. The badge was for a 30-gram serving. There were three of those in the bag.",
          "Nothing in this lesson is a judgement about whether the corn should have been eaten. The problem is narrower and more useful than that. The quantity the person imagined, the whole bag, and the quantity the number actually described, a third of it, were different. The words per serving next to the figure are not decoration. They are half the information, and reading the number without them is reading half a sentence.",
        ],
      },
      {
        title: "A serving is a reference quantity",
        paragraphs: [
          "A hotel website shows a room at ninety pounds. You book three nights. Nobody is surprised when the bill is two hundred and seventy. Everyone understands that the ninety was per night, a reference price, and the stay is however many nights you chose. The hotel did not tell you how long to stay by quoting a nightly rate. It gave you a number per unit so you could do the multiplication.",
          "A serving on a food label is the hotel's per night. It is the manufacturer's reference quantity, the amount the nutrient figures were worked out for. It may or may not be what you eat, what you share, or what you leave in the packet; the NHS notes that labelled portions and real portions often differ. To scale the figures to the amount you are actually thinking about, work out how many labelled servings are in it: divide your quantity by the serving size. That gives a multiplier, and the multiplier is applied to each nutrient figure. What it does not do is turn the serving into an instruction. A nightly rate is not a recommendation to stay one night.",
        ],
      },
      {
        title: "Scale the example carefully",
        paragraphs: [
          "The 90-gram bag divided by the 30-gram serving is three servings. One serving: 0.2 grams of salt. Two servings: 0.4. The whole bag: 0.6. In this invented example, the badge understated the bag by a factor of three. Nobody lied; the badge was describing a different quantity from the one being eaten.",
          "Two things keep the arithmetic honest. Real labels round their figures, so a result calculated from a rounded number is approximate too, and it is worth saying so. And a shared bowl breaks the method unless you know how much actually went into it; the packet total is not your total if half of it went to someone else. The output of all this is an accurate statement about a quantity: this bag contains about 0.6 grams of salt. It is not a verdict that one serving is the correct amount, and finishing a packet proves nothing about a person except that the packet is finished.",
        ],
      },
      {
        title: "Why per serving gets dropped",
        paragraphs: [
          "The number is designed to be read at a glance and the quantity is designed to be legally present, so the eye takes the number and leaves the unit on the shelf. Manufacturers also choose the serving, and a smaller serving makes any figure look gentler on the front. The ninety-pound room is always advertised per night, never per week.",
          "Two habits. Whenever you read a nutrient figure, read the quantity it belongs to in the same breath, as one phrase: 0.2 grams per 30 grams. And when the amount you care about is bigger or smaller than that quantity, do the hotel arithmetic before you believe the badge.",
        ],
      },
    ],
    visuals: [{
      type: 'bars',
      title: "Scale the amount the label describes",
      alt: "Fictional salt amounts rise from 0.2 grams for one serving to 0.4 for two and 0.6 for the three-serving packet.",
      caption: "Read the three bars as one night, two nights, three nights at the same rate. The label's 0.2 grams is for 30 grams; the 90-gram bag is three of those, so the whole packet comes to 0.6. Every bar is the same invented product, and the serving and pack sizes are reference quantities for the arithmetic, not advice about how much of the bag to eat.",
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
        "On a packaged food, find two quantities: the net weight of the whole pack, and the quantity the nutrition figures are given for. Write both down with their units; the badge is per night, and you need to know how many nights the pack is.",
        "Divide the whole pack by the labelled serving, keeping the units the same, grams by grams or millilitres by millilitres. The answer is how many servings the pack holds.",
        "Multiply one nutrient figure, salt, sugar, whatever you are checking, by that number to get the figure for the whole pack.",
        "Write the quantity beside your answer, for the whole 90-gram bag, and note any rounding on the label or anything missing, such as a drained weight that differs from the net weight. A number without its quantity is the mistake you started with.",
      ],
      notice: "Your calculation keeps the label's serving and the whole pack clearly apart, and the number you end with has a quantity attached to it. You could explain the badge to the person who ate the bag.",
      troubleshooting: "If the pack gives figures on a different basis from its net weight, drained weight for something in brine, or as prepared for something you add water to, find the nutrition basis that matches the quantity you are scaling before you multiply. Scaling across two different bases gives a confident wrong answer.",
    },
    recall: {
      prompt: "A fictional 600 millilitre drink lists nutrients per 200 millilitres. What multiplier describes the whole bottle?",
      hint: "Divide the bottle volume by the reference volume.",
      answer: "Three. The bottle is 600 millilitres and the label's reference is 200 millilitres, so 600 divided by 200 is three servings, and every per-200 nutrient figure gets multiplied by three to describe the bottle. That is the three-night stay at the nightly rate. The 200 millilitres is the manufacturer's reference quantity, not advice about how much to drink in one go. If you drink half the bottle the multiplier is one and a half rather than three; the arithmetic follows the amount you actually have, not the amount on the badge.",
    },
    quiz: {
      question: "Two people share a fictional 90 gram packet listing 0.2 grams of salt per 30 grams. What describes the whole packet?",
      options: ["0.6 grams, because it contains three labelled servings.", "0.2 grams, because that is the printed front figure.", "0.4 grams, because two people share the packet."],
      correctIndex: 0,
      explanation: "The packet is 90 grams and the label describes 30-gram servings, so it holds three servings and contains three times 0.2, which is 0.6 grams of salt, the three-night bill at the nightly rate. The printed 0.2 is one serving, a third of the bag. Dividing by the number of people tells you what each person ate if they split it evenly, which is a different question; the packet's total does not shrink because two people shared it.",
    },
    takeaway: "A serving is the hotel's nightly rate, a reference quantity and not an instruction: read every nutrient figure together with the quantity it describes, divide the amount you actually have by the serving to get a multiplier, scale the figure, and write the quantity beside the answer so the badge can never pass for the bag again.",
    sourceNote: "NHS label guidance distinguishes portions and stated quantities. All example numbers are fictional; this is arithmetic education, not a portion prescription or food judgement.",
  },
  {
    id: 'wellbeing-033',
    outcome: "Use the ingredient list to learn what is in a food and the nutrition panel to learn how much of a nutrient it contains, without letting the order of ingredients stand in for a quantity.",
    scene: "A cereal package lists sugar last but also contains raisins and gives a total-sugars figure.",
    sections: [
      {
        title: "One package contains two kinds of evidence",
        paragraphs: [
          "A box of cereal. The ingredient list says: oats, raisins, sunflower seeds, sugar. A shopper reads it and relaxes, because sugar is last, and last must mean hardly any. Then they turn the box and the nutrition panel says 18 grams of total sugars per 100 grams. That seems like a lot for something with sugar at the bottom of the list.",
          "The two panels are not arguing. They are answering different questions, and the shopper asked one of them the other's question. The ingredient list tells you what went into the product and roughly in what order of amount. The nutrition panel tells you how much of a nutrient is present in a stated quantity of the finished food. The word sugar in the first list and the total sugars figure in the second are related, but they are not the same fact.",
        ],
      },
      {
        title: "Order describes ingredient weight, not nutrient rank",
        paragraphs: [
          "A supermarket receipt lists what you bought, item by item. If you wanted to know how much sugar was in the whole shop, you could not get it by looking for the line that says sugar. The raisins, the fruit juice, and the jam are on separate lines and each brings its own. The receipt tells you what is in the bag. It does not add up a nutrient across everything in it. For that you would need a different document.",
          "UK ingredient lists are generally written in descending order of weight: the ingredient there is most of comes first. So oats first means more oats than anything else, by weight, in the recipe. It does not mean oats supply the most of every nutrient, and it does not mean the ingredient called sugar is the only sugar in the box. Raisins are mostly sugar by weight, naturally, and they sit second on the list. The total sugars figure counts those along with the added sugar at the end. That is why sugar being last cannot tell you the total; several lines on the receipt contribute to it. Two further boundaries. A short ingredient list is a fact about simplicity, not about whether a product suits any particular person. And the nutrition panel's number is for a stated quantity, 100 grams here, so it compares with another cereal only on the same basis.",
        ],
      },
      {
        title: "Match the question to the panel",
        paragraphs: [
          "So put each question to the right panel. Does this cereal contain raisins, or nuts, or anything someone at the table cannot eat? Ingredient list. How does its sugar compare with the box next to it? Nutrition panel, both read per 100 grams. The 18 grams came from the panel and could not have been worked out from the order of four words on the side.",
          "The front of the box, with its wholesome fields and its sunrise, answers neither question. Keeping the two uses apart does two things at once. It stops an appealing ingredient name standing in for a nutrient comparison it cannot make. And it lets you go on using the ingredient list for the thing it is genuinely good at, which is telling you what is actually in there.",
        ],
      },
      {
        title: "Why last on the list feels like proof",
        paragraphs: [
          "Ingredient order is a real rule and people know it, so it feels rigorous to reason from it. The trap is that the rule ranks ingredients, not nutrients, and nutrients travel inside several ingredients at once. Sugar at the end of the list is true and nearly useless as a measure of sweetness, like noticing the receipt has only one line that says sugar.",
          "Two habits. When you want to know what is in a food, read the ingredient list; when you want to know how much of something, read the nutrition panel, and never let one answer the other's question. And when a figure surprises you, look for the ingredients that carry that nutrient without being named for it.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Ask each panel its own question",
      alt: "The fictional cereal's ingredient list names oats, raisins, seeds, and sugar; its nutrition panel states 18 grams total sugars per 100 grams.",
      caption: "Read the two cards as two documents about one box. The left is the receipt: what went in, in weight order, and it tells you raisins are present. The right is the total for one nutrient in a stated quantity, 18 grams per 100 grams, and it counts the sugar in the raisins as well as the sugar at the end of the list. The value is invented; the point is that order cannot produce it.",
      items: [
        { label: "Ingredient list", detail: "Oats, raisins, sunflower seeds, sugar: composition in weight order." },
        { label: "Nutrition panel", detail: "18 g total sugars per 100 g: a quantity on a stated basis." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A packaged-food label or the cereal example", "Paper"],
      steps: [
        "Take a food label, or use the cereal, and read the ingredient list. Write down one question it answers directly and well, such as whether the product contains a particular ingredient. That is the receipt's job.",
        "Find one nutrient figure on the panel and copy both the amount and the quantity it refers to, together, as one phrase. The number means nothing without its per 100 grams.",
        "Write a sentence explaining why the order of the ingredients could not have produced that figure. If it helps, name the ingredients that carry the nutrient without being called by its name, like raisins carrying sugar.",
        "Pick one claim from the front of the pack and check it against whichever panel can actually confirm or deny it. The front answers neither question on its own.",
      ],
      notice: "Your note keeps what is in the food and how much of a nutrient it contains as two different kinds of information, each read from its own panel. You can say which panel you would open for which question.",
      troubleshooting: "If you find yourself estimating percentages from the order of the ingredients, stop; order gives rank, not amounts, and the gaps between items can be huge or tiny. If a quantity matters, it has to come from the nutrition panel or from a declared percentage on the list.",
    },
    recall: {
      prompt: "A sauce lists tomatoes first. Does that tell you its exact salt content per 100 grams?",
      hint: "The leading ingredient and a nutrient quantity are different facts.",
      answer: "No. Tomatoes first tells you tomatoes are the biggest ingredient by weight, and nothing else; it is the receipt's first line. Salt content per 100 grams is a quantity, and quantities live on the nutrition panel, which is where the salt figure should be read, together with its per-100-gram basis. Salt may also arrive through several ingredients, a stock, a cheese, a cured meat, none of them called salt, so even the position of the word salt on the list would not have told you. Different question, different panel.",
    },
    quiz: {
      question: "A cereal lists sugar last and raisins earlier. Where should a shopper check total sugars for comparison?",
      options: ["Only the position of the ingredient called sugar.", "Only the number of ingredients listed before sugar.", "The total-sugars figure for the same quantity on the nutrition panel."],
      correctIndex: 2,
      explanation: "Total sugars for the same quantity on the nutrition panel is the only figure that counts sugar from every ingredient, the raisins included, on a basis that can be compared with another box. The position of the ingredient called sugar ranks one ingredient by weight and ignores the sugar travelling in the others. Counting how many ingredients come before sugar is the same mistake with extra arithmetic; it is still reading the receipt for a total the receipt does not contain.",
    },
    takeaway: "The ingredient list is the receipt and the nutrition panel is the total: read the first to learn what is in the food and the second to learn how much of a nutrient it carries per stated quantity, and remember that a nutrient can arrive through several ingredients that are not named for it.",
    sourceNote: "Inherited NHS food-label guidance informs this UK-label example. The cereal and nutrient value are invented; labelling rules and formats differ by jurisdiction.",
  },
  {
    id: 'wellbeing-034',
    outcome: "Check whether a plant drink states added calcium and read its calcium and protein per the same volume as the drink it replaces, instead of assuming shared kitchen use means shared composition.",
    scene: "Two unsweetened plant drinks both work in porridge but list different calcium and protein information.",
    sections: [
      {
        title: "Both cartons work in the saucepan",
        paragraphs: [
          "Two cartons on a supermarket shelf, one soy drink and one oat drink, both labelled unsweetened. Either will make porridge, either will go in coffee, and both come in the same shape of carton as milk. A shopper swapping milk for a plant drink picks one up, sees unsweetened, and assumes the job is done. Same shelf, same use, same thing.",
          "Same use is not same contents. Unsweetened answers one question, whether sugar has been added. It says nothing about how much protein is in the carton or whether calcium has been put in. Two drinks can pour identically and differ a great deal in what they bring to the breakfast. The carton shape, the shelf position, and the fact that both work in a saucepan are not evidence about any of that.",
        ],
      },
      {
        title: "Fortified means something was added",
        paragraphs: [
          "Two AA batteries fit the same slot in the remote. One is an ordinary alkaline cell; the other is a rechargeable with a quarter of the capacity. They are the same size, and they both make the remote work for a while. Anyone who assumed they were identical because they fit would be surprised by how soon one of them dies. Fitting the slot is a fact about shape. What is inside is a different fact, and only the label tells you.",
          "Fortification means a nutrient was added during production that the base ingredient did not have, or did not have enough of. NHS guidance mentions unsweetened, calcium-fortified alternatives to dairy for exactly this reason. Milk brings calcium; oats and soy on their own do not bring much, so the useful versions are the ones where it has been added. Plant-based does not tell you whether that happened. Only the ingredient list, which will mention added calcium, and the nutrition panel, which will give the amount, can tell you. They tell you for that carton only. Protein is a separate line and worth reading, because plant drinks vary widely on it. None of this says a drink must supply every nutrient, or that one plant is right for every person. It says a substitution has contents, and the contents are on the back.",
        ],
      },
      {
        title: "Keep the comparison product-specific",
        paragraphs: [
          "Put the two fictional cartons side by side at the same volume. Drink A, a soy drink, lists added calcium and gives 120 milligrams of calcium and 3 grams of protein per 100 millilitres. Drink B, an oat drink with no fortification, gives 20 milligrams of calcium and 1 gram of protein on the same basis. Both are unsweetened. Both pour. They are not the same battery.",
          "Those figures belong to these two invented cartons, not to soy drinks or oat drinks in general; a fortified oat drink exists and would read quite differently. What the shopper can now do is say what the swap changes, in calcium and protein terms. Then they can weigh that against taste, cost, dietary requirements, and what the rest of the day's eating looks like. The drink does not have to carry everything. It just should not be assumed to carry what milk carried because it sits where milk sat.",
        ],
      },
      {
        title: "Why the slot fools people",
        paragraphs: [
          "Supermarkets arrange substitutes next to the thing they replace, in the same packaging, at the same height. That is helpful for finding them and misleading about what they are. The eye reads the slot and infers the contents. The battery drawer at home works the same way, and so does the disappointment when the remote dies.",
          "Two habits. When one product replaces another in your kitchen, read the back of both at the same volume before deciding the swap is neutral. And treat words like plant-based and unsweetened as answers to the questions they actually ask, not as a summary of the whole carton.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Similar uses, different label information",
      alt: "Fictional Drink A lists added calcium with 120 milligrams calcium and 3 grams protein; Drink B lists 20 milligrams and 1 gram per 100 millilitres.",
      caption: "Read the two cards at the same volume, 100 millilitres, which is the only reason they can be compared. Drink A is the battery with the capacity: added calcium, 120 milligrams, 3 grams of protein. Drink B fits the same slot and carries 20 and 1. Both are unsweetened, which tells you nothing about either difference. The figures are invented to show the comparison, not typical values or an intake target.",
      items: [
        { label: "Drink A: fortified soy", detail: "Per 100 ml: calcium 120 mg; protein 3 g; unsweetened." },
        { label: "Drink B: unfortified oat", detail: "Per 100 ml: calcium 20 mg; protein 1 g; unsweetened." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A milk or plant-drink label", "A comparison label or the examples"],
      steps: [
        "Pick up a plant drink and read whether the label states added calcium, in the ingredient list or as a claim. Do not infer it from the words plant-based or from the carton being next to the milk; that is reading the slot.",
        "Copy the calcium and protein figures with their units and the volume they refer to, as one phrase each: 120 milligrams per 100 millilitres. The volume is part of the number.",
        "Do the same for a second label, or use the invented pair, at the same volume. Where a figure is missing, write unknown rather than guessing in either direction.",
        "Write what the substitution changes in those two lines, then add one practical consideration that is not on the panel: taste, price, a dietary need, or how the rest of the day eats.",
      ],
      notice: "You can state the actual differences in composition between two drinks that do the same job in the kitchen, and you know which claims on the front told you nothing about them. The slot has stopped standing in for the battery.",
      troubleshooting: "If calcium is not listed at all, do not read the blank as zero and do not read it as fortified; it is missing information. Look for the figure on the manufacturer's site or pick a carton that states it, because a decision built on a blank is a guess.",
    },
    recall: {
      prompt: "A carton says barista and foams well. Does that establish that its calcium and protein match milk?",
      hint: "A performance claim in coffee is not a nutrient statement.",
      answer: "No. Barista is a claim about how the drink behaves in a steam wand, foam and texture, and foaming well is a performance in coffee, not a nutrient statement. It is the battery fitting the slot and the remote switching on. Whether its calcium and protein come anywhere near milk depends on whether calcium was added and what the panel says per 100 millilitres, and only the back of that carton can tell you. Read fortification and the two figures on a matching volume; the foam tells you about the foam.",
    },
    quiz: {
      question: "Which check best supports understanding an ordinary milk-to-plant-drink substitution?",
      options: ["Whether both cartons advertise an unsweetened product.", "Actual fortification and nutrient figures on a matching volume basis.", "Whether both products can be used in porridge."],
      correctIndex: 1,
      explanation: "Actual fortification and nutrient figures on a matching volume are the only things that describe what changes when the plant drink stands in for milk; they are what is inside the battery. Both being unsweetened answers a question about added sugar and leaves calcium and protein entirely open. Both working in porridge is the slot: a fact about use that is true of both cartons and silent about their contents.",
    },
    takeaway: "Two cartons that pour the same are two batteries that fit the same slot: fortified means something was added and only the label says whether it was, so read calcium and protein per the same volume on the carton you are actually buying, and treat unsweetened and plant-based as answers to their own narrow questions.",
    sourceNote: "Inherited NHS dairy and label references support checking suitable fortified alternatives. All comparison figures are invented; this lesson does not determine individual nutrient requirements.",
  },
  {
    id: 'wellbeing-035',
    outcome: "Fix where a drink is kept and how it gets refilled under your real workplace rules, and treat another person's daily total as a fact about them rather than a quota for you.",
    scene: "A museum ticket-desk worker has water in a distant locker but no workable refill plan.",
    sections: [
      {
        title: "The bottle exists but is not available",
        paragraphs: [
          "Taylor works a museum ticket desk. Every morning Taylor fills a water bottle and puts it in a locker two corridors away, where the staff keep their coats. Then the doors open, the queue forms, and the bottle sits in the dark all day. By four o'clock Taylor has had a sip at lunch and nothing else. A colleague, meaning well, recommends a bottle with the hours printed up the side and a daily total at the top.",
          "The printed bottle changes the markings on the plastic. It does nothing about the two corridors. Taylor's problem was never a lack of ambition about drinking water. The water was somewhere Taylor could not get to during the hours Taylor was thirsty. The practical questions are the dull ones. Where can a drink be kept safely at this desk, under this workplace's actual rules? When can it be refilled?",
        ],
      },
      {
        title: "A quota does not describe every circumstance",
        paragraphs: [
          "Everyone has had a phone charger that lives in another room. The phone dies in the kitchen, the charger is upstairs, and somehow it never gets plugged in until bedtime. Nobody solves that by buying a charger with a bigger number on the box. They solve it by putting a cable where the phone actually spends its day. The problem was the address, not the equipment. It was certainly not the owner's character.",
          "CDC guidance on water says needs vary, with activity, with heat, with the person. Food and other drinks contribute fluid too. So the colleague's daily total is a number that happened to suit the colleague; it is not an instruction for Taylor. Plain water is a simple, cheap, available option, and it is not the only fluid in an ordinary day. A bottle challenge has a way of displacing the useful questions. Those are about access, about whether the gallery is hot, about how much Taylor moves, and about any guidance Taylor already has from someone who knows their situation. The goal of this lesson is to make ordinary drinking possible during an ordinary shift. It is not to pour a marked quantity down anyone to reach a line.",
        ],
      },
      {
        title: "Solve the access route",
        paragraphs: [
          "Taylor asks what the desk rules allow. A lidded bottle can sit on a shelf under the counter, away from the card reader and the till, which is where spills would do real damage. That is the charger moved into the kitchen. Then the refill: there is a tap in the staff room reachable on the mid-shift break, and a water fountain by the lifts if the staff room is locked. Two options, so the plan survives one of them failing.",
          "The bottle also has to be somewhere the hand can reach without knocking the keyboard or standing in the walkway. Access that creates a hazard is not access. No volume comes out of this exercise. If Taylor already has specific fluid guidance from a clinician, that guidance is the one that counts. What has visibly improved is that the drink is now where Taylor is, with a known way to refill it. An empty bottle at the end of the day was never the point.",
        ],
      },
      {
        title: "Why the quota is so tempting",
        paragraphs: [
          "A number is easy to recommend and easy to feel bad about missing, which makes it feel like help. An access problem is specific and slightly boring. It involves asking a supervisor about shelf rules and finding out when the staff room is open. The charger-in-the-other-room problem is almost always solved by moving the charger, and almost never by a sterner charger.",
          "Two habits. When you keep not drinking, ask where the drink is before you ask what is wrong with you. And treat anyone's daily total, printed or spoken, as a fact about them. The fact about you is whether you can reach the water when you want it.",
        ],
      },
    ],
    visuals: [{
      type: 'flow',
      title: "Make the drink accessible",
      alt: "Check the permitted desk location, place a secure drink away from equipment, and identify a refill opportunity.",
      caption: "Read the three steps as moving the charger into the kitchen. First, a permitted and stable place within reach. Second, keeping it usable and safe, a lid on, away from electrics, out of the typing area. Third, a known refill source and a realistic moment to use it. No volume appears anywhere in the flow, and finishing a bottle is not one of the steps.",
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
        "Find the point in your day where drinking keeps getting postponed, and name the obstacle in terms of distance or access: the bottle is in the locker, the tap is on another floor. This is finding out which room the charger is in.",
        "Choose a permitted, stable, reachable place for a lidded drink that keeps it away from electrical equipment, out of walkways, and clear of your keyboard. Ask about the rules if you are not sure; a spill on a till is a worse problem than a thirsty afternoon.",
        "Locate a refill source you can actually get to, and a realistic opportunity in your schedule to use it, plus a backup in case the first is closed.",
        "Write the plan as an access plan only. If you already have individual fluid guidance from a professional, that stays in charge; do not add a quota from a colleague's bottle or from this lesson.",
      ],
      notice: "The drink is where you are and you know how it gets refilled, without a new bottle-emptying target hanging over the day. The charger is in the right room.",
      troubleshooting: "If the workplace does not allow drinks near your station, do not quietly ignore the rule; it usually exists because of equipment or hygiene. Arrange access during the breaks that are available instead, and raise the access problem with whoever can change the arrangement.",
    },
    recall: {
      prompt: "A long train journey has no reliable refill point. Does copying a friend's marked bottle solve the planning problem?",
      hint: "The missing information concerns access during this journey.",
      answer: "No. The marked bottle tells you how much one friend decided to drink by three o'clock; it does not tell you where the water comes from on a train with no working tap. The planning problem is access: how much to carry on, where to buy or refill at stations, and whether that is enough for this journey and this person in this heat. It is a charger with a bigger number on the box when the problem is the socket. Plan the supply, respect any guidance you already have, and leave the friend's lines on the friend's bottle.",
    },
    quiz: {
      question: "Which conclusion fits the ticket-desk example?",
      options: ["A colleague's bottle target should become the worker's requirement.", "Only plain water can contribute any fluid.", "Usable access matters, while needs and fluid sources vary."],
      correctIndex: 2,
      explanation: "Usable access is what the example changed, and the guidance behind it says needs vary and fluid comes from several sources, so that is the only conclusion that fits. Making the colleague's bottle target Taylor's requirement turns someone else's number into an instruction for a different person on a different day. Saying only plain water counts contradicts the guidance, which notes that food and other drinks contribute fluid; water is simply the easiest option, not the only one.",
    },
    takeaway: "Put the charger where the phone lives: make a drink reachable and refillable under the rules you actually work under, treat anyone else's daily total as a fact about them, and let any guidance you already have decide amounts, because the problem was the address of the bottle, not your character.",
    sourceNote: "Inherited CDC and NHS references describe fluid sources and varying needs. This original access exercise sets no intake quota and does not replace individual guidance.",
  },
  {
    id: 'wellbeing-036',
    outcome: "Treat an unbooked day after a demanding session as recovery with a purpose rather than spare capacity, and check that a swapped activity actually changes the load before calling it rest.",
    scene: "A recreational club calendar shows one demanding session, an unbooked day, and pressure to fill that gap.",
    sections: [
      {
        title: "An empty calendar box already has a purpose",
        paragraphs: [
          "River belongs to a climbing club. Monday night was a hard session, the kind where the forearms still feel it at breakfast. Tuesday is blank on the calendar. Then a message arrives: a friend has a spare place at a bouldering session on Tuesday evening, and the blank square makes it look obvious. Nothing is written there, so nothing is lost by filling it.",
          "The square only looks empty because a calendar records appointments. It does not record recovery, and recovery was what Tuesday was for, whether or not River ever wrote the word down. Rest does not generate a booking confirmation or a badge, so it is invisible in the one place River is looking. Before replying to the message, the better move is to look at the sequence of demands across the week rather than counting how many boxes have a name in them.",
        ],
      },
      {
        title: "Changing the name may not change the demand",
        paragraphs: [
          "Three days before rent is due, a bank balance can look healthy. The money is sitting there, visible, apparently spare. Anyone who has spent it has learned that a balance is not the same as free money. Some of it was allocated to something that simply had not been taken out yet. The account showed a number. It did not show the purpose. The calendar is the same: an empty Tuesday is a balance, not a windfall.",
          "MedlinePlus includes rest in its description of training, because the body needs time to recover from demanding activity. The adaptation happens in the gap, not in the session. Two cautions make this usable. First, a different activity name does not guarantee a different demand. Climbing and bouldering load much the same muscles, so swapping one for the other on consecutive days is not a rest, however different the venue. Second, the opposite error is also an error. A genuinely restful interval is not a wasted training day or a failure of commitment. What a calendar cannot do is tell you how much recovery a particular person needs after a particular session. That depends on the person, the effort, and things no grid can see. What it can do, if you read it honestly, is show you when extra bookings keep deleting every gap you had.",
        ],
      },
      {
        title: "Protect the gap without inventing a formula",
        paragraphs: [
          "River leaves Tuesday as it is. Monday holds the hard session; Tuesday stays unbooked rather than quietly becoming a second one with a different label. The friend's invitation is weighed on its own, against the rest of the week, not against the emptiness of a square. Those two days show a planning decision. They are not a rule that says one day off after every hard session, because the lesson has no basis for that number and neither does the calendar.",
          "The honest version of the week also keeps ordinary life in view. A day labelled rest that involves carrying boxes up three flights for a house move is not restful, and calling it rest does not make it so. River writes one line about what the Tuesday gap is meant to allow, declines the assumption that an invitation must be accepted because the slot is free, and ends up with a sequence of demands and recovery that matches reality. That is the output. It is not a diagnosis of tiredness, and tiredness was never the test.",
        ],
      },
      {
        title: "Why the blank square looks like waste",
        paragraphs: [
          "Calendars are built to be filled, and a visible gap reads as inefficiency the way an unspent balance reads as spare cash. The apps reinforce it with streaks and badges for the days with activity, and silence for the days without. Recovery has no icon, so it loses every argument with an invitation.",
          "Two habits. When a gap after a hard session looks free, ask what it was already paying for before you book over it. And when you swap one activity for another and call it recovery, check whether the muscles agree, because the name on the booking is not the load on the body.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Give the unbooked day a purpose",
      alt: "A fictional Monday club session is followed by an unbooked Tuesday and a separate decision about the next invitation.",
      caption: "Read the three rows as balance, allocation, and decision. Monday is the demanding session. Tuesday is the gap, left unbooked on purpose like money set aside for rent, not spare because the square is empty. The third row is the next invitation, judged against the week's actual demands rather than against a blank box. Fictional days, no recovery interval prescribed.",
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
        "On a private copy of your upcoming week, mark the activities you already know are demanding, from experience, without testing anything. These are the withdrawals already scheduled.",
        "Add the demands the activity calendar leaves out: a long shift on your feet, a day of moving furniture, a long drive. A rest day with a house move in it is not a rest day; write what is actually there.",
        "Look at where recovery space currently exists between the demands, before you accept any optional new booking. That space is the balance that is already allocated.",
        "Write one line stating what each gap is for. Leave the question of how much recovery you personally need to guidance that knows your situation; this exercise is for seeing the sequence, not for setting a formula.",
      ],
      notice: "Recovery shows up on the page as an intentional part of the sequence, not as an empty square waiting for the next invitation. You can say why Tuesday is blank.",
      troubleshooting: "If a day you called rest turns out to contain real physical work, relabel it honestly rather than letting the word do the resting for you. And if every gap in the week has quietly been booked over, that pattern is the finding; treat it as information, not as a verdict on your stamina.",
    },
    recall: {
      prompt: "A person replaces a rest interval with a different demanding sport and calls it recovery because the sport changed. What needs checking?",
      hint: "Activity names do not establish the physical demand.",
      answer: "Whether the body can tell the difference. A new sport with a new name can load the same muscles and ask the same overall effort as the session it replaced, in which case the recovery interval has been deleted and renamed, like spending the rent money on something called savings. The check is the actual demand: which muscles, how hard, how long, and how much overlap with yesterday. If the answer is a lot, the day is a second training day whatever it is called. Only a genuinely lighter demand keeps the gap doing its job.",
    },
    quiz: {
      question: "What is the most justified interpretation of an unbooked day after demanding activity?",
      options: ["It may be intentional recovery space, not automatically spare capacity.", "It should take the next invitation because no activity is written there.", "A different demanding activity automatically preserves its recovery role."],
      correctIndex: 0,
      explanation: "An unbooked day after demanding activity may well be intentional recovery space, the rent money that looks spare in the account, so it deserves consideration before it is treated as capacity. Taking the next invitation because nothing is written there reads the blank square as free when the calendar simply does not display recovery. Assuming a different demanding activity preserves recovery because the name changed ignores the load on the body, which is the only thing recovery is about.",
    },
    takeaway: "An empty day after a hard session is money already set aside for rent, not spare cash: look at the week's real demands before booking over the gap, do not let a new activity name disguise the same load, write down what the gap is for, and leave the amount of recovery you need to guidance that knows you.",
    sourceNote: "Inherited MedlinePlus guidance treats rest as part of training. This original calendar audit gives no recovery formula, diagnosis, or individualized exercise schedule.",
  },
  {
    id: 'wellbeing-037',
    outcome: "Make a return-to-activity decision on today's format, demands, and flexibility rather than on an old personal best, and leave questions about your own readiness to someone who knows your situation.",
    scene: "A former casual badminton player receives a competitive-session invitation after months away because of work changes.",
    sections: [
      {
        title: "The old result is still on the app",
        paragraphs: [
          "Luis used to play badminton every week. Then a new job, a long commute, and eight months went by without a racket in his hand. Now a message from the old group: competitive session Thursday, we are short a player, you up for it? He opens the club app and there is his record, still showing the matches he won last spring. It is very tempting to turn up on Thursday as the player in that record.",
          "The record is accurate. It proves exactly what it says: how Luis played then, under the conditions he had then, with the weekly practice he had then. It measures nothing about now. It does not know he has not played in eight months. It does not know what the Thursday session demands. It does not know that he now gets home at seven instead of five. Walking back into a familiar hall is not the same as walking back into an unchanged situation.",
        ],
      },
      {
        title: "Familiarity and current capacity are different",
        paragraphs: [
          "A weather report from last Tuesday was perfectly accurate on last Tuesday. Nobody dresses for today by reading it. The report is not wrong. It is about a different day, and the thing it describes has had a week to change. An old personal best is last Tuesday's forecast. It was true, it is still true of that day, and dressing for Thursday by it is how people end up caught in the rain.",
          "Remembering how to do something keeps the activity feeling familiar, and familiarity feels like readiness. They are different. Patterns of activity and the capacity that goes with them can change a good deal in months away. NHS adult guidance ties the amount and intensity of activity to a person's current fitness, not to the best thing they ever did. A lesson written for everyone cannot say what starting level suits Luis. It especially cannot say it for anyone coming back after illness or injury; that is a question for someone who knows the person. What the lesson can do is remove the old record from the position of automatic minimum. Then it can point at the questions that actually need answering about the Thursday option.",
        ],
      },
      {
        title: "Ask about the format before committing",
        paragraphs: [
          "So Luis replies with questions instead of a yes. Is Thursday a fixed competitive ladder, or a social format where sitting out a game is normal? What time does it finish, and is there a bus after that? Is it fine to come for the first hour and see? Those are the current forecast: the demands of this session, the flexibility built into it, and the practical edges of his new week.",
          "If the only format on offer assumes he will pick up where the record left off, declining is a complete answer. So is asking whether a more flexible session exists. None of this produces a training plan; the lesson is not pretending to know how he should rebuild. It produces a better-informed decision about whether to walk through the door on Thursday. The honest uncertainties stay open for anyone advising him personally. They are not papered over because the hall looks the way he remembers it.",
        ],
      },
      {
        title: "Why the old record feels like a floor",
        paragraphs: [
          "A record is the only hard number in the situation, so it becomes the anchor for everything else. Dropping below it feels like failure rather than like Thursday. But the number was never a floor. It was a reading, taken on a different day, and the only thing it owes you is an accurate memory.",
          "Two habits. When you return to anything after time away, treat the old result as last Tuesday's forecast, true then and silent about now. And before committing, ask about the format and the exits. A session you can leave early is a session you can safely find out about.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "Past evidence and present questions",
      alt: "An old badminton record describes past performance; the current invitation requires checking format, demands, and flexibility.",
      caption: "Read the two cards as two forecasts. The left is last Tuesday's: an accurate record of a previous performance in previous circumstances, and it does not estimate anything about today. The right is the set of questions for Thursday: what the format is, what it demands, how flexible it is, and whether it suits now. The comparison measures no fitness; it separates history from the present decision.",
      items: [
        { label: "Old match record", detail: "Evidence of a previous performance in previous circumstances." },
        { label: "Current invitation", detail: "Check format, demands, flexibility, and present suitability." },
      ],
    }],
    practice: {
      minutes: 5,
      needs: ["A familiar activity in mind", "Paper or a draft question"],
      steps: [
        "Name an activity you might go back to, and write down the old expectation that comes with it: the level, the time, the role in the group. That is last Tuesday's forecast, written out so you can see it.",
        "List what is different now in plain practical terms: time away, a new schedule, transport, anything about your body you already know. No fitness test; this is a list, not a trial.",
        "Draft the message you would send before committing, asking about the format, how flexible it is, and whether you can stop or sit out. Questions, not a yes.",
        "Write down any question about your own suitability that the list cannot answer, and leave it open for someone who knows your situation rather than settling it by turning up at the old level.",
      ],
      notice: "Your decision rests on current questions and real options, not on a requirement to reproduce the number in the app. You could say what Thursday actually asks of you.",
      troubleshooting: "If you cannot tell whether the activity suits you now, keep that unresolved and ask someone appropriate rather than inventing a starting level from the old record or from what the rest of the group is doing. Not knowing is a reason to ask, not a reason to guess with your body.",
    },
    recall: {
      prompt: "Someone returns to a familiar swimming venue after a long break. Does remembering the route and technique establish the previous workload is suitable?",
      hint: "Memory of the activity is not a current capacity assessment.",
      answer: "No. Knowing the way to the pool and remembering how to swim are the familiar parts, and they are real; they are also last Tuesday's forecast. The previous workload belonged to a body that was swimming regularly, and months away change capacity in ways the memory of the strokes does not reveal. What matters now is the actual demand of the session on offer and the circumstances around it, including whether it is possible to do less, stop early, or sit a length out. The old distance is a fact about then, not a starting requirement for today, and anyone unsure should ask someone who knows their situation.",
    },
    quiz: {
      question: "Which information should carry more weight in a return decision than an old personal best?",
      options: ["Whether the equipment and court layout still feel familiar.", "Whether active friends still use the previous format.", "Current circumstances and whether the available format is suitable and flexible."],
      correctIndex: 2,
      explanation: "Current circumstances and whether the available format is suitable and flexible are the only things that describe Thursday; they are today's forecast. Familiar equipment and a familiar court layout are real and reassuring and tell you nothing about what the session demands or what months away have changed. Other people still using the old format is a fact about them, not about Luis; their continuity is not his readiness.",
    },
    takeaway: "An old personal best is last Tuesday's weather report: accurate about then and silent about now, so when you return to an activity, ask what the session actually demands, how flexible it is, and whether you can leave early, and leave questions about your own readiness to someone who knows you rather than to the number in the app.",
    sourceNote: "Inherited NHS activity guidance emphasizes appropriate current intensity. This original decision exercise gives no return programme and does not assess readiness after illness or injury.",
  },
  {
    id: 'wellbeing-038',
    outcome: "Give a meal its own place and time in any plan that crosses a mealtime, covering the whole outing, and never make food conditional on having completed the activity.",
    scene: "An evening dance rehearsal and two bus journeys leave dinner dependent on a cafe that closes early.",
    sections: [
      {
        title: "The activity has a booking, dinner does not",
        paragraphs: [
          "Mia has Thursday sorted. Rehearsal is seven till nine at the studio across town. The bus there leaves at six; the bus back is at quarter past nine. Dinner, she figures, will be the cafe next to the studio. On the bus she checks the cafe's hours. It shuts at half past six, half an hour before rehearsal starts and two and a half hours before it ends.",
          "The calendar looked finished. It had the named thing, the dance, and the two journeys wrapped around it, and that is what calendars are good at showing. What it did not have was the meal. The meal was never booked, only assumed. A plan for an evening out is not complete when it gets you there and gets you home. It is complete when the ordinary needs around the event, food among them, have somewhere to happen.",
        ],
      },
      {
        title: "Food is part of the day, not a reward",
        paragraphs: [
          "Imagine planning a long drive: hotel booked, ferry booked, route mapped, and nobody checked where the petrol stations are. The car does not care that the hotel is lovely. It needs fuel on the way, on the way back, and on the days it does not go anywhere special. And nobody fills the tank only if the car performs well. Fuel is a condition of the journey, not a prize at the end of it.",
          "The body is the car in that story. It uses food for energy and for the nutrients that ordinary living runs on, on rehearsal days and on rest days alike. MedlinePlus puts adequate food and fluids among the basics of recovering from activity. Completing a rehearsal is not the switch that grants permission to eat. A cancelled rehearsal does not revoke it. Two things the lesson will not do. It will not use the Eatwell Guide, which describes a broad pattern of variety, as a calculator for how much any one person needs on a dance night. And it will not pretend that the length of a class can be converted into a precise personal food requirement. The claim is smaller and sturdier. Food belongs in the plan the way fuel belongs on the route.",
        ],
      },
      {
        title: "Plan availability before the cafe closes",
        paragraphs: [
          "Mia reworks Thursday. A familiar meal before the six o'clock bus, if the afternoon allows, or a known option waiting at home for half past nine if it does not. Which one depends on how the day runs and what she feels like. A snack goes in the bag for the gap, as something available rather than as a substitute dinner she is obliged to eat. Whatever travels follows its own storage instructions. It does not spend three hours in a warm studio if it cannot take it.",
          "And if rehearsal is cancelled at the last minute, the meal stays in the day. The body was always going to need fuelling on Thursday regardless of whether the dance happened. What Mia ends up with is a named food option with a place and a time attached: before the bus, or at home afterwards, or both. It is not a permission slip that only activates once the choreography is done.",
        ],
      },
      {
        title: "Why the meal falls out of the plan",
        paragraphs: [
          "Bookings get written down and assumptions do not. The rehearsal and the buses have times and confirmations. Dinner was a vague picture of a cafe that turned out to shut early. Food is so ordinary that it rarely gets a line of its own, which is exactly how it ends up as the thing the plan forgot.",
          "Two habits. When you plan any outing that crosses a mealtime, give the meal its own entry with a place and a time, like a petrol station on a route. And never let a meal depend on having done the activity. The fuel is for the journey, not for the finish line.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Place food access around the journey",
      alt: "Before travel, food availability is checked; rehearsal and travel follow; the return plan includes a known meal rather than a closed cafe.",
      caption: "Read the three stages as a route with the fuel stops marked. Before travelling, the meal is checked and anything carried is chosen with its storage in mind. The middle stage is the whole outing, rehearsal plus both buses, not just the booked class. The return stage has a known meal waiting instead of a cafe that shut at half past six. These are planning checkpoints; nothing here sets portions or intervals.",
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
        "Write out an upcoming activity with both journeys and any waiting around, start to finish. The outing is the whole route, not the hour with a booking on it.",
        "Check whether the way you normally get a meal still works across that entire stretch, including opening hours. This is finding the petrol stations before you set off, not when the light comes on.",
        "Name a feasible familiar meal or a suitable backup, with a place and a time, and if any food is coming with you, confirm it can be stored safely for the length of the outing.",
        "Read the plan again imagining the activity is cancelled. The food line should survive unchanged; if it only exists because of the class, rewrite it so that it belongs to the day.",
      ],
      notice: "The outing has a real food option with a place and a time, not a hope that somewhere will be open. And the meal would still happen if the rehearsal did not.",
      troubleshooting: "If carrying the planned food is impractical, it will not keep, there is nowhere to store it, arrange a different accessible meal rather than leaving the storage question unanswered. An unsafe packed meal is a worse plan than a known meal at home afterwards.",
    },
    recall: {
      prompt: "A recreational session is cancelled after dinner has been planned. Does cancellation remove the reason for an ordinary meal?",
      hint: "Food supports ordinary living, not only completed exercise.",
      answer: "No. The session was the reason for the booking; it was never the reason for the meal. The body still needs fuelling on a day when the class is cancelled, exactly as the car still needs petrol on a day the ferry does not run. Appetite and timing can shift with the change of plan, and the person might eat a bit earlier or choose something lighter, but a meal is part of ordinary living, not a reward collected for finishing the activity. The food line in the plan should outlive the cancellation.",
    },
    quiz: {
      question: "A late activity depends on a cafe that closes early. Which planning change addresses the actual gap?",
      options: ["Rely on another nearby cafe without checking its hours.", "Arrange a familiar accessible food option around the full outing.", "Carry an unspecified snack without checking suitability or remaining meal access."],
      correctIndex: 1,
      explanation: "Arranging a familiar, accessible food option around the full outing is the only choice that fixes the actual gap, which is that no usable meal existed between six and half past nine; it marks the petrol station on the route. Relying on another cafe without checking its hours repeats the mistake that caused the problem. Carrying an unspecified snack without checking whether it keeps, or whether a meal is still available elsewhere, leaves the plan exactly as unverified as before.",
    },
    takeaway: "Give the meal its own line in the plan like a petrol station on a route, with a place and a time that covers the whole outing, and never make it conditional on finishing the activity, because the body needs fuelling on the days the ferry does not run too.",
    sourceNote: "Inherited MedlinePlus and NHS references support adequate food and varied meals. This original access plan provides no calorie target, sports-nutrition formula, or individualized diet.",
  },
  {
    id: 'wellbeing-039',
    outcome: "Reassess an optional outdoor plan when conditions change, by naming what changed and what a precaution does and does not fix, and keep a checked alternative or postponement available.",
    scene: "A planned outdoor sketch walk faces an extreme-heat forecast and an available indoor exhibition alternative.",
    sections: [
      {
        title: "The route is familiar, the day is different",
        paragraphs: [
          "A sketching group has a favourite walk: the canal path to the old warehouses, a couple of hours with pencils and a flask, and it was perfect in April. It is on the calendar again for Saturday. On Thursday the forecast changes to an extreme-heat warning. The route is the same length, the meeting point is the same bench, and leaving the plan as it is feels like being consistent.",
          "Consistent with what, though? The map is the same. The day is not. The conditions you walk through are part of what the walk asks of a body: the heat, how much shade the towpath has, where there is water, how hot the bus to the bench will be. Repeating the same route in different weather does not repeat the same outing. It repeats the geography and swaps everything else.",
        ],
      },
      {
        title: "One precaution does not cancel the environment",
        paragraphs: [
          "Nobody wears the coat they wore in April because the walk is the same walk. You dress for the day, not for the route. And if someone proposed setting off into a heatwave with the April plan plus a bottle of water, that is like heading into a storm with the usual plan plus an umbrella. The umbrella is genuinely useful for rain and entirely beside the point for the wind. A precaution handles the thing it handles. It does not negotiate with the rest of the weather.",
          "MedlinePlus advises against exercising in extreme heat or cold, and CDC notes that heat and activity both raise how much water a person needs. Put those together and the water bottle sorts itself out. It addresses the availability of fluid, which matters more in heat, and it does nothing at all about the temperature, the sun on an unshaded towpath, or the exposure of two hours outside. The reasoning is the same as every other planning check in this module. Name what a precaution changes, then name what it leaves exactly as it was. A shady stretch and a route you know well are useful facts. Neither one, on its own, says the whole outing is suitable under conditions it has never been tried in.",
        ],
      },
      {
        title: "Change the plan rather than defend it",
        paragraphs: [
          "The group looks at an indoor option: there is a drawing exhibition in town. Before switching, someone checks the practical details, the opening hours on Saturday, step-free access, and what the journey there involves in the heat. If the exhibition does not work out, the walk is an optional outing. Postponing it to a cooler weekend is a perfectly good decision that nobody has to apologise for.",
          "Notice what the switch is based on. The exhibition is chosen because it removes the exposure that changed, not because indoors is automatically safe or comfortable. A stuffy gallery with a long hot journey might be no improvement, which is why the details got checked. The lesson gives no temperature at which a walk becomes unwise and no instructions about what to do if someone overheats; those belong to proper sources. Its output is a plan revised around today's conditions and verified practicalities, rather than a route defended because it worked in April.",
        ],
      },
      {
        title: "Why the old plan feels like loyalty",
        paragraphs: [
          "Changing a plan feels like letting people down, and keeping it feels like commitment, so the forecast gets argued with and the route gets kept. But the group committed to a pleasant sketching outing, not to a specific stretch of towpath in whatever weather turns up. Keeping the map and losing the point is the wrong kind of consistency.",
          "Two habits. Before any optional outdoor plan, check the conditions for the day itself rather than remembering the last time, and ask what has changed: exposure, shade, water, travel. And when a precaution is proposed, say out loud what it does and does not fix, so a water bottle is never mistaken for shade.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison',
      title: "The environment belongs in the plan",
      alt: "The same outdoor route differs between mild weather and an extreme-heat forecast; a checked indoor alternative or postponement changes the plan.",
      caption: "Read the four cards left to right as the decision unfolds. The previous mild outing is the April coat: true, and about a different day. The unchanged route in heat is the same map with a different demand. The indoor exhibition is an alternative only once access and travel have been checked. Postponing is a valid outcome, not a failure. Fictional options comparing exposure and practicality, with no measured risk attached.",
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
        "Take an optional outdoor plan you have coming up and check the conditions forecast for that actual day, rather than relying on how it went last time. Dress for the day, not for the route.",
        "Write down what has changed compared with the last time you did it: heat or cold, shade, water access, how the journey there will feel, who is coming. Be specific, because the route being the same is not an answer to any of these.",
        "Identify a better time, a checked alternative setting, or a postponement. Do not let a single precaution, a bottle, a hat, stand in for the whole reassessment; name what it fixes and what it leaves.",
        "If you choose an alternative, verify it actually works, opening hours, access, journey, and tell the group about the change in a way that leaves each person free to opt out.",
      ],
      notice: "The revised plan responds to what actually changed, exposure and conditions, instead of only preserving the original route. You can name the precaution you considered and what it would not have fixed.",
      troubleshooting: "If you cannot verify a suitable alternative, leave the optional outing postponed rather than treating the uncertainty as reassurance. Not knowing whether the gallery is open is not a reason to go back to the towpath in a heatwave.",
    },
    recall: {
      prompt: "A familiar recreation route faces extreme cold this time. Does previous success establish that the same plan remains suitable?",
      hint: "Past success depended partly on the old conditions.",
      answer: "No. The route is the April coat: it fits the memory, not the day. Previous success happened under previous conditions, and extreme cold changes what the same miles ask of a body, how long people can comfortably stay out, and what happens if a bus is late. The familiar map does not cancel any of that. Reassess the current environment, name what has changed, look at a checked alternative or a different time, and remember that postponing an optional outing is a workable, respectable decision rather than a loss of nerve.",
    },
    quiz: {
      question: "A forecast warns of extreme heat before an optional outdoor session. Which response addresses the changed environment?",
      options: ["Check a suitable alternative setting or time, or postpone.", "Keep the route because its distance is unchanged.", "Carry a bottle and treat all remaining conditions as settled."],
      correctIndex: 0,
      explanation: "Checking a suitable alternative setting or time, or postponing, is the only response that changes the exposure the forecast changed; it is dressing for the day. Keeping the route because its distance is unchanged keeps the map and ignores everything that actually differs. Carrying a bottle and treating all remaining conditions as settled is the umbrella in a storm: a real precaution for one thing, mistaken for an answer to all of them.",
    },
    takeaway: "Dress for the day, not for the route: when conditions change, name what changed and what a precaution actually fixes, check an alternative setting or time properly before switching, and keep postponing an optional outing on the list of good decisions.",
    sourceNote: "Inherited MedlinePlus and CDC references discuss extreme conditions and fluid needs. This original planning comparison supplies no safety threshold, medical advice, or treatment protocol.",
  },
  {
    id: 'wellbeing-040',
    outcome: "Record a missed activity as a fact with a reason instead of a debt, and judge the next session at the size you originally planned rather than stacking sessions to restore a weekly total.",
    scene: "A pool closure cancels a midweek visit, creating pressure to combine two planned sessions on Friday.",
    sections: [
      {
        title: "A cancellation becomes an invented debt",
        paragraphs: [
          "Erin swims on Wednesdays and Fridays. This Wednesday the pool is closed, a boiler problem, a sign on the door. The tracker on her phone shows an empty circle where Wednesday's session should be, and the thought arrives fully formed: do both on Friday. Two sessions back to back. Make the week add up.",
          "The empty circle is being treated as an unpaid bill. But nothing was borrowed. The body did not receive a credit note for the swim that did not happen, and it will not cash one in on Friday. What Friday would actually get is a different session, twice as long or twice as hard, which is a new demand in its own right. The weekly total on the screen would look familiar. The Friday would not feel like any Friday Erin has done before.",
        ],
      },
      {
        title: "Totals hide the sequence",
        paragraphs: [
          "If you forget to water a plant on Wednesday, you do not give it two cans on Friday to make up. The plant does not keep an account. It can only use what it can use on the day, and drowning it on Friday does not undo Wednesday; it just adds a new problem. The weekly amount of water might come out the same on paper. The plant experiences a drought and then a flood.",
          "A weekly count tells you how much activity happened and hides when. The same number of sessions spread through a week is a different thing from the same number squeezed into two days; one gives the body gaps to recover in and the other does not. NHS guidance talks about spreading activity across the week, and MedlinePlus puts recovery between demands at the centre of training, for the plant's reason: the adaptation needs the gap. Neither source offers a formula for rescheduling a missed swim, and this lesson does not either. What they explain is why putting the calendar total back to what it was is not enough to justify an abrupt doubled session. A tracker should describe what you planned and what happened. It should not quietly decide how hard Friday is.",
        ],
      },
      {
        title: "Revise the next appointment, not the past",
        paragraphs: [
          "Erin marks Wednesday as cancelled, with the reason, because that is what happened. Then she looks at Friday as Friday: the ordinary, manageable session she had planned, with no backlog attached. The weekend commitments stay where they were. The recovery space after Friday stays visible rather than being spent on recreating a swim that the boiler took away.",
          "If she wants to change future plans, that is a fresh decision based on how things are now, not a repayment. The closure can even be useful: it is a prompt to find a backup pool or a different activity for the next time the sign goes up on the door. What the record should say at the end is what happened and what is actually planned next. It should not turn an opportunity that was unavailable into either a punishment or a performance to be delivered on Friday.",
        ],
      },
      {
        title: "Why the empty circle demands payment",
        paragraphs: [
          "Trackers are built around streaks and totals, and an empty circle is drawn to look like a failure even when the failure was a boiler. The design turns a cancelled opportunity into a debt and the next session into the debt collector. The plant does not know about streaks, and neither does a body; only the app does.",
          "Two habits. When an activity is missed for reasons outside you, write the reason next to it and let that be the whole entry. And before any next session, ask whether its demand is the one you planned or the one the tracker is suggesting, because only the first was ever about you.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline',
      title: "Resume without attaching a backlog",
      alt: "Wednesday's pool visit is marked cancelled, Friday is considered as its own plan, and weekend commitments and recovery remain visible.",
      caption: "Read the three rows as a week being kept honest. Wednesday is recorded as a cancelled opportunity, a boiler, not a debt. Friday is considered as the session that was already planned, not as two sessions stacked to fix a total. The weekend keeps its commitments and its recovery space in view. Fictional days illustrating the logic; nothing here recommends how often anyone should swim.",
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
        "Pick a recent optional activity that did not happen and write the actual reason beside it: closure, illness, a clash. That is the whole entry for that day, and it is not a bill.",
        "Draw a line under it and look at the next planned session on its own. Ask what its demand was meant to be before the gap, and write that down.",
        "If a catch-up has crept in, a doubled session, an extended one, remove it, and then check the surrounding days for commitments and recovery space that the catch-up would have swallowed. Two cans on Friday still floods the plant.",
        "Write a feasible next decision, or an honest unresolved question, rather than a debt to repay. If you want to change future plans, make that a new decision about now.",
      ],
      notice: "The next plan stands on current circumstances rather than on a requirement to repair a tracker total. Wednesday has a reason beside it, and Friday has its original size.",
      troubleshooting: "If the app keeps showing a backlog or nagging about a broken streak, treat that as a feature of the app, not a fact about your body. Adjust its scheduling assumptions or ignore the badge; do not raise the effort to make a circle fill in.",
    },
    recall: {
      prompt: "A missed dance class leads someone to book two demanding classes together next time. What does the unchanged total fail to show?",
      hint: "Look at distribution and recovery, not only the number of classes.",
      answer: "It fails to show that the demand has been concentrated. Two classes on one evening is a different thing from two classes a few days apart, even though the monthly count reads the same; the gap between them, where recovery happens, has been removed, and a single evening now asks the body for something it never planned to give. That is two cans of water on Friday. The next plan needs its own check for suitability and recovery, judged as the session it is. The missed class is a fact to write down with its reason, not an instruction to stack the workload.",
    },
    quiz: {
      question: "After an unexpected pool closure, which response best avoids automatic catch-up loading?",
      options: ["Extend Friday until both planned visits are represented.", "Record the closure and reconsider the next manageable plan without a backlog.", "Move every later commitment solely to preserve the original weekly count."],
      correctIndex: 1,
      explanation: "Recording the closure and reconsidering the next manageable plan without a backlog keeps the past as the past and judges Friday as Friday; it waters the plant on Friday, once. Extending Friday until both visits are represented stacks the demand to make a total look right, which is the flood. Moving every later commitment to preserve the weekly count spends the week's recovery space and other obligations on a number, which is the tracker deciding how hard the week is instead of the person.",
    },
    takeaway: "A missed watering does not mean two cans next time: record why the session did not happen and leave it there, judge the next session at the size you planned, keep recovery and other commitments visible, and never let a tracker's empty circle set the effort for a day it knows nothing about.",
    sourceNote: "Inherited NHS and MedlinePlus guidance supports distributed activity and recovery. This original calendar exercise prescribes no workload, frequency, or personal training programme.",
  },
]