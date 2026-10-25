import type { LessonGuide } from './types'

// Original teaching and schematic visuals. Existing lesson sources are inherited.
// Practice minutes are suggested budgets, not measured learning outcomes.
// Representative references fetched and read on 2026-10-25:
// https://www.studiobinder.com/blog/what-is-fill-light-photography-definition/
// Checked for bounce, wall reflection, and negative fill, not mood or softness recipes.
// https://filmanalysis.yale.edu/editing/
// Checked for continuity, action matching, omitted time, rhythm, and montage.
// https://www.blackmagicdesign.com/products/davinciresolve/training
// Checked official editing, shot balancing, and color-management training listings.
// No external stills, diagrams, or training assets are bundled here.
// Production uses the approved bespoke cinema-027 diagram as its visual override;
// its spatial specification below remains a complete, physically consistent setup.

export const cinemaLightEditGuides: LessonGuide[] = [
  {
    id: 'cinema-025',
    title: 'Map window light before choosing the camera position',
    outcome: 'Choose a window and camera arrangement that reveals the facial detail your portrait needs.',
    scene: 'A consenting friend poses on the floor beside a closed window and low sill.',
    sections: [
      {
        title: 'The window stays; your view changes',
        paragraphs: [
          'A friend stands beside a closed window for a short portrait. From one place you can see both eyes. From another, the outline of their head is clearer than their expression. Nothing new has been switched on. You changed which surfaces the camera sees relative to the daylight arriving at the face.',
          'A shadow is an area receiving less light because something blocks part of the illumination. It can still receive light reflected from the room. Front light arrives from roughly the camera side of the subject. Side light arrives from the side. Backlight arrives from behind the subject, toward the camera.',
        ],
      },
      {
        title: 'Follow the light to the face',
        paragraphs: [
          'Imagine a line from the window to your friend. A camera near the window sees more of the window-facing surfaces. A camera across the room, looking back toward the window, sees more of the surfaces turned away from it. A position between those views can show a bright cheek beside a darker cheek. Ask your friend to turn toward each camera position for this comparison.',
          'Exposure controls how much light the camera records, affecting image brightness. Automatic camera adjustments can partly brighten a dark face, but they do not move the window or move a nose shadow to the other cheek.',
        ],
      },
      {
        title: 'Choose for the eyes, not a lighting label',
        paragraphs: [
          'For an introduction where the expression matters, begin on the window side and inspect both eyes. For an outline study, the backlit view might fit instead. Neither arrangement guarantees a mood. Sketch the window, person, and chosen camera position so you can return to that relationship. This records the current daylight, not a permanent property of the room.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Three safe floor positions beside the sill',
        alt: 'Window above a person; camera A near the window, B beside the person, C opposite the window.',
        caption: 'Top view, not measured distances. Light travels from window to person; arrows marked view point from each camera toward the person.',
        items: [
          { label: 'Window', detail: 'Daylight enters here.', x: 52, y: 15, shape: 'light' },
          { label: 'Person', detail: 'Turns toward each camera.', x: 52, y: 50, shape: 'person' },
          { label: 'A: window side', detail: 'More front-lit detail.', x: 18, y: 22, shape: 'camera' },
          { label: 'B: side view', detail: 'Bright and dark cheeks.', x: 85, y: 50, shape: 'camera' },
          { label: 'C: backlit view', detail: 'Window behind the person.', x: 52, y: 85, shape: 'camera' },
        ],
        arrows: [
          { from: 0, to: 1, label: 'light' },
          { from: 2, to: 1, label: 'view' },
          { from: 3, to: 1, label: 'view' },
          { from: 4, to: 1, label: 'view' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Phone', 'Closed window', 'Willing participant, or your upright hand'],
      steps: [
        'Choose three clear floor positions around the subject. Stay inside and off the sill; avoid direct sun in eyes.',
        'Record from the window side, asking the participant to face the phone. With a hand, turn its palm toward the camera.',
        'Repeat from the side and opposite the window. Keep the subject in the same place, turning toward each view.',
        'Replay at unchanged screen brightness. Choose the view revealing your target detail and sketch its three positions.',
      ],
      notice: 'The visible lit and shaded surfaces change, even when automatic recording brightness partly compensates.',
      troubleshooting: 'If pale walls make all views similar, try a position nearer the window without blocking the walking route.',
    },
    recall: {
      prompt: 'A plant in front of a bright balcony door records as an outline. How could you reveal its leaf texture?',
      hint: 'Put the camera on the same side as the arriving daylight.',
      answer: 'Film from a safe position beside the door, looking into the room. The camera can then see more illuminated leaf surfaces rather than their shaded backs.',
    },
    quiz: {
      question: 'You need an expression rather than an outline. Which first change addresses the light direction?',
      options: ['Keep the backlit view and brighten its recording.', 'Move toward the window side and have the person face you.', 'Keep the backlit view and move closer to the face.'],
      correctIndex: 1,
      explanation: 'The second choice changes which illuminated surfaces face the camera. Brightening can help visibility, and moving closer enlarges detail, but neither changes that lighting relationship.',
    },
    takeaway: 'Map where light arrives and where the camera looks before adding equipment.',
    sourceNote: 'The inherited lighting guide supplies craft terminology. This original portrait exercise does not establish lighting ratios, permanent room conditions, or guaranteed emotions.',
  },
  {
    id: 'cinema-026',
    title: 'Judge soft light by the width of a shadow edge',
    outcome: 'Distinguish a gradual shadow edge from a dim image using ordinary light and a paper test.',
    scene: 'A finger casts a shadow on white paper beside a window and under an intact room lamp.',
    sections: [
      {
        title: 'A dark picture can have a sharp edge',
        paragraphs: [
          'Hold a finger a little above a white page beside a window. The finger blocks some light, creating a shadow on the page. Look where the bright paper becomes shaded. A hard shadow has a narrow, abrupt transition. A soft shadow has a broader, gradual transition. These terms describe the edge, not whether the whole picture looks bright or dark.',
          'A small lamp can make a crisp finger outline even when its light is dim. A broad window can make a fuzzy outline while the page remains bright. Turning down the phone screen changes your view of both areas; it does not change the light at the paper.',
        ],
      },
      {
        title: 'Why a broad source changes the boundary',
        paragraphs: [
          'A source that looks large from the finger sends light from many directions. Near the shadow edge, the finger blocks some of that source but not all of it. This partial lighting spreads the transition. A source that looks small offers fewer directions, so the change into shadow is narrower. Moving a source farther away usually makes its apparent size smaller, not larger.',
          'The distance between finger and paper also affects the edge. Keep that gap similar during your comparison, otherwise you changed two things at once. Indirect window light and direct sunlight are different cases: a sunny window does not automatically behave like one large glowing panel.',
        ],
      },
      {
        title: 'Compare the boundary you actually recorded',
        paragraphs: [
          'Compare the same finger gap under indirect daylight and an existing safe lamp. Inspect the boundary rather than choosing the darker photograph. Exposure, the light collected for the recording, affects image brightness too. Phone processing and reflections can complicate the result; label the edge you can see instead of assuming every lamp gives hard light.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Side view of the paper test',
        alt: 'A broad window illuminates a finger held above paper; the phone looks toward the paper from the side.',
        caption: 'Side view, not a scale drawing. Keep the finger-to-paper gap alike between recordings; the phone views the receiving surface.',
        items: [
          { label: 'Window', detail: 'Indirect daylight.', x: 18, y: 20, shape: 'light' },
          { label: 'Finger', detail: 'Blocks part of the source.', x: 42, y: 46, shape: 'object' },
          { label: 'Paper', detail: 'Inspect the shadow edge.', x: 72, y: 78, shape: 'paper' },
          { label: 'Phone', detail: 'Look down at the paper.', x: 85, y: 27, shape: 'camera' },
        ],
        arrows: [
          { from: 0, to: 1, label: 'light' },
          { from: 3, to: 2, label: 'view' },
        ],
      },
      {
        type: 'swatches',
        title: 'Abrupt versus gradual change',
        alt: 'Two chips jump from light to dark; four chips pass through intermediate gray values.',
        caption: 'First two chips: hard edge. Last four: soft edge. Schematic values, not measured pixels or a calibrated display.',
        items: [
          { label: 'Hard: lit', detail: 'Before the edge.', color: '#e8e2d5' },
          { label: 'Hard: dark', detail: 'Abrupt change.', color: '#585754' },
          { label: 'Soft: lit', detail: 'Before the edge.', color: '#e8e2d5' },
          { label: 'Soft: edge 1', detail: 'Partly shaded.', color: '#b8b4ab' },
          { label: 'Soft: edge 2', detail: 'More shaded.', color: '#87837b' },
          { label: 'Soft: dark', detail: 'Beyond the transition.', color: '#585754' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Phone', 'White page', 'Indirect daylight', 'Optional intact room lamp'],
      steps: [
        'Rest the page flat. Hold one finger a small, comfortable gap above it in indirect daylight.',
        'Photograph the shadow from above and note the gap using another finger as a rough reference.',
        'Repeat under an intact lamp used normally, or another daylight position. Never cover a lamp or look at the sun.',
        'Compare edge width at similar viewing size, keeping screen brightness unchanged. Label uncertain results as uncertain.',
      ],
      notice: 'A broad transition, rather than a dimmer picture, supports calling the observed shadow softer.',
      troubleshooting: 'If the edge disappears, move the finger slightly closer to the paper and repeat both conditions.',
    },
    recall: {
      prompt: 'A dim hallway lamp makes a crisp nose shadow. Would dimming it further necessarily soften that edge?',
      hint: 'Separate the amount of light from its apparent source size.',
      answer: 'No. Lower output can darken the image without broadening the transition. A safely available larger apparent source would change the relevant geometry.',
    },
    quiz: {
      question: 'Which observation is the best evidence of a softer shadow?',
      options: ['The whole page records darker.', 'The dark region is less deep.', 'The boundary spreads gradually across the paper.'],
      correctIndex: 2,
      explanation: 'Edge width defines softness here. Overall brightness and shadow depth can change without the same change in the boundary.',
    },
    takeaway: 'Judge softness at the boundary, not from overall brightness.',
    sourceNote: 'Lighting terminology is inherited. These schematic edges are original; fill amount and mood claims are not substitutes for apparent source size.',
  },
  {
    id: 'cinema-027',
    title: 'Your shot is too dark on one side. Try a sheet of paper.',
    outcome: 'Brighten a mug\'s darker side without buying a light or brightening the whole picture.',
    scene: 'The approved mug, window, white notebook page, and fixed phone demonstration.',
    sections: [
      {
        title: 'Start with the handle you cannot see',
        paragraphs: [
          'You put a mug beside a window and point your phone at it. The side facing the window looks clear. The other side is so dark that the handle is difficult to see. A shadow is an area receiving less light because the subject blocks some of the arriving illumination. It need not be completely black.',
          'Your first instinct is to brighten the whole picture in an editor. The handle becomes easier to see, but the already-bright side also gets brighter. You wanted to change one part of the lighting, not everything in the picture. That is where a white sheet of paper can help.',
        ],
      },
      {
        title: 'Why paper can change the picture',
        paragraphs: [
          'The window sends light toward the mug. The side turned away from the window receives less direct light. White paper reflects some of the light that lands on it. Hold it beside the darker side, facing back toward the mug, where daylight can also reach the page. Some of that light returns toward the handle.',
          'The paper is not a lamp. It redirects light already in the room. Filmmakers call this bounce; light that helps reveal a shaded area is fill. Put the paper opposite the window, not between window and mug. Leave a clear route for daylight to reach the paper around the mug.',
        ],
      },
      {
        title: 'Watch the handle while the paper moves',
        paragraphs: [
          'Keep mug and phone still. Bring the page roughly a handspan from the darker side and turn it slowly. Compare handle detail, not a promise that every shadow will disappear. Exposure controls the light recorded by the camera; an exposure lock, when available, holds that setting steady. Without one, automatic brightening can disguise the comparison. Check directly with your eyes too, and keep the conclusion modest.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Window left, paper right, phone fixed',
        alt: 'Daylight reaches the mug and passes above it to white paper; paper returns light to the handle side. The phone stays below.',
        caption: 'Top view, simplified distances. The window-to-paper arrow clears the mug. Bounce travels from paper toward mug; the phone arrow means view, not illumination.',
        items: [
          { label: 'Window', detail: 'Daylight reaches mug and page.', x: 15, y: 22, shape: 'light' },
          { label: 'Mug', detail: 'Handle on its darker right side.', x: 50, y: 52, shape: 'object' },
          { label: 'White paper', detail: 'White face angled toward mug.', x: 85, y: 22, shape: 'paper' },
          { label: 'Phone stays here', detail: 'Compare the same handle detail.', x: 50, y: 86, shape: 'camera' },
        ],
        arrows: [
          { from: 0, to: 1, label: 'daylight' },
          { from: 0, to: 2, label: 'daylight' },
          { from: 2, to: 1, label: 'bounce' },
          { from: 3, to: 1, label: 'view' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Phone', 'Mug', 'White notebook page', 'Daylight only'],
      steps: [
        'Place the mug on a stable table near a window, with its handle on the darker side.',
        'Support the phone safely and record without paper. Lock exposure if your video mode supports it.',
        'Hold the page about a handspan from the darker side, facing the mug and catching daylight.',
        'Turn the page slowly while watching the handle. Record where the handle becomes easier to distinguish.',
        'Remove the page and compare again. Keep paper away from bulbs, heaters, vents, and other heat sources.',
      ],
      notice: 'More handle detail with less change on the bright side suggests the bounce is reaching the intended area.',
      troubleshooting: 'Try a closer or larger page without blocking daylight. Pale walls may already provide enough reflected light to hide the difference.',
    },
    recall: {
      prompt: 'A friend\'s left cheek looks clear, but their right eye disappears into shadow. Where would you first try the page?',
      hint: 'Aim existing light at the missing detail, not at the already-bright cheek.',
      answer: 'Try the darker right-hand side, outside the picture, with the white face toward them and daylight reaching it. Adjust until the eye becomes more readable.',
    },
    quiz: {
      question: 'The page makes no visible difference. Which first adjustment tests whether useful light is reaching it?',
      options: ['Angle it to catch daylight and return light toward the handle.', 'Put it directly between the window and mug.', 'Keep it fixed and raise the whole recording\'s brightness.'],
      correctIndex: 0,
      explanation: 'The first choice tests the reflected light path. The second blocks the main light; the third changes recording brightness rather than testing bounce.',
    },
    takeaway: 'Bring light to the missing detail before brightening the whole image.',
    sourceNote: 'The approved original example is retained. StudioBinder supports bounce and fill; Apple controls are model-specific. No fixed lighting ratio or measured improvement is claimed.',
  },
  {
    id: 'cinema-028',
    title: 'Reduce reflected light with a dark surface',
    outcome: 'Use negative fill to deepen a local shadow while leaving the main daylight path open.',
    scene: 'An open paperback beside a pale wall loses the visible crease between its raised pages.',
    sections: [
      {
        title: 'The page crease nearly disappears',
        paragraphs: [
          'You film an open paperback to show how its pages curve. Daylight comes from the left, but the crease looks almost as bright as the surrounding paper. A pale wall on the right reflects light back into that area. A shadow is a region receiving less illumination because some incoming light is blocked; room reflections can partly light it again.',
          'Here you want to reveal the curve by making the darker area a little darker. Lowering the whole image would also darken the window-facing page. Instead, you can reduce one source of reflected light before the phone records it.',
        ],
      },
      {
        title: 'Intercept the return, not the window',
        paragraphs: [
          'Fill is illumination reaching a subject\'s shaded areas. Negative fill means reducing that illumination, often with a dark surface that absorbs much of the light falling on it. Hold a matte dark book cover between the pale wall and the paperback, outside the camera view. It intercepts some of the wall\'s returning light instead of sending extra darkness toward the pages.',
          'Leave the window-to-book route open. If you put the cover on the window side, you are blocking the main light as well. That can also change the picture, but it is a different test. A glossy black cover can reflect a bright patch, so inspect the surface rather than trusting its color name.',
        ],
      },
      {
        title: 'Keep one bright reference in view',
        paragraphs: [
          'Watch both the crease and the window-facing page while adding and removing the cover. Exposure controls the camera\'s collection of light; lock it if supported so automatic changes do not brighten away your result. A darker crease with a fairly similar bright page suggests a local lighting change. A tiny cover far away may intercept too little reflected light to matter.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A dark cover interrupts the wall return',
        alt: 'Window and pale wall above an open book. A dark cover lies between wall and book, away from the window-to-book path.',
        caption: 'Top view. The returning-light arrow stops at the cover. There is no arrow sending darkness onward; the camera arrow only marks its view.',
        items: [
          { label: 'Window', detail: 'Main daylight stays clear.', x: 15, y: 18, shape: 'light' },
          { label: 'Pale wall', detail: 'Returns some daylight.', x: 85, y: 18, shape: 'box' },
          { label: 'Open book', detail: 'Inspect the page crease.', x: 35, y: 62, shape: 'object' },
          { label: 'Dark cover', detail: 'Held between wall and book.', x: 60, y: 40, shape: 'object' },
          { label: 'Phone', detail: 'Keep the page view fixed.', x: 72, y: 85, shape: 'camera' },
        ],
        arrows: [
          { from: 0, to: 2, label: 'main light' },
          { from: 0, to: 1, label: 'light to wall' },
          { from: 1, to: 3, label: 'return intercepted' },
          { from: 4, to: 2, label: 'view' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Phone', 'Open book', 'Matte dark cover', 'Daylight near a pale wall'],
      steps: [
        'Use daylight with optional lamps off. Place the open book so one page faces the window.',
        'Support the phone, record the crease, and lock exposure if the current camera mode allows it.',
        'Hold the dark cover on the wall side, outside the picture and clear of the main daylight path.',
        'Record with and without it. Compare the crease and bright page; keep all materials away from electrical equipment.',
      ],
      notice: 'The crease can darken while the window-facing page remains relatively similar.',
      troubleshooting: 'Move the cover closer or try a less reflective surface. If both pages darken, check whether you blocked the window.',
    },
    recall: {
      prompt: 'A pale cupboard brightens the darker side of a wooden carving. How could you reveal that side\'s contours?',
      hint: 'Identify which returning light you want to interrupt.',
      answer: 'Place a safe dark surface between cupboard and carving, leaving the main light unobstructed. Inspect the contours before changing the entire recording\'s brightness.',
    },
    quiz: {
      question: 'Both sides of the book darken when you add the cover. What should you inspect first?',
      options: ['Whether the cover needs to be more reflective.', 'Whether the recording needs a global brightness increase.', 'Whether the cover is blocking the main window light.'],
      correctIndex: 2,
      explanation: 'Blocking the main source explains a broad lighting change. A brightness adjustment could hide that mistake instead of isolating reflected fill.',
    },
    takeaway: 'Negative fill intercepts unwanted returning light; it does not emit darkness.',
    sourceNote: 'StudioBinder describes negative fill and wall bounce. This original daylight test makes no universal contrast, shadow-depth, or mood claim.',
  },
  {
    id: 'cinema-029',
    title: 'Let a visible lamp explain the light on a page',
    outcome: 'Distinguish a lamp\'s presence in the scene from the illumination it actually supplies.',
    scene: 'An intact desk lamp lights a notebook while a hand draws a simple square.',
    sections: [
      {
        title: 'The lamp belongs in the picture',
        paragraphs: [
          'You are filming a hand drawing a square in a notebook at a desk. The existing lamp and its pool of light are both visible. The viewer can connect the bright page with an object in the room. Filmmakers call a light source visible within the scene a practical. The term describes its role in the picture, not a special kind of bulb.',
          'A practical may genuinely light the hand, appear mostly as a glowing object, or do both. Its presence does not prove that every illuminated surface comes from it. Daylight or another room light could also reach the desk.',
        ],
      },
      {
        title: 'Check what reaches the notebook',
        paragraphs: [
          'Keep the intact lamp in its normal safe position. Move the notebook within the light already falling on the desk. As the hand approaches the useful area, check whether the pencil line becomes readable. You are testing actual illumination, not assuming that a visible bright shade can light anything placed nearby.',
          'If the shade records as a featureless bright patch while the page stays dark, framing the lamp less prominently or changing the page position can be more useful than increasing recording brightness. Exposure controls how much light the camera records; raising it does not selectively add illumination to the page. Do not stare into the bulb while testing.',
        ],
      },
      {
        title: 'Carry the direction into a closer view',
        paragraphs: [
          'After the wider view, record a closer view of the drawing without moving the lamp. The visible source may leave the picture, but light still arrives from the same side. That relationship helps the two views belong to one setting. If no suitable lamp exists, use a window and describe it as daylight, not as a household practical. Neither choice requires modifying a fitting.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Move the page inside the existing light',
        alt: 'An intact lamp at upper left sends light toward a notebook; the phone below views both without altering the lamp.',
        caption: 'Top view, not a clearance measurement. Light travels from lamp to page; two view arrows bracket the starting frame. A closer framing can exclude the lamp.',
        items: [
          { label: 'Intact desk lamp', detail: 'Original shade and clearances.', x: 18, y: 23, shape: 'light' },
          { label: 'Notebook and hand', detail: 'Pencil line in the light pool.', x: 67, y: 48, shape: 'paper' },
          { label: 'Phone', detail: 'Begin with lamp and page visible.', x: 40, y: 84, shape: 'camera' },
        ],
        arrows: [
          { from: 0, to: 1, label: 'lamp light' },
          { from: 2, to: 0, label: 'wide view' },
          { from: 2, to: 1, label: 'wide view' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Phone', 'Notebook and pencil', 'Existing intact desk lamp or daylight'],
      steps: [
        'Choose a lamp already used safely with its original shade and clearances. Use daylight if anything is uncertain.',
        'Move the notebook into the existing light, keeping paper and hands away from the fitting and vents.',
        'Record a square being drawn with the lamp in view. Reset the drawing on a fresh part of the page.',
        'Record a closer drawing view without moving the lamp. Compare light direction and line visibility; retain both clips.',
      ],
      notice: 'The closer view can retain the wider scene\'s light direction even when its source is no longer visible.',
      troubleshooting: 'If the page remains unreadable, use daylight or redesign the framing. Never cover a lamp with paper or fabric.',
    },
    recall: {
      prompt: 'A hallway wall light looks bright in a shot but barely illuminates your keys. What could you change safely?',
      hint: 'Separate seeing the source from placing the object where its light reaches.',
      answer: 'Move the keys into an existing safely reachable light pool or choose daylight. Making the wall light larger in frame will not illuminate the keys.',
    },
    quiz: {
      question: 'The lamp leaves frame in a closer shot. What best preserves its connection to the wider view?',
      options: ['Keep the lamp visible by widening again.', 'Keep the notebook and light direction consistent.', 'Brighten the closer recording until the page is uniformly pale.'],
      correctIndex: 1,
      explanation: 'The second choice preserves the illumination relationship. Showing the lamp again changes the framing goal; global brightening does not preserve direction.',
    },
    takeaway: 'A visible source explains possible light; inspect where its illumination actually lands.',
    sourceNote: 'Inherited lighting and electrical-safety references support the scope. This is an original staging exercise, not a lighting recipe or permission to modify equipment.',
  },
  {
    id: 'cinema-030',
    title: 'Make the expression readable without a lighter-skin target',
    outcome: 'Choose light and background positions for visible expression while respecting the person\'s appearance.',
    scene: 'A self-portrait just inside an open doorway is compared with a daylight-facing version.',
    sections: [
      {
        title: 'A bright doorway behind your head',
        paragraphs: [
          'You record an introduction just inside a doorway. The phone looks from the room toward the bright opening behind you. Your outline is easy to see, but your eyes are difficult to distinguish. Backlight means light arriving from behind the subject toward the camera. It can serve an outline shot, but this introduction needs an expression.',
          'A shadow is a region receiving less illumination because some arriving light is blocked. Your face can still receive reflected room light, just less than the background. Exposure controls how much light the camera records. Increasing it can brighten the face but also change the already-bright doorway.',
        ],
      },
      {
        title: 'Change the relationship, not the person',
        paragraphs: [
          'Move the phone to a safe position beside the doorway and turn toward it, letting daylight reach the front of your face. You can also choose a less bright background. Both changes reduce the struggle between a dark facial area and a bright area elsewhere in the picture. Inspect the eyes and mouth rather than trying to make all skin reach one brightness.',
          'Skin reflects light differently across people and across areas of one face. There is no universal pale value that makes a face correctly represented. Disable beauty or whitening effects if present for this comparison. A face can remain darker in tone while its expression becomes easier to read.',
        ],
      },
      {
        title: 'Compare under the same viewing conditions',
        paragraphs: [
          'Replay both versions at unchanged screen brightness. Ask whether the expression is readable and whether color resembles the person under the actual light. A phone screen is not a calibrated reference. With a participant, agree on the intended appearance and show the result to them. An intentional silhouette is another valid goal, not a failed attempt to make every face bright.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Turn toward light beside the doorway',
        alt: 'Daylight enters above a person. Phone A looks toward the doorway from deeper inside the room; phone B sits beside the opening.',
        caption: 'Top view. At A, daylight is behind the camera-facing person. At B, the person turns toward phone and daylight. Both camera positions stay safely inside.',
        items: [
          { label: 'Open doorway', detail: 'Daylight enters the room.', x: 52, y: 15, shape: 'light' },
          { label: 'Person', detail: 'Turns toward the chosen phone.', x: 52, y: 50, shape: 'person' },
          { label: 'Phone A', detail: 'Bright opening behind the head.', x: 52, y: 85, shape: 'camera' },
          { label: 'Phone B', detail: 'More daylight reaches the face.', x: 18, y: 25, shape: 'camera' },
        ],
        arrows: [
          { from: 0, to: 1, label: 'daylight' },
          { from: 2, to: 1, label: 'view A' },
          { from: 3, to: 1, label: 'view B' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Phone', 'Stable support', 'Safe daylight doorway or window'],
      steps: [
        'Use your own face, or ask a willing participant. Disable beauty effects if available; keep the doorway clear.',
        'Record a short introduction with daylight behind the head. Keep the phone securely supported, not perched on a sill.',
        'Move the phone beside the opening, staying inside. Turn toward it and repeat the same words in daylight.',
        'Compare eyes, mouth, and skin appearance at unchanged display settings. Keep the version that fits the agreed purpose.',
      ],
      notice: 'Facial detail can become clearer without treating paler skin as the goal.',
      troubleshooting: 'If the background still dominates, reframe against an interior wall. Do not compensate first with whitening or a strong filter.',
    },
    recall: {
      prompt: 'A friend against a sunlit white wall has hard-to-see eyes. What could you change before raising recording brightness?',
      hint: 'Consider both the light arriving at the face and the background.',
      answer: 'Try a less bright background or turn the friend toward available light. Check their expression and agreed appearance rather than aiming for a fixed skin brightness.',
    },
    quiz: {
      question: 'Two people have different skin tones in the same scene. What is the useful lighting target?',
      options: ['Readable intended detail while preserving each person\'s appearance.', 'Equal recorded brightness on both faces.', 'The brightest face that still leaves some background detail.'],
      correctIndex: 0,
      explanation: 'Visibility and representation are the goals. Equalizing faces or maximizing brightness can change their appearance without serving the scene.',
    },
    takeaway: 'Make the intended detail readable, not every face the same brightness.',
    sourceNote: 'Inherited lighting and white-balance references support basic controls. The exercise is not a skin-tone standard or a calibrated color assessment.',
  },
  {
    id: 'cinema-031',
    title: 'Simplify two differently colored lights before correcting them',
    outcome: 'Recognize why one overall white-balance adjustment cannot independently fix two differently lit areas.',
    scene: 'One hand rests over white paper between a daylight window and a warm desk lamp.',
    sections: [
      {
        title: 'One page, two versions of white',
        paragraphs: [
          'Rest your hand above a white page near a window while a safe desk lamp also lights it. The window side can look bluish compared with the lamp side, which looks yellow or orange. The page has not changed material halfway across. Different light is arriving at different areas of the same subject.',
          'Warm and cool describe relative color appearance here, not whether a fitting is safe to touch. Color temperature describes a light\'s position along a warm-to-cool color scale; it does not describe every possible green or magenta tint from a lamp.',
        ],
      },
      {
        title: 'Why one adjustment pulls both sides',
        paragraphs: [
          'White balance is the camera or editor\'s adjustment for how illumination affects recorded color. It changes color relationships across the image, not only objects named white. If you cool the entire picture until the lamp side looks neutral, the daylight side can become bluer. Warming the picture to address the daylight side can make the lamp side more orange.',
          'Neither adjustment knows that you intended to change only one half of the hand. More advanced editing can target regions, but this first exercise does not need those tools. Reducing the competing illumination is a simpler way to make the scene easier to record and match.',
        ],
      },
      {
        title: 'Let one source do most of the work',
        paragraphs: [
          'Turn the optional lamp off using its normal switch, or move the hand where daylight dominates. Record again without changing the view. The two sides should have less competing color, though the phone may adjust automatically. A white page is a rough comparison surface, not a calibrated reference or a skin-whitening target. Keep the setup consistent for later views; a color difference you intentionally want can remain.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Different light reaches opposite sides',
        alt: 'A window at left and warm lamp at right both illuminate a hand over white paper, viewed by the phone below.',
        caption: 'Top view. Blue and amber identify the two sources schematically, not measured color values. Switch the optional lamp off for the second recording.',
        items: [
          { label: 'Window', detail: 'Relatively cooler daylight.', x: 15, y: 22, shape: 'light', color: '#c3dce8' },
          { label: 'Warm lamp', detail: 'Optional, intact, used normally.', x: 85, y: 22, shape: 'light', color: '#e8b879' },
          { label: 'Hand and white page', detail: 'Compare left and right areas.', x: 50, y: 52, shape: 'paper' },
          { label: 'Phone', detail: 'Same view for both recordings.', x: 50, y: 86, shape: 'camera' },
        ],
        arrows: [
          { from: 0, to: 2, label: 'daylight' },
          { from: 1, to: 2, label: 'lamplight' },
          { from: 3, to: 2, label: 'view' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Phone', 'White page', 'Window', 'Optional safe warm lamp'],
      steps: [
        'Put the page and your hand in daylight with an intact lamp also illuminating them. Keep paper clear of fittings.',
        'Support the phone and record both sides. Note which looks warmer; lock white balance only if supported.',
        'Turn off the optional lamp with its normal control and record the same view. Do not change wiring or shades.',
        'Compare the color difference across the page, not just overall brightness. Without a suitable lamp, compare existing daylight positions.',
      ],
      notice: 'Removing competing light can reduce different color casts within one frame.',
      troubleshooting: 'If the whole clip changes color automatically, compare its two sides together. Keep camera framing consistent and note the automatic adjustment.',
    },
    recall: {
      prompt: 'A blue television lights one side of a face while a warm ceiling light reaches the other. Why might an overall correction disappoint?',
      hint: 'The two regions do not share the same illumination.',
      answer: 'One global adjustment changes both regions. Reduce an optional source or reposition the person first if the intention is a more consistent color appearance.',
    },
    quiz: {
      question: 'You need matching hand shots but have no regional color controls. What is the best first test?',
      options: ['Neutralize the lamp-lit side in every clip.', 'Neutralize the daylight side in every clip.', 'Reduce one source and record under more consistent illumination.'],
      correctIndex: 2,
      explanation: 'A more consistent source reduces the competing problem at capture. Either one-sided global correction can push the other region farther from the intended appearance.',
    },
    takeaway: 'Simplify competing illumination before asking one slider to fix two sources.',
    sourceNote: 'Inherited white-balance and camera references explain the concept. Device controls vary; ordinary paper and screen comparisons are not calibrated measurements.',
  },
  {
    id: 'cinema-032',
    title: 'Test flicker in the recording, not just with your eyes',
    outcome: 'Identify recorded lighting flicker and choose a supported timing test or a daylight fallback.',
    scene: 'A white instruction card develops moving bands under a room light but is also tested in daylight.',
    sections: [
      {
        title: 'The card looks steady until playback',
        paragraphs: [
          'You record a white instruction card under a room light. To your eyes the illumination looks steady, but the clip shows moving dark bands or changing brightness. Some artificial sources pulse faster than you notice. The camera samples that changing output, and different parts of a recorded frame can catch different amounts of light.',
          'Flicker means this unwanted brightness variation over time. Bands can appear when the camera reads image rows at different moments during a pulse. A display can also produce bands through its own refresh or brightness control, even when the room lighting is steady.',
        ],
      },
      {
        title: 'Timing controls are different controls',
        paragraphs: [
          'Frame rate counts recorded pictures per second. Shutter time is the light-gathering duration for each picture. Changing one does not guarantee a useful change in the other. Mains frequency describes electrical supply cycles per second, written as hertz or Hz; it is not the camera\'s frame rate.',
          'Where mains are known to be 50 Hz, supported shutter times of 1/50 or 1/100 second are reasonable starting tests at a compatible frame rate. At known 60 Hz, try 1/60 or 1/120 instead. These timings can average repeated pulses more consistently. LED drivers, dimmers, and screens can follow different patterns, so none is a universal cure.',
        ],
      },
      {
        title: 'An old phone still has a useful test',
        paragraphs: [
          'Use an available anti-banding setting that matches a known local supply frequency if the phone offers it. Otherwise record the same card in daylight with optional lamps off. Inspect the saved clips, not only the preview. If the bands disappear, you have a usable alternative illumination. A damaged or visibly faulty light needs qualified help, not a camera setting or a home repair.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Same card, alternative illumination',
        alt: 'Room lamp at left and daylight window at right are alternative sources for a fixed card and camera.',
        caption: 'Top view. A and B are separate recordings, not instructions to use both lights together. Keep card and camera geometry comparable.',
        items: [
          { label: 'A: room lamp', detail: 'Inspect the saved clip for bands.', x: 15, y: 20, shape: 'light' },
          { label: 'B: daylight', detail: 'Optional lamps off for this test.', x: 85, y: 20, shape: 'light' },
          { label: 'White card', detail: 'Plain area makes bands visible.', x: 50, y: 52, shape: 'paper' },
          { label: 'Phone', detail: 'Record, then replay.', x: 50, y: 86, shape: 'camera' },
        ],
        arrows: [
          { from: 0, to: 2, label: 'test A' },
          { from: 1, to: 2, label: 'test B' },
          { from: 3, to: 2, label: 'view' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Phone', 'Plain white card', 'Intact room light', 'Daylight alternative'],
      steps: [
        'Record about six seconds of the card under a safe room light, keeping the phone still.',
        'Replay and note bands or brightness pulsing. Do not diagnose flicker from a single still image.',
        'If offered, test anti-banding for the known supply frequency, or the compatible manual shutter times described above. Otherwise skip settings.',
        'Record a daylight comparison with optional lamps off. Keep the clearer result and note any settings changed so you can restore them.',
      ],
      notice: 'A useful change removes or reduces recorded bands throughout playback, not just in one frame.',
      troubleshooting: 'If bands remain on a screen, its refresh may differ from mains timing. Reframe without it rather than modifying electronics.',
    },
    recall: {
      prompt: 'A laptop still bands after a mains-matched test, while the daylight-lit desk looks stable. What does that suggest?',
      hint: 'A display can have its own timing.',
      answer: 'The laptop may be producing a separate refresh-related problem. Exclude it or test supported display/camera options without assuming the room lamp is responsible.',
    },
    quiz: {
      question: 'Your phone offers no manual shutter and local mains frequency is unknown. Which test is still useful?',
      options: ['Choose 24 fps and judge only the live preview.', 'Compare a saved daylight clip with optional lamps off.', 'Lower recording brightness until the bands are less obvious.'],
      correctIndex: 1,
      explanation: 'The daylight comparison tests another source without guessed frequency. A different frame rate may help, but still needs recorded verification; darkening can merely hide bands.',
    },
    takeaway: 'Verify the saved clip; daylight is a valid solution when timing controls are absent.',
    sourceNote: 'Inherited Sony guidance discusses camera and lighting timing, with device limits. This original test neither guarantees a fix nor covers electrical repair.',
  },
  {
    id: 'cinema-033',
    title: 'Save a lighting reference before you leave the setup',
    outcome: 'Use a position map and reference clip to distinguish a restorable setup from changed daylight.',
    scene: 'A shoelace-tying demonstration needs a later close view beside the same window.',
    sections: [
      {
        title: 'The shoe returns, but the light does not',
        paragraphs: [
          'You film hands tying a shoe beside a window, then return later for a closer view of the knot. Between the two recordings a cloud has moved. The bright part of the shoe and the shaded part now look different. Joined together, the views can suggest a change of time even though the knot is meant to be one continuous action.',
          'A cut is a direct change from one recorded view to another. Continuity means keeping the action, positions, and other visible relationships understandable across those changes. Lighting continuity includes direction, brightness, color, and the pattern of illumination, not just repeating a camera setting.',
        ],
      },
      {
        title: 'Record the relationship you will need again',
        paragraphs: [
          'A shadow is an area receiving less light because some incoming illumination is blocked. Notice which side of the lace casts one and where it falls. Save a short reference clip of the settled shoe before the action. Sketch the window, shoe orientation, and camera position; include a nearby table edge as a landmark.',
          'The reference clip records appearance, while the map helps restore placement. Neither replaces the other. A picture can show a dark side without explaining where the camera stood. A map can restore positions without telling you that the daylight has become cooler or more directional.',
        ],
      },
      {
        title: 'Compare before repeating the whole action',
        paragraphs: [
          'Restore the shoe and phone, then compare a short trial against the reference. If the shadow falls on the other side, check placement before trying color controls. A simple color adjustment cannot physically relocate a shadow. If daylight has changed beyond a useful match, record the related views together under the new condition or make the time change explicit. Do not claim identical conditions merely because the phone used the same mode.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A map to accompany the reference clip',
        alt: 'Window at upper left, shoe at center with toe toward the window, and phone below viewing the laces.',
        caption: 'Top view, schematic spacing. Restore these relationships, then compare the actual shadow and color in the saved clip. Weather is not encoded by the arrows.',
        items: [
          { label: 'Window', detail: 'Reference light from upper left.', x: 15, y: 20, shape: 'light' },
          { label: 'Shoe', detail: 'Toe toward window; inspect laces.', x: 50, y: 50, shape: 'object' },
          { label: 'Phone', detail: 'View laces from the heel side.', x: 50, y: 85, shape: 'camera' },
        ],
        arrows: [
          { from: 0, to: 1, label: 'light' },
          { from: 2, to: 1, label: 'view' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Phone', 'Clean shoe with laces', 'Window', 'Paper or phone notes'],
      steps: [
        'Place the shoe on a stable surface in daylight. Record a short still reference and a lace-tying view.',
        'Sketch window, camera, toe direction, and table-edge landmarks. Note visible light and color rather than invented measurements.',
        'Move the phone for a close knot view, then restore the original position from the map without changing the shoe.',
        'Compare a trial with the reference. Mark any cloud change honestly and choose whether to restore placement or reshoot related views.',
      ],
      notice: 'You can separate a placement mismatch from a lighting change that happened despite restored positions.',
      troubleshooting: 'If the map is ambiguous, add the lens direction and toe orientation. Do not use a filter to hide an opposite-side shadow.',
    },
    recall: {
      prompt: 'A later model-building close-up has a shadow on the opposite side of a small tower. What should you check first?',
      hint: 'A color slider cannot change the direction light arrived from.',
      answer: 'Compare source, model, and camera positions with the reference. Restore their relationship or reshoot connected views if the original light is no longer available.',
    },
    quiz: {
      question: 'Which mismatch most clearly calls for a setup check rather than a simple color correction?',
      options: ['The lace shadow now falls to the opposite side.', 'The whole clip has a small warm cast.', 'The whole clip is slightly dimmer with detail retained.'],
      correctIndex: 0,
      explanation: 'A changed shadow direction points to geometry or changed illumination. Modest global color or brightness differences may be adjustable when the recorded detail survives.',
    },
    takeaway: 'Save placement and appearance; compare both before recording a later matching view.',
    sourceNote: 'Inherited lighting and editing references support continuity practice. This original shoe example does not imply software can reconstruct a different lighting pattern.',
  },
  {
    id: 'cinema-034',
    title: 'Redesign the shot before exceeding a lamp\'s safety limits',
    outcome: 'Check an ordinary filming corner without modifying electrical equipment or inventing clearance measurements.',
    scene: 'A desk drawing setup sits near an exit, with a lamp cord along the rear wall.',
    sections: [
      {
        title: 'A short recording still uses real equipment',
        paragraphs: [
          'You want a close view of a drawing at night. The installed desk lamp lights only one corner, and moving the desk would pull its cord across the doorway. The filming problem is the arrangement, not a reason to improvise another electrical connection. A brief recording still exposes people to heat, a trip route, or damaged equipment.',
          'Begin with intact household lights used as their instructions allow. Keep plugs, sockets, and cords dry. Leave the lamp in its normal safe position and move the drawing or camera instead. If the light cannot serve the shot safely, choose a daylight version at another time.',
        ],
      },
      {
        title: 'Heat and walking routes need space',
        paragraphs: [
          'Bulbs and fittings can become hot, and equipment may need open ventilation. Paper, curtains, or clothing against a fitting can introduce a hazard; covering it to change the light is outside this exercise. Keep its original shade and follow its stated clearances rather than choosing a distance from an unscaled sketch.',
          'An extension lead does not create unlimited electrical capacity. Do not overload outlets or join extension leads to reach the camera position. A cord across the walking route can also pull equipment over when caught. The diagram keeps the existing cord route at the rear wall and leaves the exit approach free; it is not an instruction to pull or reroute live equipment.',
        ],
      },
      {
        title: 'Make an alternative, not a repair plan',
        paragraphs: [
          'Inspect from a safe distance before filming. If equipment looks damaged, smells burnt, sparks, or otherwise appears faulty, stop using that setup and seek qualified help. Do not touch suspect equipment to investigate it. Write a daylight alternative and leave the fault outside your filmmaking task. Safety here means declining an unsuitable setup, not becoming an electrician for one shot.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Keep the front route clear',
        alt: 'Lamp and socket lie along the rear wall; drawing and supported phone are on the desk, with the exit approach clear at lower right.',
        caption: 'Top view, not certified clearances. The wall arrow marks an existing cord route, not light. No cord crosses the foreground route to the exit.',
        items: [
          { label: 'Intact lamp', detail: 'Use normal shade and clearance.', x: 18, y: 22, shape: 'light' },
          { label: 'Existing socket', detail: 'Dry, intact, not overloaded.', x: 82, y: 22, shape: 'box' },
          { label: 'Drawing', detail: 'Move within safe available light.', x: 58, y: 55, shape: 'paper' },
          { label: 'Supported phone', detail: 'Stable position, away from edges.', x: 20, y: 80, shape: 'camera' },
          { label: 'Exit approach', detail: 'Leave the walking route open.', x: 86, y: 82, shape: 'box' },
        ],
        arrows: [
          { from: 0, to: 1, label: 'cord at wall' },
          { from: 0, to: 2, label: 'light' },
          { from: 3, to: 2, label: 'view' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Phone notes or paper', 'One ordinary filming corner'],
      steps: [
        'Look from a safe distance at the lamp, visible cord route, dry surfaces, and exit. Do not touch suspect equipment.',
        'Note any blocked route, unclear clearance, damaged part, or unstable phone position. Leave uncertain items unresolved rather than guessing.',
        'Sketch a shot using the existing safe arrangement, moving only ordinary props or the supported phone when safe.',
        'Write a daylight alternative for any unresolved hazard. Stop the lamp-based plan if it would require electrical modification.',
      ],
      notice: 'The plan has a clear exit, stable camera support, and no improvised light covering or electrical connection.',
      troubleshooting: 'If you cannot establish that the setup is suitable, use the daylight alternative and seek qualified help for equipment concerns.',
    },
    recall: {
      prompt: 'Your preferred camera angle would require another extension lead joined to the first. What changes belong in this exercise?',
      hint: 'Change the shot, not the electrical system.',
      answer: 'Move the subject or camera within the safe existing arrangement, or use daylight. Do not join leads to preserve an optional framing choice.',
    },
    quiz: {
      question: 'A lamp\'s clearance instructions are unavailable and the drawing would sit near its fitting. What is the appropriate plan?',
      options: ['Use the spacing in the schematic as the required clearance.', 'Keep the planned spacing but shorten the recording.', 'Use a daylight arrangement until suitability can be established.'],
      correctIndex: 2,
      explanation: 'The diagram is not a clearance specification, and shorter recording time does not establish safety. Redesigning avoids guessing about the fitting.',
    },
    takeaway: 'A safe alternative is part of the shot plan; electrical improvisation is not.',
    sourceNote: 'Electrical Safety First is inherited as general household guidance. This original visual checklist is not a safety certification, installation guide, or repair procedure.',
  },
  {
    id: 'cinema-035',
    title: 'Select the take that contains the needed moment',
    outcome: 'Choose a recorded attempt for its story job and keep a reasoned list without deleting alternatives.',
    scene: 'Three recordings show a hand finding an original folded note in a coat pocket.',
    sections: [
      {
        title: 'The steadiest recording hides the note',
        paragraphs: [
          'You record a hand finding a folded note in a coat pocket three times. Each recorded attempt is a take. In take A the camera stays steady, but the thumb covers the message. In take B the camera tilts slightly, yet the note opens clearly and the hand pauses. In take C the reveal is sharp, but fabric scraping overwhelms a spoken line.',
          'The scene needs the discovery to be understandable. Before ranking polish, name that job: show the note emerging, allow the message to be seen, and preserve any words the scene needs. A small camera imperfection may matter less than missing the event.',
        ],
      },
      {
        title: 'Find a usable segment, not a universal winner',
        paragraphs: [
          'A cut directly replaces one recorded view with another. The useful part of a take is the stretch that can do its job in that sequence. In an invented six-second take B, the hand reaches during seconds zero to two, unfolds the note during two to four, and pauses during four to six. Keeping only the reach would discard its strongest moment.',
          'Also check whether the hand, pocket, and paper state connect to neighboring views. Keeping those relationships understandable is continuity. A readable note that abruptly changes hands may need a different neighboring shot. Technical faults still matter when they prevent the information or sound from being understood.',
        ],
      },
      {
        title: 'Write down why this segment stays',
        paragraphs: [
          'Keep a short selected-clips list using the gallery\'s filename or an unmistakable thumbnail description. Write "B: full note visible, pause after opening, usable words" rather than "best." Preserve A and C as alternatives. If a later sequence needs a pocket detail without dialogue, a previously rejected take may become useful for that different job.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The useful event inside take B',
        alt: 'A six-second take shows a reach, the unfolding note, and a pause after the reveal.',
        caption: 'Invented source-clip times, not required performance timings or proportional widths. The reveal and pause are why B is selected.',
        items: [
          { label: 'Reach into pocket', detail: '0-2 s: the search begins.' },
          { label: 'Unfold the note', detail: '2-4 s: the whole message appears.' },
          { label: 'Pause with note open', detail: '4-6 s: the discovery remains visible.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Phone gallery', 'Coat with pocket', 'Your own short handwritten note'],
      steps: [
        'Write a fictional three-word message and place it in the pocket. Keep personal information out of view.',
        'Record three complete attempts to find and open it, resetting hand and paper between takes.',
        'Watch all three at normal speed. Identify where the full note appears and whether required sound is usable.',
        'List one chosen segment with its filename or thumbnail, approximate start/end, and reason. Keep every original recording.',
      ],
      notice: 'The choice names a visible story event and a usable segment, not only camera steadiness.',
      troubleshooting: 'If no take reveals the note, record a clearer attempt. Selection cannot recover an event that was never visible.',
    },
    recall: {
      prompt: 'A steady cooking demonstration hides when the lid opens; a slightly shaky take clearly shows the result. How would you choose?',
      hint: 'Name the information the sequence must communicate.',
      answer: 'Prefer the readable opening if the shake does not obstruct the needed detail. Check its sound and neighboring views, and retain the steady take for other uses.',
    },
    quiz: {
      question: 'The audience must read a note. Which selection reason best fits that job?',
      options: ['The complete message is visible long enough, with usable supporting sound.', 'The camera is steadier, although a finger covers the final word.', 'The hand movement is smoother, although the note leaves frame early.'],
      correctIndex: 0,
      explanation: 'Readability supplies the required information. Steadiness and smooth movement are useful only if they do not remove the scene\'s decisive detail.',
    },
    takeaway: 'Choose for a named moment and preserve the reason alongside the clip.',
    sourceNote: 'Official editing training and shot-planning references are inherited. Takes and timings here are invented examples, not a tested ranking formula.',
  },
  {
    id: 'cinema-036',
    title: 'Check the sequence before polishing its transitions',
    outcome: 'Build a rough assembly that makes the missing object, search, and discovery understandable.',
    scene: 'Headphones missing from an entry hook are found beneath a scarf on the nearby bench.',
    sections: [
      {
        title: 'The headphones appear without a search',
        paragraphs: [
          'You have three recordings for a small scene: an empty headphone hook above a bench, a hand lifting the scarf on that bench, and the headphones underneath. If you show only the empty hook and the found headphones, viewers may understand the result but miss where the search happened. A polished transition cannot supply that missing action.',
          'An assembly is a provisional arrangement of selected material in story order. It lets you inspect information before fine adjustments. A straight cut changes directly from one recorded view to the next, without an added visual effect. Start with that simple change so gaps remain easy to notice.',
        ],
      },
      {
        title: 'Give each view a job',
        paragraphs: [
          'In an invented eight-second assembly, seconds zero to two show the empty hook and nearby bench. Seconds two to five show the hand lifting the scarf. Seconds five to eight reveal the headphones underneath. The first view establishes what is missing and where to look. The middle supplies the action that explains the discovery.',
          'Keep the scarf and headphone positions compatible between recordings. Continuity means making those object states and actions understandable across the changes of view. If the headphones sit somewhere else in the final view, the assembly exposes a problem worth fixing before polishing anything.',
        ],
      },
      {
        title: 'Repair the missing information first',
        paragraphs: [
          'Reorder a view, choose another recording, or record a short additional view that supplies the gap. A dissolve gradually overlaps outgoing and incoming pictures; it can mark a transition but does not invent an absent search. No joining editor is required to test the order. Number the clips in a note and replay them that way, acknowledging that gallery pauses are not the finished scene\'s timing.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The search links absence to discovery',
        alt: 'Empty hook and bench, then scarf lifted, then headphones revealed in the same location.',
        caption: 'A hypothetical eight-second assembly. Durations are examples, not a recommended pace or a proportional scale.',
        items: [
          { label: 'Empty hook and bench', detail: '0-2 s: establish the missing headphones.' },
          { label: 'Hand lifts scarf', detail: '2-5 s: show the search action.' },
          { label: 'Headphones underneath', detail: '5-8 s: show what that action reveals.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Phone', 'Headphones or another small object', 'Scarf', 'Notes; existing editor optional'],
      steps: [
        'Stage an empty usual storage spot and a nearby scarf-covered object. Keep the layout consistent for all views.',
        'Record the empty spot with nearby surface, the scarf lift, and the revealed object as three short clips.',
        'Join copies with straight cuts if supported. Otherwise number a phone note and replay the originals in that order.',
        'Ask what connects the missing object to its discovery. Note one gap and plan a replacement or extra view before effects.',
      ],
      notice: 'You can explain what each view contributes and identify any missing causal or spatial link.',
      troubleshooting: 'If the discovery seems unrelated, widen the first view to establish the search area or include the revealing hand action.',
    },
    recall: {
      prompt: 'A parcel scene jumps from a closed box to an empty shelf, but viewers cannot tell whether the box was unpacked. What is missing?',
      hint: 'Find the action that connects the two states.',
      answer: 'A view of opening or removing the contents could establish the intended event. A longer empty-shelf view alone cannot explain what happened to the parcel.',
    },
    quiz: {
      question: 'The headphone discovery feels disconnected from the empty hook. Which first change tests the information gap?',
      options: ['Hold the discovered headphones longer.', 'Include the hand lifting the scarf in the established search area.', 'Add a gradual overlap between the hook and discovery.'],
      correctIndex: 1,
      explanation: 'The middle action connects place and result. A longer ending may clarify the object, and a dissolve changes the transition, but neither supplies that action.',
    },
    takeaway: 'Make the event understandable in a rough order before decorating the joins.',
    sourceNote: 'Yale and official editing training support sequence construction. The headphone story and durations are original; a gallery replay tests order, not final playback rhythm.',
  },
  {
    id: 'cinema-037',
    title: 'Continue the movement rather than restarting it',
    outcome: 'Plan an action match by comparing movement progress, direction, and object state across two views.',
    scene: 'A notebook opens once on screen using a wider recording and a closer recording of the same action.',
    sections: [
      {
        title: 'One opening made from two recordings',
        paragraphs: [
          'You record a notebook opening from a wider view, then repeat the complete action in a closer view. A cut directly switches from one view to another. You want the viewer to follow one opening even though the camera position changes. Matching a continuing movement across that switch is called a match on action.',
          'Continuity means keeping the action and its surrounding relationships understandable. Here the important relationships are which hand lifts the cover, how far it has risen, which direction it travels, and whether the notebook stays in the same state. Matching only the color of the notebook is not enough.',
        ],
      },
      {
        title: 'Compare the last and first visible positions',
        paragraphs: [
          'Imagine keeping two seconds of the wider view until the cover is halfway raised. Begin the closer view just after a compatible halfway position, still rising at a similar pace, and let it finish over the next two seconds. The final sequence lasts four seconds in this example. These are invented timings, not a rule for opening a notebook.',
          'If the closer view begins with the cover still closed, the movement repeats. If it begins fully open, part of the movement disappears. The useful starting point is usually a small continuation, not an identical frozen position held again. The movement phase means how far through the opening you have reached.',
        ],
      },
      {
        title: 'Judge the join while it moves',
        paragraphs: [
          'Trimming selects a clip\'s start and end. Try nearby trim points and watch at normal speed, because two plausible still frames can still produce an odd pause or speed change. For this first attempt, keep both camera positions on the same side of the table. Motion can guide attention across a cut, but cannot guarantee that every mismatch disappears.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The cover keeps rising at the join',
        alt: 'Wide view raises the cover halfway, an instantaneous cut changes view, and the close view continues the opening.',
        caption: 'Hypothetical output times. The two-second boundary changes viewpoint, not the direction or starting state of the notebook action.',
        items: [
          { label: 'Wide: cover rises', detail: '0-2 s: closed to about halfway.' },
          { label: 'Cut at 2 s', detail: 'Instant change; next frame continues the rise.' },
          { label: 'Close: opening finishes', detail: '2-4 s: just past halfway to open.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Phone', 'Notebook', 'Stable support', 'Notes; existing editor optional'],
      steps: [
        'Record the complete notebook opening with both hands visible. Start closed and lift with the same chosen hand each time.',
        'Reset and record the complete action closer, keeping the phone on the same side of the table.',
        'On copies, join the wide halfway position to a slightly later matching close position. Without an editor, pause both clips and note those proposed points.',
        'Play the join at normal speed if possible. Adjust one boundary at a time; otherwise record the direction and cover angle needed for a later test.',
      ],
      notice: 'The cover appears to continue rising once rather than closing again, jumping ahead, or pausing at the join.',
      troubleshooting: 'If movement repeats, start the close view later. If it skips, start earlier; check hand, direction, and speed before adding effects.',
    },
    recall: {
      prompt: 'A bag zipper moves halfway across in a wide view, then appears fully closed in the next. How could you improve the join?',
      hint: 'Look for the next plausible stage of the movement.',
      answer: 'Find a closer segment where the zipper continues just beyond halfway in the same direction. Check normal-speed playback rather than matching only the finished bag.',
    },
    quiz: {
      question: 'Which closer-view start best continues a wider view ending halfway through a reach?',
      options: ['The hand back at its original resting position.', 'The hand already resting on the object.', 'The hand slightly farther along the same reach at compatible speed.'],
      correctIndex: 2,
      explanation: 'The third choice continues the action. The first repeats an earlier phase; the second skips the remaining reach unless that omission is intentional.',
    },
    takeaway: 'Match progress and direction, then test the moving join at normal speed.',
    sourceNote: 'Yale describes action matching within continuity editing; software training covers trimming. This original four-second plan is illustrative, not a universal invisible-cut formula.',
  },
  {
    id: 'cinema-038',
    title: 'Decide how visibly you want to skip time',
    outcome: 'Separate omitted time from the noticeable position change of a jump cut.',
    scene: 'A fixed view of folded towels compresses a staged forty-second task into two retained segments.',
    sections: [
      {
        title: 'One folded towel becomes three',
        paragraphs: [
          'Imagine a forty-second recording of folding towels. At the start one towel is folded and two remain open; at the end all three form a stack. A cut is a direct switch between recorded views or retained parts of one recording. If you join the beginning directly to the end with the camera unmoved, the hands and stack suddenly change position.',
          'That visible discontinuity between similar views is a jump cut. It can make the omission noticeable instead of pretending you watched every movement. It is not automatically a mistake, and a smooth-looking edit is not automatically a more truthful one.',
        ],
      },
      {
        title: 'Count what the sequence leaves out',
        paragraphs: [
          'An ellipsis is an omission of part of an event or interval. In this invented example, keep the first four seconds and the final four seconds. The result contains eight seconds of picture and omits the middle thirty-two seconds. The ellipsis describes missing time; jump cut describes how the change between similar views looks.',
          'You could present omitted time with a different framing or a relevant detail view instead. That may make the transition less abrupt, but the task was still shortened. A change of viewpoint alone does not establish how much time passed. Keep the towel count and the order of actions understandable if the sequence teaches a method.',
        ],
      },
      {
        title: 'State the purpose of the omission',
        paragraphs: [
          'For a staged illustration, you might want the stack to grow in visible jumps. For a factual tutorial, you should not skip a necessary fold and imply the viewer saw the whole method. Name the omitted step or preserve it. Without an editor, two paused frames and a note about the missing interval still let you plan the choice; they are not a finished edit.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Forty source seconds become eight retained seconds',
        alt: 'Keep source seconds zero to four, omit four to thirty-six, and keep thirty-six to forty as the towels become a stack.',
        caption: 'Source-time ledger for the invented recording, not proportional widths. Join the two KEEP sections directly; the middle section is absent from playback.',
        items: [
          { label: 'KEEP: one towel folded', detail: 'Source 0-4 s: retain 4 seconds.' },
          { label: 'OMIT: remaining folding', detail: 'Source 4-36 s: remove 32 seconds.' },
          { label: 'KEEP: stack of three', detail: 'Source 36-40 s: retain 4 seconds.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Phone', 'Three towels', 'Flat surface', 'Notes; existing split/trim tools optional'],
      steps: [
        'Place one folded towel and two unfolded towels on a surface. Support the phone and record folding the remaining two.',
        'Identify a short beginning segment and a short ending segment. Write their actual times; your recording need not last forty seconds.',
        'Join copies if supported, or note the two retained segments and the interval removed. Keep the original intact.',
        'Describe whether the stack should visibly jump or simply suggest elapsed work. Check that no necessary tutorial step is misrepresented.',
      ],
      notice: 'You can name both the omitted interval and the visible effect of joining the retained views.',
      troubleshooting: 'If the result suggests an impossible instruction, show the missing fold or label the omission rather than disguising it with an effect.',
    },
    recall: {
      prompt: 'A plant-care tutorial skips from wet soil to a later dry surface using a new angle. Is time still omitted?',
      hint: 'Viewpoint and elapsed time answer different questions.',
      answer: 'Yes. The new angle may soften the visible discontinuity, but it does not restore the interval. State the elapsed time honestly rather than implying immediate drying.',
    },
    quiz: {
      question: 'You want visible bursts of progress in a staged folding sequence rather than uninterrupted action. Which plan fits?',
      options: ['Join later stages from the same camera view and acknowledge skipped time.', 'Match adjacent movement phases closely across each change of view.', 'Keep the complete folding action, trimming only idle time at its ends.'],
      correctIndex: 0,
      explanation: 'The first plan combines omitted time with a visible jump between similar views. Action matching and retaining complete folds serve a more continuous presentation instead.',
    },
    takeaway: 'Decide what time to omit, then decide how visible that omission should be.',
    sourceNote: 'Yale supplies the editing distinctions. The towel action and forty-second arithmetic are invented; factual material still requires honest representation of missing time.',
  },
  {
    id: 'cinema-039',
    title: 'Let the information arrive before timing the response',
    outcome: 'Compare shot lengths around a readable reveal instead of following a universal pace rule.',
    scene: 'A staged doorstep note says USE SIDE DOOR before a hand withdraws to follow it.',
    sections: [
      {
        title: 'The note appears, but can it be read?',
        paragraphs: [
          'You stage a doorstep pickup: a hand lifts a blank cover and reveals your note, "USE SIDE DOOR." Then the hand withdraws. A cut directly replaces one recorded view with another. If the next view arrives before the last word is exposed, viewers cannot use that instruction to understand why the person changes direction.',
          'The useful reading interval starts when the required words are visible and clear, not when the clip begins. A second spent with the hand covering the message is not the same as a second with the complete message readable. Image size and focus matter alongside duration.',
        ],
      },
      {
        title: 'Change one hold, not the whole sequence',
        paragraphs: [
          'Compare two invented timings. Version A reveals the note for one second, holds the fully exposed message for one second, then shows a two-second withdrawal. Version B keeps the reveal and withdrawal unchanged but holds the message for three seconds. A lasts four seconds; B lasts six. The comparison isolates extra readable time rather than adding music or changing every shot.',
          'Editing rhythm is the felt pattern of durations, movements, speech, and sounds. Shorter shots do not necessarily make useful urgency, and longer holds do not guarantee seriousness. Ask whether the extra hold lets information register or leaves you waiting after nothing new is happening.',
        ],
      },
      {
        title: 'Check recognition before interpreting a pause',
        paragraphs: [
          'Replay on the actual phone at normal speed without pausing. You already know the words, so your judgment is easier than a new viewer\'s. A willing viewer can tell you what they read without being coached. Once the instruction is clear, judge the response separately: an added hesitation may suggest several things, not one guaranteed emotion. Choose timing for this scene and audience, not a fixed close-up length.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Version B reserves time after the reveal',
        alt: 'One second reveals the note, three seconds leave the words unobstructed, and two seconds show the hand withdrawing.',
        caption: 'Hypothetical six-second version B, not a reading-speed prescription. Only the middle interval holds the complete message still.',
        items: [
          { label: 'Cover lifts', detail: '0-1 s: words become visible.' },
          { label: 'USE SIDE DOOR', detail: '1-4 s: all three words remain exposed.' },
          { label: 'Hand withdraws', detail: '4-6 s: response follows the information.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Phone', 'Your three-word note', 'Blank cover page', 'Optional existing trim controls'],
      steps: [
        'Write USE SIDE DOOR large enough to read on your phone. Stage the note on a safe tabletop as a doorway substitute.',
        'Record a hand uncovering it, holding still, and withdrawing. Keep the full message in focus and unobstructed.',
        'Make two copies with different readable holds if supported. Otherwise record two versions changing only that hold.',
        'Replay without pausing. Note what can be read and whether the extra hold contributes; optionally ask a willing uncoached viewer.',
      ],
      notice: 'You judge the duration after all necessary information appears, rather than counting covered or blurred frames as reading time.',
      troubleshooting: 'If neither version reads, enlarge the writing or improve framing and focus before adding more seconds.',
    },
    recall: {
      prompt: 'A transit scene shows a route number only after a passing hand clears it. Where should your timing check begin?',
      hint: 'A clip can be playing before its important information is available.',
      answer: 'Begin with the route number unobstructed and readable. Then test enough visible time to recognize it before the next action, without assuming one duration fits every sign.',
    },
    quiz: {
      question: 'The last word of a note is exposed just before the next view. What is the clearest first timing test?',
      options: ['Trim more still frames to keep movement continuous.', 'Hold after the complete message is visible, leaving other timings unchanged.', 'Slow the entire reveal and response by the same amount.'],
      correctIndex: 1,
      explanation: 'The second choice isolates readable time. Removing still frames can worsen the problem; slowing everything changes several timing decisions at once.',
    },
    takeaway: 'Time the information becoming readable, then decide what the response needs.',
    sourceNote: 'Yale and editing training support duration and rhythm concepts. The example timings are invented, not tested reading thresholds or reliable emotional recipes.',
  },
  {
    id: 'cinema-040',
    title: 'Let the next sound arrive before the next picture',
    outcome: 'Plan a J-cut with incoming sound leading its picture while preserving sound-to-action alignment.',
    scene: 'A quiet hallway view gives way to a notebook after the next recording\'s page rustle begins.',
    sections: [
      {
        title: 'Hear the page before seeing the notebook',
        paragraphs: [
          'First show a quiet hallway, then a notebook on a desk. A cut directly replaces one recorded picture with another. Instead of changing picture and sound together, let the notebook recording\'s page rustle begin while the hallway remains visible. Sound now supplies a clue to the next view.',
          'The current view is outgoing; the next one is incoming. A J-cut starts incoming sound before the picture changes to its source. In an editor, the incoming sound block extends earlier along the time axis than its picture block. The timing relationship defines the technique, not an audio fade.',
        ],
      },
      {
        title: 'An exact example without shifted page sounds',
        paragraphs: [
          'For B, choose a five-second source segment beginning with the rustle. In a hypothetical eight-second sequence, show hallway A from zero to four seconds and notebook B from four to eight. Start B\'s sound at three seconds. That gives one second of incoming sound under A. Use B\'s source seconds one to five for its picture, and source seconds zero to five for its sound.',
          'At the four-second picture change, B\'s picture and sound therefore both reach source second one together. Keep that alignment afterward. Simply sliding all sound earlier while leaving the full picture untouched would make later rustles happen before the visible page movement. You need earlier available sound, not a permanent synchronization error.',
        ],
      },
      {
        title: 'Listen across the picture boundary',
        paragraphs: [
          'Check for a distracting background-noise change as well as a clear page sound. The overlap can prepare a connection, but it guarantees no particular emotion. The opposite overlap, an L-cut, keeps outgoing sound after the picture changes. Without separate audio controls, a two-row plan identifies which recording owns each sound.',
        ],
      },
    ],
    visuals: [
      {
        type: 'layers',
        title: 'J-cut: sound changes at 3 s, picture at 4 s',
        alt: 'The picture row switches from hallway to notebook at four seconds; notebook sound begins at three seconds and stays synchronized after the reveal.',
        caption: 'Two timeline rows for the invented eight-second edit, not proportional blocks. At output 4 s, both B tracks are at source 1 s.',
        items: [
          { label: 'Picture row', detail: '0-4 s: hallway A | 4-8 s: notebook B, source 1-5 s.' },
          { label: 'Sound row', detail: '0-3 s: hallway | 3-8 s: notebook B, source 0-5 s.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Phone', 'Quiet hallway or wall view', 'Notebook', 'Notes; separate audio controls optional'],
      steps: [
        'Record a still hallway for at least four seconds. Separately record a page turn with at least five seconds from its first rustle onward.',
        'Mark the rustle as B\'s source zero in your notes. Draw the diagram\'s two rows: sound starts at three seconds, picture at four.',
        'If supported, build on copies using the source ranges in the diagram. Otherwise label those ranges in your plan without claiming an exported edit.',
        'At the reveal, check that page movement and sound refer to the same source moment. Listen for an abrupt background change if playback is available.',
      ],
      notice: 'Notebook sound begins while the hallway is still visible, without leaving later page sounds ahead of their movement.',
      troubleshooting: 'If the rustle is out of sync after the reveal, restore B\'s alignment and retain earlier audio rather than shifting its whole soundtrack.',
    },
    recall: {
      prompt: 'You want a kitchen scene to be heard while a doorway is still on screen. How would you arrange the next recording?',
      hint: 'Incoming sound leads, but later visible action must still align with it.',
      answer: 'Start a short earlier portion of the kitchen recording\'s sound under the doorway, then reveal its matching picture position. Do not shift later sound away from visible actions.',
    },
    quiz: {
      question: 'Which plan lets a running tap introduce the sink view through a J-cut?',
      options: ['Show the sink first, then begin its water sound.', 'Continue hallway footsteps after the sink appears.', 'Begin the tap sound over the hallway, then reveal the synchronized sink view.'],
      correctIndex: 2,
      explanation: 'Incoming tap sound leads its picture. Footsteps continuing from the old view are outgoing overlap; delayed water sound reverses the requested order.',
    },
    takeaway: 'Let incoming sound lead the reveal without losing synchronization afterward.',
    sourceNote: 'The inherited split-edit guide and official editing training support the concept. These source ranges are original examples, not universal overlap durations.',
  },
  {
    id: 'cinema-041',
    title: 'Keep the invitation audible while the picture moves on',
    outcome: 'Plan an L-cut that preserves outgoing speech under a new view without duplicating words.',
    scene: 'A self-recorded invitation continues while the picture changes to an empty floor cushion.',
    sections: [
      {
        title: 'Look at the offered place while the sentence finishes',
        paragraphs: [
          'Record yourself saying, "There is space here if you would like to sit." The next view shows an empty floor cushion. A cut directly replaces one picture with another. You do not have to wait for the sentence to end before showing the cushion. The voice can finish while the viewer looks at the offered place.',
          'The speaker view is outgoing; the cushion view is incoming. An L-cut keeps sound from the outgoing recording after its picture has ended. You choose what to show separately from what remains audible. It is not defined by a fade, and the continuing sound need not always be speech.',
        ],
      },
      {
        title: 'Put the picture boundary inside the sentence',
        paragraphs: [
          'Imagine a seven-second sequence. The speaker is visible from zero to three seconds, then the cushion from three to seven. The original invitation remains audible from zero to five seconds. For two seconds after the picture changes, you hear the outgoing speaker while seeing the cushion. Quiet room sound continues from five to seven seconds.',
          'Keep the voice aligned with the speaker\'s mouth before the picture change, and let the original sentence continue afterward. Do not repeat the final words to fill the overlap. Record some room tone, meaning the background sound of the room without intentional speech, so the end of the voice need not drop into an artificial silent hole.',
        ],
      },
      {
        title: 'The overlap does not prove a reaction',
        paragraphs: [
          'An empty cushion can invite several interpretations; its meaning depends on the scene. If you instead show a real listener, do not present an unrelated reaction as proof of how they responded. A J-cut is the reverse timing choice: incoming sound begins before its picture. With no separate audio controls, write the two rows and mark where the voice actually ends.',
        ],
      },
    ],
    visuals: [
      {
        type: 'layers',
        title: 'L-cut: picture changes at 3 s, voice ends at 5 s',
        alt: 'Speaker picture ends at three seconds, but the invitation continues until five over the incoming cushion picture.',
        caption: 'Hypothetical seven-second timeline. The 3-5 s interval contains the outgoing voice and incoming picture together; rows are not a proportional scale.',
        items: [
          { label: 'Picture row', detail: '0-3 s: speaker | 3-7 s: empty cushion.' },
          { label: 'Sound row', detail: '0-5 s: original invitation | 5-7 s: quiet room tone.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Phone', 'Empty cushion or spare place', 'Notes; separate audio controls optional'],
      steps: [
        'Record yourself saying the original invitation, then stay quiet for several seconds to capture the same room\'s background sound.',
        'Record a separate still view of the empty cushion for several seconds without speaking. Keep both originals.',
        'On copies, change to the cushion before the invitation ends while retaining its original voice. Without audio tools, draw the two rows with actual proposed times.',
        'Check that the words play once and mouth movement matches before the switch. Afterward, check for a distracting background drop rather than adding another voice copy.',
      ],
      notice: 'You can hear the sentence finish after its speaker has left the picture.',
      troubleshooting: 'If words repeat, remove the duplicate audio segment. If the room suddenly goes silent, use a compatible quiet portion of the same recording.',
    },
    recall: {
      prompt: 'A craftsperson explains a repair while you want to show the repaired corner. How could an L-cut help without changing their words?',
      hint: 'Let the original explanation continue after its speaking image ends.',
      answer: 'Show the relevant corner while retaining the end of the original explanation. Keep the statement intact and ensure the detail actually belongs to the repair being described.',
    },
    quiz: {
      question: 'Which arrangement is an L-cut when moving from a speaker to a detail view?',
      options: ['The original sentence continues after the detail appears.', 'The detail\'s sound begins before the speaker picture ends.', 'The voice and speaker picture end on the same boundary.'],
      correctIndex: 0,
      explanation: 'Outgoing speech continues under the new picture. Incoming sound arriving early is a J-cut; simultaneous boundaries create no split between those picture and sound changes.',
    },
    takeaway: 'An L-cut carries outgoing sound beyond the outgoing picture.',
    sourceNote: 'Inherited split-edit and Yale sound references provide terminology. This original invitation is not a claim about a listener\'s emotions or a fixed overlap length.',
  },
  {
    id: 'cinema-042',
    title: 'Test what a neighboring image makes you infer',
    outcome: 'Compare two image sequences while treating their suggested meanings as interpretations, not facts.',
    scene: 'A handmade Saturday calendar card alternates with either a brush tray or a packed bag.',
    sections: [
      {
        title: 'The same Saturday points toward different plans',
        paragraphs: [
          'Make a calendar card with Saturday circled. Follow it with a tray of paintbrushes, then return to the card. You might read the sequence as a planned painting day. Replace only the brush tray with a packed bag. Now the circled day might suggest a departure. The calendar image itself has not changed.',
          'A cut is a direct switch between recorded views. Montage can mean editing broadly; here it means building an idea through neighboring images. Juxtaposition simply means placing things next to one another for comparison or association. The relationship can suggest something neither picture establishes alone.',
        ],
      },
      {
        title: 'Change the neighbor, keep the comparison fair',
        paragraphs: [
          'Use two seconds for each image in both invented six-second versions: calendar, neighbor, calendar. Keep the calendar recording identical and use no added music. Changing only the middle image gives you a clearer test of its contribution. Faster cuts or different music would introduce other possible explanations for a changed reading.',
          'Write an alternative interpretation too. The brushes could mean cleaning up after painting, not preparing to paint. The bag could mean storage rather than travel. Returning to the calendar encourages a relationship with the date, but does not tell you which relationship every viewer will choose.',
        ],
      },
      {
        title: 'An association is not evidence of an event',
        paragraphs: [
          'Show the pairs to a willing viewer without first announcing your intended story, or list possible readings yourself. Ask what seems connected and why. In factual work, neighboring images can imply a cause, motive, or sequence that was never recorded. Keep context honest. This exercise explores how arrangement proposes meaning; it does not establish a reliable emotion button or a license to fabricate a real event.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Version A: Saturday and brushes',
        alt: 'Calendar, brush tray, and the same calendar each occupy two seconds.',
        caption: 'Invented six-second order. A painting plan is one possible reading, not a fact established by these images.',
        items: [
          { label: 'Saturday circled', detail: '0-2 s: shared calendar view.' },
          { label: 'Brush tray', detail: '2-4 s: the changing neighbor.' },
          { label: 'Same calendar', detail: '4-6 s: return to the date.' },
        ],
      },
      {
        type: 'timeline',
        title: 'Version B: Saturday and luggage',
        alt: 'The same calendar, a packed bag, and the calendar again each occupy two seconds.',
        caption: 'Only the middle image changes. A departure is possible; the bag could also be stored belongings.',
        items: [
          { label: 'Saturday circled', detail: '0-2 s: identical calendar view.' },
          { label: 'Packed bag', detail: '2-4 s: replacement neighbor.' },
          { label: 'Same calendar', detail: '4-6 s: identical return.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Phone', 'Your calendar card', 'Brush tray or hobby tools', 'Bag'],
      steps: [
        'Make a fictional calendar card without private plans. Record it, your hobby tools, and a bag as separate still views.',
        'Plan calendar-tools-calendar and calendar-bag-calendar with equal holds. Join copies if supported or replay from numbered notes.',
        'Keep sound and the calendar view alike between versions. Do not change several ingredients just to strengthen a preferred interpretation.',
        'Write one possible reading and one alternative for each version, or ask a willing viewer what connection they notice.',
      ],
      notice: 'You can explain how the neighboring image changes a possible reading without claiming certainty about it.',
      troubleshooting: 'If both versions suggest the same thing, ask what visual detail supports that reading before adding more shots or music.',
    },
    recall: {
      prompt: 'A closed front door is followed by a raincoat in one version and a wrapped parcel in another. What should you test?',
      hint: 'Separate the proposed relationship from facts actually visible.',
      answer: 'Test possible weather or delivery associations while holding other choices constant. Neither pair proves why the door is closed; consider a competing explanation for each.',
    },
    quiz: {
      question: 'You want to isolate a neighboring image\'s contribution. Which comparison fits?',
      options: ['Change both the middle image and its music.', 'Keep calendar, timing, and sound fixed; replace only the middle image.', 'Show the middle image alone and choose its one meaning.'],
      correctIndex: 1,
      explanation: 'The controlled swap tests the relationship between shots. Changing music adds another variable; an isolated image does not test its effect beside the calendar.',
    },
    takeaway: 'Neighboring images invite relationships; they do not prove one fixed interpretation.',
    sourceNote: 'Yale supports the montage distinction. These original sequences and readings are hypothetical, without source film stills or guaranteed effects. Gallery replay tests association, not final cut timing.',
  },
  {
    id: 'cinema-043',
    title: 'Match the shots before choosing a shared color treatment',
    outcome: 'Separate fixing a color mismatch from applying an intentional look to already compatible shots.',
    scene: 'Two recordings of the same hand and white page differ because one has an unwanted warm cast.',
    sections: [
      {
        title: 'The hand changes color between views',
        paragraphs: [
          'You record your hand beside a white page in daylight, then repeat under a warmer lamp. A cut directly switches between views. At that switch the page looks more orange, and the hand changes with it. Before adding a shared style, decide whether that difference belongs to the scene or is an unwanted mismatch.',
          'Color correction commonly means balancing recorded brightness, reducing unwanted color casts, and matching shots. At capture, exposure concerns how much light is collected. An editor\'s exposure control changes recorded values; it cannot send new light into the original scene. White balance adjusts how illumination is interpreted across colors.',
        ],
      },
      {
        title: 'Use the page as a comparison, not a skin target',
        paragraphs: [
          'Keep daylight shot A as the reference. On a copy of warmer B, reduce excess amber using an available temperature or color control. Begin with a small change and compare page and hand together. Ordinary paper is not calibrated; matching it does not justify making skin lighter.',
          'The illustrative check sequence shows A for two seconds, unchanged B for two, then adjusted B for two. Look for a smaller unwanted jump. A creative grade deliberately changes colors and light-to-dark relationships for a chosen look. After correction, test it on both shots rather than hiding their mismatch.',
        ],
      },
      {
        title: 'Keep the detail that made the comparison useful',
        paragraphs: [
          'Hold display settings steady and compare with originals. Strong changes to compressed phone video can reveal speckles or stepped gradients. Stop if the treatment loses useful hand detail or changes identity. A warm treatment does not guarantee warmth of feeling. With no color controls, record separate correction and creative decisions in notes instead of installing paid software.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'A six-second mismatch check',
        alt: 'Reference hand shot A, unchanged warmer B, and adjusted B are compared for two seconds each.',
        caption: 'Invented comparison sequence, not a finished story or proportional timeline. Compare the same page and hand.',
        items: [
          { label: 'A: daylight reference', detail: '0-2 s: keep original appearance.' },
          { label: 'B: warmer recording', detail: '2-4 s: inspect the unwanted change.' },
          { label: 'B: restrained correction', detail: '4-6 s: check for a smaller mismatch.' },
        ],
      },
      {
        type: 'swatches',
        title: 'Page colors, not skin targets',
        alt: 'A pale reference page, warmer mismatch, matched page, and a slightly warm shared treatment.',
        caption: 'Illustrative page colors, not measurements or skin targets. The optional final treatment applies to both shots.',
        items: [
          { label: 'A reference', detail: 'Comparison starting point.', color: '#e7e3d9' },
          { label: 'B mismatch', detail: 'Excess amber in this example.', color: '#e8cdab' },
          { label: 'B matched', detail: 'Reduce the unwanted difference.', color: '#e7e3d9' },
          { label: 'Shared treatment', detail: 'Optional look for both shots.', color: '#ded5c5' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Phone', 'White page', 'Your hand', 'Existing color controls or notes'],
      steps: [
        'Record your hand and page in two safely available lighting conditions. Keep every original and choose one as the reference.',
        'On a copy, use a small available color adjustment to reduce the unwanted mismatch. Without controls, describe the correction needed.',
        'Compare reference, unchanged copy, and adjusted copy at steady screen settings. Inspect hand detail as well as the page.',
        'Only then test or describe a shared treatment. Record it separately from the correction and undo it if detail or representation suffers.',
      ],
      notice: 'Your correction addresses a mismatch; your later treatment makes a separate, intentional choice.',
      troubleshooting: 'If one adjustment fixes one area but harms another, simplify the lighting or accept the limit rather than pushing a stronger preset.',
    },
    recall: {
      prompt: 'Two views of a blue jacket disagree in color. Both are meant to receive a subdued final look. What comes first?',
      hint: 'Separate compatibility from the treatment you want both shots to share.',
      answer: 'Reduce the unintended mismatch while preserving the jacket\'s identity, then test the shared subdued treatment. A common preset alone does not make differing inputs agree.',
    },
    quiz: {
      question: 'Which action is primarily correction in this workflow?',
      options: ['Make both shots deliberately warmer after they already match.', 'Choose a stronger contrast treatment for the whole sequence.', 'Reduce B\'s unwanted warm cast so it agrees with reference A.'],
      correctIndex: 2,
      explanation: 'Reducing the mismatch is correction here. A shared warm or higher-contrast look is a creative treatment, not proof that the original mismatch is solved.',
    },
    takeaway: 'Match unwanted differences first; judge a shared look as a separate decision.',
    sourceNote: 'Inherited official color and white-balance guidance supports these tasks. Terms overlap; these original colors are not measured skin standards.',
  },
  {
    id: 'cinema-044',
    title: 'Check the recording format before a log conversion',
    outcome: 'Avoid guessing a technical color transform from a clip\'s appearance or resolution.',
    scene: 'A plain blue folder and white page provide visible detail for comparing an ordinary clip and saved copies.',
    sections: [
      {
        title: 'A flat-looking folder is not a format label',
        paragraphs: [
          'A blue folder filmed in gentle room light has only a small difference between its bright and dark areas. That difference is contrast. The picture looks flat, so an online tip suggests a log conversion. Appearance alone does not tell you what kind of recording you made. Low scene contrast can produce a restrained image in an ordinary camera mode.',
          'Log recording stores brightness using a particular encoding curve, a rule for mapping captured light into file values. A technical transform converts between specified input and output color definitions. It must match the actual recording format and intended output, not simply a camera brand or a flat-looking preview.',
        ],
      },
      {
        title: 'Compare the detail before adding a conversion',
        paragraphs: [
          'Consider three versions of the same hypothetical three-second folder clip. The original preserves the folder creases and marks on the white page. A neutral saved copy looks similar. In the illustrated failed version, an unrelated log conversion makes dark creases merge and bright page marks disappear. That is lost visible separation, not extra information.',
          'Ordinary video does not become log when you lower its contrast. HDR means high dynamic range: video with extended brightness handling that also depends on the display. It is not synonymous with log. Neither feature is required or guaranteed on an older phone. Use a supported recording mode and document what is known.',
        ],
      },
      {
        title: 'Unknown is a useful entry in your notes',
        paragraphs: [
          'Resolution and frame rate do not identify color encoding. Mark unlisted details unknown and leave guessed technical transforms off. Compare the original with a neutral export under unchanged viewing conditions. If that copy changes color, inspect recording, editor, and export handling before adding filters. Keep the original.',
        ],
      },
    ],
    visuals: [
      {
        type: 'layers',
        title: 'Three alternate tracks for the same short test',
        alt: 'Original folder footage, a neutral copy, and an illustrated failed conversion occupy the same three-second interval on alternate picture rows.',
        caption: 'Compare one row at a time, not stacked effects. The failed result is hypothetical; it does not describe every transform or device.',
        items: [
          { label: 'Original folder clip', detail: '0-3 s: creases and page marks remain distinct.' },
          { label: 'Neutral saved copy', detail: '0-3 s: compare those same details with the original.' },
          { label: 'Guessed log conversion', detail: '0-3 s: in this failed example, dark and bright detail merge.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Phone and clip information', 'Plain folder and marked white page', 'Optional existing export controls'],
      steps: [
        'Record a short folder-and-page clip in your ordinary supported mode. Keep it as the untouched reference.',
        'Check available recording settings and clip information. Note known mode, resolution, and rate; mark unlisted color-format details unknown.',
        'If available, save a neutral copy without an unverified log transform. Otherwise write which input information a conversion would require.',
        'Compare the original and copy at unchanged display settings. Note where any color or detail change appears before making further adjustments.',
      ],
      notice: 'You can separate known recording information from assumptions based on a flat or colorful preview.',
      troubleshooting: 'If a neutral export already differs, keep the original and inspect format handling. Do not add another unknown transform to compensate.',
    },
    recall: {
      prompt: 'A friend sends a low-contrast sunset clip with only resolution and frame rate listed. Is that enough to select a log transform?',
      hint: 'Picture dimensions and sampling rate are not the encoding curve.',
      answer: 'No. Ask for the actual recording mode or inspect trustworthy format information. Keep a neutral workflow while that remains unknown rather than selecting an input transform by appearance.',
    },
    quiz: {
      question: 'An ordinary clip looks flat and its color encoding is unlisted. Which step best establishes whether a technical conversion fits?',
      options: ['Check the actual recording mode while leaving unverified transforms off.', 'Choose the log conversion whose preview looks most attractive.', 'Reduce a conversion\'s strength until its harshest changes disappear.'],
      correctIndex: 0,
      explanation: 'A technical conversion needs an identified input. An attractive preview or reduced strength can guide a creative choice, but neither identifies the recording\'s encoding.',
    },
    takeaway: 'Identify the input before applying a technical transform; unknown is better than guessed.',
    sourceNote: 'Official color-management training and inherited model-specific recording guidance support the distinction. The failed conversion is illustrative; no log or HDR capability is assumed.',
  },
]