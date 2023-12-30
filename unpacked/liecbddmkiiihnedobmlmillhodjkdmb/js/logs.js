!(function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = new Error().stack;
    n && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[n] = "d5dd72ae-0e6e-59fc-af32-7f0e1cfaf7b7"));
  } catch (e) {}
})();
(() => {
  "use strict";
  var e = ((e) => (
    (e.extensionIconClicked = "extensionIconClicked"),
    (e.endRecording = "endRecording"),
    (e.pauseRecording = "pauseRecording"),
    (e.resumeRecording = "resumeRecording"),
    (e.cancelRecording = "cancelRecording"),
    (e.restartRecording = "restartRecording"),
    (e.rewindRecording = "rewindRecording"),
    (e.isAlive = "isAlive"),
    (e.openPinnedTab = "openPinnedTab"),
    (e.focusRecordingTab = "focusRecordingTab"),
    (e.focusPinnedTab = "focusPinnedTab"),
    (e.requestTabId = "requestTabId"),
    (e.getRecordingTabInfo = "getRecordingTabInfo"),
    (e.updateRecorderSettings = "updateRecorderSettings"),
    (e.pingContentScript = "pingContentScript"),
    (e.pingToastMsgScript = "pingToastMsgScript"),
    (e.activateRecorder = "activateRecorder"),
    (e.trackEvent = "trackEvent"),
    (e.logCrumb = "logCrumb"),
    (e.logException = "logException"),
    (e.logInfo = "logInfo"),
    (e.logWarn = "logWarn"),
    (e.fetchFeatureFlag = "fetchFeatureFlag"),
    (e.checkUploadSpeed = "checkUploadSpeed"),
    (e.fetchNotifications = "fetchNotifications"),
    (e.openNotification = "openNotification"),
    (e.setExtensionBadgeCount = "setExtensionBadgeCount"),
    (e.updateBlurFTUXUserProperty = "updateBlurFTUXUserProperty"),
    (e.canvasOptionClicked = "canvasOptionClicked"),
    (e.addToBaseContext = "addToBaseContext"),
    (e.allowGmailIntegrationPermission = "allowGmailIntegrationPermission"),
    (e.denyGmailIntegrationPermission = "denyGmailIntegrationPermission"),
    (e.allowGmailLinkExpanding = "allowGmailLinkExpanding"),
    (e.denyGmailLinkExpanding = "denyGmailLinkExpanding"),
    (e.insertSession = "insertSession"),
    (e.requestSessionURL = "requestSessionURL"),
    (e.cancelRequestSessionURL = "cancelRequestSessionURL"),
    (e.fetchMyVideosSessions = "fetchMyVideosSessions"),
    (e.updateNameToSession = "updateNameToSession"),
    (e.getSessionDetails = "getSessionDetails"),
    (e.fetchMostRecentSession = "fetchMostRecentSession"),
    (e.requestThumbExists = "requestThumbExists"),
    (e.initiateLoomRecorderFromInsertButton = "initiateLoomRecorderFromInsertButton"),
    (e.fetchLogState = "fetchLogState"),
    e
  ))(e || {});
  (async () => {
    const n = await chrome.runtime.sendMessage({ type: e.fetchLogState }),
      t = document.createElement("pre");
    (t.textContent = JSON.stringify(n, null, 2)),
      document.body.appendChild(t),
      (function (e) {
        const n = document.createElement("a");
        (n.href = window.URL.createObjectURL(new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }))),
          (n.download = "loom-logs.txt"),
          document.body.appendChild(n),
          n.click();
      })(n);
  })();
})();
//# sourceMappingURL=logs.js.map
//# debugId=d5dd72ae-0e6e-59fc-af32-7f0e1cfaf7b7
