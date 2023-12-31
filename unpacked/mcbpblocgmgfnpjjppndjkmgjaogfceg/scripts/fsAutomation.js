/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var fsAutomation = function () {
  function r(a) {
    return new Promise((b) => {
      chrome.tabs.create(a, b);
    });
  }
  function k(a, b) {
    try {
      a && a.postMessage(b);
    } catch (d) {}
  }
  function q(a, b) {
    return new Promise((d, c) => {
      chrome.tabs.update(a, {}, (f) => {
        f
          ? chrome.tabs.executeScript(a, b, (e) => {
              chrome.runtime.lastError ? c({ message: chrome.runtime.lastError, abort: !1 }) : d(e);
            })
          : c({ message: "Error: the tab does not exist", abort: !0 });
      });
    });
  }
  function t(a) {
    return new Promise((b) => {
      isSafari()
        ? chrome.tabs.update(a.id, { active: !0, highlighted: !0 }, b)
        : chrome.tabs.highlight({ windowId: a.windowId, tabs: a.index }, b);
    });
  }
  async function u(a, b) {
    let d;
    try {
      const c = await Promise.race([
        new Promise((f) => {
          d = setInterval(() => {
            currentState.contains(STATE_BATCH)
              ? chrome.tabs.update(a, {}, (e) => {
                  if (chrome.runtime.lastError || !e) getConsolePtr()("Closed main tab detected"), f("error_closed");
                })
              : (getConsolePtr()("Abort detected"), f("error_aborted"));
          }, 200);
        }),
        b
      ]);
      clearInterval(d);
      return c;
    } catch (c) {
      return console.error(c.message), clearInterval(d), "error_aborted";
    }
  }
  function v(a, b) {
    return u(
      a,
      new Promise((d) => {
        let c = !1;
        chrome.tabs.update(a, { url: b }, (f) => {
          f || d(!1);
          const e = (m, w) => {
            if (a === m)
              switch (w.status) {
                case "complete":
                  getConsolePtr()(`${b} loaded.`);
                  clearTimeout(g);
                  chrome.tabs.onUpdated.removeListener(e);
                  d(!0);
                  break;
                case "loading":
                  c = !0;
              }
          };
          var g = setTimeout(() => {
            getConsolePtr()(`${b} timed out.`);
            chrome.tabs.onUpdated.removeListener(e);
            d(c);
          }, 1e3 * options.timeout);
          chrome.tabs.onUpdated.addListener(e);
        });
      })
    );
  }
  function x(a, b, d, c, f, e) {
    return new Promise((g) => {
      executeGrabber(
        b,
        d,
        { JSPlugin: !0, overrideSpeed: c, overrideFolder: f, tabId: a, contextId: e },
        () => {
          g();
        },
        !0
      );
    });
  }
  function y(a, b, d) {
    return new Promise((c, f) => {
      if (d) {
        b && (k(b, { topic: "delay-info", secsLeft: d }), k(b, { topic: "set-visible", visible: !0 }));
        var e = setInterval(() => {
          --d;
          q(a, {
            code: `if (!window.fsTitle) window.fsTitle = document.title; document.title = (${d} > 0 ? '[' + ${d} + '] ' : '') + window.fsTitle`
          })
            .then(() => {
              0 >= d || l || n
                ? (clearInterval(e), k(b, { topic: "set-visible", visible: !1 }), setTimeout(c, isSafari() ? 100 : 0))
                : k(b, { topic: "delay-info", secsLeft: d });
            })
            .catch((g) => f(g));
        }, 1e3);
      } else c();
    });
  }
  function z(a) {
    return new Promise((b, d) => {
      chrome.tabs.insertCSS(a, { file: "css/fsautomationbanner.css", cssOrigin: "author" }, () => {
        chrome.runtime.lastError && d({ message: chrome.runtime.lastError, abort: !1 });
      });
      q(a, { file: "scripts/fsAutomationBanner.js", runAt: "document_start" })
        .then(() => {
          let c = chrome.tabs.connect(a, { name: "fsAutomationPort" });
          c.onMessage.addListener((e) => {
            getConsolePtr()(e);
            switch (e.topic) {
              case "abort":
                l = !0;
                p && getExtension().stopCapturing(!0);
                break;
              case "next":
                (n = !0), p && getExtension().stopCapturing();
            }
          });
          let f = {};
          for (let e = 1; 6 >= e; ++e) {
            const g = `automation_banner_locale_string_${e}`;
            f[g] = chrome.i18n.getMessage(g);
          }
          k(c, { topic: "set-locale-strings", localeStrings: f });
          b(c);
        })
        .catch((c) => d(c));
    });
  }
  var h,
    l,
    n,
    p = !1;
  options = { timeout: 10, delay: 0 };
  return {
    grabPages: async function (a, b, d, c) {
      isDebug && console.time("automation");
      c && (options = c);
      h = await r({ url: "about:blank" });
      for (let f = 0; f < a.length && !l && currentState.contains(STATE_BATCH); ++f) {
        let e;
        const g = await v(h.id, a[f]);
        if ("error_closed" === g || "error_aborted" === g) break;
        else if (!g) continue;
        await t(h);
        p = n = !1;
        try {
          (e = await z(h.id)), await y(h.id, e, options.delay);
        } catch (m) {
          if ((console.error(m.message), (e = null), m.abort)) {
            l = !0;
            break;
          }
        }
        l ||
          n ||
          (k(e, { topic: "set-progress", progress: f + 1, total: a.length }),
          (p = !0),
          await x(h.id, b, d, c.speed, c.subfolder, c.callbackContextId));
      }
      chrome.tabs.remove(h.id, () => {
        chrome.runtime.lastError;
      });
      isDebug && console.timeEnd("automation");
      getConsolePtr()("grabPages completed.");
      return !l;
    }
  };
};
