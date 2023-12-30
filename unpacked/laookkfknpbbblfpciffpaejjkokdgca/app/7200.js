(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7200],
  {
    65550: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      const n = new (r(20144).ZP.extend({
        name: "GlobalKeyEventManager",
        data: () => ({ events: {} }),
        methods: {
          registerEventListener(e, t, r, n) {
            Object.prototype.hasOwnProperty.call(this.events, t)
              ? Object.prototype.hasOwnProperty.call(this.events[t], r) || (this.events[t][r] = [])
              : ((this.events[t] = {}), (this.events[t][r] = []), this._addListener(t)),
              this.events[t][r].push({ id: e, handler: n });
          },
          removeEventListener(e, t, r) {
            if (!Object.prototype.hasOwnProperty.call(this.events, t))
              return void (m.utils.isDev() && console.warn(`No event listeners registered with event type: ${t} to remove`));
            if (!Object.prototype.hasOwnProperty.call(this.events[t], r))
              return void (m.utils.isDev() && console.warn(`No event listeners registered with keyCode: ${r} to remove`));
            let n = this.events[t][r].findIndex((t) => t.id === e);
            -1 !== n
              ? (this.events[t][r].splice(n, 1), this._cleanupIfEmpty(t, r))
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
            if (!Object.prototype.hasOwnProperty.call(this.events, e.type)) return;
            if (!Object.prototype.hasOwnProperty.call(this.events[e.type], e.keyCode)) return;
            let t = this.events[e.type][e.keyCode];
            t[t.length - 1].handler(e);
          }
        }
      }))();
    },
    30571: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => a });
      var n = r(8081),
        s = r.n(n),
        i = r(23645),
        o = r.n(i)()(s());
      o.push([
        e.id,
        ".search-chat[data-v-5043008e]{--color-icon: var(--color-text);position:absolute;z-index:2;overflow:hidden;border-radius:var(--border-radius);background-color:hsla(var(--color-bg-base)/80%);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);inset:auto 0 0}",
        ""
      ]);
      const a = o;
    },
    7200: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => w });
      var n = function () {
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
      n._withStripped = !0;
      var s = function () {
        var e = this;
        return (0, e._self._c)("div", { ref: "el", style: { "--content-max-height": e.maxHeight + "px" } }, [e._t("default")], 2);
      };
      s._withStripped = !0;
      var i = r(70464),
        o = r(20144),
        a = r(92729),
        l = r(96046);
      const c = { up: "up", down: "down" },
        d = {
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
          props: { direction: { type: String, required: !0, validator: (e) => Object.values(c).includes(e) } },
          setup() {
            const e = (0, o.iH)(null);
            return { el: e, rect: (0, i.rBN)(e) };
          },
          computed: {
            maxHeight() {
              return this.direction === c.up
                ? this.rect.bottom.value - a.Cg.dashboardVerticalPaddingPx
                : l.Z.windowDimensions.height - this.rect.top.value - a.Cg.dashboardVerticalPaddingPx;
            }
          }
        };
      var u = r(51900);
      const h = (0, u.Z)(d, s, [], !1, null, null, null).exports;
      var v = r(10842),
        p = r(65550);
      const m = {
        name: "SearchChat",
        components: { ChatContent: v.Z, ProvideAppDimensions: h },
        inject: ["viewStateStore"],
        unreactive: () => ({ directionEnum: c }),
        mounted() {
          p.Z.registerEventListener("closeApp", "keyup", 27, () => this.$emit("close"));
        },
        destroyed() {
          p.Z.removeEventListener("closeApp", "keyup", 27);
        }
      };
      r(12855);
      const w = (0, u.Z)(m, n, [], !1, null, "5043008e", null).exports;
    },
    12855: (e, t, r) => {
      var n = r(30571);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, r(45346).Z)("48f94190", n, !1, {});
    }
  }
]);
