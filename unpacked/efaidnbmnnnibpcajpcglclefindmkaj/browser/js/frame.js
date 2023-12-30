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
await t.init();
const i = t.getItem("appLocale");
var r,
  l,
  d,
  _,
  c = !1,
  p = !1;
function E(e, t, n) {
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
    l && (clearTimeout(l), (l = null)),
    t || "dismiss" === e.content_op || "resize_window" === e.content_op || I();
}
function f() {
  l && (clearTimeout(l), (l = null)),
    SETTINGS.IS_ERP_READER ? $(".acrobatMainDiv").stop().css("display", "none") : $(".acrobatMainDiv").stop().css("opacity", 1);
}
function T(e) {
  return (
    !!SETTINGS.TEST_MODE ||
    !(!e || !e.show_frictionless || (0 != e.version && (1 != e.version || 0 != e.NMHConnStatus) && e.version != SETTINGS.READER_VER))
  );
}
function m() {
  delete r.current_status,
    delete r.file_path,
    delete r.domtitle,
    delete r.timing,
    delete r.panel_op,
    delete r.is_pdf,
    delete r.trefoilUI,
    delete r.newUI;
}
function u(e, t) {
  const n = { main_op: "analytics", analytics: [[e, t]] };
  o.messageToMain(n);
}
function I() {
  m(),
    (r.content_op = "dismiss"),
    (r.main_op = "relay_to_content"),
    (r.trefoilUI = !0),
    "search" === r.frictionless_workflow && 1 == r.show_frictionless && (r.suppress_frictionless = !0),
    delete r.newUI,
    E(r);
}
function C(t) {
  (r.version > 1 || SETTINGS.IS_ERP_READER || SETTINGS.IS_READER) &&
    (0 == t
      ? ((r.content_op = "dismiss"),
        (r.main_op = "relay_to_content"),
        (r.newUI = !0),
        (r.persist = !1),
        o.analytics(r, e.PERSIST_PDF_MENU_CLOSED),
        E(r),
        delete r.content_op,
        delete r.main_op)
      : 1 == t &&
        ((r.panel_op = "pdf_menu"),
        (r.main_op = "relay_to_content"),
        (r.persist = !0),
        o.analytics(r, e.PERSIST_PDF_MENU_SHOWN),
        delete r.content_op,
        (r.newUI = !0),
        E(r, !0),
        delete r.persist,
        delete r.panel_op,
        delete r.main_op));
}
function S() {
  (l = null), $(".acrobatMainDiv").animate({ opacity: 0 }, 1500, "swing", I);
}
function h() {
  (SETTINGS.TEST_MODE || SETTINGS.DEBUG_MODE) && (l = 1),
    l ||
      c ||
      (l = setTimeout(
        function () {
          setTimeout(S);
        },
        r.is_pdf ? 3e3 : 1500
      ));
}
async function v() {
  (r.main_op = "open_in_acrobat"), (r.trefoilUI = !0), void 0 !== r.paramName && delete r.paramName;
  E(await o.handlePDFURL(r, !0), !0);
}
async function O(e) {
  (r.main_op = "open_in_acrobat"), (r.trefoilUI = !1), (r.paramName = e), delete r.content_op;
  E(await o.handlePDFURL(r, !0), !0);
}
function R(t) {
  (r.pdf_action = t),
    (r.main_op = "get-frictionless-url"),
    (r.frame_visibility = "visible"),
    (r.frictionless_workflow = "trefoil"),
    (r.startup_time = Date.now()),
    "resize_window" == r.content_op && (r.content_op = null),
    "createpdf" == t
      ? o.analytics(r, e.FRICTIONLESS_TOOL_SELECTED, { TOOL: "CREATE_PDF" })
      : "compress-pdf" == t && o.analytics(r, e.FRICTIONLESS_TOOL_SELECTED, { TOOL: "COMPRESS_PDF" }),
    E(r, !0);
}
function w(n, a) {
  n &&
    (function (e) {
      (d = e), t.setItem("ViewResultsPref", d ? "true" : "false"), $(".do_set_open_pref").toggleClass("open-pdf-in-acrobat");
    })(a),
    (r.main_op = "convertToPDFPopupMenu"),
    n && (r.outputPath = n),
    E(r, !0),
    n ||
      (o.analytics(r, e.TREFOIL_HTML_CONVERT_NEW),
      t.getItem("ViewResultsPref")
        ? d
          ? o.analytics(r, e.TREFOIL_HTML_CONVERT_OPEN_CHANGED)
          : o.analytics(r, e.TREFOIL_HTML_CONVERT_NO_OPEN)
        : o.analytics(r, e.TREFOIL_HTML_CONVERT_OPEN_DEFAULT));
}
function L(n) {
  (r.main_op = "appendToExistingPDFPopupMenu"),
    n && (r.outputPath = n),
    E(r, !0),
    n ||
      (o.analytics(r, e.TREFOIL_HTML_CONVERT_APPEND),
      t.getItem("ViewResultsPref")
        ? d
          ? o.analytics(r, e.TREFOIL_HTML_CONVERT_OPEN_CHANGED)
          : o.analytics(r, e.TREFOIL_HTML_CONVERT_NO_OPEN)
        : o.analytics(r, e.TREFOIL_HTML_CONVERT_OPEN_DEFAULT));
}
function g(e) {
  try {
    let t = new URL(r.frictionless_uri);
    e.origin === t.origin && ((r.main_op = "external_msg"), (r.data = e.data), (r.timeStamp = Date.now()), o.messageToMain(r));
  } catch (e) {}
}
function N() {
  u(e.TREFOIL_SETTINGS_ICON_CLICKED),
    chrome.runtime.openOptionsPage((t) => {
      chrome.runtime.lastError && u(e.TREFOIL_SETTINGS_FAILED_TO_OPEN);
    });
}
function D(n, a) {
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
function b() {
  if (!p) {
    (p = !0),
      window.addEventListener("message", g, !1),
      $(".do_acrobat").click(function (e) {
        let t = $(e.currentTarget);
        f(), t.hasClass("do_acrobat_FS") ? O("FillnSign") : t.hasClass("do_acrobat") && v();
      }),
      $(
        ".do_frictionless_create, .do_frictionless_compress, .do_frictionless_pdf_to_word, .do_frictionless_pdf_to_jpg, .do_frictionless_pdf_to_excel, .do_frictionless_pdf_to_ppt"
      ).click(function (t) {
        let n = $(t.currentTarget);
        f(),
          o.isEdge()
            ? ((r.main_op = "go_to_aonline"),
              n.hasClass("do_frictionless_create")
                ? ((r.verb = "convert_pdf"), u(e.FRICTIONLESS_TOOL_SELECTED_CONVERT_PDF))
                : n.hasClass("do_frictionless_compress")
                ? ((r.verb = "compress_pdf"), u(e.FRICTIONLESS_TOOL_SELECTED_COMPRESS_PDF))
                : n.hasClass("do_frictionless_pdf_to_word")
                ? ((r.verb = "pdf_to_word"), u(e.FRICTIONLESS_TOOL_SELECTED_PDFTOWORD))
                : n.hasClass("do_frictionless_pdf_to_jpg")
                ? ((r.verb = "pdf_to_jpg"), u(e.FRICTIONLESS_TOOL_SELECTED_PDFTOJPG))
                : n.hasClass("do_frictionless_pdf_to_excel")
                ? ((r.verb = "pdf_to_excel"), u(e.FRICTIONLESS_TOOL_SELECTED_PDFTOEXCEL))
                : n.hasClass("do_frictionless_pdf_to_ppt") && ((r.verb = "pdf_to_ppt"), u(e.FRICTIONLESS_TOOL_SELECTED_PDFTOPPT)),
              E(r))
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
        (r.main_op = "go_to_aonline"),
          o.hasClass("do_frictionless_edit_rotate")
            ? ((r.verb = "edit_rotate"), u(e.FRICTIONLESS_TOOL_SELECTED_EDIT_ROTATE))
            : o.hasClass("do_frictionless_edit_delete")
            ? ((r.verb = "edit_delete"), u(e.FRICTIONLESS_TOOL_SELECTED_EDIT_DELETE))
            : o.hasClass("do_frictionless_edit_reorder")
            ? ((r.verb = "edit_reorder"), u(e.FRICTIONLESS_TOOL_SELECTED_EDIT_REORDER))
            : o.hasClass("do_frictionless_sign_fillandsign")
            ? ((r.verb = "fillandsign"), u(e.FRICTIONLESS_TOOL_SELECTED_FILL_SIGN))
            : o.hasClass("do_frictionless_sign_requestsignatures") &&
              ((r.verb = "request_signatures"), u(e.FRICTIONLESS_TOOL_SELECTED_REQUEST_SIGNATURES)),
          E(r);
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
        f(),
          n.hasClass("do_visit_acom") &&
            (r.is_pdf ? o.analytics(r, e.TREFOIL_PDF_VISIT_AIC) : o.analytics(r, e.TREFOIL_HTML_VISIT_AIC),
            (r.handleResult = "acom"),
            (r.main_op = "goto_acom"),
            E(r)),
          n.hasClass("do_html_to_pdf") && w(),
          n.hasClass("go_to_aonline") && ((r.main_op = "go_to_aonline"), (r.verb = "default"), E(r), u(e.ACROBAT_ONLINE_CLICKED));
      }),
      $(".close-dialog").click(function () {
        $(".acrobatMainDiv").length > 0 &&
          $(".acrobatMainDiv").hasClass("widget-screen-main-div") &&
          o.analytics(r, e.FRICTIONLESS_WIDGET_CROSS_CLICKED),
          I();
      }),
      $(".settings-dialog").click(N),
      $(".action-available-click").click(function (t) {
        let n = $(t.currentTarget);
        f(), o.consoleLog(n), (r.main_op = "go_to_aonline"), (r.verb = "acrobat_label"), u(e.TREFOIL_ACROBAT_LABEL_CLICKED), E(r);
      }),
      $(".acrobatMainDiv").hover(f, h),
      $(".sign-out").click(function () {
        o.analytics(r, e.SIGN_OUT_CLICKED), (r.main_op = "sign-out"), E(r);
      }),
      $("#special").click(function () {
        o.analytics(r, e.FLICKR_OFFER_CLICKED), (r.main_op = "flickr"), E(r);
      }),
      $(".do_html_add_to_pdf").click(function () {
        L();
      }),
      $(".do_set_open_pref").click(function () {
        (d = !(d = $(".do_set_open_pref").hasClass("open-pdf-in-acrobat"))),
          t.setItem("ViewResultsPref", d ? "true" : "false"),
          $(".do_set_open_pref").toggleClass("open-pdf-in-acrobat"),
          d ? o.analytics(r, e.TREFOIL_HTML_OPENPDF_PREF_OFF) : o.analytics(r, e.TREFOIL_HTML_OPENPDF_PREF_ON),
          (r.main_op = "send-analytics"),
          E(r, !0);
      }),
      $(".do_set_pdf_viewer").click(async function () {
        (_ = $(".do_set_pdf_viewer").hasClass("open_in_pdf_viewer")),
          D(r, (_ = !_)),
          t.setItem("pdfViewer", _.toString()),
          await n.setViewerState(_ ? "enabled" : "disabled");
        try {
          t.removeItem("netAccAdT"), t.removeItem("netAcc"), t.removeItem("netAccCN");
        } catch (e) {}
        $(".do_set_pdf_viewer").toggleClass("open_in_pdf_viewer"),
          _
            ? o.isEdge()
              ? o.analytics(r, e.USE_ACROBAT_IN_EDGE_ENABLED)
              : o.isChrome() && o.analytics(r, e.USE_ACROBAT_IN_CHROME_ENABLED)
            : o.isEdge()
            ? o.analytics(r, e.USE_ACROBAT_IN_EDGE_DISABLED)
            : o.isChrome() && o.analytics(r, e.USE_ACROBAT_IN_CHROME_DISABLED),
          setTimeout(() => {
            r.is_viewer ? E({ panel_op: "viewer_menu", reload_in_native: !0, tabId: r.tabId }, !0) : r.is_pdf && chrome.tabs.reload(),
              (r.main_op = "send-analytics"),
              E(r, !0);
          }, 20);
      }),
      $(".do-acro-prefs").click(function () {
        o.analytics(r, e.TREFOIL_HTML_PREFERENCES_CLICK), (r.main_op = "showConversionSettingsDialog"), E(r);
      }),
      $(".convert").click(function () {
        $(".convert").hasClass("convert-button") && ((r.main_op = "open_converted_file"), E(r));
      }),
      $(".always-show").prop("checked", "false" !== t.getItem("always-show-pdf-menu")),
      $(".api-option-container-inner").click(function () {
        let e = $(".always-show").prop("checked") ? "false" : "true";
        t.setItem("always-show-pdf-menu", e),
          $(".always-show").prop("checked", "true" === e),
          "false" === e ? C(!1) : "true" === e && C(!0);
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
          u("false" === o ? e.FRICTIONLESS_AUTO_SUGGESTION_DISABLED : e.FRICTIONLESS_AUTO_SUGGESTION_ENABLED);
      }),
      $(".api-option-container-inner-pdfvieweroption").click(async function () {
        $(".desktop-app-reader .api-option-container input[type=checkbox] ~ .checkbox-toggle").removeClass("toggle-inactive-blue-circle");
        let i = $(".always-show-pdfvieweroption").prop("checked") ? "false" : "true";
        const l = "true" === i ? "enabled" : "disabled";
        D(r, i), t.setItem("pdfViewer", i), await n.setViewerState(l);
        try {
          t.removeItem("netAccAdT"), t.removeItem("netAcc"), t.removeItem("netAccCN");
        } catch (e) {}
        $(".always-show-pdfvieweroption").prop("checked", "true" === i),
          "false" === i
            ? o.isEdge()
              ? o.analytics(r, e.USE_ACROBAT_IN_EDGE_DISABLED)
              : o.isChrome() && o.analytics(r, e.USE_ACROBAT_IN_CHROME_DISABLED)
            : o.isEdge()
            ? o.analytics(r, e.USE_ACROBAT_IN_EDGE_ENABLED)
            : o.isChrome() && o.analytics(r, e.USE_ACROBAT_IN_CHROME_ENABLED),
          setTimeout(() => {
            r.is_viewer ? E({ panel_op: "viewer_menu", reload_in_native: !0, tabId: r.tabId }, !0) : r.is_pdf && chrome.tabs.reload(),
              E(
                {
                  panel_op: "options_page",
                  requestType: a.OPTIONS_UPDATE_TOGGLE,
                  toggleId: s.ViewerOwnershipTitle,
                  toggleVal: "true" === i
                },
                !0
              ),
              (r.main_op = "send-analytics"),
              E(r, !0),
              o.isEdge() && E({ main_op: "pdfViewerChanged", value: i });
          }, 20);
      });
  }
}
function A(n) {
  let a,
    s,
    l,
    d = !0,
    _ = !0,
    p = !1,
    m = "web2pdfStatusFailure",
    I = "web2pdfStatusComplete";
  if (r && n && r.tabId && n.tabId && n.tabId != r.tabId) return;
  if (!n.main_op || !["analytics", "save-preferences", "fetch-preferences", "userSubscriptionData"].includes(n.main_op)) {
    if (n.test_extension)
      return (function (e) {
        switch ((o.consoleLog("TESTING"), o.consoleLogDir(JSON.stringify(e)), e.test_extension)) {
          case "to_html":
            w(e.outputPath, e.openPDF);
            break;
          case "doAcrobat":
            v();
            break;
          case "doAcrobat_FS":
            O("FillnSign");
            break;
          case "to_append":
            L(e.outputPath);
        }
      })(n);
    switch (
      (n.version === SETTINGS.ERP_READER_VER && (SETTINGS.IS_ERP_READER = !0),
      b(),
      delete (r = { ...n, tabId: r.tabId }).analytics,
      f(),
      (c = !1),
      o.translateElements(".translate"),
      1 === r.version && $("#web2pdfOpenButtonText").val(o.getTranslation("web2pdfOpenButtonTextOlder")),
      (1 !== r.version && 0 !== r.version) || $("#web2pdfShowPersistentOpen").text(o.getTranslation("web2pdfAlwaysShow")),
      r.version === SETTINGS.READER_VER && $("#web2pdfOpenButtonText").val(o.getTranslation("web2pdfOpenButtonText")),
      $(".ui-element").addClass("hidden"),
      $("#action_message").text(""),
      (function (e, t) {
        if (SETTINGS.DEBUG_MODE) {
          let n,
            a = [t];
          for (n in e) e.hasOwnProperty(n) && a.push("  " + n + ": " + e[n]);
          o.consoleLog(a.join("\n"));
        }
      })(r, "Receive frame message:"),
      (s = r.panel_op),
      delete r.panel_op,
      s)
    ) {
      case "pdf_menu":
        (c = !0),
          !0 === SETTINGS.FILL_N_SIGN_ENABLED &&
            ($("#web2pdfFillSignAcrobatButtonText").removeClass("hidden"), $(".acro-option.pdf").removeClass("hidden")),
          (1 == r.version && 0 == r.NMHConnStatus) || 0 == r.version
            ? ($(".go_to_aonline").removeClass("hidden"), r.show_frictionless || $(".do_visit_acom").addClass("hidden"))
            : r.version === SETTINGS.READER_VER
            ? ($(".acro-option.pdf").removeClass("hidden"),
              $(".acro-option.pdf.horizontal-rule").addClass("hidden"),
              $(".acrobatMainDiv").removeClass("home-screen"),
              $(".acrobatMainDiv").addClass("pdf-screen"),
              $(".reader-option.pdf.horizontal-rule.pref-divider").removeClass("hidden"))
            : ($(".acro-option.pdf").removeClass("hidden"), $(".acro-option.pdf.horizontal-rule").removeClass("hidden")),
          (function () {
            if (SETTINGS.VIEWER_ENABLED && !r.incognito) {
              let e = !(0 == r.version || 1 == r.version || r.version === SETTINGS.READER_VER || r.version === SETTINGS.ERP_READER_VER);
              $(".acro-option-reader-pdf").removeClass("hidden"),
                $(".acro-option-reader-conditional").addClass("hidden"),
                !SETTINGS.VIEWER_ENABLED_FOR_ACROBAT &&
                  e &&
                  ($(".acro-option-reader-pdf").addClass("hidden"),
                  $(".acro-option-reader-conditional").removeClass("hidden"),
                  $(".acro-option.pdf.horizontal-rule").addClass("hidden")),
                r.version < 2 ||
                  r.version === SETTINGS.READER_VER ||
                  ($(".acro-option-reader-pdf").addClass("viewer-api-option-container"),
                  $(".acro-option-reader-conditional").addClass("viewer-api-option-container")),
                r.version > 1 &&
                  SETTINGS.VIEWER_SHOW_OPEN_IN_ACRO &&
                  (10 === parseInt(t.getItem("fteDenied")) || "false" === t.getItem("pdfViewer")) &&
                  $(".acro-option-reader-conditional").removeClass("hidden");
            }
          })();
        break;
      case "viewer_menu":
        (c = !0),
          SETTINGS.VIEWER_ENABLED &&
            !r.incognito &&
            ($(".acro-option-reader-pdf").removeClass("hidden"),
            $(".acrobatMainDiv").css("width", "-webkit-fill-available"),
            $(".status-dialog").css("width", "-webkit-fill-available"),
            (r.version < 2 || r.version === SETTINGS.READER_VER) &&
              $(".api-option-container-inner-pdfvieweroption").css("padding-left", "6px"));
        break;
      case "error":
        $(".error")
          .removeClass("hidden")
          .text("Unexpected Error:" + r.error.name + "\nReference: " + r.error.errnum + "\n" + r.error.details);
        break;
      case "flickr":
        $(".action-available").removeClass("hidden"),
          $("#action_message").text("Create slide shows and contact sheets."),
          $(".special_question").removeClass("hidden"),
          $("#special").removeClass("hidden");
        break;
      case "status":
        $(".progress-area").removeClass("hidden"),
          $(".convert").text(r.domtitle),
          $(".convert-status, .convert-title").addClass("hidden"),
          $(".convert").removeClass("convert-button hidden"),
          "waiting" === r.current_status
            ? (o.analytics(r, e.TREFOIL_HTML_CONVERT_WAITING), (a = o.getTranslation("web2pdfStatusWaiting")), (d = !1))
            : "downloading" === r.current_status
            ? (o.analytics(r, e.TREFOIL_HTML_CONVERT_DOWNLOADING), (a = o.getTranslation("web2pdfStatusDownloading")), (d = !1))
            : "in_progress" === r.current_status
            ? (o.analytics(r, e.TREFOIL_HTML_CONVERT_IN_PROGRESS), (a = o.getTranslation("web2pdfStatusInProgress")), (d = !1))
            : "filelocked" === r.current_status
            ? (a = o.getTranslation("web2pdfFileLockedError"))
            : "cancelled" === r.current_status
            ? (o.analytics(r, e.TREFOIL_HTML_CONVERT_CANCELLED), (a = o.getTranslation("web2pdfStatusCancelled")), (p = !0))
            : "complete" === r.current_status
            ? (o.analytics(r, e.TREFOIL_HTML_CONVERT_COMPLETE),
              r.file_path
                ? ($(".convert").text(o.getTranslation("web2pdfOpenInDCButtonText")), $(".convert").addClass("convert-button"))
                : ($(".convert").empty(), $(".convert").addClass("hidden")))
            : "failure" === r.current_status
            ? (o.analytics(r, e.TREFOIL_HTML_CONVERT_FAILED), r.message && ((a = r.message), (a = $("<div/>").text(a).html())), (_ = !1))
            : "noacrobat" === r.current_status
            ? (o.analytics(r, e.TREFOIL_HTML_CONVERT_NO_ACROBAT), (a = o.getTranslation("web2pdfUnsupportedAcrobatVersion")), (_ = !1))
            : "unknown" === r.current_status
            ? ((a = o.getTranslation("web2pdfStatusUnknownFailure")), (_ = !1))
            : "pdf_downloading" === r.current_status
            ? ((a = o.getTranslation("web2pdfStatusDownloadingPDF")), (d = !1))
            : "pdf_failure" === r.current_status
            ? (o.analytics(r, e.TREFOIL_PDF_DOWNLOAD_FAILED), (m = "web2pdfStatusUnknownFailure"), (_ = !1))
            : "pdf_downloaded" === r.current_status
            ? ((a = o.getTranslation("web2pdfPDFOpening")), (d = !1))
            : "pdf_opened" === r.current_status
            ? ((_ = !0), (I = "web2pdfPDFOpened"))
            : "pdf_open_failed" === r.current_status && ((_ = !1), (d = !0), (m = "web2pdfPDFOpenFailed")),
          a && ($(".convert-title").removeClass("hidden"), $(".convert-title").html(a)),
          d
            ? (delete r.panel_op,
              (l = r.is_pdf ? ".acro-option.pdf" : ".acro-option.html"),
              $(l).removeClass("hidden"),
              $(".actions").removeClass("hidden"),
              $(".acro-option-conditional.html").addClass("hidden"),
              SETTINGS.VIEWER_ENABLED &&
                !r.incognito &&
                (!SETTINGS.VIEWER_ENABLED_FOR_ACROBAT &&
                  r.version > 1 &&
                  !SETTINGS.IS_ERP_READER &&
                  !SETTINGS.IS_READER &&
                  ($(".acro-option-conditional.html").addClass("hidden"), $(".acro-option.pdf.horizontal-rule").addClass("hidden")),
                $(".status-dialog").css("width", "-webkit-fill-available")),
              $(".convert").removeClass("convert-busy"),
              $(".convert-status").removeClass("hidden"),
              _
                ? r.is_pdf
                  ? ($(".progress-area").addClass("hidden"),
                    $(".convert").removeClass("convert-busy"),
                    $(".convert-status").addClass("hidden"))
                  : ($(".convert-status-icon").addClass("icon-success"), $(".convert-status-title").text(o.getTranslation(I)))
                : ((c = !0),
                  $(".convert-status-icon").removeClass("icon-success"),
                  $(".convert-status-icon").addClass("icon-error"),
                  $(".convert-status-title").text(o.getTranslation(m)),
                  $(".convert").addClass("hidden")),
              p && ($(".convert-status").addClass("hidden"), $(".convert").addClass("hidden")))
            : ((c = !0), $(".actions").addClass("hidden"), $(".convert").addClass("convert-busy"));
        break;
      case "html_menu":
        (c = !0),
          T(r)
            ? ($(".reader-option.html").removeClass("hidden"),
              o.isEdge() && $(".chrome-only").addClass("hidden"),
              SETTINGS.VIEWER_ENABLED || $(".acro-option-reader-pdf").addClass("hidden"),
              (c = !0))
            : ($(".acro-option.html").removeClass("hidden"),
              $(".acro-option-conditional.html").addClass("hidden"),
              SETTINGS.VIEWER_ENABLED &&
                !r.incognito &&
                ($(".acro-option-conditional.html").removeClass("hidden"),
                !SETTINGS.VIEWER_ENABLED_FOR_ACROBAT &&
                  r.version > 1 &&
                  !SETTINGS.IS_ERP_READER &&
                  !SETTINGS.IS_READER &&
                  $(".acro-option-conditional.html").addClass("hidden"),
                $(".status-dialog").css("width", "-webkit-fill-available")));
        break;
      case "load-frictionless":
        if (((c = !0), "resize_window" === r.content_op));
        else if (1 == r.hide_spinner)
          delete r.hide_spinner, $(".frictionless-container").removeClass("hidden"), $(".frictionless-loader").addClass("hidden");
        else if (0 == $(".frictionless-container").children().length) {
          $(".acrobatMainDiv").removeClass("home-screen"),
            $(".acrobatMainDiv").addClass("widget-screen-main-div"),
            $(".actions").addClass("hidden"),
            "trefoil" === r.frictionless_workflow &&
              ($(".frictionless-loader").removeClass("hidden"),
              $(".frictionless-loader").attr("data-loading-title", o.getTranslation("web2pdfLoaderTitle") || "Loading..."),
              $(".frictionless-container").addClass("hidden"));
          let n = (function (o, n) {
            let a = document.createElement("iframe");
            a.setAttribute("referrerpolicy", "no-referrer"), a.classList.add("frictionless-iframe");
            let s = new URL(o);
            if (
              (n &&
                (i ? (n.locale = i) : r.locale ? (n.locale = r.locale) : (n.locale = chrome.i18n.getMessage("@@ui_locale")),
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
            if ("test" === r.env || "stage" === r.env) {
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
                u(e.FRICTIONLESS_WIDGET_LOADING_FAILED);
              }),
              (a.onload = function (e) {
                E({ iframe_onload_time: Date.now(), main_op: "timing_info", timing_op: "startup_to_iframe_load" }, !0),
                  "trefoil" === n.workflow && a.contentWindow.postMessage({ valid: !0 }, s.origin);
              }),
              E({ iframe_call_time: Date.now(), main_op: "timing_info" }, !0),
              a.setAttribute("src", s),
              a
            );
          })(r.frictionless_uri, { verb: r.pdf_action, workflow: r.frictionless_workflow, dropzone2: "true" });
          $(".frictionless-container").append(n), $(".frictionless-host").removeClass("hidden"), F();
        }
        break;
      case "show-frictionless-error":
        if (r.error_title && r.error_description) {
          let e = r.error_title,
            t = r.error_description;
          delete r.error_title,
            delete r.error_description,
            (function (e, t) {
              const o = $(".frictionless-error"),
                n = $(".error-title");
              $(".error-details").text(t), n.text(e), o.removeClass("hidden"), F();
            })(e, t);
        }
        break;
      case "clear-frictionless-error":
        $(".frictionless-error").addClass("hidden"), F();
        break;
      case "send-external-msg":
        try {
          let e = new URL(r.frictionless_uri),
            t = $(".frictionless-iframe");
          if (1 == t.length) {
            t[0].contentWindow.postMessage(r.data, e.origin), delete r.data;
          }
        } catch (e) {}
        c = !0;
    }
    h();
  }
}
function F() {
  m(),
    (r.content_op = "resize_window"),
    (r.panel_op = "load-frictionless"),
    (r.main_op = "relay_to_content"),
    delete r.newUI,
    delete r.trefoilUI,
    E(r),
    (r.content_op = null),
    (r.panel_op = null);
}
o.isChrome() &&
  $(function () {
    b();
  }),
  o.addMainListener(A),
  $(function () {
    if (window.location.search) {
      if (
        ((r = JSON.parse(decodeURIComponent(window.location.search.split("=")[1]))),
        SETTINGS.TEST_MODE &&
          window.addEventListener(
            "message",
            function (e) {
              A(e.data);
            },
            !1
          ),
        T(r))
      ) {
        let t;
        switch (
          ($(".do_visit_acom").addClass("hidden"),
          $("body").addClass("desktop-app-reader"),
          "html_menu" == r.panel_op && ($(".acrobatMainDiv").addClass("home-screen"), u(e.FRICTIONLESS_HOME_SCREEN_SHOWN)),
          i || r.locale)
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
          A(e);
      })(r),
        "false" === t.getItem("ViewResultsPref") ? (d = !1) : ($(".do_set_open_pref").addClass("open-pdf-in-acrobat"), (d = !0));
    }
  });
