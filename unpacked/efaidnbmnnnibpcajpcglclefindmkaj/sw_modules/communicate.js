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
import { common as t } from "./common.js";
import { analytics as s } from "../common/analytics.js";
import { Proxy as i } from "./proxy.js";
import { floodgate as a } from "./floodgate.js";
import { sharepointModule as n } from "./sharepoint-module.js";
import { privateApi as r } from "./private-api.js";
import { viewerModuleUtils as o } from "./viewer-module-utils.js";
import { SETTINGS as l } from "./settings.js";
import { dcLocalStorage as d, dcSessionStorage as c } from "../common/local-storage.js";
import { updateExtUserState as p } from "../common/util.js";
let m = null,
  h = {},
  _ = {};
class u {
  constructor() {
    (this.tabs = {}), (this.version = -1), (this.NMHConnStatus = !0), (this.activeTab = void 0), (this.isAllowedLocalFileAccess = !1);
  }
  proxy(...e) {
    return i.proxy.bind(this)(...e);
  }
  LOG(...e) {
    return t.LOG(...e);
  }
  setIsAllowedLocalFileAccess(e) {
    this.isAllowedLocalFileAccess = e;
  }
  registerHandlers(t) {
    _ = e.extend(_, t);
  }
  registerModule(e, t) {
    h[e] = t;
  }
  getModule(e) {
    return h[e];
  }
  getTabLastMessage(e) {
    return this.tabs[e];
  }
  updateTabMessage(t, s) {
    this.tabs[t] ? (this.tabs[t] = e.extend(this.tabs[t], s)) : (this.tabs[t] = s);
  }
  setNMHConnectionStatus(e) {
    this.NMHConnStatus = e;
  }
  legacyShim() {
    return this.version <= 1;
  }
  setVersion(e) {
    this.version = e;
  }
  resetPersistPrefCount() {
    d.setItem("persist-menu-closed", 0);
  }
  incrementPersistPrefCount(e) {
    let t = d.getItem("persist-menu-closed");
    t < 10 && "false" !== d.getItem("always-show-pdf-menu") && (t++, d.setItem("persist-menu-closed", t)),
      t >= 10 && (d.setItem("always-show-pdf-menu", "false"), e || s.event(s.e.PERSIST_PDF_OPENPDF_PREF_OFF));
  }
  diffDays(e, t) {
    const s = Math.abs(e - t);
    return Math.floor(s / 864e5);
  }
  enableReprompt() {
    if (!d.getItem("repromptCount") || parseInt(d.getItem("repromptCount")) < l.REPROMPT_DORMANT_USER_ATTEMPTS) {
      let e = Date.now(),
        t = d.getItem("fteDenied") && 10 === parseInt(d.getItem("fteDenied")),
        s = d.getItem("pdfViewer"),
        i = l.VIEWER_ENABLED,
        a = !d.getItem("reprompt-user-timestamp"),
        n = d.getItem("repromptCount") ? d.getItem("repromptCount") : 0,
        r =
          d.getItem("reprompt-user-timestamp") &&
          this.diffDays(e, d.getItem("reprompt-user-timestamp")) >= l.REPROMPT_DORMANT_USER_TIME_INTERVALS[n];
      return i && !s && t && (r || a);
    }
    return !1;
  }
  async isEnablePersistMenu(e) {
    if (
      e &&
      "mime-native" === e.viewer &&
      (l.IS_ERP_READER || l.IS_READER) &&
      d.getItem("openInAcrobatEnable") &&
      "admin" !== d.getItem("installSource")
    )
      return !1;
    if ((await r.isInstalledViaUpsell()) && !d.getItem("pdfViewer")) return !1;
    if (e && "mime" === e.viewer) return !1;
    if (
      (l.VIEWER_ENABLED &&
        ((l.IS_ACROBAT && !l.VIEWER_ENABLED_FOR_ACROBAT) ||
          d.getItem("fteDenied") ||
          "true" !== d.getItem("pdfViewer") ||
          this.resetPersistPrefCount()),
      l.REPROMPT_DORMANT_USER && this.enableReprompt())
    ) {
      let e = d.getItem("repromptCount") ? parseInt(d.getItem("repromptCount")) + 1 : 1;
      d.setItem("repromptCount", e), d.setItem("fteDenied", 9), d.setItem("persist-menu-closed", 9), d.removeItem("always-show-pdf-menu");
    }
    return (
      "false" !== d.getItem("always-show-pdf-menu") &&
      (d.getItem("persist-menu-closed") < 10
        ? !(this.legacyShim() && (!l.VIEWER_ENABLED || d.getItem("pdfViewer")))
        : "true" === d.getItem("always-show-pdf-menu") && (this.resetPersistPrefCount(), !0))
    );
  }
  isViewerEnabled() {
    return !(!l.VIEWER_ENABLED || (l.IS_ACROBAT && !l.VIEWER_ENABLED_FOR_ACROBAT) || "true" !== d.getItem("pdfViewer"));
  }
  async relayMessageToContentScript(e) {
    if (1 == e.newUI && "dismiss" === e.content_op)
      (e.persist = !1), null != e.tabId && (this.tabs[e.tabId].persist = !1), this.incrementPersistPrefCount(e.fteClosed);
    else if (1 == e.newUI && "pdf_menu" === e.panel_op) {
      (await this.isEnablePersistMenu(e)) ? null != e.tabId && (this.tabs[e.tabId].persist = !0) : (e.persist = !1),
        this.resetPersistPrefCount();
    }
    this.sendMessage(e);
  }
  sendViewerStartupInformation(t, i, r) {
    if ((this.isViewerEnabled() && e.isViewerURL(i)) || t.mimeHandled) {
      if (
        ("viewer-startup" === t.main_op &&
          (delete t.main_op,
          (t.isFrictionlessEnabled = l.FRICTIONLESS_ENABLED),
          (t.isSharePointEnabled = n.isFeatureEnabled()),
          (t.isSharePointURL = !1)),
        t.isSharePointEnabled)
      )
        try {
          let e = new URL(i).searchParams.get("pdfurl");
          t.isSharePointURL = n.isAllowListedSharePointURL(e);
        } catch (e) {}
      if (t.mimeHandled)
        if ((s.event(s.e.VIEWER_EXTN_PDF_OPENED), i.startsWith("file://"))) s.event(s.e.VIEWER_PDF_LOCAL_FILE);
        else {
          const { origin: e } = new URL(i);
          s.setArg("pdfDomain", e), s.event(s.e.VIEWER_PDF_OPENED_MIME_HANDLER), s.setArg("pdfDomain", null);
        }
      (t.isFillnSignEnabled = l.FILL_N_SIGN_ENABLED),
        a
          .getFeaturesAndGroups()
          .then(({ featureFlags: e }) => {
            (t.featureFlags = e), r(t);
          })
          .catch((s) => {
            r(t), e.consoleLog(s);
          });
    }
  }
  async sendViewerPreviewInformation(e, t) {
    this.sendMessage({ dend_op: "viewer-type", viewer: "mime", tabId: e.tabId, is_pdf: !0 }), await o.updateVariables(this.version), t();
  }
  handlerTabs(e) {
    r.isMimeHandlerAvailable().then((t) => {
      if (t && e && e.tabId && "outermost_frame" === e.frameType) {
        const t = d.getItem("loadedTabsInfo");
        if (t && t.tabsInfo) {
          const s = t.tabsInfo;
          if (s.includes(e.tabId)) {
            const t = s.filter((t) => t !== e.tabId);
            t.length > 0 ? d.setItem("loadedTabsInfo", { tabsInfo: t }) : d.removeItem("loadedTabsInfo");
          }
        }
      }
    });
  }
  handler(t, i, n) {
    var o,
      l = this;
    if (!t) return;
    if ((this.dump(t, "Communicate Handler receive: "), t.mimeHandled)) {
      var c = { id: t.tabId, url: t.url };
      i.tab = c;
    }
    const p = `chrome-extension://${chrome.runtime.id}/browser/js/popup.html`;
    if (
      (i.url === p && ((i.tab = t.tab), delete t.tab),
      i && i.tab && ((t.tabId = i.tab.id), this.activeTab || (this.activeTab = i.tab.id), t.main_op))
    ) {
      switch (
        ((o = t.main_op),
        delete t.main_op,
        s.logBrowserAnalytics(t),
        this.tabs[t.tabId] &&
          this.tabs[t.tabId].suppress_frictionless &&
          (t.suppress_frictionless = this.tabs[t.tabId].suppress_frictionless),
        (t.version = this.version),
        (t.NMHConnStatus = this.NMHConnStatus),
        o)
      ) {
        case "viewer-preview":
          return this.sendViewerPreviewInformation(t, n), !0;
        case "get-features&groups":
          return a.getFeaturesAndGroups(t.cachePurge).then((e) => n(e)), !0;
        case "getFloodgateFlag":
          a.hasFlag(t.flag).then(n);
          break;
        case "openRecentFileLink":
          e.createTab(t.recent_file_url);
          break;
        case "viewer-type":
          setTimeout(() => {
            this.sendMessage({ dend_op: "viewer-type", viewer: t.viewer, tabId: t.tabId, is_pdf: !0 });
          }, 500);
        case "init-floodgate":
          setTimeout(() => a.init(), 2e3);
          break;
        case "complete_conversion":
          e.createTab(t.conversion_url);
          break;
        case "analytics":
          break;
        case "relay_to_content":
          this.relayMessageToContentScript(t);
          break;
        case "viewer-startup":
          (t.main_op = "viewer-startup"), this.sendViewerStartupInformation(t, i.tab.url, n);
          break;
        case "check-cookie":
          n(d.getItem(t.key));
          break;
        case "set-cookie":
          d.setItem(t.key, t.value);
          break;
        case "check-mime-viewer-availability":
          r.isMimeHandlerAvailable().then((e) => {
            e
              ? "false" === d.getItem("pdfViewer") || "true" === d.getItem("cdnFailure")
                ? this.sendMessage({ dend_op: "viewer-type", tabId: i.tab.id, viewer: "mime-native", is_pdf: !0 })
                : t.url &&
                  t.url.startsWith("file://") &&
                  (this.isAllowedLocalFileAccess ||
                    (s.event(s.e.VIEWER_PDF_LOCAL_FILE_IGNORED),
                    l.sendMessage({ dend_op: "viewer-type", tabId: i.tab.id, viewer: "mime-native", is_pdf: !0 })))
              : this.sendMessage({ dend_op: "viewer-type", tabId: i.tab.id, viewer: "native", is_pdf: !0 });
          });
          break;
        case "uninstall":
          r.setViewerState("disabled"),
            d.setItem("pdfViewer", "false"),
            d.setItem("always-show-pdf-menu", "false"),
            e.mimeReloadAllTabs(),
            d.removeItem("userEligibleForUninstall"),
            chrome.runtime.setUninstallURL(""),
            s.event(s.e.UNINSTALL_DIALOG_UNINSTALLED_SUCCESSFUL),
            setTimeout(() => {
              chrome.management.uninstallSelf();
            }, 1e3);
          break;
        case "caret_mode_toggle_handler":
          chrome.runtime.sendMessage({
            main_op: "relay_to_content",
            content_op: "caret_mode_toggle_handler",
            status: t.toggleCaretModeValue
          });
          break;
        case "initialise-popup":
          this.initialisePopup(i.tab, n);
          break;
        case "cancelWebpageConversion":
        case "clearStatus":
          this.cancelConversion(this.tabs[i.tab.id]);
          break;
        default:
          return _[o]
            ? (s.setOp(
                {
                  preview: "Copy",
                  image_preview: "Image",
                  send: "Send",
                  fillsign: "FillSign",
                  export: "Export",
                  acom: "GotoAcom",
                  to_pdf: "ConvertToPdf"
                }[t.handleResult]
              ),
              _[o](t, i, n))
            : void e.consoleLog("failed to find handler for: " + o);
      }
      return !0;
    }
  }
  async initialisePopup(s, i) {
    let a = { hostedURL: await t.getPopupCDNUrl() };
    if (this.tabs[s.id]) {
      a = e.extend(a, this.tabs[s.id]);
      const t = `chrome-extension://${chrome.runtime.id}`;
      s.url.startsWith(t) && (a.is_viewer = !0);
      [
        "chrome://extensions/",
        t,
        "chrome://newtab/",
        "https://chrome.google.com",
        "https://acrobat.adobe.com/link/file/?uri=",
        "https://acrobat.adobe.com/id/urn:",
        "https://acrobat.adobe.com/link/review/?uri="
      ].some((e) => s.url.startsWith(e)) && (a.isBlacklistedUrl = !0);
      if (!["downloading", "pdf_downloading", "waiting", "in_progress", "complete"].includes(a.current_status) || a.isBlacklistedUrl) {
        const e = a.is_pdf;
        this.clearStatus(a), (a.is_pdf = e);
      }
      e.isLocalFileUrl(s.url) && ((a.is_pdf = !0), (a.isFillnSignEnabled = l.FILL_N_SIGN_ENABLED)),
        (a.isAcrobat = e.isAcrobatAvailable(this.version)),
        (a.autoOpenPDFInAcrobat = "false" !== d.getItem("ViewResultsPref"));
    }
    i(a);
  }
  echoRequest(t) {
    var i, a, n;
    if (!(l.CHROME_VERSION < l.SUPPORTED_VERSION)) {
      if (!this.avoidUrl(t.url)) {
        var r = t.id || t.tabId;
        return (
          this.tabs[r] &&
            (("cancelled" !== (i = this.tabs[r]).current_status &&
              "pdf_opened" !== i.current_status &&
              "pdf_failure" !== i.current_status &&
              "viewer_menu" !== i.panel_op) ||
              ((n = i.is_pdf), this.clearStatus(i), (i.is_pdf = n)),
            i.current_status && (i.panel_op = "status"),
            this,
            (a = i.is_pdf ? "pdf_menu" : "html_menu"),
            i.panel_op && "load-frictionless" === i.panel_op && (delete i.panel_op, s.event(s.e.FRICTIONLESS_WIDGET_CLOSED)),
            "resize_window" === i.content_op && (delete i.content_op, delete i.window_height),
            (i.panel_op = i.panel_op || a),
            "html_menu" === a && (i.persist = !1),
            (i.incognito = t.incognito),
            e.isLocalFileUrl(t.url) && ((i.panel_op = "pdf_menu"), (i.is_pdf = !0), (i.isFillnSignEnabled = l.FILL_N_SIGN_ENABLED)),
            t.url.startsWith(`chrome-extension://${chrome.runtime.id}`)
              ? ((i.panel_op = "viewer_menu"), (i.is_viewer = !0))
              : (i.is_viewer = !1),
            e.consoleLog("repeat cached request: " + i.panel_op)),
          i
        );
      }
      this.disable(t.id);
    }
  }
  async echo(t) {
    p();
    const i = d.getItem("appLocale");
    if ((s.event(s.e.TREFOIL_CLICKED), l.CHROME_VERSION < l.SUPPORTED_VERSION)) {
      this.getModule("session").newSession("browser/js/options.html", !0, {});
    } else {
      var a = this.echoRequest(t);
      if (a) {
        "search" === a.frictionless_workflow && (a.suppress_frictionless = !0),
          (a.trefoilClick = !0),
          (a.frictionless_workflow = null),
          (a.frame_visibility = null),
          (a.persist = await this.isEnablePersistMenu(a));
        let t = chrome.i18n.getMessage("@@ui_locale");
        (a.locale = i || e.getFrictionlessLocale(t)), this.sendMessage(a);
      }
    }
  }
  setGlobals(e) {
    this.globals = e;
  }
  dump(t, s) {
    var i,
      a = [s];
    for (i in t) t.hasOwnProperty(i) && a.push("  " + i + ": " + t[i]);
    e.consoleLog(a.join("\n"));
  }
  sendMessage(t, i = !0, a) {
    var n,
      r = t.tabId;
    this.dump(t, "Sending message:"),
      (t.version = this.version),
      e.consoleLog("sendMessage version", t),
      i && (this.tabs[r] = e.extend(this.tabs[r], t)),
      (t.NMHConnStatus = this.NMHConnStatus),
      e.showFrictionlessMenu(t) && (t.show_frictionless = !0),
      (t.is_edge = e.isEdge()),
      "pdf_menu" === t.panel_op &&
        (t.trefoilClick ? (n = s.e.TREFOIL_PDF_FROM_CLICK) : 0 == t.persist && 0 != t.version && (n = s.e.TREFOIL_PDF_MENU_SHOWN)),
      "flickr" === t.panel_op && (n = s.e.FLICKR_OFFER_SHOWN),
      "html_menu" === t.panel_op && (n = s.e.TREFOIL_HTML_FROM_CLICK),
      n && s.checkAndLogAnalytics(n),
      e.sendMessage(t, this.globals, a),
      delete t.trefoilClick,
      delete t.mimeHandled,
      delete this.tabs[r].trefoilClick,
      delete this.tabs[r].mimeHandled;
  }
  deferMessage(e) {
    "undefined" == typeof setTimeout ? this.sendMessage(e) : setTimeout(this.proxy(this.sendMessage, e), 0);
  }
  sendMessageToPopup(t, s = !0) {
    const i = t.tabId;
    (t.version = this.version),
      s && (this.tabs[i] = e.extend(this.tabs[i], t)),
      (t.NMHConnStatus = this.NMHConnStatus),
      (t.is_edge = e.isEdge()),
      chrome.runtime.sendMessage(t);
  }
  filenameFromUrl(e) {
    try {
      const t = decodeURIComponent(e),
        s = t
          .split("?")[0]
          .split("/")
          .filter((e) => e.length > 0),
        i = s.length > 0 ? s[s.length - 1] : "untitled";
      let a = i;
      const n = i.length - 4;
      return (i.length < 4 || i.toLowerCase().indexOf(".pdf") !== n) && (a += ".pdf"), a;
    } catch (e) {
      return "untitled.pdf";
    }
  }
  async pdf_menu(t, i) {
    var a;
    if (
      (delete (a = this.tabs[i.tab.id] = e.extend(this.tabs[i.tab.id], { tabId: i.tab.id })).dend_op,
      (a.filename = this.filenameFromUrl(t.url)),
      (a.panel_op = "pdf_menu"),
      (a.url = t.url),
      (a.viewer = t.viewer),
      (a.incognito = i.tab.incognito),
      (a.fteFeatureFlag = t.fteFeatureFlag),
      (a.isFillnSignEnabled = l.FILL_N_SIGN_ENABLED),
      (a.isSharePointEnabled = n.isFeatureEnabled()),
      1 == a.isSharePointEnabled && (a.isSharePointURL = n.isAllowListedSharePointURL(a.url)),
      1 == t.persist)
    ) {
      const e = await this.isEnablePersistMenu(t);
      a.persist = !!e;
    } else a.persist = !1;
    const r = d.getItem("fteDenied");
    var o = !(0 == t.version || 1 == t.version || t.version === l.READER_VER || t.version === l.ERP_READER_VER);
    const c = l.VIEWER_ENABLED && !d.getItem("pdfViewer") && (!r || 10 !== parseInt(r)) && (!o || l.VIEWER_ENABLED_FOR_ACROBAT);
    if (
      ("false" !== d.getItem("always-show-pdf-menu") &&
        "mime" !== a.viewer &&
        (1 != a.persist || c || (delete a.fteFeatureFlag, s.event(s.e.PERSIST_PDF_MENU_SHOWN)), this.deferMessage(a)),
      c)
    ) {
      let e,
        i = d.getItem("repromptCount");
      switch (t.fteFeatureFlag) {
        case "dc-cv-fte-pdf-redcard":
          e = s.e.PERSIST_PDF_MENU_RED_CARD_FTE_SHOWN;
          break;
        case "dc-cv-fte-pdf-dmb":
          e = s.e.PERSIST_PDF_MENU_DMB_FTE_SHOWN;
          break;
        default:
          e = s.e.PERSIST_PDF_MENU_FTE_SHOWN;
      }
      i ? s.event(e, { LAUNCH: "Reprompt" }) : s.event(e, { LAUNCH: "Launch" });
    }
    if (!a.incognito)
      if ("true" !== d.getItem("pdfViewer") || ("native" !== a.viewer && "mime-native" !== a.viewer)) {
        if (!d.getItem("pdfViewer") || "false" === d.getItem("pdfViewer")) {
          let e = "Acrobat";
          this.legacyShim() ? (e = "NoApp") : (this.version !== l.READER_VER && this.version !== l.ERP_READER_VER) || (e = "Reader"),
            ("native" !== a.viewer && "mime-native" !== a.viewer) ||
              s.event(s.e.VIEWER_DISABLED_PDF_OPEN_NATIVE_VIEWER, { APPLICATION: e });
        }
      } else s.event(s.e.VIEWER_ENABLED_PDF_OPEN_NATIVE_VIEWER);
  }
  loaded(t) {
    (this.tabs[t] = e.extend(this.tabs[t], { tabId: t, loaded: !0 })), this.enable(t);
  }
  setIsPDF(t, s) {
    this.tabs[t] = e.extend(this.tabs[t], { tabId: t, is_pdf: s });
  }
  cancelConversion(e) {
    this.getModule("acro-web2pdf").cancelConversion(e.tabId),
      delete e.current_status,
      delete e.file_path,
      delete e.domtitle,
      delete e.timing,
      delete e.panel_op,
      delete e.is_pdf,
      delete e.trefoilUI,
      delete e.newUI;
  }
  clearStatus(e, t) {
    "in_progress" !== e.current_status &&
      "downloading" !== e.current_status &&
      (t || "waiting" !== e.current_status) &&
      this.cancelConversion(e);
  }
  loading(t) {
    var s = t.id;
    (this.tabs[s] = e.extend(this.tabs[s], { tabId: s, loaded: !1 })), this.clearStatus(this.tabs[s], !0), this.enable(s);
  }
  async active(t) {
    (this.activeTab = t.tabId), (this.tabs[this.activeTab] = e.extend(this.tabs[this.activeTab], { tabId: t.tabId }));
    if (await this.isEnablePersistMenu()) {
      var s = this.echoRequest(this.tabs[this.activeTab]);
      s && s.persist && this.sendMessage(s);
    }
  }
  async enable(e) {
    if (!d.getItem("enableNewExtensionMenu")) {
      this.tabs[e].iconPromises = this.tabs[e].iconPromises || [];
      var t = this.tabs[e].loaded ? "browser/images/acrobat_dc_appicon_24.png" : "browser/images/acrobat_dc_appicon_24_translucent.png";
      const s = () => chrome.action.setIcon({ path: t, tabId: e });
      if ((this.tabs[e].iconPromises.push(s), this.tabs[e].iconSetInProgress)) return;
      for (this.tabs[e].iconSetInProgress = !0; this.tabs[e].iconPromises.length; )
        await this.tabs[e].iconPromises[0]?.(), this.tabs[e].iconPromises.shift();
      (this.tabs[e].iconSetInProgress = !1), this.tabs[e].loaded ? chrome.action.enable(e) : chrome.action.disable(e);
    }
  }
  disable(e) {
    this.tabs[e] && ((this.tabs[e].loaded = !1), this.enable(e));
  }
  close(e) {
    this.getModule("acro-web2pdf").cancelConversion(e), delete this.tabs[e], this.activeTab === e && (this.activeTab = null);
  }
  tabReplace(e, t) {
    this.close(t), this.loaded(e);
  }
  activeTab() {
    return this.activeTab;
  }
  noop() {}
  avoidUrl(t) {
    if (((t = t || ""), l.VIEWER_ENABLED && d.getItem("pdfViewer") && e.isViewerURL(t))) return !1;
    if (this.version === l.ERP_READER_VER) return !0;
    if (t.startsWith("https://chrome.google.com")) return !0;
    if (this.version == l.READER_VER && 0 == l.FRICTIONLESS_ENABLED) return !t.endsWith(".pdf") && !t.endsWith(".PDF");
    if ((0 == this.version || (1 == this.version && 0 == this.NMHConnStatus)) && !1 === l.FRICTIONLESS_ENABLED) return !1;
    const s = d.getItem("appLocale");
    if (l.FRICTIONLESS_ENABLED && !t.endsWith(".pdf") && !t.endsWith(".PDF")) {
      const t = chrome.i18n.getMessage("@@ui_locale");
      if (null == (s || e.getFrictionlessLocale(t))) {
        if (this.version == l.READER_VER) return !0;
        (0 == this.version || (1 == this.version && 0 == this.NMHConnStatus)) && (l.FRICTIONLESS_ENABLED = !1);
      }
    }
    const i = this.isAllowedLocalFileAccess && e.isLocalFileUrl(t);
    return !t.startsWith("http") && !i;
  }
}
m || ((m = new u()), m.registerHandlers({ "send-analytics": m.proxy(m.noop) }));
export const communicate = m;
