import type { LessonGuide } from './types'

// Existing lesson sources are inherited by ID. Stories and practice budgets are original examples.
export const lifeGuides: LessonGuide[] = [
  {
    id: 'life-001',
    title: 'Match the filter to the system, not the shelf',
    outcome: 'Find the filter requirements for your equipment and explain why a tighter filter is not automatically better.',
    scene: 'A renter compares replacement filters for a hallway return-air grille.',
    sections: [
      {
        title: 'Two packages that look alike',
        paragraphs: [
          'You need a replacement filter for the heating system in a rented flat. Two packages have the same large size printed on the front. One promises finer particle capture. It seems like an upgrade, but neither the colour nor the headline tells you whether your system can use it. Before choosing, find the equipment model in your tenancy paperwork or on a safely visible label. Look for its manual, not a general article about air quality.',
        ],
      },
      {
        title: 'Air must pass through the material',
        paragraphs: [
          'A filter catches particles while allowing air to reach the equipment. As dust builds up, it adds resistance to that airflow. Different replacement materials also create different resistance. A filter that captures smaller particles can therefore demand more from a system that was designed for another specification. More filtering is not a free change, and a powerful-looking package does not establish compatibility.',
          'Fit matters too. A gap can let air pass around the filtering material. Package sizes may be nominal names rather than exact measured dimensions. Check the compatible size, type, and rating together.',
        ],
      },
      {
        title: 'Turn the manual into a purchase note',
        paragraphs: [
          'Suppose your example manual specifies a disposable filter of a particular size and rating, accessed through a user grille. Your shopping note should copy those requirements, including any actual dimensions, rather than say medium filter. A same-size washable alternative still changes the type. Ask the manufacturer or property manager about substitutions instead of guessing.',
          'Locating the specification is enough for this lesson. Replacement requires the shutdown and access instructions for that equipment. Do not open service panels, wash a disposable filter, or climb to reach an inaccessible label.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The intended air path',
        alt: 'Room air passes through a fitted filter in a return grille before reaching the system blower.',
        caption: 'Schematic of a ducted system, not an installation plan. Follow the arrows through the filter rather than around its edge.',
        items: [
          { label: 'Room air', detail: 'Dust travels with the returning air.', x: 16, y: 50, shape: 'circle' },
          { label: 'Filter in grille', detail: 'Correct fit and specified material.', x: 50, y: 50, shape: 'box' },
          { label: 'System blower', detail: 'Needs the intended airflow.', x: 84, y: 50, shape: 'object' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Air in' }, { from: 1, to: 2, label: 'Through filter' }],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Equipment paperwork or a visible model label', 'Manufacturer manual', 'A private note'],
      steps: [
        'Find the model without moving equipment or opening a panel. Use property paperwork if access is awkward.',
        'Find the matching manual and its user filter section. Record the compatible size, type, and stated rating.',
        'Compare those fields with one replacement listing. Mark missing details as unknown rather than a match.',
        'Save the manual page and one question for maintenance if any requirement remains unclear.',
      ],
      notice: 'Your note can distinguish a confirmed compatible listing from one that merely looks similar.',
      troubleshooting: 'If the manual covers several models, find your model row. Ask maintenance rather than borrowing another row.',
    },
    recall: {
      prompt: 'A relative offers an unused filter that fits the opening but has a different rating. What must you check?',
      answer: 'Check whether the equipment permits that rating and filter type. Physical fit alone does not establish acceptable airflow resistance.',
      hint: 'Separate the dimensions from the material the air must cross.',
    },
    quiz: {
      question: 'A shop lists the correct nominal size but omits the filter rating. Which next step resolves compatibility?',
      options: ['Choose it because the opening will match', 'Obtain the missing rating and compare the manual', 'Choose the strongest filtering claim in that size'],
      correctIndex: 1,
      explanation: 'The missing rating leaves a real requirement unchecked. Size confirms only one part of compatibility; stronger capture does not prove suitability.',
    },
    takeaway: 'Match size, filter type, and equipment requirements before buying or opening anything.',
    sourceNote: 'ENERGY STAR supplies maintenance background. The comparison is fictional; the exact equipment manual controls access, specifications, and intervals.',
  },
  {
    id: 'life-002',
    title: 'Give a leak a location, not a guessed diagnosis',
    outcome: 'Write a useful maintenance report from safe observations of water, timing, and location.',
    scene: 'A damp patch appears on the left floor of a kitchen sink cabinet.',
    sections: [
      {
        title: 'Water on the cabinet floor',
        paragraphs: [
          'You take out a recycling bag and notice a wet patch inside the sink cabinet. A drain bend sits above it, but water could have travelled along a pipe, down the cabinet wall, or from a spill at the rim. Where water collects is evidence, not necessarily where it entered. Keep those locations separate in your report.',
        ],
      },
      {
        title: 'Why wiping is not a repair',
        paragraphs: [
          'Gravity carries water downward, while contact with surfaces can guide it sideways before it drops. A photograph of the final puddle cannot reveal the whole route. Repeated moisture can also enter porous cabinet material, causing swelling and providing conditions for mold. Removing surface water does not stop the supply that made it wet.',
          'Observe only from a safe, accessible position. Do not reach behind fittings, loosen a joint, or run more water to reproduce a suspected fault. Water near electrical equipment changes this from an observation exercise into a reason to keep away and seek urgent help.',
        ],
      },
      {
        title: 'A report someone can investigate',
        paragraphs: [
          'A fictional report might read: Tuesday evening, left side of kitchen sink cabinet floor damp; photograph attached; first noticed after ordinary washing-up; no visible drip observed. It names the room, surface, timing, and uncertainty. A plumber can investigate without assuming that you have already identified a failed component.',
          'Send an active leak report promptly through the responsible maintenance route. Keep the date and response together. If the area is dry when you look, report that fact too; a dry moment does not disprove an intermittent leak or explain an old stain.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Where water was seen',
        alt: 'A sink cabinet shows the sink above a drain bend, a wet patch on the left floor, and a photograph taken from the open front.',
        caption: 'Front-view schematic of the report. The arrow marks the viewing direction, not a proven route of leakage.',
        items: [
          { label: 'Sink bowl', detail: 'Above the cabinet.', x: 50, y: 15, shape: 'object' },
          { label: 'Visible drain bend', detail: 'No drip observed in this example.', x: 75, y: 48, shape: 'object' },
          { label: 'Wet patch', detail: 'Left cabinet floor.', x: 22, y: 55, shape: 'circle' },
          { label: 'Open cabinet front', detail: 'Observe without reaching inside.', x: 50, y: 85, shape: 'eye' },
        ],
        arrows: [{ from: 3, to: 2, label: 'Photograph location' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['A safely visible sink area or the example diagram', 'A note', 'Maintenance contact details'],
      steps: [
        'Look from outside one accessible sink area. Use the diagram instead if there is unsafe access or nearby wet electrical equipment.',
        'Write the exact surface and what you can see: wetness, stain, or no visible moisture. Do not name an unverified failed part.',
        'Add when you noticed it and any normal activity that preceded it. Do not deliberately recreate the problem.',
        'Save the maintenance contact. Report a real active leak promptly; label a practice report as fictional.',
      ],
      notice: 'The report tells another person where to look and what remains unknown.',
      troubleshooting: 'If you wrote only leaking sink, add a surface and date. No photograph is needed if taking one is unsafe.',
    },
    recall: {
      prompt: 'A stain appears below a bathroom window after rain. How would you report it without declaring a roof leak?',
      answer: 'Name the wall area, date, and rain timing, and describe any present dampness. The roof is one possible route, not an observed cause.',
      hint: 'Keep where it appeared separate from where it started.',
    },
    quiz: {
      question: 'A wet cabinet is dry the next morning. What belongs in the follow-up?',
      options: ['The leak is fixed because the surface dried', 'The drain must leak only at night', 'It is dry now; retain the earlier photo and timing'],
      correctIndex: 2,
      explanation: 'A later dry observation adds evidence without explaining the earlier water. Neither a repair nor a particular pipe failure has been established.',
    },
    takeaway: 'Report the surface, timing, and evidence; leave the unobserved water route uncertain.',
    sourceNote: 'EPA guidance supports prompt leak reporting and moisture control. This exercise is observation, not plumbing diagnosis or mold cleanup.',
  },
  {
    id: 'life-003',
    title: 'Keep the dryer air path clear without servicing it',
    outcome: 'Explain the lint screen job and distinguish permitted screen care from faults needing service.',
    scene: 'A shared laundry dryer has a removable lint screen beside its door.',
    sections: [
      {
        title: 'Before the next load',
        paragraphs: [
          'At the shared laundry, the previous user has left a layer of fluff on the dryer screen. You know the machine heats clothes, but the screen can look like a minor housekeeping detail. It is part of the air path, not just a tidiness feature. Find the instructions posted for that exact dryer before pulling unfamiliar parts. A shared building should also have someone responsible for maintenance beyond the normal user routine, even if that person is not present.',
        ],
      },
      {
        title: 'Warm air must carry moisture away',
        paragraphs: [
          'During drying, water evaporates from the fabric into moving air. In a vented dryer, that moist air passes through the lint screen and leaves through the exhaust path. Fibres shed from the clothes are caught by the screen. A buildup restricts airflow, making moisture removal harder and contributing to overheating and fire risk.',
          'The screen cannot catch every fibre, so cleaning it does not prove that a hidden duct is clear. Other dryer designs manage moisture differently. The drawing explains a vented model, not the internal layout of every condenser or heat-pump dryer.',
        ],
      },
      {
        title: 'Finish the permitted task',
        paragraphs: [
          'For a model whose manual permits removal, routine care means following its instructions for cleaning the screen and seating it correctly again before use. A screen left on top of the machine has not completed the job. Do not run a cycle without it or replace a damaged screen with improvised material.',
          'If drying suddenly takes longer or the machine behaves abnormally, report the change and stop using it pending appropriate advice. Repeated extra cycles do not diagnose the restriction. Moving the dryer, disconnecting ducts, and opening electrical panels are outside this exercise.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A vented dryer air path',
        alt: 'Moist air moves from the clothes drum through the lint screen toward the exhaust duct.',
        caption: 'Simplified vented model. Only the identified removable screen is routine user access; the duct drawing is not an instruction to disconnect it.',
        items: [
          { label: 'Clothes drum', detail: 'Water evaporates from fabric.', x: 17, y: 50, shape: 'circle' },
          { label: 'Lint screen', detail: 'Fibres collect here.', x: 50, y: 50, shape: 'box' },
          { label: 'Exhaust path', detail: 'Moist air leaves; hidden parts need service.', x: 83, y: 50, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Moist air' }, { from: 1, to: 2, label: 'Air continues' }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Dryer manual or building instructions', 'A note', 'A service contact'],
      steps: [
        'Identify the dryer model from accessible information. If you do not use a dryer, work from its online manual only.',
        'Find the removable screen instructions, including when to clean it and how to confirm it is refitted.',
        'Write a user-care note containing those steps and any shutdown instruction. Do not operate or dismantle the machine for this exercise.',
        'Add the person to contact for damaged parts or an unexpected change in drying performance.',
      ],
      notice: 'The note ends with correct refitting and names a separate route for faults.',
      troubleshooting: 'If a diagram does not match the machine, stop. Check the model or ask the building manager for the correct instructions.',
    },
    recall: {
      prompt: 'A shared dryer takes longer even though its lint screen looks clean. Does that justify another cycle?',
      answer: 'No. A clean screen does not establish that the rest of the air path or appliance is working. Stop and report the changed performance.',
      hint: 'Which parts of the path have you actually checked?',
    },
    quiz: {
      question: 'The screen is torn but the dryer still starts. Which response fits routine-care boundaries?',
      options: ['Leave it unused and request the correct replacement or service', 'Run a lighter load to compensate', 'Remove the screen so the tear cannot catch clothes'],
      correctIndex: 0,
      explanation: 'Starting does not establish safe operation with a damaged screen. A smaller load or removing the screen does not restore its intended function.',
    },
    takeaway: 'Screen cleaning ends with correct refitting; abnormal operation needs service, not repeated cycles.',
    sourceNote: 'U.S. Fire Administration guidance supports appliance fire prevention. Follow the dryer manual; this is not duct-cleaning or electrical-repair instruction.',
  },
  {
    id: 'life-004',
    title: 'Follow bathroom moisture from air to glass',
    outcome: 'Explain recurring condensation and choose a safe observation or reporting step instead of covering the wet patch.',
    scene: 'A bathroom window becomes wet after showers while towels block the extractor grille.',
    sections: [
      {
        title: 'The window is wet again',
        paragraphs: [
          'After a shower, water beads on the bathroom window. You wipe it away, but it returns the next morning. Wiping removes existing water without explaining its arrival. The shower adds vapour, the glass is cool, and a towel covers the extractor grille. These observations suggest a moisture-removal problem worth checking, not a reason to keep wiping indefinitely.',
        ],
      },
      {
        title: 'Cooling turns vapour into droplets',
        paragraphs: [
          'Air contains invisible water vapour. Near cold glass, the air cools. If it cools enough to reach saturation, some water changes from vapour to liquid on the surface. This is condensation. The window has not necessarily leaked, and the droplets do not by themselves identify mold or a health problem.',
          'An extractor moves moist air out through its designed route. Blocking its grille interferes with that movement. Wiping the glass removes liquid; using the installed ventilation as intended helps remove moisture from the room. These actions address different parts of the process.',
        ],
      },
      {
        title: 'Observe the pattern without opening walls',
        paragraphs: [
          'Move the towel to a suitable drying place if it is safe to do so, leaving the grille unobstructed. Use the existing extractor according to its instructions during normal bathroom use. Note whether the same surface becomes wet again and report persistent dampness to maintenance. No special shower or humidity experiment is needed.',
          'A patch that follows rainfall rather than shower use deserves a different report. Multiple causes can coexist. Do not paint over suspected mold, remove a vent cover, peel wallpaper, or spray chemicals to test a theory. The useful result is a clear moisture history and an appropriate maintenance request.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two routes for bathroom moisture',
        alt: 'Water vapour from a shower can condense at a cold window or leave through an unobstructed extractor.',
        caption: 'Schematic, not measured airflow. Compare moisture reaching the cool glass with moisture leaving through the intended extraction route.',
        items: [
          { label: 'Shower area', detail: 'Adds water vapour.', x: 20, y: 72, shape: 'object' },
          { label: 'Cool window', detail: 'Vapour can become droplets here.', x: 20, y: 22, shape: 'screen' },
          { label: 'Extractor grille', detail: 'Keep its normal air path clear.', x: 80, y: 22, shape: 'box' },
          { label: 'Towel on rail', detail: 'Not draped over the grille.', x: 80, y: 72, shape: 'object' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Condensation possible' }, { from: 0, to: 2, label: 'Moist air out' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['A visible bathroom or kitchen vent', 'A note', 'Maintenance contact details'],
      steps: [
        'From a safe standing position, identify the installed extractor and its normal controls. Do not remove covers.',
        'Check whether ordinary belongings block the grille. Move only a safely reachable obstruction, not fitted equipment.',
        'Write one past moisture observation with the surface and preceding activity, or use the shower example if none exists.',
        'Name the maintenance contact for persistent dampness and the details you would include in a report.',
      ],
      notice: 'You can explain which action removes surface water and which addresses moisture in the room.',
      troubleshooting: 'If dampness returns, do not assume ventilation is the only cause. Record its pattern and request investigation.',
    },
    recall: {
      prompt: 'A cold bedroom window is wet behind a closed curtain. What can you conclude, and what remains uncertain?',
      answer: 'Condensation is plausible where moist air meets cold glass. The droplets alone do not establish a leak or the moisture source; record timing and seek advice if persistent.',
      hint: 'Describe the phase change without treating it as a full building diagnosis.',
    },
    quiz: {
      question: 'Bathroom droplets return despite wiping. Which next step addresses a different part of the process?',
      options: ['Use a more absorbent cloth for the same wiping', 'Check intended extraction and report recurring moisture', 'Cover the glass-side wall before it stains'],
      correctIndex: 1,
      explanation: 'Extraction addresses moisture removal; a different cloth still removes only existing liquid. Covering a surface does not resolve the moisture source.',
    },
    takeaway: 'Condensation links moisture and a cool surface. Track the cause as well as the droplets.',
    sourceNote: 'EPA moisture guidance was checked for this lesson. The diagram is explanatory, not a mold diagnosis or cleanup procedure.',
  },
  {
    id: 'life-005',
    title: 'Give each maintenance reminder its real trigger',
    outcome: 'Build one usable care reminder with a trigger, manual reference, responsible person, and recorded result.',
    scene: 'A vacuum dust container reaches its marked fill line before a generic monthly reminder.',
    sections: [
      {
        title: 'Monthly is not a specification',
        paragraphs: [
          'Your calendar says maintain vacuum on the first Sunday of each month. After cleaning packing debris, the dust reaches its marked fill line on Wednesday. Waiting for Sunday would make the calendar outrank the instructions. A reminder can also request washing a part that must stay dry. The date is useful only when it points to the correct task and condition.',
        ],
      },
      {
        title: 'Three kinds of trigger',
        paragraphs: [
          'A use trigger follows an event, such as completing a load. A condition trigger responds to something visible, such as a marked fill line. An interval trigger follows elapsed time specified by the manufacturer. These are different ways of deciding when care is due, not interchangeable labels for monthly chores.',
          'The condition matters because accumulated material can obstruct an intended path or exceed the capacity designed for it. A reminder does not measure that condition. Its job is to direct you to the relevant check without inventing a replacement maintenance rule.',
        ],
      },
      {
        title: 'Write an action that can be closed honestly',
        paragraphs: [
          'For a fictional vacuum whose manual says to empty at the marked line, the record could say: inspect the visible dust level after use; empty by the line using the shutdown instructions; owner: me; source: dust-container section. The real model might require a different routine, so copy its wording rather than this example.',
          'Afterward, record what happened. Inspected, below line is different from emptied. If a seal is damaged, replacement requested is different from repaired. A useful record leaves unfinished service visible instead of awarding a reassuring tick for merely dismissing the notification.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'From an observed fill line to a record',
        alt: 'A vacuum care record checks the dust level, follows the specified emptying procedure when due, and records the actual result.',
        caption: 'Fictional manual example. Inspect the condition before deciding that a care task is due; use your own model instructions.',
        items: [
          { label: 'After ordinary use', detail: 'Check the visible container level.' },
          { label: 'At the marked line?', detail: 'Use the manual condition, not a guessed month.' },
          { label: 'Permitted user care', detail: 'Follow shutdown and emptying instructions.' },
          { label: 'Record the result', detail: 'Emptied, not due, or service requested.' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['One appliance manual', 'Your existing calendar or paper list'],
      steps: [
        'Choose one routine user-care task in a manual. Read the warnings and identify whether use, condition, or time triggers it.',
        'Write the task and trigger together. Keep any manufacturer interval intact rather than rounding it to a convenient month.',
        'Add the manual section and the person responsible. Name a service contact if access is not permitted for users.',
        'Draft a completion entry that records an observation or action, such as inspected and below fill line.',
      ],
      notice: 'The reminder says how to decide whether action is due and what completion would mean.',
      troubleshooting: 'If the reminder still says service appliance, narrow it to one named component and its documented user-care task.',
    },
    recall: {
      prompt: 'A manual says inspect a door seal regularly but gives no replacement date. Should you schedule a new seal every month?',
      answer: 'No. Schedule an inspection appropriate to the instructions and record its condition. Do not turn an inspection prompt into an invented replacement interval.',
      hint: 'Distinguish looking for wear from assuming that wear has occurred.',
    },
    quiz: {
      question: 'A maintenance reminder was dismissed, but a damaged part is awaiting service. What status fits?',
      options: ['Completed because the reminder was reviewed', 'Not due because someone else will repair it', 'Inspection complete; service still pending'],
      correctIndex: 2,
      explanation: 'Inspection and repair are separate events. Keeping service pending preserves the unresolved condition instead of hiding it behind a completed reminder.',
    },
    takeaway: 'Record the task, trigger, source, owner, and actual result, not just a recurring date.',
    sourceNote: 'The maintenance sources inform the checklist. The vacuum instruction is fictional, not a universal fill-level or cleaning specification.',
  },
  {
    id: 'life-006',
    title: 'Plan an errand route around the stop that can close',
    outcome: 'Combine nearby errands without overlooking opening hours or the item needed at each counter.',
    scene: 'A walk links a library return, a trouser collection, and a parcel locker.',
    sections: [
      {
        title: 'Nearby does not mean available',
        paragraphs: [
          'You have three errands after work: return a library book, collect altered trousers, and pick up a parcel. A list ordered by enthusiasm sends you to the parcel first. A list ordered by distance might do the same. Neither notices that the library counter closes before the tailor, while the locker remains accessible later. Grouping tasks by place is useful, but an open route on a map is not proof that each service will be available when you arrive.',
        ],
      },
      {
        title: 'A route has time and item constraints',
        paragraphs: [
          'Each stop needs a place, a usable time window, and something you bring. The library needs the book. The tailor needs a collection reference. The locker needs its access code and an unexpired collection window. Missing one prerequisite can make an otherwise efficient walk pointless.',
          'Treat the earliest closing stop as a constraint, not automatically the first stop in every trip. It belongs early when travel and queue time would otherwise make you miss it. Check whether the particular service has shorter hours than the building itself.',
        ],
      },
      {
        title: 'Compare two orders before leaving',
        paragraphs: [
          'In this fictional example, the library closes at 17:00 and the tailor at 18:00. Your route estimate reaches the library at 16:50 if you go there first, but 17:05 if you collect the parcel first. The second order fails even if its walking distance is slightly shorter. The times are planning assumptions, not live travel information.',
          'Choose the feasible order, gather the book and references, and allow for uncertainty. If the library cannot be reached in time, plan it separately. Do not turn a missed optional stop into a rushed journey or add purchases merely to justify the trip.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'One feasible walking order',
        alt: 'A route goes from home to the library, then the tailor, then a parcel locker.',
        caption: 'Fictional map, not to scale. The library-first order meets the example closing time; real hours and travel still need checking.',
        items: [
          { label: 'Home', detail: 'Take book and private collection references.', x: 20, y: 22, shape: 'box' },
          { label: 'Library', detail: 'Arrive 16:50; counter closes 17:00.', x: 80, y: 22, shape: 'box' },
          { label: 'Tailor', detail: 'Closes 18:00 in this example.', x: 80, y: 78, shape: 'box' },
          { label: 'Parcel locker', detail: 'Check access and collection expiry.', x: 20, y: 78, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'First' }, { from: 1, to: 2, label: 'Next' }, { from: 2, to: 3, label: 'Then' }],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Three real or example errands', 'A paper list', 'Official opening information'],
      steps: [
        'Write each stop with its location and the item or reference needed there. Keep private codes off shared lists.',
        'Check the service hours and any collection expiry. Mark estimates and unknowns rather than inventing opening times.',
        'Choose an order that reaches the least flexible stop in time. Gather the prerequisites and leave an infeasible stop for another trip.',
      ],
      notice: 'You have a route and a departure checklist, not just three task names.',
      troubleshooting: 'If all stops seem urgent, verify the actual closing dates. Necessary errands need not wait for a perfect batch.',
    },
    recall: {
      prompt: 'A shop is open late, but its returns counter closes early. Where does a return belong in your route?',
      answer: 'Use the returns-counter hours, not the shop hours. Place it where travel and waiting leave enough time, or make a separate trip.',
      hint: 'You need a service, not merely entry to a building.',
    },
    quiz: {
      question: 'The shortest route reaches a collection counter after closing. Which comparison matters next?',
      options: ['Whether another order meets the counter hours with the required items', 'Whether the shortest route stays within your walking-distance budget', 'Whether returning home between stops makes the items easier to carry'],
      correctIndex: 0,
      explanation: 'Feasibility comes before distance. Proximity cannot supply an unavailable service or a collection reference left at home.',
    },
    takeaway: 'Group by place, then test hours, travel, and prerequisites before leaving.',
    sourceNote: 'This route-planning checklist is original. The inherited task reference explains list tools, not a measured time-saving effect.',
  },
  {
    id: 'life-007',
    title: 'Put preparation before the expiry reminder',
    outcome: 'Separate an administrative deadline from the first action and the dependency blocking it.',
    scene: 'A resident parking permit needs a current address document before renewal can be submitted.',
    sections: [
      {
        title: 'Renew permit is not a next step',
        paragraphs: [
          'Your parking permit expires at the end of next month. You put renew permit on that date and feel that it is handled. When the reminder arrives, the form asks for a current address document you do not have ready. The problem was not forgetting the final date. It was storing that date as though it also described every action needed beforehand. A deadline says when the result is needed; it does not tell you what can be done today.',
        ],
      },
      {
        title: 'Find the step that unlocks the next one',
        paragraphs: [
          'A dependency is something one step needs from an earlier step. Submission might depend on obtaining evidence, and choosing evidence depends on knowing what the issuer accepts. Starting with an old document from a friend skips that first check. Rules, accepted formats, and processing arrangements can change.',
          'Use the issuing organisation to find current requirements. Record an official processing estimate as an estimate, not a promised completion date. If no processing time is published, keep that uncertainty visible and ask through the official contact route rather than filling in a reassuring guess.',
        ],
      },
      {
        title: 'Make three different entries',
        paragraphs: [
          'For this fictional permit, the final deadline is 30 November. The first action is read the issuer\'s address-evidence requirements. The dependency is obtain one accepted current document before submitting. These entries answer different questions and belong in separate fields, even if you keep them on one piece of paper.',
          'After reading the requirements, replace the first action with the next unfinished step. If your existing document is accepted, you can proceed. If it is not, requesting the correct document becomes the next action. Do not set a reminder only for the expiry date and expect preparation to happen automatically.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'What renewal depends on',
        alt: 'The permit renewal needs current requirements, accepted evidence, and submission before the stated expiry.',
        caption: 'Fictional permit sequence. Arrows show dependencies, not guaranteed processing times or universal permit requirements.',
        items: [
          { label: 'Read issuer requirements', detail: 'Which address documents are accepted?' },
          { label: 'Obtain accepted evidence', detail: 'Request it if your current document does not qualify.' },
          { label: 'Submit renewal', detail: 'Keep the submission confirmation.' },
          { label: 'Track the deadline', detail: 'Example expiry: 30 November.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['One nonurgent admin task or the permit example', 'Official requirements', 'A note'],
      steps: [
        'Write the final date separately from the task name. Label any example date as fictional.',
        'Read the current issuer requirements and identify one prerequisite for submission.',
        'Write the first action you can finish now, including where to find the needed information.',
        'Choose a preparation check date before the deadline, accounting for published lead times and any uncertainty.',
      ],
      notice: 'You can start one action without having to solve the entire renewal first.',
      troubleshooting: 'If your action says sort paperwork, name the exact requirement to check or document to locate.',
    },
    recall: {
      prompt: 'A workshop application needs a portfolio link before the closing date. What is the deadline, and what might be the next action?',
      answer: 'The closing date is the deadline. Check the required portfolio format first, then identify whether your existing work meets it before building or submitting anything.',
      hint: 'Do not confuse the final upload with discovering what the upload must contain.',
    },
    quiz: {
      question: 'You have a renewal deadline but do not know which evidence is accepted. What should the next reminder say?',
      options: ['Submit the form on the expiry date', 'Collect every old document you can find', 'Check the issuer\'s current evidence requirements'],
      correctIndex: 2,
      explanation: 'Requirements determine which preparation is useful. Gathering everything can waste effort, while a final-day submission reminder leaves the dependency unresolved.',
    },
    takeaway: 'Keep the deadline, the dependency, and the next doable action separate.',
    sourceNote: 'The permit is fictional. This planning method does not establish local renewal requirements, processing guarantees, or rights.',
  },
  {
    id: 'life-008',
    title: 'A return ends at the refund, not the parcel counter',
    outcome: 'Prepare a complete return and keep the evidence needed to follow it through to resolution.',
    scene: 'A pair of unworn boots must be returned with its accessories and seller authorisation.',
    sections: [
      {
        title: 'The box by the door',
        paragraphs: [
          'The boots you ordered do not fit. You put the box by the front door, intending to send it back later. That visible box reminds you that a task exists, but it does not tell you whether the seller requires an authorisation, which accessories must be included, or when the return window closes. Packing first and reading later can leave you with a sealed parcel that still cannot be accepted. Start with the instructions for this purchase, not the last shop you used.',
        ],
      },
      {
        title: 'The return has several states',
        paragraphs: [
          'Preparing, handing over, seller receipt, and refund are separate events. A return label usually helps route the parcel; it is not proof that the parcel was sent. A carrier receipt shows handover, but it does not by itself establish that the seller has approved a refund.',
          'Keep evidence matched to each state. The instructions describe eligibility and costs. A contents note records what you packed. The tracking reference identifies the shipment. The refund confirmation and later payment record tell you whether the money actually returned. Do not collapse these into one tick called returned.',
        ],
      },
      {
        title: 'Make one complete packet',
        paragraphs: [
          'For the example boots, gather the pair, included spare laces, required paperwork, and suitable packaging. Confirm the seller condition rules before removing tags or doing anything that could affect eligibility. Keep private order details in protected notes rather than visible on a shared household board.',
          'After handover, save the carrier reference and set a check against the seller\'s stated refund process. If no refund appears when expected, that reference makes the enquiry specific. Do not invent a legal refund deadline: shop terms and statutory rights depend on the transaction and location.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Four pieces of return evidence',
        alt: 'Return instructions, a packed pair of boots, carrier handover proof, and a refund record occur at different stages.',
        caption: 'An example sequence, not a promised timetable. Inspect which evidence proves each event and which event is still outstanding.',
        items: [
          { label: 'Authorised', detail: 'Instructions and eligibility checked.' },
          { label: 'Packed', detail: 'Boots, spare laces, and required paperwork.' },
          { label: 'Handed over', detail: 'Carrier receipt and tracking reference saved.' },
          { label: 'Refund checked', detail: 'Confirmation compared with payment record.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['A genuine return or the boots example', 'Seller instructions', 'A private checklist'],
      steps: [
        'Read the condition rules, deadline, authorisation process, packaging requirements, and return cost. Mark any unanswered question.',
        'List the item and accessories that must travel together. Gather them only if you have an actual return to make.',
        'Create a place to save the handover reference after sending. Do not mark a printed label as shipment proof.',
        'Add a refund follow-up based on the seller\'s stated process, with the order reference kept private.',
      ],
      notice: 'The checklist shows the current stage and leaves the refund check open after drop-off.',
      troubleshooting: 'If instructions conflict, ask the seller before dispatch. Keep their written answer with the return record.',
    },
    recall: {
      prompt: 'Tracking says a returned lamp was delivered, but no refund is visible. What evidence and question belong in your enquiry?',
      answer: 'Use the order and delivery references to ask about refund status under the stated process. Delivery is evidence of arrival, not automatic proof of payment.',
      hint: 'Match the evidence to the event it actually confirms.',
    },
    quiz: {
      question: 'You printed a return label but have not dropped off the parcel. Which status is accurate?',
      options: ['Returned, because tracking now exists', 'Prepared for dispatch, with handover still pending', 'Refund pending, because the seller generated the label'],
      correctIndex: 1,
      explanation: 'A label does not show that the carrier has received the item. Keep preparation separate from shipment and from refund approval.',
    },
    takeaway: 'Keep preparation, handover, and refund evidence together without treating them as the same event.',
    sourceNote: 'FTC shopping guidance supplies background. The boots packet is an original checklist; return rights and deadlines vary by jurisdiction.',
  },
  {
    id: 'life-009',
    title: 'Make running low a visible event',
    outcome: 'Choose a reorder signal that connects actual stock, compatibility, and the time needed to replenish it.',
    scene: 'Two housemates share bin liners stored in a working roll and one spare pack.',
    sections: [
      {
        title: 'Both people thought the other bought them',
        paragraphs: [
          'The bin-liner roll is empty. One housemate remembers saying it was running low; the other remembers shopping last week. Neither memory specifies when to buy or which size fits. A reorder point replaces that vague state with an observable event. Here, opening the last spare pack could prompt a purchase before the final liner is used.',
        ],
      },
      {
        title: 'Stock must cover the wait',
        paragraphs: [
          'The signal has to leave enough supply for the time between noticing and replenishing. If a pack lasts through several shopping trips, opening the last spare can be a workable cue. If consumption changes or delivery takes longer, that same cue can become too late. There is no universal number of spare packs that every household should keep.',
          'Compatibility belongs beside the signal. A capacity label alone may not describe the opening or length you need. Save the dimensions or product reference of a liner that fits, rather than asking the next shopper to reconstruct the choice.',
        ],
      },
      {
        title: 'Use one shelf position and one list',
        paragraphs: [
          'Keep the working roll at the front and the spare behind it. When the spare moves forward, add its specification to the shared list. In this example, an empty rear position is a stock signal, not a demand to buy every time someone opens the cupboard.',
          'Before purchasing, check whether another person has already marked the item bought. After restocking, put the spare back in its assigned place. If duplicate purchases continue, the problem may be the list update rather than the amount stored. Adjust the system using actual use, budget, and available space.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A shelf that shows the trigger',
        alt: 'A working roll sits at the front, a spare at the rear, and a shared list is updated when the spare moves forward.',
        caption: 'Top-view storage example. Moving the last spare exposes the empty position that prompts the list entry.',
        items: [
          { label: 'Working roll', detail: 'Front of shelf: use this first.', x: 23, y: 78, shape: 'object' },
          { label: 'Last spare pack', detail: 'Rear position: moving it triggers the list.', x: 23, y: 22, shape: 'box' },
          { label: 'Shared shopping list', detail: 'Specification plus bought status.', x: 78, y: 50, shape: 'paper' },
        ],
        arrows: [{ from: 1, to: 0, label: 'Spare becomes working' }, { from: 1, to: 2, label: 'Add when moved' }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['One non-food household supply', 'Its packaging', 'An existing shopping list'],
      steps: [
        'Choose a supply you already use. Record the size or product reference needed for a compatible replacement.',
        'Count usable stock and choose an observable reorder event that leaves time for your normal shopping or delivery.',
        'Assign a visible place for the spare or reorder note. Do not buy extra stock just to complete this exercise.',
        'Agree how a shared list marks a purchase completed, or use the same status for your own orders.',
      ],
      notice: 'Another shopper can recognise both when to order and what specification to buy.',
      troubleshooting: 'If supplies still run out, compare actual consumption with replenishment time before increasing the amount stored.',
    },
    recall: {
      prompt: 'A compatible printer refill takes longer to arrive than it used to. How should you reconsider the reorder signal?',
      answer: 'Move the signal earlier if existing stock cannot cover the longer wait. Keep compatibility and storage limits visible rather than automatically ordering several backups.',
      hint: 'The signal needs to cover the delay, not just describe an empty shelf.',
    },
    quiz: {
      question: 'Both housemates order liners after seeing the empty spare position. What change addresses the duplicate?',
      options: ['Use one list with a visible purchased status', 'Keep an extra pack to make running out less likely', 'Order a larger pack so purchases happen less often'],
      correctIndex: 0,
      explanation: 'The shortage signal worked, but purchasing was not coordinated. More shelf space changes stock capacity, not whether people see an order already placed.',
    },
    takeaway: 'Connect a visible stock event to a precise, shared, up-to-date shopping entry.',
    sourceNote: 'This is an original stock-control heuristic, not a tested savings claim or a prescribed amount of household inventory.',
  },
  {
    id: 'life-010',
    title: 'Keep a waiting request visible',
    outcome: 'Track a request with its contact, reference, next check date, and the action needed when a reply arrives.',
    scene: 'A tailor has acknowledged a curtain-shortening enquiry but has not confirmed a collection date.',
    sections: [
      {
        title: 'Sent is not finished',
        paragraphs: [
          'A tailor acknowledges your request to shorten two curtains but gives no quote or collection date. You remove the task because there is nothing else to send. Later, the bag of curtains reminds you that the answer never arrived. The sent message recorded communication without keeping the missing result visible. Waiting needs a place between active work and completion.',
        ],
      },
      {
        title: 'A check date is not someone else promise',
        paragraphs: [
          'A waiting entry contains who has the next move, how to identify the request, and when you will check its status. If the tailor promised a reply on Friday, record that promise accurately. If no date was given, choose a reasonable personal check date and label it as yours. Do not rewrite your reminder as their missed deadline.',
          'This distinction keeps follow-up factual. A reference and the original request help the recipient find the conversation. Repeated messages saying any update without context can create more searching without clarifying what answer you need.',
        ],
      },
      {
        title: 'Close the waiting state, not the whole project',
        paragraphs: [
          'An example entry reads: waiting for curtain quote; contact: tailor; request sent Tuesday; next personal check: Friday; reference stored in private message. On Friday, either read the reply or ask whether they can provide a quote. No response does not establish neglect or a guaranteed turnaround breach.',
          'When the quote arrives, the request is no longer waiting for that answer. Your next action might be compare the quoted scope or arrange collection. Replace the waiting entry with that action rather than declaring the curtains finished. Each update should describe the actual state of the work.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The curtain request changes state',
        alt: 'A curtain quote request is sent, waits with a personal check date, receives a quote, and needs a decision.',
        caption: 'Fictional request history. Notice that receiving a quote ends one wait but starts a decision, not completed alterations.',
        items: [
          { label: 'Tuesday: request sent', detail: 'Ask for the curtain-shortening quote.' },
          { label: 'Waiting for the tailor', detail: 'Friday is your check date, not their promise.' },
          { label: 'Quote received', detail: 'Check price and included work.' },
          { label: 'Your next action', detail: 'Decide whether to arrange collection.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['One non-sensitive pending request or the curtain example', 'Your existing task list'],
      steps: [
        'Write exactly what answer or event you are waiting for and who can provide it.',
        'Add a private reference to the original request and its sent date. Avoid exposing personal identifiers in shared task titles.',
        'Record a promised response date if one exists; otherwise choose and label your own check date.',
        'Draft what you will do when the answer arrives and a factual follow-up if it does not.',
      ],
      notice: 'You can locate the request and know when to look again without rereading every sent message.',
      troubleshooting: 'If the entry has no clear expected answer, rewrite the original question before sending another reminder.',
    },
    recall: {
      prompt: 'A housing office confirms receipt of your repair form but gives no repair date. What should stay on your list?',
      answer: 'Keep the repair outcome pending, with the acknowledgement reference and a labelled personal check date. Receipt of the form is not completion of the repair.',
      hint: 'What event has been confirmed, and what event still has to happen?',
    },
    quiz: {
      question: 'A quote arrives on the day you planned to follow up. What is the most accurate update?',
      options: ['Leave it waiting until the provider follows up again', 'Mark the whole repair finished', 'Replace the wait with your decision about the quote'],
      correctIndex: 2,
      explanation: 'The answer has arrived, so the next move has changed. A received quote is not evidence that the work has been authorised or completed.',
    },
    takeaway: 'Waiting needs an expected event, a contact, a reference, and an honest check date.',
    sourceNote: 'The waiting-list format is an original planning suggestion. A personal reminder does not create a provider commitment or legal deadline.',
  },
  {
    id: 'life-011',
    title: 'Do not let a shop password unlock your email',
    outcome: 'Explain how password reuse can expose email and check for that dependency without revealing a password.',
    scene: 'An old craft-shop account and a personal inbox were created with the same password.',
    sections: [
      {
        title: 'The shop is not the only account at stake',
        paragraphs: [
          'An old craft shop and your email use the same password. If the shop exposes credentials, someone can try that email address and password against your inbox. The companies do not need to share a database. Your reuse connects the accounts, even if you stopped visiting the shop years ago.',
        ],
      },
      {
        title: 'Why an inbox has extra consequences',
        paragraphs: [
          'Many services send password-reset links to your email address. Someone who gains inbox access can therefore receive messages intended to help you recover other accounts. That does not mean every account can be taken over this way, but it makes email more than a collection of old conversations.',
          'A strong, separate email password breaks the particular route from a leaked shop password to a matching email login. It does not stop phishing, every recovery abuse, or malware on a device. Two-step verification adds another protection, but it is not a reason to keep reusing the email password.',
        ],
      },
      {
        title: 'Check privately, then use the official route',
        paragraphs: [
          'Use your trusted password manager or your own knowledge to check whether the email credential is reused. Do not paste it into a notes app, a chat, or a website claiming to test password safety. A password manager warning about reuse can identify the problem without making a public list of your secrets.',
          'If a change is needed, use the email provider\'s official settings and your trusted password manager. Check that recovery options are available before making changes. Store the new credential securely, and follow employer rules for any managed account rather than applying a personal experiment to work sign-in.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Check the email dependency privately',
        alt: 'Identify the personal inbox, check for password reuse in a trusted manager, use official settings if needed, and confirm secure storage.',
        caption: 'This is a check sequence, not a password-sharing worksheet. No secret value belongs in the diagram or your lesson notes.',
        items: [
          { label: 'Personal inbox', detail: 'Receives reset links for other services.' },
          { label: 'Private reuse check', detail: 'Does its password also protect the craft shop?' },
          { label: 'Official account settings', detail: 'Replace reuse with a strong, separate password.' },
          { label: 'Trusted manager', detail: 'Keep the credential and recovery route protected.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Your personal email settings', 'Your existing trusted password manager, if used'],
      steps: [
        'Identify the personal inbox that receives account reset messages. Do not record its password here.',
        'Privately check whether its password is reused, using your manager or your own knowledge. Do not test leaked credentials anywhere.',
        'Locate the official change and recovery settings. If reuse exists, plan the change with secure storage and recovery ready.',
      ],
      notice: 'You know whether a leaked password from another service could also match this inbox.',
      troubleshooting: 'If you cannot establish uniqueness, use the provider supported change process after checking recovery. Do not guess repeatedly at sign-in.',
    },
    recall: {
      prompt: 'You stopped using an old forum but its password still matches your email. Has inactivity removed the risk?',
      answer: 'No. A stored forum credential can still be exposed and tried against email. The relevant dependency is reuse, not how often you visit the forum.',
      hint: 'An unused account can still contain an old secret.',
    },
    quiz: {
      question: 'Your inbox has two-step verification but shares a password with a shop. Which change addresses the reuse route?',
      options: ['Keep the password because the second step makes reuse irrelevant', 'Set a strong, separate email password while retaining the second step', 'Keep the password but stop signing in to the old shop'],
      correctIndex: 1,
      explanation: 'A separate password removes the matching credential. The second factor remains useful, but it does not make sharing the first factor desirable.',
    },
    takeaway: 'Protect the inbox with a separate password because other accounts can depend on its reset messages.',
    sourceNote: 'NCSC guidance supports separate email passwords and trusted password managers. This check addresses reuse, not every account-compromise route.',
  },
  {
    id: 'life-012',
    title: 'Make recovery survive the missing phone',
    outcome: 'Find a protected recovery route that does not depend entirely on the device used for the second factor.',
    scene: 'A traveller has an authenticator and a screenshot of recovery codes on the same phone.',
    sections: [
      {
        title: 'Two copies can share one failure',
        paragraphs: [
          'You enable two-step verification on a personal account. Its approval app and a screenshot of recovery codes are both on your phone. If that phone is lost, both local copies disappear together. The question is whether recovery remains accessible without the primary device, not simply whether you saved the information in a second folder.',
        ],
      },
      {
        title: 'Extra protection needs a supported fallback',
        paragraphs: [
          'Two-step verification requires a check beyond the password. Depending on the service, it might use an authenticator, security key, or another supported method. A stolen password alone is less useful when the additional check is required. Recovery procedures exist so the legitimate owner can regain access when a factor is lost.',
          'Recovery codes are secrets, not ordinary reference numbers. Someone who obtains one may be able to use it in the recovery process. A useful storage location therefore has two jobs: remain accessible without the missing phone and protect the codes from other people.',
        ],
      },
      {
        title: 'Check the dependency without locking yourself out',
        paragraphs: [
          'While still signed in, read the provider\'s recovery instructions. Identify the supported options and confirm that recovery contact details are current. If the provider offers codes, choose protected storage you can access independently, such as an appropriate secure offline location or a trusted manager with an independent access route.',
          'Do not sign out everywhere, remove your only factor, or publish a code to prove that the plan works. Also check for circular dependencies: a recovery email that can only be opened using the same missing phone may not provide the independence you expected. Unexpected approval prompts should be denied, not accepted to silence them.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Ask where recovery remains accessible',
        alt: 'A recovery audit begins while signed in, identifies a fallback, checks independence from the phone, and confirms protected storage.',
        caption: 'Read-only planning. Would losing the phone also remove access to the proposed fallback?',
        items: [
          { label: 'Stay signed in', detail: 'Open the genuine recovery instructions.' },
          { label: 'Find a supported fallback', detail: 'Codes, contacts, or other provider options.' },
          { label: 'Imagine the phone missing', detail: 'Can you still access that fallback?' },
          { label: 'Protect the recovery route', detail: 'No codes in chats or ordinary shared notes.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['A personal account with two-step verification', 'Its official recovery help'],
      steps: [
        'Open the official recovery settings while you remain signed in. Inspect options without displaying or copying codes into this app.',
        'Identify one fallback and ask how you would reach it if the phone were missing.',
        'Check whether a recovery contact or storage login depends on that same phone. Record only the dependency, not any secret.',
        'Choose a supported improvement if needed. Do not remove factors or trigger account recovery as a drill.',
      ],
      notice: 'Your plan names a protected route that survives the loss it is meant to address.',
      troubleshooting: 'If every route returns to the same phone, consult the provider options before changing anything. Keep current access intact.',
    },
    recall: {
      prompt: 'Your backup authenticator is on a tablet kept in the same travel bag as the phone. What weakness remains?',
      answer: 'Loss of that bag could remove both devices. Review protected recovery that does not share the same likely loss, using the provider supported methods.',
      hint: 'Count independent failure paths, not just devices.',
    },
    quiz: {
      question: 'Which recovery plan best addresses losing the only sign-in phone?',
      options: ['A supported secret stored securely and accessible without that phone', 'A second screenshot in another folder on the phone', 'An email copy requiring that phone for every sign-in'],
      correctIndex: 0,
      explanation: 'The first option addresses both availability and secrecy. Extra folders or a circular email route still depend on the missing device.',
    },
    takeaway: 'Recovery must be protected and independent of the thing you might lose.',
    sourceNote: 'NCSC security guidance informs this lesson. Recovery methods differ by provider; the exercise does not test a live account lockout.',
  },
  {
    id: 'life-013',
    title: 'Give an app only the access its task needs',
    outcome: 'Compare a current app feature with its permissions and explain what revoking access does not erase.',
    scene: 'A weather app still has precise background location access although the user checks only one saved town.',
    sections: [
      {
        title: 'Yesterday permission can outlast yesterday task',
        paragraphs: [
          'On a trip, you let a weather app find your location automatically. Months later, you use it only to check the forecast for your saved town. Its location permission has not necessarily changed with your routine. A feature you used once can leave a broader permission in place. Rather than asking whether the entire app is good or bad, compare the information it can access with the job you currently want it to do.',
        ],
      },
      {
        title: 'A permission opens a particular route',
        paragraphs: [
          'Operating-system permissions control access to resources such as location, contacts, photos, camera, or microphone. Some systems offer narrower choices, including approximate location, access only during use, or selected photos. The available controls depend on the device and app. A weather forecast for a saved town might work without automatic location at all.',
          'Changing a permission limits future access through that permission. It does not reach into the company servers and remove records already received. Other collection routes can remain, including information you type or information associated with an account. A permission audit is one privacy check, not a complete deletion procedure.',
        ],
      },
      {
        title: 'Narrow access, then test the actual feature',
        paragraphs: [
          'Open the phone privacy settings and find the weather app current access. If your needed feature is a saved-town forecast, try the narrowest option that supports it. Then open that forecast and check whether it still works. Do not grant every permission again just because the app asks.',
          'If a necessary feature fails, identify which access it needs and consider a narrower supported option. You can also choose not to use that feature. For previously collected information, read the service\'s account, retention, and deletion controls separately. Turning off location is not proof that a travel history was erased.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A weather-permission check',
        alt: 'The user names a saved-town forecast, inspects location permission, narrows unnecessary access, and tests the forecast.',
        caption: 'Example controls vary by device. The final check is the needed forecast, not whether every requested permission is enabled.',
        items: [
          { label: 'Needed feature', detail: 'Forecast for one saved town.' },
          { label: 'Current location access', detail: 'Check precision and background access.' },
          { label: 'Narrow the permission', detail: 'Use no location or a supported limited option.' },
          { label: 'Open the town forecast', detail: 'Check function; review old data separately.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['A personal phone', 'One nonessential app you own and use'],
      steps: [
        'Write the one feature you still need from the app, without including personal account details.',
        'Open its operating-system permissions and compare one permission with that feature.',
        'Remove unnecessary access or select a narrower supported option. Leave managed work apps and safety-critical services alone.',
        'Test the intended feature. If it fails, check the specific requirement before restoring broader access.',
      ],
      notice: 'You can name the permission changed and whether the intended function still works.',
      troubleshooting: 'If the controls are unfamiliar, use official device help. Do not assume an app account switch changes operating-system permissions.',
    },
    recall: {
      prompt: 'You revoke photo access after a printing order. What happens to images already uploaded to the printing service?',
      answer: 'Revocation does not automatically delete those uploads. Review the service stored-order and deletion controls separately from device photo access.',
      hint: 'Distinguish future access from copies already received.',
    },
    quiz: {
      question: 'A saved-town forecast works after location is disabled. Which conclusion follows?',
      options: ['The provider has deleted every old location record', 'The app can no longer collect any information', 'That forecast does not currently require device location access'],
      correctIndex: 2,
      explanation: 'The test supports a narrow functional conclusion. It does not audit server records or other ways information reaches the service.',
    },
    takeaway: 'Match permissions to current use, and treat past-data deletion as a separate question.',
    sourceNote: 'FTC privacy guidance was checked for permission review. Exact controls and data-retention processes are device- and service-specific.',
  },
  {
    id: 'life-014',
    title: 'Check both who can open a link and what they can do',
    outcome: 'Distinguish sharing audience from permission level before sending a document link.',
    scene: 'A hiking plan with private travel details is intended for one friend to read.',
    sections: [
      {
        title: 'A private message can contain a broad link',
        paragraphs: [
          'You send a hiking plan to one friend in a private message. The document includes a meeting point and travel details. Because the message went to one person, you assume the document audience is one person too. But its sharing settings might allow anyone with the link to open it. A forwarded message would carry that access onward. The privacy of the conversation and the access rules of the linked document are separate controls.',
        ],
      },
      {
        title: 'Audience and permission answer different questions',
        paragraphs: [
          'Audience asks who is admitted. A restricted document can name particular accounts, while anyone-with-link access can admit people not on your original recipient list. Permission asks what admitted people can do, such as view or edit. Restricting editing does not necessarily restrict who can read the content.',
          'For a plan meant for one friend to read, named-person access with view permission matches both requirements. If the friend needs to suggest changes, consider the service supported comment or collaboration options. Do not broaden the audience simply because editing controls are easier to find.',
        ],
      },
      {
        title: 'Inspect before sending',
        paragraphs: [
          'Open the sharing panel on a harmless document you own. Check the general-access setting as well as named recipients. An entry for your friend does not cancel a separate anyone-with-link setting. Inherited folder access can also affect the audience, so inspect the service explanation where it appears.',
          'Before sharing real travel details, match the intended audience and role. Later revocation can prevent future opening through that access route, but it cannot retrieve a downloaded copy, screenshot, or photograph. Choose what to include with that limit in mind rather than treating a restricted link as a promise of permanent secrecy.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Check the hiking plan before sending',
        alt: 'The sharing check names one reader, inspects general access, checks viewer permission, and reviews the link before sending.',
        caption: 'Illustrative cloud-sharing check. A named viewer can coexist with broader general access, so inspect both controls.',
        items: [
          { label: 'Intended reader', detail: 'One named friend.' },
          { label: 'General access', detail: 'Restricted, not anyone with the link.' },
          { label: 'Friend permission', detail: 'Viewer for a reading-only purpose.' },
          { label: 'Final content check', detail: 'Include only travel details needed for the plan.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['A harmless private document you own', 'Its sharing controls'],
      steps: [
        'Choose a test document without personal information or active collaborators. Do not make it public to learn the interface.',
        'Inspect both general access and named recipients. Note any inherited access described by the service.',
        'Write the intended audience and role for an imaginary reader. Compare the current controls with that requirement.',
        'Leave the document private. Record any unanswered sharing question without sending an invitation or changing another person\'s access.',
      ],
      notice: 'You can state who is admitted and whether they can read, comment, or edit.',
      troubleshooting: 'If a folder controls access, inspect its documentation rather than changing the whole folder during this exercise.',
    },
    recall: {
      prompt: 'A club roster is view-only but available to anyone with the link. Does view-only make its audience private?',
      answer: 'No. View-only limits changes, not who receives access through the link. Restrict the audience as well if only named members should read it.',
      hint: 'Who can enter and what they can do are different questions.',
    },
    quiz: {
      question: 'A friend is a named viewer, but general access says anyone with the link. What does a forwarded link imply?',
      options: ['Only the named friend can open it', 'Another link holder may also be able to read it', 'The next person automatically becomes an editor'],
      correctIndex: 1,
      explanation: 'General link access can admit additional readers. A named viewer entry does not override it, and viewing does not automatically grant editing.',
    },
    takeaway: 'Before sharing, check the audience, the role, and any broader inherited access.',
    sourceNote: 'The inherited Google Drive guide explains sharing controls. Other services differ, and revocation cannot retrieve copies already made.',
  },
  {
    id: 'life-015',
    title: 'A downloaded update may not be the running update',
    outcome: 'Check whether an update is installed and active, using official controls and any required restart.',
    scene: 'A personal tablet has downloaded a system update but still shows restart required.',
    sections: [
      {
        title: 'The notification is only one stage',
        paragraphs: [
          'Your tablet reports that an update has downloaded. You dismiss the restart reminder because a drawing is still open. The next day, you remember the download and assume the security fix is in use. But the settings still say restart required. Downloading brought the update package to the device. It did not necessarily replace the software currently running. Treat the update screen as a sequence of states rather than one notification that means everything is finished.',
        ],
      },
      {
        title: 'Files on storage and code in use differ',
        paragraphs: [
          'An update can replace program files while an older process is still running. Some applications need closing and reopening; some system changes require a restart so the new components can take over. The exact mechanism depends on the software, so a restart is not a universal ritual to perform after every download.',
          'Security updates can fix weaknesses in the old version. Until a required activation step completes, you may still be using the affected code. Completion reduces the particular exposure the update addresses; it does not certify that the device has no other weaknesses or unsafe applications.',
        ],
      },
      {
        title: 'Finish through the genuine controls',
        paragraphs: [
          'For the tablet example, save the drawing, check the device instructions, and choose a suitable time for the requested restart. Afterward, return to the official update screen and confirm that it reports completion rather than another pending action. If a new update is offered, read that state separately.',
          'Use built-in settings or the genuine vendor route. A web advertisement saying your system is outdated is not the same control. On a work device, follow IT scheduling and support instructions; do not bypass management or install a downloaded package from an unrelated site to clear the message.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Follow the tablet update to completion',
        alt: 'Official settings show a download, a required restart, and a final completion check after the restart.',
        caption: 'Example update states, not a universal device interface. The final check occurs after the required activation step.',
        items: [
          { label: 'Downloaded', detail: 'The update package is on the device.' },
          { label: 'Restart required', detail: 'Save work; use the official instruction.' },
          { label: 'Restart completed', detail: 'New components can become active.' },
          { label: 'Check settings again', detail: 'Confirm completed status or read the next action.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A personal device', 'Its genuine update settings'],
      steps: [
        'Open update settings directly, not through a web advertisement. Read the current status without starting an installation.',
        'Distinguish available, downloaded, pending restart, and completed states where the device shows them.',
        'If an action is pending, plan a suitable time after saving work and checking vendor requirements. Keep this exercise to inspection if uncertain.',
        'Write the final check you will make after that action, such as reopening the update status screen.',
      ],
      notice: 'Your note describes the current state and any unfinished action rather than saying updated from memory.',
      troubleshooting: 'If updates repeatedly fail, use official support. Do not remove protections or install an unfamiliar updater to force completion.',
    },
    recall: {
      prompt: 'A browser says its update will finish when relaunched, but it has stayed open all week. What should you verify?',
      answer: 'Save needed work, follow its genuine relaunch instruction at a suitable time, and check the browser update status afterward. The downloaded package alone is insufficient.',
      hint: 'Ask which version is active, not only which package arrived.',
    },
    quiz: {
      question: 'After a required restart, which evidence best supports update completion?',
      options: ['The official update panel reports completion', 'The earlier download notification is still in history', 'The home screen looks unchanged'],
      correctIndex: 0,
      explanation: 'The official status checks the update state. Notification history proves an earlier event, while many security fixes leave the appearance unchanged.',
    },
    takeaway: 'Follow an update through its required activation step, then verify its official status.',
    sourceNote: 'NCSC guidance supports keeping software updated. Installation and restart requirements are vendor-specific; no live system changes are needed for the exercise.',
  },
  {
    id: 'life-016',
    title: 'Name the record you will search for later',
    outcome: 'Use subject, meaningful date, and status to distinguish personal files without exposing private identifiers.',
    scene: 'Two rental inventory scans have almost identical names but different signing dates.',
    sections: [
      {
        title: 'Which scan is the signed one?',
        paragraphs: [
          'You need the signed inventory from moving into a flat. Your folder contains scan1, scan2, and final-new. Opening all three works today, but it becomes slower as similar records accumulate. The filenames saved a sequence of scanner actions rather than the meaning of the documents. A useful name should answer the search you expect to make: what is this, which date distinguishes it, and is it the draft or the signed record?',
        ],
      },
      {
        title: 'Give the date one consistent meaning',
        paragraphs: [
          'A year-month-day date sorts in chronological order when the digits use a consistent format. But sorting only helps if you know what the date represents. A document date, signing date, and download date can differ. Choose the meaningful date for this group of records and keep that convention consistent rather than mixing meanings without labels.',
          'For example, 2026-10-14_inventory_signed.pdf identifies a signed inventory dated 14 October. It does not need your full address or identity number. Filenames can appear in previews, recent-file lists, and shared links, so avoid turning them into unnecessary disclosures.',
        ],
      },
      {
        title: 'Test the name without reorganising everything',
        paragraphs: [
          'Compare the signed inventory with a draft from 12 October. A subject-date-status convention lets you distinguish them in the folder listing before opening either one. It does not prove their contents are correct; open the selected record to confirm that it really is signed.',
          'Try a small group of ordinary personal documents first. Preserve their file extensions, which help applications recognise the format. Do not rename files inside an application library or files linked by a project without understanding those dependencies. A modest retrieval improvement is enough; you do not need to rebuild every folder you own.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two names for the same signed scan',
        alt: 'An ambiguous scan2 filename is compared with a date, subject, and signed status filename.',
        caption: 'Fictional filenames for the same document. Inspect which name answers a search without revealing an address or identity number.',
        items: [
          { label: 'scan2.pdf', detail: 'Captures scan order, not the subject or signing status.' },
          { label: 'Descriptive copy', detail: '2026-10-14_inventory_signed.pdf: subject, document date, and status.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Copies of three ordinary personal documents', 'A file browser'],
      steps: [
        'Choose three copied documents outside any application-managed library. Open them to establish their subjects and meaningful dates.',
        'Choose one date meaning and a short subject pattern. Add status only when it distinguishes versions.',
        'Rename the copies, preserving extensions and omitting sensitive identifiers. Do not change the original linked records.',
        'Look away, then find a named record from the folder listing. Open it to confirm that your choice was correct.',
      ],
      notice: 'The names distinguish the records before you open them, and the contents confirm the selection.',
      troubleshooting: 'If dates confuse you, add a short date-role word or revise the convention. Do not use download dates as document dates accidentally.',
    },
    recall: {
      prompt: 'Two receipts describe the same item, one purchase and one refund. What should distinguish their names?',
      answer: 'Use the relevant transaction date and a purchase or refund label with the subject. The different event matters more than calling both files final.',
      hint: 'Name the distinction you would otherwise have to discover by opening both.',
    },
    quiz: {
      question: 'You download an old signed record today. Which date choice is most useful in its established document-date convention?',
      options: ['Today, because that is when the file reached this folder', 'Whichever date puts it first in the listing', 'The document date, with download date separate if needed'],
      correctIndex: 2,
      explanation: 'A consistent date meaning supports retrieval. Replacing it with today mixes two different events and can make an older record appear newer.',
    },
    takeaway: 'Name a file for its subject and distinguishing event, while keeping extensions and privacy intact.',
    sourceNote: 'The naming convention is an original retrieval method. Preservation and backup references provide background, not a mandatory filename standard.',
  },
  {
    id: 'life-017',
    title: 'Check whether deletion travels with your files',
    outcome: 'Distinguish synchronised access from recovery copies that survive a deletion or unwanted edit.',
    scene: 'A knitting-pattern folder appears on a laptop and tablet through one synchronised cloud account.',
    sections: [
      {
        title: 'Two screens show one shared state',
        paragraphs: [
          'Your knitting patterns appear on both a laptop and a tablet. That feels like a backup because either device can open them. Then you delete a folder on the laptop to tidy up, and it disappears from the tablet too. The service did what synchronisation is designed to do: bring both devices into agreement. Counting screens did not tell you whether an earlier copy would remain available after a mistake changed the shared state.',
        ],
      },
      {
        title: 'Access and recovery are different jobs',
        paragraphs: [
          'Synchronisation propagates changes. Depending on the service, those changes include edits, moves, and deletions. Some services also keep previous versions or deleted items for a limited period. Those recovery features matter, but their existence and retention limits need checking rather than assuming that every cloud folder keeps everything forever.',
          'A separate backup aims to preserve recoverable copies when the working set changes or becomes unavailable. Independence is about the failure you need to survive. A removable backup disconnected after use is not continually receiving the same deletion, although it must still be protected and updated intentionally.',
        ],
      },
      {
        title: 'Ask what would remain after the mistake',
        paragraphs: [
          'For the pattern folder, read the service deleted-file and version-history guidance. Find where recovery happens, what it includes, and how long it remains available for your account. A policy for another subscription level may not apply to yours.',
          'Then identify important patterns or notes that need a separate protected backup. Check that the chosen location is not simply another folder inside the same synchronised tree. No live deletion is needed to learn this distinction. A safe later restore test can examine a harmless copy while leaving the working originals intact.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Which connection carries deletion?',
        alt: 'A laptop synchronises through a cloud folder to a tablet, while a separate removable backup is disconnected between backups.',
        caption: 'Logical storage diagram. The upper and right arrows can carry deletions; the separate backup is not a live synchronised replica.',
        items: [
          { label: 'Laptop patterns', detail: 'Working folder is changed here.', x: 20, y: 22, shape: 'screen' },
          { label: 'Synchronised cloud folder', detail: 'Copies the changed state.', x: 80, y: 22, shape: 'box' },
          { label: 'Tablet view', detail: 'Deletion can appear here too.', x: 80, y: 78, shape: 'screen' },
          { label: 'Separate backup', detail: 'Protected; disconnected after backup use.', x: 20, y: 78, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Sync changes' }, { from: 1, to: 2, label: 'Sync changes' }, { from: 0, to: 3, label: 'Deliberate backup' }],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Your personal storage-service help', 'A private note'],
      steps: [
        'Choose one personal folder and identify whether it is synchronised, backed up, or both according to the service.',
        'Read the deleted-file and version-history rules for your account. Record the actual retention limit and any exclusions.',
        'Draw the devices or folders that receive the same changes. Do not delete a real file to test the arrows.',
        'Identify a protected independent recovery location for important records, or note that one is still missing.',
      ],
      notice: 'You can say which copy might remain after deletion rather than merely counting devices.',
      troubleshooting: 'If two named folders share one synchronisation root, do not count them as independent just because their names differ.',
    },
    recall: {
      prompt: 'A bad edit appears on your phone and laptop. What recovery question matters more than which device made it?',
      answer: 'Ask whether an earlier version remains available in service history or a separate backup, and whether its retention window still includes the desired version.',
      hint: 'You need an earlier state, not another view of the current one.',
    },
    quiz: {
      question: 'Two devices show the same missing folder. Which evidence would support a recovery plan?',
      options: ['Documented retained versions or a separate backup containing it', 'A third device that receives the same deletions', 'A different icon for the same synchronised folder'],
      correctIndex: 0,
      explanation: 'Recovery depends on a surviving copy. Another view of the same state does not establish that the deleted material remains available.',
    },
    takeaway: 'Synchronisation copies changes; recovery requires knowing which earlier copies survive them.',
    sourceNote: 'NCSC backup guidance supplies the safety basis. Cloud retention and recovery capabilities depend on the service and account plan.',
  },
  {
    id: 'life-018',
    title: 'Open a restored copy before trusting the backup',
    outcome: 'Perform a small recovery check without overwriting or deleting a working original.',
    scene: 'A backed-up reading list should contain a recently added final book title.',
    sections: [
      {
        title: 'The green tick leaves questions unanswered',
        paragraphs: [
          'Your backup reports success, but does it contain the change made yesterday to your reading list? Success may mean the configured folders were copied, not every folder you assumed was included. It also does not show whether you can retrieve and open the result. A restore check tests whether a saved file returns in a usable form.',
        ],
      },
      {
        title: 'Choose content you can recognise',
        paragraphs: [
          'Pick a harmless file with a known recent change. In this fictional reading list, the final entry is River atlas. An older backup lacks that line. Comparing visible content therefore tells you more than checking that a file with the expected name exists.',
          'Restore into a separate test location, using the backup service\'s supported procedure. Do not delete the original to make the test feel realistic, and do not overwrite the whole working folder. The point is to examine recovery while preserving the information you already have. A password or compatible application may also be needed to open the recovered file.',
        ],
      },
      {
        title: 'Record exactly what the test established',
        paragraphs: [
          'Open the restored reading list and look for River atlas. Check the version or backup date in the service and compare other meaningful content. A newly created file timestamp can reflect the restore event, so it is not always evidence of the original edit date.',
          'If the line is missing, investigate backup selection and timing rather than repeatedly restoring over the original. If it is present, record the file, recovery route, and check date. One successful sample demonstrates that route for that sample. It does not prove every photograph, archive, or encrypted document in the backup can be recovered.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Restore beside the original, not over it',
        alt: 'Backup storage sends a reading-list copy to a test folder, while the original remains in a separate working folder.',
        caption: 'Logical storage layout. Restore into the test folder, keeping the working original intact for comparison.',
        items: [
          { label: 'Backup storage', detail: 'Select the expected saved version.', x: 20, y: 22, shape: 'box' },
          { label: 'Restore-test folder', detail: 'Open the recovered reading list here.', x: 80, y: 22, shape: 'box' },
          { label: 'Working original', detail: 'Leave intact for comparison.', x: 50, y: 78, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Restore a copy' }],
      },
    ],
    practice: {
      minutes: 12,
      needs: ['An existing personal backup', 'One harmless backed-up document', 'A separate test folder'],
      steps: [
        'Choose a non-sensitive file and note one known content detail or recent change in the working original.',
        'Use the backup instructions to restore a copy into a separate test folder. Cancel if the procedure would overwrite live files.',
        'Open the restored copy and compare the known detail. Check the selected backup version, not just the new file timestamp.',
        'Record the result and any missing requirement. If no backup exists, record that gap and plan one rather than claiming a restore test.',
      ],
      notice: 'You have direct evidence that the selected file and version can be retrieved and opened.',
      troubleshooting: 'If the file is older or unreadable, preserve both copies and investigate selection, timing, format, or credentials through official help.',
    },
    recall: {
      prompt: 'A restored spreadsheet opens, but its newest sheet is absent. What did the test succeed at and fail to establish?',
      answer: 'It demonstrated retrieval and readability for that copy, but not recovery of the newest content. Check version timing and what the backup included.',
      hint: 'Opening a file and restoring the intended version are separate checks.',
    },
    quiz: {
      question: 'A restore dialog offers overwrite original or choose another folder. Which fits this exercise?',
      options: ['Overwrite so the application uses the restored version immediately', 'Choose a separate folder and inspect the copy', 'Delete the original first to avoid duplicate names'],
      correctIndex: 1,
      explanation: 'A separate destination preserves the original while testing recovery. Deletion or overwrite adds risk without improving the evidence from a small sample.',
    },
    takeaway: 'Restore separately, open the copy, and verify the version through recognisable content.',
    sourceNote: 'This sample check builds on NCSC backup guidance. It is not a full disaster-recovery test or proof that every backed-up file is usable.',
  },
  {
    id: 'life-019',
    title: 'Check what survives outside the original app',
    outcome: 'Test an export for readable text, structure, and attachments while retaining the original.',
    scene: 'A plant journal contains a dated table and an attached photograph of a nursery label.',
    sections: [
      {
        title: 'The export button is a beginning',
        paragraphs: [
          'Your plant journal lives in a phone app. One entry contains observations in a table and an attached photograph of the nursery label. You export the entry before changing devices. The exported file appears in your folder, so you assume the journal is portable. But a file existing outside the app does not show whether the table still makes sense or whether the photograph travelled with it. You need to inspect the material you wanted to keep.',
        ],
      },
      {
        title: 'Formats preserve different features',
        paragraphs: [
          'An app may store text, attachments, relationships, and editing information in its own structure. An export translates some of that structure into another format. A plain-text export can preserve words while losing the layout that connected table values with dates. A PDF can preserve a page appearance without preserving every attachment or editable field.',
          'No format is automatically complete for every job. The useful question is what needs to remain usable. For the plant entry, you want to read each observation with its date and see the label image. Keeping the original preserves a route to information omitted by the export.',
        ],
      },
      {
        title: 'Open it somewhere independent',
        paragraphs: [
          'Open the exported entry in a different compatible reader. Check a table row and the attached image, not only the first sentence. In this example, the PDF shows the table but omits the attachment. The export is partially useful, not a complete replacement for the source note.',
          'Find whether the app can include attachments or export them separately, and keep related files together. Record the limitation instead of deleting the original after a superficial check. For employer information, use only approved export and storage processes; personal convenience does not authorise copying work records elsewhere.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What the plant-journal export kept',
        alt: 'The source journal has a dated table and label photograph, while the example PDF contains only the dated table.',
        caption: 'Fictional export result, not a claim about every PDF exporter. Check the missing photograph as well as the readable table.',
        items: [
          { label: 'Original journal entry', detail: 'Dated table plus attached nursery-label photograph.' },
          { label: 'PDF in another reader', detail: 'Table present; attachment absent in this example.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['A non-sensitive personal note', 'Its export option', 'Another compatible reader'],
      steps: [
        'Choose one note and list two details worth preserving, such as a date-column relationship and an attachment.',
        'Export a copy using the app instructions. Keep the original and avoid uploading it to an unfamiliar conversion service.',
        'Open the exported copy in a different compatible reader and check both details against the original.',
        'Record any missing content. Use documented attachment-export options if needed, keeping the related copies together.',
      ],
      notice: 'You can name what survived and what still depends on the original app.',
      troubleshooting: 'If the file only reopens in the source app, check whether you exported a portable document or an app-specific archive.',
    },
    recall: {
      prompt: 'A budgeting export keeps transaction text but loses formulas. Is it useless, or a complete replacement?',
      answer: 'Neither conclusion follows. It may preserve readable records while losing calculation behaviour. Keep the original and choose another supported export if formulas matter.',
      hint: 'Judge the export against the future job, not the existence of a download.',
    },
    quiz: {
      question: 'A note export opens correctly but one attachment is missing. What should you do before removing the app?',
      options: ['Assume the attachment will appear when the file is reopened', 'Delete the original because the text is readable', 'Preserve the original and obtain a supported copy of the attachment'],
      correctIndex: 2,
      explanation: 'Readability of the text does not establish completeness. Preserve the source while resolving the specific missing feature.',
    },
    takeaway: 'An export is useful when the information you need remains readable and complete enough outside its original app.',
    sourceNote: 'National Archives preservation guidance informs portability concerns. The plant-journal example is original; no format is promised to remain usable forever.',
  },
  {
    id: 'life-020',
    title: 'Plan the device handover before erasing anything',
    outcome: 'Locate a device-specific handover procedure that protects retained data and removes personal access appropriately.',
    scene: 'An old personal laptop is being prepared for donation.',
    sections: [
      {
        title: 'An empty desktop is not an empty device',
        paragraphs: [
          'You are donating an old laptop and delete the visible photographs. The desktop looks empty, but that does not establish that recoverable files, browser sessions, saved credentials, or account links are gone. A handover needs a supported process for the whole device. Before any irreversible step, decide which information must survive and verify that you can access a separate copy.',
        ],
      },
      {
        title: 'Retention and removal are separate checks',
        paragraphs: [
          'First, identify the files and records that must survive. A verified backup means more than seeing a copied folder name: open a sample and check important content. Only then consider erasure. Otherwise a successful reset can destroy the only usable copy of something you intended to retain.',
          'Ordinary deletion often removes references to files without providing a complete secure-erasure process. Modern storage, encryption, and account protections differ, so the appropriate erase or reset procedure depends on the device. Some devices also need account unlinking or activation-lock steps in a particular order. Follow the manufacturer sequence rather than combining unrelated tutorials.',
        ],
      },
      {
        title: 'Prepare a plan, not an improvised wipe',
        paragraphs: [
          'For the old laptop, find the manufacturer\'s instructions for giving it away and read them from beginning to end. Note backup, account, supported erase, and final handover checks. Keep another device available for the instructions if the laptop will restart during the eventual procedure.',
          'This lesson stops at planning. Do not reset a device just for practice. If it cannot run the supported process, ask a reputable service about secure handling rather than damaging storage at home. Employer-owned equipment belongs in the employer return process, and a clean setup screen alone is not a forensic guarantee about every storage condition.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Handover planning gates',
        alt: 'The plan verifies retained data, reads model-specific account and erase instructions, and identifies the final handover check.',
        caption: 'Planning sequence only. The manufacturer determines the exact account-removal and erasure order for the real device.',
        items: [
          { label: 'Keep what you need', detail: 'Verify a backup by opening sample content.' },
          { label: 'Identify the exact device', detail: 'Read official sell-or-give-away instructions.' },
          { label: 'Follow supported steps', detail: 'Account links and erasure in the required order.' },
          { label: 'Check handover state', detail: 'Follow the manufacturer\'s final check.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['The model of an old personal device', 'Official handover instructions', 'A private planning note'],
      steps: [
        'Confirm that the device is personally owned and identify its model from safe, accessible records.',
        'List the data you would need to retain and where a verified backup would be accessible.',
        'Read the official handover procedure and note account, erase, and verification steps without performing them.',
        'Record any missing access or unsupported-device question for the manufacturer or a reputable service.',
      ],
      notice: 'The plan protects needed data before any irreversible action and uses one device-specific procedure.',
      troubleshooting: 'If instructions do not match the model or storage setup, stop. Do not substitute an erase command or physically damage the device.',
    },
    recall: {
      prompt: 'A personal phone will not start, so you cannot use its supported reset. What should happen before donation?',
      answer: 'Keep control of the phone while obtaining device-specific secure-handling advice from the manufacturer or a reputable service. Inability to start is not proof its data is gone.',
      hint: 'A failed screen or power-up does not establish erased storage.',
    },
    quiz: {
      question: 'The photographs are backed up, but old accounts are still signed in. Is the laptop ready to give away?',
      options: ['Not yet; follow the supported account and erasure procedure', 'Yes, because retained photographs were the only concern', 'Yes, after deleting the desktop shortcuts'],
      correctIndex: 0,
      explanation: 'A backup addresses retention, not removal of access or stored data. Desktop shortcuts do not represent every account session or file on the device.',
    },
    takeaway: 'Verify what must survive, then follow the exact device handover procedure without improvising erasure.',
    sourceNote: 'FTC disposal and NCSC backup guidance supply the basis. The exercise is read-only planning, not a secure-erasure certification.',
  },
  {
    id: 'life-021',
    title: 'Find the wear part behind the durability claim',
    outcome: 'Check whether a small worn component can be identified and replaced before judging an item maintainable.',
    scene: 'A lunchbox lid still closes, but its removable sealing ring is split.',
    sections: [
      {
        title: 'The box outlasted its seal',
        paragraphs: [
          'Your lunchbox body is intact, but the flexible ring inside the lid has split. Buying a whole new box would replace several sound parts to solve one small failure. A reusable label does not tell you whether the manufacturer sells that ring separately.',
          'Before buying a replacement box, investigate its likely wear parts. The useful evidence is not a promise that the object lasts forever. It is an identified component, an authorised replacement method, and a practical route to obtaining the right part.',
        ],
      },
      {
        title: 'Why a similar ring can fail to fit',
        paragraphs: [
          'A sealing ring fills the gap between mating surfaces when the lid closes. Its profile and dimensions matter to the contact it makes. A ring with the same general shape can be too loose, too thick, or intended for a different lid groove. Stretching or cutting a near-match does not establish an equivalent seal. For food-contact items, the maker also needs to specify suitable materials and use conditions. A generic rubber ring is not automatically an appropriate replacement just because it can be pushed into the groove.',
        ],
      },
      {
        title: 'Check the model and the replacement route',
        paragraphs: [
          'Suppose a fictional range has Compact and Wide lunchboxes with similar lids. The spare page explicitly lists the Compact model, while yours is Wide. That is a mismatch until the manufacturer confirms compatibility, even if the photograph looks convincing.',
          'For the correct part, check current availability, delivered price, and user replacement instructions. A cheap ring with unavailable shipping is not an accessible repair route. Stock today also does not promise stock years from now. Record what is confirmed and what is unknown, and do not use a damaged food container beyond its manufacturer\'s instructions.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The small part that seals the lid',
        alt: 'A separated lid, sealing ring, and lunchbox rim show where the correctly specified ring makes contact.',
        caption: 'Exploded schematic, not fitting instructions. Match the ring to the exact lid groove and model, not its photograph.',
        items: [
          { label: 'Lid groove', detail: 'Its profile determines the required ring.', x: 50, y: 15, shape: 'box' },
          { label: 'Specified sealing ring', detail: 'Replace only through the documented method.', x: 50, y: 50, shape: 'circle' },
          { label: 'Lunchbox rim', detail: 'The closed lid brings the seal into contact.', x: 50, y: 85, shape: 'box' },
        ],
        arrows: [{ from: 1, to: 0, label: 'Matching groove' }, { from: 1, to: 2, label: 'Sealing contact' }],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['A product you own or are considering', 'Its exact model', 'Manufacturer parts information'],
      steps: [
        'Choose one ordinary wear part, such as a lunchbox seal or bag buckle. Identify the exact product model.',
        'Find the manufacturer\'s part name or number and the listed compatible models. Mark a missing match as unknown.',
        'Check replacement instructions, current availability, and delivered cost without ordering anything.',
        'Write a short verdict: confirmed route, incompatible part, or unanswered question. Do not improvise a substitute.',
      ],
      notice: 'You can point to a specific replacement route rather than a general durability slogan.',
      troubleshooting: 'If only a product-family name appears, ask for exact compatibility before buying or dismantling the item.',
    },
    recall: {
      prompt: 'A vacuum has a washable filter but no listed replacement when it tears. What does washable establish?',
      answer: 'It describes permitted routine care, not indefinite life or replacement availability. Find the correct spare and instructions before treating it as maintainable after damage.',
      hint: 'Cleaning a component and replacing a failed component are different capabilities.',
    },
    quiz: {
      question: 'A spare seal looks right but lists another size in the same range. What is the useful next step?',
      options: ['Assume the shared range name means the lids are identical', 'Confirm compatibility with the exact model before ordering', 'Order it and trim away any excess material'],
      correctIndex: 1,
      explanation: 'The model list is a concrete compatibility check. A family name or improvised trimming cannot establish the correct fit or food-contact suitability.',
    },
    takeaway: 'Durability claims become useful when the wear part, fit, availability, and replacement method are identifiable.',
    sourceNote: 'The lunchbox range is fictional. Shopping and warranty references inform the checklist, not a promised product lifespan.',
  },
  {
    id: 'life-022',
    title: 'Read the warranty against one actual failure',
    outcome: 'Compare warranty duration with covered failures, remedy, customer costs, and the claim process.',
    scene: 'Two rain jackets advertise two-year warranties but treat a failed zip differently.',
    sections: [
      {
        title: 'The same headline can cover different things',
        paragraphs: [
          'Two rain jackets both advertise a two-year warranty. You are concerned about the zip because it gets used on every commute. The headline duration looks equal, but it does not tell you whether a zip failure is covered or what you would pay to obtain a remedy. To compare the promises, choose a specific event: the zip stops engaging after ordinary use, and the seller has not yet determined the cause. Do not substitute the word broken for every possible warranty condition.',
        ],
      },
      {
        title: 'Separate the promise into questions',
        paragraphs: [
          'Duration asks whether the event falls within the stated period. Scope asks which failures qualify. Remedy asks what the provider promises to do, such as repair or replacement. Costs and process ask what you must supply or pay to request that remedy.',
          'A defect, ordinary wear, and accidental damage can receive different treatment under the same warranty. A repair promise also does not automatically mean every shipping charge is covered. Read the written terms and any relevant exclusions together rather than relying on a salesperson\'s summary.',
        ],
      },
      {
        title: 'Work through the zip example',
        paragraphs: [
          'In a fictional comparison, Warranty A covers manufacturing defects in the zip but asks the owner to pay return shipping. Warranty B lists the zip as an excluded wear part. Both last two years, yet the same reported symptom leads to different questions. Under A, the cause still needs assessment; under B, the written exclusion matters.',
          'Save the terms with the receipt and ask unclear questions in writing before purchase. This compares the offered warranties, not every right you might have. Local statutory protections can differ from the written promise and from the U.S. rules described by the FTC reference.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two years does not mean the same zip cover',
        alt: 'Warranty A covers qualifying zip defects with customer return shipping, while Warranty B excludes the zip despite the same duration.',
        caption: 'Invented warranty terms for comparison. Inspect scope and costs, not only the matching duration.',
        items: [
          { label: 'Warranty A: two years', detail: 'Zip manufacturing defects covered; owner pays return shipping.' },
          { label: 'Warranty B: two years', detail: 'Zip listed as an excluded wear part.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['One written warranty', 'Its purchase record or a public example', 'A note'],
      steps: [
        'Choose one plausible failure and find whether the relevant component or cause is included or excluded.',
        'Record the coverage period, promised remedy, shipping or labour costs, and required proof of purchase.',
        'Draft one precise question about a missing term. Keep the answer and warranty version with the purchase record.',
      ],
      notice: 'You can explain what the duration does and does not tell you about the chosen failure.',
      troubleshooting: 'If only a promotional summary is available, request full terms. Do not fill omissions with assumptions about free replacement.',
    },
    recall: {
      prompt: 'A chair warranty covers the frame for five years but gives different terms for upholstery. How would you assess a torn seat cover?',
      answer: 'Read the upholstery scope and cause exclusions, not only the frame duration. Then check the remedy and costs for that particular claim.',
      hint: 'The part that failed may not share the headline coverage.',
    },
    quiz: {
      question: 'A covered repair requires customer-paid return shipping. Which statement is accurate?',
      options: ['The duration guarantees that every related cost is paid', 'Customer shipping means no repair can be covered', 'Coverage and customer outlay must be checked separately'],
      correctIndex: 2,
      explanation: 'A qualifying repair can still involve a stated customer cost. Neither the duration nor the existence of shipping charges answers the entire coverage question.',
    },
    takeaway: 'Read the failed part, qualifying cause, remedy, costs, and process alongside the warranty duration.',
    sourceNote: 'FTC warranty guidance concerns U.S. rules. The jacket terms are fictional and do not establish local statutory rights or decide a real claim.',
  },
  {
    id: 'life-023',
    title: 'Measure the space an object uses when it opens',
    outcome: 'Check delivery access, closed dimensions, and operating clearance before choosing household furniture.',
    scene: 'A narrow hallway shoe cabinet fits when closed but projects farther when its bin tilts open.',
    sections: [
      {
        title: 'The outline on the wall is incomplete',
        paragraphs: [
          'A shoe cabinet fits the wall, but its storage bin tilts toward you when opened. The closed footprint is only one state of the object. You need room to operate it and pass safely, and the packaged or assembled item must reach that position through the delivery route. Check those dimensions before choosing from a photograph.',
        ],
      },
      {
        title: 'Calculate the open footprint',
        paragraphs: [
          'In a hypothetical hallway 120 cm wide, a cabinet projects 25 cm from one wall when closed. That leaves 95 cm across the remaining width. Its open bin projects another 30 cm, so the open cabinet uses 55 cm and leaves 65 cm.',
          'The subtraction shows a change of state: 120 minus 25 minus 30 equals 65. It does not establish that 65 cm is safe, accessible, or legally adequate. People, doors, mobility needs, and required exit routes can demand more space. Treat the calculation as a reason to check the real setting, not a universal clearance recommendation.',
        ],
      },
      {
        title: 'Check use and arrival separately',
        paragraphs: [
          'Draw the cabinet closed and open on paper beside the hallway measurements. Include nearby doors and the place someone would stand to use it. If a door swing or walking route overlaps the open bin, a narrower closed cabinet may still fail the practical fit test.',
          'Then check the delivery dimensions, doorway route, and manufacturer assembly or anchoring requirements. Do not move heavy furniture or block an exit to rehearse the purchase. A paper plan and safely accessible measurements can expose the conflict before you spend money or arrange a return.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Closed and open projections occupy the hall',
        alt: 'A top-view hallway shows the wall-side cabinet, the additional open-bin projection, the remaining passage, and an entry door.',
        caption: 'Schematic, not to scale. Hypothetical width: 120 cm; cabinet 25 cm plus open bin 30 cm leaves 65 cm, not a safety standard.',
        items: [
          { label: 'Cabinet against wall', detail: 'Closed projection: 25 cm.', x: 18, y: 22, shape: 'box' },
          { label: 'Open bin', detail: 'Adds 30 cm into the hall.', x: 50, y: 22, shape: 'box' },
          { label: 'Remaining passage', detail: '65 cm in this example; assess real needs.', x: 82, y: 55, shape: 'person' },
          { label: 'Entry door', detail: 'Its swing and the delivery route also matter.', x: 20, y: 80, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Bin opens outward' }, { from: 3, to: 2, label: 'Keep route usable' }],
      },
    ],
    practice: {
      minutes: 12,
      needs: ['Paper', 'A tape measure if available', 'One product dimension drawing'],
      steps: [
        'Choose a possible household purchase and draw its intended space. Measure only safely accessible distances.',
        'Add closed dimensions and any documented door, drawer, or operating projection. Mark unpublished measurements as unknown.',
        'Draw nearby doors and your walking or working route. Compare the open state with the available space.',
        'Check delivery access and manufacturer securing requirements. Record conflicts without moving heavy objects or blocking exits.',
      ],
      notice: 'The plan distinguishes fitting while stored from being usable and reachable in the room.',
      troubleshooting: 'If only closed dimensions are published, ask for operating and delivery dimensions before treating the purchase as a confirmed fit.',
    },
    recall: {
      prompt: 'A washing machine fits a recess exactly, but the manual specifies connection space behind it. What is missing from the fit check?',
      answer: 'The usable installation envelope includes documented connection and service clearance, not only the cabinet dimensions. Check the model instructions and installer requirements.',
      hint: 'The object body is not the whole space needed to use it.',
    },
    quiz: {
      question: 'A cabinet fits the wall but its open drawer crosses an exit route. Which response follows the fit method?',
      options: ['Reconsider the layout or product before purchase', 'Judge only the closed dimensions because drawers close again', 'Assume a shorter opening time resolves the clearance'],
      correctIndex: 0,
      explanation: 'Operating clearance is part of fit. A temporary obstruction still exists while the drawer is open; closed dimensions do not resolve it.',
    },
    takeaway: 'Measure the delivery route and the space an object needs while operating, not just its closed body.',
    sourceNote: 'The dimensions are hypothetical. This purchasing exercise does not replace building, accessibility, installation, or furniture-securing requirements.',
  },
  {
    id: 'life-024',
    title: 'Turn watts and hours into a usable estimate',
    outcome: 'Calculate hypothetical energy and running cost while keeping maximum ratings separate from typical consumption.',
    scene: 'Two monitors are compared for five hours of daily use with explicitly assumed constant power draws.',
    sections: [
      {
        title: 'A watt is a rate, not the whole bill',
        paragraphs: [
          'You compare two monitors and notice different power figures. A lower number looks cheaper to run, but it cannot tell you the cost without a use time and an electricity price. Power describes how quickly energy is being used. Energy is the amount accumulated over time, which is why electricity bills commonly count kilowatt-hours rather than watts alone. Before calculating, check whether the published figure describes typical use, a particular test mode, standby, or a maximum rating.',
        ],
      },
      {
        title: 'Work the units through the example',
        paragraphs: [
          'Assume Monitor A draws a constant 100 watts for five hours. Multiplying gives 500 watt-hours. There are 1,000 watt-hours in one kilowatt-hour, so the energy is 0.5 kWh. At a hypothetical price of 0.20 currency units per kWh, the energy charge is 0.5 multiplied by 0.20, or 0.10 units.',
          'Monitor B is assumed to draw a constant 60 watts for the same five hours. It uses 300 watt-hours, or 0.3 kWh, costing 0.06 units at that tariff. The example difference is 0.04 units for the five-hour session, not 40 units or 40 kWh.',
        ],
      },
      {
        title: 'Keep the assumptions attached',
        paragraphs: [
          'Real power use can change with brightness, activity, sleep settings, and the particular device. Multiplying a maximum label rating by every hour of ownership can overstate ordinary consumption. Use comparable measured or documented operating figures and your applicable tariff for a local estimate.',
          'The calculation here excludes fixed charges and assumes no variation in power or price. It also says nothing about whether replacing a working monitor repays its purchase cost. Keep purchase price, useful life, and uncertain usage separate rather than turning a small illustrative energy saving into a replacement recommendation.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Energy over the same five hours',
        alt: 'Monitor A uses 0.5 kilowatt-hours and Monitor B uses 0.3 under the stated constant-power assumptions.',
        caption: 'Hypothetical constant draws, not measurements. At 0.20 units per kWh, the bars correspond to costs of 0.10 and 0.06 units.',
        unit: 'kWh over five hours',
        items: [
          { label: 'A: 100 watts', detail: '100 x 5 / 1,000 = 0.5 kWh.', value: 0.5 },
          { label: 'B: 60 watts', detail: '60 x 5 / 1,000 = 0.3 kWh.', value: 0.3 },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['A calculator', 'Paper or a note', 'The hypothetical monitor figures'],
      steps: [
        'Write power, hours, and tariff in separate fields, keeping the stated units beside each value.',
        'Multiply watts by hours, then divide by 1,000 to obtain kWh. Reproduce both monitor values.',
        'Multiply each energy value by 0.20 and subtract the two costs. Label the result as a hypothetical five-hour difference.',
        'List one real-use assumption you would need to check before applying the calculation to an actual purchase.',
      ],
      notice: 'Your working shows 0.5 and 0.3 kWh, with a 0.04-unit cost difference.',
      troubleshooting: 'If the number seems huge, check the conversion from watts to kilowatts and whether you multiplied by hours twice.',
    },
    recall: {
      prompt: 'An appliance label gives its maximum input power, but it cycles off during use. What makes a bill estimate uncertain?',
      answer: 'The maximum is not necessarily the average operating draw. You need documented or measured energy for comparable use, plus time and tariff assumptions.',
      hint: 'A rating and a continuous measurement are different inputs.',
    },
    quiz: {
      question: 'At the stated tariff, what is the difference between the two hypothetical five-hour sessions?',
      options: ['0.20 units, the difference in kWh', '0.04 units, the energy difference multiplied by the tariff', '40 units, the difference in watts'],
      correctIndex: 1,
      explanation: 'The energy difference is 0.2 kWh. Multiplying by 0.20 units per kWh gives 0.04 units; watts alone are not a cost.',
    },
    takeaway: 'Energy equals power times time; cost also needs the tariff and honest operating assumptions.',
    sourceNote: 'EIA and Department of Energy references explain power and energy use. Every monitor value and price here is hypothetical.',
  },
  {
    id: 'life-025',
    title: 'Read reviews for a part, not just a star',
    outcome: 'Separate delivery complaints from product failures and turn detailed reviews into questions without inventing failure rates.',
    scene: 'A suitcase has mixed reviews about delivery, first impressions, and wheels used on rough pavements.',
    sections: [
      {
        title: 'Several complaints can describe different problems',
        paragraphs: [
          'You are comparing a suitcase for train trips. One reviewer gives a low score because the parcel arrived late. Another says a wheel jammed after months on rough pavements. A third praises its smooth wheels after one indoor trial. Averaging their ratings hides the different questions they answer.',
          'Delivery performance matters to a purchase, but it is not the same claim as wheel durability. Start with the part and workload you care about rather than treating every star as equal evidence about construction.',
        ],
      },
      {
        title: 'Useful reports include conditions',
        paragraphs: [
          'Useful durability reports name the exact model, time in use, conditions, and failed part. Wheels rolled on rough pavement face a different workload from wheels tried indoors once. Details improve interpretation but do not guarantee accuracy or authenticity. Repeated complaints also lack a reliable denominator: you usually do not know how many owners used the same model similarly without failure. Review counts therefore cannot automatically become a percentage of all products sold.',
        ],
      },
      {
        title: 'Turn a pattern into a checkable question',
        paragraphs: [
          'In this fictional set, two reports describe wheel trouble after outdoor use. Keep them separate from the late-delivery complaint and the first-day praise. Look for the same model and comparable use in another source, then ask whether the wheels are replaceable and which conditions the warranty covers.',
          'Positive long-term reports deserve the same scrutiny as negative ones. You are building a list of possible failure questions, not declaring a proven defect rate. A detailed seller answer about replacement wheels can be more actionable than another page of unexplained stars.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What each suitcase review actually reports',
        alt: 'Four fictional reviews distinguish delayed delivery, a jammed wheel, a cracked wheel mount, and first-day smooth rolling.',
        caption: 'Fictional reviews. Two describe outdoor wheel failures; none establishes a population failure rate.',
        items: [
          { label: 'Late parcel', detail: 'Delivery issue; no claim about the wheels.' },
          { label: 'Wheel jam after months', detail: 'Outdoor pavement use; exact model stated.' },
          { label: 'Cracked wheel mount', detail: 'Outdoor use; ask about load and conditions.' },
          { label: 'Smooth on day one', detail: 'Indoor first impression, not long-term wear.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Three reviews of one exact model or the example summaries', 'A note'],
      steps: [
        'Choose a part relevant to your use, such as wheels, a hinge, or a zip. Keep the model fixed.',
        'Classify each review as delivery, first impression, fit, or an actual described failure. Record missing usage details.',
        'Compare time in use and workload for the failure reports rather than counting stars alone.',
        'Draft one question for the seller or manufacturer and seek another source. Do not calculate a failure percentage from the review sample.',
      ],
      notice: 'Your conclusion names a possible failure mode and an unanswered question, not a made-up defect rate.',
      troubleshooting: 'If reviews mix different models, separate them first. Similar product photos do not prove identical parts.',
    },
    recall: {
      prompt: 'Headphone reviews praise comfort but rarely mention hinge life. What can you conclude about hinge durability?',
      answer: 'Little from those reports alone. Look for model-specific long-term hinge observations and replacement information rather than treating comfort praise as durability evidence.',
      hint: 'Evidence about one feature does not automatically transfer to another.',
    },
    quiz: {
      question: 'Several reviews mention a broken wheel, but total sales and comparable usage are unknown. What follows?',
      options: ['The share of reviews equals the share of all units that fail', 'Repeated reports can be ignored unless a rate is published', 'Wheel failure is worth investigating, but its rate is not established'],
      correctIndex: 2,
      explanation: 'A pattern can generate a useful question without giving a population estimate. Neither converting reviews into a rate nor dismissing them entirely is justified.',
    },
    takeaway: 'Use model, duration, workload, and failed-part details to ask better questions about durability.',
    sourceNote: 'FTC shopping guidance informs review caution. All review summaries are invented examples, not verified customer reports or measured defect data.',
  },
  {
    id: 'life-026',
    title: 'Match the repair information to the exact model',
    outcome: 'Check model and revision compatibility before treating a manual, part listing, or tutorial as applicable.',
    scene: 'Two similar sewing machines use the fictional model names S6 and S6R.',
    sections: [
      {
        title: 'The photograph looks right',
        paragraphs: [
          'You search for instructions for a sewing machine and find a tutorial showing the same colour and control layout. It looks close enough. Then you notice that your receipt says S6R while the tutorial says S6. That final letter may distinguish a revision with different parts or access instructions.',
          'These model names are fictional, but the checking problem is ordinary. A product-family name can cover several versions. Visual resemblance is useful for finding candidates, not for confirming that a procedure belongs to your item.',
        ],
      },
      {
        title: 'Identity connects the item to its instructions',
        paragraphs: [
          'A model identifies a product design; a revision can distinguish changes within that design. A serial number identifies an individual unit and is usually unnecessary in a public search or lesson note. Find model information from an accessible exterior label, receipt, or existing registration record. Do not tilt heavy equipment or open a casing to look for it. Once you have the identity, compare it with the manual cover and compatibility table. A matching brand alone cannot establish the internal layout, fasteners, or supported user-care procedure.',
        ],
      },
      {
        title: 'Keep a near-match as an unanswered question',
        paragraphs: [
          'For the example machine, a manual listing only S6 is not yet confirmed for S6R. If the manufacturer documentation explicitly includes both, the match is supported. If it does not, ask the manufacturer or a repair provider using the model and safe exterior photographs.',
          'Record the confirmed manual reference for future use. This identity check comes before deciding whether the proposed work is safe for a user at all. Correct model information does not turn professional-service instructions into a beginner task, and a popular tutorial does not override the maker\'s warnings.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'One letter leaves a compatibility question',
        alt: 'A fictional machine label reads S6R while a candidate manual lists only S6.',
        caption: 'Invented model labels. Inspect the full identifier rather than relying on the shared brand or appearance.',
        items: [
          { label: 'Your machine: S6R', detail: 'Read from an accessible label or purchase record.' },
          { label: 'Candidate manual: S6', detail: 'Not confirmed unless its compatibility notes include S6R.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['One household item or its receipt', 'Manufacturer documentation', 'A private note'],
      steps: [
        'Find the full model and any stated revision without moving heavy equipment or opening a cover.',
        'Locate the manufacturer manual and compare its supported models with that identity.',
        'Write confirmed match or unresolved mismatch, with a link or document title for later retrieval.',
        'If unresolved, draft a question using the model and safe exterior description. Keep serial numbers private unless official support needs them.',
      ],
      notice: 'The selected instructions are tied to the exact item, or clearly marked as not yet confirmed.',
      troubleshooting: 'If the label is inaccessible, use paperwork or support. Do not make identification itself an unsafe maintenance task.',
    },
    recall: {
      prompt: 'A replacement shelf lists your refrigerator family but not your exact model. What would confirm the part?',
      answer: 'A manufacturer compatibility listing or support confirmation for the full model. The family name and similar shelf photograph are not enough.',
      hint: 'Shared appearance can hide different dimensions or mounting points.',
    },
    quiz: {
      question: 'A tutorial matches the brand and controls but names a different revision. What should happen before following it?',
      options: ['Use it because the exterior controls match', 'Confirm the revision is covered and the task is permitted user care', 'Use only its opening steps because later differences are unlikely'],
      correctIndex: 1,
      explanation: 'Both compatibility and user-service scope matter. Even the first access step can differ across revisions, so partial use is not automatically safe.',
    },
    takeaway: 'Confirm the full model and revision before trusting a manual, part, or procedure.',
    sourceNote: 'The model-matching method is an original checklist informed by shopping and warranty references. S6 and S6R are fictional identifiers.',
  },
  {
    id: 'life-027',
    title: 'Send the symptom, not a guessed failed part',
    outcome: 'Write a repair report that separates observed behaviour, conditions, displayed information, and untested explanations.',
    scene: 'A home printer feeds an unmarked sheet when a music score is sent from a laptop.',
    sections: [
      {
        title: 'It fed paper, but did not print the score',
        paragraphs: [
          'You send a music score to the home printer. A sheet comes out unmarked, with no error on the display. You report a broken print head, jumping from an outcome to a part diagnosis. The technician still needs the observations behind that conclusion: the file, normal action, paper movement, and visible result. Preserve those details before choosing a cause.',
        ],
      },
      {
        title: 'The same symptom can have different causes',
        paragraphs: [
          'Feeding a sheet and marking it are different parts of the printing process. An unmarked sheet could involve the document, settings, supplies, or a fault. The visible result alone does not choose among them. Naming a part too early can direct attention away from other explanations.',
          'A useful report includes when the issue began, what ordinary action preceded it, and any exact message. It also distinguishes a check you actually performed from one you merely considered. No error displayed is an observation; the electronics are fine is a conclusion that observation cannot establish.',
        ],
      },
      {
        title: 'Describe one ordinary occurrence',
        paragraphs: [
          'A fictional report reads: sent the saved music-score PDF from my laptop; paper fed from the normal tray; sheet unmarked; no display error noticed; this same file printed last week. That gives the provider several useful distinctions without claiming that a print head or control board has failed.',
          'Add only safe checks already completed under the user instructions. Do not generate more faults for a demonstration, especially if there was smoke, unusual heat, damaged wiring, or water near electricity. A past observation and an accurate history are enough to request advice. Preserve uncertainty until the item is properly assessed.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'A printer report preserves the sequence',
        alt: 'The fictional report records a successful print last week, a new print request, an unmarked sheet, and no observed display error.',
        caption: 'A remembered event sequence, not a diagnostic test. Each item records an observation rather than naming an internal failure.',
        items: [
          { label: 'Last week', detail: 'The same score printed normally.' },
          { label: 'This request', detail: 'Sent the saved PDF from the laptop.' },
          { label: 'Paper output', detail: 'One sheet fed, but it was unmarked.' },
          { label: 'Display observed', detail: 'No error message noticed.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['A harmless past fault or the printer example', 'A note'],
      steps: [
        'Describe one occurrence from memory: what you tried normally, what happened, and when it began.',
        'Add any exact displayed message and a last-known normal result if you genuinely know it.',
        'List only checks already performed safely. Mark suspected causes as unconfirmed, or omit them.',
        'Read the report as a repair provider: can they distinguish the behaviour from your guess without asking you to recreate a hazard?',
      ],
      notice: 'The report contains observable events and leaves diagnosis open.',
      troubleshooting: 'If every sentence names a failed component, rewrite it around movement, sound, display, timing, or another directly observed result.',
    },
    recall: {
      prompt: 'A washing machine stops during a cycle and displays a code. What should your first service report preserve?',
      answer: 'Record the code exactly, the cycle stage you observed, when it happened, and any safe prior checks. Do not substitute a guessed motor failure for those details.',
      hint: 'The provider needs the evidence behind your explanation.',
    },
    quiz: {
      question: 'The printer display shows no error. Which statement belongs in the report?',
      options: ['No error message was visible when I checked', 'The control electronics are working correctly', 'The problem must be limited to the ink supply'],
      correctIndex: 0,
      explanation: 'Only the first statement describes the observation. Absence of an error message does not prove the electronics are sound or select a supply fault.',
    },
    takeaway: 'Record what happened, under which conditions, and what was displayed before naming a failed part.',
    sourceNote: 'This reporting method adapts repair-record principles from the inherited sources. It does not diagnose the printer or authorise hazardous testing.',
  },
  {
    id: 'life-028',
    title: 'Inspect the caught fabric before pulling the zip',
    outcome: 'Use a gentle visual check to distinguish a possible obstruction from a damaged mechanism on a low-risk object.',
    scene: 'The lining of an empty overnight bag sits beside a zip slider.',
    sections: [
      {
        title: 'Resistance is a reason to look',
        paragraphs: [
          'An overnight bag zip resists. Pulling harder adds force before you know what is obstructing movement. Loose lining near the slider and damaged teeth are different problems. Look at the visible area before forcing the handle or buying a replacement.',
          'Use an already empty bag. Do not deliberately jam it for practice.',
        ],
      },
      {
        title: 'The slider guides two rows together',
        paragraphs: [
          'A zip slider guides two rows of teeth or coils into engagement when closing and separates them when opening. Its narrow passages are designed for those parts, not a folded lining edge. Fabric caught in that passage can wedge against the slider and increase resistance. Extra pulling can tighten the wedge or damage the lining and zip. This explains why more force is not a diagnosis. Looking for an obstruction is reversible: it gathers information without altering the parts, whereas cutting, bending, or forcing changes the object before the cause is clear.',
        ],
      },
      {
        title: 'Keep the first check small',
        paragraphs: [
          'In the example bag, the lining is visible beside the slider. That supports a possible obstruction, not proof that all the teeth are sound. Follow any relevant care instructions for a gentle release only if it moves easily. Stop if resistance increases or the mechanism looks damaged.',
          'If the lining is clear but the zip remains stuck, a suitable bag or clothing repairer can assess it. Do not apply heat, solvents, or improvised lubricants from a generic hack. This reversible-first approach belongs to low-risk objects; it is not permission to experiment with electrical equipment or safety-critical mechanisms.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Look at the slider entrance',
        alt: 'Two rows of zip teeth approach a central slider while a lining edge lies near its entrance.',
        caption: 'Enlarged schematic, not a force or disassembly instruction. Inspect the lining where the teeth enter the slider.',
        items: [
          { label: 'Left teeth', detail: 'One guided row.', x: 18, y: 22, shape: 'box' },
          { label: 'Right teeth', detail: 'The other guided row.', x: 82, y: 22, shape: 'box' },
          { label: 'Slider', detail: 'Narrow channels guide the rows.', x: 50, y: 55, shape: 'object' },
          { label: 'Lining edge', detail: 'Look for fabric at the entrance; do not force.', x: 20, y: 82, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 2, label: 'Guided row' }, { from: 1, to: 2, label: 'Guided row' }, { from: 3, to: 2, label: 'Possible obstruction' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['An already empty bag with a visible zip', 'Good ordinary room light'],
      steps: [
        'Place the empty bag on a stable surface. Use a freely accessible zip; do not create a jam or force an existing one.',
        'Identify the slider, the two rows, and any lining near the entrance. Inspect without tools.',
        'Describe what is visible: clear passage, nearby fabric, or obvious damage. Keep the conclusion narrower than a full diagnosis.',
        'If movement resists or damage is visible, stop and note the care or repair route rather than applying more force.',
      ],
      notice: 'You can point to the possible obstruction and distinguish inspection from changing the mechanism.',
      troubleshooting: 'If the area is hidden, stop rather than pulling fabric out of sight or dismantling the slider.',
    },
    recall: {
      prompt: 'A storage drawer resists closing because a scarf may be over its edge. What is a reversible first check?',
      answer: 'Stop pushing and look for a safely visible obstruction without forcing the drawer or putting fingers into a pinch point. Do not assume the runners are broken.',
      hint: 'Gather information before increasing the force on the parts.',
    },
    quiz: {
      question: 'The visible lining is clear, but the zip still resists. What follows from the inspection?',
      options: ['The teeth must be broken', 'More pulling is now safe because the lining is clear', 'That obstruction was not confirmed; stop and seek suitable care advice'],
      correctIndex: 2,
      explanation: 'Ruling out one visible obstruction does not establish the remaining mechanism is sound or identify a particular failed part.',
    },
    takeaway: 'Look for a low-risk obstruction before applying force, and stop when resistance or uncertainty remains.',
    sourceNote: 'This is an original reversible-check heuristic, not a tested zip repair protocol. The inherited repair sources do not validate improvised household hacks.',
  },
  {
    id: 'life-029',
    title: 'Agree what diagnosis does and does not authorise',
    outcome: 'Separate an inspection fee from repair permission and request an itemised estimate with an approval boundary.',
    scene: 'A bicycle shop offers a paid inspection before quoting parts, labour, and collection charges.',
    sections: [
      {
        title: 'Please fix it leaves a gap',
        paragraphs: [
          'You leave a bicycle at a shop because its gears behave differently. When offered an inspection, you say please fix it. You may mean find the problem and call me, while the provider hears permission to repair. Clarify that boundary before handover: diagnosis, a quote, and authorisation for work are separate decisions.',
        ],
      },
      {
        title: 'State the fee and its treatment',
        paragraphs: [
          'Ask what the inspection fee covers, whether it is due if you decline repair, and whether it is credited against later work. Then request an estimate separating parts, labour, transport, and other charges. A total with no scope cannot tell you what has been included.',
          'In a hypothetical quote, diagnosis costs 15 units and is not credited. Parts cost 25, labour 40, and collection 10. The proposed additional work totals 75 units, so proceeding would cost 90 including diagnosis. Declining after the inspection would still cost the agreed 15 under these example terms.',
        ],
      },
      {
        title: 'Define how changes get approved',
        paragraphs: [
          'Write that only the stated inspection is authorised until you accept the repair estimate. Ask how the provider will seek approval if the proposed scope or price changes. A personal budget in your own notes does not communicate that boundary to the shop.',
          'When you later approve work, keep the agreed scope and price with the final report and receipt. Check what was actually done rather than assuming an invoice title describes every replaced part. These are questions to agree with the provider, not a claim that all locations impose the same estimate or consent rules. Safety-related bicycle work still belongs with a suitable repairer.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Clarify permission before leaving the bicycle',
        alt: 'A customer asks what the inspection fee covers, the shop explains the separate fee, and the customer limits authorisation to diagnosis.',
        caption: 'Fictional exchange. Inspect the explicit permission for diagnosis, not open-ended repair.',
        items: [
          { label: 'Customer', detail: 'What does the 15-unit inspection cover, and is it credited against repair?' },
          { label: 'Shop', detail: 'Diagnosis only. It remains payable and is separate from any repair quote.' },
          { label: 'Customer', detail: 'Please inspect only, then send an itemised quote for approval before repair.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper or a private note', 'The hypothetical quote or a non-sensitive real estimate'],
      steps: [
        'Separate the diagnostic fee from parts, labour, and transport. Identify whether diagnosis is credited or charged separately.',
        'Calculate the total if you proceed and the amount due if you decline after inspection. Use only stated charges.',
        'Draft an authorisation sentence naming the permitted scope and requiring approval before extra work or cost.',
        'Plan one place for the estimate, approval, and final report.',
      ],
      notice: 'The provider could tell what you have authorised, and your total does not omit or double-count diagnosis.',
      troubleshooting: 'If the quote does not say whether diagnosis is credited, ask before calculating a final total or giving repair approval.',
    },
    recall: {
      prompt: 'A repairer discovers another worn part after you approved a limited repair. What agreement should guide the next step?',
      answer: 'The agreed change-approval process should determine how the new scope and price are presented for your decision before additional work proceeds.',
      hint: 'An earlier approval has a scope; it is not automatically permission for every later finding.',
    },
    quiz: {
      question: 'Under the example terms, what is the total for diagnosis plus the quoted repair and collection?',
      options: ['75 units because the inspection was already discussed', '90 units because the separate 15-unit fee is not credited', '60 units because all inspection fees are deducted'],
      correctIndex: 1,
      explanation: 'The additional quote is 25 + 40 + 10 = 75. The separate non-credited diagnostic fee adds 15, making 90 units.',
    },
    takeaway: 'Agree diagnosis, total cost, authorised scope, and the process for approving changes separately.',
    sourceNote: 'The FTC repair reference concerns vehicles and U.S. context. This adapted checklist and its prices are illustrative, not universal repair rights.',
  },
  {
    id: 'life-030',
    title: 'A reachable screw is not a service instruction',
    outcome: 'Use the documented user-care boundary to decide when a repair needs a qualified provider.',
    scene: 'An old powered speaker has accessible case screws but no user instructions for opening its power section.',
    sections: [
      {
        title: 'The case looks easy to open',
        paragraphs: [
          'A powered speaker has stopped working. You can see the case screws and own a screwdriver that fits them. That makes opening it physically possible, but it does not establish that the parts inside are safe to touch or that the case is intended for user access.',
          'The first decision is about scope, not dexterity. Find the exact manual and distinguish ordinary user care from trained service before treating an accessible fastener as an invitation to investigate.',
        ],
      },
      {
        title: 'Unplugged does not mean every hazard is gone',
        paragraphs: [
          'Capacitors in some power circuits store energy. Unplugging stops the normal external supply but does not establish that stored energy has disappeared. Batteries can supply energy independently of the socket. Sharp parts and safety mechanisms can also require specialist handling and correct reassembly. A quiet device or dark indicator does not verify those conditions. A manual can therefore permit exterior cleaning while reserving internal work for qualified service: the tasks involve different hazards and knowledge, not just different amounts of effort.',
        ],
      },
      {
        title: 'Use the manual boundary as the decision rule',
        paragraphs: [
          'For the speaker example, the manual describes exterior cleaning and says not to open the power section. A video showing someone opening a similar speaker does not extend your permitted user-care scope. Record the symptom and choose the documented service route instead.',
          'If instructions are unclear, ask the manufacturer or a qualified provider. Do not heat electronics, bridge contacts, probe a battery, or attempt a stored-energy workaround. If equipment is damaged, unusually hot, smoking, or wet near electricity, keep away and seek appropriate urgent help rather than continuing an educational inspection. No live repair is needed to practise this decision.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Different tasks, different access',
        alt: 'Documented exterior care is contrasted with opening a powered speaker case for internal power work.',
        caption: 'Example manual boundary. A visible screw and a disconnected plug do not replace internal-service instructions or competence.',
        items: [
          { label: 'Documented user care', detail: 'Exterior cleaning with the manual shutdown and material instructions.' },
          { label: 'Internal power service', detail: 'Opening the case is not authorised user care in this example.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['One appliance manual', 'A note; no tools are required'],
      steps: [
        'Choose a manual for equipment you own, or a public example. Identify the exact model covered.',
        'Find one permitted user-care task and its preparation instructions. Keep it distinct from a service procedure.',
        'Find the warnings about access or internal parts and record the appropriate service contact.',
        'Classify a proposed task as documented user care or needing advice. Do not open or operate the equipment for this exercise.',
      ],
      notice: 'Your decision cites the permitted task and access boundary, not your ability to reach the screws.',
      troubleshooting: 'If no user procedure covers the task, stop and ask. The absence of instructions is not permission to improvise.',
    },
    recall: {
      prompt: 'A device is unplugged and its indicator is dark. Does that establish that its internal power board is safe to handle?',
      answer: 'No. Stored energy and other hazards can remain, and an indicator does not verify them. Follow the documented service boundary and use qualified help.',
      hint: 'Removing the external supply is not a measurement of every internal condition.',
    },
    quiz: {
      question: 'A video opens your appliance casing, but the manual reserves that work for service personnel. Which evidence controls the beginner task?',
      options: ['The documented user-service boundary and appropriate qualified advice', 'The fact that the video uses an ordinary screwdriver', 'The number of successful-looking comments under the video'],
      correctIndex: 0,
      explanation: 'Tools and comments do not establish safe access. The manual boundary identifies the intended scope; outside it, seek the appropriate service route.',
    },
    takeaway: 'Use the documented user-care boundary, not visible fasteners or an unlit power indicator.',
    sourceNote: 'Appliance safety guidance supports choosing qualified service. This lesson gives no internal electrical or battery repair procedure.',
  },
  {
    id: 'life-031',
    title: 'A refrigerator dial is not a temperature reading',
    outcome: 'Use a measured refrigerator temperature and arrange food to reduce dripping and airflow problems.',
    scene: 'A refrigerator dial reads three, but a separate appliance thermometer gives the actual temperature.',
    sections: [
      {
        title: 'Three could mean several things',
        paragraphs: [
          'You move into a flat and find the refrigerator dial set to three. Unless the appliance specifies a measured temperature display, that number is a control setting, not necessarily three degrees. Cool-feeling shelves are not a measurement either.',
          'USDA guidance recommends a refrigerator at 40 degrees Fahrenheit or below, about 4 degrees Celsius. An appliance thermometer lets you compare a measurement with that guidance instead of judging coldness by touch.',
        ],
      },
      {
        title: 'Cold slows growth but does not erase history',
        paragraphs: [
          'Refrigeration slows the growth of many microorganisms; it does not sterilise food or reverse unsafe handling before storage. A cold reading now cannot tell you how long an item sat warm yesterday. Food-specific storage limits still matter. Temperature can also vary with placement, blocked airflow, door opening, and appliance condition. Follow the thermometer and refrigerator instructions for placement and reading rather than taking an immediate reading from a newly moved sensor. Do not pack every air space tightly and assume the dial will compensate for obstructed circulation.',
        ],
      },
      {
        title: 'Read the temperature and inspect the arrangement',
        paragraphs: [
          'Suppose the fictional dial is at three while a correctly used thermometer reads 7 degrees Celsius. The setting does not cancel the warmer measurement. Follow the appliance and official food-safety guidance to address the temperature and assess the food history; smell cannot establish safety.',
          'Contain raw meat, poultry, and seafood so their juices cannot reach ready-to-eat food. A leak-catching container below ready-to-eat items provides a physical barrier against dripping. Keep intended air paths clear and use the model storage guidance. This arrangement reduces particular risks; it does not make every food safe indefinitely.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Measurement and separation inside the fridge',
        alt: 'Contained raw food sits below ready-to-eat food; a thermometer and clear air path are shown.',
        caption: 'Schematic. Follow model and thermometer placement instructions; keep raw-food juices away from ready-to-eat food.',
        items: [
          { label: 'Ready-to-eat food', detail: 'Protected from raw-food drips.', x: 22, y: 22, shape: 'box' },
          { label: 'Appliance thermometer', detail: '40 F or below, about 4 C.', x: 78, y: 22, shape: 'object' },
          { label: 'Contained raw food', detail: 'Leak-catching container below ready-to-eat items.', x: 22, y: 78, shape: 'box' },
          { label: 'Intended air path', detail: 'Do not tightly block circulation.', x: 78, y: 78, shape: 'circle' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Refrigerator instructions', 'An appliance thermometer if already available', 'A note'],
      steps: [
        'Identify whether the control shows a setting or a measured temperature. Read the manual if its meaning is unclear.',
        'Read an existing thermometer according to its instructions and record the units. If none exists, plan measurement rather than estimating by touch.',
        'Briefly inspect whether raw-food containers prevent drips onto ready-to-eat items and whether intended air paths are blocked.',
        'Close the door. If the reading is above guidance, use official appliance and food-safety advice rather than assuming a dial change proves food safe.',
      ],
      notice: 'You have a measured reading or an explicit measurement gap, plus a check of containment and airflow.',
      troubleshooting: 'If the reading seems inconsistent, check placement and reading instructions. Do not invent a settling time or dismiss the result by touch.',
    },
    recall: {
      prompt: 'A refrigerator now reads within guidance after a power interruption. Does that reading alone establish the food stayed safe?',
      answer: 'No. It reports the current condition, not the earlier temperature and duration. Use official outage and food-specific guidance for that history.',
      hint: 'A present measurement does not reconstruct the past.',
    },
    quiz: {
      question: 'The dial says three, but a correctly used thermometer reads 7 C. Which information needs action?',
      options: ['The dial proves the interior is at 3 C', 'Cool-feeling shelves overrule the thermometer', 'The measured reading exceeds the cited refrigerator guidance'],
      correctIndex: 2,
      explanation: 'An uncalibrated control level is not a temperature measurement. Follow official guidance for the warm reading and food history, not touch or the dial number.',
    },
    takeaway: 'Measure refrigerator temperature, contain raw-food juices, and still respect food history and storage limits.',
    sourceNote: 'USDA supplies the refrigerator limit. The 7 C example is fictional, not a safety assessment of your food.',
  },
  {
    id: 'life-032',
    title: 'Do not wait for a full pot to reach room temperature',
    outcome: 'Plan prompt leftover refrigeration in shallow containers and distinguish safety limits from a countertop cooling routine.',
    scene: 'A large batch of lentil stew needs dividing into suitable shallow containers after dinner.',
    sections: [
      {
        title: 'The pot is still warm after the dishes',
        paragraphs: [
          'You leave a large pot of lentil stew on the counter, believing hot food must cool before refrigeration. After dinner and washing-up, the centre is still warm. That rule has created an open-ended delay.',
          'USDA says perishable leftovers should be refrigerated within two hours of cooking or removal from hot holding. The limit is one hour when the surrounding temperature is above 90 degrees Fahrenheit, about 32 degrees Celsius. These are limits, not recommended waiting periods.',
        ],
      },
      {
        title: 'Depth changes how heat leaves',
        paragraphs: [
          'Heat leaves a deep mass of food slowly because it must travel farther from the centre to cooler surroundings. Shallow portions shorten that path and expose more cooling surface relative to volume. USDA permits hot food to go directly into the refrigerator. Use temperature-suitable containers, cover the leftovers, and allow circulation at 40 degrees Fahrenheit or below, about 4 degrees Celsius. Container shape helps cooling; a food-storage label alone says nothing about food depth.',
        ],
      },
      {
        title: 'Prepare the storage before the meal ends',
        paragraphs: [
          'For the stew, have appropriate shallow containers and refrigerator space ready. Portion and refrigerate promptly rather than scheduling other chores while the full pot waits. The diagram shows the batch divided; it does not predict an exact cooling time for a particular recipe or container.',
          'The clock does not start over when food is repacked. Discard perishable food left out beyond the applicable USDA limit instead of using smell or a taste to decide. For this exercise, rehearse with empty containers so practising storage does not itself leave real food out longer.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Divide the stew before storing it',
        alt: 'A deep pot is divided between shallow containers that move into the refrigerator without a room-temperature waiting stage.',
        caption: 'Schematic portions, not measured cooling results. Shallower depth shortens the heat path; refrigerate promptly.',
        items: [
          { label: 'Deep stew pot', detail: 'A large centre cools slowly.', x: 18, y: 50, shape: 'object' },
          { label: 'Shallow portion A', detail: 'Suitable covered food container.', x: 50, y: 20, shape: 'box' },
          { label: 'Shallow portion B', detail: 'Less depth than the full pot.', x: 50, y: 80, shape: 'box' },
          { label: 'Refrigerator', detail: '40 F or below; leave circulation space.', x: 84, y: 50, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Divide' }, { from: 0, to: 2, label: 'Divide' }, { from: 1, to: 3, label: 'Refrigerate' }, { from: 2, to: 3, label: 'Refrigerate' }],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Empty food-storage containers and lids', 'Refrigerator space', 'USDA leftover guidance'],
      steps: [
        'Choose suitable shallow containers for a future batch. Check that their material is appropriate for hot food.',
        'Identify refrigerator space that keeps the covered portions stable and does not block intended airflow.',
        'Write the sequence: divide, cover, refrigerate promptly. Do not insert a wait for room temperature.',
        'Read the two-hour rule and its one-hour hot-weather condition. Keep this rehearsal empty; do not hold food out to test the limit.',
      ],
      notice: 'The containers and storage location are ready before the next batch needs cooling.',
      troubleshooting: 'If only a deep container fits, reorganise the plan before cooking rather than inventing a safe countertop cooling time.',
    },
    recall: {
      prompt: 'At an outdoor meal above 90 F, someone plans to refrigerate leftovers after two hours. What needs correcting?',
      answer: 'The applicable USDA limit is one hour in that heat. Refrigerate promptly within it; do not use the ordinary two-hour limit or wait for food to feel cool.',
      hint: 'The surrounding temperature changes the allowed time out.',
    },
    quiz: {
      question: 'A large pot is still warm, but the food is within the applicable limit. Which storage approach fits the guidance?',
      options: ['Wait until the entire pot reaches room temperature', 'Divide into suitable shallow containers and refrigerate promptly', 'Reset the time limit when the stew moves into containers'],
      correctIndex: 1,
      explanation: 'Shallow portions support faster cooling and can enter the refrigerator hot. Waiting for room temperature is not required, and repacking does not reset prior handling time.',
    },
    takeaway: 'Prepare shallow containers and refrigerate promptly; food need not cool to room temperature first.',
    sourceNote: 'USDA Leftovers and Food Safety was checked for the stated limits and cooling method. No exact cooling duration is claimed.',
  },
  {
    id: 'life-033',
    title: 'Label the cooking date, not the day you remembered',
    outcome: 'Use known leftover history to plan eating or freezing without treating a new label as a fresh start.',
    scene: 'Two portions of pasta sauce look alike, but only one has a known cooking date.',
    sections: [
      {
        title: 'The container cannot tell you its age',
        paragraphs: [
          'Two covered portions of pasta sauce look and smell alike. One says cooked Monday; the other has no date. Labelling both today cannot recover the missing history.',
          'USDA advises using properly handled refrigerated leftovers within three to four days. That guidance assumes safe preparation, prompt refrigeration, and a refrigerator at 40 degrees Fahrenheit or below, about 4 degrees Celsius. A label helps track those facts; it cannot create them.',
        ],
      },
      {
        title: 'Cooling does not stop the calendar',
        paragraphs: [
          'Refrigeration slows microbial growth rather than making cooked food indefinitely safe. A cooking date lets you plan use or freezing within guidance. Opening the container, adding fresh sauce, or changing tubs does not reset its age. Smell and appearance cannot reliably reveal every food-safety hazard. If age or handling is unknown, do not taste it to fill that gap. Consult official food-safety guidance and discard food when safety is uncertain.',
        ],
      },
      {
        title: 'Use the date to make an earlier decision',
        paragraphs: [
          'In a fictional example, sauce is cooked and promptly refrigerated on Monday evening. By Thursday evening, three days have elapsed; by Friday evening, four. Plan a meal or freezing within the guidance rather than waiting for the last possible moment. Food-specific or local guidance may be stricter.',
          'Keep the known older portion easy to see, while keeping raw-food juices away from it. Label each new batch with contents and cooking date before you forget. Do not combine an unknown older portion with fresh food and then label the mixture with the newer date. Freezing is not a rescue for food already mishandled.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Age follows the original cooking event',
        alt: 'Monday sauce reaches three days on Thursday evening and four on Friday evening.',
        caption: 'Hypothetical calendar assuming safe handling and refrigeration. Unknown or mishandled food does not gain this storage period.',
        items: [
          { label: 'Monday evening', detail: 'Cooked, labelled, and promptly refrigerated.' },
          { label: 'Tuesday and Wednesday', detail: 'Plan use or freezing; the original date stays.' },
          { label: 'Thursday evening', detail: 'Three days since the cooking event.' },
          { label: 'Friday evening', detail: 'Four days; do not extend the stated storage period.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['An empty container', 'A label and pen', 'USDA leftover guidance'],
      steps: [
        'Prepare a label for the next meal with spaces for contents, actual cooking date, and a planned use or freezing decision.',
        'Use the Monday example to identify when three and four days have elapsed. Keep it clearly marked as practice.',
        'Choose a visible refrigerated location for a future safely handled portion, separate from raw-food drips.',
        'Write a rule for unknown history: do not guess a cooking date or taste food to establish safety.',
      ],
      notice: 'The label preserves the real cooking event and prompts a decision before the storage period is exceeded.',
      troubleshooting: 'If the date is unknown, a new label is not a repair. Do not mix uncertain food into a fresh batch.',
    },
    recall: {
      prompt: 'You move older leftovers into a clean container today. Which date belongs on the new label?',
      answer: 'Preserve the original cooking date and known history. A clean container changes the packaging, not how long the food has existed or how it was handled.',
      hint: 'The age belongs to the food, not to its current tub.',
    },
    quiz: {
      question: 'Two portions look identical, but one has unknown age and storage history. Which conclusion is supported?',
      options: ['Appearance cannot supply the missing history or establish safety', 'Matching appearance means both share the labelled portion age', 'A new date label gives the unknown portion another three to four days'],
      correctIndex: 0,
      explanation: 'The unknown history remains unknown. Neither visual similarity nor relabelling resets age or verifies safe handling.',
    },
    takeaway: 'Keep the real cooking date and plan use or freezing within the applicable guidance.',
    sourceNote: 'USDA leftover storage guidance was checked. Its three-to-four-day period assumes safe handling; follow stricter food-specific or local instructions where applicable.',
  },
  {
    id: 'life-034',
    title: 'Plan thawing around the outside as well as the centre',
    outcome: 'Explain why a frozen centre does not make counter thawing safe and plan a contained refrigerator thaw.',
    scene: 'A frozen chicken package is moved to a leak-catching container in the refrigerator before the intended meal.',
    sections: [
      {
        title: 'Dinner is not the starting time for thawing',
        paragraphs: [
          'You take a frozen chicken package out just before dinner. Leaving it on the counter seems harmless because the centre feels hard. But that icy centre cannot describe the temperature of the warmer outer food.',
          'USDA identifies refrigerator thawing as a safe method when the refrigerator remains at 40 degrees Fahrenheit or below, about 4 degrees Celsius. It requires planning rather than a last-minute countertop wait.',
        ],
      },
      {
        title: 'Heat reaches the outside first',
        paragraphs: [
          'Warm surroundings transfer heat into the outer food before it reaches the frozen centre. On a counter, the outside can reach temperatures that allow rapid bacterial growth while the middle still contains ice. Sealed packaging does not stop heat transfer. Refrigerator thawing keeps the surroundings cold. The time needed depends on the food, size, and conditions; even small packages can need a full day. A generic estimate cannot guarantee readiness at a particular hour.',
        ],
      },
      {
        title: 'Contain leaks and keep the full method',
        paragraphs: [
          'For the example chicken, place the package in a suitable container that catches thawing juices, below ready-to-eat food according to the refrigerator layout. Plan ahead from the official guidance for that food, including how soon it should be cooked after thawing. A thawing start date does not replace all other storage limits.',
          'If time is short, choose another meal or follow a complete official alternative method. USDA cold-water and microwave methods have additional requirements; do not borrow only their faster timing. Do not use hot water or the counter as a shortcut. This exercise uses an empty container to plan the arrangement.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Cold surroundings and a leak-catching container',
        alt: 'Refrigerated ready-to-eat food is above a package placed in a leak-catching container.',
        caption: 'Schematic. The container catches juices; it neither makes counter thawing safe nor determines thawing time.',
        items: [
          { label: 'Ready-to-eat food', detail: 'Keep protected above potential raw-food leaks.', x: 50, y: 17, shape: 'box' },
          { label: 'Frozen chicken package', detail: 'Thaw in the refrigerator, not on the counter.', x: 23, y: 72, shape: 'object' },
          { label: 'Leak-catching container', detail: 'Package sits inside it during thawing.', x: 78, y: 72, shape: 'box' },
        ],
        arrows: [{ from: 1, to: 2, label: 'Place package inside' }],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Official thawing guidance for a future meal', 'An empty leak-catching container', 'A planning note'],
      steps: [
        'Read complete refrigerator-thawing guidance for a future food, including later cooking and storage limits.',
        'Select a suitable container and a refrigerator location that keeps raw juices away from ready-to-eat food.',
        'Plan the start ahead of the meal; package size and conditions affect readiness.',
        'Write a fallback meal or a complete official alternative method to consult if timing does not work. Do not thaw food just for practice.',
      ],
      notice: 'Your plan includes temperature control, leak containment, enough preparation time, and a safe fallback.',
      troubleshooting: 'If the centre is still frozen at cooking time, do not move it to hot water. Follow official instructions or change the meal plan.',
    },
    recall: {
      prompt: 'A fish package feels icy in the middle after sitting on a warm counter. Why is that not enough to judge safety?',
      answer: 'The outside may have warmed much sooner than the centre. Safety depends on the temperature and time history, not a remaining patch of ice.',
      hint: 'Different parts of the food exchange heat at different rates.',
    },
    quiz: {
      question: 'A thawing package is sealed and its centre is frozen. What does the seal establish about counter thawing?',
      options: ['It prevents the outer food warming before the centre', 'It makes elapsed time irrelevant while ice remains', 'It does not stop heat transfer or establish a safe temperature history'],
      correctIndex: 2,
      explanation: 'Packaging can contain juices but still transfers heat. Neither a seal nor a frozen centre proves that the outside remained at a safe temperature.',
    },
    takeaway: 'Plan contained refrigerator thawing; the frozen centre cannot certify the warmer outside.',
    sourceNote: 'USDA thawing guidance is inherited. No universal thawing duration is supplied, and alternative methods require their complete official instructions.',
  },
  {
    id: 'life-035',
    title: 'Let the storage label outrank the metal can',
    outcome: 'Check storage instructions, package condition, and opened status before treating a canned food as shelf stable.',
    scene: 'A pantry contains canned chickpeas, a canned ham labelled keep refrigerated, and an opened portion awaiting storage.',
    sections: [
      {
        title: 'The same container shape can need different storage',
        paragraphs: [
          'You put sealed cans of chickpeas and ham in the cupboard, then notice keep refrigerated on the ham. Their shared metal packaging did not establish the same storage requirement.',
          'Some canned foods are shelf stable before opening; others require refrigeration even while sealed. Read the product label first. A familiar package is not permission to replace an explicit storage instruction with a general rule about tins.',
        ],
      },
      {
        title: 'Processing and package integrity work together',
        paragraphs: [
          'Shelf stability depends on the product and its processing, together with an intact sealed package. The metal shell alone does not create those conditions. Damage to a seam can compromise the barrier that protects the contents, and opening the can deliberately removes that sealed state. The unopened storage claim therefore cannot simply be carried forward after opening. Follow the product-specific instructions for the opened food and any required refrigeration. A cool, dry cupboard can suit an intact shelf-stable product, but it does not rescue damaged packaging or a product labelled for refrigeration.',
        ],
      },
      {
        title: 'Use three checks at the cupboard',
        paragraphs: [
          'First, read whether refrigeration is required. Second, inspect the unopened container without opening suspect food. Reject swollen, leaking, heavily rusted, or deeply dented cans, especially damage at seams. Do not open or taste suspect contents to investigate safety. Third, distinguish unopened stock from food that has already been opened.',
          'For the example, intact shelf-stable chickpeas follow their cupboard instructions; the labelled ham belongs in refrigeration; an opened chickpea portion follows opened-food guidance. These are different cases even when all began in metal cans. If storage history or package safety is uncertain, consult official guidance rather than relying on smell.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four cans, different decisions',
        alt: 'An intact shelf-stable can, a refrigerated can, opened chickpeas, and a swollen can require different responses.',
        caption: 'Illustrative label and condition decisions. Container shape does not override the label, opening status, or signs of compromised packaging.',
        items: [
          { label: 'Intact chickpea can', detail: 'If labelled shelf stable, follow unopened cupboard storage instructions.' },
          { label: 'Ham: keep refrigerated', detail: 'Refrigeration applies even before opening.' },
          { label: 'Opened chickpeas', detail: 'Follow food-specific opened-storage instructions.' },
          { label: 'Swollen or leaking can', detail: 'Do not open or taste; follow safe disposal guidance.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Two intact unopened food packages', 'Their storage labels'],
      steps: [
        'Read the unopened storage instruction on each package without opening it. Do not assume metal means cupboard storage.',
        'Identify any separate after-opening instruction and note what changes when the seal is broken.',
        'Inspect visible condition without handling leaking or swollen containers. Stop and use official guidance if damage is suspect.',
        'Write the correct storage decision for each intact example, keeping label instructions and package condition separate.',
      ],
      notice: 'Your decision cites a label and package state, not just the material of the container.',
      troubleshooting: 'If the label is missing or unreadable, consult the manufacturer or official food guidance rather than guessing a storage life.',
    },
    recall: {
      prompt: 'An unopened jar was shelf stable, but its label says refrigerate after opening. Does tightening the lid restore cupboard storage?',
      answer: 'No. Closing the lid does not recreate the original processing and sealed condition. Follow the after-opening instruction.',
      hint: 'A closed lid and an original unopened seal are different states.',
    },
    quiz: {
      question: 'A sealed can says keep refrigerated but looks identical to nearby pantry cans. Which action fits the evidence?',
      options: ['Use the same shelf because the packaging matches', 'Follow the explicit refrigeration instruction', 'Open it first to decide from its smell'],
      correctIndex: 1,
      explanation: 'The label specifies the required storage. Similar packaging does not override it, and opening or smelling food is not a safety test.',
    },
    takeaway: 'Check the label, intact package, and opened status before assigning storage.',
    sourceNote: 'USDA shelf-stable food guidance is inherited. The lesson gives no invented shelf life and does not recommend testing suspect food by tasting or opening it.',
  },
  {
    id: 'life-036',
    title: 'Build the bag from the trip activities',
    outcome: 'Turn an itinerary into a packing list, checking shared items, destination provision, and personal constraints.',
    scene: 'An overnight train trip includes a hostel stay, an outdoor sketch walk, and an indoor workshop.',
    sections: [
      {
        title: 'A generic list misses the workshop',
        paragraphs: [
          'A copied overnight packing list includes spare shoes and chargers but misses the sketchbook your workshop requires. It describes a generic trip, not yours.',
          'Start with Friday train travel and a hostel night, then a Saturday sketch walk and indoor workshop. Identify what each activity requires before choosing the objects that meet those needs.',
        ],
      },
      {
        title: 'Map requirements to objects',
        paragraphs: [
          'For the train, you need the required ticket and an accessible way to present it. The overnight stay creates sleeping and washing needs, adjusted to what the hostel actually provides. The sketch walk needs drawing materials and weather-appropriate clothing. The workshop has its own published requirements. One sketchbook and pencil might serve both drawing activities, so they belong once on the packing list. This mapping avoids counting an item twice while also revealing a missing function. Do not remove accessibility or essential personal items just because a generic minimal list omits them.',
        ],
      },
      {
        title: 'Check the plan against constraints',
        paragraphs: [
          'Ask the hostel whether a towel is provided rather than assuming it is. Check the workshop instructions before adding specialist materials. Look at the weather and the transport rules relevant to the actual trip. A list that fits your activities still needs to fit the baggage you are permitted and able to carry.',
          'Then remove duplicates only where one item genuinely serves both needs. Two items can look similar yet have different functions, while a backup can have a justified contingency role. Keep a short version for this trip type rather than adding every possible activity to a growing master list.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The itinerary supplies the packing questions',
        alt: 'Friday train travel and hostel sleep are followed by a Saturday sketch walk and indoor workshop.',
        caption: 'Fictional overnight itinerary. Notice that the sketchbook serves two activities; destination supplies and transport rules still need confirmation.',
        items: [
          { label: 'Friday: train', detail: 'Required ticket in an accessible format.' },
          { label: 'Friday: hostel', detail: 'Sleep and washing items; confirm towel provision.' },
          { label: 'Saturday: sketch walk', detail: 'Sketchbook, pencil, and suitable clothing.' },
          { label: 'Saturday: workshop', detail: 'Check instructions; reuse drawing materials where suitable.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['A real or imagined overnight itinerary', 'Paper', 'Relevant booking or event instructions'],
      steps: [
        'Write the trip activities in order, including travel, sleep, washing, and any specific event.',
        'Name the required function for each activity before choosing the object that will provide it.',
        'Check one uncertain destination provision or event requirement through an official source.',
        'Combine genuine duplicates while preserving essential personal needs and justified backups.',
        'Check the final list against weather, carrying needs, and the actual transport allowance. No purchase is required.',
      ],
      notice: 'Every listed object has a trip purpose, and each activity has its required items covered.',
      troubleshooting: 'If the list keeps expanding, separate confirmed activities from optional ones instead of packing for every possible trip.',
    },
    recall: {
      prompt: 'A weekend visit gains a formal dinner after you made the list. How should the list change?',
      answer: 'Add the dinner requirements, check what existing items can serve them, and revise the allowance check. Do not copy an entirely new generic list over the old one.',
      hint: 'A changed activity creates a requirement to compare, not an automatic shopping list.',
    },
    quiz: {
      question: 'The sketch walk and workshop both accept the same sketchbook. What does the activity method suggest?',
      options: ['List one sketchbook against both purposes', 'Pack one for each activity because the itinerary has two entries', 'Remove the sketchbook because it appears twice'],
      correctIndex: 0,
      explanation: 'One suitable object can cover two requirements. Combining the duplicate preserves the function rather than doubling it or deleting it entirely.',
    },
    takeaway: 'Pack for the actual activities, then check shared uses, destination provision, and carrying constraints.',
    sourceNote: 'This packing method is original. IATA supplies baggage background, not a packing minimum or evidence of fewer forgotten items.',
  },
  {
    id: 'life-037',
    title: 'Pack the next-needed item where you can reach it',
    outcome: 'Arrange arrival essentials for access while protecting personal details and avoiding dependence on checked luggage.',
    scene: 'A traveller reaches a hostel after dark with booking details buried beneath clothes.',
    sections: [
      {
        title: 'The booking is underneath tomorrow clothes',
        paragraphs: [
          'You reach a hostel after an evening train. The reception desk asks for your booking details, but the printed confirmation is at the bottom of the bag under spare clothes. You have the right information, yet using it requires unpacking in a public space. Packing by category alone put papers together without considering when you would need them. Order of use is another organising dimension, especially when arrival involves tickets, addresses, or check-in details.',
        ],
      },
      {
        title: 'Accessibility should not expose the contents',
        paragraphs: [
          'A protected inner pocket or pouch near the opening can make required information reachable without displaying it outside the bag. An external transparent pocket is convenient for finding a document but can reveal private details to others. The useful goal is controlled access, not maximum visibility.',
          'Digital copies have their own dependencies. A booking page that was once open may still need a network connection later. Save required details through a supported offline method and check that you can open them. A copy does not replace an original document where the carrier or accommodation requires the original.',
        ],
      },
      {
        title: 'Plan for the bag you still control',
        paragraphs: [
          'For the hostel arrival, keep the address, required booking information, and permitted immediate essentials in a protected reachable place. Put next-day clothing farther down because it is not needed at reception. Keep identity information out of any public luggage label beyond what is necessary.',
          'If another trip uses checked luggage, ask what happens if that bag arrives later. Within the applicable rules, keep arrival-critical items with you rather than relying entirely on the checked bag. This does not predict a delay; it identifies which dependency would matter if access to the bag were interrupted.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A bag packed by next use',
        alt: 'A bag cutaway places a protected arrival pouch near the opening, clothing in the middle, and sleep items below.',
        caption: 'Schematic cutaway. The top pouch is inside the bag, not a transparent exterior display of private documents.',
        items: [
          { label: 'Near the opening', detail: 'Protected pouch: address and required booking details.', x: 50, y: 16, shape: 'box' },
          { label: 'Middle compartment', detail: 'Clothes needed after check-in.', x: 50, y: 50, shape: 'object' },
          { label: 'Lower compartment', detail: 'Sleep items not needed at reception.', x: 50, y: 84, shape: 'box' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['An empty travel bag', 'Harmless stand-ins for documents', 'A future itinerary'],
      steps: [
        'Name the first three things you would need on arrival, based on the actual check-in or onward-travel requirements.',
        'Place harmless stand-ins in a protected reachable compartment. Put later-use clothing elsewhere without filling the bag completely.',
        'Retrieve the stand-ins without spreading contents out. Check that their imagined private details would not face outward.',
        'Identify any offline copy needed and how to verify it through the app instructions. Keep required originals and baggage rules in the plan.',
      ],
      notice: 'Arrival items can be reached without unpacking the whole bag or displaying private information.',
      troubleshooting: 'If access is awkward, change the compartment rather than moving sensitive papers into an exposed outside sleeve.',
    },
    recall: {
      prompt: 'A flight itinerary is stored only in the suitcase that will be checked. What dependency should you reconsider?',
      answer: 'Check-in and arrival access depend on that suitcase being available. Keep permitted required details and originals accessible with you, with a supported offline copy where useful.',
      hint: 'The location of information matters even when the information itself is correct.',
    },
    quiz: {
      question: 'Which arrangement balances reception access with privacy?',
      options: ['Booking details under the clothing to keep them hidden', 'A confirmation facing outward in a transparent bag sleeve', 'A protected inner pouch near the bag opening'],
      correctIndex: 2,
      explanation: 'The inner pouch keeps the details reachable without public display. Deep burial and exterior exposure solve only one side of the problem.',
    },
    takeaway: 'Put the next-needed item within protected reach, and check offline and checked-bag dependencies.',
    sourceNote: 'This is an original access-planning routine. Copies do not replace required originals, and transport rules still govern what stays with you.',
  },
  {
    id: 'life-038',
    title: 'A gate-checked bag needs a battery recheck',
    outcome: 'Explain why spare lithium batteries stay out of checked baggage under FAA rules and plan a safe gate-check handover.',
    scene: 'A traveller must send a cabin bag to the hold while a power bank is still inside.',
    sections: [
      {
        title: 'The bag changes category at the gate',
        paragraphs: [
          'The gate agent asks to put your cabin bag in the hold, but a power bank is still inside. Under U.S. FAA rules, spare lithium batteries, including power banks, belong in permitted carry-on storage, not checked baggage. The bag changes category at handover. Having packed it for the cabin does not create an exception once it is checked.',
        ],
      },
      {
        title: 'Protect the terminals as well as the location',
        paragraphs: [
          'A battery stores energy. If exposed terminals contact conductive metal, such as loose keys, an unintended electrical path can produce high current and heat. Protection against short circuits and physical damage therefore matters even when the battery is in the correct baggage category.',
          'Use the carrier and official guidance for permitted protective storage, size, quantity, and condition. Do not place loose spares among metal objects. A damaged or recalled battery is not an ordinary spare to squeeze into this plan. Do not charge, repair, alter, or test suspect batteries to decide whether they can travel.',
        ],
      },
      {
        title: 'Recheck before the bag leaves your control',
        paragraphs: [
          'For the example, locate the power bank before handing over the bag. Remove it and retain it in the permitted protected carry-on location. Tell the gate staff if you are unsure where an item must go. Do not hand over the bag first and assume you can retrieve it later.',
          'Rules for installed-device batteries can differ from rules for spares, and airlines or departure countries can impose additional restrictions. Check the current official guidance for the actual flight. This lesson supplies no universal battery capacity allowance and uses a paper plan rather than handling batteries during practice.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Before the gate-check handover',
        alt: 'Remove the power bank into permitted protected cabin storage before handing over the hold-bound bag.',
        caption: 'Example under FAA rules. Check current airline and departure-country requirements; they can impose additional restrictions.',
        items: [
          { label: 'Gate-check requested', detail: 'The bag will now travel as checked baggage.' },
          { label: 'Locate power bank', detail: 'Check inner pockets before handover.' },
          { label: 'Retain permitted spare', detail: 'Protected carry-on storage, separate from loose metal.' },
          { label: 'Hand over the bag', detail: 'Only after the required contents check.' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Current carrier and official battery guidance', 'Paper', 'An example flight'],
      steps: [
        'Read carrier and departure-country guidance for spare lithium batteries and power banks.',
        'Note size, quantity, condition, and protection requirements as stated. Do not assume this lesson supplies a worldwide allowance.',
        'Draw where permitted spares would stay if the main cabin bag were gate checked, including protection from loose metal.',
        'Write the gate reminder: remove permitted spares before handover and ask staff when uncertain. Handle no battery for this rehearsal.',
      ],
      notice: 'The plan changes when the bag destination changes and includes both location and protection.',
      troubleshooting: 'If a battery is damaged, recalled, or not clearly permitted, stop and obtain official advice. Do not modify it or obscure its label.',
    },
    recall: {
      prompt: 'A camera spare stays in a cabin pouch with loose keys. What check remains besides baggage location?',
      answer: 'Check permitted protection against short circuits and damage, plus the applicable size, quantity, and condition requirements.',
      hint: 'The correct compartment does not prevent conductive objects reaching terminals.',
    },
    quiz: {
      question: 'Under the cited FAA rule, a cabin bag containing a power bank is gate checked. What changes?',
      options: ['The power bank must be removed into permitted protected carry-on storage', 'Nothing, because the bag began the trip as carry-on', 'The power bank may stay if it is switched off'],
      correctIndex: 0,
      explanation: 'Power banks are treated as spares. Turning one off does not make the hold-bound bag permitted storage under the cited rule.',
    },
    takeaway: 'Before gate checking, recheck spares and keep permitted batteries protected in the required cabin location.',
    sourceNote: 'FAA and IATA sources are inherited. Current carrier and departure-country rules may be stricter than the U.S. guidance.',
  },
  {
    id: 'life-039',
    title: 'Measure the bag after the pockets are full',
    outcome: 'Compare the actual packed bag with the carrier rules for dimensions, weight, and piece count.',
    scene: 'A soft travel bag meets an example depth limit empty but bulges beyond it when packed.',
    sections: [
      {
        title: 'Cabin size is a product description',
        paragraphs: [
          'Your bag is sold as cabin size, but its full outer pocket projects beyond the empty product dimensions. That marketing label does not measure the packed shape or establish an airline allowance. Rules can vary with carrier, route, fare, and piece count. Use the allowance for the actual journey rather than numbers remembered from another trip.',
        ],
      },
      {
        title: 'Measure the occupied envelope',
        paragraphs: [
          'Follow the carrier instructions about handles, wheels, pockets, and other protrusions. Measure the space the packed bag occupies, not only the fabric panel between seams. A soft bag can expand in depth even when height and width hardly change.',
          'For a fictional allowance of 55 x 35 x 20 cm, an empty bag measures 54 x 34 x 18 cm. Packed with its protrusions included, it measures 55 x 35 x 23 cm. The depth exceeds the example limit by 3 cm. Meeting height and width does not compensate for exceeding another dimension.',
        ],
      },
      {
        title: 'Check weight and count as separate constraints',
        paragraphs: [
          'Suppose the same fictional allowance permits one piece weighing at most 7 kg, and the packed bag weighs 6.4 kg. It passes that example weight check but still fails the depth check. Moving contents into another bag might change the piece-count problem rather than solve the overall allowance.',
          'Do the check before departure while you can reconsider packing or the booked allowance. Do not assume momentarily squeezing a flexible bag proves compliance. Recheck after rearranging, and repeat the policy check when the carrier or fare changes. The example numbers are arithmetic practice, not a real airline standard.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Include the parts outside the fabric panel',
        alt: 'A schematic bag identifies its handle, main body, wheels, and bulging side pocket as measurement features.',
        caption: 'Feature locator, not a scale drawing. The fictional packed depth is 23 cm against a 20 cm limit; follow real carrier measurement instructions.',
        items: [
          { label: 'Handle', detail: 'Include as required by the carrier.', x: 50, y: 15, shape: 'object' },
          { label: 'Main bag body', detail: 'Measure packed, not just its empty panel.', x: 24, y: 50, shape: 'box' },
          { label: 'Full outer pocket', detail: 'Adds to the occupied depth.', x: 80, y: 50, shape: 'box' },
          { label: 'Wheels', detail: 'Check the full height including protrusions.', x: 50, y: 85, shape: 'circle' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['A travel bag', 'Tape measure', 'The actual ticket allowance or the fictional example'],
      steps: [
        'Record the relevant dimensions, weight limit, and piece count from the actual carrier rules. Label example rules as fictional.',
        'Measure the bag in its intended packed state according to those instructions. Use an empty practice bag only if you note that a packed recheck remains due.',
        'Compare each measurement separately. Check weight if a suitable scale is available without unsafe lifting; otherwise record that gap.',
        'After any rearrangement, recheck dimensions, weight, and piece count rather than assuming one solved measurement resolves the others.',
      ],
      notice: 'The comparison has a result for every applicable constraint, including explicit unknowns.',
      troubleshooting: 'If only product dimensions are available, do not report a packed measurement. Check the actual bag before travel.',
    },
    recall: {
      prompt: 'Moving shoes into a second pouch fixes bag depth, but the fare permits one piece. What still needs checking?',
      answer: 'Whether the pouch counts as another piece under the actual rules. Solving depth by adding a bag can leave the overall allowance unmet.',
      hint: 'Dimension, weight, and piece-count checks are independent.',
    },
    quiz: {
      question: 'The example bag is 6.4 kg but 23 cm deep against a 20 cm limit. What is the result?',
      options: ['It passes because the weight is below 7 kg', 'It passes weight but exceeds depth by 3 cm', 'It passes because the empty bag was within all three dimensions'],
      correctIndex: 1,
      explanation: 'The constraints are separate. 23 minus 20 is 3 cm; being lighter does not create extra permitted depth.',
    },
    takeaway: 'Measure the packed envelope and check each carrier constraint separately.',
    sourceNote: 'IATA explains carrier-specific baggage rules. Every size and weight allowance in this worked example is hypothetical.',
  },
  {
    id: 'life-040',
    title: 'Revise the packing list while the trip is fresh',
    outcome: 'Use unpacking evidence to remove redundant items while retaining justified contingencies and recording missing needs.',
    scene: 'After a family visit, packing decisions distinguish a rain contingency, duplicated clothing, and a missing washcloth.',
    sections: [
      {
        title: 'Unused does not always mean unnecessary',
        paragraphs: [
          'After an overnight family visit, the phone cable was used, the rain cover was not, and a second hoodie stayed folded. You also needed a washcloth. Removing every unused item would treat the cover and hoodie alike despite their different purposes.',
          'Compare the packing list with the actual trip. Keep the reason for each item visible instead of judging only whether it left the bag.',
        ],
      },
      {
        title: 'Separate a contingency from a duplicate',
        paragraphs: [
          'Contingency items prepare for plausible disruptions, not guaranteed activities. A rain cover can have a sound purpose on a dry trip. A second hoodie may duplicate clothing that already meets your needs, depending on weather, trip length, and personal requirements. One trip is a small sample: non-use does not prove a backup has no value, while packing it once does not mean it must stay forever. Name the event it covers and ask whether that reason applies to the next trip.',
        ],
      },
      {
        title: 'Change the next list, then store the gear',
        paragraphs: [
          'For this example, keep the phone cable, retain the rain cover with its weather-contingency note, reconsider the duplicate hoodie, and add a washcloth if the next destination will not provide one. These are reasons tied to a family visit, not additions to every possible travel list.',
          'Before closing the bag away, let damp items dry according to their care instructions. Evaporation needs moisture to leave the material; trapping damp fabric in a closed bag can keep the inside humid. Use a suitable drying location, not improvised heat. Restock ordinary consumables only where needed, and save a short revision while the forgotten item is still easy to remember.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four unpacking findings, four different reasons',
        alt: 'The review separates a used cable, unused rain cover, duplicate hoodie, and missing washcloth.',
        caption: 'Fictional review. A weather contingency can remain justified after a dry trip; compare purpose as well as use.',
        items: [
          { label: 'Phone cable: used', detail: 'Keep for the confirmed charging need.' },
          { label: 'Rain cover: unused', detail: 'Retain if the weather contingency still applies.' },
          { label: 'Second hoodie: unused', detail: 'Reconsider if existing clothing covers the same need.' },
          { label: 'Washcloth: missing', detail: 'Add if needed and not provided next time.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['A past trip packing list or memory', 'A note', 'Any unpacked ordinary belongings'],
      steps: [
        'List one used, one unused, and one missing item from a past trip or this example.',
        'Name the unused item\'s purpose. Classify it as a justified contingency, duplicate, or uncertain.',
        'Revise that trip-type list, keeping a reason beside each change.',
        'If unpacking now, dry damp items according to their care instructions before storage. Replenish only depleted supplies.',
      ],
      notice: 'Each revision has a reason; an unused backup is not automatically redundant.',
      troubleshooting: 'If every object seems necessary just in case, name the actual event each covers and compare it with the next itinerary.',
    },
    recall: {
      prompt: 'You carried a spare pair of glasses but never used it on one trip. Does non-use settle whether it belongs next time?',
      answer: 'No. Review what losing the main pair would mean and your available alternatives. A contingency need not occur on every trip.',
      hint: 'Judge the reason and consequences, not only the usage count.',
    },
    quiz: {
      question: 'An unused rain cover and unused duplicate shirt return from a dry trip. What should guide the revision?',
      options: ['Remove both because neither was used', 'Keep both because anything packed once remains necessary', 'Review the weather contingency separately from the duplicated clothing need'],
      correctIndex: 2,
      explanation: 'Identical use counts can conceal different purposes. Review each reason against the next trip instead of applying one blanket rule.',
    },
    takeaway: 'Revise from observed use and missing needs, while preserving contingencies that still have a reason.',
    sourceNote: 'This original planning routine does not establish an ideal packing weight or a universal minimum list.',
  },
]