(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [2403],
  {
    39850: function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t(37755),
        r = (t(23381), t(82325)),
        s = t(2377),
        a = t(64129),
        c = t(52384),
        u = t(27403),
        i = { id: 0, type: "StayConnectedAnywhere", visible: !0, completed: null, seenAt: null, color: s.a.GREY, requestError: !1 },
        l = { checkStayConnectedCompletion: jest.fn(), setRequestInProgress: jest.fn() };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return l;
          }
        };
      }),
        jest.mock("react-redux", function () {
          return (0, o.Z)(
            (0, o.Z)({}, jest.requireActual("react-redux")),
            {},
            { useSelector: jest.fn().mockReturnValueOnce({ secondaryOnboarding: { requestInProgress: !1 } }) }
          );
        });
      var d = function (e) {
        return (0, r.mount)((0, u.jsx)(a.default, { skill: e, expanded: !0, fromAllSkillsDialog: !1 }));
      };
      describe("StayConnectedAnywhere Skill component", function () {
        afterEach(function () {
          c.v9.mockClear();
        }),
          it("should shallow render without crashing", function () {
            var e = (0, r.shallow)((0, u.jsx)(a.default, { skill: i, expanded: !0, fromAllSkillsDialog: !1 }));
            expect(e).toHaveLength(1);
          }),
          it("should mount render and click the Already logged-in button", function () {
            jest.useFakeTimers();
            var e = d(i);
            e.find(".action-cta").at(1).simulate("click"),
              e.unmount(),
              expect(l.setRequestInProgress).toHaveBeenCalled(),
              jest.advanceTimersByTime(1e3),
              expect(l.checkStayConnectedCompletion).toHaveBeenCalled(),
              jest.useRealTimers();
          }),
          it("should mount render and show Alert on failed request", function () {
            jest.useFakeTimers();
            var e = (0, o.Z)((0, o.Z)({}, i), {}, { requestError: !0 }),
              n = d(e),
              t = n.find(".action-cta").at(1),
              r = n.find("#stayConnectedAnywhereAlert").at(1);
            n.unmount(), expect(t).toHaveLength(0), expect(r).toHaveLength(1);
          });
      });
    },
    32668: function () {},
    45503: function () {},
    14013: function () {},
    98673: function () {}
  }
]);
