!(function (e, n) {
  if ("function" == typeof define && define.amd) define([], n);
  else if ("undefined" != typeof exports) n();
  else {
    n(), (e.unknown = {});
  }
})("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function () {
  try {
    chrome.runtime.sendMessage({ command: "th-inject-frame" });
  } catch (e) {}
});
