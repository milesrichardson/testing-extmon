typeof browser < "u" && (chrome = browser),
  (() => {
    "use strict";
    var _ = {};
    const m = {
        advertising: "#CB55CD",
        site_analytics: "#5EBEDB",
        consent: "#556FCD",
        essential: "#FC9734",
        hosting: "#8459A5",
        customer_interaction: "#EF671E",
        unidentified: "#79859E",
        audio_video_player: "#4ECB4E",
        cdn: "#4ECBA1",
        comments: "#4EA1CB",
        email: "#4E4ECB",
        extensions: "#A14ECB",
        misc: "#CB4EA1",
        pornvertising: "#CB4E4E",
        social_media: "#CBA14E",
        telemetry: "#A1CB4E",
        other: "#D5DBE5"
      },
      P = { ...m, site_analytics: "#87D7EF", unidentified: "#DBDFE7" },
      h = [
        "advertising",
        "site_analytics",
        "consent",
        "essential",
        "hosting",
        "customer_interaction",
        "audio_video_player",
        "cdn",
        "comments",
        "email",
        "extensions",
        "misc",
        "pornvertising",
        "social_media",
        "telemetry",
        "unidentified",
        "other"
      ];
    function f(e) {
      return m[e] ? e : "unidentified";
    }
    function T(e) {
      return m[f(e)];
    }
    function B(e) {
      return P[f(e)];
    }
    function W(e = (t) => t) {
      return (t, i) => {
        const n = f(e(t)),
          r = f(e(i));
        return h.indexOf(n) - h.indexOf(r);
      };
    }
    function E(e) {
      const t = Math.PI / 180;
      return e * t;
    }
    function A(e) {
      const t = parseInt(e.substr(1, 2), 16),
        i = parseInt(e.substr(3, 2), 16),
        n = parseInt(e.substr(5, 2), 16),
        r = 0.2126 * t + 0.7152 * i + 0.0722 * n;
      return `rgb(${r}, ${r}, ${r})`;
    }
    function w(e, t, i, { useScale: n = !0, grayscale: r = !1 } = {}) {
      if (n && typeof window < "u") {
        const { canvas: a } = e;
        (a.style.width = t + "px"), (a.style.height = t + "px");
        const u = window.devicePixelRatio;
        (a.width = Math.floor(t * u)), (a.height = Math.floor(t * u)), e.scale(u, u);
      }
      const o = {};
      h.forEach((a) => (o[f(a)] = 0)), i.forEach((a) => (o[f(a)] += 1));
      const s = t / 2,
        c = 360 / i.length;
      e.lineWidth = Math.floor(t * 0.14) * 0.95;
      const d = t / 2 - e.lineWidth;
      (e.strokeStyle = "blue"), e.beginPath(), e.arc(s, s, Math.floor(d), 0, 2 * Math.PI), e.stroke(), (e.lineWidth = t * 0.14);
      let l = -90;
      for (const [a, u] of Object.entries(o))
        if (u > 0) {
          const C = l + u * c,
            b = B(a);
          (e.strokeStyle = r ? A(b) : b), e.beginPath(), e.arc(s, s, d, E(l), Math.min(E(C + 1), 2 * Math.PI)), e.stroke(), (l = C);
        }
    }
    function D(e, t, i) {
      let n;
      try {
        n = new OffscreenCanvas(e, e);
      } catch {
        (n = document.createElement("canvas")), (n.width = e), (n.height = e);
      }
      const r = n.getContext("2d");
      return w(r, e, t, { useScale: !1, ...i }), r.getImageData(0, 0, e, e);
    }
    const p = "wtm-popup-iframe-wrapper",
      M = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    function g() {
      [...document.querySelectorAll(`.${p}`)].forEach((e) => {
        e.parentElement.removeChild(e);
      });
    }
    function k(e) {
      [...document.querySelectorAll(`.${p}`)].forEach((t) => {
        t.style.height = `${e}px`;
      });
    }
    const y = (e) => e.offsetTop + (e.offsetParent && y(e.offsetParent));
    function R(e, t, i) {
      g();
      const n = document.createElement("div");
      if ((n.classList.add(p), M)) (n.style.width = window.innerWidth - 20 + "px"), (n.style.left = "10px");
      else {
        const o = e.getBoundingClientRect().left - 175 + 12;
        n.style.left = (o < 20 ? 20 : o) + "px";
      }
      n.style.top = y(e) + 25 + "px";
      const r = document.createElement("iframe");
      r.setAttribute("src", `${i}?domain=${t.domain}`), n.appendChild(r), document.body.appendChild(n);
    }
    function S(e, t) {
      const i = e.stats.length;
      if (i === 0) return null;
      const n = document.createElement("div");
      n.classList.add("wtm-tracker-wheel-container");
      const r = document.createElement("label");
      r.innerText = i;
      const o = document.createElement("canvas");
      o.classList.add("wtm-tracker-wheel");
      const s = o.getContext("2d");
      return (
        w(s, 16, e.stats),
        n.appendChild(o),
        n.appendChild(r),
        n.addEventListener("click", (c) => {
          c.preventDefault(), c.stopImmediatePropagation(), R(n, e, t);
        }),
        n
      );
    }
    function v(e) {
      const t = [
        ...window.document.querySelectorAll(
          "[data-hveid] div.yuRUbf > div > span > a, [data-hveid] div.yuRUbf > div > a, [data-hveid] div.xpd a.cz3goc, [data-hveid] > .xpd > div.kCrYT:first-child > a"
        )
      ].filter((i) => !i.dataset.wtm);
      if (t.length) {
        const i = t.map((r) => {
          if (r.hostname === window.location.hostname) {
            const o = new URL(r.href);
            return o.searchParams.get("url") || o.searchParams.get("q");
          }
          return r.href;
        });
        chrome.runtime.sendMessage({ action: "getWTMReport", links: i }, (r) => {
          if (chrome.runtime.lastError) {
            console.error("Could not retrieve WTM information on URLs", chrome.runtime.lastError);
            return;
          }
          t.forEach((o, s) => {
            const c = r.wtmStats[s];
            if (c)
              try {
                const d = S(c, e);
                if (!d) return;
                const l =
                  o.parentElement.querySelector(".B6fmyf") ||
                  o.parentElement.parentElement.querySelector(".B6fmyf") ||
                  o.querySelector("span.yIn8Od") ||
                  o.querySelector('div[role="link"]') ||
                  o.querySelector("div.UPmit.AP7Wnd");
                if (!l) return;
                let a = l.firstElementChild;
                a && a.textContent.includes(c.domain) ? l.insertBefore(d, a.nextElementSibling) : l.appendChild(d), (o.dataset.wtm = 1);
              } catch (d) {
                console.warn("Unexpected error while rendering the Tracker Preview wheel", d);
              }
          });
        });
        const n = new MutationObserver((r) => {
          r.some((o) => o.addedNodes.length) && (n.disconnect(), setTimeout(() => v(e), 500));
        });
        n.observe(document.body, { childList: !0, subtree: !0 });
      }
    }
    window.addEventListener("message", (e) => {
      if (!(e.origin + "/" !== chrome.runtime.getURL("/").toLowerCase() && typeof e.data == "string")) {
        if (e.data === "WTMReportClosePopups") g();
        else if (e.data === "WTMReportDisable")
          g(),
            [...document.querySelectorAll("[data-wtm]")].forEach((t) => {
              delete t.dataset.wtm;
            }),
            [...document.querySelectorAll(".wtm-tracker-wheel-container")].forEach((t) => {
              t.parentElement.removeChild(t);
            }),
            chrome.runtime.sendMessage({ action: "disableWTMReport" });
        else if (e.data.startsWith("WTMReportResize")) {
          const t = e.data.split(":")[1];
          k(t);
        }
      }
    }),
      v(chrome.runtime.getURL("/app/templates/trackers-preview.html"));
  })();
