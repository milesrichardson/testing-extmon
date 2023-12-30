var proxyLegacyGlobals = (function () {
  function d(e) {
    try {
      e();
    } catch (e) {
      console.log(e);
    }
  }
  function c(t, u, o) {
    var i = null;
    return new Proxy(u, {
      set: function (e, r, n) {
        return (
          i ||
            ((i = {}),
            setTimeout(function () {
              d(function () {
                o(t, i);
              }),
                (i = null);
            })),
          (e[r] = n),
          (i[r] = n),
          i && i.group && p(u) && o(t, e),
          !0
        );
      }
    });
  }
  function e(e, t, u, o, r) {
    var i = function (e) {
        return e && e[o] && (!r || r(e));
      },
      p = {};
    return new Proxy(e, {
      set: function (e, r, n) {
        return (
          (e[r] = n),
          delete p[r],
          i(n) &&
            d(function () {
              t(n[o], n);
            }),
          !0
        );
      },
      deleteProperty: function (e, r) {
        var n = e[r],
          t;
        return (
          i(n) &&
            d(function () {
              u(n[o], n);
            }),
          delete e[r]
        );
      },
      get: function (e, r) {
        var n = e[r];
        return (i(n) ? (p[r] || (p[r] = c(n[o], n, t)), p) : e)[r];
      }
    });
  }
  function r(e, n, o, i) {
    return new Proxy(e, {
      get: function (t, e) {
        var u, u;
        return "push" === e
          ? ((u = t[e]),
            function () {
              u.apply(t, arguments);
              for (var e = 0; e < arguments.length; ++e) {
                var r = arguments[e];
                n(r[i], r);
              }
            })
          : "splice" === e
          ? ((u = t[e]),
            function () {
              for (var e = u.apply(t, arguments), r = 0; r < e.length; ++r) {
                var n = e[r];
                o(n[i], n);
              }
            })
          : t[e];
      }
    });
  }
  var p = function (e) {
      return "http://group" === e.url;
    },
    n = function (e, r) {
      p(r) ? reduxApp.writeGroup(e, r) : reduxApp.writeSite(e, r);
    },
    t = function (e, r) {
      p(r) ? reduxApp.removeGroup(e, r) : reduxApp.removeSite(e, r);
    };
  return function () {
    "undefined" != typeof Proxy &&
      reduxApp &&
      ((g_sites = e(g_sites, n, t, "aid")),
      reduxApp.writeDataRecord && (g_securenotes = e(g_securenotes, reduxApp.writeDataRecord, reduxApp.removeDataRecord, "aid")),
      (g_shares = e(g_shares, reduxApp.writeSharedFolder, reduxApp.removeSharedFolder, "id")),
      (g_pendings = r(g_pendings, reduxApp.writePendingReceivedShared, reduxApp.removePendingReceivedShared, "id")));
  };
})();
