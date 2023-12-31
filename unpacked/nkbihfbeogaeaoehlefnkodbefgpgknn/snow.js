(function () {
  "use strict";
  (() => {
    var e = {
        586: (e, t, n) => {
          const r = n(228),
            { getFramesArray: o, getFrameTag: c } = n(648),
            { getOnload: i, setOnload: a, removeAttribute: s, addEventListener: u } = n(14);
          function l(e) {
            if (!c(e)) return;
            u(e, "load", function () {
              r(e);
            });
            const t = i(e);
            t && (a(e, null), s(e, "onload"), a(e, t));
          }
          e.exports = function (e) {
            for (let t = 0; t < e.length; t++) {
              const n = e[t],
                r = o(n, !0);
              for (let e = 0; e < r.length; e++) l(r[e]);
            }
          };
        },
        750: (e) => {
          e.exports = function (e) {
            e && e.contentWindow;
          };
        },
        832: (e, t, n) => {
          const { Object: r, Function: o } = n(14),
            { isTagFramable: c } = n(648),
            { error: i, ERR_EXTENDING_FRAMABLES_BLOCKED: a } = n(312);
          e.exports = function (e) {
            const t = r.getOwnPropertyDescriptor(e.CustomElementRegistry.prototype, "define");
            t.configurable = t.writable = !0;
            const n = t.value;
            var s;
            (t.value =
              ((s = n),
              function (e, t, n) {
                let r = n;
                if (n) {
                  const t = n.extends;
                  c(t + "") && i(a, e, n) && (r = void 0);
                }
                return o.prototype.call.call(s, this, e, t, r);
              })),
              r.defineProperty(e.CustomElementRegistry.prototype, "define", t);
          };
        },
        228: (e, t, n) => {
          const r = n(851),
            o = n(750),
            { shadows: c, toArray: i, getFramesArray: a, getContentWindowOfFrame: s, getOwnerWindowOfNode: u } = n(648),
            { Object: l, getFrameElement: p } = n(14);
          function f(e, t) {
            let n = -1;
            for (; e[++n]; ) {
              if (r(e[n], e, l)) continue;
              if (p(e[n]) === t) return e[n];
              const o = f(e[n], t);
              if (o) return o;
            }
            for (let n = 0; n < c.length; n++) {
              const r = c[n];
              if (u(r) !== e) continue;
              const o = a(r, !1);
              for (let e = 0; e < o.length; e++) {
                const n = o[e],
                  r = s(n);
                if (n === t) return r;
                const c = f(r, t);
                if (c) return c;
              }
            }
            return null;
          }
          e.exports = function (e) {
            e = i(e);
            for (let t = 0; t < e.length; t++) {
              const n = e[t];
              if ("object" != typeof n) continue;
              o(n);
              const r = f(top, n);
              r && top.SNOW_WINDOW(r);
            }
          };
        },
        328: (e, t, n) => {
          const { getFramesArray: r } = n(648),
            {
              Array: o,
              stringToLowerCase: c,
              split: i,
              getAttribute: a,
              setAttribute: s,
              getTemplateContent: u,
              getChildElementCount: l,
              createElement: p,
              getInnerHTML: f,
              setInnerHTML: m,
              remove: g,
              DocumentFragment: d
            } = n(14),
            { warn: y, WARN_DECLARATIVE_SHADOWS: w } = n(312),
            O = d.prototype.querySelectorAll;
          function E(e, t) {
            let n = "top." + (e ? "SNOW_FRAME" : "SNOW_WINDOW") + "(this);";
            return t && (n = "<script>" + n + "document.currentScript.remove();</script>"), n;
          }
          function h(e) {
            let t = a(e, "onload");
            return !!t && ((t = E(!0, !1) + t), s(e, "onload", t), !0);
          }
          function v(e) {
            let t = a(e, "src") || "";
            const [n, r] = i(t, ":");
            return "javascript" === c(n) && ((t = "javascript:" + E(!1, !1) + r), s(e, "src", t), !0);
          }
          function _(e) {
            let t = a(e, "srcdoc");
            if (t) {
              t = E(!1, !0) + t;
              const n = new o(t);
              return D(n, !0), s(e, "srcdoc", n[0]), !0;
            }
            return !1;
          }
          function D(e, t) {
            for (let c = 0; c < e.length; c++) {
              const i = p(document, "template");
              m(i, e[c]);
              const a = u(i);
              if (!l(a)) continue;
              let s = !1;
              if (t) {
                const e = p(document, "script");
                (e.textContent = E(!1, !1)), a.insertBefore(e, a.firstChild), (s = !0);
              }
              const d = O.call(a, "template[shadowroot]");
              for (let t = 0; t < d.length; t++) (n = d[t]), (o = e[c]), y(w, n, o), g(n), (s = !0);
              const D = r(a, !1);
              for (let e = 0; e < D.length; e++) {
                const t = D[e];
                (s = h(t) || s), (s = v(t) || s), (s = _(t) || s);
              }
              s && (e[c] = f(i));
            }
            var n, o;
          }
          e.exports = { handleHTML: D };
        },
        352: (e, t, n) => {
          const r = n(228),
            o = n(716),
            c = n(832),
            i = n(583),
            a = n(459),
            s = n(58),
            { hookShadowDOM: u } = n(373),
            { Object: l, Array: p, push: f, addEventListener: m, getFrameElement: g } = n(14),
            { isMarked: d, mark: y } = n(111),
            { error: w, ERR_PROVIDED_CB_IS_NOT_A_FUNCTION: O, ERR_MARK_NEW_WINDOW_FAILED: E } = n(312);
          function h(e, t) {
            const n = l.create(null);
            (n.value = t), l.defineProperty(top, e, n);
          }
          function v(e) {
            try {
              const t = !d(e);
              return t && y(e), t;
            } catch (t) {
              w(E, e, t);
            }
            return v(e);
          }
          function _(e, t) {
            if (v(e)) {
              !(function (e) {
                !(function (e) {
                  const t = g(e);
                  m(t, "load", function () {
                    r(t);
                  });
                })(e),
                  o(e),
                  c(e),
                  i(e),
                  a(e, "load"),
                  s(e),
                  u(e);
              })(e);
              for (let t = 0; t < D.length; t++) if (D[t](e)) return;
            }
            t && t(e);
          }
          const D = new p();
          e.exports = function (e) {
            ("function" != typeof e && w(O, e)) ||
              (D.length ||
                (h("SNOW_WINDOW", function (e) {
                  _(e);
                }),
                h("SNOW_FRAME", function (e) {
                  r(e);
                })),
              f(D, e),
              _(top, e));
          };
        },
        58: (e, t, n) => {
          const { protectShadows: r } = n(373),
            o = n(586),
            { getFramesArray: c, shadows: i } = n(648),
            { getParentElement: a, slice: s, Object: u, Function: l } = n(14),
            { handleHTML: p } = n(328),
            f = n(228),
            m = {
              DocumentFragment: ["replaceChildren", "append", "prepend"],
              Document: ["replaceChildren", "append", "prepend", "write", "writeln"],
              Node: ["appendChild", "insertBefore", "replaceChild"],
              Element: [
                "innerHTML",
                "outerHTML",
                "insertAdjacentHTML",
                "replaceWith",
                "insertAdjacentElement",
                "append",
                "before",
                "prepend",
                "after",
                "replaceChildren"
              ],
              ShadowRoot: ["innerHTML"],
              HTMLIFrameElement: ["srcdoc"]
            };
          function g(e, t) {
            return function () {
              const n = s(arguments),
                u = a(this) || this;
              !(function (e) {
                o(e), o(i), p(e, t);
              })(n);
              const m = l.prototype.apply.call(e, this, n);
              return (
                (function (e, t) {
                  const n = c(t, !1);
                  f(n), f(e), r(!0);
                })(n, u),
                m
              );
            };
          }
          e.exports = function (e) {
            for (const t in m) {
              const n = m[t];
              for (let r = 0; r < n.length; r++) {
                const o = n[r],
                  c = u.getOwnPropertyDescriptor(e[t].prototype, o),
                  i = c.set ? "set" : "value";
                (c[i] = g(c[i], "srcdoc" === o)),
                  (c.configurable = !0),
                  "value" === i && (c.writable = !0),
                  u.defineProperty(e[t].prototype, o, c);
              }
            }
          };
        },
        459: (e, t, n) => {
          const r = n(228),
            { removeEventListener: o, addEventListener: c, slice: i, Map: a, Object: s } = n(14),
            u = new a();
          function l(e, t) {
            return function (n, o, a) {
              let s = o;
              return (
                n === t &&
                  (u.has(o) ||
                    u.set(o, function () {
                      r(this);
                      const e = i(arguments);
                      !(function (e, t, n) {
                        t && (t.handleEvent ? t.handleEvent.apply(t, n) : t.apply(e, n));
                      })(this, o, e);
                    }),
                  (s = u.get(o))),
                c(this || e, n, s, a)
              );
            };
          }
          function p(e, t) {
            return function (n, r, c) {
              let i = r;
              return n === t && ((i = u.get(r)), u.delete(r)), o(this || e, n, i, c);
            };
          }
          e.exports = function (e, t) {
            s.defineProperty(e.EventTarget.prototype, "addEventListener", { configurable: !0, writable: !0, value: l(e, t) }),
              s.defineProperty(e.EventTarget.prototype, "removeEventListener", { configurable: !0, writable: !0, value: p(e, t) });
          };
        },
        312: (e, t, n) => {
          const { console: r } = n(14);
          e.exports = {
            warn: function (e, t, n) {
              let o;
              switch (e) {
                case 5:
                  const e = t,
                    c = n;
                  (o = !1),
                    r.warn(
                      "SNOW:",
                      "removing html string representing a declarative shadow:",
                      e,
                      "\n",
                      `"${c}"`,
                      ".",
                      "\n",
                      "if this prevents your application from running correctly, please visit/report at",
                      "https://github.com/LavaMoat/snow/issues/32#issuecomment-1239273328",
                      "."
                    );
                  break;
                case 3:
                  const i = t,
                    a = n;
                  (o = !0),
                    r.warn(
                      "SNOW:",
                      o ? "" : "NOT",
                      'blocking open attempt to "javascript:" url:',
                      i,
                      "by window: ",
                      a,
                      ".",
                      "\n",
                      "if this prevents your application from running correctly, please visit/report at",
                      "https://github.com/LavaMoat/snow/issues/44#issuecomment-1369687802",
                      "."
                    );
                  break;
                case 2:
                  const s = t,
                    u = n;
                  (o = !0),
                    r.warn(
                      "SNOW:",
                      "blocking access to property:",
                      `"${s}"`,
                      "of opened window: ",
                      u,
                      ".",
                      "\n",
                      "if this prevents your application from running correctly, please visit/report at",
                      "https://github.com/LavaMoat/snow/issues/2#issuecomment-1239264255",
                      "."
                    );
              }
              return o;
            },
            error: function (e, t, n) {
              let o;
              switch (e) {
                case 7:
                  const e = t,
                    c = n;
                  (o = !0),
                    r.error(
                      "SNOW:",
                      `calling "URL.createObjectURL()" on a "${e}" object is forbidden under snow protection:`,
                      c,
                      ".",
                      "\n",
                      "if this prevents your application from running correctly, please visit/report at",
                      "https://github.com/LavaMoat/snow/issues/43#issuecomment-1434063891",
                      ".",
                      "\n"
                    );
                  break;
                case 6:
                  const i = t,
                    a = n;
                  (o = !0),
                    r.error(
                      "SNOW:",
                      `"${i}"`,
                      "extending attempt",
                      "of framable elements such as provided",
                      a,
                      "is blocked to prevent bypass",
                      ".",
                      "\n",
                      "if this prevents your application from running correctly, please visit/report at",
                      "https://github.com/LavaMoat/snow/issues/56#issuecomment-1374899809",
                      ".",
                      "\n"
                    );
                  break;
                case 1:
                  const s = t,
                    u = n;
                  (o = !0),
                    r.error(
                      "SNOW:",
                      "failed to mark new window:",
                      s,
                      ".",
                      "\n",
                      "if this prevents your application from running correctly, please visit/report at",
                      "https://github.com/LavaMoat/snow/issues/33#issuecomment-1239280063",
                      ".",
                      "\n",
                      "in order to maintain a bulletproof defense mechanism, failing to mark a new window typically causes an infinite loop",
                      ".",
                      "\n",
                      "error caught:",
                      "\n",
                      u
                    );
                  break;
                case 4:
                  const l = t;
                  (o = !0),
                    r.error(
                      "SNOW:",
                      'first argument must be of type "function", instead got:',
                      l,
                      ".",
                      "\n",
                      "therefore, snow bailed and is not applied to the page until this is fixed."
                    );
              }
              return o;
            },
            ERR_MARK_NEW_WINDOW_FAILED: 1,
            WARN_OPEN_API_LIMITED: 2,
            WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME: 3,
            ERR_PROVIDED_CB_IS_NOT_A_FUNCTION: 4,
            WARN_DECLARATIVE_SHADOWS: 5,
            ERR_EXTENDING_FRAMABLES_BLOCKED: 6,
            ERR_BLOB_FILE_URL_OBJECT_FORBIDDEN: 7
          };
        },
        111: (e, t, n) => {
          const { Map: r, Object: o, Array: c } = n(14),
            i = new c(),
            a = new r();
          e.exports = {
            isMarked: function (e) {
              if (!a.has(e)) return !1;
              const t = o.getOwnPropertyDescriptor(e, "SNOW_ID");
              if (!t || !o.hasOwnProperty.call(t, "value")) return !1;
              if ("function" != typeof t.value) return !1;
              const n = a.get(e);
              return t.value(i) === n;
            },
            mark: function (e) {
              const t = new c(),
                n = o.create(null);
              (n.value = (e) => e === i && t), o.defineProperty(e, "SNOW_ID", n), a.set(e, t);
            }
          };
        },
        14: (e) => {
          e.exports = (function (e) {
            const t = (function (e) {
                const { EventTarget: t } = e;
                return (function (e, n) {
                  const r = e.document.createElement("iframe");
                  (e.document.head || e.document.documentElement).appendChild(r);
                  const o = (function (e) {
                    const {
                        console: n,
                        Proxy: r,
                        JSON: o,
                        Attr: c,
                        String: i,
                        Function: a,
                        Map: s,
                        Node: u,
                        Document: l,
                        DocumentFragment: p,
                        ShadowRoot: f,
                        Object: m,
                        Reflect: g,
                        Array: d,
                        Element: y,
                        HTMLElement: w,
                        HTMLTemplateElement: O,
                        HTMLIFrameElement: E,
                        HTMLFrameElement: h,
                        HTMLObjectElement: v
                      } = e,
                      _ = {
                        console: n,
                        Proxy: r,
                        JSON: o,
                        Attr: c,
                        String: i,
                        Function: a,
                        Map: s,
                        Node: u,
                        Document: l,
                        DocumentFragment: p,
                        ShadowRoot: f,
                        Object: m,
                        Reflect: g,
                        Array: d,
                        Element: y,
                        HTMLElement: w,
                        HTMLTemplateElement: O,
                        EventTarget: t,
                        HTMLIFrameElement: E,
                        HTMLFrameElement: h,
                        HTMLObjectElement: v
                      };
                    return (_.document = { createElement: e.document.createElement }), _;
                  })(r.contentWindow);
                  return r.parentElement.removeChild(r), o;
                })(e);
              })(e),
              {
                console: n,
                Proxy: r,
                Function: o,
                String: c,
                Map: i,
                Node: a,
                Document: s,
                DocumentFragment: u,
                ShadowRoot: l,
                Object: p,
                Reflect: f,
                Array: m,
                Element: g,
                HTMLElement: d,
                HTMLTemplateElement: y,
                EventTarget: w,
                HTMLIFrameElement: O,
                HTMLFrameElement: E,
                HTMLObjectElement: h
              } = t;
            return (
              p.assign(t, {
                iframeContentWindow: p.getOwnPropertyDescriptor(O.prototype, "contentWindow").get,
                frameContentWindow: p.getOwnPropertyDescriptor(E.prototype, "contentWindow").get,
                objectContentWindow: p.getOwnPropertyDescriptor(h.prototype, "contentWindow").get,
                createElement: p.getOwnPropertyDescriptor(s.prototype, "createElement").value,
                slice: p.getOwnPropertyDescriptor(m.prototype, "slice").value,
                push: p.getOwnPropertyDescriptor(m.prototype, "push").value,
                split: p.getOwnPropertyDescriptor(c.prototype, "split").value,
                nodeType: p.getOwnPropertyDescriptor(a.prototype, "nodeType").get,
                tagName: p.getOwnPropertyDescriptor(g.prototype, "tagName").get,
                getInnerHTML: p.getOwnPropertyDescriptor(g.prototype, "innerHTML").get,
                setInnerHTML: p.getOwnPropertyDescriptor(g.prototype, "innerHTML").set,
                toString: p.getOwnPropertyDescriptor(p.prototype, "toString").value,
                getOnload: p.getOwnPropertyDescriptor(d.prototype, "onload").get,
                setOnload: p.getOwnPropertyDescriptor(d.prototype, "onload").set,
                getAttribute: p.getOwnPropertyDescriptor(g.prototype, "getAttribute").value,
                setAttribute: p.getOwnPropertyDescriptor(g.prototype, "setAttribute").value,
                removeAttribute: p.getOwnPropertyDescriptor(g.prototype, "removeAttribute").value,
                remove: p.getOwnPropertyDescriptor(g.prototype, "remove").value,
                addEventListener: p.getOwnPropertyDescriptor(w.prototype, "addEventListener").value,
                removeEventListener: p.getOwnPropertyDescriptor(w.prototype, "removeEventListener").value,
                getTemplateContent: p.getOwnPropertyDescriptor(y.prototype, "content").get,
                getChildElementCount: p.getOwnPropertyDescriptor(u.prototype, "childElementCount").get,
                getFrameElement: p.getOwnPropertyDescriptor(e, "frameElement").get,
                getParentElement: p.getOwnPropertyDescriptor(a.prototype, "parentElement").get,
                getOwnerDocument: p.getOwnPropertyDescriptor(a.prototype, "ownerDocument").get,
                getDefaultView: p.getOwnPropertyDescriptor(s.prototype, "defaultView").get
              }),
              {
                console: n,
                Proxy: r,
                Object: p,
                Reflect: f,
                Function: o,
                Node: a,
                Element: g,
                Document: s,
                DocumentFragment: u,
                ShadowRoot: l,
                Array: m,
                Map: i,
                getContentWindow: function (e, n) {
                  switch (n) {
                    case "IFRAME":
                      return t.iframeContentWindow.call(e);
                    case "FRAME":
                      return t.frameContentWindow.call(e);
                    case "OBJECT":
                      return t.objectContentWindow.call(e);
                    default:
                      return null;
                  }
                },
                stringToLowerCase: function (e) {
                  return t.String.prototype.toLowerCase.call(e);
                },
                stringStartsWith: function (e, n) {
                  return t.String.prototype.startsWith.call(e, n);
                },
                parse: function (e, n) {
                  return t.JSON.parse(e, n);
                },
                stringify: function (e, n, r) {
                  return t.JSON.stringify(e, n, r);
                },
                slice: function (e, n, r) {
                  return t.slice.call(e, n, r);
                },
                push: function (e, n) {
                  return t.push.call(e, n);
                },
                split: function (e, n) {
                  return t.split.call(e, n);
                },
                nodeType: function (e) {
                  return t.nodeType.call(e);
                },
                tagName: function (e) {
                  return t.tagName.call(e);
                },
                toString: function (e) {
                  return t.toString.call(e);
                },
                getOnload: function (e) {
                  return t.getOnload.call(e);
                },
                setOnload: function (e, n) {
                  return t.setOnload.call(e, n);
                },
                remove: function (e) {
                  return t.remove.call(e);
                },
                removeAttribute: function (e, n) {
                  return t.removeAttribute.call(e, n);
                },
                getAttribute: function (e, n) {
                  return t.getAttribute.call(e, n);
                },
                setAttribute: function (e, n, r) {
                  return t.setAttribute.call(e, n, r);
                },
                addEventListener: function (e, n, r, o) {
                  return t.addEventListener.call(e, n, r, o);
                },
                removeEventListener: function (e, n, r, o) {
                  return t.removeEventListener.call(e, n, r, o);
                },
                createElement: function (e, n, r) {
                  return t.createElement.call(e, n, r);
                },
                getInnerHTML: function (e) {
                  return t.getInnerHTML.call(e);
                },
                setInnerHTML: function (e, n) {
                  return t.setInnerHTML.call(e, n);
                },
                getTemplateContent: function (e) {
                  return t.getTemplateContent.call(e);
                },
                getChildElementCount: function (e) {
                  return t.getChildElementCount.call(e);
                },
                getFrameElement: function (e) {
                  return t.Function.prototype.call.call(t.getFrameElement, e);
                },
                getParentElement: function (e) {
                  return t.getParentElement.call(e);
                },
                getOwnerDocument: function (e) {
                  return t.getOwnerDocument.call(e);
                },
                getDefaultView: function (e) {
                  return t.getDefaultView.call(e);
                }
              }
            );
          })(top);
        },
        583: (e, t, n) => {
          const { stringToLowerCase: r, stringStartsWith: o, slice: c, Function: i, Object: a, Reflect: s, Proxy: u, Map: l } = n(14),
            { warn: p, WARN_OPEN_API_LIMITED: f, WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME: m } = n(312),
            g = new l();
          function d(e, t) {
            return function () {
              const n = c(arguments),
                l = n[0] + "",
                d = n[1],
                y = n[2];
              if (o(r(l), "javascript") && p(m, l, e)) return null;
              const w = i.prototype.call.call(t, this, l, d, y);
              if (!w) return null;
              top.SNOW_WINDOW(w);
              const O = (function (e, t) {
                const n = new a(null);
                return (
                  a.defineProperty(n, "closed", {
                    get: function () {
                      return t.closed;
                    }
                  }),
                  a.defineProperty(n, "close", {
                    value: function () {
                      return t.close();
                    }
                  }),
                  a.defineProperty(n, "focus", {
                    value: function () {
                      return t.focus();
                    }
                  }),
                  a.defineProperty(n, "postMessage", {
                    value: function (e, n, r) {
                      return t.postMessage(e, n, r);
                    }
                  }),
                  new u(n, {
                    get: function (n, r) {
                      let o = s.get(n, r);
                      return s.has(n, r) || (s.has(t, r) && (p(f, r, e) || (o = s.get(t, r)))), o;
                    },
                    set: function () {}
                  })
                );
              })(e, w);
              return g.set(w, O), O;
            };
          }
          e.exports = function (e) {
            !(function (e) {
              const t = a.getOwnPropertyDescriptor(e.MessageEvent.prototype, "source"),
                n = t.get;
              (t.get = function () {
                const e = n.call(this);
                return g.get(e) || e;
              }),
                a.defineProperty(e.MessageEvent.prototype, "source", t);
            })(e),
              (e.open = d(e, e.open)),
              (e.document.open = d(e, e.document.open));
          };
        },
        373: (e, t, n) => {
          const r = n(228),
            { getFramesArray: o, shadows: c } = n(648),
            { Object: i, Function: a } = n(14);
          function s(e) {
            for (let t = 0; t < c.length; t++) {
              const n = c[t];
              if (e && !n.isConnected) continue;
              const i = o(n, !1);
              r(i);
            }
          }
          e.exports = {
            hookShadowDOM: function (e) {
              const t = i.getOwnPropertyDescriptor(e.Element.prototype, "attachShadow");
              t.configurable = t.writable = !0;
              const n = t.value;
              var r;
              (t.value =
                ((r = n),
                function (e) {
                  const t = a.prototype.call.call(r, this, e);
                  return c.push(t), s(!0), t;
                })),
                i.defineProperty(e.Element.prototype, "attachShadow", t);
            },
            protectShadows: s
          };
        },
        716: (e, t, n) => {
          const { Object: r } = n(14),
            { error: o, ERR_BLOB_FILE_URL_OBJECT_FORBIDDEN: c } = n(312),
            i = "Blob",
            a = "File";
          function s(e, t) {
            const n = e[t];
            return function (e, o, c) {
              const i = new n(e, o, c);
              return r.defineProperty(i, t, { value: !0 }), i;
            };
          }
          e.exports = function (e) {
            var t;
            r.defineProperty(e.URL, "createObjectURL", {
              value:
                ((t = e.URL.createObjectURL),
                function (e) {
                  const n = e[i] ? i : e[a] ? a : null;
                  if (!n || !o(c, n, e)) return t(e);
                })
            }),
              (e[i] = s(e, i)),
              (e[a] = s(e, a));
          };
        },
        648: (e, t, n) => {
          const {
              tagName: r,
              nodeType: o,
              slice: c,
              Array: i,
              parse: a,
              stringify: s,
              Node: u,
              Document: l,
              DocumentFragment: p,
              Element: f,
              ShadowRoot: m,
              getContentWindow: g,
              getDefaultView: d,
              getOwnerDocument: y,
              stringToLowerCase: w
            } = n(14),
            O = new i();
          function E(e) {
            return O.includes(e);
          }
          function h(e) {
            const t = w(e);
            return "iframe" === t || "frame" === t || "object" === t || "embed" === t;
          }
          function v(e) {
            if (!e || "object" != typeof e) return null;
            if (o(e) !== f.prototype.ELEMENT_NODE) return null;
            if (E(e)) return null;
            const t = r(e);
            return h(t) ? t : null;
          }
          function _(e) {
            return i.isArray(e) || (e = new i(e)), e;
          }
          function D(e, t) {
            let n = !1;
            for (let r = 0; r < t.length; r++) e.includes(t[r]) || (e.push(t[r]), (n = !0));
            return n;
          }
          e.exports = {
            toArray: _,
            isTagFramable: h,
            getOwnerWindowOfNode: function (e) {
              return d(y(e));
            },
            getContentWindowOfFrame: function (e) {
              return g(e, v(e));
            },
            getFramesArray: function (e, t) {
              const n = new i();
              if (null === e || "object" != typeof e) return n;
              if (
                "string" == typeof a(s((r = e), (e, t) => (e || r !== t ? "" : t))) ||
                !(function (e) {
                  if (E(e)) return !0;
                  const t = o(e);
                  return t === f.prototype.ELEMENT_NODE || t === f.prototype.DOCUMENT_FRAGMENT_NODE || t === f.prototype.DOCUMENT_NODE;
                })(e)
              )
                return n;
              var r;
              const g = (function (e) {
                if (E(e)) return m;
                switch (o(e)) {
                  case u.prototype.DOCUMENT_NODE:
                    return l;
                  case u.prototype.DOCUMENT_FRAGMENT_NODE:
                    return p;
                  default:
                    return f;
                }
              })(e).prototype.querySelectorAll.call(e, "iframe,frame,object,embed");
              return D(n, c(g)), t && D(n, _(e)), n;
            },
            getFrameTag: v,
            shadows: O
          };
        },
        626: (e) => {
          e.exports = {
            SRC_IS_NOT_A_WINDOW: 'provided argument "src" must be a proper window of instance Window',
            DST_IS_NOT_A_WINDOW: 'provided argument "dst" must be a proper window of instance Window',
            SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW: 'provided argument "src" must be a window in the same origin as the current context window'
          };
        },
        851: (e, t, n) => {
          const { DST_IS_NOT_A_WINDOW: r, SRC_IS_NOT_A_WINDOW: o, SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW: c } = n(626);
          function i(e, t) {
            const n = t(e);
            return n === n.window;
          }
          function a(e, t, n) {
            return null === n.getPrototypeOf.call(t, e);
          }
          e.exports = function (e, t = window, n = window.Object) {
            if (!i(t, n)) throw new Error(o);
            if (!i(e, n)) throw new Error(r);
            if (a(window, t, n)) throw new Error(c);
            return a(e, t, n);
          };
        }
      },
      t = {};
    function n(r) {
      var o = t[r];
      if (void 0 !== o) return o.exports;
      var c = (t[r] = { exports: {} });
      return e[r](c, c.exports, n), c.exports;
    }
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
      (n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (() => {
        "use strict";
        var e,
          t = n(352),
          r = n.n(t);
        (e = top), Object.defineProperty(e, "SNOW", { value: r() });
      })();
  })();
})();
