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
import { dcLocalStorage as o } from "../common/local-storage.js";
import { floodgate as i } from "./floodgate.js";
import { loggingApi as s } from "../common/loggingApi.js";
let r;
r ||
  (r = new (function () {
    (this.updateVariables = function (t) {
      try {
        let r = 0 != t && 1 != t && -1 != t,
          l = !(!r || t === n.READER_VER || t === n.ERP_READER_VER);
        o.setItem("locale", a.getFrictionlessLocale(chrome.i18n.getMessage("@@ui_locale"))),
          o.setItem("cdnUrl", e.deriveCDNURL(e.getEnv())),
          o.setItem("isDeskTop", r),
          o.setItem("env", e.getEnv()),
          o.setItem("viewerImsClientId", e.getViewerIMSClientId()),
          o.setItem("imsContextId", e.getImsContextId()),
          o.setItem("viewerImsClientIdSocial", e.getViewerIMSClientIdSocial()),
          o.setItem("imsURL", e.getIMSurl()),
          o.setItem("imsLibUrl", e.getImsLibUrl()),
          o.setItem("dcApiUri", e.getDcApiUri()),
          o.setItem("isAcrobat", l),
          o.getItem("theme") || o.setItem("theme", "auto");
        let c = [
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
          this.checkFeatureEnable({ flagName: "dc-cv-alloy-on-ext-menu", storageKey: "aoem" }),
          this.checkFeatureEnable({ flagName: "dc-cv-upsell-subscribe-cta" }),
          this.checkFeatureEnable({ flagName: "dc-cv-non-free-txn-paywall" }),
          this.checkFeatureEnable({ flagName: "dc-cv-image-print", storageKey: "ip" }),
          this.checkFeatureEnable({ flagName: "dc-cv-document-properties", storageKey: "sdp" }),
          this.checkFeatureEnable({ flagName: "dc-cv-show-digital-signature", storageKey: "sds" }),
          this.checkFeatureEnable({ flagName: "dc-cv-enable-cdn-versioning", storageKey: "enableCDNVersioning" })
        ];
        return (
          navigator.onLine &&
            c.push(this.checkFeatureEnable({ flagName: "dc-cv-offline-support-disable", storageKey: "offlineSupportDisable" })),
          Promise.all(c).then(([e, t, n, r, l, c, m, g, d, u, f, h, v, b, I, p, E]) => {
            if (
              (!r && o.getItem("saveLocation")
                ? o.removeItem("saveLocation")
                : r && !o.getItem("saveLocation") && o.setItem("saveLocation", "ask"),
              s.registerLogInterval(l),
              l)
            ) {
              let e = i.getFeatureMeta("dc-cv-enable-splunk-logging") || {};
              (e = JSON.parse(e)), o.setItem("allowedLogIndex", e.index);
            }
            v && h ? o.setItem("allownft", !0) : "" === o.getItem("allownft") && o.setItem("allownft", !1), a.enableNewExtensionMenu(c);
          })
        );
      } catch (e) {}
    }),
      (this.checkFeatureEnable = async function (e) {
        const { flagName: t, storageKey: a } = e,
          n = await i.hasFlag(t);
        return a && o.setItem(a, !!n), n;
      }),
      (this.fetchAndUpdateVersionConfig = async function () {
        if (o.getItem("enableCDNVersioning"))
          try {
            const e = await t();
            if (e) {
              const t = { ...a("prod", e.prod), ...a("non_prod", e.non_prod) };
              o.setItem("version-config", t);
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
          const o = e(a, "all_extensions"),
            i = e(a, chrome.runtime.id);
          return (n[`ev_${t}`] = "inherit" !== i?.ev ? i?.ev : o?.ev), (n[`iv_${t}`] = "inherit" !== i?.iv ? i?.iv : o?.iv), n;
        }
      });
  })());
export const viewerModuleUtils = r;
