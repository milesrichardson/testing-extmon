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
import { util as e } from "./util.js";
import { communicate as t } from "./communicate.js";
import { analytics as i } from "../common/analytics.js";
import { common as n } from "./common.js";
import { Proxy as s } from "./proxy.js";
import { dcLocalStorage as o } from "../common/local-storage.js";
const _ = { SIGNED_IN: "signed_in", LIMITS: "limits", COMPLETE_CONVERSION: "complete_conversion" },
  a = { SEARCH: "search", TREFOIL: "trefoil" },
  r = {
    PRE_PROCESSING_ERROR: "pre-processing-error",
    PROCESSING_ERROR: "processing-error",
    FILE_UPLOAD_START: "file-upload-start",
    DROPZONE_DISPLAYED: "dropzone-displayed",
    STARTUP_ERROR: "startup-error"
  },
  l = { DISMISS: "dismiss", NONE: "none" },
  p = {
    LOAD_FRICTIONLESS: "load-frictionless",
    SEND_EXTERNAL_MESSAGE: "send-external-msg",
    SHOW_FRICTIONLESS_ERROR: "show-frictionless-error",
    CLEAR_FRICTIONLESS_ERROR: "clear-frictionless-error"
  },
  c = {
    LIMITS_TIME: "limits_time",
    SIGNED_IN_TIME: "signed_in_time",
    DROPZONE_DISPLAY_TIME: "dropzone_display_time",
    STARTUP_TO_FRAME_LOAD: "startup_to_iframe_load"
  },
  d = "word-to-pdf",
  m = "ppt-to-pdf",
  E = "jpg-to-pdf",
  f = "excel-to-pdf",
  I = "createpdf",
  S = "compress-pdf",
  R = "pdf-to-word",
  O = "pdf-to-excel",
  u = "pdf-to-ppt",
  T = "pdf-to-image",
  g = { CREATE_PDF: "create_pdf", COMPRESS_PDF: "compress_pdf", EXPORT_PDF: "export_pdf" };
let N = null;
N ||
  ((N = new (function () {
    const N = {};
    function L() {
      (this.received_limits = !1),
        (this.limits_time = null),
        (this.received_signedin = !1),
        (this.signed_in_time = null),
        (this.signed_in = !1),
        (this.received_display = !1),
        (this.dropzone_display_time = null),
        (this.received_error = !1),
        (this.error_title = null),
        (this.error_description = null),
        (this.pdf_action = null),
        (this.workflow = null),
        (this.startup_time = null),
        (this.iframe_onload_time = null),
        (this.iframe_call_time = null);
    }
    function M(e) {
      return N[e] || (N[e] = new L()), N[e];
    }
    (this.proxy = s.proxy.bind(this)), (this.LOG = (...e) => n.LOG(...e));
    const D = function (e, t, n, s) {
        const o = M(e);
        if (1 == o.received_limits && 1 == o.received_signedin && 1 == o.received_display) {
          if (n === a.SEARCH) {
            if (0 == o.signed_in && 1 == o.has_free_ops) {
              let o = t.panel_op;
              w(e, t), F(e, t), (t.panel_op = o);
              let _ = s ? s.toUpperCase().replace(/\-/g, "_") : "UNKNOWN";
              i.event(i.e.FRICTIONLESS_WIDGET_LOADED, { TOOL: _, WORKFLOW: n });
            }
          } else if ((C(e, t), 0 == o.signed_in && 1 == o.has_free_ops)) {
            let e = t.pdf_action ? t.pdf_action.toUpperCase().replace(/\-/g, "_") : "UNKNOWN";
            i.event(i.e.FRICTIONLESS_WIDGET_LOADED, { TOOL: e, WORKFLOW: t.frictionless_workflow });
          }
          !(function (e) {
            delete N[e];
          })(e);
        }
      },
      h = function (e, t, n, s, o) {
        const _ = M(e);
        (_.received_limits = !0), (_.limits_time = o.timeStamp);
        const r = t.limits;
        if (!n || !r) return !1;
        _.has_free_ops = (function (e, t) {
          let i = null;
          switch (e) {
            case d:
            case m:
            case E:
            case f:
            case I:
              i = g.CREATE_PDF;
              break;
            case S:
              i = g.COMPRESS_PDF;
              break;
            case R:
            case O:
            case u:
            case T:
              i = g.EXPORT_PDF;
          }
          if (null === i) return !1;
          let n = t[i];
          return (n && n.can_process) || !1;
        })(n, r);
        const l = _.has_free_ops ? "UnderLimit" : "OverLimit";
        i.event(i.e.FRICTIONLESS_CONVERSION_LIMITS, { WORKFLOW: s, RESULT: l }),
          P(e, o, c.LIMITS_TIME),
          s !== a.SEARCH || _.has_free_ops ? D(e, o, s, n) : A(e, o);
      },
      A = function (e, i) {
        (i.content_op = l.DISMISS), o.getItem("enableNewExtensionMenu") ? t.sendMessageToPopup(i, !1) : t.sendMessage(i, !1);
      },
      P = function (e, i, n) {
        if ("false" === o.getItem("logAnalytics")) return;
        const s = M(e),
          _ = i.panel_op;
        let a = { content: "timing_info" };
        (a.workflow = i.frictionless_workflow),
          (function (e, t, i) {
            switch (i) {
              case c.STARTUP_TO_FRAME_LOAD:
                t.startup_time &&
                  (t.iframe_onload_time && (e.startup_to_iframe_load = t.iframe_onload_time - t.startup_time),
                  t.iframe_call_time && (e.startup_to_iframe_call = t.iframe_call_time - t.startup_time));
                break;
              case c.SIGNED_IN_TIME:
                t.startup_time && t.signed_in_time && (e.startup_to_signin = t.signed_in_time - t.startup_time);
                break;
              case c.LIMITS_TIME:
                t.startup_time && t.limits_time && (e.startup_to_limits = t.limits_time - t.startup_time);
                break;
              case c.DROPZONE_DISPLAY_TIME:
                t.startup_time && t.dropzone_display_time && (e.startup_to_display = t.dropzone_display_time - t.startup_time);
            }
          })(a, s, n),
          (i.data = a),
          (i.panel_op = p.SEND_EXTERNAL_MESSAGE),
          o.getItem("enableNewExtensionMenu") ? t.sendMessageToPopup(i, !1) : t.sendMessage(i, !1),
          (i.panel_op = _);
      },
      C = function (e, i) {
        (i.panel_op = p.LOAD_FRICTIONLESS),
          (i.content_op = l.NONE),
          (i.hide_spinner = !0),
          o.getItem("enableNewExtensionMenu") ? t.sendMessageToPopup(i, !1) : t.sendMessage(i, !1),
          (i.hide_spinner = void 0);
      },
      w = function (e, i) {
        (i.panel_op = p.SEND_EXTERNAL_MESSAGE), (i.data = { valid: "true" }), t.sendMessage(i, !1);
      },
      F = function (e, i) {
        (i.content_op = l.NONE), (i.panel_op = p.LOAD_FRICTIONLESS), (i.frame_visibility = "visible"), t.sendMessage(i, !1);
      };
    (this.startNewInteraction = function (e) {
      return (N[e] = new L()), N[e];
    }),
      (this.externalMsgHandler = function (n, s, d) {
        const m = n.data,
          E = s.tab.id,
          f = t.getTabLastMessage(E);
        let I = !1;
        switch (m.content_op) {
          case _.SIGNED_IN:
            !(function (e, t, n, s, o) {
              const _ = M(e);
              (_.received_signedin = !0), (_.signed_in_time = o.timeStamp), (_.signed_in = t.is_signed_in);
              const r = _.signed_in ? "SignedIn" : "SignedOut";
              i.event(i.e.FRICTIONLESS_USER_SIGNEDIN, { WORKFLOW: s, RESULT: r }),
                P(e, o, c.SIGNED_IN_TIME),
                s === a.SEARCH && _.signed_in ? A(e, o) : D(e, o, s, n);
            })(E, m, f.pdf_action, f.frictionless_workflow, n),
              (I = !0);
            break;
          case _.LIMITS:
            h(E, m, f.pdf_action, f.frictionless_workflow, n), (I = !0);
            break;
          case _.COMPLETE_CONVERSION:
            !(function (t, n, s, o) {
              if (!n || !n.conversion_url) return !1;
              e.createTab(n.conversion_url), i.event(i.e.FRICTIONLESS_SWITCH_TAB, { WORKFLOW: s }), A(t, o);
            })(E, m, f.frictionless_workflow, n),
              (I = !0);
        }
        if (!I && m.dc_hosted_event) {
          const e = m.dc_hosted_event.event,
            s = m.dc_hosted_event.event_data;
          switch (e) {
            case r.PRE_PROCESSING_ERROR:
            case r.PROCESSING_ERROR:
              !(function (e, i, n, s) {
                (s.panel_op = p.SHOW_FRICTIONLESS_ERROR),
                  (s.content_op = l.NONE),
                  (s.error_title = i),
                  (s.error_description = n),
                  o.getItem("enableNewExtensionMenu") ? t.sendMessageToPopup(s, !1) : t.sendMessage(s, !1);
              })(0, s.title, s.description, n);
              break;
            case r.FILE_UPLOAD_START:
              !(function (e, i) {
                const n = i.panel_op;
                (i.panel_op = p.CLEAR_FRICTIONLESS_ERROR),
                  o.getItem("enableNewExtensionMenu") ? t.sendMessageToPopup(i, !1) : t.sendMessage(i, !1),
                  (i.panel_op = n);
              })(0, n);
              break;
            case r.DROPZONE_DISPLAYED:
              !(function (e, t, i, n) {
                const s = M(e);
                (s.received_display = !0), (s.dropzone_display_time = n.timeStamp), P(e, n, c.DROPZONE_DISPLAY_TIME), D(e, n, i, t);
              })(E, f.pdf_action, f.frictionless_workflow, n);
              break;
            case r.STARTUP_ERROR:
              !(function (e, t, i) {
                t === a.SEARCH ? A(e, i) : t === a.TREFOIL && C(e, i);
              })(E, workflow, f);
              const e = f.pdf_action ? f.pdf_action.toUpperCase().replace(/\-/g, "_") : "UNKNOWN";
              i.event(i.e.FRICTIONLESS_WIDGET_STARTUP_ERROR, { TOOL: e });
          }
        }
        delete f.timeStamp;
      }),
      (this.sendFrictionlessURL = async function (e, i, s) {
        (e.panel_op = p.LOAD_FRICTIONLESS), (e.frictionless_uri = await n.getFrictionlessUri()), (e.env = n.getEnv());
        let _ = M(e.tabId);
        !e.startup_time ||
          (_.startup_time && _.startup_time === e.startup_time) ||
          ((_ = this.startNewInteraction(e.tabId)), (_.startup_time = e.startup_time)),
          o.getItem("enableNewExtensionMenu") ? t.sendMessageToPopup(e, !1) : t.sendMessage(e, !1);
      }),
      (this.handleTimingInformationFromWidget = function (e, i, n) {
        let s = M(e.tabId);
        const o = e.timing_op;
        if ((delete e.timing_op, t.getTabLastMessage(e.tabId))) {
          t.updateTabMessage(e.tabId, e);
          const i = t.getTabLastMessage(e.tabId);
          (s.startup_time = s.startup_time || e.startup_time),
            (s.iframe_onload_time = s.onload_time || e.iframe_onload_time),
            (s.iframe_call_time = s.iframe_call_time || e.iframe_call_time),
            o && P(e.tabId, i, o);
        }
      });
  })()),
  t.registerHandlers({
    "get-frictionless-url": N.proxy(N.sendFrictionlessURL),
    external_msg: N.proxy(N.externalMsgHandler),
    timing_info: N.proxy(N.handleTimingInformationFromWidget)
  }));
export const frictionlessHandler = N;
