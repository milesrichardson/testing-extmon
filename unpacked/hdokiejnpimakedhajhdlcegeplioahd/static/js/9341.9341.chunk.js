"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [9341],
  {
    39341: function (e, n, t) {
      t.r(n),
        t.d(n, {
          calculatePasswordStrength: function () {
            return o;
          }
        });
      var r = t(46999),
        a = t(37755),
        s = t(18950),
        i = t(74017),
        u = t(11963),
        c = t.n(u),
        d = (function () {
          var e = (0, s.Z)(
            (0, r.Z)().mark(function e() {
              var n, s, i, u, c, d, o, l;
              return (0, r.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.e(7228).then(t.bind(t, 90314));
                    case 2:
                      return (n = e.sent), (e.next = 5), t.e(8095).then(t.bind(t, 78093));
                    case 5:
                      return (s = e.sent), (e.next = 8), t.e(1899).then(t.bind(t, 98632));
                    case 8:
                      return (i = e.sent), (e.next = 11), t.e(5071).then(t.bind(t, 9895));
                    case 11:
                      return (u = e.sent), (e.next = 14), t.e(8381).then(t.bind(t, 58581));
                    case 14:
                      return (c = e.sent), (e.next = 17), t.e(9889).then(t.bind(t, 1982));
                    case 17:
                      return (d = e.sent), (e.next = 20), t.e(2508).then(t.bind(t, 12972));
                    case 20:
                      return (o = e.sent), (e.next = 23), t.e(4393).then(t.bind(t, 5873));
                    case 23:
                      return (
                        (l = e.sent),
                        e.abrupt("return", {
                          dictionary: (0, a.Z)(
                            (0, a.Z)(
                              (0, a.Z)(
                                (0, a.Z)(
                                  (0, a.Z)(
                                    (0, a.Z)((0, a.Z)((0, a.Z)({}, n.default.dictionary), s.default.dictionary), i.default.dictionary),
                                    u.default.dictionary
                                  ),
                                  c.default.dictionary
                                ),
                                d.default.dictionary
                              ),
                              o.default.dictionary
                            ),
                            l.default.dictionary
                          ),
                          graphs: n.default.adjacencyGraphs,
                          translations: s.default.translations
                        })
                      );
                    case 25:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        o = function (e) {
          var n = e.password,
            t = e.username,
            r = void 0 === t ? "" : t,
            s = e.passwordStrengthHardeningEnabled,
            u = e.useLevenshteinDistance,
            o = void 0 !== u && u,
            l = n ? n.substring(0, 50).replace(/\s/g, "") : "",
            f = r ? r.substring(0, 50).toLowerCase() : "";
          return s
            ? (d().then(function (e) {
                i.Mu.setOptions((0, a.Z)((0, a.Z)({}, e), {}, { useLevenshteinDistance: o }));
              }),
              25 * (0, i.tu)(l, [f, "lastpass", "lastpass.com"]).score)
            : 25 * c()(l, [f, "lastpass", "lastpass.com"]).score;
        };
    }
  }
]);
