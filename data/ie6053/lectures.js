/* IE6053 Enterprise Governance of IT – lecture notes (from the slides of Kavinga Yapa Abeywardena, SLIIT).
   Open-book exam: written so that answers can be found and applied to case studies quickly. */
DATA.mod("IE6053").lectures = [
{
  id: 1, pdf: "pdfs/ie6053/lectures/lecture-01.pdf", pages: 20,
  title: "Introduction to IT Governance and GRC",
  desc: "Definitions of IT governance, Evaluate-Direct-Monitor, governance versus management, GRC (governance, risk, compliance), shadow IT and COBIT.",
  sections: [
    { h: "Definitions of IT governance", items: [
      "<b>ISACA / COBIT 5:</b> making sure information and technology support the enterprise strategy and help achieve its objectives, with IT capabilities provided efficiently and effectively. Key words: alignment, business strategy, efficiency, effectiveness.",
      "<b>AS 8015 (corporate governance of ICT):</b> the system by which the <b>current and future use of ICT is directed and controlled</b> – <b>Evaluate → Direct → Monitor</b> (plans, policies, strategy).",
      "<b>OECD (corporate governance):</b> relationships between management, board, shareholders and stakeholders; structure for setting objectives, deciding how to attain them and monitoring performance; accountability.",
      "<b>ITGI:</b> IT governance is the responsibility of the <b>board of directors and executive management</b>; an integral part of enterprise governance; leadership, structures and processes ensure IT sustains and extends the organisation’s strategies and objectives.",
      "Common theme: IT must support business objectives through good decision-making, <b>accountability</b> and control. Ask of any failure: <i>what decision/control failed and who should have been accountable?</i>"
    ]},
    { h: "Governance versus management (very common exam question)", items: [
      "<b>Governance</b> (board; chairperson): <b>evaluates</b> stakeholder needs and options, <b>directs</b> through prioritisation and decision making, <b>monitors</b> performance and compliance against agreed direction. Sets strategy, policy, risk appetite, accountability, aligns IT with business, approves budget and oversees compliance.",
      "<b>Management</b> (executive management; CEO/CIO): <b>plans, builds, runs and monitors</b> activities in line with the direction set by governance – day-to-day operations, incident handling, patching/updates, running infrastructure, recruiting and training IT staff, implementing security measures, managing operational risk.",
      "<b>Quick test:</b> <i>Who decides direction/policy/oversight?</i> → Governance. <i>Who executes, operates, supervises daily work?</i> → Management."
    ]},
    { h: "GRC", items: [
      "<b>GRC = Governance + Risk management + Compliance</b>, an umbrella term for enterprise activities, supported by principles, policies, frameworks, models and structures; should provide control <b>without blocking innovation</b>.",
      "<b>Governance:</b> direction, decision rights, accountability, oversight (e.g. IT steering committee, evaluating whether IT investments deliver value). <b>Risk management:</b> identify, assess, mitigate/accept risk (e.g. risk assessment, continuity and response planning). <b>Compliance:</b> following laws, regulations, standards and internal policies (e.g. audit of data-privacy compliance).",
      "Types of GRC: corporate, project, IT, environmental, economic/financial. IT GRC = IT decision structures and tracking + IT risk management + IT compliance.",
      "<b>Why IT GRC matters today:</b> cyber, cloud, outsourcing and AI risks are enterprise risks; growing compliance demands; fragmented GRC needs a centralised, holistic model. <b>Shadow IT</b> = technology used without approval or oversight.",
      "<b>COBIT</b> (ISACA) is the framework that guides IT governance and management and links business goals with IT decisions and controls (COBIT 5 / COBIT 2019)."
    ]}
  ],
  terms: [
    ["IT governance", "Ensuring IT supports business strategy and objectives through direction, control and accountability."],
    ["Evaluate–Direct–Monitor (EDM)", "The three basic governance actions."],
    ["Governance vs management", "Governance sets direction and oversees; management plans, builds, runs and monitors."],
    ["GRC", "Governance, Risk management and Compliance as one coordinated system."],
    ["Shadow IT", "Technology used without organisational approval or oversight."],
    ["Accountability", "Clear decision rights and responsibility for outcomes."],
    ["COBIT", "ISACA framework for governance and management of enterprise IT."]
  ]
},
{
  id: 2, pdf: "pdfs/ie6053/lectures/lecture-02.pdf", pages: 20,
  title: "IT Governance: Why and How",
  desc: "Enterprise governance assets, objectives and benefits, the five focus areas, roles, foundations, stakeholders and the nine rules for better IT governance.",
  sections: [
    { h: "Enterprise governance and objectives", items: [
      "Enterprise governance focuses on six asset types: <b>human, financial, physical, intellectual property, information and IT, relationship</b>.",
      "<b>Objectives of IT governance:</b> understand the strategic importance of IT so the enterprise can sustain operations and implement strategies; ensure expectations for IT are met and IT risks are mitigated.",
      "<b>Benefits:</b> better customer support; transformation of the business to leverage technology; process improvement; better oversight of IT investment; enterprise-wide consistency in technology, processes and procurement."
    ]},
    { h: "Five focus areas of IT governance", items: [
      "<b>Strategic alignment</b> – aligning IT with the business. <b>Value delivery</b> – optimising expenses and proving IT’s value. <b>Risk management</b> – safeguarding IT assets, disaster recovery, continuity. <b>Resource management</b> – optimising knowledge and IT infrastructure. <b>Performance measurement</b> – tracking project delivery and IT services."
    ]},
    { h: "Roles, foundations and direction", items: [
      "<b>Executive management must:</b> be informed, assign responsibilities, define scope and constraints, manage risk, obtain assurance. <b>Should:</b> specify accountability, set the tone at the top, encourage a control culture, allocate clear responsibilities. An <b>IT strategy committee</b> (board-level) and an <b>IT steering committee</b> (business/IT executives) support this.",
      "<b>Three foundations:</b> <b>leadership</b>, <b>structures/mechanisms</b>, <b>processes</b> – all three are needed; IT governance is ineffective if one is missing.",
      "<b>Setting the direction:</b> assess capacity to exploit IT for new business models, balance IT’s cost and information’s value for a return on investment, manage risks of an interconnected digital world. <b>Business drivers vs IT strategy:</b> keep the business running, provide value, control IT costs, align IT with business, regulatory compliance, avoid negative security impacts."
    ]},
    { h: "Implementing IT governance and stakeholders", items: [
      "<b>Steps:</b> define what governance means in the organisation; identify constraints and enablers; agree, publish and gain acceptance of the framework, tools and processes; identify and commit resources; sign off KPIs and critical success factors (CSFs); align with business objectives.",
      "<b>Stakeholders:</b> investors/owners/shareholders (ROI, strategic alignment); business management and partners; controllers (internal/external audit, risk and compliance officers, finance, HR, regulators); suppliers/service providers (IT vendors, contractors, developers, support); customers.",
      "<b>Nine rules for better ITG:</b> (1) define business and IT goals, (2) define IT governance processes correctly, (3) clear IT organisational and decision structure, (4) involve executives and the board, (5) manage roles and responsibilities, (6) working IT steering and strategy committees, (7) manage and align the IT investment portfolio, (8) use performance-measurement tools, (9) set up communication and awareness mechanisms.",
      "<b>Concerns:</b> availability, security and continuity; costs and measurable returns; quality and reliability; IT not responding to real business needs; IT-related risk. <b>Establishing ITG:</b> understand the enterprise context, then match standards/frameworks; analyse mission, purpose, costs and benefits first."
    ]}
  ],
  terms: [
    ["Six asset types", "Human, financial, physical, IP, information and IT, relationship."],
    ["Five focus areas", "Strategic alignment, value delivery, risk, resource, performance measurement."],
    ["Three foundations", "Leadership, structures, processes."],
    ["IT steering committee", "Business and IT executives guiding priorities and projects."],
    ["IT strategy committee", "Board-level committee advising on IT strategy and alignment."],
    ["KPI / CSF", "Key performance indicator / critical success factor."],
    ["Tone at the top", "Executives set the control culture by example."]
  ]
},
{
  id: 3, pdf: "pdfs/ie6053/lectures/lecture-03.pdf", pages: 24,
  title: "IT Governance Frameworks and Key Elements",
  desc: "Governance frameworks and standards, adoption keys, ISO 20000 and 38500, process improvement (Six Sigma, TQM), CMMI maturity levels, balanced scorecard and BCG matrix.",
  sections: [
    { h: "Frameworks and adoption", items: [
      "<b>Frameworks:</b> enterprise architecture – <b>COBIT</b>, <b>Zachman</b>, <b>TOGAF</b>; service/governance standards – <b>ISO/IEC 20000</b> (service management), <b>ISO/IEC 38500</b> (governance of IT: principles-based advice for the governing body); security – <b>ISO 27000 series</b>, CERT, CRAMM, SABSA.",
      "<b>Keys to adoption:</b> a <b>programme approach</b> (many inter-related projects, not one piece-by-piece project), a <b>champion/sponsor</b> with sustainable funding, and <b>communication and buy-in</b>.",
      "<b>A complete framework:</b> policy (endorsed by management) is the core; practices and procedures implement it; standards set benchmarks. There is <b>no universal approach</b> – implementation varies with size, industry, culture. <b>Obstacles in a multinational:</b> cultural differences, differing laws, legacy and heterogeneous systems, coordination across time zones, lack of executive buy-in, resistance to change, costs."
    ]},
    { h: "Process improvement and CMMI", items: [
      "<b>Continuous process improvement:</b> BPR and incremental methods – <b>Six Sigma</b> (data-driven, reduce variation and defects) and <b>TQM</b> (everyone participates in improving quality).",
      "<b>CMMI maturity levels:</b> <b>1 Initial</b> (ad hoc, chaotic, reactive, “fire-fighting”) → <b>2 Repeatable/Managed</b> (basic discipline, repeatable results) → <b>3 Defined</b> (documented standard processes used organisation-wide) → <b>4 Managed/Quantitatively managed</b> (controlled using metrics) → <b>5 Optimised</b> (continuous improvement, incremental and innovative).",
      "<b>Using CMMI (exam):</b> pick a process (e.g. incident management at a software company): at L1 incidents are handled ad hoc → L2 an incident log and basic procedure per team → L3 one standard documented process and training for all → L4 measure resolution time/SLA and control variation → L5 analyse root causes and automate to improve continuously. Appraise, find gaps, plan improvements, re-appraise over time."
    ]},
    { h: "Balanced Scorecard (BSC)", items: [
      "A set of metrics that together reflect overall business performance, making managers look beyond finance. <b>Four perspectives:</b> <b>Financial</b> (revenue, cost, profit, budget), <b>Customer</b> (satisfaction, retention, brand, needs met), <b>Internal business process</b> (efficiency, quality, delivery time, compliance, safety, uptime), <b>Learning and growth</b> (skills, training, innovation, mentoring, culture).",
      "<b>Mapping tip:</b> cost/budget/revenue → Financial; customers, service experience, brand → Customer; speed, quality, uptime, logistics, safety, compliance, coordination → Internal process; skills, training, innovation/R&amp;D, mentoring → Learning &amp; growth. Always add a one-line justification and a metric (e.g. % uptime, customer satisfaction score)."
    ]},
    { h: "BCG matrix", items: [
      "Analyses products/services by <b>market growth</b> and <b>market share</b>: <b>Stars</b> (high growth, high share – invest), <b>Cash cows</b> (low growth, high share – harvest), <b>Question marks</b> (high growth, low share – invest selectively or drop), <b>Dogs</b> (low growth, low share – divest). Resources move from dogs to question marks/stars."
    ]}
  ],
  terms: [
    ["ISO/IEC 38500", "Principles-based standard for governance of IT."],
    ["ISO/IEC 20000", "Standard for IT service management (PDCA)."],
    ["Six Sigma", "Data-driven reduction of process variation and defects."],
    ["TQM", "Total Quality Management – quality in all processes by everyone."],
    ["CMMI levels", "1 Initial, 2 Repeatable, 3 Defined, 4 Managed, 5 Optimised."],
    ["Balanced Scorecard", "Four perspectives: Financial, Customer, Internal process, Learning & growth."],
    ["BCG matrix", "Stars, cash cows, question marks, dogs."],
    ["Programme approach", "Treat framework adoption as many inter-related projects."]
  ]
},
{
  id: 4, pdf: "pdfs/ie6053/lectures/lecture-04.pdf", pages: 23,
  title: "Controls, Communication and Change",
  desc: "Where to apply IT controls, assurance, assessing controls, communicating with stakeholders, and the four approaches to change (evolution, revolution, adaptation, reconstruction).",
  sections: [
    { h: "IT controls", items: [
      "Controls apply at the <b>business-process level</b> (manual and automated controls on specific activities) and the <b>IT level</b> (general IT controls supporting several processes).",
      "<b>Examples:</b> automated/application control – lock-out after three wrong passwords; manual – supervisor sign-off, employee signs an NDA/privacy policy, an administrator reviewing a 90-day inactive-user report; general IT control – user access controls (passwords, ACLs).",
      "<b>Embed controls</b> in systems development, change management, security and computer operations. <b>Application controls:</b> completeness, accuracy, validity, authorisation, segregation of duties."
    ]},
    { h: "Assurance and assessing controls", items: [
      "Provide reasonable assurance that IT governance practices align with company objectives using IT governance metrics, benchmarking (ISO 20000, Six Sigma), ROI and KPIs. Measures should be <b>relevant, consistent, quantitative, reliable and based on business value</b>.",
      "<b>Assessment methods:</b> interviews, inspection/observation (walk-through), re-performing a task, sampling, testing with tools; ongoing and periodic (scheduled/unscheduled) reviews with consistent reporting and feedback."
    ]},
    { h: "Communication", items: [
      "Communicate with owners, managers, employees, customers, partners and regulators: ethics and culture, mission/vision/goals, laws and policies, industry practices, governance policies, business plan, risk and controls, effectiveness reports, future plans; encourage feedback.",
      "<b>Benefits:</b> provides direction, reduces rumours, aligns stakeholders with the mission, encourages consistency, mandates accountability."
    ]},
    { h: "Enabling change", items: [
      "Change is about <b>people</b>, needs a shift in culture and must fit the organisational context. <b>Change enablement</b> = a systematic process ensuring all stakeholders are prepared and committed to moving from the current to the desired governance state: assess impact, vision, communication, empowerment, planning, teamwork, gap analysis.",
      "<b>Four approaches:</b> <b>Evolution</b> – transformational change implemented <b>gradually</b>; <b>Revolution</b> – transformational change on <b>many fronts simultaneously</b>; <b>Adaptation</b> – realign how the organisation operates in a <b>series of steps</b>; <b>Reconstruction</b> – rebuild entire processes and business models at once.",
      "<b>Example (software company / healthcare provider):</b> <i>Evolution</i> – migrate one module or ward at a time to a new system and train staff gradually (lower risk, slower, easier acceptance); <i>Revolution</i> – replace the whole platform in one go over a weekend, retraining everyone at once (fast, high risk and disruption)."
    ]}
  ],
  terms: [
    ["General IT controls", "Controls supporting several processes (e.g. access control)."],
    ["Application controls", "Controls inside applications: completeness, accuracy, validity, authorisation, segregation of duties."],
    ["Assurance", "Evaluating that controls are effective and reliable."],
    ["Change enablement", "Systematic preparation of stakeholders for change."],
    ["Evolution", "Gradual transformational change."],
    ["Revolution", "Transformational change on many fronts at once."],
    ["Adaptation", "Realignment through a series of steps."],
    ["Reconstruction", "Rebuilding processes and business models simultaneously."]
  ]
},
{
  id: 5, pdf: "pdfs/ie6053/lectures/lecture-05.pdf", pages: 31,
  title: "Strategic Management and Enterprise Architecture",
  desc: "Strategic alignment, vision-goal-strategy-objectives, formulating and updating IT strategy, enterprise architecture, the Zachman framework and architecture review boards.",
  sections: [
    { h: "Strategic planning and alignment", items: [
      "<b>Strategic alignment (ISACA):</b> an enterprise’s IT investment is in harmony with its strategic objectives and builds the capabilities to deliver business value. Strategic hierarchy: <b>Enterprise strategy drives business processes; IT strategy supports them.</b>",
      "<b>Vision</b> (purpose and aspiration) → <b>Goal / mission</b> (qualitative) → <b>Strategy</b> (how, using available means) → <b>Objectives</b> (quantitative, measurable milestones). Example (Starbucks): objectives such as 25% of sales through mobile ordering by 2026.",
      "<b>Alignment processes:</b> keep top-management awareness of IT’s strategic role; clarify the role of IT (utility vs enabler); guiding principles; IT culture reflecting business culture. <b>Maintaining alignment:</b> monitor business impact, evaluate post-implementation benefits, regularly report on programmes, clear objectives, oversight and accountability.",
      "<b>Formulating IT strategy:</b> consider business objectives and competition, current/future technologies (costs, risks, benefits), capability to deliver service, IT costs vs value. <b>Update:</b> formal cycle every 3–4 years with annual CIO updates; ask whether infrastructure still supports strategy, priorities changed, new capabilities needed."
    ]},
    { h: "Enterprise architecture (EA)", items: [
      "<b>EA</b> is a conceptual blueprint defining the structure and operation of an organisation – a representation of components and their relationships at a point in time; a repeatable, standardised blueprint aligning divisions, departments and regions to common objectives. <b>Purpose:</b> consistency (policy, standards, procurement), better top-level oversight and direction.",
      "<b>Components:</b> business architecture (enterprise level), information architecture (business-unit level), information systems architecture (systems level), data architecture (data-element level), delivery systems architecture (hardware, software, networks). Models: Zachman, TOGAF, SABSA, NIST.",
      "<b>Challenges:</b> change management, legacy integration, IT staff planning, EA compliance/waivers/certification. <b>Approach:</b> top-down, enterprise-wide; depends on size, culture, skills, stakeholder views, resources. <b>Architecture review board</b> ensures initiatives follow the EA and vets project proposals."
    ]},
    { h: "Zachman framework – six columns", items: [
      "<table><tr><th>Column</th><th>Asks</th><th>Concerns</th><th>Example (online course registration)</th></tr><tr><td><b>What</b></td><td>Data / things</td><td>Entities, information, data models</td><td>Student, course, registration records</td></tr><tr><td><b>How</b></td><td>Function / process</td><td>Business processes, workflows</td><td>Log in, select courses, check prerequisites</td></tr><tr><td><b>Where</b></td><td>Location / network</td><td>Sites, networks, distribution, infrastructure</td><td>Campus, remote access, cloud servers</td></tr><tr><td><b>Who</b></td><td>People / roles</td><td>Responsibilities, collaboration, access</td><td>Students, lecturers, administrators</td></tr><tr><td><b>When</b></td><td>Time / events</td><td>Schedules, events, peak seasons, real-time timing</td><td>Registration period, deadlines</td></tr><tr><td><b>Why</b></td><td>Motivation / goals</td><td>Objectives, policies, drivers (cost, compliance, sustainability)</td><td>Reduce paperwork, improve experience</td></tr></table>",
      "<b>Rows (perspectives):</b> 1 Executive/Planner (scope) · 2 Business Management/Owner (business model) · 3 Architect/Designer (logical design) · 4 Engineer/Builder (technology design) · 5 Technician (implementation) · 6 Enterprise/User (the running system).",
      "<b>Where vs When at the System Architect’s (row 3) perspective:</b> <i>Where</i> = logical network/distribution architecture (nodes, links, locations); <i>When</i> = event and timing logic (processing structure, schedules, triggers)."
    ]}
  ],
  terms: [
    ["Vision / goal / strategy / objective", "Aspiration / qualitative target / the how / quantitative milestone."],
    ["Strategic alignment", "IT investment in harmony with business strategy."],
    ["Enterprise architecture", "Blueprint aligning business, information, systems, data and technology."],
    ["Zachman framework", "6 columns (What, How, Where, Who, When, Why) × 6 perspectives."],
    ["TOGAF", "Enterprise architecture framework with the Architecture Development Method (ADM)."],
    ["Architecture review board", "Ensures projects comply with the EA."],
    ["Utility vs enabler", "IT as a basic service vs IT as enabling business change."]
  ]
},
{
  id: 6, pdf: "pdfs/ie6053/lectures/lecture-06.pdf", pages: 27,
  title: "COBIT 5",
  desc: "The five principles, the goals cascade, the seven enablers, governance versus management domains, and how to use the mapping tables.",
  sections: [
    { h: "Why COBIT 5", items: [
      "Enterprises want quality information for decisions, business value from IT investments, operational excellence, IT risk kept at an acceptable level and optimised IT cost. COBIT 5 is a <b>comprehensive framework</b> that helps enterprises create optimal value from IT by <b>balancing benefits, risk levels and resource use</b>; it governs and manages IT holistically, end to end, for all sizes of enterprise.",
      "Evolution: COBIT 1 (audit) → 2 (control) → 3 (management) → 4.0/4.1 (IT governance) → <b>COBIT 5 (governance and management of enterprise IT)</b>, consolidating Val IT and Risk IT."
    ]},
    { h: "The five principles", items: [
      "<b>1. Meeting stakeholder needs</b> – enterprises exist to create value; ask who receives the benefits, who bears the risk, what resources are needed. Needs are translated by the <b>goals cascade</b>. (Relevant when customers need tailor-made solutions.)",
      "<b>2. Covering the enterprise end-to-end</b> – all functions and processes, not only the IT function; governance enablers, scope, roles, activities and relationships.",
      "<b>3. Applying a single integrated framework</b> – aligns with COSO, ISO 9000, ISO 31000, ISO 38500, ITIL, ISO 27000, TOGAF, PMBOK/PRINCE2, CMMI; COBIT is the overarching integrator.",
      "<b>4. Enabling a holistic approach</b> – seven interconnected enablers.",
      "<b>5. Separating governance from management</b> – different activities, structures and purposes."
    ]},
    { h: "Goals cascade", items: [
      "Stakeholder needs → <b>enterprise goals</b> (17) → <b>IT-related goals</b> (17) → <b>enabler goals</b> / processes. COBIT’s mapping tables (Fig. 22 enterprise → IT-related goals; Fig. 23 IT-related goals → processes) show <b>Primary (P)</b> and <b>Secondary (S)</b> relationships. Benefits: priorities for implementation, improvement and assurance; relevant goals at each level of responsibility; shows how enablers support enterprise goals.",
      "<b>Describe with an example (exam):</b> stakeholder need “grow online revenue” → enterprise goal “Portfolio of competitive products and services” → IT-related goal “Alignment of IT and business strategy / IT agility” → processes “Manage Strategy (APO02), Manage Innovation (APO04)” → enablers (processes, structures, skills, applications…). Use only <b>Primary</b> links when told to."
    ]},
    { h: "Seven enablers", items: [
      "<table><tr><th>#</th><th>Enabler</th><th>Meaning</th></tr><tr><td>1</td><td>Principles, policies and frameworks</td><td>Translate desired behaviour into practical guidance</td></tr><tr><td>2</td><td>Processes</td><td>Organised practices and activities producing outputs</td></tr><tr><td>3</td><td>Organisational structures</td><td>Key decision-making entities</td></tr><tr><td>4</td><td>Culture, ethics and behaviour</td><td>Often underestimated success factor</td></tr><tr><td>5</td><td>Information</td><td>All information produced and used</td></tr><tr><td>6</td><td>Services, infrastructure and applications</td><td>Technology that provides IT processing and services</td></tr><tr><td>7</td><td>People, skills and competencies</td><td>Needed for activities, decisions and corrective actions</td></tr></table>",
      "<b>Enablers are interconnected:</b> each needs the input of others and delivers output to others. <b>Services/infrastructure/applications ↔ People/skills/competencies:</b> technology delivers value only if people have the skills to run, use and support it (e.g. a bank’s new core banking platform fails without trained staff), and skilled people need appropriate tools and applications to be productive; skills gaps cause misuse, outages and poor adoption, while good tools raise productivity and enable staff growth. Both depend on processes, information and culture."
    ]},
    { h: "Governance and management domains", items: [
      "<b>Governance domain:</b> <b>EDM – Evaluate, Direct and Monitor</b> (5 processes EDM01–05). <b>Management domains:</b> <b>APO</b> Align, Plan and Organise (13), <b>BAI</b> Build, Acquire and Implement (10), <b>DSS</b> Deliver, Service and Support (6), <b>MEA</b> Monitor, Evaluate and Assess (3). Total 37 processes. COBIT is not prescriptive.",
      "<b>Governance</b> – board under the chair; <b>management</b> – executive management under the CEO. Governance: evaluate needs, set direction, monitor performance/compliance. Management: plan, build, run, monitor."
    ]}
  ],
  terms: [
    ["COBIT 5 principles", "Stakeholder needs; end-to-end; single integrated framework; holistic approach; separate governance from management."],
    ["Goals cascade", "Stakeholder needs → enterprise goals → IT-related goals → enabler goals/processes."],
    ["Seven enablers", "Principles/policies; processes; structures; culture; information; services/infrastructure/applications; people/skills."],
    ["EDM", "Evaluate, Direct and Monitor – the governance domain."],
    ["APO / BAI / DSS / MEA", "Align-Plan-Organise / Build-Acquire-Implement / Deliver-Service-Support / Monitor-Evaluate-Assess."],
    ["Primary (P) vs secondary (S)", "Strength of a relationship in the mapping tables."]
  ]
},
{
  id: 7, pdf: "pdfs/ie6053/lectures/lecture-07.pdf", pages: 30,
  title: "Val IT: Value Delivery and IT Portfolio Management",
  desc: "Why IT investments fail, Val IT principles and processes (value governance, portfolio management, investment management), investment categories and benefits realisation.",
  sections: [
    { h: "Why Val IT?", items: [
      "IT investments can bring enormous returns <b>or destroy value</b>: studies show high project failure rates (e.g. only ~29% of projects succeed; ~20% of IT spend wasted; 40% brought no return). Executives complain of IT unrelated to strategy, inadequate payoff and “technology for technology’s sake”.",
      "<b>Val IT</b> (ISACA) is a framework to select and manage IT-enabled business investments so they deliver optimal value; COBIT answers <i>how should we do it</i>, Val IT answers <i>what should we be doing</i> – complementary (value lens into COBIT). Apply <b>financial portfolio management</b> principles to IT investments.",
      "<b>You need stronger governance if:</b> IT does not support strategy, too many projects, delays and overruns, inability to cancel projects, regulatory compliance needs."
    ]},
    { h: "Val IT principles and processes", items: [
      "<b>Seven principles:</b> IT-enabled investments (1) managed as a portfolio, (2) include the full scope of activities needed for value, (3) managed through their full economic life cycle; value delivery practices (4) recognise different investment categories, (5) define and monitor key metrics, (6) engage stakeholders and assign accountability, (7) are continually monitored, evaluated and improved.",
      "<b>Three process domains:</b> <b>Value Governance (VG)</b> – leadership, accountability, reporting, investment categories (mandatory, sustaining/continuity, discretionary), target portfolio mix, evaluation criteria. <b>Portfolio Management (PM)</b> – resource profiles, investment thresholds, evaluate/prioritise/select/defer/reject, overall portfolio view, monitor and report performance. <b>Investment Management (IM)</b> – business case development, programme management, <b>benefits realisation</b> across the full life cycle (initial case, alternatives, benefits realisation plan, full life-cycle costs, accountability, track benefits, retire programme).",
      "<b>Val IT questions:</b> strategic (are we doing the right things?), architecture (are we doing them the right way?), value (are we getting the benefits?), delivery (are we getting them done well?). <b>Objectives:</b> more transparency of costs, risk and benefits; higher probability of picking winners; lower risk and surprises; stop poor investments early."
    ]},
    { h: "IT portfolio management, BSC and investment categories", items: [
      "<b>IT portfolio management</b> = applying systematic management to the investments, projects and activities of IT. The IT investment portfolio relates directly to the <b>Balanced Scorecard</b>: each investment should map to a BSC perspective and KPI so the portfolio balances financial return, customer value, internal process improvement and learning/innovation.",
      "<b>Typical investment categories:</b> run/maintain (sustaining), grow (discretionary), transform (strategic), compliance/mandatory. <b>Exam use:</b> for a case study identify 3–4 categories (e.g. by BSC perspective or product line) and give a KPI for each (ROI, customer satisfaction/NPS, process cycle time/availability, training hours or number of innovations)."
    ]}
  ],
  terms: [
    ["Val IT", "ISACA framework for value from IT-enabled investments (VG, PM, IM)."],
    ["Value governance", "Leadership, accountability and categories for investments."],
    ["Portfolio management", "Evaluating, prioritising and monitoring all investments together."],
    ["Investment management", "Business case, programme management and benefits realisation of each programme."],
    ["Benefits realisation", "Actively managing so expected benefits are actually delivered."],
    ["Investment categories", "Mandatory, sustaining/continuity, discretionary."],
    ["IT portfolio and BSC", "Portfolio investments map to the BSC perspectives."]
  ]
},
{
  id: 8, pdf: "pdfs/ie6053/lectures/lecture-08.pdf", pages: 18,
  title: "Resource Optimisation and Outsourcing",
  desc: "Effective use of IT resources, critical IT resources, internal vs external provisioning, outsourcing (what, accountability, risks) and human-resource development.",
  sections: [
    { h: "Resource optimisation", items: [
      "A governance objective: effective, efficient and responsible use of all resources – human, financial, equipment, facilities. Ensure processes to <b>identify, acquire and maintain</b> IT resources and capabilities, integrate resource management into strategic and tactical planning, and have policies for assessing, training and developing staff.",
      "<b>Critical IT resources:</b> <b>applications</b>, <b>infrastructure</b> (hardware, networks, controls), <b>information</b> (confidentiality, integrity, availability) and <b>people</b> (most critical – the right skills)."
    ]},
    { h: "IT provisioning and outsourcing", items: [
      "<b>Internal provisioning:</b> + in-house skills, flexible, responsive and understands the business; − longer timelines, lack of skilled resources. <b>External provisioning:</b> + skilled resources, lower training cost, shorter delivery; − inflexible, expensive, loss of direct control.",
      "<b>Services suitable for outsourcing:</b> ERP, CRM, knowledge management/collaboration, end-user and distributed computing, corporate platforms and data, data networks, voice networks, storage, <b>help desk/service desk, data-centre/hosting, application development and maintenance, payroll/billing (business process outsourcing), backup and DR</b>.",
      "<b>Accountability stays with the client:</b> service delivery transfers but accountability and legal liability remain; transparency and ownership of decisions must stay with the client. <b>Multiple suppliers:</b> reduce reliance on one firm, competitive contracts, variety – but incompatibility and blame-shifting.",
      "<b>Disadvantages in a sensitive setting (e.g. military/defence):</b> loss of control and confidentiality of classified data, vendor dependence and slow response in remote/hostile locations, hidden costs and contract disputes, loss of in-house knowledge and skills. <b>Alternatives:</b> insourcing / hybrid (core capability in-house, non-sensitive services outsourced), private/government cloud, selective outsourcing with strong SLAs and security clearance, training own personnel."
    ]},
    { h: "Human resource development", items: [
      "People are the prime asset; need skilled staff to design, implement and operate systems; retention requires training, motivation and challenge; talent management = acquiring and nurturing talent.",
      "<b>Seven factors to reduce IT turnover:</b> strong leadership in change, development plans and clear career paths, chances to learn new technologies, ask staff what they want, give resources and support, competitive pay/benefits, make the job meaningful.",
      "<b>Specialist roles migrate to outsourcers</b> (to cut cost and increase speed, flexibility and innovation): e.g. <b>network/system administrator, database administrator, cybersecurity (SOC) analyst, cloud architect, software developer/tester, help-desk analyst</b>."
    ]}
  ],
  terms: [
    ["Resource optimisation", "Effective, efficient, responsible use of IT resources."],
    ["Critical IT resources", "Applications, infrastructure, information, people."],
    ["Internal vs external provisioning", "In-house delivery vs delivered by a supplier."],
    ["Outsourcing", "Transferring delivery of services to a supplier; accountability remains."],
    ["Insourcing / hybrid", "Keeping or bringing capability in-house, outsourcing selectively."],
    ["Talent management", "Acquiring and nurturing skilled staff."]
  ]
},
{
  id: 9, pdf: "pdfs/ie6053/lectures/lecture-09.pdf", pages: 39,
  title: "Risk Optimisation",
  desc: "The IT risk management framework, the 5-step risk process, qualitative and quantitative analysis, the five responses, and frameworks (NIST SP 800-39, COSO, ISO 27005/31000, OCTAVE).",
  sections: [
    { h: "Risk optimisation and the five steps", items: [
      "Ensure an IT risk management framework exists to <b>identify, analyse, mitigate, manage, monitor and communicate</b> IT-related business risk, aligned with enterprise risk management. Risk can never be eliminated, so it must be managed.",
      "<b>Step 1 Identification:</b> internal and external factors, expert knowledge (e.g. penetration testing), involve every department, creativity; ongoing. <b>Step 2 Qualitative analysis:</b> rate probability and impact; <b>Risk = Impact × Probability</b>; impact depends on business goals (reputation, customer life/health, fines/legal penalties, financial). <b>Step 3 Quantitative analysis:</b> define impact scales in cost, time and quality so ratings are meaningful (what does “16” mean in money?). <b>Step 4 Response planning.</b> <b>Step 5 Monitor and control:</b> track, review, communicate, retire contingencies.",
      "<b>Worked example:</b> risk A prob 4 × impact 8 = 32; B 6 × 2 = 12; C 1 × 16 = 16 → priority A &gt; C &gt; B.",
      "<b>Impact areas differ between organisations:</b> a 3-hour system outage is a minor inconvenience for a retail website at night but a life-threatening impact for a hospital (patient safety), a major regulatory/financial impact for a bank, and a reputation/fines issue for a telecom provider – so each defines its own impact scale."
    ]},
    { h: "Risk responses", items: [
      "<b>Avoid</b> (remove the cause – change the plan), <b>Mitigate</b> (reduce probability or impact), <b>Transfer</b> (insurance/outsourcing – move impact and ownership to a third party), <b>Defer</b> (postpone to when risk is lower), <b>Accept</b> (deal via contingency). (NIST: accept, avoid, mitigate, share, transfer.) All responses cost time, money and labour."
    ]},
    { h: "Risk frameworks", items: [
      "<b>IT risk management frameworks:</b> <b>COSO ERM</b>, <b>ISO/IEC 27005</b> (information security risk) and <b>ISO 31000</b>, <b>NIST SP 800-39 / 800-30 / 800-37</b>, <b>OCTAVE / OCTAVE-Allegro</b>; also COBIT 5 for Risk (Risk IT).",
      "<b>NIST SP 800-39:</b> four components – <b>Frame, Assess, Respond, Monitor</b> – across three tiers: <b>Tier 1 organisation (governance)</b>, <b>Tier 2 mission/business processes</b>, <b>Tier 3 information systems</b>. Senior leaders own risk decisions; the <b>Risk Executive Function (REF)</b> sets risk tolerance. Security life cycle (SP 800-37): categorise, select, implement, assess, authorise, monitor."
    ]}
  ],
  terms: [
    ["Risk", "Impact × probability of an event."],
    ["Qualitative vs quantitative analysis", "Ratings (low–high) vs measured in money/time/quality."],
    ["Avoid / mitigate / transfer / defer / accept", "The five standard risk responses."],
    ["Risk tolerance (REF)", "Acceptable level of risk set by the Risk Executive Function."],
    ["NIST SP 800-39", "Managing information-security risk: frame, assess, respond, monitor at three tiers."],
    ["OCTAVE", "Self-directed information-security risk evaluation method."],
    ["ISO 27005 / 31000", "Standards for information-security risk and for risk management."]
  ]
},
{
  id: 10, pdf: "pdfs/ie6053/lectures/lecture-10.pdf", pages: 31,
  title: "Ethical Considerations in Data Governance",
  desc: "Data governance principles, privacy, GDPR and Sri Lanka’s PDPA, data security, ethics, and data quality with its ten measurable characteristics.",
  sections: [
    { h: "Data governance and privacy", items: [
      "<b>Data governance:</b> rules, responsibilities and standards so data is complete, accurate, up to date and trustworthy. <b>Principles:</b> <b>data ownership</b> (accountable person), <b>data stewardship</b> (day-to-day care), security, <b>data quality management</b>, collection edits (validation at entry), data audits, lifecycle and change management.",
      "<b>Data privacy:</b> proper handling of personal/sensitive data; <b>confidentiality</b> (prevent unauthorised disclosure) and <b>immutability</b> (prevent improper change). <b>Privacy problem:</b> allow useful uses (research, public policy) while protecting the people in the data.",
      "<b>Regulations:</b> EU <b>GDPR</b> (data minimisation, integrity and confidentiality, accountability, access, correction, deletion, limits on automated processing, portability), California CCPA/CPRA, Canada PIPEDA, <b>Sri Lanka Personal Data Protection Act No. 9 of 2022 (inspired by GDPR)</b>."
    ]},
    { h: "Data security and ethics", items: [
      "<b>Risks:</b> accidental exposure, phishing, insider threats, malware/ransomware. <b>Solutions (layered):</b> access control, authentication/MFA, cloud data security, data loss prevention (DLP), email security, backup, physical security.",
      "<b>Ethics</b> = what is right, fair, responsible – beyond legal compliance. Senior management sets the example; ethical guidelines and training; responsibilities at global, national, organisational and personal levels. Sources of ethics: religion, law, national interest, individual rights, common good, enlightened self-interest, professionalism, standards of good practice, culture. Tools: <b>human-rights-based approach</b>, <b>Data Ethics Canvas</b>, <b>Data Ethics Maturity Model</b>.",
      "<b>Typical ethical challenges (e.g. AI/health analytics):</b> informed <b>consent</b> and secondary use, <b>anonymisation</b> and re-identification risk, <b>bias and fairness</b> of AI decisions, transparency/explainability, accountability, purpose limitation, data security, balancing innovation with patient protection."
    ]},
    { h: "Data quality", items: [
      "<b>Data quality = fitness for purpose</b> (right data, right time, right user, right outcome). <b>Principles:</b> manage quality across the lifecycle; make it measurable and check before use; prevent errors by fixing root causes; objective and transparent; dedicated accountable roles.",
      "<b>Data quality management</b> (ISO 8000): coordinated activities to direct and control an organisation regarding data quality – planning, control, assurance, improvement. A <b>framework</b> gives a consistent end-to-end approach, culture and clear roles.",
      "<b>Ten characteristics:</b> <b>Accuracy</b> (is it correct?), <b>Completeness</b> (anything missing?), <b>Consistency</b> (same everywhere?), <b>Timeliness</b> (up to date when needed?), <b>Uniqueness</b> (no duplicates), <b>Validity</b> (follows rules/formats), <b>Integrity</b> (links between records correct), <b>Reasonableness</b> (believable), <b>Currency</b> (reflects present reality), <b>Precision</b> (suitable level of detail).",
      "<b>Impact of weak quality:</b> wrong or biased decisions and predictions, patient harm, loss of trust, failure to meet data-governance principles (accuracy) and regulations (GDPR/PDPA), audit findings and fines."
    ]}
  ],
  terms: [
    ["Data owner vs data steward", "Accountable for a data area vs responsible for day-to-day quality and rules."],
    ["Data minimisation", "Collect only the personal data that is needed."],
    ["GDPR / PDPA", "EU data protection regulation / Sri Lanka Personal Data Protection Act No. 9 of 2022."],
    ["DLP", "Data loss prevention."],
    ["Confidentiality / immutability", "No unauthorised disclosure / no improper alteration."],
    ["Data quality", "Fitness for purpose."],
    ["Accuracy, completeness, consistency, timeliness", "Core data-quality characteristics (plus uniqueness, validity, integrity, reasonableness, currency, precision)."],
    ["Human-rights-based approach", "Assess data practices by their effect on people’s rights and dignity."]
  ]
},
{
  id: 11, pdf: null, pages: 0,
  title: "COBIT 5 Reference Tables (for the goals cascade)",
  desc: "The goals-cascade mappings used in the exam (Appendix B and C of the COBIT 5 framework), the 17 enterprise goals, 17 IT-related goals and 37 processes. The ISACA document itself stays in your local lecture folder; page numbers are given below.",
  sections: [
    { h: "Where to find the tables in the ISACA PDF", items: [
      "Local file: <i>IE6053 Enterprise Governance of IT / Lectures / Reference – COBIT 5 Framework (ISACA).pdf</i>. <b>Figure 22</b> (enterprise goals → IT-related goals) is on <b>page 50</b>; <b>Figure 23</b> (IT-related goals → processes) is on <b>pages 52–53</b>. The exam paper also prints these tables.",
      "<b>How to use (only Primary relationships):</b> (1) pick enterprise goals from the case; (2) in Fig. 22 read the <b>P</b> marks in their column to get IT-related goals; (3) in Fig. 23 read the <b>P</b> marks in each IT-related goal column to get the processes."
    ]},
    { h: "17 enterprise goals (EG) – BSC perspective", items: [
      "<b>Financial:</b> 1 Stakeholder value of business investments · 2 Portfolio of competitive products and services · 3 Managed business risk (safeguarding of assets) · 4 Compliance with external laws and regulations · 5 Financial transparency. <b>Customer:</b> 6 Customer-oriented service culture · 7 Business service continuity and availability · 8 Agile responses to a changing business environment · 9 Information-based strategic decision making · 10 Optimisation of service delivery costs. <b>Internal:</b> 11 Optimisation of business process functionality · 12 Optimisation of business process costs · 13 Managed business change programmes · 14 Operational and staff productivity · 15 Compliance with internal policies. <b>Learning and growth:</b> 16 Skilled and motivated people · 17 Product and business innovation culture."
    ]},
    { h: "17 IT-related goals (ITG)", items: [
      "<b>Financial:</b> 01 Alignment of IT and business strategy · 02 IT compliance and support for business compliance with external laws and regulations · 03 Commitment of executive management for making IT-related decisions · 04 Managed IT-related business risk · 05 Realised benefits from IT-enabled investments and services portfolio · 06 Transparency of IT costs, benefits and risk. <b>Customer:</b> 07 Delivery of IT services in line with business requirements · 08 Adequate use of applications, information and technology solutions. <b>Internal:</b> 09 IT agility · 10 Security of information, processing infrastructure and applications · 11 Optimisation of IT assets, resources and capabilities · 12 Enablement and support of business processes by integrating applications and technology · 13 Delivery of programmes on time, on budget, meeting requirements and quality standards · 14 Availability of reliable and useful information for decision making · 15 IT compliance with internal policies. <b>Learning and growth:</b> 16 Competent and motivated business and IT personnel · 17 Knowledge, expertise and initiatives for business innovation."
    ]},
    { h: "Primary links: enterprise goal → IT-related goals (Figure 22)", items: [
      "<table><tr><th>Enterprise goal</th><th>Primary IT-related goals</th></tr><tr><td>EG1 Stakeholder value</td><td>01, 03, 05, 07, 11, 13</td></tr><tr><td>EG2 Competitive products/services</td><td>01, 05, 07, 09, 12, 17</td></tr><tr><td>EG3 Managed business risk</td><td>04, 10, 16</td></tr><tr><td>EG4 External compliance</td><td>02, 10</td></tr><tr><td>EG5 Financial transparency</td><td>06</td></tr><tr><td>EG6 Customer-oriented service culture</td><td>01, 07</td></tr><tr><td>EG7 Service continuity and availability</td><td>04, 10, 14</td></tr><tr><td>EG8 Agile responses</td><td>01, 07, 09, 17</td></tr><tr><td>EG9 Information-based decisions</td><td>01, 14</td></tr><tr><td>EG10 Optimise service delivery costs</td><td>04, 06, 11</td></tr><tr><td>EG11 Optimise process functionality</td><td>01, 07, 08, 09, 12</td></tr><tr><td>EG12 Optimise process costs</td><td>05, 06, 11</td></tr><tr><td>EG13 Managed change programmes</td><td>01, 03, 13</td></tr><tr><td>EG14 Productivity</td><td>08, 16</td></tr><tr><td>EG15 Internal compliance</td><td>02, 10, 15</td></tr><tr><td>EG16 Skilled and motivated people</td><td>16</td></tr><tr><td>EG17 Innovation culture</td><td>09, 17</td></tr></table>",
      "<i>Read from Figure 22; verify against the PDF before relying on a single cell.</i>"
    ]},
    { h: "37 COBIT 5 processes", items: [
      "<b>EDM</b> (Evaluate, Direct and Monitor): 01 Ensure Governance Framework Setting and Maintenance · 02 Ensure Benefits Delivery · 03 Ensure Risk Optimisation · 04 Ensure Resource Optimisation · 05 Ensure Stakeholder Transparency.",
      "<b>APO</b> (Align, Plan and Organise): 01 Manage the IT Management Framework · 02 Manage Strategy · 03 Manage Enterprise Architecture · 04 Manage Innovation · 05 Manage Portfolio · 06 Manage Budget and Costs · 07 Manage Human Resources · 08 Manage Relationships · 09 Manage Service Agreements · 10 Manage Suppliers · 11 Manage Quality · 12 Manage Risk · 13 Manage Security.",
      "<b>BAI</b> (Build, Acquire and Implement): 01 Manage Programmes and Projects · 02 Manage Requirements Definition · 03 Manage Solutions Identification and Build · 04 Manage Availability and Capacity · 05 Manage Organisational Change Enablement · 06 Manage Changes · 07 Manage Change Acceptance and Transitioning · 08 Manage Knowledge · 09 Manage Assets · 10 Manage Configuration.",
      "<b>DSS</b> (Deliver, Service and Support): 01 Manage Operations · 02 Manage Service Requests and Incidents · 03 Manage Problems · 04 Manage Continuity · 05 Manage Security Services · 06 Manage Business Process Controls. <b>MEA</b> (Monitor, Evaluate and Assess): 01 Performance and Conformance · 02 System of Internal Control · 03 Compliance with External Requirements."
    ]},
    { h: "Primary links: IT-related goal → processes (Figure 23)", items: [
      "<table><tr><th>IT goal</th><th>Primary processes</th></tr><tr><td>01 Alignment IT–business strategy</td><td>EDM01, EDM02, APO01, APO02, APO03, APO05, APO07, APO08, BAI01, BAI02</td></tr><tr><td>02 External compliance</td><td>APO01, APO12, APO13, BAI10, DSS05, MEA02, MEA03</td></tr><tr><td>03 Executive commitment to IT decisions</td><td>EDM01, EDM05</td></tr><tr><td>04 Managed IT risk</td><td>EDM03, APO10, APO12, APO13, BAI01, BAI06, DSS01–DSS06, MEA01–MEA03</td></tr><tr><td>05 Realised benefits</td><td>EDM02, APO04, APO05, APO06, APO11, BAI01</td></tr><tr><td>06 Transparency of IT costs, benefits, risk</td><td>EDM02, EDM03, EDM05, APO06, APO12, APO13, BAI09</td></tr><tr><td>07 IT services in line with business requirements</td><td>EDM01, EDM02, EDM05, APO02, APO08, APO09, APO10, APO11, BAI02, BAI03, BAI06, DSS01–DSS04, DSS06, MEA01</td></tr><tr><td>08 Adequate use of applications/technology</td><td>APO04, BAI05, BAI07</td></tr><tr><td>09 IT agility</td><td>EDM04, APO01, APO03, APO04, APO10, BAI08</td></tr><tr><td>10 Security of information</td><td>EDM03, APO12, APO13, BAI06, DSS05</td></tr><tr><td>11 Optimisation of IT assets</td><td>EDM04, APO01, APO03, APO04, APO07, BAI04, BAI09, BAI10, DSS01, DSS03, MEA01</td></tr><tr><td>12 Enable business processes</td><td>APO08, BAI02, BAI07</td></tr><tr><td>13 Programme delivery</td><td>APO05, APO07, APO11, APO12, BAI01, BAI05</td></tr><tr><td>14 Reliable information for decisions</td><td>APO09, APO13, BAI04, BAI10, DSS03, DSS04</td></tr><tr><td>15 Internal policy compliance</td><td>EDM03, APO01, MEA01, MEA02</td></tr><tr><td>16 Competent and motivated personnel</td><td>EDM04, APO01, APO07</td></tr><tr><td>17 Knowledge and innovation</td><td>EDM02, APO01, APO02, APO03, APO04, APO07, APO08, BAI05, BAI08</td></tr></table>",
      "<i>Read from Figure 23 – some goals have many primary processes; choose the most relevant ones to the case.</i>"
    ]}
  ],
  terms: [
    ["EG / ITG", "Enterprise goal / IT-related goal (17 each)."],
    ["Primary (P) link", "Strong relationship in the goals-cascade mapping tables."],
    ["EDM, APO, BAI, DSS, MEA", "The five COBIT 5 process domains (37 processes)."],
    ["Figure 22 / Figure 23", "Enterprise→IT-related goals / IT-related goals→processes."]
  ]
}
];
