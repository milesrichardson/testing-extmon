!(function i(t, r, a) {
  function p(o, s) {
    if (!r[o]) {
      if (!t[o]) {
        var n = "function" == typeof require && require;
        if (!s && n) return n(o, !0);
        if (e) return e(o, !0);
        var l = new Error("Cannot find module '" + o + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      var c = (r[o] = { exports: {} });
      t[o][0].call(
        c.exports,
        function (i) {
          return p(t[o][1][i] || i);
        },
        c,
        c.exports,
        i,
        t,
        r,
        a
      );
    }
    return r[o].exports;
  }
  for (var e = "function" == typeof require && require, o = 0; o < a.length; o++) p(a[o]);
  return p;
})(
  {
    1: [
      function (i, t, r) {
        "use strict";
        (self.window = self), (window.matchMedia = () => {});
        try {
          importScripts("apiGateway/lib/axios/dist/axios.polyfill.js"),
            importScripts("apiGateway/lib/CryptoJS/rollups/hmac-sha256.js"),
            importScripts("apiGateway/lib/CryptoJS/rollups/sha256.js"),
            importScripts("apiGateway/lib/CryptoJS/components/hmac.js"),
            importScripts("apiGateway/lib/CryptoJS/components/enc-base64.js"),
            importScripts("apiGateway/lib/url-template/url-template.js"),
            importScripts("apiGateway/lib/apiGatewayCore/sigV4Client.js"),
            importScripts("apiGateway/lib/apiGatewayCore/apiGatewayClient.js"),
            importScripts("apiGateway/lib/apiGatewayCore/simpleHttpClient.js"),
            importScripts("apiGateway/lib/apiGatewayCore/utils.js"),
            importScripts("apiGateway/apigClient.js"),
            importScripts("i18n/strings.js"),
            importScripts("vendor/libs.common.js"),
            importScripts("vendor/libs.bg.js"),
            importScripts("background.js");
        } catch (i) {
          console.log(i);
        }
      },
      {}
    ]
  },
  {},
  [1]
);
