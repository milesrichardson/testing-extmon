/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function e(t, r, n) {
  function o(u, i) {
    if (!r[u]) {
      if (!t[u]) {
        var l = "function" == typeof require && require;
        if (!i && l) return l(u, !0);
        if (s) return s(u, !0);
        var a = new Error("Cannot find module '" + u + "'");
        throw ((a.code = "MODULE_NOT_FOUND"), a);
      }
      var c = (r[u] = { exports: {} });
      t[u][0].call(
        c.exports,
        function (e) {
          return o(t[u][1][e] || e);
        },
        c,
        c.exports,
        e,
        t,
        r,
        n
      );
    }
    return r[u].exports;
  }
  for (var s = "function" == typeof require && require, u = 0; u < n.length; u++) o(n[u]);
  return o;
})(
  {
    1: [
      function (e, t, r) {
        (t.exports = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    2: [
      function (e, t, r) {
        (t.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    3: [
      function (e, t, r) {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        (t.exports = function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    4: [
      function (e, t, r) {
        (t.exports = function (e, t, r) {
          return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    5: [
      function (e, t, r) {
        function n(e) {
          return (
            (t.exports = n =
              Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            n(e)
          );
        }
        (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    6: [
      function (e, t, r) {
        var n = e("./setPrototypeOf.js");
        (t.exports = function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && n(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./setPrototypeOf.js": 9 }
    ],
    7: [
      function (e, t, r) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    8: [
      function (e, t, r) {
        var n = e("@babel/runtime/helpers/typeof").default,
          o = e("./assertThisInitialized.js");
        (t.exports = function (e, t) {
          return !t || ("object" !== n(t) && "function" != typeof t) ? o(e) : t;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./assertThisInitialized.js": 1, "@babel/runtime/helpers/typeof": 10 }
    ],
    9: [
      function (e, t, r) {
        function n(e, r) {
          return (
            (t.exports = n =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            n(e, r)
          );
        }
        (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    10: [
      function (e, t, r) {
        function n(e) {
          return (
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? ((t.exports = n =
                  function (e) {
                    return typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0))
              : ((t.exports = n =
                  function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0)),
            n(e)
          );
        }
        (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    11: [
      function (e, t, r) {
        "use strict";
        t.exports = e("./src/ContentMessenger");
      },
      { "./src/ContentMessenger": 12 }
    ],
    12: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          o = n(e("@babel/runtime/helpers/classCallCheck")),
          s = n(e("@babel/runtime/helpers/createClass")),
          u = n(e("@babel/runtime/helpers/assertThisInitialized")),
          i = n(e("@babel/runtime/helpers/inherits")),
          l = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
          a = n(e("@babel/runtime/helpers/getPrototypeOf"));
        function c(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var r,
              n = (0, a.default)(e);
            if (t) {
              var o = (0, a.default)(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return (0, l.default)(this, r);
          };
        }
        var p = e("./Messenger"),
          f = e("./ContentTopic"),
          b = e("./chrome"),
          h = (function (e) {
            (0, i.default)(r, e);
            var t = c(r);
            function r() {
              var e;
              (0, o.default)(this, r);
              var n = (e = t.call(this, f))._onMessage.bind((0, u.default)(e));
              return (
                b.runtime.onMessage.addListener(n),
                window.addEventListener("unload", function () {
                  b.runtime.onMessage.removeListener(n);
                }),
                b.runtime.connect({ name: "ContentMessenger" }).onDisconnect.addListener(e._onDisconnect.bind((0, u.default)(e))),
                e
              );
            }
            return (
              (0, s.default)(r, [
                {
                  key: "_onMessage",
                  value: function (e, t, r) {
                    if (!t.tab && e.publish) {
                      var n = this._getTopic(e.publish);
                      n && n.publish(e.message, r);
                    }
                    return !0;
                  }
                },
                {
                  key: "_onDisconnect",
                  value: function () {
                    var e = this._getTopic("Background:closed");
                    e && e.publish();
                  }
                },
                {
                  key: "publish",
                  value: function (e, t, r) {
                    var n = 10;
                    !(function o() {
                      b.runtime.sendMessage({ publish: e, message: t }, function (e) {
                        var t = b.runtime.lastError;
                        t && "Could not establish connection. Receiving end does not exist." === t.message
                          ? (n -= 1) && setTimeout(o, 50)
                          : "function" == typeof r && r(e);
                      });
                    })();
                  }
                }
              ]),
              r
            );
          })(p);
        t.exports = h;
      },
      {
        "./ContentTopic": 13,
        "./Messenger": 14,
        "./chrome": 16,
        "@babel/runtime/helpers/assertThisInitialized": 1,
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/createClass": 3,
        "@babel/runtime/helpers/getPrototypeOf": 5,
        "@babel/runtime/helpers/inherits": 6,
        "@babel/runtime/helpers/interopRequireDefault": 7,
        "@babel/runtime/helpers/possibleConstructorReturn": 8
      }
    ],
    13: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          o = n(e("@babel/runtime/helpers/classCallCheck")),
          s = n(e("@babel/runtime/helpers/inherits")),
          u = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
          i = n(e("@babel/runtime/helpers/getPrototypeOf"));
        function l(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var r,
              n = (0, i.default)(e);
            if (t) {
              var o = (0, i.default)(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return (0, u.default)(this, r);
          };
        }
        var a = e("./Topic"),
          c = e("./chrome"),
          p = (function (e) {
            (0, s.default)(r, e);
            var t = l(r);
            function r(e) {
              var n;
              return (0, o.default)(this, r), (n = t.call(this, e)), c.runtime.sendMessage({ subscribe: e }), n;
            }
            return r;
          })(a);
        t.exports = p;
      },
      {
        "./Topic": 15,
        "./chrome": 16,
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/getPrototypeOf": 5,
        "@babel/runtime/helpers/inherits": 6,
        "@babel/runtime/helpers/interopRequireDefault": 7,
        "@babel/runtime/helpers/possibleConstructorReturn": 8
      }
    ],
    14: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          o = n(e("@babel/runtime/helpers/classCallCheck")),
          s = n(e("@babel/runtime/helpers/createClass")),
          u = (function () {
            function e(t) {
              (0, o.default)(this, e), (this._topicClass = t), (this._topics = {});
            }
            return (
              (0, s.default)(
                e,
                [
                  {
                    key: "_getTopic",
                    value: function (e, t) {
                      var r = this._topics[e];
                      return !r && t && (this._topics[e] = r = new this._topicClass(e)), r;
                    }
                  },
                  {
                    key: "subscribe",
                    value: function (e, t) {
                      this._getTopic(e, !0).subscribe(t);
                    }
                  },
                  {
                    key: "publish",
                    value: function (e, t, r, n) {
                      var o = this._getTopic(e);
                      o && o.publish(t, r, n);
                    }
                  }
                ],
                [
                  {
                    key: "getInstance",
                    value: function () {
                      return this._instance || (this._instance = new this()), this._instance;
                    }
                  }
                ]
              ),
              e
            );
          })();
        t.exports = u;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/createClass": 3,
        "@babel/runtime/helpers/interopRequireDefault": 7
      }
    ],
    15: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          o = n(e("@babel/runtime/helpers/classCallCheck")),
          s = n(e("@babel/runtime/helpers/createClass")),
          u = (function () {
            function e(t) {
              (0, o.default)(this, e), (this._name = t), (this._callbacks = []);
            }
            return (
              (0, s.default)(e, [
                {
                  key: "publish",
                  value: function (e, t) {
                    var r = this._wrapCallback(t);
                    this._callbacks.forEach(function (t) {
                      return t(e, r);
                    });
                  }
                },
                {
                  key: "_wrapCallback",
                  value: function (e) {
                    return null == e
                      ? e
                      : function () {
                          try {
                            e.apply(void 0, arguments);
                          } catch (e) {
                            if ("Attempting to use a disconnected port object" !== e.message) throw e;
                          }
                        };
                  }
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this._callbacks.push(e);
                  }
                }
              ]),
              e
            );
          })();
        t.exports = u;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/createClass": 3,
        "@babel/runtime/helpers/interopRequireDefault": 7
      }
    ],
    16: [
      function (e, t, r) {
        "use strict";
        "undefined" != typeof browser && browser.runtime ? (t.exports = browser) : (t.exports = chrome);
      },
      {}
    ],
    17: [
      function (e, t, r) {
        "use strict";
        const n = e("messenger/Content").getInstance();
        t.exports = n;
      },
      { "messenger/Content": 11 }
    ],
    18: [
      function (e, t, r) {
        "use strict";
        const n = e("content/messagingInterface"),
          o = { track: (e, t, r) => n.publish("Mixpanel:track", { event: e, properties: t }, r) };
        t.exports = o;
      },
      { "content/messagingInterface": 17 }
    ],
    19: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/defineProperty"));
        function o(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(r), !0).forEach(function (t) {
                  (0, n.default)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
          }
          return e;
        }
        const u = e("mustache"),
          i = e("content/messagingInterface"),
          l = e("content/mixpanel"),
          a = e("jquery");
        a(document.body).on("click", "[data-close]", (e) => {
          e.preventDefault(), i.publish("Iframe:close");
        }),
          a(document.body).on("click", "[data-event]", (e) => {
            const t = a.extend(!0, {}, a(e.currentTarget).data()),
              r = t.event;
            return delete t.event, l.track(r, t);
          }),
          i.subscribe("AO:data#external", (e) =>
            ((e, t) => {
              if (!e) return;
              a("<link>", { rel: "stylesheet", type: "text/css", href: e }).appendTo(document.head);
              const r = document.createElement("img");
              (r.onerror = t), (r.src = e);
            })(e.stylesheet, () => {
              const t = e.products[0];
              if (!t) return;
              const r = { product: t, meta: e.meta, requestData: e.requestData },
                n = u.render(e.templates.external, r);
              a("#external").html(n), e.javascript && a.getScript(e.javascript);
              const o = s(s({}, e.meta), {}, { category: t.category || "Unknown" });
              l.track("Offers - Impression", o);
            })
          );
      },
      {
        "@babel/runtime/helpers/defineProperty": 4,
        "@babel/runtime/helpers/interopRequireDefault": 7,
        "content/messagingInterface": 17,
        "content/mixpanel": 18,
        jquery: "jquery",
        mustache: "mustache"
      }
    ]
  },
  {},
  [19]
);
