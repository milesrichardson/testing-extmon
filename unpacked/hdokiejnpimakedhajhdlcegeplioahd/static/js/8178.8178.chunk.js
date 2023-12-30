(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [8178],
  {
    92478: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(47169),
        i = (n(23381), n(82325)),
        r = n(52384),
        l = n(82160),
        a = n(2377),
        u = n(21995),
        c = n(44340),
        s = n(11970),
        d = n(27403),
        f = { id: 0, type: "AddPayment", visible: !0, completed: null, seenAt: null, color: a.a.GREY },
        p = {
          hideSkillDetailsDialog: jest.fn(),
          toggleShowAllSkills: jest.fn(),
          openPaymentCardView: jest.fn(),
          openAddPaymentDialog: jest.fn()
        };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return p;
          }
        };
      });
      var h = (0, l.Z)([]);
      it("should shallow render the AddNote component without crashing", function () {
        var e = h({ settings: { features: (0, o.Z)({}, c.e.NEW_INFIELD_DESIGN_FOR_ONBOARDING, !0) } }),
          t = (0, i.shallow)((0, d.jsx)(r.zt, { store: e }, (0, d.jsx)(u.default, { skill: f, expanded: !0, fromAllSkillsDialog: !1 })));
        expect(t).toHaveLength(1);
      }),
        it("should mount render the AddNote component with new infield design FS ON and click CTA", function () {
          var e = h({
              settings: { features: (0, o.Z)({}, c.e.NEW_INFIELD_DESIGN_FOR_ONBOARDING, !0) },
              user: { type: s.F.ENTERPRISE_TRIAL }
            }),
            t = (0, i.mount)((0, d.jsx)(r.zt, { store: e }, (0, d.jsx)(u.default, { skill: f, expanded: !0, fromAllSkillsDialog: !1 })));
          expect(t.html().includes('data-automation-id="newInfieldInfo"')).toBeTruthy(),
            t.find(".add-payment-button").at(1).simulate("click"),
            expect(p.openPaymentCardView).toHaveBeenCalled(),
            expect(p.hideSkillDetailsDialog).toHaveBeenCalled(),
            expect(p.toggleShowAllSkills).toHaveBeenCalled(),
            t.unmount();
        }),
        it("should mount render the AddNote component with new infield design FS OFF and click CTA", function () {
          var e = h({
              settings: { features: (0, o.Z)({}, c.e.NEW_INFIELD_DESIGN_FOR_ONBOARDING, !1) },
              user: { type: s.F.ENTERPRISE_TRIAL }
            }),
            t = (0, i.mount)((0, d.jsx)(r.zt, { store: e }, (0, d.jsx)(u.default, { skill: f, expanded: !0, fromAllSkillsDialog: !1 })));
          expect(t.html().includes('data-automation-id="oldInfieldInfo"')).toBeTruthy(),
            t.find(".add-payment-button").at(1).simulate("click"),
            expect(p.openAddPaymentDialog).toHaveBeenCalled(),
            expect(p.hideSkillDetailsDialog).toHaveBeenCalled(),
            expect(p.toggleShowAllSkills).toHaveBeenCalled(),
            t.unmount();
        });
    },
    55804: function (e) {
      var t,
        n,
        o = Function.prototype,
        i = Object.prototype,
        r = o.toString,
        l = i.hasOwnProperty,
        a = r.call(Object),
        u = i.toString,
        c =
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
        var t = c(e);
        if (null === t) return !0;
        var n = l.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && r.call(n) == a;
      };
    },
    82160: function (e, t, n) {
      "use strict";
      t.Z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return i.applyMiddleware.apply(
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
        i = n(43754),
        r = n(55804),
        l = (o = r) && o.__esModule ? o : { default: o };
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
