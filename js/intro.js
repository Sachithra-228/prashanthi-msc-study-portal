/* Welcome sequence: a "Lumos" light reveal of the welcome image, sparks swirling from the wand,
   a welcome line, then a golden flash that hands over to the portal. No dependencies. */
(function () {
  "use strict";
  var IMG = "img/intro.webp", IW = 1672, IH = 941;
  var TX = 565 / IW, TY = 350 / IH;            /* wand tip, as a fraction of the image */
  var AUTO_MS = 8200;                           /* auto-enter time if she does nothing */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function shouldRun() {
    if (reduce) return false;
    if (/[?&]intro=1/.test(location.search)) return true;
    if (location.hash.replace(/^#\/?/, "")) return false;   /* deep link straight into a module */
    try { return !sessionStorage.getItem("psp.intro"); } catch (e) { return true; }
  }

  function run(done) {
    done = done || function () {};
    try { sessionStorage.setItem("psp.intro", "1"); } catch (e) { /* ignore */ }
    var el = document.createElement("div");
    el.id = "intro";
    el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-label", "Welcome");
    el.innerHTML =
      '<div class="intro-bg"></div>' +
      '<div class="intro-stage"><img class="intro-img" alt="Welcome: a witch in Gryffindor robes casting a spell with a glowing wand in front of Hogwarts castle"></div>' +
      '<div class="intro-shade"></div><canvas class="intro-fx" aria-hidden="true"></canvas>' +
      '<p class="intro-lumos" aria-hidden="true">Lumos</p>' +
      '<div class="intro-text"><p class="intro-welcome">Welcome, Prashanthi</p><p class="intro-sub">Your study portal is ready</p>' +
      '<button type="button" class="btn intro-enter">Enter the portal</button></div>' +
      '<button type="button" class="intro-skip">Skip</button><div class="intro-flash"></div>';
    document.body.appendChild(el);
    document.body.classList.add("intro-on");

    var stage = el.querySelector(".intro-stage"), img = el.querySelector(".intro-img"), bg = el.querySelector(".intro-bg");
    var canvas = el.querySelector(".intro-fx"), ctx = canvas.getContext("2d"), flash = el.querySelector(".intro-flash");
    var finished = false, started = false, raf = 0, t0 = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var vw = 0, vh = 0, tip = { x: 0, y: 0 }, sw = 0, sh = 0, maxR = 0, small = false, panMode = false, lastT = 0;
    var sparks = [], specks = [], didBurst = false, shown = { welcome: false, enter: false };

    function layout() {
      vw = window.innerWidth; vh = window.innerHeight; small = vw < 700;
      var scale = Math.max(vw / IW, vh / IH);
      sw = IW * scale; sh = IH * scale;
      panMode = vw / vh < 1 && sw > vw + 2;   /* phones in portrait: start on the wand, pan across to her face */
      var top = (vh - sh) / 2;
      stage.style.cssText = "top:" + top + "px;width:" + sw + "px;height:" + sh + "px;transform-origin:" + TX * 100 + "% " + TY * 100 + "%";
      tip.y = top + sh * TY; place(lastT);
      var cx = sw * TX, cy = sh * TY;
      maxR = Math.max(Math.hypot(cx, cy), Math.hypot(sw - cx, cy), Math.hypot(cx, sh - cy), Math.hypot(sw - cx, sh - cy)) + 180;
      canvas.width = vw * dpr; canvas.height = vh * dpr; canvas.style.width = vw + "px"; canvas.style.height = vh + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      setFlash();
    }
    function clampL(v) { return Math.min(0, Math.max(vw - sw, v)); }
    function place(t) {
      lastT = t;
      var left = (vw - sw) / 2;
      if (panMode) { var a = clampL(vw / 2 - sw * TX), b = clampL(vw / 2 - sw * 0.55); left = a + (b - a) * ease((t - 500) / 6400); }
      stage.style.left = left + "px"; tip.x = left + sw * TX;
    }
    function setFlash() { flash.style.background = "radial-gradient(circle at " + tip.x + "px " + tip.y + "px, #fff6cf 0, #f2c95c 30%, rgba(242,201,92,0) 68%)"; }
    function setMask(r) {
      var cx = sw * TX, cy = sh * TY;
      var m = r >= maxR ? "none" : "radial-gradient(circle at " + cx + "px " + cy + "px, #000 " + r + "px, transparent " + (r + 170) + "px)";
      stage.style.webkitMaskImage = m; stage.style.maskImage = m;
    }
    function ease(x) { x = Math.min(1, Math.max(0, x)); return 1 - Math.pow(1 - x, 3); }

    function burst() {
      var n = small ? 90 : 160;
      for (var i = 0; i < n; i++) {
        var a = Math.random() * Math.PI * 2, s = (Math.random() * 5 + 1.5) * (vw / 1400 + .5);
        sparks.push({ k: "b", x: tip.x, y: tip.y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, age: 0, life: 50 + Math.random() * 60, size: 1 + Math.random() * 2.6 });
      }
    }
    function emit(t) {
      var per = small ? 2 : 3, u = Math.min(vw, vh) / 900 + .35;
      for (var i = 0; i < per; i++) {
        sparks.push({ k: "s", a0: t * 0.011 + Math.random() * .7, age: 0, life: 85 + Math.random() * 70, spin: .045 + Math.random() * .02, rs: (1.1 + Math.random() * .9) * u, size: 1 + Math.random() * 2.4 });
      }
    }
    function initSpecks() {
      var n = small ? 36 : 70;
      for (var i = 0; i < n; i++) specks.push({ x: Math.random() * vw, y: Math.random() * vh, vy: .12 + Math.random() * .4, r: .6 + Math.random() * 1.8, ph: Math.random() * 6.28, sp: .01 + Math.random() * .03 });
    }
    function dot(x, y, r, a, warm) {
      ctx.fillStyle = "rgba(255," + (warm ? 206 : 235) + "," + (warm ? 112 : 190) + "," + a * .25 + ")";
      ctx.beginPath(); ctx.arc(x, y, r * 3.2, 0, 6.2832); ctx.fill();
      ctx.fillStyle = "rgba(255,244,205," + a + ")";
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
    }

    function frame(now) {
      if (finished) return;
      var t = now - t0;
      place(t);
      setMask(ease((t - 250) / 2600) * maxR);
      if (t > 250 && !didBurst) { didBurst = true; burst(); }
      if (t > 450 && t < AUTO_MS - 900) emit(t);
      if (t > 2300 && !shown.welcome) { shown.welcome = true; el.classList.add("show-welcome"); }
      if (t > 3700 && !shown.enter) { shown.enter = true; el.classList.add("show-enter"); var b = el.querySelector(".intro-enter"); if (b) b.focus({ preventScroll: true }); }
      if (t > AUTO_MS) { finish(); return; }

      ctx.clearRect(0, 0, vw, vh);
      ctx.globalCompositeOperation = "lighter";
      var fadeIn = Math.min(1, t / 1200);
      for (var i = 0; i < specks.length; i++) {
        var s = specks[i]; s.y -= s.vy; s.ph += s.sp; if (s.y < -4) { s.y = vh + 4; s.x = Math.random() * vw; }
        dot(s.x, s.y, s.r, (.25 + .35 * Math.sin(s.ph)) * fadeIn, false);
      }
      for (var j = sparks.length - 1; j >= 0; j--) {
        var p = sparks[j]; p.age++;
        if (p.age > p.life) { sparks.splice(j, 1); continue; }
        var al = 1 - p.age / p.life, x, y;
        if (p.k === "b") { p.vx *= .965; p.vy = p.vy * .965 + .02; p.x += p.vx; p.y += p.vy; x = p.x; y = p.y; }
        else { var th = p.a0 + p.age * p.spin, r = p.age * p.rs; x = tip.x + Math.cos(th) * r; y = tip.y + Math.sin(th) * r * .75 - p.age * .12; }
        dot(x, y, p.size * (.5 + al * .7), al, true);
      }
      /* steady glow at the wand tip */
      var g = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, 60 * (vw / 1400 + .5));
      g.addColorStop(0, "rgba(255,240,190," + .55 * Math.min(1, t / 900) + ")"); g.addColorStop(1, "rgba(255,200,90,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(tip.x, tip.y, 60 * (vw / 1400 + .5), 0, 6.2832); ctx.fill();
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(frame);
    }

    function cleanupListeners() { window.removeEventListener("resize", onResize); document.removeEventListener("keydown", onKey); }
    function onResize() { layout(); if (finished) return; }
    function onKey(e) { if (e.key === "Escape" || (e.key === "Enter" && shown.enter)) finish(); }
    function finish() {
      if (finished) return; finished = true; cancelAnimationFrame(raf); cleanupListeners();
      setFlash(); el.classList.add("leaving");
      setTimeout(function () { done(); }, 520);                         /* portal starts to appear under the flash */
      setTimeout(function () { el.remove(); document.body.classList.remove("intro-on"); }, 1300);
    }

    function start() {
      if (started) return; started = true;
      img.src = IMG; bg.style.backgroundImage = "url(" + IMG + ")";
      layout(); initSpecks(); setMask(0);
      window.addEventListener("resize", onResize); document.addEventListener("keydown", onKey);
      el.classList.add("ready");
      t0 = performance.now(); raf = requestAnimationFrame(frame);
    }
    el.querySelector(".intro-skip").addEventListener("click", finish);
    el.querySelector(".intro-enter").addEventListener("click", finish);
    el.addEventListener("click", function (e) { if (!e.target.closest("button")) finish(); });

    var loader = new Image();
    loader.onload = start;
    loader.onerror = function () { finished = true; el.remove(); document.body.classList.remove("intro-on"); done(); };
    loader.src = IMG;
    setTimeout(function () { if (!started && !finished) { finished = true; el.remove(); document.body.classList.remove("intro-on"); done(); } }, 5000);
  }

  window.PSPIntro = { shouldRun: shouldRun, run: run };
})();
