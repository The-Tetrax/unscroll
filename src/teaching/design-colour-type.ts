import type { LessonGuide } from './types'

// Original examples and illustration specifications. Existing sources are inherited by ID.
// Hex colors describe screen swatches, not measured pigments or calibrated reproductions.
// Practice budgets and schematic dimensions are examples, not tested efficacy or beauty rules.
export const designColourTypeGuides: LessonGuide[] = [
  {
    id: 'design-001',
    title: 'Make the pear visible before choosing its green',
    outcome: 'Separate a subject from its background using light and dark before adding color detail.',
    scene: 'A small orchard-market poster loses its pear silhouette when viewed from across a room.',
    sections: [
      {
        title: 'A poster with a disappearing subject',
        paragraphs: [
          'Your orchard-market poster has a green pear on a green field. Close up, the stem and speckled skin look convincing. From across the room, the pear becomes difficult to locate. Adding more speckles will not fix the large shape. Before changing the lettering or trying another fruit, compare how light or dark the pear looks against the area touching its edge. That boundary carries more information about its silhouette than the tiny surface marks do.',
        ],
      },
      {
        title: 'Value is a relationship between areas',
        paragraphs: [
          'Value means apparent lightness or darkness. Hue names the color family; a different hue does not necessarily create a different value. A red shape and a green shape can still be difficult to separate in a small image. Squint gently or make a small pencil study to reduce the distraction of surface detail. Identify a light group, a middle group, and a dark group.',
          'These are groups for this study, not a requirement that all art contain exactly three tones. Keep neighboring parts distinct where recognizing the subject depends on their boundary. Not every leaf or speckle needs equal emphasis.',
        ],
      },
      {
        title: 'Change the field, keep the pear',
        paragraphs: [
          'In the example palette, the pear is #35654D and the original field is #486754. Both are relatively dark greens. Keep the pear unchanged and replace the field with pale ivory, #F3EBDD. The larger light-dark difference now supports the silhouette. An orange stem is optional decoration, not the structural repair.',
          'Redraw the poster as three pencil masses before restoring its color. If the silhouette reads in the small study, put back only the details that help. A phone grayscale preview is another comparison, but its conversion can rank hues differently from your judgment; it is not an accessibility certificate.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'One pear, two possible fields',
        alt: 'A dark green pear swatch is compared with a similarly dark green field and a pale ivory replacement.',
        caption: 'Compare the unchanged pear with each field. These specified screen colors illustrate separation, not calibrated paper or exact grayscale equivalents.',
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
        'Draw two small poster rectangles. Give each the same pear outline, stem, and short market title.',
        'Shade the first pear and field to similar middle-dark values. Leave out the speckles.',
        'Keep the second pear equally dark, but leave its field mostly unshaded. Compare both from a comfortable distance.',
        'Circle the version with the clearer silhouette and label its light, middle, and dark groups. A phone photo is optional.',
      ],
      notice: 'The pear separates without needing a new outline, hue, or extra surface marks.',
      troubleshooting: 'If both pears merge, enlarge their main shape or strengthen the field difference before adding detail.',
    },
    recall: {
      prompt: 'A blue bicycle icon disappears on a dark purple route map. What relationship would you test before drawing more spokes?',
      answer: 'Test a lighter field or a lighter icon while holding the shape steady. Different color names do not guarantee enough light-dark separation.',
      hint: 'Temporarily replace the colors with broad pencil tones.',
    },
    quiz: {
      question: 'A leaf illustration reads close up but disappears in a thumbnail. Which first revision tests its large-scale separation?',
      options: ['Increase the saturation of both greens', 'Lighten the surrounding field while keeping the leaf fixed', 'Sharpen the small veins inside the leaf'],
      correctIndex: 1,
      explanation: 'Changing the surrounding value tests the missing boundary. Saturation or sharper veins can leave the large light-dark relationship unchanged.',
    },
    takeaway: 'Fix the important light-dark boundary before decorating either side of it.',
    sourceNote: 'Tate and Getty provide value vocabulary. The poster and swatches are original teaching examples, not measured visibility results.',
  },
  {
    id: 'design-002',
    title: 'Specify whether the green needs darkening or muting',
    outcome: 'Distinguish a hue shift, a value change, and a saturation change when revising one color.',
    scene: 'A basil illustration competes with the title on a homemade recipe-book cover.',
    sections: [
      {
        title: 'Too bright does not identify the problem',
        paragraphs: [
          'You are drawing a cover for a small recipe collection. The basil leaves seem too bright beside the title. That complaint could mean the leaves look too light, too intensely green, or simply occupy too much space. Each diagnosis suggests a different change. First name what you want to keep: the leaves should remain recognizably green, keep their shape, and stop competing with the title. Now you have a comparison to make rather than a slider to push at random.',
        ],
      },
      {
        title: 'Three properties, three questions',
        paragraphs: [
          'Hue identifies a color family, such as green rather than blue. Value describes apparent lightness or darkness. Saturation describes how intense or muted the color appears. A pale green can be light but fairly muted; a dark green can still look richly colored. These properties are related in perception, but they are not interchangeable descriptions.',
          'Ask whether the family is wrong, the light-dark relationship is wrong, or the intensity is distracting. Digital controls called brightness, saturation, and hue do not always isolate one perceptual property. Watch the result beside its actual neighbors instead of treating the control label as a guarantee.',
        ],
      },
      {
        title: 'Compare separate revisions',
        paragraphs: [
          'The cover study starts with green #2F8F57. A muted candidate, #687A6E, keeps a green tendency while reducing its intensity. A darker candidate, #17482C, tests a different solution. Blue #2F578F changes the family instead. These are selected examples, not a mathematically equal-value set or the output of one particular slider.',
          'For this cover, compare the muted candidate first because the goal was to reduce color competition without deliberately changing family. If the title still disappears, inspect its value and size separately. Do not report a successful saturation adjustment when the real improvement came from making the entire cover lighter.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Four basil-cover candidates',
        alt: 'The initial green sits beside a muted green, a darker green, and a blue hue alternative.',
        caption: 'Read the intended change under each chip. The values are not perceptually matched; no slider is claimed to produce these exact alternatives.',
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
        'Choose one green area. Write what should stay unchanged and whether lightness or intensity bothers you.',
        'On a duplicate photo, preview lower saturation, then reset. Without editing controls, compare the first two swatches.',
        'Preview a darker version separately, or compare the first and third swatches. Note what changed besides your target.',
        'Keep one candidate and a sentence explaining its purpose. Preserve the original photo rather than overwriting it.',
      ],
      notice: 'Your revision note names a property instead of saying make it less bright.',
      troubleshooting: 'If both changes help, compare them one at a time beside the title; the problem may involve two relationships.',
    },
    recall: {
      prompt: 'An orange door in your painting is the right lightness but overwhelms the room. What would you test while keeping it orange?',
      answer: 'Try a less saturated orange, then recheck its value against the wall. Muting is the target; the chosen paint or digital adjustment might also alter lightness.',
      hint: 'Separate intensity from the color family and the amount of light-dark separation.',
    },
    quiz: {
      question: 'A blue background needs to become lighter without deliberately becoming greener. Which brief states the target most clearly?',
      options: ['Shift its hue toward cyan', 'Reduce its saturation until it looks gray', 'Raise its value, then check that it still reads as blue'],
      correctIndex: 2,
      explanation: 'The brief targets lightness while checking the family. A hue shift changes blue toward cyan; desaturation targets intensity, not necessarily the required lightness.',
    },
    takeaway: 'Name the color property, change it deliberately, and inspect any side effects.',
    sourceNote: 'Getty and Blackmagic Design support the terminology. The cover palette is illustrative; digital controls and pigment mixtures are not perceptually independent.',
  },
  {
    id: 'design-003',
    title: 'Keep the gray sample fixed and move its surround',
    outcome: 'Separate a contextual change in apparent lightness from a physical change to a sample.',
    scene: 'A pencil drawing is tried against a charcoal mount and a pale mount before framing.',
    sections: [
      {
        title: 'The drawing has not been redrawn',
        paragraphs: [
          'You place a pencil drawing on dark mounting paper, then on a pale sheet. Its middle-gray shading seems different even though you have not touched the pencil. It would be easy to darken the drawing to compensate, then discover that it looks wrong on the first mount. Hold off on editing. The drawing is one part of the view; the area beside it is another. To understand the change, keep the sample fixed while changing only its surround.',
        ],
      },
      {
        title: 'Apparent lightness depends on context',
        paragraphs: [
          'Simultaneous contrast describes how nearby areas influence one another\'s appearance. A middle gray commonly looks lighter beside a dark field and darker beside a light field. The visual system responds to relationships and boundaries, not just to isolated patch values. The effect depends on the arrangement and viewing conditions, so it need not look equally strong to everyone.',
          'A physical change would mean adding graphite, changing the illumination reaching the paper, or altering the image data. Moving the same scrap between surrounds under steady light changes its context instead. Keeping those possibilities separate stops a perception exercise from becoming an unrecognized lighting experiment.',
        ],
      },
      {
        title: 'Choose the mount with the drawing in place',
        paragraphs: [
          'The diagrams put the same #808080 center between dark #202020 flanks, then pale #F2F2F2 flanks. The center code stays identical. Compare the centers, then cover the flanks with a common sheet. Their surrounding relationships change; their specified values do not.',
          'For a real mount, inspect the whole drawing at its intended size before deciding which surround supports its shading. Do not chase apparent differences by repeatedly editing the center. A screen example is a schematic comparison, not a promise that your pencil, paper, or display will match these colors exactly. The useful habit is controlling what changed.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Gray between dark flanks',
        alt: 'A gray center sits between two charcoal mounting-paper areas.',
        caption: 'The center is #808080 in both diagrams. Gaps separate labels; the paper experiment can use a continuous surround.',
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
        caption: 'Only the flanks change to #F2F2F2. Compare the center, not a claim that one image file became darker.',
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
        'Shade the small scrap evenly to a middle gray. Keep that single scrap for the whole comparison.',
        'Place it on the pale sheet, then the dark area, under the same light without changing your viewing angle.',
        'Write whether its apparent lightness changes. Move it back to check that the observation follows the surround.',
        'Cover most of each surround with the same sheet and compare again. Do not add graphite to the scrap.',
      ],
      notice: 'You can describe an appearance change while identifying the physical sample as unchanged.',
      troubleshooting: 'If little changes, enlarge the surrounds or reduce glare. Record a weak effect honestly rather than forcing a result.',
    },
    recall: {
      prompt: 'An unchanged gray icon seems brighter after an app switches to a dark theme. What would you hold constant before recoloring it?',
      answer: 'Keep its specified color, display brightness, and viewing conditions fixed while comparing the two backgrounds. The apparent change can come from context rather than altered icon data.',
      hint: 'Separate the patch from the neighboring field.',
    },
    quiz: {
      question: 'A scanned sketch looks different on two gallery backgrounds. Which comparison best isolates the surround?',
      options: ['Use the same image and screen settings on both backgrounds', 'Compare two independently edited scans', 'Increase brightness for the darker gallery page'],
      correctIndex: 0,
      explanation: 'Only the first comparison holds the sample and display steady. Editing the scan or changing brightness introduces another possible cause.',
    },
    takeaway: 'Compare an unchanged sample in context before correcting the sample itself.',
    sourceNote: 'Exploratorium Gray Step discusses contextual boundaries; this separate mount exercise does not reproduce its gradient artwork. The inherited Tate reference adds color context.',
  },
  {
    id: 'design-004',
    title: 'Say which blue is warmer than which',
    outcome: 'Describe relative color temperature without treating a hue as a universal emotional instruction.',
    scene: 'A rainy railway-platform painting needs two distinct blues and an amber shelter lamp.',
    sections: [
      {
        title: 'Two blues for the same platform',
        paragraphs: [
          'You are painting a quiet railway platform after rain. Both the roof and the puddles will be blue, but using one identical blue flattens their relationship. You try a violet-leaning blue for the roof and a greener blue for the puddles. Calling one warm and the other cool is shorthand for that comparison. It does not mean that the roof is physically hot, or that every viewer will attach the same feeling to the scene.',
        ],
      },
      {
        title: 'Temperature is relative here',
        paragraphs: [
          'Artists commonly group reds and oranges as warm and blues as cool. Within a family, the direction of a hue shift still matters. Against a greenish blue, a violet-leaning blue can be described as warmer because it leans toward red. Against an amber lamp, both blues can read as cool. Always name the pair rather than giving a swatch a permanent temperature rank.',
          'This artistic vocabulary is different from a lamp\'s correlated color temperature, which describes a light source using kelvin. Neither vocabulary supplies a universal emotion code. Setting, lighting, personal associations, and neighboring colors all influence interpretation.',
        ],
      },
      {
        title: 'Use the comparison to make a decision',
        paragraphs: [
          'For the platform study, compare violet-blue #5869A8 with green-blue #297E91, then add amber #D79A45 as the shelter lamp. Describe the visible shift first: the roof blue is redder than the puddle blue; the lamp differs from both. The chips also differ in value and saturation, so temperature alone does not explain every contrast.',
          'If you want the lamp to suggest a sheltered waiting place, support that intention with its position and the surrounding roof. That is your artistic proposal, not proof that orange always means comfort. Ask whether the painted light and surfaces support the intended reading before changing every cool area.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Roof, puddle, and shelter lamp',
        alt: 'Violet-blue roof, green-blue puddle, and amber lamp swatches make temperature comparisons visible.',
        caption: 'Compare a named pair. These illustrative colors are not equal-value samples, measured lighting, or a calibrated painting reproduction.',
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
        'Choose two blues under the same light, or use the roof and puddle examples. Name the pair in a note.',
        'Describe whether one leans greener or redder. Keep any lightness difference in a separate sentence.',
        'Sketch a roof, puddle, and lamp using written color labels if you have no colored pencils.',
        'Write one intended scene interpretation and the visible placement that supports it, without claiming everyone will feel it.',
      ],
      notice: 'Your temperature statement includes a comparison, while your interpretation remains an artistic choice.',
      troubleshooting: 'If the blues are hard to distinguish, use the supplied pair. Do not invent a difference your materials do not show.',
    },
    recall: {
      prompt: 'A costume designer calls a violet scarf warm beside a teal coat. Is that inconsistent with calling blue a cool family?',
      answer: 'No. The scarf can lean warmer relative to the greenish coat while both remain cool beside orange. The reference color changes the comparison.',
      hint: 'Ask what the scarf is being compared with.',
    },
    quiz: {
      question: 'Which revision note gives a painter an observable temperature target?',
      options: ['Lighten both blues by the same amount', 'Increase the saturation of both blues equally', 'Make the roof blue redder relative to the greenish puddle'],
      correctIndex: 2,
      explanation: 'The third note names a relative hue direction. Lightening targets value and increasing saturation targets intensity; neither specifies a warmer relationship between the blues.',
    },
    takeaway: 'Temperature language becomes useful when the comparison and artistic intention are stated separately.',
    sourceNote: 'Getty and Tate provide color relationships, not universal emotional predictions. The platform palette and interpretation are original illustrative choices.',
  },
  {
    id: 'design-005',
    title: 'Give each invitation color a job',
    outcome: 'Build a limited palette whose structure survives when its accent is covered.',
    scene: 'A folded seed-swap invitation uses cream paper, dark green information, and a terracotta seed motif.',
    sections: [
      {
        title: 'A small invitation with competing decisions',
        paragraphs: [
          'You are making a folded invitation for a seed swap. The heading, address, date, leaf border, and seed drawing could all get different colors. That produces more decisions than the message needs. Instead, begin with jobs: one surface to read on, one dependable information color, and one optional accent that identifies the seed motif. A limited palette means deliberately restricting the colors you coordinate, not choosing a fashionable trio and forcing every element into it.',
        ],
      },
      {
        title: 'Roles are more useful than quotas',
        paragraphs: [
          'A pale field and dark lettering can organize the invitation before the accent arrives. Reusing the information color connects the date and address without requiring a new legend. The accent can mark the small seed drawing beside the title, while ordinary text remains consistent. Nothing requires the three colors to occupy fixed percentages of the page.',
          'Complementary colors are opposites on a particular color wheel. Their relationship can help explain a contrast, but it does not prescribe equal areas or guarantee harmony. Different color models arrange opposites differently. A useful palette still needs a readable value structure and a clear purpose for each contrast.',
        ],
      },
      {
        title: 'Remove the accent as a check',
        paragraphs: [
          'Try cream #F5EBDD for the field, dark green #243F35 for all essential words, and terracotta #C55A30 for the seed motif. The accent is not assigned to tiny address text merely because it looks attractive in a palette. Its suitability for text would need a separate contrast and size check.',
          'Cover the seed motif. Can you still identify the event, date, and location? If not, repair their placement or value relationships. Restore the accent only after the invitation works without it. This does not forbid colorful work; it teaches you to distinguish a supporting color from one that is disguising a weak layout.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'A role-based seed-swap palette',
        alt: 'Cream is assigned to the paper field, dark green to essential information, and terracotta to a seed motif.',
        caption: 'The swatches show roles, not area percentages or approved text-contrast pairs. Cover the motif without removing information.',
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
        'Fold paper into a small invitation. Write Seed swap, Saturday at 11, and Community room as fictional details.',
        'Use pencil values or color labels to assign a field and one essential-text color. Keep every practical detail readable.',
        'Add a small seed motif in a third color, or outline it and label it accent if working only in pencil.',
        'Cover the motif. Fix any lost event, time, or location information before deciding whether to restore the accent.',
      ],
      notice: 'The essential message survives without the third color, and every retained color has a stated role.',
      troubleshooting: 'If the invitation becomes confusing when covered, move or darken its information instead of introducing a fourth color.',
    },
    recall: {
      prompt: 'A walking-club map uses orange only for the meeting point. What must remain understandable if orange is unavailable?',
      answer: 'The meeting point needs a label or distinct symbol and usable light-dark separation. The accent can reinforce its role without being the only way to locate it.',
      hint: 'Separate decorative emphasis from information that someone must recover.',
    },
    quiz: {
      question: 'A bakery leaflet uses five colors but the price and product name compete. What is the most useful simplification?',
      options: ['Assign consistent information roles and reserve contrast for the needed distinction', 'Choose three colors but leave every placement and role unchanged', 'Give complementary colors equal areas throughout the leaflet'],
      correctIndex: 0,
      explanation: 'A role-based revision addresses the competition. A smaller count alone does not fix hierarchy, and complementary colors do not require equal areas.',
    },
    takeaway: 'Limit the decisions by role, then check that the accent supports an already readable arrangement.',
    sourceNote: 'The inherited Tate references support value and complementary-color vocabulary. This palette is a design exercise, not a universal harmony formula.',
  },
  {
    id: 'design-006',
    title: 'A screen yellow is not a paint recipe',
    outcome: 'Explain why adding colored light and mixing colored pigments need different predictions.',
    scene: 'A lantern-fair ticket is planned both as a phone image and as a small painted sign.',
    sections: [
      {
        title: 'The same color names, different materials',
        paragraphs: [
          'You design a lantern-fair ticket on a phone and want to paint a matching sign. Someone says that red plus green makes yellow. That can describe an additive light mixture, but putting red and green paint on a palette usually does not produce the bright yellow of a screen. Before predicting the result, name what is being combined: emitted light, layers of printing ink, or particular paints. Color names alone do not identify the process.',
        ],
      },
      {
        title: 'Emission adds; pigments absorb',
        paragraphs: [
          'A display uses red, green, and blue light components, abbreviated RGB. Combining suitable red and green emissions produces yellow; adding the blue component in the display\'s balanced white combination produces white. In the simple full-channel examples, #FF0000 plus #00FF00 corresponds to #FFFF00. All three channels at full code value give #FFFFFF. This is not a rule for averaging color codes or stacking translucent drawing layers.',
          'Pigments absorb some wavelengths of incoming light and return others. Mixing them changes which light survives absorption and scattering. Many red-green paint combinations become muted or earthy, but the result depends on the pigments, proportions, binder, surface, and illumination.',
        ],
      },
      {
        title: 'Test the material, not the slogan',
        paragraphs: [
          'The possible paint mixture shown here is an illustrative brown, #6A5542, beside red and green stand-ins. It is not a measured mixing prediction. A different red or green can produce a different result. Printing commonly uses cyan, magenta, yellow, and black inks; it is another material process, not a guarantee that printed colors match a glowing phone.',
          'For the ticket, keep the screen design and painted trial separate. If paint is available, test a small mixture on the intended paper and label the actual materials. Otherwise, a written light-versus-pigment diagram is enough. No bulbs, special inks, or paid software are needed to understand the distinction.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Full-channel RGB examples',
        alt: 'Red, green, and blue component swatches are followed by yellow, white, and black output examples.',
        caption: 'Idealized display codes: red plus green gives yellow; all three give white. Black means zero RGB code, not necessarily zero real display emission.',
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
        caption: 'Screen stand-ins only. The brown is a possible kind of result, not a measured recipe for these or any paints.',
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
        'Draw two columns labeled emitted light and pigment. Put red plus green at the top of each.',
        'In the light column, write yellow for a suitable additive mixture and sketch the two inputs meeting.',
        'In the pigment column, write depends on materials. If paints are available, test a tiny mixture and name the paints.',
        'Add one sentence explaining why the phone ticket cannot supply an exact paint recipe. Do not invent a result without paint.',
      ],
      notice: 'Your two predictions name different physical processes rather than contradicting each other.',
      troubleshooting: 'If the paint trial looks unexpectedly bright, record it. The lesson is material dependence, not making every mixture brown.',
    },
    recall: {
      prompt: 'A drawing app blends red and green into brown. Does that prove the phone stopped using RGB light?',
      answer: 'No. The app can simulate pigment behavior or use another blending rule, then display the resulting brown through RGB emissions.',
      hint: 'Separate the software calculation from the way the screen produces its result.',
    },
    quiz: {
      question: 'Which instruction is justified when transferring the ticket to paint?',
      options: ['Average the red and green hex codes to obtain the exact paint mixture', 'Test the available pigments on the intended surface', 'Use equal paint amounts because full RGB channels make yellow'],
      correctIndex: 1,
      explanation: 'A material trial checks the actual absorption and scattering outcome. RGB codes and channel combinations do not specify paint proportions or pigments.',
    },
    takeaway: 'Identify light, ink, or pigment before predicting a mixture.',
    sourceNote: 'Exploratorium Colored Shadows was checked for additive mixtures. Adobe supplies color-mode context. No external illustration or pigment measurement is reproduced.',
  },
  {
    id: 'design-007',
    title: 'Check the viewing conditions before cooling the scan',
    outcome: 'Identify a display or lighting change before saving a compensating color edit into an image.',
    scene: 'A phone scan of a hand-drawn walking map looks yellow when opened late in the evening.',
    sections: [
      {
        title: 'The map seems to have changed overnight',
        paragraphs: [
          'You photographed a pencil walking map in the afternoon. At night, its paper looks yellow on the same phone. You reach for the warmth slider to make it white again. But the photo may be unchanged: a scheduled display setting might now make the whole screen warmer. Saving a blue correction into the map would mix up two different things, the image data and the conditions under which you see it. Inspect the view before altering the file.',
        ],
      },
      {
        title: 'The screen and room contribute to appearance',
        paragraphs: [
          'A display converts stored color values into light. Brightness settings, automatic warmth, reflections, and ambient illumination affect that light or your judgment of it. Your vision also adapts to surrounding illumination; a comparison made immediately after looking at a warm lamp is not identical to one made after looking at a neutral page. None of this proves that the camera recorded accurate color in the first place.',
          'Consistency is the first goal. Compare on the same screen, at comfortable steady brightness, in similar room light. A controlled comparison can isolate a change without turning an ordinary phone into a calibrated reference monitor.',
        ],
      },
      {
        title: 'Change the view, then restore the preference',
        paragraphs: [
          'For this example, the map contains pale paper #E8E5DD and pencil marks #424242. The warmer-looking chips illustrate a possible viewing change, not new values saved in the photo. If disabling a warmth setting changes the whole view while the file stays untouched, record the setting as a cause worth controlling.',
          'Do not leave an uncomfortable display mode enabled for the sake of an exercise. Restore your preference afterward. If the paper still looks yellow under a consistent view, investigate capture lighting or the paper itself next. A screenshot is not a dependable record of hardware display warmth, because that adjustment may occur after the screenshot data is captured.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Stored colors and a warmer-looking view',
        alt: 'Pale paper and dark pencil chips are paired with illustrative warmer-looking counterparts.',
        caption: 'The warm chips are explanatory stand-ins, not a measured phone transform. The original map values need not change when display warmth changes.',
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
        'Open one photo without entering its editor. Note the room light and current display warmth setting, if available.',
        'If comfortable, toggle that setting once while keeping brightness steady. Otherwise move plain paper between two existing room lights.',
        'Record what changed and what stayed fixed. The paper alternative changes illumination rather than the display.',
        'Restore the original viewing preference. Write whether the observation justifies a file edit yet; do not save a correction.',
      ],
      notice: 'Your note distinguishes a viewing change from a change to the photographed or drawn material.',
      troubleshooting: 'If automatic brightness keeps changing, compare the physical paper instead. A stable observation matters more than finding a particular menu.',
    },
    recall: {
      prompt: 'The same invitation looks dull on an older phone and vivid on a newer one. What would you check before increasing its saturation?',
      answer: 'Compare display settings and viewing conditions, then confirm the same file is open. Different displays do not establish that the invitation needs a permanent saturation change.',
      hint: 'Which parts of the viewing chain changed?',
    },
    quiz: {
      question: 'An unchanged photo turns warmer exactly when a scheduled display mode starts. Which first action preserves a useful comparison?',
      options: ['Save a cooler photo copy immediately', 'Compare the mode on and off without editing the photo', 'Raise saturation to restore the earlier impression'],
      correctIndex: 1,
      explanation: 'Toggling the viewing mode isolates the change that just occurred. File edits introduce another variable and can compensate for the wrong cause.',
    },
    takeaway: 'Stabilize the viewing chain before baking a correction into the image.',
    sourceNote: 'Adobe and Blackmagic Design discuss color-management context. This phone comparison is not calibration, and the warm-view chips are not measured display outputs.',
  },
  {
    id: 'design-008',
    title: 'Make a usable baseline before choosing the look',
    outcome: 'Explain a correction and a creative grade as separate decisions, with a preserved baseline.',
    scene: 'A short-film waiting-room still has an accidental green cast before an intended evening treatment.',
    sections: [
      {
        title: 'The filter hides the wrong problem',
        paragraphs: [
          'Your short-film still shows an empty waiting room with a paper timetable on the wall. The timetable looks green, although it was neutral under the main light. You also want the finished scene to suggest late evening. Applying a warm filter may hide the green, but it leaves you unsure which change solved the error and which created the style. Keep a duplicate of the original and give those two decisions separate reasons.',
        ],
      },
      {
        title: 'Correction and grading answer different questions',
        paragraphs: [
          'Color correction addresses a problem relative to an intended baseline: an accidental cast, an exposure mismatch, or an unsuitable interpretation of the recording. A creative grade chooses a deliberate appearance, such as quieter saturation or warmer highlights. The boundary is a working distinction, not a rule that art must begin perfectly neutral. An intentionally green lamp need not be removed.',
          'Some cameras record log footage, which encodes tones for a workflow rather than immediate normal display. A suitable input interpretation and display transform are needed. A LUT, or lookup table, maps input values to output values; a look made for the wrong input can distort the result instead of fixing it.',
        ],
      },
      {
        title: 'Keep three versions with named purposes',
        paragraphs: [
          'The timetable chips show an illustrative greenish starting patch, #B6C8B7, a neutral baseline, #C4C4C4, and a warmer creative choice, #D1C4AF. These are selected teaching colors, not measured pixels from footage. The baseline tests removal of the unwanted cast. The third version deliberately departs from that baseline for the scene.',
          'Compare each version with the original, checking that the timetable remains readable and the bench does not acquire an unintended color. Start this exercise with an ordinary phone photo, not unfamiliar log or HDR material. Preserve the baseline so that rejecting the evening look does not force you to reconstruct the correction from memory.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'One timetable patch, three intentions',
        alt: 'A greenish patch becomes neutral in the correction example and warmer in the separate creative treatment.',
        caption: 'Illustrative timetable colors, not a tested transform. Compare the reason for the neutral change with the reason for the warm change.',
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
        'Choose a nonprivate photo with a visible neutral-looking object. Duplicate it; name one specific problem before touching a control.',
        'Make one modest correction on the copy and retain that baseline. On paper, label the original and corrected timetable swatches instead.',
        'Try one creative change on another copy, or sketch its intended palette separately. State the artistic reason.',
        'Compare all three. Write which detail should survive both edits and whether the creative look introduced a new problem.',
      ],
      notice: 'You have an original, a baseline, and a look with distinct purposes rather than one unexplained filter.',
      troubleshooting: 'If no correction is justified, keep the original as the baseline. Do not invent an error to complete the exercise.',
    },
    recall: {
      prompt: 'A sunset clip looks flat after import, and its recording format is unknown. What must you establish before judging a cinematic preset?',
      answer: 'Find the recording color space and transfer encoding, then use the intended interpretation and display path. Flat appearance alone does not identify which correction or look is appropriate.',
      hint: 'A preset expects a particular kind of input.',
    },
    quiz: {
      question: 'The timetable is neutral in the baseline but amber in the chosen evening version. What best describes that second change?',
      options: ['A deliberate creative treatment that should still be checked in context', 'A correction proving that the neutral baseline was an error', 'An input transform required by the camera recording'],
      correctIndex: 0,
      explanation: 'A look can intentionally depart from neutrality. The preserved baseline lets you evaluate it; the artistic choice does not establish an input-transform requirement or a failed correction.',
    },
    takeaway: 'Separate fixing an unintended problem from choosing an intended appearance.',
    sourceNote: 'Blackmagic Design training supplies the workflow concepts. The still, colors, and exercise are original; no LUT or universal camera transform is supplied.',
  },
  {
    id: 'design-009',
    title: 'Use the waveform for position and the histogram for counts',
    outcome: 'Choose a scope by the information on its axes rather than trying to make every graph look full.',
    scene: 'A laundrette storyboard has six dark wall blocks on the left and two bright window blocks on the right.',
    sections: [
      {
        title: 'Where is the bright patch?',
        paragraphs: [
          'Draw a laundrette frame as eight equal vertical blocks. Six blocks on the left describe a dark wall; the two on the right describe a bright window. You want to know where the bright signal occurs, not merely how much brightness the picture contains. A scope is a graph of image information. Choosing one begins with its axes: what does horizontal position mean, and what does height mean?',
        ],
      },
      {
        title: 'Two graphs keep different information',
        paragraphs: [
          'A luma waveform keeps the image\'s left-to-right position horizontally and plots tonal signal level vertically. In the simplified frame, the left region makes a lower trace and the right region a higher trace. It does not preserve the original up-and-down location of the window. Several image rows can contribute different signal levels at the same horizontal position.',
          'A histogram groups tonal values into bins and counts how much image area belongs to each bin. Here, six of eight blocks are dark and two are bright: 75 percent and 25 percent. Those counts stay the same if you move the bright blocks to the left. Their locations are lost.',
        ],
      },
      {
        title: 'Read the signal context too',
        paragraphs: [
          'The diagram uses illustrative low and high positions, not measured IRE values or a conversion from its display swatches. In actual software, read the scope scale and whether the workflow is standard dynamic range, SDR, or high dynamic range, HDR. A night interior need not fill the entire available range.',
          'Other scopes answer other questions. An RGB parade separates the red, green, and blue channel traces for comparison. A vectorscope describes hue and saturation relationships. None identifies the important object for you. Look at the image to decide whether the bright window, the wall detail, or something else needs attention before moving a control.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Horizontal location survives in a waveform',
        alt: 'A dark wall at the upper left corresponds to a low trace below; a bright window at the upper right corresponds to a higher trace.',
        caption: 'Upper items represent image regions; lower items represent waveform traces. Height is schematic signal level, not a measured swatch conversion.',
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
        caption: 'An invented two-bin histogram: 6 + 2 = 8 equal-area blocks. It cannot tell you whether the window is left or right.',
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
        'Divide a frame into eight equal vertical blocks. Shade the left six dark and leave the right two pale.',
        'Below it, sketch a waveform with lower marks across the dark region and higher marks across the bright region.',
        'Make a separate two-bar histogram with counts six and two. Label the unit as image blocks.',
        'Move the two pale blocks to the left in a second sketch. Change the waveform, but keep the histogram counts.',
      ],
      notice: 'The waveform changes position while the histogram retains the same totals.',
      troubleshooting: 'If both graphs move left, relabel the histogram axis: its bins are tones, not positions in the picture.',
    },
    recall: {
      prompt: 'A bright sky spans the full width above a dark foreground. Can a luma waveform tell you that the sky is at the top?',
      answer: 'No. It can show high and low signals across the width, but their original vertical positions are not retained. Inspect the image to locate the sky.',
      hint: 'Horizontal image position survives; vertical image position is replaced by signal level.',
    },
    quiz: {
      question: 'Two frames have equal dark and bright areas but opposite left-right arrangements. Which result is possible?',
      options: ['Identical waveforms must prove identical layouts', 'A histogram identifies which side contains the window', 'Matching histograms but different waveform positions'],
      correctIndex: 2,
      explanation: 'Equal tonal counts can produce the same histogram despite changed positions. A waveform keeps horizontal location, not the complete two-dimensional scene.',
    },
    takeaway: 'Read the axes before asking a scope to answer a question.',
    sourceNote: 'Blackmagic Design supplies scope concepts. The eight-block frame and two-bin histogram are original simplifications, not instrument readings or mastering targets.',
  },
  {
    id: 'design-010',
    title: 'Choose which light your neutral sample represents',
    outcome: 'Use a credible neutral surface to assess a cast without neutralizing every light in a scene.',
    scene: 'A paper-folding tutorial is lit by a window while an amber desk lamp illuminates the background wall.',
    sections: [
      {
        title: 'One room contains two kinds of light',
        paragraphs: [
          'You film a paper-folding tutorial beside a window. A desk lamp lights the background wall, making it look amber. The sheet under the window looks slightly green in the recording. Making both paper and wall equally white would erase a real lighting difference. First choose the light relevant to the subject: the window on the folding paper. The lamp-lit wall is a different region, not a second neutral target that must match the first.',
        ],
      },
      {
        title: 'What white balance changes',
        paragraphs: [
          'White balance adjusts color relationships so a neutral surface under the chosen illumination can appear neutral in the intended view. A temperature control generally moves the balance along blue-yellow; tint generally addresses green-magenta. These are editing directions, not proof that any white-looking object is a reliable reference. Colored paper, reflected color, mixed light, and clipped highlights can all mislead you.',
          'Choose a surface that should be neutral, retains recorded detail, and receives the same light as the subject. Plain household paper is a useful beginner clue, not a calibrated neutral card. Optical brighteners, its own tint, or different illumination can limit what it tells you.',
        ],
      },
      {
        title: 'Correct the sample, inspect the consequences',
        paragraphs: [
          'The swatches illustrate a greenish paper sample, #B8C8BA, a chosen neutral result, #C4C4C4, and an intentionally amber wall, #D6B47C. Correcting the paper does not require the amber wall to become gray. If the two lights overlap on the subject, a single global adjustment may not satisfy both regions.',
          'An RGB parade can help compare channels in the actual neutral patch. It does not require the entire picture\'s red, green, and blue distributions to match. Start with small changes on a duplicate and inspect nearby folds as well as the neutral sample. If the paper loses detail or another region becomes implausibly colored, reconsider the sample or chosen light.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two separate illumination regions',
        alt: 'A window lights the folding paper on the left; an amber lamp lights the background wall on the right.',
        caption: 'Schematic lighting relationships, not measured beam coverage. Balance for the paper\'s light without assuming the other region should match.',
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
        caption: 'Illustrative samples only. The wall is not another failed neutral patch.',
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
        'Place paper beside a colored household object under one existing light. Keep paper away from bulbs and heat.',
        'Photograph both with visible paper texture, or sketch the setup and label the shared illumination.',
        'On a duplicate, try a small warmth or tint change if available. Otherwise compare the three supplied sample roles.',
        'Write which surface informed the adjustment and one reason it might be an imperfect neutral reference. Keep the original.',
      ],
      notice: 'You can name a sample and its light rather than demanding that every pale object become white.',
      troubleshooting: 'If the paper is featureless white, reduce capture exposure and try again; do not use that clipped-looking area as evidence.',
    },
    recall: {
      prompt: 'A gray jacket receives daylight on one side and colored shop-sign light on the other. Should one global white-balance setting neutralize both?',
      answer: 'Not necessarily. The regions receive different illumination. Choose the relevant light and inspect the consequences rather than treating the colored side as an automatic error.',
      hint: 'A neutral material can reflect colored light.',
    },
    quiz: {
      question: 'Which sample best supports checking an unwanted cast on a window-lit sketchbook?',
      options: ['An unclipped neutral-looking paper margin under that same window light', 'A bright reflection with no remaining detail', 'A white sign across the room under a colored lamp'],
      correctIndex: 0,
      explanation: 'The margin shares the relevant illumination and retains information. Clipping or a different light undermines the other comparisons; even household paper remains an imperfect reference.',
    },
    takeaway: 'Balance a credible neutral under a chosen light, not every colored region in the frame.',
    sourceNote: 'Blackmagic Design supports white-balance and scope concepts. The household-paper trial is not calibration, and the diagrams do not predict a real mixed-light correction.',
  },
  {
    id: 'design-011',
    title: 'Keep the folds, not a perfectly full tonal graph',
    outcome: 'Distinguish recorded detail from an editing change and compare tonal contrast without confusing it with sharpness.',
    scene: 'A folded concert program is photographed near a bright window with a dark cloth behind it.',
    sections: [
      {
        title: 'The white paper has become a blank patch',
        paragraphs: [
          'You photograph a folded concert program against dark cloth near a window. One version shows the folds but makes the cloth dark. Another brightens the cloth while turning the paper into a blank patch. You want the program\'s structure, not simply a bright average. Exposure at capture affects the information recorded. An exposure control in an editor changes the recorded values; it cannot guarantee the recovery of fold detail that was never retained.',
        ],
      },
      {
        title: 'A darker blank is still blank',
        paragraphs: [
          'Clipping occurs when values reach a recording or processing limit and distinctions can be lost. If the source has lost all useful highlight differences, lowering a white patch can make it gray without recreating its folds. Some formats retain highlight information beyond a particular preview, so inspect the source and workflow before declaring it lost. Bright appearance alone is not proof of clipping.',
          'Shadows have a similar practical limit: brightening them can reveal noise rather than useful texture. Decide which detail matters. A small reflection may legitimately be featureless, while the fold that explains the program\'s shape deserves more protection.',
        ],
      },
      {
        title: 'Contrast is not edge sharpness',
        paragraphs: [
          'Tonal contrast is the separation between light and dark areas. The soft-contrast study uses #666666 and #AAAAAA; the harder-contrast study uses #222222 and #DDDDDD. Those chosen endpoints illustrate smaller and larger separation. Soft contrast does not mean blurred edges, and hard contrast does not mean every edge needs sharpening.',
          'Compare captures for surviving fold detail, then choose a tonal treatment that suits the intended lighting. Do not stretch every image across an entire histogram simply because the graph has empty space. A shaded interior can remain dark. Retain the original so that a later contrast choice is not mistaken for evidence about what the camera recorded.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Lowering a patch does not invent a fold',
        alt: 'A featureless white patch and a darker featureless gray patch contain the same absence of fold detail.',
        caption: 'Schematic case where source distinctions are absent, not proof that every bright preview is unrecoverable.',
        items: [
          { label: 'Blank source patch', detail: '#FFFFFF: no fold difference retained in this example.', color: '#FFFFFF' },
          { label: 'Lowered blank patch', detail: '#BBBBBB: darker, still no fold difference.', color: '#BBBBBB' },
        ],
      },
      {
        type: 'swatches',
        title: 'Soft and hard tonal separation',
        alt: 'Two middle grays show softer contrast; a dark gray and pale gray show harder contrast.',
        caption: 'Compare each dark-light pair. The distinction is tonal distance, not blur, edge width, or an ideal contrast ratio.',
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
        'Place the folded paper under ordinary daylight with a darker object behind it. Do not aim at the sun.',
        'If your camera allows it, make darker and lighter captures from the same position. Otherwise draw the visible fold differences.',
        'Compare which version retains the folds. On paper, also draw a flat white patch and shade it evenly gray without adding a fold.',
        'Write which change adjusts tone and which supplies actual shape information. Preserve any original captures.',
      ],
      notice: 'You distinguish a darker patch from restored detail and can name the texture worth protecting.',
      troubleshooting: 'If both captures keep all folds, record that result. The example explains a limit; it does not require manufacturing clipping.',
    },
    recall: {
      prompt: 'A night photograph becomes noisy when brightened, but the illuminated shop name is already clear. Must you lift every shadow?',
      answer: 'No. Decide whether the shadows contain necessary information. Brightening noise to fill a graph can damage the intended night appearance without helping the task.',
      hint: 'Judge useful detail and scene intention separately from average brightness.',
    },
    quiz: {
      question: 'A verified clipped source patch becomes gray after an exposure reduction, but no texture appears. What follows?',
      options: ['The lower gray value proves texture has been recovered', 'More sharpening will necessarily reconstruct the lost folds', 'The edit changed tone without restoring absent recorded differences'],
      correctIndex: 2,
      explanation: 'Lower values do not recreate distinctions missing from the source. Sharpening acts on available structure; it cannot guarantee the original fold pattern.',
    },
    takeaway: 'Protect useful recorded differences, then choose contrast for the picture rather than the graph.',
    sourceNote: 'Blackmagic Design provides exposure and grading context. Swatches are original tonal examples; capture latitude and highlight recovery depend on the recording and workflow.',
  },
  {
    id: 'design-012',
    title: 'Match the sewing table across the cut',
    outcome: 'Use shared surfaces to judge shot continuity instead of requiring identical presets or histograms.',
    scene: 'Wide and close views of a sewing table make the same cream pattern paper jump in color.',
    sections: [
      {
        title: 'The close view does not belong to the wide view',
        paragraphs: [
          'You record a wide view of a sewing table, then a close view of thread beside a paper pattern. The wide shot looks neutral; the close shot makes the cream pattern noticeably yellow. Both use the same preset. The problem appears when you alternate between them: one shared surface changes without an apparent change in the scene. Shot matching aims for believable continuity across that cut, not identical settings on two files.',
        ],
      },
      {
        title: 'Find a reference and a shared surface',
        paragraphs: [
          'Choose one shot as the reference for the scene. Then identify an object that is present under comparable light in both views: here, the cream pattern paper. Compare its apparent brightness, color balance, and saturation. Check a second surface, such as the blue cloth beneath it, so that fixing one patch does not hide a new mismatch elsewhere.',
          'A close view changes the proportion of each tone in the frame. More cream paper and less dark table can make its histogram different even when the objects match convincingly. Copying a grade transfers settings, not results; different exposure, automatic camera processing, or illumination can require different corrections.',
        ],
      },
      {
        title: 'Fix one mismatch and replay the pair',
        paragraphs: [
          'The example paper chips are #C8C0AE in the reference, #CFC3A4 in the yellowish close view, and #C8C0AE as an idealized matched target. Exact code equality is used to make this diagram clear; it is not a requirement for every real pixel across different views. Texture, reflections, and viewing angles can change legitimately.',
          'First address the broad paper cast, then alternate the two shots again and inspect the blue cloth. If the light really changed between takes, decide whether the edit should retain that change rather than disguising it. Keep a note of the remaining mismatch. A preset name or a smooth-looking scope cannot substitute for watching the transition.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Follow the same paper across two views',
        alt: 'Reference cream paper, yellowish close-view paper, and an idealized matched cream target are compared.',
        caption: 'Selected teaching colors, not sampled footage. Identical reference and target codes simplify the comparison; real shot matching does not demand pixel equality.',
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
        'Arrange paper on cloth under one steady light. Take a wide and a close photo without moving the objects, or sketch both frames.',
        'Choose the wide view as your reference. Name the paper as the first comparison and the cloth as the second.',
        'If a mismatch is visible, adjust only a duplicate of the close photo. On paper, label what a correction would target.',
        'Alternate the pair and check both shared surfaces. Write one remaining difference and whether framing or lighting could explain it.',
      ],
      notice: 'Your judgment refers to shared features across the cut, not merely identical settings.',
      troubleshooting: 'If the views already match, note their different area proportions. Do not create a cast just to have something to fix.',
    },
    recall: {
      prompt: 'A garden-film close-up fills the frame with a pale flower while the wide view contains mostly dark leaves. Should their histograms match?',
      answer: 'Not necessarily. Framing changes the amount of each tone. Compare the flower and any shared foliage under comparable light rather than equalizing the whole distributions.',
      hint: 'A histogram counts areas; it does not name the objects occupying them.',
    },
    quiz: {
      question: 'Two shots use the same preset, but the same blue door changes toward green across the cut. What is the next useful comparison?',
      options: ['Choose a new preset for both shots without checking shared surfaces', 'Compare the door and a neutral reference under their respective lighting', 'Force both histograms to have the same overall shape'],
      correctIndex: 1,
      explanation: 'Shared surfaces help locate a color or lighting mismatch. A new preset or equalized area distribution can change the shots without repairing continuity.',
    },
    takeaway: 'Match meaningful shared features across the cut, not the names of the settings.',
    sourceNote: 'Blackmagic Design supplies shot-matching concepts. The sewing-table examples are original; the repeated target code is a schematic aid, not a universal grading rule.',
  },
  {
    id: 'design-013',
    title: 'Name the letter feature that becomes unclear',
    outcome: 'Use basic Latin letter anatomy to describe a specific small-text problem.',
    scene: 'A library shelf label reading Hedge guide becomes difficult to recognize at its final size.',
    sections: [
      {
        title: 'The small e is the problem',
        paragraphs: [
          'You make a shelf label reading Hedge guide. Enlarged on a screen, the letters look neat. At the size needed for the shelf, the opening of the e becomes difficult to see. Saying the font is bad does not identify what to change. A more useful note is that this e loses its opening at the intended reading size. Letter anatomy gives you names for visible features, so the next comparison can target the actual difficulty.',
        ],
      },
      {
        title: 'Start with a baseline and a few spaces',
        paragraphs: [
          'The baseline is the imaginary line on which most letters sit. The main lowercase body is represented by letters such as x. An ascender, as in h, rises above that body; a descender, as in g, extends below the baseline. These are parts of letters, not the space between lines.',
          'A counter is an interior space, such as the enclosed area inside o. An aperture is the opening into a partly enclosed form, such as the opening of e. Exact shapes vary by typeface. A g can have different constructions while still providing a useful example of a part extending below the baseline.',
        ],
      },
      {
        title: 'Turn the vocabulary into a comparison',
        paragraphs: [
          'Write or type h e o g beside the shelf phrase. Inspect the e opening, the o interior, the h extension, and the g tail. Then compare the same words at the final size in another available typeface or a slightly larger setting. If the e is clearer but the g collides with a line below, the revision has introduced a separate spacing problem.',
          'Do not solve everything by memorizing more anatomical terms. Choose the few that describe what you see and keep the actual label in the test. These names concern Latin lettering; other writing systems have their own structures. A readable shelf label also depends on contrast, distance, wording, and lighting, not just a generous aperture.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Read four letter features on one row',
        alt: 'The letters h, e, o, and g sit on a common row with their ascender, aperture, counter, and descender identified.',
        caption: 'Inspect the actual letter labels, then the same row in your chosen typeface. This schematic uses the lesson display type, not a recommended font specimen.',
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
        'Find a short label containing e, h, and g, or write Hedge guide yourself. Inspect it at a comfortable reading distance.',
        'Copy h e o g on one pencil baseline. Label one ascender, aperture, counter, and descender.',
        'Make a smaller copy or view the text at its intended size. Circle one feature that becomes less distinct.',
        'Try a modest size increase or another available typeface. Write whether the circled feature improved without crowding its neighbors.',
      ],
      notice: 'Your critique names a visible feature, a word, and the size at which the problem occurs.',
      troubleshooting: 'If the letters stay clear, compare a smaller sample without claiming it represents normal use. Do not invent a defect in the original.',
    },
    recall: {
      prompt: 'A small museum caption makes o look filled in, while the neighboring letters remain recognizable. What would you inspect and compare?',
      answer: 'Inspect the counter inside o at the actual size. Compare a more open form, suitable weight, or larger setting while keeping the words and background steady.',
      hint: 'Name the interior space rather than the whole font.',
    },
    quiz: {
      question: 'A two-line label has clear individual letters, but the g tail touches the next line. Which diagnosis fits?',
      options: ['The lowercase body needs a larger x-height', 'The whole label needs more horizontal tracking', 'A descender and the available line spacing are conflicting'],
      correctIndex: 2,
      explanation: 'The tail below the baseline is a descender. More room between lines targets the collision; changing lowercase proportions or horizontal tracking does not directly supply that vertical room.',
    },
    takeaway: 'Use anatomy to locate a visible problem, not to replace testing the actual words.',
    sourceNote: 'Google Fonts Knowledge supplies Latin type-anatomy terminology. The shelf label and inspection exercise are original, and no typeface is certified by this comparison.',
  },
  {
    id: 'design-014',
    title: 'Equal font sizes can have unequal lowercase bodies',
    outcome: 'Explain x-height separately from nominal size and compare actual lowercase words before choosing a typeface.',
    scene: 'A seed-care booklet changes typefaces while keeping the same nominal size setting.',
    sections: [
      {
        title: 'The booklet suddenly looks smaller',
        paragraphs: [
          'You change the typeface in a seed-care booklet but leave its size setting alone. The sentence Mix six seeds in loose soil now looks smaller. The application has not necessarily ignored your choice. Nominal font size scales the typeface\'s design space, often described using the em square. Different typefaces give their visible letter parts different proportions within that space. Equal nominal sizes therefore need not create equally large-looking lowercase words.',
        ],
      },
      {
        title: 'What x-height measures',
        paragraphs: [
          'X-height is the distance from the baseline to the top of a lowercase x in a Latin typeface. It represents the main lowercase body rather than the height of capitals, ascenders, or descenders. It is not line spacing and does not measure the width of a letter. A typeface with a larger x-height often looks fuller at the same nominal size.',
          'For a schematic example, give Study A and Study B equal 16-unit nominal sizes. Let their x-heights be 7 and 9 units. The second x is taller within the same size setting. These invented metrics explain the relationship; they are not measurements of named fonts or recommended proportions.',
        ],
      },
      {
        title: 'Compare words, not just a metric',
        paragraphs: [
          'Return to the seed sentence. Compare how easily its lowercase forms separate, how open their counters remain, and how much room sits between lines. A larger lowercase body can occupy more of that room, making the paragraph feel crowded even though the line-height setting is unchanged. Recheck the actual paragraph after changing the family.',
          'A large x-height alone does not guarantee readability. Stroke weight, character distinction, spacing, contrast, language, and the reading task still matter. You can adjust nominal size to obtain a useful apparent size, but then check wrapping and container space again. The goal is a readable booklet, not forcing two unlike designs to obey one number.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'The same design size, different x-heights',
        alt: 'Both schematic typefaces have a nominal size of sixteen units; their lowercase x-heights are seven and nine units.',
        caption: 'Invented metrics, not real font measurements. Compare each x-height with its own 16-unit nominal size rather than treating size as visible letter height.',
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
        'Set two font previews to the same size and enter Mix six seeds in loose soil. A free browser preview is enough.',
        'Without previews, draw two 16-square-high boxes. Mark baselines 3 squares above their bottoms, then draw x marks 7 and 9 squares high.',
        'Compare the lowercase bodies, not the tallest capitals. Write which looks larger and what the nominal setting held constant.',
        'For real previews, check counters and line spacing too. For paper, label the drawing schematic rather than a readability test.',
      ],
      notice: 'You distinguish nominal size from visible lowercase height and name another feature worth checking.',
      troubleshooting: 'If the real fonts look similar, keep that result. Use the supplied metrics to understand the distinction rather than exaggerating a difference.',
    },
    recall: {
      prompt: 'A replacement typeface makes a button label look fuller without changing its size setting. What should be inspected besides the setting itself?',
      answer: 'Inspect lowercase proportions, including x-height, plus weight and width. Then check padding and wrapping; a fuller-looking label can need more room.',
      hint: 'The number scales a design space, not a universal lowercase silhouette.',
    },
    quiz: {
      question: 'Two 16-unit study fonts have x-heights of 7 and 9 units. What does that comparison establish?',
      options: ['The second has a taller lowercase x at the same nominal size', 'The second has a larger nominal font-size setting', 'The second places consecutive baselines farther apart'],
      correctIndex: 0,
      explanation: 'The metrics establish one lowercase-height relationship. Both nominal sizes remain 16 units, and x-height alone does not specify line spacing.',
    },
    takeaway: 'Compare the lowercase body and the actual paragraph, not only the nominal size.',
    sourceNote: 'Google Fonts Knowledge explains x-height, design space, and reading context. The 16, 7, and 9 unit figures are invented teaching geometry, not beauty laws.',
  },
  {
    id: 'design-015',
    title: 'Read the recipe as instructions, not an alphabet sample',
    outcome: 'Distinguish recognizing characters from following a passage and identify one specific reading obstacle.',
    scene: 'A bean-salad recipe is easy to decipher letter by letter but awkward to follow while preparing the dish.',
    sections: [
      {
        title: 'Every letter is clear, but the next action is not',
        paragraphs: [
          'You write a recipe to keep beside a mixing bowl. The letters look clear, yet you keep returning to the start to find what happens after rinsing the beans. A typeface can pass a character-recognition check while the instruction remains awkward to follow. The relevant task is reading a connected passage, understanding its sequence, and finding your place again. A large alphabet preview does not reproduce that task or the interruptions that come with it.',
        ],
      },
      {
        title: 'Legibility and readability ask different questions',
        paragraphs: [
          'Legibility concerns distinguishing characters and marks: can you tell e from c or 1 from l? Readability includes following words, sentences, and meaning in their layout. Terminology overlaps in different writing, but separating these questions is useful. A decorative heading can be recognizable for three words yet unsuitable for a whole recipe.',
          'Use real instructions: Rinse the beans in a sieve. Let the water drain away. Put the beans in a bowl and add chopped tomato. Stir gently, then move the salad to a serving dish. Now inspect line returns, grouping, and references such as them. Each can create work even when every character is distinct.',
        ],
      },
      {
        title: 'Change the cause you actually observed',
        paragraphs: [
          'If you lose your place after looking at the bowl, separate the actions into short lines while keeping the words and letter size steady. If the problem is an unclear pronoun, revise the wording in a separate comparison. If letters merge, inspect size, weight, or the typeface instead. Changing everything at once makes it hard to explain which change helped.',
          'Read the revised passage at its intended size. A willing reader can add another perspective by explaining the next action without being coached. One reader\'s experience is useful feedback, not a study establishing that the layout works for everyone. Keep the observation concrete: where did the reading stop, and what changed there?',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same short directions, regrouped',
        alt: 'Three bean-salad directions appear first as one run and then as separate action lines.',
        caption: 'A short original extract, not a measured readability result. Keep the words unchanged while inspecting the action boundaries.',
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
        'Copy the four-sentence recipe passage from this lesson. No food preparation is required.',
        'Read it, look away, then locate the next action. Mark any point where you lose your place or misunderstand a reference.',
        'Change one cause: regroup action lines, adjust width, or clarify wording. Keep other choices as steady as possible.',
        'Read again, or ask a willing person to explain the sequence. Record the specific improvement or remaining obstacle.',
      ],
      notice: 'The revision addresses following the instruction, not just how attractive isolated letters look.',
      troubleshooting: 'If no obstacle appears, try the text at its intended size. Do not manufacture a complaint or infer universal success.',
    },
    recall: {
      prompt: 'A repair leaflet has distinct letters, but you cannot tell which sentence belongs to step two. What would you investigate?',
      answer: 'Investigate grouping, headings, and the wording of the sequence. Character recognition has not resolved the relationship between instructions.',
      hint: 'Ask whether the difficulty is seeing marks or following their organization.',
    },
    quiz: {
      question: 'A reader distinguishes every character but repeatedly jumps to the wrong next line in a paragraph. Which first test targets that problem?',
      options: ['Change only the decorative capitals in its heading', 'Compare its measure and line spacing while retaining the words', 'Replace all sentence wording before inspecting the layout'],
      correctIndex: 1,
      explanation: 'Line following points to paragraph geometry worth testing. Heading decoration misses the location of the problem, while rewriting first changes another variable.',
    },
    takeaway: 'Test the connected reading task and revise the observed obstacle one cause at a time.',
    sourceNote: 'Google Fonts Knowledge supports reading and spacing concepts. The recipe and comparisons are original practice material, not a validated reading-speed intervention.',
  },
  {
    id: 'design-016',
    title: 'Give the eye a line it can return from',
    outcome: 'Compare text-column widths while preserving readable letter size and meaningful wrapping.',
    scene: 'A community-history booklet must fit a walking-route paragraph on both paper and a phone.',
    sections: [
      {
        title: 'The line is easy until it ends',
        paragraphs: [
          'Your community-history booklet describes a walk past an old mill. On a wide page, each line stretches far across the sheet. The individual words are clear, but returning to the beginning of the next line sometimes lands you one line too low. Narrowing the column helps that return, until the column becomes so narrow that every short phrase breaks into fragments. The useful width is a reading decision, not simply the space left after adding a picture.',
        ],
      },
      {
        title: 'Measure means line length',
        paragraphs: [
          'In typography, measure is the length of a line of text. A wider measure asks the reader to travel farther before returning. A very narrow measure creates more frequent returns and can split phrases awkwardly. Font size, typeface, language, spacing, and the kind of reading all affect the tradeoff. A ticket caption and a long historical account do not need identical widths.',
          'Compare the same passage at the same letter size in two columns. If you shrink the type to fit more words, you have changed both measure and legibility. Published character-count ranges can suggest starting points, but they are not numerical laws of beauty or universal accessibility requirements.',
        ],
      },
      {
        title: 'Follow the return path',
        paragraphs: [
          'Use the opening Walk past the old mill. Follow the path. In the narrow schematic, the first line ends after past, so the next line continues the sentence. In the wider one, the first sentence fits before the return. Neither arrangement is automatically correct; the diagrams expose the different movement and wrapping.',
          'For the booklet, test several complete sentences rather than judging this short opening alone. Mark lost lines and broken phrases. On a phone, accept additional wrapping before making letters uncomfortably small. If the wider version still works better for the passage, recheck line height too. Width and vertical spacing cooperate, but test their effects separately before choosing a final combination.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Narrow opening: return within the sentence',
        alt: 'Walk begins at the left, past ends a short first line, and the old mill continues at the next left margin.',
        caption: 'A schematic reading path, not a recommended width. Arrows show reading and returning; labels mark parts of the same sentence.',
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
        caption: 'The words and letter-size intention stay fixed. The longer first line changes both the return distance and where the sentence wraps.',
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
        'Write four original sentences about a familiar walk. Draw one column roughly a quarter-page wide and another roughly half-page wide.',
        'Copy the same passage into both at similar letter size. Keep line spacing as consistent as your handwriting allows.',
        'Read each version and mark one awkward wrap or lost return, if present. Avoid changing the words during this comparison.',
        'Choose a width for this passage and explain the tradeoff. These paper fractions are trial constraints, not recommendations.',
      ],
      notice: 'Your choice refers to reading and wrapping rather than reaching a target character count.',
      troubleshooting: 'If handwriting changes size between columns, redraw a few equal-height guide marks before comparing again.',
    },
    recall: {
      prompt: 'A phone essay has fewer characters per line than a print guideline suggests. Should its letters be reduced until the count matches?',
      answer: 'No. Preserve usable letter size and test the actual wrapping. Guidance for another format does not outrank reading on the available screen.',
      hint: 'A character count is not the reader\'s task.',
    },
    quiz: {
      question: 'Which comparison most directly tests measure for a book paragraph?',
      options: ['Different wording, font, and width in each version', 'The same passage and letter size at two column widths', 'A shorter caption at a much larger size'],
      correctIndex: 1,
      explanation: 'Holding words and letter size steady isolates width more usefully. The alternatives change content or scale at the same time.',
    },
    takeaway: 'Choose a line length through actual reading, without shrinking letters to satisfy a count.',
    sourceNote: 'Google Fonts Knowledge provides measure guidance. The route text and column fractions are original trials, not experimentally established optimal widths.',
  },
  {
    id: 'design-017',
    title: 'Separate the letters from the space between lines',
    outcome: 'Define line height and traditional leading, then inspect extending marks and paragraph grouping independently of font size.',
    scene: 'An original short-film credit block crowds the names Héloise Ng and Hugo Gill onto adjacent lines.',
    sections: [
      {
        title: 'The credit names begin to collide',
        paragraphs: [
          'Your short film ends with three credit lines: Images: Héloise Ng, Sound: Hugo Gill, and Thanks: Jo. Each name is recognizable, but the g tails and the taller marks on the next line feel crowded. Enlarging the letters without moving the lines can make the problem worse. The issue concerns vertical room between lines, which is a separate setting from the size or lowercase proportions of the letters themselves.',
        ],
      },
      {
        title: 'Line height and leading need a careful distinction',
        paragraphs: [
          'Line height is the vertical space allocated to a line. With consistent type settings, it governs the usual baseline-to-baseline spacing. In traditional metal type, leading was additional material inserted between rows of type. A 10 pt type body plus 2 pt of added leading gives a nominal 12 pt line distance. The visible letters themselves need not be 10 pt tall.',
          'Modern applications sometimes label the whole baseline distance leading. Check what the particular control means. In CSS, line-height describes line-box height rather than an added strip. None of these terms means x-height, which measures the lowercase x above its baseline, or kerning, which concerns particular horizontal letter pairs.',
        ],
      },
      {
        title: 'Leave room without breaking the block apart',
        paragraphs: [
          'The illustrative credit baselines are 0, 12, and 24 pt below the first line, giving two equal 12 pt intervals. Those numbers explain arithmetic, not a recommended phone-text size. In the real credits, inspect the accented name and the g tails at the final viewing size. Increase line distance if they crowd, then check whether the three lines still read as one group.',
          'Too much spacing can make connected text look like separate fragments. Revisit the result when the font or line length changes. WCAG text-spacing guidance also requires relevant web content to survive specified reader overrides; it does not order every author to use one default line-height ratio. A pencil trial cannot certify that digital behavior.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Three evenly separated credit baselines',
        alt: 'Images, Sound, and Thanks credit lines occupy equally spaced positions labeled zero, twelve, and twenty-four points below the first baseline.',
        caption: 'Enlarged schematic of 12 pt intervals, not actual-size typography. Read the names as well as the repeated distance.',
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
        'Copy the three credit lines at one comfortable letter size, including the accent and the g tails.',
        'Make a second version with more distance between baselines but the same letter size and words.',
        'Make a third with still more distance. Circle collisions in the tight version and any lost grouping in the loose version.',
        'Choose a usable version and label the change line spacing. If using an app, note whether its control sets total distance or added leading.',
      ],
      notice: 'The extending marks have room while the credits remain visibly connected.',
      troubleshooting: 'If you enlarged letters instead of moving baselines, restore their size and repeat only the spacing change.',
    },
    recall: {
      prompt: 'A translated booklet adds taller accent marks but keeps its old font-size and line-height settings. What should be checked?',
      answer: 'Inspect actual adjacent lines for collisions and grouping in the translated text. Equal settings do not guarantee equal usable room for different marks or fonts.',
      hint: 'Inspect the highest and lowest marks, not just the numerical size.',
    },
    quiz: {
      question: 'A print proof uses 12 pt metal type with 3 pt of added leading. What nominal line distance does that specify?',
      options: ['3 pt, counting only the extra space', '12 pt, counting only the type body', '15 pt, combining the body and added leading'],
      correctIndex: 2,
      explanation: 'The new example adds 12 and 3 to obtain 15 pt. Modern controls may use leading to mean the total, so check their meaning before entering a value.',
    },
    takeaway: 'Judge line room with actual marks and reading, while keeping font size and spacing conceptually separate.',
    sourceNote: 'Google Fonts line-height guidance and W3C Text Spacing were checked. Credit names are fictional; the point figures teach geometry, not ideal sizes or default ratios.',
  },
  {
    id: 'design-018',
    title: 'Repair one letter pair without spreading the title',
    outcome: 'Distinguish kerning from tracking using a movable-letter title and preserve the gaps you did not intend to change.',
    scene: 'Three paper letters spelling AVA are arranged for an original film-title study.',
    sections: [
      {
        title: 'The first gap looks larger than the second',
        paragraphs: [
          'You arrange three paper letters, A V A, for a film-title study. Their centers are equally spaced, yet the open area between the first two letters bothers you. Letters are shapes, not identical rectangular blocks of ink. Diagonals and straight stems leave different-looking spaces. A ruler can describe the positions, but equal measured gaps do not automatically produce the visual relationship you want. First decide whether one pair is wrong or the entire word feels too crowded.',
        ],
      },
      {
        title: 'Pair spacing and whole-run spacing',
        paragraphs: [
          'Kerning adjusts spacing for particular glyph pairs. A glyph is the drawn form used to represent a character. Tracking adjusts letter spacing across a run, such as a whole heading. Neither is the vertical distance between lines, and neither changes x-height. Well-made fonts commonly include automatic kerning information, so begin with their normal spacing before making manual interventions.',
          'To tighten only the first AV pair on paper, move V and the following A together toward the first A. That preserves the VA gap. Moving V alone changes both neighboring gaps. This small physical distinction explains why a local adjustment must account for what follows it.',
        ],
      },
      {
        title: 'Compare three arrangements',
        paragraphs: [
          'The first schematic puts letter centers at 20, 50, and 80 units: two 30-unit separations. The pair-adjusted version uses 20, 44, and 74: separations of 24 and 30. A separate tracking study uses 14, 50, and 86: both separations become 36. These are placement coordinates, not ink-gap measurements or kerning recommendations.',
          'Inspect the whole title after each move. If the first pair improves but the word becomes lopsided, compare again rather than applying a numerical beauty rule. Manual pair work is most practical for short display text. Spreading an entire paragraph to repair one troublesome pair changes many relationships that were not the original problem.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Initial letter positions',
        alt: 'A, V, and A paper tiles occupy positions twenty, fifty, and eighty on one row.',
        caption: 'Center separations are 30 and 30 schematic units. Equal centers do not guarantee equal-looking ink gaps.',
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
        caption: 'Separations become 24 and 30. The following pair retains its spacing.',
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
        caption: 'Both separations are 36. The whole run changes, not only the first pair.',
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
        'Write A, V, and A on separate scraps at the same size. Arrange them on one baseline.',
        'Keep the first A fixed. Move V and the last A together to alter only the first pair; label this kerning study.',
        'Reset, then spread the whole run so both gaps increase. Label this tracking study.',
        'Sketch both results and state which gap each change affected. The diagram coordinates are optional, not targets to imitate.',
      ],
      notice: 'You can change one pair while keeping the following pair intact.',
      troubleshooting: 'If moving V changes both gaps, move the trailing A by the same amount as V for the pair-only version.',
    },
    recall: {
      prompt: 'Only the To pair in a poster heading looks awkward. Why is increasing letter spacing across the entire poster an imprecise fix?',
      answer: 'It changes many other pairs and text blocks. Inspect normal font kerning first, then consider a local display-text adjustment if that pair still needs it.',
      hint: 'Match the scope of the adjustment to the scope of the problem.',
    },
    quiz: {
      question: 'The first AV gap should shrink while the following VA gap stays unchanged. Which paper move achieves that?',
      options: ['Move V and the final A together toward the first A', 'Move only V toward the first A', 'Move both outer As away from V'],
      correctIndex: 0,
      explanation: 'Moving the trailing pair together preserves their internal separation. Moving only V changes both gaps; spreading the outer letters opens the run.',
    },
    takeaway: 'Use a pair adjustment for a pair problem and tracking for a whole-run spacing decision.',
    sourceNote: 'Google Fonts Manual kerning is rarely required was checked. Paper coordinates are original explanatory geometry, not measured font metrics or universal spacing rules.',
  },
  {
    id: 'design-019',
    title: 'Give the flyer shared edges and real margins',
    outcome: 'Lay out a two-column flyer on explicit guides, then preserve its reading order in a single column.',
    scene: 'A neighborhood screening flyer combines a title, an original drawing, a caption, and event details.',
    sections: [
      {
        title: 'Each element has found a different edge',
        paragraphs: [
          'Your neighborhood screening flyer has a title near the center, a drawing slightly left of it, and an address beginning at another position. None is individually unreadable, but the page feels assembled from unrelated pieces. A grid supplies recurring alignment guides so related elements can share edges. It is a tool for reducing arbitrary placement, not a visible cage that every object must fill or a formula that makes a page beautiful.',
        ],
      },
      {
        title: 'Separate margins, columns, and gutters',
        paragraphs: [
          'Margins are the outer spaces between the page boundary and its main content. Columns divide the working area into vertical regions. A gutter is the space between columns. These spaces do different jobs: a gutter should not be mistaken for spare room into which a caption can drift without consequences.',
          'For a squared-paper study 20 units wide, reserve 2 units at each outer edge. Use two 7-unit columns with a 2-unit gutter. The complete width is 2 + 7 + 2 + 7 + 2 = 20. Those are invented construction dimensions, not required proportions. They make this layout easy to inspect and reproduce.',
        ],
      },
      {
        title: 'Use the guides, then change the format',
        paragraphs: [
          'Let the title span both columns. Align the drawing and its caption to the left column; align the time, venue, and booking detail to the right. Their column centers are 5.5 and 14.5 units from the left page edge, represented as 27.5 and 72.5 percent in the diagram. Shared edges, rather than every item\'s center, guide the real artwork.',
          'Now imagine the flyer on a narrow phone. Stack title, drawing, caption, event details, and booking information in a readable single column. Do not shrink everything just to keep the two-column arrangement. An intentional exception, such as the spanning title, should clarify a role; an accidental drifting caption should be corrected.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A two-column screening flyer',
        alt: 'A spanning title sits above a drawing and caption in the left column, with event and booking details in the right column.',
        caption: 'Schematic column centers are 27.5 and 72.5 percent. Align actual content edges within the margins and gutter.',
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
        caption: 'The five widths total 20. Bars report dimensions; the spatial diagram shows arrangement.',
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
        'Mark a 20-unit page width. Reserve widths 2, 7, 2, 7, and 2 for the margins, columns, and gutter.',
        'Place a screening title across both columns, with a drawing and caption left and fictional event details right.',
        'Extend each column guide lightly. Correct one element whose edge drifts without a stated reason.',
        'Redraw the same content as one phone-width column. Preserve every detail and readable order instead of shrinking the original.',
      ],
      notice: 'Related edges repeat, the gutter stays clear, and the narrow version retains the message.',
      troubleshooting: 'If the title forces tiny lettering, let it wrap or span more space; the grid should adapt to the words.',
    },
    recall: {
      prompt: 'A museum handout has a caption starting halfway inside the neighboring column. What would you check before adding a border?',
      answer: 'Check which image the caption belongs to and align it with that image\'s column or edge. A border may decorate the ambiguity rather than explain the relationship.',
      hint: 'Find the intended group before choosing the guide.',
    },
    quiz: {
      question: 'The two-column flyer becomes cramped on a phone. Which revision preserves the grid\'s purpose?',
      options: ['Reorganize it into one readable column with the same content order', 'Reduce all type until the original columns fit', 'Remove the caption because its column is too narrow'],
      correctIndex: 0,
      explanation: 'The grid serves readable organization, not a fixed column count. Shrinking or deleting content preserves the old shape at the expense of the task.',
    },
    takeaway: 'Use guides to make relationships repeat, and let the layout change when the available width changes.',
    sourceNote: 'Nielsen Norman Group and Apple provide layout context. The 20-unit grid is original practice geometry, not a universal margin or column prescription.',
  },
  {
    id: 'design-020',
    title: 'Put each form label nearer its own field',
    outcome: 'Use relative spacing to explain which pieces of information belong together.',
    scene: 'A small event-request interface places Date and Venue labels ambiguously between their input fields.',
    sections: [
      {
        title: 'Even spacing creates the wrong question',
        paragraphs: [
          'You sketch an event-request form with Date above one field and Venue above another. Every vertical gap is equal. The second label sits halfway between the field before it and the field after it. A reader can see all the words but must work out which field Venue describes. Mathematical regularity has not made the relationship clear. Before choosing a spacing scale, identify the pairs the layout is meant to communicate.',
        ],
      },
      {
        title: 'Proximity is a relative cue',
        paragraphs: [
          'Proximity means nearness. In a layout, nearby items tend to be perceived as related, especially when alignment and wording support that relationship. A smaller label-to-field gap and a larger gap between complete groups can distinguish the date pair from the venue pair. Equal spacing everywhere can erase that distinction rather than improve it.',
          'There is no compulsory multiplier for the two gaps. Text height, field size, screen width, and the surrounding layout affect the result. Compare visible boundaries as well as center positions. A tall wrapped label can occupy space that a short label did not, changing the apparent gap even when its container starts at the same coordinate.',
        ],
      },
      {
        title: 'Make a pair, then separate the pairs',
        paragraphs: [
          'In the schematic, Date sits above Sat 14 Nov, followed by a larger break before Venue and Library room. The label and its own field are closer than neighboring groups. These fictional entries let you inspect the relationship without collecting anybody\'s real information. Moving a label is a structural change; adding a colored border is not the first requirement.',
          'Ask a willing reader which label belongs to each field without explaining the arrangement. If the pairing is still uncertain, inspect wording and alignment too. Spacing is a cue, not a substitute for clear labels or, in a working interface, programmatic label associations. A paper sketch can expose grouping problems but cannot establish accessible form behavior.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two label-field groups',
        alt: 'Date sits close to its Sat 14 Nov field, followed by a larger break before Venue and its Library room field.',
        caption: 'Schematic centers use smaller within-pair than between-pair gaps. Real spacing must also account for text and control boundaries.',
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
        'Draw Date, an empty field, Venue, and another empty field in a vertical stack. Start with equal gaps.',
        'Draw a second version with each label closer to its own field and more space between the complete pairs.',
        'Fill in fictional values, Sat 14 Nov and Library room. Ask someone to match labels and fields, or inspect without your guide marks.',
        'Replace Venue with Venue and room name, letting it wrap. Adjust the spacing again if that longer label breaks the grouping.',
      ],
      notice: 'The date pair and venue pair remain distinguishable even when a label grows.',
      troubleshooting: 'If larger gaps merely spread the whole form, reduce the within-pair gap instead and recheck alignment.',
    },
    recall: {
      prompt: 'Two photographs on a book page have captions halfway between them. How could spacing clarify ownership without adding arrows?',
      answer: 'Move each caption closer to its photograph and separate the complete photo-caption groups. Check that alignment and reading order support the intended pairing.',
      hint: 'Compare the distance inside a group with the distance to the next group.',
    },
    quiz: {
      question: 'A price sits equally far from two product names on a menu. Which change most directly clarifies its relationship?',
      options: ['Increase all three gaps by the same amount', 'Group the price nearer its product and separate the other product', 'Center every line independently within the page'],
      correctIndex: 1,
      explanation: 'Relative proximity identifies the intended pair. Uniform expansion and independent centering can preserve the ambiguity rather than resolve it.',
    },
    takeaway: 'Let the closest gap express the closest content relationship.',
    sourceNote: 'Nielsen Norman Group supplies visual-grouping guidance. These fictional form trials test a cue, not user prevalence or programmatic accessibility.',
  },
  {
    id: 'design-021',
    title: 'Let the ticket answer the entrance question first',
    outcome: 'Rank information for a reader task and use position and emphasis to support that order.',
    scene: 'A museum-night ticket gives its decorative event name more attention than the Gate C entrance instruction.',
    sections: [
      {
        title: 'The biggest line answers the wrong question',
        paragraphs: [
          'You design a museum-night ticket with a large event name and a small Gate C instruction near the bottom. At the entrance, the visitor already knows which event they booked. Their next question is where to enter, followed by when admission begins. The ticket\'s strongest emphasis answers the less urgent question. Before making the design more dramatic, write the information order for this moment of use rather than the order in which you enjoy drawing the words.',
        ],
      },
      {
        title: 'Hierarchy is an invitation to attend',
        paragraphs: [
          'Visual hierarchy is the order a layout encourages people to notice its information. Size, weight, contrast, position, and surrounding space can all contribute. Making everything large and bold removes relative differences; it does not make every line first. Similarly, a bright decorative badge can compete with useful instructions even if it contains very little information.',
          'Hierarchy is a proposal about attention, not a guaranteed path followed by every reader. Someone scanning for a known word may jump straight to it. The useful test is whether the layout makes the needed information easy to find, without hiding the details required afterward.',
        ],
      },
      {
        title: 'Start with a plain ranked ticket',
        paragraphs: [
          'For this entrance task, rank Gate C first, Admission 19:15 second, and Museum Night third. Try placing the entrance instruction high on the ticket with room around it, grouping the time below, and reducing the competing event-name treatment. Keep every item readable. The position diagram records this order; it is not a font-size or contrast specification.',
          'View a small photograph of the sketch or hold the paper at a comfortable distance. Note what actually stands out before consulting your ranked list. If the event name still dominates, reduce one of its competing signals rather than adding more signals everywhere. Another task, such as finding the ticket in a collection, may justify a different balance of event identity and entrance details.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The proposed entrance-reading order',
        alt: 'Gate C is placed first, Admission 19:15 below it, and Museum Night lower on the ticket.',
        caption: 'A position-based hierarchy for this task. Compare actual type size, weight, and contrast in the finished ticket; reading order is not guaranteed.',
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
        'Draw a fictional ticket containing Museum Night, Gate C, and Admission 19:15. Make the event name dominant in the first draft.',
        'Write a separate ranked list for a visitor standing at the entrance: gate, time, then event identity.',
        'Revise position, size, or surrounding space so the gate has the strongest useful emphasis. Change one competing signal at a time.',
        'View the sketch small and record what you notice first. Compare that observation with your ranked list, retaining all details.',
      ],
      notice: 'The most useful entrance information is easier to locate without making every element shout.',
      troubleshooting: 'If the title still dominates, reduce its size or decoration before enlarging every other line.',
    },
    recall: {
      prompt: 'A library notice announces a room change, but its large club logo attracts attention before the new room number. What should determine the revision?',
      answer: 'The reader needs the changed location. Make that information easier to find and reduce competing logo emphasis while retaining enough identity to recognize the notice.',
      hint: 'Rank what the reader needs to know at this moment.',
    },
    quiz: {
      question: 'Visitors can name the ticket\'s event but repeatedly search for the gate. Which revision best targets the observed problem?',
      options: ['Enlarge the whole ticket, including the already dominant event name', 'Choose a more expressive display typeface for the event name', 'Reduce competing title emphasis and give the gate a clearer position'],
      correctIndex: 2,
      explanation: 'The third revision changes the relative attention signals around the missing information. Enlarging everything or restyling the title can leave the same competition intact.',
    },
    takeaway: 'Rank the reader\'s task before ranking the visual emphasis.',
    sourceNote: 'Nielsen Norman Group and Getty discuss visual hierarchy and emphasis. Ticket observations are hypothetical; this exercise does not claim a measured reading sequence.',
  },
  {
    id: 'design-022',
    title: 'Choose text roles before adding another typeface',
    outcome: 'Compare a one-family layout with a purposeful two-family alternative using actual title and paragraph text.',
    scene: 'A self-written chapbook titled Small Rain needs an expressive heading and a comfortable reading paragraph.',
    sections: [
      {
        title: 'Two roles do not automatically need two families',
        paragraphs: [
          'You are laying out a self-written chapbook called Small Rain. Its opening sentence is The roof holds yesterday\'s rain. You want the title to have a distinct voice, but the paragraph should remain easy to follow. It is tempting to choose several attractive fonts before placing the words. Start with the roles instead: display text introduces the piece; body text supports sustained reading. One type family may already supply enough size, weight, or italic variation for both.',
        ],
      },
      {
        title: 'Difference should explain a role',
        paragraphs: [
          'A type family usually contains related styles, such as regular and bold. A second family introduces different letter constructions and proportions as well as another choice to coordinate. Serif type has small finishing strokes on many main strokes; sans serif lacks those serifs. Pairing the two categories does not automatically make a good combination, and two sans families are not automatically incompatible.',
          'Compare apparent size, lowercase proportions, stroke weight, spacing, and supported characters. A display face that handles the title well may lack useful paragraph styles or required accents. Similarity can connect the roles; difference can separate them. Neither exact x-height matching nor maximum contrast between families is a universal requirement.',
        ],
      },
      {
        title: 'Make the second family earn its place',
        paragraphs: [
          'First set Small Rain in the chosen family\'s bold style and its paragraph in regular. Then try a second family only for the title, leaving the paragraph and page width unchanged. Read the title and several real sentences, not just font names or an alphabet. If the second family adds a useful display voice without weakening the reading relationship, keep testing it.',
          'If it adds only a subtle mismatch that looks accidental, return to the single family. The role diagram positions a title, opening paragraph, and page number; it is not a preview of specific font files. Check the actual selected fonts at the intended size, including the punctuation and languages your chapbook will use.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A chapbook page with distinct type jobs',
        alt: 'Small Rain introduces the page, the original opening paragraph sits below, and a page number occupies a separate lower position.',
        caption: 'A spatial role plan, not a font specimen. Compare real font previews using these words before deciding whether the title needs a second family.',
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
        'Use Small Rain and three sentences you write about rain. Assign title and body roles before choosing styles.',
        'Try one available family with title and body weights. Without font controls, sketch their placement and label the intended roles.',
        'If previews are available, change only the title family. Keep body text, width, and intended reading size steady.',
        'Read both versions and name what the second family adds. On paper, record the font-preview check still needed rather than pretending to complete it.',
      ],
      notice: 'The second family has a stated purpose, or you have a reason to keep the simpler one-family version.',
      troubleshooting: 'If differences look accidental, compare apparent size and weight before adding a third family.',
    },
    recall: {
      prompt: 'A festival program already has clear headings and readable paragraphs in one family. When would another family be worth testing?',
      answer: 'When a specific role remains unmet, such as a distinct performance-title voice or required characters. Test that role with actual program text instead of adding variety for its own sake.',
      hint: 'Name the missing job before naming a font.',
    },
    quiz: {
      question: 'A proposed heading font looks appealing alone but has nearly the same proportions as the body font, with an awkward weight mismatch. What is the best next comparison?',
      options: ['Add a third font to bridge the difference', 'Match nominal sizes and assume the pairing is resolved', 'Compare adjusted roles against the original single-family version'],
      correctIndex: 2,
      explanation: 'The baseline shows whether the second family contributes anything useful after adjustment. More families or equal nominal sizes do not settle the actual role relationship.',
    },
    takeaway: 'A second typeface should do a needed job better than the first family can.',
    sourceNote: 'Google Fonts Knowledge and Apple provide typography guidance. The chapbook text and role diagram are original; no serif-sans pairing or metric guarantees readability.',
  },
  {
    id: 'design-023',
    title: 'Check the small repair-workshop details on a phone',
    outcome: 'Inspect necessary small text at its intended size and distinguish contrast measurement from general legibility.',
    scene: 'A repair-workshop flyer has a readable heading but faint date and venue text when fitted to a phone screen.',
    sections: [
      {
        title: 'The heading is not the information that failed',
        paragraphs: [
          'Your repair-workshop flyer looks clear when enlarged. Fitted to an older phone, its heading is still readable, but Saturday 14 November and Library room become faint. Those are the details a visitor needs. Inspect the smallest necessary text at the intended display size, using comfortable viewing distance and ordinary brightness. Thin strokes, condensed forms, confusing characters, weak contrast, and a busy background can each create a different obstacle.',
        ],
      },
      {
        title: 'Measure contrast without rounding a failure upward',
        paragraphs: [
          'For web text, WCAG 2.2 Level AA ordinarily requires at least 4.5:1 contrast; large text has a 3:1 threshold, with defined exceptions. Large means at least 18 pt regular or 14 pt bold, not simply text called a heading. Contrast uses relative luminance of the actual foreground and background, not a subtraction of RGB channel numbers.',
          'For opaque sRGB colors, #777777 on #FFFFFF has approximately 4.478:1 contrast, below 4.5:1. #595959 on the same white has approximately 7.005:1. Displayed ratios are rounded here for explanation; decide conformance from the unrounded calculation. Passing a ratio does not guarantee that tiny or thin letters will be comfortable to read.',
        ],
      },
      {
        title: 'Revise the weak detail and test it again',
        paragraphs: [
          'For the flyer, try darker date and venue text, enough size and weight, and a plain background behind those details. A larger decorative heading does not repair them. Test similar characters in actual content, such as Room I1, rather than judging only a familiar event name. If that room code remains ambiguous, a clearer typeface or more explicit wording may be needed.',
          'A screenshot fitted to a phone checks the shared image at that size, but it does not prove live text resizing or accessibility conformance. Prefer specified colors for contrast calculations because compression and antialiasing complicate screenshot sampling. Check the final sharing format and keep observations modest: one reader succeeding is feedback, not evidence that every reader will succeed.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Two detail-text colors on white',
        alt: 'Gray 777777 falls below ordinary-text contrast on white, while darker gray 595959 exceeds that threshold.',
        caption: 'Opaque sRGB examples on #FFFFFF. Approximate displayed ratios are not rounded pass decisions; these chips do not test font size or weight.',
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
        'Make a small fictional flyer with Repair workshop, Saturday 14 November, and Library room. Include all three lines.',
        'Photograph it and fit the whole flyer to your phone without zooming. Without a camera, make a small paper copy instead.',
        'Read the date and venue before admiring the title. Darken, enlarge, or simplify the background behind the weakest detail.',
        'Compare the revised version at the same size. Use the supplied color ratios as a separate example, not a measurement of your pencil.',
      ],
      notice: 'Necessary details become easier to distinguish in the intended view, with contrast and size considered separately.',
      troubleshooting: 'If glare dominates, change your viewing position first. Do not compensate by assuming maximum screen brightness is normal use.',
    },
    recall: {
      prompt: 'A train-seat label passes its measured text contrast, but I, l, and 1 are difficult to distinguish. What remains to be tested?',
      answer: 'Test character shapes, size, weight, and context at the actual display size. A contrast pass does not establish that similar characters are distinct.',
      hint: 'The ratio measures a color relationship, not the construction of letters.',
    },
    quiz: {
      question: 'A small ordinary-text caption measures 4.49:1 against its background. Which decision follows from the 4.5:1 AA threshold?',
      options: ['Change the pair and remeasure because it is below the threshold', 'Round the displayed ratio to 4.5 and accept it', 'Use the 3:1 threshold because the caption is styled as a heading'],
      correctIndex: 0,
      explanation: 'The unrounded value must reach the applicable threshold. Rounding cannot create a pass, and a heading label does not establish the defined large-text size.',
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
    outcome: 'Stress-test long text and reader spacing without clipping content or shrinking letters to preserve a tidy box.',
    scene: 'A sketch-walk signup panel must expand from a short title to a longer accessible description.',
    sections: [
      {
        title: 'The short title concealed a fixed-height assumption',
        paragraphs: [
          'Your signup panel fits Sketch walk above a date and a Join button. Replace the title with Saturday sketch walk for first-time visitors and its second line overlaps the date. The short sample concealed a fixed-height assumption. Typographic craft includes accommodating real words, names, accents, and reader preferences, not just polishing a short title.',
        ],
      },
      {
        title: 'Growth should move the following content',
        paragraphs: [
          'Let the title wrap and its container grow. Move the date and button down, preserving their relationship. Shrinking letters or silently removing first-time visitors keeps the box but loses information. In a functioning interface, test the action after the layout grows, not only text visibility.',
          'WCAG Text Spacing tests relevant markup-based content with simultaneous reader overrides. Its minimum test values are 1.5 times font size for line height, 2 times for following-paragraph spacing, 0.12 times for letter spacing, and 0.16 times for word spacing. These are not mandatory authored defaults or maximum permitted preferences.',
        ],
      },
      {
        title: 'Use a concrete stress-test sheet',
        paragraphs: [
          'At a 16 px font size, those example settings are 24 px line height, 32 px following-paragraph spacing, 1.92 px letter spacing, and 2.56 px word spacing. The latter two are spacing adjustments, not glyph widths or the entire width of a space character. Keep font size unchanged during this particular override test; text resizing is a separate check.',
          'On paper, draw the long title with looser lines and move everything below it. That exposes the fixed-height assumption without special software, but a finished website still needs live override testing. Check applicable script exceptions and ensure content and function survive. A larger photograph of the original panel only enlarges pixels; it does not demonstrate reflow or spacing resilience.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The expanded panel keeps its reading order',
        alt: 'A wrapped sketch-walk title occupies the upper region, with date details and a Join action moved below it.',
        caption: 'Schematic reflow: title growth moves the date and Join action down without clipping.',
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
        caption: 'Multiply 16 by 1.5, 2, 0.12, and 0.16 respectively. Apply the four settings together, not as one sum.',
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
        'Draw a phone-width panel with Sketch walk, Saturday at 10, Library steps, and a Join button.',
        'Redraw it with Saturday sketch walk for first-time visitors. Keep the letter size and allow additional title lines.',
        'Increase line and word spacing on paper, then move the date, meeting point, and button below the enlarged title block.',
        'Check every word and action. A live layout needs actual spacing overrides and a working button; paper checks only planning.',
      ],
      notice: 'The longer version retains its message and action without smaller letters.',
      troubleshooting: 'If space runs out, extend the page. Do not remove information just to preserve the drawing boundary.',
    },
    recall: {
      prompt: 'A library booking button grows to two lines after a reader changes spacing, and its bottom line is clipped. What should change?',
      answer: 'Allow enough height and appropriate wrapping, move neighboring content if necessary, and retest the live control. Hiding the second line or reducing the requested spacing preserves the wrong constraint.',
      hint: 'The container should accommodate the text, not require text to conceal its overflow.',
    },
    quiz: {
      question: 'A website works at default spacing but loses a date when the specified reader overrides are applied. Which conclusion is justified?',
      options: ['The defaults must be replaced by those exact values on every page', 'The layout needs revision so the overrides do not lose content or function', 'The default screenshot establishes that the original design is sufficient'],
      correctIndex: 1,
      explanation: 'The criterion concerns surviving overrides, not forcing one default style. A default screenshot cannot show that the changed live layout preserves its information.',
    },
    takeaway: 'Test realistic text growth and reader spacing before polishing the sample layout.',
    sourceNote: 'W3C Text Spacing was checked; Apple remains inherited. Paper does not prove conformance, applicability, or correct handling of script exceptions.',
  },
]