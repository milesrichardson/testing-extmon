"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [732, 9437],
  {
    99437: (e, t, n) => {
      n.d(t, { Z: () => v });
      var i = n(20144),
        a = n(88026),
        l = n(51726),
        o = n.n(l),
        s = n(34952),
        d = n(7838),
        u = n(35174);
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
      var b = n(28692),
        k = n(64398),
        Z = n(77197);
      i.ZP.use(a.Z, { name: "unreactive" }),
        i.ZP.use(o()),
        i.ZP.use(s.InlineSvgPlugin),
        i.ZP.use(b.og),
        i.ZP.use(Z.Z),
        (i.ZP.prototype.$xhr = u.Z),
        (i.ZP.prototype.$e = d.Z),
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
    60732: (e, t, n) => {
      n.r(t);
      var i = n(99437),
        a = function () {
          return (0, this._self._c)("div", { staticClass: "region center" }, [this._v("Hello")]);
        };
      a._withStripped = !0;
      const l = (0, n(51900).Z)({ name: "RegionTemplate" }, a, [], !1, null, null, null).exports;
      new i.Z({ render: (e) => e(l) }).$mount(".region.center");
    }
  }
]);
