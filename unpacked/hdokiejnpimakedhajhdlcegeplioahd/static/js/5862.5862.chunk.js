(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [5862],
  {
    39051: function (t, e, n) {
      "use strict";
      n.r(e);
      n(23381);
      var o = n(82160),
        r = n(52384),
        i = n(82325),
        l = n(99117),
        a = n(2377),
        c = n(11970),
        s = n(27403),
        u = { id: 0, type: "ImportPasswords", visible: !0, completed: null, seenAt: null, color: a.a.PURPLE },
        f = {
          complete: jest.fn(),
          hideExpandedSkillInDrawer: jest.fn(),
          hideSkillDetailsDialog: jest.fn(),
          openImportPasswords: jest.fn()
        };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return f;
          }
        };
      });
      var d = (0, o.Z)([])({ secondaryOnboarding: { isHowToOpen: !1 }, user: { type: c.F.ENTERPRISE_TRIAL } });
      it("should shallow render the ImportPasswords ad component without crashing", function () {
        var t = (0, i.shallow)((0, s.jsx)(r.zt, { store: d }, (0, s.jsx)(l.default, { skill: u, expanded: !0, fromAllSkillsDialog: !1 })));
        expect(t).toHaveLength(1);
      }),
        it("should open a new tab when clicking on the ImportPasswords button", function () {
          var t = (0, i.mount)((0, s.jsx)(r.zt, { store: d }, (0, s.jsx)(l.default, { skill: u, expanded: !0, fromAllSkillsDialog: !1 })));
          t.find(".action-cta").at(1).simulate("click"),
            t.unmount(),
            expect(f.openImportPasswords).toHaveBeenCalled(),
            expect(f.complete).toHaveBeenCalled(),
            expect(f.hideExpandedSkillInDrawer).toHaveBeenCalled();
        }),
        it("should close the ImportPasswords skill from all skills when the action button is clicked", function () {
          var t = (0, i.mount)((0, s.jsx)(r.zt, { store: d }, (0, s.jsx)(l.default, { skill: u, expanded: !0, fromAllSkillsDialog: !0 })));
          t.find(".action-cta").at(1).simulate("click"), t.unmount(), expect(f.hideSkillDetailsDialog).toHaveBeenCalled();
        }),
        it("should open import also when top[bg] is not available", function () {
          var t,
            e = null === (t = top) || void 0 === t ? void 0 : t.bg;
          top && (top.bg = void 0);
          var n = (0, i.mount)((0, s.jsx)(r.zt, { store: d }, (0, s.jsx)(l.default, { skill: u, expanded: !0, fromAllSkillsDialog: !1 })));
          n.find(".action-cta").at(1).simulate("click"), n.unmount(), expect(f.openImportPasswords).toHaveBeenCalled(), top && (top.bg = e);
        });
    },
    55804: function (t) {
      var e,
        n,
        o = Function.prototype,
        r = Object.prototype,
        i = o.toString,
        l = r.hasOwnProperty,
        a = i.call(Object),
        c = r.toString,
        s =
          ((e = Object.getPrototypeOf),
          (n = Object),
          function (t) {
            return e(n(t));
          });
      t.exports = function (t) {
        if (
          !(function (t) {
            return !!t && "object" == typeof t;
          })(t) ||
          "[object Object]" != c.call(t) ||
          (function (t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString)
              try {
                e = !!(t + "");
              } catch (n) {}
            return e;
          })(t)
        )
          return !1;
        var e = s(t);
        if (null === e) return !0;
        var n = l.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && i.call(n) == a;
      };
    },
    82160: function (t, e, n) {
      "use strict";
      e.Z = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return r.applyMiddleware.apply(
            void 0,
            (function (t) {
              if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
              }
              return Array.from(t);
            })(t)
          )(function () {
            var t = [],
              n = [];
            return {
              getState: function () {
                return a(e) ? e(t) : e;
              },
              getActions: function () {
                return t;
              },
              dispatch: function (e) {
                if (!(0, l.default)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if ("undefined" === typeof e.type)
                  throw new Error(
                    'Actions may not have an undefined "type" property. Have you misspelled a constant? Action: ' + JSON.stringify(e)
                  );
                t.push(e);
                for (var o = 0; o < n.length; o++) n[o]();
                return e;
              },
              clearActions: function () {
                t = [];
              },
              subscribe: function (t) {
                return (
                  a(t) && n.push(t),
                  function () {
                    var e = n.indexOf(t);
                    e < 0 || n.splice(e, 1);
                  }
                );
              },
              replaceReducer: function (t) {
                if (!a(t)) throw new Error("Expected the nextReducer to be a function.");
              }
            };
          })();
        };
      };
      var o,
        r = n(43754),
        i = n(55804),
        l = (o = i) && o.__esModule ? o : { default: o };
      var a = function (t) {
        return "function" === typeof t;
      };
    },
    32668: function () {},
    45503: function () {},
    14013: function () {},
    98673: function () {}
  }
]);
