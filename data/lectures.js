window.DATA = window.DATA || {};
DATA.lectures = [
{
  id: 1, pdf: "pdfs/lectures/lecture-01.pdf", pages: 99,
  title: "Introduction to Research",
  desc: "What research is, the research process from problem to solution, literature reviews, aims, objectives, hypotheses and how to write a proposal.",
  sections: [
    { h: "What is research?", items: [
      "<b>Research</b> = the systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions.",
      "Research is a <b>process</b> – the steps matter more than the output.",
      "Research can mean: solving an unsolved problem (a drug for COVID-19), solving a solved problem in a better way (better cars), inventing (radio, CT scanner), discovering (DNA, a virus), integrating known solutions (hybrid vehicles), addressing a concern or curiosity (poverty), or investigating trends and patterns.",
      "Research must generate knowledge that is <b>experimentally justifiable</b>.",
      "Good research is <b>repeatable, reproducible and replicable</b>, and its findings should be <b>generalizable</b> beyond the sample studied.",
      "<b>Primary research</b> collects new data yourself; <b>secondary research</b> uses data that already exists."
    ]},
    { h: "The research process", items: [
      "Six steps: <b>Getting started → Literature review → Research problem → Methodologies used → Hypothesize a solution → Test the solution</b>.",
      "Getting started can come from self-motivation, curiosity, interest, a news event or a supervisor’s suggestion – here you identify your <i>area</i> of research.",
      "A research problem must be <b>derived from (supported by) the literature</b>, even if your supervisor gave it to you.",
      "To test a hypothesised solution you need an experimental environment, you collect and analyse data, then conclude whether the solution is established."
    ]},
    { h: "Literature review", items: [
      "Two major outputs of a literature review: the <b>research problem</b> and the <b>methodology used</b>.",
      "Why do one: know the current state of knowledge, avoid repeating others, find gaps and unresolved problems, build your theoretical framework and methodology, see key findings and debates.",
      "A review is <b>not just a list of sources</b> – it shows the gap your work fills and the different positions of researchers.",
      "How: read journal/title/authors, abstract, introduction and conclusion first; underline key concepts; read the rest looking for those concepts; write a summary in your own words with citations; write a critical analysis (advantages, limitations, gaps).",
      "Structure: <b>Introduction</b> (topic, context, point of view, organisation, scope) → <b>Main body</b> (organised by themes, general to specific) → <b>Conclusion</b> (summarise, evaluate, identify flaws/gaps, future areas, link to your research)."
    ]},
    { h: "Problem statement, aim and objectives", items: [
      "<b>Problem statement</b>: define what the problem is – not what you think the solution might be.",
      "<b>Aim</b>: what you hope to achieve by the end. Broad, can be aspirational, starts “The aim of this project is to…”, and does <b>not</b> say how it will be done (e.g. Kennedy’s moon speech).",
      "<b>Objectives</b>: specific, measurable <b>SMART</b> goals linked to deliverables. If all are completed, together they deliver the aim. They can be broken into tasks."
    ]},
    { h: "Theory, hypothesis and research questions", items: [
      "<b>Theory</b>: well-established, widely accepted, backed by lots of evidence, can predict (Graph Theory, Complexity Theory). <b>Hypothesis</b>: a proposed explanation / educated guess, limited evidence, needs testing.",
      "<b>Null hypothesis (H₀)</b>: no effect / no difference / no relationship (status quo). <b>Alternative (H₁ / Ha)</b>: there is an effect, difference or relationship.",
      "If H₀ is rejected → enough evidence for H₁. If H₀ is <b>not</b> rejected → not enough evidence for H₁, but that does <b>not prove H₀ true</b>.",
      "Null hypotheses are rare in <b>qualitative</b> research (no inferential statistics, exploratory, inductive).",
      "Question types: <b>Descriptive</b> (what are…?), <b>Comparative</b> (how does A differ from B?), <b>Causal</b> (how does X impact Y?), <b>Exploratory</b> (how do people perceive…?).",
      "“Why” questions are valuable but broad; researchers prefer “how” and “what”. “Is” questions give yes/no answers with limited depth."
    ]},
    { h: "Methodology depends on the field", items: [
      "<b>Science, medicine, social science</b>: experimental design → sampling → data collection → data analysis.",
      "<b>Engineering, computing, technology (design-oriented)</b>: approach → design → implementation → evaluation."
    ]},
    { h: "Writing a research proposal", items: [
      "You must <b>convince the examiners</b>: clear focus (what is and isn’t covered), novelty / fills an important gap, and the project is realistic and achievable (skills, time, money).",
      "Ingredients: provisional title (broad topic + focal topic + approach), introduction and problem, literature review, objectives, research questions, research design (philosophy, methodology, data collection, constraints), references (Harvard style), practicalities (ethics, budget, resources, project plan e.g. Gantt chart).",
      "Reference tools: Mendeley, Zotero, EndNote, BibTeX with LaTeX.",
      "Publication route: authors → editor/reviewers → publisher; indexes such as Scopus, Web of Science, Google Scholar; preprint servers such as arXiv."
    ]}
  ],
  terms: [
    ["Research", "Systematic investigation of materials and sources to establish facts and reach new conclusions."],
    ["Primary research", "New data collected by the researcher."],
    ["Secondary research", "Analysis of data that was already collected by someone else."],
    ["Research aim", "Broad statement of what you hope to achieve; says nothing about how."],
    ["SMART objectives", "Specific, Measurable, Achievable, Relevant, Time-bound goals that together deliver the aim."],
    ["Theory vs hypothesis", "Theory = well tested and widely accepted. Hypothesis = proposed explanation that still needs testing."],
    ["Null hypothesis (H₀)", "Assumes no effect, no difference or no relationship."],
    ["Literature review outputs", "Research problem and methodology used."],
    ["Causal research question", "Asks about a cause-and-effect relationship, e.g. How does AI impact customer satisfaction?"]
  ]
},
{
  id: 2, pdf: "pdfs/lectures/lecture-02.pdf", pages: 89,
  title: "Research Philosophy & the Research Onion",
  desc: "Ontology, epistemology and axiology; positivism vs interpretivism; the research onion – approaches, designs, strategies, variables, experiments, surveys, validity and reliability.",
  sections: [
    { h: "Research philosophy", items: [
      "A research philosophy is a belief about how data about a phenomenon should be gathered, analysed and used.",
      "<b>Ontology</b> = the nature of <i>being / reality</i>. <b>Epistemology</b> = <i>knowledge</i> and how it is acquired (nature, scope, limits). <b>Axiology</b> = <i>values</i> (good/bad, moral/immoral).",
      "Ontology beliefs: one universal truth; many realities; or one-or-many realities. Epistemology beliefs: knowledge can be measured; interpreted; or both."
    ]},
    { h: "Paradigms (worldviews)", items: [
      "<b>Realism</b>: objective reality exists independent of the human mind – important in natural science.",
      "<b>Positivism</b>: reality is objective and can be measured by systematic observation and experiment; uses large samples; accepts only ONE reality.",
      "<b>Interpretivism</b>: reality is socially constructed and understood through people’s subjective meanings and context; qualitative.",
      "<b>Constructivism</b>: knowledge is constructed by individuals from experiences and interactions.",
      "<b>Pragmatism</b>: focus on practical solutions and usefulness; combines positivism and interpretivism (mixed methods).",
      "<b>Critical realism</b>: the ‘real’ world (unobservable structures) differs from the ‘observable’ world; structures cause events.",
      "<b>Postmodernism</b>: challenges objective reality and universal truth; stresses power, language and social constructs."
    ]},
    { h: "The Research Onion (Saunders et al.)", items: [
      "Layers from outside in: Philosophy → Approach → Strategy / Methodological choice → Time horizon → Techniques & procedures (data collection and analysis).",
      "<b>Deductive</b>: general theory/hypothesis → test with observations (quantitative; confirm or refute). <b>Inductive</b>: specific observations → broader generalisations / new theory (qualitative). <b>Abductive</b>: incomplete observations → the most likely explanation (medical diagnosis, broken window and a ball).",
      "<b>Research design</b> is the plan to answer the question; <b>research strategy</b> is the actioning of that plan."
    ]},
    { h: "Research designs", items: [
      "<b>Exploratory</b>: investigates questions not studied in depth; investigates new or unclear problems; often qualitative.",
      "<b>Descriptive</b>: accurately describes a population, situation or phenomenon (e.g. common symptoms of COVID-19 patients).",
      "<b>Explanatory</b>: cause-and-effect, explains causal relationships (e.g. does working from home reduce productivity?) – best for “why” questions."
    ]},
    { h: "Research strategies", items: [
      "<b>Experiment</b>: theoretical hypothesis, sample from a known population, random allocation, planned intervention, measure dependent variables, control all other variables.",
      "<b>Survey</b>: popular in business; quantitative data; sample must be representative; questionnaires, structured observation and interviews.",
      "<b>Archival research</b>: uses existing administrative records and documents; no new data; studies change over time.",
      "<b>Case study</b>: detailed study of one person, group, place, event or organisation; mainly qualitative; rich, holistic, builds theory.",
      "<b>Ethnography</b>: immersion in a community over an extended time; participant observation, interviews, field notes.",
      "<b>Action research</b>: investigate and solve an issue at the same time; research <i>IN</i> action, practitioners involved, promotes change.",
      "<b>Grounded theory</b>: systematic inductive method that builds theory from data.",
      "<b>Design science</b>: build and evaluate an artefact that solves a problem."
    ]},
    { h: "Variables", items: [
      "<b>Independent</b> = the cause. <b>Dependent</b> = the effect (depends on the independent).",
      "<b>Mediating</b> variable <i>explains the process</i> by which two variables are related. <b>Moderating</b> variable changes the <i>strength and direction</i> of the relationship.",
      "<b>Control</b> variable: held constant because it could influence the outcome. <b>Confounding</b> variable: unmeasured third variable influencing both the supposed cause and effect.",
      "<b>Correlation</b> = statistical association. <b>Causation</b> = a change in one causes a change in the other. Correlation ≠ causation."
    ]},
    { h: "Experimental designs", items: [
      "<b>Classical experiment</b>: control group + treatment group, random assignment (placebo effect: improvement due to belief in treatment).",
      "<b>Quasi-experiment</b>: manipulation of the independent variable, but no control group, no random selection or no random assignment.",
      "<b>Between-subjects</b>: each participant experiences only ONE condition. <b>Within-subjects</b>: ALL participants get all treatments. <b>Counterbalanced</b> design avoids order effects of repeated measures."
    ]},
    { h: "Survey design", items: [
      "<b>Open-ended</b> questions (own words; attitudes, feelings) vs <b>closed-ended</b> (pre-set answers).",
      "<b>Likert scale</b>: agree–disagree, scored 1–5, summed. <b>Semantic differential</b>: opposite adjectives at each end, usually 7 points. <b>Visual Analogue Scale (VAS)</b>: a line with anchors at both ends for subjective experiences.",
      "Question sequence: easy, interesting opening questions → grouped by topic → sensitive questions not first.",
      "<b>Pre-test</b> goals: evaluate the questionnaire, estimate the time it takes, assess the quality of the surveyor.",
      "Survey report: Title page, Contents, Executive summary, Background & objectives, Methodology, Results, Conclusion & recommendations, Appendices."
    ]},
    { h: "Time horizons & credibility", items: [
      "<b>Cross-sectional</b>: a snapshot at a single point in time. <b>Longitudinal</b>: repeated over a long period.",
      "<b>Reliability</b> = consistency if repeated. <b>Validity</b> = measures what it intends to measure. <b>Internal validity</b> = causal relationship demonstrated. <b>External validity</b> = generalizable to other settings.",
      "Threats to reliability: participant error, participant bias, researcher error, researcher bias.",
      "Threats to internal validity: past/recent event, testing, instrumentation, mortality (drop-outs), maturation, ambiguity about causal direction."
    ]}
  ],
  terms: [
    ["Ontology", "Study of the nature of reality / being."],
    ["Epistemology", "Study of knowledge – how it is acquired, its nature, scope and limits."],
    ["Axiology", "Study of values – what is good/bad, moral/immoral."],
    ["Positivism", "Reality is objective and measurable; uses experiments and large samples."],
    ["Interpretivism", "Reality is socially constructed; understood through subjective meanings and context."],
    ["Pragmatism", "Practical usefulness; mixes positivist and interpretivist methods."],
    ["Deductive approach", "Theory → hypothesis → test with data."],
    ["Inductive approach", "Observations → patterns → new theory."],
    ["Abductive approach", "Incomplete observations → the most likely explanation."],
    ["Mediating variable", "Explains HOW / WHY two variables are related."],
    ["Moderating variable", "Changes the strength or direction of the relationship."],
    ["Confounding variable", "Unmeasured third variable that influences both cause and effect."],
    ["Quasi-experiment", "Experiment lacking random assignment, random selection or a control group."],
    ["Between-subjects design", "Each participant experiences only one treatment."],
    ["Within-subjects design", "All participants receive all treatments."],
    ["Cross-sectional study", "Conducted at a single point in time."],
    ["Longitudinal study", "Follows the same subjects over a long period."],
    ["Reliability vs validity", "Reliability = consistent results. Validity = measures the right thing."],
    ["Action research", "Investigate and solve an issue at the same time (research IN action)."]
  ]
},
{
  id: 3, pdf: "pdfs/lectures/lecture-03.pdf", pages: 32,
  title: "Research Ethics",
  desc: "Why ethics matter, Nuremberg and Helsinki, informed consent, plagiarism, misconduct, conflicts of interest, data management and predatory publishing.",
  sections: [
    { h: "Background", items: [
      "Research ethics began after World War II because of the experiments by Nazi doctors → the <b>Nuremberg Trials</b> → the <b>Nuremberg Code</b>.",
      "Nuremberg Code: voluntary consent; benefit society; avoid unnecessary suffering; risk must not exceed benefit; proper protection; only qualified scientists; participants may withdraw any time; stop the experiment if harm is likely.",
      "<b>Declaration of Helsinki (1964, World Medical Association)</b>: independent review of research projects, medically qualified supervisor, accuracy of results, informed consent, rules for children and mentally incompetent persons.",
      "Violations still happened – e.g. the <b>Tuskegee syphilis study</b> (1932–1972). Modern issues: mobile apps abusing camera/microphone permissions, targeted-ads misuse."
    ]},
    { h: "Research with humans and animals", items: [
      "<b>Informed consent</b>: participants know what they are getting into, are not coerced, understand the procedure, purpose, risks and benefits, alternatives, can ask questions and <b>withdraw at any time</b>.",
      "Ensure <b>privacy and confidentiality</b>, balance risk to the subject against benefit to society, ensure <b>justice</b> to vulnerable groups (minorities, women, children, prisoners…).",
      "Animals: humane care and treatment, humane transport, prevent use of stolen animals.",
      "<b>Ethics clearance forms</b> ensure ethical compliance in research."
    ]},
    { h: "Data management", items: [
      "Ethical, truthful collection of reliable data; ownership and responsibility (usually the principal investigator); safe storage to protect privacy; retention and sharing.",
      "Questions to settle: who is in charge, how it is collected, are identifiers removed, how is it stored, who ensures nothing is excluded, how long is it kept."
    ]},
    { h: "Misconduct", items: [
      "<b>Fabrication</b>: making up data or results and reporting them.",
      "<b>Falsification</b>: manipulating materials, equipment or processes, or changing/omitting data or results.",
      "<b>Plagiarism</b>: presenting someone else’s ideas, words, pictures or theories as your own – intent is not required and ignorance is no excuse; paraphrasing without citation is still plagiarism.",
      "Citation is mandatory when quoting, paraphrasing, using another’s idea/theory, or borrowing facts and statistics (unless common knowledge). Use quotation marks for verbatim text.",
      "<b>Redundant / duplicate publication</b> = substantially overlapping with your own published work = <b>self-plagiarism</b>.",
      "Why fabrication is misconduct: it deceives readers, corrupts the scientific record, wastes others’ resources, may cause real harm and destroys trust in all research."
    ]},
    { h: "Authorship & conflict of interest", items: [
      "<b>Co-authorship</b> needs significant contribution in conducting the research, writing up and approving the final submission; otherwise just acknowledge.",
      "<b>Conflict of interest</b>: personal interests clash with professional duties; disclose early and clearly; the person may have to recuse themselves."
    ]},
    { h: "Predatory publishing", items: [
      "Predatory publishers/journals are fake or low-quality outlets that charge fees without real peer review. Check <b>Beall’s List</b> (including hijacked journals).",
      "Signs of a fake conference/publisher: no peer-review reports, unusually frequent conferences, suspiciously similar name to an existing one, higher-than-normal fees, very broad technical programme, odd language on the website, missing or wrong contact details."
    ]}
  ],
  terms: [
    ["Nuremberg Code", "Ethics code created after the Nazi doctors’ trials; starts with voluntary consent."],
    ["Declaration of Helsinki", "1964 WMA statement of ethical principles for medical research on humans."],
    ["Informed consent", "Participants understand and freely agree, and can withdraw at any time."],
    ["Fabrication", "Making up data or results."],
    ["Falsification", "Manipulating or omitting data, equipment or processes."],
    ["Plagiarism", "Presenting others’ ideas or words as your own."],
    ["Self-plagiarism / redundant publication", "Publishing a paper that substantially overlaps with your own earlier paper."],
    ["Conflict of interest", "Personal interests interfere with official duties."],
    ["Predatory publisher", "Fake/low-quality outlet charging fees with no genuine peer review (see Beall’s List)."],
    ["Ethics clearance form", "Ensures ethical compliance of a research project."]
  ]
},
{
  id: 4, pdf: "pdfs/lectures/lecture-04.pdf", pages: 35,
  title: "Sampling Size & Sampling Methods",
  desc: "Demographic segmentation, how to calculate sample size, qualitative sample size, and probability vs non-probability sampling methods.",
  sections: [
    { h: "Demographic segmentation", items: [
      "Dividing a population by age, gender, income, race, family type etc.",
      "<b>Advantages</b>: census data is easy to get; variables can be adjusted to need; gives insight into the target audience; reduces cost and time.",
      "<b>Disadvantages</b> (useful for exam answers): treats everyone in a group as the same (stereotyping); ignores behaviour, values and lifestyle (psychographics); data may be outdated or inaccurate; groups can overlap and change over time."
    ]},
    { h: "Sample size – quantitative", items: [
      "Sample size = number of individuals included to represent the population. <b>Too small</b> → invalid, not representative. <b>Too large</b> → costly and slow. Larger samples give smaller margins of error.",
      "A <b>predetermined sample size</b> (calculated before collecting data) keeps results statistically valid, controls sampling error, avoids wasted cost and time and prevents stopping when results ‘look good’.",
      "Factors: <b>population size</b>, <b>confidence interval (margin of error)</b>, <b>confidence level</b> (95%, 99%…), <b>expected standard deviation</b> (use 0.5 when unknown).",
      "<b>Formula (Andrew Fisher)</b>: n = Z² × p(1−p) / e². With Z = 1.96 (95%), p = 0.5, e = 0.05 → n = 3.8416 × 0.25 / 0.0025 = 384.16 → <b>385</b>.",
      "Rule of thumb: ~400 per country minimum; 800 for a second-level breakdown (male vs female); 1200+ for a third-level breakdown."
    ]},
    { h: "Sample size – qualitative", items: [
      "<b>Quality over quantity</b>: recruit the right people. Choose a suitable design (in-depth interviews, focus groups, ethnography).",
      "Principle of <b>saturation</b>: stop when no new information appears.",
      "In-depth interviews: about 20–30 (as few as 10 can be fruitful with careful recruiting)."
    ]},
    { h: "Probability sampling (every member has a known chance)", items: [
      "<b>Simple random</b>: every member has an equal chance (draw 10 cards out of 1000).",
      "<b>Systematic</b>: pick at regular intervals – interval = population ÷ sample size (5000 ÷ 500 = every 10th person). Least time-consuming.",
      "<b>Cluster</b>: divide the population into natural clusters (cities, schools), randomly select some clusters, survey everyone (single-stage) or a random sample inside them (two-stage). Cost-effective for dispersed populations; higher sampling error.",
      "<b>Stratified random</b>: divide into non-overlapping strata (e.g. income groups) and sample from every stratum – proportionate or disproportionate. Higher accuracy and subgroup analysis but needs detailed population knowledge."
    ]},
    { h: "Non-probability sampling", items: [
      "<b>Convenience</b>: easiest to reach (mall shoppers) – early stages, limited time and money.",
      "<b>Purposive / judgemental</b>: participants chosen for their knowledge or characteristics – ideal for qualitative studies (e.g. people living with chronic pain).",
      "<b>Snowball</b>: existing participants refer others – hard-to-trace or sensitive groups (homeless, illegal immigrants).",
      "<b>Quota</b>: pre-set attributes matching the population, but selection is not random (similar to stratified but non-random).",
      "Used for creating hypotheses, exploratory research, and budget/time constraints."
    ]}
  ],
  terms: [
    ["Sample size formula", "n = Z² × p(1−p) / e²  (Z = 1.96 for 95% confidence)."],
    ["Sample size at 95% / ±5%", "385 respondents (σ = 0.5)."],
    ["Confidence interval", "The ± margin of error around a result."],
    ["Confidence level", "How often the interval would contain the true population value (95%, 99%)."],
    ["Saturation", "Point where new data adds no new information (qualitative sample size)."],
    ["Simple random sampling", "Every member has the same chance of selection."],
    ["Systematic sampling", "Every k-th member, k = population ÷ sample size."],
    ["Cluster sampling", "Randomly select whole clusters (e.g. schools) then survey within them."],
    ["Stratified sampling", "Split into non-overlapping strata and sample each stratum."],
    ["Convenience sampling", "Select whoever is easiest to reach."],
    ["Purposive sampling", "Choose people deliberately for their knowledge/experience."],
    ["Snowball sampling", "Participants recruit others; for hidden / sensitive populations."],
    ["Quota sampling", "Fill pre-set quotas of attributes, non-randomly."]
  ]
},
{
  id: 5, pdf: "pdfs/lectures/lecture-05.pdf", pages: 41,
  title: "Addressing Missing Data Issues",
  desc: "Why data goes missing, its problems, the three missing-data mechanisms (MCAR, MAR, MNAR) and the methods to prevent or handle it.",
  sections: [
    { h: "What and why", items: [
      "<b>Missing data</b> = values not stored for a variable in a data set.",
      "Reasons: attrition, unintentionally or intentionally skipped questions, random collection issues, refusal, non-respondents, corrupted data.",
      "<b>Problems</b>: reduces statistical power, produces biased estimates, error-prone analysis.",
      "Best solution: <b>prevent it</b> – pilot test, good communication, ‘not applicable’ option, digital collection, check before respondents leave, protect confidentiality."
    ]},
    { h: "Missing data mechanisms", items: [
      "<b>MCAR – Missing Completely At Random</b>: missingness depends neither on X nor Y (accidentally skipped, scanner/OCR failure).",
      "<b>MAR – Missing At Random</b>: depends on other observed variables but not the missing value itself (service-occupation respondents less likely to report income).",
      "<b>MNAR – Missing Not At Random</b>: depends on the missing value itself (high earners hide income; students hiding drug use; civil servants not giving views on government). ‘Non-ignorable’ – the most problematic.",
      "MCAR and MAR are ‘ignorable’. <b>Little’s test</b> (SPSS) tests for MCAR; there is no definitive test for MAR/MNAR."
    ]},
    { h: "Methods of handling", items: [
      "<b>Recovering</b>: go back to the respondent or raw data.",
      "<b>Listwise deletion</b>: drop any case with a missing value. Simple, but excludes many cases, <b>reduces statistical power</b>, biased unless MCAR.",
      "<b>Pairwise deletion</b>: use all available pairs for each calculation. Less loss, but the sample differs each time, so analyses can’t be compared.",
      "<b>Mean imputation</b>: replace with the mean. Easy, but reduces variability and weakens correlations.",
      "<b>Regression imputation</b>: predict the missing value from other variables. Uses information, but can <b>overestimate relationships and weaken variance</b>.",
      "<b>Multiple imputation</b>: Impute (m datasets) → Analyse each → Pool the results. Most accurate, but cumbersome and results vary slightly.",
      "<b>Maximum likelihood</b>: uses all information; unbiased for MCAR/MAR; needs specialised software.",
      "<b>Hot-deck imputation</b>: replace with an observed value from a ‘similar’ respondent; used by government statistics agencies."
    ]}
  ],
  terms: [
    ["MCAR", "Missingness unrelated to any variable – purely accidental."],
    ["MAR", "Missingness depends on other observed variables, not on the missing value."],
    ["MNAR", "Missingness depends on the missing value itself – non-ignorable."],
    ["Listwise deletion", "Remove every case with any missing value; reduces statistical power."],
    ["Pairwise deletion", "Use all available data for each pair of variables."],
    ["Mean imputation", "Fill gaps with the mean; shrinks variability."],
    ["Regression imputation", "Predict missing values from other variables; can overestimate and weaken variance."],
    ["Multiple imputation", "Impute m times → analyse each → pool."],
    ["Hot-deck imputation", "Copy a value from a similar respondent."],
    ["Little’s test", "Test for MCAR (in SPSS)."]
  ]
},
{
  id: 6, pdf: "pdfs/lectures/lecture-06.pdf", pages: 60,
  title: "Exploratory Data Analysis & Visualization",
  desc: "Summary statistics, histograms, boxplots, scatterplots, jittering, z-scores and multivariate visualisation – how to ‘get to know your data’.",
  sections: [
    { h: "Why EDA?", items: [
      "<b>EDA</b> = get a general sense of the data before modelling. Benefits: see distributions (symmetric, normal, skewed), detect data-quality problems, find <b>outliers</b>, check assumptions (e.g. normality), spot correlations and relationships, identify useful transforms (e.g. log), and suggest functional relationships and subsets of interest.",
      "Humans can’t process raw numbers well – visualise them. Always look at every variable."
    ]},
    { h: "Summary statistics", items: [
      "<b>Central tendency</b>: mean, median, mode. <b>Variability</b>: range, variance, standard deviation, interquartile range (IQR = Q3 − Q1).",
      "Central tendency alone is inadequate: 3,5,6,3,3 and 4,4,4,4,4 and 10,1,0,0,9 all have mean 4 but different spread.",
      "<b>Standard (z) score</b> = (x − mean) / SD. +2 means 2 SD above the mean. Allows comparing scores from <b>different normal distributions</b>; doesn’t change relative standing.",
      "<b>Skewness</b> = 0 if symmetric. Right (positive) skew is more common (income). <b>Negatively skewed</b> data has a long tail to the left, e.g. exam marks on an easy exam or age at death – most values high, few very low."
    ]},
    { h: "One variable", items: [
      "<b>Histogram</b>: shows centre, spread, skewness, modality and outliers. Bin width and position matter; can mislead on small data sets.",
      "<b>Density plot</b>: smoothed histogram; bandwidth choice is an art.",
      "<b>Boxplot</b>: median, IQR (box), range/whiskers and outliers in one plot. <b>Does NOT show correlation</b>. Negatives: hard to see distribution shape; no standard implementation. Advantage: compact, compares groups side-by-side.",
      "Time series – exploit the temporal component (trend, seasonality). Spatial data – choropleth maps."
    ]},
    { h: "Two or more variables", items: [
      "<b>Scatterplot</b>: relationship between two continuous variables – linear, quadratic, none; check variance and outliers. <b>Homoscedastic</b> = constant spread; <b>heteroscedastic</b> = spread of Y depends on X (tax vs income).",
      "<b>Jittering</b>: add a small random noise to points to <b>separate overlapping points</b>. For huge data use contour plots.",
      "One categorical variable: side-by-side boxplots, small multiples (lattice/trellis), stacked bar charts and spine plots.",
      "More than two variables: pairwise scatterplots, conditioning (trellis), <b>parallel coordinates</b> (e.g. iris data), alpha blending, network graphs.",
      "Avoid pie charts (humans compare arcs badly) and badly done 3D."
    ]}
  ],
  terms: [
    ["EDA", "Exploratory Data Analysis – getting to know your data using statistics and plots."],
    ["IQR", "Interquartile range = Q3 − Q1."],
    ["z-score", "(x − mean)/SD; lets you compare scores from different normal distributions."],
    ["Skewness", "Asymmetry of a distribution; zero if symmetric."],
    ["Negatively skewed", "Long tail on the left; most values are high."],
    ["Boxplot", "Shows median, IQR, range and outliers – not correlation."],
    ["Jittering", "Adding small random noise to separate overlapping points."],
    ["Heteroscedastic", "Spread of Y changes with X."],
    ["Parallel coordinates", "Multivariate plot with one vertical axis per variable."],
    ["Choropleth map", "Map shaded by value."]
  ]
},
{
  id: 7, pdf: "pdfs/lectures/lecture-07.pdf", pages: 44,
  title: "Quantitative Research",
  desc: "Characteristics, levels of measurement, data preparation (validation, editing, coding), outliers, descriptive and inferential statistics, correlation and multivariate analysis.",
  sections: [
    { h: "Characteristics", items: [
      "Structured tools (surveys, questionnaires), significant sample size, closed-ended questions, prior study of the factors, numeric data (tables/charts), results <b>generalizable</b> to the population.",
      "Steps: research question → research design → collect data → analyse data → draw conclusions. Secondary data minimises the collection step."
    ]},
    { h: "Levels of measurement", items: [
      "<b>Nominal</b>: categories, no order (gender, eye colour).",
      "<b>Ordinal</b>: ordered, but distances not equal (low/middle/high income; 1–5 ratings).",
      "<b>Interval</b>: equal intervals, <b>arbitrary zero</b> (Fahrenheit).",
      "<b>Ratio</b>: equal intervals with a <b>true zero</b> (salary, weight). Attitudes are usually measured on ordinal (Likert) scales."
    ]},
    { h: "Data preparation: validate → edit → code", items: [
      "<b>Data validation</b> has four checks: <b>Fraud</b> (was the respondent really interviewed?), <b>Screening</b> (were respondents chosen per the research criteria?), <b>Procedure</b> (was the collection procedure followed?), <b>Completeness</b> (were all questions asked?).",
      "<b>Data editing</b>: basic tests (respondents vs rows, questions vs columns, time stamps), detect outliers, address missing data.",
      "<b>Data coding</b>: grouping and assigning values to responses (e.g. age buckets); open-ended answers need a <b>codebook</b>."
    ]},
    { h: "Outliers", items: [
      "An <b>outlier</b> is a point significantly different from others – it may be accurate or inaccurate. Find with histograms (one variable), scatterplots (two) and the statistical way.",
      "<b>Fences</b>: IQR = Q3 − Q1. Inner fences Q1 − 1.5·IQR and Q3 + 1.5·IQR (mild outliers beyond). Outer fences Q1 − 3·IQR and Q3 + 3·IQR (extreme outliers beyond).",
      "Correct outlier (real) → leave it, it may be a useful insight. Incorrect (300 °C city temperature) → resurvey the data point, or delete it if that is not possible."
    ]},
    { h: "Descriptive statistics", items: [
      "Frequency, percentage, mean, median, mode, range, variance, SD, quartiles.",
      "Univariate analysis (one variable): frequency tables, bar charts, histograms, frequency polygons, pie charts."
    ]},
    { h: "Inferential statistics", items: [
      "Draw conclusions about a population from a sample; test hypotheses.",
      "<b>t-test</b> (compare two means) · <b>ANOVA</b> (compare means of 3+ groups) · <b>Chi-square</b> (relationship between categorical variables) · <b>Regression</b> (predict outcomes) · <b>Correlation</b> (strength/direction) · <b>Non-parametric tests</b> (no normality assumption).",
      "<b>Pearson’s r</b> ranges from −1 to +1: strength and direction of a <b>linear</b> relationship; 0 = none; very sensitive to outliers; correlation ≠ causation.",
      "Significance level usually 0.05 (95% confidence).",
      "<b>Bivariate</b>: scatter plots, regression, correlation. <b>Multivariate</b>: multiple linear regression Y = a + bX₁ + cX₂ + …, multiple correlation, non-linear regression, <b>cluster analysis</b> (grouping individuals into unknown groups)."
    ]}
  ],
  terms: [
    ["Nominal", "Categories with no order."],
    ["Ordinal", "Ordered categories, unequal distances."],
    ["Interval", "Equal intervals, arbitrary zero (Fahrenheit)."],
    ["Ratio", "Equal intervals, true zero point (salary)."],
    ["Fraud (validation)", "Check whether the respondent was actually interviewed."],
    ["Screening (validation)", "Check respondents match the selection criteria."],
    ["Procedure (validation)", "Check the collection procedure was followed."],
    ["Completeness (validation)", "Check all questions were asked."],
    ["Outlier fences", "Q1 − 1.5·IQR and Q3 + 1.5·IQR (inner); 3·IQR for outer fences."],
    ["Codebook", "List of codes and descriptions used to quantify responses."],
    ["Pearson’s r", "Strength and direction of a linear relationship, −1 to +1."],
    ["t-test / ANOVA / Chi-square", "Compare 2 means / compare 3+ means / test relationships between categorical variables."],
    ["Cluster analysis", "Groups individuals into unknown groups."],
    ["Multiple linear regression", "Predict Y from several independent variables."]
  ]
},
{
  id: 8, pdf: "pdfs/lectures/lecture-08.pdf", pages: 71,
  title: "Introduction to Qualitative Research Methods",
  desc: "Qualitative characteristics and designs, data collection methods, coding types, thematic and narrative analysis, and mixed-method designs.",
  sections: [
    { h: "What is qualitative research?", items: [
      "Characteristics: natural setting; the <b>researcher is the key instrument</b>; multiple sources of data; outcome as process; <b>inductive</b> analysis; focus on participants’ perspectives and meanings; emergent design; reflexivity; holistic account.",
      "Designs: <b>Narrative</b> (stories of individuals’ lives), <b>Phenomenological</b> (lived experiences of a phenomenon), <b>Grounded theory</b> (theory grounded in participants’ views), <b>Ethnographic</b> (shared patterns of an intact cultural group over a prolonged time), <b>Case study</b> (in-depth analysis of a bounded case)."
    ]},
    { h: "Data collection", items: [
      "<b>Observation</b>: as participant, as observer, or a mix.",
      "<b>Interviews</b>: unstructured, semi-structured, focus group; audio recorded and transcribed; also email, online, telephone.",
      "<b>Documents</b>: journals, diaries, letters, public records, medical records. <b>Audio-visual</b>: photos, videos, websites, social media messages.",
      "Before collection: set boundaries, write the method and ethics, get approval from institutions and participants; decide who sees the data and what happens to it afterwards."
    ]},
    { h: "Qualitative data analysis & coding", items: [
      "Analysis = <b>coding and interpreting</b>; data collection and analysis happen simultaneously; tools: NVivo, MAXQDA.",
      "<b>In vivo</b> – participant’s own words. <b>Process</b> – captures actions. <b>Descriptive</b> – summarises content into a <i>noun or short phrase</i> (like hashtags). <b>Open</b> – first loose, tentative round. <b>Structural</b> – categorise text by a set structure (e.g. one code per interview question).",
      "2nd round: <b>Pattern</b> (group similar codes), <b>Axial</b> (relate codes/categories to each other), <b>Focused/selective</b> (finalised code list, re-code), <b>Thematic</b> (find recurring themes)."
    ]},
    { h: "Thematic analysis (Braun & Clarke, 6 steps)", items: [
      "1 <b>Familiarization</b> → 2 <b>Coding</b> → 3 <b>Generating themes</b> → 4 <b>Reviewing themes</b> → 5 <b>Defining and naming themes</b> → 6 <b>Writing up</b>.",
      "Use it to study people’s views, opinions, experiences or values from interviews, social media or open survey answers.",
      "Approaches: inductive vs deductive; semantic (explicit content) vs latent (underlying assumptions). Risk: subjective, may miss nuance, confirmation bias.",
      "<b>Narrative analysis</b>: analyses the stories people tell – transcribe, then use story-structure frameworks. Use for life histories, patient or migration stories."
    ]},
    { h: "Mixed-method research", items: [
      "Collect <b>both</b> quantitative and qualitative data, integrate them; together they give a more complete understanding.",
      "<b>Convergent parallel</b>: QUAN + QUAL together, then compare. <b>Explanatory sequential</b>: QUAN first → QUAL explains. <b>Exploratory sequential</b>: <b>QUAL first</b> → build an instrument → QUAN. <b>Embedded</b>, <b>Transformative</b>, <b>Multiphase</b> designs also exist.",
      "Integration: side-by-side comparison, data transformation, joint display."
    ]}
  ],
  terms: [
    ["Phenomenological research", "Describes the lived experiences of people about a phenomenon."],
    ["Narrative research", "Studies and retells individuals’ life stories."],
    ["Grounded theory", "Builds theory from participants’ data (inductive)."],
    ["Ethnography", "Long-term study of a cultural group in its natural setting."],
    ["In vivo coding", "Code using the participant’s own words."],
    ["Process coding", "Codes that capture actions."],
    ["Descriptive coding", "Summarise content into a noun / short phrase."],
    ["Open coding", "First, loose and tentative round of coding."],
    ["Structural coding", "Categorise text according to a specific structure."],
    ["Axial coding", "Relate codes and categories to one another."],
    ["Thematic analysis steps", "Familiarize → Code → Generate themes → Review → Define & name → Write up."],
    ["Convergent parallel", "QUAN and QUAL collected together, then compared."],
    ["Explanatory sequential", "QUAN first, QUAL explains the results."],
    ["Exploratory sequential", "QUAL first, then QUAN to test/generalize."]
  ]
},
{
  id: 9, pdf: "pdfs/lectures/lecture-09.pdf", pages: 42,
  title: "How to Write Your Thesis",
  desc: "Thesis vs dissertation, preliminary pages, chapter-by-chapter structure and referencing.",
  sections: [
    { h: "Thesis basics", items: [
      "A research report/thesis presents the results of <b>completed</b> research; a <b>proposal</b> is the plan before the research (written in present/future tense, 4–10 pages).",
      "American English: <b>thesis</b> = master’s, <b>dissertation</b> = doctorate. British English: dissertation = bachelor’s/master’s, thesis = doctorate.",
      "Thesis route: student(s) → supervisor approval → research coordinator → examiners → defence → exam board approval."
    ]},
    { h: "Structure", items: [
      "<b>A. Preliminaries</b>: title page, acknowledgement, dedication, declaration, table of contents, list of tables, list of figures, list of abbreviations.",
      "<b>B. Main body</b>: 1 Introduction · 2 Literature review · 3 Methodology · 4 Results & discussion · 5 Conclusions & recommendations.",
      "<b>C. References and appendices</b>."
    ]},
    { h: "Chapter by chapter", items: [
      "<b>Ch 1 Introduction</b>: need and scope – problem statement, objectives, hypothesis / <b>research questions</b>, significance, limitations, definitions.",
      "<b>Ch 2 Literature review</b>: introduction, review, critical analysis &amp; research gaps, conclusion.",
      "<b>Ch 3 Methodology</b>: method, population and sample, tools, data collection techniques, procedure.",
      "<b>Ch 4 Results &amp; discussion</b>: quantitative &amp; qualitative analysis in tables and figures, with interpretation; the researcher’s original contribution.",
      "<b>Ch 5 Conclusions</b>: how the research questions were answered, main findings, suggestions for future studies – the most important and reflective chapter."
    ]},
    { h: "References", items: [
      "Only citations that appear in the text are listed; everything cited must be listed. Use reference managers (Mendeley, Zotero, EndNote, BibTeX).",
      "List of abbreviations: shortened words, acronyms (LASER), and letter-by-letter abbreviations (DNA, HTML)."
    ]}
  ],
  terms: [
    ["Research proposal", "Plan submitted for approval before research starts."],
    ["Research report / thesis", "Written results of completed research."],
    ["Chapter 1", "Introduction – problem, objectives, research questions, significance, limitations."],
    ["Chapter 2", "Literature review and research gaps."],
    ["Chapter 3", "Methodology – method, sample, tools, procedure."],
    ["Chapter 4", "Results and discussion."],
    ["Chapter 5", "Conclusions and recommendations."]
  ]
},
{
  id: 10, pdf: "pdfs/lectures/lecture-10.pdf", pages: 43,
  title: "How to Write & Publish a Research Paper",
  desc: "Types of publications, the structure of a paper, writing the abstract and introduction, giving credit, reviews and presentation tips.",
  sections: [
    { h: "Why write well?", items: [
      "Good writing is a learnable skill: more accepted papers, more impact, better ideas. The goal is to ‘infect the mind of the reader’ with your idea.",
      "Papers have <b>one ‘ping’</b> – one clear, sharp idea / novelty. Be 100% explicit about what your idea is.",
      "Types: conference papers (full, short, poster, demo, doctoral consortium), journal papers (regular, systematic literature reviews), books/chapters, magazines."
    ]},
    { h: "Structure of a paper", items: [
      "Title → <b>Abstract</b> (150–200 words) → <b>Introduction</b> (1 page) → <b>Related work</b> → <b>Methodology</b> → <b>Results / evaluation</b> → <b>Discussion</b> → <b>Conclusions &amp; future work</b>.",
      "<b>Abstract in four sentences</b>: 1 state the problem, 2 why it is interesting, 3 what your solution achieves, 4 what follows from it. Write it last.",
      "<b>Introduction (one page)</b>: background, describe the problem, state your contributions (bullet list), briefly introduce the next sections; use forward references.",
      "<b>Related work</b> comes AFTER the idea so readers understand it; be generous to competitors; acknowledge weaknesses. <b>Discussion</b>: reasons for results, comparison with similar work, limitations, future work."
    ]},
    { h: "Writing advice", items: [
      "Convey the <b>intuition first</b>, details after; choose the most direct route – don’t retell your journey.",
      "The introduction makes <b>claims</b>; the body provides <b>evidence</b> (analysis, measurements, case studies).",
      "Start early; revise several times; collaborate; use version control; spell-check; use active voice, simple words, pictures and visual structure.",
      "Treat reviews ‘like gold dust’ – answer every criticism, thank reviewers, write a rebuttal letter. Submit on time, within length limits."
    ]}
  ],
  terms: [
    ["The ‘ping’", "The one clear, sharp idea / novelty of a paper."],
    ["Abstract (4 sentences)", "Problem → why interesting → what your solution achieves → what follows."],
    ["Contributions list", "Bulleted list in the introduction that drives the entire paper."],
    ["Related work", "Placed after the idea; shows how your work differs from others."],
    ["Rebuttal letter", "Author’s response to reviewers’ comments."],
    ["Systematic literature review", "A journal-paper type that reviews published research systematically."]
  ]
}
];
