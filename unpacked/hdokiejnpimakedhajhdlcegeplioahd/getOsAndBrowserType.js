var getOsType = function () {
    return -1 != navigator.appVersion.indexOf("Win")
      ? "Windows OS"
      : -1 != navigator.appVersion.indexOf("Mac")
      ? "MacOS"
      : -1 != navigator.appVersion.indexOf("X11")
      ? "UNIX OS"
      : -1 != navigator.appVersion.indexOf("Linux")
      ? "Linux OS"
      : "Unknown OS";
  },
  getBrowserType = function () {
    return (window.opr && opr.addons) || window.opera || 0 <= navigator.userAgent.indexOf(" OPR/")
      ? "Opera"
      : "undefined" == typeof chrome ||
        (void 0 === chrome.runtime && void 0 === chrome.extension) ||
        -1 == navigator.userAgent.indexOf(" Edge/")
      ? "undefined" == typeof chrome || (void 0 === chrome.runtime && void 0 === chrome.extension)
        ? "undefined" != typeof InstallTrigger
          ? "Firefox"
          : /constructor/i.test(window.HTMLElement) ||
            "[object SafariRemoteNotification]" ===
              (!window.safari || ("undefined" != typeof safari && window.safari.pushNotification)).toString()
          ? "Safari"
          : "Unknown Browser"
        : "Chrome"
      : "Edge";
  };
