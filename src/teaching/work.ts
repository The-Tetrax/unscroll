import type { LessonGuide } from './types'

// Original fictional scenarios. Source links are inherited from each existing lesson.
// Practice times are suggested budgets, not measured learning or productivity effects.
export const workGuides: LessonGuide[] = [
  {
    id: 'work-001',
    title: 'Define the evidence for done',
    outcome: 'Agree what someone could inspect afterward, so a task ends with a verified result instead of a report of effort.',
    scene: 'A junior developer scopes a blank-quantity import defect before starting a patch.',
    sections: [
      {
        title: 'An afternoon is not an acceptance test',
        paragraphs: [
          'Your first ticket on a new team reads, in full: fix the inventory importer. You dig in and find the symptom: a spreadsheet row with an empty quantity cell quietly becomes an item with quantity zero. You spend the afternoon reading the parser, learn a great deal, and at five o\'clock you can honestly report hard work. The requester, meanwhile, expected a working importer by end of day.',
          'Nobody did anything wrong, and the task still went sideways. The missing agreement was never about hours. It was about what another person should be able to look at when you say done. Before touching a line, there is one question to settle: does this task end with a corrected importer, or with an investigation that pins down exactly where the blank turns into a zero? Both are legitimate deliverables. They are not the same deliverable.',
        ],
      },
      {
        title: 'Done is something you can point at',
        paragraphs: [
          'Think of a plumber who says the leak is fixed. You do not take the word for it; you run the tap and look under the sink. Completion evidence is that look under the sink: a claim connected to a check anyone could repeat. The claim blank quantities are rejected needs a blank input, and the rejection it produces, where someone can see it.',
          'Good evidence also checks what must not have changed. A rejected row must not sneak an item into the database anyway, and a perfectly ordinary row with quantity 4 must still import as 4. Those observations describe behavior, which is what the requester cares about, rather than your preferred way of implementing it. Notice how a single screenshot of an error message fails this standard: it shows the message and says nothing about what got stored.',
        ],
      },
      {
        title: 'Write two honest delivery statements',
        paragraphs: [
          'Here is what each version of done looks like written down. For implementation: done means an empty quantity produces a validation error, creates no item, and quantity 4 still imports as 4; the failing fixture and the regression results are included. For investigation: delivered is a synthetic file that reproduces the problem, the exact boundary where blank becomes zero, and any behavior decision that remains open; a fix is not part of this task.',
          'Both sentences hand the next reader something to evaluate. Neither one equates busy with finished. And the second sentence is not a lesser result; a reliable reproduction is often the hardest and most valuable half of a fix.',
        ],
      },
      {
        title: 'Keep open decisions open',
        paragraphs: [
          'One trap hides in this example. Suppose the requester cannot actually say whether a blank should mean zero, reject the row, or ask the user. That is a product decision, and it should be preserved as an open acceptance question, written down and routed to whoever owns it. The quiet alternative is letting whatever the parser does most easily become the requirement by accident, which is how systems acquire rules nobody chose.',
          'Two boundaries round this out. Demanding a patch from a task agreed as exploration silently changes its scope; renegotiate out loud instead. And this is a planning habit, not a productivity guarantee: it will not make the work faster, but it will make done mean the same thing to both people, which is where most end-of-day disappointments actually come from.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two quantities, two required outcomes',
        alt: 'An empty quantity must show an error and create no item; quantity 4 must create an item with quantity 4.',
        caption: 'Check both halves of each row: the message the user sees and the record that gets stored. One error screenshot covers only the first half of acceptance. Fictional importer.',
        items: [
          { label: 'Empty quantity', detail: 'Validation error; no inventory item created.' },
          { label: 'Quantity 4', detail: 'Import succeeds; stored quantity is 4.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a notes editor'],
      steps: [
        'Write the fictional task, fix the inventory importer, and decide which deliverable it is: investigation or implementation. Writing the choice down is the step most people skip.',
        'List the two inputs, empty quantity and quantity 4, and for each write both the message expected and the stored outcome expected. Two columns per row, because a screenshot only ever shows one.',
        'Draft your completion sentence naming the evidence you would hand over: the fixture, the observed results, the preserved behavior. If the sentence mentions hours or effort, delete those words.',
        'Add one unresolved decision, such as whether blank should mean zero, and a one-line question asking the requester to confirm it before any implementation starts.',
      ],
      notice: 'A reader of your statement can tell whether you are promising a verified behavior change or a completed investigation, and can see what they would inspect to check either one.',
      troubleshooting: 'If your statement just says tested, it is not evidence yet. Name the input, the observable result, and the state that must remain unchanged; those three turn a word into a check.',
    },
    recall: {
      prompt: 'A teammate asks you to investigate why some customers receive duplicate reminder emails. What could count as done without promising a fix?',
      hint: 'Pick an inspectable investigation output, and keep the cause separate from the symptom.',
      answer: 'Done can be a synthetic sequence of events that reliably produces the duplicate, the observed point in the sending path where the second email is created, and a short list of unresolved candidate causes. State plainly that implementation is a separate task. A repeatable trigger is a real deliverable even before anyone knows why it happens; it is the thing the eventual fix will be tested against, and it is far more useful than an afternoon of reading summarized as looked into it.',
    },
    quiz: {
      question: 'An image-upload investigation ends with a repeatable failure but no diagnosis. Which handoff matches an investigation-only agreement?',
      options: [
        'Mark the feature fixed, since the failure is now understood well enough to reproduce.',
        'Provide the fixture, the observed failure, and the open hypotheses, without claiming a fix.',
        'Keep the result private until an implementation can accompany it.',
      ],
      correctIndex: 1,
      explanation: 'The fixture and the open questions are exactly what an investigation promised to deliver, and they let the next person start from evidence rather than from scratch. Reproducibility is not a fix, so calling it fixed overclaims, and sitting on a working reproduction until a patch exists hides the most useful progress made so far.',
    },
    takeaway: 'Agree which deliverable the task is, then name what someone could inspect to confirm it. Done is a look under the sink, not a timesheet.',
    sourceNote: 'The inherited review guidance supports checking intended behavior and tests. This completion agreement is an original planning heuristic, not a measured productivity intervention.',
  },
  {
    id: 'work-002',
    title: 'Learn one request path',
    outcome: 'Follow a single input through an unfamiliar system and mark the exact spot where your understanding stops.',
    scene: 'A new contributor maps a fictional library catalogue search rather than memorizing folders.',
    sections: [
      {
        title: 'Start with one search',
        paragraphs: [
          'You join a small library-catalogue project and someone hands you the architecture diagram: twelve boxes, twelve names, arrows everywhere. You read it twice. Then a bug report arrives: searching for atlas with a space on either side returns nothing. The diagram is no help at all, because knowing twelve component names tells you nothing about what happens to a query with stray spaces.',
          'So throw away the ambition of understanding the whole system today and pick one input as your guide. In this fictional catalogue, the search box sends the text with its spaces, a request handler strips them, a catalogue lookup turns the clean word into a book identifier, and the page renders a title. One value, four handoffs. That is a story you can follow, and a story beats a map when you are new.',
        ],
      },
      {
        title: 'Every handoff has an in and an out',
        paragraphs: [
          'Think of a parcel passing through a courier network. At each depot it is scanned in and scanned out, and if it goes missing, the scans tell you between which two depots it vanished. A boundary in a system is a depot: a handoff between two pieces. At each one, write down what goes in, what comes out, and where you could actually observe it.',
          'One transformation deserves its own name because it hides so well. Normalization means putting equivalent inputs into one standard form, such as trimming surrounding spaces or lowercasing. Somewhere between the box and the lookup, atlas with spaces becomes plain atlas, and the whole bug lives in the question of where. Never assume a component normalizes just because it would be sensible. Mark each transformation as observed, documented, or unknown. A tidy arrow on a diagram can hide precisely the gap you were sent to find.',
        ],
      },
      {
        title: 'Walk the atlas request',
        paragraphs: [
          'Write the trace as values, not names. Box: space, atlas, space. Handler: atlas. Lookup: book B7. View: Atlas of Rivers. Now be honest about what you can actually see. Suppose you can confirm the browser sends the spaced text, and you can confirm the page shows the title, but you cannot see what the handler passes to the lookup. That is the depot without a scan.',
          'Mark it: trimming location unknown. The map now has a hole with a precise address, which turns into a precise question: which function owns trimming, and which test shows the lookup receiving plain atlas? Someone on the team can answer that in thirty seconds without explaining the other eleven components to you.',
        ],
      },
      {
        title: 'One path at a time',
        paragraphs: [
          'The temptation after one clean trace is to declare the system understood. Resist it; you understand one path. The next inputs to follow are the awkward ones: an empty query, a book that does not exist, a word with an accent. Each tends to cross a boundary the happy path never touched, and each adds a scan to your courier map.',
          'Two habits make this method keep working. Keep writing values on the arrows, never just component names, because names are what the diagram already failed to teach you with. And keep the unknowns labeled as unknowns rather than filling them with how systems usually work. A typical design is a hypothesis. A question mark at the right depot is evidence of where to look next.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The atlas request',
        alt: 'Whitespace is removed before atlas reaches a lookup returning B7 and the title Atlas of Rivers.',
        caption: 'Read the value changing at each handoff, and ask at which arrow the spaces disappear; that arrow is the one the bug report is about. Infrastructure outside the four boundaries is omitted.',
        items: [
          { label: 'Search box', detail: 'Query contains a space before and after atlas.' },
          { label: 'Handler', detail: 'Normalized lookup input: atlas.' },
          { label: 'Catalogue lookup', detail: 'Returns book identifier B7.' },
          { label: 'Results view', detail: 'Displays Atlas of Rivers.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The fictional atlas trace above'],
      steps: [
        'Draw four boxes in a row, search box, handler, lookup, view, with generous gaps between them. The gaps are where the real information goes.',
        'Copy the value crossing each gap from the example, including the surrounding spaces on the first one. Values on arrows, never just names; that is the whole discipline.',
        'Now pretend the handler\'s output is invisible to you. Replace that value with a question mark, and notice how much more honest the map just became compared with writing probably atlas.',
        'Write the one help request the question mark produces: which function owns the trimming, and which test or document shows the lookup receiving plain atlas? That is a thirty-second question for a teammate.',
      ],
      notice: 'Your unknown now has an address, an input on one side, and a specific question attached, so help can arrive without anyone having to explain the whole system to you.',
      troubleshooting: 'If your arrows carry only names like handler and lookup, you have redrawn the diagram that already failed you. Put the actual query or result on each arrow, even when it is a guess marked as a guess.',
    },
    recall: {
      prompt: 'A training-expense form shows the right total on screen but exports the wrong total to a spreadsheet. Where would you start a boundary map?',
      hint: 'Follow one amount down the export path, not every page in the application.',
      answer: 'Pick one synthetic amount, say 12.50, and trace it from the form\'s state through the export transformation into the exported cell, writing the value at each handoff. The map wants the first depot where the number or its unit differs from 12.50. The on-screen display path is useful as comparison evidence, since it clearly works, but it does not prove the export uses the same transformation; often the bug is exactly that the two paths diverged somewhere, and the trace shows you the depot where they did.',
    },
    quiz: {
      question: 'You can observe a request and its response, but you cannot inspect an intermediate cache between them. What should your map show?',
      options: [
        'A marked unknown at the cache boundary, plus the observation that would resolve it.',
        'The most common caching design, drawn as though this system uses it.',
        'Only the response, since incomplete maps cannot support questions.',
      ],
      correctIndex: 0,
      explanation: 'The labeled gap is the most useful thing on the map, because it points a precise question at the right place. Drawing a typical design fills the hole with a hypothesis dressed as a fact, and throwing away the boundaries you did observe discards real evidence to avoid admitting one unknown.',
    },
    takeaway: 'Follow one concrete value through the handoffs, write what it becomes at each one, and label the exact depot where your explanation stops.',
    sourceNote: 'Effective Troubleshooting discusses system knowledge and observable interfaces. The catalogue trace is an original simplified learning exercise, not documentation of a real application.',
  },
  {
    id: 'work-003',
    title: 'Keep an explicit active-work limit',
    outcome: 'Count work that is waiting on someone else as still yours, so a new request gets a real decision instead of a reflex yes.',
    scene: 'An early-career engineer balances a review, a setup guide, and a new dashboard request.',
    sections: [
      {
        title: 'The review will come back',
        paragraphs: [
          'Your parser change is sitting in review. Your setup guide is half written. And now a colleague leans over: could you tweak the dashboard this morning? The parser feels gone, out of your hands, so the dashboard looks like a second task alongside the guide. You say yes.',
          'Then at eleven, the review comments land: three requested changes and a question about an edge case. Now you are editing the dashboard, owing a reply on the parser, and the guide is cold. Three unfinished commitments are competing for your testing, your explanations, and your attention. Nothing was mis-estimated. The waiting work simply vanished from the moment you decided whether to take on more.',
        ],
      },
      {
        title: 'Plates in the air, not plates in your hand',
        paragraphs: [
          'Picture a plate spinner. A plate on a pole is not in their hands, but it is absolutely still their plate: it will wobble, and when it does, it needs them. Work waiting on a reviewer, a reply, or an approval is a spinning plate. No effort right now, a certain claim on your attention later.',
          'Two separate tools handle this. The first is state: label each commitment as doing, waiting, or ready for handoff, so you can see at a glance where it stands. The second is a limit: a provisional cap on how many unfinished commitments you hold at once, counting the waiting ones. In this example the limit is two; that number is a starting guess for this role, not a rule for all roles. The limit\'s only job is to force a question at intake: which current plate finishes, pauses by agreement, or moves before a new one goes up?',
        ],
      },
      {
        title: 'Make the next choice visible',
        paragraphs: [
          'Write the three plates down with their state and their next action. Parser: waiting for review; respond when feedback arrives. Setup guide: doing; next output is the tested installation section. Dashboard: queued, not started. Two unfinished against a limit of two. The guide gets the next work block, and the dashboard gets an honest reply instead of a reflex.',
          'That reply sounds like: I can take the dashboard after the guide handoff, or we can agree to pause the guide if this is more urgent. Notice what the reply does. It names a start condition, it puts the trade-off in front of the person who asked, and it never pretends capacity exists that the review comments will consume at eleven.',
        ],
      },
      {
        title: 'Exceptions, recorded',
        paragraphs: [
          'Sometimes both current plates are genuinely blocked by other people and a short independent task would be sensible. Take it, but record the exception: what you started, what is still waiting, and how the returning work will be prioritized when the replies arrive. The failure is not breaking the limit; it is breaking it silently and re-promising the same hours twice.',
          'Two boundaries keep the tool honest. The limit cannot settle organizational priorities for you; when everything is labeled urgent, the move is to find the person who owns the ordering, not to invent a larger capacity. And review the number against reality: an interrupt-heavy support role may need a different limit, or reserved capacity, rather than a fixed two. Waiting changes when effort is needed. It never changes whether the commitment is yours.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two ways to count this queue',
        alt: 'Typing-only planning counts the guide; unfinished-work planning also counts the parser review, leaving the dashboard queued.',
        caption: 'Compare which commitments each count includes before accepting the dashboard: the parser review is the plate the first count forgot. Two is a provisional limit, not a universal one.',
        items: [
          { label: 'Typing-only count: 1', detail: 'Guide counted; parser review forgotten; dashboard appears to fit.' },
          { label: 'Unfinished count: 2', detail: 'Guide plus parser review counted; dashboard needs a deliberate trade-off.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Three paper task cards or a notes editor'],
      steps: [
        'Make three cards: parser review, setup guide, dashboard request. Label each with a state, doing, waiting, or queued. The parser card is the test: it is waiting, and it still counts.',
        'On each card write the remaining action and what it depends on. The parser card\'s action is respond to review feedback, which is real future work even though nothing is due this minute.',
        'Apply a provisional limit of two unfinished commitments and choose the next work block. With guide and parser both unfinished, the dashboard stays queued; write that down as a decision, not a default.',
        'Draft the reply to the requester offering two real options: a later start after the guide handoff, or an agreed pause of the guide. Either option puts the trade-off where it belongs.',
      ],
      notice: 'The waiting review stays visible on your desk, and the new request has a start condition rather than an invisible promise that review comments will break at eleven.',
      troubleshooting: 'If every card is marked urgent, the limit cannot help, and inventing capacity will not either. Write down who owns the priority call and take the three cards to them.',
    },
    recall: {
      prompt: 'You staff an interrupt-driven help queue, and a fixed two-task limit is simply unrealistic. What part of the idea survives?',
      hint: 'The number is adjustable; the visibility of unfinished work is not.',
      answer: 'Keep the two underlying moves and drop the specific number. Every interrupted task still gets a written next action, so it does not quietly become a forgotten plate. Reserve explicit capacity for interrupts, so planned work is sized around what the queue actually consumes. And agree in advance which planned item moves when interrupts spike, so the trade-off is decided once rather than renegotiated in the moment. Two was never the point; seeing all your plates was.',
    },
    quiz: {
      question: 'Both of your current tasks are waiting on external decisions, and a short independent task arrives. Which response fits an explicit work limit?',
      options: [
        'Reject it automatically, because a personal limit can never flex.',
        'Start it, and mark both waiting tasks complete for planning purposes.',
        'Record an exception, the waiting dependencies, and how the returning work will be prioritized.',
      ],
      correctIndex: 2,
      explanation: 'The limit exists to force deliberate choices, and a recorded exception is exactly that: the plates stay visible and the hours are not promised twice. Automatic refusal mistakes a planning tool for a rule, while marking blocked work complete is the original mistake, deleting plates from the count because they are not in your hands this minute.',
    },
    takeaway: 'Count the spinning plates, not just the one in your hands. Waiting changes when the effort is due, never whether the work is yours.',
    sourceNote: 'Small CLs supports manageable changes. This original queue-limit heuristic has no source-prescribed number or guaranteed effect.',
  },
  {
    id: 'work-004',
    title: 'Ask a question with a useful boundary',
    outcome: 'Write a help request that hands someone one answerable question, with the example and the gap already identified.',
    scene: 'A contributor asks why a username passes the form but is rejected by a fictional service.',
    sections: [
      {
        title: 'Show the mismatch',
        paragraphs: [
          'On a training project, the account form happily accepts the username sam followed by a trailing space. Submit it, and the service answers: invalid username. Plain sam, without the space, sails through. You have found something real, and your first instinct is to type: the account page is broken, any ideas?',
          'Look at what that message asks of its reader. They must reconstruct what the page was supposed to do, guess what you tried, and work out what kind of help you even want. Most people, reasonably, will not. The fix starts with leading with the mismatch itself: the form treats the spaced value as valid, the service rejects it, and here is the tiny pair of inputs that shows it. You have done the hard part already; the message just needs to say so.',
        ],
      },
      {
        title: 'Two kinds of gap',
        paragraphs: [
          'A mechanic can only help if you say whether you want the rattle diagnosed or the rattle fixed. Help requests have the same fork. A knowledge gap means a rule exists and you cannot find where it lives: where is trimming implemented? A decision gap means no rule exists yet: should usernames be trimmed, or should spaces be rejected? That second gap is a product decision, and no amount of further debugging will produce it.',
          'Telling the two apart changes everything about who should answer and what they should say. Include what you checked, briefly, so the helper does not repeat it: plain sam succeeds; the spaced version passes the form and fails on submit; I found no trimming in the form rule. Then stop. Three lines of evidence is a report. Three pages is a diary, and diaries get skimmed.',
        ],
      },
      {
        title: 'A message someone can answer',
        paragraphs: [
          'Assemble it. Expected: the form and the service agree on what counts as a valid username. Observed: sam succeeds; sam followed by one space passes the form but fails submission. Checked: the form rule, which contains no trimming. Question: is trimming required, or should the form reject surrounding spaces? Please point me to the contract or to whoever owns it.',
          'Read that from the helper\'s side. If a rule exists, they can paste the link. If none exists, they can route the decision to the right person. Either way, the message gave them one answerable thing, and it never asked them to inspect your feelings about the account page.',
        ],
      },
      {
        title: 'When to stop investigating and ask',
        paragraphs: [
          'A common misreading of this skill is that you must suffer for hours before earning the right to ask. You do not. The standard is a bounded question, not a bruised ego: one clear mismatch and one check is plenty. And if the next step needs access you lack, a log you cannot read, a system you cannot log into, say so immediately and use the normal request process. Collecting more unrelated screenshots never produced authorization.',
          'One last habit: do not let the question quietly contain your preferred answer. Should I add trimming here? assumes trimming is the contract, which is the very thing you do not know. Ask what the rule is, not whether your fix is right. The second question feels efficient and tends to get a polite yes from someone who did not actually know either.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A bounded validation question',
        alt: 'A developer reports the trailing-space mismatch and asks who owns the trimming or rejection rule.',
        caption: 'Notice the order: the mismatch first, then the rule question, then the owner. The developer never proposes a fix before the contract is confirmed. Fictional exchange.',
        items: [
          { label: 'Developer', detail: 'sam works; sam plus a space passes the form but fails submission.' },
          { label: 'Reviewer', detail: 'Does the username contract require trimming or rejection?' },
          { label: 'Developer', detail: 'I could not find that rule. Who can confirm it before I change validation?' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a draft message'],
      steps: [
        'Write the two inputs, sam and sam with a trailing space, and beside each what the form did and what the service did. A two-by-two of inputs and outcomes is the smallest complete picture of a mismatch.',
        'Write one expected-behavior sentence that describes agreement, not a solution: the form and service should agree on validity. If your sentence contains the word trim, it has smuggled in a fix.',
        'Add the single check you performed and then classify the remaining gap out loud: is a rule hiding somewhere, knowledge, or does no rule exist yet, decision?',
        'Finish with one answerable question and the thing you need, a link or a name. Keep it as a practice draft; the point is the shape, not sending it.',
      ],
      notice: 'A reader can answer your draft in one reply without first asking which input failed, what you already tried, or what kind of help you want. Those three questions are what unbounded messages cost.',
      troubleshooting: 'If the draft ends in any thoughts?, it has no target yet. Replace it with the exact rule, observation, or approval you need; the vaguer the closing line, the longer the wait.',
    },
    recall: {
      prompt: 'A report rounds 1.5 hours up to 2, and a stakeholder expected to see 1.5. What should your help request establish first?',
      hint: 'A surprising result is not automatically a broken rule.',
      answer: 'Establish which kind of gap you are in before anyone calls it a bug. Show the input, 1.5, and the output, 2, then ask: what precision does the report\'s contract require? If a rule says half-hours are preserved, this is a knowledge gap and the fix is a defect to locate. If nobody ever agreed on precision, it is a decision gap, and the right move is to route that decision to the report\'s owner rather than treating the current rounding as wrong by assumption. Same mismatch, two very different next steps.',
    },
    quiz: {
      question: 'You have a repeatable mismatch but cannot find any specification of the intended behavior. What is the most useful final sentence of your message?',
      options: [
        'Can someone confirm the intended behavior, or identify the person authorized to decide it?',
        'Can someone confirm that my preferred fix is correct before I write it?',
        'Can someone explain the whole service so I can infer the intended behavior?',
      ],
      correctIndex: 0,
      explanation: 'That sentence works whether a rule exists or not: it fetches the contract if there is one and routes the decision if there is not. Asking for blessing on your fix presumes the contract you are missing and invites a polite guess, while requesting a tour of the whole service asks for far more than the one missing decision and usually gets nothing.',
    },
    takeaway: 'Lead with the mismatch, name the gap as knowledge or decision, and end with one answerable question. Ask early; ask bounded.',
    sourceNote: 'Effective Troubleshooting supports reproducible problem reports. This original message structure is a communication heuristic, not a tested response-time promise.',
  },
  {
    id: 'work-005',
    title: 'Leave a reproducible result',
    outcome: 'Record a test result with enough setup and limits that a stranger can tell exactly what it proves and what it does not.',
    scene: 'A tester documents a synthetic CSV export containing a comma inside a team name.',
    sections: [
      {
        title: 'PASS leaves the setup behind',
        paragraphs: [
          'You test the CSV export on a demo build, it looks right, and you attach a screenshot with PASS written across it. Job done. Tomorrow a colleague opens a different export in a spreadsheet and finds a team name split across two columns. Now there are two results that seem to contradict each other, and nobody can tell whether they actually do.',
          'Did your test use names without commas? A different build? A different import setting? The screenshot cannot say, because PASS is an answer with its question thrown away. A result is only reusable when it keeps its conditions attached: the build, the input, what you expected, what you saw, and how you looked. Without those, the next person cannot even tell whether you were both looking at the same case.',
        ],
      },
      {
        title: 'A recipe, not a review',
        paragraphs: [
          'Think of the difference between a restaurant review that says delicious and a recipe. The review tells you someone was happy. The recipe tells you what they cooked, with what, at what temperature, so you can cook it again and compare. A good test record is a recipe. PASS is a review.',
          'Build the recipe from an invented fixture: two data rows with columns name and team. Ada belongs to North, West, with a comma inside the team name; Bo belongs to East. That comma is the whole point. In CSV, a comma inside a field has to be quoted, so counting commas in the exported text proves nothing about columns. And looking at the raw text is a different observation from opening the file in a spreadsheet, whose importer applies its own delimiter and encoding settings. Record which one you did, and the relevant settings, such as comma delimiter and UTF-8.',
        ],
      },
      {
        title: 'A result that travels',
        paragraphs: [
          'Here is the recipe written out. Demo build export-7. Synthetic input: two data rows; Ada in North, West and Bo in East. Expected: two columns, two data rows, the comma retained inside Ada\'s team. Actual: the fixture parser returns those fields exactly. The header is excluded from the row count. Evidence: the saved fixture and the parsed output. Not tested: spreadsheet applications or alternate delimiters.',
          'Now the colleague\'s spreadsheet finding has somewhere to go. It does not contradict your result; it extends it. They can add their application version and import settings as a new row of evidence, and the two records together say more than either alone. Your narrower claim survives because it was never overstated.',
        ],
      },
      {
        title: 'The limits are part of the result',
        paragraphs: [
          'The line that feels least important, not tested, is often the most valuable. It is the fence around what the evidence supports. A text-level parser test says the export produced correct fields under those conditions; it says nothing about how twelve different spreadsheet importers will guess at delimiters, and it certainly does not prove a colleague\'s split column came from user error.',
          'Two habits keep records honest. Never write works everywhere; replace it with the specific parser or application you used and its settings, because everywhere is a claim no single test can earn. And preserve the artifact, the actual fixture and output, not just a picture of a green word. The artifact is what lets someone rerun the recipe. The picture is what lets them take your word for it, which is exactly the situation that caused the confusion.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Same file, different parsing outcomes',
        alt: 'Ada and North, West should form two fields; faulty splitting turns that row into three fields.',
        caption: 'Look at the team boundary, not the comma count: the fixture has two columns, and the faulty split turns Ada\'s single team into two fields. Fictional fixture.',
        items: [
          { label: 'Expected: 2 fields', detail: 'name = Ada; team = North, West.' },
          { label: 'Faulty split: 3 fields', detail: 'Ada, North, and West become separate fields.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper or a notes editor', 'The two synthetic rows above'],
      steps: [
        'Write out the fixture: a header row with name and team, then Ada with North, West and Bo with East. Mark the header separately from the two data rows, because row counts go wrong at exactly this point.',
        'Draft the record as a recipe: build export-7, the fixture parser as the method, the expected fields, and the actual fields reported. Each item is something a stranger could rerun or compare.',
        'Name the artifact you would save: the fixture file plus the parsed output. Then compare it with a PASS screenshot and notice which one lets someone check your work tomorrow.',
        'Write the not-tested line: spreadsheet import was not covered. Then list what that test would additionally need, an application version and its import settings, so the next person can add it instead of arguing with you.',
      ],
      notice: 'A reader can tell whether your claim is about CSV generation, one specific parser, or one spreadsheet import, and can see precisely where someone else\'s evidence would slot in.',
      troubleshooting: 'If your record says works everywhere, you have written a review. Replace it with the exact parser or application you observed and its relevant settings; a recipe names its oven.',
    },
    recall: {
      prompt: 'A colleague reports that a keyboard shortcut worked once, during a session about a focus-related bug. What would make that result reusable?',
      hint: 'Which element had focus and which keys were pressed can change what the same shortcut does.',
      answer: 'Turn the review into a recipe. Record the build and browser, which element had keyboard focus at the moment of the shortcut, the exact key combination, the action expected, and the action observed, then keep a setup someone can repeat. Add the fence: other focus positions were not tested. Focus bugs are precisely the kind where one success in one position says nothing about the field two tabs away, so the untested line is what stops a single green result from being read as the whole page working.',
    },
    quiz: {
      question: 'An export passes a text-level parser test. Which claim does that evidence support without anything further?',
      options: [
        'Every spreadsheet will select the correct delimiter automatically.',
        'The specific fixture parsed into the expected fields under the recorded setup.',
        'The reported spreadsheet split must have come from user error.',
      ],
      correctIndex: 1,
      explanation: 'The test earns exactly its recipe: this fixture, this parser, these settings, these fields. Spreadsheet importers are a separate boundary the test never crossed, so it can neither promise they all behave nor blame a colleague for what one of them did. Narrow claims are the ones that stay true when new evidence arrives.',
    },
    takeaway: 'Write results as recipes, not reviews: setup, input, expected, actual, method, and the honest line about what was not tested.',
    sourceNote: 'The inherited troubleshooting and review references support inspectable tests. This CSV fixture and evidence record are original examples, not reported compatibility measurements.',
  },
  {
    id: 'work-006',
    title: 'Describe the problem before the tool',
    outcome: 'Open a proposal with the decision someone cannot make, so the cheapest fix stays on the table next to the exciting one.',
    scene: 'A contributor proposes a test dashboard before discovering that reports already contain the needed failure stage.',
    sections: [
      {
        title: 'A dashboard is an answer to something',
        paragraphs: [
          'Reviewers on your project keep asking the same question in chat: which stage failed first? You decide to fix that properly, with a new test dashboard. You sketch a mockup, color-coded stages across the top, and it looks great. People start discussing which charting library to use. Something important just happened without anyone noticing: the conversation committed to building a new thing before anyone said what problem the thing solves.',
          'Back up to the reviewer\'s actual moment. They are staring at a failed run and deciding one thing: rerun it, or go investigate an earlier setup problem? That decision needs the first failing stage. Now look at the current report: the stage is in there, just buried under three later errors. The missing capability might be presentation, not data. And a presentation fix is a morning; a dashboard is a service someone maintains for years.',
        ],
      },
      {
        title: 'Who cannot do what, under which conditions',
        paragraphs: [
          'A good problem statement is like a doctor\'s note that describes the symptom before naming the surgery: it says who cannot do what, under which observed conditions, and it keeps the outcome separate from any mechanism for reaching it. Patient cannot climb stairs without pain is a problem. Patient needs a knee replacement is one proposed tool, and possibly the wrong one.',
          'Ground it in one real run. In the fictional example, setup fails because a fixture is missing, so the test stages never execute. The report prints the last error first, a summary complaining the run was incomplete. A reviewer reads that line, assumes a flaky test, and requests a pointless rerun. That single run is enough to motivate investigating report order. Be careful what it is not enough for: it does not tell you how often this happens or how many hours a dashboard would save. Those are separate claims needing their own observations, and proposals love to smuggle them in.',
        ],
      },
      {
        title: 'Open the proposal without a product name',
        paragraphs: [
          'Try this opening: reviewers deciding whether to rerun need the first failing stage and its evidence. In the sample run, setup failed before any tests began, but the report leads with a later summary error. We need readers to distinguish a setup failure from an executed test failure. Not one word about dashboards.',
          'Now the alternatives can line up fairly: move the first failure to the top of the existing report; add a short linked summary; or build the separate dashboard. The cheapest next check costs an hour: revise the report on paper using the same run, hand it to a reviewer, and ask them to name the failing stage and explain how they knew. If they get it right from a reordered report, you have learned something a mockup could never tell you.',
        ],
      },
      {
        title: 'The test of a good problem statement',
        paragraphs: [
          'Here is the test: delete every tool from your proposal and see whether it still says anything. The dashboard version collapses to nothing. The problem version still stands, and it would survive a decision to fix the report instead, which is exactly the property you want, because the decision is not yours to pre-make.',
          'Two boundaries keep this honest. A problem statement is not a ban on building things; sometimes the dashboard really is the right answer, and it will win the comparison on merit. And resist dressing up the statement with invented numbers, reviewers lose two hours a week, unless you measured them. One well-described run is strong evidence for investigating. It is weak evidence for a budget.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'What happened in the sample run',
        alt: 'Setup fails, tests are skipped, and a later summary reports the incomplete run.',
        caption: 'Read the events in order and notice that the message printed last is not the failure that happened first. Fictional event order, not elapsed time.',
        items: [
          { label: 'Setup', detail: 'Required fixture is missing; first failure occurs here.' },
          { label: 'Test execution', detail: 'Skipped because setup did not complete.' },
          { label: 'Final summary', detail: 'Run incomplete; printed last, but not the originating failure.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'The fictional run sequence above'],
      steps: [
        'Write build a dashboard at the top of the page, then cross it out and replace it with three things: who the reviewer is, which decision is blocked, and what information is missing. The crossing-out is the exercise.',
        'Add the setup-failure run as your supporting evidence, described exactly as it happened. Resist writing how often it happens or how much time it costs; you have one run, and one run supports investigation, not estimates.',
        'Sketch a revised report heading that names setup as the first failure and marks test execution as skipped. Keep it to a few lines; this is the one-hour alternative.',
        'List one more alternative implementation and write the single question that would distinguish it from your preference, such as: can a reviewer name the failing stage from the reordered report alone?',
      ],
      notice: 'Your problem statement still makes complete sense if the team decides to fix the report instead of building a dashboard. That survivability is the mark of a statement about the problem rather than about your favorite solution.',
      troubleshooting: 'If removing the tool name leaves nothing on the page, you have described a solution looking for a problem. Go back to the reviewer\'s moment and write the decision they were trying to make.',
    },
    recall: {
      prompt: 'Someone proposes a chatbot for new starters who cannot find the equipment-request instructions. What belongs in the problem statement?',
      hint: 'Name the task and the missing information before choosing a conversation interface.',
      answer: 'The statement should say who is stuck, a new starter, on which task, requesting equipment, and what exactly is missing: perhaps the instructions exist but omit the approval step, or name no owner, or sit three clicks below a page nobody visits. Once that gap is described, a clearer page, better navigation, a one-line pointer in the welcome email, and a chatbot are all candidates, and the cheapest one gets a fair hearing. The chatbot might still win. It just should not win by being the only thing anyone wrote down.',
    },
    quiz: {
      question: 'A sample report already contains the value reviewers need, but they keep overlooking it. Which first check fits the evidence?',
      options: [
        'Choose a storage platform so the new dashboard has an architecture.',
        'Estimate time savings from the number of pages a dashboard could replace.',
        'Test whether making that value prominent lets reviewers make the decision.',
      ],
      correctIndex: 2,
      explanation: 'The observed gap is that existing information is hard to find, so the matching check is whether prominence fixes it, a one-hour experiment with a reordered report. Picking storage commits to infrastructure before the problem is confirmed, and a savings estimate built from page counts measures nothing anyone has observed.',
    },
    takeaway: 'Write the blocked decision first and let the tools compete for it. A proposal that survives deleting its product name is describing a real problem.',
    sourceNote: 'Simplicity and review guidance inform current requirements. This original report-redesign exercise is a proposal heuristic, not a measured usability finding.',
  },
  {
    id: 'work-007',
    title: 'Compare alternatives on the same criteria',
    outcome: 'Put your favorite option and the current one through identical questions, and let the unknowns tell you what to check next.',
    scene: 'A documentation maintainer compares a generated release-note page with a hosted search service.',
    sections: [
      {
        title: 'Compare two real options',
        paragraphs: [
          'Your project publishes release notes as a plain generated page, and you have fallen a little in love with a hosted search service that offers version filters. The proposal almost writes itself: the service, described by its best features, versus the page, described by its frustrations. Read that draft back and notice what it is: a sales pitch with a straw opponent.',
          'The current page has real properties the pitch forgot. It works offline. It has a named maintainer. It costs nothing to run. The service may genuinely search better, but somebody will have to own its index when it drifts. A fair comparison keeps the current approach in the ring as an actual contender, not as a sparring partner hired to lose.',
        ],
      },
      {
        title: 'Same questions for every candidate',
        paragraphs: [
          'Think of interviewing two job candidates. If you ask one about their strengths and the other about their weaknesses, the interview is theatre. The fix is a fixed question list asked of both. For a design comparison, the questions are criteria tied to the actual task: finding a release note by version, offline availability, implementation effort, and who maintains it afterward.',
          'Two rules keep the scoring honest. First, only evidence counts: a feature demonstrated in a working prototype is evidence, while a beautiful mockup is a promise about indexing that nobody has tested. Second, do not invent numbers to get a total. Writing maintenance: 9 out of 10 beside a guess does not make it less of a guess; it just hides the guessing inside arithmetic. If offline reading is a requirement, treat it as a gate an option must pass, not a point that three attractive filters can outvote.',
        ],
      },
      {
        title: 'Fill the table with what you actually know',
        paragraphs: [
          'Here is the honest table. Generated page: version headings exist; the offline package works in the training fixture; the owner is the documentation role; adding a version index needs an estimate. Search service: version filters appear in the prototype; offline behavior is unknown; index owner is unknown; integration effort is unestimated.',
          'Notice how many cells say unknown, and resist the urge to declare a winner anyway. Unknown is not zero and it is not failure; it is a question with a name. If offline access is required, the next step writes itself: ask for a disconnected prototype test, or get an explicit decision that offline is out of scope. And if a small version index would let the page meet the need, add that improved page as a third column. The best option is sometimes the current one with one more feature.',
        ],
      },
      {
        title: 'Let the gaps schedule the work',
        paragraphs: [
          'A comparison table\'s real output is not a verdict. It is a prioritized list of checks: which unknown, if it came out badly, would eliminate an option? That is the check to run first. Here, the service\'s offline behavior is that unknown, because a failed offline test ends the discussion regardless of how good the filters are.',
          'Two boundaries round this off. The method does not forbid preferring one option; it forbids pretending the preference is a result before the evidence exists. And when a reviewer notices that one column has only benefits, that is not an insult to the proposal; it is a request for the upkeep and compatibility rows that every real option carries. Fill them in with questions, not invented costs.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Release-note access and ownership',
        alt: 'The page has known offline access and ownership; the search prototype has filters but unresolved access and ownership.',
        caption: 'Count the unknowns in each column before counting the features: the service has two unresolved gates. Unknown means a check is needed, not that the option fails. Fictional assessments.',
        items: [
          { label: 'Generated page', detail: 'Offline: demonstrated in fixture. Owner: documentation role. Index effort: unknown.' },
          { label: 'Search service', detail: 'Offline: unknown. Owner: unknown. Version filter: shown in prototype.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper ruled into a comparison table'],
      steps: [
        'Rule a table with two columns, generated page and search service, and four identical rows: find by version, offline availability, implementation effort, maintenance owner. Identical rows are the whole discipline.',
        'Fill in only what the scenario actually supplies as evidence. Wherever there is no observation or estimate, write unknown in full. Do not fill a gap with probably fine or a score.',
        'Mark offline reading as a requirement, a gate rather than a preference, and circle the unknown that must be resolved before the service can even be eligible.',
        'Write a recommendation that is explicitly conditional: if the disconnected prototype works and an index owner is named, then compare further; otherwise the improved page leads. Conditions are what honest recommendations are made of.',
      ],
      notice: 'Both options answered the same four questions, the unknowns are visible instead of averaged away, and your next action is a specific check rather than a verdict.',
      troubleshooting: 'If one column shows nothing but benefits, you have written a pitch. Add its upkeep and compatibility rows as questions; you are not inventing costs, you are admitting you have not asked yet.',
    },
    recall: {
      prompt: 'You are comparing two date-parsing libraries, but only your favorite has been tried with invalid dates. How should the comparison change?',
      hint: 'An untested option has not been shown to fail, and it has not been shown to succeed either.',
      answer: 'Run the same fixtures through both: the valid dates and the same set of invalid ones, recording for each library what it accepted, rejected, or mangled. Any case you did not run gets written as untested, not assumed from reputation in either direction. Add the rows reputation tends to hide, maintenance activity and which input formats each library accepts, and apply them to both. The point is that the second library should get the same interview, not a shorter one because you had already picked.',
    },
    quiz: {
      question: 'An option satisfies several preferences, but how it behaves under a mandatory constraint is unknown. What should the proposal do?',
      options: [
        'Average the unknown into a neutral score so a total can be calculated.',
        'Identify a check for the constraint before treating the option as eligible.',
        'Drop the constraint from the comparison until the option has a fuller prototype.',
      ],
      correctIndex: 1,
      explanation: 'A mandatory constraint is a gate, and a gate cannot be passed by accumulating unrelated preferences or by averaging ignorance into a middle score. The unknown is a named check to run first, since a bad result eliminates the option outright. Removing the constraint to help the option through is grading the exam by deleting the question it might fail.',
    },
    takeaway: 'Ask every option the same questions, write unknown where you do not know, and run the check that could eliminate a candidate before admiring its features.',
    sourceNote: 'The inherited Simplicity chapter informs complexity trade-offs. This comparison method and release-note scenario are original heuristics, not a validated scoring model.',
  },
  {
    id: 'work-008',
    title: 'Test the assumption that could stop the plan',
    outcome: 'Find the one assumption whose failure would sink a proposal, and check it before polishing anything.',
    scene: 'A contributor checks whether a fictional job API can support a completion-duration report.',
    sections: [
      {
        title: 'A polished duration report can still be impossible',
        paragraphs: [
          'You are designing a report that shows how long each training job took to run. The layout is obvious and satisfying: job name, start time, finish time, duration. You could have a mockup by lunch. Then you open the API schema the report would read from, and the fields are createdAt, updatedAt, and status. No startedAt. No finishedAt.',
          'The whole report rests on one quiet assumption: that something supported actually records when execution began and ended. If nothing does, the duration column cannot be computed, no matter how handsome the mockup, and two timestamps with vaguely similar names do not change that. Plenty of projects discover this after the interface is finished, when it is most expensive to learn.',
        ],
      },
      {
        title: 'Check the load-bearing wall first',
        paragraphs: [
          'An assumption is anything the design leans on before the evidence is in. Every plan has dozens, and you cannot test them all, so test the one whose failure would change the design most. Renovating a house, you check whether the wall you want to remove is load-bearing before choosing paint. The paint is easy to check and irrelevant; the wall decides whether the plan exists.',
          'Here the load-bearing wall is field meaning, not field existence. A field name is a label, not a definition. updatedAt could change whenever someone edits a finished job\'s description, weeks later. createdAt could be stamped when the job enters a queue, long before anything runs. Subtract one from the other and you get a number that measures neither execution nor any stable interval. The feasibility check therefore reads the documented semantics and walks a synthetic lifecycle; it does not stop at the request returns 200.',
        ],
      },
      {
        title: 'Walk the timeline',
        paragraphs: [
          'Invent one job and give it a life. Created at 10:00, when it joins the queue. Started at 10:10. Finished at 10:15. At 10:30 someone corrects a typo in its description. Execution took 5 minutes, 10:10 to 10:15. Now compute what the schema offers: updatedAt minus createdAt is 10:30 minus 10:00, which is 30 minutes, six times the real figure, and it would grow every time anyone touched the record.',
          'So write the stopping rule before building: proceed only if a supported contract supplies start and finish events with stable meanings. If only creation and last-modification are available, do not label their difference execution duration. The narrower honest options are to show job status instead, or to request an approved interface change that adds the missing events. Either beats a confident column of wrong numbers.',
        ],
      },
      {
        title: 'What a passing check does not buy',
        paragraphs: [
          'Suppose the check comes back good: there is a supported startedAt and finishedAt after all. Celebrate briefly, then notice what remains unproven. Permissions to read those fields, pagination across thousands of jobs, jobs that never finish and have no end event: each is a separate assumption with its own check. Passing the load-bearing test earns you the right to continue, not a finished design.',
          'And watch for the subtle cheat: a mockup fed with hand-typed finish times. It demonstrates that the display can render durations, which was never in doubt. It demonstrates nothing about whether the supported data exists or means what the column claims. Test the meaning of the dependency before investing in its presentation; the presentation was always going to work.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Which interval measures execution?',
        alt: 'Creation is 10:00, execution 10:10 to 10:15, and editing 10:30; only execution lasts 5 minutes.',
        caption: 'Measure both intervals yourself: started to finished is 5 minutes, created to edited is 30. Only the first is execution, and the schema exposes only the second. Hypothetical times, not proportional spacing.',
        items: [
          { label: '10:00 Created', detail: 'Job enters the queue; execution has not begun.' },
          { label: '10:10 Started', detail: 'Execution begins.' },
          { label: '10:15 Finished', detail: 'Execution ends after 5 minutes.' },
          { label: '10:30 Edited', detail: 'updatedAt changes; 30 minutes since creation is not execution time.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The fictional schema and timeline above'],
      steps: [
        'Write the report\'s claim, execution duration, and underneath it the two event boundaries that claim requires: an execution start and an execution end. Naming the requirement precisely is what makes the gap visible.',
        'List the schema\'s fields, createdAt, updatedAt, status, and beside each write what event actually sets it and whether later actions can overwrite it. Mark missing semantics as missing rather than borrowing a similar-sounding name.',
        'Compute both intervals from the timeline: 10:15 minus 10:10 is 5 minutes; 10:30 minus 10:00 is 30. Write one sentence on why only the first matches the column header.',
        'Draft three lines: the proceed condition, the stopping result, and one narrower feature, such as showing status, that stays honest if the assumption fails.',
      ],
      notice: 'The feasibility question surfaced a missing data source before anyone spent an afternoon on layout. The mockup would have hidden the gap behind hand-typed numbers.',
      troubleshooting: 'If your check only asks whether a field exists, you tested the label, not the wall. Add two questions for every field: what event sets it, and what later action can change it.',
    },
    recall: {
      prompt: 'A proposal needs to show who approved each change, but the API exposes only the most recent editor. What should be checked before building?',
      hint: 'Two roles can coincide in one example without being the same thing.',
      answer: 'Check for a documented approval event with its own approver field, because last editor and approver are different concepts that merely happen to coincide when the approver was also the final person to touch the record. Walk a lifecycle where someone edits after approval, and the last-editor field instantly points at the wrong person. If no approval evidence exists in the supported contract, revise the feature, show last editor and label it honestly, or request an interface change. Relabeling the editor as the approver would ship a confident column of wrong names.',
    },
    quiz: {
      question: 'A mockup renders durations using hand-entered finish times that the supported API does not provide. What should its evidence note say?',
      options: [
        'The display handles supplied values; supported start and finish data still needs confirmation.',
        'The display is feasible, so updatedAt can stand in for finish time in the duration claim.',
        'The mockup establishes the duration feature; only pagination and permission checks remain.',
      ],
      correctIndex: 0,
      explanation: 'The mockup proved exactly what it tested, that the display renders numbers it is given, and that was never the risky assumption. Substituting updatedAt reintroduces the 30-minute error the timeline exposed, and declaring the feature established skips the load-bearing check entirely while pretending the remaining questions are minor.',
    },
    takeaway: 'Find the load-bearing assumption and test its meaning, not its name, before you touch the paint.',
    sourceNote: 'Troubleshooting and launch references inform dependency checks. The API and timestamps are invented, not evidence about a real interface.',
  },
  {
    id: 'work-009',
    title: 'Keep the reason for a decision',
    outcome: 'Write down the constraint that decided a design and the specific future event that should reopen it.',
    scene: 'A training catalogue uses a versioned manifest instead of a database.',
    sections: [
      {
        title: 'A choice outlives its conversation',
        paragraphs: [
          'A small training catalogue holds eight read-only equipment descriptions. The team ships them as a versioned manifest file packaged with the site. Eight months later a new contributor opens the repository, finds no database, and reaches the natural conclusion: the original team cut corners.',
          'They did not. The first version had to work offline, the descriptions only ever changed through reviewed releases, and nobody had asked for browser editing. Under those constraints a manifest was the careful choice. But every one of those facts lived in a conversation that ended months ago. The code preserved the answer and lost the question, so a sensible decision now reads as a shortsighted one, and the contributor may spend a week building a database nobody needs.',
        ],
      },
      {
        title: 'Record the hinge, not the whole meeting',
        paragraphs: [
          'A decision note is a short record kept beside the design: the question, the options considered, the choice, who owns it, the decisive constraint, known limits, and the condition that would reopen it. Think of the label on a fuse box that says why a particular circuit is wired oddly: nobody wants the electrician\'s whole afternoon, just the one fact that stops the next person undoing it.',
          'The decisive constraint is the hinge, the fact that tipped the choice, not an inventory of every advantage. Here the hinge is that the release is read-only and must work offline, which a manifest satisfies without a running data service. Record limits with the same honesty: each edit requires a release. The goal is to let a future reader disagree using changed evidence, rather than demanding loyalty to the old choice or forcing them to reconstruct the meeting.',
        ],
      },
      {
        title: 'Write a reversible explanation',
        paragraphs: [
          'The whole note fits in a paragraph. Question: how should catalogue descriptions ship? Options: versioned manifest, or a database-backed service. Decision: manifest, owned by the catalogue maintainer. Reason: the current release is read-only and must work offline, and content changes already go through review. Limit: every edit requires a release. Reconsider when approved users need browser editing, or when content must publish independently of a site release.',
          'That final line is the valuable part, and it is far better than review later, which nobody ever does. It names a recognizable future event. When a request for browser editing arrives, the note does two things at once: it explains why the old decision was right for its time, and it announces that a new decision is now due.',
        ],
      },
      {
        title: 'Reopening is not reversing',
        paragraphs: [
          'Be careful with that last step. When the reopening condition fires, the note does not prove the database is now correct. It proves the question is open again. The new constraints, editing permissions, publication workflow, who runs the service, still need their own comparison, and the manifest might even survive it with a small addition.',
          'Two habits make notes actually get used. Keep them where the next person will look before implementing, next to the design rather than in a chat archive. And never let the reason be a single adjective; simpler is not a reason, it is a conclusion. Name the service, workflow, or dependency the choice avoided, because that is the thing a future reader can check against their own situation.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'When the manifest argument applies',
        alt: 'Read-only offline delivery favors the manifest; browser editing introduces a new requirement and reopens the decision.',
        caption: 'Compare the requirements in each column, not the age of the design: the right column is the recognizable event that reopens the question. The catalogue and its constraints are fictional.',
        items: [
          { label: 'Original requirement', detail: 'Eight read-only descriptions, offline delivery, reviewed releases.' },
          { label: 'Reopening condition', detail: 'Approved browser editing or publication without a site release.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a notes editor'],
      steps: [
        'Write the catalogue decision under six short headings: question, options, choice, owner, decisive constraint, limit. One line each; if the constraint needs a paragraph, you have not found the hinge yet.',
        'Write the reopening condition as an event someone could recognize in a future request, such as approved users need to edit in the browser. Test it: would a new contributor know it had fired?',
        'Now pretend browser editing has just been requested. Write which old assumption changed, and then write the comparison that still remains to be done, because the note reopened the question without answering it.',
      ],
      notice: 'A future reader can tell the difference between requirements that changed and an original choice that was careless. Those lead to completely different next steps, and only one of them is a rewrite.',
      troubleshooting: 'If your reason is just simpler or better, it will not help anyone later. Name the specific service, workflow, or dependency the choice avoided; that is the fact a reader can check against their own situation.',
    },
    recall: {
      prompt: 'You chose a daily batch report because no reader needed live data. Now someone requests a live operations view. What should your old decision note contribute?',
      hint: 'Preserve the original freshness requirement and identify the one that changed.',
      answer: 'The note should say that daily freshness met every known decision at the time, name the owner, and list live operational decisions as the reopening condition, which has now fired. That does two useful things: it clears the original team of carelessness, and it frames the new request as a changed requirement rather than a discovered mistake. What it must not do is settle the new question by itself; a live view has its own costs, and the comparison starts fresh with the new constraint in it.',
    },
    quiz: {
      question: 'A decision note reads: use a manifest because it is better. Which addition most improves a later reassessment?',
      options: [
        'A fuller list of features that a database could support.',
        'The final vote count, without the constraints that influenced it.',
        'The read-only constraint and the editing requirement that would reopen the choice.',
      ],
      correctIndex: 2,
      explanation: 'The constraint explains why the choice fit its moment, and the reopening condition tells a future reader when that reasoning stops applying; together they make the note reversible on evidence. A database feature list argues the other side without saying what was decisive, and a vote count records that people agreed while hiding what they agreed about.',
    },
    takeaway: 'Label the fuse box: the constraint that decided it, and the event that should reopen it. A reason you can check beats an adjective every time.',
    sourceNote: 'Simplicity and review references inform design trade-offs. The decision-note format is an original heuristic, not a claim that requirements stay fixed.',
  },
  {
    id: 'work-010',
    title: 'Include the upkeep in an automation proposal',
    outcome: 'Cost an automation by its whole operating life, build, review, maintenance, and an owner for failures, not just the clicks it removes.',
    scene: 'A junior engineer proposes a read-only inventory summary and models its first month of effort.',
    sections: [
      {
        title: 'The removed clicks are only one cost',
        paragraphs: [
          'Every week someone assembles an inventory summary by hand: open three exports, copy columns, fix the formatting, send. It is tedious and it is twelve minutes, every single week. You propose a script. The pitch practically writes itself: twelve minutes, gone.',
          'Now picture the script six weeks in. The source export adds a column and the script silently drops it. A row has a blank where a number should be and nobody notices for a month. The person who wrote the script is on leave. The clicks were real work, and so is everything the clicks used to absorb without anyone noticing: checking, judging, adapting. Fewer clicks does not establish less total effort, and an automation proposal that counts only the removed clicks is a cost model with half the costs missing.',
        ],
      },
      {
        title: 'A machine you buy is a machine you keep',
        paragraphs: [
          'Buying a dishwasher is not just the purchase price. It is the installation, the rinse aid, the filter you clean, and the day it leaks and someone has to know who to call. Automation has the same four parts: a one-time build, a recurring check of what it produced, maintenance when its surroundings change, and an owner for the day it fails.',
          'Keep the one-time cost separate from the recurring ones, because mixing them produces nonsense in both directions. Counted together, the build makes automation look terrible in month one. Ignored entirely, the maintenance makes it look free forever. The honest model shows both the first month and a typical later month, with every assumption labeled as an assumption until it is measured.',
        ],
      },
      {
        title: 'Run the four-run month',
        paragraphs: [
          'Model one hypothetical month with four weekly runs. Manual: 12 minutes per run, four runs, 48 minutes. Automation: 90 minutes to build once, 3 minutes of human review per run, and 20 minutes of monthly maintenance. First month: 90 plus 12 plus 20 equals 122 minutes. Set beside the manual 48, automation costs 74 minutes more in its first month.',
          'A later month, if the assumptions hold, drops the build: 12 plus 20 equals 32 minutes against 48 manual, a modeled difference of 16 minutes per month. Say modeled out loud. Exception volume, format changes, and testing could all move that number, and the payback on the 90-minute build takes several months of the assumptions behaving. That is still potentially worth doing. It is just not twelve minutes, gone.',
        ],
      },
      {
        title: 'Propose the failure path with the happy path',
        paragraphs: [
          'The most useful paragraph in the proposal describes the bad day. First version generates a read-only summary for human review. The inventory maintainer owns schema changes. An unknown column produces an incomplete-result warning instead of silently dropping data. When validation fails, a reviewer follows the documented manual procedure. Now the automation cannot quietly lie, and its failure has a name attached. Permissions and tests belong here too, even for a script that only reads.',
          'Two closing checks. Before automating, write down the current manual procedure and its exceptions; a process whose rules live only in one person\'s head cannot be automated honestly, only guessed at. And decide what justifies the work: the modeled minutes, the consistency, or the learning value are all legitimate reasons, but claim savings only after you have observed them. If exceptions turn out to dominate, better manual instructions may be the more valuable first deliverable, and there is no shame in a proposal that discovers that.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four-run month: modeled minutes',
        alt: 'Manual work totals 48 minutes; first-month automation totals 122 minutes including build, review, and maintenance.',
        caption: 'Add up the automation column yourself: 90 plus 12 plus 20 is 122, which is 74 more than manual in month one. Setup counts once; review and maintenance recur. All times hypothetical.',
        items: [
          { label: 'Manual: 48 minutes', detail: '4 runs x 12 minutes; no automation build in this model.' },
          { label: 'Automation: 122 minutes', detail: '90 build + 4 x 3 review + 20 maintenance; later modeled months: 32.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Optional calculator'],
      steps: [
        'Copy the assumptions, 12 minutes manual per run, 90 to build, 3 to review per run, 20 monthly maintenance, four runs, and compute three totals separately: manual, first automated month, a later automated month. Keeping them apart is the point.',
        'Underline every number that is an assumption rather than a measurement. In this exercise that is all of them, which is exactly what the proposal should admit.',
        'Write the bad-day paragraph: who owns schema changes, what happens when an unexpected column appears, and which documented manual procedure the reviewer falls back to.',
        'Draft one proposal sentence naming the observation you would collect before recommending wider use, such as how many runs in the first two months needed manual correction.',
      ],
      notice: 'Your comparison now includes the ongoing human work the clicks used to hide, and a failed run has both an owner and a fallback instead of a silent wrong answer.',
      troubleshooting: 'If your model counts only execution time, it is the twelve-minutes-gone pitch again. Add the review per run, the monthly maintenance, and the one-time build, and watch the first month flip sign.',
    },
    recall: {
      prompt: 'An automated report runs in seconds, but every single result needs manual correction before anyone can use it. How does that change the proposal assessment?',
      hint: 'Correction is part of operating the automation, not work that happens outside the comparison.',
      answer: 'Put the correction time into the recurring column per run, where it belongs, and recompute; a report that takes seconds to produce and fifteen minutes to fix may cost more than the manual process it replaced. Then treat the recurring correction as a signal: something about the source data or the rules is misunderstood, and that exception deserves investigation before any expansion. A fast script is not a saving, and it is certainly not a license to let downstream actions trigger automatically from output that is wrong every time.',
    },
    quiz: {
      question: 'Using the lesson\'s model, which statement about the first month is justified?',
      options: [
        'Automation uses 74 more modeled minutes than manual work, because setup and upkeep count.',
        'Automation saves 36 minutes, because only the removed manual work matters.',
        'Automation saves 16 minutes immediately, because later-month costs apply from the start.',
      ],
      correctIndex: 0,
      explanation: 'First month: 90 build plus 12 review plus 20 maintenance is 122, and 122 minus 48 is 74 extra minutes. Counting only the removed manual work ignores three of the four costs, and the 16-minute figure belongs to later months only, after the build is paid off and while the assumptions hold.',
    },
    takeaway: 'Cost the whole machine: build once, review and maintain forever, and name who answers when it breaks. Claim savings after you observe them.',
    sourceNote: 'Eliminating Toil and launch guidance inform lifecycle planning. The arithmetic is a hypothetical cost model, not measured savings or a universal automation threshold.',
  },
  {
    id: 'work-011',
    title: 'Use boundary examples to settle acceptance',
    outcome: 'Turn a vague instruction like validate this into a short table of concrete inputs, each with an agreed outcome or an open question.',
    scene: 'A settings form needs an agreed rule for a port field and its empty value.',
    sections: [
      {
        title: 'Validate is not a complete requirement',
        paragraphs: [
          'A settings form currently stores port 443. The ticket says: validate the port. You nod, the requester nods, everyone agrees. Then you build it and discover you disagreed all along about one case. When the field is empty and the user presses Save, you planned to restore a default. They expected the existing 443 to stay put. Neither of you was being careless; the word validate simply never contained an answer.',
          'This is what boundary examples are for. A boundary example is a concrete input sitting right where a rule changes: empty instead of present, one above the maximum, letters where digits belong. Broad language glides over these spots. A specific input forces the hidden decision into the open before anyone has written code around a guess.',
        ],
      },
      {
        title: 'Specify the output and what must survive',
        paragraphs: [
          'Think of a bouncer with a door policy. Over eighteen is a rule; the interesting questions are the person who is exactly eighteen today, the one with no ID, and the one whose ID is smudged. The policy becomes real only when each of those gets an answer.',
          'For this exercise the proposed form rule is whole-number text from 1 through 65535; that is this form\'s contract, not a law of networking. Now run the boundaries. 443 is valid. 44x is not whole-number text. 65536 is one over the maximum. For each rejected input, specify two things: the visible error, and what must not happen, which here is that the stored 443 stays untouched. That second half matters because two implementations could both show a perfectly good error message while one of them quietly wipes the saved value. And the empty input stays marked undecided, because that one is the owner\'s call.',
        ],
      },
      {
        title: 'Agree before the code decides',
        paragraphs: [
          'Send the table as a question, not a plan. Proposed acceptance: 443 saves as 443; 44x and 65536 show validation errors and leave the saved port at 443. For empty input, should Save preserve 443, restore a default, or require an entry? Please confirm before implementation.',
          'Once the owner answers, the question mark in the table becomes a row like any other, and you add tests at both numeric edges, 1 and 65535 accepted, 0 and 65536 rejected. Now the tests mean something, because their expected results represent behavior someone actually agreed to. A test written before that agreement is just your guess, made permanent.',
        ],
      },
      {
        title: 'A starting contract, not a finished one',
        paragraphs: [
          'Four examples do not cover everything, and claiming they do would recreate the original problem. Leading zeros, surrounding spaces, pasted symbols, a value with a decimal point: each may need its own row later. What the first table establishes is a shared starting contract, with the known decisions written down and the unknown ones labeled rather than silently defaulted.',
          'The deeper habit is noticing when a requirement is a verb with no examples attached. Validate, sanitize, handle gracefully, support: each sounds complete and each hides a boundary where two reasonable people will build two different things. Ask for three inputs, and the disagreement surfaces in a meeting instead of in production.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four inputs before implementation',
        alt: '443 is accepted, empty needs a decision, 44x is malformed, and 65536 exceeds the proposed maximum.',
        caption: 'Read each cell for two things: the visible result and the saved state afterward. The empty row is deliberately unanswered; it belongs to the owner. Proposed rules for a fictional form.',
        items: [
          { label: '443', detail: 'Accept whole-number value within the proposed range.' },
          { label: 'Empty', detail: 'Decision needed: preserve, default, or require entry?' },
          { label: '44x', detail: 'Reject malformed value; saved port remains 443.' },
          { label: '65536', detail: 'Reject above maximum 65535; saved port remains 443.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper or a notes editor'],
      steps: [
        'Draw a table with the four inputs, 443, empty, 44x, 65536, and a column for the outcome under the proposed rule. Fill in the three you can; leave empty genuinely blank for now.',
        'Add a third column, saved state after Save. Write 443 remains in both rejected rows. This column is the one most tickets forget, and it is where silent data loss hides.',
        'Write the empty-input question for the owner, offering the three options and choosing none of them. Your job is to surface the decision, not to make it by default.',
        'Extend the table with 0, 1, and 65535 to pin both numeric edges: 0 rejected, 1 and 65535 accepted. Edges are where off-by-one bugs live, so they get their own rows.',
      ],
      notice: 'Your table separates rules that are agreed from one product decision that is not, and every rejected input states what survives the rejection. Nothing in it is a guess dressed as a requirement.',
      troubleshooting: 'If any outcome cell just says error, it is incomplete. Add which value remains stored and which input the message refers to; an error that also clears the field is a different behavior wearing the same word.',
    },
    recall: {
      prompt: 'A profile-update endpoint has an optional biography field. How do you pin down the difference between leaving the field out and sending an empty string?',
      hint: 'An update can mean leave unchanged or replace, and optional does not say which.',
      answer: 'Build the boundary table with a starting state: the profile already has a biography. Row one: the request omits the field entirely. Row two: the request sends an empty string. For each, ask the owner what the stored biography should be afterward. The common contract is that omission preserves and empty clears, but it is a decision, not a deduction, and plenty of systems do the opposite. The word optional only tells you the field may be absent; it says nothing about what absence means.',
    },
    quiz: {
      question: 'A validator shows an error but also clears the previously saved value. Which acceptance detail would have exposed that?',
      options: [
        'A requirement that error text be concise.',
        'A list of valid values without any rejected cases.',
        'The required stored state after a rejected input.',
      ],
      correctIndex: 2,
      explanation: 'What happens to existing data after a rejection is part of the behavior, and only a saved-state column makes it checkable. Message style says nothing about data, and a list of valid inputs never exercises the rejection path at all, so the clearing bug would pass both.',
    },
    takeaway: 'A verb like validate hides decisions; three boundary inputs with outcomes and saved state make them visible before the code chooses for you.',
    sourceNote: 'The inherited review guidance addresses intended behavior and edge cases. The port form contract is fictional and not a general network configuration prescription.',
  },
  {
    id: 'work-012',
    title: 'Write non-goals with a destination',
    outcome: 'Keep a change small by naming what it excludes, without cutting the checks that make it true or losing a good idea.',
    scene: 'A download-button wording change attracts a request for a new PDF export.',
    sections: [
      {
        title: 'A nearby idea is not always part of the fix',
        paragraphs: [
          'A training portal has a button labeled Get file. It has only ever downloaded a CSV, and people keep being surprised by that. Your task is small and clear: relabel it Download CSV. In review, a colleague adds: while you are in there, could we add a PDF export too?',
          'The suggestion is reasonable, and it is about downloading, so it feels adjacent. But look at what it actually is: a new output format, a new layout, a new set of tests, and a new owner to consult. Saying so is where non-goals come in. A non-goal names the boundary of the current change and explains why the deliverable is complete without the extra piece. Done well, it reads as a map of where the idea goes next, not as a door closing on feedback.',
        ],
      },
      {
        title: 'Two kinds of related work',
        paragraphs: [
          'Fixing a dripping tap, a plumber will still check that the water runs clear and the shutoff valve works, because those are part of the tap being fixed. Replumbing the bathroom is related, and it is a different job. The test for which pile something belongs in is not size or convenience. It is: if I left this out, would my promised result be false?',
          'Apply that to the label. For Download CSV to be true, the visible text and the accessible name both have to say CSV, the button has to remain keyboard-operable, and it has to still download the file. Declaring any of those a non-goal would exclude evidence the promise depends on. PDF export, by contrast, changes nothing about whether the existing button is correctly labeled. It can be discussed on its own schedule without making your change less complete.',
        ],
      },
      {
        title: 'Give the excluded idea a next home',
        paragraphs: [
          'Write it like this: this change makes the existing CSV download accurately labeled. PDF export is not included, because it needs its own output requirements and layout decisions; please capture that request as a separate proposal for the export owner. Keyboard use, accessible naming, and CSV download verification remain in this change.',
          'Notice the structure: what is in, what is out, why, and where the out part goes. The destination does not have to promise implementation. It can be a question routed to an owner, a deferred proposal, or an explicit no with a reason. What matters is that you record which one it is. A reviewer can then approve a coherent small change, and the PDF idea stays visible instead of dying in a closed discussion thread.',
        ],
      },
      {
        title: 'Where the boundary goes wrong',
        paragraphs: [
          'Non-goals fail in two opposite directions. The first is using them to shed required work: to keep the patch small, we will not check the accessible name. That is not scoping; it is shipping an unverified promise, and the honest alternative is to renegotiate the promise out loud. The second is skipping the destination, so that useful ideas evaporate and the next person who raises PDF export is told it was already decided, by nobody, for no recorded reason.',
          'Held between those failures, a non-goal is a generous device. It protects the reviewer from scope creep, protects the idea from oblivion, and protects you from a change that quietly grows until it never merges.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'CSV label fix versus PDF feature',
        alt: 'The label fix includes accessible naming and download checks; PDF export needs a separate requirements proposal.',
        caption: 'Test each item with one question: if it were left out, would Download CSV become a false claim? The left column fails that test; the right column does not.',
        items: [
          { label: 'Included in label fix', detail: 'Download CSV label, accessible name, keyboard use, existing download check.' },
          { label: 'Separate PDF proposal', detail: 'Output layout and PDF behavior need a decision by the export owner.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper or a notes editor'],
      steps: [
        'Write the deliverable in one line, the button is accurately labeled Download CSV, then list three checks that would make a reviewer believe it: visible label, accessible name, download still works.',
        'Draft the PDF non-goal in two sentences: why the label change is complete without PDF, and what PDF would need that this change does not provide.',
        'Give the PDF idea a destination with an owner role, and label it honestly as proposed, routed, or declined with reason. One word of status is what stops the idea from vanishing.',
      ],
      notice: 'Your current change carries all the evidence its promise needs, and the related idea has a named next home with a status. Both halves of the non-goal are doing their jobs.',
      troubleshooting: 'If one of your non-goals excludes a check on the behavior you changed, the test question has caught it: either restore the check, or change the promise so it no longer depends on it. Silence is not an option here.',
    },
    recall: {
      prompt: 'You fix a spelling mistake in the onboarding email, and a reviewer asks you to redesign the whole mail-delivery system while you are there. What boundary do you write?',
      hint: 'Verifying the correction stays in; a new architecture is a different job.',
      answer: 'In: the corrected wording, and confirmation that the email still renders and sends correctly with it, because those are what make the fix true. Out: a delivery-system redesign, which needs its own reliability requirements, ownership, and rollout plan. Route that idea to the mail-system owner as a proposal with a one-line reason. The two mistakes to avoid are mirror images: promising the redesign inside a spelling fix, and using the redesign conversation as an excuse to skip checking that the corrected email actually goes out.',
    },
    quiz: {
      question: 'Which non-goal is defensible for a control-label change?',
      options: [
        'Exclude checking the control\'s accessible name, to keep the patch small.',
        'Defer an independent output format to a separately owned proposal.',
        'Exclude confirming which file the relabeled control actually downloads.',
      ],
      correctIndex: 1,
      explanation: 'A new output format passes the test: leaving it out does not make the label claim false, so it can be scoped and owned separately. The accessible name and the actual download are the evidence that the label is correct; excluding either one ships a promise nobody verified, which is not scoping but omission.',
    },
    takeaway: 'Exclude independent deliverables, keep every check the promise depends on, and give each excluded idea a named next home.',
    sourceNote: 'Small-change and review references support coherent scope with tests. This non-goal wording is an original planning example, not a rule to dismiss related risks.',
  },
  {
    id: 'work-013',
    title: 'Treat dependencies as agreements',
    outcome: 'Replace waiting on another team with the exact thing you need, who owns it, what makes it usable, and what moves if it is late.',
    scene: 'A consumer test waits for a provider to confirm a fictional job-status response.',
    sections: [
      {
        title: 'Waiting on a team hides the missing object',
        paragraphs: [
          'In standup you say: the job-status screen is blocked, waiting on the API team. Everyone nods; it sounds like a complete status. It is not. Nobody listening can tell whether you need access credentials, a design decision, or finished code, and so nobody can help, including the API team.',
          'Dig into what is actually missing and it turns out to be small and specific: an agreed sample response for a job in the queued state. Your screen has to render an error field, and you cannot tell whether a queued job\'s error is absent, null, or an empty string. The provider saying almost finished does not answer that, however sincerely they mean it. Name the object you are waiting for before you name the team.',
        ],
      },
      {
        title: 'Delivered is not the same as usable',
        paragraphs: [
          'Order a part for a bicycle repair and the box arriving is not the milestone; the milestone is the part fitting the bike. A dependency works the same way. A proper dependency agreement has four pieces: the artifact or decision, who owns it, the acceptance condition that makes it usable, and the date that matters to the work waiting on it.',
          'Acceptance is the piece people skip. An email with a JSON attachment is a box arriving. For the sample to fit, it needs a schema version, an actual queued state, and a confirmed meaning for error. Without the third, you still cannot write the test. Two more honesty rules: the date you ask for is a proposal until the provider agrees to it, and the work you control, building the screen, should be estimated separately from the waiting, so a coding estimate cannot quietly disguise an unresolved handoff.',
        ],
      },
      {
        title: 'Ask for a usable handoff',
        paragraphs: [
          'The message writes itself once the four pieces are known. For the consumer test, please confirm a versioned queued-job sample with status queued and error null, where null means no error recorded. Could the API contract owner agree this by Tuesday at 14:00? Without it, the queued-state integration test stays blocked. Meanwhile I can finish the static screen against a clearly labeled synthetic fixture.',
          'Two things about that message deserve notice. It separates your independent work from the blocked work, so progress continues honestly. And it proposes a representation without claiming it; if the owner decides error should be omitted rather than null, you update your expectation, because the provider owns the contract and your draft was a question.',
        ],
      },
      {
        title: 'When the date slips',
        paragraphs: [
          'Dependencies slip, and the agreement is what makes a slip reportable rather than mysterious. Because you named the blocked test, you can say exactly what moves: the queued-state integration test shifts; the static screen does not. No blame is needed, and no new agreement should be invented on the provider\'s behalf; you ask for a revised date, and you report the consequence.',
          'The trap to avoid is declaring the dependency done when a file arrives. A response-shaped example with an unexplained missing field is received, not accepted: the artifact exists and the decision you needed is still absent. Ask the one remaining question. A dependency is complete when its output is usable for the step it unblocks, not when someone reports activity.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'From sample to accepted dependency',
        alt: 'The provider supplies a versioned sample, the consumer checks queued and null-error meanings, and both confirm the contract.',
        caption: 'Notice there are three boxes, not two: the middle step, where the consumer checks the sample is interpretable, is what separates a file arriving from a dependency being met. Fictional handoff.',
        items: [
          { label: 'Contract owner supplies', detail: 'Versioned queued-job sample with documented error meaning.' },
          { label: 'Consumer checks', detail: 'status queued and error null can be interpreted without guessing.' },
          { label: 'Agreement recorded', detail: 'Confirmed contract unblocks the integration expectation; fixture alone does not.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a draft message'],
      steps: [
        'Write waiting on the API team, then cross it out and replace it with the exact artifact and the single decision you need: a versioned queued-job sample, and what error means in it.',
        'Add the other three pieces of the agreement: the owner role, the proposed Tuesday checkpoint, and the acceptance condition that would make the sample usable rather than merely received.',
        'Name the specific test that is blocked and one independent task you can do meanwhile against a labeled synthetic fixture. Keeping these on separate lines keeps your estimates honest.',
        'Draft the update you would send if Tuesday passes with no sample: which test moves, a request for a new date, and nothing invented or blamed.',
      ],
      notice: 'Anyone reading your draft can tell what must arrive, what makes it count as arrived, who owns it, and precisely which outcome changes if it is late. That is a dependency someone can act on.',
      troubleshooting: 'If your dependency ends at sample received, you stopped at the box arriving. Add the consumer-side check that proves the sample fits, such as confirming the meaning of every field your test will read.',
    },
    recall: {
      prompt: 'A designer has promised icons for your release, but packaging also needs usage rights and attribution text for each one. What belongs in the dependency?',
      hint: 'Define the whole artifact that acceptance requires, not just the visible part.',
      answer: 'The agreement covers the complete deliverable: the icon files in the agreed formats, the usage rights and attribution record for each, the owner, and the date packaging needs them. The acceptance condition is that the release can legally ship with them, which the images alone cannot satisfy. If a folder of icons arrives with no licensing information, the dependency is received, not accepted, and the honest status names the one missing piece rather than calling it done.',
    },
    quiz: {
      question: 'A provider sends an example response but does not say whether a missing field means the same as null. What is the dependency\'s state?',
      options: [
        'Received but not yet accepted for the consumer contract.',
        'Complete, because a response-shaped artifact arrived.',
        'Resolved by treating omission as null and finishing the test on that assumption.',
      ],
      correctIndex: 0,
      explanation: 'The box arrived and the part does not yet fit: the exact decision you were waiting for is still unanswered. Calling it complete confuses activity with usability, and finishing the test on an assumption bakes your guess into the consumer contract, which the provider never agreed to and may contradict next week.',
    },
    takeaway: 'Name the object, the owner, what makes it usable, and what moves if it is late. A dependency is met when the part fits, not when the box arrives.',
    sourceNote: 'Launch and small-change references inform coordination and interfaces. The dependency record is an original heuristic; proposed dates are not external delivery guarantees.',
  },
  {
    id: 'work-014',
    title: 'Slice work by a complete behavior',
    outcome: 'Break a feature into pieces that each do one checkable thing and leave the app working in between.',
    scene: 'A report viewer grows from a saved fixture to filtering and then remote loading.',
    sections: [
      {
        title: 'One file can still be half a feature',
        paragraphs: [
          'You are building a report viewer: a table of results, a status filter, and loading from a remote source. The plan that comes naturally is by layer: types first, then rendering, then wiring, tests at the end. Each patch is tidy and small. And each one, on its own, does nothing a person could try.',
          'Picture the reviewer of patch one. They are looking at type definitions with no consumer and no test, and to approve them they must imagine the three patches that do not exist yet. That is a lot of imagining, and it is where mistakes hide. A better slice is a complete behavior: something a reader can understand and check by itself. It might touch five files and still be conceptually smaller than a one-file change whose consequences are all unfinished.',
        ],
      },
      {
        title: 'Rooms you can live in',
        paragraphs: [
          'Think about renovating a flat while still living in it. Do the kitchen completely, then the bathroom completely, and the place is habitable the whole time. Rip out every floor at once and you are camping in your own home for a month. Behavior slices are rooms: each one finished and usable before the next begins.',
          'For the viewer, the first room is a table that renders a saved synthetic report with one passed row and one failed row, including an empty-report state, with its tests. The second room adds the filter: set to passed, only the passed row shows; cleared, both return. The third brings remote loading, with explicit loading and failure states. Each slice has an input, a visible output, and a working app before the next slice exists. The saved fixture in slice one is doing deliberate work: it keeps networking, the riskiest dependency, out of the first behavior entirely.',
        ],
      },
      {
        title: 'Write the sequence and its dependencies',
        paragraphs: [
          'On paper the plan is short. Slice A: render the saved report, including the empty state. Slice B: filter that report, and restore all rows when cleared. Slice C: load reports through the supported interface, showing loading and failure without losing the last valid view. B depends on A. C reuses the tested behavior of both.',
          'Now the question that catches most plans: what does a user see after only A is merged? If the answer includes a Load button that does nothing, A is not a valid intermediate state; it is a half-built room with the door open. Hide or defer the control until C exists. The app between slices has to be one a person could actually use, not one that merely compiles.',
        ],
      },
      {
        title: 'Small is about understanding, not line counts',
        paragraphs: [
          'Two misreadings undo this. The first is slicing by file: a change named after the component it touches rather than what a reader can now do. If you cannot say what works after the slice lands, it is not a behavior yet. The second is treating a short diff as automatically safe: renaming fields now and updating their callers next week produces two tiny patches and one week of broken software in between.',
          'The test for a good slice is the same every time: it has its own evidence, it can be checked without pretending later work exists, and the system it leaves behind is valid. When all three hold, the reviewer can hold the whole change in their head, which is the only kind of small that matters.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Three independently checkable behaviors',
        alt: 'A saved two-row report renders, a passed filter narrows it to one row, and remote loading adds explicit loading and failure states.',
        caption: 'For each box, ask what a user could do if only the slices up to it had shipped. Each should answer with a working app. The arrows show dependency, not duration; every step carries its own tests.',
        items: [
          { label: 'A: Saved report', detail: 'Passed row plus failed row; empty fixture has an empty state.' },
          { label: 'B: Status filter', detail: 'Passed shows one row; clearing the filter restores both.' },
          { label: 'C: Remote loading', detail: 'Loading and failure states; last valid view is preserved on failure.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Three paper cards'],
      steps: [
        'Write one viewer slice per card, phrased as what a person can now do, with its input and visible output. If a card reads like a file name, rewrite it until it reads like a capability.',
        'On each card add two tests: the normal case and one boundary or failure case. A slice without its own evidence is asking the reviewer to imagine it.',
        'Order the cards by dependency, then write beneath the first one exactly what the application looks like with only that card delivered. Be specific about every visible control.',
        'Hunt for any control on that description that needs an undelivered card to work. Cross it out or move it to the card that makes it real; a dead button is a half-built room.',
      ],
      notice: 'Each card makes a bounded claim that can be checked alone, and the app is usable after every card, not just the last one. That is what lets a reviewer hold one slice in their head.',
      troubleshooting: 'If a slice is named after a file or a layer, add the sentence: after this lands, a user can... If you cannot finish that sentence, merge the card with the one that would let you.',
    },
    recall: {
      prompt: 'A form redesign is split into two patches: rename the field names this week, update all the callers next week. What should you inspect before agreeing?',
      hint: 'Ask whether the application is valid after the first patch alone.',
      answer: 'Walk through the state between the patches. After the rename lands, do the existing callers still satisfy the changed contract, or does the form break for a week? If they break, the short first diff is not a legitimate slice, however small it looks; it leaves an uninhabitable room. The fix is either to keep the rename and the necessary caller updates together, or to introduce a compatible transition, both names accepted for a period, with its own tests, so the system stays valid at every step.',
    },
    quiz: {
      question: 'Which first slice of a search feature is self-contained?',
      options: [
        'A new response type with no compatible caller until a later patch.',
        'A search button that will acquire its action in the next release.',
        'Search over a fixed fixture with result and empty-state tests, and no unfinished remote loading exposed.',
      ],
      correctIndex: 2,
      explanation: 'The fixture search is a finished room: a person can search, the tests prove it, and nothing visible depends on future work. The orphan type asks the reviewer to imagine its consumer, and the inert button is a half-built room with the door open, exactly the invalid intermediate state the slicing exists to prevent.',
    },
    takeaway: 'Slice by what a person can now do, ship each slice with its own tests, and never leave the app camping between rooms.',
    sourceNote: 'Small CLs supports self-contained, understandable changes. The report slices are original examples, not a fixed file-count or patch-size formula.',
  },
  {
    id: 'work-015',
    title: 'Make a scope change an explicit trade-off',
    outcome: 'Answer a could-you-also request with what it actually adds and a real choice for the person who sets priorities.',
    scene: 'A Friday project-search demo receives a request to include archived projects.',
    sections: [
      {
        title: 'A short request can change several obligations',
        paragraphs: [
          'Your Friday demo is project search: type a name, see matching active projects. On Wednesday a teammate asks, lightly, could it include archived projects too? Eleven words. The honest answer is at least a paragraph, and the gap between those two lengths is the whole lesson.',
          'Behind the checkbox the request imagines, three questions wake up. Does the interface even return archived records? How should their archived status show in the results? Do the same access rules apply, or can archived projects expose something active ones would not? Saying sure while keeping every Friday promise intact does not make those questions go away; it hides them until Thursday night. The goal is not to make every addition sound expensive. It is to describe what this addition changes in the deliverable and in the evidence for it.',
        ],
      },
      {
        title: 'Find the work inside the words',
        paragraphs: [
          'A builder asked to add one more window does not just add a window. There is the structural check, the lintel, the weatherproofing, and a reinspection. Could you also requests are windows: the visible part is a fraction of the work. A scope change alters required behavior, so it can add implementation, validation, review, and dependency work all at once. List the specific changes before guessing how long they take.',
          'Here the list is concrete: an interface check for archived records, a visible status label, tests that active-only search still behaves exactly as promised, and permission handling that cannot be skipped to save a date. Some planned work might be traded for the new behavior. But notice whose decision that trade is: the person authorized to set priorities, not you alone at your desk. Your job is to expose the options and the unknowns, not to quietly decide whose requirement disappears.',
        ],
      },
      {
        title: 'Offer choices without inventing a date',
        paragraphs: [
          'The reply is short and specific. The current Friday demo covers active projects. Archived search adds an interface check, status labeling, and access and regression tests. We can keep Friday active-only and assess archived search separately, or swap out the planned sorting enhancement and revise the forecast after the interface check. Which outcome should the project owner prioritize?',
          'Read what you did not say. You did not promise that dropping sorting buys exactly enough time, because you have not checked the interface yet and do not know. You named the unknown and made the forecast conditional on it. Whatever the owner picks, record the choice and update the acceptance criteria and the status note together, so the demo\'s definition and its promised date never drift apart.',
        ],
      },
      {
        title: 'When the addition is mandatory',
        paragraphs: [
          'Sometimes the owner says: it has to be in, and it has to be Friday. That is a legitimate decision, and it still does not create time. Your response names which forecast assumptions now need review and which checks are at risk, in writing, before the work starts. Correctness checks are not the flexible part: skipping the access test to hit a demo date trades a known risk for a quiet one.',
          'Two habits keep this from becoming obstruction. Always offer at least one option that says yes, with a cost attached, so the conversation is about trade-offs rather than refusal. And never let a one-for-one swap masquerade as free: replacing one feature with another is an exchange of unknown quantities until the new one has been sized. Make the exchange visible, and let the owner own it.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'An addition becomes a choice',
        alt: 'A requester asks for archived search; the developer explains added checks; the requester chooses active-only Friday and a separate assessment.',
        caption: 'Watch the middle line: the developer names the added work and hands back a choice, without promising the addition is free or refusing it. The owner decides scope. Fictional exchange.',
        items: [
          { label: 'Requester', detail: 'Could Friday search include archived projects?' },
          { label: 'Developer', detail: 'That adds interface, access, and regression checks. Keep Friday active-only or revise scope?' },
          { label: 'Requester', detail: 'Keep Friday active-only. Bring the archived-search assessment separately.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a draft reply'],
      steps: [
        'Write two separate lines: what the Friday demo currently promises, active-project search, and what the request adds, archived projects. Keeping them apart is what makes the trade visible.',
        'Under the request, list the work it creates: interface check, status label, access handling, regression tests for active-only behavior. This is the lintel and the weatherproofing behind the window.',
        'Draft two options for the project owner, one that keeps Friday as promised and one that swaps scope, and make sure neither one promises a completion date you have not earned.',
        'Pick a fictional answer from the owner and rewrite the delivery note to match it exactly, so the definition of the demo and its date stay in step.',
      ],
      notice: 'The request became a visible change to an explicit agreement, decided by the person who owns priorities, instead of silently eating your testing and review time on Thursday night.',
      troubleshooting: 'If every option on your page keeps all the scope and the same date, you have hidden a missing estimate. Expose it: write which check is unsized, and make the forecast conditional on it.',
    },
    recall: {
      prompt: 'You are handing off a documentation set when someone asks for a translated edition as well. How do you respond without dismissing the request or quietly absorbing it?',
      hint: 'Translation adds review and ownership work beyond producing the text.',
      answer: 'Restate the current handoff, the English edition on its agreed date, then name what a translated edition genuinely adds: the translation itself, a fluent reviewer for the target language, and someone authorized to approve it as accurate. Offer the choices: defer it to a separate piece of work, swap something out of the current scope, or revise the delivery date, and ask the owner which. The accuracy review is not the negotiable part; a fast translation nobody checked is a liability wearing a deliverable\'s clothes.',
    },
    quiz: {
      question: 'A requested scope swap might fit the date, but its key dependency has not been tested. What should your response say?',
      options: [
        'The swap guarantees the original date, since one feature simply replaces another.',
        'Offer the swap conditionally, naming the check that would let you revise the forecast.',
        'Accept the swap now and mention the dependency only if it later causes a problem.',
      ],
      correctIndex: 1,
      explanation: 'One feature for one feature is a trade of unknown weights until the new one is sized, so the honest offer is conditional on the check that sizes it. Calling the swap a guarantee invents certainty, and accepting now while hiding the dependency turns a visible risk into a Thursday-night surprise for everyone.',
    },
    takeaway: 'List the work behind the window, hand the owner a real choice, and keep the correctness checks off the bargaining table.',
    sourceNote: 'Small-change and launch references inform scope and dependencies. The negotiation wording is an original heuristic, not a guarantee of delivery capacity.',
  },
  {
    id: 'work-016',
    title: 'Report progress as a changed state',
    outcome: 'Write an update that shows what became known or usable, what remains uncertain, and the next check.',
    scene: 'A sorting defect moves from a vague report to a repeatable two-value fixture.',
    sections: [
      {
        title: 'Activity and progress answer different questions',
        paragraphs: [
          'Yesterday a training table sometimes appeared out of order. Today you isolated a fixture containing the labels "2" and "10" that always displays 10 first. "Spent three hours debugging sorting" records activity, but not the changed investigation state. "A two-value fixture now reproduces the order error" tells a teammate what became available. They can use it to test a hypothesis or review a proposed correction. The update does not need a successful fix to contain progress; a useful exclusion or new reproduction is also a changed state.',
        ],
      },
      {
        title: 'Keep evidence and interpretation apart',
        paragraphs: [
          'A state-based update has a demonstrated change, supporting evidence, an unresolved question, and a next action. In this example, the intended contract is ascending numeric order, so 2 should precede 10. The observed order resembles text sorting, but resemblance is a hypothesis, not proof of where the defect lives. The server response or the view could introduce it. Label those interpretations separately from the fixture output. Otherwise a concise update can accidentally turn a plausible explanation into an accepted diagnosis that later work never checks.',
        ],
      },
      {
        title: 'Write the next reader into the note',
        paragraphs: [
          'Try: "New evidence: the saved two-value fixture reproduces 10 before 2 in the training view. Expected numeric order is 2, then 10. Cause is not isolated; text comparison is a hypothesis. Next I will compare the response order with the order passed to rendering. No fix is verified yet."',
          'Link the fixture in the actual work system when one exists. If your check produced no new information, say which approach was inconclusive and why. Avoid a chronological list of every page opened. The reader needs enough current state to choose a next action, not to reconstruct your entire afternoon.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What became known today',
        alt: 'Previously the order failure was intermittent and unbounded; now a two-value fixture reliably shows 10 before 2, with cause still unknown.',
        caption: 'The fictional fixture establishes a repeatable symptom, not the location or cause of the sorting defect.',
        items: [
          { label: 'Previous state', detail: 'Occasional order report; no reduced input for another person to check.' },
          { label: 'Current state', detail: '2 and 10 reproduce 10 first; response-versus-view boundary still untested.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper or a notes editor'],
      steps: [
        'Rewrite "debugged sorting" using the expected and observed order from the two-value fixture.',
        'Separate the observed symptom from the hypothesis that a text comparison caused it.',
        'Add the next boundary check and a sentence stating what is not yet verified.',
      ],
      notice: 'Your update identifies a reusable result without overstating diagnosis or completion.',
      troubleshooting: 'If the note contains only past-tense activities, ask what a teammate can now inspect that they could not inspect yesterday.',
    },
    recall: {
      prompt: 'You tried an undocumented format conversion and learned that it cannot preserve required metadata. How can that be a progress update?',
      hint: 'An option ruled out under stated conditions is a change in available choices.',
      answer: 'State the tested conversion, missing metadata, and consequence: it cannot meet the current acceptance. Preserve the example and limits, then identify the next candidate. Do not call all conversions unsuitable based on that one result.',
    },
    quiz: {
      question: 'Which update best distinguishes evidence from a suspected cause?',
      options: [
        'The two-value fixture shows the wrong order; text comparison is suspected and the rendering boundary is next.',
        'The sorting algorithm is broken because its output looks like text order.',
        'Sorting is almost fixed because a smaller input now exists.',
      ],
      correctIndex: 0,
      explanation: 'The first update preserves the observed result, uncertainty, and next check. A reduced input neither locates the defect nor establishes that a fix is near.',
    },
    takeaway: 'Report what changed in evidence or readiness, then state what still needs to be learned.',
    sourceNote: 'Troubleshooting and incident references support shared investigation state. This update structure is an original communication heuristic, not a claim about hours saved.',
  },
  {
    id: 'work-017',
    title: 'Turn a blocker into a decision request',
    outcome: 'Route an unresolved behavior choice to its owner with the options, consequence, and requested response.',
    scene: 'A daily training report cannot finalize tests until its date-grouping time zone is agreed.',
    sections: [
      {
        title: 'Blocked does not name the response',
        paragraphs: [
          'You are preparing a fictional daily training report. One requirement says group sessions by UTC date; another says use the report owner\'s local date. For a session at Monday 23:30 UTC, an owner at UTC+02:00 sees Tuesday 01:30. The difference changes which daily group contains the session. Writing "blocked on dates" gives readers a status but no action. The missing item is an authorized choice between two meanings of daily, not another attempt at the date-formatting code.',
        ],
      },
      {
        title: 'Distinguish investigation from authority',
        paragraphs: [
          'A blocker report should identify the missing decision or resource, who can supply it, the work that cannot proceed, and when the gap affects a commitment. You can explain both interpretations and recommend one, but that does not make you the decision owner. Separate blocked work from independent work. Here you can still check formatting with synthetic timestamps, while acceptance for daily totals remains unresolved. More experiments can demonstrate each interpretation; they cannot establish which requirement the report owner intended to approve.',
        ],
      },
      {
        title: 'Send the choice with its consequence',
        paragraphs: [
          'Draft: "Decision needed from the report owner: group by UTC date or the owner\'s configured time zone? Monday 23:30 UTC belongs to Tuesday at UTC+02:00. Daily-total acceptance tests are paused until this is agreed. Please choose by Tuesday noon if the planned review is to include those tests; formatting checks can continue." If you recommend local dates because the report describes the owner\'s day, state that rationale and the cross-time-zone trade-off. Record the actual decision when it arrives. If the named person lacks authority, ask them to route it rather than treating silence as consent or repeating the same blocked update.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'One session, two daily groups',
        alt: 'Monday 23:30 UTC is Tuesday 01:30 at UTC+02:00, so the grouping choice changes the daily report.',
        caption: 'The timestamp and fixed offset are hypothetical. Both conversions are valid; acceptance must choose the intended grouping rule.',
        items: [
          { label: 'UTC grouping', detail: 'Session belongs to Monday: 23:30 UTC.' },
          { label: 'Owner at UTC+02:00', detail: 'Session belongs to Tuesday: 01:30 local time.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a draft blocker message'],
      steps: [
        'Copy the two competing date rules and the one session that distinguishes them.',
        'Name the report owner as the decision role and daily-total tests as the blocked work.',
        'Write the requested choice, planning checkpoint, and formatting work that can continue independently.',
        'Add how you will record the confirmed rule, leaving the draft unanswered until the owner actually chooses.',
      ],
      notice: 'The message asks for a specific response instead of merely announcing a delay.',
      troubleshooting: 'If the recipient could only reply "noted," add the decision or artifact needed to unblock the next step.',
    },
    recall: {
      prompt: 'Two teams disagree whether an export should include inactive records. What should your blocker update contain?',
      hint: 'Show a record whose inclusion differs, then route the acceptance choice.',
      answer: 'Give one synthetic inactive record, the competing expected outputs, the owner who can decide, and the affected export test or delivery. Recommend a choice only with its trade-off; do not silently interpret one team\'s preference as authorization.',
    },
    quiz: {
      question: 'You can implement either interpretation, but no owner has approved one. What removes the real blocker?',
      options: [
        'Implement the shorter option and request approval afterward.',
        'Run more examples to prove both interpretations are technically possible.',
        'Obtain the behavior decision from the authorized owner and update acceptance.',
      ],
      correctIndex: 2,
      explanation: 'Feasibility is already known. The missing input is authority over intended behavior, so more coding or examples cannot substitute for the decision.',
    },
    takeaway: 'Name the response that would unblock the work and the person authorized to give it.',
    sourceNote: 'Managing Incidents informs explicit roles and communication. This routine blocker example is an original coordination heuristic, not an escalation policy for every workplace.',
  },
  {
    id: 'work-018',
    title: 'Separate a forecast from a commitment',
    outcome: 'Communicate uncertain effort with its assumptions and next checkpoint without turning it into an agreed delivery date.',
    scene: 'A developer estimates a paginated report adapter before confirming the interface contract.',
    sections: [
      {
        title: 'An estimate is conditional information',
        paragraphs: [
          'You are asked when a report adapter will be ready. The mapping looks small, but you have not checked how the fictional interface signals its last page. Saying "tomorrow" hides that dependency and leaves the listener unsure whether you offered a forecast or accepted a delivery commitment. A forecast describes what appears likely under current assumptions. A commitment is an agreement someone plans around. You can be useful without pretending certainty by naming the unknown and when you will bring better evidence.',
        ],
      },
      {
        title: 'Keep effort separate from elapsed time',
        paragraphs: [
          'After the interface check, suppose implementation is estimated at 2 to 4 focused hours and validation at 1 hour. That is 3 to 5 hours of work before review, not 3 to 5 clock hours until delivery. Review availability, interruptions, and changes requested afterward remain separate. The range is a hypothetical planning judgment, not a probability interval derived from data. Avoid giving its endpoints statistical meanings such as "ninety percent confidence" unless you actually have a defensible method and relevant evidence for that statement.',
        ],
      },
      {
        title: 'Promise the next evidence when appropriate',
        paragraphs: [
          'Write: "Conditional forecast after the paging contract is confirmed: 3 to 5 focused hours to reach review, including validation. Reviewer availability is unconfirmed. I will report the interface findings at Monday 11:00 and revise the delivery forecast then." Agree that checkpoint only if you can own it. If the interface requires a new pagination strategy, tell the affected owner which assumption changed rather than quietly moving the date. A narrow commitment to provide findings can coexist with an uncertain delivery forecast. It gives planning a next update without mislabeling code completion as the point at which the work is accepted.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'What the estimate includes',
        alt: 'Confirm paging first; implementation takes a modeled 2 to 4 hours, validation 1 hour, and review timing remains unknown.',
        caption: 'Hypothetical effort, not a proportional schedule. The 3-to-5-hour subtotal excludes the initial check and review waiting.',
        items: [
          { label: 'Interface checkpoint', detail: 'Confirm last-page meaning; report findings Monday 11:00 if agreed.' },
          { label: 'Implementation', detail: 'Conditional estimate: 2 to 4 focused hours after confirmation.' },
          { label: 'Validation', detail: '1 additional hour; subtotal before review: 3 to 5 hours.' },
          { label: 'Review and acceptance', detail: 'Availability and follow-up changes remain unconfirmed.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a notes editor'],
      steps: [
        'Calculate the implementation-plus-validation range, keeping interface discovery and review outside that subtotal.',
        'Draft the forecast with its paging assumption, uncertainty about review, and proposed evidence checkpoint.',
        'Suppose paging requires a different adapter design. Write an update naming the changed assumption, not an invented new date.',
      ],
      notice: 'A reader can distinguish estimated effort, unknown waiting, and the specific commitment you are offering.',
      troubleshooting: 'If you wrote only a date, add the acceptance stage, unresolved dependency, and checkpoint that will narrow the forecast.',
    },
    recall: {
      prompt: 'Your implementation is finished, but a specialist review has no confirmed slot. How should you answer "Is it delivered?"',
      hint: 'Readiness for a stage is different from acceptance through that stage.',
      answer: 'Say the implementation is ready for specialist review, identify the remaining acceptance and any known validation, and state that review timing is unconfirmed. Seek a scheduling decision rather than presenting coding completion as an accepted delivery.',
    },
    quiz: {
      question: 'What does the fictional 3-to-5-hour estimate establish?',
      options: [
        'Guaranteed elapsed time from the current moment to accepted delivery.',
        'Conditional implementation and validation effort before review, after the interface check.',
        'A measured confidence interval covering review and all possible rework.',
      ],
      correctIndex: 1,
      explanation: 'The subtotal includes only the named work under the paging assumption. Discovery, calendar availability, and review changes are not covered by that arithmetic.',
    },
    takeaway: 'Attach assumptions and a checkpoint to forecasts; reserve commitments for explicit agreements.',
    sourceNote: 'Launch and small-change guidance inform dependencies and review readiness. The time range is an original hypothetical forecast, not an empirical estimation model.',
  },
  {
    id: 'work-019',
    title: 'Match an update to the reader decision',
    outcome: 'Write two audience-specific updates that preserve the same impact and uncertainty while changing the entry point.',
    scene: 'A latency panel labels a millisecond value as seconds while release and debugging owners need different details.',
    sections: [
      {
        title: 'Two readers need different entrances',
        paragraphs: [
          'A fictional latency panel receives 2000 milliseconds but displays "2000 s." The correct conversion is 2 seconds. You need to update both the release owner deciding whether to include the panel and a developer investigating the formatter. Sending the release owner every trace detail hides the readiness decision. Sending the developer only "panel not ready" hides the reproduction. Different summaries are useful, provided they describe the same defect, its known scope, and the uncertainty about whether other views are affected.',
        ],
      },
      {
        title: 'Shorten detail, not uncertainty',
        paragraphs: [
          'Start by writing the common facts: a synthetic 2000 ms input is mislabeled as 2000 s; the stored value is unchanged; the inspected panel is affected; other views have not been checked. The release reader needs impact, readiness, and a decision request first. The debugging partner needs input, output, and the untested boundary first. A shorter update must not change "not checked" into "unaffected." That would create two incompatible stories rather than two levels of detail, and readers could make conflicting decisions from them.',
        ],
      },
      {
        title: 'Draft both versions from one fact set',
        paragraphs: [
          'Release note: "The latency panel is not ready: its unit display is wrong for the synthetic fixture. Stored values are unchanged. Other views are unassessed. Please decide whether to omit the panel pending verification." Technical note: "Input 2000 ms renders as 2000 s instead of 2 s. Storage still contains 2000 ms. Next check: where the value and suffix are joined in this panel. Other views are untested." Neither message claims the service itself became slower. Attach the same evidence record to both where access permits.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Same defect, different first question',
        alt: 'The release owner needs panel readiness; the debugging partner needs the 2000 ms to 2000 s reproduction and conversion boundary.',
        caption: 'Both fictional messages retain unchanged storage and untested other views; only their decision-relevant emphasis changes.',
        items: [
          { label: 'Release owner', detail: 'Panel not ready; decide whether to omit it. Other views remain unassessed.' },
          { label: 'Debugging partner', detail: '2000 ms renders 2000 s, expected 2 s; inspect value-to-label boundary.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper or two draft messages'],
      steps: [
        'List the four shared facts from the panel example, including the untested views.',
        'Write a release update that opens with readiness and ends with a decision request.',
        'Write a debugging update that opens with the input and incorrect output, then names the next boundary check.',
        'Compare both drafts and restore any uncertainty or impact detail that disappeared while shortening them.',
      ],
      notice: 'Each reader gets an actionable opening without receiving a different account of the defect.',
      troubleshooting: 'If one draft says only "cosmetic," replace the label with the actual wrong display and known limits.',
    },
    recall: {
      prompt: 'A backup-export defect is reproduced on one browser, with other browsers untested. What must a short stakeholder update retain?',
      hint: 'The tested scope is not the same as the full affected scope.',
      answer: 'Retain the observed export problem, the one tested browser, and the fact that wider scope is unknown. A technical partner can receive setup details separately, but the stakeholder summary must not claim that all other browsers are safe.',
    },
    quiz: {
      question: 'Which release summary preserves the evidence from the fictional panel?',
      options: [
        'This panel mislabels units; storage is unchanged; other views have not been assessed.',
        'The whole service is slower because the panel displays a larger number.',
        'Only this panel can be affected because it is the only one tested.',
      ],
      correctIndex: 0,
      explanation: 'The first summary preserves observation and scope. A display defect does not establish service latency or exclude defects in untested views.',
    },
    takeaway: 'Change the detail and opening for the reader, not the underlying facts or uncertainty.',
    sourceNote: 'Incident and postmortem references support shared factual communication. The unit-display defect and paired updates are original examples, not a real incident report.',
  },
  {
    id: 'work-020',
    title: 'Close a handoff with acknowledgment',
    outcome: 'Transfer a defined responsibility with current state, next action, and explicit acceptance by the incoming owner.',
    scene: 'A browser-compatibility investigation passes from one contributor to another at a workday boundary.',
    sections: [
      {
        title: 'A document can arrive without an owner',
        paragraphs: [
          'You are leaving a fictional compatibility investigation for Mira, the next contributor. Your note says "details attached," and the test matrix is available. Mira assumes you will answer the pending review question tomorrow; you assume Mira now owns it. Both people have the document, but nobody has accepted the action. A handoff is not just information transfer. It changes who is expected to make the next response, so the responsibility and the moment of acceptance need to be explicit.',
        ],
      },
      {
        title: 'Transfer a bounded current state',
        paragraphs: [
          'Include what is working, what remains uncertain, what was already tried, the pending action, and the incoming owner. In this example, Browser A passes the saved-report fixture; Browser B has not been checked; changing column width did not explain the missing header. The pending action is to inspect Browser B with that same fixture and report its header result. Do not turn a handoff into a complete project history. Give the next person the evidence and access location needed for this responsibility, without transferring personal credentials.',
        ],
      },
      {
        title: 'Ask for acceptance of the next action',
        paragraphs: [
          'Write: "Mira, please take ownership of the Browser B header check and the next update. Browser A passes this fixture; Browser B is untested. Column-width changes did not resolve the reported symptom. Please confirm you have the fixture and can own that check."',
          'A useful reply is: "Accepted. I have the fixture and will own the Browser B check and next update; other compatibility tests remain outside this handoff." Tell the participants that Mira owns that action once she accepts. If no acknowledgment arrives, follow the agreed coverage process instead of assuming responsibility moved.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A responsibility, then acceptance',
        alt: 'Mira confirms the fixture and accepts ownership of the Browser B check and next update.',
        caption: 'Fictional acknowledgment of responsibility, not merely receipt of a document.',
        items: [
          { label: 'Outgoing contributor', detail: 'Can you own Browser B header verification and the next update using this fixture?' },
          { label: 'Mira', detail: 'Accepted. I have the fixture and own that check and update, not the whole test matrix.' },
          { label: 'Outgoing contributor', detail: 'Noted. The participants will see Mira as the owner of the next response.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a notes editor'],
      steps: [
        'Draft the current-state note with Browser A evidence, the untested Browser B case, and the failed width idea.',
        'Name the incoming owner, exact next action, and required fixture in an acknowledgment request.',
        'Write a role-play acceptance that confirms the bounded responsibility and identifies any missing prerequisite.',
        'Add the ownership update you would share only after acceptance arrives.',
      ],
      notice: 'The outgoing and incoming notes agree on who owes the next response and what that response covers.',
      troubleshooting: 'If the reply is only "thanks," ask for confirmation of ownership rather than assuming polite acknowledgment means acceptance.',
    },
    recall: {
      prompt: 'You send a proposal to a colleague before leave, but they only confirm they can open it. What remains unresolved?',
      hint: 'Access, understanding, and responsibility are separate facts.',
      answer: 'Whether they accept a defined next action, such as collecting review decisions and updating the owner. Confirm the scope and any missing context. Opening the proposal establishes access, not responsibility for its progress while you are away.',
    },
    quiz: {
      question: 'The recipient can open the notes but says they cannot take the next action. What is the handoff state?',
      options: [
        'Complete because the information reached the intended person.',
        'Complete if the outgoing person has already announced their departure.',
        'Not accepted; arrange ownership through the agreed coverage process.',
      ],
      correctIndex: 2,
      explanation: 'Receiving information is not accepting responsibility. Coverage must be resolved explicitly rather than inferred from access or departure timing.',
    },
    takeaway: 'Transfer evidence and context, then confirm who has accepted the next responsibility.',
    sourceNote: 'Managing Incidents explicitly discusses acknowledged handoffs. This routine-work adaptation is original; the necessary formality depends on the responsibility being transferred.',
  },
  {
    id: 'work-021',
    title: 'Write a hypothesis that can be contradicted',
    outcome: 'Choose a check with predicted outcomes that distinguish a suspected cause from an alternative.',
    scene: 'A synthetic tag search returns no match for blue despite containing a record tagged Blue.',
    sections: [
      {
        title: 'A suspicion needs a prediction',
        paragraphs: [
          'A fictional tag search contains one record tagged "Blue," but the query "blue" returns no matches. You suspect a case-sensitive comparison. That phrase becomes a useful hypothesis only when it predicts an observation: with the same dataset and setup, querying "Blue" should find the record while "blue" does not. If both queries fail, a case mismatch alone cannot explain the result. Write that contradiction before testing. Otherwise it is easy to reinterpret every failure as another reason your first guess must be right.',
        ],
      },
      {
        title: 'Choose a result that changes the investigation',
        paragraphs: [
          'A discriminating check is one whose possible results separate explanations. Another general log dump may show activity without distinguishing case handling from the wrong dataset. The paired query checks the suspected difference while keeping the record and other conditions fixed. Confirm that the record actually reaches the lookup; otherwise two empty results could merely mean the fixture was not loaded. A hypothesis is not a commitment to a cause. It is a temporary explanation that should become weaker or stronger when relevant evidence arrives.',
        ],
      },
      {
        title: 'Interpret the pair without overclaiming',
        paragraphs: [
          'Suppose the synthetic results are "blue: zero matches" and "Blue: one match." Record: "Results support case-dependent behavior in this setup. Next inspect the normalization and comparison boundary." You have not proved which function is responsible, whether the behavior violates the agreed contract, or whether every other tag behaves the same way. If "Blue" also returns zero, write that the simple case-only explanation was contradicted and check fixture loading or another filter. The experiment is useful either way because it narrows the next question.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Paired query on the same record',
        alt: 'For a record tagged Blue, the hypothetical lowercase query returns zero matches and the matching-case query returns one.',
        caption: 'Only query case changes in this synthetic pair. Different results support case-dependent behavior, not a complete diagnosis.',
        items: [
          { label: 'Query: blue', detail: 'Observed: 0 matches against the loaded Blue record.' },
          { label: 'Query: Blue', detail: 'Observed: 1 match against the same record and setup.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The synthetic Blue record'],
      steps: [
        'Write the case-sensitive-comparison hypothesis and its prediction for each query before reading the example result.',
        'Name the dataset and other conditions that must stay the same between the two queries.',
        'Interpret the supplied zero-and-one pair, stating both the supported claim and its remaining limits.',
        'Write how your next check changes if both queries instead return zero.',
      ],
      notice: 'At least one possible result would make you change the explanation or the next test.',
      troubleshooting: 'If every outcome supports your hypothesis, make the prediction narrower and state a concrete contradiction.',
    },
    recall: {
      prompt: 'A thumbnail fails only in one report. You suspect its image format. What paired check could challenge that explanation?',
      hint: 'Keep the rendering context fixed while comparing controlled image fixtures.',
      answer: 'Use equivalent synthetic images in the suspected format and a supported comparison format under the same renderer and dimensions. Predict how each should behave. If both fail, format alone is insufficient; inspect shared loading or rendering conditions.',
    },
    quiz: {
      question: 'Both case variants return zero, although the target record is confirmed loaded. What is the sound next statement?',
      options: [
        'Normalize both queries immediately and report case sensitivity as the resolved cause.',
        'Case mismatch alone did not predict this pair; investigate another filter or lookup condition.',
        'Drop input handling from the investigation and concentrate only on infrastructure.',
      ],
      correctIndex: 1,
      explanation: 'The exact-case query was predicted to succeed. Its failure contradicts the simple explanation without excluding every possible interaction involving case.',
    },
    takeaway: 'Before checking, write what would support your explanation and what would count against it.',
    sourceNote: 'Effective Troubleshooting describes hypothesis-driven diagnosis and confounding conditions. The tag experiment is original and supports bounded reasoning, not certainty from one pair.',
  },
  {
    id: 'work-022',
    title: 'Reduce a reproduction while preserving the failure',
    outcome: 'Remove unnecessary details from a failing example without replacing the original symptom with a different error.',
    scene: 'A sorting reproduction is reduced from a decorated report to the two values that still appear in the wrong order.',
    sections: [
      {
        title: 'Smaller is useful only if the same thing fails',
        paragraphs: [
          'A fictional report contains labels "10," "2," and "3," plus a theme setting and a note. Its contract requires numeric ascending order, but the view displays 10, 2, 3. The same defect appears with a much smaller example if the irrelevant decoration is removed. Reduction means simplifying one part and checking that the target symptom remains. It does not mean stripping the input until any error occurs. A validation error caused by deleting a required field would be a different behavior to investigate.',
        ],
      },
      {
        title: 'Keep or restore each removal',
        paragraphs: [
          'Define the symptom first: at least one larger numeric value appears before a smaller one. In the supplied training results, removing the theme and note leaves 10, 2, 3, so that reduction is kept. Removing 3 then leaves 10, 2, while expected order is 2, 10; the defect remains. Removing 10 leaves only 2, which cannot show an ordering inversion. Restore 10. Each decision depends on the observed behavior, not on whether the example looks cleaner. Keep a known failing baseline so unsuccessful reductions do not erase your starting evidence.',
        ],
      },
      {
        title: 'Describe what the reduced case establishes',
        paragraphs: [
          'Write: "The two labels 10 and 2 are sufficient to reproduce the numeric-order violation in this fixture. Theme, note, and label 3 are not required here. A one-label version does not reproduce it." This makes the case easier to inspect without claiming it explains every reported ordering problem. The example suggests text comparison, but reduction alone does not prove the responsible function. Preserve the intended numeric contract beside the output so another investigator can recognize the same failure.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Keep the inversion, restore what matters',
        alt: 'Decoration and 3 can be removed; removing 10 eliminates the inversion, so it is restored.',
        caption: 'Supplied synthetic outputs, not executed tests. Preserve the same numeric-order failure after each removal.',
        items: [
          { label: 'Remove decoration', detail: 'Output 10, 2, 3 still violates numeric order. Keep reduction.' },
          { label: 'Remove label 3', detail: 'Output 10, 2 still differs from expected 2, 10. Keep reduction.' },
          { label: 'Remove label 10', detail: 'Output 2 has no inversion. Restore 10.' },
          { label: 'Retained reproduction', detail: 'Labels 10 and 2 preserve the original target symptom.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The supplied reduction outcomes'],
      steps: [
        'Write the original input labels and define the numeric-order violation before removing anything.',
        'Cross out the theme and note, recording that the supplied output still fails.',
        'Cross out 3 and compare actual 10, 2 with expected 2, 10.',
        'Try crossing out 10, then restore it because the one-label output no longer shows the defect.',
        'Write a reduced-reproduction note stating what was removed and what behavior remained.',
      ],
      notice: 'The final example is smaller while preserving the same observable disagreement with the contract.',
      troubleshooting: 'If the error changes, restore the prerequisite and check whether the original symptom returns.',
    },
    recall: {
      prompt: 'Removing a login step changes a report-formatting failure into an access-denied response. Is that a successful reduction?',
      hint: 'Is the formatting path still reached?',
      answer: 'No. Access denied prevents reaching formatting, replacing the original symptom. Restore the test prerequisite, then simplify details that still allow the formatting path to run.',
    },
    quiz: {
      question: 'A reduced example still errors, but now fails before entering the parser under investigation. What should you do?',
      options: [
        'Restore the removed prerequisite because the target failure has been replaced.',
        'Keep it because fewer setup steps always make a better reproduction.',
        'Claim both failures share a cause until someone proves otherwise.',
      ],
      correctIndex: 0,
      explanation: 'An earlier, different failure replaces the target behavior instead of reducing its reproduction.',
    },
    takeaway: 'Remove a detail, check the same symptom, and restore the detail when that symptom disappears.',
    sourceNote: 'Effective Troubleshooting supports reproducible simplification. These invented paper results make no claim about a real sorting implementation.',
  },
  {
    id: 'work-023',
    title: 'Control what changes in an experiment',
    outcome: 'Distinguish evidence about a changed combination from evidence about one isolated factor.',
    scene: 'A synthetic client timeout experiment changes build, payload, and waiting limit before isolating the limit.',
    sections: [
      {
        title: 'A passing combination leaves several explanations',
        paragraphs: [
          'A fictional client on build A times out with a 20-byte fixture and a 100 ms waiting limit. You switch to build B, shorten the fixture to 10 bytes, and raise the limit to 200 ms. The request now completes. Which change explains it? The result does not say. It establishes that a different combination behaved differently. Choosing the timeout as the cause because you changed it last is a story about your editing order, not evidence that the other changes were irrelevant.',
        ],
      },
      {
        title: 'Write a baseline and one intentional difference',
        paragraphs: [
          'The baseline is the known setup against which a change is compared. Record build, input, waiting limit, and any relevant instrumentation. For a single-factor check, return to build A and the 20-byte fixture, changing only the waiting limit from 100 to 200 ms. In the supplied synthetic setup, a response arrives after 150 ms. It misses the shorter limit but fits the longer one. This distinguishes waiting behavior under those conditions. It does not explain why the response takes 150 ms or establish that extending a real timeout is appropriate.',
        ],
      },
      {
        title: 'Restore and state the bounded conclusion',
        paragraphs: [
          'The paper evidence is: A/20 bytes/100 ms times out; A/20 bytes/200 ms completes; restoring A/20 bytes/100 ms times out again. Write: "The outcome changes with the waiting limit in this fixture. Build B and the smaller payload are not required for that observed change." Restoring the baseline checks whether the original behavior remains available, rather than relying on a one-way comparison. Real systems can have timing variation and interacting factors, so a planned multi-factor experiment may be needed later.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four recorded test conditions',
        alt: 'Baseline times out, raising only its limit permits completion, and restoring the limit restores the timeout.',
        caption: 'Hypothetical paper results. The controlled pair differs only in its 100 versus 200 ms limit.',
        items: [
          { label: 'Baseline', detail: 'Build A; 20 bytes; 100 ms limit: timeout.' },
          { label: 'Changed combination', detail: 'Build B; 10 bytes; 200 ms limit: completion.' },
          { label: 'Limit-only change', detail: 'Build A; 20 bytes; 200 ms limit: completion at 150 ms.' },
          { label: 'Baseline restored', detail: 'Build A; 20 bytes; 100 ms limit: timeout again.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'The four supplied conditions'],
      steps: [
        'Make columns for build, payload bytes, waiting limit, and outcome. Copy each supplied condition.',
        'Circle every field changed in the combined trial and the single field changed in the controlled trial.',
        'Compare the 150 ms response with both limits and write why the outcomes differ in the controlled pair.',
        'State what remains unknown about response latency and why this is not a recommendation to change a live timeout.',
      ],
      notice: 'The limit is isolated; the underlying response delay remains unexplained.',
      troubleshooting: 'If a baseline field is missing, restore that information before assigning the outcome to one change.',
    },
    recall: {
      prompt: 'A rendering test passes after changing the font, viewport, and browser. What can you conclude, and what would you compare next?',
      hint: 'Separate the successful combination from any one proposed cause.',
      answer: 'Only the new combination is demonstrated to work. To investigate font choice, keep browser, viewport, input, and other relevant settings fixed. Suspected interactions need an explicitly planned multi-factor comparison.',
    },
    quiz: {
      question: 'How should the original trial that changed build, payload, and waiting limit be summarized?',
      options: [
        'The waiting limit explains the pass because it was the last setting changed.',
        'Each changed setting should be retained as an independently verified fix.',
        'The combination passed, but the responsible factor remains unknown because three conditions changed.',
      ],
      correctIndex: 2,
      explanation: 'The combination is evidence, but it does not identify which change mattered. A controlled comparison narrows that attribution without explaining every underlying mechanism.',
    },
    takeaway: 'Match the causal claim to the variables the experiment actually held fixed.',
    sourceNote: 'Effective Troubleshooting discusses controlled tests, confounders, and instrumentation effects. The timing data is synthetic and is not operational timeout guidance.',
  },
  {
    id: 'work-024',
    title: 'Bisect with a dependable classification',
    outcome: 'Reason through a regression search while preserving ambiguity from untestable revisions.',
    scene: 'A paper revision history contains a known good version, a bad version, and an unbuildable candidate.',
    sections: [
      {
        title: 'Search history with one definition of bad',
        paragraphs: [
          'Suppose a fictional label formatter handles the same fixture correctly at revision r1 and incorrectly at r9. You want to locate the change that introduced the defect. Bisection tests a revision between known endpoints, then narrows the remaining interval according to whether that revision shows the target defect. Git bisect supports this workflow. Before starting, define the exact output that counts as good or bad and confirm both endpoints with it. A different test at each revision would make the classifications incomparable.',
        ],
      },
      {
        title: 'An unavailable test is not a failure result',
        paragraphs: [
          'Use a linear training history with one good-to-bad transition. Testing r5 shows the wrong label, so the transition lies after r1 and no later than r5. Testing r3 succeeds, narrowing it to r4 or r5.',
          'But r4 cannot build because of an unrelated missing dependency. That does not show whether the label formatter is good or bad there. Git has a skip classification for an untestable revision. A skip preserves the missing information; it can leave several possible first-bad revisions instead of producing a unique answer.',
        ],
      },
      {
        title: 'Report the range you actually established',
        paragraphs: [
          'Write: "Same fixture: r1 and r3 pass; r5 and r9 fail. r4 is untestable for an unrelated build reason. The first bad revision is unresolved between r4 and r5 in this assumed linear history." Do not call r4 bad to make the search finish neatly, or call it good because the target test never ran. Investigate whether r4 can be tested in an isolated, reproducible setup, or inspect both candidates while retaining uncertainty. Intermittent failures also need a dependable classification method before bisection can be trusted.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A bisect that ends with two candidates',
        alt: 'r3 passes and r5 fails; untestable r4 leaves two possible first-bad revisions.',
        caption: 'Synthetic linear history with one transition. Arrows show narrowing, not elapsed time.',
        items: [
          { label: 'Endpoints', detail: 'r1 good; r9 bad under the same label test.' },
          { label: 'Test r5', detail: 'Bad. Transition is after r1 and at or before r5.' },
          { label: 'Test r3', detail: 'Good. First bad is now r4 or r5.' },
          { label: 'r4 cannot build', detail: 'Untestable, not bad. Retain candidates r4 and r5.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Nine revision labels r1 through r9'],
      steps: [
        'Write the history and one sentence defining the label output that means good versus bad.',
        'Mark r1 good and r9 bad, then apply the supplied r5 bad classification.',
        'Mark r3 good and circle the remaining first-bad candidates r4 and r5.',
        'Mark r4 untestable and write a result preserving both candidates rather than assigning an invented verdict.',
      ],
      notice: 'The conclusion preserves both candidates rather than inventing a unique result.',
      troubleshooting: 'If you classified an unrelated build failure as bad, separate test availability from the target behavior and recalculate the range.',
    },
    recall: {
      prompt: 'A revision passes once and fails once under the same apparent setup. What should happen before trusting its bisect classification?',
      hint: 'A midpoint is useful only if its verdict means the same thing as the endpoints.',
      answer: 'Investigate the intermittent setup or define a suitable repeatable classification procedure. Preserve uncertainty instead of choosing the convenient result. A noisy verdict can send the search into an interval that excludes the actual behavior change.',
    },
    quiz: {
      question: 'With r3 good, r5 bad, and r4 untestable, what is the justified conclusion under the example assumptions?',
      options: [
        'r5 is certainly first bad because it is the first failing revision tested.',
        'r4 or r5 could be first bad; the untestable revision prevents a unique conclusion.',
        'r4 is certainly first bad because it did not build.',
      ],
      correctIndex: 1,
      explanation: 'A tested bad revision is not necessarily the first bad revision. r4 has no target-test result, so both candidates remain possible.',
    },
    takeaway: 'Bisection narrows reliable classifications; it cannot manufacture evidence for skipped revisions.',
    sourceNote: 'The inherited Git reference documents skipping. This invented history assumes consistent classifications and one linear good-to-bad transition.',
  },
  {
    id: 'work-025',
    title: 'Keep negative results with their limits',
    outcome: 'Record a non-reproduction in a way that shows which explanation it tested and which conditions remain uncovered.',
    scene: 'A plain-text name fixture passes while the reported export defect concerns accented names.',
    sections: [
      {
        title: 'Did not reproduce still needs a setup',
        paragraphs: [
          'A fictional export report says that names containing accented characters disappear. You test a fixture containing Mina and Bo; both appear correctly. "Could not reproduce" is true, but it can mislead the next reader into thinking accented names were tested. Your fixture did not exercise that reported condition. A negative result means an expected effect was absent under a particular setup. Its value depends on whether the setup could reveal the predicted effect, not on how many times a success message appeared.',
        ],
      },
      {
        title: 'Separate disconfirming from inconclusive',
        paragraphs: [
          'A disconfirming result conflicts with a prediction made by a hypothesis under suitable conditions. An inconclusive result leaves the hypothesis unresolved because the necessary condition, observation, or comparison is missing. Mina and Bo passing establishes a useful baseline for plain names. It is inconclusive about accented names. Keep both statements: a narrow success can be real evidence without settling the reported defect. Also preserve the exact representation of a synthetic accented fixture when one is tested; visually similar text can be encoded differently, so the visible spelling alone may not describe the input fully.',
        ],
      },
      {
        title: 'Write the exclusion you actually earned',
        paragraphs: [
          'Draft: "Hypothesis: the exporter drops names containing accented characters. Setup: demo build N2, plain-name fixture Mina and Bo, standard export path. Observation: both rows retained. Interpretation: plain-name baseline passes; accented-name hypothesis remains untested. Next: compare a synthetic accented fixture under the same setup." That note stops a colleague from repeating the plain-name check while assuming it is new coverage. If a later representative accented fixture passes, record its exact input and result too, but do not erase the original report or declare every encoding safe. Keep missing observations separate from observations that genuinely contradict the predicted behavior.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What the successful export covers',
        alt: 'Mina and Bo were retained in the plain-name test; accented-name behavior was not exercised and remains unknown.',
        caption: 'This fictional evidence pair distinguishes a passed baseline from an untested reported condition.',
        items: [
          { label: 'Plain-name fixture', detail: 'Mina and Bo retained: observed baseline success.' },
          { label: 'Accented-name condition', detail: 'No representative input in this test: hypothesis unresolved.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or an evidence-log draft'],
      steps: [
        'Write the accented-name hypothesis and the plain-name input that was actually checked.',
        'Record the supplied result without translating it into "export is healthy" or "report is wrong."',
        'Add one supported conclusion, one unresolved condition, and a next comparison using synthetic data.',
        'Give the note a build and fixture label so another investigator can recognize the already completed check.',
      ],
      notice: 'The note preserves a useful baseline without pretending it tested the reported trigger.',
      troubleshooting: 'If a conclusion covers more input types than the setup, narrow the wording or design the missing comparison.',
    },
    recall: {
      prompt: 'A mobile layout defect does not appear in a wide desktop window. What should the evidence log say?',
      hint: 'A different viewport may omit the condition that triggers the reported layout.',
      answer: 'Record the browser, viewport, fixture, and observed desktop result. State that the reported mobile width was not exercised, then plan a matching viewport check. The desktop success neither disproves the report nor establishes all layouts are correct.',
    },
    quiz: {
      question: 'A test omits the condition predicted to trigger the defect. How should its passing result be classified for that hypothesis?',
      options: [
        'Conclusive rejection of the hypothesis because the application ran.',
        'Evidence about the tested baseline, but inconclusive about the omitted trigger.',
        'Worthless evidence that should be deleted from the investigation record.',
      ],
      correctIndex: 1,
      explanation: 'The baseline result is reusable, but it cannot contradict a prediction about an absent condition. Preserving its limits prevents both overclaiming and needless repetition.',
    },
    takeaway: 'A non-reproduction is evidence about its setup, not a verdict on every reported condition.',
    sourceNote: 'Effective Troubleshooting discusses negative results and scope. These original export examples make no measured encoding or compatibility claims.',
  },
  {
    id: 'work-026',
    title: 'Put a checklist at a decision point',
    outcome: 'Build a short checklist with a defined trigger, observable checks, and a response to unanswered items.',
    scene: 'An export-preview change needs a review-readiness checklist rather than a combined release manual.',
    sections: [
      {
        title: 'Choose what the list decides',
        paragraphs: [
          'You are about to request review for a fictional export-preview change. A copied checklist asks about release ownership, backups, marketing copy, test fixtures, and office equipment. It looks thorough, but many items do not answer the immediate question: is this change ready for a reviewer to assess? Define the trigger before adding checks. Here it is "before requesting code review," and the decision is whether the reviewer has enough context and evidence to evaluate the behavior. Deployment approval is a different decision.',
        ],
      },
      {
        title: 'Replace reassurance with observable answers',
        paragraphs: [
          '"Quality checked" is not an observable item. "The description states how an empty export preview behaves" can be answered by inspecting the description. "The empty-fixture test result is attached" points to evidence. "Known limits are listed" lets a reviewer distinguish tested behavior from assumptions. Keep detailed execution procedures outside the short list and link them from the actual work system. A checklist reminds someone to inspect evidence at a decision point; it does not make an untested claim true because a box can be ticked.',
        ],
      },
      {
        title: 'Specify what an unanswered item does',
        paragraphs: [
          'Draft three checks: "Expected empty-preview behavior stated; fixture and result available; untested spreadsheet integration identified." Add: "If the result is missing, the author either supplies it or asks the reviewer whether a clearly labeled design-only review is useful. This is not readiness for approval." The exception changes the kind of review rather than disguising missing evidence as a pass. Assign the author responsibility for resolving incomplete items. A release checklist would need other concerns, but importing every future release task here makes the current list harder to use.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A review request with an exception path',
        alt: 'Before review, inspect behavior description, fixture evidence, and limits; missing evidence requires completion or a labeled design-only review.',
        caption: 'Fictional review-readiness checks, not deployment permission. Missing evidence changes the review purpose.',
        items: [
          { label: 'Behavior described', detail: 'Empty export preview has an explicit expected result.' },
          { label: 'Evidence available', detail: 'Fixture and result can be inspected by the reviewer.' },
          { label: 'Limits named', detail: 'Spreadsheet integration remains untested.' },
          { label: 'Missing evidence?', detail: 'Author supplies it or requests design-only feedback, not approval.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a notes editor'],
      steps: [
        'Write the trigger "before requesting review" and the decision the checklist supports.',
        'Turn behavior, evidence, and limits into three checks whose answers can be inspected.',
        'Add an author-owned response when fixture evidence is missing, including how a design-only review is labeled.',
        'Remove one unrelated release concern and record which separate decision should own it.',
      ],
      notice: 'Every item affects review readiness, and a missing answer has a route other than an automatic tick.',
      troubleshooting: 'If an item says ready or good without an artifact, name what the checker must actually inspect.',
    },
    recall: {
      prompt: 'You need a checklist before handing a training document to a translator. What should define its contents?',
      hint: 'Focus on the recipient\'s next action rather than the eventual publication workflow.',
      answer: 'Define readiness for translation: stable source text, explained terminology, and an owner for ambiguous passages. Keep publication approval separate. Missing source decisions should return to the author, not become guesses the translator must silently make.',
    },
    quiz: {
      question: 'A review request lacks test evidence but seeks early design feedback. What is the honest checklist outcome?',
      options: [
        'All checks pass because any review is better than none.',
        'No discussion can occur until every release task is complete.',
        'Label it design-only feedback and keep evidence required before approval.',
      ],
      correctIndex: 2,
      explanation: 'The exception changes the review purpose without pretending acceptance evidence exists. A checklist can support that decision without blocking all discussion.',
    },
    takeaway: 'Define the trigger and decision first, then add observable checks and an explicit exception path.',
    sourceNote: 'Launch and review references inform checklist content. This review-readiness design is an original heuristic, not a substitute for the applicable approval process.',
  },
  {
    id: 'work-027',
    title: 'Write stop conditions before risky work',
    outcome: 'Specify a mismatch that requires a pause, the evidence to preserve, and the authorized route to resolution.',
    scene: 'A tabletop change plan names a different training target from the one approved.',
    sections: [
      {
        title: 'A familiar procedure can point at the wrong target',
        paragraphs: [
          'In a paper exercise, an approved request names training target LAB-A, but the proposed change plan names LAB-B. The operator recognizes every step and believes the labels are probably interchangeable. That confidence does not resolve the mismatch. A stop condition is a written rule requiring a pause when a necessary precondition is false or unknown. Here the precondition is an exact match between approved and planned target identity. The check belongs before the consequential step, while stopping is still a clear option.',
        ],
      },
      {
        title: 'Pair the condition with a response',
        paragraphs: [
          'A useful stop condition has three parts: the observation that triggers it, the safe response, and the person or process that can resolve it. "Be careful with targets" supplies none of those precisely. "If the plan identifies a different target than approval, do not proceed; record both identifiers and ask the change owner for a corrected plan and confirmed scope" is actionable. Friendly names can be ambiguous, so compare the identity required by the procedure. Knowing how to perform a step does not establish that the target or authorization is correct.',
        ],
      },
      {
        title: 'Write the pause message before the procedure',
        paragraphs: [
          'Use: "STOP: approval names LAB-A; the plan identifies LAB-B. No change attempted. Please confirm the authorized target and issue a corrected plan before this resumes."',
          'Do not edit the identifier and continue merely because one value looks more plausible. Missing recovery information can be a separate stop condition with its own owner and prerequisite. Resolving one mismatch does not waive the others. Recheck the required preconditions when an approved revision arrives.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The target mismatch stops the plan',
        alt: 'Approval names LAB-A, the plan names LAB-B, work pauses without a change, and the owner must confirm a corrected plan.',
        caption: 'Invented paper targets. A mismatch leads to owner resolution, not a bypass.',
        items: [
          { label: 'Read approval', detail: 'Authorized target identity: LAB-A.' },
          { label: 'Compare the plan', detail: 'Planned target identity: LAB-B. Mismatch detected.' },
          { label: 'Pause before action', detail: 'No change; preserve both identifiers and the plan version.' },
          { label: 'Owner resolves', detail: 'Corrected approved plan is required; recheck all preconditions.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper labeled tabletop exercise'],
      steps: [
        'Write approval target LAB-A beside planned target LAB-B; do not connect to any system.',
        'Draft the stop condition, naming the exact mismatch that triggers it.',
        'Write the no-change response and the confirmation needed from the change owner.',
        'Add a separate missing-recovery-information stop condition and identify its resolution prerequisite.',
      ],
      notice: 'The plan explains when to pause and what evidence is needed before resuming, without improvising a bypass.',
      troubleshooting: 'If the response says "fix the identifier and continue," require approved scope confirmation instead of a personal guess.',
    },
    recall: {
      prompt: 'A planned report publication has approval for one audience, but the destination includes a broader group. What stop condition fits?',
      hint: 'The destination is part of the authorized scope, even when the content is ready.',
      answer: 'Pause publication when the actual audience differs from approval, preserve the scope mismatch, and ask the publication owner to confirm a corrected destination or new approval. Do not infer permission from the convenience of an existing distribution group.',
    },
    quiz: {
      question: 'The approved target and planned target differ, but the operator thinks the labels are aliases. What should the procedure require?',
      options: [
        'Pause until the authorized owner confirms identity and the corrected plan.',
        'Proceed if the operator has used both names before.',
        'Change the plan locally and use the original approval unchanged.',
      ],
      correctIndex: 0,
      explanation: 'A suspected alias is not verified identity or permission. The mismatch must be resolved before the consequential step, not explained afterward.',
    },
    takeaway: 'A stop condition needs an observable trigger, a safe pause, and an authorized resolution path.',
    sourceNote: 'Launch and incident references inform operational preconditions. This paper exercise is not a runbook or authorization for any live change.',
  },
  {
    id: 'work-028',
    title: 'Verify the outcome after the step',
    outcome: 'Distinguish request acceptance, workflow completion, and verification of the actual required result.',
    scene: 'A fictional export job reports completion but its twelve output rows contain only eleven distinct identifiers.',
    sections: [
      {
        title: 'Accepted is not completed',
        paragraphs: [
          'A fictional export interface returns HTTP 202 Accepted and a job identifier, J17. The checklist immediately marks the export complete. Yet the response only acknowledges acceptance for processing; it does not establish a finished file. A later job status can establish another milestone, but that still may not verify the exact output required. Keep the action, its acknowledgment, and the desired outcome separate. Otherwise a procedure can look successful at every step while the user still lacks a correct result.',
        ],
      },
      {
        title: 'Define the observation that closes the task',
        paragraphs: [
          'For this training contract, J17 should export twelve selected records, each once, preserving their identifiers. Verification means checking the documented job state and then the resulting data. A file with twelve rows is not enough if one identifier appears twice and another is absent. Read-only checks should be tied to the particular job and selection, not simply to the newest file visible in a folder. If the documented process is asynchronous, use its stated lifecycle and waiting guidance. An unavailable or pending result remains unverified, not automatically failed.',
        ],
      },
      {
        title: 'A completed job can still miss acceptance',
        paragraphs: [
          'Suppose J17 later reports completed, but its twelve data rows contain only eleven distinct identifiers: one record is duplicated and one selected record is missing. Write: "Request accepted; workflow reports completed; output acceptance failed because the identifier set differs from the twelve selected records."',
          'That is more precise than either "everything passed" or "the request failed." Preserve the job identifier and discrepancy for investigation. Do not repeat the export action blindly when status is unclear; duplication may make the evidence harder to interpret.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'J17 has three different verdicts',
        alt: 'J17 reports completed, but its twelve rows contain eleven unique identifiers and fail output acceptance.',
        caption: 'Hypothetical counts. Check record identity as well as row count and workflow state.',
        items: [
          { label: 'Request accepted', detail: 'HTTP 202 and J17 identify accepted work, not a finished export.' },
          { label: 'Job completed', detail: 'Documented job state says processing ended.' },
          { label: 'Output inspected', detail: '12 data rows, 11 unique IDs: one duplicate and one missing record.' },
          { label: 'Acceptance not met', detail: 'Preserve J17 and the discrepancy; do not claim a verified export.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Twelve fictional selected IDs numbered 1 through 12'],
      steps: [
        'Write expected IDs 1 through 12, then model output 1 through 11 with 11 repeated once.',
        'Count total rows and distinct IDs separately, identifying duplicated 11 and missing 12.',
        'Draft separate checklist states for request acceptance, job completion, and output verification.',
        'Write an inconclusive-status response that uses the documented read-only check rather than repeating the action.',
      ],
      notice: 'Output checks catch a defect hidden by successful request and job states.',
      troubleshooting: 'If verification checks only a success label, add the exact identifiers or fields required by acceptance.',
    },
    recall: {
      prompt: 'An email service accepts a training notification request. What additional evidence would support a claim that the intended recipient received it?',
      hint: 'Acceptance by a service and arrival at a destination are different boundaries.',
      answer: 'Inspect the service\'s documented delivery evidence for the intended destination, retaining uncertainty about mailbox receipt. Acceptance alone does not prove arrival, and unclear status does not justify blind resending.',
    },
    quiz: {
      question: 'J17 has twelve rows but eleven unique IDs. Which statement matches the contract?',
      options: [
        'The export passes because row count alone matches the selected count.',
        'The job may be completed, but required record coverage has not passed verification.',
        'HTTP acceptance must have failed because the output is wrong.',
      ],
      correctIndex: 1,
      explanation: 'Workflow state and data correctness are separate claims. The duplicate and missing identifier violate the output requirement despite the matching row count.',
    },
    takeaway: 'Close the task using evidence of its required outcome, not merely the last successful acknowledgment.',
    sourceNote: 'HTTP Semantics distinguishes 202 acceptance from completed processing. The job lifecycle and identifier checks are original examples, not a universal API contract.',
  },
  {
    id: 'work-029',
    title: 'Separate rollback from data recovery',
    outcome: 'Explain why reverting a program does not restore or translate the data it has already written.',
    scene: 'A training catalogue changes a status field from text to an object before an older reader is restored.',
    sections: [
      {
        title: 'The old reader meets new data',
        paragraphs: [
          'In a fictional catalogue, version 1 stores status as the text "open." Version 2 stores an object containing code: "open" and additional metadata. After a problem, someone proposes restoring the version 1 application. That changes the code running, but not the object already stored by version 2. If version 1 expects text, it may fail to interpret that record. The mistake is treating a program rollback as though it automatically rewinds every persistent effect produced while the newer program was running.',
        ],
      },
      {
        title: 'Identify which state each plan changes',
        paragraphs: [
          'A rollback returns a deployed change toward an earlier operating state. Data recovery addresses information that was lost, modified, or made incompatible. Their evidence differs. A code rollback needs a known compatible reader and operating procedure. Recovery needs an understood source of data, restoration procedure, and accepted limits such as lost later writes. A backup taken before new records were created does not contain those records. Nor does its existence prove it can be restored correctly. Examine persistent data formats and external side effects separately from the application version.',
        ],
      },
      {
        title: 'Write compatibility as a precondition',
        paragraphs: [
          'For the paper plan, write: "Restoring version 1 would restore its reader, not convert status objects back to text. Before considering rollback, the owner must establish how that reader handles already-written objects. Data conversion or restoration requires a separately reviewed plan." A staged design might introduce a reader that accepts both formats before writing the new one, but that compatibility needs tests rather than assumption. Restoration can also discard useful changes made after a backup. List what remains after each proposed action and who approves any data loss or transformation.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Changing the reader does not change the record',
        alt: 'Version 2 writes a status object; restoring the older reader leaves that object stored.',
        caption: 'Fictional format change: reverting the reader does not convert the stored record.',
        items: [
          { label: 'Version 1', detail: 'Reader expects status text: open.' },
          { label: 'Version 2 writes', detail: 'Stored status becomes an object with code open and metadata.' },
          { label: 'Version 1 restored', detail: 'Old reader returns; the new status object still exists.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper with separate code and data columns'],
      steps: [
        'Copy the three stages, writing the running reader and stored status format separately at each stage.',
        'Circle the persisted object that does not change when version 1 is restored.',
        'Draft the compatibility question and evidence an owner would need before approving a rollback plan.',
        'Add a separate recovery question about writes made after a backup and who may approve their loss.',
      ],
      notice: 'Your plan distinguishes restoring code from recovering, preserving, or translating persistent information.',
      troubleshooting: 'If your diagram rewinds stored data automatically with the binary, split those into separate state changes.',
    },
    recall: {
      prompt: 'A newer tool renamed uploaded files before its code was reverted. What must the rollback discussion still address?',
      hint: 'Effects outside the running program can survive the program version change.',
      answer: 'The renamed files remain unless a separate approved operation changes them. Check whether the older tool understands those names, preserve a reliable mapping, and plan any recovery separately. Reverting code alone does not reverse completed file operations.',
    },
    quiz: {
      question: 'What evidence most directly supports safe compatibility in the fictional rollback plan?',
      options: [
        'The old binary can start without any stored records.',
        'A backup exists, although its restoration and contents are unknown.',
        'The proposed rollback reader is tested against representative records written by the newer version.',
      ],
      correctIndex: 2,
      explanation: 'The relevant boundary is old-reader behavior on new data. Startup alone and an unexamined backup do not establish that compatibility.',
    },
    takeaway: 'List persistent effects separately from running code, and require evidence for both rollback and recovery.',
    sourceNote: 'Launch and critical-state references inform persistence and recovery concerns. This format example is original conceptual planning, not a restoration runbook.',
  },
  {
    id: 'work-030',
    title: 'Rehearse a checklist as a new reader',
    outcome: 'Find missing prerequisites and ambiguous outcomes in a procedure through a safe paper walkthrough.',
    scene: 'A newcomer rehearses an export checklist that says only choose the correct report and check the result.',
    sections: [
      {
        title: 'The author knows what correct means',
        paragraphs: [
          'A fictional procedure says: "Choose the correct report. Export it. Check the output." Its author knows that the exercise uses report R3, edition 2, and expects records A and B. A new reader does not. If they select a different report, the checklist has tested their ability to guess rather than their ability to follow instructions. A rehearsal makes that missing context visible before anyone relies on the document for consequential work. The reader\'s questions are evidence about the procedure, not a personal failure.',
        ],
      },
      {
        title: 'Test understanding without a live operation',
        paragraphs: [
          'Use a tabletop walkthrough: read each step and describe the input, action, expected result, and point where you would pause. Supply an invented evidence packet rather than performing a real export. Record every assumption needed to proceed. Does "correct report" have an identifier and edition? Does "check" specify the record set, header, or encoding? If the author answers a question verbally, that answer belongs in the procedure or a referenced prerequisite. A successful run with the author coaching does not establish that the written instructions stand on their own.',
        ],
      },
      {
        title: 'Revise, version, and rehearse the changed step',
        paragraphs: [
          'Rewrite: "Use synthetic report R3, edition 2. Expected data records are A and B, each once. Compare the exported identifiers with that set; exclude the header from the count. If the edition differs, pause and ask the document owner for the matching fixture." Record which checklist version and packet were rehearsed. Name the owner who updates the document when the report schema or selection interface changes. Rehearse the corrected step again, because a new sentence can introduce a new ambiguity.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A question becomes a missing prerequisite',
        alt: 'A newcomer asks for the report identity and expected output; the author supplies missing prerequisites.',
        caption: 'Fictional rehearsal: required answers belong in the document, not private coaching.',
        items: [
          { label: 'New reader', detail: 'Which report does correct refer to?' },
          { label: 'Author', detail: 'Synthetic R3, edition 2. That prerequisite is missing from the checklist.' },
          { label: 'New reader', detail: 'What proves the output is right?' },
          { label: 'Author', detail: 'Records A and B, each once, excluding the header. I will state that check.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'The three-sentence procedure in the first section'],
      steps: [
        'Copy the original procedure and underline correct and check as terms requiring missing information.',
        'Using the supplied R3 packet facts, list the prerequisite and expected record set a newcomer needs.',
        'Rewrite the steps and add a pause for an edition mismatch without performing an export.',
        'Label the revised checklist version, maintenance owner role, and a schema change that would trigger another rehearsal.',
      ],
      notice: 'A reader can explain what to select and inspect without receiving an undocumented hint from the author.',
      troubleshooting: 'If you can only explain a step aloud, add that missing condition or reference to the written procedure.',
    },
    recall: {
      prompt: 'A setup guide works for its author but omits a required account role. What should a newcomer rehearsal change?',
      hint: 'A prerequisite is part of the procedure even when the author already satisfies it.',
      answer: 'State the required role, its authorized verification method, and the approved request path. Rehearse without assuming the reader already has the author\'s access; that assumption hid the prerequisite.',
    },
    quiz: {
      question: 'A reader completes a rehearsal only after several verbal hints. What does that show?',
      options: [
        'The document still depends on knowledge not present in its written instructions.',
        'The procedure is validated because the final output was correct.',
        'The reader needs to memorize the hints rather than change the document.',
      ],
      correctIndex: 0,
      explanation: 'Required hints are missing content. A coached success does not establish independent use of the document.',
    },
    takeaway: 'Rehearse the written procedure, capture every required hint, and keep a named owner for changes.',
    sourceNote: 'Incident and launch references inform rehearsal. This original paper walkthrough does not validate a live runbook.',
  },
  {
    id: 'work-031',
    title: 'Give the reviewer a path through the change',
    outcome: 'Write a review description that orients readers around behavior, reading order, tests, and specialist questions.',
    scene: 'A search-result highlight change needs a review path through matching, rendering, and accessibility.',
    sections: [
      {
        title: 'The diff does not explain its own purpose',
        paragraphs: [
          'A fictional catalogue search finds matching titles but gives readers no indication of which text matched. You add highlighting: searching for "art" marks those letters inside "Cartography." Opening the review with "added highlight spans" describes implementation without explaining the user behavior. Start with the mismatch the change addresses, then identify where its logic lives. The reviewer should not have to infer the intended result from the first modified line or discover halfway through that the patch also changes an unrelated search rule.',
        ],
      },
      {
        title: 'Connect reading order to questions',
        paragraphs: [
          'A review path is a suggested order that makes the behavior understandable, not an instruction to approve selected lines. First inspect how the matcher finds the character range. Then inspect how rendering preserves the original title while marking that range. Finally inspect tests for a normal match, an empty query, and text containing punctuation. Keep unrelated formatting out of this functional change where it would obscure review. If accessibility or another specialist concern needs a qualified reviewer, identify that need rather than suggesting your own tests cover every dimension.',
        ],
      },
      {
        title: 'Write an orientation the reviewer can use',
        paragraphs: [
          'Draft: "Purpose: show which title text matched without changing search results. Start with match-range calculation, then title rendering, then fixture tests. Query art should highlight art in Cartography; empty query should preserve the unmarked title. Punctuation remains literal text. Please inspect whether the new markup preserves the accessible name. Keyboard navigation is unchanged by design but still needs its regression check." Mention known limits, such as unsupported multiple match ranges, if those are real in the proposal.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Read the highlight change by behavior',
        alt: 'Follow art matching Cartography through rendering, fixture tests, and the accessible-name check.',
        caption: 'Fictional review path: each stop addresses behavior, not merely a changed file.',
        items: [
          { label: 'Match range', detail: 'Query art locates the matching letters inside Cartography.' },
          { label: 'Title rendering', detail: 'Marks the range while preserving the title as literal text.' },
          { label: 'Fixture tests', detail: 'Normal match, empty query, and punctuation have explicit expected outputs.' },
          { label: 'Specialist question', detail: 'Does the new markup preserve the accessible name and interaction?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper or a draft review description'],
      steps: [
        'Write the intended highlight behavior and the search behavior that must remain unchanged.',
        'Give a reading order through matcher, renderer, and tests, naming a question at each boundary.',
        'Include the art and empty-query expected outputs rather than a generic "tests pass" claim.',
        'Add an accessibility review request and one honestly stated limitation of the fictional first version.',
      ],
      notice: 'The reviewer can begin with purpose and evidence instead of reconstructing them from implementation details.',
      troubleshooting: 'If the description is only a file list, explain what behavior or risk the reviewer should assess in each part.',
    },
    recall: {
      prompt: 'A configuration change moves validation before saving. What reading path would orient a reviewer?',
      hint: 'Follow the changed order and the state that must remain unchanged on rejection.',
      answer: 'Start with the acceptance rule, then validation, then the save boundary and rejection tests. Show an invalid input that must not write state. Name any consumer compatibility or specialist concern rather than treating a short diff as complete evidence.',
    },
    quiz: {
      question: 'Which review description best supports assessment of a changed behavior?',
      options: [
        'A complete list of modified symbols without expected outputs.',
        'Purpose, a behavioral reading path, relevant tests, and known limits.',
        'A request to inspect only the lines the author believes are risky.',
      ],
      correctIndex: 1,
      explanation: 'Orientation helps the reviewer understand and challenge the change. It does not replace expected outputs or restrict review to the author\'s risk guesses.',
    },
    takeaway: 'Show the reviewer what changes, where to start, and which evidence and risks need inspection.',
    sourceNote: 'The reviewed code-review guidance covers design, context, tests, and qualified reviewers. This highlight scenario and reading path are original illustrations.',
  },
  {
    id: 'work-032',
    title: 'Review the invariant around the diff',
    outcome: 'Trace every affected exit path against a condition the function must preserve beyond the changed line.',
    scene: 'A new file-type rejection returns before a preview screen clears its busy state.',
    sections: [
      {
        title: 'A reasonable return can leave the screen stuck',
        paragraphs: [
          'A fictional preview function sets busy to true while it processes a selected file. At the end, it clears busy so the user can try another file. A patch adds an early rejection for unsupported file types. The new condition looks sensible in the diff, but its return happens before the old cleanup statement. An invalid selection now leaves the controls disabled. Reviewing the new condition alone misses the obligation established earlier in the function and completed later on its old path.',
        ],
      },
      {
        title: 'Name the preserved condition',
        paragraphs: [
          'An invariant is a condition that must hold at the relevant boundary of the system. Here the rule is not "busy is always false," because work legitimately sets it true. The rule is "after any completed preview attempt, including rejection or error, busy is false."',
          'State the boundary precisely, then trace every exit introduced or affected by the patch. Successful parsing, parsing failure, and validation rejection all end an attempt. Callers may rely on the same cleanup obligation even when their lines are outside the displayed diff.',
        ],
      },
      {
        title: 'Review the paths, not a preferred coding style',
        paragraphs: [
          'Write: "On unsupported input, this return exits after busy becomes true but before it is cleared. That violates the end-of-attempt rule and leaves Retry unavailable. Please preserve cleanup on this path and add a rejection-state test." The issue is not that early returns are universally wrong. The issue is the missing state transition. A shared cleanup structure might help, but its behavior still needs checking across success and error paths. Inspect enough surrounding code to find where the obligation begins and ends.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two exits from one preview attempt',
        alt: 'The successful path clears busy to false; the new unsupported-input return leaves busy true and retry controls disabled.',
        caption: 'Fictional state transitions. The invariant applies when an attempt ends, not while processing is still active.',
        items: [
          { label: 'Successful input', detail: 'busy true, parse, cleanup, busy false; another attempt is available.' },
          { label: 'New rejection path', detail: 'busy true, reject, early return; cleanup skipped and busy remains true.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper with success, rejection, and error paths'],
      steps: [
        'Write the end-of-attempt invariant, including the boundary at which busy must be false.',
        'Trace the supplied success and early-rejection paths, recording busy at each step.',
        'Add a parsing-error path and mark where cleanup evidence would be needed rather than assuming it exists.',
        'Draft a review comment naming the violated rule, user-visible consequence, and required regression assertion.',
      ],
      notice: 'The defect is explained through a missing state transition, not a blanket dislike of early returns.',
      troubleshooting: 'If your invariant forbids a legitimate intermediate state, specify the entry, exit, or transaction boundary where it must hold.',
    },
    recall: {
      prompt: 'A retried operation can award the same completion credit twice. What invariant should review follow beyond one changed line?',
      hint: 'Follow operation identity and side effects across retries, not merely the happy-path call.',
      answer: 'The same operation must award credit at most once. Trace how identity is checked and preserved before the side effect, including retries and concurrent attempts. A locally correct increment does not establish that the surrounding workflow enforces uniqueness.',
    },
    quiz: {
      question: 'Which rule correctly describes the preview invariant?',
      options: [
        'Clear busy only after successful parsing, because rejected inputs did not produce a preview.',
        'Require one return statement instead of checking the state at every completed path.',
        'Every finished attempt, including rejection, must leave busy false.',
      ],
      correctIndex: 2,
      explanation: 'The rule concerns the observable end state. It permits legitimate processing and different coding styles while requiring cleanup on every completed path.',
    },
    takeaway: 'Locate the obligation around the diff and check that every affected path still satisfies it.',
    sourceNote: 'The reviewed code-review guidance emphasizes context, edge cases, and concurrency. This busy-state example is original and illustrates one bounded invariant.',
  },
  {
    id: 'work-033',
    title: 'Ask whether the regression test can fail',
    outcome: 'Inspect an assertion to determine whether it distinguishes the known defect from the intended behavior.',
    scene: 'A packing calculator returns seven instead of ten while its no-exception test still passes.',
    sections: [
      {
        title: 'Running the code is not checking its answer',
        paragraphs: [
          'A fictional packing calculator receives two packs with five items per pack. The contract says multiply, so the result should be ten items. A defect adds the inputs and returns seven. The new test calls the calculator and checks that no exception occurs. Both implementations satisfy that assertion, so the test can pass while the reported defect remains. Code execution tells you that a path ran. A regression assertion must examine the property that was wrong, not merely demonstrate that the path can finish.',
        ],
      },
      {
        title: 'Compare the broken and intended outputs',
        paragraphs: [
          'Ask a counterfactual question: if the old defect were still present, which assertion would fail? "Returns a number" and "returns a positive result" both accept seven and ten. "Returns ten for two packs of five" separates them. That expected value must come from the agreed behavior, not from copying the implementation output. Check setup too. If a mock replaces the calculator and always returns ten, the assertion may test the mock rather than the calculation. Mocking a dependency can be useful, but replacing the very behavior under review removes the evidence you wanted.',
        ],
      },
      {
        title: 'Request a test with a discriminating assertion',
        paragraphs: [
          'Write: "This test passes for both the old result 7 and the required result 10. Please assert the item total for the two-pack, five-item fixture, and keep the real calculation in the tested path." In an isolated test environment, checking that the regression test fails against the known broken behavior can strengthen confidence in its purpose. You need not deliberately break shared code to explain the gap; the two outputs already reveal it on paper.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Which assertion distinguishes 7 from 10?',
        alt: 'No-exception accepts both outputs; equals-ten rejects the broken seven and accepts the corrected ten.',
        caption: 'The fictional contract is 2 packs x 5 items = 10 items. The broken addition produces 7.',
        items: [
          { label: 'Does not throw', detail: 'Broken result 7: pass. Correct result 10: pass. Regression is invisible.' },
          { label: 'Total equals 10', detail: 'Broken result 7: fail. Correct result 10: pass. Behavior is distinguished.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper with broken and corrected result columns'],
      steps: [
        'Write the input two packs of five, the broken result 7, and the required result 10.',
        'Evaluate no exception, positive number, and equals 10 against both outputs.',
        'Circle the assertion that changes verdict and explain which requirement supplies its expected value.',
        'Add a review note warning that replacing the calculator with a constant-result mock would bypass the target behavior.',
      ],
      notice: 'You can identify exactly why the proposed assertion would fail if the reported defect remained.',
      troubleshooting: 'If every assertion accepts both outputs, test the returned value or side effect named in the bug report.',
    },
    recall: {
      prompt: 'An invalid form should leave stored data untouched, but its test only checks an error message. What assertion is missing?',
      hint: 'The message and the state change are separate observable outcomes.',
      answer: 'Assert that the relevant stored record remains unchanged or no write occurs, alongside the error result. Otherwise an implementation that displays the message and still changes data could pass while violating the intended rejection behavior.',
    },
    quiz: {
      question: 'Which check best tests the packing regression itself?',
      options: [
        'Run the real calculation for two packs of five and assert exactly ten items.',
        'Replace the calculation with a mock returning ten and assert that value.',
        'Run the real calculation and assert a positive numeric result.',
      ],
      correctIndex: 0,
      explanation: 'The first check exercises and distinguishes the target behavior. The mock bypasses it, while a positive-number assertion also accepts the broken result seven.',
    },
    takeaway: 'Ask which assertion would change its verdict if the defect were still present.',
    sourceNote: 'The reviewed code-review guidance explicitly asks whether tests fail for broken code. The packing fixture is original, with hypothetical inputs and outputs.',
  },
  {
    id: 'work-034',
    title: 'Separate blocking feedback from preferences',
    outcome: 'Label review comments by required action and explain the behavior or agreed rule behind a blocking request.',
    scene: 'A reviewer distinguishes a null-owner crash from an optional variable-name suggestion.',
    sections: [
      {
        title: 'Two comments should not sound equally mandatory',
        paragraphs: [
          'A fictional assignment table allows owner to be null when a task is unassigned. A patch reads owner.name without handling that case, so the unassigned row cannot render. You also prefer the variable name summaryText to rawSummary. If both comments simply say "please change this," the author cannot tell which prevents approval and which expresses taste. The null-owner case violates an agreed behavior. The name preference, absent a relevant style rule, does not carry the same requirement even if you believe it improves readability.',
        ],
      },
      {
        title: 'Give the request its force and reason',
        paragraphs: [
          'Classify the comment as a required correction, a question needing an answer, or an optional suggestion. For required changes, connect a concrete input to the consequence or cite the applicable rule. For a question, say whether its answer is needed before approval. For an optional idea, label it explicitly. This helps the author order their work without guessing your tone. It also keeps technical concerns separate from judgments about the person. "This path dereferences a permitted null value" is inspectable; "you were careless" supplies no behavior to test.',
        ],
      },
      {
        title: 'Write comments with different obligations',
        paragraphs: [
          'Use: "Blocking: owner can be null under this contract. Reading owner.name then fails before the row renders. Please display Unassigned for that case and add its test." Separately: "Optional naming suggestion: summaryText would make the string type clearer than rawSummary; the current name does not violate our agreed style." If you are unsure whether null is allowed, ask for that contract evidence rather than presenting the crash as established. Optional labeling is not a way to soften a real security or data-loss concern.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Required fix, optional suggestion',
        alt: 'Null-owner handling is required; the separate variable-name suggestion is explicitly optional.',
        caption: 'Original fictional exchange. The obligation follows the contract and consequence, not how politely the comment is phrased.',
        items: [
          { label: 'Reviewer', detail: 'Blocking: null owner is permitted, but owner.name prevents the row rendering.' },
          { label: 'Author', detail: 'I will handle Unassigned and add that fixture.' },
          { label: 'Reviewer', detail: 'Optional: summaryText could clarify the value type. The current name meets our style.' },
          { label: 'Author', detail: 'Understood. I will address the null behavior before considering the naming preference.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or three draft review comments'],
      steps: [
        'Write a required comment for the null-owner case with its input, consequence, and expected behavior.',
        'Write an optional naming suggestion that does not imply a correctness defect.',
        'Add a question about a contract you have not confirmed, stating whether approval depends on its answer.',
      ],
      notice: 'An author can distinguish work required for acceptance from clarification and personal preference.',
      troubleshooting: 'If every comment sounds blocking, name the contract or observed consequence behind each one and relabel unsupported preferences.',
    },
    recall: {
      prompt: 'You suspect a loop might be slow, but have no relevant workload or timing evidence. How should the comment be framed?',
      hint: 'An unverified concern can justify a bounded question without becoming an invented performance defect.',
      answer: 'Ask about expected input sizes and any relevant measurement, explaining the possible cost. If a documented limit requires evidence before approval, say so. Do not assert a measured slowdown or mandate a rewrite solely from personal preference.',
    },
    quiz: {
      question: 'A naming preference is absent from the style guide and changes no behavior. How should it be presented?',
      options: [
        'As a blocking requirement so the author understands you value consistency.',
        'As an unlabeled question whose answer determines approval without explanation.',
        'As an optional suggestion with a concrete readability reason.',
      ],
      correctIndex: 2,
      explanation: 'Optional labeling separates taste from requirements. Mandatory style rules or correctness concerns need different evidence and should be identified as such.',
    },
    takeaway: 'State whether a comment requires action, needs an answer, or offers an optional improvement.',
    sourceNote: 'The reviewed review guide distinguishes style requirements from optional preferences. The comment examples are original; local contracts still determine required behavior.',
  },
  {
    id: 'work-035',
    title: 'Resolve review disagreements with a concrete case',
    outcome: 'Turn a disputed behavior into competing outputs and resolve it against an explicit contract or decision owner.',
    scene: 'Two reviewers disagree about alphabetical versus arrival order for equally prioritized queue items.',
    sections: [
      {
        title: 'Cleaner can hide a behavior change',
        paragraphs: [
          'Two reviewers disagree about a fictional work queue. One wants alphabetical ordering for equal priorities because it looks cleaner. The other wants arrival order preserved. More comments repeating cleaner or more intuitive do not identify which behavior the system owes its users. Create a case where the choices produce different outputs: Zed arrives at 09:00, Ada at 09:05, and both have priority 2. Alphabetical order puts Ada first; arrival order puts Zed first. The disagreement is now about a result, not an adjective.',
        ],
      },
      {
        title: 'Compare the case with the contract',
        paragraphs: [
          'In this exercise the agreed queue contract says that equal priorities preserve insertion order. That rule favors Zed before Ada, regardless of which display looks tidier. Existing code can supply context, but it is not automatically the authority on intended behavior; code itself may contain a defect. Use the agreed requirement and affected consumer expectations. If those sources are absent or contradictory, identify the design owner who can decide. A concrete example clarifies the choice, but it cannot manufacture a missing requirement or replace the person authorized to settle it.',
        ],
      },
      {
        title: 'Leave the resolved case in the review',
        paragraphs: [
          'Write: "For equal-priority entries Zed at 09:00 and Ada at 09:05, alphabetical order reverses arrival order. Our current contract preserves insertion order, so this change should return Zed, then Ada. Add that fixture as a tie-case test." If the owner instead approves a changed contract, record the consumer impact and revised expectation rather than pretending the earlier rule always meant alphabetical sorting. A quick conversation can resolve confusion, but its conclusion and rationale belong back in the review. Later readers need the behavior decision, not only a final "resolved" marker or the identity of the most persistent commenter.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The equal-priority counterexample',
        alt: 'For Zed arriving before Ada at the same priority, alphabetical sorting returns Ada first while the insertion-order contract returns Zed first.',
        caption: 'Fictional entries and times. Equal priority holds one condition fixed so the tie-breaking behavior is visible.',
        items: [
          { label: 'Alphabetical tie-break', detail: 'Ada, Zed: reverses their 09:00 then 09:05 arrival order.' },
          { label: 'Insertion-order contract', detail: 'Zed, Ada: preserves the arrival order required in this example.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper or a draft review reply'],
      steps: [
        'Write both queue entries with their equal priority and different arrival times.',
        'List the output under alphabetical sorting and insertion-order sorting.',
        'Resolve the case using the supplied contract, then write the regression expectation and rationale.',
        'Add a sentence identifying the decision owner you would need if the contract were silent instead.',
      ],
      notice: 'The review now contains a checkable behavior decision rather than an unresolved contest of preferences.',
      troubleshooting: 'If both interpretations produce the same output, choose an input where their results differ before debating them.',
    },
    recall: {
      prompt: 'Reviewers disagree whether a missing measurement should display zero or Unknown. What case would expose the semantic choice?',
      hint: 'Zero is a measured value; missing information is a different state unless the contract says otherwise.',
      answer: 'Compare a real zero measurement with an absent measurement and write the output under each interpretation. Check the display contract and downstream use. If it is undecided, ask the owner rather than resolving the question through styling preference.',
    },
    quiz: {
      question: 'Which fixture best distinguishes alphabetical from insertion-order tie-breaking?',
      options: [
        'Entries with different priorities, where neither tie-breaker is used.',
        'Equal-priority entries whose arrival order is the reverse of their alphabetical order.',
        'Equal-priority entries already arriving alphabetically.',
      ],
      correctIndex: 1,
      explanation: 'The reverse-order pair gives different predicted outputs. Different priorities bypass the tie-break, while already alphabetical arrivals make both approaches look identical.',
    },
    takeaway: 'Find an input that separates the disputed behaviors, then resolve it against an explicit requirement.',
    sourceNote: 'Review and simplicity references inform contract-focused design discussion. The queue rule and dispute are original examples, not a universal sorting convention.',
  },
  {
    id: 'work-036',
    title: 'Build a timeline without hindsight',
    outcome: 'Separate when events occurred from when responders observed or understood them.',
    scene: 'Buffered worker logs reveal an earlier failure only after a responder has already chosen a first investigation step.',
    sections: [
      {
        title: 'The timestamp was not yet available',
        paragraphs: [
          'In a fictional training incident, a worker log records a rejection at 09:04 UTC, but that buffered log is not retrieved until 09:12. An alert arrives at 09:08, and a responder starts checking the queue at 09:10.',
          'A later summary says the responder ignored the 09:04 rejection. That sentence confuses event time with available knowledge. The earlier timestamp existed in the worker record, but it was not yet evidence the responder could inspect when choosing the first investigation step.',
        ],
      },
      {
        title: 'Keep event, observation, and interpretation apart',
        paragraphs: [
          'Record the event time, the time its evidence became available, the source, and the interpretation known then. At 09:12 the retrieved log establishes a rejection; it does not yet explain why it happened. At 09:18 a synthetic reproduction links a malformed template to the symptom, creating a candidate explanation. In real records, also check time zones, clock offsets, and collection delays. If timing cannot support an exact ordering, keep that uncertainty rather than arranging entries into a cleaner story. A timeline is evidence about sequence, not proof that the nearest preceding event caused the failure.',
        ],
      },
      {
        title: 'Write the decision using its actual context',
        paragraphs: [
          'Use: "09:10 UTC: responder inspected queue progress using the 09:08 alert; worker rejection logs were not available until 09:12. At 09:18, a synthetic template reproduction supplied a candidate cause." This makes the earlier action understandable without claiming it was necessarily the best possible action. You can still ask whether faster log access or a clearer alert would improve decisions. Keep those improvement questions separate from blaming someone for not using later knowledge. Include the evidence source beside each entry, and label inferred times or uncertain intervals.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'What was known at each point',
        alt: 'The 09:04 rejection becomes known at 09:12, after the 09:10 decision based on the 09:08 alert.',
        caption: 'Hypothetical synchronized UTC times. Event time and evidence availability differ; spacing is not proportional.',
        items: [
          { label: '09:04 Event', detail: 'Worker rejection recorded locally; not yet available to the responder.' },
          { label: '09:08 Observation', detail: 'Alert reports failed work, without the worker rejection detail.' },
          { label: '09:10 Decision', detail: 'Responder checks queue progress using the alert information.' },
          { label: '09:12 Evidence arrives', detail: 'Retrieved log reveals the rejection timestamped 09:04.' },
          { label: '09:18 Interpretation', detail: 'Synthetic template reproduction supplies a candidate cause.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper with event time and known-at columns'],
      steps: [
        'Place the rejection at event time 09:04 and known-at time 09:12, both UTC.',
        'Add the alert, queue-inspection decision, and later reproduction with their evidence sources.',
        'Rewrite "ignored the 09:04 rejection" using only information available at 09:10.',
        'Name one observability improvement question without claiming the later explanation was already known.',
      ],
      notice: 'Each decision is described using evidence available at that time.',
      troubleshooting: 'If a cause appears before its supporting evidence, move the interpretation to the time it became supported.',
    },
    recall: {
      prompt: 'Two services record events seconds apart, but their clock offset is unknown. How should the timeline express the sequence?',
      hint: 'Timestamp order is reliable only within the assumptions about the clocks and evidence.',
      answer: 'Record timestamps, sources, zones, and the unknown offset. Do not assert precise cross-service order until clock or correlation evidence supports it, particularly when using sequence to investigate causes.',
    },
    quiz: {
      question: 'Which statement avoids hindsight in the training incident?',
      options: [
        'At 09:10 the responder had the alert, but the rejection log became available at 09:12.',
        'At 09:10 the responder should have acted on everything later found in the log.',
        'The 09:04 timestamp proves the responder observed the rejection before the alert.',
      ],
      correctIndex: 0,
      explanation: 'Event time and observation time differ. Later evidence cannot be inserted into the earlier decision context simply because its embedded timestamp is older.',
    },
    takeaway: 'Reconstruct what happened and what was knowable, without moving later evidence backward in time.',
    sourceNote: 'Incident references inform reconstruction. This timeline is invented; real clock synchronization requires evidence rather than assumption.',
  },
  {
    id: 'work-037',
    title: 'Explain the conditions behind an error',
    outcome: 'Describe an action and its contributing system conditions without replacing analysis with a personal label.',
    scene: 'A fictional archive action targets the wrong training list because distinct names are truncated and confirmation omits identity.',
    sections: [
      {
        title: 'Operator error leaves the mechanism unexplained',
        paragraphs: [
          'A fictional incident note says "The operator carelessly archived the wrong training list." It names a person but does not explain the path to the outcome. The rehearsal record shows two lists, Training-Day1 and Training-Day2, both truncated on screen to "Training..." The interface retains the previous selection, and its confirmation says only "Continue?" Those are inspectable conditions. Record the selection and archive action, but do not infer attention, motivation, or time pressure from the result when no evidence about those factors is available.',
        ],
      },
      {
        title: 'Trace information, action, and protection',
        paragraphs: [
          'Blameless analysis examines how actions made sense within the information and controls available, while still recording what happened. Ask what the person could distinguish, which default was active, and what protection should have interrupted a mismatch. Here truncated labels obscure identity, a retained selection favors the previous target, and confirmation does not show the chosen list. These factors can interact; none requires assuming that one person is the entire cause. Responsibility for improvements remains explicit. Removing personal blame is not the same as removing actions, decisions, or ownership from the record.',
        ],
      },
      {
        title: 'Replace the label with a testable account',
        paragraphs: [
          'Rewrite: "The archive action used the retained Training-Day2 selection while the intended list was Training-Day1. Both labels were truncated, and confirmation omitted target identity. Review whether showing the full selected identifier and requiring a matching preview would interrupt this path."',
          'This suggests an improvement to evaluate rather than asserting that a confirmation alone will prevent every error. Assign an interface owner to test the two-list case, including the retained-selection state. Keep unknowns in the report: if you do not know what the operator saw, say so and seek evidence.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The conditions around the archive action',
        alt: 'Truncated names, retained Day2 selection, and identity-free confirmation precede the unintended archive action.',
        caption: 'Fictional contributing conditions, not inferred intent or a proven single cause.',
        items: [
          { label: 'Ambiguous display', detail: 'Training-Day1 and Training-Day2 both appear as Training...' },
          { label: 'Retained selection', detail: 'Previously selected Day2 remains active when Day1 is intended.' },
          { label: 'Weak confirmation', detail: 'Continue? does not identify which list will be archived.' },
          { label: 'Observed action', detail: 'Day2 is archived; investigate the path and evaluate protections.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'The fictional interface observations'],
      steps: [
        'Replace the word careless with the recorded selection and archive action.',
        'List the visible-label, default-selection, and confirmation conditions separately from unknown personal factors.',
        'Propose one protection and a two-list fixture that could test whether it interrupts this path.',
        'Name an improvement owner role while leaving unsupported claims about intent out of the note.',
      ],
      notice: 'Actions and ownership remain explicit, with inspectable conditions instead of personal labels.',
      troubleshooting: 'If the conclusion ends at training people, ask which information or guard the procedure could make available before the action.',
    },
    recall: {
      prompt: 'A contributor follows an outdated setup guide and selects the wrong environment. How could a review remain factual and blameless?',
      hint: 'Name the available instructions and protection.',
      answer: 'Record the environment, available instructions, and missing target check. Assign improvements to document ownership and labeling. Preserve the action without turning the outcome into a claim of incompetence.',
    },
    quiz: {
      question: 'Which finding best supports an improvement test in the archive example?',
      options: [
        'The operator should develop stronger concentration before another attempt.',
        'The action should be omitted from the timeline to avoid assigning blame.',
        'The confirmation did not display the selected list identity when labels were ambiguous.',
      ],
      correctIndex: 2,
      explanation: 'The identity display is an inspectable condition with a testable protection. Personal labels and omitted actions do not explain how the mismatch passed through the interface.',
    },
    takeaway: 'Keep the action in the record and investigate the information, defaults, and protections around it.',
    sourceNote: 'Postmortem guidance emphasizes contributing conditions without blame. This invented incident does not establish a real person\'s intent.',
  },
  {
    id: 'work-038',
    title: 'Separate detection, mitigation, and recovery',
    outcome: 'Identify separate incident milestones and require evidence of restored outcomes rather than relying on one cleared alert.',
    scene: 'A synthetic job queue accepts new work again while twelve older jobs still await completion.',
    sections: [
      {
        title: 'The alert clears before the work is finished',
        paragraphs: [
          'In a fictional job service, processing fails at 09:00, the alert is recognized at 09:06, and an approved mitigation restores new-job processing at 09:14. The alert clears, but twelve older jobs remain pending. Calling the service fully recovered at 09:14 would hide those users\' unfinished outcomes. At 09:26, the twelve pending jobs have completed and their required outputs are checked. These milestones answer different questions: when the problem was recognized, when impact was reduced, and when the required service state was restored.',
        ],
      },
      {
        title: 'Attach evidence to each milestone',
        paragraphs: [
          'Detection is recognition of the problem. Mitigation reduces its impact, sometimes through a temporary measure. Recovery restores the required outcomes, which can include clearing a backlog and checking data. A permanent correction may come later. Define each milestone using its evidence: an acknowledged alert for detection, successful new-job processing for mitigation, and the completed older jobs plus verified outputs for recovery here. Another service may have different acceptance conditions. A monitoring rule turning green only establishes the condition that rule measures, not every outcome its users depend on.',
        ],
      },
      {
        title: 'Use intervals to ask better questions',
        paragraphs: [
          'The hypothetical intervals are 6 minutes from failure to detection, 8 from detection to mitigation, and 12 from mitigation to recovery. Together they cover 26 minutes from the initial failure to the stated recovery point. These numbers locate questions; they do not by themselves diagnose the cause of delay. Ask whether detection lacked a signal, mitigation needed a decision, or recovery required backlog processing. Write: "New jobs resumed at 09:14; twelve earlier jobs remained pending until verified completion at 09:26. Permanent-fix work is still open."',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Four times, three distinct intervals',
        alt: '09:00 failure, 09:06 detection, 09:14 mitigation, and 09:26 recovery leave intervals of 6, 8, and 12 minutes.',
        caption: 'Hypothetical same-clock times, not proportional spacing. Twelve pending jobs separate mitigation from recovery.',
        items: [
          { label: '09:00 Failure', detail: 'Job processing fails; the problem is not yet recognized.' },
          { label: '09:06 Detection', detail: 'Alert recognized, 6 minutes after the failure.' },
          { label: '09:14 Mitigation', detail: 'New jobs resume, 8 minutes later; 12 older jobs remain pending.' },
          { label: '09:26 Recovery', detail: 'Older jobs complete and outputs are checked, 12 minutes after mitigation.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Optional calculator'],
      steps: [
        'Place the four times on a line and label the evidence available at each milestone.',
        'Calculate the three intervals and verify that their sum is the 26-minute overall interval.',
        'Write the 09:14 update without declaring recovery while the twelve older jobs remain pending.',
        'Add the 09:26 recovery evidence and keep permanent-fix work as a separate open item.',
      ],
      notice: 'The status distinguishes reduced impact from restored outcomes and identifies the evidence needed to move between them.',
      troubleshooting: 'If recovery is justified only by an alert clearing, add the service or user outcome that the alert does not cover.',
    },
    recall: {
      prompt: 'A site serves new uploads again, but earlier accepted uploads are still unavailable. What should a recovery update say?',
      hint: 'New traffic and previously accepted work can have different recovery states.',
      answer: 'Report restored new uploads and the still-unavailable earlier uploads separately. Name remaining recovery work and its completion evidence. Restored intake does not establish that previously accepted uploads are available.',
    },
    quiz: {
      question: 'At 09:14 in the example, which status is supported?',
      options: [
        'Full recovery, because the new-job alert has cleared.',
        'Mitigation established; recovery remains incomplete because earlier jobs are pending.',
        'Permanent correction completed, because new jobs now run.',
      ],
      correctIndex: 1,
      explanation: 'New-job processing demonstrates reduced impact. The twelve pending jobs and later output checks belong to recovery; permanent correction is a separate claim.',
    },
    takeaway: 'Use separate evidence for recognizing failure, reducing impact, and restoring the required outcomes.',
    sourceNote: 'Incident and postmortem references inform milestone analysis. All times and job counts are invented and imply no measured response targets.',
  },
  {
    id: 'work-039',
    title: 'Make incident follow-ups verifiable',
    outcome: 'Write a follow-up with an owner, intended mechanism, acceptance evidence, and an honest statement of what it cannot prevent.',
    scene: 'A vague improve-monitoring action becomes a synthetic stalled-queue alert specification.',
    sections: [
      {
        title: 'Improve monitoring is not an acceptance condition',
        paragraphs: [
          'A fictional incident review ends with "improve monitoring." Nobody knows which condition should become visible, who owns the change, or what evidence will close it. The incident involved queued work with no completions while the process itself remained running. An alert about process existence would miss that behavior. Start the follow-up from the observed gap: the current signals did not reveal lack of progress despite pending jobs. Then name whether the action aims to prevent the failure, detect it, or reduce its impact.',
        ],
      },
      {
        title: 'Turn the gap into a testable rule',
        paragraphs: [
          'For a paper example, propose an alert when queued jobs are present and no job completes during a five-minute window. That threshold is hypothetical and needs service-owner review against legitimate job durations before any real use.',
          'Test contrasting conditions: a stalled nonempty queue should trigger; an empty queue should not; a progressing queue should not trigger this particular rule. Missing telemetry is unknown, not proof of healthy progress. This makes detection behavior inspectable. It does not remove the worker defect, guarantee faster response, or establish that every possible stall has been covered.',
        ],
      },
      {
        title: 'Assign closure to evidence, not a patch',
        paragraphs: [
          'Draft: "Owner: monitoring maintainer. Purpose: detect pending work without completions. Proposed priority: review with the service owner before the next release decision. Acceptance: synthetic stalled, empty, and progressing fixtures produce the agreed alert outcomes; missing-data behavior is defined; the notification reaches the agreed test destination." Link the original failure condition in the actual action record. A merged rule is an artifact, but these checks establish its intended effect. If prevention is also needed, create a separate action addressing the worker failure mechanism.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Evidence for the proposed progress alert',
        alt: 'Stalled pending work triggers; empty and progressing queues do not; missing telemetry is unknown.',
        caption: 'Synthetic five-minute window, not a production threshold or evidence of prevention.',
        items: [
          { label: 'Pending and stalled', detail: '8 queued jobs, 0 completions in 5 minutes: alert under the proposed rule.' },
          { label: 'Empty and idle', detail: '0 queued jobs, 0 completions: no progress alert.' },
          { label: 'Pending and progressing', detail: 'Queued jobs plus a completion in the window: no alert from this rule.' },
          { label: 'Telemetry missing', detail: 'Queue or completion data unavailable: unknown; define separate handling.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper or a follow-up draft'],
      steps: [
        'Replace "improve monitoring" with the pending-work-without-progress condition and a detection goal.',
        'Add an owner role, proposed priority decision, and review of the hypothetical window against real job behavior.',
        'Write expected outcomes for the four supplied cases, retaining missing telemetry as unknown.',
        'Define closure evidence including test notification delivery, then state that preventing the worker defect remains separate.',
      ],
      notice: 'The owned follow-up has evidence for detection without claiming prevention.',
      troubleshooting: 'If closure is only "rule merged," add the synthetic inputs and observed notification behavior required for acceptance.',
    },
    recall: {
      prompt: 'A follow-up rejects malformed imports before saving them. How would you distinguish its prevention claim from a separate alert?',
      hint: 'Blocking a write differs from observing a failure.',
      answer: 'Require a rejected malformed fixture with unchanged storage and a working valid fixture. That tests prevention of the invalid write. An alert provides detection evidence, not evidence that writing was blocked.',
    },
    quiz: {
      question: 'What evidence should close the stalled-queue detection follow-up?',
      options: [
        'The agreed fixtures produce the specified outcomes and the test notification reaches its destination.',
        'The alert configuration was merged, regardless of missing-data behavior.',
        'A quiet period produces no alert, so the stalled case is assumed covered.',
      ],
      correctIndex: 0,
      explanation: 'Behavior and notification evidence establish the detection change. A merged artifact alone does not, and detection cannot substitute for a prevention mechanism.',
    },
    takeaway: 'Give a follow-up an owner and a test of the specific effect it is intended to produce.',
    sourceNote: 'Postmortem guidance supports owned action items. This original alert example has an illustrative window, not an operational recommendation.',
  },
  {
    id: 'work-040',
    title: 'Learn from a near miss without overstating it',
    outcome: 'Document a protection that worked while identifying untested paths without assuming they are protected or broken.',
    scene: 'A training interface rejects a mismatched target while the equivalent bulk-import path remains untested.',
    sections: [
      {
        title: 'A caught mismatch still contains a lesson',
        paragraphs: [
          'In a fictional rehearsal, a request is approved for target A but the interface selection points to target B. A guard rejects the mismatch before any action. The synthetic trace records the rejection and zero changes. It is tempting to dismiss the event because the feared result did not happen, or to declare the whole feature safe because the guard worked. Neither conclusion follows. The event gives useful evidence about one protected path and a chance to examine related paths without deliberately causing a live failure.',
        ],
      },
      {
        title: 'Separate the observation from the coverage claim',
        paragraphs: [
          'A near miss is an event in which a feared failure path was approached but the expected harmful outcome was avoided. Record the intended action, actual conditions, intervening protection, and observed result. Here the ordinary interface rejected A-versus-B mismatch. A bulk-import path can select targets differently, so it needs its own coverage evidence. Untested does not mean unprotected; the same check may exist deeper in the system. Equally, a shared button label or similar screen does not prove a shared guard. Identify the boundary where equivalent enforcement should be demonstrated.',
        ],
      },
      {
        title: 'Turn the successful guard into a maintained check',
        paragraphs: [
          'Write: "The interface mismatch guard rejected selected target B against approved target A; the synthetic trace shows zero changes. Bulk-import enforcement is untested. Ask the feature owner where target validation is shared and add a synthetic mismatch case for each supported entry path." Preserve the existing successful fixture so later changes cannot remove the protection unnoticed. Use the approved reporting route rather than hiding an event because users were unaffected. The next action is a coverage question and safe regression design.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Observed protection versus unknown coverage',
        alt: 'The interface rejected target B against approval for A; bulk-import enforcement remains untested.',
        caption: 'Fictional near miss. Untested means unknown, not demonstrated safety or vulnerability.',
        items: [
          { label: 'Ordinary interface', detail: 'A approved, B selected: guard rejected; synthetic trace records 0 changes.' },
          { label: 'Bulk-import path', detail: 'Equivalent target check not yet demonstrated; find enforcement and test its boundary.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper or a near-miss note'],
      steps: [
        'Record the approved target, mismatched selection, observed guard rejection, and zero-change synthetic result.',
        'List ordinary selection and bulk import as separate paths, marking only the first as demonstrated.',
        'Write a question for the feature owner about the shared validation boundary, without assuming it exists.',
        'Describe a synthetic regression case and expected no-change result for the untested path; do not execute a live action.',
      ],
      notice: 'The note preserves what worked and produces a bounded coverage question instead of a blanket safety claim.',
      troubleshooting: 'If you wrote "all paths are safe" or "bulk import is broken," replace that assertion with the evidence still needed.',
    },
    recall: {
      prompt: 'An import guard rejects one malformed header before saving anything. What useful question remains about older export formats?',
      hint: 'A demonstrated rejection covers a case, not every representation that reaches the parser.',
      answer: 'Ask whether supported older formats pass through equivalent validation before writes and retain valid-format compatibility. Preserve the successful malformed-header fixture and add synthetic coverage for the older paths rather than inferring their behavior from one rejection.',
    },
    quiz: {
      question: 'What does the demonstrated interface rejection establish about bulk import?',
      options: [
        'Bulk import must share the guard because both belong to the same feature.',
        'Bulk import lacks protection because no test was recorded for it.',
        'Nothing conclusive yet; its enforcement needs separate evidence or a verified shared boundary.',
      ],
      correctIndex: 2,
      explanation: 'The observed case is bounded to its path. A verified common enforcement point or a representative test can extend coverage; similarity and missing tests alone cannot.',
    },
    takeaway: 'Preserve the protection that worked, then test the limits of the coverage it actually demonstrated.',
    sourceNote: 'Postmortem and launch references inform guard coverage. This invented near miss establishes no real-system protection.',
  },
]