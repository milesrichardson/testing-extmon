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
import { dcLocalStorage as e } from "./common/local-storage.js";
import { hydrateWithStorage as o } from "./sw_modules/hydrate.js";
import { communicate as r } from "./sw_modules/communicate.js";
import { onMessageListener as s } from "./sw_modules/common.js";
import { externalClients as t } from "./sw_modules/externalClients.js";
import { feat as m } from "./sw_modules/feat.js";
import { session as a } from "./sw_modules/session.js";
import { acroweb2pdf as n } from "./sw_modules/acro-web2pdf.js";
import { userSubscriptionAlarmHandler as d } from "./sw_modules/user-subscription.js";
import "./sw_modules/acro-gstate.js";
import {
  startup as i,
  registerActions as c,
  onWelcomeTabRemoved as l,
  contextMenuOnClickHandler as p,
  updateAnalyticsOptInAdmin as u,
  refocusLocalFteWindow as h,
  onLocalFileClosed as f
} from "./sw_modules/ch-context-menu.js";
import { processRequest as b, honorRequest as w, onTabsUpdated as L, onTabActivated as _ } from "./sw_modules/viewer-module.js";
import { indexedDBScript as x } from "./common/indexDB.js";
const y = ["http", "https", "ftp", "file", "blob", "data", "filesystem", "drive"];
try {
  const g = chrome.runtime.getURL("/");
  chrome.management.getSelf(o(i)),
    chrome.runtime.onInstalled.addListener(o(c)),
    chrome.contextMenus.onClicked.addListener(o(p)),
    chrome.runtime.onStartup.addListener(o(() => e.removeItem("loadedTabsInfo"))),
    chrome.runtime.onMessageExternal.addListener(o(m, t)),
    chrome.webRequest.onHeadersReceived.addListener(
      (e) => {
        o(b)(e, !1);
      },
      { urls: ["http://*/*", "https://*/*"], types: ["main_frame", "sub_frame"] },
      ["responseHeaders"]
    ),
    chrome.webRequest.onBeforeRequest.addListener(
      (e) => {
        o(b)(e, !0);
      },
      { urls: ["file://*/*.pdf", "file://*/*.PDF"], types: ["main_frame", "sub_frame"] }
    ),
    chrome.webRequest.onBeforeRequest.addListener(o(w), { urls: y.map((e) => g + e + "*"), types: ["main_frame"] }),
    chrome.webNavigation.onBeforeNavigate.addListener(o(r.handlerTabs), { frameType: "outermost_frame" }),
    chrome.action.onClicked.addListener(o(r.proxy(r.echo))),
    chrome.runtime.onMessage.addListener((...e) => (o(s, r.proxy(r.handler))(...e), !0)),
    chrome.tabs.onRemoved.addListener(o(r.proxy(r.close), a.proxy(a.onSessionTabRemoved), l, (...e) => x.deleteDataFromIndexedDB(...e), f)),
    chrome.tabs.onUpdated.addListener(o(L)),
    chrome.storage.managed.onChanged.addListener(o(u)),
    chrome.extension.isAllowedFileSchemeAccess(o(r.proxy(r.setIsAllowedLocalFileAccess))),
    chrome.tabs.onActivated.addListener(o(_, r.proxy(r.active), h)),
    chrome.tabs.onReplaced.addListener(o(r.proxy(r.tabReplace))),
    n.setNcPort(chrome.runtime.connectNative("com.adobe.acrobat.chrome_webcapture")),
    n.ncPort.onMessage.addListener(n.proxy(n.nativeMessageCallback)),
    n.ncPort.onDisconnect.addListener(n.proxy(n.nativeOnDisconnect)),
    chrome.alarms.onAlarm.addListener(o(d));
} catch (e) {
  console.log(e);
}
