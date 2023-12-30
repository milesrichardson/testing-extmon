var STORAGE_SNAPCHAT_EXPIRES_IN = "snapchat.expiresIn";
var ALARM_SNAPCHAT_REFRESH_TOKEN = "alarm_snapchat_refresh_token";
var REFRESH_REQUEST_NO_CONNECTION = "errorNoConnection";

const onClosePress = () => {
  window.parent && window.parent.postMessage({ webPickerAction: "close" }, "*");
};

chrome.storage.local.get(STORAGE_SNAPCHAT_EXPIRES_IN, function (items) {
  // Parse the shareMode from query params `context={mode}`
  const contextMatch = window.location.search.match(/context=([^&=]+)/);
  const shareMode = (contextMatch && contextMatch[1]) || "DEFAULT";
  // If the window is an embedded iframe, it is closeable
  // Note: in the popup, the parent window is itself
  const closable = !!window.parent && window.parent != window;

  // make sure snapchat login is not expired on open
  var currentTime = Date.now();
  if (items[STORAGE_SNAPCHAT_EXPIRES_IN] && currentTime > items[STORAGE_SNAPCHAT_EXPIRES_IN]) {
    chrome.runtime.sendMessage({ signal: ALARM_SNAPCHAT_REFRESH_TOKEN }, function (response) {
      if (response.signal !== REFRESH_REQUEST_NO_CONNECTION) {
        ChromeExtensionShow({
          shareMode: shareMode,
          enableLogout: true,
          closableCallback: closable ? onClosePress : null
        });
      }
    });
  } else {
    ChromeExtensionShow({
      shareMode: shareMode,
      enableLogout: true,
      closableCallback: closable ? onClosePress : null
    });
  }
});

// Clear Chrome Storage for debugging
window.clearChromeStorage = function () {
  chrome.storage.local.clear();
  location.reload();
};

window.addEventListener(
  "unload",
  function () {
    BitmojiWebPicker.unmountBitmojiWebPicker("bitmoji_chrome_extension_container");
  },
  true
);
