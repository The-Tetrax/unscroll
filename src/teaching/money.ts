import type { LessonGuide } from './types'

// Original teaching in illustrative currency-neutral units, not product advice.
// Omit sources deliberately: each ID inherits its exact existing source records.
export const moneyGuides: LessonGuide[] = [
  {
    id: 'money-001',
    outcome: `Read a fee waiver as measurement, threshold, period, and consequence, then test it against the figure it actually names, here the lowest daily balance rather than the month-end total.`,
    scene: 'A salary account dips below its threshold when rent leaves.',
    sections: [
      {
        title: 'The balance after rent',
        paragraphs: [
          `Your account ends the month with 800 units. Then an 8-unit monthly fee appears on the statement. The advertisement said the fee could be waived, and 800 feels like plenty. Your first thought is that the bank has made a mistake. Before you phone anyone, look at what the waiver actually measures.`,
          `In this hypothetical account, the fee is waived if the daily closing balance stays at or above 500 units on every day of the month. Rent left on the 12th. That evening the balance closed at 400. Salary arrived on the 25th and lifted the balance back to 800, where it stayed until month end. The salary repaired the balance. It did not change what happened on the 12th. The bank looked at the 12th, saw 400, and charged the fee. There was no error.`,
        ],
      },
      {
        title: 'Minimum is different from average',
        paragraphs: [
          `Think of a school certificate for perfect attendance. The rule is present every day. A pupil who misses the 12th and then turns up every day after has excellent attendance by any ordinary standard. The certificate still goes to someone else. The register has a gap on one line, and nobody averages attendance for that certificate. They look for the single worst day.`,
          `A balance condition works the same way. A minimum is the lowest observation in the period: the worst day. An average adds up every observation and divides by how many there were. A month-end balance is a single observation, the last one. These three numbers answer three different questions. None of them can stand in for another. Here the minimum is 400 and the threshold is 500. The condition fails, and the stated 8-unit fee applies. There is no average to calculate and no month-end figure to argue with. Some accounts offer a different route instead, such as a qualifying salary deposit of a stated size. That route has its own measurement. You would check the deposit definition and amount, not infer eligibility from any balance.`,
        ],
      },
      {
        title: 'Write a condition you can test',
        paragraphs: [
          `Turn the waiver into one sentence with four parts: the measurement, the threshold, the period, and the consequence. For this example: every daily closing balance must reach 500 during the month, otherwise the monthly charge is 8 units. Now you know what evidence you need. Not the summary page, which shows 800. The daily balance list, where the 12th shows 400.`,
          `Put the two numbers side by side. Lowest daily balance: 400. Month-end balance: 800. The condition names the daily figure, so the fee is explained. If the agreement lists a second waiver route, write that as its own sentence too. Then check whether either route on its own is enough. A month between jobs can change your eligibility even though last month's fee was zero. The useful result here is a verified explanation of one charge. It is not a decision to open, close, or switch accounts.`,
        ],
      },
      {
        title: 'Why the month-end figure feels like proof',
        paragraphs: [
          `The month-end number is the one the app shows first, in large type. It is the one you remember. The 12th was two weeks ago and the balance recovered, so the dip no longer feels real. The fee, though, was triggered on the day it happened, like the gap on the register. Recovery afterwards is good for you and invisible to the rule.`,
          `Two habits. When a fee surprises you, find the exact condition in the agreement. Write it as measurement, threshold, period, and consequence before you judge the charge. And before a large payment leaves, glance at what the balance will close at that evening. A single day below the line is enough.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Two observations, one account',
      alt: 'The lowest daily balance is 400; the month ends at 800 units.',
      caption: `Look at the left item first: the 12th, after rent, closing at 400 units. That single day is the gap on the attendance register, and it is the only figure this waiver checks. The month-end 800 on the right is the number the app shows you in large type, and it is irrelevant to a rule that says every day. Illustrative units.`,
      items: [
        { label: '12th: after rent', detail: '400 units; below the 500-unit threshold.' },
        { label: 'Month end', detail: '800 units; does not erase the earlier dip.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Pen', 'The example above'],
      steps: [
        `Write four headings across the page: measurement, threshold, period, and fee. Fill them in from the example, so the waiver becomes a sentence you can test instead of a feeling that 800 should be enough.`,
        `Under the measurement column, write 400 next to lowest daily balance and 800 next to closing balance. Seeing both figures side by side is what stops the larger one from quietly winning.`,
        `Circle the observation the condition actually names, the daily one, and write a single line saying whether the 8-unit fee applies and why. If you cannot finish the sentence, the condition is not yet clear enough.`,
        `Draft one question you could ask the provider about an alternative salary-deposit waiver, including what size and kind of deposit would count. Do not change any real account; this is about understanding the rule.`,
      ],
      notice: `Your written explanation connects the 8-unit charge to the 400-unit daily minimum on the 12th, and the month-end 800 appears in your notes as the number that did not matter. You could now explain the fee to someone else in two sentences.`,
      troubleshooting: `If both balances still seem relevant, underline the word daily in the condition and ask which of your two numbers is a daily figure. If the agreement does not say daily, do not assume it; find the actual wording, because a monthly average rule would need a different calculation.`,
    },
    recall: {
      prompt: 'Another account waives a fee for a qualifying 1,000-unit deposit. Does an ending balance of 1,500 prove eligibility?',
      hint: 'Ask what event is measured, not what remains.',
      answer: `No. This waiver measures an event, a deposit arriving, and a balance measures what is left over. The 1,500 could be money that has sat there for months, or three small transfers that never individually reached 1,000. Like the attendance register, the rule is looking for a specific thing on a specific line, not a comfortable total at the end. To test it you need the deposit list for the period: did one deposit of at least 1,000 units arrive, and does it meet the agreement's definition of qualifying, which might exclude transfers from your own other account? A large closing balance is compatible with both passing and failing that test, so it proves nothing on its own.`,
    },
    quiz: {
      question: 'The waiver requires 500 every day. Which record resolves the 8-unit charge?',
      options: ['The month-end 800 balance', 'The lowest daily balance of 400', 'The largest deposit that month'],
      correctIndex: 1,
      explanation: `The condition says every day, so the only record that can test it is the worst day, and the lowest daily balance of 400 is below 500. That is the gap on the register. The month-end 800 is a single observation that arrived too late to matter, and the largest deposit answers a question this waiver never asked. Both could sit comfortably alongside a disqualifying dip on the 12th.`,
    },
    takeaway: `A fee waiver is a sentence with four parts, measurement, threshold, period, and consequence, and you can only judge a charge against the figure it actually names: a rule that says every day is tested by the worst day, like a perfect-attendance register, so the lowest daily balance decides it and the month-end total does not.`,
    sourceNote: 'The inherited CFPB banking resource supplies background. These invented conditions are not universal account rules or legal protections.',
  },
  {
    id: 'money-002',
    outcome: `Turn an annual percentage fee into an amount of money on a stated balance and period, add every separate flat charge on its own line, and compare the totals rather than the printed rates.`,
    scene: 'Two fictional fee sheets use percentages beside small flat charges.',
    sections: [
      {
        title: 'Put money beside the percentage',
        paragraphs: [
          `Two fictional investment fee sheets sit on the table. One charges 0.5% a year. The other charges 1.5% a year. The gap is one percentage point, and one point sounds like very little. You are inclined to shrug and choose on some other basis. That shrug is the problem, because neither number is an amount of money yet.`,
          `A percentage is a rate, not a cost. It tells you how much is taken out of every hundred units, and it stays silent about how many hundreds you have or for how long. Until you supply a balance and a period, 0.5% and 1.5% are instructions without a result. Put money beside them and the shrug usually disappears.`,
        ],
      },
      {
        title: 'A rate is a slice, money is the cake',
        paragraphs: [
          `Think of a 10% service charge in a restaurant. On a 20-unit lunch it is 2 units. On a 200-unit dinner for the whole table it is 20 units. The printed percentage never changed. The money changed tenfold, because the bill underneath it changed tenfold. Percent means per hundred, so a percentage is a slice size. How much you actually hand over depends on the size of the cake.`,
          `To turn the slice into money, convert the percentage to a multiplier by dividing by 100. So 0.5% becomes 0.005 and 1.5% becomes 0.015. For a deliberately simple comparison, hold the balance at 10,000 units for one year. Then 10,000 multiplied by 0.005 is 50 units. And 10,000 multiplied by 0.015 is 150 units. The one-point gap on paper is a 100-unit gap in money on this balance. On a 1,000-unit balance it would be 10 units. On 100,000 it would be 1,000. Same slice, different cake.`,
        ],
      },
      {
        title: 'Recurring and separate costs',
        paragraphs: [
          `Now suppose both sheets also list a separate 20-unit annual account charge. Add it on its own line. The known annual costs become 50 plus 20, which is 70 units, and 150 plus 20, which is 170 units. The difference is still 100 units. The flat charge raises both totals equally and changes nothing about the comparison between them. It is the percentage part that stretches.`,
          `Notice the two kinds of difference in play. The rates differ by one percentage point, which describes the gap between two percentages. The costs differ by 100 units, which describes money, and it depends entirely on the balance underneath. Keep any transaction or exit charges on separate lines too, with a note of what triggers each one. If a quoted total already includes a charge, do not add it a second time. And if a charge is unknown, write unknown. An unknown charge is not the same as zero, and a total built on zero looks more complete than it is.`,
        ],
      },
      {
        title: 'A comparison, not a forecast',
        paragraphs: [
          `Real balances move all year, and percentage charges are usually taken a little at a time, often inside the value of your holding rather than as a visible bill. You may never see a 150-unit payment leave your bank account. The money is still gone. Freezing the balance at 10,000 makes the arithmetic legible; it does not predict what the holding will be worth, and it does not say which product is suitable. Fees take their slice in a losing year as well as a winning one. And before you read a published performance figure, check whether it has already had these costs taken out, or whether they are still to come.`,
          `Two habits. Never compare two percentage fees until you have multiplied each by the same balance for the same period and written the result in money. And give every separate charge its own line, with unknown written where you do not know, so the total cannot look tidier than your knowledge.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Known annual costs', unit: 'units',
      alt: 'The 0.5% option costs 70 units; the 1.5% option costs 170.',
      caption: `Look at the gap between the bars first: 100 units, produced by a one-point difference in the printed rates on a 10,000-unit balance. Then find the 20 inside each bar. The flat charge is the same in both and shifts nothing; it is the percentage slice that stretches. Illustrative constant balance, no other costs.`,
      items: [
        { label: '0.5% plus 20', detail: '50 + 20 = 70 units.', value: 70 },
        { label: '1.5% plus 20', detail: '150 + 20 = 170 units.', value: 170 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Calculator', 'Paper'],
      steps: [
        `Write down a constant 5,000-unit balance, a 0.8% annual charge, and a separate 10-unit annual fee. Writing the balance first matters, because without it the percentage is a slice with no cake.`,
        `Divide 0.8 by 100 to get the multiplier 0.008, then multiply by 5,000. You should get 40 units. If you get 4,000, you multiplied by the raw percentage instead of the multiplier.`,
        `Add the 10-unit flat fee on its own line and label the total known annual cost, excluding other charges. The label is honest about what the number does and does not include.`,
        `Repeat the whole calculation at a 10,000-unit balance and compare the two totals. Notice which part doubled and which part stayed at 10; that is the difference between a rate and a flat charge.`,
      ],
      notice: `Your totals are 50 units at 5,000 and 90 units at 10,000. The percentage part went from 40 to 80 as the cake doubled, while the flat 10 did not move. You can now see at a glance which costs scale with your money and which do not.`,
      troubleshooting: `If your first percentage result is 4,000, you skipped the divide-by-100 step; 0.8% of anything is less than one hundredth of it. If the two totals come out the same at both balances, you have treated the percentage as a flat charge. Rework it as balance times multiplier.`,
    },
    recall: {
      prompt: 'A 2,000-unit holding has a 1% annual charge and a separate 15-unit fee. What is its simplified annual cost?',
      hint: 'Calculate the percentage part before adding the flat part.',
      answer: `35 units. Take the slice first: 1% is one per hundred, so the multiplier is 0.01, and 2,000 times 0.01 is 20 units. Then add the flat 15 on its own line, for 35. Two assumptions sit behind that number and are worth saying out loud. The balance is held at 2,000 for the whole year, which a real holding would not do, and neither charge already includes the other, so nothing is counted twice. If the fee sheet also mentioned a transaction or exit charge you could not pin down, the honest total would be 35 units plus unknown, not 35.`,
    },
    quiz: {
      question: 'What is 0.5% of a constant 10,000-unit balance, before other charges?',
      options: ['50 units', '5 units', '500 units'],
      correctIndex: 0,
      explanation: `Half a percent is half a unit out of every hundred, and 10,000 contains a hundred hundreds, so the slice is 50 units; the multiplier route gives the same answer, 10,000 times 0.005. The other two options have the decimal point in the wrong place. 5 units would be 0.05%, and 500 units would be 5%, ten times the printed rate.`,
    },
    takeaway: `A percentage fee is a slice size and your balance is the cake, so convert each rate to money on the same balance for the same period, 10,000 units at 0.5% is 50 and at 1.5% is 150, add every flat charge on its own line, write unknown where you do not know, and remember the result is a comparison of costs, not a forecast of returns.`,
    sourceNote: 'Investor.gov explains fund expenses and their effect on returns. Its inherited page was checked; the fee sheets here are fictional.',
  },
  {
    id: 'money-003',
    outcome: `Compare two transfer quotes by fixing the same sender outlay, tracing how much actually arrives in the recipient currency, and keeping the arrival date as a separate test.`,
    scene: 'A shared accommodation payment needs conversion into another currency.',
    sections: [
      {
        title: 'Start with the same spending limit',
        paragraphs: [
          `You owe your share of a holiday flat to a friend who lives abroad. You have exactly 100 sender units to spend on it, fees included, and two hypothetical quotes open on your phone. Quote A has a banner that says no transfer fee, and it turns each sender unit into 8 recipient units. Quote B charges a 4-unit fee, taken from your 100, and converts what is left at 8.5 recipient units per sender unit.`,
          `The banner wants you to compare zero with 4 and stop there. That comparison ignores the exchange rate, which is the number that decides how much of the destination currency one unit of yours buys. A fee is a cost you can see. A worse rate is a cost spread invisibly across every unit you convert. You cannot judge either quote until both costs have been turned into the same thing: money that arrives.`,
        ],
      },
      {
        title: 'The fruit stall with the free bag',
        paragraphs: [
          `Picture two fruit stalls, and you have 100 coins for apples. Stall A gives you a free bag and sells 8 apples per coin. Stall B charges 4 coins for the bag, then sells 8.5 apples per coin. The free bag is real. It is also beside the point, because you came for apples, not bags. What matters is how many apples you walk away with for your 100 coins.`,
          `A money transfer is the same shape. The fee is the bag, charged in your currency before anything is converted. The exchange rate is the apples per coin. And the question is always the same one: for the same total out of my pocket, how much arrives on the other side? The order of operations matters. The fee comes off first, in sender units, and only the remainder is converted. A fee in one currency cannot be subtracted from a result in another, any more than you can take coins away from a pile of apples.`,
        ],
      },
      {
        title: 'Trace what actually arrives',
        paragraphs: [
          `Under A, all 100 sender units are converted. 100 times 8 is 800 recipient units. Under B, the fee comes off first: 100 minus 4 leaves 96 sender units to convert. 96 times 8.5 is 816 recipient units. B delivers 16 more recipient units for exactly the same 100 out of your pocket. The quote with the fee wins, because its better rate on 96 units beats no fee on 100.`,
          `Two mistakes produce wrong totals here. Charging the fee on top of the 100 gives B a cost of 104, which breaks the equal-outlay rule. Converting all 100 at 8.5 and then subtracting 4 gives 846, which mixes currencies. This example also assumes nobody in the middle takes a cut: no receiving-bank charge, no intermediary deduction. If a real quote leaves those unknown, write uncertain beside the recipient total. Do not quietly assume zero.`,
        ],
      },
      {
        title: 'Money must arrive in time',
        paragraphs: [
          `The quotes also estimate arrival: one day for A, three days for B. If the flat payment is due tomorrow, B's extra 16 units do not help, because the money is not there when it is needed. More apples are no use if they arrive after the party. An estimate is not a promise either, so check the cutoff time, whether the days are business days, and whether the funds are usable the moment they land. Exchange rates move, so capture both quotes within a few minutes of each other or the comparison is between two different moments.`,
          `Two habits. Write every transfer comparison as four fields, total paid, currency received, expected timing, and unresolved deductions, and fill all four before choosing. And never let a zero-fee banner end the comparison; it is the free bag, and you came for apples. This is not a ranking of providers, and it does not assume the same transfer rights in every country.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Same 100-unit sender budget', unit: 'recipient units',
      alt: 'Quote A delivers 800 recipient units; quote B delivers 816.',
      caption: `Compare the bar lengths first: B is 16 recipient units longer even though it charges a fee, because its better rate on 96 units beats no fee on 100. Then read the arrival estimates in the details and notice the longer bar is the slower one. Illustrative rates, no receiving deductions.`,
      items: [
        { label: 'A: no transfer fee', detail: '100 x 8 = 800; arrival estimate one day.', value: 800 },
        { label: 'B: 4-unit sender fee', detail: '96 x 8.5 = 816; arrival estimate three days.', value: 816 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        `Draw five columns: sender total, sender fee, amount converted, recipient amount, and arrival estimate. The columns force the fee and the rate to be handled in order instead of compared against each other.`,
        `Enter both quotes with a sender total of 100 and work out what is left to convert after each fee: 100 for A and 96 for B. This is the bag being paid for before any apples are bought.`,
        `Multiply each converted amount by its exchange rate and write the currency beside every result. Labelling each number as sender or recipient units is what stops you subtracting one from the other.`,
        `Add a tomorrow deadline to the table and mark which arrival estimate fails it. You now have two separate verdicts, more money and in time, and they belong to different quotes. Send nothing; this is a paper exercise.`,
      ],
      notice: `Your table shows B delivering 816 against A's 800, and A arriving in time against B's three days. The higher amount and the faster arrival sit in different rows, so there is no single winner until you say which matters more for this payment.`,
      troubleshooting: `If B shows a cost of 104, you added its fee on top of the budget instead of taking it out of the 100. If B shows 846, you converted the full 100 and then subtracted a sender fee from a recipient total, which mixes currencies. Redo B as 100 minus 4, then times 8.5.`,
    },
    recall: {
      prompt: 'For 200 sender units, A converts all at 4; B deducts 10 then converts at 4.3. Which delivers more?',
      hint: 'Deduct B’s fee before conversion.',
      answer: `B delivers more, by 17 recipient units. A converts the whole 200 at 4, which is 800 recipient units. B pays for its bag first: 200 minus 10 leaves 190 to convert, and 190 times 4.3 is 817. So the quote with the fee again comes out ahead, because the better rate on 190 units outweighs the 10 it cost. That settles only the amount. Before choosing B you would still check its arrival estimate against your deadline and whether any receiving or intermediary deductions are unknown, and you would capture both quotes at about the same time so the rates are comparable.`,
    },
    quiz: {
      question: 'Which total describes quote B in the accommodation example?',
      options: ['850 recipient units', '796 recipient units', '816 recipient units'],
      correctIndex: 2,
      explanation: `The fee is the bag, paid first in sender units, so only 96 units are converted, and 96 times 8.5 is 816. The 850 answer converts the full 100 as if the fee had never been charged. The 796 answer converts 100 at 8 and then takes 4 away, which subtracts sender units from a recipient total and uses the wrong rate as well.`,
    },
    takeaway: `A zero-fee banner is the free bag at the fruit stall, so fix the same outlay for both quotes, take each fee off first in sender units, convert only what is left, and compare what arrives, 800 against 816 here; then test the arrival date against your deadline as a separate question, write uncertain beside any deductions you cannot see, and capture both quotes at the same moment.`,
    sourceNote: 'The inherited CFPB transfer page describes U.S. rights. This original comparison does not extend those rights to other jurisdictions.',
  },
  {
    id: 'money-004',
    outcome: `End a subscription with the company that actually bills it, save the renewal-off confirmation, copy out any files you still need, and check the next statement, rather than just deleting the app.`,
    scene: 'A photo-backup trial will renew after a short holiday project.',
    sections: [
      {
        title: 'The trial and the billing agreement',
        paragraphs: [
          `You signed up for a photo-backup trial on November 1 to get a holiday project off your phone. In this hypothetical, the trial runs through November 14 and renews on November 15 at 12 units a month. The project is finished by the 12th. You hold your thumb on the app icon, tap delete, and feel the small satisfaction of a tidier home screen.`,
          `Nothing has been cancelled. The app was a window onto the service, and you have closed the window. The agreement to pay sits somewhere else entirely, with whoever took your payment details: the company's own website, an app store, or a separate billing firm. Deleting the window tells none of them anything. On November 15, 12 units will leave your account exactly as planned.`,
        ],
      },
      {
        title: 'Throwing away the card is not cancelling',
        paragraphs: [
          `Think of a gym membership. You stop going, and one day you throw the membership card in a drawer, or in the bin. The direct debit does not notice. It keeps collecting every month, because the card was never the agreement. The agreement is a contract with the gym, and ending it means telling the gym, in the way the contract says, and getting something back that confirms it.`,
          `A subscription app is the membership card. The agreement is with the biller, and the biller is not always the company whose name is on the app. If you subscribed through an app store, the store holds the agreement and the app's own website may not even be able to see it. Start with the receipt. It tells you who took the order, and that company's help pages tell you where cancellation happens. Everything else, the app, the profile, the login, is the card.`,
        ],
      },
      {
        title: 'Follow the route to confirmation',
        paragraphs: [
          `In this invented trial, the billing page says that cancelling before renewal stops the next charge while access continues through November 14. That is an example term, not a rule for every subscription; some end access immediately. You submit the cancellation on November 12. Along the way you may meet a screen offering a discount, a pause, or a short survey. Those are intermediate steps, not the finish line. Keep going until you reach the subscription's status.`,
          `Read that status. What you want is a line that says renewal is off, with the access-end date beside it. Save a copy, screenshot or email. Notice the difference in strength between two pieces of evidence. An email saying we have received your request proves only that you asked. A status page saying renewal is off proves that it worked. Keep the stronger one.`,
        ],
      },
      {
        title: 'Close the remaining loose ends',
        paragraphs: [
          `Cancelling is one job. Keeping your photos is another, and nobody will do it for you. Before access ends on November 14, check which photos exist somewhere else and export anything that does not. Then, after November 15, look at the statement for a 12-unit charge that should not be there. If one appears, the saved confirmation is what you send to the biller. Three unnoticed renewals would cost 36 units at this example price. That arithmetic is why the follow-up is worth two minutes; it does not create any right to a refund. Nor does blocking the payment at your bank end the contract, and not every cancellation takes effect the moment you click.`,
          `Two habits. When you decide to stop a subscription, find the receipt first and cancel with the company named on it, not in the app. And treat renewal-off status as the only finish line: save it, copy out your files before access ends, and check the next statement.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'Exit before the sample renewal',
      alt: 'Cancel November 12, preserve files by November 14, then check the November 15 renewal status.',
      caption: `Read the three dates in order and notice what sits at each one: the cancellation with the biller on the 12th, with its confirmation saved; the photos already copied out before access ends on the 14th; and the 15th kept as a check on the statement rather than a hope. Illustrative dates and 12-unit price; events are ordered, not drawn to scale.`,
      items: [
        { label: 'November 12', detail: 'Cancel with the biller; save confirmation.' },
        { label: 'November 14', detail: 'Sample access ends; needed photos already copied.' },
        { label: 'November 15', detail: '12-unit renewal should be off; verify billing.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'The sample trial terms'],
      steps: [
        `Make a mock subscription card for the trial with four lines: who bills it, the price, the renewal date, and where cancellation happens. Filling in the first line from the receipt, not from the app's name, is the whole point of the exercise.`,
        `Add a reminder for November 12 and a blank space labelled final status. The blank space is there so you cannot consider the job done until something is written in it.`,
        `List the project files that must still be reachable after November 14 and where each one will live. Cancelling and keeping your files are separate jobs, and this is the second one.`,
        `Add a line for checking the statement after November 15 and what you would send the biller if a charge appeared. Do not cancel a real service for this exercise; the card is the practice.`,
      ],
      notice: `Your card tracks three things the home screen never showed you: who holds the agreement, whether renewal is confirmed off, and whether your files are safe. Deleting the app appears nowhere on it, because it was never a step.`,
      troubleshooting: `If the cancellation route ends at a discount or pause screen, add a step to find the subscription status page itself; the offer screen is a detour, not the exit. If you cannot work out who bills the service, read the receipt or your bank statement, where the biller's name appears beside the charge.`,
    },
    recall: {
      prompt: 'A course is billed by an app store, but its website says your profile was deleted. What remains unverified?',
      hint: 'Identify who owns the billing agreement.',
      answer: `Whether the app store subscription is actually off. The website deleted your profile, which is the membership card going in the bin. The agreement to pay lives with the app store, and the website may have no way to see or touch it, so the store could keep renewing a subscription for a course you can no longer log in to. Go to the store's own subscription page and read the status there, then save the renewal-off confirmation. And since the profile is already gone, check whether any course notes or certificates you wanted were only stored inside it. Deleting the profile first did the two jobs in the wrong order.`,
    },
    quiz: {
      question: 'Which record best confirms the sample trial will not renew?',
      options: ['An empty phone home screen', 'The biller’s renewal-off confirmation', 'A support-request acknowledgement'],
      correctIndex: 1,
      explanation: `Only the biller's own status says what the biller will do on November 15, so renewal-off from the company that holds the agreement is the finish line. The empty home screen is the membership card in the bin; the direct debit never saw it. The acknowledgement proves you asked and nothing more, which is why it is weaker evidence than a status that says it worked.`,
    },
    takeaway: `Deleting a subscription app is throwing away the gym card while the direct debit runs on, so find the receipt, cancel with the company that actually bills you, push past discount and survey screens to a status that says renewal is off, save that confirmation, copy out your files before access ends, and read the next statement, because the finish line is the biller's status and not an empty home screen.`,
    sourceNote: 'The inherited FTC subscription resource supports cancellation checks. The dates, price, and access rules here are invented, not universal rights.',
  },
  {
    id: 'money-005',
    outcome: `Compare two borrowing offers by totalling every required payment once, subtracting the money received to find the cost, and keeping the monthly amount as a separate affordability question.`,
    scene: 'A replacement appliance is offered through two fictional borrowing agreements.',
    sections: [
      {
        title: 'What leaves after the appliance arrives',
        paragraphs: [
          `The washing machine has died mid-cycle, and a replacement cannot wait for next month's pay. A hypothetical agreement offers 1,000 units towards it. The headline on the leaflet is 90 units a month. That is a comfortable number, and it is the only number most people read. It describes one repayment. It says nothing about how many of them there are or what else must be paid.`,
          `Read the schedule and the picture fills in. There are twelve payments of 90, so the repayments total 12 times 90, which is 1,080 units. There is also a mandatory setup fee of 30, paid separately at the start and not included in those twelve. Total outlay is 1,080 plus 30, which is 1,110. Against the 1,000 received, borrowing has cost 110 units under these stated conditions. The leaflet never said 110 anywhere.`,
        ],
      },
      {
        title: 'The room rate and the cleaning fee',
        paragraphs: [
          `Think of booking twelve nights away. One place advertises 90 a night and adds a 30-unit cleaning fee at checkout. Another advertises 92 a night, all in. The first looks cheaper on the listing page, because listings show the nightly rate in big type. For the whole stay, the first costs 1,080 plus 30, or 1,110, and the second costs 12 times 92, or 1,104. The place with the higher nightly rate is six units cheaper in total.`,
          `A loan has the same two layers. The headline is the nightly rate: what leaves your account on each payment date. The total is what the whole stay costs: every scheduled payment, counted once, plus every charge you cannot avoid. The two numbers answer different questions. The headline tells you whether each month will hurt. The total tells you what the borrowing cost. A good comparison needs both, written separately, because an offer can win on one and lose on the other.`,
        ],
      },
      {
        title: 'Keep the comparison aligned',
        paragraphs: [
          `Now the second fictional agreement. It provides the same 1,000 units for twelve monthly payments of 92, with no separate fee. Outlay is 12 times 92, which is 1,104 units, and cost is 104. Despite the larger monthly payment, its known total is six units lower than agreement A's 1,110. So B is cheaper. A is easier month by month. Neither fact cancels the other, and an extra two units on each payment date can still matter to a tight budget.`,
          `Before treating two offers as comparable, line up four things: the amount actually received, the number and size of the payment dates, every mandatory charge, and how long the repayments run. If a setup fee is taken out before the money arrives, the amount received is smaller and the comparison shifts. If a published repayment total already includes the fee, adding it again overstates the cost. Write optional charges and late charges on their own lines, marked as not certain, rather than assuming they will or will not happen.`,
        ],
      },
      {
        title: 'Do not invent an annual rate',
        paragraphs: [
          `The 110-unit cost is 11% of the 1,000 received. It is tempting to call that an 11% annual rate. It is not one. You do not owe the full 1,000 all year; each repayment reduces what remains borrowed, and regulated rate disclosures follow defined rules about timing and fees. This lesson adds up cash that leaves. It does not calculate an annual percentage rate, and it does not recommend either product, both of which are invented.`,
          `Two habits. When a leaflet leads with a monthly figure, multiply it by the number of payments and add every required fee, once, before you form an opinion. And write the total cost and the monthly payment on two separate lines, so the cheaper offer and the easier offer can be different things without confusing you.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Twelve-payment outlays', unit: 'units',
      alt: 'Agreement A totals 1,110 units; agreement B totals 1,104.',
      caption: `Look at which bar is taller first: A, the one with the smaller monthly payment, because its 30-unit setup fee sits outside the twelve repayments like a cleaning fee outside the nightly rate. B's bar is six units shorter despite 92 a month. Illustrative agreements that both deliver 1,000 units; bars include stated mandatory fees only, not possible late charges.`,
      items: [
        { label: 'A: 90 monthly', detail: '12 x 90 + 30 = 1,110 units.', value: 1110 },
        { label: 'B: 92 monthly', detail: '12 x 92 = 1,104 units.', value: 1104 },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Calculator', 'Paper'],
      steps: [
        `For both agreements write four lines: money received, number of payments, payment amount, and separate mandatory fees. Setting them out this way stops the headline from standing in for the whole offer.`,
        `Multiply the payment count by the payment amount for each, then add only the charges that sit outside the repayments. For A that is 1,080 plus 30; for B it is 1,104 plus nothing.`,
        `Subtract the 1,000 received from each total. The results, 110 and 104, are the stated borrowing costs, which is the figure neither leaflet printed.`,
        `Circle the monthly payment on each sheet, separately from the total. This is the nightly rate, and it answers a different question: not which is cheaper, but which you can carry every month.`,
      ],
      notice: `Your sheets show B as the cheaper offer by six units and A as the one with the lighter monthly payment. Both statements are true at once, and you can now say which one matters more for this budget instead of letting the headline decide.`,
      troubleshooting: `If A comes out at 140, you have counted the 30-unit setup fee twice, once inside the payments and once outside; it belongs in one place only. If B looks more expensive to you, you are reading the nightly rate; go back to the totals.`,
    },
    recall: {
      prompt: 'You receive 600 units, repay six lots of 110, and pay a separate 10-unit fee. What are outlay and cost?',
      hint: 'Cost excludes the amount originally received.',
      answer: `Outlay is 670 units and cost is 70. Add up everything that leaves: six payments of 110 make 660, and the separate 10-unit fee makes 670, counted once because it sits outside the repayments. Then take away what you received, 600, to find what the borrowing itself cost: 70 units. The headline you would have seen was 110 a month, and like a nightly rate it told you nothing about the 70 on its own. Resist turning 70 out of 600 into an annual rate; the balance owed falls with every payment, and a proper rate follows rules this arithmetic does not apply.`,
    },
    quiz: {
      question: 'A repayment total of 1,080 already includes a 30-unit setup fee. What is the stated outlay?',
      options: ['1,110 units', '1,050 units', '1,080 units'],
      correctIndex: 2,
      explanation: `If the 30 is already inside the 1,080, the stated outlay is 1,080: the cleaning fee has been folded into the nightly rate, so it is neither added again nor taken out. Answering 1,110 counts the fee twice. Answering 1,050 removes a charge you still have to pay. The wording of the total decides the arithmetic, which is why you read how a total was built before you touch it.`,
    },
    takeaway: `A monthly headline is a nightly rate, not the price of the stay, so total every scheduled payment plus every mandatory fee exactly once, subtract the money you actually received to find the cost of borrowing, 110 against 104 here, and keep the monthly payment on its own line as the affordability question, without turning the cost into an annual rate it is not.`,
    sourceNote: 'Inherited CFPB credit and instalment sources provide background. These cash-flow examples are not APR calculations or borrowing recommendations.',
  },
  {
    id: 'money-006',
    outcome: `Rebuild two years of compound interest by hand, explain why the second year's interest is calculated on the first year's closing balance, and name the extra 2.50 that results.`,
    scene: 'A calculator projection is rebuilt as a two-year ledger.',
    sections: [
      {
        title: 'Rebuild the first year',
        paragraphs: [
          `An online calculator shows your savings as a smooth curve bending upward. It is reassuring and it explains nothing. The curve is drawn through a handful of points, and the points come from arithmetic you have not seen. Rebuilding just two of them by hand shows you what the curve is actually doing, and lets you check whether the assumptions behind it are the ones you meant.`,
          `Start with a fictional 1,000 units at exactly 5% a year, credited once at each year end. No money goes in or out, and there are no fees or taxes. Five percent means five per hundred, so the first year's interest is 1,000 times 0.05, which is 50. Adding it gives a closing balance of 1,050. The original 1,000 is usually called the principal. The 50 is interest earned on it. So far, nothing surprising.`,
        ],
      },
      {
        title: 'The jar and the biscuit tin',
        paragraphs: [
          `Imagine the money as coins in a jar. At the end of the year, someone drops in interest coins worth 5% of whatever is in the jar. You have a choice about those 50 coins. Leave them in the jar, or move them to a biscuit tin on the shelf. The tin is safe, but nothing happens in it. Next year, the person counts the jar again and adds 5% of what they count.`,
          `That is compounding: the interest stays in the jar, so the next count includes it. Year two starts at 1,050, not 1,000. Then 1,050 times 0.05 is 52.50, and the closing balance is 1,102.50. The 52.50 splits neatly: 50 is interest on the original 1,000, and 2.50 is interest on last year's 50 coins, because they were in the jar when it was counted. That 2.50 is not a bonus and not a different rate. It is the stated 5% applied to a slightly bigger pile. Multiplying by 1.05 does both jobs in one step: keep the whole balance, and add another five percent of it.`,
        ],
      },
      {
        title: 'Compare with taking the interest out',
        paragraphs: [
          `Now take the biscuit-tin route. Each year the 50 coins come out of the jar and go in the tin. The jar always holds 1,000 at counting time, so it earns 50 every year. After two years the jar has 1,000 and the tin has 100, for 1,100 in total. The jar route gave 1,102.50. The 2.50 difference is entirely about where the first year's interest sat when the second count happened. Over two years it is small. Over many years, the tin route adds the same 50 each year while the jar route adds a little more each year, and the gap widens.`,
          `Set the two routes out as a ledger with three columns: opening balance, interest, closing balance, one row per year. The one rule is that each closing balance is copied into the next opening balance. If your second interest entry is also 50, you forgot to copy; you counted the jar before the coins went in.`,
        ],
      },
      {
        title: 'What the smooth curve leaves out',
        paragraphs: [
          `Real accounts are messier than this jar. Money arrives on different dates, some of it leaves, interest may be credited monthly rather than yearly, charges are taken, and the rate itself changes. Any of those moves the numbers. More importantly, a calculator does not know what return a real investment will produce. It asks you for a rate and draws the curve you asked for. The fixed 5% here is arithmetic, not a forecast.`,
          `Two habits. Before trusting a long projection, rebuild its first two periods by hand and check that each closing balance becomes the next opening balance. And whenever a curve looks persuasive, find the assumptions box and read what rate, what frequency, and what charges it was told to use.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'Two annual interest credits',
      alt: '1,000 becomes 1,050 after one year and 1,102.50 after two.',
      caption: `Look at the two interest amounts, 50 and then 52.50, and notice the second is bigger although the rate never changed. The year 2 row starts from 1,050 because the first year's coins stayed in the jar. Illustrative units at exactly 5% a year; no cash movements, fees, or taxes, and the spacing is schematic.`,
      items: [
        { label: 'Start', detail: '1,000 units; original principal.' },
        { label: 'Year 1 end', detail: '1,000 + 50 = 1,050 units.' },
        { label: 'Year 2 end', detail: '1,050 + 52.50 = 1,102.50 units.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Calculator', 'Paper'],
      steps: [
        `Draw three columns, opening balance, interest, and closing balance, with two rows for two years. The ledger makes the one important move, carrying a balance forward, into something you physically write.`,
        `In row one enter 1,000, work out five percent of it, and add the interest to get the closing balance of 1,050. Say out loud that the 50 is going into the jar, not the tin.`,
        `Copy 1,050 into the opening column of row two and repeat: five percent of 1,050 is 52.50, closing at 1,102.50. The copying step is compounding; everything else is ordinary percentages.`,
        `Underline the 2.50 by which 52.50 beats 50 and write beside it what it is: interest earned on last year's interest, because those coins were in the jar when the second count was taken.`,
      ],
      notice: `Year two earns 52.50 rather than 50 because its opening balance already contains the first year's 50. You can point to the exact cell where the extra 2.50 came from, which the smooth curve never showed you.`,
      troubleshooting: `If both interest entries are 50, you did not carry the first closing balance into the second opening balance; that is the biscuit tin, not the jar. If year two shows 1,100, you added two lots of 50 to 1,000 instead of taking 5% of 1,050.`,
    },
    recall: {
      prompt: 'A fictional 2,000 units earns exactly 3% annually with interest retained. What is the second-year interest?',
      hint: 'Find the first-year closing balance before applying 3% again.',
      answer: `61.80 units. Count the jar at the end of year one first: 3% of 2,000 is 60, so the jar closes at 2,060, and those 60 coins stay in. Year two is 3% of the new count, 2,060 times 0.03, which is 61.80, closing at 2,121.80. The extra 1.80 over the first year's 60 is 3% of the 60 that stayed in the jar. Same exclusions as the lesson: no deposits, withdrawals, fees, or taxes, and interest credited once a year. If you got 60 again, you counted the jar before the first year's coins went in.`,
    },
    quiz: {
      question: 'What does 52.50 represent in the 1,000-unit example?',
      options: ['Second-year interest only', 'Interest across both years', 'Interest on the original deposit only'],
      correctIndex: 0,
      explanation: `52.50 is the second year's interest alone: 5% of the 1,050 that was in the jar at the second count. Interest across both years would be 50 plus 52.50, or 102.50. Interest on the original 1,000 alone is 50 in each year; the extra 2.50 in year two comes from the first year's coins staying in the jar, which is the whole point of compounding.`,
    },
    takeaway: `Compound interest is leaving the interest coins in the jar so the next count includes them: year one on 1,000 at 5% earns 50, year two is calculated on 1,050 and earns 52.50, and the extra 2.50 is simply the same rate applied to last year's interest, so always carry each closing balance into the next opening balance and read the assumptions before trusting any smooth curve.`,
    sourceNote: 'The inherited Investor.gov calculator was checked for inputs and compounding frequency. The fixed 5% path is arithmetic, not a return forecast.',
  },
  {
    id: 'money-007',
    outcome: `Explain why the same 100-unit contribution ends a year worth 110 or 100 depending on whether it arrived before or after the interest was credited, and write the timing into any comparison.`,
    scene: 'Two savings worksheets disagree because they place the same deposit on different dates.',
    sections: [
      {
        title: 'An identical deposit, a different interval',
        paragraphs: [
          `Two savings worksheets sit side by side. Each includes a single 100-unit contribution and a fictional fixed 10% annual return, credited at year end, with no starting money, fees, or taxes. One worksheet says the year ends with 110. The other says 100. Same deposit, same rate, same year, and a ten-unit disagreement. Your first instinct is that one of them has a multiplication error.`,
          `Neither does. Read the dates. The first worksheet puts the 100 in at the start of the year, so it sits in the account for the whole year and earns 10. The second puts it in immediately after the year-end interest has been credited. At that instant it has been in the account for no time at all and has earned nothing. The worksheets are not arguing about arithmetic. They are describing two different timelines, and the difference is where on the timeline the money stepped in.`,
        ],
      },
      {
        title: 'Boarding at the first station or the last',
        paragraphs: [
          `Picture a train that runs once a year from January to December, and interest is the distance travelled. A passenger who boards at the first station rides the whole route. A passenger who boards at the final station, just as the doors close for the last time, is technically on the train. The passenger list now shows one more name. But they have travelled nowhere. Both are on board at the end. Only one has covered any distance.`,
          `Money works the same way. A contribution is a new passenger, money you bring from outside, not distance the train has covered on its own. If it boards before the period starts, it is added before you multiply by the rate, and it travels the whole year. If it boards after the period's interest has been credited, it is added after the multiplication. It is simply standing on the platform of the next year. Try it with numbers. Start with 200 units at 5% for one year. Add 100 at the start: 300 times 1.05 is 315. Add the same 100 at the end: 200 times 1.05 is 210, plus 100 is 310. Both accounts received exactly 100 from you. The five-unit difference is the interest the early passenger earned by being on board.`,
        ],
      },
      {
        title: 'Write the order of operations',
        paragraphs: [
          `The safest way to keep this straight is to write the timeline before you write the sum. Mark the start of the period, the moment interest is credited, and the moment each contribution arrives. Anything to the left of the interest credit goes inside the brackets and gets multiplied. Anything to the right is added afterward. For the 200-unit example that gives (200 plus 100) times 1.05 on one timeline, and 200 times 1.05 plus 100 on the other.`,
          `This matters most when the deposits are small and regular, because a calculator has to assume something about when each one arrives. One tool may assume the start of each month, another the end. The difference accumulates across dozens of deposits. Read the tool's documentation rather than assuming every contribution rode the whole year. A deposit that arrives halfway through a real period follows the actual account's rules for part-period interest, not whichever shortcut makes the final number look bigger.`,
        ],
      },
      {
        title: 'Do not turn timing into a promise',
        paragraphs: [
          `The lesson here is about labelling, not about rushing. Putting money in earlier earns more in a model with a fixed, certain rate. Real returns are neither fixed nor certain. Money moved early to chase five hypothetical units is money that is not there for the bills. Also keep planned transfers separate from ones that actually happened; a worksheet row is not a bank entry. These examples isolate one thing, timing, using invented rates. They say nothing about what any real account will do.`,
          `Two habits. Before comparing two projections, write the date each contribution enters and the date interest is credited, and check they match. And when two worksheets disagree, look for a timing difference before you look for an arithmetic one.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Where the 100 enters',
      alt: 'A start-of-year 100 becomes 110; a deposit after year-end interest remains 100.',
      caption: `Look at the two entry points first, not the amounts: the left deposit boards before the year and rides the whole route to 110, the right one boards after the interest has been credited and has travelled nowhere, so it is still 100. Same passenger, different station. Illustrative 10% annual rate with no opening balance.`,
      items: [
        { label: 'Before the year', detail: '100 x 1.10 = 110 units at year end.' },
        { label: 'After interest', detail: '0 interest + 100 deposit = 100 units.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Calculator'],
      steps: [
        `Draw two timelines, each starting with 200 units at 5% annual interest and each marking the moment interest is credited at year end. Drawing the credit point is what makes before and after visible.`,
        `On the first timeline, place a 100-unit contribution before the year begins; on the second, place it just after the interest credit. Same passenger, two different stations.`,
        `Calculate the first as 300 times 1.05, which is 315, and the second as 200 times 1.05 plus 100, which is 310. Notice that the 100 sits inside the brackets on one timeline and outside them on the other.`,
        `Label the five-unit gap in words: interest earned by the earlier contribution. It is not extra money you deposited, and writing that down stops the two figures looking like a mistake.`,
      ],
      notice: `You get 315 and 310 from the same 100-unit contribution and the same rate. The only thing you changed was the station where the money boarded, and you can point to the bracket that shows it.`,
      troubleshooting: `If both timelines give 315, you have put the late contribution inside the multiplication; move it outside the brackets so it is added after the 1.05. If both give 310, the early contribution is outside; it boarded before the year, so it belongs inside.`,
    },
    recall: {
      prompt: 'A year ends with 420 units before a new 80-unit deposit. Can the deposit increase the interest already credited?',
      hint: 'Separate completed periods from future ones.',
      answer: `No. The year's interest was calculated on the money that was on the train during that year, and the 80 was still on the platform. It arrived after the credit, so the completed period is closed to it. The balance is now 500, which is 420 plus 80, but the 80 is standing at the start of the next journey with no distance behind it. Whether it earns anything from here depends on the next period's timing and the account's terms. A worksheet that showed the 80 earning interest for the finished year would have boarded it at the wrong station.`,
    },
    quiz: {
      question: 'With 200 growing 5%, then 100 deposited after interest, what is the ending balance?',
      options: ['315 units', '300 units', '310 units'],
      correctIndex: 2,
      explanation: `Only the 200 was on the train for the completed year, so it grows to 210, and the 100 is added afterward for 310. The 315 answer boards the 100 at the first station, inside the brackets, which is a different timeline. The 300 answer forgets the interest altogether and just adds the two deposits.`,
    },
    takeaway: `A contribution is a passenger, and the same 100 units ends the year at 110 if it boards before the interest is credited or at 100 if it boards just after, so draw the timeline before you write the sum, put early deposits inside the brackets and late ones outside, read what timing a calculator assumes, and never let a five-unit model difference pull money away from the bills.`,
    sourceNote: 'The inherited Investor.gov calculator shows contribution and frequency inputs. Deposit timing here is explicitly defined, not attributed to its undocumented defaults.',
  },
  {
    id: 'money-008',
    outcome: `Apply a recurring percentage fee to the balance it is actually charged on, explain why 5% growth minus a 1% fee is not exactly 4%, and carry the reduced balance into the next year.`,
    scene: 'A fictional investment statement charges a fee after each annual growth calculation.',
    sections: [
      {
        title: 'The fee has a place in the sequence',
        paragraphs: [
          `A fictional statement describes one year like this. The balance starts at 1,000 units. It grows by exactly 5% before costs. Then, immediately afterward, a fee removes 1% of the updated balance. Two percentages, one year, and a strong temptation to do five minus one in your head and move on. Resist it for a moment, because the two percentages are charged on different amounts.`,
          `Do the steps in the order the statement describes. Growth first: 1,000 times 1.05 is 1,050. Then the fee, on the result: 1,050 times 0.01 is 10.50. Closing balance: 1,039.50. Removing one percent is the same as keeping 99%, so the whole year can be written as 1,000 times 1.05 times 0.99. There are no contributions, withdrawals, or taxes in this model. Those exclusions are deliberate, so that the two things that matter, what the fee is charged on and when, stay visible.`,
        ],
      },
      {
        title: 'A slice of the risen cake',
        paragraphs: [
          `Think of the balance as a cake that rises in the oven. The 5% growth is the rise. The 1% fee is a slice that someone cuts off after the cake comes out. One percent of a risen cake is a bigger slice than one percent of the unrisen batter, because the cake is bigger by the time the knife arrives. Five minus one would be right only if the slice were cut from the batter, before baking. The statement says it is cut after.`,
          `That is the whole reason 1,039.50 is not 1,040. The shortcut, 5% minus 1% equals 4%, applies the fee to the original 1,000 and gets 10. The real fee is charged on 1,050 and comes to 10.50. The difference is only half a unit here, and it is a difference in kind, not just in size: the fee grows with the balance it is cut from. The honest combined multiplier is 1.05 times 0.99, which is 1.0395, a 3.95% increase on the opening balance in this model. If the fee were charged at a different moment, or taken continuously through the year as many real fund charges are, the arithmetic would change again. This example is not a reconstruction of any real statement.`,
        ],
      },
      {
        title: 'Carry the reduction forward',
        paragraphs: [
          `Now bake the same cake again next year, starting from what is left. Year two applies the same two multipliers to 1,039.50: times 1.05 for growth, times 0.99 for the fee. The result is 1,080.56025, which displays as 1,080.56 units. Without any fee, two years at 5% would have given 1,000 times 1.05 times 1.05, which is 1,102.50. The displayed gap is 21.94 units.`,
          `That gap is more than two slices. The two direct fees were 10.50 and roughly 10.92, about 21.42 together. The remaining half unit or so is growth that never happened, because the first year's slice was no longer in the tin to rise in year two. Keep full calculator precision between the periods and round only the numbers you display; rounding the 1,039.50 or the year-two result early would shift the gap. Real providers have their own rounding and charging rules, so treat 21.94 as the output of this model and nothing more.`,
        ],
      },
      {
        title: 'Where the shortcut hides',
        paragraphs: [
          `Five minus one is so easy and so nearly right that most people never check it. On a small balance for one year, the half unit it misses is invisible. The error is in the habit, not the half unit: the shortcut treats a fee as a fixed slice when it is actually a percentage of whatever the pile has become. The same habit makes people assume a fee only bites in good years. It does not. A 1% fee is taken from the balance when the return is zero, and from the balance when the return is negative, and the cake is smaller each time it goes back in the oven.`,
          `Two habits. Before combining two percentages, write down what each one is charged on and in what order; if the bases differ, multiply the factors instead of subtracting the rates. And when projecting more than one period, carry the reduced balance forward and keep the unrounded figure, because the fee's base next year is this year's result.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'After two model years', unit: 'units',
      alt: 'Without fees the balance is 1,102.50; with the stated fee it is 1,080.56.',
      caption: `Look at the gap between the bar tops first: 21.94 units after two years, which is more than two 1% slices of the opening balance would be, because each slice was cut from a risen cake and the first slice never rose again. Illustrative 5% growth then 1% of each year-end balance; displayed amounts are rounded and nothing here is a promised return.`,
      items: [
        { label: 'No fee', detail: '1,000 x 1.05 x 1.05.', value: 1102.5 },
        { label: '1% after growth', detail: '1,000 x 1.0395 x 1.0395.', value: 1080.56 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Calculator', 'Paper'],
      steps: [
        `Write the sequence in words before any numbers: opening balance, then 5% growth, then a 1% fee charged on the grown balance. Writing the order is what stops five minus one sneaking in.`,
        `Calculate 1,000 times 1.05 times 0.99 and write down the unrounded result, 1,039.50. Leaving it unrounded matters because it becomes next year's base.`,
        `Apply the same two multipliers again to get year two, then separately calculate 1,000 times 1.05 times 1.05 for the no-fee path. Doing both lets you see the gap rather than guess it.`,
        `Round only the final balances to two decimals, 1,080.56 and 1,102.50, and label the 21.94-unit gap as what it is: two slices plus the growth the first slice never earned.`,
      ],
      notice: `The fee changed two things, not one: this year's balance, and the base from which next year's growth and next year's fee are both calculated. That second effect is why the two-year gap is larger than two separate fees.`,
      troubleshooting: `If year one comes out at 1,040, you charged the fee on 1,000 instead of on 1,050; cut the slice after the cake has risen. If your two-year gap is not close to 21.94, check that you carried the unrounded 1,039.50 forward rather than 1,040 or a rounded figure.`,
    },
    recall: {
      prompt: 'With zero growth, a 2,000-unit balance loses 1% to a fee at each year end. What remains after two years?',
      hint: 'Keep 99% twice; the second fee has a smaller base.',
      answer: `1,960.20 units. There is no rise this time, so the only thing happening to the cake is the slicing. Year one keeps 99%: 2,000 times 0.99 is 1,980, a fee of 20. Year two cuts 1% of what is left: 1,980 times 0.99 is 1,960.20, a fee of 19.80. The total removed is 39.80, not 40, because the second slice came from a slightly smaller cake. Two things to take from it. The fee was charged in full even though the balance earned nothing, and each year's base is the previous year's result, under this model's annual timing.`,
    },
    quiz: {
      question: 'Why does the example end year one at 1,039.50 rather than 1,040?',
      options: ['The growth rate is rounded down', 'The fee uses the post-growth balance', 'The fee applies only to interest'],
      correctIndex: 1,
      explanation: `The slice is cut after the cake has risen: 1% of 1,050 is 10.50, not 1% of 1,000, which would be 10. Nothing about the 5% growth was rounded. And the fee is not charged on the 50 of interest alone, which would be only 0.50; it is charged on the whole post-growth balance. The half-unit difference is the base changing, not the rate.`,
    },
    takeaway: `A percentage fee is a slice cut from the cake after it has risen, so 5% growth followed by a 1% fee is 1,000 times 1.05 times 0.99, which is 1,039.50 and not 1,040; write what each percentage is charged on and in what order, multiply the factors rather than subtracting the rates, carry the unrounded reduced balance into the next year, and remember the slice is still cut in a year when the cake does not rise.`,
    sourceNote: 'Inherited Investor.gov fund and compounding pages were checked. This annual fee model is original and deliberately simpler than real charging schedules.',
  },
  {
    id: 'money-009',
    outcome: `Measure whether a grown balance buys more by dividing the money by the new price of the same basket, and explain why 5% growth against 3% inflation is about 1.94% more buying power, not 2%.`,
    scene: 'A grocery-and-transport basket costs more when a saved balance is finally used.',
    sections: [
      {
        title: 'The balance and the basket',
        paragraphs: [
          `A year ago you set aside 100 units for a specific basket: a week of groceries and the bus fares to get them home. Today the fictional balance shows 105. You feel five units richer. Then you price exactly the same basket, same items, same quantities, same shop, and it comes to 103. The money went up by five percent. The price went up by three percent. Those are two separate facts, each measured against its own starting point of 100.`,
          `The question you actually care about is not whether the number on the screen rose. It is whether the money buys more than it did. Put the new money against the new price and the answer is yes, but barely. You can afford one basket and have two units left over, not five. Three of your five extra units were eaten by the basket getting dearer.`,
        ],
      },
      {
        title: 'Count in loaves, not in coins',
        paragraphs: [
          `A grandparent who says a loaf used to cost a few pence is not wrong, and the number is not useful either. Coins are a slippery ruler. The honest way to compare money across time is to count what it buys. If your wage buys 40 loaves this year and bought 38 last year, you are better off by two loaves, whatever the coins say. The loaf is the ruler, because the loaf is what you wanted all along.`,
          `So measure the balance in baskets. Divide the money by the price of one basket: 105 divided by 103 is about 1.0194 baskets. A year ago, 100 divided by 100 was exactly one basket. Subtract one and multiply by 100 to say the change as a percentage: about 1.94% more buying power. Notice what sits underneath the division. It is the new basket price, 103, not the old price and not the new balance. Purchasing power is a name for this count: what the money can buy, rather than how many units appear on a screen. The shortcut of subtracting three percent from five percent gives two, which is close and is not the same number. The ratio is the measurement; the subtraction is an estimate of it.`,
        ],
      },
      {
        title: 'Keep the comparison honest',
        paragraphs: [
          `The loaf only works as a ruler if it stays the same loaf. If this year's basket swaps bus journeys for taxis, or a bigger bag of rice, you are no longer measuring a price change. You are measuring a different basket. Keep quantity and quality fixed, and then whatever the price does is the price doing it.`,
          `Try a losing year. Balance and basket both start at 200. The balance grows to 204 and the basket rises to 210. Then 204 divided by 210 is about 0.9714 baskets. You have more money and you can buy less of what you wanted. That is a purchasing-power loss of about 2.86%, from a balance that went up. Two more things keep this honest. A published inflation index measures a specified national basket, and your own mix of rent, food, and fares need not move at that rate. And a gross growth figure can overstate spendable money if fees or taxes are still to come out. This example leaves those out so the basket arithmetic stays visible.`,
        ],
      },
      {
        title: 'Why the bigger number fools people',
        paragraphs: [
          `The balance is a number you see every day. The basket price is something you feel only vaguely, a bit at a time, at different tills. So the growing balance registers as progress while the rising prices register as grumbling. The ruler stretched, and nobody noticed because the ruler is the thing you measure with. The division is the only step that puts both numbers in the same frame.`,
          `Two habits. When a balance has grown, price the same basket you set it aside for and divide money by price before deciding you are better off. And treat growth minus inflation as a rough guide only; when the exact figure matters, use the ratio.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'One year later', unit: 'units',
      alt: 'The balance is 105 units and the unchanged basket now costs 103.',
      caption: `Look at how little the money bar clears the basket bar: two units, not five, because the basket you set the money aside for has become dearer too. Divide the first bar by the second to count baskets, about 1.0194, rather than adding or subtracting their percentage changes. Illustrative amounts, both starting at 100.`,
      items: [
        { label: 'Money available', detail: '105 units after 5% balance growth.', value: 105 },
        { label: 'Same basket', detail: '103 units after 3% price growth.', value: 103 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Calculator', 'Paper'],
      steps: [
        `Write an old balance and an old basket price of 200 each, then change them to a new balance of 204 and a new basket price of 210. Starting both at the same figure makes the one-basket baseline obvious.`,
        `Divide the new balance by the new basket price, 204 divided by 210, to count how many baskets the money now buys. The loaf is the ruler, so you are converting money into loaves.`,
        `Subtract one from the result and multiply by 100, then write the answer as a sentence about buying power rather than as a bare number. Saying it in words is what stops a rising balance from reading as good news on its own.`,
        `Record that the basket is unchanged in quantity and quality, and that fees and taxes are excluded, so you know exactly what this calculation does and does not cover.`,
      ],
      notice: `The money rose by four units and the affordable baskets fell to about 0.9714, a purchasing-power loss of about 2.86%. A bigger number on the screen bought less of what it was set aside for, and the division is what revealed it.`,
      troubleshooting: `If you get a gain, you have divided price by money instead of money by price; the money goes on top. If you get exactly 2% in the first example, you subtracted the percentages, which is the estimate rather than the measurement.`,
    },
    recall: {
      prompt: 'Money rises from 100 to 110 while the same basket rises to 120. Has purchasing power increased?',
      hint: 'More money can still buy fewer baskets.',
      answer: `No. Count in baskets, not coins. A year ago 100 units bought exactly one basket at 100. Now 110 divided by 120 is about 0.9167 baskets, so the same money buys less than one, a loss of about 8.33% in buying power. The balance grew by ten percent and still lost ground, because the ruler stretched faster than the money. Subtracting the percentages, 10 minus 20, would also have told you the direction, a loss, but the ratio gives the honest size. And the comparison only holds if the basket is the same one, same items in the same quantities, with fees and taxes left out as they are here.`,
    },
    quiz: {
      question: 'Which is the exact ratio-based result for 105 units against a 103-unit basket, rounded?',
      options: ['About 1.94% more buying power', 'Exactly 2% more buying power', 'Exactly 5% more buying power'],
      correctIndex: 0,
      explanation: `Counting in baskets, 105 divided by 103 is about 1.0194, so buying power rose by about 1.94%. Exactly 2% is what you get from subtracting the two percentage changes, a reasonable estimate but not the measurement. Exactly 5% is the growth in coins alone, and it ignores that the basket got dearer.`,
    },
    takeaway: `Count in loaves, not coins: a balance that grew 5% while the same basket rose 3% buys about 1.94% more, found by dividing 105 by 103, not by subtracting the percentages, and a balance can rise while buying less, 204 against 210 buys 0.9714 baskets, so price the identical basket, divide money by price, and only then decide whether you are better off.`,
    sourceNote: 'The inherited Investor.gov risk resource discusses inflation risk. These original basket calculations are illustrative, not an inflation forecast or personal index.',
  },
  {
    id: 'money-010',
    outcome: `Trace a debt across two billing periods, showing how unpaid interest joins the balance that the next charge is calculated on, and how a payment made before the next charge changes the path.`,
    scene: 'A repair debt is traced across two hypothetical monthly billing periods.',
    sections: [
      {
        title: 'Interest becomes part of what is owed',
        paragraphs: [
          `The boiler repair went on credit: a fictional debt of 1,000 units. In this teaching model, interest is exactly 1% each month, added to the balance at month end. There are no fees, no new purchases, and for now no payments. You do not touch the account, and the number still moves. Month one adds 1,000 times 0.01, which is 10 units. The debt is now 1,010.`,
          `That 10 was not spent on anything. It was charged, and because it was not paid, it was written onto the balance. Adding unpaid interest to the amount that future charges are calculated on is called capitalising interest. It is the whole explanation for a debt that grows when nothing new is bought. One detail to hold onto: the 1% here is a monthly rate, not an annual one, and the model says so.`,
        ],
      },
      {
        title: 'The tab behind the counter',
        paragraphs: [
          `Think of a tab at a cafe where the owner adds a service charge at the end of every month to whatever is written on it. If you do not settle, the service charge is not kept on a separate slip. It is written onto the tab as another line. Next month, the owner totals the whole tab, last month's service charge included, and charges on that. Each unpaid charge becomes part of the thing that gets charged.`,
          `Follow the tab. Month two opens at 1,010, not 1,000, because the 10 is on it now. One percent of 1,010 is 10.10. The balance closes at 1,020.10. That extra tenth of a unit is 1% charged on last month's 10 of interest. Adding two separate lots of 10 to 1,000 would give 1,020 and would miss it, because it ignores that the base changed between the two months. The quick check is 1,000 times 1.01 times 1.01, which gives the same 1,020.10. Lay the account out as a ledger with separate lines for opening balance, interest added, payments, and closing balance. You can then see exactly why the number moved, without treating every increase as if you had spent something.`,
        ],
      },
      {
        title: 'A payment changes the path',
        paragraphs: [
          `Now settle part of the tab. Change one assumption: a 100-unit payment arrives immediately after month one's interest is added. The balance drops from 1,010 to 910. Month two charges 1% of 910, which is 9.10, and the balance closes at 919.10.`,
          `Compare the two endings. Without the payment, 1,020.10. With it, 919.10. The difference is 101 units, and it splits into two parts. 100 is the payment itself. The other unit is interest that was never charged, because month two's 1% was calculated on a smaller tab. The order matters: the payment reduced the base before the next charge was worked out. If you calculate month two's interest first and subtract the payment afterward, you get 920.10, and the payment has done less work than it should.`,
        ],
      },
      {
        title: 'A model, not a statement',
        paragraphs: [
          `This is arithmetic under one defined sequence. A real card or loan statement can use daily balances rather than month-end ones, apply payments to different parts of the debt in a set order, offer interest-free grace periods, and add other charges. Any of those changes the numbers. Never assume a real statement must match this monthly model; use the model to understand the mechanism, then read the agreement for the actual sequence.`,
          `Two habits. When a debt grows without new spending, look for the interest line that was added to the balance rather than assuming an error or a purchase. And when you plan a payment, note whether it lands before or after the next interest is charged, because the same payment does slightly more if it shrinks the tab first.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'No-payment balance trail',
      alt: 'The debt moves from 1,000 to 1,010 to 1,020.10 units.',
      caption: `Look at the two interest amounts first: 10, then 10.10. The second is larger although nothing was bought and the rate did not change, because the first 10 was written onto the tab and charged on in month two. Read each closing balance as the next opening balance. Illustrative monthly capitalisation at 1% with no other changes.`,
      items: [
        { label: 'Opening debt', detail: '1,000 units.' },
        { label: 'Month 1 end', detail: '10 interest added; 1,010 units owed.' },
        { label: 'Month 2 end', detail: '10.10 interest added; 1,020.10 units owed.' },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Calculator', 'Paper'],
      steps: [
        `Build two monthly rows with no payments, with columns for opening balance, interest added, and closing balance, and label each interest charge with the base it was calculated on. Naming the base is what makes 10.10 stop looking like a mistake.`,
        `Copy the rows into a second column and add a 100-unit payment immediately after month one's interest. Write the payment on its own line, so it is visibly separate from interest.`,
        `Use 910 as the second opening balance in the payment column and charge 1% on it, giving 9.10 and a closing balance of 919.10. The payment shrank the tab before the owner totalled it.`,
        `Compare 1,020.10 with 919.10 and split the 101-unit gap into the 100 you paid and the one unit of model interest you avoided. Seeing the split tells you what a payment actually does.`,
      ],
      notice: `The same 1% produced a smaller second charge in the payment column, 9.10 instead of 10.10, because the tab it was charged on was smaller. The payment did two jobs: it reduced the debt and it reduced the next charge.`,
      troubleshooting: `If the payment column ends at 920.10, you charged month two's interest on 1,010 and subtracted the 100 afterward; move the payment before the interest calculation. If both columns show 1,020, you added two flat 10s and missed the changed base.`,
    },
    recall: {
      prompt: 'A 500-unit debt compounds at a fictional 2% monthly with no payments. What is the second monthly charge?',
      hint: 'Month one changes 500 before month two starts.',
      answer: `10.20 units. Write the tab month by month. Month one charges 2% of 500, which is 10, and because it is unpaid it is written onto the balance, closing at 510. Month two charges 2% of the whole tab, 510 times 0.02, which is 10.20, closing at 520.20. The extra 0.20 is 2% charged on last month's unpaid 10. If you answered 10, you charged the second month on the original 500 and ignored that the first charge had joined the balance. Same exclusions as the lesson: a monthly rate, charged at month end, with no fees, purchases, or payments.`,
    },
    quiz: {
      question: 'With no payments in the repair example, what is owed after two months?',
      options: ['1,020 units', '1,020.10 units', '1,010.10 units'],
      correctIndex: 1,
      explanation: `The tab is totalled twice, so the debt is 1,000 times 1.01 times 1.01, which is 1,020.10. The 1,020 answer adds two flat 10s and ignores that month two charged on 1,010, including the first month's unpaid interest. The 1,010.10 answer charges month one correctly and then takes month two's interest on only the 10, forgetting the original 1,000.`,
    },
    takeaway: `Unpaid interest is written onto the tab and charged on next time, so a 1,000-unit debt at 1% a month owes 1,010 and then 1,020.10 with nothing bought, while a 100-unit payment made before the next charge ends 101 units lower, not 100; lay the account out as a ledger, carry each closing balance forward, note whether payments land before or after the charge, and read the real agreement for its actual sequence.`,
    sourceNote: 'Inherited compounding and credit resources provide background. Monthly capitalisation here is a model, not a universal borrowing rule or payment instruction.',
  },
  {
    id: 'money-011',
    outcome: `Look inside two differently named funds, add up every holding in the same company across both, and judge concentration by that combined share, 70% here, rather than by the count of funds.`,
    scene: 'Two differently named fictional funds both hold a large position in Cedar.',
    sections: [
      {
        title: 'Two names do not mean two independent risks',
        paragraphs: [
          `A fictional holdings sheet shows 100 units in Fund A and 100 units in Fund B. Two funds, two names, half the money in each. It looks balanced, and it feels careful. You have not put everything in one place. Or so the sheet suggests, as long as you read only the first level of it.`,
          `A fund is a container. Its name tells you what the manager calls the container, not what is inside. Open both. Fund A holds 80 units in a company called Cedar and 20 in Harbor. Fund B holds 60 in Cedar and 40 in Meadow. All three company names are invented. The balance between the containers was real. The balance between the businesses your money depends on is not, because a bad year at Cedar would hit both fund balances on the same day.`,
        ],
      },
      {
        title: 'Two smoothies, mostly banana',
        paragraphs: [
          `Picture a juice bar with a Tropical Sunrise and a Green Morning on the menu. Different names, different colours, different prices. Read the ingredient cards and both are mostly banana, one with a little mango and the other with a little spinach. Ordering one of each does not give you two different drinks. It gives you banana twice. And on the day bananas run out, both come off the menu together.`,
          `Funds are drinks with ingredient cards. To see what you are really holding, add up each ingredient across every glass. Cedar: 80 from A plus 60 from B is 140 units. Harbor: 20. Meadow: 40. Those three figures add back to the original 200, which is your check that nothing was missed or double counted. Cedar's share of the whole is 140 divided by 200, which is 70%. The number underneath that division is the combined total, 200, not the 100 in either fund on its own. Two words name what you have found. Exposure is the amount of your money whose value rides on one source of risk; your Cedar exposure is 140 units. Concentration is a large share of the total riding on one source; 70% is concentrated, whatever the fund count says.`,
        ],
      },
      {
        title: 'Add the repeated exposure',
        paragraphs: [
          `The mistake the sheet invites is to count containers. Two funds, so half each, so 50% at most in anything. That answer is wrong because it never looked at the ingredients. The second mistake is to add percentages that have different denominators: Cedar is 80% of A and 60% of B, and 80 plus 60 is 140, which is not a percentage of anything. Work in units first, add them, and only then divide by the combined total.`,
          `Set it out physically. Draw two boxes of 100, fill in their holdings, and mark every Cedar entry with the same symbol. Then pull the symbols together into one pile. The pile is what you own. The boxes were just how it was served.`,
        ],
      },
      {
        title: 'Look beyond repeated company names',
        paragraphs: [
          `Sharing a company name is the easiest overlap to spot and not the only one. Harbor and Meadow may be different firms that both sell to the same industry, bill in the same currency, or suffer in the same kind of downturn. Different labels do not prove independent risks; they only prove different labels. A holdings list is a starting point, published lists can be dated or incomplete, and spreading money across genuinely different ingredients softens some shocks without preventing everything from falling together in a broad market decline. This exercise teaches you to read concentration. It does not choose funds, set an allocation, or predict how Cedar will do.`,
          `Two habits. Before calling a portfolio balanced, open every container and add up each ingredient across all of them. And when you find a repeated name, ask what else the remaining holdings might share, because the overlap you can see is rarely the only one.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Inside both fictional funds', unit: 'units',
      alt: 'Combined exposure is Cedar 140, Harbor 20, and Meadow 40 units.',
      caption: `Look at the Cedar bar first and notice it is built from two pieces, 80 from Fund A and 60 from Fund B, the banana in both smoothies. Then check that all three bars add back to 200, which is why Cedar's 70% is measured against that combined total and not against either 100-unit fund. Illustrative holdings.`,
      items: [
        { label: 'Cedar', detail: '80 in A + 60 in B.', value: 140 },
        { label: 'Harbor', detail: '20 in A only.', value: 20 },
        { label: 'Meadow', detail: '40 in B only.', value: 40 },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator', 'Two coloured pens, optional'],
      steps: [
        `Draw two boxes of 100 units each and write in their stated holdings: Cedar 80 and Harbor 20 in the first, Cedar 60 and Meadow 40 in the second. Drawing the boxes first shows you the balanced picture the sheet offered.`,
        `Mark both Cedar entries with the same symbol or colour, then gather all entries by company into one list outside the boxes. The pile outside the boxes is what you actually own.`,
        `Check that the gathered amounts total 200, then calculate Cedar's share as 140 divided by 200. Using 200 underneath is what makes the answer a share of your whole holding rather than of one container.`,
      ],
      notice: `Half the money sat in each fund, and 70% of it still depends on one company. The fund count described the containers; the ingredient list described the risk, and only the second one told you anything.`,
      troubleshooting: `If your company totals come to more than 200, you have counted the fund wrappers as holdings on top of their contents. If Cedar comes out at 140%, you added two percentages with different denominators; work in units, add, then divide once by 200.`,
    },
    recall: {
      prompt: 'A transport fund and an energy fund both rely heavily on the same battery manufacturer. What should you inspect?',
      hint: 'Different industry labels can share one underlying dependency.',
      answer: `Open both containers and find the battery manufacturer on each ingredient card. Add the two amounts together in units, then divide by the combined total of both funds to get its share of everything you hold. Transport and energy are two names on the menu; if both drinks are mostly the same ingredient, a problem at that one manufacturer hits both on the same day, and the two labels do nothing to separate the risk. Then look one step further, because the remaining holdings may share something less visible, such as the same customers or the same currency. The question is never how many funds you own. It is how much of your money depends on one thing.`,
    },
    quiz: {
      question: 'What best describes Cedar’s share of the two sample funds together?',
      options: ['140% because 80 plus 60 is 140', '50% because there are two funds', '70% because 140 of 200 units depends on Cedar'],
      correctIndex: 2,
      explanation: `Gather the banana from both glasses: 80 plus 60 is 140 units, and against the combined 200 units that is 70%. The 140% answer adds unit amounts and then reads them as a percentage with no denominator. The 50% answer counts containers rather than contents, which is exactly the illusion the two fund names created.`,
    },
    takeaway: `A fund is a smoothie with an ingredient card, so two different names can both be mostly banana: open every container, add each company's units across all of them, divide by the combined total, and judge concentration by that share, 140 of 200 is 70% in Cedar however balanced two funds of 100 looked, then ask what else the remaining holdings might quietly share.`,
    sourceNote: 'Inherited Investor.gov fund and risk sources explain concentration and diversification. The holdings are fictional and are not an allocation recommendation.',
  },
  {
    id: 'money-012',
    outcome: `Tell the difference between a value shown on a screen and money you can spend before a deadline, by tracing the route from sale to usable cash and noting what each stage costs in time and price.`,
    scene: 'A second-hand equipment sale cannot fund a bill before its proceeds clear.',
    sections: [
      {
        title: 'A value is not a payment method',
        paragraphs: [
          `A bill is due on day three. You have some equipment you no longer use, with an estimated resale value of 600 units, and the figure is comforting. Six hundred is more than the bill. In your head, the equipment has quietly become money available for it. Nobody has bought it yet. Nobody has paid for it. Nothing has arrived anywhere you can pay a bill from.`,
          `Between a valuation and a payment stand several steps, and each one takes time or takes a cut. Someone must agree to buy. The payment must complete. The proceeds must reach an account you can actually pay from. Liquidity is the word for how readily a value turns into usable money, counting both the delay and the price you give up to hurry it. A number on a screen is neither a buyer nor a promise that anyone will pay that number today.`,
        ],
      },
      {
        title: 'The joint in the freezer',
        paragraphs: [
          `Guests arrive in an hour and there is a large joint of meat in the freezer. It is real food and it is worth a proper dinner. It is also solid. Thawing it safely takes most of a day. You can hurry it along, and you will get a worse meal for your trouble. The joint has value. It is not dinner yet, and it cannot become dinner on the timetable the guests have set.`,
          `Assets behave like the joint. The equipment is worth 600 the way the joint is worth a dinner: genuinely, and not right now. Turning it into spendable money is the thawing, and it has two separate costs. One is time, the days between deciding to sell and the money landing. The other is price, the discount you accept to find a buyer quickly and the fees taken along the way. A valuation ignores both. Liquidity is about both. And a deadline is the guests at the door: it does not care how much the joint is worth, only whether dinner is on the table.`,
        ],
      },
      {
        title: 'Trace one complete route',
        paragraphs: [
          `Walk the equipment through a fictional selling service, stage by stage. Day one: you list it at the estimated 600. Day two: a buyer offers 590 and you accept, which is a 10-unit price concession to get a sale this week. Day four: the service completes settlement, meaning the item and the payment have both changed hands and 590 sits inside your account on the service. Day five: the service transfers the money to your bank, less a 2-unit transfer fee, and 588 units become usable. These timings are invented and are not any marketplace's standard.`,
          `Now put the bill on the same timeline. It falls due on day three. On day three the equipment has been sold but nothing is spendable; the money is still thawing. The final amount of 588 is 600 minus the 10 you gave up on price minus the 2 the transfer cost, and it arrives two days after the guests. The valuation was accurate and it was no help at all.`,
        ],
      },
      {
        title: 'Ask available where and when',
        paragraphs: [
          `The word available does a lot of quiet work on screens. An item can be available to list, money can be available inside a service balance, and money can be available to spend from your bank. Those are three different stages, and only the last pays a bill. Whenever a screen says available, ask: available where, and available when? The same question applies to an investment you would have to sell, a savings deposit that needs notice, or a transfer that only moves during processing hours. Keep the two constraints apart as you read: an early withdrawal charge changes the amount, a processing delay changes the timing, and a plan needs both to work. Knowing the route can show you a funding gap in advance. It does not conjure a buyer, make an estimated arrival certain, or make selling something you need a good idea.`,
          `Two habits. Before counting any asset toward a bill, write the date the money would actually be spendable from your bank and compare it with the due date. And whenever you see the word available, name the stage it refers to before you rely on it.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'From equipment to usable money',
      alt: 'A day-one sale request leads to 588 spendable units on day five, after a day-three bill.',
      caption: `Find day three first, the bill, and notice that it sits between the agreed sale and settlement, when the money is still thawing. Then follow the amount shrinking along the route, 600 to 590 to 588, as price and fee take their share. Illustrative route and schematic spacing, not a settlement standard.`,
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
        `Sketch a fictional 800-unit item that sells for 790, with a 5-unit transfer fee, as a row of stages: listed, sold, settled, in the bank. Drawing the stages separately is what stops the valuation from standing in for the cash.`,
        `Mark the proceeds as usable on day four and add a bill due on day three. Putting the deadline on the same line as the route is how the gap becomes visible.`,
        `Write 785 beside the bank-arrival stage and nowhere earlier, because that is the first point at which the joint is thawed and dinner can be served.`,
        `Circle the gap between day three and day four, then write one question you would ask the service about processing times or withdrawal restrictions. Knowing the route early is the only way to plan around it.`,
      ],
      notice: `The item was worth more than the bill at every stage, and the bill still could not be paid from it on time. Value and usable money sat two days apart on your sketch, and the amount that finally arrived was 785, not 800.`,
      troubleshooting: `If you wrote the proceeds beside the sale date, add settlement and bank transfer as separate stages; an agreed sale is a promise to pay, not a payment. If you wrote 790 at the bank stage, you forgot the transfer fee comes off before the money is usable.`,
    },
    recall: {
      prompt: 'A deposit balance is 900 units, but withdrawal requires seven days’ notice. Can it automatically fund a bill tomorrow?',
      hint: 'A balance answers amount, not timing.',
      answer: `No. The 900 is the joint in the freezer: real, and solid for seven days. The balance answers how much; the notice period answers when, and when is tomorrow. Available where and when? Available in the account now, available in your bank in seven days, which misses the deadline. There may be a documented early-access route, and if there is, it comes with its own two costs to check: a charge that reduces the amount, and a processing time that may still not make tomorrow. Read the actual terms rather than assuming an exception exists, and if there is none, the bill needs a different source whatever the balance says.`,
    },
    quiz: {
      question: 'Which figure belongs in the sample bill’s day-three cash plan?',
      options: ['No confirmed usable sale proceeds by that date', 'The 600-unit estimated resale value', 'The 590-unit agreed sale amount'],
      correctIndex: 0,
      explanation: `On day three the joint is still thawing: the sale was agreed on day two, but settlement is day four and the money reaches your bank on day five, so nothing from it is spendable when the bill falls due. The 600 is a valuation, which is neither a buyer nor a payment. The 590 is a promise from a buyer that has not yet turned into money you can use.`,
    },
    takeaway: `A valuation is the joint in the freezer, real and not dinner yet, so trace the whole route from listing to agreed price to settlement to your bank, 600 becomes 590 becomes 588 arriving on day five for a bill due on day three, write the date the money is actually spendable beside every asset you count on, and whenever a screen says available, ask available where and available when.`,
    sourceNote: 'Inherited banking and risk sources provide liquidity background. This equipment route is an original analogy, not any provider’s actual timetable.',
  },
  {
    id: 'money-013',
    outcome: `Describe a goal as an amount, a date, how movable that date is, and what a shortfall would break, and explain why the same 80-unit fall hurts a fixed deadline far more than a flexible one.`,
    scene: 'A moving deposit and a flexible hobby trip have equal budgets but different deadlines.',
    sections: [
      {
        title: 'The same amount can have different jobs',
        paragraphs: [
          `Two fictional goals sit on the same page of your notebook, and each says 800 units. One is the deposit on a new flat, due on November 10. Miss it and the move falls through, with a chain of other arrangements behind it. The other is a hobby trip you have been meaning to take. Nothing is booked, and the date is whenever suits. On paper the goals are twins. In life they are not related.`,
          `A goal is not an amount. It is an amount, a date, how movable that date is, and what happens if the money is not there. Write down only the first of those four and the two goals look identical. Write down all four and the deposit turns out to be a hard obligation with a cliff edge, while the trip is a wish with a soft date. That difference is invisible in the number and it decides everything that follows.`,
        ],
      },
      {
        title: 'Caught in the same rain',
        paragraphs: [
          `Two people are standing at a bus stop when a downpour starts. One has an interview across town in fifteen minutes. The other is out for a walk with nowhere to be. Same rain, same stop, same soaking. The walker can step into a cafe and wait twenty minutes for it to pass, and the rain costs them nothing but time. The interviewee cannot wait. They have to go now, in whatever state they are in, because the appointment does not move.`,
          `A fall in value is the rain. The deadline is the appointment. Suppose the value set aside for each goal drops from 800 to 720 just before November 10. The loss is 80 units, 10% of the original 800, identical for both. For the deposit, 720 is 80 short of a fixed obligation on a fixed day, and a possible recovery next spring pays nothing on November 10. For the unbooked trip, you can wait in the cafe: postpone, shorten the trip, or go somewhere cheaper. None of those responses gives the 80 back. What flexibility changes is whether you are forced to use the money now, at its reduced amount, or allowed to wait and see.`,
        ],
      },
      {
        title: 'Apply one fall to both goals',
        paragraphs: [
          `Set the two goals out as cards. Moving deposit: 800 due November 10, date fixed, consequence of a shortfall is a broken move. Hobby trip: 800 target, date open, consequence of a shortfall is a later or smaller trip. Now write 720 available on both and ask the same question of each: what does the 80-unit gap interrupt?`,
          `The first card answers with a specific broken thing and a specific date. The second answers with an inconvenience and no date. That contrast is the whole output of the exercise. It does not say where the money should have been kept. It does not say the loss was anyone's fault. It says that one of these two goals could not absorb a bad fortnight, and the other could, and you knew which was which before the rain started, if you had written the cards.`,
        ],
      },
      {
        title: 'Write a constraint, not a prediction',
        paragraphs: [
          `Two misreadings are common. The first is that a long horizon makes a loss harmless. More time before you need the money means more chances for recovery, and no promise of one; prices can stay down, needs can change, and the cafe can close. The second is that a flexible date stays flexible. The trip becomes a fixed deadline the moment you book it, and a course fee that could wait until next year becomes due next week the moment you accept the place. Flexibility is a property of the goal today, and it can vanish with one decision.`,
          `Two habits. For every goal, write the four parts, amount, date, how movable, and what a shortfall breaks, and keep the date separate from your enthusiasm for whatever the money is sitting in. And when you weigh a shortfall, ask which of three things it would force: delaying the goal, finding other money, or breaking an obligation, and mark any future income you are counting on as uncertain until it arrives. This exercise identifies the conditions a decision must meet. It does not choose investments or predict their returns.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'The same 80-unit loss',
      alt: 'Both 800-unit goals fall to 720, but only the moving deposit is due November 10.',
      caption: `Read the two details and notice they share every number, 800, 720, 80 short, and differ in one phrase: due November 10 against date still flexible. That phrase is the interview the walker does not have. Illustrative values; the loss is measured against the original 800, and the deadline, not the arithmetic, sets the consequence.`,
      items: [
        { label: 'Moving deposit', detail: '800 due November 10; 720 available; 80 short.' },
        { label: 'Unbooked hobby trip', detail: '800 target; 720 available; date still flexible.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Calendar'],
      steps: [
        `Make two goal cards, one for the moving deposit and one for the unbooked trip, each needing 800 units. Starting with identical amounts is deliberate, so that everything that distinguishes them has to come from the other three parts.`,
        `On each card write the due date, how movable that date is, and exactly what would break if the money were short. Naming the broken thing is what turns a number into a goal.`,
        `Reduce the available amount on both cards to 720 and write, in one sentence each, what the 80-unit gap interrupts. One sentence will name a date and a consequence; the other will not, and that is the finding.`,
        `Add one open question to each card about where replacement money could come from, without assuming the value recovers or that new income arrives. Writing it as a question keeps a hope from being counted as a plan.`,
      ],
      notice: `Both cards show the same 80-unit loss, and only one of them shows an interview you cannot miss. The follow-up questions differ too: the deposit card asks what to do by November 10, the trip card asks whether to wait.`,
      troubleshooting: `If both cards end with the word wait, reread the deposit's consequence line; under the scenario the move cannot be postponed, so waiting is not available to it. If the trip card feels urgent, check whether you have quietly booked it in your head.`,
    },
    recall: {
      prompt: 'A course fee can be paid next year until you accept a place requiring payment next week. What changed?',
      hint: 'The amount can stay constant while flexibility disappears.',
      answer: `The date moved from open to fixed, and with it the whole character of the goal. Before you accepted, the fee was the walker at the bus stop: if the money set aside for it dipped, you could wait for the rain to pass. Accepting the place turned it into the interview. The amount has not changed by a single unit, but a temporary shortfall next week now threatens the place itself, and waiting for a recovery is no longer one of your options. The card needs rewriting: same amount, new date, flexibility gone, consequence of a shortfall is losing the place. One decision converted a flexible goal into a hard deadline, which is exactly why flexibility should be written down as a property that can vanish.`,
    },
    quiz: {
      question: 'Why does the 80-unit fall matter differently for the moving deposit?',
      options: ['It predicts a permanent loss', 'Its fixed deadline limits waiting', 'Its short deadline prevents recovery'],
      correctIndex: 1,
      explanation: `The deposit is the interview: November 10 does not move, so you cannot step into the cafe and wait for the rain to pass, and 720 has to do the job of 800 on that day. The fall predicts nothing about whether the loss is permanent, and the deadline does not prevent a recovery from happening; it only means a recovery that arrives later cannot help this goal.`,
    },
    takeaway: `A goal is an amount, a date, how movable the date is, and what a shortfall breaks, and the same 80-unit fall is a passing shower for a trip you have not booked and a soaking before an interview for a deposit due November 10; write all four parts for every goal, treat flexibility as something one decision can remove, and ask whether a shortfall would mean delaying, finding other money, or breaking an obligation.`,
    sourceNote: 'The inherited Investor.gov risk resource supplies background. Goal cards are an original planning exercise, not asset-allocation or investment advice.',
  },
  {
    id: 'money-014',
    outcome: `Map the salary, bonus, and shares in an offer back to the one employer they all depend on, without adding a monthly figure, an annual figure, and a share value into a single total.`,
    scene: 'An offer letter combines monthly salary, a conditional bonus, and company shares.',
    sections: [
      {
        title: 'Separate lines, shared dependency',
        paragraphs: [
          `The offer letter arrives and it reads well. A fictional salary of 1,000 units a month. A possible annual bonus of 200. Company shares currently valued at 800. Three lines, three names, and a pleasant sense that your finances now rest on three legs rather than one. You start to add them up in your head.`,
          `Look at where each line comes from. The salary is paid by the business for your work, every month, for as long as the job lasts. The bonus is paid by the same business, if the conditions in the plan are met. The shares are a slice of ownership in that same business, and their value moves with how it is doing. Three labels, one source. Treating the three lines as three independent supports overlooks the single employer that connects all of them. And none of the three is an unconditional promise; this example states the figures, not guarantees.`,
        ],
      },
      {
        title: 'Three lamps on one fuse',
        paragraphs: [
          `Imagine three lamps in a room: a desk lamp, a floor lamp, and a reading light. Three switches, three bulbs, three pools of light. All three are wired to the same fuse. On an ordinary evening they look like three independent sources of light, and you could switch any one off without affecting the others. When the fuse goes, the room is dark all at once. The lamps were never independent. They were separate only at the switch.`,
          `Salary, bonus, and shares are the lamps. The employer is the fuse. Imagine a weak business year: the bonus conditions are not met, so it is zero; the shares fall from 800 to 400; and there is talk of cuts, so the salary itself feels less certain. These three things do not have to happen together, and in a mild year they will not. But they can share a cause, and when they do, they arrive together. That is why the salary risk and the share-price risk are not automatically separate. A dependency map makes the wiring visible: one box for the employer, with branches to salary, bonus, and shares. It shows a possible common pressure. It does not assign a probability, and it does not predict a redundancy.`,
        ],
      },
      {
        title: 'Follow one business shock',
        paragraphs: [
          `Walk the weak year along the map. The salary branch: still paid, but the job is uncertain. The bonus branch: the stated conditions were not met, so 200 becomes 0. The share branch: valued at 400 instead of 800. Each branch changed for its own reason, missed targets, a lower share price, a hiring freeze, and all three reasons trace back through the wiring to the same business having a bad year.`,
          `Now notice what the map does not say. It does not say the bonus will be missed. It does not say the shares will halve. It says that if one does, the others are more likely to be in trouble at the same time than three unrelated sources would be. That is the difference between an independent risk and a concentrated one, and it is the thing the three tidy lines on the offer letter hid.`,
        ],
      },
      {
        title: 'Check dates and units too',
        paragraphs: [
          `The other trap in the letter is arithmetic. A monthly salary, an annual bonus, and today's share value cannot be added together, any more than you can add a speed, a distance, and a weight. They are different kinds of number. The salary is 1,000 per month; the bonus is 200 per year; the 800 is what the shares are worth this afternoon, not income at all. Shares may also need to vest, meaning you must meet stated conditions, usually staying a certain time, before they are yours without strings. Even after that, sale windows and plan rules can limit when you can turn them into money. Read those terms as a separate document from the valuation. The map is a way to generate questions for a compensation review. It does not tell you to accept the offer, sell the shares, or change anything; that takes the real plan documents and your own circumstances.`,
          `Two habits. Whenever compensation arrives in several lines, draw the fuse, the single business they all run through, before you admire the number of lamps. And keep per month, per year, and current value in separate columns, so that nothing gets added to something it cannot be added to.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'One employer in two scenarios',
      alt: 'The same employer connects monthly salary, a possible bonus, and the value of shares.',
      caption: `Read the weak-year row first and notice that all three figures moved in the same direction at once, the fuse rather than three separate switches. Then look back at the offer row and see that its three numbers carry three different units, per month, per year, and a current value, which is why they were never a single total. Illustrative conditions, not probabilities.`,
      items: [
        { label: 'Offer figures', detail: 'Salary 1,000/month; possible bonus 200/year; shares valued 800.' },
        { label: 'Weak-year scenario', detail: 'Job uncertain; bonus 0; shares valued 400.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Pen'],
      steps: [
        `Draw one box labelled employer and give it three branches: salary, bonus, shares. Drawing the box first, before any numbers, is the point; it is the fuse the three lamps share.`,
        `Copy the sample amounts onto the branches with their units attached: 1,000 per month, 200 per year, 800 current value. The units are what will stop you adding them later.`,
        `Mark each branch that could change in the weak-year scenario and write the reason beside it: conditions not met, share price lower, role at risk. Three different reasons, one cause.`,
        `Add a question to the shares branch about when they vest and whether sale windows or other plan rules restrict access, because the 800 is a valuation and not money you can spend today.`,
        `Finish with one sentence explaining why three payment labels do not amount to three independent risks. If you can write it, you have understood the wiring.`,
      ],
      notice: `Your map shows three distinct forms of pay hanging off a single employer, each with its own unit and its own conditions, and no total anywhere on the page. The weak-year marks cluster on the same box, which is what concentration looks like when drawn.`,
      troubleshooting: `If your page shows three numbers and a sum, you have drawn the lamps without the fuse; add the employer box and the condition on each branch. If you have added 1,000 and 200 and 800, check the units, because a monthly figure, an annual figure, and a valuation are three different kinds of thing.`,
    },
    recall: {
      prompt: 'Housing and transport are provided only while someone keeps a particular job. Are those independent supports during job loss?',
      hint: 'Trace what condition keeps each benefit available.',
      answer: `Not necessarily, and probably not. Trace the wiring: the housing is available while the job lasts, the transport is available while the job lasts, and the income is the job. All three run through the same fuse. On an ordinary day they feel like three separate supports, a home, a way to get around, and a wage, but under their stated terms the same event, losing the role, can switch off all three at once. The honest map has one box, the employer, with three branches, and a note on each saying ends with employment, if that is what the terms say. Independence would mean a home and transport that survive the job ending, and that has to be checked against the actual conditions rather than assumed from the fact that they have different names.`,
    },
    quiz: {
      question: 'What conclusion is supported by the offer-letter example?',
      options: ['All three benefits must fail together', 'Three labels remove concentration risk', 'One business can affect all three benefits'],
      correctIndex: 2,
      explanation: `The three lamps share a fuse, so one weak year at the business can dim salary, bonus, and shares together, which is what the map shows. It does not show that they must fail together or by the same amount; a mild year leaves all three alone. And three labels on the letter change nothing about the wiring behind them, so they do not remove the concentration, they only make it harder to see.`,
    },
    takeaway: `Salary, bonus, and shares are three lamps on one fuse, so draw the employer box they all run through before counting them as separate supports, write each with its own unit, per month, per year, current value, so they are never added into one total, note what has to happen before shares vest and can be sold, and read the map as a list of questions for a review rather than a verdict on the offer.`,
    sourceNote: 'Inherited fund and risk references support the concentration concept. The compensation package is fictional; plan rules and individual decisions require separate review.',
  },
  {
    id: 'money-015',
    outcome: `Explain why a 20% fall then a 20% rise leaves 96 rather than 100, and find the recovery a loss really needs by dividing the missing amount by what is left, not by what you started with.`,
    scene: 'Two percentage headlines appear to cancel in a fictional balance history.',
    sections: [
      {
        title: 'Equal percentages use unequal starting points',
        paragraphs: [
          `A fictional investment statement tells a two-line story. Last period: down 20%. This period: up 20%. The two headlines look like a pair of brackets that cancel, and most people reading them feel they are back where they began. The balance says otherwise. It started at 100 units and it now shows 96.`,
          `Translate each headline into money and the gap explains itself. The 20% fall was measured against 100, so it removed 20 units and left 80. The 20% rise was measured against 80, because 80 was what existed when the rise happened. Twenty percent of 80 is 16. Add it back and you reach 96. The two percentages match. The two amounts do not, because each percentage is taken from the balance at the start of its own period, never from a permanent original.`,
        ],
      },
      {
        title: 'The coat in the sale',
        paragraphs: [
          `A coat costs 100 in the window. The shop marks it down 20% in the sale, so it is now 80. After the sale, the shop raises its prices by 20%, and the coat goes up by 20% of 80, which is 16, to 96. Nobody is surprised that it is cheaper than before the sale; the second 20% was taken from a smaller number. If the shop wanted the coat back at 100, it would have to raise the sale price by 20 units, and 20 out of 80 is a 25% rise.`,
          `Your balance is the coat. Every percentage change is a mark-up or mark-down from the current price tag, not from the one in the old catalogue. That means losses and gains are not symmetric. To undo a loss you have to climb back the same number of units, but you are climbing from a smaller base, so the percentage is always bigger than the one that took you down. From 80 back to 100 needs 20 units; 20 divided by 80 is 0.25, so a 20% loss needs a 25% gain. Keep both denominators in view. The loss was 20 over 100. The recovery is 20 over 80. Same twenty units, different bottom line. And saying a 20% loss needs a 25% recovery describes the arithmetic only. It says nothing about whether that recovery will arrive or when.`,
        ],
      },
      {
        title: 'Calculate the recovery that would be needed',
        paragraphs: [
          `The method is three lines. Write what you have now. Write what you want to get back to. Divide the gap by what you have now. Try it with a bigger fall: 200 falls 25% to 150. The gap is 50. Fifty divided by 150 is about 0.3333, so the required recovery is about 33.33%, not 25%. The steeper the fall, the faster the required climb pulls away from it; a 50% loss needs a 100% gain just to break even.`,
          `The common wrong answer comes from using the old price tag as the denominator. Twenty over 100 gives 20%, which is the fall, not the recovery. Twenty percent of 80 is only 16, and that is exactly why the statement said 96. Whenever a recovery percentage looks the same as the loss that preceded it, check which number is underneath.`,
        ],
      },
      {
        title: 'Separate investment change from new money',
        paragraphs: [
          `There is a second way for a balance to go from 80 back to 100: you put in 20 units. The screen looks the same, but that is a contribution, not a 25% gain, and treating it as performance flatters the investment. Withdrawals and fees play the same trick in the other direction, moving the displayed balance without being market movement. This example excludes contributions, withdrawals, and fees so that the shifting denominator is the only thing at work. In a real statement, ask two questions of every percentage: what actually moved the balance, and which starting amount was this percentage measured against? Do not read a required recovery as an expected return, and do not treat a bigger required percentage as a reason to take bigger risks to chase it.`,
          `Two habits. Turn every percentage headline into units before judging whether two of them cancel. And when you want to know what a loss needs to be undone, divide the missing amount by what is left, never by what you started with.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'A fall followed by an equal rate gain', unit: 'units',
      alt: 'A 100-unit balance falls to 80, then a 20% gain brings it only to 96.',
      caption: `Look at the third bar and notice it stops short of the first by four units, even though the two headlines were both 20%. The middle bar is the sale price, and the second 20% was taken from it, not from the original 100. Illustrative consecutive periods with no cash movements or fees.`,
      items: [
        { label: 'Start', detail: 'Original balance.', value: 100 },
        { label: 'After 20% loss', detail: '100 less 20 = 80.', value: 80 },
        { label: 'After 20% gain', detail: '80 plus 16 = 96.', value: 96 },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Calculator'],
      steps: [
        `Write 100, take away twenty percent, and circle the 80 that remains. The circle marks the new price tag, the only number the next percentage is allowed to see.`,
        `Calculate twenty percent of the circled 80, which is 16, and add it on to get 96. Doing this with the 80 rather than the 100 is where the four-unit gap comes from.`,
        `Go back to the 80, write the missing 20 above it as a fraction, and divide: 20 over 80 is 25%. Label it required recovery, because that is the mark-up the coat needs to get back to the window price.`,
      ],
      notice: `The loss and the required recovery are the same 20 units and different percentages, 20% down against 25% back up, because they sit on different denominators. Once you circle the 80, the asymmetry stops looking like a trick.`,
      troubleshooting: `If your recovery comes out at 20%, you divided the gap by the original 100; replace it with the current 80. If you reached 100 after the gain, you took twenty percent of 100 instead of 80, which is adding new money rather than measuring growth.`,
    },
    recall: {
      prompt: 'A 200-unit holding falls 25% to 150. What percentage gain would restore 200 without a contribution?',
      hint: 'Divide the missing amount by 150.',
      answer: `About 33.33%. The coat has been marked down from 200 to 150, and to get it back in the window at 200 the shop needs a mark-up of 50 units. The mark-up is measured against the current tag, so 50 divided by 150 is about 0.3333, or roughly a third. The fall was 25% because 50 was measured against 200; the climb is a third because the same 50 is measured against 150. That is the required mathematical gain under this model, with no contributions, withdrawals, or fees. It is not a forecast that such a gain will happen, and the fact that it is larger than 25% is not a reason to take more risk to chase it.`,
    },
    quiz: {
      question: 'Which gain restores an 80-unit balance to 100?',
      options: ['25%', '20%', '16%'],
      correctIndex: 0,
      explanation: `The coat is on the shelf at 80, and getting it back to 100 is a 20-unit mark-up on an 80-unit tag, which is 20 divided by 80, or 25%. A 20% gain is measured against the 80 and adds only 16, which is why the balance ends at 96. The 16 is the size of that shortfall in units, not a percentage gain.`,
    },
    takeaway: `Every percentage is a mark-up or mark-down from the current price tag, so a 20% fall from 100 leaves 80 and a 20% rise from 80 reaches only 96; to find what a loss needs, divide the missing units by what is left, 20 over 80 is 25%, turn every headline into money before deciding two of them cancel, and remember a required recovery is arithmetic, not a forecast or a reason to take more risk.`,
    sourceNote: 'The inherited Investor.gov risk reference provides context. These figures are invented, exclude cash flows, and make no claim about future recovery.',
  },
  {
    id: 'money-016',
    outcome: `Estimate what an income gap would cost by adding the bills that keep arriving, multiplying by a stated number of months, and labelling the result a scenario rather than a target copied from others.`,
    scene: 'A household separates unavoidable bills from pausable spending during a temporary income interruption.',
    sections: [
      {
        title: 'Begin with the bills that continue',
        paragraphs: [
          `The question arrives in a quiet moment: if the income stopped for a while, how long could this household keep going? The usual answer is a rule someone once heard, three months of salary, six months of salary, and it feels authoritative. It is also measuring the wrong thing. When income stops, salary is not what you need to replace. Rent is. Food is. The loan payment that does not care whether you are working is.`,
          `So start with the bills, not the payslip. In a fictional household, housing is 500 units a month, basic food 180, utilities 70, required loan payments 90, and necessary travel 60. The categories do not overlap, so they can be added: 900 units a month that keeps arriving whether or not any income does. There is also about 100 of optional spending that could be paused under this scenario. The 900 is the number that needs a plan. The 100 is a lever you can pull.`,
        ],
      },
      {
        title: 'Fuel for your own car',
        paragraphs: [
          `Nobody plans a long drive by asking how much fuel the person at the next pump is buying. You ask how much your car burns per hour and how many hours you expect to drive. Burn rate times duration gives the fuel you need, and both halves are yours: your engine, your route. Copying a stranger's tank size tells you nothing about whether you will make it.`,
          `A buffer estimate is the same calculation. The burn rate is the monthly continuing cost, 900 here, built from your actual bills. The duration is how many months you choose to plan for, which is an assumption and should be written as one. Two months at 900 is 1,800 units. Change the household and the burn rate changes; a dependent, a higher rent, or a medical need alters the figure for the same salary. Change the assumed duration and the total changes with it. What never enters the calculation is anybody else's income, including your own; salary tells you how fast the tank fills, not how fast it empties.`,
        ],
      },
      {
        title: 'Essential does not mean identical for everyone',
        paragraphs: [
          `The word essential needs care, because it is not a moral label. Necessary travel might fall when the commute stops, or rise if the gap means trips to appointments and interviews. One household has a prescription cost that another does not. Judge each expense by its function and by whether you are actually obliged to pay it, not by whether it sounds virtuous. And optional does not mean instantly removable. A subscription may need a month's notice; a contract may run to a date. Mark each cost as continuing, adjustable after a stated date, or uncertain, so the estimate can be inspected line by line rather than defended as a single number.`,
          `Three more rules keep the total honest. Known irregular costs, an insurance renewal, a school term, get their own dates and are not counted twice. Benefits, family support, or future earnings are not confirmed cash until their conditions and timing are understood; write them as possibilities, not income. And the two-month duration is a chosen scenario, not advice about how long a gap lasts or how big a buffer should be.`,
        ],
      },
      {
        title: 'Why the salary rule is so sticky',
        paragraphs: [
          `The salary rule survives because salary is one number everyone knows and bills are a dozen numbers nobody has added up. It also flatters high earners and alarms low ones, regardless of what either actually spends. The burn-rate estimate takes twenty minutes longer and produces a figure that belongs to your household. It can reveal a gap it cannot close; an estimate is information, not a demand to save money you do not have, and not a verdict on anyone's habits.`,
          `Two habits. Build any buffer estimate from the continuing bills and a stated number of months, and write both halves down so someone else could check them. And review the list when circumstances change, a move, a new dependent, a paid-off loan, because the burn rate is a property of the household now, not forever.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Sample continuing monthly costs', unit: 'units per month',
      alt: 'Housing 500, food 180, utilities 70, required payments 90, and travel 60 total 900.',
      caption: `Look at what is missing first: there is no salary bar and no optional-spending bar, because this chart is the burn rate, the fuel the household uses whether or not income arrives. Then read the five bars as one sum, 900 a month, which the scenario multiplies by two. Illustrative household with no overlapping categories; the proportions are not a recommendation.`,
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
        `Copy the five sample continuing costs and add them, leaving the optional 100 out. You are measuring the burn rate, and the optional spending is a lever rather than fuel.`,
        `Write a two-month scenario at the top of the page and multiply 900 by two. Writing the duration as a heading makes it visibly an assumption you chose.`,
        `Add two columns beside the costs: one for items that are uncertain, and one for items that can only change after a notice period or a date. These columns are what stop a pausable cost from being treated as already paused.`,
        `Label the 1,800 total a scenario estimate for this household, not a universal savings target. The label is the difference between fuel for your car and the stranger's tank.`,
      ],
      notice: `Your estimate shows two things side by side: the monthly obligations that keep arriving and the number of months you assumed. Anyone reading the page can see where 1,800 came from and change either half for their own household.`,
      troubleshooting: `If your total includes the optional 100, ask whether the scenario really lets you pause it from day one; if a notice period applies, it belongs in the adjustable-after-a-date column for now. If you started from salary, start again from the bills; the payslip measures how the tank fills, not how it empties.`,
    },
    recall: {
      prompt: 'Two people earn the same salary, but one supports a dependent and pays higher rent. Should their buffer estimates automatically match?',
      hint: 'Salary is not the list of obligations.',
      answer: `No. Two cars can fill up at the same pump and burn fuel at completely different rates. Salary is how fast the tank fills; the buffer estimate is about how fast it empties when the filling stops, and that depends on the continuing bills. The person with a dependent and higher rent has a larger housing line, probably a larger food line, and possibly costs the other person does not have at all, so their monthly burn rate is higher and the same two-month scenario produces a bigger figure. Each estimate should be built from that household's own obligations, dates, available support, and uncertainties. Equal income says nothing about equal need, which is exactly why a rule based on months of salary gives both of them the wrong answer.`,
    },
    quiz: {
      question: 'What does 1,800 units mean in the sample estimate?',
      options: ['A universal minimum for every household', 'Two months of the stated continuing costs', 'Two months of salary replacement'],
      correctIndex: 1,
      explanation: `It is the burn rate times the chosen duration: 900 units of continuing bills multiplied by a two-month scenario, under the stated assumptions. It is not a minimum for anyone else, because another household's bills give another burn rate. And it is not salary replacement, because salary never entered the calculation; the fuel you need is set by what the car burns, not by what the pump charges.`,
    },
    takeaway: `Plan a buffer like fuel for your own car, burn rate times duration: add up the bills that keep arriving when income stops, 900 a month in this household, multiply by a number of months you state as an assumption, mark each cost as continuing, adjustable after a date, or uncertain, keep salary and other people's rules out of it, and call the result a scenario estimate rather than a target.`,
    sourceNote: 'The inherited CFPB emergency-fund guide describes circumstances-based saving. The household, duration, and worksheet are original illustrations, not tested targets.',
  },
  {
    id: 'money-017',
    outcome: `Turn a bill you know is coming into dated contributions by dividing the uncovered amount by the paydays left before it, and keep it apart from the reserve meant for genuine surprises.`,
    scene: 'An annual cycling-club renewal is due after six remaining paydays.',
    sections: [
      {
        title: 'Infrequent is not the same as unexpected',
        paragraphs: [
          `The cycling-club renewal is a fictional 240 units and it falls due in six months. You know the date; it is the same every year. You intend to renew. And yet when the email arrives next spring, it will land like a small ambush, because 240 does not appear in any ordinary month and nothing in the ordinary month has been making room for it.`,
          `This is a predictable irregular expense: a known cost that simply does not happen every month. It is not an emergency, however much it feels like one on the day. The distinction matters because households that cannot tell the two apart quietly promise one savings balance to two jobs. The reserve that was meant for a broken boiler gets spent on a renewal that was visible a year in advance, and then the boiler breaks.`,
        ],
      },
      {
        title: 'Filling the jug before the guests arrive',
        paragraphs: [
          `You need a jug holding 240 millilitres of cordial on the table by the time the guests knock. The tap is across the garden and you have time for six trips. Each trip carries 40. After two trips there is 80 in the jug, after four there is 160, and the sixth trip fills it. Nobody would describe the knock at the door as a surprise, and nobody would try to carry 240 in one go at the last minute if six easy trips were available.`,
          `Dated contributions are the trips. Divide the amount still uncovered by the number of paydays that fall before the deadline, and that is the size of each trip. Two details keep the arithmetic honest. First, count only the paydays that arrive before the bill; a salary landing the day after the renewal cannot fund it. Second, start from the uncovered amount, not the whole bill. If 60 units are already set aside for this renewal, only 180 remain to collect, and six trips of 30 will do it. But the jug has to be the right jug. Money sitting in the same account for rent is not a contribution to the renewal just because the balances touch. This exercise ignores interest and charges; the point is the calendar, not the yield.`,
        ],
      },
      {
        title: 'Count deposits before the bill, not after it',
        paragraphs: [
          `Lay it out. The renewal is 240, nothing is reserved, and six paydays fall before the due date. Each contribution is 240 divided by six, which is 40. Checkpoints: 80 after the second, 160 after the fourth, 240 after the sixth, with the bill still ahead. Now cross out one payday, because a car repair ate it. Five trips remain and the jug is the same size. Each remaining contribution is 240 divided by five, which is 48. The bill did not shrink because the schedule did.`,
          `That recalculation is the habit worth keeping. Whenever a contribution is missed or a payday moves, divide the remaining uncovered amount by the trips actually left. The temptation is to keep carrying 40 and hope, which leaves the jug 40 short when the guests knock.`,
        ],
      },
      {
        title: 'An early gap is information',
        paragraphs: [
          `Dividing a bill does not create income. If 40 a payday will not fit around current obligations, the worksheet has not failed; it has told you something six months early instead of on the morning the email arrives. For an optional membership, one honest response is to review whether to renew at all. That is a question about this bill, not permission to skip a mandatory one, and even an optional cost may have a notice period or a cancellation date to check before you assume it can vanish. Keep the schedule tied to real pay dates, revisit it if the quoted price changes, and leave genuinely uncertain amounts marked as estimates rather than presenting the plan as a promise.`,
          `Two habits. When a yearly or quarterly bill is known, give it its own line with a due date and an uncovered amount, separate from the emergency reserve. And each time a contribution is missed, redo the division with the paydays actually left, so the last trip is never a sprint.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'Six contributions before renewal',
      alt: 'Reserved money reaches 80 after two contributions, 160 after four, and 240 after six.',
      caption: `Look at the last marker first and notice that the jug is full, 240 reserved, before the renewal arrives rather than on the day. Then read the checkpoints backward, 160 and 80, as the trips to the tap that got it there. Illustrative 40-unit contributions with no interest or fees; the spacing is schematic, not proportional.`,
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
        `Write the 240-unit renewal with its due date, then mark on a calendar the six pay dates that fall before it. Putting the dates on paper first is what makes a trip that falls after the deadline visibly useless.`,
        `Divide the uncovered 240 by six and write 40 beside each date. This is the size of one trip to the tap when all six trips are available.`,
        `Add up the running total after the second, fourth, and sixth contributions, 80, 160, and 240, and check that the jug is full before the bill, not on it.`,
        `Cross out one pay date as if it had been missed and recalculate the equal amount across the five that remain. The recalculation, not the original 40, is the skill being practised.`,
      ],
      notice: `With five trips left, each one has to carry 48, and the renewal is still exactly 240. The schedule changed and the bill did not, which is the thing people forget when they keep carrying the old amount.`,
      troubleshooting: `If you still get 40 after crossing out a date, you divided by six again; divide by the number of pay dates actually left before the deadline. If a date you counted falls after the renewal, remove it, because money that arrives after the knock cannot fill the jug.`,
    },
    recall: {
      prompt: 'A 300-unit routine service is due after four paydays, with 60 already reserved. What equal contributions would cover the gap?',
      hint: 'Subtract money already assigned to this specific bill.',
      answer: `Four contributions of 60. Start with the jug, not the bill: 60 is already in it, so the uncovered amount is 300 minus 60, which is 240. Four trips to the tap fall before the service date, so each trip carries 240 divided by four, which is 60. Two checks before you trust the answer. The 60 already reserved must be money actually assigned to this service, not rent money sharing the account. And all four paydays must land before the bill; if the last one arrives a day late, the division is 240 by three, which is 80. This assumes the quoted price holds and ignores interest and charges, as the lesson does.`,
    },
    quiz: {
      question: 'If only five contributions remain for the full 240-unit renewal, what amount is needed per contribution?',
      options: ['48 units', '40 units', '50 units'],
      correctIndex: 0,
      explanation: `The jug still needs 240 and there are five trips left, so each trip carries 240 divided by five, which is 48. Forty is the answer for six trips; it leaves the jug 40 short when the guests knock. Fifty would collect 250, more than this stated bill requires, which is harmless but is not the equal amount the question asks for.`,
    },
    takeaway: `A yearly bill you can see coming is a jug to fill before the guests knock, not an emergency: give it its own line, subtract what is already reserved for it, divide the rest by the paydays that land before the due date, 240 over six is 40 and over five is 48, and redo the division every time a trip is missed, so the surprise reserve is never spent on a date that was on the calendar all along.`,
    sourceNote: 'The inherited CFPB emergency-fund source distinguishes unplanned expenses. This renewal schedule is original arithmetic, not a prescribed saving rate.',
  },
  {
    id: 'money-018',
    outcome: `Find the day a bill cannot be paid even though the month ends in credit, by walking the balance date by date instead of adding the whole month at once.`,
    scene: 'Housing and utility bills leave before a delayed payday.',
    sections: [
      {
        title: 'A monthly total loses the order',
        paragraphs: [
          `A fictional month starts with 300 units in the account. The housing bill, 250, goes out on day two. The utility bill, 100, goes out on day ten. Income of 600 arrives on day eleven. Add the month up and it looks fine: 300 plus 600, minus 250, minus 100, leaves 550. There is money to spare. You stop worrying.`,
          `The account does not add the month up. It processes each event on its date, in order, and on day ten it has no idea that 600 is arriving tomorrow. A monthly total answers how much money passes through. It throws away when. Cash flow is the name for money entering and leaving over time, and the tool that keeps the when is a running balance: the amount actually available after each dated event. The 550 is true and it is not the number that pays the utility bill.`,
        ],
      },
      {
        title: 'Stepping stones across the stream',
        paragraphs: [
          `Picture crossing a stream on stepping stones. Both banks are high and dry, and if you only looked at the banks you would call the crossing safe. The stones are what you actually stand on, one at a time, in order. If the third stone is under water, you get wet feet there, and the dry far bank does nothing about it. The crossing is only as safe as its lowest stone.`,
          `The month-end total is the far bank. Each dated payment is a stone. Walk them in order. Day one: 300. Day two: housing takes 250, leaving 50. Day ten: the utility bill needs 100 and there is 50. That stone is under water by 50 units. Day eleven: 600 arrives and the balance rises to 550, exactly as the total promised, one day after it was needed. Write shortfall 50 at day ten rather than drawing the balance below zero. The word shortfall names a funding problem to solve before the date; it is not an overdraft you have been granted or permission to miss the payment. This example includes no overdraft facility, no late fee, and no agreement to move the due date, so the gap is simply a gap.`,
        ],
      },
      {
        title: 'Stop at the first unfunded payment',
        paragraphs: [
          `The method is to walk the stones and stop at the first one that is wet. Put every known event on its date: the opening balance, each bill, each confirmed income. Subtract only the payments that fall before the next income. The moment a bill exceeds what is available, circle that date and write the size of the gap. Then carry on, so you can see whether the later income clears it and by how much.`,
          `Two mistakes make every stone look dry. The first is counting day-eleven income on day ten, because it is coming anyway. It is not there yet. The second is counting a refund, a bonus, or a usual payday as if it were confirmed. A salary that normally arrives on the eleventh is a stone you expect to be there, not a stone you have stood on. Mark expected money as expected until the date is confirmed.`,
        ],
      },
      {
        title: 'Use the low point to form a question',
        paragraphs: [
          `Finding a wet stone early is the point of the exercise. With days to spare, you can check pending payments, confirm the income date, and ask the provider whether a different payment date or a support process exists. A provider may well offer one, but a question asked is not an agreement reached; change the plan only when you have something in writing. Do not delete an obligation because money is expected later. Keep both views together: the monthly total tells you whether the resources exist overall, and the dated walk tells you the moment they fail to cover an outgoing payment. Neither replaces the other.`,
          `Two habits. Whenever you check whether a month works, walk the balance date by date and find the lowest stone before you look at the total. And treat any income you have not yet received as expected, not available, until the day it lands.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'The gap before payday',
      alt: '300 becomes 50 after housing; a 100-unit bill arrives before 600 of income.',
      caption: `Look at day ten first: the stone that is under water, with 100 due and 50 available. Then notice that the 600 on day eleven arrives one day too late to help, which is why the comfortable month-end total hid the problem. Illustrative units and dates; the 50-unit shortfall is a need to fund, not available money or an assumed overdraft.`,
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
        `Draw a line for the month and place the opening 300, the 250 housing bill, the 100 utility bill, and the 600 income on their stated dates. Laying the stones out in order is what the monthly total never did.`,
        `Walk the line subtracting only the payments that fall before the income, and stop the moment a bill is larger than what is available. Stopping is the skill; it is where the wet stone is.`,
        `Circle day ten, write shortfall 50 beside it, and keep that label separate from the 550 month-end figure. Both numbers are true, and only one of them pays the utility bill.`,
        `Draft one question you could ask the utility provider about payment-date options, and note that until they answer in writing, nothing in the plan has changed.`,
      ],
      notice: `Your page shows a 550-unit month-end remainder and a 50-unit gap on day ten at the same time. The far bank is dry and the third stone is wet, and you found the stone eight days before you would have stepped on it.`,
      troubleshooting: `If every date on your line is positive, you have almost certainly counted the day-eleven income before it arrived; move it back to its own date and walk again. If you added the month first and then tried to place the dates, start from the dates instead.`,
    },
    recall: {
      prompt: 'A refund of 200 is expected Friday, but a 150-unit payment is due Thursday and only 80 is available. What is missing?',
      hint: 'Keep the expected refund after the payment date.',
      answer: `Seventy units on Thursday. Walk the stones in order: Thursday needs 150 and there is 80, so that stone is under water by 70. The 200 refund is a stone further along the crossing, on Friday, and it cannot be stood on a day early however certain it feels. It is also only expected, which means its date still needs confirming; refunds slip. So the honest picture is a 70-unit shortfall on Thursday, a possible recovery on Friday, and a question to ask before Thursday about the payment date or another source. Adding the week together, 80 plus 200 minus 150, gives a comfortable 130 and tells you nothing about Thursday.`,
    },
    quiz: {
      question: 'What does the sample month-end remainder of 550 fail to prove?',
      options: ['That income exceeds the two bills overall', 'That the opening balance was 300', 'That every bill is funded on its due date'],
      correctIndex: 2,
      explanation: `The 550 is the far bank: it shows that over the whole month the money was there, and it says nothing about the order the stones came in. On day ten the utility bill needed 100 and only 50 was available, because the 600 arrived on day eleven. The total does correctly show income exceeding the bills overall, and the opening balance of 300 was a given, so neither of those is what it fails to prove.`,
    },
    takeaway: `A month that ends in credit can still have a day it cannot pay, so walk the balance like stepping stones, in date order, subtracting each bill before the income that follows it, and stop at the first stone under water: here day ten, 100 due against 50 available, with 600 arriving a day too late; write the gap as a shortfall to fund, treat unarrived money as expected rather than available, and keep the dated walk beside the monthly total instead of in place of it.`,
    sourceNote: 'The inherited CFPB emergency-fund guide includes cash-flow planning. Dates here are invented and imply no right to change due dates.',
  },
  {
    id: 'money-019',
    outcome: `After spending part of an emergency reserve, record what it covered, recheck this payday's income against its bills before restarting the old transfer, and set a review date, not a repayment deadline.`,
    scene: 'An essential refrigerator repair uses part of a household emergency reserve.',
    sections: [
      {
        title: 'The withdrawal did its intended job',
        paragraphs: [
          `The refrigerator stops cold on a Tuesday, and the repair comes to an illustrative 240 units. The household has a 600-unit emergency reserve, so the bill is paid and the reserve drops to 360. The food is safe. The number on the screen, which used to be a comfortable 600, now looks like a wound, and the instinct is to heal it as fast as possible.`,
          `Pause on what just happened. An unplanned, unavoidable cost arrived, and money that had been set aside for exactly that paid for it without a loan, a missed bill, or a borrowed favour. That is not the reserve failing. That is the reserve working. Write down the event and what it covered before you judge the system by its closing balance, because a withdrawal is not automatically a mistake. The honest question is a different one: was this genuinely unplanned, or was it a predictable cost wearing an emergency label? A fridge dying is the first kind. An annual service is the second, and it belongs in a different plan.`,
        ],
      },
      {
        title: 'Restocking the first-aid kit',
        paragraphs: [
          `A first-aid kit in the kitchen drawer gets used when someone cuts a finger. Nobody feels guilty about the missing plasters; that is what they were for. You restock the kit, but you restock it from this week's shopping money, in this week's circumstances. If this week's budget is already tight, you buy the plasters and leave the fancy bandage until next time. What you do not do is skip dinner so the kit is back to full by Friday.`,
          `The reserve is the kit, and the old automatic transfer is the restocking habit. Before the fridge broke, 80 units moved into the reserve every payday, and it fitted. But the fridge may not have been the only thing that changed. Suppose the next confirmed income is 500 and the known bills before the following payday total 470. That leaves 30 before any cost you have forgotten or cannot yet pin down. If the old 80-unit transfer runs as usual, bills plus transfer come to 550 against 500 of income, a 50-unit shortfall on known commitments alone. Wanting the reserve back does not make 80 affordable this payday. An automation that was set up in different circumstances is not evidence that those circumstances still hold; it is just a thing that happens unless you look at it.`,
        ],
      },
      {
        title: 'The old transfer may no longer fit',
        paragraphs: [
          `So run the check before the transfer runs. Put the confirmed 500 on one side and the 470 of dated bills on the other. The gap is 30. Now add the old transfer on a separate trial line, not as a decision but as a test: 470 plus 80 is 550, and 550 against 500 shows the 50 the transfer would overdraw. The trial line is the whole technique. It lets you see the consequence of restarting the habit without having restarted it.`,
          `The 30 that remains is not spare money either. It is what is left before the costs that have not been listed yet, and in the weeks after a breakdown there are often some: a follow-up visit, a replacement part, the food that spoiled. Write a line for costs not yet included and leave it open. A contribution this payday might be 30, or 10, or nothing, and any of those is a legitimate answer to the actual situation.`,
        ],
      },
      {
        title: 'Give the event a follow-up date',
        paragraphs: [
          `Close the episode with three written lines: why the money was used, what has changed in income and bills, and when you will next look at contributions. The review date is a date to look, not a deadline to be back at 600. Repairs have sequels and income gaps can lengthen, so mark those uncertainties rather than promising the reserve all 30 right now. And if the honest answer to the first line was that this was a predictable annual cost, move it into the irregular-bill plan so it stops ambushing the kit every year. The output is a clearer picture of the household as it is now. It is not guilt about the withdrawal, and it is not a fixed savings percentage.`,
          `Two habits. Every time the reserve is used, write what it covered and whether it was truly unplanned, before you look at the balance. And before any automatic contribution restarts, run this payday's income against this payday's bills on a trial line, with the transfer added last.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'The repair and the remaining reserve', unit: 'units',
      alt: 'The reserve starts at 600, the repair uses 240, and 360 remains.',
      caption: `Read the middle bar as the plasters that were used, not as money lost: 240 covered the fridge, which is the job the kit was for. Then check that the repair bar and the after bar add back to the before bar, 240 plus 360 is 600; these are not three separate pools. Illustrative amounts.`,
      items: [
        { label: 'Before repair', detail: 'Original reserve.', value: 600 },
        { label: 'Repair paid', detail: 'Amount used for the refrigerator.', value: 240 },
        { label: 'After repair', detail: '600 less 240.', value: 360 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        `Write a sample withdrawal note in one line: refrigerator repair, unplanned, 240 used, 360 remaining. Writing the word unplanned is the part that stops the balance from reading as a failure.`,
        `Place the next confirmed income of 500 beside the 470 of bills due before the following payday, and write the 30 that remains. This is the restocking budget as it actually is this week.`,
        `On a separate trial line, add the old 80-unit transfer to the bills and compare the 550 with the 500. Mark the 50-unit shortage. The trial line shows what the habit would do without letting it do it.`,
        `Choose a review date, list the costs you cannot yet put a number on, and leave any real standing orders exactly as they are. This is a paper exercise about a fictional household.`,
      ],
      notice: `Two true things sit on your page: the reserve did its job, and the old transfer now fails the cash-flow check by 50 units. Neither cancels the other, and the decision about this payday's contribution comes from the second, not from how the first feels.`,
      troubleshooting: `If the 30 looks like guaranteed spare money, add a line for costs not yet included, because the weeks after a breakdown usually have some. If you feel the transfer must restart at 80 to put things right, that is the guilt talking; the check is about this payday's numbers.`,
    },
    recall: {
      prompt: 'After an urgent travel expense, someone receives a smaller paycheck but restarts the previous savings transfer. What should they review?',
      hint: 'Yesterday’s affordable amount is not evidence about this payday.',
      answer: `This payday, from scratch. The old transfer was sized for a bigger paycheck and a week without travel costs; both of those have changed, and the standing order has not noticed. They should put the smaller confirmed income beside the bills due before the next payday, add any travel costs that are still arriving, and only then add the old transfer on a trial line to see whether it overdraws the known commitments. Restocking the first-aid kit is right; restocking it from money that dinner needs is not. If the numbers do not fit, a smaller contribution or none this time is the correct answer, and a fixed rebuilding deadline would simply manufacture the next shortage. A review date in a few weeks, when the travel costs have settled, is the better promise.`,
    },
    quiz: {
      question: 'With 500 income, 470 bills, and an 80 transfer, what does the sample reveal?',
      options: ['A 50-unit funding gap', 'An 80-unit surplus', 'A 30-unit surplus after saving'],
      correctIndex: 0,
      explanation: `Bills of 470 plus the 80 transfer come to 550 against 500 of income, so restarting the old habit unchanged would leave the known commitments 50 short; that is the trial line doing its job. The 30 is what remains before the transfer, not after it, so a 30-unit surplus after saving reads the line in the wrong order. An 80-unit surplus mistakes the size of the transfer for money left over.`,
    },
    takeaway: `Using the reserve is the first-aid kit doing its job, so write down what it covered and whether it was truly unplanned before you look at the balance, then restock from this payday's actual circumstances: income of 500 against bills of 470 leaves 30, and the old 80-unit transfer added on a trial line shows a 50-unit gap, so set a date to review contributions rather than a deadline to be back at 600.`,
    sourceNote: 'The inherited CFPB emergency-fund guide provides background. This follow-up routine is an original planning aid, not a compulsory savings schedule.',
  },
  {
    id: 'money-020',
    outcome: `Map the route from a balance to an actual payment, find where a single lost device or a daily limit would stop it, and rehearse by reading the provider's instructions rather than by breaking anything.`,
    scene: 'A lost phone interrupts access to funds needed for a same-day repair.',
    sections: [
      {
        title: 'The balance can exist while access fails',
        paragraphs: [
          `A fictional reserve holds 900 units, and a 500-unit repair bill is due today. On any other day this would be simple. Today the phone that approves every login and every payment is missing, somewhere between the bus and the office. The money is exactly where it was last night. The route to it has gone.`,
          `That is the first thing to separate: the balance and the access to it are two different facts. Nine hundred units exist. To use them you need to prove who you are, reach the account, and send the payment. Each of those steps had been running through one device. Planning around the 900 alone missed a single-device dependency. Such dependencies have a habit of showing themselves at the worst moment, when you are already dealing with the problem the money was for.`,
        ],
      },
      {
        title: 'The key and the letterbox',
        paragraphs: [
          `Imagine the money is in a strongbox. The key is on the keyring you have just lost. Even once you get a replacement key, the box has a letterbox slot on the front. The slot only lets 300 units through per day. Two separate things stand between you and the 500: the key, which is an access problem, and the slot, which is a limit problem. Finding the key does not widen the slot. Widening the slot would not help without the key.`,
          `Now apply it. Suppose the provider's documented route, once access is restored, allows transfers of at most 300 units per day. A successful login still leaves this route 200 short of the 500 bill today, with 900 sitting in the box. There may be an authorised alternative: a branch, a different payment type, a higher limit on request. Until you have verified it in the provider's own instructions, it is a hope and not a route. Do not assume that several smaller transfers will slip past a daily total; the slot counts everything that goes through it. Do not assume a provider must raise the limit because you ask. And remember that recovering access takes time of its own. Processing hours and identity checks have nothing to do with how much money is in the box.`,
        ],
      },
      {
        title: 'Access and transfer limits are separate checks',
        paragraphs: [
          `Draw the route as three stages: identify yourself, reach the account, make the payment. Mark which stages depend on the missing phone. In this example all three do, which is the dependency the map is for. Write recovery timing as unknown rather than guessing. The provider's instructions will say what identification they need and how long it takes, and that is the only honest source. Then add the 300-unit daily limit next to the payment stage and set it against the 500-unit bill. The map now shows two different gaps: an access gap of unknown length, and a 200-unit route shortfall even after access returns.`,
          `Keep the two gaps on separate lines, because they have separate fixes. The access gap is solved by the provider's recovery process. The route shortfall is solved by a different authorised method or a different date for the bill. Mixing them produces a comforting and wrong thought: once the phone is sorted, everything is.`,
        ],
      },
      {
        title: 'Rehearse by reading, not by breaking access',
        paragraphs: [
          `The time to draw this map is before a phone goes missing, and the way to draw it is by reading. Find the provider's official recovery instructions and their verified support contacts through a route you already trust. That means the number on your card or the address you have used before, not a link from a message. Note where your protected recovery information lives, without copying passwords or one-time codes into ordinary notes. Check which of your options depend on the same phone, whether a second device is supported, and what identification and waiting period the provider describes. This is a documentation exercise only. Do not log yourself out to see what happens. Do not switch off security, trigger a recovery you do not need, or send a test transfer. A written access map tells you which questions are still open. It cannot make any device, network, or provider permanently reliable.`,
          `Two habits. For any money you are counting on in an emergency, trace the route from balance to payment and mark every stage that runs through a single device. And when a plan depends on a transfer limit, read the limit as a daily total. Check the authorised alternatives before the day you need them.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Balance versus documented route',
      alt: 'A 900-unit balance does not override lost-phone recovery or a 300-unit daily transfer limit.',
      caption: `Read the two rows as the key and the letterbox: the first is money that exists behind an access problem of unknown length, the second is what the documented route lets through even once the key is back, 300 a day against a 500-unit bill. They are two different constraints, not amounts to add together. Illustrative rules; recovery timing is unknown by design.`,
      items: [
        { label: 'Money recorded', detail: '900 units exist; phone-based access is interrupted.' },
        { label: 'After access returns', detail: '300/day limit; a 500-unit bill exceeds this route by 200.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'The fictional account rules above'],
      steps: [
        `Draw three boxes in a row: identify yourself, reach the account, make the payment. Drawing the stages separately is what turns a balance into a route you can inspect.`,
        `Mark every box that depends on the missing phone and write recovery timing unknown beside the first one. Writing unknown is more useful than a guess, because it is a question you can take to the provider's instructions.`,
        `Add the 300-unit daily limit to the payment box and set it against the 500-unit bill, writing the 200-unit shortfall on its own line. This is the letterbox, and it is a separate problem from the key.`,
        `Write one question about an authorised alternative route, such as a branch or a different payment type, that you would check in the provider's official instructions. Do not trigger any recovery, log out of anything, or move any money.`,
      ],
      notice: `Your map shows two gaps that need two different fixes: access of unknown duration, and a 200-unit shortfall on the documented route once access returns. Before the exercise, both were hidden inside a reassuring 900.`,
      troubleshooting: `If the backup route you thought of also needs a code from the lost phone, it is the same key on the same keyring; mark it as a shared dependency rather than counting it as a second route. If you are tempted to test the recovery process for real, stop; the rehearsal is reading, not breaking.`,
    },
    recall: {
      prompt: 'Two account apps both require codes from the same missing phone. Does having two apps solve the access problem?',
      hint: 'Trace the device needed to authorise each route.',
      answer: `No. Two apps look like two doors, but if both locks take codes from the same lost phone, they are two doors with one key, and the key is what is missing. Trace each route through its three stages and mark the authorising device at each one; when both maps point at the same phone, you have one dependency drawn twice, not a backup. The useful next step is to read each provider's verified recovery instructions and find out what they accept instead of that device, how long it takes, and whether a second device can be registered in advance. Do all of that without weakening security to make it easier, and never read a code out to anyone who asks for one, however helpful they sound.`,
    },
    quiz: {
      question: 'What would prove the sample 500-unit payment is possible today?',
      options: ['The 900-unit balance alone', 'Verified access and an authorised route supporting that amount and timing', 'Two transfers through a 300-unit daily-total limit'],
      correctIndex: 1,
      explanation: `You need the key and a letterbox wide enough: access that has actually been restored, plus a route the provider authorises for 500 units today. The balance alone proves only that the money exists, not that you can reach it. And two transfers through a 300-unit daily total do not add up to 600, because the slot counts everything that passes through it in the day; a daily total limit is not reset by splitting a payment.`,
    },
    takeaway: `A balance is money in a strongbox, and getting it out needs both the key and a letterbox wide enough, so map the route from balance to payment, identify yourself, reach the account, make the payment, mark every stage that runs through one device, treat a daily transfer limit as a total that splitting cannot beat, and rehearse by reading the provider's verified instructions in advance, never by logging out, switching off security, or sharing a code.`,
    sourceNote: 'Inherited CFPB emergency and NCSC security sources provide background. Limits are fictional; this rehearsal does not test recovery or guarantee availability.',
  },
  {
    id: 'money-021',
    outcome: `Split one covered loss into the insurer's share and the deductible you keep, add the premium as a separate cost of the year, and explain why a claim below the deductible pays zero, not a minus figure.`,
    scene: 'A household compares its annual coverage payment with its share of one damaged-item claim.',
    sections: [
      {
        title: 'Two payments answer different questions',
        paragraphs: [
          `A fictional property policy costs 60 units for a year of cover. Months later a pipe fails and a covered loss is valued at 900 units. The policy has a fixed 200-unit deductible for this kind of claim. The household feels, reasonably, that it has already paid for this: the 60 went out in January. So why is there a 200 to find now?`,
          `Because the two payments buy different things. The 60 is the premium, the price of being covered for the year, and it would have been paid whether or not a pipe ever failed. The 200 is the deductible, sometimes called an excess, the portion of any covered loss the policyholder bears under the rules of the policy. One is the cost of having cover. The other is your share of the cost when cover is used. Paying the premium does not cancel the deductible; it is what makes the insurer's share of the 900 exist at all.`,
        ],
      },
      {
        title: 'The breakdown membership and the first mile',
        paragraphs: [
          `Think of a roadside breakdown service. You pay a yearly membership so that when the car dies on a wet night, someone comes. The membership does not pay for the whole repair: under this imaginary scheme the first 200 of any garage bill is yours, and the service covers the rest. Nobody is being cheated. The yearly fee bought the right to call, and the first 200 is the agreed slice you keep on every callout. If the bill is 900, they pay 700. If the bill is 150, they pay nothing, because the whole bill sits inside the slice that was always yours.`,
          `The insurance works the same way, and the arithmetic is one subtraction once you keep the pieces apart. Assume the entire 900 qualifies, no limit cuts it, and nothing else adjusts it. Insurer pays 900 minus 200, which is 700. Household bears 200. Those two parts add back to 900, which is the check that the loss has been split rather than shrunk or doubled. The premium is a different line: the household's cost across this one-claim year is 60 for cover plus 200 of the loss, 260 in total. Two things not to do: do not subtract the premium from the claim as if it were a second deductible, and do not count the insurer's 700 as money the household paid.`,
        ],
      },
      {
        title: 'Split the covered loss',
        paragraphs: [
          `Run the small claim. A covered loss of 150 meets the same fixed 200 deductible. The deductible is a slice you keep, not a bill you owe, so the household bears the whole 150 and the insurer pays zero. The household's share is not 200, because you cannot lose more than the loss, and the insurer's payment is not minus 50. Cap the retained share at the actual loss. With the premium, that year cost 60 plus 150, or 210.`,
          `Set it out as a worksheet with the premium on its own line at the top and the claim split beneath: loss, deductible retained, insurer payment. Then a total for the year that adds premium and retained loss only. The layout is the whole technique, because almost every mistake in this topic comes from putting the premium into the claim arithmetic where it does not belong.`,
        ],
      },
      {
        title: 'Read how the deductible applies',
        paragraphs: [
          `The fixed 200 is a teaching simplification. Real policies can apply a deductible per claim, per policy period, or as a percentage of a stated base, and that base is not always the claim amount; a percentage deductible without its denominator is unusable. Other sharing rules can sit alongside it. And before any subtraction, the event has to qualify under the policy's wording. A tidy 900 minus 200 proves nothing about whether this pipe, in this property, under this policy, is covered at all, and it says nothing about a different kind of insurance.`,
          `Two habits. Keep the premium on its own line and never let it touch the claim arithmetic. And for any claim, write the loss, the deductible as defined in the wording, and the insurer's share as three numbers that add up, capping your share at the loss itself.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Who bears the 900-unit loss?', unit: 'units',
      alt: 'The insurer pays 700 units and the policyholder bears 200 of the covered loss.',
      caption: `Look at the two bars as one bill split in two, the garage bill after the breakdown service has paid: 700 from the insurer, 200 kept by the household, adding back to 900. Then notice what is not here: the 60-unit premium is a different payment for a different thing and is deliberately left off. Illustrative covered claim with no other adjustments.`,
      items: [
        { label: 'Insurer portion', detail: '900 less 200 = 700.', value: 700 },
        { label: 'Policyholder portion', detail: 'Fixed deductible of 200.', value: 200 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        `Write the annual premium of 60 on its own line at the top of the page, then draw a separate box underneath for the 900-unit covered loss. The physical gap between them is the point.`,
        `Inside the box, split the loss: 200 retained by the household, 700 paid by the insurer, and check that the two add back to 900. If they do not, the loss has been shrunk or counted twice.`,
        `Add the premium to the retained loss, 60 plus 200, to find the household's cost for this one-claim year: 260. Notice that the insurer's 700 never enters this sum.`,
        `Repeat with a 150-unit covered loss and the same 200 deductible. The insurer pays zero, the household bears 150, and the year costs 60 plus 150, or 210. The slice you keep cannot be bigger than the bill.`,
      ],
      notice: `The premium stayed on its own line in both runs, and the small claim produced a zero payout rather than a negative one. You can now explain why January's 60 did not make the 200 disappear.`,
      troubleshooting: `If the small claim shows a 200-unit household share, cap it at the actual 150 loss; the deductible is the most you keep, not a fixed charge. If your insurer payment came out at 640, you subtracted the premium from the claim, which is the first mile being charged twice.`,
    },
    recall: {
      prompt: 'A covered 1,200-unit loss has a fixed 300 deductible and an 80 annual premium. With no other adjustments, what are the two costs?',
      hint: 'Separate insurer payment from the household’s annual outlay.',
      answer: `The insurer pays 900 and the household's outlay for the year is 380. Split the garage bill first: 1,200 minus the 300 slice the household keeps leaves 900 for the insurer, and 300 plus 900 adds back to 1,200. Then, on a separate line, the premium: the household paid 80 for the year's cover and bears 300 of the loss, so its total cost for this one-claim year is 380. The 80 does not reduce the claim, and the insurer's 900 is not something the household paid. This assumes the whole 1,200 qualifies, that no limit cuts it, and that the deductible is a fixed amount per claim as stated.`,
    },
    quiz: {
      question: 'For the sample 900-unit covered loss, which calculation gives the insurer payment?',
      options: ['900 minus 200 minus 60', '900 minus 60', '900 minus 200'],
      correctIndex: 2,
      explanation: `The deductible is the slice of the bill the household keeps, so the insurer's share is 900 minus 200, which is 700. The premium is the membership fee, paid in January for the year's cover; subtracting it from the claim, either on its own or alongside the deductible, charges the household twice for something that was never part of the loss.`,
    },
    takeaway: `A premium is the breakdown membership and a deductible is the first part of every repair you keep, so write them on separate lines: for a 900-unit covered loss with a 200 deductible the insurer pays 700, the household bears 200, and the 60 premium is added to the year's cost, 260, never subtracted from the claim; a 150 loss pays nothing rather than less than nothing, and none of the arithmetic says the event was covered in the first place.`,
    sourceNote: 'The inherited NAIC glossary was checked for premium and deductible terminology. This simplified property example does not generalise policy or jurisdiction rules.',
  },
  {
    id: 'money-022',
    outcome: `Describe exactly what happened to a lost item before reaching for the policy, then test that event against the wording's definitions, exclusions, conditions, and amendments, not the product's name.`,
    scene: 'A 600-unit device disappears in two different travel situations.',
    sections: [
      {
        title: 'Name what happened before naming coverage',
        paragraphs: [
          `Somewhere on a journey, a device worth an illustrative 600 units is no longer with you. The policy in your drawer is sold as device protection, and the name is reassuring: a device, protected. You start composing the claim in your head around the number 600. But gone is not yet an event. Was it taken from a locked locker? Left on the seat of a train? Dropped, cracked, and thrown away? A policy can treat each of those as a different thing, and the brochure's name does not say which.`,
          `Three words in the wording do the real work. A definition says what counts as a covered event. An exclusion removes a stated circumstance from cover that would otherwise apply. A condition is something you must have done or be able to show, such as proof of ownership or a report of the incident. The product name resolves none of these, and the device's price settles nothing either; 600 is what you paid, not what any clause promises.`,
        ],
      },
      {
        title: 'Access all areas, read the back of the ticket',
        paragraphs: [
          `A festival wristband says Access All Areas in big letters on the front. On the back, in small print, it lists the zones it actually opens, says backstage is not included, and notes that it must be worn on the wrist and not carried in a pocket. The front is the brand. The back is the contract. Someone turned away from backstage has not been cheated by the wristband; they have been reading the front.`,
          `A policy is the wristband. Device protection is the front. The back has three kinds of line: the zones it opens, which are the definitions of covered events; the zones it does not, which are the exclusions; and the wearing rules, which are the conditions. For this exercise only, invent a back-of-ticket: theft from a locked locker is covered, items left behind are excluded, and any claim needs ownership records plus evidence of the reported event. Now the two journeys separate. A device stolen from a locked locker has a route to a coverage assessment, provided the records and evidence conditions can be met. The same device forgotten on a train sits squarely inside the left-behind exclusion. Both are a loss in ordinary speech. Only one is an event the sample wording opens. And even the first is not a promise of 600: valuation, limits, and deductibles are separate questions that come after eligibility, not instead of it.`,
        ],
      },
      {
        title: 'Apply an invented set of terms',
        paragraphs: [
          `Set the two journeys out in rows, each described as what physically happened rather than as a claim category. Beside them, copy the sample covered event, the exclusion, and the evidence condition as three separate rows of their own. Then match: locker theft against covered event, yes; against exclusion, no; against conditions, depends on the records you hold. Train against covered event, no; against exclusion, yes, and the matching stops there.`,
          `In both rows, write payout still undetermined. For the train case, because the event is excluded. For the locker case, because eligibility is only the first gate, and the amount depends on wording you have not yet applied. The discipline of writing undetermined is what stops 600 from drifting onto the page as if it were a result.`,
        ],
      },
      {
        title: 'Keep uncertainty visible',
        paragraphs: [
          `Read the full relevant wording, including any amendments, which change the original contract and can add or remove zones from the back of the ticket. If what happened is genuinely unclear, write down the facts you have and nothing more. Do not improve the story into a theft, or invent a receipt, so that it fits a covered row. Then ask the provider in writing, describing the particular circumstances and naming the clause you cannot resolve. A brochure summary is for finding the headings; it does not decide a disputed claim. This method sharpens the question you ask. It does not decide a real claim, override local rules, or let you treat an unanswered question as confirmation of cover.`,
          `Two habits. Before opening a policy, write one plain sentence saying what physically happened to the item. And read the back of the ticket in three passes, definitions, exclusions, conditions, before letting the front tell you what is covered.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Same device, different event',
      alt: 'A stolen 600-unit device and a device left on a train follow different sample policy terms.',
      caption: `Notice first that both rows carry the same 600-unit device and the same product name, and that neither of those decides anything. The difference is in the event: theft from a locked locker matches a covered zone on the back of the ticket, while left on the train matches an exclusion. Illustrative wording only; even the covered row is not yet a payment.`,
      items: [
        { label: 'Theft from locked locker', detail: '600-unit device; assess stated cover and evidence conditions.' },
        { label: 'Left on the train', detail: 'Same 600-unit device; sample left-behind exclusion applies.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'The invented terms above'],
      steps: [
        `Write the two travel events as plain descriptions of what physically happened, without using the words loss, claim, or covered. Describing the event before the category is the step that most claims skip.`,
        `Copy the sample covered event, the sample exclusion, and the sample evidence condition into three separate rows. Keeping them apart mirrors the three passes you would make through a real wording.`,
        `Match each event against the three rows and, in both cases, write payout amount still undetermined. One is undetermined because it is excluded; the other because eligibility is only the first gate.`,
        `Draft a written question to the provider about one missing fact, such as exactly what evidence of the locker theft they require. A precise question is the useful output of this exercise.`,
      ],
      notice: `Your page separates three things that a brochure blurs together: whether the event is one the wording opens, whether the conditions can be met, and how much, if anything, would be paid. The 600 appears nowhere as an answer.`,
      troubleshooting: `If both of your event rows simply say device loss, you have described the category rather than the event; add the circumstances the sample clauses actually distinguish, where it was and how it went. If you find yourself adjusting the train story toward theft, stop and write only what you know.`,
    },
    recall: {
      prompt: 'A borrowed camera is damaged, but the policy covers only items owned by the insured person. What needs checking?',
      hint: 'An item definition can matter before the damage calculation.',
      answer: `Whether the camera is inside the definition at all. This is a back-of-the-ticket question that comes before damage: the sample wording opens cover for items owned by the insured person, and a borrowed camera may fall outside that definition no matter how clearly it was damaged. So check the ownership definition word by word, then check any amendment or extension that adds borrowed or entrusted items, because amendments change the zones the ticket opens. Only if the camera passes that gate do the damage event, the evidence conditions, and the amount come into play. Accidental damage being obvious is the front of the wristband; whose camera it was is the small print that decides.`,
    },
    quiz: {
      question: 'Which fact best distinguishes the two sample device cases?',
      options: ['The circumstances specified by the clauses', 'The shared 600-unit device value', 'The shared device-protection label'],
      correctIndex: 0,
      explanation: `The back of the ticket separates them: the invented wording covers theft from a locked locker and excludes items left behind, so the circumstances are what put one case inside a covered zone and the other outside it. The 600-unit value is identical in both and decides nothing about eligibility, and the device-protection label is the front of the wristband, which never settles a claim.`,
    },
    takeaway: `A policy name is the front of a festival wristband, so write one plain sentence about what physically happened to the item, then read the back in three passes, definitions, exclusions, conditions, plus any amendments: a device stolen from a locked locker and the same device left on a train are the same 600 units and different events under the sample wording, neither is a payment yet, and a precise written question beats a story improved to fit.`,
    sourceNote: 'The inherited NAIC glossary provides insurance terminology. All event terms here are invented and do not determine coverage under an actual policy.',
  },
  {
    id: 'money-023',
    outcome: `Keep three different numbers apart when estimating a claim: how the loss is valued, the ceiling that caps it, and the deductible taken after, and apply them in the order the wording states.`,
    scene: 'A damaged camera has a replacement price above its policy’s item sublimit.',
    sections: [
      {
        title: 'A ceiling does not value the item',
        paragraphs: [
          `The camera is in pieces at the bottom of a rucksack, and a new one would cost 800 units. The fictional belongings policy advertises an overall limit of 2,000. That number is the one printed largest, and it is the one the mind grabs: 2,000 is more than 800, so the camera is covered. Then the schedule turns out to have a 600-unit sublimit for cameras, and the 800 begins to feel negotiable.`,
          `Three numbers are jostling here and they are different kinds of thing. A limit is a ceiling: the most the policy will pay under the stated cover, not an amount it promises. A sublimit is a lower ceiling for one category or item, here cameras at 600. Neither of them says what the camera is worth. That is the third number, the valuation, and before either ceiling means anything you need to know how the wording values a loss. An old item's original receipt, today's replacement price, and its value after an allowance for wear can be three quite different figures.`,
        ],
      },
      {
        title: 'The expense claim with a meal cap',
        paragraphs: [
          `Think of an expense claim at work. The travel policy allows up to 2,000 per trip. Meals are capped at 600. You hand in a restaurant receipt for 800, and the first 100 of every claim is your own contribution under this imaginary scheme. Nobody pays you 2,000; that is the ceiling on the whole trip. Nobody pays you 800 either, because the meal cap comes first. The meal line is capped at 600, your 100 contribution comes off, and 500 is reimbursed. The receipt said what you spent. The caps said what the policy would recognise. The contribution came last.`,
          `The camera claim has the same three layers, and here is the rule used for this exercise only: value the loss, cap it at the sublimit, then subtract the deductible. Take two invented valuations. In the first, the covered loss is valued at replacement cost, 800. Cap at 600, subtract a 100 deductible, and the payment is 500. In the second, the wording values the loss after depreciation, meaning a reduction for age and wear, at 480. That is already below the 600 cap, so the cap does nothing; subtract 100 and the payment is 380. Same camera, same policy, same ceilings, and a 120-unit difference that came entirely from how the loss was valued. The 2,000 headline never touched either calculation; it is the limit on the whole trip, not the price of the dinner.`,
        ],
      },
      {
        title: 'Run two valuation methods through one rule',
        paragraphs: [
          `Lay it out as two columns under one set of rules. Across the top: overall limit 2,000, camera sublimit 600, deductible 100. Column one: valued at 800, capped to 600, less 100, pays 500. Column two: valued at 480, cap not reached, less 100, pays 380. The columns make visible that the cap binds in one case and is idle in the other, and that the deductible is applied last in both.`,
          `Now change the numbers to see when valuation stops mattering. Two valuations of 1,200 and 700, both capped at 500, both less a 100 deductible, both pay 400. When both valuations sit above the same binding ceiling, the ceiling decides and the difference between them disappears. That is not a trick; it is what a ceiling is.`,
        ],
      },
      {
        title: 'Order and evidence belong in the calculation',
        paragraphs: [
          `The order used here, cap first and then deductible, is an example rule chosen so the arithmetic is clear. It is not a universal settlement formula. Real wording decides how limits and deductibles interact, what evidence supports a valuation, whether repair rather than replacement is the proper basis, and whether replacement-cost cover has conditions about when the money is actually spent. A useful worksheet therefore has rows for covered event, valuation and its evidence, applicable limits, deductible, and unresolved conditions, with a note beside each number saying where it came from. What it must not do is import the purchase price as an assumed payout. And no worksheet, however tidy, establishes a real entitlement.`,
          `Two habits. Before estimating any claim, write the valuation basis the wording actually uses, and only then bring in the ceilings and the deductible. And treat the biggest number on the page, the overall limit, as the one least likely to be the answer.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'One sublimit, two valuations',
      alt: 'An 800-unit replacement valuation pays 500; a 480-unit depreciated valuation pays 380 under sample rules.',
      caption: `Read each row left to right as the expense claim: the valuation is the receipt, the 600 cap is the meal limit, and the 100 comes off last. Notice that the cap bites in the top row and is idle in the bottom one, and that the 2,000 overall limit appears in neither. Illustrative order; real policies can sequence these differently.`,
      items: [
        { label: 'Replacement valuation', detail: '800 valued; capped at 600; less 100 = 500 units.' },
        { label: 'Depreciated valuation', detail: '480 valued; below 600 cap; less 100 = 380 units.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        `Write the overall limit of 2,000, the camera sublimit of 600, and the deductible of 100 on three separate lines, each labelled with what kind of number it is. Naming the kind is what stops the 2,000 from being treated as a payment.`,
        `Make two columns headed by the stated valuations, 800 at replacement cost and 480 after depreciation. These are the receipts; everything else is a rule applied to them.`,
        `In each column apply the sample rule in order: cap at 600 first, then subtract the 100 deductible. Write beside the second column that the cap did not bind, so you can see the difference between a ceiling that acts and one that does not.`,
        `Label the results, 500 and 380, as illustrative payments under this exercise's order, and list the questions a real policy would still need answered: what evidence supports the valuation, and what sequence the wording actually uses.`,
      ],
      notice: `The same advertised policy produced two different figures, 500 and 380, and the difference came from the valuation method rather than from any limit. The 2,000 never entered either column, which is the correct place for it.`,
      troubleshooting: `If both of your columns show 1,900, you subtracted the deductible from the overall limit; replace that with the valued loss and the camera cap. If the replacement column shows 700, you skipped the sublimit and took 100 straight off 800, which is reimbursing the dinner above the meal cap.`,
    },
    recall: {
      prompt: 'Two covered valuations are 1,200 and 700, both capped at 500 before a 100 deductible. Why do both pay 400?',
      hint: 'Both valuations exceed the same binding ceiling.',
      answer: `Because both receipts are bigger than the meal cap, and the cap is what the policy recognises. A ceiling of 500 reduces 1,200 to 500 and reduces 700 to 500; once that has happened the two valuations are indistinguishable, and the stated 100 deductible leaves 400 in each case. The difference between the valuations, 500 units, was real but entirely above the line the policy would ever pay to. Valuation matters when it lands below the ceiling, as 480 did against 600 in the lesson; above it, the ceiling decides. This assumes the exercise's order, cap then deductible, and that both losses are covered events.`,
    },
    quiz: {
      question: 'What explains the sample replacement payment of 500 rather than 700?',
      options: ['The overall limit is 2,000', 'The 600 sublimit applies before the 100 deductible', 'Depreciation is always 300'],
      correctIndex: 1,
      explanation: `The 800 receipt meets the 600 meal cap first, and only then does the 100 come off, giving 500; taking 100 straight from 800 to get 700 ignores the sublimit entirely. The 2,000 overall limit is the ceiling on the whole trip and plays no part in this line. And the example applies no depreciation to the replacement case at all, so a fixed 300 reduction is invented.`,
    },
    takeaway: `A claim is an expense form with three different kinds of number, the receipt, the caps, and your own contribution, so write the valuation basis first, then apply the item sublimit, then the deductible, in whatever order the wording actually states: here 800 capped to 600 less 100 pays 500, 480 under the cap less 100 pays 380, and the 2,000 headline, the biggest number on the page, is the one least likely ever to be the answer.`,
    sourceNote: 'The inherited NAIC glossary was checked for limits, actual cash value, and replacement cost. Values and settlement sequencing here are hypothetical.',
  },
  {
    id: 'money-024',
    outcome: `Compare two insurance quotes by lining up their cover term for term, then working out what the household pays in a no-claim year and in a one-claim year, instead of ranking them by premium alone.`,
    scene: 'Two fictional annual policies trade a lower premium for a larger deductible.',
    sections: [
      {
        title: 'The cheaper price buys different terms',
        paragraphs: [
          `Two fictional annual property quotes arrive on the same afternoon. They cover the same events, people, locations, and dates, use the same valuation method, and carry the same 1,000-unit limit. Quote A costs 60 a year with a 200-unit deductible. Quote B costs 40 a year with a 400-unit deductible. B is cheaper by 20, and 20 is a real saving, and the comparison tends to end right there.`,
          `It should not, because these are not the same product at two prices. B has sold you the lower premium by asking you to keep a bigger slice of any loss. The 20 you save every year is paired with an extra 200 you would bear in any year with a claim. Before you look at the headline price, the two quotes need to be set out in matching rows, term beside term, so that the one difference that actually exists, the deductible, is visible next to the one difference you noticed, the premium. If either quote leaves a covered event or a condition unspecified, that row says unknown, not the same.`,
        ],
      },
      {
        title: 'Two phone tariffs',
        paragraphs: [
          `Think of two mobile tariffs. One has a lower monthly fee but charges more per call. The other costs more each month and makes calls cheap. In a month when you barely use the phone, the cheap tariff wins. In a month with one long call, it loses, and the gap can be bigger than a year of the monthly saving. Neither tariff is cheaper in general. Each is cheaper in some months, and which months you will have is the thing you do not know.`,
          `Insurance quotes with different deductibles are the same shape. The premium is the monthly fee; the deductible is the per-call charge, paid only when a claim happens. So you run the two kinds of month. A no-claim year: the household pays 60 under A or 40 under B, and B wins by 20. A year with one fully covered 900-unit loss and no other adjustments: A pays 700 of the loss and the household bears its 200 deductible plus the 60 premium, 260 in all. B pays 500, and the household bears 400 plus 40, which is 440. B wins the quiet year by 20 and loses the claim year by 180. The arithmetic is exact and it says nothing at all about how likely either year is, or which policy suits a real household. It only turns the premium saving into something you can set against what it costs when the long call comes.`,
        ],
      },
      {
        title: 'Compare a no-claim year and one covered loss',
        paragraphs: [
          `Build it as four small sums. A, no claim: 60. B, no claim: 40. A, one 900-unit covered loss: premium 60 plus retained 200 equals 260. B, same loss: premium 40 plus retained 400 equals 440. Each figure is premium plus the slice of loss the household keeps, and nothing else. The insurer's payments, 700 and 500, do not belong in these totals; they are what the household did not pay.`,
          `The four numbers answer a different question from the one the headline asked. The headline asked which quote is cheaper. The four numbers answer: cheaper when, and by how much. That is the only honest form of the comparison, and it leaves the judgement about likelihood and affordability where it belongs, with the person buying.`,
        ],
      },
      {
        title: 'A worksheet can expose unknowns',
        paragraphs: [
          `A real comparison needs more rows than this example: covered events, exclusions, the policy period, who and where is insured, the valuation basis, limits, and deductibles. A quote for six months cannot be set against an annual premium without first establishing the cost of the other six months. Anything one quote does not state is unknown, not included. And keep two different abilities apart: the ability to pay a premium now, which B makes easier, and the ability to find a 400-unit deductible on the day something breaks, which B makes harder. Neither the quiet-year result nor the one-claim result settles that tradeoff on its own. The worksheet is a way to ask the provider sharp questions; it is not a verdict that one policy is better, and the actual contract and local rules decide what is covered.`,
          `Two habits. Before comparing premiums, line the quotes up term for term and write unknown in every row a quote does not fill. And always run both years, the quiet one and the claim one, as premium plus retained loss, so the saving and its price sit on the same page.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Household outlay in two sample years', unit: 'units per year',
      alt: 'No-claim outlays are A 60 and B 40; with one covered 900 loss they are A 260 and B 440.',
      caption: `Compare the two short bars first and then the two tall ones: B is the cheaper tariff in the quiet year by 20, and the dearer one in the claim year by 180. Every bar is premium plus the loss the household keeps, with the insurer's share left out. Illustrative matching cover; the chart assigns no likelihood to either year.`,
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
        `Draw matching rows for dates, covered events, valuation basis, limits, deductible, and premium, with a column for each quote. The rows are what turn two headline prices into two products you can actually compare.`,
        `Fill in the two sample quotes and mark every row where the terms are identical, so the deductible row stands out as the only real difference beside the premium.`,
        `Calculate the household outlay for a quiet year and for a year with one fully covered 900-unit loss, each as premium plus retained loss: 60 and 40, then 260 and 440. Running both years is the phone-tariff test.`,
        `Write one question a real quote would leave open, such as whether accidental damage away from home is included, and put unknown in that row rather than assuming it is the same for both.`,
      ],
      notice: `The lower premium produced the lower outlay in one scenario and the higher outlay in the other, by 20 and 180 respectively. The saving and its price are now on the same page, which is where the decision has to be made.`,
      troubleshooting: `If one of your claim-year totals is 760 or 540, you added the insurer's payment to the premium; replace it with the deductible, the part the household bears. If every row says the same, check whether you assumed it or the quotes actually stated it.`,
    },
    recall: {
      prompt: 'One quote costs 30 for six months and another 50 for a year. What must be established before calling the first cheaper?',
      hint: 'Period and coverage must match, including renewal terms.',
      answer: `Two things: that the cover is actually the same term for term, and what the second six months would cost. Thirty for half a year is not yet a price for a year. Doubling it to 60 assumes the renewal is offered at the same price, which a quote does not promise; it could be more, less, or not offered at all. So the honest comparison has a row for period that currently reads six months against twelve, a row for renewal cost that reads unknown, and all the usual rows for covered events, exclusions, valuation, limits, and deductibles. Until those are filled, the first quote is cheaper for half a year with the same cover, if it has the same cover, and nothing more can be said.`,
    },
    quiz: {
      question: 'What does quote B’s smaller premium establish by itself?',
      options: ['Lower cost for every covered loss', 'More complete coverage', 'Lower stated cost for this coverage period before claims'],
      correctIndex: 2,
      explanation: `The premium is the monthly fee of the tariff, so on its own it establishes only that B costs less for this period before any claim is made. It says nothing about the claim year, where B's 400 deductible makes it 180 dearer in the example, and nothing about the breadth of cover, which has to be checked row by row rather than inferred from price.`,
    },
    takeaway: `Two quotes with different deductibles are two phone tariffs, so line them up term for term, write unknown wherever a quote is silent, then run both kinds of year as premium plus retained loss: B saves 20 in a quiet year and costs 180 more in a year with one 900-unit loss, and the arithmetic says nothing about which year you will have, only what the cheaper premium is actually buying and what it costs when the long call comes.`,
    sourceNote: 'The inherited NAIC glossary supplies terminology. These original scenarios assign no claim probabilities and do not recommend an insurance product.',
  },
  {
    id: 'money-025',
    outcome: `Build a small private ownership record for a valuable item, keep a protected copy somewhere the item's loss cannot reach, and check you can retrieve it without ever simulating the loss.`,
    scene: 'A camera receipt exists only on the laptop that also stores the owner’s inventory.',
    sections: [
      {
        title: 'The missing item can take its evidence with it',
        paragraphs: [
          `You buy a fictional camera for 600 units. The shop emails the receipt, you save it to the laptop, and the laptop lives in the same bag as the camera because that is where laptops live. It is a tidy arrangement right up to the moment the bag is gone, from a train rack or a cafe floor. Then the camera is missing and so is the only proof you ever owned it, and they left together.`,
          `A claim is a request for payment under a contract, not a transfer that happens by itself. The provider can reasonably ask three things: did you own it, what was it worth, and what happened. Each of those is far easier to answer from a record made while the camera was sitting on the table than from memory a week after it vanished. Making that record is preparation, not a guarantee. It does nothing to establish that the event is covered; it only means that if it is, you are not reconstructing a purchase from a bank statement and a guess.`,
        ],
      },
      {
        title: 'The spare key taped under the car',
        paragraphs: [
          `Some people keep a spare car key in a magnetic box under the bumper. It is a sensible backup against locking yourself out, and useless against the one event that costs the most, because if the car is stolen the spare key goes with it. A backup only counts when it is stored somewhere the failure cannot reach. The spare key belongs in a kitchen drawer at home, not on the vehicle it unlocks.`,
          `The receipt on the laptop in the camera bag is the key under the bumper. Two copies on that same laptop are two keys in the same magnetic box. The fix is the kitchen drawer: a protected copy of the ownership record somewhere separate from the belongings it describes, reachable by a route that does not depend on the missing device. What goes in the record is facts, not hopes. The item, the model, the purchase date, where the receipt is, any identifying number, and the price actually paid. In this sample that price is 600, and if a like-for-like replacement later costs 720, neither figure is a payout. The policy's valuation method, limits, deductible, and evidence rules decide that, afterward. Keep the original receipt where you can, and when a figure is an estimate, write estimate beside it rather than tidying it into a fact. A photograph helps identify an item; a photograph alone does not prove you owned it, what condition it was in, or what happened to it later.`,
        ],
      },
      {
        title: 'Record facts rather than a promised payout',
        paragraphs: [
          `Build the record as a small card. Item: camera. Model: Example C. Purchased: today's date. Paid: 600 units, receipt attached. Identifying number: recorded from the item. Where this card's protected copy lives: somewhere that is not the camera bag and not the laptop that travels with it. The last line is the one most people leave out, and it is the whole point.`,
          `Then test the route, calmly. Testing means going to the separate location by the method you would really use and finding a harmless sample copy. It does not mean hiding your own bag to see how you feel, wiping a device, or typing real serial numbers and credentials into an app to see if they save. The retrieval check is a walk to the kitchen drawer, not a staged theft.`,
        ],
      },
      {
        title: 'Protect the record and test retrieval',
        paragraphs: [
          `Where the copy lives involves a tradeoff you should choose on purpose. A protected folder in a backup you already run, a securely stored paper copy, or a private account each has different access and privacy properties; use the method you already trust rather than inventing a new one for this. Never post serial numbers, receipts, or a home inventory anywhere public, because the same details that prove ownership to an insurer are useful to a thief. And read the real policy's notification and evidence requirements before you need them, since deadlines and acceptable proof are not universal. This exercise prepares documentation. It cannot make a provider accept evidence or make a loss covered.`,
          `Two habits. The day you buy anything you would want to claim for, write a short record of it and put the copy somewhere the item's loss cannot reach. And once in a while, retrieve the sample copy by its intended route, so the route is proven before it is needed.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'Keep the evidence separate',
      alt: 'A 600-unit receipt is recorded, copied separately, and later used to support a claim assessment.',
      caption: `Look at the middle step first: the protected copy that lives outside the camera bag is the spare key in the kitchen drawer, and it is the step that makes the third one possible. Then notice that the 720 replacement price at the end is evidence to be assessed, not an amount promised. Illustrative preparation sequence.`,
      items: [
        { label: 'Purchase', detail: 'Receipt records 600 units and the camera model.' },
        { label: 'Protected separate copy', detail: 'Ownership record is not only in the camera bag.' },
        { label: 'If a loss occurs', detail: 'Provide accurate evidence; 720 replacement estimate still needs assessment.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'A private place for a harmless sample record'],
      steps: [
        `Write a fictional inventory card: sample camera, model Example C, purchased today, 600-unit receipt. Keep it fictional throughout; the point is to practise the shape of the record, not to expose a real one.`,
        `Decide where the protected copy of that card would live, and check it is separate from both the camera and the laptop that travels with it. If the honest answer is the same bag, that is the key under the bumper.`,
        `Go and find the sample copy by the route you would really use, without entering any real serial numbers or credentials anywhere. A retrieval check is a walk to the drawer, not a staged loss.`,
        `Add two questions you would need answered for an actual policy: how soon a loss must be reported, and what evidence of ownership and value the provider accepts.`,
      ],
      notice: `You can say exactly where the sample record is and reach it without the camera, the bag, or the travelling laptop being present. The item and its evidence no longer share a single point of failure.`,
      troubleshooting: `If both copies would travel in one bag, or sit on one device, you have two keys in the same magnetic box; choose a genuinely separate protected location. If the only separate copy is public, such as a photo posted online, it protects nothing and advertises the serial number; move it somewhere private.`,
    },
    recall: {
      prompt: 'A bicycle is stolen with a phone that held the only receipt photo. What preparation would have reduced the documentation problem?',
      hint: 'Think about a failure taking more than one object at once.',
      answer: `A protected copy of the receipt and the bicycle's identifying details stored somewhere the theft could not reach, with a route to it that does not run through the stolen phone. The phone in the bike bag was the spare key under the bumper: one event took the bicycle, the receipt photo, and the device used to view it, in a single moment. The record would have needed to live in a backup already in use, a private account reachable from another device, or a paper copy at home, kept out of public view. That preparation makes the ownership and value questions answerable. It does not decide whether the theft is a covered event, or what any policy would pay.`,
    },
    quiz: {
      question: 'Which sample record arrangement best survives loss of the entire camera bag?',
      options: ['Receipt only on the laptop in the bag', 'Protected copy accessible outside the bag', 'Two receipt copies on that same laptop'],
      correctIndex: 1,
      explanation: `The copy outside the bag is the spare key in the kitchen drawer: the one event that takes the camera cannot take it too. A receipt only on the laptop in the bag leaves with the camera, and two copies on that same laptop are two keys in the same magnetic box, sharing exactly the same failure. Separate and private is the combination that works.`,
    },
    takeaway: `A receipt kept on the laptop in the camera bag is the spare key taped under the car, so for anything you would want to claim for, write a short factual record, item, model, date, price paid, identifying number, keep a protected private copy somewhere the item's loss cannot reach, prove the route by fetching a harmless sample rather than staging a loss, and remember that good evidence answers the provider's questions without making any event covered.`,
    sourceNote: 'Inherited NAIC and NCSC backup sources support terminology and record separation. This original inventory exercise guarantees neither evidence acceptance nor a payout.',
  },
  {
    id: 'money-026',
    outcome: `Compare two purchases by adding the price at the till to the running costs over the same period and the same amount of use, and label what the total leaves out instead of treating it as zero.`,
    scene: 'Two fictional home printers have different purchase and refill prices.',
    sections: [
      {
        title: 'The checkout price is only the beginning',
        paragraphs: [
          `Two fictional printers sit on the shelf. One costs 80 units, the other 140. The cheaper one is in the basket before you have read the box, because 60 units is a real difference and it is the only difference the price tag shows. The tag answers one question: what does it cost to carry this home? It is silent on what it costs to keep using it.`,
          `Ask what each printer needs to do the same work. Suppose both will print about 1,000 pages a year. Printer A needs 60 units of ink a year to do that. Printer B needs 20. Now the cheap printer has an expensive habit. Ownership cost is the name for everything an item takes from you over a stated period: the purchase, plus refills, required accessories, delivery, any subscription, and repairs. The sticker is the first line of that list, not the total.`,
        ],
      },
      {
        title: 'The coffee machine and the pods',
        paragraphs: [
          `A pod coffee machine is often cheap, sometimes nearly given away. The pods are not. Somebody who drinks two cups a day pays for the machine many times over in pods within a year, and the brand that sold a cheap machine with dear pods knew exactly what it was doing. A dearer machine with cheap pods, or a machine that takes ordinary ground coffee, can cost far less to own, and you only see it by counting cups over a year.`,
          `The printer is the coffee machine and the ink is the pods. To compare fairly, freeze two things: the period and the workload. Take two years and 2,000 pages for both. Printer A: 80 to buy, plus two years of ink at 60, which is 80 plus 120, or 200 units. Printer B: 140 to buy, plus two years at 20, which is 140 plus 40, or 180 units. B costs 60 more at the till and 20 less to own over two years of this workload. That is a finding, not a verdict. Print half as much and the ink gap shrinks until A wins again. Change the refill yield, or add an accessory only one of them needs, and the numbers move. And the 140 has to be found on the day of purchase, which is a different question from which total is lower.`,
        ],
      },
      {
        title: 'Hold period and workload constant',
        paragraphs: [
          `Set it out in two columns with the assumptions written across the top: two years, 2,000 pages. Row one, purchase: 80 and 140. Rows two and three, ink for each year: 60 and 60 against 20 and 20. A total row: 200 and 180. Keeping each year of ink on its own row is what stops the common error of counting one year and calling it two.`,
          `Then add a row that most comparisons skip: the larger upfront payment, kept visible beside the lower total. The two-year total says B is cheaper to own. The purchase row says B needs 60 more now. Both are true, and the second can decide the matter for a household where 140 this month is not available.`,
        ],
      },
      {
        title: 'Do not hide missing costs in zeroes',
        paragraphs: [
          `The 200 and 180 leave out electricity, repairs, and any resale value, because the example supplied no figures for them. That does not make them zero; it makes them unknown, and an unknown written as zero makes a partial total look like a complete one. Call these figures partial known costs. For a real comparison, add estimates with their sources and leave open questions visible. A warranty can change who pays for a fault, and it does not prove that nothing will ever need fixing or that every repair is covered. Do not invent a long lifespan or a generous resale price to help your favourite win. And compare items that actually do the job you need, on the same basis, rather than a suitable option against an unsuitable bargain.`,
          `Two habits. Before buying anything that consumes refills or needs upkeep, write a two-column comparison with the period and the workload across the top. And add a row called not yet known, so the total can never pretend to be the whole price.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Two years, 2,000 pages', unit: 'units',
      alt: 'Printer A has 200 units of known purchase and ink costs; B has 180.',
      caption: `Look at which bar is shorter first, then read the detail to see why: the dearer machine with the cheaper pods wins over two years by 20 units, despite costing 60 more at the till. Illustrative partial totals for equal use; electricity, repairs, and resale are excluded because no figures were given, not assumed to be zero.`,
      items: [
        { label: 'Printer A', detail: '80 purchase + 2 x 60 ink = 200.', value: 200 },
        { label: 'Printer B', detail: '140 purchase + 2 x 20 ink = 180.', value: 180 },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        `Write two years and 2,000 pages across the top of a two-column comparison. These are the frozen assumptions, and writing them first stops either column from quietly using different ones.`,
        `Enter the purchase price and then each year of ink on its own row for both printers: 80 then 60 and 60; 140 then 20 and 20. One row per year is what makes the second year impossible to forget.`,
        `Total the columns to 200 and 180, then add a row labelled unknown for repairs and electricity. The row is the honest place for the costs you have no numbers for.`,
        `Label the totals partial known cost and keep the purchase row visible beside them, because the lower total and the larger upfront payment belong to the same printer.`,
      ],
      notice: `The cheaper sticker and the lower two-year total belong to different printers, and your page shows both facts at once along with the costs it does not know. That is a comparison rather than a price tag.`,
      troubleshooting: `If B totals 160, you counted one year of ink instead of two; one row per year prevents this. If your unknown row is blank, write the word unknown in it rather than leaving it to read as nothing.`,
    },
    recall: {
      prompt: 'A device costs 50 plus ten required refills at 8 each. Another costs 90 plus ten refills at 3. What are their known totals?',
      hint: 'Use the same refill count and exclude nothing silently.',
      answer: `130 and 120 units. The cheap machine with the dear pods: 50 to buy plus ten refills at 8, which is 80, for 130. The dear machine with the cheap pods: 90 plus ten at 3, which is 30, for 120. Over ten refills the dearer device is 10 units cheaper to own, while needing 40 more at the till. Both totals are partial: they include nothing for repairs, power, or anything else that was not given, and they assume both devices actually do the job and that ten refills is the real usage. Change the refill count to five and the cheap machine wins, 90 against 105, which is why the workload goes at the top of the page.`,
    },
    quiz: {
      question: 'What does the 180-unit printer figure represent?',
      options: ['Its purchase price alone', 'Its guaranteed lifetime cost', 'Its stated two-year purchase-and-ink cost'],
      correctIndex: 2,
      explanation: `It is the machine plus two years of pods under the stated assumptions: 140 to buy and 40 of ink for 2,000 pages. The purchase price alone is 140. And it is nowhere near a lifetime cost, because electricity, repairs, and resale were left out for lack of figures, which makes it a partial known cost rather than a guarantee of anything.`,
    },
    takeaway: `A cheap printer with dear ink is a pod machine with dear pods, so compare the till price plus the running costs over the same period and the same workload, 80 plus 120 against 140 plus 40 over two years and 2,000 pages, keep the bigger upfront payment visible beside the lower total, and write unknown for repairs and electricity rather than letting a partial figure pose as the whole price.`,
    sourceNote: 'Inherited FTC shopping and warranty resources provide background. Printer prices and ink use are hypothetical, not product claims or recommendations.',
  },
  {
    id: 'money-027',
    outcome: `Before an optional purchase, name the one realistic thing the same money would otherwise have done, compare the two outcomes side by side, and avoid adding that alternative to the price tag.`,
    scene: 'A headphone upgrade competes with a planned bicycle repair in a small available budget.',
    sections: [
      {
        title: 'Two uses for the same available money',
        paragraphs: [
          `After the month's commitments, you have a fictional 100 units that are genuinely yours to spend. A headphone upgrade you have been eyeing costs 80. The bicycle also needs a repair next week, and that is 80 too. Each one, considered on its own, fits comfortably inside 100. You are about to click buy on the headphones with a clear conscience, because you checked, and 80 is less than 100.`,
          `Both purchases together need 160. Against 100, that is a 60-unit gap, and the gap is invisible as long as you only ever look at one receipt at a time. The idea that catches it has a name, opportunity cost: the next-best use of the same resources that you give up by choosing this one. It is not a fee. The shop does not charge you for the repair. It is simply the thing that cannot also happen with this 100 once 80 of it has gone on headphones.`,
        ],
      },
      {
        title: 'One oven on Sunday afternoon',
        paragraphs: [
          `A small kitchen has one oven, and on Sunday afternoon it can hold either a roast or a cake, not both. Choosing to bake the cake does not cost you a second oven. It costs you the roast. Nobody would describe the cake as costing twice its ingredients. Everybody understands that the oven was the scarce thing, and the real price of the cake was the dinner that did not get made.`,
          `The 100 units is the oven. Spend 80 on the headphones and 20 remains, which is not enough for an 80-unit repair. The alternative you gave up is not an abstract heap of money; it is a working bicycle next week and whatever journeys it would have made. If that repair is the best other use of the money, then the repair is the opportunity cost of the headphones. What you must not do is add the repair to the headphone bill and announce that the upgrade costs 160. It costs 80 at the till. The way to see its full price is to draw two columns from the same 100: one in which 80 goes on the upgrade and one in which 80 goes on the repair, and then look at what each column leaves undone.`,
        ],
      },
      {
        title: 'Describe the displaced result',
        paragraphs: [
          `Column one: upgrade now. 80 spent, 20 left, bicycle still broken next week, and you need to know what that means: a bus fare, a lift, a walk, a missed shift. Column two: repair now. 80 spent, 20 left, headphones deferred, and you should write what that costs too: nothing much, or a trip you wanted them for. Each column gets a date beside it, because next week matters more than a vague later.`,
          `The comparison does not say which column is right. Choosing the thing you enjoy can be a perfectly good decision, and this method is not a rule that every optional purchase loses. It asks only that the thing you give up is written down and looked at before you decide, rather than discovered the following Tuesday at the bottom of a hill.`,
        ],
      },
      {
        title: 'Use a real alternative, not an invented fortune',
        paragraphs: [
          `The alternative has to be something you would actually do with this money, at this time. Sometimes it is a purchase; sometimes it is keeping the 100 intact because a bill of uncertain size is coming. It is never a hypothetical investment that would have made you rich, because that was not on the table. If the repair can wait, say honestly what waiting changes, rather than assuming it changes nothing. If it cannot wait, that constraint belongs in the comparison as a fact. And whatever the columns say, do not ride an unsafe bicycle to make the headphones affordable.`,
          `Two habits. Before any optional purchase from a fixed pot, write the one realistic thing the same money would otherwise do, with its date. And keep the price at the till and the opportunity cost on separate lines, so you neither ignore the alternative nor pretend the shop charged you for it.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'What the same 80 units can do',
      alt: 'Buying either the upgrade or the repair leaves 20 from the same available 100.',
      caption: `Read the two rows as the two things that could go in the one oven: each spends 80 from the same 100 and leaves 20, and each leaves the other undone. Look at the ends of the lines, repair not funded and upgrade deferred; those are the real prices. Illustrative budget; these are alternative paths, not two purchases that both fit.`,
      items: [
        { label: 'Upgrade now', detail: '80 spent; 20 remains; 80-unit repair not funded.' },
        { label: 'Repair now', detail: '80 spent; 20 remains; upgrade deferred.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Pen'],
      steps: [
        `Draw two columns that both start from the same 100-unit available budget. Starting both from one figure is what makes the oven visible; a single receipt never shows it.`,
        `In the first column spend 80 on the upgrade; in the second spend 80 on the repair. Write the 20 that remains at the bottom of each.`,
        `Under each column write what the choice makes possible, what it leaves unfunded, and the date that matters, next week for the bicycle. The date is what turns an abstract alternative into a real consequence.`,
        `Finish with one sentence naming the next-best realistic use of the money, and check that you have not added it to the headphone price. The till says 80; the oven says what the 80 displaced.`,
      ],
      notice: `Your page shows a specific thing that will not happen rather than two separate yes answers to can I afford it. Whichever column you would pick, you picked it knowing the price of the other.`,
      troubleshooting: `If your alternative column says something like invest it and triple it, replace it with a realistic use of the same 100 this month; the oven only holds dishes you were actually going to cook. If the headphone column reads 160, split it back into 80 at the till and the repair as the thing displaced.`,
    },
    recall: {
      prompt: 'A 60-unit concert ticket and a 60-unit drawing workshop compete for one available 60. What is the opportunity cost of the ticket?',
      hint: 'Use the best feasible alternative you would otherwise choose.',
      answer: `The workshop, if that is what you would really have done with the 60 instead. The oven holds one dish: buying the ticket means the drawing workshop, and whatever you would have learned and made there, does not happen with this money. That is its opportunity cost. The ticket still costs 60 at the box office, not 120; the workshop is what the 60 displaced, not a second charge. If, honestly, you would not have booked the workshop anyway and would have kept the 60 for a bill, then keeping the 60 is the real alternative and the comparison should use that instead. The method only works with the thing you would actually have done.`,
    },
    quiz: {
      question: 'What does the upgrade’s opportunity cost mean in the stated comparison?',
      options: ['The planned repair you cannot also fund', 'A second 80-unit fee charged by the shop', 'Every possible use of money added together'],
      correctIndex: 0,
      explanation: `It is the roast that does not get cooked: the planned repair, the next-best real use of the same 100, which the upgrade displaces. The shop charges 80 once, so there is no second fee. And adding every possible use together confuses the one dish you gave up with the whole cookbook; the opportunity cost is the single best alternative, not a wish list.`,
    },
    takeaway: `A fixed pot of money is one oven on a Sunday afternoon, so before an optional purchase write the one realistic thing the same money would otherwise do, with its date, draw two columns from the same 100 and look at what each leaves undone, keep the till price of 80 separate from the repair it displaces rather than calling the upgrade 160, and decide knowing the price of the other dish.`,
    sourceNote: 'Inherited CFPB emergency and FTC shopping resources provide context. This opportunity-cost worksheet is original and makes no investment-return assumptions.',
  },
  {
    id: 'money-028',
    outcome: `Work out the real price per item by dividing what you pay by what you will actually use, so a bulk pack that is cheaper per unit on the shelf can be shown dearer per unit in your hands.`,
    scene: 'A refill-sheet bulk discount collides with a planned change of device.',
    sections: [
      {
        title: 'First make the quantities comparable',
        paragraphs: [
          `Two packs of identical refill sheets sit on the shelf. Twenty sheets for a fictional 12 units, or ten sheets for 7. The big pack has a sticker saying better value, and the sticker is not lying. Divide price by quantity to get a unit price: 12 divided by 20 is 0.60 a sheet, and 7 divided by 10 is 0.70. The large pack is a tenth of a unit cheaper on every sheet it contains.`,
          `That calculation carries two quiet assumptions. The first is that the sheets really are the same, in size, quality, and what they fit; a count on a box says nothing about whether the contents do the same job. The second, and the one that matters here, is that the number on the box is the number you will use. The shelf price divides the cost by the sheets sold. Your price divides it by the sheets that actually get used, and those are not always the same number.`,
        ],
      },
      {
        title: 'The family-size bag of salad',
        paragraphs: [
          `A family-size bag of salad is cheaper per leaf than the small bag, every time, on the shelf label. In a one-person kitchen, half of it turns to green liquid in the bottom of the fridge by Thursday. The money went on the whole bag; the eating happened on half of it. So the honest price per leaf is the price of the bag divided by the leaves you ate, and at that point the small bag, finished to the last leaf, was the cheaper one. The supermarket's unit price was correct. It was just the answer to a question you were not asking.`,
          `Now the refill sheets. Suppose you are about to change device, and the new one will not take these sheets, so you will use ten of the large pack's twenty and the rest will have no use and no resale. The full 12 units now buys ten used sheets: 12 divided by 10 is 1.20 per used sheet. The small compatible pack, all ten used, is still 0.70 per used sheet. The large pack's shelf price is still 0.60 and still true. It describes sheets in the box. Your decision runs on sheets that leave the box and do something.`,
        ],
      },
      {
        title: 'Change the denominator to what you will use',
        paragraphs: [
          `Lay it out as three columns: pack cost, quantity sold, quantity you expect to use. Large pack: 12, 20, and 20 if nothing changes, giving 0.60. Small pack: 7, 10, 10, giving 0.70. Then change only one number: the large pack's expected use drops to 10 because of the device change. Cost stays 12, and 12 over 10 is 1.20. Nothing about the product or its price moved; the denominator did.`,
          `The same move works with any supply. Two litres of something for 6 units against one litre for 4 looks like 3 a litre against 4. If only one litre will be used before the rest spoils, the two-litre pack costs 6 per usable litre against 4. The shelf label cannot know how much you will use. Only you can supply that number, and it belongs in the sum.`,
        ],
      },
      {
        title: 'Storage and timing also count',
        paragraphs: [
          `A bulk purchase earns its discount when three things are true: the stock stays compatible with what you own, it can be stored without spoiling or getting damaged, and you will get through it in a realistic time. Those are facts to check before buying, not benefits that come free with the sticker. The larger payment also leaves less in the pot today for everything else. Do not assume the unused half can be returned or sold unless you have confirmed a route. And when future use is genuinely uncertain, do both calculations, full use and reduced use, and look at them together instead of picking the denominator that flatters the pack you already wanted. None of this requires buying anything, or buying more to make a bigger pack pay off.`,
          `Two habits. Whenever a shelf label shows a unit price, write beside it the quantity you will honestly use before it spoils, expires, or stops fitting, and divide again. And before any bulk buy, ask the three questions, still compatible, storable, finished in time, and treat a no to any of them as a reason to buy small.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Price per sheet actually used', unit: 'units per used sheet',
      alt: 'Large pack with twenty uses costs 0.60 per use; small pack 0.70; large pack with ten uses 1.20.',
      caption: `Compare the first and third bars: same pack, same 12 units, and the bar doubles because the sheets used fell from twenty to ten, the salad that went to liquid. The middle bar, the small pack fully used, sits between them. Illustrative equal sheets; each denominator is written in the detail, and unused stock has no recoverable value in the lower-use case.`,
      items: [
        { label: 'Large: 20 used', detail: '12 divided by 20.', value: 0.6 },
        { label: 'Small: 10 used', detail: '7 divided by 10.', value: 0.7 },
        { label: 'Large: 10 used', detail: '12 divided by 10.', value: 1.2 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        `Draw three columns, pack cost, quantity sold, and quantity you expect to use, and enter both sample packs. Giving expected use its own column is what separates your price from the shelf's.`,
        `Calculate the two full-use unit prices, 12 over 20 and 7 over 10, which are the shelf label's 0.60 and 0.70 and are correct as far as they go.`,
        `Change only the large pack's expected use to ten, keep its cost at the full 12, and recalculate to 1.20. One number moved, and it was the one the label could not know.`,
        `Write one question about compatibility or storage that could change your expected-use number, such as whether the new device takes these sheets. The question is what you would check before buying, not after.`,
      ],
      notice: `The large pack went from 0.60 to 1.20 per used sheet with no change in its price, only in the sheets that would leave the box. The sticker was right about the shelf and wrong about your fridge.`,
      troubleshooting: `If the large pack still shows 0.60, you divided by the quantity in the box; replace it with the quantity you will use. If the small pack came out dearer, check that you compared per used sheet on both sides rather than per sheet used on one and per sheet sold on the other.`,
    },
    recall: {
      prompt: 'A two-litre supply costs 6 units, but only one litre will be usable. A one-litre pack costs 4. Which has the lower usable-unit cost?',
      hint: 'Assume the unused litre has no recoverable value.',
      answer: `The one-litre pack. On the shelf, the big pack looks like 3 a litre against 4 and wins. In your hands, the whole 6 units buys the single litre you will actually use, because the second litre is the salad in the bottom of the fridge, worth nothing and returnable nowhere. That makes the large pack 6 per usable litre against the small pack's 4, and the small pack wins by 2. The shelf's unit price did not change and was never false; it divided by litres sold, and your decision divides by litres used. If you could genuinely use both litres before they spoiled, the answer flips back, which is why the expected-use number has to be honest.`,
    },
    quiz: {
      question: 'When only ten sheets from the 12-unit pack are used, what is the effective cost per used sheet?',
      options: ['0.60 units', '0.70 units', '1.20 units'],
      correctIndex: 2,
      explanation: `You paid the full 12 and used ten sheets, so each used sheet cost 12 divided by 10, which is 1.20; the ten that went to waste are the salad that turned to liquid, and their cost does not disappear with them. The 0.60 is the shelf price per sheet sold, dividing by twenty. The 0.70 is the small pack's price when all ten of its sheets are used.`,
    },
    takeaway: `A big pack is the family-size bag of salad: cheaper per leaf on the shelf and dearer per leaf eaten if half goes to liquid, so divide what you pay by what you will honestly use, 12 over 10 is 1.20 against the label's 0.60, check that the stock stays compatible, storable, and finished in time before buying bulk, and when use is uncertain run both sums rather than choosing the denominator that flatters the pack you wanted.`,
    sourceNote: 'The inherited FTC shopping resource provides comparison background. Pack sizes, prices, and the zero value of unused stock are explicit hypothetical assumptions.',
  },
  {
    id: 'money-029',
    outcome: `Test a cost-per-use claim by replacing the seller's imagined use count with one drawn from your actual routine, and keep the full upfront price in today's budget however small the ratio looks.`,
    scene: 'A travel bag looks inexpensive when a sales estimate assumes sixty outings.',
    sections: [
      {
        title: 'A low cost per use can hide a large guess',
        paragraphs: [
          `The travel bag costs a fictional 120 units, and the card beside it says: just two units per trip. The arithmetic is honest. 120 divided by 60 is 2. The number that is doing all the work, the 60, is not on the card in large type, and it is not a fact about the bag. It is a guess about you: sixty outings, which at one a week is more than a year of constant travel.`,
          `You take the occasional overnight trip. Say twelve in the time you would own this bag. Then the same 120 divided by 12 is ten units a trip, five times the figure on the card. The shop did not change the price when it imagined sixty outings. It enlarged the denominator, the number underneath the division, and a bigger denominator makes any price look small. A forecast of how often you will use something is an assumption about your future routine. It does not come in the box.`,
        ],
      },
      {
        title: 'The gym that costs one unit a day',
        paragraphs: [
          `Gym memberships are sold the same way. Only one unit a day, says the poster, and that is true if you go every single day for a year. The person who signs up in January and goes eleven times has paid the same annual fee, and each visit cost them a small fortune. The gym was not lying about the arithmetic. It was quietly deciding how often you would turn up, and it chose the number that made the fee look like loose change.`,
          `The defence is to supply your own denominator from evidence you already have. Look back at the last year and count the occasions when the item would actually have done its job: the trips you really took, not the trips you intend to start taking once you own a nice bag. A hoped-for new habit does not supply weekly use until it exists. Then run a lower scenario as well, because plans change, things break, and the old bag often turns out to be more convenient. Cost per use also skips a prior question: do you need this function at all? Borrowing or renting is a fair comparison only if it is genuinely available, suitable, and fine with the owner. An imaginary free alternative is no more honest than an imaginary sixty outings.`,
        ],
      },
      {
        title: 'Ground use in a routine that already exists',
        paragraphs: [
          `Set the two scenarios side by side under the one price. Sixty uses: 120 over 60 is 2 a trip. Twelve uses: 120 over 12 is 10 a trip. Label each use count as an assumption, and write beside the twelve where it came from, such as last year's calendar. One of these numbers has a source and the other has a sales card, and the page should show which is which.`,
          `Now a separate line for the money. Suppose 150 units are available, with a 60-unit bill already committed. That leaves 90 uncommitted, and the bag is 120, a 30-unit gap. Calling the bag two units a trip does not turn the checkout into sixty small payments spread across the coming year, and it does not make the committed bill go away. The gym fee is paid in January whatever the poster says per day.`,
        ],
      },
      {
        title: 'The whole payment still happens now',
        paragraphs: [
          `None of this says a rarely used item is a bad buy. Some functions you need four times a year matter enough to be worth 30 a time. What the method insists on is that three different questions get three separate answers: is the function needed, how many uses are credible, and is the full price available today. A flattering ratio tries to answer all three at once, and it answers none of them. A warranty, for the record, does not create outings either; it only changes who pays if the zip fails.`,
          `Two habits. When a price is quoted per use, per day, or per serving, find the hidden denominator, replace it with a count from your own last year, and recalculate. And keep the full upfront price on a separate line against today's uncommitted money, because the ratio is paid in one go, not in instalments of two.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Same bag, different use count', unit: 'units per use',
      alt: 'A 120-unit bag costs 2 per use at sixty uses and 10 per use at twelve.',
      caption: `Look at how much taller the second bar is and then read the details: the price is 120 in both, and only the number underneath changed, from the seller's sixty outings to a realistic twelve. This is the gym poster against the eleven visits you actually made. Illustrative scenarios excluding other costs.`,
      items: [
        { label: '60 actual uses', detail: '120 divided by 60 = 2.', value: 2 },
        { label: '12 actual uses', detail: '120 divided by 12 = 10.', value: 10 },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Calculator'],
      steps: [
        `Write the 120-unit price once at the top, then two scenarios beneath it, sixty uses and twelve uses. Writing the price once makes it obvious that only the denominator is about to change.`,
        `Calculate cost per use for each, 2 and 10, and label both use counts as assumptions rather than facts, noting where the twelve came from and where the sixty came from.`,
        `On a separate line subtract the committed 60 from the available 150, and compare the 90 that remains with the 120 checkout price. The gym fee is paid in January; this line is January.`,
        `Write one sentence of evidence from your own routine, such as how many overnight trips you took last year, that would set a credible use count. Evidence, not intention.`,
      ],
      notice: `A ratio of two units a trip sits on your page right next to a 30-unit shortfall at the till, and both are true. The ratio answered a question about the future; the shortfall is about today.`,
      troubleshooting: `If you find yourself dividing the 120 across next year's trips to make it fit the 90, put the full payment back into today's budget; cost per use is a way of judging value, not a way of paying. If your use count comes from plans rather than the past, write planned beside it and run a lower number too.`,
    },
    recall: {
      prompt: 'A 90-unit tool is advertised at 3 per use for thirty uses. If only six uses are realistic, what changes?',
      hint: 'The denominator changes, not the invoice.',
      answer: `The cost per use becomes 15, and the invoice stays at 90. The advert divided by thirty; your routine divides by six, and 90 over 6 is 15, five times the advertised figure. Nothing about the tool or its price moved; the gym poster's one-a-day became your eleven visits. Two questions remain separate from that ratio and need their own answers: whether you actually need what the tool does, and whether 90 is available in today's uncommitted money. A tool used six times can still be worth buying, but the decision should be made on fifteen a use and a full 90 now, not on the three that assumed a habit you do not have.`,
    },
    quiz: {
      question: 'Which observation most directly tests the bag’s two-unit-per-use claim?',
      options: ['Its 120-unit price alone', 'Evidence that sixty relevant outings are realistic', 'The existence of a twelve-month warranty'],
      correctIndex: 1,
      explanation: `The claim is 120 divided by 60, and the price is the part nobody disputes; the 60 is the hidden denominator, the gym's one-a-day, so evidence about whether sixty outings will really happen is the only thing that tests it. The price on its own cannot say how often you will travel, and a warranty changes who pays for a broken zip without creating a single outing.`,
    },
    takeaway: `Cost per use is the gym poster that says one unit a day, so find the use count hiding underneath the division, replace the seller's sixty with a number from your own last year, 120 over 12 is 10 and not 2, run a lower scenario as well, and keep the full 120 on a separate line against today's uncommitted 90, because the ratio is a judgement about value and the till still wants the whole amount now.`,
    sourceNote: 'The inherited FTC shopping resource provides background. Usage counts and budgets are invented; no product durability or future habit is promised.',
  },
  {
    id: 'money-030',
    outcome: `Write down the job a purchase must do and the complete budget before you see any offer, then test a sale against the full cost of a working setup, adapters and delivery included, not the sticker.`,
    scene: 'A discounted monitor needs an adapter that pushes it beyond the prepared budget.',
    sections: [
      {
        title: 'Describe the problem before seeing the promotion',
        paragraphs: [
          `The problem is specific. When you draw, the reference image and the canvas will not both fit on the current screen at a size you can actually read. That is the job a new monitor would do. Before you open a single shop page, write that job down, along with the connection your computer actually has on the back and a fictional total budget of 180 units. Three lines, written in a quiet moment, with no offer in sight.`,
          `Those three lines are a purchase condition, and their value is that they belong to your task rather than to whatever a seller chooses to highlight. A brighter picture, a thinner bezel, or a bigger discount cannot show that a screen solves the reference-beside-canvas problem. Only the condition can be checked against that. Writing it before shopping matters because afterwards every advertisement will be trying to rewrite it for you.`,
        ],
      },
      {
        title: 'The shopping list written at home',
        paragraphs: [
          `A shopping list written at the kitchen table, from the recipe, is a different document from one written in the shop. At home it says what dinner needs. In the aisle it starts saying what is on offer. A bargain joint of meat that needs three ingredients you do not have is not a bargain; it is a dearer dinner with a cheap headline. The list from home catches that, because it already says what the whole meal costs. The list written in the shop only sees the sticker.`,
          `Now the sale. A monitor at 150 units, nicely under 180. But its connection is not the one on your computer, so it needs a compatible adapter at 25, and delivery is 10. The setup that actually does the job costs 150 plus 25 plus 10, which is 185, five units over the limit you wrote at home. The 150 is a real price in this fictional example. It is just not the price of a working screen; it is the joint without the three missing ingredients. Two more lines from the list still need ticking. Compatibility is not proved by a socket that looks similar; an adapter has to carry the signal your computer sends, and that is a fact to verify, not assume. And if you are unsure the text will be readable at this size, the return terms are part of the condition, to be found before buying rather than after.`,
        ],
      },
      {
        title: 'Include the adapter before approving the price',
        paragraphs: [
          `Set it out as the home list would. Condition: reference readable beside canvas, verified connection, total at most 180. Then the required items for a working setup, each on its own line: monitor 150, adapter 25, delivery 10. Total 185. Gap against the budget: 5. Write the gap; do not quietly stretch the 180 to close it.`,
          `Then the open questions, also on their own lines: does this adapter carry the signal from this computer's port, and what are the return terms if the text is too small. A condition with open questions is not yet satisfied, whatever the headline price says. The page now explains, to you or to anyone, why a 150-unit sticker has not passed a 180-unit test.`,
        ],
      },
      {
        title: 'Use a pause to answer a question',
        paragraphs: [
          `The sale page has a countdown. The countdown is a fact about the promotion, not about your drawing problem, which will be exactly the same size tomorrow. For an optional upgrade, an unanswered question about cost or compatibility is a reason to set a date for another look, not a reason to buy before the timer runs out. No particular waiting period is being prescribed here; a necessary replacement can have a real deadline, and then the useful move is to name what still needs checking and whether a workable alternative exists meanwhile. What the condition guards against is the quiet upward drift of the budget, offer by offer, without ever revisiting the other things that money was for. A purchase condition can end in buying, waiting, or walking away. Its job is to make the reason visible, not to say no.`,
          `Two habits. Write the job, the connection or constraint, and the complete budget before you look at any offer, like a shopping list from the recipe. And price the whole working setup, every required extra and the delivery, against that budget, treating any open compatibility or returns question as a line not yet ticked.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Sticker versus usable setup',
      alt: 'The 150-unit monitor becomes a 185-unit setup after adapter and delivery, exceeding a 180-unit budget.',
      caption: `Read the second row as the shopping list from home: it adds the two ingredients the sticker left out, a 25-unit adapter and 10 delivery, and lands at 185 against a budget of 180. The first row is the bargain joint on its own. Illustrative prices; the headline omits 35 units of what it takes to make the screen work.`,
      items: [
        { label: 'Advertised monitor', detail: '150 units before required extras.' },
        { label: 'Ready to use', detail: '150 + 25 adapter + 10 delivery = 185; budget 180.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        `Write the condition first, before looking at the sale: reference readable beside canvas, connection verified against the computer's actual port, total at most 180 units. This is the list from the kitchen table.`,
        `List the monitor, the adapter, and delivery as three separate required costs. Each extra on its own line is what stops the sticker from standing in for the whole meal.`,
        `Add them to 185 and write the five-unit gap against 180 without changing the budget. The gap is the finding; adjusting the budget to hide it is the thing the condition exists to prevent.`,
        `Write the exact question still open, whether this adapter carries the signal from this port, or what the return terms are, and do not place an order. A condition with an open question is not yet met.`,
      ],
      notice: `Your page explains in plain lines why a monitor priced under budget has not satisfied the condition you wrote: the working setup costs 185, and two questions are still open. The countdown appears nowhere in that reasoning.`,
      troubleshooting: `If your condition just says better monitor, go back and name the task and one thing you could observe, such as reference text readable at arm's length beside the canvas. If the 180 has quietly become 185 on your page, restore it and write the gap instead.`,
    },
    recall: {
      prompt: 'A discounted drawing tablet meets your size requirement but needs an unpriced software subscription. Is the prepared budget test complete?',
      hint: 'Required ongoing costs belong in the same comparison.',
      answer: `No. The subscription is a missing ingredient with no price on it yet, and a list with a blank line has not been totalled. Find out what the required software costs and over what period, and whether the tablet does its job without it; if it does not, the subscription is part of the price of a working setup exactly as the adapter was part of the monitor's. Then compare the complete cost, tablet plus the subscription for the period you will own it, against the budget and the function you wrote down at home. The size requirement being met is one line ticked. The discount does not fill in the blank one, and until it is filled the condition is open rather than passed.`,
    },
    quiz: {
      question: 'Which fact prevents the sample monitor from passing the stated budget condition?',
      options: ['Required total is 185 against a 180 limit', 'The sale ends before next week', 'The monitor price alone is below 180'],
      correctIndex: 0,
      explanation: `The condition was written for a working setup, and the full shopping list, monitor plus adapter plus delivery, comes to 185 against a limit of 180. The countdown is a fact about the promotion and changes nothing in that sum. And the sticker being under 180 is exactly the bargain joint without its missing ingredients; it is the reason the condition was written in advance.`,
    },
    takeaway: `Write the shopping list at home before you see the shop: the job the purchase must do, the connection it must fit, and the complete budget, then price the whole working setup against it, monitor 150 plus adapter 25 plus delivery 10 is 185 against 180, write the gap rather than stretching the budget, treat open compatibility and returns questions as lines not yet ticked, and let the countdown time the offer, not your decision.`,
    sourceNote: 'The inherited FTC shopping source supplies background. Prices and the purchase-condition exercise are original; no waiting period or product benefit is guaranteed.',
  },
  {
    id: 'money-031',
    outcome: `Check any message that asks you to move money by using a contact route you already had before the message arrived, never one the message itself supplies, and prepare that route in advance.`,
    scene: 'A familiar-looking account alert asks for a 600-unit transfer to a new destination.',
    sections: [
      {
        title: 'The message supplies both the problem and the helper',
        paragraphs: [
          `The message carries your financial provider's name and its usual colours. It says your account is at risk. To protect your money, it asks you to move an illustrative 600 units to a different account, and it gives a number to call if you need help. The formatting is right. The sender knows the first line of your address. Your pulse goes up a little, which is exactly what the message is for.`,
          `Look at what the message has done. It has announced a problem, and in the same breath it has handed you the only route for checking that the problem is real. Names, logos, the number shown on a caller display, and scraps of personal information can all be copied or bought, so none of them tells you who is actually behind the screen. The thing that should worry you is not the alert. It is that the alert comes with its own verification kit.`,
        ],
      },
      {
        title: 'The caller at the door with his own phone number',
        paragraphs: [
          `A man in a hi-vis jacket knocks and says he is from the gas company, there is a leak reported on your street, and he needs to come in. You hesitate, and he helpfully hands you a card with a number to call to confirm his identity. If you ring that number, who answers? Whoever printed the card. The sensible move is older than the trick: shut the door, find the number on your own gas bill, and call that. If there is a leak, the real company will know about it.`,
          `The message is the man at the door and the number in it is his card. Calling it returns you to a route chosen by whoever might be impersonating the provider, and asking that conversation to confirm itself is not a check at all. So end the exchange. Then reach the provider through a route you already had before today: the official app you installed months ago, the number printed on the back of your card, a contact from a statement you have verified before. Describe the alert and ask one specific question: did you make this request? Do not transfer anything and do not read out approval codes while you are still inside the pressured call. The check is about whether the real organisation asked for this, not about whether the caller can repeat details that were already in the message.`,
        ],
      },
      {
        title: 'Break the dependence between claim and check',
        paragraphs: [
          `The test is a single question about any verification route: who gave me this? If the answer is the message, the route is dependent on the sender and proves nothing, however official it looks. A second number offered by the same caller, a link in the same thread, a reply to the same email: all of them are the card from the man at the door, printed in different fonts. Independence means the route existed in your life before the request did.`,
          `Write the two routes side by side for the sample alert. Route one, the number in the alert: chosen by whoever wants the 600 moved. Route two, the app you already use: chosen by you, long ago, from the provider's own materials. Only the second can tell you anything about the first. If the real provider says there is no such request, you have your answer. If there is a genuine problem, you are now dealing with it through a door you trust.`,
        ],
      },
      {
        title: 'Prepare a calm route before a request arrives',
        paragraphs: [
          `The moment to find the number on the gas bill is before anyone knocks. Keep a private note of where the verified support route for each provider lives, the app, the card, the statement, with no passwords or one-time codes in it. Then, when an urgent message arrives, the calm action is already decided and does not have to be invented under pressure. This routine does not assume every urgent message is a fraud. Some are real. It simply refuses to let urgency stand in for identity. If money has already gone, contact the actual provider through the verified route straight away and ask what options exist; speed helps, and nothing is promised.`,
          `Two habits. For any message that asks you to move money or approve something, verify only through a route you possessed before the message arrived. And keep that route written down in advance, so the door can be shut without a moment's thought about where the bill is.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Two ways to check the same alert',
      alt: 'The supplied callback stays inside the 600-unit request; a previously verified route provides an independent check.',
      caption: `Compare where each route came from, not how official it looks. The first is the card handed over at the door, chosen by whoever wants the 600 moved. The second is the number on your own bill, chosen by you before any alert existed, and it is the only one that can answer the question. Illustrative alert, not a real provider message.`,
      items: [
        { label: 'Number in the alert', detail: 'Chosen by whoever requested the 600-unit transfer.' },
        { label: 'Previously verified app', detail: 'Separate support route; ask whether that request exists.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'A harmless fictional alert description'],
      steps: [
        `Write the sample claim, account at risk, and the requested action, move 600 units, on paper, without adding any real phone numbers, links, or account details. The exercise is about the shape of the trap, not a live one.`,
        `Go through every way the message offers to check itself, the number, any link, any reply address, and mark each one dependent on the sender. Each is the card from the man at the door.`,
        `Write a calm three-line response plan: end the contact, open a route you already had before today, and ask the provider whether this specific request exists. Three lines decided now are three decisions you will not have to make under pressure.`,
        `Add one boundary line: no passwords or approval codes to anyone who contacted you, however the conversation is going. Write it so the rule exists before the next message does.`,
      ],
      notice: `Your verification step no longer passes through the person who wants the money moved. Whatever the alert says, the only route on your plan is one that existed before it arrived.`,
      troubleshooting: `If your second route turns out to be another number or link taken from the same message, it is the same card in a different pocket; replace it with the app you already use or the number on your card. If you cannot think of a pre-existing route, that is the gap to fix today, before any alert.`,
    },
    recall: {
      prompt: 'A landlord’s message thread suddenly requests rent to a new account. How would you verify without relying on that thread?',
      hint: 'Use a contact route known before the account-change request.',
      answer: `Shut the door and find the bill. The thread is the route the request arrived through, so a reply in it, or a call to a number it now contains, only asks the request to confirm itself; a familiar history of messages does not prove who is typing today. Use a route you had before the change was mentioned: the landlord's phone number from the tenancy agreement, the agency's published office line, or a conversation in person. Ask the one specific question, have you changed the account the rent goes to, and pay nothing until the answer comes back through that independent door. If the change is genuine, the landlord will confirm it there; if not, you have kept a month's rent.`,
    },
    quiz: {
      question: 'Which response makes the sample verification independent?',
      options: ['Ask the sender to repeat your address', 'Use a second number the sender provides', 'Open the already-verified service app and contact support'],
      correctIndex: 2,
      explanation: `The app you installed long ago from the provider's own materials is the number on your own bill: it existed before the alert and the sender had no hand in it. Asking the sender to repeat your address only tests whether they can read details they already have, and a second number from the same sender is the same card from the same man at the door.`,
    },
    takeaway: `A message that announces a problem and supplies its own helpline is the caller at the door handing you his own card, so shut the door, reach the provider through a route you already had, the app, the back of the card, a verified statement, ask whether this specific request exists, hand over no codes while the pressure is on, and keep that route written down before the next knock.`,
    sourceNote: 'The inherited FTC scam resource supports independent verification. This original alert is fictional and makes no promise about payment recovery.',
  },
  {
    id: 'money-032',
    outcome: `Treat an unusual payment method, such as gift-card codes read aloud, as the warning sign itself, refuse the idea of a small test payment, and know the first calm steps if value has already been sent.`,
    scene: 'An unsolicited caller demands three gift-card codes to settle an alleged utility problem.',
    sections: [
      {
        title: 'Inspect the payment instruction itself',
        paragraphs: [
          `The phone rings in the middle of making dinner. The caller gives a title, names the utility company, uses your name, and says there is a problem with the account. It must be settled now. The only way to settle it, they explain, is three gift cards of 50 units each from the shop on the corner. The codes are to be read out over the phone. Not a card payment, not the usual bill, because of a technical issue they describe fluently.`,
          `Put the story to one side for a moment and look only at the payment instruction. A real utility collects money through its own billing route: a direct debit, a card payment on its website, a reference on a bill. It does not send customers to a shop for gift cards. It has no use for codes read down a phone line. The instruction is itself the evidence. A convincing reason why the normal method will not work today does not make an abnormal method trustworthy. That reason is the part of the script that exists to get you past this exact thought.`,
        ],
      },
      {
        title: 'Cash in an envelope to an address they gave you',
        paragraphs: [
          `Reading out a gift-card code is like putting banknotes in an envelope and posting it to an address the caller just dictated. The moment the envelope is in the box, the money is gone. There is no name on it, and nobody at the post office can fetch it back. That is why this payment method is chosen. It is not that gift cards are a strange way to pay a bill, though they are. It is that they move value instantly to someone you cannot identify and cannot reach afterward.`,
          `This also explains why a test payment is not a test. The tempting compromise is to send one code and see if they are genuine. Posting one envelope to see whether the address is honest tells you nothing except that the envelope arrived. The caller saying thank you, got it, confirms only that they received 50 units. It does not say who they are or whether any bill exists. One code exposes 50. All three expose 150. Those are amounts at risk, not odds of fraud, and the smaller one is still money leaving. You do not have to disprove the story to decline. Stop before any payment and hang up. Then contact the utility through a route you already know, the number on a bill or its own app, and ask whether there is any problem at all.`,
        ],
      },
      {
        title: 'A test payment still transfers value',
        paragraphs: [
          `Lay the three scenarios out as what leaves your hands. No code sent: zero through this request. One test code: 50 gone, and in exchange you learn that someone can say thank you. All three: 150 gone. Put beside them the one action that transfers nothing and actually answers the question. That is a call to the real utility through its own route.`,
          `Then write a stop rule, in advance, in plain words. If anyone I did not contact asks for gift-card codes, a new wallet, or an unusual transfer, I stop. I verify through my own route before sending anything, including a small amount. The rule is written now for a reason. In the moment, with a stranger's urgency in your ear and dinner burning, you will not be composing rules.`,
        ],
      },
      {
        title: 'If a payment already happened',
        paragraphs: [
          `If an envelope has already gone, do not post another to get the first one back. A follow-up demand to release, validate, or recover a payment is the same script with a second act. Stop all further payments. Then contact the gift-card issuer or the payment provider through its verified route as quickly as you can and ask what options exist. Keep the transaction details and messages privately for that conversation. Do not post redeemable codes or account details in any public report. Recovery depends on the circumstances and the payment system and is not promised. The purpose of a personal stop rule is to make the next safe action obvious. It is not there to blame anyone for responding to pressure that was engineered to work. This practice uses a fictional call and asks you to buy no cards and make no transactions.`,
          `Two habits. Judge any payment request by its method before its story: gift-card codes, new wallets, and unusual transfers are the envelope of cash, whatever the explanation. And never send a small amount to find out if someone is genuine. Verification is a call you make, not a payment you risk.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Value exposed by sending codes', unit: 'units',
      alt: 'Sending no code exposes zero; one 50-unit code exposes 50; all three expose 150.',
      caption: `Look at the middle bar first: the so-called test payment is already 50 units in an envelope with no return address, not a free check. The bars are three separate scenarios showing what leaves your hands, not probabilities of fraud, and the only one that answers the question about the caller is the empty one. Illustrative amounts.`,
      items: [
        { label: 'No code sent', detail: 'No value transferred through this request.', value: 0 },
        { label: 'One test code', detail: 'One card at 50 units.', value: 50 },
        { label: 'All three codes', detail: '3 x 50 = 150 units.', value: 150 },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Pen'],
      steps: [
        `Write the fictional demand as three codes of 50 units and total it to 150, then beside it write what a single test code would expose: 50. Seeing the test payment as a number, not a precaution, is the point of the first step.`,
        `Draft a stop rule in one sentence for any unsolicited request to pay by gift-card codes, a new wallet, or an unusual transfer. Write it in your own words now, because you will not be writing rules with a caller on the line.`,
        `Add two more lines: the independent route you would use to verify, such as the number on a real bill, and a separate already-paid response of stop, keep the records privately, and contact the issuer through its verified route.`,
      ],
      notice: `Your plan verifies by making a call that moves no money, and the test payment has disappeared from it entirely. The first action in every branch is stop, and the money stays where it is until the real utility has answered.`,
      troubleshooting: `If your plan still begins with sending a small amount to see what happens, move verification ahead of every payment; one envelope posted is one envelope gone. If your verification route is a number the caller gave you, it belongs to the caller; replace it with one from a bill you already have.`,
    },
    recall: {
      prompt: 'Someone asks for 20 units in a new wallet to prove your identity before releasing a refund. Does the small amount make this a useful test?',
      hint: 'A payment acknowledges value transfer, not the recipient’s identity.',
      answer: `No. Twenty units is a small envelope, and it is still cash posted to an address the requester chose, with nothing coming back. Paying proves nothing about your identity to anyone genuine, because real organisations do not verify customers by having them send money to a new wallet; and it proves nothing about the requester either, except that they can receive 20 units. The refund story is the fluent explanation that exists to walk you past the payment method. Stop, send nothing, and ask the real organisation through a route you already have, their app or a number from a statement, whether any refund exists and how they actually pay it. If the refund is real, it will not need 20 units from you first.`,
    },
    quiz: {
      question: 'The caller accepts one sample code. What does that acknowledgement actually establish?',
      options: ['The requester received the code', 'The utility has the stated unpaid bill', 'The utility authorised this payment route'],
      correctIndex: 0,
      explanation: `The thank you confirms that the envelope arrived: whoever is on the line now has 50 units of value, and that is the whole of what you learned. It says nothing about whether a bill exists, which only the real utility through its own route can tell you, and nothing about whether the utility approved paying by gift card, which it did not, because that method is the warning sign in the first place.`,
    },
    takeaway: `A demand for gift-card codes, a new wallet, or any unusual transfer is cash in an envelope to an address the caller dictated, so judge the method before the story, send nothing to test whether someone is genuine, because one code is already 50 units gone, verify instead through a route you already had, and if value has gone, stop further payments, keep the records privately, and contact the issuer through its verified route without expecting a guaranteed return.`,
    sourceNote: 'The inherited FTC scam resource identifies payment-method warning signs. Amounts are fictional; reporting or contacting a provider does not guarantee reversal.',
  },
  {
    id: 'money-033',
    outcome: `Recognise the shape of a fake-payment job scam, an unverified incoming payment used to get you to send real money onward, and verify the vacancy through the company's own channels first.`,
    scene: 'A remote-work recruiter sends an apparent equipment payment and names a supplier to pay.',
    sections: [
      {
        title: 'Follow the requested movement of money',
        paragraphs: [
          `The recruiter is friendly and quick. The remote role sounds right, the offer letter has a logo and a signature, and within days an apparent payment of 1,200 units appears, described as your equipment allowance. The next message explains the process: forward 900 to the company's approved supplier, whose details are attached, and keep 300 to cover your setup costs. It feels like being trusted with a small job before the big one.`,
          `Draw the money's path and the feeling changes. Money arrives in your account from a source you have not verified. Money leaves your account, on your instruction, to a destination chosen by that same unverified person. Your personal account has become one link in a payment route designed by a stranger. The risk is not remote work, which is ordinary. The risk is the route. A plausible company name and a balance on your screen do not establish that a job exists, and they certainly do not establish where the 1,200 came from.`,
        ],
      },
      {
        title: 'Change for a note you have not checked',
        paragraphs: [
          `Imagine a stranger at a market stall hands over a large note for a small purchase and asks for change in cash. You give it. Later the note turns out to be counterfeit. The fake note is worthless, but the change you handed over was real, and it is gone, and the stranger is not coming back. The trick works because the two movements feel like one transaction. They are not. The note coming in and the change going out are separate events, and only one of them was genuine.`,
          `The recruitment payment is the large note. In fake-payment schemes, an account can display funds before the bank has finished establishing whether the payment behind them is genuine. If the 1,200 is later reversed, and you have already sent 900 to the supplier, the reversal takes the 1,200 back and leaves the 900 exactly where you sent it. That 900 was your money, moved by you. The 300 you were told to keep was never wages; it was the change you were allowed to hold so the rest felt earned. How long a bank takes, and who bears the loss, depend on your agreement and local rules, so do not assume a universal clearing period or a guaranteed reversal in your favour. The distinction that matters is between a balance shown on a screen and funds independently confirmed as final, from a source you have checked.`,
        ],
      },
      {
        title: 'Available does not necessarily mean final',
        paragraphs: [
          `Lay the sequence out as two arrows. Arrow one, incoming: 1,200 shown, source unverified. Arrow two, outgoing: 900 to a supplier named by the recruiter, route recruiter-supplied. Beneath them, a third line: if arrow one reverses, arrow two is still a 900-unit transfer you made, standing on its own.`,
          `The mistake the scheme relies on is netting the arrows into a tidy 300 profit. Netting assumes both arrows are real and both will stay. One of them is a note you have not checked. Keep them separate on the page, each with its own uncertainty, and the 300 stops looking like income and starts looking like bait.`,
        ],
      },
      {
        title: 'Verify the job outside the recruitment message',
        paragraphs: [
          `Find the company through a route the recruiter did not give you: its own website reached by searching the name, a published careers page, a switchboard number. Ask whether this role exists and whether the company really pays equipment allowances through new hires' personal accounts. Do that before sharing identity documents, bank details, or handling any funds. Do not deposit a cheque you doubt, and do not forward a small amount to see whether the process works; a small envelope of change is still change. If money has already moved, contact your bank promptly through its verified route and keep the messages privately for that conversation. This is a warning-pattern exercise. Not every equipment allowance is a scam, and the practice needs no contact with any recruiter, no account login, and no real transaction.`,
          `Two habits. Whenever an incoming payment is paired with a request to send money onward, draw the two arrows separately and ask what happens to the second if the first disappears. And verify any job offer through the company's own channels, found by you, before any money or document changes hands.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'The equipment-payment trap',
      alt: 'An apparent 1,200-unit payment is followed by a requested 900-unit transfer that remains at risk if the first payment reverses.',
      caption: `Read the last step first: when the incoming 1,200 reverses, the 900 you forwarded does not come back, because it was your change handed to a stranger for a note nobody had checked. Then read the two earlier steps as separate arrows, not one transaction. Illustrative scam sequence, not a bank-processing timetable.`,
      items: [
        { label: 'Apparent payment', detail: '1,200 units shown; source not verified.' },
        { label: 'Requested forwarding', detail: '900 to a named supplier; supposed 300 remainder.' },
        { label: 'If incoming reverses', detail: 'The outbound 900 is still a separate exposure.' },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'The fictional offer above'],
      steps: [
        `Draw two separate arrows: the apparent 1,200 coming in and the requested 900 going out. Drawing them apart, rather than as one net figure, is what breaks the illusion of a single transaction.`,
        `Label the incoming arrow source unverified and the outgoing arrow route chosen by the recruiter. Both labels describe who controls each end, which is the thing the offer letter never says.`,
        `Write beneath them what happens to the outgoing 900 if the incoming 1,200 reverses. One sentence: the 900 is gone and the 1,200 was never real.`,
        `Draft one question you would put to a company contact you found yourself, such as whether this vacancy exists and whether allowances are paid this way. Do not send, deposit, or forward anything; the exercise is the drawing.`,
      ],
      notice: `Your diagram shows that a balance appearing on screen gives no protection to money you send out afterwards. The 300 you were told to keep sits on the page as the change for an unchecked note, not as pay.`,
      troubleshooting: `If you have netted the arrows into a 300 profit, redraw them as two transactions with two separate uncertainties; netting is exactly the move the scheme is built on. If your verification question would go to a number from the recruiter's email, find the company a different way first.`,
    },
    recall: {
      prompt: 'A buyer overpays for a used camera and asks you to forward the excess to their courier. What feature resembles the recruitment example?',
      hint: 'One unverified incoming payment is used to justify another outgoing one.',
      answer: `It is the same large note and the same request for change. An incoming payment you have not verified arrives, and it is used as the reason to send real money from your account to a destination the payer chose. If the overpayment later reverses, the excess you forwarded to the courier is your loss, and the camera may be gone too. The two movements feel like one tidy transaction and are two separate ones with very different certainty. Stop before forwarding anything, decline the arrangement, and check the payment's status with your own bank or payment provider through its verified route. A genuine buyer who overpaid can be refunded by the same provider once the funds are confirmed final; no courier needs your money in between.`,
    },
    quiz: {
      question: 'Which detail most directly creates the warning in the sample offer?',
      options: ['The job can be done remotely', 'An unverified payment must be forwarded to a named supplier', 'The company has a public website'],
      correctIndex: 1,
      explanation: `The forwarding instruction is the request for change: it turns an unverified incoming payment into real money leaving your account to a destination the recruiter picked, which is the whole mechanism of the scheme. Remote work is ordinary and proves nothing either way, and a public website is easy to have or to imitate; neither establishes a scam or a legitimate job.`,
    },
    takeaway: `An apparent payment paired with a request to forward money is a large note handed over for change, so draw the two arrows separately, 1,200 in from an unverified source and 900 out to a recruiter-chosen supplier, ask what the second arrow looks like when the first reverses, treat a balance on screen as unconfirmed until the bank calls it final, and verify the vacancy through the company's own channels before any money or document moves.`,
    sourceNote: 'The inherited FTC job-scam page describes fake-check equipment schemes. Amounts are invented; account handling and recovery options depend on actual circumstances.',
  },
  {
    id: 'money-034',
    outcome: `Treat a browser pop-up that says your device is infected as a web page making a claim: close it with normal controls, refuse remote access to its caller, and use only support you already trusted.`,
    scene: 'A browser pop-up demands a 49-unit repair and asks for remote access.',
    sections: [
      {
        title: 'A page can imitate a system warning',
        paragraphs: [
          `You are reading an ordinary article when the screen fills with a red box. It says your device is infected, lists some alarming file names, plays a tone, and offers a fictional 49-unit repair if you call the number shown now. The language is the language of security software. The layout looks like something the computer itself would say. Your hand is already reaching for the phone.`,
          `Stop at one fact: this is content displayed by a web page. A page can draw anything, including a convincing picture of a system alert, and drawing one is not the same as the operating system having found a fault. The warning is a claim, and the number beside it moves you from an unverified claim to an unverified helper picked by the same source. The 49 units are the smallest part of the danger. The larger part is what the helper will ask for next.`,
        ],
      },
      {
        title: 'The flyer that looks like a parking ticket',
        paragraphs: [
          `A piece of paper tucked under a windscreen wiper, yellow, with an official-looking crest and a reference number, says you have been fined and gives a number to call to settle it. It looks like a ticket. It came from whoever printed it, which might be the council and might be anyone with a printer. And the person who answers that number is chosen by the person who printed the flyer. If they then ask for your car keys so they can check the engine while you sort out the fine, the fine has stopped being the point.`,
          `The pop-up is the flyer, and remote access is the car keys. Remote-control software lets another person see and, depending on what you allow, operate parts of your computer. A caller on the line can show you ordinary technical screens and call them proof of infection, or ask you to open your banking while they watch. Granting access does not make their diagnosis true; it gives an unverified stranger a seat at your keyboard. That is why the 49-unit quote is not a ceiling on what this can cost. Do not install software, share approval codes, or open financial accounts because a web page and its caller told you to.`,
        ],
      },
      {
        title: 'Remote access changes what the stranger can do',
        paragraphs: [
          `Separate the two things on the screen. Underline what is merely claimed: infected, files at risk, repair needed, 49 units. Circle what is being requested: a phone call to their number, then control of the device. The claims cost nothing to make. The request is the part that changes what a stranger can do.`,
          `Then compare the two possible routes side by side. The pop-up's route: its number, its caller, its remote-access tool, its 49 units. Your route: the support you already had before this page loaded, which investigates whether anything is wrong without first assuming the flyer was telling the truth. Only one of these routes was chosen by you.`,
        ],
      },
      {
        title: 'Use the support route you already trust',
        paragraphs: [
          `Close the page with the browser's own controls, the tab's close button or the window's, not the buttons the warning draws for itself, which may lead wherever the page likes. If it will not close normally, or you are unsure what happened, ask for help through a route established before today: the device maker's published support, or a person you already trust. On a work machine, that means your real IT team and its process, not changing security settings yourself. If remote access was already granted, end the session, and report exactly what was installed or permitted to that trusted support straight away. This lesson does not diagnose any real infection or prescribe a cleanup. The practice is written on paper and visits no suspicious page.`,
          `Two habits. When a warning appears inside a browser, read it as a page making a claim and close it with the browser's own controls. And decide now, before any alert, which support route you would use, so that the number on the flyer never gets a chance to be the easiest option.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Who chose the support route?',
      alt: 'The pop-up supplies a 49-unit repair and remote-access request; verified support investigates without trusting that claim.',
      caption: `Compare who chose each route. The first was chosen by whoever drew the warning, and it ends with a stranger asking for the car keys, control of your device, after a 49-unit quote that limits nothing. The second existed before the page loaded and starts by checking whether anything is wrong at all. Illustrative browser incident.`,
      items: [
        { label: 'Pop-up’s route', detail: '49-unit repair claim; unverified caller requests device control.' },
        { label: 'Established support', detail: 'Report the browser event through a previously verified IT or device-support route.' },
      ],
    }],
    practice: {
      minutes: 6, needs: ['Paper', 'Pen'],
      steps: [
        `Write a harmless mock description on paper: a browser page claims the device is infected and offers a 49-unit remote repair through a number it displays. Keep it on paper; do not go looking for a real one.`,
        `Underline every word that is merely a claim, infected, at risk, repair, 49, and circle the one request that would hand over control: remote access. Seeing the claims and the request as different kinds of thing is the whole lesson.`,
        `Draft your response in three lines: close the page with the browser's own controls, do not call the number, and if anything still seems wrong, contact a support route you had before today. Write the actual route you would use.`,
        `Add a last line for the case where access was already granted: end the session and report what was installed or permitted to trusted support, with no passwords or financial details written on this page.`,
      ],
      notice: `Your plan treats the red box as a flyer under the wiper, a claim from an unknown printer, and nowhere in it does the page's own number or caller appear. The support route on your page was chosen by you, before anything flashed.`,
      troubleshooting: `If the support number on your plan came from the warning, it is the number on the flyer; replace it with a route that existed before the incident. If your plan includes paying the 49 to make it go away, remove it; the quote is not a cap and paying authenticates nothing.`,
    },
    recall: {
      prompt: 'A caller offers a free device check but asks for remote control while you open banking pages. What matters beyond the zero price?',
      hint: 'Price and access permissions are different risks.',
      answer: `The car keys. Free describes the price, and the price was never the danger; the request to control your device, with your banking open on screen, is. The caller's authority is still unverified, and a remote-access session lets them watch and potentially act while you are logged in to exactly the accounts worth reaching. Decline the session, close the call, and if you think something genuinely needs checking, use a support route you already trusted before this person rang. A free check from a stranger who wants the keys is not cheaper than a paid one; it is the same flyer with a different number on it.`,
    },
    quiz: {
      question: 'Which response best separates the sample warning from its unverified helper?',
      options: ['Pay only the quoted 49 units first', 'Ask the pop-up’s caller to prove the warning', 'Close the page normally and contact established support if needed'],
      correctIndex: 2,
      explanation: `Closing the page with the browser's own controls and going to a route you already had is the only option that does not run through the flyer's printer. Paying 49 first hands money to the source of the claim and caps nothing. Asking the pop-up's caller to prove the warning asks the flyer to vouch for itself, and whatever screens they show are still their screens.`,
    },
    takeaway: `A browser warning is a flyer under the windscreen wiper, printed by whoever wanted you to call the number on it, so read it as a page making a claim, close it with the browser's own controls, never hand over the car keys by granting remote access or opening banking for its caller, treat the 49-unit quote as no limit at all, and go only to a support route you trusted before the page ever loaded.`,
    sourceNote: 'The inherited FTC tech-support-scam resource provides the warning pattern. The pop-up is fictional; actual device incidents need trusted, context-specific support.',
  },
  {
    id: 'money-035',
    outcome: `Explain what the browser padlock does and does not tell you, then check a shop's identity, delivery, returns, and payment terms as separate questions, without entering card details to find out.`,
    scene: 'A headphone shop has HTTPS but unclear identity and return terms.',
    sections: [
      {
        title: 'What the connection tells you',
        paragraphs: [
          `A fictional shop lists the headphones you want at 40 units, plus 8 for delivery, 48 at checkout. The address begins with HTTPS and the browser shows its small padlock. For a lot of people that padlock is the whole safety check: secure, says the browser, so this must be fine. The card is halfway out of the wallet.`,
          `The padlock means one specific thing. The connection between your browser and the site is encrypted, so that what you type cannot be read by someone sitting between you and the server while it travels. That is worthwhile, and it is all. It does not say who runs the site, whether they have any headphones, whether they will post them, or whether the return policy means anything. A dishonest operator can run an encrypted site as easily as an honest one; encryption is routine and cheap. Connection security and seller reliability are two different questions that happen to share a checkout page.`,
        ],
      },
      {
        title: 'A sealed envelope from a stranger',
        paragraphs: [
          `A letter arrives in a properly sealed envelope. The seal tells you the letter was not opened and read on its way to you. It tells you nothing about the person who wrote it. A con artist can lick a stamp and seal a flap as well as anyone. Judging the sender by the seal would be odd, and yet that is exactly what the padlock invites: it is the seal, and the shop is the sender, and the two are unrelated.`,
          `So judge the sender separately, with the kinds of evidence a sender can actually provide. Check the exact domain, letter by letter, rather than a name that merely resembles a known shop. Look for a real identity behind the site: a named business, a physical address, contact details that work. Read the delivery and return terms as written. Then look outside the site for independent reports from more than one source, remembering that reviews can be bought and a brand-new shop may simply have no history yet. No complaints is not a clean bill; it can mean nobody has been caught out so far. Now add a second fictional shop, also encrypted, quoting 55 with delivery included and showing clearer contact and return information. The seven-unit difference is real. It proves nothing either way about which shop will actually post a parcel, and neither does polished wording. Each claim on each site needs the evidence appropriate to that claim.`,
        ],
      },
      {
        title: 'Investigate the party behind the order',
        paragraphs: [
          `Build a small grid with one row each for connection, seller identity, delivery terms, return terms, and payment terms, and a column for each shop. Fill the connection row for both: encrypted. Then fill the other rows only with facts the shop descriptions actually give you. Shop A: 48 total, seller unclear, returns unclear. Shop B: 55 total, contact and returns described but not yet checked. Every cell you cannot fill from evidence says unknown.`,
          `The grid makes one thing obvious: the padlock fills exactly one row. The rows that decide whether you get headphones are the ones beneath it, and the seal on the envelope cannot write in any of them.`,
        ],
      },
      {
        title: 'Do not submit payment details to investigate',
        paragraphs: [
          `Everything above can be checked from public information, without creating an account, typing a card number, or placing a small test order to see what happens; a test order is a real order with your real details. Look at whether the payment methods and the dispute route are documented, without assuming any particular method guarantees your money back. If the only option is a transfer that is hard to reverse, write that down as evidence alongside the rest. Let unknown cells stay unknown rather than letting the padlock answer for them. It is entirely acceptable to finish with an unresolved grid and decide not to buy; you do not have to prove a site is fraudulent to walk away from it. This exercise sorts kinds of evidence. It certifies no real shop as safe.`,
          `Two habits. When you see the padlock, say to yourself what it means, the envelope was sealed, and then start the real checks on the sender. And fill in a five-row grid from public evidence before any card detail is typed, leaving unknown wherever the shop has not shown you.`,
        ],
      },
    ],
    visuals: [{
      type: 'comparison', title: 'Two encrypted sample checkouts',
      alt: 'A 48-unit checkout has unclear seller terms; a 55-unit checkout has more documented terms, but neither is certified by HTTPS.',
      caption: `Notice first that both rows say HTTPS: the envelope is sealed in each case, which is why the padlock cannot choose between them. Then read what follows the semicolons, where the actual differences live, seller and returns unclear against claims that still need checking. Illustrative shops and totals; neither row is a verdict.`,
      items: [
        { label: 'Shop A: 48 total', detail: '40 + 8 delivery; HTTPS; seller and returns unclear.' },
        { label: 'Shop B: 55 total', detail: 'Delivery included; HTTPS; seller and return claims still need checking.' },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'The two fictional shop descriptions'],
      steps: [
        `Draw five rows, connection, seller identity, delivery, returns, and payment terms, with a column for each shop. Five rows is the point: the padlock gets one of them, not all of them.`,
        `Enter only the facts the two descriptions actually supply and write unknown in every other cell. Unknown is a real finding; a blank left to look like fine is the mistake.`,
        `Calculate both checkout totals, 48 and 55, and check that nothing from the connection row has leaked into the seller-identity row. The seal says nothing about the sender.`,
        `Write one independent check you would need before considering a purchase, such as confirming the business name and address outside the site. Enter no card details, create no account, and place no test order.`,
      ],
      notice: `Your grid has encrypted written once per shop and several unknowns beneath it, which is an accurate picture: the connection is settled and the questions that decide whether headphones arrive are still open. You can see exactly what a padlock did not answer.`,
      troubleshooting: `If any row says safe because HTTPS, cross it out and write what evidence that particular row needs; the seal cannot vouch for the sender. If you feel the need to buy something small to find out, stop; a test order is a real order with your real card.`,
    },
    recall: {
      prompt: 'A new ticket site uses HTTPS and has no complaints online. Does that establish that its event tickets are genuine?',
      hint: 'Absence of history is not independent confirmation of inventory.',
      answer: `No. The HTTPS is the sealed envelope: it says your card details travel to the site unread, and nothing about whether the site holds a single genuine ticket. The absence of complaints is weaker still, because a site that opened last month has had no time to disappoint anyone, and the first complaints usually arrive after the event has been and gone. What would count is evidence about the sender: whether the venue or promoter lists this site as an authorised seller, whether a real business with a traceable address stands behind it, and what the terms say about delivery and refunds. Until those rows are filled from independent sources, the grid reads unknown, and unknown is a reasonable reason not to buy.`,
    },
    quiz: {
      question: 'What does a valid HTTPS connection establish by itself in the sample?',
      options: ['Data in transit is encrypted', 'The seller’s stock is verified', 'The return promise will be honoured'],
      correctIndex: 0,
      explanation: `The padlock is the seal on the envelope: what you send travels encrypted between your browser and the site, and that is the whole of its promise. Whether the seller has any headphones, and whether its return policy will be honoured, are facts about the sender that no seal can establish; they need their own rows and their own evidence.`,
    },
    takeaway: `The browser padlock is the seal on an envelope, proof the letter travelled unread and no comment on who wrote it, so say what it means and move on to the sender: check the exact domain, a real business behind the site, delivery and return terms as written, and independent reports from more than one source, fill a five-row grid with unknown wherever evidence is missing, type no card details to find out, and accept that an unresolved grid is a fair reason not to buy.`,
    sourceNote: 'The inherited FTC online-shopping source supplies background. Both shops are invented; this worksheet provides no seller certification or universal payment protection.',
  },
  {
    id: 'money-036',
    outcome: `Split a loan payment into the part that pays the month's interest and the part that actually reduces what you owe, so a 50-unit payment is correctly read as 40 off the debt, not 50.`,
    scene: 'A small fictional loan payment covers interest before reducing the amount borrowed.',
    sections: [
      {
        title: 'The payment has more than one job',
        paragraphs: [
          `A fictional loan stands at 1,000 units at the start of the month. That figure is the principal, the amount actually borrowed and still outstanding. In this model, interest of one percent a month is charged on the opening principal before any payment, so 10 units. Then you pay 50. You watch 50 leave your account and expect the debt to read 950.`,
          `It reads 960. Nothing has gone wrong; the payment simply had two jobs. Under the stated rule, interest first, the first 10 of your 50 paid the month's cost of borrowing, and only the remaining 40 came off the principal. The 50 that left your account is one number. What it did is two numbers, and the debt only moves by the second one. Until you separate the cost of borrowing from the return of borrowed money, the balance will keep looking wrong.`,
        ],
      },
      {
        title: 'Bailing a boat with a slow leak',
        paragraphs: [
          `Picture bailing water out of a small boat that has a slow leak. Every minute a little water seeps back in. Each bucket you throw over the side first undoes the seepage, and only what is left of the bucket actually lowers the level. If the leak lets in one cup a minute and your bucket holds five cups, the level drops by four cups per bucket, not five. Nobody bailing would call that unfair; it is just what a leak does.`,
          `The debt is the water. The interest is the leak, and it seeps in proportion to how much water is there: one percent of the level each month. Each payment is a bucket. From the 50-unit bucket, 10 undoes this month's seepage and 40 lowers the level, so 1,000 becomes 960. You can check it the other way round: opening debt 1,000, plus 10 of interest that seeped in, minus the 50 bucket, is also 960. The wrong answer, 950, comes from throwing the whole bucket at the level and forgetting the leak. The two parts of the payment add to 50; the interest charge and the remaining principal are different quantities answering different questions. This example has no fees, no new borrowing, no penalties, and no unpaid interest from earlier months, so the leak and the bucket are the only two things moving.`,
        ],
      },
      {
        title: 'Allocate before subtracting from principal',
        paragraphs: [
          `Now bail for a second month. The level is 960, so the leak is smaller: one percent of 960 is 9.60. The same 50-unit bucket now spends 9.60 on seepage and 40.40 on the level, leaving 919.60. The payment did not change. More of it reached the principal because less water had seeped in, and less seeped in because the level was lower. That is the quiet reward for every bucket: each one makes the next one slightly more effective.`,
          `Write it as three labelled rows per month: opening principal, interest charged, payment, and underneath, how the payment splits and what principal remains. Month one: 1,000, 10, 50, split 10 and 40, remaining 960. Month two: 960, 9.60, 50, split 9.60 and 40.40, remaining 919.60. The rows make the leak visible, which is the only thing that stops you subtracting the whole bucket.`,
        ],
      },
      {
        title: 'A smaller principal changes the next split',
        paragraphs: [
          `Real agreements write their own rules about when interest accrues, how a payment is allocated, and what happens with an extra payment, and a real statement may not follow this tidy monthly model at all. Read the contract's rules before applying the example to it. Tracking principal in this way explains why a debt falls more slowly than the payments suggest; it does not tell you what payment is affordable, and it does not mean every kind of loan allocates money interest-first. It is a way of reading a balance, not a plan for one.`,
          `Two habits. Whenever a payment leaves and the balance drops by less, look for the leak and name it: how much of this payment was interest. And keep two separate lines in your head for any debt, what the borrowing costs this month and what you still owe, because only one of them is lowered by the bucket.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Inside the first 50-unit payment', unit: 'units',
      alt: 'Ten units pay interest and forty reduce principal, together making the fifty-unit payment.',
      caption: `Look at the two bars as one bucket split in two: the short bar is the water that seeped in this month, 1% of 1,000, and the tall bar is the part that actually lowered the level. Together they are the 50 you paid, and only the tall bar changed the debt, from 1,000 to 960. Illustrative interest-first allocation with no fees.`,
      items: [
        { label: 'Interest paid', detail: '1% of opening 1,000.', value: 10 },
        { label: 'Principal repaid', detail: '50 payment less 10 interest.', value: 40 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        `Write three labelled rows for month one: opening principal 1,000, interest charged 10, payment 50. Labelling the interest as its own row is what makes the leak visible before you touch the bucket.`,
        `Split the 50: 10 to interest first, 40 to principal, and write the remaining principal, 960. Check it the other way, 1,000 plus 10 minus 50, to see that both routes agree.`,
        `Carry 960 into month two as the new opening principal and calculate one percent of it, 9.60. The leak shrank because the level fell; write that sentence beside the number.`,
        `Split a second 50-unit payment, 9.60 to interest and 40.40 to principal, and verify that 919.60 remains. The same bucket did more work this month, and you can point to the reason.`,
      ],
      notice: `The second month's interest is 9.60 rather than 10, so 40.40 of the same payment reached the principal instead of 40. You have watched one bucket make the next bucket more effective, which is the whole engine of paying a loan down.`,
      troubleshooting: `If month one ends at 950, you threw the whole bucket at the level and forgot the leak; subtract only the part of the payment left after the 10 of interest. If month two shows 10 of interest again, you did not carry the lower principal forward; the leak is one percent of 960, not of 1,000.`,
    },
    recall: {
      prompt: 'A 500-unit principal incurs 2% monthly interest before a 30-unit payment. With interest paid first and no fees, what remains?',
      hint: 'Find interest, then the part of the payment left for principal.',
      answer: `480 units. Find the leak first: two percent of the opening 500 is 10 units of interest. The 30-unit bucket spends 10 of itself undoing that seepage, and the remaining 20 lowers the level, so 500 minus 20 is 480. Checking the other way, 500 plus 10 minus 30 is also 480. The full 30 that left your account was not all debt reduction; a third of it was the cost of having borrowed 500 for a month. Next month, under the same rules, the leak would be two percent of 480, which is 9.60, and a little more of the same 30 would reach the principal.`,
    },
    quiz: {
      question: 'How much of the first sample 50-unit payment reduces principal?',
      options: ['50 units', '40 units', '10 units'],
      correctIndex: 1,
      explanation: `The bucket holds 50, the leak took 10, and 40 lowered the level: interest is paid first, so 1,000 becomes 960 rather than 950. Answering 50 throws the whole bucket at the principal and forgets that a month of borrowing cost something. Answering 10 picks out the interest portion, which is the part that did not reduce the debt at all.`,
    },
    takeaway: `A loan payment is a bucket thrown from a leaking boat, so the first part of every payment undoes the month's seepage and only the rest lowers the level: 50 paid against 1,000 at 1% is 10 of interest and 40 off the principal, leaving 960, and next month the smaller leak of 9.60 lets 40.40 of the same bucket count; write interest as its own row, carry the lower principal forward, and read the real agreement for how it actually allocates.`,
    sourceNote: 'The inherited CFPB credit resource supplies background. Monthly interest and allocation order are explicit example rules, not a reconstruction of an actual statement.',
  },
  {
    id: 'money-037',
    outcome: `Read a card statement's minimum as this month's requirement only, and show with one cycle why the same payment leaves the balance lower in one case and higher in another once new purchases count.`,
    scene: 'A fictional card balance changes differently with and without new purchases after the same minimum payment.',
    sections: [
      {
        title: 'Minimum answers a limited question',
        paragraphs: [
          `The statement arrives with three numbers in bold: a balance, a minimum payment, and a due date. You pay the minimum on time, every month, and feel that the card is under control. Then one month you notice the balance is higher than it was a year ago, and the feeling of control turns out to have been a feeling about the due date, not about the debt.`,
          `The minimum is the smallest amount the agreement requires for this billing period, to keep the account in good standing. That is the whole of what it tells you. It is not a forecast of when the debt will be gone, and next month's minimum can be different. Between one payment and the next, interest is added, sometimes fees, and anything new you buy. Reading only the minimum leaves all of those moving parts out of view. Meeting this month's requirement and clearing the debt are related questions with different answers.`,
        ],
      },
      {
        title: 'Pulling the plug with the tap still running',
        paragraphs: [
          `A bath is a third full. You pull the plug for ten seconds and some water drains out. Whether the level is lower afterwards depends entirely on whether the tap was running while you did it. With the tap off, the level falls. With the tap on, you can drain the same amount and watch the water rise. The ten seconds with the plug out were identical both times. The tap made the difference, and the tap is not the drain's fault.`,
          `Your payment is the plug. New purchases are the tap. Run a simplified fictional cycle to see it. The balance starts at 500 units. The cycle adds 2% interest, which is 10, then receives a 20-unit payment, with no fees. Tap off: 500 plus 10 minus 20 is 490, and the balance fell. Now turn the tap on with a single 30-unit purchase straight after the payment: 490 plus 30 is 520, and the balance rose. The payment was 20 in both cases. The 20 leaving your account is not proof that the debt fell by 20, or at all; it is proof that the plug came out for a moment. The 30 is not interest and it is not a failure of the payment. It is the tap.`,
        ],
      },
      {
        title: 'Hold the payment constant and change spending',
        paragraphs: [
          `Write the cycle as four changes in their stated order: opening balance, interest added, payment made, purchases added. Scenario one, no purchase: 500, plus 10, minus 20, no purchase, ending 490. Scenario two: 500, plus 10, minus 20, plus 30, ending 520. The two columns share their first three lines exactly, which is what makes the fourth line so easy to see.`,
          `This is the test to apply to any payoff illustration. Most of them assume the tap is off: no new borrowing from today. If you keep buying on the card, the illustration is describing a different bath from yours, and its payoff date belongs to someone else. Do not stretch the example's fixed 20 payment into a real payoff date, either; a real minimum follows the card's own formula, which usually changes as the balance changes, and real interest follows the card's own rules.`,
        ],
      },
      {
        title: 'Read the assumptions beside the timeline',
        paragraphs: [
          `On a real statement, find four things as separate facts: the balance, the minimum, the due date, and whatever the statement says about how long repayment would take at the minimum and what that estimate assumes. The assumptions line is the one that says whether the tap is on or off. If making the payment is becoming difficult, contact the provider through a route you already have and ask what options exist, before counting on an arrangement nobody has agreed to. Going quiet does not pause the obligation. This exercise explains how to read a statement; it is not a repayment strategy and not a promise that help will be offered.`,
          `Two habits. Each month, read the minimum as this month's requirement and nothing more, and look separately at whether the balance went up or down since last time. And whenever you see a payoff estimate, find the line that says what it assumes about new purchases, because that line decides whether it is about your bath.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Same cycle, same 20-unit payment', unit: 'units',
      alt: 'The ending balance is 490 without a new purchase and 520 after a new 30-unit purchase.',
      caption: `Look at the gap between the bars first: 30 units, which is exactly the new purchase, the tap left running. Both bars contain the same 500 start, the same 10 of interest, and the same 20-unit payment, so nothing about the payment explains the difference. Illustrative single cycle; the purchase comes last and no fees or further interest are included.`,
      items: [
        { label: 'No new purchase', detail: '500 + 10 interest less 20 = 490.', value: 490 },
        { label: 'New 30-unit purchase', detail: '490 + 30 = 520.', value: 520 },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        `Make a fictional statement card with an opening balance of 500, a payment of 20, and a clearly labelled example due date. Writing the due date and the balance as separate items is the first step in not confusing them.`,
        `Run the cycle with two percent interest added before the payment and no new borrowing: 500 plus 10 minus 20. This is the bath with the tap off, ending at 490.`,
        `Run it again with a 30-unit purchase added after the payment and compare the two endings, 490 and 520. The same payment appears in both columns, which is the point of keeping them side by side.`,
        `Write down what a longer payoff estimate would need before you could trust it: future interest rates, future payment amounts, and whether any new purchases are assumed. These are the lines that tell you whose bath is being described.`,
      ],
      notice: `The payment happened in both scenarios, and only the no-purchase column ends below 500. You can now see that paying on time and reducing the debt are two different events, separated on your page by a single line labelled purchase.`,
      troubleshooting: `If both columns end at 490, you left the tap off in the second scenario; add the 30-unit purchase as its own line after the payment. If the second column ends at 510, you skipped the 10 of interest; the order is interest, payment, purchase.`,
    },
    recall: {
      prompt: 'A cycle begins at 300, adds 6 interest, receives 15 payment, then adds a 25 purchase. What ending balance tests the payoff assumption?',
      hint: 'Preserve all four changes in their stated order.',
      answer: `316. Keep the four changes in order: 300, plus 6 of interest, minus the 15 payment, plus the 25 purchase, which is 316, and the balance has gone up despite the payment being made. A payoff estimate that assumes no new borrowing would have run the first three lines only and stopped at 291, a balance going down. Both numbers are correct for the bath they describe; only one of them is your bath. The difference between them, 25, is exactly the tap, so the ending balance that tests the estimate's assumption is the one that includes the purchase, because that is the one that shows whether the assumption was true of you.`,
    },
    quiz: {
      question: 'What does the sample balance become after interest, payment, and the new purchase?',
      options: ['490 units', '480 units', '520 units'],
      correctIndex: 2,
      explanation: `Follow the four changes in order: 500, plus 10 of interest, minus the 20 payment, plus the 30 purchase, which is 520; the tap was running while the plug was out. The 490 answer is the tap-off scenario and leaves out the purchase. The 480 answer leaves out both the interest and the purchase, treating the payment as if it acted alone.`,
    },
    takeaway: `Paying the minimum is pulling the plug for ten seconds, and whether the bath goes down depends on whether the tap was running, so read the minimum as this month's requirement only, run the cycle as interest, payment, then purchases, 500 becomes 490 with no purchase and 520 with one, and before trusting any payoff estimate find the line that says what it assumes about new spending, because that line decides whether it is describing your balance at all.`,
    sourceNote: 'The inherited CFPB credit source provides statement background. This single-cycle model is not a real minimum-payment formula or payoff schedule.',
  },
  {
    id: 'money-038',
    outcome: `Read a variable rate as a formula, an outside reference plus a fixed margin, add the margin in percentage points rather than as a percentage, and find the reset dates, caps, and floors that govern it.`,
    scene: 'A fictional borrowing agreement resets its rate using an external reference plus a margin.',
    sections: [
      {
        title: 'The quoted rate can be a formula',
        paragraphs: [
          `The agreement does not state a rate. It states a recipe: the annual rate is a reference rate plus three percentage points. The reference rate is a number set outside the contract, published by someone else, which the agreement borrows for its calculation. The three points are the margin, the part the lender adds, and that part is fixed by the contract. Today the reference is 4%, so today's rate is 7%.`,
          `At the next reset date written into the agreement, suppose the reference has moved to 5%. The rate becomes 8%, with the margin unchanged at three points. Nothing in your contract altered, and your borrowing still got dearer, because the formula pulls in a number from outside. That is why today's rate is not enough to know. You need the formula and the dates on which it is re-run.`,
        ],
      },
      {
        title: 'An oven that runs ten degrees cold',
        paragraphs: [
          `Suppose your oven runs ten degrees cold, so you always set it ten degrees above whatever the recipe says. A recipe at 180 goes in at 190; a recipe at 200 goes in at 210. The correction is the same ten degrees every time, whatever the recipe. What you would never do is add ten percent instead: 180 plus ten percent is 198, and 200 plus ten percent is 220, a different adjustment for every recipe and the wrong one for your oven. Degrees and percent-of-the-temperature are two different operations, and only one of them describes a fixed correction.`,
          `A margin in percentage points is the ten degrees. Three points added to a 5% reference is 5 plus 3, which is 8%. Adding three percent of the rate instead would give 5 times 1.03, which is 5.15%, a different operation and the wrong one. To see what the difference means in money, hold a fictional 1,000-unit principal unchanged for a full year and use simple interest. At 7%, the year's interest is 70 units. At 8%, it is 80. Those are two alternative years, not two charges to add together. And a real loan does not sit at 1,000 all year; repayments shrink the balance as they go, so this constant-principal figure shows the effect of the rate, not what a real repayment would be.`,
        ],
      },
      {
        title: 'Percentage points are not a percentage of the rate',
        paragraphs: [
          `Write the formula once and substitute. Rate equals reference plus 3 points. Reference 4%: rate 7%. Reference 5%: rate 8%. Then the money line for each on 1,000 units for a year: 1,000 times 0.07 is 70; 1,000 times 0.08 is 80. The ten-unit gap is what a one-point move in the reference does to a year's interest on this frozen balance.`,
          `Now the common error, written out so you recognise it. Reference 5% increased by 3%: 5 times 1.03 equals 5.15%. That is the oven set to 198 instead of 190. The word points is the signal: when a contract says percentage points, it means add, like degrees, not scale.`,
        ],
      },
      {
        title: 'Find the boundaries and effective date',
        paragraphs: [
          `The formula usually comes with fences. A cap is the highest the rate can go under the stated terms, a floor is the lowest, and an introductory rate can replace the formula for an opening period and then hand back to it. Read how each fence interacts with the recipe: a formula result of 5% against a 6% floor gives 6%. Then find the dates. The reference moving in the news today does not mean your rate changes today; it changes on the agreement's reset date, under the agreement's rules. Fixed-rate wording needs the same scrutiny, since fixed is usually fixed for a stated period, after which a formula may take over. This example predicts no movement in any rate and picks no loan. Its purpose is to turn a rate headline into a calculation whose inputs and dates you can inspect.`,
          `Two habits. When a rate is quoted as reference plus a margin, add the margin as points, like degrees on the oven, and write the resulting rate for at least two reference values. And before relying on any rate, find three dates and two fences: the next reset, the end of any introductory period, the end of any fixed period, and the cap and floor.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'One-year interest on constant principal', unit: 'units',
      alt: 'On an unchanged 1,000 units, a 7% simple annual rate costs 70 and an 8% rate costs 80.',
      caption: `Look at the labels before the bars: the margin is the same three points in both, and only the reference moved, from 4% to 5%, like the same oven correction applied to two different recipes. The ten-unit gap between the bars is what that one-point move costs on a frozen 1,000 for a year. Illustrative; repayments and fees are excluded.`,
      items: [
        { label: 'Reference 4%, rate 7%', detail: '1,000 x 0.07 = 70.', value: 70 },
        { label: 'Reference 5%, rate 8%', detail: '1,000 x 0.08 = 80.', value: 80 },
      ],
    }],
    practice: {
      minutes: 7, needs: ['Paper', 'Calculator'],
      steps: [
        `Write the formula as a sentence, rate equals reference plus three percentage points, then substitute references of 4% and 5% to get 7% and 8%. Writing points in full is a reminder that this is addition, like degrees on the oven.`,
        `Calculate simple one-year interest on an unchanged 1,000-unit principal at each rate, 70 and 80, and label them as two alternative years rather than a sum.`,
        `Draw blank fields for the next reset date, the cap, the floor, and any introductory period, and leave them blank rather than assuming they do not exist. An empty field is a question for the contract; a missing field is an assumption.`,
        `Write one sentence explaining why the ten-unit difference is not automatically the change in a real monthly repayment, mentioning that a real balance falls over the year and that repayments follow the contract's own schedule.`,
      ],
      notice: `You have rates of 7% and 8% from one unchanged margin, alternative yearly interest of 70 and 80 on a frozen balance, and four blank fields that the contract has to fill. The headline rate has become a calculation with visible inputs and dates.`,
      troubleshooting: `If your second rate is 5.15%, you set the oven to 198: you multiplied the reference by 1.03 instead of adding three points. If you added 70 and 80 together, separate them; they are two different years under two different references, not one bill.`,
    },
    recall: {
      prompt: 'A formula gives reference 2% plus a three-point margin, but the contract states a 6% minimum rate. What applies under those terms?',
      hint: 'Calculate first, then apply the stated floor.',
      answer: `6%. Run the recipe first: 2 plus 3 points is 5%, the oven set ten degrees above a cool recipe. Then check the fences: the contract says the rate cannot go below 6%, and 5% is below it, so the floor takes over and the rate under these hypothetical terms is 6%. The formula still exists and still matters, because if the reference later rises to 4%, the recipe gives 7%, which clears the floor and applies in full. Floors and caps do not replace the formula; they bound its result, which is why both the calculation and the fences have to be read together, along with the date on which the reset actually happens.`,
    },
    quiz: {
      question: 'With a 5% reference and a three-percentage-point margin, before other conditions, what is the rate?',
      options: ['8%', '5.15%', '7%'],
      correctIndex: 0,
      explanation: `Points are degrees on the oven: you add them, so 5 plus 3 is 8%. The 5.15% answer multiplies the reference by 1.03, treating three points as three percent of the rate, which is a different operation and not what the contract says. The 7% answer uses the earlier 4% reference, which is last reset's recipe, not this one's.`,
    },
    takeaway: `A variable rate is a recipe temperature plus a fixed oven correction, so read it as reference plus margin, add the margin in points like degrees, 5% plus three points is 8% and never 5.15%, write the result for more than one reference value, 70 and 80 on a frozen 1,000 for a year, and then find the reset dates, the cap, the floor, and the end of any introductory or fixed period, because the headline is only what the recipe said this morning.`,
    sourceNote: 'The inherited CFPB credit resource supplies background. Rates are invented; simple-interest comparisons exclude fees, amortisation, and any jurisdiction-specific rate disclosure.',
  },
  {
    id: 'money-039',
    outcome: `Judge a debt-switch offer by totalling every remaining payment from today plus the switching fee, 1,200 against 1,490 here, and keep the lower monthly figure as a separate affordability question.`,
    scene: 'A fictional debt-switch offer cuts the monthly payment but doubles the remaining term.',
    sections: [
      {
        title: 'The smaller payment changes the calendar',
        paragraphs: [
          `An existing fictional debt has twelve payments of 100 units left. An offer arrives: switch to us, we clear that debt in full, and you pay just 60 a month. There is a 50-unit switching fee, payable now. The letter leads with the 60, and 60 is genuinely 40 less than 100 every single month, which for a tight budget is not nothing.`,
          `Read on and the 60 runs for twenty-four months, not twelve. A monthly payment describes one outflow on one date. It says nothing about how many such dates remain, and the offer has quietly doubled them. The headline is true and the calendar has changed underneath it. Before anyone calls this cheaper, the number of payments and the price of making the switch need to be written next to the 60.`,
        ],
      },
      {
        title: 'The gentler path up the same hill',
        paragraphs: [
          `Two paths climb the same hill. One is steep: twelve big steps and you are at the top. The other is gentle: each step is noticeably easier, but there are twenty-four of them, and there is a toll booth at the bottom charging to use it. Both reach the summit, which here is a debt cleared. The gentle path is kinder to your knees on every step and longer in total, and the toll is paid before you have climbed anything. Easier steps and a shorter walk are different things, and a path can offer one while taking away the other.`,
          `Total each path from where you are standing now. Keeping the existing schedule: twelve payments of 100 is 1,200 units still to pay. Switching: twenty-four payments of 60 is 1,440, plus the 50 toll at the start, which is 1,490. The replacement costs 290 more over its life than staying put, even though every one of its steps is 40 smaller. Payments you have already made are the ground behind you and belong to neither path, so leave them out. This assumes the replacement really settles the old debt completely and that there are no other charges; if the old lender wants a settlement fee or a balance remains, that goes into the switching column as well.`,
        ],
      },
      {
        title: 'Total what happens from today onward',
        paragraphs: [
          `Four columns, two rows. Remaining payment count: 12 against 24. Payment size: 100 against 60. Separate fee: none against 50. Total from today: 1,200 against 1,490. Then two lines underneath, on purpose kept apart: monthly change, 40 lower; total change, 290 higher.`,
          `Those two lines are both true and they pull in opposite directions, which is why they must not be merged into a single verdict. The offer makes each month easier and the whole debt dearer. Anyone deciding needs to see both numbers at once, and the letter was built to show only one.`,
        ],
      },
      {
        title: 'Keep affordability and cost as separate questions',
        paragraphs: [
          `A lower monthly payment can still be worth discussing when the current schedule genuinely cannot be met, because a missed payment has its own costs. That does not erase the longer term or the higher total; it means the person is choosing the gentler path with open eyes. Equally, the cheaper total is no use if its steps cannot be climbed on time. A real comparison needs the settlement amount, whether the rates are fixed or can change, every mandatory fee, the remaining schedule for both paths, and whatever consequences come with stretching a debt out. Check whether a quoted total already includes its fees, so each toll is counted once. This worksheet does not recommend switching or staying. It lays the tradeoff out and names the missing facts, so that the decision is not made from one small monthly number.`,
          `Two habits. For any offer that lowers a payment, total every remaining payment from today plus every fee, for both paths, before you look at the monthly figure again. And write the monthly change and the total change on two separate lines, so a kinder step and a longer climb can both be seen.`,
        ],
      },
    ],
    visuals: [{
      type: 'bars', title: 'Remaining outlay from today', unit: 'units',
      alt: 'Keeping the old schedule costs 1,200 units; the replacement totals 1,490.',
      caption: `Look at the taller bar and read its detail: twenty-four gentler steps plus a 50-unit toll at the bottom come to 1,490, against twelve steep steps at 1,200. The 40 saved each month is nowhere on this chart, because this chart answers the other question, the length of the whole climb. Illustrative fixed schedules with no other charges.`,
      items: [
        { label: 'Keep: 12 months', detail: '12 x 100 = 1,200.', value: 1200 },
        { label: 'Switch: 24 months', detail: '24 x 60 + 50 = 1,490.', value: 1490 },
      ],
    }],
    practice: {
      minutes: 8, needs: ['Paper', 'Calculator'],
      steps: [
        `Draw four columns, remaining payment count, payment size, separate fee, and total, with one row for keeping and one for switching. The columns force the payment count onto the page beside the payment size, where the letter did not put it.`,
        `Calculate both totals using only money that leaves from today onward: 12 times 100 is 1,200, and 24 times 60 plus 50 is 1,490. The payments already made are ground behind you and belong to neither row.`,
        `Write two separate lines under the table: monthly change 40 lower, total change 290 higher. Keeping them apart is the whole point; merged into one sentence, one of them always wins unfairly.`,
        `List the questions you would need answered for a real offer, whether the old debt is fully settled, and what charges are not yet shown, without applying for or changing any loan. The exercise ends on paper.`,
      ],
      notice: `The smaller monthly figure sits on your page next to twelve extra payments and a total 290 units higher, and all three are true at once. The offer's headline was the easiest step, not the shortest walk.`,
      troubleshooting: `If switching totals 1,440, you left the toll booth out; add the separately stated 50 once. If it totals 1,540, you have charged the toll twice, probably once as a fee and once inside a quoted total; count it in one place only.`,
    },
    recall: {
      prompt: 'Six remaining payments of 100 can be replaced by twelve of 55 plus a separate 20 fee. What tradeoff appears?',
      hint: 'Compare both payment size and total remaining outlay.',
      answer: `An easier step and a longer, dearer climb. Keeping the current path costs 6 times 100, which is 600 units from today. Switching costs 12 times 55, which is 660, plus the 20 toll at the start, which is 680. So each month is 45 lighter, 55 instead of 100, while the remaining total is 80 higher and the climb lasts twice as long. Both facts go on separate lines. If the current 100 a month genuinely cannot be paid, the gentler path may still be the honest choice, made knowing it costs 80 more; if it can, the steep path is cheaper and shorter. The comparison assumes the new arrangement settles the old debt completely and that no other charges exist.`,
    },
    quiz: {
      question: 'What is the replacement’s total remaining outlay in the main example?',
      options: ['1,440 units', '1,490 units', '1,200 units'],
      correctIndex: 1,
      explanation: `Twenty-four gentler steps of 60 come to 1,440, and the 50-unit toll at the bottom of the path makes 1,490. Stopping at 1,440 forgets the switching fee, which is paid before a single step is climbed. The 1,200 is the other path entirely, twelve payments of 100 on the existing schedule.`,
    },
    takeaway: `A lower monthly payment is a gentler path up the same hill, so count the steps and the toll before calling it cheaper: twelve payments of 100 is 1,200 from today, twenty-four of 60 plus a 50 fee is 1,490, and the 40 saved each month sits beside 290 more in total; write the monthly change and the total change on separate lines, count every fee exactly once, and let affordability and cost each answer its own question.`,
    sourceNote: 'Inherited CFPB credit and instalment sources provide background. These original schedules omit changing rates and are not refinancing or affordability advice.',
  },
  {
    id: 'money-040',
    outcome: `Put every instalment plan and every ordinary bill on one calendar, add up what each date actually demands, and treat a pending refund as pending until the provider confirms what is still due.`,
    scene: 'Shoe, lamp, and travel instalments collide with a household bill on the same day.',
    sections: [
      {
        title: 'Checkout screens show only one commitment',
        paragraphs: [
          `Three purchases, three checkouts, three months apart in your memory: a pair of shoes, a lamp, and a travel booking, each split into instalments because the screen offered it. Each plan has two payments of 40 units left, due on November 5 and November 19. On each checkout screen, 40 looked like nothing. Each screen was telling the truth about its own plan and nothing about the other two.`,
          `Your account does not see three plans. It sees November 5, on which three payments of 40 are collected: 120 units. Then November 19, another 120. Across the three plans, six payments of 40 remain, 240 in all. Splitting a purchase into instalments changes when the money leaves. It does not change whether the obligation exists, and the small first payment you made at checkout does nothing about the dates still ahead.`,
        ],
      },
      {
        title: 'Three friends and one Saturday morning',
        paragraphs: [
          `Three friends each ask for just half an hour of your Saturday morning. One wants help moving a bookcase, one wants a lift to the station, one wants you to look at a leaking tap. Each request is small and each is reasonable. None of them knows about the others. Written in one diary, they land on the same morning, and the morning has fewer hours than the three requests put together. The problem was never any single favour. It was that nobody kept the diary.`,
          `Instalment plans are the friends and your account is the morning. Suppose 150 units are available before November 5, with no new income before then, and a separate household bill of 50 is also due that day. The day needs 120 for the three plans plus 50 for the bill, 170 in all, against 150 available: a 20-unit shortfall. Set each plan beside the 150 on its own screen and all three look fine. Set them in one diary and the morning is overbooked. Keep a single calendar or ledger for every plan and every essential bill, and add only the individual obligations. The 120 is the sum of three 40s, not a fourth payment to be added on top of them.`,
        ],
      },
      {
        title: 'Add ordinary bills to the same dates',
        paragraphs: [
          `Build the diary. One row for shoes, one for the lamp, one for travel, each with 40 on November 5 and 40 on November 19. Add the household bill as its own row with 50 on November 5. Then total each date downward: November 5 is 40 plus 40 plus 40 plus 50, which is 170; November 19 is 120. Write the available 150 at the top and the November 5 shortfall of 20 beside the total.`,
          `The diary is boring to make and that is its value. Each checkout screen was designed to show one friend's half-hour. Only the diary shows the morning.`,
        ],
      },
      {
        title: 'A return does not instantly rewrite the schedule',
        paragraphs: [
          `Now suppose you send the lamp back. Posting the return and the instalment schedule being adjusted are two separate events, and the second happens when the provider says so, not when the parcel leaves your hands. Until the provider confirms what remains due, keep the lamp's row in the diary as it is; do not cross out its payment or cancel the collection on the strength of a refund you hope is coming. Check how the actual agreement handles automatic collection, late charges, and the way refunds are applied. Notice, too, that a small first payment at checkout always leaves future dates behind it, and those dates can overlap with whatever you buy next month. This exercise is about seeing commitments together. It does not recommend instalment products or assume that every borrower enjoys the same protections. If the diary shows a gap, seek verified information about options rather than counting a hoped-for refund as money.`,
          `Two habits. The moment any checkout offers instalments, write every future payment date into the one calendar that already holds your bills, before you confirm. And when a date totals more than you will have, treat it as a shortfall to plan for now, not something a refund or a later payday will quietly fix.`,
        ],
      },
    ],
    visuals: [{
      type: 'timeline', title: 'One calendar for all three plans',
      alt: '150 is available before November 5, when instalments need 120 and a household bill needs 50; another 120 is due November 19.',
      caption: `Look at the two November 5 entries together: the three plans make 120 and the household bill adds 50, so the morning is booked for 170 against 150 available, a 20-unit shortfall that no single checkout screen showed. Then notice November 19 waiting with another 120. Illustrative dates and units; spacing is not proportional.`,
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
        `Make one row each for shoes, lamp, and travel, and write 40 under both dates, November 5 and November 19, for each. Three rows in one diary is already more than any checkout screen ever showed you.`,
        `Add each date downward and label November 5's plan total 120, as the sum of three 40s. Write sum beside it so you do not later add it again as if it were a fourth payment.`,
        `Add the separate 50-unit household bill as its own row on November 5 and compare the day's 170 with the 150 available. The 20-unit gap is the overbooked morning.`,
        `Mark a hypothetical lamp refund as pending in the margin and leave the lamp's payment row exactly as it was. The row changes when the provider confirms the new schedule, not when you post the parcel.`,
        `Write one question you would put to the provider about refund timing or the remaining repayment schedule, so the pending note has a route to becoming a confirmed one.`,
      ],
      notice: `The single calendar shows a 20-unit shortfall on November 5 that three separate checkout screens, each honest about its own 40, could never have shown. The lamp's row is still there, with pending written beside it rather than through it.`,
      troubleshooting: `If November 5 totals 290, you added the 120 sum on top of the three 40s it was made of; add only the individual obligations. If you crossed out the lamp's payment because the return is in the post, restore it until the provider confirms what is due.`,
    },
    recall: {
      prompt: 'Payments of 25, 35, and 20 fall before payday, with only 70 available. What must a combined calendar show?',
      hint: 'The account funds the sum, not the smallest instalment.',
      answer: `A shortfall of 10 before payday. The three payments are three friends booking the same morning: 25 plus 35 plus 20 is 80, and 70 is available, so the date is overbooked by 10. Each payment on its own screen is comfortably under 70, which is exactly why they have to be written into one diary. The calendar must show the three rows, the date total of 80, the 70 available, and the 10 gap, with payday placed after the date so that it is visibly too late to help. A refund you are expecting, or any later income, sits on its own later date and does not fund this one; the 10 has to be planned for now.`,
    },
    quiz: {
      question: 'What is required on November 5 including the sample household bill?',
      options: ['120 units', '90 units', '170 units'],
      correctIndex: 2,
      explanation: `The morning holds four bookings: three instalments of 40 make 120, and the 50-unit household bill brings the day to 170. Ninety is what you would get by counting only one plan plus the bill, a single friend's half-hour. The 120 answer counts all three plans and forgets that the ordinary bill lands on the same date.`,
    },
    takeaway: `Instalment plans are three friends each booking half an hour of the same Saturday morning, so keep one diary: write every plan's future dates beside your ordinary bills, add only the individual payments on each date, 40 plus 40 plus 40 plus 50 is 170 against 150 available on November 5, treat the gap as something to plan for now, and leave a returned item's payment row in place until the provider confirms what is actually still due.`,
    sourceNote: 'Inherited CFPB instalment and emergency-fund resources provide background. The plans are fictional; refund handling and borrower protections depend on actual terms and jurisdiction.',
  },
]