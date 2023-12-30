"use strict";
!(function () {
  const e = window,
    t = {
      isTeacher: function () {
        const t = e.urlMatcher;
        if (t.isStreamPage(window.location.href)) {
          const e = "div.jrhqBd.LBlAUc.Aopndd.ZoT1D.TIunU",
            t = "a.kpDQ8.yHjGtf.maXJsd.MymH0d";
          return !!document.querySelector(`${e} ${t}`);
        }
        if (t.isClassroomGrader(window.location.href)) {
          return !!document.querySelector(".d3t6c.MPNyod");
        }
        if (t.isCourseworkPage(window.location.href)) {
          return !!document.querySelector(".Y5vSD.SRX5Hd");
        }
        if (t.isClassroomCoursePage(window.location.href)) {
          const e = document.querySelectorAll('.wZTANe[role="listitem"] a');
          return Array.from(e).some((e) => t.isStudentwork(e.href));
        }
        return !1;
      }
    };
  async function o() {
    const e = (function () {
      function e(e) {
        if (!e) return !1;
        const t = [...e.matchAll(/@/g)];
        if (1 !== t.length) return !1;
        const o = t[0];
        return !(!o || 0 === o.index || o.index === e.length - 1);
      }
      function o(e) {
        return /^\d+$/.test(e ?? "");
      }
      const n = (function () {
        try {
          const t = window.IJ_values;
          if (t && e(t[44])) return o(t[46]) ? { email: t[44], googleUserId: t[46] } : { email: t[44] || "" };
        } catch (e) {
          console.log("Failed to get email from IJ_values", e);
        }
        try {
          const t = window.WIZ_global_data;
          if (t && e(t.oPEP7c)) return o(t.qDCSke) ? { email: t.oPEP7c, googleUserId: t.qDCSke } : { email: t.oPEP7c };
        } catch (e) {
          console.log("Failed to get email from WIZ_global_data", e);
        }
        try {
          const t = window.gbar_;
          if (t && t.CONFIG && e(t.CONFIG[0][4].na[5])) return { email: t.CONFIG[0][4].na[5] };
        } catch (e) {
          console.log("Failed to get email from gbar_", e);
        }
        const t = document.querySelector("div.gb_Cc div.gb_Cb")?.nextSibling?.textContent;
        if (e(t)) return { email: t };
        console.log("Not found the email for current user");
      })();
      if (n) return { ...n, isTeacher: t.isTeacher() };
    })();
    if (!e) return;
    const { email: o, ...n } = e,
      r = e.email.trim().split("@")[1] || "";
    return {
      email_hash: await (async function (e) {
        const t = new TextEncoder().encode(e),
          o = await crypto.subtle.digest("SHA-256", t);
        return Array.from(new Uint8Array(o))
          .map((e) => ("00" + e.toString(16)).slice(-2))
          .join("");
      })(o),
      domain: r,
      ...n
    };
  }
  (window.utils = t),
    (window.createUpdateWorkLinkClickHandler = async function (e) {
      const { googleFileId: t, authuser: n } = (function (e) {
          const t = new URL(e);
          return {
            googleFileId: t.searchParams.get("id") || t.pathname.split("/")[3] || "",
            authuser: t.searchParams.get("authuser") ?? void 0
          };
        })(e),
        r = window.location.href.split("/"),
        i = new URL(`${"https://web.kamihq.com"}/web/viewer.html`),
        a = i.searchParams;
      a.set("open_formative_assessment", "true"),
        a.set("alternative_course_id", r[4] || ""),
        a.set("alternate_coursework_id", r[6] || "all"),
        a.set("google_file_id", t),
        n && a.set("authuser", n);
      const s = await o();
      return (
        s && a.set("google_user_hint", JSON.stringify(s)),
        function () {
          window.open(i, "_blank");
        }
      );
    }),
    (window.createOpenWithKamiClickHandler = async function (e) {
      const t = window.googleStateFromOpenUrl(e, "classroomopenext");
      t || console.log(`failed to extract state from url: ${e}`);
      const n = new URL(`${"https://web.kamihq.com"}/web/viewer.html`),
        r = n.searchParams;
      r.set("state", JSON.stringify(t));
      const i = await o();
      return (
        i && r.set("google_user_hint", JSON.stringify(i)),
        function () {
          window.open(n, "_blank");
        }
      );
    });
  new MutationObserver(function (e) {
    e.some((e) => e.addedNodes) &&
      (async function () {
        const e = await o();
        if (!e) return;
        const t = JSON.stringify(e),
          n = [
            "https://kami.app",
            "https://api.local.kamipdf.com",
            "https://api.kamihq.com",
            "https://api-staging.kamihq.com",
            "https://api-test.kamihq.com"
          ],
          r = [
            ...document.querySelectorAll('a.vwNuXe.JkIgWb.QRiHXd.MymH0d.maXJsd:not([kami-link-processed="true"])'),
            ...document.querySelectorAll('a.VkhHKd.e7EEH.nQaZq:not([kami-link-processed="true"])')
          ];
        for (const e of r) {
          if (!n.some((t) => e.href.startsWith(t))) continue;
          const o = e.cloneNode(!0);
          o.setAttribute("kami-link-processed", "true");
          const r = new URL(e.href);
          r.searchParams.set("google_user_hint", t),
            (o.href = r.toString()),
            o.addEventListener("click", (e) => {
              e.stopPropagation();
            }),
            e.replaceWith(o);
        }
      })();
  }).observe(document.body, { childList: !0, subtree: !0 });
})();
