var GenPassHistory = (function () {
  "use strict";
  var e = [],
    n = 20;
  function t(t) {
    e.unshift({ password: t, date: new Date(Date.now()) }), e.length > n && e.splice(n, e.length - 20);
  }
  function a() {
    e = [];
  }
  function r(t) {
    t &&
      t(
        e.map(function (t) {
          return t.password;
        })
      );
  }
  function i(t) {
    t && t(e);
  }
  function o(t) {
    t &&
      t(
        e.map(function (t) {
          return { password: t.password, date: u(t.date) };
        })
      );
  }
  function u(t) {
    "number" == typeof t && (t = new Date(t));
    var e = g_language || "en-US";
    return t.toLocaleString(e.replace("_", "-"), {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return { add: t, clear: a, getWithDate: i, getWithReadableDate: o, getWithoutDate: r };
})();
