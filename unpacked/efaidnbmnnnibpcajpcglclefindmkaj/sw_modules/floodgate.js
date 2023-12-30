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
import { Proxy as t } from "./proxy.js";
import { CACHE_PURGE_SCHEME as s, ADOBE_INTERNAL as r } from "./constant.js";
import { dcLocalStorage as a } from "../common/local-storage.js";
import { util as i } from "./util.js";
var n = null;
class o {
  proxy(...e) {
    return t.proxy.bind(this)(...e);
  }
  init() {
    (this.clientId = e.getViewerIMSClientId()),
      (this.floodgateUri = e.getFloodgateuri()),
      (this.env = e.getEnv()),
      (this.accessToken = null),
      (this.useAnonymousUUID = !0),
      (this.featureGroups = null),
      (this.featuresMeta = {}),
      (this.lastCallTime = 0),
      (this.callInProgress = !1),
      (this.callPromise = null),
      (this.ttl = 18e5),
      (this.ffResponse = null);
  }
  getReleaseVariant(e, t) {
    return this.getFeatureGroups(t)
      .then((t) => t[e] && t[e][0])
      .catch((e) => null);
  }
  async getFeaturesAndGroups(e) {
    try {
      const t = await this.getFeatureGroups(e);
      let s = [].concat(...Object.values(t));
      return (s = this.updateLocalFeatureFlags(s)), { featureFlags: s, featureGroups: t, ffResponse: this.ffResponse };
    } catch (e) {
      return { featureFlags: [], featureGroups: {} };
    }
  }
  getFeatureMeta(e) {
    return this.featuresMeta[e];
  }
  hasFlag(e, t) {
    return this.getFeaturesAndGroups(t)
      .then(({ featureFlags: t }) => t.includes(e) || t.includes(`${e}-install`) || t.includes(`${e}-internal`))
      .catch((e) => null);
  }
  getFeatureGroups(e) {
    return new Promise((t) => {
      e === s.NO_CALL
        ? t(this.featureGroups || {})
        : e !== s.EAGER && this.featureGroups
        ? (t(this.featureGroups), this._getFeatureGroups())
        : this._getFeatureGroups().then((e) => {
            t(e);
          });
    });
  }
  setAdobeInternal(e) {
    e[r] && e[r].length && a.setItem("adobeInternal", "true");
  }
  async _getFeatureGroups() {
    const e = new Date().getTime();
    if (navigator.onLine && e > this.lastCallTime + this.ttl) {
      this.callInProgress || ((this.callInProgress = !0), (this.callPromise = this.callFloodgateAPI()));
      const t = await this.callPromise;
      if (((this.callInProgress = !1), t)) {
        const s = {};
        (this.ffResponse = t),
          t.releases.forEach(({ release_name: e, features: t, meta: r }) => {
            (s[e] = t),
              r.forEach(({ k: e, v: t }) => {
                this.featuresMeta[e] = atob(t);
              });
          }),
          (this.featureGroups = s),
          (this.lastCallTime = e),
          (this.ttl = 1e3 * t.ttl),
          this.setAdobeInternal(s);
      }
    }
    return this.featureGroups;
  }
  updateLocalFeatureFlags(e) {
    const t = a
      .getItem("floodgate-add")
      .split(/[, ]+/)
      .filter((t) => !e.includes(t));
    e.push(...t);
    const s = a.getItem("floodgate-remove").split(/[, ]+/);
    return (e = e.filter((e) => !s.includes(e)));
  }
  getApiUrl() {
    const e = new URL(`${this.floodgateUri}/v3/feature`),
      t = "true" === a.getItem("betaOptOut"),
      s = "true" === a.getItem("adobeInternal"),
      r = a.getItem("pdfViewer");
    let n;
    n = r ? ("true" === r ? "enabled" : "disabled") : "neverEnabled";
    const o = {
      clientId: this.clientId,
      meta: !0,
      extVersion: chrome.runtime.getManifest().version,
      extId: chrome.runtime.id,
      installType: a.getItem("installType"),
      installVersion: a.getItem("installVersion"),
      adbInt: !t && s,
      extbrowser: i.isEdge() ? "edge" : "chrome",
      viewerStatus: n
    };
    if (
      (Object.entries(o).forEach(([t, s]) => {
        e.searchParams.append(t, s);
      }),
      !this.floodgateUri || !this.clientId)
    )
      throw new Error("missing data");
    return e.href;
  }
  createAnonUserUUID() {
    const e = `${this.env}_${this.clientId}_${i.uuid()}`;
    try {
      a.setItem("anonUserUUID", e);
    } catch (e) {}
    return e;
  }
  callFloodgateAPI() {
    const e = this.accessToken ? `Bearer ${this.accessToken}` : "",
      t = { "x-api-key": this.clientId };
    if (this.useAnonymousUUID) {
      try {
        t["x-adobe-uuid"] = a.getItem("anonUserUUID");
      } catch (e) {}
      t["x-adobe-uuid"] || (e ? (t.Authorization = e) : (t["x-adobe-uuid"] = this.createAnonUserUUID()));
    } else e && (t.Authorization = e);
    return fetch(this.getApiUrl(), { method: "GET", headers: t })
      .then((e) => {
        const t = e.headers.get("content-type");
        if (e.ok && t && t.includes("application/json")) return (this.error = void 0), e.json();
        e.text().then((s) => {
          const r = `Floodgate API failed with status ${e.status} ${e.statusText} type ${t} text ${s}`;
          throw new TypeError(r);
        });
      })
      .catch((e) => {
        this.error = e && e.message ? e : new Error(`Floodgate failure: ${JSON.stringify(e)}`);
      });
  }
}
n || (n = new o()).init();
export const floodgate = n;
