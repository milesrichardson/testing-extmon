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
import { dcLocalStorage as e, dcSessionStorage as t } from "../../../common/local-storage.js";
import { dcTabStorage as n } from "../tab-storage.js";
import { util as i } from "../content-util.js";
const s = {
  SCOPES: [
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
  ],
  socialSignIn: (t, r) => {
    const o = i.uuid();
    r.hash = r.hash + "signIn=true";
    const a = {
      idp_flow: "social.native",
      provider_id: "google",
      idp_token: t,
      client_id: e.getItem("viewerImsClientId"),
      state: JSON.stringify(
        Object.assign(
          {},
          window.adobeid &&
            window.adobeid.api_parameters &&
            window.adobeid.api_parameters.authorize &&
            window.adobeid.api_parameters.authorize.state,
          { ac: i.isEdge() ? "adobe.com_acrobatextension_edge_login" : "adobe.com_acrobatextension_chrome_login", csrf: o }
        )
      ),
      scope: s.SCOPES.join(","),
      response_type: "token",
      redirect_uri: r,
      device_id: o
    };
    n.setItem("csrf", o);
    const c = new URL(e.getItem("imsURL") + "/ims/authorize/v1"),
      d = window.document,
      g = d.getElementById("google-yolo-authorize-form");
    g.setAttribute("action", c),
      Object.entries(a).forEach(([e, t]) => {
        const n = d.createElement("input");
        n.setAttribute("type", "hidden"), n.setAttribute("id", e), n.setAttribute("name", e), n.setAttribute("value", t), g.appendChild(n);
      }),
      g.submit();
  },
  getSearchParamFromURL: function (e, t) {
    const n = new URL(t);
    return new URLSearchParams(n.search).get(e);
  },
  sendAnalytics: function (e) {
    const t = { main_op: "analytics" };
    (t.analytics = [[e]]), chrome.runtime.sendMessage(t);
  },
  signInAnalyticsLogging: function (e) {
    if (e.indexOf("signIn=true") > -1) {
      const e = n.getItem("signInSource") ? n.getItem("signInSource") : "Unknown";
      s.sendAnalytics("DCBrowserExt:Viewer:Ims:Sign:In:" + e + ":Successful"),
        s.sendAnalytics("DCBrowserExt:Viewer:Ims:Sign:In:Successful"),
        n.setItem("signInAction", "signIn");
    } else if (e.indexOf("signUp=true") > -1) {
      const e = n.getItem("signUpSource") ? n.getItem("signUpSource") : "Unknown";
      s.sendAnalytics("DCBrowserExt:Viewer:Ims:Sign:Up:" + e + ":Successful"),
        s.sendAnalytics("DCBrowserExt:Viewer:Ims:Sign:Up:Successful"),
        n.setItem("signInAction", "signUp");
    }
  },
  checkSignInFromEditVerbPaywall: (e) => {
    if (e.indexOf("touchp=") > -1) {
      const n = e.substring(e.indexOf("touchp=")).split(";")[0].split("=")[1];
      t.setItem("signInTp", n), s.sendAnalytics(`DCBrowserExt:Viewer:User:SignIn:TouchPoint:${n}:Success`);
    }
  },
  parseCSRF: function (e) {
    if (e.href.indexOf("signInError") > -1)
      try {
        const t = decodeURIComponent(e.href.split("#")[1]);
        return new URLSearchParams(t).get("state");
      } catch (e) {
        return null;
      }
    else
      try {
        let t = new URLSearchParams(decodeURIComponent(e.hash).substr(1)).get("state");
        t || (t = new URLSearchParams(decodeURIComponent(e.search)).get("state"));
        const { csrf: n } = JSON.parse(t);
        return n;
      } catch (e) {
        return null;
      }
  },
  sign_out: function (t) {
    const n = new URL(e.getItem("imsURL") + "/ims/logout/v1?");
    n.searchParams.append("client_id", e.getItem("viewerImsClientId")),
      t && t.indexOf("#") > -1 && (t = t.split("#")[0]),
      n.searchParams.append("redirect_uri", t),
      chrome.tabs.update({ url: n.href, active: !0 });
  },
  saveAccessToken: function (t) {
    if (t && t.indexOf("#") > -1) {
      const i = t.split("#")[2],
        s = e.getItem("viewerImsClientId");
      n.setItem("access_token", `${i}&client_id=${s}&from_ims=true&api=authorize`);
    }
  }
};
export { s as signInUtil };
