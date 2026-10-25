import type { LessonGuide } from './types'

// Original fictional scenarios. Source links are inherited from each existing lesson.
// Practice times are suggested budgets, not measured learning or productivity effects.
export const workGuides: LessonGuide[] = [
  {
    id: 'work-001',
    title: 'Define the evidence for done',
    outcome: 'Write a completion agreement that distinguishes an implemented fix from an investigated problem.',
    scene: 'A junior developer scopes a blank-quantity import defect before starting a patch.',
    sections: [
      {
        title: 'An afternoon is not an acceptance test',
        paragraphs: [
          'Imagine receiving this task: "Fix the inventory importer." A row with an empty quantity currently becomes a zero-quantity item. You could spend an afternoon reading the parser and honestly report hard work, while the requester still expects a usable fix. The missing agreement is not how many hours to spend. It is what another person should be able to inspect afterward. Before editing, ask whether this task ends with a corrected importer or with an investigation that identifies the failing boundary.',
        ],
      },
      {
        title: 'Connect the claim to an observation',
        paragraphs: [
          'Completion evidence connects a claim to a check. "Blank quantities are rejected" needs a blank input and the resulting rejection. It also needs a preservation check: a rejected row must not quietly create an item, and a valid quantity must still import. These observations define behavior rather than a preferred implementation. A screenshot of an error message alone misses the stored result. Conversely, demanding a patch from an exploratory task changes its scope. Agree on the kind of evidence before treating either outcome as complete.',
        ],
      },
      {
        title: 'Write two honest delivery statements',
        paragraphs: [
          'For implementation, propose: "Done means an empty quantity produces a validation error, creates no item, and quantity 4 still imports as 4. Include the failing fixture and regression results." For investigation, propose: "Deliver a synthetic reproduction, the boundary where blank becomes zero, and any unanswered behavior decision. A fix is not included yet."',
          'If the requester cannot decide whether blank should mean zero, preserve that as an open acceptance question. Do not make the easiest parser behavior the requirement by accident. Both statements give the next reader a result to evaluate, without equating effort with success.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two quantities, two required outcomes',
        alt: 'An empty quantity must show an error and create no item; quantity 4 must create an item with quantity 4.',
        caption: 'Inspect both the message and stored outcome in this fictional importer. One error screenshot would cover only part of acceptance.',
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
        'Write the fictional task "Fix the inventory importer" and choose investigation or implementation as its deliverable.',
        'List empty quantity and quantity 4, with the message and stored outcome expected for each.',
        'Draft a completion sentence that names the evidence you would hand over, not the hours worked.',
        'Add one unresolved decision and a question asking the requester to confirm it before implementation.',
      ],
      notice: 'Your statement lets another reader distinguish a completed investigation from a verified behavior change.',
      troubleshooting: 'If the statement only says "tested," name the input, observable result, and state that must remain unchanged.',
    },
    recall: {
      prompt: 'A teammate asks you to investigate duplicate reminder emails. What could count as done without promising a fix?',
      hint: 'Choose an inspectable investigation output and keep the cause separate from the symptom.',
      answer: 'Offer a synthetic sequence showing the duplicate, the observed sending boundary, and a list of unresolved causes. State that implementation is separate. Finding a reproducible trigger is a deliverable even before the cause is established.',
    },
    quiz: {
      question: 'An image-upload investigation ends with a repeatable failure but no diagnosis. Which handoff matches an investigation-only agreement?',
      options: [
        'Mark the feature fixed because the failure is now understood enough to reproduce.',
        'Provide the fixture, observed failure, and open hypotheses without claiming a fix.',
        'Keep the result private until an implementation can accompany it.',
      ],
      correctIndex: 1,
      explanation: 'The fixture and open questions satisfy an inspectable investigation deliverable. Reproducibility is not a fix, but withholding it also hides useful progress.',
    },
    takeaway: 'Agree on the deliverable, then name the observations that justify calling it done.',
    sourceNote: 'The inherited review guidance supports checking intended behavior and tests. This completion agreement is an original planning heuristic, not a measured productivity intervention.',
  },
  {
    id: 'work-002',
    title: 'Learn one request path',
    outcome: 'Trace one input through a small system and locate a question at the boundary where evidence stops.',
    scene: 'A new contributor maps a fictional library catalogue search rather than memorizing folders.',
    sections: [
      {
        title: 'Start with one search',
        paragraphs: [
          'You join a small catalogue project and receive a diagram containing twelve component names. Knowing those names does not explain why searching for " atlas " returns nothing. Choose this one input as your route through the system. In the fictional example, the search box sends the spaces, the request handler removes them, the catalogue lookup returns a book identifier, and the page renders its title. You now have an observable story to follow instead of a list of folders to memorize.',
        ],
      },
      {
        title: 'A boundary has an input and an output',
        paragraphs: [
          'A boundary is a handoff between pieces of a system. At each handoff, record what goes in, what comes out, and where you could observe it. The browser may send a query string; the handler may pass a normalized word to a lookup function. Normalization means putting equivalent inputs into a common form, such as removing surrounding spaces. Do not assume every component performs it. Mark a transformation as observed, documented, or unknown. Otherwise a tidy arrow can disguise the very gap you need to investigate.',
        ],
      },
      {
        title: 'Turn the map into a bounded question',
        paragraphs: [
          'Write this fictional trace: "Box: space-atlas-space. Handler: atlas. Lookup: book B7. View: Atlas of Rivers." Suppose you can confirm the browser input and final title but not the lookup argument. Mark "trimming location unknown" there. Ask: "Which function owns trimming, and which test shows the lookup receives atlas?" That question identifies one contract. Once this path is clear, try an empty query or missing book to explore a different boundary.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The atlas request',
        alt: 'Whitespace is removed before atlas reaches a lookup returning B7 and the title Atlas of Rivers.',
        caption: 'Follow the changing value through this fictional search; infrastructure outside the four illustrated boundaries is omitted.',
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
        'Draw the search box, handler, lookup, and view with room to write values between them.',
        'Copy each value from the example onto the boundary where it crosses, including the surrounding spaces.',
        'Pretend the handler output is unavailable. Replace that observation with a question mark rather than an assumption.',
        'Write one help request naming the missing transformation and the test or documentation that would explain it.',
      ],
      notice: 'The unknown has a location, an input, and a question someone can answer without explaining every component.',
      troubleshooting: 'If your arrows contain only names, add the actual query or result crossing each handoff.',
    },
    recall: {
      prompt: 'A training expense form displays the right total but exports the wrong total. Where would you begin a boundary map?',
      hint: 'Follow one amount through the export path, not every page in the application.',
      answer: 'Trace a synthetic amount from form state into the export transformation and exported cell. Record where the amount or unit first differs. The display path is useful comparison evidence, but it does not establish that export uses the same transformation.',
    },
    quiz: {
      question: 'You can observe a request and its response but cannot inspect an intermediate cache. What should the map show?',
      options: [
        'A marked unknown at the cache boundary and the observation needed to resolve it.',
        'The most common caching design, drawn as though this system uses it.',
        'Only the response, because incomplete maps cannot support questions.',
      ],
      correctIndex: 0,
      explanation: 'An explicit gap supports a precise next question. A typical design is only a hypothesis, while discarding known boundaries loses useful evidence.',
    },
    takeaway: 'Follow a concrete value and label the point where your explanation stops.',
    sourceNote: 'Effective Troubleshooting discusses system knowledge and observable interfaces. The catalogue trace is an original simplified learning exercise, not documentation of a real application.',
  },
  {
    id: 'work-003',
    title: 'Keep an explicit active-work limit',
    outcome: 'Make unfinished commitments visible and choose the next task without treating waiting work as completed.',
    scene: 'An early-career engineer balances a review, a setup guide, and a new dashboard request.',
    sections: [
      {
        title: 'The review will come back',
        paragraphs: [
          'Your parser change is awaiting review, your setup guide is half written, and someone asks for a dashboard adjustment. The parser feels out of your hands, so the new request looks like only a second task. Yet review comments may arrive while you are editing the dashboard. There are now three unfinished commitments competing for testing, explanation, and attention. The planning problem is that waiting work vanished from the intake decision.',
        ],
      },
      {
        title: 'Separate state from remaining obligation',
        paragraphs: [
          'Use states such as doing, waiting, and ready for handoff to describe where work stands. Separately choose a provisional limit on unfinished commitments. In this example the limit is two, including reviews, not a universal recommendation. A waiting task may require no effort this morning while still reserving future attention. Record its dependency and next check rather than repeatedly reopening it. The limit creates a question at intake: which existing commitment can finish, pause by agreement, or move before another starts? It cannot decide organizational priorities for you.',
        ],
      },
      {
        title: 'Make the next choice visible',
        paragraphs: [
          'Write: "Parser: waiting for review; respond when feedback arrives. Setup guide: doing; next output is the tested installation section. Dashboard: queued, not started." With two unfinished items against a provisional limit of two, choose the guide for the next work block. Tell the requester: "I can take the dashboard after the guide handoff, or we can agree to pause the guide if this is more urgent." If both current tasks become externally blocked, independent work may be sensible. Record that exception and its trade-off rather than pretending blocked commitments vanished. Review the limit against actual interrupt duties and workload.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two ways to count this queue',
        alt: 'Typing-only planning counts the guide; unfinished-work planning also counts the parser review, leaving the dashboard queued.',
        caption: 'Two is a provisional limit. Compare the commitments each count includes before accepting another request.',
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
        'Make cards for the parser review, setup guide, and dashboard request using the states in the example.',
        'Write the remaining action and dependency on each card, including a response to review feedback.',
        'Apply a provisional unfinished-work limit of two and choose the next work block without starting the dashboard.',
        'Draft a reply offering either a later dashboard start or an agreed pause of the guide.',
      ],
      notice: 'The waiting review remains visible, and the new request has a start condition rather than an invisible promise.',
      troubleshooting: 'If everything is labeled urgent, identify the priority decision owner instead of inventing a larger capacity.',
    },
    recall: {
      prompt: 'You support an interrupt-driven help queue and cannot keep a fixed two-task limit. How could you preserve the useful part?',
      hint: 'The number is adjustable; unfinished obligations still need to stay visible.',
      answer: 'Keep next actions for interrupted work, reserve support capacity, and agree which planned work moves when interrupts arrive. Adapt the limit to the role; two is not universally optimal.',
    },
    quiz: {
      question: 'Both current tasks await external decisions. A short independent task arrives. Which response fits an explicit work limit?',
      options: [
        'Reject it automatically because a personal limit can never change.',
        'Start it and mark both waiting tasks complete for planning purposes.',
        'Record an exception, the waiting dependencies, and how returning work will be prioritized.',
      ],
      correctIndex: 2,
      explanation: 'A limit supports deliberate choices rather than automatic refusal. Keeping the waiting obligations visible avoids promising capacity that may disappear when replies arrive.',
    },
    takeaway: 'Waiting changes when effort is needed, not whether the commitment remains unfinished.',
    sourceNote: 'Small CLs supports manageable changes. This original queue-limit heuristic has no source-prescribed number or guaranteed effect.',
  },
  {
    id: 'work-004',
    title: 'Ask a question with a useful boundary',
    outcome: 'Draft a help request that exposes a missing explanation or decision using a small concrete example.',
    scene: 'A contributor asks why a username passes the form but is rejected by a fictional service.',
    sections: [
      {
        title: 'Show the mismatch',
        paragraphs: [
          'A training account form accepts "sam " with a trailing space, but submitting it returns "invalid username." You have checked that plain "sam" succeeds. Sending "The account page is broken, any ideas?" makes the recipient reconstruct both the intended behavior and your investigation. Instead, begin with the mismatch: the form treats the spaced value as valid while the service rejects it. Include the small pair of inputs.',
        ],
      },
      {
        title: 'Ask for the missing kind of help',
        paragraphs: [
          'There are two different gaps here. A knowledge gap asks where a documented rule is implemented. A decision gap asks which behavior should be required when no rule exists. More debugging cannot settle a missing product decision. State what you checked, but do not turn the request into a diary: "Plain sam succeeds; sam with a trailing space is accepted locally and rejected on submit." Then ask whether the contract requires trimming or rejection. If a test already establishes that contract, the question becomes where the form and service diverge.',
        ],
      },
      {
        title: 'A message someone can answer',
        paragraphs: [
          'Try: "Expected: form and service agree on username validity. Observed: sam succeeds; sam followed by one space passes the form but fails submission. I checked the form rule and found no trimming. Is trimming required, or should the form reject surrounding spaces? Please point me to the contract or its owner." This gives a potential helper an explanation to provide or a decision to route. You need not investigate for hours before asking. If the next step requires access you lack, name the missing access immediately and use the normal request process; collecting more unrelated screenshots will not supply authority.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A bounded validation question',
        alt: 'A developer reports the trailing-space mismatch and asks who owns the trimming or rejection rule.',
        caption: 'Fictional exchange: confirm the rule before deciding where its implementation should change.',
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
        'Copy the sam and trailing-space cases, recording what the form and service each do.',
        'Write one expected-behavior sentence without deciding that trimming must be the solution.',
        'Add the single check already performed and identify whether the remaining gap is knowledge or a decision.',
        'Finish with an answerable question and the artifact or owner you need. Keep it as a practice draft.',
      ],
      notice: 'The recipient can answer one question without first asking which input failed or what help you want.',
      troubleshooting: 'If your message asks "Any thoughts?", replace it with the exact rule, observation, or approval you need.',
    },
    recall: {
      prompt: 'A report rounds 1.5 hours to 2, but a stakeholder expected 1.5. What should your help request establish first?',
      hint: 'A surprising result is not automatically a violation of an agreed rule.',
      answer: 'Show the input and rounded output, then ask which precision the contract requires. If precision was never agreed, route that decision before treating the implementation as defective.',
    },
    quiz: {
      question: 'You have a repeatable mismatch but cannot find the behavior specification. What is the most useful final sentence?',
      options: [
        'Can someone confirm the intended behavior or identify the person authorized to decide it?',
        'Can someone confirm that my preferred fix is correct before I write it?',
        'Can someone explain the whole service so I can infer the intended behavior?',
      ],
      correctIndex: 0,
      explanation: 'Confirm the contract before choosing a fix. A whole-service explanation is broader than the missing decision.',
    },
    takeaway: 'Give help a target: the observation, rule, or decision missing from your reasoning.',
    sourceNote: 'Effective Troubleshooting supports reproducible problem reports. This original message structure is a communication heuristic, not a tested response-time promise.',
  },
  {
    id: 'work-005',
    title: 'Leave a reproducible result',
    outcome: 'Attach enough setup and limitations to a test result for another reader to judge what it establishes.',
    scene: 'A tester documents a synthetic CSV export containing a comma inside a team name.',
    sections: [
      {
        title: 'PASS leaves the setup behind',
        paragraphs: [
          'You test a CSV export in a demo build and attach a screenshot reading PASS. Tomorrow another contributor sees a split team name in a spreadsheet. Neither of you can tell whether the tests disagree: your export may have used names without commas, a different build, or a different import setting. A result without conditions is an answer with its question removed. Keep the build, input, expected behavior, actual behavior, and observation method together so someone can determine whether they are looking at the same case.',
        ],
      },
      {
        title: 'Record what was actually observed',
        paragraphs: [
          'Use an invented fixture with two data rows and columns name and team. One team is "North, West"; the other is "East." In CSV, a comma inside a field needs appropriate quoting, so visually counting commas is not a reliable column check. Distinguish inspecting the exported text from opening it with a spreadsheet importer. These are different observations. Include relevant settings, such as comma delimiter and UTF-8 encoding, and identify the application version if one was used. An assertion about export text alone does not establish every importer behaves identically.',
        ],
      },
      {
        title: 'A result that travels',
        paragraphs: [
          'Write: "Demo build export-7. Synthetic input: two data rows; Ada belongs to North, West and Bo to East. Expected: two columns, two data rows, comma retained inside Ada\'s team. Actual: fixture parser returns those fields exactly. Header excluded from the row count. Evidence: saved fixture and parsed output. Not tested: spreadsheet applications or alternate delimiters."',
          'If a teammate later tests a spreadsheet, they can add its version and import settings rather than overwriting your narrower result.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Same file, different parsing outcomes',
        alt: 'Ada and North, West should form two fields; faulty splitting turns that row into three fields.',
        caption: 'The fictional fixture has two columns. Inspect the team boundary, not the number of comma characters in the exported text.',
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
        'Write the two-column fixture and distinguish its header from its two data rows.',
        'Draft a result record naming build export-7, the fixture parser, expected fields, and reported actual fields.',
        'Add the exact artifact you would preserve: the fixture plus parsed field output, not merely a PASS image.',
        'Write a limitation stating that spreadsheet import was not tested, then identify the extra setup that test would need.',
      ],
      notice: 'A reader can tell whether the claim concerns CSV generation, one parser, or a particular spreadsheet import.',
      troubleshooting: 'If the result says "works everywhere," replace it with the observed parser or application and its relevant settings.',
    },
    recall: {
      prompt: 'A colleague reports that a keyboard shortcut worked once. What would make that result reusable for a focus-related defect?',
      hint: 'The active element and key sequence can change what the same shortcut does.',
      answer: 'Record the build, browser, focused element, exact key combination, expected action, and observed action. Preserve a repeatable setup. State that other focus positions were not covered instead of extending one success to the entire page.',
    },
    quiz: {
      question: 'An export passes a text-level parser test. Which claim is supported without further evidence?',
      options: [
        'Every spreadsheet will select the correct delimiter automatically.',
        'The specific fixture parsed into the expected fields under the recorded setup.',
        'The reported spreadsheet split must come from user error.',
      ],
      correctIndex: 1,
      explanation: 'The test supports its recorded parsing conditions. Importer settings remain a separate boundary, so neither universal compatibility nor personal fault follows.',
    },
    takeaway: 'Keep the tested question, setup, result, and untested conditions attached to the evidence.',
    sourceNote: 'The inherited troubleshooting and review references support inspectable tests. This CSV fixture and evidence record are original examples, not reported compatibility measurements.',
  },
  {
    id: 'work-006',
    title: 'Describe the problem before the tool',
    outcome: 'Write a proposal opening that identifies a blocked decision and leaves more than one implementation available.',
    scene: 'A contributor proposes a test dashboard before discovering that reports already contain the needed failure stage.',
    sections: [
      {
        title: 'A dashboard is an answer to something',
        paragraphs: [
          'You want to build a new test dashboard because reviewers keep asking which stage failed first. A colorful mockup makes the idea easy to discuss, but it has already committed the conversation to a new interface. The real decision is whether to rerun a test or investigate an earlier setup failure. If the current report contains the stage but buries it below later errors, the missing capability may be presentation rather than data collection. Describe that gap before choosing a new service to maintain.',
        ],
      },
      {
        title: 'Name the user, decision, and evidence',
        paragraphs: [
          'A problem statement identifies who cannot do what, under which observed conditions. It separates the outcome from the mechanism used to achieve it. In a fictional run, setup fails, so later test stages never execute. The report lists the last error first. A reviewer mistakes the final message for the first failure and requests an irrelevant rerun. This one example motivates investigation of report ordering; it does not establish how often the problem occurs or how much time a dashboard would save. Those broader claims require their own observations.',
        ],
      },
      {
        title: 'Open the proposal without a product name',
        paragraphs: [
          'Try: "Reviewers deciding whether to rerun need the first failing stage and its evidence. In the sample run, setup failed before tests began, but the report leads with a later summary error. We need readers to distinguish a setup failure from an executed test failure." Now compare moving the first failure to the top, adding a linked summary, and building a separate dashboard. A useful next check is a paper report revision using the same run. Ask a reviewer to identify the stage and explain their reasoning.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'What happened in the sample run',
        alt: 'Setup fails, tests are skipped, and a later summary reports the incomplete run.',
        caption: 'Fictional event order, not elapsed time. The final message is not the first failure.',
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
        'Write "Build a dashboard" and replace it with the reviewer, blocked decision, and missing information.',
        'Use the setup failure as supporting evidence without inventing a frequency or time-saving estimate.',
        'Sketch a revised report heading that identifies setup as the first failure and test execution as skipped.',
        'List one alternative implementation and a question that would distinguish it from your preferred approach.',
      ],
      notice: 'Your problem statement survives a decision to improve the report instead of building a dashboard.',
      troubleshooting: 'If removing a tool name destroys the proposal, write the decision the tool was supposed to support first.',
    },
    recall: {
      prompt: 'Someone proposes a chatbot for new starters who cannot find equipment-request instructions. What belongs in the problem statement?',
      hint: 'Identify the task and the missing information before choosing a conversation interface.',
      answer: 'Name the equipment request and the missing step or owner in its instructions. A clearer page, better navigation, and a chatbot remain alternatives until that gap is understood.',
    },
    quiz: {
      question: 'A sample report already contains the needed value, but readers overlook it. Which first check best fits the evidence?',
      options: [
        'Choose a storage platform so a new dashboard has an architecture.',
        'Estimate savings from the number of pages a dashboard could replace.',
        'Test whether making that value prominent supports the intended decision.',
      ],
      correctIndex: 2,
      explanation: 'The observed gap concerns finding existing information. A presentation check tests that gap before introducing infrastructure or unsupported savings claims.',
    },
    takeaway: 'Describe the decision that is blocked before proposing the machinery to support it.',
    sourceNote: 'Simplicity and review guidance inform current requirements. This original report-redesign exercise is a proposal heuristic, not a measured usability finding.',
  },
  {
    id: 'work-007',
    title: 'Compare alternatives on the same criteria',
    outcome: 'Compare a preferred design with the current approach using shared criteria and explicit unknowns.',
    scene: 'A documentation maintainer compares a generated release-note page with a hosted search service.',
    sections: [
      {
        title: 'Compare two real options',
        paragraphs: [
          'Your fictional project publishes release notes as a generated page. You prefer a hosted search service because it offers filters. A proposal that describes the service by its best features and the current page only by its frustrations is not a fair comparison. The page already works offline and has an identified maintainer. The service may support useful search, but somebody must operate its index. Keep the current approach in the comparison as an actual choice, not a deliberately weak opponent for the new idea.',
        ],
      },
      {
        title: 'Choose criteria before scoring',
        paragraphs: [
          'Use criteria tied to the task: finding a release note by version, offline availability, implementation effort, and maintenance ownership. Apply every criterion to both options. A demonstrated feature is evidence; an attractive mockup is not evidence that indexing stays correct. Avoid adding guessed scores such as "maintenance: 9 out of 10" merely to produce a total. A number does not remove judgment from an unsupported estimate. If offline reading is a requirement, treat it as a constraint that an option must satisfy, rather than allowing decorative features to outweigh it.',
        ],
      },
      {
        title: 'Let an unknown determine the next check',
        paragraphs: [
          'Draft: "Generated page: version headings exist; offline package works in the training fixture; maintainer is the documentation role; adding a version index needs an estimate. Search service: version filters appear in the prototype; offline behavior and index owner are unknown; integration effort is unestimated." Do not announce a winner from these gaps. If offline access is required, ask for a disconnected prototype check or an explicit scope decision first. If the generated page can meet the need with a small index, compare that improved option too.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Release-note access and ownership',
        alt: 'The page has known offline access and ownership; the search prototype has filters but unresolved access and ownership.',
        caption: 'Fictional assessments using shared criteria. Unknown does not mean zero cost or demonstrated failure.',
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
        'Make columns for the generated page and search service, with identical rows for the four criteria in the lesson.',
        'Fill only the evidence given above. Write unknown wherever the scenario supplies no observation or estimate.',
        'Mark offline reading as a requirement and identify which unknown must be resolved before recommending the service.',
        'Write a recommendation conditional on the missing offline and ownership evidence.',
      ],
      notice: 'Both options face shared criteria, with a specific check for missing evidence.',
      troubleshooting: 'If one option has only benefits, add its upkeep and compatibility questions without inventing costs.',
    },
    recall: {
      prompt: 'You compare two date parsers, but only your favorite has been tested with invalid dates. How should the comparison change?',
      hint: 'An untested alternative is not demonstrated to fail or succeed.',
      answer: 'Apply the same valid and invalid fixtures to both, recording unsupported or untested cases explicitly. Compare maintenance and accepted input formats too. Do not award a correctness score to the untested parser based on its reputation.',
    },
    quiz: {
      question: 'An option meets several preferences, but its behavior under a mandatory constraint is unknown. What should the proposal do?',
      options: [
        'Average the unknown into a neutral score so a total can be calculated.',
        'Identify a check for the constraint before treating the option as eligible.',
        'Remove the constraint from the comparison until the option has a fuller prototype.',
      ],
      correctIndex: 1,
      explanation: 'An unknown needs evidence, not a favorable score or automatic rejection. A mandatory constraint cannot be traded away by accumulating unrelated preferences.',
    },
    takeaway: 'Shared criteria expose trade-offs; honest unknowns tell you what to investigate next.',
    sourceNote: 'The inherited Simplicity chapter informs complexity trade-offs. This comparison method and release-note scenario are original heuristics, not a validated scoring model.',
  },
  {
    id: 'work-008',
    title: 'Test the assumption that could stop the plan',
    outcome: 'Design a bounded feasibility check for a dependency whose failure would invalidate a proposed feature.',
    scene: 'A contributor checks whether a fictional job API can support a completion-duration report.',
    sections: [
      {
        title: 'A polished duration report can still be impossible',
        paragraphs: [
          'You are sketching a report showing how long completed training jobs took. The layout is straightforward: job name, start time, finish time, duration. But the fictional API schema lists createdAt, updatedAt, and status, not startedAt or finishedAt. The plan-breaking assumption is that a supported source exposes actual execution boundaries. If it does not, the proposed duration cannot be calculated merely because two other timestamps are available.',
        ],
      },
      {
        title: 'A field name is not its meaning',
        paragraphs: [
          'An assumption is a statement the design relies on before it has enough evidence. Test the one whose failure changes the design most, not necessarily the easiest detail to check. Here updatedAt could change when someone edits a completed job description, while createdAt could precede execution in a queue. Subtracting them would measure neither execution time nor a stable completion interval. A useful feasibility check reads the documented field semantics and a synthetic lifecycle example. It asks whether the available values actually support the promised quantity, rather than whether a request returns successfully.',
        ],
      },
      {
        title: 'Write the stopping result in advance',
        paragraphs: [
          'Use this invented sequence: created at 10:00, started at 10:10, finished at 10:15, description edited at 10:30. Execution took 5 minutes; updatedAt minus createdAt gives 30 minutes. Write: "Proceed only if a supported contract supplies start and finish events with stable meanings. If only creation and last modification are available, do not label their difference execution duration." A narrower proposal might show job status instead, or request an approved interface change. Even a successful timestamp prototype says nothing yet about permissions, pagination, or missing events.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Which interval measures execution?',
        alt: 'Creation is 10:00, execution 10:10 to 10:15, and editing 10:30; only execution lasts 5 minutes.',
        caption: 'Hypothetical same-clock times, not proportional spacing. Execution takes 5 minutes; creation to edit takes 30.',
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
        'Write the report claim "execution duration" and name the two event boundaries it requires.',
        'Compare those boundaries with createdAt, updatedAt, and status. Mark missing semantics rather than borrowing similar names.',
        'Calculate both intervals in the example and explain why only one matches the intended quantity.',
        'Draft a proceed condition, a stopping result, and one narrower feature that remains honest if the assumption fails.',
      ],
      notice: 'The feasibility question exposes missing data before interface polish.',
      troubleshooting: 'If the check only asks whether a field exists, add what event sets it and whether later actions overwrite it.',
    },
    recall: {
      prompt: 'A proposal needs to identify who approved a change, but an API exposes only the most recent editor. What should be checked?',
      hint: 'Two roles can coincide in one example without meaning the same thing.',
      answer: 'Check for a documented approval event and approver. A later editor is not necessarily the approver. If approval evidence is unavailable, revise the feature instead of relabeling the editor.',
    },
    quiz: {
      question: 'A mockup uses hand-entered finish times absent from the supported API. What should its evidence note say?',
      options: [
        'The display handles supplied values; supported start and finish data still needs confirmation.',
        'The display is feasible, so updatedAt can stand in for finish time in the duration claim.',
        'The mockup establishes the duration feature; only pagination and permission checks remain.',
      ],
      correctIndex: 0,
      explanation: 'A display prototype tests presentation with supplied data. It cannot establish the availability or meaning of fields absent from the supported contract.',
    },
    takeaway: 'Test the meaning of a plan-breaking dependency before investing in its presentation.',
    sourceNote: 'Troubleshooting and launch references inform dependency checks. The API and timestamps are invented, not evidence about a real interface.',
  },
  {
    id: 'work-009',
    title: 'Keep the reason for a decision',
    outcome: 'Preserve the constraint behind a design choice and a concrete condition that would justify reconsidering it.',
    scene: 'A training catalogue uses a versioned manifest instead of a database.',
    sections: [
      {
        title: 'A choice outlives its conversation',
        paragraphs: [
          'A fictional training catalogue contains eight read-only equipment descriptions. The team stores them in a versioned manifest that is packaged with the site. Months later, a contributor asks why there is no database and concludes that the original design was shortsighted. The answer is missing from the code: the first version required offline reading, content changed through reviewed releases, and no browser editing was requested. Without those constraints, a later reader sees the solution but cannot reconstruct the question it answered.',
        ],
      },
      {
        title: 'Record the hinge, not every comment',
        paragraphs: [
          'A decision note keeps the question, alternatives, chosen option, decisive constraint, owner, and reopening condition together. The decisive constraint is the fact that tipped the choice, not a list of every advantage. Here a manifest meets offline delivery without introducing a running data service. A database could support edits, but that capability is outside the current requirement. Record known limitations too. The note should make it possible to disagree using changed evidence, rather than demand loyalty to the original choice or replay a long conversation.',
        ],
      },
      {
        title: 'Write a reversible explanation',
        paragraphs: [
          'Draft: "Question: how should catalogue descriptions ship? Options: versioned manifest or database-backed service. Decision: manifest, owned by the catalogue maintainer. Reason: the current release is read-only and must work offline; content changes already use review. Limit: each edit requires a release. Reconsider when approved users need browser editing or independent publication." That reopening condition is more useful than "review later." If browser editing arrives, the old note explains why a new decision is warranted. It does not prove a database is automatically best; the new constraints still need comparison. Keep the note near the design so it can be found before implementation starts.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'When the manifest argument applies',
        alt: 'Read-only offline delivery favors the manifest; browser editing introduces a new requirement and reopens the decision.',
        caption: 'Compare requirements, not the age of the design. The catalogue and its constraints are fictional.',
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
        'Write the catalogue decision using headings for question, options, choice, owner, and decisive constraint.',
        'Add the release-per-edit limitation and a reopening condition that can be recognized in a future request.',
        'Pretend browser editing is now required. Write which old assumption changed and which new comparison remains necessary.',
      ],
      notice: 'A future reader can distinguish changed requirements from an unexplained or careless original choice.',
      troubleshooting: 'If your reason is only "simpler," specify the service, workflow, or dependency the choice avoids.',
    },
    recall: {
      prompt: 'You chose a daily batch report because no reader needed live data. A live operations view is requested. What should the note contribute?',
      hint: 'Preserve the original freshness requirement and identify the changed one.',
      answer: 'It should explain that daily freshness previously met the task, name the owner, and identify live decisions as a reopening condition. The new request changes the problem; it does not by itself prove the earlier batch design was wrong.',
    },
    quiz: {
      question: 'A decision note says "use a manifest because it is better." Which addition most improves later reassessment?',
      options: [
        'A fuller list of features that a database could support.',
        'The final vote without the constraints that influenced it.',
        'The read-only constraint and the editing requirement that would reopen the choice.',
      ],
      correctIndex: 2,
      explanation: 'The constraint explains the choice and its limits. A feature list or vote does not establish when that reasoning still applies.',
    },
    takeaway: 'Keep the reason a choice fit then, and the condition that would make it worth revisiting.',
    sourceNote: 'Simplicity and review references inform design trade-offs. The decision-note format is an original heuristic, not a claim that requirements stay fixed.',
  },
  {
    id: 'work-010',
    title: 'Include the upkeep in an automation proposal',
    outcome: 'Compare manual work with automation using build effort, recurring review, maintenance, and an exception owner.',
    scene: 'A junior engineer proposes a read-only inventory summary and models its first month of effort.',
    sections: [
      {
        title: 'The removed clicks are only one cost',
        paragraphs: [
          'You propose a script that assembles a weekly inventory summary. The manual sequence is repetitive, so removing it sounds like an immediate saving. Yet the script needs input validation, someone to review unexpected rows, and an owner when the source format changes. Start by documenting the current procedure and its exceptions. A repeatable process with a clear result is easier to automate honestly than one whose rules live only in the memory of the person doing it. Fewer clicks do not establish lower total effort.',
        ],
      },
      {
        title: 'Keep setup and recurring effort separate',
        paragraphs: [
          'Consider a hypothetical four-run month. Manual work takes 12 minutes per run, so the model contains 48 minutes. Automation requires 90 minutes to build, 3 minutes of review per run, and 20 minutes of monthly maintenance. First-month effort is 90 + 12 + 20 = 122 minutes. Later months would be 32 minutes if those assumptions hold, versus 48 manually. The modeled difference is 16 minutes per later month, not an observed saving. Exception volume, format changes, and testing needs could change that comparison.',
        ],
      },
      {
        title: 'Propose ownership with the happy path',
        paragraphs: [
          'Write: "First version generates a read-only summary for human review. The inventory maintainer owns schema changes. Unknown columns produce an incomplete-result warning rather than silently dropping data. A reviewer uses the documented manual procedure when validation fails."',
          'This defines what happens when automation cannot produce a trustworthy result. Permissions and tests belong in the proposal even if the script only reads. Decide whether the modeled benefit, consistency, or learning value justifies the work, then collect observations before claiming savings. If exceptions dominate, improving the manual instructions may be the more useful first deliverable.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four-run month: modeled minutes',
        alt: 'Manual work totals 48 minutes; first-month automation totals 122 minutes including build, review, and maintenance.',
        caption: 'All times are hypothetical. Setup is included once; recurring review and maintenance remain after the first month.',
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
        'Copy the four-run assumptions and calculate manual, first-month automated, and later-month effort separately.',
        'Underline which numbers are hypothetical rather than measured savings.',
        'Write an owner and failure response for an unexpected input column in the summary.',
        'Draft a proposal sentence identifying one observation needed before recommending wider use.',
      ],
      notice: 'The cost comparison includes ongoing human work, and a failed run has an owner and fallback.',
      troubleshooting: 'If the model counts only execution time, add review, maintenance, and the one-time development effort.',
    },
    recall: {
      prompt: 'An automated report is fast, but every result requires manual correction. What must change in the proposal assessment?',
      hint: 'Correction is part of operating the automation, not work outside the comparison.',
      answer: 'Include correction and validation effort per run, investigate the recurring exception, and compare the complete workflow with the manual baseline. A fast script alone does not establish a useful saving or justify automatic downstream actions.',
    },
    quiz: {
      question: 'Using this model, what is the justified statement about the first month?',
      options: [
        'Automation uses 74 more modeled minutes than manual work because setup and upkeep count.',
        'Automation saves 36 minutes because only the removed manual work matters.',
        'Automation saves 16 minutes immediately because later-month costs apply from the start.',
      ],
      correctIndex: 0,
      explanation: '122 minus 48 is 74 extra modeled minutes. The 16-minute difference applies only to later months under unchanged assumptions.',
    },
    takeaway: 'Evaluate the complete operating workflow, not just the step a script replaces.',
    sourceNote: 'Eliminating Toil and launch guidance inform lifecycle planning. The arithmetic is a hypothetical cost model, not measured savings or a universal automation threshold.',
  },
  {
    id: 'work-011',
    title: 'Use boundary examples to settle acceptance',
    outcome: 'Turn a vague validation request into concrete accepted, rejected, and undecided cases.',
    scene: 'A settings form needs an agreed rule for a port field and its empty value.',
    sections: [
      {
        title: 'Validate is not a complete requirement',
        paragraphs: [
          'A fictional settings form currently stores port 443. The request says "validate the port." You and the requester agree, then discover different expectations when the field is empty: you planned to restore a default, while they expected to keep the existing value. Neither interpretation follows from the word validate. A boundary example is a concrete input near a rule change, such as empty instead of present or just above a permitted maximum. It exposes the decision that broad language leaves hidden.',
        ],
      },
      {
        title: 'Specify output and preserved state',
        paragraphs: [
          'For this exercise, the proposed form contract accepts whole-number text from 1 through 65535. That is the form requirement, not a rule for every networking interface. Input 443 is valid; 44x is not whole-number text; 65536 exceeds the maximum. For a rejected input, define both the visible error and what must not happen: stored port 443 remains unchanged. Otherwise two implementations could both show an error while one also clears the setting. Empty input is still undecided until the owner chooses its meaning.',
        ],
      },
      {
        title: 'Agree before encoding the assumption',
        paragraphs: [
          'Send: "Proposed acceptance: 443 saves as 443; 44x and 65536 show validation errors without changing the saved port. For empty input, should Save preserve 443, restore a default, or require an entry? Please confirm before implementation." After confirmation, replace the question with the chosen outcome and add tests around the lower and upper bounds. These examples do not claim exhaustive coverage: spaces, leading zeros, and pasted symbols may need separate decisions. They establish a shared starting contract. A test is useful evidence only after its expected result represents the behavior actually agreed.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four inputs before implementation',
        alt: '443 is accepted, empty needs a decision, 44x is malformed, and 65536 exceeds the proposed maximum.',
        caption: 'These are proposed rules for a fictional form. Rejected entries preserve the previously stored port 443.',
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
        'Make an input-and-outcome table for 443, empty, 44x, and 65536 using the proposed form contract.',
        'Add a saved-state column, preserving 443 for the rejected cases.',
        'Write the empty-input decision request without choosing an answer on behalf of the owner.',
        'Add 0, 1, and 65535 to test both numeric boundaries; mark 0 rejected and the other two accepted.',
      ],
      notice: 'The table separates agreed rules from an unresolved product decision and includes the state after rejection.',
      troubleshooting: 'If an outcome only says error, specify which value remains stored and which input the error concerns.',
    },
    recall: {
      prompt: 'A profile update allows an optional biography. How would you clarify the difference between an omitted field and an empty string?',
      hint: 'An update can mean leave unchanged or replace, depending on the contract.',
      answer: 'Provide an existing biography and ask for the stored result after an omitted field versus an explicit empty string. Confirm whether empty clears it and omission preserves it. Do not infer either behavior from the word optional alone.',
    },
    quiz: {
      question: 'A validator displays an error but also clears the previous value. Which acceptance detail would expose that mismatch?',
      options: [
        'A requirement that error text be concise.',
        'A list of valid values without rejected cases.',
        'The required stored state after a rejected input.',
      ],
      correctIndex: 2,
      explanation: 'Post-rejection state is part of behavior. Message wording and valid examples alone do not specify whether existing data must survive.',
    },
    takeaway: 'Use boundary cases to agree on behavior before a test or implementation silently chooses it.',
    sourceNote: 'The inherited review guidance addresses intended behavior and edge cases. The port form contract is fictional and not a general network configuration prescription.',
  },
  {
    id: 'work-012',
    title: 'Write non-goals with a destination',
    outcome: 'Set a scope boundary without dropping required correctness work or losing a worthwhile follow-up.',
    scene: 'A download-button wording change attracts a request for a new PDF export.',
    sections: [
      {
        title: 'A nearby idea is not always part of the fix',
        paragraphs: [
          'A training portal button says "Get file," although it always downloads CSV. Your task is to make the output format clear by changing the wording to "Download CSV." During review, someone suggests adding a PDF export too. The suggestion is related to downloading, but it creates a different behavior, layout, and testing problem. A non-goal names that boundary. It should explain why the current deliverable remains complete without the extra feature, rather than sounding as though useful feedback is unwelcome.',
        ],
      },
      {
        title: 'Separate independent work from required evidence',
        paragraphs: [
          'The wording change still needs verification: the visible label and accessible name should identify CSV, the control should remain usable with a keyboard, and the existing download should still work. Calling those checks non-goals would exclude evidence needed for the promised change. By contrast, designing PDF output can be discussed independently. This distinction follows behavior, not convenience or line count. Ask whether omitting the work would make the stated acceptance false. If yes, it belongs in delivery or requires renegotiating that acceptance.',
        ],
      },
      {
        title: 'Give the excluded idea a next home',
        paragraphs: [
          'Write: "This change identifies the existing CSV download accurately. PDF export is not included because it needs its own output requirements and layout decisions. Capture that request in a separate proposal for the export owner. Keyboard use, accessible naming, and CSV download verification remain in this change." The destination need not promise implementation. It can be a question for the relevant owner, a deferred proposal, or an explicit rejection with a reason. Record which it is. That lets a reviewer accept a coherent small change while keeping the larger question visible instead of burying it in a closed discussion.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'CSV label fix versus PDF feature',
        alt: 'The label fix includes accessible naming and download checks; PDF export needs a separate requirements proposal.',
        caption: 'Inspect whether each item establishes the promised label change or creates a different deliverable.',
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
        'Write the CSV label deliverable and three checks that make its acceptance observable.',
        'Draft a PDF non-goal explaining why the label change works without PDF generation.',
        'Give the PDF request an owner role and destination, explicitly marking it proposed rather than committed.',
      ],
      notice: 'The current change has complete acceptance evidence, while the related idea remains available for a separate decision.',
      troubleshooting: 'If your non-goal excludes testing the changed behavior, either restore the check or renegotiate the promised behavior.',
    },
    recall: {
      prompt: 'A spelling correction in an onboarding email attracts a request to redesign the mail-delivery system. What boundary would you write?',
      hint: 'Keep delivery verification for the correction, but distinguish a new architecture.',
      answer: 'State that the corrected wording and its rendering are included, while a delivery-system redesign needs separate reliability and ownership requirements. Route that idea to the mail-system owner rather than promising it or using it to avoid checking the correction.',
    },
    quiz: {
      question: 'Which non-goal is defensible for a control-label change?',
      options: [
        'Exclude checking its accessible name to keep the patch small.',
        'Defer an independent output format to a separately owned proposal.',
        'Exclude confirming which file the relabeled control downloads.',
      ],
      correctIndex: 1,
      explanation: 'A new output format can be scoped separately. The accessible name and actual download establish whether the existing control is labeled correctly.',
    },
    takeaway: 'Exclude independent deliverables, not the checks that make the current promise true.',
    sourceNote: 'Small-change and review references support coherent scope with tests. This non-goal wording is an original planning example, not a rule to dismiss related risks.',
  },
  {
    id: 'work-013',
    title: 'Treat dependencies as agreements',
    outcome: 'Describe a dependency by its required artifact, acceptance, owner, and planning consequence.',
    scene: 'A consumer test waits for a provider to confirm a fictional job-status response.',
    sections: [
      {
        title: 'Waiting on a team hides the missing object',
        paragraphs: [
          'You are writing a job-status screen and report "waiting on the API team." That statement does not reveal whether you need access, a schema decision, or working code. In this fictional case, the missing artifact is an agreed sample response for a queued job. Your screen cannot decide whether error is absent, null, or a string. The provider saying "almost finished" does not settle that contract. Name the object that must arrive before naming the team whose work you are waiting for.',
        ],
      },
      {
        title: 'Define what counts as arrival',
        paragraphs: [
          'A dependency agreement contains an artifact or decision, an owner, an acceptance condition, and the date that matters to the receiving work. An email attachment is not necessarily an accepted artifact. The consumer must be able to use it for the blocked step. Here the sample needs a schema version, a queued state, and a confirmed meaning for error. The requested date is a coordination proposal until the provider agrees. Keep effort you control separate from external waiting; otherwise a coding estimate can disguise an unresolved delivery dependency.',
        ],
      },
      {
        title: 'Ask for a usable handoff',
        paragraphs: [
          'Draft: "For the consumer test, please confirm a versioned queued-job sample with status queued and error null meaning no error recorded. Could the API contract owner agree this by Tuesday 14:00? Without it, the queued-state integration test remains blocked. I can finish the static screen against a labeled synthetic fixture meanwhile." If the owner chooses a different representation, update the consumer expectation rather than treating your draft as the contract. When the date changes, explain which test or demonstration moves.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'From sample to accepted dependency',
        alt: 'The provider supplies a versioned sample, the consumer checks queued and null-error meanings, and both confirm the contract.',
        caption: 'This fictional handoff separates receiving a file from agreeing that it supports the consumer test.',
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
        'Replace "waiting on the API team" with the exact sample and semantic decision needed.',
        'Add the owner role, proposed Tuesday checkpoint, and condition for accepting the sample.',
        'Name the blocked test and one independent task using a clearly labeled synthetic fixture.',
        'Draft an update for a missed checkpoint without blaming the provider or inventing a new agreement.',
      ],
      notice: 'Someone can tell what must arrive and which planned outcome changes if it does not.',
      troubleshooting: 'If the dependency ends at "sample received," add the consumer check that makes the sample usable.',
    },
    recall: {
      prompt: 'A designer promises icons, but your release needs attribution information as well as image files. What belongs in the dependency?',
      hint: 'Define the complete artifact needed for acceptance, not only the visible asset.',
      answer: 'Request the agreed icon formats, usage rights and attribution record, an owner, and the date needed for packaging. Receipt of images alone does not complete the dependency if release acceptance also requires verified licensing information.',
    },
    quiz: {
      question: 'A provider sends an example response without explaining whether a missing field differs from null. What is the dependency state?',
      options: [
        'Received but not yet accepted for the consumer contract.',
        'Complete because a response-shaped artifact arrived.',
        'Treat omission as equivalent to null and finish the consumer test against that assumption.',
      ],
      correctIndex: 0,
      explanation: 'The artifact exists, but the blocked semantic decision remains. Request the missing clarification rather than declaring completion or rejecting future agreement.',
    },
    takeaway: 'A dependency is complete when its agreed output is usable, not when somebody reports activity.',
    sourceNote: 'Launch and small-change references inform coordination and interfaces. The dependency record is an original heuristic; proposed dates are not external delivery guarantees.',
  },
  {
    id: 'work-014',
    title: 'Slice work by a complete behavior',
    outcome: 'Split a feature into reviewable behaviors with tests and valid intermediate states.',
    scene: 'A report viewer grows from a saved fixture to filtering and then remote loading.',
    sections: [
      {
        title: 'One file can still be half a feature',
        paragraphs: [
          'You plan a report viewer with a table, a status filter, and remote loading. Splitting the work into "types first, rendering second, tests later" makes the patches look small, but the first patches may not demonstrate any usable behavior. A reviewer must imagine the missing consumer and future tests. A useful slice is instead a complete behavior that can be understood and checked on its own. It can cross several files while remaining conceptually smaller than a one-file interface change with unfinished consequences.',
        ],
      },
      {
        title: 'Keep the evidence with the behavior',
        paragraphs: [
          'Begin with a viewer that renders a saved synthetic report containing one passed row and one failed row. Include its rendering and empty-report tests. Next add a filter whose passed setting displays only the passed row, while clearing it restores both. Remote loading comes later with loading and error states. Each slice has an input, an observable output, and a valid state before the next slice exists. The saved fixture is not evidence that networking works; it deliberately keeps that dependency outside the first behavior.',
        ],
      },
      {
        title: 'Check the state between slices',
        paragraphs: [
          'Write: "Slice A: render saved report, including empty state. Slice B: filter that report and restore all rows. Slice C: load reports through the supported interface, showing loading and failure without losing the last valid view." Record that B depends on A and C reuses their tested behavior. Before accepting the sequence, ask what happens after only A is merged. If users encounter a broken Load button, A is not a valid intermediate release; hide or defer that unfinished control.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Three independently checkable behaviors',
        alt: 'A saved two-row report renders, a passed filter narrows it to one row, and remote loading adds explicit loading and failure states.',
        caption: 'The sequence shows behavior dependencies, not estimated duration. Each step includes its own tests.',
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
        'Write one viewer slice per card, with its input and visible output.',
        'Add a test for the normal case and one boundary or failure case on each card.',
        'Order the cards by dependency and describe the usable application after only the first card is delivered.',
        'Remove or defer any control that requires an undelivered slice to work correctly.',
      ],
      notice: 'Each card makes a bounded claim that can be verified without pretending later work already exists.',
      troubleshooting: 'If a slice is named only after a file, rewrite it as what a reader or caller can now do.',
    },
    recall: {
      prompt: 'A form redesign is split into changing field names now and updating all callers next week. What should you inspect?',
      hint: 'Consider whether the application remains valid after the first change alone.',
      answer: 'Check whether callers still satisfy the changed contract. Keep necessary consumer updates together or introduce a compatible transition with its own tests. A short diff is not an acceptable slice if it leaves the application unable to use the fields.',
    },
    quiz: {
      question: 'Which first slice of a search feature is self-contained?',
      options: [
        'A new response type with no compatible caller until a later patch.',
        'A button that will acquire its action in the next release.',
        'Search over a fixed fixture with result and empty-state tests, without exposing unfinished remote loading.',
      ],
      correctIndex: 2,
      explanation: 'The fixture search demonstrates complete behavior in a valid intermediate state. The other options leave contracts or visible controls unfinished.',
    },
    takeaway: 'Split by testable behavior while preserving a valid system between changes.',
    sourceNote: 'Small CLs supports self-contained, understandable changes. The report slices are original examples, not a fixed file-count or patch-size formula.',
  },
  {
    id: 'work-015',
    title: 'Make a scope change an explicit trade-off',
    outcome: 'Respond to added work with concrete choices that preserve acceptance checks and an honest delivery agreement.',
    scene: 'A Friday project-search demo receives a request to include archived projects.',
    sections: [
      {
        title: 'A short request can change several obligations',
        paragraphs: [
          'Your fictional Friday demo searches active project names. A teammate asks, "Could it include archived projects too?" The sentence is short, but the behavior reaches beyond adding a checkbox. You need to confirm whether the interface returns archived records, how their status appears, and whether the same access rules apply. Accepting immediately while keeping every earlier promise hides those questions. The goal is not to argue that all additions are expensive. It is to explain what this addition changes in the deliverable and its evidence.',
        ],
      },
      {
        title: 'Identify the work created by the request',
        paragraphs: [
          'A scope change alters required behavior, so it can add implementation, validation, review, or dependency work. List the specific changes before estimating their duration. Here archived results need a visible status and tests that active-only search still behaves as agreed. Permission handling cannot be dropped to preserve a demo date. Some existing work might be exchanged for the new behavior, but that trade belongs to the person authorized to set priorities. Your role is to expose options and uncertainties rather than silently decide whose requirement disappears.',
        ],
      },
      {
        title: 'Offer choices without inventing a date',
        paragraphs: [
          'Reply: "The current Friday demo covers active projects. Archived search adds an interface check, status labeling, and access and regression tests. We can keep Friday active-only and assess archived search separately, or replace the planned sorting enhancement and revise the forecast after the interface check. Which outcome should the project owner prioritize?" You have not guaranteed that swapping sorting buys exactly enough time. Record the selected option and update acceptance and status notes together. If the addition is mandatory, say which forecast assumptions need review.',
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'An addition becomes a choice',
        alt: 'A requester asks for archived search; the developer explains added checks; the requester chooses active-only Friday and a separate assessment.',
        caption: 'A fictional exchange. The owner chooses scope; the developer does not promise that an unestimated addition is free.',
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
        'State the current active-project demo acceptance and the requested archived behavior separately.',
        'List the interface, labeling, access, and regression work introduced by the addition.',
        'Draft two choices for the project owner without promising an untested completion date.',
        'Choose a fictional response and rewrite the delivery note so it matches that decision.',
      ],
      notice: 'The new request changes an explicit agreement rather than silently consuming testing or review time.',
      troubleshooting: 'If every option keeps all scope and the same date, expose the missing estimate instead of implying free capacity.',
    },
    recall: {
      prompt: 'A documentation handoff gains a request for a translated edition. How could you respond without dismissing it or absorbing it silently?',
      hint: 'Translation introduces review and ownership beyond copying the original text.',
      answer: 'Restate the current language and handoff, name translation and language-review work, and ask whether to defer, swap scope, or revise delivery. Keep accuracy checks intact and confirm who can approve the translated edition.',
    },
    quiz: {
      question: 'A requested scope swap might fit, but its key dependency is untested. What should the response say?',
      options: [
        'The swap guarantees the original date because one feature replaces another.',
        'Offer the swap conditionally and name the check needed to revise the forecast.',
        'Accept the swap now and mention the dependency only if it later fails.',
      ],
      correctIndex: 1,
      explanation: 'A one-for-one feature count does not establish equal effort. The conditional option exposes the unknown before it becomes a hidden commitment.',
    },
    takeaway: 'Additional behavior needs an agreed change to scope, timing, or priorities, with correctness checks preserved.',
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