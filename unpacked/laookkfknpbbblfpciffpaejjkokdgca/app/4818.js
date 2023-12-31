/*! For license information please see 4818.js.LICENSE.txt */
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4818],
  {
    51726: function (e) {
      var t;
      (t = function () {
        return (function (e) {
          var t = {};
          function n(o) {
            if (t[o]) return t[o].exports;
            var r = (t[o] = { i: o, l: !1, exports: {} });
            return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.i = function (e) {
              return e;
            }),
            (n.d = function (e, t, o) {
              n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o });
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 2))
          );
        })([
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function (e, t) {
                var n = e.map(function (e) {
                  return e._vuebackbone_proxy;
                });
                for (var r in e)
                  if ("function" == typeof e[r] && "constructor" !== r && (t || -1 === o.indexOf(r))) {
                    var a = e[r].bind(e);
                    t || (a = i(a, r)), Object.defineProperty(n, r, { value: a });
                  }
                return Object.defineProperty(n, "_vuebackbone_original", { value: e }), n;
              });
            var o = [
                "slice",
                "forEach",
                "map",
                "reduce",
                "reduceRight",
                "find",
                "filter",
                "every",
                "some",
                "indexOf",
                "lastIndexOf",
                "findIndex"
              ],
              r = [
                "pop",
                "shift",
                "remove",
                "get",
                "at",
                "where",
                "findWhere",
                "reject",
                "sortBy",
                "shuffle",
                "toArray",
                "detect",
                "select",
                "first",
                "head",
                "take",
                "rest",
                "tail",
                "drop",
                "initial",
                "last",
                "without"
              ];
            function i(e, t) {
              return r.indexOf(t) > -1
                ? function () {
                    var t = e.apply(this, arguments);
                    return (
                      (t &&
                        (t._vuebackbone_proxy ||
                          t.map(function (e) {
                            return e._vuebackbone_proxy;
                          }))) ||
                      t
                    );
                  }
                : e;
            }
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function (e, t) {
                var n = {};
                for (var o in e)
                  if ("function" == typeof e[o] && "constructor" !== o) {
                    var r = e[o].bind(e);
                    Object.defineProperty(n, o, { value: r });
                  }
                return (
                  Object.keys(e.attributes).forEach(function (o) {
                    !(function (e, t, n, o) {
                      var r = t.get.bind(t, n),
                        i = t.set.bind(t, n),
                        a = e[n] ? o + n : n;
                      Object.defineProperty(e, a, { enumerable: !0, get: r, set: i });
                    })(n, e, o, t);
                  }),
                  n.id ||
                    Object.defineProperty(n, "id", {
                      get: function () {
                        return e.id;
                      }
                    }),
                  Object.defineProperty(n, "_vuebackbone_original", { value: e }),
                  n
                );
              });
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.mapBBModels = v), (t.install = b), (t.original = g);
            var o = i(n(1)),
              r = i(n(0));
            function i(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var a = { proxies: !0, conflictPrefix: "$", addComputed: !0, dataPrefix: "_", simpleCollectionProxy: !1 };
            function u(e) {
              a.proxies &&
                !e._vuebackbone_proxy &&
                (e.models
                  ? (e.each(u), (e._vuebackbone_proxy = (0, r.default)(e, a.simpleCollectionProxy)))
                  : (e._vuebackbone_proxy = (0, o.default)(e, a.conflictPrefix)));
            }
            function s(e) {
              return e.attributes;
            }
            function c(e) {
              return e.map(s);
            }
            function f(e) {
              return e.models ? c(e) : s(e);
            }
            function l(e) {
              return a.addComputed && a.proxies ? a.dataPrefix + e : e;
            }
            function d(e, t) {
              var n = e._vuebackbone[t],
                o = n.bb;
              o.models
                ? (function (e, t, n, o) {
                    a.proxies &&
                      (o.on("add", u),
                      (n.onreset = function () {
                        return o.each(u);
                      }),
                      o.on("reset", n.onreset)),
                      (n.onchange = function () {
                        if (((e.$data[l(t)] = c(o)), a.proxies)) {
                          var n = o._vuebackbone_proxy;
                          (n.length = 0),
                            o.forEach(function (e, t) {
                              return (n[t] = e._vuebackbone_proxy);
                            });
                        }
                      }),
                      o.on("reset sort remove add", n.onchange);
                  })(e, t, n, o)
                : (function (e, t) {
                    (e.onchange = function () {
                      t.keys().length > Object.keys(t._previousAttributes).length &&
                        console.warn(
                          "VueBackbone: Adding new Model attributes after binding is not supported, provide defaults for all properties"
                        );
                    }),
                      t.on("change", e.onchange);
                  })(n, o);
            }
            function p(e, t) {
              var n = e._vuebackbone[t];
              n && (n.bb.off(null, n.onchange), n.onreset && n.bb.off(null, n.onreset));
            }
            var h = {
              beforeCreate: function () {
                var e = this,
                  t = e.$options.bb;
                if (t) {
                  if ("function" != typeof t) throw "VueBackbone: 'bb' initialization option must be a function";
                  (t = t()),
                    (e._vuebackbone = {}),
                    Object.keys(t).forEach(function (n) {
                      var o = t[n],
                        r = !1;
                      if (!0 === o.prop) {
                        if (!e.$options.propsData || !e.$options.propsData[n])
                          throw "VueBackbone: Missing Backbone object in Vue prop '" + n + "'";
                        (o = e.$options.propsData[n]), (r = !0);
                      }
                      if (!(o = o._vuebackbone_original || o).on || (!o.attributes && !o.models))
                        throw "VueBackbone: Unrecognized Backbone object in Vue instantiation (" + n + "), must be a Collection or Model";
                      !(function (e, t, n, o) {
                        (e._vuebackbone[t] = { bb: n }),
                          u(n),
                          o ||
                            ((function (e, t) {
                              var n = e.$options.data,
                                o = f(e._vuebackbone[t].bb),
                                r = l(t);
                              e.$options.data = function () {
                                var e = {},
                                  i = n ? n.apply(this, arguments) : {};
                                if (i.hasOwnProperty(t))
                                  throw "VueBackbone: Property '" + t + "' mustn't exist within the Vue data already";
                                if (i.hasOwnProperty(r))
                                  throw "VueBackbone: Property '" + r + "' mustn't exist within the Vue data already";
                                return (
                                  Object.keys(i).forEach(function (t) {
                                    return (e[t] = i[t]);
                                  }),
                                  (e[r] = o),
                                  e
                                );
                              };
                            })(e, t),
                            a.addComputed && a.proxies
                              ? (function (e, t) {
                                  var n = e._vuebackbone[t],
                                    o = l(t),
                                    r = e.$options;
                                  (r.computed = r.computed || {}),
                                    r.computed[t]
                                      ? console.warn(
                                          "VueBackbone: Generated computed function '" +
                                            t +
                                            "' already exists within the Vue computed functions"
                                        )
                                      : (r.computed[t] = {
                                          get: function () {
                                            return e.$data[o], n.bb._vuebackbone_proxy;
                                          },
                                          set: function (r) {
                                            p(e, t), u(r), (n.bb = r), (e.$data[o] = f(r)), d(e, t);
                                          }
                                        });
                                })(e, t)
                              : (function (e, t) {
                                  var n = e._vuebackbone[t],
                                    o = l(t);
                                  (e.$bb = e.$bb || {}),
                                    Object.defineProperty(e.$bb, t, {
                                      get: function () {
                                        return e.$data[o], n.bb;
                                      },
                                      set: function (r) {
                                        p(e, t), (n.bb = r), (e.$data[o] = f(r)), d(e, t);
                                      }
                                    });
                                })(e, t)),
                          d(e, t);
                      })(e, n, o, r);
                    });
                }
              },
              destroyed: function () {
                var e = this,
                  t = e._vuebackbone;
                t &&
                  Object.keys(t).forEach(function (t) {
                    return p(e, t);
                  });
              }
            };
            function v(e) {
              return a.proxies
                ? function () {
                    var t = e.apply(this, arguments);
                    return (
                      (t &&
                        (t._vuebackbone_proxy ||
                          t.map(function (e) {
                            return e._vuebackbone_proxy;
                          }))) ||
                      t
                    );
                  }
                : function () {
                    var t = e.apply(this, arguments);
                    return (
                      (t &&
                        (t.attributes ||
                          t.map(function (e) {
                            return e.attributes;
                          }))) ||
                      t
                    );
                  };
            }
            function b(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (a[n] = t[n]);
              e.mixin(h);
            }
            function g(e) {
              return e._vuebackbone_original || e;
            }
            t.default = { install: b, mapBBModels: v, original: g };
          }
        ]);
      }),
        (e.exports = t());
    },
    34952: function (e, t) {
      !(function (e) {
        "use strict";
        var t = {};
        var n = {
          inheritAttrs: !1,
          render: function (e) {
            return this.svgElSource
              ? e("svg", {
                  on: this.$listeners,
                  attrs: Object.assign(
                    this.getSvgAttrs(this.svgElSource),
                    ((t = this.$attrs),
                    Object.keys(t).reduce(function (e, n) {
                      return !1 !== t[n] && null !== t[n] && void 0 !== t[n] && (e[n] = t[n]), e;
                    }, {}))
                  ),
                  domProps: { innerHTML: this.getSvgContent(this.svgElSource) }
                })
              : null;
            var t;
          },
          props: {
            src: { type: String, required: !0 },
            title: { type: String },
            transformSource: {
              type: Function,
              default: function (e) {
                return e;
              }
            },
            keepDuringLoading: { type: Boolean, default: !0 }
          },
          data: function () {
            return { svgElSource: null };
          },
          watch: {
            src: function (e) {
              this.getSource(e);
            }
          },
          mounted: function () {
            this.getSource(this.src);
          },
          methods: {
            getSvgAttrs: function (e) {
              var t = {},
                n = e.attributes;
              if (!n) return t;
              for (var o = n.length - 1; o >= 0; o--) t[n[o].name] = n[o].value;
              return t;
            },
            getSvgContent: function (e) {
              return (
                (e = e.cloneNode(!0)),
                (e = this.transformSource(e)),
                this.title &&
                  (function (e, t) {
                    var n = e.getElementsByTagName("title");
                    if (n.length) n[0].textContent = t;
                    else {
                      var o = document.createElementNS("http://www.w3.org/2000/svg", "title");
                      (o.textContent = t), e.appendChild(o);
                    }
                  })(e, this.title),
                e.innerHTML
              );
            },
            getSource: function (e) {
              var n = this;
              t[e] || (t[e] = this.download(e)),
                this.svgElSource && t[e].isPending() && !this.keepDuringLoading && ((this.svgElSource = null), this.$emit("unloaded")),
                t[e]
                  .then(function (e) {
                    (n.svgElSource = e),
                      n.$nextTick(function () {
                        n.$emit("loaded", n.$el);
                      });
                  })
                  .catch(function (o) {
                    n.svgElSource && ((n.svgElSource = null), n.$emit("unloaded")), delete t[e], n.$emit("error", o);
                  });
            },
            download: function (e) {
              return (function (e) {
                if (e.isPending) return e;
                var t = !0,
                  n = e.then(
                    function (e) {
                      return (t = !1), e;
                    },
                    function (e) {
                      throw ((t = !1), e);
                    }
                  );
                return (
                  (n.isPending = function () {
                    return t;
                  }),
                  n
                );
              })(
                new Promise(function (t, n) {
                  var o = new XMLHttpRequest();
                  o.open("GET", e, !0),
                    (o.onload = function () {
                      if (o.status >= 200 && o.status < 400)
                        try {
                          var e = new DOMParser().parseFromString(o.responseText, "text/xml").getElementsByTagName("svg")[0];
                          e ? t(e) : n(new Error('Loaded file is not valid SVG"'));
                        } catch (e) {
                          n(e);
                        }
                      else n(new Error("Error loading SVG"));
                    }),
                    (o.onerror = n),
                    o.send();
                })
              );
            }
          }
        };
        var o = {
          install: function (e) {
            e.component("inline-svg", n);
          }
        };
        (e.InlineSvgComponent = n), (e.InlineSvgPlugin = o), (e.default = n), Object.defineProperty(e, "__esModule", { value: !0 });
      })(t);
    },
    88026: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      const o = function (e, t) {
        var n = "static";
        t && t.name && "string" == typeof t.name && (n = t.name),
          "function" != typeof e.config.optionMergeStrategies[n] &&
            (e.config.optionMergeStrategies[n] = e.config.optionMergeStrategies.data),
          t && t.namespaced && (e.prototype.$static = {}),
          e.mixin({
            beforeCreate: function () {
              const e = this.$options[n],
                t = this.$static || this;
              e && "function" == typeof e ? Object.assign(t, e.apply(this)) : e && "object" == typeof e && Object.assign(t, e);
            }
          });
      };
    },
    77197: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      var o = (function (e, t, n, o, r, i, a, u, s, c) {
          "boolean" != typeof a && ((s = u), (u = a), (a = !1));
          var f,
            l = "function" == typeof n ? n.options : n;
          if (
            (e &&
              e.render &&
              ((l.render = e.render), (l.staticRenderFns = e.staticRenderFns), (l._compiled = !0), r && (l.functional = !0)),
            o && (l._scopeId = o),
            i
              ? ((f = function (e) {
                  (e =
                    e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                    "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                    (e = __VUE_SSR_CONTEXT__),
                    t && t.call(this, s(e)),
                    e && e._registeredComponents && e._registeredComponents.add(i);
                }),
                (l._ssrRegister = f))
              : t &&
                (f = a
                  ? function () {
                      t.call(this, c(this.$root.$options.shadowRoot));
                    }
                  : function (e) {
                      t.call(this, u(e));
                    }),
            f)
          )
            if (l.functional) {
              var d = l.render;
              l.render = function (e, t) {
                return f.call(t), d(e, t);
              };
            } else {
              var p = l.beforeCreate;
              l.beforeCreate = p ? [].concat(p, f) : [f];
            }
          return n;
        })(
          {
            render: function () {
              var e = this,
                t = e.$createElement;
              return (e._self._c || t)("textarea", {
                directives: [{ name: "model", rawName: "v-model", value: e.val, expression: "val" }],
                style: e.computedStyles,
                domProps: { value: e.val },
                on: {
                  focus: e.resize,
                  input: function (t) {
                    t.target.composing || (e.val = t.target.value);
                  }
                }
              });
            },
            staticRenderFns: []
          },
          void 0,
          {
            name: "TextareaAutosize",
            props: {
              value: { type: [String, Number], default: "" },
              autosize: { type: Boolean, default: !0 },
              minHeight: { type: [Number], default: null },
              maxHeight: { type: [Number], default: null },
              important: { type: [Boolean, Array], default: !1 }
            },
            data: function () {
              return { val: null, maxHeightScroll: !1, height: "auto" };
            },
            computed: {
              computedStyles: function () {
                return this.autosize
                  ? {
                      resize: this.isResizeImportant ? "none !important" : "none",
                      height: this.height,
                      overflow: this.maxHeightScroll ? "auto" : this.isOverflowImportant ? "hidden !important" : "hidden"
                    }
                  : {};
              },
              isResizeImportant: function () {
                var e = this.important;
                return !0 === e || (Array.isArray(e) && e.includes("resize"));
              },
              isOverflowImportant: function () {
                var e = this.important;
                return !0 === e || (Array.isArray(e) && e.includes("overflow"));
              },
              isHeightImportant: function () {
                var e = this.important;
                return !0 === e || (Array.isArray(e) && e.includes("height"));
              }
            },
            watch: {
              value: function (e) {
                this.val = e;
              },
              val: function (e) {
                this.$nextTick(this.resize), this.$emit("input", e);
              },
              minHeight: function () {
                this.$nextTick(this.resize);
              },
              maxHeight: function () {
                this.$nextTick(this.resize);
              },
              autosize: function (e) {
                e && this.resize();
              }
            },
            methods: {
              resize: function () {
                var e = this,
                  t = this.isHeightImportant ? "important" : "";
                return (
                  (this.height = "auto".concat(t ? " !important" : "")),
                  this.$nextTick(function () {
                    var n = e.$el.scrollHeight + 1;
                    e.minHeight && (n = n < e.minHeight ? e.minHeight : n),
                      e.maxHeight && (n > e.maxHeight ? ((n = e.maxHeight), (e.maxHeightScroll = !0)) : (e.maxHeightScroll = !1));
                    var o = n + "px";
                    e.height = "".concat(o).concat(t ? " !important" : "");
                  }),
                  this
                );
              }
            },
            created: function () {
              this.val = this.value;
            },
            mounted: function () {
              this.resize();
            }
          },
          void 0,
          !1,
          void 0,
          void 0,
          void 0
        ),
        r = {
          install: function (e) {
            e.component("TextareaAutosize", o);
          },
          version: "1.1.1"
        };
      "undefined" != typeof window && window.Vue && window.Vue.use(r);
      const i = r;
    }
  }
]);
