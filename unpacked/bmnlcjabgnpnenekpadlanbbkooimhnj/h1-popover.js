!(function (e) {
  function t(t) {
    for (var r, o, f = t[0], l = t[1], d = t[2], c = 0, s = []; c < f.length; c++)
      (o = f[c]), Object.prototype.hasOwnProperty.call(u, o) && u[o] && s.push(u[o][0]), (u[o] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (i && i(t); s.length; ) s.shift()();
    return a.push.apply(a, d || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, f = 1; f < n.length; f++) {
        var l = n[f];
        0 !== u[l] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    u = { 5: 0 },
    a = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "");
  var f = (window.webpackJsonp = window.webpackJsonp || []),
    l = f.push.bind(f);
  (f.push = t), (f = f.slice());
  for (var d = 0; d < f.length; d++) t(f[d]);
  var i = l;
  a.push([3193, 0, 1]), n();
})({
  3193: function (e, t, n) {
    n(727), (e.exports = n(3194));
  },
  3194: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n(1585),
      n(1633),
      n(1638),
      n(1641),
      n(1642),
      n(1648),
      n(1653),
      n(1654),
      n(1656),
      n(1658),
      n(1659),
      n(1660),
      n(1662),
      n(1663),
      n(1665),
      n(1666),
      n(1668),
      n(1669),
      n(135);
    var r = J(n(25)),
      u = J(n(8)),
      a = J(n(22)),
      o = J(n(1437)),
      f = J(n(1539)),
      l = J(n(425)),
      d = J(n(261)),
      i = J(n(1949)),
      c = J(n(679)),
      s = J(n(65)),
      p = J(n(1515)),
      v = J(n(15)),
      b = J(n(12)),
      h = J(n(728)),
      y = J(n(212)),
      g = J(n(1540)),
      w = J(n(236)),
      m = J(n(1952)),
      x = J(n(152)),
      j = J(n(70)),
      O = J(n(1954)),
      P = J(n(13)),
      _ = J(n(173)),
      k = J(n(19)),
      M = J(n(37)),
      S = J(n(27)),
      R = J(n(24)),
      C = J(n(327)),
      T = J(n(1566)),
      D = J(n(426)),
      I = J(n(1975));
    function J(e) {
      return e && e.__esModule ? e : { default: e };
    }
    r.default.onPossiblyUnhandledRejection(function (e) {
      return v.default.error(e);
    }),
      v.default.debug("Honey 16.3.4 popover script is ready. Environment is production"),
      S.default.open({ pathname: "/", feature: "popover", surface: "popover" });
    var L,
      B,
      E = {
        $: u.default,
        adbBp: D.default,
        acorns: o.default,
        ajax: f.default,
        button: l.default,
        clipboard: d.default,
        config: i.default,
        cookies: c.default,
        device: s.default,
        extensionReview: p.default,
        logger: v.default,
        messages: b.default,
        offers: y.default,
        optimus: g.default,
        pageDetector: x.default,
        popover: w.default,
        productFetcher: m.default,
        savingsController: j.default,
        seleniumComm: O.default,
        stats: P.default,
        storage: _.default,
        stores: k.default,
        tabs: M.default,
        ui: S.default,
        user: R.default,
        util: a.default,
        websiteComm: C.default,
        yelp: T.default,
        search: I.default
      };
    (b.default.send =
      ((L = regeneratorRuntime.mark(function e(t, n, u) {
        return regeneratorRuntime.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!M.default.inPopover()) {
                    e.next = 5;
                    break;
                  }
                  return n && !n.data && (n.data = {}), (e.next = 4), w.default.getTabId();
                case 4:
                  n.data.tabId = e.sent;
                case 5:
                  return e.abrupt(
                    "return",
                    r.default
                      .try(function () {
                        return h.default.send(b.default.cleanStringLower(t), n, u);
                      })
                      .timeout(6e4)
                      .catch(function (e) {
                        if (!u || !u.ignoreResponse) throw e;
                      })
                  );
                case 6:
                case "end":
                  return e.stop();
              }
          },
          e,
          this
        );
      })),
      (B = function () {
        var e = L.apply(this, arguments);
        return new r.default(function (t, n) {
          return (function u(a, o) {
            try {
              var f = e[a](o),
                l = f.value;
            } catch (e) {
              return void n(e);
            }
            if (!f.done)
              return r.default.resolve(l).then(
                function (e) {
                  u("next", e);
                },
                function (e) {
                  u("throw", e);
                }
              );
            t(l);
          })("next");
        });
      }),
      function (e, t, n) {
        return B.apply(this, arguments);
      })),
      w.default.sendClickData(),
      b.default.addListener("debug:change", function (e, t) {
        try {
          t.active ? (window.honey = E) : delete window.honey;
        } catch (e) {}
      }),
      (t.default = E);
  }
});
