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
var $iframe, $newiframe, $fteIframe, disableKeyZoom, disableWheelZoom;
const newIframeTop = 150,
  docUrl = document.location.href;
function GetChromeMenuDimensions(e, t) {
  const o = t.version > SETTINGS.READER_VER,
    i = t.version == SETTINGS.READER_VER,
    n = t.panel_op,
    r = { width: 0, height: 0 };
  if ("trefoil" === e)
    switch (n) {
      case "html_menu":
      case "status":
      case "test":
        o ? ((r.width = 259), (r.height = 450)) : ((r.width = 294), (r.height = 624));
        break;
      case "pdf_menu":
        i ? ((r.width = 294), (r.height = 350)) : o ? ((r.width = 259), (r.height = 400)) : ((r.width = 294), (r.height = 160));
        break;
      case "load-frictionless":
        (r.width = 294), (r.height = 550);
    }
  else "persistent" === e && "pdf_menu" === n ? ((r.width = 350), (r.height = 280)) : "fte" === e && ((r.width = 365), (r.height = 510));
  return r;
}
function GetEdgeMenuDimensions(e, t) {
  const o = t.version > SETTINGS.READER_VER,
    i = t.version == SETTINGS.READER_VER,
    n = t.panel_op,
    r = { width: 0, height: 0 };
  if ("trefoil" === e)
    switch (n) {
      case "html_menu":
      case "status":
      case "test":
        o ? ((r.width = 259), (r.height = 450)) : ((r.width = 294), (r.height = 624));
        break;
      case "pdf_menu":
        i ? ((r.width = 294), (r.height = 350)) : o ? ((r.width = 294), (r.height = 400)) : ((r.width = 294), (r.height = 180));
        break;
      case "load-frictionless":
        (r.width = 294), (r.height = 550);
    }
  else
    "persistent" === e && "pdf_menu" === n
      ? SETTINGS.IS_BETA || !o
        ? ((r.width = 350), (r.height = 280))
        : o && ((r.width = 200), (r.height = 50))
      : "fte" === e && ((r.width = 302), (r.height = 510));
  return r;
}
function GetMenuDimensions(e, t) {
  return t.is_edge ? GetEdgeMenuDimensions(e, t) : GetChromeMenuDimensions(e, t);
}
function moveNewIframe(e, t) {
  "dc-cv-fte-pdf-dmb" !== t &&
    ($newiframe = $("#__acrobatNewDialog__")).length > 0 &&
    $newiframe.css({ top: `${e}px`, transition: "top 0.5s ease 0s" });
}
function createAndInjectIframe(e) {
  let t = e.base64PDF;
  delete e.base64PDF;
  let o = "message=" + encodeURIComponent(JSON.stringify(e));
  e.base64PDF = t;
  const i = GetMenuDimensions("trefoil", e);
  if (i.width <= 0 || i.height <= 0) return;
  let n = "block";
  "hidden" === e.frame_visibility && (n = "none"),
    ($iframe = $("<iframe>"))
      .attr("id", "__acrobatDialog__")
      .css({
        border: "0px",
        "z-index": 2147483647,
        position: "fixed",
        top: "-5px",
        right: "80px",
        width: i.width + "px",
        height: i.height + "px",
        display: n,
        margin: "auto"
      })
      .attr("src", chrome.runtime.getURL("browser/js/frame.html") + "?" + o)
      .appendTo("html"),
    $(document).on("keydown", disableKeyZoom),
    $(document).on("mousewheel", disableWheelZoom),
    ($newiframe = $("#__acrobatNewDialog__"));
  const { top: r } = $newiframe.offset() || {};
  if (i.height > r) {
    moveNewIframe(r + (i.height - r), e.fteFeatureFlag);
  }
}
function injectFrame(e) {
  "use strict";
  0 === ($iframe = $("#__acrobatDialog__")).length
    ? createAndInjectIframe(e)
    : "none" === $iframe.css("display") && "visible" === e.frame_visibility
    ? $iframe.css({ display: "block" })
    : e.trefoilClick &&
      ($(document).off("keydown", disableKeyZoom),
      $(document).off("mousewheel", disableWheelZoom),
      delete e.trefoilClick,
      $iframe.remove(),
      moveNewIframe(150, e.fteFeatureFlag));
}
function injectPersistFrame(e) {
  if ("application/pdf" !== document.contentType || e.url.startsWith("file://")) return;
  let t = e.base64PDF;
  delete e.base64PDF;
  let o = "message=" + encodeURIComponent(JSON.stringify(e));
  const i = GetMenuDimensions("persistent", e);
  i.width <= 0 ||
    i.height <= 0 ||
    ((e.base64PDF = t),
    0 === ($newiframe = $("#__acrobatNewDialog__")).length
      ? ("dc-cv-fte-pdf-dmb" === e.fteFeatureFlag &&
          $("embed")[0] &&
          (($("embed")[0].style.top = "48px"), ($("embed")[0].style.transition = "top 1s ease 0s")),
        ($newiframe = $("<iframe>")
          .attr("id", "__acrobatNewDialog__")
          .css({
            border: "0px",
            position: "fixed",
            top: "150px",
            right: "15px",
            height: i.height + "px",
            width: i.width + "px",
            display: "block",
            margin: "auto",
            ...("dc-cv-fte-pdf-dmb" === e.fteFeatureFlag && {
              position: "absolute",
              top: "0px",
              right: "0px",
              height: "48px",
              width: "100%"
            })
          })
          .attr("src", chrome.runtime.getURL("browser/js/frameUI.html") + "?" + o)
          .appendTo("html")),
        $(document).on("keydown", disableKeyZoom),
        $(document).on("mousewheel", disableWheelZoom))
      : e.trefoilClick &&
        ($(document).off("keydown", disableKeyZoom),
        $(document).off("mousewheel", disableWheelZoom),
        delete e.trefoilClick,
        $iframe.remove()));
}
function errorOpeningPDF(e) {
  (e.panel_op = "status"), (e.current_status = "pdf_failure"), (e.main_op = "open_in_acrobat"), chrome.runtime.sendMessage(e);
}
function downloadAuthenticatedPDF(e) {
  let t = new XMLHttpRequest();
  t.open("GET", e.url, !0),
    (t.responseType = "blob"),
    (t.onerror = function (t) {
      errorOpeningPDF(e);
    }),
    (t.onload = function (o) {
      let i;
      t.status < 400 && (e.url === t.responseURL || "application/pdf" === t.response.type)
        ? ((i = new FileReader()),
          (i.onloadend = function (t) {
            (e.base64PDF = t.target.result),
              (e.content_op = "status"),
              (e.current_status = "pdf_downloaded"),
              (e.main_op = "open_in_acrobat"),
              chrome.runtime.sendMessage(e);
          }),
          i.readAsDataURL(t.response))
        : errorOpeningPDF(e);
    }),
    t.send();
}
function handler(e, t, o) {
  "use strict";
  if (!e.authenticatedPDF || 1 != e.authenticatedPDF || "pdf_downloading" !== e.current_status) {
    if ("dismiss" === e.content_op)
      if ((delete e.content_op, ($iframe = $("#__acrobatDialog__")), 1 == e.fteUI || 1 == e.trefoilClick)) {
        if ((delete e.fteUI, $fteIframe))
          return (
            $(document).off("keydown", disableKeyZoom),
            $(document).off("mousewheel", disableWheelZoom),
            $fteIframe.remove(),
            void ($fteIframe = null)
          );
      } else if (1 == e.trefoilUI || 1 == e.trefoilClick) {
        if ((delete e.trefoilUI, $iframe))
          return (
            $(document).off("keydown", disableKeyZoom),
            $(document).off("mousewheel", disableWheelZoom),
            moveNewIframe(150, e.fteFeatureFlag),
            $iframe.remove(),
            void ($iframe = null)
          );
      } else if (1 == e.newUI) {
        if ((delete e.newUI, $newiframe))
          return (
            $(document).off("keydown", disableKeyZoom),
            $(document).off("mousewheel", disableWheelZoom),
            $newiframe.remove(),
            "dc-cv-fte-pdf-dmb" === e.fteFeatureFlag && $("embed")[0] && ($("embed")[0].style.top = "0px"),
            void ($newiframe = null)
          );
      } else if (null != e.frictionless_workflow && (delete e.frictionless_workflow, $iframe))
        return (
          $(document).off("keydown", disableKeyZoom),
          $(document).off("mousewheel", disableWheelZoom),
          $iframe.remove(),
          void ($iframe = null)
        );
    return (
      e.panel_op &&
        ($fteIframe && $fteIframe.remove(),
        "load-frictionless" === e.panel_op && e.pdf_action
          ? "resize_window" === e.content_op
            ? (delete e.content_op, delete e.window_height)
            : injectFrame(e)
          : 1 == e.trefoilClick
          ? (delete e.trefoilUI, delete e.newUI, injectFrame(e))
          : (1 != e.newUI && 1 != e.persist) || (delete e.newUI, delete e.trefoilUI, injectPersistFrame(e))),
      !1
    );
  }
  downloadAuthenticatedPDF(e);
}
isSupportedBrowserVersion() &&
  isGoogleQuery(docUrl) &&
  chrome.runtime.sendMessage({ main_op: "html-startup", url: document.location.href, startup_time: Date.now() }),
  (disableKeyZoom = function (e) {
    "use strict";
    e.ctrlKey && -1 !== [187, 189, 107, 109].indexOf(e.keyCode) && e.preventDefault();
  }),
  (disableWheelZoom = function (e) {
    "use strict";
    e.ctrlKey && e.preventDefault();
  }),
  void 0 !== chrome.runtime && chrome.runtime.onMessage.addListener(handler);
