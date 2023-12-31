var USER_KEY = "notable.user",
  AUTO_LOGIN_KEY = "notable.autologin",
  storage = chrome.storage;
if (null != storage) {
  var localUser = localStorage.getItem(USER_KEY);
  null == localUser
    ? "true" !== localStorage.getItem(AUTO_LOGIN_KEY) &&
      storage.sync.get(USER_KEY, function (e) {
        var t = e[USER_KEY];
        if (null != t) {
          var a = JSON.stringify(t);
          localStorage.setItem(USER_KEY, a), localStorage.setItem(AUTO_LOGIN_KEY, "true");
        }
      })
    : localStorage.setItem(AUTO_LOGIN_KEY, "true");
}
