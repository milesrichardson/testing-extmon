(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4643],
  {
    84651: (t) => {
      var e = !0,
        n = !1,
        r = !1;
      function i(t, e, n) {
        var r = t.attrIndex(e),
          i = [e, n];
        r < 0 ? t.attrPush(i) : (t.attrs[r] = i);
      }
      function o(t, e) {
        for (var n = t[e].level - 1, r = e - 1; r >= 0; r--) if (t[r].level === n) return r;
        return -1;
      }
      function s(t, e) {
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
      function a(t, i) {
        if (
          (t.children.unshift(
            (function (t, n) {
              var r = new n("html_inline", "", 0),
                i = e ? ' disabled="" ' : "";
              return (
                0 === t.content.indexOf("[ ] ")
                  ? (r.content = '<input class="task-list-item-checkbox"' + i + 'type="checkbox">')
                  : (0 !== t.content.indexOf("[x] ") && 0 !== t.content.indexOf("[X] ")) ||
                    (r.content = '<input class="task-list-item-checkbox" checked=""' + i + 'type="checkbox">'),
                r
              );
            })(t, i)
          ),
          (t.children[1].content = t.children[1].content.slice(3)),
          (t.content = t.content.slice(3)),
          n)
        )
          if (r) {
            t.children.pop();
            var o = "task-item-" + Math.ceil(1e7 * Math.random() - 1e3);
            (t.children[0].content = t.children[0].content.slice(0, -1) + ' id="' + o + '">'),
              t.children.push(
                (function (t, e, n) {
                  var r = new n("html_inline", "", 0);
                  return (r.content = '<label class="task-list-item-label" for="' + e + '">' + t + "</label>"), (r.attrs = [{ for: e }]), r;
                })(t.content, o, i)
              );
          } else
            t.children.unshift(
              (function (t) {
                var e = new t("html_inline", "", 0);
                return (e.content = "<label>"), e;
              })(i)
            ),
              t.children.push(
                (function (t) {
                  var e = new t("html_inline", "", 0);
                  return (e.content = "</label>"), e;
                })(i)
              );
      }
      t.exports = function (t, l) {
        l && ((e = !l.enabled), (n = !!l.label), (r = !!l.labelAfter)),
          t.core.ruler.after("inline", "github-task-lists", function (t) {
            for (var n = t.tokens, r = 2; r < n.length; r++)
              s(n, r) &&
                (a(n[r], t.Token),
                i(n[r - 2], "class", "task-list-item" + (e ? "" : " enabled")),
                i(n[o(n, r - 2)], "class", "contains-task-list"));
          });
      };
    },
    72433: (t, e, n) => {
      "use strict";
      var r,
        i = (r = n(28725)) && "object" == typeof r && "default" in r ? r.default : r;
      function o(t) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          o(t)
        );
      }
      var s = "undefined" != typeof window;
      function a(t, e) {
        return e.reduce(function (e, n) {
          return t.hasOwnProperty(n) && (e[n] = t[n]), e;
        }, {});
      }
      var l = {},
        d = {},
        c = {},
        u = new (i.extend({
          data: function () {
            return { transports: l, targets: d, sources: c, trackInstances: s };
          },
          methods: {
            open: function (t) {
              if (s) {
                var e = t.to,
                  n = t.from,
                  r = t.passengers,
                  a = t.order,
                  l = void 0 === a ? 1 / 0 : a;
                if (e && n && r) {
                  var d,
                    c = { to: e, from: n, passengers: ((d = r), Array.isArray(d) || "object" === o(d) ? Object.freeze(d) : d), order: l };
                  -1 === Object.keys(this.transports).indexOf(e) && i.set(this.transports, e, []);
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
                  var i = this.$_getTransportIndex(t);
                  if (i >= 0) {
                    var o = this.transports[n].slice(0);
                    o.splice(i, 1), (this.transports[n] = o);
                  }
                }
            },
            registerTarget: function (t, e, n) {
              s &&
                (this.trackInstances && !n && this.targets[t] && console.warn("[portal-vue]: Target ".concat(t, " already exists")),
                this.$set(this.targets, t, Object.freeze([e])));
            },
            unregisterTarget: function (t) {
              this.$delete(this.targets, t);
            },
            registerSource: function (t, e, n) {
              s &&
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
        p = i.extend({
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
        m = i.extend({
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
                    i = "function" == typeof r ? r(e) : n.passengers;
                  return t.concat(i);
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
        f = 0,
        g = ["disabled", "name", "order", "slim", "slotProps", "tag", "to"],
        y = ["multiple", "transition"];
      i.extend({
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
                    i = document.createElement(r);
                  t.appendChild(i), (t = i);
                }
                var o = a(this.$props, y);
                (o.slim = this.targetSlim),
                  (o.tag = this.targetTag),
                  (o.slotProps = this.targetSlotProps),
                  (o.name = this.to),
                  (this.portalTarget = new m({ el: t, parent: this.$parent || this, propsData: o }));
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
            return t(p, { props: e, attrs: this.$attrs, on: this.$listeners, scopedSlots: this.$scopedSlots }, this.$slots.default);
          }
          var n = this.$scopedSlots.manual({ to: this.to });
          return Array.isArray(n) && (n = n[0]), n || t();
        }
      });
      (e.YC = m), (e.Df = u);
    },
    7976: (t, e, n) => {
      "use strict";
      n.d(e, { U: () => ft });
      var r = n(73845),
        i = n(87823),
        o = n(9980),
        s = n.n(o);
      const a = new i.V_({
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
      class l {
        constructor(t, e) {
          (this.schema = t), (this.tokenHandlers = e), (this.stack = [{ type: t.topNodeType, attrs: null, content: [], marks: i.vc.none }]);
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
            o = r[r.length - 1],
            s = this.schema.text(t, n.marks);
          o &&
          (e = (function (t, e) {
            if (t.isText && e.isText && i.vc.sameSet(t.marks, e.marks)) return t.withText(t.text + e.text);
          })(o, s))
            ? (r[r.length - 1] = e)
            : r.push(s);
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
            i = t.createAndFill(e, n, r ? r.marks : []);
          return i ? (this.push(i), i) : null;
        }
        openNode(t, e) {
          this.stack.push({ type: t, attrs: e, content: [], marks: i.vc.none });
        }
        closeNode() {
          let t = this.stack.pop();
          return this.addNode(t.type, t.attrs, t.content);
        }
      }
      function d(t, e, n, r) {
        return t.getAttrs ? t.getAttrs(e, n, r) : t.attrs instanceof Function ? t.attrs(e) : t.attrs;
      }
      function c(t, e) {
        return t.noCloseToken || "code_inline" == e || "code_block" == e || "fence" == e;
      }
      function u(t) {
        return "\n" == t[t.length - 1] ? t.slice(0, t.length - 1) : t;
      }
      function h() {}
      function p(t, e) {
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
                let i = e[r];
                if (i.block) {
                  let e = t.nodeType(i.block);
                  c(i, r)
                    ? (n[r] = (t, n, r, o) => {
                        t.openNode(e, d(i, n, r, o)), t.addText(u(n.content)), t.closeNode();
                      })
                    : ((n[r + "_open"] = (t, n, r, o) => t.openNode(e, d(i, n, r, o))), (n[r + "_close"] = (t) => t.closeNode()));
                } else if (i.node) {
                  let e = t.nodeType(i.node);
                  n[r] = (t, n, r, o) => t.addNode(e, d(i, n, r, o));
                } else if (i.mark) {
                  let e = t.marks[i.mark];
                  c(i, r)
                    ? (n[r] = (t, n, r, o) => {
                        t.openMark(e.create(d(i, n, r, o))), t.addText(u(n.content)), t.closeMark(e);
                      })
                    : ((n[r + "_open"] = (t, n, r, o) => t.openMark(e.create(d(i, n, r, o)))), (n[r + "_close"] = (t) => t.closeMark(e)));
                } else {
                  if (!i.ignore) throw new RangeError("Unrecognized parsing spec " + JSON.stringify(i));
                  c(i, r) ? (n[r] = h) : ((n[r + "_open"] = h), (n[r + "_close"] = h));
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
            r = new l(this.schema, this.tokenHandlers);
          r.parseTokens(this.tokenizer.parse(t, e));
          do {
            n = r.closeNode();
          } while (r.stack.length);
          return n || this.schema.topNodeType.createAndFill();
        }
      })(a, o("commonmark", { html: !1 }), {
        blockquote: { block: "blockquote" },
        paragraph: { block: "paragraph" },
        list_item: { block: "list_item" },
        bullet_list: { block: "bullet_list", getAttrs: (t, e, n) => ({ tight: p(e, n) }) },
        ordered_list: { block: "ordered_list", getAttrs: (t, e, n) => ({ order: +t.attrGet("start") || 1, tight: p(e, n) }) },
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
      const m = new (class {
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
              i = t.repeat(" ", r + 2);
            t.renderList(e, i, (e) => {
              let i = String(n + e);
              return t.repeat(" ", r - i.length) + i + ". ";
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
            for (let i = r + 1; i < n.childCount; i++) if (n.child(i).type != e.type) return void t.write("\\\n");
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
              let { inAutolink: i } = t;
              return (
                (t.inAutolink = void 0),
                i
                  ? ">"
                  : "](" +
                    e.attrs.href.replace(/[\(\)"]/g, "\\$&") +
                    (e.attrs.title ? ` "${e.attrs.title.replace(/"/g, '\\"')}"` : "") +
                    ")"
              );
            },
            mixable: !0
          },
          code: { open: (t, e, n, r) => f(n.child(r), -1), close: (t, e, n, r) => f(n.child(r - 1), 1), escape: !1 }
        }
      );
      function f(t, e) {
        let n,
          r = /`+/g,
          i = 0;
        if (t.isText) for (; (n = r.exec(t.text)); ) i = Math.max(i, n[0].length);
        let o = i > 0 && e > 0 ? " `" : "`";
        for (let t = 0; t < i; t++) o += "`";
        return i > 0 && e < 0 && (o += " "), o;
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
          let i = this.delim;
          this.write(null != e ? e : t), (this.delim += t), r(), (this.delim = i), this.closeBlock(n);
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
            r = (r, i, o) => {
              let s = r ? r.marks : [];
              r &&
                r.type.name === this.options.hardBreakNodeName &&
                (s = s.filter((e) => {
                  if (o + 1 == t.childCount) return !1;
                  let n = t.child(o + 1);
                  return e.isInSet(n.marks) && (!n.isText || /\S/.test(n.text));
                }));
              let a = n;
              if (
                ((n = ""),
                r &&
                  r.isText &&
                  s.some((t) => {
                    let n = this.marks[t.type.name];
                    return n && n.expelEnclosingWhitespace && !t.isInSet(e);
                  }))
              ) {
                let [t, n, i] = /^(\s*)(.*)$/m.exec(r.text);
                n && ((a += n), (r = i ? r.withText(i) : null) || (s = e));
              }
              if (
                r &&
                r.isText &&
                s.some((e) => {
                  let n = this.marks[e.type.name];
                  return n && n.expelEnclosingWhitespace && (o == t.childCount - 1 || !e.isInSet(t.child(o + 1).marks));
                })
              ) {
                let [t, i, o] = /^(.*?)(\s*)$/m.exec(r.text);
                o && ((n = o), (r = i ? r.withText(i) : null) || (s = e));
              }
              let l = s.length ? s[s.length - 1] : null,
                d = l && !1 === this.marks[l.type.name].escape,
                c = s.length - (d ? 1 : 0);
              t: for (let t = 0; t < c; t++) {
                let n = s[t];
                if (!this.marks[n.type.name].mixable) break;
                for (let r = 0; r < e.length; r++) {
                  let i = e[r];
                  if (!this.marks[i.type.name].mixable) break;
                  if (n.eq(i)) {
                    t > r
                      ? (s = s
                          .slice(0, r)
                          .concat(n)
                          .concat(s.slice(r, t))
                          .concat(s.slice(t + 1, c)))
                      : r > t &&
                        (s = s
                          .slice(0, t)
                          .concat(s.slice(t + 1, r))
                          .concat(n)
                          .concat(s.slice(r, c)));
                    continue t;
                  }
                }
              }
              let u = 0;
              for (; u < Math.min(e.length, c) && s[u].eq(e[u]); ) ++u;
              for (; u < e.length; ) this.text(this.markString(e.pop(), !1, t, o), !1);
              if ((a && this.text(a), r)) {
                for (; e.length < c; ) {
                  let n = s[e.length];
                  e.push(n), this.text(this.markString(n, !0, t, o), !1), (this.atBlockStart = !1);
                }
                d && r.isText
                  ? this.text(this.markString(l, !0, t, o) + r.text + this.markString(l, !1, t, o + 1), !1)
                  : this.render(r, t, o),
                  (this.atBlockStart = !1);
              }
              (null == r ? void 0 : r.isText) && r.nodeSize > 0 && (this.atBlockStart = !1);
            };
          t.forEach(r), r(null, 0, t.childCount), (this.atBlockStart = !1);
        }
        renderList(t, e, n) {
          this.closed && this.closed.type == t.type ? this.flushClose(3) : this.inTightList && this.flushClose(1);
          let r = void 0 !== t.attrs.tight ? t.attrs.tight : this.options.tightLists,
            i = this.inTightList;
          (this.inTightList = r),
            t.forEach((i, o, s) => {
              s && r && this.flushClose(1), this.wrapBlock(e, n(s), t, () => this.render(i, t, s));
            }),
            (this.inTightList = i);
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
          let i = this.marks[t.type.name],
            o = e ? i.open : i.close;
          return "string" == typeof o ? o : o(this, t, n, r);
        }
        getEnclosingWhitespace(t) {
          return { leading: (t.match(/^(\s+)/) || [void 0])[0], trailing: (t.match(/(\s+)$/) || [void 0])[0] };
        }
      }
      var y = n(84651),
        k = n.n(y),
        v = n(2376);
      function b(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function M(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(n), !0).forEach(function (e) {
                x(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function w(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function T(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, N(r.key), r);
        }
      }
      function A(t, e, n) {
        return e && T(t.prototype, e), n && T(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
      }
      function x(t, e, n) {
        return (e = N(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
      }
      function L(t) {
        return (
          (L = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          L(t)
        );
      }
      function S(t, e) {
        return (
          (S = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          S(t, e)
        );
      }
      function C(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return (function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        })(t);
      }
      function O(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = L(t)); );
        return t;
      }
      function E() {
        return (
          (E =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, n) {
                  var r = O(t, e);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
                  }
                }),
          E.apply(this, arguments)
        );
      }
      function H(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return P(t);
          })(t) ||
          (function (t) {
            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return P(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? P(t, e)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function P(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function N(t) {
        var e = (function (t, e) {
          if ("object" != typeof t || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t, "string");
        return "symbol" == typeof e ? e : String(e);
      }
      var B = r.hj.create({
          name: "markdownTightLists",
          addOptions: function () {
            return { tight: !0, tightClass: "tight", listTypes: ["bulletList", "orderedList"] };
          },
          addGlobalAttributes: function () {
            var t = this;
            return [
              {
                types: this.options.listTypes,
                attributes: {
                  tight: {
                    default: this.options.tight,
                    parseHTML: function (t) {
                      return "true" === t.getAttribute("data-tight") || !t.querySelector("p");
                    },
                    renderHTML: function (e) {
                      return { class: e.tight ? t.options.tightClass : null, "data-tight": e.tight ? "true" : null };
                    }
                  }
                }
              }
            ];
          },
          addCommands: function () {
            var t = this;
            return {
              toggleTight: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return function (n) {
                  var r = n.editor,
                    i = n.commands;
                  return t.options.listTypes.some(function (t) {
                    return (function (t) {
                      if (!r.isActive(t)) return !1;
                      var n = r.getAttributes(t);
                      return i.updateAttributes(t, { tight: null != e ? e : !(null != n && n.tight) });
                    })(t);
                  });
                };
              }
            };
          }
        }),
        j = s()();
      function I(t, e) {
        return (
          j.inline.State.prototype.scanDelims.call({ src: t, posMax: t.length }), new j.inline.State(t, null, null, []).scanDelims(e, !0)
        );
      }
      function z(t, e, n, r) {
        var i = t.substring(0, n) + t.substring(n + e.length);
        return i.substring(0, n + r) + e + i.substring(n + r);
      }
      var _ = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && S(t, e);
          })(i, t);
          var e,
            n,
            r =
              ((e = i),
              (n = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  r = L(e);
                if (n) {
                  var i = L(this).constructor;
                  t = Reflect.construct(r, arguments, i);
                } else t = r.apply(this, arguments);
                return C(this, t);
              });
          function i(t, e, n) {
            var o;
            return w(this, i), ((o = r.call(this, t, e, null != n ? n : {})).inlines = []), o;
          }
          return (
            A(i, [
              {
                key: "render",
                value: function (t, e, n) {
                  E(L(i.prototype), "render", this).call(this, t, e, n);
                  var r,
                    o,
                    s,
                    a = this.inlines[this.inlines.length - 1];
                  if (null != a && a.start && null != a && a.end) {
                    var l = this.normalizeInline(a),
                      d = l.delimiter,
                      c = l.start,
                      u = l.end;
                    (this.out =
                      ((r = this.out),
                      (s = (function (t, e, n, r) {
                        for (var i = n, o = t; i < r && !I(o, i).can_open; ) (o = z(o, e, i, 1)), i++;
                        return { text: o, from: i, to: r };
                      })((s = { text: r, from: c, to: u }).text, (o = d), s.from, s.to)),
                      (s = (function (t, e, n, r) {
                        for (var i = r, o = t; i > n && !I(o, i).can_close; ) (o = z(o, e, i, -1)), i--;
                        return { text: o, from: n, to: i };
                      })(s.text, o, s.from, s.to)),
                      s.to - s.from < o.length + 1 && (s.text = s.text.substring(0, s.from) + s.text.substring(s.to + o.length)),
                      s.text)),
                      this.inlines.pop();
                  }
                }
              },
              {
                key: "markString",
                value: function (t, e, n, r) {
                  var o = this.marks[t.type.name];
                  if (o.expelEnclosingWhitespace)
                    if (e) this.inlines.push({ start: this.out.length, delimiter: o.open });
                    else {
                      var s = this.inlines.pop();
                      this.inlines.push(M(M({}, s), {}, { end: this.out.length }));
                    }
                  return E(L(i.prototype), "markString", this).call(this, t, e, n, r);
                }
              },
              {
                key: "normalizeInline",
                value: function (t) {
                  var e = t.start;
                  for (t.end; this.out.charAt(e).match(/\s/); ) e++;
                  return M(M({}, t), {}, { start: e });
                }
              }
            ]),
            i
          );
        })(g),
        R = r.vc.create({
          name: "markdownHTMLMark",
          addStorage: function () {
            return {
              markdown: {
                serialize: {
                  open: function (t, e) {
                    var n, r;
                    return this.editor.storage.markdown.options.html
                      ? null !== (n = null === (r = $(e)) || void 0 === r ? void 0 : r[0]) && void 0 !== n
                        ? n
                        : ""
                      : (console.warn('Tiptap Markdown: "'.concat(e.type.name, '" mark is only available in html mode')), "");
                  },
                  close: function (t, e) {
                    var n, r;
                    return this.editor.storage.markdown.options.html &&
                      null !== (n = null === (r = $(e)) || void 0 === r ? void 0 : r[1]) &&
                      void 0 !== n
                      ? n
                      : "";
                  }
                },
                parse: {}
              }
            };
          }
        });
      function $(t) {
        var e = t.type.schema,
          n = e.text(" ", [t]),
          o = (0, r.d1)(i.HY.from(n), e).match(/^(<.*?>) (<\/.*?>)$/);
        return o ? [o[1], o[2]] : null;
      }
      function D(t) {
        var e = "<body>".concat(t, "</body>");
        return new window.DOMParser().parseFromString(e, "text/html").body;
      }
      var K = r.NB.create({
          name: "markdownHTMLNode",
          addStorage: function () {
            return {
              markdown: {
                serialize: function (t, e, n) {
                  this.editor.storage.markdown.options.html
                    ? t.write(
                        (function (t, e) {
                          var n = t.type.schema,
                            o = (0, r.d1)(i.HY.from(t), n);
                          return t.isBlock && e.type.name === n.topNodeType.name
                            ? (function (t) {
                                var e = D(t).firstElementChild;
                                return (e.innerHTML = e.innerHTML.trim() ? "\n".concat(e.innerHTML, "\n") : "\n"), e.outerHTML;
                              })(o)
                            : o;
                        })(e, n)
                      )
                    : (console.warn('Tiptap Markdown: "'.concat(e.type.name, '" node is only available in html mode')),
                      t.write("[".concat(e.type.name, "]"))),
                    e.isBlock && t.closeBlock(e);
                },
                parse: {}
              }
            };
          }
        }),
        q = r.NB.create({ name: "blockquote" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.nodes.blockquote, parse: {} } };
          }
        }),
        U = r.NB.create({ name: "bulletList" }).extend({
          addStorage: function () {
            return {
              markdown: {
                serialize: function (t, e) {
                  var n = this;
                  return t.renderList(e, "  ", function () {
                    return (n.editor.storage.markdown.options.bulletListMarker || "-") + " ";
                  });
                },
                parse: {}
              }
            };
          }
        }),
        W = r.NB.create({ name: "codeBlock" }).extend({
          addStorage: function () {
            return {
              markdown: {
                serialize: function (t, e) {
                  t.write("```" + (e.attrs.language || "") + "\n"),
                    t.text(e.textContent, !1),
                    t.ensureNewLine(),
                    t.write("```"),
                    t.closeBlock(e);
                },
                parse: {
                  setup: function (t) {
                    var e;
                    t.set({ langPrefix: null !== (e = this.options.languageClassPrefix) && void 0 !== e ? e : "language-" });
                  },
                  updateDOM: function (t) {
                    t.innerHTML = t.innerHTML.replace(/\n<\/code><\/pre>/g, "</code></pre>");
                  }
                }
              }
            };
          }
        }),
        V = r.NB.create({ name: "hardBreak" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.nodes.hard_break, parse: {} } };
          }
        }),
        F = r.NB.create({ name: "heading" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.nodes.heading, parse: {} } };
          }
        }),
        G = r.NB.create({ name: "horizontalRule" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.nodes.horizontal_rule, parse: {} } };
          }
        }),
        Y = r.NB.create({ name: "image" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.nodes.image, parse: {} } };
          }
        }),
        Q = r.NB.create({ name: "listItem" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.nodes.list_item, parse: {} } };
          }
        }),
        X = r.NB.create({ name: "orderedList" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.nodes.ordered_list, parse: {} } };
          }
        }),
        J = r.NB.create({ name: "paragraph" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.nodes.paragraph, parse: {} } };
          }
        });
      function Z(t) {
        var e, n;
        return null !== (e = null == t || null === (n = t.content) || void 0 === n ? void 0 : n.content) && void 0 !== e ? e : [];
      }
      var tt = r.NB.create({ name: "table" }).extend({
        addStorage: function () {
          return {
            markdown: {
              serialize: function (t, e, n) {
                !(function (t) {
                  var e = Z(t),
                    n = e[0],
                    r = e.slice(1);
                  return (
                    !Z(n).some(function (t) {
                      return "tableHeader" !== t.type.name || et(t);
                    }) &&
                    !r.some(function (t) {
                      return Z(t).some(function (t) {
                        return "tableHeader" === t.type.name || et(t);
                      });
                    })
                  );
                })(e)
                  ? K.storage.markdown.serialize.call(this, t, e, n)
                  : (e.forEach(function (e, n, r) {
                      if (
                        (t.write("| "),
                        e.forEach(function (e, n, r) {
                          r && t.write(" | ");
                          var i = e.firstChild;
                          i.textContent.trim() && t.renderInline(i);
                        }),
                        t.write(" |"),
                        t.ensureNewLine(),
                        !r)
                      ) {
                        var i = Array.from({ length: e.childCount })
                          .map(function () {
                            return "---";
                          })
                          .join(" | ");
                        t.write("| ".concat(i, " |")), t.ensureNewLine();
                      }
                    }),
                    t.closeBlock(e));
              },
              parse: {}
            }
          };
        }
      });
      function et(t) {
        return t.attrs.colspan > 1 || t.attrs.rowspan > 1;
      }
      var nt = r.NB.create({ name: "taskItem" }).extend({
          addStorage: function () {
            return {
              markdown: {
                serialize: function (t, e) {
                  var n = e.attrs.checked ? "[x]" : "[ ]";
                  t.write("".concat(n, " ")), t.renderContent(e);
                },
                parse: {
                  updateDOM: function (t) {
                    H(t.querySelectorAll(".task-list-item")).forEach(function (t) {
                      var e = t.querySelector("input");
                      t.setAttribute("data-type", "taskItem"), e && (t.setAttribute("data-checked", e.checked), e.remove());
                    });
                  }
                }
              }
            };
          }
        }),
        rt = r.NB.create({ name: "taskList" }).extend({
          addStorage: function () {
            return {
              markdown: {
                serialize: U.storage.markdown.serialize,
                parse: {
                  setup: function (t) {
                    t.use(k());
                  },
                  updateDOM: function (t) {
                    H(t.querySelectorAll(".contains-task-list")).forEach(function (t) {
                      t.setAttribute("data-type", "taskList");
                    });
                  }
                }
              }
            };
          }
        }),
        it = r.NB.create({ name: "text" }).extend({
          addStorage: function () {
            return {
              markdown: {
                serialize: function (t, e) {
                  var n;
                  t.text(null == (n = e.text) ? void 0 : n.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
                },
                parse: {}
              }
            };
          }
        }),
        ot = r.vc.create({ name: "bold" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.marks.strong, parse: {} } };
          }
        }),
        st = r.vc.create({ name: "code" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.marks.code, parse: {} } };
          }
        }),
        at = r.vc.create({ name: "italic" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.marks.em, parse: {} } };
          }
        }),
        lt = r.vc.create({ name: "link" }).extend({
          addStorage: function () {
            return { markdown: { serialize: m.marks.link, parse: {} } };
          }
        }),
        dt = r.vc.create({ name: "strike" }).extend({
          addStorage: function () {
            return { markdown: { serialize: { open: "~~", close: "~~", expelEnclosingWhitespace: !0 }, parse: {} } };
          }
        }),
        ct = [q, U, W, V, F, G, K, Y, Q, X, J, tt, nt, rt, it, ot, st, R, at, lt, dt];
      function ut(t) {
        var e,
          n,
          r = null === (e = t.storage) || void 0 === e ? void 0 : e.markdown,
          i =
            null ===
              (n = ct.find(function (e) {
                return e.name === t.name;
              })) || void 0 === n
              ? void 0
              : n.storage.markdown;
        return r || i ? M(M({}, i), r) : null;
      }
      var ht = (function () {
          function t(e) {
            w(this, t), x(this, "editor", null), (this.editor = e);
          }
          return (
            A(t, [
              {
                key: "serialize",
                value: function (t) {
                  var e = new _(this.nodes, this.marks, { hardBreakNodeName: V.name });
                  return e.renderContent(t), e.out;
                }
              },
              {
                key: "nodes",
                get: function () {
                  var t,
                    e = this;
                  return M(
                    M(
                      {},
                      Object.fromEntries(
                        Object.keys(this.editor.schema.nodes).map(function (t) {
                          return [t, e.serializeNode(K)];
                        })
                      )
                    ),
                    Object.fromEntries(
                      null !==
                        (t = this.editor.extensionManager.extensions
                          .filter(function (t) {
                            return "node" === t.type && e.serializeNode(t);
                          })
                          .map(function (t) {
                            return [t.name, e.serializeNode(t)];
                          })) && void 0 !== t
                        ? t
                        : []
                    )
                  );
                }
              },
              {
                key: "marks",
                get: function () {
                  var t,
                    e = this;
                  return M(
                    M(
                      {},
                      Object.fromEntries(
                        Object.keys(this.editor.schema.marks).map(function (t) {
                          return [t, e.serializeMark(R)];
                        })
                      )
                    ),
                    Object.fromEntries(
                      null !==
                        (t = this.editor.extensionManager.extensions
                          .filter(function (t) {
                            return "mark" === t.type && e.serializeMark(t);
                          })
                          .map(function (t) {
                            return [t.name, e.serializeMark(t)];
                          })) && void 0 !== t
                        ? t
                        : []
                    )
                  );
                }
              },
              {
                key: "serializeNode",
                value: function (t) {
                  var e, n;
                  return null === (e = ut(t)) || void 0 === e || null === (n = e.serialize) || void 0 === n
                    ? void 0
                    : n.bind({ editor: this.editor, options: t.options });
                }
              },
              {
                key: "serializeMark",
                value: function (t) {
                  var e,
                    n = null === (e = ut(t)) || void 0 === e ? void 0 : e.serialize;
                  return n
                    ? M(
                        M({}, n),
                        {},
                        {
                          open: "function" == typeof n.open ? n.open.bind({ editor: this.editor, options: t.options }) : n.open,
                          close: "function" == typeof n.close ? n.close.bind({ editor: this.editor, options: t.options }) : n.close
                        }
                      )
                    : null;
                }
              }
            ]),
            t
          );
        })(),
        pt = (function () {
          function t(e, n) {
            var r = n.html,
              i = n.linkify,
              o = n.breaks;
            w(this, t),
              x(this, "editor", null),
              x(this, "md", null),
              (this.editor = e),
              (this.md = s()({ html: r, linkify: i, breaks: o }));
          }
          return (
            A(t, [
              {
                key: "parse",
                value: function (t) {
                  var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.inline;
                  if ("string" == typeof t) {
                    var i = this.md;
                    this.editor.extensionManager.extensions.forEach(function (t) {
                      var n, r, o;
                      return null === (n = ut(t)) ||
                        void 0 === n ||
                        null === (r = n.parse) ||
                        void 0 === r ||
                        null === (o = r.setup) ||
                        void 0 === o
                        ? void 0
                        : o.call({ editor: e.editor, options: t.options }, i);
                    });
                    var o = i.render(t),
                      s = D(o);
                    return (
                      this.editor.extensionManager.extensions.forEach(function (t) {
                        var n, r, i;
                        return null === (n = ut(t)) ||
                          void 0 === n ||
                          null === (r = n.parse) ||
                          void 0 === r ||
                          null === (i = r.updateDOM) ||
                          void 0 === i
                          ? void 0
                          : i.call({ editor: e.editor, options: t.options }, s);
                      }),
                      this.normalizeDOM(s, { inline: r, content: t }),
                      s.innerHTML
                    );
                  }
                  return t;
                }
              },
              {
                key: "normalizeDOM",
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.inline,
                    r = e.content;
                  return this.normalizeBlocks(t), n && this.normalizeInline(t, r), t;
                }
              },
              {
                key: "normalizeBlocks",
                value: function (t) {
                  var e = Object.values(this.editor.schema.nodes).filter(function (t) {
                      return t.isBlock;
                    }),
                    n = e
                      .map(function (t) {
                        var e;
                        return null === (e = t.spec.parseDOM) || void 0 === e
                          ? void 0
                          : e.map(function (t) {
                              return t.tag;
                            });
                      })
                      .flat()
                      .filter(Boolean)
                      .join(",");
                  n &&
                    H(t.querySelectorAll(n)).forEach(function (t) {
                      t.parentElement.matches("p") &&
                        (function (t) {
                          for (var e = t.parentElement, n = e.cloneNode(); e.firstChild && e.firstChild !== t; )
                            n.appendChild(e.firstChild);
                          n.childNodes.length > 0 && e.parentElement.insertBefore(n, e),
                            e.parentElement.insertBefore(t, e),
                            0 === e.childNodes.length && e.remove();
                        })(t);
                    });
                }
              },
              {
                key: "normalizeInline",
                value: function (t, e) {
                  var n;
                  if (null !== (n = t.firstElementChild) && void 0 !== n && n.matches("p")) {
                    var r,
                      i,
                      o,
                      s,
                      a = t.firstElementChild,
                      l = a.nextSibling,
                      d = a.nextElementSibling,
                      c = null !== (r = null === (i = e.match(/^\s+/)) || void 0 === i ? void 0 : i[0]) && void 0 !== r ? r : "",
                      u = d ? "" : null !== (o = null === (s = e.match(/\s+$/)) || void 0 === s ? void 0 : s[0]) && void 0 !== o ? o : "";
                    if (
                      ((null == l ? void 0 : l.nodeType) === Node.TEXT_NODE && (l.textContent = l.textContent.replace(/^\n/, "")),
                      e.match(/^\n\n/))
                    )
                      return void (a.innerHTML = "".concat(a.innerHTML).concat(u));
                    !(function (t) {
                      for (var e = t.parentNode; t.firstChild; ) e.insertBefore(t.firstChild, t);
                      e.removeChild(t);
                    })(a),
                      (t.innerHTML = "".concat(c).concat(t.innerHTML).concat(u));
                  }
                }
              }
            ]),
            t
          );
        })(),
        mt = r.hj.create({
          name: "markdownClipboard",
          addOptions: function () {
            return { transformPastedText: !1, transformCopiedText: !1 };
          },
          addProseMirrorPlugins: function () {
            var t = this;
            return [
              new v.Sy({
                key: new v.H$("markdownClipboard"),
                props: {
                  clipboardTextParser: function (e, n, r) {
                    if (r || !t.options.transformPastedText) return null;
                    var o = t.editor.storage.markdown.parser.parse(e, { inline: !0 });
                    return i.aw.fromSchema(t.editor.schema).parseSlice(D(o), { preserveWhitespace: !0 });
                  },
                  clipboardTextSerializer: function (e) {
                    return t.options.transformCopiedText ? t.editor.storage.markdown.serializer.serialize(e.content) : null;
                  }
                }
              })
            ];
          }
        }),
        ft = r.hj.create({
          name: "markdown",
          priority: 50,
          addOptions: function () {
            return {
              html: !0,
              tightLists: !0,
              tightListClass: "tight",
              bulletListMarker: "-",
              linkify: !1,
              breaks: !1,
              transformPastedText: !1,
              transformCopiedText: !1
            };
          },
          addCommands: function () {
            var t = r.Rw.Commands.config.addCommands();
            return {
              setContent: function (e, n, r) {
                return function (i) {
                  return t.setContent(i.editor.storage.markdown.parser.parse(e), n, r)(i);
                };
              },
              insertContentAt: function (e, n, r) {
                return function (i) {
                  return t.insertContentAt(e, i.editor.storage.markdown.parser.parse(n, { inline: !0 }), r)(i);
                };
              }
            };
          },
          onBeforeCreate: function () {
            var t = this;
            (this.editor.storage.markdown = {
              options: M({}, this.options),
              parser: new pt(this.editor, this.options),
              serializer: new ht(this.editor),
              getMarkdown: function () {
                return t.editor.storage.markdown.serializer.serialize(t.editor.state.doc);
              }
            }),
              (this.editor.options.initialContent = this.editor.options.content),
              (this.editor.options.content = this.editor.storage.markdown.parser.parse(this.editor.options.content));
          },
          onCreate: function () {
            (this.editor.options.content = this.editor.options.initialContent), delete this.editor.options.initialContent;
          },
          addStorage: function () {
            return {};
          },
          addExtensions: function () {
            return [
              B.configure({ tight: this.options.tightLists, tightClass: this.options.tightListClass }),
              mt.configure({ transformPastedText: this.options.transformPastedText, transformCopiedText: this.options.transformCopiedText })
            ];
          }
        });
    },
    67937: (t, e, n) => {
      "use strict";
      n.d(e, { d8: () => l });
      var r = n(73845);
      const i = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
        o = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g,
        s = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/,
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
            return [(0, r.Cf)({ find: i, type: this.type }), (0, r.Cf)({ find: s, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.K9)({ find: o, type: this.type }), (0, r.K9)({ find: a, type: this.type })];
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
      n.d(e, { X: () => i });
      var r = n(73845);
      const i = r.NB.create({
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
      n.d(e, { y$: () => s });
      var r = n(73845);
      const i = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))$/,
        o = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))/g,
        s = r.vc.create({
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
            return [(0, r.Cf)({ find: i, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.K9)({ find: o, type: this.type })];
          }
        });
    },
    25748: (t, e, n) => {
      "use strict";
      n.d(e, { b: () => o });
      var r = n(73845),
        i = n(2376);
      const o = r.NB.create({
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
                            ? t.setSelection(i.Bs.create(t.doc, e.pos + 1))
                            : e.nodeAfter.isBlock
                            ? t.setSelection(i.qv.create(t.doc, e.pos))
                            : t.setSelection(i.Bs.create(t.doc, e.pos));
                        else {
                          const o = null === (n = e.parent.type.contentMatch.defaultType) || void 0 === n ? void 0 : n.create();
                          o && (t.insert(r, o), t.setSelection(i.Bs.create(t.doc, r + 1)));
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
      const i = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,
        o = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g,
        s = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/,
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
            return [(0, r.Cf)({ find: i, type: this.type }), (0, r.Cf)({ find: s, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.K9)({ find: o, type: this.type }), (0, r.K9)({ find: a, type: this.type })];
          }
        });
    },
    76484: (t, e, n) => {
      "use strict";
      n.d(e, { r: () => Ot });
      var r = n(73845);
      const i = (t, e) => {
          for (const n in e) t[n] = e[n];
          return t;
        },
        o = "whitespace";
      function s(t, e) {
        return t in e || (e[t] = []), e[t];
      }
      function a(t, e, n) {
        e.numeric && ((e.asciinumeric = !0), (e.alphanumeric = !0)),
          e.ascii && ((e.asciinumeric = !0), (e.alpha = !0)),
          e.asciinumeric && (e.alphanumeric = !0),
          e.alpha && (e.alphanumeric = !0),
          e.alphanumeric && (e.domain = !0),
          e.emoji && (e.domain = !0);
        for (const r in e) {
          const e = s(r, n);
          e.indexOf(t) < 0 && e.push(t);
        }
      }
      function l(t) {
        void 0 === t && (t = null), (this.j = {}), (this.jr = []), (this.jd = null), (this.t = t);
      }
      (l.groups = {}),
        (l.prototype = {
          accepts() {
            return !!this.t;
          },
          go(t) {
            const e = this,
              n = e.j[t];
            if (n) return n;
            for (let n = 0; n < e.jr.length; n++) {
              const r = e.jr[n][0],
                i = e.jr[n][1];
              if (i && r.test(t)) return i;
            }
            return e.jd;
          },
          has(t, e) {
            return void 0 === e && (e = !1), e ? t in this.j : !!this.go(t);
          },
          ta(t, e, n, r) {
            for (let i = 0; i < t.length; i++) this.tt(t[i], e, n, r);
          },
          tr(t, e, n, r) {
            let i;
            return (r = r || l.groups), e && e.j ? (i = e) : ((i = new l(e)), n && r && a(e, n, r)), this.jr.push([t, i]), i;
          },
          ts(t, e, n, r) {
            let i = this;
            const o = t.length;
            if (!o) return i;
            for (let e = 0; e < o - 1; e++) i = i.tt(t[e]);
            return i.tt(t[o - 1], e, n, r);
          },
          tt(t, e, n, r) {
            r = r || l.groups;
            const o = this;
            if (e && e.j) return (o.j[t] = e), e;
            const s = e;
            let d,
              c = o.go(t);
            if ((c ? ((d = new l()), i(d.j, c.j), d.jr.push.apply(d.jr, c.jr), (d.jd = c.jd), (d.t = c.t)) : (d = new l()), s)) {
              if (r)
                if (d.t && "string" == typeof d.t) {
                  const t = i(
                    (function (t, e) {
                      const n = {};
                      for (const r in e) e[r].indexOf(t) >= 0 && (n[r] = !0);
                      return n;
                    })(d.t, r),
                    n
                  );
                  a(s, t, r);
                } else n && a(s, n, r);
              d.t = s;
            }
            return (o.j[t] = d), d;
          }
        });
      const d = (t, e, n, r, i) => t.ta(e, n, r, i),
        c = (t, e, n, r, i) => t.tr(e, n, r, i),
        u = (t, e, n, r, i) => t.ts(e, n, r, i),
        h = (t, e, n, r, i) => t.tt(e, n, r, i),
        p = "WORD",
        m = "UWORD",
        f = "LOCALHOST",
        g = "TLD",
        y = "UTLD",
        k = "SCHEME",
        v = "SLASH_SCHEME",
        b = "NUM",
        M = "NL",
        w = "OPENBRACE",
        T = "OPENBRACKET",
        A = "OPENANGLEBRACKET",
        x = "OPENPAREN",
        L = "CLOSEBRACE",
        S = "CLOSEBRACKET",
        C = "CLOSEANGLEBRACKET",
        O = "CLOSEPAREN",
        E = "AMPERSAND",
        H = "APOSTROPHE",
        P = "ASTERISK",
        N = "AT",
        B = "BACKSLASH",
        j = "BACKTICK",
        I = "CARET",
        z = "COLON",
        _ = "COMMA",
        R = "DOLLAR",
        $ = "DOT",
        D = "EQUALS",
        K = "EXCLAMATION",
        q = "HYPHEN",
        U = "PERCENT",
        W = "PIPE",
        V = "PLUS",
        F = "POUND",
        G = "QUERY",
        Y = "QUOTE",
        Q = "SEMI",
        X = "SLASH",
        J = "TILDE",
        Z = "UNDERSCORE",
        tt = "EMOJI",
        et = "SYM";
      var nt = Object.freeze({
        __proto__: null,
        WORD: p,
        UWORD: m,
        LOCALHOST: f,
        TLD: g,
        UTLD: y,
        SCHEME: k,
        SLASH_SCHEME: v,
        NUM: b,
        WS: "WS",
        NL: M,
        OPENBRACE: w,
        OPENBRACKET: T,
        OPENANGLEBRACKET: A,
        OPENPAREN: x,
        CLOSEBRACE: L,
        CLOSEBRACKET: S,
        CLOSEANGLEBRACKET: C,
        CLOSEPAREN: O,
        AMPERSAND: E,
        APOSTROPHE: H,
        ASTERISK: P,
        AT: N,
        BACKSLASH: B,
        BACKTICK: j,
        CARET: I,
        COLON: z,
        COMMA: _,
        DOLLAR: R,
        DOT: $,
        EQUALS: D,
        EXCLAMATION: K,
        HYPHEN: q,
        PERCENT: U,
        PIPE: W,
        PLUS: V,
        POUND: F,
        QUERY: G,
        QUOTE: Y,
        SEMI: Q,
        SLASH: X,
        TILDE: J,
        UNDERSCORE: Z,
        EMOJI: tt,
        SYM: et
      });
      const rt = /[a-z]/,
        it = /\p{L}/u,
        ot = /\p{Emoji}/u,
        st = /\d/,
        at = /\s/;
      let lt = null,
        dt = null;
      function ct(t, e, n, r, i) {
        let o;
        const s = e.length;
        for (let n = 0; n < s - 1; n++) {
          const s = e[n];
          t.j[s] ? (o = t.j[s]) : ((o = new l(r)), (o.jr = i.slice()), (t.j[s] = o)), (t = o);
        }
        return (o = new l(n)), (o.jr = i.slice()), (t.j[e[s - 1]] = o), o;
      }
      function ut(t) {
        const e = [],
          n = [];
        let r = 0;
        for (; r < t.length; ) {
          let i = 0;
          for (; "0123456789".indexOf(t[r + i]) >= 0; ) i++;
          if (i > 0) {
            e.push(n.join(""));
            for (let e = parseInt(t.substring(r, r + i), 10); e > 0; e--) n.pop();
            r += i;
          } else n.push(t[r]), r++;
        }
        return e;
      }
      const ht = {
        defaultProtocol: "http",
        events: null,
        format: mt,
        formatHref: mt,
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
      function pt(t, e) {
        void 0 === e && (e = null);
        let n = i({}, ht);
        t && (n = i(n, t instanceof pt ? t.o : t));
        const r = n.ignoreTags,
          o = [];
        for (let t = 0; t < r.length; t++) o.push(r[t].toUpperCase());
        (this.o = n), e && (this.defaultRender = e), (this.ignoreTags = o);
      }
      function mt(t) {
        return t;
      }
      function ft(t, e) {
        (this.t = "token"), (this.v = t), (this.tk = e);
      }
      function gt(t, e) {
        class n extends ft {
          constructor(e, n) {
            super(e, n), (this.t = t);
          }
        }
        for (const t in e) n.prototype[t] = e[t];
        return (n.t = t), n;
      }
      (pt.prototype = {
        o: ht,
        ignoreTags: [],
        defaultRender: (t) => t,
        check(t) {
          return this.get("validate", t.toString(), t);
        },
        get(t, e, n) {
          const r = null != e;
          let i = this.o[t];
          return i
            ? ("object" == typeof i
                ? ((i = n.t in i ? i[n.t] : ht[t]), "function" == typeof i && r && (i = i(e, n)))
                : "function" == typeof i && r && (i = i(e, n.t, n)),
              i)
            : i;
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
        (ft.prototype = {
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
              void 0 === t && (t = ht.defaultProtocol),
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
              o = t.get("tagName", n, e),
              s = this.toFormattedString(t),
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
              u && i(a, u),
              { tagName: o, attributes: a, content: s, eventListeners: h }
            );
          }
        });
      const yt = gt("email", {
          isLink: !0,
          toHref() {
            return "mailto:" + this.toString();
          }
        }),
        kt = gt("text"),
        vt = gt("nl"),
        bt = gt("url", {
          isLink: !0,
          toHref(t) {
            return void 0 === t && (t = ht.defaultProtocol), this.hasProtocol() ? this.v : `${t}://${this.v}`;
          },
          hasProtocol() {
            const t = this.tk;
            return t.length >= 2 && t[0].t !== f && t[1].t === z;
          }
        }),
        Mt = (t) => new l(t);
      function wt(t, e, n) {
        const r = n[0].s,
          i = n[n.length - 1].e;
        return new t(e.slice(r, i), n);
      }
      const Tt = ("undefined" != typeof console && console && console.warn) || (() => {}),
        At = { scanner: null, parser: null, tokenQueue: [], pluginQueue: [], customSchemes: [], initialized: !1 };
      function xt(t, e) {
        if (
          (void 0 === e && (e = !1),
          At.initialized &&
            Tt(
              `linkifyjs: already initialized - will not register custom scheme "${t}" until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.`
            ),
          !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
        )
          throw new Error(
            'linkifyjs: incorrect scheme format.\n 1. Must only contain digits, lowercase ASCII letters or "-"\n 2. Cannot start or end with "-"\n 3. "-" cannot repeat'
          );
        At.customSchemes.push([t, e]);
      }
      function Lt(t) {
        return (
          At.initialized ||
            (function () {
              At.scanner = (function (t) {
                void 0 === t && (t = []);
                const e = {};
                l.groups = e;
                const n = new l();
                null == lt &&
                  (lt = ut(
                    "aaa1rp3barth4b0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0faromeo7ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re2s2c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y0eats7k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking0channel11l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t0isalat7u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0at2delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d0network8tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntdoor4ier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5gtv3iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0eles2s3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1nder2le4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster5ia3d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4de2k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0cys3drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7serati6ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic3tual5v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rthwesternmutual14on4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3ssagens7y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cher3ks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w0time7i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ffany5ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0channel7ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lkswagen7vo3te1ing3o2yage5u0elos6wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2"
                  )),
                  null == dt &&
                    (dt = ut(
                      "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5تصالات6رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2"
                    )),
                  h(n, "'", H),
                  h(n, "{", w),
                  h(n, "[", T),
                  h(n, "<", A),
                  h(n, "(", x),
                  h(n, "}", L),
                  h(n, "]", S),
                  h(n, ">", C),
                  h(n, ")", O),
                  h(n, "&", E),
                  h(n, "*", P),
                  h(n, "@", N),
                  h(n, "`", j),
                  h(n, "^", I),
                  h(n, ":", z),
                  h(n, ",", _),
                  h(n, "$", R),
                  h(n, ".", $),
                  h(n, "=", D),
                  h(n, "!", K),
                  h(n, "-", q),
                  h(n, "%", U),
                  h(n, "|", W),
                  h(n, "+", V),
                  h(n, "#", F),
                  h(n, "?", G),
                  h(n, '"', Y),
                  h(n, "/", X),
                  h(n, ";", Q),
                  h(n, "~", J),
                  h(n, "_", Z),
                  h(n, "\\", B);
                const r = c(n, st, b, { numeric: !0 });
                c(r, st, r);
                const s = c(n, rt, p, { ascii: !0 });
                c(s, rt, s);
                const d = c(n, it, m, { alpha: !0 });
                c(d, rt), c(d, it, d);
                const ht = c(n, at, "WS", { [o]: !0 });
                h(n, "\n", M, { [o]: !0 }), h(ht, "\n"), c(ht, at, ht);
                const pt = c(n, ot, tt, { emoji: !0 });
                c(pt, ot, pt), h(pt, "️", pt);
                const mt = h(pt, "‍");
                c(mt, ot, pt);
                const ft = [[rt, s]],
                  gt = [
                    [rt, null],
                    [it, d]
                  ];
                for (let t = 0; t < lt.length; t++) ct(n, lt[t], g, p, ft);
                for (let t = 0; t < dt.length; t++) ct(n, dt[t], y, m, gt);
                a(g, { tld: !0, ascii: !0 }, e),
                  a(y, { utld: !0, alpha: !0 }, e),
                  ct(n, "file", k, p, ft),
                  ct(n, "mailto", k, p, ft),
                  ct(n, "http", v, p, ft),
                  ct(n, "https", v, p, ft),
                  ct(n, "ftp", v, p, ft),
                  ct(n, "ftps", v, p, ft),
                  a(k, { scheme: !0, ascii: !0 }, e),
                  a(v, { slashscheme: !0, ascii: !0 }, e),
                  (t = t.sort((t, e) => (t[0] > e[0] ? 1 : -1)));
                for (let e = 0; e < t.length; e++) {
                  const r = t[e][0],
                    i = t[e][1] ? { scheme: !0 } : { slashscheme: !0 };
                  r.indexOf("-") >= 0
                    ? (i.domain = !0)
                    : rt.test(r)
                    ? st.test(r)
                      ? (i.asciinumeric = !0)
                      : (i.ascii = !0)
                    : (i.numeric = !0),
                    u(n, r, r, i);
                }
                return u(n, "localhost", f, { ascii: !0 }), (n.jd = new l(et)), { start: n, tokens: i({ groups: e }, nt) };
              })(At.customSchemes);
              for (let t = 0; t < At.tokenQueue.length; t++) At.tokenQueue[t][1]({ scanner: At.scanner });
              At.parser = (function (t) {
                let { groups: e } = t;
                const n = e.domain.concat([E, P, N, B, j, I, R, D, q, b, U, W, V, F, X, et, J, Z]),
                  r = [H, C, L, S, O, z, _, $, K, A, w, T, x, G, Y, Q],
                  i = [E, H, P, B, j, I, L, R, D, q, w, U, W, V, F, G, X, et, J, Z],
                  o = Mt(),
                  s = h(o, J);
                d(s, i, s), d(s, e.domain, s);
                const a = Mt(),
                  l = Mt(),
                  c = Mt();
                d(o, e.domain, a), d(o, e.scheme, l), d(o, e.slashscheme, c), d(a, i, s), d(a, e.domain, a);
                const u = h(a, N);
                h(s, N, u), h(l, N, u), h(c, N, u);
                const p = h(s, $);
                d(p, i, s), d(p, e.domain, s);
                const m = Mt();
                d(u, e.domain, m), d(m, e.domain, m);
                const g = h(m, $);
                d(g, e.domain, m);
                const y = Mt(yt);
                d(g, e.tld, y), d(g, e.utld, y), h(u, f, y);
                const k = h(m, q);
                d(k, e.domain, m), d(y, e.domain, m), h(y, $, g), h(y, q, k);
                const v = h(y, z);
                d(v, e.numeric, yt);
                const tt = h(a, q),
                  rt = h(a, $);
                d(tt, e.domain, a), d(rt, i, s), d(rt, e.domain, a);
                const it = Mt(bt);
                d(rt, e.tld, it), d(rt, e.utld, it), d(it, e.domain, a), d(it, i, s), h(it, $, rt), h(it, q, tt), h(it, N, u);
                const ot = h(it, z),
                  st = Mt(bt);
                d(ot, e.numeric, st);
                const at = Mt(bt),
                  lt = Mt();
                d(at, n, at), d(at, r, lt), d(lt, n, at), d(lt, r, lt), h(it, X, at), h(st, X, at);
                const dt = h(l, z),
                  ct = h(c, z),
                  ut = h(ct, X),
                  ht = h(ut, X);
                d(l, e.domain, a),
                  h(l, $, rt),
                  h(l, q, tt),
                  d(c, e.domain, a),
                  h(c, $, rt),
                  h(c, q, tt),
                  d(dt, e.domain, at),
                  h(dt, X, at),
                  d(ht, e.domain, at),
                  d(ht, n, at),
                  h(ht, X, at);
                const pt = h(at, w),
                  mt = h(at, T),
                  ft = h(at, A),
                  gt = h(at, x);
                h(lt, w, pt),
                  h(lt, T, mt),
                  h(lt, A, ft),
                  h(lt, x, gt),
                  h(pt, L, at),
                  h(mt, S, at),
                  h(ft, C, at),
                  h(gt, O, at),
                  h(pt, L, at);
                const kt = Mt(bt),
                  wt = Mt(bt),
                  Tt = Mt(bt),
                  At = Mt(bt);
                d(pt, n, kt), d(mt, n, wt), d(ft, n, Tt), d(gt, n, At);
                const xt = Mt(),
                  Lt = Mt(),
                  St = Mt(),
                  Ct = Mt();
                return (
                  d(pt, r),
                  d(mt, r),
                  d(ft, r),
                  d(gt, r),
                  d(kt, n, kt),
                  d(wt, n, wt),
                  d(Tt, n, Tt),
                  d(At, n, At),
                  d(kt, r, kt),
                  d(wt, r, wt),
                  d(Tt, r, Tt),
                  d(At, r, At),
                  d(xt, n, xt),
                  d(Lt, n, wt),
                  d(St, n, Tt),
                  d(Ct, n, At),
                  d(xt, r, xt),
                  d(Lt, r, Lt),
                  d(St, r, St),
                  d(Ct, r, Ct),
                  h(wt, S, at),
                  h(Tt, C, at),
                  h(At, O, at),
                  h(kt, L, at),
                  h(Lt, S, at),
                  h(St, C, at),
                  h(Ct, O, at),
                  h(xt, O, at),
                  h(o, f, it),
                  h(o, M, vt),
                  { start: o, tokens: nt }
                );
              })(At.scanner.tokens);
              for (let t = 0; t < At.pluginQueue.length; t++) At.pluginQueue[t][1]({ scanner: At.scanner, parser: At.parser });
              At.initialized = !0;
            })(),
          (function (t, e, n) {
            let r = n.length,
              i = 0,
              o = [],
              s = [];
            for (; i < r; ) {
              let a = t,
                l = null,
                d = null,
                c = 0,
                u = null,
                h = -1;
              for (; i < r && !(l = a.go(n[i].t)); ) s.push(n[i++]);
              for (; i < r && (d = l || a.go(n[i].t)); ) (l = null), (a = d), a.accepts() ? ((h = 0), (u = a)) : h >= 0 && h++, i++, c++;
              if (h < 0) (i -= c), i < r && (s.push(n[i]), i++);
              else {
                s.length > 0 && (o.push(wt(kt, e, s)), (s = [])), (i -= h), (c -= h);
                const t = u.t,
                  r = n.slice(i - c, i);
                o.push(wt(t, e, r));
              }
            }
            return s.length > 0 && o.push(wt(kt, e, s)), o;
          })(
            At.parser.start,
            t,
            (function (t, e) {
              const n = (function (t) {
                  const e = [],
                    n = t.length;
                  let r = 0;
                  for (; r < n; ) {
                    let i,
                      o = t.charCodeAt(r),
                      s =
                        o < 55296 || o > 56319 || r + 1 === n || (i = t.charCodeAt(r + 1)) < 56320 || i > 57343 ? t[r] : t.slice(r, r + 2);
                    e.push(s), (r += s.length);
                  }
                  return e;
                })(e.replace(/[A-Z]/g, (t) => t.toLowerCase())),
                r = n.length,
                i = [];
              let o = 0,
                s = 0;
              for (; s < r; ) {
                let a = t,
                  l = null,
                  d = 0,
                  c = null,
                  u = -1,
                  h = -1;
                for (; s < r && (l = a.go(n[s])); )
                  (a = l),
                    a.accepts() ? ((u = 0), (h = 0), (c = a)) : u >= 0 && ((u += n[s].length), h++),
                    (d += n[s].length),
                    (o += n[s].length),
                    s++;
                (o -= u), (s -= h), (d -= u), i.push({ t: c.t, v: e.slice(o - d, o), s: o - d, e: o });
              }
              return i;
            })(At.scanner.start, t)
          )
        );
      }
      function St(t, e, n) {
        if ((void 0 === e && (e = null), void 0 === n && (n = null), e && "object" == typeof e)) {
          if (n) throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
          (n = e), (e = null);
        }
        const r = new pt(n),
          i = Lt(t),
          o = [];
        for (let t = 0; t < i.length; t++) {
          const n = i[t];
          !n.isLink || (e && n.t !== e) || o.push(n.toFormattedObject(r));
        }
        return o;
      }
      var Ct = n(2376);
      const Ot = r.vc.create({
        name: "link",
        priority: 1e3,
        keepOnSplit: !1,
        onCreate() {
          this.options.protocols.forEach((t) => {
            "string" != typeof t ? xt(t.scheme, t.optionalSlashes) : xt(t);
          });
        },
        onDestroy() {
          (l.groups = {}),
            (At.scanner = null),
            (At.parser = null),
            (At.tokenQueue = []),
            (At.pluginQueue = []),
            (At.customSchemes = []),
            (At.initialized = !1);
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
          return ["a", (0, r.P1)(this.options.HTMLAttributes, t), 0];
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
                St(t)
                  .filter((t) => !this.options.validate || this.options.validate(t.value))
                  .filter((t) => t.isLink)
                  .map((t) => ({ text: t.value, index: t.start, data: t })),
              type: this.type,
              getAttributes: (t, e) => {
                var n, r;
                const i = null === (n = e.clipboardData) || void 0 === n ? void 0 : n.getData("text/html"),
                  o = null == i ? void 0 : i.match(/href="([^"]*)"/);
                return o ? { href: o[1] } : { href: null === (r = t.data) || void 0 === r ? void 0 : r.href };
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
                new Ct.Sy({
                  key: new Ct.H$("autolink"),
                  appendTransaction: (t, n, i) => {
                    const o = t.some((t) => t.docChanged) && !n.doc.eq(i.doc),
                      s = t.some((t) => t.getMeta("preventAutolink"));
                    if (!o || s) return;
                    const { tr: a } = i,
                      l = (0, r.XP)(n.doc, [...t]);
                    return (
                      (0, r.QC)(l).forEach(({ newRange: t }) => {
                        const n = (0, r.b5)(i.doc, t, (t) => t.isTextblock);
                        let o, s;
                        if (
                          (n.length > 1
                            ? ((o = n[0]), (s = i.doc.textBetween(o.pos, o.pos + o.node.nodeSize, void 0, " ")))
                            : n.length &&
                              i.doc.textBetween(t.from, t.to, " ", " ").endsWith(" ") &&
                              ((o = n[0]), (s = i.doc.textBetween(o.pos, t.to, void 0, " "))),
                          o && s)
                        ) {
                          const t = s.split(" ").filter((t) => "" !== t);
                          if (t.length <= 0) return !1;
                          const n = t[t.length - 1],
                            l = o.pos + s.lastIndexOf(n);
                          if (!n) return !1;
                          St(n)
                            .filter((t) => t.isLink)
                            .map((t) => ({ ...t, from: l + t.start + 1, to: l + t.end + 1 }))
                            .filter((t) => !i.schema.marks.code || !i.doc.rangeHasMark(t.from, t.to, i.schema.marks.code))
                            .filter((t) => !e.validate || e.validate(t.value))
                            .forEach((t) => {
                              (0, r.tI)(t.from, t.to, i.doc).some((t) => t.mark.type === e.type) ||
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
                  return new Ct.Sy({
                    key: new Ct.H$("handleClickLink"),
                    props: {
                      handleClick: (e, n, i) => {
                        var o, s;
                        if (0 !== i.button) return !1;
                        if ("A" !== i.target.nodeName) return !1;
                        const a = (0, r.u9)(e.state, t.type.name),
                          l = i.target,
                          d = null !== (o = null == l ? void 0 : l.href) && void 0 !== o ? o : a.href,
                          c = null !== (s = null == l ? void 0 : l.target) && void 0 !== s ? s : a.target;
                        return !(!l || !d || (e.editable && window.open(d, c), 0));
                      }
                    }
                  });
                })({ type: this.type })
              ),
            t
          );
          var e;
        }
      });
    },
    93237: (t, e, n) => {
      "use strict";
      n.d(e, { V: () => s });
      var r = n(73845),
        i = n(2376),
        o = n(84348);
      const s = r.hj.create({
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
            new i.Sy({
              key: new i.H$("placeholder"),
              props: {
                decorations: ({ doc: t, selection: e }) => {
                  const n = this.editor.isEditable || !this.options.showOnlyWhenEditable,
                    { anchor: r } = e,
                    i = [];
                  if (!n) return null;
                  const s = t.type.createAndFill(),
                    a = (null == s ? void 0 : s.sameMarkup(t)) && null === s.content.findDiffStart(t.content);
                  return (
                    t.descendants((t, e) => {
                      const n = r >= e && r <= e + t.nodeSize,
                        s = !t.isLeaf && !t.childCount;
                      if ((n || !this.options.showOnlyCurrent) && s) {
                        const r = [this.options.emptyNodeClass];
                        a && r.push(this.options.emptyEditorClass);
                        const s = o.p.node(e, e + t.nodeSize, {
                          class: r.join(" "),
                          "data-placeholder":
                            "function" == typeof this.options.placeholder
                              ? this.options.placeholder({ editor: this.editor, node: t, pos: e, hasAnchor: n })
                              : this.options.placeholder
                        });
                        i.push(s);
                      }
                      return this.options.includeChildren;
                    }),
                    o.EH.create(t, i)
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
      n.d(e, { Re: () => s });
      var r = n(73845);
      const i = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/,
        o = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g,
        s = r.vc.create({
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
            return [(0, r.Cf)({ find: i, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.K9)({ find: o, type: this.type })];
          }
        });
    },
    87605: (t, e, n) => {
      "use strict";
      n.d(e, { Uf: () => o });
      var r = n(73845);
      const i = /^\s*(\[([( |x])?\])\s$/,
        o = r.NB.create({
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
              const i = document.createElement("li"),
                o = document.createElement("label"),
                s = document.createElement("span"),
                a = document.createElement("input"),
                l = document.createElement("div");
              return (
                (o.contentEditable = "false"),
                (a.type = "checkbox"),
                a.addEventListener("change", (e) => {
                  if (!r.isEditable && !this.options.onReadOnlyChecked) return void (a.checked = !a.checked);
                  const { checked: i } = e.target;
                  r.isEditable &&
                    "function" == typeof n &&
                    r
                      .chain()
                      .focus(void 0, { scrollIntoView: !1 })
                      .command(({ tr: t }) => {
                        const e = n(),
                          r = t.doc.nodeAt(e);
                        return t.setNodeMarkup(e, void 0, { ...(null == r ? void 0 : r.attrs), checked: i }), !0;
                      })
                      .run(),
                    !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, i) || (a.checked = !a.checked));
                }),
                Object.entries(this.options.HTMLAttributes).forEach(([t, e]) => {
                  i.setAttribute(t, e);
                }),
                (i.dataset.checked = t.attrs.checked),
                t.attrs.checked && a.setAttribute("checked", "checked"),
                o.append(a, s),
                i.append(o, l),
                Object.entries(e).forEach(([t, e]) => {
                  i.setAttribute(t, e);
                }),
                {
                  dom: i,
                  contentDOM: l,
                  update: (t) =>
                    t.type === this.type &&
                    ((i.dataset.checked = t.attrs.checked),
                    t.attrs.checked ? a.setAttribute("checked", "checked") : a.removeAttribute("checked"),
                    !0)
                }
              );
            };
          },
          addInputRules() {
            return [(0, r.S0)({ find: i, type: this.type, getAttributes: (t) => ({ checked: "x" === t[t.length - 1] }) })];
          }
        });
    },
    63354: (t, e, n) => {
      "use strict";
      n.d(e, { a: () => i });
      var r = n(73845);
      const i = r.NB.create({
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
      n.d(e, { v: () => i });
      var r = n(73845);
      const i = r.vc.create({
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
      const i = /^\s*>\s$/,
        o = r.NB.create({
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
            return [(0, r.S0)({ find: i, type: this.type })];
          }
        });
      var s = n(67937);
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
      const f = /^```([a-z]+)?[\s\n]$/,
        g = /^~~~([a-z]+)?[\s\n]$/,
        y = r.NB.create({
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
                  { $from: r, empty: i } = n;
                if (!i || r.parent.type !== this.type) return !1;
                const o = r.parentOffset === r.parent.nodeSize - 2,
                  s = r.parent.textContent.endsWith("\n\n");
                return (
                  !(!o || !s) &&
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
                  { $from: i, empty: o } = n;
                if (!o || i.parent.type !== this.type) return !1;
                if (i.parentOffset !== i.parent.nodeSize - 2) return !1;
                const s = i.after();
                return void 0 !== s && !r.nodeAt(s) && t.commands.exitCode();
              }
            };
          },
          addInputRules() {
            return [
              (0, r.zK)({ find: f, type: this.type, getAttributes: (t) => ({ language: t[1] }) }),
              (0, r.zK)({ find: g, type: this.type, getAttributes: (t) => ({ language: t[1] }) })
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
                      i = r ? JSON.parse(r) : void 0,
                      o = null == i ? void 0 : i.mode;
                    if (!n || !o) return !1;
                    const { tr: s } = t.state;
                    return (
                      s.replaceSelectionWith(this.type.create({ language: o })),
                      s.setSelection(m.Bs.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))),
                      s.insertText(n.replace(/\r\n?/g, "\n")),
                      s.setMeta("paste", !0),
                      t.dispatch(s),
                      !0
                    );
                  }
                }
              })
            ];
          }
        });
      var k = n(20336),
        v = n(16560);
      function b(t = {}) {
        return new m.Sy({ view: (e) => new M(e, t) });
      }
      class M {
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
                let i = e.getBoundingClientRect(),
                  o = n ? i.bottom : i.top;
                n && r && (o = (o + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2),
                  (t = { left: i.left, right: i.right, top: o - this.width / 2, bottom: o + this.width / 2 });
              }
            }
          }
          if (!t) {
            let e = this.editorView.coordsAtPos(this.cursorPos);
            t = { left: e.left - this.width / 2, right: e.left + this.width / 2, top: e.top, bottom: e.bottom };
          }
          let r,
            i,
            o = this.editorView.dom.offsetParent;
          if (
            (this.element ||
              ((this.element = o.appendChild(document.createElement("div"))),
              this.class && (this.element.className = this.class),
              (this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;"),
              this.color && (this.element.style.backgroundColor = this.color)),
            this.element.classList.toggle("prosemirror-dropcursor-block", n),
            this.element.classList.toggle("prosemirror-dropcursor-inline", !n),
            !o || (o == document.body && "static" == getComputedStyle(o).position))
          )
            (r = -pageXOffset), (i = -pageYOffset);
          else {
            let t = o.getBoundingClientRect();
            (r = t.left - o.scrollLeft), (i = t.top - o.scrollTop);
          }
          (this.element.style.left = t.left - r + "px"),
            (this.element.style.top = t.top - i + "px"),
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
            i = "function" == typeof r ? r(this.editorView, e, t) : r;
          if (e && !i) {
            let t = e.pos;
            if (this.editorView.dragging && this.editorView.dragging.slice) {
              let e = (0, v.nj)(this.editorView.state.doc, t, this.editorView.dragging.slice);
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
      const w = r.hj.create({
        name: "dropCursor",
        addOptions: () => ({ color: "currentColor", width: 1, class: void 0 }),
        addProseMirrorPlugins() {
          return [b(this.options)];
        }
      });
      var T = n(82337),
        A = n(87823),
        x = n(84348);
      class L extends m.Y1 {
        constructor(t) {
          super(t, t);
        }
        map(t, e) {
          let n = t.resolve(e.map(this.head));
          return L.valid(n) ? new L(n) : m.Y1.near(n);
        }
        content() {
          return A.p2.empty;
        }
        eq(t) {
          return t instanceof L && t.head == this.head;
        }
        toJSON() {
          return { type: "gapcursor", pos: this.head };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos) throw new RangeError("Invalid input for GapCursor.fromJSON");
          return new L(t.resolve(e.pos));
        }
        getBookmark() {
          return new S(this.anchor);
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
            if (!n && L.valid(t)) return t;
            let r = t.pos,
              i = null;
            for (let n = t.depth; ; n--) {
              let o = t.node(n);
              if (e > 0 ? t.indexAfter(n) < o.childCount : t.index(n) > 0) {
                i = o.child(e > 0 ? t.indexAfter(n) : t.index(n) - 1);
                break;
              }
              if (0 == n) return null;
              r += e;
              let s = t.doc.resolve(r);
              if (L.valid(s)) return s;
            }
            for (;;) {
              let o = e > 0 ? i.firstChild : i.lastChild;
              if (!o) {
                if (i.isAtom && !i.isText && !m.qv.isSelectable(i)) {
                  (t = t.doc.resolve(r + i.nodeSize * e)), (n = !1);
                  continue t;
                }
                break;
              }
              (i = o), (r += e);
              let s = t.doc.resolve(r);
              if (L.valid(s)) return s;
            }
            return null;
          }
        }
      }
      (L.prototype.visible = !1), (L.findFrom = L.findGapCursorFrom), m.Y1.jsonID("gapcursor", L);
      class S {
        constructor(t) {
          this.pos = t;
        }
        map(t) {
          return new S(t.map(this.pos));
        }
        resolve(t) {
          let e = t.resolve(this.pos);
          return L.valid(e) ? new L(e) : m.Y1.near(e);
        }
      }
      const C = (0, T.$)({ ArrowLeft: O("horiz", -1), ArrowRight: O("horiz", 1), ArrowUp: O("vert", -1), ArrowDown: O("vert", 1) });
      function O(t, e) {
        const n = "vert" == t ? (e > 0 ? "down" : "up") : e > 0 ? "right" : "left";
        return function (t, r, i) {
          let o = t.selection,
            s = e > 0 ? o.$to : o.$from,
            a = o.empty;
          if (o instanceof m.Bs) {
            if (!i.endOfTextblock(n) || 0 == s.depth) return !1;
            (a = !1), (s = t.doc.resolve(e > 0 ? s.after() : s.before()));
          }
          let l = L.findGapCursorFrom(s, e, a);
          return !!l && (r && r(t.tr.setSelection(new L(l))), !0);
        };
      }
      function E(t, e, n) {
        if (!t || !t.editable) return !1;
        let r = t.state.doc.resolve(e);
        if (!L.valid(r)) return !1;
        let i = t.posAtCoords({ left: n.clientX, top: n.clientY });
        return !(
          (i && i.inside > -1 && m.qv.isSelectable(t.state.doc.nodeAt(i.inside))) ||
          (t.dispatch(t.state.tr.setSelection(new L(r))), 0)
        );
      }
      function H(t, e) {
        if ("insertCompositionText" != e.inputType || !(t.state.selection instanceof L)) return !1;
        let { $from: n } = t.state.selection,
          r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
        if (!r) return !1;
        let i = A.HY.empty;
        for (let t = r.length - 1; t >= 0; t--) i = A.HY.from(r[t].createAndFill(null, i));
        let o = t.state.tr.replace(n.pos, n.pos, new A.p2(i, 0, 0));
        return o.setSelection(m.Bs.near(o.doc.resolve(n.pos + 1))), t.dispatch(o), !1;
      }
      function P(t) {
        if (!(t.selection instanceof L)) return null;
        let e = document.createElement("div");
        return (e.className = "ProseMirror-gapcursor"), x.EH.create(t.doc, [x.p.widget(t.selection.head, e, { key: "gapcursor" })]);
      }
      const N = r.hj.create({
          name: "gapCursor",
          addProseMirrorPlugins: () => [
            new m.Sy({
              props: {
                decorations: P,
                createSelectionBetween: (t, e, n) => (e.pos == n.pos && L.valid(n) ? new L(n) : null),
                handleClick: E,
                handleKeyDown: C,
                handleDOMEvents: { beforeinput: H }
              }
            })
          ],
          extendNodeSchema(t) {
            var e;
            const n = { name: t.name, options: t.options, storage: t.storage };
            return { allowGapCursor: null !== (e = (0, r.nU)((0, r.Nl)(t, "allowGapCursor", n))) && void 0 !== e ? e : null };
          }
        }),
        B = r.NB.create({
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
                        const { selection: t, storedMarks: i } = n;
                        if (t.$from.parent.type.spec.isolating) return !1;
                        const { keepMarks: o } = this.options,
                          { splittableMarks: s } = r.extensionManager,
                          a = i || (t.$to.parentOffset && t.$from.marks());
                        return e()
                          .insertContent({ type: this.name })
                          .command(({ tr: t, dispatch: e }) => {
                            if (e && a && o) {
                              const e = a.filter((t) => s.includes(t.type.name));
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
      var j = n(7490),
        I = 200,
        z = function () {};
      (z.prototype.append = function (t) {
        return t.length
          ? ((t = z.from(t)),
            (!this.length && t) || (t.length < I && this.leafAppend(t)) || (this.length < I && t.leafPrepend(this)) || this.appendInner(t))
          : this;
      }),
        (z.prototype.prepend = function (t) {
          return t.length ? z.from(t).append(this) : this;
        }),
        (z.prototype.appendInner = function (t) {
          return new R(this, t);
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
          return t instanceof z ? t : t && t.length ? new _(t) : z.empty;
        });
      var _ = (function (t) {
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
            for (var i = e; i < n; i++) if (!1 === t(this.values[i], r + i)) return !1;
          }),
          (e.prototype.forEachInvertedInner = function (t, e, n, r) {
            for (var i = e - 1; i >= n; i--) if (!1 === t(this.values[i], r + i)) return !1;
          }),
          (e.prototype.leafAppend = function (t) {
            if (this.length + t.length <= I) return new e(this.values.concat(t.flatten()));
          }),
          (e.prototype.leafPrepend = function (t) {
            if (this.length + t.length <= I) return new e(t.flatten().concat(this.values));
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
      z.empty = new _([]);
      var R = (function (t) {
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
            var i = this.left.length;
            return (
              !(e < i && !1 === this.left.forEachInner(t, e, Math.min(n, i), r)) &&
              !(n > i && !1 === this.right.forEachInner(t, Math.max(e - i, 0), Math.min(this.length, n) - i, r + i)) &&
              void 0
            );
          }),
          (e.prototype.forEachInvertedInner = function (t, e, n, r) {
            var i = this.left.length;
            return (
              !(e > i && !1 === this.right.forEachInvertedInner(t, e - i, Math.max(n, i) - i, r + i)) &&
              !(n < i && !1 === this.left.forEachInvertedInner(t, Math.min(e, i), n, r)) &&
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
      const $ = z;
      class D {
        constructor(t, e) {
          (this.items = t), (this.eventCount = e);
        }
        popEvent(t, e) {
          if (0 == this.eventCount) return null;
          let n,
            r,
            i = this.items.length;
          for (; ; i--)
            if (this.items.get(i - 1).selection) {
              --i;
              break;
            }
          e && ((n = this.remapping(i, this.items.length)), (r = n.maps.length));
          let o,
            s,
            a = t.tr,
            l = [],
            d = [];
          return (
            this.items.forEach(
              (t, e) => {
                if (!t.step) return n || ((n = this.remapping(i, e + 1)), (r = n.maps.length)), r--, void d.push(t);
                if (n) {
                  d.push(new K(t.map));
                  let e,
                    i = t.step.map(n.slice(r));
                  i &&
                    a.maybeStep(i).doc &&
                    ((e = a.mapping.maps[a.mapping.maps.length - 1]), l.push(new K(e, void 0, void 0, l.length + d.length))),
                    r--,
                    e && n.appendMap(e, r);
                } else a.maybeStep(t.step);
                return t.selection
                  ? ((o = n ? t.selection.map(n.slice(r)) : t.selection),
                    (s = new D(this.items.slice(0, i).append(d.reverse().concat(l)), this.eventCount - 1)),
                    !1)
                  : void 0;
              },
              this.items.length,
              0
            ),
            { remaining: s, transform: a, selection: o }
          );
        }
        addTransform(t, e, n, r) {
          let i = [],
            o = this.eventCount,
            s = this.items,
            a = !r && s.length ? s.get(s.length - 1) : null;
          for (let n = 0; n < t.steps.length; n++) {
            let l,
              d = t.steps[n].invert(t.docs[n]),
              c = new K(t.mapping.maps[n], d, e);
            (l = a && a.merge(c)) && ((c = l), n ? i.pop() : (s = s.slice(0, s.length - 1))),
              i.push(c),
              e && (o++, (e = void 0)),
              r || (a = c);
          }
          let l = o - n.depth;
          return (
            l > U &&
              ((s = (function (t, e) {
                let n;
                return (
                  t.forEach((t, r) => {
                    if (t.selection && 0 == e--) return (n = r), !1;
                  }),
                  t.slice(n)
                );
              })(s, l)),
              (o -= l)),
            new D(s.append(i), o)
          );
        }
        remapping(t, e) {
          let n = new v.vs();
          return (
            this.items.forEach(
              (e, r) => {
                let i = null != e.mirrorOffset && r - e.mirrorOffset >= t ? n.maps.length - e.mirrorOffset : void 0;
                n.appendMap(e.map, i);
              },
              t,
              e
            ),
            n
          );
        }
        addMaps(t) {
          return 0 == this.eventCount ? this : new D(this.items.append(t.map((t) => new K(t))), this.eventCount);
        }
        rebased(t, e) {
          if (!this.eventCount) return this;
          let n = [],
            r = Math.max(0, this.items.length - e),
            i = t.mapping,
            o = t.steps.length,
            s = this.eventCount;
          this.items.forEach((t) => {
            t.selection && s--;
          }, r);
          let a = e;
          this.items.forEach((e) => {
            let r = i.getMirror(--a);
            if (null == r) return;
            o = Math.min(o, r);
            let l = i.maps[r];
            if (e.step) {
              let o = t.steps[r].invert(t.docs[r]),
                d = e.selection && e.selection.map(i.slice(a + 1, r));
              d && s++, n.push(new K(l, o, d));
            } else n.push(new K(l));
          }, r);
          let l = [];
          for (let t = e; t < o; t++) l.push(new K(i.maps[t]));
          let d = this.items.slice(0, r).append(l).append(n),
            c = new D(d, s);
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
            i = 0;
          return (
            this.items.forEach(
              (o, s) => {
                if (s >= t) r.push(o), o.selection && i++;
                else if (o.step) {
                  let t = o.step.map(e.slice(n)),
                    s = t && t.getMap();
                  if ((n--, s && e.appendMap(s, n), t)) {
                    let a = o.selection && o.selection.map(e.slice(n));
                    a && i++;
                    let l,
                      d = new K(s.invert(), t, a),
                      c = r.length - 1;
                    (l = r.length && r[c].merge(d)) ? (r[c] = l) : r.push(d);
                  }
                } else o.map && n--;
              },
              this.items.length,
              0
            ),
            new D($.from(r.reverse()), i)
          );
        }
      }
      D.empty = new D($.empty, 0);
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
        constructor(t, e, n, r, i) {
          (this.done = t), (this.undone = e), (this.prevRanges = n), (this.prevTime = r), (this.prevComposition = i);
        }
      }
      const U = 20;
      function W(t) {
        let e = [];
        return t.forEach((t, n, r, i) => e.push(r, i)), e;
      }
      function V(t, e) {
        if (!t) return null;
        let n = [];
        for (let r = 0; r < t.length; r += 2) {
          let i = e.map(t[r], 1),
            o = e.map(t[r + 1], -1);
          i <= o && n.push(i, o);
        }
        return n;
      }
      function F(t, e, n, r) {
        let i = Q(e),
          o = X.get(e).spec.config,
          s = (r ? t.undone : t.done).popEvent(e, i);
        if (!s) return;
        let a = s.selection.resolve(s.transform.doc),
          l = (r ? t.done : t.undone).addTransform(s.transform, e.selection.getBookmark(), o, i),
          d = new q(r ? l : s.remaining, r ? s.remaining : l, null, 0, -1);
        n(s.transform.setSelection(a).setMeta(X, { redo: r, historyState: d }).scrollIntoView());
      }
      let G = !1,
        Y = null;
      function Q(t) {
        let e = t.plugins;
        if (Y != e) {
          (G = !1), (Y = e);
          for (let t = 0; t < e.length; t++)
            if (e[t].spec.historyPreserveItems) {
              G = !0;
              break;
            }
        }
        return G;
      }
      const X = new m.H$("history"),
        J = new m.H$("closeHistory");
      function Z(t = {}) {
        return (
          (t = { depth: t.depth || 100, newGroupDelay: t.newGroupDelay || 500 }),
          new m.Sy({
            key: X,
            state: {
              init: () => new q(D.empty, D.empty, null, 0, -1),
              apply: (e, n, r) =>
                (function (t, e, n, r) {
                  let i,
                    o = n.getMeta(X);
                  if (o) return o.historyState;
                  n.getMeta(J) && (t = new q(t.done, t.undone, null, 0, -1));
                  let s = n.getMeta("appendedTransaction");
                  if (0 == n.steps.length) return t;
                  if (s && s.getMeta(X))
                    return s.getMeta(X).redo
                      ? new q(
                          t.done.addTransform(n, void 0, r, Q(e)),
                          t.undone,
                          W(n.mapping.maps[n.steps.length - 1]),
                          t.prevTime,
                          t.prevComposition
                        )
                      : new q(t.done, t.undone.addTransform(n, void 0, r, Q(e)), null, t.prevTime, t.prevComposition);
                  if (!1 === n.getMeta("addToHistory") || (s && !1 === s.getMeta("addToHistory")))
                    return (i = n.getMeta("rebased"))
                      ? new q(t.done.rebased(n, i), t.undone.rebased(n, i), V(t.prevRanges, n.mapping), t.prevTime, t.prevComposition)
                      : new q(
                          t.done.addMaps(n.mapping.maps),
                          t.undone.addMaps(n.mapping.maps),
                          V(t.prevRanges, n.mapping),
                          t.prevTime,
                          t.prevComposition
                        );
                  {
                    let i = n.getMeta("composition"),
                      o =
                        0 == t.prevTime ||
                        (!s &&
                          t.prevComposition != i &&
                          (t.prevTime < (n.time || 0) - r.newGroupDelay ||
                            !(function (t, e) {
                              if (!e) return !1;
                              if (!t.docChanged) return !0;
                              let n = !1;
                              return (
                                t.mapping.maps[0].forEach((t, r) => {
                                  for (let i = 0; i < e.length; i += 2) t <= e[i + 1] && r >= e[i] && (n = !0);
                                }),
                                n
                              );
                            })(n, t.prevRanges))),
                      a = s ? V(t.prevRanges, n.mapping) : W(n.mapping.maps[n.steps.length - 1]);
                    return new q(
                      t.done.addTransform(n, o ? e.selection.getBookmark() : void 0, r, Q(e)),
                      D.empty,
                      a,
                      n.time,
                      null == i ? t.prevComposition : i
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
          return !(!n || 0 == n.done.eventCount || (e && F(n, t, e, !1), 0));
        },
        et = (t, e) => {
          let n = X.getState(t);
          return !(!n || 0 == n.undone.eventCount || (e && F(n, t, e, !0), 0));
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
        it = n(73816);
      const ot = r.NB.create({
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
        st = r.NB.create({
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
                        .updateAttributes(st.name, this.editor.getAttributes(at.name))
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
            var t, e, n, r, i, a, l, d, u, h, m, f, g, v, b, M, T, A;
            const x = [];
            return (
              !1 !== this.options.blockquote && x.push(o.configure(null === (t = this.options) || void 0 === t ? void 0 : t.blockquote)),
              !1 !== this.options.bold && x.push(s.d8.configure(null === (e = this.options) || void 0 === e ? void 0 : e.bold)),
              !1 !== this.options.bulletList && x.push(c.configure(null === (n = this.options) || void 0 === n ? void 0 : n.bulletList)),
              !1 !== this.options.code && x.push(p.configure(null === (r = this.options) || void 0 === r ? void 0 : r.code)),
              !1 !== this.options.codeBlock && x.push(y.configure(null === (i = this.options) || void 0 === i ? void 0 : i.codeBlock)),
              !1 !== this.options.document && x.push(k.B.configure(null === (a = this.options) || void 0 === a ? void 0 : a.document)),
              !1 !== this.options.dropcursor && x.push(w.configure(null === (l = this.options) || void 0 === l ? void 0 : l.dropcursor)),
              !1 !== this.options.gapcursor && x.push(N.configure(null === (d = this.options) || void 0 === d ? void 0 : d.gapcursor)),
              !1 !== this.options.hardBreak && x.push(B.configure(null === (u = this.options) || void 0 === u ? void 0 : u.hardBreak)),
              !1 !== this.options.heading && x.push(j.X.configure(null === (h = this.options) || void 0 === h ? void 0 : h.heading)),
              !1 !== this.options.history && x.push(nt.configure(null === (m = this.options) || void 0 === m ? void 0 : m.history)),
              !1 !== this.options.horizontalRule &&
                x.push(rt.b.configure(null === (f = this.options) || void 0 === f ? void 0 : f.horizontalRule)),
              !1 !== this.options.italic && x.push(it.Tx.configure(null === (g = this.options) || void 0 === g ? void 0 : g.italic)),
              !1 !== this.options.listItem && x.push(ot.configure(null === (v = this.options) || void 0 === v ? void 0 : v.listItem)),
              !1 !== this.options.orderedList && x.push(dt.configure(null === (b = this.options) || void 0 === b ? void 0 : b.orderedList)),
              !1 !== this.options.paragraph && x.push(ct.configure(null === (M = this.options) || void 0 === M ? void 0 : M.paragraph)),
              !1 !== this.options.strike && x.push(ut.Re.configure(null === (T = this.options) || void 0 === T ? void 0 : T.strike)),
              !1 !== this.options.text && x.push(ht.configure(null === (A = this.options) || void 0 === A ? void 0 : A.text)),
              x
            );
          }
        });
    },
    29204: (t, e, n) => {
      "use strict";
      n.d(e, { d7: () => o });
      var r = n(52861);
      const {
        Axios: i,
        AxiosError: o,
        CanceledError: s,
        isCancel: a,
        CancelToken: l,
        VERSION: d,
        all: c,
        Cancel: u,
        isAxiosError: h,
        spread: p,
        toFormData: m,
        AxiosHeaders: f,
        HttpStatusCode: g,
        formToJSON: y,
        mergeConfig: k
      } = r.Z;
    }
  }
]);
