var apiGateway = apiGateway || {};
(apiGateway.core = apiGateway.core || {}),
  (apiGateway.core.utils = {
    assertDefined: function (r, e) {
      if (void 0 === r) throw e + " must be defined";
      return r;
    },
    assertParametersDefined: function (r, e, t) {
      if (void 0 !== e) {
        e.length > 0 && void 0 === r && (r = {});
        for (var n = 0; n < e.length; n++) apiGateway.core.utils.contains(t, e[n]) || apiGateway.core.utils.assertDefined(r[e[n]], e[n]);
      }
    },
    parseParametersToObject: function (r, e) {
      if (void 0 === r) return {};
      for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = r[e[n]];
      return t;
    },
    contains: function (r, e) {
      if (void 0 === r) return !1;
      for (var t = r.length; t--; ) if (r[t] === e) return !0;
      return !1;
    },
    copy: function (r) {
      if (null == r || "object" != typeof r) return r;
      var e = r.constructor();
      for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
      return e;
    },
    mergeInto: function (r, e) {
      if (null == r || "object" != typeof r) return r;
      var t = r.constructor();
      for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n]);
      if (null == e || "object" != typeof e) return r;
      for (n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      return t;
    }
  });
