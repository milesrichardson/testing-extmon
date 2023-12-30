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
import { common as t } from "./common.js";
import { util as s } from "./util.js";
import { Proxy as i } from "./proxy.js";
import { analytics as r } from "../common/analytics.js";
import { session as o } from "./session.js";
import { frictionlessHandler as n } from "./frictionless-handler.js";
import { floodgate as a } from "./floodgate.js";
import { privateApi as l } from "./private-api.js";
import { SETTINGS as c } from "./settings.js";
import { dcLocalStorage as m } from "../common/local-storage.js";
import { googleQueryAnalyzer as p } from "./googleQueryAnalyzer.js";
var d = null;
d ||
  ((d = new (function () {
    (this.proxy = i.proxy.bind(this)),
      (this.LOG = (...e) => t.LOG(...e)),
      (this.sign_out = function (e, t) {
        o.signOut();
      }),
      (this.dismiss = function (e, t) {
        s.consoleLog("dismiss/ok");
      }),
      (this.specialCases = c.USE_FLICKR ? [{ regex: /http[s]:\/\/www\.flickr\.com/, action: "flickr", lastPromptTime: null }] : []),
      (this.handleSpecialUrl = function (t, i) {
        var r = !1;
        return (
          s.each(this.specialCases, function (o, n) {
            if (n.regex.test(t)) {
              var a = !0,
                l = new Date().getTime();
              n.lastPromptTime && l - n.lastPromptTime < 1e4 && (a = !1),
                a && ((n.lastPromptTime = l), s.consoleLog("INVITE: " + l), e.deferMessage({ panel_op: n.action, tabId: i })),
                (r = !0);
            }
          }),
          r
        );
      }),
      (this.fill_sign = function (e, n, a) {
        (e.userSelectPromise || s.Deferred().resolve().promise()).then(
          this.proxy(function () {
            s.consoleLog("fill and sign");
            var n = {
              url: t.settings.fillsign_api + "createform",
              contentType: "application/json",
              accept: t.GET_headers().Accept,
              type: "POST",
              dataType: "json",
              xhrFields: { withCredentials: !0 },
              headers: t.POST_headers()
            };
            (n.data = JSON.stringify({ asset_id: e.assetId })),
              o.message("Preparing for Fill and Sign", !0),
              r.event(r.e.CREATE_FORM_PROGRESS_SHOWN),
              s.ajax(n).then(
                this.proxy(function (t) {
                  s.consoleLog("form created"),
                    s.consoleLogDir(t),
                    (e.form_path = "fillsign/" + t.form_id),
                    r.event(r.e.CREATE_FORM_COMPLETE),
                    r.event(r.e.REDIRECT),
                    o.gotoPath(e.form_path),
                    a && a("OP_SUCCESS");
                }),
                this.proxy(function (e) {
                  return s.consoleLog("form create failed"), i.REST_error(e, this), a && a("OP_FAILURE"), e;
                })
              );
          })
        );
      }),
      (this.newTab = function (s, i, n) {
        var a = chrome.runtime.getURL("browser/js/options.html");
        c.CHROME_VERSION < c.SUPPORTED_VERSION
          ? m.getItem("enableNewExtensionMenu") ||
            (chrome.action.setIcon({ path: "browser/images/acrobat_dc_appicon_24.png", tabId: i }), chrome.action.enable(i))
          : 0 !== s.indexOf(t.settings.redirect_uri + "?code=")
          ? s.includes(a)
            ? r.event(r.e.OPTIONS_PAGE)
            : (o.checkSessionTab(i, s), e.avoidUrl(s) ? e.disable(i) : d.handleSpecialUrl(s, i) || e.loaded(i))
          : o.foundCode(s);
      }),
      (this.startup = function (t, i) {
        if (
          (this.started ||
            (this.newTab(t.url, i.tab.id, t.is_pdf ? "application/pdf" : "text/html"),
            l.isMimeHandlerAvailable().then((e) => {
              e &&
                (navigator.onLine || !1 === m.getItem("offlineSupportDisable")) &&
                fetch("https://acrobat.adobe.com/proxy/chrome-viewer/index.html", { method: "GET" })
                  .then((e) => {
                    if (200 !== e.status)
                      l.setViewerState("disabled"),
                        m.setItem("cdnFailure", "true"),
                        chrome.tabs.reload(),
                        r.event(r.e.VIEWER_FALLBACK_TO_NATIVE_CDN_OFFLINE);
                    else if ("true" === m.getItem("cdnFailure")) {
                      m.setItem("cdnFailure", "false");
                      const e = "true" === m.getItem("pdfViewer") ? "enabled" : "disabled";
                      l.setViewerState(e), chrome.tabs.reload();
                    }
                  })
                  .catch((e) => {
                    s.consoleError(e);
                  });
            }),
            (this.started = !0)),
          t.is_pdf &&
            (e.setIsPDF(i.tab.id, !0),
            Promise.all([
              a.getReleaseVariant("dc-cv-pdf-fte-experiments"),
              a.getReleaseVariant("dc-cv-default-ownership-experiments"),
              a.hasFlag("dc-cv-open-in-acrobat")
            ])
              .then(([e, i, o]) => {
                (t.fteFeatureFlag = e),
                  i &&
                    (function (e) {
                      if (!m.getItem("pdfViewer")) {
                        m.setItem("pdfViewer", "true"),
                          m.setItem("defaultOwnerShipExperiment", e),
                          l.setViewerState("enabled"),
                          m.setItem("viewer-enabled-source", "ownership-upgrade"),
                          m.setItem("experiment-ownership", e);
                        let t = { reset: c.OWNERSHIP_EXPERIMENT_TOGGLE_OFF_TIME_LIMIT };
                        try {
                          const s = a.getFeatureMeta(e),
                            i = JSON.parse(s);
                          i && i.reset && (t = i);
                        } catch (e) {}
                        const i = 24 * t.reset * 60 * 60 * 1e3;
                        m.setWithTTL("ownership-upgrade", "true", i),
                          s.isEdge()
                            ? (r.event(r.e.USE_ACROBAT_IN_EDGE_AUTO_ENABLED_ON_UPDATE),
                              r.event(r.e.USE_ACROBAT_IN_EDGE_AUTO_ENABLED_ON_UPDATE_SOURCE, { SOURCE: e }))
                            : (r.event(r.e.USE_ACROBAT_IN_CHROME_AUTO_ENABLED_ON_UPDATE),
                              r.event(r.e.USE_ACROBAT_IN_CHROME_AUTO_ENABLED_ON_UPDATE_SOURCE, { SOURCE: e }));
                      }
                    })(i),
                  m.setItem("openInAcrobatEnable", !!o);
              })
              .finally(() => e.pdf_menu(t, i))),
          s.showFrictionlessMenu(t) && (t.show_frictionless = !0),
          t.startup_time && (n.startNewInteraction(t.tabId).startup_time = t.startup_time),
          c.FRICTIONLESS_ENABLED &&
            (c.TEST_MODE || t.show_frictionless) &&
            "false" !== m.getItem("always-show-pdftools") &&
            1 != t.suppress_frictionless &&
            p &&
            p.isGoogleQuery(t))
        ) {
          const e = p.getSearchQuery(t);
          e && p.mapQueryStringToAction(e, t);
        }
      });
  })()),
  e.registerHandlers({
    dismiss: d.proxy(d.dismiss),
    ok: d.proxy(d.dismiss),
    fillsign: d.proxy(d.fill_sign),
    "sign-out": d.proxy(d.sign_out),
    "html-startup": d.proxy(d.startup),
    "pdf-menu": d.proxy(d.startup)
  }));
export const downloadManager = d;
