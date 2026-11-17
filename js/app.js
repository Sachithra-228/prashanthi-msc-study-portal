/* Prashanthi’s MSc Study Portal – vanilla JS single-page app (hash routing, no build step) */
(function () {
  "use strict";
  var D = window.DATA;
  var app = document.getElementById("main");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var SHORT = ["Introduction", "Philosophy & Onion", "Research Ethics", "Sampling", "Missing Data", "EDA & Visualization", "Quantitative", "Qualitative", "Thesis Writing", "Writing Papers"];
  var WISHES = [
    "You’ve worked so hard for this. Take a deep breath, trust yourself – the magic was always in you. ✨",
    "One page, one idea, one spell at a time – and you’re already further than you think. 📜",
    "Be proud of how far you’ve come. Even the brightest witch started with a first page. 🌟",
    "Rest when you need to, then rise like you always do. We believe in you! 🦉",
    "Calm mind, kind heart, steady wand – you’re going to do wonderfully. 🪄"
  ];
  var cleanup = [];
  var zoomed = false;

  /* ---------------- storage ---------------- */
  var S = { lec: {}, ok: {}, best: {}, wr: {}, fl: {} };
  try { var raw = localStorage.getItem("psp.v1"); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch (e) { /* storage unavailable – app still works */ }
  function save() { try { localStorage.setItem("psp.v1", JSON.stringify(S)); } catch (e) { /* ignore */ } }

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
    if (d === 0) return "Today – you’ve got this!";
    return "Completed";
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function mmss(s) { var m = Math.floor(s / 60), r = s % 60; return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r; }

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
  function go(path) { location.hash = "#/" + path; }

  function render() {
    cleanup.forEach(function (f) { f(); }); cleanup = [];
    document.body.classList.remove("menu-open");
    var p = parts();
    window.scrollTo(0, 0);
    if (p[0] === "m" && mod(p[1])) { moduleView(mod(p[1]), p[2] || "", p[3], p[4]); }
    else { home(); }
    zoomed = false;
  }
  window.addEventListener("hashchange", render);

  /* ---------------- landing page ---------------- */
  function home() {
    $("#menuBtn").hidden = true; $("#crumb").textContent = "";
    document.title = "Prashanthi’s MSc Study Portal";
    var upcoming = D.modules.filter(function (m) { return daysLeft(m.date) >= 0; }).sort(function (a, b) { return a.date < b.date ? -1 : 1; })[0];
    var h = '<div class="view-in"><section class="mapsheet">' +
      '<svg class="flourish" viewBox="0 0 520 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M10 20h170c20 0 22-14 40-14s20 14 40 14 22-14 40-14 20 14 40 14h170"/><circle cx="260" cy="20" r="5" fill="currentColor"/><path d="M180 20c-10 10-30 14-50 8M340 20c10 10 30 14 50 8" /></svg>' +
      '<p class="presents">Miss <b>Prashanthi</b> and her trusty books</p><p class="presents">are proud to present</p>' +
      '<h1 class="crest">Prashanthi’s <br>MSc Study Portal<small>a map of every module you must conquer</small></h1>' +
      '<p class="oath">“I solemnly swear that I am up to some very good studying.”</p>';
    if (upcoming) {
      var dl = daysLeft(upcoming.date);
      h += '<div class="next-exam"><b>' + dl + '</b><div class="muted">' + (dl === 1 ? "day until" : "days until") + ' your next exam<br><strong style="color:var(--ink)">' + esc(upcoming.name) + '</strong> · ' + esc(upcoming.dateLabel) + '</div></div>';
    }
    h += '<div class="map" id="map"><svg class="trail" id="trail" aria-hidden="true"></svg>';
    D.modules.forEach(function (m) {
      var d = daysLeft(m.date);
      h += '<a class="module-card' + (m.ready ? "" : " soon") + '" href="#/m/' + m.code + '" data-code="' + m.code + '">' +
        '<span class="seal" aria-hidden="true">' + (m.ready ? "P" : "?") + '</span><span class="place">' + esc(m.place) + '</span><span class="code">' + m.code + '</span><h3>' + esc(m.name) + '</h3>' +
        '<p>' + (m.ready ? esc(m.desc) : "The ink hasn’t appeared on this part of the map yet…") + '</p>' +
        '<div class="meta"><span class="chip' + (m.ready ? " ok" : " gray") + '">' + (m.ready ? "Open for study" : "Coming soon") + '</span><span class="muted">' + esc(m.dateLabel) + (d >= 0 ? " · " + countdown(m) : "") + '</span></div>' +
        '<span class="open">' + (m.ready ? "Step inside →" : "Peek inside →") + '</span></a>';
    });
    h += '</div><p class="mischief">Mischief managed.</p></section></div>';
    app.innerHTML = h;
    drawTrail();
    window.addEventListener("resize", drawTrail);
    cleanup.push(function () { window.removeEventListener("resize", drawTrail); });
    setTimeout(drawTrail, 700);
  }

  /* dotted footstep trail linking the places on the map */
  function drawTrail() {
    var map = $("#map"), svg = $("#trail"); if (!map || !svg) return;
    var cards = $$(".module-card", map), mr = map.getBoundingClientRect();
    if (cards.length < 2) return;
    var pts = cards.map(function (c) { var r = c.getBoundingClientRect(); return [r.left - mr.left + r.width / 2, r.top - mr.top + r.height / 2]; });
    var d = "M" + pts[0][0] + " " + pts[0][1];
    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[1] - a[1], dy = a[0] - b[0];
      var k = i % 2 ? 0.18 : -0.18;
      d += " Q" + (mx + dx * k) + " " + (my + dy * k) + " " + b[0] + " " + b[1];
    }
    svg.setAttribute("viewBox", "0 0 " + mr.width + " " + mr.height);
    svg.innerHTML = '<path d="' + d + '"/>';
  }

  /* zoom into a module card */
  document.addEventListener("click", function (e) {
    var card = e.target.closest && e.target.closest(".module-card");
    if (!card) return;
    e.preventDefault();
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

  function ttl(main, flavor, extra) { return '<div class="page-title"><h1>' + main + '</h1><span class="flavor">' + flavor + "</span>" + (extra || "") + "</div>"; }

  /* ---------------- module shell ---------------- */
  function navHTML(m, page, arg) {
    var base = "#/m/" + m.code;
    function a(path, ico, label) { return '<a href="' + base + (path ? "/" + path : "") + '" class="' + (page === path.split("/")[0] ? "active" : "") + '"><span class="ni">' + ico + "</span>" + label + "</a>"; }
    var lecOpen = page === "lectures" || page === "lecture";
    var h = '<nav class="nav" aria-label="Module sections">' + a("", "🏰", "Overview");
    h += '<details' + (lecOpen ? " open" : "") + '><summary><span class="ni">📚</span>Lectures<span class="caret">›</span></summary><div class="sub">' +
      '<a href="' + base + '/lectures" class="' + (page === "lectures" ? "active" : "") + '">All lectures</a>';
    D.lectures.forEach(function (l) {
      h += '<a href="' + base + "/lecture/" + l.id + '" class="' + (page === "lecture" && +arg === l.id ? "active" : "") + '">' + l.id + ". " + esc(SHORT[l.id - 1]) + (S.lec[l.id] ? '<span class="tick">✓</span>' : "") + "</a>";
    });
    h += "</div></details>";
    h += a("papers", "📜", "Past papers") + a("practice", "🪄", "Practice quiz") + a("written", "🪶", "Written practice") + a("mock", "⏳", "Mock exam") + a("flash", "🃏", "Flashcards") + a("cheat", "🗺️", "Cheat sheet");
    return h + "</nav>";
  }

  function moduleView(m, page, arg, arg2) {
    $("#menuBtn").hidden = false;
    $("#crumb").textContent = m.code + " · " + m.name;
    document.title = m.name + " – Prashanthi’s MSc Study Portal";
    app.innerHTML = '<div class="module-shell ' + (zoomed ? "view-zoom" : "view-in") + '">' +
      '<aside class="sidebar" id="sidebar"><a class="back" href="#/">← All modules</a>' +
      '<div class="side-head"><div class="place">' + esc(m.place) + '</div><div class="code">' + m.code + '</div><h2>' + esc(m.name) + "</h2></div>" +
      navHTML(m, page, arg) + "</aside>" +
      '<div class="scrim" id="scrim"></div><section class="content" id="content"></section></div>';
    $("#sidebar").addEventListener("click", function (e) { if (e.target.closest("a")) document.body.classList.remove("menu-open"); });
    $("#scrim").addEventListener("click", function () { document.body.classList.remove("menu-open"); });
    var c = $("#content");
    if (!m.ready && page) { soon(c, m); return; }
    var pages = { "": overview, lectures: lecturesPage, lecture: lecturePage, papers: papersPage, practice: practicePage, written: writtenPage, mock: mockPage, flash: flashPage, cheat: cheatPage };
    (pages[page] || overview)(c, m, arg, arg2);
  }
  $("#menuBtn").addEventListener("click", function () { document.body.classList.toggle("menu-open"); });

  function examChips(m) {
    return '<div class="info-chips"><span class="chip">📅 ' + esc(m.dateLabel) + " 2026</span><span class=\"chip\">🕘 " + esc(m.time) + '</span><span class="chip">⏳ ' + esc(m.duration) + '</span><span class="chip gray">' + esc(m.type) + "</span></div>";
  }
  function soon(c, m) {
    c.innerHTML = '<div class="card empty"><div class="big">🕯️</div><h2>' + esc(m.name) + '</h2><p class="script" style="font-size:28px;color:var(--accent2);margin:0 0 8px">The ink hasn’t appeared yet…</p><p class="muted">The spellbooks and practice for this module will appear here as soon as they are added.</p>' + examChips(m) + '<p><a class="btn" href="#/m/' + m.code + '">Back to overview</a></p></div>';
  }

  /* ---------------- overview ---------------- */
  function overview(c, m) {
    if (!m.ready) {
      c.innerHTML = ttl(esc(m.name), esc(m.place), '<span class="chip gray">Coming soon</span>') + '<p class="muted">' + esc(m.desc) + "</p>" + examChips(m) +
        '<div class="card empty"><div class="big">🕯️</div><h3>Study materials arriving soon</h3><p class="muted">Lecture notes, flashcards and practice questions will be added here. In the meantime – ' + esc(countdown(m).toLowerCase()) + ". Lecturer: " + esc(m.lic) + ".</p></div>";
      return;
    }
    var lecDone = D.lectures.filter(function (l) { return S.lec[l.id]; }).length;
    var allQ = D.mcq.length + D.modelMcq.length, okQ = Object.keys(S.ok).length;
    var wDone = D.written.filter(function (w) { return S.wr[w.id] && S.wr[w.id].st === "ok"; }).length;
    var steps = [
      "<b>Type of research</b> – quantitative, qualitative or mixed? Exploratory, descriptive or explanatory? Cross-sectional or longitudinal? Say <i>why</i>.",
      "<b>Variables</b> – dependent, independent, control and confounding variables, and their level of measurement (nominal / ordinal / interval / ratio).",
      "<b>Sampling and data collection</b> – the sampling method, the sample size and the instrument (survey, interview, observation, experiment).",
      "<b>Analysis</b> – validation, EDA, then t-test / ANOVA / chi-square / regression (quantitative) or coding and thematic analysis (qualitative).",
      "<b>Ethics</b> – informed consent, confidentiality, ethics clearance, right to withdraw.",
      "<b>Strengths, limitations, generalizability</b> – finish with an honest, critical comment."
    ];
    c.innerHTML = ttl(esc(m.name), esc(m.place), '<span class="chip ok">' + esc(countdown(m)) + "</span>") +
      '<p class="muted" style="max-width:70ch">' + esc(m.desc) + " Lecturer: " + esc(m.lic) + ".</p>" + examChips(m) +
      '<div class="grid stats">' +
      stat("Spellbooks read", lecDone + " / " + D.lectures.length, pct(lecDone, D.lectures.length)) +
      stat("Questions mastered", okQ + " / " + allQ, pct(okQ, allQ)) +
      stat("Essays mastered", wDone + " / " + D.written.length, pct(wDone, D.written.length)) + "</div>" +
      '<div class="card"><h3>How a clever witch attacks a scenario question</h3><p class="muted">Past papers (and the 2026 model paper) love scenario questions. Walk through this checklist every time:</p><ol class="steps">' +
      steps.map(function (s) { return "<li><span>" + s + "</span></li>"; }).join("") + '</ol><p class="note" style="margin-bottom:0"><b>MCQ tip:</b> read all four options, cross out the clearly wrong ones, and watch for words like <i>NOT</i>, <i>best</i> and <i>main</i>.</p></div>' +
      '<div class="grid tiles">' +
      tile("lectures", "📚", "Lecture notes", "the spellbooks", "10 lectures with simple notes, key terms and the original slides.") +
      tile("practice", "🪄", "Practice quiz", "practice charms", D.mcq.length + " MCQs with instant explanations, by topic.") +
      tile("written", "🪶", "Written practice", "essay of the year", D.written.length + " past-paper questions with model answers.") +
      tile("mock", "⏳", "Mock exam", "mock N.E.W.T.", "Timed paper – the 2026 model paper or a random mix.") +
      tile("flash", "🃏", "Flashcards", "spell cards", "Every key term from every lecture.") +
      tile("cheat", "🗺️", "Cheat sheet", "the marauder’s notes", "Formulas, tables and comparisons on one page.") + "</div>";
    function stat(label, val, p) { return '<div class="card stat"><span class="muted">' + label + "</span><b>" + val + '</b><div class="bar"><i style="width:' + p + '%"></i></div></div>'; }
    function tile(path, ico, t, fl, d) { return '<a class="card tile" href="#/m/' + m.code + "/" + path + '"><div class="ti">' + ico + "</div><h3>" + t + '</h3><span class="fl">' + fl + "</span><p>" + d + "</p></a>"; }
  }

  /* ---------------- lectures ---------------- */
  function lecturesPage(c, m) {
    c.innerHTML = ttl("Lectures", "the spellbooks", '<span class="chip">' + D.lectures.length + " topics</span>") + "<p class=\"muted\">Read the notes, check the key terms, glance at the slides, then test yourself.</p><div class=\"grid lec-list\">" +
      D.lectures.map(function (l) {
        return '<a class="card lec-card" href="#/m/' + m.code + "/lecture/" + l.id + '"><span class="num">LECTURE ' + l.id + (S.lec[l.id] ? " · ✓ DONE" : "") + "</span><h3>" + esc(l.title) + "</h3><p>" + esc(l.desc) + '</p><span class="muted" style="font-size:13px">' + l.sections.length + " sections · " + l.terms.length + " key terms · " + l.pages + " slides</span></a>";
      }).join("") + "</div>";
  }

  function lecturePage(c, m, id, tab) {
    var l = D.lectures.filter(function (x) { return x.id === +id; })[0];
    if (!l) { lecturesPage(c, m); return; }
    tab = tab || "notes";
    var base = "#/m/" + m.code + "/lecture/" + l.id + "/";
    var tabs = [["notes", "📖 Notes"], ["terms", "🔑 Key terms"], ["slides", "🖼️ Slides"], ["quiz", "✏️ Quiz"]];
    var qs = D.mcq.filter(function (q) { return q.lec === l.id; });
    var h = '<div class="eyebrow">Lecture ' + l.id + " of " + D.lectures.length + '</div>' + ttl(esc(l.title), "spellbook " + l.id) + '<p class="muted" style="max-width:72ch">' + esc(l.desc) + "</p>" +
      '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<a class="tab' + (tab === t[0] ? " active" : "") + '" role="tab" href="' + base + t[0] + '" style="text-decoration:none">' + t[1] + "</a>"; }).join("") + "</div>";
    if (tab === "notes") {
      h += '<div class="card notes">' + l.sections.map(function (s) { return "<h3>" + esc(s.h) + "</h3><ul>" + s.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }).join("") + "</div>";
    } else if (tab === "terms") {
      h += '<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">' + l.terms.map(function (t) { return '<div class="card"><h3 style="font-size:18px;color:var(--accent)">' + esc(t[0]) + '</h3><p style="margin:0">' + esc(t[1]) + "</p></div>"; }).join("") + '</div><p><a class="btn" href="#/m/' + m.code + "/flash/" + l.id + '">🃏 Study these as flashcards</a></p>';
    } else if (tab === "slides") {
      h += '<p><a class="btn ghost small" target="_blank" rel="noopener" href="' + l.pdf + '">Open in new tab ↗</a> <a class="btn ghost small" download href="' + l.pdf + '">Download PDF ⬇</a></p><iframe class="pdf-frame" title="Lecture ' + l.id + ' slides" src="' + l.pdf + '"></iframe><p class="muted" style="font-size:14px">If the slides don’t show on your phone, use “Open in new tab”.</p>';
    } else {
      h += '<div id="quizbox"></div>';
    }
    var prev = D.lectures[l.id - 2], next = D.lectures[l.id];
    h += '<div class="actions no-print"><button class="btn ' + (S.lec[l.id] ? "ghost" : "") + '" id="doneBtn">' + (S.lec[l.id] ? "✓ Marked as read – undo" : "Mark lecture as read") + "</button>" +
      (prev ? '<a class="btn ghost" href="#/m/' + m.code + "/lecture/" + prev.id + '">← ' + esc(SHORT[prev.id - 1]) + "</a>" : "") +
      (next ? '<a class="btn ghost" href="#/m/' + m.code + "/lecture/" + next.id + '">' + esc(SHORT[next.id - 1]) + " →</a>" : "") + "</div>";
    c.innerHTML = h;
    $("#doneBtn").addEventListener("click", function () { S.lec[l.id] = !S.lec[l.id]; save(); render(); });
    if (tab === "quiz") {
      if (!qs.length) { $("#quizbox").innerHTML = '<div class="card">No quiz questions for this lecture yet.</div>'; }
      else { runQuiz($("#quizbox"), qs, { mode: "practice", key: "lec" + l.id, title: "Lecture " + l.id + " quiz" }); }
    }
  }

  /* ---------------- quiz engine ---------------- */
  function runQuiz(el, qs, o) {
    var i = 0, ans = [], flags = {}, left = o.limit || 0, timer = null, finished = false;
    var exam = o.mode === "exam", L = ["A", "B", "C", "D", "E"];
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    cleanup.push(stop);
    if (exam && left) { timer = setInterval(function () { left--; var t = $("#qtimer"); if (t) { t.textContent = mmss(left); t.classList.toggle("low", left <= 60); } if (left <= 0) { finish(); } }, 1000); }

    function draw() {
      var q = qs[i];
      var h = '<div class="card"><div class="progress-top"><i style="width:' + (exam ? pct(ans.filter(function (a) { return a != null; }).length, qs.length) : pct(i, qs.length)) + '%"></i></div>' +
        '<div class="q-meta" style="margin-top:12px"><span>' + esc(o.title || "Quiz") + " · Question " + (i + 1) + " of " + qs.length + "</span>" + (exam && left ? '<span class="timer" id="qtimer">' + mmss(left) + "</span>" : "") + "</div>" +
        '<div class="q-text">' + esc(q.q) + '</div><div class="opts" role="group" aria-label="Answer options">';
      q.o.forEach(function (t, k) {
        var cls = "opt", dis = "";
        if (!exam && ans[i] != null) { dis = " disabled"; if (k === q.a) cls += " right"; else if (k === ans[i]) cls += " wrong"; }
        else if (exam && ans[i] === k) cls += " sel";
        h += '<button class="' + cls + '" data-k="' + k + '"' + dis + '><span class="l">' + L[k] + "</span><span>" + esc(t) + "</span></button>";
      });
      h += "</div>";
      if (!exam && ans[i] != null) { h += '<div class="explain">' + (ans[i] === q.a ? "✨ <b>Correct – 10 points to Gryffindor!</b> " : "🪶 <b>Not quite – even Hermione reviews.</b> The answer is <b>" + L[q.a] + "</b>. ") + esc(q.e) + "</div>"; }
      h += '<div class="actions">';
      if (exam) {
        h += '<button class="btn ghost small" id="prevQ"' + (i === 0 ? " disabled" : "") + '>← Prev</button><button class="btn ghost small" id="flagQ">' + (flags[i] ? "🚩 Unflag" : "⚑ Flag") + '</button>' +
          (i < qs.length - 1 ? '<button class="btn small" id="nextQ">Next →</button>' : "") + '<button class="btn small" id="submitQ" style="margin-left:auto">Submit paper</button>';
      } else if (ans[i] != null) {
        h += '<button class="btn" id="nextQ">' + (i < qs.length - 1 ? "Next question →" : "See my results") + "</button>";
      }
      h += "</div></div>";
      if (exam) { h += '<div class="card" style="margin-top:14px"><div class="muted" style="margin-bottom:8px;font-size:14px">Jump to a question (🟪 answered · underline = flagged)</div><div class="navgrid">' + qs.map(function (_, n) { return '<button data-n="' + n + '" class="' + (ans[n] != null ? "done " : "") + (n === i ? "cur " : "") + (flags[n] ? "flag" : "") + '">' + (n + 1) + "</button>"; }).join("") + "</div></div>"; }
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
      if (o.key) { S.best[o.key] = Math.max(S.best[o.key] || 0, p); } save();
      var grade = p >= 85 ? "Outstanding (O)" : p >= 70 ? "Exceeds Expectations (E)" : p >= 55 ? "Acceptable (A)" : p >= 40 ? "Poor (P) – practice makes perfect" : "Not yet – every witch started here";
      var msg = p >= 85 ? "Brilliant! Hermione would be proud. 🌟" : p >= 70 ? "Lovely work – a little more polish and it’s an O. ✨" : "Every attempt makes the magic stick. Review below and go again. 🕯️";
      var h = '<div class="card" style="text-align:center"><div class="score-ring" style="--p:' + p + '"><div>' + p + '%</div></div><h2 style="margin-top:14px">' + right + " out of " + qs.length + (o.marksPer ? " · " + right * o.marksPer + "/" + qs.length * o.marksPer + " marks" : "") + '</h2><p class="grade">' + grade + '</p><p class="muted">' + msg + (S.best[o.key] ? " Best score here: " + S.best[o.key] + "%." : "") + '</p><div class="actions" style="justify-content:center">' +
        (wrong.length ? '<button class="btn" id="retryW">Retry the ' + wrong.length + " I missed</button>" : "") + '<button class="btn ghost" id="again">Start again</button></div></div>' +
        '<div class="card" style="margin-top:14px"><h3>Review</h3>' + qs.map(function (q, n) {
          var ok = ans[n] === q.a;
          return '<div class="review-item ' + (ok ? "ok" : "no") + '"><b>' + (n + 1) + ". " + esc(q.q) + "</b><br>" + (ok ? "✅ " : "❌ Your answer: " + (ans[n] == null ? "<i>none</i>" : esc(q.o[ans[n]])) + "<br>✅ ") + "Correct: " + esc(q.o[q.a]) + '<br><span class="muted">' + esc(q.e) + "</span></div>";
        }).join("") + "</div>";
      el.innerHTML = h; window.scrollTo(0, 0);
      var rw = $("#retryW", el); if (rw) rw.addEventListener("click", function () { runQuiz(el, wrong, { mode: "practice", key: o.key + "-retry", title: "Retry missed" }); });
      $("#again", el).addEventListener("click", function () { runQuiz(el, o.shuffle ? shuffle(qs) : qs, o); });
    }
    draw();
  }

  /* ---------------- practice quiz ---------------- */
  function practicePage(c, m, arg) {
    var sets = [["all", "All topics", D.mcq], ["model", "Model paper 2026", D.modelMcq]];
    D.lectures.forEach(function (l) { sets.push([String(l.id), "L" + l.id + " " + SHORT[l.id - 1], D.mcq.filter(function (q) { return q.lec === l.id; })]); });
    var cur = sets.filter(function (s) { return s[0] === arg; })[0];
    var h = ttl("Practice quiz", "practice charms") + '<p class="muted">Pick a topic. You get instant feedback and a short explanation after every answer.</p><div class="pillrow">' +
      sets.map(function (s) { return '<a class="pill' + (cur && cur[0] === s[0] ? " active" : "") + '" href="#/m/' + m.code + "/practice/" + s[0] + '" style="text-decoration:none">' + esc(s[1]) + " (" + s[2].length + ")</a>"; }).join("") + '</div><div id="quizbox">' +
      (cur ? "" : '<div class="card empty"><div class="big">✏️</div><h3>Choose a topic to begin</h3><p class="muted">Not sure where to start? Try “All topics” – questions are shuffled.</p><a class="btn" href="#/m/' + m.code + '/practice/all">Start with all topics</a></div>') + "</div>";
    c.innerHTML = h;
    if (cur) { var list = cur[0] === "all" ? shuffle(cur[2]) : cur[2]; runQuiz($("#quizbox"), list, { mode: "practice", key: "practice-" + cur[0], title: cur[1], shuffle: cur[0] === "all", marksPer: cur[0] === "model" ? 2 : 0 }); }
  }

  /* ---------------- mock exam ---------------- */
  function mockPage(c, m, arg) {
    if (arg === "model" || arg === "random") {
      var qs = arg === "model" ? D.modelMcq : shuffle(D.mcq).slice(0, 25);
      c.innerHTML = ttl("Mock exam", "mock N.E.W.T.", '<span class="chip">' + (arg === "model" ? "Model paper 2026" : "Random mix") + "</span>") + '<p class="muted">Timed, no hints. Answers and explanations appear after you submit.</p><div id="quizbox"></div>';
      runQuiz($("#quizbox"), qs, { mode: "exam", limit: 30 * 60, key: "mock-" + arg, title: arg === "model" ? "Model paper 2026" : "Random mix", marksPer: arg === "model" ? 2 : 0 });
      return;
    }
    c.innerHTML = ttl("Mock exam", "mock N.E.W.T.") + '<p class="muted" style="max-width:68ch">Practise like it’s the real thing: a timer, no feedback until you submit, and a question navigator with flags. The real exam is an LMS quiz, so the MCQ section is the part you can simulate here – then use <a href="#/m/' + m.code + '/written">Written practice</a> for the long answers.</p>' +
      '<div class="grid tiles"><a class="card tile" href="#/m/' + m.code + '/mock/model"><div class="ti">📋</div><h3>Model paper 2026</h3><p>The exact 25 MCQs (2 marks each = 50 marks) from the model paper · 30 minutes.</p></a>' +
      '<a class="card tile" href="#/m/' + m.code + '/mock/random"><div class="ti">🎲</div><h3>Random mix</h3><p>25 fresh questions drawn from all ten lectures · 30 minutes.</p></a></div>' +
      '<div class="card"><h3>Your best scores</h3><p style="margin:0" class="muted">Model paper: <b>' + (S.best["mock-model"] != null ? S.best["mock-model"] + "%" : "not attempted") + "</b> · Random mix: <b>" + (S.best["mock-random"] != null ? S.best["mock-random"] + "%" : "not attempted") + "</b></p></div>";
  }

  /* ---------------- past papers ---------------- */
  function papersPage(c, m) {
    c.innerHTML = ttl("Past papers", "from the restricted section") + '<p class="muted">Original papers as PDFs, plus a worked, typed version of every question you can practise.</p><div class="grid lec-list">' +
      D.papers.map(function (p) {
        var wl = D.written.filter(function (w) { return w.paper === (p.written || "Model Paper 2026"); }).length;
        return '<div class="card lec-card"><span class="num">' + p.year + "</span><h3>" + esc(p.title) + "</h3><p>" + esc(p.info) + '</p><div class="actions" style="margin-top:4px"><a class="btn small" target="_blank" rel="noopener" href="' + p.pdf + '">Open PDF ↗</a>' +
          (p.mcq ? '<a class="btn small ghost" href="#/m/' + m.code + '/mock/model">Take MCQs ⏱️</a>' : "") +
          '<a class="btn small ghost" href="#/m/' + m.code + "/written/" + encodeURIComponent(p.written || "Model Paper 2026") + '">Written Q&amp;A (' + wl + ")</a></div></div>";
      }).join("") + '<div class="card lec-card"><span class="num">PRACTICE</span><h3>LMS sample question</h3><p>A longitudinal-study scenario (Type 2 diabetes) from the online exam platform – typed out with a model answer.</p><div class="actions" style="margin-top:4px"><a class="btn small ghost" href="#/m/' + m.code + '/written/' + encodeURIComponent("Sample Question (LMS practice)") + '">Try it</a></div></div></div>' +
      '<p class="note">Exam style so far: 2022 – 2024 papers were all written scenario questions. The 2026 model paper adds 25 MCQs plus written questions, so practise both.</p>';
  }

  /* ---------------- written practice ---------------- */
  function writtenPage(c, m, arg) {
    arg = arg ? decodeURIComponent(arg) : "all";
    var papers = []; D.written.forEach(function (w) { if (papers.indexOf(w.paper) < 0) papers.push(w.paper); });
    var list = arg === "all" ? D.written : D.written.filter(function (w) { return w.paper === arg; });
    var h = ttl("Written practice", "essay of the year", '<span class="chip">' + list.length + " questions</span>") + "<p class=\"muted\" style=\"max-width:70ch\">Open a question, write your own answer first (it’s saved on this device), then reveal the model answer and mark how you did.</p><div class=\"pillrow\">" +
      '<a class="pill' + (arg === "all" ? " active" : "") + '" style="text-decoration:none" href="#/m/' + m.code + '/written">All</a>' +
      papers.map(function (p) { return '<a class="pill' + (arg === p ? " active" : "") + '" style="text-decoration:none" href="#/m/' + m.code + "/written/" + encodeURIComponent(p) + '">' + esc(p) + "</a>"; }).join("") + "</div>";
    h += list.map(function (w, n) {
      var st = (S.wr[w.id] || {}).st;
      return '<details class="card wq" data-id="' + w.id + '"' + (list.length === 1 ? " open" : "") + '><summary><span class="chip">' + esc(w.paper) + "</span><b>" + esc(w.no) + " · " + esc(w.topic) + '</b><span class="muted" style="margin-left:auto">' + w.marks + " marks</span>" + (st === "ok" ? '<span class="chip ok">✓ got it</span>' : st === "rev" ? '<span class="chip">↻ revise</span>' : "") + "</summary>" +
        '<div class="body"><p>' + w.q + '</p><label class="muted" for="t-' + w.id + '" style="font-size:14px">Your answer (optional)</label><textarea id="t-' + w.id + '" placeholder="Type your answer here before peeking…">' + esc((S.wr[w.id] || {}).text || "") + '</textarea>' +
        '<div class="actions"><button class="btn small" data-act="show">Show model answer</button></div><div class="model" hidden>' + w.a + '<div class="actions"><button class="btn small" data-act="ok">✓ I got it</button><button class="btn small ghost" data-act="rev">↻ Need to revise</button></div></div></div></details>';
    }).join("");
    c.innerHTML = h;
    $$(".wq", c).forEach(function (d) {
      var id = d.getAttribute("data-id");
      $("textarea", d).addEventListener("input", function (e) { S.wr[id] = S.wr[id] || {}; S.wr[id].text = e.target.value; save(); });
      d.addEventListener("click", function (e) {
        var b = e.target.closest("[data-act]"); if (!b) return;
        var act = b.getAttribute("data-act"), mdl = $(".model", d);
        if (act === "show") { mdl.hidden = !mdl.hidden; b.textContent = mdl.hidden ? "Show model answer" : "Hide model answer"; }
        else { S.wr[id] = S.wr[id] || {}; S.wr[id].st = act; save(); var sm = $("summary", d); $$(".chip.ok,.chip:not(:first-child)", sm).forEach(function (x) { if (/got it|revise/.test(x.textContent)) x.remove(); }); sm.insertAdjacentHTML("beforeend", act === "ok" ? '<span class="chip ok">✓ got it</span>' : '<span class="chip">↻ revise</span>'); }
      });
    });
  }

  /* ---------------- flashcards ---------------- */
  function flashPage(c, m, arg) {
    var all = []; D.lectures.forEach(function (l) { l.terms.forEach(function (t, k) { all.push({ lec: l.id, key: l.id + "-" + k, t: t[0], d: t[1] }); }); });
    var sel = arg && arg !== "all" ? +arg : 0;
    var deck = sel ? all.filter(function (x) { return x.lec === sel; }) : all.slice();
    var i = 0, flip = false;
    var h = ttl("Flashcards", "spell cards", '<span class="chip">' + deck.length + " cards</span>") + '<div class="pillrow"><a class="pill' + (!sel ? " active" : "") + '" style="text-decoration:none" href="#/m/' + m.code + '/flash">All lectures</a>' +
      D.lectures.map(function (l) { return '<a class="pill' + (sel === l.id ? " active" : "") + '" style="text-decoration:none" href="#/m/' + m.code + "/flash/" + l.id + '">L' + l.id + "</a>"; }).join("") + '</div><div id="fbox"></div>';
    c.innerHTML = h;
    function draw() {
      var cd = deck[i], known = deck.filter(function (x) { return S.fl[x.key]; }).length;
      $("#fbox").innerHTML = '<p class="muted" style="text-align:center">Card ' + (i + 1) + " of " + deck.length + " · " + known + ' marked “got it”</p><div class="flash-wrap"><div class="flash' + (flip ? " flip" : "") + '" id="fl" tabindex="0" role="button" aria-label="Flip card"><div class="face front"><small>Term · Lecture ' + cd.lec + "</small>" + esc(cd.t) + '</div><div class="face back"><small>Meaning</small>' + esc(cd.d) + "</div></div></div>" +
        '<div class="actions" style="justify-content:center"><button class="btn ghost small" id="fp">← Back</button><button class="btn ghost small" id="ff">Flip (space)</button><button class="btn ghost small" id="fs">↻ Still learning</button><button class="btn small" id="fk">✓ Got it</button><button class="btn ghost small" id="fn">Next →</button><button class="btn ghost small" id="fsh">🔀 Shuffle</button></div>';
      $("#fl").addEventListener("click", function () { flip = !flip; $("#fl").classList.toggle("flip", flip); });
      $("#fp").addEventListener("click", function () { i = (i - 1 + deck.length) % deck.length; flip = false; draw(); });
      $("#fn").addEventListener("click", next);
      $("#ff").addEventListener("click", function () { flip = !flip; $("#fl").classList.toggle("flip", flip); });
      $("#fk").addEventListener("click", function () { S.fl[cd.key] = 1; save(); next(); });
      $("#fs").addEventListener("click", function () { delete S.fl[cd.key]; save(); next(); });
      $("#fsh").addEventListener("click", function () { deck = shuffle(deck); i = 0; flip = false; draw(); });
    }
    function next() { i = (i + 1) % deck.length; flip = false; draw(); }
    function key(e) {
      if (e.target.tagName === "TEXTAREA") return;
      if (e.key === " ") { e.preventDefault(); flip = !flip; var f = $("#fl"); if (f) f.classList.toggle("flip", flip); }
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") { i = (i - 1 + deck.length) % deck.length; flip = false; draw(); }
    }
    document.addEventListener("keydown", key); cleanup.push(function () { document.removeEventListener("keydown", key); });
    draw();
  }

  /* ---------------- cheat sheet ---------------- */
  function cheatPage(c) {
    c.innerHTML = ttl("Cheat sheet", "the marauder’s notes", '<button class="btn ghost small no-print" onclick="window.print()">🖨️ Print</button>') + '<p class="muted">The things worth remembering, on one page.</p><div class="grid cheats">' +
      D.cheatsheet.map(function (s) { return '<div class="card"><h3>' + s.title + "</h3>" + s.html + "</div>"; }).join("") + "</div>";
  }

  render();
})();
