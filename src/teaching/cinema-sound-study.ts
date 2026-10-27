import type { LessonGuide } from './types'

// Original scenes, diagrams, and exercises. Linked references stay on the parent lessons.
// Practice budgets and storyboard timings are design choices, not tested learning claims.
// Spot-checked 2026-10-25: Yale Sound, The Story of Movies, and Creative Commons FAQ.
// No film frames, third-party recordings, copied dialogue, or completed exports are supplied.
export const cinemaSoundStudyGuides: LessonGuide[] = [
  {
    id: 'cinema-045',
    outcome: `Compare the same spoken line recorded from two distances and choose the position that keeps the words clear without breath blasts or crackle, before touching any volume control.`,
    scene: 'A solo performer records a fictional lunch-packing line in a quiet kitchen with no cooking underway.',
    sections: [
      {
        title: 'The kitchen sounds larger than the voice',
        paragraphs: [
          `You film yourself packing a lunch bag in the kitchen. The phone sits across the room so the whole counter fits in the picture. Your line is, the spoon is in the side pocket. On playback the picture is fine, but the last words dissolve into a hollow tail. You turn the volume up. The words get louder, and so does the refrigerator hum behind them. The problem has not moved. It has only grown.`,
          `The temptation is to blame the phone. Resist it for now. The wide picture put the microphone a long way from your mouth, and a microphone records whatever reaches it. From across the room, your voice arrives mixed with the kitchen: its echoes, its appliances, its air. The phone recorded exactly what was there. The question is what you let reach it.`,
        ],
      },
      {
        title: 'Distance changes the mixture being captured',
        paragraphs: [
          `Think about photographing a friend from the far side of a park. In the picture they are a small figure, and the park is most of what you see. Enlarging that photo later does not help. The figure gets bigger, but so does the grass, and so does the blur. Walk closer and take the picture again. Now your friend fills the frame while the park becomes a backdrop. You did not improve the camera. You changed how much of the frame the subject took up.`,
          `Sound works the same way. Some of your voice travels straight from your mouth to the microphone; call that the direct sound. The rest bounces off walls and cupboards first and arrives late and smeared; call that the reflected sound. Move the microphone closer and the direct voice gets much stronger, while the reflections and the refrigerator stay about where they were. The balance between voice and room shifts in your favour. Turning up the recording later is enlarging the far photo. Everything gets louder together.`,
          `One complication. Many phones adjust their recording level automatically, so a far take and a near take can play back at similar loudness. Do not let that fool you. Loudness is not clarity. Listen for the consonants, the s of spoon and the t of pocket, and listen for the hollow tail after the last word. Those tell you the balance. The volume knob does not.`,
        ],
      },
      {
        title: 'Move one phone, not the whole kitchen',
        paragraphs: [
          `Run the test like a fair experiment. Keep your position, your delivery, and your ordinary voice the same. Change only where the phone is. Record the spoon line from about two metres away, then from about half a metre. Those are starting points, not ideal numbers; your kitchen will have its own. Keep the microphone openings uncovered. Set the phone a little off to the side of your mouth so your breath does not hit it directly.`,
          `Play both takes back quietly and compare three things: how crisp the consonants are, how long the room tail lasts, and whether any breath thumps the microphone. If the close take crackles on ordinary peaks, that is distortion from too much level. Back the phone off a hand's width, or lower the recording gain if your phone offers it. A take that is clear and slightly quieter beats a take that is loud and broken.`,
          `For the film itself, the answer is often a closer framing, or a voice recording planned separately from the wide picture. Both put the microphone where the photo analogy says it belongs.`,
        ],
      },
      {
        title: 'Shouting at the problem',
        paragraphs: [
          `The first mistake is fixing distance with effort. Shouting from across the room makes a louder voice and a louder set of reflections, and it changes the performance. The second is fixing it with the listening volume. Turning playback up enlarges the far photo; the hum and the tail grow with the words. The third is switching off the refrigerator or anything else that needs to stay on. Move the phone instead.`,
          `A fourth mistake is trusting the loudness over your ears. When automatic gain makes two takes sound equally loud, the word endings are where the difference hides.`,
          `Two habits. Before you adjust any level, ask where the microphone was and whether it could have been closer. And judge takes by consonants and tail, not by which one sounds bigger.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two positions for the same phone',
        alt: 'A speaker faces a nearby phone position and a farther alternative, with a wall beside the sound path.',
        caption: `Find the speaker first, then the near position: that is the close photo where the friend fills the frame. The far position gets the voice only after it has mixed with what bounces off the kitchen wall. Top view, not to scale; arrows show voice paths, not measured levels.`,
        items: [
          { label: 'Speaker', detail: 'Same spoon line; ordinary voice.', x: 20, y: 30, shape: 'person' },
          { label: 'Near position', detail: 'About half a metre; outside direct breath.', x: 55, y: 30, shape: 'object' },
          { label: 'Far position', detail: 'About two metres; same phone later.', x: 80, y: 72, shape: 'object' },
          { label: 'Kitchen wall', detail: 'Reflects some voice energy.', x: 20, y: 75, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }, { from: 3, to: 2 }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Phone recorder if available', 'Stable dry surface', 'Paper and pen'],
      steps: [
        `Choose a permitted quiet room with no private conversation or music, and say the spoon sentence yourself. Leave appliances in their normal safe state; the test is about moving the phone, not silencing the room.`,
        `Record the line from the farther position, then from the nearer one, with the phone supported and your voice at its ordinary level. Changing only the distance is what makes the comparison fair.`,
        `Replay both quietly and write down word clarity, room tail, and breath noise for each take. Do not reward the louder recording automatically; automatic gain can make the far take sound just as big.`,
        `Choose one position and one adjustment for next time. Without a recorder, draw the two positions and label the comparison as an untested plan.`,
      ],
      notice: `Your note names a difference between voice and room across the two takes, crisper consonants and a shorter tail in one of them, or it honestly records that this phone and this room produced no clear difference. Either result is useful; the point is that you judged by clarity, not by size.`,
      troubleshooting: `If automatic gain has made the two takes equally loud and you cannot hear a difference, compare the word endings and the moment after the last word, since that is where the room shows. If breath is thumping the microphone on spoon and pocket, angle the phone a little to the side of your mouth rather than whispering, which would change the performance.`,
    },
    recall: {
      prompt: 'A bedroom tutorial has a clear picture but hollow speech. What recording change would you test before raising the track level?',
      hint: 'Change what reaches the microphone, not just playback gain.',
      answer: `Move the microphone closer to the speaker and record the same delivery again, then compare consonants and room tail against the original. Raising the track level is enlarging the far photo: the voice and the bedroom's reflections grow together, so the hollowness stays. Closer distance changes the balance between them, which is the thing that was wrong.`,
    },
    quiz: {
      question: 'A distant line and nearby line have similar playback loudness, but the nearby words are clearer. What best explains this?',
      options: [
        'The nearby take must have used a higher recording quality setting.',
        'Automatic gain can equalize loudness while distance changes the voice-to-room balance.',
        'The performer must have spoken more loudly in the nearby take.',
      ],
      correctIndex: 1,
      explanation: `Automatic gain can bring two takes to similar loudness, but it cannot change what reached the microphone. Distance did that: the near take has more direct voice relative to the room, like the close photo with the friend filling the frame. A quality setting or a louder performance are things you would have to check separately; loudness alone does not point to either.`,
    },
    takeaway: 'Test distance and clarity before buying equipment or amplifying an unclear recording.',
    sourceNote: 'Yale supplies sound vocabulary; Blackmagic training covers recording and mixing. This kitchen test is original, with no guaranteed acoustic result.',
  },
  {
    id: 'cinema-046',
    outcome: `Plan a room-tone patch that matches the recording it fills, fitted into a pause with the setup unchanged, and recognize when a sound covering a word needs another take instead.`,
    scene: 'A fictional corridor exchange loses its ventilation hum at an edit.',
    sections: [
      {
        title: 'The corridor disappears between sentences',
        paragraphs: [
          `In an invented corridor scene you say, leave the parcel here, hesitate, then add, I will label it. The whole time, a ventilation hum sits quietly under your voice. In the edit you cut out the hesitation to tighten the pause. Play it back and something odd happens in the gap. The corridor vanishes. For a moment there is nothing at all, then the hum returns with the next sentence. Nobody is speaking in that gap, yet it is the most noticeable moment in the scene.`,
          `What you removed was not just your hesitation. You removed the background that was under it. The gap is now digital silence, which means no recorded signal whatsoever. A quiet building never sounds like that. There is always air, hum, distance. The ear notices the absence immediately, the way you notice a fridge stopping even when you never noticed it running.`,
        ],
      },
      {
        title: 'Keep the conditions that made the background',
        paragraphs: [
          `Think about patching a torn strip of wallpaper. A square of plain white paper over the hole is obvious from across the room. A scrap of different wallpaper from another room is obvious too, even if it is the same colour. The pattern and the fading do not match. What works is an offcut of the same paper, kept from when the wall was done. The patch disappears not because it is quiet but because it is the same.`,
          `Room tone is that offcut. It is the low-level sound of the place with your setup in position but nobody speaking or moving. Record it right after the dialogue, with the phone in the same spot, the door at the same angle, the same people in the corridor, and the ventilation running as it was. Each of those details shapes the reflections and the noise. Change one and you have a scrap from another room.`,
          `In a shared corridor, ask permission and leave the walkway clear; a private room can stand in for the exercise. Record twenty seconds or so. If someone walks through or a phone chimes, that is not tone. Wait for the next quiet opportunity rather than keeping the interruption.`,
        ],
      },
      {
        title: 'Patch the pause, not the damaged word',
        paragraphs: [
          `Say the pause you want is one second long. From the tone recording, pick a clean stretch, avoiding any small click or bump that would repeat and advertise itself. If your editor supports separate audio and fades, lay the patch between the two retained lines and soften both joins. Listen for a jump in level at either edge. Leave the breath that belongs to the delivery; a breath before I will label it is part of how the line was spoken, not a flaw.`,
          `Now a different problem. Suppose a trolley clatters over the word parcel. Tone cannot fix that. The word itself is damaged, like a stain on the picture hanging on the wall rather than a tear in the paper behind it. More wallpaper does nothing for the picture. You need another take of that line, or a fresh recording of it. If no editor is available, a paper edit can note both decisions, tone here and retake there, without pretending anything has been mixed.`,
        ],
      },
      {
        title: 'Patching with the wrong paper',
        paragraphs: [
          `The first mistake is filling the gap with nothing, which is the white paper square. Silence in an occupied building draws the ear straight to the join. The second is filling it with a quiet recording from somewhere else: a bedroom at home, a different day, the window open instead of closed. Quiet is not the same as matching. The outside noise and the room's own character differ, and the join shows.`,
          `The third mistake is reaching for tone or a longer fade when the real damage is inside a word. A chair scrape over the key word is a missing word. Background cannot bring it back; only a clean take can.`,
          `Two habits. Whenever you finish a dialogue setup, record twenty seconds of still tone before anyone moves. And when a join sounds wrong, ask first whether the fault is between the words or inside one.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Keep the hum through the pause',
        alt: 'Two parcel instructions surround a one-second pause filled with matching corridor hum.',
        caption: `Look at the middle box first: the one-second pause is the hole, and the matching corridor tone is the offcut of the same wallpaper laid into it. The lines either side keep their own breath and hum. A schematic edit, not proportional; only the pause is timed.`,
        items: [
          { label: 'Parcel line', detail: 'Leave the parcel here. Keep its breath and hum.' },
          { label: 'One-second pause', detail: 'Matching corridor tone replaces the removed hesitation.' },
          { label: 'Label line', detail: 'I will label it. The background continues.' },
        ],
      },
      {
        type: 'spatial',
        title: 'Do not move the tone setup',
        alt: 'Speaker, phone, door, and ventilation remain unchanged between dialogue and tone.',
        caption: `Check each of the four items is exactly where it was for the dialogue: speaker, phone, door, ventilation. Move any one and the tone becomes paper from another room. Top view, not to scale; keep the walkway clear.`,
        items: [
          { label: 'Speaker', detail: 'Remain still for tone.', x: 22, y: 28, shape: 'person' },
          { label: 'Supported phone', detail: 'Same position and settings.', x: 70, y: 28, shape: 'object' },
          { label: 'Door', detail: 'Keep its recorded position.', x: 22, y: 74, shape: 'box' },
          { label: 'Ventilation', detail: 'Leave necessary equipment alone.', x: 70, y: 74, shape: 'box' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Optional phone recorder', 'Permitted quiet space', 'Paper'],
      steps: [
        `Record both parcel lines yourself with a pause between them, keeping other people and their conversations out of the recording. The pause is where the patch will go, so leave it a little long.`,
        `Without moving the phone or changing anything in the room, capture about twenty seconds of still background straight afterwards. That is the offcut of the same wallpaper; listen back at a low, comfortable volume.`,
        `Mark a clean stretch of the tone and any bumps or clicks to avoid, then sketch the two speech segments with the tone patch drawn between them.`,
        `If an editor is available, test the patch on a copy with a soft fade at each join. Otherwise finish the paper edit and label it planned, not repaired.`,
      ],
      notice: `The planned or tested patch carries the same corridor through the pause, so the gap sounds like the room continuing rather than the room switching off or turning into a different room. If you tested it, the joins pass without a jump in level or a repeated click.`,
      troubleshooting: `If a repeated click gives the patch away, you have looped a stretch with a bump in it; choose another clean section of the same tone. If a noise sits over a word rather than between words, stop patching, because no amount of matching wallpaper fixes a stained picture. Use another take of that line or record it again.`,
    },
    recall: {
      prompt: 'A bedroom line was recorded with the window closed, but its quiet replacement pause comes from an open-window recording. Why might the join remain obvious?',
      hint: 'Compare the recording conditions, not whether both files lack speech.',
      answer: `Because the open window changes what the room sounds like: more outside noise and a different background character, even though neither file has speech in it. That is a scrap of wallpaper from another room, quiet but not matching. Record tone with the window closed and the setup as it was for the line, or choose a take whose conditions already match.`,
    },
    quiz: {
      question: 'A chair scrape overlaps the word that explains where the parcel belongs. Which repair addresses that problem?',
      options: ['Extend the surrounding room tone beneath the word.', 'Lengthen the crossfade into the noisy word.', 'Choose a clean take or record the affected line again.'],
      correctIndex: 2,
      explanation: `The scrape sits on the word itself, so the word is the damaged thing, like a stain on the picture rather than a tear in the wallpaper behind it. Room tone and longer fades only smooth the background between words; neither can restore a word that cannot be heard. A clean take or a fresh recording of the line is the only repair that brings the word back.`,
    },
    takeaway: 'Matching tone fills a pause; it cannot restore a word hidden by another sound.',
    sourceNote: 'Blackmagic Fairlight training is the technical reference. The corridor, pause, and patch are original examples.',
  },
  {
    id: 'cinema-047',
    outcome: `Plan an ambience layer by the job it does for the space, keep it under the visible action, and only use a real recording that is safe, permitted, and free of private speech or music.`,
    scene: 'An imagined seated bus passenger folds a paper route map while different background layers compete for attention.',
    sections: [
      {
        title: 'Which part makes this a bus interior?',
        paragraphs: [
          `Picture a shot of your own hands folding a homemade route map while you sit on a bus. Three sounds are in play. The paper rustles close to the camera as you fold. A low, steady rumble runs under everything. Now and then the bus body rattles over a bump. Play the shot with the paper turned up and the rest turned down, and you have a close-up of a map in no particular place. Play it with the rumble and rattle present, and you are on a bus.`,
          `The three sounds do different jobs even when one microphone catches them all together. The fold describes your action. The rumble describes the space. The rattle says the space is moving. Choosing ambience starts by asking what the scene needs the viewer to understand about where they are. Then you give that job to the right sound.`,
        ],
      },
      {
        title: 'Background can carry unwanted information',
        paragraphs: [
          `Think about a painted backdrop on a theatre stage. It shows a street, and the whole audience knows where the scene is set without anyone saying so. It stays there the whole scene, steady and unremarkable. Nobody expects to read the shop signs. Once in a while a stagehand dressed as a passer-by crosses behind the actors, and the street feels alive. In front of all that, the actor does the thing the scene is about. The backdrop never competes with it.`,
          `Ambience is the backdrop: the surrounding sound chosen for the scene. Room tone is a near cousin with a narrower job, matching one recording setup across edits, and the two names get mixed in everyday use. Label a recording by what is in it and where it belongs. The rattle is the passer-by, occasional and placed between the important moments. The fold is the actor's business, and the backdrop must leave room for it.`,
          `A painted backdrop cannot accidentally include a stranger's face. A recording can. A real bus recording may carry someone's conversation, music from a phone, an announcement naming the route, or a horn that jumps out of the mix. Sounding authentic does not make that material usable. Check what the backdrop contains before you hang it.`,
        ],
      },
      {
        title: 'Design the layer before seeking a recording',
        paragraphs: [
          `Plan the sound on paper first. For this imagined shot: quiet vehicle rumble under the whole thing, one restrained rattle placed between the fold and the moment the map goes still, and the paper fold aligned with the hands as they move. Write beside each sound whether it is foreground or background, and whether it is continuous or occasional. That is the whole design. It is a plan, not a claim that any audio exists yet.`,
          `No bus trip is needed. The fold you can record at home with your own map and a phone, gently, since a loud rustle would fight the backdrop. The rumble and rattle stay as written placeholders unless you already have a recording made from a seated, permitted, safe position, with no private speech or music in it and nobody distracted while driving. If the conditions are not there, the placeholder is the honest answer.`,
        ],
      },
      {
        title: 'Hanging the wrong backdrop',
        paragraphs: [
          `The first mistake is making every layer demand attention, which is a stage where the backdrop, the passer-by, and the actor all shout at once. Keep one background and the main action. The second is treating a nearer sound as more descriptive of place. The page turn is nearer than the fan, but the fan is the room. Nearness makes a sound an event, not a setting.`,
          `The third mistake is going out to get a louder or more authentic recording at the cost of safety or privacy: standing near traffic, recording strangers, filling the plan at any price. A plan with an unrecorded layer is complete. An unsafe recording is not.`,
          `Two habits. For every sound in a scene, write its job, foreground or background and continuous or occasional, before deciding how loud it should be. And treat any real ambience recording as unusable until you have checked it for speech, music, and sudden peaks.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'layers',
        title: 'A map fold inside an imagined bus',
        alt: 'Foreground map fold, occasional body rattle, and continuous vehicle rumble form three layers.',
        caption: `Read the three rows from the top down as actor, passer-by, backdrop: the fold is the business the scene is about, the rattle crosses occasionally, and the rumble stays steady underneath. An original plan, not supplied audio; the order shows foreground to background, not measured loudness.`,
        items: [
          { label: 'Map fold', detail: 'Foreground action; align with the hands.' },
          { label: 'Body rattle', detail: 'Occasional space cue between important actions.' },
          { label: 'Vehicle rumble', detail: 'Continuous ambience; keep the fold intelligible.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper map drawn by you', 'Pen', 'Optional phone recorder at home'],
      steps: [
        `Draw a fictional bus map with no real addresses and write the shot in one line: seated hands fold it, then hold it still. A written shot tells you which moment the sounds have to serve.`,
        `List the paper fold, the vehicle rumble, and the rattle, and mark each as foreground or background and as continuous or occasional. That is the actor, backdrop, passer-by sorting, and it decides prominence before you touch a level.`,
        `Record only your gentle paper fold at home if that suits you. Keep the bus sounds as written placeholders unless a safe, permitted personal recording already exists; the exercise does not need a bus.`,
        `Place the layers on a paper timeline, cross out anything that contains private speech, music, or a distracting peak, and label every unrecorded layer clearly so the plan never pretends to be a mix.`,
      ],
      notice: `The plan separates the visible action from the space around it, and it is honest about which sounds you actually have. Someone reading it could tell the backdrop from the actor's business, and could tell a recording from a placeholder, without asking you.`,
      troubleshooting: `If every layer seems to demand attention, the stage is too crowded; keep one background and the main action and drop the rest from the plan. If the plan has gaps you are tempted to fill with a quick recording near traffic or among strangers, leave the gap labelled instead. An unsafe or private recording is worse than an empty row.`,
    },
    recall: {
      prompt: 'In a park sketch, a nearby zip and distant leaves are available as your own safe recordings. What job would you give each beneath a bag-opening shot?',
      hint: 'Separate the visible event from the surrounding place.',
      answer: `The zip is the actor's business: align it with the bag opening so it reads as that event. The leaves are the backdrop: run them quietly and steadily as the park, low enough that the zip stays clear. Before using either, check the leaves recording for captured speech, and check that the leaves do not mask the action they are meant to sit behind.`,
    },
    quiz: {
      question: 'Two permitted room recordings are available: steady fan sound and intermittent page turns. Which better supports a continuous background under a reading scene?',
      options: ['The fan, if it matches the space and does not mask the main sound.', 'The pages, because a nearer sound always describes more space.', 'Both at equal prominence, because both were present during recording.'],
      correctIndex: 0,
      explanation: `The steady fan is the painted backdrop: it describes the room and can run under the whole scene without competing, as long as it matches the space and leaves the main sound clear. Page turns are events, the passer-by crossing now and then, and nearness makes them more noticeable, not more descriptive of place. Being present at the recording does not earn a sound equal prominence in the scene.`,
    },
    takeaway: 'Choose ambience for its spatial job, and distinguish a planned sound from a safe usable recording.',
    sourceNote: 'Yale supports sound perspective; GOV.UK supplies general consent principles, not transport recording law. The bus sound plan is invented.',
  },
  {
    id: 'cinema-048',
    outcome: `Mark the phrase starts, the pause, and the phrase endings a replacement line must hit, rehearse it to those landmarks, and rerecord rather than sliding a line whose ending drifts.`,
    scene: 'A performer rehearses an original pretend telephone conversation on a veranda using a cardboard handset.',
    sections: [
      {
        title: 'The words match but the mouth does not',
        paragraphs: [
          `On a veranda you film a pretend phone call with a cardboard handset. Your line is, I found the address. Wait, the number is missing. Between the two sentences you pause to peer at a fictional card. A gust of wind ruins the sound, so you go indoors and record the words again, cleanly. You lay the new recording under the picture. It starts on time. But by Wait, your filmed mouth is still closed. The voice has run ahead of the face.`,
          `You said the same words. You did not give the same performance. The indoor take had a shorter pause and a slightly quicker delivery, and the picture does not care how clean the sound is. It only cares whether the mouth and the voice agree. Nothing private is at stake here: no real call, no real address, nobody on the other end. Just a face and a voice that have to be the same event.`,
        ],
      },
      {
        title: 'Recording time and screen time are different questions',
        paragraphs: [
          `Think about a watch that runs fast. At noon you set it to the right time, and at noon it is correct. By evening it is ten minutes ahead. Setting it again fixes the moment you set it and nothing else. The fault is not where it started but how fast it goes. You can slide the start all you like; the drift comes back by the end of the day.`,
          `A replacement line is the watch. Sound that lines up with visible events, lips moving or a handset set down, is called synchronous. The sound recorded along with the picture is production sound, and it gives you the timing reference. Dialogue recorded afterwards and fitted to the picture is replacement dialogue. It can be perfectly synchronous too, provided it keeps pace. Matching the first word is setting the watch at noon. Matching the pause, the breaths, and the ending is keeping the right speed.`,
          `There is a second kind of agreement, the sound of the space. A close, dead indoor voice laid over an open veranda feels pasted on, like a face cut from one photograph into another with different light. Clean is useful. Clean alone does not make a line belong to the moment it is attached to.`,
        ],
      },
      {
        title: 'Use the pause as a landmark',
        paragraphs: [
          `Watch the original take and mark three landmarks: the first phrase, I found the address; the silent look at the card, mouth closed; and the second phrase, Wait, the number is missing. Those are your noon, your midpoint check, and your evening. Before recording the replacement, rehearse it against the picture with that same gap until your delivery lands on each landmark. Listen at a comfortable level. Replaying the gusty take loudly tells you nothing new.`,
          `With an editor that supports separate audio, align a copy of the replacement on the first phrase. Then check the start and the end of each phrase against the mouth. If the ending drifts, do not slide the whole line to split the difference; that breaks the first word to rescue the last. Rerecord at the original pace instead. An offscreen line has more freedom, since no mouth is visible, but it still needs believable delivery and a believable space. With no alignment tools, hand over timing notes, not a claim that the line is in sync.`,
        ],
      },
      {
        title: 'Resetting the watch',
        paragraphs: [
          `The first mistake is the one from the opening: judging the replacement by its cleanliness and laying it in on the strength of a matching first word. The second is fixing a drifting ending by shifting the whole track, which only moves the mismatch to the beginning. The third is stretching a sentence to fit. That changes the voice and still leaves the internal pauses in the wrong places.`,
          `A fourth mistake is in the naming. A line recorded on another day that fits the lips after careful alignment is replacement dialogue, and it is synchronous. When it was recorded and whether it matches the picture are two separate questions with two separate answers.`,
          `Two habits. Before recording any replacement, mark the landmarks in the original performance and rehearse to them. And when the end of a phrase drifts, treat it as a pace problem and record again, never as an offset problem to be slid.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Three landmarks for the replacement',
        alt: 'The first address phrase precedes a silent card inspection, then the missing-number phrase begins.',
        caption: `Find the middle box first: the card inspection is the midpoint check on the watch, and the replacement must hold that silence as long as the picture does. Then check the ending of the third box, not only the start of the first. A timing map of your own performance; the boxes have no time scale, so durations must come from your take.`,
        items: [
          { label: 'First phrase', detail: 'I found the address. Match visible speech.' },
          { label: 'Card inspection', detail: 'Mouth closed; preserve the pause.' },
          { label: 'Second phrase', detail: 'Wait, the number is missing. Check its ending too.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Optional phone camera and recorder', 'Cardboard handset', 'Fictional address card', 'Paper'],
      steps: [
        `In a permitted private space, film yourself delivering the two phrases with a silent look at the card between them. Your own performance is the reference the replacement has to match, so give it a real pause.`,
        `Replay softly and mark the phrase starts, the card pause, and the phrase endings, and keep the original recording unchanged. Those marks are the noon, midpoint, and evening you will check against.`,
        `Rehearse the replacement against the picture until the gap feels the same, then record it separately. Compare its gap and delivery to your marks, and align a copy only if an existing editor supports separate audio.`,
        `Write down one mismatch you found and how you would correct it. Without a phone or editor, draw the three landmarks and label the result a replacement plan, not an aligned line.`,
      ],
      notice: `You can say whether the replacement holds the pause and lands its ending, not just whether it sounds cleaner than the gusty original. If it drifted, you know where, and you know the fix is another take at the original pace rather than a nudge of the whole track.`,
      troubleshooting: `If the beginning matches but the ending does not, the watch is running fast: record the phrase again at the original pace instead of stretching it or sliding it. If the replacement sounds pasted on even when the timing is right, the space is wrong, so try recording it somewhere closer to the original acoustics or a little further from the microphone.`,
    },
    recall: {
      prompt: 'A close shot shows someone saying two words while tying a parcel. The replacement fits the first word but ends after the mouth closes. What would you change?',
      hint: 'One offset moves everything equally; the mismatch changes within the phrase.',
      answer: `Rerecord the line at the quicker pace the filmed mouth shows, rehearsing against the picture so the second word ends as the mouth closes. Sliding the whole track earlier would pull the already matching first word out of place, like resetting a fast watch: the start is fixed for a moment and the drift returns by the end. The fault is pace, so the fix is another performance.`,
    },
    quiz: {
      question: 'A later recording matches lip movements after careful alignment. How should it be described?',
      options: ['Production sound because it matches the picture.', 'Nonsynchronous because it was recorded on another day.', 'Replacement dialogue that is synchronous in the finished alignment.'],
      correctIndex: 2,
      explanation: `Replacement says when the line was recorded, afterwards and apart from the picture; synchronous says how it sits against the image now, in step with the lips. Both are true of this line at once. Production sound would mean it was captured with the picture, which it was not, and recording on another day does not make a line nonsynchronous if it keeps pace with the mouth.`,
    },
    takeaway: 'Replacement dialogue must fit the performance, timing, and space, not merely repeat its words.',
    sourceNote: 'Yale distinguishes synchronization from postsynchronization; Blackmagic covers editing tools. The pretend call is original and no aligned media is supplied.',
  },
  {
    id: 'cinema-049',
    outcome: `Perform a gentle, repeatable footstep with a hand-held shoe, compare onset and decay on two surfaces with the phone fixed, and pick the texture that fits the careful steps on screen.`,
    scene: 'A hand-operated soft-soled shoe tests two surfaces for a hallway footstep insert.',
    sections: [
      {
        title: 'A step can be performed without walking the corridor',
        paragraphs: [
          `Your hallway insert shows two careful steps approaching a dropped fabric glove. The picture is fine. The sound is not: somebody's zipper caught the microphone right over the second step. Reshooting the whole hallway for two footfalls is a lot of trouble. You do not need to. The steps can be made again, separately, and laid under the picture. The job is small: two soft contacts that match a careful person.`,
          `Making everyday sounds to fit what is on screen is called Foley, and it is more often done with hands than feet. For this test, hold a clean soft-soled shoe and set it down on a low, stable surface near the phone. Nobody has to stomp down a corridor, balance on one leg, or wake a neighbour. You are matching a small action, not producing the loudest impact you can.`,
        ],
      },
      {
        title: 'Surface and contact shape the event',
        paragraphs: [
          `Think about dropping your keys. Drop them on the kitchen table and you get a sharp clatter that rings for a moment. Drop the same keys from the same height onto a folded towel and you get a dull, short thud. Same keys, same hand, same drop. The surface changed the start of the sound and how long it lingered. You did not need to go out to the car park to learn what keys landing sounds like. The kitchen told you.`,
          `A sound has an onset, the moment it begins, and a decay, the way it dies away. The bare board gives the shoe a sharper onset, like the table. Folded fabric softens it and shortens the decay, like the towel. How hard you press and whether you roll heel to toe change the texture as well. One more thing changes the sound and has nothing to do with the step: how far away the microphone is. Move the phone and you add or remove room. So keep the phone fixed while you swap surfaces, or you will not know which change you are hearing.`,
          `Louder is not the aim. A cautious person approaching a glove does not land hard, and the heaviest take is usually the least convincing one.`,
        ],
      },
      {
        title: 'Choose a sound for this glove search',
        paragraphs: [
          `Record three gentle contacts on the board, then three on the fabric, with the phone exactly where it was. Leave a second or two of quiet before and after each contact. Those margins are what let an editor slide the sound into place without chopping off its decay. Play the six back quietly and listen for two things: how the sound starts, and how it ends.`,
          `Choose by the picture. The hallway in the shot is hard floor, so the board version probably fits, even if the fabric version is nicer on its own. Weight matters too: pick the contact whose pressure looks like the step you filmed. If you can align it, put the onset at the frame where the foot meets the floor and watch the result. Compare, do not assume. If no recording or alignment tool is available, write a cue sheet with the two steps and the texture you chose.`,
        ],
      },
      {
        title: 'Testing two things at once',
        paragraphs: [
          `The first mistake is moving the phone between surfaces and crediting the surface for the difference. That is dropping the keys on the towel while also stepping back from the table. The cleanest next comparison repeats both surfaces with the phone and the force held the same. Making the two takes equally loud afterwards does not rescue the test. It hides the level difference and leaves the room difference in.`,
          `The second mistake is keeping the louder take because the contact is easier to hear. The third is choosing a texture you like over a texture that matches: a cloth landing in a hard hallway is pleasant and wrong. And a sound that begins before the visible contact is a timing fault, not a texture fault. Find the contact frame and the onset, then move the effect.`,
          `Two habits. Change one thing at a time, surface or distance or force, never two together. And choose a performed sound for the picture it has to sit under, not for how it sounds alone.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'One shoe, two landing surfaces',
        alt: 'A shoe lands on board or fabric while the phone stays fixed beside it.',
        caption: `Start with the hand-held shoe and the landing area beneath it, then look at the surface alternatives that swap into that same spot: the table and the towel under the same keys. The phone microphone stays put through both. Schematic top view; arrows show gentle placement, not walking.`,
        items: [
          { label: 'Hand-held shoe', detail: 'Clean soft sole; gentle heel-to-toe contact.', x: 24, y: 25, shape: 'object' },
          { label: 'Landing area', detail: 'Low stable support; keep contact here.', x: 24, y: 72, shape: 'box' },
          { label: 'Surface alternatives', detail: 'Bare board, then folded fabric in the same place.', x: 73, y: 72, shape: 'object' },
          { label: 'Phone microphone', detail: 'Same supported position for both versions.', x: 73, y: 25, shape: 'object' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 2, to: 1 }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Clean soft-soled shoe', 'Stable board and folded fabric', 'Optional phone recorder', 'Paper'],
      steps: [
        `Set the board low and stable in a space you have permission to use, and support the phone beside it with the microphone unobstructed. The phone does not move again, so that only the surface changes.`,
        `With your hands, make three gentle shoe contacts on the board with quiet gaps between them, then swap in the folded fabric and repeat. The quiet gaps are the margins an editor needs around each sound.`,
        `Listen back quietly for how each contact starts and how it fades, then choose a take for the careful steps toward the glove and say whether its surface fits the hard hallway in the picture.`,
        `Mark the chosen contacts on a two-step cue sheet. Without a recorder, compare the live gentle sounds by ear and label the alignment as still untested.`,
      ],
      notice: `You can hear two clearly different textures, table and towel, and you have a reason for choosing one that is about the picture rather than about volume. If a surface sounded nicer but wrong for a hard floor, you noticed that too.`,
      troubleshooting: `If handling noise dominates, your hand on the phone is louder than the shoe; leave the phone on its support and move only the shoe. If the two surfaces sound the same, check that you did not also change pressure or distance, and reduce force if the contacts feel uncomfortable in your hand or ear.`,
    },
    recall: {
      prompt: 'A filmed sleeve brushes a cardboard box, but your added cloth sound begins before the sleeve touches it. What would you inspect and adjust?',
      hint: 'Match the start of the sound to the start of the visible contact.',
      answer: `Find the frame where the sleeve first touches the box and find the onset of the cloth sound, then move the effect so the onset lands on that frame, if your tools allow. That is a timing fault, separate from texture. Once it is in place, check the texture too: does a soft cloth brush fit a sleeve on cardboard, or does the box need a drier, papery edge, the way the towel and the table sound different under the same keys?`,
    },
    quiz: {
      question: 'Two gentle shoe takes have different textures, but you also moved the phone between them. What is the cleanest next comparison?',
      options: ['Repeat both surfaces with phone position and contact force held similar.', 'Normalize their playback levels and attribute every difference to the surface.', 'Keep the louder take because its contact is easier to hear.'],
      correctIndex: 0,
      explanation: `Moving the phone changed how much room is in each take, so distance is a competing explanation for the texture difference, like dropping the keys on the towel while also stepping back. Repeating both surfaces with the phone and the force held the same leaves only the surface to explain what you hear. Equalising loudness hides the level gap but keeps the room difference, and the louder take is not the better one.`,
    },
    takeaway: 'Perform quiet, repeatable effects and choose their timing and texture for the image.',
    sourceNote: 'Yale and Blackmagic support the sound concepts. This original footstep drill is not a professional Foley specification.',
  },
  {
    id: 'cinema-050',
    outcome: `Sort a sound by three separate questions, is it in the story world, is its source on screen, and how was it recorded, so an unseen packet stays in the park and a score stays outside.`,
    scene: 'A park sketch holds on a reader while a companion rustles an unseen paper packet.',
    sections: [
      {
        title: 'An unseen packet still belongs to the park',
        paragraphs: [
          `Picture a park scene of your own. A reader sits studying a homemade map. Beside them, just outside the frame, a companion gently rustles a paper packet. The reader glances toward the sound. A moment later the camera pulls wider and there is the companion, packet in hand. The rustle was never a mystery to the reader. It only looked like one to the camera, which happened to be pointing somewhere else.`,
          `Being outside the picture did not put the packet outside the story. The sound told us something was nearby before the picture confirmed it, and the reader's glance made the connection for us. For practice, a private room can stand in for the park and your own hands can be the companion's. No strangers need recording.`,
        ],
      },
      {
        title: 'Ask where the finished scene places the source',
        paragraphs: [
          `Think about a stage play. A telephone rings offstage. Nobody in the audience can see it, yet nobody is confused. It is the phone in the characters' house, and an actor will go and answer it. Meanwhile, in the pit below the stage, an orchestra plays. The characters never hear a note of it. The music is for the audience alone. And nobody asks whether the ring was a real telephone or a stage manager pressing a button, because that was never the question that mattered.`,
          `Those are three separate questions. Sound presented as belonging to the story world is diegetic: the offstage phone, the packet. Sound presented from outside that world, such as a score addressing the audience, is nondiegetic: the pit orchestra. Whether the source is visible is a different question entirely. The packet is diegetic and offscreen at the same time, just as the phone is in the house and out of sight.`,
          `How the sound was recorded is a third question. A rustle recorded the next day in your kitchen can still stand for the companion's packet in the park. A rhythm recorded on location can later be used as a score nobody in the story hears. Classification follows the relationship the finished scene sets up, not the date or the place of recording.`,
        ],
      },
      {
        title: 'Make the source relationship legible',
        paragraphs: [
          `Plan three versions of the same invented moment. In the first, the companion is in frame, rustling the packet, and nothing is hidden. In the second, the companion is outside the frame, the reader glances toward the sound, and a later wider shot reveals the packet. In the third, replace the rustle with an original abstract rhythm that continues across several different places with no object that could be making it: a score.`,
          `The third version needs that context to read as a score. A sound with no visible source is not automatically outside the story; the second version proves it. If your three plans leave a sound ambiguous, say so in the plan. A reveal can also change a viewer's first reading, which is exactly what the wider shot does in version two. You are testing that possibility in your own scene, not stating how every viewer or any named filmmaker must hear it.`,
        ],
      },
      {
        title: 'Mistaking the frame edge for the story edge',
        paragraphs: [
          `The first mistake is treating anything offscreen as a score. That is hearing the offstage telephone and assuming the orchestra is ringing. Ask which object or event in the story the sound represents; if there is one, it is diegetic, seen or not. The second is treating any sound recorded later as external. A kitchen timer beeped in afterwards, heard before a cut reveals it on a shelf, is offscreen diegetic sound that then acquires a visible source. Recording it later moved nothing.`,
          `The third mistake runs the other way: assuming a tune that a character switches off at a radio must have been recorded live on set. The switch-off tells you the radio is the story source. It says nothing about how the soundtrack was made.`,
          `Two habits. For every sound, answer the three questions separately: in the story or outside it, source seen or unseen, recorded when and how. And when you want a sound to read as a score, give it the context that rules out a nearby object.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The camera misses the packet, not its sound',
        alt: 'The camera faces the reader; the companion and packet remain outside its tight view.',
        caption: `Follow the two arrows into the reader: the view arrow from the camera, and the sound arrow from the packet the camera cannot see. The packet is the offstage telephone, in the house but out of sight. Top view, not to scale.`,
        items: [
          { label: 'Reader', detail: 'Looks toward the packet rustle.', x: 25, y: 25, shape: 'person' },
          { label: 'Camera', detail: 'Tight view of reader only.', x: 25, y: 76, shape: 'camera' },
          { label: 'Companion', detail: 'Outside the tight view; present in the story.', x: 75, y: 25, shape: 'person' },
          { label: 'Paper packet', detail: 'Gently rustled by the companion.', x: 75, y: 76, shape: 'object' },
        ],
        arrows: [{ from: 1, to: 0, label: 'view' }, { from: 3, to: 0, label: 'sound' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper packet', 'Scrap paper', 'Optional phone and consenting partner'],
      steps: [
        `Draw two frames: a tight one on the reader, and a wider one that reveals the packet. Use a private permitted space rather than recording strangers in a park; the exercise is about the drawings, not the location.`,
        `Label the rustle as inside the story in both frames, since the frame edge does not move the packet out of the park. If you record it, perform it gently yourself or with a partner who has agreed.`,
        `Draw a third version that uses an original rhythm as a score, and write down what context would tell a viewer it is the pit orchestra and not an unseen packet.`,
        `Compare the source labels across the three versions, marking visible or unseen separately from inside or outside the story. Keep the drawings as plans if no video or mixing tools are available.`,
      ],
      notice: `The unseen packet stays inside the story in your labels, and the score version needed something extra, continuing across places with no possible object, to read as outside it. A tighter frame alone never changed which side of the line a sound was on.`,
      troubleshooting: `If you find yourself labelling every added sound as external, you are using the recording question to answer the story question. Ask instead which object or event in the finished story the sound represents; if there is one, the sound is diegetic no matter when it was recorded or whether the camera saw it.`,
    },
    recall: {
      prompt: 'A kitchen scene includes a timer heard before a cut reveals it on a shelf. The beep was recorded later. How would you classify it, and why?',
      hint: 'Separate story location, visibility, and recording method.',
      answer: `Before the cut it is offscreen diegetic sound: the timer is in the kitchen of the story, like the offstage telephone, and we simply have not seen it yet. After the cut it has a visible source. Recording the beep later is the third, separate question and changes neither answer; the stage manager pressing a button does not move the phone out of the house.`,
    },
    quiz: {
      question: 'An unseen tune is followed by a shot of a character switching off a radio, and the tune stops. What is the strongest supported reading?',
      options: ['It is external score because its source was initially hidden.', 'The radio is presented as a diegetic source revealed after the tune begins.', 'It must be production sound recorded live during that shot.'],
      correctIndex: 1,
      explanation: `The character reaching for the radio and the tune stopping ties the music to an object in the story, so the scene presents the radio as a diegetic source that was offscreen until the reveal. Being hidden at first did not make it a score; the offstage phone was hidden too. And how the tune was recorded is a separate question the shot does not answer, so live production sound is not established.`,
    },
    takeaway: 'Story membership, visibility, and recording method are three different questions about sound.',
    sourceNote: 'Yale defines diegetic, offscreen, and postsynchronized sound. The packet scene is original; no referenced film dialogue or soundtrack is reproduced.',
  },
  {
    id: 'cinema-051',
    outcome: `Write a soundtrack rights note that checks composition and recording separately, records the exact license and intended use, and marks anything unverified as pending, not cleared.`,
    scene: 'A sewing montage compares original tapping with an uncleared online track.',
    sections: [
      {
        title: 'A track title is not a permission record',
        paragraphs: [
          `You are planning a short film of your hands sorting thread and folding fabric. You find a downloaded track whose rhythm fits the folding beautifully. Its page says free music, and that is all it says. Can you lay it under video? Trim it? Post the result? The page does not say. Nor does the fact that you can play it. Nor would a line of credit in your description. Free tells you the price of listening. It tells you nothing about what else you may do.`,
          `Before treating the track as part of your film, you need four things identified: the exact piece of music, the particular recording of it, who holds the rights to each, and the terms that cover the use you have in mind. Until then, the track is something you like, not something you can use.`,
        ],
      },
      {
        title: 'Composition and recording are separate checks',
        paragraphs: [
          `Think about a recipe and a cake. The recipe belongs to whoever wrote it. A cake baked from that recipe belongs to whoever baked it. If your friend bakes you a cake from a famous baker's recipe, your friend can give you the cake. Your friend cannot give you the recipe, and they certainly cannot give you the right to print it in a book. Two different things, two different owners. Getting one does not get you the other.`,
          `Music works the same way. The composition is the recipe: the underlying tune and words. The recording is the cake: one particular performance, captured. Rights in the two can belong to different people. A new recording of someone else's tune clears the cake and leaves the recipe untouched. So every track needs two checks, not one.`,
          `Licences come with their own small print. Under Creative Commons terms, synchronising music with moving images counts as an adaptation. A NoDerivatives licence does not permit sharing that adaptation without separate permission, even if you changed nothing in the audio. NonCommercial and ShareAlike conditions raise other questions about where and how the film can go. Read the actual licence and its version. A search filter that says free to use is not the licence.`,
        ],
      },
      {
        title: 'Keep a usable note beside the plan',
        paragraphs: [
          `For this first montage, the easiest honest route is no music, or a simple tapping pattern you invent and record yourself. Do not tap out a tune you remember from a film; a remembered recipe is still someone's recipe. For your own pattern, write down who made it, who performed it, when, and whether anyone else contributed. That is the whole rights note, and it is complete.`,
          `For any third-party track you consider later, keep the source, the licence and its version, the evidence of permission, the credit the licence requires, and any changes you plan to make. Where a fact is missing, write permission pending. Pending is a real entry; a guessed clearance is a liability. Remember too that permission granted inside one platform may not travel with the film to another. This is a screening method for catching gaps. It is not legal advice, and not a guarantee that every right has been cleared.`,
        ],
      },
      {
        title: 'Mistaking the cake for the recipe',
        paragraphs: [
          `The first mistake is reading free or royalty-free as a licence. Those words name a price, not permissions; keep the no-music or own-sound version until you have real terms. The second is believing that a correct credit substitutes for permission. In many licences credit is a condition on top of permission, and it does nothing on its own. The third is believing that leaving the audio unaltered keeps you clear of adaptation. Synchronising to video is the adaptation.`,
          `A fourth mistake is the friend's cover version. A new performance of a familiar film song gives you a recording to ask about, and still leaves the song itself to clear with whoever owns it.`,
          `Two habits. For every piece of music, check the composition and the recording as two separate items with two possible owners. And write pending for anything unverified, so your note never claims more than you know.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The sewing-film soundtrack note',
        alt: 'An original tapping pattern, its self-recorded performance, the private montage plan, and a creator credit form a rights record.',
        caption: `Read the first two boxes as recipe and cake: the composition is the pattern you invented, the recording is your own performance of it, each with its own entry. The last two record where it may be shared and who is credited. Entries for the original example only, not permission to use downloaded music; unchecked rights stay pending.`,
        items: [
          { label: 'Composition', detail: 'New tapping pattern; not a borrowed film tune.' },
          { label: 'Recording', detail: 'Your own performance; list any other contributor.' },
          { label: 'Intended use', detail: 'Sewing montage; decide where it may be shared.' },
          { label: 'Record and credit', detail: 'Creator, date, permissions, and changes kept together.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper', 'Optional phone recorder', 'A quiet safe tapping surface'],
      steps: [
        `Write down the intended film and audience: an original fabric-sorting exercise for private review. Then decide whether it needs music at all, since no music is the one option with nothing to clear.`,
        `Choose no music, or invent and softly record your own tapping pattern with no background music or private speech in the room. Inventing it is what makes both recipe and cake yours.`,
        `Make separate composition and recording entries, naming yourself only for the work you actually created and performed, and listing anyone else who contributed to either.`,
        `Add source, licence and version, intended distribution, changes, and credit fields for any future replacement track, and leave missing facts marked pending. A paper plan is sufficient; nothing needs exporting.`,
      ],
      notice: `Your note separates what you own or have checked from what still needs permission, and anyone reading it could tell the recipe from the cake and the cleared from the pending without asking you. The original-sound version is fully covered by a few lines.`,
      troubleshooting: `If a track's page says only free or royalty-free, do not fill in the licence field by inference; those words are a price, not terms. Mark it pending and keep the original-sound or no-music version in the plan. If you cannot find who owns the composition as well as the recording, the check is not finished, however clear the recording's terms look.`,
    },
    recall: {
      prompt: 'A friend records a new cover of a familiar film song and offers you the recording. What further issue remains before using it in a public short?',
      hint: 'A new performance does not make the underlying music new.',
      answer: `Your friend has baked you a cake from someone else's recipe. The recording is theirs to offer, and you still need their permission for its use in video, but the composition, the song itself, belongs to whoever wrote and publishes it, and your friend cannot clear that for you. Check the rights in the song as a separate item, and mark it pending until you have terms that cover a public short.`,
    },
    quiz: {
      question: 'A CC BY-ND track is credited correctly and left unaltered, but synchronized to your video. Does that license alone permit public sharing?',
      options: ['Yes, because no notes in the audio were changed.', 'Yes, provided the upload is not monetized.', 'No; CC treats synchronization as adaptation, so separate permission is needed for that sharing.'],
      correctIndex: 2,
      explanation: `Under Creative Commons terms, fixing music to moving images is itself an adaptation, so the NoDerivatives condition applies even though no note in the audio was touched. Correct credit satisfies the BY part and does nothing about ND, and not making money does not change the licence either. Sharing the synchronised result needs permission from the rights holder beyond what the licence grants.`,
    },
    takeaway: 'Check both music and recording rights; credit is a requirement in many licenses, not a substitute for permission.',
    sourceNote: 'The Creative Commons FAQ was spot-checked for synchronization, attribution, and license differences. The soundtrack note is original general guidance, not legal clearance.',
  },
  {
    id: 'cinema-052',
    outcome: `Protect the words a scene depends on by reducing the sound competing with them, and tell apart three different things: masked speech, overall loudness, and peaks that clip.`,
    scene: 'A packing-desk scene combines an original instruction, paper wrapping, and a quiet room background.',
    sections: [
      {
        title: 'The destination disappears under the paper',
        paragraphs: [
          `In a fictional packing scene, you say, the blue parcel stays here, while folding a sheet of wrapping paper. Blue parcel is the piece of information the viewer needs. On playback the paper crackles right across those two words. Nothing is painfully loud. The meter never touches its limit. The words are simply hard to catch. You turn the whole thing up and the crackle grows with the voice. The words are louder now and no easier to follow.`,
          `The volume control cannot help, because the problem is not how loud things are but what is happening at the same time. Before reaching for any level, decide which sound carries the scene at this moment. Here it is the line. In another scene it might be a small prop sound during a silent discovery. Whatever it is, that sound needs a less crowded moment.`,
        ],
      },
      {
        title: 'A clean meter does not guarantee clear words',
        paragraphs: [
          `Think about a toast at a dinner. Someone stands and taps a glass, and the first thing everyone does is put down their cutlery. Not because the clinking was loud, but because it would sit on top of the words. Nobody solves the problem by asking the speaker to shout. The clinking would just get matched by shouting, and a cheap microphone in the room would start to crackle. The fix is simple. The cutlery stops while the words happen.`,
          `Masking is the cutlery over the toast: one sound making another harder to hear because they overlap in time and in character. Clipping is the crackling microphone: a signal pushed past what the recording or the speaker can represent cleanly. Headroom is the space left below that limit for peaks. These are three different things. A mix can stay far from clipping and still bury the line. A perfectly clear voice can be driven into distortion by an overloaded combined mix. And peak level, the highest point, is not the same as how loud something seems.`,
        ],
      },
      {
        title: 'Give the important words a less crowded moment',
        paragraphs: [
          `Build the moment in order. Start with a clear take of the instruction at a comfortable listening level. Add the room background quietly, so the space exists without demanding attention. Then add the wrapping paper. If the sounds are on separate tracks, lower the paper during the two essential words, or move a suitable paper sound into the gap between phrases. That is the cutlery going down.`,
          `If everything was recorded together on one phone, you cannot pull the paper out afterwards. Change the staging instead: say the line, then fold. One extra take fixes what no amount of processing on a phone can. Check the result on the phone speaker and the headphones you already own, at the same comfortable volume as before, never louder to push through discomfort. Leave headroom for the combined peaks. If the film is going somewhere specific, follow that destination's published specification rather than guessing a universal loudness target. Whatever you change, judge it the same way: can you catch blue parcel at the volume you started with?`,
        ],
      },
      {
        title: 'Asking the speaker to shout',
        paragraphs: [
          `The first mistake is raising voice and background together. The relationship between them is unchanged, so the masking is unchanged, and you have spent headroom for nothing. The second is pushing the whole mix up toward its peak limit, which does the same thing with the added risk of clipping. The third is reading a clean meter as a clear mix. An unclipped soundtrack can still hide the quiet zipper clue under continuous music.`,
          `A fourth mistake is assuming dialogue is always the protected sound. Decide per moment. If the scene turns on a zip, the music puts its cutlery down for the zip.`,
          `Two habits. When something is hard to hear, ask what is competing with it before you ask how loud it is. And check every mix for two separate faults, masked words and clipped peaks, because passing one says nothing about the other.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'layers',
        title: 'Priority during the blue-parcel instruction',
        alt: 'The essential spoken instruction sits above wrapping paper and room background, with a check on their combined output.',
        caption: `Read from the top: the instruction sits first because it is the toast, and the wrapping paper beneath it is the cutlery that goes quiet while the words happen. The bottom row is where you check for both faults at once, masked words and clipped peaks. A schematic priority stack, not measured track levels.`,
        items: [
          { label: 'Instruction', detail: 'The blue parcel stays here. Preserve the identifying words.' },
          { label: 'Wrapping paper', detail: 'Lower during speech or perform between phrases.' },
          { label: 'Room background', detail: 'Maintain the space without demanding attention.' },
          { label: 'Combined output', detail: 'Check clarity and peaks together at comfortable volume.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Paper and a harmless parcel', 'Optional phone recorder', 'Pen'],
      steps: [
        `In a permitted quiet space, say the blue-parcel line in your own voice while gently folding paper, with no loud impacts. This is the masked version you will compare against.`,
        `Record a second version with the paper movement after the line, keeping your delivery and the phone position the same. Changing only the staging is what makes the comparison fair, and it is the cutlery going down.`,
        `Listen to both at one consistent, comfortable level and write which words are easier to identify, and whether any take distorts. Keeping the level fixed stops loudness from standing in for clarity.`,
        `If you have separate-track controls, test lowering the paper under the words on a copy. Otherwise keep the clearer staging, or draw a labelled mix plan without claiming an export exists.`,
      ],
      notice: `The version you chose protects the identifying words at the same listening volume you started with, so clarity came from removing competition rather than from turning anything up. You can also say, separately, whether any take clipped.`,
      troubleshooting: `If the paper still dominates even after the line, reduce how much you move it or leave a longer gap before folding; the competitor needs to be out of the way, not merely later. If a take crackles, that is clipping, a different fault from masking, so lower the recording level rather than moving sounds around. Stop listening if anything feels uncomfortable.`,
    },
    recall: {
      prompt: 'An original short has a quiet zipper clue under continuous music. The meter never clips, but the clue is missed. What would you test?',
      hint: 'The essential sound is not always dialogue.',
      answer: `Lower or pause the music around the zipper and listen again at the same comfortable volume, since the music is the cutlery over the toast and the zip is the toast in that moment. A clean meter only says nothing clipped; it says nothing about whether the clue was masked. Raising the whole mix would lift music and zip together and change nothing about which one you hear.`,
    },
    quiz: {
      question: 'A mix peaks below its limit but a line is hard to understand. Which first change targets masking rather than overall volume?',
      options: ['Raise the voice and background together.', 'Reduce the competing layer during the line.', 'Normalize the whole mix closer to its peak limit.'],
      correctIndex: 1,
      explanation: `Reducing the competing layer during the line changes the relationship between the two sounds, which is what masking is about; it is the cutlery going down for the toast. Raising voice and background together keeps their relationship exactly as it was, and normalising the whole mix toward the peak limit does the same while eating the headroom that was protecting you from clipping.`,
    },
    takeaway: 'Protect the essential event by reducing competition, then check the combined peaks without chasing loudness.',
    sourceNote: 'Yale and Blackmagic support sound layering and mixing concepts. This packing scene supplies no calibrated loudness target or completed mix.',
  },
  {
    id: 'cinema-053',
    outcome: `Count shots by cuts, group them into scenes by shared time and place, and name the sequence they build, stating the assumption behind each boundary instead of arguing from labels.`,
    scene: 'A bedroom invitation is prepared, then delivered to a corridor shelf.',
    sections: [
      {
        title: 'Three views of preparing an invitation',
        paragraphs: [
          `Plan a tiny film about delivering an invitation. A wide view of the bedroom shows an empty envelope on the desk for five seconds. A close view shows your hands sliding a homemade invitation into it for four seconds. Then a corridor view shows the envelope being placed on a shelf for six seconds. The timings are choices for a storyboard, not measurements of anything finished. Fifteen seconds, three views, two switches between them.`,
          `Someone asks how many shots that is, and you say three, because the picture cuts twice. Then they ask whether it is one scene or two, and you hesitate. The bedroom views clearly belong together. The corridor is somewhere else, and probably later. Is that a new scene? The hesitation is the useful part. It means the answer depends on a boundary you have not yet stated.`,
        ],
      },
      {
        title: 'The units answer different questions',
        paragraphs: [
          `Think about a comic strip. Each panel is one drawing. A row of panels set in the kitchen that morning tells one piece of the story. The whole strip, kitchen to bus stop to classroom, tells the story of being late for school. Nobody confuses the three. And if the artist draws one long panel with a character walking right across it, that is still one panel. The walk did not split it.`,
          `Film uses the same nesting. A shot is one uninterrupted stretch of picture between edits: a panel. A scene usually groups action that shares a time and a place: the row in the kitchen. A sequence groups a larger event that can run through several scenes: the whole strip. A camera that pans continuously from the envelope to the hands has not made a new shot, any more than the walking character made a new panel. There is one more word. The recording you captured, often called a take, can supply several separate shots in the finished film, the way one large drawing can be cropped into two panels placed apart.`,
          `These are working distinctions, not laws. An unusual film can blur where one scene ends. A long single take can hold changes another film would cut into pieces. So when you classify, say which boundary you are using. A label alone proves nothing.`,
        ],
      },
      {
        title: 'Make the grouping explicit',
        paragraphs: [
          `Back to the invitation. Shots one and two share the bedroom and one continuous act of preparing, so call them scene A. Shot three happens in the corridor, and you are assuming it happens later. State that assumption, and it becomes scene B. Together A and B make a sequence you can name: preparing and delivering the invitation. Fifteen seconds in all, though that number says nothing about how many scenes any other film needs.`,
          `Now test your own boundary. Suppose the corridor view actually continues the same unbroken action: you seal the envelope, stand, and walk through the doorway without a pause in time. Then the corridor is arguably still scene A, and you should say so and say why. Good analysis names the unit and the evidence for it. It never treats one shot as proof about a whole film or its maker.`,
        ],
      },
      {
        title: 'Counting the walk as a new panel',
        paragraphs: [
          `The first mistake is counting every camera move as a shot. Ask whether the picture actually cut or kept going. The second is counting by people or story: a short that follows one person packing indoors and arriving somewhere else later is not one shot because the same person is in it, and not one take because the events belong to one story. It is a sequence, holding scenes, holding shots you can count.`,
          `The third mistake is confusing takes with shots. One continuous phone recording from desk to doorway is one take; if the edit uses two separated excerpts of it with something between, the finished film has two shots. Decide the scene grouping afterwards, from the continuity of action and time, not from the fact that both came from one recording.`,
          `Two habits. Count shots by cuts and nothing else. And whenever you group shots into a scene or scenes into a sequence, write the one sentence that says what time, place, or action makes them belong together.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Three shots inside a delivery sequence',
        alt: 'Bedroom shots of five and four seconds precede a six-second corridor scene.',
        caption: `Count the three boxes first: three panels, two cuts. Then notice the first two carry scene A and the third carries scene B, which rests on the stated assumption that the corridor comes later. The whole row is the strip. An original plan of fifteen seconds; box widths are not proportional.`,
        items: [
          { label: 'Shot 1: envelope', detail: '5 seconds; bedroom wide; scene A.' },
          { label: 'Shot 2: invitation', detail: '4 seconds; hands insert card; scene A.' },
          { label: 'Shot 3: shelf', detail: '6 seconds; later corridor placement; scene B.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper and pen', 'Envelope or folded paper', 'Optional phone camera'],
      steps: [
        `Draw the three invitation views as three panels with invented names and no real address, and label the chosen five-, four-, and six-second holds. Separate panels make the cuts visible on the page.`,
        `Mark each intended cut between panels, then bracket the two bedroom shots as scene A and the corridor shot as scene B. The bracket is your claim about shared time and place.`,
        `Give the combined sequence an action name, and write the single assumption that separates the corridor in place and time. If you cannot write it, the boundary is not yet decided.`,
        `If you record safely in your own permitted space, compare the plan with your clips and check whether any camera move was mistaken for a cut. Otherwise keep the labelled board as a plan, not an edited film.`,
      ],
      notice: `Your shot count came from cuts alone, and your scene and sequence labels each have a written reason beside them. Someone reading the board could disagree with a grouping and point at the exact assumption they disagree with, which is what a stated boundary makes possible.`,
      troubleshooting: `If every camera move has become another shot in your notes, go back and ask of each one whether the picture actually cut or continued, like the long panel with the character walking across it. If you cannot decide whether the corridor is a new scene, you have not yet written down whether time passes between the envelope being sealed and being placed; decide that first.`,
    },
    recall: {
      prompt: 'One continuous phone take follows someone from a desk to a doorway, but a later edit uses two separated excerpts. How would you count takes and finished shots?',
      hint: 'Recording sessions and excerpts in the finished order are different units.',
      answer: `One take, because the phone recorded once without stopping, and two finished shots, because the edit places two excerpts of it apart with a cut between them, like one large drawing cropped into two separate panels. Whether those two shots belong to one scene is a further question answered by the continuity of action and time, not by the fact that they share a recording.`,
    },
    quiz: {
      question: 'A short alternates between packing indoors and a later arrival elsewhere. What is the most useful way to describe the larger journey?',
      options: ['A sequence containing scenes whose individual shots can be counted.', 'One shot because the same person appears throughout.', 'One take because the events belong to the same story.'],
      correctIndex: 0,
      explanation: `The journey is the whole strip: a sequence that holds at least two scenes, indoors and the later arrival, each made of shots you count by cuts. The same person appearing throughout does not make it one shot, because the picture cuts, and belonging to one story does not make it one take, because a take is a single recording and a story can be built from many.`,
    },
    takeaway: 'Count cuts for shots; state time, place, and action assumptions when grouping scenes into a sequence.',
    sourceNote: 'The Film Foundation provides film-literacy context and Yale supplies editing vocabulary. The invitation plan and its timings are original examples.',
  },
  {
    id: 'cinema-054',
    outcome: `Write a three-row shot breakdown that records only what can be checked, measures duration only when a player lets you, and files lens, lighting, and motive under unknown instead of guessing.`,
    scene: 'A tabletop sorting passage moves from two wooden counters to a hand close-up and a counter entering a small box.',
    sections: [
      {
        title: 'Write what the cut actually changes',
        paragraphs: [
          `A short tabletop passage opens wide enough to show two wooden counters and a small box. It cuts closer as a hand lifts the dark counter, then returns wide as that counter drops into the box. You sit down to write it up, and the first draft comes out like this: a patient wide shot on a long lens, a tense close-up, a satisfying return. Read it back. Not one of those words could be checked by someone looking at the same passage. Patient, tense, and satisfying are your reactions. The lens is a guess.`,
          `A breakdown is for recording what the cut changes, before anyone guesses what it means. Number the shots in the order they appear. For each one, note the framing, whether the camera moves, what visibly happens, and what the sound does at the boundary. That is a description another person could hold up against the footage and confirm.`,
        ],
      },
      {
        title: 'Keep measurement separate from impression',
        paragraphs: [
          `Think about describing a minor incident to someone who has to write it down. You saw a blue hatchback pull out from the left and clip a bin. That is what you saw. The driver looked distracted is what you thought, and it goes in a different sentence. The engine size and whether the brakes were worn are things you could not possibly know from the pavement, and a good note-taker writes not known rather than filling the gap with a plausible number. Three kinds of statement, kept in three places.`,
          `A shot breakdown uses the same three places. Fixed tabletop wide view is observation: anyone can check framing and movement. Feels patient is interpretation, and it belongs in its own column. A duration goes in the measured field only after you have timed it with a player or recording display; until then it reads unmeasured. And a close image, however close, does not tell you the lens, the camera model, the light fixture, or why the editor cut there. Those go under unknown. Filling them in to complete the table is inventing evidence.`,
        ],
      },
      {
        title: 'Use the counter passage as a small test',
        paragraphs: [
          `Write the three rows. Row one: wide, fixed camera, both counters and the box visible, quiet room background. Row two: hand close-up, fixed camera, dark counter lifted, contact sound continues across the cut. Row three: wide again, fixed camera, counter enters the box, room background. Every duration reads unmeasured, because there is no footage here to time.`,
          `Now add the separate column. Hypothesis: the close view may make the chosen counter easier to identify. That is allowed, because it is labelled as a hypothesis and it comes with a way to test it: make a paper edit that omits row two and ask whether you can still tell which counter went in the box. Three careful rows and one honest guess are enough. A long spreadsheet does not make the observations more reliable, and a confident lens name makes them less so.`,
        ],
      },
      {
        title: 'Filling in the engine size',
        paragraphs: [
          `The first mistake is writing a feeling in the observation column. The fix is mechanical: move the feeling to interpretation and replace it with the visible or audible cue that produced it. The second is estimating a duration from memory and writing it as a measurement. The pause lasted about three seconds is a guess; if the player will not give you a timestamp, the field says unmeasured. The third is inferring equipment from framing. A telephoto lens creates the close view is the engine size written down by the witness on the pavement.`,
          `A fourth mistake is leaving out what you can record because something else is missing. A dance passage you viewed legally but cannot scrub still lets you write the framing order, the movement, the action, and the audible change. Missing timing stops one field, not the whole row.`,
          `Two habits. Before writing any word in the observation column, ask whether a stranger with the same footage could confirm it. And treat unknown and unmeasured as complete answers, never as blanks to be filled.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Observed fields for the counter passage',
        alt: 'Wide setup, hand close-up, and return wide have unmeasured durations.',
        caption: `Read each box as a witness statement: framing, movement, sound, and nothing a stranger could not confirm. Then notice that all three durations say unmeasured, because no footage was timed. That is the field answered honestly, not left blank. The example supplies framing and action only.`,
        items: [
          { label: '1: two counters', detail: 'Wide, fixed; room background; duration unmeasured.' },
          { label: '2: dark counter lifted', detail: 'Hand close-up, fixed; contact sound; duration unmeasured.' },
          { label: '3: counter enters box', detail: 'Wide, fixed; room background; duration unmeasured.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Two large counters or paper circles', 'Small box', 'Paper', 'Optional phone and your own clips'],
      steps: [
        `Use the counter plan as written, or three short clips you own, recording only your own hands and keeping small props away from children. Your own footage is the only footage you can time.`,
        `Rule three numbered rows with fields for framing, movement, action, sound, and duration, and mark a paper-only version as planned rather than observed. The label keeps a plan from being mistaken for a record.`,
        `For real footage, measure each duration if the player shows timestamps, otherwise write unmeasured. Leave lens and lighting as unknown unless you set them yourself; that is the engine size you cannot see from the pavement.`,
        `Add one interpretation in a separate column and one proposed test for it, such as removing the close view to see whether the chosen counter can still be identified.`,
      ],
      notice: `Another viewer could check every observation row against the same passage without having to agree with your interpretation, because the two are in different columns. Nothing in the observation rows is a feeling, a memory estimate, or a guess about equipment.`,
      troubleshooting: `If a row contains a feeling or a motive, move it to the interpretation column and replace it with the visible or audible cue that gave you the feeling. If you catch yourself writing a plausible lens or a duration from memory, cross it out and write unknown or unmeasured; a complete-looking table with invented cells is worse than an honest one with gaps.`,
    },
    recall: {
      prompt: 'A legally viewed dance passage has a close face view followed by a full-body view. You cannot access timestamps. What can your breakdown responsibly include?',
      hint: 'Missing timing does not prevent recording a visible framing change.',
      answer: `Everything a witness could confirm: the order of framings, close face then full body, whether the camera moved, what the dancer visibly did, and any audible change at the cut. Write unmeasured for both durations, and put the lens, the lighting, and the reason for the cut under unknown. A missing timestamp closes one field. It does not stop you recording the rest.`,
    },
    quiz: {
      question: 'Which note belongs in the observational column for an untimed clip?',
      options: ['A telephoto lens creates the close view, inferred from framing alone.', 'The pause lasts exactly three seconds, estimated from memory.', 'The fixed wide view cuts to a close view of the hand lifting the dark counter.'],
      correctIndex: 2,
      explanation: `The cut from a fixed wide view to a close view of the hand lifting the dark counter is something a stranger with the same clip could confirm, so it is observation. A lens inferred from framing is the engine size guessed from the pavement, and an exact duration from memory is an estimate dressed as a measurement; the first belongs under unknown and the second under unmeasured.`,
    },
    takeaway: 'Record what can be checked, measure what can be measured, and keep unsupported details unknown.',
    sourceNote: 'Yale cinematography and editing pages supply vocabulary. The counter passage is an original plan, not a measured breakdown of a referenced film.',
  },
  {
    id: 'cinema-055',
    outcome: `Explain a reveal by naming the cue that lets the viewer know something before or with the searcher, then keep the effect you expect separate from claims about the filmmaker's intent.`,
    scene: 'A pencil beneath rolled paper goes unnoticed during an empty-pouch search.',
    sections: [
      {
        title: 'The viewer can know before the searcher',
        paragraphs: [
          `In your drawing-desk scene, a pencil lies half hidden under the edge of a rolled sheet of paper. The opening view shows the pencil's end poking out. Then your hand rummages through an empty pouch, finds nothing, lifts the paper, and there is the pencil. Asked what happens, most people would say: someone looks for a pencil and finds it. True, and it misses the only interesting thing about the scene.`,
          `The interesting thing is when the viewer knew. The opening view handed them the pencil's location before the search began, provided the pencil end was actually readable in the frame. For the next several seconds, the viewer knew something the searcher did not. That gap between what the audience knows and what the character knows is what the scene is made of. Analysis starts by locating it.`,
        ],
      },
      {
        title: 'Connect a formal choice to supplied information',
        paragraphs: [
          `Think about watching children play hide and seek from across the garden. You can see a shoe sticking out from behind the shed. The seeker cannot, and wanders off in the wrong direction. You lean forward a little; you almost want to point. Now imagine watching only over the seeker's shoulder, seeing exactly what they see. You find the shoe when they do, and the feeling is different: a small surprise instead of a slow lean. Same hiding place, same children, same game. What changed was the order in which you got the information.`,
          `In a film, a decision about how the scene is presented, where the camera looks, when it cuts, how long it holds, what you hear, is called a formal choice. The shoe sticking out is a formal choice in the garden: the vantage point you were given. To analyse one, begin with the cue you can point at, then say what it lets a viewer know, then say what response that might invite. Three steps, each smaller than the next claim would be.`,
          `Watch the size of the claims. The pencil end is visible before the pouch opens is an observation. I expect the searcher to notice it describes a possible viewer response. The director wanted everyone to feel impatient asserts an intention and a universal effect, and neither can be read off the image. The analysis is strongest when the size of the claim matches the size of the evidence.`,
        ],
      },
      {
        title: 'Change only the reveal order',
        paragraphs: [
          `Draw a second version of the scene. Open on the empty pouch, keep the pencil hidden, and let it appear only when the paper lifts. The search is the same. Now viewer and searcher get the clue together, over the seeker's shoulder. Compare the two boards and resist ranking them. An early reveal can support anticipation. A late one can keep uncertainty alive. Neither effect is guaranteed if the pencil end is a tiny smudge or the hand's action is unclear, so check legibility first.`,
          `For each version, write three things: what the scene communicates before the discovery, what it communicates after, and the cue responsible for the difference. Then propose one change you could test safely with your own paper and pencil, such as making the pencil end larger in the opening frame, or holding on it a second longer.`,
        ],
      },
      {
        title: 'Reading the hider\'s mind',
        paragraphs: [
          `The first mistake is the plot summary: the character finds the pencil and the analysis stops there, with no cue identified and no information order described. The second is the leap to intention: the early shot proves the maker wanted frustration. You did not see the maker; you saw a shoe behind a shed, and the most you can say is what it let you know. The third is treating the expected effect as a fact about every viewer. Someone who missed the pencil end had the late-reveal experience whatever the board intended.`,
          `A fourth mistake is comparing two versions that differ in several ways at once and crediting the reveal order. Keep the action the same and move only the moment the clue becomes readable.`,
          `Two habits. For any reveal, write down the moment the viewer could first know and the moment the character knows, and name the cue that set the first of those. And keep three sentences apart: what is visible, what a viewer might do with it, and what anyone intended, which is usually a sentence you cannot write.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Same pencil, different information order',
        alt: 'One plan shows the pencil before the pouch search; the other reveals it during discovery.',
        caption: `Compare the first word of each detail: in the early plan the pencil comes before the pouch, which is the shoe you can see from across the garden; in the late plan the pouch comes first and you find the pencil with the searcher. Original edit plans; the moment the pencil becomes identifiable is the thing to compare, not a guaranteed feeling.`,
        items: [
          { label: 'Early pencil view', detail: 'Pencil end visible, then empty pouch, then paper lifted.' },
          { label: 'Late pencil view', detail: 'Empty pouch first; paper lifted before the pencil is revealed.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Pencil', 'Paper and pouch or folded-paper pocket', 'Optional phone'],
      steps: [
        `Set the pencil partly under a sheet of paper on a stable surface, using your own hands and clearing any private documents from the background. The pencil end has to be readable, so check it is not a smudge.`,
        `Draw three panels for the early version: pencil edge, empty pouch, discovery. Under each panel write what the viewer knows at that point, which is how you locate the gap between viewer and searcher.`,
        `Draw an alternative that hides the pencil until the discovery, keeping the action otherwise the same so that the information order is the only change between the boards.`,
        `Read both boards, or record short tests, and write one observed cue and one possible effect as two separate sentences. A board comparison is a plan, not a finished edit.`,
      ],
      notice: `You can put your finger on the panel where the viewer receives the clue in each version and say how far ahead of the searcher that puts them, instead of retelling the search. Your effect sentence says might, and your cue sentence points at something visible.`,
      troubleshooting: `If the two versions feel identical, cover the pencil in the opening panel and look for any other cue that still gives its location away, such as the paper's shape or the hand's glance; the reveal order is only a real change if nothing else leaks the clue. If you find yourself writing what the maker wanted, replace that sentence with what the cue let the viewer know.`,
    },
    recall: {
      prompt: 'In a new kitchen scene, a recipe card is upside down until a hand turns it toward the camera. How could an earlier readable view change the scene?',
      hint: 'Compare the moment the viewer knows the instruction with the moment the character reacts.',
      answer: `An earlier readable view would hand the viewer the instruction before the character reads it, the shoe behind the shed, so the viewer could anticipate the reaction rather than share it. The upside-down version makes viewer and character discover the card together. Describe the cue, the card legible or not, and the knowledge order it creates, then test legibility and timing instead of asserting a guaranteed feeling or a maker's intention.`,
    },
    quiz: {
      question: 'Which note connects a film choice to information without claiming an unverified intention?',
      options: ['The missing object proves the director intended frustration.', 'The early close view identifies the wrong label before the character reads it.', 'The character discovers that the label is wrong and changes it.'],
      correctIndex: 1,
      explanation: `The early close view identifying the wrong label before the character reads it names a cue and says what it lets the viewer know ahead of the character, which is the shoe seen from across the garden. The first option reads the maker's mind from an image, a claim the image cannot support. The last is a plot summary that never identifies the choice that shaped when the viewer knew.`,
    },
    takeaway: 'Name the cue, explain what it reveals, and keep your proposed effect separate from a claim about intention.',
    sourceNote: 'The Film Foundation and Yale support attentive film analysis. The pencil search and alternative orders are original, not claims about a named film.',
  },
  {
    id: 'cinema-056',
    outcome: `Describe a staged relationship by who can reach, see, or move a prop, test it by moving only the prop with the camera fixed, and leave personality out of the reading.`,
    scene: 'Two greeting-card writers share a marker placed centrally or beside one writer.',
    sections: [
      {
        title: 'Who can reach the marker?',
        paragraphs: [
          `Two volunteers sit at a table making a greeting card. In the first version a single marker lies between them, within easy reach of either. In the second it lies beside the writer on the left, while the writer on the right holds the unfinished card. Nobody has said a word differently. Yet the second version has a small problem built into it: the right-hand writer cannot finish without the marker, and the marker is not theirs to take without asking.`,
          `It is tempting to read that straight into character. The left writer is hogging the marker; the left writer is selfish. The placement does not say that. What it says is narrower and more useful: who can reach what, and therefore what has to happen next. Reach and access are visible. Selfishness is a verdict.`,
        ],
      },
      {
        title: 'Arrangement becomes meaning through action',
        paragraphs: [
          `Think about the salt at a dinner table. If it sits in the middle, anyone can take it and nobody notices. If it sits by one person's plate, everyone else has to ask them, and that person quietly becomes the one you turn to. But the salt by their plate does not make them bossy. They may simply have been the last to use it. What tells you more is what happens when someone asks: a quick pass across the table, or a hand that keeps it close for a moment too long.`,
          `The arrangement of everything in front of the camera, the setting, the props, the costumes, the lighting, and what the performers do, is called mise-en-scene. A list of those ingredients is only a shopping list. The analysis is in the relationships: who faces whom, what blocks a view, which move changes someone's access to an object. The marker beside one writer is the salt by one plate. It could mean temporary use, deliberate withholding, or plain convenience, and only the next action narrows it.`,
          `Keep the two layers apart. Placement creates a possible next action; the performed action supports one reading over another. Neither one decodes a real person's character, and the scene is fiction anyway.`,
        ],
      },
      {
        title: 'Keep the camera fixed while testing access',
        paragraphs: [
          `Make the central marker your baseline. Keep the card, the camera, and both performers exactly where they are, and move only the marker to the left writer's side. Now ask what the right writer must do to continue: wait, reach across, or ask. That change in required action is the whole result of the test, and it came from moving one object. If nobody wants to perform, two labelled paper figures on a table work perfectly well.`,
          `If people do take part, agree the action and the recording in advance, keep reaches comfortable and walkways clear, and stop when anyone wants to. Then add a handover. Watch how a willing pass of the marker, before any explanatory dialogue, settles the cooperation question that placement alone left open. The exercise is about a fictional card-making scene. It is not an assessment of anyone's real room, friendships, or body language.`,
        ],
      },
      {
        title: 'Calling the salt-keeper bossy',
        paragraphs: [
          `The first mistake is the verdict: the notebook beside one character proves they control every decision in the relationship. Reach is observable, control is a story you have added. The second is the mirror image: assuming the central version would communicate friendship to every viewer. Equal access is a condition, not a guaranteed feeling. The third is moving several things at once, the marker and the camera and a performer, and then crediting the marker.`,
          `A fourth mistake is testing access with something unsafe. In a sewing scene, the scissors near one worker raise the same question as the marker, and the answer comes from a staged handover with a harmless cardboard stand-in, or a move that denies access, never from passing real blades around for the camera.`,
          `Two habits. When reading a staged scene, write down who can see, reach, or move each important object before you write anything about what anyone is like. And when you test a reading, change one thing in the arrangement and hold everything else still.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'One marker changes hands differently',
        alt: 'Two writers share a card; one marker can sit centrally or beside A.',
        caption: `Look at the two marker positions as alternatives, not as two props: the central one is the salt in the middle of the table, the side one is the salt by one plate. Then follow the handover arrow to writer B, who holds the card and needs the marker. Top view, not to scale.`,
        items: [
          { label: 'Writer A', detail: 'Left position stays fixed.', x: 18, y: 25, shape: 'person' },
          { label: 'Writer B', detail: 'Needs the marker to finish.', x: 82, y: 25, shape: 'person' },
          { label: 'Central marker', detail: 'Version 1: either writer can reach.', x: 50, y: 25, shape: 'object' },
          { label: 'Side marker', detail: 'Version 2: beside writer A.', x: 18, y: 76, shape: 'object' },
          { label: 'Greeting card', detail: 'Same unfinished card in both versions.', x: 69, y: 76, shape: 'paper' },
        ],
        arrows: [{ from: 3, to: 1, label: 'handover' }],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Paper figures or willing performers', 'Marker', 'Blank card', 'Optional phone camera'],
      steps: [
        `Label two paper figures A and B, or agree the scene with willing performers, and set up on a stable, clear table. Paper figures make it easy to move one thing at a time.`,
        `Place the marker centrally and sketch or photograph the view, using a fictional greeting with no personal details. This is the salt in the middle, your baseline.`,
        `Move only the marker to A's side, keeping the camera and both figures where they were, and write down what B must now do to finish the card. The changed requirement is the result.`,
        `Add a planned handover and compare how the scene reads before and after it. Keep a labelled spatial sketch if no camera is available, and do not describe it as filmed.`,
      ],
      notice: `Your explanation links one spatial change to a change in what B has to do, and the handover tells you more about cooperation than the placement ever could. Nowhere in your notes is either writer given a personality.`,
      troubleshooting: `If moving the marker changed nothing, check whether B can still reach it comfortably from where they sit, because a prop within easy reach of both is still the salt in the middle. Move it further within safe reach, or revise what the scene needs B to do. If you catch a sentence like A is controlling, replace it with what A did with the marker when B needed it.`,
    },
    recall: {
      prompt: 'An original sewing scene places fabric scissors near one worker while the other holds cloth. What additional action would help distinguish cooperation from withholding?',
      hint: 'Placement permits several readings; behavior can narrow them without real unsafe handling.',
      answer: `A staged handover, or its opposite. Scissors by one worker are the salt by one plate: they only say who would have to ask. A willing pass toward the worker holding the cloth supports cooperation; a hand that draws them closer supports withholding. Stage either with a harmless cardboard stand-in rather than real blades, and describe the action you staged instead of diagnosing either performer.`,
    },
    quiz: {
      question: 'A notebook lies beside one character rather than centrally. Which analysis is best supported before anyone moves?',
      options: ['The placement gives that character easier access; its meaning needs action and context.', 'The notebook proves the character controls every decision in the relationship.', 'The central version would necessarily communicate friendship to every viewer.'],
      correctIndex: 0,
      explanation: `Before anyone moves, all the placement establishes is reach: that character can pick up the notebook without asking, like the person with the salt by their plate. What that means waits on action and context. Reading control over the whole relationship from one object is a verdict the image cannot support, and promising that the central version would mean friendship to every viewer treats equal access as a guaranteed feeling.`,
    },
    takeaway: 'Read who can see, reach, or move what, then test the interpretation against the scene action.',
    sourceNote: 'Inherited staging and lighting references inform the arrangement vocabulary. The volunteers are fictional; prop placement is not a diagnostic code for real people.',
  },
  {
    id: 'cinema-057',
    outcome: `Compare when a sound's source is identified relative to when it is heard across two specific passages or plans, noting the language and subtitle channels, without ranking national cinemas.`,
    scene: 'Two original doorway plans reveal a bag before or after its zipper sound.',
    sections: [
      {
        title: 'Give both passages the same question',
        paragraphs: [
          `You want to learn from Tamil cinema and from films made elsewhere, and you want to do it without turning either into a stereotype. The way in is to shrink the question until it fits inside a single passage. Not what is Tamil cinema like, but: in this passage, when is a sound's source identified compared with when the sound is first heard? That question can be asked of any two minutes of any film, and answered by watching.`,
          `Yale's sound guide discusses Edward Yang's Yi Yi, identified there as a Taiwan film from 2000, in its section on sound bridges. Treat that as an optional study lead, not as a stand-in for every Taiwanese film. Pair a legally accessible passage from it, or from anything else you can watch, with a Tamil passage you already have permission to view. Or skip borrowed films entirely and use two plans of your own, which this lesson supplies.`,
        ],
      },
      {
        title: 'Keep context and observation together',
        paragraphs: [
          `Think about tasting two loaves of bread, one from a bakery in one town and one from a bakery in another. You can say a great deal that is true: this crust is thicker, that crumb is more open, this one was sliced before it cooled. What you cannot say from two loaves is that one town bakes better than the other, or that its bakers are more patient. You tasted two loaves. And suppose one loaf came with an ingredients label and the other did not. Some of what you know about the first came from reading, not tasting. Your notes should say so.`,
          `A sound bridge carries sound across a picture boundary, so that an upcoming scene can be heard before it is seen. That is not the same as sound from an unseen source inside one continuous shot. Both delay the reveal, but only one crosses a cut. For each passage, note three moments in order: the first audible cue, the picture boundary if there is one, and the moment the source is revealed. Then add the label question. Did you understand the language directly, or through subtitles? A source identified by a subtitle naming it is a reveal by text, not by image. It changes the comparison.`,
          `Write what you do not know as unknown. An untimed pause is not evidence of anything, and it is certainly not a national trait.`,
        ],
      },
      {
        title: 'Test the question without borrowing a scene',
        paragraphs: [
          `Here are two loaves you baked yourself. Plan one: a doorway view, a bag zipper heard somewhere out of frame, then a cut that reveals the bag. The sound arrives first; the source arrives after the cut. Plan two: the bag is visible first, and its zipper sounds afterwards. The source is known before the sound. Ask the same question of each: when does the source become identifiable? In plan one the answer is after the cut; in plan two it is before the sound.`,
          `Notice what you have and have not done. You changed one concrete relationship between a sound and its image. You have shown nothing about which culture values patience, because no culture was involved. If you film it, record your own gentle zipper in a room you have permission to use, with performers who have agreed. And remember that being allowed to watch a film gives no permission to copy it. Nor does finding it in a study guide. Its frames, dialogue, and music stay out of your exercise.`,
        ],
      },
      {
        title: 'Judging a town by one loaf',
        paragraphs: [
          `The first mistake is the conclusion that begins with a country. Their cinema has the opposite attitude to suspense is a claim about thousands of films drawn from one passage. Narrow it to the passage and most of the sentence falls away, leaving something true. The second is the hierarchy: a longer delay before the reveal proves a more sophisticated culture. A thicker crust proves a thicker crust. The third is forgetting the ingredients label, treating a subtitle that named the unseen visitor as if the image had revealed them.`,
          `A fourth mistake is comparing two passages on different questions, timing in one and framing in the other, then presenting the result as a comparison.`,
          `Two habits. Before comparing, write one question small enough to be answered by watching, and ask exactly that of both passages. And record every channel the information came through, image, sound, or subtitle, along with your own language dependence.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same source-reveal question in two plans',
        alt: 'The zipper precedes its bag reveal in one plan and follows it in the other.',
        caption: `Read each detail for the order of cue and reveal: in the first plan the zipper is heard before the cut shows the bag, in the second the bag is seen before its zipper sounds. These are two loaves you baked yourself, not summaries of Tamil or Taiwanese scenes; no durations or audience responses are claimed.`,
        items: [
          { label: 'Zipper before reveal', detail: 'Doorway view, unseen zipper, then cut to the bag.' },
          { label: 'Bag before zipper', detail: 'Bag visible first; its source is known when the zipper sounds.' },
        ],
      },
    ],
    practice: {
      minutes: 12,
      needs: ['Paper and pen', 'Optional legal viewing access', 'Optional own bag and phone'],
      steps: [
        `Choose two short passages you can legally watch, or draw the two doorway plans from this lesson. Do not download or copy protected scenes; the comparison needs only your notes, not the footage.`,
        `For each passage or plan, write the first audible cue, the picture boundary if any, and the reveal, in order. Label durations unmeasured unless you timed real footage with a player.`,
        `For viewed material, record the language and whether you depended on subtitles, since a subtitle can be the channel that identified the source. For your own boards, label the evidence planned and make no claim about any national cinema.`,
        `Write one bounded comparison, two passages and one relationship, and one original test you could run. If you record the zipper, use your own sound in a safe private setup; otherwise keep the paper plan.`,
      ],
      notice: `Your conclusion names two specific passages or plans and the same observed relationship in each, the way a fair tasting note names two loaves. Nowhere does it name a country as the subject, and every reveal that came through a subtitle is marked as text, not image.`,
      troubleshooting: `If your conclusion begins with the name of a country or a culture, cross out the subject and replace it with the passage you actually watched, then delete whatever the passage cannot support. If the two passages seem to differ enormously, check whether a subtitle, a cut, or a shot you did not time is doing the work before crediting a style.`,
    },
    recall: {
      prompt: 'One subtitled scene names an unseen visitor in text before the camera reveals them; another has no subtitle cue. How would you make the comparison fairer?',
      hint: 'Track all information channels, not picture timing alone.',
      answer: `Record the subtitle as an identification cue in its own right, arriving before the image, and state that you depended on it; that is the ingredients label on one loaf. Then compare the order of cue and reveal across all channels, text, sound, and picture, in both scenes. The comparison is about when the source was identified, not about one cinema preferring slow reveals.`,
    },
    quiz: {
      question: 'Two viewed passages differ in how long a sound source remains unseen. Which conclusion fits this evidence?',
      options: ['Their national cinemas have opposite attitudes toward suspense.', 'The longer delay proves a more sophisticated filmmaking culture.', 'These passages disclose the source differently; context and timing need specific notes.'],
      correctIndex: 2,
      explanation: `Two passages support a statement about two passages: they disclose the source differently, and the notes should say through which channels and with what timing, measured or not. Reading opposite national attitudes from two scenes is judging two towns by one loaf each, and treating a longer delay as proof of sophistication turns a thicker crust into a verdict.`,
    },
    takeaway: 'Apply one question to specific passages, including language and context, rather than ranking whole film cultures.',
    sourceNote: 'Yale Sound and The Story of Movies were spot-checked. Yi Yi is an optional reference; the doorway comparison is original and supplies no film-scene measurements.',
  },
  {
    id: 'cinema-058',
    outcome: `Keep four notes apart, what the image shows, how a viewer reads it, what the maker actually said, and what others commented, and write unverified wherever no answer was given.`,
    scene: 'A banner-folding discussion accompanies two inherited Mani Ratnam references with different source formats.',
    sections: [
      {
        title: 'An essay and an interview do different jobs',
        paragraphs: [
          `You are studying Mani Ratnam and two sources are open in front of you. One is Baradwaj Rangan's critical essay Madras Male. The other is a page for a Ponniyin Selvan interview. It is tempting to treat them as one pile of facts about the director. They are not. The essay is a critic building a supported reading of what is on screen. The interview is a record of what the filmmaker said, and only the answer he actually gave can be attributed to him. The page title cannot. The interviewer's question cannot.`,
          `This matters most when you admire someone. Admiration fills gaps. You half-remember that he said something about a doorway, the question on the page is about a doorway, and before long your notes say he confirmed it. Nothing of the kind happened. You do not need to watch the whole interview to avoid this; you only need to leave an unverified statement marked unverified instead of filling it in from fondness.`,
        ],
      },
      {
        title: 'Attach each claim to its speaker',
        paragraphs: [
          `Think about a friend who turns up with a new haircut. What you see: it is much shorter at the sides. What you read into it: a fresh start after the breakup. What they say when you ask: the barber was running late and took more off than planned. What someone else writes under the photo: finally, the real you. Four different things, and you would not dream of writing the second one down as something your friend told you. Nor would you treat the magazine headline Is she leaving? as her announcing she is leaving. A question is not an answer.`,
          `Film notes need the same four columns. What the image shows is observation. How someone reads it is interpretation, and it belongs to the reader who offered it. What a maker says about making it is a maker account, and it belongs to the maker only when the words were actually said, in a source you checked. Reader comments under an article are a fourth source, not an extension of the interview. For every claim, note who said it, what kind of source it came from, and the passage you actually read, and never let a paraphrase harden into a quotation.`,
          `Two further cautions. A verified maker account has its own context and does not oblige every viewer to feel the intended effect. And a viewer can offer a sharp interpretation without claiming the director signed off on it. The columns protect both.`,
        ],
      },
      {
        title: 'Try the distinction on your own banner scene',
        paragraphs: [
          `Imagine your own clip: two consenting friends fold a plain banner. One steps out of frame, leaving the other alone in the picture. A viewer watching says the remaining figure looks isolated. You, who filmed it, explain that you placed the camera where it would keep the loose fabric out of the shot, and that is why the frame is where it is. Write the exchange into the four columns. Observation: one person remains after the other leaves. Interpretation: the viewer reads isolation. Maker account: the camera position was chosen for the fabric.`,
          `Notice that nothing collapses. The viewer's reading is not wrong because you had a practical reason; isolation may genuinely be what the frame produces. And your stated reason does not prove isolation was intended, because you have just said it was not. Both notes stand, each under its own name. The exchange is invented to show the method. It is not a quotation and makes no claim about Mani Ratnam, his performers, or any scene in his films.`,
        ],
      },
      {
        title: 'Writing the headline down as the answer',
        paragraphs: [
          `The first mistake is attributing the interviewer's question to the interviewee. A festival moderator suggests a doorway symbolises departure, the clip ends before the director replies, and the notes say the director sees the doorway as departure. The honest entry is: moderator's suggestion, director's response unavailable. The second is promoting a critic's reading to a maker's confirmation. The essay supports a sentence beginning the critic argues; it supports nothing beginning the director confirms.`,
          `The third mistake is the universal: a reading that persuades you becomes how all viewers will understand the scene. It is one reader's column, however good. The fourth is treating comments beneath an article as part of the article.`,
          `Two habits. Before writing any sentence that starts with the director, find the words the director actually said and note where you read them, or change the subject of the sentence to yourself. And whenever a source is a question, a title, or a thumbnail, write unverified beside whatever it seems to imply.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Reading and stated reason stay separate',
        alt: 'A viewer reads isolation; the maker gives a practical reason for framing the banner.',
        caption: `Read the speaker label on each line before the words: the first two are the viewer, seeing and then reading, the third is the maker's own account, and the last is the viewer keeping the two apart, like the haircut you saw, the reason you guessed, and the barber story you were told. An invented banner discussion, not quotations from a real filmmaker or critic.`,
        items: [
          { label: 'Viewer: observation', detail: 'One person remains in the frame after the other leaves.' },
          { label: 'Viewer: interpretation', detail: 'I read the remaining figure as isolated.' },
          { label: 'Maker: account', detail: 'I placed the camera to keep loose fabric outside the shot.' },
          { label: 'Viewer: conclusion', detail: 'My reading is possible, but it is not your stated reason.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Paper and pen', 'Optional access to the inherited essay and interview page'],
      steps: [
        `Rule four headings, observation, interpretation, maker account, and comment, and sort each line of the banner exchange under the right one. Sorting an invented exchange first shows you how the columns work before a real source tempts you to blur them.`,
        `If you are online, open the linked essay and interview page and note the title, the author, and the format of each. Do not infer any answer from a question, a headline, or a thumbnail; the headline Is she leaving? is not her leaving.`,
        `Record only a claim you actually read, in your own words, with its source beside it. If you checked nothing, write maker intention unverified and leave it there.`,
        `Offline, keep the banner sorting and write a list of the evidence you would still need. Do not invent an external quotation to make the sheet look finished.`,
      ],
      notice: `Every attributed claim on your sheet has a named speaker and a source you checked, or is explicitly marked unverified. No sentence beginning with the director rests on a question, a title, or your admiration, and the viewer's reading and the maker's reason sit in different columns without cancelling each other.`,
      troubleshooting: `If your notes say the director wanted something, go back and find where that was actually stated; if you cannot, recast the sentence as your own interpretation and sign it with your name. If a critic's argument has slipped into the maker column, move it back under the critic. A sheet with honest gaps beats a full one built from a headline.`,
    },
    recall: {
      prompt: 'A festival moderator suggests a doorway symbolizes departure. The clip ends before the director replies. What can you report?',
      hint: 'A question proposes an interpretation; an absent answer cannot confirm it.',
      answer: `That the moderator proposed a departure reading, attributed to the moderator, and that the director's response is unavailable. The suggestion is the headline asking Is she leaving?, and the missing reply means nobody has answered. You can still test the departure reading against the doorway yourself, in the interpretation column under your own name, without lending it to the director.`,
    },
    quiz: {
      question: 'A critic argues that a scene creates distance between two characters. Which note preserves the evidence accurately?',
      options: ['The director has therefore confirmed distance as the intended meaning.', 'The critic offers a distance reading that can be checked against the scene.', 'The reading establishes how all viewers will understand the scene.'],
      correctIndex: 1,
      explanation: `The essay supports exactly one attribution: the critic offers a distance reading, and you can check it against the scene. That is the friend's haircut read by someone else, filed under their name. Nothing the critic wrote puts words in the director's mouth, and one persuasive reading, however good, is one reader's column rather than a fact about every viewer.`,
    },
    takeaway: 'Attribute the reading to the reader and the account to its speaker; do not manufacture agreement between them.',
    sourceNote: 'The inherited Rangan essay and interview illustrate source formats. The banner exchange is invented, with no filmmaker quotation or intention claim.',
  },
  {
    id: 'cinema-059',
    outcome: `Draw three rough panels for a scarf going into a tote, with framing, action direction, and sound labelled on each, arrows that say what moves, and a check of each view in the real room.`,
    scene: 'A folded scarf moves right to left into a tote during an original packing action.',
    sections: [
      {
        title: 'Draw the scarf movement, not a polished picture',
        paragraphs: [
          `The action you want to film is small: a folded scarf on the right of a table goes into a tote bag on the left. You sit down to plan it and freeze, because you cannot draw. Good news: nobody needs you to. Draw three rectangles in the orientation you will hold the phone. In the first, a box for the tote and a hatched strip for the scarf, both visible. In the second, a hand lifting the strip. In the third, the strip going into the open box. Under each, write the action and the sound: soft fabric rustle.`,
          `That is a storyboard. It is a plan for what the screen will show, panel by panel, and its only job is to be understood by whoever holds the phone, which may be you tomorrow when you have forgotten what you meant.`,
        ],
      },
      {
        title: 'Keep action arrows separate from camera instructions',
        paragraphs: [
          `Think about the map you scribble on a napkin for a friend coming to your house. A square for the station, an X for the shop, a wobbly line for the road. Nobody expects it to be pretty. But one thing has to be clear: the arrow. Does it mean you walk this way, or the bus goes this way, or the road bends this way? A napkin map with an unlabelled arrow sends your friend in the wrong direction confidently. The drawing can be rough. The arrow cannot be ambiguous.`,
          `Storyboard arrows have the same rule. Every arrow needs a named subject. Hand moves left is one instruction. Camera pans left is a completely different one, and on a rough drawing the two look identical. There is a third kind of movement that is neither: picking the phone up and putting it somewhere else to get the next shot. That is a setup change between shots, and it is not camera movement the viewer sees. Label all three differently.`,
          `For this first plan, keep the phone on the same side of the table for every setup. The scarf travels right to left in panel one, so it should travel right to left in panels two and three as well. If a panel deliberately changes that relationship, mark the change so nobody mistakes it for a slip. And leave lens numbers off the board; a storyboard communicates framing and action, not equipment you have not chosen.`,
        ],
      },
      {
        title: 'Check the board against the actual room',
        paragraphs: [
          `Before you trust the napkin map, you walk the route. Before you trust the board, stand at each proposed phone position with the phone supported and look. Panel one: can you see both the tote and the scarf? Panel two: does the close view leave room for the hand to enter and lift? Panel three: can you see into the tote's opening, or does its near side hide the scarf as it goes in? Each question has a yes or a no, and a no means you redraw the panel.`,
          `Redraw it; do not contort yourself to match it. A view that needs you leaning over unstable furniture is a view to change. If you cannot join clips at all, a single wide continuous shot of the whole action is a complete fallback and belongs on the board as one. Use your own hands or a willing performer, a plain scarf, a space you have permission to use, and your own staging rather than panels traced from someone's film.`,
        ],
      },
      {
        title: 'The unlabelled arrow',
        paragraphs: [
          `The first mistake is the one from the napkin: an arrow with no subject. A person crossing right while the camera follows is two movements, and one arrow describing both will be read as one or the other at random. Write person crosses right and camera follows as separate notes, and if the camera actually resets between cuts, call that a setup change instead. The second mistake is keeping an impossible panel. An overhead view you cannot support safely does not become safe at filming time; redraw a stable angled view that still shows the tote opening and the scarf path.`,
          `The third mistake is cutting the payoff. Dropping the packing panel and hoping the viewer infers the scarf went in removes the one thing the scene was for. The fourth is polishing the drawing instead of checking it in the room.`,
          `Two habits. Give every arrow a subject, scarf, hand, camera, or setup, before you draw the next panel. And stand where each panel says the phone will be, with the phone, before you call the board finished.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Scarf and tote storyboard',
        alt: 'Wide setup, close scarf lift, medium packing view.',
        caption: `Read each panel's detail for three things in order: the framing word, the action, and the sound. Then check that the scarf goes right to left in every panel, which only holds because the phone stays on one side of the table. Original panels with fixed framing; the drawings are napkin-rough on purpose.`,
        items: [
          { label: '1: establish both', detail: 'Wide: tote left, folded scarf right; quiet room.' },
          { label: '2: lift scarf', detail: 'Close: hand lifts from the right; soft fabric rustle.' },
          { label: '3: pack scarf', detail: 'Medium: scarf travels left into tote; fabric settles.' },
        ],
      },
      {
        type: 'spatial',
        title: 'Objects and camera setups',
        alt: 'Tote left, scarf right; alternative phone setups stay on the same table side.',
        caption: `Find the two arrows and read their labels first: one is the scarf moving, the other is the phone being moved between shots, and they are different kinds of movement even though both are arrows. Both camera setups sit on the same side of the table. Schematic top view, not to scale.`,
        items: [
          { label: 'Tote', detail: 'Left; keep its opening visible.', x: 23, y: 25, shape: 'object' },
          { label: 'Scarf', detail: 'Starts on the right.', x: 75, y: 25, shape: 'object' },
          { label: 'Wide setup', detail: 'One phone sees both objects.', x: 23, y: 75, shape: 'camera' },
          { label: 'Close setup', detail: 'Alternative phone position for the lift.', x: 75, y: 75, shape: 'camera' },
        ],
        arrows: [{ from: 1, to: 0, label: 'scarf moves' }, { from: 2, to: 3, label: 'setup change' }],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Paper and pen', 'Scarf and tote', 'Optional supported phone'],
      steps: [
        `Put the scarf on the right and the tote on the left of a stable surface, then draw three numbered rectangles in the orientation you will hold the phone. Boxes and hatched strips are enough; the board is a napkin map, not a picture.`,
        `Under each panel write the framing, the action, and the sound, and label every arrow as subject movement, camera movement, or setup change. An unlabelled arrow is the one thing that can send the shoot the wrong way.`,
        `Stand at each proposed phone position in the permitted room, with your own hands or a willing performer in place, and look. If the tote's near side hides the scarf going in, redraw that panel now rather than leaning over furniture later.`,
        `Keep the revised board plus a one-panel continuous-wide fallback. Without a phone, mark the framing as unchecked instead of describing the scene as shot.`,
      ],
      notice: `The board separates three things that a rough drawing usually muddles: the scarf's path, the framing of each view, and the moments the phone is moved between shots. Someone else could pick it up and know what moves, where the camera is, and what they should hear.`,
      troubleshooting: `If an arrow could be read two ways, write the name of what moves beside it; the friend with the napkin map needs to know whether they walk or the bus does. If the close view hides the action, widen that panel before you add another setup, because more positions do not fix a view that cannot see the scarf. If a panel can only be achieved by leaning somewhere unsafe, the panel is wrong, not you.`,
    },
    recall: {
      prompt: 'A board has one unlabeled arrow for a person crossing right and a following camera. What needs clarification?',
      hint: 'The subject and camera have separate movements.',
      answer: `Split it into two labelled notes: person crosses right, and camera follows, each with its direction and framing. One arrow for both is the napkin map that does not say whether you walk or the bus goes. And if the camera does not actually follow within the shot but is picked up and placed elsewhere between cuts, that is a setup change and gets its own label, because the viewer never sees it move.`,
    },
    quiz: {
      question: 'Your board requires an overhead view that cannot be supported safely. What preserves the planned action most directly?',
      options: ['Redraw a stable angled view that still shows the tote opening and scarf path.', 'Keep the drawing unchanged and decide the safe framing only after filming.', 'Remove the packing panel and rely on the audience to infer the whole action.'],
      correctIndex: 0,
      explanation: `The board is provisional and the action is what matters, so redrawing a stable angled view that still shows the tote opening and the scarf's path keeps the scene and loses only an unsafe angle. Leaving the drawing unchanged postpones the problem to the moment you are holding the phone over furniture, and removing the packing panel throws away the payoff the three panels were leading to.`,
    },
    takeaway: 'A usable storyboard specifies the view, the action, and the sound, then survives a safe location check.',
    sourceNote: 'Shot-list and staging references support these original scarf plans. No copied frames or recorded footage are supplied.',
  },
  {
    id: 'cinema-060',
    outcome: `Rehearse a timed storyboard with real seconds, move hold time to the panel whose information is not landing, keep the total the same, and record planned and measured durations separately.`,
    scene: 'A closed note reveals OTHER SIDE, then a star on its reverse.',
    sections: [
      {
        title: 'A clue has almost no time on the board',
        paragraphs: [
          `Your three-panel scene is a small puzzle. A closed note. The note opened, showing the instruction OTHER SIDE. The card turned over to reveal a star. You write the timings beside the panels: three seconds on the closed note, one second on the instruction, four seconds on the star. Eight seconds, neat and tidy. Then you show it to a friend by holding up the three drawings in turn, and they say: wait, what did the middle one say?`,
          `The middle panel is the only one with information the viewer must read, and you gave it the least time. On paper that looked fine, because you already knew what it said. Whether one second is enough is a question to test, not a rule; it depends on the size of the lettering, how familiar the phrase is, and how much else is changing in the frame at the same moment.`,
        ],
      },
      {
        title: 'Experience the proposed time instead of imagining it',
        paragraphs: [
          `Think about a road sign on a bend. The person who designs the sign can stare at the drawing all afternoon and still not know whether a driver can read it, because the driver gets it for a second and a half at forty miles an hour. The only honest check is to drive the road at the speed the drivers will. If the sign cannot be read, there are two fixes: slow the traffic down at that point, or make the letters bigger. Staring harder at the drawing is not one of them.`,
          `A timed storyboard, sometimes built out into an animatic, is driving the road. It shows the planned views in order, each for its planned duration. No animation is needed. Hold your paper panels up one at a time while watching a clock, or record them in sequence on your phone and play it back. Say any planned sound cue softly yourself; do not add borrowed music. Watch for the moment the instruction becomes readable, and notice whether the star is still sitting there long after it has told you everything.`,
          `The flips between paper panels are placeholders for cuts, not the cuts themselves. Do not judge their smoothness. Judge whether the information arrived.`,
        ],
      },
      {
        title: 'Move time to the unresolved information',
        paragraphs: [
          `Try a second allocation with the same total. Three seconds for the closed note, three for the instruction, two for the star. You have slowed the traffic on the bend by taking two seconds from the straight, where the star had more time than it needed. Eight seconds still. Drive it again and ask the same question: can this particular instruction be read without rushing, before the card turns?`,
          `Keep two numbers apart in your notes. The plan says eight seconds. The recording of your rehearsal may run ten, because fumbling the paper between panels costs time. Write both down with their labels, planned and measured, and do not force them to agree; the handoffs will not exist in a real edit. Then write one reason for the version you chose, such as the clue reads before the turn. If both versions are still unclear, the letters are too small or the action too busy. Make the lettering bigger or simplify what moves. More seconds is not the only repair, and it is often the wrong one.`,
        ],
      },
      {
        title: 'Staring at the drawing',
        paragraphs: [
          `The first mistake is trusting your own reading speed. You wrote OTHER SIDE; you cannot un-know it, so you will always read it in time. Check the letter size against the frame and, if you can, show the sequence to someone who has not seen it, without claiming that one person's reaction predicts everyone's. The second is fixing the clue by making the whole thing longer. Moving time is a decision; adding time is avoiding one. The third is writing the measured ten seconds down as if it were the plan, or the planned eight as if it were what you recorded.`,
          `A fourth mistake is reading the rehearsal's ten seconds as a rule for the edit. The rehearsal exposed the cost of your paper handoffs. It did not decide the final length of anything.`,
          `Two habits. Never approve a hold time you have only imagined; hold the panel for that many real seconds and watch what happens. And when a panel is not landing, look first at what you can take from a panel that has already finished its job.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'First timing plan: eight seconds',
        alt: 'Closed note: three seconds; instruction: one second; star: four seconds.',
        caption: `Look at the middle box first and read its number: one second for the only panel that must be read, the sign on the bend at forty miles an hour. Then compare it with the four seconds the star gets after it has nothing left to say. Proposed holds, not measured footage; box widths are not proportional.`,
        items: [
          { label: 'Closed note', detail: '3 seconds: establish the card.' },
          { label: 'OTHER SIDE', detail: '1 second: instruction must be read.' },
          { label: 'Star revealed', detail: '4 seconds: hold the result.' },
        ],
      },
      {
        type: 'timeline',
        title: 'Revised plan: still eight seconds',
        alt: 'Closed note: three seconds; instruction: three seconds; star: two seconds.',
        caption: `Check the total first, still eight, then see where the two seconds went: from the star to the instruction, slowing the traffic on the bend without lengthening the journey. Planned holds for this one card, not reading-time recommendations for anything else.`,
        items: [
          { label: 'Closed note', detail: '3 seconds: unchanged opening.' },
          { label: 'OTHER SIDE', detail: '3 seconds: more time for the instruction.' },
          { label: 'Star revealed', detail: '2 seconds: shorter final hold.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Three original paper panels', 'Pen', 'Clock or optional phone timer and camera'],
      steps: [
        `Draw the closed note, the opened note with a large OTHER SIDE, and the star, and write the first plan's holds beside them: three, one, and four seconds. Writing the numbers down is what makes the rehearsal a test of something.`,
        `Hold up or record each panel in order for exactly those durations, watching a clock, with any sound cue spoken softly and only your own drawings in frame. This is driving the road at the drivers' speed.`,
        `Repeat with three, three, and two seconds, and note the real time your handoffs added as a separate measured figure. The recording will not be exactly eight seconds and should not be described as if it were.`,
        `Choose a version and write one sentence saying why its clue is readable. A live paper rehearsal is enough; label it a timing test, not a finished film.`,
      ],
      notice: `Your revision gave more time to the one panel that was not being read and took it from a panel that had finished its job, while the planned total stayed at eight seconds. Your notes carry two labelled numbers, planned and measured, and nobody reading them could mistake one for the other.`,
      troubleshooting: `If you can read the clue easily at one second, that may be because you wrote it; check the letter height against the frame and, if possible, show the sequence to a willing viewer who has not seen it, without treating one reaction as a rule. If neither allocation makes the clue land, stop moving seconds around and enlarge the lettering or simplify what is changing in the frame; time was not the problem.`,
    },
    recall: {
      prompt: 'A route arrow is clear, but the next destination label disappears before it is readable. What timing experiment fits?',
      hint: 'Identify which panel still has information to deliver.',
      answer: `Move hold time from the arrow, which has already done its job, to the destination label, which still has information to deliver, keeping the total the same, then rehearse the sequence for real seconds and see whether the label reads. That is slowing the traffic on the bend. Check the lettering size as well, since bigger letters may be the real fix, and write the planned holds and the measured rehearsal time as two separate figures.`,
    },
    quiz: {
      question: 'An eight-second plan records as ten seconds including panel handoffs. What should the notes say?',
      options: ['Eight seconds, because that was the planned total.', 'Ten seconds proves every final edit must be ten seconds.', 'Eight seconds planned; ten seconds measured in this rough rehearsal, including handoffs.'],
      correctIndex: 2,
      explanation: `The two numbers mean different things and both belong in the notes with their labels: eight seconds is what you planned, ten is what the rough rehearsal measured once the paper handoffs were included. Writing only eight hides what the rehearsal cost; reading ten as a rule for the final edit mistakes the clumsiness of flipping paper for a decision about the film, when the real cuts will have no handoffs at all.`,
    },
    takeaway: 'Rehearse chosen holds, revise the unreadable moment, and distinguish the timing plan from the recording.',
    sourceNote: 'Shot-list and Yale editing references support these original timing plans. No animation or export is supplied.',
  },
  {
    id: 'cinema-061',
    outcome: `Take a craft question from a film you admire, not its scene, and turn it into a one-sentence premise with a visible change you can stage in one room with objects you already own.`,
    scene: 'A discarded draft becomes a folded invitation through its blank reverse.',
    sections: [
      {
        title: 'Keep the question, not the borrowed scene',
        paragraphs: [
          `You have just watched a film you love and you want to make something. The first instinct is to remake the bit you loved: the same staging, a line of the dialogue, the song underneath. Stop there, because none of it is yours to use and none of it is what you actually learned. What struck you was probably something smaller and more portable. The way an object quietly changed its job. The way a sound came back. That is the thing to carry out of the cinema.`,
          `Soham Gadre's BFI essay on Mani Ratnam's Dil Se.. is an optional critical reference, with spoilers, if you want a worked example of someone reading a film closely. Two cautions come with it. Dil Se.. is a Hindi-language film, and a filmmaker associated with Tamil cinema can work in other languages, so not everything he made is Kollywood. And an essay is a critic's reading, not proof of what the director intended. Take from it a question, not a verdict. The question here is: can an ordinary object change its function clearly enough to carry a short scene with no explanation?`,
        ],
      },
      {
        title: 'Make the change visible and small enough to stage',
        paragraphs: [
          `Think about eating at a restaurant and admiring a cook. You do not go home and try to rebuild their signature dish with their ingredients, their kitchen, and their name on the menu. You go home with a question: how did they get the sauce so glossy? Then you open your own fridge and find out with what is in it. The question travelled. The dish stayed where it belonged. And the answer you find in your kitchen is genuinely yours, even though the question was borrowed.`,
          `A premise is the dish you can cook: a compact account of a situation and its change, not a shopping list of equipment. Here is one from your own fridge. A writer has given up on a draft covered in crossing-out marks. They turn the sheet over, write a short invitation on the blank side, and fold it. Rejected draft becomes usable object. One performer, one room, paper you already own.`,
          `The audience has to see both sides for the change to register: the crossed-out face, then the blank face being written on and folded. A sentence in your notes explaining that the draft was abandoned does nothing for a viewer. If they cannot see the old use and the new use, the premise has not been staged, only described.`,
        ],
      },
      {
        title: 'Compare premises against what you can actually show',
        paragraphs: [
          `Write two rivals to test the first idea against. Finding a loose button in a coat cuff and sewing it on. Turning a scarf into a wrap for a book. For each of the three, write the visible beginning, the obstacle, and the changed ending. The draft-to-invitation idea wins if you can make both faces of the paper readable on camera. Use your own invented crossing-out marks and a fictional greeting, never a real message or a real name.`,
          `Keep the sound as plain as the premise: paper noises you make yourself, or no music at all. And keep two notes apart in your plan. One names the broad craft influence, the question you carried home. The other describes the invented action, which owes the film nothing. That way you explore a question worth exploring without claiming to reproduce anyone's methods, without borrowing a protected scene, and without needing a location you cannot reach after work.`,
        ],
      },
      {
        title: 'Ordering the signature dish to go',
        paragraphs: [
          `The first mistake is remaking the scene. A copied staging with a famous song under it teaches you nothing about your question and gives you a film you cannot show anyone. The second is a premise whose ending is only a feeling: she realises something. A viewer cannot see a realisation. Add an observable choice or a changed object, like the folded invitation, that carries it. The third is a premise that needs what you do not have: several locations, a second performer, a borrowed soundtrack. Shrink the event until your fridge can feed it.`,
          `A fourth mistake is writing the influence into the premise, so that the plan reads as a tribute rather than a scene. Record the influence separately and let the action stand alone.`,
          `Two habits. Leave every film with one question written down and no scene copied. And before keeping a premise, list the exact views a viewer would need to see the change, then check you can make each one in a room you are allowed to use.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A discarded draft gets a new use',
        alt: 'A crossed-out draft turns over and becomes a folded fictional invitation.',
        caption: `Read the three boxes as beginning, turn, and changed ending, and check that each one is something a camera could show: marks, a hand turning the sheet, a fold. That is the whole premise cooked from your own fridge. Original objects and actions, not a recreation of any scene from the optional BFI reference.`,
        items: [
          { label: 'Crossed-out draft', detail: 'Original marks establish the abandoned use.' },
          { label: 'Blank reverse', detail: 'A hand turns the sheet; a usable side appears.' },
          { label: 'Folded invitation', detail: 'A fictional greeting and fold establish the new use.' },
        ],
      },
    ],
    practice: {
      minutes: 8,
      needs: ['Scrap paper', 'Pen', 'Optional phone notes'],
      steps: [
        `Write one craft question in a single sentence without naming any scene to copy, such as how an object can be seen to change its job. The question is what you carry home; the scene stays in the cinema.`,
        `Draft three one-sentence premises using only objects you already own, each with a visible beginning and a visibly changed ending. Three rivals make the strengths of one easier to see.`,
        `Choose the premise that fits a room you are permitted to use and your own performance, and list the exact views a viewer would need in order to see the change. If a view cannot be made, the premise is not yet stageable.`,
        `Strike out any private text, borrowed music, or extra location, then keep the premise and a rough frame plan. Describe it as a plan, not as a film you have made.`,
      ],
      notice: `The premise you kept can be explained in a few visible actions, with no dependence on a famous plot or soundtrack, and your notes hold the craft influence and the invented action as two separate lines. Someone reading only the second line would see a complete small scene.`,
      troubleshooting: `If the ending is a feeling rather than a thing, add an observable choice or a changed object that shows it, the way the fold shows the new use. If the premise keeps asking for resources you lack, do not go looking for them; reduce the event until what is in your fridge is enough. If the plan reads like a tribute, move the film's name out of the premise and into a separate influence note.`,
    },
    recall: {
      prompt: 'You admire how a film repeats a sound, but have only a room, a zip pouch, and paper. How could you create an original small test?',
      hint: 'Transfer the question about repetition, not the original music or scene.',
      answer: `Carry home the question, what a repeated sound does, and cook it from your fridge: invent a pouch-packing action in which your own zipper sound is heard before and after a visible packing decision, so the repetition frames the change. Keep the situation, the sound, and the recording your own, or plan it on paper if you cannot record. The film's music and scene stay where they are.`,
    },
    quiz: {
      question: 'Which premise most directly tests an object changing function within one room?',
      options: ['A person explains in narration why an unseen journey changed their life.', 'A crossed-out draft turns over and becomes a folded invitation on screen.', 'A montage visits several locations while repeating a favorite film song.'],
      correctIndex: 1,
      explanation: `The draft becoming an invitation puts the old use and the new use on screen in one room with paper you own, which is exactly the question cooked from your own fridge. Narration about an unseen journey describes a change without showing one, and the montage needs several locations and a song you have no right to use, so it tests your resources and your permissions more than it tests the idea.`,
    },
    takeaway: 'Borrow a broad craft question, then invent a visible change you can stage with your own resources.',
    sourceNote: 'The inherited BFI essay is optional criticism, not a director account or a template. The premises here are original and use no quoted film material.',
  },
  {
    id: 'cinema-062',
    outcome: `Write a production plan that records the complete event in one wide shot first, treats detail shots as optional extras, lists real constraints, and marks anything unchecked as unchecked.`,
    scene: 'Turning a rectangular sheet before rerolling makes its paper roll fit a bag.',
    sections: [
      {
        title: 'Plan the complete event before extra coverage',
        paragraphs: [
          `Your scene has a small practical problem at its heart. A rectangular sheet rolled along one edge makes a roll too long for the bag. The performer unrolls it, turns the sheet, rolls from the other edge, and the shorter roll slides in. Before you write a single shot, pick up the actual paper and the actual bag and try both rolls. If both fit, or neither does, there is no scene yet, and no camera position will invent one. The contrast has to exist in the objects first.`,
          `Once it does, notice how little the scene needs. One wide view can show the whole event: the long roll failing, the turn, the short roll succeeding. A close view of the turn, or a closer view of the final fit, might help a viewer understand one specific part. Might. They are not the scene. The wide view is.`,
        ],
      },
      {
        title: 'Resources include quiet and a repeatable reset',
        paragraphs: [
          `Think about cooking for guests. The sensible cook gets the main dish fully made before touching the garnish. If the herb oil splits or the time runs out, there is still dinner on the table. The cook who starts with the garnish and runs out of time has a beautiful drizzle and nothing to put it on. And before any of that, the sensible cook checks the fridge, the oven, and the clock, and writes down what is actually there rather than what they hope is there.`,
          `A production plan is that fridge check. It translates the story into things you can actually arrange: a room you have permission to use, a phone on a stable support, the light that is there, enough battery and storage, a clear surface, and a time you will stop. Write down what your phone really supports. Can it join clips? Can it record separate audio? If you do not know, the honest entry is unchecked, not probably. Daylight through a window is fine if it stays steady for the few minutes you need; do not rig up anything hazardous to improve it. And leave equipment that needs to run, running.`,
          `One resource people forget is the reset. Between takes, paper, bag, and hands go back to their starting positions, so that the next take begins the same way. A scene you can only perform once is a scene you cannot fix.`,
        ],
      },
      {
        title: 'Assign each shot a job and a fallback',
        paragraphs: [
          `Name the shots by their jobs. A is the complete wide view, the main dish: it must show the roll that is too long, the turn, and the successful fit, with the bag opening visible throughout. B is an optional detail of the unrolling and turning. C is an optional closer view of the final fit. Record A first, and record it until you have one good complete take. Then, if time and battery allow, reset and record B, reset and record C, keeping the camera on the same side so the action travels the same way in every shot.`,
          `Now the fallback. If your phone cannot join clips, A is not a compromise; A is the film, and the plan should say so in those words. If the room, the phone, or the permission is not available, finish the paper production map anyway and write recording not yet done beside it. A plan with an honest gap is a plan. A plan that pretends the gap is filled is a problem waiting for the shoot.`,
        ],
      },
      {
        title: 'Starting with the garnish',
        paragraphs: [
          `The first mistake is shooting the details first because they are more interesting, then running out of time or battery before the wide view exists. You have a drizzle and no dinner. The second is writing a plan around capabilities you have not checked, such as separate audio tracks or clip joining, and discovering at the edit that the plan depended on them. The third is skipping the fridge check on the objects themselves and finding on the day that both rolls fit the bag.`,
          `A fourth mistake is treating the single-shot version as a failure that justifies new equipment. A complete event in one wide view is a complete event. The equipment would only let you add garnish.`,
          `Two habits. Before any plan, test the physical contrast your scene depends on with the real objects. And in every shot list, mark one shot as the complete version, record it first, and write the fallback sentence that says this shot alone is the film.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Keep the opening and roll visible',
        alt: 'A supported phone faces the paper and bag beside existing daylight.',
        caption: `Start at the supported phone and check that both the paper work area and the bag opening fall inside its view, because shot A has to see the whole main dish at once. Then follow the fit-test arrow from paper to bag. The daylight is whatever is already there, used as found. Top view, not to scale; keep surfaces and exits clear.`,
        items: [
          { label: 'Paper work area', detail: 'Unroll, turn, and reroll here.', x: 22, y: 27, shape: 'paper' },
          { label: 'Bag opening', detail: 'Show both the failed and successful fit.', x: 75, y: 27, shape: 'object' },
          { label: 'Supported phone', detail: 'Wide view contains the complete action.', x: 22, y: 76, shape: 'camera' },
          { label: 'Existing daylight', detail: 'Observe changes; no improvised rig.', x: 75, y: 76, shape: 'light' },
        ],
        arrows: [{ from: 0, to: 1, label: 'fit test' }],
      },
      {
        type: 'flow',
        title: 'A complete shot before optional details',
        alt: 'Complete shot A precedes optional detail B and fitted ending C.',
        caption: `Read the first box as the main dish and the next two as garnish: A carries the problem, the turn, the reroll, and the fit on its own, so it is recorded first, and B and C are only attempted after it exists. A planned production order, not recorded coverage. A alone works with no clip joining at all.`,
        items: [
          { label: 'A: complete wide', detail: 'Problem, turn, reroll, fit. Record this first.' },
          { label: 'B: turn detail', detail: 'Optional; reset the same sheet before the take.' },
          { label: 'C: fitted ending', detail: 'Optional; match the bag and shorter roll.' },
        ],
      },
    ],
    practice: {
      minutes: 10,
      needs: ['Rectangular paper and suitable bag', 'Pen', 'Optional phone camera'],
      steps: [
        `Roll the sheet gently both ways and try each roll in the bag. If both fit, choose another sheet or bag you already have, or revise the premise; the scene lives in that contrast, and the camera cannot supply it.`,
        `List permission, phone support for joining clips and separate audio, light, normal room sound, battery, storage, and a stopping time, and write unchecked beside anything you have not actually confirmed. That is the fridge check.`,
        `Draw A, B, and C with one job each, A being the complete wide view. Test a brief wide take only if the room and the recording permissions are suitable, and record A before anything else.`,
        `Cross out one optional setup and write the single-shot fallback in a full sentence: shot A alone is the film. Keep the paper plan if recording is unavailable, labelled as a plan rather than coverage.`,
      ],
      notice: `The event is complete without the optional close views, and your plan says so in writing. Every resource on the list is either confirmed or marked unchecked, and the first thing on the shooting order is the one shot that cannot be missing, the main dish before any garnish.`,
      troubleshooting: `If the turn looks unexplained in the wide view, the viewer could not see the roll fail to fit; reposition the bag or the phone safely so the opening and the too-long roll are both visible, before you add any extra shot. If a capability you assumed turns out to be missing, do not go shopping; promote A to the film and move on. If the physical contrast is weak, change the paper or bag, not the shot list.`,
    },
    recall: {
      prompt: 'A laundry-folding short needs three views, but storage is limited and clips cannot be joined. What would you prioritize?',
      hint: 'Preserve the whole event before collecting fragments.',
      answer: `The main dish: one wide view that shows the unfolded pile becoming the folded stack from start to finish, recorded first, since without clip joining that single shot is the film. Check the free storage without deleting any originals before you start, and treat the two detail views as garnish you may never get to. If recording is not possible at all, keep the plan and mark it not yet shot.`,
    },
    quiz: {
      question: 'You have time for only one setup in the paper-roll scene. Which shot preserves the most complete story?',
      options: ['The wide view containing the initial problem, reroll, and successful fit.', 'The close view of the finished roll without its earlier problem.', 'The detail of hands turning paper without showing the bag.'],
      correctIndex: 0,
      explanation: `The wide view holds the cause and the change together: the roll failing to fit, the turn, and the fit that follows, which is the whole dinner in one dish. The close view of the finished roll shows a result with no problem to explain it, and the turning hands without the bag show an action with no reason, so each is garnish that only makes sense next to a wide view that already exists.`,
    },
    takeaway: 'Map each shot to necessary information and protect a complete version within actual constraints.',
    sourceNote: 'Shot-list and Apple references inform this original unrecorded plan; device support varies.',
  },
  {
    id: 'cinema-063',
    outcome: `Rehearse the whole scene, ask a viewer what changed and what showed it without telling them the story first, then fix the one cue they could not see and time the second run.`,
    scene: 'A hand hides the initial paper-roll fit problem during rehearsal.',
    sections: [
      {
        title: 'The rehearsal reveals a missing piece of the story',
        paragraphs: [
          `You rehearse the paper-roll scene from start to finish. The long roll will not go into the bag, so you unroll it, turn the sheet, reroll, and pack it. Performing it, the reason for the turn is obvious; you can feel the roll jam against the bag. Then you watch the playback. During that first fit test, your hand is over the bag opening. The viewer sees a hand and some paper. They never see the roll fail to fit, so they never learn why anything that follows happens.`,
          `Rehearsing the whole action caught this. Checking only the ending would not have, because the ending looks lovely: a short roll sliding neatly into a bag. A scene needs its visible beginning and its changed action as well as its outcome. The successful last image is only satisfying to the one person who remembers the problem, and that person is you.`,
        ],
      },
      {
        title: 'Ask for what was understood before explaining',
        paragraphs: [
          `Think about writing directions to your house for a friend. You know the route so well that you skip a turn without noticing. If you hand over the directions and say, you turn left at the church, then right, you have just told them the route, and the test is spoiled. The useful thing to say is: read these and tell me where you would end up. If they say they would end up at the river, you have found the missing turn. If you argue that the turn was obvious, you have learned nothing and kept the fault.`,
          `Do the same with the clip. Ask a willing viewer to watch it cold and then tell you what changed, and which moment showed them. Do not introduce it by saying the roll is too long; that is the left turn at the church. A useful answer sounds like: I saw the paper turn, but I did not know why. Ask where the uncertainty began, then listen without defending the shot.`,
          `Keep the scale of the evidence in mind. One person's answer is feedback about one viewing, not proof that every audience would be lost. If you review alone, you can still do it, but write down that you knew the route, because familiarity is a real limitation on your own judgement.`,
        ],
      },
      {
        title: 'Fix one visible obstruction and rehearse again',
        paragraphs: [
          `The viewer told you where they ended up at the river: the first fit test. So fix that and only that. Move your hand clear of the bag opening during the first attempt and hold the long roll beside the opening for long enough to be inspected. Keep the camera position and everything else as it was, so that when you compare the two rehearsals, the one change is the only difference between them.`,
          `Time the whole rehearsal with the recording display or a clock. Do not assume it lasts a minute because a minute was the goal. Replay the corrected version, or ask for another willing viewing, and write down two things: the actual duration, and one issue that remains. Keep performers, private documents, and the rehearsal inside whatever permissions were agreed. Nothing here needs posting anywhere or buying anything; the repair was a hand moving three inches.`,
        ],
      },
      {
        title: 'Telling them where the church is',
        paragraphs: [
          `The first mistake is the leading question. Did you notice the roll was too long before I turned it? hands over the missing turn and gets a polite yes. Would the bag problem be clearer with a closer shot? proposes a fix before anyone has said what they understood. The open question, what changed and what showed you, is the only one that tests the directions. The second mistake is treating one viewer's confusion as a verdict on all viewers, or one viewer's nod as proof the scene works.`,
          `The third mistake is fixing several things at once after feedback, so you cannot tell which change helped. The fourth is accepting nice or a bit slow as feedback; ask which action was understood and where it became unclear, without suggesting the answer you hope for.`,
          `Two habits. Rehearse the full event every time, beginning to end, and never judge it from the ending alone. And before you explain anything about a scene, ask the viewer to tell you what they saw.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Feedback locates the hidden fit test',
        alt: 'A viewer misses the reason for turning paper because a hand hides the opening.',
        caption: `Read the maker's two lines first and notice neither one mentions the long roll or proposes a fix; they only ask what was seen, like asking where the directions would lead. The viewer's answers then point straight at the covered opening. An invented rehearsal exchange, not a general audience result.`,
        items: [
          { label: 'Maker', detail: 'What changed, and which moment showed you that?' },
          { label: 'Viewer', detail: 'The paper turned and went in the bag. I did not see why it needed turning.' },
          { label: 'Maker', detail: 'What could you see during the first attempt to put it in?' },
          { label: 'Viewer', detail: 'Mostly your hand. The bag opening was covered.' },
        ],
      },
    ],
    practice: {
      minutes: 12,
      needs: ['Paper and bag, or your existing safe scene plan', 'Optional phone camera', 'Clock', 'Optional willing viewer'],
      steps: [
        `In a room you may use, with your own performance, check that the roll really fails one way and fits the other, clear away anything private, and support the phone if you are recording. The contrast is the fact the viewer has to be able to see.`,
        `Rehearse the complete action from the first failed fit to the packed bag, and measure how long it actually took rather than writing down the minute you planned. The ending alone would hide the covered opening.`,
        `Review the playback yourself or ask a willing viewer, without introducing the story, what changed and what showed them. Write down the cue they saw and the moment they became unsure; that moment is the missing turn.`,
        `Change the one obscured cue, rehearse again with everything else the same, and compare. Without a camera, perform to a paper frame and label the result a live rehearsal, not a saved film.`,
      ],
      notice: `Your correction answers a specific missing cue that someone actually failed to see, not a general wish for the scene to be better, and your notes carry a measured duration or an honest statement that you could not time it. The viewer told you where they ended up, and you fixed that turn.`,
      troubleshooting: `If the feedback you get is nice, fine, or a bit slow, you have not yet asked a question that can be answered with information; ask which action they understood and where it stopped making sense, and resist adding any hint about the roll. If you reviewed alone and everything seemed clear, write down that you knew the route, and if possible find one fresh viewer before trusting that verdict.`,
    },
    recall: {
      prompt: 'A viewer misses a brief sock mismatch in your laundry scene. What should you ask before explaining it?',
      hint: 'Find their information, not agreement with your intended plot.',
      answer: `Ask what changed in the scene and which item they noticed before the change, without mentioning socks or a mismatch, the way you ask where the directions would lead rather than pointing out the church. Their answer tells you whether the mismatch was ever readable. Then fix that one cue, perhaps by holding the odd pair up longer or closer, instead of supplying the answer and asking them to confirm it.`,
    },
    quiz: {
      question: 'Which question best checks whether a rehearsal communicates its change without feeding the answer?',
      options: ['Did you notice the roll was too long before I turned it?', 'Would the bag problem be clearer with a closer shot?', 'What changed during the scene, and what showed you the change?'],
      correctIndex: 2,
      explanation: `Asking what changed and what showed it leaves the viewer to supply their own account, which is the only way to learn where the directions actually led them. Asking whether they noticed the roll was too long hands them the missing turn and invites a polite yes, and asking about a closer shot proposes a repair before anyone has said what they understood.`,
    },
    takeaway: 'Rehearse the whole event, locate an unclear cue, and test one correction without coaching the viewer.',
    sourceNote: 'Directing and shot-list references support rehearsal. This invented exchange does not establish general audience responses.',
  },
  {
    id: 'cinema-064',
    outcome: `Finish a short by playing the saved file from start to end and recording what it actually is, real duration included, or by naming the unfinished stage honestly when nothing could be saved.`,
    scene: 'A continuous paper-roll packing film aims for a checked minute.',
    sections: [
      {
        title: 'Give the minute a beginning, change, and ending',
        paragraphs: [
          `This is the last step: a finished minute. Use your own prepared scene, or the paper-roll story that has run through these lessons. The long roll does not fit, turning the sheet changes the roll, and the shorter roll goes into the bag. One way to spend sixty seconds on it: ten seconds on the first failed fit, fifteen on unrolling and turning, twenty on rerolling, and fifteen on the successful fit and a readable ending. Those are planning holds, invented for this card. They are not a rule about pacing.`,
          `Rehearse with the real paper and the real bag, and move seconds around inside the minute if a movement needs more time or a clue needs less. What you must not do is skip the beginning or the change to get to the ending faster. A minute of ending is not a scene.`,
        ],
      },
      {
        title: 'A saved recording can be the complete version',
        paragraphs: [
          `Think about printing something important. The document looks perfect on your screen. You press print, pick up the page, and the last line is missing because the printer cut it off. Nobody who receives that page will ever see your screen. They get the page. So the person who checks the printout, holds it, and reads it to the end is the one who has finished. The person who saw it on screen and said done has not.`,
          `A short film works the same way. If your phone cannot join clips, record one continuous view of the whole event; that is a complete version, not a lesser one. If you do have editing tools, keep the original untouched and make every change on a copy. Aim for sixty seconds with a timed rehearsal and whatever trim control your phone really supports, and do not assume the saved file matches the board. Then do the printout check. Play the saved recording, or the exported copy, from the first frame to the last. Opening the editing project is looking at the screen. Only the saved file is the page.`,
          `While it plays, check five things: the orientation is right, the action can be read, the sound sits at an ordinary listening level, the final frame is the one you meant, and the duration the player reports is written down.`,
        ],
      },
      {
        title: 'Describe the result you actually have',
        paragraphs: [
          `Now write down what exists. If the file runs sixty-two seconds and you cannot trim it, the note says sixty-two seconds, not about a minute. If no recording was possible, the note says paper plan, not yet recorded, because a plan is good preparation and is not a phone film. If you exported but never played the export, the note says export unplayed, because an unplayed export is a page still in the printer tray. Each of those is an honest, useful sentence. None of them is finished, and none of them pretends to be.`,
          `Keep the result private unless every performer and every location permission covers the sharing you intend, and leave out anything that is not yours: real messages, uncleared sound. Then choose one concrete improvement for next time, such as making the first failed fit easier to see, write it down, and stop. Finishing means checking a real artifact when one exists. It does not mean polishing without end, and it does not mean promising that the next app will finish it for you.`,
        ],
      },
      {
        title: 'Calling the screen the page',
        paragraphs: [
          `The first mistake is reporting the plan as the result. The board said sixty, so the note says sixty, and nobody has checked. The second is reporting the project as the output: the editor opens and shows the ending, therefore it is done. That is the screen, not the page. The third is rounding: a sixty-one-second saved take with no trim control is a sixty-one-second film, and the honest note says so and adds that an exact-minute trim was unavailable.`,
          `A fourth mistake is destruction in the name of finishing: deleting source takes to make space for an export, or forcing an unfamiliar tool at the last minute. If an export fails, keep the original, write down the failure, and stop for the day. A fifth is never stopping at all.`,
          `Two habits. Before you write finished, play the saved file from start to end and write the duration the player shows. And when something could not be done, write the stage it reached in plain words, so the next session starts from the truth.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'One proposed minute for the paper roll',
        alt: 'Fit problem: ten seconds; turn: fifteen; reroll: twenty; fitted ending: fifteen.',
        caption: `Add the four numbers first and confirm they reach sixty, then notice that this is a plan for the screen, not a measurement of any page that has been printed. The saved file will have its own duration, and that is the number that goes in the finishing note. Boxes are not proportional; no completed recording is claimed.`,
        items: [
          { label: 'Fit problem', detail: '10 seconds: show the long roll beside the opening.' },
          { label: 'Unroll and turn', detail: '15 seconds: reveal the change of paper direction.' },
          { label: 'Reroll', detail: '20 seconds: make the shorter roll legibly.' },
          { label: 'Fit and ending', detail: '15 seconds: place it inside; hold a readable result.' },
        ],
      },
    ],
    practice: {
      minutes: 15,
      needs: ['Phone camera if available', 'Paper and suitable bag', 'Stable phone support', 'Clock and notes'],
      steps: [
        `Spend three minutes checking permission, the paper-and-bag fit, free storage, battery, a stable framing, and a background with nothing private in it. Finding a problem now costs three minutes; finding it in the saved file costs the take.`,
        `Spend two minutes rehearsing against a clock, keeping the failed fit and the changed ending both visible. The rehearsal is where seconds get moved, not the recording.`,
        `Spend five minutes recording up to two quiet takes, as one continuous view if your phone cannot join clips. Two takes is enough; a third is polishing.`,
        `Spend five minutes trimming a copy if your phone supports it, then play the saved result from the first frame to the last and write down the duration the player shows and one improvement for next time. If nothing was recorded, label the paper plan unfinished in those words.`,
      ],
      notice: `You hold one of two honest things: a saved file you have watched from beginning to end, with its real duration written beside it, or a plainly named unfinished stage such as not yet recorded or export unplayed. Either way, the note describes the page, not the screen.`,
      troubleshooting: `If the export fails or the saved copy comes out sideways or short, keep the original take safe and write down exactly what happened; do not delete source takes to make room, promise a finished export you have not seen, or install an unfamiliar tool at the last minute. If the saved file runs long and you cannot trim, record the true duration and move on. The session ends when the note is honest, not when the file is perfect.`,
    },
    recall: {
      prompt: 'A garden-object short plays correctly in an editor, but its saved copy is sideways and misses the ending. What would count as finishing?',
      hint: 'The audience receives the saved artifact, not your editing preview.',
      answer: `Fixing the orientation and the cut-off ending in a new export if your tools allow, then playing that saved copy from start to finish and confirming the last frame is there. The editor preview is the screen; the sideways file is the page the audience would actually get. Until a saved copy has been watched to the end, the honest note reports the output problem and the stage reached, not completion.`,
    },
    quiz: {
      question: 'Your phone saved a complete sixty-one-second take, but has no supported trim control. Which completion note is accurate?',
      options: ['Exactly sixty seconds, because the storyboard total was sixty.', 'Checked continuous take: sixty-one seconds; exact-minute trim remains unavailable.', 'Finished export: the editing project opens and displays the planned ending.'],
      correctIndex: 1,
      explanation: `The accurate note describes the saved file you actually played: a checked continuous take of sixty-one seconds, with the exact-minute trim noted as unavailable rather than invented. Writing sixty because the board said sixty reports the plan as the result, and calling an open editing project a finished export mistakes the screen for the printed page the audience would receive.`,
    },
    takeaway: 'Check the actual saved film and its duration; label a plan, failed export, or unfinished trim honestly.',
    sourceNote: 'Apple and Blackmagic supply optional technical references; tools vary. This original exercise includes no completed or verified export.',
  },
]