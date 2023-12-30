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
import l from "./ResponseHeaders.js";
import d from "./BookmarkUtils.js";
await e.init(), await t.init();
const m = e.getItem("appLocale");
let u = !1;
!(function () {
  let g,
    f,
    p,
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
    T,
    C,
    B,
    x,
    k = "";
  const F = chrome.runtime.getURL("viewer.html"),
    A = chrome.runtime.getURL("signInHandler.html"),
    V = "file:",
    M = ["https:", "http:", V],
    O = (e) => {
      if (!e) return !1;
      try {
        const t = new URL(e),
          a = t.protocol;
        let n = -1 !== M.indexOf(a);
        return (n = a === V ? t.pathname.toLowerCase().endsWith(".pdf") : n), n;
      } catch (e) {
        return !1;
      }
    };
  function N(e) {
    const t = a.getItem("search");
    return new URLSearchParams(t).get(e);
  }
  function H(e, t) {
    return P ? ((D = D || 1), (e.tabId = D), (e.mimeHandled = !0), chrome.runtime.sendMessage(e, t)) : chrome.runtime.sendMessage(e, t);
  }
  function z(e, t) {
    return new URLSearchParams(e).get(t) || "";
  }
  function $() {
    if (((h = z(document.location.search, "pdfurl")), !O(h))) return void (w = !1);
    !(function () {
      const e = new URLSearchParams(document.location.search),
        a = t.getItem("rtParams");
      if (a) {
        const n =
          a
            .split(",")
            .map((t) => (e.has(t) ? `&${t}=${e.get(t)}` : null))
            .join("") || "";
        t.setItem("payPalUrl", n), t.removeItem("rtParams");
      }
    })();
    const e = a.getItem("search");
    (!e || z(e, "pdfurl") !== h || e.length < document.location.search) && a.setItem("search", document.location.search),
      (p = z(document.location.search, "pdffilename") || z(e, "pdffilename") || oe(h)),
      (document.title = p);
    const n = "/" + h + location.hash;
    history.replaceState({}, p, n);
  }
  function W(t = !1) {
    if (P)
      try {
        t || H({ main_op: "viewer-type", viewer: "mime-native" }),
          setTimeout(() => {
            i.reloadWithNativeViewer({ contentLength: parseInt(g) || 0 });
          }, 100);
      } catch (e) {
        j("DCBrowserExt:Viewer:FallbackToNative:Failed");
      }
    else
      try {
        setTimeout(() => {
          chrome.tabs.getCurrent(function (t) {
            e.setItem(`reloadurl-${t.id}`, h), (window.location.href = h);
          });
        }, 500);
      } catch (e) {
        j("DCBrowserExt:Viewer:FallbackToNative:Failed");
      }
  }
  const q = (t) => {
    try {
      const a = new URL(e.getItem("cdnUrl")),
        n = [/^https:\/\/([a-zA-Z\d-]+\.){0,}(adobe|acrobat)\.com(:[0-9]*)?$/];
      return t === a.origin && !!n.find((e) => e.test(t));
    } catch (e) {
      return !1;
    }
  };
  function j(e) {
    const t = { main_op: "analytics" };
    (t.analytics = [[e]]), H(t);
  }
  function G() {
    let e,
      t = F;
    return (
      P ? ((e = "?mimePdfUrl=" + encodeURIComponent(h)), (t = A)) : ((e = a.getItem("search")), e || (e = "?pdfurl=" + h)), new URL(t + e)
    );
  }
  const J = [
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
    "workflow_write"
  ];
  function Y(t = {}) {
    const r = e.getItem("imsURL"),
      i = e.getItem("viewerImsClientId"),
      s = e.getItem("imsContextId"),
      o = new URL(r + "/ims/authorize/v1?"),
      c = G(),
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
      o.searchParams.append("scope", J.join(",")),
      o.searchParams.append("dctx_id", s),
      o.searchParams.append("locale", m || e.getItem("locale")),
      o.searchParams.append("state", JSON.stringify(d)),
      chrome.tabs.update({ url: o.href, active: !0 });
  }
  function K() {
    let e;
    (e = P ? G().href : window.location.href), r.sign_out(e);
  }
  function X(e) {
    let t = new URL(A);
    return (
      t.searchParams.append("socialSignIn", "true"),
      t.searchParams.append("mimePdfUrl", encodeURIComponent(h)),
      a.setItem("idp_token", e),
      t.href
    );
  }
  function Z(e) {
    P ? chrome.tabs.update({ url: X(e), active: !0 }) : r.socialSignIn(e, G());
  }
  function Q(t = "google") {
    const r = e.getItem("viewerImsClientIdSocial"),
      i = e.getItem("imsURL"),
      s = n.uuid(),
      o = G();
    o.hash = o.hash + "signIn=true";
    const c = new URL(i + "/ims/authorize/v1"),
      l = { ac: n.isEdge() ? "adobe.com_acrobatextension_edge_login" : "adobe.com_acrobatextension_chrome_login", csrf: s };
    a.setItem("csrf", s),
      c.searchParams.append("response_type", "token"),
      c.searchParams.append("idp_flow", "social.deep_link.web"),
      c.searchParams.append("client_id", r),
      c.searchParams.append("provider_id", t),
      c.searchParams.append("redirect_uri", o),
      c.searchParams.append("scope", J.join(",")),
      c.searchParams.append("locale", m || e.getItem("locale")),
      c.searchParams.append("state", JSON.stringify(l)),
      c.searchParams.append("xApiClientId", r),
      c.searchParams.append("xApiClientLocation ", t),
      chrome.tabs.update({ url: c.href, active: !0 });
  }
  const ee = {
    isSharePointURL: !1,
    isSharePointFeatureEnabled: !1,
    isFrictionlessEnabled: !0,
    featureFlags: [],
    isFillAndSignRegisteryEnabled: !1
  };
  class te {
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
        q(t) &&
        (function (e) {
          let t = Date.now();
          return new Promise(function a(n, r) {
            I && (w || P) ? n(w || P) : e && Date.now() - t >= e ? r(new Error("timeout")) : setTimeout(a.bind(this, n, r), 30);
          });
        })(1e6).then((a) => a && this.iframeElement.contentWindow.postMessage(e, t));
    };
    sendStartupConfigs = (e, a) => {
      this._sendMessage(
        { type: "nativeConfigs", nativeConfigs: ee, extUrl: encodeURI(e), returnParamsUrl: t.getItem("payPalUrl"), isInstallTypeUpsell: u },
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
          isFrictionlessEnabled: ee.isFrictionlessEnabled,
          isReloadOrBackForward: o,
          isMimeHandled: P
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
  }
  function ae(t, a) {
    try {
      (S = void 0 !== S ? S : "false" !== e.getItem("logAnalytics") && "false" !== e.getItem("ANALYTICS_OPT_IN_ADMIN")),
        S &&
          (v && f
            ? v.postLog("log", _, t, a, f.origin)
            : setTimeout(() => {
                v && f && v.postLog("log", _, t, a, f.origin);
              }, 500));
    } catch (e) {}
  }
  function ne() {
    let e;
    return (e = P ? h : window.location.href), e;
  }
  function re(t, a, n, r, i) {
    i &&
      t.forEach((e) => {
        n.has(e) && a.searchParams.append(e, n.get(e));
      }),
      r &&
        t.forEach((t) => {
          "" !== e.getItem(t) && a.searchParams.append(t, e.getItem(t));
        });
  }
  const ie = (a, n, r = "localStorage") => {
      if (n) {
        const i = "localStorage" === r ? e.getItem(a) : t.getItem(a);
        let s;
        i && i.tabsInfo ? ((s = i.tabsInfo), s.includes(n) || s.push(n)) : (s = [n]),
          "localStorage" === r ? e.setItem(a, { tabsInfo: s }) : t.setItem(a, { tabsInfo: s });
      }
    },
    se = () => {
      try {
        !(function () {
          const e = ne();
          if (e.indexOf("access_token") > -1 && a.getItem("signInSource")) {
            const t = a.getItem("csrf"),
              n = r.parseCSRF(new URL(e));
            a.removeItem("csrf"), (!t || !n || n !== t) && (j("DCBrowserExt:Viewer:User:Error:NonMatchingCsrfToken:FailedToLogin"), K());
          }
        })(),
          (function () {
            try {
              let e = ne();
              e &&
                e.indexOf("#") > -1 &&
                (r.signInAnalyticsLogging(e),
                r.checkSignInFromEditVerbPaywall(e),
                (e = e.split("#")[0]),
                P ? (h = e) : (window.location.href = e));
            } catch (e) {}
          })();
        const n = window.document.getElementById("Adobe-dc-view");
        P || (g = N("clen") || -1), (v = new te(n));
        const s = (() => {
          try {
            const n = e.getItem("cdnUrl"),
              r = new URL(n);
            if (!q(r.origin)) return ae("Invalid CDN URL detected", "Invalid Origin"), void W();
            f || (f = r);
            let i = e.getItem("viewer-locale");
            i || (i = e.getItem("locale"));
            const s = "false" !== e.getItem("logAnalytics"),
              o = "false" !== e.getItem("ANALYTICS_OPT_IN_ADMIN"),
              c = s && o ? "true" : o ? "optinOff" : "gpoOff",
              l = "true" === e.getItem("betaOptOut");
            r.searchParams.append("locale", m || i),
              r.searchParams.append("logAnalytics", c),
              r.searchParams.append("callingApp", chrome.runtime.id),
              r.searchParams.append("betaOptOut", l),
              r.searchParams.append("enableCaretMode", T),
              t.getItem("signInTp") && r.searchParams.append("touchp", t.getItem("signInTp")),
              r.searchParams.append("rvu", e.getItem("userState")?.rvu ?? null);
            const d = e.getItem("installType") || "update",
              u = e.getItem("installSource");
            r.searchParams.append("version", `${chrome.runtime.getManifest().version}:${d}`),
              r.searchParams.append("installSource", u),
              r.searchParams.append("storage", JSON.stringify(e.getItem("viewerStorage") || {})),
              "false" === e.getItem("staticFteCoachmarkShown") && r.searchParams.append("showFTECoachmark", "true"),
              ("true" !== N("googlePrint") && !0 !== R) ||
                "false" === a.getItem("googleAppsPrint") ||
                r.searchParams.append("googleAppsPrint", "true"),
              r.searchParams.append("sdp", e.getItem("sdp") ? "1" : "0"),
              r.searchParams.append("sds", e.getItem("sds") ? "1" : "0");
            const g = ["dropin!", "provider!", "app!"],
              p = ["analytics", "logToConsole", "enableLogging", "frictionless", "sessionId", "linearization", "ev", "ao"],
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
                "ip"
              ];
            let I;
            e.getItem("env"),
              (I = P ? new URLSearchParams(new URL(h).search) : new URLSearchParams(window.location.search)),
              re(p, r, I, !1, !0),
              re(w, r, I, !0, !1);
            let b = r.href;
            return (
              g.forEach((e) => {
                I.forEach((t, a) => {
                  a.startsWith(e) && (b = b + "&" + a + "=" + t);
                });
              }),
              b
            );
          } catch (e) {
            j("DCBrowserExt:Viewer:Iframe:Creation:Failed"), W();
          }
        })();
        v.createIframe(s),
          window.addEventListener("message", (a) => {
            !a.data ||
              !q(a.origin) ||
              b ||
              ("hsready" !== a.data.type && "ready" !== a.data.type) ||
              ((b = !0),
              (y = new Date().getTime()),
              (_ = a.data.requestId),
              "on" === a.data.killSwitch
                ? (j("DCBrowserExt:Viewer:KillSwitch:Turned:On"),
                  e.setItem("pdfViewer", "false"),
                  i.setViewerState("disabled"),
                  e.setItem("killSwitch", "on"),
                  P
                    ? W(!0)
                    : setTimeout(() => {
                        window.location.href = h;
                      }, 200))
                : e.getItem("killSwitch") && (j("DCBrowserExt:Viewer:KillSwitch:Turned:Off"), e.removeItem("killSwitch")),
              t.getItem("signInTp") && t.removeItem("signInTp"));
          });
      } catch (e) {
        ae("Error create Iframe", e);
      }
    };
  function oe(e) {
    if (p) return p;
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
      ae("Error in getFileNameFromURL", e);
    }
    return t;
  }
  function ce(e, t) {
    return new Promise((a, n) => {
      const r = new Date().getTime(),
        i = new XMLHttpRequest();
      i.open("GET", e.url),
        (i.responseType = "arraybuffer"),
        i.setRequestHeader("Range", `bytes=${t.start}-${t.end}`),
        (i.onload = () => {
          if (4 === i.readyState && 206 === i.status) a({ buffer: i.response, startTime: r, endTime: new Date().getTime() });
          else if (200 === i.status) {
            const e = { status: i.status, statusText: i.statusText, fileSize: g, rangeBufferSize: i.response.byteLength, range: t };
            n({ message: "Unexpected response to get file buffer range", error: e });
          } else {
            const e = { status: i.status, statusText: i.statusText, fileSize: g, range: t };
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
  function le(e, t) {
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
      })(e) && (w = !0);
    const a = new XMLHttpRequest();
    a.open("GET", e),
      (a.responseType = "arraybuffer"),
      (a.onreadystatechange = function () {
        4 === a.readyState &&
          ((200 !== a.status && 0 != a.status) || t({ buffer: a.response, mimeType: a.getResponseHeader("content-type") }));
      }),
      a.send(null);
  }
  async function de() {
    try {
      const e = a.getItem("bufferTabId");
      if (e) {
        const t = await o.getDataFromIndexedDB(e);
        if (t && t.fileBuffer) return (w = !0), { buffer: t.fileBuffer };
      }
    } catch (e) {}
    return {};
  }
  function me(e, t, a) {
    return new Promise((n, r) => {
      const i = h;
      if (i.startsWith("file://")) return void le(i, n);
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
                return ae("Fall back to native - not pdf from headers"), W();
              w = !0;
            }
          })),
        (s.onprogress = (function (e, t) {
          return function (a) {
            a.lengthComputable && ((g = a.total), e.sendProgress("progress", a.total, a.loaded, t));
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
  function ue(e, t) {
    j(`DCBrowserExt:Viewer:SignIn:AdobeYolo:${e}:clicked`),
      chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
        var t = e[0] && e[0].id;
        ie("adobeYoloTabsInfo", t, "sessionStorage");
      }),
      H({ main_op: "launchJumpUrl", details: { source: e, userGuid: t } }, (t) => {
        v._sendMessage({ type: "adobeYoloJumpResponse", response: t, source: e }, f.origin);
      });
  }
  function ge(e, t, ...a) {
    P
      ? o.storeBufferAndCall(e, t, D, ...a)
      : chrome.tabs.getCurrent(function (n) {
          o.storeBufferAndCall(e, t, n.id, ...a);
        });
  }
  function fe(e) {
    v._sendMessage({ type: "redirectToAcrobatWeb", response: e }, f.origin);
  }
  function pe(t, a, n = !1) {
    if (P) {
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
  function he(r, i) {
    switch (i.data.main_op) {
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
            ((U = function (e) {
              "fillsign" === a.data.main_op
                ? t.openInAcrobatResponse("FILLSIGN_IN_DESKTOP_APP", e, a.origin)
                : t.openInAcrobatResponse("OPEN_IN_DESKTOP_APP", e, a.origin),
                ae(`Open In Acrobat - (${a.data.main_op}) response- ${e}`);
            }),
            e.getItem("isSharepointFeatureEnabled"))
          )
            if (ee.isSharePointURL) (r.workflow_name = "SharePoint"), (r.isSharePointURL = !0), H(r, U);
            else {
              const e = await n.checkForSharePointURL(r.url);
              (r.isSharePointURL = e), e && (r.workflow_name = "SharePoint"), H(r, U);
            }
          else H(r, U);
        })(r, i);
        break;
      case "complete_conversion":
        j("DCBrowserExt:Viewer:Verbs:Conversion:Redirection"),
          (function (e) {
            const t = {};
            (t.main_op = e.data.main_op), (t.conversion_url = decodeURIComponent(e.data.conversion_url)), (t.timeStamp = Date.now()), H(t);
          })(i);
        break;
      case "updateLocale":
        j("DCBrowserExt:Viewer:User:Locale:Updated"),
          e.setItem("viewer-locale", i.data.locale),
          H({ main_op: "localeChange", locale: i.data.locale }),
          chrome.tabs.reload();
        break;
      case "setInitialLocale":
        let c = !1;
        e.getItem("viewer-locale") || ((c = !0), e.setItem("viewer-locale", i.data.locale), j("DCBrowserExt:Viewer:User:Locale:Initial")),
          i.data.reloadReq && c && chrome.tabs.reload();
        break;
      case "error-sign-in":
        !(function (e) {
          const t = n.uuid();
          a.setItem("csrf", t);
          const r = new URL(e),
            i = G();
          (i.hash = i.hash + `state=${t}&signInError=true`),
            r.searchParams.set("redirect_uri", i),
            chrome.tabs.update({ url: r.href, active: !0 });
        })(i.data.url);
        break;
      case "deleteViewerLocale":
        e.getItem("viewer-locale") && (e.removeItem("viewer-locale"), chrome.tabs.reload());
        break;
      case "signin":
        j("DCBrowserExt:Viewer:Ims:Sign:In"),
          a.setItem("signInSource", i.data.source),
          j(`DCBrowserExt:Viewer:Ims:Sign:In:${i.data.source}`),
          ge(i.data.fileBuffer, Y, { touchpoint: i.data.tp });
        break;
      case "googleSignIn":
        j("DCBrowserExt:Viewer:Ims:Sign:In"),
          j(`DCBrowserExt:Viewer:Ims:Sign:In:${i.data.source}`),
          a.setItem("signInSource", i.data.source),
          ge(i.data.fileBuffer, Q, i.data.application);
        break;
      case "signup":
        j("DCBrowserExt:Viewer:Ims:Sign:Up"),
          a.setItem("signUpSource", i.data.source),
          j(`DCBrowserExt:Viewer:Ims:Sign:Up:${i.data.source}`),
          ge(i.data.fileBuffer, Y, { sign_up: !0 });
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
        })(i.data);
        break;
      case "upsell_remove_urlParams":
        t.removeItem("rtParams"), t.removeItem("payPalUrl");
        break;
      case "fetchLocalRecents":
        const l = new URL(e.getItem("cdnUrl")).origin;
        chrome.permissions.contains({ permissions: ["history"], origins: ["https://www.google.com/"] }, (e) => {
          if (i.data.fetchRecents) {
            const t = i.data.showOverlay;
            e || P
              ? pe(v, l, t)
              : (j("DCBrowserExt:Permissions:History:DialogTriggered"),
                chrome.permissions.request({ permissions: ["history"], origins: ["https://www.google.com/"] }, (e) => {
                  e
                    ? (j("DCBrowserExt:Permissions:History:Granted"), pe(v, l, t))
                    : (j("DCBrowserExt:Permissions:History:Denied"), v.sendRecentUrl(!1, null, l));
                }));
          } else e || P ? v.sendRecentUrl(!0, null, l) : v.sendRecentUrl(!1, null, l);
        });
        break;
      case "socialSignIn":
        j("DCBrowserExt:Viewer:Ims:Sign:In"),
          j(`DCBrowserExt:Viewer:Ims:Sign:In:${i.data.source}`),
          a.setItem("signInSource", i.data.source),
          ge(i.data.fileBuffer, Z, i.data.idp_token);
        break;
      case "openRecentFileLink":
        const m = {};
        (m.main_op = i.data.main_op), (m.recent_file_url = decodeURIComponent(i.data.recent_file_url)), H(m);
        break;
      case "userSubscriptionData":
        if (P) {
          const e = {};
          (e.eventType = i.data.main_op),
            (e.userSubscriptionData = i.data.userSubscriptionData),
            (e.data = i.data),
            (e.main_op = i.data.main_op);
          H(e, function (e) {
            e && "showUninstallPopUp" === e.main_op && v._sendMessage({ type: "showUninstallPopUp" }, f.origin);
          });
        }
        break;
      case "uninstall":
        P && H({ main_op: "uninstall", defaultUrl: h });
        break;
      case "submit_form":
        fetch(i.data.resource, i.data.options)
          .then((e) => {
            v.sendSubmitFormResponse(e.ok, i.origin);
          })
          .catch(() => {
            v.sendSubmitFormResponse(!1, i.origin);
          });
        break;
      case "ownerShipExperimentShown":
        e.removeItem("defaultOwnerShipExperiment");
        break;
      case "openAcrobatOptions":
        chrome.runtime.openOptionsPage(), j(`DCBrowserExt:Viewer:ManagePref:clicked:${i.data.source}`);
        break;
      case "encryptedWriteFile":
        ({ secureString: k } = i.data), ye(document.title);
        break;
      case "launchJump":
        ge(i.data.fileBuffer, ue, i.data.source, i.data.userGuid);
        break;
      case "saveAsEvent":
        !(async function (e) {
          try {
            if ((j("DCBrowserExt:Viewer:SaveToMyComputer:" + (B ? "fileHandlerExist" : "fileHandlerNotExist")), B)) x = !1;
            else {
              const t = {
                suggestedName: `${e.fileName}.pdf`,
                types: [{ description: "PDF file", accept: { "application/pdf": [".pdf"] } }]
              };
              (B = await window.showSaveFilePicker(t)), (x = !0), ye(B?.name);
            }
            v._sendMessage({ type: "newSaveToLocalResponse", newAsset: x, updatedFileName: B?.name }, f.origin);
          } catch (e) {
            (B = null), ae("Save As Handler Error", e), v._sendMessage({ type: "newSaveToLocalResponse", error: e }, f.origin);
          }
        })(i.data);
        break;
      case "downloadFile":
        !(async function (e) {
          try {
            const t = new Blob([e.fileBuffer], { type: "application/pdf" }),
              a = URL.createObjectURL(t);
            await chrome.downloads.download({ url: a, filename: `${e.fileName}.pdf`, conflictAction: "uniquify", saveAs: !0 });
          } catch (e) {
            ae("downloadFile error", e), v._sendMessage({ type: "downloadFileError" }, f.origin);
          }
        })(i.data);
        break;
      case "rememberSaveLocationPreference":
        !(function (t) {
          let a = "";
          t.cloudStorage && !e.getItem("selectedSaveLocationPreference")
            ? (a = "PreferenceMigrationSuccess")
            : t.cloudStorage || (a = "SaveDialogRememberMe");
          a && j(`DCBrowserExt:Viewer:ChangeSaveLocationPreference:${a}`);
          (!t.cloudStorage || (t.cloudStorage && !e.getItem("selectedSaveLocationPreference"))) &&
            (e.setItem("saveLocation", t.saveLocation),
            e.setItem("selectedSaveLocationPreference", !0),
            H({
              panel_op: "options_page",
              requestType: s.OPTIONS_UPDATE_TOGGLE,
              toggleId: "saveLocationPreferenceTitle",
              toggleVal: t.saveLocation
            }));
        })(i.data);
        break;
      case "appRenderingDone":
        Ce();
        break;
      case "saveFileBuffer":
        ge(i.data.fileBuffer);
        break;
      case "deleteFileBuffer":
        const u = a.getItem("bufferTabId");
        u && o.deleteDataFromIndexedDB(u), a.removeItem("bufferTabId");
      case "appRenderingDone":
        Ce();
        break;
      case "writeToLocalSavedFile":
        !(async function (e) {
          try {
            const t = await B.createWritable();
            await t.write(e.fileBuffer),
              await t.close(),
              v._sendMessage({ type: "newSaveToLocalResponse", newAsset: x, updatedFileName: B?.name, isFileWriteStage: !0 }, f.origin);
          } catch (e) {
            (B = null),
              ae("Write to Local File Error", e),
              v._sendMessage({ type: "newSaveToLocalResponse", error: e, isFileWriteStage: !0 }, f.origin);
          }
        })(i.data);
        break;
      case "bookmarkWeb":
        d(i.data.url, fe, j);
    }
  }
  function we(e) {
    try {
      const t = new TextDecoder("utf-8").decode(e.buffer);
      let a = !1;
      -1 != t.indexOf("Linearized 1")
        ? ((a = !0), j("DCBrowserExt:Viewer:Linearization:Linearized:Version:1"))
        : -1 != t.indexOf("Linearized")
        ? j("DCBrowserExt:Viewer:Linearization:Linearized:Version:Other")
        : j("DCBrowserExt:Viewer:Linearization:Linearized:False"),
        v._sendMessage({ type: "Linearization", linearized: a }, f.origin);
    } catch (e) {
      j("DCBrowserExt:Viewer:Linearization:Linearized:Detection:Failed"), ae("Linearization Detection failed", e);
    }
  }
  function Ie(t, a, n, r) {
    n.then((n) => {
      const i = n.downLoadEndTime,
        s = n.buffer;
      n.buffer.byteLength;
      t.preview("preview", s, g, p, r, i, a.origin),
        v._sendMessage(
          {
            type: "NavigationStartTime",
            time: window.performance && window.performance.timing && window.performance.timing.navigationStart
          },
          f.origin
        ),
        !0 === e.getItem("isSaveLocationPrefEnabled") &&
          v._sendMessage({ type: "changeSaveLocationPreference", saveLocation: e.getItem("saveLocation"), onLoad: !0 }, f.origin);
    })
      .catch((e) => (j("DCBrowserExt:Viewer:Error:FallbackToNative:FileDownload:Failed"), W()))
      .finally(() => {
        e.removeItem("sessionStarted");
      });
  }
  class be {
    constructor() {
      this.request = { main_op: "analytics" };
    }
    analytics = (e) => {
      this.request.analytics || (this.request.analytics = []), this.request.analytics.push([e]);
    };
    sendAnalytics = () => {
      H(this.request);
    };
  }
  function ye(e) {
    e && (document.title = e + k);
  }
  const ve = (t, a, n) => {
      const r = n ? "viewerStorage" : "viewerStorageAsync",
        i = e.getItem(r) || {};
      (i[t] = a), e.setItem(r, i);
    },
    _e = (t) => {
      const a = e.getItem("viewerStorage") || {},
        n = e.getItem("viewerStorageAsync") || {};
      delete a[t], delete n[t], e.setItem("viewerStorage", a), e.setItem("viewerStorageAsync", n);
    };
  function Se(t, n, r, i) {
    return (s) => {
      try {
        if (
          s.data &&
          s.origin &&
          q(s.origin) &&
          ((e) => {
            try {
              return e && e.source && e.source.top.location.origin === "chrome-extension://" + chrome.runtime.id;
            } catch (e) {
              return !1;
            }
          })(s)
        ) {
          if (s.data.main_op) return he(t, s);
          switch (s.data.type) {
            case "ready":
              if (
                (P
                  ? (async function (t, n, r, i) {
                      let s = new be();
                      I = !0;
                      const o = h;
                      document.title = p;
                      const c = C.getHeaderValue("accept-ranges"),
                        l = !a.getItem("bufferTabId") && c && "bytes" === c.toLowerCase() ? "true" : "false";
                      t.sendFileMetaData("metadata", y, g, l, o, p, n.origin, !1),
                        Pe(),
                        r
                          ? (s.analytics("DCBrowserExt:Viewer:Linearization:Range:Supported"),
                            r
                              .then((e) => {
                                t.sendInitialBuffer("initialBuffer", e.startTime, e.endTime, e.buffer, n.origin), we(e);
                              })
                              .catch((e) => {
                                t.sendInitialBuffer("initialBuffer", 0, 0, -1, n.origin),
                                  s.analytics("DCBrowserExt:Viewer:Error:Linearization:InitialBufiled");
                              }))
                          : s.analytics("DCBrowserExt:Viewer:Linearization:Range:Not:Supported"),
                        e.removeItem("isReload"),
                        e.removeItem("isBackForward");
                      const d = window.performance && window.performance.timing && window.performance.timing.navigationStart,
                        m = de();
                      (await m).buffer
                        ? Ie(t, n, m, d)
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
                                            : ((a += s.byteLength), t.sendProgress("progress", g, a, n.origin), r.enqueue(s), e());
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
                              (g = a.byteLength),
                                t.preview("preview", a, a.byteLength, p, d, new Date().getTime(), n.origin),
                                v._sendMessage(
                                  {
                                    type: "NavigationStartTime",
                                    time: window.performance && window.performance.timing && window.performance.timing.navigationStart
                                  },
                                  n.origin
                                ),
                                !0 === e.getItem("isSaveLocationPrefEnabled") &&
                                  v._sendMessage(
                                    { type: "changeSaveLocationPreference", saveLocation: e.getItem("saveLocation"), onLoad: !0 },
                                    n.origin
                                  );
                            })
                            .catch((e) => (s.analytics("DCBrowserExt:Viewer:Error:FallbackToNative:FileDownload:Failed"), W())),
                          s.sendAnalytics()),
                        ae("Viewer loaded");
                    })(t, s, r, n)
                  : (function (e, t, n, r, i) {
                      I = !0;
                      const s = h,
                        o = (!a.getItem("bufferTabId") && N("chunk")) || "false",
                        c = window.performance
                          .getEntriesByType("navigation")
                          .map((e) => e.type)
                          .includes("reload"),
                        l = window.performance
                          .getEntriesByType("navigation")
                          .map((e) => e.type)
                          .includes("back_forward");
                      e.sendFileMetaData("metadata", y, g, o, encodeURI(s), p, t.origin, c || l),
                        Pe(),
                        n
                          ? (j("DCBrowserExt:Viewer:Linearization:Range:Supported"),
                            n
                              .then((a) => {
                                e.sendInitialBuffer("initialBuffer", a.startTime, a.endTime, a.buffer, t.origin), we(a);
                              })
                              .catch((a) => {
                                e.sendInitialBuffer("initialBuffer", 0, 0, -1, t.origin),
                                  j("DCBrowserExt:Viewer:Error:Linearization:InitialBuffer:Failed");
                              }))
                          : (j("DCBrowserExt:Viewer:Linearization:Range:Not:Supported"),
                            e.sendInitialBuffer("initialBuffer", 0, 0, -1, t.origin)),
                        Ie(e, t, r, i),
                        ae("Viewer loaded");
                    })(t, s, r, n, i),
                H({ main_op: "getUserInfoFromAcrobat" }, (e) => {
                  v._sendMessage({ type: "adobeYoloUserData", ...e }, f.origin);
                }),
                s.data.visitorID)
              ) {
                const t = e.getItem("viewerVisitorID");
                e.setItem("viewerVisitorID", s.data.visitorID),
                  t && t !== s.data.visitorID && j("DCBrowserExt:Analytics:viewerVisitorID:MCMID:Changed");
              }
              break;
            case "getFileBufferRange":
              !(function (e, t) {
                ce({ url: h }, e.data.range)
                  .then((a) => {
                    E || (j("DCBrowserExt:Viewer:Linearization:Range:Called"), (E = !0)),
                      t.sendBufferRanges("bufferRanges", `${e.data.range.start}-${e.data.range.end}`, a.buffer, e.origin);
                  })
                  .catch((a) => {
                    j("DCBrowserExt:Viewer:Error:Linearization:Range:Failed"),
                      t.sendBufferRanges("bufferRanges", `${e.data.range.start}-${e.data.range.end}`, -1, e.origin);
                  });
              })(s, t);
              break;
            case "previewFailed":
              L || (j("DCBrowserExt:Viewer:Error:FallbackToNative:Preview:Failed"), (L = !0), W());
              break;
            case "signin":
              j("DCBrowserExt:Viewer:Ims:Sign:In"), Y();
              break;
            case "signout":
              j("DCBrowserExt:Viewer:Ims:Sign:Out"),
                e.removeItem("viewer-locale"),
                e.removeItem("userDetailsFetchedTimeStamp"),
                e.removeItem("discoveryExpiryTime"),
                e.removeItem("viewer-locale"),
                ge(s.data.fileBuffer, K);
              break;
            case "googleAppsPrintShown":
              a.setItem("googleAppsPrint", "false"), j("DCBrowserExt:Viewer:GoogleApps:Print:Shown");
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
              ye(s.data.title);
              break;
            case "viewer_set_item":
              ve(s.data.key, s.data.value, s.data.startup);
              break;
            case "viewer_remove_item":
              _e(s.data.key);
          }
        }
      } catch (e) {
        j("DCBrowserExt:Viewer:Error:MessageHandler:Unknown");
      }
    };
  }
  function Le() {
    if (!b) return j("DCBrowserExt:Viewer:Error:Handshake:TimedOut"), W(), !1;
  }
  const Ee = (t) => {
    try {
      const n = C.getHeaderValue("content-length");
      g = n;
      const r = C.getHeaderValue("accept-ranges"),
        i = r && "bytes" === r.toLowerCase();
      (h = t.originalUrl),
        se(),
        (p = (function () {
          let e;
          const t = C.getHeaderValue("content-disposition");
          if (t && /\.pdf(["']|$)/i.test(t)) {
            const a = /filename[^;=\n\*]?=((['"]).*?\2|[^;\n]*)/.exec(t);
            null != a && a.length > 1 && (e = a[1].replace(/['"]/g, ""));
          }
          return e || (e = oe(h)), decodeURIComponent(e);
        })());
      const s = { url: h },
        o = new URL(e.getItem("cdnUrl"));
      f || (f = o);
      let c = null;
      const l = "false" !== N("linearization") && !a.getItem("bufferTabId");
      l && i && n > 0 && (c = ce(s, { start: 0, end: 1024 })), window.addEventListener("message", Se(v, t, c)), De(), setTimeout(Le, 25e3);
    } catch (e) {
      ae("InitMimeHandlerScript failed", e), W();
    }
  };
  function Pe() {
    if (a.getItem("signInAction")) {
      const e = a.getItem("signInAction");
      v._sendMessage(
        { type: "signInInformation", action: e, source: "signIn" === e ? a.getItem("signInSource") : a.getItem("signUpSource") },
        f.origin
      ),
        a.removeItem("signInSource"),
        a.removeItem("signUpSource"),
        a.removeItem("signInAction");
    }
  }
  async function De() {
    chrome.storage.onChanged.addListener((t, a) => {
      "local" === a &&
        Object.entries(t).forEach(([t, { newValue: a }]) => {
          if (("theme" === t && v._sendMessage({ type: "themeChange", theme: a }, f.origin), "ANALYTICS_OPT_IN_ADMIN" === t)) {
            const t = "false" !== e.getItem("logAnalytics"),
              n = "false" !== a;
            v._sendMessage({ type: "analyticsTrackingChange", value: t && n }, f.origin);
          }
          "saveLocation" === t && v._sendMessage({ type: "changeSaveLocationPreference", saveLocation: a }, f.origin);
        });
    }),
      await (async function () {
        return (u = await i.isInstalledViaUpsell()), u;
      })(),
      v._sendMessage({ type: "setAsyncStorage", storage: e.getItem("viewerStorageAsync") }, f.origin),
      H({ main_op: "viewer-startup", url: h, startup_time: Date.now(), viewer: !0 }, (e) => {
        (ee.isSharePointURL = !!e.isSharePointURL),
          (ee.isSharePointFeatureEnabled = !!e.isSharePointEnabled),
          (ee.isFrictionlessEnabled = !!e.isFrictionlessEnabled),
          (ee.featureFlags = e.featureFlags),
          (ee.isFillAndSignRegisteryEnabled = e.isFillnSignEnabled);
        const t = G().href;
        v.sendStartupConfigs(t, f.origin);
      }),
      H({ main_op: "get-features&groups", cachePurge: "LAZY" }, (e) => {
        v._sendMessage(
          { type: "featureGroups", featureGroups: e.featureGroups, featureFlags: e.featureFlags, ffResponse: e.ffResponse },
          f.origin
        );
      }),
      P &&
        (setTimeout(() => ie("loadedTabsInfo", D), 2e3),
        (function () {
          const t = e.getItem("recentFilesData");
          if (t && t.isSyncedWithHistory) {
            const a = t.recentFilesPath ? [...t.recentFilesPath] : [];
            1e3 === a.length && a.shift(),
              a.push({ url: h, filename: p, lastVisited: Date.now() }),
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
                    o[1] && ((s = z(o[1], "pdfurl")), n.push({ url: s, filename: r, lastVisited: i }));
                  }
                  n.push({ url: h, filename: p, lastVisited: Date.now() }),
                    e.setItem("recentFilesData", { recentFilesPath: n, isSyncedWithHistory: !0 });
                });
              else {
                const t = [];
                t.push({ url: h, filename: p, lastVisited: Date.now() }),
                  e.setItem("recentFilesData", { recentFilesPath: t, isSyncedWithHistory: !0 });
              }
            });
        })());
  }
  function Re(e) {
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
          const n = !m && null === e.locale;
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
  function Ue(e) {
    H({ main_op: "caret_mode_toggle_handler", toggleCaretModeValue: e });
  }
  function Te(e) {
    if (
      (e.panel_op &&
        (1 == e.trefoilClick
          ? (delete e.trefoilUI, delete e.newUI, Re(e))
          : !0 === e.reload_in_native && (delete e.is_viewer, chrome.tabs.reload(e.tabId))),
      "relay_to_content" !== e.main_op || "dismiss" !== e.content_op)
    )
      return (
        "relay_to_content" === e.main_op && "caret_mode_toggle_handler" === e.content_op
          ? v._sendMessage({ type: "toggleCaretMode", toggleCaretModeValue: e.status }, f.origin)
          : "reset" === e.main_op
          ? v._sendMessage({ type: "toggleAnalytics", logAnalytics: e.analytics_on }, f.origin)
          : "showUninstallPopUp" === e.main_op
          ? v._sendMessage({ type: "showUninstallPopUp" }, f.origin)
          : "jumpUrlSuccess" === e.main_op &&
            (!P || (e.tabInfo && e.tabInfo.includes(D))) &&
            v._sendMessage({ type: "adobeYoloJumpUrlSuccess" }, f.origin),
        !1
      );
    {
      delete e.content_op, delete e.trefoilClick, delete e.reload_in_native;
      let t = document.getElementById("__acrobatDialog__");
      t && (t.remove(), (t = null));
    }
  }
  function Ce() {
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
        if ((chrome.runtime.onMessage.addListener(Te), t)) {
          if (((P = !0), !window.navigator.onLine && e.getItem("offlineSupportDisable"))) return void W();
          e.getItem("sessionStarted") || (e.setItem("sessionId", n.uuid()), e.setItem("sessionStarted", !0));
          const t = (await i.getStreamInfo()) || {};
          (C = new l(t.responseHeaders)), (D = t.tabId);
          let a = await H({ main_op: "check-is-google-print" });
          (R = a && a.isGooglePrint),
            (T = await i.caretModeStatus()),
            i.addCaretModeListener(Ue),
            H({ main_op: "viewer-preview", startup_time: Date.now(), viewer: !0 }, () => Ee(t));
        } else
          $(),
            (async () => {
              try {
                if (!O(h)) return void (w = !1);
                se();
                const t = N("clen") || -1,
                  n = N("chunk") || !1,
                  r = "false" !== N("linearization") && !a.getItem("bufferTabId"),
                  i = { url: h },
                  s = new Date().getTime(),
                  o = new URL(e.getItem("cdnUrl"));
                (p = N("pdffilename") || oe(h)), (document.title = decodeURIComponent(p)), f || (f = o);
                let c = null;
                const l = r && n && t > 0;
                l && (c = ce(i, { start: 0, end: 1024 }));
                const d = de(),
                  m = (await d).buffer ? d : me(v, l, o.origin);
                window.addEventListener("message", Se(v, m, c, s)), setTimeout(Le, 25e3);
              } catch (e) {
                ae("InitScript failed", e), W();
              }
            })(),
            De();
      });
})();
