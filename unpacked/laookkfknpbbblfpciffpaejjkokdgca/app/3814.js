(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3814, 9437],
  {
    99437: (e, a, t) => {
      "use strict";
      t.d(a, { Z: () => k });
      var o = t(20144),
        i = t(88026),
        d = t(51726),
        n = t.n(d),
        r = t(55482),
        s = t(7838),
        l = t(35174);
      let c = {};
      const u = {
        bind: function (e, a) {
          m.utils.isTouchDevice() &&
            ((e.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (e.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (c[e.dataset.mobileClickHandlerId] = a.value),
            e.addEventListener("click", a.value));
        },
        unbind: function (e) {
          m.utils.isTouchDevice() &&
            (e.removeEventListener("click", c[e.dataset.mobileClickHandlerId]),
            delete c[e.dataset.mobileClickHandlerId],
            delete e.dataset.mobileClickHandlerId,
            delete e.dataset.justBoundMobileClickHandler);
        }
      };
      var g = t(63420),
        b = t(64398),
        v = t(77197);
      o.ZP.use(i.Z, { name: "unreactive" }),
        o.ZP.use(n()),
        o.ZP.use(r.qK),
        o.ZP.use(g.og),
        o.ZP.use(v.Z),
        (o.ZP.prototype.$xhr = l.Z),
        (o.ZP.prototype.$e = s.Z),
        o.ZP.directive("mobile-click", u),
        new o.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        o.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: b.Z
        });
      const k = o.ZP;
    },
    83814: (e, a, t) => {
      "use strict";
      t.r(a);
      var o = t(99437),
        i = function () {
          var e = this,
            a = e._self._c;
          return a("div", { staticClass: "backgrounds" }, [
            a(
              "div",
              { staticClass: "background" },
              [
                a("transition", { attrs: { name: e.transitionSpeed, mode: "in-out" } }, [
                  a("div", {
                    key: e.imageUrl,
                    staticClass: "background-item",
                    style: { "background-image": "url(" + e.imageUrl + ")" },
                    attrs: { "data-test": "background-item" }
                  })
                ])
              ],
              1
            ),
            e._v(" "),
            a("div", { staticClass: "background-overlay" })
          ]);
        };
      i._withStripped = !0;
      const d = {
        name: "Background",
        data: () => ({ imageUrl: "", transitionSpeed: "fade", loadingImage: !1 }),
        created() {
          m.models.activeBackground.on("background:activeChanged", this.setBackground),
            m.on("image:loaded", this.imageLoaded),
            m.on("image:error", this.imageError),
            m.on("image:timeout", this.imageTimeout),
            m.on("topics:open", this.addOverlay),
            m.on("topics:closed", this.removeOverlay),
            m.models.backgroundManager.backgroundItem
              ? this.setBackground(m.models.backgroundManager.backgroundItem)
              : m.models.activeBackground.backgroundItem && this.setBackground(m.models.activeBackground.backgroundItem);
        },
        destroyed() {
          m.models.activeBackground.off("background:activeChanged", this.setBackground),
            m.off("image:loaded", this.imageLoaded),
            m.off("image:error", this.imageError),
            m.off("image:timeout", this.imageTimeout),
            m.off("topics:open", this.addOverlay),
            m.off("topics:closed", this.removeOverlay);
        },
        methods: {
          setBackground(e) {
            (this.loadingImage = !0), this.imageUrl && (this.transitionSpeed = "fade-slow");
            const a = e.get("isBuiltIn"),
              t = e.backgroundUuid(),
              o = e.get("filename");
            "true" == localStorage.getItem("failed:" + o) && m.models.activeBackground.trigger("background:fallback");
            const i = { uuid: t, url: o, height: e.get("height"), width: e.get("width"), skip_check: e.get("skip_check") };
            m.models.imageManager.loadImage(i, a || this.isBackgroundLoaded ? null : 4e3, !1) ||
              (this.isBackgroundLoaded ? m.trigger("background:error", t) : m.models.activeBackground.trigger("background:fallback"));
          },
          imageLoaded(e, a, t, o) {
            o ||
              (m.models.activeBackground.successfullyLoaded(e),
              (this.isBackgroundLoaded = !0),
              (this.loadingImage = !1),
              (this.imageUrl = a),
              m.widgetManager.appReady("background", m.oneTimeLoginInProgress),
              m.oneTimeLoginInProgress || setTimeout(m.widgetManager.checkWidgetTimeout.bind(m.widgetManager), 500),
              m.trigger("background:loadSuccessful", e));
          },
          imageError(e) {
            this.loadingImage ? m.models.activeBackground.trigger("background:fallback") : m.trigger("background:error", e);
          },
          imageTimeout() {
            this.loadingImage && m.models.activeBackground.trigger("background:fallback");
          },
          addOverlay() {
            m.utils.addClass(document.body, "show-full-overlay"),
              this.$nextTick(() => {
                m.utils.addClass(document.body, "show-full-overlay-active");
              });
          },
          removeOverlay() {
            m.utils.removeClass(document.body, "show-full-overlay-active"),
              this.$nextTick(() => {
                m.utils.removeClass(document.body, "show-full-overlay");
              });
          }
        }
      };
      t(77644);
      const n = (0, t(51900).Z)(d, i, [], !1, null, "2db81582", null).exports;
      new o.Z({ render: (e) => e(n) }).$mount(".backgrounds");
    },
    74058: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => u });
      var o = t(8081),
        i = t.n(o),
        d = t(23645),
        n = t.n(d),
        r = t(61667),
        s = t.n(r),
        l = new URL(t(95304), t.b),
        c = n()(i()),
        m = s()(l);
      c.push([
        e.id,
        `\n/* stylelint-disable */\n.background[data-v-2db81582], .background-item[data-v-2db81582] { position: absolute; top: 0; right: 0; left: 0; bottom: 0; background-color: transparent; background-position: center center; background-repeat: no-repeat; background-size: cover;\n}\n.background[data-v-2db81582] { margin: 0; padding: 0; z-index: 1; transition: transform 0.3s ease-out;\n}\n.background-item[data-v-2db81582] { opacity: 1; transition: transform var(--a-show-full-duration) var(--a-show-full-curve);\n}\n.show-full-overlay-active .background-item[data-v-2db81582] { transform: scale(1.05);\n}\n.show-full-overlay .background-item[data-v-2db81582]:before { position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 0; opacity: 0; background: rgba(0,0,0,0.5); content: ''; transition: opacity var(--a-show-full-duration) var(--a-show-full-curve);\n}\n.show-full-overlay-active .background-item[data-v-2db81582]:before { opacity: 1;\n}\n.background-overlay[data-v-2db81582] { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 2; opacity: 1; background-image: url(${m}); background-size: 100% 100%; transition: opacity 0.3s ease-out;\n}\n.background-overlay.slow[data-v-2db81582] { transition-duration: 1s;\n}\n.hide-overlay .background-overlay[data-v-2db81582] { opacity: 0 !important;\n}\n.fade-enter-active[data-v-2db81582], .fade-leave-active[data-v-2db81582] { animation: fadein 0.3s ease-out 0s forwards;\n}\n.fade-enter[data-v-2db81582], .fade-leave-to[data-v-2db81582] { opacity: 0;\n}\n.fade-slow-enter-active[data-v-2db81582], .fade-slow-leave-active[data-v-2db81582] { animation: fadein 2s ease-out 0s forwards;\n}\n.fade-slow-enter[data-v-2db81582], .fade-slow-leave-to[data-v-2db81582] { opacity: 0;\n}\n`,
        ""
      ]);
      const u = c;
    },
    61667: (e) => {
      "use strict";
      e.exports = function (e, a) {
        return (
          a || (a = {}),
          e
            ? ((e = String(e.__esModule ? e.default : e)),
              /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
              a.hash && (e += a.hash),
              /["'() \t\n]|(%20)/.test(e) || a.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            : e
        );
      };
    },
    77644: (e, a, t) => {
      var o = t(74058);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[e.id, o, ""]]),
        o.locals && (e.exports = o.locals),
        (0, t(45346).Z)("35ed5df8", o, !1, { ssrId: !0 });
    },
    95304: (e, a, t) => {
      "use strict";
      e.exports = t.p + "26068490522b9f5ca27a.png";
    }
  }
]);
