(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3498],
  {
    35630: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => r });
      var n = o(8081),
        i = o.n(n),
        a = o(23645),
        s = o.n(a)()(i());
      s.push([
        t.id,
        ".base-dropdown-container[data-v-3ac0acf8]{--dropdown-x: var(--5879961a);--dropdown-y: var(--7f4a7a0e);--nipple-displacement: var(--490b881d);--nipple-color: var(--dropdown-background-color);--dropdown-window-edge-padding: var(--d0a06ce4);--dropdown-window-width: calc(var(--08aa0252) - var(--dropdown-window-edge-padding) * 2);width:var(--034215fe);min-width:min(var(--dropdown-window-width),var(--6cef6579));max-width:min(var(--dropdown-window-width),var(--5263fcb2));position:absolute;transform:translate3d(var(--dropdown-x), var(--dropdown-y), 0);outline:none;color:var(--dropdown-color);text-shadow:none}.base-dropdown-transition-fade-enter-active[data-v-3ac0acf8],.base-dropdown-transition-fade-leave-active[data-v-3ac0acf8]{transition:opacity .1s ease}.base-dropdown-transition-fade-enter[data-v-3ac0acf8],.base-dropdown-transition-fade-leave-to[data-v-3ac0acf8]{opacity:0}",
        ""
      ]);
      const r = s;
    },
    25993: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => r });
      var n = o(8081),
        i = o.n(n),
        a = o(23645),
        s = o.n(a)()(i());
      s.push([
        t.id,
        ".base-dropdown-content[data-v-2af91074]{height:100%;max-height:60vh;display:flex;position:relative;flex-direction:column;padding:.375rem 0;overflow:auto;border-radius:var(--border-radius);background-color:var(--dropdown-background-color);box-shadow:0 1px 8px rgba(0,0,0,.25);color:var(--dropdown-color);font-size:.875rem;font-weight:400}",
        ""
      ]);
      const r = s;
    },
    89907: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => r });
      var n = o(8081),
        i = o.n(n),
        a = o(23645),
        s = o.n(a)()(i());
      s.push([
        t.id,
        ".base-dropdown-option[data-v-366d5714]{display:flex;align-items:center;padding:.375rem var(--dropdown-padding);outline:none;cursor:pointer;gap:8px}.base-dropdown-option.between[data-v-366d5714]{justify-content:space-between}.base-dropdown-option.end[data-v-366d5714]{justify-content:end}.base-dropdown-option.disabled[data-v-366d5714]{opacity:var(--opacity-stop-5);pointer-events:none}.base-dropdown-option[data-v-366d5714]:hover,.base-dropdown-option.active[data-v-366d5714]{background-color:var(--color-stop-2)}.base-dropdown-option[data-v-366d5714] .icon{display:flex;flex-shrink:0;align-items:center;justify-content:center;opacity:var(--opacity-stop-5)}",
        ""
      ]);
      const r = s;
    },
    51491: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => r });
      var n = o(8081),
        i = o.n(n),
        a = o(23645),
        s = o.n(a)()(i());
      s.push([
        t.id,
        "\n/* Ensures icon has height before svg loads */\n\n/*\nTODO: apply this to icon-wrapper in general. This would break existing size overrides,\n    so we'd need to ensure all icons in wrappers have the --icons-size override targeting the wrapper\n*/\n.more-toggle[data-v-00a045c2] {\n\t--wrapper-size: calc(var(--icon-size) + (var(--padding) * 2));\n\twidth: var(--wrapper-size);\n\theight: var(--wrapper-size);\n}\n",
        ""
      ]);
      const r = s;
    },
    5910: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => r });
      var n = o(8081),
        i = o.n(n),
        a = o(23645),
        s = o.n(a)()(i());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n/* TODO: Update to SCSS and then remove the legacy component by using this updated version */\n.toast-menu-container[data-v-23612b4f] { position: absolute; inset: 0;\n}\n.toast-menu-content[data-v-23612b4f] { --toast-padding: calc(var(--app-padding) - 3px); --dropdown-padding: var(--toast-padding); --dropdown-background-color: none; background-color: var(--color-bg); border-radius: var(--border-radius) var(--border-radius) 0 0; color: var(--color-text); position: absolute; bottom: 0; left: 0; right: 0;\n}\n.toast-menu-content > *[data-v-23612b4f]:not(.toast-header):first-child { padding-top: calc(var(--app-padding) / 2);\n}\n.toast-header[data-v-23612b4f] { padding: var(--toast-padding); text-align: left;\n}\n[data-v-23612b4f] .toast-title { line-height: 1.25;\n}\n[data-v-23612b4f] .toast-source { margin-top: 4px; opacity: 0.7; font-size: 0.75rem; font-weight: 600;\n}\n.toast-list[data-v-23612b4f] li { max-width: 100% !important;\n}\n.header-line[data-v-23612b4f] { margin: 0 0 calc(var(--toast-padding) / 4) !important;\n}\n.section-title[data-v-23612b4f] { margin: var(--toast-padding); margin-bottom: 5px; opacity: 0.95; font-size: 12px; font-weight: 700; line-height: 1.2; text-align: left; text-transform: uppercase;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.toast-menu-content .line[data-v-23612b4f] { height: 1px; margin: 3px var(--toast-padding); background: var(--border-color);\n}\n[data-v-23612b4f] .dropdown-list-item { padding-right: var(--toast-padding); padding-left: var(--toast-padding);\n}\n.button-close[data-v-23612b4f] { --color-text: hsl(var(--color-base))!important; margin: var(--toast-padding); margin-top: calc(var(--toast-padding) - 8px); padding: 6px; padding-bottom: 5px; display: block; background: var(--border-color-low) !important; color: var(--color-text) !important; font-size: 12px; line-height: 1.2; text-align: center;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.button-close[data-v-23612b4f]:active { background: var(--border-color) !important;\n}\n.button-label[data-v-23612b4f] { opacity: 0.8;\n}\n.toast-menu-overlay[data-v-23612b4f] { position: absolute; background-color: hsla(0deg 0% 0% / var(--opacity-stop-4)); inset: 0;\n}\n\n/* Multiple selectors are required here because the toast menu and the overlay both have different animations */\n/* Separate transitions cannot be used because they will not be considered when sent through a portal */\n/* Duration on the transition component must match the transition duration set here */\n[data-v-23612b4f]:is(.toast-menu-enter-active, .toast-menu-leave-active) :is(.toast-menu-content, .toast-menu-overlay) { transition: all 0.2s ease;\n}\n:is(.toast-menu-enter, .toast-menu-leave-to) .toast-menu-content[data-v-23612b4f]  { transform: translateY(100%);\n}\n:is(.toast-menu-enter, .toast-menu-leave-to) .toast-menu-overlay[data-v-23612b4f]  { opacity: 0;\n}\n",
        ""
      ]);
      const r = s;
    },
    55879: (t, e, o) => {
      "use strict";
      var n;
      o.d(e, {
        G1: () => r,
        P4: () => u,
        R8: () => p,
        Yu: () => c,
        bQ: () => s,
        ir: () => n,
        mu: () => d,
        oA: () => a,
        p0: () => l,
        yN: () => i
      }),
        (function (t) {
          (t.Top = "top"),
            (t.Right = "right"),
            (t.Bottom = "bottom"),
            (t.Left = "left"),
            (t.OverlayTop = "overlayTop"),
            (t.OverlayBottom = "overlayBottom");
        })(n || (n = {}));
      const i = {
        [n.Top]: n.Bottom,
        [n.Right]: n.Left,
        [n.Bottom]: n.Top,
        [n.Left]: n.Right,
        [n.OverlayTop]: n.OverlayBottom,
        [n.OverlayBottom]: n.OverlayTop
      };
      var a;
      !(function (t) {
        (t.Left = "left"), (t.Right = "right"), (t.Center = "center");
      })(a || (a = {}));
      const s = { [a.Right]: a.Left, [a.Left]: a.Right, [a.Center]: a.Center },
        r = 8,
        d = 4,
        l = 0,
        p = 7,
        c = 8;
      var u;
      !(function (t) {
        (t.Start = "start"), (t.Between = "between"), (t.End = "end");
      })(u || (u = {}));
    },
    76327: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => f });
      var n = function () {
        var t = this,
          e = t._self._c;
        return e("portal-toggle", {
          ref: "portal-toggle",
          staticClass: "base-dropdown",
          attrs: {
            id: t.uuid,
            "portal-target-name": t.useDropdownContainer ? "dropdown-portal" : "toast-menu-portal",
            "disable-click-outside": t.disableClickOutside,
            disabled: t.disabled,
            hover: t.hover
          },
          on: {
            toggle: function (e) {
              return t.$emit("toggle", e);
            }
          },
          scopedSlots: t._u(
            [
              {
                key: "toggle",
                fn: function () {
                  return [t._t("toggle")];
                },
                proxy: !0
              },
              {
                key: "content",
                fn: function ({ target: o, close: n, mouseLeave: i, mouseEnter: a }) {
                  return [
                    t.useDropdownContainer
                      ? e(
                          "base-dropdown-container",
                          t._b(
                            {
                              key: t.uuid,
                              ref: "dropdown-container",
                              class: t.containerClass,
                              attrs: { "close-dropdown": n, target: o },
                              on: { mouseleave: i, mouseenter: a }
                            },
                            "base-dropdown-container",
                            t.$props,
                            !1
                          ),
                          [
                            t._t("contentOverride", function () {
                              return [
                                e("base-dropdown-content", { attrs: { "data-test": t.containerDataTest || void 0 } }, [t._t("default")], 2)
                              ];
                            })
                          ],
                          2
                        )
                      : e(
                          "toast-menu-container",
                          {
                            class: t.containerClass,
                            attrs: { "close-toast": n },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "header",
                                  fn: function () {
                                    return [t._t("toastHeader")];
                                  },
                                  proxy: !0
                                }
                              ],
                              null,
                              !0
                            )
                          },
                          [
                            t._v(" "),
                            t._t("contentOverride", function () {
                              return [t._t("default")];
                            })
                          ],
                          2
                        )
                  ];
                }
              }
            ],
            null,
            !0
          )
        });
      };
      n._withStripped = !0;
      var i = o(40063),
        a = o(3754),
        s = function () {
          var t = this,
            e = t._self._c;
          return e(
            t.tag,
            {
              directives: [
                { name: "click-outside", rawName: "v-click-outside", value: t.clickOutsideHandler, expression: "clickOutsideHandler" }
              ],
              ref: "toggle",
              tag: "component",
              staticClass: "portal-toggle",
              class: [{ open: t.contentOpen }],
              on: {
                click: function (e) {
                  return e.stopPropagation(), t.toggleContent.apply(null, arguments);
                },
                mouseenter: function (e) {
                  return e.stopPropagation(), t.mouseEnterHandler.apply(null, arguments);
                },
                mouseleave: function (e) {
                  return e.stopPropagation(), t.mouseLeaveHandler.apply(null, arguments);
                }
              }
            },
            [
              t._t("toggle", function () {
                return [
                  e(
                    "div",
                    { staticClass: "icon-wrapper more-toggle" },
                    [e("inline-svg", { staticClass: "icon icon-ellipsis", attrs: { src: o(49710) } })],
                    1
                  )
                ];
              })
            ],
            2
          );
        };
      s._withStripped = !0;
      var r = o(72433);
      const d = {
        name: "PortalToggle",
        directives: { ClickOutside: i.Z },
        props: {
          tag: { type: String, default: "div" },
          id: { type: String, required: !0 },
          portalTargetName: { type: String, required: !0 },
          disableClickOutside: { type: Boolean, default: !1 },
          disabled: { type: Boolean, default: !1 },
          hover: { type: Boolean, default: !1 },
          hoverContent: { type: Boolean, default: !0 },
          hoverHideContentDelay: { type: Number, default: 200 }
        },
        emits: ["toggle"],
        data: () => ({ contentOpen: !1 }),
        computed: {
          clickOutsideHandler() {
            return this.disableClickOutside ? () => {} : this.closeContent;
          },
          mouseEnterHandler() {
            return this.hover ? this.openContent : () => {};
          },
          mouseLeaveHandler() {
            return this.hover ? (this.hoverContent ? this.createMouseLeaveTimeout : this.closeContent) : () => {};
          },
          contentMouseLeaveHandler() {
            return this.hover ? this.closeUnlessMouseInToggle : () => {};
          }
        },
        destroyed() {
          this.closeContentInPortalTarget(), this.$emit("toggle", !1);
        },
        updated() {
          this.contentOpen ? this.openContentInPortalTarget() : this.closeContentInPortalTarget();
        },
        methods: {
          toggleContent() {
            this.disabled || ((this.contentOpen = !this.contentOpen), this.$emit("toggle", this.contentOpen));
          },
          closeContent() {
            (this.contentOpen = !1), this.$emit("toggle", !1);
          },
          openContent() {
            this.disabled || (this.clearToggleAndContentMouseLeaveTimeout(), (this.contentOpen = !0), this.$emit("toggle", !0));
          },
          openContentInPortalTarget() {
            var t, e;
            this.$refs.toggle.children.length > 1 &&
              console.warn(`[PORTAL-TOGGLE: ${this.portalTargetName}] There is more than one toggle child! Only the first will be used.`);
            const o =
              null === (t = (e = this.$scopedSlots).content) || void 0 === t
                ? void 0
                : t.call(e, {
                    close: this.closeContent,
                    mouseLeave: this.contentMouseLeaveHandler,
                    mouseEnter: this.clearToggleAndContentMouseLeaveTimeout,
                    target: this.$refs.toggle.children[0]
                  });
            if (o.length <= 0) throw new Error(`[PORTAL-TOGGLE: ${this.portalTargetName}] Slot "content" does not exist!`);
            if (!r.Df.hasTarget(this.portalTargetName))
              throw new Error(`[PORTAL-TOGGLE: ${this.portalTargetName}] Portal "${this.portalTargetName}" does not exist!`);
            r.Df.open({ to: this.portalTargetName, from: `${this.portalTargetName}-${this.id}`, passengers: o });
          },
          closeContentInPortalTarget() {
            r.Df.close({ to: this.portalTargetName, from: `${this.portalTargetName}-${this.id}` });
          },
          closeUnlessMouseInToggle(t) {
            this.$refs.toggle.contains(t.relatedTarget) || this.createContentMouseLeaveTimeout();
          },
          createMouseLeaveTimeout() {
            this.mouseInContentTimeout = setTimeout(this.closeContent, this.hoverHideContentDelay);
          },
          createContentMouseLeaveTimeout() {
            this.mouseOutContentTimeout = setTimeout(this.closeContent, this.hoverHideContentDelay);
          },
          clearToggleAndContentMouseLeaveTimeout() {
            clearTimeout(this.mouseOutContentTimeout), clearTimeout(this.mouseInContentTimeout);
          }
        }
      };
      o(55722);
      var l = o(51900);
      const p = (0, l.Z)(d, s, [], !1, null, "00a045c2", null).exports;
      var c = function () {
        var t = this,
          e = t._self._c;
        return e("transition", { attrs: { name: "toast-menu", duration: "200", appear: "" } }, [
          e(
            "div",
            {
              staticClass: "toast-menu-container reset-app-styles",
              on: {
                mousedown: function (t) {
                  t.stopPropagation();
                },
                mouseup: function (t) {
                  t.stopPropagation();
                }
              }
            },
            [
              e("div", { staticClass: "toast-menu-overlay", on: { click: t.closeToast } }),
              t._v(" "),
              e(
                "div",
                { staticClass: "toast-menu-content", attrs: { "data-test": "toast" } },
                [
                  t.hasHeader()
                    ? [
                        e("div", { staticClass: "toast-header" }, [t._t("header")], 2),
                        t._v(" "),
                        e("div", { staticClass: "line header-line" })
                      ]
                    : t._e(),
                  t._v(" "),
                  t.sectionTitle ? e("div", { staticClass: "section-title" }, [t._v(t._s(t.sectionTitle))]) : t._e(),
                  t._v(" "),
                  e("ul", { staticClass: "toast-list", attrs: { "data-test": "toast-options" } }, [t._t("default")], 2),
                  t._v(" "),
                  e("div", { staticClass: "button button-close", on: { click: t.closeToast } }, [
                    e("span", { staticClass: "button-label" }, [t._v("Close")])
                  ])
                ],
                2
              )
            ]
          )
        ]);
      };
      c._withStripped = !0;
      const u = {
        name: "ToastMenuContainer",
        props: {
          dataOb: { type: String, default: "" },
          sectionTitle: { type: String, default: "" },
          closeToast: { type: Function, required: !0 }
        },
        methods: {
          hasHeader() {
            return !!this.$slots.header;
          }
        }
      };
      o(87970);
      const h = (0, l.Z)(u, c, [], !1, null, "23612b4f", null).exports;
      var g = o(84315);
      const v = {
          name: "BaseDropdown",
          components: { BaseDropdownContent: o(2256).Z, ToastMenuContainer: h, BaseDropdownContainer: a.Z, PortalToggle: p },
          directives: { ClickOutside: i.Z },
          props: {
            tag: p.props.tag,
            disabled: p.props.disabled,
            disableClickOutside: p.props.disableClickOutside,
            hover: p.props.hover,
            containerClass: { type: String, default: "app" },
            useToastMobile: { type: Boolean, default: !0 },
            containerDataTest: { type: String, default: "" },
            position: a.Z.props.position,
            positionOffset: a.Z.props.positionOffset,
            alignment: a.Z.props.alignment,
            alignmentOffset: a.Z.props.alignmentOffset,
            nipple: a.Z.props.nipple,
            nippleAlignmentOffset: a.Z.props.nippleAlignmentOffset,
            minWidth: a.Z.props.minWidth,
            width: a.Z.props.width,
            maxWidth: a.Z.props.maxWidth,
            disableCloseEvent: a.Z.props.disableCloseEvent,
            windowEdgePadding: a.Z.props.windowEdgePadding,
            scrollTarget: a.Z.props.scrollTarget,
            boundScrollX: a.Z.props.boundScrollX,
            boundScrollY: a.Z.props.boundScrollY
          },
          emits: ["toggle"],
          setup: () => ({ uuid: (0, g.uuidv4)() }),
          computed: {
            useDropdownContainer() {
              return !this.$touch || !this.useToastMobile;
            }
          },
          methods: {
            closeDropdown() {
              this.$refs["portal-toggle"].closeContent();
            },
            openDropdown() {
              this.$refs["portal-toggle"].openContent();
            },
            forceUpdateDropdownPosition() {
              var t;
              null === (t = this.$refs["dropdown-container"]) || void 0 === t || t.onResize();
            }
          }
        },
        f = (0, l.Z)(v, n, [], !1, null, null, null).exports;
    },
    3754: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => u });
      var n = function () {
        var t = this,
          e = t._self._c;
        return e("transition", { attrs: { name: "base-dropdown-transition-fade", appear: "" } }, [
          e(
            "div",
            t._g(
              {
                directives: [{ name: "resize-sensor", rawName: "v-resize-sensor", value: t.onResize, expression: "onResize" }],
                ref: "dropdownContainer",
                staticClass: "base-dropdown-container reset-app-styles",
                class: { [t.nippleClass]: t.nippleVisible },
                on: {
                  mousedown: function (t) {
                    t.stopPropagation();
                  },
                  mouseup: function (t) {
                    t.stopPropagation();
                  },
                  wheel: function (t) {
                    t.stopPropagation();
                  },
                  touchmove: function (t) {
                    t.stopPropagation();
                  },
                  keydown: function (t) {
                    t.stopPropagation();
                  }
                }
              },
              t.$listeners
            ),
            [t._t("default")],
            2
          )
        ]);
      };
      n._withStripped = !0;
      var i = o(55879),
        a = o(96046),
        s = o(61706),
        r = o(20144);
      const d = {
          name: "BaseDropdownContainer",
          directives: { ResizeSensor: s.Z },
          provide() {
            return { closeDropdown: this.closeDropdown };
          },
          props: {
            target: { type: Element, default: void 0 },
            scrollTarget: { type: Element, default: void 0 },
            boundScrollX: { type: Boolean, default: !1 },
            boundScrollY: { type: Boolean, default: !0 },
            position: { type: String, default: i.ir.Bottom },
            positionOffset: { type: Number, default: i.mu },
            alignment: { type: String, default: i.oA.Left },
            alignmentOffset: { type: Number, default: i.p0 },
            closeDropdown: { type: Function, required: !0 },
            nipple: { type: Boolean, default: !0 },
            nippleAlignmentOffset: { type: Number, default: i.Yu },
            minWidth: { type: String, default: "160px" },
            width: { type: String, default: "" },
            maxWidth: { type: String, default: "100vw" },
            windowEdgePadding: { type: Number, default: i.G1 },
            disableCloseEvent: { type: Boolean, default: !1 }
          },
          data() {
            return {
              x: 0,
              y: 0,
              height: "",
              nippleDisplacement: 0,
              nipplePosition: this.position,
              nippleVisible: this.nipple,
              maxWindowWidth: "100vw"
            };
          },
          computed: {
            windowDimensions: () => a.Z.windowDimensions,
            nippleClass() {
              return `nipple nipple-${i.yN[this.nipplePosition]}-left`;
            }
          },
          watch: {
            windowDimensions: {
              async handler() {
                await this.$nextTick(), await this.$nextTick(), this.onResize();
              },
              deep: !0,
              immediate: !0
            }
          },
          mounted() {
            this.setupScrollTarget(this.scrollTarget), this.disableCloseEvent || this.$e.$on("dropdown:close", this.closeDropdown);
          },
          destroyed() {
            this.destroyScrollTarget(this.scrollTarget), this.disableCloseEvent || this.$e.$off("dropdown:close");
          },
          updated() {
            this.onResize();
          },
          methods: {
            onResize() {
              var t;
              if (!this.target || !this.$refs.dropdownContainer) return void this.closeDropdown();
              const e = this.target.getBoundingClientRect(),
                o = this.$refs.dropdownContainer.getBoundingClientRect(),
                n = null === (t = this.scrollTarget) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                [i, a, s, r] = this.getUpdatedCoordinatesPositionAlignment(e, o, n),
                d = this.getUpdatedNippleDisplacement(e, i, a, s);
              (this.x = i),
                (this.y = a),
                (this.nippleDisplacement = d),
                (this.nipplePosition = s),
                (this.nippleVisible = r),
                (this.maxWindowWidth = n ? n.width + "px" : "100vw");
            },
            calculateCoordinates(t, e, o, n) {
              let a = 0,
                s = 0;
              const r =
                (this.nipple && this.position !== i.ir.OverlayTop && this.position !== i.ir.OverlayBottom
                  ? this.nippleAlignmentOffset
                  : 0) - this.alignmentOffset;
              if (
                (o === i.ir.Top
                  ? ((a = t.x - r), (s = t.y - e.height - (this.positionOffset + i.R8)))
                  : o === i.ir.Right
                  ? ((a = t.x + t.width + (this.positionOffset + i.R8)), (s = t.y - r))
                  : o === i.ir.Bottom
                  ? ((a = t.x - r), (s = t.y + t.height + (this.positionOffset + i.R8)))
                  : o === i.ir.Left
                  ? ((a = t.x - e.width - (this.positionOffset + i.R8)), (s = t.y - r))
                  : o === i.ir.OverlayTop
                  ? ((a = t.x - r), (s = t.y - this.positionOffset))
                  : o === i.ir.OverlayBottom && ((a = t.x - r), (s = t.y - e.height + t.height - this.positionOffset)),
                n === i.oA.Right)
              )
                switch (o) {
                  case i.ir.Top:
                  case i.ir.Bottom:
                  case i.ir.OverlayTop:
                  case i.ir.OverlayBottom:
                    a -= e.width - t.width - 2 * r;
                    break;
                  case i.ir.Right:
                  case i.ir.Left:
                    s -= e.height - t.height - 2 * r;
                }
              else if (n === i.oA.Center)
                switch (o) {
                  case i.ir.Top:
                  case i.ir.Bottom:
                  case i.ir.OverlayTop:
                  case i.ir.OverlayBottom:
                    a -= e.width / 2 - t.width / 2 - r;
                    break;
                  case i.ir.Right:
                  case i.ir.Left:
                    s -= e.height / 2 - t.height / 2 - r;
                }
              return [a, s];
            },
            getWindowMinMax(t) {
              let e = this.windowEdgePadding,
                o = this.windowEdgePadding,
                n = this.windowDimensions.width - this.windowEdgePadding,
                i = this.windowDimensions.height - this.windowEdgePadding;
              return (
                this.scrollTarget &&
                  (this.boundScrollX || this.boundScrollY) &&
                  (this.boundScrollX && ((e = t.left + this.windowEdgePadding), (n = t.right - this.windowEdgePadding)),
                  this.boundScrollY && ((o = t.top + this.windowEdgePadding), (i = t.bottom - this.windowEdgePadding))),
                [e, o, n, i]
              );
            },
            getBoundedCoordinatesWithinWindowMinMax(t, e, o, n, a) {
              let s = this.nipple;
              const [r, d, l, p] = this.getWindowMinMax(n),
                c = this.boundScrollX && (a === i.ir.Left || a === i.ir.Right),
                u = this.boundScrollY && (a === i.ir.Top || a === i.ir.Bottom);
              return (
                t < r ? ((t = r), c && (s = !1)) : t + o.width > l && ((t = l - o.width), c && (s = !1)),
                e < d ? ((e = d), u && (s = !1)) : e + o.height > p && ((e = p - o.height), u && (s = !1)),
                [t, e, s]
              );
            },
            getOppositePositionAndAlignment(t, e, o, n, a) {
              let s = this.position,
                r = this.alignment;
              const [d, l, p, c] = this.getWindowMinMax(a);
              return (
                (e < l || e + n > c) &&
                  (this.position === i.ir.Top || this.position === i.ir.Bottom ? (s = i.yN[this.position]) : (r = i.bQ[this.alignment])),
                (t < d || t + o > p) &&
                  (this.position === i.ir.Left || this.position === i.ir.Right ? (s = i.yN[this.position]) : (r = i.bQ[this.alignment])),
                [s, r]
              );
            },
            getUpdatedCoordinatesPositionAlignment(t, e, o) {
              const [n, i] = this.calculateCoordinates(t, e, this.position, this.alignment, !1),
                [a, s, r, d] = this.getWindowMinMax(o);
              if (n > a && i > s && n + e.width < r && i + e.height < d) return [n, i, this.position, this.nipple];
              const [l, p] = this.getOppositePositionAndAlignment(n, i, e.width, e.height, o),
                [c, u] = this.calculateCoordinates(t, e, l, p, !0);
              if (c < a || u < s || c + e.width > r || u + e.height > d) {
                const [t, a, s] = this.getBoundedCoordinatesWithinWindowMinMax(n, i, e, o, this.position);
                return [t, a, this.position, s];
              }
              const [h, g, v] = this.getBoundedCoordinatesWithinWindowMinMax(c, u, e, o, l);
              return [h, g, l, v];
            },
            getUpdatedNippleDisplacement(t, e, o, n) {
              let a = 0;
              const s = t.width / 2 - i.R8,
                r = t.height / 2 - i.R8;
              return (
                n === i.ir.Top || n === i.ir.Bottom
                  ? (a = t.left - e + s + this.alignmentOffset)
                  : (n !== i.ir.Right && n !== i.ir.Left) || (a = t.top - o + r + this.alignmentOffset),
                a
              );
            },
            setupScrollTarget(t) {
              null == t || t.addEventListener("scroll", this.onResize);
            },
            destroyScrollTarget(t) {
              null == t || t.removeEventListener("scroll", this.onResize);
            }
          }
        },
        l = () => {
          (0, r.sj)((t, e) => ({
            "5879961a": t.x + "px",
            "7f4a7a0e": t.y + "px",
            "490b881d": t.nippleDisplacement + "px",
            d0a06ce4: t.windowEdgePadding + "px",
            "08aa0252": t.maxWindowWidth,
            "034215fe": t.width,
            "6cef6579": t.minWidth,
            "5263fcb2": t.maxWidth
          }));
        },
        p = d.setup;
      d.setup = p ? (t, e) => (l(), p(t, e)) : l;
      const c = d;
      o(85517);
      const u = (0, o(51900).Z)(c, n, [], !1, null, "3ac0acf8", null).exports;
    },
    2256: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => i });
      var n = function () {
        return (0, this._self._c)("div", { staticClass: "base-dropdown-content" }, [this._t("default")], 2);
      };
      n._withStripped = !0;
      o(32571);
      const i = (0, o(51900).Z)({ name: "BaseDropdownContent" }, n, [], !1, null, "2af91074", null).exports;
    },
    85607: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => s });
      var n = function () {
        var t = this,
          e = t._self._c;
        return (
          t._self._setupProxy,
          e(
            "div",
            t._g(
              {
                staticClass: "base-dropdown-option",
                class: [t.spacing, { disabled: t.disabled, active: t.active }],
                attrs: { "data-dropdown-focusable": "" }
              },
              t.$listeners
            ),
            [t._t("default")],
            2
          )
        );
      };
      n._withStripped = !0;
      var i = o(55879);
      const a = (0, o(20144).aZ)({
        name: "BaseDropdownOption",
        props: {
          spacing: { type: String, default: i.P4.Start },
          disabled: { type: Boolean, default: !1 },
          active: { type: Boolean, default: !1 }
        }
      });
      o(92965);
      const s = (0, o(51900).Z)(a, n, [], !1, null, "366d5714", null).exports;
    },
    85517: (t, e, o) => {
      var n = o(35630);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, o(45346).Z)("0a5d856c", n, !1, {});
    },
    32571: (t, e, o) => {
      var n = o(25993);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, o(45346).Z)("2f4aad4b", n, !1, {});
    },
    92965: (t, e, o) => {
      var n = o(89907);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, o(45346).Z)("57a52b9a", n, !1, {});
    },
    55722: (t, e, o) => {
      var n = o(51491);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, o(45346).Z)("6f032e94", n, !1, { ssrId: !0 });
    },
    87970: (t, e, o) => {
      var n = o(5910);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, o(45346).Z)("0a5c34cd", n, !1, { ssrId: !0 });
    },
    49710: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K";
    }
  }
]);
