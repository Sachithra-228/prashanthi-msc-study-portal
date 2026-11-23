/* Prashanthi's MSc Study Portal – vanilla JS single-page app (hash routing, no build step) */
(function () {
  "use strict";
  var ALL = window.DATA;
  var D = { modules: ALL.modules };          /* D.* always holds the ACTIVE module's content (see activate) */
  var C = {};                                /* the active module's content bucket */
  function activate(code) {
    C = ALL.content[code] || {}; C.code = code;
    D.lectures = C.lectures || []; D.mcq = C.mcq || []; D.modelMcq = C.modelMcq || [];
    D.written = C.written || []; D.papers = C.papers || []; D.cheatsheet = C.cheatsheet || [];
    SHORT = C.shorts || [];
  }
  function lk(k) { return C.code + ":" + k; }  /* progress keys are per module */
  var app = document.getElementById("main");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var SHORT = [];
  var WISHES = [
    "You’ve worked so hard for this. Take a deep breath, trust yourself – the magic was always in you.",
    "One page, one idea, one spell at a time – and you’re already further than you think.",
    "Be proud of how far you’ve come. Even the brightest witch started with a first page.",
    "Rest when you need to, then rise like you always do. We believe in you.",
    "Calm mind, kind heart, steady wand – you’re going to do wonderfully."
  ];
  var ICONS = {
    home: '<path d="M3 11l9-8 9 8M5 10v10h14V10"/>',
    book: '<path d="M4 5a2 2 0 012-2h13v15H6a2 2 0 00-2 2zM4 20a2 2 0 012-2h13"/>',
    cards: '<rect x="3" y="7" width="14" height="13" rx="2"/><path d="M7 7V4h14v13h-4"/>',
    grid: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
    pen: '<path d="M4 20l1-4L16.5 4.5a2 2 0 013 3L8 19zM14 7l3 3"/>',
    spark: '<path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2zM19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    file: '<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6"/>',
    back: '<path d="M15 6l-6 6 6 6"/>',
    chev: '<path d="M6 9l6 6 6-6"/>',
    down: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    print: '<path d="M7 9V3h10v6M7 17H5a2 2 0 01-2-2v-4a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2h-2M7 14h10v7H7z"/>'
  };
  function ic(n) { return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + "</svg>"; }
  var cleanup = [];
  var zoomed = false;

  /* ---------------- storage ---------------- */
  var S = { lec: {}, ok: {}, best: {}, wr: {}, fl: {}, gen: [], paper: null };
  try { var raw = localStorage.getItem("psp.v2") || localStorage.getItem("psp.v1"); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch (e) { /* storage unavailable – app still works */ }
  (function migrate() {
    Object.keys(S.lec).forEach(function (k) { if (/^\d+$/.test(k)) { S.lec["IT5090:" + k] = S.lec[k]; delete S.lec[k]; } });
    Object.keys(S.best).forEach(function (k) { if (k.indexOf(":") < 0) { S.best["IT5090:" + k] = S.best[k]; delete S.best[k]; } });
    Object.keys(S.fl).forEach(function (k) { if (/^\d+-\d+$/.test(k)) { S.fl["IT5090:" + k] = S.fl[k]; delete S.fl[k]; } });
    if (S.paper && !S.paper.code) S.paper.code = "IT5090";
    (S.gen || []).forEach(function (g) { if (!g.code) g.code = "IT5090"; });
  })();
  function save() { try { localStorage.setItem("psp.v2", JSON.stringify(S)); } catch (e) { /* ignore */ } }

  /* ---------------- helpers ---------------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function mod(code) { return D.modules.filter(function (m) { return m.code === code; })[0]; }
  function daysLeft(dateStr) {
    var p = dateStr.split("-"), t = new Date(+p[0], +p[1] - 1, +p[2]), n = new Date();
    n = new Date(n.getFullYear(), n.getMonth(), n.getDate());
    return Math.round((t - n) / 864e5);
  }
  function countdown(m) {
    var d = daysLeft(m.date);
    if (d > 1) return d + " days to go";
    if (d === 1) return "Tomorrow";
    if (d === 0) return "Today";
    return "Completed";
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function mmss(s) { var m = Math.floor(s / 60), r = s % 60; return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r; }
  function gradeOf(p) { return p >= 85 ? "Outstanding (O)" : p >= 70 ? "Exceeds Expectations (E)" : p >= 55 ? "Acceptable (A)" : p >= 40 ? "Poor (P)" : "Dreadful (D) – keep practising"; }
  function head(title, sub, right, crumbs) {
    return '<div class="page-head"><div>' + (crumbs ? '<div class="crumbs">' + crumbs + "</div>" : "") + "<h1>" + title + "</h1>" + (sub ? '<p class="sub">' + sub + "</p>" : "") + "</div>" + (right ? '<div class="head-actions">' + right + "</div>" : "") + "</div>";
  }

  /* ---------------- theme ---------------- */
  (function theme() {
    try { var t = localStorage.getItem("psp.theme"); if (t) document.documentElement.setAttribute("data-theme", t); } catch (e) { /* ignore */ }
    $("#themeBtn").addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var dark = cur ? cur === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = dark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("psp.theme", next); } catch (e) { /* ignore */ }
    });
  })();
  $("#wish").textContent = WISHES[Math.floor(Date.now() / 864e5) % WISHES.length];

  /* ---------------- router ---------------- */
  function parts() { return location.hash.replace(/^#\/?/, "").split("/").filter(Boolean); }
  function render() {
    cleanup.forEach(function (f) { f(); }); cleanup = [];
    document.body.classList.remove("menu-open");
    var p = parts(), isMod = p[0] === "m" && mod(p[1]);
    document.body.classList.toggle("is-home", !isMod);
    app.className = isMod ? "" : "home";
    $("#footer").classList.toggle("in-module", !!isMod);
    window.scrollTo(0, 0);
    if (isMod) { moduleView(mod(p[1]), p[2] || "", p[3], p[4]); } else { home(); }
    zoomed = false;
  }
  window.addEventListener("hashchange", render);

  /* ---------------- landing page: a shelf of six spellbooks ---------------- */
  var TONES = [["#8a2232", "#4e1019"], ["#1f5a40", "#0f2e21"], ["#27457a", "#14264a"], ["#9a7414", "#5a4208"], ["#6a3a74", "#35183d"], ["#3d6670", "#1b343b"]];
  var ORN = '<svg class="cf-orn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/><circle cx="12" cy="11" r="1.6"/></svg>';
  var flown = false;

  /* a book opens by itself only while its exam is still ahead; finished or not-yet-ready books stay closed until clicked */
  function startsOpen(m) { return !!m.ready && daysLeft(m.date) >= 0; }
  function statusLabel(m) { return !m.ready ? "Coming soon" : daysLeft(m.date) < 0 ? "Exam completed" : ""; }
  function bookHTML(m, idx) {
    var t = TONES[idx % TONES.length], d = daysLeft(m.date);
    var right = '<span class="b-label">Final examination</span><span class="b-date">' + esc(m.dateLabel) + '</span>' +
      (d >= 0 ? '<span class="b-count">' + esc(countdown(m)) + "</span>" : "") +
      '<span class="b-line">' + esc(m.time) + " · " + esc(m.duration) + '</span><span class="b-line sub">' + esc(m.type) + '</span><span class="b-line sub">' + esc(m.lic) + "</span>" +
      (m.ready ? '<span class="b-cta"><span>Open this book</span><span>&rarr;</span></span>' : '<span class="b-tag">Coming soon</span>');
    return '<a class="book' + (m.ready ? "" : " soon") + '" href="#/m/' + m.code + '" data-code="' + m.code + '" style="--c1:' + t[0] + ";--c2:" + t[1] + '" aria-label="' + esc(m.name) + (m.ready ? "" : " (coming soon)") + '">' +
      '<div class="book-body"><div class="base-r"></div><div class="rpage"><div class="rp-in">' + right + '<span class="ribbon"></span></div></div>' +
      '<div class="cover"><div class="cover-front"><div class="cf-frame">' + ORN + '<span class="cf-code">' + m.code + '</span><span class="cf-title">' + esc(m.name) + '</span><span class="cf-rule"></span><span class="cf-place">' + esc(m.place) + "</span>" + (statusLabel(m) ? '<span class="cf-status">' + statusLabel(m) + "</span>" : "") + "</div></div>" +
      '<div class="cover-back"><div class="lp-in"><span class="b-place">' + esc(m.place) + '</span><span class="b-code">' + m.code + '</span><h3 class="b-title">' + esc(m.name) + '</h3><p class="b-desc">' + (m.ready ? esc(m.desc) : "The ink has not appeared on these pages yet.") + "</p></div></div></div></div></a>";
  }

  function home() {
    $("#menuBtn").style.display = "none"; $("#crumb").textContent = "";
    document.title = "Prashanthi’s MSc Study Portal";
    var upcoming = D.modules.filter(function (m) { return daysLeft(m.date) >= 0; }).sort(function (a, b) { return a.date < b.date ? -1 : 1; })[0];
    var h = '<div class="landing"><section class="hero"><span class="eyebrow">MSc · July 2026 intake</span><h1>Prashanthi’s <span>MSc Study Portal</span></h1><p class="hero-sub">Final examinations · November – December 2026</p>';
    if (upcoming) {
      var dl = daysLeft(upcoming.date);
      h += '<div class="next-exam"><b>' + dl + '</b><div class="muted">' + (dl === 1 ? "day until" : "days until") + ' your next exam<br><strong>' + esc(upcoming.name) + "</strong> · " + esc(upcoming.dateLabel) + "</div></div>";
    } else { h += "<span></span>"; }
    h += '</section><section class="shelf" id="shelf" aria-label="Study modules">' + D.modules.map(bookHTML).join("") + "</section></div>";
    app.innerHTML = h;
    flyBooks();
  }

  /* the six books fly in from different sides, gather in the middle, then spread out and open */
  function flyBooks() {
    var books = $$("#shelf .book");
    var still = flown || !books.length || !books[0].animate || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    flown = true;
    var openIt = function (b) { if (startsOpen(mod(b.getAttribute("data-code")))) b.classList.add("open"); };
    if (still) { books.forEach(openIt); return; }
    var vw = window.innerWidth, vh = window.innerHeight;
    var DIRS = [[-1, -0.35], [1, -0.5], [0, -1], [-1, 0.55], [1, 0.7], [0, 1]];
    var SPIN = [-200, 160, -140, 220, -180, 120];
    books.forEach(function (b, i) {
      var r = b.getBoundingClientRect(), bx = r.left + r.width / 2, by = r.top + r.height / 2;
      var sx = vw / 2 + DIRS[i][0] * (vw / 2 + r.width) - bx, sy = vh / 2 + DIRS[i][1] * (vh / 2 + r.height) - by;
      var cx = vw / 2 + (i - 2.5) * Math.min(30, vw / 28) - bx, cy = vh * 0.6 + (i % 2 ? 16 : -16) - by, fan = (i - 2.5) * 7;
      var anim = b.animate([
        { transform: "translate(" + sx + "px," + sy + "px) rotate(" + SPIN[i] + "deg) scale(.5)", opacity: 0, offset: 0, easing: "cubic-bezier(.2,.75,.25,1)" },
        { opacity: 1, offset: .12 },
        { transform: "translate(" + cx + "px," + cy + "px) rotate(" + fan + "deg) scale(.8)", opacity: 1, offset: .46 },
        { transform: "translate(" + cx + "px," + cy + "px) rotate(" + fan + "deg) scale(.8)", opacity: 1, offset: .56, easing: "cubic-bezier(.55,0,.2,1)" },
        { transform: "translate(0,0) rotate(0deg) scale(1)", opacity: 1, offset: 1 }
      ], { duration: 2900, delay: 300 + i * 170, fill: "both" });
      b.style.zIndex = String(10 - i);
      anim.onfinish = function () { openIt(b); anim.cancel(); b.style.zIndex = ""; };
    });
  }

  /* zoom into a module book */
  document.addEventListener("click", function (e) {
    var card = e.target.closest && e.target.closest(".book");
    if (!card) return;
    e.preventDefault();
    if (!card.classList.contains("open")) { card.classList.add("open"); return; }  /* closed book: first click opens it, second enters */
    var href = card.getAttribute("href");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { location.hash = href; return; }
    var r = card.getBoundingClientRect(), m = mod(card.getAttribute("data-code"));
    var o = document.createElement("div");
    o.className = "zoom-overlay";
    o.style.cssText = "top:" + r.top + "px;left:" + r.left + "px;width:" + r.width + "px;height:" + r.height + "px;border-radius:8px";
    o.innerHTML = "<span><em>" + esc(m.place) + "</em><b>" + esc(m.name) + "</b></span>";
    document.body.appendChild(o);
    void o.offsetWidth;
    o.style.top = "0px"; o.style.left = "0px"; o.style.width = "100vw"; o.style.height = "100vh"; o.style.borderRadius = "0px";
    o.classList.add("go");
    setTimeout(function () { zoomed = true; location.hash = href; setTimeout(function () { o.style.opacity = "0"; setTimeout(function () { o.remove(); }, 450); }, 80); }, 600);
  });

  /* footer: module links and replay */
  $("#fLinks").insertAdjacentHTML("beforeend", D.modules.map(function (m) { return '<a href="#/m/' + m.code + '">' + esc(m.name) + (m.ready ? "" : "<small>soon</small>") + "</a>"; }).join(""));
  $("#replayIntro").addEventListener("click", function () { if (!window.PSPIntro) return; app.innerHTML = ""; window.PSPIntro.run(function () { flown = false; render(); }); });

  /* ---------------- module shell ---------------- */
  function navHTML(m, page) {
    var base = "#/m/" + m.code;
    function a(path, icon, label, alt) { var on = page === path || (alt && alt.indexOf(page) >= 0); return '<a href="' + base + (path ? "/" + path : "") + '"' + (on ? ' class="active" aria-current="page"' : "") + ">" + ic(icon) + "<span>" + label + "</span></a>"; }
    return '<nav class="nav" aria-label="Module sections">' + a("", "home", "Overview") +
      '<div class="nav-label">Study</div>' + a("lectures", "book", "Lectures", ["lecture"]) + a("flash", "cards", "Flashcards") + a("cheat", "grid", C.refLabel || "Cheat sheet") +
      '<div class="nav-label">Practice</div>' + (D.mcq.length ? a("practice", "check", "Practice quiz") : "") + a("written", "pen", "Written practice") + a("generate", "spark", "Paper generator") + (D.mcq.length ? a("mock", "clock", "Mock exam") : "") +
      '<div class="nav-label">Exams</div>' + a("papers", "file", "Past papers") + "</nav>";
  }
  function moduleView(m, page, arg, arg2) {
    $("#menuBtn").style.display = ""; $("#crumb").textContent = m.code + " · " + m.name;
    if (m.ready) activate(m.code);
    document.title = m.name + " – Prashanthi’s MSc Study Portal";
    app.innerHTML = '<div class="module-shell ' + (zoomed ? "view-zoom" : "view-in") + '">' +
      '<aside class="sidebar" id="sidebar"><div class="side-top"><a class="back" href="#/">' + ic("back") + " All modules</a>" +
      '<div class="code">' + m.code + "</div><h2>" + esc(m.name) + "</h2></div>" + navHTML(m, page) + "</aside>" +
      '<div class="scrim" id="scrim"></div><section class="content" id="content"></section></div>';
    $("#sidebar").addEventListener("click", function (e) { if (e.target.closest("a")) document.body.classList.remove("menu-open"); });
    $("#scrim").addEventListener("click", function () { document.body.classList.remove("menu-open"); });
    var c = $("#content");
    if (!m.ready && page) { soon(c, m); return; }
    var pages = { "": overview, lectures: lecturesPage, lecture: lecturePage, papers: papersPage, practice: practicePage, written: writtenPage, generate: generatePage, mock: mockPage, flash: flashPage, cheat: cheatPage };
    if (!D.mcq.length && (page === "practice" || page === "mock")) page = "";
    (pages[page] || overview)(c, m, arg, arg2);
  }
  $("#menuBtn").addEventListener("click", function () { document.body.classList.toggle("menu-open"); });

  function facts(m) {
    return '<dl class="facts"><div><dt>Exam date</dt><dd>' + esc(m.dateLabel) + " 2026</dd></div><div><dt>Time</dt><dd>" + esc(m.time) + "</dd></div><div><dt>Duration</dt><dd>" + esc(m.duration) + "</dd></div><div><dt>Format</dt><dd>" + esc(m.type) + "</dd></div><div><dt>Lecturer</dt><dd>" + esc(m.lic) + "</dd></div></dl>";
  }
  function soon(c, m) {
    c.innerHTML = head(esc(m.name), esc(m.desc), '<span class="tag gray">Coming soon</span>') + facts(m) +
      '<div class="empty"><h2>Study materials will be added here</h2><p class="muted">Lecture notes, flashcards, practice questions and past papers for this module will appear here once they are available.</p><a class="btn ghost" href="#/m/' + m.code + '">Back to overview</a></div>';
  }

  /* ---------------- overview ---------------- */
  function overview(c, m) {
    if (!m.ready) { soon(c, m); return; }
    var lecDone = D.lectures.filter(function (l) { return S.lec[lk(l.id)]; }).length;
    var allQ = D.mcq.length + D.modelMcq.length, ids = {}; D.mcq.concat(D.modelMcq).forEach(function (q) { ids[q.id] = 1; });
    var okQ = Object.keys(S.ok).filter(function (k) { return ids[k]; }).length;
    var wDone = D.written.filter(function (w) { return S.wr[w.id] && S.wr[w.id].st === "ok"; }).length;
    var G = C.guide || { title: "How to approach the exam", steps: [], tip: "" }, steps = G.steps;
    function stat(n, of, label, p) { return '<div class="stat"><div class="n">' + n + " <small>/ " + of + '</small></div><div class="l">' + label + '</div><div class="bar"><i style="width:' + p + '%"></i></div></div>'; }
    function row(path, t, d, end) { return '<a class="row two" href="#/m/' + m.code + "/" + path + '"><div><div class="t">' + t + '</div><div class="d">' + d + '</div></div><div class="end">' + end + "</div></a>"; }
    c.innerHTML = head(esc(m.name), esc(m.desc), '<span class="tag ok">' + esc(countdown(m)) + "</span>", "MSc · July 2026 intake") + facts(m) +
      '<div class="section"><h2>Your progress</h2><div class="stats">' +
      stat(lecDone, D.lectures.length, "Lectures read", pct(lecDone, D.lectures.length)) + (allQ ? stat(okQ, allQ, "Questions answered correctly", pct(okQ, allQ)) : "") + stat(wDone, D.written.length, "Written answers mastered", pct(wDone, D.written.length)) + "</div></div>" +
      '<div class="section"><h2>Continue studying</h2><div class="rows">' +
      row("lectures", "Lectures", "Notes, key terms and original slides for all " + D.lectures.length + " lectures.", "Open") +
      (D.mcq.length ? row("practice", "Practice quiz", D.mcq.length + " multiple-choice questions with instant explanations, by topic.", "Open") : row("cheat", C.refLabel || "Cheat sheet", "A searchable, printable reference to take into the open-book exam.", "Open")) +
      row("written", "Written practice", D.written.length + " scenario and past-paper questions with model answers.", "Open") +
      row("generate", "Paper generator", D.mcq.length ? "Build a new practice paper with MCQ and written questions, then check your answers." : "Build a new written practice paper from scenario questions, then check your answers.", "Open") +
      row("papers", "Past papers", C.papersNote || "View or download the past papers.", "Open") + "</div></div>" +
      '<div class="section"><h2>' + G.title + '</h2><ol class="steps">' + steps.map(function (s) { return "<li><span>" + s + "</span></li>"; }).join("") + '</ol>' + (G.tip ? '<p class="note">' + G.tip + '</p>' : '') + '</div>';
  }

  /* ---------------- lectures ---------------- */
  function lecturesPage(c, m) {
    c.innerHTML = head("Lectures", "Read the notes, check the key terms, review the slides, then test yourself.", '<span class="tag">' + D.lectures.length + " lectures</span>") +
      '<div class="rows">' + D.lectures.map(function (l) {
        return '<a class="row" href="#/m/' + m.code + "/lecture/" + l.id + '"><span class="num">' + l.id + '</span><div><div class="t">' + esc(l.title) + '</div><div class="d">' + esc(l.desc) + '</div></div><div class="end">' + (S.lec[lk(l.id)] ? '<span class="tag ok">Read</span>' : "") + "<span>" + l.sections.length + " sections · " + l.terms.length + " terms" + (l.pdf ? " · " + l.pages + " slides" : "") + "</span></div></a>";
      }).join("") + "</div>";
  }

  function lecturePage(c, m, id, tab) {
    var l = D.lectures.filter(function (x) { return x.id === +id; })[0];
    if (!l) { lecturesPage(c, m); return; }
    tab = tab || "notes";
    var base = "#/m/" + m.code + "/lecture/" + l.id + "/";
    var tabs = [["notes", "Notes"], ["terms", "Key terms"], ["slides", "Slides"], ["quiz", "Quiz"]];
    var qs = D.mcq.filter(function (q) { return q.lec === l.id; });
    if (!l.pdf) tabs = tabs.filter(function (t) { return t[0] !== "slides"; });
    if (!D.mcq.length) tabs = tabs.filter(function (t) { return t[0] !== "quiz"; });
    if (tab === "slides" && !l.pdf) tab = "notes";
    var h = head(esc(l.title), esc(l.desc), '<button class="btn' + (S.lec[lk(l.id)] ? " ghost" : "") + '" id="doneBtn">' + (S.lec[lk(l.id)] ? "Marked as read – undo" : "Mark as read") + "</button>",
      '<a href="#/m/' + m.code + '/lectures">Lectures</a> / Lecture ' + l.id) +
      '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<a class="tab' + (tab === t[0] ? " active" : "") + '" role="tab" href="' + base + t[0] + '">' + t[1] + "</a>"; }).join("") + "</div>";
    if (tab === "notes") {
      h += '<div class="lec-grid"><div class="prose">' + l.sections.map(function (s, i) { return '<h3 id="sec' + i + '">' + esc(s.h) + "</h3><ul>" + s.items.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }).join("") +
        '</div><aside class="outline no-print"><h4>In this lecture</h4>' + l.sections.map(function (s, i) { return '<button data-sec="' + i + '">' + esc(s.h) + "</button>"; }).join("") + "</aside></div>";
    } else if (tab === "terms") {
      h += '<div class="terms">' + l.terms.map(function (t) { return '<div class="term"><b>' + esc(t[0]) + "</b>" + esc(t[1]) + "</div>"; }).join("") + '</div><p style="margin-top:22px"><a class="btn" href="#/m/' + m.code + "/flash/" + l.id + '">Study these as flashcards</a></p>';
    } else if (tab === "slides") {
      h += '<div class="viewer-bar"><span class="muted">' + l.pages + ' slides</span><a class="btn ghost small" download href="' + l.pdf + '">' + ic("down") + ' Download PDF</a></div><iframe class="pdf-frame" title="Lecture ' + l.id + ' slides" src="' + l.pdf + '#view=FitH"></iframe><p class="muted" style="font-size:14px">If the slides do not display on your device, use Download PDF.</p>';
    } else {
      h += '<div id="quizbox"></div>';
    }
    var prev = D.lectures[l.id - 2], next = D.lectures[l.id];
    h += '<div class="pager no-print">' + (prev ? '<a class="btn ghost" href="#/m/' + m.code + "/lecture/" + prev.id + '">&larr; ' + esc(SHORT[prev.id - 1]) + "</a>" : "") + (next ? '<a class="btn ghost" href="#/m/' + m.code + "/lecture/" + next.id + '">' + esc(SHORT[next.id - 1]) + " &rarr;</a>" : "") + "</div>";
    c.innerHTML = h;
    $("#doneBtn").addEventListener("click", function () { S.lec[lk(l.id)] = !S.lec[lk(l.id)]; save(); render(); });
    $$(".outline button", c).forEach(function (b) { b.addEventListener("click", function () { var t = document.getElementById("sec" + b.getAttribute("data-sec")); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); }); });
    if (tab === "quiz") {
      if (!qs.length) { $("#quizbox").innerHTML = '<p class="muted">No quiz questions for this lecture yet.</p>'; }
      else { runQuiz($("#quizbox"), qs, { mode: "practice", key: "lec" + l.id, title: "Lecture " + l.id + " quiz" }); }
    }
  }

  /* ---------------- quiz engine (practice + exam mode) ---------------- */
  function runQuiz(el, qs, o) {
    var i = 0, ans = [], flags = {}, left = o.limit || 0, timer = null, finished = false, bkey = o.key ? lk(o.key) : null;
    var exam = o.mode === "exam", L = ["A", "B", "C", "D", "E"];
    el.classList.add("quiz");
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    cleanup.push(stop);
    if (exam && left) { timer = setInterval(function () { left--; var t = $("#qtimer"); if (t) { t.textContent = mmss(left); t.classList.toggle("low", left <= 60); } if (left <= 0) { finish(); } }, 1000); }

    function draw() {
      var q = qs[i];
      var h = '<div class="progress-top"><i style="width:' + (exam ? pct(ans.filter(function (a) { return a != null; }).length, qs.length) : pct(i, qs.length)) + '%"></i></div>' +
        '<div class="q-meta"><span>' + esc(o.title || "Quiz") + " · Question " + (i + 1) + " of " + qs.length + "</span>" + (exam && left ? '<span class="timer" id="qtimer">' + mmss(left) + "</span>" : "") + "</div>" +
        '<div class="q-text">' + esc(q.q) + '</div><div class="opts" role="group" aria-label="Answer options">';
      q.o.forEach(function (t, k) {
        var cls = "opt", dis = "";
        if (!exam && ans[i] != null) { dis = " disabled"; if (k === q.a) cls += " right"; else if (k === ans[i]) cls += " wrong"; }
        else if (exam && ans[i] === k) cls += " sel";
        h += '<button class="' + cls + '" data-k="' + k + '"' + dis + '><span class="l">' + L[k] + "</span><span>" + esc(t) + "</span></button>";
      });
      h += "</div>";
      if (!exam && ans[i] != null) { h += '<div class="explain">' + (ans[i] === q.a ? "<b>Correct.</b> " : "<b>Not quite.</b> The answer is <b>" + L[q.a] + "</b>. ") + esc(q.e) + "</div>"; }
      h += '<div class="actions">';
      if (exam) {
        h += '<button class="btn ghost small" id="prevQ"' + (i === 0 ? " disabled" : "") + '>&larr; Previous</button><button class="btn ghost small" id="flagQ">' + (flags[i] ? "Remove flag" : "Flag for review") + "</button>" +
          (i < qs.length - 1 ? '<button class="btn small" id="nextQ">Next &rarr;</button>' : "") + '<button class="btn small" id="submitQ" style="margin-left:auto">Submit paper</button>';
      } else if (ans[i] != null) {
        h += '<button class="btn" id="nextQ">' + (i < qs.length - 1 ? "Next question &rarr;" : "See results") + "</button>";
      }
      h += "</div>";
      if (exam) { h += '<div class="navgrid" aria-label="Question navigator">' + qs.map(function (_, n) { return '<button data-n="' + n + '" class="' + (ans[n] != null ? "done " : "") + (n === i ? "cur " : "") + (flags[n] ? "flag" : "") + '">' + (n + 1) + "</button>"; }).join("") + "</div>"; }
      el.innerHTML = h;
      $$(".opt", el).forEach(function (b) {
        b.addEventListener("click", function () {
          var k = +b.getAttribute("data-k");
          if (exam) { ans[i] = ans[i] === k ? null : k; draw(); }
          else if (ans[i] == null) { ans[i] = k; if (k === qs[i].a) { S.ok[qs[i].id] = 1; save(); } draw(); var ex = $(".explain", el); if (ex) ex.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
        });
      });
      var nx = $("#nextQ", el); if (nx) nx.addEventListener("click", function () { if (i < qs.length - 1) { i++; draw(); } else { finish(); } });
      var pv = $("#prevQ", el); if (pv) pv.addEventListener("click", function () { i--; draw(); });
      var fg = $("#flagQ", el); if (fg) fg.addEventListener("click", function () { flags[i] = !flags[i]; draw(); });
      var sb = $("#submitQ", el); if (sb) sb.addEventListener("click", function () {
        var un = qs.length - ans.filter(function (a) { return a != null; }).length;
        if (!un || window.confirm(un + " question(s) are unanswered. Submit anyway?")) finish();
      });
      $$(".navgrid button", el).forEach(function (b) { b.addEventListener("click", function () { i = +b.getAttribute("data-n"); draw(); }); });
    }

    function finish() {
      if (finished) return; finished = true; stop();
      var right = 0, wrong = [];
      qs.forEach(function (q, n) { if (ans[n] === q.a) { right++; S.ok[q.id] = 1; } else wrong.push(q); });
      var p = pct(right, qs.length);
      if (o.key) { S.best[bkey] = Math.max(S.best[bkey] || 0, p); } save();
      var h = '<div class="result"><div class="score-ring" style="--p:' + p + '"><div>' + p + '%</div></div><div><h2>' + right + " out of " + qs.length + (o.marksPer ? " · " + right * o.marksPer + "/" + qs.length * o.marksPer + " marks" : "") + '</h2><p class="grade">' + gradeOf(p) + '</p><p class="muted" style="margin:0">' + (S.best[bkey] ? "Best score for this set: " + S.best[bkey] + "%." : "") + '</p><div class="actions">' +
        (wrong.length ? '<button class="btn" id="retryW">Retry the ' + wrong.length + " I missed</button>" : "") + '<button class="btn ghost" id="again">Start again</button></div></div></div><h3 style="margin-top:20px">Review</h3>' +
        qs.map(function (q, n) {
          var ok = ans[n] === q.a;
          return '<div class="review-item ' + (ok ? "ok" : "no") + '"><b>' + (n + 1) + ". " + esc(q.q) + "</b><br>" + (ok ? "" : "Your answer: " + (ans[n] == null ? "<i>none</i>" : esc(q.o[ans[n]])) + "<br>") + "Correct answer: " + esc(q.o[q.a]) + '<br><span class="muted">' + esc(q.e) + "</span></div>";
        }).join("");
      el.innerHTML = h; window.scrollTo(0, 0);
      var rw = $("#retryW", el); if (rw) rw.addEventListener("click", function () { runQuiz(el, wrong, { mode: "practice", key: (o.key || "q") + "-retry", title: "Retry missed questions" }); });
      $("#again", el).addEventListener("click", function () { runQuiz(el, o.shuffle ? shuffle(qs) : qs, o); });
    }
    draw();
  }

  /* ---------------- practice quiz ---------------- */
  function practicePage(c, m, arg) {
    var sets = [["all", "All topics", D.mcq]];
    if (D.modelMcq.length) sets.push(["model", C.modelLabel || "Model paper", D.modelMcq]);
    D.lectures.forEach(function (l) { sets.push([String(l.id), "L" + l.id + " " + SHORT[l.id - 1], D.mcq.filter(function (q) { return q.lec === l.id; })]); });
    var cur = sets.filter(function (s) { return s[0] === arg; })[0];
    c.innerHTML = head("Practice quiz", "Pick a topic. You get instant feedback and a short explanation after every answer.") + '<div class="pillrow">' +
      sets.map(function (s) { return '<a class="pill' + (cur && cur[0] === s[0] ? " active" : "") + '" href="#/m/' + m.code + "/practice/" + s[0] + '">' + esc(s[1]) + " (" + s[2].length + ")</a>"; }).join("") + '</div><div id="quizbox" style="margin-top:26px">' +
      (cur ? "" : '<p class="muted">Choose a topic above to begin, or <a href="#/m/' + m.code + '/practice/all">start with all topics</a> (questions are shuffled).</p>') + "</div>";
    if (cur) { var list = cur[0] === "all" ? shuffle(cur[2]) : cur[2]; runQuiz($("#quizbox"), list, { mode: "practice", key: "practice-" + cur[0], title: cur[1], shuffle: cur[0] === "all", marksPer: cur[0] === "model" ? 2 : 0 }); }
  }

  /* ---------------- mock exam ---------------- */
  function mockPage(c, m, arg) {
    var hasModel = D.modelMcq.length > 0, label = C.modelLabel || "Model paper";
    if ((arg === "model" && hasModel) || arg === "random") {
      var qs = arg === "model" ? D.modelMcq : shuffle(D.mcq).slice(0, 25);
      c.innerHTML = head("Mock exam", "Timed, no hints. Answers and explanations appear after you submit.", '<span class="tag">' + (arg === "model" ? esc(label) : "Random mix") + "</span>") + '<div id="quizbox"></div>';
      runQuiz($("#quizbox"), qs, { mode: "exam", limit: 30 * 60, key: "mock-" + arg, title: arg === "model" ? label : "Random mix", marksPer: arg === "model" ? 2 : 0 });
      return;
    }
    function row(path, t, d, best) { return '<a class="row two" href="#/m/' + m.code + "/mock/" + path + '"><div><div class="t">' + t + '</div><div class="d">' + d + '</div></div><div class="end">' + (best != null ? "Best: " + best + "%" : "Not attempted") + "</div></a>"; }
    c.innerHTML = head("Mock exam", C.mockNote || "A timed MCQ paper with a question navigator and flags. For longer answers, use Written practice or the Paper generator.") + '<div class="rows">' +
      (hasModel ? row("model", esc(label), "The " + D.modelMcq.length + " multiple-choice questions (2 marks each, " + D.modelMcq.length * 2 + " marks) from the model paper. 30 minutes.", S.best[lk("mock-model")]) : "") +
      row("random", "Random mix", Math.min(25, D.mcq.length) + " questions drawn from all " + D.lectures.length + " lectures. 30 minutes.", S.best[lk("mock-random")]) + "</div>";
  }

  /* ---------------- past papers (inline viewer + dropdown) ---------------- */
  function papersPage(c, m, arg) {
    var items = D.papers.slice();
    var cur = items.filter(function (p) { return p.id === arg; })[0] || items[0];
    function writtenCount(key) { return D.written.filter(function (w) { return w.paper === key; }).length; }
    function wLink(p, label) { return p.written ? '<a href="#/m/' + m.code + "/written/" + encodeURIComponent(p.written) + '">' + label + " (" + writtenCount(p.written) + ")</a>" : ""; }
    var menu = items.map(function (p) {
      return '<div class="dd-item' + (p.id === cur.id ? " current" : "") + '"><div class="t">' + esc(p.title) + '</div><div class="d">' + esc(p.info) + '</div><div class="dd-actions">' +
        (p.pdf ? '<a href="#/m/' + m.code + "/papers/" + p.id + '">View</a><a href="' + p.pdf + '" download>Download</a>' : "") +
        (p.mcq ? '<a href="#/m/' + m.code + '/mock/model">Take MCQ</a>' : "") + wLink(p, "Written Q&amp;A") + "</div></div>";
    }).join("");
    var dd = '<div class="dropdown"><button class="btn ghost" id="ddBtn" aria-haspopup="true" aria-expanded="false">Select paper ' + ic("chev") + '</button><div class="dropdown-menu" id="ddMenu" hidden>' + menu + "</div></div>";
    c.innerHTML = head("Past papers", "Showing: <b>" + esc(cur.title) + "</b> &middot; " + esc(cur.info), dd) +
      '<div class="viewer-bar"><span class="muted">' + (cur.pdf ? "Viewing the original paper. Use Select paper (top right) to switch papers, download them or take the MCQs." : "This question is typed out for practice – there is no PDF for it.") + '</span><span class="head-actions">' +
      (cur.pdf ? '<a class="btn ghost small" href="' + cur.pdf + '" download>' + ic("down") + " Download</a>" : "") + (cur.mcq ? '<a class="btn small" href="#/m/' + m.code + '/mock/model">Take MCQ</a>' : "") +
      (cur.written ? '<a class="btn ghost small" href="#/m/' + m.code + "/written/" + encodeURIComponent(cur.written) + '">Written Q&amp;A</a>' : "") + "</span></div>" +
      (cur.pdf ? '<iframe class="pdf-frame" title="' + esc(cur.title) + '" src="' + cur.pdf + '#view=FitH"></iframe><p class="muted" style="font-size:14px">If the paper does not display on your device, use Download.</p>' : "");
    var btn = $("#ddBtn"), mn = $("#ddMenu");
    function close() { mn.hidden = true; btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function (e) { e.stopPropagation(); mn.hidden = !mn.hidden; btn.setAttribute("aria-expanded", String(!mn.hidden)); });
    function outside(e) { if (!e.target.closest(".dropdown")) close(); }
    function esck(e) { if (e.key === "Escape") close(); }
    document.addEventListener("click", outside); document.addEventListener("keydown", esck);
    cleanup.push(function () { document.removeEventListener("click", outside); document.removeEventListener("keydown", esck); });
  }

  /* ---------------- written practice ---------------- */
  function writtenPage(c, m, arg) {
    arg = arg ? decodeURIComponent(arg) : "all";
    var papers = []; D.written.forEach(function (w) { if (papers.indexOf(w.paper) < 0) papers.push(w.paper); });
    var list = arg === "all" ? D.written : D.written.filter(function (w) { return w.paper === arg; });
    c.innerHTML = head("Written practice", "Open a question, write your own answer first (it is saved on this device), then reveal the model answer and mark how you did.", '<span class="tag">' + list.length + " questions</span>") +
      '<div class="pillrow" style="margin-bottom:18px"><a class="pill' + (arg === "all" ? " active" : "") + '" href="#/m/' + m.code + '/written">All</a>' +
      papers.map(function (p) { return '<a class="pill' + (arg === p ? " active" : "") + '" href="#/m/' + m.code + "/written/" + encodeURIComponent(p) + '">' + esc(p) + "</a>"; }).join("") + "</div>" +
      list.map(function (w) {
        var st = (S.wr[w.id] || {}).st;
        return '<details class="wq" data-id="' + w.id + '"' + (list.length === 1 ? " open" : "") + '><summary><span class="tag gray">' + esc(w.paper) + '</span><span class="ttl">' + esc(w.no) + " · " + esc(w.topic) + '</span><span class="muted" style="margin-left:auto">' + w.marks + " marks</span>" + (st === "ok" ? '<span class="tag ok">Got it</span>' : st === "rev" ? '<span class="tag">Revise</span>' : "") + "</summary>" +
          '<div class="body"><p>' + w.q + '</p><label class="muted" for="t-' + w.id + '" style="font-size:13px">Your answer (optional)</label><textarea id="t-' + w.id + '" placeholder="Type your answer here before checking the model answer.">' + esc((S.wr[w.id] || {}).text || "") + '</textarea>' +
          '<div class="actions"><button class="btn small" data-act="show">Show model answer</button></div><div class="model" hidden><div class="mh">Model answer</div>' + w.a + '<div class="actions"><button class="btn small" data-act="ok">I got it</button><button class="btn ghost small" data-act="rev">Need to revise</button></div></div></div></details>';
      }).join("");
    $$(".wq", c).forEach(function (d) {
      var id = d.getAttribute("data-id");
      $("textarea", d).addEventListener("input", function (e) { S.wr[id] = S.wr[id] || {}; S.wr[id].text = e.target.value; save(); });
      d.addEventListener("click", function (e) {
        var b = e.target.closest("[data-act]"); if (!b) return;
        var act = b.getAttribute("data-act"), mdl = $(".model", d);
        if (act === "show") { mdl.hidden = !mdl.hidden; b.textContent = mdl.hidden ? "Show model answer" : "Hide model answer"; }
        else {
          S.wr[id] = S.wr[id] || {}; S.wr[id].st = act; save();
          var sm = $("summary", d); $$(".tag", sm).forEach(function (x) { if (/^(Got it|Revise)$/.test(x.textContent)) x.remove(); });
          sm.insertAdjacentHTML("beforeend", act === "ok" ? '<span class="tag ok">Got it</span>' : '<span class="tag">Revise</span>');
        }
      });
    });
  }

  /* ---------------- paper generator ---------------- */
  function writtenKind(w) { return w.marks >= 10 ? "scenario" : "short"; }
  function generatePage(c, m, arg) {
    if (arg === "paper") { if (S.paper && S.paper.code === C.code) { paperView(c, m); return; } location.hash = "#/m/" + m.code + "/generate"; return; }
    var topics = {}; D.lectures.forEach(function (l) { topics[l.id] = true; });
    var resume = S.paper && S.paper.code === C.code && !S.paper.submitted;
    var gens = S.gen.filter(function (g) { return g.code === C.code; }), gd = C.genDefaults || {};
    var hasM = D.mcq.length > 0;
    var opts = function (arr, def) { return arr.map(function (v) { return '<option value="' + v[0] + '"' + (v[0] === def ? " selected" : "") + ">" + v[1] + "</option>"; }).join(""); };
    c.innerHTML = head("Paper generator", "Build a fresh practice paper from the question bank. Answer it, submit it, and the answers appear for you to check.") +
      (resume ? '<p class="note" style="margin:0 0 24px">You have an unfinished paper. <a href="#/m/' + m.code + '/generate/paper">Resume it</a> or generate a new one below.</p>' : "") +
      '<div class="form-grid">' +
      (hasM ? '<div class="field"><label for="gM">Multiple-choice questions</label><select id="gM">' + opts([[0, "None"], [10, "10 questions"], [15, "15 questions"], [20, "20 questions"], [25, "25 questions (exam length)"], [30, "30 questions"], [40, "40 questions"]], gd.m != null ? gd.m : 25) + "</select></div>" : "") +
      '<div class="field"><label for="gW">Written questions</label><select id="gW">' + opts([[0, "None"], [1, "1 question"], [2, "2 questions"], [3, "3 questions"], [4, "4 questions"], [5, "5 questions"], [6, "6 questions"]], gd.w != null ? gd.w : 3) + "</select></div>" +
      '<div class="field"><span class="lab">Written question type</span><div class="radio-row"><label><input type="radio" name="gT" value="mixed" checked> Mixed</label><label><input type="radio" name="gT" value="short"> Short answer</label><label><input type="radio" name="gT" value="scenario"> Scenario</label></div></div>' +
      '<div class="field"><label for="gTime">Time limit</label><select id="gTime">' + opts([[0, "No limit"], [30, "30 minutes"], [60, "60 minutes"], [90, "90 minutes"], [120, "120 minutes"]], 0) + "</select></div>" +
      "</div>" +
      (hasM ? '<div class="section" style="margin-top:28px"><div class="field"><span class="lab">Topics for multiple-choice questions</span></div><div class="pillrow" id="gTopics">' +
      D.lectures.map(function (l) { return '<button type="button" class="pill active" data-l="' + l.id + '">L' + l.id + " " + esc(SHORT[l.id - 1]) + "</button>"; }).join("") +
      '</div>' + (D.modelMcq.length ? '<div class="radio-row" style="margin-top:12px"><label><input type="checkbox" id="gModel" checked> Include questions from the ' + esc(C.modelLabel || "model paper") + '</label></div>' : "") + '</div>' : "") +
      '<div class="actions" style="margin-top:28px"><button class="btn" id="gGo">Generate paper</button><span class="muted" id="gMsg"></span></div>' +
      (gens.length ? '<div class="section"><h2>Recent attempts</h2><div class="rows">' + gens.map(function (g) {
        return '<div class="row two"><div><div class="t">' + esc(g.when) + '</div><div class="d">MCQ ' + g.mcq + " / " + g.mcqN + (g.wTotal ? " · Written (self-marked) " + (g.w == null ? "not marked" : g.w + " / " + g.wTotal) : "") + '</div></div><div class="end">' + g.pct + "%</div></div>";
      }).join("") + "</div></div>" : "");
    $$("#gTopics .pill", c).forEach(function (b) { b.addEventListener("click", function () { var id = b.getAttribute("data-l"); topics[id] = !topics[id]; b.classList.toggle("active", !!topics[id]); }); });
    $("#gGo").addEventListener("click", function () {
      var nM = $("#gM") ? +$("#gM").value : 0, nW = +$("#gW").value, type = ($("input[name=gT]:checked") || {}).value || "mixed";
      var pool = D.mcq.filter(function (q) { return topics[q.lec]; });
      if ($("#gModel") && $("#gModel").checked) pool = pool.concat(D.modelMcq);
      var wPool = D.written.filter(function (w) { return type === "mixed" || writtenKind(w) === type; });
      var mcq = shuffle(pool).slice(0, nM), wr = shuffle(wPool).slice(0, nW);
      if (!mcq.length && !wr.length) { $("#gMsg").textContent = "Choose at least one question."; return; }
      var limit = +$("#gTime").value;
      S.paper = { code: C.code, id: Date.now(), created: new Date().toLocaleString(), mcq: mcq, wr: wr, ans: [], text: {}, self: {}, submitted: false, limit: limit, endAt: limit ? Date.now() + limit * 60000 : 0 };
      save(); location.hash = "#/m/" + m.code + "/generate/paper";
    });
  }

  function paperView(c, m) {
    var P = S.paper, L = ["A", "B", "C", "D", "E"];
    var mcqMarks = P.mcq.length * 2, wMarks = P.wr.reduce(function (a, w) { return a + w.marks; }, 0);
    var timer = null;
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    cleanup.push(stop);

    function summaryBits() {
      var right = P.mcq.filter(function (q, i) { return P.ans[i] === q.a; }).length;
      var wGot = 0, wAny = false;
      P.wr.forEach(function (w) { var v = P.self[w.id]; if (v != null && v !== "") { wAny = true; wGot += +v; } });
      var got = right * 2 + wGot, tot = mcqMarks + wMarks;
      return { right: right, wGot: wGot, wAny: wAny, got: got, tot: tot, p: pct(got, tot) };
    }
    function recordAttempt() {
      var s = summaryBits(), entry = { code: P.code, id: P.id, when: P.created, mcq: s.right, mcqN: P.mcq.length, w: s.wAny ? s.wGot : null, wTotal: wMarks, pct: s.p };
      S.gen = S.gen.filter(function (g) { return g.id !== P.id; }); S.gen.unshift(entry); S.gen = S.gen.slice(0, 10); save();
    }

    function draw() {
      var sub = P.submitted;
      var h = '<div class="paper">';
      h += '<div class="sticky-bar no-print"><span class="muted">' + (sub ? "Submitted – review your answers below" : "Practice paper in progress") + "</span><span class=\"head-actions\">" +
        (!sub && P.endAt ? '<span class="timer" id="ptimer"></span>' : "") +
        (!sub ? '<button class="btn ghost small" id="pPrint">' + ic("print") + ' Print</button><button class="btn small" id="pSubmit">Submit paper</button>' : '<button class="btn ghost small" id="pPrint">' + ic("print") + " Print</button>") +
        '<a class="btn ghost small" href="#/m/' + m.code + '/generate">New paper</a></span></div>';
      h += '<div class="paper-head"><div class="eyebrow">' + esc(m.code) + " · " + esc(m.name) + "</div><h2>Practice Paper</h2><div class=\"meta\"><span>Generated " + esc(P.created) + "</span><span>" + P.mcq.length + " MCQ (" + mcqMarks + " marks)</span><span>" + P.wr.length + " written (" + wMarks + " marks)</span><span>Total " + (mcqMarks + wMarks) + " marks</span>" + (P.limit ? "<span>" + P.limit + " minutes</span>" : "") + "</div></div>";
      if (sub) {
        var s = summaryBits();
        h += '<div class="result"><div class="score-ring" style="--p:' + s.p + '"><div id="rPct">' + s.p + '%</div></div><div><h2 id="rMarks">' + s.got + " / " + s.tot + ' marks</h2><p class="grade" id="rGrade">' + gradeOf(s.p) + '</p><p class="muted" style="margin:0" id="rDetail">Multiple choice: ' + s.right + " / " + P.mcq.length + " correct (" + s.right * 2 + " / " + mcqMarks + " marks)" + (P.wr.length ? " · Written: " + (s.wAny ? s.wGot : 0) + " / " + wMarks + " marks (self-marked – enter your marks under each model answer)" : "") + "</p></div></div>";
      } else {
        h += '<p class="muted">Answer every question. Choose one option for each multiple-choice question and write your answers to the written questions in the boxes. When you submit, the correct answers and model answers are shown.</p>';
      }
      if (P.mcq.length) {
        h += '<div class="paper-sec"><h3>Section A – Multiple choice (2 marks each)</h3>';
        P.mcq.forEach(function (q, i) {
          h += '<div class="pq"><div class="qh"><span>Question ' + (i + 1) + "</span><span>2 marks</span></div><div class=\"qt\">" + esc(q.q) + '</div><div class="opts">';
          q.o.forEach(function (t, k) {
            var cls = "opt", dis = "";
            if (sub) { dis = " disabled"; if (k === q.a) cls += " right"; else if (k === P.ans[i]) cls += " wrong"; } else if (P.ans[i] === k) cls += " sel";
            h += '<button class="' + cls + '" data-q="' + i + '" data-k="' + k + '"' + dis + '><span class="l">' + L[k] + "</span><span>" + esc(t) + "</span></button>";
          });
          h += "</div>" + (sub ? '<div class="explain">' + (P.ans[i] === q.a ? "<b>Correct.</b> " : (P.ans[i] == null ? "<b>Not answered.</b> " : "<b>Incorrect.</b> ") + "The answer is <b>" + L[q.a] + "</b>. ") + esc(q.e) + "</div>" : "") + "</div>";
        });
        h += "</div>";
      }
      if (P.wr.length) {
        h += '<div class="paper-sec"><h3>Section ' + (P.mcq.length ? "B" : "A") + " – Written questions</h3>";
        P.wr.forEach(function (w, i) {
          h += '<div class="pq"><div class="qh"><span>Question ' + (i + 1) + " · " + esc(w.paper) + " " + esc(w.no) + " · " + esc(w.topic) + "</span><span>" + w.marks + ' marks</span></div><div class="qt">' + w.q + '</div><textarea data-w="' + w.id + '" placeholder="Write your answer here."' + (sub ? " readonly" : "") + ">" + esc(P.text[w.id] || "") + "</textarea>";
          if (sub) {
            h += '<div class="model"><div class="mh">Model answer</div>' + w.a + '</div><div class="selfmark"><label for="sm' + w.id + '">Marks you would award yourself (out of ' + w.marks + ")</label><input type=\"number\" id=\"sm" + w.id + '" data-sm="' + w.id + '" min="0" max="' + w.marks + '" value="' + (P.self[w.id] != null ? esc(P.self[w.id]) : "") + '"></div>';
          }
          h += "</div>";
        });
        h += "</div>";
      }
      if (!sub) { h += '<div class="actions"><button class="btn" id="pSubmit2">Submit paper</button></div>'; }
      h += "</div>";
      c.innerHTML = h;
      if (sub) { stop(); }
      wire();
      if (!sub && P.endAt) { tick(); stop(); timer = setInterval(tick, 1000); }
    }

    function tick() {
      var left = Math.max(0, Math.round((P.endAt - Date.now()) / 1000)), t = $("#ptimer");
      if (t) { t.textContent = mmss(left); t.classList.toggle("low", left <= 120); }
      if (left <= 0 && !P.submitted) { submit(true); }
    }
    function submit(auto) {
      if (P.submitted) return;
      if (!auto) {
        var un = P.mcq.filter(function (q, i) { return P.ans[i] == null; }).length + P.wr.filter(function (w) { return !(P.text[w.id] || "").trim(); }).length;
        if (un && !window.confirm(un + " question(s) are unanswered. Submit anyway?")) return;
      }
      P.submitted = true; P.mcq.forEach(function (q, i) { if (P.ans[i] === q.a) S.ok[q.id] = 1; });
      recordAttempt(); stop(); draw(); window.scrollTo(0, 0);
    }
    function wire() {
      $$(".pq .opt", c).forEach(function (b) {
        b.addEventListener("click", function () {
          if (P.submitted) return;
          var qi = +b.getAttribute("data-q"), k = +b.getAttribute("data-k");
          P.ans[qi] = P.ans[qi] === k ? null : k; save();
          $$('.opt[data-q="' + qi + '"]', c).forEach(function (o) { o.classList.toggle("sel", +o.getAttribute("data-k") === P.ans[qi]); });
        });
      });
      $$("textarea[data-w]", c).forEach(function (t) { t.addEventListener("input", function () { P.text[t.getAttribute("data-w")] = t.value; save(); }); });
      $$("input[data-sm]", c).forEach(function (inp) {
        inp.addEventListener("input", function () {
          var id = inp.getAttribute("data-sm"), w = P.wr.filter(function (x) { return String(x.id) === id; })[0];
          var v = inp.value === "" ? null : Math.max(0, Math.min(w.marks, +inp.value));
          P.self[id] = v; var s = summaryBits(); recordAttempt();
          $("#rPct").textContent = s.p + "%"; $("#rMarks").textContent = s.got + " / " + s.tot + " marks"; $("#rGrade").textContent = gradeOf(s.p);
          $(".score-ring", c).style.setProperty("--p", s.p);
          $("#rDetail").textContent = "Multiple choice: " + s.right + " / " + P.mcq.length + " correct (" + s.right * 2 + " / " + mcqMarks + " marks) · Written: " + (s.wAny ? s.wGot : 0) + " / " + wMarks + " marks (self-marked)";
        });
      });
      ["pSubmit", "pSubmit2"].forEach(function (id) { var b = $("#" + id, c); if (b) b.addEventListener("click", function () { submit(false); }); });
      var pr = $("#pPrint", c); if (pr) pr.addEventListener("click", function () { window.print(); });
    }
    draw();
  }

  /* ---------------- flashcards ---------------- */
  function flashPage(c, m, arg) {
    var all = []; D.lectures.forEach(function (l) { l.terms.forEach(function (t, k) { all.push({ lec: l.id, key: lk(l.id + "-" + k), t: t[0], d: t[1] }); }); });
    var sel = arg && arg !== "all" ? +arg : 0;
    var deck = sel ? all.filter(function (x) { return x.lec === sel; }) : all.slice();
    var i = 0, flip = false;
    c.innerHTML = head("Flashcards", "Click the card (or press space) to flip it. Mark the ones you know.", '<span class="tag">' + deck.length + " cards</span>") +
      '<div class="pillrow"><a class="pill' + (!sel ? " active" : "") + '" href="#/m/' + m.code + '/flash">All lectures</a>' +
      D.lectures.map(function (l) { return '<a class="pill' + (sel === l.id ? " active" : "") + '" href="#/m/' + m.code + "/flash/" + l.id + '">L' + l.id + "</a>"; }).join("") + '</div><div id="fbox"></div>';
    function draw() {
      var cd = deck[i], known = deck.filter(function (x) { return S.fl[x.key]; }).length;
      $("#fbox").innerHTML = '<p class="muted" style="text-align:center;margin-top:22px">Card ' + (i + 1) + " of " + deck.length + " · " + known + ' marked as known</p><div class="flash-wrap"><div class="flash' + (flip ? " flip" : "") + '" id="fl" tabindex="0" role="button" aria-label="Flip card"><div class="face front"><small>Term · Lecture ' + cd.lec + "</small>" + esc(cd.t) + '</div><div class="face back"><small>Meaning</small>' + esc(cd.d) + "</div></div></div>" +
        '<div class="actions" style="justify-content:center"><button class="btn ghost small" id="fp">&larr; Back</button><button class="btn ghost small" id="ff">Flip</button><button class="btn ghost small" id="fs">Still learning</button><button class="btn small" id="fk">Got it</button><button class="btn ghost small" id="fn">Next &rarr;</button><button class="btn ghost small" id="fsh">Shuffle</button></div>';
      var toggle = function () { flip = !flip; $("#fl").classList.toggle("flip", flip); };
      $("#fl").addEventListener("click", toggle); $("#ff").addEventListener("click", toggle);
      $("#fp").addEventListener("click", function () { i = (i - 1 + deck.length) % deck.length; flip = false; draw(); });
      $("#fn").addEventListener("click", next);
      $("#fk").addEventListener("click", function () { S.fl[cd.key] = 1; save(); next(); });
      $("#fs").addEventListener("click", function () { delete S.fl[cd.key]; save(); next(); });
      $("#fsh").addEventListener("click", function () { deck = shuffle(deck); i = 0; flip = false; draw(); });
    }
    function next() { i = (i + 1) % deck.length; flip = false; draw(); }
    function key(e) {
      if (/TEXTAREA|INPUT|SELECT/.test(e.target.tagName)) return;
      if (e.key === " ") { e.preventDefault(); flip = !flip; var f = $("#fl"); if (f) f.classList.toggle("flip", flip); }
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") { i = (i - 1 + deck.length) % deck.length; flip = false; draw(); }
    }
    document.addEventListener("keydown", key); cleanup.push(function () { document.removeEventListener("keydown", key); });
    draw();
  }

  /* ---------------- cheat sheet ---------------- */
  function cheatPage(c) {
    var lab = C.refLabel || "Cheat sheet";
    c.innerHTML = head(lab, C.refIntro || "The things worth remembering, on one page.", '<button class="btn ghost small no-print" onclick="window.print()">' + ic("print") + " Print</button>") +
      '<div class="ref-search no-print"><input type="search" id="refQ" placeholder="Search this sheet (for example MQTT, BSC, CMMI)" aria-label="Search"><span class="muted" id="refN"></span></div>' +
      '<div class="cheats">' + D.cheatsheet.map(function (s) { return '<div class="cheat"><h3>' + s.title + "</h3>" + s.html + "</div>"; }).join("") + '</div><p class="muted" id="refNone" style="display:none">No matching section.</p>';
    var q = $("#refQ", c);
    q.addEventListener("input", function () {
      var t = q.value.trim().toLowerCase(), n = 0;
      $$(".cheat", c).forEach(function (b) { var on = !t || b.textContent.toLowerCase().indexOf(t) >= 0; b.style.display = on ? "" : "none"; if (on) n++; });
      $("#refN", c).textContent = t ? n + " of " + D.cheatsheet.length + " sections" : "";
      $("#refNone", c).style.display = n ? "none" : "";
    });
  }

  if (window.PSPIntro && window.PSPIntro.shouldRun()) { window.PSPIntro.run(render); } else { render(); }
})();
