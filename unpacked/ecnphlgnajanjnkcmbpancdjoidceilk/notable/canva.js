"use strict";
!(function () {
  let t;
  const e = crypto.randomUUID();
  async function n(t) {
    return new Promise(function (e) {
      setTimeout(e, t);
    });
  }
  async function o(t) {
    const e = "https://www.canva.com/_ajax/csrf3/" + t;
    try {
      const t = await fetch(e),
        n = await a(t);
      return n.A;
    } catch (t) {
      throw new c("CsrfToken Request Failed", { url: e, error: t });
    }
  }
  async function a(t) {
    const e = await t.text(),
      n = e.substring(e.indexOf("{"));
    return JSON.parse(n);
  }
  function r(t) {
    const e = document.createElement("div");
    (e.id = "openWithKamiItem"), e.classList.add("MRpFjg");
    const n = document.createElement("div");
    n.classList.add("k62k3g"), e.append(n);
    const o = document.createElement("button");
    o.classList.add(
      "_1QoxDw",
      "Qkd66A",
      "tYI0Vw",
      "o4TrkA",
      "VvwWbQ",
      "Eph8Hg",
      "cclg9A",
      "G97FoQ",
      "NT2yCg",
      "Qkd66A",
      "tYI0Vw",
      "lsXp_w",
      "cwOZMg",
      "zQlusQ",
      "uRvRjQ",
      "_3AH3gw",
      "teD6Yg"
    ),
      (o.ariaLabel = "Open with Kami"),
      (o.onclick = t),
      n.append(o);
    const a = document.createElement("span");
    a.classList.add("TcNIhA"), o.append(a);
    const r = document.createElement("span");
    r.classList.add("NA_Img", "dkWypw"), (r.ariaHidden = "true"), a.append(r);
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    (s.style.filter = "invert(30%) sepia(30%) saturate(3000%) hue-rotate(245deg)"), r.append(s);
    const i = document.createElement("div");
    i.classList.add("kami-spinner"), (i.style.display = "none"), r.append(i);
    const c = document.createElementNS("http://www.w3.org/2000/svg", "image"),
      d = `${"https://web.kamihq.com"}/web/images/kami_shorthand.svg`;
    c.setAttribute("href", d), c.setAttribute("width", "100%"), c.setAttribute("height", "100%"), s.append(c);
    const u = document.createElement("p");
    return (
      u.classList.add("_5RSqIg", "_2xcaIA", "ZSdr0w", "fM_HdA", "KZvVOQ"),
      (u.textContent = "Open with Kami"),
      n.append(u),
      {
        button: e,
        toggleLoading: function () {
          (s.style.display = "none" == s.style.display ? "initial" : "none"),
            (i.style.display = "none" == i.style.display ? "initial" : "none"),
            (o.disabled = !o.disabled);
        },
        showError: function (t) {
          (u.textContent = t), (i.style.animation = "none"), (i.style.borderColor = "red"), (i.style.background = "red");
        }
      }
    );
  }
  async function s(t) {
    return new Promise((e) => {
      chrome.runtime.sendMessage(chrome.runtime.id, { action: "retrieve-setting", setting: t }, (t) => {
        e(t.value);
      });
    });
  }
  function i(n, o = {}) {
    n = `Canva: ${n}`;
    const a = crypto.randomUUID(),
      r = { uuid: a, name: n, value: { ...o, app_name: "canva", session_id: e, current_page_url: window.location.href } };
    return (
      t && (r.user_id = t),
      console.debug(`Kami: Event. ${n}`, o),
      fetch("https://web.kamihq.com/api" + "/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(r)
      }),
      a
    );
  }
  !(async function () {
    if (
      await (async function () {
        return "true" === (await Promise.race([n(3e3).then(() => "timeout"), s("hideCanvaOpenWithKamiButton")]));
      })()
    )
      return void console.debug("Kami: not showing button");
    const e =
      (function () {
        const t = (function () {
          for (const t of document.querySelectorAll("script")) {
            const e = t.textContent?.substring(0, 100),
              n = e?.indexOf("ndow['bootst");
            if (n && n >= 0) return t.textContent?.substring(n);
          }
        })();
        if (!t) return void i("Data Objects Missing");
        const e = /"M":{"5":"([A-z0-9-_]+)"/.exec(t),
          n = e?.[1];
        n || i("No Ripple Code", { match: e?.[0] });
        return n;
      })() ?? "";
    if (!e) return;
    async function d() {
      const [t, r] = (function () {
          const t = new URL(window.location.toString()),
            e = /\/design\/([A-z0-9-_]+?)\/([A-z0-9-_]+?)\/.*/.exec(t.pathname),
            [n, o, a] = e ?? [];
          if (!o || !a) throw new c("Unable To Extract Document ID And Extension", { href: t.href, match: e?.[0] });
          return console.debug("Kami", { id: o, extension: a }), [o, a];
        })(),
        s = await (async function (t, e) {
          const n = await o("ripple"),
            r = `https://www.canva.com/_ajax/ripple/${t}/source`,
            s = { "X-Csrf-Token": n },
            i = JSON.stringify({ A: t, B: e });
          try {
            const t = await fetch(r, { method: "POST", headers: s, body: i });
            return (await a(t)).B;
          } catch (t) {
            throw new c("Ripple Request Failed", { error: t, body: i });
          }
        })(t, e),
        i = await (async function (t, e, n) {
          const r = "export?version=2&inline=false",
            s = await o(r),
            i = "https://www.canva.com/_ajax/" + r,
            d = { "X-Csrf-Token": s },
            u = JSON.stringify({
              priority: "HIGH",
              renderSpec: {
                content: { id: t, extension: e, version: n, schema: "web-2", type: "DOCUMENT_REFERENCE", prefetch: !0 },
                mediaQuality: "PRINT"
              },
              outputSpecs: [{ destination: { type: "DOWNLOAD" }, type: "PDF" }],
              pollable: !0,
              useSkiaRenderer: !0
            });
          try {
            const t = await fetch(i, { method: "POST", headers: d, body: u }),
              e = await a(t);
            if ("CREATED" !== e.export.status) throw new c("Export Job Not Created", { exportData: e });
            return e.export;
          } catch (t) {
            throw new c("Failed To Create Export Job", { error: t, url: i, body: u });
          }
        })(t, r, s),
        d = await (async function (t) {
          const e = `https://www.canva.com/_ajax/export/${t}?attachment`;
          let o,
            r = 0;
          for (; r++ < 30; )
            try {
              await n(1e3);
              const t = await fetch(e);
              if (((o = await a(t)), "COMPLETE" === o.export.status)) return o.export;
            } catch (t) {
              throw new c("Poll Error", { error: t });
            }
          throw new c("Poll Timed Out", { data: o });
        })(i.exportIdentifier),
        u = d?.output?.exportBlobs;
      if (!u || 1 !== u.length) throw new c("Unexpected Export Response ", { createdExport: d });
      const l = u[0].url,
        p = (function (t) {
          return t.output.title || document.querySelector("title")?.textContent || "Canva file";
        })(d),
        w = new URL("https://web.kamihq.com");
      return (
        (w.pathname = "/web/viewer.html"),
        w.searchParams.set("file", l),
        w.searchParams.set("filename", p),
        w.searchParams.set("individual_copy_key", t),
        w.searchParams.set("source", "extension_canva"),
        w
      );
    }
    new MutationObserver(function (t) {
      for (const e of t) {
        if (!document.getElementById("openWithKamiItem") && "childList" === e.type) {
          const t = document.querySelector("._1aH35Q .nsTGAA");
          if (!t) continue;
          const {
            button: e,
            toggleLoading: n,
            showError: o
          } = r(async () => {
            n();
            try {
              const t = await d();
              n(), i("Open with Kami Success", { url: t.href }), window.open(t, "_blank");
            } catch (t) {
              let e = "";
              t instanceof c && (e = t.eventUUID), o("ERROR " + e || "unknown");
            }
          });
          t.append(e);
        }
      }
    }).observe(document.body, { childList: !0, subtree: !0 }),
      chrome.storage.sync.get(["notable.user"], (e) => {
        const n = e?.["notable.user"]?.id;
        "number" == typeof n && (t = n);
      });
  })();
  class c extends Error {
    constructor(t, e) {
      super(t + (e ? " - " + JSON.stringify(e) : "")), (this.eventUUID = i(t, e));
    }
  }
})();
