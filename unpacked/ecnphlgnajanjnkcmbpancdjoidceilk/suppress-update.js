"use strict";
chrome.runtime.onUpdateAvailable.addListener(function () {
  0 === chrome.extension.getViews({ type: "tab" }).length && chrome.runtime.reload();
});
