function onNativeMessage(message) {
  NMObject.onNativeMessage(message);
}

port.onMessage.addListener(onNativeMessage);

NMObject.initialize();

chrome.webRequest.onCompleted.addListener(onCompleted, { urls: ["http://*/*", "https://*/*"], types: ["main_frame", "sub_frame"] });
chrome.windows.getAll({ populate: true }, checkURLsInExistingWindows);

if (chrome.downloads && chrome.downloads.onChanged) {
  chrome.downloads.onChanged.addListener(onDownloadChanged);
}
