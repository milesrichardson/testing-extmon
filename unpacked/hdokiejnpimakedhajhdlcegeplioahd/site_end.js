document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    onLoad();
  });
}),
  g_cpwbot &&
    window.addEventListener(
      "unload",
      function () {
        var t = getBG(),
          n,
          n;
        t &&
          void 0 !== t.cpwbot_halt &&
          "FAIL" != (n = g_ischrome ? t.cpwbot_getpwchangestate() : g_cpwbot_pwchangestate) &&
          "CAPTCHA" != n &&
          "DONE" != n &&
          "OK" != n &&
          "TIMEOUT" != n &&
          0 != n &&
          null !== n &&
          t.cpwbot_halt();
      },
      !1
    );
