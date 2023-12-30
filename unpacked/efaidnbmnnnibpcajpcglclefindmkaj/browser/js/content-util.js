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
import { dcLocalStorage as e } from "../../common/local-storage.js";
import { events as n } from "../../common/analytics.js";
import { validFrictionlessLocales as t } from "../../common/constant.js";
await e.init();
export const util = {
  getFrictionlessLocale: (e) => t[e] || t.en,
  analytics: function (e, n, t) {
    e.analytics || (e.analytics = []), e.analytics.push([n, t]);
  },
  messageToMain: function (e, n) {
    chrome.runtime.sendMessage(e, n);
  },
  addMainListener: function (e) {
    chrome.runtime.onMessage.addListener(e);
  },
  isChrome: function () {
    return !0;
  },
  isEdge: function () {
    try {
      if ("true" === e.getItem("IsRunningInEdge")) return !0;
    } catch (e) {}
    let n = window.navigator.userAgent.toLowerCase();
    return -1 !== n.indexOf("chrome") && -1 !== n.indexOf("edg/");
  },
  isChromeOnlyMessage: function (e) {
    return (
      -1 !==
      [
        "web2pdfMissingMac",
        "web2pdfFrictionlessUrl",
        "web2pdfBadVersion",
        "pdfOwnershipExploreAcrobat",
        "pdfOwnershipPromptContent",
        "LearnMoreURL"
      ].indexOf(e)
    );
  },
  consoleLog: function (...e) {
    SETTINGS.DEBUG_MODE && console.log(...e);
  },
  consoleLogDir: function (...e) {
    SETTINGS.DEBUG_MODE && console.dir(...e);
  },
  consoleError: function (...e) {
    SETTINGS.DEBUG_MODE && console.error(...e);
  },
  getTranslation: function (e, n) {
    if (e)
      return (
        util && util.isChromeOnlyMessage(e) && util.isEdge() && (e += "Edge"), n ? chrome.i18n.getMessage(e, n) : chrome.i18n.getMessage(e)
      );
  },
  translateElements: function (e) {
    $(e).each(function () {
      "INPUT" === this.tagName ? $(this).val(util.getTranslation(this.id)) : $(this).text(util.getTranslation(this.id));
    });
  },
  isPDFForm: function (e) {
    let n = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/.exec(e),
      t = "";
    if (null === n || n.length < 2) return !1;
    if (((t = n[1].endsWith("/") ? n[1].slice(0, -1) : n[1]), void 0 === t || 0 == t.length)) return !1;
    t = t.toLowerCase();
    let i = t.split("/"),
      o = i[i.length - 1];
    function r(e) {
      return o.indexOf(e) > -1;
    }
    return (
      ![
        "forms",
        "guide",
        "summary",
        "process",
        "sample",
        "procedure",
        "requirement",
        "example",
        "instr",
        "format",
        "formul",
        "reform",
        "forming",
        "former",
        "formed"
      ].some(r) &&
      (!!(i.length > 1 && (i.pop(), i.includes("form") || i.includes("forms"))) || ["form", "application.pdf"].some(r))
    );
  },
  logSharePointAnalytics: function (e, t) {
    SETTINGS.FILL_N_SIGN_ENABLED && "FillnSign" === e.paramName
      ? t
        ? e.version === SETTINGS.READER_VER
          ? util.analytics(e, n.TREFOIL_FILLSIGN_READER_SHAREPOINT)
          : util.analytics(e, n.TREFOIL_FILLSIGN_ACROBAT_SHAREPOINT)
        : e.version === SETTINGS.READER_VER
        ? util.analytics(e, n.PERSIST_FILLSIGN_READER_SHAREPOINT)
        : util.analytics(e, n.PERSIST_FILLSIGN_ACROBAT_SHAREPOINT)
      : t
      ? e.version === SETTINGS.READER_VER
        ? util.analytics(e, n.TREFOIL_PDF_READER_SHAREPOINT)
        : util.analytics(e, n.TREFOIL_PDF_ACROBAT_SHAREPOINT)
      : e.version === SETTINGS.READER_VER
      ? util.analytics(e, n.PERSIST_PDF_READER_SHAREPOINT)
      : util.analytics(e, n.PERSIST_PDF_ACROBAT_SHAREPOINT);
  },
  logOpenInAcrobatAnalytics: function (e, t) {
    let i = n.PERSIST_PDF_ACROBAT;
    (i =
      SETTINGS.FILL_N_SIGN_ENABLED && "FillnSign" === e.paramName
        ? t
          ? e.version === SETTINGS.READER_VER
            ? n.TREFOIL_PDF_READER_FS
            : n.TREFOIL_PDF_ACROBAT_FS
          : e.version === SETTINGS.READER_VER
          ? n.PERSIST_PDF_READER_FS
          : n.PERSIST_PDF_ACROBAT_FS
        : t
        ? e.version === SETTINGS.READER_VER
          ? n.TREFOIL_PDF_READER
          : n.TREFOIL_PDF_ACROBAT
        : e.version === SETTINGS.READER_VER
        ? n.PERSIST_PDF_READER
        : n.PERSIST_PDF_ACROBAT),
      util.analytics(e, i);
  },
  handleXHRRequest: function (e, n, t, i) {
    let o = new XMLHttpRequest();
    (o.onreadystatechange = function () {
      o.readyState === XMLHttpRequest.DONE && (200 === o.status ? i(null, o) : i(o.status, null));
    }),
      (o.ontimeout = function (e) {
        i(e, null);
      }),
      (o.onerror = function (e) {
        i(e, null);
      }),
      o.open(e, n, !0),
      o.send(t);
  },
  handlePDFURL: async function (e, n = !0) {
    if (!0 === SETTINGS.SHAREPOINT_ENABLED) {
      if (e.isSharePointURL) return util.logSharePointAnalytics(e, n), e;
      {
        const t = await util.checkForSharePointURL(e.url);
        return (e.isSharePointURL = t), t ? util.logSharePointAnalytics(e, n) : util.logOpenInAcrobatAnalytics(e, n), e;
      }
    }
    return (e.isSharePointURL = !1), util.logOpenInAcrobatAnalytics(e, n), e;
  },
  checkForSharePointURL: function (e) {
    return new Promise((n) => {
      util.handleXHRRequest("OPTIONS", e, null, (t, i) => {
        if (!t && i) {
          let t = i.getResponseHeader("MicrosoftSharepointTeamServices"),
            o = i.getResponseHeader("MS-Author-Via");
          if (t && o && o.includes("MS-FP/4.0")) {
            const t = new URL(e),
              i = t.protocol + "//" + t.hostname + ":" + t.port + "/_vti_inf.html";
            return void util.handleXHRRequest("GET", i, null, (e, t) => {
              if (!e && t) {
                let e = t.response;
                if (e.includes("FPAuthorScriptUrl") && e.includes("FPAdminScriptUrl")) return void n(!0);
              }
              n(!1);
            });
          }
        }
        n(!1);
      });
    });
  },
  uuid: function () {
    try {
      let e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (n) {
        let t = (e + 16 * Math.random()) % 16 | 0;
        return (e = Math.floor(e / 16)), ("x" === n ? t : (3 & t) | 8).toString(16);
      });
    } catch (e) {
      return Math.random();
    }
  },
  sendAnalytics: (e) => chrome.runtime.sendMessage({ main_op: "analytics", analytics: [e] }),
  mimeReloadAllTabs: () => {
    const n = e.getItem("loadedTabsInfo")?.tabsInfo || [];
    chrome.tabs.query({}, (e) => {
      e.forEach(({ id: e }) => {
        n.includes(e) && chrome.tabs.reload(e);
      });
    }),
      e.removeItem("loadedTabsInfo");
  }
};
