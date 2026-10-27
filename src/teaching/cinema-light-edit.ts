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
    outcome: `Work out which surfaces of a face the daylight is reaching and which the camera is seeing, then pick a camera position that shows the detail the portrait needs before touching any setting.`,
    scene: 'A consenting friend poses on the floor beside a closed window and low sill.',
    sections: [
      {
        title: 'The window stays; your view changes',
        paragraphs: [
          `A friend has agreed to a short portrait and is sitting on the floor beside a closed window. You try a few spots. From one, you can see both of their eyes clearly and their expression reads at once. From another, you get a handsome dark outline of their head against the bright glass and almost no face at all. You have not switched anything on or changed a setting. The daylight is exactly where it was.`,
          `What changed is which surfaces the camera is looking at, relative to where the light is landing. A few words make this easier to think about. A shadow is an area getting less light because something is blocking part of the illumination; it is rarely black, because light bounces off the room into it. Front light comes from roughly the camera's side of the subject. Side light comes from the side. Backlight comes from behind the subject, toward the camera. The window supplies one of these depending only on where you stand.`,
        ],
      },
      {
        title: 'Follow the light to the face',
        paragraphs: [
          `Think about reading the lettering on a coin. Hold it under a lamp and look at the face the light is falling on, and every letter stands out. Turn the coin so you are looking at the side away from the lamp, and the same letters vanish into shade. Nobody fixes this by turning the lamp up. You turn the coin, or you move your head round to the lit side. The lamp was never the problem; your view of the lit surface was.`,
          `Your friend's face is the coin. Imagine a line from the window to them. A camera placed near the window looks along that line and sees the surfaces the daylight is landing on: both eyes, the whole expression. A camera across the room, looking back toward the window, sees the surfaces turned away from the light, which is where the outline comes from. A camera off to one side, between those two, sees a bright cheek beside a darker one, with a nose shadow falling across the face. Ask your friend to turn toward each camera position as you move, so the comparison is fair.`,
          `Exposure is the control that decides how much light the camera records, and it sets overall brightness. Automatic exposure will try to rescue a dark face by brightening everything, and it can partly succeed. But it cannot move the window, and it cannot move a nose shadow from one cheek to the other. Only your position does that.`,
        ],
      },
      {
        title: 'Choose for the eyes, not a lighting label',
        paragraphs: [
          `Decide what the portrait is for before you decide where to stand. For an introduction where the expression matters, start on the window side and check that both eyes are visible and readable. For a study of the shape of someone's head, the backlit outline may be exactly right. Neither position is better in general, and neither carries a guaranteed mood. Side light is not automatically dramatic and front light is not automatically flat; they show different surfaces, and that is all you can promise.`,
          `When you find the position that shows what you need, sketch three things on a scrap of paper: the window, the person, and the camera. That drawing lets you come back to the same relationship tomorrow. It records today's daylight at this hour, not a permanent fact about the room; a cloudy afternoon or a low winter sun will shift the result.`,
          `Replay the takes at an unchanged screen brightness. The question for each is simple: can I see the detail I was after?`,
        ],
      },
      {
        title: 'Fixing position with a slider',
        paragraphs: [
          `The first mistake is staying in the backlit spot and brightening the recording. The face becomes a lighter gray smear and the window burns out, because exposure changes how much light is recorded, not which surfaces are lit. It is turning up the lamp instead of turning the coin. The second mistake is staying backlit and moving closer. The outline gets bigger. It is still an outline.`,
          `A third mistake is choosing a position because of its name. Deciding you want side light for drama, then discovering the nose shadow hides the eye the scene needs, is letting a label choose for you.`,
          `Two habits. Before any portrait, trace the line from the light to the face and ask which side of that line your camera is on. And choose the position by the detail you need to see, writing the window, the person, and the camera on a scrap so you can find it again.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Three safe floor positions beside the sill',
        alt: 'Window above a person; camera A near the window, B beside the person, C opposite the window.',
        caption: `Follow the light arrow from the window to the person first; that is the line the whole lesson turns on. Then find camera A on the lit side, B off to the side, and C looking back into the window, each turned toward the lit or unlit face of the coin. A top view, not measured distances.`,
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
        `Pick three clear floor positions around the subject: window side, side on, and opposite the window. Stay inside, off the sill, and never aim direct sun into anyone's eyes.`,
        `Record from the window side with the participant facing the phone. If you are using your own hand instead, turn its palm toward the camera so the lit surface faces the lens, like the lit face of the coin.`,
        `Repeat from the side position and from opposite the window, keeping the subject in the same spot and turning toward each view. Only the camera's side of the light line changes.`,
        `Replay all three at the same screen brightness and pick the one that shows the detail you were after. Sketch the window, the person, and that camera position so you can rebuild it.`,
      ],
      notice: `The lit and shaded surfaces you can see change from position to position even when the phone's automatic brightness partly compensates. The eyes appear or vanish depending on which side of the light line you stood on, and no slider moved them.`,
      troubleshooting: `If pale walls bounce so much light around that all three views look alike, the room is filling every shadow for you. Move the subject nearer the window, without blocking the walking route, so the daylight dominates and the difference between positions becomes visible.`,
    },
    recall: {
      prompt: 'A plant in front of a bright balcony door records as an outline. How could you reveal its leaf texture?',
      hint: 'Put the camera on the same side as the arriving daylight.',
      answer: `Move to a safe spot beside the balcony door and film looking into the room, so the camera is on the lit side of the plant. Then it sees the leaf surfaces the daylight is landing on instead of their shaded backs, which is turning the coin toward the lamp. Brightening the backlit recording would give you a paler outline, not texture.`,
    },
    quiz: {
      question: 'You need an expression rather than an outline. Which first change addresses the light direction?',
      options: ['Keep the backlit view and brighten its recording.', 'Move toward the window side and have the person face you.', 'Keep the backlit view and move closer to the face.'],
      correctIndex: 1,
      explanation: `Moving to the window side puts the camera on the lit side of the light line, so it sees the surfaces the daylight is reaching, including both eyes. Brightening from the backlit spot is turning up the lamp while still looking at the unlit face of the coin, and moving closer just makes the same outline bigger.`,
    },
    takeaway: 'Map where light arrives and where the camera looks before adding equipment.',
    sourceNote: 'The inherited lighting guide supplies craft terminology. This original portrait exercise does not establish lighting ratios, permanent room conditions, or guaranteed emotions.',
  },
  {
    id: 'cinema-026',
    title: 'Judge soft light by the width of a shadow edge',
    outcome: `Judge whether light is soft by how gradually a shadow's edge changes from lit to shaded, not by how bright or dark the whole picture looks, using nothing but a finger and a page.`,
    scene: 'A finger casts a shadow on white paper beside a window and under an intact room lamp.',
    sections: [
      {
        title: 'A dark picture can have a sharp edge',
        paragraphs: [
          `Lay a white page on the table beside a window and hold one finger a little way above it. The finger blocks some of the daylight and throws a shadow on the paper. Now look, not at the shadow, but at its edge: the place where bright paper turns into shaded paper. By the window that edge is probably a fuzzy band. Take the same page under a small desk lamp and hold the finger at the same height. The shadow may be darker, and its edge is suddenly a crisp line.`,
          `This is what the words hard and soft mean in lighting, and the first thing to get straight is what they do not mean. A hard shadow has a narrow, abrupt edge. A soft shadow has a wide, gradual edge. Neither word says anything about how bright the picture is. A dim lamp can throw a razor-sharp finger outline; a huge bright window can throw a fuzzy one. And turning your phone's screen brightness down changes how you see both areas on the display. It does nothing at all to the light on the paper.`,
        ],
      },
      {
        title: 'Why a broad source changes the boundary',
        paragraphs: [
          `Think about shadows on a sunny day and on an overcast one. In full sun your shadow on the pavement has a hard black outline; you could trace it with chalk. On a cloudy day you barely have a shadow at all, just a vague darkening under your feet with no edge anyone could trace. The sun is a small bright dot in the sky. The cloud cover is a source the size of the whole sky. The difference between the two shadows is entirely about how big the thing lighting you appears to be.`,
          `Here is the mechanism. A source that looks large from where the finger is sends light from many directions at once. Near the edge of the shadow, the finger blocks light from some of those directions but not others, so that strip of paper is partly lit, then a bit more lit, then fully lit. The transition spreads out. A source that looks small sends light from almost one direction, so a point on the paper is either blocked or not, and the edge is narrow. Moving a lamp further away makes it look smaller, which makes its shadows harder, not softer.`,
          `Two things can fool the test. The gap between finger and paper also widens the edge, so keep that gap the same for both conditions or you have changed two variables at once. And indirect daylight through a window is not the same as direct sun through it. A sunbeam is still the small sun, and it will throw hard shadows even though it arrives through a big pane of glass.`,
        ],
      },
      {
        title: 'Compare the boundary you actually recorded',
        paragraphs: [
          `Set the comparison up fairly. Same page, same finger, same gap above the paper. Photograph the shadow in indirect daylight from the window. Then photograph it again under an intact room lamp used normally, never covered or modified. Put the two pictures side by side at the same size and look only at the edge: how many millimeters does it take to go from lit to shaded in each?`,
          `Resist the pull of the darker photograph. The lamp version may have a deeper, blacker shadow, and that is a fact about exposure, the light the camera collected, and about the lamp's output. Softness lives in the width of the boundary and nowhere else. Label what you see: this edge is wide, this one is narrow.`,
          `Phone processing and reflections from the table can blur or sharpen things slightly, so be modest. Describe the edge you recorded rather than assuming every lamp gives hard light or every window gives soft. The point of the paper test is that you looked.`,
        ],
      },
      {
        title: 'Confusing dim with soft',
        paragraphs: [
          `The first confusion is the one from the opening: calling a dark picture soft because it feels gentle, when its shadow edges are knife-sharp. The second is the reverse: assuming that dimming a hard source will soften it. A dim hallway lamp throwing a crisp nose shadow will throw a dimmer crisp nose shadow if you turn it down. Output changed; apparent size did not. Only a bigger apparent source, a lamp bounced off a wall or a wider window, widens the edge.`,
          `A third confusion is judging softness by how deep the shadow is. Depth depends on how much light reaches the shaded area from elsewhere in the room. A shallow gray shadow can still have a hard edge.`,
          `Two habits. When someone says a light is soft or hard, look for a shadow edge and measure its width with your eye before you agree. And when you want softer light, ask how to make the source look bigger from the subject, not how to make it dimmer.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Side view of the paper test',
        alt: 'A broad window illuminates a finger held above paper; the phone looks toward the paper from the side.',
        caption: `Follow the light arrow from the broad window to the finger, then notice the gap between finger and paper; that gap must stay the same in both conditions. The phone looks down at the paper, where the edge is. A side view, not a scale drawing.`,
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
        caption: `Look at the first pair and notice there is nothing between lit and dark: that is the sunny-day edge. Then read the last four chips in order and watch the shade arrive in steps: the cloudy-day edge. The end values are the same in both rows; only the width of the change differs. Schematic values, not measured pixels or a calibrated display.`,
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
        `Rest the page flat beside a window with indirect daylight and hold one finger a small, comfortable gap above it. The finger is your cloud-or-sun test object, and the gap is the one thing you will hold constant.`,
        `Photograph the shadow from above and note the gap by laying another finger alongside as a rough ruler. Writing the gap down is what makes the second condition comparable.`,
        `Repeat with the same gap under an intact lamp used normally, or at a second daylight position. Never cover a lamp with anything and never look at the sun.`,
        `Put both pictures side by side at the same size with screen brightness unchanged and compare the width of the edge, not the darkness of the shadow. If you cannot tell, write uncertain rather than guessing.`,
      ],
      notice: `What justifies calling one shadow softer is a broader transition at its edge, which you can see in the picture, rather than a dimmer image overall. You have told the overcast day from the sunny one by the edge alone, with the depth of the shadow set aside as a separate fact.`,
      troubleshooting: `If the edge is so faint you cannot find it, the shaded area is being filled by light from the rest of the room. Move the finger slightly closer to the paper so the shadow firms up, then repeat both conditions at that new gap. Changing the gap for only one condition would break the comparison.`,
    },
    recall: {
      prompt: 'A dim hallway lamp makes a crisp nose shadow. Would dimming it further necessarily soften that edge?',
      hint: 'Separate the amount of light from its apparent source size.',
      answer: `No. Dimming lowers the output, so the picture gets darker, but the lamp still looks like a small point from the face, and a small source keeps throwing a narrow-edged shadow. The sun is not softer at dusk; it is just dimmer. To widen the edge you would need a source that looks bigger from the subject, such as the lamp's light bounced off a nearby pale wall, if that can be done safely.`,
    },
    quiz: {
      question: 'Which observation is the best evidence of a softer shadow?',
      options: ['The whole page records darker.', 'The dark region is less deep.', 'The boundary spreads gradually across the paper.'],
      correctIndex: 2,
      explanation: `Softness is defined at the edge, so a boundary that spreads gradually, the cloudy-day shadow, is the evidence. A darker page is about exposure and output, and a shallower shadow is about how much room light is filling it; both can change without the edge width changing at all.`,
    },
    takeaway: 'Judge softness at the boundary, not from overall brightness.',
    sourceNote: 'Lighting terminology is inherited. These schematic edges are original; fill amount and mood claims are not substitutes for apparent source size.',
  },
  {
    id: 'cinema-027',
    title: 'Your shot is too dark on one side. Try a sheet of paper.',
    outcome: `Brighten only the shaded side of a subject by bouncing daylight off a sheet of white paper, so the handle becomes visible without buying a light or lifting the brightness of the whole picture.`,
    scene: 'The approved mug, window, white notebook page, and fixed phone demonstration.',
    sections: [
      {
        title: 'Start with the handle you cannot see',
        paragraphs: [
          `You set a mug on the table beside a window and point your phone at it. The side facing the window looks fine, bright and clear. The other side has sunk into shade so deep that you can barely make out the handle. A shadow is an area that gets less light because the subject itself is blocking some of the daylight, and this one is doing its job a little too well. The handle is there. The camera just cannot see it.`,
          `Your first instinct is the brightness slider in an editor. Push it up and the handle does appear. So does everything else. The side that was already bright is now glaring, the table has gone pale, and the picture looks washed out. You wanted to change the light on one part of the mug and you changed the whole image instead. There is a cheaper, more precise tool than the slider, and it is sitting in your notebook.`,
        ],
      },
      {
        title: 'Why paper can change the picture',
        paragraphs: [
          `Think about a snowy day. Even standing in the shade of a building, your face is bright, and people's chins and the undersides of their hats are lit from below. Nothing is shining upward at them. The snow is simply white, and white surfaces throw back a lot of the light that lands on them. The sky lights the snow; the snow lights the underside of your chin. Light that has bounced is still light.`,
          `A sheet of white paper is a small patch of snow you can hold where you want it. The window sends light toward the mug; the far side gets little of it directly. Hold the page beside that dark side, facing back toward the mug, in a spot where daylight from the window can also reach the page. Some of the light landing on the paper comes back off it toward the handle. Filmmakers call the technique bounce, and the light that reaches a shaded area to reveal it is called fill.`,
          `Two things to keep straight. The paper is not a lamp; it has no light of its own and only redirects what is already in the room. And position matters: it goes on the opposite side from the window, never between the window and the mug, and daylight needs a clear path to reach it around the mug. Snow in a dark cellar lights nothing.`,
        ],
      },
      {
        title: 'Watch the handle while the paper moves',
        paragraphs: [
          `Keep the mug and the phone exactly where they are, so the only thing that changes is the paper. Bring the page to roughly a handspan from the dark side and turn it slowly, like angling a mirror, while you watch the handle on the screen. At some angle the handle should lift out of the shade while the bright side of the mug stays about as it was. That is the comparison that matters: more handle, little change elsewhere.`,
          `One trap. Exposure is the camera's control over how much light it records, and in automatic mode the phone will keep adjusting it as the scene changes. When the paper brightens the shade, the phone may quietly darken everything to compensate, hiding your result. If your video mode has an exposure lock, set it before you bring the paper in. If it does not, check with your own eyes as well as the screen; your eyes do not auto-adjust in the same way.`,
          `Then keep the conclusion modest. The paper revealed a handle in this light at this hour. It did not abolish shadows, and it will not rescue a shot where the window itself is the problem.`,
        ],
      },
      {
        title: 'Where the snow stops working',
        paragraphs: [
          `The first mistake is putting the paper between the window and the mug. Now it blocks the main light instead of returning it, and the whole mug goes dark. Snow on the wrong side of the building lights nothing you can see. The second mistake is holding the paper where no daylight reaches it, tucked in a corner behind the mug; a page in shade has nothing to bounce.`,
          `The third mistake is reaching back for the slider when the paper seems to do nothing. Before you do, angle the page to catch the window and send light toward the handle, and move it closer. Only if a well-placed, well-lit page changes nothing should you conclude the room's pale walls are already filling the shade for you.`,
          `Two habits. When one side of a subject is too dark, ask where light is already falling that you could redirect, before you touch brightness. And when you test any lighting change, hold everything else still and watch one specific detail, the handle, not the general look of the shot.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Window left, paper right, phone fixed',
        alt: 'Daylight reaches the mug and passes above it to white paper; paper returns light to the handle side. The phone stays below.',
        caption: `Follow the two daylight arrows from the window first: one lands on the mug, the other travels past it to the white paper. Then follow the bounce arrow back from the paper to the mug's dark side. That is the snow lighting your chin. The phone arrow means view, not light. A top view with simplified distances.`,
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
        `Set the mug on a stable table near a window and turn it so the handle sits on the side away from the light. You need the handle in the shade for the test to show anything.`,
        `Support the phone so it will not move and record a few seconds with no paper in play. If your video mode offers an exposure lock, set it now, so the camera cannot quietly undo the change you are about to make.`,
        `Hold the page about a handspan from the dark side, white face toward the mug, in a spot where daylight from the window lands on it. The page is only snow if the sky can reach it.`,
        `Turn the page slowly while watching the handle on screen, and note the angle where it becomes easier to see. The handle is your one detail; ignore the general look.`,
        `Take the page away and look again, then compare the two. Keep the paper well clear of bulbs, heaters, vents, and anything warm.`,
      ],
      notice: `When the handle gains detail while the bright side of the mug barely changes, the bounce is landing where you aimed it. You changed the light on one part of the mug, which is exactly what the brightness slider could not do.`,
      troubleshooting: `If the page makes no visible difference, first bring it closer or use a larger sheet, keeping it out of the window's direct path to the mug. If a big, close, well-lit page still changes nothing, your pale walls are probably bouncing enough light already to fill the shade, and that is a true result about this room rather than a failure of the method.`,
    },
    recall: {
      prompt: 'A friend\'s left cheek looks clear, but their right eye disappears into shadow. Where would you first try the page?',
      hint: 'Aim existing light at the missing detail, not at the already-bright cheek.',
      answer: `On their right, the shaded side, just outside the picture, with the white face turned toward them and daylight from the window landing on it. That is snow placed where the chin is dark. Angle it slowly until the right eye becomes readable, and leave the bright left cheek alone; it does not need help and adding light there would only flatten the face.`,
    },
    quiz: {
      question: 'The page makes no visible difference. Which first adjustment tests whether useful light is reaching it?',
      options: ['Angle it to catch daylight and return light toward the handle.', 'Put it directly between the window and mug.', 'Keep it fixed and raise the whole recording\'s brightness.'],
      correctIndex: 0,
      explanation: `A page only bounces what lands on it, so angling it to catch the window and aim at the handle tests the one path that matters: sky to snow to chin. Putting it between the window and the mug blocks the main light instead of returning it. Raising the recording's brightness lifts the whole picture and tells you nothing about whether the bounce works.`,
    },
    takeaway: 'Bring light to the missing detail before brightening the whole image.',
    sourceNote: 'The approved original example is retained. StudioBinder supports bounce and fill; Apple controls are model-specific. No fixed lighting ratio or measured improvement is claimed.',
  },
  {
    id: 'cinema-028',
    title: 'Reduce reflected light with a dark surface',
    outcome: `Deepen one shadow by intercepting the light a pale wall bounces into it with a dark matte surface, while leaving the main daylight path untouched and checking a bright area did not change too.`,
    scene: 'An open paperback beside a pale wall loses the visible crease between its raised pages.',
    sections: [
      {
        title: 'The page crease nearly disappears',
        paragraphs: [
          `You are filming an open paperback to show how its pages curve up from the spine. Daylight comes in from a window on the left. You expect the crease in the middle to sit in a soft shadow that explains the curve. Instead the crease is almost as bright as the pages either side of it, and the book looks flat, like a photocopy. The reason is behind you: a pale wall on the right is throwing daylight back into exactly the area you wanted dark.`,
          `A shadow is a region that gets less light because something is in the way of the main source. But a room full of pale surfaces keeps re-lighting shadows from other directions, and here the wall has filled the crease in. Darkening the whole image would darken the window-facing page too, and that page was right. You want to take light away from one place only. That means reducing a specific reflection before the phone records it, not adjusting the picture afterwards.`,
        ],
      },
      {
        title: 'Intercept the return, not the window',
        paragraphs: [
          `Think of a sunny lunch outdoors on a white tablecloth. Everyone's face is lit from below as well as above, because the cloth bounces sunlight back up under their chins. Now someone drapes a dark jacket over the cloth in front of one guest. That guest's chin falls into a gentler shade; the sun on their forehead has not changed at all. The jacket did not make darkness and shine it upward. It simply stopped the cloth from sending light up at that one spot.`,
          `The lighting term for light that reaches a subject's shaded areas is fill, and reducing it on purpose is called negative fill. The usual tool is a dark matte surface that absorbs most of the light landing on it. Here, hold a matte dark book cover between the pale wall and the paperback, just outside the camera's view. It is the jacket on the tablecloth. It catches the light coming back off the wall before that light reaches the crease, and the crease deepens.`,
          `Two details matter. Leave the route from the window to the book completely open; if you hold the cover on the window side, you are blocking the main light, which is a different experiment with a different result. And inspect the cover's surface. A glossy black cover can throw a bright reflection of its own, so matte matters more than the color name.`,
        ],
      },
      {
        title: 'Keep one bright reference in view',
        paragraphs: [
          `Set up the test so it can tell you something. Keep the window-facing page in the frame as your reference, and watch it and the crease together while you bring the cover in and take it away. The result you are hoping for is a darker crease with the bright page staying much as it was. That pattern says you changed the light in one place. If both darken together, you have blocked the window.`,
          `The camera can hide the result. Exposure is its control over how much light it records, and in automatic mode it will brighten the whole scene when you take light away, which can erase the change on screen. Lock exposure if your video mode allows it. If not, trust your eyes alongside the screen.`,
          `Size and distance set the limit. A small cover held far from the book intercepts only a sliver of the wall's return and may change nothing visible. Bring it nearer, or use a larger dark surface, before concluding negative fill does not work here.`,
        ],
      },
      {
        title: 'Blocking the wrong light',
        paragraphs: [
          `The first mistake is putting the dark surface on the window side, where it blocks the main light instead of the reflection. Both pages go dark and the book is simply underlit. If that happens, check where the cover is before touching anything else. The second mistake is trying to fix the flat crease with a global brightness drop, which darkens the page you liked and the crease by the same amount, so the curve is no clearer than before.`,
          `A third mistake is thinking a more reflective cover would help. The job is to absorb returning light, so a shinier surface works against you and may add a stray highlight of its own.`,
          `Two habits. When a shadow is too shallow, ask which surface is filling it and intercept that return, leaving the main light alone. And always keep a bright reference in the frame, because a change that darkens everything was never a local change.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A dark cover interrupts the wall return',
        alt: 'Window and pale wall above an open book. A dark cover lies between wall and book, away from the window-to-book path.',
        caption: `Follow the main light arrow from the window to the book first and notice nothing sits in its way. Then follow the light to the wall and watch the return intercepted arrow stop at the dark cover, like the jacket on the tablecloth. No arrow leaves the cover; it emits nothing. The camera arrow marks its view only. A top view.`,
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
        `Work in daylight with any lamps off, and set the open book so one page faces the window and a pale wall sits on the other side. You need the wall's bounce to be filling the crease for there to be anything to intercept.`,
        `Support the phone, frame both the crease and the window-facing page, record a few seconds, and lock exposure if the camera mode allows it. The bright page is your reference, and the lock stops the camera hiding your result.`,
        `Hold the dark cover on the wall side, outside the picture and well clear of the window's path to the book. It is the jacket over the tablecloth, and it only works between the bouncing surface and the subject.`,
        `Record with the cover in place and again without it, then compare the crease and the bright page in each. Keep every material away from electrical equipment and heat.`,
      ],
      notice: `The crease deepens while the window-facing page stays much the same, which is the signature of a local change: you took light away from one place and nowhere else. The curve of the pages reads again, and no slider was touched.`,
      troubleshooting: `If nothing changes, move the cover closer to the book or use a larger, less reflective surface, since a small cover far away intercepts almost none of the wall's return. If both pages darken together, stop and look at where the cover is: you have almost certainly drifted into the window's path and are blocking the main light.`,
    },
    recall: {
      prompt: 'A pale cupboard brightens the darker side of a wooden carving. How could you reveal that side\'s contours?',
      hint: 'Identify which returning light you want to interrupt.',
      answer: `Hold a safe matte dark surface between the pale cupboard and the carving, outside the shot, so it catches the light the cupboard is bouncing back before that light reaches the carving's shaded side. That is the jacket over the tablecloth. Leave the main light's path to the carving open, watch a lit surface as a reference, and judge the contours before you consider any change to the recording's overall brightness.`,
    },
    quiz: {
      question: 'Both sides of the book darken when you add the cover. What should you inspect first?',
      options: ['Whether the cover needs to be more reflective.', 'Whether the recording needs a global brightness increase.', 'Whether the cover is blocking the main window light.'],
      correctIndex: 2,
      explanation: `A change that darkens everything is not a local change, and the usual cause is the cover drifting into the window's path and blocking the main light, which is the jacket held in front of the sun instead of over the cloth. A more reflective cover would bounce light rather than absorb it. A global brightness increase would hide the mistake instead of finding it.`,
    },
    takeaway: 'Negative fill intercepts unwanted returning light; it does not emit darkness.',
    sourceNote: 'StudioBinder describes negative fill and wall bounce. This original daylight test makes no universal contrast, shadow-depth, or mood claim.',
  },
  {
    id: 'cinema-029',
    title: 'Let a visible lamp explain the light on a page',
    outcome: `Tell the difference between a lamp that appears in the shot and the light that actually reaches the subject, place the page where that light lands, and carry the same direction into a closer view.`,
    scene: 'An intact desk lamp lights a notebook while a hand draws a simple square.',
    sections: [
      {
        title: 'The lamp belongs in the picture',
        paragraphs: [
          `You are filming a hand drawing a square in a notebook at a desk. The desk lamp is on, and you frame the shot so both the lamp and its pool of light on the page are visible. On playback the picture makes sense: a glowing lamp, a bright patch, a pencil moving inside it. A viewer connects the brightness on the page to the object on the desk without being told. Filmmakers call a light source that appears inside the scene a practical. The word describes its role in the picture, not a special kind of bulb.`,
          `Here is the catch. A practical can be doing one of several jobs. It may genuinely be lighting the hand. It may be mostly a glowing object while something else, daylight from a window or a ceiling light, does the real work on the page. Or it may be both. Its presence in the shot proves only that it is there. It does not prove that the light you can see on the notebook came from it.`,
        ],
      },
      {
        title: 'Check what reaches the notebook',
        paragraphs: [
          `Think about a candle on a restaurant table. Everyone at the table can see the candle, and it feels like the reason the table is warm and inviting. But you can read the menu because of the spotlight in the ceiling above you. Move the menu six inches toward the candle and it is no more readable; move it under the spotlight and the print jumps out. The candle is the picture of the light. The spotlight is the light. Both are true, and they are different facts.`,
          `So test the lamp rather than trusting it. Leave it exactly where it normally sits, intact, with its own shade. Slide the notebook across the desk, into and out of the bright patch, and watch the pencil line on your screen. Where does it become readable? That spot is where the lamp's light actually lands, and that is where the hand should draw. A bright shade in the corner of the frame does not light anything you put near it; the pool on the desk does.`,
          `If the shade records as a blazing white blob while the page stays murky, the fix is not to turn up the recording. Exposure, the camera's control over how much light it records, brightens everything together and cannot pour light onto the page alone. Frame the lamp less prominently, or move the page further into the pool. And never stare into the bulb while you test.`,
        ],
      },
      {
        title: 'Carry the direction into a closer view',
        paragraphs: [
          `Once the page sits in the light, record the wide view with lamp and notebook both visible. Then, without moving the lamp, move the phone in for a closer view of the drawing. The lamp will probably leave the frame. The light has not. It still arrives from the same side, throwing the pencil's shadow the same way, and that shared direction is what tells a viewer the close shot belongs to the same desk as the wide one.`,
          `This is the quiet job a practical does across a sequence. It appears once, explains where the light comes from, and then the direction of light carries that explanation into shots where the source is no longer seen. Move the lamp between takes and the two shots stop agreeing.`,
          `If there is no suitable lamp, use a window and call it daylight in your notes rather than pretending it is a household practical. Neither option ever involves modifying a fitting.`,
        ],
      },
      {
        title: 'Trusting the glow',
        paragraphs: [
          `The first mistake is assuming the visible source does the lighting. A hallway wall light looks bright in a shot while the keys on the table beneath it are barely lit, and the instinct is to make the fitting bigger in frame. The candle gets no brighter by being closer to the camera. Move the keys into a pool of light that is actually there, or use daylight. The second mistake is rescuing a dark page with global brightness, which turns the shade into a white hole and leaves the page gray.`,
          `A third mistake is widening back out in the close shot so the lamp stays visible. That abandons the point of the closer view. The lamp's job in the second shot is to have been seen in the first; the light direction does the rest.`,
          `Two habits. When a source is in the shot, test where its light lands by moving the subject, not by admiring the glow. And when you move closer, leave the lamp where it was, so the light's direction stays the thread between the two views.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Move the page inside the existing light',
        alt: 'An intact lamp at upper left sends light toward a notebook; the phone below views both without altering the lamp.',
        caption: `Follow the lamp light arrow from the fitting to the notebook first; that pool is where the drawing has to happen, the spotlight rather than the candle. The two wide view arrows show the starting frame holding both lamp and page. A closer frame can drop the lamp and keep the direction. A top view, not a clearance measurement.`,
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
        `Use a lamp you already run safely, with its original shade and the clearances it normally has, and switch to daylight if anything about it is uncertain. The exercise is about where light lands, and it needs no change to any fitting.`,
        `Slide the notebook across the desk into the pool of light while watching the pencil line on screen, keeping paper and hands clear of the fitting and its vents. You are finding the spotlight, not the candle.`,
        `Record a square being drawn with both the lamp and the page in frame, then reset to a fresh part of the page. This wide view is the one that explains where the light comes from.`,
        `Move the phone in for a closer view of the drawing without touching the lamp, record again, and compare the light direction and the line's readability in both clips. Keep both files.`,
      ],
      notice: `The closer view keeps the wide scene's light direction even though the lamp itself has left the frame, so the two clips read as one desk. The lamp was seen once and then trusted, which is exactly the job of a practical.`,
      troubleshooting: `If the page stays unreadable wherever you slide it, the lamp is a candle: present but not lighting the work. Switch to daylight or redesign the framing around a source that actually reaches the page. Never cover a lamp with paper or fabric to shape its light; that is a fire risk, not a technique.`,
    },
    recall: {
      prompt: 'A hallway wall light looks bright in a shot but barely illuminates your keys. What could you change safely?',
      hint: 'Separate seeing the source from placing the object where its light reaches.',
      answer: `Move the keys into a pool of light that is really there, somewhere you can reach safely, or take them to daylight. The wall light is the candle on the table: bright to look at, and not what is lighting the keys. Making it larger in the frame changes how the fitting looks and does nothing for the keys beneath it.`,
    },
    quiz: {
      question: 'The lamp leaves frame in a closer shot. What best preserves its connection to the wider view?',
      options: ['Keep the lamp visible by widening again.', 'Keep the notebook and light direction consistent.', 'Brighten the closer recording until the page is uniformly pale.'],
      correctIndex: 1,
      explanation: `The wide shot already showed the viewer where the light comes from; the close shot keeps faith with it by leaving the lamp where it was so the light still arrives from the same side. Widening again throws away the closer view you wanted. Global brightening flattens the page and erases the very direction that linked the two shots.`,
    },
    takeaway: 'A visible source explains possible light; inspect where its illumination actually lands.',
    sourceNote: 'Inherited lighting and electrical-safety references support the scope. This is an original staging exercise, not a lighting recipe or permission to modify equipment.',
  },
  {
    id: 'cinema-030',
    title: 'Make the expression readable without a lighter-skin target',
    outcome: `Make a face's expression readable by changing where the light arrives and what sits behind the head, judging success by visible eyes and mouth rather than by pushing any skin toward one brightness.`,
    scene: 'A self-portrait just inside an open doorway is compared with a daylight-facing version.',
    sections: [
      {
        title: 'A bright doorway behind your head',
        paragraphs: [
          `You are recording a short introduction, standing just inside an open doorway with the phone propped in the room looking toward you. On playback you are a clean dark shape against a glowing rectangle of daylight. The shape is handsome. Your eyes are two smudges, and your mouth is impossible to read. Whatever you said in the introduction, your face said nothing the camera could pick up.`,
          `Three terms describe what happened. Backlight is light arriving from behind the subject toward the camera; the doorway is doing that. A shadow is a region getting less light because something is in the way, and your head is in the way of the doorway, so your face is shaded, lit only by whatever the room bounces back. Exposure is the camera's control over how much light it records. Turn it up and your face does brighten, but the doorway, already bright, blows out to white. One slider cannot fix a face and a doorway that want opposite things.`,
        ],
      },
      {
        title: 'Change the relationship, not the person',
        paragraphs: [
          `Think about trying to hear a friend in a noisy cafe. You could ask them to shout, which is unpleasant and still half drowned. Or you could move your chairs away from the espresso machine, or lean in closer. The problem was never that your friend speaks too quietly. It was the gap between their voice and the noise behind it. Shrink that gap, by moving the noise away or bringing the voice nearer, and ordinary speech becomes perfectly clear.`,
          `The face in the doorway is the quiet voice; the doorway is the espresso machine. Move the phone to a safe spot beside the opening, inside the room, and turn to face it. Now the daylight lands on the front of your face instead of behind your head, and the background is an interior wall rather than a glowing door. Both changes shrink the gap between a dim face and a bright surround. Then look for the things you actually need: can you see the eyes, can you read the mouth?`,
          `What you are not doing is making the skin a particular brightness. Skin reflects light differently from person to person and from one part of a face to another, and there is no single pale value that means a face is correctly shown. Turn off any beauty or whitening effect for this comparison. A face can stay deep in tone and have a perfectly readable expression; the two are not in tension.`,
        ],
      },
      {
        title: 'Compare under the same viewing conditions',
        paragraphs: [
          `Play both versions back at the same screen brightness and ask two questions. Is the expression readable? Does the color look like the person under the light they were actually standing in? That is the whole test. A phone screen is not a calibrated reference, so hold your conclusions loosely, but those two questions can be answered on any screen.`,
          `If someone else is in the shot, the intended appearance is theirs to agree. Show them the result and ask whether it looks like them. A deliberate silhouette, chosen for a reason, is a perfectly good shot. It is not a failed attempt to make a face bright. The failure is only when you wanted an expression and did not get one.`,
        ],
      },
      {
        title: 'Fixing the voice instead of the noise',
        paragraphs: [
          `The first mistake is reaching for exposure, a filter, or a whitening effect before moving anything. That is asking the friend to shout. It changes the person's appearance and leaves the real cause, the bright background behind the head, exactly where it was. The second mistake is setting equal brightness as the target when two people with different skin tones share a scene. Pushing both faces to one value misrepresents at least one of them, and the scene gains nothing from the match.`,
          `A third mistake is chasing the brightest face that still shows some background. Brightness is not the goal; readable detail and a true appearance are.`,
          `Two habits. When a face is hard to read, change the background and the direction of light first, and only then consider any camera control. And judge the result by asking whether the eyes and mouth read and whether the person looks like themselves, never by how pale the skin came out.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Turn toward light beside the doorway',
        alt: 'Daylight enters above a person. Phone A looks toward the doorway from deeper inside the room; phone B sits beside the opening.',
        caption: `Look at phone A first and notice the daylight arrives behind the person's head on its way to the lens: the espresso machine behind the voice. Then find phone B beside the opening, where the person turns toward both the camera and the light. Both positions stay safely inside. A top view.`,
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
        `Use your own face, or ask someone willing, and switch off any beauty or whitening effect if the camera has one. Keep the doorway clear so nobody has to step round you.`,
        `Record a short introduction with the daylight behind your head and the phone securely supported inside the room, never perched on a sill. This is the quiet voice beside the espresso machine, and you need it on file.`,
        `Move the phone to a spot beside the opening, still inside, turn to face it so daylight reaches your face, and say the same words again. You have moved the chairs away from the noise.`,
        `Compare the eyes, the mouth, and the skin's appearance in both at unchanged display settings, and keep whichever serves the purpose you agreed on. A deliberate silhouette is allowed to win.`,
      ],
      notice: `The eyes and mouth became readable without the skin becoming paler, because you changed where the light arrived and what sat behind the head rather than pushing a slider. The person still looks like themselves; they are just audible now.`,
      troubleshooting: `If the background still overpowers the face from the new position, reframe so an interior wall sits behind the head instead of any window or door. Do not reach for a whitening effect or a heavy filter to compensate; that changes the person while leaving the bright background exactly where it was.`,
    },
    recall: {
      prompt: 'A friend against a sunlit white wall has hard-to-see eyes. What could you change before raising recording brightness?',
      hint: 'Consider both the light arriving at the face and the background.',
      answer: `Two things, in this order: put a less bright surface behind them, or turn them so the available light lands on the front of the face. The sunlit wall is the espresso machine, and the fix is to move away from it, not to ask the face to shout. Then check whether the eyes read and whether your friend looks like themselves, rather than aiming for any particular skin brightness.`,
    },
    quiz: {
      question: 'Two people have different skin tones in the same scene. What is the useful lighting target?',
      options: ['Readable intended detail while preserving each person\'s appearance.', 'Equal recorded brightness on both faces.', 'The brightest face that still leaves some background detail.'],
      correctIndex: 0,
      explanation: `The scene needs both expressions to read and both people to look like themselves, which is hearing two different voices clearly rather than forcing them to the same volume. Equal brightness would misrepresent at least one face. The brightest possible face is a number, not a goal, and it says nothing about whether anyone's expression is visible.`,
    },
    takeaway: 'Make the intended detail readable, not every face the same brightness.',
    sourceNote: 'Inherited lighting and white-balance references support basic controls. The exercise is not a skin-tone standard or a calibrated color assessment.',
  },
  {
    id: 'cinema-031',
    title: 'Simplify two differently colored lights before correcting them',
    outcome: `Explain why one overall white-balance adjustment moves every part of the picture at once, and fix a scene lit by two colors of light by removing or reducing one source before reaching for a slider.`,
    scene: 'One hand rests over white paper between a daylight window and a warm desk lamp.',
    sections: [
      {
        title: 'One page, two versions of white',
        paragraphs: [
          `Rest your hand on a sheet of white paper near a window, with a desk lamp switched on to one side. Look at the page on your phone screen. The half nearer the window has a faint bluish cast. The half nearer the lamp is distinctly yellow, almost orange. It is one piece of paper. It did not change material halfway across. What changed is the light landing on each half, and the camera is reporting that difference honestly.`,
          `A couple of words keep the thinking straight. Warm and cool here describe how the light looks, orange-ish or blue-ish, and have nothing to do with whether a fitting is hot to touch. Color temperature is the name for a light's position on that warm-to-cool scale. It is one scale only; it does not describe the slight green or magenta tints some lamps add, which are a separate matter. For now, the point is simple: your page is being lit by two colors at once.`,
        ],
      },
      {
        title: 'Why one adjustment pulls both sides',
        paragraphs: [
          `Think of a seesaw. Two children sit on it, one too high, one too low. You push the high end down and the other child rises further. You lift the low end and the first child shoots up. There is one plank, and it pivots as a whole. You cannot bring both ends down to the ground with a single push; the plank does not bend. The only way to get both children level is to change something about the seesaw itself, not to push harder.`,
          `White balance is the plank. It is the camera's or the editor's adjustment for how the illumination tints recorded color, and it shifts the color relationships of the entire picture together. Cool the image until the lamp side of the page looks neutral white, and the window side slides further into blue. Warm it until the window side looks neutral, and the lamp side turns deeper orange. The slider has no idea you meant to fix only one half of the hand. It moves the whole plank.`,
          `More advanced editing tools can correct one region of a picture separately from another, and that is the equivalent of sawing the plank in two. This first exercise does not need them. There is a simpler move available before any slider: make the scene easier to record in the first place.`,
        ],
      },
      {
        title: 'Let one source do most of the work',
        paragraphs: [
          `Take one child off the seesaw. Switch the lamp off at its normal switch, or move the hand and page to where the daylight clearly dominates and the lamp barely reaches. Record again without changing the camera's view. Now most of the page is lit by one color of light, and the two halves should look far more alike. The phone's automatic white balance may still shift the whole picture a little as it adapts, but it is adapting to one light rather than being torn between two.`,
          `Keep your expectations modest about the page itself. A sheet of white paper is a rough comparison surface, useful for seeing a difference across one frame. It is not a calibrated reference, and it is certainly not a target for making skin paler.`,
          `Once the setup is simple, keep it that way for any later shots, so they match without a fight. And remember that a color difference you want, a warm lamp glow deliberately kept on one side of a face, is allowed to stay. The lesson is about knowing which differences you chose.`,
        ],
      },
      {
        title: 'Pushing the plank harder',
        paragraphs: [
          `The first mistake is trying to solve two lights with one slider, then being surprised that fixing one side wrecked the other. A face lit blue by a television on one side and warm by a ceiling light on the other will disappoint under any global correction, because the two regions do not share an illumination. Turn off the optional source or move the person first, if a consistent look is what you want. The second mistake is standardizing on one side across every clip, neutralizing the lamp side in each, and pushing every window-lit region further blue as you go.`,
          `A third mistake is diagnosing from brightness. The two halves of the page differ in color, and that is what to compare; one side being a little darker is a separate observation.`,
          `Two habits. When a scene contains two colors of light, remove or reduce one before you touch white balance, so the slider has a single light to answer to. And when a color difference remains, say whether you chose it, because a chosen difference is a look and an accidental one is a problem.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Different light reaches opposite sides',
        alt: 'A window at left and warm lamp at right both illuminate a hand over white paper, viewed by the phone below.',
        caption: `Follow the two arrows into the page, daylight from the left and lamplight from the right, and notice they land on opposite halves of one sheet: two children on one plank. For the second recording the lamp is switched off and only one arrow remains. Blue and amber are schematic, not measured values. A top view.`,
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
        `Set the page and your hand where both the window's daylight and an intact lamp reach them, keeping the paper clear of the fitting. You need two colors on one sheet for there to be anything to see.`,
        `Support the phone, record a few seconds, and write down which side of the page looks warmer. If your camera can lock white balance, lock it, so the phone does not quietly reseat the seesaw mid-test.`,
        `Switch the lamp off using its own normal switch and record the identical view again. Changing nothing but the lamp is what lets you credit the result to removing one light. Never touch wiring or shades.`,
        `Compare the color difference between the two halves of the page in each clip, not the overall brightness. If you have no suitable lamp, compare two daylight positions, one nearer the window and one deeper in the room.`,
      ],
      notice: `Taking one light away reduced the color split across a single frame, with no slider involved. Where the page was blue on one side and orange on the other, it is now closer to one white, because one child has stepped off the seesaw.`,
      troubleshooting: `If the whole clip shifts color on its own when you switch the lamp off, the phone's automatic white balance is re-adapting to the single remaining light. Ignore the overall shift and compare the two halves of the page with each other inside each clip. Keep the framing identical and note that the camera adjusted, so you do not mistake its move for yours.`,
    },
    recall: {
      prompt: 'A blue television lights one side of a face while a warm ceiling light reaches the other. Why might an overall correction disappoint?',
      hint: 'The two regions do not share the same illumination.',
      answer: `Because white balance moves the whole picture like a seesaw plank: neutralize the blue side and the warm side goes more orange, neutralize the warm side and the blue side goes deeper blue. The two halves of the face are lit by different lights, so no single global setting can satisfy both. If a consistent look is the aim, turn the optional source off or move the person before any correction.`,
    },
    quiz: {
      question: 'You need matching hand shots but have no regional color controls. What is the best first test?',
      options: ['Neutralize the lamp-lit side in every clip.', 'Neutralize the daylight side in every clip.', 'Reduce one source and record under more consistent illumination.'],
      correctIndex: 2,
      explanation: `Removing or reducing one source takes a child off the seesaw, so a single light reaches the hand and one white-balance setting can serve the whole frame in every clip. Neutralizing either side alone pushes the other side further off in every clip, so the shots would match each other only in sharing the same problem.`,
    },
    takeaway: 'Simplify competing illumination before asking one slider to fix two sources.',
    sourceNote: 'Inherited white-balance and camera references explain the concept. Device controls vary; ordinary paper and screen comparisons are not calibrated measurements.',
  },
  {
    id: 'cinema-032',
    title: 'Test flicker in the recording, not just with your eyes',
    outcome: `Spot lighting flicker in a saved clip rather than by eye, understand why camera timing and mains timing can disagree, and fix it with a supported timing setting or by moving to daylight.`,
    scene: 'A white instruction card develops moving bands under a room light but is also tested in daylight.',
    sections: [
      {
        title: 'The card looks steady until playback',
        paragraphs: [
          `You prop a plain white instruction card under the room light and record it. To your eyes the room is perfectly steady, nothing pulsing, nothing odd. Then you play the clip back. Dark bands are crawling slowly down the card, or the whole card is breathing brighter and darker. Nothing like that was happening in the room as far as you could see. Your eyes are not lying, and neither is the camera. They are just sampling the room at different speeds.`,
          `Many artificial lights pulse far faster than you can notice; your vision smooths it into steady light. The camera does not smooth. It takes separate pictures, and often reads each picture row by row, so different parts of one frame can catch the light at a brighter or dimmer moment of its pulse. Flicker is the name for this unwanted variation in brightness over time, and the crawling bands are what it looks like when the rows catch different moments. A screen in the shot can do the same thing through its own refresh, even when the room lighting is fine.`,
        ],
      },
      {
        title: 'Timing controls are different controls',
        paragraphs: [
          `Think of a car wheel on television. The car is driving forward, and the wheel appears to turn slowly backward, or to stand still. The wheel is doing nothing strange. The camera is taking a picture of it so many times a second, and the spokes happen to move almost a full turn between pictures, so each picture catches them a little behind where the last one did. Change the car's speed or the camera's picture rate and the illusion changes or vanishes. Two rhythms, slightly out of step, produce a pattern that neither one has on its own.`,
          `Flicker is the same mismatch between the light's rhythm and the camera's. Three controls are involved, and they are often confused. Frame rate is how many pictures the camera takes per second. Shutter time is how long each picture gathers light. Mains frequency is how many times per second the electrical supply cycles, written in hertz, Hz, and it belongs to the building, not the camera. Changing frame rate does not automatically change shutter time, and neither of them changes the mains.`,
          `The usual trick is to make the shutter time span whole pulses of the light, so every picture averages the same amount of flicker. Where the mains are known to be 50 Hz, shutter times of 1/50 or 1/100 of a second are sensible first tests at a compatible frame rate. Where they are 60 Hz, try 1/60 or 1/120. These are starting points, not a cure. LED drivers, dimmer switches, and screens can pulse at their own rates, and no single setting covers them all.`,
        ],
      },
      {
        title: 'An old phone still has a useful test',
        paragraphs: [
          `Most phones hide shutter time, and many old ones hide everything. You still have two tests. First, look for an anti-banding or anti-flicker setting and match it to your known local supply frequency, 50 or 60 Hz, if the phone offers one. Second, and this works on every camera ever made, record the same card again in daylight with the lamps off. Daylight does not pulse.`,
          `Whichever you try, judge the saved clip and not the live preview. Scrub through the whole thing; a band that drifts slowly can be absent from one frame and obvious three seconds later. If the bands disappear in the daylight version, you have a usable alternative light for anything that matters.`,
          `One firm boundary. A light that visibly flickers to your naked eye, buzzes, or behaves erratically is a possible fault, not a camera problem. It needs qualified help, not a shutter setting and not a home repair.`,
        ],
      },
      {
        title: 'Hiding the bands instead of removing them',
        paragraphs: [
          `The first mistake is diagnosing from a single still frame. A frozen picture can look perfect while the bands are between rows at that instant; flicker is a pattern over time and has to be judged across playback. The second mistake is darkening the recording until the bands are less obvious. They are still there, just harder to see, and they come back the moment anyone brightens the clip.`,
          `A third mistake is blaming the room light for a band that lives on a laptop screen in the shot. If the daylight-lit desk is stable and the laptop still bands after a mains-matched test, the screen's own refresh is the culprit. Exclude it from the frame or test any supported display and camera options, rather than chasing a lamp that was never guilty.`,
          `Two habits. Whenever you record under artificial light, replay the whole saved clip and watch a plain bright area for crawling bands before you trust the setup. And when you have no timing controls, treat daylight as a real solution rather than a fallback, because it is the one light with no rhythm to mismatch.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Same card, alternative illumination',
        alt: 'Room lamp at left and daylight window at right are alternative sources for a fixed card and camera.',
        caption: `Read the two arrows into the card as two separate recordings, test A under the room lamp and test B in daylight, not as both lights on at once. The card and the camera stay exactly where they are so the only difference between clips is which light has a rhythm. A top view.`,
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
        `Record about six seconds of the plain white card under a safe room light with the phone held still. A plain bright area is where bands show most clearly, like the wheel on the television.`,
        `Replay the whole clip and watch for crawling bands or slow pulsing. Never judge flicker from one still frame, because the pattern lives in time and a single picture can land between the bands.`,
        `If the phone offers an anti-banding setting, match it to your known supply frequency, or try the compatible shutter times above if manual control exists. If neither is available, skip the settings entirely rather than guessing.`,
        `Record the same card in daylight with the lamps off, compare the two saved clips, and keep the clean one. Write down any setting you changed so you can put it back afterwards.`,
      ],
      notice: `A real fix removes or reduces the bands across the whole playback, not just in one frame you happened to pause on. If the daylight clip is clean and the lamp clip crawls, you have found both the cause and a light you can use.`,
      troubleshooting: `If bands remain only on a screen within the shot while the desk around it is stable, the screen's refresh is running at its own rhythm, separate from the mains. Reframe to leave it out of the picture, or dim and reposition it if that is an option. Do not open, modify, or improvise with any electronics to chase the pattern.`,
    },
    recall: {
      prompt: 'A laptop still bands after a mains-matched test, while the daylight-lit desk looks stable. What does that suggest?',
      hint: 'A display can have its own timing.',
      answer: `The laptop screen is pulsing at its own refresh rate, a different wheel on a different car, so matching the camera to the mains could not help it. The stable desk shows the room light is not the problem. Exclude the laptop from the frame, or test any supported display and camera options, instead of assuming the room lamp is to blame.`,
    },
    quiz: {
      question: 'Your phone offers no manual shutter and local mains frequency is unknown. Which test is still useful?',
      options: ['Choose 24 fps and judge only the live preview.', 'Compare a saved daylight clip with optional lamps off.', 'Lower recording brightness until the bands are less obvious.'],
      correctIndex: 1,
      explanation: `Daylight has no pulse to mismatch, so a saved daylight clip tests a different light without needing any guessed frequency, and judging the saved file is the only way to see a pattern that lives in time. A different frame rate might help but still needs a recorded check, and the live preview cannot provide it. Lowering brightness hides the bands without removing them.`,
    },
    takeaway: 'Verify the saved clip; daylight is a valid solution when timing controls are absent.',
    sourceNote: 'Inherited Sony guidance discusses camera and lighting timing, with device limits. This original test neither guarantees a fix nor covers electrical repair.',
  },
  {
    id: 'cinema-033',
    title: 'Save a lighting reference before you leave the setup',
    outcome: `Keep a position sketch and a short reference clip of any lighting setup you will return to, and use them together to tell a misplaced camera from daylight that has genuinely changed.`,
    scene: 'A shoelace-tying demonstration needs a later close view beside the same window.',
    sections: [
      {
        title: 'The shoe returns, but the light does not',
        paragraphs: [
          `You film a pair of hands tying a shoe beside a window. It goes well. An hour later you come back to add a closer view of the knot, put the shoe where it was, and record. Then you join the two clips. In the wide shot the toe of the shoe is bright and the heel is in soft shade. In the close shot the knot is gray and flat, and a shadow has crept to the other side of the laces. A cloud moved while you were away. The knot is meant to be one continuous action, and the two clips now look like two different afternoons.`,
          `A cut is the direct change from one recorded view to the next, and continuity is the craft of keeping action, positions, and other visible relationships understandable across it. Lighting is part of continuity, and it has four parts: the direction light comes from, how bright it is, what color it is, and the pattern it makes across the subject. Using the same camera mode again covers none of those. The light is in the room, not in the settings.`,
        ],
      },
      {
        title: 'Record the relationship you will need again',
        paragraphs: [
          `Think about a gardener who wants next spring's bed to look like this one. They keep two things. A planting plan, a sketch of where each plant goes and which way the bed faces. And a photograph of the bed in June, in flower. The plan restores the positions; without it the lavender ends up in the wrong corner. The photograph shows how it should look; without it a plan alone cannot tell you whether this year's light was kinder. Neither one can make the weather repeat, and the gardener knows it.`,
          `Your setup needs the same two records. Before the action, record a short reference clip of the shoe settled in place: that is the June photograph, and it captures the direction, brightness, color, and pattern of today's light. Then sketch the window, the shoe's orientation, and the camera position, adding a table edge or another landmark so the sketch can be used from a cold start. That is the planting plan.`,
          `Notice what each one cannot do. The clip shows a dark side of the shoe without telling you where the camera stood to see it. The sketch restores camera and shoe without telling you the daylight has gone cooler or that a shadow now falls the other way. Keep both, and keep them together.`,
        ],
      },
      {
        title: 'Compare before repeating the whole action',
        paragraphs: [
          `When you return, put the shoe and the phone back from the sketch. Then, before you tie a single knot, record a few seconds of the settled shoe and hold it beside the reference clip. Same side bright? Same shadow direction? Same warmth? If the shadow falls on the opposite side, check the positions first. A shoe turned a few degrees, or a camera a hand's width off, can flip where the shade appears. A color slider cannot pick up a shadow and move it; only geometry can.`,
          `If the positions are right and the light has still changed, the cloud won and no setting will reverse it. You have two honest options. Record the related views together now, under the new light, so they match each other. Or make the change of time explicit in the scene, so the viewer reads it as later rather than as a mistake.`,
          `What you must not do is claim the conditions matched because the phone used the same mode. The mode is a setting. The light is weather.`,
        ],
      },
      {
        title: 'Fixing geometry with a slider',
        paragraphs: [
          `The first mistake is treating every mismatch as a color problem. A shadow that has moved to the opposite side of a small tower in a model-building close-up is a geometry problem or a changed light source, and the check is the sketch: where were the lamp, the model, and the camera? The second mistake is the opposite one, rebuilding every position and then wondering why the clip still looks different when a cloud is plainly sitting over the window.`,
          `A third mistake is a sketch too vague to use. If it does not say which way the lens pointed and which way the toe faced, it cannot restore anything. And never reach for a filter to disguise a shadow on the wrong side; the viewer's eye finds it anyway.`,
          `Two habits. Before you leave any setup you expect to revisit, record a settled reference clip and draw the positions with a landmark, the photograph and the plan. And on return, compare a short trial against the reference before recording the action, so you find out which of the two has changed while it is still cheap to fix.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A map to accompany the reference clip',
        alt: 'Window at upper left, shoe at center with toe toward the window, and phone below viewing the laces.',
        caption: `Read this as the planting plan: window at upper left, toe toward it, phone viewing from the heel side. Restore these three relationships first, then compare the real shadow and color against the saved clip, because the arrows carry positions and not weather. A top view with schematic spacing.`,
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
        `Set the shoe on a stable surface in daylight and record a short clip of it sitting still before any tying, then record the lace-tying view. The still clip is the June photograph, and it has to be taken before the light has a chance to change.`,
        `Sketch the window, the camera, the direction the toe points, and a table edge as a landmark, and write down what the light looks like in plain words: which side is bright, how warm it is. Words beat invented measurements.`,
        `Move the phone for a close view of the knot, then put it back using only the sketch, without touching the shoe. This tests whether the plan is good enough to restore a position from scratch.`,
        `Record a short trial of the settled shoe and compare it with the reference clip. If a cloud has changed the light, write that down honestly and decide whether to restore positions or reshoot the connected views together.`,
      ],
      notice: `You can now tell a placement mismatch, which the sketch fixes, from a lighting change that happened even with the positions restored, which only a reshoot or an explicit time change can address. The plan and the photograph each caught the fault the other would have missed.`,
      troubleshooting: `If the sketch leaves you unsure how to put things back, it is missing a landmark or a direction. Add an arrow for which way the lens points and which way the toe faces, and reference a fixed edge. And if the shadow is on the wrong side, do not apply a filter to hide it; filters change color, and the shadow stays exactly where it is.`,
    },
    recall: {
      prompt: 'A later model-building close-up has a shadow on the opposite side of a small tower. What should you check first?',
      hint: 'A color slider cannot change the direction light arrived from.',
      answer: `Check the positions against your sketch: where the light source, the model, and the camera each sit compared with the reference. A shadow that has swapped sides is geometry or a changed source, the lavender planted in the wrong corner, and no color control can move it back. Restore the relationship if you can, or reshoot the connected views together under the light you have now.`,
    },
    quiz: {
      question: 'Which mismatch most clearly calls for a setup check rather than a simple color correction?',
      options: ['The lace shadow now falls to the opposite side.', 'The whole clip has a small warm cast.', 'The whole clip is slightly dimmer with detail retained.'],
      correctIndex: 0,
      explanation: `A shadow on the opposite side means the light is arriving from a different direction, which is a question of where things sit or where the light comes from, and a slider cannot move a shadow. A small overall warm cast or a modest dimming with the detail intact are the kind of global differences a color or brightness adjustment can reasonably address.`,
    },
    takeaway: 'Save placement and appearance; compare both before recording a later matching view.',
    sourceNote: 'Inherited lighting and editing references support continuity practice. This original shoe example does not imply software can reconstruct a different lighting pattern.',
  },
  {
    id: 'cinema-034',
    title: 'Redesign the shot before exceeding a lamp\'s safety limits',
    outcome: `Check an ordinary filming corner for heat, cords, and walking routes before recording, and change the shot or switch to daylight rather than modifying any electrical equipment or guessing a clearance.`,
    scene: 'A desk drawing setup sits near an exit, with a lamp cord along the rear wall.',
    sections: [
      {
        title: 'A short recording still uses real equipment',
        paragraphs: [
          `It is evening and you want a close view of a drawing on your desk. The only light is the desk lamp, and it lights one corner. The drawing would look better in the middle of the desk, so you think about dragging the desk toward the window, except that would pull the lamp's cord straight across the doorway. You think about a second extension lead. You think about taking the shade off to spread the light. Every one of these ideas treats the lamp as a problem to be solved with hands and wire.`,
          `The problem is the arrangement, not the electrics, and a short recording does not make real equipment any less real. A hot fitting is hot for five minutes as surely as for five hours. A cord across a doorway trips someone whether or not the camera is rolling. So start from what you already have: intact household lights, used as their instructions allow, with plugs, sockets, and cords dry. Leave the lamp where it normally lives. Move the drawing, or move the camera. If the light cannot serve the shot from where it safely sits, the shot waits for daylight.`,
        ],
      },
      {
        title: 'Heat and walking routes need space',
        paragraphs: [
          `Think about a book on a high shelf. You could stand on the top rung of a stepladder, where the label says not to stand, and stretch. You would probably get the book. You would also be one wobble from the floor, for a book that could have been reached by moving the ladder a foot to the left or by fetching a taller one. Nobody sensible accepts that trade for a paperback, and a shot of a drawing is not worth more than a paperback.`,
          `The lamp has its own top rung. Bulbs and fittings get hot, and some need open air around them to stay safe. Paper, curtains, or clothing resting against a fitting can start to scorch; draping something over a lamp to soften its light is standing on the rung, and it is outside this exercise entirely. Keep the original shade on and follow whatever clearance the lamp's own instructions give. A sketch of the room is not a clearance. It has no scale.`,
          `Cords have their rung too. An extension lead does not create extra electrical capacity; it only moves the socket. Do not overload an outlet and do not join one extension lead to another to reach a camera spot. A cord across the walking route can also catch a foot and pull the whole lamp over. The diagram keeps the existing cord along the rear wall and the approach to the exit empty. It is a picture of leaving things alone, not an instruction to reroute anything live.`,
        ],
      },
      {
        title: 'Make an alternative, not a repair plan',
        paragraphs: [
          `Before you record, look at the setup from a safe distance. Does anything look damaged? Is there a burnt smell, a flicker, a spark, a cord with its covering split? If so, that setup is finished for tonight, and the right next step is qualified help, not a closer look. Do not touch suspect equipment to investigate it. Investigating is the top rung.`,
          `Then write the alternative. A daylight version tomorrow, with the drawing by the window and the lamp irrelevant. The fault, if there is one, stays outside your filmmaking task altogether; it belongs to an electrician, and your job is only to notice it and step away.`,
          `This is what safety means here. Not fixing the lamp, not improving the wiring, not finding a clever workaround. Declining an unsuitable setup and designing a different shot. You are a filmmaker for the evening, not an electrician for one picture.`,
        ],
      },
      {
        title: 'Trading safety for a framing',
        paragraphs: [
          `The first mistake is joining a second extension lead to reach a preferred camera angle. The angle was optional; the overloaded socket is not. Move the subject or the camera inside the arrangement you already have, or wait for daylight. The second mistake is reading a clearance off a drawing. The schematic shows relationships, not centimeters, and keeping the planned spacing but recording for a shorter time does not make a fitting any cooler.`,
          `A third mistake is covering the shade to shape the light. It is the single most tempting move in home filming and the one most likely to leave a scorch mark or worse.`,
          `Two habits. Before any recording under artificial light, look from a distance at the lamp, the cord route, dry surfaces, and the exit, and write down anything you are unsure about rather than guessing. And when a setup would need an electrical change to work, change the shot instead, with a daylight version already written down.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Keep the front route clear',
        alt: 'Lamp and socket lie along the rear wall; drawing and supported phone are on the desk, with the exit approach clear at lower right.',
        caption: `Look at the exit approach at lower right first and notice nothing crosses it; that empty route is the point of the whole layout. The cord at wall arrow marks where the existing cord already runs, not light. The spacing is schematic and is not a certified clearance for any fitting. A top view.`,
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
        `From a safe distance, look at the lamp, the visible cord route, whether surfaces are dry, and the way to the exit. Do not touch anything that looks suspect; looking is the whole of this step.`,
        `Write down any blocked route, unknown clearance, damaged part, or wobbly phone position, and leave the uncertain items as uncertain. A guess written as a fact is the top rung of the ladder.`,
        `Sketch a shot that works inside the existing safe arrangement, moving only ordinary props or the supported phone, and only when that is safe. The lamp and its cord stay exactly where they are.`,
        `Write a daylight alternative beside any hazard you could not resolve, and drop the lamp-based plan entirely if it would need an electrical change. The alternative is part of the plan, not a failure of it.`,
      ],
      notice: `Your plan now has a clear exit, a stable camera support, and no improvised covering or electrical connection anywhere in it. You got the shot you could get safely and wrote down the one you will get tomorrow in daylight, which is what declining a top rung looks like on paper.`,
      troubleshooting: `If you cannot establish that the setup is suitable, that is the answer, not a gap to fill with guesswork. Use the daylight alternative you wrote down, and take any concern about the equipment itself to someone qualified. A plan that depends on a fact you could not check is not yet a plan.`,
    },
    recall: {
      prompt: 'Your preferred camera angle would require another extension lead joined to the first. What changes belong in this exercise?',
      hint: 'Change the shot, not the electrical system.',
      answer: `Changes to the shot: move the drawing or the supported phone within the arrangement you already have, or film the daylight version instead. Joining leads to keep an optional framing is standing on the top rung for a paperback. The angle can change; the socket's capacity cannot, and it is not yours to extend.`,
    },
    quiz: {
      question: 'A lamp\'s clearance instructions are unavailable and the drawing would sit near its fitting. What is the appropriate plan?',
      options: ['Use the spacing in the schematic as the required clearance.', 'Keep the planned spacing but shorten the recording.', 'Use a daylight arrangement until suitability can be established.'],
      correctIndex: 2,
      explanation: `Without the fitting's own instructions you cannot know its safe clearance, so the honest plan is to redesign around daylight until you can. The schematic has no scale and was never a clearance, and a shorter recording does not make a hot fitting cooler; both are guesses dressed up as plans, the top rung with a shorter stretch.`,
    },
    takeaway: 'A safe alternative is part of the shot plan; electrical improvisation is not.',
    sourceNote: 'Electrical Safety First is inherited as general household guidance. This original visual checklist is not a safety certification, installation guide, or repair procedure.',
  },
  {
    id: 'cinema-035',
    title: 'Select the take that contains the needed moment',
    outcome: `Choose a take by whether it contains the moment the scene depends on, name the usable stretch inside it, and write the reason down while keeping every other take for other jobs.`,
    scene: 'Three recordings show a hand finding an original folded note in a coat pocket.',
    sections: [
      {
        title: 'The steadiest recording hides the note',
        paragraphs: [
          `You have filmed a hand finding a folded note in a coat pocket three times, and each attempt is a take. Take A is rock steady, the nicest camera work of the three. The thumb sits squarely over the message the whole time. Take B has a small tilt in it. But the note opens cleanly, the words are visible, and the hand pauses for a beat afterward. Take C has the sharpest reveal of all. The coat fabric scraping the microphone drowns the one spoken line.`,
          `The instinct is to pick A because it is the best-looking. Before you rank anything by polish, say what the scene needs this shot to do. It needs the discovery to be understandable: the note emerging, the message readable, any words the scene relies on still audible. Hold the three takes against that job and the ranking rearranges itself. A small wobble that leaves the event visible matters far less than a flawless take in which the event never happens.`,
        ],
      },
      {
        title: 'Find a usable segment, not a universal winner',
        paragraphs: [
          `Think about choosing which photo of a birthday to frame. There is a sharp, perfectly exposed one of the back of someone's head as they lean in. And there is a slightly soft one where the candles are going out. The cake is lit from below, and the birthday person's face is caught mid-laugh. Nobody frames the sharp one. The soft one has the moment. The sharp one has only focus, and focus on the wrong thing is worth nothing on the mantelpiece.`,
          `A take is chosen the same way, and often only part of it is chosen. A cut replaces one recorded view with the next. So the useful piece of a take is the stretch that does its job in that sequence. In an invented six-second take B, the hand reaches during seconds zero to two. It unfolds the note during two to four, and pauses with it open during four to six. The strongest stretch is two to six. Keeping only the reach would be framing the back of the head.`,
          `Then check the join. Does the hand, the pocket, and the state of the paper connect to what comes before and after? Keeping those visible relationships understandable across cuts is continuity. A perfectly readable note that leaps from one hand to the other at the cut may need a different neighbor. And technical faults are not nothing. When scraping fabric makes the words unintelligible, the fault has destroyed information, and that counts.`,
        ],
      },
      {
        title: 'Write down why this segment stays',
        paragraphs: [
          `Keep a short list of selected clips. Name each by its filename from the gallery or by a thumbnail description nobody could mistake. Beside it, write the reason as a fact about the clip, not a verdict: B, two to six seconds, full note visible, pause after opening, spoken line usable. Not: B, best. Best tells your future self nothing about why. Next week you will not remember.`,
          `Keep A and C. The soft birthday photo won the frame, but the sharp one of the cake might be exactly right for the recipe card. A later sequence may need a close pocket detail with no dialogue at all. Then C's sharp reveal, scraping fabric and all, becomes the right choice for that different job. Rejected is a relationship between a take and one job, not a property of the take.`,
          `Selection cannot recover what was never recorded. If none of the three takes shows the note, the answer is a fourth take, not a cleverer choice among the first three.`,
        ],
      },
      {
        title: 'Choosing polish over the moment',
        paragraphs: [
          `The first mistake is ranking by steadiness, smoothness, or sharpness before asking what the shot is for. A steady cooking demonstration that hides the lid coming off loses to a slightly shaky take where the result is plainly visible. The lid coming off is the point. The second mistake is keeping whole takes or nothing. The useful part of B is four seconds in the middle, and the decision is about that stretch.`,
          `A third mistake is deleting the losers. Storage is cheap and jobs change; the take that failed this scene may carry the next one.`,
          `Two habits. Before you compare takes, write the job the shot must do in one sentence, and judge every take against that sentence first and its polish second. And record each choice as filename, start and end, and a factual reason, so the list explains itself later.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The useful event inside take B',
        alt: 'A six-second take shows a reach, the unfolding note, and a pause after the reveal.',
        caption: `Find the two middle and final steps, the unfold and the pause; those four seconds are the candles going out, and they are why B is selected. The reach before them is the back of the head. Invented source-clip times, not required performance timings or proportional widths.`,
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
        `Write a fictional three-word message, fold it, and put it in the coat pocket, keeping anything personal out of the frame. A made-up message means every take can be kept and reviewed freely.`,
        `Record three complete attempts to find and open the note, resetting the hand and the paper between takes so each is a fair attempt at the same event.`,
        `Watch all three at normal speed and mark, for each, where the full note is visible and whether any sound the scene needs is intelligible. You are looking for the candles going out, not the sharpest frame.`,
        `Write one chosen segment as filename or thumbnail, approximate start and end, and a factual reason, and keep every original recording. The ones that lost this job are not finished yet.`,
      ],
      notice: `Your choice names a visible story event and the stretch of the take that carries it, rather than defaulting to the steadiest camera. You could hand the list to someone else and they would know which clip, which seconds, and why.`,
      troubleshooting: `If no take actually reveals the note, selection cannot help you, because choosing can only pick among events that were recorded. Go back and record a clearer attempt with the thumb away from the message. A fourth take is cheaper than an hour spent hunting for a moment that is not on the phone.`,
    },
    recall: {
      prompt: 'A steady cooking demonstration hides when the lid opens; a slightly shaky take clearly shows the result. How would you choose?',
      hint: 'Name the information the sequence must communicate.',
      answer: `Take the shaky one, provided the shake does not hide the detail the scene depends on, because the lid coming off and the result inside are the candles going out, and the steady take is a sharp picture of the back of a head. Check that its sound is usable and that it joins its neighbors cleanly, then keep the steady take too; it may be exactly right for a shot that does not need the reveal.`,
    },
    quiz: {
      question: 'The audience must read a note. Which selection reason best fits that job?',
      options: ['The complete message is visible long enough, with usable supporting sound.', 'The camera is steadier, although a finger covers the final word.', 'The hand movement is smoother, although the note leaves frame early.'],
      correctIndex: 0,
      explanation: `The job is a readable message, so a take in which the whole message stays visible long enough, with the sound the scene needs intact, is the one carrying the moment. A steadier camera with the last word covered has polish and no information, and a smoother hand whose note leaves frame early is the sharp photo of the back of the head.`,
    },
    takeaway: 'Choose for a named moment and preserve the reason alongside the clip.',
    sourceNote: 'Official editing training and shot-planning references are inherited. Takes and timings here are invented examples, not a tested ranking formula.',
  },
  {
    id: 'cinema-036',
    title: 'Check the sequence before polishing its transitions',
    outcome: `Lay the clips out in story order with plain cuts first, check that each view supplies the fact the next one needs, and fix any missing action before spending a minute on how the joins look.`,
    scene: 'Headphones missing from an entry hook are found beneath a scarf on the nearby bench.',
    sections: [
      {
        title: 'The headphones appear without a search',
        paragraphs: [
          `You have filmed three clips for a tiny scene by the front door. An empty headphone hook above a bench. A hand lifting a scarf off that bench. The headphones lying where the scarf was. You open an editor, and the first thing you notice is the transitions menu: dissolves, wipes, a slow fade. So you put the empty hook next to the found headphones, add a soft dissolve between them, and play it. It looks smooth. It also makes no sense. The headphones were missing and then they were found, and nobody searched.`,
          `The dissolve could not supply the search because the search was in the clip you left out. This is the problem with polishing first: a handsome transition hides a gap rather than closing it. The remedy is a plainer first step. An assembly is a rough arrangement of your chosen clips in story order, built so you can check what information each view delivers before you adjust anything fine. And a straight cut, a direct change from one view to the next with no effect, is the right join for an assembly, because it hides nothing and lets every gap show.`,
        ],
      },
      {
        title: 'Give each view a job',
        paragraphs: [
          `Think about assembling flat-pack furniture. Before you tighten a single screw, you fit the pieces together loosely and look: is every panel present, is anything upside down, does the drawer front actually meet the drawer? Only when the whole thing stands up do you reach for the screwdriver, and only after that for the paint. Tightening screws on a wardrobe with a side panel missing just makes the mistake harder to undo. Painting it makes it permanent.`,
          `The assembly is the dry fit. In an invented eight-second version, seconds zero to two show the empty hook with the bench beneath it. Seconds two to five show the hand lifting the scarf. Seconds five to eight show the headphones underneath. Each panel has a job. The first establishes what is missing and where to look. The middle supplies the action that explains the discovery. The last shows what the action revealed. Remove the middle and the wardrobe has no side.`,
          `The dry fit also checks whether the pieces line up. The scarf and the headphones need to sit in compatible places across the three clips, because the viewer is tracking one bench, not three recordings. Continuity is the word for keeping object states and actions understandable across the cuts. If the headphones turn up a foot to the left of where the scarf was lifted, the assembly shows you now, while fixing it costs one more clip rather than a rebuild.`,
        ],
      },
      {
        title: 'Repair the missing information first',
        paragraphs: [
          `When the dry fit reveals a gap, there are three honest repairs. Reorder the clips. Swap in a different take that shows more. Or record one short extra view that supplies the missing piece, such as the hand reaching toward the scarf. What is not a repair is a dissolve. A dissolve overlaps the outgoing and incoming pictures so one fades into the next. It can mark a passage of time or soften a change of place, and it cannot invent a search that no clip contains.`,
          `You do not need an editing program to run the dry fit. Number the three clips in a note, then play them from the gallery in that order. The pauses between clips are not the finished scene's rhythm, and you should say so to yourself, but the question you are asking is about order and information, and the gallery answers it.`,
          `Once every view does its job and the pieces line up, then choose your joins. Most of them will stay straight cuts, which is fine. The ones that become dissolves will be doing a job you can name.`,
        ],
      },
      {
        title: 'Painting over a missing panel',
        paragraphs: [
          `The first mistake is the one from the opening: reaching for transitions before the story stands up. The second is fixing a disconnected ending by making it longer. Holding on the discovered headphones for another three seconds clarifies the object and does nothing about how it got there. Length is not causation.`,
          `A third mistake is a related one: a parcel scene that jumps from a closed box to an empty shelf, leaving the viewer unsure whether the box was ever opened. A longer look at the empty shelf will not help. The missing piece is the action in between, the box being opened or the contents being lifted out, and only a view of that action can supply it.`,
          `Two habits. Build every sequence first as a rough assembly with straight cuts and ask, for each view, what fact it gives the viewer that the next view depends on. And when something feels disconnected, look for the missing action before you touch the length of a shot or the style of a join.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The search links absence to discovery',
        alt: 'Empty hook and bench, then scarf lifted, then headphones revealed in the same location.',
        caption: `Look at the middle step first; it is the side panel of the wardrobe, and without it the first and last steps do not connect. Read the three jobs as establish, search, reveal. A hypothetical eight-second assembly whose durations are examples, not a recommended pace or a proportional scale.`,
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
        `Stage an empty usual storage spot and, nearby, a small object hidden under a scarf, and keep that layout fixed for every clip. The dry fit only works if the pieces are the same pieces each time.`,
        `Record three short clips: the empty spot with the nearby surface in view, the scarf being lifted, and the revealed object. Each one is a panel with a job: establish, search, reveal.`,
        `If you have an editor, join copies of the three with straight cuts and nothing else. If not, number them in a phone note and play the originals from the gallery in that order. Either way you are fitting the panels loosely before any screw.`,
        `Ask what connects the missing object to its discovery, write down one gap if you find one, and plan a reorder, a swap, or one extra view before you look at a single transition effect.`,
      ],
      notice: `You can say what each view contributes and point to any missing causal or spatial link, which is what a dry fit is for. If the three stand up on their own with plain cuts, any dissolve you add later will be decoration on a wardrobe that already has all its sides.`,
      troubleshooting: `If the discovery still feels unrelated to the empty hook, the viewer has lost the place or the action. Widen the first view so the bench and hook share the frame, which establishes the search area, or make sure the middle clip shows the hand actually lifting the scarf rather than the scarf simply gone. Do not reach for a dissolve to smooth over the jump.`,
    },
    recall: {
      prompt: 'A parcel scene jumps from a closed box to an empty shelf, but viewers cannot tell whether the box was unpacked. What is missing?',
      hint: 'Find the action that connects the two states.',
      answer: `The action between the two states: a view of the box being opened or its contents being lifted out. That is the missing side panel, and no amount of lingering on the empty shelf will supply it, because length is not an event. Record or find a clip of the unpacking and slot it between the closed box and the empty shelf, then check the three with plain cuts before any effect.`,
    },
    quiz: {
      question: 'The headphone discovery feels disconnected from the empty hook. Which first change tests the information gap?',
      options: ['Hold the discovered headphones longer.', 'Include the hand lifting the scarf in the established search area.', 'Add a gradual overlap between the hook and discovery.'],
      correctIndex: 1,
      explanation: `The disconnection is a missing action, so putting the hand lifting the scarf between the hook and the discovery fits the side panel the wardrobe lacked. A longer hold on the headphones clarifies the object and says nothing about how it was found, and a dissolve is paint over the gap, softening the jump while leaving the search absent.`,
    },
    takeaway: 'Make the event understandable in a rough order before decorating the joins.',
    sourceNote: 'Yale and official editing training support sequence construction. The headphone story and durations are original; a gallery replay tests order, not final playback rhythm.',
  },
  {
    id: 'cinema-037',
    title: 'Continue the movement rather than restarting it',
    outcome: `Join two views of one action so the movement carries on across the cut, by matching how far it has progressed, which way it travels, and what state the object is in, then judging the join in motion.`,
    scene: 'A notebook opens once on screen using a wider recording and a closer recording of the same action.',
    sections: [
      {
        title: 'One opening made from two recordings',
        paragraphs: [
          `You have recorded a notebook being opened twice: once from a wider position showing the desk, and once from closer in, showing the cover and the hand. Now you want to show one opening that begins wide and finishes close. A cut is the direct switch from one view to the other. You make the cut and play it back. The cover lifts halfway, then slams back down and starts again from closed. Or it lifts halfway and is suddenly fully open. Either way the viewer has stopped watching a notebook and started noticing an edit.`,
          `Joining a movement across a change of view so it reads as one continuous movement is called a match on action. It is a continuity problem. Continuity means keeping the action and its visible relationships understandable across the cut. The relationships that matter here are specific: which hand lifts the cover, how far it has risen, which direction it is travelling, and whether the notebook is in the same state. The cover being the same shade of blue in both clips is not one of them.`,
        ],
      },
      {
        title: 'Compare the last and first visible positions',
        paragraphs: [
          `Think about two people telling one story together. The first says, so we got to the station and the train was just... and the second picks up: ...pulling out, and we ran. That works, because the second speaker continued the sentence from where it stopped. If the second speaker had started again from so we got to the station, the listener would hear a repeat. If they had jumped to and that is how we missed the wedding, the listener would hear a gap. The handover has to land on the next word. Not the first word, and not the last.`,
          `The cut is the handover. Suppose you keep two seconds of the wide view, up to the point where the cover is about halfway raised. The close view should begin just after a matching halfway position, with the cover still rising at a similar speed. It then finishes the opening over the next two seconds. Four seconds in all, in this invented example. The numbers are a sketch, not a rule for how fast notebooks open.`,
          `The two failures are the two bad handovers. If the close view starts with the cover closed, the movement repeats. If it starts fully open, part of the movement vanishes. The right starting point is a small continuation, a fraction further along than where the wide view left off. It is not an identical position frozen and held again. How far through the opening you are is the movement's phase, and matching phase is most of the job.`,
        ],
      },
      {
        title: 'Judge the join while it moves',
        paragraphs: [
          `Choosing where each clip starts and ends is called trimming. Set your two trim points, then play the join at normal speed, and watch the cover, not the frame edges. Two still frames that look perfectly compatible can still produce a tiny pause, a stutter, or a sudden change of speed when they run together. Stills do not show pace. Try the close view a few frames earlier, then a few frames later, and listen to the movement each time.`,
          `For this first attempt, keep both camera positions on the same side of the table. Crossing to the other side swaps left and right and adds a second problem on top of the one you are learning.`,
          `Movement helps you here. The eye follows a rising cover across a cut more forgivingly than it follows a still object, which is why editors like to cut on action. It is help, not a guarantee; a mismatched hand or a reversed direction will still show.`,
        ],
      },
      {
        title: 'Matching the wrong things',
        paragraphs: [
          `The first mistake is matching the object instead of the movement. A zipper is halfway across in the wide view and the next view shows the bag fully closed; the bag matches, the action skipped. Find a closer segment where the zipper continues just past halfway in the same direction. The second mistake is matching frozen frames and trusting them. Two identical stills, cut together, often read as a hiccup because the movement stopped for a frame.`,
          `A third mistake is reaching for an effect to smooth a bad join. A dissolve over a repeated movement is a repeated movement with a blur on it.`,
          `Two habits. Before cutting, name the hand, the direction, and the phase of the movement at the end of the outgoing clip, and look for the next moment of that movement in the incoming one. And judge every action cut by playing it at normal speed, adjusting one boundary at a time until the cover rises once.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'The cover keeps rising at the join',
        alt: 'Wide view raises the cover halfway, an instantaneous cut changes view, and the close view continues the opening.',
        caption: `Look at the middle step first: the cut at two seconds changes only the viewpoint, and the very next frame carries on the rise, the second speaker picking up the next word. Hypothetical output times, not a rule for the speed of an opening.`,
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
        `Record the complete notebook opening from the wide position with both hands in view, starting closed and lifting with the same hand you will use every time. The hand is one of the things the viewer tracks across the cut.`,
        `Reset the notebook to closed and record the complete action again from closer in, keeping the phone on the same side of the table. Same side means left and right stay where they were.`,
        `On copies, join the wide view's halfway point to a slightly later matching position in the close view, the next word rather than the first or the last. Without an editor, pause both clips at those points and write them down.`,
        `Play the join at normal speed and adjust one boundary at a time until the cover rises once. If you cannot play it, record the direction and the cover angle you would need so a later test can start from them.`,
      ],
      notice: `The cover appears to rise once, across a change of view, without closing again, leaping ahead, or hesitating at the join. The second speaker picked up the next word, and the listener never noticed the handover.`,
      troubleshooting: `If the movement repeats, the close view started too early; begin it later. If it skips, it started too late; begin it earlier. If neither fix settles it, check the three things you were matching, hand, direction, and speed, before you consider any effect, because a dissolve over a repeat is still a repeat.`,
    },
    recall: {
      prompt: 'A bag zipper moves halfway across in a wide view, then appears fully closed in the next. How could you improve the join?',
      hint: 'Look for the next plausible stage of the movement.',
      answer: `Find a closer segment in which the zipper is just past halfway and still moving in the same direction, and start the incoming view there, so the second speaker picks up the next word rather than skipping to the end of the story. Then play the join at normal speed; a bag that merely looks right in a still frame can still jump when the clips run.`,
    },
    quiz: {
      question: 'Which closer-view start best continues a wider view ending halfway through a reach?',
      options: ['The hand back at its original resting position.', 'The hand already resting on the object.', 'The hand slightly farther along the same reach at compatible speed.'],
      correctIndex: 2,
      explanation: `Starting the close view a fraction further along the same reach, at a similar speed, continues the movement from where it stopped, which is the next word of the shared sentence. The hand back at rest restarts the story from the beginning and repeats the reach. The hand already on the object skips to the end and drops the rest of the reach unless that omission was the plan.`,
    },
    takeaway: 'Match progress and direction, then test the moving join at normal speed.',
    sourceNote: 'Yale describes action matching within continuity editing; software training covers trimming. This original four-second plan is illustrative, not a universal invisible-cut formula.',
  },
  {
    id: 'cinema-038',
    title: 'Decide how visibly you want to skip time',
    outcome: `Separate two decisions that usually get tangled: how much time a sequence leaves out, and how noticeable the join across that gap should look, then make each one on purpose and honestly.`,
    scene: 'A fixed view of folded towels compresses a staged forty-second task into two retained segments.',
    sections: [
      {
        title: 'One folded towel becomes three',
        paragraphs: [
          `Imagine a forty-second recording from a fixed phone: a pair of hands folding towels. At the start, one towel is folded and two lie open. At the end, all three sit in a neat stack. Nobody wants to watch forty seconds of folding, so you take the first few seconds and the last few seconds and join them. Play it back and the hands lurch, the stack grows in a blink, and the towels leap from open to folded with the camera never having moved. It looks like a glitch.`,
          `It is not a glitch; it is two separate things happening at once. A cut is the direct switch from one piece of recorded picture to another, including two pieces of the same recording. When the camera has not moved and the two pieces are nearly identical except for what changed in between, the visible lurch is called a jump cut. A jump cut announces that something was skipped instead of pretending you saw it all. That is not automatically a mistake, and a seamless-looking edit is not automatically a more honest one.`,
        ],
      },
      {
        title: 'Count what the sequence leaves out',
        paragraphs: [
          `Think about a holiday photo album. Between any two photographs, time passed: an hour, an afternoon, a day. Nobody is confused by that. Now imagine two photographs taken from exactly the same spot on the beach, and in the second the sandcastle is twice the size. The gap between them is the same kind of gap as everywhere else in the album, but because the viewpoint did not move, your eye snaps straight to the castle and says: time jumped. Turn the camera to a different angle for the second shot and the snap softens. The hour that passed is still gone.`,
          `Two words keep those apart. An ellipsis is the omission of part of an event or a stretch of time, the gap between any two photos. A jump cut is what the join looks like when the two views are nearly identical, the two photos from the same spot. In the towel example, keep source seconds zero to four and thirty-six to forty. You have eight seconds of picture and have omitted thirty-two. That is the ellipsis, and it is the same thirty-two seconds whether the join looks smooth or jarring.`,
          `You could soften the join by cutting to a different angle, or to a detail of folded fabric, between the two kept pieces. The lurch would ease. The thirty-two seconds would still be missing. A change of viewpoint tells the viewer nothing about how much time passed; only the content does. If the sequence is teaching a method, keep the towel count and the order of the folds understandable regardless of how you handle the join.`,
        ],
      },
      {
        title: 'State the purpose of the omission',
        paragraphs: [
          `Now make the two decisions deliberately. First: how much time to omit, and whether anything inside it is necessary. For a staged illustration where you want the stack to grow in visible jumps, skipping the middle is the point, and the jump cut is part of the style. For a factual tutorial, skipping a fold the viewer needs, while implying they saw the whole method, is a misrepresentation. Either show the step or say that it was skipped.`,
          `Second: how visible the join should be. Same angle and let it jump, or a new angle to soften it. Decide this after the first decision, not instead of it. The photo album lets you choose both: which hours to leave out, and whether to shoot the castle from the same spot.`,
          `You do not need an editor to plan either choice. Two paused frames and a note that says thirty-two seconds removed here is enough to decide what the sequence will claim. It is a plan, not a finished edit, and it is the plan that keeps the claim honest.`,
        ],
      },
      {
        title: 'Confusing the join with the gap',
        paragraphs: [
          `The first mistake is believing that a new angle restores time. A plant-care tutorial cuts from wet soil to a dry surface with a fresh camera position, and the drying looks instant. The angle softened the jump; the hours of drying are still omitted, and the viewer has been told they were not. The second mistake is the reverse: treating every jump cut as an error to be smoothed, when a visible jump may be exactly the right way to say that time was skipped.`,
          `A third mistake is disguising a missing necessary step with an effect. A dissolve over the omitted fold does not teach the fold.`,
          `Two habits. Whenever you remove time, write down how many seconds and what happened in them, and check whether any of it was necessary to the viewer. And then choose, as a separate decision, whether the join should announce the gap or soften it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Forty source seconds become eight retained seconds',
        alt: 'Keep source seconds zero to four, omit four to thirty-six, and keep thirty-six to forty as the towels become a stack.',
        caption: `Read the middle OMIT step first and notice it is the biggest number on the ledger: thirty-two seconds missing from playback. That is the ellipsis. The two KEEP pieces join directly, and because the camera never moved, the join will look like a jump. A source-time ledger for the invented recording, not proportional widths.`,
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
        `Set out one folded towel and two unfolded ones, support the phone so it cannot move, and record yourself folding the remaining two. A fixed camera is what makes the later join a true jump.`,
        `Pick a short piece from the beginning and a short piece from the end, and write their actual times down. Your recording does not need to last forty seconds; the ledger works for any length.`,
        `Join copies of the two pieces if your tools allow, or simply note the two kept ranges and the interval removed, keeping the original recording whole. The note is the ellipsis written out.`,
        `Decide and write down whether the stack should visibly jump or merely suggest work done, then check whether any fold a viewer would need to learn has been skipped and implied.`,
      ],
      notice: `You can name both the interval you removed and the visible effect of joining the two kept pieces, and you can say which of the two you chose on purpose. The gap in the album and the two photos from the same spot are now separate decisions.`,
      troubleshooting: `If the joined result implies something impossible, such as a fold that could not have happened in the time shown, do not reach for a dissolve to blur it. Either put the missing fold back in, or label the omission so the viewer knows time passed. The effect would hide the gap and leave the false impression intact.`,
    },
    recall: {
      prompt: 'A plant-care tutorial skips from wet soil to a later dry surface using a new angle. Is time still omitted?',
      hint: 'Viewpoint and elapsed time answer different questions.',
      answer: `Yes. The new angle is the second beach photo taken from a different spot: it softens the visible jump, and it puts back none of the hours that passed. The drying time is still omitted, and showing it from a fresh angle risks implying it was instant. State how long the soil took to dry rather than letting the smoother join make a claim you did not intend.`,
    },
    quiz: {
      question: 'You want visible bursts of progress in a staged folding sequence rather than uninterrupted action. Which plan fits?',
      options: ['Join later stages from the same camera view and acknowledge skipped time.', 'Match adjacent movement phases closely across each change of view.', 'Keep the complete folding action, trimming only idle time at its ends.'],
      correctIndex: 0,
      explanation: `Visible bursts means you want both decisions pointing the same way: time omitted, and a join that shows it, which is the same-spot photograph of the growing sandcastle. Matching movement phases across cuts is the technique for hiding joins, the opposite goal. Keeping the whole fold and trimming only the ends omits almost nothing, so there are no bursts to see.`,
    },
    takeaway: 'Decide what time to omit, then decide how visible that omission should be.',
    sourceNote: 'Yale supplies the editing distinctions. The towel action and forty-second arithmetic are invented; factual material still requires honest representation of missing time.',
  },
  {
    id: 'cinema-039',
    title: 'Let the information arrive before timing the response',
    outcome: `Start the clock on a reveal only when the words are fully readable, change one hold at a time to test how long they need, and judge the response separately from the information.`,
    scene: 'A staged doorstep note says USE SIDE DOOR before a hand withdraws to follow it.',
    sections: [
      {
        title: 'The note appears, but can it be read?',
        paragraphs: [
          `You have staged a small doorstep moment on a tabletop. A hand lifts a blank cover off a note that reads USE SIDE DOOR, pauses, and withdraws, as if the person has read it and turned to go round. You cut it together and the pace feels brisk and professional. Then you show it to someone, and they ask what the note said. The shot was two seconds long. For most of those two seconds the hand was still lifting the cover, and the last word appeared a few frames before the cut.`,
          `A cut replaces one view with the next, and here the next view arrived before the message had finished arriving. The viewer saw a person change direction for a reason they never got to read. The important idea is where the clock starts. The useful reading time begins when all the required words are visible and in focus, not when the clip begins. A second spent watching a hand cover the message is not a second of reading. Size and sharpness of the lettering matter alongside duration, because an unreadable word held for ten seconds is still unread.`,
        ],
      },
      {
        title: 'Change one hold, not the whole sequence',
        paragraphs: [
          `Think about a waiter who hands you a menu and takes it back three seconds later. The menu was in your hands for three seconds, but you spent the first two opening it and finding the page. You read for one second. If the waiter wants you to order, the fix is not to hand you the menu earlier or walk away more slowly. It is to leave the menu open in front of you for longer. The time that counts is the time the page is open and you are looking at it.`,
          `Build the comparison that way. Version A: one second for the reveal, one second holding the fully exposed message, two seconds for the hand to withdraw. Four seconds in total. Version B: the same reveal and the same withdrawal, but the message held for three seconds. Six seconds in total. The only thing that changed between A and B is how long the menu stayed open. No music was added, no shot was reframed, nothing else moved, so whatever you notice is about readable time.`,
          `This is where people start talking about rhythm, the felt pattern of durations, movements, speech, and sounds. Rhythm is real, but it is easily turned into a slogan. Short shots do not automatically make useful urgency, and long holds do not automatically make something feel serious. Ask a plainer question of the extra two seconds: did they let the words register, or were you simply waiting after nothing new was happening?`,
        ],
      },
      {
        title: 'Check recognition before interpreting a pause',
        paragraphs: [
          `Test on the actual phone, at normal speed, without pausing. Then be honest about your own disadvantage as a judge: you wrote the note, so you read it faster than anyone meeting it cold. A willing viewer who has not seen the words is the better test. Ask them afterwards what the note said, without prompting, and believe their answer over your impression.`,
          `Only once the instruction is clearly readable should you think about the hand's pause. An added hesitation after reading could read as doubt, as obedience, as irritation, or as nothing at all, depending on everything around it. It does not carry one guaranteed meaning. Decide the response timing for this scene and this audience.`,
          `There is no universal close-up length to apply. The right hold is the one after which your uncoached viewer can tell you the words.`,
        ],
      },
      {
        title: 'Timing from the wrong clock',
        paragraphs: [
          `The first mistake is counting from the start of the clip. A transit scene shows a route number only after a passing hand clears it, and the editor judges the shot as plenty long because it ran for three seconds. The number was visible for half of one. Start the check when the number is unobstructed. The second mistake is fixing an unreadable note by cutting still frames to keep the movement lively, which shortens the only part of the shot that was doing the work.`,
          `A third mistake is slowing everything, reveal and response alike, by the same amount. The words get more time, but so does everything else, and now you cannot tell which change helped.`,
          `Two habits. For any shot that carries information, find the frame where the information is fully readable and start your timing from there. And when a hold feels wrong, change that one hold and nothing else, then ask someone who does not know the words what they read.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Version B reserves time after the reveal',
        alt: 'One second reveals the note, three seconds leave the words unobstructed, and two seconds show the hand withdrawing.',
        caption: `Look at the middle step first: that is the only interval in which the menu is open, and it is the only interval that counts as reading time. The reveal before it and the withdrawal after it are unchanged from version A. A hypothetical six-second version B, not a reading-speed prescription.`,
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
        `Write USE SIDE DOOR large enough to read on your phone screen and stage the note on a safe tabletop as a stand-in doorstep. If the words are too small, no amount of holding will make them readable.`,
        `Record a hand uncovering the note, holding still, and withdrawing, keeping the whole message in focus and clear of the hand once revealed. The clock will only start when all three words are visible.`,
        `Make two copies that differ only in the length of the readable hold if your tools allow it; otherwise record two versions changing only that hold. One menu left open longer, nothing else moved.`,
        `Play both at normal speed without pausing, write down what could be read and whether the extra hold contributed, and if you can, ask someone who has not seen the note to tell you what it said.`,
      ],
      notice: `You are now judging duration from the moment all the necessary words are on screen, instead of counting the frames in which a hand or a blur covered them. The menu-open time and the menu-in-hand time have become two different numbers.`,
      troubleshooting: `If neither version can be read, more seconds are not the fix, because an unreadable word held longer is still unreadable. Enlarge the writing, move the camera closer, or sharpen the focus until the paused frame is crisp, and then run the timing comparison again from that readable baseline.`,
    },
    recall: {
      prompt: 'A transit scene shows a route number only after a passing hand clears it. Where should your timing check begin?',
      hint: 'A clip can be playing before its important information is available.',
      answer: `At the frame where the route number is unobstructed and readable, not at the start of the clip; before that the menu was still closed. From that frame, test whether enough time remains for a viewer to recognize the number before the next action, using someone who does not already know it. Do not assume a fixed number of seconds works for every sign.`,
    },
    quiz: {
      question: 'The last word of a note is exposed just before the next view. What is the clearest first timing test?',
      options: ['Trim more still frames to keep movement continuous.', 'Hold after the complete message is visible, leaving other timings unchanged.', 'Slow the entire reveal and response by the same amount.'],
      correctIndex: 1,
      explanation: `Holding only after the whole message is visible, with the reveal and withdrawal unchanged, leaves the menu open longer and changes nothing else, so you learn whether readable time was the problem. Trimming still frames shortens the one part of the shot that was working. Slowing everything by the same amount changes several timings at once and hides which one mattered.`,
    },
    takeaway: 'Time the information becoming readable, then decide what the response needs.',
    sourceNote: 'Yale and editing training support duration and rhythm concepts. The example timings are invented, not tested reading thresholds or reliable emotional recipes.',
  },
  {
    id: 'cinema-040',
    title: 'Let the next sound arrive before the next picture',
    outcome: `Plan a J-cut so the incoming clip's sound starts under the outgoing picture, using an earlier stretch of the same recording so that sound and picture are still in step when the new view appears.`,
    scene: 'A quiet hallway view gives way to a notebook after the next recording\'s page rustle begins.',
    sections: [
      {
        title: 'Hear the page before seeing the notebook',
        paragraphs: [
          `You have two clips: a quiet, still hallway, and a notebook on a desk with a page being turned. Cut from one to the other in the obvious way and the picture and the sound change together, at the same instant. It works, but it is abrupt; the notebook simply appears. Now try a different arrangement. Keep the hallway on screen, and let the rustle of the page from the notebook clip start while you are still looking at the empty hallway. A second later, the picture cuts to the notebook, and the sound you have already been hearing turns out to belong to it.`,
          `The second version feels like one connected place rather than two clips. Some vocabulary makes it buildable. The view you are leaving is the outgoing clip; the one you are moving to is incoming. A J-cut is a join where the incoming sound starts before the incoming picture. In an editor, the incoming sound block pokes out earlier along the time axis than its picture block, which gives the shape of the letter J. The timing relationship is what defines it. A fade on the audio is a separate choice and not part of the definition.`,
        ],
      },
      {
        title: 'An exact example without shifted page sounds',
        paragraphs: [
          `Think about the theatre. The lights go down, the curtain is still closed, and the orchestra begins. You hear the first bars of the overture before you see anything of the stage. Then the curtain rises on the scene the music was already describing. The music was not dragged forward out of step with the show; the overture simply starts earlier in the score than the first scene does. When the curtain opens, the orchestra and the stage are exactly together, because the music began from an earlier point of the same work.`,
          `Build the notebook join the same way. Choose a five-second piece of the notebook recording, B, that starts at the first rustle; call that moment source second zero. In an eight-second finished sequence, the hallway, A, fills zero to four seconds and the notebook B fills four to eight. Now the J: start B's sound at output second three, one second before B's picture arrives. For B's picture, use source seconds one to five. For B's sound, use source seconds zero to five.`,
          `Check the moment the curtain rises. At output second four, the picture is at B source second one, and the sound, which started at output three with source zero, has also reached source second one. They are together, and they stay together for the rest of the clip. Contrast the lazy version: slide the entire soundtrack a second earlier and leave the picture alone. Now every later rustle lands before the page you can see moves. You wanted earlier available sound, not a permanent synchronization error.`,
        ],
      },
      {
        title: 'Listen across the picture boundary',
        paragraphs: [
          `Play across the join and listen for two things. The page sound should read clearly as a page, so the viewer can connect it to the notebook when it appears. And the background noise should not lurch; a hallway's hum giving way to a desk's hum one second before the picture changes can be more noticeable than the rustle itself. If it is, trim the overlap shorter or choose a quieter stretch of B.`,
          `The overlap prepares a connection between two places. It does not manufacture a mood, and no particular feeling is guaranteed by hearing a sound early. The opposite arrangement, where the outgoing sound continues after the picture has changed, is an L-cut, and it is the same idea run the other way.`,
          `If your tools cannot separate audio from video, plan it anyway. Draw two rows, picture and sound, and mark which recording owns each second. The diagram is the overture written into the score, ready for the day you have an editor that can play it.`,
        ],
      },
      {
        title: 'Dragging the whole soundtrack',
        paragraphs: [
          `The first mistake is the lazy version above: shifting all of B's sound earlier so the rustle leads, and leaving every later sound out of step with the page it belongs to. The overture must come from earlier in the score, not from pulling the whole orchestra forward. If the rustle sounds early after the reveal, put B's sound back in alignment and extend it backwards from there.`,
          `The second mistake is reversing the order and calling it the same thing. Showing the sink first and then starting its water sound is a late sound, not a J-cut. Continuing hallway footsteps after the sink appears is an L-cut. Only tap sound over the hallway, followed by the synchronized sink, is the J.`,
          `Two habits. When you want a sound to lead, find an earlier stretch of the same recording and start there, keeping the picture where it was. And after every J-cut, play through the reveal and check that a visible action and its sound land on the same frame.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'layers',
        title: 'J-cut: sound changes at 3 s, picture at 4 s',
        alt: 'The picture row switches from hallway to notebook at four seconds; notebook sound begins at three seconds and stays synchronized after the reveal.',
        caption: `Read the sound row first and notice the notebook's sound starts at three, a second before its picture starts at four: the overture before the curtain. Then check the source ranges, 0-5 for sound and 1-5 for picture, so that at output 4 s both are at source 1 s. Two timeline rows for the invented eight-second edit, not proportional blocks.`,
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
        `Record a still hallway or plain wall for at least four seconds, then separately record a page turn so that at least five seconds run from the first rustle onward. The rustle is the first bar of the overture, and you need the score to continue after it.`,
        `In your notes, mark the first rustle as B's source second zero and draw the diagram's two rows: sound starting at output three, picture at output four. Drawing it first is what stops the whole soundtrack drifting.`,
        `If your tools allow it, build the join on copies using exactly the source ranges in the diagram, 0-5 for sound and 1-5 for picture. If not, write those ranges into the plan and do not claim an exported edit you have not made.`,
        `Play across the reveal if you can and check that the page movement and its sound refer to the same source moment, then listen for any abrupt change in background hum under the hallway.`,
      ],
      notice: `The notebook's sound is already playing while the hallway is still on screen, and when the curtain rises the page and its rustle are exactly together. You led with sound by starting earlier in the same recording, not by pulling the sound off its picture.`,
      troubleshooting: `If the rustle lands before the page moves after the reveal, you have dragged the orchestra forward instead of starting it earlier in the score. Put B's sound back in alignment with B's picture, then extend the sound backwards from source zero under the hallway. Do not shift the whole soundtrack to fix it.`,
    },
    recall: {
      prompt: 'You want a kitchen scene to be heard while a doorway is still on screen. How would you arrange the next recording?',
      hint: 'Incoming sound leads, but later visible action must still align with it.',
      answer: `Start a short earlier portion of the kitchen recording's sound under the doorway picture, then cut to the kitchen at the matching later point in the same recording, so that sound and picture are at the same source moment when the kitchen appears. It is the overture beginning before the curtain. What you do not do is slide the kitchen's whole soundtrack earlier, because then every later clatter would arrive before the hand you can see makes it.`,
    },
    quiz: {
      question: 'Which plan lets a running tap introduce the sink view through a J-cut?',
      options: ['Show the sink first, then begin its water sound.', 'Continue hallway footsteps after the sink appears.', 'Begin the tap sound over the hallway, then reveal the synchronized sink view.'],
      correctIndex: 2,
      explanation: `A J-cut is incoming sound leading its own picture, so the tap must be heard over the hallway and the sink must then appear with its sound already in step: the overture, then the curtain. Showing the sink first and starting the water afterwards is a late sound, the reverse order. Footsteps continuing from the hallway is outgoing sound overlapping, which is an L-cut.`,
    },
    takeaway: 'Let incoming sound lead the reveal without losing synchronization afterward.',
    sourceNote: 'The inherited split-edit guide and official editing training support the concept. These source ranges are original examples, not universal overlap durations.',
  },
  {
    id: 'cinema-041',
    title: 'Keep the invitation audible while the picture moves on',
    outcome: `Plan an L-cut so the outgoing speaker's sentence keeps playing after the picture has moved to what they are talking about, without repeating words or dropping into silence.`,
    scene: 'A self-recorded invitation continues while the picture changes to an empty floor cushion.',
    sections: [
      {
        title: 'Look at the offered place while the sentence finishes',
        paragraphs: [
          `You record yourself saying, there is space here if you would like to sit. Then you record a still shot of an empty floor cushion, the place being offered. The obvious edit waits for the sentence to finish, then cuts to the cushion. It works, but it is stiff: talk, stop, look. Try it another way. Cut to the cushion partway through the sentence, while your voice carries on. The viewer is then looking at the offered place as the words if you would like to sit arrive.`,
          `The second version feels like a person pointing at something while they speak. The vocabulary is the same as for any split edit. The view you are leaving is outgoing. The view you are moving to is incoming. An L-cut keeps sound from the outgoing recording playing after its picture has gone. It is defined by that timing, not by a fade. The sound that carries on does not have to be speech. A kettle or a passing car can outlast its picture just as well.`,
        ],
      },
      {
        title: 'Put the picture boundary inside the sentence',
        paragraphs: [
          `Think of a tour guide in a gallery. They say, and in this painting you can see the artist's dog in the corner. Halfway through the sentence you have already turned to look at the painting. You are no longer looking at the guide. Their voice continues, unbroken, while your eyes are on the dog. Nobody expects the guide to stop talking until you have finished turning. Nobody expects them to repeat the sentence once you are facing the canvas.`,
          `Lay the edit out the same way. In a seven-second sequence, the speaker is on screen from zero to three seconds, then the cushion from three to seven. The original invitation stays audible from zero to five seconds. So from three to five, two seconds, you hear the outgoing speaker while looking at the incoming cushion. From five to seven, the voice has finished and quiet room sound continues.`,
          `Two rules keep the guide honest. Before the picture changes, the voice must stay locked to the speaker's mouth. A visible mouth out of step with its words is the first thing anyone notices. After the change, let the original sentence simply continue. Never paste the last few words in again to fill the gap. And record some room tone, the sound of the room with nobody speaking. Then when the voice ends at five seconds, it settles into the room's own quiet rather than dropping into a dead silent hole.`,
        ],
      },
      {
        title: 'The overlap does not prove a reaction',
        paragraphs: [
          `The empty cushion is a careful choice. It shows the thing being offered, and what it means, hospitality, loneliness, routine, depends on the whole scene. If instead you cut to a real listener's face while the invitation continues, you have joined a sentence to a reaction. The viewer will read the one as a response to the other. Only do that when the reaction really was a response to those words. Pairing an unrelated expression with the sentence is a false claim made with pictures.`,
          `The mirror of the L-cut is the J-cut, where the incoming sound begins before its picture. The two are the same tool used in opposite directions. Knowing both lets you choose which recording should own the sound at any moment.`,
          `Without separate audio controls, draw the two rows, picture and sound, and mark the second at which the voice actually ends. The plan carries over to any editor you later use.`,
        ],
      },
      {
        title: 'Filling the overlap the wrong way',
        paragraphs: [
          `The first mistake is duplicating words. The picture changes at three seconds. The editor pastes if you would like to sit again under the cushion, so the viewer hears the phrase twice. The guide does not repeat the sentence because you turned your head. Remove the copy and let the original run on. The second mistake is the silent hole. The voice ends and the room goes dead, because no room tone was recorded. Use a quiet stretch from the same recording so the air continues.`,
          `A third mistake is confusing the two split edits. A craftsperson explaining a repair while you show the repaired corner is an L-cut only if their original explanation carries on over the corner. If the corner's own sound arrived first, that would be a J-cut. If voice and picture end together, it is neither.`,
          `Two habits. When a speaker refers to something, consider cutting to it while they are still talking, keeping their original audio intact. And record a few seconds of room tone at every location, so a voice can finish into the room's own sound instead of silence.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'layers',
        title: 'L-cut: picture changes at 3 s, voice ends at 5 s',
        alt: 'Speaker picture ends at three seconds, but the invitation continues until five over the incoming cushion picture.',
        caption: `Read the picture row first and find the change at three seconds, then look at the sound row and notice the invitation runs on to five: that two-second stretch is the guide still talking after you have turned to the painting. From five to seven the room's own quiet takes over. A hypothetical seven-second timeline, not a proportional scale.`,
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
        `Record yourself saying the invitation, then stay quiet and keep recording for several seconds so you capture the room's own background sound. That quiet stretch is what the voice will settle into later.`,
        `Separately record a still view of the empty cushion for several seconds without speaking. Keep both originals untouched; the edit happens on copies.`,
        `On copies, cut the picture to the cushion before the invitation ends while keeping the invitation's original audio running underneath. Without audio tools, draw the two rows with your actual proposed times instead.`,
        `Check two things: the words play exactly once, and the mouth matches the voice before the switch. Then listen for the room going dead after the voice ends, and fix that with room tone rather than with a second copy of the voice.`,
      ],
      notice: `You can hear the sentence finish after its speaker has left the picture, and the cushion is on screen while the offer is being made, like looking at the painting while the guide is still describing it. Nothing repeated and nothing fell silent.`,
      troubleshooting: `If any words play twice, you have pasted a copy of the voice under the cushion; delete the duplicate audio segment and let the original run on. If the room goes suddenly silent when the voice stops, take a quiet portion of the same recording and lay it under the remaining cushion seconds so the air continues.`,
    },
    recall: {
      prompt: 'A craftsperson explains a repair while you want to show the repaired corner. How could an L-cut help without changing their words?',
      hint: 'Let the original explanation continue after its speaking image ends.',
      answer: `Cut the picture to the repaired corner partway through their explanation while their original audio keeps playing, so the viewer looks at the corner as the sentence about it finishes, the way you turn to the painting while the guide is still talking. Keep the statement intact with no repeated words, and make sure the corner you show is the one actually being described.`,
    },
    quiz: {
      question: 'Which arrangement is an L-cut when moving from a speaker to a detail view?',
      options: ['The original sentence continues after the detail appears.', 'The detail\'s sound begins before the speaker picture ends.', 'The voice and speaker picture end on the same boundary.'],
      correctIndex: 0,
      explanation: `An L-cut is outgoing sound outliving its outgoing picture, so the speaker's original sentence continuing under the detail view is the one, the guide still talking after you have turned. The detail's own sound arriving early is the reverse shape, a J-cut. Voice and picture ending together is a plain cut with no split at all.`,
    },
    takeaway: 'An L-cut carries outgoing sound beyond the outgoing picture.',
    sourceNote: 'Inherited split-edit and Yale sound references provide terminology. This original invitation is not a claim about a listener\'s emotions or a fixed overlap length.',
  },
  {
    id: 'cinema-042',
    title: 'Test what a neighboring image makes you infer',
    outcome: `Run a fair test of how a neighboring image changes what a sequence suggests, by swapping only that image, and treat whatever meaning appears as one interpretation among several, not a fact.`,
    scene: 'A handmade Saturday calendar card alternates with either a brush tray or a packed bag.',
    sections: [
      {
        title: 'The same Saturday points toward different plans',
        paragraphs: [
          `Make a small calendar card with Saturday circled. Film it. Then film a tray of paintbrushes, and film the calendar again. Play the three in order: calendar, brushes, calendar. Most people watching will say something like, so they are painting on Saturday. Now take the brush shot out and put a shot of a packed bag in its place. Calendar, bag, calendar. The same viewers now say, so they are going away on Saturday. The calendar footage has not changed by a single frame.`,
          `Nothing in either sequence stated a plan. The viewer built one out of the neighbors. A cut is the direct switch between recorded views, and when the switching is used to build an idea out of neighboring images, that is one meaning of montage, a word that can also mean editing in general. Juxtaposition is the plainer term: setting two things side by side so they get compared or associated. The relationship between the images suggests something that neither image establishes on its own.`,
        ],
      },
      {
        title: 'Change the neighbor, keep the comparison fair',
        paragraphs: [
          `Think about the word pass. Put it next to exam and it means succeeding. Put it next to mountain and it means a route between peaks. Put it next to ball and it is something you do in football. The word is spelled the same every time; the neighbor decides what you understand. If you wanted to test how much the neighbor does, you would keep the word fixed and change only the word beside it. Changing the word as well would tell you nothing.`,
          `Build the picture test the same way. In both versions, use two seconds per image: calendar, neighbor, calendar, six seconds in all. Keep the calendar recording identical, keep the timing identical, and add no music. Change only the middle image. Now any change in what the sequence suggests belongs to that one swap. If you also quickened the cuts or added a tune, a different reading could be explained by three things at once, and you would have learned nothing you could point to.`,
          `Then do the part most people skip: write down a second reading for each version. The brushes could mean cleaning up after painting rather than getting ready to paint. The bag could be belongings in storage rather than a trip. Returning to the calendar nudges the viewer to connect the neighbor to the date, but it does not decide which connection they make.`,
        ],
      },
      {
        title: 'An association is not evidence of an event',
        paragraphs: [
          `Show the two versions to a willing viewer without telling them which story you intended, or if you are alone, list the readings yourself. Ask what seemed connected and why. You will usually find the connection is confident and the reason is thin, which is exactly the point. The sequence proposed a relationship and the viewer accepted it.`,
          `In factual work this is a hazard, not a trick. Put a shot of a person beside a shot of a broken window and the viewer infers they broke it, though no one recorded them doing so. Neighboring images can imply a cause, a motive, or an order of events that never happened. Keeping context honest means making sure the implied relationship is one you actually have grounds for.`,
          `This exercise shows how arrangement proposes meaning. It does not hand you a reliable button for producing emotions, and it does not license building a real event out of two unrelated pictures.`,
        ],
      },
      {
        title: 'Loading the test',
        paragraphs: [
          `The first mistake is changing several things to strengthen a preferred reading: swapping the middle image, adding music, and tightening the cuts, then crediting the image. You have changed the word and its neighbor at once, so the result cannot be read. The second mistake is showing the middle image alone and deciding its one true meaning. A bag on its own means nothing in particular; its contribution only exists beside the calendar.`,
          `A third mistake is treating the association as proof. A closed front door followed by a raincoat suggests weather; followed by a parcel, a delivery. Neither pair establishes why the door is shut, and each has a competing explanation you should be able to state.`,
          `Two habits. When testing what a neighboring image contributes, hold everything else fixed and swap that one image. And for every reading a sequence suggests, write down a second reading that fits the same pictures, so you never mistake the association for the event.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Version A: Saturday and brushes',
        alt: 'Calendar, brush tray, and the same calendar each occupy two seconds.',
        caption: `Look at the middle step first: the brush tray is the word beside pass, and the identical calendar on either side is the word that never changes. A painting plan is one reading; cleaning up after painting is another. An invented six-second order.`,
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
        caption: `Compare this middle step with version A and confirm it is the only thing that moved: same calendar, same two seconds each, no music. A departure is one reading; stored belongings is another, and the pictures support both equally.`,
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
        `Make a fictional calendar card with a day circled and nothing private on it, then record the card, your hobby tools, and a bag as three separate still shots. Separate shots are what let you swap one without touching the others.`,
        `Plan calendar, tools, calendar and calendar, bag, calendar with equal two-second holds. Join copies if your tools allow it, or number the clips in a note and play them from the gallery in each order.`,
        `Keep the sound and the calendar footage identical between the two versions, and resist adding anything that would flatter the reading you expect. The word stays fixed; only the neighbor changes.`,
        `Write one likely reading and one alternative for each version, or ask a willing viewer what connection they noticed without telling them what you meant.`,
      ],
      notice: `You can explain how swapping the neighbor changed what the sequence seemed to say, and you can do it without claiming the sequence proved anything. You also have a second reading for each version, which is the habit that keeps association from being mistaken for fact.`,
      troubleshooting: `If both versions seem to suggest the same thing, do not reach for more shots or a music cue to force a difference. Ask which visible detail in the middle image is carrying the reading, and whether the viewer is really responding to the neighbor or to something in the calendar shot itself. A test that needs extra ingredients to work is not testing the neighbor.`,
    },
    recall: {
      prompt: 'A closed front door is followed by a raincoat in one version and a wrapped parcel in another. What should you test?',
      hint: 'Separate the proposed relationship from facts actually visible.',
      answer: `Test the two associations fairly: same door footage, same timing, no music, with only the raincoat or the parcel swapped in, the way you would change only the word beside pass. Then write a competing explanation for each, since the raincoat might be drying and the parcel might be outgoing. Neither pair shows why the door is closed; each only proposes a reason the viewer may accept.`,
    },
    quiz: {
      question: 'You want to isolate a neighboring image\'s contribution. Which comparison fits?',
      options: ['Change both the middle image and its music.', 'Keep calendar, timing, and sound fixed; replace only the middle image.', 'Show the middle image alone and choose its one meaning.'],
      correctIndex: 1,
      explanation: `Holding the calendar, the timing, and the sound fixed while swapping the middle image leaves one difference between the versions, so whatever changes in the reading belongs to the neighbor. Changing the music as well adds a second cause you cannot separate. Showing the middle image alone removes the neighbor relationship entirely, which was the thing under test.`,
    },
    takeaway: 'Neighboring images invite relationships; they do not prove one fixed interpretation.',
    sourceNote: 'Yale supports the montage distinction. These original sequences and readings are hypothetical, without source film stills or guaranteed effects. Gallery replay tests association, not final cut timing.',
  },
  {
    id: 'cinema-043',
    title: 'Match the shots before choosing a shared color treatment',
    outcome: `Fix an unwanted color mismatch between two shots first, judged against one reference and with skin left honest, and only then decide on a shared look as a separate, reversible choice.`,
    scene: 'Two recordings of the same hand and white page differ because one has an unwanted warm cast.',
    sections: [
      {
        title: 'The hand changes color between views',
        paragraphs: [
          `You record your hand resting beside a white page in daylight. Later you record the same hand and page again, this time under a warm desk lamp. Cut the two together and the page jumps from white to orange at the join. Your hand jumps with it. You had planned to give the whole sequence a gentle, slightly warm look. The obvious move is to apply that look now and hope it swallows the difference. Apply it, and the join is still there. Now a warm page jumps to a more orange one.`,
          `Two decisions have been run together. One is whether the difference between the shots belongs to the scene or is an accident you want gone. The other is what look you want everything to have afterward. A few terms separate them. Color correction usually means balancing recorded brightness, removing unwanted casts, and matching shots to each other. White balance is the adjustment for how the light's color is interpreted. Exposure means something different at capture and in an editor. At capture it is how much light was collected. In an editor it only moves recorded values. It cannot send new light into a room that has already been filmed.`,
        ],
      },
      {
        title: 'Use the page as a comparison, not a skin target',
        paragraphs: [
          `Think about a wobbly cafe table. One leg is short, so the table rocks. You could throw a nice tablecloth over it, and it would still rock. The cloth hides the leg and changes nothing about it. The order is obvious to anyone who has sat at that table. First fold a napkin under the short leg until the table stands level. Then choose whatever cloth you like. The cloth is a decision about looks. The napkin was a decision about a fault.`,
          `Shot A, in daylight, is the level you are aiming for. Keep it as the reference. On a copy of shot B, the warm one, use whatever temperature or color control you have to reduce the excess amber. Start with a small move and look at the page and the hand together, not the page alone. The page is a handy comparison surface because it ought to be neutral. That is all it is. Ordinary paper is not calibrated. Matching the two pages never justifies making the skin paler than it was.`,
          `Check the leg with a short sequence: A for two seconds, unchanged B for two, corrected B for two. You are looking for a smaller jump at the join, not for perfection. Once the table stands level, the cloth is a separate matter. A creative grade is a deliberate change to colors and to light-and-dark relationships for a chosen look. Apply it to both shots and judge it on both, after they agree. It is not a tool for hiding their disagreement.`,
        ],
      },
      {
        title: 'Keep the detail that made the comparison useful',
        paragraphs: [
          `Hold the screen settings steady while you compare, and keep going back to the originals. Phone video is heavily compressed. Pushing a strong color change through it can bring out speckling in smooth areas, or stepped bands across what should be a gentle gradient. If the correction or the look starts to eat the texture of the hand, or changes who the hand appears to belong to, stop and back off. A level table is not worth a torn cloth.`,
          `Resist reading the look as a feeling. A warm treatment does not guarantee a warm mood; the scene does that, or fails to.`,
          `If you have no color controls at all, the two decisions still exist. Write them down separately: what correction B would need to match A, and what shared treatment you would try afterward. No paid software is required to think clearly about the order.`,
        ],
      },
      {
        title: 'Cloth over a rocking table',
        paragraphs: [
          `The first mistake is the one from the opening: applying the shared look first and expecting it to absorb the mismatch. A common preset laid over two different inputs produces two different outputs. The join stays visible. The second is correcting toward the wrong thing, pulling the skin lighter because the page went whiter, when the page was only ever a comparison and the skin is the thing people recognize.`,
          `A third mistake is pushing harder when one adjustment fixes one area and harms another. If matching the page ruins the hand, the lighting was too mixed for a single global fix. The honest options are simpler lighting next time or accepting the limit, not a stronger preset.`,
          `Two habits. Before any look, name one shot as the reference and reduce the other's unwanted difference against it, checking skin as well as the neutral surface. And keep correction and treatment as two separately recorded decisions, so the look can be undone without undoing the match.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'A six-second mismatch check',
        alt: 'Reference hand shot A, unchanged warmer B, and adjusted B are compared for two seconds each.',
        caption: `Watch the join between the first two steps and then the join into the third: the first is the table rocking, the third is the napkin under the leg. Compare the same page and the same hand across all three. An invented comparison sequence, not a finished story or a proportional timeline.`,
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
        caption: `Read the first three chips as the correction: reference, mismatch, matched, with the third brought back to the first. The fourth chip is the tablecloth, a shared look applied to both shots once they agree. Illustrative page colors only, not measurements and not targets for skin.`,
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
        `Record your hand beside a white page under two different lights you already have safely available, keep both originals, and pick one as the reference. The reference is the level you will bring the other shot to.`,
        `On a copy of the other shot, make one small color adjustment to reduce the unwanted mismatch, looking at the hand as well as the page. Without controls, write down what the correction would need to do and in which direction.`,
        `Compare reference, unchanged copy, and adjusted copy with your screen settings unchanged, checking that the hand kept its texture and still looks like your hand. A matched page with a damaged hand is a torn cloth.`,
        `Only after the shots agree, try or describe a shared treatment on both, and record it separately from the correction so it can be undone on its own if the detail or the honesty of the skin suffers.`,
      ],
      notice: `Your correction addressed a specific mismatch against a named reference, and your treatment is a separate, intentional choice sitting on top of shots that already agree. The napkin and the cloth are two decisions, and either one can be revisited without touching the other.`,
      troubleshooting: `If an adjustment that matches the page damages the hand, or the reverse, the two shots were lit too differently for one global change to reconcile. Do not push a stronger preset over the problem. Simplify the lighting the next time you record, or accept the remaining difference and note it, which is more honest than a hand that no longer looks like yours.`,
    },
    recall: {
      prompt: 'Two views of a blue jacket disagree in color. Both are meant to receive a subdued final look. What comes first?',
      hint: 'Separate compatibility from the treatment you want both shots to share.',
      answer: `Level the table first: reduce the unintended difference between the two jacket shots against one of them as the reference, keeping the jacket recognizably itself. Then lay the subdued look over both and judge it on both. Applying the shared preset to two shots that still disagree gives you two different subdued jackets and a visible join, because a tablecloth does not fix a short leg.`,
    },
    quiz: {
      question: 'Which action is primarily correction in this workflow?',
      options: ['Make both shots deliberately warmer after they already match.', 'Choose a stronger contrast treatment for the whole sequence.', 'Reduce B\'s unwanted warm cast so it agrees with reference A.'],
      correctIndex: 2,
      explanation: `Reducing B's accidental warm cast to agree with the reference removes a fault, which is the napkin under the short leg, so it is correction. Making both shots warmer once they match, or choosing a stronger contrast for the whole sequence, are choices about how everything should look, the tablecloth, and neither one makes two mismatched inputs agree.`,
    },
    takeaway: 'Match unwanted differences first; judge a shared look as a separate decision.',
    sourceNote: 'Inherited official color and white-balance guidance supports these tasks. Terms overlap; these original colors are not measured skin standards.',
  },
  {
    id: 'cinema-044',
    title: 'Check the recording format before a log conversion',
    outcome: `Find out a clip's actual recording format before applying any technical color transform, and when it is unknown, write unknown and keep a neutral copy rather than guessing from the look.`,
    scene: 'A plain blue folder and white page provide visible detail for comparing an ordinary clip and saved copies.',
    sections: [
      {
        title: 'A flat-looking folder is not a format label',
        paragraphs: [
          `You film a blue folder on a desk in gentle room light. On playback it looks soft and a little dull: the difference between its brightest and darkest parts is small, which is what low contrast means. You search for how to fix flat footage and the first tip says to apply a log conversion. You try it. The folder's creases vanish into a single dark mass and the marks on the white page beside it bleach away. The picture is punchier and has less in it than before.`,
          `The tip assumed something about your clip that was never true. Log recording is a camera mode that stores brightness along a particular encoding curve, a rule for turning captured light into file values, and it deliberately looks flat so that a later transform can unpack it. Your phone was in its ordinary mode. The folder looked flat because the room was gently lit, not because the file was encoded that way. A technical transform converts between a specified input and a specified output, and it has to match the actual recording, not a brand name and not a dull preview.`,
        ],
      },
      {
        title: 'Compare the detail before adding a conversion',
        paragraphs: [
          `Think about washing a jumper you have never washed before. It feels soft, so you guess wool and run the wool cycle, and it comes out two sizes smaller. The feel told you nothing reliable. The care label would have told you everything, and if the label is missing, the sensible move is a cool gentle wash and a note saying unknown, not a confident guess based on texture. Nobody picks a cycle by how a fabric feels when the tag is right there.`,
          `Treat the clip the same way. Picture three versions of the same three-second folder shot. The original keeps the creases in the folder and the pen marks on the page distinct. A neutral saved copy, exported with no transform, looks almost identical. The third, with a log conversion applied to footage that was never log, merges the dark creases and loses the bright marks. That is the wool cycle on a cotton jumper: visible separation destroyed, with nothing gained.`,
          `Two more labels people misread. Lowering an ordinary clip's contrast does not turn it into log; the encoding is set at recording and cannot be added afterward. And HDR, high dynamic range, means video with extended brightness handling that also depends on the display showing it. It is not another word for log. An older phone may offer neither, and that is fine. Use a supported mode and write down what you know.`,
        ],
      },
      {
        title: 'Unknown is a useful entry in your notes',
        paragraphs: [
          `The clip's resolution and frame rate are usually listed and are useless for this question. Picture dimensions and pictures per second say nothing about the encoding curve. If the recording mode or color format is not stated anywhere you trust, write unknown next to it. That word is a real result. It tells future you not to apply a transform you cannot justify.`,
          `Then do the one safe test. Export a neutral copy with no transform and compare it with the original on the same screen at the same settings. If the copy already looks different, something in the recording, the editor, or the export is handling color on its own, and that needs finding before any filter is added on top. Keep the original untouched throughout.`,
          `A guessed technical transform is not a creative choice. It is a claim about the file's input that you did not check.`,
        ],
      },
      {
        title: 'Picking the cycle by feel',
        paragraphs: [
          `The first mistake is choosing a transform because its preview looks attractive. Attractive is a fine reason to pick a creative look; it is no evidence about how the footage was encoded. The second is dialing a wrong conversion down until its harshest damage is hidden. A weaker wrong transform is still the wrong transform, and the lost detail is still lost.`,
          `A third mistake is accepting resolution and frame rate as a format description. A friend sends a low-contrast sunset clip listing only 1080 and 30; that is the size of the jumper and the number of times it has been worn, not the fabric. Ask for the recording mode or inspect trustworthy format information, and run a neutral workflow until you have it.`,
          `Two habits. Before any technical color transform, write down what the recording mode actually was, and if you cannot, write unknown and leave the transform off. And compare a neutral export against the original before anything else, so you catch color changes you did not ask for.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'layers',
        title: 'Three alternate tracks for the same short test',
        alt: 'Original folder footage, a neutral copy, and an illustrated failed conversion occupy the same three-second interval on alternate picture rows.',
        caption: `Read the rows one at a time, not stacked. The first two should look nearly alike; the third is the wool cycle on a cotton jumper, where creases and page marks merge. The failed result is hypothetical and does not describe every transform or device.`,
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
        `Record a short clip of a folder and a marked white page in your ordinary supported mode, and keep that file as the untouched reference. Everything else is compared against it.`,
        `Check the recording settings and the clip's information and write down what is actually listed: mode, resolution, rate. Where the color format is not stated, write unknown. That is reading the care label, and noticing when it is missing.`,
        `If your tools allow, save a neutral copy with no log or other unverified transform. If they do not, write down what input information a conversion would need before you could justify it.`,
        `Compare the original and the neutral copy on the same screen at the same settings, looking at the creases and the pen marks, and note where any change in color or detail appears before you adjust anything further.`,
      ],
      notice: `You can separate what you know about the recording from what the flat or vivid preview tempted you to assume. The word unknown sits in your notes as a real result, and the detail in the folder is still there because nothing was run on a guess.`,
      troubleshooting: `If the neutral export already looks different from the original, the recording, the editor, or the export is changing color without being asked, and that is the thing to inspect. Keep the original safe and chase that difference down. Do not add another transform to cancel the first; stacking two unknowns is guessing twice.`,
    },
    recall: {
      prompt: 'A friend sends a low-contrast sunset clip with only resolution and frame rate listed. Is that enough to select a log transform?',
      hint: 'Picture dimensions and sampling rate are not the encoding curve.',
      answer: `No. Resolution and frame rate are the size of the jumper, not the fabric; they say nothing about how brightness was encoded. Ask your friend for the actual recording mode, or inspect format information you can trust, and until you have it keep a neutral workflow with no input transform. A flat look is a reason to ask, never a reason to guess.`,
    },
    quiz: {
      question: 'An ordinary clip looks flat and its color encoding is unlisted. Which step best establishes whether a technical conversion fits?',
      options: ['Check the actual recording mode while leaving unverified transforms off.', 'Choose the log conversion whose preview looks most attractive.', 'Reduce a conversion\'s strength until its harshest changes disappear.'],
      correctIndex: 0,
      explanation: `A technical conversion needs an identified input, so the only step that answers the question is finding the real recording mode, with every unverified transform left off meanwhile; that is reading the care label. An attractive preview is a reason to like a look, not evidence of encoding. Weakening a wrong transform hides the damage and leaves the guess in place.`,
    },
    takeaway: 'Identify the input before applying a technical transform; unknown is better than guessed.',
    sourceNote: 'Official color-management training and inherited model-specific recording guidance support the distinction. The failed conversion is illustrative; no log or HDR capability is assumed.',
  },
]