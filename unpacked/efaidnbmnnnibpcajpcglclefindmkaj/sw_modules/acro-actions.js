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
import { common as n } from "./common.js";
import { util as t } from "./util.js";
import { Proxy as o } from "./proxy.js";
import { analytics as i } from "../common/analytics.js";
import { acroweb2pdf as r } from "./acro-web2pdf.js";
import { sharepointModule as a } from "./sharepoint-module.js";
import { SETTINGS as s } from "./settings.js";
import { dcLocalStorage as l, dcSessionStorage as c } from "../common/local-storage.js";
import { versionChecks as E } from "./handleVersionChecks.js";
var m;
m ||
  (m = new (function () {
    (this.proxy = o.proxy.bind(this)), (this.LOG = (...e) => n.LOG(...e));
    const m = 0,
      _ = 1,
      u = 2,
      I = "pdf_downloaded",
      d = "pdf_downloading",
      f = "pdf_failure";
    function p(e, n) {
      if ("pdfviewer" !== e.click_context) return;
      const t = "SharePoint" === e.workflow_name || e.isSharePointURL,
        o = "FillnSign" === e.paramName;
      switch (n) {
        case m:
          o
            ? t
              ? i.event(i.e.VIEWER_SHAREPOINT_FILLSIGN_CLICKED)
              : i.event(i.e.VIEWER_FILLSIGN_CLICKED)
            : t
            ? i.event(i.e.VIEWER_SHAREPOINT_CLICKED)
            : i.event(i.e.VIEWER_OPEN_IN_ACRO_CLICKED);
          break;
        case _:
          t
            ? o
              ? i.event(i.e.VIEWER_SHAREPOINT_FILLSIGN_CLICKED_COMPLETE)
              : i.event(i.e.VIEWER_SHAREPOINT_CLICKED_COMPLETE)
            : o
            ? i.event(i.e.VIEWER_FILLSIGN_CLICKED_COMPLETE)
            : i.event(i.e.VIEWER_OPEN_IN_ACRO_CLICKED_COMPLETE);
          break;
        case u:
          o ? i.event(i.e.VIEWER_FILLSIGN_CLICKED_FAILED) : i.event(i.e.VIEWER_OPEN_IN_ACRO_CLICKED_FAILED);
      }
    }
    function L(n) {
      n.mimeHandled || e.sendMessage(n);
    }
    function h(e, n) {
      (e.panel_op = "status"),
        (e.current_status = n),
        L({
          tabId: e.tabId,
          loaded: e.loaded,
          filename: e.filename,
          url: e.url,
          persist: e.persist,
          version: e.version,
          start: e.start,
          is_pdf: e.is_pdf,
          newUI: e.newUI,
          panel_op: e.panel_op,
          content_op: e.content_op,
          click_context: e.click_context,
          current_status: e.current_status,
          mimeHandled: e.mimeHandled
        });
    }
    (this.getVersion = function (n) {
      var t,
        o = function (o) {
          if (o) {
            clearTimeout(t),
              (function (e) {
                e.fillnSignEnabled && "true" === e.fillnSignEnabled ? (s.FILL_N_SIGN_ENABLED = !0) : (s.FILL_N_SIGN_ENABLED = !1);
              })(o),
              (function (e) {
                e.yoloEnabled && "true" === e.yoloEnabled ? (s.ADOBE_YOLO_ENABLED = !0) : (s.ADOBE_YOLO_ENABLED = !1);
              })(o),
              (function (e) {
                e.frictionlessEnabled && "false" === e.frictionlessEnabled ? (s.FRICTIONLESS_ENABLED = !1) : (s.FRICTIONLESS_ENABLED = !0);
              })(o),
              (function (e) {
                const n = "true" === e.sharePointEnabled;
                a.setFeatureEnabled(n),
                  n && a.handleAllowedListFromNativeHost(e.sharePointUrlString),
                  l.setItem("isSharepointFeatureEnabled", a.isFeatureEnabled());
              })(o),
              (function (n) {
                const t = +n.majorVersion;
                e.setVersion(t), 1 == n.isdummy && e.setNMHConnectionStatus(!1);
              })(o),
              (function (e) {
                let n;
                c.setItem("shimFullVersion", e?.fullVersion);
                const t = +e.majorVersion;
                1 === t
                  ? ((n = { VERSION: "Unknown" }), (i.shim = "unknown"))
                  : 0 === t
                  ? ((n = { VERSION: "None" }), (i.shim = "none"))
                  : ((n = { VERSION: e.majorVersion + "." + e.minorVersion }), (i.shim = e.majorVersion + "." + e.minorVersion)),
                  c.getItem("startupComplete") || i.event(i.e.SHIM_VERSION, n);
              })(o);
            var r = { 0: "Admin", 1: "RDC", 2: "FTE", 3: "Other", 4: "None" }[o.installSource] || "Unknown";
            n({ ver: +o.majorVersion, source: r, installMonth: o.installMonth, installYear: o.installYear, repromptDone: o.repromptDone });
          }
        };
      (t = setTimeout(function () {
        o({ messageType: "shimVersionInfo", majorVersion: "1", minorVersion: "0", repromptDone: "false", isdummy: !0 });
      }, 2e3)),
        r.getVersion(o);
    }),
      (this._openInAcrobat = function (n, o, i) {
        var a = this;
        return (
          chrome.tabs.get(n.tabId, function (o) {
            if (
              (o.url && !/chrome\-extension/.test(o.url) && (n.url = o.url),
              p(n, m),
              (function (n) {
                void 0 === n.filename && (n.filename = e.filenameFromUrl(n.url));
              })(n),
              e.version > 1)
            ) {
              if (!0 === n.isSharePointURL) return r.openInAcrobat(n), h(n, I), i && i("OP_SUCCESS"), void p(n, _);
              if (n.authenticatedPDF && 1 == n.authenticatedPDF)
                return delete n.authenticatedPDF, n.current_status === I && n.base64PDF && r.openInAcrobat(n), void L(n);
              h(n, d),
                (function (e, n, o) {
                  h(n, d);
                  const i = n.dataURL ? n.dataURL : n.url;
                  fetch(i)
                    .then(
                      e.proxy(function (e) {
                        return e.status >= 400 && (h(n, f), p(n, u), o && o("OP_FAILURE")), e.blob();
                      })
                    )
                    .then(
                      e.proxy(function (e) {
                        if ("application/pdf" === e.type) {
                          const t = new FileReader();
                          (t.onloadend = function (e) {
                            (n.base64PDF = e.target.result), r.openInAcrobat(n), h(n, d);
                          }),
                            t.readAsDataURL(e),
                            o && o("OP_SUCCESS"),
                            p(n, _);
                        } else (n.authenticatedPDF = !0), L(n);
                      })
                    )
                    .catch((e) => {
                      o && o("OP_FAILURE"), t.consoleError(e);
                    });
                })(a, n, i);
            } else
              chrome.downloads.download({ url: n.dataURL, conflictAction: "uniquify", saveAs: !0, filename: n.filename }),
                i && i("APP_NOT_INSTALLED");
          }),
          !0
        );
      }),
      (this.openInAcrobat = async function (n, t, o) {
        e.legacyShim() ? (await E(), this._openInAcrobat(n, t, o)) : this._openInAcrobat(n, t, o);
      }),
      (this.openConvertedFile = function (e) {
        r.openFile(e);
      });
  })()),
  e.registerHandlers({ open_in_acrobat: m.proxy(m.openInAcrobat), open_converted_file: m.proxy(m.openConvertedFile) });
export const acroActions = m;
