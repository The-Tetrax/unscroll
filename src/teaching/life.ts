import type { LessonGuide } from './types'

// Existing lesson sources are inherited by ID. Stories and practice budgets are original examples.
export const lifeGuides: LessonGuide[] = [
  {
    id: 'life-001',
    title: 'Match the filter to the system, not the shelf',
    outcome: `Find what your own heating system's manual says about replacement filters, match size, type, and rating together, and explain why a finer filter can be the wrong choice.`,
    scene: 'A renter compares replacement filters for a hallway return-air grille.',
    sections: [
      {
        title: 'Two packages that look alike',
        paragraphs: [
          `The heating in your rented flat has a big grille in the hallway, and the filter behind it is grey with dust. At the shop there are two packages with the same large size printed on the front. One is plain. The other promises to trap much finer particles, and the box has a picture of a family breathing happily. It is a few pounds more and it looks like the obvious upgrade.`,
          `Nothing on either box tells you whether your system can actually use it. The size on the front is a start, and the capture claim is a selling point, but the question is what the equipment in your flat was designed to breathe through. Before you buy anything, find the model of the system. It will be in your tenancy paperwork or on a label you can read without climbing or opening anything. Then look for that model's manual, not an article about indoor air quality.`,
        ],
      },
      {
        title: 'Air must pass through the material',
        paragraphs: [
          `Pour water through a tea strainer and it runs straight through. Pour the same water through a paper coffee filter and it drips. The paper catches far more, and that is exactly why the water struggles to get through it. Nobody would call the coffee filter better for straining tea. It is a different tool with a different resistance, and the pot it sits in has to cope with that.`,
          `A heating filter has the same trade-off built in. Its job is to catch dust while letting enough air reach the blower. Every filter resists airflow a little, and as dust builds up it resists more. A filter made to catch smaller particles has a finer weave, so it resists more from the first day. The blower in your flat was designed around a particular amount of resistance. Hand it the coffee filter when it was built for the strainer and it has to work harder to pull the same air, which is not a free change. So more filtering is not automatically better; it is a different load on the machine. Fit matters too. If the filter is slightly small, air slips around the edge and skips the material altogether. And the size printed on the box is often a nominal name rather than a measurement, so a twenty-by-twenty-five may not be twenty by twenty-five inches. The three things to match together are size, filter type, and rating.`,
        ],
      },
      {
        title: 'Turn the manual into a purchase note',
        paragraphs: [
          `Suppose the manual for your example system says: disposable pleated filter, nominal sixteen by twenty-five by one inch, actual fifteen and a half by twenty-four and a half, rating range such-and-such, accessed through the user grille. That paragraph is your shopping list. Copy it into a note on your phone, including the actual dimensions, rather than writing medium filter and trusting your memory in the shop.`,
          `Now compare a listing against the note field by field. Same nominal size, yes. Actual dimensions listed, yes, and they match. Rating within the stated range, yes. Type disposable pleated, yes. If any field is missing from the listing, mark it unknown rather than assuming it matches; an unknown rating is the whole coffee-filter problem waiting to happen. A washable filter in the same size is a change of type, so it goes to the property manager as a question, not into the basket. And notice where this lesson stops. Finding the specification is the task. Actually swapping the filter needs the shutdown and access steps for that exact machine, so do not open service panels, wash a disposable filter, or climb to read a label you cannot reach.`,
        ],
      },
      {
        title: 'Why the finer filter wins in the shop',
        paragraphs: [
          `The shelf is designed to sell you the box with the biggest promise, and finer capture sounds like a gift to your lungs. The cost is invisible: a blower working harder behind a wall, for months, with nobody watching. By the time anyone notices, the box is long gone and the strain looks like an ageing machine rather than a shopping decision.`,
          `Two habits. Before buying any replacement part, find the equipment's own manual and copy its requirement into a note, numbers and all. And when a listing is missing one of the fields the manual specifies, write unknown next to it instead of letting a match on size stand in for a match on everything.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The intended air path',
        alt: 'Room air passes through a fitted filter in a return grille before reaching the system blower.',
        caption: `Follow the two arrows left to right and notice that both pass through the filter box, never around it; that is what a correct fit guarantees. Then look at the blower on the right: it needs a particular amount of air, and a finer filter in the middle box makes that air harder to pull. Schematic of a ducted system, not an installation plan.`,
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
        `Find the model of your heating or ventilation system without moving anything or opening a panel. Tenancy paperwork is the safest route; a label you can read from the floor is the second. The model is the key to everything else.`,
        `Find the matching manual and its section on user filter care. Record three things exactly as written: compatible size including actual dimensions, filter type, and the stated rating or rating range. These are the three fields that have to match together.`,
        `Compare those three fields with one real replacement listing. Where the listing gives a value, mark match or no match. Where it is silent, write unknown; silence on the rating is the coffee-filter trap.`,
        `Save the manual page to your note and write one question for maintenance or the property manager if any requirement is unclear or if the only available filters differ in type.`,
      ],
      notice: `Your note can tell apart a listing that is confirmed compatible on all three fields from one that merely looks similar on the shelf, and it says plainly which fields are still unknown.`,
      troubleshooting: `If the manual covers several models in one table, find the row for your exact model and ask maintenance if you cannot identify it; do not borrow a neighbouring row because it looks close. If the only listing you can find is missing the rating, that is a question for the manufacturer, not a reason to pick the strongest-sounding box.`,
    },
    recall: {
      prompt: 'A relative offers an unused filter that fits the opening but has a different rating. What must you check?',
      answer: `Fit is one of three fields, and the gift has only passed that one. Go back to the manual and check whether your system permits that rating and that filter type. A filter that slots neatly into the grille can still be the coffee filter in a tea strainer's pot: physically fine, but demanding more pull from the blower than it was built for. If the manual gives a rating range and the gift falls inside it, and the type matches, you can use it. If the rating is outside the range or the manual is silent on it, thank your relative and ask maintenance, because the opening has told you about the edges and nothing about the material the air has to cross.`,
      hint: 'Separate the dimensions from the material the air must cross.',
    },
    quiz: {
      question: 'A shop lists the correct nominal size but omits the filter rating. Which next step resolves compatibility?',
      options: ['Choose it because the opening will match', 'Obtain the missing rating and compare the manual', 'Choose the strongest filtering claim in that size'],
      correctIndex: 1,
      explanation: `Getting the missing rating and comparing it with the manual fills in the one field the listing left blank, which is the only way to know whether this filter is a strainer or a coffee filter for your blower. Choosing it because the opening matches checks fit and ignores resistance. Choosing the strongest filtering claim picks the finest weave on purpose, which is the most likely way to hand the system more resistance than it was designed for.`,
    },
    takeaway: `A finer filter is a coffee filter in a pot built for a tea strainer: it catches more and makes the blower work harder for every breath, so find your system's own manual, copy its size, type, and rating into a note, match a listing on all three, and write unknown rather than assuming when a box is silent on one of them.`,
    sourceNote: 'ENERGY STAR supplies maintenance background. The comparison is fictional; the exact equipment manual controls access, specifications, and intervals.',
  },
  {
    id: 'life-002',
    title: 'Give a leak a location, not a guessed diagnosis',
    outcome: `Write a maintenance report that says exactly where water was seen, when, and what else you noticed, while leaving the question of where it came from open for the person who can investigate.`,
    scene: 'A damp patch appears on the left floor of a kitchen sink cabinet.',
    sections: [
      {
        title: 'Water on the cabinet floor',
        paragraphs: [
          `You pull the recycling bag out from under the kitchen sink and the cabinet floor is wet on the left side. A dark patch, a few hand-widths across, soaking into the chipboard. Directly above it is the curved drain pipe. Your first thought arrives fully formed: the drain is leaking.`,
          `Maybe. But water could have run along the pipe from a joint further back, trickled down the inside wall of the cabinet from a splash at the rim, or dripped from a bottle someone put away wet. The place where water collects is real evidence. It is not the same as the place where water got in, and a report that says the drain is leaking has quietly merged the two. Keep them apart: here is where I saw water, and here is what I do not know.`,
        ],
      },
      {
        title: 'Why wiping is not a repair',
        paragraphs: [
          `Drop a marble on a slightly sloping floor and it rolls to the lowest corner. Finding the marble in the corner tells you where it stopped. It tells you nothing about where you let go of it, because the floor did the travelling. Water behaves the same way, except it also clings to surfaces and follows them sideways before it drops, so the puddle can be a long way from the entry point.`,
          `Gravity pulls water down, and contact with a pipe or a cabinet wall can carry it along before it falls. A photograph of the final puddle records the lowest corner, not the route. There is also a reason not to shrug and wipe it up. Chipboard soaks water, swells, and stays damp inside long after the surface looks dry, and persistent damp is what mould needs. Mopping removes the water that has arrived. It does nothing about the supply that keeps sending more. Observe only from where you can safely see. Do not reach behind the fittings, do not loosen a joint to look, and do not run the tap on purpose to make it leak again. And if there is water anywhere near an electrical socket or appliance, this stops being an observation exercise. Keep away and get urgent help.`,
        ],
      },
      {
        title: 'A report someone can investigate',
        paragraphs: [
          `Here is a fictional report that does the job. Tuesday evening, left side of kitchen sink cabinet floor damp, roughly thirty centimetres across. Photograph attached. First noticed after ordinary washing-up around 7pm. No visible drip from the drain bend while I looked. It names the room, the exact surface, the time, the size, what happened just before, and what you did not see. A plumber reading it knows where to look first and has not been told what they will find.`,
          `Send a report about active water promptly, through whatever route the landlord or building uses for maintenance, and keep the date you sent it together with any reply. If the cabinet is dry when you look again, report that as well. A dry morning does not prove the leak has gone; some leaks only happen when a tap runs or a washing machine empties, and a dry patch over an old stain is a different kind of clue. The marble is not in the corner today. That does not mean nobody dropped it.`,
        ],
      },
      {
        title: 'Why the diagnosis writes itself',
        paragraphs: [
          `A puddle under a pipe looks like a sentence with only one ending, and naming the cause feels more helpful than describing the water. But a wrong diagnosis sends the plumber to the wrong joint, and a confident one makes them less likely to check the others. The description with the gap in it is more useful than the story without one.`,
          `Two habits. When you find water, write the surface, the time, the size, and what happened just beforehand, and photograph it from where you are standing. And when you feel the cause forming in your head, write it as a possibility at the end of the report, never as the first line.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Where water was seen',
        alt: 'A sink cabinet shows the sink above a drain bend, a wet patch on the left floor, and a photograph taken from the open front.',
        caption: `Find the wet patch on the left floor first; that is the marble in the corner, the one thing actually observed. Then notice that the drain bend sits to the right of it, not above it, and that no arrow connects the two. The single arrow runs from the eye at the open front to the patch and marks where the photograph was taken, not a route the water took. Front-view schematic of the report.`,
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
        `Open one sink cabinet you can see into from outside and look without reaching in. If anything electrical is wet or the space is awkward, use the diagram instead; the exercise is the writing, not the crawling.`,
        `Write the exact surface and what you can see on it: wet, stained, or dry. Do not write the name of a part that has failed, because you have seen a surface, not a failure.`,
        `Add when you noticed it and what ordinary activity came just before, such as washing up or the dishwasher draining. Do not run water to recreate it; a report does not need a second puddle.`,
        `Save the maintenance contact into your phone. If what you found is real and active, send the report now. If it is practice, label the note fictional so it never gets sent by mistake.`,
      ],
      notice: `Your report tells another person where to look, when the water appeared, and what remains unknown, and it would send a plumber to the right cabinet without telling them which joint to blame.`,
      troubleshooting: `If your note says only leaking sink, add a surface and a date; leaking is a diagnosis and sink is a room. If taking a photograph means reaching into the cabinet or near a socket, skip the photograph. The words are enough.`,
    },
    recall: {
      prompt: 'A stain appears below a bathroom window after rain. How would you report it without declaring a roof leak?',
      answer: `Write the marble, not the drop. Name the wall and where on it, say the stain appeared below the bathroom window about a hand-width down, give the date, and note that it followed heavy rain overnight. Describe what the surface is like now: damp to the touch or dry with a tide mark. Photograph it from where you stand. Then, if you want, add one line at the end: possibly related to the rain, cause not known. The roof is one route water could have taken; so is the window seal, the gutter, or the wall itself. A report that opens with roof leak sends someone up a ladder to check a roof that may be fine, while the window frame goes unexamined.`,
      hint: 'Keep where it appeared separate from where it started.',
    },
    quiz: {
      question: 'A wet cabinet is dry the next morning. What belongs in the follow-up?',
      options: ['The leak is fixed because the surface dried', 'The drain must leak only at night', 'It is dry now; retain the earlier photo and timing'],
      correctIndex: 2,
      explanation: `Reporting that it is dry now while keeping the earlier photo and timing adds a new observation without throwing away the first one, which is exactly what an intermittent leak needs to be found. Saying the leak is fixed because the surface dried confuses the marble leaving the corner with nobody dropping it; nothing was repaired. Saying the drain must leak only at night invents a schedule and a culprit from a single wet evening and a single dry morning.`,
    },
    takeaway: `Water that has collected is a marble that rolled to the lowest corner, so report the surface, the time, the size, and what happened just before, photograph it from where you safely stand, keep a dry morning as another observation rather than a fix, and leave the route the water took as the one line you write last and mark as unknown.`,
    sourceNote: 'EPA guidance supports prompt leak reporting and moisture control. This exercise is observation, not plumbing diagnosis or mold cleanup.',
  },
  {
    id: 'life-003',
    title: 'Keep the dryer air path clear without servicing it',
    outcome: `Explain what a dryer's lint screen does for the flow of air, do the one piece of care the manual allows you to do, and know which signs mean stop and report rather than run it again.`,
    scene: 'A shared laundry dryer has a removable lint screen beside its door.',
    sections: [
      {
        title: 'Before the next load',
        paragraphs: [
          `You carry your washing down to the shared laundry room and open the dryer. The last person has left a grey felt of fluff across the lint screen, thick enough to peel off in one sheet. It looks like untidiness, the laundry-room equivalent of not wiping the counter. You could ignore it and start your load.`,
          `The screen is not a tidiness feature. It sits in the path the air takes through the machine, and the fluff on it is in that path too. Before you pull anything out of an unfamiliar dryer, find the instructions for this exact model. Shared laundries usually have them posted or in a folder, and the manufacturer's manual is online. One more thing a shared building should have, even if the person is not standing there. Someone responsible for the parts of the machine that users are not meant to touch.`,
        ],
      },
      {
        title: 'Warm air must carry moisture away',
        paragraphs: [
          `A vacuum cleaner with a full bag loses suction. The motor is working as hard as ever. The air just cannot get through the packed dust, so it pulls less, runs hotter, and the room stays dirty. You empty the bag and the suction comes back. But if there is a sock stuck in the hose, the empty bag changes nothing. The blockage was never in the bag.`,
          `A vented dryer is a vacuum cleaner for water. The drum tumbles your clothes in warm air. Water evaporates from the fabric into that air, and the moist air has to leave through the lint screen and out along the exhaust duct. Fibres shed by the clothes are caught by the screen, which is the bag. A felt of fluff on it narrows the path. Less air gets through, moisture is removed more slowly, and the machine runs hotter than it should. That heat, next to a sheet of dry lint, is why dryers appear in fire statistics. Cleaning the screen restores the airflow the screen was blocking. It does not prove the duct behind the wall is clear. The screen cannot catch every fibre and some always get past it, like the sock in the hose. The drawing in this lesson shows a vented dryer. Condenser and heat-pump dryers handle moisture differently inside, so check which kind you are standing in front of.`,
        ],
      },
      {
        title: 'Finish the permitted task',
        paragraphs: [
          `For a model whose manual says the screen is user-removable, the routine is short. Slide it out. Clear the lint off by hand or as the manual says. Slide it back until it seats properly, before you press start. The last step is the one people skip. A clean screen sitting on top of the machine has not finished the job. The dryer is now running with no bag at all, and fibres go straight into the duct. Never run a cycle without the screen. Never swap a damaged one for a piece of mesh or a sock stretched over the frame.`,
          `Then watch for the sign that something beyond the screen is wrong. The same size of load suddenly takes much longer to dry. The machine is hotter to the touch than usual. It stops partway. That is the sock in the hose, and running another cycle to see does not diagnose it. Stop using the machine and report the change through whatever route the building uses. Pulling the dryer out from the wall, disconnecting the duct, or opening any panel with a screw in it is service work. It is not yours to do, and this lesson stops at the screen.`,
        ],
      },
      {
        title: 'Why the screen looks like housekeeping',
        paragraphs: [
          `Lint is soft and grey and lands in a tray, so it reads as dust rather than as a blockage. Nobody feels the airflow drop. The dryer still spins and still gets warm, and warm feels like working. The cost is hidden in longer cycles and higher heat until, one day, it is not hidden at all.`,
          `Two habits. Treat the lint screen as part of the air path and clear it before every load, finishing by seating it back in place. And when drying time or heat changes with no change in the load, stop and report rather than running the machine again to check.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A vented dryer air path',
        alt: 'Moist air moves from the clothes drum through the lint screen toward the exhaust duct.',
        caption: `Follow the arrows left to right: moist air leaves the drum, passes through the lint screen, and continues into the exhaust path. The middle box is the vacuum bag, the only part you touch. The right-hand box is the hose, where a blockage can hide behind a perfectly clean screen; the drawing shows it exists, not that you should disconnect it. Simplified vented model.`,
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
        `Identify the model of the dryer you use from its front label or the posted instructions. If you do not use a dryer, pick any model and work from its online manual; the steps are the same.`,
        `Find the manual's section on the lint screen: whether it is user-removable, when to clean it, how to clean it, and how to tell it is seated correctly when you put it back. Also check whether the dryer is vented, condenser, or heat-pump.`,
        `Write a short user-care note with those steps in order, ending with refit the screen before starting. Include any shutdown instruction the manual gives. Do not operate or take apart the machine for this exercise.`,
        `Add the name or number of whoever is responsible for faults in this building, and write down the two signs that mean call them: a damaged screen, and a sudden change in drying time or heat.`,
      ],
      notice: `Your note ends with the screen refitted, not just cleaned, and it names a separate route for the problems that live behind the screen, where you are not meant to go.`,
      troubleshooting: `If the diagram or manual does not match the machine in front of you, stop and check the model; a condenser dryer's instructions are different and the wrong ones can send you looking for a duct that is not there. If the manual says the screen is not user-removable, your note says report instead of clean.`,
    },
    recall: {
      prompt: 'A shared dryer takes longer even though its lint screen looks clean. Does that justify another cycle?',
      answer: `No. A clean screen is an empty vacuum bag, and the suction is still gone, which means the problem is somewhere you cannot see: the duct, the vent flap outside, or the machine itself. You have checked one part of the air path and found it clear; you have not checked the rest, and a longer cycle is the only sign you will get that the rest is blocked. Running the load again to see whether it was a one-off adds heat to a machine that is already struggling to move air, which is the exact combination that starts fires. Stop, take your damp clothes out, and report the change in drying time to the building's maintenance contact so someone with the right access can look at the sock in the hose.`,
      hint: 'Which parts of the path have you actually checked?',
    },
    quiz: {
      question: 'The screen is torn but the dryer still starts. Which response fits routine-care boundaries?',
      options: ['Leave it unused and request the correct replacement or service', 'Run a lighter load to compensate', 'Remove the screen so the tear cannot catch clothes'],
      correctIndex: 0,
      explanation: `Leaving the dryer unused and asking for the correct replacement keeps you inside the one job you are allowed to do and hands the rest to the person who can do it; a torn bag lets dust into the hose with every load. Running a lighter load changes how much water goes in and does nothing about the fibres going past the tear. Removing the screen altogether is running the vacuum with no bag at all, which sends every fibre straight into the duct that nobody is checking.`,
    },
    takeaway: `A dryer is a vacuum cleaner for water and the lint screen is its bag: clear it before every load and seat it back in place before you press start, treat a clean screen as proof of nothing beyond the screen, and when drying time or heat changes with the same load, stop and report rather than running it again, because the blockage you cannot see is the one that matters.`,
    sourceNote: 'U.S. Fire Administration guidance supports appliance fire prevention. Follow the dryer manual; this is not duct-cleaning or electrical-repair instruction.',
  },
  {
    id: 'life-004',
    title: 'Follow bathroom moisture from air to glass',
    outcome: `Explain why a bathroom window keeps getting wet after showers, tell apart the action that removes water from the one that removes moisture, and know when to report rather than keep wiping.`,
    scene: 'A bathroom window becomes wet after showers while towels block the extractor grille.',
    sections: [
      {
        title: 'The window is wet again',
        paragraphs: [
          `Every morning after your shower, the bathroom window is running with water. You wipe it with the hand towel, and the next morning it is wet again. It has started to feel like a chore that will never end. You are beginning to wonder whether the window is leaking, and whether that dark speckle in the corner of the frame is something to worry about.`,
          `Look at the room for a moment instead of the glass. The shower pours warm vapour into the air. The window is the coldest surface in the room. And the extractor fan grille on the wall has a bath towel hanging over it, because that is the handiest place to dry it. Wiping deals with the water that is already on the glass. It does nothing about where the water is coming from or where it is supposed to go. Those three observations are pointing at the second question.`,
        ],
      },
      {
        title: 'Cooling turns vapour into droplets',
        paragraphs: [
          `A cold can of drink on a summer afternoon beads with water within a minute of coming out of the fridge. The can is not leaking. The air around it holds water as invisible vapour. When that air touches the cold metal it cools until it cannot hold all of its water any more, and some of it turns back into liquid on the surface. Warm the can up and the beads stop appearing, even though the air is exactly as damp.`,
          `Your bathroom window is the cold can. Air can carry a certain amount of water as vapour, and the warmer the air, the more it can hold. Shower steam loads the air up. Near the cold glass the air cools. It reaches the point where it is holding as much as it can, which is called saturation, and the excess comes out as droplets on the pane. That is condensation. It tells you two things: the air is wet and the glass is cold. It does not tell you the window leaks. The droplets by themselves do not mean there is mould or a health problem. Now the extractor. Its job is to move the wet air out of the room through a duct before it ever reaches the glass. A towel over the grille is a hand over the mouth of that duct. Wiping the glass removes liquid that has already formed. Running the extractor with its grille clear removes vapour from the room. They act on different stages of the same process.`,
        ],
      },
      {
        title: 'Observe the pattern without opening walls',
        paragraphs: [
          `Try the ordinary fix first. Hang the towel on the rail or over the door instead, if that is safe and practical, so the grille is open. Use the extractor the way its instructions say during and after showers. Many run on a timer with the light. Then simply notice whether the window still streams over the next week. You are not running an experiment with a humidity meter. You are checking whether removing the hand from the duct changes what you see on the glass.`,
          `If the window stays wet, or a patch of wall stays damp, report it to maintenance with the pattern you have noticed: after showers, every morning, this surface. If instead the dampness turns up after rain rather than after showers, that is a different pattern and a different report. Rain points at the building rather than the air inside it. Several causes can be true at once. Whatever you find, do not paint over a speckled patch. Do not take the vent cover off to look inside. Do not peel wallpaper to check, and do not spray a cleaning chemical on a patch to test a theory. The useful product of this week is a clear moisture history and a sensible maintenance request.`,
        ],
      },
      {
        title: 'Why wiping feels like the fix',
        paragraphs: [
          `Wiping produces an immediate dry window, and an immediate result feels like a solved problem. The towel over the grille, meanwhile, is invisible as a cause. It has always been there and it is only a towel. So the cycle continues: steam, cold glass, wet window, wipe, repeat. The one thing that would change it hangs quietly over the fan.`,
          `Two habits. When a surface keeps getting wet, ask where the moisture is coming from and where it is meant to leave, before you reach for the cloth. And keep the extractor grille clear as a matter of routine, because the fan can only move air it can reach.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two routes for bathroom moisture',
        alt: 'Water vapour from a shower can condense at a cold window or leave through an unobstructed extractor.',
        caption: `Start at the shower in the bottom left and follow both arrows. One goes up to the cold window, where vapour becomes droplets like beads on a cold drink can. The other goes across to the extractor grille, the intended way out. Then look at the bottom right: the towel is on its rail, not on the grille, which is the one change this lesson asks you to make. Schematic, not measured airflow.`,
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
        `Standing safely on the floor, find the extractor in your bathroom or kitchen and work out how it is switched on: with the light, a pull cord, or a separate switch. Do not take the cover off; you are identifying the way out for wet air, not inspecting it.`,
        `Check whether anything ordinary is blocking the grille: a towel, a shelf, a plant. Move it only if it is a loose belonging you can safely reach. A fitted cover or a stiff flap stays where it is.`,
        `Write down one moisture observation from your own home with the surface and what happened just before it, or use the shower example. Wet window, every morning, after showers is a pattern; wet window is not.`,
        `Write the maintenance contact and the three things you would put in a report if the dampness persists: the surface, the timing, and whether it follows showers or rain.`,
      ],
      notice: `You can say which of your actions removes water already on the glass and which removes moisture from the room, and you know that only the second one changes next week.`,
      troubleshooting: `If dampness keeps returning with the grille clear and the fan running, do not conclude ventilation was the whole story; write down the pattern and ask for an investigation. If you cannot tell whether the fan is working, say so in the report rather than opening it to find out.`,
    },
    recall: {
      prompt: 'A cold bedroom window is wet behind a closed curtain. What can you conclude, and what remains uncertain?',
      answer: `You can conclude that the glass is cold and the air behind the curtain is damp enough to bead on it, exactly like the drink can; a closed curtain traps a pocket of room air against the coldest surface in the room and stops it mixing with warmer air. That is condensation, and it is plausible without any leak. What you cannot conclude is where the moisture is coming from, whether drying clothes on the radiator, breathing overnight, or something in the building, and you cannot conclude from droplets alone that there is a leak or a mould problem. Record when it happens and which pane, open the curtain and the window for a while in the morning if that is practical, and if it persists over a couple of weeks, ask for advice with the pattern written down.`,
      hint: 'Describe the phase change without treating it as a full building diagnosis.',
    },
    quiz: {
      question: 'Bathroom droplets return despite wiping. Which next step addresses a different part of the process?',
      options: ['Use a more absorbent cloth for the same wiping', 'Check intended extraction and report recurring moisture', 'Cover the glass-side wall before it stains'],
      correctIndex: 1,
      explanation: `Checking that the extractor is clear and running, and reporting moisture that keeps coming back, acts on the vapour before it reaches the glass, which is the stage wiping never touches. A more absorbent cloth is still wiping; it removes beads from the can faster and leaves the air exactly as wet. Covering the wall hides a surface from view and does nothing about the moisture that will keep arriving behind the cover.`,
    },
    takeaway: `A streaming bathroom window is a cold drink can on a warm day, not a leak: the air is wet and the glass is cold, so clear the extractor grille and run the fan to take the vapour out before it reaches the pane, treat wiping as removing water that has already formed, write down the pattern of when and where the damp appears, and report what persists instead of painting, peeling, or spraying to test a theory.`,
    sourceNote: 'EPA moisture guidance was checked for this lesson. The diagram is explanatory, not a mold diagnosis or cleanup procedure.',
  },
  {
    id: 'life-005',
    title: 'Give each maintenance reminder its real trigger',
    outcome: `Turn a vague recurring chore into one reminder that says what actually makes the task due, where the instruction came from, who does it, and what honestly happened when it was done.`,
    scene: 'A vacuum dust container reaches its marked fill line before a generic monthly reminder.',
    sections: [
      {
        title: 'Monthly is not a specification',
        paragraphs: [
          `Your calendar has a repeating entry: maintain vacuum, first Sunday of the month. It has been there for a year and it feels responsible. Then on a Wednesday you clear up after unpacking a delivery, half a box of polystyrene crumbs, and the dust container fills to its marked line. Sunday is four days away.`,
          `If you wait for Sunday, the calendar has quietly outranked the instructions printed on the machine. The reverse happens too: the Sunday reminder arrives when the container is a quarter full and you empty it anyway, or it tells you to wash a filter the manual says must stay dry. A date is only useful when it points at the right task and the right condition. Monthly was never a specification. It was a guess at how often the real trigger would fire, and the real trigger just fired on a Wednesday.`,
        ],
      },
      {
        title: 'Three kinds of trigger',
        paragraphs: [
          `A car has three different kinds of maintenance rule and nobody confuses them. You wash the windscreen when you cannot see through it: a condition. You check the oil after a long trip: a use. You get the service done at the mileage or month the manufacturer printed in the book: an interval. Washing the windscreen on a schedule, clear or filthy, would be odd. Waiting for the service date to top up oil that is already low would be worse.`,
          `Home appliances have the same three kinds, and the mistake is flattening them all into monthly. A use trigger follows an event: after every load, after each use. A condition trigger responds to something you can see: dust at the fill line, a light on the panel, a visibly worn seal. An interval trigger follows elapsed time the manufacturer specified, which is their estimate of when the condition will be reached under typical use. The condition is the one that matters physically. Material that has built up past the designed capacity blocks a path or overloads a part the machine was not built to cope with. A reminder on your phone cannot measure that. Its only job is to make you look at the right thing at a sensible moment, not to invent a new maintenance rule the manufacturer never wrote.`,
        ],
      },
      {
        title: 'Write an action that can be closed honestly',
        paragraphs: [
          `Take a fictional vacuum whose manual says: empty the dust container when contents reach the marked line, after switching off. The useful record has five parts. Task: inspect the visible dust level after use. Trigger: at the marked line. Action: empty following the shutdown steps in the manual. Owner: me. Source: dust-container section, page such-and-such. That replaces maintain vacuum on Sunday with something that tells you when to look, what counts as due, and what to do. Your real model will say something different, so copy its wording, not this example.`,
          `Then record what actually happened, in words that mean something. Inspected, below the line is a true entry, and it is not the same as emptied. Emptied is not the same as seal looks damaged, replacement requested. And replacement requested is a long way from repaired. The temptation is to swipe the notification away and let the green tick stand for all of them. A record that keeps unfinished service visible is more useful than one that awards a tick for having read the reminder.`,
        ],
      },
      {
        title: 'Why monthly wins by default',
        paragraphs: [
          `Calendars offer monthly as a button, and manuals offer conditions as sentences, so the button wins. The monthly entry feels like diligence and costs nothing to set. The cost arrives when the fill line is passed on a Wednesday and ignored because it is not Sunday, or when a dry-only filter gets washed because the reminder said maintain and washing felt like maintaining.`,
          `Two habits. For each recurring chore, find the manufacturer's sentence and write the trigger it actually names, whether a use, a condition, or an interval, instead of a convenient month. And when you close a reminder, write the result as an observation or an action, so inspected and not due can never be mistaken for done.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'From an observed fill line to a record',
        alt: 'A vacuum care record checks the dust level, follows the specified emptying procedure when due, and records the actual result.',
        caption: `Read the second box first, because it holds the real trigger, the marked line, in place of a guessed month; this is washing the windscreen when you cannot see, not on a schedule. The first box is simply when you look. The last box has three possible honest entries and only one of them is emptied. Fictional manual example; use your own model's wording.`,
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
        `Pick one routine user-care task from a manual you have, such as a dust container, a filter, or a seal. Read its warnings, then decide which kind of trigger the manual gives it: after use, when you see something, or after a stated interval.`,
        `Write the task and its trigger in one line, in the manual's words. If the manual says every three months, keep three months; rounding it to monthly is the calendar outranking the book again.`,
        `Add the manual section and the person who does it. If the manual says the part is not for users, the owner line names the service contact instead of you.`,
        `Draft the sentence you will write when you close the reminder, such as inspected and below fill line or emptied or seal worn, service requested. Writing it in advance makes a bare tick impossible.`,
      ],
      notice: `Your reminder tells you how to decide whether anything is due, and your completion entry says what you saw or did, so inspected, not due can never masquerade as done.`,
      troubleshooting: `If the reminder still says service appliance, it has no trigger; narrow it to one named component and the task the manual gives for it. If you cannot find a trigger in the manual at all, write check manual as the task and do not invent one.`,
    },
    recall: {
      prompt: 'A manual says inspect a door seal regularly but gives no replacement date. Should you schedule a new seal every month?',
      answer: `No. The manual has given you a condition trigger with a loose interval wrapped round it: look at the seal from time to time, and act on what you see. Turning that into replace monthly invents a rule the manufacturer never wrote and throws away seals that are fine, like changing a windscreen because the calendar said so rather than because you could not see through it. Schedule the inspection at a sensible interval, perhaps when you clean the appliance, and record its condition each time: seal intact, flexible, no gaps. If one day you see cracking or a gap, that observation is the trigger, and the honest entry becomes seal damaged, replacement requested. Looking for wear and assuming wear are different tasks with different costs.`,
      hint: 'Distinguish looking for wear from assuming that wear has occurred.',
    },
    quiz: {
      question: 'A maintenance reminder was dismissed, but a damaged part is awaiting service. What status fits?',
      options: ['Completed because the reminder was reviewed', 'Not due because someone else will repair it', 'Inspection complete; service still pending'],
      correctIndex: 2,
      explanation: `Inspection complete, service still pending records the two separate events truthfully: you looked, you found damage, and the repair has not happened, so the open item stays visible. Completed because the reminder was reviewed awards the tick for reading a notification, which is the exact confusion the lesson warns about. Not due because someone else will repair it hides a known fault behind a status that means nothing needs doing.`,
    },
    takeaway: `Treat a home appliance like a car with three kinds of rule, condition, use, and interval, and write each reminder in the manufacturer's words with its real trigger, its source, and its owner, then close it with what you saw or did rather than a tick, because monthly is a guess at the trigger and a dismissed notification is not a repaired seal.`,
    sourceNote: 'The maintenance sources inform the checklist. The vacuum instruction is fictional, not a universal fill-level or cleaning specification.',
  },
  {
    id: 'life-006',
    title: 'Plan an errand route around the stop that can close',
    outcome: `Order a run of errands by checking which stop closes first, how long it takes to get there, and what you must carry to each counter, instead of by distance or by which one you fancy.`,
    scene: 'A walk links a library return, a trouser collection, and a parcel locker.',
    sections: [
      {
        title: 'Nearby does not mean available',
        paragraphs: [
          `You finish work at half past four with three things to do on the way home. Return a library book, collect the trousers you had taken up, and pick up a parcel from a locker. They are all within a fifteen-minute walk of each other. You are most excited about the parcel, so you head for the locker first. By the time you reach the library the lights are off behind the counter. The book goes back in your bag for another day.`,
          `A list ordered by enthusiasm sent you to the parcel. A list ordered by distance might have done the same. Neither list noticed the one fact that mattered. The library counter shuts at five, the tailor at six, and the locker is open until late. Grouping errands by place is a good instinct. But a route that looks tidy on the map is not evidence that each service will still be open when your feet arrive.`,
        ],
      },
      {
        title: 'A route has time and item constraints',
        paragraphs: [
          `Packing a car boot for a long drive, you put the thing you need first where you can reach it. The thing you need at the end goes in the back. You would never pack by size or by how fond you are of each bag. The order is dictated by when each item becomes necessary. Getting it wrong means unpacking the whole boot at a service station.`,
          `Each errand stop has three things attached to it, and the route has to respect all three. A place. A window of time when the service is actually available, which can be shorter than the building's own hours. And something you have to bring. The library needs the book. The tailor needs the collection ticket or reference. The locker needs its code and a pick-up window that has not expired. Forgetting any one of these makes a perfectly efficient walk pointless. The earliest-closing stop is a constraint on the route. It goes early when travel and queuing would otherwise make you miss it. That does not make it automatically first on every trip. Some days it is the only stop you can reach in time and the rest go another day.`,
        ],
      },
      {
        title: 'Compare two orders before leaving',
        paragraphs: [
          `Put rough numbers on the fictional example. Library closes at 17:00, tailor at 18:00, locker open late. From work, going library first gets you to the counter at about 16:50. Going locker first, then library, gets you there at about 17:05. The second order is slightly shorter in total walking and it fails outright. Five minutes past five is a closed counter. Those times are planning estimates you worked out at your desk, not live travel data, and that is fine. Their job is to tell the two orders apart.`,
          `So choose the order that reaches the least flexible stop in time: library, then tailor, then locker. Before you leave, gather the book, the tailor's reference, and the locker code. Give yourself some slack for a slow lift or a queue. If the library genuinely cannot be reached by five, take it off today's list and plan it on its own. Do not turn a missed optional stop into a sprint. Do not add a purchase to the walk to make the trip feel worthwhile.`,
        ],
      },
      {
        title: 'Why the map wins the argument',
        paragraphs: [
          `Distance is visible and hours are not. A map shows three pins close together and the eye draws the shortest loop. Closing times live on three different websites nobody has opened. Enthusiasm is also visible, in the sense that you can feel it. So the parcel goes first, and the library closes, and the book comes home again.`,
          `Two habits. Before any multi-stop trip, write the closing time of the actual service beside each stop, not the building, and the item you must carry there. And pick the order by testing whether it reaches the earliest-closing stop in time. Only then trim for distance.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'One feasible walking order',
        alt: 'A route goes from home to the library, then the tailor, then a parcel locker.',
        caption: `Read the arrows in order and check the detail on the library pin first: arrive 16:50, closes 17:00. That ten-minute margin is why the library is the first stop and not the parcel, however tempting the parcel is. Then notice the home pin's detail, the book and references to carry; the route fails without them even if every time works. Fictional map, not to scale; real hours and travel still need checking.`,
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
        `Write three stops, real or the example ones, each with its location and the thing you must have in your hand at that counter. Keep locker codes and order numbers off any list other people can see.`,
        `Look up the hours of the actual service at each stop, the returns desk rather than the shop, and any collection expiry. Write estimate next to anything you worked out and unknown next to anything you could not find; do not fill a gap with a plausible time.`,
        `Work out an order that reaches the earliest-closing stop with a few minutes to spare, then gather the three items. If one stop cannot be reached in time, cross it off today and give it its own trip rather than running for it.`,
      ],
      notice: `You leave the house with a route and a departure checklist in your pocket, not three task names and a hope. The boot is packed in the order you will need things.`,
      troubleshooting: `If every stop seems urgent, check the real deadlines; a parcel locker often holds items for days and a library fine is small. If you cannot make the batch work, do the one that matters today. Errands do not have to wait for a perfect loop.`,
    },
    recall: {
      prompt: 'A shop is open late, but its returns counter closes early. Where does a return belong in your route?',
      answer: `Plan around the returns counter's hours, not the shop's, because the thing you need is a service, not a way through the door. If the counter closes at five and the shop at nine, the return is an early-closing stop and goes where travel and queuing still get you there before five, probably near the start of the loop. If you cannot reach it by then, the late-opening shop is no help at all; you would be standing in an open building with a closed counter, which is the library all over again. In that case the return gets its own trip, and the rest of the errands go ahead without it. Check the counter's hours separately and write them beside the stop, since the building's sign on the door will tell you the wrong number.`,
      hint: 'You need a service, not merely entry to a building.',
    },
    quiz: {
      question: 'The shortest route reaches a collection counter after closing. Which comparison matters next?',
      options: ['Whether another order meets the counter hours with the required items', 'Whether the shortest route stays within your walking-distance budget', 'Whether returning home between stops makes the items easier to carry'],
      correctIndex: 0,
      explanation: `Testing whether a different order reaches the counter before it closes, with the item you need in hand, is the only comparison that can turn a failed route into a working one; feasibility comes before distance. Staying within a walking budget is a question about a route that already fails, since a short walk to a closed counter is still a wasted walk. Going home between stops to lighten the load adds time to a plan whose problem is time.`,
    },
    takeaway: `Pack an errand route like a car boot, in the order you will need things: write the real closing time of each service and the item you must carry beside each stop, choose an order that reaches the earliest-closing counter with time to spare, and only then trim for distance, because three pins close together on a map say nothing about which one has already turned its lights off.`,
    sourceNote: 'This route-planning checklist is original. The inherited task reference explains list tools, not a measured time-saving effect.',
  },
  {
    id: 'life-007',
    title: 'Put preparation before the expiry reminder',
    outcome: `Split an admin deadline into three entries, the date the result is needed, the thing that must be in place first, and the one action you can do today, so the reminder arrives with time to act.`,
    scene: 'A resident parking permit needs a current address document before renewal can be submitted.',
    sections: [
      {
        title: 'Renew permit is not a next step',
        paragraphs: [
          `Your resident parking permit runs out at the end of next month. You open your calendar, type renew permit on the last day, and feel the small relief of a thing handled. Five weeks later the reminder pops up. You open the renewal form. Halfway down it asks you to upload a current proof of address, dated within the last three months. You have a utility bill from February and a tenancy agreement from two years ago. Neither qualifies, and the permit expires tonight.`,
          `You did not forget the date. You stored the date as if it were the whole task, as if writing renew permit on the 30th somehow also described everything that had to happen before the 30th. A deadline tells you when the result is needed. It says nothing about what you could be doing today, and today was the useful day.`,
        ],
      },
      {
        title: 'Find the step that unlocks the next one',
        paragraphs: [
          `A birthday cake has a deadline, the party at four, but the cake is not the first step and neither is the party. The sponge has to cool before you can ice it. You have to bake it before it can cool. You have to check you have eggs before you can bake. Anyone who writes make cake at three o'clock discovers the egg problem at three o'clock. The person who checks the eggs on the way home the night before is not more organised; they just asked what the cake depends on.`,
          `A dependency is something one step needs from an earlier step before it can start. Submitting the renewal depends on having an accepted document. Having an accepted document depends on knowing which documents the council currently accepts. Knowing that depends on reading their page, not on remembering what a friend used last year, because accepted formats and processing arrangements change. So the chain runs backwards from the deadline: read the requirements, get an accepted document, submit. The first link is the only one you can do right now, and it costs ten minutes. While you are on the issuer's page, note any published processing time, and write it down as an estimate. If there is no published time, write unknown and ask through their contact route rather than filling the gap with a comforting guess.`,
        ],
      },
      {
        title: 'Make three different entries',
        paragraphs: [
          `For the fictional permit, write three things and keep them apart even if they share a page. Deadline: 30 November, permit expires. Dependency: one accepted current address document must be in hand before submitting. First action: read the issuer's address-evidence requirements, today. Three entries, three different questions. When is the result due? What must exist first? What can I finish now?`,
          `The first action gets replaced as soon as it is done. Suppose you read the requirements and your bank statement from last month is on the accepted list. The next action becomes download that statement and submit. Suppose instead nothing you have qualifies. The next action becomes request a council tax letter, and the processing estimate for that letter tells you how early the request must go in. The entry you never rely on alone is renew permit on the 30th. A reminder set only on the expiry date assumes the preparation will happen by itself, and preparation does not.`,
        ],
      },
      {
        title: 'Why the date feels like the task',
        paragraphs: [
          `Writing the deadline down produces relief, and relief feels like progress. The dependency, meanwhile, is invisible until you open the form, and the form does not get opened until the reminder fires. So the design of the reminder guarantees that the hidden requirement is discovered on the one day there is no time to meet it. The egg problem always surfaces at three o'clock.`,
          `Two habits. For any admin task with a date, write the deadline, the dependency, and the first doable action as three separate lines before you close the calendar. And set a second reminder a sensible lead time before the deadline whose job is only to ask: is the dependency in hand yet?`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'What renewal depends on',
        alt: 'The permit renewal needs current requirements, accepted evidence, and submission before the stated expiry.',
        caption: `Read the boxes from left to right as the cake chain run forwards: check the recipe, get the ingredients, bake, serve by four. The first box is the only one you can do today and it takes ten minutes. The fourth box is the date most people write down first and alone. The arrows are dependencies, not processing times; nothing here promises how long any step takes. Fictional permit.`,
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
        `Choose one admin task with a date that is not yet urgent, or use the permit. Write the final date on its own line, labelled deadline, and nothing else on that line. If it is an example, mark the date fictional.`,
        `Open the issuer's current requirements, not a friend's memory of them, and find one thing that must exist before you can submit. Write it on a second line labelled dependency.`,
        `Write the first action you could finish today, including where the information lives, on a third line. Check it is something you can actually complete, like read the evidence page, not something vague like sort it out.`,
        `Pick a check date before the deadline that allows for any published processing time plus some slack, and write what the check will ask: is the dependency in hand? If no processing time is published, write unknown and add asking as a step.`,
      ],
      notice: `You can start one concrete action this evening without having worked out the whole renewal, and your calendar now has a reminder that fires while there is still time to do something about it.`,
      troubleshooting: `If your first action says sort paperwork or deal with permit, it is not an action yet; name the exact page to read or document to find. If you cannot find a dependency, you have probably not read the requirements, and reading them is your first action.`,
    },
    recall: {
      prompt: 'A workshop application needs a portfolio link before the closing date. What is the deadline, and what might be the next action?',
      answer: `The closing date is the deadline, the party at four. The portfolio link is the dependency, and it has its own dependency hiding behind it: you cannot build or choose a portfolio until you know what format and content the workshop asks for, how many pieces, what file types, whether a public link is required. So the first action is not upload portfolio and it is not even assemble portfolio. It is read the portfolio requirements on the application page. Once you have read them, the next action replaces that one: either your existing work meets the spec and you gather the link, or it does not and you plan what to make and how long that takes. Writing apply on the closing date alone would hand you the egg problem on the last day.`,
      hint: 'Do not confuse the final upload with discovering what the upload must contain.',
    },
    quiz: {
      question: 'You have a renewal deadline but do not know which evidence is accepted. What should the next reminder say?',
      options: ['Submit the form on the expiry date', 'Collect every old document you can find', 'Check the issuer\'s current evidence requirements'],
      correctIndex: 2,
      explanation: `Checking the issuer's current requirements is the first link in the chain and the only one you can do without knowing anything else; it tells you which documents are worth having. Submitting on the expiry date is the three o'clock cake, a reminder that fires when there is no time left to fix what the form asks for. Collecting every old document gathers ingredients without reading the recipe, and most of them will turn out not to count.`,
    },
    takeaway: `A deadline is the party at four, not the first step: for any admin task write the date, the thing that must exist first, and the one action you can finish today as three separate lines, then set a reminder early enough to ask whether the dependency is in hand, because the hidden requirement always surfaces on the day the form is opened and the form is opened when the reminder fires.`,
    sourceNote: 'The permit is fictional. This planning method does not establish local renewal requirements, processing guarantees, or rights.',
  },
  {
    id: 'life-008',
    title: 'A return ends at the refund, not the parcel counter',
    outcome: `Treat a return as four separate events, authorised, packed, handed over, refunded, keep the evidence that proves each one, and leave the task open until the money is actually back.`,
    scene: 'A pair of unworn boots must be returned with its accessories and seller authorisation.',
    sections: [
      {
        title: 'The box by the door',
        paragraphs: [
          `The boots you ordered online are half a size too small. You put them back in their box, put the box by the front door so you will remember, and get on with your week. The box becomes part of the hallway. Every time you pass it you think I must send those back. Every time, the thought feels like enough.`,
          `The box is doing one job, reminding you that a task exists. It cannot tell you whether this seller wants you to request a returns authorisation first. It cannot tell you whether the spare laces and the dust bag have to go back in the box. It does not know that the return window closes in fourteen days and nine have gone. If you pack it up on Saturday and read the instructions on Sunday, you may be standing at the counter with a sealed parcel that the seller will not accept. Start with the instructions for this purchase, not with what the last shop you returned something to wanted.`,
        ],
      },
      {
        title: 'The return has several states',
        paragraphs: [
          `Posting a letter has stages that everyone instinctively keeps apart. You have written it. You have put a stamp on it. You have dropped it in the box. It has arrived. The person has read it and replied. Nobody who has stamped a letter would say it has arrived. Nobody who has watched it drop into the box would say they have had a reply. The stamp is not the journey and the postbox is not the answer.`,
          `A return has the same shape, and the trap is collapsing it into a single tick called returned. Preparing, handing over, the seller receiving it, and the refund landing are four different events. Each has its own proof. A returns label is a stamp. It routes the parcel, and printing one proves nothing about whether the parcel has gone anywhere. A carrier receipt is the postbox. It proves you handed the parcel over, and nothing about whether the seller has agreed to pay you. The seller's refund confirmation is the reply, and even that is not the money. Only a line on your bank or card statement is the money. Match the evidence to the event. Instructions prove eligibility and cost. A note of what you packed proves contents. The tracking number proves handover. The refund email plus the statement line prove the end.`,
        ],
      },
      {
        title: 'Make one complete packet',
        paragraphs: [
          `For the fictional boots, read the seller's page first and write down what it says. Unworn, tags attached, original box, spare laces included, authorisation code requested through the account page, free label, fourteen days from delivery. Then gather exactly that: the pair, the laces, the dust bag, the printed authorisation, and packaging that will survive a van. Do not cut a tag or wear them to the corner shop before you have read the condition rules. That is where eligibility is lost. Keep the order number and the authorisation code in a private note, not on the kitchen whiteboard where visitors can read them.`,
          `At the counter, take the receipt and photograph it. Save the tracking reference into the same note. Then set yourself a check based on what the seller's page says about refund timing, something like refund within ten working days of receipt. If the date passes with no refund, the tracking reference and the delivery scan change your enquiry. It stops being where is my money. It becomes parcel delivered on this date under this reference, refund not yet received. Do not quote a legal refund deadline you have not looked up. Shop terms and statutory rights depend on where you are and what you bought.`,
        ],
      },
      {
        title: 'Why the counter feels like the end',
        paragraphs: [
          `Handing the parcel over is the only step that involves leaving the house. It comes with a receipt and a sense of relief, so the mind files the whole return under done. The refund is a non-event that happens, or fails to happen, silently, weeks later, in an account you are not watching. Returns that never get refunded are rarely refused. They are forgotten, by both sides.`,
          `Two habits. Before touching the item, read this seller's return rules and write down the condition, the accessories, the authorisation step, and the window. And after handover, save the tracking reference and set a refund check for the date the seller's own process implies. The task is not finished at the counter.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Four pieces of return evidence',
        alt: 'Return instructions, a packed pair of boots, carrier handover proof, and a refund record occur at different stages.',
        caption: `Read the four boxes as the stages of posting a letter: written, stamped, in the box, replied to. Each detail line names the one piece of evidence that proves that stage and no other. Then notice where most people stop: the third box, the carrier receipt. The fourth box is the only one that involves money, and it is checked against a statement, not an email. Example sequence, not a promised timetable.`,
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
        `Open the seller's return instructions before you touch the item and write down five things: condition rules, deadline, how to get authorisation, packaging requirements, and who pays for the return. Put a question mark beside anything the page does not answer.`,
        `List the item and every accessory that has to travel with it, using the seller's list rather than your memory of what was in the box. Gather them only if the return is real; for the example, the list is the exercise.`,
        `Make a place in your private note for the handover reference, and leave it empty until you have a carrier receipt in your hand. A printed label goes in a different field, because a stamp is not a postmark.`,
        `Write a refund follow-up with a date taken from the seller's stated process, and put the order reference in the note rather than on anything shared. The task stays open until a statement line matches the refund.`,
      ],
      notice: `Your checklist shows exactly which of the four stages you are at, and after the counter it still has an open item, because handing over the parcel was the postbox and not the reply.`,
      troubleshooting: `If the seller's page and the email they sent you disagree about the window or the label, ask them in writing before you send anything, and keep their answer with the return record. If you have already removed a tag, check the condition rules before assuming the return is lost; some sellers accept it and some do not.`,
    },
    recall: {
      prompt: 'Tracking says a returned lamp was delivered, but no refund is visible. What evidence and question belong in your enquiry?',
      answer: `You have reached the stage where the letter has arrived and no reply has come. The evidence for arrival is the tracking record showing delivery, with its date and reference, and the order number ties it to the lamp. Your question is about the stage that has not happened yet: the parcel under this reference was delivered on this date, your process says refunds are issued within so many days of receipt, and no refund has appeared on my statement as of today; can you confirm its status? That is specific enough to be answered. What you should not do is treat the delivery scan as proof you have been paid, since it proves the warehouse has the lamp and nothing more, and you should not invent a legal deadline. Quote the seller's own stated timing back to them.`,
      hint: 'Match the evidence to the event it actually confirms.',
    },
    quiz: {
      question: 'You printed a return label but have not dropped off the parcel. Which status is accurate?',
      options: ['Returned, because tracking now exists', 'Prepared for dispatch, with handover still pending', 'Refund pending, because the seller generated the label'],
      correctIndex: 1,
      explanation: `Prepared for dispatch with handover pending is exactly where a stamped, unposted letter sits: the label exists, the parcel is still in your hallway, and the carrier has nothing. Returned because tracking exists mistakes a label that will route the parcel for evidence that the parcel has moved. Refund pending because the seller generated the label skips three stages at once; the seller has agreed to accept a return, not received one, and certainly not paid for one.`,
    },
    takeaway: `A return is a letter with five stages, written, stamped, posted, received, answered, and it is only finished when the reply arrives as a line on your statement: read this seller's rules before touching the item, pack exactly what they list, keep the carrier receipt and tracking as proof of handover and nothing more, and set a refund check from the seller's own stated timing, because the box by the door and the receipt from the counter both feel like done and neither is.`,
    sourceNote: 'FTC shopping guidance supplies background. The boots packet is an original checklist; return rights and deadlines vary by jurisdiction.',
  },
  {
    id: 'life-009',
    title: 'Make running low a visible event',
    outcome: `Pick a reorder signal for a shared household supply that fires while there is still enough stock to cover the wait, carries the right size or part number, and lands on one list everyone can see.`,
    scene: 'Two housemates share bin liners stored in a working roll and one spare pack.',
    sections: [
      {
        title: 'Both people thought the other bought them',
        paragraphs: [
          `The kitchen bin is full and the roll of liners in the cupboard is a bare cardboard tube. One housemate says they mentioned it was getting low last week. The other says they did the shopping on Saturday and nobody told them. Both are right. Both are standing in a kitchen with no bin liners.`,
          `Two memories of two conversations did not add up to a purchase, because neither conversation said when to buy or which size fits this bin. What the kitchen needed was not a better memory but an event, something a person can see and act on without discussing it. Opening the last spare pack is that event. It is a moment that happens once, is visible to whoever is standing there, and arrives before the final liner has gone into the bin.`,
        ],
      },
      {
        title: 'Stock must cover the wait',
        paragraphs: [
          `A car's fuel light does not come on when the tank is empty. It comes on with a few litres left, enough to reach a petrol station. That margin is the whole design. A light that came on at zero would be a breakdown alarm, and a light that came on at half a tank would be ignored. The point where it fires is set by how far you might have to drive to fill up.`,
          `A reorder point works the same way. The signal has to fire while enough supply remains to cover the gap between noticing and restocking. If one pack of liners lasts through three or four shopping trips, then opening the last spare leaves plenty of margin. It is a sensible fuel light. If two more people move in and a pack now lasts four days, or if you switch to a delivery that takes a week, the same signal fires too late. There is no universal number of spare packs that every household should hold. The right margin depends on how fast you use them and how long replacing them takes. One more thing belongs on the signal: which liners. A capacity figure on the box tells you how many litres. It does not tell you whether the opening fits your bin or the drawstring is where you want it. Write down the dimensions or the product reference of a liner that fits, so the next shopper does not have to rediscover it in the aisle.`,
        ],
      },
      {
        title: 'Use one shelf position and one list',
        paragraphs: [
          `Give the cupboard two positions. The roll in use sits at the front. The spare pack sits behind it. When the front roll runs out, you reach for the spare, and the moment it moves forward the rear position is empty. That empty space is the fuel light. Whoever moved the spare adds bin liners to the shared list, with the saved specification, so the entry reads something like bin liners, 50 litre, drawstring, product code, rather than bags.`,
          `The second half of the system is the list itself. Before anyone buys, they check whether the item is already marked bought. After restocking, the new pack goes in the rear position, and the list entry is cleared. If both housemates keep arriving home with liners, the shelf signal is working and the list is not; the fix is in how purchases get marked, not in buying a third spare. Review the margin now and then against how fast you actually get through a pack, your budget, and how much cupboard you have.`,
        ],
      },
      {
        title: 'Why the empty roll surprises everyone',
        paragraphs: [
          `Running low is gradual and silent. Nobody notices a roll getting thinner, and when it is finally empty the discovery is sudden and blames the person nearest the bin. Conversations about it evaporate because they are not attached to anything you can see. The fuel light exists because drivers are no better at noticing a tank emptying than housemates are at noticing a roll.`,
          `Two habits. For any shared supply, choose one visible moment that means time to buy, and make sure that moment leaves enough stock to cover your usual restocking delay. And attach the exact specification to the list entry, so the signal tells the next shopper what to buy as well as when.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A shelf that shows the trigger',
        alt: 'A working roll sits at the front, a spare at the rear, and a shared list is updated when the spare moves forward.',
        caption: `Look at the rear position first: the spare pack sits there, and the arrow down to the working roll shows the one movement that empties it. That empty rear space is the fuel light. The second arrow runs from the same moment to the list, which is where the size and product code live. Top-view storage example.`,
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
        `Choose one supply you already use, such as liners, dishwasher tablets, or printer paper. Copy the size or product reference from its packaging into your list now, while the packaging is in front of you.`,
        `Count how much usable stock you have and estimate how long it lasts. Then choose a visible reorder event that leaves enough margin for your normal shop or delivery; opening the last pack, or reaching a marked line, are both fuel lights.`,
        `Give the spare a fixed place or put a reorder card where the stock sits, so the signal is in the cupboard and not in anyone's memory. Do not buy extra stock just to complete this exercise.`,
        `Agree with whoever shares the supply how the list shows that something has been bought, or if you live alone, use the same bought status for your own orders so you do not order twice.`,
      ],
      notice: `Another person opening your cupboard and your list could tell both when to order and exactly what to buy, without asking you or remembering a conversation.`,
      troubleshooting: `If you still run out, compare how fast you really use the supply with how long restocking really takes before you add more spares; the fuel light may simply be set too low. If duplicates keep arriving, the shelf is fine and the bought status is not being updated.`,
    },
    recall: {
      prompt: 'A compatible printer refill takes longer to arrive than it used to. How should you reconsider the reorder signal?',
      answer: `The distance to the petrol station just got longer, so the fuel light has to come on earlier. Work out how much printing you do between the signal firing and a new cartridge arriving under the new delivery time. If the current cartridge cannot cover that, move the signal forward: order when the printer first warns of low ink rather than when it stops, or keep one spare instead of none. What you should not do is react by ordering several backups, because cartridges have shelf lives and prices change, and the storage question is still real. Keep the exact model reference on the list so the longer wait is not made worse by a wrong cartridge arriving.`,
      hint: 'The signal needs to cover the delay, not just describe an empty shelf.',
    },
    quiz: {
      question: 'Both housemates order liners after seeing the empty spare position. What change addresses the duplicate?',
      options: ['Use one list with a visible purchased status', 'Keep an extra pack to make running out less likely', 'Order a larger pack so purchases happen less often'],
      correctIndex: 0,
      explanation: `One list with a visible bought status fixes the actual failure: the fuel light worked and two drivers both went to fill up because neither knew the other had. Keeping an extra pack changes how much stock you hold and does nothing about two people seeing the same signal. A larger pack makes the duplicate rarer by making the trigger rarer, but the next time it fires both housemates will still head to the shop.`,
    },
    takeaway: `Treat a shared supply like a fuel tank: choose one visible moment that means time to buy, set it so enough stock remains to cover your usual restocking wait, attach the exact size or product code to the list entry, and make sure the list shows when something has already been bought, because two people seeing the same light will both drive to the petrol station.`,
    sourceNote: 'This is an original stock-control heuristic, not a tested savings claim or a prescribed amount of household inventory.',
  },
  {
    id: 'life-010',
    title: 'Keep a waiting request visible',
    outcome: `Give every request that is waiting on someone else its own entry with the contact, a reference, a check date you have labelled as yours, and the action you will take when the reply lands.`,
    scene: 'A tailor has acknowledged a curtain-shortening enquiry but has not confirmed a collection date.',
    sections: [
      {
        title: 'Sent is not finished',
        paragraphs: [
          `You message the tailor on Tuesday to ask about shortening two curtains. Within the hour they reply: thanks, I will get back to you with a quote. You tick the task off, because you have done your part and there is nothing more to send. Three weeks later you trip over the bag of curtains in the hall and realise no quote ever came.`,
          `The tick recorded that you had communicated. It did not record that the thing you actually wanted, a price and a collection date, had not arrived. Between the list of things to do and the list of things done there is a third state that most lists do not have: waiting on somebody else. Without a place for it, a request either clutters the to-do list as if you could act on it, or drops off the end as if it were finished. The curtains lived in the second gap.`,
        ],
      },
      {
        title: 'A check date is not someone else promise',
        paragraphs: [
          `When you order a parcel, the shop gives you a tracking number, a named courier, and an estimated delivery window. If the window passes, you look up the tracking number, see where the parcel is, and contact the courier with that reference. You do not sit at home vaguely expecting a van, and you do not phone the shop to say any update? The tracking number and the date make the follow-up specific and calm.`,
          `A waiting entry is a tracking record for a request. It holds who has the next move, how to identify the request, and when you will check. The date needs one honest label. If the tailor said I will reply by Friday, write Friday, tailor's promise. If they gave no date, pick a reasonable one yourself and write Friday, my check date. The difference matters when Friday comes. In the first case you can fairly ask about the reply they promised. In the second case you are simply asking how it is going, and nobody has missed anything. People rewrite their own reminder as the other person's broken deadline without noticing, and the follow-up comes out sharper than the facts allow. The reference does the other job. Any update, sent with no context, makes the tailor search through every conversation. Your request about two curtains sent on Tuesday, quoted back, lets them find it in a moment.`,
        ],
      },
      {
        title: 'Close the waiting state, not the whole project',
        paragraphs: [
          `The entry for the fictional curtains reads: waiting for quote; contact, the tailor; sent Tuesday; next check Friday, mine; reference, the message thread. Friday arrives. Either the quote is in your inbox or it is not. If it is not, you send a short, factual follow-up: I asked about shortening two curtains on Tuesday, could you let me know when you might have a quote? No reply does not prove the tailor is neglectful, and a date you chose yourself is not a turnaround they have breached.`,
          `Suppose the quote arrives. The waiting is over, but the curtains are not shortened. What has changed is who holds the next move: it is yours again. Replace the waiting entry with the action it has become, compare the quote against what you asked for, or arrange a drop-off date. Each time the state changes, the entry should describe where the work actually is, and shortened is a long way from quoted.`,
        ],
      },
      {
        title: 'Why sent feels like done',
        paragraphs: [
          `Sending a message is an action with a satisfying end, and the reply thanks, will get back to you sounds like the matter is in hand. It is in someone else's hands, which is not the same thing. A to-do list only shows your moves, so a request that is somebody else's move has nowhere to live, and the mind happily files it as finished.`,
          `Two habits. When you send a request that needs a reply, move it to a waiting list rather than ticking it off, with the contact, the date sent, and a reference. And write the check date with its owner attached, their promise or my check, so that your follow-up on the day stays as factual as the entry.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The curtain request changes state',
        alt: 'A curtain quote request is sent, waits with a personal check date, receives a quote, and needs a decision.',
        caption: `Read the second box's detail first: Friday is your check date, not their promise, and that one label decides how the follow-up sounds. Then look at the move from the third box to the fourth. Receiving the quote ends the wait, like a parcel arriving, but the last box is a new action for you, not finished curtains. Fictional request history.`,
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
        `Write down exactly what answer or event you are waiting for and who can provide it. Not waiting on tailor, but waiting for a quote for two curtains from the tailor; the specific answer is what you will check for.`,
        `Add a private reference to the original request and the date you sent it, the message thread or email subject. Keep names and account numbers out of a task title that other people might see.`,
        `Write the check date and label its owner. If they gave you a date, write their promise. If not, choose a sensible one and write my check. The label is the tracking window.`,
        `Draft two sentences now: what you will do when the answer arrives, and the factual follow-up you will send if it does not. Writing the follow-up before Friday keeps it calm.`,
      ],
      notice: `You can find the request, know whose move it is, and know when to look again, without scrolling back through every message you have sent this month.`,
      troubleshooting: `If you cannot say what answer you are waiting for, the original question was unclear; rewrite it before sending any reminder. If your check date has quietly become their deadline in your head, go back and read the label you wrote.`,
    },
    recall: {
      prompt: 'A housing office confirms receipt of your repair form but gives no repair date. What should stay on your list?',
      answer: `The parcel has been scanned in at the depot and nothing has been delivered. The confirmed event is that they received the form; the event you are actually waiting for is the repair, and that stays on the waiting list with the acknowledgement reference, the date you submitted, and a check date labelled as yours, since they gave no date. On that day, the follow-up is factual: form reference such-and-such, acknowledged on this date, could you tell me the expected timing for the repair? What you do not do is tick it off because they replied, and what you do not write is overdue, because no date was ever promised. Receipt of a form is one scan on the tracking page, not the van at the door.`,
      hint: 'What event has been confirmed, and what event still has to happen?',
    },
    quiz: {
      question: 'A quote arrives on the day you planned to follow up. What is the most accurate update?',
      options: ['Leave it waiting until the provider follows up again', 'Mark the whole repair finished', 'Replace the wait with your decision about the quote'],
      correctIndex: 2,
      explanation: `Replacing the wait with your decision about the quote records the real change: the parcel has arrived and the next move is yours, so the entry becomes an action rather than a wait. Leaving it waiting treats a request as still in someone else's hands when it is in yours. Marking the repair finished mistakes a quote for completed work; nothing has been agreed, authorised, or shortened.`,
    },
    takeaway: `A request that needs a reply is a parcel in transit, not a task done: give it a tracking record with the contact, the date sent, a reference, and a check date labelled as their promise or my check, follow up with the reference and not with any update, and when the reply arrives replace the wait with whatever your next move has become, because quoted is not shortened.`,
    sourceNote: 'The waiting-list format is an original planning suggestion. A personal reminder does not create a provider commitment or legal deadline.',
  },
  {
    id: 'life-011',
    title: 'Do not let a shop password unlock your email',
    outcome: `Explain how a password reused on an old shop account becomes a way into your email, check privately whether that reuse exists, and fix it through the provider's own settings without exposing it.`,
    scene: 'An old craft-shop account and a personal inbox were created with the same password.',
    sections: [
      {
        title: 'The shop is not the only account at stake',
        paragraphs: [
          `Years ago you bought some yarn from a small craft shop online and made an account to track the order. You have not been back since. The password you used was the one you use for most things, including your email. Last month that shop's customer database leaked. Somewhere on the internet there is now a list that includes your email address and that password, side by side.`,
          `The shop and your email provider have never exchanged a byte of data. They do not need to. Whoever has the list can simply type your email address and that password into the email login page and see what happens. You made the connection between the two accounts yourself, on the day you reused the password. The connection did not weaken when you stopped visiting the shop.`,
        ],
      },
      {
        title: 'Why an inbox has extra consequences',
        paragraphs: [
          `If you use one key for your shed, your bike lock, and your front door, losing the shed key is a front-door problem. And the front door is worse than the others. Behind it is the drawer with the spare keys to everything else: the car, the office, your parents' house. A burglar who gets through the front door does not need to pick any other lock.`,
          `Your email is the front door, and the reason is password resets. When you forget a password for your bank, a shop, or a social account, the service sends a reset link to your email address. Someone sitting in your inbox receives those links. That does not mean every account can be taken over this way; some ask for more than an email link. But it makes the inbox far more than a pile of old conversations. It is the drawer with the spare keys. Giving your email a strong password that you use nowhere else closes the one route this lesson is about. A leaked shop password can no longer be tried against the email login. It does not stop a phishing page tricking you into typing the new one. It does not stop malware on your laptop, or every kind of recovery abuse. Two-step verification adds another lock on the door, and it is worth having. It is not a reason to keep a reused key.`,
        ],
      },
      {
        title: 'Check privately, then use the official route',
        paragraphs: [
          `The check is a private one. Either you know, from memory, whether your email password is the one you have used elsewhere, or your password manager can tell you, since most of them flag reused passwords. What you must not do is type the password into a notes app, a chat window, or a website that offers to check whether your password is safe. The check happens in your head or inside a tool you already trust. The answer you write down is yes it is reused or no it is unique, never the password itself.`,
          `If it is reused, go to your email provider's own account settings. Reach them by signing in normally, not from a link in a message. Before you change anything, confirm that your recovery options are current: a recovery phone or a second email you can actually reach. Then set a long, unique password and store it in your trusted manager. If the email is a work account, follow your employer's rules instead of running a personal experiment on a managed sign-in.`,
        ],
      },
      {
        title: 'Why the old shop feels harmless',
        paragraphs: [
          `An account you have not opened in years feels like a closed chapter, and its password feels like something you left behind. But the shop still has it, stored. Leaks happen to old databases as easily as new ones. The danger was never in visiting the shop. It was in the moment two locks were cut to the same key, and that moment is still in effect.`,
          `Two habits. Give your email a password you use for nothing else. Treat that one rule as more important than any other password rule you follow. And when you want to check whether a password is reused, do it in your head or in your trusted manager, never by typing the password somewhere new.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Check the email dependency privately',
        alt: 'Identify the personal inbox, check for password reuse in a trusted manager, use official settings if needed, and confirm secure storage.',
        caption: `Start with the first box's detail: the inbox receives reset links, which is what makes it the front door with the spare-key drawer behind it. The second box is the only check, and it happens inside a trusted manager or your own head. Nothing in any box is a password, and nothing in your notes should be either. A check sequence, not a worksheet.`,
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
        `Work out which inbox is your front door: the email address that other services send password-reset links to. Write the address down if you like. Do not write its password anywhere, including this app.`,
        `Check, privately, whether that inbox's password is also used anywhere else, either from memory or from your password manager's reuse warning. The answer you record is one word, reused or unique. Do not test any password on any website to find out.`,
        `Sign in to the provider normally and find two things: where the password is changed and where recovery options live. If the answer was reused, confirm recovery is current, then plan the change with the new password going straight into your trusted manager.`,
      ],
      notice: `You know whether a leaked password from some other service could also open this inbox, and if it could, you have a safe route to change that which does not involve typing the password anywhere new.`,
      troubleshooting: `If you honestly cannot tell whether the password is unique, treat it as reused and use the provider's supported change process after checking recovery; do not sit at the login page guessing variations. If the account is managed by an employer, stop and follow their process instead.`,
    },
    recall: {
      prompt: 'You stopped using an old forum but its password still matches your email. Has inactivity removed the risk?',
      answer: `No. The forum still holds that password in its database, and a database can leak whether or not you have logged in lately; an old account is a key cut years ago and left in a drawer that someone else controls. If the forum leaks, the attacker tries the same email and password against your inbox, and your inbox does not know or care that you stopped posting in 2019. The thing that creates the risk is the match between the two passwords, not how often you visit either site. So the fix is the same as if you used the forum daily: give the email a unique password through the provider's own settings. Deleting the forum account afterwards is tidy but secondary, because you cannot be sure a deleted record was also purged from every backup.`,
      hint: 'An unused account can still contain an old secret.',
    },
    quiz: {
      question: 'Your inbox has two-step verification but shares a password with a shop. Which change addresses the reuse route?',
      options: ['Keep the password because the second step makes reuse irrelevant', 'Set a strong, separate email password while retaining the second step', 'Keep the password but stop signing in to the old shop'],
      correctIndex: 1,
      explanation: `A strong, separate email password removes the shared key entirely, so a leaked shop password opens nothing, and keeping the second step means the door still has its extra lock as well. Keeping the reused password because of the second step relies on the extra lock never failing and on the attacker never finding a way round it, while leaving the key cut to two locks. Not signing in to the shop changes nothing about the password the shop already stores and could leak.`,
    },
    takeaway: `Your email is the front door with the spare keys to every other account in a drawer behind it, so it needs a password you use nowhere else: check for reuse in your head or your trusted manager, never by typing the password into anything new, and if it is reused, fix it through the provider's own settings with recovery confirmed first, because an old shop account you have forgotten still holds the key you cut for it.`,
    sourceNote: 'NCSC guidance supports separate email passwords and trusted password managers. This check addresses reuse, not every account-compromise route.',
  },
  {
    id: 'life-012',
    title: 'Make recovery survive the missing phone',
    outcome: `Find a way back into an account that does not depend on your second-step phone, check that the fallback is reachable without that phone and protected from others, and do it while still signed in.`,
    scene: 'A traveller has an authenticator and a screenshot of recovery codes on the same phone.',
    sections: [
      {
        title: 'Two copies can share one failure',
        paragraphs: [
          `You switch on two-step verification for your main personal account before a trip. The service shows you a page of recovery codes and tells you to keep them safe. You take a screenshot. The authenticator app that generates your sign-in codes is on the same phone, and the screenshot is in its photo library. You feel properly protected and go to the airport.`,
          `Now imagine the phone slips out of your pocket in a taxi. The authenticator is gone. The screenshot is gone. You have made two copies of your way back in, and both copies were in the one object you were most likely to lose. Saving the codes in a second folder on the same phone would not have helped either. The question was never whether you saved the information. It was whether you could reach it when the phone is not in your hand.`,
        ],
      },
      {
        title: 'Extra protection needs a supported fallback',
        paragraphs: [
          `A spare house key under the doormat is reachable but not protected: anyone can lift the mat. A spare key locked inside the house is protected but not reachable, since you need the key to get to the key. The spare that actually works lives with a neighbour you trust, or in a small lockbox you can open without your main keys. It has to pass both tests at once, and most people's instinct satisfies only one.`,
          `Two-step verification asks for something beyond the password, an app code, a security key, or another method the service supports. A stolen password on its own gets an attacker nowhere. That protection is real, and it is why recovery procedures exist: the legitimate owner needs a way back in when a factor is lost. Recovery codes are that way back, and they are secrets, not reference numbers. Anyone who gets hold of one can use it in the recovery process exactly as you would. So a storage place for them has two jobs, and both matter equally. It must stay accessible when the phone is missing. It must be closed to everyone who is not you. The screenshot failed the first test. A code pasted into a group chat would fail the second.`,
        ],
      },
      {
        title: 'Check the dependency without locking yourself out',
        paragraphs: [
          `Do this audit while you are signed in, because signed in is the only safe place to do it from. Open the provider's own recovery help and read which fallbacks it supports. Confirm that the recovery email and phone number on file are ones you still control. If the service offers recovery codes, choose a home for them that you could reach from a hotel computer with no phone. A sealed envelope in a drawer at home works. So does a trusted password manager that you can open by another route than this phone.`,
          `Then look for loops. If your recovery email is only readable on the same phone, because that is where its app and its own second step live, the fallback circles straight back to the thing you lost. Fix that before you need it. And do not test the plan by signing out everywhere, deleting your only factor, or posting a code to prove it works. A drill that locks you out is not a drill. One last habit for the airport. If an approval prompt appears on your phone and you did not just try to sign in, deny it. Accepting it to make it go away is handing over the key.`,
        ],
      },
      {
        title: 'Why two copies feel like two',
        paragraphs: [
          `A screenshot feels like a backup because it is a second file, and the mind counts files rather than failure routes. But both files share one battery, one pocket, one taxi seat. The useful question is not how many copies do I have. It is what single event would take them all away, and the phone answers that question for both of them at once.`,
          `Two habits. While still signed in, read the provider's recovery options and confirm the contacts on file are yours and current. And for every fallback you choose, ask the two-test question out loud: can I reach it without the phone, and can nobody else reach it at all?`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Ask where recovery remains accessible',
        alt: 'A recovery audit begins while signed in, identifies a fallback, checks independence from the phone, and confirms protected storage.',
        caption: `Read the third box as the whole lesson in one question: imagine the phone gone, and ask whether the fallback is still in reach. The first box is where you stand while asking it, signed in. The fourth box is the second test, protection, the spare key with the neighbour rather than under the mat. Read-only planning; nothing here is tested by signing out.`,
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
        `While signed in, open the account's official security or recovery settings and read what fallbacks it supports. Look at the options without copying any code into this app or anywhere else new; this is a reading exercise.`,
        `Pick one fallback and ask the first test question: if my phone were in a taxi right now, how would I reach this? Write the route, such as envelope at home or manager opened from laptop.`,
        `Ask the second test of the same fallback and of anything it depends on: does the recovery email or the manager login itself need that phone? Record only the dependency, phone needed or phone not needed, never the secret.`,
        `If a route fails either test, choose a supported improvement from the provider's list and plan it. Do not remove a factor, sign out everywhere, or trigger recovery as a rehearsal.`,
      ],
      notice: `Your plan names one route back in that passes both tests, reachable without the phone and closed to everyone else, and you found it without putting your current access at risk.`,
      troubleshooting: `If every route you trace loops back to the same phone, do not start deleting things; read the provider's options for an independent method, add it, and only then reconsider the old ones. If you are unsure whether a storage place is protected, treat a shared note or chat as the doormat and move the codes.`,
    },
    recall: {
      prompt: 'Your backup authenticator is on a tablet kept in the same travel bag as the phone. What weakness remains?',
      answer: `You have two devices and one bag, which is one failure route. The spare key is in the same pocket as the main key: if the bag is stolen or left on a train, both authenticators go together, and the second device bought you nothing for exactly the event it was meant to cover. Count the ways you could lose access rather than the number of gadgets you own. A fallback that survives the lost bag has to live somewhere else: codes in a sealed envelope at home, a recovery contact that is not on either device, or a security key on your house keys rather than in the bag. Use the methods the provider actually supports, and check the new route with the same two questions, reachable without the bag and closed to everyone else.`,
      hint: 'Count independent failure paths, not just devices.',
    },
    quiz: {
      question: 'Which recovery plan best addresses losing the only sign-in phone?',
      options: ['A supported secret stored securely and accessible without that phone', 'A second screenshot in another folder on the phone', 'An email copy requiring that phone for every sign-in'],
      correctIndex: 0,
      explanation: `A supported secret stored securely and reachable without the phone passes both tests at once, the spare key with the trusted neighbour; it is there when the phone is gone and it is not under the mat. A second screenshot in another folder is a second file sharing the same taxi seat, so one loss still takes both. An email copy that needs the phone to open is the spare key locked inside the house, a loop that leads straight back to the thing you lost.`,
    },
    takeaway: `A recovery route is a spare key, and it has to pass two tests at once, reachable when the phone is gone and closed to everyone but you: do the check while still signed in, trace every fallback to see whether it quietly loops back to the same device, count failure routes rather than copies, and never rehearse by locking yourself out, because two screenshots in one pocket are one key.`,
    sourceNote: 'NCSC security guidance informs this lesson. Recovery methods differ by provider; the exercise does not test a live account lockout.',
  },
  {
    id: 'life-013',
    title: 'Give an app only the access its task needs',
    outcome: `Compare what an app can reach with the one job you still use it for, narrow the access to fit, test that the job works, and explain why revoking access does not erase what it already collected.`,
    scene: 'A weather app still has precise background location access although the user checks only one saved town.',
    sections: [
      {
        title: 'Yesterday permission can outlast yesterday task',
        paragraphs: [
          `On a walking holiday two years ago you installed a weather app and let it find your location automatically, so it could tell you about the next valley without you typing anything. It was useful. Back home, you kept the app, but all you ever do with it now is glance at the forecast for your own town, which is saved as the first tab.`,
          `The app's permission did not notice that your routine changed. It still has precise location, in the background, at all times, because that is what you agreed to on a hillside two summers ago. Nothing about the app is sinister for still having it; you gave it. But a feature you used for one week has left a wide-open door in place ever since. The useful question is not whether this app is good or bad. It is whether what it can reach matches the one job you still want from it.`,
        ],
      },
      {
        title: 'A permission opens a particular route',
        paragraphs: [
          `When a builder comes to fix the bathroom, you give them a key for the week. You do not expect them to keep it afterwards, and you certainly do not expect them to keep a key to the whole house because the bathroom job is done. A key for the week was the sensible thing to give. Leaving it in their pocket for two years is the oversight, and it is yours to fix, not theirs.`,
          `Your phone's permissions are keys. The operating system controls which resources an app can reach, such as location, contacts, photos, camera, and microphone, and each permission opens one particular route. Many phones now cut keys to different depths: approximate location rather than precise, access only while the app is open rather than always, a few chosen photos rather than the whole library. What is available depends on the device and the app. A forecast for a saved town, the one job you still want, may need no location key at all; the app knows the town because you typed it. Now the limit of the key metaphor. Taking the key back stops the builder getting in tomorrow. It does not retrieve the photographs they took of your bathroom last year. Changing a permission limits future access through that route. It does not reach into the company's servers and remove the location history they already received. It also leaves other routes open, such as anything you typed into the app and anything tied to your account. A permission check is one privacy task. Deletion is a separate one.`,
        ],
      },
      {
        title: 'Narrow access, then test the actual feature',
        paragraphs: [
          `Open your phone's privacy settings and find the weather app. Read what it currently has: location, precise, always. Then try the narrowest setting that could still support the saved-town forecast, which here is probably no location at all, or while using the app with approximate location if you want the local tab too. Change it. Then open the app and look at your town's forecast. If it loads, you have your answer: that job never needed the wide key.`,
          `If the app complains or a feature stops, resist the reflex to give everything back. Work out which specific access the failing feature wants and whether a narrower version exists, such as approximate rather than precise. You are also allowed to decide you do not need that feature. Finally, treat the two years of location history as a separate question with a separate answer. Look in the app's account settings for retention and deletion controls, or the company's privacy page. Switching location off today proves nothing about whether yesterday's travel history still exists on their servers.`,
        ],
      },
      {
        title: 'Why old permissions stay open',
        paragraphs: [
          `A permission is granted in a moment of need and then becomes invisible. The app keeps working, the forecast appears, and nothing on the screen says this app is still tracking you in the background. The builder's key is in a pocket you never look in. The only time it comes to light is when you go and look, which is why the check has to be deliberate.`,
          `Two habits. Every so often, pick an app you still use and write down the one thing you use it for, then compare that with what it can reach and cut the keys down to fit. And whenever you narrow a permission, remember that you have closed a door going forward and nothing more, so if the old data matters to you, go and ask about it separately.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A weather-permission check',
        alt: 'The user names a saved-town forecast, inspects location permission, narrows unnecessary access, and tests the forecast.',
        caption: `Read the first box before anything else: the job is one saved-town forecast, and every later box is measured against it. The second box is the key the builder still has in their pocket. The fourth box is the real test, whether the forecast still loads, not whether every requested permission is switched on, and its detail reminds you the old data is a separate question. Example controls vary by device.`,
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
        `Pick one app you still use and write down the single thing you use it for, in a sentence, without any account details. That sentence is the job every permission has to justify itself against.`,
        `Open the phone's own permission settings for that app and compare one permission with the job. Ask whether the job could work with less: approximate instead of precise, only while using instead of always, selected photos instead of all.`,
        `Cut the key to fit: remove the permission or pick the narrowest supported option. Leave work apps your employer manages, and anything safety-related like emergency or medical apps, exactly as they are.`,
        `Open the app and do the one job. If it works, write that down. If it fails, find the specific access the feature wants before you consider restoring anything wider.`,
      ],
      notice: `You can name the permission you changed and say whether the one job you use the app for still works. That pair of facts is the whole check.`,
      troubleshooting: `If the settings screens are unfamiliar, use the phone maker's official help pages rather than guessing. And do not assume that signing out of the app or switching accounts changes anything about the operating-system permission; the key is held by the phone, not by the account.`,
    },
    recall: {
      prompt: 'You revoke photo access after a printing order. What happens to images already uploaded to the printing service?',
      answer: `Nothing happens to them. Revoking the permission takes the key back, so the printing app cannot open your photo library tomorrow, but the images you uploaded last week are already on the printing company's servers, like the builder's photographs of your bathroom. If you want those copies gone, that is a separate task with a separate route: look in your account with the printing service for a stored-orders or uploaded-images page, and for a deletion control or a privacy contact. Until you have done that and seen a confirmation, assume the uploads still exist. The permission change protected your future photos. It said nothing about the ones that had already left the phone.`,
      hint: 'Distinguish future access from copies already received.',
    },
    quiz: {
      question: 'A saved-town forecast works after location is disabled. Which conclusion follows?',
      options: ['The provider has deleted every old location record', 'The app can no longer collect any information', 'That forecast does not currently require device location access'],
      correctIndex: 2,
      explanation: `The test you ran answers exactly one question: whether this forecast needs the location key, and it does not. Concluding that old records were deleted confuses taking the key back with retrieving the builder's photographs; nothing on the phone can tell you what the servers still hold. Concluding that the app can collect nothing ignores every other route, such as what you type, what your account carries, and any other permission it still has.`,
    },
    takeaway: `App permissions are keys you handed out for a job, so check them against the one job you still want: cut each key to the narrowest setting that lets that job work, test the job rather than trusting the app's complaints, and remember that taking a key back only closes the door from today, because the data already collected lives on servers that a phone setting cannot reach.`,
    sourceNote: 'FTC privacy guidance was checked for permission review. Exact controls and data-retention processes are device- and service-specific.',
  },
  {
    id: 'life-014',
    title: 'Check both who can open a link and what they can do',
    outcome: `Before sending a document link, check two separate settings, who is allowed in and what they can do once inside, and know that a private message does not make a public link private.`,
    scene: 'A hiking plan with private travel details is intended for one friend to read.',
    sections: [
      {
        title: 'A private message can contain a broad link',
        paragraphs: [
          `You have written up Saturday's hike as a shared document: the route, the meeting point outside your flat, the train you are catching, your phone number in case anyone is late. You send the link to one friend in a private message. One recipient, one private chat. It feels about as contained as a document can be.`,
          `Now look at the document's own sharing setting, which you have not opened. It may well say anyone with the link can view. If it does, then the privacy of your chat and the reach of your document are two different things. Your friend forwards the message to their partner to check the time, the partner pastes it into a group to ask who else is going, and every one of those people can now open the document with your address and phone number in it. Nothing was hacked. The message was private; the link never was.`,
        ],
      },
      {
        title: 'Audience and permission answer different questions',
        paragraphs: [
          `A theatre has two separate systems. The ticket decides who gets through the door. The seat number decides what they can do inside, which row they sit in, whether they are allowed backstage. A ticket that says admit anyone who presents it gets a stranger in just as easily as your friend. And making every seat a cheap one in the back row does nothing about how many people hold tickets.`,
          `Document sharing has the same two systems, and they are set in different places. Audience is the ticket: who is admitted. A restricted document names particular accounts, so only those people get in. Anyone-with-link is a ticket that admits whoever is holding it, including people who were never on your list. Permission is the seat: what admitted people can do, usually view, comment, or edit. Here is the trap. Setting everyone to view only feels like locking the document down, but it only changes the seats. The door is still open to anyone with the link. For a plan that one friend needs to read, the match is a named-person ticket with a viewer seat. If they need to suggest changes, look for the service's comment option rather than widening the door. Never broaden the audience just because the editing controls happened to be the ones you found first.`,
        ],
      },
      {
        title: 'Inspect before sending',
        paragraphs: [
          `Open the sharing panel on any harmless document you own and look for two things. First, the list of named people and what each can do. Second, a separate line, often called general access or link settings, that says who else can get in. Adding your friend as a named viewer does not switch the general-access line off. The two settings sit side by side and both apply. Also look for a note that access is inherited from a folder. A document inside a widely shared folder is in a theatre whose doors you did not set.`,
          `Before the real hiking plan goes anywhere, make the settings match the intention: restricted audience, your friend named, viewer permission. Then look at the content with one more fact in mind. If you later change your mind and revoke access, that stops the link opening from now on. It does not reach into a downloaded copy, a screenshot, or a photo of a screen. So decide what belongs in the document knowing that revocation is a door you can close, not a memory you can wipe. A phone number that is only needed on the day may be better sent in the message than written into the plan.`,
        ],
      },
      {
        title: 'Why the chat feels like the container',
        paragraphs: [
          `A link lives inside a message, so the message feels like its box, and a private box suggests private contents. But a link is a ticket, not the show, and the ticket's own rules are set somewhere you did not look while writing the message. The forwarding that spreads it is normal, friendly behaviour, which is exactly why it cannot be the thing you rely on.`,
          `Two habits. Before sending any document link, open its sharing panel and read both lines, who is admitted and what they can do, rather than inferring either from how you are sending it. And include in the document only what you would be comfortable with a forwarded reader seeing, because closing the door later will not take back a copy.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Check the hiking plan before sending',
        alt: 'The sharing check names one reader, inspects general access, checks viewer permission, and reviews the link before sending.',
        caption: `Read the second and third boxes as the two theatre systems: general access is the ticket, who gets through the door, and the friend's permission is the seat, what they can do inside. Notice they are separate boxes because they are separate settings, and a named viewer in the third does not close the door in the second. The last box is the content check, written knowing that revocation cannot recall a copy. Illustrative cloud-sharing check.`,
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
        `Pick a test document that contains nothing personal and that nobody else is working on. You are learning where the two settings live, so do not make anything public to find out what the buttons do.`,
        `Open its sharing panel and find both systems: the named people and their roles, and the separate general-access or link line. Write down what each currently says, and note any message that access comes from a folder.`,
        `Imagine one reader and write the ticket and seat you intend for them, for example named person, view only. Compare that with what the panel actually says, line by line.`,
        `Leave the document private and change nobody else's access. If anything in the panel was unclear, write the question down rather than sending an invitation to see what happens.`,
      ],
      notice: `You can state, for this document, exactly who is admitted and whether they can read, comment, or edit, and you know those are two different answers from two different lines.`,
      troubleshooting: `If the panel says access is inherited from a folder, read the service's explanation of what that means before you touch anything; changing a folder changes every document in it. If you cannot find the general-access line, that is the one to search the help pages for, because it is the door.`,
    },
    recall: {
      prompt: 'A club roster is view-only but available to anyone with the link. Does view-only make its audience private?',
      answer: `No. View-only is the seat, and every seat in the house has been set to the back row, which stops anyone changing the roster. The door is a different matter: anyone with the link is a ticket that admits whoever is holding it, so the moment the link is forwarded, pasted, or guessed, a stranger can read every name and contact detail on the list, quietly and without editing a thing. Making the audience private means changing the ticket, restricting general access and naming the members who should be able to open it, and then giving those named people the viewer seat. Two settings, two changes. Tightening only the second one leaves the door wide open and makes it feel closed, which is worse than knowing.`,
      hint: 'Who can enter and what they can do are different questions.',
    },
    quiz: {
      question: 'A friend is a named viewer, but general access says anyone with the link. What does a forwarded link imply?',
      options: ['Only the named friend can open it', 'Another link holder may also be able to read it', 'The next person automatically becomes an editor'],
      correctIndex: 1,
      explanation: `General access is the ticket, and anyone with the link means whoever ends up holding the forwarded link can get through the door and read, regardless of the friend being named separately; the two settings apply side by side. Saying only the friend can open it treats the named-viewer line as if it overrode the general-access line, which it does not. Saying the next person becomes an editor confuses the door with the seat; a forwarded link grants whatever the general-access line says, here viewing, and editing was never on offer.`,
    },
    takeaway: `A document link is a theatre ticket and a seat, set in two different places: before you send one, open the sharing panel and read both the general-access line, which is who gets through the door, and the named roles, which is what they can do inside, make them match the one reader you intend, and write the contents knowing that a forwarded link travels and a revoked link cannot recall a copy.`,
    sourceNote: 'The inherited Google Drive guide explains sharing controls. Other services differ, and revocation cannot retrieve copies already made.',
  },
  {
    id: 'life-015',
    title: 'A downloaded update may not be the running update',
    outcome: `Tell the difference between an update that has arrived on your device and one that is actually running, finish any restart it needs through the genuine settings, and confirm completion afterwards.`,
    scene: 'A personal tablet has downloaded a system update but still shows restart required.',
    sections: [
      {
        title: 'The notification is only one stage',
        paragraphs: [
          `Your tablet pops up a message: update downloaded, restart to install. You are halfway through a drawing with forty layers, so you tap later and carry on. The next evening you remember the update. You feel a small glow of being up to date, and think no more about it. In settings, if you looked, a line still says restart required.`,
          `Downloading brought a package of files onto the tablet. It did not swap out the software that is running right now. The old version is still the one drawing your layers and opening your email. The security fix you are feeling good about is sitting in storage, waiting. An update is not one event announced by one notification. It is a short sequence of states, and the notification you dismissed marked the middle of it, not the end.`,
        ],
      },
      {
        title: 'Files on storage and code in use differ',
        paragraphs: [
          `A new door lock is delivered and left in its box in the hallway. The lock is in your house. The door is still fitted with the old one, and anyone with a copy of the old key still gets in. Installing it is a separate job with its own moment. Until that moment, owning the better lock changes nothing about who can open the door.`,
          `Software updates often work the same way. The new program files can be written to storage while the old program keeps running in memory, because a running program does not reread itself from disk. Some applications only need closing and reopening to pick up the new version. Some system components are in use the whole time the device is on. The only way to swap those is a restart, which is why the tablet asked for one. The exact mechanism depends on the software. A restart is not a ritual to perform after every download; it is the step some updates need and tell you about. The reason it matters is that security updates fix weaknesses in the old version. Until the new code is the code in use, you are running the version with the hole in it, lock still in its box. Completing the restart closes that particular hole. It does not mean the device is free of every other weakness or that every app on it is safe.`,
        ],
      },
      {
        title: 'Finish through the genuine controls',
        paragraphs: [
          `For the tablet, the sequence is ordinary. Save the drawing, and anything else open. Check the device's own instructions in case a restart has conditions, such as needing to be plugged in. Pick a moment when losing ten minutes does not matter, and restart from the update screen. When it comes back, go to the same official update screen and read what it says now. You are looking for a plain completion status, up to date, rather than another pending action. If a further update is offered, that is a new sequence and gets read on its own terms.`,
          `All of this happens inside the device's built-in settings or the vendor's genuine channel. A banner on a website shouting that your system is out of date is an advertisement, not a status screen. The only thing it reliably installs is whatever the advertiser wants. On a work device, the lock belongs to IT. Follow their scheduling and ask them if the restart message will not clear. Do not download a package from somewhere else to make the message go away.`,
        ],
      },
      {
        title: 'Why downloaded feels like done',
        paragraphs: [
          `The download is the step that shows progress, with a bar and a notification. The restart is a step that costs you your open work. So the mind credits the visible step and postpones the costly one, and later remembers the credit rather than the postponement. The lock has been in the hallway for a week, and it feels fitted.`,
          `Two habits. When an update notification arrives, read which state it describes: downloaded, pending restart, or complete. Do not file the update as done until the official screen says so. And always get there through the device's own settings, never through a banner that found you.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Follow the tablet update to completion',
        alt: 'Official settings show a download, a required restart, and a final completion check after the restart.',
        caption: `Read the first box as the new lock arriving in its box, and the second as the one most people stop at. The third box is the moment the lock actually goes on the door. The fourth is the only place the sequence ends: back in the official settings, reading a completion status rather than remembering a notification. Example states, not a universal interface.`,
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
        `Open your device's update settings directly from its settings menu, never from a web page or a pop-up. Read the current status without pressing anything that starts an installation; this step is reading only.`,
        `Work out which state the screen is describing: available, downloaded, pending restart, or up to date. Write that word down, because it is more precise than updated.`,
        `If something is pending, plan the moment rather than doing it now: save your work, check whether the device wants to be plugged in, and choose a time. If you are unsure what a pending action involves, stop at the planning.`,
        `Write the one check you will do after that action: reopen the update screen and read its status. The task is not closed until that sentence has been done.`,
      ],
      notice: `Your note names the current state in the device's own words and lists any unfinished step, instead of saying updated from memory of a notification you dismissed.`,
      troubleshooting: `If an update keeps failing or the restart message will not clear, use the vendor's official support route; do not switch off protections or install a third-party updater to force it. If you cannot tell whether a banner is genuine, close it and go to settings yourself, because the real status is always there.`,
    },
    recall: {
      prompt: 'A browser says its update will finish when relaunched, but it has stayed open all week. What should you verify?',
      answer: `The browser is telling you plainly that the new lock is in the box and the old one is still on the door: it has downloaded the update and is waiting for you to close and reopen it so the new version can take over. A week of tabs has kept the old version running the whole time, security fixes included. Save or bookmark what you need, follow the browser's own relaunch prompt at a moment that suits you, and then open its about or update page and read the version and status it reports. That status, not the week-old notice, is the evidence. If it still says an update is pending, repeat the relaunch as it asks; if it says up to date, the sequence is finished.`,
      hint: 'Ask which version is active, not only which package arrived.',
    },
    quiz: {
      question: 'After a required restart, which evidence best supports update completion?',
      options: ['The official update panel reports completion', 'The earlier download notification is still in history', 'The home screen looks unchanged'],
      correctIndex: 0,
      explanation: `The official update panel is the one place that reports which state the device is in now, so a completion status there is the lock seen fitted on the door. A download notification in your history proves the package arrived last week and nothing about what happened after you tapped later. An unchanged home screen tells you nothing either way; most security updates change nothing you can see, which is exactly why you have to read the status rather than look for a difference.`,
    },
    takeaway: `A downloaded update is a new lock still in its box in the hallway: the old version keeps running until the restart or relaunch actually fits the new one, so read which state the notification describes, finish the required step through the device's own settings at a sensible moment, and only call it done when the official update screen says so, never because a banner on a website told you to.`,
    sourceNote: 'NCSC guidance supports keeping software updated. Installation and restart requirements are vendor-specific; no live system changes are needed for the exercise.',
  },
  {
    id: 'life-016',
    title: 'Name the record you will search for later',
    outcome: `Name personal files by what they are, the one date that tells them apart, and draft or signed, so you can pick the right one from a listing without opening it or revealing private details.`,
    scene: 'Two rental inventory scans have almost identical names but different signing dates.',
    sections: [
      {
        title: 'Which scan is the signed one?',
        paragraphs: [
          `Your landlord asks for the signed inventory from when you moved in. You open the folder where you keep flat paperwork and find scan1.pdf, scan2.pdf, and final-new.pdf. One of them is the signed inventory. One is the draft you marked up. One might be the gas safety certificate. You open all three, and in a couple of minutes you have found it, so no harm done.`,
          `The harm is slow. Those names recorded what the scanner did, first scan, second scan, and a moment of optimism. They recorded nothing about what the documents are. Every month a few more scans join them, and the couple of minutes becomes ten, then a search of three folders. A name is useful when it answers the question you will ask in a year's time, standing in front of the folder. What is this? Which date tells it apart from the others? Is it the draft or the one everybody signed?`,
        ],
      },
      {
        title: 'Give the date one consistent meaning',
        paragraphs: [
          `A tin cupboard works when every label says the same kind of thing in the same place: beans, tomatoes, chickpeas, with the date on the lid. It stops working when one tin says tomatoes, another says Tuesday, and a third says the shop you bought it in. All three are true facts about tins. Only one of them helps you cook.`,
          `File names are labels, and the date is the part people get wrong. A date written as year, month, day, with two digits each, sorts into calendar order automatically, which is a real convenience. But sorting only helps if every date means the same thing. A document can have a date it was written, a date it was signed, and a date you downloaded it. Those can be weeks apart. Decide which date matters for this kind of record, for paperwork usually the document or signing date, and use that meaning every time. Then a name like 2026-10-14_inventory_signed.pdf tells you everything the folder needs to: a signed inventory, dated 14 October. Notice what it leaves out. Your address is not in it, nor your tenancy number, nor your name. File names turn up in previews, recent-files lists, and the text of shared links. A name is a small disclosure, and it should not disclose more than the folder needs.`,
        ],
      },
      {
        title: 'Test the name without reorganising everything',
        paragraphs: [
          `Put the signed inventory next to the draft from two days earlier and apply the pattern: 2026-10-12_inventory_draft.pdf and 2026-10-14_inventory_signed.pdf. Now the listing alone tells them apart, by date and by status, before you open either. What the name does not do is guarantee the contents. Open the one you chose and check the signatures are actually there. A label on a tin is a promise about what is inside, and you still look before you serve it.`,
          `Keep the exercise small. Take a handful of ordinary personal documents, copies rather than originals, and rename those. Leave the file extension, the .pdf or .jpg, exactly as it is. Applications use it to know how to open the file. Do not rename files that live inside an application's own library, such as a photo manager. Do not rename files that a project refers to by name, unless you understand what else points at them. The aim is to make next year's search ten seconds faster, not to rebuild every folder you own this afternoon.`,
        ],
      },
      {
        title: 'Why scans get called scan2',
        paragraphs: [
          `The scanner names the file at the moment you have the least time to think. Its default is good enough to find the document today, while you still remember which is which. The cost is deferred to a stranger: you, a year from now, who remembers nothing and has three tins labelled Tuesday. Renaming takes five seconds at the moment of scanning and five minutes a year later.`,
          `Two habits. When a document arrives, name it subject, date, status before you put it away, with the date meaning the same thing for every file of that kind. And keep names free of addresses, account numbers, and identity numbers. A file name travels further than the file.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two names for the same signed scan',
        alt: 'An ambiguous scan2 filename is compared with a date, subject, and signed status filename.',
        caption: `Read the left label as a tin marked Tuesday: true, and useless for cooking. Then read the right name in three parts, the date in year-month-day order, the subject, and the status, and notice what it manages to leave out: no address, no tenancy number, no name. Both names point at the same document; only one answers next year's question. Fictional filenames.`,
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
        `Make copies of three everyday documents and put them in a fresh folder, away from any application library. Open each one and find its subject and the date that actually matters, written or signed, not the day it landed on your computer.`,
        `Decide the rule once: which date meaning you will use for this kind of document, and a short subject word or two. Add a status word only where two versions of the same thing need telling apart.`,
        `Rename the three copies to the pattern, keeping each file extension exactly as it was and leaving out anything private such as an address or account number. The originals stay untouched.`,
        `Look away for a moment, then pick one record from the folder listing by name alone and open it to confirm it is what the name promised. The listing chose it; the contents confirm it.`,
      ],
      notice: `You can tell the three records apart from the listing before opening any of them, and opening the one you picked confirms the label told the truth. The tins are labelled by what is inside.`,
      troubleshooting: `If the dates are confusing you, you have probably mixed meanings; write the date's role into the name for now, such as signed, or go back to one rule. Check that you have not used the download date by accident, which makes an old document look like this week's.`,
    },
    recall: {
      prompt: 'Two receipts describe the same item, one purchase and one refund. What should distinguish their names?',
      answer: `Name the difference you would otherwise have to open both files to discover. The two receipts share a subject, so the subject word stays the same, and what sets them apart is the event and the date of that event: 2026-09-03_headphones_purchase.pdf and 2026-09-18_headphones_refund.pdf. Each date is the date of its own transaction, used consistently, so they sort in the order things happened. Calling them both final, or receipt and receipt2, labels two tins Tuesday. Leave out the card number and the order reference, which belong inside the document and not on the lid, and keep the .pdf so the viewer still opens them.`,
      hint: 'Name the distinction you would otherwise have to discover by opening both.',
    },
    quiz: {
      question: 'You download an old signed record today. Which date choice is most useful in its established document-date convention?',
      options: ['Today, because that is when the file reached this folder', 'Whichever date puts it first in the listing', 'The document date, with download date separate if needed'],
      correctIndex: 2,
      explanation: `The document date keeps the rule you set for every other file in the folder, so the record sorts next to the paperwork from its own period and the listing still means one thing. Using today's date labels an old tin with the day you bought it and makes a years-old record appear to be this week's. Picking whichever date floats it to the top abandons the convention entirely, so the dates in the folder stop meaning anything at all.`,
    },
    takeaway: `Label files like tins in a cupboard, by what is inside and nothing else: subject, the one date that tells it apart, and draft or signed, with the date meaning the same thing for every file of that kind, the extension left alone, and no address or account number on the lid, because the person searching the folder next year is a stranger who remembers nothing about scan2.`,
    sourceNote: 'The naming convention is an original retrieval method. Preservation and backup references provide background, not a mandatory filename standard.',
  },
  {
    id: 'life-017',
    title: 'Check whether deletion travels with your files',
    outcome: `Tell synchronised files apart from genuinely backed-up files by asking which copy would still exist after you delete or wreck the original by mistake.`,
    scene: 'A knitting-pattern folder appears on a laptop and tablet through one synchronised cloud account.',
    sections: [
      {
        title: 'Two screens show one shared state',
        paragraphs: [
          `Your knitting patterns live in a cloud folder, and they show up on both your laptop and your tablet. Two devices, two screens, the same files on each. It feels like you have a backup. If the laptop died tomorrow, the tablet would still have everything. One evening you tidy the laptop. You decide you will never knit that cabled jumper, and you delete the folder. The next morning you open the tablet to check a pattern, and the folder is gone from there too.`,
          `Nothing broke. The service did exactly the job it is built for, which is to make every device agree about what is in the folder. You deleted on one, so it deleted on all. Counting screens told you how many places you could open the patterns from. It told you nothing about whether an earlier copy would survive once you changed your mind. Changing your mind is the whole reason backups exist.`,
        ],
      },
      {
        title: 'Access and recovery are different jobs',
        paragraphs: [
          `A mirror in your hallway shows you a second image of yourself. It is a perfect copy, updated instantly. If you spill coffee down your shirt, the mirror shows coffee down the shirt. Nobody has ever been rescued from a stain by owning a mirror. A photograph from last week, on the other hand, still shows the clean shirt, precisely because it stopped updating.`,
          `Synchronisation is the mirror. It propagates changes. Depending on the service, those changes include edits, moves, and deletions, so a deletion on one device is reflected everywhere within seconds. Some services also keep a photograph of sorts: a bin for deleted files, or a history of earlier versions, available for a limited period. Those features are genuinely useful. But they exist on some plans and not others. They keep things for thirty days or ninety or some other number. They may exclude large files or certain folders. Each of those details has to be read for your account, not assumed because the word cloud is involved. A separate backup is deliberately not a mirror. It is a copy taken on purpose. The useful kind is independent in the one way that matters: it is not sitting there receiving the same deletion. A removable drive that you plug in, copy to, and unplug is not listening when you tidy the laptop. It still has to be kept safe and updated on purpose. But it is the photograph rather than the mirror.`,
        ],
      },
      {
        title: 'Ask what would remain after the mistake',
        paragraphs: [
          `For the pattern folder, open your service's own help pages on deleted files and version history. Read them for the plan you are actually on. Find three facts: where recovery happens, what it covers, and how long it lasts. If the page describes a feature that only comes with a paid tier you do not have, it does not apply to you, however prominently it is advertised.`,
          `Then look at what you would be upset to lose: the patterns you adapted yourself and the notes on tension and needle sizes. Decide where a separate copy of those should live. Check that the chosen location is not just another folder inside the same synchronised tree. A second folder in the mirror is still in the mirror. You do not need to delete anything to learn any of this. Later, if you want to prove the backup works, restore a harmless copy to a test location and open it, leaving the working originals untouched.`,
        ],
      },
      {
        title: 'Why two devices feel like two copies',
        paragraphs: [
          `Seeing the same files in two places is visually identical to having two copies. The eye cannot tell a mirror from a photograph. The service encourages the confusion by calling itself storage and showing you the files everywhere. The difference only appears at the moment of a mistake, which is the one moment it is too late to discover it.`,
          `Two habits. For any folder you care about, ask one question before you trust it. If I deleted this right now, where would a copy still be, and for how long? And treat a second device as a second window onto the same folder, never as a second copy, until you have found the photograph.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Which connection carries deletion?',
        alt: 'A laptop synchronises through a cloud folder to a tablet, while a separate removable backup is disconnected between backups.',
        caption: `Follow the two sync arrows first, laptop to cloud to tablet: those are the mirror, and a deletion travels along them in seconds. Then look at the bottom-left box and the one arrow leading to it, labelled deliberate backup. That arrow is only connected when you choose to connect it, which is what makes the box a photograph rather than another mirror. Logical storage diagram.`,
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
        `Pick one folder you would mind losing and work out, from the service's own description, whether it is synchronised, backed up, or both. The word the service uses matters less than whether a deletion on one device appears on the others.`,
        `Read the deleted-files and version-history pages for your actual plan and write down the retention period in days and anything excluded. A number you have read is worth more than a feeling that the cloud keeps everything.`,
        `Sketch every device and folder that receives the same changes, with arrows, like the diagram. Do not delete a real file to see whether the arrows are right; the sketch is the test.`,
        `Name one protected place, outside the synchronised tree, where a copy of the important files could live, or write honestly that no such place exists yet and that is the next job.`,
      ],
      notice: `You can say which copy would still exist after a deletion and for how long, instead of counting how many screens the files appear on. You know where the photograph is, or that there is not one.`,
      troubleshooting: `If two folders have different names but sit under the same synchronisation root, they are one mirror with two labels; do not count them as independent. If the help pages describe a feature your plan does not include, write down the plan you have, not the one in the screenshot.`,
    },
    recall: {
      prompt: 'A bad edit appears on your phone and laptop. What recovery question matters more than which device made it?',
      answer: `Which device made the edit does not matter, because the mirror has already shown the coffee stain on every screen. The question is where a photograph from before the edit still exists. Does the service keep earlier versions of this file, and is the version you want still inside the retention window for your plan, or did it expire last week? Is there a separate backup, taken on purpose and not connected to the sync, that holds the file as it was? If the answer to both is no, then there is no earlier state to go back to, however many devices you own. Finding that out while the edit is small and fresh is far better than finding it out after the retention window has quietly closed.`,
      hint: 'You need an earlier state, not another view of the current one.',
    },
    quiz: {
      question: 'Two devices show the same missing folder. Which evidence would support a recovery plan?',
      options: ['Documented retained versions or a separate backup containing it', 'A third device that receives the same deletions', 'A different icon for the same synchronised folder'],
      correctIndex: 0,
      explanation: `Documented retained versions, or a separate backup that actually contains the folder, is a photograph from before the deletion, and recovery depends on exactly one of those existing. A third device receiving the same deletions is a third mirror showing the same empty space. A different icon on the same synchronised folder changes how the mirror looks and nothing about what it holds.`,
    },
    takeaway: `Synchronisation is a mirror and a backup is a photograph: the mirror shows every change, deletions included, on every device within seconds, so for any folder you care about ask where a copy would still exist after a mistake and for how long, read the retention rules for your actual plan, and keep the important things in a copy that is not connected when you tidy up.`,
    sourceNote: 'NCSC backup guidance supplies the safety basis. Cloud retention and recovery capabilities depend on the service and account plan.',
  },
  {
    id: 'life-018',
    title: 'Open a restored copy before trusting the backup',
    outcome: `Prove a backup works by restoring one recognisable file into a separate test folder, opening it, and checking a detail you know should be there, all without touching the working original.`,
    scene: 'A backed-up reading list should contain a recently added final book title.',
    sections: [
      {
        title: 'The green tick leaves questions unanswered',
        paragraphs: [
          `Every night your laptop reports backup complete with a small green tick. Every morning you feel quietly responsible. Yesterday you added a book to the reading list you have kept for years, the last line of a long document. Here is a question the tick cannot answer: is that line in the backup? And a second one it also cannot answer. If the laptop died tonight, could you actually get the list back and open it?`,
          `Complete may mean the folders the software was told about were copied. That is not the same as every folder you assumed it included. And a copy sitting on a drive somewhere is not the same as a file you can retrieve and read. The tick is a report that a process ran. A restore check is the only thing that shows whether a saved file comes back in a form you can use.`,
        ],
      },
      {
        title: 'Choose content you can recognise',
        paragraphs: [
          `A fire drill does not test the alarm by setting fire to the building. It tests that the alarm sounds, that the doors open, and that people get to the car park, using a bell on a Tuesday morning with the building intact. The point is to find out whether the system works before you need it. It does so in a way that costs nothing if it does not.`,
          `A restore test is a fire drill for your backup, and it has the same two rules. Pick something harmless to test with, and leave the real thing standing. Choose a file whose contents you know well and that has a recent, specific change. In the fictional reading list, the last entry is a book called River atlas, added yesterday. A backup from last week would not have that line. A backup from last night should. That detail is better evidence than the file's name. A file called reading-list.txt will exist in both the old and new backups, and only the contents tell them apart. Then restore it using the backup software's own supported route, into a fresh folder you have made for the purpose. Do not delete the original to make the drill feel realistic. Do not let the software overwrite your working folder. You may also need a password or the right application to open what comes back. Discovering that on a Tuesday is the whole value of the drill.`,
        ],
      },
      {
        title: 'Record exactly what the test established',
        paragraphs: [
          `Open the restored copy and look for River atlas at the bottom. Check which backup version the software said it was restoring, and compare a couple of other lines you recognise. Be careful with the file's date stamp. A freshly restored file is often stamped with the moment of the restore, not the moment you last edited it. The timestamp alone can mislead you about which version you have.`,
          `If the line is missing, do not restore again over the original in frustration. Go and look at what the backup was configured to include and when it ran. The drill has done its job by finding a gap while the real list is still safe. If the line is there, write down three things: the file, the route you used to get it back, and today's date. Then be honest about the size of the result. One restored file proves that this route works for this file. It does not prove that every photograph, archive, or encrypted document in the backup will come back. One alarm bell does not prove every fire door opens.`,
        ],
      },
      {
        title: 'Why the tick is trusted',
        paragraphs: [
          `The tick arrives every night with no effort and no bad news. A system that never complains feels like a system that works. Restoring takes ten minutes and might find a problem, so it never gets done, and the backup's first real test is the day the laptop dies. Fire drills are compulsory for exactly this reason. Nobody runs one voluntarily until the week after a fire.`,
          `Two habits. Every so often, restore one recognisable file into a separate folder and open it. Treat the backup software's green tick as a report that the process ran and nothing more. And always drill with the original intact. A test that could destroy the thing it tests is not a test.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Restore beside the original, not over it',
        alt: 'Backup storage sends a reading-list copy to a test folder, while the original remains in a separate working folder.',
        caption: `Follow the single arrow from backup storage into the restore-test folder; that is the drill. Then notice that no arrow touches the working original at the bottom. It stays where it is, so that the recovered copy can be compared against it and nothing is lost if the drill reveals a problem. Logical storage layout.`,
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
        `Choose a file that is not sensitive and that you know well, and write down one specific detail or recent change in it, such as the last line you added. That detail is the bell you are listening for.`,
        `Follow your backup software's own restore instructions to bring a copy of that file into a new, empty test folder. If the only option offered is to overwrite the live file, cancel; a drill that could burn the building is not a drill.`,
        `Open the restored copy and look for your detail. Check which backup version the software said it restored, and do not rely on the file's date stamp, which may just show the time of the restore.`,
        `Write down the result: file, route, version, date, and anything you needed that you did not have, such as a password. If you discover you have no backup at all, write that down as the finding and plan one; do not record a restore test that did not happen.`,
      ],
      notice: `You hold direct evidence that this file, from this version, can be retrieved and opened by you, today, with the original still sitting untouched in its folder for comparison.`,
      troubleshooting: `If the restored file is older than expected or will not open, keep both copies and investigate what the backup included, when it ran, the file format, and any credentials, through the software's official help. Do not run a second restore over the original to make it match.`,
    },
    recall: {
      prompt: 'A restored spreadsheet opens, but its newest sheet is absent. What did the test succeed at and fail to establish?',
      answer: `The drill proved two useful things: the restore route works, and the file that comes back is readable in the right application. Both are worth knowing and worth writing down. What it did not prove is that the backup contains your most recent work, because the newest sheet is the River atlas line and it is missing. That points at timing or selection: the backup you restored from may have run before the sheet was added, or that spreadsheet may sit in a folder the backup skips, or the software may keep only a version from a few days ago. Check the backup's schedule and its list of included folders, and look at which version you restored. Opening a file and restoring the version you intended are separate checks, and this drill passed one and failed the other.`,
      hint: 'Opening a file and restoring the intended version are separate checks.',
    },
    quiz: {
      question: 'A restore dialog offers overwrite original or choose another folder. Which fits this exercise?',
      options: ['Overwrite so the application uses the restored version immediately', 'Choose a separate folder and inspect the copy', 'Delete the original first to avoid duplicate names'],
      correctIndex: 1,
      explanation: `Choosing a separate folder is the fire drill with the building intact: the recovered copy can be opened and compared while the original stays safe, which is all the evidence a small test needs. Overwriting the original replaces a file you know is good with one you have not yet checked, and if the restore is older or broken you have just lost the newest version. Deleting the original first turns the test into the disaster it was supposed to prepare you for.`,
    },
    takeaway: `Treat a backup's green tick as a report that a process ran, and run a fire drill instead: restore one file you know well into a separate folder, open it, look for a detail that only the latest version would contain, write down the route and the result, and never let the drill overwrite or delete the original, because one recovered file proves that route for that file and nothing beyond it.`,
    sourceNote: 'This sample check builds on NCSC backup guidance. It is not a full disaster-recovery test or proof that every backed-up file is usable.',
  },
  {
    id: 'life-019',
    title: 'Check what survives outside the original app',
    outcome: `Test an exported note by opening it outside the app that made it and checking the specific things you need, the text, the table layout, and the attachments, before you let the original go.`,
    scene: 'A plant journal contains a dated table and an attached photograph of a nursery label.',
    sections: [
      {
        title: 'The export button is a beginning',
        paragraphs: [
          `For three years you have kept a plant journal in an app on your phone. One entry records a fern you bought at a nursery. There is a small table of dates and observations: how often you watered it, when the new fronds came. There is a photograph of the nursery label with the variety name and care notes. You are changing phones and the app is not available on the new one. So you tap Export, and a file appears in your documents folder.`,
          `It feels done. The journal has left the app and become a file, and files are portable. But a file existing outside the app tells you only that something was written to disk. It does not tell you whether the table still lines up its dates with its observations. It does not tell you whether the photograph of the label made the journey or stayed behind. You wanted to keep specific things. You have not yet looked at whether you kept them.`,
        ],
      },
      {
        title: 'Formats preserve different features',
        paragraphs: [
          `Moving house, you pack the contents of a room into boxes. Books survive any box. A framed picture survives if it was wrapped. A houseplant survives if someone remembered it was alive and did not seal it in cardboard for a week. The boxes all arrive. The removal firm counts them off and says everything is here. Whether everything is still what it was depends on what each thing was and how it was packed.`,
          `An app keeps your journal in its own private arrangement: the words, the attachments, the links between them, and the information that lets you edit. An export packs some of that arrangement into a different format. Each format is a different kind of box. A plain-text export carries words faithfully and tends to flatten a table. The date column and the observation column become one long line, and you can no longer tell which watering went with which frond. A PDF preserves exactly how a page looked, which keeps the table readable. But a PDF of a page does not necessarily carry a photograph that was attached rather than displayed, and it is no longer editable. No format is the right box for everything. The useful question is what you need to still be able to do. Here, that is to read each observation beside its date, and to see the label. Keeping the original app and its data a little longer means that anything the export dropped is still retrievable.`,
        ],
      },
      {
        title: 'Open it somewhere independent',
        paragraphs: [
          `Open the exported file in a different reader, one that has nothing to do with the journal app. The app itself will happily show you its own data and tell you nothing about portability. Then look past the first sentence. Find a specific row of the table and check the date is still beside its observation. Scroll to where the photograph should be. In the fictional example, the PDF shows the table clearly and the photograph is simply not there. The export is partly useful and not a replacement for the entry.`,
          `That is a result, not a failure. Look in the app for a way to include attachments in the export or to export them separately. If you do that, keep the image file in the same folder as the PDF with a matching name, so the two travel together. Write down what the export lacks instead of deleting the original on the strength of a glance at page one. One boundary. If the notes are work records, use whatever export and storage route your employer has approved. Your convenience in changing phones does not authorise copying their information elsewhere.`,
        ],
      },
      {
        title: 'Why the download feels like the whole journal',
        paragraphs: [
          `The export produces a file with the right name, the right icon, and the first lines you expect when you open it. The mind stops checking at the first match. The missing photograph is on page four and absent, and absence is quiet. The removal firm counted the boxes. Nobody opened the one with the plant in it until the smell.`,
          `Two habits. Before exporting, write down the two or three specific features you need to survive. After exporting, go and find each one in a reader that is not the original app. And keep the original until every item on that short list has been found. The export can be redone and the original cannot.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What the plant-journal export kept',
        alt: 'The source journal has a dated table and label photograph, while the example PDF contains only the dated table.',
        caption: `Read the two boxes as a before and after of a house move. The original carries two things you wanted: the dated table and the label photograph. The PDF, opened in another reader, carries one. Look for what is missing rather than what arrived, because the table being readable is exactly what makes the absent photograph easy to overlook. Fictional result; other exporters behave differently.`,
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
        `Pick one note that is not sensitive and write down two details worth keeping, such as which date sits beside which entry in a table, and one attached image. These are the houseplant and the framed picture; they are the things that might not survive the box.`,
        `Export a copy using the app's own export option, and keep the original exactly as it is. Do not upload the note to an unfamiliar website that offers to convert it, since you would be handing your notes to a stranger to save a tap.`,
        `Open the exported file in a different reader, not the original app, and go looking for both details. Check a specific table row and scroll to where the attachment should appear; do not stop at the first paragraph.`,
        `Write down what arrived and what did not. If the attachment is missing, find the app's documented way to export attachments and keep the resulting files in the same folder as the main export, named so they clearly belong together.`,
      ],
      notice: `You can name exactly what survived the move and exactly what still depends on the original app, so the decision to delete the app is made on evidence rather than on a file icon.`,
      troubleshooting: `If the exported file will only open in the app that made it, you have probably exported the app's own archive format rather than a portable document; look for a PDF or plain-text option. If a table has collapsed into one long line, try a different format before deciding the data is lost.`,
    },
    recall: {
      prompt: 'A budgeting export keeps transaction text but loses formulas. Is it useless, or a complete replacement?',
      answer: `Neither. The books arrived and the houseplant did not: every transaction you entered is there and readable, which for a record of what you spent may be all you need, but the formulas that totalled each month and carried balances forward have gone, so the export can no longer calculate anything. Whether that matters depends on the job you want the file for. If it is a record, the export is sufficient and worth keeping. If you want to keep budgeting in it, it is not, and you should keep the original and look for a spreadsheet export that preserves formulas, or re-enter the handful of totals you rely on. Judge the box by what you need to do with its contents, not by the fact that it arrived.`,
      hint: 'Judge the export against the future job, not the existence of a download.',
    },
    quiz: {
      question: 'A note export opens correctly but one attachment is missing. What should you do before removing the app?',
      options: ['Assume the attachment will appear when the file is reopened', 'Delete the original because the text is readable', 'Preserve the original and obtain a supported copy of the attachment'],
      correctIndex: 2,
      explanation: `Keeping the original while you get a proper copy of the attachment through a supported route is the only option that leaves the houseplant alive; the original is the one place the photograph still certainly exists. Assuming the attachment will appear on reopening mistakes a quiet absence for a display glitch, and nothing in the file will change by looking again. Deleting the original because the text reads well is counting the boxes without opening them, and the thing you lose is exactly the thing you had already noticed was missing.`,
    },
    takeaway: `An export is a house move into boxes of a different shape: before you export, list the two or three things that must survive, then open the result in a reader that is not the original app and go looking for each one, especially the attachments that leave no gap when they fail to arrive, and keep the original until every item on the list has been found.`,
    sourceNote: 'National Archives preservation guidance informs portability concerns. The plant-journal example is original; no format is promised to remain usable forever.',
  },
  {
    id: 'life-020',
    title: 'Plan the device handover before erasing anything',
    outcome: `Before giving a device away, confirm a verified copy of what you need exists, then find and read the manufacturer's own handover procedure for that exact model, without doing any erase as practice.`,
    scene: 'An old personal laptop is being prepared for donation.',
    sections: [
      {
        title: 'An empty desktop is not an empty device',
        paragraphs: [
          `Your old laptop has sat in a drawer for a year and a local charity will take it. You open it up, drag the photos folder to the bin, and empty the bin. You look at a clean desktop with a nice wallpaper and nothing on it. It looks like a laptop nobody has ever used. You feel ready to hand it over.`,
          `The desktop is a surface. Underneath it are the browser with your accounts still signed in, saved passwords in the keychain, and email downloaded over three years. The cloud sync client is still linked to your account. The deleted photographs are still there too. Ordinary deletion often leaves files on the disk in a recoverable form. An empty desktop proves the icons are gone. A handover needs a supported process for the whole machine. And before any step you cannot undo, there is an earlier question that matters more. What on this laptop do you still need, and have you actually checked that a copy exists somewhere else?`,
        ],
      },
      {
        title: 'Retention and removal are separate checks',
        paragraphs: [
          `Moving out of a rented flat has two jobs that must happen in order. First you take everything you want. You pack, you carry the boxes out, you check the cupboards and the loft and under the bed. Only then do you hand back the keys and let the agent change the locks. Nobody hands back the keys and then remembers the box of letters in the loft. By then the locks have changed and the box is somebody else's problem.`,
          `A device handover has the same two jobs in the same order. Retention first. Find the files and records that must survive, and verify a copy. Verifying means more than seeing a folder with the right name on a backup drive. Open a few files from it and check that they are the ones you think they are. Removal second. Only once retention is verified do you consider erasing. A successful reset is the locks changing, and it will destroy the only usable copy of anything you forgot to carry out. Removal itself is more than dragging to the bin. Ordinary deletion typically removes the pointer to a file rather than the file, so the data can remain on the disk. Whether a reset actually makes it unrecoverable depends on the storage type and whether the disk was encrypted. That is why the right procedure is specific to the model. Some devices also need accounts unlinked or an activation lock removed in a particular order, or the next owner cannot set the machine up at all. Follow the manufacturer's sequence for your model. Do not mix three tutorials for machines that look similar.`,
        ],
      },
      {
        title: 'Prepare a plan, not an improvised wipe',
        paragraphs: [
          `For the drawer laptop, look up the manufacturer's own page for selling or giving away this model. Read it from start to finish before touching anything. Write down the stages it describes: back up, sign out of accounts and services, the supported erase, and whatever final check it says confirms the machine is ready. Note anything you will need during the process, such as a password you have not typed in a year, or a charger. Keep the instructions open on another device. The laptop will restart during the real procedure and you will lose the page.`,
          `This lesson ends at the plan. Do not reset the laptop as a rehearsal. The real procedure is the one time it should run. If the machine cannot run the supported process, perhaps because it will not start or the version is too old, ask a reputable repair or recycling service about secure handling. Do not attack the drive with a hammer in the kitchen. A laptop that belongs to your employer goes back through their return process, whatever you have personally stored on it. And when the clean setup screen finally appears, treat it as the manufacturer's end state. It is not a forensic certificate about every condition the disk might be in.`,
        ],
      },
      {
        title: 'Why the desktop convinces',
        paragraphs: [
          `A device presents itself through its screen. A clean screen reads as a clean device, the way a tidied room reads as an empty flat while the loft is still full. The accounts, the sync client, and the recoverable files are all invisible from the desktop, which is precisely where you are looking. The reset button, meanwhile, is prominent and tempting. Pressing it before verifying your copies is handing back the keys with the letters still upstairs.`,
          `Two habits. Before any handover, open sample files from your backup to prove the copy is real, and only then think about erasing. And find the manufacturer's procedure for the exact model and read it to the end before you begin. The order of account removal and erasure should be theirs, not something you assembled.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Handover planning gates',
        alt: 'The plan verifies retained data, reads model-specific account and erase instructions, and identifies the final handover check.',
        caption: `Read the first box as carrying the boxes out of the flat and check its detail: the backup is verified by opening sample content, not by seeing a folder name. Nothing in later boxes happens until that one is done. The third box is the locks changing, in the order the manufacturer sets for this model, and the fourth is their final check, not yours. Planning sequence only.`,
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
        `Confirm the device is yours to give away and find its exact model from a label, the settings screen, or your purchase record. The model is what makes the right instructions findable.`,
        `List everything on it you would want to keep, and for each item write where a copy already lives and whether you have opened that copy to check it. An unchecked copy goes on the list as still to verify, not as done.`,
        `Find the manufacturer's own page for selling or giving away that model and read it to the end. Write down the stages in their order, account removal, erase method, final check, without performing any of them.`,
        `Note anything you are missing, a forgotten password, a charger, a device too old for the supported process, and write who you would ask: the manufacturer's support, or a reputable service. If the device is employer-owned, your plan is simply their return process.`,
      ],
      notice: `Your plan verifies every needed copy before any irreversible step, and the erasure order on the page is the manufacturer's for this exact model rather than one you pieced together.`,
      troubleshooting: `If the official instructions do not match the model or the storage setup you have, stop and ask rather than substituting a generic erase command. Do not try to destroy the drive physically at home; a reputable service can handle a device that cannot run the supported process.`,
    },
    recall: {
      prompt: 'A personal phone will not start, so you cannot use its supported reset. What should happen before donation?',
      answer: `Keep hold of the phone. A black screen means the phone will not show you its contents; it does not mean the contents are gone, and a repairer or the next owner may get it running again with everything still on it. This is the flat you cannot get back into with the letters still in the loft. Because the supported reset is unavailable, go to the manufacturer's support or a reputable repair or recycling service and ask about secure handling for a device that will not power on; they may be able to erase the storage or destroy it properly. Until someone qualified has done that, the phone is not ready to leave your possession, however dead it looks. If any of your data is only on that phone, also ask whether recovery is possible before it is wiped.`,
      hint: 'A failed screen or power-up does not establish erased storage.',
    },
    quiz: {
      question: 'The photographs are backed up, but old accounts are still signed in. Is the laptop ready to give away?',
      options: ['Not yet; follow the supported account and erasure procedure', 'Yes, because retained photographs were the only concern', 'Yes, after deleting the desktop shortcuts'],
      correctIndex: 0,
      explanation: `Not yet. The backup finished the first job, carrying the boxes out, but the second job has not started: signed-in accounts, saved passwords, and recoverable files are all still on the machine until the manufacturer's account-removal and erase steps are run in order. Treating the photographs as the only concern confuses retention with removal; keeping your data safe and keeping it off the laptop are different tasks. Deleting desktop shortcuts tidies the surface and touches none of the accounts or files underneath.`,
    },
    takeaway: `Giving a device away is moving out of a flat: carry out everything you want first, and verify the copies by opening them, then hand back the keys only through the manufacturer's own procedure for that exact model, read to the end before you start, because a clean desktop is a tidied room with the loft still full and a reset run too early is the locks changing on the only copy.`,
    sourceNote: 'FTC disposal and NCSC backup guidance supply the basis. The exercise is read-only planning, not a secure-erasure certification.',
  },
  {
    id: 'life-021',
    title: 'Find the wear part behind the durability claim',
    outcome: `Before calling a product repairable, find the small part that actually wears out, check that the maker sells it for your exact model with instructions, and confirm you could really get hold of it.`,
    scene: 'A lunchbox lid still closes, but its removable sealing ring is split.',
    sections: [
      {
        title: 'The box outlasted its seal',
        paragraphs: [
          `Your lunchbox is five years old and still perfectly good: no cracks, lid clicks shut, handle intact. But the soft ring that sits in the groove of the lid has split. Yesterday's soup made it to the bottom of your bag. The box was sold as reusable and built to last, and in one sense it has lasted. The part that failed is about two grams of flexible plastic.`,
          `Buying a whole new box would throw away several sound parts to fix one small one. The question is whether you have to. A reusable label on the packaging says nothing about whether the maker sells that ring on its own. Before you shop for a replacement box, look at the one you own as a set of parts. Ask which of them wear out and what the maker offers when they do. The evidence you want is not a promise that the box lasts forever. It is a named part, a documented way to swap it, and a real route to buying it.`,
        ],
      },
      {
        title: 'Why a similar ring can fail to fit',
        paragraphs: [
          `A car tyre is a wear part by design. Nobody is surprised when it needs replacing, and nobody buys a new car because the tread is gone. But you also do not fit any tyre that is roughly the right size. The sidewall carries a code for width, profile, and rim. A tyre that is close but wrong rubs on the arch or sits loose on the wheel. The car was designed around a specific tyre. The tyre is replaceable precisely because that specification is published.`,
          `A sealing ring is the tyre of a lunchbox. It fills the gap between the lid and the rim when the lid closes. The seal depends on its exact cross-section and diameter matching the groove it sits in. A ring that looks the same can be a little too thin to touch the rim, too thick to let the lid latch, or made for a slightly different groove in a sister model. Stretching a near-match over the lid or trimming a long one to length does not give you an equivalent seal. It gives you a ring that is in the groove and may or may not keep soup in. For anything that touches food there is one more layer. The maker specifies a material that is safe at the temperatures you will use, including the dishwasher. A generic rubber ring from a hardware shop is not automatically suitable just because it can be pushed into place.`,
        ],
      },
      {
        title: 'Check the model and the replacement route',
        paragraphs: [
          `Suppose the maker's range has two boxes with near-identical lids, the Compact and the Wide. You find a spare-seal page and the photograph looks exactly like your ring. Read the compatibility line: fits Compact. Your box is the Wide. That is a mismatch until the maker says otherwise, however convincing the photograph. Two grooves that look alike can differ by a millimetre that matters.`,
          `When you do find the ring listed for the Wide, three more checks turn a listing into a repair route. Is it actually in stock? What does it cost delivered? A two-pound ring with nine pounds of shipping is a different decision. And does the maker give user instructions for fitting it, so you know it is meant to be swapped at home? Stock today does not promise stock in three years, so write down what you confirmed and what you could not. Until the right ring arrives, do not keep using a food container in a way its maker's instructions do not cover.`,
        ],
      },
      {
        title: 'Why the slogan stands in for the part',
        paragraphs: [
          `Durable and reusable are printed on the box. The spare-parts page is three clicks deep on a website. So the slogan is what people remember at the moment the seal splits. A slogan cannot be ordered. The tyre code on the sidewall is the useful information. The lunchbox equivalent is a model number and a part listing, which nobody reads until something leaks.`,
          `Two habits. For any product you expect to keep, find the one or two parts most likely to wear out. Look up whether they are sold separately for your exact model, before you need them. And treat a photograph of a spare as a picture, not a fit. The compatibility list is the only thing that fits.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The small part that seals the lid',
        alt: 'A separated lid, sealing ring, and lunchbox rim show where the correctly specified ring makes contact.',
        caption: `Look at the ring in the middle and the two arrows leaving it. One goes up to the groove it has to match exactly, like a tyre to a rim; the other goes down to the rim it has to press against. A ring that fails either arrow leaks. The exploded view shows what fits what, not how to fit it; the maker's instructions do that. Schematic.`,
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
        `Pick one everyday product with an obvious wear part: a lunchbox seal, a rucksack buckle, a kettle filter. Find its exact model, usually moulded underneath or on a label, because the tyre code is what makes the rest possible.`,
        `On the maker's site, find the part's name or number and the list of models it fits. If your model is not on the list, write unknown, not probably; a sister model with a similar lid is exactly the Compact-versus-Wide trap.`,
        `Check three things without ordering: whether it is in stock, what it costs with delivery, and whether there are user fitting instructions. A part you cannot get, cannot afford to ship, or are not meant to fit yourself is not a repair route.`,
        `Write a one-line verdict: confirmed route, incompatible part, or question outstanding. Do not improvise a substitute from a hardware shop in the meantime.`,
      ],
      notice: `You can point at a specific part, for a specific model, with a price, a delivery route, and instructions, instead of at a word on the packaging. The slogan has become a part number.`,
      troubleshooting: `If the parts page gives only a range name and not your model, ask the maker to confirm compatibility before you buy or take anything apart. If no spare is listed at all, that is the finding: the product is durable until this part fails, and then it is not repairable by you.`,
    },
    recall: {
      prompt: 'A vacuum has a washable filter but no listed replacement when it tears. What does washable establish?',
      answer: `Washable tells you about routine care: you are allowed to rinse the filter rather than throw it away, which is useful and extends its life. It says nothing about what happens when the filter tears, which is a different event with a different need. A tyre can be inflated for years and still eventually need replacing, and a filter that can be washed can still fail. Until you find a replacement filter listed for your exact vacuum model, with a way to buy it and fit it, the honest description is cleanable while intact, not maintainable after damage. Look up the part before the tear, because a vacuum with a torn filter and no spare is a vacuum you are about to replace whole.`,
      hint: 'Cleaning a component and replacing a failed component are different capabilities.',
    },
    quiz: {
      question: 'A spare seal looks right but lists another size in the same range. What is the useful next step?',
      options: ['Assume the shared range name means the lids are identical', 'Confirm compatibility with the exact model before ordering', 'Order it and trim away any excess material'],
      correctIndex: 1,
      explanation: `Confirming compatibility with your exact model is reading the tyre code rather than judging the tread: the maker's list is the only thing that knows whether the Compact groove and the Wide groove are the same. Assuming the range name makes the lids identical is the mismatch the lesson describes, and a millimetre of difference is enough to leak. Trimming a seal to fit gives you a ring in the groove with no evidence it seals, and no evidence the material is suitable for food.`,
    },
    takeaway: `A durable product is one whose wear parts have a tyre code: before you trust the slogan on the box, find the small component that actually fails, check that the maker sells it for your exact model with fitting instructions, confirm it is in stock at a sensible delivered price, and never let a photograph or a shared range name stand in for the compatibility list.`,
    sourceNote: 'The lunchbox range is fictional. Shopping and warranty references inform the checklist, not a promised product lifespan.',
  },
  {
    id: 'life-022',
    title: 'Read the warranty against one actual failure',
    outcome: `Compare two warranties by picking one failure you worry about and asking of each: is it within the period, is that failure covered, what will they do about it, and what will it cost you to claim.`,
    scene: 'Two rain jackets advertise two-year warranties but treat a failed zip differently.',
    sections: [
      {
        title: 'The same headline can cover different things',
        paragraphs: [
          `You are choosing between two rain jackets for the daily cycle to work. Both tags say two-year warranty, in the same confident type. The thing you actually worry about is the zip, because you will open and close it four times a day in all weathers, and every jacket you have ever retired was retired because the zip went.`,
          `Two years and two years look equal, and the equality tells you almost nothing. Neither tag says whether a zip that stops engaging is the kind of failure the warranty covers, or what you would have to do and pay to get a remedy. To compare the two promises you need one concrete event to test them against. Pick this one: after a year of ordinary commuting, the zip stops engaging, and nobody has yet established why. Do not let the word broken stand in for every possible condition a warranty might mention, because the warranties will not.`,
        ],
      },
      {
        title: 'Separate the promise into questions',
        paragraphs: [
          `Two travel insurance policies both say worldwide cover for a year. One pays for a lost suitcase; the other excludes baggage altogether. One pays the hotel directly; the other reimburses you months later after you pay an excess. The headline is identical and the experience of claiming is completely different. Anyone who has made a claim knows to read the policy for the one thing that happened to them, not for the duration on the brochure.`,
          `A product warranty breaks into the same four questions. Duration: does your event fall inside the stated period? Scope: which failures qualify? A manufacturing defect, ordinary wear and tear, and accidental damage are three different categories, and the same warranty can treat them three different ways. Remedy: what does the maker promise to do, repair, replace, or refund? Cost and process: what must you supply, such as proof of purchase, and what must you pay, such as postage or a labour charge? A promise to repair does not automatically mean the maker pays to get the jacket to the repairer. The only way to answer the four questions is to read the written terms and the exclusions together. A salesperson's summary is the brochure, not the policy.`,
        ],
      },
      {
        title: 'Work through the zip example',
        paragraphs: [
          `Put the failing zip through both. In this fictional comparison, Warranty A covers manufacturing defects in the zip and asks you to pay return postage. Warranty B lists the zip as a wear part, excluded from cover. Both run for two years. The same symptom, a zip that will not engage after a year, leads to two different conversations. Under A, the question becomes whether the failure is a defect or wear, which the maker will assess when they see it, and you will be a few pounds out of pocket for the post. Under B, the written exclusion settles it before you start: the zip is not covered, whatever caused the failure.`,
          `Neither warranty is dishonest. They are different promises wearing the same headline. Save the full terms alongside the receipt, since the terms can change for later buyers, and put any unclear question to the seller in writing before you pay, so the answer is on record. One limit on all of this: you have compared the two warranties the makers chose to offer. Your legal rights as a buyer are a separate matter that depends on where you live, and they can give you more than either warranty does. The reference this lesson draws on describes U.S. rules.`,
        ],
      },
      {
        title: 'Why the duration wins the comparison',
        paragraphs: [
          `The duration is one number, printed large, and numbers compare instantly. Scope, remedy, and cost are paragraphs, and paragraphs do not fit on a swing tag. So two years versus two years feels like a draw, and the zip exclusion sits unread until the day the zip fails, which is the day it is most expensive to discover.`,
          `Two habits. Before comparing warranties, name the one failure you are actually afraid of and read each warranty for that failure alone. And file the full written terms with the receipt on the day you buy, because the brochure in your memory will not be the policy you have to claim against.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two years does not mean the same zip cover',
        alt: 'Warranty A covers qualifying zip defects with customer return shipping, while Warranty B excludes the zip despite the same duration.',
        caption: `Read the two labels and notice they are identical: two years, two years. Then read the detail lines against the one failure you chose, a zip that stops engaging. The left says the zip can qualify, with a postage cost attached. The right says the zip is excluded outright. Same brochure, different policy. Invented terms for comparison.`,
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
        `Take one warranty you have, or a public example, and write down one specific failure you would genuinely worry about for that product. Then search the written terms for that component or cause and note whether it is included, excluded, or not mentioned.`,
        `For that failure, record the four answers: the coverage period, the promised remedy, any postage or labour cost you would pay, and what proof of purchase they require. Where the terms are silent, write silent rather than guessing.`,
        `Draft one precise question about the biggest gap, for example whether the zip counts as a wear part, and note that you would ask it in writing. Keep the answer and the version of the terms you read together with the receipt.`,
      ],
      notice: `You can say exactly what the headline duration tells you about your chosen failure, which is only whether it is inside the window, and you have the other three answers written beside it.`,
      troubleshooting: `If all you can find is a promotional summary, ask for the full terms before you decide; a summary is the brochure. If the terms do not mention your failure at all, do not fill the silence with free replacement in your head. Silence is a question to ask, not a yes.`,
    },
    recall: {
      prompt: 'A chair warranty covers the frame for five years but gives different terms for upholstery. How would you assess a torn seat cover?',
      answer: `Ignore the five years for a moment, because the frame is not what tore. Find the upholstery section and read it for the one event you have: a torn seat cover. Ask the four questions of that section alone. What period applies to upholstery, which may be one year rather than five? Which causes qualify, since a seam that split is a defect and a cat's claws are accidental damage, and the terms may treat them differently? What is the remedy, a new cover or a repair? And what would you pay or send, perhaps photographs or the chair itself at your cost? The headline five years is the brochure for the frame. The seat cover has its own policy, and that is the one your claim will be judged by.`,
      hint: 'The part that failed may not share the headline coverage.',
    },
    quiz: {
      question: 'A covered repair requires customer-paid return shipping. Which statement is accurate?',
      options: ['The duration guarantees that every related cost is paid', 'Customer shipping means no repair can be covered', 'Coverage and customer outlay must be checked separately'],
      correctIndex: 2,
      explanation: `Coverage and what you pay are two of the four questions, and a warranty can answer yes to the first while still charging you postage under the fourth, exactly as Warranty A does; checking them separately is the only way to know what a claim will actually cost. Saying the duration guarantees every cost is paid reads the brochure's one number as if it answered all four questions. Saying customer shipping means nothing is covered gets it backwards, since the repair itself is covered and only the post is yours.`,
    },
    takeaway: `Read a warranty like an insurance policy, for the one thing you expect to go wrong: pick the failure you actually fear and ask of each warranty whether it is inside the period, whether that failure is covered, what the maker will do, and what claiming will cost you, because two years printed on two swing tags can be two entirely different promises.`,
    sourceNote: 'FTC warranty guidance concerns U.S. rules. The jacket terms are fictional and do not establish local statutory rights or decide a real claim.',
  },
  {
    id: 'life-023',
    title: 'Measure the space an object uses when it opens',
    outcome: `Before buying furniture, check three sizes, not one: the space it takes closed, the extra space it takes with a door or drawer open and someone using it, and the route it has to travel to get in.`,
    scene: 'A narrow hallway shoe cabinet fits when closed but projects farther when its bin tilts open.',
    sections: [
      {
        title: 'The outline on the wall is incomplete',
        paragraphs: [
          `The hallway of your flat is narrow and the shoes live in a heap by the door. You find a slim shoe cabinet online, the kind whose front tilts out as a bin so you drop shoes in from above. You measure the wall and compare it with the width and depth on the listing. It fits with room to spare. You can picture it there. You nearly buy it.`,
          `The outline you measured is the cabinet closed. That is one state of the object, and not the one it is in when anyone uses it. With the bin tilted open it leans out into the hall. A person has to stand in front of it, bending, with the front door swinging nearby. There is a third size too: the box it arrives in, and the turn at the top of the stairs it has to get round. The photograph shows a cabinet. You need to buy a cabinet, a space to open it in, and a route to carry it along.`,
        ],
      },
      {
        title: 'Calculate the open footprint',
        paragraphs: [
          `A parked car takes up its own length. A car with its door open takes up its length plus a door. The driver takes up more space still, half in and half out. Parking bays are painted for the closed car. Anyone who has squeezed out of a car in a tight bay, door against the next car, knows that the painted outline was never the space you needed.`,
          `Do the hallway sums with made-up numbers to see the shape of the problem. The hall is 120 centimetres wide. The cabinet, closed, sticks out 25 centimetres from the wall, leaving 95 centimetres to walk past. Open the bin and it comes out another 30 centimetres. The cabinet now uses 55 centimetres of the hall and leaves 65. The arithmetic is just 120 minus 25 minus 30. What it tells you is that the space changes by 30 centimetres every time the cabinet is used. What it does not tell you is whether 65 centimetres is enough. Enough depends on who walks there and whether the front door swings into that space. It depends on whether anyone uses a stick or a pushchair, and whether that hall is the way out in a fire. The calculation is a reason to look at the real hall. It is not a standard for how wide a hall should be.`,
        ],
      },
      {
        title: 'Check use and arrival separately',
        paragraphs: [
          `Draw the hallway from above on a sheet of paper, with its width written on. Draw the cabinet closed, as a rectangle 25 deep against the wall. Draw the open bin as a second rectangle sticking out 30 more. Now add the things the listing cannot know: where the front door swings, and where a person stands to drop shoes into the bin. If the door's arc or the walking route crosses the open bin, the cabinet fails the fit test even though it fitted the wall. A slimmer closed depth will not rescue it if the bin still opens into the door.`,
          `Then do the arrival check, which is a different drawing. The listing's packaged dimensions, the width of your front door, the turn on the stairs, and the maker's assembly and wall-anchoring instructions all belong on it. Do all of this on paper. Do not drag the hall table about to simulate the cabinet. Do not prop anything in front of the door to see how it feels, because a blocked exit is not a test you want to run. A pencil plan and a tape measure can find the conflict before you spend the money or arrange the return.`,
        ],
      },
      {
        title: 'Why the closed size gets measured',
        paragraphs: [
          `Listings give closed dimensions because they are the ones the maker can state without knowing your hall. The open projection is often not published at all. The eye measures the photograph, which shows the cabinet shut. So people buy the parking bay and discover the door problem on delivery day, standing in a hall with a flat-pack box and nowhere to put it.`,
          `Two habits. For anything with a door, drawer, lid, or flap, draw it open as well as closed and add a person using it, before you look at the price. And measure the route in as a separate job, box size against doorways and turns. A thing that fits the room but not the stairs has not fitted.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Closed and open projections occupy the hall',
        alt: 'A top-view hallway shows the wall-side cabinet, the additional open-bin projection, the remaining passage, and an entry door.',
        caption: `Read the two boxes at the top left to right: the closed cabinet, then the extra block the open bin adds, the car door swung open. The person on the right stands in what is left, 65 centimetres in this example. Then find the entry door at the bottom and the arrow to the passage: that arrow is the question the listing cannot answer. Schematic, not to scale; hypothetical numbers, not a safety standard.`,
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
        `Pick a piece of furniture you might actually buy and draw the space it would go in from above, with the measurements written on. Measure only what you can reach safely from the floor; nothing on this plan needs a chair to stand on.`,
        `Draw the item closed from the listing's dimensions. Then add any door, drawer, lid, or flap in its open position, using the maker's figure if they publish one. If they do not, draw a guess and label it unknown rather than leaving the open state off the plan.`,
        `Add the doors near it with their swing, and a mark for where a person stands to use it. Look for any overlap between the open state and a door arc or a walking route. That overlap is the car door against the next car.`,
        `On a second sheet, do the arrival check: packaged size against your front door, stairs, and turns, plus the maker's assembly and anchoring requirements. Record any conflict in writing; do not move heavy furniture or block an exit to find out.`,
      ],
      notice: `Your plan tells apart three different fits, stored, in use, and delivered, and you can see on paper which one the listing's dimensions actually answered.`,
      troubleshooting: `If the listing publishes only closed dimensions, message the seller for the open projection and the packaged size before treating the fit as confirmed. If the open state crosses the door swing, a slimmer cabinet is not the fix unless the bin opens somewhere else.`,
    },
    recall: {
      prompt: 'A washing machine fits a recess exactly, but the manual specifies connection space behind it. What is missing from the fit check?',
      answer: `The recess was measured against the parking bay, the machine's body, and the manual has just told you the car has a door. A washing machine needs its hoses and plug connected behind it, and the maker's clearance figure is the space those take, plus whatever room an installer needs to reach them. A machine that fits exactly has no space for any of that, so either it cannot be connected or the hoses are kinked behind it. The fit check is missing the installation envelope: the body plus the connection clearance the manual specifies, plus any side or top gap it asks for. Read the installation page of the manual before trusting the recess, and treat the installer's requirements as part of the size.`,
      hint: 'The object body is not the whole space needed to use it.',
    },
    quiz: {
      question: 'A cabinet fits the wall but its open drawer crosses an exit route. Which response follows the fit method?',
      options: ['Reconsider the layout or product before purchase', 'Judge only the closed dimensions because drawers close again', 'Assume a shorter opening time resolves the clearance'],
      correctIndex: 0,
      explanation: `Reconsidering the layout or the product treats the open state as part of the fit, which it is: a drawer across an exit route is a car door across the next bay, and the fact that it fitted the wall does not change that. Judging only the closed dimensions is the mistake the whole lesson is about; the drawer is open precisely when someone is standing there using it. Hoping a shorter opening time resolves it does not; a blocked exit is blocked for the whole time the drawer is out, however brief.`,
    },
    takeaway: `Furniture has three sizes, the painted bay, the car with its door open, and the route into the car park: draw the item closed, then open with a person using it and the nearby doors swinging, then check the packaged box against your front door and stairs, all on paper, because the listing's dimensions describe the one state the object is in when nobody is using it.`,
    sourceNote: 'The dimensions are hypothetical. This purchasing exercise does not replace building, accessibility, installation, or furniture-securing requirements.',
  },
  {
    id: 'life-024',
    title: 'Turn watts and hours into a usable estimate',
    outcome: `Work out what a device costs to run from its power, the hours you use it, and your tariff, and keep the maximum figure on the label separate from what it typically draws in use.`,
    scene: 'Two monitors are compared for five hours of daily use with explicitly assumed constant power draws.',
    sections: [
      {
        title: 'A watt is a rate, not the whole bill',
        paragraphs: [
          `You are choosing a monitor for working from home. One listing says 100 watts, the other says 60. The second number is smaller, and smaller sounds cheaper. A friend says the difference will add up over a year. You have no idea whether that means a few pence or a few hundred pounds, and the listing is not going to tell you.`,
          `A watt on its own cannot tell you. It describes how fast a device uses energy at a given moment, the way a speedometer describes how fast a car is going. A speedometer reading is not a distance, and a wattage is not a bill. To get to money you need how long the device runs and what you pay for each unit of energy. There is one more thing to check before any sums: which number the listing is quoting. A monitor's label might give its maximum possible draw, a typical figure measured in a test mode, or the trickle it uses in standby. These can differ by a factor of ten.`,
        ],
      },
      {
        title: 'Work the units through the example',
        paragraphs: [
          `Speed times time gives distance. Drive at 60 miles an hour for two hours and you have covered 120 miles. If fuel costs a known amount per mile, the trip's cost follows. Nobody is confused by this. The same three-step chain, rate, time, price, is all an energy bill is. The only trap is that the units have unfamiliar names.`,
          `Power times time gives energy, and energy is what you pay for. Take Monitor A and assume it draws a steady 100 watts for the five hours you work. One hundred watts for five hours is 500 watt-hours. Bills count energy in kilowatt-hours. A kilowatt-hour is simply 1,000 watt-hours, so 500 watt-hours is 0.5 kilowatt-hours. Now the price. Suppose your tariff is 0.20 of your currency per kilowatt-hour. The five-hour session costs 0.5 times 0.20, which is 0.10. Monitor B, assumed to draw a steady 60 watts for the same five hours, uses 300 watt-hours. That is 0.3 kilowatt-hours, costing 0.06. The difference between the two monitors over a working day is 0.04 of your currency, four pence or four cents. Notice the sizes of the numbers you did not get. The difference is not 40 of anything, even though 100 minus 60 is 40. That 40 was a difference in speed, not in distance, and certainly not in money.`,
        ],
      },
      {
        title: 'Keep the assumptions attached',
        paragraphs: [
          `The sums assumed a steady draw, and real monitors do not oblige. Power rises with brightness, changes with what is on screen, and drops to almost nothing when the display sleeps. The biggest mistake is to take the maximum rating on the label, which is the speedometer's top mark, and multiply it by every hour you own the thing. That treats the car as flat out the whole time. It overstates ordinary use, sometimes badly. For a comparison worth acting on, use measured or documented figures for comparable use, and your own tariff rather than the one in this example.`,
          `Keep two more things out of the calculation, deliberately. It ignores the fixed daily charge on your bill, which you pay whether the monitor is on or not. It assumes the price never changes. And it says nothing at all about whether replacing a monitor you already own would ever pay for itself. Four pence a day against the price of a new monitor is a separate sum. It has its own uncertainties about how long the thing lasts and how much you really use it. An illustrative energy saving is not a recommendation to buy.`,
        ],
      },
      {
        title: 'Why the wattage feels like the cost',
        paragraphs: [
          `The wattage is the one number on the listing, so it becomes the comparison. A bigger number reads as a bigger bill the way a higher speed reads as a longer journey. Nobody shows you the hours or the tariff, because the seller does not know them. The 40-watt gap gets quoted as if it were pounds. A sensible four-pence difference turns into a reason to replace a perfectly good screen.`,
          `Two habits. Whenever a power figure is quoted, ask which one it is, maximum, typical, or standby, before you compare anything. And never stop at watts. Multiply by your real hours and divide by 1,000 to get kilowatt-hours, then multiply by your tariff, so the comparison ends in money rather than in a rate.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Energy over the same five hours',
        alt: 'Monitor A uses 0.5 kilowatt-hours and Monitor B uses 0.3 under the stated constant-power assumptions.',
        caption: `Read the detail text under each bar before the heights: it shows the speed-times-time sum that produced the energy figure, including the division by 1,000 that turns watt-hours into the units on your bill. The bars differ by 0.2 kilowatt-hours, which at the example tariff is 0.04 of your currency, not 40 of anything. Hypothetical steady draws, not measurements.`,
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
        `Write three headed columns, power in watts, time in hours, price per kilowatt-hour, and put the example values in with their units. Keeping the units beside the numbers is what stops a speed being mistaken for a distance.`,
        `For each monitor, multiply watts by hours, then divide by 1,000. Check that you get 0.5 and 0.3 kilowatt-hours. If you got 500 and 300, you have energy in watt-hours and have not yet converted to the unit on the bill.`,
        `Multiply each energy figure by 0.20 and subtract. Label the answer as what it is: a hypothetical difference of 0.04 for one five-hour session, at an example tariff.`,
        `Write down one assumption you would have to check before using this on a real purchase, for example whether 100 watts is the monitor's maximum or its typical draw at your brightness.`,
      ],
      notice: `Your page shows 0.5 and 0.3 kilowatt-hours and a cost difference of 0.04, with the units written at every step, and the 40-watt gap from the listings has become four pence rather than forty of anything.`,
      troubleshooting: `If your answer is enormous, you have probably skipped the division by 1,000 or multiplied by the hours twice. If your two monitors come out identical, check that you used each one's own wattage rather than the same figure for both.`,
    },
    recall: {
      prompt: 'An appliance label gives its maximum input power, but it cycles off during use. What makes a bill estimate uncertain?',
      answer: `The label is the speedometer's top mark, and an appliance that cycles on and off spends much of its time at zero. A fridge, a heater with a thermostat, or a kettle that boils and stops will draw its maximum for a fraction of the hours it is plugged in, so multiplying the label figure by the whole day is multiplying the car's top speed by the length of the journey when it spent half the time parked. To estimate the bill you need the energy actually used over a typical period, from the maker's documented consumption figure or a plug-in meter, plus the hours and your tariff. Without a measured or documented average, the honest answer is an upper bound, and probably a loose one.`,
      hint: 'A rating and a continuous measurement are different inputs.',
    },
    quiz: {
      question: 'At the stated tariff, what is the difference between the two hypothetical five-hour sessions?',
      options: ['0.20 units, the difference in kWh', '0.04 units, the energy difference multiplied by the tariff', '40 units, the difference in watts'],
      correctIndex: 1,
      explanation: `The energy difference is 0.5 minus 0.3, which is 0.2 kilowatt-hours, and money only appears once that is multiplied by the tariff of 0.20 per kilowatt-hour, giving 0.04. Calling 0.20 the answer stops at energy and reports a quantity of kilowatt-hours as if it were a price. Calling 40 the answer stops even earlier, at the difference in watts, which is a difference in speed and was never a cost at all.`,
    },
    takeaway: `A wattage is a speedometer reading, not a bill: check whether the figure is maximum, typical, or standby, multiply by the hours you really use the device, divide by 1,000 to reach the kilowatt-hours your bill counts, then multiply by your own tariff, and keep that honest few pence a day well away from any decision about replacing something that already works.`,
    sourceNote: 'EIA and Department of Energy references explain power and energy use. Every monitor value and price here is hypothetical.',
  },
  {
    id: 'life-025',
    title: 'Read reviews for a part, not just a star',
    outcome: `Sort a page of reviews by what each one is about, delivery, first impressions, or a named part failing under stated conditions, and turn any repeated failure into a question, not a percentage.`,
    scene: 'A suitcase has mixed reviews about delivery, first impressions, and wheels used on rough pavements.',
    sections: [
      {
        title: 'Several complaints can describe different problems',
        paragraphs: [
          `You take the train most weekends and your suitcase wheels have finally given up, so you are shopping for a new one. The listing you like has a rating of three and a half stars from about sixty reviews. You scroll. One star: parcel arrived four days late, box dented. Two stars: a wheel jammed after six months of dragging it over cobbles. Five stars: rolls like a dream. Tried it round the living room last night.`,
          `The three and a half stars is an average of those three people and fifty-seven more. It has quietly blended a courier's lateness, a wheel that failed on pavements, and someone's first evening with the box. Those are three different questions with three different answers. Delivery matters to whether you want to buy from this seller. It says nothing about whether the wheels will survive your station platforms. Start from the part and the workload you actually care about, the wheels on rough ground, and read for that. Do not let every star count as evidence about construction.`,
        ],
      },
      {
        title: 'Useful reports include conditions',
        paragraphs: [
          `A restaurant's reviews mix the food with the parking, the wait for a table, and whether the waiter smiled. If you are choosing somewhere for the fish, the review that says the car park was full is noise. So is the one that says the bread was lovely. The one you want says I had the sea bass on a Saturday night and it was overcooked. It names the dish, the day, and what went wrong, and you can weigh it.`,
          `Durability reviews work the same way. The useful ones name the exact model, how long it was in use, the conditions it faced, and the specific part that failed. A wheel that jammed after six months on cobbles was doing a different job from a wheel that rolled smoothly across a carpet once. Detail makes a review interpretable. It does not make it true, and it does not make it typical. A vivid, specific complaint can still be one unlucky case or a reviewer with a grievance. There is a further limit that no amount of scrolling removes. You do not know how many people bought this suitcase, dragged it over the same cobbles, and never wrote anything because nothing broke. Without that number, a count of complaints has no denominator. Five wheel complaints out of sixty reviews cannot be turned into a failure rate for the thousands of cases sold.`,
        ],
      },
      {
        title: 'Turn a pattern into a checkable question',
        paragraphs: [
          `In the fictional set, two reviews describe wheel trouble after outdoor use: the jam after six months, and a cracked wheel mount from someone who mentions a heavy load. Put those two together. Put the late parcel and the living-room test to one side. Two outdoor wheel reports on the same model is a pattern worth taking seriously. The right response to a pattern is a question, not a verdict. Does the same model get similar reports somewhere else, from a different kind of buyer? Are the wheels replaceable, and does the maker sell them? Does the warranty cover a wheel that fails on rough ground, or does it call that wear?`,
          `Treat glowing long-term reviews with exactly the same scrutiny. Two years of weekly trains, wheels still fine, is informative in the same way the jam report is. It carries the same missing denominator. What you are building is a short list of ways this suitcase might fail you and the questions that would settle them. A clear answer from the seller about replacement wheels tells you more than another page of stars with no story attached.`,
        ],
      },
      {
        title: 'Why the star pulls everything together',
        paragraphs: [
          `A single number at the top of the page is irresistible because it saves reading sixty paragraphs. The site puts it there for precisely that reason. But the number averages across questions that have nothing to do with each other. A late courier drags the wheels down and a happy unboxing lifts them up. The thing you wanted to know, how they fare on cobbles, is buried in two reviews you have to find.`,
          `Two habits. Before reading reviews, write down the part and the workload you care about, then read only for reports that name both. And when you find a repeated complaint, write it as a question to ask the seller or the maker, never as a percentage. The people whose wheels were fine did not write in.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What each suitcase review actually reports',
        alt: 'Four fictional reviews distinguish delayed delivery, a jammed wheel, a cracked wheel mount, and first-day smooth rolling.',
        caption: `Read the four labels and sort them by what they are about, the way you would sort restaurant reviews into food, parking, and service. Only the two middle ones concern the wheels under outdoor load, and only those two are evidence about the question you came with. Two reports make a pattern worth asking about; they do not make a rate, because nobody counted the wheels that were fine. Fictional reviews.`,
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
        `Write down the one part and the one workload you care about for a product you are considering, such as wheels on pavements or a zip used daily. Keep the model fixed; reviews of a sibling model are about a different object.`,
        `Go through each review and label it: delivery, first impression, fit or appearance, or an actual failure of a named part. For the failure reports, note what is missing, such as how long it was used or under what conditions.`,
        `For the failure reports only, compare time in use and workload with your own. A wheel that failed on cobbles after six months is closer to your weekends than one that squeaked in a hallway. Weigh the stories, not the stars.`,
        `Write one question for the seller or maker, about replaceability or warranty scope for that part, and look for the same model's reports on a second site. Do not divide complaints by reviews to make a percentage.`,
      ],
      notice: `Your conclusion names a possible failure mode, under stated conditions, and a question that would settle it, instead of a made-up defect rate or a feeling about three and a half stars.`,
      troubleshooting: `If the reviews mix several models or sizes, sort them by model first; matching photographs do not mean matching wheels. If you cannot tell what a review is about, put it in a fifth pile marked unclear rather than letting it count towards anything.`,
    },
    recall: {
      prompt: 'Headphone reviews praise comfort but rarely mention hinge life. What can you conclude about hinge durability?',
      answer: `Very little. The reviews are answering a question about comfort, and comfort is the bread being lovely when you came to ask about the fish. Silence about the hinge could mean the hinges never fail, or that most reviewers write in the first week before a hinge has had a chance to, or that people who break a hinge simply buy new headphones without posting. None of those can be told apart from the comfort praise. To learn anything about the hinge, look for reports on this exact model that mention months of folding and unfolding, check whether the maker sells a replacement headband or hinge part, and read what the warranty says about mechanical parts. Evidence about one feature stays with that feature.`,
      hint: 'Evidence about one feature does not automatically transfer to another.',
    },
    quiz: {
      question: 'Several reviews mention a broken wheel, but total sales and comparable usage are unknown. What follows?',
      options: ['The share of reviews equals the share of all units that fail', 'Repeated reports can be ignored unless a rate is published', 'Wheel failure is worth investigating, but its rate is not established'],
      correctIndex: 2,
      explanation: `Repeated wheel reports are a pattern, and a pattern earns a question about replaceability and warranty scope; what it cannot give you is a rate, because the owners whose wheels were fine did not write in and nobody has counted them. Treating the share of reviews as the share of all units turns sixty self-selected writers into thousands of silent buyers. Ignoring the reports because no rate exists throws away the one useful signal on the page.`,
    },
    takeaway: `Read product reviews like restaurant reviews when you have come for the fish: decide which part and which workload you care about, sort every review by what it is actually reporting, weigh only the ones that name your part under conditions like yours, and turn a repeated failure into a question for the seller rather than a percentage, because the wheels that never broke were never reviewed.`,
    sourceNote: 'FTC shopping guidance informs review caution. All review summaries are invented examples, not verified customer reports or measured defect data.',
  },
  {
    id: 'life-026',
    title: 'Match the repair information to the exact model',
    outcome: `Before trusting a manual, part listing, or tutorial, check that it names your product's full model and revision, not just its brand and appearance, and treat a near-match as a question still open.`,
    scene: 'Two similar sewing machines use the fictional model names S6 and S6R.',
    sections: [
      {
        title: 'The photograph looks right',
        paragraphs: [
          `The bobbin on your sewing machine keeps tangling and you want to know how to clean the mechanism underneath it. You search, and a video comes up. It shows a machine in exactly your shade of cream, with the same dials in the same places and the same brand across the front. The presenter is clear and confident. Then you glance at your receipt. Your machine is the S6R. The video, in its title, says S6.`,
          `One letter. It might mean nothing, a different market or a different colour. It might mean a revised bobbin case, a different cover fastener, or a part that is no longer meant to be removed by the owner. These model names are invented for the lesson, but the problem is completely ordinary. A product family name can cover several versions that look identical from the outside and differ where you are about to put your hands. Resemblance is useful for finding candidate instructions. It cannot confirm that a procedure belongs to the object on your table.`,
        ],
      },
      {
        title: 'Identity connects the item to its instructions',
        paragraphs: [
          `Take a prescription to a pharmacy and the pharmacist checks the exact drug name, the strength, and the form, tablet or liquid, against the packet before handing it over. Two boxes from the same manufacturer can look nearly identical and differ in the one number that matters. The pharmacist is not being fussy about labels. The label is the only link between the thing you were prescribed and the thing in the bag.`,
          `A product has the same layered identity. The model names a design: the S6 family. A revision marks a change within that design, which is what the R may signal. A serial number identifies your individual machine and is almost never needed for finding instructions. Keep it out of public searches and notes. Find the model from somewhere you can safely read. The label on the back or base, if it is visible without tipping a heavy machine. The receipt. The registration email. Do not turn the machine over or open a cover just to find out what it is. Then compare that identity with the manual's cover and its compatibility table, which is the pharmacist's check. A shared brand tells you who made it. It does not tell you what is inside, which screws hold the cover on, or whether the maker considers the cleaning you want to do a user task at all.`,
        ],
      },
      {
        title: 'Keep a near-match as an unanswered question',
        paragraphs: [
          `For the fictional machine, a manual whose cover says S6 is not confirmed for the S6R. It is a strong candidate and nothing more. Open it and look for a compatibility note. Some manuals say covers S6 and S6R, and that settles it. If the manual is silent about the R, write unresolved, and ask the maker or a repairer, giving the full model and a photograph of the exterior label. That takes one message. It saves you from following the right steps for the wrong machine.`,
          `When the match is confirmed, save the manual's title or link somewhere you will find it next time, so the check is done once. And notice what the identity check is for. It comes before any decision about whether the cleaning is safe for you to do. A perfect match to the manual does not turn a page marked for authorised service into a job for the kitchen table. A tutorial with a million views does not outrank the maker's own warning.`,
        ],
      },
      {
        title: 'Why the matching colour feels like a match',
        paragraphs: [
          `The eye checks what it can see, and what it can see is the casing, the dials, and the logo. The maker reuses all of those across a family to save money and look consistent. The letter that distinguishes revisions is small, on a label, and in a title you skimmed. So the video feels right in every way that is visible and may be wrong in the one way that is not.`,
          `Two habits. Before following any instructions, read your product's full model string from a label or receipt. Compare it character by character with what the instructions claim to cover. And when one character differs, write unresolved and ask, rather than letting a photograph decide for you.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'One letter leaves a compatibility question',
        alt: 'A fictional machine label reads S6R while a candidate manual lists only S6.',
        caption: `Compare the two labels character by character, as a pharmacist compares the prescription with the packet. The left is what you own, read from a label or receipt. The right is what the candidate manual claims to cover, and the missing R is the open question, not a detail to wave through. The brand and the photograph match perfectly and settle nothing. Invented model names.`,
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
        `Pick one appliance or device you own and find its full model string, including any letters at the end, from a label you can see without moving it, or from the receipt or registration email. This is the prescription you will check the packet against.`,
        `Find the maker's manual for it and look at two places: the cover and the compatibility or models-covered table. Compare your string with theirs character by character, not brand by brand.`,
        `Write one of two verdicts in your note: confirmed match, with the manual's title or link, or unresolved mismatch, with the differing characters. Either is a good result; the bad result is assuming.`,
        `If unresolved, draft the question you would send to the maker, giving the full model and a description of the exterior. Leave the serial number out unless official support asks for it.`,
      ],
      notice: `The instructions you have saved are tied to the exact object you own, or are clearly marked as not yet confirmed, and nothing about that depended on the colour of the casing.`,
      troubleshooting: `If the label is somewhere you cannot see without tipping or opening the item, use the paperwork or ask support instead; finding out what a machine is should never itself become an unsafe job. If the maker's site lists only the family name, that is a question for them, not a match.`,
    },
    recall: {
      prompt: 'A replacement shelf lists your refrigerator family but not your exact model. What would confirm the part?',
      answer: `Only the maker's compatibility list naming your full model, or a written confirmation from their support when you give it to them. The family name is the brand on the packet, and the photograph of a shelf that looks like yours is the matching colour of the casing: both are consistent with the right part and both are consistent with the wrong one. Shelves in one family can differ by a few millimetres in width or in where the runners sit, and a shelf that is nearly right rattles, sits crooked, or does not go in at all. Read your model from the label inside the door, compare it character by character with the listing, and if your string is not there, treat the shelf as unresolved and ask before ordering.`,
      hint: 'Shared appearance can hide different dimensions or mounting points.',
    },
    quiz: {
      question: 'A tutorial matches the brand and controls but names a different revision. What should happen before following it?',
      options: ['Use it because the exterior controls match', 'Confirm the revision is covered and the task is permitted user care', 'Use only its opening steps because later differences are unlikely'],
      correctIndex: 1,
      explanation: `Confirming that the revision is covered is the pharmacist's check, and confirming that the task is user care at all is the second, separate question the identity check exists to serve; both have to pass. Using it because the controls match trusts the casing, which the maker reuses across revisions precisely because it is cheap to do so. Following only the opening steps assumes the differences come later, but the first thing a revision often changes is how the cover comes off.`,
    },
    takeaway: `Check repair instructions the way a pharmacist checks a prescription against the packet: read your product's full model string from a label or receipt, compare it character by character with what the manual or tutorial claims to cover, write unresolved when even one letter differs and ask the maker, and remember that a confirmed match only tells you the instructions fit, not that the job is yours to do.`,
    sourceNote: 'The model-matching method is an original checklist informed by shopping and warranty references. S6 and S6R are fictional identifiers.',
  },
  {
    id: 'life-027',
    title: 'Send the symptom, not a guessed failed part',
    outcome: `Write a repair report that gives the technician what you saw, what you were doing, what the screen said, and when it last worked, and keeps your guess about the broken part out of the first line.`,
    scene: 'A home printer feeds an unmarked sheet when a music score is sent from a laptop.',
    sections: [
      {
        title: 'It fed paper, but did not print the score',
        paragraphs: [
          `You have choir practice tonight and you send the score to the printer from your laptop. The printer whirs, pulls a sheet through, and delivers it to the tray completely blank. No streaks, no faint lines, nothing. The little display shows the usual ready message. You open the support form and type: the print head has failed.`,
          `You have jumped from a result, a blank sheet, to a diagnosis, a specific dead component, in one sentence. The sentence has thrown away everything the technician could use. They do not yet know what you sent, from where, whether the paper moved normally, or what the display said. Those are the observations. The print head is a theory built on top of them, and once you have typed the theory, the observations tend not to follow. Write the observations down first. The theory can wait, and it may turn out to be wrong.`,
        ],
      },
      {
        title: 'The same symptom can have different causes',
        paragraphs: [
          `Nobody walks into a doctor's surgery and announces I have appendicitis. You say where it hurts, since when, what makes it worse, and whether you have a temperature. The doctor turns that into a diagnosis. Several different conditions produce a similar pain, and the details are what tell them apart. A patient who insists on the diagnosis sends the doctor looking in one place when the problem may be in another.`,
          `A blank sheet is a pain in the side. Feeding paper and marking paper are two separate jobs inside the printer. The first one plainly worked, which is itself a useful fact. The second could have failed for several reasons. The document might be a blank page or a corrupted file. A setting might be sending it to the wrong tray or at zero density. The ink or toner might be empty or dried. A component might genuinely be faulty. The blank sheet alone cannot choose among those. Naming a part too early points the technician at one of them and away from the rest. A useful report also keeps two kinds of statement apart. No error on the display is something you saw. The electronics are fine is a conclusion, and a blank display cannot carry it. A printer can be perfectly cheerful on its screen while something inside is wrong. Say what you saw. Let the checks you actually did be listed as checks you did, not as checks you thought about.`,
        ],
      },
      {
        title: 'Describe one ordinary occurrence',
        paragraphs: [
          `Here is the report rewritten as observations. Sent the saved music-score PDF from my laptop over Wi-Fi. Paper fed normally from the main tray. One sheet came out with nothing on it at all. The display showed the ready message and no error that I noticed. The same file printed correctly last Tuesday. Nothing has been moved or changed since then that I know of. Six sentences, and every one of them is something the technician can work with. The Tuesday line is the most useful of all. A thing that worked last week and not this week has a shorter list of suspects than a thing that never worked.`,
          `If you have already done the safe checks in the user manual, say which ones. Checked the ink levels in the status page, printed a test page from the printer's own menu, and what happened. Do not go hunting for more symptoms to make the report richer. Stop entirely if there was any smell of burning, unusual heat, a damaged cable, or water nearby. That is a report that begins with switch it off at the wall. A clear memory of one ordinary occurrence is enough to ask for help. The diagnosis belongs to the person who can open the machine.`,
        ],
      },
      {
        title: 'Why the guess comes first',
        paragraphs: [
          `A diagnosis feels like a more helpful thing to send than a list of what happened, because it sounds like you have done the work. It also makes the problem feel smaller: one part, replace it, done. But the technician has to undo your conclusion to get back to the evidence. If they trust it, they may replace a working print head and hand you back a printer that still produces blank sheets.`,
          `Two habits. When something stops working, write down what you did, what happened, what any screen said, and when it last worked. Do that before you write a single word about why. And if a cause occurs to you, put it at the end, marked as a guess, where it cannot stand in for the facts.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'A printer report preserves the sequence',
        alt: 'The fictional report records a successful print last week, a new print request, an unmarked sheet, and no observed display error.',
        caption: `Read the four boxes as the symptoms you give a doctor, in the order they happened. Notice that every detail line is something that was seen or done, and that none of them names a part inside the printer. The first box is the one most reports leave out and the one a technician values most: it worked last week. A remembered sequence, not a diagnostic test.`,
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
        `Pick one thing that went wrong recently, the printer example or something of your own that was not dangerous. Write three lines: what you were doing in the ordinary way, what actually happened, and roughly when it started.`,
        `Add the exact words of any message a screen showed, in quotation marks if you remember them, and the last time you know the thing worked properly. Only write that last-known-good line if you genuinely remember it.`,
        `List the safe checks you have already done, from the manual, and what each one showed. Then look for any sentence that names a failed part and either move it to the end marked as a guess or cross it out.`,
        `Read the whole thing as the technician. Can they tell what you observed from what you concluded? Could they start work without asking you to make the fault happen again?`,
      ],
      notice: `Your report is a list of things that were seen, done, and displayed, in order, with the diagnosis left open for the person who can look inside. The symptoms are all there and the appendicitis is not.`,
      troubleshooting: `If every sentence you have written contains the name of a component, start again from movement, sound, display, timing, and what came out of the machine; those are the things you actually witnessed. If your only memory is that it did not work, write that honestly and add when it last did.`,
    },
    recall: {
      prompt: 'A washing machine stops during a cycle and displays a code. What should your first service report preserve?',
      answer: `Write the code exactly as the display showed it, letters and numbers in order, because that code is the machine's own description of what it noticed and a technician can look it up. Then the circumstances: which programme you were running, roughly how far through it stopped, whether there was water left in the drum, and when it happened. Add the last time the machine completed a cycle normally and any safe checks from the manual you have already done, such as confirming the door was closed or the filter was clear. What does not go in the first line is the motor has gone. That is appendicitis; a stopped cycle with a code has several possible causes, and the code and the circumstances are what will tell them apart.`,
      hint: 'The provider needs the evidence behind your explanation.',
    },
    quiz: {
      question: 'The printer display shows no error. Which statement belongs in the report?',
      options: ['No error message was visible when I checked', 'The control electronics are working correctly', 'The problem must be limited to the ink supply'],
      correctIndex: 0,
      explanation: `No error message was visible when I checked is exactly what you saw, with the moment you saw it attached, and the technician can weigh it for what it is. Saying the electronics are working correctly turns a blank display into a clean bill of health for parts you have not examined, which a ready message cannot provide. Saying the problem must be the ink supply picks one suspect from several on no evidence, and points the technician away from the others.`,
    },
    takeaway: `Report a fault the way you describe symptoms to a doctor: what you were doing, what happened, what the screen said, and when it last worked, in that order, with any guess about the broken part left to the end and marked as a guess, because a blank sheet has several possible causes and your diagnosis in the first line sends the technician to only one of them.`,
    sourceNote: 'This reporting method adapts repair-record principles from the inherited sources. It does not diagnose the printer or authorise hazardous testing.',
  },
  {
    id: 'life-028',
    title: 'Inspect the caught fabric before pulling the zip',
    outcome: `When something low-risk resists, look for a visible obstruction before adding force, keep the conclusion as small as what you can see, and stop the moment resistance grows or a part looks damaged.`,
    scene: 'The lining of an empty overnight bag sits beside a zip slider.',
    sections: [
      {
        title: 'Resistance is a reason to look',
        paragraphs: [
          `You are closing your overnight bag and the zip stops a third of the way round. The natural response is to pull harder, then harder still. Then you decide the zip is broken and start pricing a new bag. All of that happens in about four seconds. None of it involves looking at the zip.`,
          `Pulling harder adds force to a mechanism before you know what is stopping it. A fold of the bag's lining that has slipped in beside the slider and a row of bent or missing teeth are two completely different problems. One of them is fixed by a fingertip. The other is not fixed by anything you can do. Looking first costs nothing and changes nothing. Pulling first can turn the fixable problem into the other kind. For this exercise, use a bag that is already empty. Do not jam a zip on purpose to see what happens.`,
        ],
      },
      {
        title: 'The slider guides two rows together',
        paragraphs: [
          `When a drawer sticks, nobody with any sense yanks it. You ease it back a little and look over the top. Nine times out of ten a sock or a tea towel has flopped over the back edge and wedged against the frame. Yanking the drawer tears the sock, scratches the runner, and leaves you no wiser about why it stuck. Looking first is the thing that makes the yank unnecessary.`,
          `A zip is a drawer that sticks for the same reason. The slider is a small metal channel. It pulls the two rows of teeth together as it moves one way and separates them as it moves the other. Its passages are shaped for teeth and nothing else. A fold of lining pushed into that passage has nowhere to go. It wedges between the slider and the teeth, and the harder you pull the tighter the wedge becomes, until either the lining tears or a tooth bends. That is why extra force is not a diagnosis. It is a way of converting one problem into two. Looking for the obstruction is different in kind. It is reversible. You gather information and leave every part exactly as it was. Cutting the lining, bending the slider with pliers, or forcing it through changes the object before you know what was wrong with it. You cannot un-bend a slider.`,
        ],
      },
      {
        title: 'Keep the first check small',
        paragraphs: [
          `In the example bag, you ease the slider back a few millimetres and look at where the teeth enter it. A pinch of grey lining is visible right at the mouth. That is good evidence for an obstruction and it is evidence of nothing else. It does not tell you the teeth beyond are all sound. If the bag's care label or the maker's site says anything about freeing a caught zip, follow that. Otherwise, gently draw the lining away from the slider while easing the slider back the way it came, and only if it moves easily. The moment resistance increases, or you can see a tooth out of line, stop.`,
          `If the lining is clear and the zip still will not move, you have learned that the obvious cause is not the cause. That is where you hand over. A bag or clothing repairer can look at the slider and teeth properly. Do not take a hairdryer, a candle, washing-up liquid, or a pencil to it on the strength of a tip you read somewhere. And keep this whole approach where it belongs: an empty bag, a sticking drawer, a jammed stapler. Looking before forcing is a habit for objects that cannot hurt you. It is not permission to poke about in anything electrical, under pressure, or holding something up.`,
        ],
      },
      {
        title: 'Why the hand pulls before the eye looks',
        paragraphs: [
          `A stuck zip is a small frustration arriving at a hurried moment. The hand responds to frustration with force before the eye has focused. Force also feels like effort, and effort feels like trying to fix it. But the fold of lining does not care how hard you are trying. The only thing in the scene that can be damaged by trying is the zip.`,
          `Two habits. When any small mechanism resists, stop and look at the point where it has stopped. Do that before applying any more force than it took to notice. And let the conclusion be exactly as big as what you saw: lining at the slider, or passage clear and cause unknown, never the zip is broken.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Look at the slider entrance',
        alt: 'Two rows of zip teeth approach a central slider while a lining edge lies near its entrance.',
        caption: `Find the slider in the middle first, the drawer that has stuck. Two arrows bring the rows of teeth into it, which is the only thing its channels are shaped for. The third arrow, from the lining edge at the bottom, is labelled possible obstruction: that is where to look, and look is all the diagram asks. Enlarged schematic, not a force or disassembly instruction.`,
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
        `Put an empty bag on a table in good light and find a zip that moves freely. You are practising the looking, not the freeing, so do not create a jam and do not work on a zip that is already stuck and precious.`,
        `Find the three parts in the diagram on the real object: the slider, the two rows of teeth, and the lining or fabric near the mouth of the slider. Use your eyes only; no tools, no pulling.`,
        `Say out loud what you can see at the slider entrance: passage clear, fabric nearby, or a tooth out of line. Keep the sentence to what is visible. Lining near the slider is an observation; the zip is fine is a conclusion the view cannot support.`,
        `Imagine the slider resisting. Decide, before it happens, what your stopping rule is: resistance increasing, or visible damage, means hands off and a note of the repair route, not another pull.`,
      ],
      notice: `You can point at the exact spot where an obstruction would wedge, and you can say the difference between looking at the mechanism and changing it. Nothing on the bag has moved.`,
      troubleshooting: `If the slider entrance is hidden by a flap or fold, stop rather than pulling fabric out of the way blind or taking the slider apart to see; the whole point is to look without altering. If you cannot tell teeth from lining in the light you have, move to better light instead of guessing.`,
    },
    recall: {
      prompt: 'A storage drawer resists closing because a scarf may be over its edge. What is a reversible first check?',
      answer: `Stop pushing. Ease the drawer open a little, enough to look over the back edge, and see whether a scarf or anything else has flopped over and is folding against the frame. That look changes nothing: the drawer, the runners, and the scarf are all exactly as they were, and if you see the scarf you can lift it clear with one hand while easing the drawer, which is the fingertip fix. If you see nothing, you have learned that the obvious cause is not the cause, and the honest conclusion is cause unknown, not the runners are broken. Keep your fingers out of the gap between drawer and frame while you do this, since a pinch point is the one way a drawer can hurt you, and do not push harder to find out.`,
      hint: 'Gather information before increasing the force on the parts.',
    },
    quiz: {
      question: 'The visible lining is clear, but the zip still resists. What follows from the inspection?',
      options: ['The teeth must be broken', 'More pulling is now safe because the lining is clear', 'That obstruction was not confirmed; stop and seek suitable care advice'],
      correctIndex: 2,
      explanation: `A clear passage rules out the one obstruction you could see and nothing more, so the cause is still unknown and the right move is to stop and hand the zip to someone who can examine it properly. Concluding the teeth must be broken leaps from an absent sock to a shattered runner on no evidence. Treating a clear lining as permission to pull harder is the mistake the lesson exists to prevent; whatever is stopping the slider is still there, and force is still the thing that bends teeth.`,
    },
    takeaway: `Treat a stuck zip like a stuck drawer: ease it back a fraction and look at the point where it stopped before you add any force, keep your conclusion exactly as big as what you can see, lining at the slider or passage clear and cause unknown, and stop the moment resistance grows or a tooth looks wrong, because looking changes nothing and pulling turns one problem into two.`,
    sourceNote: 'This is an original reversible-check heuristic, not a tested zip repair protocol. The inherited repair sources do not validate improvised household hacks.',
  },
  {
    id: 'life-029',
    title: 'Agree what diagnosis does and does not authorise',
    outcome: `Before leaving something for repair, separate the fee for finding the fault from permission to fix it, get an itemised estimate, and say in writing what work is approved and how changes get agreed.`,
    scene: 'A bicycle shop offers a paid inspection before quoting parts, labour, and collection charges.',
    sections: [
      {
        title: 'Please fix it leaves a gap',
        paragraphs: [
          `Your bicycle's gears have started slipping on hills. You wheel it into the shop, explain the symptom, and the mechanic says they can take a look for a small fee. You say please fix it, and leave. Three days later you get a message: it is ready, and the bill is a good deal more than you had in your head.`,
          `Both of you heard please fix it and understood something different. You meant find out what is wrong and tell me. The mechanic heard go ahead and repair it. Neither of you was being unreasonable; the phrase simply covers both. Finding the fault, telling you what it would cost, and giving permission to do the work are three separate decisions. If they are not separated out loud before you leave the shop, they collapse into one, and the person who pays for the collapse is you.`,
        ],
      },
      {
        title: 'State the fee and its treatment',
        paragraphs: [
          `A dentist's check-up works this way and nobody finds it strange. You pay for the examination. The dentist tells you there is a filling to do and what it will cost. Then you decide. The check-up fee is a known amount, and whether it comes off the price of the filling or sits on top is written on the price list. Nobody comes out of a check-up with an unexpected crown.`,
          `Ask the bicycle shop the same questions. What does the inspection fee cover? Do I still pay it if I decide not to go ahead? Is it taken off the repair bill or added to it? Then ask for the estimate in parts rather than as one number: parts, labour, any collection or delivery charge, anything else. A total with no breakdown cannot tell you what has been included or left out. Here is a made-up quote to practise on. Diagnosis 15 units, not credited. Parts 25. Labour 40. Collection 10. The repair itself comes to 25 plus 40 plus 10, which is 75. Going ahead costs 75 plus the 15 you have already incurred, which is 90. Walking away after the inspection costs 15, because the diagnosis fee stands on its own under these terms. Both numbers should be clear to you before the mechanic touches anything.`,
        ],
      },
      {
        title: 'Define how changes get approved',
        paragraphs: [
          `Now put the boundary in words the shop can see. Please inspect only, and send me an itemised quote before any repair. That sentence does two things: it limits what is authorised to the inspection, and it names the next step. Add a question about what happens if the picture changes once they start, since mechanics often find a second worn part behind the first. How will you contact me if the scope or price goes up? Your own private budget, however firm, tells the shop nothing. The sentence you said at the counter is the only budget they have.`,
          `When the quote arrives and you approve it, keep the approved scope and price together with the final report and the receipt. When you collect the bike, read what was actually done against what you approved rather than trusting a one-line invoice title to cover every part replaced. These are things to agree with this shop; they are not a claim that every country gives you a legal right to an estimate or to approve changes. And slipping gears on a bike you ride on roads is a safety matter, so a proper repairer remains the right place for the work. The lesson is about what you authorise, not about doing it yourself.`,
        ],
      },
      {
        title: 'Why please fix it comes out',
        paragraphs: [
          `At the counter, stating conditions feels mistrustful and slightly rude, as if you are accusing the mechanic of padding the bill before they have looked. Please fix it is friendly and quick. But the mechanic would rather know your boundary too; a surprise bill is a bad afternoon for them as well. The dentist's price list exists to spare everyone that conversation.`,
          `Two habits. Before you hand anything over for repair, ask what the inspection costs, whether it is credited, and say out loud that only the inspection is authorised until you approve a quote. And ask how changes will be agreed before they happen, so a second worn part becomes a phone call rather than a line on the bill.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Clarify permission before leaving the bicycle',
        alt: 'A customer asks what the inspection fee covers, the shop explains the separate fee, and the customer limits authorisation to diagnosis.',
        caption: `Read the customer's two lines first. The first asks the dentist's questions, what the fee covers and whether it is credited. The second draws the boundary: inspect only, then quote for approval. The shop's reply in between is the answer that makes the 90-unit total calculable, since the 15 is not credited. Fictional exchange.`,
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
        `Take the example quote, or a real one you have, and write the diagnostic fee on its own line, away from parts, labour, and transport. Then find out, or decide for the example, whether that fee is credited against the repair or charged on top.`,
        `Work out two totals: what you pay if you go ahead, and what you pay if you decline after the inspection. For the example that is 90 and 15. Use only the charges written down; do not add a guess for anything the quote does not mention.`,
        `Write one sentence you would say at the counter that names what is authorised, inspection only, and what must happen before anything else, an itemised quote and your approval. Say it aloud once so it stops feeling rude.`,
        `Decide where the estimate, your approval, and the final report will live together, a folder or a message thread, so that when you collect the item you can compare what was done against what you agreed.`,
      ],
      notice: `The shop could repeat back exactly what you have authorised, and your two totals neither forget the diagnosis fee nor count it twice. The check-up and the filling are separate lines.`,
      troubleshooting: `If the quote does not say whether the inspection fee is credited, ask before you work out any total or approve anything; it changes the answer by the whole fee. If your authorisation sentence has turned into please fix it, add the words inspect only and quote first.`,
    },
    recall: {
      prompt: 'A repairer discovers another worn part after you approved a limited repair. What agreement should guide the next step?',
      answer: `The one you made about changes before they started, which is why that question belongs at the counter. Your approval covered a specific scope at a specific price: the gear cable, say, at 75. A second worn part is outside that scope, so it comes back to you as a new quote, not as extra work that appears on the bill. If you agreed that the shop would phone before adding anything, this is the phone call, and you decide with the new parts and labour in front of you. If you never agreed a process, the shop has to guess what you would want, and a guess is how the surprise bill happens. An earlier yes has edges, and a new finding sits outside them until you say otherwise.`,
      hint: 'An earlier approval has a scope; it is not automatically permission for every later finding.',
    },
    quiz: {
      question: 'Under the example terms, what is the total for diagnosis plus the quoted repair and collection?',
      options: ['75 units because the inspection was already discussed', '90 units because the separate 15-unit fee is not credited', '60 units because all inspection fees are deducted'],
      correctIndex: 1,
      explanation: `The repair quote is parts 25 plus labour 40 plus collection 10, which is 75, and the example terms say the 15-unit inspection fee stands on its own and is not credited, so the whole cost of going ahead is 90. Stopping at 75 forgets the check-up fee because it was mentioned earlier; mentioned is not paid. Arriving at 60 assumes the fee is deducted, which these terms explicitly rule out, and it is the exact assumption the dentist's price list exists to prevent.`,
    },
    takeaway: `Treat a repair like a dental check-up: ask what the inspection costs and whether it comes off the bill, get the estimate broken into parts, labour, and transport, say out loud that only the inspection is authorised until you approve a quote, and agree how a second worn part will be put to you before it happens, because please fix it means two different things to the two people saying it.`,
    sourceNote: 'The FTC repair reference concerns vehicles and U.S. context. This adapted checklist and its prices are illustrative, not universal repair rights.',
  },
  {
    id: 'life-030',
    title: 'A reachable screw is not a service instruction',
    outcome: `Decide whether a repair is yours to attempt by reading the manual's line between user care and trained service, not by whether you can reach the screws, and know why unplugged is not safe inside.`,
    scene: 'An old powered speaker has accessible case screws but no user instructions for opening its power section.',
    sections: [
      {
        title: 'The case looks easy to open',
        paragraphs: [
          `The powered speaker you have had for years goes quiet one evening and will not come back on. You turn it over. Four ordinary cross-head screws hold the back panel on. You have a screwdriver in the kitchen drawer that fits them. It is unplugged. It would take ninety seconds to have the back off and a look inside.`,
          `Everything about that is true, and none of it tells you whether you should. Being able to open a case is a fact about the screws and your screwdriver. Whether the parts inside are safe for an untrained hand is a different fact. Whether the maker ever meant that panel to come off outside a workshop is another. Neither is written on the screws. The first decision is about scope, not dexterity. Find the manual for this exact speaker. See where it draws the line between things an owner does and things a technician does, before a reachable fastener becomes an invitation.`,
        ],
      },
      {
        title: 'Unplugged does not mean every hazard is gone',
        paragraphs: [
          `A gas hob with the knobs turned off is not the same as a hob with the gas supply disconnected at the meter. A disconnected hob is still not safe to take apart if you do not know where the pipework runs. Each step removes one hazard and leaves others. A plumber knows which ones remain at each stage. The rest of us know that the flame is out, which is not the same thing.`,
          `A powered speaker has the same layered hazards. Pulling the plug stops the mains coming in. It does not drain the capacitors. Those are components inside power circuits that store electrical energy, and they can hold it for some time after the supply is removed. If the speaker has a battery, that is a second energy source that never cared about the wall socket. There may be sharp edges, springs, or safety parts that need correct handling and correct reassembly to work again. A dark indicator light tells you the indicator circuit is not lit. It does not measure what the capacitors are holding. This is why a manual can say wipe the exterior with a damp cloth on one page and refer all internal work to qualified service on the next. The two tasks differ in the hazards they expose you to and the knowledge they need. They do not differ in how much effort they take, which is the only thing the screws tell you about.`,
        ],
      },
      {
        title: 'Use the manual boundary as the decision rule',
        paragraphs: [
          `For the speaker, the manual covers exterior cleaning and says, in a boxed warning, do not open the power section; no user-serviceable parts inside. That is the decision made for you. A video of someone opening a speaker that looks like yours does not extend your permission, however calm and competent they seem. They may be trained, their model may differ, and the video does not show what happens when it goes wrong. Write down the symptom: went silent, no lights, no response to the power button. Then use the service route the manual gives.`,
          `If the manual is unclear about where the line falls, ask the maker or a qualified repairer rather than interpreting the silence in your favour. Do not apply heat to electronics or bridge contacts to test them. Do not probe a battery, or try a trick for discharging stored energy that you read online. And if the device is damaged, unusually hot, smoking, or wet anywhere near electricity, this stops being an exercise in reading manuals. Keep away from it and get appropriate urgent help. None of this lesson needs a live repair to practise. The skill is deciding which side of the line you are on.`,
        ],
      },
      {
        title: 'Why the screwdriver makes the decision',
        paragraphs: [
          `A screw that fits your screwdriver feels like permission. The maker could have used a security fastener and did not. Unplugged feels like safe, because the obvious danger has been dealt with. Both feelings are about what you can see and reach. The hazards that matter are the ones you cannot. The flame is out and the gas is still in the pipe.`,
          `Two habits. Before opening anything that plugs in or has a battery, find the manual's line between user care and service. Let that line, not the fasteners, decide. And treat unplugged and dark as the start of a safety question rather than the end of one. Stored energy does not announce itself.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Different tasks, different access',
        alt: 'Documented exterior care is contrasted with opening a powered speaker case for internal power work.',
        caption: `Read the two boxes as the two sides of the manual's line. The left is what the owner is meant to do, with the maker's own shutdown and cleaning steps. The right is the task the reachable screws seem to invite, and the detail line says what the manual says: not user care. Nothing on the right changes because the plug is out or the indicator is dark. Example boundary.`,
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
        `Choose the manual for something you own that plugs in or holds a battery, or use a public manual for a similar device. Confirm the exact model it covers, because the line between user care and service can move between models.`,
        `Find one task the manual gives to the owner, such as cleaning a filter or wiping the exterior, and write down the preparation it asks for first. Keep that task clearly separate in your note from anything marked service.`,
        `Find the warnings about opening the case or touching internal parts and copy the key sentence. Record the service contact or route the manual gives for faults it does not want you to fix.`,
        `Pick one job you might be tempted to do on this device and classify it: documented user care, or needs advice. Do not open or switch on the device for this exercise; the classification is the whole task.`,
      ],
      notice: `Your decision quotes the manual's permitted task and its access warning, and nowhere does it mention whether you own a screwdriver that fits. The line was drawn by the people who built the thing.`,
      troubleshooting: `If the manual does not describe the task you want to do at all, the answer is stop and ask, not go ahead; an absent instruction is not permission. If the manual is for a slightly different model, treat its line as unconfirmed for yours until you have the right one.`,
    },
    recall: {
      prompt: 'A device is unplugged and its indicator is dark. Does that establish that its internal power board is safe to handle?',
      answer: `No. Unplugging turned off the hob; it did not disconnect the gas or drain the pipes. The mains supply has stopped, but capacitors on a power board can hold stored energy after that, a battery inside the device is a separate source altogether, and the dark indicator only reports that the circuit lighting the indicator is not lit. None of those three things is measured by looking at the plug or the LED. Whether the board is safe to touch depends on knowing which components hold energy and how to discharge them properly, which is exactly the knowledge the manual's service boundary exists to protect you from needing. Follow that boundary and use qualified help for anything behind the panel.`,
      hint: 'Removing the external supply is not a measurement of every internal condition.',
    },
    quiz: {
      question: 'A video opens your appliance casing, but the manual reserves that work for service personnel. Which evidence controls the beginner task?',
      options: ['The documented user-service boundary and appropriate qualified advice', 'The fact that the video uses an ordinary screwdriver', 'The number of successful-looking comments under the video'],
      correctIndex: 0,
      explanation: `The manual's boundary was written by people who know what is behind the panel and what it can do, and qualified advice is the route it points to, so between them they decide what an owner should attempt. An ordinary screwdriver in the video is the reachable screw again; it shows the case can be opened and nothing about what is safe once it is. Approving comments tell you some people did it and nothing happened, which is not evidence about the ones who did it and something did.`,
    },
    takeaway: `A screw you can reach is like a hob with the knobs off, not a disconnected supply: let the manual's line between user care and trained service decide what you attempt, treat unplugged and dark as the beginning of the safety question rather than its answer, and when the manual says no user-serviceable parts inside, write down the symptom and take the service route it gives.`,
    sourceNote: 'Appliance safety guidance supports choosing qualified service. This lesson gives no internal electrical or battery repair procedure.',
  },
  {
    id: 'life-031',
    title: 'A refrigerator dial is not a temperature reading',
    outcome: `Find out how cold your fridge actually is with a thermometer rather than trusting the dial or your hand, and arrange the shelves so raw juices cannot drip onto food you eat without cooking.`,
    scene: 'A refrigerator dial reads three, but a separate appliance thermometer gives the actual temperature.',
    sections: [
      {
        title: 'Three could mean several things',
        paragraphs: [
          `You move into a new flat and open the fridge that came with it. The dial inside is set to three. You put your hand on the middle shelf and it feels cold. You unpack the shopping and think no more about it. The number and the cold shelf between them feel like all the information you need.`,
          `Neither of them is a temperature. Unless the fridge has a display that says degrees, the three on the dial is a position on a knob. It means more cooling than two and less than four, and nothing else. Three on this fridge may be colder or warmer than three on the one you left behind. Your hand is no better. Skin tells you that a shelf is colder than your fingers, which almost any fridge shelf is. The guidance from USDA is a number: 40 degrees Fahrenheit or below, which is about 4 degrees Celsius. The only way to compare your fridge with that number is to put a thermometer in it.`,
        ],
      },
      {
        title: 'Cold slows growth but does not erase history',
        paragraphs: [
          `A thermostat on a radiator is marked one to five. Everyone who has lived with one knows that four is not a temperature. It is how hard the valve is trying. Whether the room ends up at 18 or 23 degrees depends on the boiler, the window, and the weather. The only way to know is a thermometer on the wall. People argue about the number on the valve as if it were the room.`,
          `A fridge dial is a radiator valve, and the thermometer is the one on the wall. What the cold does, once you know you have it, is slow the growth of the microorganisms that spoil food and make people ill. It slows them. It does not kill them, and it cannot undo anything that happened before the food went in. A reading of 4 degrees today says nothing about the three hours a chicken spent in a warm car boot yesterday. Each kind of food still has its own storage limit however cold the fridge. Temperature also varies inside the box. The door is warmer than the back. A shelf packed solid blocks the cold air that is supposed to circulate. Every time the door opens the whole thing warms a little. So read the thermometer the way its instructions say, in the place they say. Give it the time they say before you trust the number. A sensor that has just come out of a shopping bag is not telling you about the fridge yet. And do not fill every gap on every shelf and assume turning the dial to five will push cold through the blockage.`,
        ],
      },
      {
        title: 'Read the temperature and inspect the arrangement',
        paragraphs: [
          `Suppose, in the fictional flat, the dial sits at three and a properly placed thermometer, read after the recommended wait, shows 7 degrees Celsius. The dial has not been wrong exactly. It has not been saying anything. The 7 is the fact, and it is above the guidance. That calls for the fridge's own instructions on adjusting it and for official food-safety advice about what has been sitting in it. Sniffing the milk is not a test of anything but the milk's smell.`,
          `While the door is open, look at the arrangement as well as the number. Raw meat, poultry, and fish go in containers that catch their own juices, on a shelf below anything eaten without further cooking: salad, cheese, leftovers, yoghurt. A tray under the raw food is a physical barrier. Gravity carries drips down, so the raw food sits at the bottom and the ready-to-eat food above it. Keep the vents and the gaps the manual mentions clear so cold air can move. None of this makes food safe for ever. It takes away two particular risks, drips and blocked airflow. The thermometer and the storage limits do the rest.`,
        ],
      },
      {
        title: 'Why the dial gets believed',
        paragraphs: [
          `The dial has a number on it and numbers feel like measurements, especially a small one that sounds like a temperature. The hand confirms what the number suggests, because any fridge feels cold to a warm hand. Between them they produce certainty with no measurement in it. Two people agree the radiator valve says four, so the room must be warm.`,
          `Two habits. Treat any appliance dial as a valve setting until the manual tells you it is a measured display. Keep a cheap fridge thermometer where the instructions say to put it. And whenever you load the fridge, put raw meat and fish in a container at the bottom, under the food you eat cold, so that drips have nowhere to land.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Measurement and separation inside the fridge',
        alt: 'Contained raw food sits below ready-to-eat food; a thermometer and clear air path are shown.',
        caption: `Find the thermometer at the top right first; it is the instrument on the wall, and its detail gives the number the dial never did. Then look at the left-hand column. Raw food is at the bottom in a container, ready-to-eat food above it, so a drip can only fall away from the things you eat cold. The circle at the bottom right marks space left for cold air to move. Schematic, not your fridge.`,
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
        `Look at your fridge's control and decide which it is: a numbered dial, which is a valve setting, or a display that shows degrees. If you are not sure, the manual will say. Write down which one you have.`,
        `If you own a fridge thermometer, read it according to its instructions and write the number with its unit. If you do not, write no measurement yet rather than guessing from how the shelf feels, and plan to get one.`,
        `Open the door briefly and check two things: whether raw meat or fish is in a container that would catch its drips, placed below anything eaten cold, and whether any shelf is packed so tightly that air cannot move through the gaps the manual mentions.`,
        `Close the door. If your reading is above 4 degrees Celsius, follow the fridge's instructions for adjusting it and official food-safety guidance for what is inside. Turning the dial does not retroactively make the food safe.`,
      ],
      notice: `You have either a real reading with its unit or an honest note that there is no measurement yet, plus a check that drips can only fall away from ready-to-eat food and that cold air has room to circulate.`,
      troubleshooting: `If the thermometer reading seems odd, check where you placed it and how long it has been there against its instructions; do not invent a settling time or overrule it with your hand. If the manual says the dial is a measured display, then it is, and you can trust it, but only the manual can tell you that.`,
    },
    recall: {
      prompt: 'A refrigerator now reads within guidance after a power interruption. Does that reading alone establish the food stayed safe?',
      answer: `No. The thermometer is telling you the temperature in the fridge right now, which is all a thermometer can do. It cannot tell you how warm the inside got while the power was off or for how long, and that history is what decides whether the chicken is still safe. A fridge that climbed to 12 degrees for four hours and then came back down reads exactly the same as one that never warmed at all. For the gap in the record, use the official guidance on power cuts and the storage limits for each kind of food, which typically ask how long the door stayed shut and how long the power was off. The present measurement is reassuring about tonight. It is silent about this afternoon.`,
      hint: 'A present measurement does not reconstruct the past.',
    },
    quiz: {
      question: 'The dial says three, but a correctly used thermometer reads 7 C. Which information needs action?',
      options: ['The dial proves the interior is at 3 C', 'Cool-feeling shelves overrule the thermometer', 'The measured reading exceeds the cited refrigerator guidance'],
      correctIndex: 2,
      explanation: `The thermometer is the only instrument in the fridge, and 7 degrees is above the 4-degree guidance, so that reading is the thing to act on with the appliance's instructions and official food-safety advice. The dial at three is a valve setting; it was never claiming the interior is 3 degrees, and it cannot overrule a measurement. A shelf that feels cool to your hand is colder than your hand, which every fridge shelf is, and tells you nothing about whether it is colder than 4 degrees.`,
    },
    takeaway: `A fridge dial is a radiator valve, not the thermometer on the wall: measure the inside with a proper thermometer placed as its instructions say and compare with 4 degrees Celsius, remember that cold slows spoilage and cannot undo what happened before the food went in, and keep raw meat and fish contained at the bottom, below the food you eat cold, with room for air to move.`,
    sourceNote: 'USDA supplies the refrigerator limit. The 7 C example is fictional, not a safety assessment of your food.',
  },
  {
    id: 'life-032',
    title: 'Do not wait for a full pot to reach room temperature',
    outcome: `Get leftovers into the fridge within the time limit by dividing them into shallow containers while still warm, and know the two-hour and one-hour limits as ceilings, not as a recommended wait.`,
    scene: 'A large batch of lentil stew needs dividing into suitable shallow containers after dinner.',
    sections: [
      {
        title: 'The pot is still warm after the dishes',
        paragraphs: [
          `You have made a big pot of lentil stew, enough for most of the week. After dinner you leave it on the hob to cool, because everyone knows you must not put hot food in the fridge. You wash up, wipe down, watch something. When you come back an hour and a half later and put a finger in the middle of the pot, it is still warm. So you leave it a bit longer.`,
          `The rule you were following has quietly turned into an open-ended wait with no finishing line, and the wait is the problem. USDA's guidance is that perishable leftovers should be in the fridge within two hours of cooking. The limit is one hour if the room is above 90 degrees Fahrenheit, about 32 Celsius. Those are limits. They are the latest the food can go in, not a recommended cooling period. Nothing in them says the food must be at room temperature first. The hour and a half you spent waiting for the centre to cool was time counting against the limit, not time well spent.`,
        ],
      },
      {
        title: 'Depth changes how heat leaves',
        paragraphs: [
          `A cup of tea in a wide, shallow saucer goes cold in minutes. The same tea in a tall, narrow mug stays hot long enough to drink. Nothing about the tea changed. Spread thin, every part of it is close to the air and there is a lot of surface for the heat to leave through. Deep in a mug, the tea in the middle is a long way from anywhere cool and the surface is small. Depth, not quantity, is what decides how fast heat gets out.`,
          `A full stew pot is a very large mug. Heat has to travel from the centre out to the surface before it can leave. In a deep pot that is a long way, and the middle can stay warm for hours while the edges feel cool. Divide the same stew between shallow containers and you have poured the tea into saucers. The distance from any spoonful to the cool outside is short. There is far more surface relative to the amount of stew. That is why USDA says hot food can go straight into the fridge. The fridge is the cool outside, and shallow portions let it do its job quickly. Use containers meant for hot food and put lids on. Leave gaps around them so cold air can circulate at 40 degrees Fahrenheit or below, about 4 Celsius. The container's shape is doing the work. A label saying food storage says nothing about depth.`,
        ],
      },
      {
        title: 'Prepare the storage before the meal ends',
        paragraphs: [
          `For the stew, the fix is a change of sequence. Before you sit down to eat, get the shallow containers out and clear a shelf in the fridge. When the meal is over, divide the stew between them, lid them, and put them straight in, before the washing-up rather than after. The diagram shows the batch split into portions. It does not predict how many minutes a particular recipe in a particular container takes to cool. You do not need that number if the containers are shallow and the food goes in promptly.`,
          `Two things do not reset the clock. Moving the stew from the pot into containers does not start the two hours again. The time counts from when cooking stopped. And finding that food has been out beyond the limit is not a question for your nose. Smell and taste cannot detect the organisms that matter. Food past the applicable USDA limit is thrown away, not sniffed. For this exercise, rehearse the sequence with empty containers, so that practising the storage does not itself leave real food on the counter.`,
        ],
      },
      {
        title: 'Why the cooling rule survives',
        paragraphs: [
          `Do not put hot food in the fridge is the kind of advice that gets passed down because it once had a point. Ice boxes were small and a hot pot would warm everything else. Modern fridges cope. The advice has become a reason to leave food out, which is the one thing the food-safety guidance is trying to stop. The old rule feels careful and does the opposite.`,
          `Two habits. When you cook a big batch, get the shallow containers and the fridge space ready before you eat. Dividing and chilling is then the next thing that happens after the meal. And treat two hours, or one in a hot room, as the ceiling the food must be inside by, never as the amount of time it ought to cool.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Divide the stew before storing it',
        alt: 'A deep pot is divided between shallow containers that move into the refrigerator without a room-temperature waiting stage.',
        caption: `Start at the deep pot on the left, the tall mug whose centre stays warm. Follow the two divide arrows to the shallow portions, the saucers, and then the refrigerate arrows straight into the fridge. Notice there is no box for cooling on the counter anywhere in the route. Schematic portions, not measured cooling times.`,
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
        `Pick out the containers you would use for the next big batch and check two things: that they are shallow, saucers rather than mugs, and that their material is marked as suitable for hot food. Set them where you would reach for them after a meal.`,
        `Open the fridge and find or make a space where several lidded containers can sit with gaps between them, without blocking the vents or the airflow the manual describes. The space has to exist before the stew does.`,
        `Write the sequence on a card for the kitchen: divide, cover, refrigerate, and nothing between the meal and the fridge. If your draft contains the words let it cool, cross them out.`,
        `Read the two-hour rule and its one-hour condition for rooms above 32 degrees Celsius, and write both numbers on the card as ceilings. Keep everything in this rehearsal empty; do not leave real food out to see how long it takes.`,
      ],
      notice: `The containers and the fridge space are ready before the next batch is cooked, and the card on the wall has no cooling step in it. The saucers are out before the tea is poured.`,
      troubleshooting: `If the only containers that fit the fridge are deep, change the plan before you cook, perhaps by making a smaller batch or clearing more space, rather than inventing a safe time on the counter. If the room is hot, the one-hour ceiling applies and the sequence has to be faster, not the wait longer.`,
    },
    recall: {
      prompt: 'At an outdoor meal above 90 F, someone plans to refrigerate leftovers after two hours. What needs correcting?',
      answer: `The ceiling. Above 90 degrees Fahrenheit, about 32 Celsius, USDA's limit drops to one hour, so a plan built around two hours has the food out for twice as long as it should be. Hot air warms food and keeps it warm, which is exactly the condition the shorter limit exists for. The correction is to divide the leftovers into shallow containers and get them into a fridge or a cool box with ice well inside the hour, and not to wait for anything to feel cool first. If the hour has already passed by the time anyone thinks about it, the leftovers are thrown away rather than tested by smell. The tea in the saucer cools fast; in a hot garden, the saucer has to go into the fridge sooner.`,
      hint: 'The surrounding temperature changes the allowed time out.',
    },
    quiz: {
      question: 'A large pot is still warm, but the food is within the applicable limit. Which storage approach fits the guidance?',
      options: ['Wait until the entire pot reaches room temperature', 'Divide into suitable shallow containers and refrigerate promptly', 'Reset the time limit when the stew moves into containers'],
      correctIndex: 1,
      explanation: `Dividing the stew into shallow containers and refrigerating it while it is still warm is pouring the tea into saucers and putting them somewhere cool; the depth does the cooling and the fridge does the rest, which is what USDA permits. Waiting for the whole pot to reach room temperature spends the limit on an open-ended wait and keeps the warm centre in the danger zone longest. Resetting the clock when the stew changes containers mistakes a change of vessel for a change of history; the two hours count from when cooking stopped.`,
    },
    takeaway: `A full pot is a tall mug and shallow containers are saucers: get the containers and the fridge space ready before the meal, divide the leftovers while still warm and put them straight in with lids on and room for air, and treat two hours, or one in a hot room, as the ceiling the food must be inside by, never as how long it ought to sit cooling on the counter.`,
    sourceNote: 'USDA Leftovers and Food Safety was checked for the stated limits and cooling method. No exact cooling duration is claimed.',
  },
  {
    id: 'life-033',
    title: 'Label the cooking date, not the day you remembered',
    outcome: `Use the real cooking date on leftovers to decide early whether to eat or freeze them, and know that a new label, a clean tub, or a fresh top-up does not give old food a new start.`,
    scene: 'Two portions of pasta sauce look alike, but only one has a known cooking date.',
    sections: [
      {
        title: 'The container cannot tell you its age',
        paragraphs: [
          `You are clearing the fridge for the week's shopping and find two tubs of pasta sauce on the same shelf. They are the same tub, the same red, the same smell when you lift the lids. One has a strip of tape on it that says cooked Mon. The other has nothing. You stand there with a pen, about to write today's date on both. At least then they would match.`,
          `Writing today on the unlabelled tub would record the day you found it. That is a fact about you and not about the sauce. The information you want, when it was cooked, is gone and no label can bring it back. USDA's guidance is that properly handled leftovers in the fridge should be used within three to four days. Properly handled is doing a lot of work in that sentence. It means cooked safely, chilled promptly, kept at 40 degrees Fahrenheit or below, about 4 Celsius. A label is how you keep track of those facts. It cannot create them.`,
        ],
      },
      {
        title: 'Cooling does not stop the calendar',
        paragraphs: [
          `A library book has a due date stamped inside the cover. Moving it to a different shelf does not change the date. Putting it in a smart new dust jacket does not change the date. Slipping it into the pile with books you borrowed yesterday does not change the date. The due date belongs to the day you took it out, and the only thing that moves it is going back to the library.`,
          `A tub of leftovers has a due date that belongs to the day it was cooked. Refrigeration is the shelf, not the library. Cold slows the growth of the organisms that spoil food and cause illness. It does not stop them, and it does not restart anything. Opening the tub to take a spoonful does not change the age. Stirring in some fresh sauce to stretch it does not. Decanting it into a cleaner container does not. All of those change the packaging and the contents and leave the age exactly where it was. The cooking date is what lets you plan: eat it by Thursday, or freeze it on Tuesday while it is still well inside the window. Smell and appearance cannot do that job. The organisms that matter most do not announce themselves with a smell. A sauce can look and smell perfectly fine while being past the point where anyone should eat it. If you do not know when it was cooked or how it was handled, tasting it to find out is the one test guaranteed to give you no information and some risk. Unknown age means the official guidance, which comes down to discard.`,
        ],
      },
      {
        title: 'Use the date to make an earlier decision',
        paragraphs: [
          `Walk the labelled tub through the week. Cooked Monday evening, chilled promptly. Tuesday evening is one day. Wednesday evening is two. Thursday evening is three, and Friday evening is four, the end of the USDA window. The point of knowing this on Monday is that the decision can be made on Tuesday. Have it for Wednesday's dinner, or freeze it now while it is fresh. Waiting until Friday evening to notice turns a plan into a scramble. Some foods or local rules will be stricter than four days anyway.`,
          `Put the older, labelled tub where you will see it, at the front of a shelf above any raw meat so drips cannot reach it. Label every new batch with what it is and the date it was cooked. Do it on the evening you cook it, before the knowledge leaves your head. And never do the thing that feels thrifty: tipping the unknown older sauce into tonight's fresh batch and labelling the whole lot with tonight's date. That gives the old sauce a new due date it has not earned. Freezing has the same limit. It pauses the clock from the moment the food goes in. It cannot wind back time the food has already spent warm.`,
        ],
      },
      {
        title: 'Why today goes on the label',
        paragraphs: [
          `An unlabelled tub is a small embarrassment and today's date makes it go away. The tub looks sorted and the fridge looks organised. But the label is now lying. In three days it will tell you the sauce is fresh when it may be a week old. The missing date was the honest state of that tub. The fix is not a better label. It is the bin, and a resolution to write the date on the evening of cooking.`,
          `Two habits. Write contents and cooking date on every tub before it goes into the fridge, on the night it was made. And treat the date as belonging to the food, not the container. Decanting, topping up, or relabelling never moves it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Age follows the original cooking event',
        alt: 'Monday sauce reaches three days on Thursday evening and four on Friday evening.',
        caption: `Read the first box as the due date being stamped: Monday evening, cooked and chilled. Then look at the middle box, which is where the decision belongs, eat or freeze while there is time. The last two boxes count three and four days from Monday, not from any later day the tub was opened, moved, or relabelled. Hypothetical week assuming safe handling; unknown food gets none of it.`,
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
        `Make a label template for your next batch with three gaps: what it is, the date it was actually cooked, and a planned decision, eat by or freeze on. The third gap is what turns the date into a plan rather than a record.`,
        `Using the Monday example, write down which evening is three days and which is four, and mark the sheet as practice so it never gets mistaken for a real tub. Counting from the cooking event, not from today, is the whole exercise.`,
        `Choose a spot in your fridge where a labelled older portion will be in plain sight, on a shelf above any raw meat or fish so nothing can drip onto it.`,
        `Write yourself one rule for a tub with no date, and make it absolute: do not guess a date, do not taste it to decide, follow the guidance and discard. The rule is easier to keep if it was written before you were hungry.`,
      ],
      notice: `Your label carries the real cooking date and a decision point before the window closes, and your rule for unknown tubs leaves no room for guessing. The due date is stamped on the day it was borrowed.`,
      troubleshooting: `If you are tempted to write today's date on an old tub to tidy the fridge, remember that a new label records the day you found it, not the day it was made, and it will mislead you by Thursday. If you have already mixed an unknown portion into fresh food, the whole batch takes the unknown's status.`,
    },
    recall: {
      prompt: 'You move older leftovers into a clean container today. Which date belongs on the new label?',
      answer: `The original cooking date, copied across exactly, together with anything else you know about how it was handled. Moving the sauce into a clean tub is putting the library book in a new dust jacket; the packaging has changed and the due date has not. The food has existed since the evening it was cooked, and the organisms in it have been slowly growing since then regardless of which tub they were in. If the original label was lost in the transfer and you cannot remember the date, the honest new label is unknown, and unknown means following the guidance rather than inventing a date that looks tidy. Write the date on the new tub before you throw the old one away, so the history travels with the food.`,
      hint: 'The age belongs to the food, not to its current tub.',
    },
    quiz: {
      question: 'Two portions look identical, but one has unknown age and storage history. Which conclusion is supported?',
      options: ['Appearance cannot supply the missing history or establish safety', 'Matching appearance means both share the labelled portion age', 'A new date label gives the unknown portion another three to four days'],
      correctIndex: 0,
      explanation: `Looking and smelling the same tells you the two sauces are similar sauces, and nothing about when the unlabelled one was cooked or how it was kept; the organisms that matter do not change the colour or the smell. Assuming the unknown tub shares the labelled tub's age invents a history from a resemblance. Writing a new date on it stamps a fresh due date on an old library book, and the three to four days would be counted from a day that has nothing to do with the food.`,
    },
    takeaway: `Leftovers carry a due date stamped on the evening they were cooked, like a library book: write that date on the tub before it goes in the fridge, use it to decide early whether to eat or freeze, and remember that a clean container, a fresh top-up, or a new label changes the packaging and never the age, so a tub with no date gets the guidance and not a guess.`,
    sourceNote: 'USDA leftover storage guidance was checked. Its three-to-four-day period assumes safe handling; follow stricter food-specific or local instructions where applicable.',
  },
  {
    id: 'life-034',
    title: 'Plan thawing around the outside as well as the centre',
    outcome: `Explain why a frozen centre says nothing about the warm outside of a package left on the counter, and plan a fridge thaw in a leak-catching container that starts early enough for the meal.`,
    scene: 'A frozen chicken package is moved to a leak-catching container in the refrigerator before the intended meal.',
    sections: [
      {
        title: 'Dinner is not the starting time for thawing',
        paragraphs: [
          `It is six o'clock and you remember the chicken is in the freezer. You take it out and put the package on the worktop. You start chopping onions, reasoning that it will be thawed enough by the time the rest is ready. An hour later you press it. The middle is still hard as a brick, so it is obviously fine. Nothing can be growing in something that is still frozen.`,
          `The middle is still frozen. The outside stopped being frozen some time ago and has been sitting in a warm kitchen since. The icy centre tells you about the centre, and you are not worried about the centre. USDA names refrigerator thawing as a safe method, provided the fridge stays at 40 degrees Fahrenheit or below, about 4 Celsius. The catch is that it takes planning. The chicken for Thursday's dinner comes out of the freezer on Wednesday morning, not at six on Thursday.`,
        ],
      },
      {
        title: 'Heat reaches the outside first',
        paragraphs: [
          `Leave a tub of ice cream on the table for twenty minutes and the edges turn to soup while the centre is still scoopable. Nobody is surprised by this. The warm room gets at the outside first. The heat has to work its way in, so the surface is a long way ahead of the core. You would not say the ice cream is still frozen because the middle is. You would say the edges have melted.`,
          `A chicken on the counter is a tub of ice cream with worse consequences. Warmth from the kitchen flows into the outer layer of meat long before it reaches the frozen core. The outside can spend hours in the temperature range where bacteria multiply quickly while the middle is still hard. The hard middle is the thing your finger finds. Sealed packaging makes no difference to this. Plastic lets heat through perfectly well; it just keeps the juices in. Refrigerator thawing works because the surroundings are cold. The outside never gets the chance to warm up while the inside catches up. The price is time. How long depends on the food, the size of the piece, and the fridge, and even a small package can need a full day. No general rule can promise that a particular chicken will be ready by a particular hour. That is why the plan starts early.`,
        ],
      },
      {
        title: 'Contain leaks and keep the full method',
        paragraphs: [
          `For the example chicken, the plan is simple. The evening before, or the morning before for a big piece, put the package into a container deep enough to catch the juices that run out as it thaws. Put that container on a low shelf, below anything you eat without cooking, following the layout your fridge's manual suggests. Then read the official guidance for that food about what happens after thawing: how soon it should be cooked, and whether it can be refrozen. The day you started thawing is one date in the chicken's history, not a replacement for the others.`,
          `If Thursday arrives and the chicken is still frozen, the answer is a different dinner. Or use one of the other complete methods USDA describes, such as cold water or microwave thawing. Those methods have their own full set of conditions: water changed every thirty minutes, cooking immediately afterwards. The conditions are not optional extras. Borrowing only the faster timing and skipping the rest is the counter method with a different name. Hot water and the worktop are never the shortcut. For this exercise, plan the arrangement with an empty container. There is no need to thaw anything.`,
        ],
      },
      {
        title: 'Why the frozen middle reassures',
        paragraphs: [
          `Fingers find the hardest part of a package. Hard means frozen, and frozen means safe, and the chain of reasoning is finished before anyone thinks about the surface. The outside is soft and cold to the touch, and cold feels fine too. Nothing about pressing a package tells you how long its surface has been above 4 degrees. That is the only question that matters.`,
          `Two habits. Decide when you will eat frozen meat a day ahead, and move it to the fridge then, in a container that catches drips, on a low shelf. And when time runs out, change the meal or use a complete official method with all its conditions. Do not let the worktop do a job it cannot do safely.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Cold surroundings and a leak-catching container',
        alt: 'Refrigerated ready-to-eat food is above a package placed in a leak-catching container.',
        caption: `Start with the arrow at the bottom: the frozen package goes into the container, and the container is what catches the juices as the outside thaws. Then look up. The ready-to-eat food sits above, where drips cannot reach it. Everything in the picture is inside the fridge; there is no counter anywhere in it, and the container changes nothing about how long the thaw takes. Schematic layout.`,
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
        `Pick something frozen you plan to cook this week and read the official refrigerator-thawing guidance for it from start to finish, including what it says about cooking after thawing and refreezing. The thaw is one step in a longer set of rules.`,
        `Choose a container with sides high enough to hold the juices a thawing package releases, and find the shelf in your fridge where it can sit below anything eaten cold. The container is for drips; the shelf position is for gravity.`,
        `Work backwards from the meal and write the day and time the package should move from freezer to fridge. Err early: size and fridge temperature both stretch the time, and nothing is lost by a thawed chicken waiting a day inside its cooking window.`,
        `Write a fallback for the day it is still frozen at cooking time: a different meal, or one complete official alternative method with all of its conditions listed. Do not thaw anything for practice; the plan is the exercise.`,
      ],
      notice: `Your plan keeps the package cold the whole way through, catches its drips below the food you eat raw, starts early enough to allow for size, and already knows what dinner becomes if the timing fails.`,
      troubleshooting: `If the centre is still frozen when you want to cook, do not reach for hot water or the worktop to finish it; follow a complete official method or cook something else. If your fallback method is just the fast part of a USDA method without its conditions, it is not a method yet.`,
    },
    recall: {
      prompt: 'A fish package feels icy in the middle after sitting on a warm counter. Why is that not enough to judge safety?',
      answer: `Because the middle is the last part to warm, like the scoopable centre of a tub of ice cream whose edges have turned to soup. The fish's surface started warming the moment it left the freezer and has been in a warm kitchen ever since, possibly for hours in the range where bacteria grow fastest, while the core lagged behind. Your finger found the core. Safety depends on how warm the outside got and for how long, which is a history the icy centre cannot tell you and your finger cannot measure. The honest conclusion is that the surface temperature over that time is unknown, and unknown on a warm counter means following the official guidance, which does not include carrying on as if the ice in the middle covered the whole fish.`,
      hint: 'Different parts of the food exchange heat at different rates.',
    },
    quiz: {
      question: 'A thawing package is sealed and its centre is frozen. What does the seal establish about counter thawing?',
      options: ['It prevents the outer food warming before the centre', 'It makes elapsed time irrelevant while ice remains', 'It does not stop heat transfer or establish a safe temperature history'],
      correctIndex: 2,
      explanation: `Plastic wrap keeps juices in and lets heat straight through, so the sealed outer layer warms exactly as an unsealed one would, and neither the seal nor the frozen core records how long the surface has been above 4 degrees. Saying the seal keeps the outside cold confuses a barrier to liquid with a barrier to heat. Saying ice in the middle makes time irrelevant is the ice-cream mistake: the melted edges do not care that the centre is still scoopable.`,
    },
    takeaway: `A package on the counter is a tub of ice cream whose edges have melted while the middle is still hard: the warm outside is the part that matters and the frozen core says nothing about it, so move frozen meat to the fridge a day ahead in a container that catches drips, on a shelf below the food you eat cold, and when time runs out change the meal or use a complete official method rather than letting the worktop finish the job.`,
    sourceNote: 'USDA thawing guidance is inherited. No universal thawing duration is supplied, and alternative methods require their complete official instructions.',
  },
  {
    id: 'life-035',
    title: 'Let the storage label outrank the metal can',
    outcome: `Decide where a canned food belongs by reading its storage instruction, checking the can is undamaged, and noting whether it has been opened, instead of assuming that metal means cupboard.`,
    scene: 'A pantry contains canned chickpeas, a canned ham labelled keep refrigerated, and an opened portion awaiting storage.',
    sections: [
      {
        title: 'The same container shape can need different storage',
        paragraphs: [
          `You are unpacking the shopping. Cans go in the cupboard; that is what cupboards are for. Chickpeas, tomatoes, a tin of ham for sandwiches, all lined up on the shelf. As you close the door your eye catches two words printed on the ham, just under the lid. Keep refrigerated.`,
          `The ham and the chickpeas are in the same kind of metal container. The container told you nothing true about either of them. Some canned foods are shelf stable until opened. Some need the fridge even while sealed, because they were processed differently. The only way to tell them apart is the label, and the label on the ham has just overruled the cupboard. A familiar shape is not permission to apply a general rule about tins to a product that has printed a different rule on itself.`,
        ],
      },
      {
        title: 'Processing and package integrity work together',
        paragraphs: [
          `A sealed pharmacy packet of tablets stays good until its expiry date. Open the packet, or find it crushed in the bottom of a bag with the foil split, and the date on the box no longer applies. The date was a promise about the tablets inside an intact seal. Nobody thinks the cardboard made the tablets safe. The cardboard and foil kept them that way, and only while they were whole.`,
          `A can is the same kind of promise. Shelf stability comes from how the food was processed, together with a sealed package that keeps everything out. The metal is the packet; it does nothing on its own. A dent that crumples a seam, a bulge, a leak, or deep rust can break the barrier. Then the processing that made the food safe is no longer protected. Opening the can breaks the barrier on purpose. So the words on the label about unopened storage stop applying the moment the lid comes off. The opened food follows a different instruction, usually refrigerate and use within a stated time. A cool, dry cupboard is exactly right for an intact can of chickpeas labelled for it. It cannot rescue a can with a damaged seam. It is the wrong place for a product that says keep refrigerated in any state.`,
        ],
      },
      {
        title: 'Use three checks at the cupboard',
        paragraphs: [
          `Three quick checks sort every can you own. First, read the storage instruction. Does it say refrigerate, and does it say so for the sealed can or only after opening? Second, look at the can itself without opening it. Swollen ends, leaking, heavy rust, or a deep dent, especially one that catches a seam, mean the packet is no longer whole. The right response is disposal according to safety guidance, not opening it for a sniff. Third, ask whether this can is still sealed stock or has already been opened.`,
          `Run the shopping through those checks. The intact chickpeas say store in a cool dry place: cupboard. The sealed ham says keep refrigerated: fridge, now, label and all. The half-can of chickpeas left over from lunch is an opened food. It goes into a covered container in the fridge, following whatever the label says about use after opening. Three products, three decisions, all of them once metal cans. And when you genuinely do not know a can's history, or its condition is doubtful, the official guidance decides, not your nose. Smell is not a safety test for anything that comes out of a tin.`,
        ],
      },
      {
        title: 'Why the shape decides',
        paragraphs: [
          `Cans look alike on purpose. A lifetime of cupboards full of them teaches the hand to file by shape without reading. The label is small, the word refrigerated is unexpected on a can, and the cupboard door is already open. The pharmacy packet works the same way. Nobody rereads the foil before taking a tablet, until the day the foil is split.`,
          `Two habits. Before any can goes on a shelf, read the storage line and look at the ends and seams. Treat the metal as a packet whose promise depends on being whole. And once a can is open, forget what the label said about the unopened product. Follow the after-opening instruction instead.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four cans, different decisions',
        alt: 'An intact shelf-stable can, a refrigerated can, opened chickpeas, and a swollen can require different responses.',
        caption: `Read all four labels first and notice that every one started as a metal can. Then read the detail lines, which carry the three checks: what the storage instruction says, whether the can is still sealed, and whether the packet is whole. The fourth box is the split foil; its instruction is dispose, not inspect. Illustrative decisions, not a shelf life.`,
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
        `Take two sealed cans or jars from your cupboard and read the storage line on each without opening anything. Write down what each says about where it lives while sealed. Do not let the material make the decision before the label has spoken.`,
        `Find the after-opening instruction on each, often in smaller print, and write down what changes once the seal is broken: fridge, a covered container, a number of days. This is the line that takes over when the packet is no longer whole.`,
        `Look at the ends and seams of each can for bulging, leaks, rust, or deep dents, handling nothing that is leaking or swollen. If anything looks doubtful, stop and use official disposal guidance rather than investigating further.`,
        `Write the storage decision for each intact can in one line, naming the label instruction and the package condition separately, so that you can see which of the two is doing the deciding.`,
      ],
      notice: `Each decision cites a printed instruction and a visible package state, and nowhere does it rest on the fact that the container is made of metal. The packet's promise and the packet's condition are both on the page.`,
      troubleshooting: `If a label is missing or has worn off, you cannot read the promise, so ask the manufacturer or follow official guidance for unknown items rather than guessing a shelf life from the shape. If a can is dented, check whether the dent touches a seam; that is the dent that matters.`,
    },
    recall: {
      prompt: 'An unopened jar was shelf stable, but its label says refrigerate after opening. Does tightening the lid restore cupboard storage?',
      answer: `No. Screwing the lid back on closes the jar; it does not re-seal it. The original seal was made under conditions in a factory that your kitchen cannot reproduce, and the shelf stability the label promised belonged to the jar in that sealed, processed state, exactly as the expiry date on a pharmacy packet belongs to unbroken foil. Once the seal has been broken, air and whatever was on the spoon have been inside, and the processing can no longer protect the contents on a warm shelf. The after-opening instruction is written for precisely this moment, so follow it: into the fridge, and used within whatever period the label gives. A tight lid keeps the contents from spilling. It does not turn back the clock to unopened.`,
      hint: 'A closed lid and an original unopened seal are different states.',
    },
    quiz: {
      question: 'A sealed can says keep refrigerated but looks identical to nearby pantry cans. Which action fits the evidence?',
      options: ['Use the same shelf because the packaging matches', 'Follow the explicit refrigeration instruction', 'Open it first to decide from its smell'],
      correctIndex: 1,
      explanation: `The label has stated the storage condition outright, and a printed instruction on the product outranks any rule you have about cans in general, so the fridge is the only answer the evidence supports. Putting it on the pantry shelf because the packaging matches is filing by shape, the exact habit that put the ham in the cupboard in the first place. Opening it to smell breaks the seal on a can that needed the fridge even sealed, and smell is not a safety test for anything.`,
    },
    takeaway: `A can is a pharmacy packet, not a vault: its safety comes from the processing inside a seal that has to stay whole, so read the storage line before it goes on a shelf, check the ends and seams, treat opened as a different product with its own instruction, and never let the shape of the container overrule the words printed on it.`,
    sourceNote: 'USDA shelf-stable food guidance is inherited. The lesson gives no invented shelf life and does not recommend testing suspect food by tasting or opening it.',
  },
  {
    id: 'life-036',
    title: 'Build the bag from the trip activities',
    outcome: `Build a packing list from what you will actually do on the trip, hour by hour, then check it against what the destination provides, what one item can cover twice, and what you are allowed to carry.`,
    scene: 'An overnight train trip includes a hostel stay, an outdoor sketch walk, and an indoor workshop.',
    sections: [
      {
        title: 'A generic list misses the workshop',
        paragraphs: [
          `You are going away for one night. Train on Friday, a hostel bed, a sketching walk on Saturday morning and an indoor drawing workshop in the afternoon, then home. You find an overnight packing list online and tick it off. Spare shoes, chargers, toothbrush, a book for the train. The bag is zipped by Thursday evening and you feel organised.`,
          `On Saturday morning you discover the list had no sketchbook on it. The list was written for a generic overnight stay and had never heard of your workshop. It described a trip, not yours. The fix is to start from the other end. Write down what you will be doing, in order: Friday train, hostel night, Saturday walk, Saturday workshop. Ask what each of those activities needs before you choose a single object to pack.`,
        ],
      },
      {
        title: 'Map requirements to objects',
        paragraphs: [
          `A caterer planning a wedding does not start with a list of ingredients. They start with the menu: a starter, a main, a cake, a toast. Each dish tells them what it needs, and only then do they write the shopping list. If two dishes both need lemons, lemons go on the list once with a bigger number, not twice. If the venue provides the glasses, glasses come off the list entirely. The menu is what makes the shopping list right.`,
          `Your itinerary is the menu. The train needs a valid ticket and a way to show it that works even if your phone dies. The hostel night needs sleeping and washing things, adjusted to what the hostel actually provides, which you have to ask. The sketch walk needs drawing materials and clothes for the weather that is forecast, not the weather you hope for. The workshop has published its own requirements. Those are the only authority on what to bring to it. Now look across the activities. The sketchbook and pencil serve both the walk and the workshop, so they appear once on the list, like the lemons. This mapping does two jobs at once. It stops you packing a thing twice, and it shows up a function nobody has covered, which is how the sketchbook was found. One caution as you trim. Accessibility items, medication, anything you personally cannot do without, stay on the list whatever a minimalist template says. The template does not know you.`,
        ],
      },
      {
        title: 'Check the plan against constraints',
        paragraphs: [
          `With the list drafted from the activities, test it against the world. Ask the hostel whether towels are provided rather than assuming either way. A towel is bulky and a missing one is miserable. Read the workshop's instructions before adding any specialist materials of your own, since they may supply paper and object to outside pens. Look at the actual forecast for Saturday. And read the baggage rule for your train. A list that perfectly fits your activities can still fail to fit the bag you are allowed, or the one you can carry up the hostel stairs.`,
          `Then remove duplicates, but only where one item genuinely does both jobs. A sketchbook that serves two drawing activities is one item. A second pair of socks is not a duplicate of the first. It is a backup with a reason, and rain is the reason. Two things that look alike can have different functions. A contingency item earns its place if you can say what contingency it is for. Keep the finished list as a template for this kind of trip, train plus hostel plus activity. Do not fold it into one ever-growing master list that tries to pack for every journey you might ever take.`,
        ],
      },
      {
        title: 'Why the generic list gets used',
        paragraphs: [
          `A ready-made list feels like borrowed expertise and saves ten minutes of thinking. For the parts of the trip that every trip shares, sleeping and brushing your teeth, it is fine. The parts it misses are exactly the parts that make this trip yours. Those are the ones that cannot be bought at a station kiosk at nine on a Saturday morning.`,
          `Two habits. Before packing, write the activities in order and the function each one needs, and only then choose objects. And before closing the bag, check three things outside the list. What the destination provides, what the event requires, and what you are permitted and able to carry.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The itinerary supplies the packing questions',
        alt: 'Friday train travel and hostel sleep are followed by a Saturday sketch walk and indoor workshop.',
        caption: `Read the four boxes as the menu, in the order the courses are served, and read each detail line as the question that course asks. Notice the sketchbook appears in the third box and is reused in the fourth: the lemons, listed once. Two of the detail lines contain the word confirm or check, because the hostel and the workshop know things the list does not. Fictional itinerary.`,
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
        `Write your trip as a list of activities in time order, including the dull ones: travelling, sleeping, washing, as well as any event. This is the menu, and nothing goes on the shopping list until it is on the menu.`,
        `Beside each activity, write the function it needs before you name any object: show a ticket, sleep warm, draw outdoors, follow the workshop's brief. Naming the function first is what reveals the sketchbook and stops the spare shoes being packed by habit.`,
        `Pick the one thing you are least sure the destination or event provides, a towel, paper, a plug adaptor, and check it against an official source: the hostel's page, the event's instructions. Replace the guess with the answer.`,
        `Go down the list and merge only the items that genuinely serve two activities, keeping any backup you can name a reason for, and keeping anything you personally need regardless of templates.`,
        `Finally check the list against the forecast, your own carrying limits, and the baggage rule for your transport. Nothing needs buying for this exercise; a list that fits is the result.`,
      ],
      notice: `Every object on your list can be traced back to an activity that needs it, every activity has its needs covered, and the three outside checks, destination, event, and carrying limit, have each been done rather than assumed.`,
      troubleshooting: `If the list keeps growing, you have started packing for trips you are not taking; split the activities into confirmed and optional and pack only for the confirmed ones. If two items look identical, ask what each is for before merging them, because the second pair of socks has a job the first cannot do once it is wet.`,
    },
    recall: {
      prompt: 'A weekend visit gains a formal dinner after you made the list. How should the list change?',
      answer: `A new course has been added to the menu, so it gets its own line and its own questions, not a whole new shopping list copied over the old one. Write the dinner down as an activity and ask what it needs: something to wear that meets the dress code, shoes that go with it, perhaps a small gift for the host. Then look at what you already have on the list and see what can serve twice; the smart shirt may already be there for Sunday, the shoes may not. Add only what is genuinely missing. Finally rerun the outside checks, since a jacket and shoes change the size of the bag and may push it past what you can carry or what the train allows. One changed activity creates a requirement to compare against the existing list, not an excuse to start from a template again.`,
      hint: 'A changed activity creates a requirement to compare, not an automatic shopping list.',
    },
    quiz: {
      question: 'The sketch walk and workshop both accept the same sketchbook. What does the activity method suggest?',
      options: ['List one sketchbook against both purposes', 'Pack one for each activity because the itinerary has two entries', 'Remove the sketchbook because it appears twice'],
      correctIndex: 0,
      explanation: `One sketchbook listed against both activities is the lemons written once with both dishes beside them; the function is covered twice by a single object and the list says so. Packing one per activity treats the itinerary's two entries as two separate needs when the object itself serves both, which is how bags get heavy. Removing it because it appears twice mistakes a shared requirement for a duplicate entry and deletes the one item the generic list had already managed to forget.`,
    },
    takeaway: `Pack like a caterer working from the menu: write the trip as activities in order, name the function each one needs before you choose a single object, list anything that serves two activities once, and then check the result against three things no list can know, what the destination provides, what the event requires, and what you are allowed and able to carry.`,
    sourceNote: 'This packing method is original. IATA supplies baggage background, not a packing minimum or evidence of fewer forgotten items.',
  },
  {
    id: 'life-037',
    title: 'Pack the next-needed item where you can reach it',
    outcome: `Pack by order of use so arrival details sit protected but reachable at the top, and check that nothing you need on arrival depends on a signal or on a bag that might not be with you.`,
    scene: 'A traveller reaches a hostel after dark with booking details buried beneath clothes.',
    sections: [
      {
        title: 'The booking is underneath tomorrow clothes',
        paragraphs: [
          `The train gets in late and you walk to the hostel in the dark. At reception, a tired volunteer asks for your booking reference. You know exactly where the printed confirmation is. It is flat at the bottom of the bag, under two days of clothes. Papers go together, and you packed the papers first. You end up kneeling in the lobby with your socks on the floor, hunting for one sheet of A4.`,
          `You had the right information. Getting at it meant unpacking in public. The bag was organised by category, papers with papers, clothes with clothes. That is a perfectly good way to organise a drawer. A bag you are living out of has a second dimension that a drawer does not: time. Some things are needed at the door, some tonight, some tomorrow. Order of use is as real an organising principle as category. On arrival, when the things you need are a ticket, an address, and a reference, it is the one that matters.`,
        ],
      },
      {
        title: 'Accessibility should not expose the contents',
        paragraphs: [
          `A good coat has an inside breast pocket. It is the easiest pocket to reach, right at the opening. Nobody walking past can see what is in it. The outside pockets are for gloves and a travel card, things you do not mind the world seeing. Wallets live inside. The design solves two problems at once, reach and privacy. It does so by putting the pocket where your hand goes first and where other eyes do not.`,
          `Give your bag a breast pocket. A zipped pouch just inside the main opening makes the booking details reachable without displaying them. The tempting alternative is the clear plastic sleeve on the outside of many bags. It makes a document easy to find. It also makes it easy for everyone behind you in the queue to read, name, address, and dates included. What you want is controlled access: easy for you, closed to everyone else. Digital copies solve some of this and create their own dependency. The booking page that was open on the train may need the network again later. You tap it in a basement reception with no signal and get a spinning wheel. Save the details in a way the app supports offline. Then actually open them with the phone in flight mode to see whether they are really there. And remember that a photograph of a passport is not a passport. Where the carrier or the hostel needs the original, the copy is a convenience, not a substitute.`,
        ],
      },
      {
        title: 'Plan for the bag you still control',
        paragraphs: [
          `For the hostel arrival, the top layer of the bag is the breast pocket. In it go the address, the booking reference, and any identity document the hostel will ask for. Add whatever small essentials you will want in the first ten minutes. The clothes for tomorrow go further down, because nobody at reception wants to see them. A luggage tag hangs outside the bag for anyone to read. Put on it the minimum that gets a lost bag back to you, not your home address.`,
          `A different trip raises a different version of the same question. If your suitcase is going in the hold, ask what happens if it comes off the carousel tomorrow instead of tonight. The things you need to get through the first evening are documents, medication, and a charger. Within whatever the airline permits, they stay in the bag that stays with you. This is not a prediction that your luggage will be delayed. It is a way of finding out which of your plans quietly depends on a bag you will not be holding. Then you move that dependency into your hands.`,
        ],
      },
      {
        title: 'Why papers end up at the bottom',
        paragraphs: [
          `Packing happens at home, calmly, by category. Papers are flat and go in first because they are easy to protect against the back of the bag. Arrival happens tired, in the dark, by urgency. The two moments want the bag arranged in different orders. The one that does the packing never thinks about the one that does the unpacking.`,
          `Two habits. Before you close the bag, name the first three things you will need when you arrive. Move them to a protected pocket at the opening, with nothing private facing outward. And for anything you plan to show from your phone, open it once in flight mode before you leave. Then you know it is on the device and not on the network.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A bag packed by next use',
        alt: 'A bag cutaway places a protected arrival pouch near the opening, clothing in the middle, and sleep items below.',
        caption: `Read the cutaway from the top down as the order of the evening: the breast pocket first, with the address and booking details, then tomorrow's clothes, then the things for bed. Notice that the top pouch sits inside the bag, behind the opening, not in a clear sleeve on the outside. Reach and privacy are solved by the same pocket. Schematic.`,
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
        `Look at your next trip's check-in or onward-travel requirements and write down the first three things you will actually need to produce on arrival. Not what you might want, what you will be asked for.`,
        `Put harmless stand-ins for those three things, folded paper will do, into a pocket just inside the bag's opening, and pack some clothes beneath them. Leave room; this is about position, not capacity.`,
        `Close the bag, then retrieve the stand-ins as if a receptionist were waiting, without spreading anything on the floor. Check that if they were real documents, nothing private would be facing outward while you did it.`,
        `Pick one detail you plan to show from your phone, find the app's offline option, and open the detail with the phone in flight mode. Note which originals the carrier or hostel still requires, and which items must travel in the bag that stays with you.`,
      ],
      notice: `Your arrival items come out in one movement from a pocket other people cannot see into, your phone can show what it needs to with no signal, and nothing you need tonight is in a bag you might not be holding.`,
      troubleshooting: `If reaching the pouch is awkward, change the pocket you use rather than moving the papers to the clear outside sleeve where they are easy to grab and easy to read. If the booking will not open in flight mode, it is on the network, not on the phone; save it properly or print it.`,
    },
    recall: {
      prompt: 'A flight itinerary is stored only in the suitcase that will be checked. What dependency should you reconsider?',
      answer: `Your arrival depends on a bag you will not be holding. The suitcase goes into the hold at check-in and you do not see it again until the carousel, so for the whole flight and the walk to the belt, the only copy of your itinerary, with your connecting flight and your hotel address on it, is somewhere under the aircraft. If the case is delayed, the plan is delayed with it. Move the itinerary into the breast pocket: the details go in the bag that stays with you, within the airline's rules, with a saved offline copy on your phone that you have opened in flight mode and any original documents the carrier insists on. The information was correct all along. Its location was the problem.`,
      hint: 'The location of information matters even when the information itself is correct.',
    },
    quiz: {
      question: 'Which arrangement balances reception access with privacy?',
      options: ['Booking details under the clothing to keep them hidden', 'A confirmation facing outward in a transparent bag sleeve', 'A protected inner pouch near the bag opening'],
      correctIndex: 2,
      explanation: `A protected pouch just inside the opening is the coat's breast pocket: your hand reaches it first and nobody else can see into it, so reach and privacy are solved together. Burying the details under the clothing protects them from view and guarantees a floor full of socks in the lobby. The clear outside sleeve solves reach perfectly and shows your name, address, and dates to everyone in the queue behind you.`,
    },
    takeaway: `Give your bag a breast pocket: decide the first three things you will need on arrival and put them in a protected pouch just inside the opening, never in a clear outside sleeve, open any phone copy in flight mode before you leave so it does not depend on a signal, and keep anything you need tonight in the bag that stays in your hands rather than one that might arrive tomorrow.`,
    sourceNote: 'This is an original access-planning routine. Copies do not replace required originals, and transport rules still govern what stays with you.',
  },
  {
    id: 'life-038',
    title: 'A gate-checked bag needs a battery recheck',
    outcome: `Explain why a spare battery or power bank must leave a bag before it goes into the hold under FAA rules, why its terminals need protecting too, and plan the recheck before handover.`,
    scene: 'A traveller must send a cabin bag to the hold while a power bank is still inside.',
    sections: [
      {
        title: 'The bag changes category at the gate',
        paragraphs: [
          `The flight is full and the overhead lockers are already crammed. At the gate, an agent asks for volunteers to have their cabin bags put in the hold. She hands you a tag. You packed this bag for the cabin, carefully. Somewhere in an inner pocket is the power bank you charge your phone from on long days.`,
          `Under U.S. FAA rules, spare lithium batteries travel in the cabin with you, not in checked baggage. A power bank is a spare lithium battery with a case around it. Your bag is about to become checked baggage. Having packed it as a cabin bag changes nothing once it goes down the chute. The rule attaches to where the bag ends up, not where you intended it to go. The tag in your hand has just turned a correctly packed bag into one with a prohibited item in it.`,
        ],
      },
      {
        title: 'Protect the terminals as well as the location',
        paragraphs: [
          `A can of petrol has two rules, not one. It goes in the boot, not on the back seat. And it stays in a sealed can, not an open jug. Getting the first rule right and the second wrong is still dangerous. The boot does not stop petrol slopping about. The location rule is about where a problem would happen. The container rule is about whether it happens at all.`,
          `A battery is a store of energy, and it has the same two rules. The cabin-not-hold rule says where it travels. If something does go wrong, it happens where people can see it and deal with it. The second rule is about the terminals. Suppose the two contacts on a spare battery touch something conductive at the same time: a bunch of keys, a few coins, the clip of a pen. Electricity flows between them with nothing to slow it down. That is a short circuit. The current can be high enough to make the battery hot in seconds. So a spare in the correct bag, loose in a pocket with your keys, has passed the location rule and failed the container one. The official guidance tells you what counts as protected storage. Usually that means the original packaging, a plastic case, or tape over the terminals. It also sets limits on size, quantity, and condition. One category is outside all of this. A battery that is swollen, damaged, or subject to a recall is not a spare to find a pocket for. Do not charge it, repair it, or test it to see whether it can fly. Ask.`,
        ],
      },
      {
        title: 'Recheck before the bag leaves your control',
        paragraphs: [
          `Back at the gate, the sequence is short and the order matters. Before you hand the tagged bag over, open it and find the power bank. Take it out. Put it in whatever you are carrying into the cabin, in a case or with its ports covered, in a pocket with no metal. Then give the bag to the agent. If you are not sure whether something has to come out, ask the gate staff before the bag goes, not after. A bag that has gone down the chute is not coming back for a pocket check.`,
          `Two more things to know for a real flight. The rules for batteries installed inside devices, like your phone or a camera, are different from the rules for spares. This lesson is about spares. And the FAA rule is a floor. Your airline, or the country you are flying from, can be stricter about size or quantity. Read the current guidance for the actual flight rather than remembering last year's. This lesson does not give you a universal capacity allowance. The exercise is done on paper, and no battery needs to be handled to practise the recheck.`,
        ],
      },
      {
        title: 'Why the gate catches people out',
        paragraphs: [
          `Packing was done at home, with the bag's destination fixed in your mind as the overhead locker. The rule check was done then. The gate changes the destination in a hurry, with a queue behind you. Nobody re-runs the check, because the bag already feels checked. The petrol can was put in the boot carefully. Then someone moved it to the back seat without thinking of it as petrol.`,
          `Two habits. Whenever a bag changes category, cabin to hold, carry-on to checked, re-run the contents check as if packing it for the first time. Do it before it leaves your hands. And keep every spare battery in protected storage from the moment you pack it. Then moving it between bags never leaves the terminals loose against metal.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Before the gate-check handover',
        alt: 'Remove the power bank into permitted protected cabin storage before handing over the hold-bound bag.',
        caption: `Read the first box as the moment the bag changes category, the petrol can being moved to the back seat. The next two boxes are the two rules: find the spare and take it out, then store it protected and away from loose metal. The handover is the last box, and only after both rules are met. Example under FAA rules; your airline or departure country can be stricter.`,
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
        `Find the current battery guidance from your airline and from the aviation authority of the country you would fly from, and read the section on spare lithium batteries and power banks. Two sources, because the airline can be stricter than the authority.`,
        `Write down exactly what they say about size, number of spares, condition, and how the terminals must be protected. Copy their words rather than this lesson's; this lesson is not an allowance for anywhere.`,
        `Sketch where your spares would live if your main cabin bag were taken at the gate: which pocket of which item you would still be carrying, and what would keep the terminals away from keys and coins. The boot and the sealed can, both.`,
        `Write the reminder you want in your head at the gate: open the bag, take out every spare, protect it, ask if unsure, then hand over. Do all of this on paper and touch no battery for the rehearsal.`,
      ],
      notice: `Your plan changes when the bag's destination changes, and it handles both rules at once: where the spare travels and how its terminals are protected. Neither rule alone would have been enough.`,
      troubleshooting: `If a battery is swollen, damaged, or on a recall list, stop planning around it and get official advice; do not tape over a label or try to make it look ordinary. If the airline and the authority disagree, the stricter one applies to you.`,
    },
    recall: {
      prompt: 'A camera spare stays in a cabin pouch with loose keys. What check remains besides baggage location?',
      answer: `The sealed-can check. The spare is in the right place, the cabin, so the location rule is satisfied, but it is sitting in a pouch with a bunch of keys, and a key bridging the two terminals is exactly the short circuit the protection rule exists to prevent. The battery needs its own case, its original packaging, or tape across the contacts, and the keys need to be somewhere else. Then run the remaining checks from the official guidance: is this battery within the size limit, are you within the permitted number of spares, and is it in good condition rather than swollen or recalled? Right bag, wrong container is still a hazard, and it is the one that happens inside a pocket where nobody can see it.`,
      hint: 'The correct compartment does not prevent conductive objects reaching terminals.',
    },
    quiz: {
      question: 'Under the cited FAA rule, a cabin bag containing a power bank is gate checked. What changes?',
      options: ['The power bank must be removed into permitted protected carry-on storage', 'Nothing, because the bag began the trip as carry-on', 'The power bank may stay if it is switched off'],
      correctIndex: 0,
      explanation: `The bag is about to become checked baggage, and a power bank is a spare lithium battery, so under the cited rule it has to come out and travel with you in protected storage; the petrol can moves back to the boot before the car sets off. Saying nothing changes because the bag started as carry-on attaches the rule to your intention rather than to where the bag goes. Switching the power bank off changes nothing about the energy it stores or where the rule says it must be.`,
    },
    takeaway: `A spare battery has two rules like a can of petrol, where it travels and what it travels in: under FAA rules spares and power banks ride in the cabin with you and never in the hold, their terminals need a case or tape so keys and coins cannot bridge them, and whenever a bag changes category at the gate you re-run the contents check before it leaves your hands, because the rule follows the bag's destination and not your plan for it.`,
    sourceNote: 'FAA and IATA sources are inherited. Current carrier and departure-country rules may be stricter than the U.S. guidance.',
  },
  {
    id: 'life-039',
    title: 'Measure the bag after the pockets are full',
    outcome: `Measure the packed bag, protrusions included, against the carrier's actual size, weight, and piece-count rules, and treat each of the three as a separate test that has to pass on its own.`,
    scene: 'A soft travel bag meets an example depth limit empty but bulges beyond it when packed.',
    sections: [
      {
        title: 'Cabin size is a product description',
        paragraphs: [
          `The bag was sold as cabin size. The label said so, the listing said so, and empty on the shop floor it slid neatly into the little metal frame by the till. Now it is packed for a week away, the front pocket is full of chargers and a book, and the whole thing has a comfortable paunch. At the airport, the same kind of metal frame is waiting at the gate, and this time the bag is not empty.`,
          `Cabin size on a label is a description of the product, measured empty, by the manufacturer, against whatever allowance they chose as typical. It is not a measurement of your packed bag, and it is not a promise from your airline. Allowances differ between carriers, routes, fares, and sometimes between the outbound and return legs. The only numbers that count are the ones on your booking for this flight, applied to the bag as it will actually be when you walk to the gate.`,
        ],
      },
      {
        title: 'Measure the occupied envelope',
        paragraphs: [
          `Think of trying on a coat. On the hanger it is one shape. On you, with a jumper underneath and the pockets full, it is a different shape, and the one that has to fit through the door is the second one. Measuring the bag empty is measuring the coat on the hanger.`,
          `What the airline's frame tests is the envelope, the whole space the packed bag takes up, including the bits that stick out: wheels, handles, a bulging front pocket, the strap that will not lie flat. Carrier instructions say which protrusions count, and most say all of them. A soft bag is sneaky here because it grows in one direction. Height and width are held by the frame of the bag; depth is held by nothing but the zip, so that is where the extra week's worth goes. Try it with numbers, all of them invented for the exercise. The allowance is 55 x 35 x 20 cm. Empty, the bag measures 54 x 34 x 18 cm: inside on every side. Packed, with the front pocket full and the handle included as the carrier requires, it measures 55 x 35 x 23 cm. Height fits, width fits, depth is 23 against a limit of 20. It is over by 3 cm. Being inside on two dimensions earns no credit against the third; a frame does not average.`,
        ],
      },
      {
        title: 'Check weight and count as separate constraints',
        paragraphs: [
          `Now add weight. Suppose the same fictional allowance is one piece, up to 7 kg. The packed bag weighs 6.4 kg. That is a pass, and it changes nothing about the depth, which is still 3 cm over. Size, weight, and number of pieces are three separate tests, like three locks on a door. Opening two of them does not open the door.`,
          `The piece count is the lock people forget. The obvious fix for a bag that is 3 cm too deep is to move the shoes into a tote and carry the tote. The bag now passes depth. But the fare says one piece, and you are standing at the gate with two. You have traded a size failure for a count failure. Do the whole check at home, with the bag packed, while you can still repack or pay for a bigger allowance at the cheaper advance price. Do not count a bag that squeezes into the frame when you lean on it; the agent will not lean on it. Recheck after every rearrangement, and recheck the policy itself whenever the airline or fare changes. The numbers here are arithmetic practice, not any real carrier's rule.`,
        ],
      },
      {
        title: 'Why the empty measurement fools people',
        paragraphs: [
          `The empty measurement is the one you can do in the shop, the one printed on the label, and the one that gives the answer you want. The packed measurement needs a tape measure the night before a flight, when you would rather believe the label. And because a soft bag grows only in depth, the two dimensions you glance at still look fine.`,
          `Two habits. Measure the bag packed, with everything in it that will be in it at the gate, and include wheels, handles, and full pockets. And write down a result for all three tests separately, size, weight, and piece count, so that a fix for one cannot quietly break another.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Include the parts outside the fabric panel',
        alt: 'A schematic bag identifies its handle, main body, wheels, and bulging side pocket as measurement features.',
        caption: `Look first at the full outer pocket on the right: that bulge is where the invented packed depth of 23 cm comes from, against a 20 cm limit, and it is invisible when the bag is empty. Then notice the handle at the top and the wheels at the bottom. The frame at the gate measures all of them. This is a feature locator, not a scale drawing; follow your real carrier's measuring instructions.`,
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
        `Write down the three rules from your actual booking: the size limit with all three dimensions, the weight limit, and how many pieces the fare allows. If you are using the example instead, write 55 x 35 x 20 cm, 7 kg, one piece, and label it fictional so it never gets mistaken for a real allowance.`,
        `Pack the bag as it will be at the gate, then measure the envelope the way your carrier says to, including wheels, handle, and any full pocket. If you can only measure it empty today, write that down as a measurement still owed, not as a pass.`,
        `Compare each dimension to its limit on its own, and write pass or over by how much. Weigh the bag if you have a scale and can lift it safely; if not, record the weight as unknown rather than assumed.`,
        `Change something, move an item, remove a book, and then redo all three tests, not just the one you were fixing. The point is to catch the tote that fixes depth and breaks the piece count.`,
      ],
      notice: `You have a written result for every test, size, weight, and count, and some of them might honestly say unknown. A bag that passes two of three has not passed.`,
      troubleshooting: `If all you have is the label's dimensions, you have the coat on the hanger; do not write it down as a packed measurement, and measure the real bag before you travel. If a pocket pushes you over by a little, moving things to the main compartment keeps the piece count at one.`,
    },
    recall: {
      prompt: 'Moving shoes into a second pouch fixes bag depth, but the fare permits one piece. What still needs checking?',
      answer: `Whether the pouch counts as a second piece, because the fare allows one and you would now be holding two. You have unlocked the size lock and relocked the count lock. Some airlines allow a small personal item alongside the cabin bag and some fares do not, so the answer is in the actual rules for this ticket, not in a general sense of what is reasonable. If the pouch would count, the fix has not fixed anything; the shoes need to go back into the bag and something else needs to come out, or the allowance needs to change. Size, weight, and number of pieces are three independent tests, and any change to the packing means running all three again.`,
      hint: 'Dimension, weight, and piece-count checks are independent.',
    },
    quiz: {
      question: 'The example bag is 6.4 kg but 23 cm deep against a 20 cm limit. What is the result?',
      options: ['It passes because the weight is below 7 kg', 'It passes weight but exceeds depth by 3 cm', 'It passes because the empty bag was within all three dimensions'],
      correctIndex: 1,
      explanation: `Two locks, two separate keys. The weight lock opens, 6.4 is under 7, and the depth lock stays shut, because 23 minus 20 is 3 cm over, and a light bag earns no extra centimetres. Saying it passes on weight alone ignores the test it failed. Saying it passes because the empty bag fitted is measuring the coat on the hanger; the frame at the gate measures the bag with the week's packing in it.`,
    },
    takeaway: `Measure the coat on the person, not on the hanger: pack the bag completely, measure the whole envelope including wheels, handle, and full pockets against this flight's actual allowance, and treat size, weight, and piece count as three separate locks that must each open, because a fix for one, like moving shoes into a tote, can quietly fail another.`,
    sourceNote: 'IATA explains carrier-specific baggage rules. Every size and weight allowance in this worked example is hypothetical.',
  },
  {
    id: 'life-040',
    title: 'Revise the packing list while the trip is fresh',
    outcome: `Use what you unpack to improve the next packing list: drop true duplicates, keep contingencies that still have a reason even though they went unused, and record what you were missing.`,
    scene: 'After a family visit, packing decisions distinguish a rain contingency, duplicated clothing, and a missing washcloth.',
    sections: [
      {
        title: 'Unused does not always mean unnecessary',
        paragraphs: [
          `You are back from an overnight visit to family, and the bag is open on the bed. The phone cable comes out; you used it. The rain cover comes out still folded in its pouch; it did not rain. The second hoodie comes out exactly as it went in. And you remember the moment on the first morning when you went looking for a washcloth and there was not one.`,
          `The tempting rule is simple: used stays, unused goes. Applied here, it throws out the rain cover and the hoodie together, as if they were the same kind of thing. They are not. One of them was packed against something that might happen. The other was packed in addition to something you already had. The bag on the bed is evidence about the trip you just took. It is useful evidence, but it does not read itself, and a count of what left the bag is not the same as a judgement about what belongs in it.`,
        ],
      },
      {
        title: 'Separate a contingency from a duplicate',
        paragraphs: [
          `Think of the first-aid kit in a car. Most people drive for years without opening it, and nobody concludes from a year of unused plasters that the kit should come out of the boot. Its job is not to be used. Its job is to be there if a particular thing happens, and the measure of whether to keep it is whether that thing could still happen, not whether it did. Now think of a second ice scraper in the same boot. That one is not insurance against anything; it duplicates a tool you already had. Both were unused. Only one of them is clutter.`,
          `The rain cover is the first-aid kit. It was packed against rain, the weather could have gone either way, and a dry weekend does not make rain less likely next time. The second hoodie is the second ice scraper, probably. It covered the same need as the first hoodie, warmth over the evening, and for an overnight stay one was enough. The honest word is probably, because one trip is a very small sample. A single dry weekend does not prove a backup is worthless, and having packed something once does not sentence you to carrying it forever. The way through is to name the event each item covers, rain, a cold evening, a lost main pair, and ask whether that event is still plausible on the next trip. That question has an answer. Was it used is just a tally.`,
        ],
      },
      {
        title: 'Change the next list, then store the gear',
        paragraphs: [
          `So, for this example: the phone cable stays, with a confirmed need behind it. The rain cover stays, and the list gets a short note beside it, weather contingency, so that next time you do not have to rethink it from scratch. The second hoodie gets reconsidered for overnight trips, and probably comes off. The washcloth goes on, with its own note: add unless the place provides one. Four findings, four different reasons, written down while you can still remember why. These are decisions about a family visit; they are not additions to every packing list you will ever write.`,
          `Then deal with the gear itself before it goes back in the cupboard. Anything damp, a towel, a swimming costume, the rain cover if it did get used, needs to dry fully according to its care label before it is sealed in a bag. Water leaves fabric by evaporating into the air around it, and a closed bag holds that air still and humid, so damp things stay damp and start to smell. Hang them somewhere with airflow, not over a radiator or in front of a heater. Top up only the consumables that actually ran low. Then write the revision while the missing washcloth is still annoying enough to remember.`,
        ],
      },
      {
        title: 'Why the simple rule is so tempting',
        paragraphs: [
          `Used or unused is visible on the bed in front of you, with no thinking required. The reason an item was packed is not visible anywhere unless you wrote it down, and most people never do. So the review drifts toward the evidence that is easy to see, and the first-aid kit gets judged by the same rule as the second ice scraper.`,
          `Two habits. Beside every item on the packing list that is there as a precaution, write the event it covers, so the next review can ask whether the event is still plausible instead of whether the item was used. And do the review the day you unpack, with the bag open, before the trip has faded and the washcloth stops being annoying.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four unpacking findings, four different reasons',
        alt: 'The review separates a used cable, unused rain cover, duplicate hoodie, and missing washcloth.',
        caption: `Compare the two middle rows first. The rain cover and the second hoodie were both unused, and the review gives them opposite verdicts: one is the first-aid kit, kept because rain is still plausible, and the other is the second ice scraper, duplicating a need already covered. The outer rows are the easy cases, a confirmed use and a confirmed gap. Fictional review.`,
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
        `From a recent trip, or from the family-visit example, write down one item you used, one you did not, and one you wished you had. Three lines is enough; the aim is to practise the sorting, not to audit the whole bag.`,
        `For the unused item, write the event it was packed against, if there was one. Then label it: contingency, because the event could still happen; duplicate, because another item already covered the need; or uncertain, because you honestly cannot tell from one trip.`,
        `Change the list for that type of trip, and write the reason beside each change, so that in six months you see weather contingency next to the rain cover instead of having to rethink it.`,
        `If you are unpacking a real bag now, hang anything damp to dry fully according to its care label before it is stored, away from direct heat, and top up only the consumables that actually ran out.`,
      ],
      notice: `Every change on the list has a reason written beside it, and at least one unused item survived the review because the event it covers is still plausible. Unused and unnecessary have come apart.`,
      troubleshooting: `If everything feels necessary just in case, you have not named the events. Write the specific thing each item protects against and check it against the next itinerary; a snow shovel is a sound contingency for January and clutter for July. If nothing seems worth keeping, you are probably using the tally instead of the reason.`,
    },
    recall: {
      prompt: 'You carried a spare pair of glasses but never used it on one trip. Does non-use settle whether it belongs next time?',
      answer: `No. The spare glasses are the first-aid kit, not the second ice scraper. They were packed against a specific event, losing or breaking the main pair, and the question for the next trip is whether that event is still plausible and what it would cost you if it happened. If you cannot see well enough to travel without them and there is no optician where you are going, the spare earns its place on every trip whether or not it is ever used. If you have contact lenses as a fallback and the trip is to a city with opticians on every corner, you may reasonably decide the duplication is not worth the weight. Either way, the decision comes from the reason and the consequences. The usage count on one trip tells you almost nothing about a contingency, because contingencies are designed not to happen.`,
      hint: 'Judge the reason and consequences, not only the usage count.',
    },
    quiz: {
      question: 'An unused rain cover and unused duplicate shirt return from a dry trip. What should guide the revision?',
      options: ['Remove both because neither was used', 'Keep both because anything packed once remains necessary', 'Review the weather contingency separately from the duplicated clothing need'],
      correctIndex: 2,
      explanation: `Same tally, different reasons. The rain cover is the first-aid kit, packed against weather that could still happen next time, and the spare shirt is the second ice scraper, duplicating a need the first shirt already met. Reviewing each against its own reason is the only option that can tell them apart. Removing both treats one dry weekend as proof that rain is impossible, and keeping both lets a single packing decision become permanent, with the bag growing a little every trip.`,
    },
    takeaway: `Unpack with the first-aid kit in mind: an unused item is clutter only if it duplicated something you already had, so name the event each precaution covers and keep it while that event stays plausible, drop true duplicates, add what you were missing, write the reason beside every change while the trip is fresh, and let damp things dry fully before they go back in the bag.`,
    sourceNote: 'This original planning routine does not establish an ideal packing weight or a universal minimum list.',
  },
]