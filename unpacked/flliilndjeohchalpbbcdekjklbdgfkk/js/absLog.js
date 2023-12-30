/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function e(t, r, n) {
  function s(i, u) {
    if (!r[i]) {
      if (!t[i]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(i, !0);
        if (o) return o(i, !0);
        var l = new Error("Cannot find module '" + i + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      var c = (r[i] = { exports: {} });
      t[i][0].call(
        c.exports,
        function (e) {
          return s(t[i][1][e] || e);
        },
        c,
        c.exports,
        e,
        t,
        r,
        n
      );
    }
    return r[i].exports;
  }
  for (var o = "function" == typeof require && require, i = 0; i < n.length; i++) s(n[i]);
  return s;
})(
  {
    1: [
      function (e, t, r) {
        "use strict";
        const n = { getManifest: () => chrome.runtime.getManifest(), getURL: (e) => chrome.runtime.getURL(e) };
        t.exports = n;
      },
      {}
    ],
    2: [
      function (e, t, r) {
        "use strict";
        const n = e("content/messagingInterface"),
          s = e("browser_accessors/extensionAccessor");
        new (class {
          constructor() {
            (this._downloadData = this._downloadData.bind(this)), (this._toggleLogging = this._toggleLogging.bind(this)), this._init();
          }
          _init() {
            document.getElementById("btn-download").addEventListener("click", this._downloadData),
              document.getElementById("btn-clear").addEventListener("click", this._clearData);
            const e = document.getElementById("cb-start-logging"),
              t = document.getElementById("log-content");
            n.publish("APLLog:active", null, (t) => {
              (e.checked = t), e.addEventListener("change", this._toggleLogging);
            }),
              n.publish("APLLog:get", {}, (e) => {
                t.value = this._prepareData(e);
              }),
              n.subscribe("APLLog:log", ({ logData: e }) => {
                t.value = this._prepareData(e);
              });
          }
          _prepareData(e) {
            const t = { userAgent: navigator.userAgent, absVersion: s.getManifest().version };
            return JSON.stringify({ header: t, timeline: e.events }, null, 2);
          }
          _downloadData() {
            n.publish("APLLog:get", {}, (e) => {
              const t = this._prepareData(e);
              window.location = `data:application/octet-stream;charset=utf-8,${encodeURIComponent(t)}`;
            });
          }
          _clearData() {
            n.publish("APLLog:clear");
          }
          _toggleLogging(e) {
            return n.publish("APLLog:toggle", { active: e.target.checked });
          }
        })();
      },
      { "browser_accessors/extensionAccessor": 1, "content/messagingInterface": 18 }
    ],
    3: [
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
    4: [
      function (e, t, r) {
        (t.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    5: [
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
    6: [
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
    7: [
      function (e, t, r) {
        var n = e("./setPrototypeOf.js");
        (t.exports = function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && n(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./setPrototypeOf.js": 10 }
    ],
    8: [
      function (e, t, r) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    9: [
      function (e, t, r) {
        var n = e("@babel/runtime/helpers/typeof").default,
          s = e("./assertThisInitialized.js");
        (t.exports = function (e, t) {
          return !t || ("object" !== n(t) && "function" != typeof t) ? s(e) : t;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./assertThisInitialized.js": 3, "@babel/runtime/helpers/typeof": 11 }
    ],
    10: [
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
    11: [
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
    12: [
      function (e, t, r) {
        "use strict";
        t.exports = e("./src/ContentMessenger");
      },
      { "./src/ContentMessenger": 13 }
    ],
    13: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          s = n(e("@babel/runtime/helpers/classCallCheck")),
          o = n(e("@babel/runtime/helpers/createClass")),
          i = n(e("@babel/runtime/helpers/assertThisInitialized")),
          u = n(e("@babel/runtime/helpers/inherits")),
          a = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
          l = n(e("@babel/runtime/helpers/getPrototypeOf"));
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
              n = (0, l.default)(e);
            if (t) {
              var s = (0, l.default)(this).constructor;
              r = Reflect.construct(n, arguments, s);
            } else r = n.apply(this, arguments);
            return (0, a.default)(this, r);
          };
        }
        var p = e("./Messenger"),
          f = e("./ContentTopic"),
          b = e("./chrome"),
          h = (function (e) {
            (0, u.default)(r, e);
            var t = c(r);
            function r() {
              var e;
              (0, s.default)(this, r);
              var n = (e = t.call(this, f))._onMessage.bind((0, i.default)(e));
              return (
                b.runtime.onMessage.addListener(n),
                window.addEventListener("unload", function () {
                  b.runtime.onMessage.removeListener(n);
                }),
                b.runtime.connect({ name: "ContentMessenger" }).onDisconnect.addListener(e._onDisconnect.bind((0, i.default)(e))),
                e
              );
            }
            return (
              (0, o.default)(r, [
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
                    !(function s() {
                      b.runtime.sendMessage({ publish: e, message: t }, function (e) {
                        var t = b.runtime.lastError;
                        t && "Could not establish connection. Receiving end does not exist." === t.message
                          ? (n -= 1) && setTimeout(s, 50)
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
        "./ContentTopic": 14,
        "./Messenger": 15,
        "./chrome": 17,
        "@babel/runtime/helpers/assertThisInitialized": 3,
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/createClass": 5,
        "@babel/runtime/helpers/getPrototypeOf": 6,
        "@babel/runtime/helpers/inherits": 7,
        "@babel/runtime/helpers/interopRequireDefault": 8,
        "@babel/runtime/helpers/possibleConstructorReturn": 9
      }
    ],
    14: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          s = n(e("@babel/runtime/helpers/classCallCheck")),
          o = n(e("@babel/runtime/helpers/inherits")),
          i = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
          u = n(e("@babel/runtime/helpers/getPrototypeOf"));
        function a(e) {
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
              n = (0, u.default)(e);
            if (t) {
              var s = (0, u.default)(this).constructor;
              r = Reflect.construct(n, arguments, s);
            } else r = n.apply(this, arguments);
            return (0, i.default)(this, r);
          };
        }
        var l = e("./Topic"),
          c = e("./chrome"),
          p = (function (e) {
            (0, o.default)(r, e);
            var t = a(r);
            function r(e) {
              var n;
              return (0, s.default)(this, r), (n = t.call(this, e)), c.runtime.sendMessage({ subscribe: e }), n;
            }
            return r;
          })(l);
        t.exports = p;
      },
      {
        "./Topic": 16,
        "./chrome": 17,
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/getPrototypeOf": 6,
        "@babel/runtime/helpers/inherits": 7,
        "@babel/runtime/helpers/interopRequireDefault": 8,
        "@babel/runtime/helpers/possibleConstructorReturn": 9
      }
    ],
    15: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          s = n(e("@babel/runtime/helpers/classCallCheck")),
          o = n(e("@babel/runtime/helpers/createClass")),
          i = (function () {
            function e(t) {
              (0, s.default)(this, e), (this._topicClass = t), (this._topics = {});
            }
            return (
              (0, o.default)(
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
                      var s = this._getTopic(e);
                      s && s.publish(t, r, n);
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
        t.exports = i;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/createClass": 5,
        "@babel/runtime/helpers/interopRequireDefault": 8
      }
    ],
    16: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          s = n(e("@babel/runtime/helpers/classCallCheck")),
          o = n(e("@babel/runtime/helpers/createClass")),
          i = (function () {
            function e(t) {
              (0, s.default)(this, e), (this._name = t), (this._callbacks = []);
            }
            return (
              (0, o.default)(e, [
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
        t.exports = i;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/createClass": 5,
        "@babel/runtime/helpers/interopRequireDefault": 8
      }
    ],
    17: [
      function (e, t, r) {
        "use strict";
        "undefined" != typeof browser && browser.runtime ? (t.exports = browser) : (t.exports = chrome);
      },
      {}
    ],
    18: [
      function (e, t, r) {
        "use strict";
        const n = e("messenger/Content").getInstance();
        t.exports = n;
      },
      { "messenger/Content": 12 }
    ]
  },
  {},
  [2]
);
