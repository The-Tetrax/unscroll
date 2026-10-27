import type { LessonGuide } from './types'

// Original examples and illustration specifications. Existing sources are inherited by ID.
// Hex colors describe screen swatches, not measured pigments or calibrated reproductions.
// Practice budgets and schematic dimensions are examples, not tested efficacy or beauty rules.
export const designColourTypeGuides: LessonGuide[] = [
  {
    id: 'design-001',
    title: 'Make the pear visible before choosing its green',
    outcome: `Check whether a subject and its background fall into the same light-dark group, then fix that boundary by changing one side of it before adding any color detail.`,
    scene: 'A small orchard-market poster loses its pear silhouette when viewed from across a room.',
    sections: [
      {
        title: 'A poster with a disappearing subject',
        paragraphs: [
          `You have drawn a poster for a small orchard market. A green pear sits on a green field. Up close it looks lovely. The stem curves, the skin has speckles, the leaf has veins. Then you pin it to the wall and walk to the far side of the room. The pear is gone. There is a green rectangle with some marks on it. Your first instinct is to add more. Darker speckles, a thicker outline, a brighter leaf. None of that will work, and it helps to see why before you touch the drawing again.`,
          `The problem is not inside the pear. It is at the pear's edge, where the fruit meets the field. From across the room your eye cannot see speckles. It can only see large shapes, and it finds large shapes by looking for a change in lightness along a boundary. If the pear and the field are about as light as each other, there is no boundary to find. The pear has no silhouette. Everything you add inside the shape is detail on a shape nobody can see.`,
        ],
      },
      {
        title: 'Value is a relationship between areas',
        paragraphs: [
          `Picture someone in a dark coat standing in front of a dark hedge at dusk. You know they are there, but you cannot tell where the coat ends and the hedge begins. Then they take two steps sideways, in front of a pale wall. Suddenly the whole figure is there, every edge sharp. The coat did not change. The person did not change. What changed is how light the area touching their edge is.`,
          `Artists call that lightness or darkness value. Hue is a different thing. Hue names the color family: green, red, blue. Two colors can come from different families and still share almost the same value. A middle red and a middle green can sit side by side and refuse to separate in a small picture. So a new hue is not a fix on its own. What you need is a value difference where the silhouette matters.`,
          `There is a simple way to check. Squint at the picture until the detail blurs. Or make a small pencil study with no color at all. Sort what you see into three rough groups: light, middle, and dark. Those three groups are for this study. They are not a rule that every picture must contain exactly three tones. The only question is whether the pear falls into a different group from the field at its edge.`,
        ],
      },
      {
        title: 'Change the field, keep the pear',
        paragraphs: [
          `In the example palette the pear is #35654D and the field is #486754. Both are fairly dark greens. Squint and they fall into the same group. That is the whole diagnosis. Now leave the pear exactly as it is. Replace the field with a pale ivory, #F3EBDD. The pear becomes a dark shape on a light ground. Walk across the room and it is there. You changed one thing, and it was the thing at the boundary.`,
          `An orange stem might look nice. It is decoration, not repair. The repair was the field. If you had added the stem first, the pear would still have vanished from across the room, with a small orange mark floating where it used to be.`,
          `Before you restore any color, redraw the poster as three pencil masses: light field, dark pear, and whatever the title sits in. If the pear reads at that stage, add back only the details that help. A phone grayscale preview is another way to compare, but treat it with care. The conversion can rank two hues differently from your own eye. It also says nothing about whether a reader with low vision can see the poster. It is a comparison, not an accessibility certificate.`,
        ],
      },
      {
        title: 'When the silhouette is the problem and when it is not',
        paragraphs: [
          `The most common mistake is to fix a silhouette problem with surface detail. More speckles, a crisper outline, a third shade of green. These feel like progress because the picture gets busier. But a busier shape that nobody can find is still a shape nobody can find. Fix the boundary first. Then decide how much detail that boundary can carry.`,
          `The second mistake is the opposite one: forcing every edge in the picture to have a strong value jump. Then every leaf, speckle, and letter shouts equally, and the pear disappears again into noise. Only the edges that carry recognition need the contrast. The pear's outline does. The speckles do not.`,
          `Two habits. When a subject vanishes at a distance, squint and ask which value group it shares with its surround, before you touch a single detail. And when you fix the boundary, change one side of it, hold the other side still, and look again from across the room.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'One pear, two possible fields',
        alt: 'A dark green pear swatch is compared with a similarly dark green field and a pale ivory replacement.',
        caption: `Look at the pear chip against the middle chip first, then against the right chip. The pear is identical in both pairs; only the field moved. These screen colors illustrate separation, not calibrated paper or exact grayscale equivalents.`,
        items: [
          { label: 'Pear, unchanged', detail: '#35654D: the subject in both versions.', color: '#35654D' },
          { label: 'Field before', detail: '#486754: a neighboring dark green.', color: '#486754' },
          { label: 'Field after', detail: '#F3EBDD: a lighter surround.', color: '#F3EBDD' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Pencil', 'Scrap paper', 'Optional phone camera'],
      steps: [
        `Draw two small poster rectangles. Give each the same pear outline, stem, and short market title, so the only thing that will differ between them is the field.`,
        `Shade the first pear and its field to similar middle-dark values. Leave out the speckles, because this version is meant to show the problem, not hide it.`,
        `Keep the second pear equally dark but leave its field mostly unshaded. Prop both up and step back to a comfortable distance; the test only works at the distance where detail disappears.`,
        `Circle the version with the clearer silhouette and label its light, middle, and dark groups. A phone photo from across the room is optional, and it is a comparison rather than a verdict.`,
      ],
      notice: `The pear in the second rectangle separates without a new outline, a new hue, or any surface marks. The only thing you changed was the lightness of the area touching its edge, and that one change did the work that extra detail could not.`,
      troubleshooting: `If both pears still merge from a distance, the shapes may be too small for the test or the two fields may be closer in value than they look up close. Enlarge the main shape, or make the second field clearly lighter, and compare again before you add a single speckle.`,
    },
    recall: {
      prompt: 'A blue bicycle icon disappears on a dark purple route map. What relationship would you test before drawing more spokes?',
      answer: `Test the light-dark relationship at the icon's edge: try a lighter field behind it or a lighter icon on the same field, while holding the shape steady. Blue and purple are different color names, but like the coat and the hedge at dusk, they can share the same value group. More spokes are detail on a shape nobody can find.`,
      hint: 'Temporarily replace the colors with broad pencil tones.',
    },
    quiz: {
      question: 'A leaf illustration reads close up but disappears in a thumbnail. Which first revision tests its large-scale separation?',
      options: ['Increase the saturation of both greens', 'Lighten the surrounding field while keeping the leaf fixed', 'Sharpen the small veins inside the leaf'],
      correctIndex: 1,
      explanation: `Lightening the field while the leaf stays fixed changes one side of the missing boundary, which is the same move as swapping the hedge for a pale wall. Raising saturation can leave both greens in the same value group, and sharper veins are surface detail that a thumbnail cannot show.`,
    },
    takeaway: 'Fix the important light-dark boundary before decorating either side of it.',
    sourceNote: 'Tate and Getty provide value vocabulary. The poster and swatches are original teaching examples, not measured visibility results.',
  },
  {
    id: 'design-002',
    title: 'Specify whether the green needs darkening or muting',
    outcome: `Turn a vague complaint like too bright into one named change to hue, value, or saturation, make only that change, and check what else moved with it.`,
    scene: 'A basil illustration competes with the title on a homemade recipe-book cover.',
    sections: [
      {
        title: 'Too bright does not identify the problem',
        paragraphs: [
          `You are drawing a cover for a small recipe collection. Basil leaves spill across the top, and the title sits beside them. Something is wrong. The leaves feel too bright next to the lettering. So you open the editor and start pulling sliders. Brightness down. Saturation down. Hue a notch towards blue. Twenty minutes later the leaves look muddy, the title still fights them, and you cannot remember which change did what.`,
          `Too bright is a complaint, not a diagnosis. It could mean the leaves are too light. It could mean the green is too intense. It could mean the leaves simply take up too much of the cover. Each of those is a different problem with a different fix. Before you move anything, write down what must stay the same. The leaves should still read as green. Their shape should stay. They should stop competing with the title. Now you have a target to compare against instead of a slider to push.`,
        ],
      },
      {
        title: 'Three properties, three questions',
        paragraphs: [
          `Imagine telling a cook that the soup is too strong. The cook cannot act on that. Too salty, too spicy, or too much of it? Those are three different problems. Salt is fixed with water or a potato. Spice is fixed with cream or yoghurt. Too much is fixed with a smaller bowl. A cook who hears too strong and reaches for all three at once ruins the soup. Color works the same way. The vague word hides three separate properties.`,
          `Hue is the color family: green rather than blue, red rather than orange. Value is how light or dark the color looks. Saturation is how intense or muted it looks. A pale green can be light and quite muted at the same time. A dark green can still look richly colored. The three are related in how we see them, but they are not the same thing, and they do not stand in for each other.`,
          `So ask three questions in turn. Is the family wrong? Is the light-dark relationship wrong? Is the intensity distracting? One of those usually fits the complaint, and that is the one to change first. Be wary of the names on digital controls. A slider called brightness or saturation does not always move only one perceptual property. Judge the result beside its real neighbors, not by the label on the control.`,
        ],
      },
      {
        title: 'Compare separate revisions',
        paragraphs: [
          `The cover study starts with green #2F8F57. Make three separate candidates, each testing one question. A muted candidate, #687A6E, keeps a green tendency but drops the intensity. A darker candidate, #17482C, keeps the family and lowers the value. A blue candidate, #2F578F, changes the family altogether. These are chosen examples. They are not a mathematically matched set, and no single slider is claimed to produce them.`,
          `Which one do you try first? Go back to what you wrote. The goal was less competition with the title without deliberately changing the family. That points at the muted candidate. Put #687A6E beside the title and look. If the leaves have calmed down and still read as basil, you have found the property that mattered. If the title still disappears, the problem may not be the leaves at all. Check the title's own value and size as a separate question.`,
          `Keep honest notes. If you dropped saturation and the cover also got lighter, say so. Do not report a successful saturation fix when the real improvement came from making everything lighter. Next time you would reach for the wrong tool.`,
        ],
      },
      {
        title: 'What the three words cannot do',
        paragraphs: [
          `The most common mistake is pulling two sliders at once and crediting whichever one you believed in. Then you learn nothing, and the next cover takes just as long. Change one property, look, write a sentence, then change the next. The second mistake is trusting the slider label. On some tools, lowering saturation also shifts the apparent value, and a hue slider can change intensity on the way. Your eye beside the real title is the judge, not the label.`,
          `Pigments add a further twist. Mixing a little gray paint into a green mutes it, but it will usually darken or lighten it as well, depending on the gray. No paint and no control moves exactly one property and leaves the other two alone. Expect side effects and go looking for them.`,
          `Two habits. When a color feels wrong, write the complaint as one of the three questions before you touch anything: family, lightness, or intensity. And after each change, name the property you meant to move and check whether a second one moved with it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Four basil-cover candidates',
        alt: 'The initial green sits beside a muted green, a darker green, and a blue hue alternative.',
        caption: `Read the label under each chip first, then compare that chip with the starting green on the left. Each chip tests one question: mute, darken, or change family. The values are not perceptually matched, and no slider is claimed to produce exactly these alternatives.`,
        items: [
          { label: 'Initial green', detail: '#2F8F57: starting candidate.', color: '#2F8F57' },
          { label: 'Mute the green', detail: '#687A6E: less intense, still greenish.', color: '#687A6E' },
          { label: 'Darken the green', detail: '#17482C: a lower-value alternative.', color: '#17482C' },
          { label: 'Change the family', detail: '#2F578F: blue rather than green.', color: '#2F578F' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Your own plant photo and an existing phone editor, or these swatches', 'Paper for notes'],
      steps: [
        `Choose one green area. Write down what must stay the same, then write whether lightness or intensity is what bothers you. This turns the complaint into a question before any slider moves.`,
        `On a duplicate of the photo, preview lower saturation only, then reset. If you have no editor, compare the first two swatches instead. One change at a time is what makes the result readable.`,
        `Preview a darker version separately, or compare the first and third swatches. Write down anything that changed besides your target, because that side effect is the thing the slider label did not tell you.`,
        `Keep one candidate and a sentence explaining which property it changed and why. Preserve the original photo rather than overwriting it, so you can still compare against the start.`,
      ],
      notice: `Your revision note now names a property, such as less saturated, instead of saying make it less bright. That one word is the difference between a cook who knows the soup is too salty and one who just knows it is too strong. You can act on it, and you can check it.`,
      troubleshooting: `If both the muted and the darker versions seem to help, do not combine them yet. Put each one beside the title on its own and look again. The cover may have two problems, one of intensity and one of lightness, and you will only know the mix if you have seen each fix alone.`,
    },
    recall: {
      prompt: 'An orange door in your painting is the right lightness but overwhelms the room. What would you test while keeping it orange?',
      answer: `Try a less saturated orange, because the complaint names intensity, not lightness or family. Then recheck its value against the wall, since the paint or slider you used to mute it may have lightened or darkened it on the way. Like adding cream to a soup that was too spicy, the fix can change more than the one thing you aimed at.`,
      hint: 'Separate intensity from the color family and the amount of light-dark separation.',
    },
    quiz: {
      question: 'A blue background needs to become lighter without deliberately becoming greener. Which brief states the target most clearly?',
      options: ['Shift its hue toward cyan', 'Reduce its saturation until it looks gray', 'Raise its value, then check that it still reads as blue'],
      correctIndex: 2,
      explanation: `The third brief names the property to move, value, and then checks the side effect that matters, the family. Shifting hue toward cyan is the greener change the brief wanted to avoid. Reducing saturation targets intensity, which may not make the background any lighter. It is the difference between adding water to a salty soup and adding cream to it.`,
    },
    takeaway: 'Name the color property, change it deliberately, and inspect any side effects.',
    sourceNote: 'Getty and Blackmagic Design support the terminology. The cover palette is illustrative; digital controls and pigment mixtures are not perceptually independent.',
  },
  {
    id: 'design-003',
    title: 'Keep the gray sample fixed and move its surround',
    outcome: `Tell apart an appearance change caused by a new surround from a physical change to the sample, by holding the sample and the light steady while only the surround moves.`,
    scene: 'A pencil drawing is tried against a charcoal mount and a pale mount before framing.',
    sections: [
      {
        title: 'The drawing has not been redrawn',
        paragraphs: [
          `You have finished a pencil drawing and want to frame it. You lay it on a charcoal-colored mount, then on a pale cream one. The middle-gray shading looks different on each. On the dark mount it seems lighter and a little washed out. On the pale mount it seems heavier. You have not touched the pencil. Yet your hand is already reaching for it, to darken the shading so it will hold up on the dark mount.`,
          `Stop before you do. If you darken the drawing to suit the dark mount, you will then try it on the pale mount and find it too heavy. You will have spent an hour chasing a change that was never in the drawing. The drawing is one part of what you see. The mount beside it is another. To understand what moved, keep the drawing exactly as it is and change only the thing around it.`,
        ],
      },
      {
        title: 'Apparent lightness depends on context',
        paragraphs: [
          `Think of a person of average height. Stand them among a group of small children and they look tall. Stand them among a basketball team and they look short. Their height has not changed by a centimeter. What changed is the company. Nobody reaches for a tape measure and concludes the person shrank between the two photographs. Yet with a gray patch, that is exactly the mistake we make.`,
          `The effect has a name: simultaneous contrast. Nearby areas influence how each other look. A middle gray usually looks lighter beside a dark field and darker beside a light field. Your visual system is built to read relationships and boundaries, not isolated patches. The strength of the effect depends on the arrangement, the size of the areas, and the viewing conditions. It need not look equally strong to everyone, and that is fine.`,
          `Now separate two kinds of change. A physical change means more graphite on the paper, different light falling on it, or edited image data. A contextual change means the same patch moved to a new surround under the same light. If you swap the mount and also carry the drawing nearer the window, you have made both changes at once. Then you cannot say which one you saw. Keep them apart.`,
        ],
      },
      {
        title: 'Choose the mount with the drawing in place',
        paragraphs: [
          `The two diagrams use the same center, #808080. In the first it sits between dark flanks, #202020. In the second it sits between pale flanks, #F2F2F2. The center code is identical in both. Look at the two centers and notice what your eye reports. Then cover both sets of flanks with a plain sheet and compare the centers again. The appearance shifts back. Nothing in the center changed; only its company did.`,
          `For the real drawing, do the same with the mounts. Put the whole drawing on each mount at the size it will be framed, under the same light, from the same chair. Ask which surround helps the shading do its job. That is a mounting decision, made with the drawing in place. It is not a reason to edit the drawing.`,
          `A screen diagram is a schematic. Your pencil, your paper, and your display will not match these codes exactly, and the diagram does not promise they will. What it shows is a method: hold the sample, move the surround, and watch what happens.`,
        ],
      },
      {
        title: 'When the sample really did change',
        paragraphs: [
          `Sometimes the sample has changed. The scan was adjusted, the room light shifted, or the display brightness is different on the second day. If you blame context for everything, you will miss a real edit. So check the physical side too. Same file, same screen settings, same lamp. Only when those are steady can you credit the surround.`,
          `The other mistake is the one from the first paragraph: editing the center to chase an appearance. Each edit changes the very thing you were trying to judge, so the comparison never settles. If the effect looks weak in your own experiment, write it down as a weak effect. Do not enlarge the story to match the textbook.`,
          `Two habits. When something looks different, ask what else is in the frame before you ask what is wrong with it. And when you test, change one thing, the surround, and keep a short list of everything you held still.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Gray between dark flanks',
        alt: 'A gray center sits between two charcoal mounting-paper areas.',
        caption: `Look at the gray center first, then let your eye take in the dark flanks on either side. The center is #808080 in both diagrams. Gaps separate the labels here; your paper experiment can use a continuous surround.`,
        items: [
          { label: 'Dark left', detail: '#202020', color: '#202020', x: 18, y: 50, shape: 'paper' },
          { label: 'Same gray', detail: '#808080', color: '#808080', x: 50, y: 50, shape: 'box' },
          { label: 'Dark right', detail: '#202020', color: '#202020', x: 82, y: 50, shape: 'paper' },
        ],
      },
      {
        type: 'spatial',
        title: 'Gray between pale flanks',
        alt: 'The identical gray center now sits between two pale mounting-paper areas.',
        caption: `Now look at the same gray center between pale flanks of #F2F2F2. Compare this center with the one above, like the same person photographed in two different groups. Nothing in the image file became darker.`,
        items: [
          { label: 'Pale left', detail: '#F2F2F2', color: '#F2F2F2', x: 18, y: 50, shape: 'paper' },
          { label: 'Same gray', detail: '#808080', color: '#808080', x: 50, y: 50, shape: 'box' },
          { label: 'Pale right', detail: '#F2F2F2', color: '#F2F2F2', x: 82, y: 50, shape: 'paper' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Pencil', 'One small paper scrap', 'A pale sheet and a dark page or shaded rectangle'],
      steps: [
        `Shade the small scrap evenly to a middle gray. Keep that one scrap for the whole comparison, because the point is that the sample never changes.`,
        `Place it on the pale sheet, then on the dark area, under the same light and from the same viewing angle. Moving the lamp or your head would add a second change you could not separate.`,
        `Write down whether its apparent lightness changes. Then move it back to the first surround and check that the appearance follows the surround, not the order you looked.`,
        `Cover most of each surround with the same plain sheet and compare again. Do not add graphite to the scrap at any point; if you feel the urge, write the urge down instead.`,
      ],
      notice: `You can now describe an appearance change in one sentence and state that the physical sample is unchanged in the next. Those two sentences used to collapse into one, and that collapse is what sends people reaching for the pencil. Keeping them apart is the whole skill.`,
      troubleshooting: `If little seems to change, the surrounds may be too small or glare may be flattening everything. Enlarge the dark and pale areas so they fill more of your view, move away from reflections, and compare again. If the effect is still weak, record a weak effect honestly rather than forcing the result the lesson predicted.`,
    },
    recall: {
      prompt: 'An unchanged gray icon seems brighter after an app switches to a dark theme. What would you hold constant before recoloring it?',
      answer: `Hold the icon's specified color, the display brightness, and the viewing conditions fixed, and compare the two backgrounds with only the theme changing. The icon is the person of average height who looks tall among children; the dark theme is the new company. If everything physical is steady, the apparent change came from context, and recoloring would be editing the sample to chase its surround.`,
      hint: 'Separate the patch from the neighboring field.',
    },
    quiz: {
      question: 'A scanned sketch looks different on two gallery backgrounds. Which comparison best isolates the surround?',
      options: ['Use the same image and screen settings on both backgrounds', 'Compare two independently edited scans', 'Increase brightness for the darker gallery page'],
      correctIndex: 0,
      explanation: `Only the first comparison holds the sample and the display steady, so any difference you see belongs to the surround. Two independently edited scans change the sample itself, and raising brightness for one page changes the light reaching your eye. Either one is the tape measure mistake: altering the person while trying to judge the company.`,
    },
    takeaway: 'Compare an unchanged sample in context before correcting the sample itself.',
    sourceNote: 'Exploratorium Gray Step discusses contextual boundaries; this separate mount exercise does not reproduce its gradient artwork. The inherited Tate reference adds color context.',
  },
  {
    id: 'design-004',
    title: 'Say which blue is warmer than which',
    outcome: `Describe a color as warmer or cooler only in relation to a named partner, and keep that comparison in a separate sentence from any claim about what the color makes people feel.`,
    scene: 'A rainy railway-platform painting needs two distinct blues and an amber shelter lamp.',
    sections: [
      {
        title: 'Two blues for the same platform',
        paragraphs: [
          `You are painting a quiet railway platform after rain. The shelter roof is blue. The puddles reflecting the sky are blue. If you use one identical blue for both, the picture flattens into a single sheet. So you try a violet-leaning blue for the roof and a greener blue for the puddles. A friend looks over your shoulder and says the roof is the warm one. Another friend says blue is a cool color, so that cannot be right. Both are using the same word to mean different things.`,
          `The disagreement matters because it decides what you paint next. If warm is a fixed label stuck to a swatch, there is no such thing as a warm blue and you must repaint. If warm is a comparison between two colors, the roof blue can be warmer than the puddle blue and still be cooler than the lamp. The second meaning is the one painters use. It only works when you say what you are comparing with.`,
        ],
      },
      {
        title: 'Temperature is relative here',
        paragraphs: [
          `Think about being the older sibling. In one pair you are the older one. Put you beside your aunt and you are the younger one. Nobody is confused by this, because older always means older than someone. Color temperature in painting works the same way. A blue is warmer than another blue when it leans towards red. That same blue is cooler than an amber lamp. Both statements are true at once, because each names a different partner.`,
          `Artists do commonly group reds and oranges as warm and blues as cool. That is a rough family map, and it is useful. But within a family the direction of lean still matters. Against a greenish blue, a violet-leaning blue is the warmer of the pair. Against an amber lamp, both blues sit on the cool side. The habit to build is simple. Never rank a swatch on its own. Name the pair.`,
          `One more separation. A lamp's correlated color temperature is measured in kelvin and describes a light source. That is a different vocabulary from the painter's warm and cool, and the two can point in opposite directions. Neither vocabulary tells you how a viewer will feel. Setting, lighting, memory, and the colors nearby all shape that.`,
        ],
      },
      {
        title: 'Use the comparison to make a decision',
        paragraphs: [
          `For the platform study, put violet-blue #5869A8 beside green-blue #297E91. Describe what you see before you interpret it. The roof blue is redder than the puddle blue. The puddle blue is greener than the roof blue. Now add amber #D79A45 as the shelter lamp. The lamp differs from both blues, and beside it both blues read as cool. Three sentences, each naming its partner.`,
          `Notice that the three chips also differ in value and saturation. The amber is lighter than either blue. So temperature is not the only contrast in the picture, and you should not credit it for everything. Say which contrast you are talking about.`,
          `Then make the artistic choice. You want the lamp to suggest a sheltered place to wait. Support that with where the lamp sits and how the roof wraps around it. That is your proposal as a painter. It is not evidence that orange means comfort to everyone, and you do not need it to be. Ask whether the painted light and the surfaces around it carry the reading you intend. If they do not, change the arrangement before you change every cool area in the picture.`,
        ],
      },
      {
        title: 'What temperature words cannot carry',
        paragraphs: [
          `The first mistake is turning a comparison into a label. Once a swatch is simply warm, you stop looking at its neighbors, and the neighbors are where the painting lives. The second mistake is turning a label into a prediction about feelings. A warm lamp in a cold scene can read as welcome, as lonely, or as a warning, depending on everything else in the frame. If you write that orange means comfort in your notes, you have stopped observing and started asserting.`,
          `There is also the kelvin trap. A daylight bulb at 6500 kelvin is called a high color temperature and looks bluish. A painter would call that bluish light cool. The two vocabularies disagree on purpose, because they describe different things. Keep them in separate sentences.`,
          `Two habits. Whenever you call a color warm or cool, finish the sentence with than, and name the partner. And keep your intended mood in a separate sentence from the comparison, labeled as your choice, so you can test whether the picture actually delivers it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Roof, puddle, and shelter lamp',
        alt: 'Violet-blue roof, green-blue puddle, and amber lamp swatches make temperature comparisons visible.',
        caption: `Look at the two blues first and decide which one leans redder. Then bring in the amber lamp and notice that both blues now sit on the cool side of it. These illustrative colors are not equal-value samples, measured lighting, or a calibrated painting reproduction.`,
        items: [
          { label: 'Roof blue', detail: '#5869A8: redder than the puddle blue.', color: '#5869A8' },
          { label: 'Puddle blue', detail: '#297E91: greener than the roof blue.', color: '#297E91' },
          { label: 'Shelter lamp', detail: '#D79A45: amber beside both blues.', color: '#D79A45' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Two blue objects, your own photos, or these swatches', 'Paper and pencil'],
      steps: [
        `Choose two blues under the same light, or use the roof and puddle examples. Write the pair down as a pair, because a temperature statement with only one color in it has nothing to compare.`,
        `Describe whether one leans greener or redder than the other. Put any lightness difference in a separate sentence, so you do not credit temperature for a contrast that is really value.`,
        `Sketch a roof, a puddle, and a lamp. If you have no colored pencils, write the color labels on the sketch; the point is placement, not pigment.`,
        `Write one sentence about the mood you intend and the visible placement that supports it. Label it as your choice, not as a claim about what everyone will feel.`,
      ],
      notice: `Your temperature statement now contains a than, like older than, and your interpretation sits in its own sentence as an artistic choice. The two used to blur together into warm means cozy. Separated, one can be checked by looking and the other can be tested by asking a viewer.`,
      troubleshooting: `If your two blues are hard to tell apart, use the supplied roof and puddle pair instead of straining. Do not invent a lean your materials do not show, because the whole exercise is about describing what is actually in front of you. If you cannot see a difference, that is a true observation and worth writing down.`,
    },
    recall: {
      prompt: 'A costume designer calls a violet scarf warm beside a teal coat. Is that inconsistent with calling blue a cool family?',
      answer: `No. The scarf is warmer than the greenish coat because it leans towards red, and both of them are cooler than an orange would be. It is the older sibling again: older than one person, younger than another, with no contradiction. The partner changes, so the comparison changes, while the family map stays a rough guide.`,
      hint: 'Ask what the scarf is being compared with.',
    },
    quiz: {
      question: 'Which revision note gives a painter an observable temperature target?',
      options: ['Lighten both blues by the same amount', 'Increase the saturation of both blues equally', 'Make the roof blue redder relative to the greenish puddle'],
      correctIndex: 2,
      explanation: `The third note names a direction of lean and the partner it is measured against, which is what a temperature statement needs. Lightening both blues changes value, and raising saturation changes intensity. Neither says anything about which blue is warmer than which, just as giving two siblings the same haircut says nothing about who is older.`,
    },
    takeaway: 'Temperature language becomes useful when the comparison and artistic intention are stated separately.',
    sourceNote: 'Getty and Tate provide color relationships, not universal emotional predictions. The platform palette and interpretation are original illustrative choices.',
  },
  {
    id: 'design-005',
    title: 'Give each invitation color a job',
    outcome: `Build a small palette by assigning each color a job, then prove the structure holds by covering the accent and checking that nothing essential disappears.`,
    scene: 'A folded seed-swap invitation uses cream paper, dark green information, and a terracotta seed motif.',
    sections: [
      {
        title: 'A small invitation with competing decisions',
        paragraphs: [
          `You are making a folded invitation for a seed swap. There is a heading, an address, a date, a leaf border, and a little drawing of a seed. Each of them could have its own color. So you start choosing: a green for the heading, a brown for the address, maybe a rust for the date so it stands out. An hour later the invitation looks like a paint chart. Every element is shouting, and the date you wanted to stand out is lost among five other colors that also stand out.`,
          `The trouble is not that you picked bad colors. It is that you made more color decisions than the message needed. A better place to start is with jobs. One color is the surface you read on. One color carries all the information people must not miss. One optional color marks the seed motif. Three jobs, three colors. That is what a limited palette means: deliberately restricting the colors you have to coordinate. It does not mean picking a fashionable trio and squeezing every element into it.`,
        ],
      },
      {
        title: 'Roles are more useful than quotas',
        paragraphs: [
          `Think of a football kit. The shirt has a base color, a number you can read from the stands, and a thin trim stripe along the sleeve. On a muddy day the trim disappears completely. Nobody minds, because the referee never needed the trim to tell the players apart. The base and the number do that job. The trim is a pleasure, not a load-bearing wall. A kit designed so the trim carried the player's identity would fail the moment it rained.`,
          `Your invitation works the same way. A pale field and dark lettering organize the whole thing before any accent arrives. Reusing the one information color for the date and the address connects them without a legend. The accent then marks the seed drawing beside the title, while ordinary text stays consistent. Nothing says the three colors must each take a fixed share of the page. The accent can be tiny. The field can be almost everything.`,
          `You may have heard that complementary colors belong together. Complementary means opposite on a particular color wheel, and the pairing can help explain why a contrast feels strong. It does not prescribe equal areas, and it does not guarantee harmony. Different color models put the opposites in different places. A palette still needs a readable light-dark structure and a clear purpose for each contrast, whatever the wheel says.`,
        ],
      },
      {
        title: 'Remove the accent as a check',
        paragraphs: [
          `Try cream #F5EBDD for the field, dark green #243F35 for every essential word, and terracotta #C55A30 for the seed motif. Notice what the terracotta is not doing. It is not coloring the tiny address text, however attractive it looks on the palette. Whether it could carry small text is a separate question, with its own contrast and size check. For now it has one job: the seed.`,
          `Now run the mud test. Put your thumb over the seed motif. Can you still tell what the event is, when it happens, and where? If yes, the structure is sound, and the accent is a genuine extra. If no, something essential was leaning on the accent, and you repair that first: move the information, darken it, or make it bigger. Only when the invitation works without the terracotta do you let the terracotta back in.`,
          `This is not a rule against colorful work. You can use five colors if five colors each have a job. The test just tells you the difference between a color that supports a layout and a color that is hiding a weak one.`,
        ],
      },
      {
        title: 'When the accent is quietly doing the real work',
        paragraphs: [
          `The common failure is letting the accent carry information by accident. The date ends up in terracotta because it looked lively, and now a reader who cannot see that red well, or a photocopy in black and white, loses the date. The accent was the trim, and you hung the player's number on it. The fix is never a fourth color. It is giving the date back to the information color and letting position or size do the emphasis.`,
          `The opposite failure is treating the count as the goal. Cutting a leaflet from five colors to three while leaving every role and placement unchanged does not fix anything. The competition between the price and the product name is a hierarchy problem, and hierarchy is about jobs, not totals.`,
          `Two habits. Before choosing any color, write the job it will do, and refuse colors that arrive without one. And before you call the design finished, cover the accent and read the piece as if it were a muddy shirt, repairing anything that vanished.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'A role-based seed-swap palette',
        alt: 'Cream is assigned to the paper field, dark green to essential information, and terracotta to a seed motif.',
        caption: `Read the job under each chip first, then imagine covering the terracotta one. The chips show roles, not area percentages or approved text-contrast pairs. Nothing essential should depend on the motif color.`,
        items: [
          { label: 'Reading field', detail: '#F5EBDD: cream behind the message.', color: '#F5EBDD' },
          { label: 'Essential words', detail: '#243F35: event, date, address.', color: '#243F35' },
          { label: 'Optional seed motif', detail: '#C55A30: an accent, not the only cue.', color: '#C55A30' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Scrap paper', 'Pencil', 'Optional colored pencils already available'],
      steps: [
        `Fold a piece of paper into a small invitation. Write Seed swap, Saturday at 11, and Community room as fictional details, so you have real information to protect.`,
        `Assign one field and one essential-text color, using pencil values or written color labels. Keep every practical detail in the information color, because that is the color that must survive the mud.`,
        `Add a small seed motif in a third color, or outline it and write accent beside it if you only have pencil. Give it that one job and nothing else.`,
        `Cover the motif with your thumb and read the invitation cold. Fix any lost event, time, or place by moving or darkening information, and only then decide whether the accent earns its place.`,
      ],
      notice: `The essential message survives without the third color, and every color you kept can state its job in a few words. The invitation also feels calmer, because the reader is no longer being asked to work out which of five colors matters.`,
      troubleshooting: `If covering the motif makes the invitation confusing, resist the urge to add a fourth color to patch the gap. Something essential was riding on the accent. Move it, darken it, or enlarge it inside the information color, then cover the motif again and check that the problem is gone.`,
    },
    recall: {
      prompt: 'A walking-club map uses orange only for the meeting point. What must remain understandable if orange is unavailable?',
      answer: `The meeting point needs a label or a distinct symbol with usable light-dark separation, so a reader can find it with the orange gone, like a player's number still readable when the trim is covered in mud. The orange can reinforce the spot, but it must not be the only way to locate it, or a black-and-white printout loses the one thing the map is for.`,
      hint: 'Separate decorative emphasis from information that someone must recover.',
    },
    quiz: {
      question: 'A bakery leaflet uses five colors but the price and product name compete. What is the most useful simplification?',
      options: ['Assign consistent information roles and reserve contrast for the needed distinction', 'Choose three colors but leave every placement and role unchanged', 'Give complementary colors equal areas throughout the leaflet'],
      correctIndex: 0,
      explanation: `Giving each color a job and spending contrast only where the price and name need to separate addresses the actual competition. Cutting the count to three while leaving roles and placement alone is changing the shirt without fixing the number. Complementary colors do not call for equal areas, so that rule would not touch the hierarchy problem.`,
    },
    takeaway: 'Limit the decisions by role, then check that the accent supports an already readable arrangement.',
    sourceNote: 'The inherited Tate references support value and complementary-color vocabulary. This palette is a design exercise, not a universal harmony formula.',
  },
  {
    id: 'design-006',
    title: 'A screen yellow is not a paint recipe',
    outcome: `Explain why combining colored light and mixing colored pigments need different predictions, and name which process is in play before guessing a result.`,
    scene: 'A lantern-fair ticket is planned both as a phone image and as a small painted sign.',
    sections: [
      {
        title: 'The same color names, different materials',
        paragraphs: [
          `You have designed a ticket for a lantern fair on your phone. It has a bright yellow lantern on a dark blue sky. Now you want to paint a small matching sign for the gate. A friend who remembers a science lesson says red plus green makes yellow, so you squeeze out red and green paint and mix them. You get a dull brown. The friend was not lying. The screen really does make that yellow from red and green. The paint simply is not doing the same thing.`,
          `This matters beyond one sign. People lose hours trying to match a glowing phone image with paint or ink, and they blame their skill. The problem is upstream. Before you predict what two colors will make, you have to say what is being combined: light that a screen emits, layers of ink on a printer, or particular paints on paper. The color names red and green do not tell you which process you are in, and the process decides the result.`,
        ],
      },
      {
        title: 'Emission adds; pigments absorb',
        paragraphs: [
          `Picture two spotlights on a stage, one red and one green, aimed at the same patch of floor. Where the beams overlap, the floor is yellow. Each lamp adds its light to the patch, and the eye reads the sum. Now picture a different experiment. Put on a pair of red sunglasses, then put a pair of green sunglasses on top. The world does not turn yellow. It turns dark and murky. Each lens takes light away, and two lenses take away more than one.`,
          `A screen is the spotlights. It uses red, green, and blue light components, shortened to RGB. Combining a suitable red emission and green emission gives yellow. Add the blue component at the display's balanced white setting and you get white. In the simple full-strength codes, #FF0000 plus #00FF00 corresponds to #FFFF00, and all three channels at full value give #FFFFFF. This describes how a display adds light. It is not a rule for averaging color codes, and it says nothing about stacking translucent layers in a drawing app.`,
          `Paint is the sunglasses. A pigment absorbs some of the light that falls on it and returns the rest. Mix two pigments and you have two absorbers at work, so less light survives, and what survives depends on exactly what each pigment removed. Many red and green paint pairs land somewhere muted or earthy. But the actual result depends on the specific pigments, their proportions, the binder, the surface, and the light in the room.`,
        ],
      },
      {
        title: 'Test the material, not the slogan',
        paragraphs: [
          `The second diagram shows a red stand-in, #B44132, a green stand-in, #43694A, and a possible result, #6A5542, a muted brown. Read the word possible carefully. These are screen chips imitating paint. The brown is the kind of outcome you might get, not a measured prediction for these or any real paints. A different red or a different green could give a different mix.`,
          `Printing adds a third process. Most printers lay down cyan, magenta, yellow, and black inks. That is another absorbing system, closer to the sunglasses than the spotlights. So a printed ticket will not glow like the phone, and no setting will make it.`,
          `For the sign, keep the two worlds apart on purpose. The phone design is the phone design. For the paint, mix a small test patch on the actual paper you will use and label which paints went in. If you have no paint, a written diagram with a light column and a pigment column is enough to lock in the distinction. You do not need bulbs, special inks, or paid software.`,
        ],
      },
      {
        title: 'Where the shortcut misleads',
        paragraphs: [
          `The first trap is treating hex codes as a recipe. Averaging #FF0000 and #00FF00 gives a number, but that number is a screen color, not a quantity of paint. The second trap is reading a drawing app as proof about the hardware. If an app blends red and green into brown, it may be simulating pigment or using its own blending rule. The screen still shows that brown by adding red, green, and blue light. The software calculation and the display process are two different layers.`,
          `The third trap is the opposite assumption, that paint always goes brown. Some pairs mix surprisingly clean. If your test patch comes out bright, that is a true result about those materials. The lesson is that the outcome depends on the material, not that every mixture is muddy.`,
          `Two habits. Before predicting any color mixture, say out loud whether you are adding light or stacking absorbers. And when paint or ink is involved, test a small patch on the real surface and trust the patch over any slogan.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Full-channel RGB examples',
        alt: 'Red, green, and blue component swatches are followed by yellow, white, and black output examples.',
        caption: `Look at the three component chips first, then at the three results they add up to: red plus green gives yellow, and all three give white. These are idealized display codes. Black means a zero RGB code, not necessarily zero real display emission.`,
        items: [
          { label: 'Red', detail: '#FF0000', color: '#FF0000' },
          { label: 'Green', detail: '#00FF00', color: '#00FF00' },
          { label: 'Blue', detail: '#0000FF', color: '#0000FF' },
          { label: 'Red + green', detail: '#FFFF00: yellow.', color: '#FFFF00' },
          { label: 'All three', detail: '#FFFFFF: display white.', color: '#FFFFFF' },
          { label: 'Zero channels', detail: '#000000: display black.', color: '#000000' },
        ],
      },
      {
        type: 'swatches',
        title: 'A possible pigment outcome',
        alt: 'Paint-like red and green chips sit beside an illustrative muted brown, rather than display yellow.',
        caption: `Compare the brown here with the yellow in the diagram above; same color names going in, different process. These are screen stand-ins only. The brown is a possible kind of result, not a measured recipe for these or any paints.`,
        items: [
          { label: 'Red stand-in', detail: '#B44132', color: '#B44132' },
          { label: 'Green stand-in', detail: '#43694A', color: '#43694A' },
          { label: 'Possible muted mix', detail: '#6A5542', color: '#6A5542' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Pencil and paper', 'Optional paints you already own'],
      steps: [
        `Draw two columns and label them emitted light and pigment. Write red plus green at the top of each, so the same question sits over two different processes.`,
        `In the light column, write yellow for a suitable additive mixture and sketch two beams meeting on a floor. The sketch reminds you that each source adds to the patch.`,
        `In the pigment column, write depends on materials. If you own paints, mix a tiny patch on the paper you would really use and write down which paints went in, because the result belongs to those paints only.`,
        `Add one sentence explaining why the phone ticket cannot hand you an exact paint recipe. If you have no paint, do not invent a result; leave the pigment outcome as an open question.`,
      ],
      notice: `Your two predictions no longer contradict each other. One describes spotlights adding light and the other describes absorbers removing it, so yellow on the screen and brown on the palette are both correct answers to two different questions.`,
      troubleshooting: `If your paint trial comes out unexpectedly bright or clean, record exactly that. The lesson is that the outcome depends on the materials, not that every mixture must be brown. A clean result from your particular paints is real evidence, and it still does not transfer to a different red or green.`,
    },
    recall: {
      prompt: 'A drawing app blends red and green into brown. Does that prove the phone stopped using RGB light?',
      answer: `No. The app can simulate pigment behavior or use any blending rule it likes, then hand the resulting brown to the screen, which shows it by adding red, green, and blue light as always. The software is deciding what color to show, and the hardware is the spotlights that show it. Two layers, two processes.`,
      hint: 'Separate the software calculation from the way the screen produces its result.',
    },
    quiz: {
      question: 'Which instruction is justified when transferring the ticket to paint?',
      options: ['Average the red and green hex codes to obtain the exact paint mixture', 'Test the available pigments on the intended surface', 'Use equal paint amounts because full RGB channels make yellow'],
      correctIndex: 1,
      explanation: `Only a real test patch tells you what these absorbers do on this surface, because paint is the stacked sunglasses and not the spotlights. Averaging hex codes produces a screen color, not a quantity of pigment. Equal amounts because of full RGB channels borrows a rule about adding light and applies it to a process that removes light.`,
    },
    takeaway: 'Identify light, ink, or pigment before predicting a mixture.',
    sourceNote: 'Exploratorium Colored Shadows was checked for additive mixtures. Adobe supplies color-mode context. No external illustration or pigment measurement is reproduced.',
  },
  {
    id: 'design-007',
    title: 'Check the viewing conditions before cooling the scan',
    outcome: `Rule out a display or lighting change before saving a compensating color edit into an image, by holding the file still and testing the viewing chain first.`,
    scene: 'A phone scan of a hand-drawn walking map looks yellow when opened late in the evening.',
    sections: [
      {
        title: 'The map seems to have changed overnight',
        paragraphs: [
          `In the afternoon you photographed a pencil walking map you had drawn for friends. The paper looked white in the photo. Now it is late evening, you open the same photo on the same phone, and the paper is distinctly yellow. Your thumb is already on the warmth slider, ready to pull it towards blue until the paper looks white again. It would take ten seconds. Then you would save the file and send it.`,
          `Here is why that is risky. The photo may not have changed at all. Many phones switch to a warmer display in the evening on a schedule, and that makes the whole screen yellowish, your photo included. If you save a blue correction into the map, you have mixed two different things together: what is in the file, and the conditions under which you are looking at it. Tomorrow at noon the map will be blue, and your friends will see a blue map in daylight. Inspect the view before you alter the file.`,
        ],
      },
      {
        title: 'The screen and room contribute to appearance',
        paragraphs: [
          `Imagine putting on yellow-tinted sunglasses and deciding the living-room wall has gone yellow. You fetch a tin of paint with a touch of blue in it and repaint the wall until it looks white through the lenses. Then you take the sunglasses off. The wall is blue, and it will stay blue. Nobody would do that with a wall, because everyone knows sunglasses sit between the eye and the wall. A display's evening mode is a pair of sunglasses you did not notice putting on.`,
          `A display turns stored color values into light. Brightness, scheduled warmth, reflections on the glass, and the light in the room all change that light or your judgment of it. Your eyes adapt too. A comparison made right after staring at a warm lamp is not the same as one made after looking at a neutral page. And none of this tells you whether the camera recorded the paper accurately in the first place. That is a separate question for a separate test.`,
          `The first goal is consistency, not perfection. Compare on the same screen, at a steady comfortable brightness, in similar room light. A controlled comparison can isolate one change without turning an ordinary phone into a calibrated reference monitor, which it is not and does not need to be.`,
        ],
      },
      {
        title: 'Change the view, then restore the preference',
        paragraphs: [
          `In this example the map file contains pale paper, #E8E5DD, and pencil marks, #424242. The warmer-looking chips, #E8D4AC and #494236, illustrate how those same stored colors might appear through an evening display setting. They are stand-ins for an appearance, not new values written into the photo. The file still says #E8E5DD.`,
          `So take the sunglasses off. Find the warmth or night setting and turn it off once, keeping brightness where it was. If the whole screen cools and the paper goes back to white while the file is untouched, you have found your cause. Write it down as a viewing condition to control. Then turn the setting back on if you prefer it in the evening. There is no need to live with an uncomfortable display for the sake of an exercise.`,
          `If the paper still looks yellow with the setting off, now you have a different question. Look at the capture: the afternoon lamp, the paper itself, the camera's own white balance. One more caution. A screenshot is not a reliable record of display warmth, because that adjustment often happens after the screenshot data is captured. The screenshot can look white while the screen looked yellow.`,
        ],
      },
      {
        title: 'When an edit is justified and when it is not',
        paragraphs: [
          `The core mistake is compensating for the wrong cause. Every correction you save into a file is a claim that the file was wrong. If the file was fine and the view was warm, the correction is a new error that follows the image everywhere. The same trap appears with two phones: the invitation looks dull on an old one and vivid on a new one, and you boost saturation. Different displays do not show that the file needs changing. They show that displays differ.`,
          `The opposite mistake is refusing ever to edit. Sometimes the capture really was yellow, because the afternoon lamp was warm or the paper was cream. Then a correction is right. The point is the order. View first, file second, and only once the view is steady.`,
          `Two habits. When a color seems to have changed, ask what sits between your eye and the file before you ask what is wrong with the file. And when you test, change one link in the viewing chain, note what happened, and put it back before deciding anything about the image.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Stored colors and a warmer-looking view',
        alt: 'Pale paper and dark pencil chips are paired with illustrative warmer-looking counterparts.',
        caption: `Look at each stored chip first, then at the warmer chip beside it, and remember that the file still contains the stored value. The warm chips are explanatory stand-ins, not a measured phone transform. The map values need not change when display warmth changes.`,
        items: [
          { label: 'Paper in file', detail: '#E8E5DD: stored example color.', color: '#E8E5DD' },
          { label: 'Warmer paper view', detail: '#E8D4AC: illustrative appearance only.', color: '#E8D4AC' },
          { label: 'Pencil in file', detail: '#424242: stored example color.', color: '#424242' },
          { label: 'Warmer pencil view', detail: '#494236: illustrative appearance only.', color: '#494236' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['An unchanged photo and a phone, or plain paper', 'A brief note'],
      steps: [
        `Open one photo without entering its editor. Note the room light and the current display warmth setting if your phone shows one, because these are the sunglasses you need to know about.`,
        `If you are comfortable doing so, toggle that setting once while keeping brightness steady. If not, carry a plain sheet of paper between two room lights you already have. Either way you change one link in the chain.`,
        `Record what changed and what stayed fixed. Note that the paper version changes the light on the object, while the phone version changes the display; both are viewing changes, and neither touches a file.`,
        `Restore your original viewing preference. Then write one line saying whether the observation justifies editing the file yet. Do not save a correction during this exercise.`,
      ],
      notice: `Your note now separates a viewing change from a change to the photographed or drawn material, which is the distinction the warmth slider would have erased. You also know where your phone's sunglasses live, so the next evening surprise takes seconds to diagnose.`,
      troubleshooting: `If automatic brightness keeps shifting while you compare, the display is changing on its own and you cannot hold the chain steady. Switch to the plain paper version under two room lights instead. A stable observation matters more than finding a particular menu, and the paper teaches the same point.`,
    },
    recall: {
      prompt: 'The same invitation looks dull on an older phone and vivid on a newer one. What would you check before increasing its saturation?',
      answer: `Check that both phones have the same file open, then compare their display settings and the light each is viewed in. Two different displays are two different pairs of sunglasses, and a difference between them does not show that the file is wrong. Boosting saturation would be repainting the wall to suit one pair of lenses.`,
      hint: 'Which parts of the viewing chain changed?',
    },
    quiz: {
      question: 'An unchanged photo turns warmer exactly when a scheduled display mode starts. Which first action preserves a useful comparison?',
      options: ['Save a cooler photo copy immediately', 'Compare the mode on and off without editing the photo', 'Raise saturation to restore the earlier impression'],
      correctIndex: 1,
      explanation: `Toggling the mode with the file untouched tests the one link that just changed, like taking the sunglasses off to look at the wall. Saving a cooler copy or raising saturation writes a compensation into the file before you know the cause, and the timing already points at the display rather than the photo.`,
    },
    takeaway: 'Stabilize the viewing chain before baking a correction into the image.',
    sourceNote: 'Adobe and Blackmagic Design discuss color-management context. This phone comparison is not calibration, and the warm-view chips are not measured display outputs.',
  },
  {
    id: 'design-008',
    title: 'Make a usable baseline before choosing the look',
    outcome: `Treat fixing an accidental color problem and choosing a deliberate look as two separate decisions, each with its own reason, and keep the corrected baseline so the look can be rejected later.`,
    scene: 'A short-film waiting-room still has an accidental green cast before an intended evening treatment.',
    sections: [
      {
        title: 'The filter hides the wrong problem',
        paragraphs: [
          `You are editing a still from your short film. It shows an empty waiting room with a paper timetable on the wall. On set, the timetable was plain white under the main light. In the still, it is faintly green. You also know what you want the finished scene to feel like: late evening, warm and tired. So you scroll through the filters, find a warm one, and apply it. The green seems to vanish. Job done.`,
          `Except you now have no idea which change did what. Did the warm filter fix the green, or just bury it under orange? If the director later says the evening look is too much, you will pull the filter off and the green will be back, with no record of how to fix it alone. Two decisions got welded into one slider. Keep a copy of the original, and give each decision its own reason and its own step.`,
        ],
      },
      {
        title: 'Correction and grading answer different questions',
        paragraphs: [
          `Think of buying a pair of trousers that are too long. The first job is the hem. That is a repair against a clear standard: the trousers should sit at your shoe, and they do not. The second job is choosing a belt and shoes to go with them. That is taste, with no single right answer. Nobody hems trousers by picking a belt, and nobody keeps re-hemming every time they change shoes. You hem once, keep the hemmed trousers, and then try as many belts as you like.`,
          `Color correction is the hem. It addresses a problem relative to an intended baseline: an accidental cast, an exposure mismatch, or footage interpreted the wrong way on import. A creative grade is the belt. It chooses a deliberate appearance, such as quieter saturation or warmer highlights. The line between them is a working distinction, not a law that every picture must start perfectly neutral. If a lamp in the scene was meant to be green, the green stays. The timetable was not meant to be green, so that goes.`,
          `One more term, because it causes real damage. Some cameras record log footage, which stores tones in a flat way designed for editing rather than for immediate viewing. It needs the right input interpretation and display transform before anything looks normal. A LUT, or lookup table, is a file that maps input values to output values. A LUT built for one kind of footage, applied to another, is a hem pattern cut for someone else's legs. It distorts rather than fixes.`,
        ],
      },
      {
        title: 'Keep three versions with named purposes',
        paragraphs: [
          `The timetable chips show the idea. The starting patch is a greenish #B6C8B7. The corrected baseline is a neutral #C4C4C4, which is what the timetable was meant to be. The evening look is a warmer #D1C4AF, a deliberate step away from neutral for the scene's mood. These are chosen teaching colors, not pixels measured from footage.`,
          `Work it in that order. Duplicate the original and leave it alone. On the first copy, remove the green cast and stop; that is the hem. Save it as the baseline. On a second copy made from the baseline, apply the warm treatment; that is the belt. Now compare all three against each other. Does the timetable stay readable in the evening version? Has the bench picked up an orange it was never meant to have? If the look fails, you throw away one copy and the baseline is still there.`,
          `Do this first on an ordinary phone photo of your own, not on unfamiliar log or HDR material. The method is the same and the pitfalls are fewer.`,
        ],
      },
      {
        title: 'Where the two steps get confused',
        paragraphs: [
          `The first confusion is calling a look a correction. Amber in the chosen evening version is not proof that the neutral baseline was wrong. It is a taste decision stacked on top of a repair, and the baseline is what lets you judge it. The second confusion runs the other way: treating a flat import as a mood problem. A sunset clip that looks washed out may simply be log footage waiting for its proper interpretation. Reaching for a cinematic preset before you know the recording format is choosing a belt for trousers you have not yet tried on.`,
          `A third trap is manufacturing an error. If the original has no cast and no exposure problem, there is nothing to correct, and the original is the baseline. Do not invent a fault to make the exercise feel complete.`,
          `Two habits. Before touching a control, write one sentence naming the problem you are fixing, or admit there is none. And save the corrected version under its own name before you try any look, so rejecting the look never costs you the repair.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'One timetable patch, three intentions',
        alt: 'A greenish patch becomes neutral in the correction example and warmer in the separate creative treatment.',
        caption: `Look at the middle chip first; that is the baseline the other two are judged against. The left chip is the accident, the right chip is the choice. These are illustrative timetable colors, not a tested transform.`,
        items: [
          { label: 'Unwanted cast', detail: '#B6C8B7: greenish starting patch.', color: '#B6C8B7' },
          { label: 'Corrected baseline', detail: '#C4C4C4: intended neutral reference.', color: '#C4C4C4' },
          { label: 'Evening look', detail: '#D1C4AF: deliberate warm treatment.', color: '#D1C4AF' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Your own ordinary photo and an existing editor, or pencil and paper', 'A way to keep the original'],
      steps: [
        `Choose a photo that is not private and has something in it that should look neutral, like white paper or a gray wall. Duplicate it, then write one specific problem before touching any control; if you cannot name one, note that too.`,
        `Make one modest correction on the copy and stop. Save it as the baseline, because this is the hem you will not want to redo. On paper, draw the original and corrected swatches side by side instead.`,
        `On a fresh copy made from the baseline, try one creative change, or sketch its intended palette separately. Write the artistic reason, so the look has a purpose and not just a slider position.`,
        `Compare all three versions. Write which detail must survive both edits and whether the look introduced a new problem, such as a neutral object picking up color it should not have.`,
      ],
      notice: `You now hold an original, a baseline, and a look, each with a one-line reason. If someone dislikes the look, you can drop it and the repair is still there, which is exactly what a single unexplained filter could never give you.`,
      troubleshooting: `If the original has no cast or exposure fault, do not invent one. The original is the baseline, and you move straight to the creative copy. The method still works, and you have learned the more important lesson, which is to check whether a correction is needed before making one.`,
    },
    recall: {
      prompt: 'A sunset clip looks flat after import, and its recording format is unknown. What must you establish before judging a cinematic preset?',
      answer: `Find out the recording color space and transfer encoding, then apply the intended interpretation and display path, because flat footage is often log waiting for its proper transform rather than a mood problem. A preset is a belt chosen for a particular pair of trousers; until the clip is interpreted correctly you do not know what it actually looks like, so you cannot judge the look on top of it.`,
      hint: 'A preset expects a particular kind of input.',
    },
    quiz: {
      question: 'The timetable is neutral in the baseline but amber in the chosen evening version. What best describes that second change?',
      options: ['A deliberate creative treatment that should still be checked in context', 'A correction proving that the neutral baseline was an error', 'An input transform required by the camera recording'],
      correctIndex: 0,
      explanation: `The amber is the belt, a taste decision made on top of a finished repair, and the preserved baseline is what lets you check it against the scene. It does not show the neutral baseline was wrong, any more than choosing brown shoes proves the hem was at the wrong height. And it is not an input transform, which belongs to how the footage was recorded, not to the mood you want.`,
    },
    takeaway: 'Separate fixing an unintended problem from choosing an intended appearance.',
    sourceNote: 'Blackmagic Design training supplies the workflow concepts. The still, colors, and exercise are original; no LUT or universal camera transform is supplied.',
  },
  {
    id: 'design-009',
    title: 'Use the waveform for position and the histogram for counts',
    outcome: `Pick a scope by asking what its horizontal axis and its height actually mean, so you read position from a waveform and counts from a histogram instead of trying to fill either graph.`,
    scene: 'A laundrette storyboard has six dark wall blocks on the left and two bright window blocks on the right.',
    sections: [
      {
        title: 'Where is the bright patch?',
        paragraphs: [
          `You are storyboarding a laundrette scene. To keep it simple, draw the frame as eight equal vertical blocks. The six on the left are a dark wall. The two on the right are a bright window. Now you open the editing software and it offers you a row of graphs: waveform, histogram, parade, vectorscope. You want to answer one question. Where in the frame is the bright part? One of those graphs can tell you. One of them cannot, no matter how long you stare at it.`,
          `This matters because people pick a scope by habit and then try to make it look right. They stretch the image until the histogram fills its box, or they flatten it until the waveform looks tidy. Neither action answers a question about the picture. A scope is a graph of image information, and the way to choose one is the way you would choose any graph. Ask what the horizontal position means and what the height means. Then ask whether those two things are what you want to know.`,
        ],
      },
      {
        title: 'Two graphs keep different information',
        paragraphs: [
          `Imagine walking down a street with a noise meter, writing down the reading every few steps. At the end you have a chart: left to right is where you were on the street, and height is how loud it was there. You can see exactly where the noisy building is. What you cannot see is which floor the noise came from, because the vertical axis of your chart is loudness, not height above the pavement. Now imagine a different record: a tally of how many minutes were loud and how many were quiet. That tells you the proportions. It tells you nothing about where you were standing.`,
          `The luma waveform is the noise meter walk. Horizontally it keeps the image's left-to-right position. Vertically it plots tonal signal level, how bright the signal is. In the eight-block frame, the left region makes a low trace and the right region makes a high trace. So you can see the brightness is on the right. What you cannot see is whether the window is at the top or the bottom of the frame, because several rows of the image stack into the same horizontal position and their original heights are gone.`,
          `The histogram is the tally. It sorts every bit of image area into bins by tone and counts how much area lands in each bin. Here, six of eight blocks are dark and two are bright: 75 percent and 25 percent. Slide the two bright blocks to the left side of the frame and the histogram does not move at all. Same counts, different picture. Location was never in the graph.`,
        ],
      },
      {
        title: 'Read the signal context too',
        paragraphs: [
          `The diagram uses a low position and a high position to make the idea visible. They are schematic. They are not measured IRE values, and they are not converted from the gray swatches. In real software the scale matters, so read it. Check whether you are working in standard dynamic range, SDR, or high dynamic range, HDR, because the same trace height means different things in each. And remember what the scene is. A laundrette at night does not have to fill the whole available range. Dark can be correct.`,
          `Other scopes answer other questions. An RGB parade splits the waveform into separate red, green, and blue traces so you can compare channels. A vectorscope shows hue and saturation relationships, with no position information at all. Each is a different chart of the same street.`,
          `None of them tells you which object matters. The graph does not know that the window is the point of the shot, or that the wall detail is what the director cares about. Look at the picture, decide what needs attention, and only then pick the graph that can answer that question.`,
        ],
      },
      {
        title: 'When the graph is being asked the wrong question',
        paragraphs: [
          `The most common mistake is reading absence as a fault. An empty region at the right of the histogram means no bright areas, which is exactly what a dim interior should show. Stretching the image to fill the gap is painting the room brighter because a chart had white space in it. The second mistake is reading a match as proof. Two frames with identical histograms can have the bright patch on opposite sides. The tally cannot tell them apart, and it was never supposed to.`,
          `A subtler mistake is asking the waveform about vertical position. It feels like it should know, because it is a picture-shaped graph. It does not. Height on a waveform is signal level. If you need to know the sky is at the top, look at the frame.`,
          `Two habits. Before you open any scope, write the question you want answered in plain words, such as where is the bright part or how much of the frame is dark. And before you move a control to improve a graph, say which detail in the actual picture that move is meant to protect.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Horizontal location survives in a waveform',
        alt: 'A dark wall at the upper left corresponds to a low trace below; a bright window at the upper right corresponds to a higher trace.',
        caption: `Look at the two image regions along the top first, then follow each arrow down to its trace. Left stays left and right stays right; only the height changes, and that height is schematic signal level, not a measured swatch conversion.`,
        items: [
          { label: 'Left wall', detail: 'Six dark image blocks.', color: '#333333', x: 22, y: 18, shape: 'box' },
          { label: 'Right window', detail: 'Two bright image blocks.', color: '#CCCCCC', x: 78, y: 18, shape: 'screen' },
          { label: 'Low trace', detail: 'Left part of waveform.', x: 22, y: 82, shape: 'circle' },
          { label: 'High trace', detail: 'Right part of waveform.', x: 78, y: 54, shape: 'circle' },
        ],
        arrows: [{ from: 0, to: 2 }, { from: 1, to: 3 }],
      },
      {
        type: 'bars',
        title: 'The histogram keeps these counts',
        alt: 'Six equal-area blocks are dark and two are bright, regardless of where those blocks sit in the frame.',
        caption: `Read the two bar heights first: six and two, out of eight equal blocks. Then notice there is no left or right in this graph at all. An invented two-bin histogram like this cannot tell you whether the window is on the left or the right.`,
        unit: 'equal-area image blocks',
        items: [
          { label: 'Dark bin', detail: '6 of 8 blocks: 75 percent.', value: 6, color: '#333333' },
          { label: 'Bright bin', detail: '2 of 8 blocks: 25 percent.', value: 2, color: '#CCCCCC' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Pencil', 'Paper'],
      steps: [
        `Divide a frame into eight equal vertical blocks. Shade the left six dark and leave the right two pale, so you have a picture whose bright part has a definite position.`,
        `Below it, sketch a waveform: lower marks under the dark region, higher marks under the bright region. You are doing the noise-meter walk, keeping left-to-right as you go.`,
        `Make a separate two-bar histogram with counts of six and two, and label the unit as image blocks. This is the tally, and it should have no left or right in it.`,
        `In a second sketch, move the two pale blocks to the left. Redraw the waveform so it changes, and copy the histogram unchanged, because the counts did not move even though the picture did.`,
      ],
      notice: `The waveform shifts when the bright blocks move and the histogram stays exactly the same. You have just seen, in two pencil sketches, why one graph can answer where and the other can only answer how much.`,
      troubleshooting: `If you found yourself moving the histogram bars to the left along with the blocks, relabel its horizontal axis. Its bins are tones from dark to bright, not positions in the picture, so the bars can only grow or shrink; they never slide sideways because something in the frame did.`,
    },
    recall: {
      prompt: 'A bright sky spans the full width above a dark foreground. Can a luma waveform tell you that the sky is at the top?',
      answer: `No. The waveform will show high signal across the whole width and low signal across the whole width at the same horizontal positions, because it keeps left-to-right and replaces up-and-down with signal level. It is the noise meter that knows where on the street the sound was, but not which floor. To know the sky is at the top, look at the frame.`,
      hint: 'Horizontal image position survives; vertical image position is replaced by signal level.',
    },
    quiz: {
      question: 'Two frames have equal dark and bright areas but opposite left-right arrangements. Which result is possible?',
      options: ['Identical waveforms must prove identical layouts', 'A histogram identifies which side contains the window', 'Matching histograms but different waveform positions'],
      correctIndex: 2,
      explanation: `The histogram is a tally of how much area is dark and how much is bright, so equal areas give matching histograms whatever side the window is on. The waveform keeps horizontal position, so swapping sides moves its trace. That is why the third option is possible and the second is not, and why identical waveforms still cannot prove identical layouts, since vertical position is not in them either.`,
    },
    takeaway: 'Read the axes before asking a scope to answer a question.',
    sourceNote: 'Blackmagic Design supplies scope concepts. The eight-block frame and two-bin histogram are original simplifications, not instrument readings or mastering targets.',
  },
  {
    id: 'design-010',
    title: 'Choose which light your neutral sample represents',
    outcome: `Pick a believable neutral surface under the light that matters for the subject, correct for that, and leave regions lit differently alone instead of forcing every pale thing to be white.`,
    scene: 'A paper-folding tutorial is lit by a window while an amber desk lamp illuminates the background wall.',
    sections: [
      {
        title: 'One room contains two kinds of light',
        paragraphs: [
          `You are filming a paper-folding tutorial at a desk beside a window. Daylight falls on your hands and the sheet of paper. Behind you, a desk lamp throws warm light onto the wall, and in the recording that wall is distinctly amber. The paper itself has come out slightly green. You open the white balance controls and start nudging until the paper looks white. Then you notice the wall is still amber, so you keep nudging to fix that too. Now the paper has gone blue.`,
          `The room really does contain two kinds of light. The window is cool daylight; the lamp is warm. A camera can only be told one story about what white means, and if you try to make both regions white you will satisfy neither. So the first decision is not a slider. It is a question. Which light matters for the subject? Here it is the window, because the paper is what viewers are watching. The lamp-lit wall is a different region with its own light. It is not a second failed white that has to match the first.`,
        ],
      },
      {
        title: 'What white balance changes',
        paragraphs: [
          `Think about a home thermostat. If you want the living room comfortable, the sensor goes in the living room. You would not put it in the kitchen while the oven is on, because then the heating would read the oven's warmth and leave the living room cold. And once the living room is right, you do not go and complain that the kitchen is warmer. The oven is meant to be warm. One sensor, one chosen room, and the other rooms are allowed to be themselves.`,
          `White balance is the thermostat sensor. You tell the software: this surface, under this light, should look neutral. It then shifts the color relationships of the whole image so that surface comes out gray or white in the final view. The temperature control mostly moves the balance along the blue-yellow line. The tint control mostly handles green-magenta. They are directions of travel for editing. They are not proof that whatever you pointed at was really neutral in the first place.`,
          `So choose the sensor carefully. A good neutral sample should be a surface that ought to be neutral, still has recorded detail rather than being blown out white, and sits in the same light as your subject. Plain household paper is a decent beginner's clue. It is not a calibrated neutral card. It can carry optical brighteners that lean blue, it can have its own slight tint, and it can be catching a different light from the one you think. Treat it as a hint and watch the consequences.`,
        ],
      },
      {
        title: 'Correct the sample, inspect the consequences',
        paragraphs: [
          `The swatches show the idea. The paper as recorded is a greenish #B8C8BA. The neutral target you want is #C4C4C4. The lamp-lit wall is an amber #D6B47C, and it is meant to be. Balancing for the paper means moving the first chip towards the second. It does not mean moving the wall towards gray. If the correction that fixes the paper leaves the wall amber, that is the correct result, not an unfinished one.`,
          `Make the change on a duplicate and keep it small. Then look at more than the paper. Check the folds nearby: has the paper kept its texture, or has a highlight gone flat? Check the wall: is it the warm it was on set, or has it slid into an odd orange? An RGB parade can help here, by showing you whether red, green, and blue sit level in the patch you chose as neutral. It does not ask the whole picture's red, green, and blue to match, and it should not, because the wall is supposed to be warm.`,
          `If the two lights overlap on the subject, one global adjustment may not satisfy both parts of it. That is useful to know before you fight the slider for an hour.`,
        ],
      },
      {
        title: 'When the pale object is not a reference',
        paragraphs: [
          `The first mistake is sensor in the wrong room: balancing from the amber wall, or from a white sign across the room under a colored lamp. The correction will be right for a region nobody is watching and wrong for the subject. The second mistake is using a blown-out patch. A reflection with no detail left has nothing in it to measure. It will steer the balance in whatever direction the clipping happens to lean.`,
          `The third mistake is treating every colored surface as an error. A gray jacket with daylight on one side and shop-sign light on the other is a neutral material reflecting two colored lights. That is physics, not a fault. Choose the side that matters, correct for it, and decide on purpose whether the other side should keep its color.`,
          `Two habits. Before touching white balance, say which light your subject is in and point at a neutral surface in that same light. And after the correction, inspect the regions you did not balance for, and ask whether their color is intended before you try to remove it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two separate illumination regions',
        alt: 'A window lights the folding paper on the left; an amber lamp lights the background wall on the right.',
        caption: `Follow the left arrow first, from the window down to the paper; that is the light you balance for. Then follow the right arrow and notice it is a separate light with a separate target. The layout is schematic, not measured beam coverage.`,
        items: [
          { label: 'Window', detail: 'Main subject light.', color: '#AFCDE5', x: 24, y: 22, shape: 'light' },
          { label: 'Folding paper', detail: 'Chosen neutral clue.', color: '#C4C4C4', x: 24, y: 76, shape: 'paper' },
          { label: 'Desk lamp', detail: 'Different background light.', color: '#E4B55F', x: 76, y: 22, shape: 'light' },
          { label: 'Background wall', detail: 'Amber is intentional here.', color: '#D6B47C', x: 76, y: 76, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 2, to: 3 }],
      },
      {
        type: 'swatches',
        title: 'Neutral paper is not an amber wall',
        alt: 'Greenish paper, a neutral paper target, and an intentionally amber wall are shown as three distinct samples.',
        caption: `Look at the first two chips as a before and after for the paper. The third chip is not a third stage; it is the wall, and it stays amber. These are illustrative samples only.`,
        items: [
          { label: 'Paper before', detail: '#B8C8BA', color: '#B8C8BA' },
          { label: 'Paper target', detail: '#C4C4C4', color: '#C4C4C4' },
          { label: 'Lamp-lit wall', detail: '#D6B47C', color: '#D6B47C' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Plain paper', 'Phone camera and existing editor, or pencil'],
      steps: [
        `Place a sheet of plain paper beside a colored household object under one existing light, keeping the paper away from bulbs and heat. The paper is your thermostat sensor, so it has to sit in the light you care about.`,
        `Photograph both so the paper still shows visible texture, or sketch the setup and label the shared light. Texture matters because a blown-out white has nothing left to measure.`,
        `On a duplicate, try a small warmth or tint change if your editor allows it. If not, compare the three supplied sample roles and say which one you would be moving towards which.`,
        `Write down which surface informed the adjustment and one reason it might be an imperfect neutral, such as brighteners or a slight tint. Keep the original untouched so you can compare.`,
      ],
      notice: `You can now name a sample and the light it sits in, which is a very different habit from demanding that every pale object in the frame become white. The colored object beside the paper kept its color, and that is the correct result.`,
      troubleshooting: `If the paper comes out as featureless white, it has clipped and cannot be used as evidence, like a thermostat sensor that has maxed out. Reduce the capture exposure and shoot again until the paper shows grain or texture. Do not balance from the blown-out version, however white it looks.`,
    },
    recall: {
      prompt: 'A gray jacket receives daylight on one side and colored shop-sign light on the other. Should one global white-balance setting neutralize both?',
      answer: `Not necessarily. The two sides are in two different lights, like a living room and a kitchen with the oven on, and one sensor cannot serve both. Choose the light that matters for the shot, balance for a neutral patch in that light, and then decide on purpose whether the sign-lit side should keep its color. A neutral material reflecting colored light is not an error to erase.`,
      hint: 'A neutral material can reflect colored light.',
    },
    quiz: {
      question: 'Which sample best supports checking an unwanted cast on a window-lit sketchbook?',
      options: ['An unclipped neutral-looking paper margin under that same window light', 'A bright reflection with no remaining detail', 'A white sign across the room under a colored lamp'],
      correctIndex: 0,
      explanation: `The paper margin is the sensor in the right room: it shares the window light with the subject and still has detail to measure. The clipped reflection has nothing left in it to read, and the sign across the room is sitting in a different light entirely, so balancing from it would fix the wrong region. Even the margin is a household clue rather than a calibrated reference, so check the consequences.`,
    },
    takeaway: 'Balance a credible neutral under a chosen light, not every colored region in the frame.',
    sourceNote: 'Blackmagic Design supports white-balance and scope concepts. The household-paper trial is not calibration, and the diagrams do not predict a real mixed-light correction.',
  },
  {
    id: 'design-011',
    title: 'Keep the folds, not a perfectly full tonal graph',
    outcome: `Tell the difference between detail the camera actually recorded and a tone change made in editing, and judge tonal contrast on its own without confusing it with sharpness.`,
    scene: 'A folded concert program is photographed near a bright window with a dark cloth behind it.',
    sections: [
      {
        title: 'The white paper has become a blank patch',
        paragraphs: [
          `You are photographing a folded concert program for a small archive. It sits on dark cloth near a bright window. You take two shots. In the first, the folds of the paper are clear, but the cloth behind it is nearly black. In the second, the cloth shows its weave, but the program has turned into a flat white rectangle. The folds are gone. You open the second shot in an editor and pull the exposure down, expecting the folds to reappear as the white dims. The patch turns gray. It is still a patch.`,
          `This is the moment people start blaming the editor, or themselves. Neither is at fault. The camera's exposure at the moment of capture decided how much information was recorded. The editor's exposure slider only changes the values that were recorded. If the folds were never written into the file, no slider can read them back out. What you wanted was the program's structure, and structure is information. A bright average is not.`,
        ],
      },
      {
        title: 'A darker blank is still blank',
        paragraphs: [
          `Think of a singer recorded too close to the microphone. On the loud notes the microphone overloads, and what gets saved is a flat buzz where the note should be. Later you turn the playback volume down. Now you have a quieter buzz. The shape of the note is still missing, because it was never captured. Turning the volume down changes how loud the recording plays. It cannot add back a sound that was never stored.`,
          `The picture version is called clipping. When brightness values hit the recording or processing limit, the differences between them are lost. A clipped highlight is the buzz. Lowering it gives you a gray buzz, which is why the program patch went gray without growing folds. Shadows have a matching problem at the other end. Brightening a very dark region often pulls up noise rather than texture, the way turning up a faint recording brings up hiss rather than words.`,
          `Two cautions keep this honest. First, bright does not automatically mean clipped. Some file formats keep highlight information beyond what a quick preview shows, so look at the source and the workflow before you declare detail lost. Second, not every bright patch needs saving. A small reflection on a glossy cover can be legitimately featureless. The fold that explains the program's shape is the thing worth protecting, and that is a decision you make by looking at the subject.`,
        ],
      },
      {
        title: 'Contrast is not edge sharpness',
        paragraphs: [
          `A separate confusion hides in the word contrast. Tonal contrast is the distance between the light areas and the dark areas. In the swatches, the soft pair uses #666666 and #AAAAAA, two middle grays that are not far apart. The hard pair uses #222222 and #DDDDDD, a deep gray and a pale one, much further apart. Those endpoints are chosen to show smaller and larger separation. They are not a recommended ratio.`,
          `Back to the singer. How far apart the loud and quiet passages sit is the dynamic range of the recording. How crisp the consonants sound is a different quality altogether. You can have a wide dynamic range with mushy diction, or a narrow range with every consonant clear. In pictures, soft contrast does not mean blurred edges, and hard contrast does not mean every edge needs sharpening. They are two controls for two different things.`,
          `So work in order. First compare your captures for surviving fold detail and keep the one that has it. Then choose a tonal treatment that suits the light you actually had. A shaded interior can stay dark. A program by a window can keep soft contrast if that is how the scene felt. And keep the original file, because a contrast choice made later should never be mistaken for evidence about what the camera recorded.`,
        ],
      },
      {
        title: 'When the graph is not the goal',
        paragraphs: [
          `The first mistake is filling the histogram. The graph has empty space at one end, so you stretch the tones until it is full. Now a quiet night street has brightened shadows full of noise, and the illuminated shop name that was already perfectly clear has gained nothing. The empty space was correct. It described a scene that really was dark.`,
          `The second mistake is reaching for sharpening to fix clipping. Sharpening works on edges that exist in the file. In a flat patch there are no edges to sharpen, so you get a crisper-looking patch, not folds. It is turning up the treble on the buzz.`,
          `Two habits. Before you edit a bright or dark area, check whether the source still holds differences there, and name the detail you are trying to protect. And when you adjust contrast, say whether you are changing tonal distance or edge definition, because they are different jobs with different tools.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Lowering a patch does not invent a fold',
        alt: 'A featureless white patch and a darker featureless gray patch contain the same absence of fold detail.',
        caption: `Look for a fold in the left patch, then in the right one. There is none in either, because the right patch is just the left patch turned down. This is a schematic case where the source has no differences left; it is not proof that every bright preview is unrecoverable.`,
        items: [
          { label: 'Blank source patch', detail: '#FFFFFF: no fold difference retained in this example.', color: '#FFFFFF' },
          { label: 'Lowered blank patch', detail: '#BBBBBB: darker, still no fold difference.', color: '#BBBBBB' },
        ],
      },
      {
        type: 'swatches',
        title: 'Soft and hard tonal separation',
        alt: 'Two middle grays show softer contrast; a dark gray and pale gray show harder contrast.',
        caption: `Compare the first two chips as a pair, then the last two as a pair, and notice how much further apart the second pair sits. That distance is tonal contrast. It has nothing to do with blur, edge width, or any ideal ratio.`,
        items: [
          { label: 'Soft: dark area', detail: '#666666', color: '#666666' },
          { label: 'Soft: light area', detail: '#AAAAAA', color: '#AAAAAA' },
          { label: 'Hard: dark area', detail: '#222222', color: '#222222' },
          { label: 'Hard: light area', detail: '#DDDDDD', color: '#DDDDDD' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Folded scrap paper', 'Phone camera, or pencil and paper'],
      steps: [
        `Place a folded sheet under ordinary daylight with something darker behind it, and do not aim the camera at the sun. You want a scene with both a bright paper and a dark background competing for the exposure.`,
        `If your camera lets you, take a darker and a lighter capture from the same position. If not, draw the folds you can see at two brightness levels. Two captures show you what the exposure decision costs.`,
        `Compare which version kept the folds. On paper, also draw a flat white rectangle and shade it evenly gray without adding a single fold line, so you feel the difference between darker and detailed.`,
        `Write one sentence saying which change adjusted tone and which supplied real shape information. Keep every original capture, because later edits must never stand in for the record of what was shot.`,
      ],
      notice: `You can now tell a darker patch from restored detail at a glance, and you can name the texture worth protecting before you touch a slider. The gray rectangle you shaded by hand is the quieter buzz: a different tone, the same missing note.`,
      troubleshooting: `If both your captures keep all the folds, write that down as the result. Your light was gentle enough that nothing clipped, and the lesson explains a limit rather than requiring you to hit it. Do not overexpose on purpose just to manufacture a blank patch; the point is to recognize one when it happens.`,
    },
    recall: {
      prompt: 'A night photograph becomes noisy when brightened, but the illuminated shop name is already clear. Must you lift every shadow?',
      answer: `No. The shop name is the information the picture is for, and it is already readable. Brightening the shadows to fill the empty end of a graph would pull up noise, like turning up a faint recording and getting hiss instead of words. Ask whether the shadows hold anything you need. If they do not, a dark street can stay dark.`,
      hint: 'Judge useful detail and scene intention separately from average brightness.',
    },
    quiz: {
      question: 'A verified clipped source patch becomes gray after an exposure reduction, but no texture appears. What follows?',
      options: ['The lower gray value proves texture has been recovered', 'More sharpening will necessarily reconstruct the lost folds', 'The edit changed tone without restoring absent recorded differences'],
      correctIndex: 2,
      explanation: `The patch is the overloaded note turned down: quieter, but still a buzz. Lowering the value changed its tone and nothing else, because the differences were never recorded. Sharpening works on edges that exist in the file, and a flat patch has none, so it cannot rebuild the folds either.`,
    },
    takeaway: 'Protect useful recorded differences, then choose contrast for the picture rather than the graph.',
    sourceNote: 'Blackmagic Design provides exposure and grading context. Swatches are original tonal examples; capture latitude and highlight recovery depend on the recording and workflow.',
  },
  {
    id: 'design-012',
    title: 'Match the sewing table across the cut',
    outcome: `Judge whether two shots belong together by comparing a surface that appears in both under similar light, instead of trusting that they share a preset or a histogram shape.`,
    scene: 'Wide and close views of a sewing table make the same cream pattern paper jump in color.',
    sections: [
      {
        title: 'The close view does not belong to the wide view',
        paragraphs: [
          `You are editing a short video about sewing. There is a wide shot of the whole table and a close shot of a spool of thread beside a paper pattern. You applied the same preset to both, so they should match. Then you play the cut. On the wide shot the cream pattern paper looks neutral. On the close shot the same paper is noticeably yellow. Nothing in the scene changed between takes, yet the paper jumps color every time the picture cuts.`,
          `The jump is the problem, not either shot on its own. Each looks fine in isolation. It is the cut between them that tells the viewer something is wrong, because a sheet of paper does not change color when you lean closer to it. Shot matching is the craft of making that cut believable. It does not mean identical settings on two files. Two files with identical settings just gave you a visible mismatch.`,
        ],
      },
      {
        title: 'Find a reference and a shared surface',
        paragraphs: [
          `Think about touching up a scuffed patch of wall paint. The new tin has the same name as the old one, so it should match. But you do not trust the label. You brush a small patch beside the old paint, on the wall itself, and look at the join in daylight. Then you look again under the evening lamp, because a match that only holds in one light is not a match. The label got you to the right tin. The join on the wall tells you whether it worked.`,
          `The preset is the tin label. It gets you close, and it proves nothing. To check the join, choose one shot as the reference for the scene; here the wide shot, because it looked right. Then find an object that appears in both views under comparable light. The cream pattern paper is ideal. Compare its brightness, its color balance, and its saturation across the two shots. Then pick a second surface, the blue cloth under the paper, and check that too. Fixing the paper alone can hide a new mismatch somewhere else, just as a touch-up that matches in daylight can glow under the lamp.`,
          `Here is why the preset was never going to be enough. A close view changes the proportions of the frame: much more cream paper, much less dark table. So its histogram can look quite different from the wide shot's even when the objects match perfectly. And the camera may have exposed or auto-processed the two takes differently, or the light may have shifted a little. Copying a grade copies the settings. It does not copy the result.`,
        ],
      },
      {
        title: 'Fix one mismatch and replay the pair',
        paragraphs: [
          `In the example chips, the paper in the wide reference is #C8C0AE. In the yellowish close view it is #CFC3A4. The idealized target for the close view is #C8C0AE, the same code as the reference. That exact equality is there to make the diagram readable. It is not a rule for real footage, where texture, reflections, and camera angle will legitimately change the pixel values of the same paper between shots. You are matching how it looks across the cut, not auditing numbers.`,
          `So address the broad cast on the paper first. Then play the pair again, wide to close, close to wide. Now look at the blue cloth. Did it stay blue, or did fixing the paper drag it somewhere odd? Note whatever mismatch remains. Then ask a harder question: did the light really change between the takes? If it did, the honest edit might keep that change rather than disguise it.`,
          `Watch the transition every time. A preset name tells you what was applied. A smooth-looking scope tells you about the distribution of tones. Neither one can watch the paper jump.`,
        ],
      },
      {
        title: 'What matching is not',
        paragraphs: [
          `The first mistake is matching the labels. Same preset, same settings, job done. The paint-tin label looked identical too. The second mistake is matching the histograms. A close-up of a pale flower and a wide shot of mostly dark leaves should have different histograms, because the frames contain different amounts of each tone. Forcing the graphs to the same shape would push the shots apart, not together.`,
          `The third mistake is inventing a fault. If your wide and close shots already match on both shared surfaces, that is the result. Note their different proportions and move on. Do not create a cast so you have something to correct.`,
          `Two habits. Before you judge a cut, name one surface that appears in both shots under similar light, and compare that surface, not the settings. And after any correction, replay the cut and check a second shared surface, because a fix that only holds on one patch is a touch-up that only matches in daylight.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Follow the same paper across two views',
        alt: 'Reference cream paper, yellowish close-view paper, and an idealized matched cream target are compared.',
        caption: `Look at the middle chip against the left one first; that gap is the jump you see at the cut. The right chip shows where the close view needs to go. These are selected teaching colors, not sampled footage, and the identical reference and target codes simplify the diagram; real shot matching does not demand pixel equality.`,
        items: [
          { label: 'Wide-view reference', detail: '#C8C0AE: chosen paper appearance.', color: '#C8C0AE' },
          { label: 'Close view before', detail: '#CFC3A4: paper looks yellower.', color: '#CFC3A4' },
          { label: 'Close-view target', detail: '#C8C0AE: illustrative match.', color: '#C8C0AE' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Paper and colored cloth or clothing', 'Phone camera and existing editor, or pencil'],
      steps: [
        `Lay a sheet of paper on a piece of colored cloth under one steady light. Take a wide photo and a close photo without moving anything, or sketch both frames. Keeping the scene fixed means any difference you see belongs to the capture, not the objects.`,
        `Choose the wide view as your reference. Name the paper as your first shared surface and the cloth as your second, so you have a join to inspect and a second light to check it under.`,
        `If a mismatch is visible, adjust only a duplicate of the close photo, and only enough to bring the paper in line. On paper, write what the correction would target. Working on a copy keeps the original as evidence.`,
        `Flick between the pair and check both surfaces. Write down one remaining difference and whether framing proportions or a lighting shift could explain it, rather than assuming it must be fixed.`,
      ],
      notice: `Your judgment now points at shared features across the cut, the paper and the cloth, rather than at identical settings. You have also checked the join in two places, which is how you know the match is real rather than lucky.`,
      troubleshooting: `If the two views already match on both surfaces, that is a valid result and you should record it. Note how different their tone proportions are even though the objects agree, because that is the lesson about histograms. Do not introduce a cast just to have something to correct.`,
    },
    recall: {
      prompt: 'A garden-film close-up fills the frame with a pale flower while the wide view contains mostly dark leaves. Should their histograms match?',
      answer: `Not necessarily, and probably not. Framing changes how much of each tone is in the frame, so a flower-filled close-up and a leaf-filled wide shot will have different histograms even when the scene is identical. Compare the flower itself, and any foliage visible in both, under comparable light. The histogram is a tally of areas; it cannot tell you whether the flower looks the same across the cut.`,
      hint: 'A histogram counts areas; it does not name the objects occupying them.',
    },
    quiz: {
      question: 'Two shots use the same preset, but the same blue door changes toward green across the cut. What is the next useful comparison?',
      options: ['Choose a new preset for both shots without checking shared surfaces', 'Compare the door and a neutral reference under their respective lighting', 'Force both histograms to have the same overall shape'],
      correctIndex: 1,
      explanation: `The door is the paint join: the same surface in both shots, so comparing it alongside a neutral reference in each light locates the mismatch. A new preset is another tin label, applied without looking at the wall. Equalizing the histograms matches area tallies, which can change both shots while leaving the door still jumping at the cut.`,
    },
    takeaway: 'Match meaningful shared features across the cut, not the names of the settings.',
    sourceNote: 'Blackmagic Design supplies shot-matching concepts. The sewing-table examples are original; the repeated target code is a schematic aid, not a universal grading rule.',
  },
  {
    id: 'design-013',
    title: 'Name the letter feature that becomes unclear',
    outcome: `Use a few Latin letter-anatomy names to say exactly which part of which letter fails at the real reading size, so the next comparison targets that part instead of the whole font.`,
    scene: 'A library shelf label reading Hedge guide becomes difficult to recognize at its final size.',
    sections: [
      {
        title: 'The small e is the problem',
        paragraphs: [
          `You are making a shelf label for a small library. It reads Hedge guide. On your screen, enlarged, the letters look neat and friendly. You print it at the size the shelf actually needs, stick it on, and step back. Something is off. The word reads as Hodge, or Hadge, or nothing in particular. You look closer and realise the little e has closed up. Its opening has filled in at this size, and without the opening an e is just a blob with a bar.`,
          `Your first instinct is to write a note saying the font is bad. That note cannot be acted on. Bad how? Which letter, which part, at what size? A note that says this e loses its opening at shelf-label size tells you what to test next and what to compare. Letter anatomy is simply the set of names that lets you write that second note. You do not need all of them. You need enough to point.`,
        ],
      },
      {
        title: 'Start with a baseline and a few spaces',
        paragraphs: [
          `Think about taking a car to a mechanic. If you say it makes a noise, the mechanic has to search the whole car. If you say there is a clicking from the front left wheel when I turn right, the mechanic walks straight to one joint. The second description is not cleverer. It just uses the names of parts, so the problem has an address. Letter names do the same job for lettering.`,
          `Start with the baseline, the imaginary line most letters sit on. The main lowercase body is the height of a letter like x. An ascender, as in h, is the stroke that rises above that body. A descender, as in g, is the part that drops below the baseline. These are parts of letters. They are not the gap between lines, which is a separate thing with a separate name.`,
          `Two more names cover the spaces inside letters. A counter is an enclosed interior space, like the hole in an o. An aperture is the opening into a partly enclosed shape, like the gap that lets you into an e or a c. Exact shapes vary from typeface to typeface. Some g forms have two loops and some have one, but either way there is a part below the baseline, so g still serves as a descender example.`,
        ],
      },
      {
        title: 'Turn the vocabulary into a comparison',
        paragraphs: [
          `Now go back to the shelf. Write or type h e o g on one line beside the phrase Hedge guide. Look at four things: the opening of the e, the hole in the o, the rise of the h, and the tail of the g. Then set the same words at the real label size in another typeface you already have, or a slightly larger size. Look at the same four features again.`,
          `Suppose the e is now clear, but the tail of the g bumps into the line below. You have solved the aperture problem and created a descender problem. That is useful information, not a failure. The two problems have different fixes. The e wanted a more open form or a larger size. The g wants more room between lines. Naming them separately is what stops you from throwing away a good typeface over a spacing issue.`,
          `Keep the actual label in the test the whole time. An alphabet sample on a screen is not the shelf, and the shelf is where the label fails.`,
        ],
      },
      {
        title: 'What the names cannot do for you',
        paragraphs: [
          `The first trap is collecting terms instead of using them. You do not become a better judge of a shelf label by memorizing forty parts of a letter. Choose the three or four that describe what you actually see and stop there. The second trap is blaming the font for a problem that lives elsewhere. A label can have a perfectly open e and still be unreadable because the ink is pale, the shelf is in shadow, or the reader is three metres away. Contrast, distance, wording, and lighting all matter, and anatomy says nothing about them.`,
          `A smaller trap: these names belong to Latin lettering. Other writing systems have their own structures and their own vocabulary, so do not force these words onto them.`,
          `Two habits. When text looks wrong, find the single letter and the single part that fails first, and write that down before you change anything. And test at the real size, in the real place, because a feature that is clear on a screen can close up on a shelf.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Read four letter features on one row',
        alt: 'The letters h, e, o, and g sit on a common row with their ascender, aperture, counter, and descender identified.',
        caption: `Look at the e first and find its opening; that is the aperture that failed on the shelf. Then read the other three labels. This schematic uses the lesson display type, not a recommended font specimen.`,
        items: [
          { label: 'h', detail: 'Ascender above body.', x: 20, y: 50, shape: 'paper' },
          { label: 'e', detail: 'Open aperture.', x: 40, y: 50, shape: 'paper' },
          { label: 'o', detail: 'Enclosed counter.', x: 60, y: 50, shape: 'paper' },
          { label: 'g', detail: 'Descender below line.', x: 80, y: 50, shape: 'paper' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['A phone text preview or a printed label', 'Pencil and paper'],
      steps: [
        `Find a short label that contains e, h, and g, or write Hedge guide yourself. Look at it from a normal reading distance, because that is where the problem will show, not with your nose on the paper.`,
        `Copy h e o g on one pencil baseline and label one ascender, one aperture, one counter, and one descender. Writing the names next to real marks fixes them better than reading a list.`,
        `Make a smaller copy, or view the text at the size it will really be used. Circle the one feature that becomes least distinct first, so your complaint has an address.`,
        `Try a modest size increase or another typeface you already have. Write whether the circled feature improved and whether it now crowds a neighbor, since one fix can create a different problem.`,
      ],
      notice: `Your critique now names a visible feature, a word, and the size at which the problem appears. That is the clicking-from-the-front-left-wheel version of the note, and anyone could act on it, including you next month.`,
      troubleshooting: `If the letters stay clear at every size you try, that is a good result and you should record it as one. You can compare a much smaller sample to see where features start to fail, but say plainly that the tiny size is a stress test rather than normal use. Do not invent a defect in the original to complete the exercise.`,
    },
    recall: {
      prompt: 'A small museum caption makes o look filled in, while the neighboring letters remain recognizable. What would you inspect and compare?',
      answer: `Inspect the counter, the enclosed space inside the o, at the actual caption size, because that is the one part that has failed. Then compare a more open form, a slightly lighter weight, or a larger setting while keeping the words and the background the same. You are telling the mechanic which wheel is clicking, not asking for a new car.`,
      hint: 'Name the interior space rather than the whole font.',
    },
    quiz: {
      question: 'A two-line label has clear individual letters, but the g tail touches the next line. Which diagnosis fits?',
      options: ['The lowercase body needs a larger x-height', 'The whole label needs more horizontal tracking', 'A descender and the available line spacing are conflicting'],
      correctIndex: 2,
      explanation: `The tail of the g is a descender, and it is colliding with the line below, so the problem is vertical room between lines. A larger lowercase body would make the letters bigger without adding that room, and tracking spreads letters sideways, which does nothing for a tail that drops downward. Name the part and the fix follows.`,
    },
    takeaway: 'Use anatomy to locate a visible problem, not to replace testing the actual words.',
    sourceNote: 'Google Fonts Knowledge supplies Latin type-anatomy terminology. The shelf label and inspection exercise are original, and no typeface is certified by this comparison.',
  },
  {
    id: 'design-014',
    title: 'Equal font sizes can have unequal lowercase bodies',
    outcome: `Explain why two typefaces at the same size setting can look different sizes, using x-height, and compare real lowercase words before choosing between them.`,
    scene: 'A seed-care booklet changes typefaces while keeping the same nominal size setting.',
    sections: [
      {
        title: 'The booklet suddenly looks smaller',
        paragraphs: [
          `You are laying out a small booklet about caring for seeds. You decide to try a different typeface, so you select all the text and switch it. The size box still says the same number. Yet the sentence Mix six seeds in loose soil now looks distinctly smaller on the page. Your first thought is that the software has quietly ignored your size and you need to bump it up. You do, and now the lines wrap differently and the page count changes.`,
          `The software did not ignore you. The size number does not measure what you thought it measured. It does not say how tall the lowercase letters will be. It sets the overall design space that the typeface was drawn in, often described as the em square. Each typeface decides for itself how much of that space its lowercase letters fill. Two typefaces at the same nominal size can therefore have lowercase bodies of quite different heights, and the lowercase body is most of what you see in a paragraph.`,
        ],
      },
      {
        title: 'What x-height measures',
        paragraphs: [
          `Think of two picture frames, both sold as ten by eight inches. One has a thin mount, so the photograph inside fills almost the whole frame. The other has a wide mount, so the photograph is noticeably smaller. Both frames are the same size. The label on the box was telling the truth. But the picture you actually look at is a different size in each, because the frame size and the picture size are two separate measurements.`,
          `The nominal font size is the frame. X-height is the picture. Precisely, x-height is the distance from the baseline up to the top of a lowercase x. It describes the main lowercase body, not the capitals, not the ascenders on letters like h, not the descenders on letters like g. It is not line spacing. It does not measure how wide any letter is. A typeface with a larger x-height fills more of its frame, so it looks fuller at the same nominal size.`,
          `A schematic makes the gap visible. Give two study typefaces, A and B, the same 16-unit nominal size. Let the x-height of A be 7 units and the x-height of B be 9 units. Both frames are 16. The lowercase x in B is taller than the lowercase x in A. These numbers are invented to show the relationship. They are not measurements of any real font, and they are not recommended proportions.`,
        ],
      },
      {
        title: 'Compare words, not just a metric',
        paragraphs: [
          `Go back to the seed sentence and look at the whole paragraph, not the x alone. How easily do the lowercase letters separate from each other? Have the counters, the enclosed spaces inside letters like o and e, stayed open? And how much room is left between lines? A taller lowercase body eats into the gap between lines even when the line-height setting has not moved. A paragraph can feel crowded after a typeface change for exactly that reason.`,
          `If the new typeface looks too small, you can raise the nominal size until the lowercase words look the size you want. That is legitimate. But then the frame has changed, so recheck everything that depends on it: line wrapping, the width of the text column, and how many pages the booklet fills. The number was always a means, never the goal.`,
          `The goal is a booklet somebody can read while holding a packet of seeds. Two unlike designs will not reach that goal by obeying the same number.`,
        ],
      },
      {
        title: 'Where the metric stops helping',
        paragraphs: [
          `The first mistake is treating a big x-height as a readability guarantee. It is one factor. Stroke weight, how distinct the letters are from one another, spacing, contrast with the paper, the language being set, and the kind of reading all pull their weight too. A large lowercase body with cramped spacing is still hard to read. The second mistake is chasing the number: trimming the nominal size on one typeface and raising it on another until the box shows the same figure, as though the figure were the point.`,
          `A quieter mistake is forgetting the knock-on. A fuller-looking label on a button may need more padding, or it may wrap where the old one did not. The lowercase body grew; the box around it did not.`,
          `Two habits. When a typeface change makes text look bigger or smaller, say x-height out loud before you touch the size box, and look at a lowercase word to confirm it. And after any size adjustment, recheck the spaces around the text, because the frame moved and everything inside it moved too.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'The same design size, different x-heights',
        alt: 'Both schematic typefaces have a nominal size of sixteen units; their lowercase x-heights are seven and nine units.',
        caption: `Look at the two tall bars first and notice they are identical at 16: those are the frames. Then compare the two short bars, 7 and 9: those are the pictures inside. These are invented metrics, not real font measurements.`,
        unit: 'schematic design units',
        items: [
          { label: 'Study A: nominal size', detail: '16 units of design space.', value: 16, color: '#CBCBCB' },
          { label: 'Study A: x-height', detail: '7 units above the baseline.', value: 7, color: '#303030' },
          { label: 'Study B: nominal size', detail: '16 units of design space.', value: 16, color: '#CBCBCB' },
          { label: 'Study B: x-height', detail: '9 units above the baseline.', value: 9, color: '#303030' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Two existing font previews on a phone, or squared paper and pencil'],
      steps: [
        `Set two font previews to the same size and type Mix six seeds in loose soil into both. Any free browser preview will do; the point is to hold the frame size identical while the picture changes.`,
        `If you have no previews, draw two boxes each 16 squares high. Mark a baseline 3 squares up from the bottom of each, then draw an x 7 squares tall in one and 9 squares tall in the other. You are drawing the frames and the pictures by hand.`,
        `Compare the lowercase bodies, not the tallest capitals, because the lowercase is what fills a paragraph. Write which looks larger and what the nominal setting held constant.`,
        `With real previews, also check whether the counters stayed open and how the line spacing feels. On paper, label your drawing as schematic, since it shows a relationship rather than testing readability.`,
      ],
      notice: `You can now separate the nominal size from the visible lowercase height, and you have a second feature, counters or line spacing, that you know to check after a typeface change. The size box stopped being the whole story.`,
      troubleshooting: `If your two real fonts look nearly the same size, keep that honest result; many typefaces have similar x-heights. Use the 16, 7, and 9 schematic to understand the distinction instead of exaggerating a difference your screen does not show. The lesson is that the gap can exist, not that it always does.`,
    },
    recall: {
      prompt: 'A replacement typeface makes a button label look fuller without changing its size setting. What should be inspected besides the setting itself?',
      answer: `Inspect the lowercase proportions, starting with x-height, and then weight and width, because the frame stayed the same while the picture inside it grew. Then check the button's padding and whether the label now wraps, since a fuller lowercase body needs more room than the old one did. The size number is unchanged and that is exactly why it cannot explain what you are seeing.`,
      hint: 'The number scales a design space, not a universal lowercase silhouette.',
    },
    quiz: {
      question: 'Two 16-unit study fonts have x-heights of 7 and 9 units. What does that comparison establish?',
      options: ['The second has a taller lowercase x at the same nominal size', 'The second has a larger nominal font-size setting', 'The second places consecutive baselines farther apart'],
      correctIndex: 0,
      explanation: `Both frames are 16 units, so the nominal size is identical and the second option is ruled out. The 7 and 9 describe the picture inside the frame, the lowercase x, so the second font has the taller lowercase body. X-height says nothing about line spacing, which is the distance between baselines and is set separately.`,
    },
    takeaway: 'Compare the lowercase body and the actual paragraph, not only the nominal size.',
    sourceNote: 'Google Fonts Knowledge explains x-height, design space, and reading context. The 16, 7, and 9 unit figures are invented teaching geometry, not beauty laws.',
  },
  {
    id: 'design-015',
    title: 'Read the recipe as instructions, not an alphabet sample',
    outcome: `Separate recognizing letters from following a passage, find the one place where following breaks down, and change only the cause you observed there.`,
    scene: 'A bean-salad recipe is easy to decipher letter by letter but awkward to follow while preparing the dish.',
    sections: [
      {
        title: 'Every letter is clear, but the next action is not',
        paragraphs: [
          `You have written out a bean-salad recipe to prop beside the mixing bowl. The lettering is clean. Every word is easy to make out. Yet each time you glance down after rinsing the beans, you cannot find what comes next. You read from the top again, find your place, do the next step, look back, and lose it again. By the time the salad is made you have read the opening line six times.`,
          `Nothing is wrong with the letters. The thing that is failing is a different task. Recognizing characters is one job. Following a connected passage, understanding the order of its actions, and finding your place after an interruption is another. A typeface can pass the first with ease and still leave you stranded on the second. A big alphabet sample on a screen tests the first job only. It cannot tell you what happens when your hands are wet and you look away.`,
        ],
      },
      {
        title: 'Legibility and readability ask different questions',
        paragraphs: [
          `Think of asking a stranger for directions. They speak clearly, every word audible: go left after the second lights then right where the bakery used to be and it is on your left past the thing with the railings. You heard all of it. You cannot follow any of it. Now imagine the same person saying: first, left at the second lights. Then, right at the old bakery. Then look left. Same words, same voice. The difference is in how the steps are grouped and marked, not in how clearly they were spoken.`,
          `Legibility is the clear speaking. It asks whether you can tell one character from another: e from c, the digit 1 from the letter l. Readability is being able to follow. It covers words, sentences, their order, and how the layout helps you keep your place. Writers use these two terms with some overlap, but keeping the questions apart is what matters. A decorative heading can be perfectly legible for three words and quite unreadable across a whole recipe.`,
          `Here is the passage from the bowl: Rinse the beans in a sieve. Let the water drain away. Put the beans in a bowl and add chopped tomato. Stir gently, then move the salad to a serving dish. Every character is distinct. Now look at where the lines break, how the actions are grouped, and what a word like them refers to. Each of those can make you work, even when every letter is clear.`,
        ],
      },
      {
        title: 'Change the cause you actually observed',
        paragraphs: [
          `Match the fix to the failure. If you lose your place after looking at the bowl, the problem is finding the next action in a block of text. Break the actions onto separate short lines and keep the words and the letter size exactly as they were. If the problem is that them could mean the beans or the tomatoes, the fault is in the wording, and you fix that in a separate pass. If letters are actually merging, then and only then do you look at size, weight, or the typeface.`,
          `Doing all three at once feels efficient. It is not, because afterwards you cannot say which change helped. If the recipe now works, you have learned nothing you can reuse. One change, one test, one note.`,
          `Then read the revised version at the size it will really be used, in the kitchen if you can. A willing friend adds a second view: hand them the card and ask them to tell you the next action without any coaching. Their stumble, if there is one, is a real observation. Keep it concrete. Where did the reading stop, and what was on the card at that spot?`,
        ],
      },
      {
        title: 'What one reader can and cannot tell you',
        paragraphs: [
          `The first mistake is fixing the wrong layer. Someone cannot tell which sentence belongs to step two, so you change the font. The letters were never the problem. Grouping, headings, and the order of the wording were. The second mistake is the reverse: rewriting every sentence because a reader jumped to the wrong line, when the geometry of the paragraph, its width and line spacing, was the likelier cause and would have been a smaller test.`,
          `The third mistake is overclaiming. One friend following the card smoothly is useful feedback. It is not a study, and it does not show the layout works for everyone, or for the same friend when distracted. Say what you saw and no more. And if nobody stumbles, do not manufacture a complaint to have something to fix.`,
          `Two habits. When text is hard to use, ask first whether the trouble is seeing the marks or following their organization, and write down which. And change one cause at a time, re-reading at the real size after each, so that whatever helped can be named.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same short directions, regrouped',
        alt: 'Three bean-salad directions appear first as one run and then as separate action lines.',
        caption: `Read the left version, look away for a moment, then try to find the second action. Now do the same with the right version. The words are identical; only the action boundaries moved. A short original extract, not a measured readability result.`,
        items: [
          { label: 'One running block', detail: 'Rinse the beans. Drain them well. Add the tomato.' },
          { label: 'Three action lines', detail: 'Rinse the beans.\nDrain them well.\nAdd the tomato.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper and pencil or an existing notes app', 'Optional willing reader'],
      steps: [
        `Copy the four-sentence recipe passage from this lesson onto a card or into a note. No cooking is needed; the beans are only there to give the reading a job.`,
        `Read it, look away for a few seconds as if checking the bowl, then find the next action. Mark the exact spot where you lose your place or wonder what a word refers to. That mark is your evidence.`,
        `Change one cause only: regroup the actions onto separate lines, or adjust the width, or clarify the wording. Leave everything else as it was, so the result can be credited to one change.`,
        `Read it again at the real size, or hand it to a willing person and ask them to say the next action without help. Write down the specific improvement or the obstacle that remains.`,
      ],
      notice: `Your revision addresses the job of following the instruction, not how handsome the isolated letters look. You also have a note that says which single change helped, which is the part you can reuse on the next card.`,
      troubleshooting: `If no obstacle appears, try the card at the size and distance it would really be used, since a passage that flows on a large screen can stall on a small card. If it still flows, record that. Do not manufacture a complaint, and do not conclude the layout works for everyone from one smooth reading.`,
    },
    recall: {
      prompt: 'A repair leaflet has distinct letters, but you cannot tell which sentence belongs to step two. What would you investigate?',
      answer: `Investigate the grouping, the headings, and the wording of the sequence, because the trouble is in following the order, not in seeing the marks. It is the clearly spoken directions you still cannot follow. Character recognition passed; the organization of the instructions is what has not yet told you where step two begins and ends.`,
      hint: 'Ask whether the difficulty is seeing marks or following their organization.',
    },
    quiz: {
      question: 'A reader distinguishes every character but repeatedly jumps to the wrong next line in a paragraph. Which first test targets that problem?',
      options: ['Change only the decorative capitals in its heading', 'Compare its measure and line spacing while retaining the words', 'Replace all sentence wording before inspecting the layout'],
      correctIndex: 1,
      explanation: `Jumping to the wrong line is a following problem that lives in the paragraph's geometry, so testing its width and line spacing with the words held steady aims at where the reading actually failed. The heading is nowhere near the fault. Rewriting every sentence first changes a second variable before you have looked at the first, so you could not say which change helped.`,
    },
    takeaway: 'Test the connected reading task and revise the observed obstacle one cause at a time.',
    sourceNote: 'Google Fonts Knowledge supports reading and spacing concepts. The recipe and comparisons are original practice material, not a validated reading-speed intervention.',
  },
  {
    id: 'design-016',
    title: 'Give the eye a line it can return from',
    outcome: `Choose a text-column width by reading the same passage at the same letter size in two widths, watching the return to each new line, and never shrinking the letters to hit a character count.`,
    scene: 'A community-history booklet must fit a walking-route paragraph on both paper and a phone.',
    sections: [
      {
        title: 'The line is easy until it ends',
        paragraphs: [
          `You are laying out a booklet of local history. One page describes a walk past an old mill, and on the wide printed page each line of text runs most of the way across the sheet. The words are clear. Reading along a line is effortless. Then the line ends, your eye sweeps back to the left margin, and lands one line too low. You read a sentence that does not follow, back up, find the right line, and carry on. It happens again two lines later.`,
          `So you narrow the column. The returns get easier. You keep narrowing, and now every short phrase breaks across two lines: the old / mill, Follow the / path. The reading has become choppy in a different way. Somewhere between those two failures is a width that works for this passage. Finding it is a reading decision. It is not simply whatever space is left over after the picture has been placed.`,
        ],
      },
      {
        title: 'Measure means line length',
        paragraphs: [
          `Think about mowing a lawn in stripes. Very long stripes mean a long walk to the far end and a long walk back, and when you turn it is easy to start the next stripe a little off, leaving a strip of uncut grass. Very short stripes mean you are turning every few steps and never settle into a rhythm. The right stripe length depends on the lawn, the mower, and how steady you are on the turn. Nobody picks it from a chart. They look at the grass.`,
          `Typographers call the length of a line of text its measure. A wide measure is the long stripe: the eye travels far before it must return, and the return is where it can land on the wrong line. A very narrow measure is the short stripe: constant returns, and phrases chopped where they should flow. Font size, typeface, language, spacing, and the kind of reading all shift the balance. A one-line ticket caption and a long historical account do not want the same width.`,
          `There is one rule for a fair comparison. Compare the same passage at the same letter size in two column widths. If you shrink the type to squeeze more words onto a line, you have changed two things at once, the measure and the legibility of the letters, and you will not know which one you are judging. Published ranges of characters per line are handy starting points. They are not laws of beauty and not accessibility requirements.`,
        ],
      },
      {
        title: 'Follow the return path',
        paragraphs: [
          `Take the opening words: Walk past the old mill. Follow the path. In the narrow schematic, the first line ends after past, so the return lands in the middle of a sentence and the reader carries the thought across. In the wider one, the whole first sentence fits before the return, and the next line starts a new sentence. Neither is automatically right. The two diagrams exist to make the different movements visible: how far the eye travels, and where the sentence breaks.`,
          `For the real booklet, do not judge from this short opening. Set several complete sentences in each width and read them properly. Mark every lost return and every phrase that broke awkwardly. On a phone, the column is narrow by nature, so accept more wrapping rather than shrinking the letters until they are uncomfortable to read. If the wider version still reads better on paper, check the line height too. Width and vertical spacing work together, but test each on its own before you settle the pair.`,
        ],
      },
      {
        title: 'When the count is not the task',
        paragraphs: [
          `The first mistake is treating a character count as the target. A phone essay comes in under a print guideline's range, so the letters get reduced until the count matches. Now the count is right and the text is too small to read. The guideline was written for another format and another reader. The reader's task is to read, not to hit a number. The second mistake is testing with different words, a different font, and a different width all at once, then crediting the width for whatever changed.`,
          `A quieter mistake is forgetting that the measure interacts with the gap between lines. A long line with tight line spacing makes the return harder still. Widen the column and you may need to open the leading as well, which is why the two are tested separately and then checked together.`,
          `Two habits. When comparing widths, hold the words and the letter size fixed and change only the column. And read the whole passage out, marking the returns that failed, before you let any count or leftover space decide the width for you.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Narrow opening: return within the sentence',
        alt: 'Walk begins at the left, past ends a short first line, and the old mill continues at the next left margin.',
        caption: `Follow the arrows: along the short first line, then back to the margin. Notice the return lands mid-sentence, with the old mill waiting on the next line. A schematic reading path, not a recommended width.`,
        items: [
          { label: 'Walk', detail: 'First-line start.', x: 20, y: 24, shape: 'paper' },
          { label: 'past', detail: 'First-line end.', x: 50, y: 24, shape: 'paper' },
          { label: 'the old mill.', detail: 'Next-line start.', x: 20, y: 76, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }],
      },
      {
        type: 'spatial',
        title: 'Wider opening: a longer return',
        alt: 'Walk past the begins at the left, old mill ends a wider first line, and Follow the path starts below at the same margin.',
        caption: `Compare the length of the first arrow with the one above; this is the longer stripe. The whole first sentence now fits before the return. The words and letter-size intention stay fixed between the two diagrams.`,
        items: [
          { label: 'Walk past the', detail: 'First-line start.', x: 20, y: 24, shape: 'paper' },
          { label: 'old mill.', detail: 'First-line end.', x: 80, y: 24, shape: 'paper' },
          { label: 'Follow the path.', detail: 'Next-line start.', x: 20, y: 76, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Pencil and paper', 'Optional existing document app'],
      steps: [
        `Write four original sentences about a walk you know. Draw one column about a quarter of the page wide and another about half the page wide, so you have a short stripe and a long stripe to compare.`,
        `Copy the same passage into both columns at a similar letter size, keeping line spacing as even as your handwriting allows. Holding the letters steady is what makes this a test of width alone.`,
        `Read each version at normal speed and mark one awkward wrap or one lost return if you find one. Do not change the words while you compare, or you will not know what caused the difference.`,
        `Choose a width for this passage and write the tradeoff in one sentence. The quarter and half fractions are trial constraints for this exercise, not recommendations for anything else.`,
      ],
      notice: `Your choice now refers to how the reading felt, the returns and the wraps, rather than to a character count. You can also say which failure each width produced, which is the knowledge that transfers to the next layout.`,
      troubleshooting: `If your handwriting shrank in the narrow column to fit more words in, the comparison has two variables and the result is not trustworthy. Draw a few equal-height guide marks in both columns, rewrite at the same size, and compare again. The letters must stay fixed for the width to be the only thing you are judging.`,
    },
    recall: {
      prompt: 'A phone essay has fewer characters per line than a print guideline suggests. Should its letters be reduced until the count matches?',
      answer: `No. Keep the letters at a size that is comfortable to read and test the actual wrapping on the phone. The print guideline was written for a different format and a different reading distance, like a stripe length chosen for a different lawn. More lines with readable letters beats the right count with letters nobody can read.`,
      hint: 'A character count is not the reader\'s task.',
    },
    quiz: {
      question: 'Which comparison most directly tests measure for a book paragraph?',
      options: ['Different wording, font, and width in each version', 'The same passage and letter size at two column widths', 'A shorter caption at a much larger size'],
      correctIndex: 1,
      explanation: `Holding the words and the letter size steady leaves the column width as the only thing that changed, so whatever you notice about the returns belongs to the measure. Changing wording, font, and width together means any difference could come from any of the three. A short caption at a large size is a different reading task altogether, not a test of this paragraph.`,
    },
    takeaway: 'Choose a line length through actual reading, without shrinking letters to satisfy a count.',
    sourceNote: 'Google Fonts Knowledge provides measure guidance. The route text and column fractions are original trials, not experimentally established optimal widths.',
  },
  {
    id: 'design-017',
    title: 'Separate the letters from the space between lines',
    outcome: `Explain line height and traditional leading as room between lines, separate from letter size, and fix crowded lines by moving baselines while checking the lines still read as a group.`,
    scene: 'An original short-film credit block crowds the names Héloise Ng and Hugo Gill onto adjacent lines.',
    sections: [
      {
        title: 'The credit names begin to collide',
        paragraphs: [
          `Your short film ends with three lines of credits: Images: Héloise Ng, Sound: Hugo Gill, and Thanks: Jo. You can read every name. But the block looks cramped. The tail of the g in Images hangs down towards the accent on the next line, and the g in Hugo reaches for the T in Thanks. Your instinct is that the names deserve to be bigger, so you enlarge the letters. The collision gets worse, because bigger letters have longer tails and taller accents, and the lines have not moved.`,
          `The problem was never the size of the letters. It is the vertical room between the lines, which is a separate setting with its own name. Once you see those as two different things, the fix is obvious and small. Until you see it, you will keep adjusting the wrong one and wondering why the credits never settle.`,
        ],
      },
      {
        title: 'Line height and leading need a careful distinction',
        paragraphs: [
          `Think of a bookcase with adjustable shelves. The height of each shelf gap is set by where you put the pegs. The height of the books is set by the books. If a tall atlas scrapes the shelf above, nobody shaves the top off the atlas. They move the shelf peg up one hole. Book height and shelf spacing are two measurements, and only one of them is in your hands when the books are already chosen.`,
          `Line height is the shelf spacing. It is the vertical space given to each line of text, and with consistent settings it is the usual distance from one baseline to the next. The word leading comes from metal type, where printers slid thin strips of lead between rows of letters to push them apart. A 10 pt type body with 2 pt of lead added gives a 12 pt distance from baseline to baseline. Notice that the visible letters are not 10 pt tall. The body is the metal block, and the letter sits inside it.`,
          `Modern software muddles the words. Some programs use leading to mean the whole baseline-to-baseline distance, not the added strip. In CSS, line-height sets the height of the line box rather than an extra gap. So read what your particular control means before you type a number into it. And keep two other terms out of this drawer entirely. X-height measures the lowercase body above the baseline. Kerning adjusts the horizontal gap between particular letter pairs. Neither has anything to do with the room between lines.`,
        ],
      },
      {
        title: 'Leave room without breaking the block apart',
        paragraphs: [
          `The schematic places the three credit baselines at 0, 12, and 24 pt below the first line. That gives two equal 12 pt intervals, and it is there to make the arithmetic visible, not to recommend 12 pt for text on a phone. In the real credits, look at the accented name and the two g tails at the size the film will actually be shown. If they crowd, move the shelf pegs: increase the line distance and leave the letters alone.`,
          `Then look at the block as a whole. Three lines of credits should read as one group. Push the lines too far apart and they stop being a block and become three stray sentences floating on a black screen. The right distance gives the tails room and keeps the group together. There is no number that does both for every font, so you check by looking.`,
          `Check again whenever something upstream changes. A new typeface with longer descenders, a translation with taller accents, or a longer line that wraps differently can all bring the collision back at the same settings.`,
        ],
      },
      {
        title: 'What the setting does not promise',
        paragraphs: [
          `The first mistake is the one from the opening: fixing a vertical room problem by changing letter size. The second is its mirror, treating leading as a cure-all and spacing a paragraph so loosely that the reader loses the thread between lines. Connected text needs the lines close enough to feel connected.`,
          `A third mistake is misreading a standard. Web accessibility guidance on text spacing, in WCAG, requires that content still works when a reader overrides spacing to the specified values. It does not instruct every author to use one default line-height ratio. And a pencil trial on paper, useful as it is, cannot certify what a web page does when a reader applies those overrides. That has to be tested in the browser.`,
          `Two habits. When adjacent lines crowd, name the setting you are about to change and make sure it is the room between lines, not the size of the letters. And after any spacing change, read the block as a group and check the tallest and lowest marks at the real viewing size.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Three evenly separated credit baselines',
        alt: 'Images, Sound, and Thanks credit lines occupy equally spaced positions labeled zero, twelve, and twenty-four points below the first baseline.',
        caption: `Read the three names first, then the repeated 12 pt distance between their baselines. The gap is set like a shelf spacing, independent of how tall the letters are. This is an enlarged schematic, not actual-size typography.`,
        items: [
          { label: 'Images: Héloise Ng', detail: 'Baseline at 0 pt.', value: 0, x: 50, y: 20, shape: 'paper' },
          { label: 'Sound: Hugo Gill', detail: 'Baseline at 12 pt.', value: 12, x: 50, y: 50, shape: 'paper' },
          { label: 'Thanks: Jo', detail: 'Baseline at 24 pt.', value: 24, x: 50, y: 80, shape: 'paper' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Pencil and paper, or an existing editor with line-spacing controls'],
      steps: [
        `Copy the three credit lines at one comfortable letter size, including the accent on Héloise and the g tails. These are the tall books that will scrape the shelf above, so they must be in the test.`,
        `Make a second version with more distance between baselines, keeping the letter size and the words identical. You are moving the shelf pegs, not changing the books.`,
        `Make a third version with more distance still. Circle any collisions in the tight version and any point in the loose version where the three lines stop feeling like one block.`,
        `Choose the usable version and label the change line spacing. If you used an app, write down whether its control sets the total baseline distance or an added strip, because the same number means different things in each.`,
      ],
      notice: `The accent and the tails now have room, and the three credits still read as one connected block. You reached that by moving baselines only, which is the move you will reach for next time instead of resizing the letters.`,
      troubleshooting: `If you find that you enlarged the letters to fix the crowding, you have changed the books instead of the shelf. Put the letters back to the original size and repeat with only the baseline distance changing, so you can see what the spacing alone does.`,
    },
    recall: {
      prompt: 'A translated booklet adds taller accent marks but keeps its old font-size and line-height settings. What should be checked?',
      answer: `Look at the actual adjacent lines in the translated text for collisions between the new accents and the descenders above them, and then check that the paragraphs still hold together as groups. The shelf spacing is unchanged but the books got taller, so equal settings no longer guarantee equal usable room. The numbers passed; the marks have to be inspected.`,
      hint: 'Inspect the highest and lowest marks, not just the numerical size.',
    },
    quiz: {
      question: 'A print proof uses 12 pt metal type with 3 pt of added leading. What nominal line distance does that specify?',
      options: ['3 pt, counting only the extra space', '12 pt, counting only the type body', '15 pt, combining the body and added leading'],
      correctIndex: 2,
      explanation: `In the traditional sense, leading is the strip of lead slid in between rows, so the baseline distance is the type body plus the strip: 12 plus 3 gives 15 pt. The 3 pt alone is just the strip, and the 12 pt alone is the metal body with nothing added. Modern controls may use leading to mean the whole 15, so check which meaning your software intends before entering a value.`,
    },
    takeaway: 'Judge line room with actual marks and reading, while keeping font size and spacing conceptually separate.',
    sourceNote: 'Google Fonts line-height guidance and W3C Text Spacing were checked. Credit names are fictional; the point figures teach geometry, not ideal sizes or default ratios.',
  },
  {
    id: 'design-018',
    title: 'Repair one letter pair without spreading the title',
    outcome: `Tell kerning from tracking by moving paper letters, fix one awkward pair by shifting everything after it together, and leave the gaps you never meant to change untouched.`,
    scene: 'Three paper letters spelling AVA are arranged for an original film-title study.',
    sections: [
      {
        title: 'The first gap looks larger than the second',
        paragraphs: [
          `You are working out a title for a short film and have cut three paper letters: A, V, A. You line them up on a table with a ruler so the centers are exactly evenly spaced. It should look balanced. It does not. The space between the first A and the V looks like a hole, while the V and the second A seem to sit comfortably. You check the ruler again. The measurements are identical. Your eye still says the first gap is bigger.`,
          `Your eye is reading something the ruler is not. Letters are shapes, not rectangular blocks of ink. The right-hand slope of an A and the left-hand slope of a V lean away from each other, so they leave a wedge of white between them that a straight-sided letter would not. Equal distances between centers do not give equal-looking spaces. Before you move anything, decide which of two different problems you have. Is one pair wrong, or does the whole word feel too tight or too loose? They have different fixes.`,
        ],
      },
      {
        title: 'Pair spacing and whole-run spacing',
        paragraphs: [
          `Picture a row of friends lining up for a photograph. Everyone is evenly spaced, but one person has turned slightly sideways, and now there is an awkward gap between them and the next person along. The photographer does not ask the whole row to spread out. They ask everyone from that gap rightwards to shuffle one step left, together. The awkward gap closes, and every other gap stays exactly as it was. If instead the photographer wanted the whole row looser, they would ask everyone to take half a step apart. Two different instructions for two different problems.`,
          `Kerning is the shuffle. It adjusts the space between one particular pair of glyphs, where a glyph is the drawn shape used for a character. Tracking is the half step apart. It changes the spacing across a whole run of letters, a heading or a word. Neither has anything to do with the vertical distance between lines, and neither alters x-height. One more thing before you reach for either: well-made fonts already carry kerning information for common pairs like AV. Start from the font's normal spacing and only intervene where your eye still objects.`,
          `The paper makes the shuffle physical. To tighten only the AV pair, you move the V and the second A together towards the first A. The VA gap travels with them and stays the same. If you move the V alone, you close the first gap and open the second at the same moment, and you have changed two things while trying to change one.`,
        ],
      },
      {
        title: 'Compare three arrangements',
        paragraphs: [
          `The first diagram puts the letter centers at 20, 50, and 80 units: two separations of 30. The pair adjustment moves the V and the final A together to 44 and 74, so the separations become 24 and 30. The first gap closed by six, the second did not move. The separate tracking study spreads the row to 14, 50, and 86, so both separations become 36. Everything opened equally.`,
          `These numbers are center positions on a table. They are not measurements of the white space between the ink, and they are not kerning values to copy into any font. After each move, look at the whole title rather than the one gap you were fixing. If the AV pair now looks right but the word has become lopsided, compare again. There is no formula that tells you when a title looks balanced. Your eye and a second look are the instruments.`,
          `Keep the manual work for short display text, a title or a heading, where there are only a handful of pairs to judge. In running text, trust the font's built-in kerning and leave it alone.`,
        ],
      },
      {
        title: 'When the fix is bigger than the problem',
        paragraphs: [
          `The first mistake is spreading the whole poster because one pair looks awkward. Tracking out everything to fix To in a heading changes every other pair on the page and every text block, most of which were fine. It is asking the entire row to spread out because two people had a gap. The second mistake is moving the one letter and declaring the pair fixed, without noticing that the gap on its other side has now opened. The shuffle has to carry everything after it.`,
          `A third mistake is trusting the ruler over your eye. Centers at equal distances are a starting point. The job is finished when the spaces look even, which for diagonal letters means the centers will not be.`,
          `Two habits. When spacing looks wrong, say out loud whether it is one pair or the whole run before you touch anything, and match the tool to that scope. And when you adjust a pair, move everything after it together, then step back and read the complete word.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Initial letter positions',
        alt: 'A, V, and A paper tiles occupy positions twenty, fifty, and eighty on one row.',
        caption: `Look at the white space between the first A and the V, then between the V and the second A. The center separations are both 30 schematic units, yet the two gaps need not look the same.`,
        items: [
          { label: 'A', detail: 'x = 20', x: 20, y: 50, shape: 'paper' },
          { label: 'V', detail: 'x = 50', x: 50, y: 50, shape: 'paper' },
          { label: 'A', detail: 'x = 80', x: 80, y: 50, shape: 'paper' },
        ],
      },
      {
        type: 'spatial',
        title: 'A local pair adjustment',
        alt: 'The first A stays at twenty while V and the final A move together to forty-four and seventy-four.',
        caption: `Notice that the V and the last A have both moved left by six, together, like the shuffle in the photo row. Separations become 24 and 30. The following pair kept its spacing.`,
        items: [
          { label: 'A', detail: 'x = 20', x: 20, y: 50, shape: 'paper' },
          { label: 'V', detail: 'x = 44', x: 44, y: 50, shape: 'paper' },
          { label: 'A', detail: 'x = 74', x: 74, y: 50, shape: 'paper' },
        ],
      },
      {
        type: 'spatial',
        title: 'A separate tracking study',
        alt: 'The letter centers are fourteen, fifty, and eighty-six, opening both spaces equally.',
        caption: `Compare this row with the first one: both outer letters have moved outward and the V has stayed put. Both separations are now 36. The whole run changed, not only the first pair.`,
        items: [
          { label: 'A', detail: 'x = 14', x: 14, y: 50, shape: 'paper' },
          { label: 'V', detail: 'x = 50', x: 50, y: 50, shape: 'paper' },
          { label: 'A', detail: 'x = 86', x: 86, y: 50, shape: 'paper' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Three torn paper scraps', 'Pencil', 'A sheet for a baseline'],
      steps: [
        `Write A, V, and A on three separate scraps at the same size and set them on one drawn baseline with the centers evenly spaced. Look at the two gaps before you move anything, so you know what your eye objects to.`,
        `Keep the first A fixed and slide the V and the last A together towards it, so only the first gap changes. Label this the kerning study; it is the shuffle that carries everything after the awkward pair.`,
        `Reset to the even spacing, then move the outer letters apart so both gaps grow by the same amount. Label this the tracking study; the whole row has taken a half step apart.`,
        `Sketch both results and write under each which gap changed. The coordinates in the diagrams are there for reference, not targets to reproduce with a ruler.`,
      ],
      notice: `You can change one pair while the pair after it stays exactly as it was, and you have felt in your hands why that needs two letters to move rather than one. The difference between kerning and tracking is now a physical memory, not a definition.`,
      troubleshooting: `If moving the V changed both gaps, you moved it alone and left the final A behind. For the pair-only version, slide the trailing A by exactly the same amount as the V, so the two travel as a block and the gap between them never changes.`,
    },
    recall: {
      prompt: 'Only the To pair in a poster heading looks awkward. Why is increasing letter spacing across the entire poster an imprecise fix?',
      answer: `Because it asks the whole row to spread out when only two people had a gap. Tracking the entire poster changes every other pair and every text block, most of which looked fine. Check first whether the font's own kerning already handles To, and if that pair still looks wrong in the heading, make a local adjustment to that pair alone.`,
      hint: 'Match the scope of the adjustment to the scope of the problem.',
    },
    quiz: {
      question: 'The first AV gap should shrink while the following VA gap stays unchanged. Which paper move achieves that?',
      options: ['Move V and the final A together toward the first A', 'Move only V toward the first A', 'Move both outer As away from V'],
      correctIndex: 0,
      explanation: `Moving the V and the final A together is the shuffle: the VA gap travels with them and stays the same while the AV gap closes. Moving only the V closes the first gap and opens the second at the same time. Moving both outer As away from the V is tracking, which opens the whole run rather than fixing one pair.`,
    },
    takeaway: 'Use a pair adjustment for a pair problem and tracking for a whole-run spacing decision.',
    sourceNote: 'Google Fonts Manual kerning is rarely required was checked. Paper coordinates are original explanatory geometry, not measured font metrics or universal spacing rules.',
  },
  {
    id: 'design-019',
    title: 'Give the flyer shared edges and real margins',
    outcome: `Lay out a two-column flyer on explicit margin, column, and gutter guides so related elements share edges, then restack it as one readable column when the width shrinks.`,
    scene: 'A neighborhood screening flyer combines a title, an original drawing, a caption, and event details.',
    sections: [
      {
        title: 'Each element has found a different edge',
        paragraphs: [
          `You are making a flyer for a film screening in the neighborhood hall. There is a title, a drawing you made, a caption for it, the time and venue, and a line about how to book. You place each one where it seems to look nice. The title sits roughly in the middle. The drawing is a little left of it. The address starts somewhere else again. Nothing is unreadable. Yet the page looks like five pieces of paper that happened to land on the same sheet.`,
          `The problem is that every element chose its own edge. Nothing lines up with anything, so the eye finds no reason to believe the pieces belong together. A grid is the cure for that, and it is a smaller thing than it sounds. It is a set of recurring guide lines that let related elements share edges. It is not a visible cage that every object must fill, and it is not a formula that makes a page beautiful. It just removes arbitrary placement.`,
        ],
      },
      {
        title: 'Separate margins, columns, and gutters',
        paragraphs: [
          `Think about hanging pictures on a wall. Hang six frames at six different heights and the wall looks cluttered, however good the pictures are. Hang them so their top edges line up, or so they share one center line, and the same pictures suddenly look intended. You also keep them off the ceiling and above the skirting board, leaving a band of empty wall around the group. And if there are two groups, you leave a clear strip between them so they read as two groups rather than one smear.`,
          `A page has the same three kinds of space, and they have names. Margins are the outer bands between the page edge and the content, the empty wall near the ceiling and skirting. Columns are the vertical regions where content lives, the two groups of pictures. The gutter is the strip between columns, and its job is to stay clear. A caption that drifts into the gutter is a picture hung in the gap between the groups. It does not become part of either.`,
          `A squared-paper study makes this concrete. Take a page 20 units wide. Reserve 2 units of margin at each outer edge. Use two columns of 7 units each with a 2-unit gutter between them. Check it adds up: 2 + 7 + 2 + 7 + 2 = 20. These are invented construction numbers chosen to be easy to draw and check. They are not required proportions for any real flyer.`,
        ],
      },
      {
        title: 'Use the guides, then change the format',
        paragraphs: [
          `Now place the content. Let the title span both columns across the top; it names the whole event, so it belongs to the whole width. Put the drawing in the left column with its caption directly under it, sharing the drawing's left edge. Put the time and venue in the right column with the booking line under them, sharing that edge. The two column centers sit 5.5 and 14.5 units from the left page edge, shown as 27.5 and 72.5 percent in the diagram. But centers are a convenience for the diagram. On the real artwork it is the shared edges that do the work.`,
          `Then imagine the same flyer on a phone, where the page is barely wider than one column. Do not shrink everything until two columns squeeze in. Restack: title, drawing, caption, time and venue, booking line, in that order, as one readable column. The grid's purpose was to make relationships repeat, and that purpose survives a change of column count. The two-column shape was never the point.`,
          `Exceptions are allowed when they explain something. The spanning title is an exception that says this belongs to everything. A caption that has wandered half into the neighboring column is an exception that says nothing, and it gets corrected.`,
        ],
      },
      {
        title: 'What the grid is not for',
        paragraphs: [
          `The first mistake is defending the shape instead of the task. The flyer is cramped on a phone, so the type gets reduced until the original columns fit, and now nobody can read the time. Or the caption is deleted because its column is too narrow, and the drawing loses its explanation. Both keep the old layout at the expense of the reader.`,
          `The second mistake is decorating an ambiguity. A caption starts halfway inside the wrong column, and someone adds a border around it. The border makes the confusion look intentional without saying which image the caption belongs to. Find the group it belongs to and give it that group's edge. Then see if a border is still wanted.`,
          `Two habits. Before placing any element, ask which other element it belongs with, and give it that element's edge. And when the available width changes, keep the order and the relationships and let the number of columns go.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A two-column screening flyer',
        alt: 'A spanning title sits above a drawing and caption in the left column, with event and booking details in the right column.',
        caption: `Look down the left column first and notice the drawing and its caption share an edge; then do the same on the right with the details and booking line. The column centers at 27.5 and 72.5 percent are schematic; align actual content edges inside the margins and keep the gutter clear.`,
        items: [
          { label: 'Screening title', detail: 'Spans both columns.', x: 50, y: 18, shape: 'paper' },
          { label: 'Original drawing', detail: 'Left-column content.', x: 27.5, y: 50, shape: 'box' },
          { label: 'Time and venue', detail: 'Right-column content.', x: 72.5, y: 50, shape: 'paper' },
          { label: 'Drawing caption', detail: 'Shares the drawing edge.', x: 27.5, y: 82, shape: 'paper' },
          { label: 'Booking detail', detail: 'Shares the details edge.', x: 72.5, y: 82, shape: 'paper' },
        ],
      },
      {
        type: 'bars',
        title: 'Account for the whole page width',
        alt: 'The page has a two-unit left margin, seven-unit column, two-unit gutter, seven-unit column, and two-unit right margin.',
        caption: `Read the five bars left to right as a walk across the page: margin, column, gutter, column, margin. They total 20. The bars report widths only; the spatial diagram above shows what sits in each.`,
        unit: 'squared-paper units',
        items: [
          { label: 'Left margin', detail: 'Outer space.', value: 2 },
          { label: 'Left column', detail: 'Drawing and caption.', value: 7 },
          { label: 'Gutter', detail: 'Between columns.', value: 2 },
          { label: 'Right column', detail: 'Event details.', value: 7 },
          { label: 'Right margin', detail: 'Outer space.', value: 2 },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Pencil', 'Squared paper or a hand-drawn 20-unit width'],
      steps: [
        `Mark a page width of 20 units and divide it into 2, 7, 2, 7, and 2 for the margins, columns, and gutter. Drawing the guides first means every later decision has an edge to answer to.`,
        `Place a screening title across both columns, a drawing with its caption in the left column, and fictional time, venue, and booking details in the right. Make each item share an edge with the item it belongs to.`,
        `Extend each column guide lightly down the page and look for any element whose edge drifts away without a stated reason. Correct one, because that drift is what made the first flyer look like loose pieces.`,
        `Redraw the same content as a single phone-width column in the same order, keeping every detail at a readable size. You are testing whether the relationships survive when the column count does not.`,
      ],
      notice: `Related edges now repeat down the page, the gutter is clear, and the narrow version still carries the whole message in the same order. The flyer reads as one thing on both formats, and you got there by alignment rather than by shrinking anything.`,
      troubleshooting: `If the title forces you into tiny lettering to fit the width, the words have outgrown the guide, and the guide should give way. Let the title wrap onto two lines or span more space. A grid that makes the headline unreadable has stopped serving the reader, and that is the only reason it was there.`,
    },
    recall: {
      prompt: 'A museum handout has a caption starting halfway inside the neighboring column. What would you check before adding a border?',
      answer: `Check which image the caption belongs to, then align it with that image's column or edge, the way you would move a picture hung in the gap between two groups back into its group. A border drawn around the drifting caption decorates the ambiguity without resolving it; the reader still cannot tell which picture it describes.`,
      hint: 'Find the intended group before choosing the guide.',
    },
    quiz: {
      question: 'The two-column flyer becomes cramped on a phone. Which revision preserves the grid\'s purpose?',
      options: ['Reorganize it into one readable column with the same content order', 'Reduce all type until the original columns fit', 'Remove the caption because its column is too narrow'],
      correctIndex: 0,
      explanation: `The grid existed to make relationships repeat and keep the content in a readable order, and one column on a phone does exactly that. Shrinking the type keeps the old shape while making the time unreadable, and deleting the caption keeps the columns by throwing away part of the message. Both defend the layout against the reader.`,
    },
    takeaway: 'Use guides to make relationships repeat, and let the layout change when the available width changes.',
    sourceNote: 'Nielsen Norman Group and Apple provide layout context. The 20-unit grid is original practice geometry, not a universal margin or column prescription.',
  },
  {
    id: 'design-020',
    title: 'Put each form label nearer its own field',
    outcome: `Use the difference between a small gap inside a pair and a larger gap between pairs to show which label belongs to which field, instead of relying on equal spacing or decoration.`,
    scene: 'A small event-request interface places Date and Venue labels ambiguously between their input fields.',
    sections: [
      {
        title: 'Even spacing creates the wrong question',
        paragraphs: [
          `You are sketching a simple form for requesting an event in the hall. Two labels, Date and Venue, two fields underneath them. To keep it neat you make every vertical gap the same. Label, gap, field, gap, label, gap, field. It looks orderly. Then a friend tries to fill it in and pauses at the second label. Venue sits exactly halfway between the field above it and the field below it. Which one does it describe?`,
          `Your friend can read every word. The problem is not legibility. The layout has posed a question it never meant to pose: which field goes with which label? Perfect regularity did not make the relationships clear. It erased them, because equal gaps say that everything is equally related to everything else. Before you pick a spacing scale, write down the pairs the form is supposed to communicate. Date goes with its field. Venue goes with its field. The spacing has to say that.`,
        ],
      },
      {
        title: 'Proximity is a relative cue',
        paragraphs: [
          `Think of a buffet table. Little cards say what each dish is and whether it contains nuts. If each card sits right in front of its dish, nobody has to think. If a card is placed exactly between the curry and the rice, a guest with an allergy has to guess which dish the warning belongs to. The card is perfectly readable. Its position is what fails. Move it two inches towards the curry and the question disappears.`,
          `The design name for this is proximity, which just means nearness. Things that sit close together are read as belonging together, especially when their alignment and their wording agree. So the fix for the form is relative. Make the gap between a label and its own field small. Make the gap between one complete pair and the next pair larger. The small gap says these two are a unit. The larger gap says a new unit starts here.`,
          `There is no compulsory ratio between the two gaps. Text height, field size, screen width, and whatever surrounds the form all shift what looks right. And measure what the eye sees, not what the ruler says. A tall label that wraps onto two lines fills space that a short one did not, so the visible gap below it shrinks even though its box starts at the same coordinate. Look at the boundaries of the ink, not just the centers.`,
        ],
      },
      {
        title: 'Make a pair, then separate the pairs',
        paragraphs: [
          `The schematic shows the repaired form. Date sits just above its field, which reads Sat 14 Nov. Then there is a larger break. Venue sits just above its own field, Library room. Within each pair the label and the field are close. Between the pairs there is air. The entries are fictional so you can study the relationship without collecting anyone's real details.`,
          `Notice what the repair did not involve. No colored border. No box around each pair. No arrow. Moving the label is a structural change, and it is the first thing to try. Decoration can come later if the structure still needs help, but usually it does not.`,
          `Then test it the way the buffet gets tested. Hand the sketch to someone and ask which label goes with each field, without explaining your arrangement. If they hesitate, look at the wording and the alignment too, because spacing is one cue among several. And remember what a paper sketch cannot do. In a working interface, a label must also be linked to its field in the code so that a screen reader announces them together. Spacing shows the grouping to the eye. It does not establish accessible behavior.`,
        ],
      },
      {
        title: 'When more space is the wrong answer',
        paragraphs: [
          `The first mistake is adding space everywhere. The form feels cramped, so every gap grows by the same amount. Now it is a spread-out form with exactly the same ambiguity, because the card is still halfway between the curry and the rice, just further from both. The second mistake is centering each line on its own, which can leave labels floating with no shared edge to tie them to their fields.`,
          `A quieter mistake is testing only with short labels. Venue is one word. Venue and room name wraps to two lines and eats the gap below it. If the grouping only survives the short version, it has not been tested.`,
          `Two habits. Before spacing anything, list the pairs the layout must communicate, and give each pair a smaller gap inside than outside. And test with the longest realistic label, because that is the one that will close the gap you were relying on.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two label-field groups',
        alt: 'Date sits close to its Sat 14 Nov field, followed by a larger break before Venue and its Library room field.',
        caption: `Look at the gap between Date and Sat 14 Nov, then at the larger gap before Venue. The small gap makes a pair; the large gap separates the pairs. The centers are schematic, and real spacing must also account for text and control boundaries.`,
        items: [
          { label: 'Date', detail: 'Label.', x: 50, y: 10, shape: 'paper' },
          { label: 'Sat 14 Nov', detail: 'Date field.', x: 50, y: 35, shape: 'box' },
          { label: 'Venue', detail: 'Label.', x: 50, y: 65, shape: 'paper' },
          { label: 'Library room', detail: 'Venue field.', x: 50, y: 90, shape: 'box' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Pencil', 'Paper', 'Optional willing reader'],
      steps: [
        `Draw Date, an empty field, Venue, and another empty field in a vertical stack with every gap equal. Start with the ambiguous version so you can see the question it asks.`,
        `Draw a second version with each label pulled close to its own field and more space between the two complete pairs. You are moving the card towards its dish.`,
        `Fill in the fictional values, Sat 14 Nov and Library room. Ask someone to match labels to fields without your help, or cover your guide marks and judge it cold, because you already know the answer and cannot be fooled.`,
        `Replace Venue with Venue and room name and let it wrap onto two lines. Check whether the longer label has eaten the gap below it, and adjust the spacing if the grouping has weakened.`,
      ],
      notice: `The date pair and the venue pair stay distinguishable even when a label grows, and you achieved it without a border or an arrow. The small gap inside each pair is doing the work that equal gaps could not.`,
      troubleshooting: `If adding space between the pairs just made the whole form look spread out, you probably widened everything at once. Leave the between-pair gap alone and shrink the gap inside each pair instead, then check that each label and its field share a left edge. Nearness is relative, so one gap has to be clearly smaller than the other.`,
    },
    recall: {
      prompt: 'Two photographs on a book page have captions halfway between them. How could spacing clarify ownership without adding arrows?',
      answer: `Move each caption close to its own photograph and leave a larger gap before the next photo-caption group, the way you would slide the buffet card up to its dish. Then check that the caption shares an edge with its picture and that the reading order runs photo then caption. The smaller gap inside each group makes the ownership obvious without any arrow.`,
      hint: 'Compare the distance inside a group with the distance to the next group.',
    },
    quiz: {
      question: 'A price sits equally far from two product names on a menu. Which change most directly clarifies its relationship?',
      options: ['Increase all three gaps by the same amount', 'Group the price nearer its product and separate the other product', 'Center every line independently within the page'],
      correctIndex: 1,
      explanation: `Pulling the price towards its own product and opening the gap to the other product is the buffet card moved to its dish: the smaller gap now says which pair is a pair. Growing all three gaps equally keeps the price exactly halfway, just further from both. Centering each line independently removes the shared edges that help the eye group things at all.`,
    },
    takeaway: 'Let the closest gap express the closest content relationship.',
    sourceNote: 'Nielsen Norman Group supplies visual-grouping guidance. These fictional form trials test a cue, not user prevalence or programmatic accessibility.',
  },
  {
    id: 'design-021',
    title: 'Let the ticket answer the entrance question first',
    outcome: `Rank the information by what the reader needs at the moment of use, then use position, size, and surrounding space so the first-ranked item is the easiest to find.`,
    scene: 'A museum-night ticket gives its decorative event name more attention than the Gate C entrance instruction.',
    sections: [
      {
        title: 'The biggest line answers the wrong question',
        paragraphs: [
          `You have designed a ticket for a museum night. The event name is large and decorative across the top, because that was the fun part to draw. The words Gate C sit in small type near the bottom. Now picture the visitor on the evening itself. They are standing outside the museum in the cold, ticket in hand, looking at three entrances. They already know which event they booked. The one thing they need from the ticket right now is which gate, and it is the smallest thing on it.`,
          `The ticket is not ugly. It has simply answered the wrong question first. Every piece of information on it is correct, but its emphasis is arranged in the order you enjoyed drawing the words, not the order the visitor needs them. Before you make the design more dramatic, write down what the reader wants to know at this moment of use, in order. Where do I go in? When does admission start? What is this for? That list is the brief for the layout.`,
        ],
      },
      {
        title: 'Hierarchy is an invitation to attend',
        paragraphs: [
          `Think of a box of medicine at three in the morning. The brand name is huge and colorful. The thing you actually need, how many tablets and how often, is in small print on the side. The box has a hierarchy, but it was built for the shop shelf, where the question is which brand to pick. In the bathroom at night the question is different, and the box answers it last. Same information, wrong moment.`,
          `Visual hierarchy is the order a layout encourages people to notice things. Size, weight, contrast, position, and the empty space around an item all push it up or down that order. The word relative matters. If you make everything large and bold, nothing is first, because hierarchy comes from differences. And a bright decorative badge with almost no information in it can still win the eye away from the instruction that matters, simply because it is loud.`,
          `One more honesty. Hierarchy is a proposal, not a guarantee. A reader scanning for a word they already know may jump straight to it regardless of your arrangement. So the test is not whether every reader follows your path. It is whether the information they need is easy to find, and whether the details they will need afterwards are still there when they look.`,
        ],
      },
      {
        title: 'Start with a plain ranked ticket',
        paragraphs: [
          `For the entrance moment, the ranking is Gate C first, Admission 19:15 second, Museum Night third. Now let the layout follow it. Put the gate high on the ticket with clear space around it. Group the admission time just below. Reduce the event name's size and decoration so it stops competing. Everything stays readable; the event name is still there and still findable. The diagram records this order by position. It is not a specification of type sizes or contrast.`,
          `Then check it the way a visitor would meet it. Hold the sketch at arm's length, or photograph it and look at the small image on your phone. Before you consult your ranked list, notice what your eye lands on first. If the event name still wins, take away one of its signals, its size or its decoration or its contrast, rather than turning up everything else to compete. Loudness all round is not hierarchy.`,
          `Keep in mind that a different moment may want a different order. Finding this ticket in a drawer full of tickets is a task where the event name matters most. Rank for the moment you are designing for, and say which moment that is.`,
        ],
      },
      {
        title: 'What louder cannot fix',
        paragraphs: [
          `The first mistake is enlarging the whole ticket, event name included. Everything is bigger and the gate is still lost, because the competition has not changed. The second is restyling the title in a more expressive typeface when visitors can already name the event perfectly well and are searching for the gate. The problem was never the title's appearance. It was the title's volume relative to the gate.`,
          `A quieter mistake is deleting identity to make room. A library notice announcing a room change needs the new room number to be easy to find, but it still needs enough of the club's identity for members to recognize it as theirs. Reduce the competing emphasis; do not remove the recognition.`,
          `Two habits. Before arranging anything, write the reader's questions in the order they will ask them at the moment of use. And when something unimportant still dominates, turn that one thing down rather than turning everything else up.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The proposed entrance-reading order',
        alt: 'Gate C is placed first, Admission 19:15 below it, and Museum Night lower on the ticket.',
        caption: `Read from the top: the gate first, then the time, then the event name. That is the visitor's order at the door, with the brand name moved off the front of the medicine box. Position records the ranking here; the finished ticket also needs its type size, weight, and contrast checked, and the reading order is a proposal, not a guarantee.`,
        items: [
          { label: 'GATE C', detail: 'First: where to enter.', x: 50, y: 18, shape: 'paper' },
          { label: 'Admission 19:15', detail: 'Next: when entry begins.', x: 50, y: 50, shape: 'paper' },
          { label: 'Museum Night', detail: 'Then: event identity.', x: 50, y: 82, shape: 'paper' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper and pencil', 'Optional phone camera'],
      steps: [
        `Draw a fictional ticket with Museum Night, Gate C, and Admission 19:15, and make the event name dominant in this first draft. You need the wrong version in front of you to feel what it does to the gate.`,
        `On a separate line, write the ranked list for a visitor standing at the entrance: gate, then time, then event identity. This list is the brief, and it comes from the reader's moment, not from your drawing.`,
        `Revise position, size, or the space around the gate so it has the strongest useful emphasis, changing one competing signal at a time so you can see which change did the work.`,
        `Look at the sketch small, at arm's length or as a phone photo, and write what you noticed first. Compare that with your ranked list, and confirm every detail is still present and readable.`,
      ],
      notice: `The gate is now the easiest thing to find, and you got there without making anything shout. The event name is quieter but still legible, so a visitor can confirm the ticket and then go straight to the information they need.`,
      troubleshooting: `If the title still dominates after your first change, resist the urge to enlarge every other line to compete with it. That just makes a louder ticket with the same ranking. Instead take one signal away from the title, its size or its decoration, and look again at arm's length.`,
    },
    recall: {
      prompt: 'A library notice announces a room change, but its large club logo attracts attention before the new room number. What should determine the revision?',
      answer: `The reader's need at the moment they meet the notice, which is the new room. Make the room number the easiest thing to find and turn the logo down so it stops competing, while keeping enough of the club's identity for members to recognize the notice as theirs. It is the medicine box turned so the dose faces you, with the brand still visible on the side.`,
      hint: 'Rank what the reader needs to know at this moment.',
    },
    quiz: {
      question: 'Visitors can name the ticket\'s event but repeatedly search for the gate. Which revision best targets the observed problem?',
      options: ['Enlarge the whole ticket, including the already dominant event name', 'Choose a more expressive display typeface for the event name', 'Reduce competing title emphasis and give the gate a clearer position'],
      correctIndex: 2,
      explanation: `The visitors' behavior says the event name is already winning and the gate is losing, so the fix is to change the relative signals around the gate: quieten the title and move the gate to a clear position. Enlarging everything keeps the same competition at a bigger size. A more expressive title typeface restyles the thing that was already too loud.`,
    },
    takeaway: 'Rank the reader\'s task before ranking the visual emphasis.',
    sourceNote: 'Nielsen Norman Group and Getty discuss visual hierarchy and emphasis. Ticket observations are hypothetical; this exercise does not claim a measured reading sequence.',
  },
  {
    id: 'design-022',
    title: 'Choose text roles before adding another typeface',
    outcome: `Name the jobs the text must do, try one type family for all of them, and add a second family only when it does a specific job better, tested with real title and paragraph words.`,
    scene: 'A self-written chapbook titled Small Rain needs an expressive heading and a comfortable reading paragraph.',
    sections: [
      {
        title: 'Two roles do not automatically need two families',
        paragraphs: [
          `You have written a small book of poems called Small Rain and you are laying out the first page. The opening line is The roof holds yesterday's rain. You want the title to have a voice of its own, something with character, and you want the poem underneath to be easy to read for pages at a stretch. So you open the font menu and start browsing. An hour later you have eleven favorites and no page.`,
          `The browsing was the wrong first step. Before any font name, write down the jobs. There are two here. Display text introduces the piece; it is seen once, briefly, and can afford to be expressive. Body text supports sustained reading; it has to disappear into the words. Those are the roles. One type family often has enough range, a bold weight, an italic, a bigger size, to do both. Two roles do not automatically mean two families. They mean two jobs that need doing well.`,
        ],
      },
      {
        title: 'Difference should explain a role',
        paragraphs: [
          `Think of knives in a kitchen drawer. One good chef's knife does nearly everything. You add a bread knife when you are actually sawing crusty loaves and the chef's knife is tearing them. You do not add it because the drawer looks sparse, and you do not add a third knife to make the first two feel like a set. Every knife has to earn its place by doing a job the others cannot. A second typeface is a second knife.`,
          `Some vocabulary helps the comparison. A type family is a set of related styles drawn to work together, such as regular, bold, and italic. A second family brings different letter constructions and proportions, and one more thing to coordinate. Serif type has small finishing strokes at the ends of many main strokes. Sans serif, as the name says, lacks them. People repeat that a serif and a sans always pair well. They do not, automatically. And two sans families are not automatically a clash. The category tells you little.`,
          `What to compare instead: how large each face looks at the same setting, the proportions of its lowercase, its stroke weight, its spacing, and whether it carries the characters you need. A display face that makes a lovely title may have no italic, or no accented letters for a name in your poems. Similarity between the two faces can connect the roles; difference can separate them. Neither exact x-height matching nor maximum contrast is a rule.`,
        ],
      },
      {
        title: 'Make the second family earn its place',
        paragraphs: [
          `Start with one knife. Set Small Rain in your chosen family's bold and the poem in its regular, at the real page width and the real reading size. Look at it as a page, not a specimen. Does the title have enough voice? Does the poem read comfortably? Often the answer to both is yes, and you are done.`,
          `If the title feels flat, now try a second family, but only for the title. Leave the poem, the page width, and the size exactly as they were, so you are changing one thing. Then read the title and several real lines of the poem together, not the font's name and not an alphabet sample. Ask what the second family adds. A distinct voice that the first family could not supply is a reason. A faint mismatch that looks like an accident is not, and you go back to the single family.`,
          `The role diagram shows a title, an opening paragraph, and a page number in their positions. It is a plan of jobs, not a preview of any font file. Check your actual chosen fonts at the intended size, with the punctuation and the accented names your poems contain.`,
        ],
      },
      {
        title: 'When variety is the wrong goal',
        paragraphs: [
          `The first mistake is adding a family to add variety. A festival program with clear headings and readable paragraphs in one family does not need a second one until a specific role goes unmet, such as a performance title that needs its own voice or a language that needs characters the first family lacks. Name the missing job before you name a font.`,
          `The second mistake is bridging a bad pair with a third face. The heading font looks appealing on its own but has almost the same proportions as the body font and an awkward weight gap, so a third family goes in to smooth things over. Now there are three knives and the drawer is worse. Compare the adjusted two-family version against the one-family baseline instead, and keep whichever reads better as a page.`,
          `Two habits. Before opening the font menu, write the roles the text must fill and try to fill them all with one family. And when you test a second family, change only the title, read real sentences, and write one line saying what the new face does that the old one could not.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A chapbook page with distinct type jobs',
        alt: 'Small Rain introduces the page, the original opening paragraph sits below, and a page number occupies a separate lower position.',
        caption: `Read the three labels as three jobs first: introduce, keep reading, navigate quietly. Then ask which of them one family could do on its own. This is a spatial role plan, not a font specimen; compare real previews using these words before deciding the title needs a second family.`,
        items: [
          { label: 'Small Rain', detail: 'Display role: introduce the piece.', x: 34, y: 20, shape: 'paper' },
          { label: 'The roof holds', detail: 'yesterday\'s rain. Body role: keep reading.', x: 34, y: 54, shape: 'paper' },
          { label: '12', detail: 'Page number: quiet navigation.', x: 76, y: 84, shape: 'paper' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Existing font previews or a document app, or pencil and paper'],
      steps: [
        `Use Small Rain as the title and write three sentences of your own about rain for the body. Before choosing any style, write the two roles down, because the roles are the brief and the fonts are candidates for it.`,
        `Set both in one family you already have, bold for the title and regular for the body. If you have no font controls, sketch the placement and label the intended roles. This is the one-knife version and it is your baseline.`,
        `If previews are available, change only the title to a second family and hold the body text, the width, and the reading size steady. Changing one thing is what lets you credit the second family for whatever changes.`,
        `Read both versions as pages and write one line naming what the second family adds. On paper, write down the font-preview check that still needs doing rather than pretending the sketch completed it.`,
      ],
      notice: `Either the second family has a stated purpose, a job the first could not do, or you have a clear reason to keep the simpler one-family page. Both are good outcomes. What you no longer have is a font chosen because it looked nice in a menu.`,
      troubleshooting: `If the two faces look slightly different in a way that seems accidental rather than intended, compare their apparent size and stroke weight at the real setting before you do anything else. Adjusting those may resolve it, or it may show the pairing has no job to do. Do not reach for a third family to bridge the gap; that is a third knife in a drawer that needed one.`,
    },
    recall: {
      prompt: 'A festival program already has clear headings and readable paragraphs in one family. When would another family be worth testing?',
      answer: `When a specific role is still unmet, such as a performance title that needs its own voice or a language whose characters the first family does not carry. That is the bread knife bought because you are actually sawing bread. Test the candidate on that one role with real program text, and if it does not do the job better than the first family, keep the single family.`,
      hint: 'Name the missing job before naming a font.',
    },
    quiz: {
      question: 'A proposed heading font looks appealing alone but has nearly the same proportions as the body font, with an awkward weight mismatch. What is the best next comparison?',
      options: ['Add a third font to bridge the difference', 'Match nominal sizes and assume the pairing is resolved', 'Compare adjusted roles against the original single-family version'],
      correctIndex: 2,
      explanation: `The one-family page is the baseline, and the only question that matters is whether the two-family version, after adjusting size and weight, does a job better than that baseline. A third font is another knife added to fix a drawer that already has one too many. Matching nominal sizes changes a number without showing that the pairing serves either role.`,
    },
    takeaway: 'A second typeface should do a needed job better than the first family can.',
    sourceNote: 'Google Fonts Knowledge and Apple provide typography guidance. The chapbook text and role diagram are original; no serif-sans pairing or metric guarantees readability.',
  },
  {
    id: 'design-023',
    title: 'Check the small repair-workshop details on a phone',
    outcome: `Read the smallest necessary text at its real size before admiring the heading, and treat a contrast ratio as one measured check that neither rounds up nor stands in for legibility.`,
    scene: 'A repair-workshop flyer has a readable heading but faint date and venue text when fitted to a phone screen.',
    sections: [
      {
        title: 'The heading is not the information that failed',
        paragraphs: [
          `You have made a flyer for a repair workshop and it looks sharp on your laptop. The heading is big and friendly. Then a neighbor opens it on an older phone, and the picture is scaled to fit the screen. The heading still reads perfectly. But Saturday 14 November and Library room, the two lines a visitor actually needs, have faded into pale gray threads. Your neighbor asks what day it is. The flyer has told them everything except that.`,
          `This is a common pattern. Designers check the part they are proud of, and the part they are proud of is rarely the part that fails. Inspect the smallest necessary text at the size it will really be seen, from a comfortable distance, at ordinary brightness. And when it fails, ask why, because there are several different reasons. Thin strokes, condensed letters, characters that look alike, weak contrast with the background, or a busy picture behind the words each cause a different problem with a different fix.`,
        ],
      },
      {
        title: 'Measure contrast without rounding a failure upward',
        paragraphs: [
          `Think about a car's annual inspection. The emissions test comes back with a pass, and that is good news about the exhaust. It says nothing about the brakes, which are checked separately. Nobody drives off saying the whole car is fine because one meter read green. And if the pass mark on the emissions reading is 50 and the car scores 49.6, it fails. The inspector does not round it up to be kind, because the threshold is the threshold.`,
          `Contrast ratio is the emissions test of text. It measures one thing: how different in brightness the text color and the background color are. For web text, WCAG 2.2 at Level AA ordinarily requires at least 4.5 to 1, with a lower 3 to 1 threshold for large text and some defined exceptions. Large has a precise meaning here: at least 18 point regular or 14 point bold. It does not mean any text you decided to call a heading. The ratio is calculated from the relative luminance of the actual colors, which is not the same as subtracting one RGB number from another.`,
          `Here are the numbers for the flyer. Gray #777777 on white #FFFFFF gives a ratio of about 4.478 to 1. That is below 4.5, so it fails for ordinary text, and no amount of rounding turns 4.478 into 4.5. Darker gray #595959 on the same white gives about 7.005 to 1, comfortably above. The ratios here are rounded for explanation; conformance is decided from the unrounded calculation. And remember the brakes. Passing the ratio does not mean tiny or thin letters will be comfortable to read.`,
        ],
      },
      {
        title: 'Revise the weak detail and test it again',
        paragraphs: [
          `For the flyer, darken the date and venue text, give those two lines enough size and weight, and put them on a plain patch of background rather than over the illustration. Then look at the whole thing at phone size again. Notice what is not on that list: making the heading bigger. The heading was never the problem, and enlarging it steals room from the lines that were.`,
          `Test with the awkward characters your real content contains, not just the event name you already know by heart. Try Room I1, where a capital I, a lowercase l, and a digit 1 can be impossible to tell apart in some typefaces. If it stays ambiguous, you may need a clearer typeface or simply clearer wording, such as Room I, first floor.`,
          `Be modest about what each check proves. A screenshot scaled to a phone checks that shared image at that size. It does not prove that live text on a web page will resize, and it is not an accessibility audit. For contrast, calculate from the colors you specified rather than sampling a screenshot, because compression and smoothing change the pixels. And if your neighbor can now read the date, that is one reader's feedback, not evidence that every reader will manage.`,
        ],
      },
      {
        title: 'What a passing ratio cannot tell you',
        paragraphs: [
          `The first mistake is treating the ratio as the whole task. A train-seat label can pass its measured contrast and still leave I, l, and 1 indistinguishable, because the ratio only measures color. Letter shapes, size, weight, and context have to be tested on their own, at the real size. The second mistake is rounding. A caption at 4.49 to 1 is below the 4.5 threshold. Displaying it as 4.5 does not change what it is.`,
          `The third mistake is borrowing the large-text threshold because something is styled as a heading. The 3 to 1 allowance belongs to text that meets the defined size, 18 point regular or 14 point bold, not to anything that looks important.`,
          `Two habits. Before you sign off a layout, find the smallest text a reader needs and read it at the real size on the real device, before you look at anything you are proud of. And when you measure contrast, use the specified colors, compare the unrounded result to the threshold, and then go and check the brakes.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Two detail-text colors on white',
        alt: 'Gray 777777 falls below ordinary-text contrast on white, while darker gray 595959 exceeds that threshold.',
        caption: `Look at the first chip and read its ratio: about 4.478 to 1, just under the 4.5 line, like a 49.6 against a pass mark of 50. Then compare the darker chip at about 7.005 to 1. These are opaque sRGB examples on #FFFFFF, the displayed ratios are rounded for explanation rather than being pass decisions, and the chips say nothing about font size or weight.`,
        items: [
          { label: 'Initial text', detail: '#777777: about 4.478:1 on white; below 4.5.', color: '#777777' },
          { label: 'Specified background', detail: '#FFFFFF: the background in both calculations.', color: '#FFFFFF' },
          { label: 'Darker text', detail: '#595959: about 7.005:1 on white.', color: '#595959' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Pencil and paper', 'A phone camera if available'],
      steps: [
        `Make a small fictional flyer with three lines: Repair workshop, Saturday 14 November, and Library room. All three must be there, because the test is about the two small ones surviving next to the big one.`,
        `Photograph it and fit the whole flyer onto your phone screen without zooming. If you have no camera, make a much smaller paper copy instead. Either way you are seeing it the way the neighbor did.`,
        `Read the date and the venue before you let yourself look at the title. Then darken, enlarge, or clear the background behind whichever detail was weakest, changing the detail and not the heading.`,
        `Compare the revised version at the same small size. Treat the color ratios in this lesson as a separate worked example of the measured check; they are not a measurement of your pencil marks.`,
      ],
      notice: `The details a visitor needs are now easier to pick out in the view they will actually get, and you handled contrast and size as two separate questions. The heading did not need to change at all, which is usually how this goes.`,
      troubleshooting: `If glare from a window or lamp is washing out the phone screen, move before you judge anything, because glare makes every design look faint. Do not fix the glare by turning the brightness to maximum and calling that the test. Readers use their phones at ordinary brightness, and that is the condition your small text has to survive.`,
    },
    recall: {
      prompt: 'A train-seat label passes its measured text contrast, but I, l, and 1 are difficult to distinguish. What remains to be tested?',
      answer: `The letter shapes, the size, the weight, and the surrounding context, all at the real display size. The contrast ratio is the emissions test: it measured the color relationship and that passed. The brakes, whether the characters are actually distinct from one another, were never part of that measurement and have to be checked separately.`,
      hint: 'The ratio measures a color relationship, not the construction of letters.',
    },
    quiz: {
      question: 'A small ordinary-text caption measures 4.49:1 against its background. Which decision follows from the 4.5:1 AA threshold?',
      options: ['Change the pair and remeasure because it is below the threshold', 'Round the displayed ratio to 4.5 and accept it', 'Use the 3:1 threshold because the caption is styled as a heading'],
      correctIndex: 0,
      explanation: `A 4.49 is a 49.6 against a pass mark of 50: below the line, so the colors have to change and the result has to be measured again. Rounding the display to 4.5 changes the label, not the ratio. The 3 to 1 allowance belongs to text that meets the defined large size, 18 point regular or 14 point bold, and a small caption styled to look like a heading does not qualify.`,
    },
    takeaway: 'Read the smallest needed information and measure contrast without mistaking either check for the whole task.',
    sourceNote: 'Apple and Google Fonts references are retained; W3C Contrast (Minimum) is added for the checked thresholds. The flyer trial is not a full accessibility audit.',
    sources: [
      { title: 'Human Interface Guidelines: Typography', url: 'https://developer.apple.com/design/human-interface-guidelines/typography', publisher: 'Apple' },
      { title: 'How type influences readability', url: 'https://fonts.google.com/knowledge/readability_and_accessibility/how_type_influences_readability', publisher: 'Google Fonts Knowledge' },
      { title: 'Understanding WCAG 2.2: Contrast (Minimum)', url: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html', publisher: 'W3C Web Accessibility Initiative' },
    ],
  },
  {
    id: 'design-024',
    title: 'Let the signup layout grow with its words',
    outcome: `Stress-test a layout with the longest realistic text and with reader spacing overrides, letting containers grow and content move down rather than clipping words or shrinking letters.`,
    scene: 'A sketch-walk signup panel must expand from a short title to a longer accessible description.',
    sections: [
      {
        title: 'The short title concealed a fixed-height assumption',
        paragraphs: [
          `You have designed a tidy signup panel for a phone screen. The title says Sketch walk. Under it sit the date, the meeting point, and a Join button. It fits beautifully. Then the organizer asks for a clearer title: Saturday sketch walk for first-time visitors. You type it in, it wraps to a second line, and the second line lands on top of the date. The panel that looked finished was finished only for the two words you happened to test it with.`,
          `The short title hid an assumption that the title would always be one line tall. That is a fixed-height assumption, and nearly every layout has one somewhere until real words find it. Real titles are long. Real names have accents and hyphens. Real readers change their text settings. Typographic craft is not only polishing the sample; it is making room for what the sample left out.`,
        ],
      },
      {
        title: 'Growth should move the following content',
        paragraphs: [
          `Think of packing a lunchbox. You chose the box to fit a sandwich, because a sandwich was what you tested with. Then the real lunch includes an apple. You do not slice the apple thin to make it fit, and you do not leave it out and call the lunch complete. You get a bigger box, and everything else in the bag shifts along to make room. The box serves the lunch. The lunch does not serve the box.`,
          `The panel is the lunchbox. Let the title wrap, let its container grow taller, and move the date and the button down by the same amount so they keep their relationship to each other. Shrinking the letters to squeeze the long title onto one line is slicing the apple. Quietly dropping the words first-time visitors is leaving it out. Both keep the box tidy and lose the lunch. In a working interface, press the button after the layout has grown. The text being visible is not enough if the action no longer works.`,
          `Readers add a second kind of growth. Web accessibility guidance on text spacing, WCAG Text Spacing, tests whether a page still works when a reader overrides its spacing with these minimums at once: line height 1.5 times the font size, space after paragraphs 2 times, letter spacing 0.12 times, word spacing 0.16 times. These are test values. They are not spacing you must author by default, and they are not a ceiling on what a reader may ask for.`,
        ],
      },
      {
        title: 'Use a concrete stress-test sheet',
        paragraphs: [
          `Put numbers on it. At a 16 pixel font size, the override values are 24 pixels of line height, 32 pixels after each paragraph, 1.92 pixels of letter spacing, and 2.56 pixels of word spacing. The last two are extra space added between letters and between words, not the width of a letter or of a whole space character. Hold the font size at 16 while you apply them. Resizing text is a separate test, and mixing the two would hide which one broke the layout.`,
          `On paper, you can get most of the way. Write the long title with looser line spacing and wider gaps between words, then move everything below it down. That exposes the fixed-height assumption with nothing but a pencil. What paper cannot do is prove that a live web page survives the real overrides. That still needs testing in a browser, with the settings actually applied, and with a check that the content and the button both still work. Some writing systems have exceptions in the guidance, so check which ones apply to your text.`,
          `One trap to name: a bigger photograph of the original panel proves nothing. It enlarges the pixels of the short-title version. It does not show the layout reflowing or the spacing changing.`,
        ],
      },
      {
        title: 'What a tidy box is worth',
        paragraphs: [
          `The first mistake is defending the box. A booking button grows to two lines when a reader changes spacing, its bottom line is clipped, and the fix proposed is to hide the second line or to cap the spacing the reader asked for. Both keep the original height and break the reader's control. Give the button enough room, let it wrap, move its neighbors, and press it again.`,
          `The second mistake is misreading the test values as defaults. A page that drops a date when the overrides are applied needs its layout revised so the overrides lose nothing. It does not need every page restyled to those exact numbers. And a screenshot at default spacing cannot settle the question, because the failure only appears when the spacing changes.`,
          `Two habits. Before you call a layout done, test it with the longest realistic text and make the following content move down to make room. And test it with spacing overrides at a fixed font size, confirming that every word is still visible and every action still works.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The expanded panel keeps its reading order',
        alt: 'A wrapped sketch-walk title occupies the upper region, with date details and a Join action moved below it.',
        caption: `Look at how much height the wrapped title takes first, then notice that the date and the Join button have moved down rather than being covered. This is the bigger lunchbox: schematic reflow where title growth pushes the content below it without clipping anything.`,
        items: [
          { label: 'Wrapped title', detail: 'More lines require more height.', x: 50, y: 18, shape: 'paper' },
          { label: 'Date and meeting point', detail: 'Move down with the title.', x: 50, y: 52, shape: 'paper' },
          { label: 'Join', detail: 'Remains visible and usable.', x: 50, y: 86, shape: 'box' },
        ],
      },
      {
        type: 'bars',
        title: 'Spacing overrides at 16 px',
        alt: 'The example override values are twenty-four pixels for line height, thirty-two for paragraph spacing, 1.92 for letter spacing, and 2.56 for word spacing.',
        caption: `Read each bar as 16 multiplied by its factor: 1.5, 2, 0.12, and 0.16. The two tall bars are line and paragraph room; the two tiny ones are extra space between letters and between words. Apply all four together as one test, not as a sum.`,
        unit: 'CSS px at 16 px font size',
        items: [
          { label: 'Line height', detail: '16 x 1.5 = 24.', value: 24 },
          { label: 'After paragraph', detail: '16 x 2 = 32.', value: 32 },
          { label: 'Letter spacing', detail: '16 x 0.12 = 1.92.', value: 1.92 },
          { label: 'Word spacing', detail: '16 x 0.16 = 2.56.', value: 2.56 },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Pencil', 'Paper', 'Optional existing layout app with spacing controls'],
      steps: [
        `Draw a phone-width panel with Sketch walk, Saturday at 10, Library steps, and a Join button, fitted neatly. This is the sandwich-sized box, and you need it in front of you to see what it assumed.`,
        `Redraw it with the title Saturday sketch walk for first-time visitors at the same letter size, allowing as many title lines as it needs. Keeping the letters the same size is the rule that stops you from slicing the apple.`,
        `Loosen the line spacing and widen the word gaps on paper, then move the date, the meeting point, and the button down below the taller title block. You are simulating a reader's spacing overrides.`,
        `Check that every word is still present and the button still has room. Write down that a live layout needs the real overrides applied in a browser and a working button test, because the paper version only checks the plan.`,
      ],
      notice: `The long version carries its full message and its action without any smaller letters, and the content below the title moved rather than being covered. The box grew to fit the lunch, which is the habit the short sample was hiding from you.`,
      troubleshooting: `If the drawing runs out of room at the bottom of the page, extend the page. The temptation is to drop the meeting point or shrink the button to stay inside the rectangle you first drew, and that is exactly the fixed-height assumption reasserting itself. The boundary serves the content, so move the boundary.`,
    },
    recall: {
      prompt: 'A library booking button grows to two lines after a reader changes spacing, and its bottom line is clipped. What should change?',
      answer: `The button's container, not the reader's spacing. Give it enough height to show both lines, let the text wrap properly, move the content below it down if needed, and then press the live button to confirm it still works. Hiding the second line or capping the spacing keeps the old box tidy by taking something away from the reader, which is slicing the apple to fit the lunchbox.`,
      hint: 'The container should accommodate the text, not require text to conceal its overflow.',
    },
    quiz: {
      question: 'A website works at default spacing but loses a date when the specified reader overrides are applied. Which conclusion is justified?',
      options: ['The defaults must be replaced by those exact values on every page', 'The layout needs revision so the overrides do not lose content or function', 'The default screenshot establishes that the original design is sufficient'],
      correctIndex: 1,
      explanation: `The guidance tests whether a page survives the overrides, so losing the date means the layout has to be revised until nothing is lost and everything still works. The override values are test conditions, not a style every page must adopt by default. And a screenshot at default spacing cannot show anything about the failure, because the failure only appears once the spacing changes.`,
    },
    takeaway: 'Test realistic text growth and reader spacing before polishing the sample layout.',
    sourceNote: 'W3C Text Spacing was checked; Apple remains inherited. Paper does not prove conformance, applicability, or correct handling of script exceptions.',
  },
]