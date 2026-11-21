window.DATA = window.DATA || {};
(function () {
  var bank = [];
  function q(lec, text, opts, ans, why) { bank.push({ id: "q" + (bank.length + 1), lec: lec, q: text, o: opts, a: ans, e: why }); }

  /* ---------- Lecture 1 ---------- */
  q(1, "Research is best described as…", ["A single experiment", "A systematic investigation to establish facts and reach new conclusions", "Collecting any information from the internet", "Writing a long report"], 1, "Research is the systematic investigation into and study of materials and sources to establish facts and reach new conclusions.");
  q(1, "Which two outputs come from a good literature review?", ["Research problem and methodology used", "Sample size and budget", "Results and conclusion", "Title and abstract"], 0, "A literature review reveals the research problem and the methodology already used.");
  q(1, "Which statement about a research AIM is correct?", ["It lists measurable tasks", "It states exactly how the problem will be solved", "It is broad and does not say how the problem will be solved", "It is the same as the results"], 2, "The aim is broad, can be aspirational and does not say how; objectives are the specific, measurable steps.");
  q(1, "A hypothesis differs from a theory because a hypothesis…", ["Is already widely accepted", "Is a proposed explanation that still needs testing", "Cannot be tested", "Is always true"], 1, "A theory is well tested and accepted; a hypothesis is a starting point that needs testing.");
  q(1, "If you FAIL to reject the null hypothesis you can say…", ["The null hypothesis is proven true", "There is not enough evidence to support the alternative hypothesis", "The alternative hypothesis is true", "The study is invalid"], 1, "Not rejecting H₀ does not prove it true – there is simply insufficient evidence for H₁.");
  q(1, "“How does AI integration impact customer satisfaction?” is what type of research question?", ["Descriptive", "Comparative", "Causal", "Exploratory"], 2, "It asks about a cause-and-effect relationship.");
  q(1, "The methodology of a design-oriented (engineering/computing) study typically follows…", ["Sampling → data collection → analysis", "Approach → design → implementation → evaluation", "Aim → hypothesis → p-value", "Interview → coding → themes"], 1, "Science uses experimental design/sampling/data; design-oriented fields use approach, design, implementation, evaluation.");
  q(1, "Why are research questions beginning with “Is…?” uncommon?", ["They are unethical", "They give yes/no answers with limited depth", "They cannot be measured", "They need a larger sample"], 1, "Yes/no answers rarely reveal mechanisms, context or complexity.");

  /* ---------- Lecture 2 ---------- */
  q(2, "Which branch of philosophy is concerned with the nature of knowledge?", ["Ontology", "Axiology", "Epistemology", "Ethics"], 2, "Epistemology = knowledge; ontology = being/reality; axiology = values.");
  q(2, "Ontology is concerned with…", ["Values", "Knowledge", "Reality / being", "Methods"], 2, "Ontology asks what reality is – one truth or many.");
  q(2, "Which paradigm assumes reality is objective and measurable through experiments on large samples?", ["Interpretivism", "Positivism", "Constructivism", "Postmodernism"], 1, "Positivism accepts one objective reality that can be measured.");
  q(2, "A researcher starts with a theory, forms hypotheses and tests them with data. This is…", ["Inductive", "Abductive", "Deductive", "Grounded"], 2, "Deductive = theory → hypothesis → test.");
  q(2, "Finding a broken window and concluding a ball probably caused it is an example of…", ["Deductive reasoning", "Inductive reasoning", "Abductive reasoning", "Random sampling"], 2, "Abduction picks the most likely explanation from incomplete observations.");
  q(2, "Which design is best for answering “why” (cause and effect) questions?", ["Descriptive", "Explanatory", "Exploratory", "Archival"], 1, "Explanatory research investigates causal relationships.");
  q(2, "A variable that changes the STRENGTH or DIRECTION of the relationship between two variables is a…", ["Mediator", "Moderator", "Confounder", "Control variable"], 1, "A moderator changes strength/direction; a mediator explains the process.");
  q(2, "A confounding variable is…", ["A variable held constant", "An unmeasured third variable influencing both cause and effect", "The dependent variable", "The same as a moderator"], 1, "It distorts the apparent cause–effect relationship.");
  q(2, "In a between-subjects design…", ["Everyone gets every treatment", "Each participant experiences only one condition", "There is no control group", "Participants are not assigned"], 1, "Within-subjects gives all treatments to everyone.");
  q(2, "A quasi-experiment is an experiment that…", ["Has full control", "Lacks random assignment, random selection or a control group", "Uses only observation", "Is always qualitative"], 1, "It manipulates an independent variable but lacks full experimental control.");
  q(2, "A 7-point scale with opposite adjectives at the two ends is a…", ["Likert scale", "Semantic differential scale", "Visual analogue scale", "Nominal scale"], 1, "Semantic differential uses bipolar adjective anchors, typically 7 points.");
  q(2, "Which research strategy investigates and solves a problem at the same time?", ["Survey", "Archival research", "Action research", "Case study"], 2, "Action research = research IN action, promoting change.");
  q(2, "Internal validity is about…", ["Generalizing to other groups", "Showing a causal relationship between variables", "Consistency of results", "Sample size"], 1, "External validity is generalization; reliability is consistency.");

  /* ---------- Lecture 3 ---------- */
  q(3, "The Nuremberg Code was created in response to…", ["Tuskegee study", "Experiments by Nazi doctors", "Facebook ad targeting", "Plagiarism scandals"], 1, "Ethics rules began after WWII and the Nuremberg trials.");
  q(3, "Making up data or results is called…", ["Falsification", "Fabrication", "Plagiarism", "Redundant publication"], 1, "Fabrication = inventing data; falsification = manipulating or omitting it.");
  q(3, "Publishing a paper that substantially overlaps with your own previous paper is…", ["Data fabrication", "Data falsification", "Self-plagiarism (redundant publication)", "Predatory publishing"], 2, "Redundant/duplicate publication is a form of self-plagiarism.");
  q(3, "Which is NOT a sign of a fake conference?", ["No peer-review reports", "Unusually frequent events", "Contact details missing", "A narrow, focused technical programme"], 3, "Fake conferences usually have a very BROAD programme.");
  q(3, "A conflict of interest occurs when…", ["You publish in a predatory journal", "Personal interests interfere with official duties", "A participant refuses consent", "Co-authors disagree"], 1, "Personal interest clashes with professional duty.");
  q(3, "Informed consent means participants…", ["Must complete the study once started", "Understand the study, volunteer, and may withdraw at any time", "Are paid", "Are told only the benefits"], 1, "Consent must be informed, voluntary and revocable.");
  q(3, "The 1964 Declaration of Helsinki was issued by…", ["UN", "World Medical Association", "WHO", "IEEE"], 1, "WMA – ethical principles for medical research involving human subjects.");
  q(3, "Which resource lists predatory publishers?", ["Scopus", "Beall’s List", "Google Scholar", "arXiv"], 1, "Beall’s List (including hijacked journals).");
  q(3, "Why is data fabrication serious misconduct?", ["It makes papers longer", "It deceives readers, corrupts the scientific record and may cause harm", "It is only a formatting issue", "It breaks copyright only"], 1, "Fabrication destroys trust and can lead to real harm when others rely on false findings.");

  /* ---------- Lecture 4 ---------- */
  q(4, "Using Z = 1.96, p = 0.5 and a ±5% margin of error, the required sample size is about…", ["100", "385", "1000", "50"], 1, "n = 1.96² × 0.25 / 0.05² = 384.16 → 385.");
  q(4, "Which is NOT a factor in calculating sample size?", ["Confidence level", "Margin of error", "Expected standard deviation", "The researcher’s age"], 3, "Population size, confidence interval, confidence level and standard deviation are used.");
  q(4, "Choosing every 10th person from a numbered list of 5000 to get 500 people is…", ["Simple random", "Systematic sampling", "Cluster sampling", "Quota sampling"], 1, "Interval = 5000 / 500 = 10.");
  q(4, "Randomly selecting whole schools and surveying all students in them is…", ["Stratified sampling", "Cluster sampling", "Snowball sampling", "Convenience sampling"], 1, "Clusters are selected randomly; every member of selected clusters is surveyed.");
  q(4, "Which sampling method is best for hard-to-reach or sensitive populations?", ["Simple random", "Systematic", "Snowball", "Stratified"], 2, "Participants refer other participants.");
  q(4, "Quota sampling differs from stratified sampling because in quota sampling…", ["Groups are not used", "Selection within groups is not random", "Sample size is unknown", "It is a probability method"], 1, "Quota is non-probability; stratified draws randomly from each stratum.");
  q(4, "A qualitative study of people living with chronic pain would best use…", ["Simple random sampling", "Purposive sampling", "Systematic sampling", "Cluster sampling"], 1, "Participants must have the specific experience – selected deliberately.");
  q(4, "Salaries of different age groups across Sri Lanka – the most suitable sampling method is…", ["Stratified random sampling", "Snowball sampling", "Convenience sampling", "Purposive sampling"], 0, "Age groups are strata; each must be represented in a quantitative probability sample.");
  q(4, "In qualitative research sample size is guided by…", ["The margin of error formula", "Saturation", "Population size", "Z-score"], 1, "Stop when no new information emerges.");

  /* ---------- Lecture 5 ---------- */
  q(5, "A respondent hides their income BECAUSE it is high. This is…", ["MCAR", "MAR", "MNAR", "Not missing data"], 2, "Missingness depends on the missing value itself – MNAR.");
  q(5, "A page is accidentally skipped by the scanner/OCR. This is…", ["MCAR", "MAR", "MNAR", "Fabrication"], 0, "Completely unrelated to any variable.");
  q(5, "Which missing-data mechanism is called ‘non-ignorable’?", ["MCAR", "MAR", "MNAR", "All of them"], 2, "MNAR causes serious problems for any analysis.");
  q(5, "The main drawback of listwise deletion is that it…", ["Only works for categorical data", "Reduces statistical power", "Is very complex", "Increases variability"], 1, "Many cases are dropped, so power is lost.");
  q(5, "A major limitation of regression imputation is that it…", ["Ignores relationships between variables", "Can overestimate relationships and weaken variance", "Cannot be used for numeric data", "Needs no data"], 1, "Predicted values lie exactly on the line, so variance is understated.");
  q(5, "Mean imputation mainly…", ["Increases variability", "Reduces variability and weakens correlations", "Is unbiased for MNAR", "Needs multiple datasets"], 1, "Everything filled with the mean shrinks variance.");
  q(5, "Multiple imputation steps are…", ["Delete → analyse → report", "Impute → analyse → pool", "Code → theme → write", "Sample → survey → clean"], 1, "Create m datasets, analyse each, pool the estimates.");
  q(5, "Which test checks whether data is MCAR?", ["t-test", "Little’s test", "Chi-square", "Shapiro–Wilk"], 1, "Little’s MCAR test (available in SPSS).");
  q(5, "The best solution to missing data is to…", ["Impute it", "Delete it", "Prevent it during design and data collection", "Ignore it"], 2, "Paul Allison: the only really good solution is not to have any.");

  /* ---------- Lecture 6 ---------- */
  q(6, "What does a boxplot NOT typically show?", ["Median", "Interquartile range", "Outliers", "Correlation"], 3, "Correlation needs two variables – use a scatterplot.");
  q(6, "Jittering in a scatterplot is used to…", ["Highlight outliers", "Smooth the data", "Separate overlapping points", "Remove noise"], 2, "A small random shift reveals overlapping points.");
  q(6, "The main advantage of z-scores is that they…", ["Remove outliers", "Allow comparison of scores from different normal distributions", "Reduce data size", "Visualise high-dimensional data"], 1, "z = (x − mean) / SD puts values on a common scale.");
  q(6, "Mean = 4 for 3,5,6,3,3 and for 4,4,4,4,4. What differs?", ["Median", "Variability (spread)", "Mode only", "Nothing"], 1, "Central tendency alone is inadequate – spread matters.");
  q(6, "Heteroscedasticity means…", ["Constant spread of Y at all X", "Spread of Y depends on X", "No relationship", "Perfect correlation"], 1, "Example: tax paid varies more as income rises.");
  q(6, "Which is a real-world example of NEGATIVELY skewed data?", ["Household income", "Marks in a very easy exam", "Number of children", "House prices"], 1, "Most values are high; a few low scores form a left tail.");
  q(6, "Which plot is useful for many variables, one axis per variable?", ["Pie chart", "Parallel coordinates", "Histogram", "Pictogram"], 1, "Used for iris data (sepal/petal length and width).");
  q(6, "Which is a benefit of EDA?", ["Replaces statistical testing", "Detects outliers and checks assumptions such as normality", "Guarantees causation", "Eliminates missing data"], 1, "EDA also reveals data-quality issues and suggests transformations.");

  /* ---------- Lecture 7 ---------- */
  q(7, "Which level of measurement has a TRUE zero point?", ["Nominal", "Ordinal", "Interval", "Ratio"], 3, "Ratio data (salary, weight) has a true zero.");
  q(7, "Temperature in °F is measured on which scale?", ["Nominal", "Ordinal", "Interval", "Ratio"], 2, "Equal intervals but an arbitrary zero.");
  q(7, "A Likert rating (1–5) is usually treated as…", ["Nominal", "Ordinal", "Ratio", "Continuous ratio"], 1, "Ordered, but the distances aren’t guaranteed equal.");
  q(7, "Data validation checking “was the respondent really interviewed?” is…", ["Screening", "Fraud", "Procedure", "Completeness"], 1, "Fraud check. Screening = right criteria; Procedure = followed; Completeness = all questions asked.");
  q(7, "Data validation checking that all questions were asked is…", ["Fraud", "Screening", "Procedure", "Completeness"], 3, "Completeness.");
  q(7, "Q1 = 540, Q3 = 1003 so IQR = 463. The upper inner fence is…", ["1466", "1697.5", "2392", "1003"], 1, "Q3 + 1.5 × IQR = 1003 + 694.5 = 1697.5.");
  q(7, "A verified, genuine outlier should be…", ["Deleted", "Left untouched – it may be an insight", "Replaced by the mean", "Doubled"], 1, "Only incorrect outliers are resurveyed or deleted.");
  q(7, "Pearson’s r = −0.9 indicates…", ["No relationship", "A strong positive linear relationship", "A strong negative linear relationship", "Causation"], 2, "−1 to +1; sign = direction, magnitude = strength.");
  q(7, "Which test compares the means of THREE or more groups?", ["t-test", "ANOVA", "Chi-square", "Pearson correlation"], 1, "ANOVA; t-test compares two means.");
  q(7, "Chi-square tests are used to test…", ["Differences between means", "Relationships between categorical variables", "Normality only", "Regression slopes"], 1, "Chi-square suits nominal/categorical data.");
  q(7, "Cluster analysis is used for…", ["Testing hypotheses", "Predicting future values", "Grouping individuals into unknown groups", "Calculating means"], 2, "The number/characteristics of groups are unknown beforehand.");
  q(7, "Quantitative research results are generally…", ["Not generalizable", "Generalizable to the population (with a good sample)", "Only descriptive", "Unstructured"], 1, "Significant sample size + structured tools allow generalization.");

  /* ---------- Lecture 8 ---------- */
  q(8, "Coding that uses the participant’s own words is…", ["Process coding", "In vivo coding", "Axial coding", "Structural coding"], 1, "In vivo = ‘in the living’ language of participants.");
  q(8, "Summarising a text segment into a noun or short phrase is…", ["Axial coding", "Descriptive coding", "Open coding", "Process coding"], 1, "Like tagging/hashtags.");
  q(8, "Relating codes and categories to each other is…", ["Open coding", "Axial coding", "In vivo coding", "Descriptive coding"], 1, "Axial coding finds links between categories.");
  q(8, "Which is the FIRST step of thematic analysis (Braun & Clarke)?", ["Coding", "Familiarization", "Generating themes", "Writing up"], 1, "Familiarization → Coding → Generating themes → Reviewing → Defining/naming → Writing up.");
  q(8, "Which mixed-method design STARTS with qualitative data collection?", ["Exploratory sequential", "Convergent parallel", "Explanatory sequential", "Embedded"], 0, "Exploratory sequential: QUAL then QUAN.");
  q(8, "QUAN first, then QUAL to explain the numbers is…", ["Exploratory sequential", "Explanatory sequential", "Convergent parallel", "Transformative"], 1, "Explanatory sequential.");
  q(8, "Which design studies the lived experiences of people about a phenomenon?", ["Ethnography", "Phenomenology", "Case study", "Experiment"], 1, "Phenomenological research.");
  q(8, "Qualitative analysis is mostly…", ["Deductive", "Inductive", "Random", "Statistical"], 1, "Patterns and themes emerge from the data.");
  q(8, "Structural coding is used to…", ["Create statistical models", "Categorise text according to a structure (e.g. interview questions)", "Summarise content into a noun", "Count words"], 1, "It breaks data into smaller increments by structure.");
  q(8, "A weakness of thematic analysis is that it…", ["Cannot be used on interviews", "Is subjective and may miss nuance", "Needs a huge sample", "Uses only numbers"], 1, "It relies on the researcher’s judgement.");

  /* ---------- Lecture 9 ---------- */
  q(9, "In a thesis, research questions and objectives are usually stated in…", ["Chapter 1 Introduction", "Chapter 2 Literature Review", "Chapter 3 Methodology", "Chapter 4 Results"], 0, "Chapter 1 sets out need, scope, problem, objectives and research questions.");
  q(9, "Research gaps are identified in the…", ["Introduction", "Literature review chapter", "Appendix", "Acknowledgement"], 1, "Critical analysis and research gaps belong to the literature review.");
  q(9, "Population, sample, tools and procedure are described in…", ["Chapter 2", "Chapter 3 Methodology", "Chapter 5", "References"], 1, "The methodology chapter.");
  q(9, "Which chapter explains how research questions were answered and suggests future studies?", ["Introduction", "Methodology", "Conclusions", "Literature review"], 2, "Chapter 5.");
  q(9, "In American English a ‘thesis’ is typically required for…", ["Bachelor’s degree", "Master’s degree", "Doctorate", "Diploma"], 1, "Dissertation = doctorate in American usage.");
  q(9, "Which belongs in the preliminary pages?", ["Data analysis", "List of abbreviations", "Methodology", "Conclusions"], 1, "Preliminaries: title page, acknowledgement, contents, lists of tables/figures/abbreviations.");

  /* ---------- Lecture 10 ---------- */
  q(10, "A good abstract is written…", ["First, in one sentence", "Last, in about four sentences", "Only for conferences", "As a list of references"], 1, "Problem → why interesting → your solution → what follows.");
  q(10, "A paper should have one clear sharp idea. Simon Peyton Jones calls it the…", ["Pong", "Ping", "Spark", "Anchor"], 1, "One ‘ping’.");
  q(10, "In a paper, ‘Related work’ should come…", ["Before the title", "After the reader understands your idea", "Never", "Instead of the introduction"], 1, "Otherwise it gets between the reader and your idea.");
  q(10, "How should you treat reviewers’ criticism?", ["Ignore it", "Like gold dust – respond to each point and thank them", "Argue back", "Withdraw the paper"], 1, "Criticism shows what to explain more clearly.");

  DATA.mod("IT5090").mcq = bank;

  /* ---------- Model Exam Paper 2026 (exact MCQ part) ---------- */
  var m = [];
  function mq(text, opts, ans, why) { m.push({ id: "m" + (m.length + 1), lec: 0, q: text, o: opts, a: ans, e: why }); }
  mq("What is the primary purpose of research?", ["To collect random data", "To write academic papers", "To establish facts and reach new conclusions through systematic investigation", "To memorize facts"], 2, "Research = systematic investigation to establish facts and reach new conclusions.");
  mq("In the structure of a thesis, which chapter typically includes the research questions and objectives?", ["Chapter 1: Introduction", "Chapter 3: Methodology", "Chapter 2: Literature Review", "Chapter 4: Data Analysis"], 0, "Chapter 1 – Introduction.");
  mq("What does epistemology focus on in research philosophy?", ["Behavior", "Values", "Knowledge", "Existence"], 2, "Epistemology = knowledge (ontology = existence, axiology = values).");
  mq("Which research design is best for answering “why” questions?", ["Explanatory", "Descriptive", "Exploratory", "Archival"], 0, "Explanatory = cause and effect.");
  mq("What is a characteristic of exploratory research?", ["Tests hypotheses", "Investigates new or unclear problems", "Focuses on past data", "Uses only quantitative methods"], 1, "Exploratory research investigates questions not studied in depth.");
  mq("What is the purpose of a mediating variable?", ["To modify the direction and the strength between independent and dependent variables", "To explain the relationship between variables", "To measure the dependent variable", "To act as a control variable"], 1, "Mediator explains the process; the moderator modifies strength/direction.");
  mq("What is the main difference between correlation and causation?", ["They are the same in research", "Correlation shows association; causation shows effect", "Correlation implies causation", "Causation can be obtained only when your data shows no correlation."], 1, "Correlation = association; causation = a change in one causes a change in the other.");
  mq("What is a quasi-experiment?", ["An experiment lacking random assignment or control group", "A study where data collection only happens through observations", "An experiment conducted in a controlled environment", "An experiment with full control"], 0, "No random assignment / no control group.");
  mq("What is a between-subjects design?", ["Each participant only experiences one treatment.", "No control group is used", "All participants receive all treatments", "An experiment without manipulation"], 0, "Within-subjects = all treatments.");
  mq("What is a cross-sectional study?", ["Used to test existing theories", "Conducted at a single point in time", "Focuses on historical data", "Conducted over a long period"], 1, "A snapshot at one point in time.");
  mq("What is the main drawback of listwise deletion?", ["It is only applicable to categorical data", "It reduces statistical power", "It increases variability", "It requires complex computation"], 1, "Dropping cases lowers sample size and power.");
  mq("What is a major limitation of regression imputation?", ["It ignores relationships between variables", "It can overestimate and weaken variance", "It reduces statistical power", "It is not suitable for numerical data"], 1, "It overestimates relationships and weakens variance.");
  mq("What does a boxplot NOT typically show?", ["Interquartile range", "Correlation", "Outliers", "Median"], 1, "Boxplots show median, IQR, outliers – not correlation.");
  mq("What is the purpose of jittering in scatterplots?", ["To highlight outliers", "To smooth the data", "To reduce noise", "To separate overlapping points"], 3, "Adds small random noise so overlapping points can be seen.");
  mq("What is the main advantage of using standard scores (z-scores)?", ["They allow visualization of high-dimensional data", "They reduce data size", "They eliminate outliers", "Enables us to compare two scores that are from different normal distributions."], 3, "Standardising puts different distributions on a common scale.");
  mq("Which of the following is NOT a level of measurement for variables?", ["Nominal", "Rational", "Interval", "Ordinal"], 1, "The levels are nominal, ordinal, interval and RATIO – ‘rational’ is not one.");
  mq("What does the Pearson correlation coefficient measure?", ["The variance of a dataset", "The frequency of two variables", "The strength and direction of a linear relationship", "The difference between means"], 2, "r ranges from −1 to +1.");
  mq("Which of the following is a characteristic of ratio data?", ["Has true zero point", "Data series with no meaningful order", "Supported only for categorical data", "Has arbitrary zero point"], 0, "Ratio = true zero.");
  mq("What is cluster analysis used for?", ["Testing hypotheses", "Predicting future values", "Grouping individuals into unknown groups", "To determine significant differences"], 2, "Groups are unknown before the analysis.");
  mq("Which qualitative coding method involves summarizing content into a noun or phrase?", ["Axial coding", "Descriptive coding", "Open coding", "Process coding"], 1, "Descriptive coding.");
  mq("Which mixed-method design starts with qualitative data collection?", ["Exploratory sequential", "Convergent parallel", "Explanatory sequential", "Embedded mixed-method"], 0, "QUAL first, then QUAN.");
  mq("What is the purpose of structural coding?", ["To summarize data", "To categorize text based on structure", "To summarize content into a noun", "Creating statistical models"], 1, "It categorises text sections according to a specific structure.");
  mq("What is a conflict of interest in research?", ["Publishing in a predatory journal", "Personal interests interfering with official duties", "Not getting consent from research participants", "Disagreement with co-authors"], 1, "Personal interests clash with professional duties.");
  mq("What is the ethical issue with redundant publications?", ["It is a form of data Falsification", "It is a form of data Fabrication", "It is a form of self-plagiarism", "It is a form of predatory publishing"], 2, "Redundant publication = self-plagiarism.");
  mq("What is the purpose of ethics clearance forms?", ["To use someone’s idea without acknowledgment", "To qualify research to be published in journals by completing ethics requirements", "To understand ethics procedures needed for research", "To ensure ethical compliance in research"], 3, "Ethics clearance ensures ethical compliance (best answer from the lecture).");
  DATA.mod("IT5090").modelMcq = m;
})();
