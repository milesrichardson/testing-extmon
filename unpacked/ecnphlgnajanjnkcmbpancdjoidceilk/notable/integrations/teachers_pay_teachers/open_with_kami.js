"use strict";
!(function () {
  async function t(t) {
    let e,
      n = (function (t) {
        const e = t.querySelector(".DownloadButton a");
        if (!e) throw new o("Could not find anchor in download button");
        const { href: n } = e;
        if (!n.length) throw new o("Blank download button href");
        return n;
      })(t);
    n = n.replace("FreeDownload", "Download");
    try {
      e = await fetch(n);
    } catch (t) {
      throw new o("Error fetching direct download link", { error: t, url: n });
    }
    const s = new URL(`${"https://web.kamihq.com"}/web/viewer.html`);
    s.searchParams.set("source", "tpt"), s.searchParams.set("file", e.url), window.open(s, "_blank");
  }
  function e(e) {
    const n = (function (t) {
      const e = document.createElement("button");
      (e.className = "tpt-open-with-kami-button"),
        t.closest(".ProductAccessModalRow") &&
          e.classList.add("ProductAccessModalRow__button", "ProductAccessModalRow__button--withMarginLeft", "less-margin");
      const n = document.createElement("span");
      (n.textContent = "Open with"), e.append(n);
      const o = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        s = document.createElementNS("http://www.w3.org/2000/svg", "image"),
        r = chrome.runtime.getURL("notable/integrations/teachers_pay_teachers/kami-logo-full-white.svg");
      s.setAttribute("href", r), o.append(s), e.append(o);
      const c = document.createElement("div");
      return (
        c.classList.add("kami-spinner"),
        (c.style.display = "none"),
        e.append(c),
        {
          element: e,
          setLoading: function (t) {
            t
              ? ((c.style.display = "block"), (n.style.display = "none"), (o.style.display = "none"), (e.disabled = !0))
              : ((c.style.display = "none"), (n.style.display = "initial"), (o.style.display = "initial"), (e.disabled = !1));
          },
          setError: function (t) {
            e.textContent = t;
          }
        }
      );
    })(e);
    (n.element.onclick = async () => {
      n.setLoading(!0);
      try {
        await t(e);
      } catch (t) {
        throw (t instanceof o && n.setError(`Error: ${t.eventUUID}`), t);
      }
      n.setLoading(!1), s.track("TPT: Open with Kami Clicked", { appName: "tpt" });
    }),
      e.insertAdjacentElement("afterend", n.element);
  }
  const n = (function () {
    function t(t, e) {
      if (!t) throw new o("watchKamiButtonRemoved - elementToWatch was null");
      new MutationObserver(function (t) {
        for (const n of t) for (const t of n.removedNodes) t instanceof Element && t.classList.contains("tpt-open-with-kami-button") && e();
      }).observe(t, { childList: !0, subtree: !0 });
    }
    return {
      tryInsertingKamiButton() {
        if (
          !(function () {
            const t = document.querySelectorAll(".FileTypeLayoutItem div");
            return 1 === t.length && "PDF" === t[0]?.textContent;
          })()
        )
          return;
        const n = document.querySelectorAll(".DownloadButton");
        for (const o of n) {
          const n = o.closest(".PriceBox__productAccessButton");
          n &&
            (e(n),
            t(n.parentElement, () => {
              e(n);
            }));
        }
      }
    };
  })();
  class o extends Error {
    constructor(t, e) {
      super(t + (e ? " - " + JSON.stringify(e) : "")), (this.eventUUID = s.track("TPT: " + t, { data: e, appName: "tpt" }));
    }
  }
  const s = (function () {
    const t = crypto.randomUUID();
    let e = null;
    return {
      track(n, o = {}) {
        const s = crypto.randomUUID(),
          r = o.data ?? {};
        return (
          (o.kamiUserId
            ? Promise.resolve(o.kamiUserId)
            : new Promise(function (t, n) {
                e
                  ? t(e)
                  : chrome.storage.sync.get(["notable.user"], (n) => {
                      const o = n?.["notable.user"]?.id;
                      "number" == typeof o ? ((e = o), t(o)) : t(null);
                    });
              })
          ).then((e) => {
            const c = { uuid: s, name: n, value: { ...r, app_name: o.appName, session_id: t, current_page_url: window.location.href } };
            e && (c.user_id = e),
              fetch("https://web.kamihq.com/api" + "/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(c)
              });
          }),
          s
        );
      }
    };
  })();
  n.tryInsertingKamiButton(),
    new MutationObserver(function (t) {
      for (const n of t)
        for (const t of n.addedNodes)
          if (t instanceof Element) {
            const n = t.querySelector(".ProductAccessModal");
            if (n && !n.querySelector(".tpt-open-with-kami-button")) {
              const t = n.querySelector(".DownloadButton")?.closest(".ProductAccessModalRow__button");
              t && e(t);
            }
          }
    }).observe(document.body, { childList: !0, subtree: !0 });
})();
