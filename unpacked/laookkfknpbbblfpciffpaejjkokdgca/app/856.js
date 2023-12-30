(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [856],
  {
    84651: (t) => {
      var e = !0,
        n = !1,
        r = !1;
      function s(t, e, n) {
        var r = t.attrIndex(e),
          s = [e, n];
        r < 0 ? t.attrPush(s) : (t.attrs[r] = s);
      }
      function i(t, e) {
        for (var n = t[e].level - 1, r = e - 1; r >= 0; r--) if (t[r].level === n) return r;
        return -1;
      }
      function o(t, e) {
        return (
          "inline" === t[e].type &&
          "paragraph_open" === t[e - 1].type &&
          (function (t) {
            return "list_item_open" === t.type;
          })(t[e - 2]) &&
          (function (t) {
            return 0 === t.content.indexOf("[ ] ") || 0 === t.content.indexOf("[x] ") || 0 === t.content.indexOf("[X] ");
          })(t[e])
        );
      }
      function a(t, s) {
        if (
          (t.children.unshift(
            (function (t, n) {
              var r = new n("html_inline", "", 0),
                s = e ? ' disabled="" ' : "";
              return (
                0 === t.content.indexOf("[ ] ")
                  ? (r.content = '<input class="task-list-item-checkbox"' + s + 'type="checkbox">')
                  : (0 !== t.content.indexOf("[x] ") && 0 !== t.content.indexOf("[X] ")) ||
                    (r.content = '<input class="task-list-item-checkbox" checked=""' + s + 'type="checkbox">'),
                r
              );
            })(t, s)
          ),
          (t.children[1].content = t.children[1].content.slice(3)),
          (t.content = t.content.slice(3)),
          n)
        )
          if (r) {
            t.children.pop();
            var i = "task-item-" + Math.ceil(1e7 * Math.random() - 1e3);
            (t.children[0].content = t.children[0].content.slice(0, -1) + ' id="' + i + '">'),
              t.children.push(
                (function (t, e, n) {
                  var r = new n("html_inline", "", 0);
                  return (r.content = '<label class="task-list-item-label" for="' + e + '">' + t + "</label>"), (r.attrs = [{ for: e }]), r;
                })(t.content, i, s)
              );
          } else
            t.children.unshift(
              (function (t) {
                var e = new t("html_inline", "", 0);
                return (e.content = "<label>"), e;
              })(s)
            ),
              t.children.push(
                (function (t) {
                  var e = new t("html_inline", "", 0);
                  return (e.content = "</label>"), e;
                })(s)
              );
      }
      t.exports = function (t, l) {
        l && ((e = !l.enabled), (n = !!l.label), (r = !!l.labelAfter)),
          t.core.ruler.after("inline", "github-task-lists", function (t) {
            for (var n = t.tokens, r = 2; r < n.length; r++)
              o(n, r) &&
                (a(n[r], t.Token),
                s(n[r - 2], "class", "task-list-item" + (e ? "" : " enabled")),
                s(n[i(n, r - 2)], "class", "contains-task-list"));
          });
      };
    },
    72433: (t, e, n) => {
      "use strict";
      var r,
        s = (r = n(28725)) && "object" == typeof r && "default" in r ? r.default : r;
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          i(t)
        );
      }
      var o = "undefined" != typeof window;
      function a(t, e) {
        return e.reduce(function (e, n) {
          return t.hasOwnProperty(n) && (e[n] = t[n]), e;
        }, {});
      }
      var l = {},
        d = {},
        c = {},
        u = new (s.extend({
          data: function () {
            return { transports: l, targets: d, sources: c, trackInstances: o };
          },
          methods: {
            open: function (t) {
              if (o) {
                var e = t.to,
                  n = t.from,
                  r = t.passengers,
                  a = t.order,
                  l = void 0 === a ? 1 / 0 : a;
                if (e && n && r) {
                  var d,
                    c = { to: e, from: n, passengers: ((d = r), Array.isArray(d) || "object" === i(d) ? Object.freeze(d) : d), order: l };
                  -1 === Object.keys(this.transports).indexOf(e) && s.set(this.transports, e, []);
                  var u,
                    h = this.$_getTransportIndex(c),
                    p = this.transports[e].slice(0);
                  -1 === h ? p.push(c) : (p[h] = c),
                    (this.transports[e] =
                      ((u = function (t, e) {
                        return t.order - e.order;
                      }),
                      p
                        .map(function (t, e) {
                          return [e, t];
                        })
                        .sort(function (t, e) {
                          return u(t[1], e[1]) || t[0] - e[0];
                        })
                        .map(function (t) {
                          return t[1];
                        })));
                }
              }
            },
            close: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = t.to,
                r = t.from;
              if (n && (r || !1 !== e) && this.transports[n])
                if (e) this.transports[n] = [];
                else {
                  var s = this.$_getTransportIndex(t);
                  if (s >= 0) {
                    var i = this.transports[n].slice(0);
                    i.splice(s, 1), (this.transports[n] = i);
                  }
                }
            },
            registerTarget: function (t, e, n) {
              o &&
                (this.trackInstances && !n && this.targets[t] && console.warn("[portal-vue]: Target ".concat(t, " already exists")),
                this.$set(this.targets, t, Object.freeze([e])));
            },
            unregisterTarget: function (t) {
              this.$delete(this.targets, t);
            },
            registerSource: function (t, e, n) {
              o &&
                (this.trackInstances && !n && this.sources[t] && console.warn("[portal-vue]: source ".concat(t, " already exists")),
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
                n = t.from;
              for (var r in this.transports[e]) if (this.transports[e][r].from === n) return +r;
              return -1;
            }
          }
        }))(l),
        h = 1,
        p = s.extend({
          name: "portal",
          props: {
            disabled: { type: Boolean },
            name: {
              type: String,
              default: function () {
                return String(h++);
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
              u.registerSource(t.name, t);
            });
          },
          mounted: function () {
            this.disabled || this.sendUpdate();
          },
          updated: function () {
            this.disabled ? this.clear() : this.sendUpdate();
          },
          beforeDestroy: function () {
            u.unregisterSource(this.name), this.clear();
          },
          watch: {
            to: function (t, e) {
              e && e !== t && this.clear(e), this.sendUpdate();
            }
          },
          methods: {
            clear: function (t) {
              var e = { from: this.name, to: t || this.to };
              u.close(e);
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
                var n = {
                  from: this.name,
                  to: this.to,
                  passengers:
                    ((t = e),
                    (function (t) {
                      if (Array.isArray(t)) {
                        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n;
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
                u.open(n);
              } else this.clear();
            }
          },
          render: function (t) {
            var e = this.$slots.default || this.$scopedSlots.default || [],
              n = this.tag;
            return e && this.disabled
              ? e.length <= 1 && this.slim
                ? this.normalizeOwnChildren(e)[0]
                : t(n, [this.normalizeOwnChildren(e)])
              : this.slim
              ? t()
              : t(n, { class: { "v-portal": !0 }, style: { display: "none" }, key: "v-portal-placeholder" });
          }
        }),
        m = s.extend({
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
            return { transports: u.transports, firstRender: !0 };
          },
          created: function () {
            var t = this;
            this.$nextTick(function () {
              u.registerTarget(t.name, t);
            });
          },
          watch: {
            ownTransports: function () {
              this.$emit("change", this.children().length > 0);
            },
            name: function (t, e) {
              u.unregisterTarget(e), u.registerTarget(t, this);
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
            u.unregisterTarget(this.name);
          },
          computed: {
            ownTransports: function () {
              var t = this.transports[this.name] || [];
              return this.multiple ? t : 0 === t.length ? [] : [t[t.length - 1]];
            },
            passengers: function () {
              return (function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t.reduce(function (t, n) {
                  var r = n.passengers[0],
                    s = "function" == typeof r ? r(e) : n.passengers;
                  return t.concat(s);
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
              n = this.children(),
              r = this.transition || this.tag;
            return e
              ? n[0]
              : this.slim && !r
              ? t()
              : t(r, { props: { tag: this.transition && this.tag ? this.tag : void 0 }, class: { "vue-portal-target": !0 } }, n);
          }
        }),
        g = 0,
        f = ["disabled", "name", "order", "slim", "slotProps", "tag", "to"],
        k = ["multiple", "transition"];
      s.extend({
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
              return "mounted_" + String(g++);
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
              if (u.targets[e.name])
                e.bail
                  ? console.warn(
                      "[portal-vue]: Target ".concat(e.name, " is already mounted.\n        Aborting because 'bail: true' is set")
                    )
                  : (this.portalTarget = u.targets[e.name]);
              else {
                var n = e.append;
                if (n) {
                  var r = "string" == typeof n ? n : "DIV",
                    s = document.createElement(r);
                  t.appendChild(s), (t = s);
                }
                var i = a(this.$props, k);
                (i.slim = this.targetSlim),
                  (i.tag = this.targetTag),
                  (i.slotProps = this.targetSlotProps),
                  (i.name = this.to),
                  (this.portalTarget = new m({ el: t, parent: this.$parent || this, propsData: i }));
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
            var e = a(this.$props, f);
            return t(p, { props: e, attrs: this.$attrs, on: this.$listeners, scopedSlots: this.$scopedSlots }, this.$slots.default);
          }
          var n = this.$scopedSlots.manual({ to: this.to });
          return Array.isArray(n) && (n = n[0]), n || t();
        }
      });
      (e.YC = m), (e.Df = u);
    },
    67937: (t, e, n) => {
      "use strict";
      n.d(e, { d8: () => l });
      var r = n(73845);
      const s = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
        i = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g,
        o = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/,
        a = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g,
        l = r.vc.create({
          name: "bold",
          addOptions: () => ({ HTMLAttributes: {} }),
          parseHTML: () => [
            { tag: "strong" },
            { tag: "b", getAttrs: (t) => "normal" !== t.style.fontWeight && null },
            { style: "font-weight", getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null }
          ],
          renderHTML({ HTMLAttributes: t }) {
            return ["strong", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              setBold:
                () =>
                ({ commands: t }) =>
                  t.setMark(this.name),
              toggleBold:
                () =>
                ({ commands: t }) =>
                  t.toggleMark(this.name),
              unsetBold:
                () =>
                ({ commands: t }) =>
                  t.unsetMark(this.name)
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-b": () => this.editor.commands.toggleBold(), "Mod-B": () => this.editor.commands.toggleBold() };
          },
          addInputRules() {
            return [(0, r.Cf)({ find: s, type: this.type }), (0, r.Cf)({ find: o, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.K9)({ find: i, type: this.type }), (0, r.K9)({ find: a, type: this.type })];
          }
        });
    },
    20336: (t, e, n) => {
      "use strict";
      n.d(e, { B: () => r });
      const r = n(73845).NB.create({ name: "doc", topNode: !0, content: "block+" });
    },
    7490: (t, e, n) => {
      "use strict";
      n.d(e, { X: () => s });
      var r = n(73845);
      const s = r.NB.create({
        name: "heading",
        addOptions: () => ({ levels: [1, 2, 3, 4, 5, 6], HTMLAttributes: {} }),
        content: "inline*",
        group: "block",
        defining: !0,
        addAttributes: () => ({ level: { default: 1, rendered: !1 } }),
        parseHTML() {
          return this.options.levels.map((t) => ({ tag: `h${t}`, attrs: { level: t } }));
        },
        renderHTML({ node: t, HTMLAttributes: e }) {
          return [
            `h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`,
            (0, r.P1)(this.options.HTMLAttributes, e),
            0
          ];
        },
        addCommands() {
          return {
            setHeading:
              (t) =>
              ({ commands: e }) =>
                !!this.options.levels.includes(t.level) && e.setNode(this.name, t),
            toggleHeading:
              (t) =>
              ({ commands: e }) =>
                !!this.options.levels.includes(t.level) && e.toggleNode(this.name, "paragraph", t)
          };
        },
        addKeyboardShortcuts() {
          return this.options.levels.reduce(
            (t, e) => ({ ...t, [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e }) }),
            {}
          );
        },
        addInputRules() {
          return this.options.levels.map((t) =>
            (0, r.zK)({ find: new RegExp(`^(#{1,${t}})\\s$`), type: this.type, getAttributes: { level: t } })
          );
        }
      });
    },
    50601: (t, e, n) => {
      "use strict";
      n.d(e, { y$: () => o });
      var r = n(73845);
      const s = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))$/,
        i = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))/g,
        o = r.vc.create({
          name: "highlight",
          addOptions: () => ({ multicolor: !1, HTMLAttributes: {} }),
          addAttributes() {
            return this.options.multicolor
              ? {
                  color: {
                    default: null,
                    parseHTML: (t) => t.getAttribute("data-color") || t.style.backgroundColor,
                    renderHTML: (t) => (t.color ? { "data-color": t.color, style: `background-color: ${t.color}; color: inherit` } : {})
                  }
                }
              : {};
          },
          parseHTML: () => [{ tag: "mark" }],
          renderHTML({ HTMLAttributes: t }) {
            return ["mark", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              setHighlight:
                (t) =>
                ({ commands: e }) =>
                  e.setMark(this.name, t),
              toggleHighlight:
                (t) =>
                ({ commands: e }) =>
                  e.toggleMark(this.name, t),
              unsetHighlight:
                () =>
                ({ commands: t }) =>
                  t.unsetMark(this.name)
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-Shift-h": () => this.editor.commands.toggleHighlight() };
          },
          addInputRules() {
            return [(0, r.Cf)({ find: s, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.K9)({ find: i, type: this.type })];
          }
        });
    },
    25748: (t, e, n) => {
      "use strict";
      n.d(e, { b: () => i });
      var r = n(73845),
        s = n(2376);
      const i = r.NB.create({
        name: "horizontalRule",
        addOptions: () => ({ HTMLAttributes: {} }),
        group: "block",
        parseHTML: () => [{ tag: "hr" }],
        renderHTML({ HTMLAttributes: t }) {
          return ["hr", (0, r.P1)(this.options.HTMLAttributes, t)];
        },
        addCommands() {
          return {
            setHorizontalRule:
              () =>
              ({ chain: t, state: e }) => {
                const { $to: n } = e.selection,
                  r = t();
                return (
                  0 === n.parentOffset
                    ? r.insertContentAt(Math.max(n.pos - 2, 0), { type: this.name })
                    : r.insertContent({ type: this.name }),
                  r
                    .command(({ tr: t, dispatch: e }) => {
                      var n;
                      if (e) {
                        const { $to: e } = t.selection,
                          r = e.end();
                        if (e.nodeAfter)
                          e.nodeAfter.isTextblock
                            ? t.setSelection(s.Bs.create(t.doc, e.pos + 1))
                            : e.nodeAfter.isBlock
                            ? t.setSelection(s.qv.create(t.doc, e.pos))
                            : t.setSelection(s.Bs.create(t.doc, e.pos));
                        else {
                          const i = null === (n = e.parent.type.contentMatch.defaultType) || void 0 === n ? void 0 : n.create();
                          i && (t.insert(r, i), t.setSelection(s.Bs.create(t.doc, r + 1)));
                        }
                        t.scrollIntoView();
                      }
                      return !0;
                    })
                    .run()
                );
              }
          };
        },
        addInputRules() {
          return [(0, r.x2)({ find: /^(?:---|—-|___\s|\*\*\*\s)$/, type: this.type })];
        }
      });
    },
    73816: (t, e, n) => {
      "use strict";
      n.d(e, { Tx: () => l });
      var r = n(73845);
      const s = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,
        i = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g,
        o = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/,
        a = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g,
        l = r.vc.create({
          name: "italic",
          addOptions: () => ({ HTMLAttributes: {} }),
          parseHTML: () => [
            { tag: "em" },
            { tag: "i", getAttrs: (t) => "normal" !== t.style.fontStyle && null },
            { style: "font-style=italic" }
          ],
          renderHTML({ HTMLAttributes: t }) {
            return ["em", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              setItalic:
                () =>
                ({ commands: t }) =>
                  t.setMark(this.name),
              toggleItalic:
                () =>
                ({ commands: t }) =>
                  t.toggleMark(this.name),
              unsetItalic:
                () =>
                ({ commands: t }) =>
                  t.unsetMark(this.name)
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-i": () => this.editor.commands.toggleItalic(), "Mod-I": () => this.editor.commands.toggleItalic() };
          },
          addInputRules() {
            return [(0, r.Cf)({ find: s, type: this.type }), (0, r.Cf)({ find: o, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.K9)({ find: i, type: this.type }), (0, r.K9)({ find: a, type: this.type })];
          }
        });
    },
    76484: (t, e, n) => {
      "use strict";
      n.d(e, { r: () => Jt });
      var r = n(73845);
      const s =
          "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",
        i =
          "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2",
        o = (t, e) => {
          for (const n in e) t[n] = e[n];
          return t;
        },
        a = "numeric",
        l = "ascii",
        d = "alpha",
        c = "asciinumeric",
        u = "alphanumeric",
        h = "domain",
        p = "emoji",
        m = "scheme",
        g = "slashscheme",
        f = "whitespace";
      function k(t, e) {
        return t in e || (e[t] = []), e[t];
      }
      function y(t, e, n) {
        e[a] && ((e[c] = !0), (e[u] = !0)),
          e[l] && ((e[c] = !0), (e[d] = !0)),
          e[c] && (e[u] = !0),
          e[d] && (e[u] = !0),
          e[u] && (e[h] = !0),
          e[p] && (e[h] = !0);
        for (const r in e) {
          const e = k(r, n);
          e.indexOf(t) < 0 && e.push(t);
        }
      }
      function b(t) {
        void 0 === t && (t = null), (this.j = {}), (this.jr = []), (this.jd = null), (this.t = t);
      }
      (b.groups = {}),
        (b.prototype = {
          accepts() {
            return !!this.t;
          },
          go(t) {
            const e = this,
              n = e.j[t];
            if (n) return n;
            for (let n = 0; n < e.jr.length; n++) {
              const r = e.jr[n][0],
                s = e.jr[n][1];
              if (s && r.test(t)) return s;
            }
            return e.jd;
          },
          has(t, e) {
            return void 0 === e && (e = !1), e ? t in this.j : !!this.go(t);
          },
          ta(t, e, n, r) {
            for (let s = 0; s < t.length; s++) this.tt(t[s], e, n, r);
          },
          tr(t, e, n, r) {
            let s;
            return (r = r || b.groups), e && e.j ? (s = e) : ((s = new b(e)), n && r && y(e, n, r)), this.jr.push([t, s]), s;
          },
          ts(t, e, n, r) {
            let s = this;
            const i = t.length;
            if (!i) return s;
            for (let e = 0; e < i - 1; e++) s = s.tt(t[e]);
            return s.tt(t[i - 1], e, n, r);
          },
          tt(t, e, n, r) {
            r = r || b.groups;
            const s = this;
            if (e && e.j) return (s.j[t] = e), e;
            const i = e;
            let a,
              l = s.go(t);
            if ((l ? ((a = new b()), o(a.j, l.j), a.jr.push.apply(a.jr, l.jr), (a.jd = l.jd), (a.t = l.t)) : (a = new b()), i)) {
              if (r)
                if (a.t && "string" == typeof a.t) {
                  const t = o(
                    (function (t, e) {
                      const n = {};
                      for (const r in e) e[r].indexOf(t) >= 0 && (n[r] = !0);
                      return n;
                    })(a.t, r),
                    n
                  );
                  y(i, t, r);
                } else n && y(i, n, r);
              a.t = i;
            }
            return (s.j[t] = a), a;
          }
        });
      const v = (t, e, n, r, s) => t.ta(e, n, r, s),
        T = (t, e, n, r, s) => t.tr(e, n, r, s),
        M = (t, e, n, r, s) => t.ts(e, n, r, s),
        w = (t, e, n, r, s) => t.tt(e, n, r, s),
        A = "WORD",
        L = "UWORD",
        x = "LOCALHOST",
        C = "TLD",
        S = "UTLD",
        E = "SCHEME",
        H = "SLASH_SCHEME",
        O = "NUM",
        N = "WS",
        B = "NL",
        I = "OPENBRACE",
        P = "CLOSEBRACE",
        R = "OPENBRACKET",
        z = "CLOSEBRACKET",
        $ = "OPENPAREN",
        D = "CLOSEPAREN",
        j = "OPENANGLEBRACKET",
        _ = "CLOSEANGLEBRACKET",
        K = "FULLWIDTHLEFTPAREN",
        q = "FULLWIDTHRIGHTPAREN",
        U = "LEFTCORNERBRACKET",
        W = "RIGHTCORNERBRACKET",
        F = "LEFTWHITECORNERBRACKET",
        G = "RIGHTWHITECORNERBRACKET",
        V = "FULLWIDTHLESSTHAN",
        Y = "FULLWIDTHGREATERTHAN",
        Q = "AMPERSAND",
        X = "APOSTROPHE",
        J = "ASTERISK",
        Z = "AT",
        tt = "BACKSLASH",
        et = "BACKTICK",
        nt = "CARET",
        rt = "COLON",
        st = "COMMA",
        it = "DOLLAR",
        ot = "DOT",
        at = "EQUALS",
        lt = "EXCLAMATION",
        dt = "HYPHEN",
        ct = "PERCENT",
        ut = "PIPE",
        ht = "PLUS",
        pt = "POUND",
        mt = "QUERY",
        gt = "QUOTE",
        ft = "SEMI",
        kt = "SLASH",
        yt = "TILDE",
        bt = "UNDERSCORE",
        vt = "EMOJI",
        Tt = "SYM";
      var Mt = Object.freeze({
        __proto__: null,
        WORD: A,
        UWORD: L,
        LOCALHOST: x,
        TLD: C,
        UTLD: S,
        SCHEME: E,
        SLASH_SCHEME: H,
        NUM: O,
        WS: N,
        NL: B,
        OPENBRACE: I,
        CLOSEBRACE: P,
        OPENBRACKET: R,
        CLOSEBRACKET: z,
        OPENPAREN: $,
        CLOSEPAREN: D,
        OPENANGLEBRACKET: j,
        CLOSEANGLEBRACKET: _,
        FULLWIDTHLEFTPAREN: K,
        FULLWIDTHRIGHTPAREN: q,
        LEFTCORNERBRACKET: U,
        RIGHTCORNERBRACKET: W,
        LEFTWHITECORNERBRACKET: F,
        RIGHTWHITECORNERBRACKET: G,
        FULLWIDTHLESSTHAN: V,
        FULLWIDTHGREATERTHAN: Y,
        AMPERSAND: Q,
        APOSTROPHE: X,
        ASTERISK: J,
        AT: Z,
        BACKSLASH: tt,
        BACKTICK: et,
        CARET: nt,
        COLON: rt,
        COMMA: st,
        DOLLAR: it,
        DOT: ot,
        EQUALS: at,
        EXCLAMATION: lt,
        HYPHEN: dt,
        PERCENT: ct,
        PIPE: ut,
        PLUS: ht,
        POUND: pt,
        QUERY: mt,
        QUOTE: gt,
        SEMI: ft,
        SLASH: kt,
        TILDE: yt,
        UNDERSCORE: bt,
        EMOJI: vt,
        SYM: Tt
      });
      const wt = /[a-z]/,
        At = /\p{L}/u,
        Lt = /\p{Emoji}/u,
        xt = /\d/,
        Ct = /\s/,
        St = "\n",
        Et = "️",
        Ht = "‍";
      let Ot = null,
        Nt = null;
      function Bt(t, e, n, r, s) {
        let i;
        const o = e.length;
        for (let n = 0; n < o - 1; n++) {
          const o = e[n];
          t.j[o] ? (i = t.j[o]) : ((i = new b(r)), (i.jr = s.slice()), (t.j[o] = i)), (t = i);
        }
        return (i = new b(n)), (i.jr = s.slice()), (t.j[e[o - 1]] = i), i;
      }
      function It(t) {
        const e = [],
          n = [];
        let r = 0;
        for (; r < t.length; ) {
          let s = 0;
          for (; "0123456789".indexOf(t[r + s]) >= 0; ) s++;
          if (s > 0) {
            e.push(n.join(""));
            for (let e = parseInt(t.substring(r, r + s), 10); e > 0; e--) n.pop();
            r += s;
          } else n.push(t[r]), r++;
        }
        return e;
      }
      const Pt = {
        defaultProtocol: "http",
        events: null,
        format: zt,
        formatHref: zt,
        nl2br: !1,
        tagName: "a",
        target: null,
        rel: null,
        validate: !0,
        truncate: 1 / 0,
        className: null,
        attributes: null,
        ignoreTags: [],
        render: null
      };
      function Rt(t, e) {
        void 0 === e && (e = null);
        let n = o({}, Pt);
        t && (n = o(n, t instanceof Rt ? t.o : t));
        const r = n.ignoreTags,
          s = [];
        for (let t = 0; t < r.length; t++) s.push(r[t].toUpperCase());
        (this.o = n), e && (this.defaultRender = e), (this.ignoreTags = s);
      }
      function zt(t) {
        return t;
      }
      function $t(t, e) {
        (this.t = "token"), (this.v = t), (this.tk = e);
      }
      function Dt(t, e) {
        class n extends $t {
          constructor(e, n) {
            super(e, n), (this.t = t);
          }
        }
        for (const t in e) n.prototype[t] = e[t];
        return (n.t = t), n;
      }
      (Rt.prototype = {
        o: Pt,
        ignoreTags: [],
        defaultRender: (t) => t,
        check(t) {
          return this.get("validate", t.toString(), t);
        },
        get(t, e, n) {
          const r = null != e;
          let s = this.o[t];
          return s
            ? ("object" == typeof s
                ? ((s = n.t in s ? s[n.t] : Pt[t]), "function" == typeof s && r && (s = s(e, n)))
                : "function" == typeof s && r && (s = s(e, n.t, n)),
              s)
            : s;
        },
        getObj(t, e, n) {
          let r = this.o[t];
          return "function" == typeof r && null != e && (r = r(e, n.t, n)), r;
        },
        render(t) {
          const e = t.render(this);
          return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
        }
      }),
        ($t.prototype = {
          isLink: !1,
          toString() {
            return this.v;
          },
          toHref(t) {
            return this.toString();
          },
          toFormattedString(t) {
            const e = this.toString(),
              n = t.get("truncate", e, this),
              r = t.get("format", e, this);
            return n && r.length > n ? r.substring(0, n) + "…" : r;
          },
          toFormattedHref(t) {
            return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
          },
          startIndex() {
            return this.tk[0].s;
          },
          endIndex() {
            return this.tk[this.tk.length - 1].e;
          },
          toObject(t) {
            return (
              void 0 === t && (t = Pt.defaultProtocol),
              {
                type: this.t,
                value: this.toString(),
                isLink: this.isLink,
                href: this.toHref(t),
                start: this.startIndex(),
                end: this.endIndex()
              }
            );
          },
          toFormattedObject(t) {
            return {
              type: this.t,
              value: this.toFormattedString(t),
              isLink: this.isLink,
              href: this.toFormattedHref(t),
              start: this.startIndex(),
              end: this.endIndex()
            };
          },
          validate(t) {
            return t.get("validate", this.toString(), this);
          },
          render(t) {
            const e = this,
              n = this.toHref(t.get("defaultProtocol")),
              r = t.get("formatHref", n, this),
              s = t.get("tagName", n, e),
              i = this.toFormattedString(t),
              a = {},
              l = t.get("className", n, e),
              d = t.get("target", n, e),
              c = t.get("rel", n, e),
              u = t.getObj("attributes", n, e),
              h = t.getObj("events", n, e);
            return (
              (a.href = r),
              l && (a.class = l),
              d && (a.target = d),
              c && (a.rel = c),
              u && o(a, u),
              { tagName: s, attributes: a, content: i, eventListeners: h }
            );
          }
        });
      const jt = Dt("email", {
          isLink: !0,
          toHref() {
            return "mailto:" + this.toString();
          }
        }),
        _t = Dt("text"),
        Kt = Dt("nl"),
        qt = Dt("url", {
          isLink: !0,
          toHref(t) {
            return void 0 === t && (t = Pt.defaultProtocol), this.hasProtocol() ? this.v : `${t}://${this.v}`;
          },
          hasProtocol() {
            const t = this.tk;
            return t.length >= 2 && t[0].t !== x && t[1].t === rt;
          }
        }),
        Ut = (t) => new b(t);
      function Wt(t, e, n) {
        const r = n[0].s,
          s = n[n.length - 1].e;
        return new t(e.slice(r, s), n);
      }
      const Ft = ("undefined" != typeof console && console && console.warn) || (() => {}),
        Gt = { scanner: null, parser: null, tokenQueue: [], pluginQueue: [], customSchemes: [], initialized: !1 };
      function Vt(t, e) {
        if (
          (void 0 === e && (e = !1),
          Gt.initialized &&
            Ft(
              `linkifyjs: already initialized - will not register custom scheme "${t}" until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.`
            ),
          !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
        )
          throw new Error(
            'linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or "-"\n2. Cannot start or end with "-"\n3. "-" cannot repeat'
          );
        Gt.customSchemes.push([t, e]);
      }
      function Yt(t) {
        return (
          Gt.initialized ||
            (function () {
              Gt.scanner = (function (t) {
                void 0 === t && (t = []);
                const e = {};
                b.groups = e;
                const n = new b();
                null == Ot && (Ot = It(s)),
                  null == Nt && (Nt = It(i)),
                  w(n, "'", X),
                  w(n, "{", I),
                  w(n, "}", P),
                  w(n, "[", R),
                  w(n, "]", z),
                  w(n, "(", $),
                  w(n, ")", D),
                  w(n, "<", j),
                  w(n, ">", _),
                  w(n, "（", K),
                  w(n, "）", q),
                  w(n, "「", U),
                  w(n, "」", W),
                  w(n, "『", F),
                  w(n, "』", G),
                  w(n, "＜", V),
                  w(n, "＞", Y),
                  w(n, "&", Q),
                  w(n, "*", J),
                  w(n, "@", Z),
                  w(n, "`", et),
                  w(n, "^", nt),
                  w(n, ":", rt),
                  w(n, ",", st),
                  w(n, "$", it),
                  w(n, ".", ot),
                  w(n, "=", at),
                  w(n, "!", lt),
                  w(n, "-", dt),
                  w(n, "%", ct),
                  w(n, "|", ut),
                  w(n, "+", ht),
                  w(n, "#", pt),
                  w(n, "?", mt),
                  w(n, '"', gt),
                  w(n, "/", kt),
                  w(n, ";", ft),
                  w(n, "~", yt),
                  w(n, "_", bt),
                  w(n, "\\", tt);
                const r = T(n, xt, O, { [a]: !0 });
                T(r, xt, r);
                const u = T(n, wt, A, { [l]: !0 });
                T(u, wt, u);
                const k = T(n, At, L, { [d]: !0 });
                T(k, wt), T(k, At, k);
                const v = T(n, Ct, N, { [f]: !0 });
                w(n, St, B, { [f]: !0 }), w(v, St), T(v, Ct, v);
                const Pt = T(n, Lt, vt, { [p]: !0 });
                T(Pt, Lt, Pt), w(Pt, Et, Pt);
                const Rt = w(Pt, Ht);
                T(Rt, Lt, Pt);
                const zt = [[wt, u]],
                  $t = [
                    [wt, null],
                    [At, k]
                  ];
                for (let t = 0; t < Ot.length; t++) Bt(n, Ot[t], C, A, zt);
                for (let t = 0; t < Nt.length; t++) Bt(n, Nt[t], S, L, $t);
                y(C, { tld: !0, ascii: !0 }, e),
                  y(S, { utld: !0, alpha: !0 }, e),
                  Bt(n, "file", E, A, zt),
                  Bt(n, "mailto", E, A, zt),
                  Bt(n, "http", H, A, zt),
                  Bt(n, "https", H, A, zt),
                  Bt(n, "ftp", H, A, zt),
                  Bt(n, "ftps", H, A, zt),
                  y(E, { scheme: !0, ascii: !0 }, e),
                  y(H, { slashscheme: !0, ascii: !0 }, e),
                  (t = t.sort((t, e) => (t[0] > e[0] ? 1 : -1)));
                for (let e = 0; e < t.length; e++) {
                  const r = t[e][0],
                    s = t[e][1] ? { [m]: !0 } : { [g]: !0 };
                  r.indexOf("-") >= 0 ? (s[h] = !0) : wt.test(r) ? (xt.test(r) ? (s[c] = !0) : (s[l] = !0)) : (s[a] = !0), M(n, r, r, s);
                }
                return M(n, "localhost", x, { ascii: !0 }), (n.jd = new b(Tt)), { start: n, tokens: o({ groups: e }, Mt) };
              })(Gt.customSchemes);
              for (let t = 0; t < Gt.tokenQueue.length; t++) Gt.tokenQueue[t][1]({ scanner: Gt.scanner });
              Gt.parser = (function (t) {
                let { groups: e } = t;
                const n = e.domain.concat([Q, J, Z, tt, et, nt, it, at, dt, O, ct, ut, ht, pt, kt, Tt, yt, bt]),
                  r = [X, rt, st, ot, lt, mt, gt, ft, j, _, I, P, z, R, $, D, K, q, U, W, F, G, V, Y],
                  s = [Q, X, J, tt, et, nt, it, at, dt, I, P, ct, ut, ht, pt, mt, kt, Tt, yt, bt],
                  i = Ut(),
                  o = w(i, yt);
                v(o, s, o), v(o, e.domain, o);
                const a = Ut(),
                  l = Ut(),
                  d = Ut();
                v(i, e.domain, a), v(i, e.scheme, l), v(i, e.slashscheme, d), v(a, s, o), v(a, e.domain, a);
                const c = w(a, Z);
                w(o, Z, c), w(l, Z, c), w(d, Z, c);
                const u = w(o, ot);
                v(u, s, o), v(u, e.domain, o);
                const h = Ut();
                v(c, e.domain, h), v(h, e.domain, h);
                const p = w(h, ot);
                v(p, e.domain, h);
                const m = Ut(jt);
                v(p, e.tld, m), v(p, e.utld, m), w(c, x, m);
                const g = w(h, dt);
                v(g, e.domain, h), v(m, e.domain, h), w(m, ot, p), w(m, dt, g);
                const f = w(m, rt);
                v(f, e.numeric, jt);
                const k = w(a, dt),
                  y = w(a, ot);
                v(k, e.domain, a), v(y, s, o), v(y, e.domain, a);
                const b = Ut(qt);
                v(y, e.tld, b), v(y, e.utld, b), v(b, e.domain, a), v(b, s, o), w(b, ot, y), w(b, dt, k), w(b, Z, c);
                const T = w(b, rt),
                  M = Ut(qt);
                v(T, e.numeric, M);
                const A = Ut(qt),
                  L = Ut();
                v(A, n, A), v(A, r, L), v(L, n, A), v(L, r, L), w(b, kt, A), w(M, kt, A);
                const C = w(l, rt),
                  S = w(d, rt),
                  E = w(S, kt),
                  H = w(E, kt);
                v(l, e.domain, a),
                  w(l, ot, y),
                  w(l, dt, k),
                  v(d, e.domain, a),
                  w(d, ot, y),
                  w(d, dt, k),
                  v(C, e.domain, A),
                  w(C, kt, A),
                  v(H, e.domain, A),
                  v(H, n, A),
                  w(H, kt, A);
                const N = [
                  [I, P],
                  [R, z],
                  [$, D],
                  [j, _],
                  [K, q],
                  [U, W],
                  [F, G],
                  [V, Y]
                ];
                for (let t = 0; t < N.length; t++) {
                  const [e, s] = N[t],
                    i = w(A, e);
                  w(L, e, i), w(i, s, A);
                  const o = Ut(qt);
                  v(i, n, o);
                  const a = Ut();
                  v(i, r), v(o, n, o), v(o, r, a), v(a, n, o), v(a, r, a), w(o, s, A), w(a, s, A);
                }
                return w(i, x, b), w(i, B, Kt), { start: i, tokens: Mt };
              })(Gt.scanner.tokens);
              for (let t = 0; t < Gt.pluginQueue.length; t++) Gt.pluginQueue[t][1]({ scanner: Gt.scanner, parser: Gt.parser });
              Gt.initialized = !0;
            })(),
          (function (t, e, n) {
            let r = n.length,
              s = 0,
              i = [],
              o = [];
            for (; s < r; ) {
              let a = t,
                l = null,
                d = null,
                c = 0,
                u = null,
                h = -1;
              for (; s < r && !(l = a.go(n[s].t)); ) o.push(n[s++]);
              for (; s < r && (d = l || a.go(n[s].t)); ) (l = null), (a = d), a.accepts() ? ((h = 0), (u = a)) : h >= 0 && h++, s++, c++;
              if (h < 0) (s -= c), s < r && (o.push(n[s]), s++);
              else {
                o.length > 0 && (i.push(Wt(_t, e, o)), (o = [])), (s -= h), (c -= h);
                const t = u.t,
                  r = n.slice(s - c, s);
                i.push(Wt(t, e, r));
              }
            }
            return o.length > 0 && i.push(Wt(_t, e, o)), i;
          })(
            Gt.parser.start,
            t,
            (function (t, e) {
              const n = (function (t) {
                  const e = [],
                    n = t.length;
                  let r = 0;
                  for (; r < n; ) {
                    let s,
                      i = t.charCodeAt(r),
                      o =
                        i < 55296 || i > 56319 || r + 1 === n || (s = t.charCodeAt(r + 1)) < 56320 || s > 57343 ? t[r] : t.slice(r, r + 2);
                    e.push(o), (r += o.length);
                  }
                  return e;
                })(e.replace(/[A-Z]/g, (t) => t.toLowerCase())),
                r = n.length,
                s = [];
              let i = 0,
                o = 0;
              for (; o < r; ) {
                let a = t,
                  l = null,
                  d = 0,
                  c = null,
                  u = -1,
                  h = -1;
                for (; o < r && (l = a.go(n[o])); )
                  (a = l),
                    a.accepts() ? ((u = 0), (h = 0), (c = a)) : u >= 0 && ((u += n[o].length), h++),
                    (d += n[o].length),
                    (i += n[o].length),
                    o++;
                (i -= u), (o -= h), (d -= u), s.push({ t: c.t, v: e.slice(i - d, i), s: i - d, e: i });
              }
              return s;
            })(Gt.scanner.start, t)
          )
        );
      }
      function Qt(t, e, n) {
        if ((void 0 === e && (e = null), void 0 === n && (n = null), e && "object" == typeof e)) {
          if (n) throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
          (n = e), (e = null);
        }
        const r = new Rt(n),
          s = Yt(t),
          i = [];
        for (let t = 0; t < s.length; t++) {
          const n = s[t];
          !n.isLink || (e && n.t !== e) || !r.check(n) || i.push(n.toFormattedObject(r));
        }
        return i;
      }
      var Xt = n(2376);
      const Jt = r.vc.create({
        name: "link",
        priority: 1e3,
        keepOnSplit: !1,
        onCreate() {
          this.options.protocols.forEach((t) => {
            "string" != typeof t ? Vt(t.scheme, t.optionalSlashes) : Vt(t);
          });
        },
        onDestroy() {
          (b.groups = {}),
            (Gt.scanner = null),
            (Gt.parser = null),
            (Gt.tokenQueue = []),
            (Gt.pluginQueue = []),
            (Gt.customSchemes = []),
            (Gt.initialized = !1);
        },
        inclusive() {
          return this.options.autolink;
        },
        addOptions: () => ({
          openOnClick: !0,
          linkOnPaste: !0,
          autolink: !0,
          protocols: [],
          HTMLAttributes: { target: "_blank", rel: "noopener noreferrer nofollow", class: null },
          validate: void 0
        }),
        addAttributes() {
          return {
            href: { default: null },
            target: { default: this.options.HTMLAttributes.target },
            rel: { default: this.options.HTMLAttributes.rel },
            class: { default: this.options.HTMLAttributes.class }
          };
        },
        parseHTML: () => [{ tag: 'a[href]:not([href *= "javascript:" i])' }],
        renderHTML({ HTMLAttributes: t }) {
          var e;
          return (null === (e = t.href) || void 0 === e ? void 0 : e.startsWith("javascript:"))
            ? ["a", (0, r.P1)(this.options.HTMLAttributes, { ...t, href: "" }), 0]
            : ["a", (0, r.P1)(this.options.HTMLAttributes, t), 0];
        },
        addCommands() {
          return {
            setLink:
              (t) =>
              ({ chain: e }) =>
                e().setMark(this.name, t).setMeta("preventAutolink", !0).run(),
            toggleLink:
              (t) =>
              ({ chain: e }) =>
                e().toggleMark(this.name, t, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run(),
            unsetLink:
              () =>
              ({ chain: t }) =>
                t().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
          };
        },
        addPasteRules() {
          return [
            (0, r.K9)({
              find: (t) =>
                Qt(t)
                  .filter((t) => !this.options.validate || this.options.validate(t.value))
                  .filter((t) => t.isLink)
                  .map((t) => ({ text: t.value, index: t.start, data: t })),
              type: this.type,
              getAttributes: (t, e) => {
                var n, r;
                const s = null === (n = null == e ? void 0 : e.clipboardData) || void 0 === n ? void 0 : n.getData("text/html"),
                  i = null == s ? void 0 : s.match(/href="([^"]*)"/);
                return i ? { href: i[1] } : { href: null === (r = t.data) || void 0 === r ? void 0 : r.href };
              }
            })
          ];
        },
        addProseMirrorPlugins() {
          const t = [];
          return (
            this.options.autolink &&
              t.push(
                ((e = { type: this.type, validate: this.options.validate }),
                new Xt.Sy({
                  key: new Xt.H$("autolink"),
                  appendTransaction: (t, n, s) => {
                    const i = t.some((t) => t.docChanged) && !n.doc.eq(s.doc),
                      o = t.some((t) => t.getMeta("preventAutolink"));
                    if (!i || o) return;
                    const { tr: a } = s,
                      l = (0, r.XP)(n.doc, [...t]);
                    return (
                      (0, r.QC)(l).forEach(({ newRange: t }) => {
                        const n = (0, r.b5)(s.doc, t, (t) => t.isTextblock);
                        let i, o;
                        if (
                          (n.length > 1
                            ? ((i = n[0]), (o = s.doc.textBetween(i.pos, i.pos + i.node.nodeSize, void 0, " ")))
                            : n.length &&
                              s.doc.textBetween(t.from, t.to, " ", " ").endsWith(" ") &&
                              ((i = n[0]), (o = s.doc.textBetween(i.pos, t.to, void 0, " "))),
                          i && o)
                        ) {
                          const t = o.split(" ").filter((t) => "" !== t);
                          if (t.length <= 0) return !1;
                          const n = t[t.length - 1],
                            l = i.pos + o.lastIndexOf(n);
                          if (!n) return !1;
                          Qt(n)
                            .filter((t) => t.isLink)
                            .map((t) => ({ ...t, from: l + t.start + 1, to: l + t.end + 1 }))
                            .filter((t) => !s.schema.marks.code || !s.doc.rangeHasMark(t.from, t.to, s.schema.marks.code))
                            .filter((t) => !e.validate || e.validate(t.value))
                            .forEach((t) => {
                              (0, r.tI)(t.from, t.to, s.doc).some((t) => t.mark.type === e.type) ||
                                a.addMark(t.from, t.to, e.type.create({ href: t.href }));
                            });
                        }
                      }),
                      a.steps.length ? a : void 0
                    );
                  }
                }))
              ),
            this.options.openOnClick &&
              t.push(
                (function (t) {
                  return new Xt.Sy({
                    key: new Xt.H$("handleClickLink"),
                    props: {
                      handleClick: (e, n, s) => {
                        var i, o;
                        if (0 !== s.button) return !1;
                        if ("A" !== s.target.nodeName) return !1;
                        const a = (0, r.u9)(e.state, t.type.name),
                          l = s.target,
                          d = null !== (i = null == l ? void 0 : l.href) && void 0 !== i ? i : a.href,
                          c = null !== (o = null == l ? void 0 : l.target) && void 0 !== o ? o : a.target;
                        return !(!l || !d || (e.editable && window.open(d, c), 0));
                      }
                    }
                  });
                })({ type: this.type })
              ),
            this.options.linkOnPaste &&
              t.push(
                (function (t) {
                  return new Xt.Sy({
                    key: new Xt.H$("handlePasteLink"),
                    props: {
                      handlePaste: (e, n, r) => {
                        var s;
                        const { state: i } = e,
                          { selection: o } = i,
                          { empty: a } = o;
                        if (a) return !1;
                        let l = "";
                        r.content.forEach((t) => {
                          l += t.textContent;
                        });
                        const d = Qt(l).find((t) => t.isLink && t.value === l);
                        if (!l || !d) return !1;
                        const c = null === (s = n.clipboardData) || void 0 === s ? void 0 : s.getData("text/html"),
                          u = null == c ? void 0 : c.match(/href="([^"]*)"/),
                          h = u ? u[1] : d.href;
                        return t.editor.commands.setMark(t.type, { href: h }), !0;
                      }
                    }
                  });
                })({ editor: this.editor, type: this.type })
              ),
            t
          );
          var e;
        }
      });
    },
    93237: (t, e, n) => {
      "use strict";
      n.d(e, { V: () => o });
      var r = n(73845),
        s = n(2376),
        i = n(84348);
      const o = r.hj.create({
        name: "placeholder",
        addOptions: () => ({
          emptyEditorClass: "is-editor-empty",
          emptyNodeClass: "is-empty",
          placeholder: "Write something …",
          showOnlyWhenEditable: !0,
          showOnlyCurrent: !0,
          includeChildren: !1
        }),
        addProseMirrorPlugins() {
          return [
            new s.Sy({
              key: new s.H$("placeholder"),
              props: {
                decorations: ({ doc: t, selection: e }) => {
                  const n = this.editor.isEditable || !this.options.showOnlyWhenEditable,
                    { anchor: r } = e,
                    s = [];
                  if (!n) return null;
                  const o = t.type.createAndFill(),
                    a = (null == o ? void 0 : o.sameMarkup(t)) && null === o.content.findDiffStart(t.content);
                  return (
                    t.descendants((t, e) => {
                      const n = r >= e && r <= e + t.nodeSize,
                        o = !t.isLeaf && !t.childCount;
                      if ((n || !this.options.showOnlyCurrent) && o) {
                        const r = [this.options.emptyNodeClass];
                        a && r.push(this.options.emptyEditorClass);
                        const o = i.p.node(e, e + t.nodeSize, {
                          class: r.join(" "),
                          "data-placeholder":
                            "function" == typeof this.options.placeholder
                              ? this.options.placeholder({ editor: this.editor, node: t, pos: e, hasAnchor: n })
                              : this.options.placeholder
                        });
                        s.push(o);
                      }
                      return this.options.includeChildren;
                    }),
                    i.EH.create(t, s)
                  );
                }
              }
            })
          ];
        }
      });
    },
    4281: (t, e, n) => {
      "use strict";
      n.d(e, { Re: () => o });
      var r = n(73845);
      const s = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/,
        i = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g,
        o = r.vc.create({
          name: "strike",
          addOptions: () => ({ HTMLAttributes: {} }),
          parseHTML: () => [
            { tag: "s" },
            { tag: "del" },
            { tag: "strike" },
            { style: "text-decoration", consuming: !1, getAttrs: (t) => !!t.includes("line-through") && {} }
          ],
          renderHTML({ HTMLAttributes: t }) {
            return ["s", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              setStrike:
                () =>
                ({ commands: t }) =>
                  t.setMark(this.name),
              toggleStrike:
                () =>
                ({ commands: t }) =>
                  t.toggleMark(this.name),
              unsetStrike:
                () =>
                ({ commands: t }) =>
                  t.unsetMark(this.name)
            };
          },
          addKeyboardShortcuts() {
            const t = {};
            return (
              (0, r.eE)()
                ? (t["Mod-Shift-s"] = () => this.editor.commands.toggleStrike())
                : (t["Ctrl-Shift-s"] = () => this.editor.commands.toggleStrike()),
              t
            );
          },
          addInputRules() {
            return [(0, r.Cf)({ find: s, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.K9)({ find: i, type: this.type })];
          }
        });
    },
    87605: (t, e, n) => {
      "use strict";
      n.d(e, { Uf: () => i });
      var r = n(73845);
      const s = /^\s*(\[([( |x])?\])\s$/,
        i = r.NB.create({
          name: "taskItem",
          addOptions: () => ({ nested: !1, HTMLAttributes: {}, taskListTypeName: "taskList" }),
          content() {
            return this.options.nested ? "paragraph block*" : "paragraph+";
          },
          defining: !0,
          addAttributes: () => ({
            checked: {
              default: !1,
              keepOnSplit: !1,
              parseHTML: (t) => "true" === t.getAttribute("data-checked"),
              renderHTML: (t) => ({ "data-checked": t.checked })
            }
          }),
          parseHTML() {
            return [{ tag: `li[data-type="${this.name}"]`, priority: 51 }];
          },
          renderHTML({ node: t, HTMLAttributes: e }) {
            return [
              "li",
              (0, r.P1)(this.options.HTMLAttributes, e, { "data-type": this.name }),
              ["label", ["input", { type: "checkbox", checked: t.attrs.checked ? "checked" : null }], ["span"]],
              ["div", 0]
            ];
          },
          addKeyboardShortcuts() {
            const t = {
              Enter: () => this.editor.commands.splitListItem(this.name),
              "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
            };
            return this.options.nested ? { ...t, Tab: () => this.editor.commands.sinkListItem(this.name) } : t;
          },
          addNodeView() {
            return ({ node: t, HTMLAttributes: e, getPos: n, editor: r }) => {
              const s = document.createElement("li"),
                i = document.createElement("label"),
                o = document.createElement("span"),
                a = document.createElement("input"),
                l = document.createElement("div");
              return (
                (i.contentEditable = "false"),
                (a.type = "checkbox"),
                a.addEventListener("change", (e) => {
                  if (!r.isEditable && !this.options.onReadOnlyChecked) return void (a.checked = !a.checked);
                  const { checked: s } = e.target;
                  r.isEditable &&
                    "function" == typeof n &&
                    r
                      .chain()
                      .focus(void 0, { scrollIntoView: !1 })
                      .command(({ tr: t }) => {
                        const e = n(),
                          r = t.doc.nodeAt(e);
                        return t.setNodeMarkup(e, void 0, { ...(null == r ? void 0 : r.attrs), checked: s }), !0;
                      })
                      .run(),
                    !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, s) || (a.checked = !a.checked));
                }),
                Object.entries(this.options.HTMLAttributes).forEach(([t, e]) => {
                  s.setAttribute(t, e);
                }),
                (s.dataset.checked = t.attrs.checked),
                t.attrs.checked && a.setAttribute("checked", "checked"),
                i.append(a, o),
                s.append(i, l),
                Object.entries(e).forEach(([t, e]) => {
                  s.setAttribute(t, e);
                }),
                {
                  dom: s,
                  contentDOM: l,
                  update: (t) =>
                    t.type === this.type &&
                    ((s.dataset.checked = t.attrs.checked),
                    t.attrs.checked ? a.setAttribute("checked", "checked") : a.removeAttribute("checked"),
                    !0)
                }
              );
            };
          },
          addInputRules() {
            return [(0, r.S0)({ find: s, type: this.type, getAttributes: (t) => ({ checked: "x" === t[t.length - 1] }) })];
          }
        });
    },
    63354: (t, e, n) => {
      "use strict";
      n.d(e, { a: () => s });
      var r = n(73845);
      const s = r.NB.create({
        name: "taskList",
        addOptions: () => ({ itemTypeName: "taskItem", HTMLAttributes: {} }),
        group: "block list",
        content() {
          return `${this.options.itemTypeName}+`;
        },
        parseHTML() {
          return [{ tag: `ul[data-type="${this.name}"]`, priority: 51 }];
        },
        renderHTML({ HTMLAttributes: t }) {
          return ["ul", (0, r.P1)(this.options.HTMLAttributes, t, { "data-type": this.name }), 0];
        },
        addCommands() {
          return {
            toggleTaskList:
              () =>
              ({ commands: t }) =>
                t.toggleList(this.name, this.options.itemTypeName)
          };
        },
        addKeyboardShortcuts() {
          return { "Mod-Shift-9": () => this.editor.commands.toggleTaskList() };
        }
      });
    },
    48510: (t, e, n) => {
      "use strict";
      n.d(e, { v: () => s });
      var r = n(73845);
      const s = r.vc.create({
        name: "underline",
        addOptions: () => ({ HTMLAttributes: {} }),
        parseHTML: () => [{ tag: "u" }, { style: "text-decoration", consuming: !1, getAttrs: (t) => !!t.includes("underline") && {} }],
        renderHTML({ HTMLAttributes: t }) {
          return ["u", (0, r.P1)(this.options.HTMLAttributes, t), 0];
        },
        addCommands() {
          return {
            setUnderline:
              () =>
              ({ commands: t }) =>
                t.setMark(this.name),
            toggleUnderline:
              () =>
              ({ commands: t }) =>
                t.toggleMark(this.name),
            unsetUnderline:
              () =>
              ({ commands: t }) =>
                t.unsetMark(this.name)
          };
        },
        addKeyboardShortcuts() {
          return { "Mod-u": () => this.editor.commands.toggleUnderline(), "Mod-U": () => this.editor.commands.toggleUnderline() };
        }
      });
    },
    92293: (t, e, n) => {
      "use strict";
      n.d(e, { V: () => pt });
      var r = n(73845);
      const s = /^\s*>\s$/,
        i = r.NB.create({
          name: "blockquote",
          addOptions: () => ({ HTMLAttributes: {} }),
          content: "block+",
          group: "block",
          defining: !0,
          parseHTML: () => [{ tag: "blockquote" }],
          renderHTML({ HTMLAttributes: t }) {
            return ["blockquote", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              setBlockquote:
                () =>
                ({ commands: t }) =>
                  t.wrapIn(this.name),
              toggleBlockquote:
                () =>
                ({ commands: t }) =>
                  t.toggleWrap(this.name),
              unsetBlockquote:
                () =>
                ({ commands: t }) =>
                  t.lift(this.name)
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-Shift-b": () => this.editor.commands.toggleBlockquote() };
          },
          addInputRules() {
            return [(0, r.S0)({ find: s, type: this.type })];
          }
        });
      var o = n(67937);
      const a = r.NB.create({
          name: "listItem",
          addOptions: () => ({ HTMLAttributes: {}, bulletListTypeName: "bulletList", orderedListTypeName: "orderedList" }),
          content: "paragraph block*",
          defining: !0,
          parseHTML: () => [{ tag: "li" }],
          renderHTML({ HTMLAttributes: t }) {
            return ["li", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addKeyboardShortcuts() {
            return {
              Enter: () => this.editor.commands.splitListItem(this.name),
              Tab: () => this.editor.commands.sinkListItem(this.name),
              "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
            };
          }
        }),
        l = r.vc.create({
          name: "textStyle",
          addOptions: () => ({ HTMLAttributes: {} }),
          parseHTML: () => [{ tag: "span", getAttrs: (t) => !!t.hasAttribute("style") && {} }],
          renderHTML({ HTMLAttributes: t }) {
            return ["span", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              removeEmptyTextStyle:
                () =>
                ({ state: t, commands: e }) => {
                  const n = (0, r.Jo)(t, this.type);
                  return !!Object.entries(n).some(([, t]) => !!t) || e.unsetMark(this.name);
                }
            };
          }
        }),
        d = /^\s*([-+*])\s$/,
        c = r.NB.create({
          name: "bulletList",
          addOptions: () => ({ itemTypeName: "listItem", HTMLAttributes: {}, keepMarks: !1, keepAttributes: !1 }),
          group: "block list",
          content() {
            return `${this.options.itemTypeName}+`;
          },
          parseHTML: () => [{ tag: "ul" }],
          renderHTML({ HTMLAttributes: t }) {
            return ["ul", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              toggleBulletList:
                () =>
                ({ commands: t, chain: e }) =>
                  this.options.keepAttributes
                    ? e()
                        .toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
                        .updateAttributes(a.name, this.editor.getAttributes(l.name))
                        .run()
                    : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() };
          },
          addInputRules() {
            let t = (0, r.S0)({ find: d, type: this.type });
            return (
              (this.options.keepMarks || this.options.keepAttributes) &&
                (t = (0, r.S0)({
                  find: d,
                  type: this.type,
                  keepMarks: this.options.keepMarks,
                  keepAttributes: this.options.keepAttributes,
                  getAttributes: () => this.editor.getAttributes(l.name),
                  editor: this.editor
                })),
              [t]
            );
          }
        }),
        u = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/,
        h = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g,
        p = r.vc.create({
          name: "code",
          addOptions: () => ({ HTMLAttributes: {} }),
          excludes: "_",
          code: !0,
          exitable: !0,
          parseHTML: () => [{ tag: "code" }],
          renderHTML({ HTMLAttributes: t }) {
            return ["code", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              setCode:
                () =>
                ({ commands: t }) =>
                  t.setMark(this.name),
              toggleCode:
                () =>
                ({ commands: t }) =>
                  t.toggleMark(this.name),
              unsetCode:
                () =>
                ({ commands: t }) =>
                  t.unsetMark(this.name)
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-e": () => this.editor.commands.toggleCode() };
          },
          addInputRules() {
            return [(0, r.Cf)({ find: u, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.K9)({ find: h, type: this.type })];
          }
        });
      var m = n(2376);
      const g = /^```([a-z]+)?[\s\n]$/,
        f = /^~~~([a-z]+)?[\s\n]$/,
        k = r.NB.create({
          name: "codeBlock",
          addOptions: () => ({ languageClassPrefix: "language-", exitOnTripleEnter: !0, exitOnArrowDown: !0, HTMLAttributes: {} }),
          content: "text*",
          marks: "",
          group: "block",
          code: !0,
          defining: !0,
          addAttributes() {
            return {
              language: {
                default: null,
                parseHTML: (t) => {
                  var e;
                  const { languageClassPrefix: n } = this.options;
                  return (
                    [...((null === (e = t.firstElementChild) || void 0 === e ? void 0 : e.classList) || [])]
                      .filter((t) => t.startsWith(n))
                      .map((t) => t.replace(n, ""))[0] || null
                  );
                },
                rendered: !1
              }
            };
          },
          parseHTML: () => [{ tag: "pre", preserveWhitespace: "full" }],
          renderHTML({ node: t, HTMLAttributes: e }) {
            return [
              "pre",
              (0, r.P1)(this.options.HTMLAttributes, e),
              ["code", { class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null }, 0]
            ];
          },
          addCommands() {
            return {
              setCodeBlock:
                (t) =>
                ({ commands: e }) =>
                  e.setNode(this.name, t),
              toggleCodeBlock:
                (t) =>
                ({ commands: e }) =>
                  e.toggleNode(this.name, "paragraph", t)
            };
          },
          addKeyboardShortcuts() {
            return {
              "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
              Backspace: () => {
                const { empty: t, $anchor: e } = this.editor.state.selection,
                  n = 1 === e.pos;
                return (
                  !(!t || e.parent.type.name !== this.name) && !(!n && e.parent.textContent.length) && this.editor.commands.clearNodes()
                );
              },
              Enter: ({ editor: t }) => {
                if (!this.options.exitOnTripleEnter) return !1;
                const { state: e } = t,
                  { selection: n } = e,
                  { $from: r, empty: s } = n;
                if (!s || r.parent.type !== this.type) return !1;
                const i = r.parentOffset === r.parent.nodeSize - 2,
                  o = r.parent.textContent.endsWith("\n\n");
                return (
                  !(!i || !o) &&
                  t
                    .chain()
                    .command(({ tr: t }) => (t.delete(r.pos - 2, r.pos), !0))
                    .exitCode()
                    .run()
                );
              },
              ArrowDown: ({ editor: t }) => {
                if (!this.options.exitOnArrowDown) return !1;
                const { state: e } = t,
                  { selection: n, doc: r } = e,
                  { $from: s, empty: i } = n;
                if (!i || s.parent.type !== this.type) return !1;
                if (s.parentOffset !== s.parent.nodeSize - 2) return !1;
                const o = s.after();
                return void 0 !== o && !r.nodeAt(o) && t.commands.exitCode();
              }
            };
          },
          addInputRules() {
            return [
              (0, r.zK)({ find: g, type: this.type, getAttributes: (t) => ({ language: t[1] }) }),
              (0, r.zK)({ find: f, type: this.type, getAttributes: (t) => ({ language: t[1] }) })
            ];
          },
          addProseMirrorPlugins() {
            return [
              new m.Sy({
                key: new m.H$("codeBlockVSCodeHandler"),
                props: {
                  handlePaste: (t, e) => {
                    if (!e.clipboardData) return !1;
                    if (this.editor.isActive(this.type.name)) return !1;
                    const n = e.clipboardData.getData("text/plain"),
                      r = e.clipboardData.getData("vscode-editor-data"),
                      s = r ? JSON.parse(r) : void 0,
                      i = null == s ? void 0 : s.mode;
                    if (!n || !i) return !1;
                    const { tr: o } = t.state;
                    return (
                      o.replaceSelectionWith(this.type.create({ language: i })),
                      o.setSelection(m.Bs.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))),
                      o.insertText(n.replace(/\r\n?/g, "\n")),
                      o.setMeta("paste", !0),
                      t.dispatch(o),
                      !0
                    );
                  }
                }
              })
            ];
          }
        });
      var y = n(20336),
        b = n(16560);
      function v(t = {}) {
        return new m.Sy({ view: (e) => new T(e, t) });
      }
      class T {
        constructor(t, e) {
          var n;
          (this.editorView = t),
            (this.cursorPos = null),
            (this.element = null),
            (this.timeout = -1),
            (this.width = null !== (n = e.width) && void 0 !== n ? n : 1),
            (this.color = !1 === e.color ? void 0 : e.color || "black"),
            (this.class = e.class),
            (this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((e) => {
              let n = (t) => {
                this[e](t);
              };
              return t.dom.addEventListener(e, n), { name: e, handler: n };
            }));
        }
        destroy() {
          this.handlers.forEach(({ name: t, handler: e }) => this.editorView.dom.removeEventListener(t, e));
        }
        update(t, e) {
          null != this.cursorPos &&
            e.doc != t.state.doc &&
            (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
        }
        setCursor(t) {
          t != this.cursorPos &&
            ((this.cursorPos = t),
            null == t ? (this.element.parentNode.removeChild(this.element), (this.element = null)) : this.updateOverlay());
        }
        updateOverlay() {
          let t,
            e = this.editorView.state.doc.resolve(this.cursorPos),
            n = !e.parent.inlineContent;
          if (n) {
            let n = e.nodeBefore,
              r = e.nodeAfter;
            if (n || r) {
              let e = this.editorView.nodeDOM(this.cursorPos - (n ? n.nodeSize : 0));
              if (e) {
                let s = e.getBoundingClientRect(),
                  i = n ? s.bottom : s.top;
                n && r && (i = (i + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2),
                  (t = { left: s.left, right: s.right, top: i - this.width / 2, bottom: i + this.width / 2 });
              }
            }
          }
          if (!t) {
            let e = this.editorView.coordsAtPos(this.cursorPos);
            t = { left: e.left - this.width / 2, right: e.left + this.width / 2, top: e.top, bottom: e.bottom };
          }
          let r,
            s,
            i = this.editorView.dom.offsetParent;
          if (
            (this.element ||
              ((this.element = i.appendChild(document.createElement("div"))),
              this.class && (this.element.className = this.class),
              (this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;"),
              this.color && (this.element.style.backgroundColor = this.color)),
            this.element.classList.toggle("prosemirror-dropcursor-block", n),
            this.element.classList.toggle("prosemirror-dropcursor-inline", !n),
            !i || (i == document.body && "static" == getComputedStyle(i).position))
          )
            (r = -pageXOffset), (s = -pageYOffset);
          else {
            let t = i.getBoundingClientRect();
            (r = t.left - i.scrollLeft), (s = t.top - i.scrollTop);
          }
          (this.element.style.left = t.left - r + "px"),
            (this.element.style.top = t.top - s + "px"),
            (this.element.style.width = t.right - t.left + "px"),
            (this.element.style.height = t.bottom - t.top + "px");
        }
        scheduleRemoval(t) {
          clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.setCursor(null), t));
        }
        dragover(t) {
          if (!this.editorView.editable) return;
          let e = this.editorView.posAtCoords({ left: t.clientX, top: t.clientY }),
            n = e && e.inside >= 0 && this.editorView.state.doc.nodeAt(e.inside),
            r = n && n.type.spec.disableDropCursor,
            s = "function" == typeof r ? r(this.editorView, e, t) : r;
          if (e && !s) {
            let t = e.pos;
            if (this.editorView.dragging && this.editorView.dragging.slice) {
              let e = (0, b.nj)(this.editorView.state.doc, t, this.editorView.dragging.slice);
              null != e && (t = e);
            }
            this.setCursor(t), this.scheduleRemoval(5e3);
          }
        }
        dragend() {
          this.scheduleRemoval(20);
        }
        drop() {
          this.scheduleRemoval(20);
        }
        dragleave(t) {
          (t.target != this.editorView.dom && this.editorView.dom.contains(t.relatedTarget)) || this.setCursor(null);
        }
      }
      const M = r.hj.create({
        name: "dropCursor",
        addOptions: () => ({ color: "currentColor", width: 1, class: void 0 }),
        addProseMirrorPlugins() {
          return [v(this.options)];
        }
      });
      var w = n(82337),
        A = n(87823),
        L = n(84348);
      class x extends m.Y1 {
        constructor(t) {
          super(t, t);
        }
        map(t, e) {
          let n = t.resolve(e.map(this.head));
          return x.valid(n) ? new x(n) : m.Y1.near(n);
        }
        content() {
          return A.p2.empty;
        }
        eq(t) {
          return t instanceof x && t.head == this.head;
        }
        toJSON() {
          return { type: "gapcursor", pos: this.head };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos) throw new RangeError("Invalid input for GapCursor.fromJSON");
          return new x(t.resolve(e.pos));
        }
        getBookmark() {
          return new C(this.anchor);
        }
        static valid(t) {
          let e = t.parent;
          if (
            e.isTextblock ||
            !(function (t) {
              for (let e = t.depth; e >= 0; e--) {
                let n = t.index(e),
                  r = t.node(e);
                if (0 != n)
                  for (let t = r.child(n - 1); ; t = t.lastChild) {
                    if ((0 == t.childCount && !t.inlineContent) || t.isAtom || t.type.spec.isolating) return !0;
                    if (t.inlineContent) return !1;
                  }
                else if (r.type.spec.isolating) return !0;
              }
              return !0;
            })(t) ||
            !(function (t) {
              for (let e = t.depth; e >= 0; e--) {
                let n = t.indexAfter(e),
                  r = t.node(e);
                if (n != r.childCount)
                  for (let t = r.child(n); ; t = t.firstChild) {
                    if ((0 == t.childCount && !t.inlineContent) || t.isAtom || t.type.spec.isolating) return !0;
                    if (t.inlineContent) return !1;
                  }
                else if (r.type.spec.isolating) return !0;
              }
              return !0;
            })(t)
          )
            return !1;
          let n = e.type.spec.allowGapCursor;
          if (null != n) return n;
          let r = e.contentMatchAt(t.index()).defaultType;
          return r && r.isTextblock;
        }
        static findGapCursorFrom(t, e, n = !1) {
          t: for (;;) {
            if (!n && x.valid(t)) return t;
            let r = t.pos,
              s = null;
            for (let n = t.depth; ; n--) {
              let i = t.node(n);
              if (e > 0 ? t.indexAfter(n) < i.childCount : t.index(n) > 0) {
                s = i.child(e > 0 ? t.indexAfter(n) : t.index(n) - 1);
                break;
              }
              if (0 == n) return null;
              r += e;
              let o = t.doc.resolve(r);
              if (x.valid(o)) return o;
            }
            for (;;) {
              let i = e > 0 ? s.firstChild : s.lastChild;
              if (!i) {
                if (s.isAtom && !s.isText && !m.qv.isSelectable(s)) {
                  (t = t.doc.resolve(r + s.nodeSize * e)), (n = !1);
                  continue t;
                }
                break;
              }
              (s = i), (r += e);
              let o = t.doc.resolve(r);
              if (x.valid(o)) return o;
            }
            return null;
          }
        }
      }
      (x.prototype.visible = !1), (x.findFrom = x.findGapCursorFrom), m.Y1.jsonID("gapcursor", x);
      class C {
        constructor(t) {
          this.pos = t;
        }
        map(t) {
          return new C(t.map(this.pos));
        }
        resolve(t) {
          let e = t.resolve(this.pos);
          return x.valid(e) ? new x(e) : m.Y1.near(e);
        }
      }
      const S = (0, w.$)({ ArrowLeft: E("horiz", -1), ArrowRight: E("horiz", 1), ArrowUp: E("vert", -1), ArrowDown: E("vert", 1) });
      function E(t, e) {
        const n = "vert" == t ? (e > 0 ? "down" : "up") : e > 0 ? "right" : "left";
        return function (t, r, s) {
          let i = t.selection,
            o = e > 0 ? i.$to : i.$from,
            a = i.empty;
          if (i instanceof m.Bs) {
            if (!s.endOfTextblock(n) || 0 == o.depth) return !1;
            (a = !1), (o = t.doc.resolve(e > 0 ? o.after() : o.before()));
          }
          let l = x.findGapCursorFrom(o, e, a);
          return !!l && (r && r(t.tr.setSelection(new x(l))), !0);
        };
      }
      function H(t, e, n) {
        if (!t || !t.editable) return !1;
        let r = t.state.doc.resolve(e);
        if (!x.valid(r)) return !1;
        let s = t.posAtCoords({ left: n.clientX, top: n.clientY });
        return !(
          (s && s.inside > -1 && m.qv.isSelectable(t.state.doc.nodeAt(s.inside))) ||
          (t.dispatch(t.state.tr.setSelection(new x(r))), 0)
        );
      }
      function O(t, e) {
        if ("insertCompositionText" != e.inputType || !(t.state.selection instanceof x)) return !1;
        let { $from: n } = t.state.selection,
          r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
        if (!r) return !1;
        let s = A.HY.empty;
        for (let t = r.length - 1; t >= 0; t--) s = A.HY.from(r[t].createAndFill(null, s));
        let i = t.state.tr.replace(n.pos, n.pos, new A.p2(s, 0, 0));
        return i.setSelection(m.Bs.near(i.doc.resolve(n.pos + 1))), t.dispatch(i), !1;
      }
      function N(t) {
        if (!(t.selection instanceof x)) return null;
        let e = document.createElement("div");
        return (e.className = "ProseMirror-gapcursor"), L.EH.create(t.doc, [L.p.widget(t.selection.head, e, { key: "gapcursor" })]);
      }
      const B = r.hj.create({
          name: "gapCursor",
          addProseMirrorPlugins: () => [
            new m.Sy({
              props: {
                decorations: N,
                createSelectionBetween: (t, e, n) => (e.pos == n.pos && x.valid(n) ? new x(n) : null),
                handleClick: H,
                handleKeyDown: S,
                handleDOMEvents: { beforeinput: O }
              }
            })
          ],
          extendNodeSchema(t) {
            var e;
            const n = { name: t.name, options: t.options, storage: t.storage };
            return { allowGapCursor: null !== (e = (0, r.nU)((0, r.Nl)(t, "allowGapCursor", n))) && void 0 !== e ? e : null };
          }
        }),
        I = r.NB.create({
          name: "hardBreak",
          addOptions: () => ({ keepMarks: !0, HTMLAttributes: {} }),
          inline: !0,
          group: "inline",
          selectable: !1,
          parseHTML: () => [{ tag: "br" }],
          renderHTML({ HTMLAttributes: t }) {
            return ["br", (0, r.P1)(this.options.HTMLAttributes, t)];
          },
          renderText: () => "\n",
          addCommands() {
            return {
              setHardBreak:
                () =>
                ({ commands: t, chain: e, state: n, editor: r }) =>
                  t.first([
                    () => t.exitCode(),
                    () =>
                      t.command(() => {
                        const { selection: t, storedMarks: s } = n;
                        if (t.$from.parent.type.spec.isolating) return !1;
                        const { keepMarks: i } = this.options,
                          { splittableMarks: o } = r.extensionManager,
                          a = s || (t.$to.parentOffset && t.$from.marks());
                        return e()
                          .insertContent({ type: this.name })
                          .command(({ tr: t, dispatch: e }) => {
                            if (e && a && i) {
                              const e = a.filter((t) => o.includes(t.type.name));
                              t.ensureMarks(e);
                            }
                            return !0;
                          })
                          .run();
                      })
                  ])
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-Enter": () => this.editor.commands.setHardBreak(), "Shift-Enter": () => this.editor.commands.setHardBreak() };
          }
        });
      var P = n(7490),
        R = 200,
        z = function () {};
      (z.prototype.append = function (t) {
        return t.length
          ? ((t = z.from(t)),
            (!this.length && t) || (t.length < R && this.leafAppend(t)) || (this.length < R && t.leafPrepend(this)) || this.appendInner(t))
          : this;
      }),
        (z.prototype.prepend = function (t) {
          return t.length ? z.from(t).append(this) : this;
        }),
        (z.prototype.appendInner = function (t) {
          return new D(this, t);
        }),
        (z.prototype.slice = function (t, e) {
          return (
            void 0 === t && (t = 0),
            void 0 === e && (e = this.length),
            t >= e ? z.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, e))
          );
        }),
        (z.prototype.get = function (t) {
          if (!(t < 0 || t >= this.length)) return this.getInner(t);
        }),
        (z.prototype.forEach = function (t, e, n) {
          void 0 === e && (e = 0),
            void 0 === n && (n = this.length),
            e <= n ? this.forEachInner(t, e, n, 0) : this.forEachInvertedInner(t, e, n, 0);
        }),
        (z.prototype.map = function (t, e, n) {
          void 0 === e && (e = 0), void 0 === n && (n = this.length);
          var r = [];
          return (
            this.forEach(
              function (e, n) {
                return r.push(t(e, n));
              },
              e,
              n
            ),
            r
          );
        }),
        (z.from = function (t) {
          return t instanceof z ? t : t && t.length ? new $(t) : z.empty;
        });
      var $ = (function (t) {
        function e(e) {
          t.call(this), (this.values = e);
        }
        t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)), (e.prototype.constructor = e);
        var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
        return (
          (e.prototype.flatten = function () {
            return this.values;
          }),
          (e.prototype.sliceInner = function (t, n) {
            return 0 == t && n == this.length ? this : new e(this.values.slice(t, n));
          }),
          (e.prototype.getInner = function (t) {
            return this.values[t];
          }),
          (e.prototype.forEachInner = function (t, e, n, r) {
            for (var s = e; s < n; s++) if (!1 === t(this.values[s], r + s)) return !1;
          }),
          (e.prototype.forEachInvertedInner = function (t, e, n, r) {
            for (var s = e - 1; s >= n; s--) if (!1 === t(this.values[s], r + s)) return !1;
          }),
          (e.prototype.leafAppend = function (t) {
            if (this.length + t.length <= R) return new e(this.values.concat(t.flatten()));
          }),
          (e.prototype.leafPrepend = function (t) {
            if (this.length + t.length <= R) return new e(t.flatten().concat(this.values));
          }),
          (n.length.get = function () {
            return this.values.length;
          }),
          (n.depth.get = function () {
            return 0;
          }),
          Object.defineProperties(e.prototype, n),
          e
        );
      })(z);
      z.empty = new $([]);
      var D = (function (t) {
        function e(e, n) {
          t.call(this),
            (this.left = e),
            (this.right = n),
            (this.length = e.length + n.length),
            (this.depth = Math.max(e.depth, n.depth) + 1);
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.flatten = function () {
            return this.left.flatten().concat(this.right.flatten());
          }),
          (e.prototype.getInner = function (t) {
            return t < this.left.length ? this.left.get(t) : this.right.get(t - this.left.length);
          }),
          (e.prototype.forEachInner = function (t, e, n, r) {
            var s = this.left.length;
            return (
              !(e < s && !1 === this.left.forEachInner(t, e, Math.min(n, s), r)) &&
              !(n > s && !1 === this.right.forEachInner(t, Math.max(e - s, 0), Math.min(this.length, n) - s, r + s)) &&
              void 0
            );
          }),
          (e.prototype.forEachInvertedInner = function (t, e, n, r) {
            var s = this.left.length;
            return (
              !(e > s && !1 === this.right.forEachInvertedInner(t, e - s, Math.max(n, s) - s, r + s)) &&
              !(n < s && !1 === this.left.forEachInvertedInner(t, Math.min(e, s), n, r)) &&
              void 0
            );
          }),
          (e.prototype.sliceInner = function (t, e) {
            if (0 == t && e == this.length) return this;
            var n = this.left.length;
            return e <= n
              ? this.left.slice(t, e)
              : t >= n
              ? this.right.slice(t - n, e - n)
              : this.left.slice(t, n).append(this.right.slice(0, e - n));
          }),
          (e.prototype.leafAppend = function (t) {
            var n = this.right.leafAppend(t);
            if (n) return new e(this.left, n);
          }),
          (e.prototype.leafPrepend = function (t) {
            var n = this.left.leafPrepend(t);
            if (n) return new e(n, this.right);
          }),
          (e.prototype.appendInner = function (t) {
            return this.left.depth >= Math.max(this.right.depth, t.depth) + 1 ? new e(this.left, new e(this.right, t)) : new e(this, t);
          }),
          e
        );
      })(z);
      const j = z;
      class _ {
        constructor(t, e) {
          (this.items = t), (this.eventCount = e);
        }
        popEvent(t, e) {
          if (0 == this.eventCount) return null;
          let n,
            r,
            s = this.items.length;
          for (; ; s--)
            if (this.items.get(s - 1).selection) {
              --s;
              break;
            }
          e && ((n = this.remapping(s, this.items.length)), (r = n.maps.length));
          let i,
            o,
            a = t.tr,
            l = [],
            d = [];
          return (
            this.items.forEach(
              (t, e) => {
                if (!t.step) return n || ((n = this.remapping(s, e + 1)), (r = n.maps.length)), r--, void d.push(t);
                if (n) {
                  d.push(new K(t.map));
                  let e,
                    s = t.step.map(n.slice(r));
                  s &&
                    a.maybeStep(s).doc &&
                    ((e = a.mapping.maps[a.mapping.maps.length - 1]), l.push(new K(e, void 0, void 0, l.length + d.length))),
                    r--,
                    e && n.appendMap(e, r);
                } else a.maybeStep(t.step);
                return t.selection
                  ? ((i = n ? t.selection.map(n.slice(r)) : t.selection),
                    (o = new _(this.items.slice(0, s).append(d.reverse().concat(l)), this.eventCount - 1)),
                    !1)
                  : void 0;
              },
              this.items.length,
              0
            ),
            { remaining: o, transform: a, selection: i }
          );
        }
        addTransform(t, e, n, r) {
          let s = [],
            i = this.eventCount,
            o = this.items,
            a = !r && o.length ? o.get(o.length - 1) : null;
          for (let n = 0; n < t.steps.length; n++) {
            let l,
              d = t.steps[n].invert(t.docs[n]),
              c = new K(t.mapping.maps[n], d, e);
            (l = a && a.merge(c)) && ((c = l), n ? s.pop() : (o = o.slice(0, o.length - 1))),
              s.push(c),
              e && (i++, (e = void 0)),
              r || (a = c);
          }
          let l = i - n.depth;
          return (
            l > U &&
              ((o = (function (t, e) {
                let n;
                return (
                  t.forEach((t, r) => {
                    if (t.selection && 0 == e--) return (n = r), !1;
                  }),
                  t.slice(n)
                );
              })(o, l)),
              (i -= l)),
            new _(o.append(s), i)
          );
        }
        remapping(t, e) {
          let n = new b.vs();
          return (
            this.items.forEach(
              (e, r) => {
                let s = null != e.mirrorOffset && r - e.mirrorOffset >= t ? n.maps.length - e.mirrorOffset : void 0;
                n.appendMap(e.map, s);
              },
              t,
              e
            ),
            n
          );
        }
        addMaps(t) {
          return 0 == this.eventCount ? this : new _(this.items.append(t.map((t) => new K(t))), this.eventCount);
        }
        rebased(t, e) {
          if (!this.eventCount) return this;
          let n = [],
            r = Math.max(0, this.items.length - e),
            s = t.mapping,
            i = t.steps.length,
            o = this.eventCount;
          this.items.forEach((t) => {
            t.selection && o--;
          }, r);
          let a = e;
          this.items.forEach((e) => {
            let r = s.getMirror(--a);
            if (null == r) return;
            i = Math.min(i, r);
            let l = s.maps[r];
            if (e.step) {
              let i = t.steps[r].invert(t.docs[r]),
                d = e.selection && e.selection.map(s.slice(a + 1, r));
              d && o++, n.push(new K(l, i, d));
            } else n.push(new K(l));
          }, r);
          let l = [];
          for (let t = e; t < i; t++) l.push(new K(s.maps[t]));
          let d = this.items.slice(0, r).append(l).append(n),
            c = new _(d, o);
          return c.emptyItemCount() > 500 && (c = c.compress(this.items.length - n.length)), c;
        }
        emptyItemCount() {
          let t = 0;
          return (
            this.items.forEach((e) => {
              e.step || t++;
            }),
            t
          );
        }
        compress(t = this.items.length) {
          let e = this.remapping(0, t),
            n = e.maps.length,
            r = [],
            s = 0;
          return (
            this.items.forEach(
              (i, o) => {
                if (o >= t) r.push(i), i.selection && s++;
                else if (i.step) {
                  let t = i.step.map(e.slice(n)),
                    o = t && t.getMap();
                  if ((n--, o && e.appendMap(o, n), t)) {
                    let a = i.selection && i.selection.map(e.slice(n));
                    a && s++;
                    let l,
                      d = new K(o.invert(), t, a),
                      c = r.length - 1;
                    (l = r.length && r[c].merge(d)) ? (r[c] = l) : r.push(d);
                  }
                } else i.map && n--;
              },
              this.items.length,
              0
            ),
            new _(j.from(r.reverse()), s)
          );
        }
      }
      _.empty = new _(j.empty, 0);
      class K {
        constructor(t, e, n, r) {
          (this.map = t), (this.step = e), (this.selection = n), (this.mirrorOffset = r);
        }
        merge(t) {
          if (this.step && t.step && !t.selection) {
            let e = t.step.merge(this.step);
            if (e) return new K(e.getMap().invert(), e, this.selection);
          }
        }
      }
      class q {
        constructor(t, e, n, r, s) {
          (this.done = t), (this.undone = e), (this.prevRanges = n), (this.prevTime = r), (this.prevComposition = s);
        }
      }
      const U = 20;
      function W(t) {
        let e = [];
        return t.forEach((t, n, r, s) => e.push(r, s)), e;
      }
      function F(t, e) {
        if (!t) return null;
        let n = [];
        for (let r = 0; r < t.length; r += 2) {
          let s = e.map(t[r], 1),
            i = e.map(t[r + 1], -1);
          s <= i && n.push(s, i);
        }
        return n;
      }
      function G(t, e, n, r) {
        let s = Q(e),
          i = X.get(e).spec.config,
          o = (r ? t.undone : t.done).popEvent(e, s);
        if (!o) return;
        let a = o.selection.resolve(o.transform.doc),
          l = (r ? t.done : t.undone).addTransform(o.transform, e.selection.getBookmark(), i, s),
          d = new q(r ? l : o.remaining, r ? o.remaining : l, null, 0, -1);
        n(o.transform.setSelection(a).setMeta(X, { redo: r, historyState: d }).scrollIntoView());
      }
      let V = !1,
        Y = null;
      function Q(t) {
        let e = t.plugins;
        if (Y != e) {
          (V = !1), (Y = e);
          for (let t = 0; t < e.length; t++)
            if (e[t].spec.historyPreserveItems) {
              V = !0;
              break;
            }
        }
        return V;
      }
      const X = new m.H$("history"),
        J = new m.H$("closeHistory");
      function Z(t = {}) {
        return (
          (t = { depth: t.depth || 100, newGroupDelay: t.newGroupDelay || 500 }),
          new m.Sy({
            key: X,
            state: {
              init: () => new q(_.empty, _.empty, null, 0, -1),
              apply: (e, n, r) =>
                (function (t, e, n, r) {
                  let s,
                    i = n.getMeta(X);
                  if (i) return i.historyState;
                  n.getMeta(J) && (t = new q(t.done, t.undone, null, 0, -1));
                  let o = n.getMeta("appendedTransaction");
                  if (0 == n.steps.length) return t;
                  if (o && o.getMeta(X))
                    return o.getMeta(X).redo
                      ? new q(
                          t.done.addTransform(n, void 0, r, Q(e)),
                          t.undone,
                          W(n.mapping.maps[n.steps.length - 1]),
                          t.prevTime,
                          t.prevComposition
                        )
                      : new q(t.done, t.undone.addTransform(n, void 0, r, Q(e)), null, t.prevTime, t.prevComposition);
                  if (!1 === n.getMeta("addToHistory") || (o && !1 === o.getMeta("addToHistory")))
                    return (s = n.getMeta("rebased"))
                      ? new q(t.done.rebased(n, s), t.undone.rebased(n, s), F(t.prevRanges, n.mapping), t.prevTime, t.prevComposition)
                      : new q(
                          t.done.addMaps(n.mapping.maps),
                          t.undone.addMaps(n.mapping.maps),
                          F(t.prevRanges, n.mapping),
                          t.prevTime,
                          t.prevComposition
                        );
                  {
                    let s = n.getMeta("composition"),
                      i =
                        0 == t.prevTime ||
                        (!o &&
                          t.prevComposition != s &&
                          (t.prevTime < (n.time || 0) - r.newGroupDelay ||
                            !(function (t, e) {
                              if (!e) return !1;
                              if (!t.docChanged) return !0;
                              let n = !1;
                              return (
                                t.mapping.maps[0].forEach((t, r) => {
                                  for (let s = 0; s < e.length; s += 2) t <= e[s + 1] && r >= e[s] && (n = !0);
                                }),
                                n
                              );
                            })(n, t.prevRanges))),
                      a = o ? F(t.prevRanges, n.mapping) : W(n.mapping.maps[n.steps.length - 1]);
                    return new q(
                      t.done.addTransform(n, i ? e.selection.getBookmark() : void 0, r, Q(e)),
                      _.empty,
                      a,
                      n.time,
                      null == s ? t.prevComposition : s
                    );
                  }
                })(n, r, e, t)
            },
            config: t,
            props: {
              handleDOMEvents: {
                beforeinput(t, e) {
                  let n = e.inputType,
                    r = "historyUndo" == n ? tt : "historyRedo" == n ? et : null;
                  return !!r && (e.preventDefault(), r(t.state, t.dispatch));
                }
              }
            }
          })
        );
      }
      const tt = (t, e) => {
          let n = X.getState(t);
          return !(!n || 0 == n.done.eventCount || (e && G(n, t, e, !1), 0));
        },
        et = (t, e) => {
          let n = X.getState(t);
          return !(!n || 0 == n.undone.eventCount || (e && G(n, t, e, !0), 0));
        },
        nt = r.hj.create({
          name: "history",
          addOptions: () => ({ depth: 100, newGroupDelay: 500 }),
          addCommands: () => ({
            undo:
              () =>
              ({ state: t, dispatch: e }) =>
                tt(t, e),
            redo:
              () =>
              ({ state: t, dispatch: e }) =>
                et(t, e)
          }),
          addProseMirrorPlugins() {
            return [Z(this.options)];
          },
          addKeyboardShortcuts() {
            return {
              "Mod-z": () => this.editor.commands.undo(),
              "Mod-Z": () => this.editor.commands.undo(),
              "Mod-y": () => this.editor.commands.redo(),
              "Mod-Y": () => this.editor.commands.redo(),
              "Shift-Mod-z": () => this.editor.commands.redo(),
              "Shift-Mod-Z": () => this.editor.commands.redo(),
              "Mod-я": () => this.editor.commands.undo(),
              "Shift-Mod-я": () => this.editor.commands.redo()
            };
          }
        });
      var rt = n(25748),
        st = n(73816);
      const it = r.NB.create({
          name: "listItem",
          addOptions: () => ({ HTMLAttributes: {}, bulletListTypeName: "bulletList", orderedListTypeName: "orderedList" }),
          content: "paragraph block*",
          defining: !0,
          parseHTML: () => [{ tag: "li" }],
          renderHTML({ HTMLAttributes: t }) {
            return ["li", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addKeyboardShortcuts() {
            return {
              Enter: () => this.editor.commands.splitListItem(this.name),
              Tab: () => this.editor.commands.sinkListItem(this.name),
              "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
            };
          }
        }),
        ot = r.NB.create({
          name: "listItem",
          addOptions: () => ({ HTMLAttributes: {}, bulletListTypeName: "bulletList", orderedListTypeName: "orderedList" }),
          content: "paragraph block*",
          defining: !0,
          parseHTML: () => [{ tag: "li" }],
          renderHTML({ HTMLAttributes: t }) {
            return ["li", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addKeyboardShortcuts() {
            return {
              Enter: () => this.editor.commands.splitListItem(this.name),
              Tab: () => this.editor.commands.sinkListItem(this.name),
              "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
            };
          }
        }),
        at = r.vc.create({
          name: "textStyle",
          addOptions: () => ({ HTMLAttributes: {} }),
          parseHTML: () => [{ tag: "span", getAttrs: (t) => !!t.hasAttribute("style") && {} }],
          renderHTML({ HTMLAttributes: t }) {
            return ["span", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              removeEmptyTextStyle:
                () =>
                ({ state: t, commands: e }) => {
                  const n = (0, r.Jo)(t, this.type);
                  return !!Object.entries(n).some(([, t]) => !!t) || e.unsetMark(this.name);
                }
            };
          }
        }),
        lt = /^(\d+)\.\s$/,
        dt = r.NB.create({
          name: "orderedList",
          addOptions: () => ({ itemTypeName: "listItem", HTMLAttributes: {}, keepMarks: !1, keepAttributes: !1 }),
          group: "block list",
          content() {
            return `${this.options.itemTypeName}+`;
          },
          addAttributes: () => ({
            start: { default: 1, parseHTML: (t) => (t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1) }
          }),
          parseHTML: () => [{ tag: "ol" }],
          renderHTML({ HTMLAttributes: t }) {
            const { start: e, ...n } = t;
            return 1 === e ? ["ol", (0, r.P1)(this.options.HTMLAttributes, n), 0] : ["ol", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              toggleOrderedList:
                () =>
                ({ commands: t, chain: e }) =>
                  this.options.keepAttributes
                    ? e()
                        .toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
                        .updateAttributes(ot.name, this.editor.getAttributes(at.name))
                        .run()
                    : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() };
          },
          addInputRules() {
            let t = (0, r.S0)({
              find: lt,
              type: this.type,
              getAttributes: (t) => ({ start: +t[1] }),
              joinPredicate: (t, e) => e.childCount + e.attrs.start === +t[1]
            });
            return (
              (this.options.keepMarks || this.options.keepAttributes) &&
                (t = (0, r.S0)({
                  find: lt,
                  type: this.type,
                  keepMarks: this.options.keepMarks,
                  keepAttributes: this.options.keepAttributes,
                  getAttributes: (t) => ({ start: +t[1], ...this.editor.getAttributes(at.name) }),
                  joinPredicate: (t, e) => e.childCount + e.attrs.start === +t[1],
                  editor: this.editor
                })),
              [t]
            );
          }
        }),
        ct = r.NB.create({
          name: "paragraph",
          priority: 1e3,
          addOptions: () => ({ HTMLAttributes: {} }),
          group: "block",
          content: "inline*",
          parseHTML: () => [{ tag: "p" }],
          renderHTML({ HTMLAttributes: t }) {
            return ["p", (0, r.P1)(this.options.HTMLAttributes, t), 0];
          },
          addCommands() {
            return {
              setParagraph:
                () =>
                ({ commands: t }) =>
                  t.setNode(this.name)
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
          }
        });
      var ut = n(4281);
      const ht = r.NB.create({ name: "text", group: "inline" }),
        pt = r.hj.create({
          name: "starterKit",
          addExtensions() {
            var t, e, n, r, s, a, l, d, u, h, m, g, f, b, v, T, w, A;
            const L = [];
            return (
              !1 !== this.options.blockquote && L.push(i.configure(null === (t = this.options) || void 0 === t ? void 0 : t.blockquote)),
              !1 !== this.options.bold && L.push(o.d8.configure(null === (e = this.options) || void 0 === e ? void 0 : e.bold)),
              !1 !== this.options.bulletList && L.push(c.configure(null === (n = this.options) || void 0 === n ? void 0 : n.bulletList)),
              !1 !== this.options.code && L.push(p.configure(null === (r = this.options) || void 0 === r ? void 0 : r.code)),
              !1 !== this.options.codeBlock && L.push(k.configure(null === (s = this.options) || void 0 === s ? void 0 : s.codeBlock)),
              !1 !== this.options.document && L.push(y.B.configure(null === (a = this.options) || void 0 === a ? void 0 : a.document)),
              !1 !== this.options.dropcursor && L.push(M.configure(null === (l = this.options) || void 0 === l ? void 0 : l.dropcursor)),
              !1 !== this.options.gapcursor && L.push(B.configure(null === (d = this.options) || void 0 === d ? void 0 : d.gapcursor)),
              !1 !== this.options.hardBreak && L.push(I.configure(null === (u = this.options) || void 0 === u ? void 0 : u.hardBreak)),
              !1 !== this.options.heading && L.push(P.X.configure(null === (h = this.options) || void 0 === h ? void 0 : h.heading)),
              !1 !== this.options.history && L.push(nt.configure(null === (m = this.options) || void 0 === m ? void 0 : m.history)),
              !1 !== this.options.horizontalRule &&
                L.push(rt.b.configure(null === (g = this.options) || void 0 === g ? void 0 : g.horizontalRule)),
              !1 !== this.options.italic && L.push(st.Tx.configure(null === (f = this.options) || void 0 === f ? void 0 : f.italic)),
              !1 !== this.options.listItem && L.push(it.configure(null === (b = this.options) || void 0 === b ? void 0 : b.listItem)),
              !1 !== this.options.orderedList && L.push(dt.configure(null === (v = this.options) || void 0 === v ? void 0 : v.orderedList)),
              !1 !== this.options.paragraph && L.push(ct.configure(null === (T = this.options) || void 0 === T ? void 0 : T.paragraph)),
              !1 !== this.options.strike && L.push(ut.Re.configure(null === (w = this.options) || void 0 === w ? void 0 : w.strike)),
              !1 !== this.options.text && L.push(ht.configure(null === (A = this.options) || void 0 === A ? void 0 : A.text)),
              L
            );
          }
        });
    },
    29204: (t, e, n) => {
      "use strict";
      n.d(e, { d7: () => i });
      var r = n(71257);
      const {
        Axios: s,
        AxiosError: i,
        CanceledError: o,
        isCancel: a,
        CancelToken: l,
        VERSION: d,
        all: c,
        Cancel: u,
        isAxiosError: h,
        spread: p,
        toFormData: m,
        AxiosHeaders: g,
        HttpStatusCode: f,
        formToJSON: k,
        getAdapter: y,
        mergeConfig: b
      } = r.default;
    },
    3098: (t, e, n) => {
      "use strict";
      n.d(e, { U: () => et });
      var r = n(73845),
        s = n(87823),
        i = n(9980);
      const o = new s.V_({
        nodes: {
          doc: { content: "block+" },
          paragraph: { content: "inline*", group: "block", parseDOM: [{ tag: "p" }], toDOM: () => ["p", 0] },
          blockquote: { content: "block+", group: "block", parseDOM: [{ tag: "blockquote" }], toDOM: () => ["blockquote", 0] },
          horizontal_rule: { group: "block", parseDOM: [{ tag: "hr" }], toDOM: () => ["div", ["hr"]] },
          heading: {
            attrs: { level: { default: 1 } },
            content: "(text | image)*",
            group: "block",
            defining: !0,
            parseDOM: [
              { tag: "h1", attrs: { level: 1 } },
              { tag: "h2", attrs: { level: 2 } },
              { tag: "h3", attrs: { level: 3 } },
              { tag: "h4", attrs: { level: 4 } },
              { tag: "h5", attrs: { level: 5 } },
              { tag: "h6", attrs: { level: 6 } }
            ],
            toDOM: (t) => ["h" + t.attrs.level, 0]
          },
          code_block: {
            content: "text*",
            group: "block",
            code: !0,
            defining: !0,
            marks: "",
            attrs: { params: { default: "" } },
            parseDOM: [{ tag: "pre", preserveWhitespace: "full", getAttrs: (t) => ({ params: t.getAttribute("data-params") || "" }) }],
            toDOM: (t) => ["pre", t.attrs.params ? { "data-params": t.attrs.params } : {}, ["code", 0]]
          },
          ordered_list: {
            content: "list_item+",
            group: "block",
            attrs: { order: { default: 1 }, tight: { default: !1 } },
            parseDOM: [
              {
                tag: "ol",
                getAttrs: (t) => ({ order: t.hasAttribute("start") ? +t.getAttribute("start") : 1, tight: t.hasAttribute("data-tight") })
              }
            ],
            toDOM: (t) => ["ol", { start: 1 == t.attrs.order ? null : t.attrs.order, "data-tight": t.attrs.tight ? "true" : null }, 0]
          },
          bullet_list: {
            content: "list_item+",
            group: "block",
            attrs: { tight: { default: !1 } },
            parseDOM: [{ tag: "ul", getAttrs: (t) => ({ tight: t.hasAttribute("data-tight") }) }],
            toDOM: (t) => ["ul", { "data-tight": t.attrs.tight ? "true" : null }, 0]
          },
          list_item: { content: "block+", defining: !0, parseDOM: [{ tag: "li" }], toDOM: () => ["li", 0] },
          text: { group: "inline" },
          image: {
            inline: !0,
            attrs: { src: {}, alt: { default: null }, title: { default: null } },
            group: "inline",
            draggable: !0,
            parseDOM: [
              {
                tag: "img[src]",
                getAttrs: (t) => ({ src: t.getAttribute("src"), title: t.getAttribute("title"), alt: t.getAttribute("alt") })
              }
            ],
            toDOM: (t) => ["img", t.attrs]
          },
          hard_break: { inline: !0, group: "inline", selectable: !1, parseDOM: [{ tag: "br" }], toDOM: () => ["br"] }
        },
        marks: {
          em: {
            parseDOM: [
              { tag: "i" },
              { tag: "em" },
              { style: "font-style=italic" },
              { style: "font-style=normal", clearMark: (t) => "em" == t.type.name }
            ],
            toDOM: () => ["em"]
          },
          strong: {
            parseDOM: [
              { tag: "strong" },
              { tag: "b", getAttrs: (t) => "normal" != t.style.fontWeight && null },
              { style: "font-weight=400", clearMark: (t) => "strong" == t.type.name },
              { style: "font-weight", getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null }
            ],
            toDOM: () => ["strong"]
          },
          link: {
            attrs: { href: {}, title: { default: null } },
            inclusive: !1,
            parseDOM: [{ tag: "a[href]", getAttrs: (t) => ({ href: t.getAttribute("href"), title: t.getAttribute("title") }) }],
            toDOM: (t) => ["a", t.attrs]
          },
          code: { parseDOM: [{ tag: "code" }], toDOM: () => ["code"] }
        }
      });
      class a {
        constructor(t, e) {
          (this.schema = t), (this.tokenHandlers = e), (this.stack = [{ type: t.topNodeType, attrs: null, content: [], marks: s.vc.none }]);
        }
        top() {
          return this.stack[this.stack.length - 1];
        }
        push(t) {
          this.stack.length && this.top().content.push(t);
        }
        addText(t) {
          if (!t) return;
          let e,
            n = this.top(),
            r = n.content,
            i = r[r.length - 1],
            o = this.schema.text(t, n.marks);
          i &&
          (e = (function (t, e) {
            if (t.isText && e.isText && s.vc.sameSet(t.marks, e.marks)) return t.withText(t.text + e.text);
          })(i, o))
            ? (r[r.length - 1] = e)
            : r.push(o);
        }
        openMark(t) {
          let e = this.top();
          e.marks = t.addToSet(e.marks);
        }
        closeMark(t) {
          let e = this.top();
          e.marks = t.removeFromSet(e.marks);
        }
        parseTokens(t) {
          for (let e = 0; e < t.length; e++) {
            let n = t[e],
              r = this.tokenHandlers[n.type];
            if (!r) throw new Error("Token type `" + n.type + "` not supported by Markdown parser");
            r(this, n, t, e);
          }
        }
        addNode(t, e, n) {
          let r = this.top(),
            s = t.createAndFill(e, n, r ? r.marks : []);
          return s ? (this.push(s), s) : null;
        }
        openNode(t, e) {
          this.stack.push({ type: t, attrs: e, content: [], marks: s.vc.none });
        }
        closeNode() {
          let t = this.stack.pop();
          return this.addNode(t.type, t.attrs, t.content);
        }
      }
      function l(t, e, n, r) {
        return t.getAttrs ? t.getAttrs(e, n, r) : t.attrs instanceof Function ? t.attrs(e) : t.attrs;
      }
      function d(t, e) {
        return t.noCloseToken || "code_inline" == e || "code_block" == e || "fence" == e;
      }
      function c(t) {
        return "\n" == t[t.length - 1] ? t.slice(0, t.length - 1) : t;
      }
      function u() {}
      function h(t, e) {
        for (; ++e < t.length; ) if ("list_item_open" != t[e].type) return t[e].hidden;
        return !1;
      }
      new (class {
        constructor(t, e, n) {
          (this.schema = t),
            (this.tokenizer = e),
            (this.tokens = n),
            (this.tokenHandlers = (function (t, e) {
              let n = Object.create(null);
              for (let r in e) {
                let s = e[r];
                if (s.block) {
                  let e = t.nodeType(s.block);
                  d(s, r)
                    ? (n[r] = (t, n, r, i) => {
                        t.openNode(e, l(s, n, r, i)), t.addText(c(n.content)), t.closeNode();
                      })
                    : ((n[r + "_open"] = (t, n, r, i) => t.openNode(e, l(s, n, r, i))), (n[r + "_close"] = (t) => t.closeNode()));
                } else if (s.node) {
                  let e = t.nodeType(s.node);
                  n[r] = (t, n, r, i) => t.addNode(e, l(s, n, r, i));
                } else if (s.mark) {
                  let e = t.marks[s.mark];
                  d(s, r)
                    ? (n[r] = (t, n, r, i) => {
                        t.openMark(e.create(l(s, n, r, i))), t.addText(c(n.content)), t.closeMark(e);
                      })
                    : ((n[r + "_open"] = (t, n, r, i) => t.openMark(e.create(l(s, n, r, i)))), (n[r + "_close"] = (t) => t.closeMark(e)));
                } else {
                  if (!s.ignore) throw new RangeError("Unrecognized parsing spec " + JSON.stringify(s));
                  d(s, r) ? (n[r] = u) : ((n[r + "_open"] = u), (n[r + "_close"] = u));
                }
              }
              return (
                (n.text = (t, e) => t.addText(e.content)),
                (n.inline = (t, e) => t.parseTokens(e.children)),
                (n.softbreak = n.softbreak || ((t) => t.addText(" "))),
                n
              );
            })(t, n));
        }
        parse(t, e = {}) {
          let n,
            r = new a(this.schema, this.tokenHandlers);
          r.parseTokens(this.tokenizer.parse(t, e));
          do {
            n = r.closeNode();
          } while (r.stack.length);
          return n || this.schema.topNodeType.createAndFill();
        }
      })(o, i("commonmark", { html: !1 }), {
        blockquote: { block: "blockquote" },
        paragraph: { block: "paragraph" },
        list_item: { block: "list_item" },
        bullet_list: { block: "bullet_list", getAttrs: (t, e, n) => ({ tight: h(e, n) }) },
        ordered_list: { block: "ordered_list", getAttrs: (t, e, n) => ({ order: +t.attrGet("start") || 1, tight: h(e, n) }) },
        heading: { block: "heading", getAttrs: (t) => ({ level: +t.tag.slice(1) }) },
        code_block: { block: "code_block", noCloseToken: !0 },
        fence: { block: "code_block", getAttrs: (t) => ({ params: t.info || "" }), noCloseToken: !0 },
        hr: { node: "horizontal_rule" },
        image: {
          node: "image",
          getAttrs: (t) => ({
            src: t.attrGet("src"),
            title: t.attrGet("title") || null,
            alt: (t.children[0] && t.children[0].content) || null
          })
        },
        hardbreak: { node: "hard_break" },
        em: { mark: "em" },
        strong: { mark: "strong" },
        link: { mark: "link", getAttrs: (t) => ({ href: t.attrGet("href"), title: t.attrGet("title") || null }) },
        code_inline: { mark: "code", noCloseToken: !0 }
      });
      const p = new (class {
        constructor(t, e, n = {}) {
          (this.nodes = t), (this.marks = e), (this.options = n);
        }
        serialize(t, e = {}) {
          e = Object.assign({}, this.options, e);
          let n = new g(this.nodes, this.marks, e);
          return n.renderContent(t), n.out;
        }
      })(
        {
          blockquote(t, e) {
            t.wrapBlock("> ", null, e, () => t.renderContent(e));
          },
          code_block(t, e) {
            const n = e.textContent.match(/`{3,}/gm),
              r = n ? n.sort().slice(-1)[0] + "`" : "```";
            t.write(r + (e.attrs.params || "") + "\n"), t.text(e.textContent, !1), t.write("\n"), t.write(r), t.closeBlock(e);
          },
          heading(t, e) {
            t.write(t.repeat("#", e.attrs.level) + " "), t.renderInline(e), t.closeBlock(e);
          },
          horizontal_rule(t, e) {
            t.write(e.attrs.markup || "---"), t.closeBlock(e);
          },
          bullet_list(t, e) {
            t.renderList(e, "  ", () => (e.attrs.bullet || "*") + " ");
          },
          ordered_list(t, e) {
            let n = e.attrs.order || 1,
              r = String(n + e.childCount - 1).length,
              s = t.repeat(" ", r + 2);
            t.renderList(e, s, (e) => {
              let s = String(n + e);
              return t.repeat(" ", r - s.length) + s + ". ";
            });
          },
          list_item(t, e) {
            t.renderContent(e);
          },
          paragraph(t, e) {
            t.renderInline(e), t.closeBlock(e);
          },
          image(t, e) {
            t.write(
              "![" +
                t.esc(e.attrs.alt || "") +
                "](" +
                e.attrs.src.replace(/[\(\)]/g, "\\$&") +
                (e.attrs.title ? ' "' + e.attrs.title.replace(/"/g, '\\"') + '"' : "") +
                ")"
            );
          },
          hard_break(t, e, n, r) {
            for (let s = r + 1; s < n.childCount; s++) if (n.child(s).type != e.type) return void t.write("\\\n");
          },
          text(t, e) {
            t.text(e.text, !t.inAutolink);
          }
        },
        {
          em: { open: "*", close: "*", mixable: !0, expelEnclosingWhitespace: !0 },
          strong: { open: "**", close: "**", mixable: !0, expelEnclosingWhitespace: !0 },
          link: {
            open: (t, e, n, r) => (
              (t.inAutolink = (function (t, e, n) {
                if (t.attrs.title || !/^\w+:/.test(t.attrs.href)) return !1;
                let r = e.child(n);
                return !(
                  !r.isText ||
                  r.text != t.attrs.href ||
                  r.marks[r.marks.length - 1] != t ||
                  (n != e.childCount - 1 && t.isInSet(e.child(n + 1).marks))
                );
              })(e, n, r)),
              t.inAutolink ? "<" : "["
            ),
            close(t, e, n, r) {
              let { inAutolink: s } = t;
              return (
                (t.inAutolink = void 0),
                s
                  ? ">"
                  : "](" +
                    e.attrs.href.replace(/[\(\)"]/g, "\\$&") +
                    (e.attrs.title ? ` "${e.attrs.title.replace(/"/g, '\\"')}"` : "") +
                    ")"
              );
            },
            mixable: !0
          },
          code: { open: (t, e, n, r) => m(n.child(r), -1), close: (t, e, n, r) => m(n.child(r - 1), 1), escape: !1 }
        }
      );
      function m(t, e) {
        let n,
          r = /`+/g,
          s = 0;
        if (t.isText) for (; (n = r.exec(t.text)); ) s = Math.max(s, n[0].length);
        let i = s > 0 && e > 0 ? " `" : "`";
        for (let t = 0; t < s; t++) i += "`";
        return s > 0 && e < 0 && (i += " "), i;
      }
      class g {
        constructor(t, e, n) {
          (this.nodes = t),
            (this.marks = e),
            (this.options = n),
            (this.delim = ""),
            (this.out = ""),
            (this.closed = null),
            (this.inAutolink = void 0),
            (this.atBlockStart = !1),
            (this.inTightList = !1),
            void 0 === this.options.tightLists && (this.options.tightLists = !1),
            void 0 === this.options.hardBreakNodeName && (this.options.hardBreakNodeName = "hard_break");
        }
        flushClose(t = 2) {
          if (this.closed) {
            if ((this.atBlank() || (this.out += "\n"), t > 1)) {
              let e = this.delim,
                n = /\s+$/.exec(e);
              n && (e = e.slice(0, e.length - n[0].length));
              for (let n = 1; n < t; n++) this.out += e + "\n";
            }
            this.closed = null;
          }
        }
        wrapBlock(t, e, n, r) {
          let s = this.delim;
          this.write(null != e ? e : t), (this.delim += t), r(), (this.delim = s), this.closeBlock(n);
        }
        atBlank() {
          return /(^|\n)$/.test(this.out);
        }
        ensureNewLine() {
          this.atBlank() || (this.out += "\n");
        }
        write(t) {
          this.flushClose(), this.delim && this.atBlank() && (this.out += this.delim), t && (this.out += t);
        }
        closeBlock(t) {
          this.closed = t;
        }
        text(t, e = !0) {
          let n = t.split("\n");
          for (let t = 0; t < n.length; t++)
            this.write(),
              !e && "[" == n[t][0] && /(^|[^\\])\!$/.test(this.out) && (this.out = this.out.slice(0, this.out.length - 1) + "\\!"),
              (this.out += e ? this.esc(n[t], this.atBlockStart) : n[t]),
              t != n.length - 1 && (this.out += "\n");
        }
        render(t, e, n) {
          if ("number" == typeof e) throw new Error("!");
          if (!this.nodes[t.type.name]) throw new Error("Token type `" + t.type.name + "` not supported by Markdown renderer");
          this.nodes[t.type.name](this, t, e, n);
        }
        renderContent(t) {
          t.forEach((e, n, r) => this.render(e, t, r));
        }
        renderInline(t) {
          this.atBlockStart = !0;
          let e = [],
            n = "",
            r = (r, s, i) => {
              let o = r ? r.marks : [];
              r &&
                r.type.name === this.options.hardBreakNodeName &&
                (o = o.filter((e) => {
                  if (i + 1 == t.childCount) return !1;
                  let n = t.child(i + 1);
                  return e.isInSet(n.marks) && (!n.isText || /\S/.test(n.text));
                }));
              let a = n;
              if (
                ((n = ""),
                r &&
                  r.isText &&
                  o.some((t) => {
                    let n = this.marks[t.type.name];
                    return n && n.expelEnclosingWhitespace && !t.isInSet(e);
                  }))
              ) {
                let [t, n, s] = /^(\s*)(.*)$/m.exec(r.text);
                n && ((a += n), (r = s ? r.withText(s) : null) || (o = e));
              }
              if (
                r &&
                r.isText &&
                o.some((e) => {
                  let n = this.marks[e.type.name];
                  return n && n.expelEnclosingWhitespace && (i == t.childCount - 1 || !e.isInSet(t.child(i + 1).marks));
                })
              ) {
                let [t, s, i] = /^(.*?)(\s*)$/m.exec(r.text);
                i && ((n = i), (r = s ? r.withText(s) : null) || (o = e));
              }
              let l = o.length ? o[o.length - 1] : null,
                d = l && !1 === this.marks[l.type.name].escape,
                c = o.length - (d ? 1 : 0);
              t: for (let t = 0; t < c; t++) {
                let n = o[t];
                if (!this.marks[n.type.name].mixable) break;
                for (let r = 0; r < e.length; r++) {
                  let s = e[r];
                  if (!this.marks[s.type.name].mixable) break;
                  if (n.eq(s)) {
                    t > r
                      ? (o = o
                          .slice(0, r)
                          .concat(n)
                          .concat(o.slice(r, t))
                          .concat(o.slice(t + 1, c)))
                      : r > t &&
                        (o = o
                          .slice(0, t)
                          .concat(o.slice(t + 1, r))
                          .concat(n)
                          .concat(o.slice(r, c)));
                    continue t;
                  }
                }
              }
              let u = 0;
              for (; u < Math.min(e.length, c) && o[u].eq(e[u]); ) ++u;
              for (; u < e.length; ) this.text(this.markString(e.pop(), !1, t, i), !1);
              if ((a && this.text(a), r)) {
                for (; e.length < c; ) {
                  let n = o[e.length];
                  e.push(n), this.text(this.markString(n, !0, t, i), !1), (this.atBlockStart = !1);
                }
                d && r.isText
                  ? this.text(this.markString(l, !0, t, i) + r.text + this.markString(l, !1, t, i + 1), !1)
                  : this.render(r, t, i),
                  (this.atBlockStart = !1);
              }
              (null == r ? void 0 : r.isText) && r.nodeSize > 0 && (this.atBlockStart = !1);
            };
          t.forEach(r), r(null, 0, t.childCount), (this.atBlockStart = !1);
        }
        renderList(t, e, n) {
          this.closed && this.closed.type == t.type ? this.flushClose(3) : this.inTightList && this.flushClose(1);
          let r = void 0 !== t.attrs.tight ? t.attrs.tight : this.options.tightLists,
            s = this.inTightList;
          (this.inTightList = r),
            t.forEach((s, i, o) => {
              o && r && this.flushClose(1), this.wrapBlock(e, n(o), t, () => this.render(s, t, o));
            }),
            (this.inTightList = s);
        }
        esc(t, e = !1) {
          return (
            (t = t.replace(/[`*\\~\[\]_]/g, (e, n) =>
              "_" == e && n > 0 && n + 1 < t.length && t[n - 1].match(/\w/) && t[n + 1].match(/\w/) ? e : "\\" + e
            )),
            e &&
              (t = t
                .replace(/^[\-*+>]/, "\\$&")
                .replace(/^(\s*)(#{1,6})(\s|$)/, "$1\\$2$3")
                .replace(/^(\s*\d+)\.\s/, "$1\\. ")),
            this.options.escapeExtraCharacters && (t = t.replace(this.options.escapeExtraCharacters, "\\$&")),
            t
          );
        }
        quote(t) {
          let e = -1 == t.indexOf('"') ? '""' : -1 == t.indexOf("'") ? "''" : "()";
          return e[0] + t + e[1];
        }
        repeat(t, e) {
          let n = "";
          for (let r = 0; r < e; r++) n += t;
          return n;
        }
        markString(t, e, n, r) {
          let s = this.marks[t.type.name],
            i = e ? s.open : s.close;
          return "string" == typeof i ? i : i(this, t, n, r);
        }
        getEnclosingWhitespace(t) {
          return { leading: (t.match(/^(\s+)/) || [void 0])[0], trailing: (t.match(/(\s+)$/) || [void 0])[0] };
        }
      }
      var f = n(84651),
        k = n(2376),
        y = Object.defineProperty,
        b = (t, e, n) => (
          ((t, e, n) => {
            e in t ? y(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
          })(t, "symbol" != typeof e ? e + "" : e, n),
          n
        );
      const v = r.hj.create({
          name: "markdownTightLists",
          addOptions: () => ({ tight: !0, tightClass: "tight", listTypes: ["bulletList", "orderedList"] }),
          addGlobalAttributes() {
            return [
              {
                types: this.options.listTypes,
                attributes: {
                  tight: {
                    default: this.options.tight,
                    parseHTML: (t) => "true" === t.getAttribute("data-tight") || !t.querySelector("p"),
                    renderHTML: (t) => ({ class: t.tight ? this.options.tightClass : null, "data-tight": t.tight ? "true" : null })
                  }
                }
              }
            ];
          },
          addCommands() {
            var t = this;
            return {
              toggleTight: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return (n) => {
                  let { editor: r, commands: s } = n;
                  return t.options.listTypes.some((t) =>
                    (function (t) {
                      if (!r.isActive(t)) return !1;
                      const n = r.getAttributes(t);
                      return s.updateAttributes(t, { tight: null != e ? e : !(null != n && n.tight) });
                    })(t)
                  );
                };
              }
            };
          }
        }),
        T = i();
      function M(t, e) {
        return (
          T.inline.State.prototype.scanDelims.call({ src: t, posMax: t.length }), new T.inline.State(t, null, null, []).scanDelims(e, !0)
        );
      }
      function w(t, e, n, r) {
        let s = t.substring(0, n) + t.substring(n + e.length);
        return (s = s.substring(0, n + r) + e + s.substring(n + r)), s;
      }
      class A extends g {
        constructor(t, e, n) {
          super(t, e, null != n ? n : {}), (this.inlines = []);
        }
        render(t, e, n) {
          super.render(t, e, n);
          const r = this.inlines[this.inlines.length - 1];
          if (null != r && r.start && null != r && r.end) {
            const { delimiter: t, start: e, end: n } = this.normalizeInline(r);
            (this.out = (function (t, e, n, r) {
              let s = { text: t, from: n, to: r };
              return (
                (s = (function (t, e, n, r) {
                  let s = n,
                    i = t;
                  for (; s < r && !M(i, s).can_open; ) (i = w(i, e, s, 1)), s++;
                  return { text: i, from: s, to: r };
                })(s.text, e, s.from, s.to)),
                (s = (function (t, e, n, r) {
                  let s = r,
                    i = t;
                  for (; s > n && !M(i, s).can_close; ) (i = w(i, e, s, -1)), s--;
                  return { text: i, from: n, to: s };
                })(s.text, e, s.from, s.to)),
                s.to - s.from < e.length + 1 && (s.text = s.text.substring(0, s.from) + s.text.substring(s.to + e.length)),
                s.text
              );
            })(this.out, t, e, n)),
              this.inlines.pop();
          }
        }
        markString(t, e, n, r) {
          const s = this.marks[t.type.name];
          if (s.expelEnclosingWhitespace)
            if (e) this.inlines.push({ start: this.out.length, delimiter: s.open });
            else {
              const t = this.inlines.pop();
              this.inlines.push({ ...t, end: this.out.length });
            }
          return super.markString(t, e, n, r);
        }
        normalizeInline(t) {
          let { start: e, end: n } = t;
          for (; this.out.charAt(e).match(/\s/); ) e++;
          return { ...t, start: e };
        }
      }
      const L = r.vc.create({
        name: "markdownHTMLMark",
        addStorage: () => ({
          markdown: {
            serialize: {
              open(t, e) {
                var n, r;
                return this.editor.storage.markdown.options.html
                  ? null !== (n = null === (r = x(e)) || void 0 === r ? void 0 : r[0]) && void 0 !== n
                    ? n
                    : ""
                  : (console.warn(`Tiptap Markdown: "${e.type.name}" mark is only available in html mode`), "");
              },
              close(t, e) {
                var n, r;
                return this.editor.storage.markdown.options.html &&
                  null !== (n = null === (r = x(e)) || void 0 === r ? void 0 : r[1]) &&
                  void 0 !== n
                  ? n
                  : "";
              }
            },
            parse: {}
          }
        })
      });
      function x(t) {
        const e = t.type.schema,
          n = e.text(" ", [t]),
          i = (0, r.d1)(s.HY.from(n), e).match(/^(<.*?>) (<\/.*?>)$/);
        return i ? [i[1], i[2]] : null;
      }
      function C(t) {
        const e = `<body>${t}</body>`;
        return new window.DOMParser().parseFromString(e, "text/html").body;
      }
      const S = r.NB.create({
          name: "markdownHTMLNode",
          addStorage: () => ({
            markdown: {
              serialize(t, e, n) {
                this.editor.storage.markdown.options.html
                  ? t.write(
                      (function (t, e) {
                        const n = t.type.schema,
                          i = (0, r.d1)(s.HY.from(t), n);
                        return t.isBlock && (e instanceof s.HY || e.type.name === n.topNodeType.name)
                          ? (function (t) {
                              const e = C(t).firstElementChild;
                              return (e.innerHTML = e.innerHTML.trim() ? `\n${e.innerHTML}\n` : "\n"), e.outerHTML;
                            })(i)
                          : i;
                      })(e, n)
                    )
                  : (console.warn(`Tiptap Markdown: "${e.type.name}" node is only available in html mode`), t.write(`[${e.type.name}]`)),
                  e.isBlock && t.closeBlock(e);
              },
              parse: {}
            }
          })
        }),
        E = r.NB.create({ name: "blockquote" }).extend({ addStorage: () => ({ markdown: { serialize: p.nodes.blockquote, parse: {} } }) }),
        H = r.NB.create({ name: "bulletList" }).extend({
          addStorage: () => ({
            markdown: {
              serialize(t, e) {
                return t.renderList(e, "  ", () => (this.editor.storage.markdown.options.bulletListMarker || "-") + " ");
              },
              parse: {}
            }
          })
        }),
        O = r.NB.create({ name: "codeBlock" }).extend({
          addStorage: () => ({
            markdown: {
              serialize(t, e) {
                t.write("```" + (e.attrs.language || "") + "\n"),
                  t.text(e.textContent, !1),
                  t.ensureNewLine(),
                  t.write("```"),
                  t.closeBlock(e);
              },
              parse: {
                setup(t) {
                  var e;
                  t.set({ langPrefix: null !== (e = this.options.languageClassPrefix) && void 0 !== e ? e : "language-" });
                },
                updateDOM(t) {
                  t.innerHTML = t.innerHTML.replace(/\n<\/code><\/pre>/g, "</code></pre>");
                }
              }
            }
          })
        }),
        N = r.NB.create({ name: "hardBreak" }).extend({ addStorage: () => ({ markdown: { serialize: p.nodes.hard_break, parse: {} } }) }),
        B = r.NB.create({ name: "heading" }).extend({ addStorage: () => ({ markdown: { serialize: p.nodes.heading, parse: {} } }) }),
        I = r.NB.create({ name: "horizontalRule" }).extend({
          addStorage: () => ({ markdown: { serialize: p.nodes.horizontal_rule, parse: {} } })
        }),
        P = r.NB.create({ name: "image" }).extend({ addStorage: () => ({ markdown: { serialize: p.nodes.image, parse: {} } }) }),
        R = r.NB.create({ name: "listItem" }).extend({ addStorage: () => ({ markdown: { serialize: p.nodes.list_item, parse: {} } }) }),
        z = r.NB.create({ name: "orderedList" }).extend({
          addStorage: () => ({
            markdown: {
              serialize(t, e) {
                const n = e.attrs.start || 1,
                  r = String(n + e.childCount - 1).length,
                  s = t.repeat(" ", r + 2);
                t.renderList(e, s, (e) => {
                  const s = String(n + e);
                  return t.repeat(" ", r - s.length) + s + ". ";
                });
              },
              parse: {}
            }
          })
        }),
        $ = r.NB.create({ name: "paragraph" }).extend({ addStorage: () => ({ markdown: { serialize: p.nodes.paragraph, parse: {} } }) });
      function D(t) {
        var e, n;
        return null !== (e = null == t || null === (n = t.content) || void 0 === n ? void 0 : n.content) && void 0 !== e ? e : [];
      }
      const j = r.NB.create({ name: "table" }).extend({
        addStorage: () => ({
          markdown: {
            serialize(t, e, n) {
              !(function (t) {
                const e = D(t),
                  n = e[0],
                  r = e.slice(1);
                return (
                  !D(n).some((t) => "tableHeader" !== t.type.name || _(t) || t.childCount > 1) &&
                  !r.some((t) => D(t).some((t) => "tableHeader" === t.type.name || _(t) || t.childCount > 1))
                );
              })(e)
                ? S.storage.markdown.serialize.call(this, t, e, n)
                : (e.forEach((e, n, r) => {
                    if (
                      (t.write("| "),
                      e.forEach((e, n, r) => {
                        r && t.write(" | ");
                        const s = e.firstChild;
                        s.textContent.trim() && t.renderInline(s);
                      }),
                      t.write(" |"),
                      t.ensureNewLine(),
                      !r)
                    ) {
                      const n = Array.from({ length: e.childCount })
                        .map(() => "---")
                        .join(" | ");
                      t.write(`| ${n} |`), t.ensureNewLine();
                    }
                  }),
                  t.closeBlock(e));
            },
            parse: {}
          }
        })
      });
      function _(t) {
        return t.attrs.colspan > 1 || t.attrs.rowspan > 1;
      }
      const K = r.NB.create({ name: "taskItem" }).extend({
          addStorage: () => ({
            markdown: {
              serialize(t, e) {
                const n = e.attrs.checked ? "[x]" : "[ ]";
                t.write(`${n} `), t.renderContent(e);
              },
              parse: {
                updateDOM(t) {
                  [...t.querySelectorAll(".task-list-item")].forEach((t) => {
                    const e = t.querySelector("input");
                    t.setAttribute("data-type", "taskItem"), e && (t.setAttribute("data-checked", e.checked), e.remove());
                  });
                }
              }
            }
          })
        }),
        q = r.NB.create({ name: "taskList" }).extend({
          addStorage: () => ({
            markdown: {
              serialize: H.storage.markdown.serialize,
              parse: {
                setup(t) {
                  t.use(f);
                },
                updateDOM(t) {
                  [...t.querySelectorAll(".contains-task-list")].forEach((t) => {
                    t.setAttribute("data-type", "taskList");
                  });
                }
              }
            }
          })
        }),
        U = r.NB.create({ name: "text" }).extend({
          addStorage: () => ({
            markdown: {
              serialize(t, e) {
                var n;
                t.text(null == (n = e.text) ? void 0 : n.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
              },
              parse: {}
            }
          })
        }),
        W = r.vc.create({ name: "bold" }).extend({ addStorage: () => ({ markdown: { serialize: p.marks.strong, parse: {} } }) }),
        F = r.vc.create({ name: "code" }).extend({ addStorage: () => ({ markdown: { serialize: p.marks.code, parse: {} } }) }),
        G = r.vc.create({ name: "italic" }).extend({ addStorage: () => ({ markdown: { serialize: p.marks.em, parse: {} } }) }),
        V = r.vc.create({ name: "link" }).extend({ addStorage: () => ({ markdown: { serialize: p.marks.link, parse: {} } }) }),
        Y = r.vc
          .create({ name: "strike" })
          .extend({
            addStorage: () => ({ markdown: { serialize: { open: "~~", close: "~~", expelEnclosingWhitespace: !0 }, parse: {} } })
          }),
        Q = [E, H, O, N, B, I, S, P, R, z, $, j, K, q, U, W, F, L, G, V, Y];
      function X(t) {
        var e, n;
        const r = null === (e = t.storage) || void 0 === e ? void 0 : e.markdown,
          s = null === (n = Q.find((e) => e.name === t.name)) || void 0 === n ? void 0 : n.storage.markdown;
        return r || s ? { ...s, ...r } : null;
      }
      class J {
        constructor(t) {
          b(this, "editor", null), (this.editor = t);
        }
        serialize(t) {
          const e = new A(this.nodes, this.marks, { hardBreakNodeName: N.name });
          return e.renderContent(t), e.out;
        }
        get nodes() {
          var t;
          return {
            ...Object.fromEntries(Object.keys(this.editor.schema.nodes).map((t) => [t, this.serializeNode(S)])),
            ...Object.fromEntries(
              null !==
                (t = this.editor.extensionManager.extensions
                  .filter((t) => "node" === t.type && this.serializeNode(t))
                  .map((t) => [t.name, this.serializeNode(t)])) && void 0 !== t
                ? t
                : []
            )
          };
        }
        get marks() {
          var t;
          return {
            ...Object.fromEntries(Object.keys(this.editor.schema.marks).map((t) => [t, this.serializeMark(L)])),
            ...Object.fromEntries(
              null !==
                (t = this.editor.extensionManager.extensions
                  .filter((t) => "mark" === t.type && this.serializeMark(t))
                  .map((t) => [t.name, this.serializeMark(t)])) && void 0 !== t
                ? t
                : []
            )
          };
        }
        serializeNode(t) {
          var e;
          return null === (e = X(t)) || void 0 === e || null === (e = e.serialize) || void 0 === e
            ? void 0
            : e.bind({ editor: this.editor, options: t.options });
        }
        serializeMark(t) {
          var e;
          const n = null === (e = X(t)) || void 0 === e ? void 0 : e.serialize;
          return n
            ? {
                ...n,
                open: "function" == typeof n.open ? n.open.bind({ editor: this.editor, options: t.options }) : n.open,
                close: "function" == typeof n.close ? n.close.bind({ editor: this.editor, options: t.options }) : n.close
              }
            : null;
        }
      }
      class Z {
        constructor(t, e) {
          b(this, "editor", null), b(this, "md", null);
          let { html: n, linkify: r, breaks: s } = e;
          (this.editor = t), (this.md = this.withPatchedRenderer(i({ html: n, linkify: r, breaks: s })));
        }
        parse(t) {
          let { inline: e } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ("string" == typeof t) {
            this.editor.extensionManager.extensions.forEach((t) => {
              var e;
              return null === (e = X(t)) || void 0 === e || null === (e = e.parse) || void 0 === e || null === (e = e.setup) || void 0 === e
                ? void 0
                : e.call({ editor: this.editor, options: t.options }, this.md);
            });
            const n = C(this.md.render(t));
            return (
              this.editor.extensionManager.extensions.forEach((t) => {
                var e;
                return null === (e = X(t)) ||
                  void 0 === e ||
                  null === (e = e.parse) ||
                  void 0 === e ||
                  null === (e = e.updateDOM) ||
                  void 0 === e
                  ? void 0
                  : e.call({ editor: this.editor, options: t.options }, n);
              }),
              this.normalizeDOM(n, { inline: e, content: t }),
              n.innerHTML
            );
          }
          return t;
        }
        normalizeDOM(t, e) {
          let { inline: n, content: r } = e;
          return (
            this.normalizeBlocks(t),
            t.querySelectorAll("*").forEach((t) => {
              var e;
              (null === (e = t.nextSibling) || void 0 === e ? void 0 : e.nodeType) !== Node.TEXT_NODE ||
                t.closest("pre") ||
                (t.nextSibling.textContent = t.nextSibling.textContent.replace(/^\n/, ""));
            }),
            n && this.normalizeInline(t, r),
            t
          );
        }
        normalizeBlocks(t) {
          const e = Object.values(this.editor.schema.nodes)
            .filter((t) => t.isBlock)
            .map((t) => {
              var e;
              return null === (e = t.spec.parseDOM) || void 0 === e ? void 0 : e.map((t) => t.tag);
            })
            .flat()
            .filter(Boolean)
            .join(",");
          e &&
            [...t.querySelectorAll(e)].forEach((t) => {
              t.parentElement.matches("p") &&
                (function (t) {
                  const e = t.parentElement,
                    n = e.cloneNode();
                  for (; e.firstChild && e.firstChild !== t; ) n.appendChild(e.firstChild);
                  n.childNodes.length > 0 && e.parentElement.insertBefore(n, e),
                    e.parentElement.insertBefore(t, e),
                    0 === e.childNodes.length && e.remove();
                })(t);
            });
        }
        normalizeInline(t, e) {
          var n;
          if (null !== (n = t.firstElementChild) && void 0 !== n && n.matches("p")) {
            var r, s, i, o;
            const n = t.firstElementChild,
              { nextElementSibling: a } = n,
              l = null !== (r = null === (s = e.match(/^\s+/)) || void 0 === s ? void 0 : s[0]) && void 0 !== r ? r : "",
              d = a ? "" : null !== (i = null === (o = e.match(/\s+$/)) || void 0 === o ? void 0 : o[0]) && void 0 !== i ? i : "";
            if (e.match(/^\n\n/)) return void (n.innerHTML = `${n.innerHTML}${d}`);
            !(function (t) {
              const e = t.parentNode;
              for (; t.firstChild; ) e.insertBefore(t.firstChild, t);
              e.removeChild(t);
            })(n),
              (t.innerHTML = `${l}${t.innerHTML}${d}`);
          }
        }
        withPatchedRenderer(t) {
          const e = (t) =>
            function () {
              const e = t(...arguments);
              return "\n" === e ? e : "\n" === e[e.length - 1] ? e.slice(0, -1) : e;
            };
          return (
            (t.renderer.rules.hardbreak = e(t.renderer.rules.hardbreak)),
            (t.renderer.rules.softbreak = e(t.renderer.rules.softbreak)),
            (t.renderer.rules.fence = e(t.renderer.rules.fence)),
            (t.renderer.rules.code_block = e(t.renderer.rules.code_block)),
            (t.renderer.renderToken = e(t.renderer.renderToken.bind(t.renderer))),
            t
          );
        }
      }
      const tt = r.hj.create({
          name: "markdownClipboard",
          addOptions: () => ({ transformPastedText: !1, transformCopiedText: !1 }),
          addProseMirrorPlugins() {
            return [
              new k.Sy({
                key: new k.H$("markdownClipboard"),
                props: {
                  clipboardTextParser: (t, e, n) => {
                    if (n || !this.options.transformPastedText) return null;
                    const r = this.editor.storage.markdown.parser.parse(t, { inline: !0 });
                    return s.aw.fromSchema(this.editor.schema).parseSlice(C(r), { preserveWhitespace: !0, context: e });
                  },
                  clipboardTextSerializer: (t) =>
                    this.options.transformCopiedText ? this.editor.storage.markdown.serializer.serialize(t.content) : null
                }
              })
            ];
          }
        }),
        et = r.hj.create({
          name: "markdown",
          priority: 50,
          addOptions: () => ({
            html: !0,
            tightLists: !0,
            tightListClass: "tight",
            bulletListMarker: "-",
            linkify: !1,
            breaks: !1,
            transformPastedText: !1,
            transformCopiedText: !1
          }),
          addCommands() {
            const t = r.Rw.Commands.config.addCommands();
            return {
              setContent: (e, n, r) => (s) => t.setContent(s.editor.storage.markdown.parser.parse(e), n, r)(s),
              insertContentAt: (e, n, r) => (s) => t.insertContentAt(e, s.editor.storage.markdown.parser.parse(n, { inline: !0 }), r)(s)
            };
          },
          onBeforeCreate() {
            (this.editor.storage.markdown = {
              options: { ...this.options },
              parser: new Z(this.editor, this.options),
              serializer: new J(this.editor),
              getMarkdown: () => this.editor.storage.markdown.serializer.serialize(this.editor.state.doc)
            }),
              (this.editor.options.initialContent = this.editor.options.content),
              (this.editor.options.content = this.editor.storage.markdown.parser.parse(this.editor.options.content));
          },
          onCreate() {
            (this.editor.options.content = this.editor.options.initialContent), delete this.editor.options.initialContent;
          },
          addStorage: () => ({}),
          addExtensions() {
            return [
              v.configure({ tight: this.options.tightLists, tightClass: this.options.tightListClass }),
              tt.configure({ transformPastedText: this.options.transformPastedText, transformCopiedText: this.options.transformCopiedText })
            ];
          }
        });
    }
  }
]);
