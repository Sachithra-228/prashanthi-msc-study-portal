/* IT5070 Internet of Things – lecture notes (from the lecturer's slides, Prof. Pradeep Abeygunawardhana, SLIIT).
   Open-book exam: the notes are written so they can be scanned quickly. */
DATA.mod("IT5070").lectures = [
{
  id: 1, pdf: "pdfs/it5070/lectures/lecture-01.pdf", pages: 21,
  title: "Introduction to IoT",
  desc: "What IoT is, how it works end to end, key components, communication technologies, application domains, benefits, challenges and future trends.",
  sections: [
    { h: "What is IoT?", items: [
      "The <b>Internet of Things</b> is a network of <b>physical objects (“things”) embedded with sensors, software and connectivity</b> that collect and exchange data over the internet with minimal human intervention.",
      "<b>Key characteristics:</b> connectivity, smart sensing, real-time data, automation/intelligence, scalability, interoperability.",
      "IoT bridges the physical and digital worlds to enable smarter decisions, automation and real-time insight."
    ]},
    { h: "How IoT works (the data flow)", items: [
      "<b>Sense → Connect → Process/Analyse → Act (feedback).</b> Devices/sensors collect data → data is sent through a network → processed at the <b>edge or in the cloud</b> and visualised → insights trigger actions or alerts, which are sent back to actuators/devices.",
      "<b>Six components:</b> (1) devices/sensors/actuators, (2) connectivity, (3) data processing (edge/cloud), (4) data management and storage, (5) applications and user interface (dashboards, mobile apps), (6) security and privacy.",
      "<b>Layered view (5 layers):</b> Perception → Network → Processing → Application → Business."
    ]},
    { h: "Communication technologies", items: [
      "<b>Short range:</b> Bluetooth / BLE, Wi-Fi, Zigbee, NFC. <b>Long range / LPWAN:</b> LoRaWAN, NB-IoT, Sigfox. <b>Cellular:</b> 4G/5G. <b>Messaging protocols:</b> MQTT, CoAP, HTTP, AMQP.",
      "Choose by <b>range, power, data rate and cost</b> (e.g. LoRaWAN for long-range low-power sensors, Wi-Fi for high-rate indoor devices)."
    ]},
    { h: "Application domains and examples", items: [
      "<b>Smart home</b> (thermostat, lighting, locks), <b>healthcare</b> (wearables, remote patient monitoring), <b>industrial IoT / Industry 4.0</b> (predictive maintenance), <b>smart agriculture</b> (soil sensors, irrigation), <b>smart cities</b> (traffic, parking, waste, street lights), <b>transportation and logistics</b> (fleet tracking), <b>energy and utilities</b> (smart grid, metering), <b>retail</b> (inventory, personalised marketing).",
      "<b>Benefits:</b> efficiency, cost savings, real-time monitoring, better decisions, safety and security, convenience, automation."
    ]},
    { h: "Challenges and future trends", items: [
      "<b>Challenges:</b> security and privacy, interoperability, data volume and management, power/resource constraints, standardisation, scalability, high initial cost.",
      "<b>Trends:</b> edge AI, digital twins, blockchain-based security, 5G, self-powered sensors, cross-silo interoperability (Matter standard), quantum-resilient cryptography, sustainability."
    ]}
  ],
  terms: [
    ["IoT", "Network of physical objects with sensors, software and connectivity that exchange data."],
    ["Sensor", "Device that measures a physical quantity and produces a signal."],
    ["Actuator", "Device that acts on the physical world (motor, relay, LED) based on a command."],
    ["Gateway", "Device that connects IoT devices to the network/cloud and translates protocols."],
    ["LPWAN", "Low-power wide-area network (LoRaWAN, NB-IoT, Sigfox)."],
    ["Edge computing", "Processing data close to where it is generated."],
    ["Digital twin", "Live virtual model of a physical asset fed by IoT data."],
    ["Interoperability", "Ability of devices from different vendors to work together."]
  ]
},
{
  id: 2, pdf: "pdfs/it5070/lectures/lecture-02.pdf", pages: 23,
  title: "IoT Architecture",
  desc: "The 3-, 4- and 5-layer reference architectures, a comparison of them, scalability, security-by-design and digital twins.",
  sections: [
    { h: "The three architectures", items: [
      "<b>3-layer:</b> <b>Perception</b> (sensors, actuators, RFID – data acquisition and physical action) → <b>Network</b> (Wi-Fi, 4G/5G, LoRaWAN, Zigbee, gateways, protocol translation, routing) → <b>Application</b> (dashboards, mobile apps, analytics, business logic). <i>Strength:</i> simple and quick for small deployments. <i>Limitation:</i> processing, storage and logic are crammed into the application layer – bottlenecks, poor separation of concerns.",
      "<b>4-layer:</b> adds a <b>Processing (middleware) layer</b> for data aggregation, filtering, storage and analytics. <i>Strength:</i> decouples data management from business logic; data can be reused by many applications; better security. <i>Limitation:</i> device management and security still bundled; business logic not fully separated.",
      "<b>5-layer:</b> Perception, <b>Transport</b>, Processing, Application and a <b>Business layer</b> (business models, workflows, decision-making, ROI, governance). <i>Strength:</i> clear separation of technical operations from business strategy; supports governance and compliance; enterprise scale. <i>Limitation:</i> higher complexity; needs mature organisational processes."
    ]},
    { h: "Comparison and choosing a model", items: [
      "<table><tr><th></th><th>3-layer</th><th>4-layer</th><th>5-layer</th></tr><tr><td>Scale</td><td>Prototype / small</td><td>Medium</td><td>Enterprise / industrial</td></tr><tr><td>Separation of concerns</td><td>Basic</td><td>Moderate</td><td>Full</td></tr><tr><td>Analytics</td><td>Minimal</td><td>Structured pipelines</td><td>Full business intelligence</td></tr><tr><td>Security</td><td>Often an afterthought</td><td>Improved</td><td>First-class security and governance</td></tr><tr><td>Design effort</td><td>Low</td><td>Moderate</td><td>High</td></tr></table>",
      "<b>Selection advice:</b> choose the simplest model that meets today’s needs and add layers when bottlenecks appear; a 3-layer model may suffice for a prototype, move to 4- or 5-layer as scale and complexity grow. For the development of the industry the <b>5-layer model</b> is the most complete and best suited to large, governed deployments.",
      "<b>Scalability:</b> the 3-layer model scales poorly beyond thousands of devices (application layer bottleneck). 4/5-layer models isolate the processing layer so aggregation, analytics and storage scale horizontally without affecting device connectivity or business logic. Modern IoT distributes processing across <b>device – edge – fog – cloud</b>."
    ]},
    { h: "Trends: security-by-design, edge AI, 5G, digital twins", items: [
      "<b>Security-by-design:</b> end-to-end encryption across the device lifecycle (onboarding to decommissioning), zero-trust, hardware-rooted identity – authenticate every device, gateway and cloud endpoint.",
      "<b>Edge-native / AIoT:</b> AI models run on gateways/devices – large reduction in backhaul cost, sub-millisecond response, offline autonomy. <b>5G-Advanced</b> enables real-time control and ultra-low-latency applications.",
      "<b>Digital twins:</b> continuously updated virtual copies connected to live IoT streams for predictive maintenance, failure simulation and optimisation."
    ]}
  ],
  terms: [
    ["3-layer architecture", "Perception, Network, Application."],
    ["4-layer architecture", "Adds a Processing (middleware) layer."],
    ["5-layer architecture", "Perception, Transport, Processing, Application, Business."],
    ["Perception layer", "Sensors, actuators and tags – collects data and acts on the world."],
    ["Network / transport layer", "Moves data from devices to processing (gateways, protocols)."],
    ["Processing layer", "Aggregation, storage, analytics and AI/ML; middleware."],
    ["Business layer", "Business models, decisions, ROI and governance."],
    ["Separation of concerns", "Each layer has one responsibility, so it can scale and change independently."],
    ["Security-by-design", "Security built in from the start, not added later."]
  ]
},
{
  id: 3, pdf: "pdfs/it5070/lectures/lecture-03.pdf", pages: 45,
  title: "Perception Layer: Sensors",
  desc: "Why sensors are needed, what can be sensed, types of sensors (active/passive, proximity, motion, environmental), outputs and errors, and short-range tags (NFC, RFID).",
  sections: [
    { h: "Why sensors? What can be sensed?", items: [
      "Sensors give <b>awareness of the surroundings</b>, allow interaction with the environment, protect equipment (safety, damage prevention) and let a machine seek goals.",
      "<b>Quantities:</b> light (presence, intensity, colour), sound, heat (temperature), chemicals (gas concentration), object proximity (presence, distance), orientation/position (pitch, roll, yaw, coordinates).",
      "For any sensor ask: <b>what does it measure, what is the output (analog/digital), where is it used, what can affect the measurement (errors)?</b>"
    ]},
    { h: "Common sensors", items: [
      "<b>Environmental:</b> temperature, humidity, pressure, gas / CO₂ / air-quality, smoke, flame, rain, soil moisture, water level, flow, pH, turbidity.",
      "<b>Motion/position:</b> PIR motion, accelerometer (linear acceleration), gyroscope (angular velocity), magnetometer, GPS/GNSS, vibration.",
      "<b>Others:</b> light/LDR, sound/microphone, heart-rate, proximity, ultrasonic distance.",
      "Application examples: smart agriculture (soil moisture, temperature), smart home (PIR, light), disaster monitoring (water level, rain), health monitoring (heart rate), smart city (air quality)."
    ]},
    { h: "Active vs passive; proximity sensing", items: [
      "<b>Infrared:</b> <i>active</i> – emits IR and detects reflections (often encoded pulses; poor with dark, flat-coloured objects). <i>Passive (PIR / pyro-electric)</i> – detects IR heat emitted by people/animals; used in security and motion detection.",
      "<b>Ultrasonic (sonic):</b> <i>active</i> – emits sound pulses and times the echo (~1 ft per ms), long range (30–50 ft), relatively simple, analog output, directional, not every surface reflects, can be noisy. <i>Passive</i> – listens to ambient sound, ADC measures the signal.",
      "<b>Other types:</b> resistive, capacitive (detects material density), inductive (metals, short range cm/mm), visual/camera, colour (emit R,G,B and measure response), magnetic, orientation (rate gyro, accelerometer, compass), voltage, chemical.",
      "<b>Comparison hint (ultrasonic vs IR vs LiDAR):</b> ultrasonic – cheap, good range, affected by temperature/noise and soft surfaces; IR – cheap, short range, affected by sunlight/colour; LiDAR – highest accuracy and range, 3D mapping, unaffected by ambient light but expensive and affected by fog/rain/dust."
    ]},
    { h: "Short-range tags and links", items: [
      "<b>NFC:</b> short-range radio (≈4–10 cm, max 20 cm), 13.56 MHz, 106/212/424 kbps, two-way; builds on RFID; used for contactless payment, e-tickets, smart posters.",
      "<table><tr><th></th><th>NFC</th><th>RFID</th><th>Bluetooth</th><th>Wi-Fi</th></tr><tr><td>Range</td><td>10 cm</td><td>3 m</td><td>100 m</td><td>100 m</td></tr><tr><td>Frequency</td><td>13.56 MHz</td><td>varies</td><td>2.4 GHz</td><td>2.4/5 GHz</td></tr><tr><td>Direction</td><td>two-way</td><td>one-way</td><td>two-way</td><td>two-way</td></tr><tr><td>Use</td><td>payments, tickets</td><td>tracking items</td><td>phone ↔ peripherals</td><td>wireless internet</td></tr></table>"
    ]}
  ],
  terms: [
    ["Active sensor", "Emits energy (IR, ultrasound) and senses the reflection."],
    ["Passive sensor", "Only senses energy that already exists (e.g. PIR, microphone)."],
    ["PIR sensor", "Passive infrared sensor that detects heat from moving people/animals."],
    ["Ultrasonic sensor", "Measures distance from the echo time of sound pulses."],
    ["LiDAR", "Laser-based ranging that gives accurate distance and 3D maps."],
    ["Accelerometer / gyroscope", "Measure linear acceleration / angular velocity."],
    ["LDR", "Light-dependent resistor; resistance changes with light."],
    ["NFC", "Short-range (≈ 4 cm) two-way radio at 13.56 MHz."],
    ["RFID", "Radio tags used for identification and tracking."],
    ["ADC", "Analog-to-Digital Converter: turns a sensor’s analog voltage into digital numbers."]
  ]
},
{
  id: 4, pdf: "pdfs/it5070/lectures/lecture-04.pdf", pages: 37,
  title: "Perception Layer: Actuators",
  desc: "Actuator types, why intelligence needs actuation, LEDs, relay circuits, DC/AC/stepper/linear/servo motors and how to compare them.",
  sections: [
    { h: "Why actuators?", items: [
      "A system that only sends an alert is not truly intelligent – it should <b>act</b> (e.g. greenhouse at 35 °C: sensor → controller → fan). <b>Sensor → Controller → Actuator</b> closes the loop; sensor → cloud → human → switch is slow.",
      "<b>Actuator types:</b> electrical (motors, solenoids), mechanical (valves, gears), hydraulic/pneumatic (pistons, pumps), thermal (heaters, coolers), electromagnetic (relays, speakers). Examples in IoT: LED/light sources, relays/solenoid coils, electric motors.",
      "<b>Smart classroom example:</b> sensors – temperature, motion, light; actions – turn ON AC, open blinds, turn ON lights, display warning."
    ]},
    { h: "Relay circuit", items: [
      "A <b>relay</b> is an electromagnetic switch that opens/closes a circuit electromechanically (or electronically). A <b>small control current</b> (from the microcontroller, via a transistor/driver) energises the coil, the magnet pulls the armature and <b>switches a much larger load current</b> through the contacts (COM, NO, NC). It gives <b>electrical isolation</b> between the low-voltage controller and the mains load; a flyback diode across the coil protects the transistor.",
      "<b>Use:</b> controlling lamps, fans, pumps and heaters from a microcontroller. For a green/amber/red lighting sequence: microcontroller GPIO → transistor/relay module per colour; a timer in code switches each relay in turn (LEDs can be driven directly through a series resistor)."
    ]},
    { h: "Motors", items: [
      "<b>Brushed DC motor:</b> current in a coil in a magnetic field gives torque (Fleming’s left-hand rule). Cheap, simple, easy speed control by voltage; but brushes cause noise, sparking, wear and inefficiency. Toys, small drills.",
      "<b>Brushless DC (BLDC):</b> electronic commutation. Higher efficiency, long life, low maintenance, quiet; higher cost, needs a controller. Cooling fans, disc drives, electric vehicles.",
      "<b>AC motor:</b> stator coils with alternating current produce a rotating field; rotor follows. Industrial pumps and fans.",
      "<b>Stepper motor:</b> brushless DC motor that divides a rotation into equal <b>steps</b>; position and speed controlled <b>open loop</b> (no feedback sensor needed). Precise angle control – printers, plotters, 3D printers, medical equipment. Types: variable reluctance, permanent magnet, hybrid.",
      "<b>Linear motor / linear actuator:</b> produces straight-line force instead of rotation – sliding doors, positioning tables, valves.",
      "<b>Servo motor:</b> motor plus position feedback sensor and a controller for precise angle, velocity and acceleration control – robot arms, antennas."
    ]},
    { h: "Comparing actuators for IoT applications", items: [
      "<table><tr><th>Actuator</th><th>Precision</th><th>Speed</th><th>Control</th><th>Energy efficiency</th><th>Best for</th></tr><tr><td>Stepper</td><td>High (step angle), holds position</td><td>Low–medium</td><td>Simple open loop</td><td>Moderate (draws current when holding)</td><td>3D printers, camera/blinds positioning, dosing pumps</td></tr><tr><td>DC (brushed)</td><td>Low without feedback</td><td>High</td><td>Voltage/PWM, easy</td><td>Moderate</td><td>Fans, toys, simple pumps</td></tr><tr><td>Linear actuator</td><td>Medium–high</td><td>Low–medium</td><td>Needs limit switches/feedback</td><td>Moderate</td><td>Window/door openers, greenhouse vents, adjustable furniture</td></tr><tr><td>Servo</td><td>High with feedback</td><td>Medium</td><td>Needs controller</td><td>Good</td><td>Robotics, flaps, valves</td></tr></table>"
    ]}
  ],
  terms: [
    ["Actuator", "Converts a control signal into physical action."],
    ["Relay", "Electromagnetic switch where a small current controls a large load; gives isolation."],
    ["Brushed DC motor", "Simple, cheap, noisy, brushes wear out."],
    ["Brushless DC motor", "Electronic commutation; efficient and long-lived but needs a controller."],
    ["Stepper motor", "Moves in equal steps; precise open-loop position control."],
    ["Servo motor", "Motor with position feedback and controller."],
    ["Linear actuator / motor", "Produces linear (straight-line) motion."],
    ["Torque", "Rotational equivalent of force."],
    ["Open-loop vs closed-loop", "Control without feedback vs control using sensor feedback."]
  ]
},
{
  id: 5, pdf: "pdfs/it5070/lectures/lecture-05.pdf", pages: 49,
  title: "MQTT and the Publish/Subscribe Model",
  desc: "MQTT basics, publish/subscribe and decoupling, broker and clients, topics and wildcards, QoS levels, retained messages, brokers and use cases.",
  sections: [
    { h: "What is MQTT?", items: [
      "<b>MQTT (Message Queuing Telemetry Transport)</b> is a lightweight, open, simple <b>client–server publish/subscribe</b> messaging protocol over <b>TCP/IP</b>, designed for constrained devices and low-bandwidth, unreliable networks (M2M and IoT). Invented in 1999 by Andy Stanford-Clark (IBM) and Arlen Nipper to monitor oil pipelines over satellite with minimal battery and bandwidth.",
      "Requirements: simple implementation, quality-of-service delivery, lightweight and bandwidth-efficient, data-agnostic (any payload), continuous sessions."
    ]},
    { h: "Publish/subscribe model", items: [
      "A <b>publisher</b> sends a message to a <b>topic</b> on a <b>broker</b>; <b>subscribers</b> to that topic receive it. Publisher and subscriber never talk directly.",
      "<b>Three kinds of decoupling:</b> <b>space</b> (they don’t need to know each other’s IP/port), <b>time</b> (they need not be running at the same time), <b>synchronisation</b> (operations are not blocked while publishing or receiving).",
      "<b>Broker:</b> receives all messages, filters them by topic, decides who is interested and forwards them; can handle millions of clients. <b>Client:</b> any device or server with an MQTT library; can be publisher, subscriber or both.",
      "<b>Example:</b> a temperature sensor publishes <code>myhome/groundfloor/kitchen/temperature</code>; the phone app and a heating controller subscribe to it. Clients behind NAT work because they <b>initiate</b> the connection (CONNECT) and the broker keeps it open."
    ]},
    { h: "Messages: connect, publish, subscribe", items: [
      "<b>CONNECT / CONNACK</b> – client connects to the broker. <b>PUBLISH</b> – carries the topic, payload, <b>QoS</b>, <b>retain flag</b>, packet identifier (QoS &gt; 0) and DUP flag (duplicate resend). <b>SUBSCRIBE / SUBACK</b> – subscribe to a list of topics (the broker returns a return code per topic). <b>UNSUBSCRIBE / UNSUBACK</b> – remove subscriptions.",
      "<b>Retain flag:</b> the broker stores the last message on a topic as the <i>last known good value</i> and sends it to any new subscriber immediately.",
      "<b>Topics:</b> UTF-8 strings with levels separated by <code>/</code>. <b>Wildcards (subscribe only):</b> <code>+</code> single level (<code>myhome/groundfloor/+/temperature</code>), <code>#</code> multi-level (<code>myhome/groundfloor/#</code>)."
    ]},
    { h: "Quality of Service (QoS)", items: [
      "<b>QoS 0 – at most once:</b> fire and forget, no acknowledgement; fastest, may be lost. <b>QoS 1 – at least once:</b> acknowledged with PUBACK; may be delivered more than once. <b>QoS 2 – exactly once:</b> four-step handshake PUBLISH → PUBREC → PUBREL → PUBCOMP; slowest, most reliable."
    ]},
    { h: "Brokers, who uses MQTT and why it is widely used", items: [
      "<b>Managed brokers</b> (AWS IoT Core, Azure IoT Hub) – no setup, auto-scale. <b>Self-hosted</b> (Mosquitto, HiveMQ, VerneMQ, EMQX, Mosca/Aedes) – you install, secure and scale them. Ports: 1883 (plain), <b>8883 (TLS)</b>, 8083/8084 WebSocket.",
      "<b>Why MQTT is widely used in IoT (vs HTTP / AMQP):</b> tiny header and small code footprint, low bandwidth and power, persistent connection with push (no polling), pub/sub decoupling and one-to-many, three QoS levels, retained messages and last-will for unreliable networks, scales to millions of devices.",
      "<b>Used in:</b> automotive, Industry 4.0, transport, smart home, entertainment, healthcare monitoring."
    ]}
  ],
  terms: [
    ["MQTT", "Lightweight publish/subscribe messaging protocol over TCP for IoT/M2M."],
    ["Publisher / subscriber", "Client that sends messages / client that receives messages on topics."],
    ["Broker", "Server that receives, filters and forwards messages by topic."],
    ["Topic", "UTF-8 string with / separated levels used to route messages."],
    ["Wildcards + and #", "Single-level and multi-level wildcard in a subscription."],
    ["QoS 0 / 1 / 2", "At most once / at least once / exactly once."],
    ["Retained message", "Last message stored by the broker for new subscribers."],
    ["Space, time and synchronisation decoupling", "Three dimensions of pub/sub decoupling."],
    ["Managed vs self-hosted broker", "Hosted service (AWS IoT Core) vs your own server (Mosquitto)."]
  ]
},
{
  id: 6, pdf: "pdfs/it5070/lectures/lecture-06.pdf", pages: 34,
  title: "Edge and Fog Computing",
  desc: "What edge computing is, the drivers, the telco, cloud-provider and appliance views, use cases and challenges, and how fog extends cloud computing.",
  sections: [
    { h: "Edge computing", items: [
      "<b>Idea:</b> push applications, data and computing power to the <b>edge of the network</b>, close to sensors, mobile devices and users. An early example is a CDN (e.g. Akamai) serving content from nearby servers.",
      "<b>Drivers:</b> <b>latency</b> (avoid the round trip to the cloud), <b>bandwidth</b> (filter/aggregate before sending), <b>privacy/security</b> (sensitive data stays local), <b>connectivity</b> (keep working when the link is down), <b>local dependencies</b> (processing near the point of interaction).",
      "<b>Diagram to draw:</b> Devices/sensors → edge nodes/gateways (local processing, filtering, caching) → (fog layer) → cloud (storage, heavy analytics, management) with data flowing up and decisions/control flowing back down."
    ]},
    { h: "Different views of the edge", items: [
      "<b>Telco view:</b> micro data centres at the base of cell towers; standards: Multi-access Edge Computing (MEC), Open Edge Computing, OpenFog; business model unclear (who pays?).",
      "<b>Cloud provider view:</b> CDN and IoT data processing/aggregation before the cloud – Azure IoT Edge, AWS CloudFront/Lambda@Edge, <b>AWS Greengrass</b> (run Lambda functions locally).",
      "<b>Appliance view:</b> a “data centre in a box” (edge gateways, smart routers; AWS Snowball Edge) – also for disconnected operations."
    ]},
    { h: "Use cases and challenges", items: [
      "<b>Uses:</b> data pre-processing, filtering and caching (cloud↔edge), real-time analytics (speech/face/image recognition), disconnected or field operations (military, medics, disaster, public safety), resource-challenged regions (village surrogates syncing to the cloud later).",
      "<b>Challenges:</b> hardware limits (edge AI chips), privacy, security of many distributed nodes, deciding what to run where (data and computation allocation at runtime), resource discovery, management at scale."
    ]},
    { h: "Fog vs edge (exam comparison)", items: [
      "<b>Fog computing</b> extends cloud computing with <b>intermediate processing layers between the cloud and the edge devices</b> (gateways, routers, local servers/micro data centres) – a hierarchy of nodes close to the network edge.",
      "<table><tr><th></th><th>Edge computing</th><th>Fog computing</th><th>Cloud</th></tr><tr><td>Location</td><td>On/next to the device or sensor (gateway)</td><td>Between edge and cloud (LAN/regional nodes)</td><td>Remote data centre</td></tr><tr><td>Latency</td><td>Lowest (ms)</td><td>Low</td><td>Highest</td></tr><tr><td>Scope</td><td>Single device or small cluster</td><td>Many devices/sites, coordinates nodes</td><td>Global</td></tr><tr><td>Compute/storage</td><td>Limited</td><td>Moderate</td><td>Large, elastic</td></tr><tr><td>Typical role</td><td>Real-time filtering and control</td><td>Aggregation, local analytics, orchestration</td><td>Long-term storage, big-data analytics, ML training</td></tr></table>"
    ]}
  ],
  terms: [
    ["Edge computing", "Processing close to where data is generated (device/gateway)."],
    ["Fog computing", "Intermediate layer(s) between edge devices and the cloud."],
    ["Latency", "Delay between an event and the response."],
    ["Backhaul", "Sending data from the edge to the core/cloud network."],
    ["CDN", "Content delivery network – servers close to users."],
    ["MEC", "Multi-access edge computing – edge servers in the telecom network."],
    ["AWS Greengrass", "Runs AWS Lambda and other code on local IoT devices."],
    ["Cloudlet / surrogate", "Small nearby computing node that serves devices."]
  ]
},
{
  id: 7, pdf: "pdfs/it5070/lectures/lecture-07.pdf", pages: 58,
  title: "IoT Application Models and Business Use-Cases",
  desc: "oneM2M horizontal vs vertical (pipe) architecture, common service functions, reference architectures, entity-based and domain-based models, and business use cases.",
  sections: [
    { h: "Vertical (pipe) vs horizontal architecture; oneM2M", items: [
      "<b>Vertical / “pipe” (silo):</b> one application + one network + one (or few) type of device, point-to-point communication. Result: fragmentation, duplicated platforms, little reuse – <b>why vertical business models do not perform well for IoT</b>: no economies of scale, high cost per use case, incompatible data models (Zigbee, DLMS…), hard to share data across industries, vendor lock-in.",
      "<b>Horizontal (common service layer):</b> applications share a <b>common service layer and network infrastructure</b>; multipoint communication; the same devices and back-ends serve many industries.",
      "<b>oneM2M</b> is a global standard for a <b>Common Service Layer</b>: a software layer between M2M applications and communication hardware/software that offers functions applications commonly need through <b>RESTful APIs</b>; objects are represented as <b>resources</b> with access-control policies. Standard bindings for HTTP, CoAP and MQTT.",
      "<b>Common Service Functions (CSF) provided by a Common Services Entity (CSE):</b> e.g. <b>registration</b>, <b>device management</b>, <b>data management and repository</b>, <b>discovery</b>, <b>subscription and notification</b>, <b>security (identity, authorisation, access control)</b>, <b>group management</b>, <b>communication management</b>, <b>location</b>, <b>service charging and accounting</b>. Entities: <b>AE</b> (application entity), <b>CSE</b>, <b>NSE</b> (network services entity); reference points Mca, Mcc, Mcn.",
      "<b>Why it matters:</b> combats fragmentation; standard APIs simplify development; lower CAPEX/OPEX; reuse across verticals; shorter time to market."
    ]},
    { h: "Reference models and architectures", items: [
      "<b>Why a reference architecture:</b> to tame complexity, achieve scalability and availability across heterogeneous platforms, support remote managed updates and manage identity/access for privacy.",
      "<b>ISO/IEC 30141 IoT Reference Architecture:</b> <b>Conceptual Model (CM)</b> – the common entities and relationships (physical entity, virtual/digital entity, IoT device with sensor/actuator/tag, gateway, users, networks) → <b>Reference Model (RM)</b> – the basis to define architecture views → <b>Architecture views</b> (functional, system, communication, information, usage). CM → RM → RA.",
      "<b>Entity-based IoT reference model:</b> organises the system around <b>entities</b> – physical entities, IoT devices (sensors, actuators, tags), IoT gateways, IoT users, networks, peer systems – and how they interact. Good for <b>device-centric, rich context modelling and fine-grained interactions</b> (what exists and how it connects).",
      "<b>Domain-based IoT reference model:</b> groups functions into six <b>domains</b>: <b>Physical Entity Domain (PED)</b>, <b>Sensing and Controlling Domain (SCD)</b>, <b>Resource and Interchange Domain (RID)</b>, <b>Application Service Domain (ASD)</b>, <b>Operations and Management Domain (OMD)</b> and <b>User Domain (UD)</b>, with cross-domain security, safety and trust. Good for <b>large, multi-stakeholder, cross-domain integration</b> and clear separation of responsibilities.",
      "Other architectures: IoT-A (European generic reference model), <b>ITU-T Y.2060</b> (application, service-support, network, device layers with management and security), AIOTI, <b>Industrial Internet Consortium</b> and <b>RAMI 4.0 / Industrie 4.0</b> (hierarchy, life-cycle and layer axes), Intel. Standardisation bodies: oneM2M, IPSO, AllSeen, OIC, Thread, OMA LWM2M, IEEE P2413."
    ]},
    { h: "IoT characteristics (RM)", items: [
      "<b>Service characteristics:</b> content-, location-, time-awareness; real-time capability; auto-configuration; self-description; service subscription; highly distributed. <b>Component characteristics:</b> composability, discoverability, modularity, shareability, unique identification. <b>Other:</b> data volume/velocity/veracity/variability/variety, heterogeneity, scalability, trustworthiness, safety, privacy and regulation compliance."
    ]},
    { h: "Business use-cases (IoT Analytics)", items: [
      "<b>1. Read-only remote asset monitoring</b> – simplest and most adopted; visualise data but no commands (Hindustan Coca-Cola replaced manual Excel reporting for bottling-line parameters).",
      "<b>2. IoT-based process automation</b> – upgrade manual/old automation for flexibility (Australian farmer used 20% less water with IoT irrigation).",
      "<b>3. Remote asset monitoring and control (read/write)</b> – also send commands; higher cost and security risk but pays back quickly (51% in &lt; 24 months; Schlumberger oilfield fluid monitoring over LTE).",
      "Further: predictive maintenance, asset tracking, condition monitoring with alarms, optimisation of supply chain, new data-driven business models."
    ]}
  ],
  terms: [
    ["Vertical (pipe) architecture", "One app–network–device silo, point to point; fragmented."],
    ["Horizontal architecture", "Shared common service layer used by many applications."],
    ["oneM2M", "Standard for a common M2M/IoT service layer with RESTful APIs."],
    ["CSE / CSF", "Common Services Entity / the Common Service Functions it provides."],
    ["AE / NSE", "Application Entity / Network Services Entity."],
    ["Conceptual model (CM)", "Abstract entities and relationships of IoT systems."],
    ["Reference model (RM)", "Basis to derive architecture views (entity-based or domain-based)."],
    ["Entity-based model", "Structured around entities: devices, gateways, users, physical entities."],
    ["Domain-based model", "Structured around six domains: PED, SCD, RID, ASD, OMD, UD."],
    ["ISO/IEC 30141", "IoT Reference Architecture standard."],
    ["Read-only vs read/write monitoring", "Observe only vs observe and control the asset remotely."]
  ]
},
{
  id: 8, pdf: null, pages: 0,
  title: "Exam Topics Beyond the Slides (supplementary)",
  desc: "Topics that the past papers ask about but that are not in the slide files provided: protocols compared, security, IoT platforms, embedded systems, cloud, data lifecycle. General knowledge – check against your own notes.",
  sections: [
    { h: "Application-layer protocols: HTTP vs MQTT vs AMQP (vs CoAP)", items: [
      "<table><tr><th></th><th>HTTP</th><th>MQTT</th><th>AMQP</th><th>CoAP</th></tr><tr><td>Model</td><td>Request/response</td><td>Publish/subscribe</td><td>Pub/sub + queues, routing</td><td>Request/response (REST-like)</td></tr><tr><td>Transport</td><td>TCP</td><td>TCP</td><td>TCP</td><td>UDP</td></tr><tr><td>Header / overhead</td><td>Heavy (text)</td><td>Very small (2 bytes min.)</td><td>Larger, binary</td><td>Small binary</td></tr><tr><td>QoS</td><td>None (TCP only)</td><td>0, 1, 2</td><td>At most/at least/exactly once, transactions</td><td>Confirmable/non-confirmable</td></tr><tr><td>Fit</td><td>Web, rich clients</td><td>Constrained devices, unreliable links</td><td>Enterprise messaging, reliability</td><td>Very constrained devices</td></tr><tr><td>Power/bandwidth</td><td>High</td><td>Low</td><td>Medium–high</td><td>Low</td></tr></table>",
      "<b>Why MQTT is the most widely used:</b> lightweight and battery-friendly; persistent connection with push (no polling); pub/sub decoupling and one-to-many; QoS levels, retained messages and last-will; works over unreliable networks and behind NAT; many brokers and managed cloud services (AWS IoT Core, Azure IoT Hub); scales to millions of clients."
    ]},
    { h: "IoT security", items: [
      "<b>Goals (CIA):</b> confidentiality, integrity, availability – plus authentication, authorisation, privacy and safety. IoT is hard to secure because of constrained devices, huge numbers, physical exposure, long life-time and weak defaults.",
      "<b>Threats:</b> malware/botnets (Mirai), ransomware, DDoS, eavesdropping and man-in-the-middle, spoofing/replay, firmware tampering, physical tampering and side-channel attacks, insecure default credentials, data leakage, <b>cyber-physical attacks</b> (taking control of actuators – valves, locks, medical devices, vehicles – with physical consequences).",
      "<b>Countermeasures:</b> secure boot and signed firmware with OTA updates, <b>hardware root of trust</b> (TPM/secure element, unique device identity), encryption (TLS/DTLS, end-to-end), strong authentication and certificates, change default passwords, network segmentation, firewalls, IDS/IPS, least privilege, logging and monitoring, patching, secure decommissioning.",
      "<b>Blockchain for IoT security:</b> distributed tamper-resistant ledger for device identity, secure firmware/update provenance, access-control and audit trails and trusted data sharing without a central authority; smart contracts automate policies. Limits: throughput, latency, storage and energy cost on constrained devices (use gateways/lightweight chains).",
      "<b>Machine learning for anomaly detection:</b> learns normal behaviour of traffic/sensor values and flags deviations (intrusions, compromised or faulty devices); supervised, unsupervised (clustering, autoencoders) and edge-deployed models. Challenges: false positives, training data, concept drift, compute limits.",
      "<b>Privacy concerns:</b> continuous collection of personal data (location, health, voice, video) → profiling, surveillance, data sharing with third parties and unclear consent. Mitigations: data minimisation, anonymisation/pseudonymisation, encryption, consent management, privacy-by-design, compliance (GDPR / Sri Lanka PDPA), local (edge) processing.",
      "<b>Hardware vs software vs data security:</b> an argument that hardware security is most crucial – devices are physically exposed and are the root of trust; compromised hardware undermines every software and data control above it (and cannot always be patched). A balanced answer: security is layered – hardware, software and data security are all needed; hardware is the foundation, but software updates and data protection address most day-to-day attacks."
    ]},
    { h: "IoT platforms and business-case verification", items: [
      "An <b>IoT platform</b> is the middleware that <b>connects</b> devices (device onboarding, protocols, gateways), <b>communicates</b> data (ingestion, storage, messaging), <b>controls</b> devices (device management, remote commands, OTA updates, rules engine) and exposes data to applications and people through APIs, analytics and dashboards – acting as the link between machines, applications, devices and people. Examples: AWS IoT, Azure IoT Hub, Google Cloud IoT, ThingsBoard, Thingspeak, Node-RED.",
      "<b>Business-case verification:</b> a <b>Proof of Concept (PoC)</b> tests technical feasibility cheaply; a <b>prototype</b> tests design and user acceptance; a platform lets teams build both quickly with ready connectors, dashboards and analytics, test scale and costs and gather data to justify investment. <i>Advantages:</i> speed, lower cost and risk, reuse, built-in security and scalability. <i>Disadvantages:</i> vendor lock-in, recurring cost, limited customisation, data-sovereignty and privacy concerns, PoC may not scale to production.",
      "<b>IoT lifecycle:</b> idea → business case → PoC → prototype → pilot → deployment → operation and maintenance → retirement."
    ]},
    { h: "Embedded systems, ADC and DAC", items: [
      "An <b>embedded system</b> is a dedicated computer (microcontroller + memory + I/O + firmware) inside a device. In IoT it reads <b>sensors</b>, processes data, communicates and drives <b>actuators</b> – low power, real-time, small and cheap (e.g. Arduino, ESP32, Raspberry Pi).",
      "<b>Sensor</b> – converts a physical quantity into an electrical signal. <b>ADC (Analog-to-Digital Converter)</b> – converts the sensor’s analog voltage into digital values the microcontroller can process (resolution in bits, sampling rate). <b>DAC (Digital-to-Analog Converter)</b> – converts digital values into an analog voltage/current to drive analog actuators (audio, motor speed, valve position). <b>Actuator</b> – turns the control signal into physical action. Flow: physical world → sensor → (signal conditioning) → ADC → MCU → DAC / PWM / driver → actuator → physical world."
    ]},
    { h: "Cloud for IoT, data lifecycle and decisions", items: [
      "<b>Cloud as an accelerator:</b> pay-as-you-go, instant scalability and storage, managed IoT services (AWS IoT Core, Azure IoT Hub), big-data analytics and ML, global availability and fast development without owning servers; lowers entry cost for start-ups. Risks: latency, connectivity dependence, security/privacy, vendor lock-in, running cost – so combine with edge.",
      "<b>Data lifecycle:</b> collection (sensors) → transmission → ingestion → storage → processing (stream/batch) → analysis (analytics/ML) → visualisation/action → archiving/deletion. Real-time management brings <b>benefits</b> (instant decisions, alerts) and <b>challenges</b> (volume/velocity, latency, quality, security, cost, intermittent connectivity).",
      "<b>Better decision making:</b> IoT supplies real-time, accurate, fine-grained data; analytics turn it into insight; automation closes the loop – e.g. smart irrigation, predictive maintenance, traffic signals, hospital bed management."
    ]}
  ],
  terms: [
    ["MQTT vs HTTP vs AMQP", "Light pub/sub for constrained devices vs heavy request/response vs enterprise message queuing."],
    ["CoAP", "Constrained Application Protocol: lightweight REST-like protocol over UDP."],
    ["CIA triad", "Confidentiality, Integrity, Availability."],
    ["Cyber-physical attack", "Attack that causes physical effects by controlling actuators."],
    ["Anomaly detection", "Finding behaviour that deviates from normal (often with ML)."],
    ["Blockchain (IoT)", "Tamper-resistant distributed ledger for identity, updates and audit."],
    ["IoT platform", "Middleware that connects, manages and analyses devices and data."],
    ["PoC / prototype", "Feasibility test / working model used to verify the business case."],
    ["Embedded system", "Microcontroller-based computer inside a device."],
    ["ADC / DAC", "Analog→digital and digital→analog converters."],
    ["Secure boot / OTA", "Only signed firmware runs / over-the-air updates."]
  ]
}
];
