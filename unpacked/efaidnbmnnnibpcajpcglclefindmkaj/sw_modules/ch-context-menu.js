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
import { communicate as e } from "./communicate.js";
import { util as t } from "./util.js";
import { analytics as n, events as o } from "../common/analytics.js";
import { SETTINGS as a } from "./settings.js";
import { dcLocalStorage as r, dcSessionStorage as s } from "../common/local-storage.js";
import { floodgate as i } from "./floodgate.js";
import { privateApi as l } from "./private-api.js";
import { common as c } from "./common.js";
import { userSubscription as m } from "./user-subscription.js";
import { userDetailsAcrobat as d } from "./acrobatUserDetails.js";
import { LOCAL_FTE_WINDOW as E } from "../common/constant.js";
import { CACHE_PURGE_SCHEME as u } from "./constant.js";
import { versionChecks as I } from "./handleVersionChecks.js";
var p,
  f,
  _ = new Promise(function (e) {
    f = e;
  }),
  h = {},
  g = () => e.getModule("acro-web2pdf"),
  T = () => e.getModule("acro-gstate"),
  N = ["http://*/*", "https://*/*"];
async function L({ locale: e } = {}) {
  const n = r.getItem("appLocale"),
    o = r.getItem("installSource");
  if (["development", "normal", "sideload"].includes(o)) {
    const o = new URL(c.getUninstallUrl());
    if (n) o.searchParams.append("locale", n);
    else if (e) o.searchParams.append("locale", e);
    else {
      let e = r.getItem("viewer-locale") || t.getFrictionlessLocale(chrome.i18n.getMessage("@@ui_locale"));
      o.searchParams.append("locale", e);
    }
    o.searchParams.append("theme", r.getItem("theme") || "auto"),
      o.searchParams.append("callingApp", chrome.runtime.id),
      chrome.runtime.setUninstallURL(o.href);
  }
}
async function A(e) {
  try {
    e &&
      (e.reason === chrome.runtime.OnInstalledReason.UPDATE && e.previousVersion !== chrome.runtime.getManifest().version
        ? (t.verCmp(e.previousVersion, "15.1.3.30") < 0
            ? (n.event(n.e.LOCAL_STORAGE_MIGRATION_INIT),
              await (async function () {
                let e;
                try {
                  const o = await chrome.tabs.query({});
                  await Promise.allSettled(
                    o.map(({ id: e }) =>
                      chrome.scripting.executeScript({ target: { tabId: e }, files: ["content_scripts/injectCopyLSIframe.js"] })
                    )
                  ),
                    await t.sleep(300),
                    (e = await chrome.runtime.sendMessage({ main_op: "copy-ls" })),
                    o.map(({ id: e }) => chrome.tabs.sendMessage(e, { content_op: "remove-lsCopy" }).catch(() => null));
                } catch (e) {
                } finally {
                  "succeed" !== e
                    ? (r.setItem("retryOnNextPage", !0), n.event(n.e.LOCAL_STORAGE_MIGRATION_FAILED))
                    : n.event(n.e.LOCAL_STORAGE_MIGRATION_SUCCESS);
                }
              })())
            : n.event(n.e.LOCAL_STORAGE_ALREADY_MIGRATED),
          r.getItem("installVersion") || r.setItem("installVersion", e.previousVersion),
          r.setItem("installType", e.reason))
        : e.reason === chrome.runtime.OnInstalledReason.INSTALL &&
          ((() => {
            const e = `https://chrome.google.com/webstore/detail/*/${chrome.runtime.id}*`,
              t = `https://microsoftedge.microsoft.com/addons/detail/*/${chrome.runtime.id}*`;
            chrome.tabs.query({ url: [e, t] }, (e) => {
              if (chrome.runtime.lastError) p = null;
              else
                for (let t in e) {
                  const n = new URLSearchParams(new URL(e[t].url).search);
                  if (n.has("mv")) {
                    p = encodeURIComponent(n.get("mv"));
                    break;
                  }
                }
            });
          })(),
          r.setItem("installVersion", chrome.runtime.getManifest().version),
          r.setItem("installType", e.reason)),
      r.getItem("offlineSupportDisable") || r.setItem("offlineSupportDisable", !0)),
      _.then(({ env: o, msg: s }) => {
        if (
          (r.setItem("installSource", o.installType),
          L(),
          e.reason === chrome.runtime.OnInstalledReason.UPDATE && e.previousVersion !== chrome.runtime.getManifest().version)
        )
          n.event(n.e.EXTENSION_UPDATE);
        else if (e.reason === chrome.runtime.OnInstalledReason.INSTALL) {
          switch ((n.event(n.e.EXTENSION_INSTALLED), o.installType)) {
            case "admin":
              n.event(n.e.EXTENSION_INSTALLED_ADMIN);
              break;
            case "development":
              n.event(n.e.EXTENSION_INSTALLED_DEVELOPMENT);
              break;
            case "other":
              n.event(n.e.EXTENSION_INSTALLED_OTHER);
              break;
            case "normal":
              l.isInstalledViaUpsell().then((e) => {
                if (e) n.event(n.e.EXTENSION_INSTALLED_UPSELL);
                else {
                  n.event(n.e.EXTENSION_INSTALLED_DIRECT);
                  let e = "store_direct";
                  p && (e = decodeURIComponent(p)), n.event(n.e.EXTENSION_INSTALLED_SOURCE, { SOURCE: e });
                }
              });
              break;
            case "sideload":
              n.event(n.e.EXTENSION_INSTALLED_SIDE_LOADED),
                s.installMonth && s.installYear
                  ? n.event(n.e.EXTENSION_INSTALLED_SIDE_LOADED_MONTH_YEAR, { MONTH: s.installMonth, YEAR: s.installYear })
                  : n.event(n.e.EXTENSION_INSTALLED_SIDE_LOADED_MONTH_YEAR, { MONTH: "None", YEAR: "None" }),
                a.IS_READER && "win" === a.OS && n.event(n.e.EXTENSION_INSTALLED_SIDE_LOADED_SOURCE, { SOURCE: s.source }),
                "true" === s.repromptDone && n.event(n.e.EXTENSION_INSTALLED_SIDE_LOADED_REPROMPT);
              break;
            default:
              n.event(n.e.EXTENSION_INSTALLED_DEFAULT);
          }
          !(function (e) {
            "false" !== r.getItem("fte") &&
              setTimeout(() => {
                chrome.storage.managed.get("OpenHelpx", function (o) {
                  const a = !o || "false" !== o.OpenHelpx;
                  n.event(a ? n.e.VIEWER_FTE_OPEN_HELPX_ENABLED : n.e.VIEWER_FTE_OPEN_HELPX_DISABLED),
                    (function () {
                      try {
                        r.getItem("pdfViewer") ||
                          (r.setItem("viewer-enabled-source", "ownership-install"),
                          r.setItem("pdfViewer", "true"),
                          l.setViewerState("enabled"),
                          t.isEdge()
                            ? (m.initiateUserPolling(), n.event(n.e.USE_ACROBAT_IN_EDGE_AUTO_ENABLED))
                            : n.event(n.e.USE_ACROBAT_IN_CHROME_AUTO_ENABLED));
                      } catch (e) {
                        n.event(n.e.LOCAL_STORAGE_DISABLED);
                      }
                    })(),
                    r.setItem("fte", "false");
                  const s = t.isEdge() && ("admin" === e.installType || "sideload" === e.installType);
                  a &&
                    !s &&
                    (async function () {
                      let e = chrome.i18n.getMessage("@@ui_locale");
                      [
                        "ca",
                        "da",
                        "en_GB",
                        "es",
                        "fi",
                        "hr",
                        "it",
                        "ko",
                        "nl",
                        "pt_BR",
                        "ru",
                        "sl",
                        "tr",
                        "zh_CN",
                        "cs",
                        "de",
                        "en_US",
                        "eu",
                        "fr",
                        "hu",
                        "ja",
                        "nb",
                        "pl",
                        "ro",
                        "sk",
                        "sv",
                        "uk",
                        "zh_TW"
                      ].includes(e) || (e = "en_US");
                      const n = t.isEdge() ? "Edge" : "Chrome";
                      return `${c.getWelcomePdfUrlHost()}/dc-chrome-extension/mv/${e}/Acrobat-for-${n}.pdf`;
                    })().then((e) =>
                      t.createTab(e, (e) => {
                        const t = new Date().getTime();
                        function o(t, a) {
                          e.id == t &&
                            "complete" === a.status &&
                            (n.event(n.e.WELCOME_PDF_LOADED), chrome.tabs.onUpdated.removeListener(o));
                        }
                        (h = { ...e, timestamp: t }), chrome.tabs.onUpdated.addListener(o);
                      })
                    );
                });
              }, 2e3);
          })(o);
        }
      });
  } catch (e) {}
}
function S() {
  try {
    if (navigator.onLine || !1 === r.getItem("offlineSupportDisable")) {
      const e = r.getItem("pdfViewer"),
        t = r.getItem("killSwitch"),
        o = r.getItem("cdnUrl");
      "false" === e &&
        "on" === t &&
        (async function (e) {
          const t = new AbortController(),
            n = t.signal;
          let o = !1;
          setTimeout(() => {
            o || t.abort();
          }, 5e3);
          const a = await fetch(e, { signal: n });
          if (((o = !0), 200 === a.status)) return await a.text();
          return new Error(a.statusText);
        })(o)
          .then((e) => {
            (-1 === e.toString().indexOf("<meta name='killSwitch' content='off'/>") &&
              -1 === e.toString().indexOf('<meta name="killSwitch" content="off"/>')) ||
              (r.setItem("pdfViewer", !0),
              l.setViewerState("enabled"),
              r.setItem("killSwitch", "off"),
              n.event(n.e.VIEWER_KILL_SWITCH_OFF_SUCCESS));
          })
          .catch((e) => {
            n.event(n.e.VIEWER_KILL_SWITCH_OFF_FAILED);
          });
    }
  } catch (e) {
    n.event(n.e.VIEWER_KILL_SWITCH_OFF_FAILED);
  }
}
function w(e) {
  return (
    t && t.isChromeOnlyMessage(e) && t.isEdge() && (e += "Edge"), t && t.getTranslation ? t.getTranslation(e) : chrome.i18n.getMessage(e)
  );
}
function O(e) {
  return (e.title || w("web2pdfUntitledFileName")).replace(/[<>?:|\*"\/\\'&\.]/g, "");
}
function D(e, n) {
  if (!e && !n) return !1;
  try {
    const t = e.pageUrl || n.url,
      o = new URL(t);
    if (o.protocol && ["http:", "https:"].includes(o.protocol)) return !0;
  } catch (e) {
    t.consoleError(e);
  }
  return !1;
}
function v(e, t) {
  "convertPageContextMenu" === e.menuItemId
    ? (function (e, t) {
        D(e, t) &&
          (n.event(n.e.CONTEXT_MENU_CONVERT_PAGE),
          g().handleConversionRequest({
            tabId: t.id,
            caller: T().web2pdfCaller.MENU,
            action: T().web2pdfAction.CONVERT,
            context: T().web2pdfContext.PAGE,
            url: e.pageUrl || t.url,
            domtitle: O(t)
          }));
      })(e, t)
    : "appendPageContextMenu" === e.menuItemId
    ? (function (e, t) {
        D(e, t) &&
          (n.event(n.e.CONTEXT_MENU_APPEND_PAGE),
          g().handleConversionRequest({
            tabId: t.id,
            caller: T().web2pdfCaller.MENU,
            action: T().web2pdfAction.APPEND,
            context: T().web2pdfContext.PAGE,
            url: e.pageUrl || t.url,
            domtitle: O(t)
          }));
      })(e, t)
    : "convertLinkTargetToPDFContextMenu" === e.menuItemId
    ? (function (e, t) {
        D(e, t) &&
          (n.event(n.e.CONTEXT_MENU_CONVERT_LINK),
          g().handleConversionRequest({
            tabId: t.id,
            caller: T().web2pdfCaller.MENU,
            action: T().web2pdfAction.CONVERT,
            context: T().web2pdfContext.LINK,
            url: e.linkUrl,
            domtitle: O(t)
          }));
      })(e, t)
    : "appendLinkTargetToExistingPDFContextMenu" === e.menuItemId &&
      (function (e, t) {
        D(e, t) &&
          (n.event(n.e.CONTEXT_MENU_APPEND_LINK),
          g().handleConversionRequest({
            tabId: t.id,
            caller: T().web2pdfCaller.MENU,
            action: T().web2pdfAction.APPEND,
            context: T().web2pdfContext.LINK,
            url: e.linkUrl,
            domtitle: O(t)
          }));
      })(e, t);
}
function C() {
  const e = "true" === r.getItem("pdfViewer") ? "enabled" : "disabled";
  l.setViewerState(e);
}
function R(e) {
  const t = e.UsageMeasurement,
    n = t && "false" === t.newValue ? "false" : "true";
  r.setItem("ANALYTICS_OPT_IN_ADMIN", n);
}
function M() {
  const e = r.getItem("pdfViewer");
  let t = "neverTaken";
  "true" === e ? (t = "enabled") : "false" === e && (t = "disabled"), n.event(n.e.DEFAULT_OWNERSHIP_VIEWER_STATUS, { STATUS: t });
}
async function b(l) {
  (async () => {
    const e = await i.hasFlag("dc-cv-locale-option-page", u.NO_CALL);
    e &&
      !r.getItem("appLocale") &&
      r.setItem("appLocale", r.getItem("viewer-locale") || t.getFrictionlessLocale(chrome.i18n.getMessage("@@ui_locale"))),
      e || r.removeItem("appLocale");
  })(),
    (async function () {
      try {
        const e = await chrome.extension.isAllowedFileSchemeAccess(),
          { tabId: t, url: a } = r.getItem("localFileFteData");
        if ((r.removeItem("localFileFteData"), e && t)) {
          const { url: e } = await chrome.tabs.get(t);
          if (e === a) {
            n.event(o.LOCAL_FTE_PERMISSION_GRANTED), await chrome.tabs.reload(t);
            const e = await chrome.tabs.query({ url: "file:///*" });
            for (let t in e) {
              const { id: n, url: o } = e[t];
              o.toLowerCase().endsWith(".pdf") && chrome.tabs.reload(n);
            }
          }
        }
      } catch (e) {
        t.consoleError(e);
      }
    })(),
    setTimeout(C, 1e4),
    (function () {
      try {
        t.isEdge() && r.setItem("IsRunningInEdge", "true");
      } catch (e) {}
    })(),
    (async function () {
      if (!r.getItem("ANALYTICS_OPT_IN_ADMIN")) {
        const e = await chrome.storage.managed.get("UsageMeasurement"),
          t = e && "false" === e.UsageMeasurement ? "false" : "true";
        r.setItem("ANALYTICS_OPT_IN_ADMIN", t);
      }
    })(),
    s.getItem("startupComplete") || t.mimeReloadAllTabs();
  const c = await I();
  var m;
  r.getItem("adobeYoloEnable") && a.ADOBE_YOLO_ENABLED && !r.getWithTTL("adobe-yolo-freeze") && d.updateUserDetails(),
    await (async function () {
      const e = await chrome.runtime.getPlatformInfo();
      var t;
      (a.OS = e.os), (a.CHROME_VERSION = 0), (a.EXTENSION_VERSION = 0);
      try {
        (t = navigator.userAgent.match(/Chrome\/([0-9]+)/)) && (a.CHROME_VERSION = +t[1]);
      } catch (e) {}
      try {
        a.EXTENSION_VERSION = chrome.runtime.getManifest().version;
      } catch (e) {}
      s.getItem("startupComplete") || ("mac" === e.os ? n.event(n.e.OS_MAC_OP) : "win" === e.os && n.event(n.e.OS_WIN_OP));
    })(),
    f({ env: l, msg: c }),
    s.getItem("startupComplete") ||
      (S(),
      (function (t) {
        const n = 0 == t || (1 == t && !1 === e.NMHConnStatus) || t == a.READER_VER || t == a.ERP_READER_VER;
        chrome.contextMenus.removeAll(function () {
          a.IS_READER ||
            n ||
            (chrome.contextMenus.create({
              id: "convertPageContextMenu",
              title: w("web2pdfConvertPageContextMenu"),
              contexts: ["page"],
              documentUrlPatterns: N
            }),
            chrome.contextMenus.create({
              id: "appendPageContextMenu",
              title: w("web2pdfAppendPageContextMenu"),
              contexts: ["page"],
              documentUrlPatterns: N
            }),
            chrome.contextMenus.create({
              id: "convertLinkTargetToPDFContextMenu",
              title: w("web2pdfConvertLinkContextMenu"),
              contexts: ["link"],
              documentUrlPatterns: N
            }),
            chrome.contextMenus.create({
              id: "appendLinkTargetToExistingPDFContextMenu",
              title: w("web2pdfAppendLinkContextMenu"),
              contexts: ["link"],
              documentUrlPatterns: N
            }));
        });
      })(c.ver),
      (m = c.repromptDone),
      r.getItem("repromptAnalyticsLogged") ||
        ("true" !== m && !0 !== m) ||
        (n.event(n.e.ENABLED_AFTER_READER_REPROMPT), r.setItem("repromptAnalyticsLogged", !0)),
      n.event(n.e.EXTENSION_STARTUP),
      setTimeout(M, 1e4),
      s.setItem("startupComplete", !0));
}
function P(e) {
  const { id: t, timestamp: o } = h,
    a = new Date().getTime();
  e === t && a - o <= 15e3 && n.event(n.e.WELCOME_PDF_TAB_CLOSED);
  const s = r.getItem("signInExperimentShown");
  if (s) {
    const { currTabId: t, timestamp: o } = JSON.parse(s),
      i = a - o,
      l = "true" === r.getItem("signInExperimentSuppressed");
    e === t && i <= 15e3 && !l && n.event(n.e.SIGN_IN_PROMPT_TAB_CLOSED),
      r.removeItem("signInExperimentShown"),
      r.removeItem("signInExperimentSuppressed");
  }
}
const U = (e) => {
    const { height: t, width: n } = E;
    return { height: t, width: n, top: Math.round(0.5 * (e.height - t) + e.top), left: Math.round(0.5 * (e.width - n) + e.left) };
  },
  x = async ({ windowId: e }) => {
    const t = await chrome.windows.get(e);
    if ("fullscreen" === t?.state || "locked-fullscreen" === t?.state) return;
    const { tabId: n, url: o } = r.getItem("localFileFteData"),
      [a] = await chrome.tabs.query({ currentWindow: !0, active: !0 }),
      s = r.getItem("localFteWindow");
    if (a && a.id === n && a.url === o) {
      const { height: e, width: n, top: o, left: a } = U(t);
      await chrome.windows.update(s?.id, { height: e, width: n, left: a, top: o, focused: !0 });
    }
  },
  y = async (n) => {
    const o = await chrome.windows.get(n.windowId);
    if ("fullscreen" === o?.state || "locked-fullscreen" === o?.state) return;
    const a = await i.hasFlag("dc-cv-local-file-fte"),
      s = await (async () => {
        const e = t.isEdge(),
          n = `chrome-extension://${chrome.runtime.id}/*`,
          o = await chrome.tabs.query({ url: n }),
          a = r.getWithTTL("localFteCooldown"),
          s = r.getItem("localFteCount") || 0,
          i = r.getItem("localFteDontShowAgain"),
          l = await chrome.extension.isAllowedFileSchemeAccess();
        return !(e || l || o.length || i || a || s >= 20);
      })();
    if (a && n.url.toLowerCase().startsWith("file://") && n.url.toLowerCase().endsWith(".pdf") && s) {
      const { height: t, width: a, top: s, left: i } = U(o);
      r.setItem("localFileFteData", { tabId: n.id, url: n.url });
      const l = await chrome.windows.create({
        height: t,
        width: a,
        left: i,
        top: s,
        focused: n.active,
        type: "popup",
        url: chrome.runtime.getURL("browser/js/local-fte.html")
      });
      r.setItem("localFteWindow", l), e.registerHandlers({ closeLocalFte: () => chrome.windows.remove(l.id) });
    }
  },
  F = async (e) => {
    const { tabId: t } = r.getItem("localFileFteData");
    if (t === e) {
      const e = r.getItem("localFteWindow");
      chrome.windows.remove(e?.id);
    }
  };
e.registerHandlers({ themeChange: L, localeChange: (e) => L({ locale: e.locale }) });
export {
  b as startup,
  A as registerActions,
  P as onWelcomeTabRemoved,
  v as contextMenuOnClickHandler,
  R as updateAnalyticsOptInAdmin,
  x as refocusLocalFteWindow,
  y as openLocalFteWindow,
  F as onLocalFileClosed
};