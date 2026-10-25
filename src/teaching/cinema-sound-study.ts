import type { LessonGuide } from './types'

// Original scenes, diagrams, and exercises. Linked references stay on the parent lessons.
// Practice budgets and storyboard timings are design choices, not tested learning claims.
// Spot-checked 2026-10-25: Yale Sound, The Story of Movies, and Creative Commons FAQ.
// No film frames, third-party recordings, copied dialogue, or completed exports are supplied.
export const cinemaSoundStudyGuides: LessonGuide[] = [
  {
    id: 'cinema-045',
    outcome: 'Compare two voice recordings and choose a distance that preserves words without breath blasts or distortion.',
    scene: 'A solo performer records a fictional lunch-packing line in a quiet kitchen with no cooking underway.',
    sections: [
      {
        title: 'The kitchen sounds larger than the voice',
        paragraphs: [
          `You film yourself packing a lunch bag in a kitchen. The phone is across the room so the whole counter fits. Your original line is, "The spoon is in the side pocket." On playback, the last words blend into a hollow tail. Increasing playback volume makes the refrigerator hum louder too. This does not establish that the phone needs replacing. The wide picture placed its microphone far from the mouth, while the room and its appliances remained part of the recording.`,
        ],
      },
      {
        title: 'Distance changes the mixture being captured',
        paragraphs: [
          `Some voice energy reaches the microphone straight from your mouth; some arrives after reflecting from walls and other surfaces. Nearby speech generally becomes stronger relative to those reflections and distant noise when the microphone moves closer. Raising a recorded track later raises the existing mixture, rather than separating its ingredients. A phone may also adjust recording gain automatically. That can make two takes seem similarly loud even though their words have different clarity. Listen for consonants and the room tail, not just which take sounds bigger.`,
        ],
      },
      {
        title: 'Move one phone, not the whole kitchen',
        paragraphs: [
          `For an audio test, keep your speaking position and delivery unchanged. Compare the same sentence from roughly two metres and half a metre away, moving the phone between takes. These are starting positions, not ideal distances. Keep its microphone openings clear and place it slightly outside the path of your breath. If the close take crackles on ordinary peaks, back off or reduce recording gain if available. For the film, a closer framing or a separately planned voice recording may be enough. Never shout, disable necessary equipment, or increase listening volume to force clarity.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two positions for the same phone',
        alt: 'A speaker faces a nearby phone position and a farther alternative, with a wall beside the sound path.',
        caption: 'Top view, not to scale. Compare the two phone positions one at a time; arrows show voice paths, not measured levels.',
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
        `Choose a permitted quiet room, with no private conversation or music. Say the spoon sentence yourself; keep appliances in their normal safe state.`,
        `Record it from the farther position, then the nearer position, keeping the phone supported and your voice comfortable.`,
        `Replay quietly. Note word clarity, room tail, and breath noise for each take; do not reward the louder recording automatically.`,
        `Choose one position and one adjustment. Without recording, draw the two positions and label the comparison as an untested plan.`,
      ],
      notice: 'Your note identifies a voice-to-room difference, or honestly records that this phone and room produced no clear difference.',
      troubleshooting: 'If automatic gain hides the contrast, compare word endings. If breath hits the microphone, angle it aside rather than whispering.',
    },
    recall: {
      prompt: 'A bedroom tutorial has a clear picture but hollow speech. What recording change would you test before raising the track level?',
      hint: 'Change what reaches the microphone, not just playback gain.',
      answer: 'Test a closer microphone position with the same delivery, then compare reflections and clarity. A level increase alone raises the captured bedroom sound too.',
    },
    quiz: {
      question: 'A distant line and nearby line have similar playback loudness, but the nearby words are clearer. What best explains this?',
      options: [
        'The nearby take must have used a higher recording quality setting.',
        'Automatic gain can equalize loudness while distance changes the voice-to-room balance.',
        'The performer must have spoken more loudly in the nearby take.',
      ],
      correctIndex: 1,
      explanation: 'Distance can change the captured balance without changing apparent loudness. Settings and performance are possible confounds, not conclusions from loudness alone.',
    },
    takeaway: 'Test distance and clarity before buying equipment or amplifying an unclear recording.',
    sourceNote: 'Yale supplies sound vocabulary; Blackmagic training covers recording and mixing. This kitchen test is original, with no guaranteed acoustic result.',
  },
  {
    id: 'cinema-046',
    outcome: 'Plan a matching room-tone patch and recognize when damaged speech needs another take.',
    scene: 'A fictional corridor exchange loses its ventilation hum at an edit.',
    sections: [
      {
        title: 'The corridor disappears between sentences',
        paragraphs: [
          `In an invented corridor exchange, you say, "Leave the parcel here," pause, then add, "I will label it." A ventilation hum sits under both sentences. Cutting out a hesitation also removes that hum for a moment. The gap sounds unlike the surrounding corridor even though nobody should be talking. Digital silence means no recorded signal; a quiet occupied building rarely sounds like that. The repair needs the background of this setup, not a completely silent replacement and not a random quiet recording from home.`,
        ],
      },
      {
        title: 'Keep the conditions that made the background',
        paragraphs: [
          `Room tone is the low-level sound recorded when the setup remains in place but deliberate speech and movement stop. Keep the phone position, door position, people, and necessary ventilation unchanged. Those details influence reflections and noise. In a shared corridor, get permission and leave the route clear; a private room can stand in for it. Record a short still stretch after the dialogue. If someone enters or a notification sounds, wait for an appropriate quiet opportunity rather than treating that interruption as useful tone.`,
        ],
      },
      {
        title: 'Patch the pause, not the damaged word',
        paragraphs: [
          `Suppose your planned pause lasts one second. Select a clean portion of the matching tone, avoiding a distinct click that would advertise repetition. If an editor supports separate audio and fades, fit the patch between the retained speech and soften its boundaries while listening for a level jump. Do not cut off a breath that belongs to the delivery. A trolley clatter over "parcel" is a different problem: background placed underneath cannot recover the obscured word. Choose another take or record that line again. A paper edit can mark these decisions without pretending the repair has been mixed.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Keep the hum through the pause',
        alt: 'Two parcel instructions surround a one-second pause filled with matching corridor hum.',
        caption: 'Schematic edit, not proportional. Only the proposed one-second pause is timed.',
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
        caption: 'Top view, not to scale. Preserve the setup without obstructing the walkway.',
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
        `Record both original parcel lines yourself with a pause. Keep other people and their conversations out of the recording.`,
        `Without moving the phone or changing the room, capture about twenty seconds of still background. Listen at low, comfortable volume.`,
        `Mark a clean stretch and any bumps. Sketch the two speech segments with a tone patch between them.`,
        `If editing is available, test that patch on a copy. Otherwise complete the paper edit and label it planned, not repaired.`,
      ],
      notice: 'The planned or tested patch preserves the same background rather than introducing another room or silence.',
      troubleshooting: 'If a repeat exposes a click, select another stretch. If noise covers a word, use another take instead of adding tone.',
    },
    recall: {
      prompt: 'A bedroom line was recorded with the window closed, but its quiet replacement pause comes from an open-window recording. Why might the join remain obvious?',
      hint: 'Compare the recording conditions, not whether both files lack speech.',
      answer: 'The open window changes outside noise and the room background. Capture matching closed-window tone or choose a matching take; quiet does not mean acoustically identical.',
    },
    quiz: {
      question: 'A chair scrape overlaps the word that explains where the parcel belongs. Which repair addresses that problem?',
      options: ['Extend the surrounding room tone beneath the word.', 'Lengthen the crossfade into the noisy word.', 'Choose a clean take or record the affected line again.'],
      correctIndex: 2,
      explanation: 'The word itself is obscured. Tone and fades address background joins, not missing intelligibility inside speech.',
    },
    takeaway: 'Matching tone fills a pause; it cannot restore a word hidden by another sound.',
    sourceNote: 'Blackmagic Fairlight training is the technical reference. The corridor, pause, and patch are original examples.',
  },
  {
    id: 'cinema-047',
    outcome: 'Choose an ambience layer for a specific space without collecting private speech or sacrificing safety.',
    scene: 'An imagined seated bus passenger folds a paper route map while different background layers compete for attention.',
    sections: [
      {
        title: 'Which part makes this a bus interior?',
        paragraphs: [
          `Picture an original shot of your hands folding a homemade route map while seated inside a bus. The close paper rustle describes your action. A steady low vehicle rumble describes the surrounding space. An occasional body rattle suggests a moving enclosure. Those sounds have different jobs even if a single microphone captures them together. Filling every moment with the paper rustle would make the prop prominent but tell little about the wider setting. An ambience choice begins with the space the scene needs us to understand.`,
        ],
      },
      {
        title: 'Background can carry unwanted information',
        paragraphs: [
          `Ambience is the surrounding environmental sound selected for the scene. Room tone often has the narrower purpose of matching a particular recording setup across edits; the names overlap in everyday production. Label a recording by what it contains and where it belongs. A bus recording may include intelligible conversation, music, identifying announcements, or a sudden horn. Such material is not automatically suitable because it sounds authentic. A continuous background also needs to leave room for the map fold or a line that carries the story.`,
        ],
      },
      {
        title: 'Design the layer before seeking a recording',
        paragraphs: [
          `For this imagined scene, plan quiet vehicle rumble under the whole shot, one restrained rattle between actions, and the paper fold at the visible movement. These are design choices, not a claim that audio has been captured. No bus trip is needed for the exercise. Personal recording is optional only from an already safe, permitted seated position, without private speech or music and without distracting anyone operating the vehicle. Do not approach traffic or pursue a louder sound. If conditions fail, keep the bus layer as an unrecorded note and test your own paper sound at home instead.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'layers',
        title: 'A map fold inside an imagined bus',
        alt: 'Foreground map fold, occasional body rattle, and continuous vehicle rumble form three layers.',
        caption: 'Original plan, not supplied audio. Read foreground to background, not measured loudness.',
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
        `Draw a fictional bus map with no real addresses. Write the shot: seated hands fold it, then hold it still.`,
        `List the paper fold, vehicle rumble, and rattle. Mark foreground or background, and continuous or occasional, beside each.`,
        `Record only your gentle paper fold at home if suitable. Keep the bus sounds as written placeholders unless a safe permitted personal recording already exists.`,
        `Place the layers on a paper timeline. Cross out anything containing private speech, music, or a distracting peak; label unrecorded layers clearly.`,
      ],
      notice: 'The plan separates the visible action from the space around it and identifies which sounds you actually have.',
      troubleshooting: 'If every layer demands attention, keep one background and the main action. Do not obtain unsafe recordings to fill a plan.',
    },
    recall: {
      prompt: 'In a park sketch, a nearby zip and distant leaves are available as your own safe recordings. What job would you give each beneath a bag-opening shot?',
      hint: 'Separate the visible event from the surrounding place.',
      answer: 'Align the zip with the bag opening and use restrained leaves as environmental ambience. Check for captured speech and whether the leaves mask the action.',
    },
    quiz: {
      question: 'Two permitted room recordings are available: steady fan sound and intermittent page turns. Which better supports a continuous background under a reading scene?',
      options: ['The fan, if it matches the space and does not mask the main sound.', 'The pages, because a nearer sound always describes more space.', 'Both at equal prominence, because both were present during recording.'],
      correctIndex: 0,
      explanation: 'The steady sound can describe the environment. Page turns are separate events; presence at the location does not require equal prominence in the scene.',
    },
    takeaway: 'Choose ambience for its spatial job, and distinguish a planned sound from a safe usable recording.',
    sourceNote: 'Yale supports sound perspective; GOV.UK supplies general consent principles, not transport recording law. The bus sound plan is invented.',
  },
  {
    id: 'cinema-048',
    outcome: 'Identify which pauses, mouth movements, and room qualities a replacement line must match.',
    scene: 'A performer rehearses an original pretend telephone conversation on a veranda using a cardboard handset.',
    sections: [
      {
        title: 'The words match but the mouth does not',
        paragraphs: [
          `On a permitted veranda, you film a pretend telephone conversation with a cardboard handset. Your original line is, "I found the address. Wait, the number is missing." You pause to inspect a fictional card between the sentences. A gust spoils the recording, so you record the words again indoors. The new voice is clearer, but it reaches "Wait" while the filmed mouth is still closed. Identical words have not preserved the performance. No real call, private address, or unwilling participant is needed for this scene.`,
        ],
      },
      {
        title: 'Recording time and screen time are different questions',
        paragraphs: [
          `Synchronous sound lines up with visible events, such as lips moving or fingers setting down the handset. Production sound recorded with the video gives a timing reference. Replacement dialogue is recorded afterward and fitted to the picture. It can also be synchronous. Matching requires phrase starts, pauses, breaths, and delivery, not just a shared beginning. Acoustic character matters too: a close indoor replacement can sound disconnected from an open veranda. Clean sound is useful, but cleanliness alone does not make a line belong to the filmed moment.`,
        ],
      },
      {
        title: 'Use the pause as a landmark',
        paragraphs: [
          `Watch your original performance and mark three landmarks: the first phrase, the silent card inspection, and the second phrase. Rehearse the replacement with that same gap before recording it. Listen at a comfortable level rather than turning up the damaged take repeatedly. With a suitable existing editor, align a copy and inspect both the start and end of each phrase. If the end drifts, rerecord the performance rather than assuming one shift fixes everything. An offscreen line has more timing freedom, but still needs believable delivery and space. Without alignment tools, submit timing notes, not a synchronization claim.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Three landmarks for the replacement',
        alt: 'The first address phrase precedes a silent card inspection, then the missing-number phrase begins.',
        caption: 'A timing map of the original performance. Durations must come from your take; these boxes have no time scale.',
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
        `Use your own performance in a permitted private space. Film the two original phrases with a silent look at the card between them.`,
        `Replay softly and mark phrase starts, the card pause, and phrase endings. Keep the original recording unchanged.`,
        `Rehearse and record a replacement separately. Compare its gap and delivery; align a copy only if an existing editor supports separate audio.`,
        `Write one mismatch and its correction. Without a phone or editor, draw the landmarks and label the result a replacement plan.`,
      ],
      notice: 'You can identify whether the replacement preserves the pause, rather than judging it only by cleaner sound.',
      troubleshooting: 'If the beginning matches but the end does not, redo the phrase at the original pace. Do not stretch a whole sentence blindly.',
    },
    recall: {
      prompt: 'A close shot shows someone saying two words while tying a parcel. The replacement fits the first word but ends after the mouth closes. What would you change?',
      hint: 'One offset moves everything equally; the mismatch changes within the phrase.',
      answer: 'Rehearse the shorter delivery against the visible mouth movement and rerecord it. Moving the whole track would disturb the already aligned first word.',
    },
    quiz: {
      question: 'A later recording matches lip movements after careful alignment. How should it be described?',
      options: ['Production sound because it matches the picture.', 'Nonsynchronous because it was recorded on another day.', 'Replacement dialogue that is synchronous in the finished alignment.'],
      correctIndex: 2,
      explanation: 'Replacement describes when it was recorded; synchronous describes its timing against the image. The two distinctions can coexist.',
    },
    takeaway: 'Replacement dialogue must fit the performance, timing, and space, not merely repeat its words.',
    sourceNote: 'Yale distinguishes synchronization from postsynchronization; Blackmagic covers editing tools. The pretend call is original and no aligned media is supplied.',
  },
  {
    id: 'cinema-049',
    outcome: 'Choose a repeatable gentle footstep texture that fits the visible action.',
    scene: 'A hand-operated soft-soled shoe tests two surfaces for a hallway footstep insert.',
    sections: [
      {
        title: 'A step can be performed without walking the corridor',
        paragraphs: [
          `Your original hallway insert shows two careful steps approaching a dropped fabric glove. The camera take contains an unwanted zipper sound, but repeating the whole shoot would be inconvenient. You can recreate the footfalls separately. Foley is the performance of everyday sounds to fit screen actions. For this small test, move a clean soft-soled shoe with your hands at a low stable surface. Nobody needs to stomp, balance on one foot, walk backward, or surprise a neighbour. The task is matching a small action, not producing the loudest impact.`,
        ],
      },
      {
        title: 'Surface and contact shape the event',
        paragraphs: [
          `A sound has an onset, the moment it begins, and a decay, the way it dies away. Gently landing the same shoe on a bare board can produce a sharper onset than placing it on folded fabric. Pressure and the heel-to-toe movement also affect texture. Microphone distance changes how much room accompanies the contact. Keep that distance fixed while testing surfaces so you know which change you are comparing. A louder recording is not necessarily a more convincing footstep for a cautious person.`,
        ],
      },
      {
        title: 'Choose a sound for this glove search',
        paragraphs: [
          `Record three gentle contacts on each surface, leaving quiet before and after each attempt. Those margins give an editor room to position the sound without chopping off its decay. For the careful approach, choose the version whose weight and texture suit the visible movement. If you can align it, place the onset near the visible contact and compare rather than assuming perfect realism. A cloth landing might be wrong for a hard hallway even when pleasant by itself. Keep the exercise quiet, stop at discomfort, and retain a paper cue sheet if no recording or alignment tool is available.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'One shoe, two landing surfaces',
        alt: 'A shoe lands on board or fabric while the phone stays fixed beside it.',
        caption: 'Schematic top view. Swap surfaces in place; arrows show gentle placement, not walking.',
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
        `Set the board low and stable, with permission for the space. Support the phone beside it and keep the microphone unobstructed.`,
        `Use your hands to make three gentle shoe contacts with quiet gaps. Repeat on folded fabric without moving the phone.`,
        `Listen quietly for onset and decay. Choose a take for careful steps toward the glove, explaining whether its surface fits the picture.`,
        `Mark the chosen contacts on a two-step cue sheet. Without recording, compare the live gentle sounds and label alignment as still untested.`,
      ],
      notice: 'You have distinguishable texture choices and a reason for choosing one beyond its volume.',
      troubleshooting: 'If handling noise dominates, keep the phone on its support and move only the shoe. Reduce force if the effect is uncomfortable.',
    },
    recall: {
      prompt: 'A filmed sleeve brushes a cardboard box, but your added cloth sound begins before the sleeve touches it. What would you inspect and adjust?',
      hint: 'Match the start of the sound to the start of the visible contact.',
      answer: 'Find the contact frame and the sound onset, then shift the effect if tools allow. Also check whether the chosen texture fits the sleeve and box.',
    },
    quiz: {
      question: 'Two gentle shoe takes have different textures, but you also moved the phone between them. What is the cleanest next comparison?',
      options: ['Repeat both surfaces with phone position and contact force held similar.', 'Normalize their playback levels and attribute every difference to the surface.', 'Keep the louder take because its contact is easier to hear.'],
      correctIndex: 0,
      explanation: 'Distance is a competing explanation. A controlled repeat isolates the surface better; equal loudness does not remove room or perspective differences.',
    },
    takeaway: 'Perform quiet, repeatable effects and choose their timing and texture for the image.',
    sourceNote: 'Yale and Blackmagic support the sound concepts. This original footstep drill is not a professional Foley specification.',
  },
  {
    id: 'cinema-050',
    outcome: 'Distinguish an unseen story-world sound source from an external score.',
    scene: 'A park sketch holds on a reader while a companion rustles an unseen paper packet.',
    sections: [
      {
        title: 'An unseen packet still belongs to the park',
        paragraphs: [
          `Imagine an original park scene: a reader studies a homemade map while a companion, outside the frame, gently rustles a paper packet. The reader looks toward that sound. Later, a wider view reveals the companion holding the packet. Nothing about being outside the earlier picture placed the packet outside the story. The sound suggested a nearby source before the camera showed it. For practice, a permitted private room can stand in for the park, and your own hands can supply the packet action.`,
        ],
      },
      {
        title: 'Ask where the finished scene places the source',
        paragraphs: [
          `Diegetic sound is presented as belonging to the story world. Nondiegetic sound is presented outside that world, such as a musical score addressing the audience rather than playing for the characters. Visibility is a separate distinction: the packet can be diegetic and offscreen. Recording method is separate too. A packet rustle recorded after filming can still represent the companion's packet. Conversely, a rhythm recorded on location could later be used as an external score. Classification follows the finished relationship, not the date or place of recording.`,
        ],
      },
      {
        title: 'Make the source relationship legible',
        paragraphs: [
          `Plan three versions of the same invented moment. First, show the companion rustling the packet. Second, keep the companion outside the frame but preserve the reader's response and a later reveal. Third, use an original abstract rhythm across changing places with no implied source, as an external score. The third plan needs context; lack of a visible source alone does not prove it. If the evidence remains ambiguous, say so. A reveal can revise an audience's initial interpretation. You are testing that possibility in your own scene, not claiming how every viewer or a named filmmaker must understand it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The camera misses the packet, not its sound',
        alt: 'The camera faces the reader; the companion and packet remain outside its tight view.',
        caption: 'Top view, not to scale. An unseen packet still sends sound toward the reader.',
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
        `Draw a reader frame and a wider frame revealing the packet. Use a private permitted space rather than recording strangers in a park.`,
        `Label the rustle as inside the story in both frames. If recording, perform it gently yourself or obtain the partner's permission.`,
        `Draw a third version using an original rhythm as external score. Write what context would distinguish it from an unseen packet.`,
        `Compare the source labels, separately marking visible or unseen. Keep drawings as plans if no video or mixing tools are available.`,
      ],
      notice: 'The unseen packet remains inside the story; the external-score version requires a different relationship, not merely a tighter frame.',
      troubleshooting: 'If you classify every added sound as external, ask which object or event it represents in the finished story.',
    },
    recall: {
      prompt: 'A kitchen scene includes a timer heard before a cut reveals it on a shelf. The beep was recorded later. How would you classify it, and why?',
      hint: 'Separate story location, visibility, and recording method.',
      answer: 'It is offscreen diegetic sound before the reveal, then associated with a visible source. Recording it later does not move the timer outside the story.',
    },
    quiz: {
      question: 'An unseen tune is followed by a shot of a character switching off a radio, and the tune stops. What is the strongest supported reading?',
      options: ['It is external score because its source was initially hidden.', 'The radio is presented as a diegetic source revealed after the tune begins.', 'It must be production sound recorded live during that shot.'],
      correctIndex: 1,
      explanation: 'The visible action links the tune to the story radio. It does not establish how the soundtrack was recorded.',
    },
    takeaway: 'Story membership, visibility, and recording method are three different questions about sound.',
    sourceNote: 'Yale defines diegetic, offscreen, and postsynchronized sound. The packet scene is original; no referenced film dialogue or soundtrack is reproduced.',
  },
  {
    id: 'cinema-051',
    outcome: 'Separate composition, recording, use permissions, and credit in a soundtrack rights note.',
    scene: 'A sewing montage compares original tapping with an uncleared online track.',
    sections: [
      {
        title: 'A track title is not a permission record',
        paragraphs: [
          `You plan a short film of your hands sorting thread and folding fabric. A downloaded track seems to fit its rhythm, but its page says only "free music." That phrase does not tell you whether you can synchronize it to video, alter it, or share the result. Buying listening access or writing a credit does not supply those missing permissions. Before treating the track as a production resource, identify the exact work, its recording, the rights holder, and the terms that cover your intended use.`,
        ],
      },
      {
        title: 'Composition and recording are separate checks',
        paragraphs: [
          `A composition is the underlying music; a recording is a particular captured performance. Rights in them can belong to different people. A new performance of someone else's tune does not automatically clear the tune itself. Creative Commons licenses also differ. Under CC terms, synchronizing music with moving images is an adaptation. A NoDerivatives license does not authorize sharing that adaptation without separate permission, even if the recording is otherwise unaltered. NonCommercial and ShareAlike conditions raise other questions. Read the actual license and version rather than relying on a search filter.`,
        ],
      },
      {
        title: 'Keep a usable note beside the plan',
        paragraphs: [
          `For this first montage, you could choose no music or invent a simple tapping pattern and record it yourself. Do not copy a remembered film tune. Note who created and performed it, when it was recorded, and whether anyone else contributed. For third-party music, keep the source, license version, evidence of permission, required credit, and any planned changes. A note saying "permission pending" is more useful than a guessed clearance. Platform permissions may not follow the film elsewhere. This is a practical screening method, not legal advice or a guarantee that every possible right has been cleared.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'The sewing-film soundtrack note',
        alt: 'An original tapping pattern, its self-recorded performance, the private montage plan, and a creator credit form a rights record.',
        caption: 'Entries for the original example, not permission to use downloaded music. Unchecked rights remain pending.',
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
        `Write the intended film and audience: an original fabric-sorting exercise for private review. Decide whether it needs music at all.`,
        `Choose no music or invent and softly record your own pattern, with no background music or private speech.`,
        `Make separate composition and recording entries, naming yourself only for work you actually created and performed.`,
        `Add source, license, intended distribution, changes, and credit fields for any future replacement track. Leave missing facts pending; a paper plan is sufficient.`,
      ],
      notice: 'Your note distinguishes what you own or have checked from what still needs permission.',
      troubleshooting: 'If a page only says free or royalty-free, do not infer terms. Keep the original-sound or no-music version instead.',
    },
    recall: {
      prompt: 'A friend records a new cover of a familiar film song and offers you the recording. What further issue remains before using it in a public short?',
      hint: 'A new performance does not make the underlying music new.',
      answer: 'Check rights in the composition as well as permission for the recording and performance. The friend may not control the song itself or authorize its video use.',
    },
    quiz: {
      question: 'A CC BY-ND track is credited correctly and left unaltered, but synchronized to your video. Does that license alone permit public sharing?',
      options: ['Yes, because no notes in the audio were changed.', 'Yes, provided the upload is not monetized.', 'No; CC treats synchronization as adaptation, so separate permission is needed for that sharing.'],
      correctIndex: 2,
      explanation: 'Credit and noncommercial distribution do not remove the NoDerivatives condition. The relevant change is the timed relationship to moving images.',
    },
    takeaway: 'Check both music and recording rights; credit is a requirement in many licenses, not a substitute for permission.',
    sourceNote: 'The Creative Commons FAQ was spot-checked for synchronization, attribution, and license differences. The soundtrack note is original general guidance, not legal clearance.',
  },
  {
    id: 'cinema-052',
    outcome: 'Reduce competition around an essential line and distinguish intelligibility from overall loudness or unclipped peaks.',
    scene: 'A packing-desk scene combines an original instruction, paper wrapping, and a quiet room background.',
    sections: [
      {
        title: 'The destination disappears under the paper',
        paragraphs: [
          `In a fictional packing scene, one performer says, "The blue parcel stays here," while folding wrapping paper. The blue parcel is the information the viewer needs. Paper crackles over those words, and they become hard to follow even though nothing sounds painfully loud. Raising the whole soundtrack raises the crackle along with the instruction. Before reaching for more volume, decide which sound carries the scene at that moment. Dialogue is often the priority, but a silent discovery might instead depend on a small prop sound.`,
        ],
      },
      {
        title: 'A clean meter does not guarantee clear words',
        paragraphs: [
          `Masking occurs when one sound makes another harder to hear. It depends on their timing and sonic overlap, not only whether a digital meter reaches its limit. Clipping is a separate problem: a signal exceeds what the recording or output can represent cleanly. Headroom is space below that limit for peaks. A track can avoid clipping and still bury speech, while an individually clear voice can be pushed into distortion by an overloaded combined mix. Peak level and perceived loudness are not interchangeable measurements.`,
        ],
      },
      {
        title: 'Give the important words a less crowded moment',
        paragraphs: [
          `Start with a clear instruction take at a comfortable listening level. Add the room background quietly, then the wrapping sound. If separate tracks exist, lower the wrapping during the essential words or move a suitable effect between phrases. If everything is recorded together, perform the paper movement after the instruction in a new take. That changes the staging instead of pretending a phone can separate mixed ingredients. Recheck on the phone speaker and headphones you already own, without increasing volume to overcome discomfort. Leave room for combined peaks and follow a destination's actual specification rather than guessing a universal loudness target.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'layers',
        title: 'Priority during the blue-parcel instruction',
        alt: 'The essential spoken instruction sits above wrapping paper and room background, with a check on their combined output.',
        caption: 'A schematic priority stack, not measured track levels. The paper should not obscure the words naming the parcel.',
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
        `Use your own voice in a permitted quiet space. Say the original blue-parcel line while gently folding paper; do not make loud impacts.`,
        `Record a second version with the paper movement after the line. Keep voice delivery and phone position similar.`,
        `Listen at a consistent comfortable level. Write which words are easier to identify and whether any take distorts.`,
        `If separate-track controls exist, test lowering the paper on a copy. Otherwise keep the clearer staging or draw a labeled mix plan without claiming an export.`,
      ],
      notice: 'The chosen version protects the identifying words without requiring higher listening volume.',
      troubleshooting: 'If the paper is still dominant, reduce its movement or separate it further from the phrase. Stop listening if anything feels uncomfortable.',
    },
    recall: {
      prompt: 'An original short has a quiet zipper clue under continuous music. The meter never clips, but the clue is missed. What would you test?',
      hint: 'The essential sound is not always dialogue.',
      answer: 'Lower or pause the competing music around the zipper, then reassess at the same comfortable volume. An unclipped mix can still mask its important event.',
    },
    quiz: {
      question: 'A mix peaks below its limit but a line is hard to understand. Which first change targets masking rather than overall volume?',
      options: ['Raise the voice and background together.', 'Reduce the competing layer during the line.', 'Normalize the whole mix closer to its peak limit.'],
      correctIndex: 1,
      explanation: 'Reducing the competitor changes the relationship between sounds. Whole-mix gain changes preserve that relationship and can consume headroom.',
    },
    takeaway: 'Protect the essential event by reducing competition, then check the combined peaks without chasing loudness.',
    sourceNote: 'Yale and Blackmagic support sound layering and mixing concepts. This packing scene supplies no calibrated loudness target or completed mix.',
  },
  {
    id: 'cinema-053',
    outcome: 'Group shots into scenes and a sequence using explicit time-and-place assumptions.',
    scene: 'A bedroom invitation is prepared, then delivered to a corridor shelf.',
    sections: [
      {
        title: 'Three views of preparing an invitation',
        paragraphs: [
          `Plan a tiny invitation-delivery film. A bedroom-wide view shows an empty envelope for five seconds. A close view shows your hands inserting a homemade invitation for four seconds. A final corridor view shows the envelope placed on a shelf for six seconds. These are chosen storyboard timings, not measurements from a finished film. There are three intended shots because the plan changes view through two cuts. If you instead pan continuously from envelope to hands, that camera movement does not itself create a new shot.`,
        ],
      },
      {
        title: 'The units answer different questions',
        paragraphs: [
          `In a finished film, a shot is an uninterrupted stretch between edits. A source recording, often called a take, can provide several separate excerpts in that film. A scene usually groups action around a particular time and place. A sequence groups a larger event that can span several scenes. These are useful working distinctions, not laws requiring a fixed number of cuts. An unusual film can blur scene boundaries, and a long take can contain changes another film would divide. State the boundary you are using rather than arguing from a label alone.`,
        ],
      },
      {
        title: 'Make the grouping explicit',
        paragraphs: [
          `In the invitation plan, the first two shots share the bedroom and continuous preparation, so call them one scene. Assume the corridor placement happens later in another space, making a second scene. Together the two scenes form an invitation-preparation-and-delivery sequence. The planned total is fifteen seconds, but that number says nothing about how many scenes every short film needs. If your corridor view instead continues the same uninterrupted action across a doorway, explain that alternative grouping. Useful analysis names both the unit and its evidence, rather than treating one shot as proof about an entire film or director.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Three shots inside a delivery sequence',
        alt: 'Bedroom shots of five and four seconds precede a six-second corridor scene.',
        caption: 'Original plan: fifteen seconds total. Scene boundaries assume changed place and time; box widths are not proportional.',
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
        `Draw the three invitation views using invented names and no real address. Label their chosen five-, four-, and six-second holds.`,
        `Mark each intended cut. Bracket the two bedroom shots as scene A and the later corridor shot as scene B.`,
        `Give their combined sequence an action name. Write the assumption that separates the corridor scene in place and time.`,
        `If recording safely in your own permitted space, compare the plan with your clips. Otherwise retain the labeled board as a plan, not an edited film.`,
      ],
      notice: 'Your shot count follows cuts, while scene and sequence labels follow stated groupings of action.',
      troubleshooting: 'If every camera move becomes another shot in your notes, ask whether the image actually cuts or continues uninterrupted.',
    },
    recall: {
      prompt: 'One continuous phone take follows someone from a desk to a doorway, but a later edit uses two separated excerpts. How would you count takes and finished shots?',
      hint: 'Recording sessions and excerpts in the finished order are different units.',
      answer: 'There is one source take but two finished shots if a cut separates its excerpts. Describe the action and time continuity before deciding their scene grouping.',
    },
    quiz: {
      question: 'A short alternates between packing indoors and a later arrival elsewhere. What is the most useful way to describe the larger journey?',
      options: ['A sequence containing scenes whose individual shots can be counted.', 'One shot because the same person appears throughout.', 'One take because the events belong to the same story.'],
      correctIndex: 0,
      explanation: 'A larger event can group several scenes and shots. A recurring person or story connection does not establish an uninterrupted image or recording.',
    },
    takeaway: 'Count cuts for shots; state time, place, and action assumptions when grouping scenes into a sequence.',
    sourceNote: 'The Film Foundation provides film-literacy context and Yale supplies editing vocabulary. The invitation plan and its timings are original examples.',
  },
  {
    id: 'cinema-054',
    outcome: 'Write a shot breakdown that separates visible changes, measured timing, and unknown production details.',
    scene: 'A tabletop sorting passage moves from two wooden counters to a hand close-up and a counter entering a small box.',
    sections: [
      {
        title: 'Write what the cut actually changes',
        paragraphs: [
          `An original tabletop passage begins wide enough to show two wooden counters and a small box. It cuts closer as a hand lifts the dark counter, then returns wide as that counter enters the box. A useful breakdown records those changes before guessing their meaning. Number the shots in the order seen. For each, note framing, camera movement, visible action, and what happens to sound at the boundary. A lens name would not explain these changes better if you do not actually know which lens was used.`,
        ],
      },
      {
        title: 'Keep measurement separate from impression',
        paragraphs: [
          `A shot breakdown is a record someone else could check against the same passage. "Fixed tabletop wide view" describes observable framing and movement. "Feels patient" is an interpretation. A duration belongs in a measured field only after you time it with an available player or recording display. Mark it unmeasured if you cannot. A close image alone does not establish lens focal length, camera model, lighting fixture, or the reason for the cut. Put those in an unknown field rather than making precision up to complete a table.`,
        ],
      },
      {
        title: 'Use the counter passage as a small test',
        paragraphs: [
          `Your first row can read: wide, fixed camera, both counters visible, quiet room background. Row two becomes: hand close-up, fixed camera, dark counter lifted, contact sound continues. Row three notes the wider return and the counter entering the box. Keep their durations unmeasured until there is footage to inspect. Then add a separate hypothesis: the close view may make the selected counter easier to identify. You can test that by omitting the close view in a paper edit. Three attentive rows are enough; neither a long spreadsheet nor confident equipment guesses make the observation more reliable.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Observed fields for the counter passage',
        alt: 'Wide setup, hand close-up, and return wide have unmeasured durations.',
        caption: 'The original example supplies framing and action. No measured footage is supplied, so the duration field remains unmeasured.',
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
        `Use the original counter plan or three short clips you own. Keep small props away from children and record only your own hands.`,
        `Create three numbered rows with framing, movement, action, sound, and duration fields. Mark a paper-only version planned rather than observed.`,
        `For actual footage, measure duration if the player permits it. Otherwise write unmeasured; leave unsupported lens and lighting details unknown.`,
        `Add one interpretation in a separate column and one proposed test, such as removing the close view to check counter identification.`,
      ],
      notice: 'Another viewer could check your observation rows without having to agree with your interpretation.',
      troubleshooting: 'If a row contains a feeling or motive, move it to interpretation and replace it with the visible or audible cue supporting it.',
    },
    recall: {
      prompt: 'A legally viewed dance passage has a close face view followed by a full-body view. You cannot access timestamps. What can your breakdown responsibly include?',
      hint: 'Missing timing does not prevent recording a visible framing change.',
      answer: 'Record the framing order, movement, action, and audible change you observe. Mark duration unmeasured and avoid inventing lens specifications or a reason for the cut.',
    },
    quiz: {
      question: 'Which note belongs in the observational column for an untimed clip?',
      options: ['A telephoto lens creates the close view, inferred from framing alone.', 'The pause lasts exactly three seconds, estimated from memory.', 'The fixed wide view cuts to a close view of the hand lifting the dark counter.'],
      correctIndex: 2,
      explanation: 'The framing and action can be checked directly. Exact equipment and unmeasured duration require evidence not supplied by that observation.',
    },
    takeaway: 'Record what can be checked, measure what can be measured, and keep unsupported details unknown.',
    sourceNote: 'Yale cinematography and editing pages supply vocabulary. The counter passage is an original plan, not a measured breakdown of a referenced film.',
  },
  {
    id: 'cinema-055',
    outcome: 'Explain a reveal through viewer knowledge, not an invented filmmaker intention.',
    scene: 'A pencil beneath rolled paper goes unnoticed during an empty-pouch search.',
    sections: [
      {
        title: 'The viewer can know before the searcher',
        paragraphs: [
          `In your original drawing-desk scene, a pencil lies under the edge of rolled paper. The opening view shows its end. Your hand searches an empty pouch, then lifts the paper and finds the pencil. The plot summary is simply that someone searches and finds an object. Analysis asks a more specific question: when could a viewer identify the pencil, compared with the searcher's discovery? The opening view gives a possible answer. It offers information before the searching action, provided the pencil is actually readable in the frame.`,
        ],
      },
      {
        title: 'Connect a formal choice to supplied information',
        paragraphs: [
          `A formal choice is a decision about how the scene is presented, such as framing, cutting, duration, or sound. Start with an observable cue, then explain what it lets you infer. "The pencil end is visible before the pouch opens" is an observation. "I expect the searcher to notice it" describes a possible response. "The director wanted all viewers to feel impatience" claims an intention and a universal effect that the image alone cannot establish. Your analysis becomes stronger when the size of its claim matches the evidence.`,
        ],
      },
      {
        title: 'Change only the reveal order',
        paragraphs: [
          `Draw a second version that begins on the empty pouch and hides the pencil until the paper lifts. The underlying search can remain the same, but now the viewer and searcher receive the useful clue together. Compare the two orders rather than calling one automatically better. An early reveal can support anticipation; a later one can preserve uncertainty. Neither effect is guaranteed if the clue is tiny or the action unclear. State what the scene communicates before and after the discovery, name the cue responsible, and propose one change you could safely test with your own paper and pencil.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Same pencil, different information order',
        alt: 'One plan shows the pencil before the pouch search; the other reveals it during discovery.',
        caption: 'Original edit plans. Compare when the pencil becomes identifiable, not a guaranteed audience feeling.',
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
        `Set the pencil partly under paper on a stable surface. Use your own hands and remove private documents from the background.`,
        `Draw three panels: pencil edge, empty pouch, discovery. Write what the viewer knows after each.`,
        `Make an alternative that hides the pencil until discovery. Keep the action otherwise similar so the information order is the main change.`,
        `Read both boards or record short tests. Write one observed cue and one possible effect separately; a board comparison is not a finished edit.`,
      ],
      notice: 'You can point to the moment the viewer receives the clue in each version, rather than only retelling the search.',
      troubleshooting: 'If the two versions seem identical, cover the pencil in the opening panel and check whether any other cue still reveals its location.',
    },
    recall: {
      prompt: 'In a new kitchen scene, a recipe card is upside down until a hand turns it toward the camera. How could an earlier readable view change the scene?',
      hint: 'Compare the moment the viewer knows the instruction with the moment the character reacts.',
      answer: 'An earlier view could let the viewer anticipate the reaction; a later view shares the discovery. Test legibility and timing rather than asserting a guaranteed feeling.',
    },
    quiz: {
      question: 'Which note connects a film choice to information without claiming an unverified intention?',
      options: ['The missing object proves the director intended frustration.', 'The early close view identifies the wrong label before the character reads it.', 'The character discovers that the label is wrong and changes it.'],
      correctIndex: 1,
      explanation: 'The close-view note connects presentation to knowledge order. The first asserts intention; the last is a plot summary without identifying the choice.',
    },
    takeaway: 'Name the cue, explain what it reveals, and keep your proposed effect separate from a claim about intention.',
    sourceNote: 'The Film Foundation and Yale support attentive film analysis. The pencil search and alternative orders are original, not claims about a named film.',
  },
  {
    id: 'cinema-056',
    outcome: 'Explain a staged relationship through access to a prop, without diagnosing personality.',
    scene: 'Two greeting-card writers share a marker placed centrally or beside one writer.',
    sections: [
      {
        title: 'Who can reach the marker?',
        paragraphs: [
          `Two volunteers sit at a table preparing a greeting card. A single marker lies between them, within easy reach of either person. In another version, it lies beside the left writer while the right writer holds the unfinished card. The dialogue has not changed, but the next possible action has: the right writer may need to ask for or receive the marker. That relationship is visible because of placement. It is more useful to describe reach and access than to decide that one object proves somebody is selfish.`,
        ],
      },
      {
        title: 'Arrangement becomes meaning through action',
        paragraphs: [
          `Mise-en-scene means the arrangement and performance before the camera, including setting, props, costume, lighting, and behavior. A list of these ingredients is only a start. Ask how they relate: who faces whom, what blocks a view, and which movement changes access to an object. The marker beside one writer could suggest temporary use, deliberate withholding, or simple convenience. A generous handover would support a different reading from pulling it away. Context and action help distinguish those possibilities; the placement does not decode a person's real character.`,
        ],
      },
      {
        title: 'Keep the camera fixed while testing access',
        paragraphs: [
          `Make the central-marker arrangement your baseline. Keep the card, camera, and performer positions stable, then move only the marker beside the left writer. Compare what the right writer must do to continue. You can stage both people with labeled paper figures if nobody wants to perform. If people participate, agree on the action and recording permission, with no uncomfortable reach or blocked walkway. Add a handover before adding explanatory dialogue if the intended cooperation is unclear. The test concerns a fictional card-making scene, not an assessment of anyone's private room, social group, or body language.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'One marker changes hands differently',
        alt: 'Two writers share a card; one marker can sit centrally or beside A.',
        caption: 'Top view, not to scale. Marker positions are alternatives, not two props present together.',
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
        `Label two paper figures A and B, or agree the scene with willing performers. Keep the setup on a stable, clear table.`,
        `Place the marker centrally and sketch or photograph the view. Use a fictional greeting with no personal details.`,
        `Move only the marker beside A. Record what B must now do to complete the card, keeping the camera position unchanged.`,
        `Add a planned handover and compare readings. Keep a labeled spatial sketch if no camera is available; do not claim to have filmed it.`,
      ],
      notice: 'Your explanation connects a spatial change to a possible action rather than assigning a fixed personality to either writer.',
      troubleshooting: 'If nothing changes, check whether both writers can still reach equally. Move the prop within safe reach or revise the scene goal.',
    },
    recall: {
      prompt: 'An original sewing scene places fabric scissors near one worker while the other holds cloth. What additional action would help distinguish cooperation from withholding?',
      hint: 'Placement permits several readings; behavior can narrow them without real unsafe handling.',
      answer: 'Plan a safe handover using a harmless cardboard substitute, or a move that denies access. Describe the staged action rather than diagnosing either performer.',
    },
    quiz: {
      question: 'A notebook lies beside one character rather than centrally. Which analysis is best supported before anyone moves?',
      options: ['The placement gives that character easier access; its meaning needs action and context.', 'The notebook proves the character controls every decision in the relationship.', 'The central version would necessarily communicate friendship to every viewer.'],
      correctIndex: 0,
      explanation: 'Reach is observable. Control and friendship are possible interpretations in context, not universal meanings built into an object position.',
    },
    takeaway: 'Read who can see, reach, or move what, then test the interpretation against the scene action.',
    sourceNote: 'Inherited staging and lighting references inform the arrangement vocabulary. The volunteers are fictional; prop placement is not a diagnostic code for real people.',
  },
  {
    id: 'cinema-057',
    outcome: 'Compare one sound-and-image relationship in specific passages without ranking national cinemas.',
    scene: 'Two original doorway plans reveal a bag before or after its zipper sound.',
    sections: [
      {
        title: 'Give both passages the same question',
        paragraphs: [
          `You want to learn from Tamil cinema and films from other places without reducing them to national stereotypes. Choose a small question: when is a sound source identified relative to when it is heard? Yale's sound guide discusses Edward Yang's Yi Yi, identified there as a Taiwan film from 2000, in its sound-bridge section. That is an optional study lead, not a claim that it represents every Taiwanese film. Pair a legally accessible passage with a Tamil passage you already have permission to view, or use your own plans instead.`,
        ],
      },
      {
        title: 'Keep context and observation together',
        paragraphs: [
          `A sound bridge carries sound across a picture boundary, sometimes letting an upcoming scene be heard before it is seen. Offscreen sound can also remain within one continuous shot; the two ideas are not identical. For each passage, note the first audible cue, the picture boundary if any, and the source reveal. Add whether you understand the language directly or depend on subtitles. A reveal supplied by a subtitle differs from one supplied by the image. Write unknown context as unknown, and do not interpret an unmeasured pause as a national trait.`,
        ],
      },
      {
        title: 'Test the question without borrowing a scene',
        paragraphs: [
          `For an original alternative, draw a doorway view while a bag zipper is heard outside the frame, followed by a cut revealing the bag. Then reverse the information order: reveal the bag first and hear its zipper afterward. Ask when the source becomes identifiable in each plan. You have changed a concrete relationship, not demonstrated that one culture values patience more. Use only your own gentle zipper recording if filming, with permission for the room and performers. Neither legal viewing access nor a study reference gives permission to copy a film's frames, dialogue, or music into your exercise.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same source-reveal question in two plans',
        alt: 'The zipper precedes its bag reveal in one plan and follows it in the other.',
        caption: 'Both are original plans, not summaries of Tamil or Taiwanese scenes. No shot durations or audience responses are claimed.',
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
        `Choose two short legal passages, or draw the two original doorway plans. Do not download or copy protected scenes for this exercise.`,
        `For each, note cue, cut, and reveal in order. Label durations unmeasured unless you time actual footage.`,
        `Record language and subtitle dependence for viewed material. For your own boards, label the evidence planned, with no national-cinema claim.`,
        `Write one bounded comparison and an original test. If recording the zipper, use a safe private setup and your own sound, or keep a paper plan.`,
      ],
      notice: 'Your conclusion names two specific passages or plans and the same observed relationship in each.',
      troubleshooting: 'If the conclusion starts with an entire country, narrow it to the selected passage and remove claims the evidence cannot support.',
    },
    recall: {
      prompt: 'One subtitled scene names an unseen visitor in text before the camera reveals them; another has no subtitle cue. How would you make the comparison fairer?',
      hint: 'Track all information channels, not picture timing alone.',
      answer: 'Record the subtitle as an earlier identification cue and state your language dependence. Compare source-identification order, not a supposed national preference for slow reveals.',
    },
    quiz: {
      question: 'Two viewed passages differ in how long a sound source remains unseen. Which conclusion fits this evidence?',
      options: ['Their national cinemas have opposite attitudes toward suspense.', 'The longer delay proves a more sophisticated filmmaking culture.', 'These passages disclose the source differently; context and timing need specific notes.'],
      correctIndex: 2,
      explanation: 'A bounded comparison follows from the selected passages. It cannot establish a hierarchy or a universal national style.',
    },
    takeaway: 'Apply one question to specific passages, including language and context, rather than ranking whole film cultures.',
    sourceNote: 'Yale Sound and The Story of Movies were spot-checked. Yi Yi is an optional reference; the doorway comparison is original and supplies no film-scene measurements.',
  },
  {
    id: 'cinema-058',
    outcome: 'Distinguish observation, interpretation, and a maker account before claiming intention.',
    scene: 'A banner-folding discussion accompanies two inherited Mani Ratnam references with different source formats.',
    sections: [
      {
        title: 'An essay and an interview do different jobs',
        paragraphs: [
          `When studying Mani Ratnam, you encounter Baradwaj Rangan's critical essay Madras Male and a separate Ponniyin Selvan interview page. They are not interchangeable evidence. A critic can offer a supported reading of a frame. An interview can record a filmmaker's account, but only the answer actually given supports attributing that account. A page title or an interviewer's question does not establish the answer. You do not need to watch a whole interview to learn this distinction; leave an unverified statement unverified rather than filling the gap from admiration.`,
        ],
      },
      {
        title: 'Attach each claim to its speaker',
        paragraphs: [
          `Keep three notes separate: what the image shows, how someone interprets it, and what a maker says about making it. Reader comments form another source, not an extension of the interview transcript. When recording a claim, note its author, source type, and the passage you actually checked. A paraphrase should not become a quotation. Even a verified production account has a context and does not require every viewer to experience the intended effect. Conversely, a viewer can offer an interesting interpretation without claiming the director personally confirmed it.`,
        ],
      },
      {
        title: 'Try the distinction on your own banner scene',
        paragraphs: [
          `Imagine two consenting friends folding a plain banner in your original clip. One steps out of frame, leaving the other visible. A viewer reads the remaining figure as isolated. The maker explains that the camera position kept loose fabric outside the shot. The observation, interpretation, and stated practical reason can all be recorded without collapsing them together. The reading is not automatically invalid, and the stated reason does not prove isolation was intended. This invented exchange demonstrates the method; it is not a quotation or a claim about Mani Ratnam, his performers, or any particular scene in his films.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Reading and stated reason stay separate',
        alt: 'A viewer reads isolation; the maker gives a practical reason for framing the banner.',
        caption: 'Invented banner discussion, not quotations from a real filmmaker or critic.',
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
        `Create observation, interpretation, maker account, and comment headings. Sort the original banner exchange under the appropriate headings.`,
        `If online, inspect the linked essay and interview page for title, author, and format. Do not infer an answer from a question or thumbnail.`,
        `Record only a claim you actually checked, in your own words with its source. If none is checked, write maker intention unverified.`,
        `Offline, keep the banner sorting exercise and a list of evidence still needed. Do not invent external quotations to complete the sheet.`,
      ],
      notice: 'Every attributed claim has a named speaker and checked source, or is explicitly left unverified.',
      troubleshooting: 'If your notes say the director wanted something, ask where that account was actually stated. Recast unsupported statements as your own interpretation.',
    },
    recall: {
      prompt: 'A festival moderator suggests a doorway symbolizes departure. The clip ends before the director replies. What can you report?',
      hint: 'A question proposes an interpretation; an absent answer cannot confirm it.',
      answer: 'Attribute the suggestion to the moderator and mark the director response unavailable. You can test that reading against the image without assigning it to the director.',
    },
    quiz: {
      question: 'A critic argues that a scene creates distance between two characters. Which note preserves the evidence accurately?',
      options: ['The director has therefore confirmed distance as the intended meaning.', 'The critic offers a distance reading that can be checked against the scene.', 'The reading establishes how all viewers will understand the scene.'],
      correctIndex: 1,
      explanation: 'The essay supports attribution to its critic. Neither an unrecorded filmmaker statement nor a universal audience response follows from it.',
    },
    takeaway: 'Attribute the reading to the reader and the account to its speaker; do not manufacture agreement between them.',
    sourceNote: 'The inherited Rangan essay and interview illustrate source formats. The banner exchange is invented, with no filmmaker quotation or intention claim.',
  },
  {
    id: 'cinema-059',
    outcome: 'Draw three shootable views with positions, action direction, and sound cues.',
    scene: 'A folded scarf moves right to left into a tote during an original packing action.',
    sections: [
      {
        title: 'Draw the scarf movement, not a polished picture',
        paragraphs: [
          `Your planned action is simple: a folded scarf on the right enters a tote on the left. Draw three rectangles in the orientation you intend to record. The first shows both objects. The second shows a hand lifting the scarf. The third shows the scarf entering the open tote. A rectangle for the bag and a hatched strip for the scarf are enough. Label the action and the soft fabric sound beneath each panel.`,
        ],
      },
      {
        title: 'Keep action arrows separate from camera instructions',
        paragraphs: [
          `A storyboard represents intended screen views. Its arrows need an identified subject: "hand moves left" is different from "camera pans left." Moving the phone to prepare the next shot is another distinction; that setup change is not necessarily visible camera movement within a shot. Keep the camera on the same side of the table for this first plan so the scarf's right-to-left travel remains consistent. If a panel changes that relationship, mark the change deliberately. A clear board communicates framing and action, not an unverified lens specification.`,
        ],
      },
      {
        title: 'Check the board against the actual room',
        paragraphs: [
          `Look through your supported phone from each proposed position before committing to the board. Can you see the tote opening, or does its near side hide the scarf? Does the close view still leave space for the hand? Revise a panel that cannot be achieved safely instead of leaning over unstable furniture to imitate it. A wide continuous version can preserve the complete action if you cannot join clips. Use your own hands or a willing performer, a plain scarf, and a permitted space. Draw original staging rather than tracing film frames.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Scarf and tote storyboard',
        alt: 'Wide setup, close scarf lift, medium packing view.',
        caption: 'Original panels: right-to-left scarf movement, with fixed camera framing.',
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
        caption: 'Schematic top view: scarf movement and between-shot phone reset.',
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
        `Place scarf right and tote left on a stable surface. Draw three numbered frames matching the planned phone orientation.`,
        `Add framing, action, and sound. Label arrows as subject movement, camera movement, or setup change.`,
        `Check the proposed views in the permitted room, with your own hands or a consenting performer. Adjust any hidden tote opening.`,
        `Keep the revised board and a continuous-wide fallback. Without a phone, mark framing as unchecked rather than calling the scene shot.`,
      ],
      notice: 'The board distinguishes the scarf path, framing, and between-shot camera changes.',
      troubleshooting: 'If an arrow is ambiguous, name what moves. If the close view hides the action, widen it before adding another setup.',
    },
    recall: {
      prompt: 'A board has one unlabeled arrow for a person crossing right and a following camera. What needs clarification?',
      hint: 'The subject and camera have separate movements.',
      answer: 'Label the person movement and camera follow separately, with direction and framing notes. If the camera instead resets between cuts, mark that as a setup change.',
    },
    quiz: {
      question: 'Your board requires an overhead view that cannot be supported safely. What preserves the planned action most directly?',
      options: ['Redraw a stable angled view that still shows the tote opening and scarf path.', 'Keep the drawing unchanged and decide the safe framing only after filming.', 'Remove the packing panel and rely on the audience to infer the whole action.'],
      correctIndex: 0,
      explanation: 'The provisional board can change. A safe view preserves the action; an impossible setup or missing payoff does not.',
    },
    takeaway: 'A usable storyboard specifies the view, the action, and the sound, then survives a safe location check.',
    sourceNote: 'Shot-list and staging references support these original scarf plans. No copied frames or recorded footage are supplied.',
  },
  {
    id: 'cinema-060',
    outcome: 'Revise a storyboard hold while distinguishing planned durations from measured footage.',
    scene: 'A closed note reveals OTHER SIDE, then a star on its reverse.',
    sections: [
      {
        title: 'A clue has almost no time on the board',
        paragraphs: [
          `Your three-panel scene shows a closed note, an opened instruction reading "OTHER SIDE," and a star revealed when the card turns over. You initially allocate three seconds to the closed note, one to the instruction, and four to the star. The eight-second total looks tidy on paper, but the middle clue may pass before you read it. That is a question to test, not a rule that one second is always wrong. Text size, familiarity, and what else changes in the frame affect the actual reading task.`,
        ],
      },
      {
        title: 'Experience the proposed time instead of imagining it',
        paragraphs: [
          `A timed storyboard, sometimes developed into an animatic, presents planned views in order for chosen durations. It does not require polished animation. Hold your own paper panels while using a clock, or record them sequentially on one phone and review the result. Speak any planned cue softly instead of adding borrowed music. Notice when the instruction becomes readable and whether the star remains after its information is clear. Moves between paper panels are placeholders, not finished cuts.`,
        ],
      },
      {
        title: 'Move time to the unresolved information',
        paragraphs: [
          `Try a second eight-second allocation: three seconds for the closed note, three for the instruction, and two for the star. You have moved two seconds from the final hold to the clue, not increased the total. Compare whether this particular instruction can now be followed without rushing. Record actual test duration separately if the handoffs add time; the plan and recording need not match exactly. Keep one reason for the chosen version, such as reading the clue before the turn. If both versions remain unclear, enlarge the lettering or simplify the action rather than treating extra duration as the only repair.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'First timing plan: eight seconds',
        alt: 'Closed note: three seconds; instruction: one second; star: four seconds.',
        caption: 'Original proposed holds, not measured footage. Box widths are not proportional.',
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
        caption: 'Two seconds move from star to clue. These planned holds are not universal reading-time recommendations.',
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
        `Draw the closed note, large OTHER SIDE instruction, and star. Label the first planned holds as three, one, and four seconds.`,
        `Hold or record each panel in order for those durations. Keep sound gentle and use only your own drawings.`,
        `Repeat with three, three, and two seconds. Note any real handoff time separately rather than claiming the recording is exactly eight seconds.`,
        `Choose a version and write why its clue is readable. A live paper rehearsal is sufficient; label it a timing test, not a finished film.`,
      ],
      notice: 'Your timing revision addresses a specific unreadable cue while the planned total remains eight seconds.',
      troubleshooting: 'If you already know the clue too well, check its letter size and ask a willing fresh viewer, without claiming one response predicts everyone.',
    },
    recall: {
      prompt: 'A route arrow is clear, but the next destination label disappears before it is readable. What timing experiment fits?',
      hint: 'Identify which panel still has information to deliver.',
      answer: 'Transfer unnecessary hold from arrow to label, then rehearse. Check lettering size and keep planned durations separate from measured ones.',
    },
    quiz: {
      question: 'An eight-second plan records as ten seconds including panel handoffs. What should the notes say?',
      options: ['Eight seconds, because that was the planned total.', 'Ten seconds proves every final edit must be ten seconds.', 'Eight seconds planned; ten seconds measured in this rough rehearsal, including handoffs.'],
      correctIndex: 2,
      explanation: 'Both numbers have different meanings. A rough rehearsal exposes timing costs but does not force the final edit to retain its paper-panel transitions.',
    },
    takeaway: 'Rehearse chosen holds, revise the unreadable moment, and distinguish the timing plan from the recording.',
    sourceNote: 'Shot-list and Yale editing references support these original timing plans. No animation or export is supplied.',
  },
  {
    id: 'cinema-061',
    outcome: 'Turn a craft interest into an original visible change using available resources.',
    scene: 'A discarded draft becomes a folded invitation through its blank reverse.',
    sections: [
      {
        title: 'Keep the question, not the borrowed scene',
        paragraphs: [
          `Admiring a film does not require recreating its dialogue, staging, or soundtrack. Soham Gadre's BFI essay on Mani Ratnam's Dil Se.. is an optional critical reference with spoilers. Dil Se.. is a Hindi-language film; a filmmaker associated with Tamil cinema can work in other languages too. Rather than labeling every work Kollywood or claiming the essay proves a director's intention, identify your own craft question. Here the question is: can an ordinary object change function clearly enough to carry a short scene without explanation?`,
        ],
      },
      {
        title: 'Make the change visible and small enough to stage',
        paragraphs: [
          `A premise is a compact account of a situation and its change, not a shopping list of equipment. Your original writer has abandoned a draft covered with invented crossing-out marks. They turn it over, use the blank side for a simple invitation, and fold it. The useful transformation is from rejected draft to a different usable object. It can happen with one performer, one room, and paper you own. The audience needs to see the rejected side and the new use; a private explanation in your notes will not substitute for those views.`,
        ],
      },
      {
        title: 'Compare premises against what you can actually show',
        paragraphs: [
          `You might also propose finding a loose button in a coat cuff or turning a scarf into a book wrap. Compare the visible beginning, obstacle, and changed ending of each. Choose the draft-to-invitation idea if you can make its two sides readable without real personal messages. Use your own marks and a fictional greeting. Keep the paper sounds original or omit music entirely. Record the broad craft influence separately from the invented action. This preserves a question worth exploring without claiming to reproduce a filmmaker's methods, borrowing a protected scene, or requiring an unavailable location after work.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A discarded draft gets a new use',
        alt: 'A crossed-out draft turns over and becomes a folded fictional invitation.',
        caption: 'Original objects and actions, not a recreation of a scene from the optional BFI reference.',
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
        `Write a craft question without naming a scene to copy, such as how an object can change function visibly.`,
        `Draft three one-sentence premises using objects you already own. Include a beginning and a changed ending in each.`,
        `Choose one that fits a permitted room and your own performance. List the exact views needed to reveal the change.`,
        `Remove private text, borrowed music, and extra locations. Keep the premise and a paper frame plan; do not describe the film as completed.`,
      ],
      notice: 'The selected premise can be explained through a few visible actions rather than dependence on a famous soundtrack or plot.',
      troubleshooting: 'If the ending is only a feeling, add an observable choice or changed object. If it needs more resources, reduce the event.',
    },
    recall: {
      prompt: 'You admire how a film repeats a sound, but have only a room, a zip pouch, and paper. How could you create an original small test?',
      hint: 'Transfer the question about repetition, not the original music or scene.',
      answer: 'Invent a pouch-packing action where your own zipper sound recurs before and after a visible packing decision. Keep the situation and recording original, or plan it on paper.',
    },
    quiz: {
      question: 'Which premise most directly tests an object changing function within one room?',
      options: ['A person explains in narration why an unseen journey changed their life.', 'A crossed-out draft turns over and becomes a folded invitation on screen.', 'A montage visits several locations while repeating a favorite film song.'],
      correctIndex: 1,
      explanation: 'The paper transformation is visible and fits the stated resources. Narration may describe a change without showing it; the montage adds location and rights dependencies.',
    },
    takeaway: 'Borrow a broad craft question, then invent a visible change you can stage with your own resources.',
    sourceNote: 'The inherited BFI essay is optional criticism, not a director account or a template. The premises here are original and use no quoted film material.',
  },
  {
    id: 'cinema-062',
    outcome: 'Plan essential views, real constraints, and a complete single-shot fallback.',
    scene: 'Turning a rectangular sheet before rerolling makes its paper roll fit a bag.',
    sections: [
      {
        title: 'Plan the complete event before extra coverage',
        paragraphs: [
          `Your original scene has a practical problem: a rectangular sheet rolled one way is too long for a bag. The performer unrolls it, turns the sheet, rolls from the other edge, and fits the shorter roll inside. Test the actual paper and bag before writing a script around that change. They must allow the contrast without forcing anything. One wide view can show the complete event. A close view of the turn and a closer ending are useful only if they make a specific part easier to understand.`,
        ],
      },
      {
        title: 'Resources include quiet and a repeatable reset',
        paragraphs: [
          `A production plan translates the story into things you can arrange: a permitted room, supported phone, available light, enough battery and storage, a clear surface, and a stopping time. Note what your device actually supports rather than assuming separate audio tracks or clip joining. Keep necessary equipment operating normally. Ordinary daylight is usable if it stays consistent enough for your brief test; do not improvise hazardous lighting. A reset returns paper, bag, and hands to their starting positions for another take.`,
        ],
      },
      {
        title: 'Assign each shot a job and a fallback',
        paragraphs: [
          `Call the complete wide view A. It must show the too-long roll, the turn, and the successful fit without hiding the bag opening. B is an optional detail of unrolling and turning; C is an optional closer fit. Record A first to preserve a complete event. Reset before each extra view and keep screen direction consistent. If joining clips is unavailable, A is the film plan, not a failure requiring new equipment. If the space, phone, or permission is unavailable, finish the paper production map and mark the recording as not yet done.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Keep the opening and roll visible',
        alt: 'A supported phone faces the paper and bag beside existing daylight.',
        caption: 'Top view, not to scale. Arrow: paper-to-bag action. Keep surfaces and exits clear.',
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
        caption: 'Planned production order, not recorded coverage. A alone works without clip joining.',
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
        `Test both roll directions gently. If both fit, choose another available sheet or bag, or revise the premise.`,
        `List permission, phone support, light, normal sound, battery, storage, and stopping time. Mark unchecked items honestly.`,
        `Draw A, B, and C with their jobs. Test a brief wide view only if the space and recording permissions are suitable.`,
        `Remove one optional setup and write the single-shot fallback. Keep a paper plan if recording is unavailable; it is not completed coverage.`,
      ],
      notice: 'The event remains complete without the optional close views.',
      troubleshooting: 'If the turn seems unexplained, reposition bag or phone safely to reveal the fit problem before adding shots.',
    },
    recall: {
      prompt: 'A laundry-folding short needs three views, but storage is limited and clips cannot be joined. What would you prioritize?',
      hint: 'Preserve the whole event before collecting fragments.',
      answer: 'Check space without deleting originals, then stage the unfolded-to-folded change in one wide view. If recording remains unavailable, retain the unshot plan.',
    },
    quiz: {
      question: 'You have time for only one setup in the paper-roll scene. Which shot preserves the most complete story?',
      options: ['The wide view containing the initial problem, reroll, and successful fit.', 'The close view of the finished roll without its earlier problem.', 'The detail of hands turning paper without showing the bag.'],
      correctIndex: 0,
      explanation: 'The wide view contains the change and its cause. The details may help an edit but cannot alone establish why the paper is turned.',
    },
    takeaway: 'Map each shot to necessary information and protect a complete version within actual constraints.',
    sourceNote: 'Shot-list and Apple references inform this original unrecorded plan; device support varies.',
  },
  {
    id: 'cinema-063',
    outcome: 'Rehearse a complete scene and use nonleading feedback to correct one unclear cue.',
    scene: 'A hand hides the initial paper-roll fit problem during rehearsal.',
    sections: [
      {
        title: 'The rehearsal reveals a missing piece of the story',
        paragraphs: [
          `You rehearse the paper-roll scene: a long roll will not fit the bag, so you unroll, turn, reroll, and pack it. While performing, the reason for turning feels obvious. On playback, your hand covers the bag opening during the first fit test. A viewer sees paper being handled but never sees why. Rehearsing the whole action catches this problem better than checking only the attractive ending. The scene needs a visible beginning, changed action, and outcome, not merely a successful final image that you understand from memory.`,
        ],
      },
      {
        title: 'Ask for what was understood before explaining',
        paragraphs: [
          `Invite a willing viewer to describe what changed and which moment showed it. Do not introduce the clip by explaining that the roll is too long; that gives away the very information you want to test. A useful response might be, "I saw the paper turn, but I did not know why." Ask where the uncertainty began, then listen without defending the shot. One person's response is feedback about this viewing, not evidence that every audience will be confused. You can review alone, but mark your familiarity with the story as a limitation.`,
        ],
      },
      {
        title: 'Fix one visible obstruction and rehearse again',
        paragraphs: [
          `Move your hand away from the opening during the first fit test and hold the long roll beside it long enough to inspect. Keep the camera and remaining action similar so you can judge that correction. Time the whole rehearsal with the recording display or a clock; do not assume it lasts one minute because that was the goal. Replay the corrected version or request another willing viewing. Record the actual duration and one remaining issue. Keep performers, private documents, and the rehearsal within agreed permissions. Public posting and new equipment are unnecessary for identifying this small, observable repair.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'dialogue',
        title: 'Feedback locates the hidden fit test',
        alt: 'A viewer misses the reason for turning paper because a hand hides the opening.',
        caption: 'Invented rehearsal feedback. Ask before explaining the long-roll problem.',
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
        `Use a permitted room and your own performance. Check the paper-roll contrast, clear private items, and support the phone if recording.`,
        `Rehearse the complete action, including beginning and ending. Measure the duration rather than stopping your notes at the planned minute.`,
        `Review alone or ask a willing viewer what changed without a plot introduction. Write the cue seen and any moment of confusion.`,
        `Change one obscured cue and rehearse again. Without recording, perform against a paper frame and label the result a live rehearsal, not a saved film.`,
      ],
      notice: 'The correction responds to an identifiable missing cue, with a measured rehearsal duration or an explicit timing limitation.',
      troubleshooting: 'If feedback is only nice or boring, ask which action was understood and where it became unclear, without suggesting the desired answer.',
    },
    recall: {
      prompt: 'A viewer misses a brief sock mismatch in your laundry scene. What should you ask before explaining it?',
      hint: 'Find their information, not agreement with your intended plot.',
      answer: 'Ask what changed and which item they noticed before the change. Check whether the mismatch was readable, then revise that cue rather than supplying the answer first.',
    },
    quiz: {
      question: 'Which question best checks whether a rehearsal communicates its change without feeding the answer?',
      options: ['Did you notice the roll was too long before I turned it?', 'Would the bag problem be clearer with a closer shot?', 'What changed during the scene, and what showed you the change?'],
      correctIndex: 2,
      explanation: 'The open question elicits the viewer account. The alternatives supply the problem or a proposed fix before checking comprehension.',
    },
    takeaway: 'Rehearse the whole event, locate an unclear cue, and test one correction without coaching the viewer.',
    sourceNote: 'Directing and shot-list references support rehearsal. This invented exchange does not establish general audience responses.',
  },
  {
    id: 'cinema-064',
    outcome: 'Inspect a saved short when tools permit, or document its unfinished stage accurately.',
    scene: 'A continuous paper-roll packing film aims for a checked minute.',
    sections: [
      {
        title: 'Give the minute a beginning, change, and ending',
        paragraphs: [
          `Use your own prepared scene or the paper-roll packing story: the long roll does not fit, turning the sheet changes the roll, and the shorter roll goes into the bag. One possible sixty-second plan assigns ten seconds to the first fit problem, fifteen to unrolling and turning, twenty to rerolling, and fifteen to the successful fit and ending. These are invented planning holds, not a rule about pacing. Rehearse with your actual materials and revise within the minute if a movement or clue needs different time.`,
        ],
      },
      {
        title: 'A saved recording can be the complete version',
        paragraphs: [
          `Record a complete continuous view if joining clips is unavailable. If existing editing tools work, keep the original and make changes on a copy. Aim for sixty seconds, using a timed rehearsal and supported trim controls rather than assuming the file matches the board. Opening an editing project is not the same as checking its saved output. Play the actual recording or exported copy from beginning to end. Inspect orientation, readable action, ordinary listening-level sound, the final frame, and the duration the player reports.`,
        ],
      },
      {
        title: 'Describe the result you actually have',
        paragraphs: [
          `If the file runs sixty-two seconds and you cannot trim it, record that duration honestly instead of claiming an exact minute. If no recording was possible, a paper plan is useful preparation but not a completed phone film. An unplayed export is not a checked result either. Keep the scope private unless every participant and location permission covers the intended sharing; exclude real messages and uncleared sound. Choose one concrete next improvement, such as making the first fit test easier to see, then stop this session. Finishing means checking a real artifact when available, not endless polish or a promise that the next tool will finish it.`,
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'One proposed minute for the paper roll',
        alt: 'Fit problem: ten seconds; turn: fifteen; reroll: twenty; fitted ending: fifteen.',
        caption: 'Original planned holds total sixty seconds. Boxes are not proportional; no completed recording is claimed.',
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
        `Spend three minutes checking permission, paper-and-bag fit, storage, battery, stable framing, and absence of private background material.`,
        `Spend two minutes rehearsing with a clock. Keep the problem and changed ending visible.`,
        `Spend five minutes recording up to two quiet takes. Use a continuous view if clip joining is unsupported.`,
        `Spend five minutes trimming a copy if supported and replaying the saved result. Note duration and one improvement; label unrecorded paper plans unfinished.`,
      ],
      notice: 'You have either a saved artifact checked from start to finish with its actual duration, or a clearly named unfinished stage.',
      troubleshooting: 'If export fails, keep the original and document the failure. Do not delete source takes, promise a finished export, or force an unfamiliar tool.',
    },
    recall: {
      prompt: 'A garden-object short plays correctly in an editor, but its saved copy is sideways and misses the ending. What would count as finishing?',
      hint: 'The audience receives the saved artifact, not your editing preview.',
      answer: 'Correct the output if supported, then replay that saved copy through the ending. Until it is checked, report the output problem rather than claiming completion.',
    },
    quiz: {
      question: 'Your phone saved a complete sixty-one-second take, but has no supported trim control. Which completion note is accurate?',
      options: ['Exactly sixty seconds, because the storyboard total was sixty.', 'Checked continuous take: sixty-one seconds; exact-minute trim remains unavailable.', 'Finished export: the editing project opens and displays the planned ending.'],
      correctIndex: 1,
      explanation: 'Report the saved file and actual duration. The board and project are not substitutes for inspecting the artifact, and an exact-minute limit should not be invented.',
    },
    takeaway: 'Check the actual saved film and its duration; label a plan, failed export, or unfinished trim honestly.',
    sourceNote: 'Apple and Blackmagic supply optional technical references; tools vary. This original exercise includes no completed or verified export.',
  },
]