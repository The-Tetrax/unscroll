import type { LessonGuide } from './types'

// Original teaching and schematic data. Source links are inherited by lesson ID.
export const techGuides: LessonGuide[] = [
  {
    id: 'tech-001',
    outcome: 'Explain why a video call can freeze while Wi-Fi shows full signal bars.',
    scene: 'An office video call shares a radio channel with a laptop uploading a backup.',
    sections: [
      {
        title: 'Full bars, frozen call',
        paragraphs: [
          'You are on a video call and the picture freezes. You glance at the Wi-Fi indicator, expecting a weak signal. It shows full strength. Across the room, your other laptop is quietly uploading a backup of your photos. Both machines use the same Wi-Fi box. That box is called an access point, or AP: the device that connects wireless laptops and phones to the rest of the network.',
          'This moment is worth understanding, because the obvious fixes are wrong. Moving closer will not help. The signal bars only measure how clearly your laptop receives the radio waves of the AP. They say nothing about when your laptop is allowed to send. Hearing clearly and getting a turn to speak are different things.',
        ],
      },
      {
        title: 'A meeting room with one microphone',
        paragraphs: [
          'Picture a meeting room with a strict rule: one person may speak at a time. Before speaking, you listen. If someone is talking, you wait. When silence returns, you do not jump in instantly. Everyone who wants to speak silently counts down a different random number. Whoever finishes counting first starts talking. Everyone else stops counting and waits for the next silence.',
          'The random countdown sounds odd, but it solves a real problem. If everyone spoke the moment silence arrived, several people would start at once and nobody would be understood. Random waits spread the speakers out.',
        ],
      },
      {
        title: 'Your laptop is counting in that room',
        paragraphs: [
          'Ordinary Wi-Fi works like that meeting room. The shared space is the channel: the slice of radio frequencies that nearby devices use together. Only one device can use the channel at a time, and that includes the AP itself. Before sending, your laptop listens. If the channel is busy, it waits.',
          'When the channel goes quiet, your laptop counts down its own random number, called a backoff counter. The countdown moves one step for each short moment of quiet. Here is the key rule: if another device starts sending, the countdown freezes. It does not reset, and it does not keep running. It holds its place until quiet returns.',
        ],
      },
      {
        title: 'Watch one frozen countdown',
        paragraphs: [
          'Follow your call laptop through one wait. Its counter stands at four. Two quiet moments pass, so the counter drops to three, then two. Now the backup laptop takes the channel and sends for an illustrative three milliseconds. For that whole busy stretch, your counter holds at two. Time passes, but no progress is made. When quiet returns, the countdown resumes: one, then zero. Only now does your call laptop send.',
          'That frozen stretch is the freeze you saw on screen, and the signal bars never moved. One caution before you blame every pause on sharing: other delays exist too. The radio may retry a damaged transmission, the path beyond your AP may be congested, and the call software adds its own processing. Modern Wi-Fi also has scheduled modes that go beyond this simple taking of turns. The distinction to keep is this: signal strength is about hearing, and channel sharing is about turns.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two laptops, one shared channel',
        alt: 'Call and backup laptops share an AP connected to a router.',
        caption: 'Start with the call laptop and follow its wait. Timing and counter values are illustrative; distances are schematic.',
        items: [
          { label: 'Call laptop', detail: 'Counter: 4, then 2; frozen while the channel is busy', x: 18, y: 25, shape: 'screen' },
          { label: 'Backup laptop', detail: 'Occupies this channel for 3 ms', x: 18, y: 78, shape: 'screen' },
          { label: 'Access point', detail: 'Shares radio airtime with both laptops', x: 52, y: 50, shape: 'box' },
          { label: 'Router', detail: 'Wired onward path, not a radio reservation', x: 85, y: 50, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 2, label: 'waiting' }, { from: 1, to: 2, label: 'sending' }, { from: 2, to: 3, label: 'wired' }],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Draw two rows on paper: one for the call laptop counter, one for channel activity. Start the counter at 4.',
        'Mark two quiet moments in the activity row. Under each one, reduce the counter by one, writing 3 and then 2.',
        'Draw a busy block labeled backup, 3 ms. Keep the counter written as 2 across the whole block, because frozen means no progress.',
        'After the block, mark two more quiet moments and finish the countdown to zero. Circle that point: it is the first moment the call laptop may send.',
      ],
      notice: 'Your drawing has a stretch where time clearly passes but the counter does not move. That stretch is the wait that full signal bars cannot explain.',
      troubleshooting: 'If your counter reached zero during the backup block, you let ordinary time reduce it. Only quiet moments count. Redo that block holding the counter at 2.',
    },
    recall: {
      prompt: 'A training-room tablet moves closer to the access point but still pauses whenever several classmates upload files at once. What would you explain?',
      hint: 'Hearing the AP clearly and getting a turn on the channel are different things.',
      answer: 'Moving closer improves how clearly the tablet and the AP hear each other. It does not reduce the number of devices wanting a turn. While classmates upload, the tablet still waits, and its countdown freezes during their transmissions. The pauses come from sharing the channel, not from weak signal. Noticing when the pauses happen, such as only during uploads, is the useful evidence.',
    },
    quiz: {
      question: 'Your device is counting down to send, with two steps left, when another device starts transmitting. What happens to the countdown in this simple taking of turns?',
      options: ['It keeps counting down while the other device sends.', 'It restarts from a new random number because the channel became busy.', 'It freezes at two, and resumes only when the channel is quiet again.'],
      correctIndex: 2,
      explanation: 'The countdown only moves during quiet time. A busy channel freezes it in place; it neither keeps running nor starts over. That is why a waiting device makes no progress while someone else sends, even though the clock keeps ticking and the signal stays strong.',
    },
    takeaway: 'Signal bars measure how clearly you hear the network. They do not measure when you get a turn to send.',
    sourceNote: 'RFC 8325 grounds this contention example. The millisecond figures are illustrative, scheduled multi-user Wi-Fi adds mechanisms beyond this taking of turns, and this lesson is not a network diagnosis.',
  },
  {
    id: 'tech-002',
    outcome: 'Work out the download speed a file really saw and why it differs from the adapter display.',
    scene: 'An editor downloads a training-video asset and compares its transfer with an adapter display.',
    sections: [
      {
        title: 'Two speeds that disagree',
        paragraphs: [
          'A 60 megabyte video file just downloaded in four seconds. Curious, you open the Wi-Fi adapter status, and it reports 600 megabits per second. You do some rough math and the numbers refuse to agree. The file clearly did not arrive at 600 megabits per second. Is the adapter lying?',
          'Neither number is broken. They answer different questions. The difference matters, because people pay for faster plans or new routers to fix a number that was never the problem. Before spending anything, learn what each speed actually measures.',
        ],
      },
      {
        title: 'Bits and bytes first',
        paragraphs: [
          'A bit is a single binary digit, a one or a zero, and it is the smallest unit networks move. A byte is a group of eight bits. File sizes are usually shown in bytes, while network speeds are shown in bits per second. That factor of eight causes half the confusion on its own. In this lesson, mega simply means one million.',
          'So the 60 megabyte file contains 60 million bytes. Multiply by eight: 480 million bits, which is 480 megabits. Keep that number nearby.',
        ],
      },
      {
        title: 'What each display measures',
        paragraphs: [
          'The adapter number is the link rate: how fast the radio can push bits during the moments it is actually transmitting, under current conditions. Think of it as the top speed of a delivery van while it is moving.',
          'The download cares about something else: throughput, the useful data that actually arrived, divided by the whole elapsed time. That is the van measured across the full trip, including every red light. For your file: 480 megabits divided by four seconds gives 120 megabits per second. The van can do 600 while moving, yet the trip averaged 120.',
          'Where did the rest of the time go? The laptop shares the channel and waits for turns. Every chunk of the file travels wrapped in delivery information. The receiver sends confirmations back. Damaged chunks are sent again. And the far server, or any link along the path, can be the slow point. None of that shows on the adapter display, which can also change from moment to moment.',
        ],
      },
      {
        title: 'Why the rate still matters, and where this stops',
        paragraphs: [
          'To feel what the link rate alone does, time one small piece of data. Take 12000 bits. At 600 million bits per second, sending them takes 20 microseconds; a microsecond is one millionth of a second. At 150 million bits per second, the same bits need 80 microseconds, four times longer. A slower active transmission occupies the shared channel for longer, which leaves less airtime for everyone.',
          'Two cautions keep this honest. These tiny times cover only the chosen bits, with every wait and wrapper deliberately left out, so they do not predict a whole download. And a device that is merely connected but idle is not spending airtime; only transmissions occupy the channel. When a download disappoints, compare throughput with throughput across days, never throughput with a link-rate snapshot.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Time to serialize the same 12000 bits',
        alt: 'At 600 megabits per second, 12000 bits take 20 microseconds; at 150, they take 80 microseconds.',
        caption: 'Compare the two bars: same bits, four times the airtime at the slower rate. These illustrative times exclude wireless overhead and waiting, so neither bar predicts a whole download.',
        unit: 'microseconds',
        items: [
          { label: '600 Mbit/s', detail: '12000 / 600000000 seconds', value: 20 },
          { label: '150 Mbit/s', detail: '12000 / 150000000 seconds', value: 80 },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Invent a download: 30 megabytes delivered in three seconds, while the adapter displays 300 megabits per second. Write the two numbers far apart so they stay separate questions.',
        'Convert the file: 30 megabytes times eight is 240 megabits. Divide by three seconds to get 80 megabits per second. Label it throughput.',
        'List two time costs the adapter display never counts, such as waiting for turns on the channel and resending damaged chunks.',
        'Change only the elapsed time to six seconds and recalculate: 40 megabits per second. The adapter display did not change, so it alone cannot explain the slower delivery.',
      ],
      notice: 'Your two throughput results, 80 and 40 megabits per second, differ while the displayed link rate stayed at 300. The elapsed time carried the explanation, not the display.',
      troubleshooting: 'If you got 10 instead of 80, you divided megabytes by seconds. Convert bytes to bits first: multiply by eight, then divide by the seconds.',
    },
    recall: {
      prompt: 'Your photo backup shows the same Wi-Fi link rate on two evenings, but one evening it takes twice as long. What evidence would you gather before blaming the Wi-Fi?',
      hint: 'The link rate is only one contributor to the whole elapsed time.',
      answer: 'First compare like with like: were the backups a similar size? Then compute throughput for each evening, useful data divided by elapsed time. If throughput halved while the link rate looked the same, the extra time went somewhere the display does not measure, such as channel sharing, resends, or a slow server. One snapshot also may not represent the rate across the whole transfer.',
    },
    quiz: {
      question: 'A 20 megabyte download, using decimal units, finishes in two seconds. What throughput did the file actually see?',
      options: ['80 Mbit/s', '10 Mbit/s', '160 Mbit/s'],
      correctIndex: 0,
      explanation: '20 megabytes is 160 megabits, and 160 megabits over two seconds is 80 megabits per second. The answer 10 comes from skipping the bytes-to-bits conversion. The answer 160 comes from forgetting to divide by the two seconds.',
    },
    takeaway: 'Convert bytes to bits, divide by the whole elapsed time, and compare throughput with throughput, never with a link-rate snapshot.',
    sourceNote: 'The inherited wireless and latency references explain overhead and elapsed delay. All file sizes and rates here are hypothetical, with decimal units stated explicitly.',
  },
  {
    id: 'tech-003',
    outcome: 'Follow a voice-priority label from a packet into Wi-Fi treatment, and know what it can and cannot promise.',
    scene: 'A support softphone and a background sync compete during a quality-of-service design review.',
    sections: [
      {
        title: 'Marked as voice, still breaking up',
        paragraphs: [
          'A support agent complains that call audio breaks up whenever a background sync runs. The design note replies: voice traffic is marked as priority. The audio keeps breaking. The note is not wrong, but it describes a label, not a result. Until every hop reads and honors that label, marking changes nothing.',
          'This lesson follows the label end to end, because the gap between marked and treated is where real voice problems hide, and where review time is best spent.',
        ],
      },
      {
        title: 'A label is not a lane',
        paragraphs: [
          'Think of priority boarding at an airport gate. Your ticket prints priority, but that word only matters if the gate staff read it and send you through the faster lane. And even then, boarding priority does not pull a passenger back out of the jet bridge. Someone already walking down it finishes walking.',
          'The ticket label of networks is called DSCP: a small field inside each IP packet that names the treatment the sender hopes for. Hopes is the honest word. DSCP is read by policy at each device, and it reserves nothing. A packet marked for fast treatment still competes for the same links as everything else.',
        ],
      },
      {
        title: 'The Wi-Fi boundary speaks its own language',
        paragraphs: [
          'Wireless gear does not act on DSCP directly. Wi-Fi has its own priority scale, called user priority, which selects one of a few access categories, such as voice, video, and best effort. A policy must translate: this DSCP value becomes that user priority, which lands in that category. The design under review maps DSCP 46, the common voice value, to user priority 6, which selects the voice category.',
          'What does the voice category actually change? Wi-Fi devices take turns using random countdowns before sending. The voice category waits a shorter required quiet time and draws its countdown from smaller numbers. On average, voice frames get earlier turns. That is the whole mechanism: better odds, more often.',
        ],
      },
      {
        title: 'What priority cannot do',
        paragraphs: [
          'Three limits keep expectations honest. First, a transmission already on the air is never interrupted; like the jet bridge, a started transmission finishes. Second, better odds are not strict ordering, so a bulk frame will sometimes legitimately go before a voice frame. One such event does not prove the mapping is broken. Third, the category is shared, not private: mark every application as voice and they all compete inside the same favored lane, which manufactures no capacity at all.',
          'When you review a design like this, check three things separately. Is the classification right? Does the mapping survive the boundary into user priority? And is the channel so busy that even favored odds are poor? A broken answer at any of the three looks identical to the agent: choppy audio.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A specified voice classification path',
        alt: 'DSCP 46 maps to Wi-Fi user priority 6 and then to the voice access category.',
        caption: 'Follow the label across the mapping boundary; the middle box decides whether the radio ever hears about it. This illustrative policy is not a vendor default.',
        items: [
          { label: 'IP marking', detail: 'DSCP 46: Expedited Forwarding' },
          { label: 'Wireless mapping', detail: 'Selected user priority: 6' },
          { label: 'Voice category', detail: 'AC_VO: favorable contention parameters, still shared airtime' },
        ],
        arrows: [{ from: 0, to: 1, label: 'policy' }, { from: 1, to: 2, label: 'category' }],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Two colored pencils'],
      steps: [
        'Copy the three boxes from the diagram: DSCP 46, user priority 6, voice category. Underneath, draw a second path for a background sync: no marking, user priority 0, best effort category.',
        'Write shared radio channel where both paths end, and add the note: neither category interrupts a frame already on air.',
        'Sketch the failure case: keep the DSCP 46 marking but map it to user priority 0. Mark the exact box where the intended advantage silently disappears.',
        'Write one review question that asks for the documented mapping table and recent channel-busy evidence, instead of proposing a configuration change.',
      ],
      notice: 'Both sketches contain the same marking. Only the mapping box decides whether the radio ever treats voice differently.',
      troubleshooting: 'If your sketch gave voice its own channel, merge the two paths back into one shared radio medium; only the waiting rules differ between categories.',
    },
    recall: {
      prompt: 'A meeting-room audio stream gets correct wireless priority but still stalls, and the congestion turns out to be on an upstream wired link. Why did the priority not help?',
      hint: 'Ask where the favored treatment begins and ends.',
      answer: 'The Wi-Fi mapping only improves the odds of earlier turns on that one wireless link. The congested wired link upstream has its own queues and its own policy, and it never honored the wireless category. Correct local treatment cannot create capacity elsewhere. Each hop needs its own answer to the question: how is this traffic treated here?',
    },
    quiz: {
      question: 'One best-effort frame transmits before a voice frame. Does that single event prove the voice mapping is broken?',
      options: ['Yes, voice treatment means voice frames always go first.', 'No, the voice category improves average odds, not every individual ordering.', 'No, because wireless gear reads DSCP directly without any mapping.'],
      correctIndex: 1,
      explanation: 'The voice category gives shorter waits and smaller random countdowns, which wins earlier turns on average. Individual random draws still sometimes favor other traffic, so one ordering proves nothing. The third option fails because Wi-Fi acts on user priority, which only exists if the mapping translated the DSCP label.',
    },
    takeaway: 'A priority label helps only where it is mapped and honored, and even then it buys better odds, not a private lane.',
    sourceNote: 'RFC 8325 describes DSCP, user-priority mapping, and wireless access categories. The mapping shown is an illustrative policy, not a vendor default, and no end-to-end guarantee is implied.',
  },
  {
    id: 'tech-004',
    outcome: 'Tell a Wi-Fi retry apart from real data loss, and know which observer can see each.',
    scene: 'A log-file upload is compared with radio retry statistics and a wired observation point.',
    sections: [
      {
        title: 'Two reports that seem to disagree',
        paragraphs: [
          'A laptop uploads a log file through the office access point. The wireless statistics page records a retry. A capture taken on the wired network behind the access point shows exactly one copy of the packet, delivered cleanly. One tool says something went wrong; the other says nothing did. Which report is lying?',
          'Neither. They watch different parts of the journey. Understanding why saves you from two common mistakes: treating every radio retry as lost data, and treating a clean wired capture as proof the radio had an easy time.',
        ],
      },
      {
        title: 'Redelivery at the front door',
        paragraphs: [
          'Picture a courier delivering a parcel to an office building. The courier hands it to the front desk and waits for a signature. No signature comes, so the courier tries the handoff again, and this time gets one. Inside the building, the mail room receives exactly one parcel. Nobody in the mail room ever learns that the handoff took two tries.',
          'Wi-Fi delivers in the same shape. The radio sends a frame, the local delivery unit of the wireless link. For the one-to-one traffic in this example, the receiver answers each good frame with a short acknowledgment, like a signature. If the sender gets no acknowledgment, it sends the frame again. That repeat is a retry: a second handoff attempt at the front door, not a second parcel.',
        ],
      },
      {
        title: 'Follow the timeline',
        paragraphs: [
          'Here is the synthetic record behind the two reports. The laptop transmits the frame; no acknowledgment returns. It retries; the acknowledgment arrives. The access point forwards the packet onto the wired network three milliseconds after the first attempt. The wired capture therefore shows one copy, just slightly late. The retry counter shows one retry. Both tools reported their own layer truthfully.',
          'One subtlety: a missing acknowledgment does not tell the sender which half was lost. The data frame may have died on the way in, or the acknowledgment on the way back. Either way the rule is the same, send again. The link also recognizes repeats, so a frame that actually arrived twice is not delivered to the upload twice.',
        ],
      },
      {
        title: 'Where each repair lives, and what retries cost',
        paragraphs: [
          'The retry is local repair, handled by the radio within moments. Standing behind it is a second, slower safety net: TCP, the transport protocol running between the two end computers. TCP numbers the bytes it sends and retransmits anything the far end never confirms. In our timeline TCP never had to act, because the radio fixed the problem first. If every radio attempt had failed, TCP would have recovered the data later, end to end.',
          'So what do retries cost, if the data arrives anyway? Time and airtime. Every extra attempt occupies the shared channel and delays everything waiting for a turn. A high retry rate is a congestion and radio-quality signal, not a loss percentage. And comparisons only work within one layer: match the direction, the time window, and the observation point before letting two counters argue with each other.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'What the wired observer misses',
        alt: 'Two laptop radio attempts produce one packet beyond the AP, visible to a wired observer.',
        caption: 'Follow the two radio attempts on the left, then the single forwarded copy on the right. Attempt counts and the three-millisecond forwarding time are synthetic.',
        items: [
          { label: 'Upload laptop', detail: 'Attempt 1: no acknowledgment; attempt 2: acknowledged', x: 15, y: 30, shape: 'screen' },
          { label: 'Access point', detail: 'Forwards the packet at t = 3 ms', x: 48, y: 30, shape: 'box' },
          { label: 'Wired observer', detail: 'Sees one forwarded copy, not two radio attempts', x: 82, y: 30, shape: 'eye' },
          { label: 'Log server', detail: 'TCP receives bytes; no TCP retry needed in this case', x: 82, y: 80, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'radio' }, { from: 1, to: 2, label: 'one copy' }, { from: 2, to: 3, label: 'onward' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Draw four boxes left to right: laptop, access point, wired observer, log server. This is the parcel route.',
        'Above the laptop, write attempt 1, no acknowledgment, then attempt 2, acknowledged. Draw a single packet leaving the access point at 3 ms.',
        'Count in writing: two radio attempts, one forwarded copy, zero TCP retransmissions. Note beside the server that the data arrived complete, just later.',
        'Now sketch the failure case: both radio attempts fail. Erase the forwarded packet and write TCP recovery would happen later, between the end computers.',
      ],
      notice: 'In the repaired case, the wired observer cannot tell a retry happened. The only trace that survives is the extra delay.',
      troubleshooting: 'If your two counts always match, your observer is on the radio side. Move it behind the access point, where only forwarded packets are visible.',
    },
    recall: {
      prompt: 'A wireless label printer logs many retries, while the print application reports every job successful. What is still unexplained?',
      hint: 'Repair changes whether data arrives, and also when.',
      answer: 'The retries were evidently repaired, since jobs complete, but each extra attempt spent airtime and added delay. Whether printing feels slow because of them needs timing evidence from the same direction and time window. Job success counts cannot answer a waiting question, and retry counts alone cannot answer a loss question.',
    },
    quiz: {
      question: 'Which observation fits a radio retry that successfully repaired the delivery?',
      options: ['One TCP retransmission appears for every radio retry.', 'The wired observer records both radio attempts.', 'The application receives the data slightly later, and TCP never retransmits.'],
      correctIndex: 2,
      explanation: 'Local repair finishes before TCP notices anything, so the data simply arrives a little later. The wired observer sees only forwarded packets, never the failed radio attempt, and TCP retransmits only when end-to-end confirmation is missing.',
    },
    takeaway: 'A retry is a second handoff attempt at the radio, usually visible downstream only as delay.',
    sourceNote: 'RFC 3366 and RFC 9293 ground link-layer and end-to-end recovery. The timeline is synthetic, and the example covers acknowledged one-to-one wireless traffic only.',
  },
  {
    id: 'tech-005',
    outcome: 'Find the last proven step between a connected Wi-Fi icon and a page that actually opens.',
    scene: 'A newly enrolled office tablet shows connected but cannot open the training portal.',
    sections: [
      {
        title: 'Connected, but to what?',
        paragraphs: [
          'A new office tablet shows the connected Wi-Fi icon, yet the training portal will not open. Someone says the Wi-Fi is broken. The icon says otherwise. Both are half right, because connected is not one thing. Getting a page onto a screen is a chain of separate steps, and the icon only vouches for the first link in that chain.',
          'Naming the exact step that failed changes the conversation. The network team hears a precise question instead of a vague complaint, and nobody spends an afternoon restarting equipment that was already working.',
        ],
      },
      {
        title: 'Getting into the building',
        paragraphs: [
          'Think of visiting an office building. The badge reader lets you through the front door. Inside, reception assigns you a desk. A directory tells you which room your meeting is in. And the person you came to meet still has to be there. Four separate services, and any one can fail while the others work.',
          'The connected icon is the front door. In Wi-Fi terms, the tablet has associated with an access point: the two radios have agreed to talk. Depending on the security setup, the network may also have checked who the tablet is before allowing ordinary traffic. That is all the icon can promise.',
        ],
      },
      {
        title: 'The desk, the directory, and the meeting',
        paragraphs: [
          'Next the tablet needs an address: its desk. An IP address identifies the tablet so traffic can find its way back to it, and on many networks a service called DHCP hands these out automatically. With an address and routing information, packets can leave the local network through the router, the box that forwards traffic between networks. No usable address means no conversation beyond the door.',
          'Then comes the directory. The tablet knows the portal by name, and DNS is the service that translates that name into a server address. A working lookup is its own separate success. Finally the portal server must accept the connection and return the page: the meeting actually happening. Each step depends on the one before it, and no step performs the work of the next.',
        ],
      },
      {
        title: 'Stop the conclusion at the evidence',
        paragraphs: [
          'Now apply it. The onboarding record shows association and network authorization completed at 10:00, and no usable IPv4 address at 10:01. In this IPv4-only example, the chain is proven exactly as far as the front door, and the next unresolved step is the desk: address configuration. Typing a different portal URL cannot help, because a name lookup needs the address step working first.',
          'Keep two habits from this. Mark later steps unknown rather than assuming they failed or passed; a valid address tomorrow would move the question to name lookup, not answer it. And treat the map as a reasoning aid, not a universal script: real networks also use IPv6, fixed addresses, and sign-in pages that intercept the first request.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'The intended portal path',
        alt: 'Tablet, AP, router, DNS resolver, and portal have separate connectivity roles.',
        caption: 'Arrows show intended traffic, not successful tests. Wireless access is established; address configuration remains unresolved.',
        items: [
          { label: 'Tablet', detail: '10:01: no usable leased IPv4 configuration', x: 16, y: 28, shape: 'screen' },
          { label: 'Access point', detail: '10:00: association and wireless authorization complete', x: 49, y: 28, shape: 'box' },
          { label: 'Router', detail: 'Forwards between networks after usable configuration', x: 82, y: 28, shape: 'box' },
          { label: 'DNS resolver', detail: 'Answers the portal-name query', x: 49, y: 80, shape: 'box' },
          { label: 'Portal server', detail: 'Must return the requested training page', x: 82, y: 80, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'wireless' }, { from: 1, to: 2, label: 'onward' }, { from: 2, to: 3, label: 'name query' }, { from: 2, to: 4, label: 'portal request' }],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Make five rows on paper: association, network authorization, address and route, name lookup, application reply. This is your chain of doors.',
        'Copy the fictional evidence in: associated yes, authorized yes, usable IPv4 address no. Write unknown, not failed, in the last two rows.',
        'Write the next question the evidence points to, about the address step only: what did the address request and reply look like in the onboarding record?',
        'Flip the address row to valid and notice what changes: the question moves to name lookup. The unknown rows stay unknown until each shows its own evidence.',
      ],
      notice: 'Each new piece of evidence narrows the next question by one step. It never silently proves the steps after it.',
      troubleshooting: 'If every row turned green the moment the icon appeared, ask what observation actually demonstrates each row. The icon only ever witnessed the first.',
    },
    recall: {
      prompt: 'A wired workstation resolves the portal name correctly but receives an error page from the server. Which steps are proven, and which question remains?',
      hint: 'An error page is still a reply from something.',
      answer: 'Name lookup worked, and something at the far end answered, so every step up to the application responded. The remaining question lives inside the application: the server accepted the connection but could not complete the request. That is a different conversation, with the portal team rather than the network team.',
    },
    quiz: {
      question: 'In the IPv4-only tablet example, association succeeded but no usable address was obtained. What is the next step to investigate?',
      options: ['Address configuration, before asking about name lookup or the portal.', 'The portal password, because association proves addressing worked.', 'The DNS record, because a connected icon proves a usable route.'],
      correctIndex: 0,
      explanation: 'The evidence stops at the missing address, so that is where the next question belongs. The other options skip over an unproven step: without an address, neither sign-in nor name lookup has had its turn yet.',
    },
    takeaway: 'A connected icon vouches for the first step only. Find the last proven step and ask about the next one.',
    sourceNote: 'NIST SP 800-153 and RFC 2131 ground these stages. The chain shown is IPv4-only and omits IPv6, static addressing, and captive sign-in flows.',
  },
  {
    id: 'tech-006',
    outcome: 'Read the four first-lease DHCP messages as steps, and say exactly where an unfinished exchange stopped.',
    scene: 'A media-room printer needs its first leased address from a server beyond its local network.',
    sections: [
      {
        title: 'A printer with no address yet',
        paragraphs: [
          'A new printer arrives in the media room. It joins the network, the panel says connected, yet nothing prints and the test page never emerges. Before the printer can exchange ordinary traffic, it needs an IP address: the identifier that lets network replies find their way back to it. On this network, addresses are handed out automatically by a service called DHCP. The printer must ask for one, and the asking is a short conversation with rules.',
          'The conversation matters when things go wrong. The difference between the printer never asked, the printer was offered an address, and the printer completed the lease decides who investigates next and where. To read the evidence, you need the four message roles.',
        ],
      },
      {
        title: 'Renting an address like a flat',
        paragraphs: [
          'Getting a first lease works like finding a flat. You announce you are looking: that is Discover. A landlord offers you unit 40: that is Offer. You tell that landlord you will take unit 40: that is Request. The landlord confirms and hands over the keys: that is ACK, short for acknowledgment. Four messages, two from each side, each with its own job.',
          'The word lease is literal. The address is permission for a limited time, not a purchase. And an offer is only an offer. Until the final confirmation arrives, the printer has nothing it can safely use.',
        ],
      },
      {
        title: 'When the landlord lives elsewhere',
        paragraphs: [
          'One wrinkle: the printer starts with no address, so its first messages are broadcast, which is a shout heard by every device on the local network. Shouts do not cross routers. If the DHCP server sits on another network, a relay on the local router forwards the conversation to it and carries replies back.',
          'Keep the roles straight: the relay is a messenger, and the server owns the decision about which address to allocate. If allocation fails, suspicion belongs on the server or the path to it, not on the messenger role itself. In the diagram, the printer is offered 192.0.2.40, an address range reserved for documentation examples.',
        ],
      },
      {
        title: 'Reading an unfinished exchange',
        paragraphs: [
          'Now the evidence. A capture shows Discover, an Offer of 192.0.2.40, and the printer sending its Request. The recording ends there: no ACK. What is proven? The printer asked, a server proposed, and the printer chose. What is not proven: completed allocation. The missing ACK could mean the confirmation was lost, never sent, or simply not recorded. The capture cannot say which participant failed, only where the proof stops.',
          'Two boundaries round this out. Even a received ACK is not quite the finish line, because the printer still checks that no other device is already using the address. And a returning device that already had a lease renews with Request and ACK alone, so a record without Discover is not automatically broken. Read messages against what the client already had.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Reaching a remote allocation server',
        alt: 'Printer connects through a DHCP relay to a remote DHCP server.',
        caption: 'Schematic route using a documentation-only address, not a real office.',
        items: [
          { label: 'Printer client', detail: 'Requests offered 192.0.2.40', x: 16, y: 50, shape: 'object' },
          { label: 'Router with relay', detail: 'Forwards between client network and server', x: 50, y: 50, shape: 'box' },
          { label: 'DHCP server', detail: 'Owns the lease allocation decision', x: 84, y: 50, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'local' }, { from: 1, to: 2, label: 'relayed' }],
      },
      {
        type: 'flow',
        title: 'Initial allocation roles',
        alt: 'Discover, Offer, Request, then ACK complete the illustrated message sequence.',
        caption: 'The sample stops after Request. ACK is missing evidence, not an observed event.',
        items: [
          { label: 'Discover', detail: 'Client seeks configuration' },
          { label: 'Offer', detail: 'Server proposes 192.0.2.40' },
          { label: 'Request', detail: 'Client selects that offer' },
          { label: 'ACK', detail: 'Server acknowledges allocation; absent here' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3, label: 'unproven' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Four small paper slips'],
      steps: [
        'Label four slips: Discover, Offer 192.0.2.40, Request 192.0.2.40, and ACK. Lay them out in conversation order.',
        'Write client beside Discover and Request, and server beside Offer and ACK. Add the relay between them as a messenger carrying both directions.',
        'Cover the ACK slip. Say the strongest honest conclusion aloud: offered and chosen, allocation unproven. Name one innocent reason the ACK could be missing from a recording.',
        'Uncover it and add a final note: after ACK, the client still checks that the address is not already in use. Confirmation is not yet a working application.',
      ],
      notice: 'Covering one slip changes what you can claim, not what happened. The slips make the gap between evidence and assumption physical.',
      troubleshooting: 'If your layout gives the relay the decision, move allocation back to the server slip; the relay only carries messages.',
    },
    recall: {
      prompt: 'A laptop that has used this network for weeks renews its address with only Request and ACK, no Discover. Is that broken?',
      hint: 'What did the laptop already have that the new printer did not?',
      answer: 'It is normal. The laptop already holds a lease, so it skips the search and asks the server it knows to extend its existing address. Discover opens a first allocation; renewal continues an old one. Judge a message record against the client situation, not against one fixed four-step script.',
    },
    quiz: {
      question: 'A capture shows the printer received an Offer, and nothing after it was recorded. What does the evidence establish?',
      options: ['The printer installed a valid, usable lease.', 'An address was proposed; the choice and confirmation remain unproven.', 'The relay rejected the address allocation.'],
      correctIndex: 1,
      explanation: 'An Offer proves a server proposed an address and the proposal reached the capture point. Selection and confirmation would need the Request and ACK, and the record stops before them. Nothing in it points at the relay, which carries messages and does not approve leases.',
    },
    takeaway: 'Read DHCP messages as steps in a conversation, and stop your conclusion at the last recorded step.',
    sourceNote: 'RFC 2131 defines these allocation and relay roles. This first-allocation walkthrough omits retransmission detail and prescribes no device commands.',
  },
  {
    id: 'tech-007',
    outcome: 'Use a lease timeline to explain why long-connected devices keep working while new ones cannot join.',
    scene: 'An edit workstation keeps working while a newly arrived laptop cannot obtain an address.',
    sections: [
      {
        title: 'One device works, the other cannot join',
        paragraphs: [
          'It is 14:00 in the edit suite. A workstation that has been on all day still reaches shared storage without complaint. A visiting laptop, fresh out of its bag, cannot get onto the network at all. Same room, same network name, opposite behavior. Two reasonable people draw opposite conclusions: the network is clearly fine, and the network is clearly broken.',
          'Both miss the real split. The workstation is living off permission it was granted this morning. The laptop is asking for new permission right now. The service that grants addresses can be unavailable while everything already addressed keeps flowing.',
        ],
      },
      {
        title: 'An address is a library loan',
        paragraphs: [
          'A DHCP lease works like a library loan. When the workstation joined the network this morning, the address service, DHCP, lent it an address for a fixed period, say eight hours. That loan is the lease. Once the book is checked out, the lending desk can close for lunch; your right to keep reading does not vanish with it.',
          'You only need the desk for two things: extending your loan, or borrowing something new. That is exactly the laptop problem. It is a new borrower standing at a closed desk, while the workstation sits in the corner, still reading. Neither device is lying about its experience; they are simply using two different services with two different states.',
        ],
      },
      {
        title: 'Three marked moments on the loan',
        paragraphs: [
          'Clients do not wait until the final minute to extend. At the renewal time, usually halfway through the lease, the client quietly asks the server that issued the loan for an extension. No answer? It keeps using the address and keeps trying. At the rebinding time, at seven eighths of the lease, it widens the request into a broadcast that any available server may answer.',
          'Only the third moment removes anything. If no extension has succeeded when the lease expires, the client must stop using the address. Renewal and rebinding are opportunities. Expiry is the deadline.',
        ],
      },
      {
        title: 'Put the clock on eight hours',
        paragraphs: [
          'Lay the example out. The lease starts at 09:00 and lasts eight hours. Renewal time: half of eight hours is four, so 13:00. Rebinding: seven eighths of eight hours is seven, so 16:00. Expiry: 17:00. At 14:00 the workstation has been renewing without success for an hour, and it still holds three hours of valid permission. Its smooth file access proves the lease has time left, nothing more.',
          'Three boundaries for real cases. Servers can set different timer values, so use the actual lease parameters before concluding anything. A successful extension restarts the timeline, so one working renewal changes everything after it. And when you meet this pattern, old devices fine while new devices are stuck, suspect the address service first: it is the one service that only newcomers and renewals need.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Eight hours of address permission',
        alt: 'Lease begins at 09:00, renews at 13:00, rebinds at 16:00, and expires at 17:00.',
        caption: 'Illustrative finite lease using default fractions. Events are ordered, not proportionally spaced; no extension succeeds in this example.',
        items: [
          { label: '09:00: lease begins', detail: 'Eight-hour permission starts' },
          { label: '13:00: renewal time', detail: '4 hours elapsed; quietly ask the issuing server' },
          { label: '16:00: rebinding time', detail: '7 hours elapsed; broadcast for any server' },
          { label: '17:00: expiry', detail: '8 hours elapsed; stop using the leased address' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Clock or calculator'],
      steps: [
        'Write a fresh lease on paper: starts at 10:00, lasts four hours, default fractions. The arithmetic is only half and seven eighths.',
        'Work the three moments: half of four hours puts renewal at 12:00, seven eighths puts rebinding at 13:30, and expiry lands at 14:00. Draw them on one line.',
        'Mark 13:00 and suppose every extension attempt has failed. Decide which side of expiry the client is on, and write whether it may keep using the address.',
        'Add a brand-new client arriving at 13:00 with no lease. Write one sentence on why the two devices behave differently at the same moment.',
      ],
      notice: 'At 13:00 the old client is rebinding but still authorized until 14:00. The newcomer has nothing to fall back on. One timeline explains both devices.',
      troubleshooting: 'If your rebinding time landed after expiry, you took seven eighths of the remaining time. Measure both fractions from the original start of the lease.',
    },
    recall: {
      prompt: 'A lobby display stays online even though its renewal requests have failed all afternoon. What single value tells you how long that can last?',
      hint: 'A failed renewal removes nothing by itself.',
      answer: 'Its lease expiry. The display keeps its address rights until the lease runs out, however many renewals fail before that. Find the expiry from the actual current lease, including any earlier successful extension. After that moment, continued use of the address is no longer authorized, so the display cannot be assumed to stay reachable.',
    },
    quiz: {
      question: 'It is 16:30 in the eight-hour example and no extension has succeeded. Which statement fits?',
      options: ['The lease already expired when the renewal time passed.', 'The client may only ever talk to the server that issued the lease.', 'The client is broadcasting for help and its lease is still valid until 17:00.'],
      correctIndex: 2,
      explanation: 'At 16:30 the client is past the 16:00 rebinding time, so it broadcasts to any server that can extend the loan, and its original permission stands until 17:00. The renewal time opens attempts and ends nothing, and rebinding exists precisely so a different server may answer.',
    },
    takeaway: 'A working long-connected device proves its lease has time left, not that the address service is healthy right now.',
    sourceNote: 'RFC 2131 specifies renewal, rebinding, and the default timer fractions. The clock times are worked examples; explicit server parameters take precedence.',
  },
  {
    id: 'tech-008',
    outcome: 'Work out who actually answered a name lookup before blaming the website for inconsistency.',
    scene: 'Two editors see different addresses for a public video-review site after a planned change.',
    sections: [
      {
        title: 'Two editors, two addresses',
        paragraphs: [
          'After a planned website change, two editors look up the address of review.example at the same moment. One receives one address, the other receives a different one. Same name, same minute, different numbers. The quick conclusion is that the site is broken or half updated. Before anyone escalates, there is a better first question: who answered each of them?',
          'Because here is the thing: neither editor asked the website itself. Name lookups are answered by middlemen, and the two editors used different middlemen.',
        ],
      },
      {
        title: 'The receptionist with a photocopy',
        paragraphs: [
          'The middleman is called a resolver: the service your device sends name questions to. Think of a busy receptionist who keeps photocopies of the phone-book pages people ask about most. Ask for a number, and you usually get the photocopy, because fetching the original for every caller would be slow.',
          'That photocopy is the cache: a stored answer the resolver may reuse for a limited time. Serving from cache is not an error or a shortcut gone wrong. It is the main reason name lookups feel instant, and it is on all the time. A busy resolver answers millions of questions a day; without photocopies, every page you open would wait on a full trip to the original publisher.',
        ],
      },
      {
        title: 'The publisher of the real entry',
        paragraphs: [
          'Somewhere else stands the authoritative server: the one that publishes the official records for that part of the naming system. When the receptionist has no usable photocopy, she asks along a chain that ends at the authority, brings the answer back, and photocopies it for next time. Your device never walks that chain itself.',
          'For review.example, the record in question is an A record, the kind that holds an IPv4 address. Note what none of these parties do: the resolver and the authority answer name questions, and neither serves the review page. Connecting to the site happens afterward, as a separate exchange, using whichever address the lookup returned.',
        ],
      },
      {
        title: 'Explain the disagreement, then mind the limits',
        paragraphs: [
          'Now the two editors. In this fictional change, the authority recently began publishing 192.0.2.71. Resolver one fetched the old record earlier and still holds an eligible photocopy saying 192.0.2.70. Resolver two had no copy, asked the authority, and returned 192.0.2.71. Both resolvers answered honestly. Nothing is half broken; one photocopy is simply older, and it will expire on its own schedule.',
          'When you compare lookups, pin down everything that can differ: the exact name, the record type, which resolver answered, at what time, and how much cache lifetime remained. In practice that usually means noting which network each device was on, since home, office, and mobile connections typically hand you different resolvers. Two cautions complete the picture. Some networks deliberately serve different answers to different groups, so a difference is not automatically a fault. And a returned address proves naming only; whether anything at that address accepts connections is the next, separate test.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A name answer is not the page connection',
        alt: 'Client queries a resolver, which consults an authority on a miss; application traffic goes separately to the site.',
        caption: 'Documentation addresses and a simplified lookup path. Referrals are omitted; arrows show requests, with replies following the reverse direction.',
        items: [
          { label: 'Editor client', detail: 'Asks for review.example, type A', x: 16, y: 28, shape: 'screen' },
          { label: 'Recursive resolver', detail: 'Cached answer: 192.0.2.70', x: 49, y: 28, shape: 'box' },
          { label: 'Authoritative server', detail: 'Current record: 192.0.2.71', x: 82, y: 28, shape: 'box' },
          { label: 'Review application', detail: 'Reachability is a separate result', x: 67, y: 80, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'DNS query' }, { from: 1, to: 2, label: 'on a miss' }, { from: 0, to: 3, label: 'later connection' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Draw two rows for the same question, review.example type A, asked at 11:00. Give the top row resolver R1 and the bottom row resolver R2.',
        'Give R1 a still-valid cached answer of 192.0.2.70. Give R2 an empty cache, a trip to the authority, and the current record 192.0.2.71.',
        'Write what each editor receives. Keep the authoritative record fixed at 192.0.2.71 in both rows; only the photocopies differ.',
        'Add one last column named connection and leave it blank, as a reminder that neither row tested whether the site actually answers.',
      ],
      notice: 'You produced two different answers from one unchanged official record, using nothing but cache age. That is the usual innocent explanation.',
      troubleshooting: 'If you changed the authoritative record between the rows, reset it. The point of the drawing is that disagreement does not need two official answers.',
    },
    recall: {
      prompt: 'Your phone and laptop use different resolvers and disagree about a training hostname. What do you write down before concluding anything?',
      hint: 'A hostname alone is not the whole question.',
      answer: 'The exact name, the record type, which resolver each device asked, the time, and ideally the remaining cache lifetime of each answer. With those fixed, most disagreements turn out to be one fresh answer and one aging photocopy. If the difference survives that comparison, ask whether the network serves different views on purpose before suspecting the authority.',
    },
    quiz: {
      question: 'A resolver returns an answer without contacting the authority at all. Which explanation is enough on its own?',
      options: ['It holds a still-valid cached copy of the answer.', 'It must be the server hosting the review application.', 'It has verified the destination is currently reachable.'],
      correctIndex: 0,
      explanation: 'Reusing a valid cached answer is exactly what resolvers are for, so nothing further is needed. Hosting the application is a different role entirely, and no name lookup, cached or fresh, ever tests whether the destination accepts connections.',
    },
    takeaway: 'Name a lookup fully: which resolver, which record, what time. The answerer is usually a middleman with a photocopy.',
    sourceNote: 'RFC 1035 grounds the resolver, authority, and record distinctions. The walkthrough omits the referral chain and uses documentation-only names and addresses.',
  },
  {
    id: 'tech-009',
    outcome: 'Predict how long old DNS answers survive an address change, and plan releases around it.',
    scene: 'A web release changes a service address while a resolver still holds the earlier answer.',
    sections: [
      {
        title: 'The switch that was supposed to be instant',
        paragraphs: [
          'A release plan moves a website to a new server address. The team edits the DNS record, announces the change, and expects every visitor to arrive at the new address within moments. An hour later, traffic is still landing on the old server. Nobody mistyped anything, and nothing is down. The plan simply assumed something DNS never promised.',
          'What it assumed was a notification system. There is none. DNS changes are not pushed out to the world. They wait, quietly, for old copies to age out on their own schedules. The time that takes is knowable in advance, which is what separates a planned switch from an anxious one.',
        ],
      },
      {
        title: 'Best-before dates on answers',
        paragraphs: [
          'Every DNS answer is handed out with a freshness period called TTL, time to live, measured in seconds. A resolver that fetches your record may reuse its stored copy until that copy, by its own clock, goes stale. TTL is like the best-before date printed on a milk carton. Printing a shorter date on new cartons does nothing to the cartons already sitting in fridges.',
          'That is the entire mechanism. No invalidation messages, no broadcast of edits, no central switch. The authority controls only two things: what future answers say, and how long those future answers may be kept.',
        ],
      },
      {
        title: 'Walk one cache through the change',
        paragraphs: [
          'Take a resolver that cached the old address at 09:00 with a TTL of 600 seconds. Its copy is usable until 09:10. At 09:02, you change the record and set the TTL on new answers to 60 seconds. The old copy does not care. At 09:02 it still has 480 seconds remaining, at 09:05 it has 300, and it serves the old address legitimately until 09:10.',
          'Meanwhile a different resolver with no stored copy asks at 09:03 and receives the new address with the short lifetime. During the overlap, both addresses are being handed out, each one honestly. That overlap is not an outage. It is the designed behavior of caching.',
        ],
      },
      {
        title: 'What expiry does not end, and how to plan',
        paragraphs: [
          'When a cached answer expires, nothing hangs up. A browser already connected to the old server keeps its connection; expiry only means the next fresh lookup must fetch a new answer. Applications and operating systems can hold their own copies too, and some resolvers have documented policies for reusing stale answers during failures. So the tail of old traffic can outlive your arithmetic.',
          'The planning rule follows directly. Lower the TTL well before the switch, at least one old lifetime in advance, so every copy handed out near the change carries the short date. Lowering it at the moment of the switch cannot shorten lifetimes already in fridges. Then keep the old server answering until the long copies have aged out.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'One old answer across an authoritative edit',
        alt: 'An earlier 600-second cache lifetime survives a later authoritative 60-second TTL edit.',
        caption: 'Hypothetical normal-freshness timeline. Spacing shows order, not duration; expiry does not terminate connections.',
        items: [
          { label: '09:00: cached', detail: 'Old address; TTL 600 s' },
          { label: '09:02: authority edited', detail: 'New answers get 60 s; old copy has 480 s left' },
          { label: '09:05: old answer eligible', detail: '300 s remain in the earlier cache' },
          { label: '09:10: normal expiry', detail: 'Old cached freshness ends; connections are separate' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Write a cached answer fetched at 12:00 with TTL 300 seconds. Work out its natural expiry: 12:05.',
        'At 12:01, note an authoritative edit that gives new answers TTL 30 seconds. Leave the old countdown alone; nothing you changed can reach it.',
        'At 12:03, write the remaining life of the old copy, 120 seconds, and which address it still serves: the old one.',
        'Draw a connection opened to the old address at 12:02 and extend its line past 12:05, because record expiry does not close connections.',
      ],
      notice: 'The old copy expires at 12:05 regardless of the 12:01 edit, and the connection line crosses that moment untouched. Those are the two beats releases forget.',
      troubleshooting: 'If your old copy expired at 12:01:30, you applied the new TTL to an already-issued answer. New lifetimes ride only on new answers.',
    },
    recall: {
      prompt: 'A record was fetched by resolvers with a one-hour TTL. The owner now lowers it to ten seconds. What changes in the next minute, and what does not?',
      hint: 'Separate future answers from copies already handed out.',
      answer: 'In the next minute, only newly fetched answers carry the ten-second lifetime. Every copy fetched earlier keeps counting down its original hour, and devices or applications holding their own copies are equally untouched. The practical consequence: plan the lowered TTL at least an hour before the real change, because that is how long the old promises keep circulating.',
    },
    quiz: {
      question: 'Ten minutes after a DNS address change, some visitors still reach the old server. What is the ordinary explanation?',
      options: ['DNS TTL counts router hops, and their routes are longer.', 'Their resolvers hold still-valid cached answers, or their connections were already open.', 'Old cached copies instantly adopted the new shorter TTL.'],
      correctIndex: 1,
      explanation: 'Caching and existing connections carry old destinations forward legitimately: a copy is served until its own lifetime ends, and expiry never closes an open connection. TTL has nothing to do with router hops, and edits cannot rewrite lifetimes that were already handed out.',
    },
    takeaway: 'A TTL is a promise that rides with each answer. You cannot shorten promises already made, so lower the TTL early and keep the old door open.',
    sourceNote: 'RFC 1035 specifies record TTL behavior. The timeline models normal freshness only, not application caches or stale-answer extensions.',
  },
  {
    id: 'tech-010',
    outcome: 'Explain why a freshly created hostname can keep failing for one person, and read the four kinds of failed lookup.',
    scene: 'A training-lab hostname is created after an early lookup already returned a negative answer.',
    sections: [
      {
        title: 'Created, and still not found',
        paragraphs: [
          'Someone eager tests lab.example a minute before the training site goes live. Not found. The record is created thirty seconds later, a colleague loads the page immediately, and the eager tester still cannot resolve the name. Same name, same network, one happy user and one broken one.',
          'Without the mechanism, this looks like a botched deployment, and teams have rolled back working systems over it. The real explanation is smaller: the first lookup left a memory behind. And because the tester and the colleague ask through different resolvers, one memory can haunt one person while everyone else moves on.',
        ],
      },
      {
        title: 'A no gets remembered too',
        paragraphs: [
          'Resolvers, the middlemen that answer name lookups, cache more than addresses. When an authority replies that a name does not exist, the resolver may keep a note of that no and reuse it for a while. This is negative caching: absence, stored with its own best-before date.',
          'The tester asked too early, so their resolver faithfully photocopied no such name. Creating the record at the authority does not reach out and erase that note. The colleague asked a resolver with no note, got the fresh answer, and saw the site. Both resolvers behaved correctly.',
        ],
      },
      {
        title: 'Four different kinds of did not work',
        paragraphs: [
          'Failed lookups deserve precise names, because each points somewhere different. NXDOMAIN is an explicit answer: this name does not exist. NODATA is subtler: the name exists, but not the requested record type. A host can have an A record, the IPv4 address kind, while having no AAAA record, the IPv6 kind. Asking for the missing type gets a yes-but-nothing reply, not a nonexistent name.',
          'The other two are not answers at all. A timeout means your own waiting limit ran out with no reply: the name is neither confirmed nor denied. SERVFAIL means the resolver itself could not complete the job. Treating either as proof of absence is the classic mistake; they are proof that you do not know yet.',
        ],
      },
      {
        title: 'How long the no lives',
        paragraphs: [
          'Negative answers carry their lifetime from the zone\'s SOA record, using the smaller of two values, with resolver limits on top. Suppose those values are 300 and 120 seconds. The smaller is 120, so a no stored at 10:00 can be reused until 10:02. The record was created at 10:00:30, which leaves up to 90 seconds in which the tester\'s resolver keeps saying no while the world says yes.',
          'Before concluding anything about a failed lookup, write down four things: the exact name, the requested record type, the response you actually received, and the time. With those, a remembered no is a short wait, a NODATA is a type question, and a timeout is an open investigation, not a verdict. The wrong path is retrying in a loop and rolling back at the third failure; the right path is reading which of the four you actually have.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four different lookup observations',
        alt: 'NXDOMAIN, NODATA, timeout, and SERVFAIL support different conclusions.',
        caption: 'These are invented observations. Only the first two describe DNS absence; the other two mean the lookup itself did not finish.',
        items: [
          { label: 'NXDOMAIN', detail: 'lab.example A: name absent; example negative lifetime 120 s' },
          { label: 'NODATA', detail: 'host.example AAAA: existing name, no requested IPv6 address record' },
          { label: 'Timeout', detail: 'No reply within the chosen 2 s wait' },
          { label: 'SERVFAIL', detail: 'Resolver reports failure, not authoritative nonexistence' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Copy the four observations from the comparison. Beside each, add a column headed what this does not establish.',
        'Fill the tricky two in: for the timeout, write name existence unknown. For NODATA, write other record types can still exist.',
        'Draw the timeline: negative answer stored at 10:00 with lifetimes 300 and 120 seconds. Circle the smaller value and mark expiry at 10:02.',
        'Add the record creation at 10:00:30 and shade the stretch to 10:02. That shaded band is where one resolver honestly disagrees with the world.',
      ],
      notice: 'The old no can survive for up to 90 seconds after the record exists, and nothing in that band is malfunctioning.',
      troubleshooting: 'If you labeled every failure NXDOMAIN, separate explicit replies from your own timer expiring. Silence is not an answer.',
    },
    recall: {
      prompt: 'A server name resolves to an IPv4 address, but a query for its IPv6 address returns no data. Should the name be reported as nonexistent?',
      hint: 'A name and one of its record types are different objects.',
      answer: 'No. The IPv4 answer proves the name exists in that view. The empty IPv6 result is a NODATA: this name has no record of that requested type. Report it as a missing AAAA record, keeping the query type in the report. Converting it into name does not exist would send whoever reads the report hunting a problem that is not there.',
    },
    quiz: {
      question: 'One lookup times out, and a second lookup returns NXDOMAIN. Which report keeps the evidence straight?',
      options: ['Both names are proven absent.', 'Both names exist but lack addresses.', 'One lookup never completed; the other received an explicit does-not-exist answer.'],
      correctIndex: 2,
      explanation: 'A timeout is your own waiting limit expiring: no reply means no information, so that name needs another look. NXDOMAIN is an actual answer about absence. Merging the two turns an open question and a closed one into the same wrong summary.',
    },
    takeaway: 'Absence can be cached with its own lifetime, and a timeout is not an answer. Name the response before drawing the conclusion.',
    sourceNote: 'RFC 2308 defines negative caching and SOA-derived lifetimes. The fictional observations omit resolver-specific caps and later failure-caching extensions.',
  },
  {
    id: 'tech-011',
    outcome: 'Explain why a faster internet plan barely helps an interactive app, using a simple time budget.',
    scene: 'A collaborative editing cursor feels delayed despite a faster internet service tier.',
    sections: [
      {
        title: 'The upgrade that changed almost nothing',
        paragraphs: [
          'An editor upgrades to a much faster internet plan. Large downloads finish impressively sooner. But the thing that prompted the upgrade, a laggy shared cursor in a collaborative editor, feels exactly the same. The money was real; the improvement, for this one annoyance, is not.',
          'The upgrade bought more of one quantity while the cursor suffers from a different one. Telling the two apart in advance is the skill, and a four-line time budget is enough to do it.',
        ],
      },
      {
        title: 'Width of the pipe, length of the trip',
        paragraphs: [
          'Bandwidth is how much data a link can move per second: the width of the pipe. Latency is how long you wait between sending something and getting the response: the length of the trip. They are as different as a bigger delivery van and a shorter drive to the restaurant.',
          'A cursor update is a tiny order: a few hundred bytes asking for a quick confirmation. For tiny orders, the drive dominates. A van ten times larger delivers your single pizza no sooner, because loading the pizza was never the slow part. The same shape explains laggy game controls and talking over people on calls: small messages, long trips. More width cannot shorten a road.',
        ],
      },
      {
        title: 'Budget the 70.8 milliseconds',
        paragraphs: [
          'Put numbers on one request. It carries 1000 bytes, which is 8000 bits at eight bits per byte. On a 10 megabit per second link, pushing 8000 bits onto the wire takes 8000 divided by 10 million seconds: 0.8 milliseconds. That part is the loading of the van, and it is the only part bandwidth touches.',
          'Now add the trip. Assume 60 milliseconds for travel and waiting across the network, both directions combined, and 10 milliseconds for the server to do its work. Ignore the small response for simplicity. Total: 0.8 plus 60 plus 10, which is 70.8 milliseconds.',
        ],
      },
      {
        title: 'Ten times the bandwidth, almost the same wait',
        paragraphs: [
          'Upgrade the link tenfold, to 100 megabits per second. Transmission drops from 0.8 to 0.08 milliseconds. The total becomes 70.08 milliseconds, not seven. The two big terms, travel and server work, never heard about the upgrade. This is why the cursor still lags: its delay lives almost entirely in the parts a faster plan cannot reach. The download, in contrast, is thousands of vans of bits; width is exactly what it needed.',
          'Two cautions for real measurements. A round-trip time is one out-and-back measurement; halving it does not give a trustworthy one-way delay, because the two directions can take different paths and queues. And interactive screens often send dependent requests, where the second cannot start until the first answers. Those waits add up in sequence, which a bulk download test will never reveal. Split any slow interaction into transmission, travel, and processing before buying a fix for the wrong part.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Where the illustrative 70.8 ms goes',
        alt: 'Request transmission takes 0.8 milliseconds, round-trip travel and waiting 60, and server work 10.',
        caption: 'Compare bar sizes: the only bandwidth-sensitive bar is the smallest. Additive toy budget, not measured browser phases; response transmission is excluded.',
        unit: 'milliseconds',
        items: [
          { label: 'Transmit 1000 bytes', detail: 'At 10 Mbit/s', value: 0.8 },
          { label: 'Travel and waiting', detail: 'Both directions combined', value: 60 },
          { label: 'Server work', detail: 'Assumed processing contribution', value: 10 },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Write a budget: a 2000-byte request, 80 ms of travel and waiting, 5 ms of server work. Ignore everything else so the arithmetic stays visible.',
        'Convert to bits: 2000 bytes is 16000 bits. At 20 Mbit/s, transmission is 0.8 ms. Add the three parts: 85.8 ms.',
        'Double the link to 40 Mbit/s and redo only the transmission: 0.4 ms. New total: 85.4 ms. Write both totals side by side.',
        'Underline the largest term that did not move, and write one sentence on what kind of change could shrink it.',
      ],
      notice: 'Doubling capacity bought 0.4 milliseconds out of 85.8. The budget shows, before any purchase, which upgrades can matter.',
      troubleshooting: 'If your total halved, you scaled the whole budget. Only the transmission term divides by link speed; travel and processing stay as assumed.',
    },
    recall: {
      prompt: 'An approval screen makes three small requests, each needing the previous answer before it can start. Large downloads are fast. Why can the screen still feel slow?',
      hint: 'Dependent requests cannot overlap their waits.',
      answer: 'Each request pays the full trip: travel plus server work. Because they run one after another, the screen waits roughly three trips end to end, even though the data is tiny. Fast downloads prove the pipe is wide, not that trips are short. Shrinking the wait means fewer dependent round trips or quicker processing, not more bandwidth.',
    },
    quiz: {
      question: 'In the 70.8 ms example, only transmission time improves with a faster link. What limits the benefit?',
      options: ['The unchanged 60 ms of travel and waiting and 10 ms of processing.', 'The rule that one-way delay equals half the round trip.', 'Small messages are not allowed to use higher capacity.'],
      correctIndex: 0,
      explanation: 'Bandwidth divides only the 0.8 ms transmission term. The other 70 milliseconds belong to distance, queues, and the server, which a wider pipe does not touch. Halving a round trip is a measurement fallacy, not a mechanism, and small messages use fast links fine; they just gain little.',
    },
    takeaway: 'Budget an interaction as transmission plus travel plus processing, then upgrade the term that is actually big.',
    sourceNote: 'The inherited latency and distributed-systems references ground the distinction. Numbers are a simplified additive example, not a measured service baseline.',
  },
  {
    id: 'tech-012',
    outcome: 'Read a packet-loss percentage as a counting rule with a deadline, not a property of the whole network.',
    scene: 'A monitoring handoff compares two summaries of the same synthetic receiver log.',
    sections: [
      {
        title: 'Six percent and two percent, same packets',
        paragraphs: [
          'During a monitoring handoff, two notes describe the same fictional batch of packets. One says six percent loss. The other says two percent. Nobody mistyped, and the underlying log is identical. New team members read this as a contradiction and start hunting for the broken tool, or worse, pick whichever number supports the conclusion they already wanted.',
          'There is no broken tool. The two notes applied different rules to the same arrivals. Until you know the rule, a loss percentage is just a number wearing a lab coat.',
        ],
      },
      {
        title: 'Loss is attendance with a door-closing time',
        paragraphs: [
          'Think of counting absences at a lecture. One hundred students are enrolled. Ninety-four are seated at nine sharp. Four more wander in by five past. Two never show. How many were absent? If attendance closes at nine, six. If it closes at five past, two. The students did exactly one thing; the rule decided the count.',
          'Packet loss works the same way. A loss measurement asks: of the packets sent from here to there, how many failed to appear at the far end within a chosen waiting deadline? The deadline, the direction, the time window, and which packets were counted are all part of the result. Change any of them and the percentage changes, with no change in the network. For a voice call, late arrivals really are as bad as missing ones, so a strict deadline is honest; for a file transfer, patience is cheap. The right rule depends on what the traffic can tolerate.',
        ],
      },
      {
        title: 'Reconstruct the hundred',
        paragraphs: [
          'The log behind the two notes: 100 equal-sized packets travel from a training client to a receiver, with aligned clocks assumed. Ninety-four arrive within 100 milliseconds of being sent. Four arrive later, but within 500 milliseconds. Two have not appeared by 500 milliseconds.',
          'Apply the strict rule, 100 milliseconds: the four latecomers and the two missing all count as lost. Six out of 100 is six percent. Apply the patient rule, 500 milliseconds: only the two missing count. Two percent. Both notes were truthful. Each should have carried its deadline on its sleeve.',
        ],
      },
      {
        title: 'Missing echoes and other traps',
        paragraphs: [
          'A related trap: the unanswered ping. An echo probe with no reply bundles several possibilities into one silence. The request may have been lost on the way out, the reply on the way back, or the device may simply limit how often it answers probes. Silence does not say which, does not locate a failed router, and does not predict the loss an application sees, since applications can use different sizes, paths, and treatment.',
          'So when you write a loss result, attach its passport: direction, time window, deadline, what was counted, and where it was observed. And keep the window visible for another reason: a short batch describes those minutes, not the permanent character of a link. Use existing authorized records for comparisons rather than generating fresh probe traffic.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'One sample, three arrival groups',
        alt: 'Of 100 packets, 94 arrive by 100 milliseconds, four later by 500, and two remain unobserved.',
        caption: 'Synthetic counts adding to 100. The 100 ms rule counts the last two groups as lost, six percent; the 500 ms rule counts only the final group, two percent.',
        unit: 'packets',
        items: [
          { label: 'By 100 ms', detail: 'Arrived within the shorter limit', value: 94 },
          { label: 'After 100, by 500 ms', detail: 'Late under the shorter rule', value: 4 },
          { label: 'Unobserved by 500 ms', detail: 'Missing under both stated rules', value: 2 },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Invent a batch of 20 equal-sized packets: 18 arrive by 100 ms, one at 200 ms, one still missing at 500 ms. Write the arrivals once and do not change them.',
        'Apply the 100 ms deadline: the 200 ms arrival and the missing one both count. Two of 20 is ten percent.',
        'Apply the 500 ms deadline: only the missing one counts. One of 20 is five percent. Label each result with its deadline and direction.',
        'Add the fine print under both: synthetic batch, aligned clocks assumed, client-to-receiver only. Then write why neither number names a guilty device.',
      ],
      notice: 'Ten percent and five percent came from identical arrivals. The deadline, not the network, moved the number.',
      troubleshooting: 'If both percentages match, look at your 200 ms packet again: it changes sides when the deadline crosses its arrival time.',
    },
    recall: {
      prompt: 'A colleague reports missing echo replies from a router, yet a large file transfer through it completes cleanly. What keeps this from being a contradiction?',
      hint: 'Probe replies and application delivery follow different rules.',
      answer: 'The silent probe mixes outbound loss, return loss, and the router\'s own reply-limiting policy, so it is weak evidence on its own. The file transfer uses different packets, possibly different treatment, and a transport that repairs losses invisibly. Two measurements with different populations, directions, and recovery rules can both be true. Compare them only after pinning those details down.',
    },
    quiz: {
      question: 'Four packets arrive after the short deadline but before the long one. What actually changed between the two loss summaries?',
      options: ['The number of packets originally sent.', 'The classification rule applied to those four arrivals.', 'The location of a proven broken device.'],
      correctIndex: 1,
      explanation: 'The arrivals were fixed; only the waiting limit moved, and it reclassified the four latecomers from lost to delivered. Nothing about the sent population changed, and no counting rule can point at which device delayed or dropped anything.',
    },
    takeaway: 'A loss percentage is arrivals judged by a deadline. State the rule with the result, or the number says nothing.',
    sourceNote: 'RFC 7680 defines bounded one-way loss measurement. Counts and clock alignment are exercise assumptions, not observations from a network scan.',
  },
  {
    id: 'tech-013',
    outcome: 'Work out how a busy link turns extra traffic into waiting, and why more buffer memory does not speed it up.',
    scene: 'A footage upload keeps transferring while a shared-call connection becomes less responsive.',
    sections: [
      {
        title: 'Steady progress and a stuck call',
        paragraphs: [
          'A big footage upload is making solid progress through the office router. At the same moment, a colleague\'s call becomes sluggish: words arrive late, reactions lag. The monitoring page shows the outgoing link moving data flat out. How can everything be transferring nicely and feel broken at the same time?',
          'Because moving data and waiting your turn are different measurements. The link is a bottleneck: traffic arrives faster than it can leave. What cannot leave yet has to stand in line, and standing in line is exactly what the call is experiencing.',
        ],
      },
      {
        title: 'The conveyor belt and the cashier',
        paragraphs: [
          'Picture a supermarket checkout. The cashier scans at a fixed pace: that is the service rate, the speed at which the link transmits bits. The conveyor belt holds items waiting to be scanned: that is the queue, and the belt\'s length is the buffer, the memory set aside for waiting packets.',
          'A longer belt is genuinely useful for absorbing a sudden armful of shopping without dropping anything on the floor. But notice what the belt never does: it never scans faster. Items on a longer belt are stored, not served.',
        ],
      },
      {
        title: 'Build the backlog with arithmetic',
        paragraphs: [
          'Give the queue numbers. Data arrives at 12 megabits per second; the outgoing link serves 8 megabits per second. Assume constant rates, an initially empty queue, enough memory, and no drops during a half-second burst. The surplus is 12 minus 8: four megabits of arrivals per second that cannot leave on time.',
          'After half a second, half of four megabits has piled up: a two-megabit backlog. Now a small call packet joins the back of that line. Before its own transmission even starts, everything ahead must be served: two megabits at eight megabits per second is a quarter of a second. That 250 milliseconds is queueing delay, and it is the lag the caller feels. The upload, meanwhile, is fine: its bytes are flowing continuously. High throughput and painful waiting, both true at once.',
        ],
      },
      {
        title: 'What a larger buffer actually changes',
        paragraphs: [
          'Doubling the belt lets the backlog grow larger before anything is dropped. The cashier still scans at eight megabits per second, so a longer line means longer waits, not faster service. If arrivals stop, the two-megabit backlog takes a quarter of a second to drain; a bigger stored backlog takes proportionally longer.',
          'Real networks add machinery around this core: senders slow down in response to congestion signals, and routers can manage or schedule queues instead of serving strictly first-in, first-out. So treat this arithmetic as one clean mechanism, not a diagnosis kit. When delay rises, compare matching idle and busy periods from existing evidence, and ask which of queueing, processing, or wireless contention the numbers actually support.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A two-megabit queue at the bottleneck',
        alt: 'An upload leaves two megabits queued ahead of a small call packet at the router.',
        caption: 'Follow the call packet joining behind the stored backlog. Illustrative first-in, first-out queue after 0.5 seconds; other scheduling policies change the waiting.',
        items: [
          { label: 'Footage uploader', detail: '12 Mbit/s offered for 0.5 s', x: 17, y: 25, shape: 'screen' },
          { label: 'Call client', detail: 'A new small packet joins behind existing data', x: 17, y: 78, shape: 'screen' },
          { label: 'Router queue', detail: '2 Mbit waiting; about 250 ms ahead of the call packet', x: 51, y: 50, shape: 'box' },
          { label: 'Outgoing path', detail: '8 Mbit/s service rate', x: 85, y: 50, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 2, label: 'arrivals' }, { from: 1, to: 2, label: 'joins queue' }, { from: 2, to: 3, label: 'service' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Draw an empty queue with 12 Mbit/s arriving and 8 Mbit/s leaving. Note the assumptions: constant rates, enough memory, no drops.',
        'Work the backlog at 0.25 seconds: surplus 4 Mbit/s times 0.25 is one megabit. At 0.5 seconds: two megabits. Keep the units in megabits.',
        'Divide each backlog by the 8 Mbit/s service rate to get the wait for a packet joining at that moment: 125 ms and 250 ms.',
        'Double the buffer on your drawing and change nothing else. Recompute both waits and notice they are identical: storage grew, service did not.',
      ],
      notice: 'Backlogs of one and two megabits produce waits of 125 and 250 milliseconds, and the bigger buffer changed neither number.',
      troubleshooting: 'If more buffer shortened your wait, you divided by storage somewhere. Waiting time is backlog divided by service rate; the buffer only caps how big the backlog may get.',
    },
    recall: {
      prompt: 'A report service accepts jobs faster than its single worker completes them. Management proposes a much larger pending-job list. Will jobs finish sooner?',
      hint: 'Which number is the cashier, and which is the belt?',
      answer: 'No. The pending list is the belt: it stores more waiting jobs and prevents rejections. The worker is the cashier, and the completion rate is unchanged, so each job still waits for everything ahead of it. Finishing sooner requires a faster worker, more workers, or fewer accepted jobs: a change to service, not to storage.',
    },
    quiz: {
      question: 'Why can the upload show high throughput while the call suffers growing delay?',
      options: ['High throughput proves every queue is empty.', 'A larger buffer creates proportional transmission capacity.', 'The link keeps serving data continuously while new packets wait behind the accumulated backlog.'],
      correctIndex: 2,
      explanation: 'Throughput measures bytes moving; delay measures time in line. A saturated link does both at once: it transmits without pause and makes newcomers wait behind stored work. Empty queues are the opposite of what saturation implies, and buffers store bits rather than sending them.',
    },
    takeaway: 'Waiting time is backlog divided by service rate. Buffers absorb bursts; they never scan faster.',
    sourceNote: 'The inherited references ground queueing reasoning. Constant rates and first-in, first-out service are illustrative, not measured.',
  },
  {
    id: 'tech-014',
    outcome: 'Explain why small messages pass while big transfers stall, using packet-size limits and tunnel overhead.',
    scene: 'A remote worker can open small pages but a larger transfer stalls across a constrained path.',
    sections: [
      {
        title: 'Small pages work, the big transfer dies',
        paragraphs: [
          'A remote worker has one of the strangest-feeling network problems: chat works, small pages load, and the moment a larger transfer starts, everything about that transfer hangs. It does not look like a slow connection, because small things are fast. It looks haunted.',
          'One classic mechanism produces exactly this pattern: a packet-size limit on the route. Not too little bandwidth. Packets that are physically too big for one of the links they must cross.',
        ],
      },
      {
        title: 'Every link has a bridge height',
        paragraphs: [
          'Each network link has an MTU, maximum transmission unit: the largest IP packet it can carry, header included. The header is the delivery label wrapped around your data. Think of links as bridges on a delivery route, each with a posted height limit. A route is only as generous as its lowest bridge, never the average of them.',
          'Small messages are low vans: they fit under everything, everywhere, which is exactly why chat keeps working. Large transfers pack tall trucks close to the local limit, and those are the ones that meet a lower bridge somewhere down the road.',
        ],
      },
      {
        title: 'The turned-back truck',
        paragraphs: [
          'Follow one IPv6 packet. The first link allows 1500 bytes, the next only 1400. A 1460-byte packet clears the first bridge and reaches the second, where something important happens: IPv6 routers do not saw the truck in half. The router discards the packet and sends back a note called Packet Too Big, naming the 1400-byte limit.',
          'That note is the whole repair mechanism. The sender reads it and starts sending 1400-byte packets, and traffic flows. But if a device along the way blocks or loses those notes, the sender never learns the limit. It keeps dispatching 1460-byte trucks that silently vanish at the same bridge, while every small packet sails through. That is the haunted pattern from the opening: a feedback loop with its mouth taped shut.',
        ],
      },
      {
        title: 'Tunnels shrink the room inside',
        paragraphs: [
          'Now add a tunnel, such as a company VPN. A tunnel carries your packet inside another packet, and the wrapper has its own headers. Assume the wrapper costs exactly 60 bytes and the outer path still allows 1400. The room left inside is 1400 minus 60: 1340 bytes. An inner packet of 1380 bytes becomes 1440 bytes once wrapped, which overshoots the limit by 40. The lesson: the inner packet must budget for the wrapper it cannot see.',
          'Real tunnel overhead varies with the tunnel type, so 60 is an illustration, not a constant. And the small-works-large-fails pattern is a strong clue, not a verdict; other causes exist. Work the budget on paper with the actual limits and overhead first. Changing interface MTU settings on shared equipment, on a guess, is how one person\'s stall becomes everyone\'s outage.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A smaller second link controls the route',
        alt: 'The client-to-router limit is 1500 bytes; the next link toward the server permits 1400.',
        caption: 'Schematic IPv6 route: the lowest bridge decides. A 1460-byte packet fails the second limit; 1300 bytes fits both hypothetical limits.',
        items: [
          { label: 'Client', detail: 'Example IP packet: 1460 bytes', x: 16, y: 50, shape: 'screen' },
          { label: 'Router', detail: 'Oversized packet discarded; Packet Too Big feedback sent', x: 50, y: 50, shape: 'box' },
          { label: 'Server path', detail: 'Next-link IP MTU: 1400 bytes', x: 84, y: 50, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'MTU 1500' }, { from: 1, to: 2, label: 'MTU 1400' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Copy the two link limits, 1500 and 1400 bytes, and underline the smaller one. That single number is the whole route\'s limit.',
        'Test two paper packets against it: 1300 bytes fits both links; 1460 clears the first and fails the second. Mark where the second one dies.',
        'Add the tunnel: subtract the 60-byte wrapper from 1400 to get the inner budget, 1340. Test a 1380-byte inner packet: wrapped, it is 1440, over by 40.',
        'Write down what evidence you would want before blaming a real stall on packet size, and note that interface settings stay untouched during reasoning.',
      ],
      notice: 'Every verdict came from comparing one complete packet against one smallest limit. No averaging, no settings changed.',
      troubleshooting: 'If your answers disagree, check two habits: never average the two MTUs, and always compare the wrapped outer size, not the inner size, against the outer limit.',
    },
    recall: {
      prompt: 'A tunnel adds 80 bytes of headers and its outer path permits 1500 bytes. Can a 1450-byte inner packet cross unchanged?',
      hint: 'Compare the complete wrapped packet with the outer limit.',
      answer: 'No. Wrapped, the packet becomes 1450 plus 80: 1530 bytes, which exceeds the 1500-byte outer limit by 30. The inner budget under that exact overhead is 1500 minus 80: 1420 bytes. The arithmetic identifies the conflict; choosing an operational fix is a separate decision with the real tunnel\'s documented overhead.',
    },
    quiz: {
      question: 'An IPv6 packet fits the sender\'s interface but exceeds a later link\'s MTU. What happens at that link\'s router?',
      options: ['It discards the packet and sends back a Packet Too Big message.', 'It fragments the packet into smaller IPv6 pieces itself.', 'It forwards the packet anyway, since the sender\'s larger MTU takes precedence.'],
      correctIndex: 0,
      explanation: 'IPv6 routers never fragment in transit; they drop the oversized packet and report the limit so the sender can shrink. No link ever defers to a bigger limit elsewhere: every bridge enforces its own height, which is why the lowest one rules the route.',
    },
    takeaway: 'The route\'s packet limit is its lowest bridge, and a tunnel wrapper spends part of that budget from the inside.',
    sourceNote: 'RFC 8201 grounds IPv6 path-size feedback. Link limits and tunnel overhead here are hypothetical, not recommended settings or vendor-specific behavior.',
  },
  {
    id: 'tech-015',
    outcome: 'Keep packet size, advertised segment size, and actual data space straight with one subtraction habit.',
    scene: 'A release-artifact transfer prompts a review of packet budgets rather than an interface change.',
    sections: [
      {
        title: 'Three sizes that sound the same',
        paragraphs: [
          'In a review about a slow release-artifact transfer, three numbers get thrown around: 1500, 1460, and 1448. Each speaker says the packet size. They are all talking about different boundaries, and the meeting goes in circles until someone draws the boxes.',
          'The three numbers answer three questions: how big may the whole parcel be, how much does the receiver say fits per delivery, and how much actual cargo went into this particular parcel. Learn the subtraction once and the circles stop.',
        ],
      },
      {
        title: 'Boxes, labels, cargo',
        paragraphs: [
          'Start with the parcel. An IP packet travels inside a link limit called the MTU, maximum transmission unit: the largest complete packet the link carries, labels included. The labels-included part matters; the limit is on the whole parcel, never on the cargo alone. Take 1500 bytes as the working limit here.',
          'Inside the parcel, space is spent before any cargo loads. The IP header, the outer address label, takes 20 bytes in this IPv4 example. The TCP header, the inner handling label for the ordered byte stream, takes another 20 fixed bytes. Labels first, cargo after: 1500 minus 20 minus 20 leaves 1460 bytes for actual data.',
        ],
      },
      {
        title: 'What MSS actually advertises',
        paragraphs: [
          'That 1460 is the familiar MSS, maximum segment size: the data limit an endpoint advertises when the connection is set up, counting only cargo, never the two fixed labels. Each side announces its own number, like two warehouses stating what their receiving docks accept.',
          'One caution travels with it: an advertised MSS is a statement about the receiver, not a survey of the route. Links between the two endpoints can have smaller parcel limits, and the sender must respect its separate path-size information too. The advertisement is one input, not the whole answer. That is why the famous 1460 appears in so many captures and still cannot be assumed for any particular path.',
        ],
      },
      {
        title: 'Options eat cargo space',
        paragraphs: [
          'Now a particular packet carries 12 bytes of TCP options, optional extra fields stuck onto the inner label for this transmission. The TCP header grows to 32 bytes, so cargo space becomes 1500 minus 20 minus 32: 1448 bytes. Nothing about the advertised MSS changed; this one parcel simply spent more on labels.',
          'That is the distinction people trip over: MSS uses fixed headers by definition, while each real packet subtracts whatever it actually carries. And the budget moves again under IPv6, whose base header is 40 bytes, or inside a tunnel, which wraps the whole parcel in another one and spends the wrapper from the same limit. So write the assumptions beside the arithmetic every time. An example calculated for one stack quietly becomes wrong the moment someone reuses it as a universal setting.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two packets within the same 1500-byte limit',
        alt: 'Without options, 1460 TCP data bytes fit; twelve option bytes reduce actual data to 1448.',
        caption: 'Compare the data cells: both complete sums equal 1500 bytes. The option case changes this packet\'s cargo, not the fixed-header MSS rule.',
        items: [
          { label: 'No options', detail: '20 IP + 20 TCP + 1460 data = 1500 bytes' },
          { label: '12 TCP option bytes', detail: '20 IP + 32 TCP + 1448 data = 1500 bytes' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Draw a 1500-byte box. Reserve 20 bytes for the IPv4 label and 20 for the fixed TCP label, and confirm 1460 remains for cargo.',
        'Check your drawing by adding the three parts back together to exactly 1500. The budget must always close.',
        'Add 12 option bytes to the TCP label without growing the box. Recompute cargo, 1448, and note beside it: advertised MSS unchanged.',
        'Redo the budget with a 40-byte IPv6 base header, no extensions, same options: 1500 minus 40 minus 32 leaves 1428. Write the assumptions above each result.',
      ],
      notice: 'Three budgets, three different cargo numbers, one method: whole box minus actual labels. The assumptions line is what makes each number honest.',
      troubleshooting: 'If your cargo stayed 1460 after adding options, the option bytes never entered the box. Everything a packet carries must come out of the same 1500.',
    },
    recall: {
      prompt: 'A peer advertises MSS 1460, but the route to it includes a link with a smaller packet limit. Can you always send 1460 data bytes?',
      hint: 'Whose capacity does each number describe?',
      answer: 'No. The MSS describes the far receiver\'s dock, not the roads between you. The sender must also fit the smallest link limit on the path and subtract the headers this packet actually carries, including any options. Sending to the advertisement alone produces parcels that a smaller mid-route limit will reject.',
    },
    quiz: {
      question: 'With a 1500-byte IPv4 budget, a 20-byte IP header, and a 32-byte TCP header including options, how much TCP data fits?',
      options: ['1460 bytes', '1448 bytes', '1480 bytes'],
      correctIndex: 1,
      explanation: 'Subtract the labels this packet actually carries: 1500 minus 20 minus 32 is 1448. The answer 1460 forgets the 12 option bytes, and 1480 subtracts only one of the two headers. The whole parcel always sums back to 1500.',
    },
    takeaway: 'One habit covers it: whole packet minus actual headers equals data. MSS counts fixed headers; each packet counts its own.',
    sourceNote: 'RFC 9293 section 3.7.1 was spot-checked for MSS and option handling. Budgets are illustrative and do not prescribe network configuration.',
  },
  {
    id: 'tech-016',
    outcome: 'Rebuild complete messages from a TCP stream no matter how the bytes arrive chopped up.',
    scene: 'A small log collector misreads two status records because its test always supplied whole messages.',
    sections: [
      {
        title: 'Worked in the test, broke on the first real night',
        paragraphs: [
          'A small log collector reads from a network connection and expects one status record per read. In testing it works every time. The first busy night in production, records arrive mangled: half a word here, two records glued together there. The code did not change. The traffic did.',
          'The test quietly made a promise the network never makes: that each read hands back exactly one message. The collector was built on that promise, and it was never true.',
        ],
      },
      {
        title: 'A stream, not envelopes',
        paragraphs: [
          'TCP delivers an ordered stream of bytes: a continuous ribbon, like dictation over a phone line. Every byte arrives, in order. But the pauses you sent with are gone. Writing RUN and then OK does not deliver two envelopes; it feeds R, U, N, O, K into one ribbon.',
          'Each read is a scoop from that ribbon, and the scoop size depends on timing and buffering, not on your message shapes. One scoop may hold part of a record, exactly one, or three and a half. All of those are correct TCP behavior.',
        ],
      },
      {
        title: 'Framing: drawing your own envelopes',
        paragraphs: [
          'If the transport will not mark boundaries, the application must. That rule is called framing. A simple scheme: before each record, send one byte holding the record\'s length. We print that byte as a number here for readability. Other protocols mark the end instead, with a special character such as a line break; the principle is identical, the application draws its own envelope.',
          'So RUN travels as 3 R U N, and OK as 2 O K: seven bytes in total. The length prefix is just more bytes in the ribbon, but it gives the parser certainty: read a length, then count exactly that many data bytes, and the record is complete regardless of how the scoops fell.',
        ],
      },
      {
        title: 'Parse across any scoop',
        paragraphs: [
          'Walk the unlucky case. The first read returns only 3 R. The parser now knows a three-byte record is coming and holds the one byte it has. No output yet, and that is correct. The second read returns U N 2 O K. The parser completes RUN, emits it, reads the next length, 2, counts O K, and emits OK. Two records, exactly as sent. If all seven bytes had arrived in one scoop, the same loop emits the same two records.',
          'Three details make this production-grade. Set a documented maximum length, so a corrupt or hostile prefix cannot demand a gigantic buffer. Decide what a connection closing mid-record means: an incomplete record to discard and report, never a shorter record to emit. And test by regrouping the same bytes into different scoops; the byte sequence is the contract, the grouping is weather.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Seven bytes, two reads, two records',
        alt: 'Reads 3 R and U N 2 O K reconstruct RUN and OK.',
        caption: 'Follow the bytes across the scoop boundary: the partial RUN waits until read 2 completes it. Numbers are one-byte lengths; printed spaces are not transmitted.',
        items: [
          { label: 'Sender stream', detail: '3 R U N 2 O K: 7 bytes' },
          { label: 'Read 1', detail: '3 R: 2 bytes; retain incomplete RUN' },
          { label: 'Read 2', detail: 'U N 2 O K: 5 bytes; complete both records' },
          { label: 'Parser output', detail: 'RUN, then OK: 2 application records' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2, label: 'append' }, { from: 2, to: 3, label: 'frame' }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Write the toy stream 2 O K 1 X on paper, where each printed number stands for one length byte. It encodes the records OK and X.',
        'Draw a scoop around the first two bytes, 2 O. Note what the parser knows: expecting 2 data bytes, holding 1, missing 1. Nothing is emitted.',
        'Draw the next scoop around K 1 X. Append and parse: OK completes, then length 1 and X make the second record.',
        'Rerun the same five bytes two more ways: all in one scoop, and closure right after 2 O. The first yields both records; the second yields an incomplete record to report, not an O.',
      ],
      notice: 'Every grouping of the same bytes produced the same records, and the truncated stream produced a clean incomplete verdict instead of invented output.',
      troubleshooting: 'If a scoop boundary ever produced a partial word as output, your parser is using read size as the boundary. Track expected length separately and emit only when the count is satisfied.',
    },
    recall: {
      prompt: 'After a quiet period, a chat client receives three whole messages in a single read. Its current code shows them as one garbled message. What rule is it missing?',
      hint: 'Buffering changed the grouping, not the content.',
      answer: 'The client is treating one read as one message. The read returned a scoop containing three frames back to back. The fix is a framing loop: parse complete messages by the protocol\'s own boundaries, emit each one, and retain any unfinished trailing bytes for the next read. The same loop then survives both glued-together messages and split ones.',
    },
    quiz: {
      question: 'The first read yields a length prefix of three followed by one data byte. What should the parser do?',
      options: ['Emit the single byte as a complete record.', 'Reject the stream because the read was short.', 'Hold the partial data and wait for the remaining two bytes or closure.'],
      correctIndex: 2,
      explanation: 'Short reads are normal TCP behavior, not errors. The length prefix says three bytes make this record, so the parser waits for the rest. Emitting early invents a record the sender never wrote; rejecting punishes the stream for ordinary weather.',
    },
    takeaway: 'TCP keeps your bytes in order and nothing else. Boundaries are the application\'s job, enforced the same way across any read grouping.',
    sourceNote: 'RFC 9293 section 3.7 was spot-checked for stream boundaries. The length-prefixed protocol is an original exercise.',
  },
  {
    id: 'tech-017',
    outcome: 'Explain why acknowledged network delivery does not mean the application actually saved your request.',
    scene: 'An expense-submission client receives transport acknowledgments before the service writes its record.',
    sections: [
      {
        title: 'Sent, acknowledged, and still unknown',
        paragraphs: [
          'You submit an expense claim. The network layer reports everything sent and acknowledged. Then the screen hangs. Was the expense saved? The honest answer, even with that acknowledgment in hand, is: nobody at your end knows yet.',
          'This gap catches developers constantly, because acknowledged sounds like done. With money, orders, and records on the line, the difference is not academic: it decides whether your code shows saved for a claim that vanished. The whole lesson is one distinction: who sent that acknowledgment, and what, exactly, were they vouching for?',
        ],
      },
      {
        title: 'The mailroom receipt',
        paragraphs: [
          'When TCP carries your submission, the receiving machine\'s transport layer confirms arriving bytes with an acknowledgment, an ACK. Think of certified mail: the building\'s mailroom signs for the envelope. The signature proves the envelope reached the building, in one piece, in order.',
          'It proves nothing else. Nobody upstairs has opened the envelope, read the claim, checked your permissions, validated the amounts, or written anything into the expense database. The mailroom clerk signs for envelopes all day without reading a single letter. TCP is that clerk: it can acknowledge bytes before the application has even looked at them.',
        ],
      },
      {
        title: 'Walk the timeline, then break it',
        paragraphs: [
          'Put numbers on it. Your request occupies 120 bytes, numbered 1000 through 1119 in the connection\'s stream. At five milliseconds, the far transport sends ACK 1120, meaning: I hold everything up to byte 1119, send byte 1120 next. At eight milliseconds the application parses the claim, at thirty the database commits it, and at thirty-five a response heads back. In the happy case the ACK was simply early news.',
          'Now break it. The service crashes at twenty milliseconds. The ACK at five milliseconds already happened, and the commit at thirty never will. Acknowledged, and lost. Or flip it: the commit at thirty succeeds and the response at thirty-five is lost on the way back. Saved, and unconfirmed. One transport receipt, three different endings.',
        ],
      },
      {
        title: 'What the caller actually needs',
        paragraphs: [
          'The caller needs promises from the application itself, not its mailroom. Commit means the database accepted the transaction under its own durability rules; only the application can report that. A well-designed service offers an application-level response for success and, for the uncertain cases, a way to ask afterward: a submission identifier plus a read-only status lookup.',
          'This is also why blindly resending is dangerous. If the first claim was saved and its response was lost, a resend files the expense twice. Reliable byte delivery never adds up to exactly-once processing; that property has to be designed at the application layer, with deduplication keys or lookups whose rules are documented. Trust the mailroom for what mailrooms do, and demand a signature from the person who actually filed the paperwork.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Receipt precedes this example commit',
        alt: 'TCP ACK at 5 milliseconds precedes parsing at 8, commit at 30, and application response at 35.',
        caption: 'Follow how early the ACK happens. Hypothetical scheduling: a crash at 20 ms would leave the ACK sent and the commit never reached.',
        items: [
          { label: '5 ms: TCP receipt', detail: 'ACK 1120 for bytes through 1119' },
          { label: '8 ms: parsing', detail: 'Application interprets the submission' },
          { label: '30 ms: commit', detail: 'Storage operation completes under its contract' },
          { label: '35 ms: response', detail: 'Application reports its result to the caller' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Draw the four events on a line: ACK at 5 ms, parse at 8, commit at 30, response at 35. Label the first one transport and the last three application.',
        'Draw a crash at 20 ms and cross out everything after it. Notice what survives on the left: a sent acknowledgment for a claim that no longer exists anywhere.',
        'Make a second copy where all four events happen but the response is lost in transit. Write the caller\'s view at the bottom: timeout, outcome unknown.',
        'For that uncertain caller, write the two things a good service would offer: a submission identifier and a read-only status lookup, so checking never risks filing twice.',
      ],
      notice: 'Both failure drawings contain the same early ACK. The acknowledgment cannot distinguish saved from lost; only the application\'s own answer can.',
      troubleshooting: 'If your drawing implies the commit must happen because the ACK exists, redraw who sent each signal: the transport vouches for bytes, the application for outcomes.',
    },
    recall: {
      prompt: 'A print server acknowledges every uploaded byte of a job, then its print worker dies. What does the sender actually know?',
      hint: 'Which layer signed the receipt?',
      answer: 'Only that the bytes reached the far machine\'s transport layer in order. Whether the job was parsed, queued, or printed is application territory, and the worker died somewhere inside it. The sender needs the print service\'s own status interface to learn the outcome, and should not resubmit blindly, since the job may already be queued and would print twice.',
    },
    quiz: {
      question: 'What does ACK 1120 establish for the 120-byte request numbered 1000 through 1119?',
      options: ['The far transport received bytes through 1119 in sequence.', 'The expense database committed the request.', 'The application can no longer fail before storing the request.'],
      correctIndex: 0,
      explanation: 'The acknowledgment is the mailroom signature: bytes up to 1119 arrived, send 1120 next. Parsing, validation, and the database commit all live above the transport and can still fail after the ACK, which is exactly why callers need an application-level answer.',
    },
    takeaway: 'An ACK is the mailroom signing for the envelope. For did it save, only the application\'s own confirmation counts.',
    sourceNote: 'RFC 9293 section 3.4 was spot-checked for ACK meaning. Synthetic timings do not establish database guarantees.',
  },
  {
    id: 'tech-018',
    outcome: 'Tell a slow receiver from a congested network when a transfer drags, using two window limits.',
    scene: 'A telemetry collector drains its receive buffer slowly during a busy log-processing period.',
    sections: [
      {
        title: 'The upload slows and the network is innocent',
        paragraphs: [
          'A telemetry upload into a collector slows to a crawl. The on-call engineer starts checking links and routers, because slow transfer sounds like a network problem. Meanwhile the real culprit sits at the destination: the collector application is busy crunching earlier logs and has nearly stopped reading new data.',
          'TCP senders obey two separate speed limits, set by two different authorities. Knowing which one is active is the difference between an evening spent on the right question and one spent on the wrong network.',
        ],
      },
      {
        title: 'The first limit: the receiver\'s shelf',
        paragraphs: [
          'Received bytes wait on a shelf, the receive buffer, until the application takes them. The receiver continuously advertises how much shelf space remains: that advertisement is the receive window, and respecting it is called flow control. Its job is to protect the receiver from being buried under data it has nowhere to put.',
          'The shelf explains the collector. When the application reads eagerly, space frees constantly and the window stays wide. When the application is busy, the shelf stays full, the advertised window shrinks, and the polite sender slows down. Under a long enough stall the window can reach zero, pausing sending entirely. No link is congested; the destination is simply not consuming.',
        ],
      },
      {
        title: 'The second limit: the road\'s capacity',
        paragraphs: [
          'The other limit comes from the path itself. The sender maintains a congestion window, its running estimate of how much data may safely be in flight given feedback from the network: losses suggesting overflow, growing delays suggesting queues. Respecting that one is congestion control, and it protects the shared road rather than the destination.',
          'The sender\'s rule is simple: the smaller limit wins. Outstanding data, bytes sent but not yet acknowledged, must fit inside both windows at once. A giant receive window cannot open a congested road, and an empty motorway cannot force-feed an application that has stopped reading.',
        ],
      },
      {
        title: 'Same number, different story',
        paragraphs: [
          'Here is why a single throughput graph cannot diagnose this. Snapshot one: receive window 4000 bytes, congestion window 10000, outstanding 3000. The binding limit is 4000, so the sender may add 1000 bytes. Snapshot two: receive window 12000, congestion window 4000, outstanding 3000. Again exactly 1000 bytes of headroom, but now the road is the constraint, not the shelf.',
          'Identical allowance, opposite diagnosis, different fix. So pair each hypothesis with its own evidence: a persistently small advertised window points at receiver consumption, while losses and growing delay point at the path. Watch the advertised window across time rather than in one snapshot, since a single moment can mislead. One more honesty note: pacing and loss-recovery rules shape sending too, so window arithmetic is a budget ceiling, not a promise of instant transmission.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Same allowance, different constraint',
        alt: 'Two window snapshots each permit 1000 additional bytes, one limited by receive window and one by congestion window.',
        caption: 'Compare which window is smaller in each column: that side owns the limit. Illustrative accounting; real pacing and recovery add constraints.',
        items: [
          { label: 'Receiver-limited', detail: 'Receive 4000; congestion 10000; outstanding 3000; allowance 1000 bytes' },
          { label: 'Path-limited', detail: 'Receive 12000; congestion 4000; outstanding 3000; allowance 1000 bytes' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Write a snapshot: receive window 8000 bytes, congestion window 5000, outstanding data 2000. Circle the smaller window; that authority is in charge.',
        'Subtract outstanding from the circled window: 5000 minus 2000 allows 3000 new bytes. Label the active constraint: the path.',
        'Raise only the receive window to 12000 and recompute. Still 3000, because you enlarged the limit that was not binding.',
        'Swap the two windows instead and recompute. The allowance is again 3000, but now circle the receiver, and note what evidence you would check next: consumption, not links.',
      ],
      notice: 'The allowance stayed at 3000 through all three snapshots while the responsible authority changed twice. The number alone never named the culprit.',
      troubleshooting: 'If you added the two windows together, start over: the sender must fit inside both at once, so only the smaller one sets the budget.',
    },
    recall: {
      prompt: 'A storage service receives slowly. Its advertised window is tiny, while path evidence shows no loss and steady low delay. Where does the next question belong?',
      hint: 'Who empties the shelf?',
      answer: 'At the receiver\'s consumption. A persistently small advertised window means the application is not draining its buffer, so ask what it is busy with: processing, locks, disk waits. The quiet path evidence says congestion control is not the binding limit, so tuning the network or adding bandwidth would aim at the authority that was never in charge.',
    },
    quiz: {
      question: 'The receive window is large but the congestion window is small. Will enlarging the receive buffer increase the sending budget?',
      options: ['Yes, the two windows add together.', 'No, the smaller congestion constraint still applies.', 'Yes, more receive space clears network congestion automatically.'],
      correctIndex: 1,
      explanation: 'The sender obeys both limits simultaneously, so the smaller one rules. Growing the limit that was already generous changes nothing, and no amount of receiver memory alters conditions on the shared path; those improve only when the congestion feedback does.',
    },
    takeaway: 'Two authorities limit a TCP sender: the receiver\'s shelf and the shared road. Find which is smaller before choosing a fix.',
    sourceNote: 'RFC 9293 sections 3.8.2 and 3.8.6 were spot-checked. The arithmetic is simplified window accounting, not a complete TCP implementation model.',
  },
  {
    id: 'tech-019',
    outcome: 'Decide what late, missing, or repeated datagrams should mean for your application, because UDP will not decide for you.',
    scene: 'A live training-audio stream and an archival recording need different late-data policies.',
    sections: [
      {
        title: 'Same audio, opposite rules',
        paragraphs: [
          'A team broadcasts a live training session and also archives it as a downloadable recording. Same voice, same content. Yet the two systems need opposite rules about imperfect delivery: the live stream happily skips a lost syllable, while the archive must recover every byte or the file is corrupt.',
          'Both can be built on UDP, and that is the point of this lesson: UDP does not come with delivery rules. Choosing it means writing them yourself, deliberately, for what your application actually needs. One transport, two correct designs, because the designs answer to different needs.',
        ],
      },
      {
        title: 'Postcards, not a conveyor',
        paragraphs: [
          'UDP delivers datagrams: individually bounded messages, like postcards. Each postcard arrives whole or not at all, which is genuinely useful. But the postal service makes no further promises. Postcards can vanish, arrive out of order, or occasionally arrive twice.',
          'There is one modest safeguard: a checksum that helps detect certain corruption in transit. Do not promote it into more than it is. A checksum is not a delivery receipt, not an ordering rule, and not proof of who sent the postcard. Everything beyond postcard boundaries is the application\'s job.',
        ],
      },
      {
        title: 'The deadline decides what a late postcard is worth',
        paragraphs: [
          'Follow one audio chunk through both systems. Chunk 72 should play at 120 milliseconds on the receiver\'s playback timeline, but arrives at 170 milliseconds: fifty late. For the live listener, that playback moment has already passed. Pausing everyone to wait for it would trade one lost syllable for a frozen session, so the live player conceals the gap and moves on. The late chunk is worthless there.',
          'The recording transfer sees the same chunk differently. A file has no playback deadline during transfer; it has positions. Chunk 72 drops into its correct slot whenever it arrives, and anything still missing gets requested again. Worthless to the stream, essential to the file. Same bytes, same lateness, opposite value, because the deadline belongs to the application, not to UDP.',
        ],
      },
      {
        title: 'Building the rules you actually need',
        paragraphs: [
          'A protocol over datagrams assembles its guarantees from parts: sequence numbers so positions and repeats are recognizable, acknowledgments so the sender learns what arrived, retransmission rules to repair gaps that still matter, and sensible message-size limits. One more part is not optional: a response to congestion. Resending aggressively into an overloaded path feeds the very delay that caused the losses.',
          'Two closing corrections to folklore. UDP is not automatically faster; it simply does less, and whatever reliability you add costs what it costs. And skipping recovery is a legitimate design, as the live stream shows, provided someone chose it on purpose. The transport name is never the design. The policies are.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same late chunk has different value',
        alt: 'Audio chunk 72 arrives at 170 milliseconds after a live deadline of 120, but remains useful for a file.',
        caption: 'Compare what each column does with the identical 50 ms late arrival. The 120 ms deadline is illustrative policy, not a universal playback buffer.',
        items: [
          { label: 'Live playback', detail: 'Chunk 72 is 50 ms late; its playback position has passed' },
          { label: 'Recording transfer', detail: 'Chunk 72 still fills its file position; complete data matters' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Three paper slips'],
      steps: [
        'Label three slips 9, 10, and 11, and give them playback deadlines of 180, 200, and 220 ms. These are your audio chunks.',
        'Assign arrivals: chunk 9 at 170 ms, chunk 10 at 240, chunk 11 at 210. Mark each slip met or missed against its own deadline.',
        'Play the live policy: place the timely chunks 9 and 11 in position, and mark chunk 10\'s moment as a concealed gap. Later audio does not wait.',
        'Now play the archive policy: keep all three, order them 9, 10, 11 by number, and write how a duplicate of chunk 10 would be spotted: same sequence number, discard one.',
      ],
      notice: 'The live timeline has a gap and no waiting; the file has no gap and no deadlines. Identical arrivals, two correct outcomes under two chosen policies.',
      troubleshooting: 'If your live playback paused everything until chunk 10 arrived, you applied the file rule to the stream. Deadlines rule the stream; positions rule the file.',
    },
    recall: {
      prompt: 'A dashboard receives periodic temperature readings over datagrams, and an old reading arrives after a newer one. What rule does the dashboard need?',
      hint: 'Arrival order is not observation order.',
      answer: 'A freshness rule built on identifiers. Each reading needs a sequence number or timestamp from the sensor, and the dashboard keeps only the newest observation, discarding late arrivals that are older than what it already shows. UDP will happily deliver the stale reading after the fresh one; deciding that it must not overwrite the display is application policy.',
    },
    quiz: {
      question: 'Which design fits a complete recording transferred over UDP datagrams?',
      options: ['Treat each arrived chunk as proof that all earlier chunks arrived.', 'Rely on the UDP checksum as the delivery receipt.', 'Add chunk identifiers, recovery for missing chunks, and congestion-aware sending.'],
      correctIndex: 2,
      explanation: 'A file needs completeness, so the protocol must identify chunks, repair gaps, and avoid resending into an overloaded path. Arrival of one postcard says nothing about the others, and a checksum only helps detect corruption; it acknowledges nothing.',
    },
    takeaway: 'UDP hands you postcards. Deadlines, ordering, recovery, and congestion behavior are policies you must choose on purpose.',
    sourceNote: 'RFC 8085 grounds UDP application responsibilities. Audio deadlines are illustrative, not codec or vendor recommendations.',
  },
  {
    id: 'tech-020',
    outcome: 'Treat a timed-out request as an unknown outcome, and retry only with a plan that cannot double the work.',
    scene: 'A build-report creation request commits before its response is lost on the way back.',
    sections: [
      {
        title: 'The timeout that lied by omission',
        paragraphs: [
          'A release dashboard asks a service to create a build report. Half a second later it gives up and shows: timeout. Nearly everyone reads that as the request failed. The dashboard then offers a tempting Try again button.',
          'But a timeout reports exactly one fact: my waiting limit expired before a response arrived. It says nothing about what happened at the other end. Pressing Try again on that evidence is how systems end up with two of things.',
        ],
      },
      {
        title: 'Three endings behind one screen',
        paragraphs: [
          'Think of phoning in a pizza order and the call dropping right after you finish speaking. Three stories fit equally well: the order never registered, the order is being typed in right now, or the pizza is already in the oven and only the confirmation was lost. Calling again without checking risks two pizzas.',
          'The same three endings hide behind every request timeout: never arrived, still running, or completed with a lost reply. One more trap: hanging up does not cancel anything. Your local deadline ended your waiting, not the remote work. Real cancellation is its own operation that the service must explicitly support, and even it can race a job that is just finishing.',
        ],
      },
      {
        title: 'Walk the timeline where the report exists',
        paragraphs: [
          'Here is the ending that stings. The request leaves at zero milliseconds. The service commits the report record at 400. The response is lost at 450. The dashboard times out at 500. The report exists; the caller just never heard. A fresh create request now manufactures a second report.',
          'The defense is designed, not hoped for. An operation is idempotent if repeating it has the same intended effect as doing it once; creation usually is not, unless the interface adds something. Good interfaces offer a deduplication key, so the service recognizes a resend of the same logical request, or a status lookup, so the caller can ask what happened before acting. Both come with documented scopes and lifetimes. If the documentation does not promise it, do not assume it.',
        ],
      },
      {
        title: 'Retry like an adult',
        paragraphs: [
          'When retrying is justified, give it a budget: a bounded number of attempts inside one overall deadline. Space attempts with backoff, increasing waits between tries, plus jitter, a random spread so a thousand clients do not all retry in the same instant. These controls protect the struggling service from a stampede; they still do not answer whether the first attempt succeeded.',
          'And watch the multiplication. If three nested layers each retry three times, one user click can become 27 attempts at the deepest dependency, arriving mid-incident. Let one layer own retries. For anything that changes state, prefer the sequence check, then act: a read-only status lookup first, and a resend only when the outcome is known missing or the operation is documented as safely repeatable.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Completed remotely, uncertain locally',
        alt: 'Commit at 400 ms and response loss at 450 precede the caller timeout at 500.',
        caption: 'Follow what the caller never sees: the commit happened before the timeout. Synthetic events, not proportional spacing.',
        items: [
          { label: '0 ms: send', detail: 'Caller requests a new report' },
          { label: '400 ms: commit', detail: 'Report record exists at the service' },
          { label: '450 ms: response lost', detail: 'Caller receives no completion evidence' },
          { label: '500 ms: timeout', detail: 'Waiting ends; remote outcome remains uncertain to caller' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Draw two rows, caller and service, and place the four events: send at 0 ms, commit at 400 on the service row only, response lost at 450, timeout at 500.',
        'At the timeout, write two separate statements: what the caller knows, waiting ended, and what the timeline shows, report exists. The gap between them is the lesson.',
        'Sketch the safe next step: a read-only status lookup for the operation. If the fictional interface offered none, write outcome unknowable without resend risk instead of inventing one.',
        'Draft a retry budget for the resend case: three attempts maximum, one overall deadline, backoff with jitter, and one layer that owns all retries.',
      ],
      notice: 'Your caller row never learns about the commit on its own. Every safe plan starts by asking, not by resending.',
      troubleshooting: 'If your sketch assumes the timeout cancelled the service work, erase that: ending your wait ends nothing remotely without an explicit, supported cancellation.',
    },
    recall: {
      prompt: 'A meeting-room reservation request times out, and minutes later the booking appears in the calendar. Why was clicking reserve again immediately a bad idea?',
      hint: 'A missing reply is not a negative receipt.',
      answer: 'The timeout only meant the confirmation never arrived; the reservation itself had succeeded. An immediate second attempt risks booking the room twice unless the interface documents safe repetition, such as a deduplication key. The right move was the read-only path: check the reservation status first, then create only if nothing exists.',
    },
    quiz: {
      question: 'A create request times out. What is the only conclusion the timeout itself supports?',
      options: ['The required response did not arrive before the caller\'s deadline.', 'The server made no durable change.', 'The request can safely be sent again without checking anything.'],
      correctIndex: 0,
      explanation: 'A timeout is a statement about local waiting, nothing more. The remote work may have failed, may still be running, or may have completed with a lost reply, so claims about the outcome or about safe repetition need evidence the timeout cannot provide.',
    },
    takeaway: 'Timeout means outcome unknown. Check before you resend, and give any retry a bounded, single-owner budget.',
    sourceNote: 'The inherited references ground outcome uncertainty and retry risks. The timeline and nesting count are illustrative.',
  },
  {
    id: 'tech-021',
    outcome: 'Sort HTTP operations by two separate questions: does it change anything, and what does repeating it do?',
    scene: 'A project-board interface must distinguish viewing, replacing, deleting, and creating a board.',
    sections: [
      {
        title: 'Which of these is safe to retry?',
        paragraphs: [
          'A team is wiring up a project-board app with four operations: view a board, replace its settings, delete it, create a new one. The flaky-network question lands on the table: which of these may the client automatically retry? Someone says anything that does not write. Someone else says anything idempotent. They are not saying the same thing.',
          'HTTP has precise words for this, and they answer two different questions. Mixing the questions produces retry bugs, duplicate boards among them; separating them makes the policy almost mechanical. By the end, each of the four operations will have a clear verdict.',
        ],
      },
      {
        title: 'Two questions, not one',
        paragraphs: [
          'Question one: did the caller request a change at all? If not, the method is safe. GET is the model citizen: reading the menu, asking to look. Note the fine print: safe describes what was requested, so a server logging each view does not break it. Incidental bookkeeping is not a requested change, any more than a waiter counting menu readers changes the menu.',
          'Question two: if the identical request runs twice, is the intended effect still the same as once? If yes, the method is idempotent. Think of an elevator button: pressing it again does not summon a second elevator. Crucially, idempotent does not mean harmless or read-only. It only means repetition adds nothing further.',
        ],
      },
      {
        title: 'Sort the four board operations',
        paragraphs: [
          'GET board: no change requested, and asking twice changes nothing. Safe and idempotent. PUT title to Review: this requests a replacement, so not safe. But the second identical PUT replaces Review with Review. Same final state: idempotent, like the elevator button.',
          'DELETE board: requests removal, so not safe; deleting an already-gone board leaves it exactly as gone. Idempotent. POST create board: requests a change, and here the elevator analogy breaks. Two identical create requests are two orders at the counter: you get two boards. Ordinary POST creation is neither safe nor idempotent.',
        ],
      },
      {
        title: 'Effects repeat, replies need not',
        paragraphs: [
          'One subtlety trips people during testing. The first DELETE returns 204, success with nothing to say. The repeat returns 404, because the board is already gone. Different replies, yet the intended effect, board absent, held both times. Idempotency is judged on resource state, not on identical response text.',
          'Two boundaries complete the policy. The method label is a contract, not a spell: a buggy endpoint that creates duplicates on PUT does not become correct because PUT is idempotent on paper. And when a create must survive retries, the interface needs an explicit documented mechanism, such as a client-supplied deduplication key the server uses to recognize resends. Absent that, a timed-out POST is a check-first situation, never an auto-retry.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four board operations, two properties',
        alt: 'GET is safe and idempotent; PUT and DELETE are only idempotent; ordinary create POST is neither.',
        caption: 'Answer the two questions per row: change requested, and effect of repeating. Fictional board contract; DELETE replies differ while the removal effect repeats.',
        items: [
          { label: 'GET board', detail: 'Safe: yes. Idempotent: yes. Retrieve its representation.' },
          { label: 'PUT title Review', detail: 'Safe: no. Idempotent: yes. Request the same replacement.' },
          { label: 'DELETE board', detail: 'Safe: no. Idempotent: yes. Example replies: 204, then 404.' },
          { label: 'POST new board', detail: 'Safe: no. Not generally idempotent. A repeat can create another.' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Draw one board titled Draft. On paper, write two identical PUT requests setting the title to Review, and the board state after each: Review, then still Review.',
        'Answer the two questions for PUT in separate columns: change requested, yes, so not safe; repetition added nothing, so idempotent.',
        'Run the same two-column drill for DELETE with replies 204 then 404. Judge the state column, not the reply column: absent both times.',
        'Finish with two identical create POSTs. Count the boards, two, then write what the interface would need for safe retries: a documented deduplication key.',
      ],
      notice: 'Every verdict came from two small questions answered separately. The reply codes never decided anything; the state column did.',
      troubleshooting: 'If your idempotent column keeps matching your safe column, you are answering one question twice. PUT and DELETE are the rows that split them apart.',
    },
    recall: {
      prompt: 'A status-page GET is logged by the server on every request, and the log grows. Does that growing log break the safety of GET?',
      hint: 'Safety is about what the caller asked for.',
      answer: 'No. The caller requested a read, nothing more, so the request stays safe. The log entry is the server\'s own incidental bookkeeping, not a change the client asked to make. Safety is also not a security claim: it says nothing about whether the endpoint leaks data, only that reading was the requested semantics.',
    },
    quiz: {
      question: 'A repeated DELETE returns a different status code but the resource stays gone. What does this show?',
      options: ['Different statuses make the operation non-idempotent.', 'Deletion is safe, because the second call changed nothing.', 'Idempotency concerns the intended effect, not identical responses.'],
      correctIndex: 2,
      explanation: 'The judgment happens in the state column: absent after one call, absent after two, so the effect repeated. Replies may differ because circumstances differ. And deletion can never be safe, since the first call requested a real change; safe and idempotent are separate questions.',
    },
    takeaway: 'Ask two questions separately: was a change requested, and what would repeating do? GET, PUT, DELETE, and POST each answer differently.',
    sourceNote: 'RFC 9110 defines these properties. The board API and status sequence are illustrative, not a tested implementation.',
  },
  {
    id: 'tech-022',
    outcome: 'Keep a background job pending in your interface until its own lifecycle reports a final result.',
    scene: 'A video-export interface receives an accepted response while a separate worker processes the job.',
    sections: [
      {
        title: 'The export that finished too early',
        paragraphs: [
          'A video editor clicks Export. The service answers with HTTP 202, and the interface cheerfully announces Export finished. The editor closes the laptop and leaves. There is no file. Nothing crashed, either. The interface simply claimed something the response never said.',
          'Status code 202 means Accepted: the request was taken in for processing, and the processing is not done. It does not even promise the processing will succeed. Reading 202 as finished is like reading a dry cleaner\'s ticket as a clean suit.',
        ],
      },
      {
        title: 'The ticket, not the suit',
        paragraphs: [
          'The dry cleaner is the right picture for background work. You hand over the suit and get a ticket: accepted, job number J7, come back later. The 2xx family of HTTP codes all mean some request succeeded, but they differ in what succeeded. A 200 answers your question now; a 202 only accepts work for later; a 204 succeeds with nothing to show. The family name is not the verdict.',
          'With the ticket comes a second thing: somewhere to ask. A well-designed service pairs the 202 with a job identifier and a status resource, an addressable place that reports the job\'s current state. The ticket without a counter to ask at is a bad contract.',
        ],
      },
      {
        title: 'The job lives its own life',
        paragraphs: [
          'Now the part that confuses interfaces: asking about the job is itself a request, with its own success. The client checks J7 and receives HTTP 200 with a body saying running. Two truths at once: the status request fully succeeded, and the export is not done. A 200 here means the question was answered, not that the work is complete.',
          'What the client is really waiting for is a terminal state: a state the job cannot leave, usually completed, with a result location, or failed, with a reason. Everything before that is weather. The interface message should stay honestly pending: exporting, not exported.',
        ],
      },
      {
        title: 'Two traps on the timeline',
        paragraphs: [
          'Picture J7\'s life: accepted at zero seconds, running at two, and at twelve it reaches completed or failed. Those two endings are alternatives on a branch, never both. Trap one: a status check that itself times out or errors does not mean the job failed. It means your knowledge went stale; the job marches on regardless. Report unknown, not failed.',
          'Trap two: impatience. If the service documents a polling interval or offers a completion notification, follow that, rather than hammering the status resource every 50 milliseconds. And when an accepted job later fails on, say, an unsupported input format, the original 202 was not a lie. Acceptance was the promise to try, and the lifecycle, not the acceptance, is where the truth about the outcome lives.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'One accepted job, two possible final outcomes',
        alt: 'J7 runs, then either completes or fails.',
        caption: 'Follow the branch: the two endings are alternatives, and a successful status check can report any state along the way. Hypothetical times.',
        items: [
          { label: 'Accepted', detail: '0 s: HTTP 202 identifies J7' },
          { label: 'Running', detail: '2 s: status GET can return 200 with running' },
          { label: 'Completed', detail: '12 s: result available under the job contract' },
          { label: 'Failed', detail: '12 s: processing ends without the requested result' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2, label: 'success' }, { from: 1, to: 3, label: 'failure' }],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Write three fictional exchanges: Export returns 202 with J7; a status check returns 200 with running; a later status check returns 200 with failed.',
        'For each, fill two columns: did the HTTP request succeed, and what is the export outcome? The last row is the eye-opener: request succeeded, job failed.',
        'Draft the interface message for each moment: Export started for the 202, Exporting for running, and Export failed with the reason for failed. No message may outrun its evidence.',
        'Replace the last exchange with a status check that times out. Write the honest message, status unknown, still checking, and note why failed would be an invention.',
      ],
      notice: 'The HTTP column and the job column disagree twice: a successful check can report a failed job, and a failed check reports nothing about the job at all.',
      troubleshooting: 'If every 200 became job done in your columns, you are grading the messenger. Read the job-state field inside the response; the status code only graded the question.',
    },
    recall: {
      prompt: 'An archive service returns 202 for a request, and an hour later the job fails because the input format is unsupported. Was the 202 wrong?',
      hint: 'What exactly did the 202 promise?',
      answer: 'No. Accepted means taken in for later processing, with no promise of success. Validating deeply at acceptance time is a design choice, not an HTTP rule, so a correct 202 can precede a legitimate failure. What matters is that the failure surfaces through the documented job lifecycle, with a reason, and that the interface kept showing pending until that terminal state arrived.',
    },
    quiz: {
      question: 'A status check on an export job returns HTTP 200 with the body saying running. What should the interface show?',
      options: ['Status retrieved; the export is still in progress.', 'Export complete, because the request succeeded.', 'The original 202 must have failed, since no result exists yet.'],
      correctIndex: 0,
      explanation: 'The 200 graded the status question, which was answered perfectly: the answer is running. The export outcome is whatever the job-state field says, so the honest display stays pending. Nothing about an unfinished result retroactively invalidates a correct acceptance.',
    },
    takeaway: 'A 202 is a ticket, not a result. Grade the request and the job separately, and trust only terminal states.',
    sourceNote: 'RFC 9110 grounds status semantics. J7 and its lifecycle are an invented application contract.',
  },
  {
    id: 'tech-023',
    outcome: 'Split a slow page load into its timing phases before deciding what, or who, needs optimizing.',
    scene: 'A public documentation page is compared on a fresh connection and a reused connection.',
    sections: [
      {
        title: 'Slow page, instant blame',
        paragraphs: [
          'A documentation page takes a noticeable moment to load, and the first proposal in the meeting is optimize the server code. Maybe. But a page load is a journey with several distinct waits, and the server\'s own work is only one stop on it. Browsers record the whole itinerary; the network panel of any browser\'s developer tools shows it per request.',
          'Reading that record first is the difference between fixing the slow part and speeding up something that was already fast. The phases have names, and each name answers a different where question.',
        ],
      },
      {
        title: 'The six waits, as a restaurant visit',
        paragraphs: [
          'A fresh HTTPS request is like a first visit to a restaurant. First you look up the address: DNS, turning the server\'s name into an address. Then you get seated: TCP setup, establishing the connection. Then a brief word with the waiter about the house rules: TLS setup, establishing the protected channel for HTTPS.',
          'Only now do you order: request send. Then comes the long middle wait until the first plate appears: the first-byte wait. Finally the meal is served course by course: response transfer, first byte to last. Six phases, one total.',
        ],
      },
      {
        title: 'Add it up without double counting',
        paragraphs: [
          'Put illustrative numbers on the fresh visit: DNS 20 milliseconds, TCP 40, TLS 40, send 1, first-byte wait 120, transfer 30. Total: 251. The diagram merges TCP and TLS into one 80-millisecond connection bar for a reason: some timing tools report secure setup inside a broader connection interval, and adding TLS again would invent 40 milliseconds that never existed.',
          'Now the return visit: a regular with a reserved table. Cached name, reused connection. DNS zero, connection zero, everything else unchanged: 151 milliseconds. One hundred milliseconds faster, and the server\'s code did not change at all. Setup costs belong to the visit, not to the kitchen.',
        ],
      },
      {
        title: 'What the long middle wait is not',
        paragraphs: [
          'The 120-millisecond first-byte wait is where fingers point, usually at the server\'s processor. But that interval bundles the request\'s outward travel, time in queues, any databases or services the server consulted, the processing itself, and the first bytes\' travel back. A page that waits on a slow database lookup and a page across a slow network can produce the same bar. From the browser, those are indistinguishable. A long wait narrows the investigation to that span of the journey; it does not name the machine responsible.',
          'Two reading cautions. A zero-length phase usually means reuse, a cached name or an open connection, not impossibly fast work. And browsers deliberately hide detailed timing for many cross-origin resources, so missing detail is a visibility limit, not evidence. Compare like with like, fresh against fresh, reused against reused, before concluding anything.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'A 251 ms fresh-request budget',
        alt: 'DNS 20, connection 80, send 1, first-byte wait 120, and response transfer 30 milliseconds sum to 251.',
        caption: 'Find the biggest bar first: the 120 ms wait spans travel, queues, and processing together. Connection already includes TLS; do not add it twice.',
        unit: 'milliseconds',
        items: [
          { label: 'DNS', detail: 'Fresh name lookup', value: 20 },
          { label: 'Connection', detail: '40 TCP + 40 TLS', value: 80 },
          { label: 'Request send', detail: 'Request transmission', value: 1 },
          { label: 'First-byte wait', detail: 'Travel, queues, dependencies, processing', value: 120 },
          { label: 'Response transfer', detail: 'First byte to completed response', value: 30 },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Copy the five fresh-visit numbers and add them: 20 plus 80 plus 1 plus 120 plus 30 is 251 ms. Write beside the connection bar: TLS already inside.',
        'Build the regular\'s row: DNS 0 and connection 0 for reuse, the rest unchanged. Total: 151 ms.',
        'Write one sentence under the two totals: the 100 ms difference is setup, so it says nothing about server speed.',
        'Under the 120 ms wait, list its hidden ingredients: outward travel, queues, dependency calls, processing, return travel. Mark each one duration unknown.',
      ],
      notice: 'The two honest conclusions: reuse explains the 100 ms, and the big remaining bar is a span of the journey, not a named culprit.',
      troubleshooting: 'If your fresh total came to 291 ms, you added the 40 ms of TLS on top of a connection bar that already contained it. One bar per moment of time.',
    },
    recall: {
      prompt: 'In a timing record, one image shows zero DNS time and another shows 25 milliseconds, from the same page. Does the first image prove no naming work happened?',
      hint: 'What does a zero-length phase usually mean?',
      answer: 'No. Zero almost always means reuse: the name was already cached or the connection already open, so no fresh lookup was needed for that request. There is also a visibility angle: cross-origin resources may simply withhold detailed timing. Check whether the two images share an origin and whether the first request rode an existing connection before reading zero as free.',
    },
    quiz: {
      question: 'A request shows a very large first-byte wait. What does that interval alone establish?',
      options: ['The server\'s processor consumed that entire time.', 'The waiting lies somewhere in the request-response span; its parts still need their own evidence.', 'DNS resolution caused the delay.'],
      correctIndex: 1,
      explanation: 'The first-byte wait bundles travel both ways, queues, dependency calls, and processing into one number, so it narrows the search without naming the culprit. DNS cannot be the answer; it is measured as its own earlier phase.',
    },
    takeaway: 'Total load time is a journey of phases. Separate setup from waiting, never double-count TLS, and treat the first-byte wait as a span, not a verdict.',
    sourceNote: 'The inherited MDN Resource Timing reference describes phases and visibility limits. These values are synthetic HTTPS timings, not browser measurements.',
  },
  {
    id: 'tech-024',
    outcome: 'Explain which kind of waiting HTTP/3 streams remove, and which kinds no protocol upgrade can remove.',
    scene: 'A collaborative whiteboard loads a drawing asset and an independent chat update on one connection.',
    sections: [
      {
        title: 'One lost parcel, two stuck deliveries',
        paragraphs: [
          'A collaborative whiteboard is fetching a chunky drawing asset while a tiny chat message arrives for the same page. Some drawing data goes missing in transit, and strangely, the chat message freezes too, even though chat has nothing to do with the drawing. The bytes for the chat already arrived. They just cannot be delivered yet.',
          'This oddity has a name, head-of-line blocking, and understanding it explains one of the real differences between HTTP/2 and HTTP/3, as well as what neither of them can fix.',
        ],
      },
      {
        title: 'One conveyor belt for everything',
        paragraphs: [
          'HTTP/2 multiplexes: it runs many labeled exchanges, called streams, over one connection, like parcels for different departments sharing one delivery van. The labels work fine, and they save the cost of opening a separate connection per exchange. The catch is underneath: HTTP/2 normally rides on TCP, and TCP is a single ordered conveyor belt. It promises to hand over bytes in exactly the order they were sent, with no gaps.',
          'That promise has a sharp edge. Suppose 600 bytes of drawing data go missing, and right behind the gap sits a complete 200-byte chat update. TCP holds everything behind the gap until the missing bytes are recovered, because delivering out of order would break its one promise. The chat bytes sit in the warehouse, arrived but undeliverable. The department labels cannot talk the conveyor out of its rule.',
        ],
      },
      {
        title: 'A belt per stream',
        paragraphs: [
          'HTTP/3 changes the machinery underneath. It rides on QUIC, a secure transport built over UDP, and QUIC keeps ordering separate per stream: one conveyor belt per department, sharing the same loading dock. The drawing stream still has its gap and still waits for recovery. But the chat stream is complete, so QUIC hands the chat over immediately. The missing drawing bytes no longer hold an unrelated delivery hostage.',
          'That is the precise improvement: cross-stream transport ordering blockage goes away. The loss itself does not; the drawing data must still be retransmitted either way.',
        ],
      },
      {
        title: 'What still waits, on any protocol',
        paragraphs: [
          'Two shared constraints survive the upgrade. The streams still share one connection and its congestion control, the mechanism that slows sending when the network shows pressure, so heavy drawing traffic still influences chat delivery. And application dependencies do not care about transports: if the chat panel needs configuration from the drawing before it can render, the chat waits for the drawing by design, on HTTP/2, HTTP/3, or anything else.',
          'So read head-of-line blocking claims with the mechanism in mind. HTTP/3 removes one specific, real source of waiting. It is not a universal speed upgrade, and no transport can deliver data the application is not yet allowed to use.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What happens to the arrived chat bytes?',
        alt: 'A 600-byte gap holds 200 later chat bytes in TCP, but not necessarily in another QUIC stream.',
        caption: 'Compare the fate of the same 200 chat bytes behind the same 600-byte gap. Hypothetical counts, complete chat headers, no application dependency; not a benchmark.',
        items: [
          { label: 'HTTP/2 over TCP', detail: 'A gap: 600 bytes. Later B: 200 bytes held behind the TCP gap.' },
          { label: 'HTTP/3 over QUIC', detail: 'A gap: 600 bytes. Complete B: 200 bytes can be delivered independently.' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Two colored pencils'],
      steps: [
        'Draw one conveyor line for TCP: a 600-byte gap labeled drawing A, then 200 arrived bytes labeled chat B. Mark B held: the belt cannot skip the gap.',
        'Draw the QUIC picture: two separate lines, A with its gap, B complete. Mark B delivered while A still waits for retransmission.',
        'Add one box around both QUIC lines labeled shared connection and congestion control, to record what the separate belts still have in common.',
        'Sketch the dependency case: write chat panel needs drawing config beside B, and mark B waiting again, this time by application design, not transport rules.',
      ],
      notice: 'B was freed by QUIC in exactly one of your three drawings. The gap recovery and the application dependency looked identical on both protocols.',
      troubleshooting: 'If your QUIC drawing made everything instant, restore the two survivors: the shared congestion box, and the fact that stream A still waits for its own retransmission.',
    },
    recall: {
      prompt: 'A page moves to HTTP/3, but its chart still cannot render until a configuration request completes. Why did the upgrade not remove this wait?',
      hint: 'Which layer created this dependency?',
      answer: 'The chart is waiting for its own prerequisite, not for transport ordering. Independent stream delivery means a gap in one stream no longer blocks another stream\'s complete bytes. It cannot conjure the configuration data before it arrives, and it cannot let the application use data it has decided to wait for. Dependencies built into the page survive any transport.',
    },
    quiz: {
      question: 'Which advantage follows from QUIC ordering data separately within each stream?',
      options: ['Reliable stream data no longer needs retransmission.', 'Each stream delivers its own bytes out of order.', 'Missing data in one stream need not block delivery of another stream\'s complete data.'],
      correctIndex: 2,
      explanation: 'The per-stream belts mean one stream\'s gap holds only that stream. Within each stream, order is still preserved, and lost reliable data is still retransmitted; QUIC changed where the ordering rule applies, not whether recovery happens.',
    },
    takeaway: 'HTTP/3 frees unrelated streams from one lost parcel. Shared congestion and application dependencies wait exactly as before.',
    sourceNote: 'RFC 9000 grounds stream independence. This simplified whiteboard example promises no universal HTTP/3 speed improvement.',
  },
  {
    id: 'tech-025',
    outcome: 'Read a CORS error as a browser sharing rule, and know what it does and does not say about the server.',
    scene: 'A dashboard at one web origin calls a reporting API at another during a front-end review.',
    sections: [
      {
        title: 'The error that gets blamed on the server',
        paragraphs: [
          'A dashboard at https://desk.example calls a reporting API at https://api.example, and the console prints a CORS error. The team\'s first guesses: the API is down, the login is broken, the request never left. All three can be wrong at once, because a CORS error is not the server speaking. It is the browser enforcing a sharing rule of its own.',
          'The two sites are different origins: an origin is the combination of scheme, hostname, and port. Browsers restrict what a script from one origin may learn from another. That restriction is the story here.',
        ],
      },
      {
        title: 'The receptionist who withholds replies',
        paragraphs: [
          'Think of the browser as a strict receptionist carrying messages between companies. CORS, cross-origin resource sharing, is the etiquette by which the receiving company says: replies to this visitor company may be shared. The dashboard script never talks to the API directly; the receptionist does, and decides what the script is allowed to see.',
          'For an ordinary GET with no unusual headers, the receptionist often delivers the request as asked. The API receives it, processes it, responds. Then, if the response lacks the sharing permission for desk.example, the receptionist refuses to hand the reply to the script. The request happened. The script just is not allowed to read the result.',
        ],
      },
      {
        title: 'Calling ahead: the preflight',
        paragraphs: [
          'Requests that could change things get stricter treatment. Before sending a PATCH, a method requesting a partial change, the browser calls ahead with an OPTIONS preflight: my visitor from desk.example intends to send PATCH; is that acceptable? Assume no previously cached permission.',
          'If the answer does not allow it, the real PATCH is never sent at all. Notice how different the evidence is between the two failures: the blocked GET reached the application and ran; the blocked PATCH never left the building. Same console error, opposite facts about what the server received. Server logs plus the browser\'s network view tell you which case you have.',
        ],
      },
      {
        title: 'What CORS never did',
        paragraphs: [
          'Now the boundary that matters for security. CORS decides what browser scripts may read. It is not authentication, establishing who the caller is, and not authorization, deciding what that caller may do. A command-line client or script ignores browser etiquette entirely and talks to the API directly. If the API relies on CORS as its security, it has none.',
          'So private APIs need their own identity and permission checks, exactly as if CORS did not exist. And when developing, resist the folklore fix of disabling browser protections: that changes your test environment, hides the policy mismatch, and leaves the actual configuration broken for every real user. Diagnose the sequence instead: was there a preflight, was the real request sent, and did the response carry the sharing permission?',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two ways a CORS error can occur',
        alt: 'An ordinary GET reaches the API but its response is hidden; a rejected preflight prevents the actual PATCH.',
        caption: 'Compare what the server received in each column: everything in the first, nothing but OPTIONS in the second. Fictional origins; no cached preflight permission.',
        items: [
          { label: 'GET without preflight', detail: 'Actual GET sent; missing sharing permission blocks script access to response' },
          { label: 'PATCH with preflight', detail: 'OPTIONS sent; denied permission means actual PATCH is not sent' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Draw three columns: dashboard script, browser receptionist, API. Use the fictional origins desk.example and api.example; everything stays on paper.',
        'Trace the GET case: request crosses all three columns, response comes back to the receptionist, and stops there. Write script sees error, server saw request.',
        'Trace the PATCH case: an OPTIONS preflight crosses, comes back denied, and the real PATCH gets crossed out in the script column. Write server saw only OPTIONS.',
        'At the API column, add two checks of its own, authentication and authorization, and note why a command-line caller would meet them but never meet the receptionist.',
      ],
      notice: 'The same console error sits atop two different realities, and only the server column reveals which one happened.',
      troubleshooting: 'If your preflight turned into the PATCH itself, redraw it: OPTIONS is a question about a future request, carrying no change of its own.',
    },
    recall: {
      prompt: 'A server log shows a GET arriving and succeeding, while the dashboard script that sent it reports a CORS failure. Are the two records contradicting each other?',
      hint: 'Where does response sharing get decided?',
      answer: 'No contradiction. A simple GET is delivered to the server, which processes it and responds; the browser then withholds the response from the script because the sharing permission is missing. The server\'s view, request served, and the script\'s view, nothing readable, are both accurate, because CORS acts at the browser boundary after the exchange.',
    },
    quiz: {
      question: 'A required preflight is denied and nothing is cached. What does the browser do with the intended PATCH?',
      options: ['Sends it but hides the response from the script.', 'Does not send the actual PATCH at all.', 'Sends it, because the CORS reply counts as permission to modify.'],
      correctIndex: 1,
      explanation: 'A denied preflight stops the state-changing request before it leaves: that is the preflight\'s whole purpose. Send-then-hide describes simple requests like the ordinary GET, and no CORS response ever grants authorization, which stays the server\'s own decision.',
    },
    takeaway: 'A CORS error means the browser restricted sharing. Check what the server actually received, and never use CORS as the security layer.',
    sourceNote: 'The inherited MDN CORS guide grounds these request paths. Examples are paper-only and omit credentialed-request details and preflight-cache behavior.',
  },
  {
    id: 'tech-026',
    outcome: 'Say exactly which stretch of the road HTTPS protects, and what the certificate check actually proves.',
    scene: 'A training portal uses a reverse proxy before its application server.',
    sections: [
      {
        title: 'The padlock covers less than people think',
        paragraphs: [
          'A browser shows the padlock for a training portal, and most people read it as this site is safe. The padlock makes two narrower promises, and knowing where they end is the whole skill. The portal here has a common shape: the browser talks to a reverse proxy, a front server that accepts connections and passes work to an application server behind it.',
          'HTTPS is the web protocol protected by TLS, transport layer security. TLS protects one connection between two endpoints: nobody in between can read the data, confidentiality, or alter it undetected, integrity. The key word is connection, and this portal has more than one.',
        ],
      },
      {
        title: 'An armored courier with an ID check',
        paragraphs: [
          'Picture an armored courier running between you and a building\'s front desk. Before handing anything over, you check the clerk\'s ID. That is the TLS setup, called the handshake. In a fresh TLS 1.3 connection: the browser opens with a ClientHello offering parameters and key material, the server answers with its ServerHello, and the two derive the keys that will lock the channel.',
          'Then comes the ID: the server presents its certificate, a signed document binding names to a public key. The browser checks that the name matches the site it asked for, that the certificate is valid and chains to a trusted authority, and that the server proves possession of the key. Encryption without these identity checks would be an armored courier serving an impostor: private delivery to the wrong hands.',
        ],
      },
      {
        title: 'The courier stops at the front desk',
        paragraphs: [
          'Here is the part the padlock does not show. If the proxy terminates TLS, the armored courier\'s run ends at the front desk. Your verified, protected connection is browser-to-proxy. Whatever happens between the proxy and the application server behind it is a different journey: maybe a second TLS connection, maybe another reviewed protection, maybe nothing.',
          'The honest reading is not everything behind the proxy is insecure. It is: the second hop is a separate design decision needing its own evidence. The browser cannot see it, and the padlock makes no claim about it.',
        ],
      },
      {
        title: 'Two habits for the boundary',
        paragraphs: [
          'First, when a certificate error appears, treat it as information: the name does not match, the chain does not verify, or the validity has lapsed. Investigate which endpoint you actually reached. The folklore fix, clicking past or disabling verification, keeps the encryption and discards the ID check: armored delivery, recipient unknown.',
          'Second, keep the padlock\'s scope modest even when everything verifies. An authenticated, encrypted connection proves who you are talking to and that the conversation is private. It does not make the site\'s content truthful, its code safe, or its permission decisions correct. The padlock is about the road, never about what is waiting at the destination.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'TLS ends at its actual endpoint',
        alt: 'Browser TLS ends at the proxy; the backend connection has a separate protection decision.',
        caption: 'Follow where TLS A stops. The second hop is unspecified, not assumed unencrypted. Fictional portal.',
        items: [
          { label: 'Browser', detail: 'Requests portal.example', x: 16, y: 50, shape: 'screen' },
          { label: 'Reverse proxy', detail: 'Terminates verified front TLS', x: 50, y: 50, shape: 'box' },
          { label: 'Application server', detail: 'Later connection needs separate evidence', x: 84, y: 50, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'TLS A' }, { from: 1, to: 2, label: 'separate hop' }],
      },
      {
        type: 'flow',
        title: 'Fresh TLS 1.3 setup',
        alt: 'ClientHello, ServerHello, server authentication, then client Finished.',
        caption: 'Follow the order: parameters and keys first, then the identity proof. Resumption and optional client authentication omitted.',
        items: [
          { label: 'ClientHello', detail: 'Client offers parameters and key share' },
          { label: 'ServerHello', detail: 'Server selects parameters and key share' },
          { label: 'Server authentication', detail: 'Certificate, signature, Finished; client verifies' },
          { label: 'Client Finished', detail: 'Client completes its handshake proof' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Draw the three boxes: browser, proxy, application server. Draw the TLS arrow only from browser to proxy, because that is the connection the browser verified.',
        'Under that arrow, list what the browser checked: name matches portal.example, certificate valid, chain trusted, key possession proven.',
        'Label the proxy-to-application arrow unknown, and write the question that resolves it: what protection does the deployment design document for this hop?',
        'Add a name-mismatch error to the front hop and write the correct response beside it: find out which endpoint answered, never switch off verification.',
      ],
      notice: 'Your drawing makes exactly one proven protection claim. The discipline is refusing to stretch that one arrow across boxes it never reached.',
      troubleshooting: 'If one TLS label spans both arrows, split it at the proxy: terminating a connection means ending it there, and whatever continues onward is a new connection.',
    },
    recall: {
      prompt: 'An audit finds the portal\'s front HTTPS flawless, but nothing documents how the proxy talks to the application server. What can the audit honestly conclude?',
      hint: 'One verified connection, one undocumented one.',
      answer: 'Only the front hop is established: browser-to-proxy traffic is encrypted, integrity-protected, and going to a verified name. The backend hop is unknown, not proven insecure and not proven secure; it needs its own evidence, such as a second TLS configuration or another reviewed control. Client-side checks can never vouch for a connection the client does not participate in.',
    },
    quiz: {
      question: 'The browser verifies HTTPS to the proxy. What does that establish about the proxy-to-application hop?',
      options: ['It rides the same uninterrupted TLS connection.', 'It is necessarily unencrypted.', 'Nothing; its protection needs separate evidence.'],
      correctIndex: 2,
      explanation: 'Termination at the proxy ends the verified connection there, so the second hop is simply outside the padlock\'s scope. Assuming it is the same connection overstates the evidence, and assuming it is unprotected invents a verdict the browser has no view of.',
    },
    takeaway: 'TLS protects one named connection between two endpoints. Draw where it ends before saying what is protected.',
    sourceNote: 'RFC 8446 grounds TLS 1.3 mechanisms. This simplified proxy topology omits resumption and does not assess a real deployment.',
  },
  {
    id: 'tech-027',
    outcome: 'Keep who are you and what may you do here as two separate access decisions with separate evidence.',
    scene: 'An editor can change one project storyboard but must not read a different private project.',
    sections: [
      {
        title: 'Signed in, and refused anyway',
        paragraphs: [
          'Mira signs into a storyboard app and edits Project Amber all morning. After lunch she follows a colleague\'s link to Project Blue and gets: access denied. Her first thought is that her login broke. It did not. Both facts are working as designed: she is signed in, and she is refused.',
          'Access control is two different questions asked in order, and most confusion about errors like this comes from merging them into one.',
        ],
      },
      {
        title: 'The badge and the doors',
        paragraphs: [
          'Question one: who is this? That is authentication: establishing which account is making the request, through an accepted proof such as a password with a second factor. Think of the badge check at a building entrance. Note its modest scope: it binds the request to an account, not necessarily to a legal person outside the service.',
          'Question two: may this account do this thing to this resource? That is authorization, and it is the doors inside the building. A badge that opens the front entrance opens some rooms and not others. In the fictional policy here, Mira has editor membership in Amber and no membership in Blue. Same badge everywhere; different doors.',
        ],
      },
      {
        title: 'Evaluate the exact door, every time',
        paragraphs: [
          'The server must evaluate each request as a triple: this account, this operation, this resource. Mira reading Amber: allowed. Mira editing Amber: allowed, her membership includes changes. Mira reading Blue: refused. Mira editing Blue: refused. A session, the mechanism tying her later requests to her morning login, answers only the identity part. Checking a session exists and stopping there would open every door to any badge.',
          'And the doors must live at the server. Hiding the Blue link or the edit button is interface politeness, not enforcement, because anyone can construct a request without using your buttons. The decision that releases data or changes state has to happen where the data lives.',
        ],
      },
      {
        title: 'Reading the refusal codes',
        paragraphs: [
          'HTTP gives bounded clues about which question failed. A 401 means the identity side is missing or invalid: no badge, or an expired one. A 403 means refused, which usually points at permissions, but it is not proof the badge was fine, and some services deliberately answer with 404 for resources you may not know exist. Codes narrow the question; the service\'s documented contract answers it.',
          'The useful habit is precision when things are refused. The right explanation for Mira is specific: this account can edit Amber, and the requested Blue resource is outside its membership. The wrong response is the broad one, granting wider access to make the error go away. Access that exists only to end a debugging session has a way of outliving it.',
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: 'Mira: project by operation',
        alt: 'Mira may read and edit Amber, but may neither read nor edit Blue.',
        caption: 'Read each cell as its own decision for the same signed-in account. Invented policy: rows are projects, columns are operations.',
        items: [
          { label: 'Amber / read', detail: 'Allow: editor membership includes viewing' },
          { label: 'Amber / edit', detail: 'Allow: editor membership includes changes' },
          { label: 'Blue / read', detail: 'Refuse: no project membership' },
          { label: 'Blue / edit', detail: 'Refuse: no project membership' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Copy Mira\'s four-cell matrix. Above it write authentication: accepted, and notice that this one line changes none of the four cells.',
        'Add a second person, Noor, with read-only Amber membership and no Blue access. Fill her matrix: one allow, three refusals.',
        'For Noor attempting an Amber edit, write the two-part verdict: identity accepted, operation refused. Then note why hiding the edit button would not have been enough: requests can be made without buttons.',
        'Write one server-side test you would want, in plain words: as Noor, editing Amber must be refused even when the request is sent directly, bypassing the interface.',
      ],
      notice: 'Two people with valid badges produced five different cell outcomes. Identity never decided a single cell on its own.',
      troubleshooting: 'If signing in turned a whole matrix green, you merged the questions. Put the badge check above the matrix and make every cell ask about the operation and resource again.',
    },
    recall: {
      prompt: 'A report viewer retrieves summaries all day, then gets refused when deleting one report. The user asks why the system suddenly does not recognize them. What is the accurate answer?',
      hint: 'Which of the two questions failed?',
      answer: 'The system recognizes them fine; that is the authentication question, and it passed, as all the successful reads show. The refusal came from the other question: this account\'s permissions cover viewing reports, not deleting them. One permitted operation never implies another on the same resource, so the fix is a permission decision by the resource owner, not a login repair.',
    },
    quiz: {
      question: 'Mira is signed in and requests the private Blue storyboard. What must the server still decide?',
      options: ['Whether this account may read that specific Blue resource.', 'Only whether a valid session exists.', 'Only whether the interface showed her a link to Blue.'],
      correctIndex: 0,
      explanation: 'The session settles identity and nothing else; every request still needs the account, operation, and resource checked against policy. Interface visibility is irrelevant to enforcement, since requests can be constructed without links or buttons.',
    },
    takeaway: 'The badge answers who; each door answers whether. Refusals are precise permission facts, not login failures.',
    sourceNote: 'NIST SP 800-63B-4 grounds authentication; RFC 9110 grounds status meanings. Project roles and memberships are original teaching examples.',
  },
  {
    id: 'tech-028',
    outcome: 'Tell apart reading a token, verifying its signature, validating its claims, and keeping its contents private.',
    scene: 'A release-artifact reader receives a token intended for a different service.',
    sections: [
      {
        title: 'The token you can read but should not trust',
        paragraphs: [
          'A service receives a JWT, a JSON Web Token, and the developer pastes it into a decoder. Out come readable fields: an account name, an issuer, an expiry. It is tempting to act on what you can read. That temptation is the root of most token bugs, because being able to read a token proves nothing about it.',
          'A JWT carries claims: statements such as who issued this, who it is for, and when it stops being valid. Working safely with one means keeping four different verbs straight: decode, verify, validate, and encrypt.',
        ],
      },
      {
        title: 'A signed letter in a transparent envelope',
        paragraphs: [
          'Picture a letter in a transparent envelope. Anyone who holds it can read every word, because the common signed JWT encodes its header and claims with base64url, a reversible packing format, not encryption. Decoding is just reading through the plastic. That is verb one, and it establishes nothing.',
          'The letter is signed, though. Verb two, verify, checks that signature using the trusted key and an allowed algorithm. A good signature proves integrity and origin: the stated issuer wrote this, and nobody altered it. Note what it still does not do: a signature does not hide the contents, and it does not say the letter is meant for you.',
        ],
      },
      {
        title: 'Genuine, unexpired, and still rejected',
        paragraphs: [
          'Verb three, validate, reads the claims against your own expectations. Walk one invented example: issuer training-issuer, audience artifact-reader, expiry 2000000000, counted in seconds since the start of 1970 in UTC. Your clock says 1999999990, so ten seconds remain. The signature verifies. Perfectly genuine, perfectly fresh.',
          'Now an inventory service receives this token. Its required audience is inventory-reader. The token says artifact-reader: a letter addressed to a different office. The inventory service must reject it, familiar account name or not, because audience says who may honor the token, and that check belongs to each recipient. Issuer, audience, and time are separate validations, and any one of them can fail alone.',
        ],
      },
      {
        title: 'What tokens never give you',
        paragraphs: [
          'Verb four is the one signed tokens do not perform: encryption. If a claim is confidential, signing does not shield it; anyone holding the token reads it through the envelope. Confidential content needs an encrypted format or, better, should not ride in a token at all.',
          'Two closing habits. A bearer token is sensitive by nature: whoever possesses it can try to use it, which is why live tokens never belong in decoders, screenshots, chat messages, or lessons like this one; every value here is invented. And a fully decoded, verified, validated token still only authenticates; whether that account may perform the requested operation is the authorization question, decided separately.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A signature pass can still end in rejection',
        alt: 'Readable claims and a valid signature lead to an audience mismatch and rejection by the inventory service.',
        caption: 'Follow the four checks in order: the rejection happens at the third. Invented claims, not a usable credential.',
        items: [
          { label: 'Decode', detail: 'Read iss, aud, and exp claims; no trust established yet' },
          { label: 'Verify signature', detail: 'Configured issuer key and allowed algorithm pass in this example' },
          { label: 'Validate audience', detail: 'artifact-reader does not match required inventory-reader' },
          { label: 'Reject', detail: 'Correct signature and unexpired time do not fix the audience' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3, label: 'mismatch' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Copy only the invented values: issuer training-issuer, audience artifact-reader, expiry 2000000000, clock 1999999990. No real token exists or should exist in this exercise.',
        'Work the time claim: 2000000000 minus 1999999990 leaves ten seconds of validity. Mark the signature as an assumed pass; paper cannot verify cryptography.',
        'Play the inventory service: write its required audience, inventory-reader, compare, and record the rejection with its reason: wrong recipient, not bad signature.',
        'Flip the scenario twice: set the expected audience to artifact-reader and the token passes; then advance the clock past expiry and it fails again, this time on time. Each check fails independently.',
      ],
      notice: 'The same genuine token produced accept and two different rejections, depending only on which validation the recipient ran. Readable never meant usable.',
      troubleshooting: 'If decoding granted access anywhere in your sketch, insert the missing steps: trusted-key verification first, then this recipient\'s own issuer, audience, and time rules.',
    },
    recall: {
      prompt: 'A team puts a confidential project note inside a signed JWT, reasoning that the signature protects it. What did they mix up?',
      hint: 'Which verb protects secrecy?',
      answer: 'They mixed integrity with confidentiality. The signature detects tampering and proves origin, but a signed JWT\'s claims sit in a transparent envelope: base64url is reversible packing, so anyone holding the token reads the note. Secrecy needs encryption or, better, keeping the note out of the token entirely. And since bearer tokens can be used by whoever holds them, the leaked note may be the smaller half of the problem.',
    },
    quiz: {
      question: 'A token has a valid signature and a future expiry, but its audience names another service. What should this service conclude?',
      options: ['Accept: the signature verification passed.', 'Reject: this service is not the intended recipient.', 'Accept: the base64url decoding succeeded.'],
      correctIndex: 1,
      explanation: 'Audience validation is each recipient\'s own duty, separate from signature and time checks. A genuine letter addressed to a different office is still not yours to honor, and decoding is merely reading, which establishes nothing about trust.',
    },
    takeaway: 'Decode is reading, verify is checking the signature, validate is applying your own claim rules, and none of them is encryption.',
    sourceNote: 'RFC 8725 and RFC 6750 ground validation and bearer risks. Claims are invented; no credential is generated.',
  },
  {
    id: 'tech-029',
    outcome: 'Explain why a convincing fake login page defeats typed codes but not passkeys.',
    scene: 'A genuine portal and unrelated lookalike undergo a login design review.',
    sections: [
      {
        title: 'The fake page problem',
        paragraphs: [
          'Someone builds a pixel-perfect copy of your training portal\'s login page and hosts it at portal-login.example instead of portal.example. The logo is right, the colors are right, the form is right. Most anti-phishing advice at this point becomes: hope every user inspects the address bar, every time, forever.',
          'Passkeys attack the problem from the other side. Instead of asking humans to notice a fake, they make the credential itself refuse to work anywhere but the genuine service. The mechanism is worth understanding, because it also shows exactly what passkeys do not protect.',
        ],
      },
      {
        title: 'A key that knows its own door',
        paragraphs: [
          'A passkey is a key pair: a private key that creates proofs, and a public key the service keeps to check them. The pair is scoped to a relying party, the service it was created for. Think of a key cut for one specific door, except better: during login, the private key itself is never sent, only a one-use proof that you hold it.',
          'Login runs as a challenge and response through WebAuthn, the browser\'s interface for this. The service sends a fresh challenge, a random value tying the proof to this attempt. The browser checks which relying-party identifier the requesting site is allowed to use. The authenticator signs with the matching scoped key, after a local unlock such as a fingerprint, which never leaves your device. The service then verifies signature, challenge, and origin, the scheme, host, and port the request came from.',
        ],
      },
      {
        title: 'Why the lookalike gets nothing',
        paragraphs: [
          'Run the fake through that machinery. The lookalike at portal-login.example asks the browser for a credential scoped to portal.example. The browser refuses the scope: wrong door. There is no secret for the user to mistype into the wrong page, and nothing useful for the fake to relay. The protection never depended on the user noticing anything.',
          'Contrast the typed one-time code. A code is spoken out loud, in effect: the user reads it from a device and types it into whatever page is in front of them. A fake page can relay that code to the genuine service while it is still valid, and the login succeeds for the attacker. Manual entry has no binding to the service; passkey context checks are exactly that missing binding.',
        ],
      },
      {
        title: 'The boundaries of the guarantee',
        paragraphs: [
          'Honesty about scope keeps this lesson useful. Some passkeys synchronize between your devices through an account, so this is not a claim that keys can never be copied; the claim is that a lookalike site cannot harvest them through a login page. And phishing-resistant login does not cover everything around it: a compromised device, a stolen signed-in session, or a weak account-recovery process can each bypass the strong front door.',
          'So when reviewing a login design, evaluate the whole loop: how accounts are recovered, how new devices are enrolled, how sessions are protected. A vault door is judged together with its side entrances.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A genuine portal authentication attempt',
        alt: 'Portal challenge, browser relying-party check, authenticator proof, then service verification.',
        caption: 'Follow where the lookalike would fail: the browser scope check refuses the wrong origin before any proof exists. Schematic portal.example flow.',
        items: [
          { label: 'Portal challenge', detail: 'portal.example starts a fresh authentication attempt' },
          { label: 'Browser scope check', detail: 'Requesting origin must be permitted to use RP ID portal.example' },
          { label: 'Authenticator proof', detail: 'Scoped private key signs the required authentication data' },
          { label: 'Service verification', detail: 'Check signature, challenge, origin, and relying-party context' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Write the two labels far apart: genuine portal.example, lookalike portal-login.example. They stay on paper; nothing is visited.',
        'Trace a genuine login through the four diagram steps: challenge, browser scope check, local unlock and proof, service verification. Note beside the unlock: fingerprint never sent.',
        'Now run the lookalike: at the browser scope check, write refused, wrong relying party, and stop. There is nothing for the fake to collect or relay.',
        'Trace a typed code through the fake instead: user types it, fake relays it to the genuine portal in time, attacker in. Then list what passkeys still do not cover: device compromise, stolen sessions, weak recovery.',
      ],
      notice: 'The passkey trace dies at a machine-enforced check; the code trace dies only if the human notices the address. That difference is the entire design.',
      troubleshooting: 'If your passkey trace produced a secret the fake could relay, redraw it: no reusable secret crosses the page, only a proof bound to origin, scope, and one fresh challenge.',
    },
    recall: {
      prompt: 'An organization rolls out passkeys but keeps email-only account recovery that support staff approve on request. Which threat remains wide open?',
      hint: 'Where does an attacker go when the front door is strong?',
      answer: 'Account takeover through recovery. An attacker who can trigger and pass the weak recovery flow replaces the account\'s credentials without ever confronting a passkey. Phishing-resistant login protects the login path only; recovery, new-device enrollment, session protection, and device security each need their own review, or the side entrance quietly undoes the vault door.',
    },
    quiz: {
      question: 'Why does a convincing copied login page on an unrelated domain fail to obtain a passkey proof?',
      options: ['A fresh challenge alone proves the requesting site is genuine.', 'The private key being stored locally is the whole protection.', 'The browser and service enforce credential scope and origin context, which the lookalike cannot satisfy.'],
      correctIndex: 2,
      explanation: 'Local key storage and fresh challenges matter, but neither identifies the intended service; the enforced relying-party scope and verified origin do that. The lookalike\'s request fails the scope check before any proof is created, with no user vigilance required.',
    },
    takeaway: 'Passkeys bind login to the genuine service by machine-checked scope, which beats fakes that typed codes cannot. Recovery and sessions still need their own locks.',
    sourceNote: 'NIST SP 800-63B-4 section 3.2.5 was spot-checked for binding and code distinctions. This is not an assurance certification.',
  },
  {
    id: 'tech-030',
    outcome: 'Scope access by what can be done, to what, and for how long, instead of borrowing a big role.',
    scene: 'A temporary branch-health report needs read access without configuration privileges.',
    sections: [
      {
        title: 'Just use the admin account',
        paragraphs: [
          'A temporary task lands on your desk: produce a health report for Branch West tomorrow between 09:00 and 09:30. The fastest path is offered within minutes: just run it with the admin account. Everyone has heard that sentence, and every incident reviewer has read it in a postmortem.',
          'The task needs to read West health summaries. That is all it needs. Least privilege is the discipline of granting exactly that: the access a task requires, and nothing it merely might find convenient. The payoff is not only about attackers; it caps the blast radius of ordinary mistakes, like a mistyped command landing in the wrong branch.',
        ],
      },
      {
        title: 'Three dials: what, where, how long',
        paragraphs: [
          'Think of lending access the way you lend your flat to a plant-waterer. You decide what they may do: water, not rearrange furniture. Where: the balcony, not the bedroom. And for how long: the weekend, not indefinitely. Access grants have the same three dials: operation scope, which actions are allowed; resource scope, which objects they cover; and duration, when the permission expires.',
          'The dials are independent, and that is the insight people miss. A thirty-minute administrator credential turns the duration dial while leaving the other two wide open: for thirty minutes, it can still delete everything everywhere. Short-lived is not the same as narrow.',
        ],
      },
      {
        title: 'Write the grant from the task',
        paragraphs: [
          'Derive the reporting grant backward from the output. The report needs West health summaries, so: operation, read health; resource, Branch West only; duration, the 09:00 to 09:30 window, with a named owner responsible for ending or renewing it. East branch data and configuration contents stay out, because the report does not use them.',
          'One more trap hides in the phrase read-only client. If the script promises to only send reads while its credential would be accepted for writes, the restriction lives in good intentions. Enforcement belongs at the resource service: the server must refuse a write from this credential, whatever the client meant to send.',
        ],
      },
      {
        title: 'Design the refusals too',
        paragraphs: [
          'A well-written access proposal names its expected refusals alongside its one expected success: West health read succeeds; West configuration write refused; East anything refused. Those denials are features. When a mistaken write bounces off policy at 09:14, it surfaces as a visible refusal instead of a quiet change nobody intended.',
          'Boundaries to keep honest: expiry is not revocation, so a compromised credential still needs a way to be cut off before its window ends; and a narrow grant is still a credential, handled carefully and obtained through the approved process, never by borrowing someone else\'s. Asking a colleague to share their account defeats every dial at once.',
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: 'West reporting grant, 09:00 to 09:30',
        alt: 'West health reads are allowed; East health reads and configuration writes in both branches are denied.',
        caption: 'Read the one allow cell against the three refusals: each denial is a designed boundary, not an accident. The time window expands no permission.',
        items: [
          { label: 'West / health read', detail: 'Allow within the report window' },
          { label: 'West / config write', detail: 'Deny: not needed for reporting' },
          { label: 'East / health read', detail: 'Deny: outside the assigned resource set' },
          { label: 'East / config write', detail: 'Deny: wrong resource and operation' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Write the task in one line: West health summaries, 09:00 to 09:30 tomorrow. Everything else in this exercise must trace back to that line.',
        'Set the three dials under it: operation, read health only; resource, Branch West only; duration, the thirty-minute window plus a named owner for renewal or shutdown.',
        'Copy the matrix\'s three deny cells and write beside each why the task never needs it. These are your designed refusals.',
        'Compare against the convenient alternative: a thirty-minute admin credential. List two actions it still permits during those minutes that your grant makes impossible.',
      ],
      notice: 'Your grant and the short-lived admin credential have identical durations and completely different blast radii. Duration was the least important dial.',
      troubleshooting: 'If your restriction exists only as the script promises not to write, move it: the server\'s policy must refuse the write, so the promise becomes unnecessary.',
    },
    recall: {
      prompt: 'A reporting token expires after ten minutes but is permitted to delete any report in the organization. A reviewer calls it low risk because it is short-lived. What is the reviewer missing?',
      hint: 'Which dials did the ten minutes not touch?',
      answer: 'The operation and resource dials are wide open: for its whole lifetime the token can destroy data it has no business touching, and ten minutes is plenty for an accident or a compromise to do that. Expiry only shrinks the exposure window. The grant should carry read-only operations over the reports the task actually covers, with the server enforcing both, and a revocation path for the case where even ten minutes is too long.',
    },
    quiz: {
      question: 'Which grant matches the stated West reporting task?',
      options: ['West health reads for the approved window, with the server enforcing resource and operation limits.', 'All-branch administrator rights for the same short window.', 'All-branch write access with a client-side promise to send only reads.'],
      correctIndex: 0,
      explanation: 'Only the first grant sets all three dials to the task: read operations, West resources, bounded time, enforced where the data lives. The short admin window narrows time while leaving excessive power, and a client promise is not enforcement at all.',
    },
    takeaway: 'Derive access from the task: what, where, how long, each enforced by the server. A short-lived master key is still a master key.',
    sourceNote: 'NIST least privilege and RFC 6750 ground these distinctions. The matrix is fictional, not employer policy.',
  },
  {
    id: 'tech-031',
    outcome: 'Pick between no-cache and no-store by asking two different questions: may it be kept, and must it be checked?',
    scene: 'A film-club schedule changes its session time while browsers hold an older response.',
    sections: [
      {
        title: 'The screening moved, the page did not',
        paragraphs: [
          'A film club moves Thursday\'s screening from 19:00 to 20:00 and updates the website. Some members still see 19:00, because their browsers are showing a stored copy from last week. The developer reaches for a caching header, sees two candidates with nearly identical names, no-cache and no-store, and picks by vibes.',
          'The names are genuinely misleading: no-cache does not mean do not cache. The two directives answer two different questions, and choosing well means asking your own question first.',
        ],
      },
      {
        title: 'The pantry with a sniff-check rule',
        paragraphs: [
          'A browser\'s HTTP cache is a pantry: responses are jars kept for later, and Cache-Control is the label on each jar telling compliant caches how to treat it. The question no-cache answers is about reuse. A jar marked no-cache may be kept, but it must be checked with the source before every serving. That check is called validation: the browser asks the server whether its stored copy is still current.',
          'Validation is cheap when nothing changed. The server can answer 304 Not Modified, a tiny reply with no page body, meaning: your jar is fine, serve it. If the schedule did change to 20:00, the server sends the updated page instead. So no-cache gives you both halves: members always see the current time, and unchanged visits avoid re-downloading the whole page.',
        ],
      },
      {
        title: 'No-store: do not keep a jar at all',
        paragraphs: [
          'No-store answers the other question, storage. A response marked no-store should not be kept by HTTP caches in the first place: no jar, nothing to validate later. That is the right tool when a response should not sit on shared or lingering storage, and the wrong tool for a public schedule that merely needs to stay current, because it buys freshness by paying full downloads every visit.',
          'Know what no-store is not. It is not a remote eraser: adding it today does not reach into pantries that stored last week\'s response, and it cannot delete copies that already left the building. It does not stop screenshots, does not encrypt anything, and does not check who is asking. It is a storage instruction for compliant caches, nothing more.',
        ],
      },
      {
        title: 'Choose by requirement, not by name',
        paragraphs: [
          'For the film-club schedule, write the requirement before the header: members must always see the current time, and caching unchanged copies is welcome. That is no-cache, store and validate. If the page instead carried something that should not be retained, the requirement is different and so is the directive: no-store.',
          'Two mapping boundaries complete the picture. Application-managed storage, such as a service worker running its own cache logic, follows its own code, not these headers, so it needs its own review. And a browser\'s back button may restore a page snapshot from history without any new request; history navigation plays by different rules than HTTP caching. The header governs HTTP caches, and only them.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two possible policies for a schedule response',
        alt: 'No-cache allows a stored schedule with validation; no-store prohibits storing the new response in HTTP caches.',
        caption: 'Match each column to its question: may it be kept, and must each reuse be checked? Neither directive deletes copies that already exist elsewhere.',
        items: [
          { label: 'Cache-Control: no-cache', detail: 'Store allowed; validate before reuse for a new request' },
          { label: 'Cache-Control: no-store', detail: 'Do not store this response in an HTTP cache' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Two paper slips'],
      steps: [
        'Label one slip server schedule 19:00 and the other cached schedule 19:00, marked no-cache. The second slip is the browser\'s jar.',
        'Play an unchanged visit: the browser validates, the server answers 304, tiny and bodyless, and the stored slip is served. Note what was saved: the full download.',
        'Change the server slip to 20:00 and validate again: this time the server sends the new page, and you replace the cached slip. Every member now sees 20:00.',
        'Start the no-store case with no jar at all: each visit downloads fresh, and write the honest limit beside it: jars created before this header, and copies elsewhere, are untouched.',
      ],
      notice: 'No-cache kept members current using one stored jar and cheap checks. No-store achieved freshness by never keeping anything, at full-download prices.',
      troubleshooting: 'If your no-cache model had an empty pantry, you answered the storage question with the validation directive. No-cache keeps the jar; it only forbids serving it unchecked.',
    },
    recall: {
      prompt: 'After private data was accidentally published and downloaded, the site adds no-store to that page. Management asks whether the copies are now gone. What is the accurate answer?',
      hint: 'When does a response header act, and on what?',
      answer: 'The copies are not gone. No-store instructs caches about storing future responses; it has no reach into responses already stored, downloaded files, screenshots, or non-HTTP storage. The header stops new HTTP-cache copies from accumulating, and that is all. Handling the existing exposure is a separate incident-response problem: access revocation, takedown, and notification as appropriate.',
    },
    quiz: {
      question: 'A public document may be stored by browsers, but every reuse must be checked for freshness first. Which directive matches?',
      options: ['no-store', 'no-cache', 'A long max-age alone'],
      correctIndex: 1,
      explanation: 'Store-but-validate is exactly no-cache: the jar stays, and each serving is checked, cheaply confirmed by 304 when unchanged. No-store forbids keeping the jar, losing the savings, and a long freshness lifetime alone allows unchecked reuse, the opposite of the requirement.',
    },
    takeaway: 'Ask two questions: may this response be kept, and must each reuse be checked? No-store answers the first, no-cache the second, and neither erases the past.',
    sourceNote: 'MDN HTTP caching was spot-checked for directive and history-navigation distinctions. The schedule is fictional; application-managed caches need their own policy.',
  },
  {
    id: 'tech-032',
    outcome: 'Follow a conditional request from stored ETag to either a tiny 304 or a full replacement.',
    scene: 'A festival program download is unchanged between visits, so the browser validates its stored copy.',
    sections: [
      {
        title: 'Why download what you already have?',
        paragraphs: [
          'Your browser holds last week\'s festival program, an 8000-byte page, and you open it again. The program probably has not changed. Downloading all 8000 bytes again would be wasteful; blindly showing the old copy risks missing an update. There is a third option, and it is how much of the web actually works: ask the server, cheaply, whether the stored copy is still current.',
          'The machinery for that question is a little tag and a conditional request. Once you can follow one round trip, cache behavior stops being mysterious.',
        ],
      },
      {
        title: 'The edition slip',
        paragraphs: [
          'When the server first sent the program, it attached an ETag, an entity tag: a short identifier for that exact version of the content, like an edition number inside a library book. Say this one is "program-r7". The tag is opaque, meaning clients must not decode meaning from it; it might come from a hash or a version counter, but your only legal move is comparing it, unchanged, with another tag.',
          'The browser keeps two things side by side: the 8000-byte body, and the tag naming its edition. The tag is not a compressed copy of the program; it is only the label on the spine.',
        ],
      },
      {
        title: 'One cheap question, two answers',
        paragraphs: [
          'When the browser must check freshness, it sends a conditional GET: an ordinary page request carrying one extra header, If-None-Match: "program-r7". Translated: send me the program, unless it still matches this edition.',
          'Unchanged case: the server compares tags, they match, and it answers 304 Not Modified, a small response with headers and no body at all. The browser shows its stored 8000 bytes and refreshes the copy\'s metadata. Changed case: the server now has "program-r8", so it answers 200 with the full new body, say 8200 bytes, and the cache replaces the old copy. Same question, two honest answers, and the full download happens only when something actually changed.',
        ],
      },
      {
        title: 'What the tag does not do',
        paragraphs: [
          'Keep the 304 honest: no new body is not no traffic. The exchange still costs a request and a response with headers; what it saves is resending the content itself. For an 8000-byte page the saving is modest; for large assets it is the difference that keeps repeat visits fast.',
          'And keep the tag in its lane. An ETag answers exactly one question: is this the same edition? It does not decide how long a copy may be reused without asking, which is freshness policy. It does not prove who sent the content or let anyone past access control. Three separate questions: does it match, when must we check, and may this caller have it. The little tag answers only the first.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Reusing the unchanged festival program',
        alt: 'An 8000-byte cached program is validated with its ETag, receives 304, and reuses its stored body.',
        caption: 'Follow the round trip: the 304 carries no body, so the displayed page comes from the cache on the left. Invented tag and sizes.',
        items: [
          { label: 'Stored program', detail: '8000-byte body; ETag "program-r7"' },
          { label: 'Conditional GET', detail: 'If-None-Match: "program-r7"' },
          { label: '304 Not Modified', detail: 'Selected representation matches; no response body' },
          { label: 'Reuse cached body', detail: 'Display the stored 8000 bytes; update applicable metadata' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Draw the cache entry as two separate fields: body, 8000 bytes, and tag, "program-r7". Separate fields matter; the tag cannot regenerate the body.',
        'Write the conditional request with its one special header: If-None-Match: "program-r7". Give the server the same tag and draw back a 304 with the body column empty.',
        'Draw the display arrow from the cached body, not from the 304. Add a small note: metadata refreshed, zero content bytes resent.',
        'Rerun with the server holding "program-r8" and an 8200-byte body: the answer is a full 200, and your cache entry\'s both fields get replaced. Compare the content bytes sent in each run: 0 versus 8200.',
      ],
      notice: 'The two runs differ only at the server\'s tag comparison, and the content cost followed it exactly: nothing resent when matching, everything when not.',
      troubleshooting: 'If your 304 run showed a blank page, the display arrow came from the response. The 304 is a permission slip to reuse; the pixels live in the cache entry.',
    },
    recall: {
      prompt: 'A client kept an ETag but deleted the cached body to save space. It sends the tag and receives 304. What happens, and what did the client get wrong?',
      hint: 'What does a 304 contain?',
      answer: 'The client is stuck: the 304 says your copy is still current and carries no body, but the client no longer has the copy the permission refers to. The tag is an edition label, not a compressed program, so nothing can be reconstructed from it. The client must request the content unconditionally to get a full 200 with the body. Keeping a validator only makes sense while the matching body is kept too.',
    },
    quiz: {
      question: 'After a successful 304 validation, which resource produces the program the user sees?',
      options: ['A full body embedded inside every 304.', 'Content reconstructed by decoding the ETag.', 'The matching body already held in the cache.'],
      correctIndex: 2,
      explanation: 'A 304 deliberately omits the body; its whole message is that the stored copy may be shown. The tag is opaque and reconstructs nothing. The user sees the cache\'s own 8000 bytes, which is exactly the download the mechanism existed to avoid.',
    },
    takeaway: 'An ETag is an edition label. Ask with If-None-Match, and the server either blesses your stored copy with a bodyless 304 or ships the new edition.',
    sourceNote: 'MDN HTTP caching was spot-checked for ETag and 304 behavior. Tags, program contents, and body sizes are original illustrations.',
  },
  {
    id: 'tech-033',
    outcome: 'Keep language variants of one page separate in caches, and keep personal pages out of shared caches entirely.',
    scene: 'A public training guide has English and Tamil responses selected from the request language.',
    sections: [
      {
        title: 'The Tamil reader gets the English page',
        paragraphs: [
          'A public training guide lives at one address, /guide, and the server returns it in English or Tamil depending on the language the browser asks for. An English reader visits first. Minutes later a Tamil reader requests the same address and receives the English page. Nothing crashed; a cache simply did exactly what it was told.',
          'Caches store responses so later matching requests can reuse them, and matching is the key word. If the cache matches by address alone, the first stored language wins for everyone. The address was never the whole question.',
        ],
      },
      {
        title: 'One rack, two leaflets',
        paragraphs: [
          'Picture a help desk with one leaflet rack labeled guide, stocked in two languages. A clerk who files and fetches only by rack name will hand whichever version arrived first to everybody. The fix is obvious in the physical world: file by rack name plus language.',
          'The cache key is exactly that filing rule: the set of request details used to tell stored entries apart. The server controls it with a response header. Vary: Accept-Language declares that this response was selected using the request\'s language header, so caches must treat the language as part of the match. GET /guide asking en and GET /guide asking ta become two entries, each serving its own readers.',
        ],
      },
      {
        title: 'Vary wisely, not maximally',
        paragraphs: [
          'Real language headers carry preference lists rather than the tidy en and ta used here, so treat these values as teaching simplifications. And resist the instinct to vary on everything to be safe. Every added field splits the cache into more shelves: vary on a header that differs per browser and your popular guide fragments into dozens of rarely matched entries, which quietly turns the cache off.',
          'Vary on what actually selected the content. If language chose the body, vary on language. Nothing more.',
        ],
      },
      {
        title: 'Personal pages are a different question',
        paragraphs: [
          'Now swap the public guide for an account profile page. Better filing is not the issue anymore; the issue is whether a shared cache, one serving many users, should hold this response at all. That is a sharing policy, and Cache-Control: private states it: shared caches must not store this, while the user\'s own browser cache may.',
          'Two traps round this out. Using cookies for sessions does not automatically make responses private; the policy must be stated, not implied by the presence of a session. And private is not an eraser: it does not log users out of caches or delete what was stored before the header existed. Selecting the right variant and restricting who may store a response are two different protections, and a personalized service usually needs both.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two public-language variants in a shared cache',
        alt: 'English and Tamil clients request a guide through a shared cache that distinguishes language before contacting the origin.',
        caption: 'Follow both readers into the shared cache: the language header keeps their entries separate. Simplified en and ta values; personal pages need a separate sharing policy.',
        items: [
          { label: 'English reader', detail: 'GET /guide; Accept-Language: en', x: 17, y: 25, shape: 'screen' },
          { label: 'Tamil reader', detail: 'GET /guide; Accept-Language: ta', x: 17, y: 78, shape: 'screen' },
          { label: 'Shared cache', detail: 'Match address plus the language variant', x: 51, y: 50, shape: 'box' },
          { label: 'Guide origin', detail: 'Vary: Accept-Language', x: 85, y: 50, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 2, label: 'en' }, { from: 1, to: 2, label: 'ta' }, { from: 2, to: 3, label: 'miss' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Two paper slips'],
      steps: [
        'Make two slips: /guide English and /guide Tamil, and write the selecting header value on each: en, ta. These are your cache entries.',
        'Play the broken clerk: match an incoming Tamil request by address only, and watch it collect the English slip. Mark the failure: the filing rule ignored what selected the content.',
        'Fix the rule: match address plus language, rerun both readers, and confirm each collects their own slip. That line you added is Vary: Accept-Language.',
        'Add one fictional profile page and write its different requirement beside it: shared caches must not store this at all, Cache-Control: private. Note that this is a storage rule, not a filing rule.',
      ],
      notice: 'The language fix changed how entries are told apart; the profile fix changed who may keep an entry. Two different headers for two different failures.',
      troubleshooting: 'If you solved the profile problem with more Vary fields, step back: better filing still leaves the page in a shared cache. Only the sharing policy keeps it out.',
    },
    recall: {
      prompt: 'A service returns per-account data from one URL and assumes its session cookies keep shared caches away. What two gaps remain?',
      hint: 'Implied is not stated, and filing is not permission.',
      answer: 'First, nothing was stated: cookies associate requests with sessions, but they are not a storage policy, so a shared cache may still store and serve the response unless Cache-Control: private, or stricter, says otherwise. Second, any application-managed cache needs explicit identity boundaries so one account\'s entry can never answer another account\'s request. Variant matching cannot provide either protection; it only selects among entries that were allowed to exist.',
    },
    quiz: {
      question: 'What does Vary: Accept-Language actually do for the public guide?',
      options: ['It makes the request language part of how caches match stored responses.', 'It makes the cache translate the stored body into the requested language.', 'It forces each language onto a different URL.'],
      correctIndex: 0,
      explanation: 'Vary names the request details that selected the content, so caches file and match entries by address plus language. Caches never translate anything, and the whole point of the mechanism is serving variants from one address rather than splitting URLs.',
    },
    takeaway: 'Vary tells caches what selected the content; private tells them who may keep it. Match variants correctly, and keep personal pages off shared shelves.',
    sourceNote: 'MDN HTTP caching was spot-checked for Vary, private, and cookie distinctions. The language and profile scenarios use no personal data.',
  },
  {
    id: 'tech-034',
    outcome: 'Explain how a successful save and a stale read can both be true, and pick the read guarantee a workflow needs.',
    scene: 'An employee changes a rota entry, then reads an older value from a lagging replica.',
    sections: [
      {
        title: 'Saved, confirmed, and still showing the old day',
        paragraphs: [
          'An employee moves their rota shift from Monday to Tuesday. The app confirms: saved. They open the rota screen, and there it is: Monday. No error anywhere. The instinctive conclusions are all alarming: the save was lost, the confirmation lied, the database is corrupt.',
          'Usually none of those is true. The save landed, the confirmation was honest, and the read was honest too. They were just talking to different copies of the data. The same shape appears all over: a renamed file still showing its old name, a profile photo that updates on one screen and not another. One mechanism explains the whole family.',
        ],
      },
      {
        title: 'Two notice boards, one caretaker',
        paragraphs: [
          'Many services keep replicas: additional copies of the data that absorb read traffic. Think of a building with a main notice board by the office and a copy in the lobby. Changes are pinned to the main board first; a caretaker carries updates to the lobby board on his rounds. That carrying is replication, and in the asynchronous style it happens after the main board already confirmed your change.',
          'Anyone reading the lobby board between the pin and the caretaker\'s round sees yesterday\'s rota. The board is not broken and nobody lied. The copy is simply behind, for a while, by design.',
        ],
      },
      {
        title: 'Put times on the two boards',
        paragraphs: [
          'Number the events. At 100 milliseconds, the primary acknowledges version 13 of the rota: Tuesday. At 140 milliseconds, the employee\'s read lands on a replica still holding version 12: Monday. At 220 milliseconds, the replica applies version 13. A read after 220 shows Tuesday, in this simplified single-writer sequence.',
          'The read at 140 was not evidence the write vanished; it was a true answer from a copy that had not caught up. And the 80-millisecond lag here is illustrative only. Real lag varies, which is why one lucky refresh proves nothing general.',
        ],
      },
      {
        title: 'Ask for the guarantee, not for luck',
        paragraphs: [
          'Two phrases describe what you can rely on. Eventual consistency promises that copies converge once updates stop flowing and replication completes; it names no deadline. Read-your-writes promises something more specific: after your own write completes, your subsequent reads see it, under the documented conditions. The rota screen after an edit wants exactly that second promise.',
          'So the fix is never sleep one second and hope, and never refresh until it looks right; both encode luck. Use the datastore\'s documented mechanism: a read-your-writes mode, or routing the after-save read to the primary. One boundary note: before blaming replica lag, rule out the mundane twins, a browser cache showing an old page, or an app that never applied the response it received. Stale copies exist at many layers.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A read reaches the replica before its update',
        alt: 'The client writes Tuesday to the primary but reads Monday from the lagging replica.',
        caption: 'Follow the two arrows from the client: the write went to one copy, the read to another. Hypothetical paths and times, not a convergence guarantee.',
        items: [
          { label: 'Rota client', detail: 'Write acknowledged at 100 ms; replica read at 140 ms', x: 18, y: 28, shape: 'screen' },
          { label: 'Primary write path', detail: 'Version 13: Tuesday', x: 80, y: 28, shape: 'box' },
          { label: 'Read replica', detail: 'Version 12 Monday until update applied at 220 ms', x: 80, y: 80, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'write' }, { from: 0, to: 2, label: 'read at 140 ms' }, { from: 1, to: 2, label: 'async update' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Two paper slips'],
      steps: [
        'Label two slips primary and replica, both starting at version 12, Monday. Add a client row underneath with a timeline.',
        'At 100 ms, update only the primary slip to version 13, Tuesday, and write acknowledged on the client row. The replica slip does not move.',
        'At 140 ms, draw the client reading the replica slip: the honest answer is Monday. At 220 ms, update the replica to version 13.',
        'Write the workflow need in one line, after my save, my next read shows my change, and beside it the proper tool: a documented read-your-writes mode or a primary read, never a timed wait.',
      ],
      notice: 'Every answer on your timeline was truthful, including the stale one. The fix lives in choosing which copy answers, not in distrusting the copies.',
      troubleshooting: 'If your replica updated itself the moment the primary acknowledged, you drew synchronous replication. Keep the caretaker\'s round a separate, later event; the gap between them is the entire lesson.',
    },
    recall: {
      prompt: 'After adding a one-second wait before re-reading, a shopping cart always looked right in testing. The team ships it. What is wrong with the proof?',
      hint: 'What did the one second actually measure?',
      answer: 'The second encoded one observed lag, not a promise. Replication delay varies with load, distance, and failures, and concurrent writes complicate it further, so the wait will eventually be too short, and the bug returns as a flaky mystery. If the workflow needs to read its own writes, use the datastore\'s documented guarantee or read path for that case. A timer is luck wearing a suit.',
    },
    quiz: {
      question: 'A replica returns version 12 moments after version 13 was acknowledged at the primary. What should be examined first?',
      options: ['Whether every successful response must contain the latest global write.', 'The replication style and the read guarantee documented for that read path.', 'Whether a longer client-side delay makes the symptom disappear.'],
      correctIndex: 1,
      explanation: 'The observation is normal for an asynchronous replica, so the real question is what the documented contract promises this read path, and whether the workflow needs a stronger mode. Expecting every success to carry the newest write assumes a guarantee that was never given, and tuning delays just hides the timing.',
    },
    takeaway: 'A save and a stale read can both be honest when different copies answer. Workflows that must see their own writes need the documented guarantee, not a timer.',
    sourceNote: 'The inherited consensus reference grounds replicated-state reasoning. This asynchronous service and timing are hypothetical, not universal datastore behavior.',
  },
  {
    id: 'tech-035',
    outcome: 'Stop two editors from silently erasing each other\'s work, using a version check attached to the write.',
    scene: 'Two release planners edit the same schedule title and owner from an earlier version.',
    sections: [
      {
        title: 'The edit that vanished politely',
        paragraphs: [
          'Two release planners open the same schedule. It says Friday, owner unassigned. Asha changes the title to Saturday and saves. Ben, still looking at his older copy, fills in the owner field and saves his whole version: Friday, owner assigned. Both saves succeed. Asha\'s Saturday is gone.',
          'Nothing crashed and nobody was warned. This is the lost update: a write based on stale state overwrites a change it never knew about. It haunts every shared editable thing: inventory counts, settings pages, wiki articles. The deceptive part is that reading before writing feels safe, and is not: the world can change in the gap between your read and your write.',
        ],
      },
      {
        title: 'A version sticker on the card',
        paragraphs: [
          'The repair is to make the write carry proof of which version it was based on. The server labels each state of the schedule with an ETag, a validator string that works like a version sticker on the record. Both planners read the schedule when its sticker said "plan-a".',
          'A write then uses the precondition header If-Match: apply my replacement only if the current sticker still matches the one I read. The crucial property: the server performs the check and the write as one inseparable action. Checking first and writing a moment later would reopen the same gap the mechanism exists to close.',
        ],
      },
      {
        title: 'Watch the collision resolve',
        paragraphs: [
          'Asha writes first: her replacement arrives with If-Match "plan-a", the current sticker is "plan-a", so the server applies it and issues a new sticker, "plan-b". The schedule now says Saturday, owner unassigned.',
          'Ben\'s save arrives next, carrying his stale basis: If-Match "plan-a". The server compares: current is "plan-b". Refused, with status 412, Precondition Failed. Saturday survives. Note what the refusal really says: not you did something wrong, but the thing you edited has changed since you read it. That is information Ben needed and, without the precondition, would never have received.',
        ],
      },
      {
        title: 'Handle the 412 honestly',
        paragraphs: [
          'What Ben does next decides everything. The right move: fetch the current state, see Saturday, merge his owner assignment into it, and submit with If-Match "plan-b". Both edits survive, and nobody\'s afternoon was wasted. The wrong move: slap the newest sticker onto his old Friday body and resubmit. That passes the check and silently reinstates the overwrite; the guard only works when the body is reconciled, not relabeled.',
          'Three boundaries keep expectations straight. This needs strong validators, ones the server declares safe for write preconditions. It protects one resource at a time, providing no transaction across several. And passing the version check is not permission: whether Ben may edit the schedule at all remains the separate authorization question.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Rejecting the stale Friday replacement',
        alt: 'Both planners read plan-a; Asha creates plan-b; Ben submits plan-a and receives 412 without overwriting Saturday.',
        caption: 'Follow the stickers: the 412 happens where the submitted "plan-a" meets the current "plan-b". Invented schedule; the check and write are one atomic action.',
        items: [
          { label: 'Both read', detail: '"plan-a": Friday; owner unassigned' },
          { label: 'Asha writes', detail: 'If-Match "plan-a"; title Saturday' },
          { label: 'Current state', detail: '"plan-b": Saturday; owner unassigned' },
          { label: 'Ben writes stale copy', detail: 'If-Match "plan-a"; title Friday; owner assigned' },
          { label: '412: precondition fails', detail: 'Keep "plan-b" and Saturday; reconcile before resubmitting' },
        ],
        arrows: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Two paper slips'],
      steps: [
        'Write the shared read on both slips: "plan-a", Friday, owner unassigned. One slip is Asha\'s basis, one is Ben\'s.',
        'Play Asha\'s save: compare her If-Match "plan-a" with the current sticker "plan-a", apply, and write the new current row: "plan-b", Saturday, owner unassigned.',
        'Play Ben\'s stale save: compare his "plan-a" against current "plan-b", write 412 refused, and confirm the current row did not move. Saturday is intact.',
        'Do Ben\'s recovery properly: copy the current Saturday state, add his owner assignment to it, and submit with If-Match "plan-b". Note that yet another concurrent edit would simply repeat this loop.',
      ],
      notice: 'Both intended changes survived, and the only casualty was Ben\'s five minutes of reconciliation, which is exactly the cost the lost update was silently charging to Asha before.',
      troubleshooting: 'If your recovery step kept Friday in the body, you relabeled instead of reconciling. The newer sticker must travel with the merged current content, never with the stale copy.',
    },
    recall: {
      prompt: 'A client reads a stock count, another writer changes it, and the first client sends an unconditional replacement that wins. Management asks: but it read the data first, why was that not enough?',
      hint: 'What can happen between a read and a write?',
      answer: 'Reading first only proves the state at the moment of reading; it reserves nothing. In the gap before the write, any other writer can change the record, and an unconditional replacement then erases that change without anyone noticing. The fix is a version precondition the server checks atomically with the write, such as If-Match with a strong validator: stale replacements get refused, and the client reconciles against current state instead of overwriting it blindly.',
    },
    quiz: {
      question: 'After receiving 412 for a stale write, which response preserves the protection?',
      options: ['Remove the If-Match header and resend the old replacement.', 'Copy the newest tag onto the unchanged stale body and resend.', 'Fetch current state, merge the intended edit into it, and submit with the current validator.'],
      correctIndex: 2,
      explanation: 'The 412 means the resource moved; only reconciliation carries both changes forward. Dropping the header is a deliberate blind overwrite, and relabeling the stale body passes the check while destroying the other edit anyway, which defeats the mechanism while pretending to use it.',
    },
    takeaway: 'Attach the version you read to the write you send. A 412 is the system saving someone\'s work; answer it by merging, not relabeling.',
    sourceNote: 'RFC 9110 defines If-Match. This original single-resource example does not establish a multi-resource transaction.',
  },
  {
    id: 'tech-036',
    outcome: 'Pick the right evidence for the question: counts for patterns, events for specifics, timed paths for one request.',
    scene: 'A thumbnail service investigation moves from an error ratio to one timed storage failure.',
    sections: [
      {
        title: 'Three kinds of evidence walk into an incident',
        paragraphs: [
          'A thumbnail service misbehaves, and the dashboard says: 20 of 1000 requests failed in the last five minutes. Useful, but someone now asks the next question: what actually happened to one of those twenty? And after that: where inside that request did the time go? The dashboard cannot answer either. It was never meant to.',
          'Observability tooling comes in three shapes, and investigations go faster when each shape answers its own kind of question. Think of a hospital: ward statistics, a patient\'s chart entry, and the patient\'s journey through departments. All describe the same hospital; none substitutes for another.',
        ],
      },
      {
        title: 'Statistics, chart entries, journeys',
        paragraphs: [
          'The ward statistic is a metric: a measurement summarized over a population or time window, like that two-percent error ratio. Metrics reveal patterns and trends cheaply, and by design they forget individuals.',
          'The chart entry is a log: one recorded event with its context, such as operation demo-42 reported a storage timeout. Logs name what happened to someone in particular. The journey is a trace: the timed path of one request through the system, made of spans, individual operations with start and end times nested inside each other. Traces show where a request\'s time actually went.',
        ],
      },
      {
        title: 'Follow demo-42 without double-counting',
        paragraphs: [
          'Take one synthetic failure. Request demo-42 starts at 0 milliseconds and returns an error at 200: the parent span, 200 milliseconds. Inside it, the storage call starts at 30 and times out at 180: a child span of 150 milliseconds. The log names the timeout; the trace places it inside the request.',
          'Now the arithmetic habit: never add nested spans. The 150 is already inside the 200; the request took 200 milliseconds total, of which storage consumed 150. The remaining 50 lie outside the storage call, and even then, do not rush to call them processing: they could be other waits, and real traces have overlapping and missing spans.',
        ],
      },
      {
        title: 'What absence proves, and what to leave out',
        paragraphs: [
          'Two disciplines make these signals trustworthy. First, absence is weak evidence. Collection is often sampled, keeping only a fraction of requests; instrumentation misses work it was never taught to record; retention deletes old data. Not finding demo-42 in a signal does not prove it never happened; it may prove only that nobody kept it.',
          'Second, mind what the records carry. A correlation identifier, the shared label linking one request\'s events across signals, exists so you can connect evidence without copying contents around; it is not permission to access the data. Keep credentials and private payloads out of logs, identifiers, and notes. And prefer the least sensitive evidence that answers the question: counts for prevalence, one event for one outcome, spans for one path.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'demo-42: a timed failure path',
        alt: 'A 30-to-180 ms storage call lies inside the 0-to-200 ms request.',
        caption: 'Check the nesting: the 150 ms storage span sits inside the 200 ms request, so the two are never added. Synthetic events.',
        items: [
          { label: '0 ms: request starts', detail: 'Parent request span begins' },
          { label: '30 ms: storage starts', detail: 'Child storage span begins' },
          { label: '180 ms: storage timeout', detail: '150 ms child duration; matching log event' },
          { label: '200 ms: error returned', detail: '200 ms parent duration; contributes one failed request' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Write the metric and compute it: 20 failures of 1000 requests is two percent, labeled with its five-minute window. This is your pattern evidence.',
        'Write the single log event beneath it: demo-42, storage timeout. Deliberately include no request contents and no credentials; the event needs neither to be useful.',
        'Draw the trace: parent from 0 to 200 ms, child storage span from 30 to 180. Compute both durations, 200 and 150, and write the rule beside them: nested spans are never added.',
        'Finish with one line per signal naming the question it answered, and one honest note: a request missing from logs or traces may simply not have been sampled or retained.',
      ],
      notice: 'Three signals, three different questions answered about the same five minutes: how often, what happened to one, and where its time went.',
      troubleshooting: 'If your total came to 350 ms, you added the child to its parent. And if you labeled the leftover 50 ms as CPU work, downgrade it to unexplained; the trace does not say.',
    },
    recall: {
      prompt: 'A daily failure-count graph is climbing, and you need to know which dependency is slowing one specific checkout request. Which signal do you reach for, and why not the others?',
      hint: 'Which evidence preserves a connected, timed path?',
      answer: 'A trace of that request, because only spans preserve the connected timing across dependencies, showing which interval sat inside which call. The metric gave you the trend but has already forgotten individual requests, and isolated log lines name events without placing them in the request\'s timeline. Correlated logs then explain the events inside the slow span. If the trace is missing, remember sampling and retention before concluding anything.',
    },
    quiz: {
      question: 'A 150 ms storage span sits inside a 200 ms request span. What is the request\'s established duration?',
      options: ['200 ms, with the storage time already inside it.', '350 ms, the parent plus the child.', '150 ms, because only dependency time counts.'],
      correctIndex: 0,
      explanation: 'The parent span is the whole elapsed request, and its children are portions of it, so 200 is the total with 150 of it spent in storage. Adding nested spans counts the same clock time twice, and the child alone discards the 50 ms that happened outside the storage call.',
    },
    takeaway: 'Metrics count, logs name, traces place in time. Pick by question, never add nested spans, and treat absence as a collection limit.',
    sourceNote: 'The inherited references ground signal selection. Counts, identifiers, and trace times are synthetic, without customer data.',
  },
  {
    id: 'tech-037',
    outcome: 'Check who got counted before trusting any success percentage, and define the population before the target.',
    scene: 'A report-opening dashboard misses user attempts that never reach the measured server.',
    sections: [
      {
        title: 'Ninety-nine percent happy, says the till',
        paragraphs: [
          'The report-service dashboard glows green: 99 percent of report openings succeed. Meanwhile, the support channel fills with users who cannot open reports. Someone is wrong, surely. Actually, nobody is: the dashboard and the users are counting different groups of people.',
          'Picture a restaurant judging satisfaction by comment cards handed in at the till. Ninety-nine percent glowing. But the customers who saw the queue and walked out never reached the till, so they never got a card. The till\'s number is honest about the till. It just is not a number about everyone who tried to eat.',
        ],
      },
      {
        title: 'Numerator, denominator, boundary',
        paragraphs: [
          'The dashboard number is an SLI, a service level indicator: a defined measurement of service behavior. Ratio-style SLIs have three parts that must be written down before the number means anything. The denominator: which events count at all, the eligible population. The numerator: which of those met the success rule, the good events. And the observation boundary: where the measuring happens, which silently decides who can be counted.',
          'The boundary is the part everyone forgets, and it is exactly the restaurant\'s till. Measure at the server, and attempts that died before the server, in the app, the network, or a sign-in step, are invisible. Not failed. Invisible.',
        ],
      },
      {
        title: 'Run the numbers both ways',
        paragraphs: [
          'Take a hypothetical five minutes with no retries. Users make 1000 report-opening attempts. Only 900 reach the measured server; 100 die earlier. Of the 900, 891 return the correct report within two seconds, the chosen success rule, and nine do not.',
          'Server-boundary SLI: 891 divided by 900 is 99 percent. User-boundary SLI: 891 divided by 1000 is 89.1 percent. Same numerator, same success rule, same five minutes; ten points apart. Neither calculation is wrong. Only one of them describes what users experienced, and it is not the green one.',
        ],
      },
      {
        title: 'Decide the promise before the target',
        paragraphs: [
          'An SLO, a service level objective, is the target you set for an indicator over a window: say, 99 percent over 30 days. Before picking the number, pick the promise: is it about server requests or user operations? If it is about users, the measurement must be able to observe early failures, which usually means collecting evidence from the client side of the boundary, not only the server.',
          'Three bookkeeping rules keep the ratio honest. Real users retry, so several requests can belong to one attempt; document the grouping rule. State how timeouts, invalid requests, and missing telemetry are classified, because unstated cases silently leave the denominator. And remember the general law this lesson rests on: a ratio can never testify about events excluded from its denominator, no matter how green the dashboard renders it.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same 891 good results, different populations',
        alt: 'Server-only measurement is 891 of 900, or 99 percent; all user attempts are 891 of 1000, or 89.1 percent.',
        caption: 'Compare the denominators: the left column never saw the 100 early failures. Invented five-minute sample, no retries; good means the correct report within two seconds.',
        items: [
          { label: 'Server request boundary', detail: '891 / 900 = 99%; excludes 100 early failures' },
          { label: 'User attempt boundary', detail: '891 / 1000 = 89.1%; includes all stated attempts' },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Write the population top-down: 1000 user attempts, of which 100 fail before the server and 900 arrive. Assume no retries so each attempt is one request.',
        'Apply the success rule to the arrivals: 891 good, nine bad. Now compute the server ratio, 891 over 900, and the user ratio, 891 over 1000.',
        'Reconcile every attempt into exactly one group: 891 good, nine server-observed bad, 100 early failures. The three must sum back to 1000, or someone vanished.',
        'Introduce one retry: a user whose first request fails and second succeeds. Write the new question this creates: is the unit of counting a request or a user operation, and which grouping rule applies?',
      ],
      notice: 'Ten percentage points separated two honest calculations, and the entire gap lived in the denominator. The reconciliation step is what makes missing people visible.',
      troubleshooting: 'If your groups did not sum to 1000, the early failures leaked out of the population. They are attempts too; being unobserved by the server does not remove them from reality.',
    },
    recall: {
      prompt: 'An upload success SLI counts only requests that completed, and timeouts never enter the data. The ratio looks superb. What question must be answered before trusting it?',
      hint: 'Where did the unhappy attempts go?',
      answer: 'Whether timed-out attempts belong to the promised outcome, and if so, how they get observed and classified. An upload that hangs until the user gives up is a failure in every sense that matters, yet this SLI never counts it, so the denominator excludes precisely the worst experiences. The numerator and denominator must be rebuilt around the stated population, with timeouts explicitly classified, before the ratio means anything.',
    },
    quiz: {
      question: 'How can the server honestly report 99 percent while users experience 89.1 percent success?',
      options: ['Percentages cannot be compared when they share a numerator.', 'The server\'s denominator omits the 100 attempts that failed before reaching it.', 'The two-second success rule must have changed between the calculations.'],
      correctIndex: 1,
      explanation: 'Both ratios share the 891 good events and the same rule; only the counted population differs, 900 server requests versus 1000 user attempts. Measurement boundaries decide who exists in the data, which is why the population question comes before the percentage.',
    },
    takeaway: 'A success ratio is only as honest as its denominator. Name the population, the rule, the window, and the boundary before admiring the percentage.',
    sourceNote: 'The inherited SLO reference grounds indicator design. Ratios and the two-second rule are hypothetical, not recommended targets or measured reliability.',
  },
  {
    id: 'tech-038',
    outcome: 'Read latency percentiles as sorted positions, not averages, and know why you cannot average percentiles.',
    scene: 'An image-search release has many quick requests and one slow result hidden by an average.',
    sections: [
      {
        title: 'The dashboard says fast, one user says two seconds',
        paragraphs: [
          'After an image-search release, the dashboard reports a mean response time of 210 milliseconds. Comfortably fast. Then a user complains about a two-second wait, and the numbers get rechecked: both are right. The mean is 210, and someone really waited two seconds.',
          'A mean adds every duration and divides by the count, which lets eighteen quick requests absorb one terrible one. The complainer is real and the average is real; they just describe different things. Latency work therefore leans on a different summary, the percentile, and the trick is knowing exactly what a percentile does and does not say.',
        ],
      },
      {
        title: 'Line the finishers up',
        paragraphs: [
          'Think of race finishing times. Sort every finisher from fastest to slowest. The p95 is the time at the position where 95 percent of finishers have already crossed. It is a position in a sorted list, nothing more. It is not what every runner experienced, and it says nothing about how far behind the last runner straggled.',
          'Here is our race: 20 requests, eighteen at 100 milliseconds, one at 400, one at 2000. The sum is 4200, so the mean is 210, a value not one request actually had. For p95 with the simple nearest-rank method: 0.95 times 20 is 19, so take the 19th sorted value, 400 milliseconds. The maximum, position 20, is still 2000.',
        ],
      },
      {
        title: 'Three numbers, three different sentences',
        paragraphs: [
          'Each summary now says something precise. The mean, 210: total time spread evenly, useful for cost-like questions, misleading about experience. The p95, 400: nineteen of twenty requests finished within 400 milliseconds. The maximum, 2000: the worst experience in this window was two seconds.',
          'What no summary says: that the user complaint is wrong. The two-second request lives above the p95, in the tail the percentile deliberately does not describe. With only 20 observations, moving a single request shifts these positions substantially, which is why small-sample percentiles are estimates to reason with, not precision claims.',
        ],
      },
      {
        title: 'The averaging trap and the missing population',
        paragraphs: [
          'Now the fleet question: server A reports p95 of 120 milliseconds, server B reports 480. The tempting fleet p95, average them to 300, is wrong. Each percentile already threw away its distribution, and the servers may have handled wildly different request counts. A fleet percentile needs the underlying observations combined, or compatible histograms, counts in value ranges with known bucket boundaries, merged properly. Coarse buckets limit the precision of whatever you compute from them.',
          'Finally, interrogate the population feeding the chart. Fast failures can flatter latency: an error returned in five milliseconds drags the percentile down while making users miserable. State the window, state which requests are included, and ask where timeouts went. A beautiful latency curve over the wrong population is just decoration.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Three summaries of the same 20 requests',
        alt: 'Mean is 210 milliseconds, nearest-rank p95 is 400, and the maximum is 2000.',
        caption: 'Compare the three bars as alternative sentences about one sample: eighteen 100 ms, one 400 ms, one 2000 ms. They are not components to add; p95 uses nearest rank.',
        unit: 'milliseconds',
        items: [
          { label: 'Mean', detail: '4200 / 20', value: 210 },
          { label: 'p95', detail: '19th sorted observation', value: 400 },
          { label: 'Maximum', detail: '20th sorted observation', value: 2000 },
        ],
      },
    ],
    practice: {
      minutes: 7,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Write ten durations and sort them: eight at 50 ms, one at 100, one at 600. Sorting first is the habit that makes percentiles mechanical.',
        'Compute the mean: the sum is 1100, divided by ten gives 110 ms. Notice that nine of your ten requests were faster than this average.',
        'Compute nearest-rank p90: 0.90 times 10 is 9, so take the ninth sorted value: 100 ms. Write its sentence: nine of ten finished within 100 ms.',
        'Write the two warnings from the lesson in your own words: the 600 ms request lives above p90 and is invisible to it, and averaging this p90 with another server\'s p90 would combine nothing real.',
      ],
      notice: 'Mean 110, p90 100, maximum 600: three summaries, no two alike, each true. The sentence you attach to each number is what keeps them honest.',
      troubleshooting: 'If your p90 came out as 90, you took 90 percent of a value instead of selecting a sorted position. Percentiles are ranks in the lineup, never fractions of a measurement.',
    },
    recall: {
      prompt: 'Two servers publish p95 latencies: one handled ten requests, the other ten thousand. A dashboard proposes averaging the two numbers as the fleet p95. What is wrong?',
      hint: 'What information did each percentile already discard?',
      answer: 'A percentile is one position from a sorted list it no longer carries, so averaging two of them combines neither the lists nor their very different sizes; the tiny server would distort the result as much as the busy one. A real fleet p95 needs the underlying observations pooled, or compatible histogram data merged, and then the position recomputed over the combined population. Thresholds summarize distributions; they cannot be arithmetic inputs for one.',
    },
    quiz: {
      question: 'In the 20-request example the p95 is 400 ms. Which statement can still be true?',
      options: ['Every user waited exactly 400 ms.', 'The maximum must sit close to 400 ms.', 'One request took 2000 ms despite the 400 ms p95.'],
      correctIndex: 2,
      explanation: 'The p95 marks the 19th sorted position and says nothing about the tail above it, where the 2000 ms request lives. It is not a wait every user shares, and it places no ceiling on the maximum; describing the worst case is the maximum\'s own job.',
    },
    takeaway: 'A percentile is a position in a sorted lineup. Attach its sentence, respect the tail above it, and never average thresholds.',
    sourceNote: 'The inherited monitoring references ground latency-distribution interpretation. The tiny dataset and nearest-rank method are explicit exercise choices, not production precision claims.',
  },
  {
    id: 'tech-039',
    outcome: 'Pick a counter or a gauge to match the question, compute honest rates across resets, and keep labels bounded.',
    scene: 'An archive-indexing dashboard needs completion rate and current backlog without per-request metric labels.',
    sections: [
      {
        title: 'Two numbers that refuse to be one',
        paragraphs: [
          'An archive-indexing service needs a dashboard, and the first draft shows one big number: jobs. Jobs what? Completed ever? Waiting now? Processed per second? The team realizes the single number answers none of their actual questions, which are two: how fast are we completing work, and how much is piled up right now?',
          'Those two questions need two different instruments, and mixing them up produces dashboards that lie fluently. The vocabulary is small: two instrument types and one rule about labels.',
        ],
      },
      {
        title: 'The odometer and the fuel gauge',
        paragraphs: [
          'A counter is an odometer: it accumulates events and only climbs, until a reset such as a process restart sends it back toward zero. Total jobs completed is a counter. Its current reading answers how much has accumulated since the counting began, never how fast; an odometer showing 80000 says nothing about your current speed.',
          'A gauge is the fuel gauge: a current value that rises and falls. Jobs pending in the queue is a gauge, 24 now, 12 in a minute, maybe 40 after lunch. The gauge answers now questions. Asking a gauge for history, or a counter for the present moment, is reading the wrong dial.',
        ],
      },
      {
        title: 'Rates come from differences, carefully',
        paragraphs: [
          'Speed comes from the odometer the usual way: two readings over time. The completion counter reads 1000 at 12:00 and 1060 at 12:01, with no reset in between: 60 completions over 60 seconds, one per second on average. Note the gauge cannot substitute: queue depth falling from 24 to 12 does not mean twelve completions, because new jobs can arrive during the same minute. Departures minus arrivals is not departures.',
          'And watch the reset. If the process restarts and the counter later reads five, naive subtraction from 1060 yields a nonsense negative rate. Rate calculations need reset-aware handling, and even then, the events between the last pre-reset sample and the restart can be lost to the record.',
        ],
      },
      {
        title: 'Labels multiply series; choose dimensions, not identifiers',
        paragraphs: [
          'Metrics gain usefulness through labels: dimensions that split one measurement into separate time series, such as route and outcome. Three routes times two outcomes is at most six series per instance, each a tally you can compare and aggregate. That is labels working as designed.',
          'Now the mistake: add a request identifier as a label, and every single operation mints a brand-new series. Storage and query cost balloon, aggregates stop meaning anything, and the metric system becomes an accidental, badly indexed log. The rule of thumb: label values must come from a small, stable set. Individual operations belong in logs and traces, with appropriate access control, where identifiers are the point rather than a liability.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Choose the representation from the question',
        alt: 'Completion counters, queue gauges, and label choices answer different metric questions.',
        caption: 'Match each row to the question it answers: accumulated, current, comparable, or exploded. No counter reset during the measured minute; combinations imply possible series, not storage cost.',
        items: [
          { label: 'Completion counter', detail: '1000 to 1060 in 60 s: average 1 completion/s' },
          { label: 'Queue-depth gauge', detail: '24 to 12: currently 12 pending, not 12 completions' },
          { label: 'Bounded dimensions', detail: '3 routes x 2 outcomes: at most 6 combinations per instance' },
          { label: 'Request-ID dimension', detail: 'A new identifier can create a new series for each operation' },
        ],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Calculator'],
      steps: [
        'Write the odometer samples: 1000 at 12:00, 1060 at 12:01, no reset. Compute the rate: 60 completions over 60 seconds is one per second.',
        'Write the fuel-gauge samples: queue depth 24, then 12. Add the sentence that keeps it honest: the drop of 12 is departures minus arrivals, not a completion count.',
        'Add a restart: the counter later reads 5. Cross out the subtraction 5 minus 1060 and write reset-aware handling required; some events near the restart may be unrecorded.',
        'Design the labels: routes index, search, fetch, outcomes success, failure. Count the possible series, six per instance, and write why request IDs stay out: unbounded values mint unbounded series.',
      ],
      notice: 'Each question got its own instrument: a difference of counter readings for speed, a gauge for backlog, and six bounded series for comparison. Nothing needed an identifier.',
      troubleshooting: 'If you called the counter\'s raw value a rate, add the second timestamp; a single odometer reading has no speed in it. If the queue drop became completions, account for arrivals.',
    },
    recall: {
      prompt: 'A teammate proposes labeling a slow-search metric with the user\'s search phrase, to see which searches are slow. What two problems does that create, and where does the question belong?',
      hint: 'How many distinct phrases exist, and what might they contain?',
      answer: 'Phrases are unbounded, so every novel search mints a new time series until the metric system drowns in them, and phrases can contain private content that has no business in broadly visible dashboards. The aggregate metric should keep bounded dimensions, such as route and outcome. Investigating which searches are slow is an individual-operation question, answered in access-controlled logs or traces where the phrase can be recorded deliberately and minimally.',
    },
    quiz: {
      question: 'Which instrument directly answers how many archive jobs are waiting right now?',
      options: ['A queue-depth gauge.', 'The lifetime completion counter without timestamps.', 'A new metric series for every job identifier.'],
      correctIndex: 0,
      explanation: 'Waiting right now is a current value that rises and falls: gauge territory. The lifetime counter accumulates history and cannot see the present backlog, and per-job series are an unbounded explosion that answers individual questions the wrong way.',
    },
    takeaway: 'Counters accumulate, gauges show now, rates are differences over time with reset care, and labels stay small and stable.',
    sourceNote: 'The inherited monitoring reference grounds metric and label semantics. Counts are illustrative, not product performance claims.',
  },
  {
    id: 'tech-040',
    outcome: 'Pair outside-in result checks with inside evidence, and always check the age of a green light before trusting it.',
    scene: 'A released report service returns an empty result while an older internal health card remains green.',
    sections: [
      {
        title: 'Green dashboard, empty report',
        paragraphs: [
          'It is 08:15, just after a release. A monitoring check opens a test report and receives an empty page. On the wall, the internal dashboard still shows the service proudly up. Two instruments, two verdicts, and an on-call engineer deciding which one to believe.',
          'The resolution is that they are answering different questions, from different sides of the service, and one of them is also, quietly, out of date. Reading monitoring well means knowing both tricks, and release mornings are when both get tested.',
        ],
      },
      {
        title: 'Phoning the shop versus reading the rota',
        paragraphs: [
          'Outside-in monitoring, often called black-box, observes what a user would: a synthetic check, a deliberately constructed operation with a known input and a known expected answer, phones the shop and listens to what actually comes back. Inside monitoring, white-box, reads internal state: process alive, queue depth, dependency errors. That is reading the staff rota, which says someone should be at the counter.',
          'Both are necessary because each is blind somewhere. A process can run beautifully while its route from the outside is broken, and an outside check that fails tells you users are hurting without saying which internal part did it. Relying on either alone is how teams end up arguing with their own dashboards during an outage.',
        ],
      },
      {
        title: 'Success codes are not correct answers',
        paragraphs: [
          'Look closer at the failing check. The test fixture should return ten rows. At 08:15 the checker receives HTTP 200, a success code, wrapped around zero rows. If the check only asked did the request succeed, this disaster would be green. Because it asserted the expected content, ten rows, it caught what matters: the service is answering politely and wrongly.',
          'That is the outside check\'s whole job: detect the user-facing symptom on the tested route. Finding the cause, storage, logic, or configuration, is the inside evidence\'s job: dependency errors, queue states, recent deploy markers.',
        ],
      },
      {
        title: 'How old is that green light?',
        paragraphs: [
          'Now the second trick: the proudly green up card. Check its timestamp: collected at 08:10, five minutes ago, on a system that expects fresh samples every minute. That card is not evidence the service is up; it is evidence it was up at 08:10, and perhaps evidence the monitoring pipeline itself, the machinery that collects and displays observations, has stalled. A stale green is a photo of yesterday\'s open sign taped to the window, and release mornings are exactly when pipelines break.',
          'So every observation carries two values: the reading, and its age against the expected cadence. And even a fresh up says nothing about ten rows. Close the loop with honest scope: a passing synthetic check certifies its own route, inputs, identity, and schedule, nothing broader. Healthy is a conclusion assembled from fresh, complementary evidence, never a single lamp.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A report path and a monitoring path',
        alt: 'An external checker visits the report app through a gateway; storage and internal metrics follow separate paths.',
        caption: 'Follow the checker\'s route along the top, then note the stale collector at the bottom. Hypothetical 08:15 observations: zero of ten rows, and an up sample from 08:10. Cause unknown.',
        items: [
          { label: 'External checker', detail: '08:15: expected 10 rows; received 0', x: 16, y: 25, shape: 'screen' },
          { label: 'Gateway', detail: 'Part of the tested client route', x: 49, y: 25, shape: 'box' },
          { label: 'Report app', detail: 'Returns HTTP 200 with incorrect fixture content', x: 82, y: 25, shape: 'box' },
          { label: 'Storage', detail: 'Dependency behavior still needs evidence', x: 82, y: 78, shape: 'box' },
          { label: 'Metrics collector', detail: 'Last up sample: 08:10; expected every minute', x: 49, y: 78, shape: 'box' },
        ],
        arrows: [{ from: 0, to: 1, label: 'request' }, { from: 1, to: 2 }, { from: 2, to: 3, label: 'data read' }, { from: 2, to: 4, label: 'internal signal' }],
      },
    ],
    practice: {
      minutes: 6,
      needs: ['Paper', 'Pencil'],
      steps: [
        'Write the outside evidence as a pair: expected, 10 rows; received at 08:15, HTTP 200 with 0 rows. Note that the success code and the correct answer are separate assertions.',
        'Write the inside evidence with its age: up, collected 08:10, expected every minute, so five samples late at 08:15. Label it stale, not false.',
        'Draft the honest status note in three lines: user-facing symptom confirmed on the tested route; internal liveness unknown because evidence is stale; cause not yet identified.',
        'List the two questions to pursue next, on paper only: what do fresh dependency signals say, and why did collection stop at 08:10? No real service gets probed for this exercise.',
      ],
      notice: 'Your status note never says down and never says healthy. It says what each instrument actually measured, when, and what remains unknown, which is the report an on-call engineer can act on.',
      troubleshooting: 'If your note treated 200 as healthy or green as current, reread the two timestamps and the row count: content and freshness are the assertions that did the real work.',
    },
    recall: {
      prompt: 'A synthetic download succeeds every five minutes from the head-office network, yet remote users report failures. What does the passing check actually certify, and what next?',
      hint: 'A checker tests one route, one identity, one schedule.',
      answer: 'It certifies that the download works from that office, over that route, with the checker\'s permissions, at those times, and nothing more. The remote users travel different paths with different networks and possibly different access. The move is to compare the failing population\'s route against the tested one, add checks or evidence from where the users actually are, and consult internal signals for the shared components. Extending one passing sample to everyone is how outages hide behind green.',
    },
    quiz: {
      question: 'Which pair gives the most trustworthy picture of the report service?',
      options: ['Two process-up charts without timestamps.', 'An external expected-content check plus fresh internal dependency evidence.', 'A successful status code with no content validation.'],
      correctIndex: 1,
      explanation: 'The pair covers both boundaries: the outside check catches wrong answers users would see, and fresh internal evidence explains and localizes them. Untimed liveness charts may be stale photographs, and a bare 200 cheerfully blesses an empty report.',
    },
    takeaway: 'Check answers from the outside, explain them from the inside, and date-stamp every green light before believing it.',
    sourceNote: 'The inherited references ground complementary monitoring. Report fixtures, paths, and timestamps are original synthetic examples.',
  },
]