(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([
  [23],
  {
    106: function (e, t) {
      function o() {
        return (
          (e.exports = o =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var o,
                      n = arguments[t];
                    for (o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          o.apply(this, arguments)
        );
      }
      (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    141: function (e, d, q) {
      "use strict";
      !function (f) {
        var h = q(2),
          g = q.n(h),
          o = q(52),
          e = q(24),
          t = q.n(e),
          m =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== f
              ? f
              : "undefined" != typeof self
              ? self
              : {};
        function n(e, t) {
          return (
            e(
              (t = {
                exports: {}
              }),
              t.exports
            ),
            t.exports
          );
        }
        var v = n(function (e) {
            function t() {
              return (
                (e.exports = t =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var o,
                        n = arguments[t];
                      for (o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                    }
                    return e;
                  }),
                t.apply(this, arguments)
              );
            }
            e.exports = t;
          }),
          i = function (e) {
            if (Array.isArray(e)) return e;
          },
          a = function (e, t) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
              var o = [],
                n = !0,
                i = !1,
                a = void 0;
              try {
                for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (o.push(r.value), !t || o.length !== t); n = !0);
              } catch (e) {
                (i = !0), (a = e);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (i) throw a;
                }
              }
              return o;
            }
          },
          r = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          },
          y = function (e, t) {
            return i(e) || a(e, t) || r();
          },
          s = function (e, t) {
            if (null == e) return {};
            for (var o, n = {}, i = Object.keys(e), a = 0; a < i.length; a++) (o = i[a]), 0 <= t.indexOf(o) || (n[o] = e[o]);
            return n;
          },
          b = function (e, t) {
            if (null == e) return {};
            var o,
              n = s(e, t);
            if (Object.getOwnPropertySymbols)
              for (var i = Object.getOwnPropertySymbols(e), a = 0; a < i.length; a++)
                (o = i[a]), 0 <= t.indexOf(o) || (Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]));
            return n;
          },
          p = n(function (e) {
            var t, s, o, n, i, a, p, c, l, u, d, f, r, h, g;
            (t = m),
              (s = function (e, t, o) {
                if (!c(t) || u(t) || d(t) || f(t) || p(t)) return t;
                var n,
                  i = 0,
                  a = 0;
                if (l(t)) for (n = [], a = t.length; i < a; i++) n.push(s(e, t[i], o));
                else for (var r in ((n = {}), t)) Object.prototype.hasOwnProperty.call(t, r) && (n[e(r, o)] = s(e, t[r], o));
                return n;
              }),
              (o = function (e) {
                return r(e)
                  ? e
                  : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                      return t ? t.toUpperCase() : "";
                    }))
                      .substr(0, 1)
                      .toLowerCase() + e.substr(1);
              }),
              (n = function (e) {
                e = o(e);
                return e.substr(0, 1).toUpperCase() + e.substr(1);
              }),
              (i = function (e, t) {
                return (e = e), (o = (t = (t = t) || {}).separator || "_"), (t = t.split || /(?=[A-Z])/), e.split(t).join(o).toLowerCase();
                var o;
              }),
              (a = Object.prototype.toString),
              (p = function (e) {
                return "function" == typeof e;
              }),
              (c = function (e) {
                return e === Object(e);
              }),
              (l = function (e) {
                return "[object Array]" == a.call(e);
              }),
              (u = function (e) {
                return "[object Date]" == a.call(e);
              }),
              (d = function (e) {
                return "[object RegExp]" == a.call(e);
              }),
              (f = function (e) {
                return "[object Boolean]" == a.call(e);
              }),
              (r = function (e) {
                return (e -= 0) == e;
              }),
              (h = function (o, e) {
                var n = e && "process" in e ? e.process : e;
                return "function" != typeof n
                  ? o
                  : function (e, t) {
                      return n(e, o, t);
                    };
              }),
              (g = {
                camelize: o,
                decamelize: i,
                pascalize: n,
                depascalize: i,
                camelizeKeys: function (e, t) {
                  return s(h(o, t), e);
                },
                decamelizeKeys: function (e, t) {
                  return s(h(i, t), e, t);
                },
                pascalizeKeys: function (e, t) {
                  return s(h(n, t), e);
                },
                depascalizeKeys: function () {
                  return this.decamelizeKeys.apply(this, arguments);
                }
              }),
              e.exports ? (e.exports = g) : (t.humps = g);
          }).decamelize;
        function x(e) {
          return e.children;
        }
        function w(e) {
          var t = e.root,
            e = e.children;
          return Object(o.createPortal)(e, t);
        }
        (w.propTypes = {
          root: t.a.object.isRequired,
          children: t.a.node
        }),
          (w.defaultProps = {
            children: null
          });
        var c = new Map();
        function l(d) {
          var e = Object(h.forwardRef)(function (e, t) {
            var o = e.mode,
              n = e.delegatesFocus,
              i = e.styleSheets,
              a = e.children,
              e = b(e, ["mode", "delegatesFocus", "styleSheets", "children"]),
              r = Object(h.useState)(null),
              r = y(r, 2),
              s = r[0],
              r = r[1],
              p = Object(h.useState)(null),
              p = y(p, 2),
              c = p[0],
              l = p[1],
              p = (function () {
                try {
                  return q(
                    !(function () {
                      var e = new Error("Cannot find module 'styled-components'");
                      throw ((e.code = "MODULE_NOT_FOUND"), e);
                    })()
                  ).StyleSheetManager;
                } catch (e) {
                  return x;
                }
              })(),
              u = "node_".concat(o).concat(n);
            return (
              Object(h.useEffect)(
                function () {
                  if (s)
                    try {
                      var e = s.attachShadow({
                        mode: o,
                        delegatesFocus: n
                      });
                      0 < i.length && (e.adoptedStyleSheets = i),
                        f.setTimeout(function () {
                          t && "function" == typeof t && t(s), t && "current" in t && (t.current = s);
                        }),
                        l(e);
                    } catch (e) {
                      if ("NotSupportedError" !== e.name) throw e;
                      0 < i.length && (c.adoptedStyleSheets = i);
                    }
                },
                [s, i]
              ),
              g.a.createElement(
                d.tag,
                v(
                  {
                    key: u,
                    ref: r
                  },
                  e
                ),
                c &&
                  g.a.createElement(
                    p,
                    {
                      target: c
                    },
                    g.a.createElement(
                      w,
                      {
                        root: c
                      },
                      a
                    )
                  )
              )
            );
          });
          return (
            (e.propTypes = {
              mode: t.a.oneOf(["open", "closed"]),
              delegatesFocus: t.a.bool,
              styleSheets: t.a.arrayOf(t.a.instanceOf(f.CSSStyleSheet)),
              children: t.a.node
            }),
            (e.defaultProps = {
              mode: "open",
              delegatesFocus: !1,
              styleSheets: [],
              children: null
            }),
            e
          );
        }
        function u() {
          return new Proxy(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, {
            get: function (e, t) {
              t = p(t, {
                separator: "-"
              });
              return (
                c.has(t) ||
                  c.set(
                    t,
                    l({
                      tag: t
                    })
                  ),
                c.get(t)
              );
            }
          });
        }
        e = u();
        d.a = e;
      }.call(this, q(58));
    },
    142: function (e, a, r) {
      "use strict";
      !function (o) {
        r.d(a, "a", function () {
          return i;
        });
        var e = r(3),
          t = r.n(e),
          e = r(1),
          n = r.n(e),
          e = r(2);
        class i extends e.Component {
          constructor() {
            var o;
            super(),
              ((o = this).state = {
                svgs: []
              }),
              t()(
                n.a.mark(function e() {
                  return n.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([r.e(32).then(r.t.bind(null, 170, 7)), r.e(31).then(r.t.bind(null, 169, 7))])
                              .then((e) => {
                                if (e) {
                                  const t = e.map((e) => e.default);
                                  o.setState({
                                    svgs: t
                                  });
                                }
                              })
                              .catch((e) => {})
                          );

                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
          }
          render() {
            const e = this.state.svgs,
              t = void 0 === e ? [] : e;
            return o.createElement("div", {
              style: {
                position: "absolute",
                top: "-9999px",
                left: "-9999px"
              },
              dangerouslySetInnerHTML: {
                __html: t.join("")
              }
            });
          }
        }
      }.call(this, r(2));
    },
    35: function (e, t) {
      function n(e, t) {
        var o = e[1] || "",
          n = e[3];
        return n
          ? (t && "function" == typeof btoa
              ? ((e = i(n)),
                (t = n.sources.map(function (e) {
                  return "/*# sourceURL=" + n.sourceRoot + e + " */";
                })),
                [o].concat(t).concat([e]))
              : [o]
            ).join("\n")
          : o;
      }
      function i(e) {
        return (
          "/*# " +
          ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e))))) +
          " */"
        );
      }
      e.exports = function (o) {
        var r = [];
        return (
          (r.toString = function () {
            return this.map(function (e) {
              var t = n(e, o);
              return e[2] ? "@media " + e[2] + "{" + t + "}" : t;
            }).join("");
          }),
          (r.i = function (e, t) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var o = {}, n = 0; n < this.length; n++) {
              var i = this[n][0];
              "number" == typeof i && (o[i] = !0);
            }
            for (n = 0; n < e.length; n++) {
              var a = e[n];
              ("number" == typeof a[0] && o[a[0]]) || (t && !a[2] ? (a[2] = t) : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), r.push(a));
            }
          }),
          r
        );
      };
    },
    41: function (e, i, a) {
      "use strict";
      !function (t) {
        var e = a(106),
          o = a.n(e),
          n = a(111);
        i.a = (e) =>
          t.createElement(
            n.a,
            o()({}, e, {
              arrow: !0,
              animation: "shift-away",
              placement: e.placement || "top",
              delay: [200, 50],
              allowHTML: !1,
              zIndex: 99999,
              boundary: "viewport",
              trigger: "mouseenter"
            })
          );
      }.call(this, a(2));
    },
    421: function (e, f, h) {
      "use strict";
      h.r(f),
        function (a) {
          h.d(f, "default", function () {
            return n;
          });
          var e = h(3),
            t = h.n(e),
            e = h(1),
            i = h.n(e),
            e = h(2),
            r = h(50),
            s = h(141),
            p = h(717),
            c = h(722),
            o = h(728),
            l = h(29),
            u = h(4),
            d = h(142);
          class n extends e.Component {
            constructor(e) {
              super(e),
                (this.state = {
                  locale: o.a.locale,
                  hasMath: !1,
                  element: null
                });
            }
            componentDidMount() {
              var o = this;
              const n = this.props.math;
              t()(
                i.a.mark(function e() {
                  var t;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.hasMath &&
                            (Object(u.Q)("Docs Discoverability Shown"),
                            (t = n.node),
                            o.setState({
                              hasMath: !0,
                              element: t
                            }));

                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            }
            render() {
              const e = this.props.hasEquationToolbarOpened,
                t = this.state,
                o = t.hasMath,
                n = t.element,
                i = t.locale;
              return o
                ? a.createElement(
                    r.b,
                    {
                      locale: Object(l.getIntlProviderLocale)(i),
                      messages: Object(l.getMessagesForLanguage)(i)
                    },
                    a.createElement(
                      s.a.div,
                      {
                        id: "equatio-gsuite-discover-shadow-host"
                      },
                      a.createElement(d.a, null),
                      a.createElement(p.a, null),
                      a.createElement(c.a, {
                        element: n,
                        hasEquationToolbarOpened: e
                      })
                    )
                  )
                : null;
            }
          }
        }.call(this, h(2));
    },
    469: function (e, r, s) {
      "use strict";
      !function (i) {
        s.d(r, "b", function () {
          return a;
        });
        var e = s(2),
          t = s(9),
          o = s(11);
        const a = Object(t.defineMessages)({
          close: {
            id: "apps-discovery.overlay.close",
            defaultMessage: "Close"
          },
          containMath: {
            id: "apps-discovery.notification.contain",
            defaultMessage: "This document contains Math."
          },
          containMathInfo1: {
            id: "apps-discovery.notification.info1",
            defaultMessage: "Click on the"
          },
          containMathInfo2: {
            id: "apps-discovery.notification.info2",
            defaultMessage: "icon in the toolbar above and start making Math digital."
          },
          notNow: {
            id: "apps-discovery.notification.notnow",
            defaultMessage: "Not right now"
          },
          dontShow: {
            id: "apps-discovery.notification.dontshow",
            defaultMessage: "Don't show me this message again."
          }
        });
        class n extends e.Component {
          render() {
            const e = this.props,
              t = e.onDismiss,
              o = e.onDontShowClick,
              n = e.intl;
            return i.createElement(
              "div",
              {
                className: "equatio-apps-discovery-popup"
              },
              i.createElement(
                "div",
                {
                  className: "equatio-apps-discovery-popup__bubble"
                },
                i.createElement(
                  "svg",
                  {
                    className: "equatio-apps-discovery-popup-background",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 260.871 263"
                  },
                  i.createElement("path", {
                    fill: "#fafafa",
                    d: "M60.641 263.002l-4.685-2.928A119 119 0 0 1 18.098 96.096L78.144.002h171.727a11 11 0 0 1 11 11v241a11 11 0 0 1-11 11z"
                  }),
                  i.createElement("path", {
                    fill: "#f2f2f2",
                    d: "M146.839 263.002l-36.114-20.85A119 119 0 0 1 67.171 79.594L113.121.002h136.75a11 11 0 0 1 11 11v241a11 11 0 0 1-11 11z"
                  })
                ),
                i.createElement(
                  "div",
                  {
                    className: "equatio-apps-discovery-popup-title"
                  },
                  i.createElement(
                    "svg",
                    {
                      viewBox: "4 0 98.197 22.312",
                      className: "equatio-apps-discovery-popup-title__logo"
                    },
                    i.createElement("use", {
                      xlinkHref: "#equatio-svg-logo"
                    })
                  ),
                  i.createElement(
                    "svg",
                    {
                      viewBox: "0 0 38 38",
                      className: "equatio-apps-discovery-popup-title__warning"
                    },
                    i.createElement("use", {
                      xlinkHref: "#equatio-svg-discover-header-warning"
                    })
                  )
                ),
                i.createElement(
                  "div",
                  {
                    className: "equatio-apps-discovery-popup__text"
                  },
                  n.formatMessage(a.containMath),
                  i.createElement("br", null),
                  n.formatMessage(a.containMathInfo1),
                  i.createElement(
                    "div",
                    {
                      className: "equatio-apps-discovery-popup-browser-action__icon"
                    },
                    i.createElement(
                      "svg",
                      {
                        viewBox: "0 0 37.4 37.4"
                      },
                      i.createElement("use", {
                        xlinkHref: "#equatio-svg-logo-icon"
                      })
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "equatio-apps-discovery-popup-browser-action__badge"
                      },
                      i.createElement("div", null, "\u03a3")
                    )
                  ),
                  n.formatMessage(a.containMathInfo2)
                ),
                i.createElement(
                  "div",
                  {
                    className: "equatio-apps-discovery-popup__button-wrapper"
                  },
                  i.createElement(
                    "button",
                    {
                      className: "equatio-apps-discovery-popup__button equatio-apps-discovery-popup__button--not-right-now",
                      onClick: () => t()
                    },
                    n.formatMessage(a.notNow)
                  )
                ),
                i.createElement(
                  "div",
                  {
                    className: "equatio-apps-discovery-popup__instruction-wrapper"
                  },
                  i.createElement(
                    "a",
                    {
                      href: "#",
                      role: "button",
                      className: "equatio-link-button equatio-link-button--small",
                      onClick: () => o()
                    },
                    n.formatMessage(a.dontShow)
                  )
                )
              )
            );
          }
        }
        r.a = Object(o.c)(n);
      }.call(this, s(2));
    },
    717: function (e, i, a) {
      "use strict";
      !function (o) {
        var e = a(718),
          t = a.n(e),
          e = a(720),
          n = a.n(e);
        i.a = () =>
          o.createElement(
            "div",
            null,
            [t.a, n.a].map((e, t) =>
              o.createElement(
                "style",
                {
                  key: t.toString(),
                  type: "text/css"
                },
                e
              )
            )
          );
      }.call(this, a(2));
    },
    718: function (e, t, o) {
      o = o(719);
      e.exports = "string" == typeof o ? o : o.toString();
    },
    719: function (e, t, o) {
      (e.exports = o(35)(void 0)).push([
        e.i,
        '.equatio-apps-discovery-popup{position:fixed;padding:10px 0;margin:0 auto;top:20px;right:25px;width:325px;z-index:10000000;min-height:192px}.equatio-apps-discovery-popup__bubble{position:relative;display:block;border-radius:10px;background-color:#FFF;color:#484848;padding:8px 20px;-webkit-box-shadow:0px 0px 15px 0px #a8a8a8;-moz-box-shadow:0px 0px 15px 0px #a8a8a8;box-shadow:0px 0px 15px 0px #a8a8a8}.equatio-apps-discovery-popup__bubble:before{content:"";position:absolute;width:0;height:0;border-style:solid;border-width:0 15px 15px 15px;border-color:transparent transparent #FFF transparent;border-style:inset;-webkit-transform:rotate(360deg)}.equatio-apps-discovery-popup__bubble--docs:after{content:"";position:absolute;width:0;height:0;border-style:solid;border-width:0 15px 15px 15px;border-color:transparent transparent #e9e9e9 transparent;border-style:inset;-webkit-transform:rotate(360deg)}.equatio-apps-discovery-popup__bubble:before{top:-10px;left:23px}.equatio-apps-discovery-popup__bubble:after{top:-12px;left:23px;z-index:-7}.equatio-apps-discovery-popup__title{position:relative;font-family:"Open Sans", Arial, sans-serif;height:37px;margin:8px 0 5px 0;padding:3px;font-weight:900}.equatio-apps-discovery-popup__text{display:inline !important;position:relative !important;line-height:19.7px !important;font-family:"Open Sans",Arial,sans-serif !important;font-size:13px !important;margin-block-end:12px !important;margin-block-start:12px !important;z-index:1}.equatio-apps-discovery-popup__button-wrapper{position:relative;display:flex !important;justify-content:flex-end !important;height:46px !important;padding:3px 0 !important;margin-top:5px !important}.equatio-apps-discovery-popup__instruction-wrapper{position:relative !important;display:flex !important;align-items:center !important;padding:2px 0 !important;height:41px !important;z-index:1 !important}.equatio-apps-discovery-popup__instruction-text{font-family:"Open Sans", Arial, sans-serif;font-size:12px;font-weight:300}.equatio-apps-discovery-popup-checkbox__container{display:flex;align-items:center}.equatio-apps-discovery-popup-checkbox{-webkit-appearance:none;position:relative;cursor:pointer;border-radius:5px;height:15px;width:15px;background:#D7E7FF;border:1px solid #C3DAFF;margin-right:5px}.equatio-apps-discovery-popup-checkbox:checked:after{content:"";left:4px;top:0px;width:6px;height:10px;border:solid #FFF;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);position:absolute}.equatio-apps-discovery-popup-checkbox:checked{background-color:#00B7FF}.equatio-apps-discovery-popup-background{position:absolute;top:0;right:0;height:100%}.equatio-apps-discovery-popup-title{position:relative;display:flex;justify-content:space-between;align-items:center;margin:8px 0}.equatio-apps-discovery-popup-title__warning{height:38px}.equatio-apps-discovery-popup-title__logo{height:30px}.equatio-apps-discovery-popup__button{font-family:"Open Sans", Arial, sans-serif;background-color:#FFF;font-size:13px;color:#00B7FF;height:40px !important;position:relative;font-weight:600;padding:10px 24px;border-radius:30px;display:flex;justify-content:center;align-items:center;min-width:20px;text-decoration:none;text-transform:uppercase;margin:3px 4px;border:1px solid #00B7FF;transition:0.2s;cursor:pointer;z-index:1}.equatio-apps-discovery-popup__button.equatio-apps-discovery-popup__button--cancel{background:transparent;border:0}.equatio-apps-discovery-popup__button.equatio-apps-discovery-popup__button--cancel:hover{background:transparent;border:0;color:#0092cc}.equatio-apps-discovery-popup__button:hover{background-color:#00B7FF;color:#FFF}\n',
        ""
      ]);
    },
    720: function (e, t, o) {
      o = o(721);
      e.exports = "string" == typeof o ? o : o.toString();
    },
    721: function (e, t, o) {
      (e.exports = o(35)(void 0)).push([
        e.i,
        '#equatio-gsuite-discover-container{all:initial}#equatio-gsuite-discover-shadow-wrapper.equatio-hidden{opacity:0}#equatio-gsuite-discover-shadow-wrapper.equatio-toggle{display:none}.equatio-apps-discovery-popup{position:fixed;top:20px;right:25px;width:325px;z-index:10000000;min-height:192px}.equatio-gsuite-discover-overlay-close{position:absolute !important;top:130px !important;right:20px !important;background:#2ba7dd !important;border-radius:11px !important;width:22px;height:22px;z-index:1053}.equatio-gsuite-discover-overlay-close__icon{color:#fff !important}.equatio-gsuite-discover-overlay{color:#fff}.equatio-gsuite-discover-overlay-info{font-weight:800;background:none !important;opacity:1 !important;z-index:1052 !important}.equatio-gsuite-discover-overlay>div{position:absolute;background-color:#00b7ff;margin:0 !important;padding:0 !important;opacity:0.89;z-index:1051}.equatio-gsuite-discover-overlay-top{top:0;left:0}.equatio-gsuite-discover-overlay-right{top:0;right:0}.equatio-gsuite-discover-overlay-bottom{right:0;bottom:0}.equatio-gsuite-discover-overlay-left{bottom:0;left:0}.equatio-gsuite-discover-overlay-center{background-color:transparent !important}.equatio-placeholder-toolbar-wrapper{position:fixed;bottom:0;left:0;right:0;background-color:#00b7ff;z-index:9999}.equatio-apps-discovery-overlay-title__warning{height:20px;margin:10px 10px -5px 0}.equatio-apps-discovery-overlay-pointer__icon{height:240px;display:block;margin:10px 0 10px 7px}.equatio-apps-discovery-overlay-title__logo{height:60px;position:absolute;right:30px;bottom:80px;z-index:2000}.equatio-apps-discovery-popup-browser-action__icon{width:16px;display:inline-block;margin:-16px 10px 0 4px;position:relative;top:16px}.equatio-apps-discovery-popup-browser-action__badge{background-color:#565656;color:#fff;width:12px;height:12px;position:relative;top:-12px;left:9px;display:flex;justify-content:center;align-items:center;border-radius:3px;border:1px #fff solid}.equatio-apps-discovery-popup-browser-action__badge>div{position:relative;left:-1px;top:0;font-size:11px;font-family:Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif}.equatio-link-button{color:#494949 !important}.equatio-link-button--small{font-size:0.8em}\n',
        ""
      ]);
    },
    722: function (e, u, d) {
      "use strict";
      !function (i) {
        d.d(u, "a", function () {
          return l;
        });
        var e = d(3),
          o = d.n(e),
          e = d(7),
          t = d.n(e),
          e = d(1),
          n = d.n(e),
          e = d(2),
          a = d(469),
          r = d(723),
          s = d(4),
          p = d(727);
        const c = Object.freeze({
          None: 0,
          Overlay: 1,
          Hidden: 2
        });
        class l extends e.Component {
          constructor(e) {
            super(e),
              t()(this, "setStatus", (e) => {
                e === c.Hidden && Object(s.Q)("Docs Discoverability - Dismiss"),
                  this.setState(() => ({
                    status: e
                  }));
              }),
              t()(this, "setShowMessage", () => {
                o()(
                  n.a.mark(function e() {
                    var t;
                    return n.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              Object(s.Q)("Docs Discoverability - Don't Show Again"),
                              (t = {
                                type: "permanent"
                              }),
                              (e.next = 4),
                              Object(s.f)(t)
                            );

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )(),
                  this.setStatus(c.Hidden);
              }),
              t()(this, "showOverlay", () => {
                const e = this.props.element,
                  t = Object(p.a)(e);
                t
                  ? (this.setStatus(c.Overlay),
                    o()(
                      n.a.mark(function e() {
                        var t;
                        return n.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = {
                                    type: "permanent"
                                  }),
                                  (e.next = 3),
                                  Object(s.f)(t)
                                );

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )())
                  : this.setStatus(c.Hidden);
              }),
              t()(this, "dismissClick", () => {
                this.setStatus(c.Hidden);
              }),
              (this.state = {
                status: c.None
              });
          }
          componentDidMount() {
            var t = this;
            chrome.runtime.onMessage.addListener(({ action: e }) => {
              "load" === e &&
                o()(
                  n.a.mark(function e() {
                    return n.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Object(s.y)();

                          case 2:
                            e.sent ? t.setStatus(c.Hidden) : t.showOverlay();

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
            });
          }
          render() {
            const e = this.props,
              t = e.hasEquationToolbarOpened,
              o = e.element,
              n = this.state.status;
            switch (n) {
              case c.Hidden:
                return null;

              case c.Overlay:
                return i.createElement(r.a, {
                  element: o,
                  onClose: () => this.dismissClick()
                });

              default:
                return i.createElement(a.a, {
                  hasEquationToolbarOpened: t,
                  onDismiss: () => this.setStatus(c.Hidden),
                  onDontShowClick: () => this.setShowMessage()
                });
            }
          }
        }
      }.call(this, d(2));
    },
    723: function (e, u, d) {
      "use strict";
      !function (i) {
        var e = d(7),
          n = d.n(e),
          e = d(2),
          t = d(9),
          o = d(11),
          x = d(724),
          a = d(725),
          r = d(726),
          s = d(41);
        const p = Object(t.defineMessages)({
            close: {
              id: "apps-discovery.overlay.close",
              defaultMessage: "Close"
            },
            containMath: {
              id: "apps-discovery.overlay.contain",
              defaultMessage: "This document contains Math"
            },
            edit: {
              id: "apps-discovery.overlay.edit",
              defaultMessage: "Edit in Equatio"
            }
          }),
          c = (e) => {
            const t = Object(x.a)(e),
              o = t.x,
              n = t.y,
              i = t.width,
              a = t.height,
              r = document.querySelector("#docs-editor-container"),
              s = r.getBoundingClientRect(),
              p = s.y,
              c = s.width,
              l = s.height,
              u = 10,
              d = 0 <= i ? o + i : o,
              f = 0 <= a ? n : n + a,
              h = 0 <= i ? c - o - i : c - o,
              g = 0 <= a ? n + a : n,
              m = 0 <= i ? c - o : c - o - i,
              v = l - g,
              y = c - m,
              b = l - f;
            return {
              top: {
                width: d + u,
                height: f - u - p,
                top: p
              },
              right: {
                width: h - u,
                height: g + u - p,
                top: p
              },
              bottom: {
                width: m + u,
                height: v - u + p
              },
              left: {
                width: y - u,
                height: b + u + p
              },
              info: {
                top: n - 50,
                left: o - u
              },
              center: {
                top: n - u,
                left: o - u,
                width: i + 2 * u,
                height: a + 2 * u
              }
            };
          };
        class l extends e.Component {
          constructor(e) {
            super(e),
              n()(this, "resizeListener", () => {
                const e = this.props.element,
                  t = c(e);
                this.setState({
                  containerStyles: t
                });
              });
            const t = this.props.element,
              o =
                ((this.state = {
                  containerStyles: c(t)
                }),
                "SPAN" === t.nodeName && t.classList.contains("typeset"));
            o || Object(r.a)(t),
              window.addEventListener("resize", this.resizeListener, {
                passive: !0
              });
          }
          componentWillUnmount() {
            window.removeEventListener("resize", this.resizeListener);
          }
          render() {
            const e = this.state.containerStyles,
              t = this.props,
              o = t.onClose,
              n = t.intl;
            return i.createElement(
              "div",
              null,
              i.createElement(
                "div",
                {
                  className: "equatio-gsuite-discover-overlay"
                },
                i.createElement(
                  s.a,
                  {
                    content: n.formatMessage(p.close)
                  },
                  i.createElement(
                    "button",
                    {
                      className: "equatio-gsuite-discover-overlay-close equatio-modal-popup__close",
                      "aria-label": n.formatMessage(p.close),
                      onClick: () => o(),
                      style: {
                        border: "none"
                      },
                      type: "button"
                    },
                    i.createElement(
                      "svg",
                      {
                        viewBox: "0 0 11.172 11.172",
                        className: "equatio-modal-popup__close__icon equatio-gsuite-discover-overlay-close__icon"
                      },
                      i.createElement("use", {
                        xlinkHref: "#equatio-svg-modal-close"
                      })
                    )
                  )
                ),
                i.createElement(
                  "div",
                  {
                    className: "equatio-gsuite-discover-overlay-info",
                    style: e.info
                  },
                  i.createElement(
                    "svg",
                    {
                      viewBox: "0 0 38 38",
                      className: "equatio-apps-discovery-overlay-title__warning"
                    },
                    i.createElement("use", {
                      xlinkHref: "#equatio-svg-discover-header-warning"
                    })
                  ),
                  i.createElement("span", null, n.formatMessage(p.containMath))
                ),
                i.createElement("div", {
                  className: "equatio-gsuite-discover-overlay-top",
                  style: e.top
                }),
                i.createElement("div", {
                  className: "equatio-gsuite-discover-overlay-right",
                  style: e.right
                }),
                i.createElement("div", {
                  className: "equatio-gsuite-discover-overlay-bottom",
                  style: e.bottom
                }),
                i.createElement("div", {
                  className: "equatio-gsuite-discover-overlay-left",
                  style: e.left
                }),
                i.createElement("div", {
                  className: "equatio-gsuite-discover-overlay-center",
                  style: e.center
                }),
                i.createElement(
                  "div",
                  {
                    className: "equatio-gsuite-discover-overlay-info",
                    style: {
                      bottom: "53px",
                      right: "325px"
                    }
                  },
                  i.createElement("span", null, n.formatMessage(p.edit)),
                  i.createElement(
                    "svg",
                    {
                      viewBox: "0 0 77.815 282.645",
                      className: "equatio-apps-discovery-overlay-pointer__icon"
                    },
                    i.createElement("use", {
                      xlinkHref: "#equatio-svg-discover-pointer"
                    })
                  )
                ),
                i.createElement(
                  "svg",
                  {
                    viewBox: "0 0 1628.5 546",
                    className: "equatio-apps-discovery-overlay-title__logo"
                  },
                  i.createElement("use", {
                    xlinkHref: "#equatio-svg-logo-color"
                  })
                )
              ),
              i.createElement(a.a, null)
            );
          }
        }
        u.a = Object(o.c)(l);
      }.call(this, d(2));
    },
    724: function (e, t, o) {
      "use strict";
      t.a = (e) => {
        if (e.matches(".typeset")) return e.parentNode.getBoundingClientRect();
        const t = e.getBoundingClientRect();
        return t;
      };
    },
    725: function (e, t, o) {
      "use strict";
      !function (e) {
        t.a = () =>
          e.createElement("div", {
            className: "equatio-placeholder-toolbar-wrapper"
          });
      }.call(this, o(2));
    },
    726: function (e, t, o) {
      "use strict";
      t.a = (e) => {
        const t = new MouseEvent("mousedown", {
          view: window,
          bubbles: !0,
          cancelable: !0,
          clientX: e.getBoundingClientRect().left,
          clientY: e.getBoundingClientRect().top
        });
        e.dispatchEvent(t);
      };
    },
    727: function (e, t, o) {
      "use strict";
      t.a = (e) => {
        if (!e) return !1;
        const t = e.getBoundingClientRect(),
          o = t.x,
          n = t.y,
          i = t.width,
          a = t.height,
          r = document.querySelector("div.kix-appview-editor-container, #slides-view");
        if (!r) return !1;
        const s = r.getBoundingClientRect(),
          p = s.y,
          c = s.width,
          l = s.height,
          u = 53,
          d = 250;
        return n > p && n < p + l - u - a && o + i < c - d;
      };
    },
    728: function (e, t, o) {
      "use strict";
      t.a = {
        locale: Array.isArray(navigator.languages) ? navigator.languages[0] : navigator.language || navigator.userLanguage
      };
    }
  }
]);
