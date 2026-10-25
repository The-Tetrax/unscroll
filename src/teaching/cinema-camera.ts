import type { LessonGuide } from './types'

// Original teaching and schematic diagrams. Source lists remain on the existing lessons.
// Suggested timings are practice budgets, not measured learning effects.
export const cinemaCameraGuides: LessonGuide[] = [
  {
    id: 'cinema-001',
    title: 'Establish a usable phone baseline',
    outcome: 'Make a repeatable recording that separates a camera problem from a framing problem.',
    scene: 'Shoes and a handwritten OUT card beside an interior door.',
    sections: [
      {
        title: 'Start with something that stays still',
        paragraphs: [
          'Put a pair of shoes beside an interior door and lean a card reading OUT against them. This small scene gives you three things to inspect: lettering, shoe texture, and the straight door edge. A baseline is a saved starting example, not your best possible film. Without one, a later improvement is hard to explain because you cannot remember exactly how the first recording looked.',
          'Use ordinary video mode on the phone you already own. Keep the doorway clear and exclude addresses, reflections of people, and private conversation from the recording.',
        ],
      },
      {
        title: 'What the camera is doing',
        paragraphs: [
          'The lens is the small optical assembly that directs light onto a sensor, the surface that measures it. A fingerprint scatters light before it reaches that surface. It can make bright areas look hazy even when the camera has focused correctly. If needed, wipe the lens gently with a clean, dry, soft cloth.',
          'Resolution describes the stored picture dimensions. A larger setting does not repair haze, poor focus, or a badly placed subject. Leave unfamiliar settings alone and note only controls your video mode actually shows.',
        ],
      },
      {
        title: 'Change one visible fault',
        paragraphs: [
          'Record ten seconds without moving, then replay the saved file. The live preview cannot confirm that recording started, stayed steady, or retained the same edges. Suppose OUT is readable but the door edge drifts sideways. Support your forearms and repeat without changing the light or distance. Less drifting now points to support as the useful change. If lettering remains soft, investigate distance next rather than changing several settings together. Keep both takes so the comparison survives your memory of making them.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A repeatable doorway test',
        alt: 'Top view of a phone aimed at shoes and an OUT card beside a clear door.',
        caption: 'Keep these positions for both takes. This is a schematic layout, not a measured floor plan.',
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
        'Arrange the shoes and OUT card outside the walking route; check picture and sound for private material.',
        'Record ten seconds in ordinary video mode from a comfortable, stationary position.',
        'Replay it. Write one observable fault and note the orientation and any displayed recording setting.',
        'Correct only that fault, record again, and compare the two saved clips.',
      ],
      notice: 'The second recording gives a visible answer about one change, even if it did not help.',
      troubleshooting: 'If you cannot identify a difference, pause on the same door edge or letter in both recordings.',
    },
    recall: {
      prompt: 'A later kitchen clip looks hazy but steady. What comparison would isolate the cause?',
      hint: 'Keep the scene fixed; inspect the optical surface.',
      answer: 'Check and gently clean a dirty lens, then repeat from the same position and light. Reduced haze supports that explanation; steadiness alone never established clear optics.',
    },
    quiz: {
      question: 'The card is sharp but the door drifts. Which next take tests the clearest explanation?',
      options: ['Same setup with supported forearms.', 'Higher resolution from the same unsupported grip.', 'A closer view with stronger light.'],
      correctIndex: 0,
      explanation: 'Support directly tests unwanted camera movement. Resolution changes stored dimensions; moving closer also changes the view and obscures the comparison.',
    },
    takeaway: 'Save a baseline, inspect the recording, and change one visible fault at a time.',
    sourceNote: 'The inherited Apple video guide is model-specific. This original test is practice, not a benchmark or a promise about old-phone features.',
  },
  {
    id: 'cinema-002',
    title: 'Choose the frame before arranging the action',
    outcome: 'Arrange a handoff so its start and destination survive the chosen frame.',
    scene: 'A folded note travels across a table to a drawn landing square.',
    sections: [
      {
        title: 'The destination is part of the action',
        paragraphs: [
          'Imagine filming your hand sliding a folded note to a square drawn on paper. If the note exits the right edge before reaching the square, viewers see a movement but not a delivery. The frame is the boundary of the recorded picture. Choosing that boundary before rehearsing tells you how much room the movement can use.',
          'Hold the phone horizontally for one take or vertically for another. Do not rotate halfway through: that changes how the finished recording must be viewed, not just where an object sits.',
        ],
      },
      {
        title: 'Width compared with height',
        paragraphs: [
          'Aspect ratio compares picture width with picture height. A 16:9 image has sixteen units of width for nine of height; 9:16 is taller than it is wide. These are examples, not settings every phone offers. Orientation and the recording mode together determine your actual frame.',
          'A crop removes part of an existing picture. Cropping a wide recording into a tall one can discard the hand or destination. It cannot uncover anything outside the original recording. Adding black borders changes presentation but does not restore that missing action.',
        ],
      },
      {
        title: 'Rehearse for the shape you have',
        paragraphs: [
          'In the wide version, let the note travel left to right. For a tall version, try moving it from near the bottom toward a square farther up the table. That changes the blocking, meaning the arrangement of the action, rather than squeezing the same route into less width. Keep the camera stationary and inspect all four edges throughout the slide. If both routes remain readable, choose according to the relationship you want to show, not a claim that one frame shape is inherently cinematic.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Across-table handoff',
        alt: 'A phone faces a note on the left and its landing square on the right.',
        caption: 'Top view: both ends of this route need to fit the recording.',
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
        caption: 'Icons show alternative endpoints after rearranging the route. Panel dimensions do not reproduce actual aspect ratios.',
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
        'Draw a landing square and fold a separate note with no personal information.',
        'Record a horizontal take of your hand sliding the note left to right, keeping both endpoints visible.',
        'Stop recording. Turn the phone vertically and rearrange the route from near to far.',
        'Replay both. Check whether the complete handoff fits, not just the opening position.',
      ],
      notice: 'The same delivery uses different space while retaining a visible arrival.',
      troubleshooting: 'If an endpoint disappears, shorten the route or move the stationary camera back; do not balance it overhead.',
    },
    recall: {
      prompt: 'A tall doorway greeting will later be cropped square. What should rehearsal check?',
      hint: 'Follow hands as well as faces.',
      answer: 'Check the greeting inside the intended square throughout the gesture. Move the performers or shorten the gesture if necessary; a later crop cannot restore an excluded hand.',
    },
    quiz: {
      question: 'A vertical take loses the receiving square. Which change preserves the delivery most directly?',
      options: ['Keep the route and add borders later.', 'Keep the route and crop more tightly.', 'Rearrange the route along the available height.'],
      correctIndex: 2,
      explanation: 'Rearranging uses the available space. Borders only alter presentation, and a tighter crop removes still more recorded information.',
    },
    takeaway: 'Choose the delivery frame, then rehearse the whole action inside it.',
    sourceNote: 'Inherited Yale and Apple references support framing concepts and recording options. Example ratios do not imply a selectable mode on every phone.',
  },
  {
    id: 'cinema-003',
    title: 'Give wide, medium, and close shots different jobs',
    outcome: 'Choose shot sizes that reveal location, action, and a small missing detail.',
    scene: 'A bag in a home corridor has an empty paper sleeve marked PASS.',
    sections: [
      {
        title: 'Where is the missing pass?',
        paragraphs: [
          'A bag waits beside an interior doorway. Your hand opens its outer pocket and finds an empty paper sleeve marked PASS. There is no real ticket or personal information in this staged scene. One distant recording might show the entire action, yet leave the sleeve too small to understand. One very close recording might show the sleeve clearly but leave viewers unsure where it belongs.',
          'Shot size describes how much of a subject and its surroundings occupies the frame. Wide, medium, and close are useful relative descriptions, not three grades of image quality.',
        ],
      },
      {
        title: 'Give each view a question',
        paragraphs: [
          'A wide view answers where: it includes the bag and doorway. A medium view answers what happens: the hand and pocket are large enough to follow. A close view answers what was found: the sleeve is empty. On a phone, a small detail that looked obvious while filming can disappear during ordinary playback.',
          'Move the same camera between takes instead of assuming a zoom button selects a better lens. Move only on clear, stable flooring. Changing distance also changes perspective, so keep the bag and doorway relationship recognizable.',
        ],
      },
      {
        title: 'Test the sequence, not the vocabulary',
        paragraphs: [
          'Try a proposed sequence of two seconds wide, three seconds on the opening, and two seconds close: seven seconds altogether. Those timings are a starting sketch, not an editing rule. Pause on the close view and ask whether emptiness is actually visible, rather than merely a hand covering the sleeve. If the medium view already makes the missing pass clear, it may do two jobs and remove the need for another setup. A closer shot earns its place through useful information, not through its name.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'One subject, three camera distances',
        alt: 'Three alternative camera positions approach the same bag along one clear route.',
        caption: 'Schematic positions are separate takes, not simultaneous cameras or measured distances.',
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
        caption: 'Proposed durations total seven seconds. Equal diagram spacing is not a time scale.',
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
        'Place the bag clear of the doorway and put the empty homemade sleeve in its pocket.',
        'Record a wide view showing the bag and doorway without filming anyone passing.',
        'From nearer positions, record the opening and the empty sleeve; keep the phone securely supported.',
        'Play the files in order and name the new information each supplies. No editing app is required.',
      ],
      notice: 'Location, opening, and absence become understandable without an accompanying explanation.',
      troubleshooting: 'If the close view is blurry, back away to a readable distance rather than pushing nearer.',
    },
    recall: {
      prompt: 'A cook pauses beside an empty salt dish. What would justify a closer view?',
      hint: 'Ask which fact is unreadable at the current size.',
      answer: 'A closer view is useful if the wider shot cannot show the empty dish. If emptiness is already clear, a reaction or continued action may add more.',
    },
    quiz: {
      question: 'The medium view already shows the empty sleeve clearly. What is the best reason to add a close view?',
      options: ['To complete the standard three-size pattern.', 'To reveal another relevant detail still unreadable.', 'To keep every shot equally short.'],
      correctIndex: 1,
      explanation: 'A new detail provides an information job. A size pattern or equal duration alone does not explain what viewers gain.',
    },
    takeaway: 'Choose shot size for the fact that needs to become readable.',
    sourceNote: 'The inherited shot guide supplies terminology. This original missing-pass sequence and its timings are illustrative, not a compulsory coverage formula.',
  },
  {
    id: 'cinema-004',
    title: 'Compare centered and off-center framing',
    outcome: 'Use subject placement to reserve useful space instead of obeying a grid automatically.',
    scene: 'A paper arrow travels right toward a drawn doorway on a tabletop.',
    sections: [
      {
        title: 'Empty space can have a job',
        paragraphs: [
          'Draw a right-pointing arrow on a folded scrap of paper. It will stand in for a traveler approaching a doorway drawn on another sheet. With the arrow centered, there is similar space on either side. Place it farther left and more room opens ahead of its movement. The empty area now has a practical job: it can contain the destination and the journey toward it.',
          'This is composition, the arrangement of visible elements inside the frame. It is a choice about relationships, not a test of whether you know a famous rule.',
        ],
      },
      {
        title: 'What the thirds grid suggests',
        paragraphs: [
          'The rule of thirds divides a picture into three equal columns and three equal rows. Its lines fall about one-third and two-thirds across each dimension. Placing an important object near a line or intersection offers one possible arrangement. If your camera has no grid, imagine the divisions or sketch them on paper.',
          'Centering remains useful. A symmetrical doorway may read most clearly with its opening in the middle. Moving that doorway aside just to touch a grid line can make its symmetry harder to see without adding useful space.',
        ],
      },
      {
        title: 'Compare the actual movement',
        paragraphs: [
          'Make one take with the arrow starting in the center and another near the left third. Keep its size and the rightward route similar. In the second version, check whether viewers can see more of the route before the arrow reaches an edge. That is an observable difference. Calling the version lonely or hopeful is an interpretation that needs story, performance, and sound as context. The grid generates alternatives; the action tells you which alternative serves this particular shot.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The subject really changes position',
        alt: 'A paper subject is centered in one panel and at the left third in the other.',
        caption: 'Compare the open area to the right of the icon. Positions are schematic frame percentages.',
        items: [
          { label: 'Centered start', detail: 'Similar room on either side.', x: 50, y: 52, shape: 'paper' },
          { label: 'Left-third start', detail: 'More room ahead of rightward travel.', x: 33, y: 52, shape: 'paper' },
        ],
      },
      {
        type: 'spatial',
        title: 'The route behind the framing choice',
        alt: 'Top view of a paper traveler moving right toward a drawn doorway, with camera below.',
        caption: 'The extra screen space is for this destination, not an abstract mood.',
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
        'Draw the traveler and doorway. Work seated at a stable table with no private material visible.',
        'Record the traveler starting centrally and sliding right toward the doorway.',
        'Record again with the traveler near the left third, preserving its approximate screen size.',
        'Compare how much of the route remains visible before arrival, then choose a version for that reason.',
      ],
      notice: 'Changing placement changes usable travel room, not just whether a grid line is touched.',
      troubleshooting: 'If the destination disappears in both takes, widen the view or shorten the route before comparing placements.',
    },
    recall: {
      prompt: 'A person waits facing left for a delivery. Where could useful empty space go?',
      hint: 'Put room toward the expected event.',
      answer: 'Try the person toward the right with space to the left for the delivery. Compare a centered version if balance matters more than showing the approach.',
    },
    quiz: {
      question: 'A centered doorway reads clearly, but moving it to a third cuts off one side. What should guide the choice?',
      options: ['Preserve the doorway relationship the shot needs.', 'Keep the thirds placement to maintain consistency.', 'Choose whichever version has more empty space.'],
      correctIndex: 0,
      explanation: 'Readable relationships supply a reason for placement. Grid consistency and empty space are useful only when they serve that reason.',
    },
    takeaway: 'Use a grid to propose arrangements, then judge what the action gains.',
    sourceNote: 'Inherited camera and shot references describe composition tools. No grid position guarantees an emotion; these diagrams and paper scenes are original.',
  },
  {
    id: 'cinema-005',
    title: 'Separate focus from exposure',
    outcome: 'Diagnose soft lettering separately from changes in recorded brightness.',
    scene: 'A handwritten route card is filmed while a dark sleeve enters nearer the lens.',
    sections: [
      {
        title: 'Two faults can look like one',
        paragraphs: [
          'Write BUS 4 on a card and set it on a clear table. While filming, bring your dark sleeve into the edge of the view. The card might become brighter, softer, or both. Simply saying the camera changed misses the useful question: did the brightness change, the sharpness change, or did your moving hand briefly cover the letters?',
          'Use invented text rather than a real travel card. This keeps private information out and gives you bold edges that are easier to inspect than a plain sheet.',
        ],
      },
      {
        title: 'Light and distance are different decisions',
        paragraphs: [
          'Focus selects the distance at which edges are sharp. The lens redirects incoming light so detail from that distance falls clearly on the sensor. Exposure concerns the light gathered for each picture; the phone also processes those measurements into displayed brightness. More brightness cannot bring an out-of-focus letter back into focus.',
          'Autofocus can choose a nearer sleeve instead of the card. Automatic exposure can react to a dark area occupying more of the image. Many apps connect both decisions to one tap, which makes their separate effects easy to confuse.',
        ],
      },
      {
        title: 'Keep the target stable',
        paragraphs: [
          'Replay the card before and after the sleeve enters. If letters stay crisp while the paper brightens, investigate exposure rather than focus. If the sleeve becomes sharp and the card soft, investigate the selected distance. Try tap focus, brightness adjustment, or a lock only if your actual video mode supports it. Without those controls, keep the card distance and lighting steady and the sleeve farther from the lens. Reset a supported focus lock when the card moves; a lock holds a choice, not a promise that every distance stays sharp.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two distances compete for attention',
        alt: 'A phone faces a distant route card while a sleeve enters nearer the lens from the side.',
        caption: 'Top-view distances are schematic. The sleeve changes both scene content and a possible focus target.',
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
        'Place the BUS 4 card at a distance where its letters are readable in ordinary video.',
        'Support the phone securely and record as your sleeve enters without covering the card.',
        'Replay and note brightness and letter sharpness separately before and after the entrance.',
        'Repeat using a supported lock, or keep the sleeve farther away if locking is unavailable.',
      ],
      notice: 'You can name which property changed instead of treating every fault as blur.',
      troubleshooting: 'If the card is always soft, first move it farther from the lens and improve available light.',
    },
    recall: {
      prompt: 'A toy moves toward a focus-locked phone and becomes soft. Why does brightening not fix it?',
      hint: 'Which choice did the lock preserve?',
      answer: 'The lock preserved the earlier focus distance. Reset supported focus or return the toy to that distance; changing brightness does not refocus the lens.',
    },
    quiz: {
      question: 'The card brightens when a sleeve enters, but its letters stay crisp. What changed most directly?',
      options: ['The chosen focus distance.', 'Exposure or brightness processing.', 'The minimum focusing distance.'],
      correctIndex: 1,
      explanation: 'Crisp letters suggest focus remained suitable. Automatic brightness decisions can respond to the sleeve without changing the optical close-focus limit.',
    },
    takeaway: 'Inspect sharpness and brightness separately, even when one tap influences both.',
    sourceNote: 'Inherited Apple and Yale references explain controls and optical concepts. Apple gestures are not universal, and photo controls may be unavailable in video.',
  },
  {
    id: 'cinema-006',
    title: 'Find your camera\'s close-focus limit',
    outcome: 'Find a repeatably readable subject distance without relying on a macro mode.',
    scene: 'A homemade BASIL label is tested at three positions on a tabletop.',
    sections: [
      {
        title: 'Bigger does not always mean clearer',
        paragraphs: [
          'You want a close view of a little label reading BASIL. As the phone approaches, the letters occupy more of the screen. Then their edges become soft and repeated tapping does not bring them back. The larger picture can contain less useful detail than the smaller one you recorded a little farther away.',
          'Use a label you wrote yourself, not packaging with an address. The task is to discover what your existing camera can record reliably, not to imitate a specialist photograph of a tiny object.',
        ],
      },
      {
        title: 'Why the lens has a limit',
        paragraphs: [
          'A lens must form a sharp image on the sensor, the light-sensitive surface inside the camera. Its focusing mechanism has a limited range. Inside the nearest usable distance, it cannot bring the subject into focus, however often you ask. Some old cameras have fixed focus, making a practical distance test more useful than searching for controls.',
          'Low light, a blank target, and hand movement can also cause softness. Bold lettering, steady support, and comfortable daylight reduce those competing explanations. Artificial background blur does not repair lettering that the lens failed to resolve.',
        ],
      },
      {
        title: 'Test positions rather than guessing a specification',
        paragraphs: [
          'Keep the phone fixed and move the label through far, middle, and near positions. Start where it is readable. Suppose the far and middle recordings retain crisp strokes, while the near recording stays soft. The middle position is then the closest successful test, not necessarily the exact optical limit. Repeat there before trusting it for a scene. If the app visibly switches cameras, record that fact: you are testing a different optical system. No particular number of centimeters works for every phone, and no macro purchase is needed to make a useful label shot.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Move one label through three tests',
        alt: 'A fixed camera faces three alternative BASIL label positions from near to far.',
        caption: 'The label appears three times to show separate trials. Spacing is schematic, not a recommended focusing distance.',
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
        'Write BASIL and place it in comfortable light. Support your forearms without blocking the lens.',
        'Record the label at a clearly readable distance, then at two progressively nearer positions.',
        'Replay at ordinary viewing size. Compare letter edges, not how much screen the label fills.',
        'Repeat the nearest clear position and mark its place on a scrap of paper for future setup.',
      ],
      notice: 'A saved position produces readable letters twice, even if a nearer position does not.',
      troubleshooting: 'If every test is soft, add available light, steady the phone, and begin farther back before moving closer.',
    },
    recall: {
      prompt: 'A miniature sign fills the frame but cannot be read. What would you test before enlarging it digitally?',
      hint: 'Bigger pixels cannot restore missing edges.',
      answer: 'Back away and record again with steady support and adequate light. A smaller sharp sign contains useful detail that enlarging a soft recording cannot create.',
    },
    quiz: {
      question: 'Only the nearest of three steady, well-lit label recordings is soft. Which test best follows?',
      options: ['Repeat the near take with brighter screen settings.', 'Enlarge the soft recording to match the others.', 'Repeat at the nearest position that stayed clear.'],
      correctIndex: 2,
      explanation: 'A repeat checks usable focusing distance. Display brightness and enlargement change viewing, not whether the lens recorded sharp strokes.',
    },
    takeaway: 'Choose the nearest repeatably clear distance, not the largest blurry image.',
    sourceNote: 'Inherited camera and cinematography references support focus concepts. The three trial positions are original practice; close-focus limits and camera switching vary.',
  },
  {
    id: 'cinema-007',
    title: 'Protect important highlights without hiding the subject',
    outcome: 'Use placement to retain important bright detail without making the subject unreadably dark.',
    scene: 'The folds of a white kitchen towel are filmed against bright daylight.',
    sections: [
      {
        title: 'A white towel still contains detail',
        paragraphs: [
          'Drape a dry white towel over a low, stable box. Its folds contain brighter ridges and darker creases. Film it with a bright window behind it and the phone may show either a dark towel or a featureless bright patch. The problem is not that white objects lack texture. The scene contains a larger difference between bright and dark areas than this recording can retain usefully.',
          'Contrast describes differences in brightness. Here the important contrast is between towel folds, while the bright background competes with the towel for the camera\'s limited recording range.',
        ],
      },
      {
        title: 'What clipping loses',
        paragraphs: [
          'Clipping happens when different bright details reach the same recorded maximum. Imagine two folds that should have slightly different tones becoming identical white. Darkening the saved patch later makes both equally gray; it does not tell the editor which fold was originally darker. Phone processing and supported high-dynamic-range modes complicate the result, but they do not justify assuming every missing distinction can be recovered.',
          'Screen brightness is a viewing adjustment, not a repair to the file. Judge the saved recording at a comfortable viewing level rather than trying to fix it by dimming your display.',
        ],
      },
      {
        title: 'Change which light reaches the subject',
        paragraphs: [
          'Move the camera to the window side of the towel and aim toward a quieter interior background. Arrange the towel so daylight reaches its visible folds. Now the useful subject receives light instead of competing with a bright opening behind it. Adjust exposure only if your video mode supports it, then replay. Protect the details the scene needs: for a person, that could mean preserving their face while allowing an irrelevant background to brighten. Saving every window detail is not worth an accidental silhouette.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Move toward the light side',
        alt: 'Top view of daylight, towel, a backlit camera position, and an alternative on the light side.',
        caption: 'Camera icons mark separate takes. The second position faces the lit towel, not the bright window.',
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
        caption: 'Illustrative screen tones, not measured towel values or a calibrated display test.',
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
        'Arrange the towel away from glass and walking routes; exclude private views through the window.',
        'Record a short backlit take and replay the folds, noting lost texture or a dark subject.',
        'Move to the light side on stable flooring and film toward an interior background.',
        'Compare the same folds in both files. Note which detail you chose to preserve.',
      ],
      notice: 'Useful fold differences can survive a placement change without an editing filter.',
      troubleshooting: 'If folds still merge, move away from direct sun or adjust supported exposure; keep the subject readable.',
    },
    recall: {
      prompt: 'A handmade white sign disappears against a bright doorway. What should change before editing?',
      hint: 'Reduce the scene difference at capture.',
      answer: 'Turn the sign toward available light or choose a less bright background. Record again with readable lettering; darkening clipped pixels cannot reconstruct missing strokes.',
    },
    quiz: {
      question: 'A face is readable but an irrelevant window clips. Which priority best fits a dialogue scene?',
      options: ['Preserve the face or reframe the background.', 'Darken the face until all window detail returns.', 'Rely on lowering screen brightness during playback.'],
      correctIndex: 0,
      explanation: 'The speaking subject supplies the needed information. Preserving background detail at its expense changes the scene, while display brightness cannot restore recorded detail.',
    },
    takeaway: 'Reduce excessive scene contrast through placement and preserve the detail that matters.',
    sourceNote: 'Inherited camera and postproduction references support exposure concepts. These original swatches are schematic; no HDR feature or recovery capability is assumed.',
  },
  {
    id: 'cinema-008',
    title: 'Distinguish digital zoom from moving closer',
    outcome: 'Predict why a cropped view and a nearer view show different background proportions.',
    scene: 'Two equally tall folded paper houses stand one behind the other.',
    sections: [
      {
        title: 'Match the front house, then inspect the rear',
        paragraphs: [
          'Place two equally tall paper houses at different distances from a phone. You want the front house larger in the finished image. Enlarging the existing view and moving the phone closer can both achieve that, but they do not produce the same relationship between the houses. Compare the rear house after matching the front house\'s screen height.',
          'Perspective means how spatial relationships appear from a viewpoint. Changing the viewpoint changes the relative camera-to-object distances. Cropping one fixed camera view leaves those relationships intact.',
        ],
      },
      {
        title: 'A small distance example',
        paragraphs: [
          'For an idealized example, put the front house 40 centimeters from the camera and the rear house 80 centimeters away. Equal-height objects project to sizes roughly proportional to the inverse of distance. The rear house therefore appears half as tall: 40 divided by 80 equals 0.5, or 50 percent. A digital crop enlarges both houses equally, preserving that ratio.',
          'Move the camera 20 centimeters forward. The distances become 20 and 60 centimeters. The rear-to-front height ratio is now 20 divided by 60, about 33.3 percent. These are simplified geometry values, not phone measurements or recommended close-focus distances.',
        ],
      },
      {
        title: 'Where lenses enter the choice',
        paragraphs: [
          'A lens directs light onto the sensor. Its focal length helps determine how wide a view that camera records: a shorter focal length on the same sensor includes more of the scene. Optical zoom changes focal length; digital zoom crops and enlarges recorded information. A phone zoom button may instead switch physical cameras, so do not assume which operation it performs.',
          'With the same camera position, changing magnification alone does not create the distance change above. Moving does. Use a safe position even if that means accepting a crop and less detail.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Distances change when the camera moves',
        alt: 'Original and nearer camera positions face a front house and a rear house along one axis.',
        caption: 'Schematic top view of the hypothetical 40/80 centimeter setup and a 20 centimeter move.',
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
        caption: 'Idealized equal-height houses. The last value is rounded; these are not image-quality scores.',
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
        'Fold two equal-height houses. Separate them along the view, keeping both within the camera\'s readable range.',
        'Record from a fixed position. If digital zoom is supported, make an enlarged take without moving.',
        'Return to the original camera setting and move nearer safely, matching the front house\'s approximate size.',
        'Compare rear-house proportions. Without zoom, sketch a crop of the far view on paper instead.',
      ],
      notice: 'Moving nearer changes relative house sizes; a crop of one fixed view does not.',
      troubleshooting: 'If close focus fails, use larger separations farther away. Note any automatic camera switching rather than hiding it.',
    },
    recall: {
      prompt: 'Why does a distant shelf look larger behind a face when you step back and enlarge the view?',
      hint: 'Compare both distances relative to each other.',
      answer: 'Stepping back makes the face and shelf distances more similar in proportion. Enlarging then restores face size while leaving the shelf relatively larger than in the nearer view.',
    },
    quiz: {
      question: 'Which comparison isolates digital cropping from a change of viewpoint?',
      options: ['Two views with matching faces but different camera positions.', 'Two views after switching unknown physical cameras.', 'An original file and an enlarged crop from that same file.'],
      correctIndex: 2,
      explanation: 'A crop from one file guarantees the same captured viewpoint. Matching subject size or tapping a zoom label does not establish that control.',
    },
    takeaway: 'Position changes perspective; enlarging one fixed camera view preserves its proportions.',
    sourceNote: 'Inherited shot and Yale references discuss lenses and perspective. The ratios use simplified projection geometry; real optics, processing, and close-focus limits vary.',
  },
  {
    id: 'cinema-009',
    title: 'Use camera height to reveal relationships',
    outcome: 'Explain a height choice through visible surfaces and overlaps before assigning a mood.',
    scene: 'A folded message lies inside an open, shallow cardboard box.',
    sections: [
      {
        title: 'Can the viewer see into the box?',
        paragraphs: [
          'Place a folded message inside an open, shallow cardboard box on a low table. From near the level of the front wall, the phone sees the wall but little of the message. From comfortably above it, more of the interior appears. Nothing inside the box has moved. You changed the path along which the camera looks past the front edge.',
          'This gives camera height a concrete job: hide or reveal the message. It is easier to evaluate that job than to decide whether a low view feels powerful in every possible story.',
        ],
      },
      {
        title: 'Height is not the same as tilt',
        paragraphs: [
          'Height is where the lens sits vertically. Angle describes where it points. You can lower a phone and keep it level, or leave it at one height and tilt it downward. Tilting changes the direction of the view; it does not move the viewpoint above a blocking edge.',
          'At the low position, the box wall interrupts the line of sight to the message. Raising the lens can provide a clear line over that wall. Keeping the same camera and similar horizontal distance makes this visibility change easier to compare.',
        ],
      },
      {
        title: 'Choose a reveal, not an emotion code',
        paragraphs: [
          'Record a low view that conceals most of the message, then a higher view that reveals it. Tilt only as needed to keep the box in frame, and note that adjustment rather than pretending nothing else changed. The low shot could delay information; the high shot could answer the question it creates. In a different context those same positions could simply document a container. Never stand on furniture for this comparison. A seated viewpoint and a comfortable standing viewpoint, or a smaller model on a low table, provide enough difference.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A line above the front wall',
        alt: 'Side view: a low camera faces the box wall; a higher camera has a sightline to the message behind it.',
        caption: 'Side elevation, not a floor plan. Rays show the intended visibility difference; icon sizes are schematic.',
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
        'Put the message inside the box and check that both your feet and the table are stable.',
        'Record at a comfortable low height without kneeling in a walking route.',
        'Raise the phone comfortably, keep similar horizontal distance, and record the box interior.',
        'Compare visible surfaces and note any tilt adjustment before describing a possible story effect.',
      ],
      notice: 'The higher viewpoint reveals information that the nearer box wall hid from the low view.',
      troubleshooting: 'If both views show the same interior, use a taller paper wall or a smaller model, not climbing.',
    },
    recall: {
      prompt: 'A table edge hides a toy\'s feet. Why might tilting upward from the same low position fail?',
      hint: 'A direction change does not relocate the lens.',
      answer: 'The edge can still block the sightline from that position. Raise or safely shift the camera to see past it, then aim at the needed detail.',
    },
    quiz: {
      question: 'Which observation best supports using the higher box view for a reveal?',
      options: ['The downward angle suggests a stronger mood.', 'The message becomes visible beyond the front wall.', 'More of the room fits above the box.'],
      correctIndex: 1,
      explanation: 'Visibility answers the scene\'s information need. Mood is contextual, and extra room matters only if it contributes something relevant.',
    },
    takeaway: 'Describe what a height reveals or hides before deciding what it means.',
    sourceNote: 'The inherited Yale reference distinguishes framing height and angle. The box example is original; no camera height has a universal emotional meaning.',
  },
  {
    id: 'cinema-010',
    title: 'Build depth with overlap and separation',
    outcome: 'Create readable near, middle, and far layers without requiring artificial background blur.',
    scene: 'A paper post, small plant, and folded paper hill form a tabletop landscape.',
    sections: [
      {
        title: 'A sharp background can still have depth',
        paragraphs: [
          'Arrange a paper post near the phone, a small plant farther away, and a folded paper hill behind it. An old phone may keep all three acceptably sharp. That does not make the picture unusable. Viewers can infer depth from overlap, changes in apparent size, and the separation between outlines.',
          'The foreground is the near layer; the middle ground contains the plant; the background is the farther hill. These words describe positions relative to the camera, not how important each object must be to the story.',
        ],
      },
      {
        title: 'Overlap can explain or conceal',
        paragraphs: [
          'A post covering a small part of the hill suggests that the post is nearer. But if it covers the entire plant, it removes the subject you wanted to show. Likewise, a hill edge lining up exactly with a stem can merge two separate objects into one confusing outline.',
          'Move the phone sideways and watch the near post shift against the farther objects. This relative shift is parallax. For the same sideways camera movement, nearby objects change viewing direction more than distant ones. You can use that difference to open a gap without moving every prop.',
        ],
      },
      {
        title: 'Use the move to find a stationary view',
        paragraphs: [
          'Start with the post, plant, and hill almost aligned along the camera\'s view. Find a second position a little to the side where the post no longer hides the plant and the hill remains recognizable behind it. Record from each position while stationary; the finished scene does not need a moving camera to benefit from the search.',
          'Focus describes which distances look sharp. Depth of field describes the range that looks acceptably sharp. You need not control either manually here. Readable layers work with the broad sharpness range many ordinary phone views already provide.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Aligned layers',
        alt: 'A phone, near paper post, middle plant, and far paper hill sit along one viewing line.',
        caption: 'Top view: this alignment can hide the plant. Symbols do not depict actual screen sizes.',
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
        caption: 'Compare the unchanged prop coordinates. Moving the camera opens a different sightline.',
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
        'Arrange three layers on a clear table; use a paper plant if no real plant is available.',
        'Record a stationary view in which the near post partly hides the plant.',
        'Shift the phone sideways safely until the plant outline separates, then record while stationary again.',
        'Compare which overlaps explain depth and which remove information. Keep the clearer arrangement.',
      ],
      notice: 'Distinct layers remain readable even when all three are sharp.',
      troubleshooting: 'If outlines still merge, shift a little farther or separate the props; do not add foreground clutter just for depth.',
    },
    recall: {
      prompt: 'A coat hook seems to grow from someone\'s head in a stationary portrait. What should you try?',
      hint: 'Separate outlines by changing their alignment.',
      answer: 'Shift the camera or the consenting subject slightly sideways until the hook separates from the head. Background blur is optional, not the only way to clarify depth.',
    },
    quiz: {
      question: 'The near paper post hides the plant. Which adjustment best tests parallax?',
      options: ['Apply background blur from the same position.', 'Enlarge the same view around the plant.', 'Shift the camera sideways while the props stay fixed.'],
      correctIndex: 2,
      explanation: 'A sideways viewpoint change shifts near and far objects differently. Cropping and blur do not reveal what the post physically concealed.',
    },
    takeaway: 'Use readable overlap and separated outlines to show depth without requiring blur.',
    sourceNote: 'Inherited Yale and shot references support spatial layering and focus terminology. The paper landscape is original and does not assume portrait-video controls.',
  },
  {
    id: 'cinema-011',
    title: 'Steady the phone and allow for stabilization crop',
    outcome: 'Reduce unintended movement while preserving important objects near the frame edges.',
    scene: 'A row of closed books includes a small paper marker near the right edge.',
    sections: [
      {
        title: 'Give the eye a stationary reference',
        paragraphs: [
          'Film a row of closed books with a paper marker beside the last one. Straight book edges make small camera movements easy to spot. If your arms are stretched out, small rotations at the wrists can shift the whole picture. Bring the phone nearer your body and support your forearms on a stable table without covering the lens or microphone.',
          'Keep breathing normally and stop if the position is uncomfortable. The aim is less unintended motion, not a rigid posture or a test of how long you can hold your breath.',
        ],
      },
      {
        title: 'Why steadier footage can have tighter edges',
        paragraphs: [
          'Electronic stabilization estimates unwanted movement and adjusts the recorded view to compensate. To shift the picture without exposing an empty edge, a mode can reserve margins and crop some of the camera image. A marker that seemed safely included in one mode may disappear in another.',
          'This is different from physical support, which reduces movement before the phone records it. Stabilization cannot guarantee removal of every shake, and it does not reliably undo blur already smeared across an individual picture. Phones differ in their optical and electronic systems and available switches.',
        ],
      },
      {
        title: 'Leave room, then check the file',
        paragraphs: [
          'First compare short unsupported and supported recordings of the same books. Judge both the drifting edges and the visibility of the paper marker. If your video mode offers a stabilization control, make a separate comparison changing only that control. Otherwise leave the setting alone and test the ordinary recording.',
          'When the marker is too near an edge, reframe slightly wider or place it farther inside the picture. Do not rely on the live preview alone. The saved file establishes what survived the recording path, including any crop applied when recording began.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Support the hands from below',
        alt: 'A stable table supports forearms, which steady a phone held above them.',
        caption: 'Support relationships are schematic. Keep the phone in your hands rather than balancing a tall stack.',
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
        caption: 'The changed icon position shows a real margin choice, not a simulated stabilization result.',
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
        'Arrange books without private labels and frame a paper marker near, but not touching, the right edge.',
        'Record ten comfortable seconds handheld, then ten with supported forearms.',
        'Replay both and compare edge movement and whether the marker stays visible.',
        'If needed, reframe with more margin and record again; test a stabilization switch only if available.',
      ],
      notice: 'Support can reduce drift while a separate margin check protects the intended frame.',
      troubleshooting: 'If recording still feels unstable, shorten the take and use a comfortable two-handed grip; do not improvise a high mount.',
    },
    recall: {
      prompt: 'A framed certificate loses its corner when recording starts. What would you check?',
      hint: 'Compare recorded edges, not only hand steadiness.',
      answer: 'Check whether the recording mode crops the view, and include more margin before another take. A steadier grip alone cannot restore a corner excluded by framing.',
    },
    quiz: {
      question: 'A stabilization-mode test looks steadier but loses the marker. Which revision addresses both needs?',
      options: ['Keep physical support and frame slightly wider.', 'Remove support to restore the original movement.', 'Move the marker closer to the border.'],
      correctIndex: 0,
      explanation: 'Support reduces motion while a wider frame reserves space for possible cropping. Reintroducing shake does not restore a reliably usable margin.',
    },
    takeaway: 'Steadiness and edge coverage are separate checks on the saved recording.',
    sourceNote: 'Inherited Apple recording references describe model-dependent stabilization options. No toggle, gimbal, or specific crop amount is required for this original exercise.',
  },
  {
    id: 'cinema-012',
    title: 'Choose frame rate for motion, not a cinema badge',
    outcome: 'Distinguish motion sampling from motion blur and choose a readable pan speed.',
    scene: 'A stationary operator pans across a shelf of three paper shapes.',
    sections: [
      {
        title: 'A pan reveals motion problems',
        paragraphs: [
          'Arrange a paper triangle, square, and circle along a shelf. Turn the phone from the triangle to the circle without walking. This horizontal turn is a pan. A quick pass can make the objects difficult to follow even if a paused image looks sharp. Slowing the same turn often makes their positions easier to track.',
          'You do not need a special cinema mode. Start with whichever ordinary recording rate your phone supports and keep the same start and end views for the comparison.',
        ],
      },
      {
        title: 'Pictures per second versus time per picture',
        paragraphs: [
          'Frame rate counts pictures recorded per second, commonly written fps. At an illustrative constant 30 fps, a four-second pan contains 120 pictures and an eight-second pan contains 240. Because the slower pan travels the same angle in twice the time, the movement between successive pictures is smaller.',
          'Shutter time is how long each picture gathers light. Movement during that interval can smear within a picture: motion blur. Frame rate and shutter time are related timing constraints but different controls. A phone may choose shutter time automatically, so selecting a frame rate does not fully control blur.',
        ],
      },
      {
        title: 'Use the result, not the reputation',
        paragraphs: [
          'A 24 fps setting supplies fewer motion samples per second than 30 fps; it does not create careful lighting or a clear performance. Faster recording also does not automatically mean slow motion: playback must use a slower rate relative to capture for that effect.',
          'For this test, hold one second before the pan and one after it. The four-second movement makes a six-second take; the eight-second movement makes a ten-second take. Replay normally and choose the movement you can follow. Treat those timings as practice examples, not universal limits for pans or promises about a phone\'s actual variable frame timing.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Keep the same beginning and ending',
        alt: 'Hold on the triangle, pan across the square, then hold on the circle.',
        caption: 'Use this order for both takes. Diagram spacing is not proportional to time.',
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
        caption: 'Hypothetical constant 30 fps; the stationary handles are excluded from these counts.',
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
        'Place triangle, square, and circle in a private clear view. Sit or stand on stable flooring.',
        'At one supported rate, hold briefly, pan between endpoints in about four seconds, then hold again.',
        'Repeat with the same endpoints over about eight seconds. Turn from a fixed position without walking.',
        'Replay at normal speed and compare readability; write down any displayed rate rather than assuming 30 fps.',
      ],
      notice: 'The slower traverse changes how easily the same shapes can be followed.',
      troubleshooting: 'If both takes look smeared, add available light and move more slowly; automatic shutter choices may be contributing.',
    },
    recall: {
      prompt: 'A slow hand gesture is clear but a fast pan judders at the same rate. What can you change without new controls?',
      hint: 'Reduce motion between samples.',
      answer: 'Slow or shorten the pan while keeping the rate unchanged. A smaller change between pictures can improve readability without requiring a different camera mode.',
    },
    quiz: {
      question: 'A paused pan frame is sharp, but normal playback jumps between positions. Which first test targets that issue?',
      options: ['Increase exposure while keeping the pan speed.', 'Repeat the same pan more slowly.', 'Choose a tighter crop of the same file.'],
      correctIndex: 1,
      explanation: 'Slower movement reduces the displacement between samples. Brightness and cropping do not add missing motion positions to the existing recording.',
    },
    takeaway: 'Frame rate samples motion; shutter time affects blur; movement speed still needs a deliberate choice.',
    sourceNote: 'Inherited Apple and Yale references support timing concepts. All counts assume constant 30 fps; the practice works at the phone\'s available ordinary rate.',
  },
  {
    id: 'cinema-013',
    title: 'Define a visible change for the scene',
    outcome: 'Plan a short scene whose final action shows a changed decision.',
    scene: 'A book being packed is left behind after a homemade reminder is discovered.',
    sections: [
      {
        title: 'Start with an intention we can see',
        paragraphs: [
          'An open bag sits beside a book. Your hand lifts the book toward the bag, notices a protruding slip, and opens it. The slip reads LEAVE FOR JO. After reading, you place the book away from the bag instead of packing it. That is a complete small change: the initial action points toward taking the book; the final action points toward leaving it.',
          'All writing is invented, and only your hands need appear. A scene does not need a real disagreement, another performer, or a valuable prop to make a decision visible.',
        ],
      },
      {
        title: 'Connect the want, obstacle, and response',
        paragraphs: [
          'A want is what someone is trying to do. An obstacle interrupts that attempt. A change is the new action, information, or situation that follows. Here the reminder interrupts packing because taking the book would conflict with leaving it for Jo. The note matters through its effect on the next action, not simply because it receives a close-up.',
          'If the hand reads the slip and then packs exactly as before, viewers may notice new information but no changed plan. If the book is left behind before the note appears, the intended cause becomes harder to infer.',
        ],
      },
      {
        title: 'Make the consequence observable',
        paragraphs: [
          'Hold the note long enough to read, then let the book land clearly away from the bag. The seven-second diagram below is only a first timing sketch; adjust it to the actual lettering and movement. Play the take without sound and describe its before and after in one sentence.',
          'Want, obstacle, and change are a beginner planning method, not a definition of all cinema. Observational or experimental work can organize attention differently. For this exercise, a visible consequence supplies a practical test that an attractive image alone cannot answer: what became different because the discovery happened?',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'From packing to leaving',
        alt: 'A book moves toward a bag, a note is revealed and read, then the book is left aside.',
        caption: 'Original seven-second sketch. Durations are adjustable and spacing is not a proportional time scale.',
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
        'Place the open bag and book apart on a clear table; insert the invented reminder visibly.',
        'Rehearse lifting, discovering, reading, and setting the book aside with your free hand.',
        'Support your filming forearm and record one stationary take with the note and final landing visible.',
        'Replay without sound. Write what the hand intended first and what it chose after the discovery.',
      ],
      notice: 'The final placement gives evidence of a different plan, rather than only a pause.',
      troubleshooting: 'If the decision is unclear, separate the bag and final landing position or hold the reminder longer.',
    },
    recall: {
      prompt: 'Someone discovers an empty snack tin while packing. What next action could make a changed plan visible?',
      hint: 'Show a different choice, not only a facial expression.',
      answer: 'They could close the empty tin and pack a piece of fruit instead. The replacement action shows how the discovery altered the original plan.',
    },
    quiz: {
      question: 'Which ending most clearly shows that the reminder changed the packing decision?',
      options: ['Show the reminder, then hold on the open bag.', 'Place the book away from the bag after reading.', 'Return to packing while keeping the reminder visible.'],
      correctIndex: 1,
      explanation: 'The changed placement supplies a visible consequence. A view of the bag or continued packing leaves that specific decision unestablished.',
    },
    takeaway: 'Connect a visible intention to an interruption and an observable consequence.',
    sourceNote: 'Inherited directing and shot-planning references support practical scene design. The book story is original; its structure and timings are not universal film rules.',
  },
  {
    id: 'cinema-014',
    title: 'Block movement before choosing camera moves',
    outcome: 'Arrange performers or stand-ins so an important exchange remains visible from the camera.',
    scene: 'Two folded paper stand-ins rehearse a note handoff across a tabletop.',
    sections: [
      {
        title: 'An exchange can disappear behind a body',
        paragraphs: [
          'Fold two paper stand-ins labeled Giver and Receiver. Put them in a line facing the phone, with Giver nearest. Slide a tiny note between them. From above, the exchange is obvious. From the lower camera view, the nearer stand-in can hide it completely. The plan contains the action, but the recording does not.',
          'This difference is why rehearsing only from your own convenient viewing position is insufficient. Check the view from the lens that will record the important moment.',
        ],
      },
      {
        title: 'Blocking arranges the action',
        paragraphs: [
          'Blocking means where performers stand, move, and interact with objects. Staging also considers how those relationships appear to the camera. Neither term requires a complicated moving shot. A small position change can open a sightline more directly than asking the camera to chase an obscured hand.',
          'Spread the stand-ins to opposite sides of a shared landing point. Let the note cross the visible gap. Their positions now explain who gives, who receives, and what changes hands. If a performer crosses in front, decide whether the concealment is intentional; otherwise revise the arrangement before recording.',
        ],
      },
      {
        title: 'Keep movement attached to a reason',
        paragraphs: [
          'The giver reaches because they want to deliver the note. The receiver moves because they need to accept it. Those reasons help you decide where each movement starts and finishes instead of adding motion merely to keep the image busy.',
          'Make a top-view sketch, then test it at recording height with paper figures. The sketch is a communication aid, not proof that hands and faces will be visible in the real space. For a later rehearsal with people, agree on movement and contact first, keep exits clear, and adapt the positions to comfortable movement. No performer needs to squeeze past an unsafe camera setup.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A line that conceals the exchange',
        alt: 'Camera, giver, and receiver are aligned, with the giver blocking the receiver.',
        caption: 'Top view: the camera must look past the nearer stand-in. This is a schematic rehearsal layout.',
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
        caption: 'The same camera position now sees the exchange between the stand-ins.',
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
        'Sketch the camera, giver, receiver, and note route from above; use no private room details.',
        'Arrange the stand-ins in a line and inspect the handoff from the intended low camera position.',
        'Spread them around a visible gap, keeping the camera position fixed, and rehearse the note route.',
        'Record or photograph both arrangements and mark where the exchange becomes readable.',
      ],
      notice: 'Repositioning the stand-ins reveals an event that a higher-resolution recording could not uncover.',
      troubleshooting: 'If your moving hand hides the note, change its approach or use sequential paper positions rather than forcing the movement.',
    },
    recall: {
      prompt: 'Two friends study a map, but one shoulder hides the pointing finger. What should rehearsal test first?',
      hint: 'Inspect the important action from the lens position.',
      answer: 'Offset a performer or reposition the map so the pointing action appears through a gap. Recheck the camera view before adding a move to follow it.',
    },
    quiz: {
      question: 'The note itself must be seen, but the nearer stand-in hides it. Which first revision targets the cause?',
      options: ['Offset the stand-in and recheck the handoff.', 'Increase resolution and crop closer later.', 'Replace the handoff with a receiver-only view.'],
      correctIndex: 0,
      explanation: 'Changing the obstruction opens a sightline. More pixels cannot reveal hidden action, and a receiver-only view does not necessarily show the required exchange.',
    },
    takeaway: 'Arrange readable positions and motivated movement before adding camera choreography.',
    sourceNote: 'The inherited blocking reference supplies terminology. These original paper layouts do not reproduce a filmmaker\'s scene or prescribe performer movement without consent.',
  },
  {
    id: 'cinema-015',
    title: 'Map eyelines with the 180-degree convention',
    outcome: 'Plan camera positions that preserve a readable left-right relationship across conversation views.',
    scene: 'Two arrow-marked paper figures face each other across a table.',
    sections: [
      {
        title: 'Give the conversation a shared map',
        paragraphs: [
          'Place paper figure A on the left of a table and B on the right, with drawn arrows showing them looking toward each other. From your first shared view, A looks right and B looks left. If the next views preserve those directions, viewers can connect the separate pictures into one conversation.',
          'An eyeline is the direction a person appears to look. A reverse view shows the other participant from another camera position. Neither requires a second phone: record one position, then move between takes.',
        ],
      },
      {
        title: 'Choose a side of the connecting line',
        paragraphs: [
          'Imagine a line connecting A and B. This is the conversation axis. Keeping the camera positions on one side of it usually preserves their left-right screen relationship. The 180-degree convention refers to this half of the surrounding space, not a requirement that two camera angles differ by exactly 180 degrees.',
          'From the opposite side, the shared view reverses A and B on screen. Mixing that view with the earlier singles can suggest that the participants look away from each other. Their actual gaze and partner height still matter; a correct floor position cannot fix eyes aimed at the wrong place.',
        ],
      },
      {
        title: 'Make a crossing understandable',
        paragraphs: [
          'Try two views from below the line in the diagram, then one from above it. Compare the direction of each paper figure rather than assuming that a familiar room will explain itself after a cut. A cut is the join between selected parts of different recordings.',
          'Crossing the axis is not forbidden. A visible camera move or a new shared view can establish the changed geography before returning to separate views. For a first exercise, keep one side so the effect is easy to inspect. Paper stand-ins let you learn the convention without recording anyone else or asking them to hold an uncomfortable pose.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two views on the same side',
        alt: 'A and B define a horizontal axis; two camera positions sit below it and a crossing position sits above.',
        caption: 'Top view of alternative takes. The upper camera crosses the axis; the lower pair does not.',
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
        'Label figures A and B, mark their gaze toward each other, and draw their connecting axis.',
        'Record two views from different positions on the same side without rotating the figures.',
        'From a safe position on the other side, record a third view with the phone upright.',
        'Compare screen positions and gaze directions. Sketch which pair preserves the original conversation relationship.',
      ],
      notice: 'Same-side views support one map; the opposite-side view changes that map.',
      troubleshooting: 'If direction is hard to judge, include both labeled figures in each test before trying tighter single views.',
    },
    recall: {
      prompt: 'Two toy animals trade a greeting across a path. How would you plan matching separate views?',
      hint: 'Draw the line between the participants first.',
      answer: 'Mark their connecting axis and put both camera positions on one side. Check that their apparent looks face each other at compatible heights.',
    },
    quiz: {
      question: 'You need to cross the established axis without confusing the location. Which plan best explains the new geography?',
      options: ['Match only the size of each separate face.', 'Keep the same height but switch sides unseen.', 'Introduce a shared view establishing the new relationship.'],
      correctIndex: 2,
      explanation: 'A shared view can orient the viewer to the changed map. Matching size or height alone does not explain a reversal of screen direction.',
    },
    takeaway: 'Use the axis convention to preserve readable geography, then establish any deliberate change.',
    sourceNote: 'Inherited editing and blocking references support continuity conventions. This original diagram teaches a useful convention, not an unbreakable artistic law.',
  },
  {
    id: 'cinema-016',
    title: 'Write the information job beside each shot',
    outcome: 'Build a short shot list in which each view supplies a distinct useful fact.',
    scene: 'A loose FOR JO label is returned beside a small gift plant.',
    sections: [
      {
        title: 'List what the viewer needs to learn',
        paragraphs: [
          'A little plant and a loose paper label sit apart on a table. The label reads FOR JO. Your hand returns it beside the plant. Three useful questions suggest three possible views: where are the objects, what does the label say, and what does the person do with it? A list that merely says wide, close, medium leaves those reasons unstated.',
          'A shot list is a plan for the views you intend to record. It should help you make the scene understandable, not display every camera technique you have learned.',
        ],
      },
      {
        title: 'Describe enough to repeat the setup',
        paragraphs: [
          'For each entry, write subject, shot size, camera position, action, and information job. For example: plant and label; wide; table end; both still; establish their separation. Then: label; close; nearer the same side; hold still; reveal the recipient. Finally: hand and plant; medium; table end; return label; show the connection being restored.',
          'The position matters because another angle can change which hand or object blocks the view. The action matters because a framing photograph cannot prove the complete movement will fit. Rehearse before treating the list as finished.',
        ],
      },
      {
        title: 'Remove duplication without losing context',
        paragraphs: [
          'Suppose two close angles both show FOR JO equally clearly and add no different action or response. For a concise information-focused scene, they are alternatives rather than two compulsory shots. Keep the clearer one and spend the next setup on the return that neither close view covers.',
          'Try two seconds of context, three for reading, and three for returning the label: an eight-second sketch. Adjust those suggested durations to actual readability. A film can repeat an image for rhythm or another deliberate purpose, but name that purpose instead of assuming extra footage automatically improves the scene. A useful list protects necessary context while reducing redundant work.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Objects and destination',
        alt: 'A loose label sits left of a plant; a landing point lies beside the plant with the camera below.',
        caption: 'Schematic table plan. The return must be visible from the planned camera position.',
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
        caption: 'Proposed durations total eight seconds; equal spacing does not imply equal time.',
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
        'Arrange the plant and invented FOR JO label without private documents or unstable containers nearby.',
        'Write three entries with subject, size, position, action, and a different information job.',
        'Make a framing photo or drawing for each and rehearse the complete return in the medium view.',
        'Remove or revise a duplicate job, checking that location, lettering, and final placement remain understandable.',
      ],
      notice: 'Every retained view has a reason you can state without naming a camera technique.',
      troubleshooting: 'If a close view loses context, retain a shared view showing the objects together rather than adding unrelated angles.',
    },
    recall: {
      prompt: 'A button falls off a coat. What three information jobs could organize a short repair decision?',
      hint: 'Separate context, relevant detail, and response.',
      answer: 'Show the coat, make the missing button readable, then show the decision to set the coat aside for repair. Each view answers a different question.',
    },
    quiz: {
      question: 'Two close angles repeat the same readable label in a deliberately concise scene. What should the list do?',
      options: ['Keep both and shorten the essential return.', 'Treat them as alternatives unless another purpose is named.', 'Replace both with an equally close plant detail.'],
      correctIndex: 1,
      explanation: 'Alternatives offer a choice without forcing duplication. Removing needed action or substituting an unrelated detail does not improve the information sequence.',
    },
    takeaway: 'Write the information job beside the framing, and justify repeated information deliberately.',
    sourceNote: 'The inherited shot-list reference supports planning fields. This original plant example and its suggested timing are not a universal editing template.',
  },
  {
    id: 'cinema-017',
    title: 'Record coverage with overlapping action',
    outcome: 'Record complete shared movement in two views so a later cut has usable choices.',
    scene: 'A right hand lifts an empty plastic drinking cup between two paper marks.',
    sections: [
      {
        title: 'Two views do not guarantee a join',
        paragraphs: [
          'Your right hand lifts an empty plastic cup from one paper mark and sets it on another. A wider take shows the reach and lift. A close take begins only after the cup is already at its destination. Although you have two sizes, you have no shared mid-lift moment for joining them while that movement continues.',
          'Coverage means recording views that offer useful choices when assembling a scene. With one phone, the action must be repeated for each view. The recordings are separate performances of the same intended event, not simultaneous evidence of one instant.',
        ],
      },
      {
        title: 'Repeat the relevant movement in full',
        paragraphs: [
          'Record stillness, reach and contact, lift, placement, and stillness again in both views. Now you can choose to leave the wider view while the cup rises and enter the close view at a compatible point. A cut joins selected parts of recordings; it cannot manufacture a phase absent from every take.',
          'The extra moments before and after the main action are called handles. They give room to delay the start or let the result settle. They are not wasted merely because the final scene might use only part of them.',
        ],
      },
      {
        title: 'Match the event, not just the object',
        paragraphs: [
          'Use the same hand, starting mark, cup orientation, and destination for each take. A small drawn dot on a removable paper sleeve can help you track orientation without changing the cup. Compare the cup at a shared halfway point in the lift, not simply wherever both files happen to start.',
          'The diagram proposes eight seconds per take, including brief handles. That is a rehearsal plan, not a required duration. If the action becomes stiff while counting, rehearse naturally and keep enough space around it. Two complete purposeful views are more useful here than many fragments that omit the same important movement.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Record this whole sequence in both views',
        alt: 'Stillness, reach, lift, placement, and final stillness form the repeated cup action.',
        caption: 'Suggested 1 + 2 + 2 + 2 + 1 seconds equals eight per take. Spacing is not proportional.',
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
        'Put both marks within easy reach on a stable table; keep liquids and breakable glass out.',
        'Support the filming arm and record a wider view of the complete right-handed action with stillness around it.',
        'Reset the cup and record the complete action again from a closer, reliably focused view.',
        'Replay both and pause at a shared mid-lift position. Note a possible join without needing an editor.',
      ],
      notice: 'Both views contain the same action phases, giving more than one possible joining point.',
      troubleshooting: 'If the close frame loses contact or landing, widen it and repeat the full movement rather than collecting another fragment.',
    },
    recall: {
      prompt: 'A letter-insertion close-up begins after the letter disappears into an envelope. What coverage is missing?',
      hint: 'Look for a shared action phase.',
      answer: 'The close view needs the approach and insertion, not only the result. Repeat the relevant full action with brief handles so it can join the wider view.',
    },
    quiz: {
      question: 'You must show an uninterrupted lift, but the close take contains only the landing. Which fix creates the needed option?',
      options: ['Trim the wider take to finish before contact.', 'Add a view of the empty starting mark.', 'Repeat the close take with the complete lift.'],
      correctIndex: 2,
      explanation: 'Repeating supplies the missing overlap. Trimming cannot create it, and an empty-mark cutaway avoids rather than shows the required continuous movement.',
    },
    takeaway: 'Record overlapping phases of the same action, plus room before and after.',
    sourceNote: 'Inherited shot and planning references support coverage concepts. The cup action and timing are original examples, not mandatory handle lengths or editing rules.',
  },
  {
    id: 'cinema-018',
    title: 'Track the few continuity details that matter',
    outcome: 'Reset action-relevant prop states so separate takes can represent the same event.',
    scene: 'A homemade envelope opens to reveal a HELLO card, with an arrow marking its orientation.',
    sections: [
      {
        title: 'The envelope should not change by accident',
        paragraphs: [
          'Fold a paper envelope and put a card reading HELLO inside. Draw an arrow on the envelope pointing toward the right side of your setup. Your right hand opens the flap and reveals the card. After moving the camera, it is easy to reset the envelope with its arrow pointing the other way or to use the other hand without noticing.',
          'Each take may look reasonable alone. At a join during the opening, however, the change can make the flap, hand, or card seem to jump. Viewers are tracking one event, not your separate recording sessions.',
        ],
      },
      {
        title: 'Record state at a story moment',
        paragraphs: [
          'Continuity means keeping relationships sufficiently consistent for the intended sequence. A state is how something is arranged at a particular point: envelope closed, flap raised, or card partly visible. These states should change as the action advances. Matching continuity does not mean keeping the envelope closed in every shot.',
          'Write a short reset note: right hand opens; arrow points right in the setup; card starts hidden. A reference photo of your own props can preserve these details. Keep private documents, screens, reflections, and identifying information outside that photograph.',
        ],
      },
      {
        title: 'Compare the shared moment',
        paragraphs: [
          'When comparing angles, choose the same stage of the action. If one view begins before opening and another begins with the flap already raised, their first frames need not match. The possible join should match the hand, orientation, and amount of visible card appropriate to that moment.',
          'Use the proposed one-second start, two-second opening, and two-second reveal only as a five-second rehearsal sketch. Prioritize details the audience follows. A changed background scrap may matter less than the card appearing before the flap opens. Sometimes a stronger performance justifies a small mismatch; first identify it deliberately rather than confusing it with an unnoticed reset error.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Three different states of one event',
        alt: 'Closed envelope, raised flap, then partly visible HELLO card, always opened by the right hand.',
        caption: 'Original five-second sketch. Match the corresponding state across views, not every take\'s first frame.',
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
        'Prepare the invented HELLO card and arrow-marked envelope; photograph only this harmless starting arrangement.',
        'Write the opening hand, arrow direction, and starting card visibility beside the reference.',
        'Record an opening, reset from the reference, then record the same action from another safe position.',
        'Pause both at flap-raised stage and compare action details before inspecting the background.',
      ],
      notice: 'A reset record preserves the details needed for a shared story moment.',
      troubleshooting: 'If the card state differs, reset to the correct phase and repeat; do not force unrelated moments to match.',
    },
    recall: {
      prompt: 'A biscuit vanishes between two plate shots. How can you tell a continuity error from a story change?',
      hint: 'Locate each shot before or after the action.',
      answer: 'Check whether taking the biscuit belongs between those moments. Its absence is appropriate afterward, but a mismatch if both shots represent the same earlier state.',
    },
    quiz: {
      question: 'Which reference best helps join two envelope-opening views at the raised-flap moment?',
      options: ['Opening hand, envelope orientation, and current card visibility.', 'Identical first frames even if the takes begin at different stages.', 'Matching brightness and shot size without checking the prop state.'],
      correctIndex: 0,
      explanation: 'The action-relevant state should match at the chosen join. Start frames and image style alone do not establish that both views represent the same moment.',
    },
    takeaway: 'Track the state the story needs at the cut, not every background detail.',
    sourceNote: 'Inherited editing and shot-planning references support continuity practice. This original envelope sequence illustrates prioritization, not a demand for pixel-identical takes.',
  },
  {
    id: 'cinema-019',
    title: 'Give a performer something playable to do',
    outcome: 'Replace a vague emotional demand with a safe, concrete action toward someone.',
    scene: 'An original drawing is offered to an imagined visitor with two different intentions.',
    sections: [
      {
        title: 'Give the words a task',
        paragraphs: [
          'Put your own sketch on a table and say, Have a look at this. In one version, you want to welcome an imagined visitor into sharing the drawing. In another, you want them to wait while you finish a corner. Keep the words unchanged. The difference lies in what you are trying to accomplish with the invitation.',
          'A playable direction gives a performer something to attempt: invite, reassure, delay, or persuade within an agreed fictional situation. It does not demand that they manufacture a particular feeling on command.',
        ],
      },
      {
        title: 'Let intention affect observable behavior',
        paragraphs: [
          'When welcoming, you might make the whole page available and leave space for the visitor to respond. When delaying, you might draw attention to an unfinished detail and keep talking about it. These are possible choices, not required gestures. The performer can find another action that serves the same objective.',
          'Compare pauses, attention, and how the drawing is offered rather than scoring how emotional a face looks. An instruction such as be more interesting gives no clear event to try. A specific task creates a shared basis for discussing whether the fictional interaction became readable.',
        ],
      },
      {
        title: 'Keep the method collaborative',
        paragraphs: [
          'Action-based direction is one working method, not the only valid approach to acting. If working with someone, explain the circumstances, agree on contact and recording boundaries, and accept an alternative. The invented exchange below shows how a performer can choose a no-contact version without abandoning the scene\'s purpose.',
          'For solo practice, frame your hands and drawing or make two audio takes in a private space. No front camera, second performer, or public upload is necessary. Do not use surprise touching, personal trauma, or real distress to force a response. The rehearsal tests a fictional action, not a person\'s worth or their private emotional history.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A direction that permits an alternative',
        alt: 'An invented director-performer exchange sets an invitation objective and agrees on no contact.',
        caption: 'Original rehearsal dialogue, not a quotation from an actor or filmmaker.',
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
        'Choose the line Have a look at this and frame only your hands and invented drawing.',
        'Record a version aimed at welcoming an imagined visitor; keep other people and voices out.',
        'Repeat the same words while trying to keep that imagined visitor waiting for the unfinished detail.',
        'Compare pauses and attention. Name an observable difference without judging your appearance or claiming a real emotion.',
      ],
      notice: 'The same words can serve different fictional actions through timing and attention.',
      troubleshooting: 'If the versions feel identical, make the objective more specific, such as invite them to inspect one corner.',
    },
    recall: {
      prompt: 'A fictional picnic host receives the note be cheerful. What playable alternative could help?',
      hint: 'Give the host something to achieve with the guest.',
      answer: 'Try inviting the guest to choose a comfortable place. That supplies an action to attempt while leaving expression and timing open to the performer.',
    },
    quiz: {
      question: 'Which note supplies an objective rather than prescribing the appearance of a result?',
      options: ['Smile more warmly through the whole line.', 'Make the sentence shorter and quieter.', 'Help the visitor decide to stay and inspect the drawing.'],
      correctIndex: 2,
      explanation: 'The objective names an interaction to attempt. Expression and delivery notes can be useful, but alone they do not explain the character\'s task.',
    },
    takeaway: 'Offer a concrete fictional objective, then allow safe choices about how to attempt it.',
    sourceNote: 'Inherited acting and consent references support collaborative practice. The dialogue and exercise are original; no emotional result or universally superior acting method is claimed.',
  },
  {
    id: 'cinema-020',
    title: 'Change one direction between rehearsal takes',
    outcome: 'Give one observable rehearsal note and compare its effect without changing everything else.',
    scene: 'Hands unfold a homemade MEET AT SIX card, hold it, and fold it again.',
    sections: [
      {
        title: 'Name the problem visible in playback',
        paragraphs: [
          'Write MEET AT SIX on a folded card. Record your hands opening it, holding it briefly, and closing it. During playback, the words seem to disappear before you finish reading. Pause the file. If the letters are clear when paused, the problem is likely viewing time rather than tiny lettering or poor focus.',
          'That observation supports a specific note: keep the card open longer before refolding. A demand to make the moment more dramatic leaves the performer guessing which part of the action needs to change.',
        ],
      },
      {
        title: 'Keep the comparison interpretable',
        paragraphs: [
          'Suppose the first sketch uses one second to open, one to hold, and one to close: three seconds. Change only the middle hold to three seconds for a five-second version. Keep the camera position, lettering, opening speed, and closing speed similar. You can now look for the effect of the longer hold instead of trying to separate five simultaneous changes.',
          'This is a rehearsal heuristic, not a controlled experiment establishing what every viewer needs. Your familiarity with the words makes your own reading easier, so do not turn the three-second hold into a universal reading-time claim.',
        ],
      },
      {
        title: 'Give feedback about the scene, not the person',
        paragraphs: [
          'Describe the observation, give one workable adjustment, and explain its job: the card closes before its message is readable; keep it open through a longer pause so the information can land. A performer can suggest another comfortable way to achieve that goal. The next take tests the note, not their talent or cooperation.',
          'If the paused letters are blurry, more holding time does not solve the underlying problem. First improve focus or framing, then run the timing comparison. Real productions sometimes coordinate several changes, but this beginner exercise stops after one useful comparison rather than demanding endless takes or proving that the second version must be better.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Only the middle hold changes',
        alt: 'Opening and closing each last one second; the open-card hold changes from one to three seconds.',
        caption: 'Illustrative takes total three and five seconds. The diagram shows order, not proportional duration.',
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
        'Write the invented message and find a supported camera position where the open card is readable.',
        'Record one opening, short hold, and closing; replay and inspect a paused open-card frame.',
        'If paused lettering is clear, record again with only the open hold lengthened.',
        'Compare normal playback, write whether readability improved, and stop after this comparison.',
      ],
      notice: 'You can connect a specific timing change to an observed reading opportunity.',
      troubleshooting: 'If the paused card is unclear, fix distance or lettering size first rather than asking for a longer performance.',
    },
    recall: {
      prompt: 'A hand covers a toy\'s destination during a rehearsal. What single direction would test that problem?',
      hint: 'Change the action causing the obstruction.',
      answer: 'Ask the hand to approach from the side while keeping camera and props fixed. Check whether the destination becomes visible before adding timing or lighting changes.',
    },
    quiz: {
      question: 'The message is crisp when paused but too brief during playback. Which note isolates the likely issue?',
      options: ['Rewrite the letters larger and use a closer camera.', 'Hold the open card longer without changing its placement.', 'Reduce background contrast and change the opening speed.'],
      correctIndex: 1,
      explanation: 'The longer hold targets viewing time while preserving the comparison. The other revisions combine changes or target a problem the paused image did not show.',
    },
    takeaway: 'Make one observable adjustment and judge what it changes, not who performed it.',
    sourceNote: 'The inherited acting reference supports practical direction. This original timing comparison is a rehearsal method, not an experimentally validated reading threshold.',
  },
  {
    id: 'cinema-021',
    title: 'Design a look, an object, and a response',
    outcome: 'Connect a staged look to a plausible object view without claiming to prove real feelings.',
    scene: 'A downward look is paired with either a THANK YOU card or a blank envelope on a low table.',
    sections: [
      {
        title: 'A look raises a question',
        paragraphs: [
          'In a staged scene, someone glances down toward a low table. Next comes a homemade card reading THANK YOU, then a quiet pause from the same person. The object supplies a possible answer to what they were looking at. Try the same look and pause around a blank envelope instead. The unchanged expression may invite a different interpretation because its surrounding information changed.',
          'Use yourself or drawn paper faces, not an unsuspecting person\'s real reaction. These are fictional combinations, not evidence that someone felt grateful, disappointed, or anything else.',
        ],
      },
      {
        title: 'Connect the directions as well as the shots',
        paragraphs: [
          'An eyeline is the apparent direction of a look. A point-of-view shot places the camera approximately where the character\'s eyes would be to show their view. A related object insert can be closer or differently framed without literally reproducing that viewpoint. Either can work, but do not confuse the two.',
          'If the look goes down toward a low table, an object view aimed down from a compatible height supports that relationship. A level view of an object above the person suggests a different position. Check height and direction rather than assuming that any close-up automatically fits after any glance.',
        ],
      },
      {
        title: 'Leave room for an interpretation',
        paragraphs: [
          'A first sketch could give one second to the look, two to the card, and two to the response: five seconds total. Adjust the durations for readability rather than treating them as psychological measurements. The return allows a response to develop; it need not demand an exaggerated face.',
          'You can inspect the construction by playing three separate files in order or arranging paper panels. No editing software is required. Label the result as staged fiction. An edit can suggest a relationship that was not present when the recordings were made, which is precisely why it must not be used to misrepresent a real person\'s response to an event they did not witness.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Match a downward look',
        alt: 'Side elevation shows an eye and camera above a low card, with both directions aimed downward.',
        caption: 'Schematic compatible height and direction. This insert is not a measured reproduction of the character\'s exact viewpoint.',
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
        caption: 'Original five-second sketch, not an experiment measuring emotion or a proportional timeline.',
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
        'Draw a neutral face with a downward-right gaze and a second response face; use only original drawings.',
        'Photograph the faces, then the THANK YOU card from a compatible downward angle.',
        'View look, card, response in order. Replace only the card photograph with a blank-envelope view.',
        'Write a possible reading of each sequence and label both as interpretations of staged fiction.',
      ],
      notice: 'Changing the object context changes a possible reading without changing the surrounding faces.',
      troubleshooting: 'If the space feels inconsistent, align the drawn gaze and object height before increasing the reaction.',
    },
    recall: {
      prompt: 'A character looks up at a shelf, but the next view looks down at floor objects. What needs checking?',
      hint: 'Compare the implied eye height and direction.',
      answer: 'The object view may imply a different location. Choose a shelf view compatible with the upward look, unless a deliberately different relationship is clearly established.',
    },
    quiz: {
      question: 'To make a table insert a literal point-of-view shot, what matters beyond matching its duration?',
      options: ['Approximate eye position and viewing direction.', 'Matching only the size of the written words.', 'Using the same pause after every object.'],
      correctIndex: 0,
      explanation: 'Point of view concerns where the view originates and aims. Text size and timing can aid readability but do not establish the character\'s optical viewpoint.',
    },
    takeaway: 'A look and object can suggest a relationship; context is not proof of real emotion.',
    sourceNote: 'Inherited shot and editing references support this construction. All example images are original drawings or self-performance; inferred reactions remain interpretations, not psychological evidence.',
  },
  {
    id: 'cinema-022',
    title: 'Reveal information from outside the frame',
    outcome: 'Plan when a view reveals an unseen source instead of adding movement without a purpose.',
    scene: 'An empty drawn square, a rustling paper parcel, and a seated pan to the right.',
    sections: [
      {
        title: 'The unseen space still belongs to the scene',
        paragraphs: [
          'Begin on an empty square drawn on a sheet of paper. Just outside the right edge of the recording, a folded paper parcel rustles. After the sound, turn the phone to reveal it. The empty square and rustle create a question; the new view answers where that sound came from.',
          'Offscreen space is the part of the scene outside the picture boundaries. It is not necessarily far away. A harmless object just beyond an edge can supply an unseen cause without a large location, another performer, or a frightening surprise.',
        ],
      },
      {
        title: 'A pan changes what is included',
        paragraphs: [
          'A pan turns the camera horizontally from a fixed position. It changes the direction of the frame, unlike carrying the phone through the room. Sketch both the start and end views so you know the parcel is initially excluded and eventually clear. A wider opening view that already shows it removes the same information gap.',
          'Sound can prepare the reveal by suggesting a source nearby. It does not need to dictate an emotion. Keep the rustle gentle and record only your own staged action in a private, quiet space, without uninvolved voices.',
        ],
      },
      {
        title: 'Choose the moment of the answer',
        paragraphs: [
          'Try two seconds on the empty square, one second for the rustle, and three seconds to pan and settle: a six-second rehearsal plan. In a second version, reveal the parcel earlier. Viewers then know its source sooner, so the sound has a different information role. The change is in what they can know at each moment, not simply whether the camera moves.',
          'Support the filming forearm and turn comfortably while seated or standing still. Do not walk backward or hide where the floor changes. If you cannot make a comfortable pan, two stationary views can test the same information order. The reveal matters more than performing a difficult movement.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Start left, reveal right',
        alt: 'A fixed camera can aim left at an empty square or right at a paper parcel.',
        caption: 'Top view. Arrows show starting and ending viewing directions, not a path for walking.',
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
        caption: 'Suggested six-second sequence. Equal spacing is not a proportional clock.',
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
        'Place the square left and parcel right; check that both can be reached from one stable position.',
        'Frame only the square, rustle the parcel gently with your free hand, then pan right to reveal it.',
        'Record a second version that reveals the parcel earlier, keeping the same harmless action.',
        'Replay with sound and note when the rustle\'s source becomes understandable in each version.',
      ],
      notice: 'The timing of the reveal changes when an unseen cause becomes a visible explanation.',
      troubleshooting: 'If the parcel is visible at the start, separate the props or tighten the opening view without losing the safe end position.',
    },
    recall: {
      prompt: 'How could a fixed shot reveal an unseen visitor without moving the camera?',
      hint: 'The subject can cross the frame boundary instead.',
      answer: 'In agreed fiction, a hand or harmless prop could enter after an offscreen cue. The entry reveals information while the camera remains stationary.',
    },
    quiz: {
      question: 'Which change most directly delays learning the rustle\'s source?',
      options: ['Keep the parcel outside the frame until after the sound.', 'Include the parcel in a wider opening view.', 'Pan faster toward the already planned ending.'],
      correctIndex: 0,
      explanation: 'Excluding the source preserves the question. Showing it initially or reaching it sooner makes the answer available earlier.',
    },
    takeaway: 'Plan the cue and the moment of explanation; movement is only one way to reveal.',
    sourceNote: 'Inherited cinematography and sound references support offscreen space and pans. The parcel exercise is original and uses no borrowed sound or staged public disturbance.',
  },
  {
    id: 'cinema-023',
    title: 'Agree on recording and sharing separately',
    outcome: 'Describe a recording\'s scope and obtain a separate decision about any wider sharing.',
    scene: 'A fictional invitation to film paper folding separates private rehearsal from public posting.',
    sections: [
      {
        title: 'Permission needs a specific proposal',
        paragraphs: [
          'A friend agrees to a five-minute recording of their hands folding paper, for the two of you to review today. That does not answer whether you may show it to a hobby group or post it publicly. Recording and sharing are different decisions because they expose the person to different audiences and possible copies.',
          'Before involving anyone, describe the fictional action, what picture and sound will capture, who can see the files, and when you intend to delete them. Give a real option to decline or choose an unrecorded paper rehearsal.',
        ],
      },
      {
        title: 'Check what you can actually promise',
        paragraphs: [
          'Retention means how long material is kept. Distribution means who receives or can access it. A phone may automatically back up media or use a shared album. Check those arrangements before promising that a recording will remain only on one device. If you cannot confirm the storage behavior, use an unrecorded plan rather than making a promise you cannot verify.',
          'Hands-only framing does not automatically protect identity: voices, reflections, distinctive details, or documents can still identify someone. Review the intended picture and sound together, and change the setup if an uninvolved person could be captured.',
        ],
      },
      {
        title: 'Treat a changed boundary as a new decision',
        paragraphs: [
          'The invented exchange below separates private recording from a request to post. Accepting the narrower scope means following it, not searching for a technical workaround such as blurring the face. If a later idea changes the action, audience, or retention period, pause and ask again.',
          'Agree on a simple way to stop. If someone withdraws or changes permission, stop recording and address unwanted copies you control. Do not promise to retrieve every copy after public distribution. This practice is a conversation plan, not a film release or legal advice. No one needs to send an invitation, recruit a performer, or publish a clip to complete the exercise.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Recording yes, posting no',
        alt: 'A fictional friend agrees to private hands-only recording but declines public posting and sets deletion for tonight.',
        caption: 'Original example dialogue. Use it only after checking that the proposed storage and deletion scope is feasible.',
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
        'Draft an invitation naming one harmless action, a short duration, and what picture and sound would record.',
        'Write the private audience, storage location, deletion plan, and an easy way to stop or decline.',
        'Put any sharing request in a separate question; do not treat a recording answer as its answer.',
        'Read the plan for promises you cannot verify and replace the recording with a paper rehearsal if needed. Send nothing.',
      ],
      notice: 'The invitation makes a limited yes and a separate no possible without pressure.',
      troubleshooting: 'If the scope says only later or privately, replace that vagueness with a named audience and retention plan.',
    },
    recall: {
      prompt: 'A cousin agreed to a clip for just you two. Is sending it to a closed hobby group covered?',
      hint: 'Private does not mean every nonpublic audience.',
      answer: 'No. The group is a new audience. Ask separately about that specific sharing and keep the clip within the original scope while awaiting a decision.',
    },
    quiz: {
      question: 'A private rehearsal clip is requested for a public tutorial. What best respects the existing agreement?',
      options: ['Mute the audio and share the same hands-only clip.', 'Blur identifying details and assume the original yes applies.', 'Ask about the new audience and use; do not share while unresolved.'],
      correctIndex: 2,
      explanation: 'Changing technical details does not expand permission. The new use and audience need their own decision, including the option to decline.',
    },
    takeaway: 'Make recording scope explicit, separate sharing decisions, and honor changes without pressure.',
    sourceNote: 'The inherited GOV.UK research-consent guidance supplies general principles, not film law or a release form. Device storage and applicable legal requirements need separate checks.',
  },
  {
    id: 'cinema-024',
    title: 'Replace risky locations with safe screen geography',
    outcome: 'Keep a scene\'s direction and separation while restaging it with safe tabletop models.',
    scene: 'A folded paper train leaves a drawn platform while a paper figure stays behind.',
    sections: [
      {
        title: 'Keep the relationship, replace the location',
        paragraphs: [
          'Imagine a farewell in which a train moves to the right while a person remains on the platform. The useful beginner problem is screen geography: can viewers follow which thing leaves, which stays, and how their separation changes? You do not need a real station to study that relationship.',
          'Fold a scrap of paper into a train-shaped block, draw a platform, and add a paper figure. Slide the train across a stable tabletop while the figure stays still. The model can look openly handmade; this exercise tests readable movement, not whether anyone mistakes it for documentary footage.',
        ],
      },
      {
        title: 'Preserve the information in the safer version',
        paragraphs: [
          'Place the train toward the left of the starting frame with room for it to travel right. Keep the figure visible beside the drawn platform. As the train moves away, the increasing gap explains departure. If you change camera sides between views, screen direction can reverse, so check the planned viewpoint as well as the model\'s physical route.',
          'A one-second start, three-second slide, and two-second settled ending make a six-second first sketch. Those durations are suggestions. Move the paper by hand and accept that the hand may appear; no motor, purchased toy, or elaborate concealment is needed.',
        ],
      },
      {
        title: 'Safety is part of the setup',
        paragraphs: [
          'Check stable footing, a clear exit, loose cords, the phone\'s support, and the table edges before recording. Keep models and hands well inside the tabletop. A low, stable position is preferable to balancing a phone above anyone or building a tall improvised mount. Exclude private screens, addresses, and uninvolved people from picture and sound.',
          'Do not replace this exercise with filming drivers, approaching traffic, entering railway tracks, climbing furniture, or provoking strangers. If the tabletop arrangement is uncomfortable, use drawings of the starting and ending frames instead. A safe substitute retains the visual question while removing an unnecessary location or action risk.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Departure as a tabletop relationship',
        alt: 'A camera faces a paper train moving left to right while a figure stays beside a drawn platform.',
        caption: 'Top view of an original paper model. All action stays on a stable tabletop, not near transport.',
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
        caption: 'Suggested six-second model take. Timeline spacing does not represent proportional duration.',
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
        'Fold a paper train, draw a platform, and make a figure; no purchased model or real location is needed.',
        'Check footing, exits, table edges, privacy, and a stable phone position before setting the route.',
        'Record a stationary view as the train slides right and the figure stays, with brief stillness around the action.',
        'Replay to check departure direction and separation. Revise the paper layout, not the risk level, if unclear.',
      ],
      notice: 'The same departure relationship can be studied entirely through harmless model movement.',
      troubleshooting: 'If the train leaves the frame too soon, shorten its route or widen the stationary view; never follow it off an edge.',
    },
    recall: {
      prompt: 'A planned entrance beside a busy road only needs a left-to-right arrival. How could you preserve that lesson?',
      hint: 'Separate the visual relationship from the real location.',
      answer: 'Use a clear interior doorway or a paper figure entering a drawn frame. Preserve direction and destination without recording beside traffic or involving strangers.',
    },
    quiz: {
      question: 'Which adaptation best retains the farewell\'s visual problem without requiring the transport location?',
      options: ['Show only a stationary train drawing with no figure.', 'Move a paper train away from a fixed figure in one clear view.', 'Replace the departure with an unrelated close detail of a bag.'],
      correctIndex: 1,
      explanation: 'The model preserves movement and increasing separation. A static train or unrelated detail omits the relationship this particular exercise needs to test.',
    },
    takeaway: 'Preserve the screen relationship and replace any avoidable location or action risk.',
    sourceNote: 'Inherited blocking and consent references support staging and boundaries, not location safety approval. This original model exercise excludes roads, tracks, climbing, and stunts.',
  },
]