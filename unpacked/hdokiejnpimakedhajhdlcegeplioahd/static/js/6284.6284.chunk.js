(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [6284],
  {
    33880: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(2377),
        r = n(82325),
        i = (n(23381), n(60866)),
        l = n(82160),
        a = n(52384),
        u = n(11970),
        c = n(27403),
        s = { id: 0, type: "ShareFolder", visible: !0, completed: null, seenAt: null, color: o.a.GREY },
        f = { showHowToDialog: jest.fn(), closeHowToDialog: jest.fn(), openCreateFolderDialog: jest.fn() };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return f;
          }
        };
      });
      var d = (0, l.Z)([])({ secondaryOnboarding: { isHowToOpen: !1 }, user: { type: u.F.ENTERPRISE_TRIAL } });
      it("should shallow render the ShareFolder component", function () {
        var e = (0, r.shallow)((0, c.jsx)(a.zt, { store: d }, (0, c.jsx)(i.default, { skill: s, expanded: !0, fromAllSkillsDialog: !1 })));
        expect(e).toHaveLength(1);
      });
      it("should mount render the ShareFolder component and have the correct Learn more link", function () {
        var e = (0, r.mount)((0, c.jsx)(a.zt, { store: d }, (0, c.jsx)(i.default, { skill: s, expanded: !0, fromAllSkillsDialog: !1 })));
        expect(e.find("#learn-more").first().prop("url")).toMatch("https://support.logmeininc.com/lastpass/help/what-are-shared-folders"),
          e.unmount();
      }),
        it("should mount render the ShareFolder component and open the How-to dialog", function () {
          var e = (0, r.mount)((0, c.jsx)(a.zt, { store: d }, (0, c.jsx)(i.default, { skill: s, expanded: !0, fromAllSkillsDialog: !1 })));
          e.find("#see-how-to").first().simulate("click"), expect(f.showHowToDialog).toHaveBeenCalled(), e.unmount();
        }),
        it("should mount render the ShareFolder component and open the Create a new shared folder dialog", function () {
          var e = (0, r.mount)((0, c.jsx)(a.zt, { store: d }, (0, c.jsx)(i.default, { skill: s, expanded: !0, fromAllSkillsDialog: !1 })));
          e.find("#create-shared-folder").first().simulate("click"), expect(f.openCreateFolderDialog).toHaveBeenCalled(), e.unmount();
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
        u = r.toString,
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
