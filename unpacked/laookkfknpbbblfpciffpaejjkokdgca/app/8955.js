"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8955, 9437],
  {
    99437: (e, t, a) => {
      a.d(t, { Z: () => v });
      var i = a(20144),
        n = a(88026),
        l = a(51726),
        o = a.n(l),
        d = a(34952),
        s = a(7838),
        u = a(35174);
      let c = {};
      const r = {
        bind: function (e, t) {
          m.utils.isTouchDevice() &&
            ((e.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (e.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (c[e.dataset.mobileClickHandlerId] = t.value),
            e.addEventListener("click", t.value));
        },
        unbind: function (e) {
          m.utils.isTouchDevice() &&
            (e.removeEventListener("click", c[e.dataset.mobileClickHandlerId]),
            delete c[e.dataset.mobileClickHandlerId],
            delete e.dataset.mobileClickHandlerId,
            delete e.dataset.justBoundMobileClickHandler);
        }
      };
      var b = a(28692),
        k = a(64398),
        Z = a(77197);
      i.ZP.use(n.Z, { name: "unreactive" }),
        i.ZP.use(o()),
        i.ZP.use(d.InlineSvgPlugin),
        i.ZP.use(b.og),
        i.ZP.use(Z.Z),
        (i.ZP.prototype.$xhr = u.Z),
        (i.ZP.prototype.$e = s.Z),
        i.ZP.directive("mobile-click", r),
        new i.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        i.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: k.Z
        });
      const v = i.ZP;
    },
    18955: (e, t, a) => {
      a.r(t);
      var i = a(99437),
        n = a(86640);
      if ((a(14333), !m.modals)) {
        const e = new i.Z({ render: (e) => e(n.Z) }).$mount();
        document.querySelector(".apps .full").appendChild(e.$el);
      }
    }
  }
]);
