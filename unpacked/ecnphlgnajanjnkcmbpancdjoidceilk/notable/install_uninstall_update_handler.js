const USER_KEY = "notable.user",
  INSTALL_TIME_KEY = "notable.install_time",
  chromeStorage = chrome.storage && chrome.storage.sync;
function setupAutologin() {
  chromeStorage &&
    chromeStorage.get(USER_KEY, function (e) {
      const t = e[USER_KEY];
      if (t) return localStorage.setItem(USER_KEY, JSON.stringify(t));
    });
}
function onUpdated() {
  console.log("Extension Successfully Updated"), setupAutologin();
}
function onInstall() {
  console.log("Extension Successfully Installed"), localStorage.setItem(INSTALL_TIME_KEY, new Date().getTime()), setupAutologin();
}
if (
  (chrome.runtime.onInstalled.addListener(function () {
    localStorage.getItem(INSTALL_TIME_KEY) ? onUpdated() : onInstall();
  }),
  chrome.runtime.setUninstallURL)
) {
  const e = "https://web.kamihq.com" + "/web/uninstall.html";
  chrome.runtime.setUninstallURL(e),
    chromeStorage &&
      (chromeStorage.get(USER_KEY, (t) => {
        const n = t[USER_KEY] && t[USER_KEY].id,
          o = t[USER_KEY] && t[USER_KEY].id;
        n && chrome.runtime.setUninstallURL(`${e}?user_id=${n}&email=${o}`);
      }),
      chrome.storage.onChanged.addListener((t) => {
        if (t[USER_KEY].newValue) {
          const n = t[USER_KEY].newValue.id,
            { email: o } = t[USER_KEY].newValue;
          n && chrome.runtime.setUninstallURL(`${e}?user_id=${n}&email=${o}`);
        }
      }));
}
