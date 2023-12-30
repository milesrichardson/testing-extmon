"use strict";
function openInKami(e) {
  if (!e.linkUrl) return;
  const t = new URL(e.linkUrl);
  t.searchParams.set("referer", e.pageUrl);
  const n = e.pageUrl.match(/\/c\/.*?\/a\/.*?\//)?.[0];
  n && t.searchParams.set("courseworkAlternateLink", n);
  const o = t.toString() + "&(open_with_kami)";
  chrome.tabs.create({ url: o });
}
function inSchoology(e) {
  return new URL(e).hostname.endsWith(".schoology.com");
}
function createMenuItem() {
  return chrome.contextMenus.create({ title: "Open with Kami", contexts: ["link"], onclick: openInKami });
}
let menuItemId = createMenuItem();
function createOrRemoveContextMenuItem(e) {
  inSchoology(e)
    ? menuItemId && (chrome.contextMenus.remove(menuItemId), (menuItemId = void 0))
    : menuItemId || (menuItemId = createMenuItem());
}
chrome.webRequest.onCompleted.addListener(
  function (e) {
    chrome.tabs.query({ active: !0, windowType: "normal", currentWindow: !0 }, (t) => {
      const n = t[0];
      n?.id === e.tabId && n.url && createOrRemoveContextMenuItem(n.url);
    });
  },
  { urls: ["<all_urls>"], types: ["main_frame"] }
),
  chrome.tabs.onActivated.addListener((e) => {
    chrome.tabs.get(e.tabId, (e) => {
      const t = e.url;
      t && createOrRemoveContextMenuItem(t);
    });
  }),
  chrome.windows.onFocusChanged.addListener((e) => {
    chrome.tabs.query({ active: !0, windowType: "normal", currentWindow: !0, windowId: e }, (e) => {
      const t = e[0]?.url;
      t && createOrRemoveContextMenuItem(t);
    });
  });
