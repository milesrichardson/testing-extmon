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
import { common as e } from "./common.js";
import { getVersionConfig as t } from "./api-util.js";
import { util as a } from "./util.js";
import { SETTINGS as n } from "./settings.js";
import { dcLocalStorage as s } from "../common/local-storage.js";
import { floodgate as i } from "./floodgate.js";
import { loggingApi as o } from "../common/loggingApi.js";
let r;
r ||
  (r = new (function () {
    (this.updateVariables = function (t) {
      try {
        let r = 0 != t && 1 != t && -1 != t,
          c = !(!r || t === n.READER_VER || t === n.ERP_READER_VER);
        s.setItem("locale", a.getFrictionlessLocale(chrome.i18n.getMessage("@@ui_locale"))),
          s.setItem("cdnUrl", e.deriveCDNURL(e.getEnv())),
          s.setItem("isDeskTop", r),
          s.setItem("env", e.getEnv()),
          s.setItem("viewerImsClientId", e.getViewerIMSClientId()),
          s.setItem("imsContextId", e.getImsContextId()),
          s.setItem("viewerImsClientIdSocial", e.getViewerIMSClientIdSocial()),
          s.setItem("imsURL", e.getIMSurl()),
          s.setItem("imsLibUrl", e.getImsLibUrl()),
          s.setItem("dcApiUri", e.getDcApiUri()),
          s.setItem("isAcrobat", c),
          s.getItem("theme") || s.setItem("theme", "auto");
        let l = [
          this.checkFeatureEnable({ flagName: "dc-cv-read-aloud", storageKey: "isReadAloudEnable" }),
          this.checkFeatureEnable({ flagName: "dc-cv-full-screen-mode", storageKey: "fsm" }),
          this.checkFeatureEnable({ flagName: "dc-cv-show-get-desktop", storageKey: "sgd" }),
          this.checkFeatureEnable({ flagName: "dc-cv-save-location-on-options", storageKey: "isSaveLocationPrefEnabled" }),
          this.checkFeatureEnable({ flagName: "dc-cv-enable-splunk-logging", storageKey: "splunkLoggingEnable" }),
          this.checkFeatureEnable({ flagName: "dc-cv-extension-menu", storageKey: "enableNewExtensionMenu" }),
          this.checkFeatureEnable({ flagName: "dc-cv-enable-embed-viewer", storageKey: "ev" }),
          this.checkFeatureEnable({ flagName: "dc-cv-ext-menu-dark-mode", storageKey: "enableExtMenuDarkMode" }),
          this.checkFeatureEnable({ flagName: "dc-cv-share-link", storageKey: "sl" }),
          this.checkFeatureEnable({ flagName: "dc-cv-alloy-on", storageKey: "ao" }),
          this.checkFeatureEnable({ flagName: "dc-register-access-token-expired", storageKey: "rate" }),
          this.checkFeatureEnable({ flagName: "dc-cv-alloy-on-ext-menu", storageKey: "aoem" }),
          this.checkFeatureEnable({ flagName: "dc-cv-upsell-subscribe-cta" }),
          this.checkFeatureEnable({ flagName: "dc-cv-non-free-txn-paywall" }),
          this.checkFeatureEnable({ flagName: "dc-cv-image-print", storageKey: "ip" }),
          this.checkFeatureEnable({ flagName: "dc-cv-document-properties", storageKey: "sdp" }),
          this.checkFeatureEnable({ flagName: "dc-cv-show-digital-signature", storageKey: "sds" }),
          this.checkFeatureEnable({ flagName: "dc-cv-new-sign-in", storageKey: "nsi" }),
          this.checkFeatureEnable({ flagName: "dc-cv-enable-cdn-versioning", storageKey: "enableCDNVersioning" }),
          this.checkFeatureEnable({ flagName: "dc-cv-gen-ai", storageKey: "genAI" })
        ];
        return (
          navigator.onLine &&
            l.push(this.checkFeatureEnable({ flagName: "dc-cv-offline-support-disable", storageKey: "offlineSupportDisable" })),
          Promise.all(l).then(([e, t, n, r, c, l, g, m, d, u, h, f, v, b, I, p, E, k, N, y]) => {
            if (
              (!r && s.getItem("saveLocation")
                ? s.removeItem("saveLocation")
                : r && !s.getItem("saveLocation") && s.setItem("saveLocation", "ask"),
              o.registerLogInterval(c),
              c)
            ) {
              let e = i.getFeatureMeta("dc-cv-enable-splunk-logging") || {};
              (e = JSON.parse(e)), s.setItem("allowedLogIndex", e.index);
            }
            b && v ? s.setItem("allownft", !0) : "" === s.getItem("allownft") && s.setItem("allownft", !1), a.enableNewExtensionMenu(l);
          })
        );
      } catch (e) {}
    }),
      (this.checkFeatureEnable = async function (e) {
        const { flagName: t, storageKey: a } = e,
          n = await i.hasFlag(t);
        return a && s.setItem(a, !!n), n;
      }),
      (this.fetchAndUpdateVersionConfig = async function () {
        if (s.getItem("enableCDNVersioning"))
          try {
            const e = await t();
            if (e) {
              const t = { ...a("prod", e.prod), ...a("non_prod", e.non_prod) };
              s.setItem("version-config", t);
            }
          } catch (e) {
            console.log(new Error(`Version Config failure: ${e}`));
          }
        function e(e, t) {
          for (var a in e.extension)
            if (e.extension[a].id === t) return { iv: e.extension[a].internal_version, ev: e.extension[a].external_version };
        }
        function a(t, a) {
          if (!a) return;
          let n = {};
          const s = e(a, "all_extensions"),
            i = e(a, chrome.runtime.id);
          return (n[`ev_${t}`] = "inherit" !== i?.ev ? i?.ev : s?.ev), (n[`iv_${t}`] = "inherit" !== i?.iv ? i?.iv : s?.iv), n;
        }
      });
  })());
export const viewerModuleUtils = r;
