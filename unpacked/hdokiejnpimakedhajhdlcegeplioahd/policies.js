var Policies = (function () {
  return {
    logNameEnabled: e,
    logUserNameEnabled: n,
    logUrlEnabled: r,
    getSaveSiteToPersonal: t,
    getAccountSelectionBasedOnEmail: g,
    showSecureNotes: i
  };
  function o(e) {
    var o,
      o = g_prefoverrides,
      o = "showcredmon" === e ? bg.get("g_showcredmon") : o && o[e];
    return (o = "boolean" == typeof o ? (o ? "1" : "0") : o);
  }
  function e() {
    return g_loglogins && 4 == (4 & g_loglogins);
  }
  function n() {
    return g_loglogins && 8 == (8 & g_loglogins);
  }
  function r() {
    return g_loglogins && 2 == (2 & g_loglogins);
  }
  function t() {
    return o("savesitestopersonal");
  }
  function g(e) {
    return "function" == typeof e && e("1" === o("accountselectionbasedonemail")), "1" === o("accountselectionbasedonemail");
  }
  function i() {
    return void 0 === g_prefoverrides.show_notes || !!Number(g_prefoverrides.show_notes);
  }
})();
