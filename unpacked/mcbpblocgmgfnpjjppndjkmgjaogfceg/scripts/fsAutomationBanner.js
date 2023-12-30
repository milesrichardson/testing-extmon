/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
(function () {
  function e() {
    let b;
    for (; (b = document.getElementById("__FireShotAutomationBanner")); ) document.body.removeChild(b);
    document.body.insertAdjacentHTML(
      "afterbegin",
      "<div id='__FireShotAutomationBanner'>\n        <div id='__FireShotAutomation_DivProgress'><b><span rel='automation_banner_locale_string_1'>FireShot batch mode</span>:</b> <span rel='automation_banner_locale_string_2'>capturing Page</span> <span id='__FireShotAutomation_Progress'></span> <span rel='automation_banner_locale_string_6'>of</span> <span id='__FireShotAutomation_Total'></span>...</div>\n        <div id='__FireShotAutomation_DivDelay'><b><span rel='automation_banner_locale_string_1'>FireShot batch mode</span>:</b> <span rel='automation_banner_locale_string_3'>waiting the page to get rendered...</span> [<span id='__FireShotAutomation_SecondsLeft'></span>]</div>\n        \n        <div id=\"buttons\">\n            <button id='__FireShotAutomation_NextBtn' role='button'><span rel='automation_banner_locale_string_4'>Next page</span></button>\n            <button id='__FireShotAutomation_AbortBtn' role='button'><span rel='automation_banner_locale_string_5'>Abort task</span></button>\n        </div>\n        </div>"
    );
    document.getElementById("__FireShotAutomationBanner").__fireshotIgnoredElement = 1;
  }
  function f() {
    var b = document.getElementById("__FireShotAutomationBanner");
    document.addEventListener(
      "scroll",
      ((a) => {
        let c;
        return (...g) => {
          c && cancelAnimationFrame(c);
          c = requestAnimationFrame(() => {
            a(...g);
          });
        };
      })(() => {
        b.style.display = 0 < window.scrollY ? "flex" : "none";
      }),
      { passive: !0 }
    );
    document.getElementById("__FireShotAutomation_AbortBtn").addEventListener("click", () => {
      d && d.postMessage({ topic: "abort" });
    });
    document.getElementById("__FireShotAutomation_NextBtn").addEventListener("click", () => {
      d && d.postMessage({ topic: "next" });
    });
  }
  function h(b) {
    for (const a in b)
      document.querySelectorAll(`span[rel='${a}']`).forEach((c) => {
        c.textContent = b[a];
      });
  }
  function k() {
    console.log(chrome.runtime);
    chrome.runtime.onConnect.addListener((b) => {
      "fsAutomationPort" === b.name &&
        ((d = b),
        b.onMessage.addListener((a) => {
          switch (a.topic) {
            case "set-progress":
              var c = a.progress;
              a = a.total;
              document.getElementById("__FireShotAutomation_Progress").textContent = c;
              document.getElementById("__FireShotAutomation_Total").textContent = a;
              document.getElementById("__FireShotAutomation_DivDelay").style.display = "none";
              document.getElementById("__FireShotAutomation_DivProgress").style.display = "initial";
              break;
            case "delay-info":
              c = a.secsLeft;
              document.getElementById("__FireShotAutomation_DivProgress").style.display = "none";
              document.getElementById("__FireShotAutomation_DivDelay").style.display = "initial";
              document.getElementById("__FireShotAutomation_SecondsLeft").textContent = c;
              break;
            case "set-visible":
              c = a.visible;
              document.getElementById("__FireShotAutomationBanner").style.display = c ? "flex" : "none";
              break;
            case "set-locale-strings":
              h(a.localeStrings);
          }
        }));
    });
  }
  var d;
  document.body && (e(), f(), k());
})();
