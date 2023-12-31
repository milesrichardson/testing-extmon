(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7744, 9437],
  {
    99437: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => g });
      var n = r(20144),
        o = r(88026),
        s = r(51726),
        i = r.n(s),
        a = r(34952),
        l = r(7838),
        d = r(35174);
      let u = {};
      const c = {
        bind: function (t, e) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (t.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (u[t.dataset.mobileClickHandlerId] = e.value),
            t.addEventListener("click", e.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", u[t.dataset.mobileClickHandlerId]),
            delete u[t.dataset.mobileClickHandlerId],
            delete t.dataset.mobileClickHandlerId,
            delete t.dataset.justBoundMobileClickHandler);
        }
      };
      var p = r(28692),
        h = r(64398),
        f = r(77197);
      n.ZP.use(o.Z, { name: "unreactive" }),
        n.ZP.use(i()),
        n.ZP.use(a.InlineSvgPlugin),
        n.ZP.use(p.og),
        n.ZP.use(f.Z),
        (n.ZP.prototype.$xhr = d.Z),
        (n.ZP.prototype.$e = l.Z),
        n.ZP.directive("mobile-click", c),
        new n.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        n.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: h.Z
        });
      const g = n.ZP;
    },
    3599: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, { default: () => a });
      var n = r(8081),
        o = r.n(n),
        s = r(23645),
        i = r.n(s)()(o());
      i.push([
        t.id,
        ".full-screen-portals[data-v-3c658925]{position:absolute;inset:0 0 0 0}.full-screen-portals .toast-menu-portal[data-v-3c658925]>*{z-index:45}",
        ""
      ]);
      const a = i;
    },
    87026: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, { default: () => a });
      var n = r(8081),
        o = r.n(n),
        s = r(23645),
        i = r.n(s)()(o());
      i.push([
        t.id,
        ".dropdown-portal[data-v-51133c55]>*{z-index:50}.dropdown-portal[data-v-51133c55] .base-dropdown-container.app{--dropdown-padding: calc(var(--app-padding) - 0.375rem);--dropdown-color: var(--color-text);--dropdown-background-color: var(--color-accent-highlight)}.dropdown-portal[data-v-51133c55] .base-dropdown-container.dash{--dropdown-padding: calc(var(--app-padding) - 0.375rem);--dropdown-color: var(--color-text);--dropdown-background-color: var(--color-bg)}",
        ""
      ]);
      const a = i;
    },
    72433: (t, e, r) => {
      "use strict";
      var n,
        o = (n = r(28725)) && "object" == typeof n && "default" in n ? n.default : n;
      function s(t) {
        return (
          (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          s(t)
        );
      }
      var i = "undefined" != typeof window;
      function a(t, e) {
        return e.reduce(function (e, r) {
          return t.hasOwnProperty(r) && (e[r] = t[r]), e;
        }, {});
      }
      var l = {},
        d = {},
        u = {},
        c = new (o.extend({
          data: function () {
            return { transports: l, targets: d, sources: u, trackInstances: i };
          },
          methods: {
            open: function (t) {
              if (i) {
                var e = t.to,
                  r = t.from,
                  n = t.passengers,
                  a = t.order,
                  l = void 0 === a ? 1 / 0 : a;
                if (e && r && n) {
                  var d,
                    u = { to: e, from: r, passengers: ((d = n), Array.isArray(d) || "object" === s(d) ? Object.freeze(d) : d), order: l };
                  -1 === Object.keys(this.transports).indexOf(e) && o.set(this.transports, e, []);
                  var c,
                    p = this.$_getTransportIndex(u),
                    h = this.transports[e].slice(0);
                  -1 === p ? h.push(u) : (h[p] = u),
                    (this.transports[e] =
                      ((c = function (t, e) {
                        return t.order - e.order;
                      }),
                      h
                        .map(function (t, e) {
                          return [e, t];
                        })
                        .sort(function (t, e) {
                          return c(t[1], e[1]) || t[0] - e[0];
                        })
                        .map(function (t) {
                          return t[1];
                        })));
                }
              }
            },
            close: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = t.to,
                n = t.from;
              if (r && (n || !1 !== e) && this.transports[r])
                if (e) this.transports[r] = [];
                else {
                  var o = this.$_getTransportIndex(t);
                  if (o >= 0) {
                    var s = this.transports[r].slice(0);
                    s.splice(o, 1), (this.transports[r] = s);
                  }
                }
            },
            registerTarget: function (t, e, r) {
              i &&
                (this.trackInstances && !r && this.targets[t] && console.warn("[portal-vue]: Target ".concat(t, " already exists")),
                this.$set(this.targets, t, Object.freeze([e])));
            },
            unregisterTarget: function (t) {
              this.$delete(this.targets, t);
            },
            registerSource: function (t, e, r) {
              i &&
                (this.trackInstances && !r && this.sources[t] && console.warn("[portal-vue]: source ".concat(t, " already exists")),
                this.$set(this.sources, t, Object.freeze([e])));
            },
            unregisterSource: function (t) {
              this.$delete(this.sources, t);
            },
            hasTarget: function (t) {
              return !(!this.targets[t] || !this.targets[t][0]);
            },
            hasSource: function (t) {
              return !(!this.sources[t] || !this.sources[t][0]);
            },
            hasContentFor: function (t) {
              return !!this.transports[t] && !!this.transports[t].length;
            },
            $_getTransportIndex: function (t) {
              var e = t.to,
                r = t.from;
              for (var n in this.transports[e]) if (this.transports[e][n].from === r) return +n;
              return -1;
            }
          }
        }))(l),
        p = 1,
        h = o.extend({
          name: "portal",
          props: {
            disabled: { type: Boolean },
            name: {
              type: String,
              default: function () {
                return String(p++);
              }
            },
            order: { type: Number, default: 0 },
            slim: { type: Boolean },
            slotProps: {
              type: Object,
              default: function () {
                return {};
              }
            },
            tag: { type: String, default: "DIV" },
            to: {
              type: String,
              default: function () {
                return String(Math.round(1e7 * Math.random()));
              }
            }
          },
          created: function () {
            var t = this;
            this.$nextTick(function () {
              c.registerSource(t.name, t);
            });
          },
          mounted: function () {
            this.disabled || this.sendUpdate();
          },
          updated: function () {
            this.disabled ? this.clear() : this.sendUpdate();
          },
          beforeDestroy: function () {
            c.unregisterSource(this.name), this.clear();
          },
          watch: {
            to: function (t, e) {
              e && e !== t && this.clear(e), this.sendUpdate();
            }
          },
          methods: {
            clear: function (t) {
              var e = { from: this.name, to: t || this.to };
              c.close(e);
            },
            normalizeSlots: function () {
              return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
            },
            normalizeOwnChildren: function (t) {
              return "function" == typeof t ? t(this.slotProps) : t;
            },
            sendUpdate: function () {
              var t,
                e = this.normalizeSlots();
              if (e) {
                var r = {
                  from: this.name,
                  to: this.to,
                  passengers:
                    ((t = e),
                    (function (t) {
                      if (Array.isArray(t)) {
                        for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
                        return r;
                      }
                    })(t) ||
                      (function (t) {
                        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                          return Array.from(t);
                      })(t) ||
                      (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance");
                      })()),
                  order: this.order
                };
                c.open(r);
              } else this.clear();
            }
          },
          render: function (t) {
            var e = this.$slots.default || this.$scopedSlots.default || [],
              r = this.tag;
            return e && this.disabled
              ? e.length <= 1 && this.slim
                ? this.normalizeOwnChildren(e)[0]
                : t(r, [this.normalizeOwnChildren(e)])
              : this.slim
              ? t()
              : t(r, { class: { "v-portal": !0 }, style: { display: "none" }, key: "v-portal-placeholder" });
          }
        }),
        m = o.extend({
          name: "portalTarget",
          props: {
            multiple: { type: Boolean, default: !1 },
            name: { type: String, required: !0 },
            slim: { type: Boolean, default: !1 },
            slotProps: {
              type: Object,
              default: function () {
                return {};
              }
            },
            tag: { type: String, default: "div" },
            transition: { type: [String, Object, Function] }
          },
          data: function () {
            return { transports: c.transports, firstRender: !0 };
          },
          created: function () {
            var t = this;
            this.$nextTick(function () {
              c.registerTarget(t.name, t);
            });
          },
          watch: {
            ownTransports: function () {
              this.$emit("change", this.children().length > 0);
            },
            name: function (t, e) {
              c.unregisterTarget(e), c.registerTarget(t, this);
            }
          },
          mounted: function () {
            var t = this;
            this.transition &&
              this.$nextTick(function () {
                t.firstRender = !1;
              });
          },
          beforeDestroy: function () {
            c.unregisterTarget(this.name);
          },
          computed: {
            ownTransports: function () {
              var t = this.transports[this.name] || [];
              return this.multiple ? t : 0 === t.length ? [] : [t[t.length - 1]];
            },
            passengers: function () {
              return (function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t.reduce(function (t, r) {
                  var n = r.passengers[0],
                    o = "function" == typeof n ? n(e) : r.passengers;
                  return t.concat(o);
                }, []);
              })(this.ownTransports, this.slotProps);
            }
          },
          methods: {
            children: function () {
              return 0 !== this.passengers.length
                ? this.passengers
                : this.$scopedSlots.default
                ? this.$scopedSlots.default(this.slotProps)
                : this.$slots.default || [];
            },
            noWrapper: function () {
              var t = this.slim && !this.transition;
              return (
                t &&
                  this.children().length > 1 &&
                  console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),
                t
              );
            }
          },
          render: function (t) {
            var e = this.noWrapper(),
              r = this.children(),
              n = this.transition || this.tag;
            return e
              ? r[0]
              : this.slim && !n
              ? t()
              : t(n, { props: { tag: this.transition && this.tag ? this.tag : void 0 }, class: { "vue-portal-target": !0 } }, r);
          }
        }),
        f = 0,
        g = ["disabled", "name", "order", "slim", "slotProps", "tag", "to"],
        v = ["multiple", "transition"];
      o.extend({
        name: "MountingPortal",
        inheritAttrs: !1,
        props: {
          append: { type: [Boolean, String] },
          bail: { type: Boolean },
          mountTo: { type: String, required: !0 },
          disabled: { type: Boolean },
          name: {
            type: String,
            default: function () {
              return "mounted_" + String(f++);
            }
          },
          order: { type: Number, default: 0 },
          slim: { type: Boolean },
          slotProps: {
            type: Object,
            default: function () {
              return {};
            }
          },
          tag: { type: String, default: "DIV" },
          to: {
            type: String,
            default: function () {
              return String(Math.round(1e7 * Math.random()));
            }
          },
          multiple: { type: Boolean, default: !1 },
          targetSlim: { type: Boolean },
          targetSlotProps: {
            type: Object,
            default: function () {
              return {};
            }
          },
          targetTag: { type: String, default: "div" },
          transition: { type: [String, Object, Function] }
        },
        created: function () {
          if ("undefined" != typeof document) {
            var t = document.querySelector(this.mountTo);
            if (t) {
              var e = this.$props;
              if (c.targets[e.name])
                e.bail
                  ? console.warn(
                      "[portal-vue]: Target ".concat(e.name, " is already mounted.\n        Aborting because 'bail: true' is set")
                    )
                  : (this.portalTarget = c.targets[e.name]);
              else {
                var r = e.append;
                if (r) {
                  var n = "string" == typeof r ? r : "DIV",
                    o = document.createElement(n);
                  t.appendChild(o), (t = o);
                }
                var s = a(this.$props, v);
                (s.slim = this.targetSlim),
                  (s.tag = this.targetTag),
                  (s.slotProps = this.targetSlotProps),
                  (s.name = this.to),
                  (this.portalTarget = new m({ el: t, parent: this.$parent || this, propsData: s }));
              }
            } else console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
          }
        },
        beforeDestroy: function () {
          var t = this.portalTarget;
          if (this.append) {
            var e = t.$el;
            e.parentNode.removeChild(e);
          }
          t.$destroy();
        },
        render: function (t) {
          if (!this.portalTarget) return console.warn("[portal-vue] Target wasn't mounted"), t();
          if (!this.$scopedSlots.manual) {
            var e = a(this.$props, g);
            return t(h, { props: e, attrs: this.$attrs, on: this.$listeners, scopedSlots: this.$scopedSlots }, this.$slots.default);
          }
          var r = this.$scopedSlots.manual({ to: this.to });
          return Array.isArray(r) && (r = r[0]), r || t();
        }
      });
      (e.YC = m), (e.Df = c);
    },
    84428: (t, e, r) => {
      "use strict";
      r.r(e);
      var n = r(99437),
        o = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "full-screen-portals" },
            [
              e("portal-target", {
                staticClass: "toast-menu-portal",
                attrs: { "data-test": t.TOAST_MENU_PORTAL_DATA_TEST, name: "toast-menu-portal" }
              }),
              t._v(" "),
              e("dropdown-portal")
            ],
            1
          );
        };
      o._withStripped = !0;
      const s = { 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 };
      var i = r(72433),
        a = function () {
          return (0, this._self._c)("portal-target", {
            staticClass: "dropdown-portal",
            attrs: { "data-test": this.DROPDOWN_PORTAL_DATA_TEST, name: "dropdown-portal", multiple: "" }
          });
        };
      a._withStripped = !0;
      const l = {
        name: "DropdownPortal",
        components: { PortalTarget: i.YC },
        unreactive: () => ({ DROPDOWN_PORTAL_DATA_TEST: "dropdown-portal" }),
        mounted() {
          this.setUpDropdownListeners();
        },
        destroyed() {
          this.removeDropdownListeners();
        },
        methods: {
          setUpDropdownListeners() {
            window.addEventListener("dragstart", this.emitDropdownCloseEvent),
              window.addEventListener("wheel", this.emitDropdownCloseEvent),
              window.addEventListener("touchmove", this.emitDropdownCloseEvent),
              window.addEventListener("keydown", this.checkScrollKeyAndEmitCloseEvent);
          },
          removeDropdownListeners() {
            window.removeEventListener("dragstart", this.emitDropdownCloseEvent),
              window.removeEventListener("wheel", this.emitDropdownCloseEvent),
              window.removeEventListener("touchmove", this.emitDropdownCloseEvent),
              window.removeEventListener("keydown", this.checkScrollKeyAndEmitCloseEvent);
          },
          emitDropdownCloseEvent(t) {
            this.$e.$emit("dropdown:close", t);
          },
          checkScrollKeyAndEmitCloseEvent(t) {
            s[t.keyCode] && this.emitDropdownCloseEvent(t);
          }
        }
      };
      r(89572);
      var d = r(51900);
      const u = {
        name: "FullScreenPortals",
        components: { DropdownPortal: (0, d.Z)(l, a, [], !1, null, "51133c55", null).exports, PortalTarget: i.YC },
        unreactive: () => ({ TOAST_MENU_PORTAL_DATA_TEST: "dropdown-portal" })
      };
      r(82125);
      const c = (0, d.Z)(u, o, [], !1, null, "3c658925", null).exports;
      new n.Z({ render: (t) => t(c) }).$mount(".full-screen-portals");
    },
    82125: (t, e, r) => {
      var n = r(3599);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, r(45346).Z)("08fb1950", n, !1, {});
    },
    89572: (t, e, r) => {
      var n = r(87026);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, r(45346).Z)("1678b740", n, !1, {});
    }
  }
]);
