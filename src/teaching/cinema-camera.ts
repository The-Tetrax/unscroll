import type { LessonGuide } from './types'

// Original teaching and schematic diagrams. Source lists remain on the existing lessons.
// Suggested timings are practice budgets, not measured learning effects.
export const cinemaCameraGuides: LessonGuide[] = [
  {
    id: 'cinema-001',
    title: 'Establish a usable phone baseline',
    outcome: `Save a plain first recording of a still scene, inspect the replayed file rather than the live preview, and change one visible fault at a time so each later take answers one question.`,
    scene: 'Shoes and a handwritten OUT card beside an interior door.',
    sections: [
      {
        title: 'Start with something that stays still',
        paragraphs: [
          `You want to get better at filming with the phone you already own. So you point it at the kitchen, record a bit, watch it back, and think: that looks a bit soft, a bit wobbly, a bit yellow. You change the resolution, move closer, open a window, and record again. It looks different. Is it better? You genuinely cannot say, because you changed four things at once and you cannot remember exactly how the first one looked anyway.`,
          `Start smaller and slower. Put a pair of shoes beside an interior door and lean a card reading OUT against them. That is your whole scene. It gives you three things to inspect: your own lettering, the texture of the shoes, and the straight edge of the door. Nothing moves, nothing is private, and nothing is clever. This first recording is a baseline: a saved starting point, not your best possible film. Without it, every improvement is a feeling rather than a comparison. Use ordinary video mode, keep the doorway clear, and keep addresses, reflections of people, and conversation out of the shot.`,
        ],
      },
      {
        title: 'What the camera is doing',
        paragraphs: [
          `Think about repainting a room. Before you move the furniture or open a tin, you take one photograph from the doorway. Not because it is a good photograph, but because in a week you will have forgotten what the room was like, and the before picture is the only way to know whether the new color actually did what you hoped. People who skip the before picture end up arguing about whether it was always that dark in the corner.`,
          `Your baseline clip is the before picture, and knowing two words helps you read it. The lens is the small optical assembly at the back of the phone that directs light onto the sensor, the surface that measures the light. A fingerprint on the lens scatters light before it ever reaches the sensor. That makes bright areas look hazy even when the camera has focused perfectly, and no setting can remove haze that was added before the measurement. If you suspect it, wipe the lens gently with a clean, dry, soft cloth.`,
          `Resolution is the other word. It describes the stored picture dimensions, how many dots wide and tall the file is. A bigger number does not repair haze, soft focus, or a badly placed subject. It just stores the same problems in more detail. Leave unfamiliar settings alone for now and note only the controls your video mode actually shows you.`,
        ],
      },
      {
        title: 'Change one visible fault',
        paragraphs: [
          `Record ten seconds without moving. Then stop and replay the saved file, not the live preview. The preview cannot tell you whether recording actually started, whether the picture stayed steady, or whether the edges held still. Only the file can. Watch it and write down one fault you can point at. Suppose OUT is perfectly readable but the door edge drifts slowly sideways across the ten seconds.`,
          `Now change one thing aimed at that fault. The drift suggests your hands moved, so rest your forearms on the table or the back of a chair and record again, keeping the light, the distance, and the framing exactly as they were. Replay the second file beside the first. If the door edge now holds still, support was the useful change, and you know it because nothing else moved. If the drift is gone but the lettering is still soft, that is a second fault with a second cause, probably distance. Leave it for the next take rather than fixing two things at once.`,
          `Keep both files. Your memory of making them will fade by tomorrow; the comparison on the phone will not.`,
        ],
      },
      {
        title: 'Where the comparison breaks',
        paragraphs: [
          `The first mistake is the one from the opening: changing several things between takes and crediting whichever one you believed in. The second is trusting the preview. It is a live window, and it disappears the moment you stop; it cannot be compared with anything. The third is reaching for resolution as a cure. If a later kitchen clip looks hazy but steady, the steadiness tells you nothing about the optics. Check and clean the lens, then repeat from the same spot in the same light, and see whether the haze went.`,
          `A quieter mistake is deleting the bad take. The first clip is not an embarrassment to tidy away. It is the before picture, and without it the second clip is just a clip.`,
          `Two habits. Before you try to improve anything, record and keep a plain baseline of a scene that holds still. And between takes, change exactly one thing and replay both files side by side, pausing on the same edge or letter in each.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A repeatable doorway test',
        alt: 'Top view of a phone aimed at shoes and an OUT card beside a clear door.',
        caption: `Find the phone first and follow the aim arrow to the shoes; then notice the card and the door edge, which are the three things you will inspect. Keep every position identical for both takes. This is a schematic layout, not a measured floor plan.`,
        items: [
          { label: 'Phone', detail: 'Same camera position for both takes.', x: 20, y: 80, shape: 'camera' },
          { label: 'Shoes', detail: 'Inspect texture and outlines.', x: 50, y: 48, shape: 'object' },
          { label: 'OUT card', detail: 'Inspect your own lettering.', x: 80, y: 60, shape: 'paper' },
          { label: 'Door', detail: 'A straight edge reveals drifting.', x: 80, y: 20, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'aim' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Old phone', 'Shoes', 'Paper and pencil', 'Stable seating'],
      steps: [
        `Arrange the shoes and the OUT card out of the walking route, then check the picture and the sound for anything private before you press record. A baseline you cannot keep is not a baseline.`,
        `Record ten seconds in ordinary video mode from a comfortable, still position. Do not adjust anything yet; this take is the before picture.`,
        `Replay the saved file and write down one fault you can point at, plus the orientation and any recording setting the screen showed. The file, not the preview, is the evidence.`,
        `Correct only that one fault, record again from the same spot, and compare the two saved clips side by side, pausing on the same edge or letter in each.`,
      ],
      notice: `Your second recording gives a visible answer about one change, and it is an answer even if the change did not help. You can now say support fixed the drift, or support did nothing, and either sentence is worth more than four changes and a feeling.`,
      troubleshooting: `If you cannot tell the two clips apart, stop scrubbing and pause each one on the same door edge or the same letter of OUT, then flick between them. Small drift and soft focus hide in motion and show up in a frozen frame. If they still match, write that down; a change that made no difference is a real result.`,
    },
    recall: {
      prompt: 'A later kitchen clip looks hazy but steady. What comparison would isolate the cause?',
      hint: 'Keep the scene fixed; inspect the optical surface.',
      answer: `Check the lens for a fingerprint and clean it gently, then record the same scene again from the same position in the same light, changing nothing else. If the haze goes, the scattered light before the sensor was the cause. The steadiness was never evidence about the optics, any more than a before picture of a tidy room tells you about the paint.`,
    },
    quiz: {
      question: 'The card is sharp but the door drifts. Which next take tests the clearest explanation?',
      options: ['Same setup with supported forearms.', 'Higher resolution from the same unsupported grip.', 'A closer view with stronger light.'],
      correctIndex: 0,
      explanation: `Drift is unwanted camera movement, so supporting your forearms while keeping everything else the same tests exactly that one explanation. Higher resolution stores the same wobble in more detail. Moving closer and adding light changes two more things at once, so the comparison with the before picture is lost.`,
    },
    takeaway: 'Save a baseline, inspect the recording, and change one visible fault at a time.',
    sourceNote: 'The inherited Apple video guide is model-specific. This original test is practice, not a benchmark or a promise about old-phone features.',
  },
  {
    id: 'cinema-002',
    title: 'Choose the frame before arranging the action',
    outcome: `Decide the shape of the recorded picture first, then arrange the movement so both its start and its destination stay inside that shape, instead of cropping later and hoping.`,
    scene: 'A folded note travels across a table to a drawn landing square.',
    sections: [
      {
        title: 'The destination is part of the action',
        paragraphs: [
          `You are filming something tiny: your hand sliding a folded note across a table to a square drawn on a sheet of paper. Simple. You press record, slide the note, and watch it back. The note sets off beautifully and then leaves the right edge of the picture before it reaches the square. Viewers see a hand push something out of shot. They do not see a delivery, because the arrival happened somewhere the camera was not looking.`,
          `The frame is the boundary of the recorded picture, and the mistake here was deciding the action before deciding the frame. Choosing the boundary first tells you how much room the movement has to work with. One more rule while we are here: pick horizontal or vertical before you start and keep it. Rotating the phone halfway through a take does not just move the subject around. It changes how the finished recording has to be watched, and no edit can tidy that away.`,
        ],
      },
      {
        title: 'Width compared with height',
        paragraphs: [
          `Think about plating a whole fish. If you grab a round dinner plate and then lay the fish on it, the tail hangs over the rim. You can trim the tail to make it fit, but now it is not a whole fish. The cook who chooses the long oval platter first has no such problem; the fish was arranged for the plate it was always going to sit on. The plate is the frame. The fish is the action. Choosing the plate after the fish is cooked only ever ends in cutting something off.`,
          `The shape of the plate has a name: aspect ratio, which compares the width of the picture with its height. A 16:9 picture has sixteen units of width for every nine of height, so it is wide. A 9:16 picture is the same shape stood on end, taller than it is wide. These two are examples, not settings every phone offers. Your actual frame is decided by which way you hold the phone and which recording mode is on.`,
          `Cropping is trimming the tail. A crop removes part of a picture that already exists. If you cut a wide recording down to a tall one, you throw away whatever was at the sides, which may be the hand or the landing square. A crop cannot reveal anything that was outside the original recording. Adding black bars to change the displayed shape is only a presentation trick; the missing action is still missing.`,
        ],
      },
      {
        title: 'Rehearse for the shape you have',
        paragraphs: [
          `So arrange the fish for the plate. For the wide version, hold the phone horizontally and let the note travel left to right across the table, with the landing square well inside the right edge. Both ends of the route sit on the platter.`,
          `For the tall version, do not try to squeeze the same left-to-right slide into a frame that has less width. Change the arrangement of the action, which filmmakers call blocking. Move the note from near the bottom of the table toward a square placed further away, so it travels up the picture instead of across it. The tall frame has plenty of height; use the dimension you were given.`,
          `In both cases keep the camera still and watch all four edges for the whole slide, not just the opening position. If both routes keep the delivery visible, choose between them by the relationship you want to show: a journey across a surface, or a reach toward something further away. Neither shape is more cinematic than the other on its own.`,
        ],
      },
      {
        title: 'Fixes that happen after the fact',
        paragraphs: [
          `The first mistake is keeping a route that does not fit and adding borders later. Borders change what the picture looks like on a screen; they do not put the square back. The second is keeping the route and cropping tighter, which removes still more of the recording and usually loses the hand as well. Both are trimming the tail and calling the fish whole.`,
          `A quieter mistake is checking only the start. A frame that holds the note at rest may not hold it at the end of its slide. Rehearse the complete movement, and if an endpoint vanishes, shorten the route or move the camera back on something stable. Do not try to balance the phone overhead.`,
          `Two habits. Choose the frame shape and orientation before you rehearse anything, and keep it for the whole take. And run the complete action while watching all four edges, because a delivery is only a delivery if the arrival is in the picture.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Across-table handoff',
        alt: 'A phone faces a note on the left and its landing square on the right.',
        caption: `Look at the two ends of the slide arrow first, the note and the landing square; both have to sit inside the recording. Then notice the phone stays put below them. A top view, not a measured layout.`,
        items: [
          { label: 'Note starts', detail: 'Hand enters from this side.', x: 20, y: 30, shape: 'paper' },
          { label: 'Landing square', detail: 'Delivery must remain visible.', x: 80, y: 30, shape: 'box' },
          { label: 'Phone', detail: 'Stationary during the slide.', x: 50, y: 80, shape: 'camera' },
        ],
        arrows: [{ from: 0, to: 1, label: 'slide' }],
      },
      {
        type: 'comparison',
        title: 'Move the destination, not just the label',
        alt: 'The note ends toward the right in one panel and toward the top in another.',
        caption: `Compare where the note finishes in each panel: toward the right for the wide frame, toward the top for the tall one. The route was rearranged for the plate, not squeezed onto it. Panel dimensions do not reproduce real aspect ratios.`,
        items: [
          { label: 'Across a wide frame', detail: 'Note finishes toward the right.', x: 78, y: 50, shape: 'paper' },
          { label: 'Along a tall frame', detail: 'Note finishes toward the top.', x: 50, y: 25, shape: 'paper' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Old phone', 'Paper and pencil', 'Clear table'],
      steps: [
        `Draw a landing square on one sheet and fold a separate blank note. Using a blank note means the clip can be kept and compared without anything private in it.`,
        `Hold the phone horizontally and record your hand sliding the note left to right, keeping the start and the square inside the edges for the whole slide. This is the fish arranged for the oval platter.`,
        `Stop recording, turn the phone vertical, and rearrange the route so the note travels from near to far up the table. You are changing the blocking to suit the plate, not shrinking the same move.`,
        `Replay both files and watch the four edges through the entire handoff, not just the opening frame. The question is whether the arrival is in the picture.`,
      ],
      notice: `The same delivery uses different space in the two versions, and in both the arrival stays visible. You chose the frame first and arranged the action to fit, so nothing had to be trimmed afterwards.`,
      troubleshooting: `If an endpoint still disappears, either shorten the route or move the stationary camera further back on a stable surface. Do not fix it by cropping later or by holding the phone overhead at arm's length; the first throws away picture and the second throws away steadiness.`,
    },
    recall: {
      prompt: 'A tall doorway greeting will later be cropped square. What should rehearsal check?',
      hint: 'Follow hands as well as faces.',
      answer: `Rehearse the whole greeting while watching the intended square, not the tall frame, because the square is the plate the action will finally sit on. Follow the hands as well as the faces, since a wave or a handshake is what reaches the edges. If anything leaves the square, move the performers or shorten the gesture now; the crop can only remove, never restore.`,
    },
    quiz: {
      question: 'A vertical take loses the receiving square. Which change preserves the delivery most directly?',
      options: ['Keep the route and add borders later.', 'Keep the route and crop more tightly.', 'Rearrange the route along the available height.'],
      correctIndex: 2,
      explanation: `Rearranging the route up the table uses the dimension the tall frame actually has, so the square comes back into the recording. Borders only change how the picture is displayed; the square was never recorded. Cropping tighter removes even more of what was captured, which is trimming the tail further instead of choosing the right plate.`,
    },
    takeaway: 'Choose the delivery frame, then rehearse the whole action inside it.',
    sourceNote: 'Inherited Yale and Apple references support framing concepts and recording options. Example ratios do not imply a selectable mode on every phone.',
  },
  {
    id: 'cinema-003',
    title: 'Give wide, medium, and close shots different jobs',
    outcome: `Choose each shot size by the fact it has to make readable, where, what happens, and what was found, and add a closer shot only when something is still unreadable at the current size.`,
    scene: 'A bag in a home corridor has an empty paper sleeve marked PASS.',
    sections: [
      {
        title: 'Where is the missing pass?',
        paragraphs: [
          `You are filming a tiny staged scene in your own corridor. A bag waits beside an interior doorway. A hand opens the outer pocket and pulls out a paper sleeve marked PASS, and the sleeve is empty. No real ticket, nothing personal, just a small story about something missing. You film it once from across the corridor so the whole thing is in view. On playback the action is all there and the sleeve is a pale smudge; nobody could tell it was empty. So you film it again from very close, and now the empty sleeve is obvious and nobody could tell what room it is in or what bag it came out of.`,
          `Neither take is wrong. Each one answers a different question and fails a different one. Shot size is the term for how much of the subject and its surroundings fills the frame, and wide, medium, and close are relative descriptions of that, not three grades of quality. The job is to decide which question each size is for, rather than hoping one distance will answer everything.`,
        ],
      },
      {
        title: 'Give each view a question',
        paragraphs: [
          `Think about showing a friend where you live using a map on your phone. You start zoomed out so they can see which part of town. Then you zoom in so the street and the corner shop are readable. Then you zoom right in so they can see which door. Nobody would send the whole-town view and expect them to find the door, and nobody would send only the door and expect them to find the town. Each zoom level answers one question, and the friend needs all three.`,
          `The three shot sizes are those zoom levels. A wide view answers where: it holds the bag and the doorway together, so the room is clear. A medium view answers what happens: the hand and the pocket are large enough to follow. A close view answers what was found: the sleeve fills enough of the frame that its emptiness is visible. Remember that a detail which looked obvious on the phone while you were filming can vanish at ordinary playback size, so the close view is often doing real work.`,
          `Change size by moving the camera between takes, not by pressing the zoom button, which on many phones only crops the same picture and does not give you a better lens. Walk only on clear, stable floor, and remember that moving changes the perspective as well as the size. Keep the bag and doorway in a recognizable relationship so the three views feel like one place.`,
        ],
      },
      {
        title: 'Test the sequence, not the vocabulary',
        paragraphs: [
          `Try a sequence: two seconds wide for where, three seconds medium for the pocket opening, two seconds close for the empty sleeve. Seven seconds in all. Those numbers are a sketch to start from, not an editing rule. Play the three files in order and name the new fact each one adds.`,
          `Then pause on the close view and ask a hard question: can I actually see that the sleeve is empty, or is a hand covering it? A close shot of a hand is not a close shot of an absence. If the medium view already shows the empty sleeve clearly, it has done two jobs at once, and you do not need the close setup. A closer shot earns its place by delivering information nobody could read before. It never earns its place by being called a close-up.`,
          `Three sizes are a toolkit, not a quota. Use the ones the facts require.`,
        ],
      },
      {
        title: 'Shots that exist for the pattern',
        paragraphs: [
          `The first mistake is completing the set. Wide, medium, close, because that is the pattern, even when the medium already made everything clear. The extra shot adds length and no information. The second is the opposite: one distance for everything, leaving viewers to squint at a smudge or to guess which room they are in.`,
          `A third mistake is fixing a blurry close view by pushing nearer. Phone cameras have a nearest distance at which they can focus; closer than that, everything softens. Back away to the distance where the sleeve is sharp and let it be a little smaller.`,
          `Two habits. Before each take, say out loud the one question this size answers, where, what happens, or what was found. And after the close take, pause on it and check that the fact you wanted is visible, not merely implied by a hand.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'One subject, three camera distances',
        alt: 'Three alternative camera positions approach the same bag along one clear route.',
        caption: `Look at the three camera positions along the route first and read the question beside each one; then notice the bag never moves. These are separate takes at three zoom levels, not three cameras at once, and the distances are schematic.`,
        items: [
          { label: 'Wide position', detail: 'Bag plus doorway.', x: 18, y: 82, shape: 'camera' },
          { label: 'Medium position', detail: 'Hand plus pocket.', x: 40, y: 60, shape: 'camera' },
          { label: 'Close position', detail: 'Empty sleeve.', x: 62, y: 38, shape: 'camera' },
          { label: 'Bag', detail: 'Keep its position fixed.', x: 84, y: 16, shape: 'object' },
        ],
        arrows: [{ from: 0, to: 3, label: 'view toward bag' }],
      },
      {
        type: 'timeline',
        title: 'Three information jobs',
        alt: 'Wide location view, medium pocket opening, then close empty sleeve.',
        caption: `Read the three labels as three questions before you read the seconds: where, what happens, what is missing. The proposed durations add up to seven seconds, and the equal spacing in the diagram is not a time scale.`,
        items: [
          { label: 'Where', detail: '2 seconds: bag beside doorway.' },
          { label: 'What happens', detail: '3 seconds: hand opens pocket.' },
          { label: 'What is missing', detail: '2 seconds: empty PASS sleeve.' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Old phone', 'Bag', 'Paper PASS sleeve'],
      steps: [
        `Place the bag clear of the doorway and tuck the empty homemade sleeve into its outer pocket. A staged, empty sleeve means the clips hold nothing real and can be kept.`,
        `Record a wide view that holds the bag and the doorway together, waiting until nobody is passing. This is the whole-town zoom level, and its only job is where.`,
        `From nearer positions, with the phone securely supported, record the pocket opening and then the empty sleeve. Each move answers the next question down: what happens, then what was found.`,
        `Play the three files in order and name the new fact each one supplies. If one adds nothing, that is useful to know. No editing app is needed for this.`,
      ],
      notice: `The location, the opening, and the absence are all understandable without you explaining them, because each size was given one question. You can also say which shot, if any, added nothing, which is how you learn when a size is not needed.`,
      troubleshooting: `If the close view is blurry, you are probably nearer than the phone can focus. Back away until the sleeve is sharp, even though it becomes a little smaller in the frame. A sharp sleeve at a readable size beats a large blur, and pushing nearer will only soften it further.`,
    },
    recall: {
      prompt: 'A cook pauses beside an empty salt dish. What would justify a closer view?',
      hint: 'Ask which fact is unreadable at the current size.',
      answer: `A closer view is justified only if the wider shot cannot show that the dish is empty, the way you zoom the map in only when the door is not yet readable. If the emptiness is already clear at the current size, a close-up adds length and no fact, and a shot of the cook's reaction or the next action would tell viewers more.`,
    },
    quiz: {
      question: 'The medium view already shows the empty sleeve clearly. What is the best reason to add a close view?',
      options: ['To complete the standard three-size pattern.', 'To reveal another relevant detail still unreadable.', 'To keep every shot equally short.'],
      correctIndex: 1,
      explanation: `A shot earns its place by making something readable that was not readable before, so a new unreadable detail is the only good reason to zoom in further. Completing the pattern adds a shot with no question to answer, and equal durations are a timing habit that says nothing about what viewers can see.`,
    },
    takeaway: 'Choose shot size for the fact that needs to become readable.',
    sourceNote: 'The inherited shot guide supplies terminology. This original missing-pass sequence and its timings are illustrative, not a compulsory coverage formula.',
  },
  {
    id: 'cinema-004',
    title: 'Compare centered and off-center framing',
    outcome: `Place a subject so the empty space in the frame has a job, such as holding the route it is about to travel, and treat the thirds grid as a way to propose arrangements rather than a rule to obey.`,
    scene: 'A paper arrow travels right toward a drawn doorway on a tabletop.',
    sections: [
      {
        title: 'Empty space can have a job',
        paragraphs: [
          `Fold a scrap of paper and draw a right-pointing arrow on it. It is going to be a traveler. On another sheet draw a doorway, and set the two on the table so the arrow has somewhere to go. Now frame the arrow dead center and start it sliding right. Within a second it is pressing against the right edge of the picture, and the doorway it was heading for is still out of shot. The traveler has nowhere to travel.`,
          `Frame it again with the arrow sitting toward the left. Nothing else has changed, but now there is open table ahead of it, and the doorway fits inside that open area. The empty space has acquired a practical job: it holds the destination and the journey toward it. That is what composition means, the arrangement of the visible things inside the frame. It is a choice about relationships between the subject, its route, and its goal. It is not a quiz about whether you know a famous rule.`,
        ],
      },
      {
        title: 'What the thirds grid suggests',
        paragraphs: [
          `Think about parking a car in a bay. You could center it perfectly between the lines. But if you know you will need to open the driver's door wide to lift out a box, you park a little to the right, leaving extra room on the side where the door will swing. The gap is not wasted space. It is space for the thing that is about to happen. A driver who centers the car every time, because centered is tidy, ends up squeezing a box through a half-open door.`,
          `The rule of thirds is a way of proposing where to park. It divides the picture into three equal columns and three equal rows, with lines at about one third and two thirds across each dimension. Putting an important element near one of those lines, or where two lines cross, is one possible arrangement among several. If your camera does not show a grid, imagine the lines or sketch them on paper. The grid is a suggestion machine.`,
          `Centering is still a legitimate choice. A symmetrical doorway often reads most clearly with its opening in the middle of the frame, because the symmetry is the point. Dragging it sideways to touch a grid line would weaken the symmetry without adding any space that the shot needs. Park off-center when something is about to use the gap, not because the lines say so.`,
        ],
      },
      {
        title: 'Compare the actual movement',
        paragraphs: [
          `Record two takes. In the first, the arrow starts in the center and slides right toward the doorway. In the second, it starts near the left third and slides the same route at about the same size on screen. Keep the camera still for both. Then watch them back and look at one specific thing: how much of the route is visible before the arrow reaches an edge. In the left-third version you should see more of the approach and, with luck, the arrival.`,
          `That is an observable difference, and it is the one to judge by. You may also feel that the off-center version looks lonelier, or more hopeful, or more cinematic. Those are interpretations, and they need story, performance, and sound around them before they mean anything. On a tabletop with a paper arrow they are guesses.`,
          `The grid generated two alternatives. The action, the arrow's actual journey to the doorway, tells you which alternative serves this shot. Keep the two roles separate: the grid proposes, the movement decides.`,
        ],
      },
      {
        title: 'Obeying the lines',
        paragraphs: [
          `The first mistake is treating the grid as law. The doorway reads perfectly centered, but it gets shoved to a third for consistency, and one side of it is cut off. Consistency with a grid is not a reason; the readable relationship the shot needs is. The second mistake is choosing whichever version has the most empty space, as if emptiness were the goal. Empty space earns its place by holding something, a route or an expected arrival, and otherwise it is just a smaller subject.`,
          `A third mistake is comparing framings when the destination fits in neither. If the doorway is out of shot in both takes, the problem is the view or the route length, not where the arrow starts. Widen the view or shorten the route first, then compare placements.`,
          `Two habits. Before placing a subject, ask what is about to happen and which direction it will happen in, and leave room on that side. And when the grid offers an arrangement, check it against the movement, not against the lines.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The subject really changes position',
        alt: 'A paper subject is centered in one panel and at the left third in the other.',
        caption: `Look at the open area to the right of the icon in each panel first; that gap is where the journey has to fit. The left-third start has parked with room on the side where the door will open. Positions are schematic frame percentages.`,
        items: [
          { label: 'Centered start', detail: 'Similar room on either side.', x: 50, y: 52, shape: 'paper' },
          { label: 'Left-third start', detail: 'More room ahead of rightward travel.', x: 33, y: 52, shape: 'paper' },
        ],
      },
      {
        type: 'spatial',
        title: 'The route behind the framing choice',
        alt: 'Top view of a paper traveler moving right toward a drawn doorway, with camera below.',
        caption: `Follow the travel arrow from the paper traveler to the drawn doorway; that whole route is what the extra screen space is for. The space has a destination to hold, not an abstract mood to carry.`,
        items: [
          { label: 'Paper traveler', detail: 'Arrow points toward the doorway.', x: 22, y: 30, shape: 'paper' },
          { label: 'Drawn doorway', detail: 'The visible destination.', x: 78, y: 30, shape: 'box' },
          { label: 'Phone', detail: 'Check the complete route.', x: 50, y: 80, shape: 'camera' },
        ],
        arrows: [{ from: 0, to: 1, label: 'travel right' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Old phone', 'Paper and pencil', 'Clear table'],
      steps: [
        `Draw the paper traveler and the doorway and set them on a stable table with nothing private in view. Working seated keeps the camera still enough for the two takes to be comparable.`,
        `Record the traveler starting in the center of the frame and sliding right toward the doorway. This is the car parked dead center, and you need it on file to compare against.`,
        `Record again with the traveler starting near the left third, keeping its size on screen about the same. Only the parking position should change between the takes.`,
        `Replay both and compare how much of the route is visible before the arrow reaches an edge, then choose a version and say the reason in terms of the journey, not the grid.`,
      ],
      notice: `Changing where the subject starts changed how much travel room it had, which is a thing you can see and point at. Whether a grid line was touched turned out to be beside the point; the door had room to open.`,
      troubleshooting: `If the doorway is out of shot in both takes, you are comparing two parking positions in a bay that is too small for the car. Widen the view or shorten the route until the destination fits at least once, and only then compare where the traveler starts.`,
    },
    recall: {
      prompt: 'A person waits facing left for a delivery. Where could useful empty space go?',
      hint: 'Put room toward the expected event.',
      answer: `Try placing the person toward the right of the frame so the empty space sits on the left, the side the delivery will arrive from, the way you leave the gap on the side where the door will swing open. Then film a centered version too and compare: if the shot is about balance or stillness rather than the approach, the centered one may be the better answer.`,
    },
    quiz: {
      question: 'A centered doorway reads clearly, but moving it to a third cuts off one side. What should guide the choice?',
      options: ['Preserve the doorway relationship the shot needs.', 'Keep the thirds placement to maintain consistency.', 'Choose whichever version has more empty space.'],
      correctIndex: 0,
      explanation: `The doorway's symmetry is what the shot needs to show, and the centered version shows it; that readable relationship is the reason to choose. Moving it to a third for consistency parks off-center with nothing to use the gap, and loses part of the door. Empty space only counts when something is about to happen in it.`,
    },
    takeaway: 'Use a grid to propose arrangements, then judge what the action gains.',
    sourceNote: 'Inherited camera and shot references describe composition tools. No grid position guarantees an emotion; these diagrams and paper scenes are original.',
  },
  {
    id: 'cinema-005',
    title: 'Separate focus from exposure',
    outcome: `Tell a sharpness problem from a brightness problem by inspecting them separately on playback, so you reach for the control that matches the fault instead of the one the app bundles with it.`,
    scene: 'A handwritten route card is filmed while a dark sleeve enters nearer the lens.',
    sections: [
      {
        title: 'Two faults can look like one',
        paragraphs: [
          `Write BUS 4 in bold letters on a card and prop it on a clear table. Start recording, and while the card is in view, let your dark sleeve drift into the edge of the frame, nearer the lens than the card. Watch what happens to the card. It may suddenly look brighter. It may go soft. It may do both at once. The natural reaction is to say the camera did something, and to start prodding the screen until the picture looks right again.`,
          `That reaction skips the only useful question. Did the brightness change, did the sharpness change, or did your moving hand simply pass in front of the letters for a moment? Those are three different events with three different fixes, and they can happen together, which is why they get lumped into one complaint. Use invented text like BUS 4 rather than a real ticket, so nothing private is in the shot and the bold strokes give you clean edges to inspect.`,
        ],
      },
      {
        title: 'Light and distance are different decisions',
        paragraphs: [
          `Think about trying to read a page at night. If the words are a blur, it could be that you are wearing the wrong glasses, or it could be that the lamp is too dim. Nobody fixes the wrong glasses by turning up the lamp; the page gets brighter and stays blurred. And nobody fixes a dim lamp by swapping glasses. You have to work out which problem you have, and the way to tell is to check them separately: are the edges of the letters sharp, and is there enough light to see them?`,
          `A camera has the same two decisions. Focus is the glasses. It selects the distance at which edges are sharp, by having the lens bend incoming light so that detail from that distance lands cleanly on the sensor. Exposure is the lamp. It concerns how much light is gathered for each picture, and the phone then processes that into the brightness you see. More brightness cannot bring an out-of-focus letter back into focus, any more than the lamp fixes the glasses.`,
          `Both decisions are usually automatic, and both can be fooled by the sleeve. Autofocus may decide the nearer sleeve is the subject and shift its distance to that, leaving the card soft. Automatic exposure may react to a dark object filling more of the frame and brighten everything to compensate. Many apps tie both decisions to one tap on the screen, so one gesture changes the glasses and the lamp together, which is exactly why their separate effects are so easy to confuse.`,
        ],
      },
      {
        title: 'Keep the target stable',
        paragraphs: [
          `Replay the clip and look at the card just before the sleeve enters, then just after. Ask the two questions in turn. Are the letter edges still crisp? Did the paper get brighter or darker? If the letters stay crisp while the paper brightens, the glasses are fine and the lamp changed: investigate exposure. If the sleeve snaps into sharpness and the card goes soft, the lamp is fine and the glasses changed: investigate the selected focus distance.`,
          `Then act on the one you found. If your video mode offers tap-to-focus, a brightness slider, or a lock, use the one that matches the fault. If it offers none of those, the fix is physical: keep the card at a steady distance in steady light and keep the sleeve further from the lens so it is less tempting to the autofocus.`,
          `One caution on locks. A focus lock holds the distance you chose at the moment you locked it. It is a decision frozen, not a promise that everything will stay sharp. If the card moves nearer or further, reset the lock, because the glasses are now the wrong prescription for where the card is.`,
        ],
      },
      {
        title: 'Fixing the lamp when the glasses are wrong',
        paragraphs: [
          `The most common mistake is treating every fault as blur and reaching for brightness. A toy rolls toward a focus-locked phone and goes soft; the lock has kept the old distance, so the toy is now in front of the glasses' range. Brightening the picture gives you a brighter blur. Reset the focus or bring the toy back to the locked distance. The second mistake is the reverse: tapping to refocus when the letters were sharp all along and only the brightness jumped.`,
          `A third mistake is diagnosing from the live preview. The preview changes as your hand moves and is gone the moment you stop. Only the saved file lets you freeze the frame before and after the sleeve and compare the same letter in both.`,
          `Two habits. When a shot changes, ask two separate questions, are the edges still sharp and did the brightness move, before you touch anything. And when you do touch a control, name which of the two it is for, so you never turn up the lamp to fix the glasses.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two distances compete for attention',
        alt: 'A phone faces a distant route card while a sleeve enters nearer the lens from the side.',
        caption: `Follow the intended focus arrow from the phone to the card first, then notice the sleeve sitting between them, nearer the lens. The sleeve can steal the focus distance and darken the frame at the same time, which is two faults from one event. Top-view distances are schematic.`,
        items: [
          { label: 'Phone', detail: 'Keep position and mode unchanged.', x: 20, y: 80, shape: 'camera' },
          { label: 'Near sleeve', detail: 'Enters from the side.', x: 65, y: 62, shape: 'object' },
          { label: 'BUS 4 card', detail: 'The intended sharp subject.', x: 65, y: 22, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 2, label: 'intended focus' }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Old phone', 'Paper and pen', 'Dark sleeve', 'Stable table'],
      steps: [
        `Place the BUS 4 card at a distance where its letters are clearly readable in ordinary video mode. You need a sharp starting point so that any softening later is a change you can see.`,
        `Support the phone securely and record as your dark sleeve enters the edge of the frame without covering the card. The sleeve is the thing that may fool the glasses or the lamp, and it must not simply hide the letters.`,
        `Replay the file and write two separate notes for before and after the sleeve: were the letter edges sharp, and did the brightness change. Two notes, because they are two different faults.`,
        `Record again using a supported focus or exposure lock if your mode has one, or keep the sleeve further from the lens if it does not. Then check whether the fault you named is the one that went away.`,
      ],
      notice: `You can now say which property changed, sharpness or brightness, instead of calling every fault blur. That one distinction decides whether you reach for the glasses or the lamp, and it comes from two questions asked of a frozen frame.`,
      troubleshooting: `If the card is soft in every take, including before the sleeve arrives, the sleeve is not your problem. The card is probably nearer than the lens can focus, or the light is too low for the autofocus to work well. Move the card further from the lens and add available light, then start the exercise again from a sharp baseline.`,
    },
    recall: {
      prompt: 'A toy moves toward a focus-locked phone and becomes soft. Why does brightening not fix it?',
      hint: 'Which choice did the lock preserve?',
      answer: `The lock froze the focus distance at the toy's earlier position, so the toy has rolled out of the range the glasses were set for. Brightening is turning up the lamp: the picture gets lighter and stays blurred, because the lens has not been asked to look at a new distance. Reset the focus if your mode allows it, or move the toy back to where the lock was made.`,
    },
    quiz: {
      question: 'The card brightens when a sleeve enters, but its letters stay crisp. What changed most directly?',
      options: ['The chosen focus distance.', 'Exposure or brightness processing.', 'The minimum focusing distance.'],
      correctIndex: 1,
      explanation: `Crisp letters mean the glasses are still right, so the focus distance did not move; what changed was the lamp, the automatic brightness reacting to a dark sleeve filling part of the frame. The minimum focusing distance is a fixed property of the lens and does not change when something enters the shot.`,
    },
    takeaway: 'Inspect sharpness and brightness separately, even when one tap influences both.',
    sourceNote: 'Inherited Apple and Yale references explain controls and optical concepts. Apple gestures are not universal, and photo controls may be unavailable in video.',
  },
  {
    id: 'cinema-006',
    title: 'Find your camera\'s close-focus limit',
    outcome: `Find, by moving a bold label through several distances, the nearest position where your own camera records readable letters twice, and use that instead of chasing a bigger but softer picture.`,
    scene: 'A homemade BASIL label is tested at three positions on a tabletop.',
    sections: [
      {
        title: 'Bigger does not always mean clearer',
        paragraphs: [
          `You have written BASIL on a little label for a plant pot and you want a close shot of it. So you bring the phone in. The letters grow on the screen, which feels like progress. You bring it in a bit more. Suddenly the strokes go soft, and tapping the screen does nothing; the camera hunts and gives up. The label now fills half the frame and you cannot read it. The smaller version you had a moment ago, from a little further back, was perfectly legible.`,
          `This is the trap: the larger picture can contain less useful detail than the smaller one. Size on screen and sharpness are different things, and past a certain point they pull in opposite directions. Use a label you wrote yourself, not packaging with an address on it. The task is to find out what your existing camera can record reliably, not to imitate a specialist close-up photograph of a tiny object.`,
        ],
      },
      {
        title: 'Why the lens has a limit',
        paragraphs: [
          `Think about reading a restaurant menu. Hold it at arm's length and the print is small but clear. Bring it closer and the print gets bigger and stays clear, up to a point. Push it right up to your nose and the letters are enormous and completely unreadable, because your eyes cannot focus that close however hard you try. Everyone knows the fix without being told: move the menu back out to the nearest distance where it is sharp. Nobody squints harder at a menu pressed against their face.`,
          `A camera lens has the same nearest distance. Its job is to form a sharp image on the sensor, and its focusing mechanism only works across a limited range. Inside the nearest usable distance, the lens cannot bring the subject into focus no matter how many times you ask. Some older phones have fixed focus with no mechanism at all, which makes a practical distance test far more useful than hunting through menus for a control that is not there.`,
          `A few other things also soften a close shot, and they can masquerade as the limit. Low light, a blank featureless target, and a wobbling hand all blur edges. Bold lettering, steady support, and comfortable daylight remove those competing explanations so the test is about distance alone. And a blurred-background effect added afterwards cannot sharpen letters the lens never resolved.`,
        ],
      },
      {
        title: 'Test positions rather than guessing a specification',
        paragraphs: [
          `Fix the phone in place and move the label instead. Start far enough away that BASIL is clearly readable. Record a few seconds. Move the label to a middle position and record again. Move it nearer still and record a third time. Then replay all three at ordinary viewing size and compare the edges of the letters, not how much of the screen the label fills.`,
          `Suppose the far and middle recordings keep crisp strokes and the near one is soft. The middle position is your closest successful test. It is not necessarily the exact optical limit, which lies somewhere between middle and near, but it is a distance you know works. Repeat the middle recording before you trust it for a real shot, because one clear take could be luck. Two clear takes is a position.`,
          `Watch for one thing while you move the label. If the app visibly switches to a different camera as you get close, write that down. You are now testing a different optical system with a different limit. No particular number of centimeters applies to every phone, and no macro accessory is needed to make a useful shot of a plant label.`,
        ],
      },
      {
        title: 'Chasing size',
        paragraphs: [
          `The first mistake is the one from the opening: pushing nearer because bigger feels better, and ending with a large blur. The second is trying to rescue the blur afterwards. Enlarging a soft recording makes bigger soft pixels; it cannot create edges that were never captured. A smaller sharp sign holds more usable detail than a huge fuzzy one, and that detail can be cropped later if needed.`,
          `A third mistake is adjusting the wrong thing. If only the nearest of three steady, well-lit takes is soft, the answer is not a brighter screen setting, which changes how you view the file and nothing about what was recorded. The answer is to repeat at the nearest position that stayed clear.`,
          `Two habits. Judge a close shot by the edges of its letters at normal playback size, never by how big the subject looks. And when a position works, record it twice and mark it, so next time you start from a distance you know rather than from a guess.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Move one label through three tests',
        alt: 'A fixed camera faces three alternative BASIL label positions from near to far.',
        caption: `Start at the far test and follow the arrow toward the camera; that is the order of the trials. The label appears three times to show three separate recordings, not three labels at once, and the spacing is schematic rather than a recommended distance.`,
        items: [
          { label: 'Fixed phone', detail: 'Keep the same camera if possible.', x: 18, y: 82, shape: 'camera' },
          { label: 'Near test', detail: 'Larger may still be softer.', x: 40, y: 60, shape: 'paper' },
          { label: 'Middle test', detail: 'Repeat if lettering is clear.', x: 62, y: 38, shape: 'paper' },
          { label: 'Far test', detail: 'Begin at a readable distance.', x: 84, y: 16, shape: 'paper' },
        ],
        arrows: [{ from: 3, to: 1, label: 'test progressively nearer' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Old phone', 'Paper and bold pen', 'Stable table'],
      steps: [
        `Write BASIL in bold strokes and set it in comfortable light, then support your forearms on the table without blocking the lens. Bold letters and a steady hand remove the other causes of softness, so the test is about distance only.`,
        `Record the label at a distance where it is clearly readable, then at two progressively nearer positions, moving the label rather than the phone. You are walking the menu toward your nose in steps.`,
        `Replay the three files at ordinary viewing size and compare the edges of the letters, not how much of the screen the label fills. Size is the thing that fooled you in the first place.`,
        `Record the nearest clear position a second time and mark where the label sat on a scrap of paper. Two clear takes make it a distance you can rely on for real shots.`,
      ],
      notice: `Your saved position produced readable letters twice, even though a nearer position did not, so you now know a close distance that works on this phone rather than hoping. The menu is back at the spot where the print is sharp.`,
      troubleshooting: `If every one of the three takes is soft, including the far one, the distance limit is not what you are seeing. Add available light, steady the phone against something solid, and begin again from further back than before, moving closer only once the far take is crisp. A soft far take means another cause is in play.`,
    },
    recall: {
      prompt: 'A miniature sign fills the frame but cannot be read. What would you test before enlarging it digitally?',
      hint: 'Bigger pixels cannot restore missing edges.',
      answer: `Back away to a distance where the sign is smaller but sharp, with steady support and enough light, and record again. The sign pressed against the lens is the menu pressed against your nose; enlarging that recording afterwards just makes larger blurry pixels, while a smaller sharp recording contains real edges you can crop later if you need to.`,
    },
    quiz: {
      question: 'Only the nearest of three steady, well-lit label recordings is soft. Which test best follows?',
      options: ['Repeat the near take with brighter screen settings.', 'Enlarge the soft recording to match the others.', 'Repeat at the nearest position that stayed clear.'],
      correctIndex: 2,
      explanation: `With light and support ruled out, the near take is soft because it sits inside the lens's nearest focusing distance, so the useful move is to confirm the closest position that worked by repeating it. Brighter screen settings change how you view the file, not what the lens recorded. Enlarging the soft take makes bigger blur.`,
    },
    takeaway: 'Choose the nearest repeatably clear distance, not the largest blurry image.',
    sourceNote: 'Inherited camera and cinematography references support focus concepts. The three trial positions are original practice; close-focus limits and camera switching vary.',
  },
  {
    id: 'cinema-007',
    title: 'Protect important highlights without hiding the subject',
    outcome: `Recognize when a scene has more brightness range than the phone can record, and fix it at capture by moving so light falls on the subject, protecting the detail that matters over an irrelevant window.`,
    scene: 'The folds of a white kitchen towel are filmed against bright daylight.',
    sections: [
      {
        title: 'A white towel still contains detail',
        paragraphs: [
          `Drape a dry white kitchen towel over a low box so it falls in folds. Look at it with your eyes: the ridges are brighter, the creases are darker, and the whole thing is obviously cloth. Now film it with the phone pointed toward a bright window behind it. On playback you get one of two things. Either the towel is a dark gray lump with the window nicely rendered behind it, or the window is a white blaze and the towel is a flat white shape with no folds at all.`,
          `The towel has not lost its texture. The scene simply contains a bigger gap between its brightest and darkest parts than this recording can hold at once. Contrast is the word for brightness differences, and here there are two kinds competing: the small, useful contrast between ridge and crease, and the enormous contrast between the towel and the sky behind it. The camera has a limited range to spend, and the window is spending it.`,
        ],
      },
      {
        title: 'What clipping loses',
        paragraphs: [
          `Think of a kitchen scale that reads up to five kilograms. Put a six kilo bag on it and it reads five. Put an eight kilo bag on it and it also reads five. Both bags have maxed out the scale, and the readings are now identical even though the bags are not. Writing down the two readings and later subtracting a kilo from each does not tell you which bag was heavier. That information was never recorded. It was lost at the moment of weighing.`,
          `Clipping is the maxed-out scale. When two bright details both reach the recording's maximum, they are both stored as the same white. Two folds that should differ slightly in tone come out identical. Darkening the patch in an editor later makes them identically gray. The editor cannot tell which fold was darker, because the file never knew. Phone processing and high-dynamic-range modes, where a phone has them, blur this picture a little, but they are not a reason to assume every lost distinction can be recovered.`,
          `One more thing that is not a fix: your screen brightness. Turning the display down makes the clipped white look less fierce. It changes how you are viewing the file, not what is in it. Judge the saved recording at a comfortable viewing level, and if the folds are gone, they are gone.`,
        ],
      },
      {
        title: 'Change which light reaches the subject',
        paragraphs: [
          `Since the scale cannot be made bigger, change what you put on it. Move the camera round to the window side of the towel, so you are standing with the daylight behind you, and aim toward a quieter wall inside the room. Arrange the towel so the daylight falls on the folds you want to see. Now the subject is lit instead of silhouetted, and the blazing window is out of the frame altogether. The useful ridges and creases get the recording range that the window was hogging.`,
          `If your video mode has an exposure control, you can nudge it now, but try the move first. Replay and compare the same folds in both files. In the backlit version they merged or vanished. In the light-side version they should be two distinct tones, like the retained ridge and crease swatches.`,
          `This is a question of priorities, and the priority is the detail the scene needs. For a person talking, that means their face. If keeping the face readable means an irrelevant window behind them burns out to white, let it. A perfectly exposed window with the speaker reduced to a silhouette has saved the wrong thing.`,
        ],
      },
      {
        title: 'Saving the wrong detail',
        paragraphs: [
          `The first mistake is treating every bright patch as sacred. The face goes dark so that every pane of the window keeps its detail, and the scene is now about a window. The second mistake is trying to rescue clipping afterwards. Darkening the file turns identical white into identical gray; the two heavy bags still read the same. The third is the display dodge, dimming the screen until the blaze looks tolerable, which fools your eyes and changes nothing in the recording.`,
          `A quieter mistake is reaching for an editing filter before moving your feet. Most of this problem is placement, and placement costs nothing.`,
          `Two habits. When a subject sits against something much brighter, move so the light falls on the subject and the bright thing leaves the frame, before touching any control. And when you must choose, name the detail the scene is about and protect that, letting something irrelevant clip instead.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Move toward the light side',
        alt: 'Top view of daylight, towel, a backlit camera position, and an alternative on the light side.',
        caption: `Find the backlit camera at the bottom first and notice it is aiming straight through the towel at the window. Then find the light-side camera and follow its new view arrow: it faces the lit towel with the room behind. The two camera icons are separate takes.`,
        items: [
          { label: 'Daylight', detail: 'Available light through the window.', x: 50, y: 18, shape: 'light' },
          { label: 'Towel', detail: 'Keep its folds recognizable.', x: 50, y: 52, shape: 'object' },
          { label: 'Backlit view', detail: 'Bright opening behind the towel.', x: 50, y: 86, shape: 'camera' },
          { label: 'Light-side view', detail: 'Aim into the room.', x: 18, y: 25, shape: 'camera' },
        ],
        arrows: [{ from: 0, to: 1, label: 'light' }, { from: 3, to: 1, label: 'new view' }],
      },
      {
        type: 'swatches',
        title: 'Two tones lost or retained',
        alt: 'Two clipped fold samples share white; two retained samples have different light and dark tones.',
        caption: `Look at the first two chips and try to tell them apart; you cannot, because both folds maxed out the scale. Then compare the last two, where the ridge and crease kept different tones. Illustrative screen tones, not measured towel values or a calibrated display test.`,
        items: [
          { label: 'Clipped ridge', detail: 'Recorded as plain white.', color: '#ffffff' },
          { label: 'Clipped crease', detail: 'Also plain white: distinction lost.', color: '#ffffff' },
          { label: 'Retained ridge', detail: 'A lighter fold remains distinct.', color: '#eee5d6' },
          { label: 'Retained crease', detail: 'A darker fold remains distinct.', color: '#bdb6a5' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Old phone', 'Dry white towel', 'Low stable box', 'Available daylight'],
      steps: [
        `Drape the towel over the box away from glass and walking routes, and check that nothing private is visible through the window behind it. The window is going to be in your first shot, so know what it shows.`,
        `Record a short backlit take aiming toward the window and replay it, writing down whether the folds merged into white or the towel went dark. This is the maxed-out scale, and you need to see it once.`,
        `Move round to the light side on stable flooring, so the daylight is behind you, and film the towel against an interior wall. The bright thing has left the frame and the light now lands on the folds.`,
        `Compare the same folds in both files and write down which detail you chose to protect. Naming the priority is the habit that carries over to filming a person.`,
      ],
      notice: `The useful differences between ridge and crease survived a change of position with no editing filter at all. The towel was never the problem; the window was spending the recording range, and moving your feet took it off the scale.`,
      troubleshooting: `If the folds still merge from the light side, the towel may be in direct sun, which is bright enough to clip on its own. Move it into softer daylight or adjust exposure if your mode supports it, and keep the subject readable as the priority. If you find yourself dimming the screen to make it look better, stop; that changes the viewing, not the file.`,
    },
    recall: {
      prompt: 'A handmade white sign disappears against a bright doorway. What should change before editing?',
      hint: 'Reduce the scene difference at capture.',
      answer: `Turn the sign toward the available light, or move so the bright doorway is out of the frame and a quieter background sits behind it, then record again until the lettering is readable. The sign against the doorway is the two bags maxing out the scale: darkening the clipped pixels later gives you identical gray where the strokes used to be, because the file never recorded them.`,
    },
    quiz: {
      question: 'A face is readable but an irrelevant window clips. Which priority best fits a dialogue scene?',
      options: ['Preserve the face or reframe the background.', 'Darken the face until all window detail returns.', 'Rely on lowering screen brightness during playback.'],
      correctIndex: 0,
      explanation: `The face is the detail the scene is about, so it keeps the recording range, and if the window still bothers you the fix is to reframe so it leaves the shot. Darkening the face to save a window turns the speaker into a silhouette for the sake of panes nobody is watching. Lowering screen brightness changes how you view the file and restores nothing that was clipped.`,
    },
    takeaway: 'Reduce excessive scene contrast through placement and preserve the detail that matters.',
    sourceNote: 'Inherited camera and postproduction references support exposure concepts. These original swatches are schematic; no HDR feature or recovery capability is assumed.',
  },
  {
    id: 'cinema-008',
    title: 'Distinguish digital zoom from moving closer',
    outcome: `Predict, with a simple distance ratio, why enlarging a fixed view keeps the background in proportion while physically moving the camera changes how big the background looks behind the subject.`,
    scene: 'Two equally tall folded paper houses stand one behind the other.',
    sections: [
      {
        title: 'Match the front house, then inspect the rear',
        paragraphs: [
          `Fold two paper houses of exactly the same height and stand them on the table, one some way behind the other, with the phone facing them along a line. You want the front house to look bigger in the shot. There are two obvious ways to get that. Pinch the screen to zoom in, or pick the phone up and walk toward the houses. Both make the front house grow. Most people assume they are the same thing done two ways.`,
          `They are not, and the rear house is how you can tell. Do each method until the front house is the same height on screen, then look at the house behind it. After zooming, the rear house has grown by exactly as much as the front one. After walking, the rear house is noticeably smaller in proportion to the front. Same front house, different picture. The word for this is perspective: how the spatial relationships in a scene appear from a particular viewpoint. Walking changed the viewpoint. Zooming did not.`,
        ],
      },
      {
        title: 'A small distance example',
        paragraphs: [
          `Think of two trees in a field, one nearer you than the other, both the same height. Look at them through binoculars and they both get bigger together; the near tree is still exactly as much taller-looking than the far one as it was with your naked eye. Now put the binoculars down and walk toward the near tree. It looms up quickly while the far tree barely changes, because you have halved your distance to the near one and only trimmed a little off your distance to the far one. Binoculars enlarge the view you already have. Walking gives you a new view.`,
          `Put numbers on the houses to see why. Say the front house is 40 centimeters from the camera and the rear house is 80. For objects of equal height, apparent size is roughly proportional to one over the distance, so the rear house appears 40 divided by 80, which is 0.5, or half the height of the front one. Now zoom digitally. The phone enlarges the picture it already has, both houses grow equally, and the rear house is still 50 percent of the front. The binoculars changed nothing about the relationship.`,
          `Now walk the camera 20 centimeters forward. The front house is 20 centimeters away and the rear house is 60. The ratio is 20 divided by 60, about 0.333, so the rear house is now only a third of the front house's height. That is the looming near tree. These numbers are idealized geometry, not measurements from any phone, and the distances are not recommendations for how close to focus.`,
        ],
      },
      {
        title: 'Where lenses enter the choice',
        paragraphs: [
          `A few words sort out what the zoom button might be doing. The lens directs light onto the sensor, and its focal length helps decide how wide a view the camera records: a shorter focal length on the same sensor takes in more of the scene. Optical zoom changes the focal length, physically narrowing the view. Digital zoom crops the recorded picture and enlarges what is left, which is the binoculars. And on many phones, the zoom button does neither; it switches to a different physical camera with its own lens.`,
          `So do not assume you know which operation a tap performed. What you can be sure of is this: as long as the camera stays in the same place, changing the magnification by any means does not change the distance ratios. The rear house stays at 50 percent. Only moving the camera produces the 33 percent view.`,
          `That means the choice is sometimes made for you. If walking closer would put you somewhere unsafe, on a kerb, a ledge, a wet floor, accept the crop and the loss of detail it brings. Perspective is not worth a fall.`,
        ],
      },
      {
        title: 'Mistaking one for the other',
        paragraphs: [
          `The first confusion is thinking zoom and walking are interchangeable, and being surprised when a background looms or shrinks unexpectedly. Step back from a face and enlarge the view to restore its size, and the shelf behind the face grows relative to it, because stepping back made the two distances more similar in proportion. The shelf did not move. Your viewpoint did.`,
          `The second confusion is in testing. Two shots with matching faces but different camera positions have mixed up the two effects. Two shots after an unknown camera switch have changed the lens as well. The one clean comparison is an original file and a crop enlarged from that same file, because that guarantees the same captured viewpoint and nothing else.`,
          `Two habits. Before you zoom or step, ask whether you want the background to stay in proportion or to change, and pick the method that does that. And when you test, compare a crop against its own source file, so the only difference is the enlargement.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Distances change when the camera moves',
        alt: 'Original and nearer camera positions face a front house and a rear house along one axis.',
        caption: `Read the two distances on the original camera first, 40 to the front house and 80 to the rear, then follow the move arrow and read the new pair, 20 and 60. The front distance halved while the rear only shrank by a quarter, which is the near tree looming. A schematic top view of the hypothetical setup.`,
        items: [
          { label: 'Original camera', detail: '40 cm to front; 80 cm to rear.', x: 20, y: 80, shape: 'camera' },
          { label: 'Nearer camera', detail: '20 cm to front; 60 cm to rear.', x: 40, y: 60, shape: 'camera' },
          { label: 'Front house', detail: 'Keep its screen height comparable.', x: 60, y: 40, shape: 'paper' },
          { label: 'Rear house', detail: 'Same physical height as front.', x: 80, y: 20, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 1, label: 'move 20 cm' }],
      },
      {
        type: 'bars',
        title: 'Rear height relative to front height',
        alt: 'Original and cropped views show 50 percent; nearer view shows approximately 33.3 percent.',
        caption: `Notice that the first two bars are identical: the digital crop is the binoculars, and it left the ratio at 50. Only the third bar, the nearer view, drops to about 33. Idealized equal-height houses; the last value is rounded, and these are not image-quality scores.`,
        unit: '% of front-house height',
        items: [
          { label: 'Original view', detail: '40 / 80 times 100.', value: 50 },
          { label: 'Digital crop', detail: 'Both heights enlarge equally.', value: 50 },
          { label: 'Nearer view', detail: '20 / 60 times 100, rounded.', value: 33.3 },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Old phone', 'Two equal paper houses', 'Clear table'],
      steps: [
        `Fold two houses of equal height and set them along the camera's line of view with a clear gap between them, both within the distance your phone can focus. Equal heights are what make the ratio readable.`,
        `Record from one fixed position, then, if your phone offers digital zoom, make an enlarged take from exactly the same spot. This is the binoculars take, and the camera must not move a centimeter.`,
        `Return the zoom to its original setting and walk the phone nearer along a safe route until the front house is about the same size on screen as in the zoomed take. This is the walking take.`,
        `Compare the rear house in the zoomed and walked takes. If your phone has no zoom, sketch a cropped rectangle on a paper drawing of the far view instead; the crop keeps the proportions, and the sketch shows it.`,
      ],
      notice: `Walking nearer changed how big the rear house looks relative to the front one, while the crop of the fixed view left that relationship exactly as it was. You have seen the binoculars and the walk give two different pictures of the same front house.`,
      troubleshooting: `If the nearer take goes soft because you are inside the phone's close-focus distance, use a bigger table or floor and space the houses further apart, further from the camera, so the walk stays in focusable range. If the app visibly switches cameras when you zoom, write that down as part of the result rather than hiding it; you tested a different lens.`,
    },
    recall: {
      prompt: 'Why does a distant shelf look larger behind a face when you step back and enlarge the view?',
      hint: 'Compare both distances relative to each other.',
      answer: `Stepping back adds the same distance to both the face and the shelf, which makes their two distances more similar in proportion; the shelf is now relatively nearer to the face than before. Enlarging the view then restores the face to its old size while leaving the shelf larger in proportion than it was in the nearer shot. It is the far tree catching up with the near tree as you walk away from both.`,
    },
    quiz: {
      question: 'Which comparison isolates digital cropping from a change of viewpoint?',
      options: ['Two views with matching faces but different camera positions.', 'Two views after switching unknown physical cameras.', 'An original file and an enlarged crop from that same file.'],
      correctIndex: 2,
      explanation: `Cropping a file you already have guarantees the same captured viewpoint, so the only difference is the enlargement, the binoculars with nothing else changed. Matching face sizes from different positions has mixed walking into the test, and switching unknown cameras has changed the lens as well, so neither can tell you what cropping alone does.`,
    },
    takeaway: 'Position changes perspective; enlarging one fixed camera view preserves its proportions.',
    sourceNote: 'Inherited shot and Yale references discuss lenses and perspective. The ratios use simplified projection geometry; real optics, processing, and close-focus limits vary.',
  },
  {
    id: 'cinema-009',
    title: 'Use camera height to reveal relationships',
    outcome: `Choose camera height by what it lets the viewer see past or over, keep height separate from tilt, and describe the visible result before claiming any mood for the shot.`,
    scene: 'A folded message lies inside an open, shallow cardboard box.',
    sections: [
      {
        title: 'Can the viewer see into the box?',
        paragraphs: [
          `Put a folded paper message inside an open, shallow cardboard box on a low table. Now film it from two heights. First, hold the phone down near the level of the box's front wall. You see cardboard, and perhaps a sliver of paper peeking over the top. Then stand and hold the phone comfortably higher, at about the same distance away. Now you can see down into the box, and the message is plainly there.`,
          `Nothing inside the box moved. What changed is the path your camera looks along, and whether the front wall sits in that path. This gives camera height a concrete job you can judge: hide the message, or reveal it. That is much easier to evaluate than the question people usually ask first, which is whether a low shot feels powerful or a high shot feels vulnerable. Those feelings depend on the whole story. Whether the viewer can see the message depends only on where the lens is.`,
        ],
      },
      {
        title: 'Height is not the same as tilt',
        paragraphs: [
          `Think about standing in a crowd behind a tall person. You want to see the stage. Tilting your head up does nothing useful; you get a better view of the back of their head. Tilting down shows you their shoulders. The only thing that works is getting your eyes higher: standing on tiptoe, or finding a step. Your eyes have to be above the obstacle, and no amount of pointing them in a new direction will put them there.`,
          `The camera has the same two separate controls. Height is where the lens sits vertically. Angle is where it points. You can lower a phone and keep it perfectly level, or leave it at one height and tilt it down toward the table. Tilting changes the direction of view. It does not lift the viewpoint over anything that is in the way.`,
          `At the low position, the box's front wall is the tall person: it interrupts the line of sight to the message. Raising the lens gives you a clear line over that wall. If you keep the same camera and roughly the same distance from the box, the only thing that differs between the two takes is height, and the visibility change is easy to see and easy to credit.`,
        ],
      },
      {
        title: 'Choose a reveal, not an emotion code',
        paragraphs: [
          `Record the two takes. In the low one, most of the message is hidden. In the high one, it is revealed. You will probably have to tilt the phone down a little in the high take to keep the box in frame; that is fine, but write it down as a second change rather than pretending height did everything alone.`,
          `Now you have a pair of shots with a clear relationship. The low shot withholds information, so it could create a question: what is in the box? The high shot answers it. That is a structure a scene can use. In another story the same two positions might just be two ways of documenting a container, with no suspense at all. The positions do not carry a fixed meaning. The visibility difference is the fact; the mood is a use you may or may not make of it.`,
          `One safety rule that is not negotiable: never stand on furniture to get the high view. A seated viewpoint and a comfortable standing viewpoint differ by enough. If they do not, use a smaller box on a lower table.`,
        ],
      },
      {
        title: 'Tilting when you should be lifting',
        paragraphs: [
          `The first mistake is trying to see past an obstacle by changing the angle. A table edge hides a toy's feet, so the phone is tilted up from the same low position, and the edge is still in the way, because the lens has not moved. Raise the camera, or shift it sideways safely, then aim at the detail you need. The second mistake is choosing height by mood first. The downward angle feels stronger, so it is used, without checking whether it shows the thing the scene is about.`,
          `A third is choosing by how much extra room appears. More ceiling or more table above the box is only a reason if that extra room contributes something the scene needs.`,
          `Two habits. Before moving the camera up or down, name the surface or edge that is blocking the thing you want seen, and lift the lens over it. And describe what each height shows or hides in plain words before you decide what it means.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A line above the front wall',
        alt: 'Side view: a low camera faces the box wall; a higher camera has a sightline to the message behind it.',
        caption: `Follow the blocked arrow from the lower camera first and notice it stops at the front wall, like a view stopped by a tall person in a crowd. Then follow the clear sightline from the higher camera over the wall to the message. This is a side elevation, not a floor plan, and the icon sizes are schematic.`,
        items: [
          { label: 'Higher camera', detail: 'Can look over the front wall.', x: 20, y: 20, shape: 'camera' },
          { label: 'Lower camera', detail: 'Front wall blocks the message.', x: 20, y: 80, shape: 'camera' },
          { label: 'Front wall', detail: 'The nearer blocking edge.', x: 55, y: 58, shape: 'box' },
          { label: 'Message', detail: 'Inside, behind the front wall.', x: 84, y: 80, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 3, label: 'clear sightline' }, { from: 1, to: 2, label: 'blocked' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Old phone', 'Shallow empty box', 'Folded paper', 'Low stable table'],
      steps: [
        `Put the folded message in the box and check that the table and your footing are stable before you start. The exercise needs two heights, and the second one must be safe to hold.`,
        `Record a short take from a comfortable low height, without kneeling in a walking route. This is the view from behind the tall person, and you need it on file.`,
        `Raise the phone to a comfortable standing height at about the same distance and record the box interior. Tilt only as much as the framing needs, and notice that you did.`,
        `Compare which surfaces each take shows, and write down the tilt adjustment, before you say anything about what the shots might mean in a story.`,
      ],
      notice: `The higher viewpoint reveals the message that the front wall hid from the low view, and you can point to the wall as the reason. Whether the pair feels suspenseful is a separate question that you now know how to keep separate.`,
      troubleshooting: `If both heights show the same interior, the box wall is too low to block anything from your seated position. Add a taller strip of paper to the front wall or use a smaller box on a lower table so the difference appears. Do not fix it by climbing on anything.`,
    },
    recall: {
      prompt: 'A table edge hides a toy\'s feet. Why might tilting upward from the same low position fail?',
      hint: 'A direction change does not relocate the lens.',
      answer: `Because tilting is turning your head in the crowd: it changes where the lens points but leaves it exactly where it was, below the edge that is in the way. The table edge still sits between the lens and the feet. Raise the camera, or shift it sideways somewhere safe, so the sightline clears the edge, and then aim at the feet.`,
    },
    quiz: {
      question: 'Which observation best supports using the higher box view for a reveal?',
      options: ['The downward angle suggests a stronger mood.', 'The message becomes visible beyond the front wall.', 'More of the room fits above the box.'],
      correctIndex: 1,
      explanation: `A reveal is about information arriving, and the higher view is the one where the lens clears the front wall and the message can be seen; that is a fact anyone can check in the file. Mood depends on the whole story and is not in the shot by itself. Extra room above the box is only a reason if that room contributes something the scene needs.`,
    },
    takeaway: 'Describe what a height reveals or hides before deciding what it means.',
    sourceNote: 'The inherited Yale reference distinguishes framing height and angle. The box example is original; no camera height has a universal emotional meaning.',
  },
  {
    id: 'cinema-010',
    title: 'Build depth with overlap and separation',
    outcome: `Make near, middle, and far layers readable with overlap and separated outlines, using a sideways shift of the camera to open a gap, rather than depending on background blur.`,
    scene: 'A paper post, small plant, and folded paper hill form a tabletop landscape.',
    sections: [
      {
        title: 'A sharp background can still have depth',
        paragraphs: [
          `Build a tiny landscape on the table: a paper post standing near the phone, a small plant a little further back, and a folded paper hill behind them both. Film it, and on an older phone all three will probably come out acceptably sharp, front to back. Your first thought may be that the shot is flat, and that a proper camera would have blurred the hill into a soft wash and given the scene some depth.`,
          `A sharp background does not make a picture flat. Viewers read depth from several cues that have nothing to do with blur: which object covers which, how apparent size changes with distance, and whether the outlines of separate things stay separate. The vocabulary is simple. The foreground is the near layer, here the post. The middle ground holds the plant. The background is the hill. Those words describe positions relative to the camera, not how important each object is to the story.`,
        ],
      },
      {
        title: 'Overlap can explain or conceal',
        paragraphs: [
          `Think of looking out of a train window. The fence posts beside the track whip past in a blur of motion while the hills on the horizon barely drift. Everything is sharp; nothing is out of focus. Yet you have no trouble telling what is near and what is far, because the near things move so much more than the far things for the same movement of the train. Your eye is reading depth from relative motion, not from softness.`,
          `Overlap is the first of the cues at work on the table. A post that covers a small corner of the hill says plainly that the post is nearer. But overlap can take as well as give. If the post covers the whole plant, it has hidden the subject you wanted to show. And if the edge of the hill happens to line up exactly with the plant's stem, two separate objects fuse into one confusing outline. Overlap must be arranged, not left to chance.`,
          `The train window shows how to arrange it. Move the phone sideways a few centimeters and watch the screen. The near post slides a long way against the hill; the hill hardly moves. That difference in shift for the same camera movement is called parallax, and near objects always show more of it than far ones. You can use it to open a gap between the post and the plant without touching a single prop.`,
        ],
      },
      {
        title: 'Use the move to find a stationary view',
        paragraphs: [
          `Start with the post, the plant, and the hill lined up along the camera's view, so the post hides most of the plant. Record a few seconds from there. Then slide the phone sideways, slowly, watching the near post travel across the frame, until it clears the plant and the plant's outline stands on its own with the hill still recognizable behind it. Stop. Record from that second position, holding still.`,
          `The sideways move was a search, not a shot. The finished scene does not need a moving camera; it needs the stationary view the move helped you find. Two stationary takes from two positions tell you everything about which arrangement reads.`,
          `Two terms often get mixed into this that you do not need to control here. Focus is which distance looks sharp. Depth of field is the range of distances that look acceptably sharp at once. Many ordinary phone views keep a broad range sharp, and that is fine. Readable layers come from overlap and separated outlines, and they work perfectly well when everything is in focus.`,
        ],
      },
      {
        title: 'Reaching for blur',
        paragraphs: [
          `The first mistake is treating blur as the only depth tool, so that when a coat hook appears to grow out of someone's head in a portrait, the answer seems to be a portrait mode. The hook is a merged outline. Shifting the camera or the consenting subject a little sideways separates the two shapes, and the depth reads with everything sharp. Blur is optional; separation is the fix.`,
          `The second mistake is adding clutter to manufacture depth. A pile of objects in the foreground does give you a near layer, but if it hides the subject or muddles the outlines, it has cost more than it added. Depth is read from a few clear relationships, not from quantity.`,
          `Two habits. When a scene feels flat, check the outlines first: is anything merging, and is anything hidden that should be seen? And when it is, move the camera sideways and let the near things slide further than the far things until the gap opens, then hold still and record.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Aligned layers',
        alt: 'A phone, near paper post, middle plant, and far paper hill sit along one viewing line.',
        caption: `Follow the aligned view arrow from Phone A and notice that the post, the plant, and the hill all sit on it; from here the post can hide the plant. A top view in which the symbols do not depict actual screen sizes.`,
        items: [
          { label: 'Phone A', detail: 'First stationary view.', x: 18, y: 82, shape: 'camera' },
          { label: 'Near post', detail: 'Can cover the plant.', x: 40, y: 60, shape: 'paper' },
          { label: 'Middle plant', detail: 'The subject to keep readable.', x: 62, y: 38, shape: 'object' },
          { label: 'Far hill', detail: 'Background paper shape.', x: 84, y: 16, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 3, label: 'aligned view' }],
      },
      {
        type: 'spatial',
        title: 'Only the viewpoint changes',
        alt: 'The three props stay fixed while the phone shifts off their alignment.',
        caption: `Compare the three prop positions with the diagram above: they are identical. Only Phone B has moved, sideways, and the clear view arrow now reaches the plant without passing through the post. This is the train-window shift doing its work.`,
        items: [
          { label: 'Phone B', detail: 'Second stationary view.', x: 18, y: 50, shape: 'camera' },
          { label: 'Near post', detail: 'Now beside the plant sightline.', x: 40, y: 60, shape: 'paper' },
          { label: 'Middle plant', detail: 'No longer hidden by the post.', x: 62, y: 38, shape: 'object' },
          { label: 'Far hill', detail: 'Still establishes a farther layer.', x: 84, y: 16, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 2, label: 'clear view' }],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Old phone', 'Paper post and hill', 'Small plant or paper plant', 'Stable table'],
      steps: [
        `Set up three layers on a clear table, a near post, a middle plant, and a far hill, using a paper plant if there is no real one. Three distances are what make overlap and parallax visible.`,
        `Record a stationary take from a position where the near post partly hides the plant. You need the merged version on file so the fix has something to be compared with.`,
        `Slide the phone sideways slowly and safely, watching the post travel across the frame until the plant's outline stands clear, then stop and record a second stationary take. The slide is the search; the still take is the shot.`,
        `Compare the two files and name which overlaps explain depth and which one removed information. Keep the arrangement where every outline is its own, and resist adding anything to the foreground.`,
      ],
      notice: `The three layers read as near, middle, and far even though all three are sharp. The depth came from the post overlapping a corner of the hill and from the plant's outline standing clear, which is what the train window showed you all along.`,
      troubleshooting: `If outlines still merge after the shift, move a little further sideways, or separate the props themselves so the gaps are wider. Do not solve it by piling more objects into the foreground to fake depth; extra clutter hides more than it reveals and makes the outline problem worse.`,
    },
    recall: {
      prompt: 'A coat hook seems to grow from someone\'s head in a stationary portrait. What should you try?',
      hint: 'Separate outlines by changing their alignment.',
      answer: `Shift the camera, or ask the person to move, a little sideways until the hook's outline separates from the head, the way the near post slides clear of the plant when the phone moves. The hook is far and the head is near, so a small shift moves them apart on screen. Background blur is one option, but separating the outlines fixes the depth with everything sharp.`,
    },
    quiz: {
      question: 'The near paper post hides the plant. Which adjustment best tests parallax?',
      options: ['Apply background blur from the same position.', 'Enlarge the same view around the plant.', 'Shift the camera sideways while the props stay fixed.'],
      correctIndex: 2,
      explanation: `Parallax is the near thing sliding further than the far thing when the viewpoint moves, so only a sideways shift of the camera with the props fixed can show it, and only that shift uncovers what the post was physically hiding. Blur from the same spot softens a plant that is still covered, and enlarging the same view just makes the post bigger in front of it.`,
    },
    takeaway: 'Use readable overlap and separated outlines to show depth without requiring blur.',
    sourceNote: 'Inherited Yale and shot references support spatial layering and focus terminology. The paper landscape is original and does not assume portrait-video controls.',
  },
  {
    id: 'cinema-011',
    title: 'Steady the phone and allow for stabilization crop',
    outcome: `Reduce camera shake with physical support before the phone records it, and leave margin around anything important at the edges because electronic stabilization may trim the frame.`,
    scene: 'A row of closed books includes a small paper marker near the right edge.',
    sections: [
      {
        title: 'Give the eye a stationary reference',
        paragraphs: [
          `Line up a row of closed books on a shelf and tuck a small paper marker beside the last one, near the right edge of your frame. Film it with the phone held out in front of you at arm's length. On playback the straight spines of the books are swaying gently, and the whole picture breathes in and out. Books are unforgiving that way: their straight edges show every tiny movement that a softer subject would hide, which is exactly why they make a good test.`,
          `The shake is coming from your wrists. With your arms stretched out, a tiny rotation at the wrist swings the far end of the phone a long way. Bring the phone in toward your body and rest your forearms on a stable table, keeping your fingers clear of the lens and the microphone. Breathe normally. The goal is less unintended movement, not a rigid pose or a held breath, and if the position hurts, stop.`,
        ],
      },
      {
        title: 'Why steadier footage can have tighter edges',
        paragraphs: [
          `Two pictures from ordinary life explain the two halves of this lesson. First, binoculars. Anyone who has tried to watch a bird through binoculars knows the image dances until you rest your elbows on a fence or a car roof. The support steadies the view before it ever reaches your eyes. Second, printing a photo. Order a print of a picture with someone's elbow right at the edge and the elbow often comes back trimmed off, because the printer keeps a small margin to avoid white borders. The picture was fine; the edge was not safe.`,
          `Your phone can do both of these to your video. Physical support is the elbows on the fence: it removes movement before the camera records anything. Electronic stabilization is the printer's margin. It estimates the unwanted movement and shifts the recorded picture to cancel it, and to shift the picture without showing an empty strip at the edge, it reserves margins and crops a little off all round. A marker that sat safely inside the frame in one recording mode can vanish in another, because the crop changed.`,
          `Keep the two straight. Stabilization cannot promise to remove every shake, and it cannot sharpen blur that has already smeared across a single frame; that happened at the sensor. Phones differ widely in whether they have optical or electronic systems and whether any of it can be switched. Support works on every phone ever made.`,
        ],
      },
      {
        title: 'Leave room, then check the file',
        paragraphs: [
          `Run two comparisons, one at a time. First, record ten seconds of the books handheld at arm's length, then ten seconds with your forearms on the table, changing nothing else. Replay both and look at two separate things: do the spines drift, and is the paper marker still in the picture? Second, only if your video mode shows a stabilization switch, record a pair that differs by that switch alone and ask the same two questions. If there is no switch, test the ordinary recording and leave the settings alone.`,
          `Whenever the marker sits close to an edge, give it room. Frame a little wider, or move the marker further inside the picture. That is the printer's margin, reserved on purpose instead of lost by accident.`,
          `Then trust only the saved file. The live preview shows you the camera's view, but the recording path may crop it the moment you press record. The file on the phone is the only thing that proves what survived.`,
        ],
      },
      {
        title: 'Trading one problem for the other',
        paragraphs: [
          `The first mistake is treating stabilization as a substitute for support. The footage looks smoother but the marker has been cropped away, and the shake that was too big for the system to cancel is still there, with blur baked into the frames. The second is the reverse: switching stabilization off to get the marker back and accepting the wobble, when support plus a slightly wider frame would have kept both.`,
          `A third mistake is checking the wrong thing. A framed certificate loses its corner when recording starts, and the filmmaker practices a steadier grip. The grip was never the problem; the mode cropped the view. Compare recorded edges, not just hand steadiness, and add margin before the next take.`,
          `Two habits. Before you record anything that matters, rest your forearms on something solid and bring the phone in close, because support is free and works everywhere. And keep anything important well inside the edges, then check the saved file to see where the edges actually fell.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Support the hands from below',
        alt: 'A stable table supports forearms, which steady a phone held above them.',
        caption: `Follow the two arrows upward: the table supports the forearms, and the forearms steady the phone, like elbows on a fence under a pair of binoculars. The relationships are schematic; keep the phone in your hands rather than balancing it on a tall stack.`,
        items: [
          { label: 'Phone', detail: 'Lens and microphone stay clear.', x: 50, y: 20, shape: 'camera' },
          { label: 'Forearms', detail: 'Comfortable support, normal breathing.', x: 20, y: 68, shape: 'person' },
          { label: 'Stable table', detail: 'Supports the forearms.', x: 80, y: 68, shape: 'box' },
        ],
        arrows: [{ from: 2, to: 1, label: 'support' }, { from: 1, to: 0, label: 'steady' }],
      },
      {
        type: 'comparison',
        title: 'Reserve room around the marker',
        alt: 'A paper marker sits near the right border in one panel and farther inward in another.',
        caption: `Compare how close the marker sits to the right edge in each panel. The second one has the printer's margin built in on purpose. The changed position is a real framing choice, not a simulated stabilization result.`,
        items: [
          { label: 'Little margin', detail: 'Marker sits near the right edge.', x: 86, y: 50, shape: 'paper' },
          { label: 'More margin', detail: 'Marker is farther inside the view.', x: 66, y: 50, shape: 'paper' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Old phone', 'Closed books', 'Paper marker', 'Stable table'],
      steps: [
        `Arrange books with no private labels showing and frame a paper marker near, but not touching, the right edge. The straight spines will reveal shake, and the marker will reveal any crop.`,
        `Record ten comfortable seconds handheld at arm's length, then ten with your forearms resting on the table and the phone brought in close. Only the support changes between the two takes.`,
        `Replay both files and answer two separate questions: do the spines drift, and is the marker still in the picture? Steadiness and edge coverage are different checks.`,
        `If the marker is at risk, frame a little wider and record again. Only if your video mode shows a stabilization switch, make one more pair that differs by that switch alone.`,
      ],
      notice: `Support reduced the drift along the spines, and the separate margin check protected the marker regardless of what the recording path cropped. You have the elbows on the fence and the printer's margin working at the same time, and you know which did which.`,
      troubleshooting: `If the picture still feels unstable with your forearms supported, shorten the take and use a relaxed two-handed grip close to your body; long takes let small movements accumulate. Do not improvise a high mount from stacked objects to get the phone steady. A stack falls, and a short supported take is enough for this test.`,
    },
    recall: {
      prompt: 'A framed certificate loses its corner when recording starts. What would you check?',
      hint: 'Compare recorded edges, not only hand steadiness.',
      answer: `Check whether the recording mode is cropping the view the moment you press record, the way a printer trims a margin off a photo, by comparing the saved file's edges with the live preview. Then frame wider so the corner sits well inside the picture before the next take. A steadier grip cannot bring back a corner that the framing never included.`,
    },
    quiz: {
      question: 'A stabilization-mode test looks steadier but loses the marker. Which revision addresses both needs?',
      options: ['Keep physical support and frame slightly wider.', 'Remove support to restore the original movement.', 'Move the marker closer to the border.'],
      correctIndex: 0,
      explanation: `Support is the elbows on the fence and handles the shake; a slightly wider frame is the printer's margin and gives the crop room to take without eating the marker. Removing support brings the wobble back and does nothing reliable for the edges. Moving the marker nearer the border puts it exactly where the crop will find it.`,
    },
    takeaway: 'Steadiness and edge coverage are separate checks on the saved recording.',
    sourceNote: 'Inherited Apple recording references describe model-dependent stabilization options. No toggle, gimbal, or specific crop amount is required for this original exercise.',
  },
  {
    id: 'cinema-012',
    title: 'Choose frame rate for motion, not a cinema badge',
    outcome: `Separate how many pictures per second are recorded from how long each one gathers light, and fix a jerky pan by moving the camera more slowly rather than by chasing a frame-rate setting.`,
    scene: 'A stationary operator pans across a shelf of three paper shapes.',
    sections: [
      {
        title: 'A pan reveals motion problems',
        paragraphs: [
          `Set a paper triangle, a square, and a circle in a row along a shelf. Stand still and turn the phone from the triangle to the circle. That horizontal turn from a fixed spot is called a pan. Do it briskly, in a couple of seconds, and watch it back. The shapes stutter across the screen; the square is in one place, then abruptly somewhere else, and following it is hard work. Pause the playback and the frozen picture may be perfectly sharp. Play it and it judders.`,
          `The usual reaction is to go looking in the settings for a more cinematic frame rate, as if the right number would smooth things out. There is a simpler experiment first. Do the identical pan from the identical start to the identical end, but take twice as long over it. Most of the time the shapes become easy to follow. Nothing about the camera changed; only your speed did. Start with whichever ordinary recording rate your phone already uses and keep the same endpoints for every comparison.`,
        ],
      },
      {
        title: 'Pictures per second versus time per picture',
        paragraphs: [
          `Think of a flip book. Each page is a drawing, and riffling the pages makes the drawing move. Two separate things decide how the motion looks. One is how many pages you flip per second. The other is how far the character moves between one page and the next. If the character leaps a long way between pages, the movement jerks, however fast you flip. Draw smaller steps and the same number of pages gives smooth motion. The pan is a flip book, and a fast pan draws big leaps between the pages.`,
          `Frame rate is the pages per second, written fps. Take a constant 30 fps as an illustration. A four-second pan contains 30 times 4, which is 120 pictures. An eight-second pan over the same angle contains 240. The slower pan has twice as many pages for the same journey, so the shapes move half as far between one picture and the next. That smaller step is what your eye reads as smooth.`,
          `There is a second timing control hiding inside each page. Shutter time is how long a single picture gathers light. If the scene moves during that interval, the movement smears within the picture, which is motion blur, like a drawing done while the paper was sliding. Frame rate and shutter time are related, because a picture cannot gather light for longer than the gap before the next one, but they are different controls. A phone usually sets shutter time automatically, so choosing a frame rate does not give you control of blur.`,
        ],
      },
      {
        title: 'Use the result, not the reputation',
        paragraphs: [
          `The cinema badge is a 24 fps setting. All it does is record 24 pages per second instead of 30, which is fewer motion samples, not more. It does not supply careful lighting, a good performance, or a steady hand, which are the things people are actually remembering when they say a film looks cinematic. In the other direction, recording at a high rate does not by itself produce slow motion. Slow motion happens when the playback runs at a slower rate than the capture, stretching the pages out in time.`,
          `For the test, add a one-second hold at each end. The four-second pan becomes a six-second take: hold, pan, hold. The eight-second pan becomes a ten-second take. Replay both at normal speed and simply choose the one where you can follow the shapes. Those timings are a practice sketch, not a universal limit on pans, and your phone's real frame timing may vary rather than sitting at a constant 30.`,
          `Write down the rate your phone displays, if it displays one, rather than assuming. The arithmetic above only holds for the number you actually recorded at.`,
        ],
      },
      {
        title: 'Settings that cannot add pictures',
        paragraphs: [
          `The first mistake is fixing a judder with brightness. The pan jumps between positions, so exposure goes up, and the jumps are now brighter. No setting that changes light adds pages to the flip book. The second is cropping the same file tighter, which enlarges the leaps rather than shrinking them. The third is buying the badge: switching to 24 fps because it sounds like cinema and getting fewer samples of a pan that was already too fast.`,
          `A quieter confusion mixes the two timings. If both takes look smeared rather than jerky, that is blur within the pictures, which points at shutter time, often because the light is low and the phone is holding each picture open longer. Add light and slow down; the smear is a different fault from the stutter.`,
          `Two habits. When motion judders, slow the movement first and keep every other setting the same, because smaller steps between pictures is the one fix you fully control. And before trusting any frame-rate arithmetic, read the rate off the phone rather than off the badge.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Keep the same beginning and ending',
        alt: 'Hold on the triangle, pan across the square, then hold on the circle.',
        caption: `Read the middle step first: it is the only part that changes between the two takes, four seconds and then eight. The holds at each end stay at one second so the comparison is about pan speed alone. Diagram spacing is not proportional to time.`,
        items: [
          { label: 'Triangle', detail: 'Hold still for 1 second.' },
          { label: 'Across the square', detail: 'Pan for 4 seconds, then try 8 in the next take.' },
          { label: 'Circle', detail: 'Hold still for 1 second.' },
        ],
      },
      {
        type: 'bars',
        title: 'Samples during the movement only',
        alt: 'At a constant 30 fps, four seconds contains 120 images and eight seconds contains 240.',
        caption: `Compare the two bars as pages in a flip book covering the same journey: the eight-second pan has twice as many, so each page moves the shapes half as far. Hypothetical constant 30 fps, with the stationary holds left out of the counts.`,
        unit: 'recorded images during pan',
        items: [
          { label: '4-second pan', detail: '30 times 4 equals 120.', value: 120 },
          { label: '8-second pan', detail: '30 times 8 equals 240.', value: 240 },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Old phone', 'Three drawn paper shapes', 'Stable seat and shelf'],
      steps: [
        `Place the triangle, square, and circle in a clear view with nothing private behind them, and sit or stand somewhere stable. You will turn from one spot, so the spot has to hold you.`,
        `At whatever ordinary rate your phone uses, hold on the triangle for a second, pan to the circle in about four seconds, and hold again. This is the flip book with big leaps between pages.`,
        `Repeat with the identical start and end over about eight seconds, turning from the same fixed position without walking. Only the speed of the turn changes.`,
        `Replay both at normal speed and compare how easily you can follow the square across the shelf. Write down any frame rate the phone actually displayed instead of assuming 30.`,
      ],
      notice: `The slower turn changed how easily the same shapes could be followed, with no setting touched. You doubled the pages in the flip book for the same journey, and the smaller step between pictures is what you can see.`,
      troubleshooting: `If both takes look smeared rather than jerky, you are seeing blur inside each picture, not jumps between pictures. That points at shutter time, which the phone is probably lengthening because the light is low. Add available light, slow the pan further, and compare again; the smear and the stutter are different faults with different causes.`,
    },
    recall: {
      prompt: 'A slow hand gesture is clear but a fast pan judders at the same rate. What can you change without new controls?',
      hint: 'Reduce motion between samples.',
      answer: `Slow the pan down, or make it cover a smaller angle, while leaving the frame rate exactly where it is. The gesture was clear because it moved a small distance between pictures; the pan juddered because it leapt a long way between the same pictures. Smaller steps per page is the fix, and it needs no camera mode at all.`,
    },
    quiz: {
      question: 'A paused pan frame is sharp, but normal playback jumps between positions. Which first test targets that issue?',
      options: ['Increase exposure while keeping the pan speed.', 'Repeat the same pan more slowly.', 'Choose a tighter crop of the same file.'],
      correctIndex: 1,
      explanation: `A sharp frozen frame with jumpy playback means the leaps between pages are too big, so slowing the pan is the test that shrinks them. More exposure changes the light in each picture and adds no pictures. A tighter crop magnifies the same leaps, making the stutter worse rather than better.`,
    },
    takeaway: 'Frame rate samples motion; shutter time affects blur; movement speed still needs a deliberate choice.',
    sourceNote: 'Inherited Apple and Yale references support timing concepts. All counts assume constant 30 fps; the practice works at the phone\'s available ordinary rate.',
  },
  {
    id: 'cinema-013',
    title: 'Define a visible change for the scene',
    outcome: `Plan a short scene as a want, an interruption, and a changed action, so that the last thing on screen shows a decision that is different from the first, without needing words.`,
    scene: 'A book being packed is left behind after a homemade reminder is discovered.',
    sections: [
      {
        title: 'Start with an intention we can see',
        paragraphs: [
          `An open bag sits on the table beside a book. Your hand picks up the book and moves it toward the bag. A slip of paper is sticking out from between the pages. The hand pauses, pulls the slip out, and unfolds it. It reads LEAVE FOR JO. The hand puts the book down on the far side of the table, away from the bag, and the take ends. Nobody speaks. There is no face in the shot. And yet anyone watching understands that something was about to happen and then did not.`,
          `That is a complete small scene, and it is complete for one reason: the first action pointed toward taking the book and the last action pointed toward leaving it. Everything in between explains the switch. The writing on the slip is invented, only your hands appear, and nothing valuable is involved. You do not need a real disagreement, a second performer, or an expensive prop to make a decision visible. You need a before, a cause, and a different after.`,
        ],
      },
      {
        title: 'Connect the want, obstacle, and response',
        paragraphs: [
          `Think about setting out for the corner shop to buy milk. You walk down the road, reach the shop, and find the shutters down. You stand there a second, then turn and walk back the other way. Someone watching from a window across the street knows the whole story without hearing a word. They saw where you were heading, they saw the closed shutter, and they saw you turn. If you had read the sign and then walked into the shop anyway, they would be baffled. If you had turned round before reaching the shop, they would never know why.`,
          `The three parts have plain names. The want is what someone is trying to do: pack the book, buy the milk. The obstacle is what interrupts the attempt: the slip, the shutter. The change is the new action that follows: the book set aside, the walk home. In the book scene, the reminder interrupts the packing because taking the book would conflict with leaving it for Jo. The note matters because of what the hand does next, not because it got a close-up.`,
          `The two failures from the street apply exactly. If the hand reads the slip and then packs the book exactly as before, the viewer saw new information and no changed plan. If the book is set aside before the slip ever appears, the cause arrives after the effect, and the connection is lost.`,
        ],
      },
      {
        title: 'Make the consequence observable',
        paragraphs: [
          `Lay it out in time. One second: the book moves toward the bag. Two seconds: the hand discovers the slip and opens it. Two seconds: LEAVE FOR JO is held still long enough to read. Two seconds: the book is set down clearly away from the bag. Seven seconds in total. Those numbers are a first sketch. Adjust them to how long your lettering actually takes to read and how far your hand actually travels.`,
          `Two details carry the whole scene. The note must stay still and legible long enough; a flash of paper is a mystery, not information. And the book must land somewhere unambiguously not the bag, far enough away that there is no doubt about the choice. Then play the take with the sound off and describe it in one sentence: before, the book was being packed; after, it was left. If you cannot say that sentence from the pictures alone, something is missing.`,
          `Want, obstacle, and change is a beginner's planning method. It is not a definition of all cinema; observational and experimental films arrange attention in other ways. For this exercise it gives you one practical test that a handsome image cannot pass on its own: what became different because the discovery happened?`,
        ],
      },
      {
        title: 'When nothing changes',
        paragraphs: [
          `The first mistake is ending on the discovery. The slip is shown, the camera holds on the open bag, and the scene stops. The viewer knows there is a note. They do not know what it did. The second mistake is showing a reaction instead of a decision: a pause, a sigh, a face if there is one. Feelings are not consequences. Someone who finds the snack tin empty while packing shows the change by closing the tin and packing a piece of fruit instead, not by looking disappointed.`,
          `A third mistake is getting the order wrong, leaving the book before the note appears, which is turning for home before you reach the shutter. The audience sees the result and has to guess the cause.`,
          `Two habits. Before you record, write the first action and the last action as two short sentences and check that they point in different directions. And after you record, watch it without sound and say what changed; if the answer is only that someone found something, the scene has no ending yet.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'From packing to leaving',
        alt: 'A book moves toward a bag, a note is revealed and read, then the book is left aside.',
        caption: `Read the first and last steps before the middle two: the book heads toward the bag, then ends up away from it. The two middle steps are the shutter on the shop, the reason for the turn. An original seven-second sketch with adjustable durations; the spacing is not a time scale.`,
        items: [
          { label: 'Begin packing', detail: '1 second: book moves toward bag.' },
          { label: 'Discover the slip', detail: '2 seconds: open at the protruding paper.' },
          { label: 'Read the instruction', detail: '2 seconds: LEAVE FOR JO stays visible.' },
          { label: 'Change the action', detail: '2 seconds: set book away from bag.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Old phone', 'Book and bag', 'Homemade reminder', 'Clear table'],
      steps: [
        `Set the open bag and the book apart on a clear table and tuck the invented reminder into the book so a corner shows. The visible corner is what lets the discovery happen on camera rather than by luck.`,
        `Rehearse the four beats with your free hand: lift toward the bag, find the slip, read it, set the book down away from the bag. Walk to the shop, meet the shutter, turn round.`,
        `Rest your filming forearm on something solid and record one stationary take in which both the note and the final landing spot are in frame. If either leaves the picture, the story leaves with it.`,
        `Replay with the sound off and write two sentences: what the hand intended at the start, and what it chose after the discovery. If the sentences match, the scene has not ended.`,
      ],
      notice: `The final placement is evidence of a different plan, not just a pause after reading. A stranger watching your seven seconds with no sound could say what the hand meant to do and what it did instead, which is the whole job of the scene.`,
      troubleshooting: `If the decision is unclear on playback, one of two things is usually wrong: the reminder was not held still long enough to read, or the book landed too near the bag to look like a different choice. Hold the note a full second longer, and move the final landing spot clearly to the other side of the table, then record again.`,
    },
    recall: {
      prompt: 'Someone discovers an empty snack tin while packing. What next action could make a changed plan visible?',
      hint: 'Show a different choice, not only a facial expression.',
      answer: `They could close the empty tin, set it aside, and pack a piece of fruit in its place. The fruit going into the bag is the turn away from the closed shop: a new action that only makes sense because of what was discovered. A disappointed look tells us how they feel; the replacement tells us what they decided.`,
    },
    quiz: {
      question: 'Which ending most clearly shows that the reminder changed the packing decision?',
      options: ['Show the reminder, then hold on the open bag.', 'Place the book away from the bag after reading.', 'Return to packing while keeping the reminder visible.'],
      correctIndex: 1,
      explanation: `Setting the book away from the bag after reading is the turn for home: a last action that points the opposite way from the first, with the note in between as the cause. Holding on the bag ends at the shutter with no turn. Returning to packing shows the note was read and changed nothing, so the scene has information but no consequence.`,
    },
    takeaway: 'Connect a visible intention to an interruption and an observable consequence.',
    sourceNote: 'Inherited directing and shot-planning references support practical scene design. The book story is original; its structure and timings are not universal film rules.',
  },
  {
    id: 'cinema-014',
    title: 'Block movement before choosing camera moves',
    outcome: `Check the important action from the lens that will record it, and fix a hidden exchange by moving the performers or stand-ins into a visible gap before asking the camera to chase it.`,
    scene: 'Two folded paper stand-ins rehearse a note handoff across a tabletop.',
    sections: [
      {
        title: 'An exchange can disappear behind a body',
        paragraphs: [
          `Fold two scraps of paper into little standing figures and label them Giver and Receiver. Put them in a line facing the phone, Giver nearest the lens, Receiver behind. Now slide a tiny folded note from one to the other. Looking down at the table from your chair, the handoff is perfectly obvious. Then lower your eye to where the phone's lens sits and look again. The Giver's body fills the view, and the note and the Receiver have vanished behind it.`,
          `The plan contains the action. The recording does not. This is the whole problem in one sentence, and it comes from rehearsing from wherever is comfortable for you rather than from the one position that matters. The camera does not see from your chair. Whatever moment the scene depends on, you have to check it from the lens that will record it, before you press anything.`,
        ],
      },
      {
        title: 'Blocking arranges the action',
        paragraphs: [
          `Think about a photographer taking a group picture at a wedding. Someone at the back is completely hidden behind a tall uncle. The photographer does not run round the garden looking for an angle that squeezes past the uncle. They say: could you step a little to the left? The hidden guest moves one pace, a gap opens, and everyone is in the picture. Moving a person is faster, cheaper, and more reliable than moving the camera to chase them.`,
          `In filmmaking the arrangement of where people stand, move, and handle things is called blocking. Staging is the related idea of how those positions look from the camera. Neither word means anything complicated or requires a moving shot. A one-step shift by a performer can open a sightline more directly than any amount of camera choreography trying to peer around them.`,
          `So re-block the paper figures. Move Giver to the left and Receiver to the right, both facing a shared landing spot in the middle. Now the note crosses a visible gap, and the positions themselves tell the story: who gives, who receives, what changes hands. If a performer ever has to cross in front of the action, decide on purpose whether that hiding is wanted. If not, fix the arrangement before you record, not after.`,
        ],
      },
      {
        title: 'Keep movement attached to a reason',
        paragraphs: [
          `Once the positions work, ask why each figure moves at all. The Giver reaches because they want to hand the note over. The Receiver leans or steps because they need to take it. Those reasons tell you where each movement starts and where it ends, which is exactly what a camera needs to know. Movement added only to keep the frame busy has no start or end point, and it tends to drift into the way.`,
          `Make a quick top-view sketch of camera, figures, and the note's route. Then test the sketch at recording height with the paper figures. The sketch is a way to talk about the plan; it cannot promise that real hands and faces will be visible in a real room, because paper has no elbows. The test from the lens is what proves it.`,
          `When you later rehearse with actual people, agree the movement and any contact first, keep exits and walking routes clear, and change positions to suit comfortable movement. Nobody should have to squeeze past a precarious camera, and nobody should be told to hold a pose that hurts to get a shot.`,
        ],
      },
      {
        title: 'Chasing what should have been moved',
        paragraphs: [
          `The first mistake is reaching for the camera when the blocking is the problem. The note is hidden, so the plan becomes a higher resolution and a tighter crop later. More pixels of the Giver's back show more of the Giver's back; nothing can crop in on an action that was never in the picture. The second mistake is giving up on the exchange and filming only the Receiver. That shows someone taking something, but not from whom, and the scene needed the handoff itself.`,
          `A third mistake is letting your own filming hand do the hiding. If your hand covers the note as you move it, change its approach direction, or photograph the figures in a sequence of still positions rather than forcing a continuous move.`,
          `Two habits. Before recording any important action, put your eye at the lens position and look for it there, not from your chair. And when something is hidden, move a performer first, by one step if that is enough, and only then think about moving the camera.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A line that conceals the exchange',
        alt: 'Camera, giver, and receiver are aligned, with the giver blocking the receiver.',
        caption: `Follow the obstructed view arrow from the camera and notice it has to pass through the Giver to reach the Receiver; the nearer body is the tall uncle in the group photo. A top view of the rehearsal layout, schematic rather than measured.`,
        items: [
          { label: 'Camera', detail: 'Checks the actual handoff view.', x: 50, y: 85, shape: 'camera' },
          { label: 'Giver', detail: 'Nearer body hides the exchange.', x: 50, y: 52, shape: 'person' },
          { label: 'Receiver', detail: 'Waiting behind the giver.', x: 50, y: 18, shape: 'person' },
        ],
        arrows: [{ from: 0, to: 2, label: 'obstructed view' }],
      },
      {
        type: 'spatial',
        title: 'A gap for the handoff',
        alt: 'The camera stays fixed while giver and receiver separate around a visible note.',
        caption: `Compare the camera's position with the diagram above: it has not moved. Only the two figures have stepped apart, and the note now crosses open space between them where the lens can see it. One step to the left opened the picture.`,
        items: [
          { label: 'Camera', detail: 'Position unchanged.', x: 50, y: 85, shape: 'camera' },
          { label: 'Giver', detail: 'Starts at the left.', x: 22, y: 25, shape: 'person' },
          { label: 'Receiver', detail: 'Waits at the right.', x: 78, y: 25, shape: 'person' },
          { label: 'Note', detail: 'Crosses the visible shared space.', x: 50, y: 50, shape: 'paper' },
        ],
        arrows: [{ from: 1, to: 3, label: 'give' }, { from: 3, to: 2, label: 'receive' }],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Old phone', 'Paper stand-ins and note', 'Pencil', 'Clear table'],
      steps: [
        `Sketch the camera, the Giver, the Receiver, and the note's route from above, leaving out any private details of the room. The sketch is how you will talk about the plan before testing it.`,
        `Line the stand-ins up with the Giver nearest and put your eye at the intended low camera position to look for the handoff. This is the view from the lens, not from your chair, and it is the one that counts.`,
        `Keep the camera exactly where it is and spread the figures to either side of a visible gap, then rehearse the note's route across it. You are asking the hidden guest to step left, not moving the photographer.`,
        `Record or photograph both arrangements from the same camera position and mark the moment the exchange becomes readable. The comparison shows what blocking did that the camera could not.`,
      ],
      notice: `Moving the stand-ins revealed an event that no amount of resolution could have uncovered, because the camera position never changed and the action was simply hidden before. The positions now explain who gives and who receives without any extra shot.`,
      troubleshooting: `If your own moving hand hides the note as you slide it, you have become the tall uncle. Approach from a different side so your hand stays clear of the lens's line, or set the figures and note in a sequence of still positions and photograph each one instead of forcing a continuous movement.`,
    },
    recall: {
      prompt: 'Two friends study a map, but one shoulder hides the pointing finger. What should rehearsal test first?',
      hint: 'Inspect the important action from the lens position.',
      answer: `Ask one friend to shift a little, or turn the map, so the pointing finger appears through a gap when you look from the camera's position, the way the photographer asks the hidden guest to step left. Check that view from the lens before you consider any camera move to follow the finger. The shoulder is a blocking problem, and blocking fixes it in one step.`,
    },
    quiz: {
      question: 'The note itself must be seen, but the nearer stand-in hides it. Which first revision targets the cause?',
      options: ['Offset the stand-in and recheck the handoff.', 'Increase resolution and crop closer later.', 'Replace the handoff with a receiver-only view.'],
      correctIndex: 0,
      explanation: `The cause is a body in the sightline, so stepping the stand-in aside and looking again from the lens opens the view directly, like moving the guest rather than the photographer. More pixels and a later crop only enlarge the back that is doing the hiding. A receiver-only view shows someone taking something but not the exchange the scene needs.`,
    },
    takeaway: 'Arrange readable positions and motivated movement before adding camera choreography.',
    sourceNote: 'The inherited blocking reference supplies terminology. These original paper layouts do not reproduce a filmmaker\'s scene or prescribe performer movement without consent.',
  },
  {
    id: 'cinema-015',
    title: 'Map eyelines with the 180-degree convention',
    outcome: `Keep two people on consistent sides of the screen across separate shots by placing every camera position on one side of the line between them, and establish any crossing on purpose.`,
    scene: 'Two arrow-marked paper figures face each other across a table.',
    sections: [
      {
        title: 'Give the conversation a shared map',
        paragraphs: [
          `Set a paper figure A on the left side of the table and a paper figure B on the right, and draw an arrow on each to show which way it is looking: toward the other. Film them both together from your side of the table. A is on the left looking right; B is on the right looking left. Now film each one on its own from a closer position. If A still looks right in its single shot and B still looks left in theirs, a viewer will stitch the pictures together into one conversation without thinking about it.`,
          `If one of those singles has B looking right instead, the viewer's map breaks. Suddenly both figures seem to be facing the same way, as though talking to a third person off screen. The pictures are all perfectly good; they just disagree about the room. Two words help here. An eyeline is the direction a person appears to be looking. A reverse is the shot that shows the other participant from a different camera position. You need only one phone for all of this: record one position, move, record the next.`,
        ],
      },
      {
        title: 'Choose a side of the connecting line',
        paragraphs: [
          `Think of watching tennis on television. For the whole match, one player is on the left of your screen and the other on the right, even as the camera cuts between wide shots and close-ups. Imagine the director suddenly cutting to a camera on the far side of the court. The players swap sides of the screen, and for a moment you have no idea who is serving to whom. Every camera at a tennis match stays on one side of the court for exactly this reason.`,
          `Draw an imaginary line from A to B. That line is the conversation axis, the net across the court. Keep all your camera positions on one side of it and the two figures keep their screen sides in every shot. This is the 180-degree convention: it refers to staying within one half of the space around the line. It does not mean two cameras must be exactly 180 degrees apart, and it is not a rule about angles at all. It is a rule about which side of the net you stand on.`,
          `Go to the other side and the shared view flips: A is now on the right, B on the left. Cut that into the earlier singles and the figures seem to look away from each other. Floor position is not the whole story, though. The figures' actual gaze and their relative heights still matter. A camera on the correct side cannot rescue eyes that are aimed at the wrong spot.`,
        ],
      },
      {
        title: 'Make a crossing understandable',
        paragraphs: [
          `Try it. Record two views from below the line in the diagram, one aimed at A and one at B, then a third from above the line. Play them back and look at the arrow on each paper figure in each shot. Which pair keeps A looking right and B looking left? Which shot swaps them? Do this with your eyes rather than assuming a familiar room will sort itself out after a cut, because a cut, the join between two recordings, is exactly where the room stops being visible.`,
          `Crossing the line is not forbidden; it is just something to do on purpose. A camera that visibly moves across the axis during a shot carries the viewer with it. A new shared view from the other side re-establishes the geography before you return to singles. Either way the viewer gets a new map before being asked to use it.`,
          `For a first exercise, stay on one side. The effect is easiest to inspect when nothing else is changing. And paper stand-ins mean you can learn the convention without filming anyone else or asking them to hold an awkward pose while you move the phone around.`,
        ],
      },
      {
        title: 'Crossing without telling anyone',
        paragraphs: [
          `The first mistake is switching sides unseen. The camera keeps the same height and distance, so each shot looks consistent, but one was taken from across the net, and the two figures now face the same way. Matching height and size did nothing, because the problem was never size. The second mistake is matching only the faces, framing each single to look alike, and never checking the direction of gaze that actually ties them together.`,
          `A third mistake is trusting the room. You know where A and B are sitting, so you assume the viewer does. The viewer only knows what the last shot showed them.`,
          `Two habits. Before filming any two-person exchange, draw the line between them and decide which side your camera lives on. And if you need to cross, give the viewer a shared view or a visible move that shows the new geography first.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two views on the same side',
        alt: 'A and B define a horizontal axis; two camera positions sit below it and a crossing position sits above.',
        caption: `Find the conversation axis arrow between A and B first; that is the net. The two cameras below it are the broadcast cameras staying on one side of the court. The single camera above has crossed the net, and from there A and B swap sides of the screen. A top view of alternative takes.`,
        items: [
          { label: 'A', detail: 'Looks toward B.', x: 25, y: 40, shape: 'person' },
          { label: 'B', detail: 'Looks toward A.', x: 75, y: 40, shape: 'person' },
          { label: 'View of B', detail: 'Camera remains below the axis.', x: 25, y: 80, shape: 'camera' },
          { label: 'View of A', detail: 'Also below the axis.', x: 75, y: 80, shape: 'camera' },
          { label: 'Crossed view', detail: 'Opposite side changes screen geography.', x: 50, y: 12, shape: 'camera' },
        ],
        arrows: [{ from: 0, to: 1, label: 'conversation axis' }, { from: 2, to: 1, label: 'aim' }, { from: 3, to: 0, label: 'aim' }],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Old phone', 'Two paper figures', 'Pencil and paper', 'Stable table'],
      steps: [
        `Label the figures A and B, draw an arrow on each showing its gaze toward the other, and sketch the line that connects them. That line is the net, and every decision that follows is about which side of it you stand on.`,
        `Record two views from two different positions on the same side of the line, without rotating the figures. These are the broadcast cameras, and they should agree about who is on the left.`,
        `Move to a safe position on the other side of the line and record a third view with the phone upright. This is the camera across the court, recorded on purpose so you can see what it does.`,
        `Compare the screen position and gaze direction of each figure in all three shots, and sketch which pair preserves the original left-right relationship. The arrows on the paper make the answer checkable.`,
      ],
      notice: `The two same-side views support one map of the conversation, and the crossed view redraws it, swapping A and B on the screen. You have seen the tennis director's problem on a tabletop, and you know which side of the net your camera needs to stay on.`,
      troubleshooting: `If you cannot judge direction in the single shots, keep both labeled figures in every test frame for now, so the axis is visible in the picture itself. Once you can read the gaze arrows reliably in shared views, tighten to singles; a single shot that leaves out the partner is where the convention earns its keep and where it is hardest to check.`,
    },
    recall: {
      prompt: 'Two toy animals trade a greeting across a path. How would you plan matching separate views?',
      hint: 'Draw the line between the participants first.',
      answer: `Draw the line between the two animals, which is the net, and put both camera positions on the same side of it so each animal keeps its side of the screen in its own shot. Then check that their apparent gazes meet, looking toward each other at compatible heights, because a correct floor position cannot fix eyes that are aimed past the partner.`,
    },
    quiz: {
      question: 'You need to cross the established axis without confusing the location. Which plan best explains the new geography?',
      options: ['Match only the size of each separate face.', 'Keep the same height but switch sides unseen.', 'Introduce a shared view establishing the new relationship.'],
      correctIndex: 2,
      explanation: `A shared view from the new side hands the viewer a fresh map before you ask them to use it, like a wide shot that shows the players have changed ends. Matching face size does nothing about which way anyone looks. Switching sides unseen at the same height is the sudden cut to the far camera, and the players swap sides with no explanation.`,
    },
    takeaway: 'Use the axis convention to preserve readable geography, then establish any deliberate change.',
    sourceNote: 'Inherited editing and blocking references support continuity conventions. This original diagram teaches a useful convention, not an unbreakable artistic law.',
  },
  {
    id: 'cinema-016',
    title: 'Write the information job beside each shot',
    outcome: `Build a short shot list in which every entry names the fact it delivers to the viewer, with enough detail to set it up again, and treat two shots that deliver the same fact as alternatives.`,
    scene: 'A loose FOR JO label is returned beside a small gift plant.',
    sections: [
      {
        title: 'List what the viewer needs to learn',
        paragraphs: [
          `A small plant sits on the table. A little paper label lies a short distance from it, face up, reading FOR JO. Your hand picks the label up and sets it back beside the plant. That is the whole scene. You sit down to plan the shots and write: wide, close, medium. Three lines, three camera sizes, and absolutely no indication of why any of them exists or what each is supposed to show.`,
          `Start from the viewer instead of the camera. What does someone watching need to learn? Three things, as it happens. Where the objects are and that they are apart. What the label says. What the person does with it. Those three questions suggest three views, and now each view has a reason. A shot list is a plan for the views you intend to record. Its job is to make the scene understandable, not to demonstrate every camera size you know.`,
        ],
      },
      {
        title: 'Describe enough to repeat the setup',
        paragraphs: [
          `Think about a packing list for a weekend away. A good one does not say clothes, more clothes, other things. It says raincoat, because the forecast is wet; walking boots, for Saturday's hill; one torch, for the unlit path to the cottage. Every item has a job written beside it, and because of that you can see at a glance that two torches is one too many and that nothing on the list covers Sunday's swim. The jobs are what make the list checkable.`,
          `Write each shot the same way, with five parts: subject, shot size, camera position, action, and information job. For example: plant and label; wide; from the table end; both still; establish that they are apart. Then: label; close; nearer, same side; hold still; reveal who it is for. Then: hand and plant; medium; table end; return the label; show the connection being restored.`,
          `Two of those parts are easy to skip and expensive to skip. The camera position matters because a different angle can put a hand or the pot in front of the label. The action matters because a photograph of the framing proves nothing about whether the whole movement fits inside it. Rehearse the return before you call the list finished.`,
        ],
      },
      {
        title: 'Remove duplication without losing context',
        paragraphs: [
          `Now check the list for two torches. Suppose you planned two close angles on the label, and both show FOR JO equally clearly, and neither adds a new action or a reaction. In a short scene built to inform, those two shots are alternatives, not a pair. Keep the clearer one and spend the setup you saved on the return, which neither close view covers.`,
          `Give the three jobs rough durations: two seconds of context, three seconds to read the label, three seconds to return it. Eight seconds. Then adjust to what is actually readable; a label in small handwriting needs longer than one in bold capitals.`,
          `None of this forbids repetition. A film can show the same image twice for rhythm, or to let a moment land, or for some other deliberate reason. The point is to name the reason, the way the packing list names the job. Extra footage does not improve a scene by existing. A useful list protects the context the viewer needs and cuts the setups that only repeat it.`,
        ],
      },
      {
        title: 'Lists that name sizes instead of reasons',
        paragraphs: [
          `The first mistake is the one from the opening: a list of camera sizes with no jobs, so nobody can tell whether anything is missing or doubled. The second is fixing duplication by cutting the wrong thing. Two matching close shots are kept and the return, the only shot that shows the decision, is shortened to make room. That is packing two torches and leaving the raincoat.`,
          `A third mistake is swapping a duplicate for something unrelated, a close-up of a leaf, say, because it looks nice. It fills the gap in the list without filling a gap in the viewer's understanding. And if a close view strips away all context, keep a shared view that shows the objects together rather than adding more angles.`,
          `Two habits. Beside every planned shot, write the one fact it gives the viewer, in words that mention no camera technique. And when two shots deliver the same fact, name a purpose for keeping both or treat them as alternatives.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Objects and destination',
        alt: 'A loose label sits left of a plant; a landing point lies beside the plant with the camera below.',
        caption: `Follow the return label arrow from the loose label to its landing spot beside the plant, then check that the whole route is visible from the phone at the table end. The position is on the list for exactly this reason. A schematic table plan.`,
        items: [
          { label: 'Phone', detail: 'Table-end starting position.', x: 50, y: 85, shape: 'camera' },
          { label: 'Loose label', detail: 'FOR JO begins apart from plant.', x: 22, y: 25, shape: 'paper' },
          { label: 'Plant', detail: 'Gift subject or paper stand-in.', x: 78, y: 25, shape: 'object' },
          { label: 'Label landing', detail: 'Beside the plant, still visible.', x: 78, y: 58, shape: 'box' },
        ],
        arrows: [{ from: 1, to: 3, label: 'return label' }],
      },
      {
        type: 'timeline',
        title: 'Jobs in viewing order',
        alt: 'Wide context, close recipient label, then medium view of the return.',
        caption: `Read the job named in each step before the shot size: establish, identify, restore. Those are the items on the packing list; wide, close, and medium are just how each gets packed. Proposed durations total eight seconds, and the equal spacing does not mean equal time.`,
        items: [
          { label: 'Establish separation', detail: '2 seconds, wide: plant and loose label.' },
          { label: 'Identify recipient', detail: '3 seconds, close: read FOR JO.' },
          { label: 'Restore connection', detail: '3 seconds, medium: return label beside plant.' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Old phone or paper notes', 'Small or paper plant', 'Homemade label', 'Clear table'],
      steps: [
        `Set the plant and the invented FOR JO label apart on a clear table, with no private papers or wobbly containers nearby. The label is handmade so the clips can be kept and shared.`,
        `Write three list entries, each with subject, size, camera position, action, and a different information job in plain words. The job column is what will let you spot a duplicate.`,
        `Make a framing photo or a quick drawing for each entry, then rehearse the complete return in the medium view. A still frame cannot show whether the hand's whole route fits, so the movement has to be tried.`,
        `Find and remove or revise one duplicate job, then check that the location, the lettering, and the final placement are all still understandable from what remains.`,
      ],
      notice: `Every view you kept has a reason you can state without naming a camera technique, and the list has no two torches in it. If someone asked why the close shot exists, the answer is on the page beside it.`,
      troubleshooting: `If the close view of the label leaves the viewer with no idea where the plant is, do not add more angles; keep a shared view that holds both objects in one frame so the context survives. Context is the raincoat on the list, and it is the first thing a tidy-looking plan tends to leave behind.`,
    },
    recall: {
      prompt: 'A button falls off a coat. What three information jobs could organize a short repair decision?',
      hint: 'Separate context, relevant detail, and response.',
      answer: `Show the coat so the viewer knows where they are; make the missing button readable so they know what the problem is; then show the coat being set aside for repair so they know what was decided. Three items, three jobs, like raincoat, boots, and torch. Each shot answers a question the previous one could not, and a second shot of the same gap would be the second torch.`,
    },
    quiz: {
      question: 'Two close angles repeat the same readable label in a deliberately concise scene. What should the list do?',
      options: ['Keep both and shorten the essential return.', 'Treat them as alternatives unless another purpose is named.', 'Replace both with an equally close plant detail.'],
      correctIndex: 1,
      explanation: `Two shots delivering the same fact are two torches: keep one unless you can write a purpose for the second, such as rhythm or a reaction. Shortening the return to fit both cuts the only shot that shows the decision. Swapping both for a plant detail fills the list with a shot that answers no question the viewer has.`,
    },
    takeaway: 'Write the information job beside the framing, and justify repeated information deliberately.',
    sourceNote: 'The inherited shot-list reference supports planning fields. This original plant example and its suggested timing are not a universal editing template.',
  },
  {
    id: 'cinema-017',
    title: 'Record coverage with overlapping action',
    outcome: `Record the complete movement, with a moment of stillness before and after, in every view, so that two takes share the same phase of action and a later cut has somewhere to land.`,
    scene: 'A right hand lifts an empty plastic drinking cup between two paper marks.',
    sections: [
      {
        title: 'Two views do not guarantee a join',
        paragraphs: [
          `You are filming a tiny action: your right hand lifts an empty plastic cup from one paper mark and sets it down on another. You record it once from a wider position, showing the reach and the lift. Then you move closer for a second take. But you only press record once the cup is already sitting on its destination. Two views, two sizes, and you feel well covered. Later you try to join them while the cup is in the air. There is nowhere to do it. The close take has no lift in it.`,
          `Having two takes is not the same as having a join. The word for recordings that give you choices when you assemble a scene is coverage. Coverage only works when the views share something. With one phone, the action has to be repeated for each view. So the recordings are separate performances of the same intended event, not two cameras watching one instant. That makes the overlap your responsibility. Nobody else is recording the lift for you.`,
        ],
      },
      {
        title: 'Repeat the relevant movement in full',
        paragraphs: [
          `Think of a relay race. The baton changes hands inside a marked zone. For that to work, both runners have to be running the same stretch of track at the same time. The outgoing runner starts moving before the baton arrives. The incoming runner keeps running after letting go. If the second runner stood still until the first one stopped, there would be no handover. Just a dropped baton and two people standing in a box. The overlap is the exchange.`,
          `Your two takes are the two runners. Each one has to run the whole stretch: stillness, reach and contact, lift, placement, stillness again. Then the lift exists in both recordings. You can leave the wide view while the cup is rising and enter the close view at a matching point in the same rise. A cut, the join between two recordings, can only choose from what was recorded. It cannot invent a phase that no take contains.`,
          `The still moments at either end have a name too. They are called handles. They are the runners starting early and carrying on past the line. A second of stillness before the reach lets you delay the start. A second after the placement lets the result settle. They are not waste because the finished scene may use only a fraction of them. They are the room that makes a clean exchange possible.`,
        ],
      },
      {
        title: 'Match the event, not just the object',
        paragraphs: [
          `For the two performances to pass as one event, the details that the eye tracks need to agree. Use the same hand, the same starting mark, the same destination, and the same cup orientation in both takes. A small dot drawn on a removable paper sleeve around the cup lets you check which way it is facing. The cup itself stays unmarked.`,
          `When you compare the takes, do not line up their first frames; they probably began at different moments. Instead find the same halfway point in the lift in each file. Pause there and compare the cup's height and the hand's position. That shared moment is where the baton changes hands.`,
          `The diagram proposes one second still, two seconds reaching, two lifting, two placing, one still: eight seconds a take. It is a rehearsal plan, not a required duration. If counting makes your hand stiff and mechanical, stop counting. Move naturally and simply leave generous room before and after. Two complete, purposeful views are worth far more than a dozen fragments that all leave out the same middle.`,
        ],
      },
      {
        title: 'Fragments that never overlap',
        paragraphs: [
          `The first mistake is the one from the opening: a close take that starts after the action it was meant to cover. A close-up of a letter that begins after the letter has vanished into the envelope has recorded the result and skipped the event. No join to the wide view is possible during the insertion. The second mistake is trying to fix a missing overlap in the edit. Trimming the wide take to end before contact does not create a lift in the close take. It only shortens what you have.`,
          `A third is dodging the problem with a cutaway, a shot of the empty starting mark, say. That can hide the gap, but if the scene needed an uninterrupted lift, hiding is not showing.`,
          `Two habits. For every view of an action, record the whole action plus a second of stillness at each end, however much of it you expect to use. And when checking two takes, pause both at the same phase of the movement rather than at their first frames, and look for the handover point.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Record this whole sequence in both views',
        alt: 'Stillness, reach, lift, placement, and final stillness form the repeated cup action.',
        caption: `Find the Lift step in the middle first: that is the exchange zone where both takes must overlap. The still second at each end is the runner starting early and finishing late. Suggested 1 + 2 + 2 + 2 + 1 seconds makes eight per take; the spacing is not proportional.`,
        items: [
          { label: 'Before action', detail: '1 second: cup on the starting mark.' },
          { label: 'Reach and contact', detail: '2 seconds: right hand takes the cup.' },
          { label: 'Lift', detail: '2 seconds: a shared possible cut region.' },
          { label: 'Place', detail: '2 seconds: cup reaches the destination.' },
          { label: 'After action', detail: '1 second: let the result settle.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Old phone', 'Empty plastic cup', 'Two paper marks', 'Stable table'],
      steps: [
        `Put the two paper marks within easy reach on a stable table and use an empty plastic cup, keeping liquids and glass out of it. The action will be repeated several times, so it has to be safe to repeat.`,
        `Rest your filming arm on something solid and record a wider view of the complete right-handed action, with a second of stillness before the reach and after the placement. This runner runs the whole stretch.`,
        `Reset the cup to the starting mark with the same orientation and record the complete action again from a closer view that you know stays in focus. Same hand, same marks, same whole movement.`,
        `Replay both files and pause each at the same mid-lift position, then note where a join could happen. No editing app is needed to see the handover point; a paused frame in each is enough.`,
      ],
      notice: `Both views now contain every phase of the action, so there is more than one moment at which they could be joined. The baton can change hands anywhere in the lift, which is what coverage was supposed to give you.`,
      troubleshooting: `If the close frame loses the hand's contact or the cup's landing because the view is too tight, do not collect another fragment to patch it. Widen the close view a little and repeat the entire movement with its handles. A fragment that omits the same phase as the last one adds nothing to the overlap.`,
    },
    recall: {
      prompt: 'A letter-insertion close-up begins after the letter disappears into an envelope. What coverage is missing?',
      hint: 'Look for a shared action phase.',
      answer: `The close view is missing the approach and the insertion itself; it only recorded the result. That is the second runner standing still until the baton has already been dropped. Repeat the close take so it includes the letter arriving and sliding in, with a second of stillness before and after, and then it shares a phase with the wider view and can join it mid-action.`,
    },
    quiz: {
      question: 'You must show an uninterrupted lift, but the close take contains only the landing. Which fix creates the needed option?',
      options: ['Trim the wider take to finish before contact.', 'Add a view of the empty starting mark.', 'Repeat the close take with the complete lift.'],
      correctIndex: 2,
      explanation: `Only recording the lift in the close view puts both runners on the same stretch of track, so a join during the lift becomes possible. Trimming the wide take removes footage and manufactures nothing. A shot of the empty mark is a cutaway that hides the gap, and a scene that needs an uninterrupted lift cannot be served by hiding it.`,
    },
    takeaway: 'Record overlapping phases of the same action, plus room before and after.',
    sourceNote: 'Inherited shot and planning references support coverage concepts. The cup action and timing are original examples, not mandatory handle lengths or editing rules.',
  },
  {
    id: 'cinema-018',
    title: 'Track the few continuity details that matter',
    outcome: `Keep a short reset record of the prop details the viewer actually follows, compare takes at the same stage of the action, and tell an unnoticed reset error from a deliberate story change.`,
    scene: 'A homemade envelope opens to reveal a HELLO card, with an arrow marking its orientation.',
    sections: [
      {
        title: 'The envelope should not change by accident',
        paragraphs: [
          `Fold a paper envelope, slip a card reading HELLO inside, and draw an arrow on the envelope pointing to the right of your table. Record your right hand lifting the flap and revealing the card. Then move the phone to a second position and do it again. Between the two takes you reset the envelope. Without noticing, you lay it down with the arrow pointing left and open it with your left hand. Each take looks perfectly reasonable on its own.`,
          `Join them during the opening and the flap seems to jump, the hand swaps, and the arrow flips. The viewer was following one envelope being opened once. You were running two recording sessions. They cannot see your sessions. They see an event that stuttered. Nothing about the camera caused this. It was the reset.`,
        ],
      },
      {
        title: 'Record state at a story moment',
        paragraphs: [
          `Think about a board game paused overnight. If anyone might knock the board, you take a photograph before you leave. Tomorrow every piece can go back exactly where it was. You do not photograph the whole room or the cat on the chair. You photograph the board, because the board is what the game depends on. And tomorrow you reset to the position at the end of play, not to the start of the game. The position has to match the moment you stopped.`,
          `Continuity is that photograph for a scene: keeping the relationships consistent enough that separate takes read as one event. A state is how things are arranged at one point in the action: envelope closed, flap raised, card half visible. States are supposed to change as the action advances. Matching continuity never means keeping the envelope shut in every shot. It means the envelope is at the same stage whenever two takes meet.`,
          `So write a short reset note before you move the camera: right hand opens; arrow points to the right of the table; card starts hidden. Take a reference photo of your own props in that starting arrangement. Keep private papers, screens, reflections, and anything identifying out of it. Three lines and one picture are the board photographed before you leave the room.`,
        ],
      },
      {
        title: 'Compare the shared moment',
        paragraphs: [
          `When you check two takes against each other, go to the same stage of the action in both. If the wide take begins with the envelope closed and the close take begins with the flap already up, their first frames should not match. It would be a mistake to make them. Find the moment where a join might happen, the flap half raised say, and compare there: which hand, which way the arrow points, how much card is showing.`,
          `The timeline suggests one second closed, two seconds opening, two seconds of reveal, five seconds in all. It is a rehearsal sketch, not a rule. What matters is which details you spend attention on. The viewer follows the hand, the flap, and the card. A background scrap of paper that shifted between takes probably matters far less than the card becoming visible before the flap has lifted. That is impossible, and it will be noticed.`,
          `Occasionally a better performance in one take is worth a small mismatch. That is a fair trade, as long as you find the mismatch and choose it. The failure is not the mismatch itself. It is the mismatch you never saw because you never checked the board.`,
        ],
      },
      {
        title: 'Matching the wrong things',
        paragraphs: [
          `The first mistake is matching first frames. Two takes that start at different stages are forced to look alike at the start, and the join in the middle is wrong anyway. The second is matching surfaces instead of states. Brightness, shot size, and framing all agree, while the flap is up in one take and down in the other. A pretty match of the wrong moment is still the wrong moment.`,
          `A third mistake runs the other way: treating every difference as an error. A biscuit that is on the plate in one shot and gone in the next is a mistake only if both shots represent the same point in time. If someone was meant to take it between those moments, the empty plate is the story working.`,
          `Two habits. Before moving the camera, write three lines and take one photo of the props at their starting state, the way you photograph a paused board. And when comparing takes, pause both at the same stage of the action and check the hand, the orientation, and the card before you look at anything else.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Three different states of one event',
        alt: 'Closed envelope, raised flap, then partly visible HELLO card, always opened by the right hand.',
        caption: `Read the three states as three positions of a board game in progress, and notice the right hand appears in every one; that is the detail that must not change between takes. Match the corresponding state across views, not every take's first frame. An original five-second sketch.`,
        items: [
          { label: 'Before opening', detail: '1 second: closed, arrow right, card hidden.' },
          { label: 'Opening', detail: '2 seconds: right hand raises the flap.' },
          { label: 'Reveal', detail: '2 seconds: HELLO card becomes partly visible.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Old phone', 'Homemade envelope and card', 'Pencil', 'Stable table'],
      steps: [
        `Make the invented HELLO card and the arrow-marked envelope, set them in the starting arrangement, and photograph only that harmless setup. This is the board photographed before anyone leaves the room.`,
        `Write beside the photo which hand opens the flap, which way the arrow points, and whether the card starts hidden. Three lines cover the details a viewer will actually follow.`,
        `Record one opening, then reset the props from the photo and the note before recording the same action from a second safe position. Resetting from the record rather than from memory is the whole point.`,
        `Pause both takes at the flap-raised stage and compare the hand, the arrow, and the visible card before you look at the background. Those three are what will jump at a join; the background rarely does.`,
      ],
      notice: `Your reset record preserved exactly the details needed for the two takes to meet at a shared story moment, and the flap, hand, and arrow agree there. The board went back to the position it was paused in, not to the start of the game.`,
      troubleshooting: `If the card is more visible in one take than the other at what should be the same stage, you have paused at different moments or reset to the wrong state. Return the props to the correct phase and repeat that take. Do not try to force two different moments of the action to look alike; find the moment that is actually shared.`,
    },
    recall: {
      prompt: 'A biscuit vanishes between two plate shots. How can you tell a continuity error from a story change?',
      hint: 'Locate each shot before or after the action.',
      answer: `Ask whether the moment of taking the biscuit belongs between those two shots. If someone was meant to eat it in between, the empty plate is the right state for the later moment, like a board whose pieces have moved because the game advanced. If both shots are supposed to show the same earlier moment, the missing biscuit is a reset error that the viewer will feel as a jump.`,
    },
    quiz: {
      question: 'Which reference best helps join two envelope-opening views at the raised-flap moment?',
      options: ['Opening hand, envelope orientation, and current card visibility.', 'Identical first frames even if the takes begin at different stages.', 'Matching brightness and shot size without checking the prop state.'],
      correctIndex: 0,
      explanation: `The hand, the orientation, and how much card is showing are the pieces on the board at the moment of the join, and those are what the viewer tracks across the cut. Identical first frames match the wrong moment if the takes started at different stages. Brightness and shot size are the lighting in the room, not the position of the pieces.`,
    },
    takeaway: 'Track the state the story needs at the cut, not every background detail.',
    sourceNote: 'Inherited editing and shot-planning references support continuity practice. This original envelope sequence illustrates prioritization, not a demand for pixel-identical takes.',
  },
  {
    id: 'cinema-019',
    title: 'Give a performer something playable to do',
    outcome: `Replace a demand for a feeling with a concrete thing to try on an imagined other person, so the performer has a task to attempt and you have observable behavior to compare, inside agreed boundaries.`,
    scene: 'An original drawing is offered to an imagined visitor with two different intentions.',
    sections: [
      {
        title: 'Give the words a task',
        paragraphs: [
          `Put a sketch of your own on the table, and imagine a visitor standing on the other side of it. Say to them: Have a look at this. Now say it again with a different purpose. The first time, you want to welcome them into the drawing, to share it. The second time, you want them to hang on a minute while you finish a corner. Same five words. If a stranger watched both takes with the sound off, they could probably tell which was which.`,
          `What changed was not the line and not a feeling you summoned. It was what you were trying to get the visitor to do. That is the whole idea of a playable direction: give the performer something to attempt, such as invite, reassure, delay, or persuade, within an agreed fictional situation. It does not ask anyone to manufacture an emotion on command. A task you can try is the opposite of a mood you are supposed to have.`,
        ],
      },
      {
        title: 'Let intention affect observable behavior',
        paragraphs: [
          `Think about a shy child meeting a neighbor. Telling them to be confident achieves nothing; they do not know how to be confident, and now they also know they are failing at it. Telling them to ask the neighbor what her dog is called gives them a job. They have to look up, speak clearly enough to be heard, and wait for an answer. The confidence, or something that looks like it, arrives as a by-product of a task they can actually do.`,
          `The drawing works the same way. When you are welcoming, you might turn the whole page toward the visitor and go quiet, leaving space for them to react. When you are delaying, you might keep your hand on the unfinished corner and keep talking about it. These are possibilities, not instructions. Another performer might find a completely different way to welcome or to delay, and if it serves the objective, it is right.`,
          `This also changes what you look at afterwards. Do not score how emotional a face looks. Compare the pauses, where the attention went, how the drawing was offered. An instruction such as be more interesting names no event anyone can try. A specific task gives both of you something concrete to discuss: did the fictional exchange become readable, and where?`,
        ],
      },
      {
        title: 'Keep the method collaborative',
        paragraphs: [
          `Action-based direction is one way of working, and a useful one for beginners, but it is not the only legitimate approach to acting, and it should not be imposed. If you are working with another person, explain the fictional circumstances first, agree on any physical contact and on what will be recorded, and take an alternative seriously when it is offered. The invented exchange in the diagram shows a performer asking to place the drawing on the table rather than hand it over, and the director accepting without losing the invitation.`,
          `For solo practice you need none of that negotiation. Frame only your hands and the drawing, or record two audio takes in a private room. No front camera, no second performer, no public upload. The exercise is about intention changing behavior, and your hands are enough to show it.`,
          `Some things are off the table whoever you work with. No surprise touching, no reaching into someone's personal trauma, no using real distress to get a reaction. The rehearsal tests a fictional action. It is not a test of a person's worth or a key to their private history.`,
        ],
      },
      {
        title: 'Notes that describe the result instead of the job',
        paragraphs: [
          `The first mistake is directing the outcome: smile more warmly, be cheerful, look sad. Those tell a performer what the finished picture should look like and nothing about how to get there, like telling the child to be confident. The second is directing only delivery, shorter and quieter, say. Delivery notes can help, but on their own they do not explain what the character is trying to do, so the performer is adjusting volume with no reason behind it.`,
          `A third mistake is thinking two versions that feel identical mean the method failed. Usually the objective was too vague. Invite them is loose; invite them to inspect this one corner gives the hand and the eyes a specific job.`,
          `Two habits. When a moment is not working, ask what the character is trying to make the other person do, and give that as the note. And judge the take by what the hands and the timing did, not by whether a feeling appeared on cue.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A direction that permits an alternative',
        alt: 'An invented director-performer exchange sets an invitation objective and agrees on no contact.',
        caption: `Read the director's first line and notice it names a task, invite, not a feeling. Then watch the performer propose a different way to do it and the director keep the objective while dropping the contact. Original rehearsal dialogue, not a quotation from any actor or filmmaker.`,
        items: [
          { label: 'Director', detail: 'Invite the visitor to look at your drawing.' },
          { label: 'Performer', detail: 'May I place it on the table instead of handing it over?' },
          { label: 'Director', detail: 'Yes. No contact is needed; keep the invitation clear.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Old phone', 'Your own sketch', 'Stable table', 'Private quiet space'],
      steps: [
        `Choose the line Have a look at this and frame only your hands and your invented drawing, so nothing about your face or anyone else is in the test. The behavior you are watching lives in the hands and the timing.`,
        `Record one version where your job is to welcome an imagined visitor into the drawing, with other people and voices kept out of the room. Give yourself the task, not the mood.`,
        `Record the same five words again, this time trying to keep the imagined visitor waiting while you attend to an unfinished corner. Only the objective changes.`,
        `Replay both and compare the pauses and where your attention went. Write one observable difference, without judging your appearance and without claiming you felt anything in particular.`,
      ],
      notice: `The same words served two different fictional actions, and the difference showed up in timing and attention that a stranger could see with the sound off. You did not act an emotion; you tried to get someone to do something, and the behavior followed.`,
      troubleshooting: `If the two versions come out identical, the objective was probably too vague to change anything, like telling the child to be confident. Make it smaller and more specific, such as invite them to inspect this one corner, or keep them from touching the page until the ink is dry, and record again.`,
    },
    recall: {
      prompt: 'A fictional picnic host receives the note be cheerful. What playable alternative could help?',
      hint: 'Give the host something to achieve with the guest.',
      answer: `Give the host a task aimed at the guest, such as help the guest choose the most comfortable spot to sit, or get them to try the first strawberry. That is asking the child about the dog's name instead of demanding confidence. The host now has something to attempt, and whatever cheerfulness appears comes from doing it rather than from being told to look a certain way.`,
    },
    quiz: {
      question: 'Which note supplies an objective rather than prescribing the appearance of a result?',
      options: ['Smile more warmly through the whole line.', 'Make the sentence shorter and quieter.', 'Help the visitor decide to stay and inspect the drawing.'],
      correctIndex: 2,
      explanation: `Helping the visitor decide to stay names something the character is trying to make another person do, which is a task that can be attempted in many ways. Smile more warmly describes the finished picture, like telling the child to be confident. Shorter and quieter adjusts delivery without saying what the delivery is for.`,
    },
    takeaway: 'Offer a concrete fictional objective, then allow safe choices about how to attempt it.',
    sourceNote: 'Inherited acting and consent references support collaborative practice. The dialogue and exercise are original; no emotional result or universally superior acting method is claimed.',
  },
  {
    id: 'cinema-020',
    title: 'Change one direction between rehearsal takes',
    outcome: `Turn a playback observation into one specific, workable note, change only that between takes, and judge the next take by whether the observed problem moved, not by the performer.`,
    scene: 'Hands unfold a homemade MEET AT SIX card, hold it, and fold it again.',
    sections: [
      {
        title: 'Name the problem visible in playback',
        paragraphs: [
          `Write MEET AT SIX on a card and fold it. Record your hands unfolding it, holding it up for a moment, and folding it closed again. Watch the take back. The words were there, and then they were gone, and you are fairly sure you did not finish reading them. Your first instinct is a note like make the reveal more dramatic. Try to act on that note yourself and you will see the problem: which part of the action is supposed to change, and in what way?`,
          `Go back to the file and pause it on the open card. If the letters are perfectly clear when frozen, you have learned something precise. The lettering is big enough and the focus is fine. What was too short was the time the card stayed open. That observation supports a specific note: keep the card open longer before you fold it. A performer can do that. Nobody can do more dramatic.`,
        ],
      },
      {
        title: 'Keep the comparison interpretable',
        paragraphs: [
          `Think about adjusting a bicycle that does not feel right. If you raise the saddle, tilt the handlebars, and pump up the tires all at once and then ride round the block, it may feel better, but you have no idea which change did it, and the next bike will take just as long. Raise the saddle one notch, ride, and decide. Then the handlebars. One change, one ride, one answer. It is slower per adjustment and faster overall, because nothing has to be undone.`,
          `Treat the card the same way. Say the first take ran one second to open, one second to hold, one second to close: three seconds. For the second take, change only the hold, from one second to three, making a five-second version. Keep the camera where it was, the lettering the same, the opening and closing at the same speed. Now when you compare the two, anything that is different about readability can be credited to the longer hold, because nothing else moved.`,
          `Be honest about what this is. It is a rehearsal heuristic, a way to learn what one change does. It is not an experiment that establishes what every viewer needs. You wrote the words, so you read them faster than a stranger would. A three-second hold that works for you is a useful finding about this card, not a universal reading time.`,
        ],
      },
      {
        title: 'Give feedback about the scene, not the person',
        paragraphs: [
          `Phrase the note in three parts. The observation: the card closes before the message can be read. The adjustment: keep it open through a longer pause. The job: so the information can land. That shape tells a performer what you saw, what to try, and why, and it says nothing about their talent. They may suggest a different comfortable way to achieve the same job, and that is fine. The next take tests the note, not their cooperation.`,
          `The order matters. If the paused letters are blurry rather than brief, a longer hold will only give you a longer blur. Fix the focus or the framing first, confirm that the frozen frame is crisp, and only then run the timing comparison. The saddle is no use if the chain is off.`,
          `Real productions sometimes coordinate several changes between takes, with enough people to track them. This beginner exercise stops after one useful comparison. Its purpose is not to prove the second take is better or to run takes until exhaustion. It is to connect one change to one visible result.`,
        ],
      },
      {
        title: 'Notes that change everything at once',
        paragraphs: [
          `The first mistake is the bundled fix: larger letters, closer camera, lower background contrast, and a slower opening, all for a card that was crisp when paused. Most of those changes answer a problem the frozen frame ruled out, and together they make the comparison unreadable. The second is the vague note that cannot be acted on, make it land, give it weight, which sends the performer guessing and makes the next take a lottery.`,
          `A third mistake is aiming the note at the person: you rushed it. Even if true, it names no action to change. The card closed early; the card can stay open longer.`,
          `Two habits. Before giving any note, pause the playback on the moment that bothered you and name exactly what the frozen frame shows, crisp or blurred, in or out of frame. And change one thing between takes, then watch for that one thing, the way you raise the saddle one notch and ride.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Only the middle hold changes',
        alt: 'Opening and closing each last one second; the open-card hold changes from one to three seconds.',
        caption: `Read the middle step first and notice it is the only one with two different numbers; the unfold and refold are identical in both takes. That is the saddle raised one notch with everything else left alone. Illustrative takes total three and five seconds, and the spacing shows order rather than duration.`,
        items: [
          { label: 'Unfold', detail: 'Both takes: about 1 second.' },
          { label: 'Show MEET AT SIX', detail: 'Take A: 1 second. Take B: 3 seconds.' },
          { label: 'Refold', detail: 'Both takes: about 1 second.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Old phone', 'Paper and bold pen', 'Stable table'],
      steps: [
        `Write the invented message in bold and find a supported camera position where the open card is clearly readable in the preview. A readable baseline means any later problem is about time, not size.`,
        `Record one take: unfold, a short hold, refold. Replay it and pause on the open card to check whether the frozen letters are crisp. This pause is what turns a vague feeling into a specific observation.`,
        `If the paused lettering is clear, record again changing only the length of the hold, leaving camera, lettering, and the opening and closing speeds alone. One notch on the saddle.`,
        `Compare the two at normal playback speed, write one sentence saying whether readability improved, and stop there. One comparison is the exercise; a tenth take proves nothing new.`,
      ],
      notice: `You can connect one specific timing change to a visible difference in whether the message could be read. The note you gave was something a hand could do, and the next take answered it, which is the whole loop in miniature.`,
      troubleshooting: `If the paused card is blurry or partly out of frame, do not ask for a longer hold; a longer blur is still a blur. Fix the distance, the focus, or the lettering size first, confirm a crisp frozen frame, and then run the timing comparison. The chain has to be on before the saddle height means anything.`,
    },
    recall: {
      prompt: 'A hand covers a toy\'s destination during a rehearsal. What single direction would test that problem?',
      hint: 'Change the action causing the obstruction.',
      answer: `Ask the hand to approach from the side instead of from the front, and change nothing else: same camera, same props, same timing. Then check whether the destination is visible in the new take. That is one notch on the saddle. If you also moved the camera and brightened the light, you would not know which change uncovered the toy.`,
    },
    quiz: {
      question: 'The message is crisp when paused but too brief during playback. Which note isolates the likely issue?',
      options: ['Rewrite the letters larger and use a closer camera.', 'Hold the open card longer without changing its placement.', 'Reduce background contrast and change the opening speed.'],
      correctIndex: 1,
      explanation: `A crisp frozen frame rules out size and focus, so the problem is time, and holding the card open longer with everything else fixed tests exactly that. Larger letters and a closer camera answer a problem the pause already dismissed and change two things at once. Lower contrast plus a different opening speed is the whole bike adjusted in one go.`,
    },
    takeaway: 'Make one observable adjustment and judge what it changes, not who performed it.',
    sourceNote: 'The inherited acting reference supports practical direction. This original timing comparison is a rehearsal method, not an experimentally validated reading threshold.',
  },
  {
    id: 'cinema-021',
    title: 'Design a look, an object, and a response',
    outcome: `Build a look, an object view, and a return so the object plausibly answers the look in height and direction, while labeling the result as staged fiction rather than proof of what anyone felt.`,
    scene: 'A downward look is paired with either a THANK YOU card or a blank envelope on a low table.',
    sections: [
      {
        title: 'A look raises a question',
        paragraphs: [
          `In a staged scene, someone glances down toward a low table. Cut to a homemade card lying there that reads THANK YOU. Cut back to the same person, holding a quiet pause. Watch it and the pause seems warm; they are touched by the card. Now swap one piece. Same glance, same pause, but the object between them is a blank envelope. The pause reads completely differently: uncertain, maybe wary. The face did not change. Not one frame of it.`,
          `What changed was the information sitting next to the face. The object supplied a possible answer to what the look was about, and the viewer did the rest. This is useful to know, and it is also a reason for care. Use yourself or drawn paper faces, never an unsuspecting person's real reaction. These are fictional combinations. They are not evidence that anyone felt grateful, disappointed, or anything else, and they must not be presented as if they were.`,
        ],
      },
      {
        title: 'Connect the directions as well as the shots',
        paragraphs: [
          `Think of the same photograph of a face printed twice with two different captions underneath. Under one caption the expression looks proud; under the other it looks like someone hiding bad news. Readers do not notice they are doing the work. They believe they are seeing the feeling in the face, when they are reading the caption into it. The object shot is a caption made of pictures.`,
          `For the caption to attach, the pictures have to agree about space. An eyeline is the apparent direction of a look. A point-of-view shot puts the camera roughly where the character's eyes are, so the viewer sees what they see. An object insert is a related shot of the thing, which may be closer or framed differently and need not be the literal viewpoint. Either can work after a glance, but they are different, and it helps to know which you are making.`,
          `Either way, direction and height matter. If the look goes down toward a low table, an object view aimed down from a similar height supports the connection. A level view of something on a high shelf tells the viewer the character is looking somewhere else entirely. Check that the object shot answers the look's direction rather than assuming any close-up fits after any glance.`,
        ],
      },
      {
        title: 'Leave room for an interpretation',
        paragraphs: [
          `A first sketch: one second for the look, two for the card, two for the response, five seconds in all. Treat those as readability settings, not as psychological measurements. The return shot is where a response can develop, and it does not need an exaggerated face to do so. A still, quiet pause gives the viewer room to apply the caption they have just been handed.`,
          `You can inspect the construction without any editing software: play three separate files in order, or lay three paper panels on the table and read them left to right. Then swap the middle one and read again.`,
          `Label what you made as staged fiction, every time. The power of this construction is also its hazard. An edit can suggest a relationship that did not exist when the pieces were recorded, and that is exactly why it must never be used to misrepresent a real person's response to something they never saw.`,
        ],
      },
      {
        title: 'Captions that do not fit the photograph',
        paragraphs: [
          `The first mistake is a spatial mismatch: the character looks up at a shelf, and the next shot looks down at the floor. The caption is printed under the wrong photograph, and the viewer feels a jolt without knowing why. Choose a shelf view compatible with the upward look, unless you are deliberately showing a different place and have made that clear. The second mistake is pushing the face harder when the sequence feels weak. Usually the gaze or the object height is wrong, and more acting on top of a misaligned space only adds noise.`,
          `The third mistake is the ethical one: taking a real reaction to one thing and cutting it against another. That is not a technique. It is a lie with pictures.`,
          `Two habits. Before cutting from a look to an object, check that the object shot's height and direction could be what the look was aimed at. And whenever you build a look-object-response sequence, write staged fiction on it, so the construction never passes for a record of someone's real feeling.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Match a downward look',
        alt: 'Side elevation shows an eye and camera above a low card, with both directions aimed downward.',
        caption: `Follow the look arrow from the eyes down to the card, then the object view arrow from the insert camera to the same card, and notice they aim the same way from similar heights. That agreement is what lets the caption attach to the face. A schematic, not a measured reproduction of the character's exact viewpoint.`,
        items: [
          { label: 'Looking eyes', detail: 'Look down toward the table.', x: 20, y: 25, shape: 'eye' },
          { label: 'Insert camera', detail: 'Aims down from similar height.', x: 55, y: 25, shape: 'camera' },
          { label: 'THANK YOU card', detail: 'Rests on the lower table.', x: 80, y: 78, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 2, label: 'look' }, { from: 1, to: 2, label: 'object view' }],
      },
      {
        type: 'timeline',
        title: 'Build a suggested relationship',
        alt: 'A downward glance precedes the card view and a return to the person\'s pause.',
        caption: `Read the middle step as the caption: it is the only piece you swap between the two versions, and the look and the response on either side stay identical. An original five-second sketch, not an experiment measuring emotion or a proportional timeline.`,
        items: [
          { label: 'Look', detail: '1 second: glance down toward the table.' },
          { label: 'Object', detail: '2 seconds: show the card or envelope.' },
          { label: 'Response', detail: '2 seconds: return to the staged pause.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Old phone', 'Paper faces or your own performance', 'Homemade card and envelope', 'Low table'],
      steps: [
        `Draw a neutral face whose gaze points down and to the right, and a second face for the response, using only your own drawings. Paper faces mean no real person's reaction is ever borrowed.`,
        `Photograph the two faces, then photograph the THANK YOU card from a downward angle that matches the drawn gaze. The matching angle is what lets the card answer the look.`,
        `View the three pictures in order: look, card, response. Then replace only the card photograph with a view of the blank envelope and view the sequence again. Swapping one caption under the same photograph is the whole experiment.`,
        `Write a possible reading of each sequence in one sentence, and label both sentences as interpretations of staged fiction. The label is part of the exercise, not an afterthought.`,
      ],
      notice: `Changing the object between the two unchanged faces changed what the pause seemed to mean, and you can say exactly which picture did it. You have watched a caption rewrite a photograph, and you know the face never moved.`,
      troubleshooting: `If the sequence feels spatially wrong rather than merely weak, do not reach for a bigger reaction face. Check that the drawn gaze direction and the object's height agree, since a look that goes down needs an object that is down. Fix the geometry first, then judge whether the response needs any change at all.`,
    },
    recall: {
      prompt: 'A character looks up at a shelf, but the next view looks down at floor objects. What needs checking?',
      hint: 'Compare the implied eye height and direction.',
      answer: `The eye height and direction implied by each shot. The upward look says the object is above; the downward object view says it is below, so the caption has been printed under the wrong photograph and the viewer will feel the mismatch. Choose a shelf view that could plausibly be what the upward look saw, unless you are deliberately establishing that the character is somewhere else and have shown that clearly.`,
    },
    quiz: {
      question: 'To make a table insert a literal point-of-view shot, what matters beyond matching its duration?',
      options: ['Approximate eye position and viewing direction.', 'Matching only the size of the written words.', 'Using the same pause after every object.'],
      correctIndex: 0,
      explanation: `A point-of-view shot claims to show what the character sees, so the camera has to sit roughly where their eyes are and aim where they are looking; that is what separates it from an ordinary insert. The size of the lettering helps readability but says nothing about whose view it is. A matching pause is a timing choice, not a position in space.`,
    },
    takeaway: 'A look and object can suggest a relationship; context is not proof of real emotion.',
    sourceNote: 'Inherited shot and editing references support this construction. All example images are original drawings or self-performance; inferred reactions remain interpretations, not psychological evidence.',
  },
  {
    id: 'cinema-022',
    title: 'Reveal information from outside the frame',
    outcome: `Use the space just outside the picture to pose a question with a sound, then choose the moment the camera answers it, so any movement exists to deliver information rather than to look busy.`,
    scene: 'An empty drawn square, a rustling paper parcel, and a seated pan to the right.',
    sections: [
      {
        title: 'The unseen space still belongs to the scene',
        paragraphs: [
          `Draw an empty square on a sheet of paper and frame it so the square is all the camera sees. Just beyond the right edge of the picture, out of sight, a folded paper parcel sits on the table. Start recording. Hold on the empty square. Then, with your free hand, gently rustle the parcel. The viewer hears something they cannot see. A moment later you turn the phone to the right and there it is. The empty square and the rustle asked a question. The turn answered it.`,
          `The part of the scene outside the picture's edges is called offscreen space, and the first thing to understand about it is that it is not far away. It is right there, a hand's width past the frame. A harmless object just beyond the edge can supply an unseen cause without a big location, a second performer, or any kind of frightening surprise. Offscreen space is cheap, and it is where a lot of a scene's interest lives.`,
        ],
      },
      {
        title: 'A pan changes what is included',
        paragraphs: [
          `Think about the doorbell ringing while you are in the kitchen. You hear it before you see anyone. For the few seconds it takes you to walk to the door, you are wondering who it is, and that wondering is the whole event. Then you open the door and the question closes. Now imagine your kitchen has a window onto the porch. You see the visitor before they ring. The bell still sounds, but it asks nothing, because you already know the answer.`,
          `The camera move that answers the rustle is a pan: turning the camera horizontally from a fixed position. It changes which direction the frame faces without carrying the phone through the room. Sketch both the start and the end views before you record, so you know the parcel is excluded at the start and clearly included at the end. If your opening view is wide enough to show the parcel already, you have the kitchen with the porch window. Same bell, no question.`,
          `Sound is doing a specific job here. It suggests that a source is nearby, and it does not have to tell anyone how to feel about it. Keep the rustle gentle and unmysterious. Record only your own staged action, in a private quiet room, with no voices of people who did not agree to be recorded.`,
        ],
      },
      {
        title: 'Choose the moment of the answer',
        paragraphs: [
          `Try this timing: two seconds holding on the empty square, one second of rustle, three seconds to pan right and settle on the parcel. Six seconds. Then record a second version in which you reveal the parcel sooner, perhaps starting the pan as the rustle begins. In the second version the viewer learns the source earlier, so the sound plays a different role: confirmation rather than question. What changed was not whether the camera moved but what the viewer could know at each moment.`,
          `Make the turn comfortable. Rest your filming forearm, sit or stand still, and rotate from the shoulders and wrists. Do not walk backward, do not step where the floor changes, and do not lean to reach a view.`,
          `If a smooth pan is beyond your setup, two stationary views, one of the square and one of the parcel, test exactly the same question about information order. The reveal is the point. A difficult camera movement is not.`,
        ],
      },
      {
        title: 'Movement with nothing to deliver',
        paragraphs: [
          `The first mistake is the porch window: an opening view wide enough to include the parcel, so the rustle has no question to ask and the pan has nothing to reveal. The second is treating speed as the answer. Panning faster toward an ending you already planned does not change when the viewer learns the source; it only makes the shapes harder to follow. The third is movement for its own sake, a pan that goes somewhere because standing still felt dull, with no cue before it and no new information at the end.`,
          `A quieter mistake is forgetting that the frame boundary can be crossed from the other side. A fixed shot can reveal an unseen visitor if, after an offscreen cue, a hand or a prop simply enters the picture. The camera never moved; the information still arrived.`,
          `Two habits. Before any camera move, write the question the viewer will have just before it and the answer they will have just after; if either is blank, the move is decoration. And decide the moment of the answer deliberately, because the same reveal a second earlier or later is a different scene.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Start left, reveal right',
        alt: 'A fixed camera can aim left at an empty square or right at a paper parcel.',
        caption: `Follow the start view arrow to the empty square first and notice the parcel sits outside that view, just past the edge. Then follow the end view arrow. The phone turns from one fixed spot; the arrows show viewing directions, not a path for walking. A top view.`,
        items: [
          { label: 'Empty square', detail: 'Opening view excludes the parcel.', x: 20, y: 25, shape: 'box' },
          { label: 'Paper parcel', detail: 'Rustles before it is revealed.', x: 80, y: 25, shape: 'paper' },
          { label: 'Phone', detail: 'Turns from a fixed position.', x: 50, y: 80, shape: 'camera' },
        ],
        arrows: [{ from: 2, to: 0, label: 'start view' }, { from: 2, to: 1, label: 'end view' }],
      },
      {
        type: 'timeline',
        title: 'Cue before explanation',
        alt: 'The empty square is shown, a rustle is heard, then the parcel is revealed.',
        caption: `Read the middle step as the doorbell: it is heard while the picture still shows the empty square. The reveal comes after, which is what makes it an answer. A suggested six-second sequence; the equal spacing is not a clock.`,
        items: [
          { label: 'Empty place', detail: '2 seconds: hold on the drawn square.' },
          { label: 'Unseen rustle', detail: '1 second: gently move the parcel paper.' },
          { label: 'Reveal and settle', detail: '3 seconds: pan right and finish still.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Old phone', 'Paper square and folded parcel', 'Stable seat and table'],
      steps: [
        `Place the drawn square to the left and the folded parcel to the right, and check that you can reach the parcel and turn the phone from one stable seated position. Nothing in this exercise requires standing up or leaning.`,
        `Frame only the square, rustle the parcel gently with your free hand while it stays out of shot, then pan right to reveal it and hold still. The rustle is the doorbell; the pan is opening the door.`,
        `Record a second version that reveals the parcel earlier, keeping the same gentle action. You are moving the moment of the answer, not changing the event.`,
        `Replay both with the sound on and write down, for each version, the moment the rustle's source became understandable. That moment is the only thing the two versions differ in.`,
      ],
      notice: `The timing of the reveal decided when an unseen cause became a visible explanation, and nothing else about the two takes differed. You have moved the moment the door opens, and the same bell asked a question in one version and merely confirmed in the other.`,
      troubleshooting: `If the parcel is already visible at the start, your kitchen has a porch window and the rustle cannot ask anything. Move the parcel further right, or tighten the opening view on the square, but keep the end position of the pan somewhere you can reach comfortably from your seat.`,
    },
    recall: {
      prompt: 'How could a fixed shot reveal an unseen visitor without moving the camera?',
      hint: 'The subject can cross the frame boundary instead.',
      answer: `Let the visitor cross the edge of the picture instead of sending the camera to find them. After an offscreen cue, a doorbell or a knock, a hand or a harmless prop enters the frame from the side, in agreed fiction with your own hands. The information arrives through the boundary while the camera stays perfectly still, which is the door opening while you stand where you are.`,
    },
    quiz: {
      question: 'Which change most directly delays learning the rustle\'s source?',
      options: ['Keep the parcel outside the frame until after the sound.', 'Include the parcel in a wider opening view.', 'Pan faster toward the already planned ending.'],
      correctIndex: 0,
      explanation: `Holding the parcel outside the frame until the sound has been heard keeps the question open, like hearing the bell before anyone is in sight. A wider opening view is the porch window and answers the question before it is asked. Panning faster changes how quickly the shapes rush past, not the moment the viewer learns what rustled.`,
    },
    takeaway: 'Plan the cue and the moment of explanation; movement is only one way to reveal.',
    sourceNote: 'Inherited cinematography and sound references support offscreen space and pans. The parcel exercise is original and uses no borrowed sound or staged public disturbance.',
  },
  {
    id: 'cinema-023',
    title: 'Agree on recording and sharing separately',
    outcome: `Propose a recording with its action, audience, storage, and deletion spelled out, ask about any wider sharing as a separate question, and treat every change of scope as a new decision.`,
    scene: 'A fictional invitation to film paper folding separates private rehearsal from public posting.',
    sections: [
      {
        title: 'Permission needs a specific proposal',
        paragraphs: [
          `A friend says yes to a five-minute recording of their hands folding paper, so the two of you can look at it together this afternoon. Later the clip comes out well, and you think the hobby group would love it. Then you think it would do nicely on your public page. It is tempting to feel the friend already agreed. They did not. They agreed to a recording, for two people, today. Each new audience exposes them to new viewers and new copies they cannot call back, and none of that was in the yes.`,
          `Recording and sharing are different decisions because they do different things to the person. So before involving anyone, make the proposal specific. Describe the fictional action, what the picture and the sound will capture, who will be able to see the files, and when you will delete them. And offer a real way to say no, including an unrecorded paper rehearsal that still lets you practice the blocking.`,
        ],
      },
      {
        title: 'Check what you can actually promise',
        paragraphs: [
          `Think about lending someone a book. Handing it over for a week is a small, clear permission. It does not include photocopying the chapters for a whole class, and it certainly does not include posting scans online. Nobody would argue that because you let them read it, you let them reproduce it. The lending was one decision. Copying and distributing would each be another, and the owner gets asked each time.`,
          `Two words make the recording version precise. Retention is how long the material is kept. Distribution is who receives it or can reach it. Both have to be things you can actually control. A phone may back up every clip to a cloud account automatically, or drop it into a shared album, without asking. Check how your device behaves before you promise that a recording will live on one phone only. If you cannot confirm it, do the unrecorded version rather than make a promise you cannot keep.`,
          `Hands-only framing feels private, and it is less identifying than a face. It is not anonymous. A voice, a reflection in a window, a distinctive ring, a letter on the table can all say who this is. Review the intended picture and sound together with the person, and change the setup if someone who never agreed to be recorded could end up in it.`,
        ],
      },
      {
        title: 'Treat a changed boundary as a new decision',
        paragraphs: [
          `The invented dialogue in the diagram runs the whole sequence. The filmmaker proposes five minutes, hands only, for two people, today. The friend agrees. The filmmaker asks separately about posting publicly. The friend says no, keep it private, delete it tonight. The filmmaker agrees and adds that they can stop at any point or draw the movement instead. Two questions, two answers, and the narrower one is the one that stands.`,
          `Accepting the narrower scope means living inside it. It does not mean looking for a technical way around it, such as blurring the face and posting anyway. Blur does not expand permission. If a later idea changes the action, the audience, or how long you keep the files, that is a new question, and you pause and ask it.`,
          `Agree a simple way to stop before you start. If the person withdraws or changes their mind, stop recording and deal with the copies you control. Do not promise to recall every copy once something has been shared publicly, because you cannot. This is a conversation plan, not a release form and not legal advice, and nobody needs to recruit a performer or publish a clip to complete the exercise.`,
        ],
      },
      {
        title: 'Yeses that get stretched',
        paragraphs: [
          `The first mistake is treating one yes as covering everything downstream. A clip agreed for just you two is not agreed for a closed hobby group; the group is a new set of people, and private does not mean every audience that is not the whole internet. The second mistake is editing your way past a no: muting the audio, blurring the details, cropping tighter, and then sharing the same clip as if the changes had earned permission. They changed the file, not the agreement.`,
          `A third mistake is vagueness in the proposal itself. Only later and privately sound reassuring and commit to nothing. Replace them with a named audience and a date.`,
          `Two habits. Before recording anyone, write down the action, the audience, the storage, and the deletion date, and check that your phone can actually honor them. And whenever you want to show a recording to anyone new, ask that person a new question, and do not share while you wait for the answer.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Recording yes, posting no',
        alt: 'A fictional friend agrees to private hands-only recording but declines public posting and sets deletion for tonight.',
        caption: `Notice that the filmmaker asks two separate questions and gets two separate answers, like asking to borrow the book and then, separately, to copy it. The narrower answer is the one that stands. Original example dialogue; use it only after checking that the storage and deletion scope is something your device can honor.`,
        items: [
          { label: 'Filmmaker', detail: 'May I record five minutes of your hands folding paper, for you and me to review today?' },
          { label: 'Friend', detail: 'Yes, hands only.' },
          { label: 'Filmmaker', detail: 'Would you also allow posting it publicly?' },
          { label: 'Friend', detail: 'No. Keep it private and delete it tonight.' },
          { label: 'Filmmaker', detail: 'Agreed. We can stop at any point or draw the movement instead.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper or phone notes', 'An invented rehearsal idea'],
      steps: [
        `Draft an invitation that names one harmless action, a short duration, and exactly what the picture and the sound would capture. Specific is what makes a yes mean something.`,
        `Write down the private audience, where the files will be stored, when they will be deleted, and an easy way for the person to stop or decline. These are the lending terms, and they have to be ones you can keep.`,
        `Put any sharing request in a separate question with its own named audience, and do not let a yes to recording stand in for it. Borrowing and copying are two different asks.`,
        `Read the whole plan back looking for promises you cannot verify, such as one device only on a phone that backs up automatically, and swap the recording for a paper rehearsal if you find one. Send nothing.`,
      ],
      notice: `Your invitation makes a limited yes and a separate no both easy to give, with no pressure in either direction. The person can agree to the recording, decline the sharing, and know exactly when the files disappear, because you wrote all three down before asking.`,
      troubleshooting: `If your draft contains phrases like only later, just privately, or a few people, you have written reassurance rather than scope. Replace each one with a named audience and a date: you and me, deleted Friday. If you cannot name them, you do not yet have a proposal to make.`,
    },
    recall: {
      prompt: 'A cousin agreed to a clip for just you two. Is sending it to a closed hobby group covered?',
      hint: 'Private does not mean every nonpublic audience.',
      answer: `No. The group is a new audience, however closed it is, just as lending a book to one friend does not cover photocopying it for a class. Ask the cousin specifically about that group and that use, and keep the clip exactly within the original two-person scope until they answer. If the answer is no, the clip stays where it was agreed to stay.`,
    },
    quiz: {
      question: 'A private rehearsal clip is requested for a public tutorial. What best respects the existing agreement?',
      options: ['Mute the audio and share the same hands-only clip.', 'Blur identifying details and assume the original yes applies.', 'Ask about the new audience and use; do not share while unresolved.'],
      correctIndex: 2,
      explanation: `A public tutorial is a new audience and a new use, so it needs its own question and its own answer, which may be no. Muting the audio or blurring details changes the file and not the permission, like photocopying a borrowed book with the owner's name cut off. Until the person has decided, the clip stays inside the scope they actually agreed to.`,
    },
    takeaway: 'Make recording scope explicit, separate sharing decisions, and honor changes without pressure.',
    sourceNote: 'The inherited GOV.UK research-consent guidance supplies general principles, not film law or a release form. Device storage and applicable legal requirements need separate checks.',
  },
  {
    id: 'cinema-024',
    title: 'Replace risky locations with safe screen geography',
    outcome: `Separate the visual relationship a scene needs, who leaves, who stays, and how the gap grows, from the real location it suggests, and rehearse it with tabletop models instead of near any risk.`,
    scene: 'A folded paper train leaves a drawn platform while a paper figure stays behind.',
    sections: [
      {
        title: 'Keep the relationship, replace the location',
        paragraphs: [
          `You want to film a farewell. A train pulls out to the right; a person stays on the platform and gets smaller behind it. It is a strong image, and the first idea is to go to the station and shoot it. Before you do, ask what the beginner's problem in that shot actually is. It is not steam or steel. It is screen geography: can a viewer follow which thing leaves, which thing stays, and how the gap between them grows? That question can be studied completely without a station.`,
          `Fold a scrap of paper into a train-shaped block. Draw a platform on a sheet. Cut or fold a small paper figure. Set them on a stable table and slide the train to the right while the figure stays put. The model is openly homemade, and that is fine. Nobody is meant to mistake it for a documentary. The exercise tests whether the movement reads, and paper reads perfectly well.`,
        ],
      },
      {
        title: 'Preserve the information in the safer version',
        paragraphs: [
          `Think about a football coach at half time. The team's problem is who runs where when the ball goes wide. The coach does not take everyone back onto the pitch to work it out. They slide magnets around a small whiteboard. The magnets are not players and the board is not grass, and nobody minds, because the thing being taught is the relationship between positions. Once the relationship is clear on the board, it transfers to the pitch. The board is where you can afford to get it wrong.`,
          `The tabletop is your whiteboard. Place the train toward the left of the starting frame so it has room to travel right. Keep the figure visible beside the drawn platform. As the train slides away, the growing gap between it and the figure is the departure; that gap is the information the shot exists to deliver. One caution carries over from the real station: if you change which side of the scene the camera is on between views, the train's screen direction reverses. Check the planned viewpoint as well as the model's physical route.`,
          `A first timing sketch: one second with both together, three seconds of slide, two seconds holding the finished separation. Six seconds. Move the paper by hand and accept that your hand may appear in the shot. No motor, no bought toy, no elaborate concealment is needed to learn what this shot needs to show.`,
        ],
      },
      {
        title: 'Safety is part of the setup',
        paragraphs: [
          `Even the whiteboard version has a setup check. Before you record, look at your footing, a clear way out of the room, any loose cords, how the phone is supported, and where the table edges are. Keep the models and your hands well inside the tabletop. A low, stable camera position beats balancing the phone over anyone's head or stacking things into a tall improvised mount. Keep private screens, addresses, and people who did not agree to be filmed out of both the picture and the sound.`,
          `Now the list of things this exercise must never turn into. Do not film drivers from the roadside. Do not film approaching traffic. Do not go anywhere near railway tracks. Do not climb on furniture for a higher angle. Do not provoke strangers to get a reaction. None of those teaches screen geography better than paper does, and each of them carries a risk the lesson does not need.`,
          `If even the tabletop arrangement is awkward for you, draw the starting frame and the ending frame on two sheets of paper. The visual question survives in two drawings. A safe substitute keeps the thing you are learning and drops the risk, and that trade is always available.`,
        ],
      },
      {
        title: 'Substitutes that drop the lesson',
        paragraphs: [
          `The first mistake is replacing the location but also replacing the problem. A drawing of a stationary train with no figure in it has removed the risk and the departure together; there is no leaving and no staying, so there is nothing to learn. The second mistake is swapping in an unrelated detail, a close-up of a bag, because it is easy to film. It is safe and it tests nothing about the gap between two things.`,
          `A third mistake is chasing the model when the shot goes wrong. The paper train slides out of frame too early, and the camera swings after it toward the table edge. Shorten the route or widen the stationary view. Never follow anything off an edge, even a paper one, because the habit is the dangerous part.`,
          `Two habits. Before going anywhere to film, write the visual relationship the shot needs in one sentence, and ask whether paper on a table could show it. And before pressing record in any setup, run the safety check, footing, exits, cords, phone support, edges, as part of framing rather than as an afterthought.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Departure as a tabletop relationship',
        alt: 'A camera faces a paper train moving left to right while a figure stays beside a drawn platform.',
        caption: `Follow the slide right arrow from where the train starts to where it ends, then notice the waiting figure has not moved; the growing distance between them is the whole shot. Magnets on a whiteboard, with every piece safely on a stable tabletop and nowhere near real transport. A top view of an original paper model.`,
        items: [
          { label: 'Phone', detail: 'Stationary, safely supported.', x: 50, y: 85, shape: 'camera' },
          { label: 'Train starts', detail: 'Folded paper at the left.', x: 20, y: 55, shape: 'object' },
          { label: 'Train ends', detail: 'Same model farther right.', x: 80, y: 55, shape: 'object' },
          { label: 'Waiting figure', detail: 'Stays in the same place.', x: 20, y: 20, shape: 'person' },
          { label: 'Drawn platform', detail: 'A paper location cue.', x: 80, y: 20, shape: 'paper' },
        ],
        arrows: [{ from: 1, to: 2, label: 'slide right' }],
      },
      {
        type: 'timeline',
        title: 'A visible departure',
        alt: 'The train waits, slides right, and ends separated from the stationary figure.',
        caption: `Read the first and last steps together: together, then separated. The middle step is the only movement, and only the train moves in it. A suggested six-second model take; the spacing does not represent duration.`,
        items: [
          { label: 'Before departure', detail: '1 second: train and figure share the view.' },
          { label: 'Travel right', detail: '3 seconds: slide only the paper train.' },
          { label: 'After departure', detail: '2 seconds: hold the increased separation.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Old phone', 'Paper and pencil', 'Low stable table'],
      steps: [
        `Fold a paper train, draw a platform, and make a small paper figure. No bought model and no real location is needed, because the lesson is the relationship between the pieces, not the pieces themselves.`,
        `Before setting the route, check your footing, the exit from the room, the table edges, anything private in view, and that the phone is resting on something stable. The safety check is part of framing the shot.`,
        `Record one stationary view as the train slides right and the figure stays, with a second of stillness before and after the move. The still moments make the before and after easy to compare.`,
        `Replay and check that the direction of departure and the growing separation both read clearly. If they do not, rearrange the paper on the table; never raise the risk level to fix a reading problem.`,
      ],
      notice: `The same departure relationship, one thing leaving and one thing staying with the gap between them growing, was studied entirely through harmless paper movement. The magnets taught the move, and nothing was anywhere near a train.`,
      troubleshooting: `If the train leaves the frame before the separation has had time to register, shorten its route or widen the stationary view so the ending stays in the picture. Do not pan after it toward the table edge. Following a subject off an edge is the habit this exercise exists to avoid, even when the subject is paper.`,
    },
    recall: {
      prompt: 'A planned entrance beside a busy road only needs a left-to-right arrival. How could you preserve that lesson?',
      hint: 'Separate the visual relationship from the real location.',
      answer: `Write down what the shot needs, something arriving from the left and reaching a destination, and then stage exactly that somewhere safe: a person stepping through an interior doorway, or a paper figure sliding into a drawn frame on the table. The direction and the destination are the magnets on the board. The road added only risk, and none of the lesson lived in it.`,
    },
    quiz: {
      question: 'Which adaptation best retains the farewell\'s visual problem without requiring the transport location?',
      options: ['Show only a stationary train drawing with no figure.', 'Move a paper train away from a fixed figure in one clear view.', 'Replace the departure with an unrelated close detail of a bag.'],
      correctIndex: 1,
      explanation: `A paper train sliding away from a fixed figure keeps the movement and the growing separation, which is the relationship the shot was always about; that is the whiteboard with the magnets still in play. A stationary train with no figure has no leaving and no staying left to study. A bag detail is safe but tests nothing about the gap between two things.`,
    },
    takeaway: 'Preserve the screen relationship and replace any avoidable location or action risk.',
    sourceNote: 'Inherited blocking and consent references support staging and boundaries, not location safety approval. This original model exercise excludes roads, tracks, climbing, and stunts.',
  },
]