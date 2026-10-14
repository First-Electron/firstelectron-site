(function () {
  "use strict";

  // English copy. Korean is the default text already in index.html.
  var EN = {
    "nav.products": "Products",
    "nav.industries": "Industries",
    "nav.contact": "Contact",

    "hero.title": "First Electron is an agency specialized in PCB.",
    "hero.sub": "We put quality first, cut cost, and deliver on time.",
    "hero.cta1": "Request a quote",
    "hero.cta2": "See products",
    "hero.cap": "Example cross-section of a 4-layer PCB",

    "about.title": "We focus on PCB",
    "about.body": "First Electron is an agency that specializes in PCB. We match customers with the PCB they need on quality, cost, and delivery.",
    "v1.t": "Quality",
    "v1.d": "Quality comes first.",
    "v2.t": "Cost",
    "v2.d": "We cut unnecessary cost.",
    "v3.t": "Delivery",
    "v3.d": "We keep the schedule we promise.",
    "v4.t": "Customer satisfaction",
    "v4.d": "We measure our work by customer satisfaction.",

    "products.title": "Product range",
    "products.lead": "From double-sided boards to IC substrates.",
    "p1.n": "Double-sided PCB",
    "p1.d": "The basic structure, with circuits on both sides of the board.",
    "p2.n": "Multilayer PCB",
    "p2.d": "Stacked circuit layers allow denser wiring.",
    "p3.n": "Rigid-Flex",
    "p3.d": "Rigid and flexible boards combined into one.",
    "p4.n": "FPCB",
    "p4.d": "A flexible board that bends.",
    "p5.n": "IC substrate",
    "p5.d": "Carries a semiconductor chip and connects it to the mainboard.",
    "products.note": "Ask us about specifications and what we can support.",

    "industries.title": "Industries",
    "industries.lead": "Six fields where our products are used.",

    "contact.title": "Quotes and inquiries",
    "contact.addr.l": "Address",
    "contact.addr.v": "396-5 Songseon-ro, Gumi-si, Gyeongsangbuk-do, Korea",
    "contact.map": "View on map",
    "contact.hours.l": "Hours",
    "contact.hours.v": "Weekdays, 9:00 to 18:00 (KST)",
    "contact.mail.l": "Email",

    "f.name": "Name",
    "f.company": "Company",
    "f.email": "Your email",
    "f.msg": "Message",
    "f.msg.ph": "Tell us the PCB type, quantity, and lead time you need.",
    "f.submit": "Compose email",
    "f.note": "Your email app opens with this message filled in.",

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
    document.title = lang === "en" ? "First Electron | PCB agency" : "First Electron | PCB 전문 에이전시";
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
