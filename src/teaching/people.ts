import type { LessonGuide } from './types'

// Original teaching examples. Source links remain on the corresponding lessons.
// Practice minutes are planning budgets, not tested communication prescriptions.
export const peopleGuides: LessonGuide[] = [
  {
    id: 'people-001',
    outcome: `Hear a person's whole account before deciding what to say back, check in one sentence what happened and what mattered to them, and let their correction, not your first guess, choose your reply.`,
    scene: 'A friend describes a cancelled journey to visit his sister after her move.',
    sections: [
      {
        title: 'The part you have not heard yet',
        paragraphs: [
          `Dev says his weekend train was cancelled. Before he has finished the sentence, your mind has left the room. You are back on the platform last winter, with your own cancelled train and the fare you never got back, and you are already arranging that story into something worth telling. He adds that the ticket was refunded. Then, almost as an afterthought, the real thing: his sister has just moved house, and he had promised to help her unpack.`,
          `Had you jumped in at the first pause with refund advice, you would have solved a problem Dev had already solved, and missed the one he actually brought you. The information you needed to answer well was in the part of the story you had not heard yet. That is usually where it is. People tend to say the practical thing first and the thing that is bothering them last, once they have found a way in.`,
        ],
      },
      {
        title: 'Half an address sends the parcel to the wrong town',
        paragraphs: [
          `Imagine a parcel with a long address, and a courier who reads the first line, decides he knows where it is going, and stops reading. He sets off confidently and arrives at the wrong house in the wrong town, because the line that would have changed everything was the one he did not get to. Nothing was wrong with his driving. He simply chose the destination before the address was finished.`,
          `Listening to a friend works the same way. Following their account and preparing your reply are two jobs, and they compete for the same attention. Active listening means giving their account the right of way while it is their turn. You do not have to memorise every station name. Track three things: what happened, what they say mattered, and what you are still unsure about. A pause can sit in the middle of a thought, so not every gap is a door for you to walk through. Put the phone face down if you can. None of this requires fixed eye contact, a particular face, or a timed silence; it requires reading the whole address before you drive.`,
        ],
      },
      {
        title: 'Let the ending change your reply',
        paragraphs: [
          `When Dev finishes, you check what you heard in one sentence: "The refund is sorted, but you wanted to be there for your sister. Have I got that right?" He says, "Yes, and I hate leaving her with all the boxes." Now you know the destination. The reply is about a missed commitment, not about money. You might ask whether he wants to say more before you talk about another visit.`,
          `If he corrects you, use the correction, because the correction is the point of asking. Success here is not making Dev cheerful. It is responding to the concern he actually described, rather than one you supplied. Your own travel story is not banned; it can have a turn later, once the parcel has reached the right house.`,
        ],
      },
      {
        title: 'Why the first line is so tempting',
        paragraphs: [
          `The opening of a story is the part that matches something in your own memory, and matching feels like understanding. The moment it clicks, your attention turns inward to retrieve your version, and the rest of theirs arrives half-heard. It feels like empathy from the inside. From the outside it is the courier with the first line of the address, already reaching for the keys.`,
          `Two habits. When a story starts to remind you of your own, notice the pull, let it wait, and keep reading the address to the end. And before you respond to anything that matters, say back in one sentence what happened and what mattered, then let them correct it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'The last detail changes the subject',
        alt: 'Dev explains that his refund is settled but he missed helping his sister; the listener checks that concern.',
        caption: `Read Dev's first line to the very end before looking at the reply, and notice that the part that matters arrives after the comma, once the refund is out of the way. Then look at how the listener's line names both halves and ends with a question rather than advice. Fictional exchange.`,
        items: [
          { label: 'Dev', detail: 'The train was cancelled. I got the fare back, but my sister had to unpack alone.' },
          { label: 'Listener', detail: 'The money is sorted; missing the chance to help her is the hard part?' },
          { label: 'Dev', detail: 'Yes. I wanted to be there for her.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen', 'Optional willing conversation partner'],
      steps: [
        `Use Dev's account: "Train cancelled; fare refunded. I missed helping my sister unpack." Cover the second sentence, or have a willing partner hold it back. You are recreating the moment where the address is only half read.`,
        `Write down the reply you expect to give from the first sentence alone. Then hear or uncover the ending. Comparing the two is where you see how far the parcel would have travelled.`,
        `Write one sentence that names what happened and what mattered to Dev, without any of your own experience in it. If your own cancelled train appears, cross it out and try again.`,
        `Ask your partner to correct the sentence, or compare it with Dev's words. Revise anything you supplied rather than heard; that gap is the lesson.`,
      ],
      notice: `Your final reply is about the missed help, not the refund, and you can point to the exact sentence where the destination changed. The reply you wrote from the first line was confident and heading for the wrong town.`,
      troubleshooting: `If your summary has turned into a travel itinerary, cut it back to the event and the one concern Dev emphasised. If you cannot stop your own story from arriving, write it on a separate piece of paper and put it to one side; it can have its turn later.`,
    },
    recall: {
      prompt: 'A colleague describes a rejected proposal, then says the decision was fair but arrived after they had booked travel. What would you reflect?',
      hint: 'Separate the decision from the consequence they emphasize.',
      answer: `Reflect the part that came last, because that is where they put the weight: "So the decision itself felt fair; the problem is the timing and the travel you had already booked?" The first line of the address was the rejection, and the tempting reply is to defend or console them about the proposal. But they have told you the decision was fair, which closes that door themselves. What they emphasised was the late notice and the money or plans now wasted. Checking that in one sentence lets them correct you if the booking is a side detail, and if it is not, your next question is about what can be done with the travel rather than about an argument they are not having.`,
    },
    quiz: {
      question: 'A cousin is still explaining why a course withdrawal upset them. You know a similar course. What fits this point in the conversation?',
      options: [
        'Offer the alternative while the course details are fresh.',
        'Hear the remaining account, then check which consequence matters.',
        'Explain your own withdrawal so they know they are not alone.',
      ],
      correctIndex: 1,
      explanation: `The address is not finished: your cousin is still explaining, and the part that matters to them may be the money, a friend on the course, or a plan that depended on it. Hearing the rest and checking which consequence counts means your reply goes to the right house. The alternative course and your own story are both parcels addressed from the first line; either might be welcome later, but each chooses the destination before the concern is clear.`,
    },
    takeaway: `A story is an address, and the line that changes the destination is usually the last one, so give the other person's account the right of way while it is their turn, notice the pull of your own matching memory and let it wait, then check in one sentence what happened and what mattered, and let their correction, not your first guess, choose what you say next.`,
    sourceNote: 'Berkeley provides the listening framework. Dev and the exercise are original examples, not a tested script or a measure of empathy.',
  },
  {
    id: 'people-002',
    outcome: `Spot a question that has your conclusion hidden inside it, replace it with a small open question about one exchange, and follow where the answer leads rather than back to your theory.`,
    scene: 'A neighbour reports a disagreement about where bicycles belong in a shared courtyard.',
    sections: [
      {
        title: 'A question with an answer hidden inside',
        paragraphs: [
          `Your neighbour Priya says yesterday's courtyard discussion went badly. You have opinions about the new bicycle rack and a long-standing view of Arun, so you ask: "Did Arun dismiss your idea again?" It sounds like sympathy. Look at what it does. Priya now has to accept your version of events or correct it before she can tell her own, and the word "again" has quietly imported a history she never mentioned.`,
          `You meant solidarity. What you delivered was a conclusion with a question mark on the end. And you still know nothing: not whether the disagreement was about the rack, its position, who speaks to the caretaker, or how the meeting was run. A leading question feels like taking someone's side. In practice it takes the story out of their hands.`,
        ],
      },
      {
        title: 'The lost property desk',
        paragraphs: [
          `Picture a lost property desk. One clerk asks, "Was it the black umbrella?" The person at the counter, who lost a scarf, now has to say no, explain, and start again, and if they are tired they may just nod and leave with the wrong item. A better clerk asks, "Can you describe what you lost?" and waits. The second question is not longer or cleverer. It simply has no answer hidden inside it, so whatever was lost can be named.`,
          `An open question is the second clerk. It leaves room for an account instead of demanding a yes or no to your theory. That does not mean asking for someone's whole history with the building. Choose one small event and ask about it: "What happened when you suggested moving the rack?" A bounded open question gives the speaker a place to start. Resist stacking several questions, about words, motives, witnesses, and feelings, into one breath; one at a time is answerable. Closed questions are not the villain here. Once you need a single fact, "Was the entrance blocked?" is exactly right. Open and closed questions have different jobs, and the mistake is using a closed one to open.`,
        ],
      },
      {
        title: 'Follow what the answer changes',
        paragraphs: [
          `Priya answers, "Arun agreed about the entrance. We disagreed about who would ask the caretaker." In one sentence the problem has changed shape. It was never a rejected location; it is an unowned task. So your next question follows the answer: "What had each of you understood about contacting the caretaker?" You are tracking the information she gave you, not circling back to find another way to the accusation you started with.`,
          `Priya may not want to replay the whole exchange, and she does not have to. You can understand the practical disagreement without a transcript. The useful result is a clearer account of what actually went wrong between two neighbours, not proof that the one you prefer was right.`,
        ],
      },
      {
        title: 'Why the leading question feels kind',
        paragraphs: [
          `A leading question arrives dressed as loyalty. Naming the culprit before your friend has to feels like sparing them the effort and showing whose side you are on. But it also hands them a script, and people under a little social pressure tend to read the script rather than contradict a friend who is trying to help. You end up comforting them about a version of events you wrote.`,
          `Two habits. Before asking about any disagreement, check your question for a verdict, a name, a motive, or an "again", and take it out. And once the answer arrives, ask your next question about what the answer said, not about what you expected it to say.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two openings for the courtyard story',
        alt: 'A leading question assumes dismissal; an open question asks what happened when the rack was discussed.',
        caption: `Read the first line and find the three things it already decided: who, what, and how often. Then read the second and notice there is nothing in it for Priya to accept or deny, only a moment to describe, like the clerk asking what was lost rather than naming the umbrella. Fictional meeting; the same event, two doors into it.`,
        items: [
          { label: 'Conclusion inside', detail: 'Did Arun dismiss your idea again? The answer must first address your accusation.' },
          { label: 'Account invited', detail: 'What happened when you suggested moving the rack? Priya can name the actual issue.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A notebook or private draft'],
      steps: [
        `Copy this fictional question: "Did the organizer ignore your request for a later start?" Underline the action it has already assumed, which is ignoring. Seeing the verdict on the page is the first step to removing it.`,
        `Rewrite it as one question about the exchange itself, with no decision in it about whether anything was ignored. You are turning the black umbrella into "what did you lose?"`,
        `Invent two different answers yourself: the organizer misunderstood the time; the organizer understood but could not change it. Two answers are the test of an open question, because a leading one only has room for yes.`,
        `Check that both answers fit your rewritten question, then write one follow-up for each that asks about the practical problem still remaining. The follow-ups should differ, because the answers did.`,
      ],
      notice: `Your opening accommodates two different accounts without being rewritten, and your follow-ups changed when the account changed. That is the sign you were following the answer rather than steering it.`,
      troubleshooting: `If both follow-ups still blame the organizer, you have left a motive word in; cut it and ask what was said or agreed instead. If your rewrite asks three things at once, split it and keep only the first.`,
    },
    recall: {
      prompt: 'A sibling says a shared shopping plan failed. You suspect their partner forgot. What could you ask without building in that explanation?',
      hint: 'Start with the point where arrangements were made.',
      answer: `Ask about the moment the plan was made rather than the moment it failed: "What did each of you understand you were going to buy?" That question has no umbrella in it. It can reveal that the partner forgot, which is your theory, but it can equally reveal that the responsibilities were never clear, that the plan changed by text and one person missed it, or that your sibling bought the wrong thing. If you ask "Did they forget again?" you get a yes, some grumbling, and no idea what actually happened, and your sibling has been handed a script instead of a chance to describe the evening. Follow whatever the answer says next, even if it leads away from the partner.`,
    },
    quiz: {
      question: 'A teammate says a review felt awkward, but has given no details. Which opening gathers their account?',
      options: [
        'What happened when you presented the draft?',
        'Was the deadline the main source of tension?',
        'Would written feedback have been easier for you?',
      ],
      correctIndex: 0,
      explanation: `The first question is the clerk asking what was lost: it names one moment, the presentation, and leaves the awkwardness for your teammate to describe. The deadline question has picked a cause before hearing one, and the written-feedback question has picked a solution. Both might be worth asking later, once the account exists, but each one hands your teammate an umbrella to accept or refuse.`,
    },
    takeaway: `A leading question is the clerk asking whether it was the black umbrella, so before you ask about any disagreement, strip out the verdict, the name, the motive, and the "again", ask one small open question about a single moment, test it by imagining two different answers, and let the answer you actually get choose the next question rather than steering back to the theory you arrived with.`,
    sourceNote: 'Listening and principled negotiation inform these questions. The courtyard account is invented; an open question does not establish whose account is accurate.',
  },
  {
    id: 'people-003',
    outcome: `Turn a vague adjective like busy into a specific, checkable request by asking which part, offering a short open-ended list, and confirming the target before you change anything.`,
    scene: 'A customer calls a community concert flyer too busy during a print-shop proof review.',
    sections: [
      {
        title: 'One word, several possible problems',
        paragraphs: [
          `At the counter of a small print shop, a customer holds the proof of a concert flyer at arm's length. "It is too busy," she says. You know this flyer. You could pull two of the photographs, cut the paragraph about the choir's history, or swap the patterned background for a plain one. Each is a real afternoon's work. Each is a different flyer at the end of it.`,
          `Which one did the customer ask for? None of them, yet. Busy might mean the page looks cluttered. It might mean they could not find the date. It might even mean the event itself sounds crowded. If you start editing now, you are spending the afternoon on your reading of one word. A familiar adjective is dangerous precisely because it feels specific. Everyone knows what busy means, and everyone means something slightly different by it.`,
        ],
      },
      {
        title: 'Just a trim',
        paragraphs: [
          `A hairdresser hears "just a trim" ten times a day. A good one never picks up the scissors on those words alone. To one customer a trim is a centimetre; to another it is half the length. So the hairdresser asks, "How much are we taking off?" If that draws a blank, she holds up a finger and thumb: "This much, this much, or somewhere else?" The customer points. Only then does the cutting start. The mirror at the end shows the thing that was actually asked for.`,
          `Clarifying a request is the finger and thumb. Begin with the plain question: which part feels busy? If that is hard to answer, offer a few possibilities, "the pictures, the amount of text, or something else?" The "or something else" at the end is not politeness. Your list cannot be complete. Without the open door you have turned a helpful menu into a trap where the customer must pick your vocabulary. Ask for a concrete experience too, such as what they tried to find first when they looked at it. You are not correcting how anyone uses the word busy. You are looking for a meaning the two of you can act on in this conversation.`,
        ],
      },
      {
        title: 'Confirm the target before editing',
        paragraphs: [
          `The customer says, "I cannot find when the doors open. The pictures are fine." There it is: not clutter, not the choir's history, a single missing fact. You check it back: "So keep the pictures and make the opening time easier to find?" They agree. Now moving the time up beside the venue name is a relevant proposal. Deleting every image, which was your first instinct, would have been a loss for nothing.`,
          `Show the revised proof and ask them to find the opening time again. In this example they spot it without reading the small print. That is a result tied to the request they made. It does not prove the whole flyer is better. It does not mean the next customer who says busy wants the same thing. It means this customer asked for a trim and got the length they pointed to.`,
        ],
      },
      {
        title: 'Why a familiar word slips past',
        paragraphs: [
          `An unfamiliar word triggers a question automatically. A familiar one does not, because your own meaning arrives instantly and feels like theirs. That is why busy, simpler, lighter, and cleaner cause more wasted work than technical jargon ever does. Nobody thinks to check them. The hairdresser who assumes a trim is her trim produces a very quiet customer and a bad review.`,
          `Two habits. When a request arrives as a single adjective, ask which part before you touch anything. Offer a short list that ends with "or something else". And before you make the change, say the target back in one sentence and get a yes. Then check the result against that sentence rather than against your own taste.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'From busy to a checkable request',
        alt: 'The customer clarifies that busy means the opening time is hard to find, not that the pictures should be removed.',
        caption: `Look at the printer's first line and notice it ends with "or something else", the open door that keeps the list from becoming a trap. Then see how the customer's answer rules out the change the printer would have made first, removing pictures, and how the final line says the target back as a question. Fictional proof review.`,
        items: [
          { label: 'Customer', detail: 'This flyer feels too busy.' },
          { label: 'Printer', detail: 'Which part: the pictures, the amount of text, or something else?' },
          { label: 'Customer', detail: 'I cannot find the opening time. Keep the pictures.' },
          { label: 'Printer', detail: 'Shall I move the time beside the venue, then show you another proof?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'A pretend invitation or announcement'],
      steps: [
        `Invent a two-sentence invitation on paper and write "Make this simpler" above it. No design software is needed; the vague word is the material, not the layout.`,
        `List three things simpler could mean: fewer words, a clearer order, or less unfamiliar vocabulary. Do not choose one yet; the point is to feel how different the three afternoons would be.`,
        `Write one question that leaves room for all three meanings and for an answer outside your list. Then pick one fictional answer, as if the customer had pointed to a length.`,
        `Make only the change that answer calls for, and add a check that matches it, such as asking a reader to find the date. The check is how you know you cut the length they pointed to.`,
      ],
      notice: `Your revision and its check both address the one meaning that was chosen, not every meaning simpler could have had. The other two afternoons of work never happened, and nothing was removed that the reader wanted kept.`,
      troubleshooting: `If your proposed change is still vague, name the exact piece of information or feature the reader struggles with; "tidier" is another adjective, not a target. If your question offers a list with no "or something else", add it before you ask.`,
    },
    recall: {
      prompt: 'A housemate asks for the kitchen to be clean before visitors arrive. What would you clarify before promising?',
      hint: 'Different people may mean different tasks and finishing times.',
      answer: `Which tasks, and by when. Clean is "just a trim" for kitchens: to one person it means the worktops cleared and the dishes done, to another it means the floor washed and the inside of the oven. Promising the word commits you to their version without knowing it. Ask which part matters most, offer a short list, "worktops, floor, the washing up, or something else?", and ask what time the visitors arrive, because a finishing time is part of the request. Then say the target back: "So worktops and dishes done by six?" A yes to that sentence is a promise you can actually keep, and one you can both check at six o'clock.`,
    },
    quiz: {
      question: 'A colleague asks for a lighter presentation without explaining further. What is the most useful next move?',
      options: [
        'Remove half the slides to reduce its length.',
        'Replace technical phrases with everyday language.',
        'Ask whether lighter means shorter, less technical, or something else.',
      ],
      correctIndex: 2,
      explanation: `Lighter is the hairdresser's trim: it could mean shorter, less technical, less dense, or a different tone, and asking, with an open door at the end of the list, is the only move that finds out. Cutting half the slides and simplifying the language are both possible good edits, but each is an afternoon spent on your reading of one adjective, and either could remove exactly what your colleague wanted kept.`,
    },
    takeaway: `A single adjective is "just a trim", so never pick up the scissors on the word alone: ask which part, hold up a short list that ends with "or something else", listen for the concrete thing they tried to do, say the target back in one sentence and get a yes, then make only that change and check it against the request rather than against your own taste.`,
    sourceNote: 'Berkeley recommends clarifying meaning. The print-shop exchange applies that idea; the revised flyer is illustrative, not a measured design experiment.',
  },
  {
    id: 'people-004',
    outcome: `When someone pauses mid-story, leave a natural gap, then offer them a genuine choice to continue or stop, and follow whichever they pick without reading a meaning into the silence.`,
    scene: 'An aunt pauses while describing an uncomfortable family reunion during a kitchen conversation.',
    sections: [
      {
        title: 'The unfinished kitchen story',
        paragraphs: [
          `Your aunt is telling you about the family reunion while the kettle boils. She gets as far as, "Then your uncle asked about next year," and stops. She folds a tea towel, folds it again. The kitchen goes quiet in the way kitchens do, and you feel the quiet as a job for you to fix. One hand reaches for a cheerful question about the food. The other wants to ask what she is not telling you.`,
          `Neither follows from anything you actually saw. A pause and a tea towel are compatible with at least three things: she is choosing her words, she is deciding whether to say more at all, or she has finished the part she wanted to tell and the rest is hers. The silence does not pick among them. Only she can, and both of your instincts, the rescue and the probe, would take that choice away from her.`,
        ],
      },
      {
        title: 'Holding the door',
        paragraphs: [
          `Think of holding a door open for someone a few steps behind you. You hold it. You do not reach back and pull them through, and you do not let it swing shut in their face because they slowed down. Holding the door costs you nothing but a moment, and it leaves them entirely free to walk through, or to stop and tie a shoelace, or to turn and go another way. The door being open is an offer, not an instruction.`,
          `A pause in a story wants the same thing. Leave a natural gap rather than racing to fill it. There is no magic number of seconds that makes silence respectful, only the willingness not to grab the handle. If the gap stays uncertain, offer the choice out loud: "Would you like to finish that thought, or leave it there?" The offer only works if both halves are genuinely acceptable to you. Staring expectantly until someone gives in is pulling them through the door, even if you never say a word. Remember too that people differ in how long they need to find an answer. Looking away, going quiet, or fiddling with an object tells you nothing reliable about interest or honesty. A folded tea towel is a folded tea towel.`,
        ],
      },
      {
        title: 'Follow the choice she actually makes',
        paragraphs: [
          `Your aunt says, "I want to explain, but I am trying not to speak for him." You hold the door a little wider: "Take your time. You can just tell me your part." She explains that she felt put on the spot about hosting next year. Now you know something, and you know it because she chose to say it, not because you decoded the towel.`,
          `In the other version she says, "Let's leave it," and you say, "Okay," and ask about the food after all. No last little question to see if she will crack. Both endings are complete. In both, the result is a choice about continuing that belonged to her. You have not uncovered a hidden feeling and you have not failed to; you held the door, and she walked through it or she did not.`,
        ],
      },
      {
        title: 'Why silence feels like a problem',
        paragraphs: [
          `A gap in conversation registers as a small emergency, especially with someone you love, and the two fastest ways to end an emergency are to change the subject or to demand the missing piece. Both relieve your discomfort, not hers. The rescue says her story was too awkward to sit with. The probe says her pause was a secret you are entitled to. Neither is what a person folding a tea towel usually needs.`,
          `Two habits. When someone stops mid-story, count the silence as theirs and let it run a little longer than feels comfortable. And if it stays unclear, offer the choice in one sentence, continue or leave it, and then do exactly what they pick, including nothing.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same invitation, two valid replies',
        alt: 'After an offer to continue or stop, the aunt may ask for time or choose to leave the story there.',
        caption: `Read the two rows as two people walking through, or not walking through, the same held door. Notice that the listener's words in the stopping row are two: "Okay", with no follow-up question hidden behind them. These are alternative endings, not steps in order, and neither one tells you what the pause meant.`,
        items: [
          { label: 'Continue', detail: 'Aunt: I need a moment. Listener: Take your time; tell only your part.' },
          { label: 'Stop', detail: 'Aunt: Let us leave it there. Listener: Okay. No further explanation needed.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Optional willing partner'],
      steps: [
        `Write a harmless unfinished story about an awkward invitation, stopping mid-sentence. If you have a willing partner, agree first that either of you may stop at any point; the agreement is what makes the door real.`,
        `Read the opening aloud, or imagine receiving it, and then leave a gap without filling it. Notice the pull toward the rescue or the probe, and let it pass without acting on it.`,
        `Draft one invitation that genuinely allows both continuing and stopping, then write a reply for each choice. Writing both replies in advance is how you find out whether you really meant both options.`,
        `Reread your stopping reply and delete any last question that still asks for the private part of the story. If anything remains after "okay", it is a hand reaching back through the door.`,
      ],
      notice: `Your stopping branch ends the inquiry completely, and your continuing branch leaves the speaker in charge of how much detail follows. Neither branch tries to find out what the pause meant.`,
      troubleshooting: `If your invitation sounds like an interview, shorten it to one sentence and say "or leave it there" out loud. If your stopping reply keeps growing a question, remember the door only has to be held, not walked through for them.`,
    },
    recall: {
      prompt: 'A new colleague goes quiet while answering an optional question about their weekend. How could you respond without treating silence as rejection?',
      hint: 'Make answering optional rather than diagnosing the quiet.',
      answer: `Hold the door and do not read the silence. Give it a moment longer than feels natural, then make the exit easy: "No need to answer that, by the way," or simply move the conversation on with something light and open. They may pick the thread up later, or never, and either is fine. The quiet could be shyness, a weekend they would rather not describe, a slow search for the right words in a second language, or nothing at all; it is not evidence about how they feel about you. What you must not do is fill it with a cheerful rescue that signals their answer was awkward, or a follow-up that insists on one. An optional question stays optional after it has been asked.`,
    },
    quiz: {
      question: 'A friend pauses in a personal story, and you are unsure whether it is finished. Which response preserves their choice?',
      options: [
        'Ask whether they want to continue or leave it there.',
        'Switch to a lighter topic to spare them discomfort.',
        'Ask a detailed question to help them restart.',
      ],
      correctIndex: 0,
      explanation: `Offering continue or leave it is holding the door: it names both options and hands the choice to your friend without deciding what the pause meant. Switching topics lets the door swing shut, on the assumption that they wanted out. Asking a detailed question pulls them through, on the assumption that they wanted help restarting. Either might fit after they have shown a preference; both assume it now.`,
    },
    takeaway: `A pause mid-story is a door you hold rather than pull someone through or let swing shut, so let the silence run a little past comfortable, read nothing into the folded tea towel, offer the choice in one sentence, continue or leave it there, mean both halves, and then do exactly what they pick, including saying "okay" and nothing more.`,
    sourceNote: 'This adapts listening guidance to pauses and communication differences. It is not a method for interpreting body language or detecting concealed information.',
  },
  {
    id: 'people-005',
    outcome: `Share one relevant detail from your own experience, hand the turn straight back with a question that allows a different answer, and repair briefly if you notice you have taken the story over.`,
    scene: 'Two running-club members talk after one attends a social event where she knows nobody.',
    sections: [
      {
        title: 'Connection can become a detour',
        paragraphs: [
          `Stretching after the club run, Leena mentions that she went to the group's social evening and arrived knowing nobody. You know that feeling, and you say so, and then you keep going: your first work party, the train that was late, the buffet with nothing you could eat, the conversation with your manager by the coats. It is a good story. Four minutes later you notice Leena has gone quiet and polite, and her evening has disappeared from the conversation entirely.`,
          `You were not competing. You were trying to connect, which is why this one is hard to see from the inside. But your example quietly became the subject, and her unfinished concern no longer had anywhere to go. Personal stories are not forbidden in a conversation like this. The trouble is a story that arrives to help and stays to take over.`,
        ],
      },
      {
        title: 'A pass, not a shot',
        paragraphs: [
          `In football, an assist is a short pass that sets up a teammate to score. The passer touches the ball once, in the right direction, and lets go. A player who receives the ball, sees the teammate open, and then dribbles the length of the pitch to take the shot themselves has not helped, however good the dribble. The point of the pass is where it leaves the ball: at the other person's feet.`,
          `A personal example in someone else's story is a pass. Give it one job: the single detail that shows why you understand, here, arriving somewhere alone. Leave out everything that only makes your version entertaining, the train, the buffet, the manager. Then play the ball back with a question about her evening. One phrase to drop is "I know exactly how you felt", because a shared setting does not prove a shared feeling. Leena may have enjoyed being anonymous and hated not knowing how to join a table, or the other way round. Your story is useful only if it leaves room for her experience to differ from yours, and the question at the end is where that room is made.`,
        ],
      },
      {
        title: 'A shorter story leaves room for correction',
        paragraphs: [
          `The pass sounds like this: "I once arrived alone at a work party and could not work out where to sit. Was finding a way into the group the awkward part for you?" Leena replies, "Not quite. Everyone was friendly, but I wanted to leave early without seeming rude." Different problem. You answer that one, about the end of the evening rather than the start, instead of producing more seating stories to prove the match.`,
          `If you have already dribbled off down the pitch, a small repair gets the ball back: "I wandered into my own story. You were saying you wanted to leave early." Then stop. A long apology about what a bad listener you are is another turn taken from her, with your name on it again. One sentence of repair, then her question.`,
        ],
      },
      {
        title: 'Why the good story keeps going',
        paragraphs: [
          `The moment someone's experience matches yours, the matching memory arrives whole, with all its details attached, and it is genuinely pleasant to tell. Each extra detail feels like more connection. From the other side, each extra detail is another minute in which the conversation is about you. The length is the problem, not the sharing; a pass that takes four minutes is a dribble.`,
          `Two habits. When you reach for a related experience, pick the one detail that explains the connection and leave the rest in the drawer. And end every such example with a question that lets the other person say "not quite", then follow their answer rather than defending the match.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A connection that allows a difference',
        alt: 'The listener shares one seating difficulty, then Leena clarifies that her concern was leaving early.',
        caption: `Count the words of the listener's own story in the first line: one sentence, one detail, then a question. That is the pass. Then notice Leena's answer begins with a correction, and the listener's final line follows the correction instead of defending the match. Fictional exchange; the difference in the middle is the useful result.`,
        items: [
          { label: 'Listener', detail: 'At my first work party I could not find a seat. Was joining in awkward for you?' },
          { label: 'Leena', detail: 'Joining was fine. I wanted to leave early without seeming rude.' },
          { label: 'Listener', detail: 'So it was ending the evening, not getting started. What happened when you left?' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a private note'],
      steps: [
        `Take the fictional prompt "My first class was awkward" and write a related experience of your own in three full sentences. Let it be as long and detailed as it naturally wants to be; you need to see the dribble before you can cut it.`,
        `Underline the single detail that connects to arriving at a new class and strike out everything else for this exercise. What remains is the pass.`,
        `Add a question that hands the turn back and explicitly allows a different experience, such as "Was it the same for you, or something else?" Say both turns aloud to hear how short the exchange has become.`,
        `Invent an answer you did not expect, for example that the class was fine but leaving on time was the problem, and write a reply that follows that answer rather than returning to your story.`,
      ],
      notice: `Your final reply is about the unexpected answer, not a continuation of your own class story, and the whole exchange fits in four short lines. The connection survived the cut; only the detour went.`,
      troubleshooting: `If your connection needs a paragraph of explanation before it makes sense, it is not a pass; leave the story out and ask about their experience directly. If your reply to the unexpected answer starts with "That reminds me", you are dribbling again.`,
    },
    recall: {
      prompt: 'A customer mentions learning to use a camera. You share one beginner mistake, then notice you are listing your equipment. How can you recover?',
      hint: 'Return to their task without making the recovery another personal story.',
      answer: `Stop the list mid-sentence if you have to, and play the ball back in one move: "Anyway, that is my kit, not yours. What are you hoping to photograph?" The beginner mistake was a fair pass; the equipment list was the dribble, and the recovery is a single sentence that names the detour lightly and ends in a question about their task. Do not apologise at length for talking about your gear, because that keeps the conversation on you for another minute. Then follow what they say, which may be nothing like what you shoot, and resist the urge to recommend a lens until they have asked for one.`,
    },
    quiz: {
      question: 'You have just shared a related disappointment. Which next move checks whether it actually connects?',
      options: [
        'Describe how you eventually solved it, to complete the story.',
        'Ask whether their difficulty was similar or different, then follow their answer.',
        'Offer another example in case the first was not close enough.',
      ],
      correctIndex: 1,
      explanation: `Asking whether their difficulty was similar or different is the pass completed: the ball is at their feet, and the question leaves room for "not quite". Finishing with how you solved it keeps the ball and makes the story yours to the end. Offering another example is a second dribble to prove the first one, and the proof is not what they needed.`,
    },
    takeaway: `A personal example in someone else's story is a pass, not a shot, so give it one detail and one job, drop "I know exactly how you felt", hand the turn back with a question that allows a different answer, follow the correction when it comes, and if you catch yourself dribbling, repair in one sentence and ask about them again.`,
    sourceNote: 'Berkeley discusses listening and turn-taking. This club conversation illustrates those practices without claiming that a particular story length guarantees connection.',
  },
  {
    id: 'people-006',
    outcome: `Before turning someone's complaint into a solution session, ask which kind of help they want, listening, ideas, or just company, and then do the one they chose, including when the answer is no plan.`,
    scene: 'A colleague discusses missing out on a training place during a lunch break.',
    sections: [
      {
        title: 'Help has several forms',
        paragraphs: [
          `Over lunch, Tomas says he did not get a place on the training course. You happen to know a similar course that still has spaces, and your hand is already on your phone to find the link. It feels like the most useful thing you could possibly do. He has not asked for it.`,
          `Look at what Tomas might actually want from the next ten minutes. He might want to say how disappointed he is and be heard. He might want to think aloud about what to do next. He might simply want to eat lunch with a friendly person after a bad morning. Each of those asks something different of you, and the course link serves only the second. Offering information is not wrong. Choosing that form of help before checking means his real request, whatever it was, goes unheard while you scroll.`,
        ],
      },
      {
        title: 'A hand, or company while you do it?',
        paragraphs: [
          `A friend is at the roadside with a flat tyre, jack already out. You pull over. There are three decent things you could do: change the tyre for them, hold the torch and pass the tools, or stand there and keep them company while they do it themselves. All three are kind. Only one is what they want, and you cannot tell which from the tyre. So you ask: "Do you want a hand, or shall I just keep you company?" The question costs five seconds and makes sure your help lands.`,
          `The lunch table needs the same question. A check is worth asking only when its answer will actually change what you do next, so ask one with real branches: "Would ideas help, or would you rather I just listen?" You can add the third option if it fits: "Or we could leave work talk until after lunch." Two rules keep the question honest. Do not present listening as the lesser option, the thing you will put up with if he insists. And whatever he picks, do it. If he chooses listening, the phone goes away and the course goes unmentioned. If he chooses ideas, find out what he needed from the course before you recommend one, because permission to help with this decision is not a licence to manage his career.`,
        ],
      },
      {
        title: 'The first useful result may be no plan',
        paragraphs: [
          `Tomas says, "Just let me complain for a minute. I do not want another application today." You put the phone face down and ask, "You had been looking forward to that place. What part of the news was hardest?" He explains that he had already rearranged his week around it. You listen. Nothing gets booked, and the other course is never mentioned.`,
          `That is not a conversation that failed to reach a solution. It is a conversation that delivered exactly the help that was asked for. Later, maybe next week, he may ask what else is out there, and that is a different conversation you can have then. What you do not do is ask "Sure you don't want to hear about it?" every few minutes, because repeating the question is just a slower way of ignoring the first answer.`,
        ],
      },
      {
        title: 'Why the phone comes out first',
        paragraphs: [
          `Someone else's disappointment is uncomfortable to sit next to, and a solution is the fastest way to make it feel handled. Finding the link is action; listening feels like doing nothing. But the discomfort you are relieving is your own, and the person at the roadside did not ask for the tyre to be changed. Information offered before it is wanted tends to be heard as "stop feeling that and do this".`,
          `Two habits. When someone brings you a complaint, ask which kind of help they want before you offer any, and give listening equal billing with ideas. And once they have answered, follow it fully, treating a conversation that ends without a plan as the plan they chose.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A support check changes the next action',
        alt: 'The listener offers listening or ideas, Tomas chooses listening, and the phone search stops.',
        caption: `Look at the last box first and notice what is missing from it: no course, no link, no suggestion. Then read back to the first box and see that the question offered listening as a full option, not a fallback, which is why Tomas could choose it. Fictional sequence; the help asked for at the roadside was company, so company is what arrived.`,
        items: [
          { label: 'Offer', detail: 'Would ideas help, or would you rather I listen?' },
          { label: 'Answer', detail: 'Just listen. I do not want another application today.' },
          { label: 'Follow through', detail: 'Put away the course search. Ask about the disappointment instead.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Optional willing partner'],
      steps: [
        `Pick a fictional small disappointment, such as missing a workshop, and write down the first suggestion that springs to mind. Write it in full, because you need to see the phone coming out before you can put it away.`,
        `Replace that suggestion with a support question offering three real branches: listening, ideas, or leaving the topic for now. Give the three equal weight in the wording.`,
        `Write a reply for each branch, or if you have a willing partner, let them choose which fictional branch you rehearse. Writing all three is how you discover whether you really meant all three.`,
        `Check the listening branch and the leave-it branch for any recommendation that has crept in, and make the ideas branch depend on their asking. The tyre only gets changed if they said yes to a hand.`,
      ],
      notice: `The same opening complaint now leads to three different next actions, and two of them contain no suggestion at all. Before the exercise, all three roads led to your idea.`,
      troubleshooting: `If every branch somehow ends with your suggestion, delete it and write out what pure listening would sound like for three lines; it will feel like doing nothing, and that is the feeling to get used to. If your question makes listening sound like a consolation prize, reword it until the options are level.`,
    },
    recall: {
      prompt: 'Your neighbour describes a frustrating delivery. You know the complaint process, but they have asked no question. What can you say first?',
      hint: 'Check whether information is the help they want now.',
      answer: `Ask which kind of help they want before you offer the process: "Do you want to talk it through, or would it help to know how the complaint route works?" It is the roadside question, a hand or company. Knowing the process is genuinely useful and it does not decide what they need right now, which may just be someone to say that was a ridiculous way to run a delivery. If they choose to talk, the process stays in your pocket, and you can mention that it exists at the end if they seem to want a next step. If they choose the information, give it in the form they can use, not the whole policy. Either way, the first move is the question, not the knowledge.`,
    },
    quiz: {
      question: 'A friend says a rehearsal went badly. Which response best avoids assuming the desired support?',
      options: [
        'Suggest a smaller practice goal for next time.',
        'Describe a rehearsal that went badly for you.',
        'Ask whether they want company, listening, or help thinking about the next rehearsal.',
      ],
      correctIndex: 2,
      explanation: `The three-way question is the roadside check: it lets your friend choose between company, being heard, and ideas, instead of you choosing for them. A smaller practice goal picks ideas without asking, and your own bad rehearsal picks a shared story without asking. Both could be welcome later, after the answer; neither is requested by the complaint itself.`,
    },
    takeaway: `A complaint is a flat tyre at the roadside, so before you reach for the jack, ask which kind of help is wanted, a hand, a torch held, or just company, give listening the same standing as ideas, and then do exactly the one they chose, treating a conversation that ends without a plan as a success rather than asking again every five minutes.`,
    sourceNote: 'The listening source cautions against premature advice. The lunch example and its support choices are original teaching applications, not validated counselling scripts.',
  },
  {
    id: 'people-007',
    outcome: `When someone says no advice, remove the recommendation entirely rather than dressing it as a question, and state your own real time limit for listening as a separate fact that buys no right to advise.`,
    scene: 'A friend wants to vent about flat hunting during a short evening call.',
    sections: [
      {
        title: 'Advice can hide in a question',
        paragraphs: [
          `Maya rings after another flat viewing that went nowhere. You do the right thing first: "Do you want suggestions, or do you just want to vent?" She says, "Vent. No suggestions." Your very next sentence is, "Have you tried widening the search area?" You hear it leave your mouth as a question. It is not one.`,
          `A question mark does not change what a sentence does. "Have you tried widening the search area?" recommends widening the search area. Maya now has to explain why she has not, or say no suggestions a second time, which is tiring to say twice. The permission check you asked was decorative. A check only means something if her answer changes what comes next. Here it changed nothing but the punctuation.`,
        ],
      },
      {
        title: 'No thanks to seconds, and the kitchen closes at nine',
        paragraphs: [
          `At a dinner table, a guest says, "No more for me, thanks." A good host does not slide the dish across anyway with "just a small bit?" The no was clear and the host heard it. The same host can also say, quite separately, "Just so you know, I need to clear up by nine." Those are two different facts. The guest's no about food and the host's limit on the evening do not cancel each other out. Neither one is a bargaining chip for the other. Nobody thinks that staying until nine entitles the host to force dessert.`,
          `A phone call has the same two facts in it. Maya's refusal of suggestions is the no to seconds, and it stands. Your evening class at seven is the kitchen closing, and it also stands. Say it plainly rather than accepting an open-ended call and growing quietly resentful at ten past. Her control over whether she receives advice and your control over your availability are separate things. Listening for an agreed stretch is an offer of attention. It is not a purchase that entitles you to give instructions at the end of it. Within that stretch you have plenty to do without prescribing anything. Reflect back what she has said. Ask a neutral question to understand better. Or just be the person on the line.`,
        ],
      },
      {
        title: 'A refusal that actually changes the call',
        paragraphs: [
          `The version that honours both facts sounds like this: "No suggestions. I can listen until seven. What was the most frustrating part of this one?" Maya says the photographs showed a completely different room. You say, "You spent a whole evening getting there for something that was not as shown." Then you leave it there. No "it is worth checking the listing date". No "some sites let you report that". At seven, you close the call as you said you would.`,
          `If Maya later asks, "What would you try?", that is a new invitation. You can check whether she means it: "Ideas now, or still venting?" A changed request from her opens a new conversation. Your own continuing wish to say the thing about the search area does not, however many times it comes round.`,
        ],
      },
      {
        title: 'Why advice sneaks back in as a question',
        paragraphs: [
          `Having a solution and not saying it is uncomfortable. The question form feels like a loophole: you are only asking, after all. But the listener hears the recommendation inside it instantly. Now they have to defend a decision they did not come to discuss. The disguise fools only the person wearing it. The second trap is the opposite one. Respecting the no feels like it means staying on the line indefinitely, so you either overstay and resent it or avoid the call altogether.`,
          `Two habits. When someone declines advice, scan your next sentences for "have you tried" and "could you just". Delete anything doing advice work, question mark or not. And state your availability as a plain fact at the start, then keep to it. The time you gave is not something they now owe you a suggestion for.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'After Maya says no suggestions',
        alt: 'One response disguises a search recommendation as a question; the other offers bounded listening.',
        caption: `Read each line and ask what Maya has to do next. After the first, she must defend her search area, so the dish has been slid across despite her no. After the second, she can simply keep telling her story, and the time limit sits beside the listening as a separate fact rather than a condition on it. Fictional call.`,
        items: [
          { label: 'Advice continues', detail: 'Have you tried a wider area? Maya must now discuss your proposed solution.' },
          { label: 'Refusal changes the call', detail: 'No suggestions. I can listen until seven. What happened at the viewing?' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A private note'],
      steps: [
        `Write "I want to vent, not get suggestions" at the top of a page, and under it draft a reply to a fictional friend whose parcel has been delayed for the third time. Write naturally; the advice needs to appear before you can remove it.`,
        `Underline every recommendation, including the ones wearing question marks: "Have you tried", "Could you just", "Is it worth". Delete each one that is doing advice work. This is the dish being put back in the kitchen.`,
        `Add one honest listening limit for the rehearsal, such as "I have ten minutes before I need to go", and one reflection of the actual inconvenience, such as the afternoon spent waiting in. No partner is needed; you are editing your own reflex.`,
        `Read the finished reply as if you were the caller and check that you could carry on with your story without having to defend or accept any proposed action. If you would have to answer a suggestion, there is still one in there.`,
      ],
      notice: `Your reply offers attention and a clear limit, and gives the speaker nothing to do except keep talking. The no to seconds was respected and the kitchen hours were stated, and neither was traded for the other.`,
      troubleshooting: `If removing the advice leaves you with nothing to say, reflect a concrete loss instead: the time waited in, the plan that was missed. If your time limit comes out sounding like a threat or an apology, say it as a plain fact at the start, the way you would mention the kitchen closing.`,
    },
    recall: {
      prompt: 'A sibling declines help choosing a course but keeps discussing the uncertainty. Does continuing to talk reopen permission for recommendations?',
      hint: 'Talking about a decision is different from asking you to direct it.',
      answer: `No. Talking about a decision at length is still the guest at the table, not the guest asking for seconds. Your sibling declined help choosing, and continuing to describe the uncertainty is them doing exactly what they said they wanted to do, which is think aloud with someone listening. It is not a quiet invitation to steer. Keep listening within whatever time you honestly have, reflect what you hear, and ask neutral questions if you need to understand. The door reopens only when they explicitly ask, "What would you do?" or "Can I get your view?", and even then it is worth checking they mean it now. Until that moment, the earlier no stands, however long the conversation runs.`,
    },
    quiz: {
      question: 'A friend says no advice, and you can talk for ten minutes. Which response respects both limits?',
      options: [
        'Listen briefly, then offer one suggestion before the call ends.',
        'Say you can listen for ten minutes without recommendations.',
        'Ask whether hearing just one option might still be useful.',
      ],
      correctIndex: 1,
      explanation: `Saying you can listen for ten minutes without recommendations states the kitchen hours and respects the no to seconds, as two separate facts. Listening briefly and then offering a suggestion treats your ten minutes as a purchase that earns you the last word. Asking whether just one option might help slides the dish across after the no, with a question mark on it to make it feel polite.`,
    },
    takeaway: `No advice is a guest declining seconds, and your time limit is the kitchen closing at nine: honour both as separate facts, delete every "have you tried" and "could you just" whether or not it ends in a question mark, say your availability plainly at the start and keep to it, and let only a new explicit request from them, never your own itch to say the thing, reopen the subject of suggestions.`,
    sourceNote: 'Listening and boundary guidance support this distinction. The example concerns an ordinary voluntary call, not an obligation to remain available indefinitely.',
  },
  {
    id: 'people-008',
    outcome: `When advice has actually been asked for, find out what was already tried, exactly where it broke, and what constraints exist, so the next suggestion fits the gap instead of repeating the obvious.`,
    scene: 'A sibling asks for help with repeated confusion over a shared household shopping list.',
    sections: [
      {
        title: 'The obvious suggestion already exists',
        paragraphs: [
          `Your brother asks how his household can stop coming home with two of everything. Three cartons of milk in the fridge this week. You have the answer before he has finished the question: a shared shopping list. He gives you a patient look. They have used one for months. Now, before you can help at all, he has to explain the system they already have. You have spent your first suggestion on something he tried in the spring.`,
          `This is different from the lessons about not giving advice. Here advice was asked for, and that permission is real. What permission does not supply is context. Someone can want your ideas and still have tried the obvious ones. The fact that a problem persists does not mean nobody thought of the simple fix. Before proposing a tool or a rule, ask what has already been attempted and what happened when it was.`,
        ],
      },
      {
        title: 'The mechanic who asks first',
        paragraphs: [
          `A car will not start, and you ring a mechanic. A poor one says, "Have you got fuel in it?" You have. You have also already tried the jump leads your neighbour lent you, and you say so with some irritation. A good mechanic opens differently: "What have you tried so far, and what happens exactly when you turn the key?" You tell them: the dashboard lights come on, there is one click, and nothing. Now they know the battery is probably not the issue and the starter might be. They have not touched the car and they are already closer than the first mechanic.`,
          `Ask your brother the mechanic's question: "How are you using the list now, and where exactly does it stop working?" He says everyone adds items to it, but nobody marks who is going to buy them. Two people see milk and both pick it up. There is the click. The problem was never access to a list. It is the missing step between seeing an item and owning it. Ask about constraints too. One housemate shops without mobile data, so any fix built on live updates would miss part of the situation. None of these questions is a test he has to pass to deserve help. They are the diagnosis. The suggestion that follows them will be built for his car rather than for the average one.`,
        ],
      },
      {
        title: 'Make the next option answer the actual gap',
        paragraphs: [
          `Check the diagnosis back before prescribing: "So the list is shared, but nobody claims an item before they leave the house?" He agrees. Now the suggestion is shaped by the gap: "Would agreeing who covers each item before a shopping trip work better than adding another app?" He thinks it might, if the others are up for it. The proposal is about ownership and timing, not software. Ownership and timing are where the click was.`,
          `Two things stay true. The housemates have to agree; your brother cannot quietly assign them chores from your kitchen. And if he says they tried claiming items too, the right response is "what stopped it working?" It is not a defence of how fresh your idea was. Every answer narrows the diagnosis, including the ones that rule out your favourite.`,
        ],
      },
      {
        title: 'Why the first suggestion is always the obvious one',
        paragraphs: [
          `The obvious fix arrives first because it is obvious. Being asked for advice feels like being asked for an answer now. But the person asking has lived inside the problem for months. Whatever you can think of in four seconds, they have probably thought of too. Leading with it costs them an explanation and costs you credibility. The real gap stays hidden behind the clearing-up.`,
          `Two habits. When someone asks for ideas, make your first contribution a question: what have you tried, and where exactly does it break. And before offering the next step, say the gap back in one sentence and get a yes. Then the suggestion is aimed at the click and not at the car in general.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Locate the missing agreement',
        alt: 'Milk is listed, two shoppers read it without assigning ownership, and both buy it; a proposed claim comes before shopping.',
        caption: `Find the box where it breaks before you read the last one: the second box, where two people read the same item and nobody owns it, is the click the mechanic listens for. Notice that the proposed change slots in exactly there, before leaving the house, and that no new app appears anywhere in the sequence. Fictional household.`,
        items: [
          { label: 'Shared entry', detail: 'List: milk. Everyone can see it.' },
          { label: 'Unassigned action', detail: 'Two shoppers each think: I can get that.' },
          { label: 'Duplicate result', detail: 'Both return with milk.' },
          { label: 'Proposed change', detail: 'Before leaving: I will buy the milk. Does that work for everyone?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper and pen'],
      steps: [
        `Take a fictional group that keeps missing its rehearsal start time and draw three columns: attempt, result, constraint. The columns are the mechanic's notebook; they stop you prescribing before you have listened for the click.`,
        `Fill them in: attempt, sent reminders; result, people still arrived late; constraint, two members finish work at the proposed start time. Read across the row and notice that the constraint explains the result better than forgetfulness does.`,
        `Write a question about that constraint before you offer any new reminder system, and supply a plausible answer yourself, such as that a start fifteen minutes later would work for everyone.`,
        `Draft one optional suggestion built on that answer, and write down who would have to agree before it could happen. A fix that assigns other people's evenings is not yours to make alone.`,
      ],
      notice: `Your suggestion responds to a specific point of failure, the start time colliding with two people's work, rather than repeating the reminder idea that was already tried. You could not have written it before filling in the columns.`,
      troubleshooting: `If your advice could have been written before you read the three columns, it is the first mechanic's question; name which result or constraint should have changed it, and start again from there. If your suggestion needs no one else's agreement, check whether it quietly assigns them work.`,
    },
    recall: {
      prompt: 'A colleague asks for ideas because meeting notes are not getting read. What would you find out before recommending shorter notes?',
      hint: 'Length is only one possible failure point.',
      answer: `What they have tried, and exactly where reading stops. Shorter notes is the "have you got fuel in it?" of this problem, and they may well have tried it. Ask how the notes are shared and whether people can actually find them, what earlier changes achieved, and what readers say they need from the notes, if anyone has asked. The click might be that the notes go to a channel nobody opens, that no one is named as responsible for acting on them, or that they arrive three days after the meeting when the decisions are already stale. Each of those needs a different fix, and none of them is fixed by cutting the word count. Say the gap back once you have found it, then suggest something aimed at that.`,
    },
    quiz: {
      question: 'A friend requests help with a chore rota. You learn one already exists but tasks mean different things to each person. What fits?',
      options: [
        'Explore agreeing what each task includes before changing the rota tool.',
        'Recommend a reminder app so the existing rota gets more attention.',
        'Suggest rotating more often so every person tries every task.',
      ],
      correctIndex: 0,
      explanation: `The click is that "clean the kitchen" means three different things to three people, so agreeing what each task includes aims the fix at the actual break. A reminder app assumes the problem is attention, and faster rotation assumes it is fairness; both are the first mechanic asking about fuel when the engine has already told you it is the starter.`,
    },
    takeaway: `When advice has genuinely been asked for, be the mechanic who asks before touching the car: what have you tried, what happens exactly when it fails, and what constraints are in play; say the gap back in one sentence and get a yes, then aim the suggestion at that gap, and if they have tried that too, ask what stopped it rather than defending the freshness of your idea.`,
    sourceNote: 'Listening and negotiation guidance inform these questions. This coordination problem is specific to the invented household, not a general rule.',
  },
  {
    id: 'people-009',
    outcome: `Offer a suggestion with real substance, why it fits, what might not, and what you have not checked, then leave the decision and any follow-up entirely with the person who asked.`,
    scene: 'A sister in a new city asks about meeting people who share her interest in board games.',
    sections: [
      {
        title: 'An idea turns into a schedule',
        paragraphs: [
          `Your sister has moved to a city where she knows nobody, and she asks for ideas about meeting people. You mention a board-game evening you have heard about, because she loves cooperative games and it seems a natural fit. Good. Then you keep going. Which Thursday will she go? Has she registered yet? Will she message you afterwards to say how it went? Within a week you have asked twice whether she has been.`,
          `Trace what she actually asked for. She invited ideas. She did not agree to attend anything, and she certainly did not sign up to report progress to you. Every follow-up sounded encouraging, and each one quietly moved a decision that belonged to her across the table to you. Advice became management without anyone deciding it should, and the kindness in your voice does not change what the questions were doing.`,
        ],
      },
      {
        title: 'A lent book, not assigned reading',
        paragraphs: [
          `When you lend a friend a book you loved, you hand it over and say why you think they might like it. You do not set a deadline, check on which chapter they have reached, or ask for a written response. If they never open it, the friendship survives and so does the book. Assigned reading is different: there is a date, a check, and a consequence for not doing it. A good suggestion is the lent book. The moment you add the check, it has become homework, and nobody asked you to be their teacher.`,
          `Lending well still takes care. Explain the connection to something she told you, name a genuine drawback, and be clear about what you know from checking and what you are guessing. A game evening gives you a shared activity to start conversations with, which suits her; a noisy venue might not, and you do not know how noisy this one is. Say that. Do not describe the atmosphere or the accessibility of a place you have never been to as if you had. Offer to look into the details only if she wants you to. Leaving the choice open is not the same as a limp "do whatever you like"; it means handing over real information with no duty to please you stapled to it.`,
        ],
      },
      {
        title: 'Acceptance can mean only hearing you out',
        paragraphs: [
          `The lent-book version sounds like this: "A board-game evening might fit, because you like having an activity to start conversations. I have not checked how noisy it is. Want to look at it together, or leave the idea for now?" She says, "I will keep it in mind. This week I want some quiet." You say, "Okay," and that is the end of it. She now has one more possibility to weigh when she feels like it. She does not have a booking, and she does not owe you a report.`,
          `If you genuinely want to follow up later, ask whether that would be welcome instead of assuming it. And if she never goes, that is not evidence that your help was wasted or that she failed to take it seriously. The book is on her shelf. Whether and when she reads it was always hers to decide.`,
        ],
      },
      {
        title: 'Why encouragement slides into checking up',
        paragraphs: [
          `Once you have offered an idea, you have a small stake in it, and wanting to know how it went feels like caring rather than monitoring. From the other side, "Have you been yet?" lands as a question about whether she has done her homework. The pressure is light, and it accumulates, and it attaches a sense of owing to a conversation that began as a favour.`,
          `Two habits. When you offer a suggestion, give it substance, the fit, a drawback, and what you have not checked, and then finish with a sentence that hands the decision back. And after that, follow up only if you have asked whether follow-up is wanted, treating silence as the book sitting unread on a shelf rather than as a report overdue.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Information without homework',
        alt: 'A sibling explains why a game evening might fit, flags unknown noise, and accepts that her sister wants quiet this week.',
        caption: `Look at the first line and count what it contains: the fit, an unknown admitted, and a question that offers leaving it. Then look at the last line and notice what is missing from it, no date, no "let me know", no check. The book has been lent and put down. Fictional exchange.`,
        items: [
          { label: 'Sibling', detail: 'Games give you something shared to do. I have not checked the noise. Want to look?' },
          { label: 'Sister', detail: 'I will keep it in mind. I want quiet this week.' },
          { label: 'Sibling', detail: 'Okay. We can leave the idea there.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or an unsent draft'],
      steps: [
        `Invent a friend who wants an inexpensive weekend activity and has asked for suggestions, and choose one ordinary option. Keep it ordinary; the exercise is about how you hand it over, not how clever it is.`,
        `Write why it fits something they have told you, plus one drawback or one thing you have not checked. Do not invent prices, opening hours, or a claim about accessibility you could not stand behind.`,
        `Add a sentence that leaves the decision with them, then rehearse their answer out loud: "Not this weekend." Saying it yourself is practice for hearing it without flinching.`,
        `Write your reply to that refusal and strike out anything that asks for proof they considered it or a promise to try it later. If a check survives, the book has become homework.`,
      ],
      notice: `Your suggestion is still informative on the page after the imagined friend declines it, and your reply to the refusal contains no date, no check, and no sigh. The book is lent, not assigned.`,
      troubleshooting: `If your reply makes the friend feel they ought to apologise, remove every reference to your effort and return to what they said they wanted. If you cannot write a drawback, you have not thought about the suggestion from their side yet.`,
    },
    recall: {
      prompt: 'A colleague agrees to hear about a course you enjoyed but does not enroll. What, if anything, did the original agreement require?',
      hint: 'Separate receiving information, enrolling, and reporting back.',
      answer: `Only that they hear about it, which they did. Hearing a suggestion, enrolling on the course, and reporting back to you are three separate things, and your colleague agreed to the first one. They borrowed the book; they did not sign up for the reading group. Not enrolling is not a broken promise, and not mentioning it again is not rudeness; it is the book sitting on the shelf, which is exactly where a lent book is allowed to sit. If you are curious whether they looked into it, ask once whether they would mind you asking, and accept a shrug as a complete answer. Treating their silence as a debt turns a favour you did into a bill they never agreed to.`,
    },
    quiz: {
      question: 'A friend asks for walking-route ideas, then says they may stay home. Which reply keeps your suggestion optional?',
      options: [
        'Ask them to try the shortest route once before deciding.',
        'Offer to book transport so the decision becomes easier.',
        'Accept that choice and leave the route information available if wanted.',
      ],
      correctIndex: 2,
      explanation: `Accepting the choice and leaving the information on the shelf is the lent book: the routes stay useful, and the decision stays theirs. Asking for a trial walk turns the suggestion into an assignment with a condition attached. Booking transport takes a decision they said they were unsure about and makes it harder to undo, which is help nobody requested.`,
    },
    takeaway: `A suggestion should be a lent book, not assigned reading: give it real substance, why it fits, what might not, and what you have not checked, end with a sentence that hands the decision back, accept "not this week" with a plain okay, and let an idea sit unread on someone's shelf without turning your kindness into a check on whether they have done their homework.`,
    sourceNote: 'This combines listening with respect for boundaries. The example does not claim a particular social activity will suit everyone or produce friendships.',
  },
  {
    id: 'people-010',
    outcome: `Treat reading, suggesting, editing, sharing, and sending as five separate permissions, do only the one that was given, and ask specifically before stepping up to the next.`,
    scene: 'A neighbour asks for a spelling check on a draft message about a communal repair.',
    sections: [
      {
        title: 'The invitation has a boundary',
        paragraphs: [
          `Your neighbour Elsie knocks with her phone in her hand. She has drafted a message about the broken light in the entrance hall. "Could you check the spelling?" she asks. You read it. The spelling is mostly fine, but one sentence is muddled. You also happen to know that Raj in flat six dealt with the caretaker about the same light last year. Within thirty seconds you are itching to do three things. Rewrite the sentence. Forward the draft to Raj for his view. Maybe just send it yourself to get the thing moving.`,
          `Elsie asked for a spelling check. Each of the things you are itching to do changes something she did not offer. The rewrite changes her words. The forward changes who reads them. Sending changes who speaks for her. All three would be meant kindly. None of them was in the invitation. The fact that the light would get fixed faster does not put them there.`,
        ],
      },
      {
        title: 'The key to water the plants',
        paragraphs: [
          `A friend going away hands you their key and asks you to water the plants. You now have the physical ability to do anything in that flat. Rearrange the bookshelves. Repot the fern that is clearly in the wrong pot. Let the window cleaner in because he happened to call. You would do none of it, because the key came with one job attached. Permission to water is not permission to redecorate. The friend being grateful for watered plants would not make the redecoration retrospectively fine.`,
          `A draft message is a flat you have been handed the key to. Reading, suggesting, editing, sharing, and sending are five different rooms. Permission for one does not open the next. So name the room you want to enter: "There is one sentence I found unclear. Would you like a suggestion, or spelling only?" If she wants the suggestion, show it on the side, so she can take it or leave it, rather than overwriting her words. Knowing that Raj is helpful does not substitute for Elsie agreeing that Raj sees her message. And agreeing the final wording is not agreeing that you press send. The account and the recipient stay under her control unless she explicitly hands them over.`,
        ],
      },
      {
        title: 'A smaller service can be the complete task',
        paragraphs: [
          `Elsie says, "Spelling only. I want it to sound like me." So you mark two misspellings and leave her sentences exactly as she wrote them, muddled one included. At the end you say what you did and did not do: "Those are the two spelling changes. I have not sent or shared anything." She makes the corrections. She decides for herself when to contact the caretaker.`,
          `That is the whole job, done. The useful result is the help she asked for, not the largest intervention you were capable of. If she later says, "Actually, could you send it for me?", that is a new key for a new room. You confirm the exact recipient and the exact version before you do. The new request expands the task from that moment. It does not reach back and excuse a forward to Raj that happened yesterday.`,
        ],
      },
      {
        title: 'Why helpful people overstep',
        paragraphs: [
          `Each extra step feels like a continuation of the same favour rather than a new one. The outcome, a fixed light, seems to justify all of them. But Elsie's message is hers in three ways you cannot see from the outside: her voice, her choice of audience, and her timing. Overstepping on any of them takes something that was not offered. The warmth of the intention does not give it back.`,
          `Two habits. When someone asks for help with something of theirs, say to yourself which of the five rooms the key opens, and stay in it. And when you finish, say plainly what you changed and what you did not touch. Then the owner knows exactly what state their flat is in.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Check before expanding the task',
        alt: 'Elsie requests spelling only, the helper offers a wording suggestion, and accepts her narrower request.',
        caption: `Look at the second line and notice the helper asks before entering the next room, naming the specific thing on offer rather than "can I help more?" Then read the last line as the handover of the key: what was changed, and what was not sent or shared. Fictional draft; the helper finishes inside the permission actually given.`,
        items: [
          { label: 'Elsie', detail: 'Could you check the spelling in this repair message?' },
          { label: 'Helper', detail: 'Would you also like a wording suggestion, or spelling only?' },
          { label: 'Elsie', detail: 'Spelling only. I want it to sound like me.' },
          { label: 'Helper', detail: 'Two spelling changes marked. Nothing sent or shared.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'A fictional two-sentence message'],
      steps: [
        `Write a pretend two-sentence message about a missing parcel, and above it write the request you have been given: "Check the spelling only." The request at the top is the key with its one job attached.`,
        `List four things you could do: identify a typo, rewrite the complaint, show it to a friend, send it to the delivery company. Writing them as a list makes it visible that they are four rooms, not one.`,
        `Mark which of the four the existing request covers, then for each of the others draft a specific permission question, naming the edit, the person, or the sending. Rehearse both roles alone, asking and answering.`,
        `Finish with a completion note that states what you changed and what you did not do, and do not send the practice message anywhere. The note is the key being handed back.`,
      ],
      notice: `The original permission covered exactly one of your four actions, and the other three sit on the page as separate offers waiting for a yes rather than as things you assumed. The owner could read your note and know the exact state of their message.`,
      troubleshooting: `If one of your permission questions just says "Can I help more?", replace it with the actual room: the specific edit, the specific recipient, or the act of sending. If you find you have already rewritten a sentence in step one, that is the fern being repotted; put it back and offer the rewrite separately.`,
    },
    recall: {
      prompt: 'A cousin lets you improve a job application paragraph. Can you upload the revised document to their account because the deadline is near?',
      hint: 'Editing a document and submitting it have different consequences.',
      answer: `Not on the strength of editing permission, no. Improving a paragraph is watering the plants; submitting the application is letting someone into the flat and signing for a delivery in their name. The deadline makes the extra step feel like the same favour continued, but uploading commits your cousin to a version, a destination, and a moment they may not have chosen. Ask specifically: "Do you want me to submit this version, to this address, now?" and do it only on a clear yes, with the final text in front of them. If they cannot be reached in time, a missed deadline is their situation to decide about, not yours to pre-empt with a key you were given for a different job.`,
    },
    quiz: {
      question: 'A friend approves your suggested wording but has not discussed sending. What should happen next?',
      options: [
        'Return the approved wording and let them send, unless they explicitly ask you to do it.',
        'Send the approved draft because they already accepted its content.',
        'Forward it to a knowledgeable mutual friend for a final check.',
      ],
      correctIndex: 0,
      explanation: `Approving the words opens the editing room and no other, so the wording goes back to your friend and the sending stays theirs unless they hand you that key in so many words. Sending because they liked the content treats one permission as all of them. Forwarding to a mutual friend opens a different room again, the audience, which was never discussed at all.`,
    },
    takeaway: `A request for help is a key to one room, so treat reading, suggesting, editing, sharing, and sending as five separate permissions, do only the one you were given, ask by naming the specific next step rather than "can I help more?", say at the end exactly what you changed and what you did not touch, and remember that a later yes opens a new room from that moment and never excuses an earlier one.`,
    sourceNote: 'Boundary and listening sources inform this example of ordinary assistance. It does not establish legal agency or authorization rules.',
  },
  {
    id: 'people-011',
    outcome: `Separate what someone felt from the explanation they attached to it, acknowledge the feeling fully, and keep the other people's motives open rather than confirming blame or rushing to reassure.`,
    scene: 'A cousin discovers photographs of a dinner she was not invited to and feels excluded.',
    sections: [
      {
        title: 'Two claims in one sentence',
        paragraphs: [
          `Your cousin Noor turns her phone towards you. Photographs of a dinner: five of her friends, a long table, candles. She was not there and was not asked. "I feel left out," she says. "They must all be tired of me." You love her and the sentence is painful to hear, and the loyal reply is right there: of course they are not, or, worse, yes, they clearly do not value you.`,
          `Look at the sentence again. It is two claims wearing one breath. "I feel left out" describes her experience, and she is the only authority on that. "They must all be tired of me" explains five other people's thoughts, and neither of you has any access to those. You know the photographs exist and you know the omission hurt. You do not know who organised the dinner, how, or why she was not asked. Adding your voice to the second claim lends your authority to a story that nobody in the room has checked.`,
        ],
      },
      {
        title: 'The first-aider does not name the culprit',
        paragraphs: [
          `Someone goes down on a football pitch clutching an ankle. The first-aider does not say "that was a dirty tackle" and does not say "I am sure he did not mean it". She says "that looks really painful", because it does, and she can see that much. Whether there was a foul is for the referee, the replay, and a conversation she was not part of. Her job is the ankle. Treating the pain and assigning the blame are two different jobs, and doing the second badly does not make the first any kinder.`,
          `Reflecting a feeling is first aid. You put your understanding into words so the person can confirm or correct it, and you do not have to endorse every conclusion attached. "Finding those pictures hurt, especially because you expected to be included" takes the ankle seriously. It says nothing about the tackle. From there you can ask what she actually knows about how the evening came about. The other temptation, swinging straight to "I am sure it was an accident", is just the opposite verdict delivered with the same lack of evidence. Support does not need certainty in either direction. You can stay with Noor's disappointment while the cause of the dinner stays open.`,
        ],
      },
      {
        title: 'Let the unknown remain visible',
        paragraphs: [
          `You ask, and Noor explains that one of the friends had talked about meeting up and never followed through with a date. Now you can say back what is known: "So you were expecting an invitation, and we do not yet know how this dinner was organised." She agrees that the missed expectation is the thing she wants to talk about. Nobody has been excused and nobody has been convicted.`,
          `From here the conversation can go where she wants. If she wants ideas, asking the friend directly is one; if she just wants to talk, you talk. Either way, the conversation stands on two solid things, her hurt and the events you both know, and not on a verdict about her worth that five absent people were never asked to give.`,
        ],
      },
      {
        title: 'Why loyalty reaches for a verdict',
        paragraphs: [
          `Agreeing with "they are tired of me" feels like taking her side; disagreeing with it feels like comforting her. Both are attempts to end her pain quickly by settling the question of blame, and both hand her a story about her friends that will shape how she treats them tomorrow. The first-aider who speculates about the tackle is not helping the ankle. She is making the next match worse.`,
          `Two habits. When someone tells you a feeling and a motive in the same sentence, reflect the feeling in full and leave the motive as a question. And when you notice yourself about to say "they clearly" or "I am sure they", stop, because both are claims about a mind you have not met.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What can this reply honestly support?',
        alt: 'One statement reflects Noor\'s reported disappointment; the other certifies an unverified motive for the dinner invitation.',
        caption: `Read each line and ask what evidence it rests on. The first rests on things Noor told you and things you saw, the photographs and the expectation; it is the first-aider looking at the ankle. The second rests on the contents of five absent people's heads. Same photographs, and only one reply stays inside what anyone in the room knows.`,
        items: [
          { label: 'Experience acknowledged', detail: 'You expected to be included, so finding those pictures hurt.' },
          { label: 'Motive added', detail: 'They left you out because they no longer value you.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Write this fictional statement at the top of a page: "Nobody replied to my invitation. They think I am boring." Reading it as one sentence is how it arrives; splitting it is the whole exercise.`,
        `Draw two columns, reported event and supplied explanation, and put each half of the sentence in the right column. The left column is the ankle; the right is the tackle nobody saw.`,
        `Draft a supportive reply about the experience of waiting for replies that never came, and keep the reason for the silence open in your wording. If a cause creeps in, in either direction, cross it out.`,
        `Rehearse a follow-up alone: a neutral question about the invitation, such as how it was sent and to whom. Do not replace "they think I am boring" with a guaranteed reassurance; leave the question genuinely open.`,
      ],
      notice: `Your reply takes the disappointment seriously and leaves more than one explanation of the silence standing. You have treated the ankle without ruling on the tackle, and the next question is about facts rather than feelings about facts.`,
      troubleshooting: `If your reply sounds cold, name the missed expectation more directly, "you put yourself out there and heard nothing", rather than compensating with an invented reassuring motive. If you have written "I am sure they", you have ruled on the tackle in the other direction.`,
    },
    recall: {
      prompt: 'A colleague says, "My suggestion was not discussed. The team thinks I am useless." How could you respond?',
      hint: 'Recognize the experience without claiming access to the team\'s opinion.',
      answer: `Treat the ankle first: "Having your suggestion passed over like that was discouraging, especially if you had put work into it." That is the part you can honestly support, because they told you it and you can see it. Then leave the tackle open with a question about what actually happened: was the agenda full, did the chair move on, did anyone acknowledge it? What you do not do is agree that the team thinks they are useless, which certifies a verdict from people you have not consulted, or insist that the team definitely values them, which is the same guess facing the other way. The team's opinion is a fact you can find out, not one you can supply, and your colleague is better served by the discouragement being heard than by a verdict in either direction.`,
    },
    quiz: {
      question: 'A friend is upset because a message went unanswered. Which response supports them without deciding why?',
      options: [
        'They probably got busy; try not to take it personally.',
        'That silence sounds deliberate given how much this mattered.',
        'Waiting without an answer was upsetting. What do you know so far?',
      ],
      correctIndex: 2,
      explanation: `The third reply treats the ankle, naming the upset of waiting, and then asks for facts rather than supplying a motive, which is the first-aider's job done properly. The first reply rules that there was no foul and the second rules that there was, and both are verdicts about a person's intentions that an unanswered message cannot give you.`,
    },
    takeaway: `A feeling and an explanation often arrive in one sentence, so be the first-aider: take the hurt fully seriously, "you expected to be included and finding those pictures stung", and leave the other people's motives open rather than confirming blame or rushing to reassure, because both "they clearly" and "I am sure they" are rulings on a tackle nobody in the room saw.`,
    sourceNote: 'Communication and listening guidance inform the distinction. This example does not provide a way to infer intentions from silence or social invitations.',
  },
  {
    id: 'people-012',
    outcome: `Summarise a complaint at the same size the speaker made it, keeping the event, how often, and who it is about unchanged, and shrink the summary back when they correct you instead of defending it.`,
    scene: 'A film-club member objects to one joke in an introduction, not to the presenter as a person.',
    sections: [
      {
        title: 'A summary can enlarge a complaint',
        paragraphs: [
          `After the screening, Imani says, "I did not like the joke about people arriving late." You want to show you have understood, so you say, "You think the presenter is insensitive." It feels like the same thing in other words. It is not. Imani described one joke in one introduction. You have described a man's character.`,
          `Watch what happens next. Imani now has to defend the presenter, whom she rather likes, just to get her own concern back to its original size. Your sympathetic summary has created a bigger disagreement than she ever meant to raise, and she is on the wrong side of it. A reflection is supposed to be a check on your understanding. This one turned a moment into a personality assessment, and she did not ask for either.`,
        ],
      },
      {
        title: 'The photocopier set to enlarge',
        paragraphs: [
          `A photocopier has a setting for size. Leave it at 100% and the copy matches the original edge for edge. Nudge it to 150% and the copy is recognisably the same document, bigger, with the margins pushed off the page. Nobody would hand back a 150% copy and call it a faithful reproduction. A summary is a copy of what someone said, and most of us have the enlarge button quietly stuck on. The event becomes a pattern, the behaviour becomes a trait, and the one person becomes everyone.`,
          `To copy at 100%, listen for the edges of the claim: which event, which behaviour, and how often. Words like always, everyone, and never are the enlarge button; do not add them unless the speaker used them on purpose. You do not have to repeat every word, but you do have to keep the size. "The late-arrival joke bothered you" is the same document. "You do not enjoy his introductions" has added a pattern that was never in the original. The size matters practically as well as politely: a request about one line in one introduction is easy to raise with someone, while an argument about his whole record is not something Imani can take anywhere.`,
        ],
      },
      {
        title: 'Use the correction rather than defending the summary',
        paragraphs: [
          `Imani says, "I usually like his introductions. This time I thought newcomers might feel singled out." You reset the copier: "So the concern is that particular line, especially for new members?" She agrees. Now there is room to ask whether she wants to mention the wording to the presenter, and nothing in your summary claims she dislikes him.`,
          `If she corrects you again, revise again. A summary is not a position you have to hold; it is a draft of her meaning that she gets to edit. The practical result is a concern another person could repeat word for word without accidentally accusing anyone of a broader pattern than the one she described.`,
        ],
      },
      {
        title: 'Why the copy comes out bigger',
        paragraphs: [
          `Enlarging feels like empathy. A bigger claim sounds more serious, and taking someone seriously feels like being on their side. There is also a shortcut at work: it is quicker to file "one joke bothered her" under "she has a problem with him" than to hold the small specific thing in mind. The speaker pays for the shortcut, because now their modest point has your enlargement attached to it.`,
          `Two habits. Before you summarise, name to yourself the event, the frequency, and the target the speaker actually gave, and keep all three at that size. And when they correct you, treat the correction as the better copy and read it back, rather than explaining why your version was also fair.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Narrow the reflection back to the event',
        alt: 'Imani corrects a broad summary about the presenter, and the listener returns to the specific late-arrival joke.',
        caption: `Compare the listener's two lines. The first enlarged the copy: one joke became all his introductions. The last has been reset to 100%, naming the particular line and the particular people it might affect, and it ends by handing the copy back for checking. Notice which words vanished after the correction: the judgement of the presenter.`,
        items: [
          { label: 'Imani', detail: 'I did not like the late-arrival joke.' },
          { label: 'Listener', detail: 'You dislike his introductions?' },
          { label: 'Imani', detail: 'Usually I like them. This line could single out newcomers.' },
          { label: 'Listener', detail: 'That particular line, especially for new members. Have I understood?' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper or a private draft'],
      steps: [
        `Copy the statement "The music at dinner made it hard to hear" and, beneath it, the summary "You never enjoy visiting them." Seeing the original and the enlargement side by side is the point of the exercise.`,
        `Mark exactly what grew: one dinner became never, and the music became the whole visit and the hosts. Those are the two edges the copier pushed off the page.`,
        `Write a new summary that keeps the original event and its effect at their original size. You can do this alone; it is a sentence about one dinner and some loud music.`,
        `Add a fictional correction, "Only during the first course," and revise your summary to include that narrower scope. The correction is the better copy, so your version should shrink to meet it.`,
      ],
      notice: `Your final summary is no bigger than the speaker's corrected account, and arguably smaller than the one you started with. Nothing in it would make the speaker defend their hosts.`,
      troubleshooting: `If you cannot point to the speaker's own words to support a frequency, a trait, or a wider target, delete it and go back to the named event. If you find yourself explaining why your summary was reasonable, you are defending the copy instead of correcting it.`,
    },
    recall: {
      prompt: 'A colleague says one chart was hard to read. How could you summarize that without implying they rejected the whole report?',
      hint: 'Keep the object and size of the criticism unchanged.',
      answer: `Keep the copier at 100%: "So the chart on page four was hard to read; is that the one?" and ask which feature of it, the labels, the colours, the size. The original claim has three edges, one chart, readability, no comment on anything else, and a faithful summary keeps all three. The enlargements to avoid are turning readability into disagreement with the findings, one chart into the figures generally, or a design note into a verdict on the report. If your colleague then says the whole set of charts shares the problem, that is their correction, and you can grow the summary to match it. Until they do, one hard-to-read chart is the entire document.`,
    },
    quiz: {
      question: 'A friend says this morning\'s interruption bothered them, but says nothing about a pattern. Which summary fits?',
      options: [
        'You feel unheard in this friendship.',
        'Being interrupted this morning bothered you; is that the issue?',
        'You want us to avoid discussing that subject again.',
      ],
      correctIndex: 1,
      explanation: `The second summary is the 100% copy: one interruption, this morning, and a question mark that hands it back for checking. The first has enlarged a single event into a verdict on the whole friendship, and the third has invented a rule about the future that your friend never proposed. Both would leave the friend arguing you back down to the size of what they actually said.`,
    },
    takeaway: `A summary is a photocopy of what someone said, and the enlarge button is usually stuck on, so keep the event, the frequency, and the target at exactly the size the speaker gave them, never add always, everyone, or never on their behalf, hand the copy back with a question, and when they correct you, shrink to match rather than explaining why your bigger version was fair.`,
    sourceNote: 'Berkeley supports paraphrasing and correction. The film-club example illustrates scope; it does not decide whether the original joke was acceptable.',
  },
  {
    id: 'people-013',
    outcome: `Treat a short or clipped reply as an observation rather than a diagnosis, offer any feeling you guess as an easily corrected question, and follow the person's own account when they correct you.`,
    scene: 'A customer gives a short reply while comparing two bicycle-repair options at a counter.',
    sections: [
      {
        title: 'A short reply does not name a feeling',
        paragraphs: [
          `At the repair counter you lay out two options for a bike: one cheaper, one dearer. The customer says, "Fine." Just the one word, and to your ear it comes out clipped. You decide on the spot that they are annoyed about the price, and you start explaining why the parts cost what they cost and how much labour goes into the dearer job. The customer cuts in. "I am not angry. I do not understand which repair I need."`,
          `You answered a feeling you inferred, and missed the question they actually had. The one word was a real observation. What it meant was never certain, even though you had heard this customer chat happily at the counter before and "fine" sounded different today. A change in tone is a thing you noticed. It is not a thing you know.`,
        ],
      },
      {
        title: 'The smoke alarm that might be a battery',
        paragraphs: [
          `A smoke alarm chirps in the hallway. It could be smoke. It could equally be a low battery, steam from the shower, or dust in the sensor. Nobody sensible grabs the fire extinguisher and sprays the kitchen on the strength of the chirp. You go and look, because the alarm tells you to check, not what you will find. The chirp is information about the alarm. The fire is a separate question.`,
          `A clipped reply is a chirp. It tells you to check; it does not tell you what is burning. Sometimes the right check is a tentative feeling question, worded so it is easy to say no to: "Are you frustrated with these options, or is something else unclear?" Often you do not need the feeling at all, and a plain task question fits a service counter better: "Which part would you like me to explain?" Knowing someone can sharpen which question you ask. It does not license a verdict, and a shift from their usual tone does not prove anger, deceit, or a hidden attitude. Use what you know about the person to make the check better, never to make the accusation firmer.`,
        ],
      },
      {
        title: 'Let their answer redirect the conversation',
        paragraphs: [
          `The customer says, "I am confused about why one option costs more." That is the hallway with no smoke in it. You say, "Thanks for correcting me. One replaces the worn part; the other includes adjusting everything around it. Shall I separate the work and the costs?" Now they have two concrete things to compare, which is what they wanted when they said fine.`,
          `Notice what you do not do. You do not try to establish whether they were also a bit annoyed. Their stated question is enough to steer the next two minutes, and if they would rather not discuss feelings at a repair counter, the service task is the whole conversation. The thing you can actually check afterwards is whether the options became clearer, not whether you decoded a tone correctly.`,
        ],
      },
      {
        title: 'Why the chirp sounds like fire',
        paragraphs: [
          `Short replies are uncomfortable, and the mind rushes to fill them with a reason, usually a reason about you. Defending the price feels like responsiveness. From the customer's side it is a stranger arguing with a feeling they never expressed, which is more irritating than the price ever was. Tone is also a terrible instrument: tiredness, concentration, a second language, and a bad morning all produce the same clipped word.`,
          `Two habits. When a reply sounds off, name the observation to yourself, "short answer", and keep it separate from any interpretation, "annoyed with me". And if you do offer a feeling, phrase it so that no is easy, then take the no at face value and follow whatever they say instead.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A correction changes the service response',
        alt: 'The customer rejects an anger guess and asks for the repair options to be explained instead.',
        caption: `Read the helper's first line and notice the shape of it: a guessed feeling offered with an "or something else" that makes no easy to say. Then watch the correction land, and see that the third line answers the customer's actual question without a word about whether they were also annoyed. The chirp was a battery, not a fire. Fictional exchange.`,
        items: [
          { label: 'Helper', detail: 'Are you frustrated with the price, or is something else unclear?' },
          { label: 'Customer', detail: 'I am confused about what each option includes.' },
          { label: 'Helper', detail: 'Let us separate the work and costs so you can compare them.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Write the sentence "My teammate answered briefly, so they disliked my idea." Draw a line between the observation, a brief answer, and the interpretation, dislike. The line is the whole lesson; the chirp is on one side and the fire is on the other.`,
        `Draft two possible checks: one tentative feeling question that is easy to say no to, and one task question that needs no feeling named at all. Having both ready means you can pick the one that fits the room.`,
        `Rehearse both roles alone, and have the teammate answer, "I like it; I am unsure about the date." Say it out loud, because hearing a correction is a different skill from reading one.`,
        `Write a follow-up about the date, and delete any sentence that tries to show the brief reply really did mean dislike. If you are still arguing for the fire after seeing the empty hallway, the check was not a check.`,
      ],
      notice: `Your final reply follows the uncertainty the teammate actually stated, the date, and leaves your original guess about dislike behind without a fight. The observation stayed an observation.`,
      troubleshooting: `If the feeling question sounds intrusive for the setting, drop it and use the task question; people volunteer emotional context when they want to. If you find yourself writing "but you seemed", cross it out; that is spraying the extinguisher at a battery.`,
    },
    recall: {
      prompt: 'Your brother speaks more quietly than usual about a move. You assume sadness, but he says he is concentrating on costs. What changes?',
      hint: 'His correction is more useful than your comparison with his usual voice.',
      answer: `Everything about your next sentence. The quiet voice was a chirp, and you went to check by offering sadness as a guess; he opened the door and showed you a spreadsheet instead. Take that at face value. Your response now follows the costs: ask whether he wants to talk them through, or whether he would rather keep concentrating, and let him choose. What does not happen is a second attempt to establish that he is secretly sad underneath the arithmetic. His account of his own state outranks your comparison with how he usually sounds, and the quieter voice may be nothing more than a man doing sums in his head. If sadness is there, it will arrive when he brings it.`,
    },
    quiz: {
      question: 'You guessed disappointment, but a friend says they feel relieved. What best keeps the reflection accurate?',
      options: [
        'Use relieved and ask what part brought relief, if they want to discuss it.',
        'Ask whether relief might be covering disappointment.',
        'Explain which details made disappointment seem more likely.',
      ],
      correctIndex: 0,
      explanation: `Taking relieved and asking about it, if they want to say more, is checking the hallway and finding no smoke: the guess did its job by being corrected. Asking whether relief covers disappointment keeps spraying the extinguisher after the all-clear, and explaining why your guess was reasonable argues with the person about the contents of their own head.`,
    },
    takeaway: `A clipped reply is a smoke alarm chirping, a signal to check and not a report of fire, so keep the observation separate from your interpretation, offer any guessed feeling as a question that is easy to say no to, or skip the feeling and ask about the task, and when the person tells you what is actually going on, follow that and let the guess go without a fight.`,
    sourceNote: 'Listening and communication sources inform tentative reflection. This lesson does not endorse diagnosing feelings, personality, or honesty from voice or movement.',
  },
  {
    id: 'people-014',
    outcome: `When someone describes a decision with a pull in one direction and a worry in the other, reflect both halves in one sentence, check for anything missed, and resist turning the summary into a vote.`,
    scene: 'A parent considers an evening pottery course that offers creative time but adds a late journey home.',
    sections: [
      {
        title: 'Both parts belong to the decision',
        paragraphs: [
          `Your mother is thinking about an evening pottery course. She likes the idea of making something with her hands alongside other beginners. She also does not like the thought of the last bus home at ten. You happen to want her to go. So your summary comes out as, "You are excited to finally have a hobby." The bus has vanished. Had you been worried about her instead, it would have come out as, "It sounds exhausting." Then the pottery would have vanished.`,
          `Both summaries do the same thing from opposite directions. They take a mixed account and flatten it into a single arrow, pointing the way the summariser already leans. Her attraction and her worry are both real, both hers, and both present at the same time. Neither one is the insincere part. A summary that drops either has stopped reflecting and started campaigning.`,
        ],
      },
      {
        title: 'Reading only one pan of the scales',
        paragraphs: [
          `Picture an old pair of kitchen scales with two pans. Flour on one side, weights on the other, and the needle shows how they compare. Now imagine reading the scales by looking only at the pan you are interested in. "Plenty of flour," you report, ignoring that the weights side is heavier. You have described the scales accurately and told nobody anything about the balance. A decision with a pull and a worry is two pans. The person deciding needs both in view before the needle means anything.`,
          `The sentence that keeps both pans is short: "You want the creative time and the company, and you are unsure about getting home so late." The word and is doing the work, holding both sides up at once. But is not banned. It just tends to make the first pan sound cancelled by the second, so use it when that is what she said and not as a habit. There is no magic wording, only the test of whether both things she told you are still visible. Then ask whether you have missed a third pan, another concern or another attraction. Mixed feelings are not a sign that someone needs a shove. Reflecting the whole account does not oblige you to find a clever compromise.`,
        ],
      },
      {
        title: 'Understanding makes the next question narrower',
        paragraphs: [
          `Your mother says, "Yes. It is the last bus, not the class itself." That is the scales properly read. If she wants help, the next question is now small and practical. What time does the class actually finish? Is the ten o'clock bus the only way home? Those are things you can find out. An argument about whether hobbies are worth the trouble is not.`,
          `From here several things could happen. A daytime course might keep most of what she wanted. A lift from a classmate might solve the bus. She might decide this particular course is not worth the journey. All of those are her later choices. What you have given her tonight is the decision with both of its real dimensions on the table. You have not turned her hesitation into permission to sign her up. You have not turned her worry into a reason she must give the idea up.`,
        ],
      },
      {
        title: 'Why summaries lean',
        paragraphs: [
          `You usually have a view, and the view edits the summary before you notice. Dropping the pan you disagree with feels like encouragement or like protection, depending on which way you lean. In both cases it feels like kindness. The person on the receiving end hears their own words come back with half of them missing. They have to reinsert the missing half, which is tiring, and which quietly tells them which answer you wanted.`,
          `Two habits. When someone describes a decision with a pull and a worry, say both back in one sentence joined by and, and ask whether anything is missing. And if your summary ends with "so you should", delete the ending and check the account instead. That ending is the needle being pushed by your thumb.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What each summary leaves in view',
        alt: 'One summary retains only enthusiasm; a second includes the creative interest and the late journey concern.',
        caption: `Look at the first row and find what has been left off: the late journey, the whole second pan of the scales. Then read the second row and notice the word and holding both halves up. These are two reflections of the same decision, and neither one says whether she should enrol. Fictional course.`,
        items: [
          { label: 'Only the attraction', detail: 'You are excited about pottery. The late journey disappears from the summary.' },
          { label: 'Both concerns', detail: 'You want creative time and company, and you are unsure about the last bus home.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or a private note'],
      steps: [
        `Invent a decision about joining a weekend group and write one attraction in a left column and one practical concern in a right column. The two columns are the two pans, and seeing them side by side makes it obvious when one goes missing.`,
        `Combine the columns into a single reflection joined by and, with no recommendation anywhere in it. You can do this alone, or let a willing partner read the decision and hear your reflection back.`,
        `Add a correction that makes the concern more specific, such as the travel cost rather than a general lack of interest. Corrections usually narrow a pan rather than removing it.`,
        `Rewrite the reflection with that correction in it, then add one question about information still needed for the decision, such as what the travel actually costs. The question should be about facts, not about which way to jump.`,
      ],
      notice: `Both original concerns are still recognisable after the reflection became more specific, and the question at the end asks for a fact rather than a decision. The needle has not been touched.`,
      troubleshooting: `If your summary ends with "so you should", remove the conclusion and ask whether the account is complete; that ending is your thumb on the scales. If one column has vanished from your sentence, check which way you were leaning and put it back.`,
    },
    recall: {
      prompt: 'A colleague wants a stretch assignment and worries about losing time for current work. How could you reflect the whole account?',
      hint: 'Ambition and workload concern need not cancel each other.',
      answer: `Hold both pans up in one sentence: "You want the chance to stretch and learn, and you are worried about what happens to your current work while you do." Then ask whether that is the whole picture, because there may be a third pan, such as who would cover the existing responsibilities or whether the stretch is really optional. What you avoid is "you should go for it", which drops the workload concern, and "it sounds like a lot on top of everything", which drops the ambition; both are summaries with your thumb on the needle. Once both halves are confirmed, the useful next question is narrow and factual: which specific piece of current work worries them most, and could it be handed over or delayed?`,
    },
    quiz: {
      question: 'A friend likes a shared flat\'s company but wants more privacy. Which reply checks both concerns?',
      options: [
        'The company seems worth trying even with less privacy.',
        'You want the social side and need space alone; what would private space involve?',
        'The privacy concern suggests waiting for a different flat.',
      ],
      correctIndex: 1,
      explanation: `The second reply keeps both pans in view, the company and the need for space, and then asks a narrow factual question about one of them. The first reads only the social pan and leans toward moving in; the third reads only the privacy pan and leans toward waiting. Each might become a reasonable choice later, but both decide before the scales have been read.`,
    },
    takeaway: `A decision with a pull and a worry is a pair of scales, so reflect both pans in one sentence joined by and, "you want the creative time and the company, and you are unsure about the last bus", ask whether anything is missing, keep your own preference out of the wording, and if the sentence ends with "so you should", that is your thumb on the needle, and it comes off.`,
    sourceNote: 'Listening and interest-based negotiation inform this reflection. The course example does not establish that mixed concerns always have a mutually satisfying solution.',
  },
  {
    id: 'people-015',
    outcome: `Before arguing against someone's preference, say their reason back in words they would recognise, let them correct it, then state your own concern, so the disagreement is about the real difference.`,
    scene: 'Two colleagues disagree about using a live demonstration or a recording in a team presentation.',
    sections: [
      {
        title: 'The apparent disagreement is too broad',
        paragraphs: [
          `Ana wants a live demonstration in next week's team presentation. You want a recording. You assume she is after something impressive, a bit of theatre. So you start explaining how much more reliable a video is and how badly live demos go wrong. Ana hears you dismissing a point she never made. Ten minutes in, you are arguing hard. Neither of you is arguing about the thing the other one actually wants.`,
          `Before you defend anything, try describing her preference in words she would nod at: "You want the audience to see the steps happen in real time. Is that the main reason?" This is a check on your understanding. It is not an announcement that the live demo has been approved. It costs you none of your own position to ask it.`,
        ],
      },
      {
        title: 'Reading the order back',
        paragraphs: [
          `At a busy takeaway counter, a good server reads your order back before it goes to the kitchen: "Two chicken, one without chilli, extra rice." You say "the extra rice is for the second one", they fix it, and the kitchen cooks what you meant. The reading back does not commit the server to agreeing that extra rice is a good idea. It just makes sure the thing being argued about, or cooked, is the thing you actually asked for. Skipping it produces a fast, confident, wrong dinner.`,
          `Read Ana's preference back. She answers, "Partly, but I mainly want people to ask questions at each step." Your summary missed the main point. It was never about spectacle; it was about interaction. Use that correction. Do not praise her view and then restate your old objection to the version she corrected. Now you can put the two real wants side by side: "You want questions during the sequence. I want to avoid spending the meeting recovering from a technical failure." Understanding her is not agreeing with her. You have described her concern fairly and kept your own intact. Nobody has had to surrender a preference as the price of being heard.`,
        ],
      },
      {
        title: 'A correction reveals the actual difference',
        paragraphs: [
          `Once Ana confirms the revised summary, the proposal almost writes itself. A recording that pauses after each step for questions, with a live demonstration afterwards if there is time. She may take it, refuse it, or change it. The option earns its place because it answers questions during the sequence, which is what she said. It is not there because it splits the difference neatly down the middle.`,
          `And if the two needs genuinely cannot both be met, you still have a better disagreement than the one you started with. It is now interaction during the session against the risk of a failed demo. Those are two concrete things a team can weigh. Theatre against reliability was two caricatures nobody held. A fair summary pays for itself by changing what you respond to. It is worth nothing if it is just a polite noise before you ignore the answer.`,
        ],
      },
      {
        title: 'Why we argue with the wrong order',
        paragraphs: [
          `When someone wants something different from you, the mind supplies a reason for them instantly. The reason it supplies is usually the weakest one available, because that is easiest to argue against. Then you win the argument against the reason you invented. The person walks away unheard and unmoved. Reading the order back feels like a delay. It is the only step that makes the rest of the conversation about something real.`,
          `Two habits. Before you argue against a preference, say the other person's reason back in their terms and wait for the correction. And once they have confirmed it, state your own concern as plainly as you stated theirs. Then look for options, labelling anything you suggest a proposal rather than an agreement.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Check the reason before proposing a format',
        alt: 'Ana clarifies that questions during each step matter, and her colleague states a concern about recovering from live failure.',
        caption: `Look at the first line and notice it is a question, the order being read back, not a verdict. Then watch Ana correct it with a reason the colleague had not guessed. The last line does three things in order: states the colleague's own concern, and only then floats an option, with a question mark on it. Fictional exchange.`,
        items: [
          { label: 'Colleague', detail: 'You want everyone to see it happen live. Is that the main reason?' },
          { label: 'Ana', detail: 'Mainly I want questions at each step.' },
          { label: 'Colleague', detail: 'I want to avoid recovery delays. Could we pause a recording for questions?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper and pen'],
      steps: [
        `Choose a fictional disagreement about an outdoor or indoor group meal and write one reason for each side. Writing a reason for the side you do not hold is the first attempt at reading the order back.`,
        `Draft a fair summary of the preference you do not share, in words that person would accept, followed by a check: "Is that the main reason?" If your summary contains the word just or merely, it is not yet fair.`,
        `Answer as the other person yourself, adding a reason you had not thought of, and revise the summary to include it before you defend your own preference. The correction is the point of the exercise, so make it a real one.`,
        `Write your own preference separately, then one possible arrangement, and label the arrangement proposal, not agreement. The label keeps you honest about what a suggestion is.`,
      ],
      notice: `Your proposed arrangement responds to the corrected reason rather than your original guess, and your own preference is still on the page in full. Understanding them cost you nothing.`,
      troubleshooting: `If your summary sounds sarcastic, strike out merely, obviously, and just, and use the exact reason the person gave. If you find you skipped the correction step because your first summary felt right, go back; the order you did not read back is the one the kitchen gets wrong.`,
    },
    recall: {
      prompt: 'A sibling wants a large birthday gathering; you prefer a small dinner. What can you do before debating the guest count?',
      hint: 'Check what the larger gathering provides without agreeing to host it.',
      answer: `Read the order back. Say their reason in their words, "You want the whole family in one room for once, including the cousins we never see; is that the main thing?", and let them correct you, because the real reason may be something you have not guessed, such as a relative who may not be around next year. Reading it back commits you to nothing about hosting forty people. Then say your own concern just as plainly: that a small dinner is the only version you have the energy or the space for. Now the two real wants are on the table, a rare gathering against a manageable evening, and you can look at arrangements, a big open-house afternoon plus a small dinner, say, as proposals. Debating the guest count first would have been an argument about numbers standing in for an argument about reasons.`,
    },
    quiz: {
      question: 'You summarize a neighbour\'s parking concern, and they correct your reason for it. What should come next?',
      options: [
        'Offer a compromise based on your first understanding.',
        'Accept their preferred arrangement to show you listened.',
        'Update the summary, then state your own concern before considering arrangements.',
      ],
      correctIndex: 2,
      explanation: `The correction is the kitchen being told the real order, so the summary gets updated first, your own concern goes on the table beside it, and only then do arrangements get discussed. A compromise built on your first understanding cooks the wrong dinner carefully. Accepting their arrangement to prove you listened confuses understanding with agreement, which were never the same thing.`,
    },
    takeaway: `Before you argue against a preference, read the order back: say the other person's reason in words they would accept, wait for the correction, and revise, then state your own concern just as plainly and treat any arrangement you suggest as a proposal, because understanding someone accurately buys you a better disagreement and costs you none of your position.`,
    sourceNote: 'Principled negotiation and listening support the distinction between understanding and agreement. The presentation format is an invented option, not a proven best practice.',
  },
  {
    id: 'people-016',
    outcome: `State a personal limit as a specific thing you will or will not do, so the other person can plan around it, rather than as an instruction about how they should run their life.`,
    scene: 'A neighbour asks for daily plant watering, while the helper is available only on Saturday.',
    sections: [
      {
        title: 'Whose action does the sentence govern?',
        paragraphs: [
          `Your neighbour is going away for a week and asks you to water the balcony plants every day. You like the neighbour and you like the plants. You can also realistically get there on Saturday and no other day, because the rest of the week is already spoken for. Two sentences are available to you. "You need to stop going away so often." Or: "I can water on Saturday; I cannot take on the daily job."`,
          `They may feel like two ways of saying no, but they are not about the same person. The first tries to govern your neighbour's travel. The second describes your own participation. The difference is not that one sounds gentler, since you can say either in any tone. It is whose action the sentence controls. You get to decide whether you take this request on. You do not get authority over when somebody else leaves town, and a limit written as a command claims an authority you were never given.`,
        ],
      },
      {
        title: 'The opening-hours sign',
        paragraphs: [
          `A shop puts a sign in the window: Open Saturdays, 9 to 5. That is a limit, and a perfectly good one. Customers read it and plan. Some come on Saturday, some find another shop for weekdays, nobody is offended. Now imagine a sign that read: Customers must not need anything on weekdays. It is trying to achieve the same thing and it is absurd, because it describes what other people are allowed to want instead of what the shop will do. The first sign is usable. The second is a complaint pretending to be a rule.`,
          `A personal limit should read like opening hours. Say what you will do, and say what remains uncovered so the other person can plan the rest. Here your neighbour needs the other six days watered, so make that gap clear before they rely on you. Avoid "I will see what I can manage" when you already know daily visits are impossible; that is a sign with no hours on it, and it leaves them unable to plan at all. Offer the Saturday only if you actually want to and it genuinely helps. If they are disappointed, the disappointment does not make your hours wrong. Just check that the help you did offer was understood.`,
        ],
      },
      {
        title: 'A limit does not erase an earlier promise',
        paragraphs: [
          `Your neighbour reads the sign and plans: "Then I will ask someone else for the weekdays. Could you still do Saturday?" You confirm the one visit. The arrangement now matches what you can actually do, and both of you know exactly what is covered.`,
          `One important case changes the shape of the conversation. If you had already promised the whole week and were now pulling back, you would owe a second part: acknowledging the changed commitment and talking through the gap you have left. Calling a sentence a boundary does not make earlier reliance disappear; a shop that posted new hours after taking a week of bookings would still have bookings to deal with. Here, because you set the hours before accepting anything, no daily coverage was ever promised. The result is a narrower agreement both people can plan around. It is not a rule requiring your neighbour to travel less.`,
        ],
      },
      {
        title: 'Why limits come out as commands',
        paragraphs: [
          `Saying "I cannot" feels exposed, as if you are admitting a shortfall, while "you should not" feels like a principle. So the limit gets dressed as advice about the other person's choices, and arrives as a judgement of their life rather than a fact about your week. They hear the judgement, not the availability, and the plants still do not get watered.`,
          `Two habits. When you need to set a limit, write it as opening hours: what you can do, when, and what that leaves uncovered. And before you say it, check the sentence for the word you; if it mainly describes what the other person must do, turn it round until it describes what you will.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: 'Whose action, and how specific?',
        alt: 'Four statements cross control of my action or your action with specific or vague wording.',
        caption: `Start in the top left, the only box that reads like an opening-hours sign: my action, stated specifically, with the uncovered days visible. Then read across to see the same limit go vague, and down to see it turn into a command about someone else's trip. Rows are whose action the sentence governs; columns are how specific it is.`,
        items: [
          { label: 'My action / specific', detail: 'I can water on Saturday, not on weekdays.' },
          { label: 'My action / vague', detail: 'I will somehow try to help.' },
          { label: 'Your action / specific', detail: 'You must cancel the weekday part of your trip.' },
          { label: 'Your action / vague', detail: 'You need to be more considerate.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or an unsent message'],
      steps: [
        `Invent a request to take in a neighbour's parcels every day for a week, and choose the one day you could honestly offer in the scenario. Deciding the real day first is what stops the limit from drifting into "I will see".`,
        `Write the limit as opening hours: the day you can do, and the days that remain uncovered, with no sentence about how often they should order things. You are writing the sign in the window, not a note about their shopping.`,
        `Rehearse alone: the neighbour asks for two more days. Write a reply that keeps the original hours clear without apologising for them or quietly extending them.`,
        `Finish with a line confirming exactly what, if anything, you have agreed to do, and check that no earlier promise has been silently cancelled by the new wording.`,
      ],
      notice: `The other person could plan the uncovered days right now, without guessing whether you will eventually give in and take them. Your sentence describes your week and says nothing about how they should run theirs.`,
      troubleshooting: `If your sentence is mostly about what they must do, turn it round so it is about the help you will give or decline. If it says "I will try" when you already know the answer, you have posted a sign with no hours on it; put the day back in.`,
    },
    recall: {
      prompt: 'A friend keeps a Saturday plan tentative. You have not committed yet and want to make other arrangements by Thursday. What limit could you state?',
      hint: 'Describe your planning action rather than requiring them to choose you.',
      answer: `Post your hours: "I can keep Saturday open until Thursday evening; if it is still unconfirmed by then, I will make other plans." That sentence governs your own action, holding the day and then releasing it on a stated date, and it leaves your friend entirely free to confirm, decline, or keep dithering with full knowledge of what dithering costs. The command version, "You need to stop leaving things so late," tries to govern their habits, offends them, and still leaves you not knowing what you are doing on Saturday. The opening-hours version is usable by both of you, and because nothing was promised earlier, there is no prior reliance to untangle; the sign simply went up before anyone booked.`,
    },
    quiz: {
      question: 'You cannot provide ongoing lifts but can offer one this Friday. Which reply states a usable limit?',
      options: [
        'I can drive this Friday, but please arrange other weeks separately.',
        'I will try to drive whenever it does not become too much.',
        'You should change your schedule so you need fewer lifts.',
      ],
      correctIndex: 0,
      explanation: `The first reply is the opening-hours sign: a specific thing you will do, Friday, and a clear statement of what is uncovered, the other weeks, so the person can plan. The second is a sign with no hours on it, and nobody can arrange anything around "whenever it does not become too much". The third governs the other person's schedule instead of your own participation.`,
    },
    takeaway: `A personal limit should read like a shop's opening hours, "I can water on Saturday, not weekdays", a specific statement of what you will do and what stays uncovered, so the other person can plan the rest; keep the word you out of it, never post a sign with no hours like "I will see what I can manage", and if you are changing hours after someone already booked, say so and deal with the gap.`,
    sourceNote: 'The inherited boundary guidance informs this example. Shared responsibilities and existing commitments still require discussion rather than relabelling them away.',
  },
  {
    id: 'people-017',
    outcome: `Decline an optional request by declining the request itself, warmly and briefly, without inventing an obstacle someone can fix or adding a replacement promise you do not actually want to make.`,
    scene: 'Friends ask someone to host another weekend dinner when the person wants a quiet weekend at home.',
    sections: [
      {
        title: 'A false obstacle invites repair',
        paragraphs: [
          `The group chat lights up: can everyone come to yours on Saturday? You hosted last time, and what you want this weekend is an empty flat and nothing to wash up. Saying that out loud feels blunt, so you reach for something softer. "I would love to, but the oven is broken." Within a minute someone has replied: no problem, we will bring takeaway.`,
          `Now you are stuck. The obstacle you invented has been removed, and you either host the dinner you did not want or invent a second obstacle, which will also be removed. A false excuse does more than feel awkward. It gives your friends wrong information about what would make the dinner possible, so they spend their goodwill solving a problem that was never the problem. The true answer was never about the oven. It was that you did not want to host.`,
        ],
      },
      {
        title: 'Closed, not out of stock',
        paragraphs: [
          `A corner shop that does not want to open on Sunday hangs a sign saying Closed. Nobody argues with it. Imagine instead a sign saying Sorry, no milk today. A customer knocks on the glass: that is fine, I only want bread. Now the shopkeeper has to open or invent a bread shortage too. The Closed sign works because it says the true thing, that the shop is not serving, and it gives nobody a problem to solve. The milk sign turns a decision into an obstacle, and obstacles invite helpful people to remove them.`,
          `So hang the Closed sign. "Thanks for asking. I am not hosting this weekend." That is a complete, usable answer, and it discloses nothing about your energy, your money, or what you plan to do with the empty flat. Truthful does not mean fully explained. Warmth and a clear decision fit in the same sentence. Two things to avoid: "Maybe" is a sign that says Back in five minutes, and it leaves the organiser hovering or trying to change your circumstances. And an offer of another date, "but next weekend for sure", is only honest if you actually want to host then and will follow through. A promise made to soften the moment is not a politer no. It is a new task with your name on it.`,
        ],
      },
      {
        title: 'Keep the answer clear when alternatives appear',
        paragraphs: [
          `A friend replies anyway: "We could keep it small and do all the washing up." It is a kind offer, and you still want the quiet weekend. "That is thoughtful, but I am still not hosting this time." You have not argued that takeaway is not easier or that they would not really wash up; you have left the decision where it was. They can find another kitchen or push the dinner back a week.`,
          `Someone may be a little disappointed, and you do not have to repair that feeling by changing your answer. One case is different: if you had already agreed to host and were now backing out, you would owe the group a proper update and some help with the gap. Here you are declining a new request. That is not the same as quietly withdrawing from a responsibility you accepted.`,
        ],
      },
      {
        title: 'Why the oven gets blamed',
        paragraphs: [
          `An obstacle feels kinder than a preference because it lets everyone pretend you would have said yes. It also feels safer, because an obstacle cannot be argued with. Except that it can, and will be, by exactly the friends who like you most and are keenest to help. The kindest no is the one that leaves nobody working to overturn it.`,
          `Two habits. When you decline an optional request, say the decision rather than a reason someone could fix, and keep the sentence short enough that it does not grow a reason by accident. And before you send it, reread for an accidental promise, a "next time" or a "maybe", and delete it unless you mean it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A decline that survives a workaround',
        alt: 'The host declines, friends offer an easier dinner, and the host thanks them while keeping the answer clear.',
        caption: `Look at the second line and notice it contains no oven, no appointment, nothing a friend could fix: it is the Closed sign. Then watch the workaround arrive in the third line and see that the fourth line thanks them and repeats the decision without disputing that takeaway would be easier. Fictional exchange.`,
        items: [
          { label: 'Friend', detail: 'Could we have dinner at yours on Saturday?' },
          { label: 'You', detail: 'Thanks for asking. I am not hosting this weekend.' },
          { label: 'Friend', detail: 'We could bring takeaway and wash up.' },
          { label: 'You', detail: 'That is thoughtful, but I am still not hosting this time.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['A private draft or paper'],
      steps: [
        `Pick a fictional optional request, such as lending your bicycle for the weekend, and decide honestly that you will say no. The decision has to be real before you can practise saying it.`,
        `Write a short reply: appreciation if it fits, then the decision, and nothing else. Leave out any invented punctures, appointments, or broken brakes; you are hanging the Closed sign, not the no-milk sign.`,
        `Alone, write a reasonable workaround the requester might offer, such as returning it by Saturday lunchtime, and respond without creating a new obstacle. If you find yourself inventing one, the first reply was leaning on an excuse.`,
        `Reread both replies for accidental promises, "next weekend instead" or "maybe another time", and keep them only if they are genuinely part of what you want to offer.`,
      ],
      notice: `Your answer still makes sense after the requester has offered to make it easier, because it was never about difficulty. Nothing in it needs defending, and nothing in it has committed you to a later weekend.`,
      troubleshooting: `If every reply seems to need another explanation, you are still describing a removable obstacle; go back to the decision itself and say that. If the no feels cold, add warmth about the person, not a reason about the bike.`,
    },
    recall: {
      prompt: 'A colleague asks you to join an optional weekend club. You are not interested but do not want to discuss your weekend plans. What could you say?',
      hint: 'An honest decline can leave personal details private.',
      answer: `Hang the Closed sign and keep the shop's interior private: "Thanks for thinking of me. I am going to pass on the club." That is true, it is warm enough, and it tells your colleague nothing about what you do with your weekends, which is yours to keep. The traps are the no-milk signs: a clash with a made-up commitment, which they may helpfully offer to work around by changing the day, or "maybe once things calm down", which signs you up for the same conversation next month. If they ask why, you can say it is simply not for you, which is a complete reason and needs no evidence. Declining the invitation and explaining your life are two different things, and only the first was asked of you.`,
    },
    quiz: {
      question: 'You do not want to volunteer for an optional event and cannot offer a later date. Which reply is clearest?',
      options: [
        'I might help if my weekend stays free.',
        'I cannot help this time; perhaps ask me for the next one.',
        'Thank you for asking, but I am not taking this on.',
      ],
      correctIndex: 2,
      explanation: `The third is the Closed sign: appreciation, then the decision, with nothing left open for anyone to fix. The first is a Back in five minutes sign that leaves the organiser hovering over your weekend. The second hangs out a promise about the next event that you have just said you cannot make, which guarantees the same awkward conversation later.`,
    },
    takeaway: `Decline with a Closed sign, not a no-milk sign: say the decision itself, "thanks for asking, I am not hosting this weekend", keep it warm and short, leave out any obstacle a kind friend could remove, delete any "maybe" or "next time" you do not mean, and if a workaround arrives, thank them and repeat the decision without arguing about whether takeaway would be easier.`,
    sourceNote: 'Boundary guidance informs this refusal. It neither cancels existing commitments nor requires sharing private reasons.',
  },
  {
    id: 'people-018',
    outcome: `Say when your time runs out before a conversation starts, let the other person choose a topic that fits, and close at the stated moment without a last question or a future promise you cannot keep.`,
    scene: 'A relative calls before an evening class, leaving a short but genuine window to talk.',
    sections: [
      {
        title: 'Make the available window visible',
        paragraphs: [
          `Your uncle rings at ten past six. You are hopping into a shoe with the phone under your chin. The class starts at seven and you need to be out of the door by twenty-five past. You would genuinely like to talk to him; it has been a while. If you say nothing about the clock, he will settle into the long story about the allotment committee. At twenty-four minutes past you will have to cut across it, and both of you will feel bad.`,
          `The information that would let him choose well is the one thing you have not said. So say it first: "I can talk until twenty-five past. Is that enough for what you wanted, or shall we save it for another time?" Now he knows the size of the window. He can decide whether his topic fits through it. That is the whole trick. The limit is not the problem. The limit arriving unannounced at the end is.`,
        ],
      },
      {
        title: 'Paying the parking meter up front',
        paragraphs: [
          `When you park at a meter, you pay for fifteen minutes and the ticket on the dashboard says so. Everyone can see when it runs out. You do your errand at a pace that fits. Nobody feels cheated when the time ends. A warden walking past can tell that the arrangement was honest. The alternative, parking without paying and hoping, is a slow build of anxiety ending in a surprise. The meter is not unfriendly. It is the clearest possible statement of how long you are staying.`,
          `Open a short call by paying the meter. The stated time lets your uncle choose: one quick update, or a note to ring properly on Sunday. A short yes is a different thing from an unlimited yes. He can work with either as long as he knows which he has. Two cautions. Do not top up the meter with a promise you cannot keep, such as a specific call tomorrow offered only to soften the limit. A time boundary works through accurate information and follow-through. It does not work by making him feel the class matters more than his story. And if all you really have is two minutes for a hello, say two minutes. Do not present a window that is not there. Caring about the conversation and having somewhere to be are not in conflict.`,
        ],
      },
      {
        title: 'Close the agreement you actually made',
        paragraphs: [
          `Your uncle picks the short update: the seedlings came through the frost. You listen properly, because you have fifteen honest minutes rather than fifteen guilty ones. Near the end you say, "I need to go now, as we said. I am so glad the seedlings made it." And then you go. No fresh question tossed in as you reach for the door. A new question at twenty-four past is a second ticket you have not paid for.`,
          `If the topic turned out bigger than the window, acknowledge that there is more to say. Arrange another time only when you can both actually commit to one. The useful result is a call whose ending was known at the start. It does not guarantee nobody is a little disappointed. Staying on once past the limit does not convert every future call into an open-ended obligation.`,
        ],
      },
      {
        title: 'Why the limit gets left until the end',
        paragraphs: [
          `Stating a time at the start feels like beginning a warm call with a cold fact. So people skip it and hope the conversation will end on its own. It never does. The limit then arrives as an interruption, which is far colder than the fact would have been. The meter paid up front is the kind version. The warden at the window is the unkind one, and skipping the first guarantees the second.`,
          `Two habits. When you answer a call or greet a visitor with limited time, state the ending in the first sentence and ask whether the topic fits. And when the time comes, close with warmth and without a new question. Keep any promise of a longer conversation for a moment when you can actually fix a date.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'An agreed short call',
        alt: 'At 6:10 the caller hears the 6:25 limit, chooses a short update, and the listener closes at the agreed time.',
        caption: `Read the first box as the parking ticket going on the dashboard: the ending is stated before anything else, and the question hands the choice of topic to the caller. Then check that the last box closes at the time the first one named, with warmth about the seedlings and no new question. Invented times; the spacing is schematic, not a duration scale.`,
        items: [
          { label: '6:10 / opening', detail: 'I can talk until 6:25. Does that fit what you wanted?' },
          { label: 'Topic chosen', detail: 'Yes, just a quick update about the seedlings.' },
          { label: '6:25 / close', detail: 'I need to leave now. I am glad the seedlings came through.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Your ordinary calendar, if useful'],
      steps: [
        `Choose a fictional call that arrives before a real kind of commitment, such as a meal or a class, and write down a realistic stopping time. A real time is what makes the meter honest; "a few minutes" is a ticket with no expiry on it.`,
        `Draft an opening that states the ending and asks whether the caller's topic fits inside it. Do not make an actual call for the drill; this is about the shape of the first sentence.`,
        `Rehearse the caller choosing a short update, then write your closing sentence. Read both roles aloud, because the close is where people most often add a question they did not mean to.`,
        `Check the closing for a new question or a future promise, and remove anything you could not follow through on. The meter runs out when it says it does.`,
      ],
      notice: `Your opening and your closing describe the same window of time, and nothing in between quietly extends it. The caller knew the ending from the first sentence and chose a topic that fitted.`,
      troubleshooting: `If the stated limit feels abrupt, add warmth about the person or the seedlings, not extra minutes; the ending stays where it was. If your closing line ends with a question mark, you have fed the meter again without meaning to; cut the question and keep the goodbye.`,
    },
    recall: {
      prompt: 'A neighbour visits while you have time for a brief chat but not a long visit. How can you make that usable for both of you?',
      hint: 'Name the limit before they settle into a longer conversation.',
      answer: `Pay the meter at the door: "Lovely to see you. I have got about ten minutes before I need to get on; is a quick chat all right?" That gives them the size of the window while they are still standing up, so they can decide whether to come in for ten minutes or come back another day. The failure mode is letting them take their coat off, settle on the sofa, and discover the limit when you start glancing at the clock, which is the warden at the window. When the ten minutes are up, close warmly and plainly, "I need to get on now, but it was good to catch up", and do not launch a new topic in the hallway. If they clearly wanted longer, suggest a proper visit only if you can genuinely name a time.`,
    },
    quiz: {
      question: 'A colleague asks for an optional debrief and you have a short gap. Which opening is most useful?',
      options: [
        'Start the discussion and mention the limit when the gap ends.',
        'State the stopping time and ask whether the topic fits that window.',
        'Offer a full discussion tomorrow before checking your calendar.',
      ],
      correctIndex: 1,
      explanation: `Stating the stopping time and asking whether the topic fits is the ticket on the dashboard: both of you can see the window and choose what goes in it. Starting first and announcing the limit at the end is the warden arriving mid-errand. Offering tomorrow before checking your calendar feeds the meter with a coin you may not have, which is a future promise built on hope.`,
    },
    takeaway: `Pay the parking meter before the conversation, not after: state the time you have in the first sentence, ask whether the topic fits that window, give the minutes you actually have with full attention, then close warmly at the stated moment with no new question and no promise of a longer call unless you can genuinely fix the date.`,
    sourceNote: 'Boundary and communication guidance inform these illustrative times. No call length is prescribed.',
  },
  {
    id: 'people-019',
    outcome: `Before repeating something told to you privately, ask the person a specific question naming exactly who would hear it and exactly what, then pass on only the approved words to the approved people.`,
    scene: 'A volunteer privately explains leaving a group chat, and another member asks for the reason.',
    sections: [
      {
        title: 'The audience changes when you repeat it',
        paragraphs: [
          `Ben has left the garden group's chat. He told you why, privately and in some detail: a family timetable has changed and his evenings are no longer his own. A week later another member catches you by the compost bins. "Was Ben unhappy with us?" They look genuinely worried. You have the answer on your phone, in Ben's own words, and forwarding the message would settle it in ten seconds.`,
          `The message was written to you. A screenshot hands the new reader Ben's exact wording, and probably the family details around it, none of which he chose to circulate. Taking his name off would not help in a group of nine people who all know who just left. Having information and having permission to redistribute it are two different things, and the second does not come free with the first.`,
        ],
      },
      {
        title: 'A letter addressed to you',
        paragraphs: [
          `A letter comes through your door with your name on it. You are entitled to read it. You are not thereby entitled to photocopy it and post a copy through every other door on the street, even if the neighbours are curious and the letter would answer their questions. If the neighbours need to know something, that the sender has moved, say, you can tell them that, without reading them the paragraph about why. The address on the envelope says who may read the letter. It says nothing about who may read copies.`,
          `Ben's message is the letter. Before anything moves, ask him a question that names the audience and the content: "May I tell the garden group only that your availability has changed, and leave out the family details?" That is specific enough to be answered. A vague "Can I mention it?" is not, because you and Ben may picture completely different mentions. If he says no, tell the worried member that the explanation is Ben's to give, which is true and kind. If he says yes to a one-line summary, use that line, not the original message. And a yes to one person is not a yes to the whole group; the audience is part of the permission, not an afterthought.`,
        ],
      },
      {
        title: 'Keep the practical need separate from curiosity',
        paragraphs: [
          `Ben approves "My availability has changed" and asks you to keep the family part private. So that is what you say by the compost bins, in those words, and nothing more. The group can now sort out who covers his Tuesday watering slot, which is the only thing it actually needed from the information.`,
          `Curiosity remains, and that is fine. Curiosity does not oblige you to produce private evidence, and the worried member's feelings about Ben are theirs to manage with Ben. There are rare situations where safety overrides privacy, and you should not promise absolute silence about everything forever. But a hypothetical emergency is not a licence for ordinary gossip about a man's evenings. The task here was arranging cover, and the approved sentence covers it.`,
        ],
      },
      {
        title: 'Why forwarding feels harmless',
        paragraphs: [
          `Nothing in Ben's message was shameful, the person asking means well, and sharing it would make an awkward moment disappear. All three things are true and none of them is the point. The point is that Ben chose his audience when he wrote to you, and the letter being innocent does not transfer that choice to you. People stop telling you things when they learn their words travel.`,
          `Two habits. Before you repeat anything told to you privately, ask the person a question that names who would hear it and what, and wait for the answer. And when you pass it on, use the approved words to the approved people and let curiosity about the rest stay unsatisfied.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A private account becomes an approved summary',
        alt: 'Ben gives a private explanation, approves one sentence for the garden group, and only that sentence is shared.',
        caption: `Watch what happens to the amount of information as it moves right: it shrinks to one sentence in the second box, before the audience grows in the fourth. That order is the whole method. The letter stays in your drawer; what reaches the street is the line Ben approved. Fictional flow; nothing in it authorises forwarding the original message.`,
        items: [
          { label: 'Private account', detail: 'Ben explains family timetable details to one listener.' },
          { label: 'Specific check', detail: 'May I tell the garden group only that your availability changed?' },
          { label: 'Permission', detail: 'Yes, that sentence only. Please leave out the family details.' },
          { label: 'Shared summary', detail: 'Ben says his availability has changed.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or an unsent draft'],
      steps: [
        `Invent a private explanation someone gives you for missing a club session, with a couple of personal details in it. Do not use a real message; the exercise is about the shape of the permission, not anyone's actual life.`,
        `Write down who wants to know and what practical decision they need to make, and draw a line between that need and plain curiosity. The need is usually one sentence long; the curiosity wants the whole letter.`,
        `Draft a permission question that names the exact recipient and the exact proposed summary, then answer it yourself with a narrower permission than you asked for. Narrowing is what real answers tend to do.`,
        `Write only the approved summary, then check it word by word against the permission. Keep the draft unsent; the point is that nothing in it would surprise the person who gave the permission.`,
      ],
      notice: `Your shared version contains nothing beyond the fictional permission, and it still serves the practical need completely. The detail that would have satisfied curiosity turned out to be unnecessary for the decision.`,
      troubleshooting: `If you find you need the full story to make the summary convincing, drop the goal of convincing anyone and keep the person's chosen limit; the group does not need to be persuaded, only informed. If your permission question says "mention it", rewrite it until it names who and what.`,
    },
    recall: {
      prompt: 'A coworker privately explains needing a different shift. The team needs a rota update, not the reason. What should you check before saying more?',
      hint: 'Separate a scheduling fact from the private explanation behind it.',
      answer: `Ask the coworker a specific question before the letter leaves your drawer: "Can I tell the team you are moving to the late shift from next month, and leave out the reason?" The team's practical need is the scheduling fact, who is working when, and that is usually all that needs to move. The reason behind it was told to you, not to the rota, and it does not become shareable because colleagues would find it interesting or because sharing it would stop them speculating. If your coworker says yes to the fact only, that is what you pass on, in those words. If they would rather announce it themselves, let them. The audience and the content are both part of the permission, and the team's curiosity is not a third party to the agreement.`,
    },
    quiz: {
      question: 'A friend allows you to tell one mutual friend that they are taking a break from a club. What does that cover?',
      options: [
        'That summary to the named friend, not the full message or a wider group.',
        'The full message to the named friend, because the topic is approved.',
        'The same summary to the club, because it contains no sensitive detail.',
      ],
      correctIndex: 0,
      explanation: `Permission has two edges, content and audience, and your friend set both: one sentence, one named person. Sending the full message to that person stretches the content edge, reading them the whole letter when one line was approved. Telling the club stretches the audience edge, posting copies through every door because the one line seemed harmless. Neither stretch was yours to make.`,
    },
    takeaway: `Something told to you privately is a letter addressed to you, so before any of it moves, ask a question that names exactly who would hear it and exactly what, "may I tell the group only that your availability changed?", then pass on the approved words to the approved people and let the rest stay in the drawer, because having information was never the same as having permission to copy it.`,
    sourceNote: 'The boundary source provides general context. This everyday privacy example does not define professional confidentiality duties or every exceptional disclosure situation.',
  },
  {
    id: 'people-020',
    outcome: `When a standing offer has to change, say so early, name the old offer honestly, state the new limit and its start date, and deal separately with anything already arranged under the old one.`,
    scene: 'An open invitation for a cousin to stay changes when the spare room becomes a workroom.',
    sections: [
      {
        title: 'The old offer is still information',
        paragraphs: [
          `A year ago, over a long lunch, you told your cousin, "Stay with us whenever you are in town." You meant it. Now the spare room is about to become a shared workroom with two desks in it. Overnight guests no longer fit. Your cousin does not know any of this. The last thing they heard from you on the subject was the open invitation, and that is what they are planning from.`,
          `Hoping they simply stop asking does not update the information they hold. Nor is it fair to tell yourself they should have realised the offer was temporary. You never said so and did not think so at the time. Both things are true at once: the new limit is reasonable, and the old offer was real and generous and meant. The job is to change the offer without rewriting the history.`,
        ],
      },
      {
        title: 'The library changes its loan rules',
        paragraphs: [
          `A library decides to shorten its loan period from four weeks to two. It does three things. It puts up a notice saying the change starts on the first of next month. It honours the due date on every book already out, because those were borrowed under the old rule. And it does not pretend the four-week loans never existed. Nobody feels cheated. The new rule applies to new loans, the old loans are respected, and the notice went up before anyone turned up at the desk with a stack of books.`,
          `Treat the standing offer like the loan rule. Say what changes and when: "The spare room becomes a workroom from next month, so we cannot offer overnight stays after that." Then do the library's second step. Ask whether anything is already out on loan. A vague open invitation and a specific weekend you both agreed to are different kinds of promise. If a particular visit was confirmed, acknowledge the inconvenience of touching it and talk about what can still be done. You do not have to provide a room you no longer have. But calling the change a boundary is not a reason to ignore plans made in reliance on your earlier yes.`,
        ],
      },
      {
        title: 'Resolve the known visit explicitly',
        paragraphs: [
          `Your cousin replies that they had already arranged with you to come next weekend. You check the calendar: the desks arrive after that, so you can still host it. "Next weekend is still confirmed. The change applies to visits after that, so please check with us before booking anything later." Now they know exactly which promise stands and which offer has ended. They can plan.`,
          `If the confirmed weekend had fallen after the desks arrived, the conversation would need the library's harder version. That means an honest apology for the clash and a practical discussion of alternatives, not a cheerful assurance. Either way, the result is a shared timeline. It is not a version of events in which the spare room was never offered.`,
        ],
      },
      {
        title: 'Why standing offers get quietly withdrawn',
        paragraphs: [
          `Taking back a generous offer feels like admitting you were wrong to make it. So people let it lapse in silence and hope nobody notices. The other person notices when they ask and get a strange, delayed answer. That feels far worse than a plain notice would have. The library that quietly stopped honouring old due dates would lose more trust than the one that put up a sign.`,
          `Two habits. When a standing offer has to change, say so before the next time it would be used. Name the old offer in the same breath as the new limit. And always ask what is already out on loan, dealing with confirmed arrangements as promises rather than as part of the general change.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Keep the promise and update the standing offer',
        alt: 'The host acknowledges the earlier invitation, confirms next weekend, and ends the open offer for later visits.',
        caption: `Read the three boxes as the library's three moves: name the old rule, honour the book already out, post the new rule with its start date. The middle box is the one people skip, and here it is a yes because the desks arrive later. If it had been a no, that box would hold an apology and a conversation instead. Fictional case.`,
        items: [
          { label: 'Acknowledge', detail: 'I did offer the spare room for your visits.' },
          { label: 'Confirmed visit', detail: 'Next weekend is still confirmed, before the room changes.' },
          { label: 'Future limit', detail: 'From next month we cannot host overnight. Please ask before planning later stays.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper and an ordinary calendar'],
      steps: [
        `Take a fictional standing offer to give someone a lift every Friday, and choose a future date from which that stops being possible. The date is the library's notice; without it, the change is just a mood.`,
        `List whether any specific Friday has already been confirmed, and keep those dates in a separate column from Fridays nobody has yet asked about. The confirmed ones are books already out on loan.`,
        `Draft the update in three parts: name the old offer, state the new limit with its start date, and say how each confirmed Friday will be handled. Three parts, in that order, so the history is not rewritten.`,
        `Rehearse the other person asking about one confirmed date, and write a clear answer that does not invent a replacement driver you have not actually found. If you cannot do that Friday, say so and discuss it.`,
      ],
      notice: `Your update tells the other person three different things and keeps them apart: what is still promised, what needs a conversation, and what is no longer on offer. They could plan from it without a follow-up question.`,
      troubleshooting: `If your draft reads as though the Friday lifts were never really offered, add a sentence that names the old offer plainly before the change. If a confirmed date has quietly slid into the "no longer offered" column, move it back; it was borrowed under the old rule.`,
    },
    recall: {
      prompt: 'You once offered unlimited feedback on a friend\'s drafts but can now read only one short piece a month. How would you update that?',
      hint: 'Separate the future limit from any draft you already agreed to read.',
      answer: `Put up the notice before the next draft arrives, and do the library's three moves. Name the old offer: "I know I said send me anything, any time." State the new rule with its date: "From this month I can read one short piece a month, and I want to keep doing that properly." Then check what is already out on loan: if there is a draft you have already agreed to read, that one is honoured under the old terms, and you say so, or if you genuinely cannot, you apologise and discuss it rather than letting it vanish. What you do not do is let your friend discover the change by sending three chapters and hearing nothing back for a month; silence is the library quietly stopping its old due dates, and it costs more trust than any notice.`,
    },
    quiz: {
      question: 'Your recurring volunteer availability changes, and next week\'s shift is already confirmed. What belongs in the update?',
      options: [
        'Only the new availability, so the coordinator can infer the rest.',
        'A statement that recurring offers are never firm commitments.',
        'The future change and an explicit discussion of the already confirmed shift.',
      ],
      correctIndex: 2,
      explanation: `The coordinator needs the new rule and the book already out on loan, so the update states the future change and deals explicitly with next week's confirmed shift, which was arranged under the old terms. Giving only the new availability leaves them guessing whether next week still stands. Declaring that recurring offers were never firm rewrites the history and dodges the shift they already planned around.`,
    },
    takeaway: `Change a standing offer the way a library changes its loan rules: post the notice before the next visit, name the old offer honestly in the same breath as the new limit and its start date, honour anything already borrowed under the old terms or apologise and discuss it if you cannot, and never let someone discover the change through silence or a rewritten history in which the room was never offered.`,
    sourceNote: 'Boundary and communication guidance inform expectations here, not the legal status of accommodation or other contracts.',
  },
  {
    id: 'people-021',
    outcome: `Raise a problem as three answerable parts, the event you saw, its effect on you, and the specific change you want, instead of a verdict on the other person's character that they can only deny.`,
    scene: 'A colleague changes the opening slides shortly before a joint presentation without notifying the speaker.',
    sections: [
      {
        title: 'Start with the change, not the character judgement',
        paragraphs: [
          `Ten minutes before the joint presentation, you open the shared deck and the first two slides are not the ones you rehearsed. Your notes no longer match. Ravi is across the desk, and what comes out of your mouth is, "You never respect my work." He looks up, startled, and says he was fixing an error. Now you are having an argument about his character and your use of the word never, and the slides are still wrong.`,
          `Rewind. What did you actually see? The opening slides changed after yesterday's rehearsal, and nobody told you. Say that: "The opening slides changed after our rehearsal, and I did not know before presenting." That sentence contains an event Ravi can confirm or correct. "You never respect my work" contains nothing he can do except deny it, which is exactly what he did.`,
        ],
      },
      {
        title: 'The complaint letter that gets a reply',
        paragraphs: [
          `Think about two letters of complaint to a shop. The first says the shop is useless and its staff do not care about customers. It gets a form reply, if anything, because there is nothing in it anyone can act on. The second says: on the fourth, I ordered a blue kettle, order number 2291; a red one arrived; I would like the blue one sent and the red one collected. That letter gets a kettle. It names the event, the effect, and the remedy, and it never once speculates about whether the shop cares.`,
          `A complaint to a colleague works the same way, and the fashionable fix, starting with "I feel", does not do the work by itself. "I feel that you disregard me" is still a claim about Ravi's attitude with a softer opening. Describe your side instead: "I was thrown off because my notes no longer matched." That is the red kettle arriving. Then make the remedy visible: "Could we flag changes to the opening before either of us presents?" That is asking for the blue one. None of this guarantees Ravi responds calmly. What it does is make the problem and the request answerable, without first needing agreement about an entire personality.`,
        ],
      },
      {
        title: 'Let facts and responsibility stay open to correction',
        paragraphs: [
          `Ravi explains: a date on slide two was wrong, he corrected it, and he forgot to say. You can take the good part and keep the problem: "The date needed fixing. I still need to know when my speaking notes are affected." You agree to send each other a two-line change summary before any shared presentation. The complaint got its kettle.`,
          `Notice what the specific version leaves room for. If Ravi says someone else edited the opening, you check the document history rather than defending an accusation you have already made. The issue was always the coordination of changes, and that issue survives whoever turns out to have made them. The character version could not have survived being wrong about the facts; the event version can.`,
        ],
      },
      {
        title: 'Why the verdict comes out first',
        paragraphs: [
          `The character judgement arrives first because it is how the moment felt: dismissed, overridden, not consulted. The feeling is real, and it is not evidence about Ravi. It is evidence that something happened to you, and the useful move is to find the something. A verdict feels like it says more; it actually says less, because it cannot be checked and so cannot be fixed.`,
          `Two habits. Before raising a problem, write the event in one sentence that the other person could confirm, then the effect on you, then the change you want. And if the sentence contains never, always, or a verb about their attitude, swap it for the specific thing you saw and what it cost you.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'An answerable complaint about the slides',
        alt: 'A statement moves from the changed slides to mismatched notes and a request to flag changes before presenting.',
        caption: `Read the three boxes as the complaint letter that gets a reply: the order that went wrong, what arrived instead, and what you would like sent. Notice that none of them mentions respect, care, or what Ravi is like; the request at the end is about notification, which is something he can say yes to. Fictional event.`,
        items: [
          { label: 'Event', detail: 'The opening slides changed after our rehearsal.' },
          { label: 'Effect', detail: 'My notes no longer matched, and I was thrown off.' },
          { label: 'Request', detail: 'Could we flag opening changes before either of us presents?' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Start from the fictional complaint "You are careless with shared plans" and invent one observable event that could sit behind it, such as a meeting place changed by message an hour before. The event is the order number; without it the letter gets a form reply.`,
        `Write the effect on you on a separate line, such as arriving at the old place and waiting twenty minutes, and keep any guess about why they did it off the page. The red kettle arrived; you do not need to know what the warehouse was thinking.`,
        `Add one request with a clear action in it, then rehearse the other person asking "which time do you mean?" You are working alone, so answer them aloud from your event line.`,
        `Check two things: that your opening answers that question without a fresh accusation, and that your request could get a plain yes, a plain no, or a counter-offer. If it can only get a defence, it is still a verdict.`,
      ],
      notice: `Your draft names an event, a cost, and a next action, and nowhere does it need a judgement about the person to hold together. The other person could read it and know exactly what to say yes to.`,
      troubleshooting: `If your request says only "be more considerate", you have asked the shop to care; replace it with the message, the timing, or the behaviour that would have prevented the effect. If the event line contains always or never, it is a verdict in disguise; pick one occasion.`,
    },
    recall: {
      prompt: 'A housemate leaves laundry in the shared machine when you need it. How could you raise that without calling them selfish?',
      hint: 'Describe what happened, what it prevented, and the change you want.',
      answer: `Write the complaint letter, not the verdict. The event: "There was a finished load in the machine when I came down this morning." The effect: "I could not start mine before work, so it is still sitting in the basket." The request: "Could we agree that finished loads come out within an hour, or get moved to the basket on top?" Selfish is the form-reply letter; it describes nothing anyone can check and gives your housemate nothing to do except argue that they are not. The three-part version can be answered with a yes, a no, or a better idea, and it survives the discovery that it was actually the other housemate's washing, because the problem of cleared machines is the same whoever left it.`,
    },
    quiz: {
      question: 'A friend changes a meeting place without telling you. Which opening makes the issue easiest to discuss?',
      options: [
        'I feel that you do not take my time seriously.',
        'I waited at the original place; could we confirm changes directly next time?',
        'I know you were trying to help, so let us forget the change.',
      ],
      correctIndex: 1,
      explanation: `The second is the letter that gets a kettle: an event your friend can confirm, waiting at the original place, and a request they can answer, confirming changes directly. The first opens with "I feel" and then delivers a verdict about their attitude anyway. The third assigns a kind motive and drops the coordination problem entirely, so the same thing happens next month.`,
    },
    takeaway: `Raise a problem the way a good complaint letter does, event, effect, request: "the opening slides changed after our rehearsal, my notes no longer matched, could we flag changes before presenting", because a verdict about someone's character can only be denied, while an event can be confirmed or corrected, an effect can be understood, and a specific request can be answered with a yes.`,
    sourceNote: 'Utah State University explains personal statements and specific requests. Wording alone cannot guarantee agreement in this fictional workplace.',
  },
  {
    id: 'people-022',
    outcome: `Keep one disagreement answerable by naming the question you want settled now, parking other concerns in writing rather than dismissing them, and closing against the question you started with.`,
    scene: 'Neighbours discussing late music drift toward complaints about bicycles and unanswered group messages.',
    sections: [
      {
        title: 'The question keeps changing',
        paragraphs: [
          `You knock on the neighbour's door about the music, which has been going past eleven on weeknights. Within two minutes the conversation has grown. It now takes in the bicycles blocking the stairwell, the building meeting they missed, and three messages in the residents' group that nobody answered. Every one of those may be a real grievance. None of them is the one you came about. The conversation now has no shape at all.`,
          `You offer to talk about an earlier cut-off for the music and get an answer about a bicycle. Nobody can tell any more what would count as this conversation going well. When a list keeps growing, two things become impossible to tell apart: a proposed solution, and a demand that someone defend their whole record. So start again with one sentence that names the question you want answered now. What time will the amplified music stop on weeknights?`,
        ],
      },
      {
        title: 'One thing per appointment',
        paragraphs: [
          `A GP's appointment is ten minutes long. You arrive with a sore knee, a rash, and a question about sleep. A good GP does not pretend the rash does not exist. She says: let us deal with the knee properly today, and I will note the other two so we book them in. The knee gets a real examination instead of a third of one. The rash is written down rather than forgotten. Nothing was dismissed. Two things were scheduled.`,
          `Do the GP's move out loud: "The bicycles do need sorting too. Can we note that separately and finish the music timing first?" A line on your phone or a scrap of paper keeps the parked concern from quietly vanishing. The one thing focus must not do is exclude context that actually explains the current problem. Last Tuesday's music until one in the morning belongs in a conversation about repeated weeknight noise. A dispute about who buys the stairwell light bulbs probably does not. When an old example comes up, ask how it connects to this question. Do not treat every past event as either essential evidence or forbidden history.`,
        ],
      },
      {
        title: 'Separate is not the same as dismissed',
        paragraphs: [
          `With the question held still, an answer becomes possible. Your neighbour says they can stop by half past ten on work nights. They would like to talk about occasional weekend gatherings separately, since those are different. You agree the weeknight time. You write down that weekend gatherings are an open topic, next to the bicycles.`,
          `The list on your phone now has two parked items and one agreement. The bicycles are not resolved and they have not become acceptable. They are booked, like the rash. What you have is a specific answer to the question you came with and a visible record of what is still open. That is what a ten-minute appointment can honestly deliver.`,
        ],
      },
      {
        title: 'Finish against the original question',
        paragraphs: [
          `Before you go, say back what was settled and what was not. Music off by half past ten Sunday to Thursday; weekend gatherings and the bicycles to be discussed another time. The restating is what stops the parked items from being quietly dropped by either of you. It also stops the agreement from being quietly stretched later into something it was not. A narrower conversation can end well without anyone claiming the whole neighbour relationship has been repaired.`,
          `Two habits. When a disagreement starts sprouting extra topics, name the one question you want answered in this conversation and ask to finish it first. And write the other concerns down where both of you can see them. That way separate never turns into forgotten.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Now and separately',
        alt: 'One note holds the current question about weeknight music; another holds bicycles and weekend gatherings for separate discussion.',
        caption: `Read the left note as today's appointment and the right note as the things the GP wrote down to book in. The split is about scope, not importance; the bicycles may matter more than the music. What makes the right-hand note work is that it is written, which is the difference between parked and forgotten. Fictional notes.`,
        items: [
          { label: 'Answer in this conversation', detail: 'What time will amplified music stop on weeknights?' },
          { label: 'Keep visibly open', detail: 'Bicycle storage and occasional weekend gatherings need separate agreements.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper with two columns'],
      steps: [
        `Write a fictional disagreement about a shared meal that keeps running late, then add two unrelated complaints and one earlier late meal that is clearly relevant. Mixing relevant and irrelevant history on purpose is how you practise telling them apart.`,
        `Head the columns "needed for this question" and "separate discussion" and place each item, writing one phrase about why it connects or does not. The relevant earlier meal goes left; the unrelated complaints go right, with their reasons.`,
        `Draft one sentence that proposes finishing the current question first without dismissing the right-hand column, in the GP's register. Read both sides of the exchange aloud if you are working alone.`,
        `Write a closing note with one agreement and one still-open concern, then check it against the question you started with. If the agreement answers a different question, the conversation drifted.`,
      ],
      notice: `Anyone reading your two columns and your closing note could tell which question got answered and which concerns are booked for later. Nothing was dismissed and nothing was forgotten, which are the two ways this usually goes wrong.`,
      troubleshooting: `If an item you parked on the right actually explains the present problem, move it left; relevance, not age, decides the column. If your focus sentence sounds like "that is not what we are talking about", soften it into the GP's version, which names the other item and promises it a slot.`,
    },
    recall: {
      prompt: 'A group discussion about missed deadlines shifts to which members are friendliest. How could you restore a useful focus?',
      hint: 'Return to the planning question without denying that other concerns might matter.',
      answer: `Do the GP's move. Name the question this meeting is for, who is responsible for what and by when, and ask to settle that first. Then write the relationship concern down where the group can see it, as a separate conversation to have, because people who feel dismissed will keep dragging their concern back into the one you are trying to finish. What you do not do is let friendliness stand in as evidence about the deadline; whether someone is warm is a different question from whether the report was late, and mixing them makes both unanswerable. Close by restating the deadline agreement and the parked topic, so that separate stays visible rather than becoming a polite way of saying ignored.`,
    },
    quiz: {
      question: 'While discussing a repeated noise problem, someone mentions last week\'s noise and an unrelated parcel dispute. What should you do?',
      options: [
        'Exclude both because old events should stay in the past.',
        'Discuss both fully before deciding on a noise agreement.',
        'Use the related noise example and note the parcel issue separately.',
      ],
      correctIndex: 2,
      explanation: `Last week's noise is part of the knee: it is the same problem, repeated, and belongs in today's appointment. The parcel dispute is the rash, real but separate, so it gets written down and booked rather than dismissed. Excluding both treats age as the test when relevance is; discussing both fully lets the appointment sprawl until nothing gets examined properly.`,
    },
    takeaway: `Treat a sprawling disagreement like a ten-minute GP appointment: name the one question you want answered now, use the history that genuinely explains it and park the rest in writing where both of you can see it, so separate never means forgotten, then close by restating what was settled and what is still booked for another conversation.`,
    sourceNote: 'Communication and negotiation guidance inform this focus practice. The suggested notes organize discussion; they do not decide which concerns deserve priority in every dispute.',
  },
  {
    id: 'people-023',
    outcome: `Offer two people who keep talking over each other a voluntary turn-taking process, check each has been understood, then go to the evidence, without assuming that a fair hearing means equal blame.`,
    scene: 'Two cousins disagree about who was supposed to pay a holiday-booking deposit.',
    sections: [
      {
        title: 'One account keeps interrupting the other',
        paragraphs: [
          `The holiday deposit was due on Friday and nobody paid it. Asha says Leon promised to. Leon says he only said he would look at the booking link. By the time you walk into the kitchen, neither sentence is getting past its third word before the other cousin starts theirs, and the volume is climbing. You are standing there with a mug in your hand, and both of them glance at you.`,
          `Being present does not make you the referee, and you should not appoint yourself one. What you can do is offer a process, and only if they both want it. "Would it help to take turns? Each of you says what you understood, and the other one summarises it before answering." If the talking over each other will not stop, a written account each, two sentences on a phone, does the same job. The offer is the whole of your authority here.`,
        ],
      },
      {
        title: 'The returns desk',
        paragraphs: [
          `At a shop's returns desk, a customer and an assistant disagree about what was agreed last week. A good manager hears the customer out, in full, and then hears the assistant out, in full. Then she asks to see the receipt. Hearing both sides properly was not a way of deciding the matter was fifty-fifty. It was a way of finding out what each person thought had happened, so that the receipt could be read against two clear claims instead of a shouting match. The receipt still says what it says.`,
          `Turn-taking is the manager's first move, not her verdict. Its job is to make the relevant claims understandable. It does not establish that both accounts are equally accurate, and it does not mean responsibility must be split down the middle. Nor does fairness require a stopwatch: one cousin may need longer to find words, or may prefer to write. The test is whether each person has explained the commitment they understood and had the chance to correct the other's summary of it. After that, separate the facts you can check from the interpretations that remain in dispute. Equal respect for two people is not the same as treating every claim either of them makes as established.`,
        ],
      },
      {
        title: 'Fair attention does not predetermine the answer',
        paragraphs: [
          `They agree to try it. Leon summarises Asha first: "You thought my message meant I would pay that evening." She confirms. Asha summarises him: "You meant you would check the payment page." He confirms. Two clear claims, and for the first time all evening neither cousin is being interrupted.`,
          `Now the receipt. They open the shared chat and find the message in question. It says, in full: "I will look tonight." No mention of paying, no mention of a deadline. The ambiguity that an hour of interruptions had buried is sitting there in four words. They arrange who pays the deposit now, and agree that future commitments get stated as a verb and a date. Nobody was found equally at fault. The process did not produce a verdict at all; it produced a readable receipt.`,
        ],
      },
      {
        title: 'Why a fair hearing gets mistaken for a draw',
        paragraphs: [
          `Once both people have had their say, it feels rude to conclude that one of them was simply mistaken, so the temptation is to call it half and half and move on. That is unfair in the other direction. It tells the person who was right that being heard cost them the outcome, and it teaches both of them that the process is a ritual rather than a tool. The manager who hears both sides and then ignores the receipt has wasted everyone's time.`,
          `Two habits. When two people are talking over each other, offer turn-taking with a summary step, and only proceed if both accept it. And once each account has been understood, go to whatever record exists and let it say what it says, keeping responsibility tied to the facts rather than to the fairness of the hearing.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Two summaries before the record check',
        alt: 'Leon checks Asha\'s payment expectation, Asha checks Leon\'s interpretation, and they identify an ambiguous message.',
        caption: `Read the first two lines as the manager hearing each side in full, each one a summary of the other person that gets confirmed. Then look at the last line, the receipt: four words with no payment and no deadline in them. The hearing made the ambiguity findable; it did not decide anyone was half to blame. Invented exchange.`,
        items: [
          { label: 'Leon', detail: 'You thought I had committed to paying that evening?' },
          { label: 'Asha', detail: 'Yes. You meant only that you would check the page?' },
          { label: 'Leon', detail: 'Yes. Let us check what the shared message actually says.' },
          { label: 'Shared message', detail: 'I will look tonight. Payment and a deadline are not explicit.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Optional willing partner'],
      steps: [
        `Write two fictional readings of the sentence "I will sort it": one person took it to mean booking a table, the other took it to mean finding a few restaurants that had space. Ambiguous verbs are where most of these disputes live.`,
        `Ask a willing partner to take one reading, or read both roles yourself, and agree the one rule before you start: each account is finished before the other replies. The rule is the manager asking the second person to wait.`,
        `Write a one-sentence summary that each speaker could confirm, then have one of them correct a detail and update that summary. The correction step is what makes the summary theirs rather than yours.`,
        `Underline the exact commitment that is in dispute, then draft a future message that would remove the ambiguity, with a verb and a date in it. That is the receipt you wish had existed.`,
      ],
      notice: `Your summaries put the disputed action in plain view, and nothing in the exercise asked who has the better temper or the quicker tongue. The disagreement is now about one verb, which is something two people can actually settle.`,
      troubleshooting: `If the exercise turns into a rebuttal contest, switch to short written accounts and summarise each before anyone responds; the page does not interrupt. If you feel the pull to call it even once both have spoken, go back to the underlined commitment and ask what the record says.`,
    },
    recall: {
      prompt: 'A fast-speaking colleague and a quieter one dispute a shared task. What would fair participation look like without a rigid stopwatch?',
      hint: 'Measure opportunity to explain and correct, not identical speaking duration.',
      answer: `The manager's version, not a timer. Each person gets to give their account without interruption, and the quieter one gets what they need to give it properly, which might be a pause to think, or a written version they can read out or hand over. The fast speaker then summarises what they heard and the quieter colleague corrects it, and the other way round. Fairness is measured by whether each person has explained the commitment they understood and had a real chance to fix the other's summary, not by whether both talked for the same number of seconds. After that, you look at whatever record exists, the task list, the message, the email, and let it say what it says. Responsibility follows the facts. It does not get split evenly to reward the hearing.`,
    },
    quiz: {
      question: 'Both people have explained a missed booking, but the shared record supports only one account. What follows from fair turn-taking?',
      options: [
        'Both were heard; the evidence can still support different levels of responsibility.',
        'Responsibility should be split evenly because both received a turn.',
        'Treat responsibility as undecidable because the two accounts still differ.',
      ],
      correctIndex: 0,
      explanation: `The hearing was the manager listening to both sides; the receipt is the record, and it is allowed to favour one of them. Fair process delivers attention, not equal blame, so responsibility can land unevenly when the evidence does. Splitting it evenly turns the hearing into a ritual, and calling it undecidable ignores a record that has already decided the main point.`,
    },
    takeaway: `When two people keep interrupting each other, be the returns-desk manager and not the referee: offer turn-taking with a summary step, proceed only if both accept, make sure each account is understood and corrected, then read the receipt, because a fair hearing exists to make the claims clear and the evidence readable, not to declare a draw.`,
    sourceNote: 'Listening and communication guidance inform the process. The deposit story is fictional and does not appoint an uninvited observer as mediator.',
  },
  {
    id: 'people-024',
    outcome: `When a safe disagreement starts looping, ask for a pause with a realistic time to check back, keep the pause free of conditions about who must give in, and return to one smaller question.`,
    scene: 'Siblings repeatedly interrupt one another while planning who will clear up after a family meal.',
    sections: [
      {
        title: 'The discussion has become a loop',
        paragraphs: [
          `The plates are stacked and the argument has started. You say you cooked. Your brother says he did the shopping. You say you cooked for two hours. He says the shopping took the whole morning. Neither of you finishes a sentence, because each of you already knows what the other is about to say, and you are both right about that. The conversation is a loop, and loops do not resolve by going round faster.`,
          `In an ordinary, safe disagreement like this one, a pause is the thing that breaks the loop. But a pause has to be explained. If you throw down the tea towel and say "whatever" on your way out, your brother is left guessing whether you have abandoned the washing up, the conversation, or the evening. An unexplained exit is not a pause. It is a new argument waiting to start.`,
        ],
      },
      {
        title: 'Half-time',
        paragraphs: [
          `A football match stops at half-time, and nobody takes that as a surrender. The whistle goes at a fixed point, both teams leave the pitch, both come back at a time everyone knows, and the score is exactly what it was. Nobody is asked to concede a goal before they are allowed back on. The break works because it has a known length and an unconditional return. A manager who said "we will come back out when the other side admits they were offside" would not be calling half-time; he would be holding the match hostage.`,
          `Call half-time, with the whistle and the return. "We are repeating ourselves. I need a break. Can we check back after we have both eaten?" The check-in creates a shared expectation that the topic will be revisited, and that is all it does. It does not oblige either of you to be calm on command, and it does not oblige either of you to agree when the time comes. Two rules keep it honest. Pick a return you can actually keep, rather than a soothing time you already know you will miss. And never make the return conditional on surrender: "we can talk when you admit I did more" uses withdrawal to force a conclusion, which is the opposite of making room for a better conversation.`,
        ],
      },
      {
        title: 'A check-in is not a deadline for calm',
        paragraphs: [
          `Your brother agrees, and you both eat. Afterwards you ask, "Does now still work?" rather than assuming it does, because the check-in is a check, not an appointment that overrides how he feels. He says yes. You come back with one smaller question: "Which cleanup tasks are left, and who can do each?"`,
          `Cooking and shopping still count. They can inform how the tasks get divided without becoming two competing speeches about who cares more. If he needs more time, you update the plan together instead of one of you quietly disappearing. The result is a resumed conversation with a concrete task in it, which is not the same as proof that pausing always fixes a fight.`,
        ],
      },
      {
        title: 'Return to a smaller question',
        paragraphs: [
          `Pauses go wrong in two ways. The first is the vanishing act, where one person leaves and the other is left with no whistle and no return time. The second is the hostage pause, where the break comes with a price of admission. Both feel like pauses to the person doing them. Neither feels like one to the person left in the kitchen. And one boundary sits above all of this: if an exchange feels unsafe, leave and get support, and do not treat yourself as owing anyone a return appointment.`,
          `Two habits. When you notice a safe disagreement looping, say so, ask for a break, and name a realistic time to check back, all in the same breath. And when you return, start with a readiness check and one smaller question, never with the demand that the other person concede first.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Pause, check, and return to the task',
        alt: 'One sibling requests a break, both agree to check after eating, and they resume with the remaining cleanup tasks.',
        caption: `Read the four boxes as half-time done properly: the whistle, the agreed return, a check that both are ready to come back on, and a smaller question to restart with. Notice that nothing in any box asks the other person to concede. Fictional sequence in a safe disagreement; the check-in reassesses readiness and does not force a result.`,
        items: [
          { label: 'Name the loop', detail: 'We are repeating ourselves. I need a break.' },
          { label: 'Agree a check-in', detail: 'Can we check back after we have both eaten?' },
          { label: 'Check readiness', detail: 'Does now still work for talking about cleanup?' },
          { label: 'Narrow the question', detail: 'Which tasks remain, and who can do each?' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper and a calendar if useful'],
      steps: [
        `Pick a fictional minor disagreement about a shared errand and write one sentence describing the loop, the two things that keep getting repeated at each other. Naming the loop is what you will say out loud first.`,
        `Draft the whistle: a pause request plus a realistic check-in point, in one breath. Do not stage an actual argument to practise this; the sentence is the drill.`,
        `Rehearse alone two replies to your check-in: one accepting it, one needing a different time. Write a response to each, so you have practised updating the return rather than enforcing it.`,
        `Write the first concrete question you would come back with, and check that it does not require either person to have conceded anything beforehand. If it does, it is a hostage pause.`,
      ],
      notice: `The other person could tell from your sentences what is paused, when it will be checked, and what the next conversation is about. There is no vanishing act and no price of admission.`,
      troubleshooting: `If your return condition includes an apology or an admission, replace it with a readiness check and a specific topic; the score stays as it was at half-time. If your check-in time is one you already know you will miss, pick a later honest one.`,
    },
    recall: {
      prompt: 'A safe group-planning discussion is looping, and one person cannot return tonight. How could a pause remain clear?',
      hint: 'Choose a realistic next contact rather than an impossible immediate return.',
      answer: `Blow the whistle with a return time that actually exists. Name the loop, propose the break, and agree how and when to check back, which here means tomorrow or a message in the morning rather than a pretend "in an hour" that one person cannot make. Write down the planning question that is still open, so that the pause has a visible subject and nobody can later claim it was settled or dropped. The check-in is for finding out whether everyone is ready to pick it up, not a promise that it will be resolved at that moment; if someone still needs time, you update the return together. What makes the pause clear is the same thing that makes half-time clear: everyone knows the match is not over and everyone knows when they are coming back out.`,
    },
    quiz: {
      question: 'At an agreed check-in, one person says they need more time. What best preserves the purpose of the pause?',
      options: [
        'Insist on settling the issue now because a time was named.',
        'Check a realistic new contact time and keep the unresolved issue explicit.',
        'Leave the topic open indefinitely to avoid pressuring them.',
      ],
      correctIndex: 1,
      explanation: `The check-in was a check on readiness, not a deadline for calm, so the right move is a new realistic return time with the open question still written down. Insisting on settling it now turns the whistle into a trap. Leaving it open indefinitely is the vanishing act in slow motion, with no return time and no way for the other person to know the match is still on.`,
    },
    takeaway: `In a safe disagreement that has become a loop, call half-time: say you are repeating yourselves, ask for a break, and name a realistic time to check back, all at once; make the return unconditional rather than a price of surrender, come back with a readiness check and one smaller question, and never owe a return appointment to a conversation that feels unsafe.`,
    sourceNote: 'Relationship and negotiation guidance inform this pause. It is not a treatment technique or a requirement to re-enter an unsafe exchange.',
  },
  {
    id: 'people-025',
    outcome: `When a disagreement turns into an argument about whether to talk or write, compare what each person needs from the channel, agree who will be present, and build a sequence both can actually use.`,
    scene: 'Volunteer event organizers disagree over a long text thread, with one preferring writing and the other a call.',
    sections: [
      {
        title: 'The channel has become another argument',
        paragraphs: [
          `Sam and Jo organise the summer fair together, and the thread about the start time is now forty messages long. Sam writes: "Can we just have a proper conversation about this? Call me." Jo writes back that writing lets them explain without being talked over, and they would rather keep it in text. Three messages later, the fair has disappeared from the discussion. They are arguing about which of them communicates like an adult.`,
          `Neither channel is the grown-up one. A call lets small misunderstandings get cleared in seconds. Writing lets a person think before they answer and read it back afterwards. Those are two different kinds of usefulness, and Sam and Jo each need one of them more than the other right now. The job is to meet those needs, not to award a prize for maturity to whoever insists hardest.`,
        ],
      },
      {
        title: 'Where can both of you hear?',
        paragraphs: [
          `When two people arrange to meet, nobody claims a busy cafe is more mature than a quiet kitchen table. They ask where both can hear and both can talk. If one has a hearing aid that struggles with background noise, the cafe is out, however much the other enjoys it. If one needs the laptop open, the park bench is out. The venue is chosen for what it lets each person do, and sometimes the honest answer is two venues in sequence: a coffee first, then the quiet room for the hard part.`,
          `A channel is a venue. Ask what each format gives the people in it. Sam wants to clear the small misunderstandings quickly, so a thread of one-line replies feels like wading. Jo wants to lay out an explanation without interruption and to have a record of whatever gets agreed. Privacy, accessibility, available time, and how complicated the topic is all belong in the choice. Neither speech nor text is fairer by nature: a surprise call in a noisy place can shut someone out as completely as a long thread can. Ask, too, who will be in the room. Looping in another organiser, or forwarding the thread, changes the audience, and that is a thing to agree, not a way to recruit support behind someone's back.`,
        ],
      },
      {
        title: 'Compare needs, not communication status',
        paragraphs: [
          `Sam and Jo settle on two venues in order. Each writes a short account of what they think the start time should be and why, which gives Jo the uninterrupted explanation. Then they have a scheduled twenty-minute call about whatever is still unclear after reading, which gives Sam the quick back-and-forth. At the end, one of them writes down the agreed start time and anything left open, so the record exists.`,
          `That sequence suits this pair and this problem. It is not a rule. If a call is genuinely inaccessible or unwanted, a second written exchange may serve better, and that is fine. The thing to check is whether both people could understand the planning decision, respond to it, and look back at it afterwards. Whether one person managed to drag the conversation onto their strongest ground is not the measure.`,
        ],
      },
      {
        title: 'Why the venue fight feels like the real fight',
        paragraphs: [
          `Each person's preferred channel is the one where they feel competent, so the other's preference feels like a request to argue with one hand tied. Then the request gets read as a tactic, and the tactic gets answered with a verdict on character. None of that is about the fair. The cafe-versus-kitchen question is only hard when it is secretly a question about who gets to be comfortable.`,
          `Two habits. When a disagreement starts to be about the channel, stop and ask what each person needs the channel to do, in one sentence each. And propose a sequence with the audience and the record named, treating it as an offer that the other person can amend rather than a ruling on how serious people talk.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Agree the format before resuming',
        alt: 'Jo asks for time to write, Sam asks for quick clarification, and they propose written accounts followed by a scheduled call.',
        caption: `Read the first two lines as each person saying what they need the venue to do, finishing an explanation and clearing small questions, with no claim about which is more grown-up. Then notice the proposal is two venues in order plus a written record, and that it ends in a question mark, because it is still an offer. Fictional sequence.`,
        items: [
          { label: 'Jo', detail: 'Writing lets me finish my explanation without interruption.' },
          { label: 'Sam', detail: 'I want to clarify the small questions without another long thread.' },
          { label: 'Proposal', detail: 'Short written accounts first, then a scheduled call and a written summary?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper with two columns'],
      steps: [
        `Invent a disagreement about a shared trip and give the two people different needs: one must prepare their thinking in advance, the other must be able to ask quick questions. Naming the needs before the channels is the whole order of the exercise.`,
        `In two columns, list what a message exchange and a scheduled conversation would each make easier and harder for those two people. You are comparing venues by what they let each person do, not ranking them.`,
        `Draft a format proposal that names the sequence, the timing, who will be present, and how any agreement gets written down. Work through both roles alone, reading the proposal as each person.`,
        `Test the proposal against one person refusing one channel outright, and revise it without describing that refusal as immature or evasive. The refusal is information about the venue, not about the person.`,
      ],
      notice: `Your proposed sequence answers two stated needs rather than one preference, and it says who is in the room and where the record lives. Nothing in it decides which person is the more serious communicator.`,
      troubleshooting: `If the plan quietly favours whoever speaks or types fastest, add preparation time or a slower response route for the other person. If you catch yourself writing that a call is more honest, or that writing is more considered, cross it out; those are venue preferences wearing a moral costume.`,
    },
    recall: {
      prompt: 'A family member wants to discuss a shared expense by message because they need the numbers in front of them. You prefer talking. What could you propose?',
      hint: 'Keep the need for reviewable numbers in view.',
      answer: `Two venues in order, with their need met first. Offer to send a written breakdown of the expense so the numbers are in front of them and can be checked at leisure, because that is what they said they need. Then ask whether a short scheduled call would help once they have read it, which is what you need, and accept a no if the written exchange turns out to be enough. Whatever you agree, finish with a written summary of who pays what, so the numbers do not evaporate at the end of a phone call. What you do not do is ring them unannounced to sort it out properly; that treats your preferred venue as the only real one and leaves them trying to do arithmetic in their head while you talk.`,
    },
    quiz: {
      question: 'A colleague prefers written feedback; you want quick clarification. Which proposal best acknowledges both needs?',
      options: [
        'Send a voice message instead, combining speech with asynchronous delivery.',
        'Call without warning so the issue does not become another long thread.',
        'Ask about written points first, followed by a mutually workable clarification step.',
      ],
      correctIndex: 2,
      explanation: `Written points first and then an agreed clarification step is the two-venue sequence: their need to put it in writing is met, and your need to clear things up quickly gets its own slot that you have both agreed to. A voice message is still speech, so it may miss what they wanted from writing. An unannounced call picks your venue for both of you and never checks whether they can be in it.`,
    },
    takeaway: `A channel is a venue, and nobody thinks a cafe is more mature than a kitchen table, so when a disagreement turns into talk-versus-write, ask what each person needs the channel to do, agree who will be present and where the record goes, and propose a sequence, written accounts then a short call then a summary, as an offer rather than a ruling on how serious people communicate.`,
    sourceNote: 'Communication and boundary guidance inform channel choice. No format is inherently more honest, mature, or universally suitable.',
  },
  {
    id: 'people-026',
    outcome: `Write an apology in which your own action is the subject of the sentence, the impact the person described is acknowledged as fact, and no agreement about anything else is required before you own it.`,
    scene: 'Someone jokes about a friend\'s drawing in front of a small art group and later apologizes.',
    sections: [
      {
        title: 'The action needs a subject',
        paragraphs: [
          `Halfway through the art group's Thursday session, your friend holds up a portrait they have been working on for a fortnight. You say it looks like the sitter's distant cousin. People laugh, you included. On the walk home your friend says, quietly, that they had felt exposed showing beginner work. The joke made it worse. You want to put it right. The first sentence that arrives is: "Sorry the session got awkward."`,
          `Read that sentence back. It describes a session that became awkward, as if awkwardness had drifted in through a window. It has no actor in it. Your friend is left to decide whether this vague regret covers the thing that actually happened. They should not have to do that work. "I made that joke about your drawing in front of the group" has a subject, and the subject is you. A specific apology lets the other person see what you understand. A vague one asks them to supply it.`,
        ],
      },
      {
        title: 'The note on the kitchen counter',
        paragraphs: [
          `Two notes are left on a shared kitchen counter after the same accident. The first says: "Milk got spilled, sorry about the mess." The second says: "I knocked the milk over reaching for the kettle and I have wiped the counter, but check the drawer." The first note is technically an apology. It tells the reader nothing: who, how, what was done about it. The second is a sentence with a person in it. The milk did not spill itself. The first note's grammar is quietly pretending it did.`,
          `Write the second note. After the action, add the impact exactly as your friend described it: "You were sharing work you felt unsure about, and I made it harder to do that." Do not soften it to "if you were upset" when they have already told you they were. The if turns a reported fact back into a hypothesis they must prove again. You can own the effect without claiming to know every feeling, and without signing up to anything else. If your friend adds that you have never supported their drawing, you can apologise for the joke and leave that larger claim for its own conversation. Owning Thursday does not require agreeing about the whole friendship first.`,
        ],
      },
      {
        title: 'Own what you know happened',
        paragraphs: [
          `The finished version is three short sentences. "I made the joke about your portrait in front of everyone. I understand why that made sharing harder. I am sorry." Then you stop talking and let your friend answer. They might want you to say something to the group next week, or want feedback handled differently, or want some time. Any of those is theirs to ask for.`,
          `If a practical next step seems right, you can ask about it. What you do not attach is a request for immediate reassurance, "we are fine, though, aren't we?", because that turns the apology into a bill. The first thing an apology achieves is clarity about what you are taking responsibility for. Whether Thursday feels easy again next week is a separate outcome, and not one you can demand.`,
        ],
      },
      {
        title: 'Why the actor goes missing',
        paragraphs: [
          `"The session got awkward" is easier to say than "I made a joke at your expense". The first sentence costs nothing and the second one costs a little pride. The passive voice is doing you a favour and your friend a disservice. It also tends to arrive with conditionals, ifs and anys, that leave the door open for the whole thing to have been nothing. Both habits make the apology comfortable for the person giving it. Both make it useless to the person receiving it.`,
          `Two habits. When you apologise, make yourself the subject of the first sentence and name the specific action, as if writing the second kitchen note. And state the impact the person told you about as a fact, not a possibility. Then stop, leaving the next move to them.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Vague regret and specific responsibility',
        alt: 'One apology refers to an awkward session; the other names the public joke about the friend\'s portrait.',
        caption: `Look for the person in each sentence. The first has none: a session became awkward on its own, like milk that spilled itself. The second has I, an action, and the place it happened. Neither line can make anyone forgive anything, but only one tells the friend what is being owned.`,
        items: [
          { label: 'Situation without an actor', detail: 'Sorry the session became awkward.' },
          { label: 'Action owned', detail: 'I made that joke about your portrait in front of the group. I am sorry.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper or an unsent draft'],
      steps: [
        `Invent a small mistake, such as talking over a friend while they were introducing an idea, and write down exactly what you did, with yourself as the subject. The first draft usually comes out as "things got heated"; keep going until there is an I in it.`,
        `Add the impact as the person reported it, or if you genuinely do not know the impact, phrase it as something to check rather than something to declare. A fact is stated; a guess is asked.`,
        `Draft the apology with your action as the subject of the first sentence, the impact second, and sorry third. Work alone and do not send it; the drill is the grammar.`,
        `Strike out any if or any that makes a known impact conditional, and any sentence that asks for reassurance. Read the shorter version aloud and notice it is clearer, not colder.`,
      ],
      notice: `Someone reading your draft could say what action is being apologised for without having been in the room. The milk did not spill itself, and the note says who was reaching for the kettle.`,
      troubleshooting: `If your draft apologises for "everything" or "the situation", replace that phrase with the one particular action you own; everything is a way of owning nothing. If you find a "but" after sorry, delete it and whatever follows it.`,
    },
    recall: {
      prompt: 'You gave a customer the wrong collection time. How could you apologize without hiding behind "there was confusion"?',
      hint: 'Name who gave the information and what consequence is known.',
      answer: `Write the second kitchen note. "I gave you the wrong collection time" puts the actor in the sentence, where "there was some confusion" carefully leaves them out. Then the impact you know about: "You made a journey for nothing because of that, and I am sorry." If they have not told you they came in, ask rather than assume, but do not make a known wasted trip conditional with "if that caused any inconvenience". Keep the practical repair separate and concrete: the correct time, confirmed, and how you will make sure it is right. What the customer needs from the apology is to see that you know what you did; what they need from the next sentence is the right time. Neither needs the word confusion.`,
    },
    quiz: {
      question: 'You interrupted a colleague, and they say they lost their chance to explain. Which apology identifies your responsibility?',
      options: [
        'I interrupted before you finished and cut off your explanation. I am sorry.',
        'I am sorry if the discussion felt rushed to you.',
        'I am sorry we both struggled to communicate clearly.',
      ],
      correctIndex: 0,
      explanation: `The first is the note with a person in it: I interrupted, you lost your explanation, sorry. The second puts an if in front of an impact your colleague has already told you about, turning their report back into a hypothesis. The third spreads the responsibility across both of you, which is the milk spilling itself with a friend, when only one person interrupted.`,
    },
    takeaway: `An apology is the kitchen note that says who knocked the milk over, so make your own action the subject of the first sentence, "I made that joke about your portrait in front of the group", state the impact the person described as a fact rather than an if, say sorry, and then stop, without requiring agreement about anything else and without asking to be reassured that everything is fine.`,
    sourceNote: 'The inherited Harvard Health apology guidance provides context. The art-group wording is an original rehearsal, not a formula that guarantees acceptance.',
  },
  {
    id: 'people-027',
    outcome: `When you did harm while meaning well, name the action and its effect first, add the good intention only as brief context afterwards, and never let it replace the apology or widen your permission.`,
    scene: 'A colleague announces someone\'s accepted volunteer placement before that person has told their team.',
    sections: [
      {
        title: 'Good news can still be someone else\'s news',
        paragraphs: [
          `Mina tells you quietly on Tuesday that she has got the volunteer placement she applied for. You are delighted for her. At Thursday's team lunch, the conversation turns to plans for the autumn, and out it comes: "And Mina is off to do her placement!" The table congratulates her. She smiles and says thank you, and does not look at you.`,
          `Afterwards she tells you she had wanted to tell her manager first, and to choose when and how the team heard. You say, "I was only excited for you." That is true. It is also beside the point. Your excitement does not give her back the conversation with her manager or the announcement she had planned, and now she is in the strange position of having to argue against your good motive before the thing that happened to her has even been acknowledged.`,
        ],
      },
      {
        title: 'Standing on someone\'s foot',
        paragraphs: [
          `On a crowded train you step back and land squarely on someone's foot. You did not mean to. Nobody thinks you did. And their foot still hurts, which is why the first thing you do is move, and the second thing you say is sorry. "I didn't mean to" may follow, briefly, and it is true, but imagine saying only that, while still standing on the foot. The intention is honest. It is not the apology, and it is not a reason the foot should stop hurting.`,
          `An explanation and an excuse can be the same sentence doing two different jobs. An explanation helps someone see how an action came about. An excuse uses the same fact to dismiss responsibility or to suggest the impact is not legitimate. "I was excited, so you should not be upset" cancels Mina's account. "I was excited and spoke without checking" names your decision, with the excitement as context for how you got there. Lead with the action and its consequence; add the intention only if it genuinely helps her understand. How sincerely you meant well has no bearing on whether the announcement was welcome, and it certainly does not turn her private news into something you were allowed to share.`,
        ],
      },
      {
        title: 'Keep explanation separate from excuse',
        paragraphs: [
          `Move your foot first. "I announced your placement before you were ready, and I took away your chance to tell people yourself. I was excited, but I should have checked. I am sorry." The intention is in there, one clause, after the action and the effect, where it explains without excusing.`,
          `Then ask whether anything would help, without creating a new audience in the process. Mina asks you not to post about it anywhere and says she will handle the conversation with her manager herself. You do exactly that. The lunch cannot be unsaid. A second unapproved disclosure can still be prevented, and that is the part of the repair that is actually in your hands.`,
        ],
      },
      {
        title: 'Why the motive comes out first',
        paragraphs: [
          `Leading with "I was only excited" is a request to be judged by what was in your heart rather than by what happened to Mina, and it arrives first because being thought careless hurts more than having been careless. But it asks the person you hurt to do the work of reassuring you. The foot is still under your shoe while you explain that you are not the kind of person who stands on feet.`,
          `Two habits. When you have done harm while meaning well, say the action and the effect before you say anything about why, and keep the why to one clause. And before sharing anyone's news, however good, ask them first, because a kind intention does not widen the permission you were actually given.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Intention follows responsibility',
        alt: 'The speaker acknowledges announcing Mina\'s placement, explains the excitement briefly, and follows her request not to post it.',
        caption: `Read the order of the speaker's two lines: the action and the missed check come first, and the excitement arrives in the second line as a short clause that immediately concedes it changed nothing. That is the foot being moved before the explanation. Then notice Mina's reply is a request, and the repair is doing what she asks. Invented exchange.`,
        items: [
          { label: 'Speaker', detail: 'I announced your placement before you were ready. I should have checked.' },
          { label: 'Speaker', detail: 'I was excited, but that did not make it mine to announce. I am sorry.' },
          { label: 'Mina', detail: 'Please do not post it. I will handle the next conversation myself.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Invent a well-meant mistake, such as reorganising a shared shelf without asking, and write the helpful intention on its own line, away from the rest. Keeping it physically separate makes it harder for it to sneak to the front.`,
        `Name one concrete impact, such as someone no longer being able to find their materials, and resist adding a story about what kind of person you are. The foot hurts; that is the fact to write down.`,
        `Draft the responsibility first, action and effect, then allow yourself at most one sentence of context from the intention line. Read both roles aloud and notice where the intention sits.`,
        `Add a next step that asks permission, such as asking what should be put back where, and check that your good intentions are not being offered as payment for being forgiven.`,
      ],
      notice: `If you cover the sentence about your intention with your thumb, the apology still stands up: the action is named, the impact is acknowledged, and the next step asks rather than assumes. The intention was context, not load-bearing.`,
      troubleshooting: `If "I meant well" is carrying the whole apology, you are still standing on the foot while explaining; start again with the action and what it changed for the person. If your next step would tell more people about the mistake, it is a second disclosure, not a repair.`,
    },
    recall: {
      prompt: 'You edited a friend\'s speech to make it clearer, but they wanted only proofreading. How could you explain yourself without excusing the overreach?',
      hint: 'The helpful goal does not expand the permission originally given.',
      answer: `Move your foot first. "I changed your wording when you had asked me only to check spelling, so some of the speech does not sound like you any more." That is the action and the effect, and it comes before any mention of why. Then one clause of context, if it helps: "I got carried away trying to make it clearer." Then the repair, offered rather than imposed: "I can put your original back exactly as it was. What would you actually like me to do with it?" What the explanation must not do is argue that because the changes made it clearer, they should be welcome; wanting to help did not widen the permission you were given, which was proofreading and nothing else. Your friend asked for the spelling checked. They can be grateful for the intention and still want their own sentences back.`,
    },
    quiz: {
      question: 'You shared news without permission and had a positive motive. Which response puts that motive in the right place?',
      options: [
        'Explain the positive motive first so the person can judge the impact fairly.',
        'Acknowledge the lost choice, briefly explain if useful, and ask about a relevant next step.',
        'Avoid mentioning your action and promise to be more thoughtful in general.',
      ],
      correctIndex: 1,
      explanation: `Acknowledging the lost choice first, explaining briefly, and then asking about a next step is moving your foot before saying you did not mean to. Leading with the motive asks the person to judge your heart while you are still standing on their foot, which makes the acknowledgement conditional on their generosity. A general promise never names the action at all, so nothing specific has been owned.`,
    },
    takeaway: `Meaning well is stepping on someone's foot by accident: true, believable, and no reason the foot should stop hurting, so name the action and its effect first, "I announced your news before you were ready", let the intention follow as one short clause of context, ask what would help without creating a new audience, and remember that a kind motive never widens the permission you were actually given.`,
    sourceNote: 'Apology and boundary guidance inform this example. It does not claim that lost privacy can always be restored by a later correction.',
  },
  {
    id: 'people-028',
    outcome: `After spreading a false claim about someone, correct it in front of the same people who heard it, owning the error in your own name, with the smallest audience and fewest private details that fix it.`,
    scene: 'A garden-group message wrongly blames a volunteer for a delayed soil delivery.',
    sections: [
      {
        title: 'The private apology leaves a public error',
        paragraphs: [
          `The soil for the raised beds did not arrive on Saturday, and in the garden group's chat you wrote that Lou had cancelled the delivery. By Monday you know better: the supplier moved the date themselves, and Lou touched nothing. You message Lou privately, say you got it wrong, and apologise. Lou is gracious about it. You feel the matter is closed.`,
          `It is not. Fourteen people in the chat still have a message from you saying Lou cancelled the soil, and nothing has arrived to replace it. Some of them are mildly annoyed with Lou. One has quietly moved the planting day on the assumption the delivery is Lou's problem. The private apology repaired the thing between you and Lou. It did nothing for the people who are still holding your wrong account, and a repair has to go where the damage still is.`,
        ],
      },
      {
        title: 'The note on the noticeboard',
        paragraphs: [
          `Imagine pinning a note to the communal noticeboard in a block of flats saying that the person in flat four left the main door open all night. Next morning you learn it was the wind and a faulty latch. Knocking on flat four to say sorry is right and necessary. But the note is still on the board. Everyone who walks past it today reads the same accusation they read yesterday, and flat four's apology from you is invisible to them. The only thing that fixes the board is a new note on the board, saying the first one was wrong and who wrote it.`,
          `A group chat is a noticeboard. Work out who read the wrong note and what they need to know now. Here that is the chat, and only the chat; the wider neighbourhood group never saw the accusation and does not need the correction. Keep private material off the board: Lou's messages to you, and Lou's explanation, are not yours to pin up as evidence, and if you want to include anything of theirs you ask first. It is worth asking Lou whether your proposed wording creates any new problem for them. And put your own name on the correction. "There seems to have been some confusion" is a note with no author, and the one thing the board needs is an author.`,
        ],
      },
      {
        title: 'Correct the smallest necessary audience and detail',
        paragraphs: [
          `The new note is short. "Correction to my message on Saturday: the supplier moved the delivery date. Lou did not cancel anything. I got that wrong." If the revised date is confirmed and useful, add it. Nothing else goes in: not a replay of the original accusation, not Lou's reaction, not how the misunderstanding happened in your kitchen.`,
          `Check for copies. If someone transferred your error into the planting rota or a planning note, that record needs the same correction, because a wrong note copied to a second board is two wrong notes. Then stop. Lou is not required to come into the chat and accept your apology publicly, or to explain anything, for the correction to count. The correction is complete when the audience that received the error has received the replacement.`,
        ],
      },
      {
        title: 'Why the private apology feels like enough',
        paragraphs: [
          `The private apology is the emotionally costly part, so once it is done it feels like the whole job. Correcting in public costs something different: a small loss of face in front of fourteen people. That is exactly why the public note gets skipped, and exactly why it matters, because the fourteen people are the ones still holding the damage. Flat four accepted your apology. The board still says what it said.`,
          `Two habits. When you discover you spread something false, ask who still holds it and correct it there, in the same place and to the same people, no wider. And write the correction in your own name with the corrected fact first, leaving the other person's private messages and reactions off the board.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Repair the remaining information problem',
        alt: 'The original group receives a wrong claim, Lou gets a private apology, and the group still needs a factual correction.',
        caption: `Follow the audiences, not the feelings. The first box and the third box are the same fourteen people, the noticeboard; the middle box is a single person, flat four. The private apology in the middle changes nothing for the group on either side of it, which is why the third box exists and why it carries your name. Fictional flow.`,
        items: [
          { label: 'Original group', detail: 'Receives the incorrect claim about Lou cancelling the delivery.' },
          { label: 'Private apology', detail: 'Lou hears that you recognize your mistake.' },
          { label: 'Group correction', detail: 'The supplier moved the delivery. Lou did not cancel it. I got that wrong.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper or an unsent draft'],
      steps: [
        `Invent a wrong group message about who changed a meeting time, and list two things: everyone who received it, and the fact that turned out to be true. The recipient list is the noticeboard; you need to know who walked past it.`,
        `Write a private apology to the person you blamed, then write down what the original recipients would still wrongly believe after reading nothing but that apology. The answer is usually everything they believed before.`,
        `Draft a short correction addressed to only that audience, with your name on it and the corrected fact first. Rehearse it alone, and do not copy any real private messages into the exercise.`,
        `Cut every personal detail that does not correct the error, and mark anything you have added that would need the other person's permission or a check before it could go on the board.`,
      ],
      notice: `Your correction replaces the false fact for exactly the people who held it, without retelling the accusation, without a wider audience, and without using anything private as evidence. The board now says the right thing, in your handwriting.`,
      troubleshooting: `If most of your draft explains how you came to make the mistake, you are writing about yourself on a board that needs a fact; lead with the corrected fact and own the error in one sentence. If your draft says "there was some confusion", add an author, which is you.`,
    },
    recall: {
      prompt: 'You wrongly credited a colleague\'s contribution to someone else in a team note. Is a private apology enough to fix the note?',
      hint: 'Ask who still has the inaccurate record.',
      answer: `No, because the note is the noticeboard and the apology was a knock on one door. Everyone who read the team note still believes the work was someone else's, and your colleague's private forgiveness does not reach them. Correct the attribution in the note itself, and tell the people who received the original version that it has been corrected, in your own name: "The analysis in last week's note was Priya's work, not Tom's; the error was mine." Keep the audience to the people who saw the note, because correcting it to a wider group spreads a mistake that most of them never heard. Leave out any private conversation about how your colleague felt. The record is fixed when the readers of the wrong version have the right one.`,
    },
    quiz: {
      question: 'A group still believes your mistaken claim after you apologized privately. What best addresses the remaining consequence?',
      options: [
        'Ask the affected person to tell the group you apologized.',
        'Explain privately to members who ask, avoiding another group message.',
        'Give the original group a brief factual correction that owns your error.',
      ],
      correctIndex: 2,
      explanation: `A brief correction to the original group, in your own name, is the new note pinned where the old one was: it reaches the fourteen people who still hold the error. Asking the affected person to announce your apology makes them do your repair and may leave the false fact standing. Answering only those who ask leaves everyone else walking past the wrong note indefinitely.`,
    },
    takeaway: `A false claim in a group chat is a note pinned to a noticeboard, and apologising privately is knocking on one door while the note stays up, so correct it in the same place to the same people, no wider, with the corrected fact first and your own name on it, leave the other person's private messages off the board, and check for copies of the error in any rota or record that borrowed it.`,
    sourceNote: 'Apology and boundary sources inform the example. The repair is proportionate to this fictional message, not a universal rule for formal public corrections.',
  },
  {
    id: 'people-029',
    outcome: `After damaging something borrowed, offer a specific remedy you can actually carry out, check that it restores what the owner really needs, and keep the final choice and any purchase waiting on a yes.`,
    scene: 'A neighbour returns a borrowed soup pot with a damaged handle and discusses replacement options.',
    sections: [
      {
        title: 'A generous phrase can leave the work to the owner',
        paragraphs: [
          `You borrowed the big soup pot from next door for a family lunch. On the way back the handle came away in your hand. Standing on the neighbour's step with the pot and the handle, you say the most generous thing you can think of: "I will do anything to make it right." It feels like the right size of apology. It is also, if you listen to it, a job you have just given them.`,
          `Anything means the owner now has to work out what a fair remedy is. They have to find out what the pot costs these days. They have to wonder whether you can actually afford what they would like to ask for. The vagueness that felt generous has handed every bit of effort back across the step. A concrete offer does the opposite. It picks up the work: acknowledge the damage, then propose a feasible next step, such as finding a suitable replacement and checking it with them before buying. Being specific does not close the owner's options. It gives them something to say yes or no to.`,
        ],
      },
      {
        title: 'We will redo the dish or take it off the bill',
        paragraphs: [
          `When a restaurant brings the wrong dish, there are two kinds of response. One manager says, "We will make it up to you," and walks off. You are left to wonder what that means and whether you are supposed to ask. The other says, "We can redo it in ten minutes, or take it off the bill. Which would you prefer?" The second manager has done the thinking. She has named two things the kitchen can genuinely deliver and left you the choice. Nobody at that table feels fobbed off. Nobody has to negotiate their own compensation.`,
          `Be the second manager. Before you propose anything, ask what the pot needs to do. The owner may need its capacity for batch cooking, or a base that works on their induction hob, or a lid that fits their oven. A smaller, pricier pot is not automatically a better remedy; the right pot is the one that cooks their soup. Be straight about your budget and your timing. A remedy you cannot afford is the vague promise all over again. Do not glue the handle back and announce it safe; you are offering repair, not demonstrating cookware expertise. And keep two things apart. The apology acknowledges what you did. The remedy addresses what they have lost. Neither one buys you the right to borrow the pot again.`,
        ],
      },
      {
        title: 'Suitability matters more than the gesture',
        paragraphs: [
          `The second-manager version sounds like this: "I damaged the handle. I can look for a replacement today and send you the options before I buy anything. What do I need to match?" The owner says the capacity is the important thing. They ask you to wait while they dig out the original model number. You agree a time to come back to it instead of ordering something tonight to feel better.`,
          `If the search turns up nothing suitable that you can afford, say so plainly and discuss what is left. What you are offering is a next action within your control and a purchase that waits for their yes. You are not offering unlimited compensation. You are not presenting them with a pot they must now be grateful for.`,
        ],
      },
      {
        title: 'Why anything is easier to say',
        paragraphs: [
          `"I will do anything" costs nothing at the moment of saying it. It sounds like the biggest possible apology. A specific offer costs a little thought and risks being the wrong size, which is why people reach for the blank cheque. But the blank cheque is heavier for the owner to carry than a specific one. They have to fill it in, and most people would rather quietly absorb the loss than do that.`,
          `Two habits. When you have damaged something, propose a remedy with a verb, a time, and a limit in it, instead of an open promise. And before any purchase, ask what the thing needs to do and wait for the owner's yes. The remedy should restore their loss rather than perform your regret.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A remedy the owner can assess',
        alt: 'Borrower and owner check the pot\'s model and capacity before choosing a replacement.',
        caption: `Look at the borrower's first line and find the three parts: the damage owned, an action with a time on it, and nothing bought yet. Then see the owner name what matters, capacity, and the borrower wait for it. This is the manager offering to redo the dish or take it off the bill, not walking off with a promise. Invented exchange.`,
        items: [
          { label: 'Borrower', detail: 'I damaged the handle. I can research a replacement today before buying anything.' },
          { label: 'Owner', detail: 'The capacity matters. Let me check the model first.' },
          { label: 'Borrower', detail: 'I will wait for that detail, then send suitable options for you to check.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper'],
      steps: [
        `Imagine losing a borrowed notebook and list what the owner has actually lost, beyond the cover and the paper: the notes inside, perhaps a half-finished plan. Use an invented notebook, not anyone's real property; the exercise is about naming the loss precisely.`,
        `Write one thing you can genuinely offer, such as a replacement notebook of the same kind by Friday, and one thing you cannot promise to restore, such as the notes themselves. Writing the second line is what keeps the offer honest.`,
        `Draft a remedy with an action and a proposed time, then rehearse the owner saying they would prefer something else, perhaps help reconstructing the notes rather than a new book. Play both roles alone.`,
        `Revise your offer to match their preference and your real limits, and make sure any purchase stays conditional on their agreement. You are offering to redo the dish, not deciding for them.`,
      ],
      notice: `Your offer names useful work you will actually do and admits what it cannot restore, instead of claiming that any replacement settles the matter. The owner could accept it, adjust it, or decline it without having to design it first.`,
      troubleshooting: `If your plan relies on money or skills you do not have, shrink it to what you can do and say what remains unresolved; a smaller true offer beats a larger hollow one. If your draft contains the word anything, replace it with a verb and a time.`,
    },
    recall: {
      prompt: 'You return a borrowed game with one piece missing. What should you check before buying an entirely different game?',
      hint: 'Match the remedy to what the owner actually needs restored.',
      answer: `Check what has actually been lost, which is one piece from a set they play, not a whole game. Ask the owner whether a matching replacement piece is available from the maker or a spares seller and whether that is what they would prefer, because a different game, however generous, does not put their set back together and may just add a box they did not want. Be clear about timing too: a spare part can take weeks, and they may have a games night on Saturday. The second manager's move is to name the realistic options, a replacement piece if one exists or a workable stand-in if not, be honest about cost and delay, and let the owner choose. Buying a new game first is making it up to them without asking what up means.`,
    },
    quiz: {
      question: 'You damaged a borrowed item and can afford one replacement option. Which offer is most useful?',
      options: [
        'Name the option and your limit, then check whether it meets the owner\'s needs before buying.',
        'Buy the option immediately so the apology includes a visible gesture.',
        'Promise any replacement the owner chooses and work out affordability afterward.',
      ],
      correctIndex: 0,
      explanation: `Naming the option and your limit and checking suitability first is the manager offering what the kitchen can actually deliver and letting the guest choose. Buying immediately makes a visible gesture that may not cook their soup, and leaves them stuck with it. Promising any replacement is the blank cheque, generous to say and liable to become a second broken promise when the bill arrives.`,
    },
    takeaway: `Be the manager who says "we can redo the dish or take it off the bill" rather than the one who promises to make it up to you: own the damage, propose a remedy with a verb, a time, and an honest limit, ask what the thing actually needs to do before you buy anything, and keep the final choice with the owner, because a specific offer picks up the work and an open one hands it back.`,
    sourceNote: 'The apology source informs practical repair. This invented property example does not establish compensation rules or certify a damaged item as safe.',
  },
  {
    id: 'people-030',
    outcome: `After apologising, carry out the repair you agreed and then stop, leaving forgiveness, further contact, and reassurance entirely in the other person's hands and on their timetable.`,
    scene: 'Someone apologizes after forgetting an agreed cake collection for a sibling\'s celebration.',
    sections: [
      {
        title: 'The apology becomes a request for relief',
        paragraphs: [
          `You were supposed to collect the cake for your sister's celebration and you forgot. She found out at four o'clock, drove across town, and paid for a second one. That evening you apologise properly and agree to cover the extra cost. Then you add, "Are we okay?" She says she needs a bit of time. The next morning you text to ask again. That evening you send a second, longer apology, in case the first one did not land.`,
          `Look at what the follow-ups are doing. Each one asks her to make you feel better about what you did to her. The apology was sincere, and the checking has turned into pressure. Taking responsibility for the cake does not come with a right to be told that everything is fine by breakfast, or to any particular reply at all.`,
        ],
      },
      {
        title: 'Watering the plant you let dry out',
        paragraphs: [
          `You go away for a week and forget to ask anyone to water the plants. You come back to a drooping fern. The repair is obvious and entirely yours: water it, move it out of the sun, do it properly. What you cannot do is make it perk up tonight. Standing over the pot asking whether it feels better yet does nothing for the fern, and watering it four more times to show how sorry you are will drown it. The plant recovers on its own clock. Your job was the water.`,
          `The cake is the fern. You control whether you reimburse the agreed amount and whether you handle the next commitment differently. Your sister controls when she feels ready to talk and whether she forgives you. Those are different decisions and they do not trade. Do not make the reimbursement wait for a sign that she is all right; that is withholding water until the plant smiles. Equally, do not read her accepting the money as proof that the relationship is restored; a plant taking in water is not yet a plant that has recovered. A good apology leaves room for the other person's account and their pace. Her silence afterwards is the fern being left alone to recover, and it is not an invitation to send more messages.`,
        ],
      },
      {
        title: 'Keep the repair separate from the response',
        paragraphs: [
          `The version that works is short. "I understand you need time. I will cover the extra cost as we agreed, and I will leave it there." Then you transfer the money through the arrangement you already discussed and you stop. If some factual confirmation is genuinely needed, keep it to the fact: "Transferred, as agreed." Nothing appended about forgiveness.`,
          `A later check-in may be welcome, and it may not; if she asks for no more contact about it, that request stands. The result is a completed repair that did not try to buy reassurance. It makes no promise of renewed closeness, and the question of what the relationship looks like next can stay open after the practical task is done.`,
        ],
      },
      {
        title: 'Why the second message gets sent',
        paragraphs: [
          `Having wronged someone is uncomfortable, and the fastest relief is their forgiveness, so the hand reaches for the phone. Each message feels like care from the inside. From her side, it is being asked to do emotional work for the person who forgot the cake, while she is still cross about the cake. The drooping fern does not need your anxiety. It needs the water, and then it needs to be left alone.`,
          `Two habits. Once a repair is agreed, do it, confirm the fact if necessary, and send nothing further unless they open the door. And when you feel the urge to ask whether you are okay, recognise it as your discomfort looking for relief, and let the plant recover on its own time.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two separate decisions after an apology',
        alt: 'The apologizer can complete the agreed reimbursement; the sister decides when or whether to discuss forgiveness.',
        caption: `Read the left box as the water, something entirely within your control, and the right box as the plant recovering on its own clock. Nothing in the left box is conditional on the right one, and nothing in the right box is owed because of the left. Fictional statements; completing one decision does not force the other.`,
        items: [
          { label: 'My agreed action', detail: 'I will reimburse the extra cost as we agreed.' },
          { label: 'Her response', detail: 'I need time before discussing how I feel about this.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper or an unsent apology draft'],
      steps: [
        `Invent a small missed commitment and write an apology along with one practical repair that, in the scenario, has already been agreed. The agreed repair is the water; everything else in the exercise is about not standing over the pot.`,
        `Underline every sentence that asks for forgiveness, reassurance, or renewed contact by a certain time. These are the lines asking the fern how it feels.`,
        `Rehearse the recipient saying "I need time", and write a response that accepts it in one sentence and keeps the agreed repair exactly as it was. Accepting and repairing in the same breath is the skill.`,
        `Keep only the factual completion message, if one is genuinely needed, and leave the draft unsent. Work alone, and do not reopen a real disagreement to practise on.`,
      ],
      notice: `The repair goes ahead in your draft even though the imagined recipient has offered no reassurance at all. The water went on the plant, and then you walked away from the pot.`,
      troubleshooting: `If your final line asks whether everything is fixed now, replace it with the factual next action or delete it; the fern will tell you when it has recovered. If you have written a second apology to reinforce the first, you are watering it again, and it does not need it.`,
    },
    recall: {
      prompt: 'A colleague accepts your correction of a credit error but remains distant. What can you reasonably conclude?',
      hint: 'Acceptance of a correction and restored closeness are not the same decision.',
      answer: `Only that the record is right. The correction was the water, and your colleague accepting it means the practical repair has been received, nothing more. Their distance is the plant on its own recovery clock, and it is not evidence that the correction was insufficient or that another apology is due. Keep the changes you agreed, behave reliably around credit in future, and do not ask them whether things are fine now, because that would be asking them to manage your discomfort about something you did to them. Trust may return, or the working relationship may simply settle at a cooler temperature than before. Either outcome is theirs to arrive at, and the one thing that will slow it down is checking on it.`,
    },
    quiz: {
      question: 'After your apology, a friend asks for space while an agreed replacement is still due. What fits?',
      options: [
        'Delay the replacement until they are ready to reassure you.',
        'Complete the agreed repair with only necessary logistical contact, respecting their request for space.',
        'Send a fuller apology to make sure their request was not a misunderstanding.',
      ],
      correctIndex: 1,
      explanation: `Completing the repair with only the contact it logistically needs is watering the plant and then leaving it alone, which is exactly what they asked for. Delaying the replacement until they reassure you withholds water until the fern smiles. A fuller apology after a request for space is a second watering nobody asked for, and it treats their clear request as a mistake to be corrected.`,
    },
    takeaway: `A repair after an apology is watering a plant you let dry out: do the thing you agreed, confirm the fact if you must, and then step away from the pot, because forgiveness, further contact, and reassurance recover on the other person's clock, and every "are we okay?" is your discomfort asking them to do your work.`,
    sourceNote: 'Apology and relationship guidance inform this distinction. The example does not prescribe reconciliation or assume that every relationship should continue.',
  },
  {
    id: 'people-031',
    outcome: `Turn a vague offer of help into a specific one with a task, a time window, and the limits that affect planning, then get it accepted before you treat it as a commitment anyone can rely on.`,
    scene: 'A friend planning a move interprets an offer of help more broadly than the person making it intended.',
    sections: [
      {
        title: 'Two people hear different commitments',
        paragraphs: [
          `"I can help you move on Saturday," you say, and you mean it. In your head, you arrive mid-morning, label a few boxes, make tea, and leave before lunch. In your friend's head, you are arriving with a car. You are carrying a wardrobe down three flights. You are staying until the new flat has curtains up. Both of you walk away from the conversation pleased. Neither of you has said anything untrue.`,
          `The offer had no edges, so each person drew their own. Now your friend may be turning down another helper or not booking a van, on the strength of a car you do not own. Nobody here is behaving badly. A generous sentence simply got filled in two different ways. Clarifying now, while plans are still fluid, leaves far more room than explaining the limits on Saturday. By then the van has not been booked and the wardrobe is at the top of the stairs.`,
        ],
      },
      {
        title: 'I will bring a salad for eight',
        paragraphs: [
          `At a potluck, two guests reply to the invitation. One says, "I will bring something." The other says, "I will bring a green salad for eight, no nuts, and I can be there by six." The host can plan around the second guest immediately. No salad needed from anyone else. One less thing to worry about for the allergy. Someone there early to help set up. The first guest's offer is just as kind and completely unusable. The host does not know whether to expect a dessert, a bottle, or a bag of crisps, and will probably cover the gap themselves.`,
          `Be the salad guest. Say the task, the time you are available, and the limits that change how your help can be used. "I can label and pack the kitchen boxes from ten until noon. I do not have a car, and I cannot carry anything heavy." That is narrower than "help you move", and it is more useful. The remaining needs are now visible: transport, lifting, the afternoon. Ask whether it fits rather than declaring yourself booked for a job nobody needs doing. You do not have to recite every constraint in your life, only the ones that affect what your friend can plan around. The point is not a smaller contribution but a contribution with edges.`,
        ],
      },
      {
        title: 'Specific does not mean ungenerous',
        paragraphs: [
          `Your friend replies, "Packing before noon would be really useful. I will sort transport with my brother." You close the loop: "Then I will be there at ten to pack the kitchen, until noon." Both of you now hold the same commitment. The van gets booked because nobody is counting on your imaginary car.`,
          `Two other endings are also fine. If the kitchen is already packed, your friend can decline the offer without declining you. It was an offer about a task, not a test of friendship. And if Thursday arrives and you find you cannot make Saturday after all, you say so on Thursday, while another arrangement is still possible. Reliability does not start when you turn up. It starts when the other person decides what they can safely build on. That is why the edges have to be there before the plans are.`,
        ],
      },
      {
        title: 'Why vague offers feel more generous',
        paragraphs: [
          `"I will bring something" feels open-handed. "A salad for eight" feels almost fussy. But the fussy version is the one that actually lightens the host's load. The open-handed one quietly adds to it, because somebody has to plan around the mystery. The same is true of help with a move. The vague offer is pleasant to make and expensive to receive.`,
          `Two habits. When you offer help, put a verb, a time window, and any planning-relevant limit into the sentence, as if telling the host what dish you are bringing. And treat the offer as unconfirmed until the other person has said it fits. Then neither of you is planning around a version only one of you heard.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Turn help into an accepted task',
        alt: 'The helper offers kitchen packing from ten to noon without transport, and the friend confirms that specific contribution.',
        caption: `Read the first line as the salad for eight: a task, a time window, and the one limit that changes the plan. Then notice the second line does something the vague offer never allowed, it names the gap, transport, and assigns it elsewhere. The last line is the host writing the dish on the list. Fictional dialogue.`,
        items: [
          { label: 'Helper', detail: 'I can pack kitchen boxes from ten to noon. I cannot provide transport.' },
          { label: 'Friend', detail: 'That helps. I will arrange transport separately.' },
          { label: 'Helper', detail: 'Confirmed: kitchen packing on Saturday, ten to noon.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and an ordinary calendar'],
      steps: [
        `Imagine offering to help at a community sale and list three quite different things "help" could mean there: running a stall, carrying tables, counting cash at the end. Seeing the three side by side shows how much room a vague offer leaves.`,
        `Pick one task and a realistic time window from your calendar, then add one limit that would change how the organiser plans, such as having to leave by two. This is turning "something" into "a salad for eight".`,
        `Write the offer as a single sentence and rehearse the organiser both accepting it and saying that job is already covered. Play both parts aloud if you are alone, so the decline feels like a decline of the task, not of you.`,
        `For the accepted branch, write the final confirmation and check it against your offer: same task, same window, no extra work quietly assumed by either side.`,
      ],
      notice: `The organiser could allocate every other job at the sale without once wondering what you meant. Your contribution has edges, and the edges are what make it plannable.`,
      troubleshooting: `If your offer still says "help out", you have written "I will bring something"; replace it with a verb and the specific thing the verb acts on. If you have listed six limits, keep the ones that change the plan and drop the rest; the host needs the allergy, not your whole diet.`,
    },
    recall: {
      prompt: 'A colleague asks you to review a document. You can check the opening today, not the whole draft. What should your offer include?',
      hint: 'Scope and timing both affect what they can rely on.',
      answer: `The dish, the time, and the limit, so they can plan the rest. "I can read the opening two pages this afternoon and get comments to you by five. I will be looking at clarity and structure rather than checking the figures. I cannot get to the rest of the draft this week; is that still useful?" That tells your colleague exactly what is covered, when, and what kind of comments to expect, and it names the gap, the remaining pages and the numbers, so they can find a second reader or accept a partial review knowingly. Saying "happy to take a look" would feel warmer and leave them assuming a full review by tomorrow. The question at the end matters too: it keeps the offer an offer until they have said it fits.`,
    },
    quiz: {
      question: 'A friend needs help at a stall, and you can cover only the opening hour. Which offer is most usable?',
      options: [
        'I should be around in the morning if things work out.',
        'I can help, but please do not give me too much to do.',
        'I can handle the welcome desk for the opening hour; would that help?',
      ],
      correctIndex: 2,
      explanation: `The welcome desk for the opening hour is the salad for eight: a task, a time, and a question that keeps it an offer until accepted, so your friend can plan everything else around it. "Around in the morning if things work out" has no time and no task and might not happen. "Do not give me too much" names a limit without a job, which leaves the organiser guessing what fits inside it.`,
    },
    takeaway: `Offer help the way a good potluck guest offers food, "a green salad for eight, no nuts, there by six": name the task, the time window, and the one or two limits that change the plan, ask whether it fits, confirm it in the same words once accepted, and if you later cannot make it, say so while another arrangement is still possible, because reliability begins when the other person decides what they can build on.`,
    sourceNote: 'Communication and boundary sources inform clear commitments. The packing scenario is a planning rehearsal, not guidance on physically moving furniture.',
  },
  {
    id: 'people-032',
    outcome: `Say plainly whether you are interested or confirmed, find out when the organiser actually needs a firm number, and if your answer will come too late, step out of the booking rather than leave a maybe.`,
    scene: 'A group dinner needs a final headcount before one person can confirm a competing plan.',
    sections: [
      {
        title: 'Enthusiasm can be mistaken for a booking',
        paragraphs: [
          `Someone in the group chat is booking a table for Saturday and asks who is in. You reply "Sounds great!" with the enthusiasm you genuinely feel, and go back to your day. You meant: I would love to come. The organiser read: one more for the table. You have not yet checked whether Saturday clashes with the family lunch your mother mentioned. You had quietly planned to find out on Friday.`,
          `On Thursday the restaurant rings the organiser for a final number. Your "sounds great" has to be counted one way or the other. Your uncertainty has become their problem, in a phone call you are not part of. Interest and commitment sound almost identical in a cheerful message. When someone has to book places, pay a deposit, or arrange a lift, the difference has to be said out loud. Tone cannot tell an organiser whether you have actually looked at your diary.`,
        ],
      },
      {
        title: 'A maybe is not a cake',
        paragraphs: [
          `A baker taking pre-orders for the weekend needs to know by Thursday how many cakes to bake. A customer rings on Wednesday to say "I might want one, I will know Friday." That is friendly and useless. The oven goes on Thursday night with a number in it. The customer can either commit by then, or say "leave me out, and if I ring Saturday morning I will take my chances on what is left." What the baker cannot do with is a maybe sitting in the order book pretending to be a cake.`,
          `Your reply to the organiser is an order for the baker. Say which it is: "I am interested but not confirmed. I can give you a firm answer on Friday. When do you need the number?" Now there are two deadlines on the table, yours and theirs, and they have to fit. The organiser needs the headcount Thursday evening. Friday is too late, unless they can genuinely add a place later. Ask what flexibility exists rather than assuming that naming your decision day reserves a chair until then. If there is no slack, decline the reserved place. A provisional yes that the organiser has to treat as a firm one is the maybe in the order book. It costs them either an empty seat or an awkward call.`,
        ],
      },
      {
        title: 'Two deadlines need to fit',
        paragraphs: [
          `The honest version is short. "I cannot confirm before Thursday, so please leave me out of the booking. If my Saturday clears, I will ask whether an extra place is possible." The organiser can now give the restaurant a real number. You have not turned the group down. You have not promised to turn up later. You have taken your chances on what is left, which is the right size of commitment for your actual information.`,
          `The other branch is just as explicit. If your mother confirms the lunch is Sunday and Saturday clears before Thursday, you write "Confirmed, count me in", not a second cheerful emoji. The useful outcome is a status everyone can read: interested, confirmed, or not in this booking. Nobody should have to work out which from how keen your first message sounded.`,
        ],
      },
      {
        title: 'Why enthusiasm gets counted',
        paragraphs: [
          `Saying "sounds great" is a way of being warm without being pinned down. Most of the time nobody is counting. The trouble arrives when somebody is. They count warmth as a yes because that is the only reading that lets them finish the booking. The customer who says "I might want one" is not being difficult. They just have not noticed there is an oven involved.`,
          `Two habits. Whenever a plan involves places, money, or transport, label your reply as interested or confirmed in so many words, and if interested, say when you will know. And ask for the organiser's real deadline. Then make your decision fit it or step out of the booking, so that a maybe never ends up in the order book.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'The answer time misses the booking deadline',
        alt: 'A guest can confirm Friday, the organizer needs a Thursday headcount, and the guest declines the reserved place.',
        caption: `Read the two deadlines against each other: the guest can confirm Friday, the baker's oven goes on Thursday. They do not fit, and the third line does the honest thing, taking the maybe out of the order book instead of leaving it there as a cake. Fictional deadlines; only real flexibility from the organiser would change the last line.`,
        items: [
          { label: 'Guest', detail: 'Interested, but I can only confirm Friday. When is your deadline?' },
          { label: 'Organizer', detail: 'Thursday evening. The headcount must be final.' },
          { label: 'Guest', detail: 'Please leave me out of this booking. I cannot confirm in time.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper or an unsent message'],
      steps: [
        `Invent a group event with a fixed headcount deadline, and pick a later date when your own availability would become clear. The gap between those two dates is the whole problem, so write both down.`,
        `Write a message that says interested rather than confirmed, names the day you will know, and asks whether that works for the organiser. You are telling the baker the truth about your order.`,
        `Rehearse the organiser saying no, there is no flexibility, and write a reply that declines the reserved place outright. Not a conditional yes, not a "pencil me in"; a maybe out of the order book.`,
        `Now move your decision date earlier than the deadline and write the confirmation branch. Compare the two versions and notice that both state a status the organiser can act on without interpreting you.`,
      ],
      notice: `In both branches the organiser can finish their booking without decoding your enthusiasm, because your status is written in plain words: either out of this booking, or confirmed. The oven has a real number in it.`,
      troubleshooting: `If your draft has "probably" sitting next to "count me in", you have ordered a cake and not ordered a cake in the same sentence; pick the status you mean and delete the other word. If you have not asked when they need the number, add that question before anything else.`,
    },
    recall: {
      prompt: 'A colleague needs a volunteer roster today, but you will know your availability tomorrow. What should you clarify?',
      hint: 'Your uncertainty deadline may be later than the planning deadline.',
      answer: `Two things, in order. First, whether the roster genuinely has to be final today or whether a slot can be filled tomorrow; ask rather than assume. Second, if it must be final today, say so and step out: "I will not know until tomorrow, so please do not put me down for that slot. If it is still open tomorrow I will take it." That gives your colleague a roster with real names on it, and keeps your door open for the gap if there is one. What you must not do is let them write you in on the strength of "I should be fine", because that is the maybe in the order book: it looks like coverage, and it turns into an empty shift and a scramble when tomorrow brings the wrong answer.`,
    },
    quiz: {
      question: 'You want to attend but cannot confirm until after a nonflexible booking deadline. What is fairest?',
      options: [
        'Decline the reserved place and ask separately about any later availability.',
        'Accept provisionally and promise to update as soon as you know.',
        'Ask the organizer to treat your enthusiasm as likely attendance.',
      ],
      correctIndex: 0,
      explanation: `Declining the reserved place and asking later about leftover space takes your maybe out of the order book, which is the only honest thing when the oven goes on before you can decide. A provisional yes with a promised update is still a maybe the organiser has to count as a cake. Asking them to treat enthusiasm as likely attendance makes your uncertainty their arithmetic.`,
    },
    takeaway: `A maybe is not a cake, so when a plan involves places, money, or transport, say in plain words whether you are interested or confirmed, ask when the organiser actually needs the number, and if your answer will arrive after the oven goes on, step out of the booking and take your chances on what is left, rather than leaving your enthusiasm in the order book for someone else to count.`,
    sourceNote: 'Communication and boundary guidance inform this planning distinction. The dinner deadlines are invented examples, not assumptions about restaurant policies.',
  },
  {
    id: 'people-033',
    outcome: `When a promise is in doubt, send an early update that keeps three things separate, what you know, what you estimate, and what you propose, and say when the next update will come.`,
    scene: 'A delayed train threatens a promise to bring a group\'s event tickets to the meeting point.',
    sections: [
      {
        title: 'Certainty may arrive too late to help',
        paragraphs: [
          `You have the group's theatre tickets on your phone and you promised to meet everyone at the entrance at seven. At twenty past six your train stops between stations. The announcement says nothing about when it will move. Your instinct is to wait: no point worrying anyone until you know whether you will actually be late. Meanwhile five friends are already on buses, heading for a door they cannot get through without you.`,
          `Waiting for certainty feels considerate. It is the opposite. An update is useful when your uncertainty affects other people's choices, not only when failure has become a fact. If they hear now, there may still be time to agree another way for the tickets to reach the door. If they hear at five past seven, every option has gone and the only thing left to share is bad news.`,
        ],
      },
      {
        title: 'The departure board',
        paragraphs: [
          `Look at a good departure board when things go wrong. It does not invent a new time to make passengers feel better. It says Delayed, and underneath, next update 18:40. Passengers can act on that: find a coffee, ring ahead, look at other routes. A board that confidently announced a departure at 18:50 and then quietly changed it to 19:10, then 19:30, would be worse than useless, because every passenger would have planned around a number that was never real. Honest boards separate what is known from what is guessed, and they tell you when to look again.`,
          `Write your message like the board. "My train is stopped and there is no restart estimate. I may miss our meeting time. I am checking whether the tickets can be transferred to one of you. I will update you by quarter to seven." Four sentences, each a different kind of thing. The stopped train is known. Missing seven o'clock is a possibility, labelled as one. The transfer is being checked, not promised. And the update time is a fact your friends can plan around. What you do not do is quietly swap seven for a guessed seven-thirty; if you have a credible estimate, call it an estimate and attach the time you will confirm it. False precision hands people a new certainty they should not be relying on.`,
        ],
      },
      {
        title: 'Separate the fact from the estimate',
        paragraphs: [
          `In this fictional case, the ticket app allows transfers. Before you move anything, you ask one friend whether they are willing to receive all five tickets and check the email address with them. They say yes. You transfer, and ask them to confirm the tickets have arrived. They have. The group can now go in at seven whether or not your train ever moves.`,
          `If transfer had not been possible, the board still says something useful: "Transfer is not available. Options are: wait for me at the door, or ask the box office whether they can release the booking with the confirmation number I will send you." Honest options, offered rather than imposed. Early notice does not cancel the inconvenience or excuse the broken promise. It keeps choices alive while there are still choices to keep.`,
        ],
      },
      {
        title: 'Offer an alternative without silently changing the plan',
        paragraphs: [
          `The transfer became the new arrangement only after the friend receiving the tickets knew what was changing and agreed to it. Sending five tickets to someone's phone without asking, or announcing "sorted, Priya has them" before Priya has looked at her inbox, is a plan that only one person knows about. People waiting on a promise need to be told what is now true, not what you hope will shortly be true.`,
          `Two habits. The moment a promise becomes uncertain, send the departure board: known, possible, being checked, next update at. And make any alternative a proposal that the people relying on it accept before it replaces the plan, then confirm it has actually happened.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'An update before the meeting is missed',
        alt: 'The traveler reports the stopped train, labels possible lateness, checks ticket transfer, and confirms a new arrangement only after agreement.',
        caption: `Read the labels on the left before the text: Known, Uncertain, Check and offer, Confirm. That is the departure board done properly, each box a different kind of information, with the guess clearly marked as a guess. Notice the third box ends in a question and the fourth waits for a yes. Fictional sequence.`,
        items: [
          { label: 'Known', detail: 'My train is stopped; no restart estimate has been given.' },
          { label: 'Uncertain', detail: 'I may miss our meeting time.' },
          { label: 'Check and offer', detail: 'Transfer is available. Are you willing to receive the tickets?' },
          { label: 'Confirm', detail: 'Transfer sent after agreement; please confirm receipt.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and an ordinary calendar'],
      steps: [
        `Invent a promise to bring materials to a hobby session, then add a transport delay with no clear arrival time. The point is to practise writing while you still do not know, which is the moment people usually go quiet.`,
        `Write three separate lines: what is known, what may change, and when you will send the next update. Keeping them on separate lines stops a guess from dressing up as a fact.`,
        `Add one alternative as a proposal with a question mark, not a completed decision, and rehearse alone the recipient accepting it and declining it. Write a short reply to each.`,
        `Check both branches for anything that quietly promises an arrival time or commits another person who has not yet agreed. If a friend is doing something in your plan, they need to have said yes first.`,
      ],
      notice: `The person reading your message can see exactly what changed, what is still open, and when they will hear more, without mistaking an estimate for a promise. The board says Delayed and gives a time to look again, and nobody is planning around a number you made up.`,
      troubleshooting: `If you find yourself waiting until you can be precise, pick the one fact that already affects their planning and send it with its uncertainty attached. If your draft contains a new arrival time, either label it an estimate with an update time or delete it.`,
    },
    recall: {
      prompt: 'A draft you promised a colleague may be delayed because one input is missing. What should an early update distinguish?',
      hint: 'Separate the missing input from your estimate and any reduced-scope proposal.',
      answer: `Put up the departure board. Known: the figures from finance have not arrived, and the draft cannot be finished without them. Uncertain: if they come today you can still deliver tomorrow morning; if not, it slips, and you will say by what time this afternoon. Proposal: you could send everything except the section that needs the figures now, so they can start reviewing, if a partial draft is actually useful to them. The three parts stay separate so your colleague can plan: chase finance themselves, move their review slot, or take the partial draft. What you avoid is a confident "it will be with you Thursday" built on an input you do not control, because that hands them a date they will quote to someone else.`,
    },
    quiz: {
      question: 'You might miss a promised handover but do not yet know by how much. What is most useful now?',
      options: [
        'Wait until the delay can be stated precisely.',
        'Report the relevant uncertainty, known facts, and when you can update again.',
        'Give a reassuring new time so the other person has something definite.',
      ],
      correctIndex: 1,
      explanation: `Reporting what is known, what is uncertain, and when you will update is the honest departure board: it lets the other person act while they still have options. Waiting for precision throws those options away while you wait. A reassuring new time is the board that says 18:50 and then changes to 19:30; it swaps one unreliable commitment for another, and the other person plans around a number that was never real.`,
    },
    takeaway: `When a promise wobbles, write like an honest departure board: say what is known, label what is only possible, name what you are checking, and give the time of your next update, then offer any alternative as a question that the people relying on it must accept before it becomes the plan, because an early message with its uncertainty attached keeps their choices alive and a confident guess quietly destroys them.`,
    sourceNote: 'Communication and reliability guidance inform this example. Ticket transfer is a fictional available option, not a claim about every booking system.',
  },
  {
    id: 'people-034',
    outcome: `After finishing something another person is waiting on, send a short status message that matches the step they actually need, sent, delivered, or confirmed, and closes only what is genuinely finished.`,
    scene: 'A borrowed key is returned by the agreed method, but its owner is still waiting for confirmation.',
    sections: [
      {
        title: 'Done for you, still uncertain for them',
        paragraphs: [
          `You borrowed your neighbour's spare key to let the plumber in. You return it exactly the way you agreed: through their letterbox, in the envelope, by five. Job done. You go home and start dinner. Across the landing, your neighbour is standing in their hallway with a coat on, not leaving for the station. As far as they know the key could be back, could be delayed, or could still be in your pocket.`,
          `The physical task is finished and the shared arrangement is not. It still contains a question only you can answer. From their side, the silence after five o'clock looks identical whether the key is on their mat or in your kitchen. A one-line message closes the gap. It is not fishing for thanks and it does not need the story of your afternoon. It is the last piece of the task, the piece that happens in their head rather than at their door.`,
        ],
      },
      {
        title: 'Dispatched, delivered, signed for',
        paragraphs: [
          `Parcel tracking has taught everyone the difference between three words. Dispatched means it has left the warehouse. Delivered means the courier says it reached your address. Signed for means a person actually took it in. If you are waiting at home to receive a laptop, dispatched is nice to know and useless for planning. Delivered when you were out tells you to check with the neighbours. Signed for means you can stop watching the window. Which status matters depends on what you are about to do next.`,
          `Your completion message is a tracking update, so pick the status the other person needs. Say what was done, plus whatever detail lets them find or use the result. Keep anything sensitive inside the channel you agreed. "Key returned through your letterbox at ten to five, as we agreed" is delivered, and it may be all they need. If you are not certain it arrived, do not announce that they have it. Say what you did and ask them to confirm, which is you requesting the signature. Sending, delivering, and receiving are different states. The one that counts is the one their next action hangs on. A bare "done" names none of them.`,
        ],
      },
      {
        title: 'Report the status you can support',
        paragraphs: [
          `Your neighbour replies: got it, thanks, off to the station. Now nothing about the key is open. Compare that with a message sent twenty minutes earlier, "heading over with it now". True, friendly, and only dispatched. It tells them the key is in motion and nothing about whether they can leave.`,
          `Scope matters as much as stage. If you had borrowed the key and the garage fob and returned only the key, "done" would quietly cover both. Name the one still outstanding: "Key is back; I still have the fob and will drop it tomorrow." The useful result is a status precise enough for the other person's next decision. It should be no more precise than that.`,
        ],
      },
      {
        title: 'Close only what is actually finished',
        paragraphs: [
          `The temptation after finishing is to feel finished, and the feeling is real; the task is off your list. But the task was shared. The other person's half, knowing, has not happened yet. The second temptation runs the other way, into reporting every small step of every favour, which nobody wants. The rule that sorts the two is simple. Send the message when someone is waiting on the information, and send the status they are waiting for.`,
          `Two habits. When you complete something another person depends on, send the tracking update that matches their next step, delivered or confirmed rather than a vague done. And if any part is still outstanding or any delivery is uncertain, say so in the same message. Then the status you close is only the one that is truly closed.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Different statuses imply different next steps',
        alt: 'An on-the-way message reports progress, while a returned-and-confirmed message closes the key handover.',
        caption: `Read the two rows as tracking statuses. The first is dispatched: honest, and the owner still cannot put their coat on. The second is delivered and then signed for, with the owner's reply doing the signing. Only the second answers the question the neighbour was actually standing in the hallway with. Fictional arrangement.`,
        items: [
          { label: 'Progress only', detail: 'I am heading over with the key. The owner still cannot rely on having it.' },
          { label: 'Return confirmed', detail: 'Returned as agreed. Owner: I have it now, thank you.' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper or a private note'],
      steps: [
        `Invent a task: sending a workshop handout to a friend who needs it before Tuesday. Write down what finished has to mean for them, which is probably that they can open the file, not that you have attached it.`,
        `Draft two updates: one for a file you have prepared but not yet sent, and one for a file sent through the channel you agreed. Label each with its tracking status, dispatched or delivered, so the difference is visible on the page.`,
        `Add a receipt check to the second update if you cannot see that it arrived, then rehearse the friend replying that the attachment did not come through. Play both roles alone and write your next line.`,
        `Revise the status honestly after that reply rather than repeating done. Stop when whatever is still uncertain is written down in plain words.`,
      ],
      notice: `Your messages tell the friend whether the handout is prepared, sent, or confirmed in their hands, instead of collapsing all three into one word. They know whether to stop waiting or to check their spam folder.`,
      troubleshooting: `If your draft is angling for a thank you, cut that and replace it with the practical status or the detail they still need. If it says done while something is uncertain or outstanding, split it: what is closed, what is not.`,
    },
    recall: {
      prompt: 'You upload a draft to a shared folder, but a colleague is waiting for it before reviewing. What closes the loop?',
      hint: 'Uploading does not guarantee they know where it is or can open it.',
      answer: `Uploading is dispatched. Your colleague is waiting for delivered, or really for signed for: knowing the file is there, where it is, which version it is, and that they can open it. So send a message through the channel you agreed, with the folder path and the version name, and if there is any doubt about permissions, ask them to confirm they can open it rather than assuming the upload did the whole job. If they reply that they cannot see it, the honest status is not done, it is uploaded but not yet accessible, and that is the next thing to fix. The loop closes when they say they have it, not when the progress bar finishes on your screen.`,
    },
    quiz: {
      question: 'You have sent an agreed document, but delivery is unconfirmed and the recipient needs it now. Which update is most accurate?',
      options: [
        'Everything is completed; they can check whenever convenient.',
        'The document is nearly finished, to avoid overstating progress.',
        'The document has been sent through the agreed channel; can they confirm access?',
      ],
      correctIndex: 2,
      explanation: `Sent through the agreed channel, please confirm access, is dispatched stated honestly with a request for the signature, which is exactly where things stand. Saying everything is completed claims signed for when you only know dispatched. Saying it is nearly finished understates a step you have already taken and leaves them waiting for something that has already happened.`,
    },
    takeaway: `A completion message is a parcel tracking update, so send the status the other person's next step actually depends on, dispatched, delivered, or signed for, rather than a bare done; if delivery is uncertain, say what you did and ask them to confirm, if part of the task is still outstanding, name it in the same breath, and send it when someone is waiting on the information rather than for every small step of a favour.`,
    sourceNote: 'Communication and relationship sources inform this handover example. It recommends useful status updates, not monitoring every action or demanding constant availability.',
  },
  {
    id: 'people-035',
    outcome: `When someone asks for something that depends on another person's yes, promise only what you control, asking and reporting back by a time you can keep, and say plainly that it is not confirmed.`,
    scene: 'A customer asks a community print-stall helper whether the absent artist can sign a custom order.',
    sections: [
      {
        title: 'A helpful answer assigns someone else\'s time',
        paragraphs: [
          `You are minding the community print stall for the afternoon while the artist is at a funeral. A customer picks up a print and asks whether the artist could sign a custom version before the weekend, as a present. You want to be helpful. The request sounds small. The words are out before you have thought: "Yes, she will do that for you." The customer leaves happy. They have a present now.`,
          `They do not have a present. They have your sentence, and your sentence spent somebody else's Friday. The artist never agreed to sign anything. She may be fully booked. She may not sign gift copies as a rule. If she declines, she is now the person who let a customer down, and will feel pushed to rescue a promise she did not make. If she agrees, it is under pressure you created. And the customer, reasonably, thinks the stall confirmed something and then changed its mind.`,
        ],
      },
      {
        title: 'I will ask the chef',
        paragraphs: [
          `A diner asks the waiter whether the kitchen can make the risotto without cheese. A good waiter never says "yes, no problem" on the chef's behalf. The waiter does not know whether the dish is built on a cheese stock. The good waiter says, "I will ask the chef and come straight back," and does. Sometimes the answer is yes. Sometimes it is "he says the base has parmesan in it, but he can do the mushroom tagliatelle without." Either way the diner gets a true answer from the person who can actually give one. The waiter has promised only the walk to the kitchen.`,
          `Be the waiter. What you control is asking and reporting. What you do not control is the artist's time or her answer. So say exactly that: "I can ask whether a signed copy by Friday is possible, and I will let you know by tomorrow lunchtime. It is not confirmed yet." That is not a dodge. It is a real service with a real deadline attached to the part you own. The uncertainty is stated before the customer builds a plan on it, not after. The same shape fits anything that runs through another person: an introduction, a lift, a manager's approval, borrowing a housemate's camera. You can promise the walk to the kitchen. You cannot promise what the chef says.`,
        ],
      },
      {
        title: 'Separate your task from their decision',
        paragraphs: [
          `You ask. The artist says she is sorry, but she cannot sign anything this week. At the time you promised, you tell the customer exactly that. Then you make yourself useful within what you do control: "Would an unsigned print still work as the present, or shall I ask again for the following week?"`,
          `Two things stay out of the conversation. You do not go back to the artist and describe how disappointed the customer looked, as though her availability were a problem for her to fix. And if you had already said "yes, she will", you own that: "I spoke too soon yesterday; that was mine to check first, not to promise." The artist refused nothing she had agreed to. The customer still ends up with accurate information to plan around. That is what you could honestly offer from the start.`,
        ],
      },
      {
        title: 'Why the yes comes out first',
        paragraphs: [
          `A quick yes feels like good service. "I will have to check" feels like a fob-off. In fact the order is reversed. The quick yes serves the next thirty seconds and costs two other people later. The check serves the customer's actual plan. Waiters who say yes to everything are not the ones the kitchen trusts or the diners remember kindly.`,
          `Two habits. When a request depends on someone who is not in the room, answer with the two things you control, I will ask and I will tell you by when, and name the uncertainty out loud. And when the answer comes back as a no, deliver it on time. Do not pass the pressure back to the person who said it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'A request is not a confirmed service',
        alt: 'The stall helper offers to ask about a Friday signature and report tomorrow, while making clear that the artist has not agreed.',
        caption: `Look at what the helper actually commits to in the middle line: asking, and an update by tomorrow. The signature itself is left where it belongs, with the artist, and the uncertainty is said in so many words. The last line is the waiter coming back from the kitchen with a no and an alternative, not an apology for the chef. Fictional exchange.`,
        items: [
          { label: 'Customer', detail: 'Can the artist sign this before the weekend?' },
          { label: 'Helper', detail: 'I can ask about Friday and update you tomorrow. It is not confirmed yet.' },
          { label: 'Later update', detail: 'She cannot sign this week. Would an unsigned print still be useful?' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen'],
      steps: [
        `Invent a friend asking to borrow your housemate's camera for the weekend. Draw two columns headed my action and housemate's decision. The columns are the counter and the kitchen; the line between them is what you are practising.`,
        `Put asking and reporting back in your column, and put whether to lend, and on what conditions, in the housemate's column. If anything about the camera has drifted into your column, move it.`,
        `Draft your reply to the friend with a realistic update time and the uncertainty stated plainly, then rehearse the housemate saying no. Do this on paper; do not actually ask anyone.`,
        `Write the update you would send the friend after that no, and check it for blame or pressure on the housemate. It should read as information, not as a complaint relayed.`,
      ],
      notice: `Your promise can be kept whether the housemate says yes or no, because you only promised the walk to the kitchen. The friend has an honest timeline, and the housemate has a decision that is still theirs.`,
      troubleshooting: `If your offer contains "they will" or "she will", you have answered for the chef; replace it with what you will ask or confirm, unless the person has already agreed. If your update after a no mentions how disappointed your friend was, delete that; it is pressure dressed as news.`,
    },
    recall: {
      prompt: 'A colleague wants an introduction to a friend of yours. What can you promise before asking that friend?',
      hint: 'Contact details and willingness to meet remain under the friend\'s control.',
      answer: `Only the walk to the kitchen. You can promise to ask your friend whether they would welcome an introduction, and to tell your colleague the answer by a day you can actually manage. You cannot promise the introduction, pass on an email address or number, or suggest a meeting, because every one of those is your friend's decision and none of it has been made. Say the uncertainty out loud when you offer, so your colleague does not start drafting a message tonight. If your friend says no, or not now, report that plainly and on time without explaining how keen your colleague was, which would just be pushing the pressure back through the door. If your friend says yes, let them choose how the introduction happens.`,
    },
    quiz: {
      question: 'You want to help a customer obtain another team\'s approval, but that team has not agreed. Which commitment is honest?',
      options: [
        'Promise approval because the request looks routine.',
        'Promise to submit the request and report its status by a realistic time, without guaranteeing approval.',
        'Promise a likely approval date and revise it if the team objects.',
      ],
      correctIndex: 1,
      explanation: `Submitting the request and reporting back by a realistic time is the waiter promising the walk to the kitchen: both halves are yours to deliver whatever the team decides. Promising approval because it looks routine answers for the chef without asking. A likely approval date is a yes in disguise; the customer will plan around it, and revising it later is the stall changing its mind.`,
    },
    takeaway: `Be the waiter who says "I will ask the chef", not the one who says yes on the kitchen's behalf: when a request depends on someone who has not agreed, promise the two things you control, asking and reporting back by a time you can keep, say out loud that it is not yet confirmed, and if the answer is no, deliver it on time without passing the customer's disappointment back to the person who gave it.`,
    sourceNote: 'Boundary and communication guidance inform the scope of the promise. The print-stall example does not define formal commercial approval processes.',
  },
  {
    id: 'people-036',
    outcome: `When two people propose different plans, ask what each plan is for, share your own reason as openly as you ask for theirs, and then test new options against the needs both of you actually named.`,
    scene: 'Friends choosing between a picnic and a cafe discover separate needs for quiet conversation and reliable shelter.',
    sections: [
      {
        title: 'The venue is the proposal, not the whole need',
        paragraphs: [
          `You and a friend are trying to fix a Saturday catch-up. You say picnic. They say cafe. You say picnic again, slightly more warmly. They say cafe again, with a reason about the forecast. Three messages in, the conversation has become a small contest over who gets to pick the venue, and nobody has yet said why either venue was proposed in the first place.`,
          `Ask. "What matters to you about meeting at the cafe?" Your friend says they want to know there is shelter if the weather turns. You offer your own reason without being asked: you suggested a picnic because the cafe you went to last time was so loud you could barely hear each other. Two useful words sort this out. A position is the option someone proposes, the picnic or the cafe. An interest is the need that makes the option attractive, shelter in one case and a conversation you can actually hear in the other. Positions collide. Interests often do not.`,
        ],
      },
      {
        title: 'The window and the thermostat',
        paragraphs: [
          `Two people share an office. One keeps opening the window; the other keeps closing it. Open, closed, open, closed, with increasing politeness and decreasing goodwill. Ask each what they are after and the fight dissolves. One wants fresh air, because the room gets stuffy by eleven. The other does not want to be cold, because they sit in the draught. Open versus closed are positions and they cannot both win. Fresh air versus not being cold are interests, and a window open for ten minutes every hour while the cold one gets up to make tea satisfies both. Nobody compromised. The thing they were arguing about turned out not to be the thing they wanted.`,
          `Keep two rules when you ask about interests. First, the interests that matter are the ones people tell you, not motives you diagnose; "what would make the cafe work for you?" gathers a decision criterion, while "why are you always so difficult about picnics?" is an accusation wearing a question mark. Second, share yours as freely as you ask for theirs, or the exchange starts to feel like an interview designed to find a weakness. Asking does not promise that a clever third option exists. And your friend is allowed to say "I would rather not go into it" about a private reason while still naming the practical requirement, which is all the plan actually needs.`,
        ],
      },
      {
        title: 'Ask about interests without claiming to uncover secrets',
        paragraphs: [
          `With shelter and audible conversation on the table, you suggest two things to check: the covered courtyard at the arts centre, and a quieter cafe on the next street. Both might offer a roof and a conversation at normal volume, but both need checking, for opening hours, for seats, for how loud they really are. In this fictional afternoon the quiet cafe has a table free, and you both agree it does the job.`,
          `Notice what did not happen. You did not split the afternoon between a damp picnic and a deafening cafe to be fair. You did not take turns picking. You found a third proposal that met both named needs, and it was findable only because the needs had been named. If no such option had existed, choosing another day or doing separate things would have been perfectly reasonable outcomes. Interest-based negotiation widens what you can consider. It does not promise every disagreement has a solution, and it never obliges anyone to accept your favourite compromise.`,
        ],
      },
      {
        title: 'Why positions get repeated',
        paragraphs: [
          `Saying the venue again is easy, and it feels like holding your ground. Saying the reason behind it feels like showing your hand, as if the friend might use it against you. But in a catch-up with a friend there is no hand to protect, and the reason is the only thing that lets a third option appear. Two people repeating open and closed can go on all afternoon. Two people who have said fresh air and draught are nearly done.`,
          `Two habits. When you and someone else are repeating different proposals, stop and ask what each one is for, and say your own answer first if that helps. And once the needs are named, generate options against the needs rather than between the proposals, checking facts before announcing any of them as the plan.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'From venue positions to named interests',
        alt: 'One friend wants shelter, the other wants easier conversation, and they consider a quieter sheltered venue.',
        caption: `Find the word because in the first two lines: that is where each position turns into an interest, shelter and audible conversation, the fresh air and the draught behind the open and closed window. Then notice the third line is a question about checking two options, not an announcement of the plan. Fictional exchange.`,
        items: [
          { label: 'Friend', detail: 'I prefer a cafe because I want shelter if it rains.' },
          { label: 'You', detail: 'I suggested a picnic because the last cafe was too noisy to talk.' },
          { label: 'New possibility', detail: 'Could we check a quieter cafe or a covered courtyard?' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper with two columns'],
      steps: [
        `Invent two plans for a family afternoon, a museum and a park say, and write one stated need behind each in its own column: what the museum is for, what the park is for. The need has to be something a person would actually say, not a motive you have guessed.`,
        `Draft a neutral question about each proposal of the form "what would make this work for you?" and answer both yourself as the two people would. If an answer contains always or difficult, it has turned into an accusation; rewrite it.`,
        `Come up with two other possibilities and test each against both named needs, noting any fact you would still have to check, such as whether the place is open or quiet. You are opening the window for ten minutes an hour, not splitting the difference.`,
        `Mark the best-fitting possibility as a proposal and write one sentence that checks agreement, rather than a sentence that announces the plan for everyone. The window schedule only works if the cold person agreed to it.`,
      ],
      notice: `At least one option on your page is being judged against what both people said they needed, not against who suggested what first. The proposals have stopped colliding because the needs behind them turned out to be compatible.`,
      troubleshooting: `If the needs in your columns are just the venue names again, ask what feature or experience each venue is supposed to deliver, shelter, quiet, something for the children to do. If your best option is simply halfway between the two proposals, check whether it actually meets either need or just splits the discomfort.`,
    },
    recall: {
      prompt: 'A colleague wants a morning meeting while you prefer afternoon. What could you ask before bargaining over the hour?',
      hint: 'Find out what each timing protects or enables.',
      answer: `Ask what the morning slot does for them, and say what the afternoon does for you, before anyone proposes eleven o'clock as a compromise. Morning and afternoon are the open and closed window. The interests might be that your colleague needs the decision made before a noon deadline, or that mornings are when their team is all in, while you want your uninterrupted focus block protected or you have the school run. Once those are named, options appear that an hour-by-hour haggle would never find: a short morning call for the decision and a longer afternoon session for the detail, or an asynchronous note that settles the deadline question with no meeting at all. If the interests genuinely cannot both be met, you will at least be bargaining over the real thing instead of the clock.`,
    },
    quiz: {
      question: 'Two housemates propose different dinner times. Which question most directly explores the interests behind the proposals?',
      options: [
        'What does that time make easier for you, and what would another time disrupt?',
        'Would taking turns choosing the time be the fairest solution?',
        'Could we choose the midpoint between our preferred times?',
      ],
      correctIndex: 0,
      explanation: `Asking what a time makes easier and what another time would disrupt is asking about fresh air and draughts rather than open and closed: it surfaces the needs the proposals are standing in for. Taking turns and picking the midpoint are both ways of settling between the positions, and either might end up being used, but neither tells you whether the time chosen actually works for anyone.`,
    },
    takeaway: `Two people repeating open and closed at a window are not arguing about the window, so when proposals collide, ask what each one is for, share your own reason as openly as you ask for theirs, and then look for options that meet both named needs, checking the facts before announcing anything, because positions cannot both win and interests very often can.`,
    sourceNote: 'Harvard\'s principled negotiation distinguishes interests from positions. This original dialogue offers no guaranteed agreement.',
  },
  {
    id: 'people-037',
    outcome: `When dividing several jobs between people, compare complete packages side by side, look for the effort hidden inside each task, and treat quiet as not yet agreed rather than as a yes.`,
    scene: 'Two volunteers divide sorting, labeling, display setup, and packing away for a community book swap.',
    sections: [
      {
        title: 'Single tasks hide linked preferences',
        paragraphs: [
          `Rhea and Sam are running the community book swap on Saturday afternoon. Four jobs are left on the list: sorting the donated books, writing the category labels, setting up the display, and packing everything away afterwards. Rhea can only come before lunch and quite likes sorting. Sam arrives after lunch and would rather do the display. They start going down the list one job at a time. It gets awkward fast.`,
          `Going job by job hides the fact that these jobs are linked. Who sorts depends on who is there in the morning. Who packs away depends on who is there at five. A preference for sorting only makes sense alongside the time it takes and what else that person is doing. A package is a different way to decide. Several choices are presented together as one complete arrangement. Each person can then see what saying yes to one part means for their other tasks and their afternoon.`,
        ],
      },
      {
        title: 'The holiday package and the transfer nobody mentioned',
        paragraphs: [
          `When you compare two holidays, you do not compare the flight on one with the hotel on the other. You compare whole packages: flights, hotel, dates, as one thing against another. The experienced traveller also reads the small print on each. One package quietly leaves out the airport transfer. A cheap-looking deal becomes a taxi at midnight and forty pounds you had not planned for. Two packages at the same headline price are not the same holiday until you have found what each one hides.`,
          `Build two complete packages for the book swap. Package A: Rhea sorts and writes labels before lunch; Sam sets up the display after lunch and packs away after the event. Package B: Rhea sets up the display and writes labels before lunch; Sam sorts after lunch and packs away. Both cover all four jobs, and each person gets two tasks in each. A fits the stated preferences better. But two jobs each proves nothing about effort. Two packages at the same price do not prove the same holiday either. Sorting a van load of donations could take three hours; arranging the display might take forty minutes. Before anyone calls a package fair, ask about workload, timing, and the preparation tucked inside each task. That is the transfer nobody mentioned.`,
        ],
      },
      {
        title: 'Put complete alternatives beside one another',
        paragraphs: [
          `They look at the donation pile and admit that sorting all of it before lunch is not realistic for one person. So the package changes. Fewer books go on display this time, which shrinks the sorting job to something Rhea can finish by one. Rhea accepts package A on that basis. Sam checks that the display and the pack-away both fit his afternoon, and says yes.`,
          `The reduced display is part of the agreement, written down with the rest. It is not a quiet extra burden on Rhea or an unstated expectation that Sam will absorb the overflow. Trading different preferences let them make an arrangement that suits both without splitting every job identically. It worked because both could see the whole package and either could have rejected it.`,
        ],
      },
      {
        title: 'Preferences create options, not assignments',
        paragraphs: [
          `The person most at risk in a package deal is the quiet one. If Sam had simply not argued, that silence would have been easy to file as agreement. He would have arrived at five to find the pack-away was somehow all his. Not objecting is not accepting. If the total work is still too much after the packages have been compared honestly, the answer is to recruit help, with that person's permission, or to cut the scope. It is never to hand the leftovers to whoever said least.`,
          `Two habits. When several jobs have to be shared, write two complete packages and compare them whole. Ask what effort each task hides before you compare the counts. And get an explicit yes from each person to the full package, treating silence as a question still open rather than an answer.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: 'Two packages, the same four jobs',
        alt: 'Rows compare packages A and B; columns show Rhea\'s before-lunch tasks and Sam\'s later tasks.',
        caption: `Read across a row to see one complete package, the way you would read one holiday deal from flights to hotel. Both rows give each person two jobs, which is the matching headline price. What the grid cannot show is how long sorting takes compared with the display, the transfer nobody mentioned, and that is the question to ask before calling either row fair.`,
        items: [
          { label: 'A / Rhea', detail: 'Before lunch: sort books and add category labels.' },
          { label: 'A / Sam', detail: 'After lunch: arrange the display. After the event: pack away.' },
          { label: 'B / Rhea', detail: 'Before lunch: arrange the display and add category labels.' },
          { label: 'B / Sam', detail: 'After lunch: sort books. After the event: pack away.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper divided into a four-cell grid'],
      steps: [
        `Invent two housemates sharing four jobs: shopping, cooking, washing up, and putting the groceries away. Give each one timing constraint and one preference, because the constraints are what make job-by-job dividing go wrong.`,
        `Fill the grid with two complete packages, rows for packages and columns for people, making sure every one of the four jobs appears in each row. A package with a job missing is a holiday with no flight home.`,
        `For each cell, ask what the task actually involves in time and effort, including the trip to the shops and the drying up, not just the task count. Rehearse each person's likely objection aloud if you are working alone.`,
        `Revise one package to answer an objection, then write the sentence that asks whether both people accept the full revised arrangement. The sentence should be a question, and it should name the whole row.`,
      ],
      notice: `Both of your packages cover the same work, and the objection you rehearsed changed the proposal rather than quietly landing on one person as an extra job. Anyone reading the grid could see what each person is actually signing up for.`,
      troubleshooting: `If one package hides the shopping trip, the travel, or the cleanup inside a tidy label, write that work out before you compare fairness; it is the midnight taxi. If you have marked a package agreed because nobody spoke against it, go back and get the yes.`,
    },
    recall: {
      prompt: 'Two colleagues divide a workshop. One likes preparing materials; the other prefers presenting. What should a fair package make visible?',
      hint: 'Include preparation, delivery, and follow-up rather than comparing only time on stage.',
      answer: `The whole holiday, not just the flight. A fair package lays out everything the workshop involves for each person: the hours of preparing materials, the time on stage, the setting up and clearing away, and the follow-up afterwards, emails and feedback and tidying the shared folder. Presenting for ninety minutes can look like the bigger job and be the smaller one once twelve hours of preparation are written down next to it, or the reverse. Their preferences make a trade possible, preparer and presenter, but the trade is only fair when both can see the full burden in each column and both say yes to it. The transfer nobody mentioned here is usually the follow-up, which tends to drift to whoever is quieter.`,
    },
    quiz: {
      question: 'Two volunteers each receive two tasks, but one package includes all the travel and cleanup. What should happen before agreement?',
      options: [
        'Accept it because the task counts match.',
        'Rotate packages next time so the larger burden will even out later.',
        'Compare the hidden effort and revise the full package with both volunteers.',
      ],
      correctIndex: 2,
      explanation: `The travel and the cleanup are the transfer nobody mentioned: two tasks each is the matching headline price, and the real cost is hiding underneath one of them. Comparing that effort and revising the whole package with both people is the only option that fixes today's arrangement. Accepting on counts ignores the hidden work, and promising to rotate later leaves one volunteer carrying it now on the strength of an unspecified future.`,
    },
    takeaway: `Divide shared jobs like a traveller comparing holiday packages: set out two complete arrangements and compare them whole, read the small print for the effort each task hides, the sorting that takes three hours or the cleanup folded into a tidy label, and get an explicit yes from each person to the full package, because matching task counts is a matching headline price and silence is a question still open.`,
    sourceNote: 'Harvard\'s value-creation guidance informs these original packages. Matching task counts does not establish fairness.',
  },
  {
    id: 'people-038',
    outcome: `When sharing a cost, agree the rule for splitting it before anyone knows which share they will get, test the rule by imagining the roles swapped, and treat checkable facts as a start, not a verdict.`,
    scene: 'Two friends compare equal and room-adjusted shares for a hypothetical holiday rental with different rooms.',
    sections: [
      {
        title: 'Fair can mean several different rules',
        paragraphs: [
          `Two friends find a rental for a long weekend at a hypothetical $180 a night. Two bedrooms. One is large, with its own bathroom. The other is small and shares the bathroom down the hall. "We will just split it fairly," one says, and the other agrees. They both mean it, and they have agreed nothing at all. Fair has at least two meanings here and they have not said which.`,
          `Equal shares would be $90 each: same house, same weekend, same bill. A room-adjusted split might be $100 for the big room with the bathroom and $80 for the small one. Neither follows from the word fair by itself. And watch the order of events. If one friend grabs the big room first and only then argues for equal shares, their proposed rule happens to protect a result they already have. That does not make them wrong. It does make the rule hard to trust.`,
        ],
      },
      {
        title: 'I cut, you choose',
        paragraphs: [
          `Two children sharing a cake have known the answer for generations: one cuts, the other chooses. The cutter has every reason to make the halves even. They do not yet know which half they will get. The rule is fixed before anyone knows the outcome, and that is the whole of its power. Compare the alternative, where one child cuts, takes the bigger piece, and then explains why that was fair. Nobody is persuaded by that explanation, however good it is. The explanation arrived after the piece did.`,
          `Cut the rental before anyone chooses a room. Discuss what the split should reflect while both rooms are still up for grabs: equal use of the whole house, the private bathroom, an agreed budget one of you cannot go over. Facts you can both check, the listing's room descriptions and the total price, anchor the conversation. They do not settle it. Floor area says nothing about noise, privacy, or who can actually afford what. An objective criterion means a basis both of you can examine independently of who argues more forcefully. It is not a machine that prints the one correct price. The cutter still has to decide where the knife goes. The rule just makes sure they decide before they know which plate is theirs.`,
        ],
      },
      {
        title: 'Choose a relevant standard before assigning rooms',
        paragraphs: [
          `They agree, before choosing, that a private bathroom is worth something. They talk about how much, and settle on $100 and $80. Still $180 in total. Then comes the test that I cut, you choose builds in: would each of them still accept that rule if the rooms went the other way? If the friend who ends up in the big room would have called $20 excessive from the small one, the rule was chosen for advantage. That is worth saying out loud now rather than discovering later.`,
          `Either friend can also say no to the whole rental if neither option works for them. That is a legitimate outcome and not a failure. The $100 and $80 are a worked proposal between two people, not a market valuation of bathrooms. What they have at the end is an explicit basis both agreed to while the outcome was still open. That is a different thing from a preferred result presented as the only possible meaning of fair.`,
        ],
      },
      {
        title: 'Test the rule against either room assignment',
        paragraphs: [
          `Rules get chosen after outcomes because that is the order the mind works in. You see the room you want, and the argument for why you should pay no more for it arrives fully formed a second later. It feels like reasoning. The swap test exposes it. If the argument only works from one side of the knife, it was never about fairness. The second trap is calling an equal split neutral, as if it avoided judgement. Equal shares are a rule like any other, and choosing it is a judgement about what the two of you are sharing.`,
          `Two habits. Before dividing any shared cost, agree what the split should reflect while nobody yet knows which share is theirs. And run the swap: ask whether you would accept the same rule from the other side. If the answer is no, keep talking.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two proposed splits of the same total',
        alt: 'An equal split is 90 dollars each; a negotiated room premium makes the shares 100 dollars and 80 dollars, both totaling 180.',
        caption: `Check the totals first: both rows come to $180, so the arithmetic cannot choose between them. The choice is in the rule each row expresses, equal sharing against a discussed premium, and the story only works because that rule was agreed before anyone picked a room. Hypothetical per-night figures; the premium is negotiated, not computed from a formula.`,
        items: [
          { label: 'Equal shares', detail: '$90 + $90 = $180. Treat both people as sharing the rental equally.' },
          { label: 'Agreed room premium', detail: '$100 + $80 = $180. Reflect the private bathroom through a discussed premium.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Optional calculator'],
      steps: [
        `Invent a fictional $120 shared purchase that two people will use unequally, and write two possible standards for splitting it, such as equal access and expected use. Naming two rules is what stops fair from being one person's assumption.`,
        `Create one proposed split for each standard and check that both pairs of shares add up to $120. The arithmetic has to work for both, which is exactly why arithmetic will not pick between them.`,
        `Write down one thing each standard leaves out, then run the swap test: rehearse both participants yourself, exchanging which share each would pay, and notice whether either rule only feels right from one side.`,
        `Draft the question that asks whether the chosen standard fits, worded so it is asked before anyone commits to the purchase or to a share. That is the knife being discussed before the cake is cut.`,
      ],
      notice: `Both of your splits total $120 and the discussion still has to justify which rule fits this purchase and these two people. The swap test showed you which rule you would accept from either plate.`,
      troubleshooting: `If a rule seems fair only when it lowers your own share, you have cut the cake and then explained; swap roles on paper and write down what changed in your reasoning. If you reached for an equal split to avoid the conversation, notice that equal is also a rule, and ask whether it is the right one here.`,
    },
    recall: {
      prompt: 'A group shares a hired studio, but some members use it longer. What should they discuss before setting individual charges?',
      hint: 'Equal membership and time used are different possible standards.',
      answer: `The rule, before the invoices. Decide first what the charges should reflect: which costs come from simply being a member with access, and whether hours actually used should change any part of the bill. Check the facts you can check, the booking records and the total hire cost, and then be honest about what the rule leaves out, such as a member who books long slots but shares them, or someone whose hours are low because the good slots are always taken. Then run the swap: would the heaviest users accept this rule if they were the lightest, and the other way round? Setting charges first and finding a rule to match them afterwards is cutting the cake and then explaining, and the explanation will not land.`,
    },
    quiz: {
      question: 'Two people disagree about a shared cost. Which process best avoids selecting a rule only to defend a preferred share?',
      options: [
        'Discuss checkable criteria and their limits before assigning the preferred shares.',
        'Choose shares first, then find a plausible standard that matches them.',
        'Split equally because that removes every judgement about fairness.',
      ],
      correctIndex: 0,
      explanation: `Agreeing the criteria and their limits before anyone has a share in hand is I cut, you choose: the rule is fixed while the outcome is still open, so it cannot be bent toward a plate. Choosing shares first and finding a standard afterwards is cutting the cake and then explaining. Splitting equally is not an escape from judgement; it is one rule among several, and picking it is itself a decision about what is being shared.`,
    },
    takeaway: `Share a cost the way children share a cake, I cut, you choose: agree what the split should reflect before anyone knows which share is theirs, use the facts you can both check as a start rather than a verdict, test the rule by imagining the rooms or roles swapped, and remember that an equal split is also a rule, not a way of avoiding one.`,
    sourceNote: 'Principled negotiation informs the criteria. Prices are invented arithmetic examples, not valuations or universal cost-sharing advice.',
  },
  {
    id: 'people-039',
    outcome: `Before accepting or declining an offer, work out what you would genuinely do without it, check that fallback is real in cost and timing, and use it to decide for yourself, never as a threat.`,
    scene: 'A concertgoer compares a friend\'s late lift with a train that reaches the venue before the performance.',
    sections: [
      {
        title: 'A fallback changes the decision',
        paragraphs: [
          `A friend offers you a lift to the concert, but their shift means they cannot get you to the venue until 7:10. The performance starts at 7:00, and the opening piece is the one you most want to hear. Without any other option, the choice is a late lift or no concert, and the late lift wins by default. You would say thank you and quietly miss the beginning.`,
          `Now look at the fictional timetable. An $8 train gets into the station at 6:35, and it is a ten-minute walk from there, so you would be at the venue door by 6:45. The lift is no longer being compared with missing the event. It is being compared with another way of getting there in time. That changes everything about the decision, and it does something kind for your friend too: they can keep their shift instead of leaving early for you.`,
        ],
      },
      {
        title: 'The spare tyre you have actually checked',
        paragraphs: [
          `A spare tyre in the boot is only a plan if it has air in it. Most people assume theirs is fine and find out otherwise on a hard shoulder in the rain. A checked spare changes how you drive. You take the longer road without worrying, you decline the dodgy shortcut, because you know what happens if something goes wrong. An unchecked spare gives you the same confidence with none of the backing. And nobody sensible waves a spare tyre at the mechanic to get a better price. It is there to get you home, not to frighten anyone.`,
          `Negotiators have a name for the checked spare: BATNA, the best alternative to a negotiated agreement. It means what you would actually do if this particular arrangement does not happen. The important word is actually. It is not the option you wish existed, and it is not the one that would be convenient if it worked. Check availability, total cost, door-to-door timing, and anything about access you need. The train is a real fallback only if the service runs that evening, the fare is what you think, and the walk is one you can do. The invented times here are not a timetable to rely on. If a better feasible option turns up, that one becomes the comparison. And having a good fallback lets you decline an offer without declaring the offer unfair or the friend unhelpful. You simply have a better way to get there.`,
        ],
      },
      {
        title: 'BATNA names the best available fallback',
        paragraphs: [
          `With the train checked, the reply is easy and warm. "Thanks for offering. I really want to catch the opening, so I will take the train and meet you there." Your friend keeps their shift. You take the fallback you verified. Nobody has been leaned on.`,
          `Notice the two things you did not do. You did not invent a second driver who was definitely available. You did not suggest that a real friend would rearrange their work. The spare tyre supports your decision; it is not a way of changing theirs. And if the train turns out to be cancelled that evening, your fallback has changed, so you say so and reassess honestly rather than pretending the earlier comparison still holds.`,
        ],
      },
      {
        title: 'Use the alternative without turning it into a threat',
        paragraphs: [
          `The bluff is tempting because it is cheap. "It's fine, I can probably get a lift from Dan" costs nothing to say and may well move your friend to leave work early. But if Dan was never asked, you have produced an agreement that rests on something untrue. Both of you are now planning around a fact that does not exist. The other failure is the unchecked spare: assuming the train runs, declining the lift, and finding out at 6:20 that it does not.`,
          `Two habits. Before you answer any offer that matters, write down what you would really do without it, with its cost and its door-to-door time, and verify the parts you can. And keep the fallback for your own decision, never as a line to make the other person move. A spare tyre is for getting home.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Compare arrivals, not pressure',
        alt: 'The lift arrives at 7:10; the hypothetical train and walk arrive at 6:45 for a 7:00 performance.',
        caption: `Compare the two arrival times against the 7:00 start, and notice the fallback row includes the ten-minute walk, not just the station time; a spare tyre is only checked if you measured the whole journey. Nothing in either row is a lever on the friend. Invented times and fare.`,
        items: [
          { label: 'Proposed lift', detail: 'Venue arrival 7:10. Misses the start of the 7:00 performance.' },
          { label: 'Checked fallback in story', detail: '$8 train: station 6:35 + 10-minute walk = venue 6:45.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'A public timetable or a fictional schedule'],
      steps: [
        `Pick a low-stakes outing and write down a proposed shared travel plan, the lift or the shared taxi someone has offered. Invent the details if no real outing is coming up; the exercise is about the comparison, not the trip.`,
        `Identify a fallback and record its full cost and its door-to-door timing, including any walk or connection at the far end. Checking the spare means measuring to the venue door, not to the station.`,
        `Compare whether each option actually meets the outing's needs, such as arriving before the start, and mark any detail you have not verified as unverified rather than treating it as available.`,
        `Draft a courteous acceptance or decline based on the comparison, and rehearse it aloud without inventing another offer or hinting that the other person should change their plans. The fallback is yours to use, not theirs to react to.`,
      ],
      notice: `Your decision rests on an alternative you could actually take, with its limits written down, and the message you drafted asks nothing of the other person except to hear your answer. The spare has air in it and it stayed in the boot.`,
      troubleshooting: `If your fallback depends on a favour from someone who has not said yes, it is an unchecked spare; mark it uncertain and find another option before relying on it. If your draft contains a sentence designed to make the other person feel they should do more, delete it.`,
    },
    recall: {
      prompt: 'A borrowed projector is unavailable for your club night. How could a fallback help without pressuring the owner?',
      hint: 'Consider what you can genuinely do without that loan.',
      answer: `Check the spare rather than leaning on the owner. Work out what the club night can really do without that projector: a different one you can actually borrow, a hire for an evening at a price you have looked up, or a version of the night that does not need a screen at all. Compare each on cost, timing, and whether it does the job, and verify the parts you can before you count on them. A real fallback lets you tell the owner "no problem, we have sorted something" and mean it, which is kinder to them than any amount of hinting. What you do not do is invent a second offer to see if they will relent, or suggest that a reliable friend would have found a way to lend it. The projector is theirs, and your plan should not depend on changing their mind.`,
    },
    quiz: {
      question: 'Your preferred fallback depends on a friend who has not replied. How should it affect the current negotiation?',
      options: [
        'Treat it as available because the friend usually helps.',
        'Keep it uncertain and verify a feasible alternative before relying on it.',
        'Compare its expected cost now and confirm availability after declining the current offer.',
      ],
      correctIndex: 1,
      explanation: `A friend who has not replied is a spare tyre nobody has checked, so the fallback stays uncertain until it is confirmed, and you look for another feasible option before leaning on it. Treating it as available because they usually help is assuming the tyre has air in it. Declining the current offer and confirming afterwards is driving off on the assumption, and can leave you with neither the lift nor the fallback.`,
    },
    takeaway: `A fallback is a spare tyre you have actually checked: before answering an offer, write down what you would genuinely do without it, with the full cost and the door-to-door time, verify what you can, and let it guide your own decision, then keep it in the boot, because a bluff about Dan's lift or an unchecked train produces an agreement that rests on something untrue, and a spare is for getting home, not for frightening the mechanic.`,
    sourceNote: 'Harvard\'s BATNA guidance informs the comparison. The transport details are hypothetical, and a fallback is not presented as a threat or a guarantee.',
  },
  {
    id: 'people-040',
    outcome: `Before starting any let's-try-it arrangement, write down who does what, when it ends, what the review looks at, and what happens by default if nobody agrees to carry on, so silence never extends it.`,
    scene: 'Two housemates try shared dinners on two weekdays and plan how to review the workload after two weeks.',
    sections: [
      {
        title: 'Try it needs an ending',
        paragraphs: [
          `Jo and Lee, who share a flat, agree one evening to try cooking for each other. It sounds lovely and they shake on it. Jo goes to bed imagining alternate nights, a proper rota, dinner on the table every evening. Lee goes to bed imagining a couple of shared meals a week when it suits. Both are pleased. They have agreed to try something, and neither knows what.`,
          `So they pin it down before the first saucepan comes out. For two weeks, Jo cooks on Mondays and Lee cooks on Wednesdays. Whoever cooks does the shopping for that meal; the other one clears up. Every other evening stays separate, as now. That is a plan with tasks and timing in it, rather than a warm intention each of them could read differently. It still needs two more things: an ending, and a look back.`,
        ],
      },
      {
        title: 'The free trial that renews itself',
        paragraphs: [
          `Everyone has signed up for a free trial that quietly turned into a paid subscription. The trial was genuinely free; the trap was the default. Unless you remembered to cancel on exactly the right day, it rolled over, and your silence was counted as a yes to paying. The well-designed version does the opposite: it simply stops at the end of the trial, and if you want to continue, you say so. The difference between the two is not the trial. It is what happens when nobody does anything.`,
          `Make the dinner trial the kind that stops. Jo and Lee agree to review on the Sunday after the second Wednesday, and they agree what the review is for: whether the dinner fitted each person's schedule, whether the shopping and the clearing up felt manageable, and whether anything about cost needs discussing. Those are the needs the arrangement was meant to serve, so they are what the review should examine. A trial is not a test one person passes by never complaining. And they agree the default: the arrangement ends after two weeks unless both of them explicitly extend or replace it. If no new agreement is reached, each goes back to their own meals. Nobody has to remember to cancel, and nobody's quiet gets counted as consent.`,
        ],
      },
      {
        title: 'Choose what the review will examine',
        paragraphs: [
          `Sunday comes. Jo says that shopping on Monday after work pushed dinner too late to enjoy. Lee liked the shared meals but found the Wednesday clean-up rushed before an evening class. They look at options: buying the Monday ingredients at the weekend, moving the second evening to Thursday. Neither change comes into force because one of them suggested it.`,
          `They check whether the revised jobs fit both schedules and agree a second limited trial on those terms, with its own review date. They could just as legitimately have gone back to separate meals. The useful outcome is a decision informed by two weeks of actual evidence, including a real option to stop, which is exactly what a trial is for.`,
        ],
      },
      {
        title: 'Change the plan through another agreement',
        paragraphs: [
          `Arrangements turn permanent by accident because stopping feels like a statement and continuing feels like nothing. The person who is quietly unhappy does not want to be the one to end it, so the trial renews itself month after month on nobody's decision. Writing the default as stops unless both extend removes that burden: nobody has to be the one who cancels, because ending is what happens when no one acts. Reviewability keeps a temporary yes from hardening into a permanent obligation. It does not promise the arrangement will suit you both; it just makes sure you find out.`,
          `Two habits. Before any let's-try-it begins, write the four lines: who does what, when it ends, what the review will look at, and what happens if nobody agrees to carry on. And at the review, treat every proposed change as a new agreement that needs a new yes from everyone it affects, including the option of going back to how things were.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A dinner trial with a defined end',
        alt: 'Two housemates agree a two-week dinner trial, review the workload, and continue only by mutual agreement.',
        caption: `Read the last box first and notice which way the default points: without an explicit yes from both, the arrangement ends and each cooks for themselves. That is the free trial that stops rather than the one that renews. Then read back to the first box and see that the two-week limit was written in from the start. Fictional two-week trial; the length is illustrative, not recommended.`,
        items: [
          { label: 'Agree tasks', detail: 'Jo: Mondays. Lee: Wednesdays. Cook shops; the other clears. Two weeks only.' },
          { label: 'Notice the fit', detail: 'Record timing, shopping, cleanup, and cost concerns.' },
          { label: 'Review', detail: 'Sunday after the second Wednesday: what worked, and what needs changing?' },
          { label: 'Choose explicitly', detail: 'Both agree an extension or revision; otherwise each arranges their own meals.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper and a calendar'],
      steps: [
        `Invent a temporary arrangement for sharing a hobby workspace and write who does what, plus the dates the trial starts and ends. Putting the end date on the calendar before anything starts is the whole difference between a trial and a drift.`,
        `Choose two observable things the review will look at, such as clashes over access and clean-up left unfinished. Observable means both people would agree on whether it happened.`,
        `Add a review date and write the default if no extension is agreed, in plain words: the arrangement ends and the space goes back to how it was. Check that stopping is safe, with no essential task left uncovered.`,
        `Rehearse the review alone with one fictional success and one problem, and draft a revision that still needs both people's yes. If your revision takes effect because one person proposed it, rewrite it as a proposal.`,
      ],
      notice: `Your trial has a visible end, evidence the review can actually look at, and a clear default that does not depend on anyone remembering to cancel. Silence ends it; only a yes from both continues it.`,
      troubleshooting: `If stopping would leave an essential task uncovered, agree how that task gets handled before the trial begins, not at the review. If your default reads continues unless someone objects, you have written the self-renewing subscription; flip it.`,
    },
    recall: {
      prompt: 'A group tries rotating meeting facilitation without defining its duration. What should they clarify before making it permanent?',
      hint: 'Specify responsibilities, a review, and the default if no extension is agreed.',
      answer: `The four lines they skipped at the start, before anything is called permanent. How long the rotation runs, in meetings or months, with an end date on the calendar. What the review will look at: whether meetings ran to time, whether facilitating landed on people who could not prepare, whether anyone found it a burden they did not raise. What the default is if no extension is agreed, which should be a return to the previous arrangement rather than the rotation quietly continuing. And who facilitates in the meantime if there is no new agreement. Then they ask everyone affected for an explicit yes, because the member who has hated facilitating but said nothing is exactly the person a self-renewing trial is designed to trap.`,
    },
    quiz: {
      question: 'A trial ends, and one participant has not agreed to an extension. What best respects the trial\'s terms?',
      options: [
        'Continue because no explicit objection was received.',
        'Extend for one more cycle to collect more experience before asking again.',
        'Use the agreed end-of-trial fallback and seek explicit agreement for any new arrangement.',
      ],
      correctIndex: 2,
      explanation: `The trial was the kind that stops, so when it ends without a yes from everyone, the agreed fallback applies and any new arrangement needs a fresh explicit agreement. Continuing because nobody objected is the subscription that renews on your silence. Extending for one more cycle to gather experience is the same thing with a better excuse; more observations do not authorise an extension nobody agreed to.`,
    },
    takeaway: `Make every let's-try-it the free trial that stops rather than the one that renews itself: before it begins, write who does what, when it ends, what the review will look at, and that it ends by default unless everyone explicitly agrees to continue, then treat each change at the review as a new agreement needing a new yes, so that nobody's silence is ever counted as consent.`,
    sourceNote: 'Value-creation and communication guidance inform this original dinner trial. Its duration is illustrative, not experimentally established.',
  },
]