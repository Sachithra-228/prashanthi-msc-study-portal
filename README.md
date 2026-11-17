# Prashanthi’s MSc Study Portal

A calm, focused study space for MSc exam preparation – lecture notes, flashcards, practice quizzes, past papers and timed mock exams, one module at a time.

**Live module:** IT5090 Research Methodology (10 lectures, 115 MCQs, 36 written questions with model answers).
**Coming soon:** IT5080 DevOps · IT5070 Internet of Things · IE6053 Enterprise Governance of IT · IT5120 Data Analytics · IT5130 Cloud Computing.

## Features
- Landing page with a card per module – click one to “zoom in” to its own space with a sidebar.
- Lecture notes, key terms and the original slides (PDF viewer) for every lecture.
- Instant-feedback MCQ practice by topic, and a timed mock exam (2026 model paper or a random mix).
- Written practice with model answers for the 2022, 2023, 2024 papers and the 2026 model paper.
- Flashcards, a one-page cheat sheet (printable) and saved progress (stored in the browser only).
- Paper generator: build a practice paper (MCQ + written), submit it and see the answers.
- Light / dark mode, works on phones.

## Run locally
No build step – it is plain HTML, CSS and JavaScript.

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Deploy (Vercel)
Import this folder as a project – framework preset **Other**, no build command, output directory = the repo root.

## Adding a module
1. Set `ready: true` for it in `data/modules.js`.
2. Add its lectures, questions and papers to the files in `data/` (follow the IT5090 structure) and drop the PDFs into `pdfs/`.
