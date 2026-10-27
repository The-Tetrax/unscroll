import type { LessonGuide } from './types'

// Sources are inherited from the existing lesson IDs. These examples and drawings are original.
// Practice budgets are suggestions. Paper prototypes do not establish WCAG conformance.
export const designUxDrawGuides: LessonGuide[] = [
  {
    id: 'design-025',
    title: 'Test the booking task, not your liking for the screen',
    outcome: `Keep a visual preference and task evidence in separate notes, define success as reaching a named screen state, and judge a layout by whether someone gets there.`,
    scene: 'Changing a workshop booking date in a paper prototype.',
    sections: [
      {
        title: 'The attractive booking summary',
        paragraphs: [
          `A fictional pottery workshop has sent you a booking summary. It is lovely to look at. Cream background, a big photograph of glazed bowls, generous spacing, a typeface with some warmth. You want to move your booking from Saturday to Sunday. You tap the date. Nothing. You tap the photograph, because it is the biggest thing on the page. Nothing. Eventually you spot a small gray Manage link tucked under the summary, and you are in.`,
          `Here is the trap. Because the page is so pleasant, you are inclined to say it works well. It does not. You tried two wrong things before finding the right one. But the opposite trap is just as real: if the date change had been effortless, that would not have told you anything about whether the photograph is good. Liking the page and completing the task are two different observations about the same screen. If you write them down as one, you will end up redesigning the wrong thing.`,
        ],
      },
      {
        title: 'Specify what success means',
        paragraphs: [
          `Think of a handsome restaurant. Beautiful lighting, good chairs, art on the walls. And nobody can find the toilets. Guests wander past the kitchen, open a cupboard, ask a waiter. The restaurant is still beautiful. The toilets are still hard to find. A review that said the decor is wonderful so it must be easy to get around would be confusing two things the guests experience separately. The fix for the toilets is a sign, not better art.`,
          `Usability is about a particular person, a particular goal, and the conditions they are working in. It is not a general glow. So you have to say what success is before you watch anyone try. Here, success means reaching a review screen that shows Sunday, without having accidentally confirmed anything along the way. That definition tells you what the controls must do: show where to act, show which date is selected, and offer a way back to the unchanged booking.`,
          `It also tells you how to take notes. Record concrete actions: tapped the date, tapped the photo, found Manage on the third try. Record compliments in a separate column, because a pleasant appearance really does nudge people to report that something was easy. And be careful with pauses. A person who stops for ten seconds might be hunting for a missing control, or they might be reading the cancellation terms. A pause is a prompt to ask, not evidence on its own.`,
        ],
      },
      {
        title: 'Compare two routes',
        paragraphs: [
          `Sketch a revised card. Put a control labeled Change date right beside the word Saturday, where the eye already is. Selecting it opens the date choices. Choosing Sunday leads to a screen labeled Review change, which shows Sunday as the proposed date with Confirm and Cancel both visible. Three states: Saturday booking, Choose Sunday, Review change. The last one has not changed anything yet. That is the point of it.`,
          `Now test the two versions with a willing reader, or trace them yourself with a pencil. Do not ask which sketch looks more professional. Ask where the reader starts, and whether the review screen matches what they meant to do. If their first action on the new card is Change date, the sign is in the right place. If they still tap the photograph, you have learned something the pretty version hid.`,
          `For a keyboard route, number the controls in the order focus should move and draw an outline around whichever one is current. That rehearsal can reveal a missing step. It cannot prove how a live page actually behaves; that needs the real thing. And stop the exercise at the review screen. No real booking or payment changes in a practice run.`,
        ],
      },
      {
        title: 'When praise is not a pass',
        paragraphs: [
          `The first mistake is letting the compliment stand in for the result. A reader says the screen looks great and then enters the wrong date. The compliment is real, and it is irrelevant to the wrong date. The useful next check is the selection feedback and what the review screen showed, because that is where the task failed. Asking about the palette or comparing the photograph with another workshop would be asking the guests about the art while they look for the toilets.`,
          `The second mistake is writing success as looks cleaner. Cleaner is an appearance judgment and you cannot watch someone reach it. Replace it with a destination: reaches the review showing Sunday without confirming.`,
          `Two habits. Before any test, write success as an observable screen state the reader must reach. And keep two columns in your notes, one for what they did and one for what they said they liked, so the compliment never gets to vote on the route.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A date change with a review',
        alt: 'Booking details lead through Change date and Sunday selection to a review, before confirmation.',
        caption: `Read the three states left to right and notice that the last one is a review, not a confirmation. Sunday is proposed there; the booking has not changed. These are fictional interface states.`,
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
        `Draw a Saturday booking card with a photograph placeholder, the date, and a small Manage link. This is the handsome restaurant, and you need it on paper to see what it hides.`,
        `Write one appearance preference about the card, then on a separate line write the route you expect someone to take to change the date. Keeping them apart now is what keeps them apart in your results.`,
        `Draw the revised card, the Sunday choice, and the review screen, labeling Change date, Confirm, and Cancel. The review state exists so nothing is confirmed by accident.`,
        `Rehearse both versions with a reader, or trace both routes yourself, and record the first action on each card. Write what they did, not a mark out of ten for how it looks.`,
      ],
      notice: `Your notes now tell an appearance judgment apart from a missing or misunderstood step in the task. You can see exactly where the first version sent people to the photograph, and you can see that the fix was a label beside the date, not a new photograph.`,
      troubleshooting: `If your definition of success reads something like looks cleaner or feels simpler, you have written a compliment, not a destination, and you cannot watch anyone arrive at it. Rewrite it as reaching the review screen that shows Sunday without confirming, and then go back and check your notes against that.`,
    },
    recall: {
      prompt: 'A music app looks polished, but someone cannot find downloaded albums. What would you investigate separately?',
      answer: `Write the compliment about the polish in one place, then trace the actual route to finding and opening an album offline: which labels they read, where they turned wrong, and whether the album really is stored on the device. The polish is the restaurant decor; the missing albums are the toilets nobody can find. They need separate notes and separate fixes.`,
      hint: 'Name an observable destination, not a feeling about the layout.',
    },
    quiz: {
      question: 'A reader praises the booking screen but enters the wrong date. Which next check addresses usability?',
      options: ['Ask for a second palette preference', 'Inspect selection feedback and the review date', 'Compare the photograph with another workshop'],
      correctIndex: 1,
      explanation: `The wrong date is a task failure, so the useful check is what the screen showed when the reader selected a day and what the review displayed. That is where the route broke. A palette preference or a photograph comparison can tell you about appearance, which is the part the reader already praised, and neither explains why the date came out wrong.`,
    },
    takeaway: 'Keep appearance notes and task evidence separate, then improve the observed route.',
    sourceNote: 'NN/G heuristics and aesthetic-usability guidance frame the distinction. This fictional rehearsal is not a measured usability study.',
  },
  {
    id: 'design-026',
    title: 'Give a gallery action a cue people can recognize',
    outcome: `Make each action on a card possible, name it with a visible cue that matches what it really does, and give it its own control that a keyboard can reach in a sensible order.`,
    scene: 'Opening and keeping a leaf study in a small gallery.',
    sections: [
      {
        title: 'What does the picture do?',
        paragraphs: [
          `You have built a small gallery for your drawings. One card shows a leaf study titled Bent stem. Tapping anywhere on the card secretly opens a larger view. A tiny star in the corner keeps a copy offline. You know this because you built it. A friend looking at the card for the first time knows none of it. They see a picture, a title, and a star. The star, to most people, means a rating. They tap it to say they like the drawing, and the phone starts storing a file.`,
          `Both actions work perfectly in the code. That is not the problem. The card does not explain which parts of it do what. Your friend cannot tell whether to tap the picture, the title, or the star, and the star tells them the wrong thing. Notice that no amount of decoration helps here. A nicer border, a drop shadow, a warmer color: none of it answers the question of where to tap and what will happen. The missing information is about action, not ornament.`,
        ],
      },
      {
        title: 'Possibility and its signal',
        paragraphs: [
          `Think of doors. A door with a flat metal plate at hand height says push. A door with a handle says pull. You read them without thinking, and that is the whole point. Now think of the door everyone has met: a handle on a door that must be pushed. People pull it, bump, and feel stupid. They are not stupid. The handle made a promise the door did not keep. The door was perfectly capable of opening; its cue pointed the wrong way.`,
          `Designers use two words for the two halves of that. An affordance is what you can actually do with something: this door can be pushed open, this card can be opened, this star can store a file. A signifier is the perceptible cue that tells you about the action: the plate, the handle, a label. The cue must match the capability. A star that means store is a handle on a push door. And a control that looks live but cannot work right now needs an explanation, not just a paler color.`,
          `One more thing appearance cannot do on its own. A picture that opens when tapped offers nothing to someone moving through the page with a keyboard or a screen reader. For them, the action only exists if the code provides a real link or a real button. The signifier has to be built, not just drawn.`,
        ],
      },
      {
        title: 'Separate opening from keeping',
        paragraphs: [
          `Give the card two honest controls. A link labeled View study, which takes you to the larger view. A button labeled Keep offline, which asks the device to store a copy and does not jump to another page. The two jobs are different in kind, going somewhere versus changing something, so they get different kinds of control. Keep them side by side, not one nested inside the other, so each has its own place to tap and its own place for focus to land.`,
          `On paper, number the stops in the order a keyboard should visit them: View study is stop 1, Keep offline is stop 2. Draw an outline around whichever control is focused in each sketch. That rehearsal shows you the intended order and catches a control you forgot.`,
          `Then in the live version, check three things: that pressing Tab reaches both controls, that each one's accessible name says which study it belongs to, so a screen reader does not announce six identical Keep offline buttons, and that activating each does exactly what its label promised. A named action is a proposal to test. People can still misread a good label, so watch them.`,
        ],
      },
      {
        title: 'Fixes that miss the question',
        paragraphs: [
          `The first mistake is making the ambiguous thing bigger. People mistake the star for a rating, so the star is enlarged. Now a bigger star is mistaken for a rating. Visibility went up; meaning did not change. The second is adding a hover effect to the picture. Hover only exists for a mouse, so touch and keyboard users never see it, and the people who do see it still have to guess what the glow means.`,
          `A third mistake is leaning on explanation. If you find yourself telling people the star means keep offline, that sentence belongs on the control as its label. Revise the label before adding another icon.`,
          `Two habits. For every action on a screen, write down what it does and check that the visible cue says that and not something else. And for every cue, make sure a keyboard can reach it and a screen reader can name it, because a signifier that only works for a fingertip is half a door.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two actions on one gallery card',
        alt: 'A leaf preview and title sit above separate View study and Keep offline controls.',
        caption: `Look at the two controls along the bottom first. One says where you will go and the other says what will change, and each has its own area to tap and its own focus stop. The card is shown without browser decoration.`,
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
        `Sketch a gallery card with a title, a drawing placeholder, and an unlabeled star. Write two different things a newcomer might think the star means; this is the handle on the push door.`,
        `Replace the ambiguity with two separate controls, View study and Keep offline, and write under each what it changes. Going somewhere and changing something get different controls on purpose.`,
        `Number the focus stops and trace a keyboard journey: open the study, come back, then keep it offline without opening it again. The trace shows whether each action is reachable on its own.`,
        `Add an unavailable state with a reason, such as storage unavailable, written beside the control. A control that cannot work right now should say so rather than pose as a working button in a paler color.`,
      ],
      notice: `Each action now has a named target, an expected result, and a planned focus stop. Nobody has to be told what the star means, because there is no star to explain; the label does the explaining, and it does it for touch, mouse, and keyboard alike.`,
      troubleshooting: `If you catch yourself explaining a control out loud, such as that icon keeps it offline, that explanation is the label the control should have carried. Put those words on the control and test again before you consider adding another icon, which would be a second handle on the same confusing door.`,
    },
    recall: {
      prompt: 'A document row opens on click, while an unmarked corner renames it. How would you clarify the actions?',
      answer: `Give the row an identifiable link that opens the document and a separate, visibly labeled Rename control, because opening and renaming are different kinds of action and the unmarked corner is a handle on a push door. Then check each control's target and its keyboard route, rather than relying on an invisible region someone has to discover by accident.`,
      hint: 'Distinguish going somewhere from changing something.',
    },
    quiz: {
      question: 'People mistake Keep offline for a rating. Which first revision addresses that misunderstanding?',
      options: ['Name the action beside its control', 'Enlarge the unchanged star alone', 'Add a hover effect to the picture'],
      correctIndex: 0,
      explanation: `The misunderstanding is about meaning, and a label is the cue that carries meaning: it turns the handle into a push plate. Enlarging the star makes the same wrong promise more visible. A hover effect only appears for a mouse, so touch and keyboard users never see it, and even mouse users still have to guess what the glow is for.`,
    },
    takeaway: 'Make the action possible, name it visibly, and verify the promised input routes.',
    sourceNote: 'NN/G heuristics support discoverability and consistency. The gallery and focus plan are original examples, not tested implementation.',
  },
  {
    id: 'design-027',
    title: 'Distinguish downloading a map from having it offline',
    outcome: `Report only the state the system has actually confirmed, with pending, success, and failure each getting a truthful message and a next action, and never let a tap or a start count as a result.`,
    scene: 'Saving a fictional park map for offline viewing.',
    sections: [
      {
        title: 'The second tap',
        paragraphs: [
          `You are heading to a large park with patchy signal, so you open a fictional map app and tap Download area. The button darkens for a moment and then looks exactly as it did before. Did the map save? Did the request fail? Is something still happening behind the scenes? You have no idea. So you tap again, which is the sensible thing to do when a machine ignores you. Now there may be two downloads running, or none.`,
          `The darkening told you one thing only: the button noticed your finger. It said nothing about whether any map data reached your phone. Those are different events, separated by time and by several things that can go wrong. The gap matters most in exactly this situation, where you will need the result later, in the park, without the connection that made the request possible. If the app lets you believe the map is saved and it is not, you find out at the trailhead.`,
        ],
      },
      {
        title: 'Name the state you know',
        paragraphs: [
          `Think about a washing machine. You press start. The door locks with a click, which tells you the machine heard you. Then a light says the cycle is running, and the display counts down. Only when the cycle finishes does the machine say done. If the power cuts halfway, the clothes are not clean; they are wet, and a good machine says so when the power returns rather than flashing done. And nobody presses start again while the drum is turning, because the machine makes it obvious that it is busy.`,
          `Feedback in an interface does the same job: it tells you the current state and what you can do from here. Downloading park map means work is underway, the drum is turning. Available offline is the done light, and it belongs only after the data has been received and stored successfully. Download interrupted is the honest message after the power cut: it reports a failure without inventing a cause it cannot know.`,
          `Two details keep this honest. If the total size is unknown, say downloading rather than showing a made-up percentage that creeps to 90 and stalls. And while work is pending, make a second activation unavailable, but say why, so the person is not left pressing a dead button. A spinner that turns forever is as unhelpful as no spinner at all. Both leave the one question that matters unanswered.`,
        ],
      },
      {
        title: 'Keep the next action attached',
        paragraphs: [
          `Each confirmed state should carry its own next step. After storage is confirmed, offer Open saved map right there. After an interruption, offer Retry, and say whether anything usable remains on the device. Now the subtle case. Suppose there was an older saved version of this map from last month. The update failed. The honest message is that the old map is still available and the update did not replace it. Quietly labeling the old copy as current would be flashing done over wet clothes.`,
          `Keep the feedback close to the control that caused it, so the eye does not have to hunt for it. Make the status change available to assistive technology, so a screen reader hears that the download finished, but do not yank keyboard focus somewhere unexpected to do it. And a retry must never delete the working older copy before the replacement has arrived safely.`,
          `All of this is a plan to rehearse on paper and then test for real. A paper message cannot verify that storage happened, and it cannot prove that a screen reader announces anything. The live app has to be checked.`,
        ],
      },
      {
        title: 'Claims that run ahead of the evidence',
        paragraphs: [
          `The first mistake is the premature done light: showing Saved the instant someone taps, before the save request has finished. The right sequence is Saving while pending, Saved only after confirmation, and on failure a message that says what remains available and offers a safe retry. The second mistake is treating a finished transfer as a finished job. A map can arrive completely and then fail to be stored. Available offline would be false; Not saved offline with a recovery action is true.`,
          `The third mistake is hiding a failure under a pending message, leaving Downloading on screen until the next visit. The person walks into the park believing the drum is still turning.`,
          `Two habits. Before writing any status message, ask what the system has actually confirmed at that moment, and write only that. And give every state, including failure, a next action attached to it, so the person is never left holding a dead button.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A download has two possible outcomes',
        alt: 'Download area leads to Downloading, which branches to interrupted or confirmed offline availability.',
        caption: `Start at Download area and follow the arrow to Downloading, then notice that two arrows leave it. Only the Stored branch earns the Available offline label; the Failure branch keeps the old saved map and offers Retry. A fictional state diagram.`,
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
        `Label four slips Ready, Downloading, Available offline, and Interrupted, and write the park map's name on each. Four slips force you to admit there are four states, not a button and a result.`,
        `Give every slip a truthful message and a next action. Reserve Open saved map for the Available offline slip only, because that is the one state where the done light is earned.`,
        `Rehearse the success path and the failure path separately, moving the slips. Mark where keyboard focus stays and write what happens if someone taps the button a second time while the drum is turning.`,
        `Add an older saved edition to the failure story and write the message for it. State plainly that the update did not replace the old map, so the old copy is never mislabeled as current.`,
      ],
      notice: `Neither the tap being received nor the download starting is mistaken for stored data anywhere in your four slips. Each state says only what is confirmed, and each one hands the person something to do next, including the failure.`,
      troubleshooting: `If your Interrupted slip contains the word saved anywhere, stop and ask which edition is actually on the device. If an older copy is there, name it as the older copy and say the update failed. If nothing is there, remove the word saved entirely. A failure message must never let done shine over wet clothes.`,
    },
    recall: {
      prompt: 'A note editor displays Saved immediately, before its storage request finishes. What states should replace that shortcut?',
      answer: `Saving while the request is pending, then Saved only once storage is confirmed, and on failure a message that says what is still available and offers a safe retry. The instant Saved is the done light coming on the moment you press start, before the drum has turned, and it is exactly the moment someone closes the app and loses the note.`,
      hint: 'Separate intention, work in progress, and evidence of completion.',
    },
    quiz: {
      question: 'A map transfer finishes, but local storage fails. Which feedback fits?',
      options: ['Available offline because transfer finished', 'Keep Downloading until the next visit', 'Not saved offline, with a recovery action'],
      correctIndex: 2,
      explanation: `Transfer and storage are two separate events, and only the second puts a usable map on the device, so the truthful state is Not saved offline with a way to recover. Available offline would be the done light over wet clothes. Leaving Downloading on screen hides a known failure behind a pending message, and the person finds out at the trailhead.`,
    },
    takeaway: 'Feedback should report the state confirmed by the system, with an honest next action.',
    sourceNote: 'NN/G system-status guidance and W3C color guidance support the principles. The map states do not demonstrate actual offline storage.',
  },
  {
    id: 'design-028',
    title: 'Keep the checkout work when one field needs repair',
    outcome: `Write an error that names the one field and the one known problem, keep every valid entry on screen, and plan where focus lands so the repair is found and the route back is clear.`,
    scene: 'Correcting a receipt email while ordering original prints on paper.',
    sections: [
      {
        title: 'One incomplete address',
        paragraphs: [
          `You are rehearsing a paper checkout for your own art prints. The basket has two prints in it. The pickup name is filled in. The receipt email field says lee@ and nothing more, because the typist got distracted. They tap Review order. A red line appears at the very top of the page: Invalid input. That is all. Which input? The person now has to read every field, hunting for the one that went wrong, and the message does nothing to help them find it.`,
          `There is a worse version. Some forms respond to a single mistake by clearing everything, so the basket and the name vanish along with the broken email. One field needed attention, and all the correct work was thrown away as punishment. A good error does the opposite. It narrows the repair to one place, tells you what is wrong there, and leaves everything else exactly as you left it.`,
        ],
      },
      {
        title: 'State the known problem',
        paragraphs: [
          `Think of two teachers marking the same page of sums. The first writes WRONG across the top in red and hands it back. The student has twenty sums and no idea which to check. The second circles one sum and writes beside it: check the carry in the tens column. Nineteen correct answers are left alone. The student knows where to look and what to look for, and goes straight there. Same page, same mistake, completely different afternoon.`,
          `Be the second teacher. The system knows something specific here: the email entry stops at the @ sign. So put a message beside that field that says exactly that. Add the part after @, with an example clearly marked as an example so nobody copies it. Keep the field's label visible, and in a real interface connect the message to the field in the code, so a screen reader reads them together.`,
          `Say only what you know. The validation result tells you the email is incomplete. It does not tell you the person was careless, and it does not tell you their network failed. Those are different explanations, and neither one follows from a short string. Blaming either is the first teacher again, just with more words. Better still, a short hint shown before submission can prevent the predictable mistake from happening at all.`,
        ],
      },
      {
        title: 'Repair without losing the route',
        paragraphs: [
          `Keep the basket, the pickup name, and the typed lee@ on screen. The person can see what they typed and finish it rather than retype it. If the form is long, a summary at the top can list what needs attention, with each item linking to its field, while the field itself carries the specific correction. Summary for finding, field for fixing.`,
          `Plan where keyboard focus goes after the rejected submission. If it lands on the summary or on the broken field, the error is found. If it stays on the Review order button, a screen reader user hears nothing and a sighted user may not notice a message that appeared somewhere above. After the repair, Review order should show the same basket with the corrected address, so the person can see their work survived.`,
          `One distinction to hold onto. This is a known validation failure: the system is certain the email is incomplete. That is different from an uncertain response after an order is sent, where the system does not know whether the purchase went through. Asking someone to blindly try again in that second case risks a duplicate order. This exercise stops at a fictional review and never submits anything.`,
        ],
      },
      {
        title: 'Errors that keep the reader guessing',
        paragraphs: [
          `The first mistake is the vague message in a louder place. Invalid input moves from the top of the page into a pop-up dialog. It is now impossible to miss and still says nothing about where or what. The second is disabling Review order without explanation, so the person sees a gray button and no reason, and starts clicking around to find out why.`,
          `A third mistake is overreach. A drawing upload exceeds a known size limit, and the message blames the connection. The system knows the file size and the limit; it should name both, keep the title and description the person typed, and offer to choose a smaller file. Guessing at a cause you cannot see is marking the wrong sum.`,
          `Two habits. When writing an error, name the field and the specific problem the system actually knows, and nothing it does not. And before you ship a form, submit it with one field broken and check that every other entry is still there afterwards.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Repair one field, keep the basket',
        alt: 'An incomplete receipt email gets a field message, is corrected, and returns to order review.',
        caption: `Follow the three states and watch what stays constant: the basket and pickup name survive every step while only the email changes. The middle state is the circled sum with a note beside it. These are paper checkout states, not a payment flow.`,
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
        `Draw a basket, a pickup-name field, a receipt-email field, and a Review order control, then fill in an incomplete fictional email such as lee@. You need one broken field among several good ones to see what the error protects.`,
        `Write a correction beside the email field and a one-line summary at the top that names the field. Leave every other entry visible, because the test is whether the correct work survives the mistake.`,
        `Mark where keyboard focus should land after the rejection and draw the route back to Review order once the email is fixed. An error nobody is taken to is an error nobody finds.`,
        `On a fresh sheet, write the repaired review screen and compare it against the first: the basket and pickup name must be identical. If anything valid disappeared, the form punished the wrong thing.`,
      ],
      notice: `The error now points to one field and names one repair, and everything else the person typed is still there. You have marked the page like the second teacher: one circle, one note, nineteen sums left in peace.`,
      troubleshooting: `If your message still says something like invalid or there was a problem, it is WRONG across the top of the page in different words. Rewrite it to name the field and the specific thing the system knows, such as Add the part after @. If you find yourself writing about carelessness or the network, cross it out; the validation result did not tell you that.`,
    },
    recall: {
      prompt: 'A drawing upload exceeds a known file-size limit. What should an error preserve and explain?',
      answer: `Preserve the title and description already typed, name the selected file and the actual size limit, and offer the next step of choosing a smaller file. That is circling the one sum and writing what is wrong beside it. Do not blame the connection, because the system knows the file size and the limit, and it does not know anything about the network.`,
      hint: 'Separate useful completed input from the part that needs replacement.',
    },
    quiz: {
      question: 'A reader cannot locate the failed field. Which revision most directly helps recovery?',
      options: ['Disable Review without explaining why', 'Link a summary to a nearby field-specific message', 'Move the same generic error into a dialog'],
      correctIndex: 1,
      explanation: `A summary that links to the field, with a specific message beside that field, gives both the location and the fix, the circle and the note. Disabling the button hides the reason and leaves the reader clicking around. Moving the generic error into a dialog makes it louder without making it any more specific, so the hunt through every field begins again.`,
    },
    takeaway: 'Name the known failure, preserve valid work, and make the repair route discoverable.',
    sourceNote: 'NN/G heuristics support prevention and recovery. The checkout is fictional; focus, validation, and transaction safety need implementation testing.',
  },
  {
    id: 'design-029',
    title: 'Compare the whole menu search, not just button counts',
    outcome: `Judge a menu by whether people can predict where a command lives and tell it from its neighbors, using choice complexity as a question rather than turning Hick's law into a menu-size rule.`,
    scene: 'Finding Resize in two layouts of a simple image editor.',
    sections: [
      {
        title: 'Eight commands or two headings?',
        paragraphs: [
          `You are sketching an imaginary image editor with eight commands: Crop, Export, Flip, Import, Print, Rename, Resize, and Rotate. Laid out as one alphabetical list, the toolbar looks long and a little intimidating. So you tidy it. Two headings, File and Edit, and the eight commands tucked underneath. The first screen now shows two choices instead of eight. It feels calmer, and you are pleased with it.`,
          `Now watch someone who wants a smaller picture. They need Resize. Before they can see it, they have to decide whether a smaller picture is a File thing or an Edit thing. If they guess File, they open it, scan four commands, find nothing, close it, and try Edit. The tidy screen did not remove that work. It moved the work into a prediction about where the command lives, and the prediction is hardest for exactly the person who has never used an editor before. Fewer visible buttons is not the same as an easier search.`,
        ],
      },
      {
        title: 'What the model leaves out',
        paragraphs: [
          `Think of a hardware shop. One shop hangs all eight kinds of screw on the wall in a row. You scan the row and pick. Another shop has two neat drawers labeled Fixings and Fastenings. Tidier, certainly. But is a wood screw a fixing or a fastening? The regular who shops there every week knows. You do not, so you open the wrong drawer first. The second shop has not saved you time. It has asked you to learn its filing system before you can find a screw.`,
          `People reach for Hick's law to justify the two-drawer shop. It is worth knowing what the law actually says. It describes how long it takes to choose a response when the choices are presented under controlled conditions, and its familiar simplified form assumes every alternative is equally likely. It is a finding about choice reaction time. It does not predict how long a whole editing task takes from a count of buttons, and it does not contain a secret rule that seven items is the limit.`,
          `Real menu use is bigger than one choice. You have to recognize a word, search a location, decide between related operations that sound alike, and sometimes undo a wrong pick and start again. Familiarity changes all of it. And one more thing the law never implies: removing a command that people need does not make their task easier. It makes it impossible.`,
        ],
      },
      {
        title: 'Make the grouping answer the goal',
        paragraphs: [
          `Try a grouping and test it against a goal. Put Crop, Flip, Resize, and Rotate under Edit, since they all change the picture itself. Put Export, Import, Print, and Rename under File, since they all deal with the picture as a document. Then set a task without naming the command: make the picture a smaller pixel width without cutting anything off. Notice that Crop and Resize are now neighbors and both sound like they might do that. A one-line description beside each can settle it: Crop removes edges, Resize scales the whole picture.`,
          `Watch where a reader looks first and what they expect each heading to hold. That is the evidence. A difference of half a second on one attempt is not, because one attempt by one person tells you almost nothing about speed and quite a lot about meaning. If they open File looking for Resize, you have learned that your drawer labels do not match their mental filing.`,
          `Keep a keyboard route through the headings and their options that someone can discover without a mouse. A grouping earns its place by helping this search. It does not win simply because fewer labels are visible when the screen first appears.`,
        ],
      },
      {
        title: 'Tidiness that moves the cost',
        paragraphs: [
          `The first mistake is counting visible choices and calling the count a result. A redesign that cuts eight commands to two headings still owes you one piece of evidence: can people locate and distinguish the command they need? Whether two sits below some universal menu limit is not that evidence, because there is no such limit. The second mistake is hiding everything behind clever category names. A restaurant that files every dish under invented headings makes you interpret the headings before you can see any food. A longer, plainer menu can be the easier one.`,
          `A third mistake is testing on yourself. You named the groups, so of course they feel obvious to you. Use a task you find unfamiliar, or a willing newcomer, rather than inventing difficulty you cannot feel.`,
          `Two habits. When you group commands, write a task in the user's words and check that the heading they would guess is the heading you chose. And whenever two commands sit together and sound alike, add a short description that tells them apart before you worry about how many there are.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two ways to look for Resize',
        alt: 'An alphabetical command list is compared with File and Edit menus containing the same eight commands.',
        caption: `Find Resize in the left version, then find it in the right one and notice the extra step: you have to guess which heading holds it first. The commands are identical; only the search route differs. Neither layout has a predicted speed advantage here.`,
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
        `Write all eight commands in alphabetical order. Beside them draw File and Edit headings with the groups shown above, so you have the wall of screws and the two drawers side by side.`,
        `Set the goal in plain words: make the picture a smaller pixel width while keeping the whole image. Do not say Resize, because the test is whether someone can get from the goal to the command.`,
        `Try both routes with a reader, or predict each decision honestly yourself, and write down every wrong heading opened and every label that could mean two things. Those notes are the evidence, not a stopwatch.`,
        `Add a one-line description under Resize that separates it from Crop, then run the search again. Record what changed, and resist writing any claim about speed from a single try.`,
      ],
      notice: `Your comparison now records navigation and meaning: which drawer people opened first and which labels they confused. The count of visible labels, which was all the tidy version could boast about, turns out to be the least informative number on the page.`,
      troubleshooting: `If both versions feel obvious to you, remember that you labeled the drawers, so you cannot be the newcomer. Swap in a task you genuinely find unfamiliar, or hand the sketch to someone who has never used an image editor. Do not invent difficulty you cannot feel; borrow someone else's.`,
    },
    recall: {
      prompt: 'A restaurant hides every dish inside unfamiliar category names. Why could this be harder than a longer menu?',
      answer: `Because the diner has to interpret the invented categories before any dish appears, which is the Fixings-or-Fastenings drawer problem: fewer things to look at, one more thing to guess. Clear group names, a search, or simply a visible list of dishes can make it easier to find a meal you already know you want, even though the menu looks longer.`,
      hint: 'Count the decisions introduced by hiding choices.',
    },
    quiz: {
      question: 'A redesign cuts eight visible commands to two headings. What evidence is still needed?',
      options: ['Whether two is below a universal menu limit', 'Whether both headings use the same letter count', 'Whether people can locate and distinguish the needed command'],
      correctIndex: 2,
      explanation: `Two headings add a prediction step, so the open question is whether people guess the right drawer and can then tell the command from its neighbors. There is no universal menu limit for two to sit below, so that comparison proves nothing, and matching letter counts is tidiness with no bearing on whether anyone finds Resize.`,
    },
    takeaway: 'Reduce unnecessary decision work, not necessary information or visible choices indiscriminately.',
    sourceNote: 'Inherited IxDF and NN/G references explain the model and disclosure. This menu comparison supplies no experimental reaction-time estimate.',
  },
  {
    id: 'design-030',
    title: 'Check the colors behind the actual caption',
    outcome: `Measure the specified text and background colors against the threshold that applies to their size, refuse to round a failing ratio upward, and then check the reading conditions the ratio cannot see.`,
    scene: 'Choosing gray text for an original print catalog caption.',
    sections: [
      {
        title: 'A quiet caption that disappears',
        paragraphs: [
          `You are putting together a catalog of your own prints. Under each picture sits a small gray caption with the paper size and where to collect the print. On your bright monitor the gray looks restrained and tasteful. A friend opens the catalog on their laptop in a sunny kitchen and asks you what size the prints are. They cannot read the caption at all. You could spend the afternoon debating whether gray feels elegant. That debate has no answer and does not help your friend.`,
          `Replace the debate with two facts: the exact text color and the exact background color. This example uses two candidate grays, #777777 and #595959, on a solid white #FFFFFF. The caption carries information people need, so it belongs lower in the hierarchy than the picture, not nearer to invisible. Quiet and unreadable are different things, and the second one is a failure however tasteful it looks.`,
        ],
      },
      {
        title: 'Use the applicable threshold',
        paragraphs: [
          `Think of the height mark at a fairground ride. The sign says you must be 120 centimeters to ride. A child who measures 119.5 does not ride. The attendant does not squint and say close enough, and they do not round up to be kind. The mark exists so nobody has to argue. And notice what the mark does not tell you. Being tall enough says nothing about whether the ride is any fun, or whether it is safe for someone with a bad back. It settles one question only.`,
          `Contrast ratio is the height mark for text color. WCAG 2.2 at Level AA requires at least 4.5 to 1 for ordinary text and 3 to 1 for large text, with a few defined exceptions such as purely decorative text and logotypes. Large has a precise definition: at least 18 point, or 14 point if bold. It does not mean anything you have marked up as a heading. The ratio compares the relative luminance of the two colors, which is a calculated lightness value, not a feeling about how the gray looks and not a subtraction of RGB numbers.`,
          `The mark does not round. A calculated 4.499 to 1 is below 4.5 to 1, so it fails for ordinary text, however close it looks on a display that shows one decimal place. And like the height mark, passing the ratio measures one thing. It does not measure taste, whether the caption makes sense, or whether every reader finds it comfortable.`,
        ],
      },
      {
        title: 'Read the result in context',
        paragraphs: [
          `Run the two candidates. #777777 on white comes out at about 4.478 to 1. That is below 4.5, so it fails for ordinary text. #595959 on white comes out at about 7.005 to 1, well above the line. The ratios here are rounded so they can be read; the decision uses the unrounded calculation from a checker. Keep the caption at the same size while you compare the grays, because changing the size at the same time would change which threshold applies and you would not know what you had tested.`,
          `Then look at what the ratio cannot see. Stroke weight: a thin gray letter can pass the ratio and still fade. Actual reading size on the device your friend used, not on your monitor. These are separate checks, done after the measurement, not instead of it.`,
          `Watch for one trap in particular. If the caption sits over a photograph rather than on plain white, a single result against white answers nothing. The background is whatever is behind each letter, and a caption crossing a pale cloud has a different background from one crossing dark foliage. Test the backgrounds the text actually crosses, or give the caption a stable contrasting surface to sit on.`,
        ],
      },
      {
        title: 'Where the ratio gets misused',
        paragraphs: [
          `The first misuse is rounding to pass. A 4.499 displayed as 4.5 is still 4.499; the display changed, the ratio did not. The second is borrowing the large-text threshold because the element is called a heading in the code. The 3 to 1 allowance belongs to text that meets the size definition, and a small caption in a heading tag is still a small caption.`,
          `The third misuse is measuring the average. White text that passes against one dark corner of a photograph has passed against that corner only. The pale cloud it also crosses is a separate background with its own ratio, and the corner proves nothing about it.`,
          `Two habits. Before you argue about whether a color feels right, write down both specified colors and the size of the text, and run the numbers. And after the numbers pass, go and look at the caption on the device and background where it will really be read, because the height mark only settles the one question it was built for.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'swatches',
        title: 'Two caption grays on white',
        alt: 'Gray 777777 fails ordinary-text contrast on white; gray 595959 passes that threshold.',
        caption: `Read the ratio under Caption A first and notice it sits just under the 4.5 mark, like a child at 119.5 beside a 120 sign. Then compare Caption B. Both are measured against the same white surface. These are specified opaque sRGB colors, and the ratios are approximate labels, not rounded pass decisions or calibrated screen samples.`,
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
        `Open a contrast checker from the linked W3C page and enter #777777 as the foreground and #FFFFFF as the background. You are measuring against the mark rather than judging the gray by eye.`,
        `Write down the ordinary-text AA result as a pass or fail, not just the rounded ratio the tool displays. Then repeat with #595959 and record that result beside it.`,
        `Write a real catalog caption and state the size it will be set at. Decide from the size whether the ordinary or the large-text threshold applies, because the mark depends on the size and not on what you call the element.`,
        `Add one readability check that the ratio cannot settle, such as thin strokes or text crossing a photograph, and write how you would test it separately.`,
      ],
      notice: `Your note now names both colors, the threshold that applies, and a result that was not rounded upward. You have also listed what the ratio does not cover, so nobody can mistake the one measurement for the whole task.`,
      troubleshooting: `If two checkers disagree or a result looks wrong, check the usual culprits before doubting the standard: an opacity below 100 percent on either color, foreground and background entered the wrong way round, or a tool set to evaluate non-text controls, which use a different threshold. Fix the entry and run it again.`,
    },
    recall: {
      prompt: 'White text passes on one dark photograph corner but crosses a pale cloud. What should you test?',
      answer: `The actual background behind every part of the text, including the cloud, because contrast is a local relationship between the letters and whatever sits directly behind them, not the average color of the image. The dark corner measured tall enough; the cloud has not been measured at all. Testing the cloud, or giving the text a stable dark surface to sit on, are the two honest options.`,
      hint: 'The background is a local relationship, not the average image color.',
    },
    quiz: {
      question: 'An ordinary caption measures 4.499:1. Which decision follows the criterion?',
      options: ['Revise the pair because it is below 4.5:1', 'Accept it after rounding to one decimal', 'Accept it because the element is named heading'],
      correctIndex: 0,
      explanation: `A 4.499 is the child at 119.5 beside the 120 mark: below the line, so the colors have to change. Rounding to one decimal alters the display, not the ratio. And the large-text allowance of 3 to 1 belongs to text that meets the size definition, 18 point or 14 point bold, so a small caption does not qualify no matter what its element is called.`,
    },
    takeaway: 'Measure the specified text/background pair, then check reading conditions beyond the ratio.',
    sourceNote: 'W3C SC 1.4.3 was spot-checked. These selected contrast checks do not establish full WCAG conformance.',
  },
  {
    id: 'design-031',
    title: 'Keep a route status understandable without its color',
    outcome: `Put every status into visible words and a matching text list so that someone who cannot see or print the colors can still tell which route is open and which is closed.`,
    scene: 'A fictional garden map has one open route and one closed route.',
    sections: [
      {
        title: 'Two lines without their legend',
        paragraphs: [
          `You have drawn a map for a fictional garden. The path splits at a pond. The riverside route is drawn in red because it is closed for repairs. The garden route is drawn in green because it is open. The legend in the corner says red closed, green open. It looks clear. Then a visitor prints the map on the office printer, which only does black and white. They see two gray lines leaving a pond, and no way to tell which one will end at a locked gate.`,
          `Nothing about brighter colors would rescue that printout. Making the red redder and the green greener produces two slightly different grays. A legend that says follow the green line is equally useless, because there is no green on the page. The information the visitor lacks is not whether two marks can be told apart on your screen. It is which route is open. Color was carrying the whole of that message, and when the color went, so did the message.`,
        ],
      },
      {
        title: 'Carry meaning in another channel',
        paragraphs: [
          `Think about traffic lights. Red means stop and green means go, but the lights also have a fixed position: red at the top, green at the bottom. A driver who cannot tell red from green reads the position instead and stops at the right time. The color is still there for everyone who sees it. It just is not the only thing saying stop. The meaning rides on two channels, and losing one does not lose the message.`,
          `Web accessibility guidance treats this as its own rule, separate from text contrast. You can have perfectly readable red and green labels and still have a problem if the words themselves never say which state is which. So give the map a second channel. Write Riverside: closed and Garden: open beside the routes, right where the lines are, and add a distinct closure mark such as a bar across the closed path. Now the words name both the route and its condition.`,
          `A different line pattern, dashed for closed, can reinforce the point. But an unfamiliar pattern is a new code that still needs explaining, so the words do the main job and the pattern helps. Color stays. It is useful to the many people who see it well. It simply no longer has to do the entire job on its own.`,
        ],
      },
      {
        title: 'Give the map a readable companion',
        paragraphs: [
          `Below the map, add a plain list: the same named routes with the same statuses, in text. Someone moving through the page with a keyboard or a screen reader can reach the route details there without hunting for an unlabeled colored segment inside a picture. The list is not a duplicate for its own sake. For some readers it is the map.`,
          `Be careful about what open means. A route marked open is a route that is not closed. It is not thereby flat, step-free, or safe in wet weather. Those are different claims that need their own information, and the word open should not be allowed to imply them.`,
          `Whenever a status changes, update the map and the list together and check they agree. A map saying closed above a list saying open is worse than either alone. Finally, know what your checks prove. Printing in grayscale or viewing in black and white exposes color dependence, which is useful. It does not simulate every form of color vision, and it says nothing about whether a screen reader can get at the information. Every route and status in this lesson is invented for practice.`,
        ],
      },
      {
        title: 'Fixes that leave the meaning on one channel',
        paragraphs: [
          `The first mistake is treating the problem as a contrast problem. Both colors pass their contrast checks, so the designer picks two even darker hues, or makes both lines thicker. The lines are now very visible, and the printout still shows two gray paths with no way to tell which is closed. Visibility was never the gap. Meaning was.`,
          `The second mistake appears in small places: a practice log with a green dot for done and a red dot for missed. In a monochrome view, every day has a dot. Each day needs a label or an explained mark that says what the dot means, with text contrast and accessible naming checked separately from this.`,
          `Two habits. Whenever color signals a state, write the state in words next to the thing it describes, so the words survive without the color. And give any colored diagram a text companion that says the same things, then keep the two in step whenever either changes.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Named routes from the pond fork',
        alt: 'Entrance reaches a fork; Riverside is labeled closed and Garden open, with a matching text list.',
        caption: `Start at the entrance, follow the arrow to the pond fork, and read the words on each route before you notice the colors. Then find the route list in the corner saying the same things in text. A fictional map, not navigation advice; the words should work even when all color is removed.`,
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
        `Draw an entrance, a fork, and two named routes, and mark open and closed using only colored pencil or color labels. Start with the version that fails, so you can feel what the printout loses.`,
        `Cover the color legend with your hand. Now add status words beside each route and a distinct closure mark across the closed one, because the words have to do the job the legend was doing.`,
        `Write a companion list under the map with the same route names and statuses, plus the details each route entry would open to. This list is the map for anyone who cannot use the picture.`,
        `Check the whole sheet using pencil alone, no color. Confirm that no instruction anywhere still depends on recognizing red or green, the way a driver can read a traffic light from position alone.`,
      ],
      notice: `The route names and their statuses survive the loss of hue, both on the map and in the list, and the two agree with each other. Color is still there for the people who see it; it has just stopped being the only messenger.`,
      troubleshooting: `If a reader still glances at the color legend to work out which route is closed, the essential status has not made it into words at the place where it is needed. Put closed and open directly beside the affected routes, not only in a corner, and test again with the legend covered.`,
    },
    recall: {
      prompt: 'A practice log marks missed and completed days with two colored dots. What should survive a monochrome view?',
      answer: `What each dot means. Every day needs a state label or an explained distinct mark, such as a tick and a cross, so that done and missed can be told apart without hue, the way a traffic light can be read from position. Text contrast and accessible naming for a screen reader are separate checks and still need doing.`,
      hint: 'Ask what the dots mean, not only whether they look different.',
    },
    quiz: {
      question: 'Both map colors pass contrast checks, but only hue indicates closure. Which revision addresses the remaining problem?',
      options: ['Increase both line widths equally', 'Choose two darker hues', 'Add named open and closed labels'],
      correctIndex: 2,
      explanation: `The missing piece is meaning that does not depend on hue, and words beside each route carry it the way position carries it on a traffic light. Thicker lines and darker hues both make the routes more visible without saying which one is closed, so a grayscale printout would still show two identical paths.`,
    },
    takeaway: 'Let color reinforce information that remains understandable through another visible cue.',
    sourceNote: 'Inherited W3C Use of Color and NN/G guidance support the distinction. A paper map is not an accessibility audit.',
  },
  {
    id: 'design-032',
    title: 'Let a reminder label grow with its text',
    outcome: `Spot clipping when text is enlarged and fix it by letting the row grow and the content below move, keeping the whole label and its working control instead of protecting the original height.`,
    scene: 'A train-planner reminder row wraps when text is enlarged.',
    sections: [
      {
        title: 'The checkbox outlives its meaning',
        paragraphs: [
          `A fictional train planner has a row with a checkbox and the label Email me about changes to this journey. At the default text size it fits neatly on one line. A traveler who finds small text hard to read turns their text size up, as their phone allows them to. The label wraps onto two lines, but the row has a fixed height, so the second line disappears below its edge. What remains visible reads Email me about. About what? The checkbox still works. The person can no longer read what they are agreeing to.`,
          `The quick fix is tempting: shrink that one label back down so it fits the row again. That keeps the rectangle tidy by undoing the traveler's choice. They enlarged their text for a reason, and the app has just quietly overruled them for one line. The row's height was never the thing worth protecting. The information and the action were. A repair that saves the rectangle at the expense of the words has fixed the wrong thing.`,
        ],
      },
      {
        title: 'Enlargement changes the space needed',
        paragraphs: [
          `Think of an extending dining table. It seats six comfortably. Eight guests arrive. You do not seat two of them on the others' laps, and you do not send two home to keep the table looking as it did. You pull out the extra leaf, the table gets longer, and the chairs shuffle along to make room. Everyone still has a place and a plate. The table changed shape because the number of people changed. That is what the leaf is for.`,
          `Larger text is more guests. The web guideline that covers this, WCAG 2.2 Resize Text, requires that text can be enlarged up to 200 percent without assistive technology and without losing content or function, with exceptions for captions and images of text. Two cautions. It is a web criterion, and a phone's native text-size setting does not necessarily map onto the same percentage. And it says nothing about keeping rows the same height. Bigger letters need more room. Labels wrap, rows grow, and whatever sits below moves down.`,
          `One test that does not count: pinching to zoom on a screenshot. That enlarges the pixels of the old layout. It cannot show you whether the live row grows or clips, or whether the checkbox still does its job once the label has wrapped.`,
        ],
      },
      {
        title: 'Repeat the same harmless task',
        paragraphs: [
          `For the revised row, let the whole reminder label wrap to as many lines as it needs, and keep the checkbox aligned beside the text it belongs to. If there is a help link that used to sit on the same line, give it a line of its own below rather than squeezing the label between two controls. Pull out the leaf; move the chairs.`,
          `Then test it live. Enlarge the text, or use the browser's page zoom, and do the same small task you would do at normal size: find the reminder, read its full meaning, tick it, and move past it with the keyboard. While you are there, look for other symptoms of a fixed-height assumption, such as a clipped message elsewhere or focus outlines that now overlap. Put your viewing preference back afterwards if you like.`,
          `Be clear about what one check covers. It tests this row at this size. It does not test every responsive layout on the page, and it does not cover the separate WCAG criterion on reflow, which concerns how content rearranges at narrow widths. Each of those needs its own look.`,
        ],
      },
      {
        title: 'Protecting the wrong thing',
        paragraphs: [
          `The first mistake is the one from the opening: shrinking the text to fit the box. If the only fix you can find is smaller letters, the real fault is the fixed height, and the fix is to remove that assumption and move competing content out of the way. The second mistake is trusting a static enlargement. A magnified screenshot or an enlarged printed mockup can illustrate the idea, but neither can reveal clipping or a control that stops working, because neither is running.`,
          `A third mistake is declaring victory from one row. The reminder row now grows. A gallery caption on another screen may still overlap its View study link at the same text size. Each place where text sits beside a control needs the same question asked.`,
          `Two habits. When a layout breaks at larger text, change the container, never the text size the reader chose. And test enlargement on the live page by repeating a real task, because only a running layout can tell you whether the words and the control both survived.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'One reminder row, two height policies',
        alt: 'A fixed-height row clips journey reminder text; a growing row keeps the checkbox and complete wrapped label.',
        caption: `Read the label in the fixed row first and notice it stops at about; the rest is below the edge. Then read the growing row, where the table has been extended and every word is present beside its checkbox. A schematic comparison, not an enlarged screenshot or proof of a live resize test.`,
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
        `Draw the complete reminder label beside a checkbox inside a phone-width rectangle and mark the row's bottom edge. This is the six-seat table before the guests arrive.`,
        `Redraw it with larger lettering in the same width and let the row grow as far as it needs, deleting nothing. Watch what has to move down below it; those are the chairs shuffling along.`,
        `If you have a browser, pick a harmless page with a checkbox and set zoom to 200 percent, then read the labels and tick a box without changing any real account settings. The live page is the only version that can show real clipping.`,
        `Write down which test you did, whether anything clipped, and how you moved past the control with the keyboard. Restore the zoom afterwards if you changed it.`,
      ],
      notice: `The enlarged label keeps its full meaning, stays attached to its checkbox, and the content below it has room to move. The row changed shape because the text did, which is exactly what the extending leaf is for.`,
      troubleshooting: `If the only way you can make the enlarged version fit is to draw the letters smaller again, stop: you are seating guests on laps. The fixed height is the fault. Remove that assumption, let the row grow, and move whatever competes for the space, such as a help link, onto its own line.`,
    },
    recall: {
      prompt: 'At larger text size, a gallery caption overlaps its View study link. What would you change and retest?',
      answer: `Let the caption and its row grow, or stack the link on its own line below the caption, so both have room; pull out the leaf rather than shrinking the guests. Then, in the live enlarged interface, read the whole caption and activate the link, because only the running page can show whether the overlap is gone and the control still works.`,
      hint: 'Preserve content and function rather than the original rectangle.',
    },
    quiz: {
      question: 'Which test can reveal whether enlarged text blocks a working control?',
      options: ['Magnify a saved screenshot', 'Enlarge the live page and repeat the task', 'Increase the size of a printed mockup'],
      correctIndex: 1,
      explanation: `Only the live page is running, so only enlarging it and repeating the task can show whether the row grows, the label clips, or the checkbox still works. A magnified screenshot and an enlarged printout are pictures of the old layout at a bigger size; they show the six-seat table, not what happens when eight guests arrive.`,
    },
    takeaway: 'Larger text should change the arrangement without losing the label or the task.',
    sourceNote: 'W3C Resize Text and Apple typography references are inherited. Paper approximation and native text settings are not interchangeable conformance tests.',
  },
  {
    id: 'design-033',
    title: 'Separate the icon from the area that responds',
    outcome: `Draw the area that actually responds to a tap separately from the icon artwork, check its size and spacing against the stated minimum, and keep destructive controls away from frequent ones.`,
    scene: 'Crowded Save and Remove controls beneath a gallery image.',
    sections: [
      {
        title: 'A precise drawing, an awkward tap',
        paragraphs: [
          `Under each picture in your gallery sit two small icons, Save and Remove, side by side. They are beautifully drawn. Every stroke is crisp. And people keep removing drawings they meant to save. A thumb that lands a few pixels to the right of Save hits Remove, and the drawing is gone. You enlarge the icons. The complaints continue, because the thing that responds to the thumb did not change size; only the picture painted on it did.`,
          `Here is the distinction that fixes this. The icon is what you see. The pointer target is the region that actually responds when you tap. They can be the same size, but they do not have to be. A big icon can sit on a tiny target, and a tiny icon can sit inside a generous button that responds for a wide margin around it. When you review a toolbar, draw the activation boundary around each control as a rectangle of its own. The visible strokes are not evidence of where the tap will land.`,
        ],
      },
      {
        title: 'Minimum size is a defined check',
        paragraphs: [
          `Think of the buttons in a lift. The number printed on each button is tiny. Nobody has trouble pressing the right floor, because the whole disc around the number presses, and the discs are spaced apart. Now imagine a lift panel where the numbers were printed close together on one flat plate, with only the printed digit itself responding. You would hit the wrong floor constantly, however crisp the printing. The disc is the target. The digit is the icon.`,
          `Web accessibility guidance makes the disc size a defined check. WCAG 2.2 Level AA Target Size (Minimum) asks for targets of at least 24 by 24 CSS pixels, with listed exceptions covering spacing, targets inside a line of text, controls that have an equivalent elsewhere, and some essential or browser-controlled presentations. Two cautions. CSS pixels are a unit the browser defines; they are not the physical dots on the screen. And the spacing exception is a piece of geometry, not a rule of thumb about leaving a gap between icons.`,
          `The geometry works like this. For a target smaller than the minimum, imagine a circle 24 pixels across centered on it. That circle must not overlap any other target, or the matching circle of another undersized target. Read the full criterion when you apply it. A half-remembered icon rule is not the same thing.`,
        ],
      },
      {
        title: 'Work through a simple pair',
        paragraphs: [
          `Take two square targets in a row, each 20 pixels wide, with a 2 pixel gap between them. Their centers are 20 plus 2, so 22 pixels apart. Each is below the 24 pixel minimum, so draw the 24 pixel circles: each has a radius of 12, and two radii add up to 24. The centers are only 22 apart, so the circles overlap. This pair fails the spacing exception as well as the size minimum.`,
          `Now try 32 pixel squares with an 8 pixel gap. Centers are 32 plus 8, so 40 pixels apart. Each target is above the minimum on its own, so the basic size check passes without needing the circles at all. That is the difference between the printed digits on a plate and the spaced discs.`,
          `Passing the number is a floor, not a finish. Those 32 pixel targets can still be uncomfortable for a large thumb, and the check says nothing about keyboard users. For the gallery, also move Remove away from Save, since one is destructive and the other is frequent, and give both a word as well as an icon. Then inspect the real hit areas and the keyboard focus order in the running interface before calling it checked.`,
        ],
      },
      {
        title: 'Growing the wrong thing',
        paragraphs: [
          `The first mistake is the one from the opening: enlarging the artwork and leaving the target alone. The second is measuring the wrong object. A tiny disclosure chevron sitting inside a wide labeled button is fine if the whole button responds; the dimensions that matter are the button's, not the chevron's. Always ask what region really activates the control.`,
          `A third mistake is measuring on paper. A sketch in centimeters cannot establish CSS pixel dimensions, because the unit is defined by the browser and the device. Paper is for recording intended boundaries and doing the arithmetic. The measurement happens in the running page.`,
          `Two habits. For every control, draw its activation rectangle as a separate shape from its icon and write the intended size on it. And when two targets sit close together, do the center-distance arithmetic, width plus gap, before trusting that they look far enough apart.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Actual target widths, not icon widths',
        alt: 'Two 20-pixel targets with a 2-pixel gap are compared with 32-pixel targets and an 8-pixel gap.',
        caption: `Read the center distance in each case first: 22 on the left, 40 on the right. On the left, two 12 pixel radii add to 24, more than 22, so the circles overlap. These are hypothetical aligned square targets in CSS pixels; the text describes the geometry and the illustration is not a pixel ruler.`,
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
        `Draw the Save and Remove icons, then draw a separate rectangle around each for its intended activation area and write the intended dimension on it. Drawing the disc apart from the digit is the whole habit.`,
        `Reproduce the two numerical examples as labeled sketches and work out each center distance as target width plus gap. Then compare each distance with 24 to see whether the circles would overlap.`,
        `Redesign the toolbar with more room, Remove placed away from Save, a word beside each icon, and a visible focus outline drawn on one control. Destructive and frequent actions should not be neighbors.`,
        `Rehearse pointing at each control and tabbing through them in order on paper. Label the sheet a layout review, because the real measurement in CSS pixels can only happen in the running page.`,
      ],
      notice: `Your sketch now records the hit boundaries separately from the artwork, and the spacing arithmetic is written down rather than guessed. You can see at a glance which pair would fail and why, without a single icon having changed.`,
      troubleshooting: `If your redesign made the icons bigger but the rectangles around them stayed the same, you have painted larger digits on the same plate. Redraw the actual button boundaries and start the arithmetic from those. And remember that centimeters on paper are not CSS pixels, so record intentions here and measure in the browser.`,
    },
    recall: {
      prompt: 'A tiny disclosure chevron has a wide labeled button around it. What dimensions matter for the target check?',
      answer: `The dimensions of the whole button, because that is the region that actually responds, like the lift disc around a small printed number. The chevron strokes are the icon, not the target. Once you know the real activation area, check its size against the minimum, look at its spacing from neighbors and any exceptions that apply, and then confirm how it behaves in the running interface.`,
      hint: 'Visible artwork and responsive area need not have the same bounds.',
    },
    quiz: {
      question: 'Two aligned 20-pixel square targets have a 2-pixel gap. What does the example show?',
      options: ['Their 24-pixel spacing circles overlap', 'Their center distance is 42 pixels', 'Their icon color determines the spacing exception'],
      correctIndex: 0,
      explanation: `The centers are 20 plus 2, so 22 pixels apart, and two 12 pixel radii add up to 24, which is more than 22, so the circles overlap. The distance is 22, not 42. Color is paint on the disc; it has nothing to do with where the discs sit or how big they are.`,
    },
    takeaway: 'Check the responding area and its neighbors, not the apparent size of an icon.',
    sourceNote: 'Inherited W3C Target Size guidance supplies the criterion and exceptions. The numerical toolbar is illustrative, not a conformance report.',
  },
  {
    id: 'design-034',
    title: 'Hide optional export settings, not the result',
    outcome: `Decide what to tuck away by asking what changes the decision being made now, keeping the destination, the result, and any consequence visible while secondary controls wait behind a clear label.`,
    scene: 'Exporting a copy of an original seed-packet design.',
    sections: [
      {
        title: 'A small export panel',
        paragraphs: [
          `You have drawn a seed-packet design and want to send a friend a copy as an image. The export panel that opens shows everything at once: filename, format, destination folder, a compression slider, metadata checkboxes, color profile, and three options you have never heard of. It is overwhelming. So you do the obvious thing and sweep most of it behind a button labeled Advanced. The panel is now short and calm.`,
          `Then you look at what the calm panel still tells you. Not where the file will go. Not whether the original design survives or gets overwritten. The person about to press Save has to be able to predict what this export will do before they do it. Those two facts were the prediction, and they are now behind a door. A short panel is only an improvement if it still explains the decision being made right now. Tidiness that hides the result is not tidiness.`,
        ],
      },
      {
        title: 'Disclose detail at the right moment',
        paragraphs: [
          `Think of a car dashboard. It shows you speed and fuel all the time, because you need them to drive. Tire pressures live in a menu you open now and then. That is a sensible split. But when a tire goes flat, the warning does not stay politely in the menu. A light comes on in front of you, because at that moment the pressure has become something that changes what you should do next. The dashboard hides detail by default and surfaces it when it matters.`,
          `The design name for this is progressive disclosure: keep the common task visible, make secondary detail available on request. The split is decided by the task, not by which controls look untidy. In this fictional export, the filename, the format, the destination, and the Save a copy action stay on the dashboard. The compression controls that most people never touch go behind a disclosure. Label it for what it opens, Image quality options, rather than More or Advanced, which tell you nothing about what is inside.`,
          `The door itself has requirements. A collapsed section must be reachable by keyboard, must say whether it is open or closed, and when opened must reveal its controls in a sensible order. Hidden is not the same as inaccessible.`,
        ],
      },
      {
        title: 'Surface a consequence when it matters',
        paragraphs: [
          `Now the warning light. Suppose choosing JPEG as the format means the transparent background of the design becomes solid white. That is a consequence of the choice being made on the dashboard, so it belongs beside the format control, visible before anyone exports, even while the detailed compression settings stay folded away. The same goes for an overwrite warning. If the chosen filename already exists, that fact changes the decision and must never live inside an advanced panel.`,
          `Watch how people use the panel. If ordinary users keep opening Image quality options to finish the ordinary task, the grouping is wrong, and the fix is to move that control out, not to nest another section inside the first.`,
          `Rehearse two exports: a plain copy, and a copy with the quality adjusted. In both cases the person should be able to say, from what is on screen, what file will be created, where it will be saved, and that the original is unchanged. If they cannot say all three without opening the disclosure, something essential is behind the door.`,
        ],
      },
      {
        title: 'When the door hides the price',
        paragraphs: [
          `The first mistake is hiding information that changes the current decision. A delivery form that folds the delivery charge into More options has used progressive disclosure as a hiding place. The charge affects the purchase being confirmed, so it belongs before the confirm button. Optional delivery instructions could reasonably wait behind a door, as long as the door says what is in it.`,
          `The second mistake is the vague label. More, Advanced, Options. Each one makes the person open the door just to find out whether they needed to. A label that names the contents lets them decide without opening it.`,
          `Two habits. Before folding anything away, ask whether it changes what the person will get from the action they are about to take; if it does, it stays visible. And name every disclosure for what it opens, so nobody has to lift the flap to learn what the flap is for.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'What remains outside the disclosure',
        alt: 'Filename and format appear above quality options, with export consequences and Save a copy below.',
        caption: `Look at everything except the middle box first: filename, format with its white-background consequence, the note that the original is unchanged, and the action. That is the dashboard. The middle box is the only thing folded away, and its label says what is inside. Fictional export panel contents.`,
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
        `Draw the filename, format, destination, and a Save a copy action, and write the expected result beside the action. This is the dashboard, the set of things someone needs before pressing anything.`,
        `Put the optional compression controls under a paper flap labeled Image quality options. Keep every consequence, such as the white background, outside the flap, because consequences change the decision and belong in view.`,
        `Rehearse exporting a JPEG whose transparency becomes white and check that the effect is readable before the confirming press. If you had to lift the flap to learn it, the warning light is in the menu.`,
        `Open the flap to adjust quality, number the keyboard route through the revealed controls, and recheck that the result summary still tells the whole story.`,
      ],
      notice: `The basic export is predictable without opening anything, yet the secondary settings are still easy to find and reach. The panel got shorter by hiding controls nobody needed today, not by hiding what today's action will do.`,
      troubleshooting: `If you find that you must lift the flap to discover what will be lost, converted, or overwritten, that fact is a flat-tire light stuck in a submenu. Move the consequence out beside the control that causes it, and leave only the adjustment knobs behind the flap.`,
    },
    recall: {
      prompt: 'A delivery form hides the delivery charge inside More options. Does progressive disclosure justify that choice?',
      answer: `No. The charge changes the purchase being confirmed, so it is a warning light that belongs on the dashboard, in front of the person before they commit. Progressive disclosure is for secondary detail such as optional delivery instructions, which can wait behind a door as long as the door is labeled for what it holds and is easy to open.`,
      hint: 'Ask which information changes the decision being made now.',
    },
    quiz: {
      question: 'Which detail belongs outside the optional image-quality section in this export?',
      options: ['An infrequently adjusted compression control', 'A detailed explanation of compression algorithms', 'The selected format replacing transparency with white'],
      correctIndex: 2,
      explanation: `The white background is a consequence of the format choice being made right now, so it changes the decision and must be visible before export, like a warning light rather than a menu entry. A rarely touched compression control and an explanation of algorithms are secondary detail that can wait behind a clearly labeled disclosure without hiding anything the person needs to predict the result.`,
    },
    takeaway: 'Defer secondary controls while keeping the current action and its consequences visible.',
    sourceNote: 'NN/G progressive-disclosure and heuristic references are inherited. Export behavior is explicitly fictional and must match any eventual implementation.',
  },
  {
    id: 'design-035',
    title: 'Test finding a saved drawing without naming the button',
    outcome: `Run a small usability check by giving a real-world goal instead of a route, letting the prototype respond without coaching, and reporting one attempt as one attempt.`,
    scene: 'A willing reader keeps a staircase sketch for tomorrow.',
    sections: [
      {
        title: 'The prompt can give away the answer',
        paragraphs: [
          `You have built a small gallery and want to know whether people can work out how to save a drawing for later. A friend agrees to try it. You hand them the phone and say: tap the bookmark icon, then open Saved to check it is there. They do exactly that, and it works. You write down a success. But what did you learn? You told them the route. They followed instructions. Whether anyone could have discovered that bookmark on their own is exactly the question you did not ask.`,
          `The prompt did the work the interface was supposed to do. Try again with a goal instead: keep this staircase sketch so you can come back to it tomorrow. Now your friend has to find the controls, and whatever they do tells you something. Before they start, say plainly that the interface is being tested, not them, and that stopping is fine at any point. Use your own fictional sketches so nothing real is at stake.`,
        ],
      },
      {
        title: 'Let the prototype answer',
        paragraphs: [
          `Think of a driving examiner. They say take the next exit towards the town centre. They do not say indicate now, check your mirror, change down a gear. If they did, they would be driving the car with their voice, and at the end of the test they would know how well they drive, not how well you do. The examiner gives destinations and watches. That is the only way to see whether the learner can actually drive.`,
          `Be the examiner. Before the attempt, prepare the states the prototype can show: the gallery, the study detail with its controls, and the saved-items list. When your friend chooses an action, show the state that action would lead to, and nothing more. Do not point at the next control. Do not improvise a clearer label halfway through because you can see them struggling. The moment you do, they are testing the new label and your tone of voice, not the thing you built.`,
          `Write down the action they took and the state you showed. Treat a pause as an observation, not as proof of confusion. They might be reading the title, or wondering whether saving will put the drawing in a public collection. You do not know yet. After the attempt is over, ask what they expected to happen at that point. That is when the pause gets explained.`,
        ],
      },
      {
        title: 'Use a small finding honestly',
        paragraphs: [
          `Suppose your friend opens the drawing, sees the little save icon, and reads it as a count of how many people liked it. That is a real finding. It suggests testing a clearer label such as Keep for later. It does not tell you how many of your gallery's users would make the same mistake. One person, one attempt, one candidate problem. Report it that way.`,
          `Keep a keyboard route in your prepared states, and if your friend normally uses a keyboard or other input method, let them use it. Never ask someone to pretend to have a disability they do not have; that produces a performance, not evidence. If you are testing alone, walking through your own prototype is useful, but call it what it is: your prediction, not user research.`,
          `One more honesty. If you fix the label and ask the same friend to try again, they now know where the control lives. Any improvement mixes the new label with their memory of the first attempt, so you cannot credit the label alone.`,
        ],
      },
      {
        title: 'Ways a test stops being a test',
        paragraphs: [
          `The first failure is the one from the opening: a prompt that names the control. Use the bookmark to keep this sketch is the examiner saying indicate now. Success afterwards is weak evidence of anything. The second is coaching in the moment, a nod towards the right corner, a helpful hint. It feels kind and it ruins the result.`,
          `The third is overclaiming. A single attempt that goes badly becomes users cannot find the save button in the write-up. It should become one participant mistook the save icon for a count; worth testing a label.`,
          `Two habits. Write every prompt as the real-world question the person would be asking themselves, and check it contains no control names before you say it aloud. And in your notes, keep three columns apart: what they did, what you showed, and what you think it means.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'States prepared before the attempt',
        alt: 'Gallery opens a staircase study, keeping it confirms the action, and Saved items allows a later return.',
        caption: `Read these four states as the examiner's map, prepared before the drive, not as directions to read aloud. Each one is what you show in response to an action the participant chooses, and only then.`,
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
        `Draw the four states shown above with their controls, and decide in advance what each activation will display. Preparing the map first is what lets you respond without inventing anything mid-test.`,
        `Ask permission, explain that the interface is being tested and not the person, and give only the goal: keep this sketch so you can return to it tomorrow. No control names, because the names are the thing under test.`,
        `Show states only in response to the actions they choose, then record their first action. After the attempt, ask what result they expected at the moment they chose it.`,
        `Revise one label that caused confusion. If the same person tries again, mark the attempt as influenced by their first go; if you tested alone, label your walkthrough a prediction rather than research.`,
      ],
      notice: `Your notes now hold actions and expectations, not a coached success and not a verdict on the participant. You can point to the exact moment the icon was misread and say what you will test next, and no more than that.`,
      troubleshooting: `If you catch a control name in your prompt, such as bookmark, Saved, or Keep for later, rewrite the sentence as the outcome the person wants before you try again. The examiner names the destination, never the pedals. If you already said it aloud, write that attempt off and start fresh with a new sketch.`,
    },
    recall: {
      prompt: 'You want to test finding a restaurant\'s opening hours. What prompt avoids revealing the navigation route?',
      answer: `Ask the real-world question: could you eat here at seven on Tuesday? That names the destination, not the pedals, so the person has to find the hours themselves without being told to look under Hours or Contact. Watch the route they take, and afterwards ask which piece of information let them answer.`,
      hint: 'State the real-world question, not the label you hope they select.',
    },
    quiz: {
      question: 'Which prompt tests discovering how to keep the staircase sketch?',
      options: ['Keep this sketch so you can return tomorrow', 'Use the bookmark to keep this sketch', 'Open Saved after pressing Keep for later'],
      correctIndex: 0,
      explanation: `The first prompt gives a destination and leaves the route undiscovered, so whatever the person does tells you about the interface. The other two name the controls, which is the examiner saying indicate now: following them successfully shows the person can follow instructions, not that the bookmark or Keep for later could be found without help.`,
    },
    takeaway: 'Prepare the states, give the goal, and distinguish observed behavior from your interpretation.',
    sourceNote: 'Inherited NN/G references guide the questions. One consenting attempt can reveal a candidate issue, not its prevalence or a causal effect.',
  },
  {
    id: 'design-036',
    title: 'Make a critique predict a visible task improvement',
    outcome: `Turn a vague layout complaint into three separate sentences, a visible observation, a task consequence, and one revision to test, while keeping taste and the maker's character out of it.`,
    scene: 'Reviewing a print-order pickup panel with a buried collection time.',
    sections: [
      {
        title: 'What does too busy mean here?',
        paragraphs: [
          `A friend is selling a few prints and shows you the pickup panel from their little order page. At the top is a decorative quotation about art. Below it, a big Continue button. Below that, in faint small text, the collection time: Saturday between ten and twelve. They ask what you think. The honest first reaction is that it feels busy. You could say that. Your friend would then have five unrelated things to consider changing and no idea which one you meant.`,
          `Look again and say what you see. The button comes before the one piece of information a buyer needs in order to decide whether to press it. Someone who cannot make Saturday morning could press Continue without ever noticing the time. That is a specific observation about a specific relationship on the page. It has nothing to do with your friend's taste, their skill, or whether the quotation is any good. The task is deciding whether the pickup works. The critique should be about that task.`,
        ],
      },
      {
        title: 'Separate observation from inference',
        paragraphs: [
          `Think of a cake that went wrong. One review says it did not work. Another says: the middle sank at about twenty-five minutes, right after I opened the oven door to check it. The second reviewer has given three things in order. What they saw: the middle sank. What it did to the result: a raw center. And a change worth trying next time: leave the door shut until the timer goes. Nobody has to guess which of a dozen things to alter, and the suggestion is phrased as something to test, not a law of baking.`,
          `Write your critique in the same three sentences. Collection time follows Continue is the observation; anyone can look at the panel and confirm it. Someone could continue without seeing the time is the consequence, and it is a hypothesis about what people will do, not yet a fact. Move the time above Continue is a proposed revision. Keeping the three apart matters, because evidence might later change the middle one without touching the first.`,
          `You are allowed a preference. You may think the quotation is too much. Say so, in a separate sentence, labeled as your taste. Do not dress it up as a rule that every visitor dislikes quotations, because you have not observed any visitors. Different artistic aims can produce different surfaces, and a critique that cannot tell its preferences from its findings is not much use to the person receiving it.`,
        ],
      },
      {
        title: 'Change one relationship and compare',
        paragraphs: [
          `Make a second version of the panel that groups the pickup date and time above the action and leaves every other word alone. Same quotation, same button label, same colors. Only the one relationship has changed. Now the comparison can tell you something about that relationship and nothing else.`,
          `Give a willing reader a fictional schedule and ask whether the offered collection time suits them, without pointing at the time. Watch whether they find it. Then ask what they think Continue will do: confirm a purchase, or open a review step. If the revision makes the time easy to find but leaves people believing Continue buys the prints when it only reviews them, there is still work to do, and now you know exactly where.`,
          `Check the order in other senses too. Moving text up on the screen does not automatically move it earlier for someone using a screen reader or a keyboard. Reading order and focus order need their own look. And when you report back, compare the two design decisions. Your friend's character was never on the table.`,
        ],
      },
      {
        title: 'Critiques that cannot be tested',
        paragraphs: [
          `The first failure is advice without an observation. Use fewer colors because simpler always works does not point at anything on the panel, and simpler always works is not true. The second is reaching for a favorite fix before looking at the task: choose another typeface, say, when nobody has yet checked whether buyers can find the time. Typeface and color may matter, but each needs its own observed reason.`,
          `The third failure is the vague upgrade. Make it better, or make it cleaner, cannot be tested, because there is no way to tell afterwards whether it happened. Ask instead which piece of information should become easier to find, for which task.`,
          `Two habits. When something looks wrong, write the observation as a fact anyone could check on the page, before you write what it might cause. And phrase every suggestion as a change plus a result you could watch for, so the next attempt can confirm or overturn it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Where the pickup time enters the decision',
        alt: 'One pickup panel puts time after Continue; the revised panel puts date and time before the action.',
        caption: `Read the order of items in the current panel first and notice the action comes before the time. In the proposed version only that one relationship has moved, like changing a single step in a recipe. Fictional interface excerpts; the revision is a hypothesis to check, not a proven universal layout.`,
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
        `Sketch the pickup panel as described, then write one observation that uses only facts visible on the page and says nothing about the maker. This is the middle sank, not the baker is careless.`,
        `Write the task consequence as a hypothesis, something a person might do because of the layout, and put any taste preference about the quotation in a separate sentence labeled as taste.`,
        `Draw a second version with the date and time moved above the action and everything else unchanged. One change is what makes the comparison mean something.`,
        `Ask a reader whether the pickup suits a fictional schedule, record whether they find the time and what they expect Continue to do, and note one thing you are still unsure about.`,
      ],
      notice: `Your critique now names a design relationship and predicts a result that another attempt could confirm or challenge. Your friend knows exactly what to try, and you have given them a way to find out whether it worked.`,
      troubleshooting: `If your suggestion still reads as make it better, make it cleaner, or less busy, it cannot be tested, because nobody could tell afterwards whether it happened. Rewrite it as which information should be easier to locate, for which task, and how you would check. The sunken cake reviewer never wrote bake it better.`,
    },
    recall: {
      prompt: 'A map review says the interface is ugly, but the real problem is locating a route closure. How would you reframe it?',
      answer: `Three sentences. Observation: the closure status appears only in a faint legend in the corner. Consequence: a walker could choose the closed route without noticing. Revision to test: show the closure in words beside the route and check whether readers spot it. Keep the ugly judgment in its own labeled sentence as a preference, like the baker's opinion of the icing.`,
      hint: 'Use a visible feature, a task, and a predicted result.',
    },
    quiz: {
      question: 'Which critique best supports a specific next test?',
      options: ['Use fewer colors because simpler always works', 'Place pickup time before Continue and retest finding it', 'Choose another typeface before examining the task'],
      correctIndex: 1,
      explanation: `Moving the time above Continue names an observed relationship on the page, a task that depends on it, and a result you can watch for, so the next attempt can confirm or overturn it. Fewer colors rests on a rule that is not true and points at nothing specific. A new typeface is a favorite fix chosen before anyone has looked at whether buyers find the time.`,
    },
    takeaway: 'Critique a visible decision against a task, then test the proposed relationship.',
    sourceNote: 'NN/G visual-design and heuristic references are inherited. This fictional critique supplies a hypothesis, not measured evidence of improvement.',
  },
  {
    id: 'design-037',
    title: 'Give a leaf or figure a direction before its outline',
    outcome: `Start a drawing with the path of direction and the large masses it organizes, so the result records how this particular subject leans and bends instead of repeating a generic symbol.`,
    scene: 'A drooping leaf becomes a study of bend, support, and weight.',
    sections: [
      {
        title: 'The leaf does not point straight up',
        paragraphs: [
          `There is a leaf on the plant by your window. Its stem rises, then near the top the blade bends over and hangs down to the right, heavy with its own weight. You sit down to draw it. Your hand, helpfully, produces the leaf everyone draws: a neat upright almond with a stem at the bottom. You add veins, carefully, from the real leaf. You add the serrated edge. It is a good drawing of a leaf. It is not a drawing of this leaf, which is doing something your almond never does.`,
          `The veins did not go wrong. The direction did, before a single vein was drawn. A leaf symbol from memory stands up straight, and once that shape is on the page, no amount of accurate detail can make it droop. So begin somewhere else. Trace the path from where the leaf attaches, up through the bend, and down to the tip. Then wrap a simple blade mass around that path. This first drawing is not a small finished leaf. It is a proposal about how this form leans and where its weight gathers.`,
        ],
      },
      {
        title: 'Direction organizes the parts',
        paragraphs: [
          `Think about giving someone directions to your house. You do not start with the color of the front doors along the way. You say: along the main road, left at the pub, over the bridge, then it bends right past the school. The big turns come first, because they are what gets a person there. If you put the bridge before the pub, every shopfront you describe afterwards is on the wrong street. Drawing works the same way. The turns are the gesture. The veins and serrations are the shopfronts.`,
          `Gesture means the directional relationships that hold a subject together. In the leaf, the rising stem and the falling blade are one connected movement with a turn in it. Draw them as two separate outlines and the turn disappears. Look for the long stretched curve on the outside of the bend and the short compressed one on the inside. Keep the attachment point visible, because it is the anchor the whole movement hangs from.`,
          `A clothed figure wants the same first pass. Before any buttons or folds, relate the head, the ribcage, the pelvis, and the foot that carries the weight. Where does the body lean, and what is holding it up? Two cautions. Not every subject has one perfect line through it, and a gesture drawing is not a physics diagram of forces. It is your best first guess about direction, made deliberately, so you can check it.`,
        ],
      },
      {
        title: 'Construct a variation and check it',
        paragraphs: [
          `Look at the two schematics. The first keeps rising from attachment through the middle to a tip that still points up. That is the symbol. The second rises to a high bend, then turns and falls to the right. Same three parts, different direction. Hold the real leaf against both and ask which one it is doing. The answer is obvious once the question is asked, and the question was invisible while you were drawing veins.`,
          `Now invent. Draw a third version with a stronger lean than the real leaf has, but keep the attachment believable and the blade connected through the bend. Then go back to the actual leaf and name which relationships you changed on purpose. This is how you learn what the gesture controls: by moving it and watching what follows.`,
          `Short studies make these comparisons cheap, but speed is not the point and messy lines are not a virtue. Work at a comfortable pace and stop if your hand or eyes complain. The reference leaf is there so your directional guess has something specific to answer to. It is not asking you to copy every edge.`,
        ],
      },
      {
        title: 'When detail arrives too early',
        paragraphs: [
          `The most common mistake is the one from the opening: fixing a stiff drawing by adding more accurate detail. A figure with perfect buttons that still looks like a mannequin needs its large masses related, its lean found, and its supporting foot placed. The buttons were never the problem, and more buttons will not help. The second mistake is darkening the outline to make the drawing feel more certain. A confident outline around a wrong direction is a confidently wrong drawing.`,
          `A quieter mistake is drawing the gesture and then ignoring it, building the familiar symbol on top anyway. The gesture line is only useful if the masses actually follow it.`,
          `Two habits. Before any detail, draw the path from support to tip with its turns, and say aloud which way the subject leans. And when a drawing looks stiff, move a checkpoint along that path rather than adding anything inside the shape.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Upright symbol',
        alt: 'Attachment, middle, and tip continue upward without a drooping bend.',
        caption: `Follow the arrows from attachment to tip and notice they never change direction. This is the leaf drawn from memory, the route with no turns. A simplified comparison drawing; the arrows trace the proposed gesture, not physical forces.`,
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
        caption: `Now find the bend first, then see how the second arrow falls away from it. Same three parts as above, one turn added. Construct the blade around that falling final segment rather than around an upright almond.`,
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
        `Choose one leaf you can see and mark three small checkpoints on your paper: where it attaches, its highest bend, and its tip. These are the big turns in the directions, placed before any shopfronts.`,
        `Join the checkpoints with one directional path, then wrap the blade around it as a simple mass with no veins. The mass has to follow the path, or the path was wasted.`,
        `Draw a second version with a deliberately different lean, and write beside each study which relationships you observed and which you invented. Moving the gesture on purpose teaches you what it controls.`,
        `Hold both against the real leaf and correct one bend, keeping your first marks visible so you can see what changed and why.`,
      ],
      notice: `Your two studies differ in lean and bend before any texture or polished outline appears, and you can point to the checkpoint that makes the difference. Neither one is the almond from memory, because the direction was decided before the shape was.`,
      troubleshooting: `If both studies still look like the same leaf symbol, the symbol is overriding the path. Move the tip checkpoint clearly away from where it sits now and redraw how it connects to the bend. If the masses do not follow the new path, redraw them until they do; the gesture line is only a decision once the blade obeys it.`,
    },
    recall: {
      prompt: 'A clothed figure sketch looks stiff despite accurate buttons. What could a gesture pass investigate?',
      answer: `How the head, ribcage, and pelvis relate to each other, which way the whole figure leans, and which foot is carrying the weight. Those are the big turns in the directions, and the buttons are the shopfronts. Adjust the lean and the support before copying any clothing detail, and use a permitted reference to check that the masses really do what you have drawn.`,
      hint: 'Ask where the figure is supported and how the larger masses turn.',
    },
    quiz: {
      question: 'A leaf study misses the droop. Which first revision targets gesture?',
      options: ['Darken the outer contour', 'Add vein directions inside the existing shape', 'Reposition the tip relative to the bend and attachment'],
      correctIndex: 2,
      explanation: `Moving the tip changes the path from attachment through bend to tip, which is the direction the drawing got wrong, like correcting the turn at the bridge. Darkening the contour makes a wrong direction look more certain, and veins inside the existing shape are shopfronts on the wrong street; they can support the gesture later but cannot relocate the blade.`,
    },
    takeaway: 'Find connected direction and support, then build forms around that first explanation.',
    sourceNote: 'Getty and Tate references support drawing vocabulary. These original gesture drills are selective constructions, not anatomical or force measurements.',
  },
  {
    id: 'design-038',
    title: 'Build a kettle from connected volumes you can turn',
    outcome: `Build an object from simple volumes joined at real attachments, predict how it will look when turned, then rotate the actual object and let what you see correct the model.`,
    scene: 'An empty, cold kettle is rotated beside a sketchbook.',
    sections: [
      {
        title: 'More than a circle with a spout',
        paragraphs: [
          `Take an empty, cold kettle, unplugged and away from its base, and set it on the table. Look at it for a moment before drawing. The body is a rounded thing with real thickness. The lid sits on top of it. The spout comes out of one side and points up and away. The handle arcs over or beside it. These four parts occupy different directions in space. Now draw it quickly from memory and watch what your hand does: a circle, a triangle for the spout, a loop for the handle, all on one flat plane like a child's sticker.`,
          `The sticker kettle is not wrong because it is simple. It is wrong because nothing in it connects. The spout is beside the body, not coming out of it. Turn the real kettle a quarter turn and the sticker has no idea what to do. So start differently. Imagine the body as a rounded volume and draw a centerline straight through it, top to bottom. Now the lid and the base share one orientation before you commit to any visible edge, and the spout has something to attach to.`,
        ],
      },
      {
        title: 'Use scaffolding, not a substitute object',
        paragraphs: [
          `Think of building a snowman. You roll three balls and stack them, and the stick arms go into the middle ball, not beside it. You can walk all the way round a snowman and the arms stay attached, because they were pushed into a volume. Compare a snowman painted on a window: two circles with sticks drawn alongside. It only works from the front. Step to the side and it is paint on glass. The rolled snowman has construction. The painted one has an outline.`,
          `Construction means explaining a complicated subject with simpler volumes: boxes, rounded masses, cylinders, stacked and joined. One helpful tool is the cross-contour, a line you imagine running across a surface to show which way it turns. On the kettle, a curved line around the belly tells you where the body faces, the way a scarf wrapped round the snowman's neck tells you which way he is looking. Mark where the handle meets the body, and lightly draw the attachment you cannot see on the far side, because it is still there.`,
          `The scaffold must serve the kettle in front of you, not the kettle in your head. If the real body tapers toward the base or flattens on top, change the volume. A perfect sphere that refuses to adjust is a second sticker.`,
        ],
      },
      {
        title: 'Predict, rotate, and compare',
        paragraphs: [
          `Here is the test that makes construction worth doing. Before you move the kettle, predict what you would see if you turned it so the spout pointed toward you. Sketch that view lightly beside the first: the spout opening would face your eye, its length would look shorter, and the far handle attachment would disappear behind the body. Write the guess down in pencil before you look.`,
          `Now rotate the real kettle, keeping your own eye and seat exactly where they were, and compare. The spout really does look shorter when it points at you, although it has not changed length by a millimeter. That is foreshortening, and your prediction either caught it or did not. Check the lid opening and the handle attachments the same way.`,
          `Whatever was wrong, correct the direction or the attachment first. Do not reach for a shiny metal highlight to rescue a spout that is pointing the wrong way. The loop of predict, rotate, compare, correct is what builds a model you can use next time, while letting the real object keep you honest. Neither copying blindly nor inventing freely has to carry the whole job.`,
        ],
      },
      {
        title: 'When the parts float',
        paragraphs: [
          `The first mistake is the pasted-on part. The spout sits beside the body with no attachment drawn, like a stick painted next to a snowman. The fix is to find where it joins and draw its center direction into the body, through the surface, even though that line will later be hidden. The second mistake is refusing to let the scaffold change. The real kettle narrows near the base and your sphere does not, and instead of fixing the volume you darken its outline or polish its reflections. Highlights cannot repair a width relationship.`,
          `A third mistake is moving yourself instead of the object. Lean to the left to see round the handle and you have changed the view of everything at once, so your comparison no longer means anything.`,
          `Two habits. Draw through the object, putting a centerline and the hidden attachments on the page before any contour you can see. And before you turn anything, predict the new view in pencil, so the real object can tell you exactly where your model was wrong.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Connected kettle masses',
        alt: 'A rounded body sits below its lid, between a loop handle and an upward-reaching spout.',
        caption: `Find the body first and follow the Axis arrow up to the lid, which shares its orientation. Then follow the Attachment arrow to the spout and notice it comes out of the body rather than sitting beside it. Schematic volumes and attachments, not exact contours or ellipse proportions.`,
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
        caption: `Compare the spout here with the one in the first scaffold: its opening now faces you and its projected length has shrunk, though the real spout is unchanged. The far handle attachment has slipped behind the body. A schematic comparison of the same volumes after a turn.`,
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
        caption: `Look at the eye position first and notice it does not move between studies; only the kettle turns. This top-view setup is what makes the before and after comparable. Rotate the object, never the observer and object together.`,
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
        `From one fixed seat, lightly draw the main body, a centerline through it, the plane the lid sits on, and the direction the spout points. You are rolling the snowman's balls before adding anything to them.`,
        `Mark where the handle attaches, including the far attachment you cannot see, and draw one curved cross-contour around the belly. Then adjust the body to the actual taper, because the scaffold serves the kettle, not the other way round.`,
        `On the same page, predict the turned view with the spout toward you, then rotate the kettle safely and compare the overlaps. Writing the guess down first is what turns looking into a test.`,
        `Correct one direction or one attachment in your prediction, leaving texture, shine, and decoration out entirely. The point is the structure, and surface detail would only hide whether it is right.`,
      ],
      notice: `Your second study explains the changed overlaps with the same connected volumes as the first, and you can point to the one correction that observation forced. The spout shortened and the handle slipped behind the body because the kettle turned, not because you drew a different kettle.`,
      troubleshooting: `If the spout looks pasted on, it has no attachment, like a stick painted beside a snowman. Find the point where it meets the body and draw its center direction straight into the volume, through the surface, before you redraw its outline. The hidden part of that line is what makes the visible part believable.`,
    },
    recall: {
      prompt: 'You invent a desk lamp whose shade floats beside its stem. Which construction relationship needs checking?',
      answer: `The attachment. Find where the shade joins the stem, draw the stem's direction into that joint, and build the shade's volume around it, so the parts connect the way stick arms go into a snowman rather than lying beside it. Until the joint exists on the page, no amount of shading on the shade can make it belong to the lamp.`,
      hint: 'Draw through hidden joins lightly before deciding the final contour.',
    },
    quiz: {
      question: 'The real kettle narrows near its base, unlike your spherical scaffold. What should you change first?',
      options: ['The reflective highlights', 'The body volume and taper', 'The line darkness around the existing sphere'],
      correctIndex: 1,
      explanation: `The scaffold exists to explain the kettle in front of you, so when the kettle tapers the volume has to taper too. Highlights are paint on the surface of whatever shape is there, and a darker line around the sphere only makes the wrong width more definite. Change the snowball before you decorate it.`,
    },
    takeaway: 'Construct connected volumes, predict their turn, and let observation revise the model.',
    sourceNote: 'Getty and Tate sources supply form vocabulary. The kettle construction is original and deliberately simplified, not a product blueprint.',
  },
  {
    id: 'design-039',
    title: 'Use the gap between utensils to check their angles',
    outcome: `Treat the empty shape between two objects as a measurable form with its own edges, and use it to find which bordering angle is wrong when the objects look right but sit wrong.`,
    scene: 'A wooden spoon and spatula cross on plain paper.',
    sections: [
      {
        title: 'The empty wedge is measurable',
        paragraphs: [
          `Lay a wooden spoon and a spatula on a sheet of plain paper so their handles cross near the bottom. Above the crossing, the two handles lean apart and leave a wedge of empty paper between them. Now draw the pair. Your spoon looks like a spoon. Your spatula looks like a spatula. Anyone could name them. And yet, held next to the real arrangement, the drawing is off. The two utensils are leaning toward each other more than they should, and you cannot see where the error is.`,
          `Look at the wedge instead of the utensils. It has a width across the top. Its two sides have slopes. Its point is at the crossing. In your drawing that wedge is noticeably thinner than the one on the table. Two recognizable utensils have squeezed the gap between them, and recognizability did not catch it. Being able to name the objects is a weak check on where they sit. The empty space between them is a stronger one, because it has edges you can compare.`,
        ],
      },
      {
        title: 'An absence shares real boundaries',
        paragraphs: [
          `Think of a jigsaw with one piece missing. The hole tells you the shape of the piece exactly, because every edge of the hole is also an edge of the pieces around it. If the hole looks wrong, you do not need to inspect each surrounding piece in turn. The hole is already telling you that one of them is out of place, and its distorted side points at which one.`,
          `Artists call the hole negative space: the space around and between the forms you are paying attention to. Its boundaries are not separate from the objects. The left side of the wedge is the spoon's inner edge. The right side is the spatula's. So if the drawn gap is too narrow while the crossing is in the right place, at least one of those bordering edges or angles differs from what is on the table. Checking the gap is a second route to the same geometry, and it does not pass through your memory of what a spoon looks like.`,
          `This is not an instruction to draw only the background. Alternate. Look at the objects, then at the spaces they leave, then back, letting each one check the other.`,
        ],
      },
      {
        title: 'Locate the correction',
        paragraphs: [
          `Keep your viewpoint fixed. Before drawing any utensil detail, mark three checkpoints on the page: the top of the gap on the spoon side, the top of the gap on the spatula side, and the crossing point below. Lightly join them. You have drawn the hole first. Now compare it with the wedge on the table. Suppose the drawn version is narrower at the same height. Which side is wrong?`,
          `Look at the slopes. If the right-hand boundary stands too upright, that is the spatula's inner edge leaning in. Rotate that one boundary outward, then rebuild the spatula around the corrected edge. Do not widen both utensils a little and hope. One edge was wrong, and the hole told you which.`,
          `Then turn it around. Invent a different crossing angle on paper and predict the gap it would make. Rearrange the real utensils to match and check whether your predicted wedge appears. Now the empty space is part of how you construct the drawing, not a silhouette you fill in after everything else is done.`,
        ],
      },
      {
        title: 'Checks that never reach the geometry',
        paragraphs: [
          `The first mistake is fixing a wrong arrangement by making the objects more convincing. Darker outlines on both utensils, careful wood grain on each handle. The utensils become more obviously utensils and the wedge stays squeezed. Darkness and texture do not touch the gap. The second mistake is correcting everything at once, nudging both edges, both handles, the crossing, until the drawing changes but you cannot say which move helped.`,
          `A third is moving your head. Lean to one side to get a better look and the wedge on the table changes shape along with everything else. If every comparison seems to disagree with the last, return to the same eye position before you move a single drawn line.`,
          `Two habits. When two objects meet, draw the space between them as a shape with its own corners and width before you draw either object. And when that shape is wrong, name the one bordering edge whose slope is off, and correct that edge alone.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Wide observed gap',
        alt: 'Two inner utensil edges converge at a low crossing, leaving a broad opening above.',
        caption: `Look at the Opening arrow across the top first; that width is the measurement. Then follow each side down to the crossing and notice those sides are the utensils' inner edges. A top-view checkpoint drawing; the upper connector measures the hole, it is not a third utensil.`,
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
        caption: `Compare the Narrower arrow with the Opening arrow above at the same height. The crossing has not moved, so the difference must be in the slopes of the two sides; compare those slopes with the first study before redrawing any handle.`,
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
        `Cross the two handles on a sheet of paper and settle into one viewing position you can return to. Do not trace around them; tracing would hand you the answer without teaching you to see the hole.`,
        `On a separate area of the page, mark the two tops of the gap and the crossing, then join them lightly. You are drawing the missing jigsaw piece before any of the pieces around it.`,
        `Build the utensil masses around the gap, comparing each inner edge with the real one before you add any outer contour. The inner edges are the sides of the hole, so they get checked first.`,
        `In a second study, invent a wider crossing and predict the wedge it would make, then rearrange the real utensils to match and see whether your predicted gap appears.`,
      ],
      notice: `Your correction names a particular bordering edge or angle, such as the spatula's inner edge standing too upright, instead of a vague wish to make the objects more accurate. The hole told you which piece was out of place, and you moved only that piece.`,
      troubleshooting: `If every comparison seems to contradict the one before, your head has probably moved between looks and the wedge on the table is changing shape with you. Go back to the same seat and eye height, look again, and only then move a drawn boundary.`,
    },
    recall: {
      prompt: 'An invented figure has a hand on its hip, but the pose looks cramped. What negative space could you inspect?',
      answer: `The triangle of empty space enclosed by the torso, the upper arm, and the forearm. Treat it as a jigsaw hole with its own corners and width: if it is too thin or its corners sit wrong, one of its bordering edges is misplaced, most likely the elbow position or the angle of the upper arm. Correct that one edge and rebuild the arm around it.`,
      hint: 'Treat the opening as a shape with its own corners and width.',
    },
    quiz: {
      question: 'The crossing is correct but the drawn gap is too narrow. Which check is most useful first?',
      options: ['Compare the slopes of its bordering edges', 'Darken both utensil outlines equally', 'Add wood grain to distinguish the utensils'],
      correctIndex: 0,
      explanation: `With the crossing fixed, the width of the gap at any height is set entirely by the slopes of its two sides, so comparing those slopes finds the misplaced piece. Darker outlines and wood grain make the utensils more convincing as utensils while leaving the hole exactly the wrong shape it already is.`,
    },
    takeaway: 'Construct the objects and the spaces between them as two checks on one arrangement.',
    sourceNote: 'Getty describes positive and negative space. The utensil comparison is an original checking method, not a prescribed drawing style.',
  },
  {
    id: 'design-040',
    title: 'Fit the shoe inside a checked envelope',
    outcome: `Fix the overall extent and the dominant angles of a subject with a light straight-line envelope before any detail, so curves and inventions have a checked shape to live inside.`,
    scene: 'A side-view shoe study keeps its first straight-line boundary visible.',
    sections: [
      {
        title: 'The laces cannot fix the lean',
        paragraphs: [
          `A shoe lies on its side on the floor. You start drawing where your eye is drawn: the laces, the eyelets, the little logo on the heel. Ten minutes in, you have a recognizable sneaker. Then you hold it up against the real shoe and something is badly off. The toe on the floor reaches much further forward than the one you drew. The opening rises higher above the heel. Your sneaker is a good sneaker trapped inside the wrong overall shape, and the laces, however neat, cannot pull it into the right one.`,
          `The mistake was the order. Detail arrived before anyone had decided how much room the shoe takes up and which way it tilts. So before any lace, find the extremes: the highest point, the furthest toe, the lowest point of the sole, the back of the heel. Mark each one. Connect them with a few light straight segments. That temporary boundary is called an envelope. It records how much space the whole object occupies and how it leans, and nothing else.`,
        ],
      },
      {
        title: 'Compare angles against something stable',
        paragraphs: [
          `Think about packing something awkward for the post. You do not start by wrapping the handle in tissue paper. You find a box it fits in, and you notice how it sits in the box: diagonally, one end higher. Box first, then padding. If the box is wrong, every careful fold of tissue is wasted, because the thing will not fit. The envelope is the box. The laces are the tissue paper.`,
          `The envelope earns its keep when you judge angles. A small curve on its own is nearly impossible to assess, because it has nothing to be compared with. Inside an envelope, that curve has a neighborhood. Compare the long upper slope of the shoe with something you know is horizontal, like the edge of your paper. Compare the whole height with the whole width. Keep your head still between checks, so the shoe does not change shape while you are measuring it.`,
          `You can compare slopes by eye without holding a pencil at arm's length or near your face. The envelope is a working estimate, drawn to be corrected. It is not a demand for a ruler and exact numbers.`,
        ],
      },
      {
        title: 'Refine without burying the decision',
        paragraphs: [
          `Suppose your first envelope puts the toe checkpoint too high, so the whole front of the shoe tilts up. Move that one checkpoint before you shape any toe curve. Leave the old segment faintly visible beside the new one. The correction now has a visible reason on the page, and you can see exactly how far the toe moved.`,
          `Then work inward. Add the thickness of the sole and the volume of the upper as large forms inside the corrected extent. The curves have a box to live in, so each one can be judged against the envelope rather than against nothing.`,
          `The same scaffold supports invention. Want to design a boot? Keep the foot volume from the shoe and deliberately raise the ankle section, then watch what that does to the silhouette and where the weight seems to sit. You are using an observed structure to carry a new design. You are not trying to erase every construction line to make the drawing look effortless. And if the overall lean is still in doubt, stop before any surface texture, because texture on an uncertain shape only hides the uncertainty.`,
        ],
      },
      {
        title: 'When the box is wrong',
        paragraphs: [
          `The first mistake is the one from the opening: rescuing a wrongly tilted shoe with more detail. Deeper sole shading, smaller lace holes. The box is still wrong, and the tissue paper is getting thicker. If the toe slopes up too much, move the toe checkpoint and recheck the upper slope before you draw a single lace.`,
          `The second mistake is the dark hedge. You redraw the contour, then redraw it again, and again, until the outline is a thick fuzzy band and no single line has been chosen. That is many small guesses with no decision. Go back to a handful of checkpoints, pick one relationship that is wrong, and correct that one.`,
          `Two habits. Before any detail, mark the outer extremes and join them, then compare the longest slope against the edge of your paper. And when something looks off, move a checkpoint and keep the old one visible, so every correction has a reason you can see.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Five checkpoints around the shoe',
        alt: 'Heel top, opening, toe, sole, and heel base connect to form a simplified enclosing polygon.',
        caption: `Find the highest and the furthest-forward checkpoints first, Opening and Toe, because those two set the tilt of the whole box. Then follow the arrows round the polygon. An original envelope, not a shoe outline to trace; check its slopes against your own view.`,
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
        caption: `Notice the eye stays in one place and the paper's horizontal edge sits in view; that edge is your stable reference for every slope comparison. A setup map, not a physical ruler laid on the shoe.`,
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
        `Place the shoe on its side and sit where you can stay comfortably. Mark five or six outer extremes on your paper: highest, lowest, furthest forward, furthest back. You are choosing the box before any wrapping.`,
        `Join the marks lightly and compare the longest slope with the edge of your paper, and the overall height with the width, before you draw a single lace. These two comparisons catch most tilt errors.`,
        `Correct one checkpoint and keep the first attempt faintly visible beside it, so the correction has a reason on the page. Then build the sole and the upper as large volumes inside the corrected envelope.`,
        `Beside it, sketch an invented taller version using the same foot volume, and write down the one structural change you made on purpose, such as a raised ankle.`,
      ],
      notice: `The corrected outer extent now carries the curves, so each curve can be judged against the box it lives in. Your invented version has one named structural change rather than a vague difference, and you can see on the page why the toe moved.`,
      troubleshooting: `If your outline has become a dark fuzzy hedge of repeated contours, you have made many small guesses and no decision. Put the pencil down, go back to five checkpoints, pick the one relationship that is most clearly wrong, and correct only that. One moved checkpoint beats twenty redrawn edges.`,
    },
    recall: {
      prompt: 'A folded jacket drawing has accurate seams but feels too narrow. What would an envelope check compare?',
      answer: `The widest points of the folded jacket, its overall height against its width, and the major slopes of the big folds, all before touching a seam. The seams are tissue paper; if the jacket feels too narrow, the box is the wrong shape, and the error lives in the large folded masses rather than in any detail stitched onto them.`,
      hint: 'Locate the outer extremes before examining interior marks.',
    },
    quiz: {
      question: 'The shoe\'s toe slopes upward too much. Which revision should precede lace detail?',
      options: ['Increase sole shading', 'Move the toe checkpoint and recheck the upper slope', 'Draw smaller lace holes'],
      correctIndex: 1,
      explanation: `The toe checkpoint sets the tilt of the whole front of the shoe, so moving it and rechecking the upper slope against the paper edge fixes the box the laces will later live in. Sole shading and smaller lace holes are thicker tissue paper around an object that still does not fit; neither changes the angle that is wrong.`,
    },
    takeaway: 'Check extent and tilt with a light envelope, then construct and refine inside it.',
    sourceNote: 'Getty and Tate drawing references are inherited. The envelope is a practical scaffold, not a universal proportion formula.',
  },
  {
    id: 'design-041',
    title: 'Make box edges agree about the viewing direction',
    outcome: `Group the edges of a box by their direction in space, send each group toward its own vanishing point on one eye level, and keep that same horizon when you invent a second object beside it.`,
    scene: 'An unbranded packaging box is studied straight on and toward a corner.',
    sections: [
      {
        title: 'One box, incompatible edges',
        paragraphs: [
          `You are drawing an empty cardboard box on the table. It is a plain rectangular carton, nothing fancy. Yet your drawing looks twisted, as though someone sat on it. The lid edges run back toward a point somewhere above the box. The lower edges, which you know are parallel to the lid edges on the real box, run off in a different direction entirely. The cardboard is fine. Your drawing is telling two different stories about which way the box recedes, and the eye can feel the contradiction even before it can name it.`,
          `The fix is not to redraw more carefully. It is to understand what a drawing of a box is. Linear perspective is the set of rules for how a view of three-dimensional space lands on a flat sheet. One rule does most of the work here. Edges that are parallel in the real world, and that recede away from you, meet at a single point in the picture, called a vanishing point. Edges that run across your view, parallel to the paper, do not need to converge at all. Your twisted box broke the first rule: two parallel edges were given two different meeting points.`,
        ],
      },
      {
        title: 'Eye level belongs to the observer',
        paragraphs: [
          `Think of the painted bays in a car park, seen in a photograph taken from one end. On the ground every white line is parallel to its neighbors. In the photo they all lean toward one spot in the distance, and the car park looks perfectly normal. Now imagine one line in the photo heading off toward a different spot. The whole car park would look bent, even though you could not immediately say why. The lines are a family. A family shares a destination.`,
          `Where that destination sits depends on you, not on the box. For edges that are horizontal in the real world, the vanishing points lie on your eye level, the horizon. Your eye level is wherever your eyes are: it is not automatically the edge of the table, and it is not the middle of your sheet. Sit down and it drops; stand up and it rises. Facing the box square on, the depth edges converge to one point while the front width stays horizontal. Turn to look at a corner and you have two families of receding horizontal edges, so two vanishing points, both on the same horizon.`,
          `Those two points often sit off the edge of the paper. That is normal. If you drag them in close to the box because the page is small, the box becomes exaggerated and wide-angled in a way you never saw. Let the points fall where the view puts them, even if you can only aim toward them.`,
        ],
      },
      {
        title: 'Extend a family, not every line indiscriminately',
        paragraphs: [
          `Keep the box and your seat fixed. Look at the box and sort its edges into families: the ones running back into depth, the ones running left to right, the ones standing up. Pick one receding family and extend two or three of its edges lightly across the page. They should aim at the same spot. If one does not, that edge is the liar, and you move it. Do not extend every line on the drawing at once; you will produce a nest of marks and learn nothing.`,
          `In this upright view the vertical edges are a family of their own. They stay vertical. Sending them toward the horizontal vanishing point would tip the box over. Build the big planes of the carton this way first, and only then add the flaps and folds, which inherit their directions from the planes they sit on.`,
          `The same rule carries to invention. Draw a staircase beside the box, facing the same way. Each tread has a front edge, and all those front edges are parallel in space, so they share one vanishing point even though each step is higher than the last. The observed box is for diagnosis. The goal is a consistent space you can build in, not the memorized slopes of one carton.`,
        ],
      },
      {
        title: 'Points that wander',
        paragraphs: [
          `The first mistake is giving each object, or each step, its own vanishing point. Three treads facing the same way do not get three points; height changes nothing about horizontal direction. The second is blaming the wrong thing. Two parallel lid edges converge to different points, and the drawer reaches for carton texture or a bigger sheet of paper. Texture is paint on a twisted box, and the page boundary does not explain inconsistent convergence. The directional construction does.`,
          `A quieter mistake is moving. Shift your chair halfway through and every family changes its destination at once, so your extensions disagree everywhere. If that happens, check your viewpoint and your edge grouping before you force a convenient point onto the page.`,
          `Two habits. Before you check any edge, sort the edges into families by their direction in space, and test one family at a time. And decide where your eye level is first, then keep every horizontal vanishing point on it, for the box in front of you and for anything you invent beside it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A horizontal plane recedes to one point',
        alt: 'Near and far corners form a rectangle in perspective, with both depth edges continuing to the same vanishing point.',
        caption: `Find the vanishing point at the top first, then follow both depth edges back to it like two car-park lines sharing one destination. The near and far widths stay horizontal because they run across the view. Projected plane only; the marked point sits on eye level.`,
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
        caption: `Start at the near corner and notice two families leave it, one heading to each side. Both vanishing points sit on the same eye level, and they are near the edges of the diagram because that is where this view puts them. Plane-edge directions only; verticals are added separately.`,
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
        `Sit at one fixed viewpoint slightly above an empty box and sketch its large planes, ignoring any printing. Staying put is what keeps every family aimed at the same destination.`,
        `Identify two pairs of parallel receding edges, extend each pair lightly across the page, and compare where each pair is heading. Edges in the same family should agree; the one that does not is the one to fix.`,
        `Correct the inconsistent edge family, then invent a second box beside the first using the same eye level and the same vanishing points, so the two objects sit in one space.`,
      ],
      notice: `Each edge family now gives one consistent account of depth, and the invented box shares the real box's horizon, so the two look like they are on the same table. The twist is gone because the stories agree, not because the lines are neater.`,
      troubleshooting: `If your extensions disagree everywhere rather than in one place, suspect your viewpoint before your lines: you may have shifted in your seat, or mixed a vertical edge into a horizontal family. Return to the original position, regroup the edges by direction, and test one family at a time before forcing any point onto the page.`,
    },
    recall: {
      prompt: 'You invent three staircase treads facing the same way. Should each tread get a different horizontal vanishing point?',
      answer: `No. The front edges of all three treads are parallel in space, so from one viewpoint they are a single family sharing one vanishing point on the eye level, like the car-park lines in the photo. Each step being higher than the last changes its height on the page, not its horizontal direction, so no new point is needed.`,
      hint: 'Group edges by direction in space, not by which step owns them.',
    },
    quiz: {
      question: 'Two parallel lid edges recede in the same direction but converge to different points. What needs revision?',
      options: ['Their shared directional construction', 'Only the carton texture', 'The page size before checking either edge'],
      correctIndex: 0,
      explanation: `Parallel edges receding the same way are one family with one destination from a fixed view, so the construction that gave them two points is what is wrong. Texture is paint on a twisted box and cannot straighten it. A bigger page would only move the same disagreement further out; the vanishing points can sit off the paper and still agree.`,
    },
    takeaway: 'Construct shared spatial directions consistently around one viewpoint and eye level.',
    sourceNote: 'Tate perspective was spot-checked; Getty supports form vocabulary. Diagrams simplify upright linear perspective and do not cover every projection.',
  },
  {
    id: 'design-042',
    title: 'Group a white fold by its light, not its name',
    outcome: `Sort what you see into a few value groups by the light actually reaching each patch, even when that puts part of a white object in the dark group, and only then add texture.`,
    scene: 'A folded white napkin sits beside brown cardboard in side light.',
    sections: [
      {
        title: 'White material, dark patch',
        paragraphs: [
          `Fold a white napkin into a loose ridge and set a piece of brown cardboard next to it, with the light coming from one side. Now look, not at the napkin, but at the patches. The face of the napkin turned toward the window is bright. Fine. But the inside of the fold, where the cloth turns away, is darker than the lit cardboard. A white thing is darker than a brown thing, in the same scene, at the same moment.`,
          `Your pencil will resist this. The napkin is white, so your hand wants to leave it as untouched paper and shade the brown cardboard. Do that and the napkin becomes a flat white shape with no ridge, because the fold that gave it volume has been erased by its own color name. A drawing does not record what objects are. It records how much light reaches your eye from each patch. Look at the patches before you decide how much pencil goes on each one.`,
        ],
      },
      {
        title: 'Reduce decisions into groups',
        paragraphs: [
          `Think about a white car parked under a railway bridge and a black car parked in full sun across the road. Glance at them and the white car is the darker shape. Nobody is confused by this. The paint has not changed. The white car is simply receiving much less light, and your eye reports light, not paint. If you had to draw that street, you would shade the white car and leave the black car's sunlit roof almost bare. The napkin fold is the car under the bridge.`,
          `The word for lightness and darkness in a drawing is value. To keep the problem manageable, sort what you see into just three value groups: light, middle, and dark. Three is a simplification for this exercise, not a law for finished art. The groups let you compare the big relationships without spending your attention on weave and wrinkles.`,
          `One rule inside the groups. Where you can see a shadow continue across a surface, keep it as one connected mass. If you chop it into many little separately observed marks, each mark may be accurate and the fold will still fall apart, because the eye reads the connected shape, not the pieces.`,
        ],
      },
      {
        title: 'Check the ranking before blending',
        paragraphs: [
          `In the illustrated example, the ranking comes out as: the facing plane of the napkin in the light group, the lit cardboard in the middle group, and the sheltered white fold in the dark group. The swatches show it as a pale #E8E2D6, a mid #A9A08B, and a deep #55564E. Those are illustrative values, not measurements. Your setup may rank differently, so compare instead of copying.`,
          `Draw three small pencil samples beside your sketch, one for each group. Then go patch by patch across the scene and ask which sample each patch belongs with. This is a sorting job, not a shading job. If the fold and the cardboard are coming out the same, stop and look again. Either they really do match in your light, or your middle and dark groups have drifted together while you were not watching.`,
          `Only once the three groups are placed and checked do you add a few variations inside each one. This gives shading a structural job: it describes planes turning under light. It is not there to fill the drawing with attractive gray texture.`,
        ],
      },
      {
        title: 'When the name wins',
        paragraphs: [
          `The first mistake is the one from the opening: shading by material instead of by light. A dark shoe in sunlight beside a pale bag in shade is the same trap from the other side. Neither should automatically be darker. Compare the patches under their actual illumination and let the ranking fall where it falls. The second mistake is the universal middle gray: everything shaded a bit, nothing clearly light or dark, so the fold has no edge to stand on.`,
          `A third mistake is detail first. Weave and wrinkles are drawn beautifully onto a napkin whose large shadow mass was never placed, and no amount of texture can supply the volume afterwards.`,
          `Two habits. Before you shade anything, draw three value samples and sort the big patches into them, saying the group out loud rather than the material. And when two patches of different materials seem to share a value, trust the comparison and check it, instead of letting the color names overrule your eyes.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Side light across the folded napkin',
        alt: 'Light reaches a facing napkin plane and cardboard, while an inward napkin fold lies below the lit ridge.',
        caption: `Follow the Light arrow to the facing plane first, then find the inward fold below it, which the light never reaches. The two napkin patches share a material and not an illumination, like the white car in the sun and the one under the bridge. A schematic arrangement.`,
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
        caption: `Look at the third chip first: that is white cloth, placed in the dark group because of where it sits in the light. Then compare it with the brown cardboard in the middle. These are illustrative values, not sampled measurements, so observe your own setup before assigning its patches.`,
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
        `Fold a ridge into the white material and set the cardboard beside it, both under the same steady side light. One light source is what makes the ranking stable enough to compare.`,
        `Draw three value samples in a corner of the page, then lightly construct the ridge and the cardboard with no texture at all. The samples are your sorting bins; the texture would only distract from the sort.`,
        `Assign each large visible patch to one of the three samples, and compare the sheltered white patch directly with the lit cardboard. This is the moment the color name tries to overrule your eye, so look twice.`,
        `Correct one ranking you got wrong and write down its cause, such as fold faces away from light. Keep the material names out of the note and the observed values in it.`,
      ],
      notice: `The white material now contains both a light patch and a dark patch, and the fold reads as a fold because of it. You have shaded a white thing darker than a brown thing and the drawing looks more true, not less, which is the car under the bridge made visible.`,
      troubleshooting: `If everything is drifting toward one middle gray, your groups have collapsed. Hold each patch against both your lightest and your darkest sample and ask which it is nearer to, before you add any more pencil. If a patch genuinely sits between, choose a group anyway for this exercise; the point is the comparison, not a perfect match.`,
    },
    recall: {
      prompt: 'A dark shoe catches sunlight beside a pale bag in shade. Which should automatically be darker in your drawing?',
      answer: `Neither, by name alone. The shoe is the black car in the sun and the bag is the white car under the bridge: material color is only one contributor to the light reaching your eye. Compare the two visible patches under their actual illumination, place each in a value group, and let the surface detail follow that ranking rather than the labels.`,
      hint: 'Material color is only one contributor to the light reaching your eye.',
    },
    quiz: {
      question: 'The shaded white fold looks darker than the lit cardboard. Which value plan follows observation?',
      options: ['Keep all white material unshaded', 'Give both materials the same middle tone', 'Place the white fold in the darker group'],
      correctIndex: 2,
      explanation: `The drawing records light, not material, so the sheltered fold goes in the dark group where your eye reports it, just as the white car under the bridge is drawn darker than the black car in the sun. Leaving all white cloth bare erases the fold, and one shared middle tone removes the very difference that explains the ridge.`,
    },
    takeaway: 'Group visible light relationships before texture, even when they contradict material color names.',
    sourceNote: 'Inherited Tate tone and chiaroscuro references support value vocabulary. Swatches are original simplifications, not calibrated reproductions of the setup.',
  },
  {
    id: 'design-043',
    title: 'Give a hem, a roll, and a lost boundary different edges',
    outcome: `Read each boundary on an object as a transition, abrupt, gradual, or disappearing, and draw it from the values on either side instead of giving every form the same outline.`,
    scene: 'A partly rolled towel has a crisp hem and a tail merging with its backdrop.',
    sections: [
      {
        title: 'One object contains different boundaries',
        paragraphs: [
          `Roll up part of a towel and leave the rest loose, under light from one side, with the loose tail lying against a backdrop of roughly the same tone. Now draw it the way most of us were taught: an outline around everything, then shading inside. The result is a towel-shaped diagram. It has a boundary, but every boundary is the same dark line, and the towel in front of you does not look like that at all.`,
          `Look at three places on it. Where the hem overlaps the roll, the light cloth stops abruptly against the shadow beneath it. Where the roll turns away from the light, there is no line anywhere, just a broad slow change from bright to dim. And where the loose tail meets the backdrop, you can barely find the boundary at all. One object, three completely different kinds of edge. A single dark outline flattens them into one. It records a drawing habit, not what these surfaces and their neighbors are doing.`,
        ],
      },
      {
        title: 'An edge is a transition',
        paragraphs: [
          `Think of a coastline on a map. In one place it is a cliff: land, then a sheer drop, then sea, with the change happening in a single step. Further along it is a beach: the land slopes gently down and the sea creeps up, and there is no one line where one becomes the other. Further still it is a salt marsh, where water and land are so mixed that the cartographer gives up and shades the whole area. Nobody would draw all three as the same thick black line. The coast is a transition, and it changes character as you travel along it.`,
          `Edges in a drawing are coastlines. A hard edge is the cliff: an abrupt change between two neighboring areas. A soft edge is the beach: the change spreads across a visible span. A lost edge is the marsh: two neighbors so close in value or color that the eye cannot find where one ends. These are appearances, not fixed properties of a material. Towelling is one fabric, yet its hem is a cliff and its roll is a beach.`,
          `Two things the coastline does not tell you. A soft edge does not mean something is far away; a rounded form two feet from you has soft edges. And you are allowed to sharpen an edge on purpose to draw attention to it, as long as you know you are making an interpretive choice rather than reporting what was there.`,
        ],
      },
      {
        title: 'Use neighboring values to choose the mark',
        paragraphs: [
          `Now draw each coast according to its kind. At the hem, put the dark area directly against the light cloth. The abrupt meeting of a light value and a dark value is the edge; it needs no extra black line on top unless you can actually see one. The swatches show the pair as a pale #DED8CB against a deep #484741. Across the roll, shade a gradual change from light to dark, not a stack of equally hard stripes that would turn the beach into a staircase of cliffs.`,
          `At the tail, where the cloth and the backdrop share a value, let the two tones simply meet. The swatches show both sides as the same #77736A. Do not invent a line to prove the towel ends there. Let some other visible section, a fold higher up, explain the form instead. The viewer's eye will complete the tail.`,
          `This only works if the whole towel was constructed lightly first. A lost edge in a drawing you understand reads as a choice. A lost edge in a drawing you never built reads as a gap. Afterwards, make a small version with a uniform outline and compare. The difference is not that soft drawings are better. It is that specific boundaries now behave the way their neighbors say they should.`,
        ],
      },
      {
        title: 'Edges chosen by habit',
        paragraphs: [
          `The first mistake is the universal outline from the opening. The second is its mirror image: deciding that soft is more artistic and blurring every edge equally, so the hem loses its cliff and the roll loses its shape. Both apply one treatment everywhere. Both ignore the neighbors. A third mistake is fixing a lost edge by changing the whole scene, darkening the entire backdrop so the tail stands out, which alters every other relationship in the drawing to rescue one boundary that was fine as it was.`,
          `A quieter mistake is pretending. If nothing in your setup actually disappears into its background, say so, and use the equal-value swatches as the demonstration instead of inventing a marsh that is not there.`,
          `Two habits. Before drawing any edge, look at the value on each side of it and ask whether the change is a step, a slope, or no change at all. And construct the whole form lightly first, so that a boundary you leave out is a decision the viewer can trust.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Locate the three edge situations',
        alt: 'Side light reaches a towel hem and rounded roll; the loose tail meets a similar-valued backdrop.',
        caption: `Find the three labeled places first: the hem overlap is the cliff, the rounded roll is the beach, and the loose tail against the backdrop is the marsh. Schematic towel parts, arranged so you can compare an overlap, a turning volume, and a boundary against a matching neighbor.`,
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
        caption: `Look at the first two chips as a pair and notice how far apart they are; that gap is the hem's cliff. Then look at the last two, which are identical, and try to find an edge between them. These are illustrative neighboring values; softness also depends on how gradually you draw the transition.`,
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
        `Roll part of the towel, leaving a hem and a loose tail, and settle on one viewpoint and one light. A single light is what gives each boundary a stable pair of neighbors to read.`,
        `Construct the main roll and the tail lightly as whole forms, then find one abrupt boundary and one broad tonal turn on the real towel. Building the whole form first is what lets a missing edge later read as a choice.`,
        `Draw the two boundaries differently: values meeting directly at the hem, a gradual change across the roll. If the tail's boundary nearly vanishes against the backdrop, leave its final outline out rather than inventing a contrast that is not there.`,
        `Make a small uniformly outlined version beside it and compare the two, writing down which specific surface relationships the outline version lost, such as the roll's turn or the tail's merging.`,
      ],
      notice: `The overlap, the turning form, and the contact with the background no longer share one identical dark border. Each edge now behaves like its stretch of coast, and the towel reads as cloth under light instead of a diagram of a towel.`,
      troubleshooting: `If nothing in your setup actually disappears into the backdrop, do not fake a lost edge; write down honestly that your scene had cliffs and beaches but no marsh. Use the two identical swatches as the demonstration of what a lost boundary is, and try a closer-valued backdrop another day.`,
    },
    recall: {
      prompt: 'A shoe sole overlaps another shoe, while its rounded toe turns away from light. Should both transitions match?',
      answer: `Not automatically. The overlapping sole is likely a cliff, an abrupt step between the light sole and the shadowed shoe beneath it, while the rounded toe turning from the light is a beach, a slow slide from bright to dim with no single line. Look at the values on each side of each boundary and draw the transition you actually see, not one treatment for both.`,
      hint: 'Compare how the values change, not just which material is present.',
    },
    quiz: {
      question: 'A tail boundary disappears against its backdrop. Which first treatment preserves that observation?',
      options: ['Let similar neighboring tones meet without an added outline', 'Soften every edge on the towel equally', 'Darken the entire backdrop before checking other edges'],
      correctIndex: 0,
      explanation: `The lost edge is a marsh: two values so close that no boundary shows, and letting those tones meet records exactly that. Softening every edge equally turns the hem's cliff into a beach it never was. Darkening the whole backdrop rescues one boundary by changing every other relationship in the picture, which is redrawing the map to move the coast.`,
    },
    takeaway: 'Construct the whole form, then choose final edges from their local transitions.',
    sourceNote: 'Getty elements and Tate tone references are inherited. Edge choices and gray patches are original studies, not universal material rules.',
  },
  {
    id: 'design-044',
    title: 'Give the orange and the table different kinds of shadow',
    outcome: `Explain every dark area in a study by one light direction, telling the shadow on an object's own turning surface from the shadow it throws onto another surface, and checking both against the lamp.`,
    scene: 'An orange sits on plain paper beside a steady side light.',
    sections: [
      {
        title: 'Two dark areas, two causes',
        paragraphs: [
          `Put an orange on a sheet of plain paper with a steady light coming from one side. Look at the dark parts. There are two. One is the far side of the orange itself, dim where the fruit curves away from the lamp. The other is a separate dark shape lying on the paper, stretching away from the orange on the side opposite the light. They touch near the bottom of the fruit, and it is tempting to shade them as one connected blob called shadow.`,
          `Calling both of them shadow is not wrong. It is just not useful, because they are answering different questions. The dark side of the orange is about the orange: which way does this surface face? The dark shape on the paper is about the paper: what is stopping light from reaching this spot? If you draw them as one thing, you cannot check either one. Separate the causes and each shadow becomes something you can construct and test rather than something you fill in.`,
        ],
      },
      {
        title: 'Follow light and surface orientation',
        paragraphs: [
          `Think of a hill late in the afternoon. The slope facing the sun is bright. The far slope is in shade, not because anything is blocking it, but because it faces away; the sun simply does not reach it. Meanwhile the hill throws a long shadow across the valley floor. The valley is flat and would be lit perfectly well if the hill were not standing in the way. Both are shade. One belongs to the hill's own shape. The other belongs to the valley, and the hill is merely the thing in the way.`,
          `Artists name these two. A form shadow is the hill's far slope: it belongs to the object's own surface, wherever that surface turns away from the light. A cast shadow is the shade on the valley floor: it belongs to a receiving surface whose light has been blocked by something else. In this study, with the main light at upper left, the cast shadow stretches away toward lower right. Its exact shape depends on how tall the orange is, where the lamp sits, and what the paper is doing.`,
          `The two also look different. A rounded matte form like an orange turns gradually, so its form shadow is a broad soft transition rather than a sharp line. And neither kind of shadow wants a black outline just because you have given it a name. Names are for construction, not decoration.`,
        ],
      },
      {
        title: 'Check a proposed highlight against the setup',
        paragraphs: [
          `Start with a sphere-like volume and mark the point where it touches the paper. Draw a small arrow beside the sketch showing the main light direction; this arrow is your referee for everything that follows. Place the broad lit region facing the arrow and the form shadow on the side away from it. Then lay the cast shadow on the paper, starting at the contact point and running away from the light.`,
          `The swatches show one possible plan: a pale #E5DBBF for the lit orange, a mid #8F8470 for the form shadow, and a deeper #4F5147 for the cast shadow on the paper. These are illustrative values, not fixed shadow darkness. Compare your actual patches. Often the cast shadow is the darkest thing in the setup, but look rather than assume.`,
          `Now the small things. The paper near the orange can bounce a little light back up into the form shadow, brightening its lower edge. Include that only if you can see it, and keep it dimmer than anything facing the lamp. Do not add a bright rim out of habit. Finally, run the check: does the cast shadow point away from your light arrow? If it points toward the lamp, the geometry is wrong, and no amount of smooth blending will fix it. Real rooms have more than one light, so keep the study selective and say so.`,
        ],
      },
      {
        title: 'Shadows drawn from memory',
        paragraphs: [
          `The first mistake is the single blob: form and cast shadow merged into one dark shape with no light direction to explain either. The second is the reflex highlight, a bright rim added to the shadow side of every rounded object because a tutorial once showed one. If the paper is not bouncing light, the rim is fiction. A third is the inconsistent lamp: the orange lit from the left and its shadow falling to the left too, which is the hill casting its shadow into the sun.`,
          `The same confusion shows up with sharper objects. A crumpled paper ball has facets that turn abruptly, so its form shadows change tone in steps, and it also throws a cast shadow on the desk. Ask of each dark patch: is this a facet turned from the light, or is this the desk with the ball in the way?`,
          `Two habits. Draw the light arrow beside every study before you shade, and check each dark area against it. And for every shadow, say which surface is carrying it and why the light is not reaching it, turned away or blocked, before you decide how dark to make it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Light, blocker, and receiving surface',
        alt: 'Light at upper left reaches an orange; a cast shadow lies beyond it toward lower right on paper.',
        caption: `Follow the Light arrow from the lamp to the orange first, then the Blocked path arrow from the orange to the shadow on the paper. The two arrows line up because the orange is the hill standing in the sun's way. An oblique setup schematic; the arrows show direction, not a measured shadow length.`,
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
        caption: `Read the middle chip as the hill's far slope and the right chip as the valley floor: two different surfaces, two different causes, two different values. A possible plan, not fixed shadow darkness or calibrated color; compare your actual patches.`,
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
        `Set the fruit on plain paper beside window light or a cool lamp, keeping the paper well away from any bulb. One dominant light is what lets each shadow have a single explanation.`,
        `Construct the rounded volume and mark where it touches the paper, then draw a small light-direction arrow outside the sketch. The arrow is the referee you will check every shadow against.`,
        `Block in the form shadow on the turning side of the fruit and the cast shadow on the paper running away from the light, and write the cause beside each: turned away, blocked. Naming them is what keeps them from merging.`,
        `Look for any reflected light on the shadow side before you draw it, and only add what you can see. Then check the cast shadow's direction against the arrow and fix any disagreement before you smooth a single tone.`,
      ],
      notice: `The fruit turns under the same light that explains the separate shadow on the paper, and you can point to the arrow and show why each dark area is where it is. The two shadows touch at the contact point and stay two things.`,
      troubleshooting: `If several shadows fan out in different directions, you have more than one light competing, and no single arrow can referee them. Simplify to one dominant source by switching off or shading the others, without handling a hot lamp or blocking its ventilation, and begin the study again.`,
    },
    recall: {
      prompt: 'A crumpled paper ball has dark facets and a dark shape on the desk. How would you distinguish them?',
      answer: `Ask of each dark patch which surface carries it and why the light is not reaching it. A dark facet on the ball is a form shadow, the hill's far slope, turned away from the lamp; the dark shape on the desk is a cast shadow, the valley floor with the ball standing in the way. Because the facets are sharp planes, their form shadows change in abrupt steps rather than the orange's soft turn.`,
      hint: 'Name the surface carrying each shadow and why light does not reach it directly.',
    },
    quiz: {
      question: 'Which observation identifies the cast shadow rather than the form shadow?',
      options: ['A darker orange surface turns away from the lamp', 'A reflected patch brightens the orange\'s shaded side', 'The orange blocks illumination on the paper behind it'],
      correctIndex: 2,
      explanation: `A cast shadow lives on a receiving surface whose light has been blocked by something else, so the paper darkened because the orange is in the way is the valley floor behind the hill. A surface turning away from the lamp is the orange's own form shadow, and a reflected patch is light bouncing back onto that same turning surface; both belong to the orange, not the paper.`,
    },
    takeaway: 'Use light direction, surface orientation, and obstruction to explain each dark area.',
    sourceNote: 'Getty and Tate chiaroscuro references are inherited. The lighting geometry and value plan are simplified original teaching examples.',
  },
  {
    id: 'design-045',
    title: 'Study a pouch, recall its structure, then redesign it',
    outcome: `Move through observation, a checked memory reconstruction, and a deliberate structural change, labeling each stage so a copy is never passed off as an invention or a gap in memory silently patched.`,
    scene: 'An ordinary zip pouch becomes an invented pouch with a side pocket.',
    sections: [
      {
        title: 'Reference gives invention something to build on',
        paragraphs: [
          `You want to design a pouch of your own, something with a side pocket that does not exist yet. So you sit down to invent it from nothing, and what comes out is a flat rectangle with a zip drawn across the front like a smile. It looks like the idea of a pouch. It could not hold anything. Meanwhile there is a real zip pouch in your bag, three feet away, and some part of you feels that looking at it would be cheating.`,
          `It is not cheating. Put the real pouch on the table and look. It has thickness, so the body is a soft-cornered box, not a rectangle. The zip runs along the top plane, where the two faces meet, not across the front. There is a little loop at one end, attached at a definite place. Those are relationships your memory left out, and no amount of invention supplies them. Draw the pouch as a built thing, box first, zip on top, loop attached, and skip the stitching and the printed pattern. You are studying how it is made.`,
        ],
      },
      {
        title: 'Make memory answerable to observation',
        paragraphs: [
          `Think of learning a dish from a cookbook. First you cook it with the book open, following the method. Then one evening you cook it from memory, and when you check the book afterwards you find you forgot to rest the dough. That is not a failure; that is exactly what the comparison was for. Now you know the one step your memory drops. Later, when you add your own twist, a different herb or a filling the book never mentioned, you change the recipe on purpose, knowing what it was before you changed it.`,
          `Do the same with the pouch. Hide it and rebuild its large forms from memory. Then uncover it and compare the two drawings. Perhaps the memory version lost its thickness and went flat. Perhaps the zip slid down onto the front face. Each mismatch names a relationship worth looking at again. It says nothing about your talent, and there is no rule that you must draw from memory alone until it is perfect.`,
          `Keep the two studies labeled: observed, from memory. The labels matter because the alternative is to glance at the pouch, quietly correct the memory drawing, and forget there was ever a gap. A labeled mistake becomes a question you can work on. An erased one disappears.`,
        ],
      },
      {
        title: 'Change a structural problem deliberately',
        paragraphs: [
          `Now the twist. Invent a version with a small side pocket. This is a structural decision, so decide the structure: which face does the pocket sit on, which way does its opening face, where exactly does it join the body? Draw lightly through the join, the way you would mark where a handle enters a kettle, before you commit to any visible contour. Keep enough of the original box so the new pocket clearly lives in the same space as the body rather than floating beside it.`,
          `You may look at the real pouch again while you work. The pocket is new, but the body it attaches to is still the one you studied, and checking it is sense, not weakness. The diagrams show the idea: the observed scaffold with body, top opening, and side loop, then the same body and opening with a pocket added to the right face. Nothing was erased to make the new version. Something was added, on purpose, at a named place.`,
          `When you share, honesty about the stages is part of the work. Use your own objects, or references you have permission to use, with attribution where it is due. Combining several references does not cancel the conditions attached to each. A direct study is useful when it is labeled as one. This variation should be able to say exactly what you redesigned.`,
        ],
      },
      {
        title: 'When invention is only decoration',
        paragraphs: [
          `The first mistake is treating reference as something to avoid, and inventing a flat symbol with no structure to build on. The second is the opposite: copying the pouch, adding a logo, and calling it a design. Changing the surface is not changing the thing. If your invention consists of stitching and patterns on the same silhouette, go back and change a volume, an attachment, an opening, or the viewpoint instead.`,
          `A third mistake is building on a memory you never checked. The remembered pouch lost its thickness, and now a pocket is attached to a flat shape. Recheck the side plane first, then attach the new part to a body that exists.`,
          `Two habits. Label every drawing in the cycle as observed, from memory, or invented, so each one can be trusted for what it is. And when you invent, name the structural relationship you are changing before you draw it, so the design is a decision rather than a doodle.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Observed pouch scaffold',
        alt: 'The pouch body sits below a top opening, with a small side loop attached at the left.',
        caption: `Look at where the top opening sits first: on the top plane, not across the front. Then find the side loop and the point where it attaches. A simplified front-view construction; study thickness from your own pouch rather than tracing these symbols.`,
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
        caption: `Compare this with the scaffold above and notice that the body and opening have not moved; only the pocket on the right face is new. That is the recipe with one deliberate addition. Draw the pocket's connection in the same view as the body.`,
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
        `Spend about 3 minutes observing and constructing the body, the opening, and any attachments, leaving out logos and surface decoration. This is cooking with the book open; the structure is what you are learning.`,
        `Hide the pouch and spend about 3 minutes rebuilding it from memory, then 2 minutes comparing and marking one structural mismatch, such as lost thickness. The mismatch is the step your memory dropped, and it is the most useful mark on the page.`,
        `Spend about 4 minutes inventing a side pocket, looking at the real pouch whenever a form is uncertain. Label the three drawings observed, memory, and invention so each can be trusted for what it is.`,
      ],
      notice: `Your page now records a checked memory gap and a deliberate redesign of a connected volume, each labeled for what it is. The invented pocket sits on a body you understand, and you can say precisely what you changed and what you kept.`,
      troubleshooting: `If your invention amounts to stitching, a pattern, or a logo on the same silhouette, you have changed the recipe's garnish and not the recipe. Go back and alter something structural instead: a volume, an attachment point, which face the opening is on, or the viewpoint. Then draw through the new join before any contour.`,
    },
    recall: {
      prompt: 'After studying your own desk organizer, you want to invent a slanted pen compartment. What should transfer?',
      answer: `The organizer's volume and its attachment logic, how parts join the body, transfer; the new compartment's tilt and opening are the twist you add on purpose. Construct the slant and where it meets the base before any contour, and look back at the real organizer whenever a form is uncertain. What should not transfer is its decoration, which is garnish rather than recipe.`,
      hint: 'Name the relationship you learned and the new problem you are choosing.',
    },
    quiz: {
      question: 'Your memory pouch loses its thickness. Which next action supports useful invention?',
      options: ['Add a decorative pattern to suggest complexity', 'Recheck the side plane, then construct the new pocket', 'Repeat the same flat outline without looking again'],
      correctIndex: 1,
      explanation: `Lost thickness is the dropped step, so you check the book: look again at the side plane, restore the volume, and only then attach a pocket to a body that exists. A decorative pattern dresses up a flat shape without giving it depth, and repeating the outline unchecked builds the new design on the very gap the comparison just found.`,
    },
    takeaway: 'Observe, check what memory changed, and invent a specific new structural relationship.',
    sourceNote: 'Tate and Getty drawing references are inherited. This original study cycle is not a tested memory intervention or blanket licensing permission.',
  },
  {
    id: 'design-046',
    title: 'Compare a paper boat\'s placement before rendering the scene',
    outcome: `Make several small studies that differ in placement, size, value, or crop, then choose one by the emphasis you intended rather than by a composition rule or by which looks most finished.`,
    scene: 'A paper boat and stone become a small imagined river scene.',
    sections: [
      {
        title: 'Choose the relationship first',
        paragraphs: [
          `You have folded a paper boat and set it on a cloth beside a stone, and in your head it has already become a small vessel beside a great river rock. You want the boat to be the first thing anyone notices, but you also want the open water around it to feel wide and quiet. So you start the picture. An hour later you have beautifully rendered ripples, every fold of the boat, a convincing stone. And the stone is what everyone looks at first, because it is the only dark shape on the page.`,
          `The hour was not wasted on bad drawing. It was spent on the wrong question. Whether the boat is noticed first is decided by where things sit, how big they are relative to each other, which is dark and which is light, and where the edges of the frame cut. None of that needs water texture. All of it can be tested in two minutes on a scrap. Before you commit to the big picture, make several small frames where those structural choices can change without throwing away an hour of rendering.`,
        ],
      },
      {
        title: 'A thumbnail tests a difference',
        paragraphs: [
          `Think about rearranging a living room. Nobody lifts the sofa to each wall in turn to see how it looks. You sketch the room on paper and slide a little rectangle around: sofa under the window, sofa facing the door, sofa on the diagonal. Each sketch is a different room. Drawing the same sofa in the same place with the cushions rendered in more detail is not a new arrangement. It is the same room with nicer cushions, and it tells you nothing about where the sofa should go.`,
          `A thumbnail is that floor-plan sketch for a picture: a small, simplified study of the composition. Keep the boat, the rock, and the big fold of cloth as plain masses. In one frame, put the boat low left and the rock high right with the fold running between them on the diagonal. In another, bring the boat to the center and push the rock out toward the edge. Those are genuinely different pictures. Redrawing the first with sharper boat folds is the sofa with nicer cushions.`,
          `You may have heard of grids and intersections where important things are supposed to go. There is no compulsory spot that can decide this for you. The question is which arrangement makes the boat lead while the space stays open, and only looking at alternatives answers it.`,
        ],
      },
      {
        title: 'Keep the drawing invented but accountable',
        paragraphs: [
          `You can move the real objects on the cloth or move them on paper; both count, and you can check the real boat whenever a form goes vague. Then put the thumbnails side by side at the same small size and compare. Suppose the rock dominates because it is the only dark mass. The fix is in the composition: make the rock smaller, or lighten the contrast around it. Adding detail to the boat would be more cushions.`,
          `Suppose instead the centered boat wins attention but the river stops feeling wide. Then try a version that keeps the boat prominent and preserves a larger quiet area somewhere else in the frame. Each arrangement trades something. Name the trade in a few words beside the frame, such as boat leads, space shrinks. That is more honest and more useful than declaring one of them the best composition.`,
          `Keep the thumbnails you rejected. They are a record of what you considered, and next time you face a similar scene they let you start from a decision rather than a vague memory of having tried things.`,
        ],
      },
      {
        title: 'Studies that are not alternatives',
        paragraphs: [
          `The most common failure is four thumbnails that are the same picture. Same placement, same crop, slightly different pencil pressure. You have drawn one arrangement four times and compared nothing. If you catch yourself doing it, move a mass or crop an edge before you change anything about technique. The second failure is choosing by finish. The thumbnail with the neatest boat wins, even though its arrangement was the weakest, because neat is easy to admire.`,
          `A third failure is reaching for a rule to avoid looking. The boat goes on a grid line because a book said so, and the question of whether it leads is never actually asked.`,
          `Two habits. Before any rendering, write the intention in one sentence and make at least three small frames that differ in placement, size, value, or crop. And choose among them by reading each against that sentence, naming what the chosen one gives up.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Wide diagonal arrangement',
        alt: 'A boat sits low left, a stone high right, and a cloth fold between them.',
        caption: `Look at where the three masses sit before you think about what they are: low left, high right, and a fold running between them. This is one floor plan for the picture. Shapes stand for observed or invented forms, not a finished river illustration.`,
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
        caption: `Compare the boat's position with the frame above: it has moved to the center and the stone has been pushed toward the edge. The sofa is on a different wall. Ask which version lets the boat lead while the space stays open, before adding texture to either.`,
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
        `Arrange the objects and write one sentence of intention, such as notice the boat first while keeping a sense of space. Every thumbnail will be judged against this sentence, so write it before you draw.`,
        `Draw four small frames, changing placement, crop, or the large light and dark areas between them, with no texture at all. Each frame must be a different floor plan, not the same room with nicer cushions.`,
        `Line the studies up at the same small size and compare them against your sentence. Circle one and write the structural decision that makes it work, such as rock smaller so the boat leads.`,
        `Enlarge only the chosen arrangement's main forms. Keep the other three thumbnails and note one thing the chosen version gives up, because every arrangement trades something.`,
      ],
      notice: `Your alternatives differ in composition rather than in finish, and the one you picked has a reason tied to your intention, not to how tidy it looks. You also have three rejected plans that show what you considered, which the next picture can start from.`,
      troubleshooting: `If all four frames turn out to be the same arrangement, you have drawn one room four times. Before you touch pencil technique, physically move a mass to a new place or crop an edge hard enough that the balance changes. If it still feels like the same picture, the change was too small to count.`,
    },
    recall: {
      prompt: 'You are designing an original poster with a folded umbrella and a doorway. What should thumbnail alternatives vary?',
      answer: `Where the umbrella sits and how big it is, how the doorway is cropped by the frame, and which of the two carries the dark mass, all chosen according to what should catch the eye first. Those are the walls the sofa can go against. Fabric detail on the umbrella is the cushions, and it waits until a floor plan has been chosen.`,
      hint: 'Change the arrangement of masses, not how carefully each is rendered.',
    },
    quiz: {
      question: 'Which second study tests a genuine composition alternative to the wide diagonal?',
      options: ['The same arrangement with more cloth texture', 'The same crop with cleaner boat folds', 'A central boat with the stone pushed toward the edge'],
      correctIndex: 2,
      explanation: `Moving the boat to the center and the stone to the edge changes where the masses sit, which changes emphasis and the feeling of space; that is the sofa on a different wall. More cloth texture and cleaner boat folds refine the first arrangement without testing another one, so they can only tell you how the diagonal looks when it is neater.`,
    },
    takeaway: 'Make thumbnails differ structurally, then choose by the relationship you want the picture to express.',
    sourceNote: 'Getty design principles and Tate drawing references are inherited. Arrangements are original options, not guaranteed attention formulas.',
  },
  {
    id: 'design-047',
    title: 'Draw what the spoon reflects, not a symbol for shiny',
    outcome: `Compare how different materials look under one shared light by recording the value patches and transitions you actually see, and transfer that reasoning rather than a memorized texture recipe.`,
    scene: 'A polished spoon, plain paper, and folded cloth share one light.',
    sections: [
      {
        title: 'Three surfaces under one lamp',
        paragraphs: [
          `Set a polished spoon, a sheet of plain paper, and a folded cloth side by side under one steady light. You know how to draw shiny: a few sharp white stripes, maybe a star-shaped glint. You add them to the spoon. It looks shiny in the way a cartoon spoon looks shiny. It does not look like this spoon on this table, because the real spoon is doing something quite specific. There is a broad dark band curving across its bowl, next to a bright one, and neither matches your stripes.`,
          `The paper beside it changes tone slowly across its surface. The cloth adds a scatter of small shadows wherever a fold turns. Three materials, three different kinds of appearance, under the same lamp. Random stripes would make the spoon read as shiny and explain nothing. Start instead with the forms and with the patches of value you can actually see on each one. The material name tells you what the object is made of. It is not a recipe for where a highlight belongs.`,
        ],
      },
      {
        title: 'Reflection depends on the surroundings',
        paragraphs: [
          `Think of a puddle on the pavement after rain. The pavement looks like pavement from wherever you stand: gray, grainy, lit a little more on one side. The puddle looks like the sky. Step to the left and a lamp post appears in it; step back and the lamp post slides away. The puddle is not showing you itself. It is showing you whatever happens to be in the right place around it, and that changes with every step you take. The polished spoon is a small bent puddle.`,
          `A polished surface reflects a fairly organized picture of its surroundings, warped by its own shape. The dark band on the spoon's bowl is a dark part of the room, the bright band is a window or a lamp, and the curve of the bowl squeezes them into stripes. Matte paper is the pavement: it scatters reflected light broadly in all directions, so it looks much the same from different viewpoints. Cloth is a third case, with small surface texture and larger folds that turn toward or away from the light.`,
          `These are differences of degree, not categories carved in stone. Finish, lighting, and shape all pull on the result. One rule keeps the comparison honest: do not move the lamp or the objects while you study. If a highlight shifts, you want to know it was your eye that moved, and not the light.`,
        ],
      },
      {
        title: 'Move the view as a separate test',
        paragraphs: [
          `Make a small study of one patch of the spoon's bowl. Record how wide the reflected band is and how sharp its edge is. Then, keeping everything else still, move your head a few inches. Watch the band. If it slides across the bowl, you have seen the puddle test in action: the band is a reflection of something in the room, carried by your viewpoint. Move back to where you were before you draw the paper and the cloth, so all three studies share one view.`,
          `The swatches give an idea of what the patches might be: a bright #E9E8E0 and a dark #343A3B on the spoon, a broad mid #C8C3B6 for the paper, a deeper #767167 for a cloth fold. Treat those as notes, not a formula. Where the bands fall, how wide they are, how their edges behave, all of that comes from your own setup.`,
          `Work in broad groups first, then add only the texture that explains the surface. And when you later invent a metal handle for an object that does not exist, carry over the reasoning, that a polished curve reflects its surroundings, not the stripe map from this spoon. A different shape bends the room differently and poses a new reflection problem.`,
        ],
      },
      {
        title: 'Shiny by habit',
        paragraphs: [
          `The first mistake is the stripe recipe from the opening: highlights placed where shiny things are supposed to have them rather than where the room is actually reflected. The second is expecting all three materials to share the same dark accents because they share a light. The lamp is the same; what each surface does with it is not. The third is confusing a view-dependent reflection with a cast shadow. A dark patch on the spoon that moves when your head moves is a piece of the room, not a shadow, and not a mark on the metal.`,
          `A quieter mistake is a flat spoon. If the bands are placed without the curve of the bowl underneath them, the spoon looks like a decorated flat shape. Recheck the curvature first, then place the reflected bands on it.`,
          `Two habits. Before you draw any highlight, ask what in the room it is a reflection of, and look for that thing. And test any suspicious patch by moving only your eye, so you can tell a reflection from a shadow or a stain.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Compare surfaces under a shared light',
        alt: 'Spoon, paper, and cloth sit across one setup between a light and an observer.',
        caption: `Notice first that one light reaches all three surfaces, then find the eye at the bottom, which is the only thing that moves during the reflection check. A setup map: objects and lamp stay fixed, the viewpoint shifts a little, like stepping beside a puddle.`,
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
        caption: `Look at the first two chips together: they are the bright and dark bands one spoon can carry at the same time, because it is reflecting two different parts of the room. The paper and cloth chips are broader single values. Illustrative grays; their positions, widths, and edges must come from your own study.`,
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
        `Place all three surfaces under one light, sit where you can stay, and draw three small study boxes on your page. One light and one seat are what make the three patches comparable.`,
        `Spend about 3 minutes on each box, recording the broad tones and how wide or sharp each transition is, with no texture yet. You are noting what the room does to each surface before deciding how to decorate it.`,
        `Use the last 3 minutes to move only your head and watch the spoon's band, then write one difference per material, such as band moved with my eye, paper did not change. That note is the puddle test in your own words.`,
      ],
      notice: `Your three studies differ because of observed reflection, edge behavior, and folds, not because each got its own set of decorative stripes. The spoon shows a piece of the room, the paper shows itself, and you can say which is which.`,
      troubleshooting: `If the spoon looks like a flat shape with stripes on it, the bands were placed before the bowl existed. Go back to the curvature of the bowl, draw it as a turning form, and then place the reflected bands along that curve. Adding more highlights to a flat spoon only makes a flatter, brighter spoon.`,
    },
    recall: {
      prompt: 'You invent a brushed-metal box from a polished-spoon study. Why should its highlight pattern change?',
      answer: `Because the box has flat planes instead of a curved bowl and a brushed finish instead of a polished one, so it reflects the room in a different way, with softer, broader bands rather than sharp curved stripes. The spoon is a bent puddle; the box is a different puddle in a different shape. Transfer the reasoning, that the surface shows its surroundings, and work out the new pattern from the new form.`,
      hint: 'Material, shape, viewpoint, and surrounding light all contribute.',
    },
    quiz: {
      question: 'A spoon\'s dark band moves when the eye moves, with light and objects unchanged. What does this suggest?',
      options: ['The band is a permanent painted marking', 'It reflects a view-dependent part of the surroundings', 'Every dark spoon patch is a cast shadow'],
      correctIndex: 1,
      explanation: `Only your eye moved, and the band moved with it, which is exactly what the lamp post in the puddle does: the band is a reflection of something in the room. A painted marking would stay fixed on the metal wherever you stood. A cast shadow depends on the light and the object, both of which were held still, so it would not have moved either.`,
    },
    takeaway: 'Observe reflection and form together, then transfer their logic rather than a texture stereotype.',
    sourceNote: 'Getty and Tate references support material and drawing vocabulary. The patch studies are original observations to attempt, not calibrated material measurements.',
  },
  {
    id: 'design-048',
    title: 'Finish an original leaf-and-cardboard picture with a stated aim',
    outcome: `Bring construction, composition, value, and edge choices together in one small original picture with a written aim, finish it inside a time budget, and review a visible decision against that aim.`,
    scene: 'A fallen leaf leads an arrangement with folded cardboard and a pebble.',
    sections: [
      {
        title: 'Choose what the picture is about',
        paragraphs: [
          `On the table are a fallen leaf, a folded piece of plain cardboard, and a small pebble. Ordinary things. You want to make one finished picture from them, and you have learned a dozen separate skills over the past lessons: gesture, construction, value groups, edges, thumbnails, negative space. The temptation is to use all of them equally on all three objects. The result would be three well-drawn objects and no picture, because nothing would be in charge.`,
          `So decide first what the picture is about. Say the leaf should be noticed first, and the cardboard should feel like a large quiet backdrop behind it. That is a real decision, and it is yours, even though you did not make the objects. Write it down before you draw. Then arrange to serve it: set the leaf against a darker opening in the fold so it separates, and choose one main light. You do not have to invent surfaces from memory to make the picture yours. The arrangement and the intention are the authorship.`,
        ],
      },
      {
        title: 'Let the earlier tools share one job',
        paragraphs: [
          `Think of dressing a small shop window. One item is the star this week, say a single pair of boots. Everything else in the window, the stool, the folded scarf, the backdrop, is there to make the boots easier to see. A good window dresser does not polish every prop to the same shine. They light the boots, keep the scarf quiet, and then walk out onto the pavement to check what a passer-by sees first. If the eye goes to the scarf, the scarf is turned down, however lovely it is.`,
          `Your tools are the props, and the leaf is the boots. Make two small placement trials and pick the one where the leaf leads. Construct the chosen arrangement: a gesture line for the leaf, planes for the cardboard, a rounded mass for the pebble. Check the gap between leaf and fold as carefully as the leaf itself. Then sort the broad lights and darks into groups before you draw a single vein or paper fiber.`,
          `Edges are where the tools must agree. Reserve a clear boundary where the leaf meets the dark opening, because that is what makes it separate. Let less important transitions, the pebble against the cardboard, stay quieter. A perfectly rendered pebble with a crisp dark outline will steal the window, not because it is bad, but because its contrast became stronger than the leaf relationship you set out to show.`,
        ],
      },
      {
        title: 'Finish with a question you can answer',
        paragraphs: [
          `Stop when the large forms, the light direction, and the intended emphasis are clear enough to judge. That is sooner than it feels. Then walk out onto the pavement: look at the drawing small, at arm's length or as a phone photo, and read it against the sentence you wrote. Where does your eye go first? If the answer is the pebble, do not start fixing yet. Find the visible reason. Usually it is one thing, such as the pebble carrying the only heavy outline on the page.`,
          `Make one revision aimed at that reason, reduce the competing edge, say, and look again from the pavement. One change, one comparison, so you know what did the work. Then keep three things: the finished study, one decision you would make again, and one specific next exercise that the review suggested.`,
          `This is not a test of whether you deserve to draw. It is a check of whether a picture did what you asked of it, which is a question with an answer. References stay welcome for any form you are unsure of. Use your own material or material you have permission for, and when you share, label direct studies as studies.`,
        ],
      },
      {
        title: 'Finishing that forgets the aim',
        paragraphs: [
          `The first failure is polishing everything equally, the scarf as bright as the boots, so the picture has no star. The second is answering a review with more marks: the pebble steals attention, so you add equally heavy outlines to the leaf and cardboard to even things up, or you draw more veins on the leaf hoping it will win. Both pile on without touching the cause, which was one outline too many.`,
          `A third failure is running out of time in the detail. Twelve minutes on paper fibers, then the main value relationship never gets placed. If the clock is going, stop the texture and resolve the big form or the big value first; a finished small picture with a plain pebble beats an unfinished one with a beautiful pebble.`,
          `Two habits. Write the one-sentence aim before you arrange anything, and let every later decision answer to it. And review from the pavement, small and at a distance, naming the visible reason for what you see before you change a single mark.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'An arrangement built around the leaf',
        alt: 'Light from upper left reaches a leaf before folded cardboard, with a darker fold opening and a pebble below.',
        caption: `Find the leaf first and notice what sits directly behind it: the darker fold opening that makes it separate. Then see how the cardboard planes and pebble stay quieter, like props around the boots in a shop window. An original schematic and illustrative value plan, not finished artwork.`,
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
        `Spend about 2 minutes arranging the objects and writing one sentence saying which should be noticed first, with the light kept steady. The sentence is the window dresser's brief, and everything after it answers to it.`,
        `Spend about 2 minutes on two small placement trials and choose one by the sentence, not by which looks neater. Neatness is the scarf; the aim is the boots.`,
        `Spend about 7 minutes constructing the forms, checking the gap between leaf and fold, and placing the broad value groups with no texture. The big relationships decide the picture, so they get most of the time.`,
        `Spend about 2 minutes choosing a few edges and details that help the leaf, and leaving the others quiet. Equal treatment everywhere would mean nothing leads.`,
        `Spend about 2 minutes reviewing the drawing small and at a distance. Write one decision you would keep and one specific next drill the review pointed to.`,
      ],
      notice: `You have a completed small picture paired with a written aim and a review of visible decisions, which is a different thing from a drawing that simply stopped. You can say what the picture was for, what you did to serve that, and what a passer-by sees first.`,
      troubleshooting: `If you find yourself out of time while drawing paper fibers or leaf veins, stop the texture immediately and go back to the main form or the main value relationship. A finished study with a plain pebble and the leaf leading beats a beautiful pebble on an unresolved picture, and the review will be far more useful.`,
    },
    recall: {
      prompt: 'Your next picture uses a shoe and an open box, but the shoe should lead. What decisions would you test first?',
      answer: `Placement, relative size, and value separation, tried in small thumbnails first, then both forms constructed under one chosen light. Before adding any texture to the shoe, look at the picture small and ask whether the box is stealing the window; if it is, find the visible reason, such as its contrast or outline, and turn that down. The sequence transfers; the leaf arrangement does not.`,
      hint: 'Transfer the sequence of decisions, not the leaf arrangement itself.',
    },
    quiz: {
      question: 'The pebble attracts attention first because it has the only heavy outline. Which revision matches the stated aim?',
      options: ['Reduce that competing edge and recheck leaf separation', 'Add equally heavy outlines to all remaining objects', 'Draw more leaf veins before comparing values'],
      correctIndex: 0,
      explanation: `The review found one visible cause, the pebble's lone heavy outline, so the fix that serves the aim is to turn that prop down and then check from the pavement whether the leaf now leads. Giving every object a heavy outline makes the whole window shout equally, and more leaf veins add marks without touching the contrast that was pulling the eye away.`,
    },
    takeaway: 'Finish a small original arrangement, then review a visible choice against the intention.',
    sourceNote: 'Getty design principles and Tate drawing references are inherited. The original arrangement and practice budget make no claim of guaranteed aesthetic results.',
  },
]