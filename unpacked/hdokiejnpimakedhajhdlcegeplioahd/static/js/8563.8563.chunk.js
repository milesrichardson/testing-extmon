(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [8563],
  {
    46671: function (e, t, n) {
      "use strict";
      n.r(t);
      n(23381);
      var o = n(82325),
        r = n(2377),
        c = n(95840),
        i = n(82160),
        l = n(52384),
        u = n(11970),
        a = n(27403),
        s = { id: 0, type: "SetUpEmergencyAccess", visible: !0, completed: null, seenAt: null, color: r.a.GREY },
        f = {
          hideExpandedSkillInDrawer: jest.fn(),
          hideSkillDetailsDialog: jest.fn(),
          toggleShowAllSkills: jest.fn(),
          openSetupEmergencyAccess: jest.fn()
        };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return f;
          }
        };
      }),
        it("should shallow render the SetUpEmergencyAccess component without crashing", function () {
          var e = (0, i.Z)([])({ login: { baseUrl: "https://dummy.com" } }),
            t = (0, o.shallow)((0, a.jsx)(l.zt, { store: e }, (0, a.jsx)(c.default, { skill: s, expanded: !0, fromAllSkillsDialog: !1 })));
          expect(t).toHaveLength(1);
        }),
        it("should mount render the SetUpEmergencyAccess fromAllSkillsDialog=false component without crashing and click the CTA", function () {
          var e = (0, i.Z)([])({ login: { baseUrl: "https://dummy.com" }, user: { type: u.F.ENTERPRISE_TRIAL } }),
            t = (0, o.mount)((0, a.jsx)(l.zt, { store: e }, (0, a.jsx)(c.default, { skill: s, expanded: !0, fromAllSkillsDialog: !1 })));
          t.find(".action-cta").at(1).simulate("click"),
            expect(f.openSetupEmergencyAccess).toHaveBeenCalled(),
            expect(f.hideExpandedSkillInDrawer).toHaveBeenCalled(),
            t.unmount();
        }),
        it("should mount render the SetUpEmergencyAccess fromAllSkillsDialog=true component without crashing and click the CTA", function () {
          var e = (0, i.Z)([])({ login: { baseUrl: "https://dummy.com" }, user: { type: u.F.ENTERPRISE_TRIAL } }),
            t = (0, o.mount)((0, a.jsx)(l.zt, { store: e }, (0, a.jsx)(c.default, { skill: s, expanded: !0, fromAllSkillsDialog: !0 })));
          console.log(t.html()),
            t.find(".action-cta").at(1).simulate("click"),
            expect(f.openSetupEmergencyAccess).toHaveBeenCalled(),
            expect(f.hideSkillDetailsDialog).toHaveBeenCalled(),
            t.unmount();
        });
    },
    55804: function (e) {
      var t,
        n,
        o = Function.prototype,
        r = Object.prototype,
        c = o.toString,
        i = r.hasOwnProperty,
        l = c.call(Object),
        u = r.toString,
        a =
          ((t = Object.getPrototypeOf),
          (n = Object),
          function (e) {
            return t(n(e));
          });
      e.exports = function (e) {
        if (
          !(function (e) {
            return !!e && "object" == typeof e;
          })(e) ||
          "[object Object]" != u.call(e) ||
          (function (e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
              try {
                t = !!(e + "");
              } catch (n) {}
            return t;
          })(e)
        )
          return !1;
        var t = a(e);
        if (null === t) return !0;
        var n = i.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && c.call(n) == l;
      };
    },
    82160: function (e, t, n) {
      "use strict";
      t.Z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return r.applyMiddleware.apply(
            void 0,
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
              }
              return Array.from(e);
            })(e)
          )(function () {
            var e = [],
              n = [];
            return {
              getState: function () {
                return l(t) ? t(e) : t;
              },
              getActions: function () {
                return e;
              },
              dispatch: function (t) {
                if (!(0, i.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if ("undefined" === typeof t.type)
                  throw new Error(
                    'Actions may not have an undefined "type" property. Have you misspelled a constant? Action: ' + JSON.stringify(t)
                  );
                e.push(t);
                for (var o = 0; o < n.length; o++) n[o]();
                return t;
              },
              clearActions: function () {
                e = [];
              },
              subscribe: function (e) {
                return (
                  l(e) && n.push(e),
                  function () {
                    var t = n.indexOf(e);
                    t < 0 || n.splice(t, 1);
                  }
                );
              },
              replaceReducer: function (e) {
                if (!l(e)) throw new Error("Expected the nextReducer to be a function.");
              }
            };
          })();
        };
      };
      var o,
        r = n(43754),
        c = n(55804),
        i = (o = c) && o.__esModule ? o : { default: o };
      var l = function (e) {
        return "function" === typeof e;
      };
    },
    32668: function () {},
    45503: function () {},
    14013: function () {},
    98673: function () {}
  }
]);
