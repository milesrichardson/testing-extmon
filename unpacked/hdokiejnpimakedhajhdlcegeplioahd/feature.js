Feature = {
  isEnabled: function (e, n, i, t) {
    var a;
    LPServer.lmiapi.jsonRequest({
      url: "lmiapi/feature-switch/is-enabled/" + e + "/" + n,
      type: "GET",
      data: {},
      success: function (e) {
        i(e.enabled);
      },
      error: function (e) {
        "function" == typeof t && t(e);
      }
    });
  }
};
