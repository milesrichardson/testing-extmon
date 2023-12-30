(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [2627],
  {
    63376: function (e, n, t) {
      "use strict";
      t.r(n);
      var i = t(37755),
        l = (t(23381), t(82325)),
        o = t(2377),
        u = t(33438),
        c = t(27403),
        a = { id: 0, type: "TryAutoFill", visible: !0, completed: null, seenAt: null, color: o.a.GREEN },
        r = { complete: jest.fn(), hideExpandedSkillInDrawer: jest.fn() };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return r;
          }
        };
      }),
        jest.mock("react-redux", function () {
          return (0, i.Z)(
            (0, i.Z)({}, jest.requireActual("react-redux")),
            {},
            { useSelector: jest.fn().mockReturnValueOnce({ settings: { features: { new_infield_design_for_onboarding: !0 } } }) }
          );
        });
      var s = function (e) {
        return (0, l.mount)((0, c.jsx)(u.default, { skill: e, expanded: !0, fromAllSkillsDialog: !1 }));
      };
      it("should render the TryAutoFill component without crashing", function () {
        var e = s(a);
        expect(e).toHaveLength(1);
      }),
        it('should invoke the complete function when clicking the input, after "fill" and finally "All set" action button', function () {
          var e = s(a);
          e.find("input.autofill-input").simulate("click"),
            e.find("div.old-infield-menu-item").simulate("click"),
            e.find("button.action-cta").simulate("click"),
            e.unmount(),
            expect(r.complete).toHaveBeenCalled(),
            expect(r.hideExpandedSkillInDrawer).toHaveBeenCalled();
        });
    },
    32668: function () {},
    45503: function () {},
    14013: function () {},
    98673: function () {}
  }
]);
