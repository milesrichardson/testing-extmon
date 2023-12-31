(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3379],
  {
    65550: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      const s = new (n(20144).ZP.extend({
        name: "GlobalKeyEventManager",
        data: () => ({ events: {} }),
        methods: {
          registerEventListener(e, t, n, s) {
            this.events.hasOwnProperty(t)
              ? this.events[t].hasOwnProperty(n) || (this.events[t][n] = [])
              : ((this.events[t] = {}), (this.events[t][n] = []), this._addListener(t)),
              this.events[t][n].push({ id: e, handler: s });
          },
          removeEventListener(e, t, n) {
            if (!this.events.hasOwnProperty(t))
              return void (m.utils.isDev() && console.warn(`No event listeners registered with event type: ${t} to remove`));
            if (!this.events[t].hasOwnProperty(n))
              return void (m.utils.isDev() && console.warn(`No event listeners registered with keyCode: ${n} to remove`));
            let s = this.events[t][n].findIndex((t) => t.id === e);
            -1 !== s
              ? (this.events[t][n].splice(s, 1), this._cleanupIfEmpty(t, n))
              : m.utils.isDev() && console.warn(`No event listeners registered with id: ${e} to remove`);
          },
          _cleanupIfEmpty(e, t) {
            this.events[e][t].length || delete this.events[e][t],
              Object.keys(this.events[e]).length || (delete this.events[e], this._removeListener(e));
          },
          _addListener(e) {
            window.addEventListener(e, this._eventRouter);
          },
          _removeListener(e) {
            window.removeEventListener(e, this._eventRouter);
          },
          _eventRouter(e) {
            if (m.tourActive) return;
            if (!this.events.hasOwnProperty(e.type)) return;
            if (!this.events[e.type].hasOwnProperty(e.keyCode)) return;
            let t = this.events[e.type][e.keyCode];
            t[t.length - 1].handler(e);
          }
        }
      }))();
    },
    58718: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => a });
      var s = n(8081),
        r = n.n(s),
        i = n(23645),
        o = n.n(i)()(r());
      o.push([
        e.id,
        ".search-chat[data-v-5043008e]{--color-icon: var(--color-text);position:absolute;z-index:2;overflow:hidden;border-radius:var(--border-radius);background-color:hsla(var(--color-bg-base)/80%);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);inset:auto 0 0}",
        ""
      ]);
      const a = o;
    },
    73379: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => w });
      var s = function () {
        var e = this,
          t = e._self._c;
        return t(
          "provide-app-dimensions",
          {
            staticClass: "search-chat bg",
            class: { focused: e.viewStateStore.focused, unfocused: !e.viewStateStore.focused },
            attrs: { "data-test": "search-ask-ai", direction: e.directionEnum.up },
            nativeOn: {
              click: function (t) {
                return e.viewStateStore.focus();
              }
            }
          },
          [
            t("chat-content", {
              on: {
                close: function (t) {
                  return e.$emit("close");
                }
              }
            })
          ],
          1
        );
      };
      s._withStripped = !0;
      var r = function () {
        var e = this;
        return (0, e._self._c)("div", { ref: "el", style: { "--content-max-height": e.maxHeight + "px" } }, [e._t("default")], 2);
      };
      r._withStripped = !0;
      var i = n(70464),
        o = n(20144),
        a = n(92729),
        d = n(96046);
      const l = { up: "up", down: "down" },
        u = {
          name: "ProvideAppDimensions",
          provide() {
            const e = this;
            return {
              appDimensions: {
                get maxHeight() {
                  return e.maxHeight;
                },
                get height() {
                  return e.rect.height.value;
                },
                get width() {
                  return e.rect.width.value;
                }
              }
            };
          },
          props: { direction: { type: String, required: !0, validator: (e) => Object.values(l).includes(e) } },
          setup() {
            const e = (0, o.iH)(null);
            return { el: e, rect: (0, i.rBN)(e) };
          },
          computed: {
            maxHeight() {
              return this.direction === l.up
                ? this.rect.bottom.value - a.Cg.dashboardVerticalPaddingPx
                : d.Z.windowDimensions.height - this.rect.top.value - a.Cg.dashboardVerticalPaddingPx;
            }
          }
        };
      var h = n(51900);
      const c = (0, h.Z)(u, r, [], !1, null, null, null).exports;
      var v = n(55494),
        p = n(65550);
      const m = {
        name: "SearchChat",
        components: { ChatContent: v.Z, ProvideAppDimensions: c },
        inject: ["viewStateStore"],
        unreactive: () => ({ directionEnum: l }),
        mounted() {
          p.Z.registerEventListener("closeApp", "keyup", 27, () => this.$emit("close"));
        },
        destroyed() {
          p.Z.removeEventListener("closeApp", "keyup", 27);
        }
      };
      n(48090);
      const w = (0, h.Z)(m, s, [], !1, null, "5043008e", null).exports;
    },
    48090: (e, t, n) => {
      var s = n(58718);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, n(45346).Z)("026d54be", s, !1, {});
    }
  }
]);
