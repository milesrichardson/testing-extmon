(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [6499],
  {
    23367: function (t, n, e) {
      "use strict";
      e.r(n);
      e(23381);
      var r = e(82325),
        o = e(75692),
        i = e(52384),
        c = e(82160),
        u = e(2377),
        l = e(11970),
        a = e(27403),
        f = { id: 0, type: "InstallBrowserExtension", visible: !0, completed: null, seenAt: null, color: u.a.GREY },
        s = (0, c.Z)([]);
      it("should shallow render the InstallBrowserExtension component without crashing", function () {
        var t = s({ login: { baseUrl: "https://dummy.com" }, user: { type: l.F.ENTERPRISE_TRIAL } }),
          n = (0, r.mount)((0, a.jsx)(i.zt, { store: t }, (0, a.jsx)(o.default, { skill: f, expanded: !0, fromAllSkillsDialog: !1 })));
        expect(n).toHaveLength(1);
      });
    },
    55804: function (t) {
      var n,
        e,
        r = Function.prototype,
        o = Object.prototype,
        i = r.toString,
        c = o.hasOwnProperty,
        u = i.call(Object),
        l = o.toString,
        a =
          ((n = Object.getPrototypeOf),
          (e = Object),
          function (t) {
            return n(e(t));
          });
      t.exports = function (t) {
        if (
          !(function (t) {
            return !!t && "object" == typeof t;
          })(t) ||
          "[object Object]" != l.call(t) ||
          (function (t) {
            var n = !1;
            if (null != t && "function" != typeof t.toString)
              try {
                n = !!(t + "");
              } catch (e) {}
            return n;
          })(t)
        )
          return !1;
        var n = a(t);
        if (null === n) return !0;
        var e = c.call(n, "constructor") && n.constructor;
        return "function" == typeof e && e instanceof e && i.call(e) == u;
      };
    },
    82160: function (t, n, e) {
      "use strict";
      n.Z = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function () {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return o.applyMiddleware.apply(
            void 0,
            (function (t) {
              if (Array.isArray(t)) {
                for (var n = 0, e = Array(t.length); n < t.length; n++) e[n] = t[n];
                return e;
              }
              return Array.from(t);
            })(t)
          )(function () {
            var t = [],
              e = [];
            return {
              getState: function () {
                return u(n) ? n(t) : n;
              },
              getActions: function () {
                return t;
              },
              dispatch: function (n) {
                if (!(0, c.default)(n)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if ("undefined" === typeof n.type)
                  throw new Error(
                    'Actions may not have an undefined "type" property. Have you misspelled a constant? Action: ' + JSON.stringify(n)
                  );
                t.push(n);
                for (var r = 0; r < e.length; r++) e[r]();
                return n;
              },
              clearActions: function () {
                t = [];
              },
              subscribe: function (t) {
                return (
                  u(t) && e.push(t),
                  function () {
                    var n = e.indexOf(t);
                    n < 0 || e.splice(n, 1);
                  }
                );
              },
              replaceReducer: function (t) {
                if (!u(t)) throw new Error("Expected the nextReducer to be a function.");
              }
            };
          })();
        };
      };
      var r,
        o = e(43754),
        i = e(55804),
        c = (r = i) && r.__esModule ? r : { default: r };
      var u = function (t) {
        return "function" === typeof t;
      };
    },
    32668: function () {},
    45503: function () {},
    14013: function () {},
    98673: function () {}
  }
]);
