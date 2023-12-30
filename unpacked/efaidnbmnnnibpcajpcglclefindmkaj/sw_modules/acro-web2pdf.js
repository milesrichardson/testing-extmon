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
import { analytics as e } from "../common/analytics.js";
import { common as t } from "./common.js";
import { communicate as s } from "./communicate.js";
import { util as i } from "./util.js";
import { Proxy as o } from "./proxy.js";
import { SETTINGS as n } from "./settings.js";
import { dcLocalStorage as a, dcSessionStorage as r } from "../common/local-storage.js";
var h,
  l,
  c = null,
  T = !1,
  g = 2,
  m = 13,
  u = [0, 1, g, m, 14],
  d = [(g = 2), 11, 12, (m = 13)];
function E() {
  return s.getModule("acro-gstate");
}
c ||
  ((c = new (function () {
    var c = [],
      _ = [],
      S = [];
    function p(e) {
      var t;
      for (t = 0; t < c.length; t += 1) if (c[t].tabId === e) return c[t];
      return null;
    }
    function A(e) {
      return (e = e || chrome.i18n.getMessage("web2pdfUntitledFileName")).replace(/[<>?:|\*"\/\\'&\.]/g, "");
    }
    (this.proxy = o.proxy.bind(this)),
      (this.LOG = (...e) => t.LOG(...e)),
      (this.UNSET = 0),
      (this.OPEN_IN_ACROBAT = 1),
      (this.APPEND = 2),
      (this.CONVERT_PAGE = 4),
      (this.CONVERT_LINK = 8),
      (this.CONVERT_SELECTION = 16),
      (this.PRINT = 32),
      (this.EMAIL = 64),
      (this.CALLER_TOOLBAR = 128),
      (this.CLEAN_FILE_ON_FAILURE = 256),
      (this.STATUS_WAITING = 1e4),
      (this.STATUS_DOWNLOADING = 10001),
      (this.STATUS_CONVERTING = 10002),
      (this.STATUS_SUCCESS = 10003),
      (this.STATUS_ERROR = 10004),
      (this.STATUS_NOINSTANCE = 10005),
      (this.STATUS_FILELOCKED = 10006),
      (this.STATUS_NOACROBAT = 10007),
      (this.STATUS_CANCELLED = 10008),
      (this.STATUS_FILE_OPENED = 10100),
      (this.STATUS_FILE_OPEN_FAILED = 10101),
      (this.STATUS_ERROR_JS = 10110),
      (this.STATUS_ERROR_HOST = 10111),
      (this.STATUS_ERROR_TRY = 11e3),
      (this.STATUS_ERROR_DOM = 11001),
      (this.imagePromise = null),
      (this.adobeYoloJumpInProgress = !1),
      (this.adobeYoloUserInfoInProgress = !1),
      (this.errorHandler = function () {
        try {
          if (0 === c.length) return;
          this.Done(c[0].tabId, this.STATUS_ERROR_JS, null, i.getTranslation("web2pdfHTMLJSError"));
        } catch (e) {}
      }),
      o.handlers(this.errorHandler.bind(this)),
      (this.Done = function (e, t, s, i) {
        if (-1 === e) {
          if (0 === c.length) return;
          e = c[0].tabId;
        }
        this.setStatus(e, t, s, i), this.nextConversion(e);
      }),
      (this.nextConversion = function (e) {
        var t;
        for (t = 0; t < c.length; t += 1) c[t].tabId === e && c.splice(t, 1);
        c.length > 0 && c[0].start.resolve(c[0]), this.exitShim();
      }),
      (this.cancelConversion = function (e) {
        var t;
        for (t = 0; t < c.length; t += 1) c[t].tabId === e && (c[t].start && c[t].start.reject(), c.splice(t, 1));
      }),
      (this.addConversion = function (e, t) {
        return (e.start = i.Deferred()), c.push(e), 1 === c.length ? e.start.resolve(e) : t && t(), e.start;
      }),
      (this.setStatus = function (t, o, r, h) {
        var l,
          c = p(t) || this.openPDFRequest,
          T = new Date();
        i.consoleLog("setStatus: " + t + " status: " + o),
          c
            ? (c.timing || (c.timing = []),
              o === this.STATUS_WAITING
                ? ((l = "waiting"), e.event(e.e.TREFOIL_HTML_CONVERT_WAITING), c.timing.push({ stage: "WAIT", start_time: T.getTime() }))
                : o === this.STATUS_DOWNLOADING
                ? (e.event(e.e.TREFOIL_HTML_CONVERT_DOWNLOADING), (l = "downloading"), this.logTiming(c.timing, "WAIT"))
                : o === this.STATUS_CONVERTING
                ? (e.event(e.e.TREFOIL_HTML_CONVERT_IN_PROGRESS),
                  (l = "in_progress"),
                  this.logTiming(c.timing, "USER_PROMPT"),
                  c.timing.push({ stage: "CONVERT", start_time: T.getTime() }))
                : o === this.STATUS_SUCCESS
                ? (e.event(e.e.TREFOIL_HTML_CONVERT_COMPLETE), (l = "complete"), this.logTiming(c.timing, "CONVERT"))
                : o === this.STATUS_ERROR
                ? (e.event(e.e.TREFOIL_HTML_CONVERT_FAILED), (l = "failure"))
                : o === this.STATUS_ERROR_JS
                ? (e.event(e.e.TREFOIL_HTML_CONVERT_FAILED_JS), (l = "failure"))
                : o === this.STATUS_ERROR_TRY
                ? (e.event(e.e.TREFOIL_HTML_CONVERT_FAILED_TRY), (l = "failure"))
                : o === this.STATUS_ERROR_DOM
                ? (e.event(e.e.TREFOIL_HTML_CONVERT_FAILED_DOM), (l = "failure"))
                : o === this.STATUS_ERROR_HOST
                ? (e.event(e.e.TREFOIL_HTML_CONVERT_FAILED_HOST), (l = "failure"))
                : o === this.STATUS_CANCELLED
                ? (e.event(e.e.TREFOIL_HTML_CONVERT_CANCELLED), (l = "cancelled"), this.logTiming(c.timing, "USER_PROMPT"))
                : o === this.STATUS_NOACROBAT
                ? (e.event(e.e.TREFOIL_HTML_CONVERT_NO_ACROBAT), (l = "noacrobat"))
                : o === this.STATUS_FILELOCKED
                ? (l = "filelocked")
                : o === this.STATUS_FILE_OPENED
                ? ("pdfviewer" !== c.click_context &&
                    (c.version === n.READER_VER
                      ? c.newUI
                        ? e.event(e.e.PERSIST_PDF_DOWNLOAD_OPENED_READER)
                        : e.event(e.e.TREFOIL_PDF_DOWNLOAD_OPENED_READER)
                      : c.newUI
                      ? e.event(e.e.PERSIST_PDF_DOWNLOAD_OPENED)
                      : e.event(e.e.TREFOIL_PDF_DOWNLOAD_OPENED)),
                  (l = "pdf_opened"))
                : o === this.STATUS_FILE_OPEN_FAILED
                ? ("pdfviewer" !== c.click_context &&
                    (c.version === n.READER_VER
                      ? e.event(e.e.TREFOIL_PDF_DOWNLOAD_OPEN_FAILED_READER)
                      : e.event(e.e.TREFOIL_PDF_DOWNLOAD_OPEN_FAILED)),
                  (l = "pdf_open_failed"))
                : (i.consoleLog("Unexpected status: " + o), (l = "unknown")),
              (c.panel_op = "status"),
              (c.current_status = l),
              r && (c.file_path = r),
              h && (c.message = h),
              "pdfviewer" !== c.click_context && (a.getItem("enableNewExtensionMenu") ? s.sendMessageToPopup(c) : s.deferMessage(c)))
            : i.consoleLog("failed to find conversion for tabId: " + t);
      }),
      (this.setNcPort = function (e) {
        this.ncPort = e;
      }),
      (this.nativeMessageCallback = function (e) {
        var t, s;
        "setStateCallback" === e.messageType
          ? this.setStatus(+e.conversionID, +e.state)
          : "doneCallback" === e.messageType
          ? (e.filePath && (t = i.atob16(e.filePath)), this.Done(+e.conversionID, +e.state, t))
          : "userInfoCallback" === e.messageType
          ? (this.exitShim(),
            this.adobeYoloUserInfoInProgress &&
              (clearTimeout(l),
              S.forEach((t) => {
                t(e);
              }),
              (S = []),
              (this.adobeYoloUserInfoInProgress = !1)))
          : "jumpUrlCallback" === e.messageType || "jumpUrlCallback" === e.message
          ? (this.exitShim(),
            this.adobeYoloJumpInProgress &&
              (clearTimeout(h),
              _.forEach((t) => {
                t(e);
              }),
              (_ = []),
              (this.adobeYoloJumpInProgress = !1)))
          : "getMessageCallback" === e.messageType
          ? this.sendMessageToNative({
              message:
                ((s = e.msgIDStr),
                i && i.isChromeOnlyMessage(s) && i.isEdge() && (s += "Edge"),
                chrome.i18n.getMessage(s) || chrome.i18n.getMessage("web2pdfStatusError"))
            })
          : "saveSuccessCallback" === e.messageType
          ? ((t = i.atob16(e.path)), this.imagePromise.resolve(t))
          : "saveFailureCallback" === e.messageType
          ? (i.consoleLogDir("failed to save image"), this.imagePromise.reject())
          : "shimVersionInfo" === e.messageType
          ? this.versionCallback && (this.versionCallback(e), delete this.versionCallback)
          : "fileOpenCallback" === e.messageType &&
            (0 == +e.state ? this.setStatus(0, this.STATUS_FILE_OPENED) : this.setStatus(0, this.STATUS_FILE_OPEN_FAILED),
            this.openPDFRequest && (this.nextConversion(this.openPDFRequest.tabId), delete this.openPDFRequest));
      }),
      (this.nativeOnDisconnect = function () {
        var e = this.STATUS_ERROR;
        "Specified native messaging host not found." === chrome.runtime.lastError.message &&
          (this.versionCallback &&
            (this.versionCallback({ messageType: "shimVersionInfo", majorVersion: "0", minorVersion: "0" }), delete this.versionCallback),
          (e = this.STATUS_NOACROBAT)),
          "Native host has exited" === chrome.runtime.lastError.message && (e = this.STATUS_ERROR_HOST),
          (this.ncPort = null),
          this.Done(-1, e);
      }),
      (this.init = function () {
        (this.ncPort = chrome.runtime.connectNative("com.adobe.acrobat.chrome_webcapture")),
          this.ncPort.onMessage.addListener(this.proxy(this.nativeMessageCallback)),
          this.ncPort.onDisconnect.addListener(this.proxy(this.nativeOnDisconnect));
      }),
      (this.sendMessageToNative = function (e) {
        s.legacyShim() && e.task && -1 === u.indexOf(e.task)
          ? i.consoleLog("Skipping task: " + e.task + " in legacy shim")
          : (this.ncPort || this.init(),
            (e.browser = i.getBrowser()),
            this.ncPort.postMessage(e),
            -1 !== d.indexOf(e.task) &&
              setTimeout(
                this.proxy(function () {
                  this.exitShim();
                }),
                1e3
              ));
      }),
      (this.exitShim = function () {
        0 === c.length && this.sendMessageToNative({ task: 14 });
      }),
      (this.getVersion = function (e) {
        (this.versionCallback = e), this.sendMessageToNative({ task: m });
      }),
      (this.openInAcrobat = function (t) {
        t.newUI && s.resetPersistPrefCount(),
          this.addConversion(t).then(
            this.proxy(function (t) {
              this.openPDFRequest = t;
              const s = i.removeQueryParams(t.url);
              !0 === t.isSharePointURL
                ? this.sendMessageToNative({ task: 16, url: s })
                : (this.sendMessageToNative({ task: 12, pdfData: t.base64PDF.split(",")[1], fileName: t.filename, paramName: t.paramName }),
                  e.checkAndLogPDFSize(t.base64PDF.length / 1048576),
                  delete t.base64PDF);
            })
          );
      }),
      (this.getUserInfoFromAcrobat = function (t) {
        S.push(t),
          this.adobeYoloUserInfoInProgress ||
            (this.sendMessageToNative({ task: 100 }),
            (this.adobeYoloUserInfoInProgress = !0),
            (l = setTimeout(() => {
              this.exitShim();
              var t = {};
              S.forEach((e) => {
                e(t);
              });
              const s = r.getItem("shimFullVersion") || void 0;
              e.event(e.e.ADOBE_YOLO_USER_DETAILS_TIMED_OUT, { VERSION: s }), (S = []), (this.adobeYoloUserInfoInProgress = !1);
            }, 7e3)));
      }),
      (this.launchJumpUrl = function (e, t) {
        _.push(t),
          this.adobeYoloJumpInProgress ||
            (this.sendMessageToNative({ task: 101, userGuid: e, extensionId: chrome.runtime.id }),
            (this.adobeYoloJumpInProgress = !0),
            (h = setTimeout(() => {
              this.exitShim();
              var e = { success: "false", errorCode: "4" };
              _.forEach((t) => {
                t(e);
              }),
                (_ = []),
                (this.adobeYoloJumpInProgress = !1);
            }, 14e3)));
      }),
      (this.openFile = function (e) {
        0 === c.length && this.sendMessageToNative({ task: 11, filePath: e.file_path });
      }),
      (this.SendForConversion = function (e, t) {
        try {
          var i,
            o = new Date();
          (i = 0 != (e.conversionSettings & this.APPEND) ? 1 : 0),
            t.timing || (t.timing = []),
            t.timing.push({ stage: "USER_PROMPT", start_time: o.getTime() }),
            t.outputPath
              ? 0 === t.action
                ? this.sendMessageToNative({
                    task: 3,
                    conversionID: t.tabId,
                    domData: e.domData,
                    conversionSettings: e.conversionSettings,
                    charset: e.charset,
                    url: e.url,
                    docTitle: e.domtitle,
                    outputPath: t.outputPath
                  })
                : 1 === t.action &&
                  this.sendMessageToNative({
                    task: 4,
                    conversionID: t.tabId,
                    domData: e.domData,
                    conversionSettings: e.conversionSettings,
                    charset: e.charset,
                    url: e.url,
                    docTitle: e.domtitle,
                    outputPath: t.outputPath
                  })
              : this.sendMessageToNative({
                  task: i,
                  conversionID: t.tabId,
                  domData: e.domData,
                  conversionSettings: e.conversionSettings,
                  charset: e.charset,
                  url: e.url,
                  docTitle: e.domtitle
                }),
            a.getItem("enableNewExtensionMenu") && s.sendMessageToPopup({ ...t, current_status: "file-picker" });
        } catch (e) {
          this.Done(t.tabId, this.STATUS_ERROR_TRY);
        }
      }),
      (this.showConversionSettingsDialog = function () {
        0 === c.length && this.sendMessageToNative({ task: g });
      }),
      (this.convertToPDF = function (e, t) {
        (e.conversionSettings = this.UNSET),
          E().getViewResultsPreferenceState() && (e.conversionSettings |= this.OPEN_IN_ACROBAT),
          e.action === E().web2pdfAction.APPEND
            ? (e.conversionSettings |= this.APPEND)
            : (e.conversionSettings |= this.CLEAN_FILE_ON_FAILURE),
          e.context === E().web2pdfContext.PAGE && (e.conversionSettings |= this.CONVERT_PAGE),
          e.caller === E().web2pdfCaller.TOOLBAR
            ? (e.conversionSettings |= this.CALLER_TOOLBAR)
            : e.context === E().web2pdfContext.LINK && (e.conversionSettings |= this.CONVERT_LINK),
          this.SendForConversion(e, t);
      }),
      (this.processImages = function (e, t, s) {
        var o = e.blob.refs[t],
          n = new Date();
        return (
          e.timing || (e.timing = []),
          e.imagesComplete || (e.imagesComplete = i.Deferred()),
          (this.imagePromise = i.Deferred()),
          t >= e.blob.refs.length
            ? (this.imagePromise.resolve(), e.imagesComplete.resolve(), this.imagePromise)
            : (o.data && "data:" !== o.data
                ? "image" === o.type
                  ? (T || (e.timing.push({ stage: "SEND_IMAGES", start_time: n.getTime() }), (T = !0)),
                    e.blob.refs.splice(t, 1),
                    this.sendMessageToNative({ task: 10, imagedata: o.data.split(",")[1], conversionID: e.tabId }),
                    this.imagePromise.then(
                      this.proxy(function (e) {
                        s.push(
                          "<AcroexchangeDownloadSeprator AcroexchangeDownloadUrl=" +
                            o.placeholder +
                            "><FILEPATH>" +
                            e +
                            "</FILEPATH></AcroexchangeDownloadSeprator>"
                        );
                      }),
                      function () {}
                    ))
                  : (this.imagePromise.resolve(), (t += 1))
                : (e.blob.refs.splice(t, 1), this.imagePromise.resolve()),
              this.imagePromise.done(
                this.proxy(function () {
                  this.processImages(e, t, s);
                })
              ),
              this.imagePromise)
        );
      }),
      (this.acro_html = function (t, s) {
        var o, n, a;
        t.error
          ? (i.consoleError(t.error),
            e.logError(t.error_analytics),
            this.Done(t.tabId, this.STATUS_ERROR_DOM, null, i.getTranslation(t.error)))
          : (e.checkAndLogHTMLBlobSize(t.blob.currentSize / 1048576),
            e.logContents(t),
            t.analytics && e.setParamsAndLogAnalytics(t.analytics, e.e.HTML_SOURCE_CONTENT, "content"),
            e.setArg("stage", "CLONE"),
            e.checkAndLogTimingRange(t.cloneTiming),
            ((a = p(t.tabId)).blob = t.blob),
            (n = []),
            (T = !1),
            this.processImages(a, 0, n),
            a.imagesComplete.then(
              this.proxy(function () {
                for (
                  delete a.imagesComplete,
                    this.logTiming(a.timing, "SEND_IMAGES"),
                    n.push(
                      "<AcroexchangeDownloadSeprator AcroexchangeDownloadUrl=" +
                        s.tab.url +
                        ">" +
                        a.blob.html +
                        "</AcroexchangeDownloadSeprator>"
                    ),
                    o = 0;
                  o < a.blob.refs.length;
                  o += 1
                )
                  n.push(
                    "<AcroexchangeDownloadSeprator AcroexchangeDownloadUrl=" +
                      a.blob.refs[o].placeholder +
                      ">" +
                      a.blob.refs[o].data +
                      "</AcroexchangeDownloadSeprator>"
                  );
                delete a.blob,
                  this.convertToPDF(
                    {
                      caller: a.caller,
                      action: a.action,
                      context: E().web2pdfContext.PAGE,
                      domData: n.join("\n"),
                      charset: "UTF-8",
                      domtitle: a.domtitle,
                      url: a.url
                    },
                    a
                  );
              })
            ));
      }),
      (this.logTiming = function (t, s) {
        var i,
          o = new Date();
        t.forEach(function (t) {
          t.stage === s && ((i = o.getTime() - t.start_time), e.setArg("stage", s), e.checkAndLogTimingRange(i / 100));
        });
      }),
      (this.handleConversionRequest = function (t) {
        if (n.IS_ACROBAT) {
          var i = this.proxy(function () {
            this.setStatus(t.tabId, this.STATUS_WAITING);
          });
          s.legacyShim() || t.context !== E().web2pdfContext.PAGE
            ? (s.legacyShim() || t.context === E().web2pdfContext.LINK) &&
              this.addConversion(t, i).then(
                this.proxy(function (e) {
                  this.convertToPDF(
                    {
                      caller: e.caller,
                      action: e.action,
                      context: e.context,
                      domData: "",
                      charset: "UTF-8",
                      domtitle: e.domtitle,
                      url: e.url
                    },
                    e
                  );
                })
              )
            : this.addConversion(t, i).then(
                this.proxy(function (t) {
                  delete t.start,
                    this.setStatus(t.tabId, this.STATUS_DOWNLOADING),
                    e.logSiteAndProtocolAnalytics(t.url),
                    chrome.scripting.executeScript(
                      {
                        target: { tabId: t.tabId },
                        injectImmediately: !0,
                        func: (e, t, s) => {
                          (window.maxSize = t),
                            (window.DEBUG = s),
                            (window.TABID = e),
                            (window.OP = "acro-html"),
                            (window.EXCLUDE = ["font", "svg_image"]);
                        },
                        args: [t.tabId, n.MAX_HTML_SIZE, n.DEBUG_MODE]
                      },
                      this.proxy(function () {
                        if (chrome.runtime.lastError) throw new Error(chrome.runtime.lastError.message);
                        chrome.scripting.executeScript({ target: { tabId: t.tabId }, files: ["content_scripts/get-html.js"] });
                      })
                    );
                })
              );
        }
      }),
      (this.convertToPDFPopupMenu = function (e, t) {
        var s = {
          tabId: t.tab.id,
          caller: E().web2pdfCaller.TOOLBAR,
          action: E().web2pdfAction.CONVERT,
          context: E().web2pdfContext.PAGE,
          url: t.tab.url,
          domtitle: A(t.tab.title)
        };
        e.outputPath && (s.outputPath = e.outputPath), this.handleConversionRequest(s);
      }),
      (this.appendToExistingPDFPopupMenu = function (e, t) {
        var s = {
          tabId: t.tab.id,
          caller: E().web2pdfCaller.TOOLBAR,
          action: E().web2pdfAction.APPEND,
          context: E().web2pdfContext.PAGE,
          url: t.tab.url,
          domtitle: A(t.tab.title)
        };
        e.outputPath && (s.outputPath = e.outputPath), this.handleConversionRequest(s);
      });
  })()),
  s.registerModule("acro-web2pdf", c),
  n.IS_ACROBAT &&
    s.registerHandlers({
      "acro-html": c.proxy(c.acro_html),
      appendToExistingPDFPopupMenu: c.proxy(c.appendToExistingPDFPopupMenu),
      convertToPDFPopupMenu: c.proxy(c.convertToPDFPopupMenu),
      showConversionSettingsDialog: c.proxy(c.showConversionSettingsDialog)
    }));
export const acroweb2pdf = c;
