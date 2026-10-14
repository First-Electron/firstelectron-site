(function () {
  "use strict";

  // English copy. Korean is the default text already in index.html.
  var EN = {
    "nav.strengths": "Strengths",
    "nav.process": "Process",
    "nav.products": "Products",
    "nav.factories": "Factories",
    "nav.contact": "Contact",

    "hero.title": "We connect you with proven overseas PCB factories",
    "hero.sub": "A PCB trading and sourcing agent since 2011. From choosing the factory to delivery and quality control, First Electron handles it.",
    "hero.cta1": "Request a quote",
    "hero.cta2": "See products and specs",
    "hero.cap": "Example cross-section of a 4-layer PCB",

    "facts.1.l": "Founded",
    "facts.1.v": "2011",
    "facts.2.l": "Focus",
    "facts.2.v": "Bare PCB",
    "facts.3.l": "Range",
    "facts.3.v": "1 to 30 layers, HDI",
    "facts.4.l": "Typical lead time",
    "facts.4.v": "2 to 4 weeks (samples 2 to 3)",

    "about.title": "Who we work with",
    "about.lead": "First Electron introduces the right overseas factory for each customer and supports smooth PCB supply. We only deal with factories proven on delivery, quality, and cost.",
    "about.1": "Customers who want to lower cost with more competitive PCB pricing",
    "about.2": "Customers looking for overseas PCB factories with proven quality",
    "about.3": "Customers who struggle with delivery when buying from overseas factories",
    "about.4": "Customers who need smooth communication and quick response from overseas manufacturers",

    "str.title": "Our strengths",
    "str.1.t": "Better terms",
    "str.1.d": "We work with several partners that deliver low price, high quality, and on-time delivery together. Years of trust and trading history let us cut cost more effectively.",
    "str.2.t": "Staff on the ground",
    "str.2.d": "Our staff in China talk to the factories directly, so we respond quickly when problems come up. We also develop new suppliers that fit a customer's product needs.",
    "str.3.t": "Service",
    "str.3.d": "Our goal is zero defects. On top of the factory's own inspection, we re-inspect shipped goods at our own inspection site when needed, to keep defects down.",

    "proc.title": "How it works",
    "proc.lead": "From order to delivery. Defect response and document translation are part of it too.",
    "proc.1.t": "Order and specs",
    "proc.1.d": "We receive your specifications and data.",
    "proc.2.t": "Review of specs, data, and technology",
    "proc.2.d": "We check manufacturability and translate the documents the factory needs.",
    "proc.3.t": "Price and lead time",
    "proc.3.d": "We negotiate and manage price and lead time with the partner factory.",
    "proc.4.t": "Production and quality",
    "proc.4.d": "We track work in progress (WIP) and quality at the overseas factory, and handle defect issues.",
    "proc.5.t": "Shipping and re-inspection",
    "proc.5.d": "When needed, we run a second inspection and acceptance check at our own inspection site.",
    "proc.6.t": "Delivery",
    "proc.6.d": "We deliver to you on the agreed date.",

    "prod.title": "Products and capabilities",
    "prod.lead": "What our partner factories make. We focus on bare PCB.",
    "p1.n": "Double-sided PCB",
    "p1.d": "The basic structure, with circuits on both sides of the board.",
    "p2.n": "Multilayer PCB",
    "p2.d": "Stacked circuit layers allow denser wiring, up to 30 layers.",
    "p3.n": "HDI",
    "p3.d": "Micro vias of 0.075mm and 0.1mm, and high-density boards with line and space of 50 to 75 micrometers, in volume production.",
    "p4.n": "FPCB",
    "p4.d": "A flexible board that bends.",
    "p5.n": "Rigid-Flex",
    "p5.d": "Rigid and flexible boards combined into one structure.",
    "p6.n": "IC substrate",
    "p6.d": "Carries a semiconductor chip and connects it to the mainboard.",
    "p7.n": "Metal-base PCB",
    "p7.d": "Aluminum, copper, and iron base boards, and thermal-electric separation structures, for products that need to move heat out fast.",

    "caps.title": "Capabilities (partner factories)",
    "caps.1.l": "Layers",
    "caps.1.v": "1 layer to multilayer (up to 30), HDI",
    "caps.2.l": "Product types",
    "caps.2.v": "Aluminum, copper, iron base, thermal-electric separation",
    "caps.3.l": "Finished thickness",
    "caps.4.l": "Copper thickness",
    "caps.4.v": "Up to 20 oz",
    "caps.5.l": "Solder mask colors",
    "caps.6.l": "Surface finish",
    "caps.note": "Figures are for our partner factories and vary by product and factory. Ask us for exact specifications.",

    "samp.title": "Example specifications",
    "samp.lead": "Typical specs of boards made at our partner factories.",
    "s1.t": "12-layer security control board",
    "s1.d": "FR4, 2.0mm thick, 1oz copper, min hole 0.2mm, line and space 0.1/0.1mm, ENIG finish",
    "s2.t": "4-layer AI home RF module",
    "s2.d": "FR4, 1.0mm thick, 1oz copper, min hole 0.1mm, matte black solder mask, half PTH slot, ENIG finish",
    "s3.t": "8-layer automotive cable board",
    "s3.d": "FR4 Tg170, 3.2mm thick, 3oz copper on inner and outer layers, 60 micrometers hole copper, Immersion Tin finish",
    "s4.t": "28-layer semiconductor board",
    "s4.d": "FR4 Tg170, 3.2mm thick, 2oz copper, layer registration ±0.1mm, press-fit tolerance ±0.05mm, ENIG finish",
    "s5.t": "6-layer communication module",
    "s5.d": "FR4 Tg170, 1.6mm thick, 1oz copper, Immersion Gold and OSP finish",
    "s6.t": "1-layer aluminum base (respirator)",
    "s6.d": "Aluminum base, 1.6mm thick, 1oz copper, min hole 0.2mm, Hard Gold and ENIG finish",

    "fac.title": "Partner factories",
    "fac.lead": "We work with factories that pass these three criteria.",
    "fac.1.d": "We check that management, production, and R&D staffing are well balanced, and that the business and finances are sound.",
    "fac.2.d": "We check for losses caused by chasing the lowest cost, whether the right materials are used, and how much of the process is outsourced.",
    "fac.3.d": "We check whether they understand and accept differences between Korea and China (terms, processes, finish quality), how they take responsibility and respond to defects, and whether they follow what we ask.",
    "fx.1.l": "Trading history",
    "fx.1.v": "From 1 year to over 10 years",
    "fx.2.l": "Factory size",
    "fx.2.v": "About 500 staff on average",
    "fx.3.l": "Main locations",
    "fx.3.v": "Guangzhou, Hunan, and Jiangxi, China",
    "fx.4.l": "Typical lead time",
    "fx.4.v": "2 to 4 weeks (samples 2 to 3)",
    "gal.title": "Partner factory equipment",

    "ind.title": "Industries",
    "ind.lead": "We handle PCBs for automotive, 5G and telecom, medical devices, LED, and more.",

    "bb.title": "New business: drilling backup boards",
    "bb.lead": "We also supply the backup boards used under PCBs during drilling.",
    "bb.h1": "Product",
    "bb.h2": "Thickness",
    "bb.h3": "Applications",
    "bb.1.n": "Cold punching board (orange)",
    "bb.1.d": "Small holes under 0.2mm, thick-copper PCBs, FPC, IC drilling / high-performance telecom backplanes, metal-base boards",
    "bb.2.n": "Coffee phenolic board (black to dark brown)",
    "bb.2.d": "Metal-base boards, high-performance telecom backplanes, high-performance HDI",
    "bb.3.n": "White backup board (melamine, HWV)",
    "bb.3.d": "HDI, automotive boards, 5G telecom boards",
    "bb.note": "Standard sizes are 37×49, 41×49, and 43×49 inches (40×48 inches for cold punching board), with ±2mm tolerance. Ask us for details.",

    "contact.title": "Quotes and inquiries",
    "contact.addr.l": "Gumi office",
    "contact.addr.v": "396-5 Songseon-ro, Gumi-si, Gyeongsangbuk-do, Korea",
    "contact.map": "View on map",
    "contact.tel.l": "Phone",
    "contact.hours.l": "Hours",
    "contact.hours.v": "Weekdays, 9:00 to 18:00 (KST)",
    "contact.mail.l": "Email",
    "contact.insp.l": "Inspection site",
    "contact.insp.v": "Ansan",

    "f.name": "Name",
    "f.company": "Company",
    "f.email": "Your email",
    "f.msg": "Message",
    "f.msg.ph": "Tell us the PCB type, quantity, and lead time you need.",
    "f.submit": "Compose email",
    "f.note": "Your email app opens with this message filled in.",

    "foot.addr": "396-5 Songseon-ro, Gumi-si, Gyeongsangbuk-do, Korea",
    "foot.copy": "© First Electron. All rights reserved.",
    "foot.top": "Back to top"
  };

  var TO = "harrylee@firstelectron.co.kr";
  var root = document.documentElement;
  var textEls = document.querySelectorAll("[data-i18n]");
  var phEls = document.querySelectorAll("[data-i18n-ph]");
  var buttons = document.querySelectorAll("[data-lang]");
  var lang = "ko";

  // Remember the Korean source text so we can switch back.
  Array.prototype.forEach.call(textEls, function (el) { el.setAttribute("data-ko", el.textContent); });
  Array.prototype.forEach.call(phEls, function (el) { el.setAttribute("data-ko-ph", el.getAttribute("placeholder") || ""); });

  var TITLE = {
    ko: "First Electron | PCB 전문 무역·중개 에이전트",
    en: "First Electron | PCB trading and sourcing agent"
  };

  function setLang(next) {
    lang = next === "en" ? "en" : "ko";
    root.setAttribute("lang", lang);
    Array.prototype.forEach.call(textEls, function (el) {
      var key = el.getAttribute("data-i18n");
      el.textContent = lang === "en" && EN[key] ? EN[key] : el.getAttribute("data-ko");
    });
    Array.prototype.forEach.call(phEls, function (el) {
      var key = el.getAttribute("data-i18n-ph");
      el.setAttribute("placeholder", lang === "en" && EN[key] ? EN[key] : el.getAttribute("data-ko-ph"));
    });
    Array.prototype.forEach.call(buttons, function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    document.title = TITLE[lang];
    try { localStorage.setItem("fe-lang", lang); } catch (e) { /* storage may be blocked */ }
  }

  Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  // Start language: ?lang=en, then saved choice, then Korean.
  var start = "ko";
  try {
    var q = new URLSearchParams(window.location.search).get("lang");
    var saved = localStorage.getItem("fe-lang");
    start = q || saved || "ko";
  } catch (e) { /* ignore */ }
  if (start === "en") setLang("en");

  // Inquiry form: open the visitor's email app with the text filled in.
  var form = document.getElementById("inquiry");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var f = form.elements;
      var who = f.company.value.trim() || f.name.value.trim();
      var subject = (lang === "en" ? "[Website inquiry] " : "[홈페이지 문의] ") + who;
      var labels = lang === "en"
        ? { n: "Name", c: "Company", e: "Email", m: "Message" }
        : { n: "이름", c: "회사명", e: "회신 이메일", m: "문의 내용" };
      var body = [
        labels.n + ": " + f.name.value.trim(),
        labels.c + ": " + f.company.value.trim(),
        labels.e + ": " + f.email.value.trim(),
        "",
        labels.m + ":",
        f.message.value.trim()
      ].join("\n");
      window.location.href = "mailto:" + TO +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();
