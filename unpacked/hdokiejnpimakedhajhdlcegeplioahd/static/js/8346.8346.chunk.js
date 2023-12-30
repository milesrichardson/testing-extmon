(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [8346],
  {
    37226: function (e, t, n) {
      "use strict";
      n.r(t);
      n(23381);
      var o = n(82160),
        r = n(82325),
        i = n(2377),
        l = n(83594),
        a = n(11970),
        c = n(52384),
        u = n(27403),
        s = { id: 0, type: "MonitorYourDigitalSecurity", visible: !0, completed: null, seenAt: null, color: i.a.BLUE },
        f = {
          complete: jest.fn(),
          hideExpandedSkillInDrawer: jest.fn(),
          toggleShowAllSkills: jest.fn(),
          hideSkillDetailsDialog: jest.fn(),
          openSecurityDashboard: jest.fn()
        };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return f;
          }
        };
      });
      var d = (0, o.Z)([])({ secondaryOnboarding: { isHowToOpen: !1 }, user: { type: a.F.ENTERPRISE_TRIAL } });
      it("should shallow render the MonitorYourDigitalSecurity ad component without crashing", function () {
        var e = (0, r.shallow)((0, u.jsx)(c.zt, { store: d }, (0, u.jsx)(l.default, { skill: s, expanded: !0, fromAllSkillsDialog: !1 })));
        expect(e).toHaveLength(1);
      }),
        it("should open the security dashboard and be completed when the MonitorYourDigitalSecurity button is clicked", function () {
          var e = (0, r.mount)((0, u.jsx)(c.zt, { store: d }, (0, u.jsx)(l.default, { skill: s, expanded: !0, fromAllSkillsDialog: !1 })));
          e.find(".action-cta").at(1).simulate("click"),
            e.unmount(),
            expect(f.openSecurityDashboard).toHaveBeenCalled(),
            expect(f.complete).toHaveBeenCalled(),
            expect(f.hideExpandedSkillInDrawer).toHaveBeenCalled();
        }),
        it("should be closed when the MonitorYourDigitalSecurity button is clicked from all skills", function () {
          var e = (0, r.mount)((0, u.jsx)(c.zt, { store: d }, (0, u.jsx)(l.default, { skill: s, expanded: !0, fromAllSkillsDialog: !0 })));
          e.find(".action-cta").at(1).simulate("click"),
            e.unmount(),
            expect(f.openSecurityDashboard).toHaveBeenCalled(),
            expect(f.hideSkillDetailsDialog).toHaveBeenCalled(),
            expect(f.toggleShowAllSkills).toHaveBeenCalled();
        });
    },
    55804: function (e) {
      var t,
        n,
        o = Function.prototype,
        r = Object.prototype,
        i = o.toString,
        l = r.hasOwnProperty,
        a = i.call(Object),
        c = r.toString,
        u =
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
          "[object Object]" != c.call(e) ||
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
        var t = u(e);
        if (null === t) return !0;
        var n = l.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && i.call(n) == a;
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
                return a(t) ? t(e) : t;
              },
              getActions: function () {
                return e;
              },
              dispatch: function (t) {
                if (!(0, l.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
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
                  a(e) && n.push(e),
                  function () {
                    var t = n.indexOf(e);
                    t < 0 || n.splice(t, 1);
                  }
                );
              },
              replaceReducer: function (e) {
                if (!a(e)) throw new Error("Expected the nextReducer to be a function.");
              }
            };
          })();
        };
      };
      var o,
        r = n(43754),
        i = n(55804),
        l = (o = i) && o.__esModule ? o : { default: o };
      var a = function (e) {
        return "function" === typeof e;
      };
    },
    32668: function () {},
    45503: function () {},
    14013: function () {},
    98673: function () {}
  }
]);
