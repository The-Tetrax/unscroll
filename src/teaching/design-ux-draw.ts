import type { LessonGuide } from './types'

// Sources are inherited from the existing lesson IDs. These examples and drawings are original.
// Practice budgets are suggestions. Paper prototypes do not establish WCAG conformance.
export const designUxDrawGuides: LessonGuide[] = [
  {
    id: 'design-025',
    title: 'Test the booking task, not your liking for the screen',
    outcome: 'Separate a visual preference from evidence that someone can complete a particular interface task.',
    scene: 'Changing a workshop booking date in a paper prototype.',
    sections: [
      {
        title: 'The attractive booking summary',
        paragraphs: [
          'A fictional pottery workshop sends you a booking summary. Its cream background, large photograph, and careful spacing look inviting. Your task is to move the booking from Saturday to Sunday. You try the date, then the photograph, before finding a small Manage link. Nothing about liking the page tells you whether that route was discoverable. Conversely, an easy date change would not establish that you like the photograph. These are different observations about the same screen.',
        ],
      },
      {
        title: 'Specify what success means',
        paragraphs: [
          'Usability concerns a person, a goal, and the conditions of use. Here success means reaching a review that shows Sunday without accidentally confirming a change. The controls must explain where to act, show the selected date, and allow a return to the unchanged booking. A visual impression can influence a report of ease, so record concrete actions separately from compliments. A pause alone is ambiguous: someone might be reading the cancellation terms rather than searching for a missing control.',
        ],
      },
      {
        title: 'Compare two routes',
        paragraphs: [
          'On a revised sketch, put Change date beside Saturday. Selecting it opens the date choices; choosing Sunday leads to Review change. Keep Cancel visible. Compare where a willing reader starts and whether the review matches their intention, rather than asking which sketch looks more professional. For a keyboard version, check that the same controls receive visible focus in a sensible order. A pencil rehearsal can expose a missing step, but cannot prove the live focus behavior. Stop before any real booking or payment changes.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A date change with a review',
        alt: 'Booking details lead through Change date and Sunday selection to a review, before confirmation.',
        caption: 'Fictional interface states. The last state reviews the proposed date; it has not changed the booking.',
        items: [
          { label: 'Saturday booking', detail: 'Change date sits beside the date.' },
          { label: 'Choose Sunday', detail: 'The selected day stays visible.' },
          { label: 'Review change', detail: 'Sunday proposed; Confirm or Cancel.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Pencil', 'Optional willing reader'],
      steps: [
        'Draw a Saturday booking card with a photograph placeholder, date, and a small Manage link.',
        'Write one appearance preference, then separately record the route you expect for changing the date.',
        'Draw the revised card, Sunday choice, and review. Label Change date, Confirm, and Cancel.',
        'Rehearse with a reader or trace both routes yourself. Record first actions, not an overall beauty score.',
      ],
      notice: 'Your notes distinguish an appearance judgment from a missing or misunderstood task step.',
      troubleshooting: 'If success says looks cleaner, replace it with reaching the correct review without confirming.',
    },
    recall: {
      prompt: 'A music app looks polished, but someone cannot find downloaded albums. What would you investigate separately?',
      answer: 'Record the visual preference, then trace finding and opening an offline album. Inspect labels, wrong turns, and whether the album is actually available offline.',
      hint: 'Name an observable destination, not a feeling about the layout.',
    },
    quiz: {
      question: 'A reader praises the booking screen but enters the wrong date. Which next check addresses usability?',
      options: ['Ask for a second palette preference', 'Inspect selection feedback and the review date', 'Compare the photograph with another workshop'],
      correctIndex: 1,
      explanation: 'Selection and review concern the failed task. Palette and photograph comparisons could inform appearance, but do not explain the wrong date.',
    },
    takeaway: 'Keep appearance notes and task evidence separate, then improve the observed route.',
    sourceNote: 'NN/G heuristics and aesthetic-usability guidance frame the distinction. This fictional rehearsal is not a measured usability study.',
  },
  {
    id: 'design-026',
    title: 'Give a gallery action a cue people can recognize',
    outcome: 'Match visible action cues to working controls, including a discoverable keyboard route.',
    scene: 'Opening and keeping a leaf study in a small gallery.',
    sections: [
      {
        title: 'What does the picture do?',
        paragraphs: [
          'A gallery card shows your own leaf drawing and its title, Bent stem. The entire card secretly opens a larger view. A tiny star in its corner keeps a copy offline. A newcomer could reasonably expect the star to mean a rating instead. Both actions might work in code, yet the picture does not explain them. Adding another decorative border would not settle whether to tap the picture, its title, or the star. The missing information is about action, not ornament.',
        ],
      },
      {
        title: 'Possibility and its signal',
        paragraphs: [
          'An affordance is an action available in the relationship between a person and something they can use. A signifier is a perceptible cue about that action. A handle suggests where to grasp; a labeled control suggests where to activate. The cue must match the actual capability. A control that looks active but cannot work needs an explanation, not just a paler color. For an interface, appearance alone also cannot supply keyboard behavior: the implementation needs appropriate links or buttons.',
        ],
      },
      {
        title: 'Separate opening from keeping',
        paragraphs: [
          'Give the card a View study link and a Keep offline button. The link changes the view; the button requests storage without unexpectedly opening another page. Keep their targets separate rather than nesting one interactive control inside another. On paper, number the intended focus order and draw an outline around the currently focused control. In the live version, verify that Tab reaches both controls, that their accessible names identify the study, and that activation does what each label promises. A named action is a proposal to test, not a guarantee of understanding.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two actions on one gallery card',
        alt: 'A leaf preview and title sit above separate View study and Keep offline controls.',
        caption: 'Card contents only, without browser decoration. Separate hit areas support two different actions.',
        items: [
          { label: 'Leaf preview', detail: 'Original Bent stem study.', x: 22, y: 23, shape: 'paper' },
          { label: 'Bent stem', detail: 'Title identifies the work.', x: 78, y: 23, shape: 'object' },
          { label: 'View study', detail: 'Link; focus stop 1.', x: 22, y: 77, shape: 'box' },
          { label: 'Keep offline', detail: 'Button; focus stop 2.', x: 78, y: 77, shape: 'box' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Sketch a gallery card with a title, drawing placeholder, and unlabeled star. List two possible star meanings.',
        'Replace ambiguity with separate View study and Keep offline controls. Write what each changes.',
        'Number the focus stops and trace opening, returning, then keeping the study without opening it again.',
        'Add an unavailable state with a reason, such as storage unavailable, without disguising it as a working action.',
      ],
      notice: 'Each action has a named target, expected result, and planned focus stop.',
      troubleshooting: 'If a control needs verbal explanation, revise its label before adding another icon.',
    },
    recall: {
      prompt: 'A document row opens on click, while an unmarked corner renames it. How would you clarify the actions?',
      answer: 'Provide an identifiable document link and a separate Rename control. Check each target and keyboard action instead of relying on invisible regions.',
      hint: 'Distinguish going somewhere from changing something.',
    },
    quiz: {
      question: 'People mistake Keep offline for a rating. Which first revision addresses that misunderstanding?',
      options: ['Name the action beside its control', 'Enlarge the unchanged star alone', 'Add a hover effect to the picture'],
      correctIndex: 0,
      explanation: 'A label explains the action. Enlargement improves visibility but preserves the ambiguous meaning; hover alone misses touch and keyboard use.',
    },
    takeaway: 'Make the action possible, name it visibly, and verify the promised input routes.',
    sourceNote: 'NN/G heuristics support discoverability and consistency. The gallery and focus plan are original examples, not tested implementation.',
  },
  {
    id: 'design-027',
    title: 'Distinguish downloading a map from having it offline',
    outcome: 'Describe pending, successful, and failed states without claiming an unconfirmed result.',
    scene: 'Saving a fictional park map for offline viewing.',
    sections: [
      {
        title: 'The second tap',
        paragraphs: [
          'You choose Download area for a fictional park map. The button briefly darkens, then looks unchanged. Did the map save, did the request fail, or is work still happening? Tapping again is a reasonable response to silence, but could start duplicate work. The color change acknowledges contact with the control; it does not prove that map data reached the device. This distinction matters whenever someone needs the result later without the connection that made the request possible.',
        ],
      },
      {
        title: 'Name the state you know',
        paragraphs: [
          'Feedback explains the current state and what remains possible. Downloading park map means work is underway. Available offline belongs after the required data has been received and stored successfully. Download interrupted describes a failure without pretending to know its cause. If total progress is unknown, use words rather than an invented percentage. Keep duplicate activation unavailable while work is pending, but explain why. A forever-spinning indicator leaves the central question unanswered just as surely as no indicator at all.',
        ],
      },
      {
        title: 'Keep the next action attached',
        paragraphs: [
          'After confirmed storage, offer Open saved map. After interruption, show Retry and state whether anything usable remains. If there was an older saved edition, distinguish that edition from the failed update instead of silently labeling it current. Keep feedback visible near the control, and make status changes available to assistive technology without moving keyboard focus unexpectedly. A retry should not erase a working older copy before its replacement is ready. These are interface requirements to rehearse; a paper message cannot verify storage or prove that a screen reader announces it.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A download has two possible outcomes',
        alt: 'Download area leads to Downloading, which branches to interrupted or confirmed offline availability.',
        caption: 'Fictional state diagram. Only the confirmed storage branch earns the offline label.',
        items: [
          { label: 'Download area', detail: 'Ready for activation.', x: 20, y: 20, shape: 'box' },
          { label: 'Downloading', detail: 'No duplicate request.', x: 80, y: 20, shape: 'box' },
          { label: 'Interrupted', detail: 'Retry; old saved map retained.', x: 20, y: 80, shape: 'box' },
          { label: 'Available offline', detail: 'Open saved map.', x: 80, y: 80, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Activate' }, { from: 1, to: 2, label: 'Failure' }, { from: 1, to: 3, label: 'Stored' }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Four paper slips', 'Pencil'],
      steps: [
        'Label slips Ready, Downloading, Available offline, and Interrupted. Add the park map name to each.',
        'Give every slip a truthful message and next action. Reserve Open saved map for confirmed availability.',
        'Rehearse success and failure separately. Mark where focus stays and how a second activation is handled.',
        'Add an older saved edition to the failure story. State explicitly that the update did not replace it.',
      ],
      notice: 'Neither receiving a tap nor beginning a download is mistaken for stored data.',
      troubleshooting: 'If the failure message says saved, identify which edition is actually available or remove the claim.',
    },
    recall: {
      prompt: 'A note editor displays Saved immediately, before its storage request finishes. What states should replace that shortcut?',
      answer: 'Show Saving while pending, then Saved only after confirmation. On failure, explain what remains available and offer a safe retry.',
      hint: 'Separate intention, work in progress, and evidence of completion.',
    },
    quiz: {
      question: 'A map transfer finishes, but local storage fails. Which feedback fits?',
      options: ['Available offline because transfer finished', 'Keep Downloading until the next visit', 'Not saved offline, with a recovery action'],
      correctIndex: 2,
      explanation: 'Transfer and persistent storage are separate. A success label overstates availability, while leaving the pending message conceals the failure.',
    },
    takeaway: 'Feedback should report the state confirmed by the system, with an honest next action.',
    sourceNote: 'NN/G system-status guidance and W3C color guidance support the principles. The map states do not demonstrate actual offline storage.',
  },
  {
    id: 'design-028',
    title: 'Keep the checkout work when one field needs repair',
    outcome: 'Write a specific, recoverable error and preserve the valid parts of a fictional form.',
    scene: 'Correcting a receipt email while ordering original prints on paper.',
    sections: [
      {
        title: 'One incomplete address',
        paragraphs: [
          'In a paper checkout for your own art prints, the basket and pickup name are complete, but the receipt email says lee@. Selecting Review order produces Invalid input above the whole page. The reader must inspect every field to discover which entry failed. Clearing the form would make the problem worse: correct work would disappear because one field needs attention. A useful error should narrow the repair, not send someone back through the entire task from memory.',
        ],
      },
      {
        title: 'State the known problem',
        paragraphs: [
          'The system knows that this email entry is incomplete. A nearby message can say Add the part after @, with an example address clearly labeled as an example. Keep the field label visible and associate the message with that field in the real interface. Do not claim that the person is careless or that their network failed. Those are different explanations, and neither follows from this validation result. Instructions shown before submission can also prevent a predictable format mistake.',
        ],
      },
      {
        title: 'Repair without losing the route',
        paragraphs: [
          'Retain the basket, pickup name, and typed email. A page-level error summary can link to the affected field, while the field carries the specific correction. Plan where keyboard focus goes after submission so the error is found rather than silently appearing elsewhere. After repair, Review order should show the same basket with the corrected address. Distinguish this known validation failure from an uncertain order response: if confirmation is unknown, blindly asking for another purchase risks duplication. This exercise stops at a fictional review and never submits an order.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Repair one field, keep the basket',
        alt: 'An incomplete receipt email gets a field message, is corrected, and returns to order review.',
        caption: 'Paper checkout states, not a payment flow. Valid entries survive every step.',
        items: [
          { label: 'Receipt email: lee@', detail: 'Basket and pickup name remain.' },
          { label: 'Email needs attention', detail: 'Add the part after @.' },
          { label: 'Correct and review', detail: 'Same basket; updated receipt email.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Pencil', 'Invented contact details'],
      steps: [
        'Draw a basket, pickup-name field, receipt-email field, and Review order control. Enter an incomplete fictional email.',
        'Add a nearby correction and a summary link naming the field. Keep every existing entry visible.',
        'Mark the planned focus destination after rejection and the route back to Review order after repair.',
        'Write the repaired review on another sheet. Check that no valid basket or pickup information disappeared.',
      ],
      notice: 'The error identifies a repair while the rest of the task stays intact.',
      troubleshooting: 'If the message only says invalid, name the affected field and the specific known problem.',
    },
    recall: {
      prompt: 'A drawing upload exceeds a known file-size limit. What should an error preserve and explain?',
      answer: 'Keep the title and description, identify the selected file and actual limit, and offer choosing a smaller file. Do not blame connectivity without evidence.',
      hint: 'Separate useful completed input from the part that needs replacement.',
    },
    quiz: {
      question: 'A reader cannot locate the failed field. Which revision most directly helps recovery?',
      options: ['Disable Review without explaining why', 'Link a summary to a nearby field-specific message', 'Move the same generic error into a dialog'],
      correctIndex: 1,
      explanation: 'The linked, specific message supplies location and correction. Disabling or relocating a vague error still leaves the reader guessing.',
    },
    takeaway: 'Name the known failure, preserve valid work, and make the repair route discoverable.',
    sourceNote: 'NN/G heuristics support prevention and recovery. The checkout is fictional; focus, validation, and transaction safety need implementation testing.',
  },
  {
    id: 'design-029',
    title: 'Compare the whole menu search, not just button counts',
    outcome: 'Use choice complexity as a question without turning Hick\'s law into a menu-size rule.',
    scene: 'Finding Resize in two layouts of a simple image editor.',
    sections: [
      {
        title: 'Eight commands or two headings?',
        paragraphs: [
          'Your imaginary image editor has eight commands: Crop, Export, Flip, Import, Print, Rename, Resize, and Rotate. A flat alphabetical list looks long, so you replace it with File and Edit menus. Only two choices remain visible, but someone wanting a smaller image must now choose a heading before finding Resize. A shorter first screen has not necessarily removed work. It has moved some work into predicting where the command lives, especially for someone unfamiliar with editor conventions.',
        ],
      },
      {
        title: 'What the model leaves out',
        paragraphs: [
          'Hick\'s law concerns choice reaction time under controlled conditions and the information involved in selecting a response. Its familiar simplified treatment assumes equally likely alternatives. It does not predict a complete editing task from a button count. Real menu use includes recognizing a word, searching a location, deciding between related operations, and sometimes correcting a wrong choice. Familiarity changes those demands. There is no universal seven-item limit hiding inside the law, and removing a needed command would not make its task easier.',
        ],
      },
      {
        title: 'Make the grouping answer the goal',
        paragraphs: [
          'Try Edit for Crop, Flip, Resize, and Rotate, and File for the other four commands. Then ask for a smaller pixel width without cutting away picture content. Crop and Resize are plausible competitors, so a short description can clarify the distinction. Compare where a reader looks and what they expect, not a tiny timing difference from one attempt. For keyboard use, preserve a discoverable route through the headings and their options. Useful grouping earns its place by helping this search; it does not win merely because fewer labels are initially visible.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two ways to look for Resize',
        alt: 'An alphabetical command list is compared with File and Edit menus containing the same eight commands.',
        caption: 'Same commands, different search routes. Neither layout has a predicted speed advantage here.',
        items: [
          { label: 'Alphabetical list', detail: 'Crop, Export, Flip, Import, Print, Rename, Resize, Rotate.' },
          { label: 'Grouped menus', detail: 'Edit: Crop, Flip, Resize, Rotate. File: Export, Import, Print, Rename.' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Paper', 'Pencil', 'Optional willing reader'],
      steps: [
        'Write all eight commands alphabetically. Beside them, draw File and Edit with the groups shown above.',
        'Set the goal: reduce pixel width while keeping the whole picture. Do not name the target command.',
        'Try both routes with a reader, or predict each decision yourself. Record wrong categories and ambiguous labels.',
        'Add a short Resize description and repeat the search. Note the change without claiming a general speed result.',
      ],
      notice: 'Your comparison records navigation and meaning, not just how many labels remain visible.',
      troubleshooting: 'If both versions feel obvious to you, use an unfamiliar task or a willing newcomer rather than inventing difficulty.',
    },
    recall: {
      prompt: 'A restaurant hides every dish inside unfamiliar category names. Why could this be harder than a longer menu?',
      answer: 'People must interpret the categories before seeing dishes. Clear group names, search, or a visible list may better support finding a known meal.',
      hint: 'Count the decisions introduced by hiding choices.',
    },
    quiz: {
      question: 'A redesign cuts eight visible commands to two headings. What evidence is still needed?',
      options: ['Whether two is below a universal menu limit', 'Whether both headings use the same letter count', 'Whether people can locate and distinguish the needed command'],
      correctIndex: 2,
      explanation: 'The task includes category prediction and command meaning. Visible count alone cannot establish that the whole search improved.',
    },
    takeaway: 'Reduce unnecessary decision work, not necessary information or visible choices indiscriminately.',
    sourceNote: 'Inherited IxDF and NN/G references explain the model and disclosure. This menu comparison supplies no experimental reaction-time estimate.',
  },
  {
    id: 'design-030',
    title: 'Check the colors behind the actual caption',
    outcome: 'Apply the ordinary-text contrast threshold without rounding a failing ratio upward.',
    scene: 'Choosing gray text for an original print catalog caption.',
    sections: [
      {
        title: 'A quiet caption that disappears',
        paragraphs: [
          'An original print catalog uses a small gray caption for paper size and pickup details. On your bright monitor it looks restrained; on another view it is hard to read. Instead of arguing about whether gray feels elegant, identify the actual text and background colors. This example compares #777777 and #595959 text on a solid #FFFFFF background. The task is reading necessary information, so making the caption nearly invisible is not a substitute for arranging it lower in the hierarchy.',
        ],
      },
      {
        title: 'Use the applicable threshold',
        paragraphs: [
          'WCAG 2.2 Level AA requires at least 4.5:1 for ordinary text and 3:1 for large text, with defined exceptions such as certain incidental text and logotypes. Large text means at least 18 point, or 14 point bold, not simply a heading tag. The ratio compares relative luminance, a calculated lightness measure for the specified colors. It does not measure taste, comprehension, or every reader\'s comfort. A calculated 4.499:1 remains below 4.5:1; rounding cannot turn failure into compliance.',
        ],
      },
      {
        title: 'Read the result in context',
        paragraphs: [
          'For these opaque colors, #777777 on white is approximately 4.478:1, below the ordinary-text threshold. #595959 on white is approximately 7.005:1, above it. These displayed approximations explain the comparison; use the unrounded calculation for the decision. Keep the caption size unchanged while comparing the two grays. Then inspect letter weight and actual reading size separately. If the caption sits over a photograph, a single white-background result no longer answers the question: test the backgrounds it actually crosses, or provide a stable contrasting surface behind it.',
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Two caption grays on white',
        alt: 'Gray 777777 fails ordinary-text contrast on white; gray 595959 passes that threshold.',
        caption: 'Specified opaque sRGB colors. Ratios are approximate labels, not rounded pass criteria or calibrated screen samples.',
        items: [
          { label: 'Caption A: #777777', detail: 'On white: about 4.478:1. Below 4.5:1.', color: '#777777' },
          { label: 'Caption B: #595959', detail: 'On white: about 7.005:1. Above 4.5:1.', color: '#595959' },
          { label: 'Surface: #FFFFFF', detail: 'Same background for both comparisons.', color: '#FFFFFF' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Browser', 'Contrast checker linked by the W3C reference', 'A note'],
      steps: [
        'Open a checker from the linked W3C contrast page. Enter #777777 foreground and #FFFFFF background.',
        'Record the ordinary-text AA result, not just its rounded display ratio. Repeat with #595959 foreground.',
        'Write a catalog caption and state its intended size. Decide whether the ordinary or large-text threshold applies.',
        'Note one separate readability check, such as thin strokes or text over imagery, that the ratio cannot settle.',
      ],
      notice: 'Your note identifies both colors, the applicable threshold, and a result without upward rounding.',
      troubleshooting: 'If results differ, check opacity, foreground/background entries, and whether the checker is evaluating text rather than non-text controls.',
    },
    recall: {
      prompt: 'White text passes on one dark photograph corner but crosses a pale cloud. What should you test?',
      answer: 'Evaluate the actual backgrounds behind the letters, including the cloud. A stable dark text surface is one option; the corner alone proves nothing about other areas.',
      hint: 'The background is a local relationship, not the average image color.',
    },
    quiz: {
      question: 'An ordinary caption measures 4.499:1. Which decision follows the criterion?',
      options: ['Revise the pair because it is below 4.5:1', 'Accept it after rounding to one decimal', 'Accept it because the element is named heading'],
      correctIndex: 0,
      explanation: 'The actual ratio must reach the threshold. Rounding and semantic element names do not change the measured contrast or large-text definition.',
    },
    takeaway: 'Measure the specified text/background pair, then check reading conditions beyond the ratio.',
    sourceNote: 'W3C SC 1.4.3 was spot-checked. These selected contrast checks do not establish full WCAG conformance.',
  },
  {
    id: 'design-031',
    title: 'Keep a route status understandable without its color',
    outcome: 'Add visible words and a matching list so color is not the only carrier of route status.',
    scene: 'A fictional garden map has one open route and one closed route.',
    sections: [
      {
        title: 'Two lines without their legend',
        paragraphs: [
          'A fictional garden map splits at a pond. The riverside route is red because it is closed; the garden route is green because it is open. A visitor printing in grayscale sees two routes but cannot recover their status. Increasing both colors\' saturation would not fix that printout. Nor would a legend that says follow the green line. The missing information is which route is open, not merely whether two colored marks can be told apart on your own display.',
        ],
      },
      {
        title: 'Carry meaning in another channel',
        paragraphs: [
          'WCAG treats using color alone for information separately from text contrast. Readable colored labels can still be ambiguous if the words themselves never identify the state. Add Riverside: closed and Garden: open beside the routes, with a distinct closure mark where useful. The words name both the route and its condition. A different line pattern can reinforce the distinction, but an unfamiliar pattern still needs explanation. Color remains useful; it no longer has to do the entire communication job.',
        ],
      },
      {
        title: 'Give the map a readable companion',
        paragraphs: [
          'Below the map, list the same named routes and statuses as text. A person using keyboard navigation should reach equivalent route details without hunting for an unlabeled colored segment. Do not imply that a line is accessible or safe merely because it is marked open; those are different claims needing relevant information. Compare the diagram and list whenever a status changes so they do not contradict each other. A grayscale check can expose color dependence, but it neither simulates every color-vision difference nor verifies screen-reader access. Here every route and status is invented for practice.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Named routes from the pond fork',
        alt: 'Entrance reaches a fork; Riverside is labeled closed and Garden open, with a matching text list.',
        caption: 'Fictional map, not navigation advice. Read the words even when all colors are removed.',
        items: [
          { label: 'Entrance', detail: 'Starting position.', x: 18, y: 80, shape: 'person' },
          { label: 'Pond fork', detail: 'Routes separate here.', x: 50, y: 48, shape: 'circle' },
          { label: 'Riverside: closed', detail: 'Closure named in words.', x: 18, y: 16, shape: 'box', color: '#923B36' },
          { label: 'Garden: open', detail: 'Status named in words.', x: 82, y: 16, shape: 'box', color: '#326448' },
          { label: 'Route list', detail: 'Same names and statuses.', x: 82, y: 80, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2, label: 'Riverside' }, { from: 1, to: 3, label: 'Garden' }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pencil', 'Optional colored pencils'],
      steps: [
        'Draw an entrance, fork, and two named routes. Initially indicate open and closed using only color labels.',
        'Cover the color legend. Add status words and a distinct closure mark directly to the map.',
        'Write a companion route list with matching statuses and the details each route control would open.',
        'Check the map using pencil alone. Confirm that no instruction still depends on recognizing red or green.',
      ],
      notice: 'Route names and statuses survive the loss of hue, both on the map and in the list.',
      troubleshooting: 'If a reader needs the color legend, put the essential status into words beside the affected route.',
    },
    recall: {
      prompt: 'A practice log marks missed and completed days with two colored dots. What should survive a monochrome view?',
      answer: 'Each day needs a meaningful state label or explained distinct mark, not just a different shade. Keep text contrast and accessible naming as separate checks.',
      hint: 'Ask what the dots mean, not only whether they look different.',
    },
    quiz: {
      question: 'Both map colors pass contrast checks, but only hue indicates closure. Which revision addresses the remaining problem?',
      options: ['Increase both line widths equally', 'Choose two darker hues', 'Add named open and closed labels'],
      correctIndex: 2,
      explanation: 'Words carry the missing status independently of hue. More contrast or identical width changes do not explain which route is closed.',
    },
    takeaway: 'Let color reinforce information that remains understandable through another visible cue.',
    sourceNote: 'Inherited W3C Use of Color and NN/G guidance support the distinction. A paper map is not an accessibility audit.',
  },
  {
    id: 'design-032',
    title: 'Let a reminder label grow with its text',
    outcome: 'Recognize clipping during text enlargement and preserve the complete label and working control.',
    scene: 'A train-planner reminder row wraps when text is enlarged.',
    sections: [
      {
        title: 'The checkbox outlives its meaning',
        paragraphs: [
          'A fictional train planner has a checkbox labeled Email me about changes to this journey. At the default size, the label fits beside the box. When text grows, the final words vanish below a fixed-height row. The checkbox still works, but the person can no longer read exactly what they are choosing. Shrinking just that label back down preserves the rectangle by undoing the user\'s enlargement. The repair should preserve the information and action instead of protecting the original row height.',
        ],
      },
      {
        title: 'Enlargement changes the space needed',
        paragraphs: [
          'WCAG 2.2 Resize Text requires text enlargement up to 200 percent without assistive technology or loss of content or functionality, except for captions and images of text. That is a web criterion, not a promise that every native text-size setting corresponds to the same percentage. Larger letters need more room. Labels can wrap, rows can grow, and nearby content can move down. A screenshot magnified with a pinch cannot reveal whether a live control survives those changes.',
        ],
      },
      {
        title: 'Repeat the same harmless task',
        paragraphs: [
          'For the revised row, allow the whole reminder label to wrap while keeping the checkbox next to its associated text. Put a secondary help link on another line if necessary rather than squeezing the label between controls. In a live test, enlarge text or use supported page zoom and repeat locating the reminder, reading its full meaning, and navigating past it by keyboard. Observe clipped messages and overlapping focus outlines too. Restore the viewing preference afterward if desired. This single check does not test every responsive layout or the separate WCAG reflow criterion.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'One reminder row, two height policies',
        alt: 'A fixed-height row clips journey reminder text; a growing row keeps the checkbox and complete wrapped label.',
        caption: 'Schematic component comparison, not an enlarged screenshot or proof of a live resize test.',
        items: [
          { label: 'Fixed row', detail: 'Checkbox remains; changes to this journey is clipped.' },
          { label: 'Growing row', detail: 'Checkbox stays beside the complete wrapped reminder label.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Pencil', 'Optional browser with zoom controls'],
      steps: [
        'Draw the complete reminder label beside a checkbox in a phone-width rectangle. Mark the row boundary.',
        'Redraw with larger lettering and the same available width. Let the row grow without deleting any words.',
        'On an optional harmless live page, try 200 percent browser zoom and inspect labels without changing account settings.',
        'Record which test you performed, any clipping, and the route past the control. Restore zoom if changed.',
      ],
      notice: 'The enlarged label retains its meaning, association with the checkbox, and room for following content.',
      troubleshooting: 'If the only fix is smaller text, remove the fixed-height assumption and move competing content instead.',
    },
    recall: {
      prompt: 'At larger text size, a gallery caption overlaps its View study link. What would you change and retest?',
      answer: 'Allow the caption and row to grow or stack the link below it. Repeat reading and activating the link in the live enlarged interface.',
      hint: 'Preserve content and function rather than the original rectangle.',
    },
    quiz: {
      question: 'Which test can reveal whether enlarged text blocks a working control?',
      options: ['Magnify a saved screenshot', 'Enlarge the live page and repeat the task', 'Increase the size of a printed mockup'],
      correctIndex: 1,
      explanation: 'Only the live task tests layout and behavior together. Static enlargements are useful illustrations but cannot expose actual clipping or activation failures.',
    },
    takeaway: 'Larger text should change the arrangement without losing the label or the task.',
    sourceNote: 'W3C Resize Text and Apple typography references are inherited. Paper approximation and native text settings are not interchangeable conformance tests.',
  },
  {
    id: 'design-033',
    title: 'Separate the icon from the area that responds',
    outcome: 'Distinguish target dimensions, spacing, and visual icon size in a gallery toolbar.',
    scene: 'Crowded Save and Remove controls beneath a gallery image.',
    sections: [
      {
        title: 'A precise drawing, an awkward tap',
        paragraphs: [
          'Under a gallery image, Save and Remove sit beside each other. Each icon looks crisp, but a small miss reaches the opposite action. Making the icon drawing larger does not necessarily enlarge the region that responds. That region is the pointer target. Conversely, a small icon can sit inside a generous button. When reviewing this toolbar, draw the intended activation boundary around each control rather than treating the visible strokes as evidence of the whole hit area.',
        ],
      },
      {
        title: 'Minimum size is a defined check',
        paragraphs: [
          'WCAG 2.2 Level AA Target Size (Minimum) specifies 24 by 24 CSS pixels, with defined exceptions including spacing, inline targets, equivalent controls, and certain essential or user-agent-controlled presentations. CSS pixels are not physical display pixels. The spacing exception has geometric conditions, not simply a required gap between icon drawings. For undersized targets, the specified 24-pixel-diameter circles centered on them must not intersect another target or the corresponding circle of another undersized target. Check the complete criterion rather than borrowing a remembered icon rule.',
        ],
      },
      {
        title: 'Work through a simple pair',
        paragraphs: [
          'Imagine two aligned square targets, each 20 pixels wide, with a 2-pixel gap. Their centers are 22 pixels apart. They are below the size minimum, and their 24-pixel-diameter spacing circles overlap. Another sketch uses 32-pixel squares with an 8-pixel gap, placing their centers 40 pixels apart. Those targets meet the basic size check, but this alone does not establish comfortable use or full accessibility. Separate destructive Remove from frequent Save, preserve clear labels, and inspect real hit areas and keyboard focus before calling the implementation checked.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Actual target widths, not icon widths',
        alt: 'Two 20-pixel targets with a 2-pixel gap are compared with 32-pixel targets and an 8-pixel gap.',
        caption: 'Hypothetical aligned square targets in CSS pixels. Text describes geometry; the illustration is not a pixel ruler.',
        items: [
          { label: '20 wide, gap 2', detail: 'Centers 22 apart; undersized spacing circles overlap.' },
          { label: '32 wide, gap 8', detail: 'Centers 40 apart; basic 24 by 24 minimum met.' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Paper', 'Pencil', 'Ruler optional'],
      steps: [
        'Draw Save and Remove icons, then separate rectangles for their intended activation areas. Write each intended dimension.',
        'Reproduce the two numerical examples as labeled sketches. Calculate center distances as target width plus the gap.',
        'Redesign the toolbar with more room and Remove away from Save. Include words and a visible focus outline.',
        'Rehearse pointing and keyboard order on paper. Label the result a layout review, not a measured website test.',
      ],
      notice: 'Your sketch records the hit boundaries separately from artwork and checks the stated spacing arithmetic.',
      troubleshooting: 'If only the icons grew, redraw the actual button boundaries. Paper centimeters do not establish CSS-pixel dimensions.',
    },
    recall: {
      prompt: 'A tiny disclosure chevron has a wide labeled button around it. What dimensions matter for the target check?',
      answer: 'Inspect the entire region that really activates the disclosure, not just the chevron strokes. Then assess spacing, exceptions, and behavior in context.',
      hint: 'Visible artwork and responsive area need not have the same bounds.',
    },
    quiz: {
      question: 'Two aligned 20-pixel square targets have a 2-pixel gap. What does the example show?',
      options: ['Their 24-pixel spacing circles overlap', 'Their center distance is 42 pixels', 'Their icon color determines the spacing exception'],
      correctIndex: 0,
      explanation: 'The centers are 20 + 2 = 22 pixels apart, less than two 12-pixel radii. Color does not change that geometry.',
    },
    takeaway: 'Check the responding area and its neighbors, not the apparent size of an icon.',
    sourceNote: 'Inherited W3C Target Size guidance supplies the criterion and exceptions. The numerical toolbar is illustrative, not a conformance report.',
  },
  {
    id: 'design-034',
    title: 'Hide optional export settings, not the result',
    outcome: 'Separate secondary export controls from information needed before committing the current action.',
    scene: 'Exporting a copy of an original seed-packet design.',
    sections: [
      {
        title: 'A small export panel',
        paragraphs: [
          'You have drawn an original seed-packet design and want a shareable image copy. An export panel exposes filename, format, destination, compression, metadata, and several unfamiliar options at once. Moving everything behind Advanced would make the panel shorter, but would also hide where the file will go and whether the original survives. The reader needs enough information to predict this export before acting. A small panel is useful only if it still explains the decision being made now.',
        ],
      },
      {
        title: 'Disclose detail at the right moment',
        paragraphs: [
          'Progressive disclosure keeps the common task visible while making secondary detail available on request. The split depends on the task, not on which controls look untidy. In this fictional workflow, filename, format, destination, and Save a copy remain visible. Less-used compression controls can sit under Image quality options. That label describes what will open; More says little. A collapsed section must remain reachable by keyboard, explain its expanded state, and reveal controls in a sensible order when opened.',
        ],
      },
      {
        title: 'Surface a consequence when it matters',
        paragraphs: [
          'Suppose choosing JPEG means the transparent background will become white. Show that consequence next to the format choice before export, even if the detailed compression controls remain collapsed. Likewise, do not hide an overwrite warning inside an advanced panel. If ordinary users repeatedly open a supposedly advanced section to complete the basic task, revisit the grouping instead of adding another nested section. Rehearse both a simple copy and an adjusted-quality copy. The same summary should let the person explain what will be created, where it will be saved, and what remains unchanged.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'What remains outside the disclosure',
        alt: 'Filename and format appear above quality options, with export consequences and Save a copy below.',
        caption: 'Fictional export panel contents. Optional settings do not conceal format consequences or the destination.',
        items: [
          { label: 'seed-packet.jpg', detail: 'Filename and destination visible.', x: 20, y: 18, shape: 'paper' },
          { label: 'Format: JPEG', detail: 'White replaces transparency.', x: 80, y: 18, shape: 'box' },
          { label: 'Image quality options', detail: 'Expandable; keyboard reachable.', x: 50, y: 49, shape: 'box' },
          { label: 'Original unchanged', detail: 'Copy saved to chosen location.', x: 20, y: 80, shape: 'paper' },
          { label: 'Save a copy', detail: 'Creates the described result.', x: 80, y: 80, shape: 'box' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Paper', 'Pencil', 'Small paper flap'],
      steps: [
        'Draw filename, format, destination, and Save a copy. Write the expected result beside the action.',
        'Place optional compression controls beneath a flap labeled Image quality options. Keep consequences outside it.',
        'Rehearse exporting a JPEG with transparency converted to white. Check that the effect is visible before confirmation.',
        'Open the flap for a quality adjustment. Number the keyboard route and recheck the final result summary.',
      ],
      notice: 'The basic action is predictable without opening secondary settings, but those settings remain findable.',
      troubleshooting: 'If you must lift the flap to discover what is lost or overwritten, move that consequence outside.',
    },
    recall: {
      prompt: 'A delivery form hides the delivery charge inside More options. Does progressive disclosure justify that choice?',
      answer: 'No. A charge affecting the current purchase belongs before confirmation. Optional delivery instructions could be deferred if their purpose and location remain clear.',
      hint: 'Ask which information changes the decision being made now.',
    },
    quiz: {
      question: 'Which detail belongs outside the optional image-quality section in this export?',
      options: ['An infrequently adjusted compression control', 'A detailed explanation of compression algorithms', 'The selected format replacing transparency with white'],
      correctIndex: 2,
      explanation: 'The format consequence affects the immediate result. Secondary controls and technical explanation can be available on request without hiding that consequence.',
    },
    takeaway: 'Defer secondary controls while keeping the current action and its consequences visible.',
    sourceNote: 'NN/G progressive-disclosure and heuristic references are inherited. Export behavior is explicitly fictional and must match any eventual implementation.',
  },
  {
    id: 'design-035',
    title: 'Test finding a saved drawing without naming the button',
    outcome: 'Give a goal-based usability prompt and record an attempt without coaching or overstating one observation.',
    scene: 'A willing reader keeps a staircase sketch for tomorrow.',
    sections: [
      {
        title: 'The prompt can give away the answer',
        paragraphs: [
          'You want to know whether a gallery makes saving a drawing understandable. Telling someone to tap the bookmark and open Saved teaches the exact route you meant to examine. Instead, offer a goal: Keep this staircase sketch so you can return to it tomorrow. That leaves the person to discover the controls. Explain that the interface is being checked, not their intelligence or drawing knowledge. Use your own fictional sketches and make stopping the attempt an acceptable choice.',
        ],
      },
      {
        title: 'Let the prototype answer',
        paragraphs: [
          'Prepare gallery, study detail, and saved-items states before asking for help. When the participant chooses an action, show the corresponding state without pointing to the next control. If you improvise a helpful label midway, you have changed what they are testing. Record the action and the state shown. A pause is an observation, not proof of confusion. The person might be reading, checking a title, or considering whether saving makes a public collection. Ask about their expectation after the attempt.',
        ],
      },
      {
        title: 'Use a small finding honestly',
        paragraphs: [
          'Suppose the participant opens the drawing but mistakes the save icon for a popularity count. That suggests testing a clearer Keep for later label. It does not establish how many gallery users have that problem. Preserve a keyboard route in the plan and use that input method when relevant to the participant; do not require someone to simulate a disability. If testing alone, label your walkthrough as your own prediction, not user research. Repeating the revised task with the same person also includes learning from their first attempt, so improvement cannot be attributed solely to the new label.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'States prepared before the attempt',
        alt: 'Gallery opens a staircase study, keeping it confirms the action, and Saved items allows a later return.',
        caption: 'Author preparation, not instructions to read to the participant. Respond only to their chosen actions.',
        items: [
          { label: 'Gallery', detail: 'Original staircase sketch listed.' },
          { label: 'Study detail', detail: 'Image and Keep for later control.' },
          { label: 'Kept for later', detail: 'Confirmation, not public sharing.' },
          { label: 'Saved items', detail: 'Staircase sketch can be reopened.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Paper prototype', 'Pencil', 'Optional willing participant'],
      steps: [
        'Draw the four states shown above and their controls. Decide what each activation displays before the attempt.',
        'Ask permission, explain the interface is being tested, and give only the keep-for-tomorrow goal.',
        'Show states in response to actions. Record the first choice and ask afterward what result was expected.',
        'Revise one ambiguous label. Mark repeat attempts as potentially affected by familiarity; label solo predictions honestly.',
      ],
      notice: 'Your notes contain actions and expectations rather than a coached success or a verdict about the participant.',
      troubleshooting: 'If the prompt names a control, rewrite it as the desired outcome before trying again.',
    },
    recall: {
      prompt: 'You want to test finding a restaurant\'s opening hours. What prompt avoids revealing the navigation route?',
      answer: 'Ask whether they could visit at a stated time, without naming Hours or Contact. Observe the route and ask what information supported their answer.',
      hint: 'State the real-world question, not the label you hope they select.',
    },
    quiz: {
      question: 'Which prompt tests discovering how to keep the staircase sketch?',
      options: ['Keep this sketch so you can return tomorrow', 'Use the bookmark to keep this sketch', 'Open Saved after pressing Keep for later'],
      correctIndex: 0,
      explanation: 'The goal leaves the route undisclosed. The other prompts supply controls, making successful execution weak evidence of discoverability.',
    },
    takeaway: 'Prepare the states, give the goal, and distinguish observed behavior from your interpretation.',
    sourceNote: 'Inherited NN/G references guide the questions. One consenting attempt can reveal a candidate issue, not its prevalence or a causal effect.',
  },
  {
    id: 'design-036',
    title: 'Make a critique predict a visible task improvement',
    outcome: 'Turn a layout complaint into an observation, a task consequence, and one testable revision.',
    scene: 'Reviewing a print-order pickup panel with a buried collection time.',
    sections: [
      {
        title: 'What does too busy mean here?',
        paragraphs: [
          'A friend shares a pickup panel for a small print sale. A decorative quotation sits above Continue, while the collection time is below the button in faint text. You could say the panel feels busy, but that gives the maker several unrelated things to change. A more useful observation is that the action appears before a detail needed to choose it. The task is deciding whether the stated pickup time works, not judging your friend\'s taste or professional ability.',
        ],
      },
      {
        title: 'Separate observation from inference',
        paragraphs: [
          'Describe what is visible before explaining its possible consequence. Collection time follows Continue is an observation. Someone could continue without seeing the time is a task hypothesis. Move the time above Continue is a proposed revision. Keeping those statements separate leaves room for evidence to change your interpretation. You can still state a preference for quieter decoration, but label it as preference rather than inventing a rule that every visitor dislikes quotations. Different artistic goals can reasonably produce different surfaces.',
        ],
      },
      {
        title: 'Change one relationship and compare',
        paragraphs: [
          'Make a second version that groups pickup date and time before the action, leaving the other wording unchanged. Ask a willing reader whether the offered collection time fits a fictional schedule, without pointing to it. Record whether they find it and whether they think Continue confirms a purchase or opens a review. A revision that improves time lookup but creates a misleading action label still needs work. Check the reading and keyboard order too; moving text visually does not automatically reorder it for every user. Compare the design decision, not the maker\'s character.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Where the pickup time enters the decision',
        alt: 'One pickup panel puts time after Continue; the revised panel puts date and time before the action.',
        caption: 'Fictional interface excerpts. The revision is a hypothesis to check, not a proven universal layout.',
        items: [
          { label: 'Current panel', detail: 'Quotation, Continue, then pickup time.' },
          { label: 'Proposed relationship', detail: 'Pickup date and time before the action; verify what its label means.' },
        ],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Paper', 'Pencil', 'Optional willing reader'],
      steps: [
        'Sketch the pickup panel. Write one observation using only visible facts, without describing the maker.',
        'Name the task consequence as a hypothesis. Keep your taste preference in a separate sentence.',
        'Move date and time above the action in a second sketch, leaving other content unchanged.',
        'Ask whether the pickup fits a fictional schedule. Record lookup and action expectations, then note one remaining uncertainty.',
      ],
      notice: 'The critique names a design relationship and a result that another attempt could confirm or challenge.',
      troubleshooting: 'If the suggestion is make it better, specify which information should become easier to locate for which task.',
    },
    recall: {
      prompt: 'A map review says the interface is ugly, but the real problem is locating a route closure. How would you reframe it?',
      answer: 'Identify where closure information appears, explain the route-choice risk, and propose a visible status change to test. Keep appearance preferences separate.',
      hint: 'Use a visible feature, a task, and a predicted result.',
    },
    quiz: {
      question: 'Which critique best supports a specific next test?',
      options: ['Use fewer colors because simpler always works', 'Place pickup time before Continue and retest finding it', 'Choose another typeface before examining the task'],
      correctIndex: 1,
      explanation: 'The time revision targets an observed relationship and a lookup task. Color and type changes could matter, but need their own stated reasons.',
    },
    takeaway: 'Critique a visible decision against a task, then test the proposed relationship.',
    sourceNote: 'NN/G visual-design and heuristic references are inherited. This fictional critique supplies a hypothesis, not measured evidence of improvement.',
  },
  {
    id: 'design-037',
    title: 'Give a leaf or figure a direction before its outline',
    outcome: 'Use a directional path and large masses to distinguish an observed gesture from a generic symbol.',
    scene: 'A drooping leaf becomes a study of bend, support, and weight.',
    sections: [
      {
        title: 'The leaf does not point straight up',
        paragraphs: [
          'A leaf rises from its stem, bends near the top, and hangs toward the right. If you begin with a familiar upright leaf symbol, you can add accurate veins and still miss its behavior. Start instead with the path from attachment through the bend to the tip. Put a simple blade mass around that path. This first drawing is not a tiny finished leaf. It is a proposal about how this particular form leans and where its weight appears to gather.',
        ],
      },
      {
        title: 'Direction organizes the parts',
        paragraphs: [
          'Gesture selects the directional relationships that hold a subject together. The rising stem and falling blade are connected, so drawing them as unrelated outlines loses the change of direction. Look for a stretched outside curve and a compressed inside bend. Keep the attachment visible as an anchor. For a clothed figure, a comparable first pass relates the head, ribcage, pelvis, and supporting foot before clothing details. That does not mean every subject has one perfect action line or that a gesture is a literal diagram of forces.',
        ],
      },
      {
        title: 'Construct a variation and check it',
        paragraphs: [
          'Compare a stiff version whose stem and blade rise together with a version that turns downward after the bend. Which matches the observed leaf? Then invent a stronger lean while keeping a believable attachment and connected blade. Return to the real leaf to see which relationships you changed intentionally. Short studies make comparisons inexpensive, but speed and messy lines are not the goal. Use a comfortable pace and pause for discomfort. Reference supports this construction: it gives the directional guess something specific to answer to rather than asking you to copy every edge.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Upright symbol',
        alt: 'Attachment, middle, and tip continue upward without a drooping bend.',
        caption: 'Simplified comparison drawing. Arrows trace the proposed gesture, not physical forces.',
        items: [
          { label: 'Attachment', detail: 'Lower support.', x: 18, y: 80, shape: 'object' },
          { label: 'Middle', detail: 'Keeps rising.', x: 50, y: 50, shape: 'circle' },
          { label: 'Tip', detail: 'Still points upward.', x: 82, y: 20, shape: 'object' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }],
      },
      {
        type: 'spatial',
        title: 'Bending blade',
        alt: 'The gesture rises from the attachment, turns at a high bend, and descends to the leaf tip.',
        caption: 'Same parts, different direction. Construct the blade around the falling final segment.',
        items: [
          { label: 'Attachment', detail: 'Support retained.', x: 18, y: 80, shape: 'object' },
          { label: 'High bend', detail: 'Direction changes.', x: 50, y: 20, shape: 'circle' },
          { label: 'Hanging tip', detail: 'Blade falls right.', x: 82, y: 66, shape: 'object' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pencil', 'Leaf on a plant or your own photograph'],
      steps: [
        'Choose one visible leaf. Mark its attachment, highest bend, and tip as three small checkpoints.',
        'Join the checkpoints with a directional path, then add the blade as a simple mass without veins.',
        'Draw a second, deliberately different lean. Label which relationships are observed and which you invented.',
        'Compare both with the reference and correct one bend. Keep the first marks visible for comparison.',
      ],
      notice: 'The two studies differ in lean and bend before texture or outline polish.',
      troubleshooting: 'If both look like the same leaf symbol, move the tip and reconsider how it connects to the bend.',
    },
    recall: {
      prompt: 'A clothed figure sketch looks stiff despite accurate buttons. What could a gesture pass investigate?',
      answer: 'Relate the major body masses, their lean, and the supporting foot. Adjust those relationships before copying clothing detail; use a permitted reference to check them.',
      hint: 'Ask where the figure is supported and how the larger masses turn.',
    },
    quiz: {
      question: 'A leaf study misses the droop. Which first revision targets gesture?',
      options: ['Darken the outer contour', 'Add vein directions inside the existing shape', 'Reposition the tip relative to the bend and attachment'],
      correctIndex: 2,
      explanation: 'The changed relationship alters the gesture. Contour weight and veins can support it later but do not relocate the blade.',
    },
    takeaway: 'Find connected direction and support, then build forms around that first explanation.',
    sourceNote: 'Getty and Tate references support drawing vocabulary. These original gesture drills are selective constructions, not anatomical or force measurements.',
  },
  {
    id: 'design-038',
    title: 'Build a kettle from connected volumes you can turn',
    outcome: 'Construct an object from volumes and attachments, then revise the model against a changed view.',
    scene: 'An empty, cold kettle is rotated beside a sketchbook.',
    sections: [
      {
        title: 'More than a circle with a spout',
        paragraphs: [
          'Set an empty, cold kettle on a table, away from any power connection. Its body, lid, handle, and spout occupy different directions in space. A memorized kettle symbol can place all four on one flat plane. Instead, imagine a rounded body that has thickness, a lid sitting on its top, and a spout attached to its side. Draw a centerline through the body so the lid and base have a shared orientation before committing to their visible contours.',
        ],
      },
      {
        title: 'Use scaffolding, not a substitute object',
        paragraphs: [
          'Construction explains complex subjects using simpler volumes: boxes, rounded masses, and cylinders. A cross-contour is a line imagined across a surface that helps describe its turn. On the kettle, a curved line around the belly can show which way it faces. Mark where the handle meets the body, including a lightly indicated hidden attachment when useful. The real kettle might taper or flatten, so revise the starting volume instead of forcing it to remain a perfect sphere. Scaffolding should explain the subject you chose.',
        ],
      },
      {
        title: 'Predict, rotate, and compare',
        paragraphs: [
          'Before moving the kettle, predict how the spout will overlap the body if turned toward you. Sketch that invented view lightly. Now rotate the real object while keeping your eye position steady and compare. The spout can look shorter as it points toward you even though its physical length has not changed. Check the lid opening and handle attachments too. Correct the underlying directions before adding a polished metal highlight. This loop trains a usable internal model while allowing observation to correct it; neither blind copying nor unsupported invention has to do all the work.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Connected kettle masses',
        alt: 'A rounded body sits below its lid, between a loop handle and an upward-reaching spout.',
        caption: 'Schematic volumes and attachments, not exact contours or ellipse proportions.',
        items: [
          { label: 'Body', detail: 'Rounded volume; central axis.', x: 50, y: 66, shape: 'circle' },
          { label: 'Spout', detail: 'Tube attached on the right.', x: 82, y: 34, shape: 'object' },
          { label: 'Handle', detail: 'Loop with body attachments.', x: 18, y: 42, shape: 'circle' },
          { label: 'Lid', detail: 'Shares the body orientation.', x: 50, y: 15, shape: 'circle' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Attachment' }, { from: 0, to: 3, label: 'Axis' }],
      },
      {
        type: 'spatial',
        title: 'Turned kettle scaffold',
        alt: 'The turned body shows the spout opening toward the eye, with a shorter projection and receding handle.',
        caption: 'Schematic comparison with the first scaffold: the spout opening faces the eye and its projected length contracts.',
        items: [
          { label: 'Body', detail: 'Turned volume.', x: 50, y: 66, shape: 'circle' },
          { label: 'Spout opening', detail: 'End faces eye.', x: 82, y: 55, shape: 'circle' },
          { label: 'Handle', detail: 'Far attachment overlaps body.', x: 18, y: 30, shape: 'circle' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Projection' }],
      },
      {
        type: 'spatial',
        title: 'Keep the observer steady',
        alt: 'A fixed eye faces the kettle, with the drawing paper in front of the observer.',
        caption: 'Top-view setup. Rotate the object between studies, not the observer and object together.',
        items: [
          { label: 'Eye', detail: 'Same seated viewpoint.', x: 18, y: 25, shape: 'eye' },
          { label: 'Cold kettle', detail: 'Turn toward the observer.', x: 82, y: 25, shape: 'object' },
          { label: 'Paper', detail: 'Keep both studies.', x: 50, y: 80, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 1, label: 'View' }],
      },
    ],
    practice: {
      minutes: 12,
      needs: ['Empty cold kettle or small watering can', 'Paper', 'Pencil'],
      steps: [
        'From a fixed seat, draw the main body, centerline, lid plane, and spout direction as light construction.',
        'Mark handle attachments and one curved cross-contour. Adjust the body to match the actual taper.',
        'Predict a turned view on the same page, then rotate the object safely to compare overlaps.',
        'Correct one direction or attachment in the prediction. Leave texture and decorative markings out.',
      ],
      notice: 'The second study explains changed overlap while preserving connected volumes.',
      troubleshooting: 'If the spout looks pasted on, locate its attachment and draw its center direction through the body.',
    },
    recall: {
      prompt: 'You invent a desk lamp whose shade floats beside its stem. Which construction relationship needs checking?',
      answer: 'Locate the joint, stem direction, and shade volume around it. A plausible attachment must connect the parts before surface shading can help.',
      hint: 'Draw through hidden joins lightly before deciding the final contour.',
    },
    quiz: {
      question: 'The real kettle narrows near its base, unlike your spherical scaffold. What should you change first?',
      options: ['The reflective highlights', 'The body volume and taper', 'The line darkness around the existing sphere'],
      correctIndex: 1,
      explanation: 'Construction must adapt to the observed form. Surface highlights and heavier contours cannot repair the underlying width relationship.',
    },
    takeaway: 'Construct connected volumes, predict their turn, and let observation revise the model.',
    sourceNote: 'Getty and Tate sources supply form vocabulary. The kettle construction is original and deliberately simplified, not a product blueprint.',
  },
  {
    id: 'design-039',
    title: 'Use the gap between utensils to check their angles',
    outcome: 'Compare a negative-space shape with the forms around it to locate a proportion error.',
    scene: 'A wooden spoon and spatula cross on plain paper.',
    sections: [
      {
        title: 'The empty wedge is measurable',
        paragraphs: [
          'Lay a wooden spoon and spatula on plain paper with their handles crossing near the lower end. The space above the crossing widens between their inner edges. Ignore the familiar utensil names for a moment and look at that wedge: its opening has a width, its sides have slopes, and its lower point has a location. A drawing can contain two recognizable utensils but still squeeze this gap. Recognizability alone is therefore a weak check on their relative placement.',
        ],
      },
      {
        title: 'An absence shares real boundaries',
        paragraphs: [
          'Negative space is the space around or between the positive forms you attend to. Here its boundaries are also parts of the utensil contours. If the gap is too narrow while the crossing stays fixed, at least one bordering edge or angle differs from the arrangement. Checking the gap provides another route to the same geometry without relying on a memorized spoon shape. It is not an instruction to draw only backgrounds. Alternate between the object masses and the spaces they leave.',
        ],
      },
      {
        title: 'Locate the correction',
        paragraphs: [
          'Keep your viewpoint fixed and mark the two upper gap boundaries and the crossing before adding utensil detail. Lightly connect those checkpoints. Compare a wider observed wedge with a narrower trial that has the same height. If the right edge is too upright, rotate that boundary outward and rebuild the spatula around it rather than widening both utensils indiscriminately. Next invent a different crossing angle and predict its new gap. You can then rearrange the real utensils to check the prediction. Empty space becomes part of construction, not merely a silhouette you copy after everything else is drawn.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Wide observed gap',
        alt: 'Two inner utensil edges converge at a low crossing, leaving a broad opening above.',
        caption: 'Top-view checkpoint drawing. The upper connector measures the opening, not a third utensil.',
        items: [
          { label: 'Spoon edge', detail: 'Left upper boundary.', x: 22, y: 18, shape: 'object' },
          { label: 'Spatula edge', detail: 'Right upper boundary.', x: 78, y: 18, shape: 'object' },
          { label: 'Crossing', detail: 'Low point of the wedge.', x: 50, y: 78, shape: 'circle' },
        ],
        arrows: [{ from: 0, to: 2 }, { from: 1, to: 2 }, { from: 0, to: 1, label: 'Opening' }],
      },
      {
        type: 'spatial',
        title: 'Squeezed trial gap',
        alt: 'At the same height, upper boundaries are closer together and the gap is narrower.',
        caption: 'Compare boundary slopes with the first study before redrawing the surrounding handles.',
        items: [
          { label: 'Left boundary', detail: 'Moved inward.', x: 34, y: 18, shape: 'object' },
          { label: 'Right boundary', detail: 'Moved inward.', x: 66, y: 18, shape: 'object' },
          { label: 'Same crossing', detail: 'Height unchanged.', x: 50, y: 78, shape: 'circle' },
        ],
        arrows: [{ from: 0, to: 2 }, { from: 1, to: 2 }, { from: 0, to: 1, label: 'Narrower' }],
      },
    ],
    practice: {
      minutes: 9,
      needs: ['Wooden spoon', 'Spatula', 'Plain paper', 'Pencil'],
      steps: [
        'Cross the utensil handles on paper and choose a steady viewing position. Do not trace around them.',
        'On another area, mark the gap opening and crossing, then connect their boundaries lightly.',
        'Build the utensil masses around the gap. Compare each inner edge before adding the outer contours.',
        'Invent a wider crossing in a second study, then rearrange the utensils and check your predicted gap.',
      ],
      notice: 'Your correction identifies a bordering edge or angle, rather than vaguely making the objects more accurate.',
      troubleshooting: 'If every comparison changes, return to the same eye position before moving the drawn boundaries.',
    },
    recall: {
      prompt: 'An invented figure has a hand on its hip, but the pose looks cramped. What negative space could you inspect?',
      answer: 'Check the opening between torso, upper arm, and forearm. Its shape can reveal a misplaced elbow or an arm angle needing revision.',
      hint: 'Treat the opening as a shape with its own corners and width.',
    },
    quiz: {
      question: 'The crossing is correct but the drawn gap is too narrow. Which check is most useful first?',
      options: ['Compare the slopes of its bordering edges', 'Darken both utensil outlines equally', 'Add wood grain to distinguish the utensils'],
      correctIndex: 0,
      explanation: 'Border slopes determine the opening from that crossing. Line darkness and grain do not change the gap geometry.',
    },
    takeaway: 'Construct the objects and the spaces between them as two checks on one arrangement.',
    sourceNote: 'Getty describes positive and negative space. The utensil comparison is an original checking method, not a prescribed drawing style.',
  },
  {
    id: 'design-040',
    title: 'Fit the shoe inside a checked envelope',
    outcome: 'Establish overall extent and dominant angles before refining a shoe or an invented variant.',
    scene: 'A side-view shoe study keeps its first straight-line boundary visible.',
    sections: [
      {
        title: 'The laces cannot fix the lean',
        paragraphs: [
          'A shoe rests sideways on the floor. Its toe projects farther forward than you first expect, and its opening rises above the heel. Starting with the laces can produce a recognizable sneaker inside the wrong overall shape. Before details, mark the highest point, furthest toe, lowest sole, and back of the heel. Connect the main extremes with a few light straight segments. This temporary boundary is an envelope: it records how much space the whole object occupies and how it tilts.',
        ],
      },
      {
        title: 'Compare angles against something stable',
        paragraphs: [
          'A small curve is difficult to judge when the entire object has no stable extent. The envelope gives that curve a neighborhood. Compare its long upper slope with a horizontal reference such as the edge of your paper, and compare overall height with width. Keep your head position steady so the view does not change between checks. You can compare slopes visually without holding a sharp pencil near your face. The envelope is a working estimate, not a demand for exact numerical measurement.',
        ],
      },
      {
        title: 'Refine without burying the decision',
        paragraphs: [
          'If the toe reaches too high in your first envelope, move that checkpoint before shaping the toe curve. Keep the old segment faintly visible so the correction has a clear reason. Then add the main sole thickness and upper volume inside the corrected extent. For an invented boot, preserve the foot volume but raise the ankle section deliberately, checking how this changes the silhouette and balance. You are using observed structure to support a new design, not trying to erase every construction line. Stop before surface texture if the overall lean is still uncertain.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Five checkpoints around the shoe',
        alt: 'Heel top, opening, toe, sole, and heel base connect to form a simplified enclosing polygon.',
        caption: 'An original envelope, not a shoe outline to trace. Check its slopes against your own view.',
        items: [
          { label: 'Heel top', detail: 'Upper rear extent.', x: 20, y: 27, shape: 'circle' },
          { label: 'Opening', detail: 'Highest checkpoint.', x: 50, y: 15, shape: 'circle' },
          { label: 'Toe', detail: 'Furthest forward.', x: 82, y: 64, shape: 'circle' },
          { label: 'Sole', detail: 'Lowest checkpoint.', x: 50, y: 80, shape: 'circle' },
          { label: 'Heel base', detail: 'Lower rear extent.', x: 18, y: 62, shape: 'circle' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 0 }],
      },
      {
        type: 'spatial',
        title: 'One eye position for every check',
        alt: 'A seated eye faces the shoe, while a separate sheet holds the envelope study.',
        caption: 'Setup map. The paper edge is an angle reference, not a physical ruler laid on the shoe.',
        items: [
          { label: 'Eye', detail: 'Keep the same view.', x: 18, y: 25, shape: 'eye' },
          { label: 'Shoe', detail: 'Do not turn mid-check.', x: 82, y: 25, shape: 'object' },
          { label: 'Study paper', detail: 'Horizontal edge reference.', x: 50, y: 80, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 1, label: 'View' }],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Shoe', 'Paper', 'Pencil'],
      steps: [
        'Place the shoe sideways and sit comfortably. Mark five or six outer extremes on your drawing paper.',
        'Join them lightly. Compare the longest slope and overall extent before adding any laces.',
        'Correct one checkpoint, keeping the first attempt visible. Construct the sole and upper as large volumes.',
        'Sketch an invented taller version beside it. Label the structural choice you changed on purpose.',
      ],
      notice: 'The corrected outer extent supports the curves, and the invented version has an explicit structural change.',
      troubleshooting: 'If repeated contours form a dark hedge, return to a few checkpoints and choose one relationship to correct.',
    },
    recall: {
      prompt: 'A folded jacket drawing has accurate seams but feels too narrow. What would an envelope check compare?',
      answer: 'Compare its widest points, overall height, and major slopes before revising seam detail. The error could lie in the large folded masses.',
      hint: 'Locate the outer extremes before examining interior marks.',
    },
    quiz: {
      question: 'The shoe\'s toe slopes upward too much. Which revision should precede lace detail?',
      options: ['Increase sole shading', 'Move the toe checkpoint and recheck the upper slope', 'Draw smaller lace holes'],
      correctIndex: 1,
      explanation: 'Moving the checkpoint changes the large angle that is wrong. Shading and lace scale do not repair that envelope.',
    },
    takeaway: 'Check extent and tilt with a light envelope, then construct and refine inside it.',
    sourceNote: 'Getty and Tate drawing references are inherited. The envelope is a practical scaffold, not a universal proportion formula.',
  },
  {
    id: 'design-041',
    title: 'Make box edges agree about the viewing direction',
    outcome: 'Use a consistent eye level and vanishing directions when constructing boxes or steps.',
    scene: 'An unbranded packaging box is studied straight on and toward a corner.',
    sections: [
      {
        title: 'One box, incompatible edges',
        paragraphs: [
          'An empty packaging box can look twisted when its lid recedes toward one point but parallel lower edges head elsewhere. The cardboard is not twisted; the drawing gives conflicting accounts of depth. Linear perspective explains how a view of three-dimensional space is projected onto a flat picture. Edges that are parallel in space and recede in the same direction share a vanishing point in that view. Edges parallel to the picture plane do not need to converge inside the drawing.',
        ],
      },
      {
        title: 'Eye level belongs to the observer',
        paragraphs: [
          'For horizontal receding directions, vanishing points lie on the eye-level horizon. That horizon is not automatically the tabletop edge or the middle of the sheet. With an upright view facing a box front, the depth direction can converge to one point while the front width stays horizontal. Looking toward a corner introduces two receding horizontal directions and two vanishing points. Those points can sit beyond the paper. Forcing both close to the box because the page is small can produce an exaggerated view you never intended.',
        ],
      },
      {
        title: 'Extend a family, not every line indiscriminately',
        paragraphs: [
          'Keep the box and viewpoint fixed. Identify which edges belong to the same spatial direction, then extend a few lightly to check agreement. Do not send vertical edges to the horizontal vanishing point in this upright-view exercise. Construct the major planes before drawing packaging folds. When inventing a staircase, use the same rule for repeated tread edges: shared directions need shared convergence even as step heights change. Returning to an observed box helps diagnose the construction, but the aim is a consistent space you can build, not memorizing the exact slopes of this one carton.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A horizontal plane recedes to one point',
        alt: 'Near and far corners form a rectangle in perspective, with both depth edges continuing to the same vanishing point.',
        caption: 'Projected plane only. Near and far widths stay horizontal; both depth-edge families share the marked horizon point.',
        items: [
          { label: 'Vanishing point', detail: 'On eye level.', x: 50, y: 16, shape: 'circle' },
          { label: 'Near left', detail: 'Front corner.', x: 18, y: 80, shape: 'circle' },
          { label: 'Far left', detail: 'Same depth direction.', x: 34, y: 48, shape: 'circle' },
          { label: 'Near right', detail: 'Front corner.', x: 82, y: 80, shape: 'circle' },
          { label: 'Far right', detail: 'Same depth direction.', x: 66, y: 48, shape: 'circle' },
        ],
        arrows: [{ from: 1, to: 2 }, { from: 2, to: 0 }, { from: 3, to: 4 }, { from: 4, to: 0 }, { from: 1, to: 3 }, { from: 2, to: 4 }],
      },
      {
        type: 'spatial',
        title: 'A corner introduces two directions',
        alt: 'Two edges leave a near corner, passing through separate far corners toward left and right vanishing points.',
        caption: 'Plane-edge directions, not complete box faces. Both vanishing points share eye level; add verticals separately.',
        items: [
          { label: 'Left vanishing point', detail: 'Same horizon.', x: 10, y: 16, shape: 'circle' },
          { label: 'Near corner', detail: 'Two directions meet.', x: 50, y: 78, shape: 'circle' },
          { label: 'Right vanishing point', detail: 'Same horizon.', x: 90, y: 16, shape: 'circle' },
          { label: 'Left far corner', detail: 'Left family.', x: 30, y: 47, shape: 'circle' },
          { label: 'Right far corner', detail: 'Right family.', x: 70, y: 47, shape: 'circle' },
        ],
        arrows: [{ from: 1, to: 3 }, { from: 3, to: 0 }, { from: 1, to: 4 }, { from: 4, to: 2 }],
      },
    ],
    practice: {
      minutes: 12,
      needs: ['Empty box', 'Paper', 'Pencil', 'Ruler optional'],
      steps: [
        'Sit at a fixed viewpoint above an empty box. Sketch its large planes without printed details.',
        'Identify two pairs of parallel receding edges. Extend each pair lightly and compare their implied vanishing directions.',
        'Correct one inconsistent edge family, then invent a second box beside it using the same horizon.',
      ],
      notice: 'Each edge family gives a consistent account of depth, including in the invented neighboring box.',
      troubleshooting: 'If extensions disagree everywhere, check viewpoint changes and edge families before forcing a convenient point onto the page.',
    },
    recall: {
      prompt: 'You invent three staircase treads facing the same way. Should each tread get a different horizontal vanishing point?',
      answer: 'No. Parallel receding directions share a vanishing point from the same view. Changing height does not create a new horizontal direction.',
      hint: 'Group edges by direction in space, not by which step owns them.',
    },
    quiz: {
      question: 'Two parallel lid edges recede in the same direction but converge to different points. What needs revision?',
      options: ['Their shared directional construction', 'Only the carton texture', 'The page size before checking either edge'],
      correctIndex: 0,
      explanation: 'A fixed view gives that direction one vanishing point. Texture and paper boundaries do not explain inconsistent convergence.',
    },
    takeaway: 'Construct shared spatial directions consistently around one viewpoint and eye level.',
    sourceNote: 'Tate perspective was spot-checked; Getty supports form vocabulary. Diagrams simplify upright linear perspective and do not cover every projection.',
  },
  {
    id: 'design-042',
    title: 'Group a white fold by its light, not its name',
    outcome: 'Plan a small set of value groups from observed illumination before adding texture.',
    scene: 'A folded white napkin sits beside brown cardboard in side light.',
    sections: [
      {
        title: 'White material, dark patch',
        paragraphs: [
          'Fold a white napkin into a loose ridge and place brown cardboard beside it under side light. The napkin face toward the light looks bright, while its inward fold can look darker than the lit cardboard. If you leave the whole napkin as white paper because its material is white, its volume disappears. A drawing records visible light relationships, not just the color names of objects. Look at actual patches before deciding how much pencil belongs on each surface.',
        ],
      },
      {
        title: 'Reduce decisions into groups',
        paragraphs: [
          'Value means apparent lightness or darkness. For this study, assign a light group, a middle group, and a dark group. The limited groups help you compare large relationships without spending all your effort on weave and wrinkles. They are a simplification chosen for the exercise, not a rule that finished art must contain exactly three tones. Keep a shadow mass connected where you actually see continuity. Breaking it into many unrelated marks can weaken the fold even if each tiny mark seems carefully observed.',
        ],
      },
      {
        title: 'Check the ranking before blending',
        paragraphs: [
          'In the illustrated example, the facing napkin plane is light, lit cardboard is middle, and the sheltered white fold is dark. Your arrangement can differ, so compare rather than imposing these assignments. Put three pencil samples beside the sketch and ask which visible patches belong together. If the fold and cardboard become indistinguishable, decide whether that matches observation or whether your middle and dark groups drifted together. Only then add a few changes within each group. This gives shading a structural job: describing planes turning under light instead of filling the drawing with attractive gray texture.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Side light across the folded napkin',
        alt: 'Light reaches a facing napkin plane and cardboard, while an inward napkin fold lies below the lit ridge.',
        caption: 'Schematic arrangement. The two napkin patches share a material but not the same illumination.',
        items: [
          { label: 'Side light', detail: 'From upper left.', x: 18, y: 20, shape: 'light' },
          { label: 'Facing napkin plane', detail: 'Directly lit.', x: 50, y: 32, shape: 'paper' },
          { label: 'Inward white fold', detail: 'Sheltered from direct light.', x: 50, y: 76, shape: 'paper' },
          { label: 'Brown cardboard', detail: 'Receives light beside it.', x: 82, y: 48, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Light' }],
      },
      {
        type: 'swatches',
        title: 'A possible three-value ranking',
        alt: 'The facing plane is light, cardboard middle, and the sheltered white fold dark.',
        caption: 'Illustrative values, not sampled measurements. Observe your setup before assigning its patches.',
        items: [
          { label: 'Lit plane', detail: 'Light group.', color: '#E8E2D6' },
          { label: 'Lit cardboard', detail: 'Middle group.', color: '#A9A08B' },
          { label: 'White fold in shadow', detail: 'Dark group.', color: '#55564E' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['White napkin or paper', 'Cardboard', 'Steady side light', 'Paper and pencil'],
      steps: [
        'Arrange a ridge in the white material beside cardboard. Keep both under the same steady side light.',
        'Draw three value samples, then lightly construct the ridge and cardboard without texture.',
        'Assign the largest visible patches to those groups. Compare the sheltered white patch with the lit cardboard.',
        'Correct one ranking and label its cause. Keep material names separate from observed value choices.',
      ],
      notice: 'The white material can contain both light and dark groups while its fold remains readable.',
      troubleshooting: 'If everything becomes middle gray, compare each patch with both your lightest and darkest sample before adding more pencil.',
    },
    recall: {
      prompt: 'A dark shoe catches sunlight beside a pale bag in shade. Which should automatically be darker in your drawing?',
      answer: 'Neither by name alone. Compare the visible patches under their actual illumination and group their relative values before adding surface detail.',
      hint: 'Material color is only one contributor to the light reaching your eye.',
    },
    quiz: {
      question: 'The shaded white fold looks darker than the lit cardboard. Which value plan follows observation?',
      options: ['Keep all white material unshaded', 'Give both materials the same middle tone', 'Place the white fold in the darker group'],
      correctIndex: 2,
      explanation: 'The observed light relationship determines the study. Material names and equal shading would suppress the difference that explains the fold.',
    },
    takeaway: 'Group visible light relationships before texture, even when they contradict material color names.',
    sourceNote: 'Inherited Tate tone and chiaroscuro references support value vocabulary. Swatches are original simplifications, not calibrated reproductions of the setup.',
  },
  {
    id: 'design-043',
    title: 'Give a hem, a roll, and a lost boundary different edges',
    outcome: 'Distinguish abrupt, gradual, and disappearing transitions instead of outlining every form equally.',
    scene: 'A partly rolled towel has a crisp hem and a tail merging with its backdrop.',
    sections: [
      {
        title: 'One object contains different boundaries',
        paragraphs: [
          'Partly roll a towel under side light, leaving its hem visible and its loose tail against a similar-valued background. The hem can make a crisp overlap, the rounded roll can turn through a broad tonal change, and part of the tail may nearly disappear. Giving all three a dark outline removes those differences. It describes a uniform drawing convention rather than what these particular surfaces and neighbors show. First identify where each transition occurs on the object, not which pencil technique you prefer.',
        ],
      },
      {
        title: 'An edge is a transition',
        paragraphs: [
          'A hard edge changes abruptly between adjacent areas. A soft edge changes over a visible span. A lost edge becomes difficult to distinguish because neighboring values or colors are similar. These are appearances, not permanent properties of cloth, metal, or distance. The towel is one material, yet its overlap and rounded turning surface need different treatment. A soft edge does not automatically mean something is far away, and an artist can deliberately strengthen an edge for emphasis while recognizing that as an interpretive choice.',
        ],
      },
      {
        title: 'Use neighboring values to choose the mark',
        paragraphs: [
          'At the hem, place the darker neighboring area directly against the light cloth without an extra black border unless one is actually needed. Across the roll, shade a gradual transition rather than a stack of equally hard stripes. At the nearly lost tail, let the neighboring tones meet and allow another visible section to explain the form. Construct the full towel lightly first so a missing final edge does not mean missing understanding. Compare the resulting volume with a uniformly outlined trial. The useful difference is the treatment of specific boundaries, not a general preference for softer drawings.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Locate the three edge situations',
        alt: 'Side light reaches a towel hem and rounded roll; the loose tail meets a similar-valued backdrop.',
        caption: 'Schematic towel parts. Compare an overlap, a turning volume, and a boundary against its neighbor.',
        items: [
          { label: 'Light', detail: 'From upper left.', x: 18, y: 18, shape: 'light' },
          { label: 'Hem overlap', detail: 'Abrupt light-to-dark change.', x: 20, y: 54, shape: 'paper' },
          { label: 'Rounded roll', detail: 'Broad turning transition.', x: 50, y: 48, shape: 'circle' },
          { label: 'Loose tail', detail: 'Boundary nearly disappears.', x: 82, y: 78, shape: 'object' },
          { label: 'Backdrop', detail: 'Similar value to tail.', x: 82, y: 20, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 2, label: 'Light' }],
      },
      {
        type: 'swatches',
        title: 'Different neighbors, different boundaries',
        alt: 'A light and dark pair contrasts at the hem; matching gray patches illustrate the lost tail boundary.',
        caption: 'Illustrative neighboring values. Softness additionally depends on how gradually the transition is drawn.',
        items: [
          { label: 'Hem light', detail: 'Abrupt pair, first side.', color: '#DED8CB' },
          { label: 'Hem shadow', detail: 'Abrupt pair, second side.', color: '#484741' },
          { label: 'Tail', detail: 'Lost pair, first side.', color: '#77736A' },
          { label: 'Neighbor', detail: 'Lost pair, same value.', color: '#77736A' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Towel', 'Plain backdrop', 'Side light', 'Paper and pencil'],
      steps: [
        'Roll part of the towel, leaving a hem and loose tail. Choose a steady viewpoint and light.',
        'Construct the main roll and tail lightly, then locate one abrupt boundary and one broad tonal turn.',
        'Draw those differently. If a tail boundary nearly disappears, omit its final outline rather than inventing contrast.',
        'Make a small uniformly outlined trial beside it and compare which specific surface relationships were lost.',
      ],
      notice: 'Overlap, turning form, and background contact no longer receive an identical dark border.',
      troubleshooting: 'If no boundary is lost in your setup, label that honestly and use the equal-value swatches as the separate demonstration.',
    },
    recall: {
      prompt: 'A shoe sole overlaps another shoe, while its rounded toe turns away from light. Should both transitions match?',
      answer: 'Not automatically. Inspect the overlap for an abrupt boundary and the toe for a broader tonal turn, then draw the transitions actually observed.',
      hint: 'Compare how the values change, not just which material is present.',
    },
    quiz: {
      question: 'A tail boundary disappears against its backdrop. Which first treatment preserves that observation?',
      options: ['Let similar neighboring tones meet without an added outline', 'Soften every edge on the towel equally', 'Darken the entire backdrop before checking other edges'],
      correctIndex: 0,
      explanation: 'Matching neighbors explain this lost edge. Global softening or darkening changes other relationships rather than recording the local transition.',
    },
    takeaway: 'Construct the whole form, then choose final edges from their local transitions.',
    sourceNote: 'Getty elements and Tate tone references are inherited. Edge choices and gray patches are original studies, not universal material rules.',
  },
  {
    id: 'design-044',
    title: 'Give the orange and the table different kinds of shadow',
    outcome: 'Use one light direction to explain a form shadow and the shadow cast onto another surface.',
    scene: 'An orange sits on plain paper beside a steady side light.',
    sections: [
      {
        title: 'Two dark areas, two causes',
        paragraphs: [
          'Place an orange on plain paper under a steady side light. One side of the orange is dark, and a separate dark shape extends across the paper. They can touch near the base, but they answer different questions. The first describes a surface turning away from direct light. The second describes light that the orange blocks from reaching the paper. Naming both simply shadow is not wrong, but separating their causes gives you a better way to construct them.',
        ],
      },
      {
        title: 'Follow light and surface orientation',
        paragraphs: [
          'A form shadow belongs to the object\'s own turning surface. A cast shadow belongs to a receiving surface whose illumination is obstructed. With the main light at upper left, the cast shadow extends generally away toward lower right in this drawing. Its shape also depends on object height, light position, and the receiving surface. A rounded matte form usually offers a broader turning transition than a sharp plane change. Neither kind of shadow needs a black outline merely because you have named it.',
        ],
      },
      {
        title: 'Check a proposed highlight against the setup',
        paragraphs: [
          'Begin with a sphere-like volume and the contact point on the paper. Mark a light arrow beside the drawing, then place the broad lit and shaded regions accordingly. Nearby surfaces can reflect some light into the shadow side; include that only if you can see it, rather than adding a bright rim by habit. Keep it distinct from direct illumination. If the cast shadow points toward the lamp, revisit the geometry before blending. A smooth tone is useful only when it supports the chosen light. Real rooms contain additional light, so keep the study selective rather than claiming a perfectly isolated source.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Light, blocker, and receiving surface',
        alt: 'Light at upper left reaches an orange; a cast shadow lies beyond it toward lower right on paper.',
        caption: 'Oblique setup schematic. The aligned arrows show the main light direction, not a measured shadow length.',
        items: [
          { label: 'Main light', detail: 'Upper-left source.', x: 18, y: 20, shape: 'light' },
          { label: 'Orange', detail: 'Far side turns from light.', x: 50, y: 42, shape: 'circle' },
          { label: 'Cast shadow', detail: 'Light blocked on paper.', x: 82, y: 64, shape: 'circle' },
          { label: 'Receiving paper', detail: 'Supports orange and shadow.', x: 50, y: 85, shape: 'paper' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Light' }, { from: 1, to: 2, label: 'Blocked path' }],
      },
      {
        type: 'swatches',
        title: 'Separate the shaded regions',
        alt: 'Illustrative gray values distinguish lit orange, its form shadow, and the paper cast shadow.',
        caption: 'A possible value plan, not fixed shadow darkness or calibrated color. Compare your actual patches.',
        items: [
          { label: 'Lit orange', detail: 'Faces the main light.', color: '#E5DBBF' },
          { label: 'Form shadow', detail: 'On the turning orange.', color: '#8F8470' },
          { label: 'Cast shadow', detail: 'On the paper.', color: '#4F5147' },
        ],
      },
    ],
    practice: {
      minutes: 12,
      needs: ['Orange or similar fruit', 'Plain paper', 'Steady side light', 'Pencil'],
      steps: [
        'Set the fruit on paper beside window light or a cool lamp, keeping paper away from the emitter.',
        'Construct the rounded volume and contact point. Mark the main light direction outside the sketch.',
        'Block in a form shadow on the fruit and a cast shadow on the paper. Label their different causes.',
        'Inspect any reflected light before adding it. Correct an inconsistent shadow direction before smoothing tones.',
      ],
      notice: 'The object turns under the same light that explains the separate shadow on the paper.',
      troubleshooting: 'If several shadows compete, simplify the setup to one dominant light without handling hot lamps or blocking ventilation.',
    },
    recall: {
      prompt: 'A crumpled paper ball has dark facets and a dark shape on the desk. How would you distinguish them?',
      answer: 'Check which darkness lies on facets turned from light and which lies where the ball obstructs light on the desk. Sharp facets can change tone abruptly.',
      hint: 'Name the surface carrying each shadow and why light does not reach it directly.',
    },
    quiz: {
      question: 'Which observation identifies the cast shadow rather than the form shadow?',
      options: ['A darker orange surface turns away from the lamp', 'A reflected patch brightens the orange\'s shaded side', 'The orange blocks illumination on the paper behind it'],
      correctIndex: 2,
      explanation: 'The receiving paper is shadowed by obstruction. Turning and reflected-light patches belong to the orange\'s own surface.',
    },
    takeaway: 'Use light direction, surface orientation, and obstruction to explain each dark area.',
    sourceNote: 'Getty and Tate chiaroscuro references are inherited. The lighting geometry and value plan are simplified original teaching examples.',
  },
  {
    id: 'design-045',
    title: 'Study a pouch, recall its structure, then redesign it',
    outcome: 'Use reference and checked memory to support an intentional new construction without disguising a copy.',
    scene: 'An ordinary zip pouch becomes an invented pouch with a side pocket.',
    sections: [
      {
        title: 'Reference gives invention something to build on',
        paragraphs: [
          'Put an ordinary zip pouch in front of you. Notice its body thickness, the opening across the top, and any small side loop. Draw these as a box-like volume with softer corners rather than beginning with stitching or a printed design. You are studying how the pouch is built. Looking at a reference is not a failure of imagination: it supplies relationships that an internal symbol might omit, such as the opening following the top plane instead of floating on the front.',
        ],
      },
      {
        title: 'Make memory answerable to observation',
        paragraphs: [
          'Hide the pouch and reconstruct its large forms from memory. Then reveal it and compare. Perhaps the memory version is too flat, or its opening crosses the front face. That discrepancy names a useful relationship to study again. It is not a verdict about talent, and there is no requirement to ban reference until your memory becomes perfect. Keep the observation and memory studies labeled separately so a mistake can become an explicit question rather than being silently corrected and forgotten.',
        ],
      },
      {
        title: 'Change a structural problem deliberately',
        paragraphs: [
          'Now invent a version with a small side pocket. Decide which face receives it, how its opening faces upward, and where it attaches to the body. Lightly draw through the connection before choosing visible contours. Preserve enough of the original volume to make the new part belong in the same space. You can consult the pouch again while solving the new construction. For shared work, use your own subjects or references with suitable permission and attribution; combining references does not erase their conditions. A copied study can be useful when labeled honestly, while this variation should identify what you actually redesigned.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Observed pouch scaffold',
        alt: 'The pouch body sits below a top opening, with a small side loop attached at the left.',
        caption: 'Simplified front-view construction. Study thickness from your own object rather than tracing these symbols.',
        items: [
          { label: 'Body', detail: 'Box-like volume.', x: 50, y: 62, shape: 'box' },
          { label: 'Top opening', detail: 'Follows the top plane.', x: 50, y: 18, shape: 'object' },
          { label: 'Side loop', detail: 'Attached at left.', x: 18, y: 62, shape: 'circle' },
        ],
      },
      {
        type: 'spatial',
        title: 'Invented side-pocket version',
        alt: 'The same body and top opening gain a side pocket attached to the right face.',
        caption: 'An intentional structural change. Draw the pocket connection in the same view as the body.',
        items: [
          { label: 'Body retained', detail: 'Same viewpoint.', x: 50, y: 62, shape: 'box' },
          { label: 'Opening retained', detail: 'Still on top.', x: 50, y: 18, shape: 'object' },
          { label: 'New side pocket', detail: 'Attached to right face.', x: 82, y: 62, shape: 'box' },
        ],
      },
    ],
    practice: {
      minutes: 12,
      needs: ['Your own pouch or small bag', 'Paper', 'Pencil'],
      steps: [
        'Use 3 minutes to observe and construct the body, opening, and attachments without logos or surface decoration.',
        'Hide it for a 3-minute memory reconstruction, then spend 2 minutes comparing one structural mismatch.',
        'Use 4 minutes to invent a side pocket, consulting the object when useful. Label observation, memory, and invention.',
      ],
      notice: 'Your page records a checked memory gap and a deliberate redesign of a connected volume.',
      troubleshooting: 'If invention only adds stitching, change a volume, attachment, opening, or viewpoint instead of decorating the same silhouette.',
    },
    recall: {
      prompt: 'After studying your own desk organizer, you want to invent a slanted pen compartment. What should transfer?',
      answer: 'Transfer the organizer\'s volume and attachment logic, then construct the new compartment\'s tilt and opening. Use observation to resolve uncertainty rather than copying decoration.',
      hint: 'Name the relationship you learned and the new problem you are choosing.',
    },
    quiz: {
      question: 'Your memory pouch loses its thickness. Which next action supports useful invention?',
      options: ['Add a decorative pattern to suggest complexity', 'Recheck the side plane, then construct the new pocket', 'Repeat the same flat outline without looking again'],
      correctIndex: 1,
      explanation: 'The side plane addresses the missing volume before a new part is attached. Decoration and unchecked repetition preserve the same structural gap.',
    },
    takeaway: 'Observe, check what memory changed, and invent a specific new structural relationship.',
    sourceNote: 'Tate and Getty drawing references are inherited. This original study cycle is not a tested memory intervention or blanket licensing permission.',
  },
  {
    id: 'design-046',
    title: 'Compare a paper boat\'s placement before rendering the scene',
    outcome: 'Use distinct thumbnails to choose an arrangement by its intended emphasis rather than a fixed composition rule.',
    scene: 'A paper boat and stone become a small imagined river scene.',
    sections: [
      {
        title: 'Choose the relationship first',
        paragraphs: [
          'A folded paper boat and a stone on cloth can suggest a small vessel beside a large river rock. Your intention is for the boat to be noticed first without losing the sense of open space. That intention involves placement, relative size, value, and crop. It does not require finished water texture or a convincing drawing of every fold. Before committing to a larger picture, make several small frames where those structural decisions can change without discarding an hour of careful rendering.',
        ],
      },
      {
        title: 'A thumbnail tests a difference',
        paragraphs: [
          'A thumbnail is a small, simplified composition study. Keep the boat, rock, and broad cloth fold as masses. In one version, place the boat low left and the rock high right, with the fold connecting the diagonal. In another, bring the boat toward the center and push the rock toward the edge. These are different arrangements. Redrawing the first version with more precise texture is not another composition test. There is no compulsory grid intersection that can decide which relationship serves this particular picture.',
        ],
      },
      {
        title: 'Keep the drawing invented but accountable',
        paragraphs: [
          'You can rearrange the real objects or invent the placement on paper, using observation when a form becomes uncertain. Compare the small studies before enlarging one. If the rock dominates because it is the only dark mass, try changing its area or surrounding contrast rather than adding details to the boat. If the central boat loses the feeling of space, preserve a larger quiet region in another version. Name the tradeoff instead of declaring a universal best composition. Keep rejected thumbnails: they show which alternatives you considered and make the next decision less dependent on vague memory.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Wide diagonal arrangement',
        alt: 'A boat sits low left, a stone high right, and a cloth fold between them.',
        caption: 'Picture-plane mass placement. Shapes stand for observed or invented forms, not a finished river illustration.',
        items: [
          { label: 'Paper boat', detail: 'Low-left subject.', x: 20, y: 70, shape: 'paper' },
          { label: 'Stone', detail: 'High-right counterweight.', x: 80, y: 30, shape: 'circle' },
          { label: 'Cloth fold', detail: 'Connects the diagonal.', x: 50, y: 50, shape: 'object' },
        ],
      },
      {
        type: 'spatial',
        title: 'Boat central, stone near the edge',
        alt: 'The boat moves centrally, the stone approaches the upper-right edge, and the fold moves lower left.',
        caption: 'A structural alternative. Compare emphasis and open space before adding texture to either study.',
        items: [
          { label: 'Paper boat', detail: 'Central subject.', x: 50, y: 55, shape: 'paper' },
          { label: 'Stone', detail: 'Near the frame edge.', x: 82, y: 20, shape: 'circle' },
          { label: 'Cloth fold', detail: 'Lower-left supporting mass.', x: 18, y: 80, shape: 'object' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Paper boat or folded paper triangle', 'Stone', 'Cloth', 'Paper and pencil'],
      steps: [
        'Arrange the objects and write an intention: notice the boat first while retaining a sense of space.',
        'Draw four small frames. Change placement, crop, or large value areas between them; omit texture.',
        'Compare the studies at the same small size. Circle one and name the structural decision supporting your intention.',
        'Enlarge only its main forms. Keep the other thumbnails and note one tradeoff the chosen arrangement introduces.',
      ],
      notice: 'The alternatives differ in composition, and the selected study has a reason beyond looking more finished.',
      troubleshooting: 'If all four are the same arrangement, move a mass or crop an edge before changing pencil technique.',
    },
    recall: {
      prompt: 'You are designing an original poster with a folded umbrella and a doorway. What should thumbnail alternatives vary?',
      answer: 'Vary the umbrella\'s placement and size, doorway crop, and large value relationship according to what should attract attention first. Delay fabric detail.',
      hint: 'Change the arrangement of masses, not how carefully each is rendered.',
    },
    quiz: {
      question: 'Which second study tests a genuine composition alternative to the wide diagonal?',
      options: ['The same arrangement with more cloth texture', 'The same crop with cleaner boat folds', 'A central boat with the stone pushed toward the edge'],
      correctIndex: 2,
      explanation: 'The changed mass placement alters emphasis and space. More texture or precision refines the existing composition without testing another structure.',
    },
    takeaway: 'Make thumbnails differ structurally, then choose by the relationship you want the picture to express.',
    sourceNote: 'Getty design principles and Tate drawing references are inherited. Arrangements are original options, not guaranteed attention formulas.',
  },
  {
    id: 'design-047',
    title: 'Draw what the spoon reflects, not a symbol for shiny',
    outcome: 'Compare material appearance under shared light and use observed transitions instead of generic texture recipes.',
    scene: 'A polished spoon, plain paper, and folded cloth share one light.',
    sections: [
      {
        title: 'Three surfaces under one lamp',
        paragraphs: [
          'Place a polished spoon, unprinted paper, and folded cloth beside one another under steady light. The spoon might show a dark band beside a bright one, while the paper changes more gently and the cloth adds small shadows where it folds. Random white stripes could make the spoon seem shiny, but would not explain this spoon in this room. Begin with the forms and the visible value patches. The material name alone is not a recipe for where a highlight belongs.',
        ],
      },
      {
        title: 'Reflection depends on the surroundings',
        paragraphs: [
          'A polished surface reflects a comparatively organized view of its surroundings, distorted by its shape. Matte paper scatters reflected light more broadly, so its appearance often varies less sharply with viewpoint. Cloth contributes both surface texture and larger folds that turn or block light. These differences are relative: finishes, illumination, and object shape all matter. Keep the light and arrangement steady during the comparison. Otherwise a changed highlight could come from a moved lamp rather than the surface behavior you intended to study.',
        ],
      },
      {
        title: 'Move the view as a separate test',
        paragraphs: [
          'Make a small spoon patch study that records the width and edge of a reflected band. Move your head slightly and observe whether that band shifts across the bowl. Then return before drawing the paper and cloth patches. Do not expect the three studies to share the same dark accents merely because they share a light. Use broad groups first and add only the texture that explains the surface. For an invented metal handle, transfer the idea of reflected surroundings and curved form, not the exact stripe map copied from this spoon. A changed shape needs a new reflection problem.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Compare surfaces under a shared light',
        alt: 'Spoon, paper, and cloth sit across one setup between a light and an observer.',
        caption: 'Setup map. Keep objects and light fixed; move only the eye for the separate reflection check.',
        items: [
          { label: 'Light', detail: 'Steady for all three.', x: 50, y: 15, shape: 'light' },
          { label: 'Polished spoon', detail: 'Reflected bands.', x: 18, y: 50, shape: 'object' },
          { label: 'Plain paper', detail: 'Broad matte patch.', x: 50, y: 50, shape: 'paper' },
          { label: 'Folded cloth', detail: 'Plane turns and texture.', x: 82, y: 50, shape: 'object' },
          { label: 'Eye', detail: 'Small viewpoint change.', x: 50, y: 85, shape: 'eye' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }],
      },
      {
        type: 'swatches',
        title: 'Patch notes, not material formulas',
        alt: 'A light and dark spoon band are shown beside example paper and cloth tones.',
        caption: 'Illustrative gray patches. Their locations, widths, and transitions must come from the actual study.',
        items: [
          { label: 'Spoon light band', detail: 'Reflected bright surround.', color: '#E9E8E0' },
          { label: 'Spoon dark band', detail: 'Reflected dark surround.', color: '#343A3B' },
          { label: 'Paper patch', detail: 'Broad value area.', color: '#C8C3B6' },
          { label: 'Cloth fold', detail: 'Turn before fine texture.', color: '#767167' },
        ],
      },
    ],
    practice: {
      minutes: 12,
      needs: ['Polished spoon', 'Plain paper', 'Cloth', 'Pencil', 'Steady light'],
      steps: [
        'Place all three surfaces under the same light and choose a seated view. Draw three small study boxes.',
        'Spend 3 minutes on each patch, recording broad tones and transition widths before texture.',
        'Use the remaining 3 minutes to shift your viewpoint, check the spoon band, and label one difference per material.',
      ],
      notice: 'The studies differ through observed reflection, edge behavior, and folds rather than identical decorative stripes.',
      troubleshooting: 'If the spoon looks flat, recheck bowl curvature and reflected band placement before adding more highlights.',
    },
    recall: {
      prompt: 'You invent a brushed-metal box from a polished-spoon study. Why should its highlight pattern change?',
      answer: 'The box has different planes and surface finish, so it reflects the surroundings differently. Transfer the light-and-form reasoning rather than the spoon\'s exact bands.',
      hint: 'Material, shape, viewpoint, and surrounding light all contribute.',
    },
    quiz: {
      question: 'A spoon\'s dark band moves when the eye moves, with light and objects unchanged. What does this suggest?',
      options: ['The band is a permanent painted marking', 'It reflects a view-dependent part of the surroundings', 'Every dark spoon patch is a cast shadow'],
      correctIndex: 1,
      explanation: 'The controlled viewpoint change supports a reflection explanation. A fixed marking would stay on the same surface location; darkness alone does not identify cast shadow.',
    },
    takeaway: 'Observe reflection and form together, then transfer their logic rather than a texture stereotype.',
    sourceNote: 'Getty and Tate references support material and drawing vocabulary. The patch studies are original observations to attempt, not calibrated material measurements.',
  },
  {
    id: 'design-048',
    title: 'Finish an original leaf-and-cardboard picture with a stated aim',
    outcome: 'Combine construction, composition, value, and edge choices into one bounded original study and a useful review.',
    scene: 'A fallen leaf leads an arrangement with folded cardboard and a pebble.',
    sections: [
      {
        title: 'Choose what the picture is about',
        paragraphs: [
          'Arrange a fallen leaf, a folded piece of unprinted cardboard, and a small pebble. You want the leaf noticed first, with the cardboard suggesting a larger quiet backdrop. That is an original compositional decision even though the objects already exist. Write the intention before drawing. Place the leaf near a darker opening in the fold if that helps separate it, and choose one main light. You do not need to invent every surface from memory to make the arrangement yours.',
        ],
      },
      {
        title: 'Let the earlier tools share one job',
        paragraphs: [
          'Make small placement trials, then construct the chosen arrangement with a leaf gesture, cardboard planes, and a rounded pebble mass. Check the gap between leaf and fold as well as the positive forms. Group the broad lights and darks before veins or paper fibers. Reserve a clear boundary where it helps the leaf separate, while allowing less important transitions to remain quieter. These choices support the intention together. A perfectly detailed pebble can still distract if its contrast becomes stronger than the leaf relationship you meant to emphasize.',
        ],
      },
      {
        title: 'Finish with a question you can answer',
        paragraphs: [
          'Stop when the large forms, light direction, and intended emphasis are legible enough to review. Compare the drawing at a small size with your written aim. If attention seems to go to the pebble, identify a visible reason such as its isolated dark outline before changing anything. Try one revision and compare again. Keep the finished study plus one retained decision and one next exercise. This is not a test of whether you deserve to draw. References remain welcome for uncertain forms, but use your own or appropriately permitted material and label direct studies honestly when sharing.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'An arrangement built around the leaf',
        alt: 'Light from upper left reaches a leaf before folded cardboard, with a darker fold opening and a pebble below.',
        caption: 'Original schematic and illustrative value plan, not finished artwork. Inspect the leaf against the darker opening behind it.',
        items: [
          { label: 'Main light', detail: 'One chosen direction.', x: 18, y: 18, shape: 'light' },
          { label: 'Leaf', detail: 'Intended first subject.', x: 28, y: 56, shape: 'object', color: '#EEE6D1' },
          { label: 'Fold opening', detail: 'Darker neighbor behind leaf.', x: 50, y: 28, shape: 'box', color: '#35362F' },
          { label: 'Cardboard planes', detail: 'Larger quiet backdrop.', x: 82, y: 48, shape: 'paper', color: '#ACA18A' },
          { label: 'Pebble', detail: 'Supporting rounded mass.', x: 62, y: 82, shape: 'circle', color: '#595A51' },
        ],
        arrows: [{ from: 0, to: 1, label: 'Light' }],
      },
    ],
    practice: {
      minutes: 15,
      needs: ['Fallen leaf', 'Unprinted cardboard', 'Pebble', 'Paper and pencil', 'Steady light'],
      steps: [
        'Use 2 minutes to arrange the objects and write which should be noticed first. Keep the light steady.',
        'Use 2 minutes for two small placement trials. Choose one by the stated intention, not its neatness.',
        'Use 7 minutes to construct the forms, compare gaps, and place the broad value groups without texture.',
        'Use 2 minutes to select a few edges and details that support the leaf rather than every object equally.',
        'Use 2 minutes to review at small size. Record one retained choice and one specific next drill.',
      ],
      notice: 'A completed small picture is paired with an intention and a review of visible decisions.',
      troubleshooting: 'If time runs out in detail, stop texture work and resolve the main form or value relationship first.',
    },
    recall: {
      prompt: 'Your next picture uses a shoe and an open box, but the shoe should lead. What decisions would you test first?',
      answer: 'Test placement, relative size, and value separation in thumbnails, then construct both forms under one light. Review whether the box competes before adding shoe texture.',
      hint: 'Transfer the sequence of decisions, not the leaf arrangement itself.',
    },
    quiz: {
      question: 'The pebble attracts attention first because it has the only heavy outline. Which revision matches the stated aim?',
      options: ['Reduce that competing edge and recheck leaf separation', 'Add equally heavy outlines to all remaining objects', 'Draw more leaf veins before comparing values'],
      correctIndex: 0,
      explanation: 'The first revision targets the observed competition. Equal outlines or extra veins add marks without directly testing the intended hierarchy.',
    },
    takeaway: 'Finish a small original arrangement, then review a visible choice against the intention.',
    sourceNote: 'Getty design principles and Tate drawing references are inherited. The original arrangement and practice budget make no claim of guaranteed aesthetic results.',
  },
]