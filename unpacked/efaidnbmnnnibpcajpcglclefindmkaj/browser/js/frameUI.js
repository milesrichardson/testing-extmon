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
import { util as a } from "./content-util.js";
import { privateApi as n } from "./content-privateApi.js";
await t.init();
var s,
  o,
  i = !1,
  r = !1;
function c(e, t) {
  delete e.trefoilClick,
    delete e.trefoilUI,
    e.authenticatedPDF && 1 == e.authenticatedPDF && delete e.authenticatedPDF,
    a.messageToMain(e),
    delete e.newUI,
    delete e.analytics,
    o && (clearTimeout(o), (o = null)),
    t || "dismiss" === e.content_op || l();
}
function d() {
  a.consoleLog("Clear timer: " + o),
    o && (clearTimeout(o), (o = null)),
    SETTINGS.IS_ERP_READER
      ? $(".acrobatMainDiv").stop().css("display", "none")
      : ($(".acrobatMainDiv").stop().css("opacity", 1), $(".convert-status").stop().css("opacity", 1));
}
function l() {
  (s.content_op = "dismiss"), (s.main_op = "relay_to_content"), (s.newUI = !0), c(s);
}
function _() {
  $(".convert-status").addClass("hidden"), $(".progress-area").addClass("hidden");
}
function E() {
  (o = null), $(".convert-status").animate({ opacity: 0 }, 1500, "linear", _);
}
function p() {
  (SETTINGS.TEST_MODE || SETTINGS.DEBUG_MODE) && (o = 1),
    o ||
      i ||
      (o = setTimeout(
        function () {
          setTimeout(E);
        },
        s.is_pdf ? 3e3 : 1500
      ));
}
async function T() {
  (s.main_op = "open_in_acrobat"),
    (s.newUI = !0),
    (s.trefoilUI = !1),
    void 0 !== s.paramName && delete s.paramName,
    delete s.content_op,
    delete s.is_viewer,
    delete s.click_context,
    delete s.dataURL;
  c(await a.handlePDFURL(s, !1), !0);
}
async function I(e) {
  (s.main_op = "open_in_acrobat"),
    (s.newUI = !0),
    (s.trefoilUI = !1),
    (s.paramName = e),
    delete s.content_op,
    delete s.is_viewer,
    delete s.dataURL,
    delete s.click_context;
  c(await a.handlePDFURL(s, !1), !0);
}
function u(n) {
  r ||
    ((r = !0),
    $(".do_acrobat").click(function (e) {
      var t = $(e.currentTarget);
      d(), SETTINGS.FILL_N_SIGN_ENABLED && t.hasClass("do_acrobat_FS") ? I("FillnSign") : t.hasClass("do_acrobat") && T();
    }),
    $(".close-dialog").click(function () {
      if (s && s.version) {
        var t = e.PERSIST_PDF_MENU_CLOSED;
        (t =
          SETTINGS.FILL_N_SIGN_ENABLED && "stripTextOpenFillnSign" === s.stripId
            ? s.version === SETTINGS.READER_VER
              ? e.PERSIST_PDF_MENU_CLOSED_READER_FS
              : e.PERSIST_PDF_MENU_CLOSED_ACROBAT_FS
            : s.version === SETTINGS.READER_VER
            ? e.PERSIST_PDF_MENU_CLOSED_READER
            : e.PERSIST_PDF_MENU_CLOSED),
          a.analytics(s, t);
      }
      (s.fteClosed = !1), l();
    }),
    $(".always-show").prop("checked", "false" !== t.getItem("always-show-pdf-menu")),
    $(".always-show").click(function () {
      var e = $(".always-show").prop("checked") ? "true" : "false";
      t.setItem("always-show-pdf-menu", e);
    }));
}
function m(o) {
  var r,
    c,
    l,
    _ = !0,
    E = !0,
    m = !1,
    S = "web2pdfPDFOpenFailedv2",
    R = !(0 == o.version || 1 == o.version || o.version === SETTINGS.READER_VER || o.version === SETTINGS.ERP_READER_VER);
  o.version === SETTINGS.READER_VER || (o.version, SETTINGS.ERP_READER_VER);
  if (!o.main_op || !["save-preferences", "fetch-preferences"].includes(o.main_op)) {
    if (o.test_extension)
      return (function (e) {
        a.consoleLog("TESTING"),
          a.consoleLogDir(JSON.stringify(e)),
          "doAcrobat" === e.test_extension && ($("persistent.do_acrobat").not(":hidden").hasClass("do_acrobat_FS") ? I("FillnSign") : T()),
          void 0 !== e.test_extension && delete e.test_extension;
      })(o);
    if (!o.authenticatedPDF)
      if ((o.version === SETTINGS.ERP_READER_VER && (SETTINGS.IS_ERP_READER = !0), o.persist || t.getItem("enableNewExtensionMenu")))
        switch (
          (u(),
          delete (s = o).analytics,
          (i = !1),
          $(".acrobatMainDiv").stop().css("opacity", 1),
          a.translateElements(".translate"),
          1 === s.version && $("#web2pdfOpenButtonText").val(a.getTranslation("web2pdfOpenButtonTextOlder")),
          s.version === SETTINGS.READER_VER && $("#web2pdfOpenButtonText").val(a.getTranslation("web2pdfOpenButtonText")),
          $(".ui-element").addClass("hidden"),
          $("#action_message").text(""),
          (function (e, t) {
            if (SETTINGS.DEBUG_MODE) {
              var n,
                s = [t];
              for (n in e) e.hasOwnProperty(n) && s.push("  " + n + ": " + e[n]);
              a.consoleLog(s.join("\n"));
            }
          })(s, "Receive frame message:"),
          (c = s.panel_op),
          delete s.panel_op,
          delete s.dataURL,
          delete s.click_context,
          delete s.is_viewer,
          c)
        ) {
          case "pdf_menu":
            const c = t.getItem("fteDenied");
            if (a.isEdge() && SETTINGS.VIEWER_ENABLED && (!R || SETTINGS.VIEWER_ENABLED_FOR_ACROBAT))
              try {
                t.getItem("pdfViewer") ||
                  (t.setItem("fte", "false"),
                  t.setItem("pdfViewer", "true"),
                  n.setViewerState("enabled"),
                  a.messageToMain({ main_op: "analytics", analytics: [[e.USE_ACROBAT_IN_EDGE_AUTO_ENABLED]] }),
                  f(s.tabId));
              } catch (t) {
                a.analytics(s, e.LOCAL_STORAGE_DISABLED);
              }
            !R || (SETTINGS.VIEWER_ENABLED && SETTINGS.VIEWER_ENABLED_FOR_ACROBAT)
              ? !SETTINGS.VIEWER_ENABLED ||
                t.getItem("pdfViewer") ||
                (c && 10 === parseInt(c)) ||
                (R && !SETTINGS.VIEWER_ENABLED_FOR_ACROBAT) ||
                s.incognito
                ? o.version <= 1 ||
                  !SETTINGS.VIEWER_SHOW_OPEN_IN_ACRO ||
                  (10 !== c && "false" !== t.getItem("pdfViewer")) ||
                  ($(".acrobatMainDiv").removeClass("hidden"), $(".acro-option.pdf").removeClass("hidden"))
                : (c && parseInt(c) >= 9 && ($("#acc-cancel").addClass("hidden"), $("#acc-deny").removeClass("hidden")),
                  (function (e) {
                    switch (e.fteFeatureFlag) {
                      case "dc-cv-fte-pdf-redcard":
                        $(".acrobat-only-side-card").removeClass("hidden");
                        break;
                      case "dc-cv-fte-pdf-dmb":
                        $(".acrobat-only-top-bar").removeClass("hidden");
                        break;
                      default:
                        $(".acrobat-only-card").removeClass("hidden");
                    }
                  })(s))
              : ($(".acrobatMainDiv").removeClass("hidden"),
                $(".acro-option.pdf").removeClass("hidden"),
                $(".acrobat-only-card").addClass("hidden")),
              t.getItem("pdfViewer") && $(".acrobat-only-card").addClass("hidden"),
              $(".acrobatMainDiv").off("hover");
            break;
          case "error":
            $(".error")
              .removeClass("hidden")
              .text("Unexpected Error:" + s.error.name + "\nReference: " + s.error.errnum + "\n" + s.error.details);
            break;
          case "flickr":
            $(".action-available").removeClass("hidden"),
              $("#action_message").text("Create slide shows and contact sheets."),
              $(".special_question").removeClass("hidden"),
              $("#special").removeClass("hidden");
            break;
          case "status":
            $(".progress-area").removeClass("hidden"),
              $(".convert").text(s.domtitle),
              $(".convert-status, .convert-title").addClass("hidden"),
              $(".convert").removeClass("convert-button hidden"),
              $(".acrobatMainDiv").off("hover"),
              "waiting" === s.current_status
                ? (a.analytics(s, e.TREFOIL_HTML_CONVERT_WAITING), (r = a.getTranslation("web2pdfStatusWaiting")), (_ = !1))
                : "downloading" === s.current_status
                ? (a.analytics(s, e.TREFOIL_HTML_CONVERT_DOWNLOADING), (r = a.getTranslation("web2pdfStatusDownloading")), (_ = !1))
                : "in_progress" === s.current_status
                ? (a.analytics(s, e.TREFOIL_HTML_CONVERT_IN_PROGRESS), (r = a.getTranslation("web2pdfStatusInProgress")), (_ = !1))
                : "filelocked" === s.current_status
                ? (r = a.getTranslation("web2pdfFileLockedError"))
                : "cancelled" === s.current_status
                ? (a.analytics(s, e.TREFOIL_HTML_CONVERT_CANCELLED), (r = a.getTranslation("web2pdfStatusCancelled")), (m = !0))
                : "complete" === s.current_status
                ? (a.analytics(s, e.TREFOIL_HTML_CONVERT_COMPLETE),
                  s.file_path
                    ? ($(".convert").text(a.getTranslation("web2pdfOpenInDCButtonText")), $(".convert").addClass("convert-button"))
                    : ($(".convert").empty(), $(".convert").addClass("hidden")))
                : "failure" === s.current_status
                ? (a.analytics(s, e.TREFOIL_HTML_CONVERT_FAILED),
                  s.message && ((r = s.message), (r = $("<div/>").text(r).html())),
                  (E = !1))
                : "noacrobat" === s.current_status
                ? (a.analytics(s, e.TREFOIL_HTML_CONVERT_NO_ACROBAT), (r = a.getTranslation("web2pdfUnsupportedAcrobatVersion")), (E = !1))
                : "unknown" === s.current_status
                ? ((r = a.getTranslation("web2pdfStatusUnknownFailure")), (E = !1))
                : "pdf_downloading" === s.current_status
                ? ((r = a.getTranslation("web2pdfStatusDownloadingPDF")), (_ = !1))
                : "pdf_failure" === s.current_status
                ? (s.version === SETTINGS.READER_VER
                    ? a.analytics(s, e.PERSIST_PDF_DOWNLOAD_FAILED_READER)
                    : a.analytics(s, e.PERSIST_PDF_DOWNLOAD_FAILED),
                  (S = "web2pdfStatusUnknownFailure"),
                  (E = !1))
                : "pdf_downloaded" === s.current_status
                ? ((r = a.getTranslation("web2pdfPDFOpening")), (_ = !1))
                : "pdf_opened" === s.current_status
                ? ((E = !0), "web2pdfPDFOpened")
                : "pdf_open_failed" === s.current_status && ((E = !1), (_ = !0), (S = "web2pdfPDFOpenFailedv2")),
              r && ($(".in-process").removeClass("hidden"), $(".convert-title").removeClass("hidden"), $(".convert-title").html(r)),
              _
                ? (delete s.panel_op,
                  $(".acrobatMainDiv").hover(d, p),
                  $(".actions").removeClass("hidden"),
                  $(".in-process").addClass("hidden"),
                  (l = s.is_pdf ? ".acro-option.pdf" : ".acro-option.html"),
                  $(l).removeClass("hidden"),
                  $(".convert").removeClass("convert-busy"),
                  $(".convert-status").removeClass("hidden"),
                  $(".convert-status").stop().css("opacity", 1),
                  E
                    ? ($(".progress-area").addClass("hidden"),
                      $(".convert").removeClass("convert-busy"),
                      $(".convert-status").addClass("hidden"))
                    : ($(".convert-status-icon").removeClass("icon-success"),
                      $(".convert-status-icon").addClass("icon-error"),
                      $(".convert-status-title").text(a.getTranslation(S)),
                      $(".convert").addClass("hidden")),
                  m && ($(".convert-status").addClass("hidden"), $(".convert").addClass("hidden")),
                  p())
                : ((i = !0), $(".actions").addClass("hidden"), $(".convert").addClass("convert-busy"));
        }
      else $(".acrobatMainDiv").stop().css("opacity", 0);
  }
}
function S(t) {
  var n, s, o;
  if (
    (void 0 !== (n = t) && (void 0 !== n.stripId && delete n.stripId, void 0 !== n.paramName && delete n.paramName),
    (SETTINGS.FILL_N_SIGN_ENABLED = t.isFillnSignEnabled),
    (SETTINGS.SHAREPOINT_ENABLED = t.isSharePointEnabled),
    !0 ===
      ((s = t),
      (o = !1),
      SETTINGS.FILL_N_SIGN_ENABLED
        ? void 0 === s.stripId &&
          (void 0 !== s.url && !0 === a.isPDFForm(s.url)
            ? ((s.stripId = "stripTextOpenFillnSign"), (o = !0))
            : (s.stripId = "stripTextOpenAcrobat"))
        : (s.stripId = "stripTextOpenAcrobat"),
      o))
  ) {
    $(".acrobatMainDiv").width(205), $(".acro-option.pdf").addClass("do_acrobat_FS");
    {
      let a = { tab: t.tab, main_op: "analytics", analytics: [] };
      t.version === SETTINGS.READER_VER ? a.analytics.push(e.PDF_FORM_DETECTED_READER) : a.analytics.push(e.PDF_FORM_DETECTED_ACROBAT),
        c(a, !0);
    }
  }
  $(".acro-option.pdf").attr("id", t.stripId), m(t);
}
function f(e) {
  setTimeout(() => {
    chrome.tabs.reload(e);
  }, 100);
}
a.isChrome() &&
  $(function () {
    u();
  }),
  a.addMainListener(m),
  $(function () {
    window.location.search &&
      ((s = JSON.parse(decodeURIComponent(window.location.search.split("=")[1]))),
      SETTINGS.TEST_MODE &&
        window.addEventListener(
          "message",
          function (e) {
            S(e.data);
          },
          !1
        ),
      S(s),
      "false" === t.getItem("ViewResultsPref") ? !1 : ($(".do_set_open_pref").addClass("open-pdf-in-acrobat"), !0),
      $("#acc-cancel, #sideCardCloseIcon, #acc-top-bar-close").on("click", function () {
        let n,
          o = t.getItem("repromptCount");
        switch (this.id) {
          case "acc-top-bar-close":
            n = e.PERSIST_PDF_MENU_DMB_CANCEL;
            break;
          case "sideCardCloseIcon":
            n = e.PERSIST_PDF_MENU_RED_CARD_CANCEL;
            break;
          default:
            n = e.PERSIST_PDF_MENU_FTE_CANCEL;
        }
        o
          ? a.messageToMain({ main_op: "analytics", analytics: [[n, { REPROMPT: "Reprompt" }]] })
          : a.messageToMain({ main_op: "analytics", analytics: [[n, { ":REPROMPT": "" }]] });
        let i = t.getItem("fteDenied");
        if (((i = i && parseInt(i) >= 6 ? parseInt(i) + 1 : 6), 10 === i)) {
          let e = Date.now();
          t.setItem("reprompt-user-timestamp", e);
        }
        t.setItem("persist-menu-closed", i - 1), t.setItem("fteDenied", i), (s.fteClosed = !0), l();
      }),
      $("#acc-deny").on("click", function () {
        let n = t.getItem("fteDenied");
        if (
          (t.getItem("repromptCount")
            ? a.analytics(s, e.PERSIST_PDF_MENU_FTE_REPROMPT_DENIED)
            : a.analytics(s, e.PERSIST_PDF_MENU_FTE_DENIED),
          (n = n && parseInt(n) >= 6 ? parseInt(n) + 1 : 6),
          t.setItem("fteDenied", n),
          10 === n)
        ) {
          let e = Date.now();
          t.setItem("reprompt-user-timestamp", e);
        }
        (s.fteClosed = !0), l();
      }),
      $("#acc-ok, #top-bar-acc-ok, #side-card-acc-ok").on("click", function () {
        let s = !1;
        try {
          let o,
            i = t.getItem("repromptCount");
          switch (this.id) {
            case "top-bar-acc-ok":
              o = e.PERSIST_PDF_MENU_DMB_CONFIRM;
              break;
            case "side-card-acc-ok":
              o = e.PERSIST_PDF_MENU_RED_CARD_CONFIRM;
              break;
            default:
              o = e.PERSIST_PDF_MENU_FTE_ACCEPTED;
          }
          i
            ? a.messageToMain({ main_op: "analytics", analytics: [[o, { REPROMPT: "Reprompt" }]] })
            : a.messageToMain({ main_op: "analytics", analytics: [[o, { ":REPROMPT": "" }]] }),
            t.getItem("pdfViewer") || t.setItem("viewer-enabled-source", "ownership-consent"),
            t.setItem("pdfViewer", "true"),
            n.setViewerState("enabled"),
            (s = !0);
        } catch (t) {
          a.messageToMain({ main_op: "analytics", analytics: [[e.LOCAL_STORAGE_DISABLED]] });
        }
        s && f();
      }),
      $("#acc-top-bar-close").on("click", function () {
        $(".acrobat-only-top-bar").addClass("hidden");
      }),
      $("#fteSideCard").hover(function () {
        $(".fteSideCard-content-body").toggleClass("toggled");
      }));
  });
