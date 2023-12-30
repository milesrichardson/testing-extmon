"use strict";
function attachAppsButtonObserver() {
  new MutationObserver((e) => {
    for (const t of e)
      for (const e of t.addedNodes) {
        if (e.nodeType !== Node.ELEMENT_NODE) continue;
        const t = e;
        if ("MAIN" !== t.tagName) continue;
        const o = "button[data-test='more-resource']";
        if (t.querySelector(o))
          return void trackEvent("Microsoft Teams Assignments: Apps Button Found", { current_page_url: window.location.href });
      }
  }).observe(document.body, { childList: !0, subtree: !0 });
}
attachAppsButtonObserver();
const sessionId = crypto.randomUUID();
let kamiUserId;
async function trackEvent(e, t = {}) {
  const o = { uuid: crypto.randomUUID(), name: e, value: { ...t, app_name: "microsoft_teams", session_id: sessionId } };
  kamiUserId && (o.user_id = kamiUserId),
    await fetch("https://web.kamihq.com/api" + "/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(o)
    });
}
function getKamiUserIdFromExtensionStorage() {
  chrome.storage.sync.get(["notable.user"], (e) => {
    const t = e["notable.user"].id;
    "number" == typeof t && (kamiUserId = t);
  });
}
getKamiUserIdFromExtensionStorage();
