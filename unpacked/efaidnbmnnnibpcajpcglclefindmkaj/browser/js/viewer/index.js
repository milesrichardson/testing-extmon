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
import { dcLocalStorage as e, dcSessionStorage as t } from "../../../common/local-storage.js";
import { dcTabStorage as a } from "../tab-storage.js";
import { util as n } from "../content-util.js";
import { signInUtil as r } from "./signInUtils.js";
import { privateApi as i } from "../content-privateApi.js";
import { OptionPageActions as s } from "../../../common/constant.js";
import { indexedDBScript as o } from "../../../common/indexDB.js";
import { loggingApi as c } from "../../../common/loggingApi.js";
import { updateExtUserState as l, isNewUser as d } from "../../../common/util.js";
import m from "./ResponseHeaders.js";
import u from "./BookmarkUtils.js";
await e.init(), await t.init();
const g = e.getItem("appLocale");
let p = !1;
!(function () {
  let f,
    h,
    w,
    I,
    b,
    y,
    v,
    _,
    S,
    L,
    E,
    P,
    D,
    R,
    U,
    C,
    T,
    k,
    x,
    B,
    F,
    A = "";
  const V = chrome.runtime.getURL("viewer.html"),
    M = chrome.runtime.getURL("signInHandler.html"),
    O = "file:",
    N = ["https:", "http:", O],
    $ = (e) => {
      if (!e) return !1;
      try {
        const t = new URL(e),
          a = t.protocol;
        let n = -1 !== N.indexOf(a);
        return (n = a === O ? t.pathname.toLowerCase().endsWith(".pdf") : n), n;
      } catch (e) {
        return !1;
      }
    };
  function H(e) {
    const t = a.getItem("search");
    return new URLSearchParams(t).get(e);
  }
  function z(e, t) {
    return R ? ((U = U || 1), (e.tabId = U), (e.mimeHandled = !0), chrome.runtime.sendMessage(e, t)) : chrome.runtime.sendMessage(e, t);
  }
  function W(e, t) {
    return new URLSearchParams(e).get(t) || "";
  }
  function j() {
    if (((I = W(document.location.search, "pdfurl")), !$(I))) return void (b = !1);
    !(function () {
      const e = new URLSearchParams(document.location.search),
        n = t.getItem("rtParams");
      if (n) {
        const a =
          n
            .split(",")
            .map((t) => (e.has(t) ? `&${t}=${e.get(t)}` : null))
            .join("") || "";
        t.setItem("payPalUrl", a), t.removeItem("rtParams");
      }
      e.has("dialog!dropin") && "inapp-checkout" === e.get("dialog!dropin") && a.setItem("dialog!dropin", "inapp-checkout");
    })();
    const e = a.getItem("search");
    (!e || W(e, "pdfurl") !== I || e.length < document.location.search) && a.setItem("search", document.location.search),
      (w = W(document.location.search, "pdffilename") || W(e, "pdffilename") || le(I)),
      (document.title = w);
    const n = "/" + I + location.hash;
    history.replaceState({}, w, n);
  }
  function q(t = !1) {
    if (R)
      try {
        t || z({ main_op: "viewer-type", viewer: "mime-native" }),
          setTimeout(() => {
            i.reloadWithNativeViewer({ contentLength: parseInt(f) || 0 });
          }, 100);
      } catch (e) {
        J("DCBrowserExt:Viewer:FallbackToNative:Failed");
      }
    else
      try {
        setTimeout(() => {
          chrome.tabs.getCurrent(function (t) {
            e.setItem(`reloadurl-${t.id}`, I), (window.location.href = I);
          });
        }, 500);
      } catch (e) {
        J("DCBrowserExt:Viewer:FallbackToNative:Failed");
      }
  }
  const G = (t) => {
    try {
      const a = new URL(e.getItem("cdnUrl")),
        n = [/^https:\/\/([a-zA-Z\d-]+\.){0,}(adobe|acrobat)\.com(:[0-9]*)?$/];
      return t === a.origin && !!n.find((e) => e.test(t));
    } catch (e) {
      return !1;
    }
  };
  function J(e) {
    const t = { main_op: "analytics" };
    (t.analytics = [[e]]), z(t);
  }
  function Y() {
    let e,
      t = V;
    return (
      R ? ((e = "?mimePdfUrl=" + encodeURIComponent(I)), (t = M)) : ((e = a.getItem("search")), e || (e = "?pdfurl=" + I)), new URL(t + e)
    );
  }
  const K = [
    "AdobeID",
    "openid",
    "DCAPI",
    "sign_user_read",
    "sign_user_write",
    "sign_user_login",
    "sign_library_read",
    "sign_library_write",
    "agreement_send",
    "agreement_read",
    "agreement_write",
    "ab.manage",
    "additional_info.account_type",
    "sao.ACOM_ESIGN_TRIAL",
    "widget_read",
    "widget_write",
    "workflow_read",
    "workflow_write",
    "tk_platform",
    "tk_platform_sync"
  ];
  function X(t = {}) {
    if (e.getItem("nsi"))
      return void (function (t = {}) {
        const a = Y(),
          n = e.getItem("cdnUrl"),
          r = t.sign_up ? 1 : 0,
          i = JSON.stringify({ touchp: t.touchpoint || "", signIn: !0, newSignIn: 1 }),
          s = e.getItem("theme") || "auto",
          o = `${n}?la=true&locale=${g || e.getItem("locale")}&theme=${s}&ru=${a.href}&rp=${i}&su=${r}#/susi`;
        chrome.tabs.update({ url: o, active: !0 });
      })(t);
    const r = e.getItem("imsURL"),
      i = e.getItem("viewerImsClientId"),
      s = e.getItem("imsContextId"),
      o = new URL(r + "/ims/authorize/v1?"),
      c = Y(),
      l = n.uuid(),
      d = { csrf: l };
    t.sign_up
      ? (o.searchParams.append("idp_flow", "create_account"), (c.hash = c.hash + "signUp=true"))
      : (c.hash = c.hash + "signIn=true"),
      a.setItem("csrf", l),
      o.searchParams.append("response_type", "token"),
      o.searchParams.append("client_id", i),
      t.touchpoint && (c.hash = c.hash + `;touchp=${t.touchpoint};`),
      o.searchParams.append("redirect_uri", c),
      o.searchParams.append("scope", K.join(",")),
      o.searchParams.append("dctx_id", s),
      o.searchParams.append("locale", g || e.getItem("locale")),
      o.searchParams.append("state", JSON.stringify(d)),
      chrome.tabs.update({ url: o.href, active: !0 });
  }
  function Z() {
    let e;
    (e = R ? Y().href : window.location.href), r.sign_out(e);
  }
  function Q(e) {
    let t = new URL(M);
    return (
      t.searchParams.append("socialSignIn", "true"),
      t.searchParams.append("mimePdfUrl", encodeURIComponent(I)),
      a.setItem("idp_token", e),
      t.href
    );
  }
  function ee(e) {
    R ? chrome.tabs.update({ url: Q(e), active: !0 }) : r.socialSignIn(e, Y());
  }
  function te(t = "google") {
    const r = e.getItem("viewerImsClientIdSocial"),
      i = e.getItem("imsURL"),
      s = n.uuid(),
      o = Y();
    o.hash = o.hash + "signIn=true";
    const c = new URL(i + "/ims/authorize/v1"),
      l = { ac: n.isEdge() ? "adobe.com_acrobatextension_edge_login" : "adobe.com_acrobatextension_chrome_login", csrf: s };
    a.setItem("csrf", s),
      c.searchParams.append("response_type", "token"),
      c.searchParams.append("idp_flow", "social.deep_link.web"),
      c.searchParams.append("client_id", r),
      c.searchParams.append("provider_id", t),
      c.searchParams.append("redirect_uri", o),
      c.searchParams.append("scope", K.join(",")),
      c.searchParams.append("locale", g || e.getItem("locale")),
      c.searchParams.append("state", JSON.stringify(l)),
      c.searchParams.append("xApiClientId", r),
      c.searchParams.append("xApiClientLocation ", t),
      chrome.tabs.update({ url: c.href, active: !0 });
  }
  const ae = {
    isSharePointURL: !1,
    isSharePointFeatureEnabled: !1,
    isFrictionlessEnabled: !0,
    featureFlags: [],
    isFillAndSignRegisteryEnabled: !1
  };
  class ne {
    constructor(e) {
      (this.iframeElement = void 0), (this.parentDiv = e);
    }
    createIframe = (t) => {
      const a = window.document,
        n = (e.getItem("cdnUrl"), a.createElement("iframe"));
      n.setAttribute("src", t),
        n.setAttribute("id", "dc-view-frame"),
        n.setAttribute("allowfullscreen", "allowfullscreen"),
        n.setAttribute("allow", "clipboard-read; clipboard-write;"),
        (n.style.width = "100vw"),
        (n.style.height = "100vh"),
        (n.style.border = "none"),
        (n.style.overflow = "hidden"),
        this.parentDiv.appendChild(n),
        c.info({ message: "Viewer Iframe created" }),
        (this.iframeElement = a.getElementById("dc-view-frame"));
    };
    _sendMessage = (e, t) => {
      this.iframeElement &&
        G(t) &&
        (function (e) {
          let t = Date.now();
          return new Promise(function a(n, r) {
            y && (b || R) ? n(b || R) : e && Date.now() - t >= e ? r(new Error("timeout")) : setTimeout(a.bind(this, n, r), 30);
          });
        })(1e6).then((a) => a && this.iframeElement.contentWindow.postMessage(e, t));
    };
    sendStartupConfigs = (e, a) => {
      this._sendMessage(
        { type: "nativeConfigs", nativeConfigs: ae, extUrl: encodeURI(e), returnParamsUrl: t.getItem("payPalUrl"), isInstallTypeUpsell: p },
        a
      );
    };
    sendFileMetaData = (e, t, a, n, r, i, s, o) => {
      this._sendMessage(
        {
          fileUrl: r,
          fileName: i,
          fileSize: a,
          acceptRanges: n,
          handShakeTime: t,
          type: e,
          isFrictionlessEnabled: ae.isFrictionlessEnabled,
          isReloadOrBackForward: o,
          isMimeHandled: R
        },
        s
      );
    };
    sendSubmitFormResponse = (e, t) => {
      this._sendMessage({ type: "submitForm", response: e }, t);
    };
    sendRecentUrl = async (e, t, a, n = !1) => {
      (await chrome.extension.isAllowedFileSchemeAccess()) ||
        (t = t?.filter((e) => !e.url.startsWith(`chrome-extension://${chrome.runtime.id}/viewer.html?pdfurl=file`))),
        this._sendMessage({ type: "RecentUrls", permission: e, showOverlay: n, recentUrls: t }, a);
    };
    sendProgress = (e, t, a, n) => {
      this._sendMessage({ total: t, loaded: a, type: e }, n);
    };
    sendInitialBuffer = (e, t, a, n, r) => {
      this._sendMessage({ type: e, downLoadstartTime: t, downLoadEndTime: a, buffer: n }, r);
    };
    sendBufferRanges = (e, t, a, n) => {
      this._sendMessage({ type: e, range: t, buffer: a }, n);
    };
    preview = (e, t, a, n, r, i, s) => {
      this._sendMessage({ fileSize: a, type: e, fileBuffer: t, fileName: n, downLoadstartTime: r, downLoadEndTime: i }, s);
    };
    openInAcrobatResponse = (e, t, a) => {
      this._sendMessage({ type: e, res: t }, a);
    };
    postLog = (e, t, a, n, r) => {
      this._sendMessage({ type: e, reqId: t, message: a, error: n }, r);
    };
    sendCertificateValidationResponse = (e, t) => {
      this._sendMessage({ type: "certificateValidationResponse", response: e }, t);
    };
  }
  function re(t, a) {
    try {
      (E = void 0 !== E ? E : "false" !== e.getItem("logAnalytics") && "false" !== e.getItem("ANALYTICS_OPT_IN_ADMIN")),
        E &&
          (S && h
            ? S.postLog("log", L, t, a, h.origin)
            : setTimeout(() => {
                S && h && S.postLog("log", L, t, a, h.origin);
              }, 500));
    } catch (e) {}
  }
  function ie() {
    let e;
    return (e = R ? I : window.location.href), e;
  }
  function se(t, a, n, r, i) {
    i &&
      t.forEach((e) => {
        n.has(e) && a.searchParams.append(e, n.get(e));
      }),
      r &&
        t.forEach((t) => {
          "" !== e.getItem(t) && a.searchParams.append(t, e.getItem(t));
        });
  }
  const oe = (a, n, r = "localStorage") => {
      if (n) {
        const i = "localStorage" === r ? e.getItem(a) : t.getItem(a);
        let s;
        i && i.tabsInfo ? ((s = i.tabsInfo), s.includes(n) || s.push(n)) : (s = [n]),
          "localStorage" === r ? e.setItem(a, { tabsInfo: s }) : t.setItem(a, { tabsInfo: s });
      }
    },
    ce = () => {
      try {
        !(function () {
          const e = ie();
          if (e.indexOf("newSignIn=1") > -1) return;
          if (e.indexOf("access_token") > -1 && a.getItem("signInSource")) {
            const t = a.getItem("csrf"),
              n = r.parseCSRF(new URL(e));
            a.removeItem("csrf"), (!t || !n || n !== t) && (J("DCBrowserExt:Viewer:User:Error:NonMatchingCsrfToken:FailedToLogin"), Z());
          }
        })(),
          (function () {
            try {
              let e = ie();
              e.indexOf("newSignIn=1") > -1 && r.saveAccessToken(e),
                e &&
                  e.indexOf("#") > -1 &&
                  (r.signInAnalyticsLogging(e),
                  r.checkSignInFromEditVerbPaywall(e),
                  (e = e.split("#")[0]),
                  R ? (I = e) : ((window.location.hash = e), history.replaceState(null, document.title, e)));
            } catch (e) {}
          })();
        const n = window.document.getElementById("Adobe-dc-view");
        R || (f = H("clen") || -1), (S = new ne(n));
        const s = (() => {
          try {
            const n = e.getItem("cdnUrl"),
              r = new URL(n);
            if (!G(r.origin)) return re("Invalid CDN URL detected", "Invalid Origin"), void q();
            h || (h = r);
            let i = e.getItem("viewer-locale");
            i || (i = e.getItem("locale"));
            const s = "false" !== e.getItem("logAnalytics"),
              o = "false" !== e.getItem("ANALYTICS_OPT_IN_ADMIN"),
              c = s && o ? "true" : o ? "optinOff" : "gpoOff",
              l = "true" === e.getItem("betaOptOut");
            r.searchParams.append("locale", g || i),
              r.searchParams.append("logAnalytics", c),
              r.searchParams.append("callingApp", chrome.runtime.id),
              r.searchParams.append("betaOptOut", l),
              r.searchParams.append("enableCaretMode", k),
              t.getItem("signInTp") && r.searchParams.append("touchp", t.getItem("signInTp")),
              r.searchParams.append("rvu", e.getItem("userState")?.rvu ?? null);
            const m = e.getItem("installType") || "update",
              u = e.getItem("installSource");
            r.searchParams.append("version", `${chrome.runtime.getManifest().version}:${m}`),
              r.searchParams.append("installSource", u),
              r.searchParams.append("storage", JSON.stringify(e.getItem("viewerStorage") || {})),
              "false" === e.getItem("staticFteCoachmarkShown") && r.searchParams.append("showFTECoachmark", "true"),
              ("true" !== H("googlePrint") && !0 !== C) ||
                "false" === a.getItem("googleAppsPrint") ||
                r.searchParams.append("googleAppsPrint", "true"),
              r.searchParams.append("sdp", e.getItem("sdp") ? "1" : "0"),
              r.searchParams.append("sds", e.getItem("sds") ? "1" : "0"),
              r.searchParams.append("nu", d());
            const p = ["dropin!", "provider!", "app!"],
              f = ["analytics", "logToConsole", "enableLogging", "frictionless", "sessionId", "linearization", "ev", "ao"],
              w = [
                "isReadAloudEnable",
                "isDeskTop",
                "isAcrobat",
                "theme",
                "defaultOwnerShipExperiment",
                "sessionId",
                "sgd",
                "sl",
                "ev",
                "fsm",
                "ao",
                "allownft",
                "ip",
                "rate",
                "genAI"
              ];
            let b;
            e.getItem("env"),
              (b = R ? new URLSearchParams(new URL(I).search) : new URLSearchParams(window.location.search)),
              se(f, r, b, !1, !0),
              se(w, r, b, !0, !1);
            let y = r.href;
            p.forEach((e) => {
              b.forEach((t, a) => {
                a.startsWith(e) && (y = y + "&" + a + "=" + t);
              });
            }),
              a.getItem("dialog!dropin") && (y = y + "&dialog!dropin=inapp-checkout" + t.getItem("payPalUrl"));
            const v = a.getItem("access_token");
            return a.removeItem("access_token"), `${y}${v ? `/#${v}` : ""}`;
          } catch (e) {
            J("DCBrowserExt:Viewer:Iframe:Creation:Failed"), q();
          }
        })();
        S.createIframe(s),
          l(),
          window.addEventListener("message", (a) => {
            !a.data ||
              !G(a.origin) ||
              v ||
              ("hsready" !== a.data.type && "ready" !== a.data.type) ||
              ((v = !0),
              (_ = new Date().getTime()),
              (L = a.data.requestId),
              "on" === a.data.killSwitch
                ? (J("DCBrowserExt:Viewer:KillSwitch:Turned:On"),
                  e.setItem("pdfViewer", "false"),
                  i.setViewerState("disabled"),
                  e.setItem("killSwitch", "on"),
                  R
                    ? q(!0)
                    : setTimeout(() => {
                        window.location.href = I;
                      }, 200))
                : e.getItem("killSwitch") && (J("DCBrowserExt:Viewer:KillSwitch:Turned:Off"), e.removeItem("killSwitch")),
              t.getItem("signInTp") && t.removeItem("signInTp"));
          });
      } catch (e) {
        re("Error create Iframe", e);
      }
    };
  function le(e) {
    if (w) return w;
    let t = e;
    try {
      const a = e
          .split("?")[0]
          .split("/")
          .filter((e) => e.length > 0),
        n = a.length > 0 ? a[a.length - 1] : "untitled";
      t = n;
      const r = n.length - 4;
      (n.length < 4 || n.toLowerCase().indexOf(".pdf") !== r) && (t += ".pdf");
    } catch (e) {
      re("Error in getFileNameFromURL", e);
    }
    return t;
  }
  function de(e, t) {
    return new Promise((a, n) => {
      const r = new Date().getTime(),
        i = new XMLHttpRequest();
      i.open("GET", e.url),
        (i.responseType = "arraybuffer"),
        i.setRequestHeader("Range", `bytes=${t.start}-${t.end}`),
        (i.onload = () => {
          if (4 === i.readyState && 206 === i.status) a({ buffer: i.response, startTime: r, endTime: new Date().getTime() });
          else if (200 === i.status) {
            const e = { status: i.status, statusText: i.statusText, fileSize: f, rangeBufferSize: i.response.byteLength, range: t };
            n({ message: "Unexpected response to get file buffer range", error: e });
          } else {
            const e = { status: i.status, statusText: i.statusText, fileSize: f, range: t };
            n({ message: "Invalid response to get file buffer ranger", error: e });
          }
        }),
        (i.onerror = (e) => {
          n({ message: "Error to get file buffer range", error: e });
        }),
        (i.ontimeout = (e) => {
          n({ message: "Timeout to get file buffer range due to timeout", error: e });
        }),
        i.send();
    });
  }
  function me(e, t) {
    "PDF" ===
      (function (e) {
        if (e)
          try {
            let t = new URL(e).pathname;
            return t.substr(t.lastIndexOf(".") + 1).toUpperCase();
          } catch (e) {
            return "";
          }
        return "";
      })(e) && (b = !0);
    const a = new XMLHttpRequest();
    a.open("GET", e),
      (a.responseType = "arraybuffer"),
      (a.onreadystatechange = function () {
        4 === a.readyState &&
          ((200 !== a.status && 0 != a.status) || t({ buffer: a.response, mimeType: a.getResponseHeader("content-type") }));
      }),
      a.send(null);
  }
  async function ue() {
    try {
      const e = a.getItem("bufferTabId");
      if (e) {
        const t = await o.getDataFromIndexedDB(e);
        if (t && t.fileBuffer) return (b = !0), { buffer: t.fileBuffer };
      }
    } catch (e) {}
    return {};
  }
  function ge(e, t, a) {
    return new Promise((n, r) => {
      const i = I;
      if (i.startsWith("file://")) return void me(i, n);
      const s = new XMLHttpRequest();
      var o;
      s.open("GET", i),
        (s.responseType = "arraybuffer"),
        t && s.setRequestHeader("If-Range", "randomrange"),
        (s.onreadystatechange =
          ((o = s),
          function (e) {
            if (this.readyState == this.HEADERS_RECEIVED) {
              if (
                !(function (e, t) {
                  const a = e.getResponseHeader("content-type"),
                    n = e.getResponseHeader("content-disposition");
                  if (a) {
                    const e = a.toLowerCase().split(";", 1)[0].trim();
                    if (n && /^\s*attachment[;]?/i.test(n)) return !1;
                    if ("application/pdf" === e) return !0;
                    if ("application/octet-stream" === e && n && /\.pdf(["']|$)/i.test(n)) return !0;
                  }
                  return !1;
                })(o)
              )
                return re("Fall back to native - not pdf from headers"), q();
              b = !0;
            }
          })),
        (s.onprogress = (function (e, t) {
          return function (a) {
            a.lengthComputable && ((f = a.total), e.sendProgress("progress", a.total, a.loaded, t));
          };
        })(e, a)),
        (s.onload = () => {
          if (s.status >= 200 && s.status < 400)
            n({ buffer: s.response, mimeType: s.getResponseHeader("content-type"), downLoadEndTime: new Date().getTime() });
          else {
            const e = { status: s.status, statusText: s.statusText };
            r({ message: "Invalid response fetching content", error: e });
          }
        }),
        (s.onerror = (e) => {
          r({ message: "Error to download file contents", error: e });
        }),
        (s.ontimeout = (e) => {
          r({ message: "Timeout to download file contents", error: e });
        }),
        s.send();
    });
  }
  function pe(e, t) {
    J(`DCBrowserExt:Viewer:SignIn:AdobeYolo:${e}:clicked`),
      chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
        var t = e[0] && e[0].id;
        oe("adobeYoloTabsInfo", t, "sessionStorage");
      }),
      z({ main_op: "launchJumpUrl", details: { source: e, userGuid: t } }, (t) => {
        S._sendMessage({ type: "adobeYoloJumpResponse", response: t, source: e }, h.origin);
      });
  }
  function fe(e, t, ...a) {
    R
      ? o.storeBufferAndCall(e, t, U, ...a)
      : chrome.tabs.getCurrent(function (n) {
          o.storeBufferAndCall(e, t, n.id, ...a);
        });
  }
  function he(e) {
    S._sendMessage({ type: "redirectToAcrobatWeb", response: e }, h.origin);
  }
  function we(t, a, n = !1) {
    if (R) {
      const r = e.getItem("recentFilesData");
      if (r && r.isSyncedWithHistory) {
        const e = r.recentFilesPath ? [...r.recentFilesPath] : [],
          i = [];
        for (let t = e.length - 1; t >= 0; t--)
          i.push({
            ...e[t],
            chromeHistory: !0,
            url: `chrome-extension://${chrome.runtime.id}/viewer.html?pdfurl=${e[t].url}`,
            mimeUrl: e[t].url
          });
        t.sendRecentUrl(!0, i, a, n);
      }
    } else
      chrome.history.search({ text: chrome.runtime.getURL("viewer.html"), startTime: 0, maxResults: 1e3 }, (e) => {
        const r = e.filter((e) => e.url.startsWith(chrome.runtime.getURL("viewer.html"))),
          i = [];
        for (let e = 0; e < r.length; ++e) {
          const { url: t, title: a } = r[e],
            { lastVisitTime: n } = r[e];
          i.push({ filename: a, url: t, lastVisited: n, chromeHistory: !0 });
        }
        t.sendRecentUrl(!0, i, a, n);
      });
  }
  function Ie(r, c) {
    switch (c.data.main_op) {
      case "open_in_acrobat":
      case "fillsign":
        !(async function (t, a) {
          const r = { main_op: "open_in_acrobat" };
          if (
            ("fillsign" === a.data.main_op && (r.paramName = "FillnSign"),
            (r.url = a.data.url),
            (r.click_context = "pdfviewer"),
            (r.timeStamp = Date.now()),
            a.data.fileBuffer)
          ) {
            const e = new Blob([a.data.fileBuffer], { type: "application/pdf" });
            r.dataURL = URL.createObjectURL(e);
          }
          if (
            ((T = function (e) {
              "fillsign" === a.data.main_op
                ? t.openInAcrobatResponse("FILLSIGN_IN_DESKTOP_APP", e, a.origin)
                : t.openInAcrobatResponse("OPEN_IN_DESKTOP_APP", e, a.origin),
                re(`Open In Acrobat - (${a.data.main_op}) response- ${e}`);
            }),
            e.getItem("isSharepointFeatureEnabled"))
          )
            if (ae.isSharePointURL) (r.workflow_name = "SharePoint"), (r.isSharePointURL = !0), z(r, T);
            else {
              const e = await n.checkForSharePointURL(r.url);
              (r.isSharePointURL = e), e && (r.workflow_name = "SharePoint"), z(r, T);
            }
          else z(r, T);
        })(r, c);
        break;
      case "complete_conversion":
        J("DCBrowserExt:Viewer:Verbs:Conversion:Redirection"),
          (function (e) {
            const t = {};
            (t.main_op = e.data.main_op), (t.conversion_url = decodeURIComponent(e.data.conversion_url)), (t.timeStamp = Date.now()), z(t);
          })(c);
        break;
      case "updateLocale":
        J("DCBrowserExt:Viewer:User:Locale:Updated"),
          e.setItem("viewer-locale", c.data.locale),
          z({ main_op: "localeChange", locale: c.data.locale }),
          chrome.tabs.reload();
        break;
      case "setInitialLocale":
        let l = !1;
        e.getItem("viewer-locale") || ((l = !0), e.setItem("viewer-locale", c.data.locale), J("DCBrowserExt:Viewer:User:Locale:Initial")),
          c.data.reloadReq && l && chrome.tabs.reload();
        break;
      case "error-sign-in":
        !(function (e) {
          const t = n.uuid();
          a.setItem("csrf", t);
          const r = new URL(e),
            i = Y();
          (i.hash = i.hash + `state=${t}&signInError=true`),
            r.searchParams.set("redirect_uri", i),
            chrome.tabs.update({ url: r.href, active: !0 });
        })(c.data.url);
        break;
      case "deleteViewerLocale":
        e.getItem("viewer-locale") && (e.removeItem("viewer-locale"), chrome.tabs.reload());
        break;
      case "signin":
        J("DCBrowserExt:Viewer:Ims:Sign:In"),
          a.setItem("signInSource", c.data.source),
          J(`DCBrowserExt:Viewer:Ims:Sign:In:${c.data.source}`),
          fe(c.data.fileBuffer, X, { touchpoint: c.data.tp });
        break;
      case "googleSignIn":
        J("DCBrowserExt:Viewer:Ims:Sign:In"),
          J(`DCBrowserExt:Viewer:Ims:Sign:In:${c.data.source}`),
          a.setItem("signInSource", c.data.source),
          fe(c.data.fileBuffer, te, c.data.application);
        break;
      case "signup":
        J("DCBrowserExt:Viewer:Ims:Sign:Up"),
          a.setItem("signUpSource", c.data.source),
          J(`DCBrowserExt:Viewer:Ims:Sign:Up:${c.data.source}`),
          fe(c.data.fileBuffer, X, { sign_up: !0 });
        break;
      case "reload_viewer":
        chrome.tabs.reload();
        break;
      case "upsell_event":
        !(function (e) {
          if (e && e.url) {
            const a = new URL(decodeURIComponent(e.url));
            e.returnUrlParams && t.setItem("rtParams", e.returnUrlParams.toString()),
              "_blank" === e.target ? chrome.tabs.create({ url: a.href, active: !0 }) : chrome.tabs.update({ url: a.href, active: !0 });
          }
        })(c.data);
        break;
      case "upsell_remove_urlParams":
        t.removeItem("rtParams"), t.removeItem("payPalUrl"), a.removeItem("dialog!dropin");
        break;
      case "fetchLocalRecents":
        const d = new URL(e.getItem("cdnUrl")).origin;
        chrome.permissions.contains({ permissions: ["history"], origins: ["https://www.google.com/"] }, (e) => {
          if (c.data.fetchRecents) {
            const t = c.data.showOverlay;
            e || R
              ? we(S, d, t)
              : (J("DCBrowserExt:Permissions:History:DialogTriggered"),
                chrome.permissions.request({ permissions: ["history"], origins: ["https://www.google.com/"] }, (e) => {
                  e
                    ? (J("DCBrowserExt:Permissions:History:Granted"), we(S, d, t))
                    : (J("DCBrowserExt:Permissions:History:Denied"), S.sendRecentUrl(!1, null, d));
                }));
          } else e || R ? S.sendRecentUrl(!0, null, d) : S.sendRecentUrl(!1, null, d);
        });
        break;
      case "socialSignIn":
        J("DCBrowserExt:Viewer:Ims:Sign:In"),
          J(`DCBrowserExt:Viewer:Ims:Sign:In:${c.data.source}`),
          a.setItem("signInSource", c.data.source),
          fe(c.data.fileBuffer, ee, c.data.idp_token);
        break;
      case "openRecentFileLink":
        const m = {};
        (m.main_op = c.data.main_op), (m.recent_file_url = decodeURIComponent(c.data.recent_file_url)), z(m);
        break;
      case "userSubscriptionData":
        if (R) {
          const e = {};
          (e.eventType = c.data.main_op),
            (e.userSubscriptionData = c.data.userSubscriptionData),
            (e.data = c.data),
            (e.main_op = c.data.main_op);
          z(e, function (e) {
            e && "showUninstallPopUp" === e.main_op && S._sendMessage({ type: "showUninstallPopUp" }, h.origin);
          });
        }
        break;
      case "uninstall":
        R && z({ main_op: "uninstall", defaultUrl: I });
        break;
      case "submit_form":
        fetch(c.data.resource, c.data.options)
          .then((e) => {
            S.sendSubmitFormResponse(e.ok, c.origin);
          })
          .catch(() => {
            S.sendSubmitFormResponse(!1, c.origin);
          });
        break;
      case "ownerShipExperimentShown":
        e.removeItem("defaultOwnerShipExperiment");
        break;
      case "openAcrobatOptions":
        chrome.runtime.openOptionsPage(), J(`DCBrowserExt:Viewer:ManagePref:clicked:${c.data.source}`);
        break;
      case "encryptedWriteFile":
        ({ secureString: A } = c.data), _e(document.title);
        break;
      case "launchJump":
        fe(c.data.fileBuffer, pe, c.data.source, c.data.userGuid);
        break;
      case "saveAsEvent":
        !(async function (e) {
          try {
            if ((J("DCBrowserExt:Viewer:SaveToMyComputer:" + (B ? "fileHandlerExist" : "fileHandlerNotExist")), B)) F = !1;
            else {
              const t = {
                suggestedName: `${e.fileName}.pdf`,
                types: [{ description: "PDF file", accept: { "application/pdf": [".pdf"] } }]
              };
              (B = await window.showSaveFilePicker(t)), (F = !0), _e(B?.name);
            }
            S._sendMessage({ type: "newSaveToLocalResponse", newAsset: F, updatedFileName: B?.name }, h.origin);
          } catch (e) {
            (B = null), re("Save As Handler Error", e), S._sendMessage({ type: "newSaveToLocalResponse", error: e }, h.origin);
          }
        })(c.data);
        break;
      case "downloadFile":
        !(async function (e) {
          try {
            const t = new Blob([e.fileBuffer], { type: "application/pdf" }),
              a = URL.createObjectURL(t);
            await chrome.downloads.download({ url: a, filename: `${e.fileName}.pdf`, conflictAction: "uniquify", saveAs: !0 });
          } catch (e) {
            re("downloadFile error", e), S._sendMessage({ type: "downloadFileError" }, h.origin);
          }
        })(c.data);
        break;
      case "rememberSaveLocationPreference":
        !(function (t) {
          let a = "";
          t.cloudStorage && !e.getItem("selectedSaveLocationPreference")
            ? (a = "PreferenceMigrationSuccess")
            : t.cloudStorage || (a = "SaveDialogRememberMe");
          a && J(`DCBrowserExt:Viewer:ChangeSaveLocationPreference:${a}`);
          (!t.cloudStorage || (t.cloudStorage && !e.getItem("selectedSaveLocationPreference"))) &&
            (e.setItem("saveLocation", t.saveLocation),
            e.setItem("selectedSaveLocationPreference", !0),
            z({
              panel_op: "options_page",
              requestType: s.OPTIONS_UPDATE_TOGGLE,
              toggleId: "saveLocationPreferenceTitle",
              toggleVal: t.saveLocation
            }));
        })(c.data);
        break;
      case "appRenderingDone":
        xe();
        break;
      case "saveFileBuffer":
        fe(c.data.fileBuffer);
        break;
      case "deleteFileBuffer":
        const g = a.getItem("bufferTabId");
        g && o.deleteDataFromIndexedDB(g), a.removeItem("bufferTabId");
      case "appRenderingDone":
        xe();
        break;
      case "writeToLocalSavedFile":
        !(async function (e) {
          try {
            const t = await B.createWritable();
            await t.write(e.fileBuffer),
              await t.close(),
              S._sendMessage({ type: "newSaveToLocalResponse", newAsset: F, updatedFileName: B?.name, isFileWriteStage: !0 }, h.origin);
          } catch (e) {
            (B = null),
              re("Write to Local File Error", e),
              S._sendMessage({ type: "newSaveToLocalResponse", error: e, isFileWriteStage: !0 }, h.origin);
          }
        })(c.data);
        break;
      case "bookmarkWeb":
        u(c.data.url, he, J);
        break;
      case "validateEdgeCertificateForDigitalSignature":
        i.validateCertificate(c.data).then((e) => S.sendCertificateValidationResponse(e, c.origin));
    }
  }
  function be(e) {
    try {
      const t = new TextDecoder("utf-8").decode(e.buffer);
      let a = !1;
      -1 != t.indexOf("Linearized 1")
        ? ((a = !0), J("DCBrowserExt:Viewer:Linearization:Linearized:Version:1"))
        : -1 != t.indexOf("Linearized")
        ? J("DCBrowserExt:Viewer:Linearization:Linearized:Version:Other")
        : J("DCBrowserExt:Viewer:Linearization:Linearized:False"),
        S._sendMessage({ type: "Linearization", linearized: a }, h.origin);
    } catch (e) {
      J("DCBrowserExt:Viewer:Linearization:Linearized:Detection:Failed"), re("Linearization Detection failed", e);
    }
  }
  function ye(t, a, n, r) {
    n.then((n) => {
      const i = n.downLoadEndTime,
        s = n.buffer;
      n.buffer.byteLength;
      t.preview("preview", s, f, w, r, i, a.origin),
        S._sendMessage(
          {
            type: "NavigationStartTime",
            time: window.performance && window.performance.timing && window.performance.timing.navigationStart
          },
          h.origin
        ),
        !0 === e.getItem("isSaveLocationPrefEnabled") &&
          S._sendMessage({ type: "changeSaveLocationPreference", saveLocation: e.getItem("saveLocation"), onLoad: !0 }, h.origin);
    })
      .catch((e) => (J("DCBrowserExt:Viewer:Error:FallbackToNative:FileDownload:Failed"), q()))
      .finally(() => {
        e.removeItem("sessionStarted");
      });
  }
  class ve {
    constructor() {
      this.request = { main_op: "analytics" };
    }
    analytics = (e) => {
      this.request.analytics || (this.request.analytics = []), this.request.analytics.push([e]);
    };
    sendAnalytics = () => {
      z(this.request);
    };
  }
  function _e(e) {
    e && (document.title = e + A);
  }
  const Se = (t, a, n) => {
      const r = n ? "viewerStorage" : "viewerStorageAsync",
        i = e.getItem(r) || {};
      (i[t] = a), e.setItem(r, i);
    },
    Le = (t) => {
      const a = e.getItem("viewerStorage") || {},
        n = e.getItem("viewerStorageAsync") || {};
      delete a[t], delete n[t], e.setItem("viewerStorage", a), e.setItem("viewerStorageAsync", n);
    };
  function Ee(t, n, r, i) {
    return (s) => {
      try {
        if (
          s.data &&
          s.origin &&
          G(s.origin) &&
          ((e) => {
            try {
              return e && e.source && e.source.top.location.origin === "chrome-extension://" + chrome.runtime.id;
            } catch (e) {
              return !1;
            }
          })(s)
        ) {
          if (s.data.main_op) return Ie(t, s);
          switch (s.data.type) {
            case "ready":
              if (
                (R
                  ? (async function (t, n, r, i) {
                      let s = new ve();
                      y = !0;
                      const o = I;
                      document.title = w;
                      const c = x.getHeaderValue("accept-ranges"),
                        l = !a.getItem("bufferTabId") && c && "bytes" === c.toLowerCase() ? "true" : "false";
                      t.sendFileMetaData("metadata", _, f, l, o, w, n.origin, !1),
                        Re(),
                        r
                          ? (s.analytics("DCBrowserExt:Viewer:Linearization:Range:Supported"),
                            r
                              .then((e) => {
                                t.sendInitialBuffer("initialBuffer", e.startTime, e.endTime, e.buffer, n.origin), be(e);
                              })
                              .catch((e) => {
                                t.sendInitialBuffer("initialBuffer", 0, 0, -1, n.origin),
                                  s.analytics("DCBrowserExt:Viewer:Error:Linearization:InitialBufiled");
                              }))
                          : s.analytics("DCBrowserExt:Viewer:Linearization:Range:Not:Supported"),
                        e.removeItem("isReload"),
                        e.removeItem("isBackForward");
                      const d = window.performance && window.performance.timing && window.performance.timing.navigationStart,
                        m = ue();
                      (await m).buffer
                        ? ye(t, n, m, d)
                        : (fetch(i.streamUrl)
                            .then((e) => {
                              let a = 0;
                              return new Response(
                                new ReadableStream({
                                  start(r) {
                                    const i = e.body.getReader();
                                    !(function e() {
                                      i.read()
                                        .then(({ done: i, value: s }) => {
                                          i
                                            ? r.close()
                                            : ((a += s.byteLength), t.sendProgress("progress", f, a, n.origin), r.enqueue(s), e());
                                        })
                                        .catch((e) => {
                                          r.error(e);
                                        });
                                    })();
                                  }
                                })
                              );
                            })
                            .then((e) => e.arrayBuffer())
                            .then((a) => {
                              (f = a.byteLength),
                                t.preview("preview", a, a.byteLength, w, d, new Date().getTime(), n.origin),
                                S._sendMessage(
                                  {
                                    type: "NavigationStartTime",
                                    time: window.performance && window.performance.timing && window.performance.timing.navigationStart
                                  },
                                  n.origin
                                ),
                                !0 === e.getItem("isSaveLocationPrefEnabled") &&
                                  S._sendMessage(
                                    { type: "changeSaveLocationPreference", saveLocation: e.getItem("saveLocation"), onLoad: !0 },
                                    n.origin
                                  );
                            })
                            .catch((e) => (s.analytics("DCBrowserExt:Viewer:Error:FallbackToNative:FileDownload:Failed"), q())),
                          s.sendAnalytics()),
                        re("Viewer loaded");
                    })(t, s, r, n)
                  : (function (e, t, n, r, i) {
                      y = !0;
                      const s = I,
                        o = (!a.getItem("bufferTabId") && H("chunk")) || "false",
                        c = window.performance
                          .getEntriesByType("navigation")
                          .map((e) => e.type)
                          .includes("reload"),
                        l = window.performance
                          .getEntriesByType("navigation")
                          .map((e) => e.type)
                          .includes("back_forward");
                      e.sendFileMetaData("metadata", _, f, o, encodeURI(s), w, t.origin, c || l),
                        Re(),
                        n
                          ? (J("DCBrowserExt:Viewer:Linearization:Range:Supported"),
                            n
                              .then((a) => {
                                e.sendInitialBuffer("initialBuffer", a.startTime, a.endTime, a.buffer, t.origin), be(a);
                              })
                              .catch((a) => {
                                e.sendInitialBuffer("initialBuffer", 0, 0, -1, t.origin),
                                  J("DCBrowserExt:Viewer:Error:Linearization:InitialBuffer:Failed");
                              }))
                          : (J("DCBrowserExt:Viewer:Linearization:Range:Not:Supported"),
                            e.sendInitialBuffer("initialBuffer", 0, 0, -1, t.origin)),
                        ye(e, t, r, i),
                        re("Viewer loaded");
                    })(t, s, r, n, i),
                z({ main_op: "getUserInfoFromAcrobat" }, (e) => {
                  S._sendMessage({ type: "adobeYoloUserData", ...e }, h.origin);
                }),
                s.data.visitorID)
              ) {
                const t = e.getItem("viewerVisitorID");
                e.setItem("viewerVisitorID", s.data.visitorID),
                  t && t !== s.data.visitorID && J("DCBrowserExt:Analytics:viewerVisitorID:MCMID:Changed");
              }
              break;
            case "getFileBufferRange":
              !(function (e, t) {
                de({ url: I }, e.data.range)
                  .then((a) => {
                    D || (J("DCBrowserExt:Viewer:Linearization:Range:Called"), (D = !0)),
                      t.sendBufferRanges("bufferRanges", `${e.data.range.start}-${e.data.range.end}`, a.buffer, e.origin);
                  })
                  .catch((a) => {
                    J("DCBrowserExt:Viewer:Error:Linearization:Range:Failed"),
                      t.sendBufferRanges("bufferRanges", `${e.data.range.start}-${e.data.range.end}`, -1, e.origin);
                  });
              })(s, t);
              break;
            case "previewFailed":
              P || (J("DCBrowserExt:Viewer:Error:FallbackToNative:Preview:Failed"), (P = !0), q());
              break;
            case "lastUserGuid":
              e.setItem("lastUserGuid", s.data.value);
              break;
            case "signin":
              J("DCBrowserExt:Viewer:Ims:Sign:In"), X();
              break;
            case "signout":
              J("DCBrowserExt:Viewer:Ims:Sign:Out"),
                e.removeItem("viewer-locale"),
                e.removeItem("userDetailsFetchedTimeStamp"),
                e.removeItem("discoveryExpiryTime"),
                e.removeItem("viewer-locale"),
                fe(s.data.fileBuffer, Z);
              break;
            case "googleAppsPrintShown":
              a.setItem("googleAppsPrint", "false"), J("DCBrowserExt:Viewer:GoogleApps:Print:Shown");
              break;
            case "signInExperimentShown":
              chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
                const a = t[0],
                  n = new Date().getTime();
                e.setItem("signInExperimentShown", JSON.stringify({ currTabId: a.id, timestamp: n }));
              });
              break;
            case "disableViewer":
              e.setItem("pdfViewer", "false"), chrome.tabs.reload();
              break;
            case "signInExperimentClosed":
            case "signInExperimentSkipped":
              e.setItem("signInExperimentSuppressed", "true");
              break;
            case "enableBeta":
              e.setItem("betaOptOut", "false"), chrome.tabs.reload();
              break;
            case "disableBeta":
              e.setItem("betaOptOut", "true"), chrome.tabs.reload();
              break;
            case "updateTitle":
              _e(s.data.title);
              break;
            case "viewer_set_item":
              Se(s.data.key, s.data.value, s.data.startup);
              break;
            case "viewer_remove_item":
              Le(s.data.key);
          }
        }
      } catch (e) {
        J("DCBrowserExt:Viewer:Error:MessageHandler:Unknown");
      }
    };
  }
  function Pe() {
    if (!v) return J("DCBrowserExt:Viewer:Error:Handshake:TimedOut"), q(), !1;
  }
  const De = (t) => {
    try {
      const n = x.getHeaderValue("content-length");
      f = n;
      const r = x.getHeaderValue("accept-ranges"),
        i = r && "bytes" === r.toLowerCase();
      (I = t.originalUrl),
        ce(),
        (w = (function () {
          let e;
          const t = x.getHeaderValue("content-disposition");
          if (t && /\.pdf(["']|$)/i.test(t)) {
            const a = /filename[^;=\n\*]?=((['"]).*?\2|[^;\n]*)/.exec(t);
            null != a && a.length > 1 && (e = a[1].replace(/['"]/g, ""));
          }
          return e || (e = le(I)), decodeURIComponent(e);
        })());
      const s = { url: I },
        o = new URL(e.getItem("cdnUrl"));
      h || (h = o);
      let c = null;
      const l = "false" !== H("linearization") && !a.getItem("bufferTabId");
      l && i && n > 0 && (c = de(s, { start: 0, end: 1024 })), window.addEventListener("message", Ee(S, t, c)), Ue(), setTimeout(Pe, 25e3);
    } catch (e) {
      re("InitMimeHandlerScript failed", e), q();
    }
  };
  function Re() {
    if (a.getItem("signInAction")) {
      const e = a.getItem("signInAction");
      S._sendMessage(
        { type: "signInInformation", action: e, source: "signIn" === e ? a.getItem("signInSource") : a.getItem("signUpSource") },
        h.origin
      ),
        a.removeItem("signInSource"),
        a.removeItem("signUpSource"),
        a.removeItem("signInAction");
    }
  }
  async function Ue() {
    chrome.storage.onChanged.addListener((t, a) => {
      "local" === a &&
        Object.entries(t).forEach(([t, { newValue: a }]) => {
          if (("theme" === t && S._sendMessage({ type: "themeChange", theme: a }, h.origin), "ANALYTICS_OPT_IN_ADMIN" === t)) {
            const t = "false" !== e.getItem("logAnalytics"),
              n = "false" !== a;
            S._sendMessage({ type: "analyticsTrackingChange", value: t && n }, h.origin);
          }
          "saveLocation" === t && S._sendMessage({ type: "changeSaveLocationPreference", saveLocation: a }, h.origin);
        });
    }),
      await (async function () {
        return (p = await i.isInstalledViaUpsell()), p;
      })(),
      S._sendMessage({ type: "setAsyncStorage", storage: e.getItem("viewerStorageAsync") }, h.origin),
      z({ main_op: "viewer-startup", url: I, startup_time: Date.now(), viewer: !0 }, (e) => {
        (ae.isSharePointURL = !!e.isSharePointURL),
          (ae.isSharePointFeatureEnabled = !!e.isSharePointEnabled),
          (ae.isFrictionlessEnabled = !!e.isFrictionlessEnabled),
          (ae.featureFlags = e.featureFlags),
          (ae.isFillAndSignRegisteryEnabled = e.isFillnSignEnabled);
        const t = Y().href;
        S.sendStartupConfigs(t, h.origin);
      }),
      z({ main_op: "get-features&groups", cachePurge: "LAZY" }, (e) => {
        S._sendMessage(
          { type: "featureGroups", featureGroups: e.featureGroups, featureFlags: e.featureFlags, ffResponse: e.ffResponse },
          h.origin
        );
      }),
      R &&
        (setTimeout(() => oe("loadedTabsInfo", U), 2e3),
        (function () {
          const t = e.getItem("recentFilesData");
          if (t && t.isSyncedWithHistory) {
            const a = t.recentFilesPath ? [...t.recentFilesPath] : [];
            1e3 === a.length && a.shift(),
              a.push({ url: I, filename: w, lastVisited: Date.now() }),
              (t.recentFilesPath = a),
              e.setItem("recentFilesData", t);
          } else
            chrome.permissions.contains({ permissions: ["history"], origins: ["https://www.google.com/"] }, (t) => {
              if (t)
                chrome.history.search({ text: chrome.runtime.getURL("viewer.html"), startTime: 0, maxResults: 999 }, (t) => {
                  const a = t.filter((e) => e.url.startsWith(chrome.runtime.getURL("viewer.html"))),
                    n = [];
                  for (let e = a.length - 1; e >= 0; e--) {
                    const { url: t, title: r, lastVisitTime: i } = a[e];
                    let s = t;
                    const o = t.split("viewer.html");
                    o[1] && ((s = W(o[1], "pdfurl")), n.push({ url: s, filename: r, lastVisited: i }));
                  }
                  n.push({ url: I, filename: w, lastVisited: Date.now() }),
                    e.setItem("recentFilesData", { recentFilesPath: n, isSyncedWithHistory: !0 });
                });
              else {
                const t = [];
                t.push({ url: I, filename: w, lastVisited: Date.now() }),
                  e.setItem("recentFilesData", { recentFilesPath: t, isSyncedWithHistory: !0 });
              }
            });
        })());
  }
  function Ce(e) {
    const t = document.getElementById("__acrobatDialog__");
    t && 0 !== t.length
      ? t && "none" === t.style.display && "visible" === e.frame_visibility
        ? (t.style.display = "block")
        : t && e.trefoilClick && (delete e.trefoilClick, t.remove())
      : (function (e) {
          const t = e.base64PDF;
          delete e.base64PDF;
          const a = `message=${encodeURIComponent(JSON.stringify(e))}`;
          e.base64PDF = t;
          const n = !g && null === e.locale;
          let r = e.version > 13 || n ? "210px" : "130px",
            i = "block";
          "hidden" === e.frame_visibility && (i = "none");
          const s = document.createElement("iframe");
          s.setAttribute("src", `${chrome.runtime.getURL("browser/js/frame.html")}?${a}`),
            s.setAttribute("id", "__acrobatDialog__"),
            (s.style.border = "0px"),
            (s.style.zIndex = "999999999999"),
            (s.style.position = "fixed"),
            (s.style.top = "-5px"),
            (s.style.right = "80px"),
            (s.style.width = "294px"),
            (s.style.height = r),
            (s.style.display = i),
            (s.style.margin = "auto"),
            document.getElementById("trefoil_m").appendChild(s);
        })(e);
  }
  function Te(e) {
    z({ main_op: "caret_mode_toggle_handler", toggleCaretModeValue: e });
  }
  function ke(e) {
    if (
      (e.panel_op &&
        (1 == e.trefoilClick
          ? (delete e.trefoilUI, delete e.newUI, Ce(e))
          : !0 === e.reload_in_native && (delete e.is_viewer, chrome.tabs.reload(e.tabId))),
      "relay_to_content" !== e.main_op || "dismiss" !== e.content_op)
    )
      return (
        "relay_to_content" === e.main_op && "caret_mode_toggle_handler" === e.content_op
          ? S._sendMessage({ type: "toggleCaretMode", toggleCaretModeValue: e.status }, h.origin)
          : "reset" === e.main_op
          ? S._sendMessage({ type: "toggleAnalytics", logAnalytics: e.analytics_on }, h.origin)
          : "showUninstallPopUp" === e.main_op
          ? S._sendMessage({ type: "showUninstallPopUp" }, h.origin)
          : "jumpUrlSuccess" === e.main_op &&
            (!R || (e.tabInfo && e.tabInfo.includes(U))) &&
            S._sendMessage({ type: "adobeYoloJumpUrlSuccess" }, h.origin),
        !1
      );
    {
      delete e.content_op, delete e.trefoilClick, delete e.reload_in_native;
      let t = document.getElementById("__acrobatDialog__");
      t && (t.remove(), (t = null));
    }
  }
  function xe() {
    const t = e.getItem("userState");
    let a = !1;
    if ((void 0 !== t?.rvu && (a = !0), !0 !== t.rvu)) {
      const t = { rvu: a };
      e.setItem("userState", t);
    }
  }
  document.addEventListener(
    "DOMContentLoaded",
    (function (e) {
      const t = new Date().getTime();
      let a = window.setInterval(function () {
        ((function () {
          const e = document.getElementById("dc-view-frame");
          return e && e.contentWindow && 1 === e.contentWindow.length;
        })() ||
          new Date().getTime() - t > 15e3) &&
          (window.clearInterval(a), e.call(this));
      }, 200);
    })(function () {
      const e = document.getElementById("dc-view-frame");
      e && e.contentWindow && e.contentWindow.focus();
    })
  ),
    void 0 !== chrome.runtime &&
      i.isMimeHandlerAvailable().then(async function (t) {
        if ((chrome.runtime.onMessage.addListener(ke), t)) {
          if (((R = !0), !window.navigator.onLine && e.getItem("offlineSupportDisable"))) return void q();
          e.getItem("sessionStarted") || (e.setItem("sessionId", n.uuid()), e.setItem("sessionStarted", !0));
          const t = (await i.getStreamInfo()) || {};
          (x = new m(t.responseHeaders)), (U = t.tabId);
          let a = await z({ main_op: "check-is-google-print" });
          (C = a && a.isGooglePrint),
            (k = await i.caretModeStatus()),
            i.addCaretModeListener(Te),
            z({ main_op: "viewer-preview", startup_time: Date.now(), viewer: !0 }, () => De(t));
        } else
          j(),
            (async () => {
              try {
                if (!$(I)) return void (b = !1);
                ce();
                const t = H("clen") || -1,
                  n = H("chunk") || !1,
                  r = "false" !== H("linearization") && !a.getItem("bufferTabId"),
                  i = { url: I },
                  s = new Date().getTime(),
                  o = new URL(e.getItem("cdnUrl"));
                (w = H("pdffilename") || le(I)), (document.title = decodeURIComponent(w)), h || (h = o);
                let c = null;
                const l = r && n && t > 0;
                l && (c = de(i, { start: 0, end: 1024 }));
                const d = ue(),
                  m = (await d).buffer ? d : ge(S, l, o.origin);
                window.addEventListener("message", Ee(S, m, c, s)), setTimeout(Pe, 25e3);
              } catch (e) {
                re("InitScript failed", e), q();
              }
            })(),
            Ue();
      });
})();
