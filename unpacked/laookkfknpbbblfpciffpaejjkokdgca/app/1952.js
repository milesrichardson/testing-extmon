(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1952],
  {
    92999: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => o });
      var n = i(8081),
        r = i.n(n),
        s = i(23645),
        a = i.n(s)()(r());
      a.push([
        t.id,
        ".base-dropdown-text[data-v-d3fdffb8]{padding:.425rem var(--dropdown-padding);color:var(--color-stop-4);font-size:.8125rem;font-weight:600}.base-dropdown-text.title[data-v-d3fdffb8]{color:var(--color-stop-4);text-transform:uppercase}",
        ""
      ]);
      const o = a;
    },
    12639: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => o });
      var n = i(8081),
        r = i.n(n),
        s = i(23645),
        a = i.n(s)()(r());
      a.push([
        t.id,
        ".touch .link-dropdown[data-v-56b08de7]{opacity:1 !important}.link-list-item[data-v-56b08de7]{--icon-size: 16px;width:100%;height:fit-content;display:flex;position:relative;align-items:center;padding:.25rem var(--app-padding);overflow:hidden;transition:transform var(--a-fast) var(--a-curve);cursor:pointer;gap:.5625rem}.link-list-item.dragging[data-v-56b08de7]{transition:var(--a-default)}.link-list-item .link-title[data-v-56b08de7]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link-list-item .link-dropdown[data-v-56b08de7]{opacity:0;margin-left:auto}.link-list-item .link-dropdown.open[data-v-56b08de7]{opacity:1}.link-list-item .link-dropdown[data-v-56b08de7] .icon{fill:currentcolor}.link-list-item .lock-wrapper[data-v-56b08de7]{display:inline-flex;align-items:center;justify-content:center;padding:5px}.link-list-item[data-v-56b08de7]:hover{background-color:var(--color-stop-1);color:inherit}.link-list-item:hover .link-dropdown[data-v-56b08de7]{opacity:1}.link-list-item.tile[data-v-56b08de7]{--icon-size: 24px;flex-direction:column;padding:.5rem .375rem;border-radius:var(--border-radius);font-size:.8125rem;gap:.3125rem;line-height:1rem}.link-list-item.tile .link-title[data-v-56b08de7]{text-align:center}.link-list-item.tile .link-dropdown[data-v-56b08de7]{position:absolute;top:.125rem;right:.125rem}.link-list-item.tile[data-v-56b08de7] .icon-wrapper::after{--icon-wrapper-size: 21px}.link-list-item.dash[data-v-56b08de7]{color:rgba(255,255,255,.85)}.link-list-item.dash[data-v-56b08de7]:hover{background-color:inherit;color:#fff}.link-list-item.dash[data-v-56b08de7]:not(.tile){padding-right:0;padding-left:var(--dash-side-margin)}@media screen and (max-width: 800px){.link-list-item.dash:not(.tile) .link-title[data-v-56b08de7]{display:none}}",
        ""
      ]);
      const o = a;
    },
    15016: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => o });
      var n = i(8081),
        r = i.n(n),
        s = i(23645),
        a = i.n(s)()(r());
      a.push([
        t.id,
        ".link-favicon-grid[data-v-9a8a2356]{--calculated-icon-size: calc(var(--icon-size) / 2 - (0.125rem / 2) - 0.125rem);width:var(--icon-size);height:var(--icon-size);display:grid;grid-auto-flow:row;grid-template-columns:repeat(2, var(--calculated-icon-size));grid-template-rows:repeat(2, var(--calculated-icon-size));padding:.125rem;border-radius:.3rem;background-color:var(--color-stop-3);gap:.125rem}.dash .link-favicon-grid[data-v-9a8a2356]{background-color:rgba(255,255,255,.25)}.link-favicon[data-v-9a8a2356]{width:var(--calculated-icon-size, var(--icon-size));height:var(--calculated-icon-size, var(--icon-size))}.link-favicon[data-v-9a8a2356] .icon-favicon{width:var(--calculated-icon-size, var(--icon-size));height:var(--calculated-icon-size, var(--icon-size));overflow:hidden;border-radius:.125rem;fill:currentcolor}",
        ""
      ]);
      const o = a;
    },
    835: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => o });
      var n = i(8081),
        r = i.n(n),
        s = i(23645),
        a = i.n(s)()(r());
      a.push([
        t.id,
        ".links-list-item-toast-header[data-v-3bd3c28c]{--icon-size: 24px;display:flex;align-items:center;font-size:1.15rem;gap:.75rem}.links-list-item-toast-header .link-title[data-v-3bd3c28c]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
        ""
      ]);
      const o = a;
    },
    72433: (t, e, i) => {
      "use strict";
      var n,
        r = (n = i(28725)) && "object" == typeof n && "default" in n ? n.default : n;
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
      var a = "undefined" != typeof window;
      function o(t, e) {
        return e.reduce(function (e, i) {
          return t.hasOwnProperty(i) && (e[i] = t[i]), e;
        }, {});
      }
      var l = {},
        d = {},
        c = {},
        p = new (r.extend({
          data: function () {
            return { transports: l, targets: d, sources: c, trackInstances: a };
          },
          methods: {
            open: function (t) {
              if (a) {
                var e = t.to,
                  i = t.from,
                  n = t.passengers,
                  o = t.order,
                  l = void 0 === o ? 1 / 0 : o;
                if (e && i && n) {
                  var d,
                    c = { to: e, from: i, passengers: ((d = n), Array.isArray(d) || "object" === s(d) ? Object.freeze(d) : d), order: l };
                  -1 === Object.keys(this.transports).indexOf(e) && r.set(this.transports, e, []);
                  var p,
                    u = this.$_getTransportIndex(c),
                    h = this.transports[e].slice(0);
                  -1 === u ? h.push(c) : (h[u] = c),
                    (this.transports[e] =
                      ((p = function (t, e) {
                        return t.order - e.order;
                      }),
                      h
                        .map(function (t, e) {
                          return [e, t];
                        })
                        .sort(function (t, e) {
                          return p(t[1], e[1]) || t[0] - e[0];
                        })
                        .map(function (t) {
                          return t[1];
                        })));
                }
              }
            },
            close: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = t.to,
                n = t.from;
              if (i && (n || !1 !== e) && this.transports[i])
                if (e) this.transports[i] = [];
                else {
                  var r = this.$_getTransportIndex(t);
                  if (r >= 0) {
                    var s = this.transports[i].slice(0);
                    s.splice(r, 1), (this.transports[i] = s);
                  }
                }
            },
            registerTarget: function (t, e, i) {
              a &&
                (this.trackInstances && !i && this.targets[t] && console.warn("[portal-vue]: Target ".concat(t, " already exists")),
                this.$set(this.targets, t, Object.freeze([e])));
            },
            unregisterTarget: function (t) {
              this.$delete(this.targets, t);
            },
            registerSource: function (t, e, i) {
              a &&
                (this.trackInstances && !i && this.sources[t] && console.warn("[portal-vue]: source ".concat(t, " already exists")),
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
                i = t.from;
              for (var n in this.transports[e]) if (this.transports[e][n].from === i) return +n;
              return -1;
            }
          }
        }))(l),
        u = 1,
        h = r.extend({
          name: "portal",
          props: {
            disabled: { type: Boolean },
            name: {
              type: String,
              default: function () {
                return String(u++);
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
              p.registerSource(t.name, t);
            });
          },
          mounted: function () {
            this.disabled || this.sendUpdate();
          },
          updated: function () {
            this.disabled ? this.clear() : this.sendUpdate();
          },
          beforeDestroy: function () {
            p.unregisterSource(this.name), this.clear();
          },
          watch: {
            to: function (t, e) {
              e && e !== t && this.clear(e), this.sendUpdate();
            }
          },
          methods: {
            clear: function (t) {
              var e = { from: this.name, to: t || this.to };
              p.close(e);
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
                var i = {
                  from: this.name,
                  to: this.to,
                  passengers:
                    ((t = e),
                    (function (t) {
                      if (Array.isArray(t)) {
                        for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                        return i;
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
                p.open(i);
              } else this.clear();
            }
          },
          render: function (t) {
            var e = this.$slots.default || this.$scopedSlots.default || [],
              i = this.tag;
            return e && this.disabled
              ? e.length <= 1 && this.slim
                ? this.normalizeOwnChildren(e)[0]
                : t(i, [this.normalizeOwnChildren(e)])
              : this.slim
              ? t()
              : t(i, { class: { "v-portal": !0 }, style: { display: "none" }, key: "v-portal-placeholder" });
          }
        }),
        f = r.extend({
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
            return { transports: p.transports, firstRender: !0 };
          },
          created: function () {
            var t = this;
            this.$nextTick(function () {
              p.registerTarget(t.name, t);
            });
          },
          watch: {
            ownTransports: function () {
              this.$emit("change", this.children().length > 0);
            },
            name: function (t, e) {
              p.unregisterTarget(e), p.registerTarget(t, this);
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
            p.unregisterTarget(this.name);
          },
          computed: {
            ownTransports: function () {
              var t = this.transports[this.name] || [];
              return this.multiple ? t : 0 === t.length ? [] : [t[t.length - 1]];
            },
            passengers: function () {
              return (function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t.reduce(function (t, i) {
                  var n = i.passengers[0],
                    r = "function" == typeof n ? n(e) : i.passengers;
                  return t.concat(r);
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
              i = this.children(),
              n = this.transition || this.tag;
            return e
              ? i[0]
              : this.slim && !n
              ? t()
              : t(n, { props: { tag: this.transition && this.tag ? this.tag : void 0 }, class: { "vue-portal-target": !0 } }, i);
          }
        }),
        m = 0,
        g = ["disabled", "name", "order", "slim", "slotProps", "tag", "to"],
        v = ["multiple", "transition"];
      r.extend({
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
              return "mounted_" + String(m++);
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
              if (p.targets[e.name])
                e.bail
                  ? console.warn(
                      "[portal-vue]: Target ".concat(e.name, " is already mounted.\n        Aborting because 'bail: true' is set")
                    )
                  : (this.portalTarget = p.targets[e.name]);
              else {
                var i = e.append;
                if (i) {
                  var n = "string" == typeof i ? i : "DIV",
                    r = document.createElement(n);
                  t.appendChild(r), (t = r);
                }
                var s = o(this.$props, v);
                (s.slim = this.targetSlim),
                  (s.tag = this.targetTag),
                  (s.slotProps = this.targetSlotProps),
                  (s.name = this.to),
                  (this.portalTarget = new f({ el: t, parent: this.$parent || this, propsData: s }));
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
            var e = o(this.$props, g);
            return t(h, { props: e, attrs: this.$attrs, on: this.$listeners, scopedSlots: this.$scopedSlots }, this.$slots.default);
          }
          var i = this.$scopedSlots.manual({ to: this.to });
          return Array.isArray(i) && (i = i[0]), i || t();
        }
      });
      (e.YC = f), (e.Df = p);
    },
    78492: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => s });
      var n = function () {
        var t = this;
        return (0, t._self._c)("p", { class: ["base-dropdown-text", { title: t.isTitle }] }, [t._t("default")], 2);
      };
      n._withStripped = !0;
      const r = { name: "BaseDropdownText", props: { isTitle: { type: Boolean, default: !1 } } };
      i(18359);
      const s = (0, i(51900).Z)(r, n, [], !1, null, "d3fdffb8", null).exports;
    },
    22021: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => y });
      var n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "li",
          {
            class: ["link-list-item", { tile: t.isTile, dash: t.isOnDash }],
            attrs: { "data-test": "list-item", title: t.linkGroupTitle },
            on: { click: t.openLinks, auxclick: t.openLinks }
          },
          [
            e("links-list-item-icon", { attrs: { "link-group": t.linkGroup } }),
            t._v(" "),
            e("span", { staticClass: "link-title" }, [t._v(t._s(t.linkGroup.title))]),
            t._v(" "),
            t.isTeamLink && !t.$admin
              ? e(
                  "div",
                  { staticClass: "link-dropdown lock-wrapper", attrs: { title: "Managed by Team", "data-test": "list-item-lock" } },
                  [e("inline-svg", { staticClass: "icon icon-lock", attrs: { src: i(94784) } })],
                  1
                )
              : e(
                  "base-dropdown",
                  {
                    ref: "link-dropdown",
                    staticClass: "link-dropdown",
                    attrs: { "container-class": t.isOnDash ? "dash" : "app", "data-test": "list-item-dropdown", title: "" },
                    scopedSlots: t._u([
                      {
                        key: "toastHeader",
                        fn: function () {
                          return [e("links-list-item-toast-header", { attrs: { "link-group": t.linkGroup } })];
                        },
                        proxy: !0
                      }
                    ])
                  },
                  [
                    t._v(" "),
                    t.isTeamLink
                      ? e("base-dropdown-text", { attrs: { "is-title": !0, "data-test": "team-link-title" } }, [t._v("Team Link")])
                      : t._e(),
                    t._v(" "),
                    t.isTeamLink || t.isLegacyLink
                      ? t._e()
                      : e(
                          "base-dropdown-option",
                          { attrs: { "data-test": "pin-item" }, on: { click: t.toggleLinkPinned } },
                          [
                            e("inline-svg", { staticClass: "icon icon-pin", attrs: { src: i(25301) } }),
                            t._v(" "),
                            e("span", { staticClass: "text" }, [
                              t._v("\n\t\t\t\t" + t._s(t.linkGroup.pinned ? "Unpin" : "Pin") + "\n\t\t\t")
                            ])
                          ],
                          1
                        ),
                    t._v(" "),
                    !t.isLegacyLink || t.isTeamLink
                      ? e(
                          "base-dropdown-option",
                          { attrs: { "data-test": "edit-item" }, on: { click: t.editLink } },
                          [
                            e("inline-svg", { staticClass: "icon icon-edit", attrs: { src: i(13228) } }),
                            t._v(" "),
                            e("span", { staticClass: "text" }, [t._v("Edit")])
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    t.isTeamLink
                      ? t._e()
                      : e(
                          "base-dropdown-option",
                          { attrs: { "data-test": "delete-item" }, on: { click: t.deleteLink } },
                          [
                            e("inline-svg", { staticClass: "icon icon-trash", attrs: { src: i(9241) } }),
                            t._v(" "),
                            e("span", { staticClass: "text" }, [t._v("Delete")])
                          ],
                          1
                        )
                  ],
                  1
                )
          ],
          1
        );
      };
      n._withStripped = !0;
      var r = i(78492),
        s = i(39226),
        a = i(24749),
        o = i(42223),
        l = i(97021),
        d = i(68099),
        c = i(24960),
        p = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "links-list-item-toast-header" },
            [
              e("links-list-item-icon", { attrs: { "link-group": t.linkGroup } }),
              t._v(" "),
              e("span", { staticClass: "link-title" }, [t._v(t._s(t.linkGroup.title))])
            ],
            1
          );
        };
      p._withStripped = !0;
      const u = {
        name: "LinksListItemToastHeader",
        components: { LinksListItemIcon: d.Z },
        props: { linkGroup: { type: Object, required: !0 } }
      };
      i(99375);
      var h = i(51900);
      const f = (0, h.Z)(u, p, [], !1, null, "3bd3c28c", null).exports;
      var g = i(91488),
        v = i(77140);
      const k = {
        name: "LinksListItem",
        components: {
          LinksListItemToastHeader: f,
          LinksListItemIcon: d.Z,
          BaseDropdown: l.Z,
          BaseDropdownOption: s.Z,
          BaseDropdownText: r.Z
        },
        mixins: [o.Z],
        inject: ["viewStateStore", "itemStore", "capture", "batchCapture"],
        props: {
          linkGroup: { type: Object, required: !0 },
          isTile: { type: Boolean, default: !1 },
          isOnDash: { type: Boolean, default: !1 },
          isTeamLink: { type: Boolean, default: !1 }
        },
        computed: {
          linkGroupTitle() {
            const t = new Set(this.linkGroup.links.map((t) => new URL(t.url).hostname));
            return Array.from(t).join("\n");
          },
          isLegacyLink() {
            return this.linkGroup instanceof g.R;
          }
        },
        methods: {
          openLinks(t) {
            this.batchCapture((this.linkGroup.hasManyLinks ? "tab group" : "link") + " click", {
              is_paid_event: this.linkGroup.hasManyLinks
            });
            let e = m.models.bookmarksSettings.get("openInNewTab") || t.metaKey || "auxclick" === t.type;
            this.linkGroup.links.forEach(({ url: t }) => {
              v.H.tabs.openUrl(t, e), (e = !0);
            });
          },
          async toggleLinkPinned() {
            this.closeLinkDropdown(), await this.itemStore.update(this.linkGroup.id, { pinned: !this.linkGroup.pinned });
          },
          async editLink() {
            if ((this.closeLinkDropdown(), this.$admin && this.isTeamLink)) {
              const t = await c.Z.sendMessage({ handler: "getSid", args: [this.linkGroup.id] });
              m.cmd("window.account.open.login", "team/links?id=" + t.substring(1));
            } else
              await this.viewStateStore.togglePopup(!0),
                this.itemStore.editItem(this.linkGroup.id),
                await this.viewStateStore.setActiveView(a.od.Form);
          },
          async deleteLink() {
            this.closeLinkDropdown(),
              await this.viewStateStore.togglePopup(!0),
              (await this.viewStateStore.setConfirmation({ title: "Are you sure you want to delete this link?" })) &&
                (this.capture((this.linkGroup.hasManyLinks ? "tab group" : "link") + " delete", {
                  is_paid_event: this.linkGroup.hasManyLinks
                }),
                await this.itemStore.deleteLinkGroup(this.linkGroup.id));
          },
          closeLinkDropdown() {
            var t;
            null === (t = this.$refs["link-dropdown"]) || void 0 === t || t.closeDropdown();
          }
        }
      };
      i(9024);
      const y = (0, h.Z)(k, n, [], !1, null, "56b08de7", null).exports;
    },
    68099: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => s });
      var n = function () {
        var t = this,
          e = t._self._c;
        return t.iconSrc
          ? e("div", { staticClass: "link-favicon" }, [e("inline-svg", { staticClass: "icon-favicon", attrs: { src: t.iconSrc } })], 1)
          : t.linkGroup.hasManyLinks
          ? e(
              "div",
              { staticClass: "link-favicon-grid" },
              t._l(t.topFourLinks, function (t) {
                return e("fav-icon", { key: t.id, staticClass: "link-favicon", attrs: { url: t.url } });
              }),
              1
            )
          : e("fav-icon", { staticClass: "link-favicon", attrs: { url: t.linkGroup.links[0].url } });
      };
      n._withStripped = !0;
      const r = {
        name: "LinksListItemIcon",
        components: { FavIcon: i(39134).Z },
        props: { linkGroup: { type: Object, default: null }, iconSrc: { type: String, default: "" } },
        computed: {
          topFourLinks() {
            return this.linkGroup.links.slice(0, 4);
          }
        }
      };
      i(26941);
      const s = (0, i(51900).Z)(r, n, [], !1, null, "9a8a2356", null).exports;
    },
    39134: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => a });
      var n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          [
            t.imgLoading ? e("inline-svg", { staticClass: "icon-favicon", attrs: { src: i(58858) } }) : t._e(),
            t._v(" "),
            e("img", {
              directives: [{ name: "show", rawName: "v-show", value: !t.imgLoading, expression: "!imgLoading" }],
              staticClass: "icon-favicon",
              attrs: { src: t.favicon, draggable: "false" },
              on: {
                load: function (e) {
                  t.imgLoading = !1;
                }
              }
            })
          ],
          1
        );
      };
      n._withStripped = !0;
      var r = i(80809);
      const s = {
          name: "FavIcon",
          props: { url: { type: String, default: "" } },
          data() {
            return { imgLoading: !0, updatedUrl: this.url };
          },
          computed: {
            favicon() {
              return m.utils.getFavIcon(r.Z.ensureUrlScheme(this.updatedUrl));
            }
          },
          watch: {
            url() {
              this.debouncedUrlChange && clearTimeout(this.debouncedUrlChange),
                (this.debouncedUrlChange = setTimeout(() => {
                  this.updatedUrl = this.url;
                }, 300));
            }
          }
        },
        a = (0, i(51900).Z)(s, n, [], !1, null, null, null).exports;
    },
    18359: (t, e, i) => {
      var n = i(92999);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, i(45346).Z)("585b3780", n, !1, {});
    },
    9024: (t, e, i) => {
      var n = i(12639);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, i(45346).Z)("31788606", n, !1, {});
    },
    26941: (t, e, i) => {
      var n = i(15016);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, i(45346).Z)("126bd76c", n, !1, {});
    },
    99375: (t, e, i) => {
      var n = i(835);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, i(45346).Z)("7362fd83", n, !1, {});
    }
  }
]);
