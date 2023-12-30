(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [6570],
  {
    50244: function (t, n, o) {
      "use strict";
      o.r(n);
      var e = o(82160),
        i = o(82325),
        r = o(52384),
        c = o(67716),
        u = (o(23381), o(27403)),
        s = { openIcob: jest.fn() };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return s;
          }
        };
      }),
        it("should shallow render the AddTenPassword component without crashing", function () {
          var t = (0, e.Z)([])({ login: { baseUrl: "https://dummy.com" } }),
            n = (0, i.shallow)(
              (0, u.jsx)(
                r.zt,
                { store: t },
                (0, u.jsx)(c.SiteComponent, { site: { displayName: "Dummy", domains: ["dummy.com"], loginURL: "https://dummy.com" } })
              )
            );
          expect(n).toHaveLength(1);
        }),
        it("should mount render the AddTenPassword component without crashing and click one site", function () {
          var t = (0, e.Z)([])({ login: { baseUrl: "https://dummy.com" } }),
            n = (0, i.mount)(
              (0, u.jsx)(
                r.zt,
                { store: t },
                (0, u.jsx)(c.SiteComponent, { site: { displayName: "Dummy", domains: ["dummy.com"], loginURL: "https://dummy.com" } })
              )
            );
          console.log(n.html()), n.find(".site").simulate("click"), expect(s.openIcob).toHaveBeenCalled(), n.unmount();
        }),
        it("should mount render the AddTenPassword component without crashing and render 6 sites", function () {
          var t = (0, e.Z)([])({ login: { baseUrl: "https://dummy.com" } }),
            n = (0, i.mount)(
              (0, u.jsx)(
                r.zt,
                { store: t },
                [
                  { displayName: "Google", domains: ["google.com"], loginURL: "https://dummy.com" },
                  { displayName: "Facebook", domains: ["facebook.com"], loginURL: "https://dummy.com" },
                  { displayName: "LinkedIn", domains: ["linkedin.com"], loginURL: "https://dummy.com" },
                  { displayName: "PayPal", domains: ["paypal.com"], loginURL: "https://dummy.com" },
                  { displayName: "Dropbox", domains: ["dropbox.com"], loginURL: "https://dummy.com" },
                  { displayName: "Netflix", domains: ["netflix.com"], loginURL: "https://dummy.com" }
                ].map(function (t, n) {
                  return (0, u.jsx)(c.SiteComponent, { site: t, key: n });
                })
              )
            );
          expect(n.find(".site-name")).toHaveLength(6), n.unmount();
        });
    },
    55804: function (t) {
      var n,
        o,
        e = Function.prototype,
        i = Object.prototype,
        r = e.toString,
        c = i.hasOwnProperty,
        u = r.call(Object),
        s = i.toString,
        a =
          ((n = Object.getPrototypeOf),
          (o = Object),
          function (t) {
            return n(o(t));
          });
      t.exports = function (t) {
        if (
          !(function (t) {
            return !!t && "object" == typeof t;
          })(t) ||
          "[object Object]" != s.call(t) ||
          (function (t) {
            var n = !1;
            if (null != t && "function" != typeof t.toString)
              try {
                n = !!(t + "");
              } catch (o) {}
            return n;
          })(t)
        )
          return !1;
        var n = a(t);
        if (null === n) return !0;
        var o = c.call(n, "constructor") && n.constructor;
        return "function" == typeof o && o instanceof o && r.call(o) == u;
      };
    },
    82160: function (t, n, o) {
      "use strict";
      n.Z = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function () {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return i.applyMiddleware.apply(
            void 0,
            (function (t) {
              if (Array.isArray(t)) {
                for (var n = 0, o = Array(t.length); n < t.length; n++) o[n] = t[n];
                return o;
              }
              return Array.from(t);
            })(t)
          )(function () {
            var t = [],
              o = [];
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
                for (var e = 0; e < o.length; e++) o[e]();
                return n;
              },
              clearActions: function () {
                t = [];
              },
              subscribe: function (t) {
                return (
                  u(t) && o.push(t),
                  function () {
                    var n = o.indexOf(t);
                    n < 0 || o.splice(n, 1);
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
      var e,
        i = o(43754),
        r = o(55804),
        c = (e = r) && e.__esModule ? e : { default: e };
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
