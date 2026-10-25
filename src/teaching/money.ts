import type { LessonGuide } from './types'

// Original teaching in illustrative currency-neutral units, not product advice.
// Omit sources deliberately: each ID inherits its exact existing source records.
export const moneyGuides: LessonGuide[] = [
  {
    id: 'money-001',
    outcome: 'Test a fee waiver against the balance measurement it actually requires.',
    scene: 'A salary account dips below its threshold when rent leaves.',
    sections: [
      {
        title: 'The balance after rent',
        paragraphs: [
          "Your account ends the month with 800 units, yet an 8-unit monthly fee appears. The advertisement said the fee could be waived. Before assuming an error, look at what the waiver measures. In this hypothetical account, the condition is a daily closing balance of at least 500 throughout the month. Rent left on the 12th, taking that day's closing balance to 400. A later salary payment repaired the balance, but it did not change what happened on the 12th.",
        ],
      },
      {
        title: 'Minimum is different from average',
        paragraphs: [
          "A minimum is the lowest observation in the stated period. An average combines observations and divides by their count. A month-end balance is just one observation. These measurements answer different questions, so they cannot substitute for one another. Here, the minimum is 400, below the required 500, and the stated 8-unit fee applies. There is no need to calculate an average. If the contract instead required a qualifying salary deposit, you would need to check the deposit definition and amount, not infer eligibility from the balance.",
        ],
      },
      {
        title: 'Write a condition you can test',
        paragraphs: [
          "Turn the waiver into a sentence containing the measurement, threshold, period, and consequence. For this example: every daily closing balance must reach 500 during the month, otherwise the monthly charge is 8. Then identify the statement entries needed to test it. Check whether the agreement has alternative waiver routes, and whether either route alone is sufficient. A month between jobs can change eligibility even if last month's fee was zero. The useful result is a verified explanation of the charge, not a decision to open or close an account.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Two observations, one account',
      alt: 'The lowest daily balance is 400; the month ends at 800 units.',
      caption: 'Illustrative units. Inspect the daily minimum, because this waiver requires 500 every day.',
      items: [
        { label: '12th: after rent', detail: '400 units; below the 500-unit threshold.' },
        { label: 'Month end', detail: '800 units; does not erase the earlier dip.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Pen', 'The example above'],
      steps: [
        'Write four headings: measurement, threshold, period, and fee. Fill them from the example.',
        'Place 400 under lowest daily balance and 800 under closing balance.',
        'Circle the observation the condition requires, then write whether the fee applies.',
        'Draft one provider question about an alternative salary-deposit waiver without changing any account.',
      ],
      notice: 'Your explanation connects the 8-unit charge to the 400-unit daily minimum.',
      troubleshooting: 'If both balances seem relevant, underline the word daily in the condition before choosing the measurement.',
    },
    recall: {
      prompt: 'Another account waives a fee for a qualifying 1,000-unit deposit. Does an ending balance of 1,500 prove eligibility?',
      hint: 'Ask what event is measured, not what remains.',
      answer: 'No. The balance could contain older money. Check whether a deposit meeting the stated amount and qualifying definition arrived within the required period.',
    },
    quiz: {
      question: 'The waiver requires 500 every day. Which record resolves the 8-unit charge?',
      options: ['The month-end 800 balance', 'The lowest daily balance of 400', 'The largest deposit that month'],
      correctIndex: 1,
      explanation: 'The minimum tests this condition. Month-end funds and a large deposit could coexist with a disqualifying daily dip.',
    },
    takeaway: 'Match the waiver to its exact measurement and period before judging a charge.',
    sourceNote: 'The inherited CFPB banking resource supplies background. These invented conditions are not universal account rules or legal protections.',
  },
  {
    id: 'money-002',
    outcome: 'Convert an annual percentage fee to money and keep separate charges visible.',
    scene: 'Two fictional fee sheets use percentages beside small flat charges.',
    sections: [
      {
        title: 'Put money beside the percentage',
        paragraphs: [
          "Two fictional investment fee sheets show annual charges of 0.5% and 1.5%. Neither percentage tells you an amount until you supply a balance and a period. For a deliberately simplified comparison, hold 10,000 units constant for one year. A percent means out of one hundred, so 0.5% becomes 0.005 when used as a multiplier. Multiplying 10,000 by 0.005 gives 50 units. The 1.5% charge uses 0.015 and produces 150 units on the same balance for the same year.",
        ],
      },
      {
        title: 'Recurring and separate costs',
        paragraphs: [
          "Suppose both sheets also list a separate 20-unit annual account charge. Their known annual costs become 70 and 170 units. The difference is 100 units, not one unit because the printed rates differ by one percentage point. A percentage point describes the difference between percentages; money depends on the balance underneath. Keep transaction or exit charges on separate lines with their triggers. If a quoted total already includes a charge, do not add it again. An unknown charge is not the same as zero.",
        ],
      },
      {
        title: 'A comparison, not a forecast',
        paragraphs: [
          "Real balances move, and charges can be deducted throughout the year rather than as one visible bill. Some fund expenses are reflected in the value of your holding. They need not appear as a separate bank payment to cost you money. This example freezes the balance to make the conversion legible; it does not predict returns or identify a suitable investment. Fees can reduce what remains even in a losing year. Before interpreting a published performance figure, check whether it already accounts for the costs you are considering.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Known annual costs', unit: 'units',
      alt: 'The 0.5% option costs 70 units; the 1.5% option costs 170.',
      caption: 'Illustrative constant 10,000-unit balance. Each bar includes a separate 20-unit charge, with no other costs.',
      items: [
        { label: '0.5% plus 20', detail: '50 + 20 = 70 units.', value: 70 },
        { label: '1.5% plus 20', detail: '150 + 20 = 170 units.', value: 170 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Calculator', 'Paper'],
      steps: [
        'Write a constant 5,000-unit balance, a 0.8% annual charge, and a separate 10-unit annual fee.',
        'Divide 0.8 by 100, then multiply the result by 5,000.',
        'Add the separate fee and label the result known annual cost, excluding other charges.',
        'Repeat at 10,000 units to see which cost changes and which stays fixed.',
      ],
      notice: 'The totals are 50 and 90 units; the flat charge stays 10.',
      troubleshooting: 'If the first percentage charge is 4,000, divide the percentage by 100 before multiplying.',
    },
    recall: {
      prompt: 'A 2,000-unit holding has a 1% annual charge and a separate 15-unit fee. What is its simplified annual cost?',
      hint: 'Calculate the percentage part before adding the flat part.',
      answer: 'Twenty plus fifteen equals 35 units, assuming the balance stays constant and neither charge includes the other.',
    },
    quiz: {
      question: 'What is 0.5% of a constant 10,000-unit balance, before other charges?',
      options: ['50 units', '5 units', '500 units'],
      correctIndex: 0,
      explanation: '10,000 multiplied by 0.005 equals 50. The other answers move the decimal place incorrectly.',
    },
    takeaway: 'Compare amounts on the same balance and period, with every separate fee identified.',
    sourceNote: 'Investor.gov explains fund expenses and their effect on returns. Its inherited page was checked; the fee sheets here are fictional.',
  },
  {
    id: 'money-003',
    outcome: 'Compare recipient money and arrival dates using the same sender outlay.',
    scene: 'A shared accommodation payment needs conversion into another currency.',
    sections: [
      {
        title: 'Start with the same spending limit',
        paragraphs: [
          "You are comparing two hypothetical ways to send a shared accommodation payment. You can spend exactly 100 sender units, including fees. Quote A has no transfer fee and converts each sender unit into 8 recipient units. Quote B charges 4 sender units from that same budget and converts the remaining money at 8.5 recipient units per sender unit. Comparing the zero-fee banner with the 4-unit charge alone would miss the exchange rate. The rate describes how much of the destination currency one source unit buys.",
        ],
      },
      {
        title: 'Trace what actually arrives',
        paragraphs: [
          "Under A, all 100 sender units are converted: 100 times 8 equals 800 recipient units. Under B, only 96 are converted: 100 minus 4 equals 96, and 96 times 8.5 equals 816. B delivers 16 more recipient units for the same total spending. Do not subtract a sender-currency fee from a recipient-currency result without converting it. This example assumes there are no receiving-bank or intermediary deductions. If those deductions are unknown on a real quote, label the recipient total uncertain instead of quietly assuming none.",
        ],
      },
      {
        title: 'Money must arrive in time',
        paragraphs: [
          "The quotes also estimate arrival in one day for A and three days for B. If the accommodation payment is due tomorrow, the larger total does not resolve the deadline problem. An estimate is not a promise, so check cutoffs, business days, and whether recipient funds are usable on arrival. Capture quotes at roughly the same time because exchange rates can move. A useful comparison records total paid, currency received, expected timing, and unresolved deductions. It does not rank providers from a fee label or assume identical transfer rights everywhere.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Same 100-unit sender budget', unit: 'recipient units',
      alt: 'Quote A delivers 800 recipient units; quote B delivers 816.',
      caption: 'Illustrative exchange rates, with no receiving deductions. Inspect arrival timing as well as bar length.',
      items: [
        { label: 'A: no transfer fee', detail: '100 x 8 = 800; arrival estimate one day.', value: 800 },
        { label: 'B: 4-unit sender fee', detail: '96 x 8.5 = 816; arrival estimate three days.', value: 816 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        'Draw columns for sender total, sender fee, amount converted, recipient amount, and arrival estimate.',
        'Enter both 100-unit quotes and calculate the amount left after each sender fee.',
        'Multiply by each exchange rate, labelling every result with its currency side.',
        'Add a tomorrow deadline and mark which arrival estimate fails it without sending money.',
      ],
      notice: 'The higher recipient amount and the faster estimated arrival belong to different quotes.',
      troubleshooting: 'If B costs 104 in your table, you added its fee outside the fixed sender budget.',
    },
    recall: {
      prompt: 'For 200 sender units, A converts all at 4; B deducts 10 then converts at 4.3. Which delivers more?',
      hint: 'Deduct B’s fee before conversion.',
      answer: 'A delivers 800 recipient units. B delivers 190 times 4.3, or 817. B delivers 17 more, but timing and further deductions still need checking.',
    },
    quiz: {
      question: 'Which total describes quote B in the accommodation example?',
      options: ['850 recipient units', '796 recipient units', '816 recipient units'],
      correctIndex: 2,
      explanation: 'The fee leaves 96 sender units to convert. Using 100 ignores it; subtracting four after conversion mixes currencies.',
    },
    takeaway: 'Equal sender spending makes rates and fees comparable; deadlines remain a separate constraint.',
    sourceNote: 'The inherited CFPB transfer page describes U.S. rights. This original comparison does not extend those rights to other jurisdictions.',
  },
  {
    id: 'money-004',
    outcome: 'Build a subscription exit record that distinguishes cancellation from deleting software.',
    scene: 'A photo-backup trial will renew after a short holiday project.',
    sections: [
      {
        title: 'The trial and the billing agreement',
        paragraphs: [
          "A hypothetical photo-backup trial starts on November 1, runs through November 14, and renews on November 15 at 12 units per month. You only needed it for a holiday project. Deleting the app on November 12 clears space on your phone, but it does not tell the billing service to end the subscription. The agreement could sit with the website, an app store, or another billing company. Start with the receipt: who took the order, and where does that company say cancellation happens?",
        ],
      },
      {
        title: 'Follow the route to confirmation',
        paragraphs: [
          "In this invented trial, the billing page says cancellation before renewal stops the next charge while access lasts through November 14. That is an example term, not a rule for every subscription. You submit cancellation on November 12 and save the resulting confirmation and access-end date. A page offering a discount, a pause, or a feedback survey might be an intermediate step rather than the final cancellation. Read the resulting subscription status. An email saying your request was received is weaker evidence than a status saying renewal is off.",
        ],
      },
      {
        title: 'Close the remaining loose ends',
        paragraphs: [
          "Before access ends, check which photos exist in another location and export anything you still need. Ending a subscription and preserving your files are separate tasks. Then review the next relevant statement for an unexpected charge, using the saved confirmation if you need to ask the billing service about it. Three unnoticed 12-unit renewals would total 36 units under this example price. That arithmetic explains why a follow-up is useful; it does not establish a refund right. Do not assume blocking a payment ends contractual obligations or that every cancellation takes effect immediately.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'Exit before the sample renewal',
      alt: 'Cancel November 12, preserve files by November 14, then check the November 15 renewal status.',
      caption: 'Illustrative dates and 12-unit price. Events are ordered, not drawn to a proportional time scale.',
      items: [
        { label: 'November 12', detail: 'Cancel with the biller; save confirmation.' },
        { label: 'November 14', detail: 'Sample access ends; needed photos already copied.' },
        { label: 'November 15', detail: '12-unit renewal should be off; verify billing.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'The sample trial terms'],
      steps: [
        'Make a mock subscription card with biller, price, renewal date, and cancellation route.',
        'Add a November 12 cancellation reminder and a place to record the final status.',
        'List which project files must remain accessible after November 14.',
        'Add a statement check after renewal; do not cancel an actual service for this exercise.',
      ],
      notice: 'Your card tracks billing, file access, and confirmation rather than just app removal.',
      troubleshooting: 'If the route ends at a discount screen, add a step to locate the final subscription status.',
    },
    recall: {
      prompt: 'A course is billed by an app store, but its website says your profile was deleted. What remains unverified?',
      hint: 'Identify who owns the billing agreement.',
      answer: 'The app-store subscription might still renew. Check its cancellation status and preserve needed course records before access disappears.',
    },
    quiz: {
      question: 'Which record best confirms the sample trial will not renew?',
      options: ['An empty phone home screen', 'The biller’s renewal-off confirmation', 'A support-request acknowledgement'],
      correctIndex: 1,
      explanation: 'A final billing status addresses renewal. App deletion and receipt of a support request do not establish completion.',
    },
    takeaway: 'End the agreement with its biller, preserve needed data, and verify later charges.',
    sourceNote: 'The inherited FTC subscription resource supports cancellation checks. The dates, price, and access rules here are invented, not universal rights.',
  },
  {
    id: 'money-005',
    outcome: 'Separate money received, scheduled repayments, and mandatory fees in a loan comparison.',
    scene: 'A replacement appliance is offered through two fictional borrowing agreements.',
    sections: [
      {
        title: 'What leaves after the appliance arrives',
        paragraphs: [
          "An essential appliance needs replacing, and a hypothetical agreement provides 1,000 units. Its payment headline is 90 units per month. That number describes a recurring payment, not the whole price of borrowing. The schedule has twelve payments, so they total 12 times 90, or 1,080 units. A mandatory setup fee of 30 is paid separately at the start and is not included in those payments. Total outlay is therefore 1,110. Against the 1,000 received, the borrowing cost is 110 under these stated conditions.",
        ],
      },
      {
        title: 'Keep the comparison aligned',
        paragraphs: [
          "A second fictional agreement provides the same 1,000 units for twelve monthly payments of 92, with no separate fee. Its outlay is 1,104 units. Despite the larger monthly payment, its known total is six units lower. This does not settle affordability: an extra two units on each payment date could still matter to a tight budget. Nor does it describe either product outside this example. Compare the amount actually received, all payment dates, mandatory charges, and repayment duration before treating two offers as equivalent.",
        ],
      },
      {
        title: 'Do not invent an annual rate',
        paragraphs: [
          "The 110-unit borrowing cost is 11% of the original 1,000 received, but that is not automatically an annual percentage rate. Repayments reduce what remains borrowed during the year, and rate disclosures follow defined timing and fee conventions. This lesson totals cash flows rather than calculating a regulated rate. If a setup fee is deducted before funds arrive, the amount received changes. If the published repayment total already includes it, adding it again overstates the cost. Mark optional and late charges separately instead of assuming they are unavoidable or absent.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Twelve-payment outlays', unit: 'units',
      alt: 'Agreement A totals 1,110 units; agreement B totals 1,104.',
      caption: 'Illustrative agreements both deliver 1,000 units. Bars include all stated mandatory fees, not possible late charges.',
      items: [
        { label: 'A: 90 monthly', detail: '12 x 90 + 30 = 1,110 units.', value: 1110 },
        { label: 'B: 92 monthly', detail: '12 x 92 = 1,104 units.', value: 1104 },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Calculator', 'Paper'],
      steps: [
        'Write money received, payment count, payment amount, and separate fees for both agreements.',
        'Multiply count by amount, then add only charges outside the repayments.',
        'Subtract the 1,000 received from each total to find the stated borrowing costs.',
        'Circle the monthly payment separately so a lower total is not confused with easier cash flow.',
      ],
      notice: 'Borrowing costs are 110 and 104; A has the smaller monthly payment.',
      troubleshooting: 'If you get 140 for A, check whether you added its 30-unit setup fee twice.',
    },
    recall: {
      prompt: 'You receive 600 units, repay six lots of 110, and pay a separate 10-unit fee. What are outlay and cost?',
      hint: 'Cost excludes the amount originally received.',
      answer: 'Outlay is 660 plus 10, or 670. Borrowing cost is 670 minus 600, or 70 units. Neither total alone gives an annual rate.',
    },
    quiz: {
      question: 'A repayment total of 1,080 already includes a 30-unit setup fee. What is the stated outlay?',
      options: ['1,110 units', '1,050 units', '1,080 units'],
      correctIndex: 2,
      explanation: 'An included fee is neither added again nor removed. The wording of the total determines the calculation.',
    },
    takeaway: 'Total all required outflows once, then distinguish total cost from payment affordability.',
    sourceNote: 'Inherited CFPB credit and instalment sources provide background. These cash-flow examples are not APR calculations or borrowing recommendations.',
  },
  {
    id: 'money-006',
    outcome: 'Explain why second-year interest uses the first-year ending balance.',
    scene: 'A calculator projection is rebuilt as a two-year ledger.',
    sections: [
      {
        title: 'Rebuild the first year',
        paragraphs: [
          "A calculator shows a smooth rising balance, but the picture does not explain what happens between its points. Start with a fictional 1,000 units and an exactly 5% annual interest rate, credited once at each year end. No money is added or withdrawn, and there are no fees or taxes. Five percent means five per hundred: 1,000 times 0.05 is 50. Crediting that interest changes the balance to 1,050. The original deposit is often called principal; the 50 is interest earned on it.",
        ],
      },
      {
        title: 'The second calculation has a new base',
        paragraphs: [
          "Compounding means the earlier interest stays in the balance used for later interest. Year two therefore starts with 1,050, not 1,000. Multiplying 1,050 by 0.05 produces 52.50, leaving 1,102.50 after the credit. You can split the second interest payment into 50 on the original deposit and 2.50 on the previous interest. That small extra amount is the mechanism, not a bonus outside the stated rate. Multiplying a balance by 1.05 combines keeping the whole balance with adding another five percent of it.",
        ],
      },
      {
        title: 'Compare with taking the interest out',
        paragraphs: [
          "If each 50-unit annual interest payment were removed and held separately without earning anything, the account would keep a 1,000-unit base. After two years, account plus removed interest would total 1,100, rather than 1,102.50. The difference comes from where the interest stayed. In real calculations, contribution dates, withdrawals, compounding frequency, charges, and changing rates alter the result. A calculator asks for assumptions; it cannot establish that an investment will produce a chosen rate. Reproducing two periods by hand helps you inspect those assumptions before trusting a longer curve.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'Two annual interest credits',
      alt: '1,000 becomes 1,050 after one year and 1,102.50 after two.',
      caption: 'Illustrative units at exactly 5% annually. No cash movements, fees, or taxes; timeline spacing is schematic.',
      items: [
        { label: 'Start', detail: '1,000 units; original principal.' },
        { label: 'Year 1 end', detail: '1,000 + 50 = 1,050 units.' },
        { label: 'Year 2 end', detail: '1,050 + 52.50 = 1,102.50 units.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Calculator', 'Paper'],
      steps: [
        'Draw columns for opening balance, interest, and closing balance, with two yearly rows.',
        'Enter 1,000 and calculate five percent; add it to obtain the first closing balance.',
        'Copy that closing balance into the second opening row and repeat the calculation.',
        'Underline the 2.50 difference from two separate 50-unit interest payments.',
      ],
      notice: 'Year two earns 52.50 because its starting balance already includes 50 of interest.',
      troubleshooting: 'If both interest entries are 50, check that you carried the first closing balance forward.',
    },
    recall: {
      prompt: 'A fictional 2,000 units earns exactly 3% annually with interest retained. What is the second-year interest?',
      hint: 'Find the first-year closing balance before applying 3% again.',
      answer: 'Year one ends at 2,060. Three percent of 2,060 is 61.80, so year two ends at 2,121.80 under the same exclusions.',
    },
    quiz: {
      question: 'What does 52.50 represent in the 1,000-unit example?',
      options: ['Second-year interest only', 'Interest across both years', 'Interest on the original deposit only'],
      correctIndex: 0,
      explanation: 'The second year earns 52.50. Both years total 102.50; the original deposit alone earns 50 each year.',
    },
    takeaway: 'Carry each closing balance forward before calculating the next period of compound interest.',
    sourceNote: 'The inherited Investor.gov calculator was checked for inputs and compounding frequency. The fixed 5% path is arithmetic, not a return forecast.',
  },
  {
    id: 'money-007',
    outcome: 'Show how contribution timing changes a balance even when the contribution amount is identical.',
    scene: 'Two savings worksheets disagree because they place the same deposit on different dates.',
    sections: [
      {
        title: 'An identical deposit, a different interval',
        paragraphs: [
          "Two worksheets each include a 100-unit contribution, but one reports 110 at year end and the other reports 100. Assume a fictional fixed 10% annual return, credited at year end, with no starting money, fees, or taxes. The first worksheet places the contribution at the start of the year. It participates in the whole year's calculation and earns 10. The second places it immediately after the year-end credit. At that instant, it has earned nothing. The worksheets do not disagree about multiplication; they describe different timelines.",
        ],
      },
      {
        title: 'Write the order of operations',
        paragraphs: [
          "A contribution is new money you supply, not growth produced by the existing balance. When it arrives before a period starts, add it before multiplying. When it arrives after that period's interest is credited, add it afterward. For another illustration, begin with 200 units and use 5% for one year. Adding 100 at the start gives 300 times 1.05, or 315. Adding it at the end gives 200 times 1.05 plus 100, or 310. Both receive the same 100; five units differ because of timing.",
        ],
      },
      {
        title: 'Do not turn timing into a promise',
        paragraphs: [
          "Monthly additions need their own timing convention. A calculator might assume deposits at a particular point in each month; inspect its documentation rather than assuming every contribution receives a full year's interest. A contribution that arrives halfway through a real period requires the actual agreement's accrual rules, not whichever shortcut makes the ending balance larger. Also distinguish a planned transfer from one that actually occurred. These examples isolate timing using invented rates. They do not suggest moving money earlier when it is needed for bills or imply that uncertain returns will follow a steady path.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Where the 100 enters',
      alt: 'A start-of-year 100 becomes 110; a deposit after year-end interest remains 100.',
      caption: 'Illustrative 10% annual rate with no opening balance. Compare the deposit date, not just its amount.',
      items: [
        { label: 'Before the year', detail: '100 x 1.10 = 110 units at year end.' },
        { label: 'After interest', detail: '0 interest + 100 deposit = 100 units.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Calculator'],
      steps: [
        'Draw two timelines, both starting with 200 units and using 5% annual interest.',
        'Place a 100-unit contribution before the year on one and after interest on the other.',
        'Calculate 300 times 1.05, then separately calculate 200 times 1.05 plus 100.',
        'Label the five-unit difference as interest on the earlier contribution, not extra deposited money.',
      ],
      notice: 'You obtain 315 and 310 despite making the same 100-unit contribution.',
      troubleshooting: 'If both give 315, move the late contribution outside the multiplication brackets.',
    },
    recall: {
      prompt: 'A year ends with 420 units before a new 80-unit deposit. Can the deposit increase the interest already credited?',
      hint: 'Separate completed periods from future ones.',
      answer: 'No. The immediate new balance is 500, but the 80 arrived after that calculation. Its future interest depends on subsequent timing and terms.',
    },
    quiz: {
      question: 'With 200 growing 5%, then 100 deposited after interest, what is the ending balance?',
      options: ['315 units', '300 units', '310 units'],
      correctIndex: 2,
      explanation: 'Only 200 earns the completed year’s interest: 210 plus 100 equals 310. The 315 result assumes an earlier deposit.',
    },
    takeaway: 'Label when contributions occur before comparing calculator balances.',
    sourceNote: 'The inherited Investor.gov calculator shows contribution and frequency inputs. Deposit timing here is explicitly defined, not attributed to its undocumented defaults.',
  },
  {
    id: 'money-008',
    outcome: 'Calculate a recurring fee on its stated base and carry the reduced balance into the next year.',
    scene: 'A fictional investment statement charges a fee after each annual growth calculation.',
    sections: [
      {
        title: 'The fee has a place in the sequence',
        paragraphs: [
          "A fictional 1,000-unit balance grows exactly 5% before costs in one year. Immediately afterward, a fee removes 1% of that updated balance. Start with growth: 1,000 times 1.05 equals 1,050. Then calculate the fee: 1,050 times 0.01 equals 10.50. The closing balance is 1,039.50. Removing one percent means keeping 99%, so the same result is 1,000 times 1.05 times 0.99. There are no contributions, withdrawals, or taxes. These assumptions make the fee base and collection time visible rather than leaving them implicit.",
        ],
      },
      {
        title: 'Why five minus one is not exact here',
        paragraphs: [
          "Subtracting the printed rates gives 4%, suggesting 1,040. That shortcut applies the one-percent charge to the original 1,000, not to the stated post-growth 1,050. The fee is actually 50 hundredths of a unit larger. The combined multiplier is 1.0395, equivalent to a 3.95% increase on the opening balance in this model. Different fee timing would change that arithmetic. Many real fund charges are reflected continuously in values rather than collected by this simple annual sequence, so this example is not a reconstruction of an actual statement.",
        ],
      },
      {
        title: 'Carry the reduction forward',
        paragraphs: [
          "Repeat the same two multipliers on 1,039.50 for year two. The result is 1,080.56025, displayed as 1,080.56 units. Without the fee, two years at the illustrative 5% would produce 1,102.50. The displayed gap is 21.94 units. It includes direct charges and the growth no longer earned on previously removed money. Keep full calculator precision between periods and round displayed results at the end. Actual providers have their own rounding rules. Neither smooth path predicts investment performance, and a fee can still remove value when the underlying return is zero or negative.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'After two model years', unit: 'units',
      alt: 'Without fees the balance is 1,102.50; with the stated fee it is 1,080.56.',
      caption: 'Illustrative 5% growth, then 1% of each year-end balance. Displayed amounts are rounded, not promised returns.',
      items: [
        { label: 'No fee', detail: '1,000 x 1.05 x 1.05.', value: 1102.5 },
        { label: '1% after growth', detail: '1,000 x 1.0395 x 1.0395.', value: 1080.56 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Calculator', 'Paper'],
      steps: [
        'Write the exact order: starting balance, 5% growth, then 1% fee on the result.',
        'Calculate 1,000 times 1.05 times 0.99 and save the unrounded answer.',
        'Repeat both multipliers, then compare with 1,000 times 1.05 squared.',
        'Round the final balances to two decimals and label the 21.94-unit displayed gap.',
      ],
      notice: 'The fee changes both the current balance and the next year’s starting base.',
      troubleshooting: 'If year one is 1,040, calculate the fee on 1,050 rather than on 1,000.',
    },
    recall: {
      prompt: 'With zero growth, a 2,000-unit balance loses 1% to a fee at each year end. What remains after two years?',
      hint: 'Keep 99% twice; the second fee has a smaller base.',
      answer: '2,000 times 0.99 gives 1,980; another multiplication gives 1,960.20. Total removed is 39.80, not 40, under this model.',
    },
    quiz: {
      question: 'Why does the example end year one at 1,039.50 rather than 1,040?',
      options: ['The growth rate is rounded down', 'The fee uses the post-growth balance', 'The fee applies only to interest'],
      correctIndex: 1,
      explanation: 'One percent of 1,050 is 10.50. A 10-unit fee would use the wrong base.',
    },
    takeaway: 'Write the fee base and timing before combining rates or projecting later balances.',
    sourceNote: 'Inherited Investor.gov fund and compounding pages were checked. This annual fee model is original and deliberately simpler than real charging schedules.',
  },
  {
    id: 'money-009',
    outcome: 'Compare balance growth with the changing price of the same basket of purchases.',
    scene: 'A grocery-and-transport basket costs more when a saved balance is finally used.',
    sections: [
      {
        title: 'The balance and the basket',
        paragraphs: [
          "You set aside 100 units for a particular basket of groceries and transport. A year later, your fictional balance is 105, but exactly the same basket costs 103. The account number rose by five percent; prices rose by three percent. Those are separate comparisons, each using its own starting value of 100. To ask whether you can buy more, compare the new money with the new basket price. You can afford one basket and still have two units, not five, left over.",
        ],
      },
      {
        title: 'Convert money into baskets',
        paragraphs: [
          "Dividing 105 by 103 gives about 1.0194 baskets. You previously could afford exactly one. Subtract one and multiply by 100 to express the change as a percentage: about 1.94% more purchasing power. The denominator is the new basket price, 103, not the original price or the new balance. Subtracting three percent inflation from five percent balance growth gives a useful approximation of two percent, but it is not the exact ratio. Purchasing power means what money can buy, rather than how many currency units appear on a screen.",
        ],
      },
      {
        title: 'Keep the comparison honest',
        paragraphs: [
          "Use the same quantity and quality in both baskets. Replacing bus journeys with taxis changes the basket, so it does not isolate a price increase. A published inflation index covers a specified collection of purchases; your rent, food, and transport mix need not change at that exact rate. Likewise, a gross growth figure can overstate spendable money if fees or taxes still need subtracting. This example excludes those costs. The practical question is not whether the balance went up, but whether the money left after relevant costs covers the purchases you actually need.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'One year later', unit: 'units',
      alt: 'The balance is 105 units and the unchanged basket now costs 103.',
      caption: 'Illustrative amounts, both starting at 100. Divide balance by basket price; do not add their percentage changes.',
      items: [
        { label: 'Money available', detail: '105 units after 5% balance growth.', value: 105 },
        { label: 'Same basket', detail: '103 units after 3% price growth.', value: 103 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Calculator', 'Paper'],
      steps: [
        'Write an old balance and basket price of 200 each; change them to 204 and 210.',
        'Divide the new balance by the new basket price to find affordable baskets.',
        'Subtract one, multiply by 100, and describe the result in words as a purchasing-power change.',
        'Record that the basket is unchanged and fees and taxes are excluded from this exercise.',
      ],
      notice: 'Money increased, but affordable baskets fell to about 0.9714, a purchasing-power loss of 2.86%.',
      troubleshooting: 'If you get a gain, check that you divided money by price, not price by money.',
    },
    recall: {
      prompt: 'Money rises from 100 to 110 while the same basket rises to 120. Has purchasing power increased?',
      hint: 'More money can still buy fewer baskets.',
      answer: 'No. 110 divided by 120 is about 0.9167 baskets, so purchasing power fell about 8.33% from the original one basket.',
    },
    quiz: {
      question: 'Which is the exact ratio-based result for 105 units against a 103-unit basket, rounded?',
      options: ['About 1.94% more buying power', 'Exactly 2% more buying power', 'Exactly 5% more buying power'],
      correctIndex: 0,
      explanation: '105 divided by 103 minus one gives about 1.94%. Two percent is an approximation; five percent ignores prices.',
    },
    takeaway: 'Measure buying power with money divided by the price of an unchanged basket.',
    sourceNote: 'The inherited Investor.gov risk resource discusses inflation risk. These original basket calculations are illustrative, not an inflation forecast or personal index.',
  },
  {
    id: 'money-010',
    outcome: 'Track how unpaid interest changes the balance used for the next charge.',
    scene: 'A repair debt is traced across two hypothetical monthly billing periods.',
    sections: [
      {
        title: 'Interest becomes part of what is owed',
        paragraphs: [
          "A fictional repair debt starts at 1,000 units. In this teaching model, interest is exactly 1% each month and is added to the balance at month end. There are no fees, new purchases, or payments. Month one adds 1,000 times 0.01, which is 10 units. The new balance is 1,010. Adding unpaid interest to the amount used for future charges is called capitalising interest. It explains how the amount owed can rise even when nothing else is bought. The rate here is monthly, not annual.",
        ],
      },
      {
        title: 'Follow the next opening balance',
        paragraphs: [
          "Month two begins at 1,010. One percent is now 10.10, giving an ending balance of 1,020.10. The extra tenth of a unit comes from charging one percent on the previous 10-unit interest addition. Simply adding two lots of 10 would miss that change in the base. You can reproduce the balance with 1,000 times 1.01 times 1.01. Keeping opening balance, new interest, payments, and closing balance on separate lines shows why the number changed without treating every increase as new spending.",
        ],
      },
      {
        title: 'A payment changes the path',
        paragraphs: [
          "Now change one assumption: a 100-unit payment arrives immediately after month one's interest is added. The balance falls from 1,010 to 910. Month two then adds 9.10, leaving 919.10. Compared with no payment, the ending balance is 101 units lower: 100 from the payment and one from the smaller later interest charge. This is arithmetic under a defined sequence, not a real card statement estimate. Real agreements can use daily balances, different allocation rules, grace periods, and other charges. Never assume a statement must match this simplified monthly model.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'No-payment balance trail',
      alt: 'The debt moves from 1,000 to 1,010 to 1,020.10 units.',
      caption: 'Illustrative monthly capitalisation at 1%, with no other changes. Read each closing balance as the next opening balance.',
      items: [
        { label: 'Opening debt', detail: '1,000 units.' },
        { label: 'Month 1 end', detail: '10 interest added; 1,010 units owed.' },
        { label: 'Month 2 end', detail: '10.10 interest added; 1,020.10 units owed.' },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Calculator', 'Paper'],
      steps: [
        'Build the two monthly rows with no payments and label each interest charge.',
        'Copy the rows into a second column with a 100-unit payment just after month-one interest.',
        'Use 910 as the second opening balance in that column, then apply one percent.',
        'Compare 1,020.10 with 919.10 and split the difference into payment and avoided model interest.',
      ],
      notice: 'The same rate produces a smaller second charge when the starting debt is smaller.',
      troubleshooting: 'If the payment column ends at 920.10, you calculated interest before reducing the opening balance.',
    },
    recall: {
      prompt: 'A 500-unit debt compounds at a fictional 2% monthly with no payments. What is the second monthly charge?',
      hint: 'Month one changes 500 before month two starts.',
      answer: 'Month one adds 10, leaving 510. Month two adds 10.20, leaving 520.20. The second charge uses 510, not 500.',
    },
    quiz: {
      question: 'With no payments in the repair example, what is owed after two months?',
      options: ['1,020 units', '1,020.10 units', '1,010.10 units'],
      correctIndex: 1,
      explanation: 'Multiplying by 1.01 twice gives 1,020.10. Adding fixed interest amounts ignores the updated second-month base.',
    },
    takeaway: 'Unpaid interest can change the next charge; follow the agreement’s actual sequence.',
    sourceNote: 'Inherited compounding and credit resources provide background. Monthly capitalisation here is a model, not a universal borrowing rule or payment instruction.',
  },
  {
    id: 'money-011',
    outcome: 'Combine repeated underlying holdings before judging concentration.',
    scene: 'Two differently named fictional funds both hold a large position in Cedar.',
    sections: [
      {
        title: 'Two names do not mean two independent risks',
        paragraphs: [
          "A fictional holdings sheet lists 100 units in Fund A and 100 in Fund B. That looks like an even split. But a fund is a container holding other investments, so its name alone does not reveal the businesses your money depends on. Fund A has 80 units in Cedar and 20 in Harbor. Fund B has 60 in Cedar and 40 in Meadow. All three company names are invented. Looking inside the containers shows that a problem at Cedar could affect both fund balances at once.",
        ],
      },
      {
        title: 'Add the repeated exposure',
        paragraphs: [
          "Combine Cedar's 80 and 60 to get 140 units. Harbor accounts for 20 and Meadow for 40. These amounts total the original 200. Cedar therefore represents 140 divided by 200, or 70%, of the combined holdings. The denominator is the total across both funds, not the 100 in either individual fund. Exposure means the amount whose value is tied to a particular source of risk. Concentration means a large share depends on one source. Account or fund counts can hide that concentration when holdings overlap.",
        ],
      },
      {
        title: 'Look beyond repeated company names',
        paragraphs: [
          "Even without a repeated company, several holdings could depend on one industry, customer group, currency, or economic condition. Cedar might sell software while Harbor and Meadow do other work, but different labels alone do not prove their risks are independent. A holdings list is a starting point, not a complete risk model, and published lists can be dated or incomplete. Diversification spreads some exposures; it does not stop all holdings falling together in a broad market decline. This exercise teaches you to read concentration, not choose funds, set an allocation, or predict which company will perform well.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Inside both fictional funds', unit: 'units',
      alt: 'Combined exposure is Cedar 140, Harbor 20, and Meadow 40 units.',
      caption: 'Illustrative holdings totalling 200 units. Cedar’s 70% uses that combined denominator, not either 100-unit fund.',
      items: [
        { label: 'Cedar', detail: '80 in A + 60 in B.', value: 140 },
        { label: 'Harbor', detail: '20 in A only.', value: 20 },
        { label: 'Meadow', detail: '40 in B only.', value: 40 },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator', 'Two coloured pens, optional'],
      steps: [
        'Draw two 100-unit boxes and fill each with its stated Cedar, Harbor, and Meadow amounts.',
        'Mark both Cedar entries with the same symbol, then combine all entries by company.',
        'Check that combined amounts sum to 200 and calculate Cedar’s share using 200 underneath.',
      ],
      notice: 'Half the money in each fund still leaves 70% tied to one underlying company.',
      troubleshooting: 'If the company totals exceed 200, you probably counted the fund wrappers as additional holdings.',
    },
    recall: {
      prompt: 'A transport fund and an energy fund both rely heavily on the same battery manufacturer. What should you inspect?',
      hint: 'Different industry labels can share one underlying dependency.',
      answer: 'Inspect the manufacturer exposure inside both and its share of the combined total. Two fund labels do not make that common dependency disappear.',
    },
    quiz: {
      question: 'What best describes Cedar’s share of the two sample funds together?',
      options: ['140% because 80 plus 60 is 140', '50% because there are two funds', '70% because 140 of 200 units depends on Cedar'],
      correctIndex: 2,
      explanation: 'The combined denominator is 200. Adding percentages with separate denominators or counting containers does not measure combined exposure.',
    },
    takeaway: 'Count what the holdings depend on, not just the accounts or fund names.',
    sourceNote: 'Inherited Investor.gov fund and risk sources explain concentration and diversification. The holdings are fictional and are not an allocation recommendation.',
  },
  {
    id: 'money-012',
    outcome: 'Distinguish a displayed asset value from money usable before a bill’s deadline.',
    scene: 'A second-hand equipment sale cannot fund a bill before its proceeds clear.',
    sections: [
      {
        title: 'A value is not a payment method',
        paragraphs: [
          "You own equipment with an estimated resale value of 600 units and have a bill due on day three. It is tempting to count the equipment as money available for that bill. But someone must buy it, payment must complete, and the proceeds must reach a place from which you can pay. Liquidity describes how readily value becomes usable money, including delay and the price you give up to get it. A visible valuation is neither a buyer nor a commitment to pay that amount today.",
        ],
      },
      {
        title: 'Trace one complete route',
        paragraphs: [
          "Consider a fictional selling service. On day one you request a sale at the estimated 600. On day two, a buyer agrees to 590. The service completes settlement, meaning the agreed exchange of the item and payment, on day four. It then deducts a 2-unit transfer fee, with 588 becoming usable in your bank on day five. These are invented timings, not standard marketplace or investment rules. The final amount is 600 minus the 10-unit price concession minus the 2-unit fee. The bill deadline arrives before any of those proceeds are usable.",
        ],
      },
      {
        title: 'Ask available where and when',
        paragraphs: [
          "The word available can refer to different stages: available to list, available inside a service balance, or available to spend from your bank. Ask which one a screen means. Similar distinctions arise with investments, deposits requiring notice, and transfers subject to processing hours. Read restrictions and estimates without assuming every stage shares one timetable. An early withdrawal charge affects amount; a processing delay affects timing. Keep those two constraints separate. Knowing the route can reveal a funding gap, but it does not guarantee a buyer, make an estimated arrival certain, or justify selling an asset you need.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'From equipment to usable money',
      alt: 'A day-one sale request leads to 588 spendable units on day five, after a day-three bill.',
      caption: 'Illustrative route, not a settlement standard. Dates are ordered schematically; the bill falls before usable proceeds.',
      items: [
        { label: 'Day 1: request', detail: '600-unit estimated value; no buyer yet.' },
        { label: 'Day 2: agreed sale', detail: '590 units; proceeds not yet usable.' },
        { label: 'Day 4: settlement', detail: '590 units inside the service.' },
        { label: 'Day 5: bank arrival', detail: '590 less 2 fee = 588 usable units.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Pen'],
      steps: [
        'Sketch a fictional 800-unit item sold for 790, with a 5-unit transfer fee.',
        'Mark proceeds usable on day four and a bill due on day three.',
        'Write 785 beside the bank-arrival stage, not beside the sale request.',
        'Circle the timing gap and write one question about processing or withdrawal restrictions.',
      ],
      notice: 'The item has value, but the stated proceeds cannot meet the earlier deadline.',
      troubleshooting: 'If you marked the sale date as spendable, add settlement and transfer as separate stages.',
    },
    recall: {
      prompt: 'A deposit balance is 900 units, but withdrawal requires seven days’ notice. Can it automatically fund a bill tomorrow?',
      hint: 'A balance answers amount, not timing.',
      answer: 'No. The notice requirement conflicts with tomorrow’s deadline unless an actual documented alternative permits access. Check its costs and timing rather than assuming an exception.',
    },
    quiz: {
      question: 'Which figure belongs in the sample bill’s day-three cash plan?',
      options: ['No confirmed usable sale proceeds by that date', 'The 600-unit estimated resale value', 'The 590-unit agreed sale amount'],
      correctIndex: 0,
      explanation: 'Neither valuation nor an agreed sale completes the route to usable money. The example reaches that stage on day five.',
    },
    takeaway: 'Trace amount and timing all the way to a usable payment account.',
    sourceNote: 'Inherited banking and risk sources provide liquidity background. This equipment route is an original analogy, not any provider’s actual timetable.',
  },
  {
    id: 'money-013',
    outcome: 'Describe how a fixed payment deadline changes the consequences of a fall in value.',
    scene: 'A moving deposit and a flexible hobby trip have equal budgets but different deadlines.',
    sections: [
      {
        title: 'The same amount can have different jobs',
        paragraphs: [
          "Two fictional goals each need 800 units. One is a moving deposit due on November 10; missing it would disrupt a planned move. The other is a hobby trip with no booking yet and a date you can postpone. The amounts match, but the consequences of not having them do not. A goal includes a required amount, a date, flexibility, and what happens if it is missed. Describing only the desired amount hides the practical constraint that makes one shortfall harder to manage than another.",
        ],
      },
      {
        title: 'Apply one fall to both goals',
        paragraphs: [
          "Suppose the value assigned to each goal falls from 800 to 720 just before November 10. The loss is 80 units, which is 10% of the original 800. For the moving deposit, the available value is now 80 short of a fixed obligation. A possible recovery next year does not pay that bill on time. For the unbooked trip, postponement or a smaller plan might be possible. Neither response repairs the lost value, but flexibility changes whether you must use the money immediately at its reduced amount.",
        ],
      },
      {
        title: 'Write a constraint, not a prediction',
        paragraphs: [
          "A longer horizon means more time before use; it does not guarantee recovery or make losses harmless. Prices can remain lower, needs can change, and a supposedly flexible date can become fixed once you book. Write the deadline separately from your enthusiasm for an investment or a technology. Then ask whether a shortfall would require delaying the goal, finding other resources, or breaking an obligation. Mark uncertain future income as uncertain. This exercise identifies the conditions a decision must meet. It does not select where to keep money, recommend investments, or predict their returns.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'The same 80-unit loss',
      alt: 'Both 800-unit goals fall to 720, but only the moving deposit is due November 10.',
      caption: 'Illustrative values. The loss uses the original 800-unit base; deadline flexibility, not arithmetic, changes the consequence.',
      items: [
        { label: 'Moving deposit', detail: '800 due November 10; 720 available; 80 short.' },
        { label: 'Unbooked hobby trip', detail: '800 target; 720 available; date still flexible.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Calendar'],
      steps: [
        'Make two goal cards for the moving deposit and unbooked trip, each needing 800 units.',
        'Write the due date, date flexibility, and consequence of missing the amount on each card.',
        'Reduce each available amount to 720 and describe what the 80-unit gap would interrupt.',
        'Add one unanswered question about replacement resources without assuming recovery or new income.',
      ],
      notice: 'The cards show equal losses but different immediate constraints and follow-up questions.',
      troubleshooting: 'If both consequences say wait, identify which obligation cannot be postponed under the scenario.',
    },
    recall: {
      prompt: 'A course fee can be paid next year until you accept a place requiring payment next week. What changed?',
      hint: 'The amount can stay constant while flexibility disappears.',
      answer: 'Accepting creates a near-term deadline. A temporary shortfall now threatens the place, so the old flexible-goal description no longer fits.',
    },
    quiz: {
      question: 'Why does the 80-unit fall matter differently for the moving deposit?',
      options: ['It predicts a permanent loss', 'Its fixed deadline limits waiting', 'Its short deadline prevents recovery'],
      correctIndex: 1,
      explanation: 'The deadline creates an access constraint. It predicts neither whether prices recover nor how long a loss lasts.',
    },
    takeaway: 'Attach an amount, date, flexibility note, and shortfall consequence to each goal.',
    sourceNote: 'The inherited Investor.gov risk resource supplies background. Goal cards are an original planning exercise, not asset-allocation or investment advice.',
  },
  {
    id: 'money-014',
    outcome: 'Identify compensation and benefits exposed to the same employer without mixing unlike amounts.',
    scene: 'An offer letter combines monthly salary, a conditional bonus, and company shares.',
    sections: [
      {
        title: 'Separate lines, shared dependency',
        paragraphs: [
          "A fictional offer lists a salary of 1,000 units per month, a possible annual bonus of 200, and company shares currently valued at 800. They appear on separate lines and have different names. Yet each depends partly on the same business. Salary is a repeated payment for work. The bonus depends on its stated conditions. Shares represent an ownership interest whose market value can change. Counting three lines as three independent sources of financial security overlooks the employer connecting them. None should be treated as an unconditional promise from this example.",
        ],
      },
      {
        title: 'Follow one business shock',
        paragraphs: [
          "Imagine a weak business year in which the bonus is not paid, the shares fall in value from 800 to 400, and future employment becomes uncertain. These events do not have to occur together, but they can share a cause. The salary risk and share-price risk are therefore not automatically independent. A dependency map draws one employer with branches to salary, bonus, and shares. It shows a possible common pressure without assigning a probability or predicting layoffs. Different compensation labels do not remove the connection to that business.",
        ],
      },
      {
        title: 'Check dates and units too',
        paragraphs: [
          "Do not add a monthly salary, an annual bonus, and today's share value into one spending balance. They refer to different periods and forms of value. Shares might also need to vest, meaning that specified ownership conditions must be met, before they belong to you without those restrictions. Sale windows and other plan terms can further affect access. Read those terms separately from the displayed value. The map is a way to identify questions for a compensation review, not a recommendation to sell, hold, accept an offer, or change benefits. Personal circumstances and actual plan documents remain necessary.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'One employer in two scenarios',
      alt: 'The same employer connects monthly salary, a possible bonus, and the value of shares.',
      caption: 'Illustrative units and conditions, not probabilities. Monthly income, annual bonus, and share value are not additive cash balances.',
      items: [
        { label: 'Offer figures', detail: 'Salary 1,000/month; possible bonus 200/year; shares valued 800.' },
        { label: 'Weak-year scenario', detail: 'Job uncertain; bonus 0; shares valued 400.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Pen'],
      steps: [
        'Draw an employer box with separate branches for salary, bonus, and shares.',
        'Copy the sample amounts, labelling month, year, and current asset value.',
        'Mark which branches could change during the weak-year scenario.',
        'Add a question about when shares vest and whether sale restrictions apply.',
        'Write one sentence explaining why three payment labels do not mean three independent risks.',
      ],
      notice: 'Your map connects distinct forms of compensation without summing incompatible amounts.',
      troubleshooting: 'If the map shows only three totals, add the common employer and the conditions for each branch.',
    },
    recall: {
      prompt: 'Housing and transport are provided only while someone keeps a particular job. Are those independent supports during job loss?',
      hint: 'Trace what condition keeps each benefit available.',
      answer: 'Not necessarily. Both may end with employment under their terms, so the same disruption can affect income, housing, and transport together.',
    },
    quiz: {
      question: 'What conclusion is supported by the offer-letter example?',
      options: ['All three benefits must fail together', 'Three labels remove concentration risk', 'One business can affect all three benefits'],
      correctIndex: 2,
      explanation: 'A shared dependency permits linked outcomes but does not predict that they always occur together or by equal amounts.',
    },
    takeaway: 'Map the common dependencies behind compensation, while keeping timing and access rules separate.',
    sourceNote: 'Inherited fund and risk references support the concentration concept. The compensation package is fictional; plan rules and individual decisions require separate review.',
  },
  {
    id: 'money-015',
    outcome: 'Use the reduced balance as the denominator when calculating recovery after a loss.',
    scene: 'Two percentage headlines appear to cancel in a fictional balance history.',
    sections: [
      {
        title: 'Equal percentages use unequal starting points',
        paragraphs: [
          "A fictional investment starts at 100 units, falls 20%, then rises 20%. A quick glance at the headlines suggests it returned to the start. Translate each headline into money before deciding. The loss is 20% of 100, which is 20 units, leaving 80. The later gain is 20% of 80, which is 16 units, leaving 96. The percentages match, but the amounts do not. Each percentage is measured against the balance at the beginning of its own period, not against a permanent original base.",
        ],
      },
      {
        title: 'Calculate the recovery that would be needed',
        paragraphs: [
          "To move from 80 back to 100 requires another 20 units. Divide that required gain by the amount now available: 20 divided by 80 equals 0.25, or 25%. Keep the denominators visible. The original loss was 20 divided by 100; the required recovery is 20 divided by 80. The same twenty units represents a larger percentage of the smaller balance. Saying that a 20% loss needs a 25% recovery describes this arithmetic, not a prediction that such a recovery will arrive or how long it would take.",
        ],
      },
      {
        title: 'Separate investment change from new money',
        paragraphs: [
          "If someone adds 20 units after the loss, the account could also show 100, but that would be a contribution rather than a 25% investment gain. Likewise, withdrawals and fees change the displayed balance without being identical to market performance. This example excludes all three so that changing percentage bases are the only mechanism. When reading a real performance claim, ask what changed the balance and which starting amount each percentage uses. Do not infer a future return from a required recovery calculation, and do not assume a higher needed percentage is a reason to take more risk.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'A fall followed by an equal rate gain', unit: 'units',
      alt: 'A 100-unit balance falls to 80, then a 20% gain brings it only to 96.',
      caption: 'Illustrative consecutive periods with no cash movements or fees. Loss uses 100; the later gain uses 80.',
      items: [
        { label: 'Start', detail: 'Original balance.', value: 100 },
        { label: 'After 20% loss', detail: '100 less 20 = 80.', value: 80 },
        { label: 'After 20% gain', detail: '80 plus 16 = 96.', value: 96 },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Calculator'],
      steps: [
        'Write 100, subtract twenty percent, and circle the new 80-unit base.',
        'Calculate twenty percent of that base and add it to obtain 96.',
        'Return to 80, divide the missing 20 by 80, and label 25% as required recovery.',
      ],
      notice: 'The loss and required recovery share a 20-unit amount but use different denominators.',
      troubleshooting: 'If you get 20% for recovery, replace the original 100 denominator with the current 80.',
    },
    recall: {
      prompt: 'A 200-unit holding falls 25% to 150. What percentage gain would restore 200 without a contribution?',
      hint: 'Divide the missing amount by 150.',
      answer: 'The gap is 50. Dividing 50 by 150 gives about 33.33%. This is the required mathematical gain, not an expected return.',
    },
    quiz: {
      question: 'Which gain restores an 80-unit balance to 100?',
      options: ['25%', '20%', '16%'],
      correctIndex: 0,
      explanation: 'Twenty units divided by the current 80 equals 25%. Twenty percent of 80 would add only 16.',
    },
    takeaway: 'Measure recovery against what remains, not against the balance before the loss.',
    sourceNote: 'The inherited Investor.gov risk reference provides context. These figures are invented, exclude cash flows, and make no claim about future recovery.',
  },
  {
    id: 'money-016',
    outcome: 'Estimate continuing expenses during an income gap without copying a universal savings target.',
    scene: 'A household separates unavoidable bills from pausable spending during a temporary income interruption.',
    sections: [
      {
        title: 'Begin with the bills that continue',
        paragraphs: [
          "An income interruption does not stop rent or basic food costs. To estimate what a buffer would need to do, start with recent bills rather than a percentage copied from someone else's salary. In a fictional household, housing is 500 units a month, basic food 180, utilities 70, required loan payments 90, and necessary travel 60. These categories do not overlap. Together they total 900 units per month. A separate 100 of optional spending could be paused under this scenario, but the continuing 900 still needs a funding plan.",
        ],
      },
      {
        title: 'Essential does not mean identical for everyone',
        paragraphs: [
          "Necessary travel might decrease when commuting stops, or increase if someone must travel to appointments or interviews. A household member may require costs that another household does not have. Use an expense's function and actual obligation, not a moral label about good or bad spending. Pausing a subscription can also require notice, so a cost is not instantly removable just because it is optional. Mark bills as continuing, adjustable after a stated date, or uncertain. This makes the estimate inspectable without pretending that every household can reach the same number.",
        ],
      },
      {
        title: 'Make the duration an assumption',
        paragraphs: [
          "If you model two months at the stated 900, the arithmetic gives 1,800 units. Two months is a chosen scenario here, not a recommended buffer size or a prediction of unemployment length. Known irregular expenses need their own dates and should not be counted twice. Uncertain benefits, support, or future earnings are not confirmed cash until their conditions and timing are understood. An estimate can reveal a gap without solving it. The exercise produces a clear starting point for planning and questions, not a demand to save money that is unavailable or a verdict on someone's habits.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Sample continuing monthly costs', unit: 'units per month',
      alt: 'Housing 500, food 180, utilities 70, required payments 90, and travel 60 total 900.',
      caption: 'Illustrative household, with no overlapping categories. These five bars sum to 900; they are not recommended spending proportions.',
      items: [
        { label: 'Housing', detail: 'Continuing housing obligation.', value: 500 },
        { label: 'Basic food', detail: 'Recent essential food estimate.', value: 180 },
        { label: 'Utilities', detail: 'Continuing service costs.', value: 70 },
        { label: 'Required payments', detail: 'Existing repayment obligation.', value: 90 },
        { label: 'Necessary travel', detail: 'Travel still needed during the gap.', value: 60 },
      ],
    }],
    practice: {
      minutes: 9, needs: ['Paper', 'Calculator'],
      steps: [
        'Copy the five sample continuing costs and add them without the separate optional 100.',
        'Write a two-month scenario and multiply 900 by two.',
        'Add columns for uncertain costs and costs that change only after notice.',
        'Label the 1,800 total a scenario estimate, not a universal savings target.',
      ],
      notice: 'Your estimate states both the monthly obligations and the assumed length of the gap.',
      troubleshooting: 'If the total includes optional spending, check whether the scenario really permits pausing it immediately.',
    },
    recall: {
      prompt: 'Two people earn the same salary, but one supports a dependent and pays higher rent. Should their buffer estimates automatically match?',
      hint: 'Salary is not the list of obligations.',
      answer: 'No. Estimate their continuing expenses, timing, available support, and uncertainty separately. Equal income does not establish equal needs during an interruption.',
    },
    quiz: {
      question: 'What does 1,800 units mean in the sample estimate?',
      options: ['A universal minimum for every household', 'Two months of the stated continuing costs', 'Two months of salary replacement'],
      correctIndex: 1,
      explanation: 'It is 900 times two under specified assumptions, not a general rule or a calculation from salary.',
    },
    takeaway: 'Build a buffer estimate from continuing expenses, dates, and explicit scenario assumptions.',
    sourceNote: 'The inherited CFPB emergency-fund guide describes circumstances-based saving. The household, duration, and worksheet are original illustrations, not tested targets.',
  },
  {
    id: 'money-017',
    outcome: 'Turn a known irregular bill into dated contributions without calling it an emergency.',
    scene: 'An annual cycling-club renewal is due after six remaining paydays.',
    sections: [
      {
        title: 'Infrequent is not the same as unexpected',
        paragraphs: [
          "An annual cycling-club renewal costs a fictional 240 units and is due in six months. You intend to keep the membership and know its renewal date, but the cost does not appear in an ordinary month's spending. When the bill arrives, it can feel like a surprise even though its timing was available. A predictable irregular expense is a known cost that does not occur every month. Keeping it separate from genuinely unplanned repairs prevents the same savings balance being silently promised to two different jobs.",
        ],
      },
      {
        title: 'Count deposits before the bill, not after it',
        paragraphs: [
          "Suppose six equal contributions can all arrive before the renewal deadline and nothing is already reserved. Divide 240 by six: each contribution is 40. After two, the reserved amount is 80; after four, 160; after six, 240. Ignore interest and charges in this exercise. If 60 were already reserved, only 180 would remain to collect, requiring six contributions of 30. The calculation must start with the uncovered amount. Money set aside for rent does not count as an existing contribution to the renewal just because it shares an account.",
        ],
      },
      {
        title: 'An early gap is information',
        paragraphs: [
          "Dividing the bill does not create spare income. If 40 cannot fit around current obligations, the worksheet has exposed the difficulty before the deadline. For an optional membership, reviewing whether to renew is one possible question; it is not permission to miss a mandatory bill. Check cancellation or notice terms before assuming the expense can disappear. Also use actual payment dates: a salary arriving after the due date cannot fund an earlier contribution. Revisit the estimate if the quoted price changes, and leave genuinely uncertain costs labelled as estimates rather than presenting the schedule as guaranteed.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'Six contributions before renewal',
      alt: 'Reserved money reaches 80 after two contributions, 160 after four, and 240 after six.',
      caption: 'Illustrative 40-unit contributions, all before the bill. No interest or fees; checkpoints are schematic, not proportional.',
      items: [
        { label: 'Before contributions', detail: '0 units reserved; bill will be 240.' },
        { label: 'After contribution 2', detail: '80 units reserved.' },
        { label: 'After contribution 4', detail: '160 units reserved.' },
        { label: 'After contribution 6', detail: '240 units reserved before renewal.' },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calendar', 'Calculator'],
      steps: [
        'Write the 240-unit renewal and draw six contribution dates before its deadline.',
        'Divide the uncovered 240 by six and put 40 beside each date.',
        'Check the cumulative amounts after two, four, and six contributions.',
        'Cross out one date and recalculate the equal amount needed across the five remaining contributions.',
      ],
      notice: 'Five remaining contributions require 48 each; the bill did not shrink with the schedule.',
      troubleshooting: 'If you still get 40, divide by the number of contributions actually left before the deadline.',
    },
    recall: {
      prompt: 'A 300-unit routine service is due after four paydays, with 60 already reserved. What equal contributions would cover the gap?',
      hint: 'Subtract money already assigned to this specific bill.',
      answer: 'The uncovered amount is 240. Four contributions of 60 cover it, assuming all arrive before the bill and no costs change.',
    },
    quiz: {
      question: 'If only five contributions remain for the full 240-unit renewal, what amount is needed per contribution?',
      options: ['48 units', '40 units', '50 units'],
      correctIndex: 0,
      explanation: '240 divided by five is 48. Forty assumes six dates; fifty would reserve more than this stated bill requires.',
    },
    takeaway: 'Known irregular bills need an uncovered amount and a contribution calendar, not an emergency label.',
    sourceNote: 'The inherited CFPB emergency-fund source distinguishes unplanned expenses. This renewal schedule is original arithmetic, not a prescribed saving rate.',
  },
  {
    id: 'money-018',
    outcome: 'Find a cash shortage hidden by a positive month-end total.',
    scene: 'Housing and utility bills leave before a delayed payday.',
    sections: [
      {
        title: 'A monthly total loses the order',
        paragraphs: [
          "A fictional month begins with 300 units. A 250-unit housing bill is due on day two, a 100-unit utility bill on day ten, and 600 of income arrives on day eleven. Add the whole month and the projected remainder looks comfortable: 300 plus 600 minus 250 minus 100 equals 550. But the account cannot spend day-eleven income on day ten. Cash flow means how money enters and leaves over time. A monthly total records how much; a running balance also preserves when each amount is available.",
        ],
      },
      {
        title: 'Stop at the first unfunded payment',
        paragraphs: [
          "After the housing bill, only 50 units remain. The next bill needs 100 before any new income arrives, so there is a 50-unit shortfall at that point. Write shortfall 50 rather than drawing an available-money bar below zero. That label identifies a funding problem, not permission to overdraw or miss a payment. The later income can make the month-end arithmetic positive without making the earlier bill affordable on its due date. This example includes no overdraft arrangement, late fee, or agreement to move a deadline.",
        ],
      },
      {
        title: 'Use the low point to form a question',
        paragraphs: [
          "Check pending payments and whether an income date is confirmed, not merely usual. If a shortfall appears, the next task is to investigate legitimate options before the bill is due. A provider might have a different payment date or support process, but you need an actual agreement before changing the plan. Do not erase an obligation because a refund or salary is expected later. Keep the monthly total and the dated route together: one checks overall resources, while the other identifies the moment those resources fail to cover an outgoing payment. Neither view replaces the other.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'The gap before payday',
      alt: '300 becomes 50 after housing; a 100-unit bill arrives before 600 of income.',
      caption: 'Illustrative units and dates. The 50-unit shortfall is a need, not available money or an assumed overdraft.',
      items: [
        { label: 'Day 1: start', detail: '300 units available.' },
        { label: 'Day 2: housing', detail: 'Pay 250; 50 units remain.' },
        { label: 'Day 10: utilities', detail: '100 due; only 50 available; shortfall 50.' },
        { label: 'Day 11: income', detail: '600 arrives after the problem date.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        'Place the opening 300, both bills, and the 600 income on their stated dates.',
        'Subtract only payments due before the income; stop when a bill exceeds available money.',
        'Circle day ten and label its 50-unit shortage separately from the month-end projection.',
        'Draft a question about payment-date options, without treating an unanswered request as permission.',
      ],
      notice: 'A 550-unit projected remainder coexists with an earlier 50-unit funding gap.',
      troubleshooting: 'If every date is positive, check whether you counted day-eleven income before it arrived.',
    },
    recall: {
      prompt: 'A refund of 200 is expected Friday, but a 150-unit payment is due Thursday and only 80 is available. What is missing?',
      hint: 'Keep the expected refund after the payment date.',
      answer: 'Thursday has a 70-unit shortfall. Friday’s expected refund does not fund the earlier obligation, and its actual timing still needs confirmation.',
    },
    quiz: {
      question: 'What does the sample month-end remainder of 550 fail to prove?',
      options: ['That income exceeds the two bills overall', 'That the opening balance was 300', 'That every bill is funded on its due date'],
      correctIndex: 2,
      explanation: 'Totals discard ordering. The utility bill exceeds available money before the later income arrives.',
    },
    takeaway: 'Check the lowest dated balance, not just the projected end-of-month total.',
    sourceNote: 'The inherited CFPB emergency-fund guide includes cash-flow planning. Dates here are invented and imply no right to change due dates.',
  },
  {
    id: 'money-019',
    outcome: 'Review current cash flow before restarting contributions after using a buffer.',
    scene: 'An essential refrigerator repair uses part of a household emergency reserve.',
    sections: [
      {
        title: 'The withdrawal did its intended job',
        paragraphs: [
          "An essential refrigerator fails, and an illustrative repair costs 240 units. The household has a 600-unit emergency reserve, so paying for the repair leaves 360. The smaller balance can feel discouraging, but covering an unplanned necessary cost is the reason the reserve existed. Record the event and what it covered before judging the system by its closing number. A withdrawal is not automatically a mistake. Equally, calling an expense an emergency does not explain whether it was genuinely unplanned, unavoidable, or already covered by another budget line.",
        ],
      },
      {
        title: 'The old transfer may no longer fit',
        paragraphs: [
          "Before the disruption, a recurring transfer moved 80 units into the reserve each payday. Now the next confirmed income is 500 and known bills before the following payday total 470. That leaves only 30 before any omitted or uncertain costs. Repeating the old 80-unit transfer would create a 50-unit shortfall against those known bills. The goal of rebuilding the reserve does not make the old amount affordable. Review the current sequence of income and obligations rather than treating an existing automation as proof that nothing needs to change.",
        ],
      },
      {
        title: 'Give the event a follow-up date',
        paragraphs: [
          "Write three things: why money was used, what bills and income changed, and when you will review possible contributions. The review date is not a deadline to restore the original balance. A repair might have a follow-up cost, and an income interruption might continue. Mark those uncertainties instead of promising all 30 immediately. If the event was actually a predictable annual service, move that future cost into an irregular-bill plan so it does not repeatedly surprise the reserve. The useful output is a revised picture of circumstances, not guilt about a withdrawal or a fixed savings percentage.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'The repair and the remaining reserve', unit: 'units',
      alt: 'The reserve starts at 600, the repair uses 240, and 360 remains.',
      caption: 'Illustrative amounts. Repair plus remainder equals the original reserve; the bars are not three separate pools of money.',
      items: [
        { label: 'Before repair', detail: 'Original reserve.', value: 600 },
        { label: 'Repair paid', detail: 'Amount used for the refrigerator.', value: 240 },
        { label: 'After repair', detail: '600 less 240.', value: 360 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        'Write a sample withdrawal note: refrigerator repair, 240 used, 360 remaining.',
        'Place the next 500 income beside the 470 of bills due before another payday.',
        'Subtract the old 80 transfer on a separate trial line and mark the resulting 50 shortage.',
        'Choose a review date on paper and list missing cost information; leave real transfers unchanged.',
      ],
      notice: 'The reserve served its purpose, while the old transfer now fails the cash-flow check.',
      troubleshooting: 'If 30 looks like guaranteed spare money, add a line for costs not yet included.',
    },
    recall: {
      prompt: 'After an urgent travel expense, someone receives a smaller paycheck but restarts the previous savings transfer. What should they review?',
      hint: 'Yesterday’s affordable amount is not evidence about this payday.',
      answer: 'Review current income, upcoming bills, and any continuing travel costs before choosing a contribution. A fixed rebuilding deadline could create another shortage.',
    },
    quiz: {
      question: 'With 500 income, 470 bills, and an 80 transfer, what does the sample reveal?',
      options: ['A 50-unit funding gap', 'An 80-unit surplus', 'A 30-unit surplus after saving'],
      correctIndex: 0,
      explanation: 'Bills and the transfer total 550 against 500. Thirty is what remains before the transfer, not after it.',
    },
    takeaway: 'After using a buffer, recheck circumstances before deciding how or when to rebuild it.',
    sourceNote: 'The inherited CFPB emergency-fund guide provides background. This follow-up routine is an original planning aid, not a compulsory savings schedule.',
  },
  {
    id: 'money-020',
    outcome: 'Identify access and withdrawal constraints without moving money or exposing credentials.',
    scene: 'A lost phone interrupts access to funds needed for a same-day repair.',
    sections: [
      {
        title: 'The balance can exist while access fails',
        paragraphs: [
          "A fictional reserve contains 900 units, but the phone used to approve account access is missing. A 500-unit repair bill is due today. The money has not necessarily disappeared; the route to using it is interrupted. Availability therefore involves more than the displayed balance. You need a secure way to identify yourself, reach the account, and make the required payment. Planning only around the 900-unit total overlooks a single-device dependency that becomes inconvenient precisely when you are already trying to solve another problem.",
        ],
      },
      {
        title: 'Access and transfer limits are separate checks',
        paragraphs: [
          "Suppose the documented route, once access is restored, allows transfers of at most 300 units per day. Even a successful login would not automatically permit the full 500-unit bill that day. The limit leaves a 200-unit gap for that route, despite the 900 balance. A different authorised method might exist, but it is unknown until verified. Do not assume several transfers bypass a daily total limit, or that a provider must raise it. Processing hours and recovery delays can add further constraints independent of the balance.",
        ],
      },
      {
        title: 'Rehearse by reading, not by breaking access',
        paragraphs: [
          "Before an interruption, locate official recovery instructions and verified support contacts through a route you already trust. Record where protected recovery information is stored without copying passwords or one-time codes into ordinary notes. Check which options depend on the same phone, whether another device is supported, and what identification or waiting period the provider describes. This is a documentation exercise: do not log yourself out, disable security, trigger recovery, or send an unnecessary test transfer. A written access map reveals unanswered questions; it cannot make any provider, network, or device permanently reliable.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Balance versus documented route',
      alt: 'A 900-unit balance does not override lost-phone recovery or a 300-unit daily transfer limit.',
      caption: 'Illustrative rules. These are different constraints, not amounts to add together; recovery timing remains unknown.',
      items: [
        { label: 'Money recorded', detail: '900 units exist; phone-based access is interrupted.' },
        { label: 'After access returns', detail: '300/day limit; a 500-unit bill exceeds this route by 200.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'The fictional account rules above'],
      steps: [
        'Draw stages for identify yourself, reach the account, and make the payment.',
        'Mark which stage depends on the missing phone and label recovery timing unknown.',
        'Add the 300-unit daily limit and compare it with the 500-unit bill.',
        'Write a question about an authorised alternative route; do not trigger recovery or move money.',
      ],
      notice: 'Your map shows both an access uncertainty and a separate 200-unit route shortfall.',
      troubleshooting: 'If the backup route still requires the lost phone, mark that shared dependency instead of counting it as independent.',
    },
    recall: {
      prompt: 'Two account apps both require codes from the same missing phone. Does having two apps solve the access problem?',
      hint: 'Trace the device needed to authorise each route.',
      answer: 'No. Both depend on the same unavailable device. Inspect verified recovery options and their requirements without weakening security or sharing codes.',
    },
    quiz: {
      question: 'What would prove the sample 500-unit payment is possible today?',
      options: ['The 900-unit balance alone', 'Verified access and an authorised route supporting that amount and timing', 'Two transfers through a 300-unit daily-total limit'],
      correctIndex: 1,
      explanation: 'Amount, access, limits, and timing must all fit. A daily total limit is not reset by splitting a payment.',
    },
    takeaway: 'An accessible buffer needs secure recovery and a payment route that fits the amount and date.',
    sourceNote: 'Inherited CFPB emergency and NCSC security sources provide background. Limits are fictional; this rehearsal does not test recovery or guarantee availability.',
  },
  {
    id: 'money-021',
    outcome: 'Calculate a simple covered-loss split while keeping the premium separate.',
    scene: 'A household compares its annual coverage payment with its share of one damaged-item claim.',
    sections: [
      {
        title: 'Two payments answer different questions',
        paragraphs: [
          "A fictional property policy costs 60 units for a year of coverage. That price is the premium. Later, a covered loss is valued at 900 units, and the policy has a fixed 200-unit deductible for this claim. The deductible is the portion of the covered loss the policyholder bears under these rules. Some policies call it an excess. Paying the premium does not remove the deductible: one buys coverage for the period, while the other determines part of the cost retained when a covered event occurs.",
        ],
      },
      {
        title: 'Split the covered loss',
        paragraphs: [
          "Assume the entire 900 qualifies, no limit restricts it, and there are no other adjustments. The insurer pays 900 minus 200, or 700 units. The policyholder bears 200 of the loss. These two portions sum to 900. The 60 premium is separate, so the household's cost across this one-claim year is 260 under the stated assumptions: 60 for coverage and 200 of the loss. Do not subtract the premium from the claim as though it were an additional deductible, and do not count the insurer's 700 as money the household paid.",
        ],
      },
      {
        title: 'Read how the deductible applies',
        paragraphs: [
          "For a smaller covered loss of 150 with the same fixed 200 deductible, this model pays zero; the household bears the 150 loss, not 200 or a negative insurer payment. Real policies can apply deductibles per claim, per period, or as a percentage of a specified base. Other sharing rules can also apply. A percentage deductible requires its denominator, which need not be the claim amount. Always check the actual wording and whether the event qualifies before doing arithmetic. A simple subtraction cannot establish coverage, a right to payment, or the rules for a different kind of insurance.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Who bears the 900-unit loss?', unit: 'units',
      alt: 'The insurer pays 700 units and the policyholder bears 200 of the covered loss.',
      caption: 'Illustrative covered claim with no other adjustments. These bars sum to 900; the separate 60-unit premium is not shown.',
      items: [
        { label: 'Insurer portion', detail: '900 less 200 = 700.', value: 700 },
        { label: 'Policyholder portion', detail: 'Fixed deductible of 200.', value: 200 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        'Write the annual premium 60 above a separate 900-unit covered-loss calculation.',
        'Split the loss into 200 retained and 700 paid by the insurer.',
        'Add premium and retained loss to find the sample household cost of 260.',
        'Repeat with a 150-unit covered loss: insurer pays zero and household cost including premium is 210.',
      ],
      notice: 'The premium stays separate, and a below-deductible claim never creates a negative payout.',
      troubleshooting: 'If the small claim shows a 200-unit loss share, cap that share at the actual 150-unit loss.',
    },
    recall: {
      prompt: 'A covered 1,200-unit loss has a fixed 300 deductible and an 80 annual premium. With no other adjustments, what are the two costs?',
      hint: 'Separate insurer payment from the household’s annual outlay.',
      answer: 'The insurer pays 900. The household bears 300 of the loss plus 80 premium, totalling 380 for this one-claim year.',
    },
    quiz: {
      question: 'For the sample 900-unit covered loss, which calculation gives the insurer payment?',
      options: ['900 minus 200 minus 60', '900 minus 60', '900 minus 200'],
      correctIndex: 2,
      explanation: 'The deductible, not the premium, reduces this claim. Other policy rules were explicitly excluded from the model.',
    },
    takeaway: 'Premium, retained loss, and insurer payment are different amounts; calculate them separately.',
    sourceNote: 'The inherited NAIC glossary was checked for premium and deductible terminology. This simplified property example does not generalise policy or jurisdiction rules.',
  },
  {
    id: 'money-022',
    outcome: 'Test a named loss against definitions, exclusions, conditions, and policy amendments.',
    scene: 'A 600-unit device disappears in two different travel situations.',
    sections: [
      {
        title: 'Name what happened before naming coverage',
        paragraphs: [
          "A device worth an illustrative 600 units goes missing during a journey. Saying it is gone does not yet identify the event a policy describes. Was it stolen from a locked locker, left behind on a train, or damaged and discarded? A policy marketed as device protection could treat these events differently. An exclusion removes a stated circumstance from otherwise described coverage. A condition specifies something that must be satisfied, such as documentation. The broad product name cannot resolve either issue, and the device's price does not establish a payout.",
        ],
      },
      {
        title: 'Apply an invented set of terms',
        paragraphs: [
          "For this exercise only, imagine wording that includes theft from a locked locker, excludes items left behind, and requires ownership records plus evidence of the reported event. A stolen device in the specified locker situation has a route to a coverage assessment, provided the conditions are met. The same device forgotten on a train falls within the stated exclusion. Calling both situations a loss does not make them equivalent. Even the first case is not a promise of 600: valuation, limits, and deductibles remain separate questions after eligibility is considered.",
        ],
      },
      {
        title: 'Keep uncertainty visible',
        paragraphs: [
          "Read the definitions and the complete relevant wording, including amendments that change the original contract. If the event is unclear, record the known facts without inventing theft, damage, or evidence to fit a covered category. Ask the provider a written question describing the particular circumstances and which clause is unclear. A brochure summary is useful for finding headings, not for resolving a disputed claim. This method improves the precision of a question; it does not decide a real claim, replace local rules, or allow you to treat an unanswered question as confirmation of coverage.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Same device, different event',
      alt: 'A stolen 600-unit device and a device left on a train follow different sample policy terms.',
      caption: 'Illustrative wording only. Neither the device value nor a covered-event label guarantees a claim payment.',
      items: [
        { label: 'Theft from locked locker', detail: '600-unit device; assess stated cover and evidence conditions.' },
        { label: 'Left on the train', detail: 'Same 600-unit device; sample left-behind exclusion applies.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'The invented terms above'],
      steps: [
        'Write the two travel events without using a policy label as the event description.',
        'Copy the sample covered event, exclusion, and evidence condition into separate rows.',
        'Match each event to those rows and mark payout amount still undetermined.',
        'Draft a written question about one missing fact, such as the evidence needed for locker theft.',
      ],
      notice: 'Your comparison separates event eligibility from evidence and the amount of any payment.',
      troubleshooting: 'If both rows say device loss, add the actual circumstances that the sample clauses distinguish.',
    },
    recall: {
      prompt: 'A borrowed camera is damaged, but the policy covers only items owned by the insured person. What needs checking?',
      hint: 'An item definition can matter before the damage calculation.',
      answer: 'Check the ownership definition and any amendment covering borrowed items. Accidental damage alone does not resolve whether this camera qualifies.',
    },
    quiz: {
      question: 'Which fact best distinguishes the two sample device cases?',
      options: ['The circumstances specified by the clauses', 'The shared 600-unit device value', 'The shared device-protection label'],
      correctIndex: 0,
      explanation: 'The invented wording distinguishes theft from leaving an item behind. Price and marketing category do not resolve that distinction.',
    },
    takeaway: 'Apply the full wording to a precise event; do not infer coverage from the policy name.',
    sourceNote: 'The inherited NAIC glossary provides insurance terminology. All event terms here are invented and do not determine coverage under an actual policy.',
  },
  {
    id: 'money-023',
    outcome: 'Distinguish how a loss is valued from the ceiling and deductible applied to it.',
    scene: 'A damaged camera has a replacement price above its policy’s item sublimit.',
    sections: [
      {
        title: 'A ceiling does not value the item',
        paragraphs: [
          "A fictional belongings policy advertises an overall limit of 2,000 units. A damaged camera would cost 800 to replace, but the policy also has a 600-unit camera sublimit. A limit is a ceiling under specified coverage, not a promised payment. A sublimit is a smaller ceiling for a particular category or item. Before applying either, you must also know how the loss is valued. An old item's original receipt, current replacement price, and value after an allowance for wear can be three different numbers.",
        ],
      },
      {
        title: 'Run two valuation methods through one rule',
        paragraphs: [
          "Use two invented valuation cases. One values the covered loss at the 800-unit replacement cost. The other uses 480 after a stated allowance for depreciation, meaning reduced value attributed to age or wear. In this exercise only, first cap the valued loss at the 600 sublimit, then subtract a 100 deductible. The replacement case pays 600 minus 100, or 500. The depreciated-value case pays 480 minus 100, or 380. The 2,000 overall headline never becomes the payment simply because it is the largest number on the page.",
        ],
      },
      {
        title: 'Order and evidence belong in the calculation',
        paragraphs: [
          "The order just used is an explicit example rule, not a universal settlement formula. Real wording determines how limits and deductibles interact, what evidence supports the value, and whether repair rather than replacement is the appropriate basis. Replacement-cost coverage can also have conditions about when costs are incurred or documented. Keep those questions separate from the headline limit. A useful worksheet has rows for covered event, valuation, applicable limits, deductible, and unresolved conditions. It should explain why a number is used rather than importing purchase price as an assumed payout. No worksheet alone establishes a real claim entitlement.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'One sublimit, two valuations',
      alt: 'An 800-unit replacement valuation pays 500; a 480-unit depreciated valuation pays 380 under sample rules.',
      caption: 'Illustrative order: cap valuation at 600, then subtract 100. Actual policies can use different conditions and sequencing.',
      items: [
        { label: 'Replacement valuation', detail: '800 valued; capped at 600; less 100 = 500 units.' },
        { label: 'Depreciated valuation', detail: '480 valued; below 600 cap; less 100 = 380 units.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        'Write the overall 2,000 limit, camera sublimit 600, and deductible 100 on separate lines.',
        'Create two columns using the stated valuations of 800 and 480.',
        'Apply the sample cap first, then subtract the deductible in each column.',
        'Label 500 and 380 illustrative payments and list evidence and actual sequencing as real-policy questions.',
      ],
      notice: 'The valuation method changes the result below the same advertised overall limit.',
      troubleshooting: 'If both results are 1,900, replace the overall headline with the relevant valued loss and item cap.',
    },
    recall: {
      prompt: 'Two covered valuations are 1,200 and 700, both capped at 500 before a 100 deductible. Why do both pay 400?',
      hint: 'Both valuations exceed the same binding ceiling.',
      answer: 'The cap reduces either valuation to 500, then the stated deductible leaves 400. Different valuations need not change payment when the same lower cap applies.',
    },
    quiz: {
      question: 'What explains the sample replacement payment of 500 rather than 700?',
      options: ['The overall limit is 2,000', 'The 600 sublimit applies before the 100 deductible', 'Depreciation is always 300'],
      correctIndex: 1,
      explanation: 'Subtracting 100 directly from 800 ignores the stated sublimit. The example does not impose depreciation on the replacement case.',
    },
    takeaway: 'Read valuation, limits, and deductible order separately before estimating a payment.',
    sourceNote: 'The inherited NAIC glossary was checked for limits, actual cash value, and replacement cost. Values and settlement sequencing here are hypothetical.',
  },
  {
    id: 'money-024',
    outcome: 'Compare premiums alongside matching coverage and the loss share each policy retains.',
    scene: 'Two fictional annual policies trade a lower premium for a larger deductible.',
    sections: [
      {
        title: 'The cheaper price buys different terms',
        paragraphs: [
          "Two fictional annual property quotes cover the same events, people, locations, and dates, with the same valuation method and a 1,000-unit limit. Quote A charges a 60-unit premium and has a 200-unit deductible. Quote B charges 40 but has a 400-unit deductible. The premium saving is 20, while the loss share can be larger. These are not identical purchases at different prices. Put the terms in matching rows before comparing the headline premium, especially when one quote leaves a condition or covered event unspecified.",
        ],
      },
      {
        title: 'Compare a no-claim year and one covered loss',
        paragraphs: [
          "In a year with no claim, the sample household pays 60 under A or 40 under B. Now model one fully covered 900-unit loss with no other adjustments. A pays 700 toward the loss, leaving the household's 200 deductible plus 60 premium, or 260 total. B pays 500, leaving 400 plus 40, or 440. Thus B is cheaper in the no-claim scenario but costs the household 180 more in this particular one-claim scenario. This arithmetic says nothing about the probability of either year or which policy suits a real person.",
        ],
      },
      {
        title: 'A worksheet can expose unknowns',
        paragraphs: [
          "Real comparisons need covered events, exclusions, policy period, who and where are insured, valuation basis, limits, and deductibles. A quote for six months is not directly comparable with an annual premium. Mark absent information unknown rather than included. Also distinguish the ability to pay a premium now from the ability to bear a larger deductible later. Neither the cheapest no-claim result nor a single large-loss example settles that tradeoff. Use the worksheet to frame questions for the provider, not to declare one policy universally better. The applicable contract and local rules remain necessary for actual coverage decisions.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Household outlay in two sample years', unit: 'units per year',
      alt: 'No-claim outlays are A 60 and B 40; with one covered 900 loss they are A 260 and B 440.',
      caption: 'Illustrative matching coverage. Each bar is a separate scenario: premium plus retained loss, not insurer payments.',
      items: [
        { label: 'A: no claim', detail: 'Premium only.', value: 60 },
        { label: 'B: no claim', detail: 'Premium only.', value: 40 },
        { label: 'A: one 900-unit loss', detail: '60 premium + 200 deductible.', value: 260 },
        { label: 'B: one 900-unit loss', detail: '40 premium + 400 deductible.', value: 440 },
      ],
    }],
    practice: {
      minutes: 9, needs: ['Paper', 'Calculator'],
      steps: [
        'Create matching rows for dates, covered events, valuation, limits, deductible, and premium.',
        'Enter the two sample quotes, explicitly marking which terms are identical.',
        'Calculate household outlay for no claim and one covered 900-unit loss.',
        'Write an unanswered real-policy question, such as whether accidental damage away from home is included.',
      ],
      notice: 'The lower premium does not produce the lower household outlay in both scenarios.',
      troubleshooting: 'If you added the insurer payment to the premium, replace it with the portion the household bears.',
    },
    recall: {
      prompt: 'One quote costs 30 for six months and another 50 for a year. What must be established before calling the first cheaper?',
      hint: 'Period and coverage must match, including renewal terms.',
      answer: 'Check equivalent coverage and the cost of the remaining six months. Doubling 30 assumes unchanged renewal pricing, so an annual comparison is not yet established.',
    },
    quiz: {
      question: 'What does quote B’s smaller premium establish by itself?',
      options: ['Lower cost for every covered loss', 'More complete coverage', 'Lower stated cost for this coverage period before claims'],
      correctIndex: 2,
      explanation: 'The premium comparison does not include a later deductible or prove matching coverage. Those terms need separate rows.',
    },
    takeaway: 'Match coverage first, then compare both the premium and the risk retained at claim time.',
    sourceNote: 'The inherited NAIC glossary supplies terminology. These original scenarios assign no claim probabilities and do not recommend an insurance product.',
  },
  {
    id: 'money-025',
    outcome: 'Prepare a private ownership record that stays available if the item itself disappears.',
    scene: 'A camera receipt exists only on the laptop that also stores the owner’s inventory.',
    sections: [
      {
        title: 'The missing item can take its evidence with it',
        paragraphs: [
          "You buy a fictional camera for 600 units and save its receipt on a laptop kept in the same bag. If the bag disappears, both the item and the only record could be gone. A claim is a request for payment under an insurance contract, not an automatic transfer. A provider can ask for evidence about ownership, value, and what happened. Preparing a small private record while the information is available reduces what you would have to reconstruct later. It does not establish that the event is covered.",
        ],
      },
      {
        title: 'Record facts rather than a promised payout',
        paragraphs: [
          "A useful inventory entry identifies the item, model, purchase date, receipt location, and any relevant identifying number. In this sample, the receipt supports a 600-unit purchase price. If an equivalent replacement later costs 720, neither figure automatically becomes the claim payment. The policy's valuation, limits, deductible, and evidence requirements still apply. Keep an original receipt where possible and label estimates rather than rewriting them as facts. Photographs can support identification, but one photograph does not necessarily prove ownership, condition, or the circumstances of a later loss.",
        ],
      },
      {
        title: 'Protect the record and test retrieval',
        paragraphs: [
          "Keep a protected copy somewhere separate from the belongings it describes, with access that does not rely entirely on the missing device. A private folder, protected backup, or securely stored paper record can have different access and privacy tradeoffs; check the method you already use. Do not post serial numbers, receipts, or a home inventory publicly. Read actual notification and documentation requirements before a claim is needed, because deadlines are not universal. A calm retrieval check means locating a harmless sample copy, not simulating theft, disabling a device, or sharing sensitive records with this app.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'Keep the evidence separate',
      alt: 'A 600-unit receipt is recorded, copied separately, and later used to support a claim assessment.',
      caption: 'Illustrative preparation sequence. The later 720-unit replacement price is evidence to assess, not a promised payout.',
      items: [
        { label: 'Purchase', detail: 'Receipt records 600 units and the camera model.' },
        { label: 'Protected separate copy', detail: 'Ownership record is not only in the camera bag.' },
        { label: 'If a loss occurs', detail: 'Provide accurate evidence; 720 replacement estimate still needs assessment.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'A private place for a harmless sample record'],
      steps: [
        'Create a fictional inventory card: sample camera, 600-unit receipt, model Example C, purchase date today.',
        'Mark where its protected copy would live separately from the camera and travel laptop.',
        'Locate the sample copy using that route without entering real serial numbers or credentials.',
        'Add questions about notification timing and evidence requirements for an actual policy.',
      ],
      notice: 'You can identify the sample record’s location without relying on the item being present.',
      troubleshooting: 'If both copies would travel in one bag, choose a genuinely separate protected location for the plan.',
    },
    recall: {
      prompt: 'A bicycle is stolen with a phone that held the only receipt photo. What preparation would have reduced the documentation problem?',
      hint: 'Think about a failure taking more than one object at once.',
      answer: 'A protected receipt and identification copy separate from both objects, with a usable recovery route. That supports documentation but does not guarantee coverage or settlement.',
    },
    quiz: {
      question: 'Which sample record arrangement best survives loss of the entire camera bag?',
      options: ['Receipt only on the laptop in the bag', 'Protected copy accessible outside the bag', 'Two receipt copies on that same laptop'],
      correctIndex: 1,
      explanation: 'Two files on one missing device share the same failure. A separate protected copy addresses that dependency without publishing private information.',
    },
    takeaway: 'Keep accurate ownership evidence private, retrievable, and separate from the belongings it documents.',
    sourceNote: 'Inherited NAIC and NCSC backup sources support terminology and record separation. This original inventory exercise guarantees neither evidence acceptance nor a payout.',
  },
  {
    id: 'money-026',
    outcome: 'Compare purchase and operating costs over the same period and workload.',
    scene: 'Two fictional home printers have different purchase and refill prices.',
    sections: [
      {
        title: 'The checkout price is only the beginning',
        paragraphs: [
          "A fictional printer costs 80 units, while another costs 140. The cheaper sticker looks decisive until you ask what each needs to produce the same work. Suppose both are suitable for 1,000 pages per year. For that workload, Printer A needs 60 units of ink each year, while Printer B needs 20. Ownership cost means the resources required to obtain and keep using an item over a stated period. Refills, required accessories, delivery, subscriptions, and repairs can change the comparison even when the initial price is clear.",
        ],
      },
      {
        title: 'Hold period and workload constant',
        paragraphs: [
          "Use two years and 2,000 pages for both printers. A's known purchase-and-ink total is 80 plus two times 60, or 200 units. B's is 140 plus two times 20, or 180. Under those assumptions, B has a 20-unit lower known total despite costing 60 more at checkout. This is not proof that B is cheaper to own in every case. If you print less, refill yields differ, or one needs an extra accessory, the numbers change. An upfront payment also has to fit the money available when buying.",
        ],
      },
      {
        title: 'Do not hide missing costs in zeroes',
        paragraphs: [
          "These example totals exclude electricity, repairs, and resale because no values have been supplied. Label them partial known costs instead of calling them a complete lifetime price. For a real comparison, add relevant estimates with their sources and leave unanswered questions visible. A warranty may affect who pays for a fault, but it does not prove that maintenance is unnecessary or that every repair is covered. Do not invent a long lifespan or a generous resale value to make a preferred option win. Compare an item that actually meets the job with another suitable option on the same basis.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Two years, 2,000 pages', unit: 'units',
      alt: 'Printer A has 200 units of known purchase and ink costs; B has 180.',
      caption: 'Illustrative partial totals for equal use. Electricity, repairs, and resale are excluded, not assumed to be zero.',
      items: [
        { label: 'Printer A', detail: '80 purchase + 2 x 60 ink = 200.', value: 200 },
        { label: 'Printer B', detail: '140 purchase + 2 x 20 ink = 180.', value: 180 },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        'Write two years and 2,000 pages at the top of a two-column printer comparison.',
        'Enter purchase price and two annual ink costs separately for each printer.',
        'Calculate 200 and 180, then add an unknown-cost row for repairs and electricity.',
        'Label the result partial known cost and keep the larger upfront payment visible.',
      ],
      notice: 'The cheaper sticker and the smaller two-year known total belong to different options.',
      troubleshooting: 'If B totals 160, include both years of ink rather than only one.',
    },
    recall: {
      prompt: 'A device costs 50 plus ten required refills at 8 each. Another costs 90 plus ten refills at 3. What are their known totals?',
      hint: 'Use the same refill count and exclude nothing silently.',
      answer: 'The totals are 130 and 120 units. Other required costs, suitability, and upfront affordability still need checking before deciding.',
    },
    quiz: {
      question: 'What does the 180-unit printer figure represent?',
      options: ['Its purchase price alone', 'Its guaranteed lifetime cost', 'Its stated two-year purchase-and-ink cost'],
      correctIndex: 2,
      explanation: 'It includes 140 purchase plus 40 ink. Missing operating and repair costs prevent calling it a complete lifetime total.',
    },
    takeaway: 'Compare equal periods and workloads, with required ongoing costs and unknowns shown separately.',
    sourceNote: 'Inherited FTC shopping and warranty resources provide background. Printer prices and ink use are hypothetical, not product claims or recommendations.',
  },
  {
    id: 'money-027',
    outcome: 'Name the realistic alternative displaced by an optional purchase without double-counting its price.',
    scene: 'A headphone upgrade competes with a planned bicycle repair in a small available budget.',
    sections: [
      {
        title: 'Two uses for the same available money',
        paragraphs: [
          "You have a fictional 100 units available after other commitments. A headphone upgrade costs 80. A bicycle repair you planned for next week also costs 80. Each purchase fits if considered alone, but together they need 160, leaving a 60-unit gap against the available 100. Looking only at the upgrade receipt makes that conflict easy to miss. Opportunity cost names the next-best use of resources that you give up when choosing one use. It is about what cannot also happen with the same money, not about an extra checkout fee.",
        ],
      },
      {
        title: 'Describe the displaced result',
        paragraphs: [
          "If you spend 80 on the upgrade, 20 remains. That is not enough for the planned 80-unit repair. The displaced alternative is not an abstract pile of money: it is the repair and whatever transport it would enable. If the repair is the next-best use in this situation, that is the opportunity cost you should consider. You do not add another 80 to the headphone invoice and claim it costs 160. Instead, put two outcomes beside each other, each using 80 of the same 100, and compare what would remain undone.",
        ],
      },
      {
        title: 'Use a real alternative, not an invented fortune',
        paragraphs: [
          "The alternative might also be keeping money available for an uncertain upcoming bill. It should be feasible with the resources and timing you actually have, not a hypothetical investment windfall. Choosing enjoyment can be reasonable; this method is not a rule that every optional purchase is wrong. It asks you to identify the tradeoff before deciding. If the repair can wait, say what waiting changes rather than assuming it has no consequence. If it cannot wait, that constraint belongs in the comparison. Do not take an unsafe bicycle ride to justify delaying necessary maintenance.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'What the same 80 units can do',
      alt: 'Buying either the upgrade or the repair leaves 20 from the same available 100.',
      caption: 'Illustrative budget. These are alternative paths, not two purchases that can both fit in 100 units.',
      items: [
        { label: 'Upgrade now', detail: '80 spent; 20 remains; 80-unit repair not funded.' },
        { label: 'Repair now', detail: '80 spent; 20 remains; upgrade deferred.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Pen'],
      steps: [
        'Draw two columns starting from the same 100-unit available budget.',
        'Spend 80 on the upgrade in one and 80 on the repair in the other.',
        'Write what each choice enables, what it leaves unfunded, and the relevant date.',
        'Name the next-best feasible alternative in one sentence without adding it to the receipt price.',
      ],
      notice: 'Your comparison describes an actual displaced outcome rather than treating affordability as two isolated yes answers.',
      troubleshooting: 'If the alternative is a huge future profit, replace it with a realistic current use of the same resources.',
    },
    recall: {
      prompt: 'A 60-unit concert ticket and a 60-unit drawing workshop compete for one available 60. What is the opportunity cost of the ticket?',
      hint: 'Use the best feasible alternative you would otherwise choose.',
      answer: 'If the workshop is that alternative, its learning experience is what the ticket displaces. The ticket still costs 60 at checkout, not 120.',
    },
    quiz: {
      question: 'What does the upgrade’s opportunity cost mean in the stated comparison?',
      options: ['The planned repair you cannot also fund', 'A second 80-unit fee charged by the shop', 'Every possible use of money added together'],
      correctIndex: 0,
      explanation: 'It is the next-best foregone alternative, not an extra bill or the sum of an entire wish list.',
    },
    takeaway: 'Compare an optional purchase with what the same money would otherwise do.',
    sourceNote: 'Inherited CFPB emergency and FTC shopping resources provide context. This opportunity-cost worksheet is original and makes no investment-return assumptions.',
  },
  {
    id: 'money-028',
    outcome: 'Calculate cost per usable item rather than assuming the largest pack offers the best value.',
    scene: 'A refill-sheet bulk discount collides with a planned change of device.',
    sections: [
      {
        title: 'First make the quantities comparable',
        paragraphs: [
          "A fictional pack of twenty identical refill sheets costs 12 units, while ten cost 7. Divide price by quantity to get a unit price: 12 divided by 20 is 0.60 per sheet, and 7 divided by 10 is 0.70. That makes the large pack cheaper for each sheet sold. But the comparison assumes the sheets are the same size, quality, and compatibility. Comparing different formats using only the count on the packet can hide that they do not perform the same job.",
        ],
      },
      {
        title: 'Change the denominator to what you will use',
        paragraphs: [
          "Suppose a planned device change means you will use only ten of the large pack's twenty sheets, and the remainder will have no usable or recoverable value. The whole 12-unit payment is now spread over ten used sheets: 1.20 per used sheet. Buying the small compatible pack and using all ten costs 0.70 per used sheet. The larger pack's printed unit price is still 0.60; it simply answers a different question. Your decision depends on useful output, not the quantity that happens to arrive in a box.",
        ],
      },
      {
        title: 'Storage and timing also count',
        paragraphs: [
          "A bulk purchase can work when the stock remains compatible, can be stored without damage, and will be consumed in a realistic period. Those are facts to check, not benefits guaranteed by a discount label. The larger upfront payment also leaves less money available for other needs now. Do not assume the unused half can be sold or returned unless that route exists. For uncertain use, show both full-use and lower-use calculations rather than choosing the denominator that makes your preferred pack look cheapest. This method applies to ordinary supplies without requiring a purchase or a new consumption habit.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Price per sheet actually used', unit: 'units per used sheet',
      alt: 'Large pack with twenty uses costs 0.60 per use; small pack 0.70; large pack with ten uses 1.20.',
      caption: 'Illustrative equal sheets. Each denominator is labelled; unused stock has no recoverable value in the lower-use case.',
      items: [
        { label: 'Large: 20 used', detail: '12 divided by 20.', value: 0.6 },
        { label: 'Small: 10 used', detail: '7 divided by 10.', value: 0.7 },
        { label: 'Large: 10 used', detail: '12 divided by 10.', value: 1.2 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        'Write pack cost, quantity sold, and quantity expected to be used as three separate columns.',
        'Calculate the two full-use unit prices from the sample packs.',
        'Change only the large pack’s expected use to ten and recalculate using its full 12-unit cost.',
        'Add a compatibility or storage question that could change the expected-use count.',
      ],
      notice: 'The large pack changes from 0.60 to 1.20 per used sheet without any change in price.',
      troubleshooting: 'If it remains 0.60, replace quantity purchased with quantity actually used in the denominator.',
    },
    recall: {
      prompt: 'A two-litre supply costs 6 units, but only one litre will be usable. A one-litre pack costs 4. Which has the lower usable-unit cost?',
      hint: 'Assume the unused litre has no recoverable value.',
      answer: 'The large pack costs 6 per usable litre; the small pack costs 4. A lower sticker price per litre sold does not reverse that comparison.',
    },
    quiz: {
      question: 'When only ten sheets from the 12-unit pack are used, what is the effective cost per used sheet?',
      options: ['0.60 units', '0.70 units', '1.20 units'],
      correctIndex: 2,
      explanation: 'The full 12-unit cost is divided by ten usable sheets. The other figures describe different pack or usage assumptions.',
    },
    takeaway: 'Unit value depends on comparable items and a realistic usable quantity.',
    sourceNote: 'The inherited FTC shopping resource provides comparison background. Pack sizes, prices, and the zero value of unused stock are explicit hypothetical assumptions.',
  },
  {
    id: 'money-029',
    outcome: 'Test an optimistic cost-per-use claim against realistic use and upfront affordability.',
    scene: 'A travel bag looks inexpensive when a sales estimate assumes sixty outings.',
    sections: [
      {
        title: 'A low cost per use can hide a large guess',
        paragraphs: [
          "A fictional travel bag costs 120 units. A sales example calls that two units per outing by assuming sixty uses. The division is correct: 120 divided by 60 is 2. But you currently take only occasional overnight trips. If the bag is used twelve times instead, the same payment becomes ten units per use. The shop did not lower the price when it imagined more outings. It enlarged the denominator, the number underneath the division. A forecast of use is an assumption about your future routine, not a feature included with the bag.",
        ],
      },
      {
        title: 'Ground use in a routine that already exists',
        paragraphs: [
          "Look at recent occasions when the item would actually have done its job. Do not count a hoped-for new hobby as though it already supplied weekly use. A lower-use scenario is useful because plans change, equipment breaks, or another item remains more convenient. Cost per use also leaves out whether you need the function at all. Borrowing or renting might be a comparison only if it is genuinely available, suitable, and acceptable to the owner. An imaginary free alternative is no more honest than an imaginary hundred outings.",
        ],
      },
      {
        title: 'The whole payment still happens now',
        paragraphs: [
          "Suppose 150 units are available, with a separate 60-unit bill already committed. Only 90 is uncommitted, leaving a 30-unit gap for the 120-unit bag. Calling the bag two units per use does not turn checkout into sixty payments or make the bill disappear. Keep the upfront cost beside the usage estimate. This does not mean a rarely used item is always a poor choice; some occasional functions matter enough to justify their cost. It means the decision should describe the needed function, credible use count, and available budget rather than letting one flattering ratio answer all three questions.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Same bag, different use count', unit: 'units per use',
      alt: 'A 120-unit bag costs 2 per use at sixty uses and 10 per use at twelve.',
      caption: 'Illustrative usage scenarios, excluding other costs. The 120-unit upfront price stays the same in both cases.',
      items: [
        { label: '60 actual uses', detail: '120 divided by 60 = 2.', value: 2 },
        { label: '12 actual uses', detail: '120 divided by 12 = 10.', value: 10 },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Calculator'],
      steps: [
        'Write the 120-unit price once, then create separate sixty-use and twelve-use scenarios.',
        'Calculate each cost per use and label the use counts as assumptions, not observations.',
        'Subtract the committed 60 from the available 150, then compare the remaining 90 with checkout cost.',
        'Write one fact about an existing routine that would help choose a credible use count.',
      ],
      notice: 'A favourable usage ratio can coexist with a 30-unit upfront funding gap.',
      troubleshooting: 'If you spread the checkout cost over future outings, restore the full payment to today’s budget.',
    },
    recall: {
      prompt: 'A 90-unit tool is advertised at 3 per use for thirty uses. If only six uses are realistic, what changes?',
      hint: 'The denominator changes, not the invoice.',
      answer: 'Cost per use becomes 15, while the upfront payment remains 90. You still need to assess the function and available money separately.',
    },
    quiz: {
      question: 'Which observation most directly tests the bag’s two-unit-per-use claim?',
      options: ['Its 120-unit price alone', 'Evidence that sixty relevant outings are realistic', 'The existence of a twelve-month warranty'],
      correctIndex: 1,
      explanation: 'The claim depends on sixty uses. Price matters, but it does not establish that denominator; a warranty does not create outings.',
    },
    takeaway: 'Question the usage denominator and still budget for the full upfront payment.',
    sourceNote: 'The inherited FTC shopping resource provides background. Usage counts and budgets are invented; no product durability or future habit is promised.',
  },
  {
    id: 'money-030',
    outcome: 'Write a functional purchase condition and test a sale against the complete cost.',
    scene: 'A discounted monitor needs an adapter that pushes it beyond the prepared budget.',
    sections: [
      {
        title: 'Describe the problem before seeing the promotion',
        paragraphs: [
          "You want a monitor because your current screen does not show a drawing reference beside the canvas at a readable size. Before shopping, write the job it must do, the connection your computer actually supports, and a fictional total budget of 180 units. This turns a vague desire for a better setup into requirements you can check. A brighter advertisement or larger discount cannot prove that the screen solves the workspace problem. The condition belongs to your task, not to the features a seller happens to emphasise.",
        ],
      },
      {
        title: 'Include the adapter before approving the price',
        paragraphs: [
          "A sale lists a monitor at 150 units, apparently below budget. Its connection needs a compatible 25-unit adapter, and delivery costs 10. The usable setup therefore costs 185, five over the stated limit. The sale price is real within this fictional example, but it is not the complete amount needed to use the item. Compatibility also needs verification: a similar-looking socket does not establish that an adapter carries the required signal. If return terms matter because readability is uncertain, locate those terms before treating the purchase condition as satisfied.",
        ],
      },
      {
        title: 'Use a pause to answer a question',
        paragraphs: [
          "A countdown supplies a deadline for the promotion, not evidence about your needs. For an optional upgrade, an unanswered compatibility or cost question can be a reason to schedule another review rather than buy immediately. No particular waiting period is scientifically prescribed here. Necessary replacements can have real deadlines, so the useful action is to identify what still needs verification and whether another workable arrangement exists. Do not quietly raise the budget after every tempting offer without revisiting other commitments. A purchase condition can lead to buying, waiting, or declining; its job is to make the reason visible.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Sticker versus usable setup',
      alt: 'The 150-unit monitor becomes a 185-unit setup after adapter and delivery, exceeding a 180-unit budget.',
      caption: 'Illustrative prices. Compare the complete required setup with the budget; the headline alone omits 35 units.',
      items: [
        { label: 'Advertised monitor', detail: '150 units before required extras.' },
        { label: 'Ready to use', detail: '150 + 25 adapter + 10 delivery = 185; budget 180.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        'Write a condition: readable reference beside canvas, verified connection, total at most 180 units.',
        'List monitor, adapter, and delivery as separate required costs.',
        'Add them and mark the five-unit budget gap without changing the budget.',
        'Write the exact compatibility or return-term question still needing an answer; do not place an order.',
      ],
      notice: 'Your decision note explains why a 150-unit sticker does not yet satisfy the prepared condition.',
      troubleshooting: 'If the condition says only better monitor, name the task and one observable requirement.',
    },
    recall: {
      prompt: 'A discounted drawing tablet meets your size requirement but needs an unpriced software subscription. Is the prepared budget test complete?',
      hint: 'Required ongoing costs belong in the same comparison.',
      answer: 'No. Find the required subscription price and period, then compare the complete cost with the stated budget and function. A discount cannot fill the missing row.',
    },
    quiz: {
      question: 'Which fact prevents the sample monitor from passing the stated budget condition?',
      options: ['Required total is 185 against a 180 limit', 'The sale ends before next week', 'The monitor price alone is below 180'],
      correctIndex: 0,
      explanation: 'The complete cost exceeds the limit. The countdown does not change that sum, and the sticker excludes necessary extras.',
    },
    takeaway: 'Define the job and complete budget before deciding what a sale is worth to you.',
    sourceNote: 'The inherited FTC shopping source supplies background. Prices and the purchase-condition exercise are original; no waiting period or product benefit is guaranteed.',
  },
  {
    id: 'money-031',
    outcome: 'Verify a financial request through a contact route independent of the request itself.',
    scene: 'A familiar-looking account alert asks for a 600-unit transfer to a new destination.',
    sections: [
      {
        title: 'The message supplies both the problem and the helper',
        paragraphs: [
          "A message displaying your financial provider's name claims that your account is at risk. It asks you to move an illustrative 600 units to a different account and gives a number to call for help. The name and formatting look familiar, and the sender knows part of your address. Those details do not establish who controls the message. Names, logos, caller displays, and personal information can be copied or misused. The request creates a problem and then supplies the route that is supposed to verify it.",
        ],
      },
      {
        title: 'Break the dependence between claim and check',
        paragraphs: [
          "Calling the supplied number merely returns to a route chosen by the possible impersonator. Asking the same conversation to confirm itself is not independent verification. End the exchange and use a contact method you already know belongs to the service, such as its existing official app or a previously verified statement contact. Explain the alleged alert without transferring money or giving approval codes to the caller. The check should establish whether the real organisation made that specific request, not whether the person can repeat information already present in the message.",
        ],
      },
      {
        title: 'Prepare a calm route before a request arrives',
        paragraphs: [
          "Store the location of a verified support route in a private note, without passwords or one-time codes. If a genuine problem exists, you can address it through that route rather than staying inside the pressured exchange. A separate channel is not automatically trustworthy if its details came from the same suspicious message. A copied thread or a second number supplied by the caller shares the original dependency. This routine does not prove that every urgent message is fraudulent; it stops urgency from acting as identity evidence. If money was already sent, contact the actual provider promptly to ask about available options.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Two ways to check the same alert',
      alt: 'The supplied callback stays inside the 600-unit request; a previously verified route provides an independent check.',
      caption: 'Illustrative alert, not a real provider message. Compare who supplied the contact route, not how familiar it looks.',
      items: [
        { label: 'Number in the alert', detail: 'Chosen by whoever requested the 600-unit transfer.' },
        { label: 'Previously verified app', detail: 'Separate support route; ask whether that request exists.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'A harmless fictional alert description'],
      steps: [
        'Write the sample claim and the requested 600-unit action without adding any live contact details.',
        'Mark every verification route supplied by that same message as dependent on the sender.',
        'Write a calm response plan: end contact, use an already-verified route, and ask about the specific request.',
        'Add a boundary against sharing passwords or approval codes with the requester.',
      ],
      notice: 'Your verification step no longer relies on the person making the payment demand.',
      troubleshooting: 'If your second route is another number from the message, replace it with an independently known one.',
    },
    recall: {
      prompt: 'A landlord’s message thread suddenly requests rent to a new account. How would you verify without relying on that thread?',
      hint: 'Use a contact route known before the account-change request.',
      answer: 'Contact the landlord through an independently established route and confirm the specific change before paying. Familiar message history alone does not authenticate new bank details.',
    },
    quiz: {
      question: 'Which response makes the sample verification independent?',
      options: ['Ask the sender to repeat your address', 'Use a second number the sender provides', 'Open the already-verified service app and contact support'],
      correctIndex: 2,
      explanation: 'The existing verified route is not supplied by the suspicious request. More information from the same sender does not remove that dependency.',
    },
    takeaway: 'Separate the source of a financial claim from the route used to verify it.',
    sourceNote: 'The inherited FTC scam resource supports independent verification. This original alert is fictional and makes no promise about payment recovery.',
  },
  {
    id: 'money-032',
    outcome: 'Recognise why an unusual payment demand warrants verification before sending even a small amount.',
    scene: 'An unsolicited caller demands three gift-card codes to settle an alleged utility problem.',
    sections: [
      {
        title: 'Inspect the payment instruction itself',
        paragraphs: [
          "An unsolicited caller claims a utility account has a problem and insists the only solution is three gift cards worth 50 units each. They want the codes read aloud, not a payment through the utility's normal billing route. The alleged total is 150 units. Even if the caller uses an official-sounding title and knows your name, the payment instruction is evidence to examine. A demand for gift-card codes or an unfamiliar wallet is not made trustworthy by a convincing story about why normal payment methods cannot be used.",
        ],
      },
      {
        title: 'A test payment still transfers value',
        paragraphs: [
          "Sending one 50-unit code to test whether the caller is genuine does not create a reliable identity check. It exposes 50 units before you know who receives the value. The caller acknowledging the code only shows that they received it. Sending all three exposes 150. These are amounts at stake, not estimated probabilities of fraud. Stop before payment and contact the organisation through an independently known route. You do not need to disprove every detail of the story before declining an unverified instruction to transfer value in an unusual way.",
        ],
      },
      {
        title: 'If a payment already happened',
        paragraphs: [
          "Stop further payments rather than sending another amount to supposedly release, validate, or recover the first one. Contact the relevant payment provider or gift-card issuer through its verified route promptly and ask what options exist. Keep transaction details and messages privately, but do not post redeemable codes or account information in a public report. Recovery depends on the circumstances and payment system; it is not guaranteed. The point of a personal stop rule is to make the next safe action clear without blaming someone for responding to pressure. This practice uses a fictional description and requires no actual cards or transactions.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Value exposed by sending codes', unit: 'units',
      alt: 'Sending no code exposes zero; one 50-unit code exposes 50; all three expose 150.',
      caption: 'Illustrative amounts in separate scenarios, not fraud probabilities. A smaller payment is still a transfer of value.',
      items: [
        { label: 'No code sent', detail: 'No value transferred through this request.', value: 0 },
        { label: 'One test code', detail: 'One card at 50 units.', value: 50 },
        { label: 'All three codes', detail: '3 x 50 = 150 units.', value: 150 },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Pen'],
      steps: [
        'Write the fictional demand as three 50-unit codes and calculate the total value requested.',
        'Draft a stop rule for unsolicited gift-card or new-wallet payment demands.',
        'Add an independent verification route and a separate already-paid response: stop, preserve records, contact the provider.',
      ],
      notice: 'The plan replaces a test payment with verification that transfers no value.',
      troubleshooting: 'If your plan begins with sending a small amount, move verification ahead of every payment.',
    },
    recall: {
      prompt: 'Someone asks for 20 units in a new wallet to prove your identity before releasing a refund. Does the small amount make this a useful test?',
      hint: 'A payment acknowledges value transfer, not the recipient’s identity.',
      answer: 'No. Verify the refund with the real organisation through an independent route before transferring anything. A small unverified payment does not authenticate the request.',
    },
    quiz: {
      question: 'The caller accepts one sample code. What does that acknowledgement actually establish?',
      options: ['The requester received the code', 'The utility has the stated unpaid bill', 'The utility authorised this payment route'],
      correctIndex: 0,
      explanation: 'Receiving a code does not authenticate the bill or the payment route. Fifty units remain at stake without independent confirmation of either.',
    },
    takeaway: 'Verify unusual payment instructions before transferring any value, including a supposed test amount.',
    sourceNote: 'The inherited FTC scam resource identifies payment-method warning signs. Amounts are fictional; reporting or contacting a provider does not guarantee reversal.',
  },
  {
    id: 'money-033',
    outcome: 'Recognise the risk in forwarding an unverified recruitment payment to a supposed supplier.',
    scene: 'A remote-work recruiter sends an apparent equipment payment and names a supplier to pay.',
    sections: [
      {
        title: 'Follow the requested movement of money',
        paragraphs: [
          "A fictional recruiter offers remote work and sends an apparent 1,200-unit equipment payment. They ask you to forward 900 to their chosen supplier and keep 300 for setup expenses. The company name is real-looking and the offer letter is polished. But the requested task is not simply buying work equipment: it makes your personal account part of a payment route chosen by an unverified person. The risk lies in that route, not in remote work itself. A familiar employer name and an apparent incoming payment do not establish a legitimate job.",
        ],
      },
      {
        title: 'Available does not necessarily mean final',
        paragraphs: [
          "In fake-check scenarios, an account can show funds before the underlying payment has been established as genuine. If the apparent 1,200 is later reversed after you have sent 900 onward, the outbound 900 remains a separate transaction. The supposed remaining 300 was not proof of wages earned. Bank processes and liability depend on the agreement and local rules, so do not assume a universal clearance interval or guaranteed reversal outcome. The important distinction is between a displayed balance and independently verified, final funds from a legitimate source.",
        ],
      },
      {
        title: 'Verify the job outside the recruitment message',
        paragraphs: [
          "Locate the vacancy and recruitment contact through independently established company channels, not links or numbers supplied only by the recruiter. Ask whether the named role and equipment process belong to the organisation before giving sensitive information or handling funds. Do not deposit a suspicious check or forward a small amount to test the process. If you already deposited or sent money, contact your bank promptly through a verified route and preserve the messages privately. This is a warning-pattern exercise, not a verdict on every equipment allowance. It requires no contact with a recruiter, account login, or real financial transaction.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'The equipment-payment trap',
      alt: 'An apparent 1,200-unit payment is followed by a requested 900-unit transfer that remains at risk if the first payment reverses.',
      caption: 'Illustrative scam sequence, not a bank-processing timetable. Incoming and outgoing payments are separate; displayed funds are not proof of legitimacy.',
      items: [
        { label: 'Apparent payment', detail: '1,200 units shown; source not verified.' },
        { label: 'Requested forwarding', detail: '900 to a named supplier; supposed 300 remainder.' },
        { label: 'If incoming reverses', detail: 'The outbound 900 is still a separate exposure.' },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'The fictional offer above'],
      steps: [
        'Draw separate arrows for the apparent 1,200 incoming payment and requested 900 outgoing payment.',
        'Label the incoming source unverified and the supplier route recruiter-supplied.',
        'Write what happens to the outgoing exposure if the incoming payment reverses.',
        'Draft a vacancy-verification question for an independently found company contact; do not send or deposit anything.',
      ],
      notice: 'The diagram shows why an incoming screen balance does not make forwarding money safe.',
      troubleshooting: 'If you net the arrows into a guaranteed 300 profit, restore the two transactions and their separate uncertainty.',
    },
    recall: {
      prompt: 'A buyer overpays for a used camera and asks you to forward the excess to their courier. What feature resembles the recruitment example?',
      hint: 'One unverified incoming payment is used to justify another outgoing one.',
      answer: 'You are being asked to route money onward before independently establishing the payment and parties. Stop and verify through the relevant payment provider rather than trusting the apparent excess.',
    },
    quiz: {
      question: 'Which detail most directly creates the warning in the sample offer?',
      options: ['The job can be done remotely', 'An unverified payment must be forwarded to a named supplier', 'The company has a public website'],
      correctIndex: 1,
      explanation: 'The forwarding instruction creates the payment-route exposure. Remote work and a public company name alone do not establish a scam or legitimacy.',
    },
    takeaway: 'Do not treat an apparent recruitment payment as permission to route money onward.',
    sourceNote: 'The inherited FTC job-scam page describes fake-check equipment schemes. Amounts are invented; account handling and recovery options depend on actual circumstances.',
  },
  {
    id: 'money-034',
    outcome: 'Separate an unexpected browser warning from a verified support relationship.',
    scene: 'A browser pop-up demands a 49-unit repair and asks for remote access.',
    sections: [
      {
        title: 'A page can imitate a system warning',
        paragraphs: [
          "While reading an ordinary webpage, a pop-up claims your device is infected. It advertises a fictional 49-unit repair and provides a support number. The window uses security language and looks urgent, but it is still content presented by a page. Its appearance does not prove that the operating system diagnosed a fault. A request to call the number moves you from an unverified warning to an unverified helper chosen by the same source. The amount is only part of the risk if the next request is remote access.",
        ],
      },
      {
        title: 'Remote access changes what the stranger can do',
        paragraphs: [
          "Remote-control software can let another person view or operate parts of a computer, depending on the permissions granted. A caller might present ordinary technical screens as proof of infection or ask you to open a financial account. Granting access does not make their diagnosis valid; it gives the unverified person more opportunity to observe or act. The 49-unit quote therefore does not cap possible exposure. Do not install software, share approval codes, or open financial accounts at the direction of an unexpected pop-up or its caller.",
        ],
      },
      {
        title: 'Use the support route you already trust',
        paragraphs: [
          "Close the page with normal browser controls rather than following the warning's own payment or support buttons. If it cannot be closed normally or you are unsure what happened, seek help through a verified support route. For an employer-owned device, use your real IT team and its established process rather than changing security settings yourself. If remote access was already granted, stop the interaction and promptly report what was installed or permitted to trusted support. This lesson does not diagnose a real infection or prescribe a cleanup procedure. The practice is a calm written rehearsal, not a visit to a suspicious site.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Who chose the support route?',
      alt: 'The pop-up supplies a 49-unit repair and remote-access request; verified support investigates without trusting that claim.',
      caption: 'Illustrative browser incident. A payment quote is not an exposure limit, and a warning’s design is not diagnostic evidence.',
      items: [
        { label: 'Pop-up’s route', detail: '49-unit repair claim; unverified caller requests device control.' },
        { label: 'Established support', detail: 'Report the browser event through a previously verified IT or device-support route.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Pen'],
      steps: [
        'Write a harmless mock description: browser page claims infection and asks for a 49-unit remote repair.',
        'Underline what is merely claimed and circle the request that grants access.',
        'Draft a response using normal browser controls and an established support route, without visiting a warning page.',
        'Add a report line for access already granted; keep passwords and financial details out of it.',
      ],
      notice: 'Your plan treats the warning as an unverified claim rather than a diagnosis.',
      troubleshooting: 'If the support number comes from the warning, replace it with a route established before the incident.',
    },
    recall: {
      prompt: 'A caller offers a free device check but asks for remote control while you open banking pages. What matters beyond the zero price?',
      hint: 'Price and access permissions are different risks.',
      answer: 'The caller’s authority remains unverified, and remote access can expose financial activity. Decline that route and use independently verified support, regardless of the quoted price.',
    },
    quiz: {
      question: 'Which response best separates the sample warning from its unverified helper?',
      options: ['Pay only the quoted 49 units first', 'Ask the pop-up’s caller to prove the warning', 'Close the page normally and contact established support if needed'],
      correctIndex: 2,
      explanation: 'An established route avoids relying on the warning’s own contact. A small payment or another claim from its caller does not authenticate it.',
    },
    takeaway: 'An unexpected security message does not authorise its chosen caller to control your device.',
    sourceNote: 'The inherited FTC tech-support-scam resource provides the warning pattern. The pop-up is fictional; actual device incidents need trusted, context-specific support.',
  },
  {
    id: 'money-035',
    outcome: 'Distinguish an encrypted shopping connection from evidence about the seller and transaction.',
    scene: 'A headphone shop has HTTPS but unclear identity and return terms.',
    sections: [
      {
        title: 'What the connection tells you',
        paragraphs: [
          "A fictional shop lists headphones at 40 units with 8 for delivery, making 48 at checkout. Its address uses HTTPS, and the browser shows a secure connection. That means the connection uses encryption; it does not establish that the seller will ship the headphones or honour its claims. Encryption protects data in transit between the browser and the site when the connection is valid. A dishonest operator can also run an encrypted site. Connection security and merchant reliability therefore answer different questions, even when both appear in the same checkout experience.",
        ],
      },
      {
        title: 'Investigate the party behind the order',
        paragraphs: [
          "Check the exact domain, identifiable seller details, usable contact information, and the stated delivery and return terms. Look for independent reports from more than one source, remembering that reviews can be manipulated and a new shop may have no history. A lack of complaints is not proof of reliability. Suppose another fictional encrypted shop quotes 55 including delivery and has clearer contact and return information. The seven-unit price difference is real within the example, but neither price nor polished wording proves honest fulfilment. Each claim still needs evidence appropriate to it.",
        ],
      },
      {
        title: 'Do not submit payment details to investigate',
        paragraphs: [
          "You can inspect public information without entering card details, creating an account, or making a small test purchase. Check whether payment methods and dispute options are documented, while avoiding assumptions that a particular method guarantees recovery. If only a difficult-to-reverse transfer is accepted, that deserves scrutiny alongside other evidence. Record unknowns rather than letting the padlock symbol answer them. This process can lead to an unresolved assessment; you do not have to prove a site fraudulent before choosing not to transact. The exercise distinguishes kinds of evidence and does not certify any real shop as safe.",
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Two encrypted sample checkouts',
      alt: 'A 48-unit checkout has unclear seller terms; a 55-unit checkout has more documented terms, but neither is certified by HTTPS.',
      caption: 'Illustrative shops and totals. HTTPS is shared; seller information requires its own checks and is not a guarantee.',
      items: [
        { label: 'Shop A: 48 total', detail: '40 + 8 delivery; HTTPS; seller and returns unclear.' },
        { label: 'Shop B: 55 total', detail: 'Delivery included; HTTPS; seller and return claims still need checking.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'The two fictional shop descriptions'],
      steps: [
        'Create separate rows for connection, seller identity, delivery, returns, and payment terms.',
        'Enter only facts supplied in each sample description; mark the remaining cells unknown.',
        'Calculate both checkout totals without using HTTPS as evidence in the seller-identity row.',
        'Write one independent check you would need before considering a transaction; enter no financial details.',
      ],
      notice: 'A secure-connection entry leaves several transaction questions unanswered.',
      troubleshooting: 'If every row says safe because HTTPS, replace that conclusion with the specific evidence each row needs.',
    },
    recall: {
      prompt: 'A new ticket site uses HTTPS and has no complaints online. Does that establish that its event tickets are genuine?',
      hint: 'Absence of history is not independent confirmation of inventory.',
      answer: 'No. Check the seller and ticket-authorisation claims through independent sources. Encryption and a clean search history do not prove genuine tickets or delivery.',
    },
    quiz: {
      question: 'What does a valid HTTPS connection establish by itself in the sample?',
      options: ['Data in transit is encrypted', 'The seller’s stock is verified', 'The return promise will be honoured'],
      correctIndex: 0,
      explanation: 'Connection protection is not fulfilment evidence. Stock and return performance require separate investigation of the seller.',
    },
    takeaway: 'Check connection security, seller identity, and transaction terms as separate questions.',
    sourceNote: 'The inherited FTC online-shopping source supplies background. Both shops are invented; this worksheet provides no seller certification or universal payment protection.',
  },
  {
    id: 'money-036',
    outcome: 'Split a payment into interest and principal before calculating the remaining debt.',
    scene: 'A small fictional loan payment covers interest before reducing the amount borrowed.',
    sections: [
      {
        title: 'The payment has more than one job',
        paragraphs: [
          "A fictional loan begins a month with 1,000 units of principal, meaning the outstanding amount borrowed. Before payment, the model charges one percent monthly interest on that opening principal, or 10 units. You then pay 50. Under the stated rule, the payment first covers interest and the remainder reduces principal. The 50 leaving your account therefore does not mean the amount borrowed falls by 50. Separate what pays the cost of borrowing from what returns the borrowed money before reading the new balance.",
        ],
      },
      {
        title: 'Allocate before subtracting from principal',
        paragraphs: [
          "From the 50-unit payment, 10 covers the interest. The remaining 40 reduces principal, leaving 1,000 minus 40, or 960. An equivalent balance check is opening debt 1,000 plus 10 interest minus 50 payment, also 960. Do not subtract the full 50 from principal and then forget the interest; that produces 950 and understates what remains. The payment portions add to 50, while the interest charge and principal balance answer different questions. This example has no fees, new borrowing, penalties, or unpaid earlier interest.",
        ],
      },
      {
        title: 'A smaller principal changes the next split',
        paragraphs: [
          "If the same model continues for a second month, one percent of 960 is 9.60. Another 50-unit payment then reduces principal by 40.40, leaving 919.60. The payment stayed the same, but more went toward principal because less interest was charged on the smaller opening amount. Real contracts specify accrual dates, payment allocation, and any extra-payment conditions. A statement might not follow this monthly simplification, so inspect its rules before applying the example. Tracking principal helps explain debt reduction; it does not prescribe an affordable payment or imply that every type of loan allocates money in this order.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Inside the first 50-unit payment', unit: 'units',
      alt: 'Ten units pay interest and forty reduce principal, together making the fifty-unit payment.',
      caption: 'Illustrative interest-first allocation, with no fees. These portions sum to the payment, not the remaining 960-unit principal.',
      items: [
        { label: 'Interest paid', detail: '1% of opening 1,000.', value: 10 },
        { label: 'Principal repaid', detail: '50 payment less 10 interest.', value: 40 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        'Write opening principal 1,000, interest 10, and payment 50 in three labelled rows.',
        'Allocate 10 of the payment to interest and the remaining 40 to principal.',
        'Carry the resulting 960 principal into a second month and calculate one percent interest.',
        'Allocate a second 50 payment and verify the remaining principal is 919.60.',
      ],
      notice: 'The second interest portion is 9.60, leaving 40.40 of the same payment for principal.',
      troubleshooting: 'If first-month principal becomes 950, subtract only the payment left after covering interest.',
    },
    recall: {
      prompt: 'A 500-unit principal incurs 2% monthly interest before a 30-unit payment. With interest paid first and no fees, what remains?',
      hint: 'Find interest, then the part of the payment left for principal.',
      answer: 'Interest is 10. The other 20 reduces principal, leaving 480. The full 30 payment is not all debt reduction.',
    },
    quiz: {
      question: 'How much of the first sample 50-unit payment reduces principal?',
      options: ['50 units', '40 units', '10 units'],
      correctIndex: 1,
      explanation: 'Ten covers interest first. Forty remains for principal; the payment total and interest portion are not the same as principal reduction.',
    },
    takeaway: 'A payment reduces principal only by the part allocated to principal under the agreement.',
    sourceNote: 'The inherited CFPB credit resource supplies background. Monthly interest and allocation order are explicit example rules, not a reconstruction of an actual statement.',
  },
  {
    id: 'money-037',
    outcome: 'Distinguish the current minimum payment from assumptions about paying off the whole balance.',
    scene: 'A fictional card balance changes differently with and without new purchases after the same minimum payment.',
    sections: [
      {
        title: 'Minimum answers a limited question',
        paragraphs: [
          "A statement lists a balance, a minimum payment, and a due date. The minimum is the amount required for that billing period under the agreement; it is not a forecast of when the debt will disappear. Future minimums can change, and interest, fees, or new purchases can change the balance between payments. Reading only the minimum leaves those moving parts out. A repayment illustration therefore needs assumptions about rates, payment amounts, and whether borrowing continues. Meeting a current requirement and clearing a debt are related but different questions.",
        ],
      },
      {
        title: 'Hold the payment constant and change spending',
        paragraphs: [
          "Use a simplified fictional cycle beginning at 500 units. It adds 2% interest, then receives a 20-unit payment, with no fees. Interest is 10, so the balance becomes 500 plus 10 minus 20, or 490. Now add a new 30-unit purchase immediately after that payment. The balance becomes 520 instead. The same payment can coexist with a falling balance in one case and a rising balance in the other. The new purchase is not interest, and the 20 leaving the account is not proof that total debt fell by 20.",
        ],
      },
      {
        title: 'Read the assumptions beside the timeline',
        paragraphs: [
          "If a payoff illustration assumes no new borrowing, continuing purchases makes that illustration a different scenario from your account. Do not extend the example's fixed 20 payment into a real payoff date without the actual minimum formula and interest rules. Locate the due date, balance, minimum, and any stated repayment assumptions as separate facts. If payment is becoming difficult, contact the provider through a verified route to ask about available options before relying on an arrangement that has not been agreed. Silence does not pause an obligation. This exercise explains a statement, not an individual repayment strategy or promise of assistance.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Same cycle, same 20-unit payment', unit: 'units',
      alt: 'The ending balance is 490 without a new purchase and 520 after a new 30-unit purchase.',
      caption: 'Illustrative opening balance 500, then 2% interest and payment. The purchase happens last; no fees or further interest are included.',
      items: [
        { label: 'No new purchase', detail: '500 + 10 interest less 20 = 490.', value: 490 },
        { label: 'New 30-unit purchase', detail: '490 + 30 = 520.', value: 520 },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        'Make a fictional statement card with opening balance 500, payment 20, and a clearly labelled example due date.',
        'Calculate the cycle using two percent interest before payment, with no new borrowing.',
        'Add a 30-unit purchase after payment in a second scenario and compare the balances.',
        'Write the assumptions a longer payoff estimate would need, including future rates, payments, and purchases.',
      ],
      notice: 'The payment happens in both cases, but only the no-purchase case ends below 500.',
      troubleshooting: 'If both end at 490, add the new purchase as a separate change after payment.',
    },
    recall: {
      prompt: 'A cycle begins at 300, adds 6 interest, receives 15 payment, then adds a 25 purchase. What ending balance tests the payoff assumption?',
      hint: 'Preserve all four changes in their stated order.',
      answer: '300 plus 6 minus 15 plus 25 equals 316. A no-new-borrowing estimate would instead use 291, so it describes a different path.',
    },
    quiz: {
      question: 'What does the sample balance become after interest, payment, and the new purchase?',
      options: ['490 units', '480 units', '520 units'],
      correctIndex: 2,
      explanation: '500 plus 10 minus 20 plus 30 equals 520. The 490 result omits the purchase; 480 also omits interest.',
    },
    takeaway: 'Read the minimum due separately from the assumptions needed to estimate payoff.',
    sourceNote: 'The inherited CFPB credit source provides statement background. This single-cycle model is not a real minimum-payment formula or payoff schedule.',
  },
  {
    id: 'money-038',
    outcome: 'Read a variable-rate formula, keeping percentage-point margins separate from percentage multiplication.',
    scene: 'A fictional borrowing agreement resets its rate using an external reference plus a margin.',
    sections: [
      {
        title: 'The quoted rate can be a formula',
        paragraphs: [
          "A fictional borrowing agreement says its annual rate equals a reference rate plus three percentage points. A reference rate is an external number the agreement uses in its calculation; the margin is the amount added under the contract. If the reference is 4%, the resulting rate is 7%. If it becomes 5% at the next stated reset, the result is 8%, assuming no other conditions apply. The quoted borrowing rate can therefore change without the margin changing. You need the formula and reset timing, not only today's number.",
        ],
      },
      {
        title: 'Percentage points are not a percentage of the rate',
        paragraphs: [
          "Adding three percentage points to 5% means 5 plus 3, giving 8%. Increasing 5% by three percent of itself would instead give 5.15%, a different operation. To see the money effect of the stated formula, hold a fictional 1,000-unit principal unchanged for a full year and use simple interest. At 7%, the charge is 70 units; at 8%, it is 80. These are alternative one-year scenarios, not two charges to add. Actual repayment schedules reduce balances over time, so this constant-principal illustration is not a loan quote.",
        ],
      },
      {
        title: 'Find the boundaries and effective date',
        paragraphs: [
          "A cap sets a maximum allowed rate under specified terms; a floor sets a minimum. An introductory rate can apply only for an initial period. Read how these conditions interact with the formula and when a reference change affects your payments. A reference moving today does not automatically mean your agreement resets today. Likewise, fixed-rate wording needs its duration checked rather than being treated as a promise about every future charge. This example predicts no rate movement and does not identify an appropriate loan. Its purpose is to turn a rate label into a calculation whose inputs and dates can be inspected.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'One-year interest on constant principal', unit: 'units',
      alt: 'On an unchanged 1,000 units, a 7% simple annual rate costs 70 and an 8% rate costs 80.',
      caption: 'Illustrative constant 1,000-unit base for one year. Rates use a three-percentage-point margin; repayment effects and fees are excluded.',
      items: [
        { label: 'Reference 4%, rate 7%', detail: '1,000 x 0.07 = 70.', value: 70 },
        { label: 'Reference 5%, rate 8%', detail: '1,000 x 0.08 = 80.', value: 80 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        'Write rate equals reference plus three percentage points, then substitute references of four and five percent.',
        'Calculate simple one-year interest on an unchanged 1,000-unit principal for both results.',
        'Add blank fields for reset date, cap, floor, and introductory period rather than assuming they do not exist.',
        'Explain why the ten-unit interest difference is not automatically the change in a real monthly repayment.',
      ],
      notice: 'You obtain rates of 7% and 8%, with alternative annual simple-interest amounts of 70 and 80.',
      troubleshooting: 'If the second rate is 5.15%, add percentage points rather than multiplying the reference by 1.03.',
    },
    recall: {
      prompt: 'A formula gives reference 2% plus a three-point margin, but the contract states a 6% minimum rate. What applies under those terms?',
      hint: 'Calculate first, then apply the stated floor.',
      answer: 'The formula gives 5%, below the 6% floor, so the rate is 6% under this hypothetical rule. The floor changes the formula result.',
    },
    quiz: {
      question: 'With a 5% reference and a three-percentage-point margin, before other conditions, what is the rate?',
      options: ['8%', '5.15%', '7%'],
      correctIndex: 0,
      explanation: 'The margin is added directly in percentage points. 5.15% uses multiplication; 7% would use the earlier 4% reference.',
    },
    takeaway: 'Read the formula, reset dates, and limits behind a variable-rate headline.',
    sourceNote: 'The inherited CFPB credit resource supplies background. Rates are invented; simple-interest comparisons exclude fees, amortisation, and any jurisdiction-specific rate disclosure.',
  },
  {
    id: 'money-039',
    outcome: 'Compare remaining outlays and repayment duration before interpreting a lower replacement payment.',
    scene: 'A fictional debt-switch offer cuts the monthly payment but doubles the remaining term.',
    sections: [
      {
        title: 'The smaller payment changes the calendar',
        paragraphs: [
          "An existing fictional debt has twelve payments of 100 units remaining. A replacement offer would clear that debt in full and require twenty-four monthly payments of 60, plus a separate 50-unit switching fee now. The monthly payment falls by 40, which could matter to short-term cash flow. But twice as many payments remain. A payment amount measures one scheduled outflow, not the total still to be paid. Before calling the offer cheaper, write the number of payments and the cost of making the switch beside the monthly headline.",
        ],
      },
      {
        title: 'Total what happens from today onward',
        paragraphs: [
          "Keeping the existing schedule means twelve times 100, or 1,200 units of remaining outlay. Switching means twenty-four times 60, or 1,440, plus the separate 50 fee, making 1,490. The replacement costs 290 more in this defined comparison, even though each monthly payment is smaller. Ignore payments already made because they occur before this decision in either path. This example assumes the replacement really settles the old obligation completely and that no other charges apply. If a settlement fee or remaining old balance exists, it belongs in the switching calculation too.",
        ],
      },
      {
        title: 'Keep affordability and cost as separate questions',
        paragraphs: [
          "A lower monthly payment can still be useful to discuss when the current schedule is unaffordable, but that does not erase its longer duration or higher total. Conversely, a lower total is not workable if the required payments cannot be made on time. Actual comparisons need the settlement amount, fixed or variable rates, mandatory fees, remaining schedule, and any consequences of extending the debt. Check whether quoted totals already include fees so they are counted once. This worksheet does not recommend switching or staying; it identifies the tradeoff and missing facts rather than deciding from one small monthly number.",
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Remaining outlay from today', unit: 'units',
      alt: 'Keeping the old schedule costs 1,200 units; the replacement totals 1,490.',
      caption: 'Illustrative fixed schedules. The replacement fully settles the old debt; bars include its separate 50-unit fee, with no other charges.',
      items: [
        { label: 'Keep: 12 months', detail: '12 x 100 = 1,200.', value: 1200 },
        { label: 'Switch: 24 months', detail: '24 x 60 + 50 = 1,490.', value: 1490 },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        'Create columns for remaining payment count, payment size, separate fee, and total for both paths.',
        'Calculate 1,200 and 1,490 using only outflows from today onward.',
        'Write monthly change 40 lower and total change 290 higher on separate lines.',
        'Add questions about full settlement and omitted charges without applying for or changing any loan.',
      ],
      notice: 'The smaller monthly figure coexists with twelve more payments and a larger remaining total.',
      troubleshooting: 'If switching totals 1,440, include the separately stated 50-unit fee; do not add it twice.',
    },
    recall: {
      prompt: 'Six remaining payments of 100 can be replaced by twelve of 55 plus a separate 20 fee. What tradeoff appears?',
      hint: 'Compare both payment size and total remaining outlay.',
      answer: 'The old total is 600; the new total is 680. Monthly payment falls by 45, but remaining outlay rises by 80 and duration doubles.',
    },
    quiz: {
      question: 'What is the replacement’s total remaining outlay in the main example?',
      options: ['1,440 units', '1,490 units', '1,200 units'],
      correctIndex: 1,
      explanation: 'Twenty-four payments of 60 total 1,440; the separate fee makes 1,490. The old schedule’s total is 1,200.',
    },
    takeaway: 'Compare remaining total, payment dates, and duration separately before judging a switching offer.',
    sourceNote: 'Inherited CFPB credit and instalment sources provide background. These original schedules omit changing rates and are not refinancing or affordability advice.',
  },
  {
    id: 'money-040',
    outcome: 'Combine all instalment dates with ordinary bills before assessing another payment commitment.',
    scene: 'Shoe, lamp, and travel instalments collide with a household bill on the same day.',
    sections: [
      {
        title: 'Checkout screens show only one commitment',
        paragraphs: [
          "Three fictional instalment plans cover shoes, a lamp, and a travel booking. Each has two remaining payments of 40 units, due on November 5 and November 19. Viewed separately, every checkout describes a small payment. Your account must handle them together. On November 5, three payments of 40 require 120 units; November 19 requires another 120. Across the three plans, six remaining payments total 240. Splitting purchases into instalments changes when money leaves, not whether the combined obligation exists. An earlier initial payment does not erase the dates still ahead.",
        ],
      },
      {
        title: 'Add ordinary bills to the same dates',
        paragraphs: [
          "Suppose 150 units are available before November 5, with no new income before that date. A separate household bill of 50 is also due then. The day needs 120 plus 50, or 170, leaving a 20-unit shortfall. Each plan could look manageable next to the 150 balance on its own screen, while the combined day fails the check. Use one calendar or ledger for all plans and essential bills. Do not add a grand total as if it were another instalment; the 120 is the sum of three 40-unit obligations.",
        ],
      },
      {
        title: 'A return does not instantly rewrite the schedule',
        paragraphs: [
          "If the lamp is returned, a refund request and an adjusted credit schedule are different events. Until the provider confirms what remains due, do not simply remove its payment from the calendar or cancel collection blindly. Check automatic collection, late charges, and how refunds are applied under the actual agreement. A small first payment also leaves future dates that may overlap a later purchase. This exercise is about seeing existing obligations together, not recommending an instalment product or assuming uniform borrower protections. If the calendar reveals a gap, seek verified information about available options rather than treating a hoped-for refund as confirmed money.",
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'One calendar for all three plans',
      alt: '150 is available before November 5, when instalments need 120 and a household bill needs 50; another 120 is due November 19.',
      caption: 'Illustrative dates and units, not proportional spacing. The first payment day needs 170, exceeding available money by 20.',
      items: [
        { label: 'Before November 5', detail: '150 units available; no earlier new income.' },
        { label: 'November 5: plans', detail: 'Shoes 40 + lamp 40 + travel 40 = 120.' },
        { label: 'November 5: other bill', detail: '50 more due; total 170; shortfall 20.' },
        { label: 'November 19: plans', detail: 'Another 3 x 40 = 120 due.' },
      ],
    }],
    practice: {
      minutes: 9, needs: ['Paper', 'Calendar', 'Calculator'],
      steps: [
        'Make one row each for shoes, lamp, and travel, with 40 on both stated dates.',
        'Sum each date’s instalments and label the combined amount 120, not an extra payment.',
        'Add the separate 50-unit bill on November 5 and compare 170 with available 150.',
        'Mark a hypothetical lamp refund pending, leaving the payment row unchanged until adjustment is confirmed.',
        'Write one provider question about refund timing or the remaining repayment schedule.',
      ],
      notice: 'The shared calendar reveals a 20-unit first-date shortfall that separate checkout screens hide.',
      troubleshooting: 'If the date totals 290, you counted the 120 aggregate again; add only the individual obligations.',
    },
    recall: {
      prompt: 'Payments of 25, 35, and 20 fall before payday, with only 70 available. What must a combined calendar show?',
      hint: 'The account funds the sum, not the smallest instalment.',
      answer: 'The payments require 80 units, creating a 10-unit shortfall before payday. Later income or an unconfirmed refund does not fund that earlier date.',
    },
    quiz: {
      question: 'What is required on November 5 including the sample household bill?',
      options: ['120 units', '90 units', '170 units'],
      correctIndex: 2,
      explanation: 'Three 40-unit instalments total 120, plus 50 makes 170. Ninety counts only one plan; 120 omits the bill.',
    },
    takeaway: 'Judge instalments on the combined calendar, including other bills and only confirmed adjustments.',
    sourceNote: 'Inherited CFPB instalment and emergency-fund resources provide background. The plans are fictional; refund handling and borrower protections depend on actual terms and jurisdiction.',
  },
]