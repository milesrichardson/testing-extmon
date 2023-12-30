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
import { analytics as e, events as t } from "../../common/analytics.js";
import { dcLocalStorage as s } from "../../common/local-storage.js";
import { util as n } from "./content-util.js";
import { privateApi as a } from "./content-privateApi.js";
import { LOCALES as i, LOCAL_FILE_PERMISSION_URL as o, OptionPageActions as r } from "../../common/constant.js";
await s.init(),
  $(function () {
    const l = "analyticsOptinTitle",
      c = "web2pdfOptOut",
      p = "web2pdfOptOutDisabled",
      d = "LearnMoreURL",
      h = "web2pdfPrivacy",
      u = "web2pdfShowPDFTools",
      S = "web2pdfFrictionlessToggleDescription",
      E = "pdfOwnershipExploreOptionsTitle",
      g = "pdfOwnershipExploreOptionsDescription",
      I = "web2pdfOpenConvertedPDFTitle",
      f = "web2pdfOpenConvertedPDFDescription",
      m = "web2pdfShowPersistentOpen",
      T = "web2pdfShowPersistentOpenDescription",
      _ = "webpagePDFConversion",
      v = "webpagePDFConversionDescription",
      O = "optionsSuccessPrompt",
      P = "optionsFailurePrompt",
      A = "appearancePrefTitle",
      b = "appearancePrefDesc",
      D = "appearancePrefOp1",
      N = "appearancePrefOp2",
      w = "appearancePrefOp3",
      L = "saveLocationPreferenceTitle",
      C = "saveLocationPreferenceDescription",
      R = "saveLocationOp1",
      y = "saveLocationOp2",
      B = "saveLocationOp3",
      M = "userLocale",
      F = "localFileOptionTitle",
      U = "localFileOptionDesc";
    let x = [],
      G = {},
      k = null;
    class H {
      constructor() {
        this.showEligibleSaveButton(),
          (this.ID = "#web2pdfSaveButton"),
          (this.closePromptID = "#prompt-close"),
          (this.enableState = !1),
          (this.optionStates = new Set()),
          (this.timeoutId = null),
          $(this.ID).click((e) => this.SavePreferences(e)),
          $(this.closePromptID).click((e) => this.HideSavedPrompt(e));
      }
      showEligibleSaveButton() {
        let e, t;
        s.getItem("enableNewExtensionMenu")
          ? ([e, t] = [$("#saveButtonHeader"), $("#saveButtonFooter")])
          : ([e, t] = [$("#saveButtonFooter"), $("#saveButtonHeader")]),
          e.removeClass("hidden"),
          t.remove();
      }
      Reset() {
        (this.enableState = !1), this.optionStates.clear(), $(this.ID).prop("disabled", !0);
      }
      setEnabled(e) {
        this.optionStates.add(e), $(this.ID).prop("disabled", !1), (this.enableState = !0);
      }
      setDisabled(e) {
        this.optionStates.has(e) &&
          (this.optionStates.delete(e), 0 === this.optionStates.size && ($(this.ID).prop("disabled", !0), (this.enableState = !1)));
      }
      GetState() {
        return this.enableState;
      }
      SavePreferences() {
        const e = { analytics: [] };
        for (const t in G) G[t].hasUpdated && (e[t] = G[t].GetCurrentState());
        const t = x.find((e) => "pdfViewer" === e.storageKey && e.hasUpdated);
        if (t) {
          let e;
          !0 === t.currentState || "true" === t.currentState
            ? (s.setItem("viewer-enabled-source", "ownership-consent"), (e = "true"))
            : (e = "false"),
            n.isEdge() && n.messageToMain({ main_op: "pdfViewerChanged", value: e });
        }
        G.environment && G.environment.hasUpdated && n.messageToMain({ main_op: "init-floodgate" }),
          x
            .filter((e) => e.hasUpdated)
            .map((e) => e.SavePreferences())
            .filter((e) => e)
            .forEach((t) => e.analytics.push(t)),
          (function (e, t) {
            n.messageToMain({ main_op: "save-preferences", ...e }, t);
          })(e, (e) => {
            e.success ? this.ShowSavedPrompt(!0) : this.ShowSavedPrompt(!1),
              this.Reset(),
              te(async (e) => {
                Q(e.settings), await ee(e), Z();
              });
          });
      }
      ShowSavedPrompt(e) {
        const t = $("#savePrompt"),
          s = $(".prompt"),
          a = $("#optionsSuccessPrompt");
        e ? (a.text(n.getTranslation(O)), s.removeClass("failure")) : (a.text(n.getTranslation(P)), s.addClass("failure")),
          t.show(),
          this.timeoutId && clearTimeout(this.timeoutId),
          (this.timeoutId = setTimeout((e) => this.HideSavedPrompt(), 5e3));
      }
      HideSavedPrompt() {
        $("#savePrompt").hide();
      }
    }
    class V {
      constructor(e, t, n, a) {
        (this.titleId = e),
          (this.descriptionId = t),
          (this.storageKey = a),
          (this.defaultState = s.getItem(this.storageKey) || n),
          (this.currentState = this.defaultState),
          (this.hasUpdated = !1),
          (this.savePreferencesButton = null);
      }
      AttachEventHandler(e) {
        this.savePreferencesButton = e;
      }
      RenderInputItem() {
        return $("<div/>");
      }
      Render() {
        const e = $("<div/>", { class: "option" }),
          t = $("<label/>", { class: "label", for: this.titleId }),
          s = $("<span/>", { class: "label-title", text: n.getTranslation(this.titleId) || this.titleId, id: this.titleId }),
          a = $("<span/>", {
            class: "label-description",
            text: n.getTranslation(this.descriptionId) || this.descriptionId,
            id: this.descriptionId
          });
        t.append(s), t.append(a), e.append(t);
        const i = this.RenderInputItem();
        return e.append(i), e;
      }
      GetCurrentState() {
        return this.currentState;
      }
      SavePreferences() {
        this.hasUpdated &&
          (this.storageKey &&
            (n.consoleLog(
              "Updating Preference for ",
              this.storageKey,
              "from",
              s.getItem(this.storageKey, this.defaultState),
              "to",
              this.currentState
            ),
            "pdfViewer" === this.storageKey &&
              (s.getWithTTL("ownership-upgrade") &&
                !1 === this.currentState &&
                (n.messageToMain({
                  main_op: "analytics",
                  analytics: [
                    [
                      t.USE_ACROBAT_VIEWER_DISABLED_DEFAULT_OWNERSHIP_EXPERIMENT,
                      { SOURCE: "OptionsPage", EXPERIMENT: s.getItem("experiment-ownership") }
                    ],
                    [t.USE_ACROBAT_VIEWER_DISABLED_DEFAULT_OWNERSHIP, { SOURCE: "OptionsPage" }]
                  ]
                }),
                s.removeItem("ownership-upgrade"),
                s.removeItem("defaultOwnerShipExperiment")),
              a.setViewerState(!0 === this.currentState ? "enabled" : "disabled")),
            s.setItem(this.storageKey, String(this.currentState))),
          (this.hasUpdated = !1),
          (this.defaultState = this.currentState));
      }
    }
    class W extends V {
      constructor(e, t, n, a, i, o) {
        super(e, t, n, a),
          (this.defaultState = (function (e, t = !1) {
            const n = s.getItem(e);
            return n && "" !== n ? "true" === n : t;
          })(this.storageKey, n)),
          (this.currentState = this.defaultState),
          (this.analyticsId = { enabled: i, disabled: o });
      }
      onToggleChange(e) {
        const t = $(e.currentTarget);
        (this.currentState = !t.hasClass("checked")),
          (this.hasUpdated = !this.hasUpdated),
          t.toggleClass("checked"),
          this.savePreferencesButton && this.currentState === this.defaultState
            ? this.savePreferencesButton.setDisabled(this.titleId)
            : this.savePreferencesButton.setEnabled(this.titleId);
      }
      RenderDisabledInputItem() {
        const e = $("<span/>"),
          t = $("<button/>", { class: "option-toggle-disabled" });
        return e.append(t), e;
      }
      RenderInputItem() {
        const e = $("<span/>"),
          t = $("<button/>", { class: "option-toggle" });
        return t.click((e) => this.onToggleChange(e)), this.currentState && t.addClass("checked"), e.append(t), e;
      }
      GetAnalytics() {
        return this.currentState ? this.analyticsId.enabled : this.analyticsId.disabled;
      }
      SavePreferences() {
        return super.SavePreferences(), this.GetAnalytics();
      }
    }
    class K extends V {
      constructor(e, t, n, a, i, o, r) {
        super(e, t, a, i), (this.valuesMap = n), (this.onSavePreferences = o), r && !s.getItem(i) && s.setItem(i, String(a));
      }
      onSelectionChange(e) {
        (this.currentState = $(e.currentTarget).val()),
          this.currentState === this.defaultState
            ? ((this.hasUpdated = !1), this.savePreferencesButton && this.savePreferencesButton.setDisabled(this.titleId))
            : ((this.hasUpdated = !0), this.savePreferencesButton && this.savePreferencesButton.setEnabled(this.titleId));
      }
      RenderInputItem() {
        const e = $("<span/>"),
          t = $("<select/>", { class: "option-select" });
        for (const e in this.valuesMap) {
          const s = $("<option/>", { value: e, text: this.valuesMap[e] });
          t.append(s);
        }
        return t.change((e) => this.onSelectionChange(e)), this.currentState && t.val(this.currentState), e.append(t), e;
      }
      SavePreferences() {
        const e = this.defaultState;
        super.SavePreferences(), this.onSavePreferences && this.onSavePreferences(this.currentState, e);
      }
    }
    class j extends W {
      constructor() {
        let e = "false" === s.getItem("ANALYTICS_OPT_IN_ADMIN") ? p : c;
        super(l, e, !0, "logAnalytics", t.OPTIONS_ENABLED_ANALYTICS, t.OPTIONS_DISABLED_ANALYTICS),
          (this.learnMoreLink = d),
          (this.learnMoreTitle = h);
      }
      Render() {
        const e = $("<div/>", { class: "option" }),
          a = $("<label/>", { class: "label", for: this.titleId }),
          i = $("<span/>", { class: "label-title", text: n.getTranslation(this.titleId), id: this.titleId }),
          o = $("<span/>", { class: "label-description", text: n.getTranslation(this.descriptionId) + " ", id: this.descriptionId }),
          r = $("<a/>", {
            class: "learn-more",
            href: n.getTranslation(this.learnMoreLink),
            text: n.getTranslation(this.learnMoreTitle),
            target: "_blank"
          });
        let l;
        return (
          r.click(function () {
            n.messageToMain({ main_op: "analytics", analytics: [[t.OPTIONS_ABOUT_ADOBE_ACROBAT_CLICKED]] });
          }),
          a.append(i),
          a.append(o),
          e.append(a),
          "false" === s.getItem("ANALYTICS_OPT_IN_ADMIN")
            ? (l = this.RenderDisabledInputItem())
            : ((l = this.RenderInputItem()), o.append(r)),
          e.append(l),
          e
        );
      }
      SavePreferences() {
        if (this.hasUpdated) return (this.hasUpdated = !1), (this.defaultState = this.currentState), this.GetAnalytics();
      }
    }
    class q extends V {
      constructor(e, t) {
        super(e, t, null, null);
      }
      onButtonClick(s) {
        chrome.tabs.create({ url: o, active: !0 }),
          chrome.extension.isAllowedFileSchemeAccess().then((s) => {
            e.event(t.LOCAL_FILE_OPTIONS_CLICKED, { STATE: s ? "Disable" : "Enable" });
          });
      }
      RenderInputItem() {
        const e = $("<span/>"),
          t = $("<button/>", { class: "option-localfile" }),
          s = $("<span/>", { class: "option-localfile-text" });
        return (
          chrome.extension.isAllowedFileSchemeAccess().then((e) => {
            s.text(n.getTranslation(e ? "Disable" : "Enable")),
              t.append(s),
              t.append($("<img>", { class: "option-localfile-icon" }).attr("src", "../images/SDC_LinkOut_13_N.svg"));
          }),
          t.click((e) => this.onButtonClick(e)),
          e.append(t),
          e
        );
      }
      SavePreferences() {}
    }
    class Y extends V {
      constructor(e, t) {
        super(e, t, null, null);
      }
      handleClick() {
        n.messageToMain({ main_op: "analytics", analytics: [t.TREFOIL_HTML_PREFERENCES_CLICK] }),
          n.messageToMain({ main_op: "showConversionSettingsDialog" });
      }
      RenderInputItem() {
        const e = $("<span/>"),
          t = $("<button/>", { class: "option-webpage-conversion" }),
          s = $("<span/>", { class: "option-webpage-conversion-text" });
        return s.text(n.getTranslation("editMegaVerbText")), t.append(s), t.click(this.handleClick), e.append(t), e;
      }
    }
    function X(e) {
      return e.version > 13;
    }
    function z(e) {
      return 13 == e.version;
    }
    function J() {
      const e = s.getItem("fteDenied") || "0",
        t = "false" === s.getItem("pdfViewer");
      return SETTINGS.VIEWER_SHOW_OPEN_IN_ACRO && (10 === parseInt(e) || t);
    }
    function Q(e) {
      if (e && e.settings) {
        for (const t in e.settings) SETTINGS[t] = e.settings[t];
        (function (e) {
          return null === e.locale;
        })(e) && (SETTINGS.FRICTIONLESS_ENABLED = !1);
      }
    }
    function Z() {
      null == k && (k = new H());
      const e = $("#toggles");
      $("#progress").remove(),
        e.empty(),
        x.forEach((t) => {
          t.AttachEventHandler(k);
          const s = t.Render();
          e.append(s);
        });
    }
    async function ee(e) {
      (x = []), (G = {});
      const o = new j(),
        r = new W(u, S, !0, "always-show-pdftools", t.FRICTIONLESS_AUTO_SUGGESTION_ENABLED, t.FRICTIONLESS_AUTO_SUGGESTION_DISABLED),
        l = new W(E, g, !1, "pdfViewer", t.USE_ACROBAT_IN_CHROME_ENABLED, t.USE_ACROBAT_IN_CHROME_DISABLED),
        c = new W(I, f, !0, "ViewResultsPref", t.TREFOIL_HTML_OPENPDF_PREF_ON, t.TREFOIL_HTML_OPENPDF_PREF_OFF),
        p = new W(m, T, !0, "always-show-pdf-menu", t.OPTIONS_ENABLED_OPEN_IN_ACROBAT, t.OPTIONS_DISABLED_OPEN_IN_ACROBAT),
        d = new q(F, U),
        h = new Y(_, v);
      X(e)
        ? (x.push(c), SETTINGS.VIEWER_ENABLED && SETTINGS.VIEWER_ENABLED_FOR_ACROBAT ? (x.push(l), J() && x.push(p)) : x.push(p))
        : z(e)
        ? await (async function () {
            const e = await (async function () {
              return !(
                n.isEdge() &&
                (await a.isMimeHandlerAvailable()) &&
                s.getItem("openInAcrobatEnable") &&
                "admin" !== s.getItem("installSource")
              );
            })();
            SETTINGS.VIEWER_ENABLED
              ? (x.push(l), SETTINGS.FRICTIONLESS_ENABLED && !n.isEdge() && x.push(r), J() && e && x.push(p))
              : (SETTINGS.FRICTIONLESS_ENABLED && !n.isEdge() && x.push(r), e && x.push(p));
          })()
        : (SETTINGS.VIEWER_ENABLED && x.push(l), SETTINGS.FRICTIONLESS_ENABLED && !n.isEdge() && x.push(r));
      const O = await chrome.runtime.sendMessage({ main_op: "getFloodgateFlag", flag: "dc-cv-local-file-fte" }),
        P = await chrome.extension.isAllowedFileSchemeAccess();
      !O || n.isEdge() || P || x.push(d);
      const $ = n.getTranslation(D),
        k = n.getTranslation(N),
        H = n.getTranslation(w);
      const V = new K(
        A,
        b,
        { auto: $, dark: k, light: H },
        "auto",
        "theme",
        function (e, s) {
          n.messageToMain({ main_op: "themeChange", analytics: [[t.OPTIONS_APPEARENCE_THEME_CHANGED, { OLDTHEME: s, NEWTHEME: e }]] });
        },
        !0
      );
      if ((x.push(V), !0 === s.getItem("isSaveLocationPrefEnabled"))) {
        const ee = n.getTranslation(R),
          te = n.getTranslation(y),
          se = n.getTranslation(B);
        function Q(e, a) {
          n.messageToMain({ main_op: "analytics", analytics: [[t.SAVE_LOCATION_PREFERENCE_CHANGED, { OLDPREF: a, NEWPREF: e }]] }),
            s.setItem("selectedSaveLocationPreference", !0);
        }
        const ne = new K(L, C, { ask: ee, cloud: te, local: se }, "ask", "saveLocation", Q, !0);
        x.push(ne);
      }
      const Z = async () => {};
      if (await chrome.runtime.sendMessage({ main_op: "getFloodgateFlag", flag: "dc-cv-locale-option-page" })) {
        const ae = new K(
          M,
          null,
          i,
          s.getItem("viewer-locale") || n.getFrictionlessLocale(chrome.i18n.getMessage("@@ui_locale")),
          "appLocale",
          Z,
          !0
        );
        x.push(ae);
      }
      x.push(o),
        (G.analytics_on = o),
        (function (e) {
          if (SETTINGS.DEBUG_MODE) {
            function t(e) {
              n.messageToMain({ panel_op: "common", requestType: "update_env", env: e });
            }
            const s = new K(
                "Development Environment",
                "Select the target environment for the extension.",
                { prod: "Production", stage: "Stage", test: "Test", dev: "Dev", "local-dev": "Local Dev" },
                e.environment || "prod",
                "env",
                t
              ),
              a = X(e) ? "acrobat" : z(e) ? "reader" : "no-app",
              i = new K(
                "Connected Application",
                "Select the target connected application for the extension functionalities. This settings only mock the views, the functionality may be broken.",
                { acrobat: "Acrobat", reader: "Reader", "no-app": "No App" },
                a || "acrobat"
              );
            x.push(s, i), (G.environment = s), (G.product = i);
          }
        })(e),
        s.getItem("enableNewExtensionMenu") && X(e) && x.push(h);
    }
    function te(e) {
      n.messageToMain({ main_op: "fetch-preferences" }, e);
    }
    function se(e) {
      const t = x.filter((t) => t.titleId === e);
      return t.length > 0 ? t[0] : null;
    }
    function ne(e, t, s) {
      if (SETTINGS.TEST_MODE) return;
      const n = e.toggleId,
        a = se(n),
        i = e.requestType;
      let o, l;
      if (i === r.OPTIONS_UPDATE_TOGGLE)
        a ? ((a.currentState = e.toggleVal), a.savePreferencesButton.SavePreferences(), (o = a.currentState)) : (l = "Toggle not visible."),
          s && s({ requestType: i, toggleId: n, response: o, error: l });
    }
    $(document).ready(function () {
      n.translateElements(".translate"),
        te(async (e) => {
          Q(e),
            await ee(e),
            Z(),
            n.addMainListener(ne),
            (function () {
              if (!SETTINGS.TEST_MODE) return;
              const e = "check_toggle_state",
                t = "update_toggle_state";
              chrome.runtime.onMessage.addListener(function (s, n, a) {
                if (!s.panel_op || "test" !== s.panel_op) return;
                const i = s.test_extension,
                  o = s.toggleId,
                  r = se(o);
                let l, c;
                switch (i) {
                  case e:
                    r ? (l = r.currentState) : (c = "Toggle not visible.");
                    break;
                  case t:
                    r
                      ? ((r.currentState = s.toggleVal),
                        (r.hasUpdated = !0),
                        r.savePreferencesButton.SavePreferences(),
                        (l = r.currentState))
                      : (c = "Toggle not visible.");
                    break;
                  default:
                    c = "Invalid request type.";
                }
                a({ requestType: i, toggleId: o, response: l, error: c });
              });
            })();
        });
    });
  });
