!(function (e, n) {
  if ("function" == typeof define && define.amd) define([], n);
  else if ("undefined" != typeof exports) n();
  else {
    n(), (e.unknown = {});
  }
})("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function () {
  ["teams.microsoft.com"].includes(window.location.hostname) &&
    window.trustedTypes &&
    ((window.refTrustedTypes = window.trustedTypes), delete window.trustedTypes);
});
