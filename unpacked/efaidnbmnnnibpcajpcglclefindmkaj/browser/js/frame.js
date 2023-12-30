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
import { dcLocalStorage as t } from "../../common/local-storage.js";
import { util as o } from "./content-util.js";
import { privateApi as n } from "./content-privateApi.js";
import { OptionPageActions as a, OptionsPageToggles as s } from "../../common/constant.js";
import { updateExtUserState as i } from "../../common/util.js";
await t.init();
const r = t.getItem("appLocale");
var l,
  d,
  _,
  c,
  p = !1,
  E = !1;
function f(e, t, n) {
  delete e.trefoilClick,
    delete e.dataURL,
    delete e.click_context,
    e.authenticatedPDF && 1 == e.authenticatedPDF && delete e.authenticatedPDF,
    o.messageToMain(e, n),
    delete e.newUI,
    delete e.trefoilUI,
    delete e.analytics,
    delete e.is_viewer,
    delete e.reload_in_native,
    d && (clearTimeout(d), (d = null)),
    t || "dismiss" === e.content_op || "resize_window" === e.content_op || C();
}
function T() {
  d && (clearTimeout(d), (d = null)),
    SETTINGS.IS_ERP_READER ? $(".acrobatMainDiv").stop().css("display", "none") : $(".acrobatMainDiv").stop().css("opacity", 1);
}
function m(e) {
  return (
    !!SETTINGS.TEST_MODE ||
    !(!e || !e.show_frictionless || (0 != e.version && (1 != e.version || 0 != e.NMHConnStatus) && e.version != SETTINGS.READER_VER))
  );
}
function u() {
  delete l.current_status,
    delete l.file_path,
    delete l.domtitle,
    delete l.timing,
    delete l.panel_op,
    delete l.is_pdf,
    delete l.trefoilUI,
    delete l.newUI;
}
function I(e, t) {
  const n = { main_op: "analytics", analytics: [[e, t]] };
  o.messageToMain(n);
}
function C() {
  u(),
    (l.content_op = "dismiss"),
    (l.main_op = "relay_to_content"),
    (l.trefoilUI = !0),
    "search" === l.frictionless_workflow && 1 == l.show_frictionless && (l.suppress_frictionless = !0),
    delete l.newUI,
    f(l);
}
function S(t) {
  (l.version > 1 || SETTINGS.IS_ERP_READER || SETTINGS.IS_READER) &&
    (0 == t
      ? ((l.content_op = "dismiss"),
        (l.main_op = "relay_to_content"),
        (l.newUI = !0),
        (l.persist = !1),
        o.analytics(l, e.PERSIST_PDF_MENU_CLOSED),
        f(l),
        delete l.content_op,
        delete l.main_op)
      : 1 == t &&
        ((l.panel_op = "pdf_menu"),
        (l.main_op = "relay_to_content"),
        (l.persist = !0),
        o.analytics(l, e.PERSIST_PDF_MENU_SHOWN),
        delete l.content_op,
        (l.newUI = !0),
        f(l, !0),
        delete l.persist,
        delete l.panel_op,
        delete l.main_op));
}
function h() {
  (d = null), $(".acrobatMainDiv").animate({ opacity: 0 }, 1500, "swing", C);
}
function v() {
  (SETTINGS.TEST_MODE || SETTINGS.DEBUG_MODE) && (d = 1),
    d ||
      p ||
      (d = setTimeout(
        function () {
          setTimeout(h);
        },
        l.is_pdf ? 3e3 : 1500
      ));
}
async function O() {
  (l.main_op = "open_in_acrobat"), (l.trefoilUI = !0), void 0 !== l.paramName && delete l.paramName;
  f(await o.handlePDFURL(l, !0), !0);
}
async function w(e) {
  (l.main_op = "open_in_acrobat"), (l.trefoilUI = !1), (l.paramName = e), delete l.content_op;
  f(await o.handlePDFURL(l, !0), !0);
}
function R(t) {
  (l.pdf_action = t),
    (l.main_op = "get-frictionless-url"),
    (l.frame_visibility = "visible"),
    (l.frictionless_workflow = "trefoil"),
    (l.startup_time = Date.now()),
    "resize_window" == l.content_op && (l.content_op = null),
    "createpdf" == t
      ? o.analytics(l, e.FRICTIONLESS_TOOL_SELECTED, { TOOL: "CREATE_PDF" })
      : "compress-pdf" == t && o.analytics(l, e.FRICTIONLESS_TOOL_SELECTED, { TOOL: "COMPRESS_PDF" }),
    f(l, !0);
}
function L(n, a) {
  n &&
    (function (e) {
      (_ = e), t.setItem("ViewResultsPref", _ ? "true" : "false"), $(".do_set_open_pref").toggleClass("open-pdf-in-acrobat");
    })(a),
    (l.main_op = "convertToPDFPopupMenu"),
    n && (l.outputPath = n),
    f(l, !0),
    n ||
      (o.analytics(l, e.TREFOIL_HTML_CONVERT_NEW),
      t.getItem("ViewResultsPref")
        ? _
          ? o.analytics(l, e.TREFOIL_HTML_CONVERT_OPEN_CHANGED)
          : o.analytics(l, e.TREFOIL_HTML_CONVERT_NO_OPEN)
        : o.analytics(l, e.TREFOIL_HTML_CONVERT_OPEN_DEFAULT));
}
function g(n) {
  (l.main_op = "appendToExistingPDFPopupMenu"),
    n && (l.outputPath = n),
    f(l, !0),
    n ||
      (o.analytics(l, e.TREFOIL_HTML_CONVERT_APPEND),
      t.getItem("ViewResultsPref")
        ? _
          ? o.analytics(l, e.TREFOIL_HTML_CONVERT_OPEN_CHANGED)
          : o.analytics(l, e.TREFOIL_HTML_CONVERT_NO_OPEN)
        : o.analytics(l, e.TREFOIL_HTML_CONVERT_OPEN_DEFAULT));
}
function N(e) {
  try {
    let t = new URL(l.frictionless_uri);
    e.origin === t.origin && ((l.main_op = "external_msg"), (l.data = e.data), (l.timeStamp = Date.now()), o.messageToMain(l));
  } catch (e) {}
}
function D() {
  I(e.TREFOIL_SETTINGS_ICON_CLICKED),
    chrome.runtime.openOptionsPage((t) => {
      chrome.runtime.lastError && I(e.TREFOIL_SETTINGS_FAILED_TO_OPEN);
    });
}
function b(n, a) {
  "true" === a && t.setItem("viewer-enabled-source", "ownership-consent"),
    t.getWithTTL("ownership-upgrade") &&
      "false" === a &&
      (o.analytics(n, e.USE_ACROBAT_VIEWER_DISABLED_DEFAULT_OWNERSHIP, { SOURCE: "trefoilMenu" }),
      o.analytics(n, e.USE_ACROBAT_VIEWER_DISABLED_DEFAULT_OWNERSHIP_EXPERIMENT, {
        SOURCE: "trefoilMenu",
        EXPERIMENT: t.getItem("experiment-ownership")
      }),
      t.removeItem("ownership-upgrade"),
      t.removeItem("defaultOwnerShipExperiment"));
}
function A() {
  if (!E) {
    (E = !0),
      window.addEventListener("message", N, !1),
      $(".do_acrobat").click(function (e) {
        let t = $(e.currentTarget);
        T(), t.hasClass("do_acrobat_FS") ? w("FillnSign") : t.hasClass("do_acrobat") && O();
      }),
      $(
        ".do_frictionless_create, .do_frictionless_compress, .do_frictionless_pdf_to_word, .do_frictionless_pdf_to_jpg, .do_frictionless_pdf_to_excel, .do_frictionless_pdf_to_ppt"
      ).click(function (t) {
        let n = $(t.currentTarget);
        T(),
          o.isEdge()
            ? ((l.main_op = "go_to_aonline"),
              n.hasClass("do_frictionless_create")
                ? ((l.verb = "convert_pdf"), I(e.FRICTIONLESS_TOOL_SELECTED_CONVERT_PDF))
                : n.hasClass("do_frictionless_compress")
                ? ((l.verb = "compress_pdf"), I(e.FRICTIONLESS_TOOL_SELECTED_COMPRESS_PDF))
                : n.hasClass("do_frictionless_pdf_to_word")
                ? ((l.verb = "pdf_to_word"), I(e.FRICTIONLESS_TOOL_SELECTED_PDFTOWORD))
                : n.hasClass("do_frictionless_pdf_to_jpg")
                ? ((l.verb = "pdf_to_jpg"), I(e.FRICTIONLESS_TOOL_SELECTED_PDFTOJPG))
                : n.hasClass("do_frictionless_pdf_to_excel")
                ? ((l.verb = "pdf_to_excel"), I(e.FRICTIONLESS_TOOL_SELECTED_PDFTOEXCEL))
                : n.hasClass("do_frictionless_pdf_to_ppt") && ((l.verb = "pdf_to_ppt"), I(e.FRICTIONLESS_TOOL_SELECTED_PDFTOPPT)),
              f(l))
            : n.hasClass("do_frictionless_create")
            ? R("createpdf")
            : n.hasClass("do_frictionless_compress")
            ? R("compress-pdf")
            : n.hasClass("do_frictionless_pdf_to_word")
            ? R("pdf-to-word")
            : n.hasClass("do_frictionless_pdf_to_jpg")
            ? R("pdf-to-image")
            : n.hasClass("do_frictionless_pdf_to_excel")
            ? R("pdf-to-excel")
            : n.hasClass("do_frictionless_pdf_to_ppt") && R("pdf-to-ppt");
      }),
      $(
        ".do_frictionless_edit , .do_frictionless_edit_rotate, .do_frictionless_edit_delete, .do_frictionless_edit_reorder, .do_frictionless_sign_fillandsign, .do_frictionless_sign_requestsignatures"
      ).click(function (t) {
        let o = $(t.currentTarget);
        (l.main_op = "go_to_aonline"),
          o.hasClass("do_frictionless_edit_rotate")
            ? ((l.verb = "edit_rotate"), I(e.FRICTIONLESS_TOOL_SELECTED_EDIT_ROTATE))
            : o.hasClass("do_frictionless_edit_delete")
            ? ((l.verb = "edit_delete"), I(e.FRICTIONLESS_TOOL_SELECTED_EDIT_DELETE))
            : o.hasClass("do_frictionless_edit_reorder")
            ? ((l.verb = "edit_reorder"), I(e.FRICTIONLESS_TOOL_SELECTED_EDIT_REORDER))
            : o.hasClass("do_frictionless_sign_fillandsign")
            ? ((l.verb = "fillandsign"), I(e.FRICTIONLESS_TOOL_SELECTED_FILL_SIGN))
            : o.hasClass("do_frictionless_sign_requestsignatures") &&
              ((l.verb = "request_signatures"), I(e.FRICTIONLESS_TOOL_SELECTED_REQUEST_SIGNATURES)),
          f(l);
      }),
      $(".accordiontoggle").click(function (e) {
        e.preventDefault();
        let t = $(this);
        t.next().next().hasClass("show")
          ? (t.next().next().removeClass("show"),
            t.next().addClass("show"),
            t.next().css("display", "block"),
            t.next().next().slideUp(0),
            t.next().delay(0).slideDown(0),
            t.addClass("stacked"),
            t.removeClass("collapsed"))
          : (t.next().removeClass("show"),
            t.next().next().addClass("show"),
            t.addClass("collapsed"),
            t.removeClass("stacked"),
            t.next().slideUp(0),
            t.next().next().slideDown(0));
      }),
      $(".do_visit_acom, .do_html_to_pdf, .go_to_aonline").click(function (t) {
        let n = $(t.currentTarget);
        T(),
          n.hasClass("do_visit_acom") &&
            (l.is_pdf ? o.analytics(l, e.TREFOIL_PDF_VISIT_AIC) : o.analytics(l, e.TREFOIL_HTML_VISIT_AIC),
            (l.handleResult = "acom"),
            (l.main_op = "goto_acom"),
            f(l)),
          n.hasClass("do_html_to_pdf") && L(),
          n.hasClass("go_to_aonline") && ((l.main_op = "go_to_aonline"), (l.verb = "default"), f(l), I(e.ACROBAT_ONLINE_CLICKED));
      }),
      $(".close-dialog").click(function () {
        $(".acrobatMainDiv").length > 0 &&
          $(".acrobatMainDiv").hasClass("widget-screen-main-div") &&
          o.analytics(l, e.FRICTIONLESS_WIDGET_CROSS_CLICKED),
          C();
      }),
      $(".settings-dialog").click(D),
      $(".action-available-click").click(function (t) {
        let n = $(t.currentTarget);
        T(), o.consoleLog(n), (l.main_op = "go_to_aonline"), (l.verb = "acrobat_label"), I(e.TREFOIL_ACROBAT_LABEL_CLICKED), f(l);
      }),
      $(".acrobatMainDiv").hover(T, v),
      $(".sign-out").click(function () {
        o.analytics(l, e.SIGN_OUT_CLICKED), (l.main_op = "sign-out"), f(l);
      }),
      $("#special").click(function () {
        o.analytics(l, e.FLICKR_OFFER_CLICKED), (l.main_op = "flickr"), f(l);
      }),
      $(".do_html_add_to_pdf").click(function () {
        g();
      }),
      $(".do_set_open_pref").click(function () {
        (_ = !(_ = $(".do_set_open_pref").hasClass("open-pdf-in-acrobat"))),
          t.setItem("ViewResultsPref", _ ? "true" : "false"),
          $(".do_set_open_pref").toggleClass("open-pdf-in-acrobat"),
          _ ? o.analytics(l, e.TREFOIL_HTML_OPENPDF_PREF_OFF) : o.analytics(l, e.TREFOIL_HTML_OPENPDF_PREF_ON),
          (l.main_op = "send-analytics"),
          f(l, !0);
      }),
      $(".do_set_pdf_viewer").click(async function () {
        (c = $(".do_set_pdf_viewer").hasClass("open_in_pdf_viewer")),
          b(l, (c = !c)),
          t.setItem("pdfViewer", c.toString()),
          await n.setViewerState(c ? "enabled" : "disabled");
        try {
          t.removeItem("netAccAdT"), t.removeItem("netAcc"), t.removeItem("netAccCN");
        } catch (e) {}
        $(".do_set_pdf_viewer").toggleClass("open_in_pdf_viewer"),
          c
            ? o.isEdge()
              ? o.analytics(l, e.USE_ACROBAT_IN_EDGE_ENABLED)
              : o.isChrome() && o.analytics(l, e.USE_ACROBAT_IN_CHROME_ENABLED)
            : o.isEdge()
            ? o.analytics(l, e.USE_ACROBAT_IN_EDGE_DISABLED)
            : o.isChrome() && o.analytics(l, e.USE_ACROBAT_IN_CHROME_DISABLED),
          setTimeout(() => {
            l.is_viewer ? f({ panel_op: "viewer_menu", reload_in_native: !0, tabId: l.tabId }, !0) : l.is_pdf && chrome.tabs.reload(),
              (l.main_op = "send-analytics"),
              f(l, !0);
          }, 20);
      }),
      $(".do-acro-prefs").click(function () {
        o.analytics(l, e.TREFOIL_HTML_PREFERENCES_CLICK), (l.main_op = "showConversionSettingsDialog"), f(l);
      }),
      $(".convert").click(function () {
        $(".convert").hasClass("convert-button") && ((l.main_op = "open_converted_file"), f(l));
      }),
      $(".always-show").prop("checked", "false" !== t.getItem("always-show-pdf-menu")),
      $(".api-option-container-inner").click(function () {
        let e = $(".always-show").prop("checked") ? "false" : "true";
        t.setItem("always-show-pdf-menu", e),
          $(".always-show").prop("checked", "true" === e),
          "false" === e ? S(!1) : "true" === e && S(!0);
      }),
      $(".always-show-pdftools").prop("checked", "false" !== t.getItem("always-show-pdftools"));
    const i = "true" === t.getItem("pdfViewer");
    $(".always-show-pdfvieweroption").prop("checked", i),
      i && $(".do_set_pdf_viewer").addClass("open_in_pdf_viewer"),
      $(".api-option-container-inner-pdftools").click(function () {
        $(".desktop-app-reader .api-option-container input[type=checkbox] ~ .checkbox-toggle").removeClass("toggle-inactive-blue-circle");
        let o = $(".always-show-pdftools").prop("checked") ? "false" : "true";
        t.setItem("always-show-pdftools", o),
          $(".always-show-pdftools").prop("checked", "true" === o),
          I("false" === o ? e.FRICTIONLESS_AUTO_SUGGESTION_DISABLED : e.FRICTIONLESS_AUTO_SUGGESTION_ENABLED);
      }),
      $(".api-option-container-inner-pdfvieweroption").click(async function () {
        $(".desktop-app-reader .api-option-container input[type=checkbox] ~ .checkbox-toggle").removeClass("toggle-inactive-blue-circle");
        let i = $(".always-show-pdfvieweroption").prop("checked") ? "false" : "true";
        const r = "true" === i ? "enabled" : "disabled";
        b(l, i), t.setItem("pdfViewer", i), await n.setViewerState(r);
        try {
          t.removeItem("netAccAdT"), t.removeItem("netAcc"), t.removeItem("netAccCN");
        } catch (e) {}
        $(".always-show-pdfvieweroption").prop("checked", "true" === i),
          "false" === i
            ? o.isEdge()
              ? o.analytics(l, e.USE_ACROBAT_IN_EDGE_DISABLED)
              : o.isChrome() && o.analytics(l, e.USE_ACROBAT_IN_CHROME_DISABLED)
            : o.isEdge()
            ? o.analytics(l, e.USE_ACROBAT_IN_EDGE_ENABLED)
            : o.isChrome() && o.analytics(l, e.USE_ACROBAT_IN_CHROME_ENABLED),
          setTimeout(() => {
            l.is_viewer ? f({ panel_op: "viewer_menu", reload_in_native: !0, tabId: l.tabId }, !0) : l.is_pdf && chrome.tabs.reload(),
              f(
                {
                  panel_op: "options_page",
                  requestType: a.OPTIONS_UPDATE_TOGGLE,
                  toggleId: s.ViewerOwnershipTitle,
                  toggleVal: "true" === i
                },
                !0
              ),
              (l.main_op = "send-analytics"),
              f(l, !0),
              o.isEdge() && f({ main_op: "pdfViewerChanged", value: i });
          }, 20);
      });
  }
}
function F(n) {
  let a,
    s,
    d,
    _ = !0,
    c = !0,
    E = !1,
    u = "web2pdfStatusFailure",
    C = "web2pdfStatusComplete";
  if (l && n && l.tabId && n.tabId && n.tabId != l.tabId) return;
  if (!n.main_op || !["analytics", "save-preferences", "fetch-preferences", "userSubscriptionData"].includes(n.main_op)) {
    if (n.test_extension)
      return (function (e) {
        switch ((o.consoleLog("TESTING"), o.consoleLogDir(JSON.stringify(e)), e.test_extension)) {
          case "to_html":
            L(e.outputPath, e.openPDF);
            break;
          case "doAcrobat":
            O();
            break;
          case "doAcrobat_FS":
            w("FillnSign");
            break;
          case "to_append":
            g(e.outputPath);
        }
      })(n);
    switch (
      (n.version === SETTINGS.ERP_READER_VER && (SETTINGS.IS_ERP_READER = !0),
      A(),
      delete (l = { ...n, tabId: l.tabId }).analytics,
      T(),
      (p = !1),
      o.translateElements(".translate"),
      1 === l.version && $("#web2pdfOpenButtonText").val(o.getTranslation("web2pdfOpenButtonTextOlder")),
      (1 !== l.version && 0 !== l.version) || $("#web2pdfShowPersistentOpen").text(o.getTranslation("web2pdfAlwaysShow")),
      l.version === SETTINGS.READER_VER && $("#web2pdfOpenButtonText").val(o.getTranslation("web2pdfOpenButtonText")),
      $(".ui-element").addClass("hidden"),
      $("#action_message").text(""),
      (function (e, t) {
        if (SETTINGS.DEBUG_MODE) {
          let n,
            a = [t];
          for (n in e) e.hasOwnProperty(n) && a.push("  " + n + ": " + e[n]);
          o.consoleLog(a.join("\n"));
        }
      })(l, "Receive frame message:"),
      (s = l.panel_op),
      delete l.panel_op,
      s)
    ) {
      case "pdf_menu":
        (p = !0),
          !0 === SETTINGS.FILL_N_SIGN_ENABLED &&
            ($("#web2pdfFillSignAcrobatButtonText").removeClass("hidden"), $(".acro-option.pdf").removeClass("hidden")),
          (1 == l.version && 0 == l.NMHConnStatus) || 0 == l.version
            ? ($(".go_to_aonline").removeClass("hidden"), l.show_frictionless || $(".do_visit_acom").addClass("hidden"))
            : l.version === SETTINGS.READER_VER
            ? ($(".acro-option.pdf").removeClass("hidden"),
              $(".acro-option.pdf.horizontal-rule").addClass("hidden"),
              $(".acrobatMainDiv").removeClass("home-screen"),
              $(".acrobatMainDiv").addClass("pdf-screen"),
              $(".reader-option.pdf.horizontal-rule.pref-divider").removeClass("hidden"))
            : ($(".acro-option.pdf").removeClass("hidden"), $(".acro-option.pdf.horizontal-rule").removeClass("hidden")),
          (function () {
            if (SETTINGS.VIEWER_ENABLED && !l.incognito) {
              let e = !(0 == l.version || 1 == l.version || l.version === SETTINGS.READER_VER || l.version === SETTINGS.ERP_READER_VER);
              $(".acro-option-reader-pdf").removeClass("hidden"),
                $(".acro-option-reader-conditional").addClass("hidden"),
                !SETTINGS.VIEWER_ENABLED_FOR_ACROBAT &&
                  e &&
                  ($(".acro-option-reader-pdf").addClass("hidden"),
                  $(".acro-option-reader-conditional").removeClass("hidden"),
                  $(".acro-option.pdf.horizontal-rule").addClass("hidden")),
                l.version < 2 ||
                  l.version === SETTINGS.READER_VER ||
                  ($(".acro-option-reader-pdf").addClass("viewer-api-option-container"),
                  $(".acro-option-reader-conditional").addClass("viewer-api-option-container")),
                l.version > 1 &&
                  SETTINGS.VIEWER_SHOW_OPEN_IN_ACRO &&
                  (10 === parseInt(t.getItem("fteDenied")) || "false" === t.getItem("pdfViewer")) &&
                  $(".acro-option-reader-conditional").removeClass("hidden");
            }
          })();
        break;
      case "viewer_menu":
        (p = !0),
          SETTINGS.VIEWER_ENABLED &&
            !l.incognito &&
            ($(".acro-option-reader-pdf").removeClass("hidden"),
            $(".acrobatMainDiv").css("width", "-webkit-fill-available"),
            $(".status-dialog").css("width", "-webkit-fill-available"),
            (l.version < 2 || l.version === SETTINGS.READER_VER) &&
              $(".api-option-container-inner-pdfvieweroption").css("padding-left", "6px"));
        break;
      case "error":
        $(".error")
          .removeClass("hidden")
          .text("Unexpected Error:" + l.error.name + "\nReference: " + l.error.errnum + "\n" + l.error.details);
        break;
      case "flickr":
        $(".action-available").removeClass("hidden"),
          $("#action_message").text("Create slide shows and contact sheets."),
          $(".special_question").removeClass("hidden"),
          $("#special").removeClass("hidden");
        break;
      case "status":
        $(".progress-area").removeClass("hidden"),
          $(".convert").text(l.domtitle),
          $(".convert-status, .convert-title").addClass("hidden"),
          $(".convert").removeClass("convert-button hidden"),
          "waiting" === l.current_status
            ? (o.analytics(l, e.TREFOIL_HTML_CONVERT_WAITING), (a = o.getTranslation("web2pdfStatusWaiting")), (_ = !1))
            : "downloading" === l.current_status
            ? (o.analytics(l, e.TREFOIL_HTML_CONVERT_DOWNLOADING), (a = o.getTranslation("web2pdfStatusDownloading")), (_ = !1))
            : "in_progress" === l.current_status
            ? (o.analytics(l, e.TREFOIL_HTML_CONVERT_IN_PROGRESS), (a = o.getTranslation("web2pdfStatusInProgress")), (_ = !1))
            : "filelocked" === l.current_status
            ? (a = o.getTranslation("web2pdfFileLockedError"))
            : "cancelled" === l.current_status
            ? (o.analytics(l, e.TREFOIL_HTML_CONVERT_CANCELLED), (a = o.getTranslation("web2pdfStatusCancelled")), (E = !0))
            : "complete" === l.current_status
            ? (o.analytics(l, e.TREFOIL_HTML_CONVERT_COMPLETE),
              l.file_path
                ? ($(".convert").text(o.getTranslation("web2pdfOpenInDCButtonText")), $(".convert").addClass("convert-button"))
                : ($(".convert").empty(), $(".convert").addClass("hidden")))
            : "failure" === l.current_status
            ? (o.analytics(l, e.TREFOIL_HTML_CONVERT_FAILED), l.message && ((a = l.message), (a = $("<div/>").text(a).html())), (c = !1))
            : "noacrobat" === l.current_status
            ? (o.analytics(l, e.TREFOIL_HTML_CONVERT_NO_ACROBAT), (a = o.getTranslation("web2pdfUnsupportedAcrobatVersion")), (c = !1))
            : "unknown" === l.current_status
            ? ((a = o.getTranslation("web2pdfStatusUnknownFailure")), (c = !1))
            : "pdf_downloading" === l.current_status
            ? ((a = o.getTranslation("web2pdfStatusDownloadingPDF")), (_ = !1))
            : "pdf_failure" === l.current_status
            ? (o.analytics(l, e.TREFOIL_PDF_DOWNLOAD_FAILED), (u = "web2pdfStatusUnknownFailure"), (c = !1))
            : "pdf_downloaded" === l.current_status
            ? ((a = o.getTranslation("web2pdfPDFOpening")), (_ = !1))
            : "pdf_opened" === l.current_status
            ? ((c = !0), (C = "web2pdfPDFOpened"))
            : "pdf_open_failed" === l.current_status && ((c = !1), (_ = !0), (u = "web2pdfPDFOpenFailed")),
          a && ($(".convert-title").removeClass("hidden"), $(".convert-title").html(a)),
          _
            ? (delete l.panel_op,
              (d = l.is_pdf ? ".acro-option.pdf" : ".acro-option.html"),
              $(d).removeClass("hidden"),
              $(".actions").removeClass("hidden"),
              $(".acro-option-conditional.html").addClass("hidden"),
              SETTINGS.VIEWER_ENABLED &&
                !l.incognito &&
                (!SETTINGS.VIEWER_ENABLED_FOR_ACROBAT &&
                  l.version > 1 &&
                  !SETTINGS.IS_ERP_READER &&
                  !SETTINGS.IS_READER &&
                  ($(".acro-option-conditional.html").addClass("hidden"), $(".acro-option.pdf.horizontal-rule").addClass("hidden")),
                $(".status-dialog").css("width", "-webkit-fill-available")),
              $(".convert").removeClass("convert-busy"),
              $(".convert-status").removeClass("hidden"),
              c
                ? l.is_pdf
                  ? ($(".progress-area").addClass("hidden"),
                    $(".convert").removeClass("convert-busy"),
                    $(".convert-status").addClass("hidden"))
                  : ($(".convert-status-icon").addClass("icon-success"), $(".convert-status-title").text(o.getTranslation(C)))
                : ((p = !0),
                  $(".convert-status-icon").removeClass("icon-success"),
                  $(".convert-status-icon").addClass("icon-error"),
                  $(".convert-status-title").text(o.getTranslation(u)),
                  $(".convert").addClass("hidden")),
              E && ($(".convert-status").addClass("hidden"), $(".convert").addClass("hidden")))
            : ((p = !0), $(".actions").addClass("hidden"), $(".convert").addClass("convert-busy"));
        break;
      case "html_menu":
        (p = !0),
          m(l)
            ? ($(".reader-option.html").removeClass("hidden"),
              o.isEdge() && $(".chrome-only").addClass("hidden"),
              SETTINGS.VIEWER_ENABLED || $(".acro-option-reader-pdf").addClass("hidden"),
              (p = !0))
            : ($(".acro-option.html").removeClass("hidden"),
              $(".acro-option-conditional.html").addClass("hidden"),
              SETTINGS.VIEWER_ENABLED &&
                !l.incognito &&
                ($(".acro-option-conditional.html").removeClass("hidden"),
                !SETTINGS.VIEWER_ENABLED_FOR_ACROBAT &&
                  l.version > 1 &&
                  !SETTINGS.IS_ERP_READER &&
                  !SETTINGS.IS_READER &&
                  $(".acro-option-conditional.html").addClass("hidden"),
                $(".status-dialog").css("width", "-webkit-fill-available")));
        break;
      case "load-frictionless":
        if (((p = !0), "resize_window" === l.content_op));
        else if (1 == l.hide_spinner)
          delete l.hide_spinner, $(".frictionless-container").removeClass("hidden"), $(".frictionless-loader").addClass("hidden");
        else if (0 == $(".frictionless-container").children().length) {
          $(".acrobatMainDiv").removeClass("home-screen"),
            $(".acrobatMainDiv").addClass("widget-screen-main-div"),
            $(".actions").addClass("hidden"),
            "trefoil" === l.frictionless_workflow &&
              ($(".frictionless-loader").removeClass("hidden"),
              $(".frictionless-loader").attr("data-loading-title", o.getTranslation("web2pdfLoaderTitle") || "Loading..."),
              $(".frictionless-container").addClass("hidden")),
            "search" === l.frictionless_workflow && i();
          let n = (function (o, n) {
            let a = document.createElement("iframe");
            a.setAttribute("referrerpolicy", "no-referrer"), a.classList.add("frictionless-iframe");
            let s = new URL(o);
            if (
              (n &&
                (r ? (n.locale = r) : l.locale ? (n.locale = l.locale) : (n.locale = chrome.i18n.getMessage("@@ui_locale")),
                Object.keys(n).forEach((e) => {
                  s.searchParams.append(e, n[e]);
                })),
              "false" === t.getItem("logAnalytics"))
            ) {
              let e = s.toString();
              e = e.concat("&app!analytics=disable");
              try {
                s = new URL(e);
              } catch (e) {
                s = "";
              }
            }
            if ("test" === l.env || "stage" === l.env) {
              let e = s.toString();
              e = e.concat("&app!versions=latest");
              try {
                s = new URL(e);
              } catch (e) {
                s = "";
              }
            }
            return (
              (a.onerror = function (t) {
                I(e.FRICTIONLESS_WIDGET_LOADING_FAILED);
              }),
              (a.onload = function (e) {
                f({ iframe_onload_time: Date.now(), main_op: "timing_info", timing_op: "startup_to_iframe_load" }, !0),
                  "trefoil" === n.workflow && a.contentWindow.postMessage({ valid: !0 }, s.origin);
              }),
              f({ iframe_call_time: Date.now(), main_op: "timing_info" }, !0),
              a.setAttribute("src", s),
              a
            );
          })(l.frictionless_uri, { verb: l.pdf_action, workflow: l.frictionless_workflow, dropzone2: "true" });
          $(".frictionless-container").append(n), $(".frictionless-host").removeClass("hidden"), y();
        }
        break;
      case "show-frictionless-error":
        if (l.error_title && l.error_description) {
          let e = l.error_title,
            t = l.error_description;
          delete l.error_title,
            delete l.error_description,
            (function (e, t) {
              const o = $(".frictionless-error"),
                n = $(".error-title");
              $(".error-details").text(t), n.text(e), o.removeClass("hidden"), y();
            })(e, t);
        }
        break;
      case "clear-frictionless-error":
        $(".frictionless-error").addClass("hidden"), y();
        break;
      case "send-external-msg":
        try {
          let e = new URL(l.frictionless_uri),
            t = $(".frictionless-iframe");
          if (1 == t.length) {
            t[0].contentWindow.postMessage(l.data, e.origin), delete l.data;
          }
        } catch (e) {}
        p = !0;
    }
    v();
  }
}
function y() {
  u(),
    (l.content_op = "resize_window"),
    (l.panel_op = "load-frictionless"),
    (l.main_op = "relay_to_content"),
    delete l.newUI,
    delete l.trefoilUI,
    f(l),
    (l.content_op = null),
    (l.panel_op = null);
}
o.isChrome() &&
  $(function () {
    A();
  }),
  o.addMainListener(F),
  $(function () {
    if (window.location.search) {
      if (
        ((l = JSON.parse(decodeURIComponent(window.location.search.split("=")[1]))),
        SETTINGS.TEST_MODE &&
          window.addEventListener(
            "message",
            function (e) {
              F(e.data);
            },
            !1
          ),
        m(l))
      ) {
        let t;
        switch (
          ($(".do_visit_acom").addClass("hidden"),
          $("body").addClass("desktop-app-reader"),
          "html_menu" == l.panel_op && ($(".acrobatMainDiv").addClass("home-screen"), I(e.FRICTIONLESS_HOME_SCREEN_SHOWN)),
          r || l.locale)
        ) {
          case "ja-JP":
            t = { kitId: "vaq7mqd", scriptTimeout: 3e3, async: !0 };
            break;
          case "ko-KR":
            t = { kitId: "leb2lwu", scriptTimeout: 3e3, async: !0 };
            break;
          case "zh_CN":
            t = { kitId: "eyt7cbr", scriptTimeout: 3e3, async: !0 };
        }
      }
      !(function (e) {
        var t;
        void 0 !== (t = e) && void 0 !== t.paramName && delete t.paramName,
          (SETTINGS.FILL_N_SIGN_ENABLED = e.isFillnSignEnabled),
          (SETTINGS.SHAREPOINT_ENABLED = e.isSharePointEnabled),
          F(e);
      })(l),
        "false" === t.getItem("ViewResultsPref") ? (_ = !1) : ($(".do_set_open_pref").addClass("open-pdf-in-acrobat"), (_ = !0));
    }
  });
