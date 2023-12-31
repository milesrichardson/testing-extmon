(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [5978, 1479],
  {
    19172: function (t, e, n) {
      "use strict";
      n.r(e);
      n(23381);
      var o = n(82160),
        l = n(82325),
        r = n(2377),
        i = n(11479),
        a = n(11970),
        u = n(52384),
        s = n(27403),
        c = { id: 0, type: "TourTheVault", visible: !0, completed: null, seenAt: null, color: r.a.PURPLE },
        d = {
          complete: jest.fn(),
          hideExpandedSkillInDrawer: jest.fn(),
          hideSkillDetailsDialog: jest.fn(),
          toggleShowAllSkills: jest.fn(),
          openVaultTour: jest.fn()
        };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return d;
          }
        };
      });
      var f = (0, o.Z)([])({ secondaryOnboarding: { isHowToOpen: !1 }, user: { type: a.F.ENTERPRISE_TRIAL } });
      it("should shallow render the TourTheVault ad component without crashing", function () {
        var t = (0, l.shallow)((0, s.jsx)(u.zt, { store: f }, (0, s.jsx)(i.default, { skill: c, expanded: !0, fromAllSkillsDialog: !1 })));
        expect(t).toHaveLength(1);
      }),
        it("should invoke the openTour function when clicking the TourTheVault action button", function () {
          var t = (0, l.mount)((0, s.jsx)(u.zt, { store: f }, (0, s.jsx)(i.default, { skill: c, expanded: !0, fromAllSkillsDialog: !1 })));
          t.find("button.action-cta").simulate("click"),
            t.unmount(),
            expect(d.openVaultTour).toHaveBeenCalled(),
            expect(d.complete).toHaveBeenCalled(),
            expect(d.hideExpandedSkillInDrawer).toHaveBeenCalled();
        }),
        it("should close the TourTheVault skill from all skills when the action button is clicked", function () {
          var t = (0, l.mount)((0, s.jsx)(u.zt, { store: f }, (0, s.jsx)(i.default, { skill: c, expanded: !0, fromAllSkillsDialog: !0 })));
          t.find("button.action-cta").simulate("click"),
            t.unmount(),
            expect(d.openVaultTour).toHaveBeenCalled(),
            expect(d.hideSkillDetailsDialog).toHaveBeenCalled(),
            expect(d.toggleShowAllSkills).toHaveBeenCalled();
        });
    },
    11479: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(91640),
        l = n(48693),
        r = n(23381),
        i = n(57989),
        a = n(98223),
        u = n(27645),
        s = n(26807),
        c = n(57739),
        d = n(44629),
        f = n(27403);
      var p = (0, o.Z)("p", { target: "elcmypq2" })({
          name: "10nqmpa",
          styles: "font-size:12px;line-height:24px;color:#1d3049;margin-bottom:24px"
        }),
        h = (0, o.Z)(p, { target: "elcmypq1" })({ name: "18uqayh", styles: "margin-bottom:16px" }),
        y = (0, o.Z)(u.K, { target: "elcmypq0" })({ name: "1auzifb", styles: "width:100%;border-radius:4px" });
      e.default = function (t) {
        var e = t.skill,
          n = t.expanded,
          o = t.fromAllSkillsDialog,
          u = (0, i.J)();
        return (0, f.jsx)(a.j, {
          "data-component": "TourTheVault",
          skill: e,
          icon: (e.completed && (0, f.jsx)(c.r, null)) || (0, f.jsx)(d.r, null),
          title: (0, f.jsx)(l.Trans, { id: "Tour your LastPass vault" }),
          description: (0, f.jsx)(l.Trans, { id: "Explore your safe place" }),
          expanded: n,
          fromAllSkillsDialog: o,
          bodyTitle: (0, f.jsx)(l.Trans, { id: "Vault = Safety" }),
          automationId: "so-tour-the-vault",
          bodyContent: (0, f.jsx)(
            r.Fragment,
            null,
            (0, f.jsx)(
              p,
              null,
              (0, f.jsx)(l.Trans, {
                id: "The vault is your place to store passwords, notes, profiles for online shopping, documents, and more."
              })
            ),
            (0, f.jsx)(
              h,
              null,
              (0, f.jsx)(l.Trans, { id: "Everything you need to keep your online life rolling along smoothly and securely." })
            ),
            (0, f.jsx)(
              y,
              {
                red: !0,
                theme: s.Q,
                onClick: function () {
                  u.openVaultTour(),
                    u.complete(e.type),
                    u.hideExpandedSkillInDrawer(),
                    o && (u.hideSkillDetailsDialog(), u.toggleShowAllSkills());
                },
                className: "action-cta",
                "data-automation-id": "so-start-vault-tour-btn"
              },
              (0, f.jsx)(l.Trans, { id: "Start the vault tour" })
            )
          )
        });
      };
    },
    55804: function (t) {
      var e,
        n,
        o = Function.prototype,
        l = Object.prototype,
        r = o.toString,
        i = l.hasOwnProperty,
        a = r.call(Object),
        u = l.toString,
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
          "[object Object]" != u.call(t) ||
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
        var n = i.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && r.call(n) == a;
      };
    },
    82160: function (t, e, n) {
      "use strict";
      e.Z = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return l.applyMiddleware.apply(
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
                if (!(0, i.default)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
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
        l = n(43754),
        r = n(55804),
        i = (o = r) && o.__esModule ? o : { default: o };
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
