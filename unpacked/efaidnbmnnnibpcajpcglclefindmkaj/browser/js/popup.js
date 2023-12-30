/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property laws,
 * including trade secret and or copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
import { events as e } from "../../common/analytics.js";
import { util as t } from "./content-util.js";
import { privateApi as a } from "./content-privateApi.js";
import { dcLocalStorage as o } from "../../common/local-storage.js";
import { updateExtUserState as n } from "../../common/util.js";
import { OptionPageActions as i, OptionsPageToggles as r } from "../../common/constant.js";
await o.init();
const c = o.getItem("appLocale");
let s, l, p, m, d;
const _ = new Promise((e) => (d = e)),
  g = $("#cdn-iframe"),
  E = await chrome.tabs.query({ active: !0, lastFocusedWindow: !0 });
function f(e) {
  let t = e;
  return e.tab || (t = { ...e, tab: E[0] }), chrome.runtime.sendMessage(t);
}
function u(e, t) {
  f({ main_op: "analytics", analytics: [[e, t]] });
}
const h = (e) => {
    try {
      const t = new URL(s),
        a = [/^https:\/\/([a-zA-Z\d-]+\.){0,}(adobe|acrobat)\.com(:[0-9]*)?$/];
      return e === t.origin && !!a.find((t) => t.test(e));
    } catch (e) {
      return !1;
    }
  },
  I = async (e, t) => {
    const a = g[0];
    if (a && h(t)) {
      const o = new Promise((e) => setTimeout(() => e(!1), 1e5));
      (await Promise.race([_, o])) && a.contentWindow.postMessage(e, t);
    }
  };
async function w(n) {
  let c = { main_op: "send-analytics" };
  n.target.checked && o.setItem("viewer-enabled-source", "ownership-consent"),
    o.getWithTTL("ownership-upgrade") &&
      !n.target.checked &&
      (t.analytics(c, e.USE_ACROBAT_VIEWER_DISABLED_DEFAULT_OWNERSHIP, { SOURCE: "trefoilMenu" }),
      t.analytics(c, e.USE_ACROBAT_VIEWER_DISABLED_DEFAULT_OWNERSHIP_EXPERIMENT, {
        SOURCE: "trefoilMenu",
        EXPERIMENT: o.getItem("experiment-ownership")
      }),
      o.removeItem("ownership-upgrade"),
      o.removeItem("defaultOwnerShipExperiment")),
    o.setItem("pdfViewer", `${n.target.checked}`);
  const s = n.target.checked ? "enabled" : "disabled";
  await a.setViewerState(s);
  try {
    o.removeItem("netAccAdT"), o.removeItem("netAcc"), o.removeItem("netAccCN");
  } catch (e) {}
  n.target.checked
    ? t.isEdge()
      ? t.analytics(c, e.USE_ACROBAT_IN_EDGE_ENABLED)
      : t.isChrome() && t.analytics(c, e.USE_ACROBAT_IN_CHROME_ENABLED)
    : t.isEdge()
    ? t.analytics(c, e.USE_ACROBAT_IN_EDGE_DISABLED)
    : t.isChrome() && t.analytics(c, e.USE_ACROBAT_IN_CHROME_DISABLED),
    setTimeout(() => {
      m ? f({ panel_op: "viewer_menu", reload_in_native: !0, tabId: E[0].id }) : p && chrome.tabs.reload(),
        f(c),
        f({
          panel_op: "options_page",
          requestType: i.OPTIONS_UPDATE_TOGGLE,
          toggleId: r.ViewerOwnershipTitle,
          toggleVal: n.target.checked
        }),
        t.isEdge() && f({ main_op: "pdfViewerChanged", value: `${n.target.checked}` });
    }, 20);
}
function T() {
  u(e.TREFOIL_SETTINGS_ICON_CLICKED),
    chrome.runtime.openOptionsPage((t) => {
      chrome.runtime.lastError && u(e.TREFOIL_SETTINGS_FAILED_TO_OPEN);
    });
}
function A() {
  u(e.TREFOIL_ACROBAT_LABEL_CLICKED), f({ main_op: "go_to_aonline", verb: "acrobat_label" });
}
window.addEventListener("message", async (e) => {
  if (!h(e.origin)) return;
  const t = { ...e.data };
  switch (t.main_op) {
    case "cdnReady":
      d(!0);
      break;
    case "go_to_aonline":
      f({ ...t, locale: c || o.getItem("locale") });
      break;
    case "convertToPDFPopupMenu":
    case "appendToExistingPDFPopupMenu":
    case "cancelWebpageConversion":
    case "clearStatus":
    case "open_converted_file":
    case "get-frictionless-url":
    case "timing_info":
      f(t);
      break;
    case "relay_to_content":
      (t.main_op = "external_msg"), (t.data = e.data), (t.timeStamp = Date.now()), f(t);
      break;
    case "branding-clicked":
      A();
      break;
    case "settings-clicked":
      T();
      break;
    case "viewership-toggle": {
      const { checked: e } = t;
      w({ target: { checked: e } });
      break;
    }
  }
}),
  chrome.runtime.onMessage.addListener((e) => {
    switch (e.panel_op) {
      case "status": {
        const { action: t } = e,
          a = { type: 0 === t ? "convertToPDFPopupMenu" : "appendToExistingPDFPopupMenu", ...e };
        I(a, l);
        break;
      }
      case "load-frictionless": {
        const t = (function (e, t) {
          if (e.hide_spinner) return void g.removeClass("loader");
          const a = e.frictionless_uri;
          let n = new URL(a);
          if (
            (t &&
              ((t.locale = c || chrome.i18n.getMessage("@@ui_locale")),
              Object.keys(t).forEach((e) => {
                n.searchParams.append(e, t[e]);
              })),
            "false" === o.getItem("logAnalytics"))
          ) {
            let e = n.toString();
            e = e.concat("&app!analytics=disable");
            try {
              n = new URL(e);
            } catch (e) {
              n = "";
            }
          }
          return f({ iframe_call_time: Date.now(), main_op: "timing_info" }), n;
        })(e, { verb: e.pdf_action, workflow: e.frictionless_workflow, dropzone2: "true" });
        t && I({ type: "frictionless-url", url: t.href }, l);
        break;
      }
    }
  }),
  (async function () {
    const a = performance.now();
    n(),
      u(e.EXT_MENU_ICON_CLICKED),
      $("#pdfOwnershipExploreAcrobat").text(t.getTranslation("pdfOwnershipExploreAcrobat")),
      $("#offlineModeTitle").text(t.getTranslation("popupNoConnection")),
      $("#offlineModeMessage").text(t.getTranslation("popupOfflineMessage"));
    const i = "true" === o.getItem("pdfViewer");
    i || g.addClass("iframe-with-footer");
    const r = await f({ main_op: "initialise-popup" }),
      { action: d, current_status: _, hostedURL: E, is_pdf: h, is_viewer: b } = r;
    (s = E), (p = h), (m = b), _ && (s = 0 === d ? `${s}#/web-to-pdf` : `${s}#/add-webpage-to-pdf`);
    const O = new URL(s);
    l = O.origin;
    const C = "false" !== o.getItem("logAnalytics"),
      L = "false" !== o.getItem("ANALYTICS_OPT_IN_ADMIN");
    let k = o.getItem("viewer-locale");
    k || (k = o.getItem("locale")),
      O.searchParams.append("locale", c || k),
      O.searchParams.append("la", C && L),
      O.searchParams.append("ao", o.getItem("aoem")),
      o.getItem("enableExtMenuDarkMode") && O.searchParams.append("theme", o.getItem("theme") || "auto");
    try {
      if (!(await fetch(O, { method: "HEAD" })).ok) throw new Error();
      g.attr("src", O.href),
        (g[0].onload = () => {
          const e = (performance.now() - a) / 1e3,
            t = Number.parseFloat(e).toFixed(2);
          I({ ...r, isViewerEnabled: i, timeToLoad: t, type: "init" }, l);
        });
    } catch {
      !(function () {
        u(e.EXT_MENU_CDN_OFFLINE), g.remove();
        const t = "true" === o.getItem("pdfViewer");
        $("#toggle-input").prop("checked", t),
          t || $("#footer").removeClass("hidden"),
          $(".settings-icon").click(T),
          $("#toggle-input").click(w),
          $("#branding").click(A),
          $("#offline-mode").removeClass("hidden");
      })();
    }
  })();
