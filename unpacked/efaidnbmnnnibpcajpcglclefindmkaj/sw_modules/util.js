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
import { ajax as e, ajaxError as t, each as n, Deferred as r, extend as o, param as i } from "./polyfills.js";
import { SETTINGS as s } from "./settings.js";
import { validFrictionlessLocales as a } from "../common/constant.js";
import { dcLocalStorage as c } from "../common/local-storage.js";
var u = ["http", "https", "ftp", "file", "blob", "data", "filesystem", "drive"],
  l = chrome.runtime.getURL("/");
export const util = {
  extend: o,
  getFrictionlessLocale: function (e) {
    return a[e] || a.en;
  },
  isChrome: function () {
    return !0;
  },
  isLocalFileUrl: (e) => e.startsWith("file:///") && (e.endsWith(".pdf") || e.endsWith(".PDF")),
  isEdge: function () {
    let e = navigator.userAgent.toLowerCase();
    return -1 !== e.indexOf("chrome") && -1 !== e.indexOf("edg/");
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
  getBrowser: function () {
    return this.isEdge() ? 2 : 1;
  },
  stackDelimiter: function () {
    return "\n";
  },
  Deferred: r,
  each: n,
  ajax: e,
  ajaxError: t,
  param: i,
  newBlob: function (e) {
    return new Blob(e);
  },
  newFormData: function () {
    return new FormData();
  },
  newXHR: function () {
    return new XMLHttpRequest();
  },
  createTab: function (e, t) {
    return t ? chrome.tabs.create({ url: e, active: !0 }, t) : chrome.tabs.create({ url: e, active: !0 });
  },
  isDevEnv: function () {
    var e = r();
    return (
      chrome.management.getSelf(function (t) {
        e.resolve("development" === t.installType);
      }),
      e.promise()
    );
  },
  closeWindow: function (e) {
    chrome.windows.remove(e.id);
  },
  getTranslation: function (e, t) {
    if (e)
      return this.isChromeOnlyMessage(e) && this.isEdge() && (e += "Edge"), t ? chrome.i18n.getMessage(e, t) : chrome.i18n.getMessage(e);
  },
  sendMessage: function (e, t, n) {
    chrome.tabs.sendMessage(e.tabId, e, n);
  },
  consoleLog: function (...e) {
    s.DEBUG_MODE && console.log(...e);
  },
  consoleLogDir: function (...e) {
    s.DEBUG_MODE && console.dir(...e);
  },
  consoleError: function (...e) {
    s.DEBUG_MODE && console.error(...e);
  },
  showFrictionlessMenu: function (e) {
    return (
      !(!s.IS_READER && !s.TEST_MODE) ||
      !(!e || !s.FRICTIONLESS_ENABLED || (0 != e.version && (1 != e.version || 0 != e.NMHConnStatus) && e.version != s.READER_VER))
    );
  },
  atob16: function (e) {
    var t,
      n = atob(e),
      r = [];
    for (t = 0; t < n.length; t += 2) r.push(String.fromCharCode(n.charCodeAt(t) + 256 * n.charCodeAt(t + 1)));
    return r.join("");
  },
  removeQueryParams: function (e) {
    const t = e.split("?");
    return null != t ? t[0] : e;
  },
  parseExtensionURL: function (e) {
    var t = (e = e.substring(l.length)).search(/:|%3A/i);
    if (-1 !== t) {
      var n = e.slice(0, t).toLowerCase();
      return u.includes(n) ? (":" === (e = e.split("#")[0]).charAt(t) && (e = encodeURIComponent(e)), e) : void 0;
    }
  },
  isViewerURL: function (e) {
    if (e)
      try {
        var t = e.substring(l.length),
          n = t.search(/:|%3A/i);
        if (-1 !== n) {
          var r = t.slice(0, n).toLowerCase();
          if (u.includes(r)) return !0;
        }
        return e.startsWith(`chrome-extension://${chrome.runtime.id}/viewer.html`);
      } catch (e) {}
    return !1;
  },
  uuid: function () {
    try {
      let e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        let n = (e + 16 * Math.random()) % 16 | 0;
        return (e = Math.floor(e / 16)), ("x" === t ? n : (3 & n) | 8).toString(16);
      });
    } catch (e) {
      return Math.random();
    }
  },
  sleep: (e) => new Promise((t) => setTimeout(t, e)),
  verCmp: (e, t) => e.localeCompare(t, void 0, { numeric: !0, sensitivity: "base" }),
  enableNewExtensionMenu: (e) => {
    e ? chrome.action.setPopup({ popup: "../browser/js/popup.html" }) : chrome.action.setPopup({ popup: "" });
  },
  isAcrobatAvailable: (e) => !(0 == e || 1 == e || e === s.READER_VER || e === s.ERP_READER_VER),
  mimeReloadAllTabs: () => {
    const e = c.getItem("loadedTabsInfo")?.tabsInfo || [];
    chrome.tabs.query({}, (t) => {
      t.forEach(({ id: t }) => {
        e.includes(t) && chrome.tabs.reload(t);
      });
    }),
      c.removeItem("loadedTabsInfo");
  }
};
