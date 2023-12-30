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
import { dcLocalStorage as e } from "../common/local-storage.js";
import { communicate as t } from "./communicate.js";
import { privateApi as s } from "./private-api.js";
import { Proxy as r } from "./proxy.js";
import { util as i } from "./util.js";
import { SETTINGS as a } from "./settings.js";
import { EDGE_USER_STATE as n, ACROBAT_USER_STATE as o, DECLARATIVE_IMS_REFERER_HEADER as c } from "./constant.js";
import { hydrateWithStorage as l } from "./hydrate.js";
import { common as d } from "./common.js";
import { analytics as p } from "../common/analytics.js";
let u = null;
const m = a ? a.POLLING_INTERVAL_IN_MINUTES : 1440;
class h {
  constructor() {
    (this.alarmName = "userSubscription"),
      (this.scopes = [
        "AdobeID",
        "openid",
        "DCAPI",
        "sign_user_read",
        "sign_user_write",
        "sign_user_login",
        "sign_library_read",
        "sign_library_write",
        "agreement_send",
        "agreement_read",
        "agreement_write",
        "ab.manage",
        "additional_info.account_type",
        "sao.ACOM_ESIGN_TRIAL",
        "widget_read",
        "widget_write",
        "workflow_read",
        "workflow_write"
      ]),
      (this.proxy = r.proxy.bind(this)),
      i.isEdge() && this.initiateUserPolling();
  }
  initiateUserPolling() {
    s.isMimeHandlerAvailable().then(
      l((t) => {
        const s = "true" === e.getItem("pdfViewer");
        t && s ? this.startUserPolling() : this.stopUserPolling();
      })
    );
  }
  async getUninstallPopupSettingsFromSchema() {
    try {
      const e = await chrome.storage.managed.get("UninstallPopup");
      return !e || "false" !== e.UninstallPopup;
    } catch (e) {
      return !0;
    }
  }
  getUserSubscription(e = []) {
    let t = e.find(this.checkIfPaidUser);
    return t || e[0];
  }
  async getUserDetails({ token: t, userApiDetail: s = {} }) {
    try {
      const r = s.userDetailApiUrl,
        a = {
          Accept: s.userSubscriptionJson,
          Authorization: `Bearer ${t}`,
          "x-api-app-info": "dc-chrome-viewer",
          "x-request-id": i.uuid(),
          "x-api-client-id": `dc-chrome-viewer:${chrome.runtime.id}`,
          "X-Requested-With": "XMLHttpRequest"
        },
        n = await fetch(r, { method: "GET", headers: a });
      if (!n.ok) throw new Error(n.statusText || "API_ERROR");
      e.setItem("userDetailsFetchedTimeStamp", Date.now());
      return await n.json();
    } catch (e) {
      return void i.consoleLog("Failed to fetch user detail", e);
    }
  }
  async updateBrowserUserState(t = {}) {
    const r = e.getItem("pdfViewer");
    let i = "enabled";
    if ((((r && "false" === r) || !1 === r) && (i = "disabled"), t && t.level)) {
      this.checkIfUserIsFree(t)
        ? s.setEdgeUserState({ userState: n.free, viewerState: i })
        : s.setEdgeUserState({ userState: n.subscribed, viewerState: i });
    } else s.setEdgeUserState({ userState: n.pending, viewerState: i });
  }
  checkIfUserIsFree(e = {}) {
    return ["ESign", "SendNow", "FillAndSign", "Files"].includes(e.name) || e.level === o.free;
  }
  checkIfPaidUser(e = {}) {
    return (
      e.level !== o.free && ["DCGlobal", "DCEnterprise", "AcrobatPlus", "AcrobatStd", "PDFPack", "ExportPDF", "CreatePDF"].includes(e.name)
    );
  }
  async checkIfUninstallRequired(t = {}) {
    const r = await s.isInstalledViaUpsell(),
      i = this.checkIfUserIsFree(t);
    if (r) return i;
    {
      if ("admin" === e.getItem("installSource")) return !1;
      const t = await s.getEdgeUserState();
      return !(!t || t.userState !== n.subscribed || !i);
    }
  }
  pollUserData(e) {
    chrome.alarms.create(this.alarmName, { delayInMinutes: e || m, periodInMinutes: m });
  }
  async getDiscoveryDetail(t) {
    const s = d.getEnv(),
      r = e.getItem("dcApiUri"),
      a = e.getItem("envUserAPIMap") || {},
      n = a[s],
      o = n ? n.discoveryExpiryTime : void 0,
      c = parseInt(Date.now() / 1e3);
    if (o && o > c) return n;
    try {
      const i = {
          Accept: `application/vnd.adobe.dc+json; profile="${r}/schemas/discovery_v1.json"`,
          Authorization: `Bearer ${t}`,
          "x-api-app-info": "dc-chrome-viewer",
          "x-api-client-id": `dc-chrome-viewer:${chrome.runtime.id}`
        },
        n = await fetch(`${r}/discovery`, { method: "GET", headers: i });
      if (!n.ok) throw new Error(n.statusText || "API_ERROR");
      const o = await n.json(),
        c = o.resources && o.resources.users && o.resources.users.get_user,
        l = {
          userSubscriptionJson: c && c.accept && c.accept["user_v1.json"],
          discoveryExpiryTime: o.expiry,
          userDetailApiUrl: c && c.resource_parameter && c.resource_parameter.default
        };
      return c ? ((a[s] = l), e.setItem("envUserAPIMap", a), l) : {};
    } catch (e) {
      i.consoleLog("Discovery Api failed", e);
    }
  }
  async startUserPolling() {
    const t = e.getItem("userDetailsFetchedTimeStamp");
    if (t) {
      const e = m - Math.floor((Date.now() - t) / 6e4);
      e < 0 ? this.pollUserData(1) : this.pollUserData(e);
    } else {
      e.setItem("userDetailsFetchedTimeStamp", Date.now());
      if (await s.isInstalledViaUpsell()) return void this.pollUserData();
      this.pollUserData(1);
    }
  }
  userSubscriptionhandler(t, r, i) {
    return (
      s.isMimeHandlerAvailable().then(async (r) => {
        if (r) {
          const r = { ...t, main_op: "" },
            a =
              (!(await this.getUninstallPopupSettingsFromSchema()) && "sideload" === e.getItem("installSource")) ||
              !(await s.isInstalledViaUpsell());
          r.main_op = a ? "do-not-show-pop-up" : "showUninstallPopUp";
          const { userSubscriptionData: n = [] } = t,
            o = this.getUserSubscription(n),
            c = this.checkIfUserIsFree(o || {}),
            l = this.checkIfPaidUser(o || {}),
            d = e.getItem("userEligibleForUninstall");
          e.setItem("userDetailsFetchedTimeStamp", Date.now()),
            this.pollUserData(m),
            c && "true" === d
              ? (i && i(r), this.updateBrowserUserState(o || {}))
              : this.checkIfUninstallRequired(o || {}).then((t) => {
                  p.event(p.e.UNINSTALL_USER_STATE_FROM_VIEWER, { ISPAID: l, VALUE: t }),
                    t
                      ? (e.setItem("userEligibleForUninstall", "true"), i && i(r))
                      : (l && e.removeItem("userEligibleForUninstall"), i && i({ main_op: "do-not-show-pop-up" })),
                    this.updateBrowserUserState(o);
                });
        } else i({ main_op: "do-not-show-pop-up" });
      }),
      !0
    );
  }
  stopUserPolling() {
    chrome.permissions.contains({ permissions: ["alarms"] }, (e) => {
      e && chrome.alarms.clear(this.alarmName);
    });
  }
  pdfViewerValueChanged(t = {}) {
    s.isMimeHandlerAvailable().then((s) => {
      s && "true" === t.value ? this.startUserPolling() : (e.removeItem("userDetailsFetchedTimeStamp"), this.stopUserPolling());
    });
  }
  async fetchSignInToken() {
    try {
      const t = d.getEnv();
      await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
          {
            id: c,
            priority: 1,
            action: {
              type: "modifyHeaders",
              requestHeaders: [{ header: "referer", operation: "set", value: `chrome-extension://${chrome.runtime.id}` }]
            },
            condition: { initiatorDomains: [chrome.runtime.id], regexFilter: "ims/check/v6/token" }
          }
        ],
        removeRuleIds: [c]
      });
      const s = e.getItem("viewerImsClientId"),
        r = this.scopes;
      let i = new FormData();
      const a = new Headers();
      a.append("client_id", s),
        a.append("content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
        a.append("cache-control", "no-cache"),
        i.append("client_id", s),
        i.append("scope", r);
      const n = new URLSearchParams();
      n.append("client_id", s), n.append("scope", r);
      let o = "https://adobeid-na1.services.adobe.com/ims/check/v6/token?jslVersion=v2-v0.36.0-1-g835e663";
      "prod" !== t && (o = "https://adobeid-na1-stg1.services.adobe.com/ims/check/v6/token?jslVersion=v2-v0.38.0-1-gdf44523");
      const l = await fetch(o, { method: "POST", body: n, headers: a });
      return await l.json();
    } catch (e) {
      return i.consoleLog("Errored while fetching user details", e), {};
    }
  }
  async checkUserIsSignedIn(e, t, s) {
    const r = await this.fetchSignInToken();
    return s({ signInStatus: !!(r && r.access_token) });
  }
  async updateUserDetailInEdge() {
    const t = await this.fetchSignInToken(),
      s = t && t.access_token ? t.access_token : "";
    if (s) {
      const t = await this.getDiscoveryDetail(s);
      if (!t) return;
      const r = await this.getUserDetails({ token: s, userApiDetail: t });
      if (r?.subscriptions?.subscriptions?.length) {
        const t = this.getUserSubscription(r.subscriptions.subscriptions),
          s = this.checkIfPaidUser(t);
        this.checkIfUninstallRequired(t).then((r) => {
          r ? e.setItem("userEligibleForUninstall", "true") : s && e.removeItem("userEligibleForUninstall"),
            p.event(p.e.UNINSTALL_USER_STATE, { ISPAID: s, VALUE: r }),
            this.updateBrowserUserState(t);
        });
      }
    } else p.event(p.e.UNINSTALL_USER_STATE_PENDING), this.updateBrowserUserState({});
  }
}
u || (u = new h());
const g = u,
  I = (e) => {
    e && e.name === g.alarmName && g.updateUserDetailInEdge();
  };
t.registerHandlers({
  userSubscriptionData: u.proxy(u.userSubscriptionhandler),
  pdfViewerChanged: u.proxy(u.pdfViewerValueChanged),
  checkUserIsSignedIn: u.proxy(u.checkUserIsSignedIn)
});
export { g as userSubscription, I as userSubscriptionAlarmHandler };
