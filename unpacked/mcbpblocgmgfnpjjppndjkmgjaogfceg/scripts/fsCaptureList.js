/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
document.addEventListener("DOMContentLoaded", () => {
  function a(b) {
    return document.getElementById(b);
  }
  async function k() {
    const b = JSON.parse(await e.getOption(cBatchModePrefs, "{}"));
    for (let c in b)
      try {
        const d = a(c);
        "INPUT" === d.tagName && "checkbox" === d.type
          ? (d.checked = b[c])
          : (d.value = "TEXTAREA" === d.tagName ? ("" === b[c].trim() ? "" : b[c].trim() + "\n") : b[c]);
      } catch (d) {
        console.error(`Error for key=${c}: ${d.message}`);
      }
    void 0 === b.prefBatchURLs && (a("prefBatchURLs").value = "amazon.com\nyoutube.com/gaming\ngetfireshot.com/buy.php\n");
  }
  function h() {
    let b = {};
    document
      .querySelectorAll("textarea, input[type='hidden'], input[type='checkbox'], select")
      .forEach((c) => (b[c.id] = "checkbox" === c.type ? c.checked : c.value));
    return b;
  }
  async function l(b) {
    let c = {};
    document
      .querySelectorAll("textarea, input[type='hidden'], input[type='checkbox'], select")
      .forEach((d) => (c[d.id] = "checkbox" === d.type ? d.checked : d.value));
    await e.setOption(cBatchModePrefs, JSON.stringify(b));
    return c;
  }
  function m() {
    a("btnStart").addEventListener("click", () => {
      const b = { permissions: ["tabs", "downloads"], origins: ["<all_urls>"] };
      addPermissions(
        b,
        async () => {
          window.close();
          await e.captureList(h());
        },
        async () => await e.openPermissionsPage(b)
      );
    });
    a("advanced").addEventListener("click", () => {
      a("prefBatchAdvancedFeaturesShown").checked = !a("prefBatchAdvancedFeaturesShown").checked;
      f();
    });
    a("btnConfigurePDF").addEventListener("click", () => {
      openURL("fsPDFSettings.html?close=1");
      window.close();
    });
    a("prefBatchURLs").addEventListener("input", f);
    a("prefBatchMode").addEventListener("change", f);
    a("prefBatchFormat").addEventListener("change", f);
    document.querySelectorAll("[rel=command]").forEach((b) =>
      b.addEventListener("click", async (c) => {
        switch (c.target.id) {
          case "lnkTryPro":
            await e.installPro(), window.close();
        }
      })
    );
    window.addEventListener("unload", async () => await l(h()));
  }
  function f() {
    g || ((a("modeEntire").disabled = !0), (a("prefBatchMode").value = "visible"), (a("liteWarning").style.display = "block"));
    a("prefBatchAdvancedFeaturesShown").checked ? a("advanced").classList.add("active") : a("advanced").classList.remove("active");
    const b = a("prefBatchURLs"),
      c = b.value
        .trim()
        .split("\n")
        .filter((d) => 0 < d.trim().length).length;
    b.scrollWidth > b.clientWidth ? a("totalValue").classList.add("shiftedY") : a("totalValue").classList.remove("shiftedY");
    a("totalURLs").textContent = c;
    a("btnStart").disabled = 0 === c;
    10 < c
      ? ((a("left").style["min-height"] = "230px"), (a("sleepModeWarning").style.display = "flex"))
      : ((a("left").style["min-height"] = ""), (a("sleepModeWarning").style.display = "none"));
    a("prefBatchScrollSpeed").disabled = "visible" === a("prefBatchMode").value;
    a("btnConfigurePDF").style.display = g && "pdf" === a("prefBatchFormat").value ? "block" : "none";
  }
  let g;
  const e = getBackgroundPage();
  try {
    i18nPrepare();
  } catch (b) {
    logError(b.message);
  }
  (async function () {
    g = await e.isProMode();
    let b = a("prefBatchURLs");
    b.placeholder = b.placeholder.replace(/\\n/g, "\n");
    isFirefox() && document.querySelectorAll("input, select").forEach((c) => c.classList.add("fxPaddingDisabled"));
    await k();
    m();
    f();
  })();
});
