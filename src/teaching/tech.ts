import type { LessonGuide } from './types'

// Original teaching and schematic data. Source links are inherited by lesson ID.
export const techGuides: LessonGuide[] = [
  {
    id: 'tech-001',
    outcome: 'Explain why a strong wireless signal can coexist with a wait to transmit.',
    scene: 'An office video call shares a radio channel with a laptop uploading a backup.',
    sections: [
      {
        title: 'The call has a signal but must wait',
        paragraphs: [
          'Your video call pauses while the wireless signal indicator remains unchanged. Across the room, another laptop is uploading a backup through the same access point. An access point, or AP, connects wireless devices to a network. Both laptops need time on its radio channel. The signal indicator describes received radio strength, not how soon a device will be allowed to send. A nearby AP can be easy to hear while the shared channel is occupied by someone else.',
        ],
      },
      {
        title: 'Listening and counting idle slots',
        paragraphs: [
          'A protocol is a set of message formats and rules that communicating devices follow. In ordinary contention-based Wi-Fi access, a station listens before sending a frame, the unit delivered across the wireless link. If the channel is busy, it defers. A randomized backoff counter spreads competing attempts across idle time slots. After the required idle interval, eligible idle slots reduce the counter; another transmission freezes it. The station resumes its remaining countdown after the channel becomes eligible again. The AP also needs transmission opportunities for traffic it sends.',
        ],
      },
      {
        title: 'Follow one interrupted countdown',
        paragraphs: [
          'Suppose the call laptop has four backoff slots remaining. Two eligible idle slots pass, leaving two. The backup laptop then occupies the channel for an illustrative three milliseconds. The call counter stays at two throughout that busy interval; elapsed wall-clock time does not count as idle slots. Later it resumes and reaches zero. This explains a wait without any weaker signal. It does not establish that every pause is contention: radio retries, upstream queues, and call processing also add delay. Modern scheduled wireless exchanges add mechanisms beyond this deliberately limited example.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two laptops, one shared channel',
        alt: 'Call and backup laptops share an AP connected to a router.',
        caption: 'The call waits beside the active backup. Timing and slot counts are illustrative; distances are schematic.',
        items: [
          { label: 'Call laptop', detail: 'Backoff: 4 slots, then 2; freezes while busy', x: 18, y: 25, shape: 'screen' },
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
        'Draw call-counter and channel-activity rows. Start the counter at 4 and leave space for successive events.',
        'Mark two eligible idle slots in the activity row. Under them, reduce the call counter to 3 and then 2.',
        'Insert a busy interval labeled backup, 3 ms. Keep the counter at 2 across the entire interval.',
        'After a labeled required idle wait, add two eligible slots. Finish the countdown and circle the first transmission opportunity.',
      ],
      notice: 'Your drawing contains a period when time passes but the call makes no progress toward its transmission opportunity.',
      troubleshooting: 'If the counter reaches zero during the backup, separate elapsed time from eligible idle slots and redo that interval.',
    },
    recall: {
      prompt: 'A training-room tablet moves closer to its AP but still pauses when several classmates upload files. What distinction would you explain?',
      hint: 'Compare receiving a signal with obtaining permission to occupy the channel.',
      answer: 'Moving closer can improve radio reception without reducing competing transmissions. The tablet can still defer and freeze its backoff while others use the channel. Existing airtime and retry observations would help distinguish those mechanisms.',
    },
    quiz: {
      question: 'A backoff counter has two slots left when another station starts transmitting. What happens in this illustrated access method?',
      options: ['It continues counting elapsed milliseconds.', 'It returns to its original value solely because the channel became busy.', 'It pauses until eligible idle slots resume.'],
      correctIndex: 2,
      explanation: 'The remaining counter freezes during busy time. It is neither a wall-clock timer nor automatically a fresh random draw whenever another transmission begins.',
    },
    takeaway: 'Signal strength describes reception; contention determines when shared airtime becomes available.',
    sourceNote: 'RFC 8325 grounds this contention example. Scheduled multi-user exchanges are omitted; the scenario is not a network diagnosis.',
  },
  {
    id: 'tech-002',
    outcome: 'Calculate payload throughput without confusing it with the wireless adapter link rate.',
    scene: 'An editor downloads a training-video asset and compares its transfer with an adapter display.',
    sections: [
      {
        title: 'Two displays measure different boundaries',
        paragraphs: [
          'A training-video download delivers 60 megabytes in four seconds, while the wireless adapter displays 600 megabits per second. Neither display must be broken. A bit is one binary digit; a byte contains eight bits. In this example, mega means one million. The adapter rate concerns physical radio transmission under its current conditions. Application throughput measures useful file data delivered over elapsed time, including intervals when no useful data reaches the editor. The download therefore needs a calculation at its own boundary.',
        ],
      },
      {
        title: 'Account for the time around payload',
        paragraphs: [
          'The 60 megabytes contain 480 megabits. Dividing by four seconds gives 120 megabits per second of application throughput. Payload means the useful data being carried; headers carry information needed to deliver and interpret it. Wireless channel access, headers, acknowledgments confirming link delivery, and repeated transmissions all consume time. Other stations share airtime, and the remote server or another network link can also limit delivery. A link-rate snapshot does not account for all those costs or promise that its value remains constant throughout the download.',
        ],
      },
      {
        title: 'Compare one transmission at two rates',
        paragraphs: [
          'To isolate rate alone, imagine transmitting 1500 data bytes, or 12000 bits. At 600 million bits per second, those bits require 20 microseconds; at 150 million, they require 80 microseconds. A microsecond is one millionth of a second. This calculation deliberately excludes every header, radio preamble, acknowledgment, and wait, so it is not a complete frame duration. It shows why a slower active transmission occupies more time for the same data. An associated but idle device does not spend this payload airtime merely by appearing in a client list.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Time to serialize the same 12000 bits',
        alt: 'At 600 megabits per second, 12000 bits take 20 microseconds; at 150, they take 80 microseconds.',
        caption: 'These calculated, illustrative times cover only the chosen data bits. They exclude wireless overhead and waiting, so neither bar predicts a whole download.',
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
        'Write a fictional download result: 30 decimal megabytes delivered in three seconds. Keep it separate from a 300 Mbit/s adapter display.',
        'Multiply 30 by eight to convert megabytes into megabits. Divide that result by three seconds.',
        'Label your result application throughput. List two elapsed-time costs that the adapter display does not include.',
        'Change only the download time to six seconds and recalculate. Write what changed in the measurement, without assuming which component caused it.',
      ],
      notice: 'The payload rates are 80 Mbit/s and 40 Mbit/s. The unchanged adapter display cannot explain their difference by itself.',
      troubleshooting: 'If you obtain 10 Mbit/s for the first case, you divided megabytes by seconds without converting bytes into bits.',
    },
    recall: {
      prompt: 'A photo backup has the same displayed radio rate on two evenings but takes twice as long on one. What evidence is missing?',
      hint: 'A transmission rate is only one contributor to elapsed transfer time.',
      answer: 'You need comparable file sizes and elapsed times, then evidence about contention, retries, and the remaining path or server. The display alone does not reveal which of those costs changed. It also need not represent the rate throughout either transfer.',
    },
    quiz: {
      question: 'A 20 MB decimal download finishes in two seconds. Which rate describes the delivered application payload?',
      options: ['80 Mbit/s', '10 Mbit/s', '160 Mbit/s'],
      correctIndex: 0,
      explanation: 'Twenty megabytes contain 160 megabits, delivered over two seconds. Ten is the megabytes-per-second value; 160 omits division by elapsed time.',
    },
    takeaway: 'Convert units and name the measured boundary before comparing a download with a radio rate.',
    sourceNote: 'The inherited wireless and latency references explain overhead and elapsed delay. All file sizes and rates here are hypothetical, with decimal units stated explicitly.',
  },
  {
    id: 'tech-003',
    outcome: 'Trace a priority marking into wireless access treatment without promising strict ordering.',
    scene: 'A support softphone and a background sync compete during a quality-of-service design review.',
    sections: [
      {
        title: 'A voice label needs a mapping',
        paragraphs: [
          'A support agent hears broken audio while background synchronization continues. A design note says the voice traffic is marked, but that does not yet tell you how the wireless radio treats it. Internet Protocol, or IP, carries addressed packets between networks. Its Differentiated Services Code Point, or DSCP, is a field used to select traffic treatment. It is a marking interpreted by policy, not a reservation of bandwidth. A wireless link uses its own priority fields and access queues, so the boundary between those systems matters.',
        ],
      },
      {
        title: 'What the wireless category changes',
        paragraphs: [
          'Wi-Fi user priority is a numeric classification that maps into an access category. Enhanced Distributed Channel Access, or EDCA, gives those categories different medium-access parameters. These include the required idle wait and the range from which a random backoff count is drawn. Favorable parameters increase opportunities for timely access over repeated contention attempts. They do not let a frame interrupt a transmission already occupying the channel, and they do not create a separate frequency. If two stations choose conflicting opportunities, further contention can still occur.',
        ],
      },
      {
        title: 'Read the proposed policy end to end',
        paragraphs: [
          'Consider a paper policy mapping DSCP 46, the Expedited Forwarding codepoint, to user priority 6 and then the voice category. The diagram follows that stated policy; it is not a claim about a particular AP default. Even with the mapping intact, a bulk frame can sometimes transmit before a voice frame because eligibility and random draws differ. Conversely, an incorrect mapping can remove the intended advantage entirely. Review classification, boundary mapping, and channel demand separately. Marking every application as voice leaves competing traffic inside the same favored category rather than manufacturing extra capacity.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A specified voice classification path',
        alt: 'DSCP 46 maps to Wi-Fi user priority 6 and then to the voice access category.',
        caption: 'Follow the numeric mapping across the boundary. This illustrative policy is not a vendor default.',
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
        'Copy the three boxes in the diagram. Draw a second path labeled background sync, user priority 0, best effort.',
        'Write shared radio channel after both paths. Add a note that neither category interrupts a frame already on air.',
        'In a second sketch, change only the voice mapping to user priority 0. Mark where the intended distinction disappears.',
        'Write a review question asking for the documented mapping and existing channel-demand evidence, rather than proposing a configuration change.',
      ],
      notice: 'The second sketch retains the IP marking but loses the selected wireless voice treatment at the mapping boundary.',
      troubleshooting: 'If your sketch gives voice a private channel, merge the final radio medium and keep only the access parameters different.',
    },
    recall: {
      prompt: 'A meeting-room audio stream receives favorable wireless treatment but stalls at an upstream congested link. Why is this possible?',
      hint: 'Ask where the inspected policy begins and ends.',
      answer: 'Wireless access treatment changes contention on that link. The upstream link has its own queues, capacity, and policy. Correct local mapping cannot establish available capacity or preserve treatment across every later network boundary.',
    },
    quiz: {
      question: 'One best-effort frame transmits before a voice frame. Does that single event prove the voice mapping is wrong?',
      options: ['Yes, voice treatment requires strict frame ordering.', 'No, favorable contention parameters do not guarantee every individual ordering.', 'No, DSCP is never used in wireless classification.'],
      correctIndex: 1,
      explanation: 'EDCA favors opportunities rather than guaranteeing order. One frame ordering cannot verify or disprove the documented mapping.',
    },
    takeaway: 'Priority must survive the mapping boundary, and even correct mapping provides preference rather than reserved capacity.',
    sourceNote: 'RFC 8325 describes DSCP, user-priority mapping, and wireless access categories. The review exercise asserts no product configuration or end-to-end service guarantee.',
  },
  {
    id: 'tech-004',
    outcome: 'Distinguish radio retransmissions from missing data visible to an end-to-end transport.',
    scene: 'A log-file upload is compared with radio retry statistics and a wired observation point.',
    sections: [
      {
        title: 'Two attempts can produce one delivery',
        paragraphs: [
          'A laptop uploads a small log file through an access point. Wireless statistics show a retry, but a wired observation farther along the path shows only one delivered packet. These records can agree. A frame is the delivery unit of the local wireless link. An IP packet is the addressed unit carried toward a network destination. The link can repeat a frame carrying a packet before that packet is forwarded onto the wired network. The observer after the AP does not see every earlier radio attempt.',
        ],
      },
      {
        title: 'Local recovery has a narrower boundary',
        paragraphs: [
          'For the acknowledged unicast exchange illustrated here, the radio sender expects a link acknowledgment confirming reception. If it does not obtain the expected acknowledgment, it can retry according to the link rules. A missing acknowledgment does not by itself distinguish a lost data frame from a lost acknowledgment. Link duplicate handling prevents a repeated successful frame from becoming repeated payload delivery in the ordinary exchange. Transmission Control Protocol, or TCP, operates between endpoint systems and separately tracks numbered bytes, acknowledging receipt and recovering missing data when necessary.',
        ],
      },
      {
        title: 'Locate the observation point',
        paragraphs: [
          'In this synthetic record, the first radio attempt receives no acknowledgment. A local retry succeeds, and the AP forwards the packet at three milliseconds after the first attempt. The wired observer then sees one copy. TCP can receive its bytes without needing its own retransmission, although the local repair added delay. If all local attempts fail, an end-to-end recovery mechanism can become involved later. Therefore, a radio retry count is not an application loss percentage. Align the interval, traffic direction, and observation layer before comparing records; neither counter alone identifies the cause of an upload pause.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'What the wired observer misses',
        alt: 'Two laptop radio attempts produce one packet beyond the AP, visible to a wired observer.',
        caption: 'The observer follows local repair. Attempt counts and the three-millisecond forwarding time are synthetic, not predicted retry behavior.',
        items: [
          { label: 'Upload laptop', detail: 'Attempt 1: no ACK; attempt 2: ACK received', x: 15, y: 30, shape: 'screen' },
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
        'Draw laptop, AP, wired observer, and server. Mark radio attempt 1 unacknowledged and attempt 2 acknowledged.',
        'Draw one packet leaving the AP at 3 ms. Count attempts and forwarded copies separately.',
        'Mark server bytes received, no TCP retransmission needed. Label the added wireless delay.',
        'Make both attempts fail in an alternative. Remove the forwarded packet and mark end-to-end recovery possible, not observed.',
      ],
      notice: 'Your successful-repair case has two local attempts and one onward delivery. The failed-repair case has a different transport question.',
      troubleshooting: 'If both columns always match, move the observer after the AP and distinguish transmission attempts from forwarded packets.',
    },
    recall: {
      prompt: 'A wireless label printer reports retries while an application reports successful jobs. What can both reports still leave unexplained?',
      hint: 'Successful repair changes whether data arrives, but also when it arrives.',
      answer: 'Retries can recover frames while consuming airtime and increasing delay. Compare matching directions and intervals before attributing slow printing to them. Job success counts alone do not describe waiting.',
    },
    quiz: {
      question: 'Which observation is compatible with successful local wireless repair?',
      options: ['One TCP retransmission must appear for each radio retry.', 'A wired observer must record every failed radio attempt.', 'The application receives the data later without TCP retransmitting it.'],
      correctIndex: 2,
      explanation: 'Link recovery can finish before TCP retransmits. Extra attempts consume time; downstream wired observers miss radio activity.',
    },
    takeaway: 'Count attempts and deliveries at their own layers; repaired loss can remain visible as delay.',
    sourceNote: 'RFC 3366 and RFC 9293 ground recovery at different layers. This example covers acknowledged unicast only.',
  },
  {
    id: 'tech-005',
    outcome: 'Locate the last proven connectivity stage without equating association with complete access.',
    scene: 'A newly enrolled office tablet shows connected but cannot open the training portal.',
    sections: [
      {
        title: 'Connected to which part?',
        paragraphs: [
          'A new tablet displays a connected wireless icon, yet the training portal will not open. Wi-Fi association establishes a link-layer relationship with an access point, or AP. Link layer means the rules for communication across the local network link. Depending on the security arrangement, additional authentication, authorization, or key establishment is needed before ordinary data is allowed through. The icon therefore cannot establish all later stages. Start by saying precisely what the evidence supports: the tablet associated with an AP, not that the portal is reachable.',
        ],
      },
      {
        title: 'Addressing, routing, and names do different work',
        paragraphs: [
          'Internet Protocol, or IP, uses addresses to carry packets between systems. The tablet needs a usable address and routing information; a router forwards traffic toward other networks. Dynamic Host Configuration Protocol, or DHCP, can provide IPv4 configuration, although it is not the only way to configure addresses. Domain Name System, or DNS, translates a requested name into records such as a server address. Finally, the portal must accept the connection and return the intended application result. Success at one of these boundaries does not perform the work of the next.',
        ],
      },
      {
        title: 'Stop the conclusion at the evidence',
        paragraphs: [
          'Suppose an approved onboarding record shows association and wireless authorization completed at 10:00, but no usable leased IPv4 configuration at 10:01. In this IPv4-only example, the next unresolved stage is address configuration. Replacing the portal URL with another name does not repair that missing configuration. Conversely, a valid address would move the question forward without proving DNS success. Keep unknown stages marked unknown, rather than filling them with assumptions. Real systems can use IPv6, static configuration, or captive access flows, so this sequence is a reasoning map, not a universal connection script.',
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
        'Make five rows: association, wireless authorization, IP configuration and routing, name resolution, application result.',
        'Copy the fictional evidence: associated yes, wireless authorized yes, usable IPv4 configuration no. Mark the remaining rows unknown.',
        'Write one next question about the address-allocation exchange, using the existing onboarding record rather than issuing network probes.',
        'Change configuration to valid. Leave later rows unknown and name evidence that would establish name resolution.',
      ],
      notice: 'A changed earlier result narrows the next question, but does not silently turn later unknown stages into successful ones.',
      troubleshooting: 'If every row becomes green after association, ask which message or observed result actually demonstrates each separate stage.',
    },
    recall: {
      prompt: 'A wired workstation resolves the portal name but receives an application error page. Which boundary has progressed beyond the tablet example?',
      hint: 'An actual page requires more than a successful name lookup.',
      answer: 'The workstation obtained a name answer and reached an application responder. The error page moves evidence beyond address configuration, but does not establish the required operation or identify its failing dependency.',
    },
    quiz: {
      question: 'In the IPv4-only tablet example, association succeeds but usable address configuration is absent. What is the next unresolved boundary?',
      options: ['Address configuration, before claiming name resolution or portal reachability.', 'The portal password, because association proves addressing.', 'The DNS record, because a connected icon proves a usable route.'],
      correctIndex: 0,
      explanation: 'The record stops before usable IP configuration. Password and DNS explanations skip that unproven prerequisite.',
    },
    takeaway: 'Record the last proven connectivity stage, then investigate the next boundary instead of blaming the whole network.',
    sourceNote: 'NIST SP 800-153 and RFC 2131 ground these boundaries. The schematic excludes IPv6 and captive-access alternatives.',
  },
  {
    id: 'tech-006',
    outcome: 'Locate an incomplete initial DHCPv4 exchange by the role of each message.',
    scene: 'A media-room printer needs its first leased address from a server beyond its local network.',
    sections: [
      {
        title: 'The printer starts without an address',
        paragraphs: [
          'A new media-room printer needs an address before it can exchange ordinary IPv4 traffic. IPv4 is a version of Internet Protocol, the addressed packet system used between networked devices. Dynamic Host Configuration Protocol version 4, or DHCPv4, lets a client obtain a time-limited address allocation and related configuration from a server. The printer is the client here. A lease is permission to use that configuration for a stated period. Receiving a suggested address is not yet the same as completing its allocation.',
        ],
      },
      {
        title: 'Four messages with different commitments',
        paragraphs: [
          'In a common first allocation, DHCPDISCOVER asks available servers for configuration. DHCPOFFER proposes an address and other parameters. The client selects an offer and sends DHCPREQUEST identifying its choice. DHCPACK acknowledges the allocation. Those names describe message roles, not four interchangeable success events. Initial broadcasts reach the local network rather than crossing routers automatically. A DHCP relay forwards the relevant exchange to a remote server and returns replies to the client network. The relay is a forwarding participant, not necessarily the authority allocating addresses.',
        ],
      },
      {
        title: 'Read the unfinished exchange',
        paragraphs: [
          'Imagine the server offers the documentation-only address 192.0.2.40. The printer sends a Request, but the sample ends without an ACK. The evidence establishes discovery, an offer, and a selection attempt, not completed configuration. The missing observation could reflect failed delivery or an incomplete recording; it does not prove which participant failed. Even an ACK is followed by client processing, including checking whether the address is already in use. Returning clients and renewals can begin from other states, so absence of Discover is not itself an error in every DHCP record.',
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
        'Label slips Discover, Offer 192.0.2.40, Request 192.0.2.40, and ACK. Arrange them in the initial allocation order.',
        'Write client beside Discover and Request, and server beside Offer and ACK. Draw the relay between participants.',
        'Cover the ACK. Write the strongest supported conclusion and one delivery or observation gap still possible.',
        'Uncover it and add client configuration checks afterward. Do not equate message reception with a working application.',
      ],
      notice: 'An offer and a selection remain distinct from acknowledged allocation and subsequent usable configuration.',
      troubleshooting: 'If the relay appears to own the lease, relabel it as a forwarding role and keep allocation at the server.',
    },
    recall: {
      prompt: 'An established laptop renews its address using Request and ACK without Discover. Is that necessarily broken?',
      hint: 'Identify the client state before demanding the initial sequence.',
      answer: 'No. Renewal starts with an existing lease and uses a different path from first allocation. Interpret messages against client state instead of demanding Discover before every extension.',
    },
    quiz: {
      question: 'The printer received an Offer but no later messages were recorded. What is established?',
      options: ['The printer installed a valid lease.', 'A configuration was proposed; selection and acknowledgment remain unproven.', 'The relay necessarily rejected the address.'],
      correctIndex: 1,
      explanation: 'Offer proves a proposal reached the observation point. It does not demonstrate selection, acknowledgment, or locate a later failure.',
    },
    takeaway: 'Read DHCP messages as state transitions, not interchangeable indications that addressing is finished.',
    sourceNote: 'RFC 2131 defines these allocation and relay roles. This first-allocation schematic omits retransmission detail and does not prescribe device commands.',
  },
  {
    id: 'tech-007',
    outcome: 'Use a lease timeline to explain why old clients work during an allocation outage.',
    scene: 'An edit workstation keeps working while a newly arrived laptop cannot obtain an address.',
    sections: [
      {
        title: 'Existing traffic can outlive an allocation outage',
        paragraphs: [
          'At 14:00, an edit workstation can still reach shared storage, but a new laptop cannot obtain an address. This is compatible with an unavailable Dynamic Host Configuration Protocol server. DHCP supplies address configuration through leases, which authorize use for a specified duration. It does not authorize every individual application packet. The workstation can continue sending ordinary traffic with a valid existing lease even while attempts to extend it fail. Its successful file access is therefore not a complete test of current address-allocation service.',
        ],
      },
      {
        title: 'Renewing and rebinding happen before expiry',
        paragraphs: [
          'For a finite DHCPv4 lease, the renewal time is called T1. The client then tries to extend the lease with the server that issued it, normally using a directly addressed request. If extension remains unsuccessful, the later rebinding time, T2, permits a broadcast request seeking help from an available server. Broadcast addresses the local network; configured relays can forward it onward. These are chances to extend permission, not new expiration points. Without an extension, the client must stop using the leased address when its lease finally expires.',
        ],
      },
      {
        title: 'Place the defaults on an eight-hour lease',
        paragraphs: [
          'Assume a lease starts at 09:00, lasts eight hours, and uses the default fractions: T1 at one half and T2 at seven eighths of its duration. Renewal begins at 13:00; rebinding begins at 16:00; expiration arrives at 17:00. At 14:00, the workstation still has three hours of permission despite its unsuccessful renewal. The newcomer has no such permission to use. Servers can supply different timer values, and a successful extension changes the timeline. Use the actual lease parameters before drawing conclusions about a real client.',
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
          { label: '13:00: T1', detail: '4 hours elapsed; try issuing server' },
          { label: '16:00: T2', detail: '7 hours elapsed; seek another server' },
          { label: '17:00: expiration', detail: '8 hours elapsed; stop using the leased address' },
        ],
      },
    ],
    practice: {
      minutes: 5,
      needs: ['Paper', 'Clock or calculator'],
      steps: [
        'Write a new hypothetical lease: starts 10:00, lasts four hours, and uses default T1 and T2 fractions.',
        'Calculate half and seven eighths of four hours. Place renewal, rebinding, and expiration on your line.',
        'Mark 13:00 and assume no extension succeeds. Write whether the existing client still has address permission.',
        'Add a new client arriving at 13:00 with no lease. Explain why the two clients can behave differently.',
      ],
      notice: 'Renewal is 12:00, rebinding 13:30, and expiration 14:00. The old client still has permission at 13:00.',
      troubleshooting: 'If rebinding falls after expiry, calculate seven eighths of the total duration from the original start, not from T1.',
    },
    recall: {
      prompt: 'A lobby display is still online after its renewal request fails. What additional value determines when its existing permission ends?',
      hint: 'Failed extension is not immediate expiration.',
      answer: 'Its lease expiration, derived from the current lease and any successful extension, determines that limit. A failed renewal does not immediately remove an unexpired lease, but continued operation cannot be assumed after expiration.',
    },
    quiz: {
      question: 'At 16:30 in the eight-hour example, no extension has succeeded. Which statement fits?',
      options: ['The lease expired when T1 was reached.', 'The client must contact only the original server forever.', 'The client is rebinding while its existing lease remains valid until 17:00.'],
      correctIndex: 2,
      explanation: 'T2 expands renewal opportunities before expiry. Neither T1 nor an unanswered renewal automatically ends the original permission.',
    },
    takeaway: 'A working leased client demonstrates remaining permission, not necessarily a currently available DHCP server.',
    sourceNote: 'RFC 2131 specifies renewal, rebinding, and default timer fractions. The times are worked examples; explicit server parameters take precedence.',
  },
  {
    id: 'tech-008',
    outcome: 'Separate a recursive DNS answer from the authority publishing it and the server receiving traffic.',
    scene: 'Two editors see different addresses for a public video-review site after a planned change.',
    sections: [
      {
        title: 'The answering server may hold a copy',
        paragraphs: [
          'Two editors ask for the address of review.example and receive different results. Before calling the site inconsistent, identify who answered each query. Domain Name System, or DNS, is a distributed naming system that returns records associated with names. An A record holds an IPv4 address. A recursive resolver accepts a client question and obtains an answer or uses an eligible stored copy. That stored copy is a cache entry. The resolver serving a laptop is not necessarily the organization maintaining the requested name.',
        ],
      },
      {
        title: 'Authority and delegation',
        paragraphs: [
          'An authoritative DNS server publishes records for a zone, an administratively managed portion of the DNS name tree. On a cache miss, a resolver can follow referrals through the naming hierarchy until it finds an appropriate authority. The client usually does not perform those individual steps itself. Some resolvers forward questions to another resolver instead. None of these DNS roles serves the video-review page merely by answering its name. The application connection is a later exchange with a destination selected from the answer.',
        ],
      },
      {
        title: 'Compare like questions at like times',
        paragraphs: [
          'In a fictional change, the authority now publishes 192.0.2.71 while one resolver still has an eligible older answer, 192.0.2.70. Both addresses are documentation examples. A client using the older cache can receive the older address without the authority publishing two simultaneous answers. Record the exact name, record type, resolver, time, and remaining cache lifetime before comparing results. Different configured DNS views can also return different data deliberately. Finally, receiving 192.0.2.71 establishes a naming result, not that the application at that address accepts connections or returns correct content.',
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
        'Draw two client rows for the same review.example A query at 11:00. Assign them resolvers R1 and R2.',
        'Give R1 an eligible cached 192.0.2.70 answer. Give R2 a cache miss and an authoritative 192.0.2.71 answer.',
        'Record the answer each client receives, keeping the authoritative record unchanged between the two rows.',
        'Add a separate application-connection column and mark it untested. List name, type, resolver, and time as comparison fields.',
      ],
      notice: 'Different resolver results can occur without different current authoritative records. Neither row establishes application reachability.',
      troubleshooting: 'If the authority changes in your drawing for every query, keep its record fixed and vary only the resolver cache state.',
    },
    recall: {
      prompt: 'A phone and laptop use different DNS resolvers and disagree about a training hostname. What should the comparison preserve?',
      hint: 'A hostname alone does not specify the whole question.',
      answer: 'Preserve the exact name, record type, observation time, and resolver identity. Compare cache state and configured views before claiming conflicting authoritative data. A difference still needs explanation, but resolver answers alone do not locate it.',
    },
    quiz: {
      question: 'A resolver answers an editor without querying the authority again. Which explanation is sufficient?',
      options: ['It has an eligible cached answer.', 'It must also host the review application.', 'The client has proven the destination is reachable.'],
      correctIndex: 0,
      explanation: 'A resolver can reuse cached information. Hosting the application and reaching it are separate roles and outcomes.',
    },
    takeaway: 'Identify the resolver, authority, and application destination separately when following a named connection.',
    sourceNote: 'RFC 1035 grounds the resolver, authority, and record distinctions. The diagram omits hierarchy traversal and uses no real workplace names or addresses.',
  },
  {
    id: 'tech-009',
    outcome: 'Calculate a cached DNS answer expiry without treating a TTL edit as an instant traffic switch.',
    scene: 'A web release changes a service address while a resolver still holds the earlier answer.',
    sections: [
      {
        title: 'The cache has its own remaining lifetime',
        paragraphs: [
          'A release plan changes the address behind a website name and expects every visitor to move immediately. Domain Name System, or DNS, supplies records that map names to information such as server addresses. Resolvers can store answers so each visit does not require a fresh authoritative lookup. Time to live, or TTL, is the record lifetime used for normal caching, expressed in seconds. It is not a measurement of network speed. Once an answer is cached, its remaining lifetime decreases as time passes.',
        ],
      },
      {
        title: 'An edit does not notify every existing cache',
        paragraphs: [
          'Suppose a resolver caches an answer at 09:00 with TTL 600 seconds. Its normal freshness ends at 09:10. At 09:02, the authority changes the address and lowers the TTL for new answers to 60 seconds. The resolver already holding the old record is not sent a universal invalidation message. That cached record still has 480 seconds remaining at 09:02. A resolver fetching a new answer can receive the new address and lifetime while the first resolver continues using its still-eligible old copy.',
        ],
      },
      {
        title: 'Expiry still does not close a connection',
        paragraphs: [
          'At 09:05, the old copy has 300 seconds remaining. At 09:10 it normally needs replacement before fresh reuse, but existing application connections are a separate matter. An established connection to the old address does not have to ask DNS again merely because a record expired. Applications can also retain their own answers, and documented resolver policies can handle stale data during failures. A release must consider those boundaries and prepare changes in advance. Lowering TTL immediately before a switch cannot retroactively shorten a lifetime already handed to another cache.',
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
        'Write a cached answer received at 12:00 with TTL 300 seconds. Calculate its normal expiry time.',
        'At 12:01, mark an authoritative edit that gives new answers TTL 30 seconds. Do not reset the old countdown.',
        'At 12:03, calculate the remaining lifetime of the original copy and label which address it still contains.',
        'Draw an application connection opened at 12:02. Keep its lifetime separate from the DNS timeline rather than closing it automatically.',
      ],
      notice: 'The old answer normally expires at 12:05 and has 120 seconds remaining at 12:03, despite the new 30-second TTL.',
      troubleshooting: 'If you obtain 12:01:30 for the original expiry, you applied a new answer lifetime to a copy fetched earlier.',
    },
    recall: {
      prompt: 'A resolver already fetched a record with a one-hour TTL. The owner lowers it to ten seconds. What changes immediately?',
      hint: 'Separate future answers from previously stored copies.',
      answer: 'Later answers can carry the new lifetime. Existing copies receive no automatic retroactive invalidation; their remaining lifetimes, application caches, and established connections still affect the traffic move.',
    },
    quiz: {
      question: 'Why can traffic still reach the old address after its DNS record has changed?',
      options: ['DNS TTL counts router hops.', 'A valid cached answer or an existing connection can retain the old destination.', 'Existing caches immediately adopt the new TTL for their old answers.'],
      correctIndex: 1,
      explanation: 'Cached answers and connections can preserve earlier destinations. DNS TTL measures seconds; edits do not retroactively replace cached lifetimes.',
    },
    takeaway: 'A DNS TTL governs normal answer freshness, not a global invalidation event or a connection deadline.',
    sourceNote: 'RFC 1035 specifies record TTL behavior. The worked timeline models normal freshness, not every application cache or stale-answer extension.',
  },
  {
    id: 'tech-010',
    outcome: 'Distinguish cached DNS absence from an unfinished lookup when a newly created name still fails.',
    scene: 'A training-lab hostname is created after an early lookup already returned a negative answer.',
    sections: [
      {
        title: 'An earlier absence can be remembered',
        paragraphs: [
          'Someone tests lab.example before the training site exists. The name is created thirty seconds later, but that person still cannot resolve it. Domain Name System, or DNS, can cache negative answers as well as addresses. A negative answer is information about absence, not merely silence. A resolver that stored such an answer can reuse it for its permitted lifetime. Creating the missing record at the authority does not automatically erase that earlier information from every resolver that asked too soon.',
        ],
      },
      {
        title: 'Name absent and record type absent',
        paragraphs: [
          'NXDOMAIN means the queried name does not exist. A no-data response, often called NODATA, means the name exists but lacks the requested record type. For example, an existing host can have an A record containing an IPv4 address but no AAAA record containing an IPv6 address. NODATA is not itself a separate DNS response code. It commonly accompanies a successful response code with no requested answer. A timeout instead means the caller did not obtain a response within its waiting limit; SERVFAIL reports a resolution failure, not the same authoritative absence.',
        ],
      },
      {
        title: 'Work out a negative lifetime',
        paragraphs: [
          'Cacheable negative responses include a Start of Authority, or SOA, record. Its time to live, or TTL, is a caching lifetime in seconds. Negative lifetime uses the smaller of that TTL and the SOA MINIMUM field, subject to resolver limits. Suppose those values are 300 and 120 seconds. An answer stored at 10:00 can normally remain usable until 10:02 even if lab.example is created at 10:00:30. This explains a temporary difference without proving a failed deployment. Record the name, requested type, response code, and observation time before choosing a cause.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four different lookup observations',
        alt: 'NXDOMAIN, NODATA, timeout, and SERVFAIL support different conclusions.',
        caption: 'These are invented observations. Only the first two describe DNS absence; lookup failures must not be relabeled as absent records.',
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
        'Copy the four observations from the comparison. Add a column headed what this does not establish.',
        'For the timeout, write name existence unknown. For NODATA, write other record types can still exist.',
        'Draw the 10:00 negative answer with SOA TTL 300 and MINIMUM 120. Calculate its normal expiry.',
        'Add record creation at 10:00:30. Write why the original resolver can disagree with a new lookup during the remaining interval.',
      ],
      notice: 'The old negative answer can remain for another 90 seconds after creation in the simplified timeline.',
      troubleshooting: 'If you label every failure NXDOMAIN, first separate explicit DNS replies from a timer expiring without a reply.',
    },
    recall: {
      prompt: 'A server name resolves to IPv4 but an IPv6-address query returns no data. Should the name be reported as nonexistent?',
      hint: 'A name and one of its record types are different objects.',
      answer: 'No. The IPv4 result demonstrates an existing name in that view. A no-data answer for AAAA can mean only that the requested IPv6 record is absent. Preserve the query type and avoid converting that result into NXDOMAIN.',
    },
    quiz: {
      question: 'A lookup times out while another returns NXDOMAIN. Which report preserves the distinction?',
      options: ['Both names are proven absent.', 'Both are proven to exist without addresses.', 'One lookup is incomplete; the other explicitly reports name absence.'],
      correctIndex: 2,
      explanation: 'Silence within a waiting limit is not an authoritative negative answer. The two results require different follow-up evidence.',
    },
    takeaway: 'Negative DNS answers carry specific information and lifetimes; a timeout does not carry the same meaning.',
    sourceNote: 'RFC 2308 defines negative caching and SOA-derived lifetimes. The fictional observations omit resolver-specific caps and later failure-caching extensions.',
  },
  {
    id: 'tech-011',
    outcome: 'Separate transfer capacity from round-trip waiting in a small interactive operation.',
    scene: 'A collaborative editing cursor feels delayed despite a faster internet service tier.',
    sections: [
      {
        title: 'A tiny message can spend its time waiting',
        paragraphs: [
          'An editor upgrades a connection, but moving a shared cursor still feels delayed. Bandwidth describes the rate at which a link can carry data. Latency describes delay between specified events. A cursor update contains little data, yet the application can wait for a remote response before showing confirmation. The elapsed time includes sending bits, their travel, queues awaiting service, and application work. Increasing bandwidth can shorten transmission time without shortening the physical route or making the remote application finish its work sooner.',
        ],
      },
      {
        title: 'Build a budget with explicit assumptions',
        paragraphs: [
          'Use a hypothetical 1000-byte request. With eight bits per byte, it contains 8000 bits. At ten million bits per second, putting those bits onto the link takes 0.8 milliseconds. Assume another 60 milliseconds for round-trip travel and waiting, plus ten milliseconds of server work. Ignore response transmission and other overhead for this calculation. The total is 70.8 milliseconds. At one hundred million bits per second, request transmission becomes 0.08 milliseconds and the total becomes 70.08 milliseconds, not seven milliseconds.',
        ],
      },
      {
        title: 'Check the wait that controls progress',
        paragraphs: [
          'Round-trip time measures an outward-and-return journey at defined observation points. Dividing it by two does not establish a one-way delay: the directions can take different routes or encounter different queues. Also ask whether requests are sequential. If a second request cannot start until the first response supplies an identifier, both waits lie on the operation path. A bulk download benchmark cannot reveal that dependency. A useful investigation separates setup, network waiting, and application work, then compares equivalent operations. More capacity helps the part constrained by transmission, not every part of an interaction.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Where the illustrative 70.8 ms goes',
        alt: 'Request transmission takes 0.8 milliseconds, round-trip travel and waiting 60, and server work 10.',
        caption: 'These are additive components of the stated toy budget, not measured browser phases. Response transmission and other overhead are excluded.',
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
        'Write a 2000-byte request, an 80 ms travel-and-wait budget, and 5 ms of server work. Ignore other costs.',
        'Convert the request to bits and calculate transmission time at 20 Mbit/s. Add the three contributions.',
        'Repeat at 40 Mbit/s without changing travel or processing. Compare the totals rather than only the transmission times.',
        'Underline the largest unchanged contribution and write one question about the observation points used to measure it.',
      ],
      notice: 'The totals are 85.8 ms and 85.4 ms. Doubling capacity halves serialization time, not the entire response delay.',
      troubleshooting: 'If your total halves, keep the 80 ms and 5 ms terms fixed and change only the bits-per-second calculation.',
    },
    recall: {
      prompt: 'An approval screen makes three dependent small requests. Large downloads are fast. Why can the screen still feel slow?',
      hint: 'Dependent requests cannot all spend their waiting time in parallel.',
      answer: 'Each required response can delay the start of the next request. Small payloads consume little serialization time, while repeated round trips and processing accumulate. Inspect that sequence rather than treating bulk throughput as the response-time explanation.',
    },
    quiz: {
      question: 'Only request serialization improves in the 70.8 ms example. What limits the benefit?',
      options: ['The unchanged 60 ms travel-and-wait and 10 ms processing contributions.', 'The assumption that every one-way delay equals half the total.', 'A rule that small messages cannot benefit from higher capacity.'],
      correctIndex: 0,
      explanation: 'The small transmission term shrinks while other terms remain. Capacity can help, but its effect is bounded by the contribution it changes.',
    },
    takeaway: 'A faster link reduces serialization time; interactive latency also depends on round trips, queues, and processing.',
    sourceNote: 'The inherited latency and distributed-systems references ground the distinction. Numbers are a simplified additive example, not a measured service baseline.',
  },
  {
    id: 'tech-012',
    outcome: 'Write a loss result with its direction, deadline, and population instead of treating it as a property of the whole network.',
    scene: 'A monitoring handoff compares two summaries of the same synthetic receiver log.',
    sections: [
      {
        title: 'The deadline changes the count',
        paragraphs: [
          'Two monitoring notes claim six percent loss and two percent loss for the same fictional packet batch. They used different arrival deadlines. A packet is an addressed unit of network data, and a one-way loss measurement asks whether selected packets sent at one endpoint appear at another within a defined waiting limit. The measurement needs a population, direction, interval, packet characteristics, and observation points. Without those details, the percentage cannot tell you whether the notes disagree or are answering different questions.',
        ],
      },
      {
        title: 'Reconstruct the hundred-packet sample',
        paragraphs: [
          'Assume aligned clocks and a supplied synthetic log of 100 equal-sized packets traveling from a training client to a receiver. Ninety-four arrive within 100 milliseconds of their respective send times. Four more arrive after 100 but within 500 milliseconds. Two are still unobserved at 500 milliseconds. With the 100-millisecond limit, six of 100 count as lost, giving six percent. With the 500-millisecond limit, only two of 100 meet that loss rule. The four late arrivals changed classification; the physical observations did not change.',
        ],
      },
      {
        title: 'An absent reply combines several possibilities',
        paragraphs: [
          'A missing echo reply is different evidence from an observed one-way data arrival. The request could be lost, the return path could fail, or a device could filter or limit its replies. An application can also use different packet sizes, paths, or treatment. Therefore, an unanswered probe does not locate a failed router or establish the same application loss percentage. Use existing authorized records rather than generating traffic for this exercise. Keep the sample interval visible, since a short batch does not establish a permanent property of a link or every user operation.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'One sample, three arrival groups',
        alt: 'Of 100 packets, 94 arrive by 100 milliseconds, four later by 500, and two remain unobserved.',
        caption: 'Synthetic counts add to 100. A 100 ms deadline combines the last two groups as loss; a 500 ms deadline counts only the last.',
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
        'Create a paper batch of 20 equal-sized packets: 18 arrive by 100 ms, one at 200 ms, and one remains unobserved at 500 ms.',
        'Calculate loss using a 100 ms deadline, then using a 500 ms deadline. Keep the original arrival notes unchanged.',
        'Label both results client-to-receiver, synthetic batch, and the chosen deadline. Add aligned clocks as an assumption.',
        'Write why neither result identifies an individual failed router or proves the loss rate of another application.',
      ],
      notice: 'The two percentages are ten percent and five percent. They describe different deadlines applied to identical evidence.',
      troubleshooting: 'If both percentages match, inspect whether the 200 ms arrival changes classification when the waiting limit changes.',
    },
    recall: {
      prompt: 'A colleague reports missing echo replies but a file transfer completes. What distinction prevents a false contradiction?',
      hint: 'Probe replies and application delivery have different observation and recovery rules.',
      answer: 'Echo absence includes reply policy and both directions of travel. File delivery can use recovery and different traffic treatment. Preserve endpoints, interval, packet properties, and application evidence before comparing the two results.',
    },
    quiz: {
      question: 'Four packets arrive after the short deadline but before the long one. What changed between the loss summaries?',
      options: ['The number originally sent.', 'The classification rule for those four arrivals.', 'The location of a proven broken device.'],
      correctIndex: 1,
      explanation: 'The waiting limit changed which observations count as loss. It neither changes the sent population nor identifies where delay or loss occurred.',
    },
    takeaway: 'Loss percentages need a population and waiting rule; missing replies alone do not locate a fault.',
    sourceNote: 'RFC 7680 defines bounded one-way loss measurement. Counts and clock alignment are exercise assumptions, not observations from a network scan.',
  },
  {
    id: 'tech-013',
    outcome: 'Calculate how excess offered traffic becomes queueing delay without creating extra link capacity.',
    scene: 'A footage upload keeps transferring while a shared-call connection becomes less responsive.',
    sections: [
      {
        title: 'Bytes move while waiting grows',
        paragraphs: [
          'A footage upload is making steady progress, but a small call update behind it waits. The constrained outgoing link is a bottleneck: it cannot serve traffic as quickly as traffic is arriving. A queue holds packets until that link can transmit them. A buffer is the memory available for this waiting data. Buffering can absorb a short burst instead of dropping it immediately, but storing more work does not increase the rate at which the link sends bits. Throughput can remain high while waiting grows.',
        ],
      },
      {
        title: 'Build the backlog from a rate difference',
        paragraphs: [
          'For a simplified calculation, let data enter an initially empty router queue at 12 megabits per second while its outgoing service rate is eight megabits per second. Assume constant rates, sufficient buffer space, and no loss during a half-second burst. The difference is four megabits each second. After half a second, two megabits are waiting. A new small packet placed behind that backlog waits about two divided by eight seconds, or 250 milliseconds, before its own transmission starts. This is queueing delay, not radio travel time.',
        ],
      },
      {
        title: 'What a larger buffer actually changes',
        paragraphs: [
          'In this first-in, first-out example, increasing available storage allows a larger backlog but leaves the eight-megabit service rate unchanged. If new arrivals stop, the two-megabit backlog takes a quarter of a second to drain. Real senders respond to congestion feedback, and routers can use queue-management or scheduling methods rather than this simple policy. The arithmetic demonstrates one mechanism, not a diagnosis from utilization alone. Compare equivalent idle and busy periods using existing evidence, then ask whether queues, processing, or wireless contention account for the added delay.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A two-megabit queue at the bottleneck',
        alt: 'An upload leaves two megabits queued ahead of a small call packet at the router.',
        caption: 'Illustrative first-in, first-out queue after 0.5 seconds. Other scheduling policies can change waiting.',
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
        'Draw an empty queue with 12 Mbit/s arriving and 8 Mbit/s leaving. Assume enough storage and constant rates.',
        'Calculate the backlog after 0.25 seconds and after 0.5 seconds. Label both results in megabits, not megabytes.',
        'Divide each backlog by the service rate to find the waiting time for a new packet placed behind it.',
        'Double the drawn buffer capacity without changing either rate. Explain why the calculated backlog and waiting times do not shrink.',
      ],
      notice: 'Backlogs are one and two megabits; corresponding waits are 125 and 250 milliseconds under the stated assumptions.',
      troubleshooting: 'If more buffer lowers your wait, distinguish storage capacity from the outgoing bits-per-second service rate.',
    },
    recall: {
      prompt: 'A report service accepts jobs faster than its worker completes them. Would a larger pending-job list make individual jobs finish sooner?',
      hint: 'Storage and service rate are different quantities in either system.',
      answer: 'No, not by itself. More storage can hold additional pending work, but an unchanged worker still serves at the same rate. Completion time depends on the backlog, scheduling, and service time, not simply whether new jobs can be accepted.',
    },
    quiz: {
      question: 'Why can the upload retain high throughput while the call experiences longer delay?',
      options: ['High throughput proves every queue is empty.', 'A larger buffer creates proportional transmission capacity.', 'The link keeps serving data while new packets wait behind accumulated work.'],
      correctIndex: 2,
      explanation: 'Byte movement and waiting time measure different properties. A busy bottleneck can keep transmitting continuously while its queue grows.',
    },
    takeaway: 'Queues absorb excess arrivals as waiting; extra buffer memory does not remove the service-rate limit.',
    sourceNote: 'The inherited references ground queueing reasoning. Constant rates and first-in, first-out service are illustrative, not measured.',
  },
  {
    id: 'tech-014',
    outcome: 'Find the smallest packet-size limit on a route and account for tunnel overhead.',
    scene: 'A remote worker can open small pages but a larger transfer stalls across a constrained path.',
    sections: [
      {
        title: 'A packet must fit every link',
        paragraphs: [
          'A remote worker can exchange small messages but struggles with a larger transfer. One possible mechanism is a packet-size limit, not insufficient total bandwidth. Internet Protocol, or IP, carries addressed packets between systems. Maximum Transmission Unit, or MTU, is the largest IP packet a link can carry without fragmentation, including the IP header. A header contains delivery information in addition to the data being carried. Path MTU is constrained by the smallest link MTU on the selected route, not an average of the links.',
        ],
      },
      {
        title: 'Feedback lets the source adjust',
        paragraphs: [
          'Consider an IPv6 route whose first link allows 1500 bytes and whose next link allows 1400. A 1460-byte IP packet fits the first link but not the second. IPv6 routers do not split such packets into fragments. The router discards the oversized packet and sends an Internet Control Message Protocol version 6 message called Packet Too Big, reporting the smaller limit. The source can use that feedback to reduce packet size. If the feedback is blocked or lost, small exchanges can work while larger packets repeatedly fail.',
        ],
      },
      {
        title: 'Tunnels consume part of the same budget',
        paragraphs: [
          'A tunnel carries an inner packet inside an outer packet with additional headers. For a separate encapsulated transmission over the same 1400-byte outer path limit, assume exactly 60 bytes of added headers. The inner-packet budget becomes 1340 bytes. An inner packet of 1380 bytes would produce 1440 outer bytes and exceed that limit by 40. Those numbers describe the stated wrapper only; real overhead depends on the tunnel. This failure pattern is a clue, not proof. A paper budget or existing approved size evidence is safer than guessing a new shared-interface MTU.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A smaller second link controls the route',
        alt: 'The client-to-router limit is 1500 bytes; the next link toward the server permits 1400.',
        caption: 'Schematic IPv6 route. A 1460-byte packet fails the second limit; 1300 bytes fits both hypothetical limits.',
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
        'Copy the two link limits, 1500 and 1400 bytes. Underline the smaller one as the route constraint.',
        'Try paper packets of 1300 and 1460 bytes. Mark the first link where each exceeds a limit, if any.',
        'For the tunnel case, subtract 60 bytes from the 1400-byte outer budget. Test a 1380-byte inner packet.',
        'Write the missing evidence needed before attributing a real large-transfer stall to packet size. Do not change interface settings.',
      ],
      notice: 'The plain 1300-byte packet fits; 1460 does not. The tunnel permits 1340 inner bytes under its stated overhead.',
      troubleshooting: 'If you average the two MTUs or compare inner size directly with outer size, redraw the boundary around the full carried packet.',
    },
    recall: {
      prompt: 'A tunnel adds 80 bytes while its outer path permits 1500. Can a 1450-byte inner packet fit unchanged?',
      hint: 'Compare the complete outer packet with the outer limit.',
      answer: 'No. It becomes 1530 bytes, exceeding the outer limit by 30. The inner budget is 1420 bytes under that exact overhead assumption. This calculation alone does not choose an operational configuration.',
    },
    quiz: {
      question: 'A packet fits the sender interface but exceeds a later IPv6 link MTU. Which behavior is expected?',
      options: ['The router discards it and reports Packet Too Big.', 'The router always fragments it into smaller IPv6 packets.', 'The larger sender MTU overrides the later link limit.'],
      correctIndex: 0,
      explanation: 'IPv6 routers do not perform packet fragmentation. Source adjustment needs the path constraint; a local interface size cannot override it.',
    },
    takeaway: 'Check the full packet against the smallest path limit, including any outer tunnel headers.',
    sourceNote: 'RFC 8201 grounds IPv6 path-size feedback. Link limits and tunnel overhead here are hypothetical, not recommended settings or vendor-specific behavior.',
  },
  {
    id: 'tech-015',
    outcome: 'Calculate TCP data space while keeping advertised MSS distinct from per-packet options.',
    scene: 'A release-artifact transfer prompts a review of packet budgets rather than an interface change.',
    sections: [
      {
        title: 'Name what each size includes',
        paragraphs: [
          'A release-artifact download carries file bytes inside several layers of delivery information. Internet Protocol, or IP, supplies addressing. Transmission Control Protocol, or TCP, carries an ordered stream of bytes between endpoints. Its segments contain a TCP header followed by data, and are carried inside IP packets. Maximum Transmission Unit, or MTU, limits the containing IP packet on a link. Maximum Segment Size, or MSS, advertises a TCP receive data limit, excluding the fixed IP and TCP headers. These quantities describe different boundaries, despite both being expressed in bytes.',
        ],
      },
      {
        title: 'Subtract fixed headers first',
        paragraphs: [
          'Assume IPv4, a 1500-byte effective MTU, a 20-byte fixed IP header, and a 20-byte fixed TCP header. With no options, 1500 minus 20 minus 20 leaves 1460 data bytes. That is the familiar MSS calculation under these assumptions. MSS is exchanged during TCP connection establishment; each endpoint advertises its own receive limit. A received MSS does not prove every link along the path permits a correspondingly sized packet. The sender must also respect its path-size information and any other constraints on an actual transmission.',
        ],
      },
      {
        title: 'Options reduce actual data, not that fixed-header rule',
        paragraphs: [
          'Now add 12 bytes of TCP options, extra protocol fields carried with this particular packet. The TCP header becomes 32 bytes, leaving 1500 minus 20 minus 32, or 1448 data bytes. The advertised MSS calculation uses fixed headers; the sender accounts for options when constructing segments. Do not relabel the smaller per-packet payload as a required new MSS advertisement. IPv6 headers, extension headers, or a tunnel create different budgets. Writing the assumptions next to the arithmetic prevents a useful example from turning into a universal setting that silently omits overhead.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two packets within the same 1500-byte limit',
        alt: 'Without options, 1460 TCP data bytes fit; twelve option bytes reduce actual data to 1448.',
        caption: 'Illustrative IPv4 budgets. Each complete sum is 1500 bytes; the option case changes actual segment construction, not the fixed-header MSS rule.',
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
        'Draw a 1500-byte IP packet budget. Reserve 20 bytes for IPv4 and 20 for the fixed TCP header.',
        'Fill the remaining space with data and verify all components add back to 1500.',
        'Add 12 TCP option bytes without enlarging the packet. Recalculate actual data space and label it separately from the advertised MSS.',
        'Repeat using a 40-byte IPv6 base header, no extension headers, and the same TCP options. Keep the 1500-byte limit.',
      ],
      notice: 'The IPv4 option case leaves 1448 data bytes. The stated IPv6 option case leaves 1428.',
      troubleshooting: 'If data space stays 1460 after adding options, include those bytes in the containing packet before subtracting.',
    },
    recall: {
      prompt: 'A peer advertises MSS 1460, but your actual path permits smaller packets. Can you always send 1460 data bytes?',
      hint: 'A receive advertisement and a path constraint answer different questions.',
      answer: 'No. The sender must account for the smaller path limit and actual headers as well as the peer receive limit. The advertisement is not a measurement of every intervening link.',
    },
    quiz: {
      question: 'With a 1500-byte IPv4 budget, 20 IP header bytes, and 32 TCP header bytes, how much TCP data fits?',
      options: ['1460 bytes', '1448 bytes', '1480 bytes'],
      correctIndex: 1,
      explanation: 'Subtract both actual headers: 1500 minus 20 minus 32 equals 1448. The other answers omit options or the TCP header.',
    },
    takeaway: 'MSS excludes fixed headers; actual segment data must also leave room for options and path constraints.',
    sourceNote: 'RFC 9293 section 3.7.1 was spot-checked for MSS and option handling. Budgets are illustrative and do not prescribe network configuration.',
  },
  {
    id: 'tech-016',
    outcome: 'Reassemble complete application messages across arbitrary TCP read boundaries.',
    scene: 'A small log collector misreads two status records because its test always supplied whole messages.',
    sections: [
      {
        title: 'One read is not one record',
        paragraphs: [
          'A log collector expects a status record each time it reads from a network connection. It works in a simple test, then fails when a record arrives in pieces. Transmission Control Protocol, or TCP, provides an ordered byte stream between endpoints. It does not preserve the boundaries of application write calls as matching read calls. A receiver can obtain part of one record, several records together, or another grouping. The original byte order remains meaningful, but the size of each read is not a message boundary.',
        ],
      },
      {
        title: 'The application defines framing',
        paragraphs: [
          'An application protocol is the agreed format and interpretation of its messages. Framing is the rule that identifies where each message starts and ends. In a toy protocol, one binary byte gives the number of following data bytes. Print that length as a number for this exercise. The record RUN becomes 3 R U N; OK becomes 2 O K. Each chosen letter occupies one byte. Together they contain seven bytes. The length prefix is part of the application stream, not a boundary supplied by TCP.',
        ],
      },
      {
        title: 'Retain incomplete input and continue parsing',
        paragraphs: [
          'Suppose the first read contains only 3 R. The parser has the length but only one of three data bytes, so it retains the partial record. The next read contains U N 2 O K. It finishes RUN, then reads the next prefix and emits OK. If all seven bytes arrive in one read, it must still emit two records. A parser also needs a documented maximum length and a response to connection closure mid-record, rather than treating missing bytes as a complete message. Tests should vary grouping without changing the byte sequence.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Seven bytes, two reads, two records',
        alt: 'Reads 3 R and U N 2 O K reconstruct RUN and OK.',
        caption: 'Toy framing: numbers represent one-byte lengths; printed spaces separate bytes and are not transmitted.',
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
        'Write the toy stream 2 O K 1 X, with each printed number representing one length byte.',
        'Draw a first read around 2 O. Record the expected data length, available data, and missing byte count.',
        'Draw the next read around K 1 X. Append it and identify each complete record in order.',
        'Repeat with all five bytes in one read, then with closure after 2 O. Label the latter incomplete rather than emitting O.',
      ],
      notice: 'Both complete groupings produce OK and X. Closure after the first partial read does not produce a valid record.',
      troubleshooting: 'If a read emits a partial word, track expected message length separately from the number of bytes returned by that read.',
    },
    recall: {
      prompt: 'A chat client receives three messages in one read after a quiet period. Which assumption should its parser avoid?',
      hint: 'Buffering changes grouping, not the application framing rule.',
      answer: 'Do not equate one read with one message. Parse complete frames using the protocol rules and retain unfinished trailing bytes for later input.',
    },
    quiz: {
      question: 'The first read contains a length of three followed by one data byte. What should this parser do?',
      options: ['Emit the one byte as a complete record.', 'Reject the stream solely because the read was short.', 'Retain the partial data and wait for the remaining two bytes or closure.'],
      correctIndex: 2,
      explanation: 'A short read is allowed by TCP. Completeness comes from the application length prefix, while connection closure requires separate incomplete-message handling.',
    },
    takeaway: 'TCP preserves byte order; the application must preserve its own message boundaries across any read grouping.',
    sourceNote: 'RFC 9293 section 3.7 was spot-checked for stream boundaries. The length-prefixed protocol is an original exercise.',
  },
  {
    id: 'tech-017',
    outcome: 'Explain why acknowledged TCP bytes do not prove an application operation was committed.',
    scene: 'An expense-submission client receives transport acknowledgments before the service writes its record.',
    sections: [
      {
        title: 'The acknowledgment belongs to the transport',
        paragraphs: [
          'An expense client sends a submission and sees acknowledged network data. The user still needs to know whether the expense was saved. Transmission Control Protocol, or TCP, delivers an ordered stream of bytes between endpoint systems. Its acknowledgment, abbreviated ACK, reports received sequence positions in that stream. A sequence number identifies a byte position, not a database transaction. The receiving TCP implementation can acknowledge bytes before the application has read, checked, or stored them. That is successful transport reception, not a promise about the business operation.',
        ],
      },
      {
        title: 'Read the number without adding a stronger guarantee',
        paragraphs: [
          'Suppose a synthetic request occupies 120 bytes numbered 1000 through 1119 on an established connection. An ACK value of 1120 indicates the next expected byte and cumulatively acknowledges earlier received bytes. It does not mean 1120 expenses were processed. The application still needs to parse the request, check permission, validate its contents, and perform its storage operation. A commit means the database has accepted the transaction under its documented durability contract. TCP cannot supply that contract because it does not interpret the expense request or participate in the database decision.',
        ],
      },
      {
        title: 'A crash can fall between the boundaries',
        paragraphs: [
          'In the illustrated successful case, reception and ACK occur at five milliseconds, parsing at eight, commit at thirty, and an application response at thirty-five. Now consider a crash at twenty milliseconds instead. The same early ACK could already exist even though the commit never occurred. Conversely, a commit could succeed and its later response be lost. The caller needs an application-level success contract and a supported way to inspect uncertain outcomes. Repeating a state-changing request without that contract can create duplicate work; reliable byte delivery alone does not establish exactly-once processing.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Receipt precedes this example commit',
        alt: 'TCP ACK at 5 milliseconds precedes parsing at 8, commit at 30, and application response at 35.',
        caption: 'Hypothetical scheduling. A crash at 20 ms interrupts processing before commit, despite the earlier ACK.',
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
        'Draw the four timeline events with their given times. Label TCP receipt and database commit as different boundaries.',
        'Insert a crash at 20 ms. Cross out events that have not happened, leaving the already-sent acknowledgment intact.',
        'Make a second copy where commit succeeds but the application response is lost. Mark the caller outcome uncertain.',
        'Write one required application contract: a result identifier and supported read-only outcome check for the fictional submission.',
      ],
      notice: 'The same transport acknowledgment is compatible with different application outcomes. The caller needs evidence above TCP.',
      troubleshooting: 'If the ACK forces your database box to succeed, remove that implication and ask which component actually issued each signal.',
    },
    recall: {
      prompt: 'A print server acknowledges all uploaded bytes, then its print worker stops. What has the sender established?',
      hint: 'Reception and the requested physical result have different completion points.',
      answer: 'The bytes reached the peer TCP boundary. That does not establish parsing, job acceptance, or printed output. The print service must define and report those later states through its own operation contract.',
    },
    quiz: {
      question: 'What does ACK 1120 establish for the numbered request in this lesson?',
      options: ['TCP has received bytes through 1119 in sequence.', 'The expense database committed request 1120.', 'The application can no longer fail before storing the request.'],
      correctIndex: 0,
      explanation: 'The cumulative acknowledgment describes byte reception. Database identifiers, validation, and commit are application-level meanings not carried by that ACK.',
    },
    takeaway: 'Use TCP acknowledgments for transport evidence and application contracts for processing or durable completion.',
    sourceNote: 'RFC 9293 section 3.4 was spot-checked for ACK meaning. Synthetic timings do not establish database guarantees.',
  },
  {
    id: 'tech-018',
    outcome: 'Distinguish a receiver buffer limit from a network congestion limit when analyzing TCP sending.',
    scene: 'A telemetry collector drains its receive buffer slowly during a busy log-processing period.',
    sections: [
      {
        title: 'The receiver can be the limiting participant',
        paragraphs: [
          'A telemetry upload slows while its receiving application is busy processing earlier logs. Transmission Control Protocol, or TCP, keeps received bytes in a buffer until the application consumes them. Flow control prevents a sender from overwhelming the receiver. The advertised receive window describes the byte range the receiver is currently prepared to accept. If the application drains data slowly, less space becomes available for later data. This is a receiver-capacity constraint, not proof that the intervening network is congested or has lost packets.',
        ],
      },
      {
        title: 'The network imposes another constraint',
        paragraphs: [
          'Congestion control limits traffic according to feedback about resources along the path. A sender maintains a congestion window that constrains outstanding data, meaning bytes sent but not yet acknowledged. The receiver window and congestion window serve different purposes, and the sender must respect both. Increasing receive space does not remove a tight network constraint. Likewise, a quiet path does not create room inside an application that has stopped consuming data. Sending is also influenced by pacing and recovery rules, so a window budget is not a promise of instantaneous transmission.',
        ],
      },
      {
        title: 'Equal budgets can have different causes',
        paragraphs: [
          'Use a simplified new-data budget with no special recovery restrictions. If receive window is 4000 bytes, congestion window is 10000, and 3000 bytes are outstanding, the smaller 4000-byte limit leaves 1000 additional bytes. In another snapshot, receive window is 12000 and congestion window is 4000 with the same outstanding data. The additional budget is again 1000 bytes, but the constraining side is different. A single throughput number cannot distinguish these cases. Match receiver consumption evidence with the advertised window, and path feedback with congestion behavior, before attributing the slowdown.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Same allowance, different constraint',
        alt: 'Two window snapshots each permit 1000 additional bytes, one limited by receive window and one by congestion window.',
        caption: 'Illustrative new-data accounting: smaller window minus outstanding bytes. Real pacing, window positions, and recovery can add constraints.',
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
        'Write receive window 8000 bytes, congestion window 5000, and outstanding data 2000 for a simplified snapshot.',
        'Choose the smaller window and subtract outstanding data. Label both the additional allowance and the constraining window.',
        'Raise only receive window to 12000. Recalculate and explain why the allowance has not changed.',
        'Return to the first snapshot and swap the two window sizes. Recalculate, then name the different evidence needed to explain the limit.',
      ],
      notice: 'All three budgets allow 3000 additional bytes, but swapping the windows changes which constraint is active.',
      troubleshooting: 'If you add the windows together, replace that sum with the smaller applicable limit before accounting for outstanding data.',
    },
    recall: {
      prompt: 'A storage receiver advertises little space while path congestion evidence is quiet. Where should the next bounded question focus?',
      hint: 'Who consumes bytes after TCP receives them?',
      answer: 'Ask whether the receiving application is draining its buffer and what limits that consumption. A small receive window points to receiver capacity; it does not by itself demonstrate a busy link. Other constraints still need their own evidence.',
    },
    quiz: {
      question: 'Receive window is large but congestion window is small. Will enlarging the receive buffer necessarily increase this sending budget?',
      options: ['Yes, the two windows always add together.', 'No, the smaller congestion constraint still applies.', 'Yes, receive-window changes automatically clear network congestion.'],
      correctIndex: 1,
      explanation: 'The sender must respect both limits. More receiver space does not remove the active path-related constraint or its feedback.',
    },
    takeaway: 'Flow control protects receiver capacity; congestion control limits pressure on the path. Diagnose the active boundary.',
    sourceNote: 'RFC 9293 sections 3.8.2 and 3.8.6 were spot-checked. The arithmetic is simplified window accounting, not a complete TCP implementation model.',
  },
  {
    id: 'tech-019',
    outcome: 'Choose handling for late, missing, or repeated datagrams from the application requirement.',
    scene: 'A live training-audio stream and an archival recording need different late-data policies.',
    sections: [
      {
        title: 'A datagram has a boundary, not a delivery promise',
        paragraphs: [
          'A live training session and its downloadable recording carry similar audio, but their useful delivery rules differ. User Datagram Protocol, or UDP, presents individually bounded messages called datagrams. Unlike an ordered byte-stream transport, UDP does not itself guarantee arrival, order, or duplicate suppression. A checksum helps detect certain data corruption; it is not a receipt and does not authenticate the sender. Choosing UDP therefore leaves the surrounding protocol responsible for deciding what late, missing, reordered, or repeated messages mean to the application.',
        ],
      },
      {
        title: 'A deadline changes what is useful',
        paragraphs: [
          'Imagine audio chunk 72 is needed for playback at 120 milliseconds on a fictional receiver timeline, but arrives at 170 milliseconds. It is 50 milliseconds too late for that chosen playback position. The live application can omit or conceal the missing sound rather than pause every listener until that chunk arrives. A file-transfer protocol delivering the recording can retain the late chunk, put it in the correct position, and request any missing chunks. These are application policies layered over datagrams, not automatic properties of UDP itself.',
        ],
      },
      {
        title: 'Reliability can be built above datagrams',
        paragraphs: [
          'A protocol can add sequence numbers to identify positions, acknowledgments to report received chunks, and retransmission rules to repair gaps. It also needs limits on message sizes and a response to congestion, where offered traffic exceeds available service. Repeating data without considering load can worsen the condition that caused delay. Other protocols choose bounded recovery because old data loses value. Neither choice establishes that UDP is always faster than another transport. Security, congestion behavior, ordering, and deadlines must be specified for the actual application; the transport name is not the complete design.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same late chunk has different value',
        alt: 'Audio chunk 72 arrives at 170 milliseconds after a live deadline of 120, but remains useful for a file.',
        caption: 'The hypothetical 120 ms deadline and 170 ms arrival illustrate policy, not a universal playback buffer.',
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
        'Label slips 9, 10, and 11. Give them playback deadlines 180, 200, and 220 ms respectively.',
        'Assign arrivals 170, 240, and 210 ms respectively. Sort by arrival and mark which chunks meet their own deadlines.',
        'For live playback, retain timely chunks in their intended positions and mark the missed position without delaying all later audio.',
        'For a recording transfer, retain all three and arrange them by chunk number. Write how a duplicated chunk would be recognized.',
      ],
      notice: 'Two chunks meet playback deadlines, while all three remain useful to reconstruct the file when ordered and deduplicated.',
      troubleshooting: 'If chunk 10 delays every later live position, distinguish file completeness from the stated deadline-sensitive playback rule.',
    },
    recall: {
      prompt: 'A dashboard sends periodic temperature updates over datagrams. An old update arrives after a newer one. What rule is missing?',
      hint: 'Arrival order need not match the order of observations.',
      answer: 'The application needs a way to identify observation order or freshness and decide whether to discard the older update. UDP does not prevent it from arriving late or supply the dashboard policy automatically.',
    },
    quiz: {
      question: 'Which design best fits a complete recording transferred using UDP datagrams?',
      options: ['Treat each arrived chunk as proof that all earlier chunks arrived.', 'Use the UDP checksum as the only delivery receipt.', 'Add chunk identification, missing-data recovery, and congestion-aware sending.'],
      correctIndex: 2,
      explanation: 'Completeness needs mechanisms beyond datagram boundaries. Checksums do not acknowledge arrival, and one arrival says nothing about all previous chunks.',
    },
    takeaway: 'UDP supplies datagrams; the surrounding protocol must define usefulness, recovery, ordering, and congestion behavior.',
    sourceNote: 'RFC 8085 grounds UDP application responsibilities. Audio deadlines are illustrative, not codec or vendor recommendations.',
  },
  {
    id: 'tech-020',
    outcome: 'Treat a timed-out state-changing request as an uncertain outcome and bound any retry plan.',
    scene: 'A build-report creation request commits before its response is lost on the way back.',
    sections: [
      {
        title: 'A caller deadline is a local event',
        paragraphs: [
          'A release dashboard asks a service to create a build report. After half a second, the dashboard displays a timeout. A timeout means the caller did not obtain its required response before its waiting limit. It does not reveal whether the request failed to arrive, is still running, or completed without a delivered response. Nor does stopping the local wait automatically cancel remote work. Cancellation needs an explicit supported protocol, meaning agreed messages and behavior, and can itself race with an operation already completing.',
        ],
      },
      {
        title: 'The side effect can precede the missing response',
        paragraphs: [
          'On a hypothetical timeline, the request starts at zero milliseconds, the report record commits at 400, and its response is lost at 450. The caller times out at 500. The report exists even though the caller lacks confirmation. A fresh create request could make a second report. Idempotent behavior means repeating an identical request has the same intended effect as making it once. Some application interfaces provide a deduplication key or an operation-status lookup, but their scope, lifetime, and matching rules must be documented rather than assumed.',
        ],
      },
      {
        title: 'Retries are additional work',
        paragraphs: [
          'A retry policy needs an overall deadline and a bounded number of attempts. Backoff increases the wait between attempts; jitter varies that wait so many clients do not retry together. Those controls reduce repeated load, but do not establish whether a previous side effect happened. Retries at multiple layers can multiply: if three nested layers each make up to three attempts, one initial operation can generate up to 27 attempts at the deepest dependency. Prefer a documented outcome check or supported repeatable operation to blind creation retries, especially when the result changes stored state.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'Completed remotely, uncertain locally',
        alt: 'Commit at 400 ms and response loss at 450 precede the caller timeout at 500.',
        caption: 'Synthetic events, not proportional spacing. Timeout neither undoes the commit nor establishes its outcome for the caller.',
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
        'Copy the four events and draw separate caller and service rows. Put commit only on the service row.',
        'At 500 ms, write what the caller knows and what the full fictional timeline reveals. Keep those statements distinct.',
        'Sketch a supported read-only status lookup using an invented operation label. Do not invent a guarantee when that interface is absent.',
        'Write a bounded retry proposal that requires documented repeatable semantics, an overall deadline, and one layer owning attempts.',
      ],
      notice: 'The caller can know its wait ended without knowing whether creation occurred. A retry needs more than a shorter timer.',
      troubleshooting: 'If timeout deletes the service record in your sketch, remove that effect unless an explicit cancellation contract establishes it.',
    },
    recall: {
      prompt: 'A meeting-room reservation times out, then appears in the calendar. Why would an immediate second creation have been risky?',
      hint: 'A missing reply is not a negative receipt for the side effect.',
      answer: 'The first request could have succeeded without delivered confirmation. Another creation might reserve twice unless repetition is supported safely. Use the documented reservation-status path to inspect the outcome.',
    },
    quiz: {
      question: 'What is justified by a timeout alone after sending a create request?',
      options: ['The required response did not arrive before the caller deadline.', 'The server made no durable change.', 'The request is safe to create again without checking its contract.'],
      correctIndex: 0,
      explanation: 'Timeout describes local waiting. Remote completion and safe repetition require evidence or guarantees beyond that event.',
    },
    takeaway: 'Timeout means uncertain outcome; retries consume capacity and require documented semantics plus a bounded budget.',
    sourceNote: 'The inherited references ground outcome uncertainty and retry risks. The timeline and nesting count are illustrative.',
  },
  {
    id: 'tech-021',
    outcome: 'Classify requested HTTP effects separately from whether repeating them is idempotent.',
    scene: 'A project-board interface must distinguish viewing, replacing, deleting, and creating a board.',
    sections: [
      {
        title: 'Read-only and repeatable are different questions',
        paragraphs: [
          'A project-board interface can view a board, replace its settings, delete it, or create another board. Hypertext Transfer Protocol, or HTTP, describes request and response semantics between a client and server. A method names the requested kind of operation. A safe method has read-only requested semantics: the caller is not asking to change the resource. Incidental effects such as logging can still occur. Idempotent means repeating an identical request has the same intended effect as making it once. It does not mean the operation is harmless or read-only.',
        ],
      },
      {
        title: 'Follow the resource state',
        paragraphs: [
          'GET asks for a representation, the content describing a resource, and is both safe and idempotent. PUT requests creation or replacement of the selected resource state; DELETE requests removal of its association with the target address. Both are idempotent by their defined semantics but not safe. In a fictional board contract, repeating PUT to set the title to Review does not request a second board. Repeating an ordinary create-style POST can create another board unless additional application rules prevent that. POST is not generally idempotent.',
        ],
      },
      {
        title: 'The response need not repeat',
        paragraphs: [
          'Deleting a board might first return 204, indicating successful fulfillment without response content, and later return 404 because the target is absent. Those different responses can accompany the same intended final effect: the board is no longer present. Idempotency is about requested effect, not identical reply text. An incorrectly implemented endpoint does not gain correct behavior merely from its method label. Before automatically retrying an uncertain state-changing call, examine its documented semantics and any supported deduplication rule. For an ordinary create-style POST, the method alone does not justify repetition.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Four board operations, two properties',
        alt: 'GET is safe and idempotent; PUT and DELETE are only idempotent; ordinary create POST is neither.',
        caption: 'Fictional board contract. DELETE responses differ while the requested removal effect remains repeatable.',
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
        'Draw one board titled Draft. Write two identical fictional PUT requests setting its title to Review, without sending anything.',
        'Write the intended state after each request. Classify whether either requested a change and whether repetition adds a new effect.',
        'Repeat on paper with DELETE, assigning replies 204 then 404. Compare resource state rather than response equality.',
        'Draw two ordinary create-style POST requests. Explain what extra documented mechanism would be needed to prevent duplicate creation.',
      ],
      notice: 'PUT and DELETE request changes while remaining repeatable in effect. Response equality is not the deciding test.',
      troubleshooting: 'If every idempotent operation becomes read-only, answer the change question and the repetition question in separate columns.',
    },
    recall: {
      prompt: 'A status GET is logged on every request. Does that incidental logging necessarily violate HTTP safety?',
      hint: 'Safety describes what the caller requested, not the absence of every server-side event.',
      answer: 'No. The requested semantics can remain retrieval even though the server records access. Safety does not mean zero internal effects, and it is not a general security verdict about the endpoint.',
    },
    quiz: {
      question: 'A repeated DELETE returns a different status but leaves the same resource absent. What best explains this?',
      options: ['Different statuses always make the operation non-idempotent.', 'Deletion is safe because the second call changes nothing.', 'Idempotency concerns intended effect, not identical responses.'],
      correctIndex: 2,
      explanation: 'Deletion requests a state change, so it is not safe. Repeated intended removal can be idempotent even when the reported circumstances differ.',
    },
    takeaway: 'Safe asks whether a change was requested; idempotent asks what repeating the same request is intended to do.',
    sourceNote: 'RFC 9110 defines these properties. The board API and status sequence are illustrative, not a tested implementation.',
  },
  {
    id: 'tech-022',
    outcome: 'Keep a background job pending after HTTP acceptance until its documented terminal result is known.',
    scene: 'A video-export interface receives an accepted response while a separate worker processes the job.',
    sections: [
      {
        title: 'Accepted is not exported',
        paragraphs: [
          'A video editor starts an export and receives HTTP 202. HTTP, the request-response protocol used by web applications, assigns different meanings to its status codes. The 2xx family contains successful responses, but its members do not all describe completed background work. A 202 Accepted response means the request was accepted for processing and that processing is not complete. It does not promise eventual success. Showing Export finished at this point would replace the actual acceptance evidence with a stronger claim the response did not make.',
        ],
      },
      {
        title: 'The job has a separate lifecycle',
        paragraphs: [
          'Suppose the response identifies fictional job J7 and describes a supported status resource. A resource is an addressable item the interface exposes; here it reports job state. A client can retrieve that resource as documented and receive HTTP 200 with a body saying running. The status request succeeded, while the export remains unfinished. Terminal states are states with a final processing outcome, such as completed or failed. The client needs their meaning and any result-location contract rather than interpreting every successful status retrieval as a completed export.',
        ],
      },
      {
        title: 'Keep failures and missing observations distinct',
        paragraphs: [
          'On the illustrative timeline, J7 is accepted at zero seconds, starts running at two, and reaches either completed or failed at twelve. These are alternative outcomes, not two events that both happen. If a status request itself cannot complete, the last known job state becomes uncertain or stale; it is not automatically a job failure. Follow the documented check interval or notification mechanism rather than inventing rapid polling. HTTP 204, successful fulfillment without response content, also has a different meaning from acceptance, but must still be interpreted against the operation being requested.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'One accepted job, two possible final outcomes',
        alt: 'J7 runs, then either completes or fails.',
        caption: 'Hypothetical states and times. Final branches are alternatives; a successful status GET does not establish completion.',
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
        'Write three fictional responses: create returns 202 with J7; status returns 200 with running; status returns 200 with failed.',
        'For each response, record the HTTP request outcome and the separate export-job outcome in two columns.',
        'Draft the user-facing message after each response, preserving pending work until the job reaches its final state.',
        'Replace the last response with a status-request timeout. Keep the job outcome unknown rather than labeling it failed.',
      ],
      notice: 'HTTP status retrieval can succeed for both running and failed jobs. A missing retrieval leaves a different uncertainty.',
      troubleshooting: 'If every 200 makes the export complete, read the returned job-state field and distinguish the request from the work it describes.',
    },
    recall: {
      prompt: 'An archive service accepts a request, then later rejects an unsupported input format. Was the earlier 202 necessarily incorrect?',
      hint: 'Acceptance does not promise that deferred processing will succeed.',
      answer: 'No. The request could correctly be accepted for later processing and then fail. The interface should expose that terminal failure through its documented job lifecycle rather than treating acceptance as a completed archive.',
    },
    quiz: {
      question: 'A status GET returns HTTP 200 and job state running. What should the interface show?',
      options: ['The status was retrieved successfully; the job is still pending.', 'The export completed because the request was successful.', 'The initial 202 failed because the result is not yet ready.'],
      correctIndex: 0,
      explanation: 'The 200 describes retrieval of status information. Its running value still describes unfinished processing, not success or failure of the export.',
    },
    takeaway: 'Track acceptance, status retrieval, and final processing as distinct outcomes with their own evidence.',
    sourceNote: 'RFC 9110 grounds status semantics. J7 and its lifecycle are an invented application contract.',
  },
  {
    id: 'tech-023',
    outcome: 'Interpret request timing phases without equating first-byte waiting with server CPU time.',
    scene: 'A public documentation page is compared on a fresh connection and a reused connection.',
    sections: [
      {
        title: 'A total duration hides different waits',
        paragraphs: [
          'A documentation page loads slowly, and someone immediately proposes optimizing server code. A browser timing record can first separate where the elapsed time went. Domain Name System, or DNS, resolves the server name. Transmission Control Protocol, or TCP, establishes a transport connection in this example. Transport Layer Security, or TLS, establishes protected communication for HTTPS. Request transmission, waiting for the first response byte, and receiving the response follow. Not every request performs fresh setup: names can be cached and existing connections can be reused.',
        ],
      },
      {
        title: 'Add non-overlapping phases',
        paragraphs: [
          'Take a hypothetical fresh HTTPS request with no overlapping setup: DNS takes 20 milliseconds, TCP setup 40, TLS setup another 40, request sending one, first-byte waiting 120, and response transfer 30. The total is 251 milliseconds. The diagram combines TCP and TLS into one 80-millisecond connection bar. That prevents counting TLS twice, since some timing interfaces include secure setup inside their broader connection interval. A reused-connection example with cached naming removes those 100 milliseconds of setup and totals 151, even with unchanged server behavior.',
        ],
      },
      {
        title: 'First-byte waiting crosses multiple components',
        paragraphs: [
          'The 120-millisecond wait can include outward travel, server queues, dependency work, processing, and the first bytes traveling back. It is not a direct measurement of processor time inside the server. Browser measurements also have visibility limits: cross-origin resources can withhold detailed timing, and zero-length setup phases can reflect reuse rather than impossible instantaneous work. Compare matching resources and connection conditions before selecting an explanation. A phase can narrow an investigation without identifying a single responsible machine. The synthetic record below is enough for practice; no authenticated requests or browser data need to be exported.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'A 251 ms fresh-request budget',
        alt: 'DNS 20, connection 80, send 1, first-byte wait 120, and response transfer 30 milliseconds sum to 251.',
        caption: 'Illustrative non-overlapping phases. Connection includes 40 ms TCP plus 40 ms TLS; do not add the TLS subphase again.',
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
        'Copy the five bar values into a fresh-request row and add them. Mark connection as already including TLS.',
        'Make a reused-connection row with DNS zero and connection zero; keep send, wait, and transfer unchanged.',
        'Calculate the difference between totals. Write why that difference does not establish faster server processing.',
        'Under the 120 ms wait, list travel, queueing, and processing as candidates. Mark their individual durations unknown.',
      ],
      notice: 'Totals are 251 and 151 ms. Setup explains the 100 ms difference, while the first-byte wait remains unseparated.',
      troubleshooting: 'If the fresh total is 291 ms, remove the extra 40 ms TLS addition already included in connection time.',
    },
    recall: {
      prompt: 'A browser shows zero DNS duration for one image and a positive duration for another. Does that prove the first image needed no naming?',
      hint: 'Reuse and measurement visibility can both change displayed phases.',
      answer: 'No. The request can reuse a cached name result or connection, and timing exposure depends on context. Check the resource origin and setup conditions before reading zero as evidence of no underlying naming work.',
    },
    quiz: {
      question: 'Which conclusion is supported by a large request-to-first-byte interval alone?',
      options: ['Server CPU consumed that entire interval.', 'Waiting across the request-response path is large; its components still need evidence.', 'DNS necessarily caused the interval.'],
      correctIndex: 1,
      explanation: 'The interval spans more than server computation. DNS is a separate setup phase, while travel and queues can contribute to waiting.',
    },
    takeaway: 'Read timing at phase boundaries, avoid overlapping sums, and keep elapsed waiting separate from server CPU work.',
    sourceNote: 'The inherited MDN Resource Timing reference describes phases and visibility limits. These values are synthetic HTTPS timings, not browser measurements.',
  },
  {
    id: 'tech-024',
    outcome: 'Explain which ordering blockage QUIC streams remove and which shared constraints remain.',
    scene: 'A collaborative whiteboard loads a drawing asset and an independent chat update on one connection.',
    sections: [
      {
        title: 'Many streams can share one transport',
        paragraphs: [
          'A collaborative whiteboard fetches a drawing asset while receiving an independent chat update. Hypertext Transfer Protocol version 2, or HTTP/2, can multiplex those exchanges: it tags different streams so their pieces share one connection. A stream is an independently identified exchange of data at that layer. However, HTTP/2 normally uses Transmission Control Protocol, or TCP, underneath. TCP delivers one ordered byte stream. The application-level stream labels do not change the transport requirement to fill a missing byte range before delivering later bytes.',
        ],
      },
      {
        title: 'A gap can hold unrelated later data',
        paragraphs: [
          'Suppose 600 bytes belonging to drawing stream A are missing from the TCP stream. Later bytes containing a complete 200-byte chat update for stream B arrive. TCP can retain those later bytes but cannot yet deliver them past the missing range to HTTP/2. This is transport head-of-line blocking: earlier missing data holds up later data even when its application purpose is independent. Recovering the gap can release both streams. The stream labels help HTTP organize exchanges, but they cannot make an ordered TCP gap disappear.',
        ],
      },
      {
        title: 'Independent ordering does not mean independent resources',
        paragraphs: [
          'HTTP/3 uses QUIC, a secure transport built over User Datagram Protocol, or UDP, which carries bounded messages. QUIC orders reliable data separately within individual streams. In the same loss pattern, a gap in stream A need not prevent delivery of complete stream B data. Assume chat headers and other dependencies are available. Both streams still share connection resources and congestion control, which adjusts sending under network pressure. If the chat application needs information from the drawing before displaying it, that application dependency remains. The improvement removes cross-stream transport ordering blockage, not all waiting or loss effects.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'What happens to the arrived chat bytes?',
        alt: 'A 600-byte gap holds 200 later chat bytes in TCP, but not necessarily in another QUIC stream.',
        caption: 'Hypothetical counts, with complete chat headers and no application dependency. This is not a completion-time benchmark.',
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
        'Draw one TCP byte line with an earlier 600-byte A gap followed by 200 arrived B bytes. Mark delivery waiting at the gap.',
        'Draw separate QUIC stream lines A and B with the same missing and complete data. Mark B transport delivery as possible.',
        'Add a shared congestion-control box around both QUIC lines. Keep it even though their ordering is separate.',
        'Create an alternative where B needs metadata from A. Mark the new application wait without claiming it is transport ordering.',
      ],
      notice: 'Separate stream ordering removes one dependency, while shared congestion and application dependencies remain visible.',
      troubleshooting: 'If QUIC makes every box independent, restore the shared connection constraints and distinguish transport availability from usable application content.',
    },
    recall: {
      prompt: 'A page uses HTTP/3 but cannot render a chart until its configuration request completes. Why can the chart still wait?',
      hint: 'Available transport bytes are not the same as satisfied application prerequisites.',
      answer: 'Independent stream delivery does not supply missing chart configuration. That application dependency remains, along with possible shared congestion or processing waits.',
    },
    quiz: {
      question: 'Which advantage follows from QUIC ordering data separately within streams?',
      options: ['Reliable stream data no longer requires retransmission.', 'Each stream delivers its own bytes out of order.', 'Missing A data need not block transport delivery of complete B data.'],
      correctIndex: 2,
      explanation: 'QUIC still recovers reliable data and preserves order within each stream. The improvement removes an ordering dependency between streams.',
    },
    takeaway: 'Multiplexing separates exchanges; QUIC also separates stream ordering, without removing every shared resource or application dependency.',
    sourceNote: 'RFC 9000 grounds stream independence. This simplified whiteboard example promises no universal HTTP/3 speed improvement.',
  },
  {
    id: 'tech-025',
    outcome: 'Separate browser response-sharing rules from whether a server received or authorized a request.',
    scene: 'A dashboard at one web origin calls a reporting API at another during a front-end review.',
    sections: [
      {
        title: 'The browser is enforcing an origin boundary',
        paragraphs: [
          'A dashboard at https://desk.example requests data from https://api.example and reports a CORS error. An origin consists of scheme, hostname, and port, so these two HTTPS sites have different origins. Cross-Origin Resource Sharing, or CORS, lets a server describe which origins may read responses through browser scripts. It works with the browser same-origin policy, which restricts script access across those boundaries. The error alone does not say that the API rejected authentication, that its application failed, or that no request reached it.',
        ],
      },
      {
        title: 'Some requests ask permission before the actual operation',
        paragraphs: [
          'Consider an ordinary cross-origin GET with no special request headers. The browser can send it, then refuse to expose the response to JavaScript if the required sharing permission is absent. Now consider PATCH, a method requesting a partial resource change. Assume no cached preflight permission. The browser first sends an OPTIONS preflight identifying the origin and intended method. If the reply does not permit that request, the browser does not send the actual PATCH. These two CORS failures leave different evidence about what the server received.',
        ],
      },
      {
        title: 'The server still owns access control',
        paragraphs: [
          'Authentication establishes the caller identity through an accepted mechanism. Authorization decides whether that caller may perform the requested operation on the resource. CORS supplies neither of those server-side checks. A non-browser client is not constrained by browser CORS enforcement, and some browser requests can reach the server before response sharing is evaluated. Therefore, private APIs need their own identity and permission checks, with appropriate protections for unwanted state changes. Diagnose the observed sequence: preflight, actual request if permitted, and response exposure. Disabling browser protection changes the test boundary rather than fixing the server policy.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two ways a CORS error can occur',
        alt: 'An ordinary GET reaches the API but its response is hidden; a rejected preflight prevents the actual PATCH.',
        caption: 'Fictional desk.example to api.example requests. Assume no cached preflight permission; neither case establishes server authorization by itself.',
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
        'Draw dashboard script, browser enforcement, and API columns. Use the fictional origins shown above; send no real requests.',
        'For GET, draw the actual request and response, then stop the response at browser enforcement when sharing permission is absent.',
        'For PATCH, draw an OPTIONS preflight announcing PATCH. Give it a denial and cross out the unsent actual PATCH.',
        'At the API, add separate authentication and authorization checks. Explain why they remain necessary for non-browser callers.',
      ],
      notice: 'Both paths can show a browser error, but only the illustrated GET reached the application as the actual request.',
      troubleshooting: 'If the preflight becomes the PATCH itself, keep OPTIONS as a separate permission query before the proposed state-changing operation.',
    },
    recall: {
      prompt: 'A server log records a GET even though its dashboard script reports CORS failure. Are those observations contradictory?',
      hint: 'Server receipt and script access to the reply happen at different boundaries.',
      answer: 'No. A non-preflighted GET can reach the server while the browser later withholds its response from the calling script. Inspect the actual request sequence and server authorization outcome separately.',
    },
    quiz: {
      question: 'A required preflight is denied with no cached permission. What should the browser do with the proposed PATCH?',
      options: ['Send it but hide only its response.', 'Do not send the actual PATCH.', 'Treat the CORS reply as authenticated permission to modify the resource.'],
      correctIndex: 1,
      explanation: 'A denied required preflight blocks the actual request. The send-then-hide path describes other requests, while authentication remains a server responsibility.',
    },
    takeaway: 'CORS controls browser cross-origin access; distinguish preflight blocking, response exposure, and server authorization.',
    sourceNote: 'The inherited MDN CORS guide grounds these request paths. Examples are paper-only and omit credentialed-request details and preflight-cache behavior.',
  },
  {
    id: 'tech-026',
    outcome: 'Name each TLS connection boundary and explain what certificate verification establishes.',
    scene: 'A training portal uses a reverse proxy before its application server.',
    sections: [
      {
        title: 'Protection belongs to a connection',
        paragraphs: [
          'A browser opens a training portal using HTTPS, the protected form of the web request-response protocol. Transport Layer Security, or TLS, provides confidentiality against reading the protected data and integrity against undetected alteration between its participating endpoints. In ordinary certificate-based HTTPS, the browser also verifies the server identity. A reverse proxy is a server that accepts a client connection and forwards work to another server. If it terminates TLS, that protected connection ends at the proxy, not automatically at the later application server.',
        ],
      },
      {
        title: 'The handshake establishes keys and checks identity',
        paragraphs: [
          'A handshake is the setup message exchange. In a simplified fresh TLS 1.3 connection, ClientHello and ServerHello negotiate parameters and exchange public key-share information used to derive connection keys. The server then provides certificate-based authentication and a Finished message protecting the handshake transcript. A certificate associates names with a public key through a signature chain. The browser checks the requested hostname, certificate validity, and trust chain, and verifies the handshake proofs before completing its side. Encryption without the required identity checks would leave a different security boundary.',
        ],
      },
      {
        title: 'Inspect the next hop separately',
        paragraphs: [
          'Suppose the browser verifies portal.example at the proxy. That demonstrates the front connection under those checks; it does not describe the proxy-to-application hop. That hop might use a separate TLS connection or another reviewed protection, but its design needs evidence. A certificate error should lead to checking name, trust, validity, and the intended endpoint, not disabling verification. Also, an authenticated encrypted connection does not guarantee honest website content or correct application permissions. The diagram distinguishes a known front boundary from an unspecified later one rather than coloring the whole route protected.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'TLS ends at its actual endpoint',
        alt: 'Browser TLS ends at the proxy; the backend connection has a separate protection decision.',
        caption: 'Fictional portal; the second hop is unspecified, not assumed unencrypted.',
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
        caption: 'Certificate-based handshake overview; resumption and optional client authentication omitted.',
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
        'Copy the three endpoint boxes and mark only browser-to-proxy as known TLS protection.',
        'Label its expected hostname portal.example. List name, validity, trust chain, and handshake proof as verification concerns.',
        'Mark proxy-to-application protection unknown and write the design evidence needed to resolve it.',
        'Add a certificate-name mismatch to the front hop. Write investigate the endpoint, not bypass verification.',
      ],
      notice: 'Your diagram makes one established protection claim rather than silently extending it over a second connection.',
      troubleshooting: 'If one TLS label covers both arrows, split it where the proxy terminates and originates connections.',
    },
    recall: {
      prompt: 'A secure front connection works, but backend-hop encryption is undocumented. What remains unknown?',
      hint: 'A terminating intermediary creates another connection boundary.',
      answer: 'The later hop protection remains unestablished. Client-side HTTPS verification cannot prove the separate proxy-to-server design, its peer verification, or application authorization.',
    },
    quiz: {
      question: 'What does verified browser-to-proxy HTTPS establish about the later application hop?',
      options: ['It uses the same uninterrupted TLS connection.', 'It is necessarily unencrypted.', 'Its protection needs separate evidence.'],
      correctIndex: 2,
      explanation: 'TLS termination ends the front connection. Neither encrypted nor unencrypted later transport follows from the front connection alone.',
    },
    takeaway: 'Verify the peer and name the endpoints before describing which data path TLS protects.',
    sourceNote: 'RFC 8446 grounds TLS 1.3 mechanisms. This simplified proxy topology omits resumption and does not assess a real deployment.',
  },
  {
    id: 'tech-027',
    outcome: 'Check identity and resource-specific permission as separate access-control decisions.',
    scene: 'An editor can change one project storyboard but must not read a different private project.',
    sections: [
      {
        title: 'Login does not grant every resource',
        paragraphs: [
          'Mira signs into a storyboard application and edits Project Amber. She then follows a link to private Project Blue and is refused. Successful login and refusal are compatible. Authentication establishes a claimed account identity through an accepted mechanism, such as proof of control of an account-bound authenticator. It does not necessarily establish a legal identity outside the service. Authorization is the decision that this account may perform a particular operation on a particular resource. Mira can be authenticated while lacking permission for the linked project.',
        ],
      },
      {
        title: 'Evaluate operation and resource together',
        paragraphs: [
          'In a fictional policy, Mira has editor membership in Amber and no membership in Blue. Reading Amber and editing Amber are allowed. Reading Blue and editing Blue are refused. A server should evaluate the requested resource and operation against the applicable policy rather than merely checking that a session exists. A session associates later requests with an earlier login under the service rules. Hiding an edit button changes the interface, but another client can still construct a request. The enforcing boundary must remain at the server that releases data or changes state.',
        ],
      },
      {
        title: 'Status codes are bounded clues',
        paragraphs: [
          'HTTP is the web request-response protocol. Its 401 response indicates missing or invalid authentication credentials for the target resource. A 403 indicates refusal; it can have causes unrelated to credentials, so it does not prove authentication succeeded. Some services also conceal resource existence according to policy. Read the documented contract and approved decision evidence rather than treating one status as a complete identity report. In the storyboard example, the desired explanation is specific: this account can edit Amber, but the requested Blue resource is outside its membership. Broader access is not a debugging prerequisite.',
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: 'Mira: project by operation',
        alt: 'Mira may read and edit Amber, but may neither read nor edit Blue.',
        caption: 'Invented policy matrix. Rows are Amber and Blue; columns are read and edit. The same authenticated account is evaluated in every cell.',
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
        'Copy the four-cell matrix for Mira. Write authentication accepted above it without changing any permission cell.',
        'Add Noor, whose fictional policy grants read-only Amber membership and no Blue membership. Fill a second matrix.',
        'For Noor editing Amber, write identity accepted, operation refused. Explain why hiding a button is insufficient enforcement.',
        'Draft one server-side test expectation using invented users and project labels only. Include the resource and operation being checked.',
      ],
      notice: 'Mira and Noor can both authenticate while receiving different decisions for the same project operation.',
      troubleshooting: 'If successful login makes all cells allowed, restore the resource and operation checks after the identity decision.',
    },
    recall: {
      prompt: 'A report viewer can retrieve summaries but receives refusal when deleting a report. What does successful viewing fail to establish?',
      hint: 'An operation-specific permission does not imply another operation is allowed.',
      answer: 'Viewing does not establish delete permission. Check the account, report scope, and requested operation against the server policy. A valid identity and one permitted action do not grant every action on the resource.',
    },
    quiz: {
      question: 'Mira is logged in and requests a private Blue storyboard. What must the server still decide?',
      options: ['Whether Mira is allowed to read that Blue resource.', 'Only whether any session exists.', 'Only whether the interface displayed a link to Blue.'],
      correctIndex: 0,
      explanation: 'Authorization is specific to the account, operation, and resource. Session existence or interface visibility cannot replace that decision.',
    },
    takeaway: 'Authentication establishes an account claim; authorization decides access to the exact resource and operation.',
    sourceNote: 'NIST SP 800-63B-4 grounds authentication; RFC 9110 grounds status meanings. Project roles and memberships are original teaching examples.',
  },
  {
    id: 'tech-028',
    outcome: 'Separate readable JWT claims, signature verification, claim validation, and confidentiality.',
    scene: 'A release-artifact reader receives a token intended for a different service.',
    sections: [
      {
        title: 'Readable content is not validated content',
        paragraphs: [
          'A service receives a JSON Web Token, or JWT, and can read an account identifier from it. JSON is a structured text format; JWT is a token format that can carry claims, which are statements about a subject or context. In a common signed JWT, the header and claims use base64url encoding, a reversible representation rather than encryption. Anyone holding that token can read those parts. Decoding proves only that the representation can be interpreted, not that the claims came from a trusted issuer.',
        ],
      },
      {
        title: 'A valid signature answers only part of the question',
        paragraphs: [
          'A signature can protect integrity when checked with the correct trusted key and an allowed algorithm. It does not hide the signed contents. The service must also validate the expected issuer, the intended audience, and applicable time claims according to its token contract. Issuer identifies the token authority; audience identifies the intended recipient. A token with a genuine signature for another recipient must not become valid simply because its account name looks familiar. Authentication and operation permission can require further checks after token validation.',
        ],
      },
      {
        title: 'Follow one wrong-audience example',
        paragraphs: [
          'Use an invented claim view with issuer training-issuer, audience artifact-reader, and expiry 2000000000. The expiry value represents seconds since the Unix epoch, the start of 1970 in UTC. At an invented clock value of 1999999990, ten seconds remain. Assume the signature passes the configured checks. An inventory service expecting audience inventory-reader still rejects this token because it is not an intended recipient. Separately, a bearer token is sensitive because possession can enable use. Practice with claim descriptions only; never paste live tokens into a decoder, screenshot, or learning document.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A signature pass can still end in rejection',
        alt: 'Readable claims and a valid signature lead to an audience mismatch and rejection by the inventory service.',
        caption: 'Invented claims, not a usable credential. Audience mismatch still fails with ten seconds remaining before expiry.',
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
        'Copy only the invented issuer, audience, expiry, and clock values from the lesson. Do not create or copy a token.',
        'Calculate remaining lifetime and mark signature verification as an assumed pass, not something this paper exercise performs.',
        'Write inventory-reader as the service expectation. Compare it with artifact-reader and record the rejection reason.',
        'Change the audience expectation to artifact-reader, then advance the invented clock past expiry. Identify the different validation failure.',
      ],
      notice: 'Different claim checks can fail independently. Readable claims and a passing signature do not make every use valid.',
      troubleshooting: 'If decoding grants access in your sketch, insert trusted-key verification and the recipient-specific validation rules before any permission decision.',
    },
    recall: {
      prompt: 'A signed token includes a confidential project note. Does signing keep that note private from someone holding the token?',
      hint: 'Integrity and confidentiality protect against different things.',
      answer: 'No. A common signed JWT leaves its claims readable. Signing detects unauthorized changes when verified correctly; confidentiality needs encryption or avoiding sensitive claim content. Possession of a usable bearer token is itself sensitive.',
    },
    quiz: {
      question: 'A valid signature and future expiry accompany an audience for another service. What should the intended-audience check conclude?',
      options: ['Accept because signature verification passed.', 'Reject because this service is not the intended recipient.', 'Accept because base64url decoding succeeded.'],
      correctIndex: 1,
      explanation: 'Audience validation is separate from signature and time validation. Decoding establishes neither authenticity nor permission to use the token here.',
    },
    takeaway: 'Decode to read; verify and validate to assess trust. A signature is not encryption or unrestricted permission.',
    sourceNote: 'RFC 8725 and RFC 6750 ground validation and bearer risks. Claims are invented; no credential is generated.',
  },
  {
    id: 'tech-029',
    outcome: 'Explain how relying-party binding makes passkeys resistant to credential phishing.',
    scene: 'A genuine portal and unrelated lookalike undergo a login design review.',
    sections: [
      {
        title: 'The credential is scoped to a service',
        paragraphs: [
          'A page copies the appearance of a training portal but is hosted at portal-login.example instead of portal.example. A passkey does not choose where to authenticate from the logo. It uses a public-key credential scoped to a relying party, the service relying on the authentication. A key pair has a private key that creates a proof and a corresponding public key used to verify it. During authentication, the private key is not sent as the login response. Some passkeys can be securely synchronized, so this is not a claim that keys can never be copied.',
        ],
      },
      {
        title: 'The browser and service check context',
        paragraphs: [
          'WebAuthn is the browser interface for public-key authentication. The service supplies a fresh challenge, a value that connects a response to this attempt. The browser enforces which relying-party identifier the requesting site may use, and the authenticator selects an appropriately scoped credential. The service verifies the signature, challenge, origin, and relying-party context. Origin includes scheme, host, and port. An unrelated lookalike domain cannot request the genuine portal credential merely by showing the same page. Local user verification can activate the credential without sending the fingerprint or device unlock secret to the website.',
        ],
      },
      {
        title: 'Contrast a manually entered code',
        paragraphs: [
          'A one-time code is a temporary authenticator output that a user can type into a page. A deceptive page can relay that typed value to the genuine service while it remains valid because manual entry lacks the same service binding. Passkey context checks resist that credential-phishing path rather than relying only on spotting a misleading domain. They do not prevent every account threat: compromised devices, stolen sessions, and weak recovery procedures remain separate concerns. Evaluate supported login and recovery flows together, without treating one phishing-resistant mechanism as proof that every account action is protected.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'A genuine portal authentication attempt',
        alt: 'Portal challenge, browser relying-party check, authenticator proof, then service verification.',
        caption: 'Schematic portal.example flow. The unrelated portal-login.example cannot substitute itself into this credential scope.',
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
        'Write genuine service portal.example and unrelated lookalike portal-login.example. Treat them as labels, not sites to visit.',
        'Trace a fresh challenge through browser scope checking, authenticator proof, and service verification. Use no actual keys or codes.',
        'Attempt the same credential scope from the unrelated origin on paper. Mark the context check that prevents simple substitution.',
        'Draw a typed-code alternative that can be relayed. Add recovery and session protection as separate review questions for both designs.',
      ],
      notice: 'Passkey resistance comes from checked authentication context, not from a visual difference that the user must notice.',
      troubleshooting: 'If your proof is just a reusable code copied between sites, restore its challenge and relying-party binding.',
    },
    recall: {
      prompt: 'An organization adopts passkeys but keeps a weak account-recovery process. Which account threat remains outside the main login guarantee?',
      hint: 'Recovery can replace the route used to regain account control.',
      answer: 'Recovery abuse can compromise account control despite phishing-resistant login. Recovery, authenticator enrollment, device security, and sessions need their own protections.',
    },
    quiz: {
      question: 'Why does a copied login page on an unrelated domain fail to obtain the genuine portal passkey proof?',
      options: ['A fresh challenge alone guarantees that any requesting site is genuine.', 'The device stores its private key locally.', 'Credential scope and origin-related authentication context are enforced and verified.'],
      correctIndex: 2,
      explanation: 'Local keys and fresh challenges alone do not identify the intended service; relying-party context supplies that distinction.',
    },
    takeaway: 'Passkeys bind authentication to a relying party; that resists credential phishing without covering every recovery or session threat.',
    sourceNote: 'NIST SP 800-63B-4 section 3.2.5 was spot-checked for binding and code distinctions. This is not an assurance certification.',
  },
  {
    id: 'tech-030',
    outcome: 'Specify minimum access by operation, resource scope, and duration for a reporting task.',
    scene: 'A temporary branch-health report needs read access without configuration privileges.',
    sections: [
      {
        title: 'Start with the report, not an administrator role',
        paragraphs: [
          'A temporary reporting task needs current health summaries for Branch West. It does not need to change configuration or read every branch. Least privilege grants only the access required for an assigned task. A credential is evidence used by a service to assess a caller or its authority; having one does not mean every operation should be allowed. Begin with the actual output: West health summaries. Then identify which reads produce that output and which resource set they must cover, instead of borrowing broad access because it is convenient.',
        ],
      },
      {
        title: 'Scope and lifetime are separate controls',
        paragraphs: [
          'In the fictional policy, the reporting client can read West health during a defined work window, but cannot read East health or write either branch configuration. Resource scope defines which objects are covered; operation scope defines what can be done to them. Duration limits when the permission remains valid. A thirty-minute administrator credential narrows time but still permits excessive actions during those thirty minutes. A read-only client promise is also insufficient if the server accepts writes from the same credential. Enforcement belongs at the resource service, not merely in the reporting script.',
        ],
      },
      {
        title: 'Make denied operations part of the design',
        paragraphs: [
          'Suppose the approved report runs from 09:00 to 09:30. Its access proposal names West health reads, excludes configuration contents not needed in the summary, and identifies an owner for ending or renewing access. The proposal should state expected refusals as well as the successful read. That makes a mistaken write or an out-of-scope branch request visible as a policy failure rather than a client habit. Credential expiration does not replace revocation procedures for compromise, and a narrow grant still needs appropriate handling. Use the approved access process rather than requesting someone else to share credentials.',
        ],
      },
    ],
    visuals: [
      {
        type: 'matrix',
        title: 'West reporting grant, 09:00 to 09:30',
        alt: 'West health reads are allowed; East health reads and configuration writes in both branches are denied.',
        caption: 'Invented matrix: branch rows, operation columns. The time window does not expand any permission.',
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
        'Write the report requirement: current West health summaries between 09:00 and 09:30. Include no credentials or real branch identifiers.',
        'List the minimum resource set and read operation, then copy the three denied cells from the matrix.',
        'Compare this proposal with administrator access for the same thirty minutes. Identify the actions duration alone does not remove.',
        'Draft two paper test expectations: the permitted West read succeeds and a West configuration write is refused by the server.',
      ],
      notice: 'The proposal limits both time and permissions; neither restriction substitutes for the other.',
      troubleshooting: 'If read-only means only that the script avoids writes, move the restriction into the expected server authorization behavior.',
    },
    recall: {
      prompt: 'A reporting token expires quickly but can delete every report in the organization. Which excess remains?',
      hint: 'Ask what misuse is possible while the token is still valid.',
      answer: 'Its operations and resource set still exceed the task. Expiry limits exposure time without removing delete permission or unrelated resources while valid.',
    },
    quiz: {
      question: 'Which grant best matches the stated West reporting task?',
      options: ['West health reads for the approved window, with server-enforced resource and operation limits.', 'All-branch administrator rights for the same short window.', 'All-branch writes with a client promise to send only reads.'],
      correctIndex: 0,
      explanation: 'The first grant matches the task. Expiry and client restraint do not narrow excessive server-authorized operations.',
    },
    takeaway: 'Limit what can be done, where it can be done, and for how long; require the server to enforce those limits.',
    sourceNote: 'NIST least privilege and RFC 6750 ground these distinctions. The matrix is fictional, not employer policy.',
  },
  {
    id: 'tech-031',
    outcome: 'Choose between validating a stored HTTP response and prohibiting its storage.',
    scene: 'A film-club schedule changes its session time while browsers hold an older response.',
    sections: [
      {
        title: 'Keeping a copy and reusing it are separate decisions',
        paragraphs: [
          'A film-club page lists a screening at 19:00, then the organizer changes it to 20:00. A browser can hold an earlier response in its HTTP cache, storage that reuses responses for later requests. HTTP is the web request-response protocol. Cache-Control is a response header, metadata instructing compliant HTTP caches how to handle that response. The similarly named directives no-cache and no-store control different decisions. One concerns validation before reuse; the other concerns whether the response should be stored in the first place.',
        ],
      },
      {
        title: 'No-cache can keep data for validation',
        paragraphs: [
          'A response marked no-cache can be stored, but it must be validated before reuse to satisfy a new request. Validation asks whether the applicable stored representation, the response content for that request, remains reusable. If unchanged, the server can respond 304 Not Modified without sending the whole body again. If the schedule changed to 20:00, the server can send updated content. Thus no-cache can support current information while retaining an older body for comparison and reuse. It does not mean every access necessarily downloads the full page again.',
        ],
      },
      {
        title: 'No-store is not a remote eraser',
        paragraphs: [
          'No-store instructs HTTP caches not to store that response. It does not retroactively erase an older response already held elsewhere, prevent screenshots, encrypt the content, or enforce account permissions. Application-managed storage, such as a service worker using its own cache logic, needs separate review. Browser history restoration is also not necessarily a new network request; returning to a saved page snapshot can follow different rules. For the public schedule, decide whether stored-and-validated reuse is wanted or whether storage itself must be avoided. State that requirement before selecting a header from its name.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Two possible policies for a schedule response',
        alt: 'No-cache allows a stored schedule with validation; no-store prohibits storing the new response in HTTP caches.',
        caption: 'Alternative policies for the fictional 19:00 to 20:00 schedule change. Neither directive sends a universal deletion message to existing copies.',
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
        'Label one slip server schedule 19:00 and the other cached schedule 19:00. Mark the response no-cache.',
        'Draw a new request requiring validation. Keep the stored body when the server confirms it is unchanged.',
        'Change the server slip to 20:00. On another validation, replace the stored content with the new response.',
        'Start a separate no-store case with an empty cache. Show no new stored response, then explain why older copies elsewhere are not erased.',
      ],
      notice: 'No-cache still has a stored body available for validated reuse. No-store does not create a new HTTP cache entry.',
      troubleshooting: 'If no-cache means an empty cache in your model, separate the storage decision from the permission to reuse without validation.',
    },
    recall: {
      prompt: 'A site adds no-store after private information was already downloaded. Has that header removed every previous copy?',
      hint: 'An instruction on a new response is not control over every earlier copy.',
      answer: 'No. It governs storage of that response by HTTP caches, not existing downloads, screenshots, or arbitrary application storage. Handling prior copies and future access requires separate controls.',
    },
    quiz: {
      question: 'A public document may be stored, but every new reuse must be validated. Which response directive matches?',
      options: ['no-store', 'no-cache', 'A long max-age alone'],
      correctIndex: 1,
      explanation: 'No-cache permits storage but requires validation. No-store prohibits storage, while a long freshness lifetime alone permits reuse without checking each time.',
    },
    takeaway: 'No-cache governs validation before reuse; no-store governs storage of the response. Neither is a universal deletion mechanism.',
    sourceNote: 'MDN HTTP caching was spot-checked for directive and history-navigation distinctions. The schedule is fictional; application-managed caches need their own policy.',
  },
  {
    id: 'tech-032',
    outcome: 'Follow conditional GET validation from a stored ETag to either body reuse or replacement.',
    scene: 'A festival program download is unchanged between visits, so the browser validates its stored copy.',
    sections: [
      {
        title: 'A validator identifies a representation',
        paragraphs: [
          'A browser already holds an 8000-byte festival program and asks whether it needs another complete download. An entity tag, or ETag, is an opaque validator a server associates with a representation, the particular response content selected for a request. Opaque means clients should compare the supplied value rather than decode a promised internal meaning. It might be generated from content or a version scheme, but it is not necessarily a timestamp or checksum. Its presence alone does not say how long the browser can reuse the response without checking.',
        ],
      },
      {
        title: 'The conditional request carries the stored tag',
        paragraphs: [
          'Suppose the stored program has ETag "program-r7". When validation is required, the browser sends a GET with If-None-Match containing that tag. GET is the HTTP method for retrieving a representation; the added header makes this a conditional request. If the selected representation still matches under the comparison rule, the server can return 304 Not Modified. That response contains no representation body. The cache uses the applicable stored 8000-byte body and updates relevant metadata from the validation response. It is not trying to display an empty new program.',
        ],
      },
      {
        title: 'A changed tag takes the other path',
        paragraphs: [
          'If the selected program now has tag "program-r8", the server can instead return 200 with the new representation, say 8200 bytes. The cache replaces the old data according to its policy. These byte counts concern representation bodies, not total network traffic: a 304 still carries headers and requires a request-response exchange. ETags also do not authenticate the source or grant access to private content. Keep three questions separate: which representation matches, when validation is required, and whether the caller is allowed to receive it. A validator answers only the first kind of question.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Reusing the unchanged festival program',
        alt: 'An 8000-byte cached program is validated with its ETag, receives 304, and reuses its stored body.',
        caption: 'Invented tag and body size. The unchanged branch transfers no new representation body, not zero network bytes.',
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
        'Draw a cache entry with body size 8000 and tag "program-r7". Keep the body and validator as separate fields.',
        'Write a conditional GET carrying that tag. Give the server the same tag and draw a 304 reply without a body.',
        'Point the display to the existing cached body, not to the empty 304. Add metadata update beside the cache.',
        'Repeat with server tag "program-r8" and an 8200-byte body. Draw a 200 replacement response and compare body transfer sizes.',
      ],
      notice: 'The unchanged branch reuses 8000 stored bytes; the changed branch receives a new 8200-byte representation.',
      troubleshooting: 'If 304 becomes a blank page, restore the association between the conditional request and its applicable stored representation.',
    },
    recall: {
      prompt: 'A client has saved an ETag but discarded the corresponding body. Can a normal 304 alone reconstruct the content?',
      hint: 'A validator is not a compressed copy of the representation.',
      answer: 'No. A 304 carries no representation body, and the tag cannot recreate it. The client needs a full applicable representation, normally through a request that obtains the body, before it can display that content.',
    },
    quiz: {
      question: 'Which resource is used to display an unchanged program after successful 304 validation?',
      options: ['A full body embedded in every 304.', 'Content reconstructed by decoding the ETag.', 'The applicable body already held in the cache.'],
      correctIndex: 2,
      explanation: '304 validates reuse rather than transferring the representation again. The opaque validator is not the program content.',
    },
    takeaway: 'ETags compare representations; 304 reuses the matching stored body, while freshness and access policy remain separate.',
    sourceNote: 'MDN HTTP caching was spot-checked for ETag and 304 behavior. Tags, program contents, and body sizes are original illustrations.',
  },
  {
    id: 'tech-033',
    outcome: 'Distinguish language response variants while separately deciding whether a cache may share personalized content.',
    scene: 'A public training guide has English and Tamil responses selected from the request language.',
    sections: [
      {
        title: 'One address can select different content',
        paragraphs: [
          'Two readers request the same public guide address, but one wants English and the other Tamil. An HTTP cache stores responses so later matching requests can reuse them. A cache key is the request information used to distinguish stored entries. If a server selects guide language using the Accept-Language request header, a URL-only match can choose the wrong stored response. The response is a variant: different selected content at the same address. The cache must know which request fields contributed to that selection.',
        ],
      },
      {
        title: 'Vary preserves the selection distinction',
        paragraphs: [
          'The response header Vary: Accept-Language tells HTTP caches to account for that header when matching a later request to a stored response. In the simple example, GET /guide with language en selects an English body; the same request with language ta selects Tamil. Keep those variants separate instead of returning whichever body entered the cache first. Real language headers can contain preferences and quality values, so these short values are teaching simplifications. Adding every possible request field is not automatically better: unnecessary variation fragments reuse into many rarely matched entries.',
        ],
      },
      {
        title: 'Private data needs a sharing decision too',
        paragraphs: [
          'Now replace the public guide with an account profile. Distinguishing responses is not the only issue; decide whether shared caches may store them at all. Cache-Control: private excludes storage by shared HTTP caches while permitting an appropriate private client cache. A cookie, a small browser-carried value often used for sessions, does not automatically make every response private. Application-managed caches must enforce identity boundaries explicitly, and private alone is not a logout-erasure mechanism. Correct variant matching and an appropriate sharing policy solve different problems: choosing the right representation and limiting who can reuse stored content.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'Two public-language variants in a shared cache',
        alt: 'English and Tamil clients request a guide through a shared cache that distinguishes language before contacting the origin.',
        caption: 'Schematic public-content example. Requests use simplified en and ta values; personalized profiles need a separate sharing policy.',
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
        'Label two responses /guide, English and /guide, Tamil. Write en and ta as their selecting request-header values.',
        'Try matching both with only the address. Mark the ambiguity instead of assuming the first cached response fits both.',
        'Add Accept-Language to the matching information and assign each request the corresponding body.',
        'Add a separate fictional profile response. Write private sharing policy and identity handling as additional decisions, not language-key substitutes.',
      ],
      notice: 'Language variation selects the right public body. A private profile still needs a separate decision about shared storage.',
      troubleshooting: 'If Vary becomes an access-control rule, separate response matching from permission and shared-cache eligibility.',
    },
    recall: {
      prompt: 'A service returns different account data at the same URL and assumes that using cookies prevents shared caching. What is missing?',
      hint: 'A session mechanism is not automatically a response storage policy.',
      answer: 'It needs an explicit appropriate sharing policy and correct identity boundaries in any managed cache. Cookies alone do not make a response private, and correct keys alone do not establish whether sharing is appropriate.',
    },
    quiz: {
      question: 'What does Vary: Accept-Language contribute for the public guide?',
      options: ['The request language helps determine which stored response matches.', 'The cache translates the stored body into the requested language.', 'Each language must use a different URL.'],
      correctIndex: 0,
      explanation: 'Vary preserves request matching information. It neither translates content nor requires different URLs.',
    },
    takeaway: 'Use request variation to select the correct response and sharing policy to restrict which caches may retain it.',
    sourceNote: 'MDN HTTP caching was spot-checked for Vary, private, and cookie distinctions. The language and profile scenarios use no personal data.',
  },
  {
    id: 'tech-034',
    outcome: 'Explain a successful stale replica read using the documented consistency boundary.',
    scene: 'An employee changes a rota entry, then reads an older value from a lagging replica.',
    sections: [
      {
        title: 'Success can describe an older state',
        paragraphs: [
          'An employee changes a rota entry from Monday to Tuesday and receives success. The next screen still shows Monday, without a network error. A replica is another stored copy of data. In asynchronous replication, updates reach that copy after the primary write path has progressed, rather than necessarily before its acknowledgment. A read routed to a lagging replica can therefore return an older value successfully. Whether this is permitted depends on the datastore consistency contract, the rules describing which writes a read is guaranteed to observe.',
        ],
      },
      {
        title: 'Place write and read events on the route',
        paragraphs: [
          'For this fictional service, assume the primary acknowledges version 13, Tuesday, at 100 milliseconds. A read reaches another replica at 140 milliseconds, while it still holds version 12, Monday. That replica applies version 13 at 220 milliseconds. The read at 140 was not evidence that the write was undone; it observed a copy that had not applied it yet. A read after 220 can see Tuesday in this simplified sequence, with no other writes. The timing is illustrative and does not establish a maximum replication delay.',
        ],
      },
      {
        title: 'Ask for the guarantee the workflow needs',
        paragraphs: [
          'Eventual consistency means replicas converge when updates stop and replication and reconciliation complete; the term alone supplies no fixed waiting time. A read-your-writes guarantee means a client can observe its own completed writes in subsequent reads under the documented conditions. If the rota workflow needs that guarantee, use the supported consistency mode or read path rather than inserting an arbitrary sleep. Repeatedly refreshing until Tuesday appears does not establish a promise for other users or concurrent edits. Also distinguish a stale replica from a browser cache or an application that ignored the write response.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A read reaches the replica before its update',
        alt: 'The client writes Tuesday to the primary but reads Monday from the lagging replica.',
        caption: 'Hypothetical paths and elapsed times, not a convergence guarantee.',
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
        'Label slips primary and replica, both version 12 Monday. Put a client row beneath them.',
        'At 100 ms, update the primary to version 13 Tuesday and record its acknowledgment. Leave the replica unchanged.',
        'Read the replica at 140 ms, then apply version 13 there at 220 ms. Record the different observations.',
        'Write the workflow requirement read my completed change, and mark the documented guarantee or supported route needed to meet it.',
      ],
      notice: 'A successful write and a successful older read can coexist because the read visited a different state copy.',
      troubleshooting: 'If the replica changes at acknowledgment automatically, restore asynchronous update as a separate event with its own evidence.',
    },
    recall: {
      prompt: 'A shopping cart appears correct after a fixed one-second wait. Does that prove all later reads will always be fresh?',
      hint: 'One observed delay is not a bound in the consistency contract.',
      answer: 'No. Replication delays and concurrent writes can differ. A successful refresh demonstrates that case, not a documented freshness guarantee for subsequent reads.',
    },
    quiz: {
      question: 'A replica returns version 12 after version 13 was acknowledged elsewhere. What should be examined first?',
      options: ['Whether every successful response must include the latest global write.', 'The replication and read consistency contract for that route.', 'Whether increasing an arbitrary client delay proves correctness.'],
      correctIndex: 1,
      explanation: 'Freshness depends on the supported consistency semantics. Response success and one chosen delay do not establish a stronger read guarantee.',
    },
    takeaway: 'Transport success does not establish replica freshness; choose a documented read guarantee that fits the workflow.',
    sourceNote: 'The inherited consensus reference grounds replicated-state reasoning. This asynchronous service and timing are hypothetical, not universal datastore behavior.',
  },
  {
    id: 'tech-035',
    outcome: 'Use a version precondition to reject a stale replacement instead of overwriting another edit.',
    scene: 'Two release planners edit the same schedule title and owner from an earlier version.',
    sections: [
      {
        title: 'Reading first does not lock the later write',
        paragraphs: [
          'Two release planners read a schedule titled Friday with owner unassigned. Asha changes the title to Saturday. Ben, still editing the older copy, assigns an owner and submits the entire Friday version. Without a condition, his replacement can erase the Saturday change. This is a lost update: one accepted edit overwrites another because it was based on stale state. Merely reading before writing does not prevent the race, since another writer can change the resource in the interval between those two actions.',
        ],
      },
      {
        title: 'Attach the version to the requested change',
        paragraphs: [
          'HTTP is the web request-response protocol. An ETag is a server-provided validator for a selected resource representation. A strong ETag supports comparison strong enough for the If-Match write precondition, a requirement that the current representation match before the requested change is applied. In the example, both planners read tag "plan-a". Asha submits her replacement with If-Match: "plan-a". The server checks and applies it together, then assigns "plan-b". The precondition cannot be checked as an unrelated earlier read that leaves another race before the write.',
        ],
      },
      {
        title: 'Handle the refusal without discarding the protection',
        paragraphs: [
          'Ben submits his old replacement with If-Match: "plan-a" after Asha succeeds. The server now has "plan-b", so this example returns 412 Precondition Failed and keeps Saturday intact. Ben can retrieve current state, reconcile his owner change with the Saturday title, and submit against its current tag. Simply copying the newest tag onto the old body would reintroduce the overwrite. This protection depends on correct server support and does not create a transaction across unrelated resources. It also does not replace authorization to edit the schedule.',
        ],
      },
    ],
    visuals: [
      {
        type: 'flow',
        title: 'Rejecting the stale Friday replacement',
        alt: 'Both planners read plan-a; Asha creates plan-b; Ben submits plan-a and receives 412 without overwriting Saturday.',
        caption: 'Invented schedule. Coupled precondition checking and writing refuse the stale replacement without erasing Saturday.',
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
        'Copy "plan-a", Friday, owner unassigned onto both slips. Assign one snapshot to each planner.',
        'Apply the Saturday title to a current-state row and change its tag to "plan-b".',
        'Compare the submitted "plan-a" precondition with current "plan-b". Write 412 and leave the current row unchanged.',
        'Merge the owner edit into Saturday. Attach "plan-b" and note that another concurrent change could require reconciliation again.',
      ],
      notice: 'The stale write is refused, while a reconciled proposal can preserve both intended changes if its precondition still matches.',
      troubleshooting: 'If Ben restores Friday after receiving 412, compare the reconciled body, not just whether you copied a newer tag.',
    },
    recall: {
      prompt: 'A client reads a stock record, another writer changes it, and the first client sends an unconditional replacement. Why was the initial read insufficient?',
      hint: 'The value can change between observation and mutation.',
      answer: 'The read did not reserve the observed version until the write. A supported atomic version precondition lets the server refuse a stale replacement, after which the client must reconcile with current state rather than overwrite blindly.',
    },
    quiz: {
      question: 'After a stale-write 412, which response preserves the purpose of the precondition?',
      options: ['Remove If-Match and repeat the old replacement.', 'Attach the newest tag to the unchanged stale body.', 'Fetch current state, reconcile the intended edit, and submit with its current validator.'],
      correctIndex: 2,
      explanation: 'Reconciliation preserves intervening edits. Removing the guard or relabeling stale content with a newer tag defeats the lost-update protection.',
    },
    takeaway: 'Tie the write to the version observed, and reconcile a failed precondition instead of bypassing it.',
    sourceNote: 'RFC 9110 defines If-Match. This original single-resource example does not establish a multi-resource transaction.',
  },
  {
    id: 'tech-036',
    outcome: 'Choose metrics, logs, or traces for a specific question and preserve each signal observation limits.',
    scene: 'A thumbnail service investigation moves from an error ratio to one timed storage failure.',
    sections: [
      {
        title: 'Start with the question',
        paragraphs: [
          'A thumbnail service reports 20 failed requests out of 1000 in a five-minute window. That two-percent error ratio is a metric: a measurement summarized across a population or time interval. It identifies a pattern without explaining every failure. A log is an event record with context, such as a particular operation reporting a storage timeout. A trace connects timed work across one request path. Its spans describe individual operations with start and end information. These signals are complementary because they preserve different levels of detail.',
        ],
      },
      {
        title: 'Follow one request without double-counting time',
        paragraphs: [
          'In a synthetic record, operation demo-42 starts at zero milliseconds and returns an error at 200. Its storage-call span starts at 30 and ends with a timeout at 180, lasting 150 milliseconds. The log names that timeout, while the trace locates it within the request. Do not add the 200-millisecond parent duration to its 150-millisecond child; the child is already inside it. The other 50 milliseconds belong outside that child interval in this simple example, but are not automatically CPU execution. Other spans can overlap or be missing.',
        ],
      },
      {
        title: 'Absence is limited by collection',
        paragraphs: [
          'A correlation identifier links related events without needing to copy their full contents. It is an identifier for investigation, not permission to access the request. Collection can be sampled, meaning only some requests are retained, and instrumentation can omit work. Retention policies also remove older records. Therefore, failing to find demo-42 in one signal does not prove the request never occurred. Choose the least sensitive evidence capable of answering the question: counts for prevalence, an event for a specific outcome, and spans for a request path. Avoid placing credentials or private payloads in identifiers and diagnostic notes.',
        ],
      },
    ],
    visuals: [
      {
        type: 'timeline',
        title: 'demo-42: a timed failure path',
        alt: 'A 30-to-180 ms storage call lies inside the 0-to-200 ms request.',
        caption: 'Synthetic events, not proportional spacing. The 150 ms storage span is already inside the 200 ms request.',
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
        'Write the aggregate 20 failures among 1000 requests and calculate the percentage. Label its five-minute population.',
        'Create one fictional event: demo-42, storage timeout. Keep request contents and credentials out of it.',
        'Draw the four trace events and calculate parent and child durations. Show the child inside the parent.',
        'Write one question each signal answers, then one reason a missing log or trace would not prove an operation never occurred.',
      ],
      notice: 'The metric gives prevalence, the log names an event, and the trace locates 150 ms of work within a 200 ms request.',
      troubleshooting: 'If you total 350 ms, remove the double-counted child interval; if you infer CPU time, mark waiting and missing spans as unresolved.',
    },
    recall: {
      prompt: 'A daily failure count rises, but you need to know which dependency delayed one request. What additional signal fits?',
      hint: 'The required evidence must preserve a connected path and timing.',
      answer: 'A trace can connect dependency intervals, with correlated logs explaining events. An aggregate cannot reconstruct one request; missing spans still limit the conclusion.',
    },
    quiz: {
      question: 'A 150 ms storage span is inside a 200 ms request span. What elapsed request duration is established?',
      options: ['200 ms, with the child already included.', '350 ms, by adding parent and child.', '150 ms, because only dependency time counts.'],
      correctIndex: 0,
      explanation: 'A parent duration includes its contained child interval. Summing nested spans double-counts time, while using only the child omits other request work.',
    },
    takeaway: 'Use aggregates for patterns, logs for events, and traces for connected timing, without exceeding their collection boundaries.',
    sourceNote: 'The inherited references ground signal selection. Counts, identifiers, and trace times are synthetic, without customer data.',
  },
  {
    id: 'tech-037',
    outcome: 'Define an SLI population and measurement boundary before interpreting its success percentage.',
    scene: 'A report-opening dashboard misses user attempts that never reach the measured server.',
    sections: [
      {
        title: 'A percentage begins with eligible events',
        paragraphs: [
          'A report-opening dashboard shows 99 percent success while users describe more failures. A service level indicator, or SLI, measures a defined aspect of service behavior. For an event-based ratio, eligible events form the denominator and good events form the numerator. The denominator is the full counted population; the numerator is the subset meeting the success rule. Both must use the same observation boundary and time window. An apparently precise percentage can still leave out relevant attempts if the chosen measurement point never observes them.',
        ],
      },
      {
        title: 'Compare server requests with user attempts',
        paragraphs: [
          'In a hypothetical five-minute period, users make 1000 report-opening attempts with no retries. Only 900 reach the measured server. Of those, 891 return the correct report within two seconds, the chosen good-event rule; nine do not. The server-side ratio is 891 divided by 900, or 99 percent. Counting all 1000 user attempts gives 89.1 percent good outcomes because the 100 pre-server failures also belong to that population. Neither arithmetic calculation is wrong. The mismatch comes from what each measurement includes, and only one describes all stated user attempts.',
        ],
      },
      {
        title: 'Define the outcome before the target',
        paragraphs: [
          'A service level objective, or SLO, is the chosen target for an indicator over a stated window, not the observation itself. Decide whether the intended promise concerns server requests or user operations before selecting the target. Real retries complicate counting because several requests can belong to one user action. You need a documented grouping rule if measuring operations, and a collection method that can observe early failures. Also state how invalid requests, timeouts, and missing telemetry are treated. A high ratio cannot demonstrate outcomes excluded from its denominator, however attractive its dashboard color.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'The same 891 good results, different populations',
        alt: 'Server-only measurement is 891 of 900, or 99 percent; all user attempts are 891 of 1000, or 89.1 percent.',
        caption: 'Invented five-minute sample with no retries. Good means the correct report within two seconds; 100 attempts never reach the server.',
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
        'Write 1000 user attempts, 100 failing before the server, and 900 reaching it. Assume no retries.',
        'Mark 891 reached attempts good and nine not good under the correct-report-within-two-seconds rule.',
        'Calculate both ratios and label their denominators. Reconcile all attempts into good, server-observed bad, and early-failure groups.',
        'Add a hypothetical retry and write what grouping decision is now needed before treating requests as user operations.',
      ],
      notice: 'The groups total 1000: 891 good, nine server-observed bad, and 100 early failures. Measurement scope explains the ratio difference.',
      troubleshooting: 'If you divide good user operations by individual requests after adding retries, choose one population and apply it to both counts.',
    },
    recall: {
      prompt: 'An upload SLI counts only completed requests and omits timeouts. What question should be resolved before trusting its success ratio?',
      hint: 'Ask where unsuccessful eligible attempts disappeared from the denominator.',
      answer: 'Determine whether timed-out attempts belong to the promised upload outcome and how they are observed and classified. Excluding them can hide user failures. The numerator and denominator must match the stated operation population and window.',
    },
    quiz: {
      question: 'Why can the server show 99 percent while the stated user success ratio is 89.1 percent?',
      options: ['Percentages cannot be compared when they share a numerator.', 'The server denominator omits 100 attempts that failed before reaching it.', 'The two-second good-event rule necessarily changed.'],
      correctIndex: 1,
      explanation: 'Both use 891 good outcomes and the same rule. The population boundary changes from 900 server requests to 1000 user attempts.',
    },
    takeaway: 'Define eligible events, good outcomes, window, and observation boundary before interpreting an SLI or choosing its target.',
    sourceNote: 'The inherited SLO reference grounds indicator design. Ratios and the two-second rule are hypothetical, not recommended targets or measured reliability.',
  },
  {
    id: 'tech-038',
    outcome: 'Read latency percentiles as positions in a defined distribution rather than averages or per-user promises.',
    scene: 'An image-search release has many quick requests and one slow result hidden by an average.',
    sections: [
      {
        title: 'An average does not show every wait',
        paragraphs: [
          'An image-search dashboard reports a mean response time of 210 milliseconds, but one user waits two seconds. A mean adds all measured durations and divides by the number of observations. It can hide the shape of the distribution, the collection of different values and how often they occur. A percentile instead identifies a position after sorting those values. The p95 is a threshold associated with the lower 95 percent of observations under the chosen estimation method. It is not the duration experienced by every user.',
        ],
      },
      {
        title: 'Calculate a small distribution explicitly',
        paragraphs: [
          'Consider 20 completed requests in one fictional sample: eighteen take 100 milliseconds, one takes 400, and one takes 2000. The sum is 4200 milliseconds, giving a mean of 210. For this exercise, use nearest-rank percentiles: multiply the percentile fraction by the count and round the rank upward. For p95, 0.95 times 20 is 19, so select the nineteenth sorted observation, 400 milliseconds. The maximum remains 2000. The p95 does not tell you how far the final observation lies above it; the distribution supplies that additional information.',
        ],
      },
      {
        title: 'Preserve population and resolution',
        paragraphs: [
          'A fleet percentile cannot generally be obtained by averaging each instance percentile. Each summary has already discarded most of its distribution, and instances can have different request counts. Combine underlying observations or compatible distribution summaries, such as histograms with known bucket boundaries, using an appropriate method. Histograms count observations in value ranges, so coarse buckets limit precision. Also state the time window and which requests are included. Fast failures and omitted timeouts can distort an apparently healthy latency chart. With small samples, moving one observation changes a tail rank substantially, so avoid presenting estimated thresholds as exact universal user experiences.',
        ],
      },
    ],
    visuals: [
      {
        type: 'bars',
        title: 'Three summaries of the same 20 requests',
        alt: 'Mean is 210 milliseconds, nearest-rank p95 is 400, and the maximum is 2000.',
        caption: 'Synthetic sample: eighteen 100 ms, one 400 ms, one 2000 ms. Bars are alternative summaries, not components to add; p95 uses nearest rank.',
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
        'Write ten durations: eight values of 50 ms, one of 100 ms, and one of 600 ms. Sort them.',
        'Add the durations and divide by ten to calculate the mean. Keep the maximum separate.',
        'Calculate nearest-rank p90 by multiplying 0.90 by ten and rounding upward. Select that ranked value.',
        'Write which user experience the percentile does not describe, and why averaging two instance percentiles would lose population information.',
      ],
      notice: 'The mean is 110 ms, p90 is 100 ms, and the maximum is 600 ms. None describes every observation.',
      troubleshooting: 'If p90 becomes 90 ms, select a ranked observation instead of taking 90 percent of the mean or maximum.',
    },
    recall: {
      prompt: 'Two servers show p95 values, but one handled ten requests and the other ten thousand. Can their average supply the fleet p95?',
      hint: 'A percentile value does not retain the underlying counts and distribution shape.',
      answer: 'No. You need appropriately combined observations or compatible distribution data. Averaging the two thresholds neither reconstructs the fleet ordering nor accounts for the populations behind them.',
    },
    quiz: {
      question: 'In the 20-request example, p95 is 400 ms. What else can still be true?',
      options: ['Every user waited exactly 400 ms.', 'The maximum must be close to 400 ms.', 'One observation took 2000 ms despite the lower p95.'],
      correctIndex: 2,
      explanation: 'The selected percentile is a position in the sorted sample, not an upper bound on every request or a description of the remaining tail.',
    },
    takeaway: 'Percentiles need a population and estimation method; combine distributions rather than averaging their thresholds.',
    sourceNote: 'The inherited monitoring references ground latency-distribution interpretation. The tiny dataset and nearest-rank method are explicit exercise choices, not production precision claims.',
  },
  {
    id: 'tech-039',
    outcome: 'Choose counter or gauge semantics and bounded labels for an operational metric.',
    scene: 'An archive-indexing dashboard needs completion rate and current backlog without per-request metric labels.',
    sections: [
      {
        title: 'A total and a current value mean different things',
        paragraphs: [
          'An archive-indexing dashboard displays completed jobs and pending jobs. A counter accumulates events and normally increases until a reset, such as a process restart. A gauge reports a current value that can rise or fall, such as the number waiting in a queue. The counter answers how many completions have accumulated within its lifetime. The gauge answers how many jobs are pending now. Calling either raw value jobs per second would confuse quantities. A rate needs a change in event count divided by elapsed time.',
        ],
      },
      {
        title: 'Compute a rate and preserve resets',
        paragraphs: [
          'Suppose the completion counter reads 1000 at 12:00 and 1060 at 12:01, with no reset between samples. Sixty completions in sixty seconds gives an average of one completion per second. Queue depth falls from 24 to 12 during that minute, but this does not prove only twelve jobs completed: arrivals can occur too. If the counter later drops to five after restart, a raw subtraction from the earlier lifetime produces a misleading negative difference. Rate calculation needs reset-aware handling and enough observation context; samples around a reset can still omit events.',
        ],
      },
      {
        title: 'Labels create separate series',
        paragraphs: [
          'Labels divide a metric into time series, sequences of measurements sharing the same label values. Three route names and two outcome classes allow up to six observed combinations per instance for a counter. Adding an unbounded request identifier can create a separate series for every operation, increasing storage and query work while making aggregates harder to manage. Keep dimensions limited and useful, such as a small stable route set and success or failure. Individual operation identifiers belong in appropriately protected event logs or traces when needed. They are not suitable substitutes for deliberate aggregate dimensions.',
        ],
      },
    ],
    visuals: [
      {
        type: 'comparison',
        title: 'Choose the representation from the question',
        alt: 'Completion counters, queue gauges, and label choices answer different metric questions.',
        caption: 'Invented metrics, with no counter reset during the measured minute. Label combinations imply possible series, not measured storage cost.',
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
        'Copy the counter samples 1000 and 1060, sixty seconds apart. Calculate the completion increase and average rate.',
        'Write queue depths 24 and 12 as gauge samples. Explain why their difference does not count all departures.',
        'Add a later counter value of five and annotate process restart. Mark raw cross-reset subtraction unsuitable without reset handling.',
        'Design labels using three named routes and success or failure. Count possible combinations and leave individual request identifiers out.',
      ],
      notice: 'You have one rate, one current backlog, and a bounded label plan. The measurements answer different operational questions.',
      troubleshooting: 'If the counter total is called a current rate, add two timestamps. If queue change becomes completions, account for arrivals too.',
    },
    recall: {
      prompt: 'Why is labeling a slow-search metric with every user search phrase problematic?',
      hint: 'Think about both the number of possible values and their sensitivity.',
      answer: 'Phrases are unbounded and can contain private content. Prefer bounded aggregate dimensions, using access-controlled, minimized event evidence when investigating individual operations.',
    },
    quiz: {
      question: 'Which measurement directly fits how many archive jobs are waiting now?',
      options: ['A queue-depth gauge.', 'The lifetime completion counter without timestamps.', 'One new metric series for every job identifier.'],
      correctIndex: 0,
      explanation: 'Queue depth is a current state that rises and falls. A cumulative total and per-operation identifiers do not provide the same bounded measurement.',
    },
    takeaway: 'Use counters for accumulated events, gauges for current state, and bounded labels for useful aggregate comparisons.',
    sourceNote: 'The inherited monitoring reference grounds metric and label semantics. Counts are illustrative, not product performance claims.',
  },
  {
    id: 'tech-040',
    outcome: 'Pair an external result check with internal evidence and verify that both observations are fresh.',
    scene: 'A released report service returns an empty result while an older internal health card remains green.',
    sections: [
      {
        title: 'A running process is not the whole user outcome',
        paragraphs: [
          'At 08:15, a report-opening check receives an empty result even though an internal dashboard still shows the application up. Black-box monitoring observes externally visible behavior, such as a controlled client retrieving an expected report. White-box monitoring inspects internal state, such as process liveness or queue depth. A synthetic check is an intentionally constructed operation with known input and expectations. These perspectives cover different boundaries. A process can be running while its route is unreachable, its dependencies fail, or its response content is wrong.',
        ],
      },
      {
        title: 'Check the result, not only the status family',
        paragraphs: [
          'Suppose a fictional report fixture should return ten rows. At 08:15, an external checker receives HTTP 200 with zero rows. HTTP is the web request-response protocol, and 200 reports success according to the responding endpoint semantics. The application result still fails the fixture expectation. The check has found a user-facing symptom along its tested route, not identified whether storage, application logic, or configuration caused it. Internal dependency errors or queue evidence can help explain the symptom. Checking only that a process exists would miss this incorrect-content case.',
        ],
      },
      {
        title: 'Old green observations are not current evidence',
        paragraphs: [
          'Now inspect the internal card timestamp: its last up value was collected at 08:10, five minutes earlier. If fresh collection was expected each minute, the card cannot establish current liveness. The monitoring pipeline, the path that collects and displays observations, might itself have stopped updating. Even a fresh up value would not prove the ten-row result. Record observation time and expected cadence for both signals. A passing external check is also bounded by its location, inputs, permissions, and schedule; it cannot certify every user journey. Use complementary checks and preserve their limits instead of declaring the whole service healthy from one green indicator.',
        ],
      },
    ],
    visuals: [
      {
        type: 'spatial',
        title: 'A report path and a monitoring path',
        alt: 'An external checker visits the report app through a gateway; storage and internal metrics follow separate paths.',
        caption: 'Hypothetical 08:15 observations: zero instead of ten report rows and a five-minute-old up sample. Cause remains unknown.',
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
        'Write expected report rows: ten. Record the fictional 08:15 result: HTTP 200, zero rows.',
        'Write an internal result: up at 08:10, expected once per minute. Mark its age at 08:15.',
        'Draft a status note separating incorrect report content, stale internal evidence, and the still-unknown cause.',
        'Add dependency-result and collection-freshness questions. Keep the exercise on paper; do not probe a service.',
      ],
      notice: 'The report result fails and internal evidence is stale; neither establishes every process or user outcome.',
      troubleshooting: 'If 200 or green means healthy, restore the expected content and observation timestamp as separate acceptance checks.',
    },
    recall: {
      prompt: 'A synthetic download works from one office while remote users fail. What does its success leave untested?',
      hint: 'A checker observes a particular path, input, identity, and time.',
      answer: 'Other locations, routes, permissions, inputs, and times remain untested. Compare affected paths with internal evidence instead of extending one passing sample to everyone.',
    },
    quiz: {
      question: 'Which pair most directly complements the report service checks?',
      options: ['Two process-up charts without timestamps.', 'An external expected-content check plus fresh internal dependency evidence.', 'A successful status code without validating report content.'],
      correctIndex: 1,
      explanation: 'The pair combines a user-facing outcome with diagnostic state. Status alone misses wrong content, and untimed liveness charts can be stale.',
    },
    takeaway: 'Check external outcomes, investigate with internal signals, and verify the freshness and coverage of both.',
    sourceNote: 'The inherited references ground complementary monitoring. Report fixtures, paths, and timestamps are original synthetic examples.',
  },
]