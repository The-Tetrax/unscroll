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
          'Your first ticket on a new team reads, in full: fix the inventory importer. You dig in and find the symptom. A spreadsheet row with an empty quantity cell quietly becomes an item with quantity zero. You spend the afternoon reading the parser and learn a great deal. At five o\'clock you can honestly report hard work. The requester, meanwhile, expected a working importer by end of day.',
          'Nobody did anything wrong, and the task still went sideways. The missing agreement was never about hours. It was about what another person should be able to look at when you say done. Before touching a line, there is one question to settle: does this task end with a corrected importer, or with an investigation that pins down exactly where the blank turns into a zero? Both are legitimate deliverables. They are not the same deliverable.',
        ],
      },
      {
        title: 'Done is something you can point at',
        paragraphs: [
          'Think of a plumber who says the leak is fixed. You do not take the word for it. You run the tap and look under the sink. Completion evidence is that look under the sink: a claim connected to a check anyone could repeat. The claim blank quantities are rejected needs a blank input, and the rejection it produces, where someone can see it.',
          'Good evidence also checks what must not have changed. A rejected row must not sneak an item into the database anyway. A perfectly ordinary row with quantity 4 must still import as 4. Those observations describe behavior, which is what the requester cares about, rather than your preferred way of implementing it. Notice how a single screenshot of an error message fails this standard. It shows the message and says nothing about what got stored.',
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
          'One trap hides in this example. Suppose the requester cannot actually say whether a blank should mean zero, reject the row, or ask the user. That is a product decision. It should be preserved as an open acceptance question, written down and routed to whoever owns it. The quiet alternative is letting whatever the parser does most easily become the requirement by accident. That is how systems acquire rules nobody chose.',
          'Two boundaries round this out. Demanding a patch from a task agreed as exploration silently changes its scope; renegotiate out loud instead. And this is a planning habit, not a productivity guarantee. It will not make the work faster. It will make done mean the same thing to both people, which is where most end-of-day disappointments actually come from.',
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
    outcome: 'Write an update that says what a teammate can now use, what is still unknown, and what you will check next.',
    scene: 'A sorting defect moves from a vague report to a repeatable two-value fixture.',
    sections: [
      {
        title: 'Activity and progress answer different questions',
        paragraphs: [
          'Yesterday someone reported that a training table sometimes shows its rows out of order. Today you spent three hours on it and found something real: a tiny fixture with just two labels, 2 and 10, that always displays 10 first. Now it is time to write the update, and the first draft comes out as: spent three hours debugging sorting.',
          'That sentence is true, and it tells your teammates almost nothing they can use. It describes your afternoon. The useful sentence describes what changed in the world: a two-value fixture now reproduces the order error. A teammate reading that can test a hypothesis tonight, or review a proposed fix against it tomorrow. And notice that progress did not require a fix. A reliable reproduction, or even a ruled-out explanation, is a changed state, and changed states are what updates are for.',
        ],
      },
      {
        title: 'Evidence, then interpretation, with a line between',
        paragraphs: [
          'A doctor\'s chart keeps two kinds of entries apart: what was observed, temperature 38.5, and what the doctor suspects, possibly viral. The suspicion is useful and it is clearly marked as a suspicion. Investigation updates need the same discipline: a demonstrated change, the evidence for it, the unresolved question, and the next action.',
          'Here the contract is ascending numeric order, so 2 should come before 10. Seeing 10 first looks exactly like text sorting, where the character 1 sorts before 2. That resemblance is a good hypothesis. It is not a location: the wrong order could be introduced by the server response or by the view, and you have not looked at either. Write the hypothesis with its label on. A concise update that drops the label turns a plausible guess into an accepted diagnosis, and later work will quietly stop checking it.',
        ],
      },
      {
        title: 'Write the next reader into the note',
        paragraphs: [
          'Put it together. New evidence: the saved two-value fixture reproduces 10 before 2 in the training view. Expected numeric order is 2, then 10. Cause is not isolated; text comparison is a hypothesis. Next I will compare the order in the server response with the order passed to rendering. No fix is verified yet.',
          'Five sentences, and a teammate could pick the work up cold. Link the fixture itself in the work-tracking system when one exists, because a note that mentions a fixture nobody can find is a review, not a recipe. And resist the chronological diary of every page you opened. The reader needs enough current state to choose a next action, not to relive your afternoon.',
        ],
      },
      {
        title: 'When nothing new was learned',
        paragraphs: [
          'Some days the check comes back empty, and the temptation is to write nothing or to pad. Both waste the reader\'s time. An inconclusive check is still a state change if you say what was tried and why it did not settle the question: comparing timestamps was inconclusive because the fixture rows share one. Now nobody repeats it.',
          'Two habits keep updates honest. Watch for past-tense activity verbs standing alone, debugged, looked into, worked on; each one should be followed by a thing someone can now inspect. And resist the warm glow of almost fixed. A smaller reproduction is real progress, but it says nothing about how far away the fix is, and a reader who hears almost will plan around it.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What became known today',
        alt: 'Previously the order failure was intermittent and unbounded; now a two-value fixture reliably shows 10 before 2, with cause still unknown.',
        caption: 'Compare the two columns for what a teammate could actually do with each: the right column hands them a repeatable symptom, and it still says nothing about where the defect lives. Fictional fixture.',
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
        'Write debugged sorting at the top, then rewrite it as a changed state using the fixture: which two values, what order was expected, what order appeared.',
        'Draw a line and write the hypothesis below it, text comparison, clearly labeled as a hypothesis. Add the two places it could live that you have not checked: response and view.',
        'Finish with the next boundary check in one sentence and the honest closing line: no fix is verified yet. That last line is the one people skip and the one planners rely on.',
      ],
      notice: 'Your update hands over a reusable result, keeps the guess labeled as a guess, and makes no claim about how close a fix is. A teammate could continue from it without asking you anything.',
      troubleshooting: 'If your note is all past-tense activity, ask one question of each verb: what can a teammate now inspect that they could not inspect yesterday? If the answer is nothing, say what was tried and why it was inconclusive instead.',
    },
    recall: {
      prompt: 'You tried an undocumented file-format conversion and discovered it cannot preserve the metadata your project requires. Nothing got built. How is that a progress update?',
      hint: 'An option ruled out under stated conditions changes the available choices.',
      answer: 'Write it as a state change: tested the conversion with the sample file, found it drops the required metadata fields, so it cannot meet the current acceptance criteria. Keep the sample and the exact fields it lost, so nobody has to rediscover this, and name the next candidate you will try. One fence keeps it honest: this rules out that conversion under those conditions. It does not prove all conversions are unsuitable, and saying so would be the same overreach as almost fixed, pointed the other way.',
    },
    quiz: {
      question: 'Which update best keeps the evidence separate from the suspected cause?',
      options: [
        'The two-value fixture shows the wrong order; text comparison is suspected, and the rendering boundary is the next check.',
        'The sorting algorithm is broken, because its output looks like text order.',
        'Sorting is almost fixed, because a smaller input now exists.',
      ],
      correctIndex: 0,
      explanation: 'The first update keeps the chart honest: an observation, a labeled suspicion, and a next check. The second promotes a resemblance into a diagnosis without inspecting either place the defect could live. The third confuses a better reproduction with proximity to a fix, which a reader will plan around and be let down by.',
    },
    takeaway: 'Report what a teammate can now use, keep guesses labeled as guesses, and say plainly what is not yet verified.',
    sourceNote: 'Troubleshooting and incident references support shared investigation state. This update structure is an original communication heuristic, not a claim about hours saved.',
  },
  {
    id: 'work-017',
    title: 'Turn a blocker into a decision request',
    outcome: 'When you are stuck on a choice that is not yours to make, send the owner the options, the consequence, and a date, instead of a status.',
    scene: 'A daily training report cannot finalize tests until its date-grouping time zone is agreed.',
    sections: [
      {
        title: 'Blocked does not name the response',
        paragraphs: [
          'You are building a daily training report and the requirements contradict each other. One line says group sessions by UTC date. Another says use the report owner\'s local date. For most sessions it makes no difference. Then a session lands at Monday 23:30 UTC, and for an owner two hours ahead, at UTC+02:00, that is Tuesday 01:30. Which day\'s total does it belong to? The two rules give two answers.',
          'Your status update says: blocked on dates. Everyone reads it, nobody does anything, because it asked nobody for anything. Look at what is actually missing. It is not better date code; you can write either version in an hour. It is an authorized answer to the question: what does daily mean for this report? That is a decision, and it has an owner who is not you.',
        ],
      },
      {
        title: 'Investigation is yours; authority is theirs',
        paragraphs: [
          'A pharmacist who spots two prescriptions that interact does not pick one to fill. They phone the prescriber with both, the interaction, and a request for a decision, and they keep dispensing everything else meanwhile. A good blocker report has that shape: the missing decision or resource, the person who can supply it, the work that cannot proceed without it, and the date at which the gap hits a commitment.',
          'You can and should explain both interpretations, and you may recommend one with its trade-off. None of that makes you the owner. Keep the blocked work separate from the work you can still do: formatting checks with synthetic timestamps continue; acceptance for daily totals waits. And notice what more experiments cannot do: they can demonstrate each interpretation beautifully, and they cannot reveal which one the report owner intended to approve.',
        ],
      },
      {
        title: 'Send the choice with its consequence',
        paragraphs: [
          'The message is short and specific. Decision needed from the report owner: group by UTC date, or by the owner\'s configured time zone? Example: Monday 23:30 UTC falls on Tuesday at UTC+02:00. Daily-total acceptance tests are paused until this is agreed. Please choose by Tuesday noon if the planned review should include those tests. Formatting checks continue meanwhile.',
          'If you recommend local dates because the report describes the owner\'s working day, say so, and name the trade-off: a team spread across time zones will see different daily totals. Then, when the answer comes, record it where the requirement lives, so the contradiction cannot resurface next quarter.',
        ],
      },
      {
        title: 'What to do with silence',
        paragraphs: [
          'Two failure modes bracket this skill. One is repeating the same blocked update every day, which trains everyone to ignore it. The other is treating silence as consent and picking the interpretation yourself, which converts an unmade decision into your personal liability the first time the totals look wrong.',
          'If the person you named does not actually hold the authority, ask them to route the question rather than answer it. If the deadline passes without a reply, escalate the consequence, not the volume: the review will go ahead without daily-total tests unless a decision arrives by noon. A blocker that names its response, its owner, and its deadline is a request. One that does not is weather.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'One session, two daily groups',
        alt: 'Monday 23:30 UTC is Tuesday 01:30 at UTC+02:00, so the grouping choice changes the daily report.',
        caption: 'Follow the single session across both columns: identical moment, different day. Both conversions are correct, which is exactly why code cannot settle it and an owner must. Hypothetical offset.',
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
        'Write both date rules side by side and underneath them the one session that splits them: Monday 23:30 UTC, which is Tuesday 01:30 at UTC+02:00. One concrete example does more than a paragraph of explanation.',
        'Name the decision owner by role, the report owner, and the exact work that is blocked, daily-total acceptance tests. Then list what continues regardless: formatting checks on synthetic timestamps.',
        'Write the request with its deadline and consequence: choose by Tuesday noon, or the review proceeds without those tests. The consequence is what makes the deadline real.',
        'Add one line on where you will record the confirmed rule once it arrives, and leave the draft genuinely unanswered. The exercise is the request, not the choice.',
      ],
      notice: 'Your message asks a named person for a specific answer by a specific time, with the cost of silence stated. It cannot be answered with noted.',
      troubleshooting: 'If the only possible reply to your draft is noted or thanks, it is still a status report. Add the decision you need, the two options, and what happens if nobody chooses.',
    },
    recall: {
      prompt: 'Two teams disagree about whether an export should include inactive records, and your work is stuck behind the disagreement. What goes in your blocker update?',
      hint: 'Show one record whose fate differs, then route the choice to whoever owns acceptance.',
      answer: 'Build it like the date example. One synthetic inactive record, and the two outputs it produces under each team\'s rule. The person who owns the export\'s acceptance criteria, named by role. The specific test or delivery that waits on the answer, and the date it starts to hurt. You may recommend one interpretation with its trade-off, visibility versus clutter, say. What you must not do is quietly adopt the preference of whichever team spoke to you last and call it authorization.',
    },
    quiz: {
      question: 'You could implement either interpretation, but no owner has approved one. What actually removes the blocker?',
      options: [
        'Implement the shorter option now and request approval afterward.',
        'Run more examples to prove both interpretations are technically possible.',
        'Obtain the behavior decision from the authorized owner and update the acceptance criteria.',
      ],
      correctIndex: 2,
      explanation: 'Feasibility was never in doubt; you can build either. The missing input is authority over what daily means, so only the owner\'s decision unblocks the tests. Building first makes the unmade decision your liability, and more examples demonstrate what everyone already knows while leaving the question exactly where it was.',
    },
    takeaway: 'A blocker is a request when it names the decision, the owner, the deadline, and the cost of silence. Otherwise it is weather.',
    sourceNote: 'Managing Incidents informs explicit roles and communication. This routine blocker example is an original coordination heuristic, not an escalation policy for every workplace.',
  },
  {
    id: 'work-018',
    title: 'Separate a forecast from a commitment',
    outcome: 'Give an honest time estimate with its assumptions and a checkpoint attached, so nobody mistakes a guess for a promise.',
    scene: 'A developer estimates a paginated report adapter before confirming the interface contract.',
    sections: [
      {
        title: 'An estimate is conditional information',
        paragraphs: [
          'Someone stops at your desk: when will the report adapter be ready? The mapping looks small. You have not yet checked one thing, how the interface signals that you have reached the last page of results, and that one thing could be trivial or could force a redesign. The word that wants to come out of your mouth is tomorrow.',
          'Tomorrow hides the dependency, and it leaves the listener guessing what kind of statement they just heard. A forecast says what looks likely under current assumptions. A commitment is an agreement other people plan around. They sound identical in a corridor, and only one of them should move a release date. You can still be useful: name the unknown, say when you will know more, and let the listener hear which kind of sentence it was.',
        ],
      },
      {
        title: 'Effort is not elapsed time',
        paragraphs: [
          'A weather forecast of seventy percent rain is not a promise it will rain; it is a statement about conditions, and the forecaster revises it tomorrow without apology. Estimates work the same way, and they carry one more trap: the difference between how long the work takes and how long until it is done.',
          'Suppose the interface check goes well and you estimate implementation at 2 to 4 focused hours plus 1 hour of validation. That is 3 to 5 hours of work before review. It is not 3 to 5 clock hours until delivery. Reviewer availability, interruptions, and the changes a reviewer asks for all sit outside the number. One more fence: that range is a planning judgment, not statistics. Do not dress its endpoints up as ninety percent confidence unless you have a defensible method and data behind the phrase.',
        ],
      },
      {
        title: 'Promise the next evidence, not the date',
        paragraphs: [
          'Write it so each part is labeled. Conditional forecast, after the paging contract is confirmed: 3 to 5 focused hours to reach review, including validation. Reviewer availability is unconfirmed. I will report the interface findings at Monday 11:00 and revise the delivery forecast then.',
          'Look at what is firm and what is soft. The delivery forecast is soft and says so. The Monday 11:00 report is a real commitment, small enough to own, and it gives the planners their next update. Only agree to that checkpoint if you can keep it. And if Monday\'s check reveals that paging needs a different adapter design, tell the affected owner which assumption changed, out loud, rather than quietly sliding the date and hoping nobody compares notes.',
        ],
      },
      {
        title: 'Done for whom',
        paragraphs: [
          'The last confusion is the word done. Code complete, ready for review, reviewed, validated, accepted: each is a different stage, and the person asking usually cares about the last one. Answer with the stage you have actually reached, and name what remains between there and acceptance.',
          'Two things this lesson does not license. It does not make every question deserve a hedge; when you have checked the dependency and the work is routine, say tomorrow and mean it. And it does not turn forecasts into a shield against ever committing. Planners need something firm to hold. Give them the small commitments you can keep, findings by Monday, review-ready by Wednesday, and keep the big uncertain number labeled for what it is.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'What the estimate includes',
        alt: 'Confirm paging first; implementation takes a modeled 2 to 4 hours, validation 1 hour, and review timing remains unknown.',
        caption: 'Find where the 3-to-5-hour number starts and stops: it covers only the middle two boxes. The first box is the unknown that gates it and the last box is waiting you do not control. Hypothetical effort, not a schedule.',
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
        'Add up implementation and validation to get the 3-to-5-hour subtotal, then draw a box around it and write outside the box what it excludes: the interface check before, the review wait after. Seeing the box makes the scope of the number concrete.',
        'Draft the forecast in three labeled parts: the paging assumption it depends on, the review availability you do not control, and the one checkpoint you will commit to. Read it back and check that a listener could tell which part is a promise.',
        'Now suppose the paging check reveals a different adapter is needed. Write the update that names the changed assumption and what it affects. Do not invent a new date; say when you will have one.',
      ],
      notice: 'A reader can separate three things in your note: estimated effort, waiting you do not control, and the specific commitment you are offering. Nothing in it can be mistaken for an accepted delivery date.',
      troubleshooting: 'If your draft is a bare date, it is a commitment whether you meant it or not. Add the acceptance stage it refers to, the dependency it assumes, and the checkpoint that will narrow it.',
    },
    recall: {
      prompt: 'Your implementation is finished, but the specialist review it needs has no confirmed slot. Someone asks: is it delivered?',
      hint: 'Being ready for a stage is different from having passed through it.',
      answer: 'Answer with the stage you have reached: the implementation is ready for specialist review, with validation done. Then name what stands between here and delivered: the review itself, whose timing is unconfirmed, and any changes it produces. Finally, ask for the thing that would actually move it, a scheduling decision for the review slot. Calling code completion delivered would hand the planners a date you cannot keep, and they would find out at the worst possible moment.',
    },
    quiz: {
      question: 'What does the 3-to-5-hour estimate in the example actually establish?',
      options: [
        'Guaranteed elapsed time from now until accepted delivery.',
        'Conditional implementation and validation effort before review, assuming the interface check passes.',
        'A measured confidence interval that covers review and all possible rework.',
      ],
      correctIndex: 1,
      explanation: 'The number is a box around two stages, implementation and validation, and it only holds if the paging assumption survives the check. It says nothing about clock time to acceptance, because the review wait and follow-up changes sit outside the box, and it is a planning judgment rather than a measured interval, so statistical language would be borrowed authority.',
    },
    takeaway: 'Label the forecast, name its assumptions, commit to the next checkpoint, and say which stage of done you mean.',
    sourceNote: 'Launch and small-change guidance inform dependencies and review readiness. The time range is an original hypothetical forecast, not an empirical estimation model.',
  },
  {
    id: 'work-019',
    title: 'Match an update to the reader decision',
    outcome: 'Write the same news for two different readers, changing where each one starts without changing what is true.',
    scene: 'A latency panel labels a millisecond value as seconds while release and debugging owners need different details.',
    sections: [
      {
        title: 'Two readers need different entrances',
        paragraphs: [
          'A latency panel receives 2000 milliseconds and displays 2000 s. The right display is 2 seconds. Nothing is slow; the number is just wearing the wrong unit. Two people need to hear about it today. The release owner is deciding this afternoon whether the panel ships. A developer is about to open the formatter to find out why.',
          'Send the release owner your full trace and they have to dig through it for the one fact they need: is the panel ready or not? Send the developer only panel not ready and you have thrown away the reproduction they need. Neither reader is wrong to want something different. The question is how to give each of them a different entrance into the same building.',
        ],
      },
      {
        title: 'Shorten the detail, never the uncertainty',
        paragraphs: [
          'A hospital discharge letter and the chart notes behind it describe one patient. The letter is short and leads with what the family doctor must act on; the notes are long and lead with the observations. If the letter said recovered where the notes said not yet re-examined, that would not be a shorter version. It would be a different story, and someone would make a wrong decision on it.',
          'So start with the shared facts, written once. A synthetic 2000 ms input is displayed as 2000 s. The stored value is unchanged. The inspected panel is affected. Other views have not been checked. The release reader gets impact, readiness, and a decision request first. The developer gets input, output, and the untested boundary first. The one rule that holds both together: not checked never becomes unaffected on the way to a shorter message.',
        ],
      },
      {
        title: 'Draft both versions from one fact set',
        paragraphs: [
          'Release note: the latency panel is not ready; its unit display is wrong for the synthetic fixture. Stored values are unchanged. Other views are unassessed. Please decide whether to omit the panel pending verification.',
          'Technical note: input 2000 ms renders as 2000 s instead of 2 s. Storage still holds 2000 ms. Next check: where the value and its unit suffix are joined in this panel. Other views are untested. Read them side by side. Each opens with its reader\'s question. Both carry the unchanged storage and the untested views. Neither claims the service slowed down, because a display defect says nothing about actual latency. Attach the same evidence record to both where access permits, so anyone can walk from one to the other.',
        ],
      },
      {
        title: 'The shortcuts that change the story',
        paragraphs: [
          'Two shortcuts feel like summarizing and are actually editing the facts. The first is a reassuring label: cosmetic. It sounds proportionate, and it replaces the specific wrong display and its known limits with a judgment the reader cannot check. Say what is wrong and how far you looked; let them decide what to call it.',
          'The second is converting scope: only this panel is affected. You tested one panel. That establishes one affected panel and zero safe ones. The honest version is this panel is affected and the others are untested, which is longer by four words and shorter by one false promise. Tailoring is about order and depth. The moment two readers could make conflicting decisions from your two messages, you have written two stories, not two summaries.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Same defect, different first question',
        alt: 'The release owner needs panel readiness; the debugging partner needs the 2000 ms to 2000 s reproduction and conversion boundary.',
        caption: 'Read each column\'s first clause: that is the entrance built for its reader. Then look for what both columns share, unchanged storage and untested views. The emphasis moves; the facts do not. Fictional messages.',
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
        'List the four shared facts from the panel example in a box at the top: wrong unit on 2000 ms, storage unchanged, this panel affected, other views untested. Everything below must trace back to this box.',
        'Write the release update: open with readiness, close with the decision you need from them. Keep it to four sentences. The box tells you which facts may not be dropped.',
        'Write the debugging update: open with the input and the incorrect output, then name the next boundary to inspect. Same box, different first sentence.',
        'Lay the drafts side by side and hunt for anything that shrank into a reassurance: a cosmetic, an only, a not affected. Restore the specific fact and its limit wherever you find one.',
      ],
      notice: 'Each reader can act from their first sentence, and if they compared notes they would find the same defect, the same scope, and the same unknowns. That is the test of a tailored update.',
      troubleshooting: 'If one draft just says cosmetic, you have replaced an observation with a verdict. Write the actual wrong display, 2000 s for 2000 ms, and what you have and have not checked, and let the reader judge.',
    },
    recall: {
      prompt: 'A backup-export defect reproduces on one browser; you have not tried the others. A stakeholder wants a two-sentence update. What must survive the cut?',
      hint: 'The scope you tested is not the scope that is affected.',
      answer: 'Three things survive: the observed export problem, the one browser you tested it on, and the plain statement that wider scope is unknown. Something like: the backup export fails on the tested browser; other browsers have not been checked yet. The setup details, versions and steps, can go to the technical partner in a separate note. What the short version may not do is let one tested browser quietly become the only affected browser, because the stakeholder would then plan as if the rest were safe, and nobody has shown that.',
    },
    quiz: {
      question: 'Which release summary preserves the evidence from the panel example?',
      options: [
        'This panel mislabels units; storage is unchanged; other views have not been assessed.',
        'The whole service is slower, because the panel displays a larger number.',
        'Only this panel can be affected, because it is the only one tested.',
      ],
      correctIndex: 0,
      explanation: 'The first summary keeps the observation and its scope intact: what is wrong, what is not, and what is unknown. The second turns a display defect into a performance problem the evidence never showed. The third performs the classic conversion, from one tested to only one affected, and hands the release owner a safety promise nobody earned.',
    },
    takeaway: 'Change the entrance for each reader; never change the facts or shrink the unknowns on the way to a shorter message.',
    sourceNote: 'Incident and postmortem references support shared factual communication. The unit-display defect and paired updates are original examples, not a real incident report.',
  },
  {
    id: 'work-020',
    title: 'Close a handoff with acknowledgment',
    outcome: 'Hand over a piece of work so that the next person has the state, the next action, and has actually said yes to owning it.',
    scene: 'A browser-compatibility investigation passes from one contributor to another at a workday boundary.',
    sections: [
      {
        title: 'A document can arrive without an owner',
        paragraphs: [
          'It is the end of your day and a compatibility investigation is half done. Mira picks up tomorrow. You write: details attached, link the test matrix, and log off. Tomorrow, Mira reads the attachment, assumes you will answer the pending review question when you are back, and gets on with her own work. You, meanwhile, assume Mira has it. The question sits unanswered for two days, and both of you are right that you did what you said.',
          'Both people have the document. Nobody has accepted the action. That is the whole failure, and it happens because handoffs feel like information transfer when they are really responsibility transfer. The document moved. The expectation of who answers next did not, because nobody said it out loud and nobody agreed to it.',
        ],
      },
      {
        title: 'Transfer a bounded current state',
        paragraphs: [
          'Think of a relay race. The baton is not just passed; the receiving runner reaches back, closes their hand, and only then does the first runner let go. If the first runner simply drops the baton in the receiver\'s lane and keeps running, it is on the ground, however close to the right person it landed. A handoff needs that moment of the closed hand.',
          'What goes in the baton: what is working, what remains uncertain, what was already tried, the pending action, and who is taking it. Here, Browser A passes the saved-report fixture. Browser B has not been checked. Changing the column width did not explain the missing header. The pending action is to run that same fixture in Browser B and report the header result. Keep it bounded. A handoff is not the project history, and it should never include your personal credentials; give the location of the evidence and the access path, not your login.',
        ],
      },
      {
        title: 'Ask for acceptance of the next action',
        paragraphs: [
          'The message names the person, the action, and the request to own it. Mira, please take ownership of the Browser B header check and the next update. Browser A passes this fixture; Browser B is untested. Column-width changes did not resolve the reported symptom. Please confirm you have the fixture and can own that check.',
          'The reply that closes the hand sounds like this: accepted. I have the fixture and will own the Browser B check and the next update; the other compatibility tests remain outside this handoff. Now, and only now, tell the wider group that Mira owns the next response. If no acknowledgment comes before you leave, the baton is on the ground: follow whatever coverage process your team has agreed, rather than assuming responsibility moved because you wrote a nice note.',
        ],
      },
      {
        title: 'Thanks is not yes',
        paragraphs: [
          'Two replies get mistaken for acceptance. Thanks, got it confirms receipt of a document and nothing more. I can open it confirms access. Neither says I will do the next thing. If that is all you get, ask the direct question: can you own the Browser B check and the update? A polite reply is not a transfer of responsibility, and treating it as one is how work falls between two people who both acted in good faith.',
          'Proportion matters too. A five-minute favor between desk neighbors does not need a formal acceptance ritual, and demanding one would be tiresome. The formality should scale with what happens if the action is missed: a pending review question that gates a release deserves the closed hand, and a quick look at a screenshot does not. Match the ceremony to the cost of the baton hitting the floor.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A responsibility, then acceptance',
        alt: 'Mira confirms the fixture and accepts ownership of the Browser B check and next update.',
        caption: 'Watch for the moment the hand closes: Mira\'s line names what she owns and what she does not. Until that line exists, the baton is on the ground however good the notes are. Fictional exchange.',
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
        'Write the current-state note in four short lines: Browser A passes the fixture, Browser B untested, column-width idea tried and failed, next action is the Browser B header check. Bounded state, not history, is what the receiver can absorb in a minute.',
        'Add the request: name the incoming owner, the exact action, and the fixture they will need, then ask the direct question: can you own this? A request that can be answered with thanks is not yet a request.',
        'Play the receiver and write the acceptance you would want to receive: confirm the fixture is in hand, state the bounded responsibility, and name anything still missing. Notice how different it feels from got it.',
        'Write the one-line ownership announcement to the wider group, and mark it to be sent only after acceptance arrives. Sending it before is announcing a handoff that has not happened.',
      ],
      notice: 'The outgoing note and the incoming reply agree, in words, on who owes the next response and what it covers. Nothing depends on an assumption about what the other person probably thinks.',
      troubleshooting: 'If the reply you got is just thanks, do not read acceptance into politeness. Ask the direct question: are you taking the Browser B check and the update? One extra message now saves two silent days later.',
    },
    recall: {
      prompt: 'You send a proposal to a colleague before going on leave. They reply that they can open it. What is still unresolved?',
      hint: 'Access, understanding, and responsibility are three different facts.',
      answer: 'They have confirmed access, nothing else. Still open: do they understand what the proposal needs next, and have they agreed to do it, for example collecting the review decisions and updating the owner while you are away? Ask that question directly and confirm the scope: this proposal, these decisions, not your whole workload. If the answer is no or silence, the baton is on the ground and you need to find another hand before you leave. Opening a file tells you the attachment worked.',
    },
    quiz: {
      question: 'The recipient can open your notes but says they cannot take the next action. What is the state of the handoff?',
      options: [
        'Complete, because the information reached the intended person.',
        'Complete, provided the outgoing person has already announced their departure.',
        'Not accepted; arrange ownership through the agreed coverage process.',
      ],
      correctIndex: 2,
      explanation: 'The recipient has told you plainly that the hand did not close, so responsibility has not moved and the baton is on the ground. Information arriving is not acceptance, and announcing your departure changes nothing about who owns the next action. The work now goes through the coverage process to find an owner who can actually say yes.',
    },
    takeaway: 'Pass the bounded state, ask the direct question, and let go only when the other hand has closed on it.',
    sourceNote: 'Managing Incidents explicitly discusses acknowledged handoffs. This routine-work adaptation is original; the necessary formality depends on the responsibility being transferred.',
  },
  {
    id: 'work-021',
    title: 'Write a hypothesis that can be contradicted',
    outcome: 'Turn a hunch about a bug into a prediction, then pick the one check whose result could prove the hunch wrong.',
    scene: 'A synthetic tag search returns no match for blue despite containing a record tagged Blue.',
    sections: [
      {
        title: 'A suspicion needs a prediction',
        paragraphs: [
          'A tag search has one record tagged Blue. You type blue, lowercase, and get nothing. Your gut says case-sensitive comparison, and your gut is probably right. But probably right is where investigations go to die, because a suspicion with no prediction attached can absorb any result. Every new failure becomes further proof of the thing you already believed.',
          'So turn the suspicion into a sentence that can lose. If the comparison is case-sensitive, then with the same dataset and setup, querying Blue finds the record and querying blue does not. Now write the losing condition before you run anything: if both queries fail, a case mismatch alone cannot explain this. That sentence is the whole discipline. It is cheap to write and it is the only thing standing between you and reinterpreting every outcome as agreement.',
        ],
      },
      {
        title: 'Pick the check that splits the explanations',
        paragraphs: [
          'A detective with two suspects does not look for more clues in general; they look for the one fact that points at one suspect and away from the other. A check that would come out the same whichever explanation is true tells you nothing, however much data it produces. Another full log dump shows activity. It does not separate case handling from, say, the fixture never having loaded.',
          'The paired query does separate them, because only one thing changes between the two runs: the capitalization. Record, dataset, and setup stay fixed. One more precondition protects the whole experiment: confirm the Blue record actually reaches the lookup. Two empty results against a fixture that silently failed to load would look exactly like a contradiction and mean nothing of the kind. A hypothesis is a temporary explanation, held loosely, meant to get stronger or weaker as evidence arrives. It is not a side you have joined.',
        ],
      },
      {
        title: 'Interpret the pair without overclaiming',
        paragraphs: [
          'Say the results come back: blue, zero matches; Blue, one match. Write it down with its limits attached. Results support case-dependent behavior in this setup. Next, inspect where the query is normalized and compared.',
          'Now notice everything you have not shown. You have not identified which function is responsible. You have not established that case sensitivity violates the agreed contract; perhaps it was intended. You have not checked that other tags behave the same way. If instead Blue also returns zero, the simple case-only explanation has been contradicted. Write that, and move to fixture loading or another filter in the path. Either way the experiment paid for itself, because the next question is narrower than the last one.',
        ],
      },
      {
        title: 'The hypothesis that cannot lose',
        paragraphs: [
          'The warning sign is a hypothesis every result supports. If a match confirms case sensitivity and a miss confirms it too, because maybe the normalization is also broken, you have stopped predicting and started narrating. The remedy is to make the prediction narrower until some concrete outcome would embarrass it, and to write that outcome down first.',
          'The opposite mistake is treating one clean pair as a verdict. A single zero-and-one result under one setup supports an explanation; it does not close the case, and the next lesson in this path shows why one change at a time matters so much. Hold the explanation firmly enough to act on and loosely enough to drop when the evidence turns.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Paired query on the same record',
        alt: 'For a record tagged Blue, the hypothetical lowercase query returns zero matches and the matching-case query returns one.',
        caption: 'Find the one thing that differs between the two columns: only the capitalization of the query. That is what makes the different results meaningful. Support for case-dependent behavior, not a diagnosis. Synthetic results.',
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
        'Before looking at any result, write the hypothesis and its two predictions: what blue should return and what Blue should return if case sensitivity is the cause. Writing first is what stops you from reading the result as agreement.',
        'List what must stay fixed between the two queries: dataset, record, setup. Then add the precondition that protects the test, confirming the Blue record actually loads, because two misses against an unloaded fixture prove nothing.',
        'Interpret the supplied zero-and-one pair in two sentences: one for what it supports, one for what it leaves open. The second sentence is usually the harder one to write.',
        'Now suppose both queries returned zero. Write what that contradicts and where you would look next. If your answer is still case sensitivity, your hypothesis cannot lose and needs narrowing.',
      ],
      notice: 'At least one possible result on your page would make you change the explanation or the next test. A hypothesis with that property is doing real work.',
      troubleshooting: 'If every outcome you can imagine supports your hypothesis, you are narrating rather than predicting. Make the prediction more specific and write down one concrete result that would count against it.',
    },
    recall: {
      prompt: 'A thumbnail fails to render in only one report. You suspect the image format. What paired check could challenge that explanation?',
      hint: 'Keep the renderer fixed and vary only the thing you suspect.',
      answer: 'Build two synthetic images that are alike in every way you can control, same dimensions, same renderer, same report, differing only in format: one in the suspected format, one in a format known to work. Predict first: if format is the cause, the suspected one fails and the other renders. Then run both. If both fail, format alone cannot explain it and you look at shared loading or rendering conditions. If only the suspected one fails, you have support, under this setup, and still not proof of which code path is responsible.',
    },
    quiz: {
      question: 'Both case variants return zero, and the target record is confirmed loaded. What is the sound next statement?',
      options: [
        'Normalize both queries immediately and report case sensitivity as the resolved cause.',
        'A case mismatch alone did not predict this pair; investigate another filter or lookup condition.',
        'Drop input handling from the investigation and concentrate only on infrastructure.',
      ],
      correctIndex: 1,
      explanation: 'The prediction said Blue would succeed, and it did not, so the simple explanation lost the test you designed for it. Fixing case anyway is acting on a hypothesis the evidence just contradicted. Abandoning input handling entirely overcorrects; case could still interact with something else, so you widen the search rather than flip to a new certainty.',
    },
    takeaway: 'Write the prediction and its losing condition before you check, then pick the test that could actually embarrass your hunch.',
    sourceNote: 'Effective Troubleshooting describes hypothesis-driven diagnosis and confounding conditions. The tag experiment is original and supports bounded reasoning, not certainty from one pair.',
  },
  {
    id: 'work-022',
    title: 'Reduce a reproduction while preserving the failure',
    outcome: 'Strip a failing example down to its essentials without accidentally swapping the original bug for a different one.',
    scene: 'A sorting reproduction is reduced from a decorated report to the two values that still appear in the wrong order.',
    sections: [
      {
        title: 'Smaller is useful only if the same thing fails',
        paragraphs: [
          'A report arrives with three labels, 10, 2, and 3, plus a colour theme and a free-text note. The contract says numeric ascending order. The view shows 10, 2, 3. Somewhere in that bundle is a sorting defect, and the theme and the note are almost certainly bystanders. You want the smallest example that still fails, because small examples are the ones other people can actually look at.',
          'Here is the trap. Reduction means removing one thing and then checking that the same symptom is still there. It does not mean cutting until something, anything, breaks. Delete a required field and you will get a validation error, which is a failure, and a completely different failure from the one you were chasing. Smaller and still broken is only progress if broken means the same thing it meant at the start.',
        ],
      },
      {
        title: 'Keep or restore each removal',
        paragraphs: [
          'Think of a mechanic finding a rattle. They remove the roof box: still rattles, leave it off. Remove the spare wheel: still rattles, leave it off. Remove the exhaust heat shield: silence. That silence does not mean the shield was decoration; it means the shield is part of the rattle, so it goes back on and the search continues around it. Every removal is a question with two possible answers, and the answer decides what happens next.',
          'Define the symptom first, precisely: at least one larger number appears before a smaller one. Remove the theme and the note: output 10, 2, 3, still wrong, keep the reduction. Remove the 3: output 10, 2, expected 2, 10, still wrong, keep it. Remove the 10: output is a single 2, and one value cannot be out of order. The symptom is gone, so the 10 goes back. Each decision follows the observed behavior, never how tidy the example looks. And keep your original failing version safe, so a bad reduction cannot erase the evidence you started with.',
        ],
      },
      {
        title: 'Describe what the reduced case establishes',
        paragraphs: [
          'The write-up is three sentences. The two labels 10 and 2 are sufficient to reproduce the numeric-order violation in this fixture. Theme, note, and the label 3 are not required here. A one-label version does not reproduce it.',
          'That is a reproduction another person can hold in their head. Be careful about what it does not say. It does not claim to explain every ordering complaint anyone has filed. The pattern, 10 before 2, strongly suggests text comparison, where the character 1 sorts before 2, but reduction alone cannot tell you which function is doing the comparing. Keep the intended contract, numeric ascending, written right next to the output, so the next investigator recognizes the same failure instead of guessing what correct was supposed to look like.',
        ],
      },
      {
        title: 'When the error changes shape',
        paragraphs: [
          'The most common way reduction goes wrong is quiet substitution: the example still fails, so you keep cutting, and nobody notices that the failure has moved. It used to be wrong order in the view. Now it is a crash before the data reaches the view. Both are red; only one is yours. Whenever the error message, the location, or the timing of the failure changes, stop and restore the last thing you removed.',
          'Reduction is also not the same as proof. A minimal case shows what is sufficient to trigger the symptom under this setup. It does not show that the missing pieces are harmless everywhere, and it does not locate the cause. What it buys is focus: a two-value example turns a vague bug report into something a colleague can reason about in thirty seconds, which is where the actual diagnosis begins.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Keep the inversion, restore what matters',
        alt: 'Decoration and 3 can be removed; removing 10 eliminates the inversion, so it is restored.',
        caption: 'Follow each box to its verdict: the first two removals keep the wrong order, so they stay removed. The third makes the symptom vanish, so the 10 goes back. Supplied synthetic outputs, not executed tests.',
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
        'Write the full original input, 10, 2, 3, theme, note, and beneath it one precise sentence defining the symptom: a larger number appears before a smaller one. Defining it first is what lets you tell the same failure from a new one.',
        'Cross out the theme and the note and write the supplied output beside them: 10, 2, 3. Still wrong, so the cross-outs stay.',
        'Cross out the 3. Write actual 10, 2 against expected 2, 10. Still wrong, so it stays crossed out too.',
        'Cross out the 10, then look at what is left: a lone 2. Nothing can be out of order on its own, so the symptom is gone. Write restore beside the 10 and bring it back. This is the step people skip, and it is the one that makes the method honest.',
        'Write the three-sentence reduced-reproduction note: what is sufficient, what was not required, and what does not reproduce.',
      ],
      notice: 'Your final example is two values instead of a decorated report, and it disagrees with the contract in exactly the way the original did. Same symptom, far less to look at.',
      troubleshooting: 'If at any step the error changes, a different message, a crash instead of wrong order, a failure earlier in the flow, you have substituted a new bug for yours. Restore the last removal and confirm the original symptom comes back before continuing.',
    },
    recall: {
      prompt: 'You remove a login step from a reproduction and the report-formatting failure turns into an access-denied response. Was that a successful reduction?',
      hint: 'Ask whether the code you are investigating still runs at all.',
      answer: 'No. The formatting failure happened inside the formatter. Access denied happens at the door, before the formatter ever runs, so you are now looking at a different failure in a different place. It is the mechanic hearing a new noise and calling it progress. Restore the login step, confirm the original formatting symptom returns, and then look for details you can simplify that still let the request reach the formatting path: fewer rows, simpler content, a plainer template.',
    },
    quiz: {
      question: 'A reduced example still errors, but it now fails before entering the parser you are investigating. What should you do?',
      options: [
        'Restore the removed prerequisite, because the target failure has been replaced by a different one.',
        'Keep it, because fewer setup steps always make a better reproduction.',
        'Claim both failures share a cause until someone proves otherwise.',
      ],
      correctIndex: 0,
      explanation: 'A failure that happens before the parser runs cannot be the parser failure you were reducing; the symptom moved, so the last removal has to go back. Fewer steps are only better when the same thing breaks. Asserting a shared cause with no evidence inverts the burden of proof and sends the investigation after a connection nobody has shown.',
    },
    takeaway: 'Remove one thing, check for the same symptom, keep the removal if it survives and restore it if the symptom disappears or changes shape.',
    sourceNote: 'Effective Troubleshooting supports reproducible simplification. These invented paper results make no claim about a real sorting implementation.',
  },
  {
    id: 'work-023',
    title: 'Control what changes in an experiment',
    outcome: 'Tell the difference between a fix that worked and a bundle of changes that happened to work, then isolate the one that mattered.',
    scene: 'A synthetic client timeout experiment changes build, payload, and waiting limit before isolating the limit.',
    sections: [
      {
        title: 'A passing combination leaves several explanations',
        paragraphs: [
          'A client on build A times out. The request carries a 20-byte fixture and the client waits at most 100 milliseconds for a reply. You are in a hurry, so you change three things at once: switch to build B, shrink the fixture to 10 bytes, and raise the waiting limit to 200 ms. It works. Relief. Now someone asks what fixed it, and the honest answer is that you do not know.',
          'The result establishes exactly one thing: a different combination behaved differently. Any of the three changes could be responsible, or two of them together. The temptation is to credit the timeout because it was the last thing you touched. That is a story about your editing order. It says nothing about whether the other two changes were irrelevant, and if you ship all three you have shipped two changes you cannot justify.',
        ],
      },
      {
        title: 'A baseline and one intentional difference',
        paragraphs: [
          'Imagine a cook whose soup is too salty. They change the stock, the salt, and the cooking time, and the next batch tastes fine. They have a good soup and no recipe, because they cannot say which change to keep. The careful cook makes the original soup again, changes only the salt, and tastes. Now a difference means something.',
          'The original soup is the baseline: the known setup that a change is compared against. Write it down in full, build, input, waiting limit, and any measurement you have switched on. For the single-factor check, return to build A and the 20-byte fixture and change only the limit, 100 ms to 200 ms. In the supplied setup, the reply arrives after 150 ms. It misses the short limit and fits the long one. That isolates the waiting behavior under these conditions. It does not tell you why the reply takes 150 ms, and it is not yet a recommendation to raise any real timeout.',
        ],
      },
      {
        title: 'Restore, then state the bounded conclusion',
        paragraphs: [
          'The evidence on paper now reads: A, 20 bytes, 100 ms, timeout. A, 20 bytes, 200 ms, completes. Then one more step most people skip: put the limit back to 100 ms and run again. A, 20 bytes, 100 ms, timeout again. Restoring the baseline confirms the original behavior is still there and was not a fluke that wandered off while you were working.',
          'Write the conclusion no larger than the evidence. The outcome changes with the waiting limit in this fixture. Build B and the smaller payload are not required for that change. Full stop. Real systems have timing noise and factors that interact, so sometimes a single-factor pass will not settle things and a planned multi-factor comparison comes later. The one-change rule is the default, not a law of nature.',
        ],
      },
      {
        title: 'What the clean result still hides',
        paragraphs: [
          'Isolating the limit answers which setting; it leaves why untouched. A 150 ms reply might be normal for that endpoint or might be the actual defect, and raising the client limit could be papering over it. The experiment has told you where to look next, not what to ship.',
          'Two habits protect you. First, never attribute a result to the last change you made; attribute it to the only change you made, and if there was more than one, say so. Second, keep the baseline in writing before you touch anything, because a baseline reconstructed from memory after the fact is just another hypothesis. Match the size of the claim to the number of things you actually held still.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four recorded test conditions',
        alt: 'Baseline times out, raising only its limit permits completion, and restoring the limit restores the timeout.',
        caption: 'Compare row three against row one: a single field differs, 100 versus 200 ms, so the different outcome can be attributed. Then compare row two against row one and count how many fields changed. Hypothetical paper results.',
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
        'Rule four columns, build, payload bytes, waiting limit, outcome, and copy in all four supplied conditions. Laying them out as a table is what makes the number of changed fields visible at a glance.',
        'Circle every field that differs between the baseline and the combined trial. You should circle three. Then circle what differs between the baseline and the limit-only trial. You should circle one. The circles are the whole argument.',
        'Place the 150 ms reply against both limits and write one sentence on why it fails under 100 and passes under 200. This is the mechanism the controlled pair actually demonstrates.',
        'Finish with two honest sentences: what remains unknown about why the reply takes 150 ms, and why this result is not yet a recommendation to change a live timeout.',
      ],
      notice: 'You can point at the single circled field and say the outcome changed with that, and nothing else. You can also say plainly that the underlying delay is still unexplained.',
      troubleshooting: 'If any baseline field is blank or reconstructed from memory, stop and recover it before assigning credit to a change. A baseline you are unsure of makes every comparison against it unsure too.',
    },
    recall: {
      prompt: 'A rendering test passes after you change the font, the viewport, and the browser together. What can you conclude, and what would you compare next?',
      hint: 'Separate the successful combination from any single cause you would like to credit.',
      answer: 'You can conclude that the new combination renders correctly, and nothing more. Three fields changed, so the pass belongs to the bundle, not to any one change in it. To test the font, go back to the original browser and viewport and the original input, change only the font, and compare. Do the same for each factor you care about. If you suspect two of them interact, say so and plan a comparison that varies them deliberately, rather than hoping the interaction shows itself. The cook who changed everything has a good soup and no recipe until this is done.',
    },
    quiz: {
      question: 'How should the original trial that changed build, payload, and waiting limit together be summarized?',
      options: [
        'The waiting limit explains the pass, because it was the last setting changed.',
        'Each changed setting should be kept as an independently verified fix.',
        'The combination passed, but the responsible factor is unknown because three conditions changed at once.',
      ],
      correctIndex: 2,
      explanation: 'Three fields moved, so the pass belongs to the bundle and cannot be assigned to any one of them yet. Crediting the last edit describes your working order, not the system. Calling all three verified fixes inflates one piece of evidence into three, and would ship two changes nobody has justified.',
    },
    takeaway: 'Write the baseline, change one thing, restore it, and claim no more than the number of fields you held still allows.',
    sourceNote: 'Effective Troubleshooting discusses controlled tests, confounders, and instrumentation effects. The timing data is synthetic and is not operational timeout guidance.',
  },
  {
    id: 'work-024',
    title: 'Bisect with a dependable classification',
    outcome: 'Search a version history for the change that broke something, and report honestly when a version you cannot test leaves two candidates.',
    scene: 'A paper revision history contains a known good version, a bad version, and an unbuildable candidate.',
    sections: [
      {
        title: 'Search history with one definition of bad',
        paragraphs: [
          'A label formatter produces the right output for a fixture at revision r1 and the wrong output at r9. Somewhere in the seven revisions between them, a change broke it. You could read all seven diffs. Or you could do what you would do with a dictionary: open it in the middle, see which half the word is in, and repeat. That is bisection. Test a revision between the known endpoints, learn which side the break is on, and halve the remaining interval.',
          'The whole method rests on one assumption: that good and bad mean the same thing at every revision you test. So before you start, write down the exact output that counts as good, and confirm both endpoints against that same check. If you judge r1 by one test and r5 by a different one, the verdicts are not comparable and the halving tells you nothing. Git has a built-in bisect command for exactly this workflow, but the discipline is yours, not the tool\'s.',
        ],
      },
      {
        title: 'An unavailable test is not a failure result',
        paragraphs: [
          'Take a simple linear history with a single good-to-bad transition. Test r5: wrong label. The break is now after r1 and no later than r5. Test r3: correct label. The break is now at r4 or r5. Two candidates left, one more test to go.',
          'Then r4 refuses to build, because a dependency it needs is missing, for reasons that have nothing to do with the label formatter. Here is where honest bisection separates from tidy bisection. You have not learned that r4 is bad. You have not learned that r4 is good. You have learned nothing about the formatter at r4, because your test never ran. Think of a witness who was out of town: their absence is not testimony for either side. Git has a skip classification for exactly this, and a skip keeps the gap visible. It can leave several possible first-bad revisions instead of one.',
        ],
      },
      {
        title: 'Report the range you actually established',
        paragraphs: [
          'The write-up is honest about the gap. Same fixture: r1 and r3 pass; r5 and r9 fail. r4 is untestable for an unrelated build reason. The first bad revision is unresolved between r4 and r5, assuming this linear history with one transition.',
          'Two temptations pull at that paragraph. One is to call r4 bad so the search finishes with a single answer. The other is to call it good because the formatter test never actually failed there. Both invent a verdict from a non-event. The useful next moves are real work: try to make r4 testable in an isolated setup, perhaps by supplying the missing dependency in a way that cannot touch the formatter, or inspect the diffs of both r4 and r5 while carrying the uncertainty openly.',
        ],
      },
      {
        title: 'When the verdicts themselves wobble',
        paragraphs: [
          'Bisection halves an interval only as reliably as its verdicts. If a revision passes once and fails once under the same setup, you do not have a classification, you have noise, and halving on noise can send the search into an interval that excludes the actual change entirely. Fix the test before trusting the search: find the source of the intermittency or define a repeatable procedure, such as running the check several times and requiring agreement.',
          'Remember too what bisection finds. It locates the revision where the observed behavior changed, which is often the cause and is sometimes only where a latent problem first became visible. And the first failing revision you happened to test is not automatically the first bad one; it is just the one you looked at. Bisection narrows reliable classifications. It cannot manufacture evidence for revisions you were unable to test.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A bisect that ends with two candidates',
        alt: 'r3 passes and r5 fails; untestable r4 leaves two possible first-bad revisions.',
        caption: 'Watch the interval shrink across the first three boxes, then stop at the fourth: r4 gets no verdict, so two candidates remain. Arrows show narrowing, not elapsed time. Synthetic linear history with one transition.',
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
        'Write r1 through r9 in a row, and above them one sentence defining the label output that means good and the output that means bad. This sentence is the ruler every verdict will be measured with, so write it before any verdict.',
        'Mark r1 good and r9 bad, then apply the supplied result for r5: bad. Draw a bracket over the revisions still in play, r2 to r5, and notice the interval just halved.',
        'Apply the supplied result for r3: good. Redraw the bracket over r4 and r5 only. Two candidates left.',
        'Now mark r4 untestable and write the conclusion that keeps both candidates. If you feel the pull to pick one so the exercise ends neatly, that pull is the thing this lesson is about.',
      ],
      notice: 'Your conclusion names two candidates and says why one of them has no verdict. It is less satisfying than a single answer and it is the only conclusion the evidence supports.',
      troubleshooting: 'If you wrote r4 bad because it failed to build, separate the two questions: did the test run, and what did it show? A build failure answers the first with no, which means the second has no answer. Recalculate the range with r4 as a skip.',
    },
    recall: {
      prompt: 'A revision passes once and fails once under what looks like the same setup. What must happen before you trust its bisect classification?',
      hint: 'A midpoint verdict is useful only if it means the same thing as the endpoint verdicts.',
      answer: 'Treat it as unclassified until the test is repeatable. A verdict that flips on repeat is noise, and halving on noise can push the search into a range that does not contain the real change at all, which is worse than not searching. Investigate what differs between the two runs, timing, leftover state, an external dependency, or define a procedure that produces a stable answer, for example several runs with a required agreement. Preserve the uncertainty in your notes rather than picking the convenient verdict and moving on.',
    },
    quiz: {
      question: 'With r3 good, r5 bad, and r4 untestable, what is the justified conclusion under the example assumptions?',
      options: [
        'r5 is certainly first bad, because it is the first failing revision you tested.',
        'r4 or r5 could be first bad; the untestable revision prevents a unique conclusion.',
        'r4 is certainly first bad, because it did not build.',
      ],
      correctIndex: 1,
      explanation: 'The first failing revision you happened to test is not necessarily the first bad revision in history; r4 sits between the last known good and r5 and has no verdict either way. A build failure is the witness who was out of town, not testimony. Both candidates remain, and saying so is the honest result.',
    },
    takeaway: 'Define good and bad once, halve on reliable verdicts only, and when a revision cannot be tested, report the range rather than inventing its answer.',
    sourceNote: 'The inherited Git reference documents skipping. This invented history assumes consistent classifications and one linear good-to-bad transition.',
  },
  {
    id: 'work-025',
    title: 'Keep negative results with their limits',
    outcome: 'Write up a test that did not reproduce a bug so the next person knows exactly what it ruled out and what it never touched.',
    scene: 'A plain-text name fixture passes while the reported export defect concerns accented names.',
    sections: [
      {
        title: 'Did not reproduce still needs a setup',
        paragraphs: [
          'A bug report says that names with accented characters vanish from the export. You build a quick fixture with two names, Mina and Bo, run the export, and both appear perfectly. You write could not reproduce and move on. Every word of that is true. And the next person who reads it will reasonably assume accented names were tested and passed, when your fixture never contained one.',
          'A negative result means an expected effect was absent under a particular setup. Its worth depends entirely on whether that setup could have shown the effect if it were there. A smoke detector that stays silent in a room with no smoke has told you it is powered on, not that it works. Mina and Bo told you the export handles plain names. They had nothing to say about accents, because you never asked them.',
        ],
      },
      {
        title: 'Disconfirming is not the same as inconclusive',
        paragraphs: [
          'Two kinds of no look identical in a status column and mean opposite things. A disconfirming result conflicts with a prediction under conditions where the prediction should have held: you fed the exporter an accented name and it came through, so the hypothesis as stated took a hit. An inconclusive result leaves the hypothesis exactly where it was, because the condition it depends on was never present.',
          'Mina and Bo passing is inconclusive about accents and is still real evidence about something: a baseline for plain names that nobody needs to re-establish. Keep both statements side by side. One more subtlety when you do build an accented fixture: write down the exact bytes or encoding, not just the visible spelling. Two strings that look identical on screen can be encoded differently, and the one that looks right may not be the one the reporter typed.',
        ],
      },
      {
        title: 'Write the exclusion you actually earned',
        paragraphs: [
          'The note is five labeled lines. Hypothesis: the exporter drops names containing accented characters. Setup: demo build N2, plain-name fixture Mina and Bo, standard export path. Observation: both rows retained. Interpretation: plain-name baseline passes; the accented-name hypothesis remains untested. Next: run a synthetic accented fixture under the same setup.',
          'That note stops a colleague from running the plain-name check again and believing it is new coverage. When the accented fixture is eventually tested and passes, record its exact input and result the same way, and still do not close the original report or declare every encoding safe. One representative input passing is one input passing. The discipline is to keep observations you are missing visibly separate from observations that genuinely contradicted the prediction.',
        ],
      },
      {
        title: 'The two overreaches',
        paragraphs: [
          'A negative result invites two opposite mistakes. The first is inflation: translating both rows retained into the export is healthy or the report is wrong. The setup covered plain names in one build on one path. The conclusion must not cover more than that, and if you notice your sentence spreading beyond the setup, either narrow the words or design the test that would justify them.',
          'The second is deletion: deciding the plain-name run was a waste and leaving it out of the log. It was not a waste. It is a baseline that rules out a whole class of explanation, broken export for everyone, and it saves the next investigator an hour. A non-reproduction is evidence about its own setup. Logged with its limits it is useful; logged without them it is a trap.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What the successful export covers',
        alt: 'Mina and Bo were retained in the plain-name test; accented-name behavior was not exercised and remains unknown.',
        caption: 'Notice that the right-hand column has no result at all, not a passing one. That empty space is the honest shape of this evidence: a baseline on the left, an untested condition on the right. Fictional pair.',
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
        'Write the hypothesis exactly as the report states it, accented names are dropped, and directly beneath it the input you actually ran, Mina and Bo. Seeing them stacked makes the gap between them impossible to miss.',
        'Record the result as an observation only: both rows retained. Resist translating it into export is healthy or report is wrong; both of those are conclusions the setup cannot carry.',
        'Write three short lines: one conclusion the evidence supports, plain names pass on this build; one condition left unresolved, accented input; and one next comparison using a synthetic accented name with its encoding written down.',
        'Label the whole note with the build number and fixture name. The label is what lets a colleague recognize a check that has already been done instead of repeating it as fresh coverage.',
      ],
      notice: 'Your note keeps a reusable baseline and never pretends it tested the reported trigger. A reader can tell at a glance what was ruled out and what was never touched.',
      troubleshooting: 'If any sentence in your conclusion covers more input types than you actually ran, you have two choices: shrink the sentence to match the setup, or design the test that would earn the bigger sentence. Do not keep the big sentence and hope.',
    },
    recall: {
      prompt: 'A reported mobile layout defect does not appear when you open the page in a wide desktop window. What should the evidence log say?',
      hint: 'A different viewport may simply omit the condition that triggers the layout.',
      answer: 'Log the setup fully: browser, viewport width, fixture, and the observed result, layout correct at desktop width. Then say plainly that the reported mobile width was not exercised, so the report is neither confirmed nor contradicted, and plan a check at a matching viewport. The desktop result is a real baseline, the layout is sound at that width, and it is silent about the condition the reporter described. Writing it as could not reproduce without the viewport would send the next person to repeat your desktop check and call it mobile coverage.',
    },
    quiz: {
      question: 'A test omits the condition predicted to trigger the defect, and it passes. How should that result be classified for the hypothesis?',
      options: [
        'Conclusive rejection of the hypothesis, because the application ran without error.',
        'Evidence about the tested baseline, but inconclusive about the omitted trigger.',
        'Worthless evidence that should be deleted from the investigation record.',
      ],
      correctIndex: 1,
      explanation: 'The smoke detector stayed silent in a room with no smoke: that proves it is powered, not that it detects. The pass is a genuine baseline and says nothing about the trigger that was never present, so it cannot reject the hypothesis. Deleting it throws away a useful exclusion and invites someone to repeat the same run tomorrow.',
    },
    takeaway: 'A non-reproduction is evidence about its own setup. Log the setup, name what it never tested, and let it rule out only what it actually touched.',
    sourceNote: 'Effective Troubleshooting discusses negative results and scope. These original export examples make no measured encoding or compatibility claims.',
  },
  {
    id: 'work-026',
    title: 'Put a checklist at a decision point',
    outcome: 'Build a short checklist that answers one real question, with checks a person can actually inspect and a plan for when an answer is missing.',
    scene: 'An export-preview change needs a review-readiness checklist rather than a combined release manual.',
    sections: [
      {
        title: 'Choose what the list decides',
        paragraphs: [
          'You are about to ask for a code review on an export-preview change. Someone hands you the team checklist. It asks about release ownership, database backups, marketing copy, test fixtures, and whether the office printer has toner. It looks thorough. It is also mostly beside the point, because the question in front of you is small and specific: does the reviewer have enough context and evidence to assess this change?',
          'Every useful checklist sits at a moment when someone decides something, and it earns its place by helping with that decision. So the first thing to write is not an item but a trigger: before requesting code review. The second is the decision it serves: is this ready for a reviewer to evaluate? Deployment approval is a different decision at a different moment with different concerns. Items from that list are not thorough here. They are noise that trains people to tick without reading.',
        ],
      },
      {
        title: 'Replace reassurance with observable answers',
        paragraphs: [
          'A pilot\'s pre-flight checklist does not say aircraft is safe. It says flaps set, fuel quantity checked, doors latched. Each item names a thing you can look at and a state it should be in. A reassurance item, quality checked, cannot be verified by anyone, including the person ticking it; it just records that they felt fine at the time.',
          'Rewrite in that spirit. The description states how an empty export preview behaves: you can open the description and see whether it does. The empty-fixture test result is attached: you can find the attachment or not. Known limits are listed: the reviewer can tell tested behavior from assumption. Keep the long how-to procedures out of the list and link them from the work system, so the list stays short enough to read every time. A checklist reminds someone to inspect evidence at a decision point. It does not make an untested claim true because a box got ticked.',
        ],
      },
      {
        title: 'Specify what an unanswered item does',
        paragraphs: [
          'Three checks: expected empty-preview behavior stated; fixture and result available; untested spreadsheet integration identified. Then the part most checklists omit, the rule for a missing answer. If the result is missing, the author either supplies it or asks the reviewer whether a clearly labeled design-only review is useful. That is not readiness for approval.',
          'Look at what the exception does. It does not block all conversation; early design feedback is valuable and the author can still get it. It changes the kind of review being requested, and it labels the change honestly, so nobody later mistakes a design discussion for an approved patch. The author owns resolving incomplete items. Nothing on the list is allowed to resolve itself through silence.',
        ],
      },
      {
        title: 'Keep the list the size of its decision',
        paragraphs: [
          'Checklists grow by accretion. Something goes wrong once, an item is added, and nobody ever removes one. Within a year the review-readiness list has become a release manual, and because it is now too long to read, people tick it in bulk, which is exactly the failure the first item was added to prevent. Every item should answer the question: if this were false, would it change the decision at this trigger? If not, it belongs to a different list.',
          'Two mistakes to watch for. One is the global checklist that covers every decision at once; it covers none of them well. The other is confusing a ticked list with evidence. The list points at evidence. The fixture result, the stated behavior, the named limits are the evidence. If the pointing finger is all you have, you have a form, not a check.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A review request with an exception path',
        alt: 'Before review, inspect behavior description, fixture evidence, and limits; missing evidence requires completion or a labeled design-only review.',
        caption: 'Read the first three boxes as things a reviewer can open and look at. Then look at the fourth: it is the rule for a missing answer, and it changes the kind of review rather than ticking through. Fictional checks, not deployment permission.',
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
        'Write the trigger, before requesting review, and beneath it the single decision the list supports. Everything you add afterward has to justify itself against that line.',
        'Turn behavior, evidence, and limits into three checks, each phrased so a reviewer could open something and see whether it is true. If a check can only be answered with a feeling, rewrite it until it names an artifact.',
        'Add the exception: what the author does when the fixture result is missing, and the exact label a design-only review carries. The label is what prevents a design chat from being mistaken for approval later.',
        'Find one release concern that wandered into this list, backups, say, and cross it out, noting which separate decision should own it. Removing an item is as much a design act as adding one.',
      ],
      notice: 'Every item left on your list would change the review decision if it were false, and a missing answer has a route that is not an automatic tick.',
      troubleshooting: 'If an item says ready, good, or checked without pointing at a thing, ask what the reviewer would physically inspect to confirm it. Write that thing down instead.',
    },
    recall: {
      prompt: 'You need a checklist before handing a training document to a translator. What should decide its contents?',
      hint: 'Focus on what the translator needs to begin, not on the eventual publication workflow.',
      answer: 'Start with the trigger, before handoff to translation, and the decision: is this document ready to translate? That produces checks the translator can verify: the source text is stable and will not change under them, specialized terms are explained or in a glossary, and a named owner will answer questions about ambiguous passages. Publication approval, legal review, and layout belong to later decisions and stay off this list. The exception rule matters too: unresolved source decisions go back to the author, rather than becoming guesses the translator makes quietly in a second language.',
    },
    quiz: {
      question: 'A review request lacks test evidence but the author wants early design feedback. What is the honest checklist outcome?',
      options: [
        'All checks pass, because any review is better than none.',
        'No discussion can occur until every release task is complete.',
        'Label it design-only feedback and keep the evidence requirement in place for approval.',
      ],
      correctIndex: 2,
      explanation: 'The exception path exists for exactly this: the conversation goes ahead, honestly labeled, and approval still waits for evidence. Ticking everything through turns the checklist into a form. Forbidding all discussion imports release-manual thinking into a review decision and blocks feedback that would have been useful.',
    },
    takeaway: 'Name the trigger and the decision, make every check point at something inspectable, and write the rule for a missing answer before you need it.',
    sourceNote: 'Launch and review references inform checklist content. This review-readiness design is an original heuristic, not a substitute for the applicable approval process.',
  },
  {
    id: 'work-027',
    title: 'Write stop conditions before risky work',
    outcome: 'Decide in advance what mismatch will make you pause, what you will preserve when it happens, and who is allowed to clear it.',
    scene: 'A tabletop change plan names a different training target from the one approved.',
    sections: [
      {
        title: 'A familiar procedure can point at the wrong target',
        paragraphs: [
          'Paper exercise. The approved request names training target LAB-A. The change plan in front of the operator names LAB-B. The operator has run this procedure a dozen times, recognizes every step, and is fairly sure the two labels are aliases for the same thing. Fairly sure feels like enough, especially at the end of a long day with the change window closing.',
          'It is not enough, and the reason is structural rather than personal. Knowing how to perform a step tells you nothing about whether the target or the authorization is right. Those are separate facts, and competence at the first one tends to breed confidence about the second. A stop condition is a written rule, agreed before the work begins, that says: when this precondition is false or unknown, pause. Here the precondition is an exact match between the approved target and the planned one. The check belongs before the consequential step, while stopping still costs nothing.',
        ],
      },
      {
        title: 'Pair the condition with a response',
        paragraphs: [
          'A surgical team does a time-out before the first incision: right patient, right procedure, right site, read aloud and confirmed. The point is not that surgeons forget which leg. The point is that a routine, done the same way every time, catches the one-in-a-thousand case where the paperwork and the person disagree, at the moment it can still be fixed by talking rather than by apologizing.',
          'A stop condition that works has three parts: the observation that triggers it, the safe response, and the person or process that can resolve it. Be careful with targets supplies none of these. Compare it with: if the plan identifies a different target than the approval, do not proceed; record both identifiers and ask the change owner for a corrected plan and confirmed scope. That version tells the operator exactly what to look at, exactly what to do, and exactly who to ask. Friendly names can be ambiguous, so compare whatever identity the procedure actually acts on, not the nickname.',
        ],
      },
      {
        title: 'Write the pause message before the procedure',
        paragraphs: [
          'Draft the message now, while nothing is wrong, so the operator is not composing it under pressure. STOP: approval names LAB-A; the plan identifies LAB-B. No change attempted. Please confirm the authorized target and issue a corrected plan before this resumes.',
          'Three things that message does not do. It does not edit the identifier to the one that looks more plausible and carry on; a guess that happens to be right is still a guess, and the next one will not be. It does not treat the mismatch as the only thing worth checking: missing recovery information, for instance, is its own stop condition with its own owner, and resolving the target question does not waive it. And when the corrected plan arrives, it does not assume the rest is fine; the preconditions get rechecked against the new version.',
        ],
      },
      {
        title: 'Stopping is the cheap option',
        paragraphs: [
          'The pressure to proceed is real and usually sounds reasonable: the window is closing, everyone is waiting, it is probably fine. Notice that none of those statements are about the mismatch. They are about the cost of pausing, which is always visible, weighed against the cost of acting on the wrong target, which is invisible until it is enormous.',
          'Two cautions keep this proportionate. Stop conditions are for consequential, hard-to-reverse steps, not for every keystroke; a list of forty triggers will be ignored as surely as none. And a stop condition is not a substitute for a good plan; it is the net under the plan. A paper exercise like this one teaches the shape of the rule. It is not a runbook, and it authorizes no live change.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The target mismatch stops the plan',
        alt: 'Approval names LAB-A, the plan names LAB-B, work pauses without a change, and the owner must confirm a corrected plan.',
        caption: 'Follow the flow to the third box and notice what it does not contain: no edit, no retry, no judgement call about aliases. The mismatch goes to the owner, and the preconditions get rechecked on the way back. Invented paper targets.',
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
        'Write approval target LAB-A on the left and planned target LAB-B on the right. Do not connect to any system; the entire exercise is the comparison, and seeing the two identifiers side by side is what makes the mismatch undeniable.',
        'Draft the stop condition in the three-part form: the exact observation that triggers it, the safe response, the person who can resolve it. Check that each part names something concrete rather than an attitude.',
        'Write the pause message you would send, including no change attempted and the confirmation you need from the change owner. Writing it calmly now is the point; you will not be calm later.',
        'Add a second, separate stop condition for missing recovery information, with its own owner and its own prerequisite for resuming. Notice that clearing the first one does nothing for the second.',
      ],
      notice: 'Your plan says exactly when to pause, exactly what to preserve, and exactly who clears it, and nowhere does it leave room to improvise a bypass because the labels looked similar.',
      troubleshooting: 'If your response reads fix the identifier and continue, you have written a guess into the procedure. Replace it with a request for confirmed scope from the owner, and note that the fix being obvious to you is not the same as it being authorized.',
    },
    recall: {
      prompt: 'A report is approved for publication to one audience, but the configured destination includes a broader group. What stop condition fits?',
      hint: 'The destination is part of the authorized scope, even when the content itself is ready.',
      answer: 'Trigger: the actual audience differs from the approved one. Response: do not publish; preserve the approved audience, the configured destination, and the report version so the mismatch is documented. Resolver: the publication owner confirms a corrected destination or issues a new approval for the wider group. The temptation here is that the existing distribution list is convenient and the content is finished, but convenience is not consent, and a report sent to the wrong hundred people cannot be unsent.',
    },
    quiz: {
      question: 'The approved target and the planned target differ, but the operator believes the labels are aliases. What should the procedure require?',
      options: [
        'Pause until the authorized owner confirms the identity and issues a corrected plan.',
        'Proceed if the operator has used both names before.',
        'Change the plan locally and keep the original approval unchanged.',
      ],
      correctIndex: 0,
      explanation: 'A suspected alias is a belief about identity, not a verification of it, and certainly not permission; the time-out exists precisely for the case where experience says probably fine. Familiarity with both names is evidence of competence, not of authorization. Editing the plan to match a guess detaches the work from its approval and leaves nobody accountable for the choice.',
    },
    takeaway: 'Decide before you start what will make you stop, write the pause message in advance, and let only the owner clear it.',
    sourceNote: 'Launch and incident references inform operational preconditions. This paper exercise is not a runbook or authorization for any live change.',
  },
  {
    id: 'work-028',
    title: 'Verify the outcome after the step',
    outcome: 'Tell apart three things that all look like success: the system accepted your request, the job finished, and the result is actually what you needed.',
    scene: 'A fictional export job reports completion but its twelve output rows contain only eleven distinct identifiers.',
    sections: [
      {
        title: 'Accepted is not completed',
        paragraphs: [
          'You ask an export service for a file. It replies instantly: HTTP 202 Accepted, job identifier J17. The checklist item says export complete, and your hand is already moving to tick it. Stop and read the response again. It said accepted. The service has agreed to do the work. It has not done it, and it has certainly not done it correctly.',
          'Think of handing a parcel over a post-office counter. The clerk takes it and prints a receipt. That receipt proves the parcel was accepted; it does not prove it arrived, and it does not prove the contents survived the journey. A procedure that ticks complete at the receipt can look successful at every step while the person who needed the file still has nothing usable. Keep three things separate in your head and in your notes: the action, the acknowledgment of the action, and the outcome the action was supposed to produce.',
        ],
      },
      {
        title: 'Define the observation that closes the task',
        paragraphs: [
          'For this exercise the contract is specific: J17 should export the twelve selected records, each exactly once, with their identifiers intact. Verification means two steps. First, check the documented job state, which tells you whether processing has ended. Second, check the resulting data against the contract, which tells you whether processing produced the right thing. Only the second one closes the task.',
          'Make the check specific to this job and this selection. Do not look at the newest file in the output folder and assume it is yours; tie the check to J17. Count rows, and then count distinct identifiers, because a twelve-row file can still be wrong. If the service is asynchronous, follow its documented lifecycle and waiting guidance rather than hammering the status endpoint. And while a result is pending or unavailable, its state is unverified. Not failed. Unverified. Those are different words with different next steps.',
        ],
      },
      {
        title: 'A completed job can still miss acceptance',
        paragraphs: [
          'Time passes. J17 reports completed. You open the file: twelve data rows, exactly as expected. Then you count distinct identifiers and find eleven. Identifier 11 appears twice. Identifier 12 is nowhere. Three verdicts, all true at once: request accepted, workflow reports completed, output acceptance failed because the identifier set differs from the twelve selected records.',
          'Write all three. That single sentence is more precise than everything passed and more precise than the request failed, and either of those would send the next person in the wrong direction. Preserve J17 and the exact discrepancy for whoever investigates. And resist the reflex to just run it again. Repeating an export when you do not understand the state can produce a second file, more duplicates, and evidence that is now harder to read than the evidence you had.',
        ],
      },
      {
        title: 'Where the three verdicts come apart',
        paragraphs: [
          'The pattern generalizes to anything with a boundary between asking and getting. A message queue acknowledges receipt, not processing. An email service accepts a message for delivery, not into a mailbox. A deployment tool reports the rollout finished, not that the new version is serving traffic correctly. Each boundary is a place where a checklist can honestly say done about one thing and be read as done about another.',
          'Two habits keep you honest. Name the outcome you actually need before you start, in terms you can count or inspect: twelve records, each once. And when status is unclear, reach for the read-only check the system documents, not for the action button. Closing a task on its last successful acknowledgment is how a procedure passes while its purpose fails.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'J17 has three different verdicts',
        alt: 'J17 reports completed, but its twelve rows contain eleven unique identifiers and fail output acceptance.',
        caption: 'Notice that the first two boxes are both green and both true, and the task is still not done. The third box is where row count and identifier count part ways: twelve rows, eleven identities. Hypothetical counts.',
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
        'Write the expected identifiers 1 through 12 in a row. Beneath them write the modeled output: 1 through 11, with 11 written a second time. Seeing both rows makes the twelve-equals-twelve trap visible.',
        'Count total rows in the output, then count distinct identifiers. Write both numbers and circle the gap: 11 is duplicated, 12 is missing. Two counts, not one, is the whole technique.',
        'Draft three separate checklist lines: request accepted, job completed, output verified. Give each its own evidence. Notice that the first two can be ticked here and the third cannot.',
        'Write what you would do if the job status were unclear: the documented read-only status check, by job identifier, and explicitly not a second export. Say why: a repeat can multiply the duplicates you are trying to understand.',
      ],
      notice: 'Your output check catches a defect that two green acknowledgments hid completely. The row count said twelve; the identifier count said the contract was not met.',
      troubleshooting: 'If your verification step only checks for the word completed or a success flag, it is checking the acknowledgment, not the outcome. Add the exact identifiers or fields the contract requires and compare against them.',
    },
    recall: {
      prompt: 'An email service accepts a training notification request and returns a message ID. What further evidence would support a claim that the intended recipient received it?',
      hint: 'Acceptance by a service and arrival at a destination are different boundaries.',
      answer: 'The acceptance is the post-office receipt: it proves the service took the message, nothing more. For arrival, look at the delivery evidence the service documents for that message ID, a delivery event for the intended address, a bounce, or a pending state, and read it for what it actually says. Delivered to the receiving server is still not the same as sitting in the person\'s mailbox, so keep that uncertainty in your sentence. And if the status is unclear, do not resend; a duplicate notification is a new problem, and it muddies the evidence about the first one.',
    },
    quiz: {
      question: 'J17 has twelve rows but eleven unique identifiers. Which statement matches the contract?',
      options: [
        'The export passes, because the row count matches the selected count.',
        'The job may be completed, but the required record coverage has not passed verification.',
        'The HTTP acceptance must have failed, because the output is wrong.',
      ],
      correctIndex: 1,
      explanation: 'The contract was twelve records each once, and a duplicate plus a missing record breaks it regardless of the row total; that is why you count identities, not just rows. The workflow genuinely did complete, so the honest sentence holds both facts. Blaming the acceptance confuses the receipt with the parcel: the 202 was accurate about what it claimed.',
    },
    takeaway: 'Name the outcome you need in countable terms, then close the task on that evidence, never on the last green acknowledgment.',
    sourceNote: 'HTTP Semantics distinguishes 202 acceptance from completed processing. The job lifecycle and identifier checks are original examples, not a universal API contract.',
  },
  {
    id: 'work-029',
    title: 'Separate rollback from data recovery',
    outcome: 'Explain why putting the old program back does not undo what the new program already wrote, and plan for both separately.',
    scene: 'A training catalogue changes a status field from text to an object before an older reader is restored.',
    sections: [
      {
        title: 'The old reader meets new data',
        paragraphs: [
          'A catalogue application, version 1, stores each item\'s status as a plain word: open. Version 2 ships and stores status as a small object instead, with a code field holding open and some extra metadata beside it. Version 2 runs for a day. Then something goes wrong, and someone says the obvious thing: roll back to version 1.',
          'Rolling back changes which program is running. It does not touch the records version 2 has already written. Those records now hold objects where version 1 expects a word, and version 1 may choke on every one of them. The mistake is a mental model: picturing a rollback as a rewind button that returns the whole world to yesterday. It returns the code to yesterday. The data stays exactly where today left it.',
        ],
      },
      {
        title: 'Identify which state each plan changes',
        paragraphs: [
          'Imagine switching back to an older word processor after the new one has saved your files in its new format. The old program is right there on the disk, ready to run. Your documents are not, because they are now in a format it cannot open. Getting the old program back and getting your documents back are two different jobs, and only the first one is solved by reinstalling.',
          'A rollback returns a deployed change toward an earlier operating state. Data recovery deals with information that was lost, altered, or made incompatible. They need different evidence. A rollback needs a reader known to be compatible with whatever is stored, plus a tested procedure. Recovery needs a trustworthy source for the data, a restoration procedure, and an honest account of its limits, such as everything written after the backup. Notice two traps inside that sentence: a backup taken before the new records existed does not contain them, and a backup existing is not proof it restores correctly.',
        ],
      },
      {
        title: 'Write compatibility as a precondition',
        paragraphs: [
          'For the paper plan: restoring version 1 would restore its reader, not convert status objects back to text. Before considering rollback, the owner must establish how that reader behaves on already-written objects. Any conversion or restoration of data requires its own reviewed plan.',
          'There is a design that avoids this corner, and it is worth naming. Ship a reader first that accepts both the old word and the new object, run it until you trust it, and only then start writing the new format. With that in place, a rollback to the dual-format reader is safe by construction. But safe by construction still means tested, not assumed; a reader that was supposed to accept both formats and quietly does not is the same outage with a nicer story. After each proposed action, list what remains in storage and who is approving any loss or transformation of it.',
        ],
      },
      {
        title: 'Side effects do not know about versions',
        paragraphs: [
          'The lesson reaches beyond database fields. Anything the newer program did to the outside world survives its removal: files it renamed, messages it sent, records it created in another system, caches it populated. Each of those is a persistent effect, and each needs to be listed separately from the code version when a rollback is discussed.',
          'Two cautions. First, restoration from backup is itself destructive to everything written since the backup, so it is not the gentle option it sounds like; it needs an owner willing to approve that loss. Second, this is conceptual planning, not a runbook. The point is to split your diagram into two columns, running code and stored state, and to notice that an arrow in the first column does not move anything in the second.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Changing the reader does not change the record',
        alt: 'Version 2 writes a status object; restoring the older reader leaves that object stored.',
        caption: 'Watch the stored record across the three steps: it changes at step two and then stays changed at step three, while the reader goes back. The reader moved; the data did not. Fictional format change.',
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
        'Draw two columns, running reader and stored status format, and fill in all three stages row by row. Keeping the columns separate on paper is the whole exercise; the confusion comes from merging them in your head.',
        'Circle the stored object in the third row, the one that did not change when version 1 came back. That circle is the thing a rollback cannot reach.',
        'Write the compatibility question an owner must answer before approving rollback, and the evidence that would answer it: version 1 tested against representative records written by version 2. Not started cleanly. Tested on the real shape of data.',
        'Add a separate recovery question: what was written after the most recent backup, and who is authorized to approve losing it? Notice this question has a different owner and different evidence from the rollback question.',
      ],
      notice: 'Your plan treats restoring code and recovering data as two decisions with two kinds of evidence, and nowhere does an arrow in the code column quietly move something in the data column.',
      troubleshooting: 'If your diagram shows stored data snapping back when the old binary is restored, you have drawn the rewind button that does not exist. Split that into two explicit changes and ask what operation performs the second one.',
    },
    recall: {
      prompt: 'A newer tool renamed thousands of uploaded files before its code was reverted. What must the rollback discussion still address?',
      hint: 'Effects outside the running program outlive the program version.',
      answer: 'The renamed files are still renamed. Reverting the tool restored the old code and nothing else, exactly like the old word processor meeting new-format documents. The discussion has to cover whether the older tool can even find files under the new names, whether a reliable mapping from old names to new ones exists and where it lives, and what a separate, approved operation to rename them back or to teach the old tool the new names would look like. Each of those is a data-recovery decision with its own evidence and owner. Treating the code revert as the fix leaves every one of them unaddressed.',
    },
    quiz: {
      question: 'What evidence most directly supports safe compatibility in the rollback plan?',
      options: [
        'The old binary starts correctly when no stored records are present.',
        'A backup exists, although its restoration procedure and contents are unknown.',
        'The proposed rollback reader is tested against representative records written by the newer version.',
      ],
      correctIndex: 2,
      explanation: 'The risk lives at one boundary: the old reader meeting data in the new shape, so only a test at that boundary speaks to it. Starting with an empty store never exercises the boundary at all. An unexamined backup is two unknowns wearing a reassuring label, and even a good one would be a recovery plan, not a compatibility proof.',
    },
    takeaway: 'Keep running code and stored state in separate columns, and require separate evidence before you move either one.',
    sourceNote: 'Launch and critical-state references inform persistence and recovery concerns. This format example is original conceptual planning, not a restoration runbook.',
  },
  {
    id: 'work-030',
    title: 'Rehearse a checklist as a new reader',
    outcome: 'Find the gaps in a procedure by walking a newcomer through it on paper, and move every answer they needed into the document.',
    scene: 'A newcomer rehearses an export checklist that says only choose the correct report and check the result.',
    sections: [
      {
        title: 'The author knows what correct means',
        paragraphs: [
          'A three-line procedure: choose the correct report, export it, check the output. To the person who wrote it, every line is obvious. They know the exercise uses report R3, edition 2, and they know a good export contains records A and B. None of that is on the page. It is in their head, where it has been so long that it feels like part of the document.',
          'Hand the procedure to someone new and watch. If they pick a different report, the checklist has not tested whether they can follow instructions. It has tested whether they can guess what the author was thinking. A rehearsal is how you discover that gap before anyone depends on the document for real work. The newcomer\'s questions are not a sign they are slow. They are the most accurate review the procedure will ever get.',
        ],
      },
      {
        title: 'Test understanding without a live operation',
        paragraphs: [
          'Think of a recipe written by someone who has made the dish a hundred times. Season to taste, cook until done. Give it to a first-time cook and the questions arrive immediately: how much salt, how do I know when it is done? A good recipe writer tests the recipe on a stranger and writes down every question as a missing instruction.',
          'Do the same with a tabletop walkthrough. The reader goes step by step and says aloud, for each one, what the input is, what action they would take, what result they expect, and where they would pause. Nobody performs a real export; the reader works from an invented evidence packet. Record every assumption needed to keep going. Does correct report come with an identifier and an edition? Does check specify the record set, the header row, the encoding? Here is the rule that makes the method honest: if the author answers a question out loud, that answer now belongs in the document. A run that only succeeded because the author was coaching from the next chair proves the author is helpful. It proves nothing about the written procedure.',
        ],
      },
      {
        title: 'Revise, version, and rehearse the changed step',
        paragraphs: [
          'Rewrite with the questions answered. Use synthetic report R3, edition 2. Expected data records are A and B, each once. Compare the exported identifiers with that set; exclude the header from the count. If the edition differs, pause and ask the document owner for the matching fixture.',
          'Then do the housekeeping that keeps the fix from decaying. Record which version of the checklist was rehearsed and with which packet, so later readers know what was tested. Name the role that owns the document, the person who updates it when the report schema or the selection screen changes, because a procedure with no owner is correct only until the first change nobody tells it about. And rehearse the corrected step again. A new sentence can carry a new ambiguity, and the only way to find it is another stranger.',
        ],
      },
      {
        title: 'What a successful rehearsal does not prove',
        paragraphs: [
          'A clean walkthrough tells you the written words are enough for a reader with this packet on this day. It does not validate the live system, the real export path, or the production fixtures, because none of those were touched. Keep that boundary clear in your notes, or the tabletop success will be quoted later as if a real export had been tested.',
          'Two mistakes undo the exercise. The first is choosing an experienced colleague as the reader; they fill the gaps from their own knowledge and the procedure looks finished when it is not. The second is treating the hints as something the reader should memorize rather than something the document should contain. If a step can only be explained aloud, the explanation is missing content, and the fix is a sentence on the page, not a better memory in the reader.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A question becomes a missing prerequisite',
        alt: 'A newcomer asks for the report identity and expected output; the author supplies missing prerequisites.',
        caption: 'Read each of the author\'s replies as a sentence that must now be added to the document. Two questions, two missing prerequisites. The answers were in the author\'s head, not on the page. Fictional rehearsal.',
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
        'Copy the original three lines and underline correct and check. Each underlined word is a place where the author\'s private knowledge is standing in for an instruction.',
        'Using the R3 packet facts, list what a newcomer would need to proceed: the report identifier and edition, the expected record set, how to treat the header. This is the author\'s head, written down.',
        'Rewrite the steps with those facts in them, and add the pause rule for an edition mismatch. Do not perform an export; the exercise is about the words, not the system.',
        'Label the revised checklist with a version, name the owner role that maintains it, and write one schema change that would trigger another rehearsal. These three lines are what stop the fix from quietly going stale.',
      ],
      notice: 'A reader with no access to the author can now say which report to select and what output proves success. Nothing in the procedure depends on a hint delivered out loud.',
      troubleshooting: 'If you find yourself able to explain a step only by talking, that is the signal: the condition you just spoke is missing from the written procedure. Add it, or add a reference to where it lives.',
    },
    recall: {
      prompt: 'A setup guide works perfectly for its author but never mentions that a particular account role is required. What should a newcomer rehearsal change?',
      hint: 'A prerequisite is part of the procedure even when the author already has it.',
      answer: 'The author has the role, so the gap is invisible to them and the guide passes every time they try it. The rehearsal reader, who lacks it, fails at the first restricted step, and that failure is the finding. The fix goes into the document: the required role stated up front, the authorized way to check whether you hold it, and the approved request path if you do not. Then rehearse again with someone who does not already have the author\'s access, because that assumption is exactly what hid the prerequisite in the first place.',
    },
    quiz: {
      question: 'A reader completes the rehearsal, but only after several verbal hints from the author. What does that show?',
      options: [
        'The document still depends on knowledge that is not in its written instructions.',
        'The procedure is validated, because the final output was correct.',
        'The reader should memorize the hints rather than change the document.',
      ],
      correctIndex: 0,
      explanation: 'Each hint was a sentence the reader needed and the page did not have; the correct final output was produced by the author\'s coaching, not the document. Calling that validated confuses a helpful author with a complete procedure. Asking the reader to memorize the hints puts the fix in the wrong place: the next reader will need them too, and the author may not be in the room.',
    },
    takeaway: 'Give the procedure to a stranger, write down every question as a missing sentence, name an owner, and rehearse the fix again.',
    sourceNote: 'Incident and launch references inform rehearsal. This original paper walkthrough does not validate a live runbook.',
  },
  {
    id: 'work-031',
    title: 'Give the reviewer a path through the change',
    outcome: 'Write a review description that tells the reader what the change does for users, where to start reading, what the tests prove, and which questions need a specialist.',
    scene: 'A search-result highlight change needs a review path through matching, rendering, and accessibility.',
    sections: [
      {
        title: 'The diff does not explain its own purpose',
        paragraphs: [
          'A catalogue search finds the right titles but gives no hint why. Search for art and you get Cartography in the results, with nothing to show that the letters a-r-t inside it are the reason. You add highlighting: the matched letters now stand out inside the title. Then you open the review with a one-line description: added highlight spans.',
          'That line is true and tells the reviewer what you typed, not what a user now sees. They open the diff, land on the first changed file, and start reverse-engineering your intent from the code. Halfway through they discover the patch also touches a search rule, and now they are not sure whether that was on purpose. Start instead with the mismatch the change fixes, in user terms, and then say where the logic lives. The reviewer should never have to infer the goal from the first modified line.',
        ],
      },
      {
        title: 'Connect reading order to questions',
        paragraphs: [
          'A good museum guide does not hand you a floor plan and say the paintings are on the walls. They say: start in the east room, notice the light in the third painting, then go upstairs and compare it with the one by the window. A review path is that kind of guidance. It is a suggested order that makes the behavior understandable. It is not an instruction to approve certain lines and skip the rest.',
          'For the highlight change, the path has three stops. First, how the matcher finds the character range inside a title. Second, how rendering marks that range while leaving the original text intact. Third, the tests: a normal match, an empty query, and a title containing punctuation. Keep unrelated formatting changes out of this patch; they bury the behavior under noise. And when a concern needs a specialist, accessibility here, say so plainly rather than implying your own tests cover every angle. Naming the limit of your evidence is part of the orientation.',
        ],
      },
      {
        title: 'Write an orientation the reviewer can use',
        paragraphs: [
          'Put it together. Purpose: show which title text matched without changing which results are returned. Start with match-range calculation, then title rendering, then the fixture tests. Query art should highlight art inside Cartography; an empty query should leave the title unmarked. Punctuation stays literal text. Please check whether the new markup preserves the accessible name. Keyboard navigation is unchanged by design but still needs its regression check.',
          'Read what that paragraph gives the reviewer before they open a single file: the user-visible goal, the one thing that must not change, a reading order, two concrete expected outputs instead of tests pass, a specialist question, and an honest note about what was and was not touched. If the first version has real limits, say only one match range is highlighted, write that down too. A limit you name is a design decision. A limit the reviewer discovers is a defect.',
        ],
      },
      {
        title: 'Orientation is not steering',
        paragraphs: [
          'There is a line between guiding a reviewer and steering them. Please look at these three lines, the rest is boilerplate asks the reviewer to adopt your risk assessment, and the parts you consider boring are precisely where you were paying least attention. A path says where to start and what to look for. It leaves the reviewer free to wander off it and should make wandering easier, not harder.',
          'Two habits to drop. The file list masquerading as a description: it says what changed and nothing about why or what to check. And the generic evidence claim: tests added, all green. Replace it with the inputs and outputs the tests actually assert, so the reviewer can judge whether those tests could catch the thing you were worried about. The description is the first thing reviewed, and it sets the quality of everything after it.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Read the highlight change by behavior',
        alt: 'Follow art matching Cartography through rendering, fixture tests, and the accessible-name check.',
        caption: 'Follow the boxes left to right as a reading order: each stop is a behavior to understand, not a file to open. The last box is a question handed to a specialist, with the author saying plainly that their own tests do not answer it. Fictional path.',
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
        'Write two sentences: what the highlight change does for a user, and which search behavior must stay exactly as it was. The second sentence is the one authors forget and reviewers most need.',
        'Lay out a reading order through matcher, renderer, and tests, and at each boundary write the question a reviewer should be asking there. If you cannot think of a question for a stop, it may not deserve to be a stop.',
        'Replace any tests pass phrasing with the actual expected outputs: art highlighted in Cartography, empty query leaves the title unmarked. Concrete outputs let the reviewer judge whether the tests could fail.',
        'Add a specialist request for accessibility and one honest limitation of this first version. Writing the limitation yourself turns it from a discovered defect into a stated decision.',
      ],
      notice: 'A reviewer can read your description and know the purpose, the reading order, and the evidence before opening a file. Nothing in it asks them to trust your judgement about which parts matter.',
      troubleshooting: 'If your description is a list of files, add for each one the behavior or risk a reviewer should assess there. If you cannot name one for a file, ask whether that file belongs in this change.',
    },
    recall: {
      prompt: 'A configuration change moves validation to happen before saving instead of after. What reading path would orient a reviewer?',
      hint: 'Follow the new order of operations, and name the state that must be untouched when input is rejected.',
      answer: 'Start with the acceptance rule, what counts as valid, so the reviewer knows what the validator is enforcing. Then the validation step itself. Then the save boundary, with the key question stated outright: when input is rejected, does any state get written? Point to the test that feeds an invalid input and asserts nothing was saved; that is the behavior the whole change exists to guarantee. Finish by naming anything the path does not cover, such as consumers that relied on the old order or a specialist concern. A short diff is not evidence of a small change; here it moves a boundary that other code may depend on.',
    },
    quiz: {
      question: 'Which review description best supports assessment of a changed behavior?',
      options: [
        'A complete list of modified symbols, without expected outputs.',
        'Purpose, a behavioral reading path, the relevant tests with their expected outputs, and known limits.',
        'A request to inspect only the lines the author believes are risky.',
      ],
      correctIndex: 1,
      explanation: 'The second description gives the reviewer the museum guide: where to start, what to notice, and what the evidence actually asserts, while leaving them free to look anywhere. A symbol list describes typing, not behavior, and offers nothing to check against. Steering the reviewer to the author\'s risk guesses hides exactly the places the author was not worried about, which is where surprises live.',
    },
    takeaway: 'Lead with the user-visible purpose, give a reading order with a question at each stop, show real expected outputs, and name the questions you cannot answer yourself.',
    sourceNote: 'The reviewed code-review guidance covers design, context, tests, and qualified reviewers. This highlight scenario and reading path are original illustrations.',
  },
  {
    id: 'work-032',
    title: 'Review the invariant around the diff',
    outcome: 'Find the promise a function makes before and after the changed lines, and check that every way out of the function still keeps it.',
    scene: 'A new file-type rejection returns before a preview screen clears its busy state.',
    sections: [
      {
        title: 'A reasonable return can leave the screen stuck',
        paragraphs: [
          'A preview function works like this. When the user picks a file, it sets a flag called busy to true, which disables the controls so nobody clicks twice. It processes the file. At the end it sets busy back to false, and the controls come alive again. Simple, and it has worked for a year.',
          'A patch arrives that adds a sensible check near the top: if the file type is unsupported, return early with an error. In the diff, the new lines look fine. They are fine, in isolation. But the return happens after busy went true and before the line that puts it back. Pick an unsupported file and the screen locks up: error shown, every control greyed out, no way to try again. The reviewer who read only the green lines approved a correct condition and missed a broken promise that starts above the diff and is kept below it.',
        ],
      },
      {
        title: 'Name the preserved condition',
        paragraphs: [
          'Think of a library rule: every borrowed book is returned. Not every book is on the shelf at all times; being out on loan is a legitimate state. The rule is about what must be true when a loan ends. Software has rules of that shape, and the word for them is invariant: a condition that must hold at a particular boundary, no matter which route the code took to get there.',
          'Getting the boundary right is most of the work. Busy is always false is wrong, because busy is legitimately true while processing. The real rule is: after any completed preview attempt, whether it succeeded, failed to parse, or was rejected, busy is false. State it that precisely, and then trace every exit the patch introduces or affects. Success, parse failure, and the new validation rejection all end an attempt. Each one is a borrower leaving the library, and each one owes the book back. Callers elsewhere may depend on that return even though their lines are nowhere in the diff.',
        ],
      },
      {
        title: 'Review the paths, not a preferred coding style',
        paragraphs: [
          'The comment names the rule, the path, and the consequence. On unsupported input, this return exits after busy becomes true but before it is cleared. That violates the end-of-attempt rule and leaves Retry unavailable. Please preserve cleanup on this path and add a rejection-state test.',
          'Notice what the comment does not say. It does not say early returns are bad. They are not; the problem is a missing state transition, and an early return that cleared busy first would be perfectly fine. The author might answer with a shared cleanup block that runs on every exit, which is often a good idea, but its behavior still needs checking across success and both error paths. A structure that promises cleanup is not the same as cleanup that has been observed. Read enough of the surrounding function to find where the obligation starts and where it is supposed to end.',
        ],
      },
      {
        title: 'Where to look for hidden promises',
        paragraphs: [
          'Invariants hide in pairs: a lock acquired and released, a counter incremented and decremented, a transaction opened and committed, a flag set and cleared, a resource allocated and freed. Whenever a diff sits between the two halves of a pair, every new exit is a suspect. The question for each one is simple: did the second half still run?',
          'Two mistakes to avoid. One is writing the invariant too strictly, forbidding a legitimate middle state, and then flagging correct code; if your rule forbids something the function must do, you have the boundary wrong, not the code. The other is reviewing the diff as a self-contained story. It never is. The green lines are a few sentences cut from the middle of a paragraph, and the promise they might break is written in the sentences around them.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two exits from one preview attempt',
        alt: 'The successful path clears busy to false; the new unsupported-input return leaves busy true and retry controls disabled.',
        caption: 'Read each row to its last word: the first ends with busy false and a usable screen, the second ends with busy true and a locked one. Same starting state, one missing transition. The rule applies when the attempt ends, not during processing. Fictional transitions.',
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
        'Write the invariant as one sentence that names its boundary: after any completed attempt, busy is false. Check it does not forbid busy being true during processing; if it does, the boundary is wrong.',
        'Trace the success path and the new early-rejection path step by step, writing the value of busy beside each step. The defect appears as a row that ends on true.',
        'Add a third path, parsing failure, and mark where you would need to see cleanup evidence rather than assuming it exists. An error path nobody traced is the one that breaks.',
        'Draft the review comment: the rule violated, the user-visible consequence, Retry unavailable, and the regression assertion you want added. Reread it to make sure it criticizes the missing transition, not the author\'s choice of early return.',
      ],
      notice: 'You have explained the defect as a promise broken on one specific path, with a test that would catch it, and nowhere have you argued about coding style.',
      troubleshooting: 'If your invariant flags the normal processing state as a violation, you have written busy is always false. Add the boundary: at entry, at exit, or at the end of a transaction, and re-trace.',
    },
    recall: {
      prompt: 'A retried operation can award the same completion credit twice. What invariant should the review follow beyond the one changed line?',
      hint: 'Follow the identity of the operation and its side effect across retries, not just the happy-path call.',
      answer: 'The promise is: one operation awards credit at most once, regardless of how many times it is attempted. That is a library rule about the end state, so the review has to trace every route to the side effect: the first attempt, a retry after a timeout, two attempts racing each other. At each one, ask where the operation\'s identity is checked and whether that check happens before the credit is written. An increment that is correct on its own line proves nothing about uniqueness; the surrounding workflow is what enforces the promise, and the surrounding workflow is what the diff does not show you.',
    },
    quiz: {
      question: 'Which rule correctly describes the preview invariant?',
      options: [
        'Clear busy only after successful parsing, because rejected inputs did not produce a preview.',
        'Require a single return statement instead of checking the state at every completed path.',
        'Every finished attempt, including rejection, must leave busy false.',
      ],
      correctIndex: 2,
      explanation: 'The rule is about the state at the end of any attempt, which is exactly what the rejected-file user cares about: they want to try again. Clearing only after success writes the defect into the rule. Mandating one return confuses a coding style with the promise; a single exit can still forget cleanup, and multiple exits can each remember it.',
    },
    takeaway: 'Find the promise written around the diff, trace every exit against it, and criticize the missing transition rather than the style.',
    sourceNote: 'The reviewed code-review guidance emphasizes context, edge cases, and concurrency. This busy-state example is original and illustrates one bounded invariant.',
  },
  {
    id: 'work-033',
    title: 'Ask whether the regression test can fail',
    outcome: 'Look at a test and work out whether it would actually go red if the bug it guards against came back.',
    scene: 'A packing calculator returns seven instead of ten while its no-exception test still passes.',
    sections: [
      {
        title: 'Running the code is not checking its answer',
        paragraphs: [
          'A packing calculator takes a number of packs and a number of items per pack. Two packs of five should give ten items. A defect slipped in: somewhere the code adds instead of multiplies, so two packs of five returns seven. The fix arrives with a new regression test. The test calls the calculator with two and five and asserts that no exception is thrown.',
          'Run that test against the broken code: it passes, because adding two and five throws nothing. Run it against the fixed code: it passes, because multiplying throws nothing either. The test is green in both worlds, which means it cannot tell them apart, which means it is not guarding anything. Code that runs has demonstrated that a path can finish. A regression test has to look at the property that was wrong, the number that came out, and refuse to accept the wrong one.',
        ],
      },
      {
        title: 'Compare the broken and intended outputs',
        paragraphs: [
          'A smoke alarm that beeps when you press the test button has proved it has a battery. It has not proved it detects smoke. The only way to know that is to ask: if there were smoke, would this go off? Tests deserve the same question, asked in the past tense: if the old defect were still here, which line of this test would fail?',
          'Line the candidates up against both outputs. Returns a number: seven passes, ten passes. Returns a positive result: seven passes, ten passes. Returns ten for two packs of five: seven fails, ten passes. Only the last one changes its verdict, so only the last one is a regression test. The expected value, ten, has to come from the agreed behavior, multiply packs by items, never from running the code and copying whatever it printed. And look at the setup as hard as the assertion. If a mock has replaced the calculator and always returns ten, the test is checking the mock. Mocking a slow or external dependency is sensible; mocking the very behavior under test deletes the evidence you came for.',
        ],
      },
      {
        title: 'Request a test with a discriminating assertion',
        paragraphs: [
          'The review comment is short because the two outputs make the argument for you. This test passes for both the old result 7 and the required result 10. Please assert the item total for the two-pack, five-item fixture, and keep the real calculation in the tested path.',
          'If you want more confidence, there is a direct check available in an isolated environment: temporarily reintroduce the defect, run the new test, and watch it fail. Then restore the fix and watch it pass. A test that has been seen red for the right reason is worth more than one that has only ever been green. You do not need to break shared code to make the point in review, though; the seven and the ten already show the gap on paper.',
        ],
      },
      {
        title: 'Tests that cannot lose',
        paragraphs: [
          'The weak patterns repeat across codebases. Asserting that a call does not throw. Asserting that a result is not null. Asserting that a mock was called, when the mock is standing in for the thing being tested. Asserting against an expected value that was generated by running the code, so the test enshrines whatever the code happens to do. Each of these produces a green tick and a feeling of coverage, and each would stay green while the bug walked straight back in.',
          'The counter-habit is one question, asked every time you read a test in a review: what change to the code would make this fail? If the honest answer is almost nothing, the test is a smoke alarm with a battery and no sensor. If you can name the specific wrong output it rejects, it is doing its job.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Which assertion distinguishes 7 from 10?',
        alt: 'No-exception accepts both outputs; equals-ten rejects the broken seven and accepts the corrected ten.',
        caption: 'Look for the row where the two verdicts differ. The top row says pass, pass: it cannot see the bug. The bottom row says fail, pass: that is a regression test. The contract is 2 packs x 5 items = 10; the broken addition gives 7.',
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
        'Write the input, two packs of five, and two columns beneath it: broken result 7, required result 10. Every assertion you consider will be judged against both columns at once.',
        'Evaluate three candidate assertions against both columns: no exception, positive number, equals 10. Write pass or fail in each cell. The table does the thinking.',
        'Circle the one assertion whose verdict differs between the columns, and write where its expected value came from: the contract, multiply packs by items, not from running the code.',
        'Add a review note warning that replacing the calculator with a mock that returns 10 would make the assertion pass without testing the calculation. Say what the mock would actually be testing: itself.',
      ],
      notice: 'You can point at the exact line that would go red if the defect returned, and explain why the other candidates would stay green while the bug walked back in.',
      troubleshooting: 'If every assertion you wrote passes in both columns, you are asserting about the journey rather than the destination. Test the returned value or the side effect that the bug report actually complained about.',
    },
    recall: {
      prompt: 'An invalid form submission is supposed to leave stored data untouched, but its test only checks that an error message appears. What assertion is missing?',
      hint: 'The message and the state change are two separate observable outcomes.',
      answer: 'Ask the question: what broken implementation would this test still pass? One that shows the error message and saves the invalid data anyway. The test is green for it, because it only ever looked at the message. The missing assertion is about state: after the invalid submission, the stored record is unchanged, or no write occurred at all. Keep the message assertion too; the behavior has two halves, and a test that checks one half is a smoke alarm that only detects one kind of smoke.',
    },
    quiz: {
      question: 'Which check best tests the packing regression itself?',
      options: [
        'Run the real calculation for two packs of five and assert exactly ten items.',
        'Replace the calculation with a mock returning ten and assert that value.',
        'Run the real calculation and assert a positive numeric result.',
      ],
      correctIndex: 0,
      explanation: 'Only the first option both exercises the real multiplication and would fail if the code still added: seven is not ten. The mock passes without the calculator being involved, so it tests the mock. A positive-number assertion is the smoke alarm with no sensor: seven is positive, and the bug sails through.',
    },
    takeaway: 'For every test, ask which wrong output it would reject. If the answer is none, it is not a regression test yet.',
    sourceNote: 'The reviewed code-review guidance explicitly asks whether tests fail for broken code. The packing fixture is original, with hypothetical inputs and outputs.',
  },
  {
    id: 'work-034',
    title: 'Separate blocking feedback from preferences',
    outcome: 'Label each review comment by what it asks for, and back every must-fix with the input that breaks or the rule that applies.',
    scene: 'A reviewer distinguishes a null-owner crash from an optional variable-name suggestion.',
    sections: [
      {
        title: 'Two comments should not sound equally mandatory',
        paragraphs: [
          'You are reviewing a patch to an assignment table. The data contract allows a task to have no owner; the owner field is null when nobody has picked it up yet. The patch reads owner.name without checking for that, so an unassigned task crashes the row before it renders. While reading, you also notice the author called a variable rawSummary, and you would have called it summaryText.',
          'You write two comments. Both say please change this. From the author\'s side, they look identical: two requests, equal weight, no way to tell which one stands between the patch and approval. Yet one is a crash on a permitted input, and the other is a taste you hold about naming that no style rule in the project supports. Delivering them in the same voice does not make you thorough. It makes the author guess, and when authors guess they either ignore the crash or spend an hour on the name.',
        ],
      },
      {
        title: 'Give the request its force and reason',
        paragraphs: [
          'A doctor\'s note after a check-up separates things clearly: this needs treatment now, this we should monitor and discuss, this is a suggestion for your general health. The patient knows exactly what to act on. Review comments benefit from the same three bins: a required correction, a question whose answer you need, or an optional suggestion.',
          'Each bin carries an obligation on you as well. A required correction has to connect a concrete input to a consequence, or cite the rule that applies. A question has to say whether approval waits on its answer. An optional suggestion has to be labeled optional, out loud, so nobody mistakes it for a condition. This discipline also keeps the comment about the code rather than the person. This path dereferences a permitted null value is a sentence somebody can test. You were careless is not; it contains no input, no behavior, and no way to be wrong.',
        ],
      },
      {
        title: 'Write comments with different obligations',
        paragraphs: [
          'The blocking one: owner can be null under this contract. Reading owner.name then fails before the row renders. Please display Unassigned for that case and add its test. The optional one, posted separately: optional naming suggestion. summaryText would make the string type clearer than rawSummary; the current name does not violate our agreed style.',
          'Read the two side by side. The first names an input, a consequence, an expected behavior, and a test. The second names a reason and explicitly concedes that the current name is allowed. And if you were not actually sure whether null is permitted, the honest version of the first comment is a question: does the contract allow a null owner here? If so, this line will fail. Ask for the contract evidence rather than presenting a crash you have not confirmed as established fact.',
        ],
      },
      {
        title: 'Labels are not a volume knob',
        paragraphs: [
          'Two ways this goes wrong. The first is inflation: marking a preference as blocking because you feel strongly about it. That teaches authors that blocking means the reviewer is annoyed, and the label stops carrying information when it matters. The second is deflation: softening a real concern, a security hole or a data-loss path, to optional because raising it firmly feels confrontational. Optional is a statement about consequence, not about tone, and a serious defect labeled optional is a lie told politely.',
          'When you are unsure which bin a comment belongs in, that uncertainty is itself the content. Say what you observed, say what you have not verified, and ask. A reviewer who can tell the difference between I know this breaks and I suspect this might is far more useful than one who delivers everything at the same confident pitch.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Required fix, optional suggestion',
        alt: 'Null-owner handling is required; the separate variable-name suggestion is explicitly optional.',
        caption: 'Compare the first and third reviewer lines: both are courteous, and only one names an input and a consequence. The label carries the obligation; the politeness is the same in both. Watch the author sequence their work from the labels alone. Fictional exchange.',
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
        'Write the required comment for the null-owner case with all four parts: the permitted input, null owner; the consequence, row fails to render; the expected behavior, show Unassigned; and the test to add. A blocking comment missing any of these is an opinion with a label on it.',
        'Write the optional naming suggestion, give it a concrete readability reason, and include the sentence that concedes the current name breaks no rule. That concession is what makes optional honest.',
        'Write a third comment as a question about a contract you have not confirmed, and state plainly whether approval depends on the answer. Practice saying I have not verified this without softening the concern.',
      ],
      notice: 'An author reading your three comments can sort them without asking you: one thing to fix, one thing to answer, one thing to consider. Nothing depends on reading your mood.',
      troubleshooting: 'If every comment you wrote sounds blocking, go back to each one and ask: what input breaks, or what rule applies? Where you cannot answer, relabel it as a question or an optional suggestion. The label should follow the evidence, not the strength of your feeling.',
    },
    recall: {
      prompt: 'You suspect a loop in the patch might be slow, but you have no workload numbers and no timing evidence. How should you frame the comment?',
      hint: 'An unverified concern can justify a bounded question without becoming an invented performance defect.',
      answer: 'It goes in the question bin, with its reasoning exposed. Something like: this loop runs once per item per request; what input sizes do we expect here, and has anything been measured? If there is a documented performance budget this path must meet, say that approval waits on evidence against it. What you must not do is write a blocking comment asserting a slowdown you have not observed, or demand a rewrite because you would have written it differently. A suspicion is a legitimate thing to raise. It is not a legitimate thing to disguise as a measured fact.',
    },
    quiz: {
      question: 'A naming preference appears nowhere in the style guide and changes no behavior. How should it be presented?',
      options: [
        'As a blocking requirement, so the author understands you value consistency.',
        'As an unlabeled question whose answer determines approval, without explanation.',
        'As an optional suggestion with a concrete readability reason.',
      ],
      correctIndex: 2,
      explanation: 'No input breaks and no rule applies, so the comment has no claim to block; labeling it optional with a reason gives the author something useful and keeps the blocking label meaningful for the crash. Inflating it to blocking spends your credibility on taste. An unlabeled question that secretly gates approval is the worst of both: the author cannot tell it matters and cannot tell why.',
    },
    takeaway: 'Sort every comment into fix, answer, or consider, back each fix with an input or a rule, and never use the label to turn your volume up or down.',
    sourceNote: 'The reviewed review guide distinguishes style requirements from optional preferences. The comment examples are original; local contracts still determine required behavior.',
  },
  {
    id: 'work-035',
    title: 'Resolve review disagreements with a concrete case',
    outcome: 'When two reviewers argue in adjectives, build one input where their preferences produce different outputs, then settle it against the written contract or the person who owns it.',
    scene: 'Two reviewers disagree about alphabetical versus arrival order for equally prioritized queue items.',
    sections: [
      {
        title: 'Cleaner can hide a behavior change',
        paragraphs: [
          'A work queue sorts tasks by priority. The patch under review changes what happens when two tasks have the same priority. One reviewer wants them alphabetical, because the list looks cleaner. The other wants them in the order they arrived, because that is more intuitive. Three rounds of comments later, both have said cleaner and intuitive several more times, and the patch has not moved.',
          'The argument is stuck because it is about adjectives, and adjectives cannot be tested. Build an input instead. Zed arrives at 09:00. Ada arrives at 09:05. Both have priority 2. Alphabetical puts Ada first. Arrival order puts Zed first. Now the disagreement is about a result: does this queue return Ada, Zed or Zed, Ada? That is a question with an answer, and nobody has to win an argument about taste to find it.',
        ],
      },
      {
        title: 'Compare the case with the contract',
        paragraphs: [
          'Two people arguing about whether a word is spelled correctly can argue forever, or one of them can open the dictionary. The dictionary does not care who argued more persuasively. A system\'s contract plays that role: the agreed statement of what the system owes the people who use it. In this exercise the queue contract says equal priorities preserve insertion order. Zed before Ada, regardless of which display looks tidier.',
          'Be careful about what counts as the dictionary. The existing code is context, not authority; it may itself contain the defect you are arguing about, and if the current implementation happened to sort alphabetically, that would not make alphabetical correct. Look to the written requirement and to what the consumers of the queue actually depend on. When those sources are silent or contradict each other, the concrete case has done its job by exposing the gap, and the next step is to find the design owner who can decide. An example sharpens a choice. It cannot invent a requirement, and it cannot stand in for the person authorized to make one.',
        ],
      },
      {
        title: 'Leave the resolved case in the review',
        paragraphs: [
          'Write the resolution where the argument happened. For equal-priority entries Zed at 09:00 and Ada at 09:05, alphabetical order reverses arrival order. Our contract preserves insertion order, so this change should return Zed, then Ada. Please add that fixture as a tie-case test.',
          'If the owner instead decides to change the contract, record that too, with the consumer impact and the new expectation. Do not quietly rewrite history so that the old rule always meant alphabetical. A hallway conversation is a fine way to resolve the confusion, and its conclusion still belongs back in the review thread, with the reasoning. Six months from now someone will read this thread. They need the behavior decision and the case that settled it, not a grey resolved marker and the name of whoever commented last.',
        ],
      },
      {
        title: 'Choosing an input that actually separates',
        paragraphs: [
          'The counterexample has to be built with care. Two entries with different priorities never reach the tie-break, so they tell you nothing about it. Two equal-priority entries that happened to arrive alphabetically, Ada at 09:00 and Zed at 09:05, produce the same output under both rules, so they look like agreement while settling nothing. You need the pair where the rules disagree: equal priority, with arrival order the reverse of alphabetical.',
          'That principle travels. Whenever a review turns into repeated adjectives, stop and ask: what single input would these two positions handle differently? If you cannot construct one, the positions may not differ in behavior at all, and the argument is about style, which has its own lesson. If you can, write it down, run it against the contract, and let the dictionary decide.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The equal-priority counterexample',
        alt: 'For Zed arriving before Ada at the same priority, alphabetical sorting returns Ada first while the insertion-order contract returns Zed first.',
        caption: 'Check the two outputs first: they differ, which is what makes this input useful. Then notice why: priority is held equal so only the tie-break is doing any work, and arrival order is the reverse of alphabetical so the two rules cannot agree. Fictional entries.',
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
        'Write both queue entries with their equal priority and their different arrival times: Zed at 09:00, Ada at 09:05, both priority 2. Check that priority really is equal; if it is not, the tie-break never runs and your example proves nothing.',
        'Write the output under alphabetical sorting and under insertion-order sorting. If the two outputs are the same, you have picked the wrong pair; swap the arrival order and try again.',
        'Resolve the case against the supplied contract, equal priorities preserve insertion order, and write the regression expectation and the one-sentence reason a future reader will need.',
        'Add a sentence naming the decision owner you would go to if the contract said nothing about ties. Knowing who decides is part of the resolution, not an afterthought.',
      ],
      notice: 'The review thread now holds a checkable input, two predicted outputs, and a decision tied to a written rule. The adjectives are gone and nothing was settled by persistence.',
      troubleshooting: 'If both interpretations give the same output for your input, you have not built a counterexample yet. Change the input until the rules disagree, and only then start comparing against the contract.',
    },
    recall: {
      prompt: 'Reviewers disagree about whether a missing measurement should display as zero or as Unknown. What case would expose the real choice?',
      hint: 'Zero is a measured value; a missing reading is a different state unless the contract says otherwise.',
      answer: 'Build two records side by side: one where the sensor genuinely reported zero, and one where no reading was recorded at all. Write the display under each interpretation. The show-zero rule renders both as 0, which means a reader can no longer tell a real zero from a gap in the data; the Unknown rule keeps them distinct. Now the argument is about a visible consequence rather than about which looks cleaner. Take that pair to the display contract and to whoever consumes the numbers downstream. If neither settles it, it goes to the owner as a decision, not to the reviewer with the strongest styling opinion.',
    },
    quiz: {
      question: 'Which fixture best distinguishes alphabetical from insertion-order tie-breaking?',
      options: [
        'Entries with different priorities, where neither tie-breaker is used.',
        'Equal-priority entries whose arrival order is the reverse of their alphabetical order.',
        'Equal-priority entries that already arrived in alphabetical order.',
      ],
      correctIndex: 1,
      explanation: 'Only the reverse-order pair makes the two rules produce different outputs, which is the entire point of a counterexample. Different priorities never reach the tie-break at all. Entries arriving already alphabetical give identical results under both rules, so the test would pass whichever behavior was implemented and would look like agreement while proving nothing.',
    },
    takeaway: 'Replace the adjectives with one input the two positions handle differently, then let the written contract or its owner decide, and leave the case in the thread.',
    sourceNote: 'Review and simplicity references inform contract-focused design discussion. The queue rule and dispute are original examples, not a universal sorting convention.',
  },
  {
    id: 'work-036',
    title: 'Build a timeline without hindsight',
    outcome: 'Keep three clocks apart when reconstructing an incident: when something happened, when anyone could see it, and when anyone understood it.',
    scene: 'Buffered worker logs reveal an earlier failure only after a responder has already chosen a first investigation step.',
    sections: [
      {
        title: 'The timestamp was not yet available',
        paragraphs: [
          'A training incident, all times UTC. A background worker rejects a job at 09:04 and writes that to its local log. The log is buffered, so nobody can read it until it is pulled at 09:12. Meanwhile an alert fires at 09:08 saying work is failing, and at 09:10 the responder starts by checking queue progress, which is the obvious first move given an alert that says only that.',
          'The review afterwards contains one sentence: the responder ignored the 09:04 rejection. Read that sentence carefully, because it is the whole lesson. At 09:10 the 09:04 rejection existed in a buffer on a machine nobody had looked at. It was a fact about the world. It was not yet evidence anyone could inspect. The sentence takes something learned at 09:12 and plants it in the responder\'s head at 09:10, then blames them for not acting on it.',
        ],
      },
      {
        title: 'Keep event, observation, and interpretation apart',
        paragraphs: [
          'Light from a distant star left it thousands of years ago. The event happened then; you observe it tonight. Nobody says you ignored the star for a thousand years. Incidents work the same way at smaller scale: there is the moment something happened, the moment its evidence reached a person, and the moment someone understood what it meant. These are three different times, and a timeline that collapses them will always make the people in it look slower than they were.',
          'So each entry gets four fields: the event time, the time its evidence became available, the source it came from, and what was understood at that point. At 09:12 the retrieved log establishes that a rejection occurred; it does not explain why. At 09:18 a synthetic reproduction links a malformed template to the symptom, which is the first moment anyone has a candidate cause. Real records add their own complications: time zones, clock drift between machines, collection delays. When timing cannot support an exact order, write that down rather than arranging the entries into a tidier story. And remember what a timeline is: evidence about sequence. The event just before a failure is a suspect, not a convict.',
        ],
      },
      {
        title: 'Write the decision using its actual context',
        paragraphs: [
          'The corrected entry reads: 09:10 UTC: responder inspected queue progress using the 09:08 alert; worker rejection logs were not available until 09:12. At 09:18, a synthetic template reproduction supplied a candidate cause.',
          'That version makes the 09:10 decision understandable without declaring it the best possible decision; those are separate judgements. It also leaves room for the questions that actually improve things. Why was the log buffered for eight minutes? Could the alert have carried the rejection detail? Those are observability questions about the system, and they are worth asking. They are a different activity from blaming a person for not knowing what the system had not yet told them. Put the evidence source beside every entry, and mark any time that was inferred rather than recorded.',
        ],
      },
      {
        title: 'Why hindsight creeps in',
        paragraphs: [
          'Nobody sets out to write an unfair timeline. It happens because the writer knows the ending. Once you know the template was malformed, every earlier moment looks like a missed chance to notice it, and the 09:04 timestamp sitting in the log looks like a clue that was in plain sight. It was in plain sight at 09:12. The reviewer\'s knowledge leaks backward into the record unless the record is built to stop it.',
          'The known-at column is the stopper. Two further cautions: do not let an interpretation appear before the evidence that supports it, and do not treat a tight sequence as proof of cause. If a known-at time is earlier than the time the evidence was actually retrievable, something has been moved, and it is usually the ending leaking back into the middle.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'What was known at each point',
        alt: 'The 09:04 rejection becomes known at 09:12, after the 09:10 decision based on the 09:08 alert.',
        caption: 'Find the 09:04 event, then find where it first becomes visible to a person: 09:12, two entries after the decision it supposedly should have informed. That gap is the whole argument against the word ignored. Hypothetical synchronized UTC times; spacing not proportional.',
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
        'Draw two columns, event time and known-at time, and place the rejection with 09:04 in the first and 09:12 in the second. The eight-minute gap between the columns is what the one-column version of this timeline erases.',
        'Add the alert, the queue-inspection decision, and the 09:18 reproduction, each with its evidence source written beside it. A source for every row is what lets a reader check your known-at times.',
        'Rewrite ignored the 09:04 rejection using only what was on the responder\'s screen at 09:10. If your rewritten sentence mentions the rejection at all, you have let the ending leak back in.',
        'Write one observability question, about log buffering or alert detail, phrased so it does not assume the 09:18 explanation was already available earlier. Improving the system and blaming the person are different sentences.',
      ],
      notice: 'Every decision on your page is described with the evidence that existed at that moment, and the cause appears only at the row where it was actually supported.',
      troubleshooting: 'If a cause or interpretation sits in a row earlier than the evidence that supports it, move it forward to the time it became supported. The timeline should read the way it was lived, not the way it was understood afterward.',
    },
    recall: {
      prompt: 'Two services record related events a few seconds apart, but the offset between their clocks is unknown. How should the timeline express the sequence?',
      hint: 'Timestamp order is only as reliable as the clocks behind it.',
      answer: 'Record both timestamps exactly as logged, with their sources and time zones, and write explicitly that the clock offset between the two services is unknown. Then refuse to assert which event came first until something supports it: a synchronized clock reference, a correlation ID that ties one event to the other, or a causal dependency that fixes the order. A few seconds is well inside the drift two unsynchronized machines can show, so a confident ordering here would be a guess dressed as evidence, and if you then use that ordering to argue about cause, the whole analysis rests on the guess.',
    },
    quiz: {
      question: 'Which statement avoids hindsight in the training incident?',
      options: [
        'At 09:10 the responder had the alert, but the rejection log became available at 09:12.',
        'At 09:10 the responder should have acted on everything later found in the log.',
        'The 09:04 timestamp proves the responder observed the rejection before the alert.',
      ],
      correctIndex: 0,
      explanation: 'The first statement keeps event time and known-at time apart and describes the decision with the evidence that existed when it was made. The second plants 09:12 knowledge into a 09:10 head. The third confuses when an event was recorded with when anyone could see the record, which is the starlight mistake: the timestamp is old, the observation was not.',
    },
    takeaway: 'Give every entry an event time and a known-at time, and never let what you learned at the end move backward into the middle.',
    sourceNote: 'Incident references inform reconstruction. This timeline is invented; real clock synchronization requires evidence rather than assumption.',
  },
  {
    id: 'work-037',
    title: 'Explain the conditions behind an error',
    outcome: 'Replace a one-word verdict about a person with a testable account of what they could see, what the system defaulted to, and what should have stopped the mistake.',
    scene: 'A fictional archive action targets the wrong training list because distinct names are truncated and confirmation omits identity.',
    sections: [
      {
        title: 'Operator error leaves the mechanism unexplained',
        paragraphs: [
          'The incident note is one sentence: the operator carelessly archived the wrong training list. It names a person and a verdict and stops. Read it twice and notice that you still have no idea how the wrong list got archived. Carelessly is doing all the work, and it is not an explanation. It is the absence of one.',
          'The rehearsal record has more to say. There were two lists, Training-Day1 and Training-Day2. On screen, both were truncated to Training... and looked identical. The interface remembers your last selection, so Day2 was already highlighted from a previous task. The confirmation dialog asked one word: Continue? Those are conditions anyone can inspect and reproduce. Record what the operator selected and what the system did. Do not infer that they were rushed, distracted, or indifferent from the fact that it went wrong; you have no evidence about any of that, and the outcome is not evidence about the person\'s state of mind.',
        ],
      },
      {
        title: 'Trace information, action, and protection',
        paragraphs: [
          'When a plane lands at the wrong airport, investigators do not write pilot was careless and close the file. They ask what the instruments showed, what the two airports looked like from that approach, what the checklist said, and which warning should have fired and did not. The pilot\'s action stays in the report. What changes is that the report explains it.',
          'Blameless analysis is exactly that discipline applied to ordinary work: how did this action make sense given the information and controls the person had? Three questions do most of the work. What could the person actually distinguish? Here, nothing: both labels read Training... Which default was active? The previous selection, Day2, favoring the wrong target before anyone touched anything. What protection should have interrupted a mismatch? A confirmation that never showed which list was about to be archived. These factors stack. None of them requires assuming one person is the whole cause. And blameless does not mean ownerless: the actions stay in the record, and someone is named to own each improvement.',
        ],
      },
      {
        title: 'Replace the label with a testable account',
        paragraphs: [
          'The rewritten note: the archive action used the retained Training-Day2 selection while the intended list was Training-Day1. Both labels were truncated, and the confirmation omitted the target identity. Review whether showing the full selected identifier and requiring a matching preview would interrupt this path.',
          'Every clause in that version can be checked against the rehearsal record, and the last sentence proposes something to evaluate rather than declaring a fix. A confirmation that shows the full name is a plausible guard; it is not a guarantee against every slip, and saying so keeps the follow-up honest. Give an interface owner the two-list fixture, including the retained-selection state, and ask them to test it. Where you do not know something, such as what the operator actually saw on their monitor, write that you do not know and go find out.',
        ],
      },
      {
        title: 'What blameless does not mean',
        paragraphs: [
          'Two distortions wait on either side. On one side, blameless gets misread as consequence-free or action-free, so the archive step is quietly dropped from the timeline to spare feelings. That destroys the analysis: without the action there is nothing to explain. The action stays. The judgement about the person goes.',
          'On the other side, the fix collapses to retrain the operator. Training has its place, but if the conclusion ends there, ask what the procedure could have shown or blocked before the action happened. A system that depends on every operator being perfectly attentive with identical labels and a one-word confirmation will produce this incident again with a different name attached. The point of the account is to find the condition you can change, and attention is the one condition you cannot engineer.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The conditions around the archive action',
        alt: 'Truncated names, retained Day2 selection, and identity-free confirmation precede the unintended archive action.',
        caption: 'Read the first three boxes as questions: what could be seen, what was already selected, what should have stopped it. Each is a condition someone can reproduce and change. The action in the fourth box stays in the record; the word careless does not appear anywhere. Fictional conditions, not a proven single cause.',
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
        'Cross out careless and write in its place exactly what was selected and what action ran: retained Day2 selection, archive executed. A verb and an object, no adverb.',
        'Make two lists side by side. Left: conditions you can inspect, truncated labels, retained default, one-word confirmation. Right: personal factors you have no evidence for, attention, hurry, motivation. Everything on the right stays out of the note.',
        'Propose one protection, such as showing the full identifier in the confirmation, and write the two-list fixture that would test whether it actually interrupts this path. A protection without a test is a hope.',
        'Name the owner role for that improvement, and reread the note once more for any sentence that quietly asserts what the operator was thinking.',
      ],
      notice: 'Your note keeps the action and names an owner, and every claim in it can be checked against the rehearsal record. Nothing in it requires you to know what was going on inside someone\'s head.',
      troubleshooting: 'If your conclusion is retrain the operator, you have stopped one step early. Ask what information or guard the procedure could have put in front of the action, and write that as the improvement to test.',
    },
    recall: {
      prompt: 'A contributor follows an outdated setup guide and ends up pointed at the wrong environment. How does a review stay factual and blameless at the same time?',
      hint: 'Name the instructions that were available and the protection that was not.',
      answer: 'Keep the action: the contributor selected environment X. Then describe the conditions around it the way the airport investigators would: the guide they were following named X, the guide had not been updated since the environments changed, and nothing in the process checked the selected target against the intended one before proceeding. The improvements fall out of those conditions and each gets an owner: whoever maintains the guide updates it and adds a date, and whoever owns the process adds a target check. What the review does not do is convert following the documented instructions into a finding about the contributor\'s competence.',
    },
    quiz: {
      question: 'Which finding best supports an improvement test in the archive example?',
      options: [
        'The operator should develop stronger concentration before another attempt.',
        'The action should be omitted from the timeline to avoid assigning blame.',
        'The confirmation did not display the selected list identity when the labels were ambiguous.',
      ],
      correctIndex: 2,
      explanation: 'The missing identity in the confirmation is a condition you can reproduce with a two-list fixture and change with a specific protection, which makes it testable. Concentration is the one variable nobody can engineer, so it is not an improvement, it is a wish. Dropping the action destroys the analysis: blameless means the judgement goes, not the event.',
    },
    takeaway: 'Keep the action in the record, strike the adverb, and investigate the information, the defaults, and the protections that surrounded it.',
    sourceNote: 'Postmortem guidance emphasizes contributing conditions without blame. This invented incident does not establish a real person\'s intent.',
  },
  {
    id: 'work-038',
    title: 'Separate detection, mitigation, and recovery',
    outcome: 'Tell apart noticing a problem, stopping the bleeding, and actually finishing the job, and demand different evidence for each before calling anything done.',
    scene: 'A synthetic job queue accepts new work again while twelve older jobs still await completion.',
    sections: [
      {
        title: 'The alert clears before the work is finished',
        paragraphs: [
          'A job service stops processing at 09:00. At 09:06 someone recognizes the alert. At 09:14 an approved mitigation gets new jobs flowing again, and the alert goes green. There is a strong pull, at 09:14, to write fully recovered in the channel and go get coffee. Twelve jobs that were submitted during the outage are still sitting in the queue, unfinished. Their owners are still waiting.',
          'Those twelve jobs are the difference between two words that get used as if they were one. The service is accepting work again, which is real progress. The service has not yet done the work it already promised. At 09:26 the twelve pending jobs complete and their outputs are checked, and only then has the required state been restored. Three milestones, three different questions: when did we know, when did we reduce the harm, and when did the users actually get what they were owed?',
        ],
      },
      {
        title: 'Attach evidence to each milestone',
        paragraphs: [
          'Think of a burst pipe. Noticing the water on the floor is detection. Turning off the stopcock is mitigation: the damage stops getting worse, and the house still has a wet floor and no running water. Recovery is when the pipe is fixed, the floor is dry, and the taps work again. Nobody confuses turning off the stopcock with the plumbing being repaired, yet that is exactly what fully recovered at 09:14 claims.',
          'Give each milestone its own evidence. Detection: an acknowledged alert. Mitigation: new jobs are being processed successfully. Recovery, here: the twelve older jobs have completed and their required outputs have been verified. A permanent fix may come later still, and it is a fourth thing. Another service would draw its recovery line somewhere else, so write down what recovery means for this one before you need to argue about it. One rule travels everywhere: a monitoring check turning green establishes the condition that check measures, and nothing beyond it. The new-jobs alert was never watching the backlog.',
        ],
      },
      {
        title: 'Use intervals to ask better questions',
        paragraphs: [
          'With four times you get three intervals: 6 minutes from failure to detection, 8 from detection to mitigation, 12 from mitigation to recovery. They add up to 26 minutes from the first failure to restored outcomes. The numbers are not a verdict. They are a map of where to ask questions. Was there no signal for six minutes, or a signal nobody was watching? Did mitigation wait eight minutes on a decision or on a person? Was the twelve-minute recovery just backlog draining at its natural rate?',
          'The honest 09:14 update reads: new jobs resumed at 09:14; twelve earlier jobs remain pending until verified completion. Permanent-fix work is still open. Then at 09:26: the twelve jobs completed and outputs were verified; recovery reached. Permanent fix still open. Each message says what has been achieved and what has not, and nobody reading it has to guess whether their job is among the twelve.',
        ],
      },
      {
        title: 'Why the milestones blur',
        paragraphs: [
          'The confusion is not laziness. The alert was the thing that told you about the problem, so when the alert clears it feels like the problem has cleared. And mitigation is usually the dramatic moment: the decision, the deploy, the relief in the room. Recovery is quiet. It is a counter going down from twelve to zero while people have already moved on.',
          'Two guards. First, before the incident, write what recovery means for this service in terms of user outcomes, not dashboards; then the question at 09:14 is a lookup, not a debate. Second, never let the alert be the sole witness for recovery. If the only evidence you can cite is that the monitor is green, go find the outcome the monitor was not measuring, because that is where the twelve jobs are.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Four times, three distinct intervals',
        alt: '09:00 failure, 09:06 detection, 09:14 mitigation, and 09:26 recovery leave intervals of 6, 8, and 12 minutes.',
        caption: 'Look at the gap between the third and fourth entries: that twelve-minute stretch is where the alert is green and twelve users are still waiting. Each entry names its own evidence; none of them borrows the previous one. Hypothetical same-clock times; spacing not proportional.',
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
        'Draw a line and mark the four times on it. Under each one write the evidence that justifies the milestone: acknowledged alert, new jobs succeeding, backlog complete with outputs checked. If a milestone has no evidence of its own, it is borrowing from its neighbor.',
        'Work out the three intervals, 6, 8, and 12 minutes, and confirm they sum to 26. The arithmetic is trivial; the point is noticing that the longest interval is the quiet one after the alert cleared.',
        'Write the 09:14 update as you would post it. It must mention the twelve pending jobs and must not contain the word recovered. Read it as one of the twelve users would.',
        'Write the 09:26 update with the recovery evidence, and keep the permanent fix as a separate open line. Four things, four statuses.',
      ],
      notice: 'Your updates distinguish reduced harm from restored outcomes, and each one tells a waiting user exactly what has and has not happened to their work.',
      troubleshooting: 'If your only justification for recovery is that the alert cleared, you have described mitigation. Find the user outcome the alert does not measure, the backlog here, and make that your recovery evidence.',
    },
    recall: {
      prompt: 'A site is accepting new uploads again after an outage, but uploads that were accepted during the outage are still not viewable. What should the recovery update say?',
      hint: 'New traffic and previously accepted work can be in different states.',
      answer: 'Say both things, separately, in the same message. New uploads are being accepted and are viewable: mitigation is in place. Uploads accepted between the start of the outage and now are not yet viewable: recovery is not reached. Then name the remaining work, reprocessing that backlog, and the evidence that will close it, every affected upload viewable and spot-checked. The stopcock is off and the water has stopped rising, but the people whose photos went in during the outage do not care about the stopcock. They care about their photos, and the update owes them an honest status on exactly that.',
    },
    quiz: {
      question: 'At 09:14 in the example, which status is supported by the evidence?',
      options: [
        'Full recovery, because the new-job alert has cleared.',
        'Mitigation established; recovery remains incomplete because earlier jobs are pending.',
        'Permanent correction completed, because new jobs now run.',
      ],
      correctIndex: 1,
      explanation: 'New jobs flowing is real and it is mitigation: the harm has stopped growing. Twelve users are still owed their results, so recovery has its own evidence to wait for, and the alert was never measuring that backlog. Calling the stopgap a permanent fix mistakes a stopcock for a repaired pipe; that work has not even started.',
    },
    takeaway: 'Know, reduce, restore, fix: four milestones, four separate pieces of evidence, and the alert is only ever a witness to the first two.',
    sourceNote: 'Incident and postmortem references inform milestone analysis. All times and job counts are invented and imply no measured response targets.',
  },
  {
    id: 'work-039',
    title: 'Make incident follow-ups verifiable',
    outcome: 'Turn a vague action item into one with an owner, a specific effect it should produce, the evidence that proves it did, and an honest note about what it still will not stop.',
    scene: 'A vague improve-monitoring action becomes a synthetic stalled-queue alert specification.',
    sections: [
      {
        title: 'Improve monitoring is not an acceptance condition',
        paragraphs: [
          'The incident review ends and the action list has one item: improve monitoring. Everyone nods. Three months later nobody can say whether it was done, because nobody can say what done would look like. Which condition was supposed to become visible? Who was supposed to make it visible? What would anyone check to confirm it had worked?',
          'Go back to what actually happened. Jobs were queued and nothing was completing, while the worker process itself stayed up and looked healthy. An alert on whether the process exists would have slept through the whole thing. That is the observed gap, and it is the right place to start: the current signals did not reveal lack of progress despite pending work. Then say which kind of action you are proposing. Does it prevent the failure, detect it sooner, or reduce the damage when it happens? Improve monitoring is a detection action, and it needs to say so, because people will otherwise assume it fixes the worker.',
        ],
      },
      {
        title: 'Turn the gap into a testable rule',
        paragraphs: [
          'Compare two instructions to a night watchman. Keep an eye on things. Or: if the delivery bay has parcels in it and none have moved in five minutes, call this number. The first produces nods. The second produces a specific behavior you can test by putting a parcel in the bay and waiting.',
          'The paper rule for the queue: alert when queued jobs are present and no job completes within a five-minute window. That five minutes is a placeholder, and the service owner must check it against how long legitimate jobs actually take before it goes anywhere near production. Now test it against contrasting situations. A stalled, non-empty queue should fire. An empty queue should not. A queue that is slowly progressing should not fire this rule. And if the telemetry itself is missing, that is unknown, not healthy; a silent sensor is not a reassuring one. Notice the limits: this rule makes one kind of stall visible. It does not fix the worker defect, it does not make anyone respond faster, and it does not cover every way a queue can misbehave.',
        ],
      },
      {
        title: 'Assign closure to evidence, not a patch',
        paragraphs: [
          'The written follow-up: Owner: monitoring maintainer. Purpose: detect pending work without completions. Proposed priority: review with the service owner before the next release decision. Acceptance: synthetic stalled, empty, and progressing fixtures produce the agreed alert outcomes; missing-data behavior is defined; the test notification reaches the agreed destination. Link to the original failure condition in the action record.',
          'Look at what closes it. Not rule merged. A merged configuration is an artifact; it tells you a file changed, and nothing about whether a stalled queue would now wake anyone. The fixtures and the delivered test notification are the evidence that the intended effect exists. And because this item is detection only, the review also needs a separate action, with its own owner and acceptance, addressing why the worker stopped completing jobs. One item cannot honestly claim to do both.',
        ],
      },
      {
        title: 'Why vague items survive',
        paragraphs: [
          'Vague follow-ups are comfortable. Improve monitoring cannot fail, because it never said what success was, and it cannot be overdue, because it never had a finish line. That comfort is exactly the cost: the next incident of the same shape arrives and the review discovers the action was technically complete and practically empty.',
          'Three habits break the pattern. Start from the observed gap, not from a general virtue. Name the mechanism, prevent, detect, or reduce, so nobody mistakes an alert for a fix. And write the acceptance evidence before anyone starts work, so closure is a check against fixtures rather than a feeling that something was done. A quiet month proves nothing either; absence of alerts is also what a broken alert looks like.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Evidence for the proposed progress alert',
        alt: 'Stalled pending work triggers; empty and progressing queues do not; missing telemetry is unknown.',
        caption: 'Read the four rows as the acceptance test for the rule: one must fire, two must stay quiet, and the last has no verdict at all. If the rule gets any row wrong, the follow-up is not closed. Synthetic window, not a production threshold or evidence of prevention.',
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
        'Cross out improve monitoring and write the observed gap in its place: pending work with no completions was invisible. Then write the mechanism word, detect, so nobody reads this as a fix for the worker.',
        'Add an owner role, the priority decision that needs making, and a note that the five-minute window must be checked against real job durations by the service owner. The placeholder number is a question, not a setting.',
        'Write the expected outcome for each of the four supplied cases. Keep telemetry missing as unknown; if you wrote healthy or quiet there, you have described a sensor that reassures you by being broken.',
        'Define the closure evidence, fixtures passing plus a test notification actually arriving, and add one line stating that preventing the worker defect is a separate action with its own owner.',
      ],
      notice: 'Your follow-up can be checked by a stranger: they can run the fixtures, look for the notification, and say closed or not closed without asking anyone how they feel about it.',
      troubleshooting: 'If your closure line says rule merged, ask what a stalled queue would do tomorrow if the rule were subtly wrong. Nothing would tell you. Add the synthetic inputs and the observed notification as the acceptance evidence.',
    },
    recall: {
      prompt: 'A follow-up proposes rejecting malformed imports before they are saved. How do you tell its prevention claim apart from a separate alert?',
      hint: 'Blocking a write and noticing a failure are different mechanisms with different evidence.',
      answer: 'Prevention claims the bad thing cannot happen, so its acceptance evidence has to show the bad thing not happening: feed in a malformed fixture and confirm storage is unchanged afterward, and feed in a valid fixture and confirm it still saves, so the guard is not simply rejecting everything. An alert is detection: it tells you a malformed import arrived, and it would fire just as happily after the bad write landed. The watchman who calls when parcels stop moving is not the same as a locked door. Each one deserves its own item, its own owner, and its own fixtures, and neither one gets to borrow the other\'s evidence.',
    },
    quiz: {
      question: 'What evidence should close the stalled-queue detection follow-up?',
      options: [
        'The agreed fixtures produce the specified outcomes, and the test notification reaches its destination.',
        'The alert configuration was merged, regardless of how missing data is handled.',
        'A quiet period produces no alert, so the stalled case is assumed covered.',
      ],
      correctIndex: 0,
      explanation: 'The fixtures prove the rule distinguishes stalled from empty from progressing, and the delivered notification proves someone would actually hear it; together they show the intended effect exists. A merged file is an artifact that says nothing about behavior, and leaving missing-data handling undefined means the sensor can go silent and look healthy. A quiet month is indistinguishable from a broken alert.',
    },
    takeaway: 'Start from the gap, name the mechanism, give it an owner, and write the fixtures that close it before anyone starts work.',
    sourceNote: 'Postmortem guidance supports owned action items. This original alert example has an illustrative window, not an operational recommendation.',
  },
  {
    id: 'work-040',
    title: 'Learn from a near miss without overstating it',
    outcome: 'Record a protection that worked, then ask where else the same failure could enter, without declaring those other paths either safe or broken until you have looked.',
    scene: 'A training interface rejects a mismatched target while the equivalent bulk-import path remains untested.',
    sections: [
      {
        title: 'A caught mismatch still contains a lesson',
        paragraphs: [
          'During a rehearsal, a request is approved for target A. The person carrying it out selects target B in the interface, perhaps from a stale default, perhaps from a similar name. Before anything happens, a guard compares the two, finds they differ, and refuses. The synthetic trace shows the rejection and zero changes. Nothing was damaged. Everyone exhales.',
          'Two wrong conclusions are now available, and they are opposites. The first: nothing happened, so there is nothing to learn, move on. The second: the guard worked, so the feature is safe. Neither follows. What actually happened is that a failure path was walked almost to the end and one specific protection on one specific route stopped it. That is real information about that route. It says nothing yet about the other doors into the same room, and it is a free chance to go and look at them without anyone having to break anything first.',
        ],
      },
      {
        title: 'Separate the observation from the coverage claim',
        paragraphs: [
          'An airline treats a near miss on runway one as a gift: a chance to ask whether runway two has the same warning light, before the day it is needed there. A near miss is an event where a feared failure path was approached and the harmful outcome was avoided. Record four things: the intended action, the actual conditions, the protection that intervened, and the observed result.',
          'Here the ordinary interface caught an A-versus-B mismatch. But there is a bulk-import path that selects targets a different way, from a file rather than a menu, and nobody has watched it face the same mismatch. Resist both shortcuts. Untested does not mean unprotected: the same validation might live deeper in the system where both paths pass through it. And a shared button label or a similar-looking screen does not mean a shared guard: two paths can look alike at the surface and diverge underneath. The useful question is: where is the boundary at which equivalent enforcement should be demonstrated for the second path?',
        ],
      },
      {
        title: 'Turn the successful guard into a maintained check',
        paragraphs: [
          'The note: the interface mismatch guard rejected selected target B against approved target A; the synthetic trace shows zero changes. Bulk-import enforcement is untested. Ask the feature owner where target validation is shared, and add a synthetic mismatch case for each supported entry path.',
          'Two things turn this from a diary entry into something that lasts. First, keep the successful fixture as a regression test, so a future refactor cannot quietly remove the guard that saved you. Protections that are not tested erode. Second, report the event through the normal route, even though no user was affected. A near miss nobody hears about protects nobody. The follow-up is a coverage question for the owner and a safe regression design for the untested path, not a live attempt to see whether bulk import would also refuse.',
        ],
      },
      {
        title: 'Hold the middle',
        paragraphs: [
          'The pull toward a verdict is strong. All paths are safe is comforting and lets everyone stop. Bulk import is broken is dramatic and gets attention. Both are claims about a path nobody has examined, and either one will shape decisions: the first by cancelling the check, the second by triggering emergency work on a problem that may not exist.',
          'The honest position is less satisfying and more useful: demonstrated here, unknown there, and here is the test that would move it from unknown to known. Writing that sentence takes discipline, because a near miss is emotionally over the moment the guard fires. The investigation is not. The runway-two light is still a question until someone walks out and looks at it.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Observed protection versus unknown coverage',
        alt: 'The interface rejected target B against approval for A; bulk-import enforcement remains untested.',
        caption: 'Notice that the right-hand column has no verdict. It is not green and not red. That blank is the honest state of a path nobody has tested, and the follow-up exists to fill it with evidence rather than with a feeling. Fictional near miss.',
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
        'Write the four facts of the event: approved target A, selected target B, the guard rejected the mismatch, the trace shows zero changes. Facts only; no verdict about the feature yet.',
        'List the entry paths you know of, ordinary selection and bulk import, as separate lines, and mark only the first as demonstrated. Leave the second blank rather than writing safe or broken in it. The blank is the point.',
        'Write the question you would send the feature owner about where target validation lives and whether both paths share it. Phrase it as a question; you do not know the answer, and pretending to would waste the owner\'s correction.',
        'Describe the synthetic regression case for bulk import, a file naming target B against approval for A, with its expected outcome of zero changes. Design it on paper; do not run a live action to find out.',
      ],
      notice: 'Your note preserves exactly what worked, names exactly what is unknown, and produces a test rather than a verdict for the untested path.',
      troubleshooting: 'If you wrote all paths are safe or bulk import is broken, cross it out and replace it with the evidence you would need to be allowed to write it. That replacement sentence is your follow-up.',
    },
    recall: {
      prompt: 'An import guard rejects a file with one malformed header before anything is saved. What useful question remains about the older export formats the importer also accepts?',
      hint: 'A demonstrated rejection covers one case, not every representation that reaches the parser.',
      answer: 'The guard caught one malformed header in one format. The older formats are the second runway: they reach the same parser by a different route, and nobody has watched them face a malformed input. So the question is whether each supported older format passes through equivalent validation before any write, and, just as important, whether valid files in those formats still import correctly after the guard was added. Keep the successful malformed-header fixture as a regression test, then write a synthetic malformed case per older format with the expected result of unchanged storage. What you do not do is infer the older formats\' behavior from one rejection in the new one.',
    },
    quiz: {
      question: 'What does the demonstrated interface rejection establish about bulk import?',
      options: [
        'Bulk import must share the guard, because both belong to the same feature.',
        'Bulk import lacks protection, because no test was recorded for it.',
        'Nothing conclusive yet; its enforcement needs separate evidence or a verified shared boundary.',
      ],
      correctIndex: 2,
      explanation: 'The observation is bounded to the path it happened on; a second path becomes known only through its own test or through a verified common enforcement point both paths pass through. Belonging to the same feature is surface similarity, which says nothing about where the check lives. And the absence of a test is the absence of evidence, not evidence of absence: untested is unknown, not broken.',
    },
    takeaway: 'Keep the fixture that saved you, report the event, and treat every untested path as a blank to fill with evidence, not a verdict to announce.',
    sourceNote: 'Postmortem and launch references inform guard coverage. This invented near miss establishes no real-system protection.',
  },
]