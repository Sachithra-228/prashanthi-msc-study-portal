# Prashanthi’s MSc Study Portal

A calm, focused study space for MSc exam preparation – lecture notes, flashcards, practice quizzes, past papers and timed mock exams, one module at a time.

**Live modules:** IT5090 Research Methodology (10 lectures, 113 MCQs, 36 written questions) and IT5080 DevOps (8 lectures, 86 MCQs, 49 written questions from the 2023–2025 papers).
**Coming soon:** IT5070 Internet of Things · IE6053 Enterprise Governance of IT · IT5120 Data Analytics · IT5130 Cloud Computing.

## Features
- Landing page: a shelf of six spellbooks (one per module). Click a book to step inside its own space with a sidebar.
- Lecture notes, key terms and the original slides (PDF viewer) for every lecture.
- Instant-feedback MCQ practice by topic, and a timed mock exam (2026 model paper or a random mix).
- Written practice with model answers for the 2022, 2023, 2024 papers and the 2026 model paper.
- Flashcards, a one-page cheat sheet (printable) and saved progress (stored in the browser only).
- Paper generator: build a practice paper (MCQ + written), submit it and see the answers.
- Magical welcome sequence on first open: a wand-light reveal with swirling sparks (no text or buttons; Esc skips), then six spellbooks fly in from different sides, gather in the middle and open to show each module. Replay from the footer.
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
Each module has its own folders:
- `data/<code>/lectures.js, mcq.js, written.js, extras.js` – content registered with `DATA.mod("<CODE>")`. `extras.js` holds the past papers list, exam guide, cheat sheet and short lecture names.
- `pdfs/<code>/lectures` and `pdfs/<code>/papers` – the slides and past-paper PDFs.
1. Set `ready: true` for the module in `data/modules.js`.
2. Copy the IT5080 files as a starting point and add `<script>` tags for the new files in `index.html`.
