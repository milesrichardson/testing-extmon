/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function e(t, n, r) {
  function o(s, u) {
    if (!n[s]) {
      if (!t[s]) {
        var l = "function" == typeof require && require;
        if (!u && l) return l(s, !0);
        if (i) return i(s, !0);
        var a = new Error("Cannot find module '" + s + "'");
        throw ((a.code = "MODULE_NOT_FOUND"), a);
      }
      var c = (n[s] = { exports: {} });
      t[s][0].call(
        c.exports,
        function (e) {
          return o(t[s][1][e] || e);
        },
        c,
        c.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[s].exports;
  }
  for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
  return o;
})(
  {
    1: [
      function (e, t, n) {
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
      function (e, t, n) {
        (t.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    3: [
      function (e, t, n) {
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        (t.exports = function (e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    4: [
      function (e, t, n) {
        function r(e) {
          return (
            (t.exports = r =
              Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            r(e)
          );
        }
        (t.exports = r), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    5: [
      function (e, t, n) {
        var r = e("./setPrototypeOf.js");
        (t.exports = function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && r(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./setPrototypeOf.js": 8 }
    ],
    6: [
      function (e, t, n) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    7: [
      function (e, t, n) {
        var r = e("@babel/runtime/helpers/typeof").default,
          o = e("./assertThisInitialized.js");
        (t.exports = function (e, t) {
          return !t || ("object" !== r(t) && "function" != typeof t) ? o(e) : t;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./assertThisInitialized.js": 1, "@babel/runtime/helpers/typeof": 9 }
    ],
    8: [
      function (e, t, n) {
        function r(e, n) {
          return (
            (t.exports = r =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            r(e, n)
          );
        }
        (t.exports = r), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    9: [
      function (e, t, n) {
        function r(e) {
          return (
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? ((t.exports = r =
                  function (e) {
                    return typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0))
              : ((t.exports = r =
                  function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0)),
            r(e)
          );
        }
        (t.exports = r), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    10: [
      function (e, t, n) {
        "use strict";
        var r,
          o = "object" == typeof Reflect ? Reflect : null,
          i =
            o && "function" == typeof o.apply
              ? o.apply
              : function (e, t, n) {
                  return Function.prototype.apply.call(e, t, n);
                };
        r =
          o && "function" == typeof o.ownKeys
            ? o.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
        var s =
          Number.isNaN ||
          function (e) {
            return e != e;
          };
        function u() {
          u.init.call(this);
        }
        (t.exports = u),
          (t.exports.once = function (e, t) {
            return new Promise(function (n, r) {
              function o(n) {
                e.removeListener(t, i), r(n);
              }
              function i() {
                "function" == typeof e.removeListener && e.removeListener("error", o), n([].slice.call(arguments));
              }
              m(e, t, i, { once: !0 }),
                "error" !== t &&
                  (function (e, t, n) {
                    "function" == typeof e.on && m(e, "error", t, n);
                  })(e, o, { once: !0 });
            });
          }),
          (u.EventEmitter = u),
          (u.prototype._events = void 0),
          (u.prototype._eventsCount = 0),
          (u.prototype._maxListeners = void 0);
        var l = 10;
        function a(e) {
          if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
        }
        function c(e) {
          return void 0 === e._maxListeners ? u.defaultMaxListeners : e._maxListeners;
        }
        function f(e, t, n, r) {
          var o, i, s, u;
          if (
            (a(n),
            void 0 === (i = e._events)
              ? ((i = e._events = Object.create(null)), (e._eventsCount = 0))
              : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), (i = e._events)), (s = i[t])),
            void 0 === s)
          )
            (s = i[t] = n), ++e._eventsCount;
          else if (
            ("function" == typeof s ? (s = i[t] = r ? [n, s] : [s, n]) : r ? s.unshift(n) : s.push(n),
            (o = c(e)) > 0 && s.length > o && !s.warned)
          ) {
            s.warned = !0;
            var l = new Error(
              "Possible EventEmitter memory leak detected. " +
                s.length +
                " " +
                String(t) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
            (l.name = "MaxListenersExceededWarning"),
              (l.emitter = e),
              (l.type = t),
              (l.count = s.length),
              (u = l),
              console && console.warn && console.warn(u);
          }
          return e;
        }
        function p() {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            );
        }
        function h(e, t, n) {
          var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
            o = p.bind(r);
          return (o.listener = n), (r.wrapFn = o), o;
        }
        function b(e, t, n) {
          var r = e._events;
          if (void 0 === r) return [];
          var o = r[t];
          return void 0 === o
            ? []
            : "function" == typeof o
            ? n
              ? [o.listener || o]
              : [o]
            : n
            ? (function (e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                return t;
              })(o)
            : d(o, o.length);
        }
        function v(e) {
          var t = this._events;
          if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length;
          }
          return 0;
        }
        function d(e, t) {
          for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
          return n;
        }
        function m(e, t, n, r) {
          if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
          else {
            if ("function" != typeof e.addEventListener)
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(t, function o(i) {
              r.once && e.removeEventListener(t, o), n(i);
            });
          }
        }
        Object.defineProperty(u, "defaultMaxListeners", {
          enumerable: !0,
          get: function () {
            return l;
          },
          set: function (e) {
            if ("number" != typeof e || e < 0 || s(e))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + "."
              );
            l = e;
          }
        }),
          (u.init = function () {
            (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (u.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || s(e))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return (this._maxListeners = e), this;
          }),
          (u.prototype.getMaxListeners = function () {
            return c(this);
          }),
          (u.prototype.emit = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var r = "error" === e,
              o = this._events;
            if (void 0 !== o) r = r && void 0 === o.error;
            else if (!r) return !1;
            if (r) {
              var s;
              if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
              var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
              throw ((u.context = s), u);
            }
            var l = o[e];
            if (void 0 === l) return !1;
            if ("function" == typeof l) i(l, this, t);
            else {
              var a = l.length,
                c = d(l, a);
              for (n = 0; n < a; ++n) i(c[n], this, t);
            }
            return !0;
          }),
          (u.prototype.addListener = function (e, t) {
            return f(this, e, t, !1);
          }),
          (u.prototype.on = u.prototype.addListener),
          (u.prototype.prependListener = function (e, t) {
            return f(this, e, t, !0);
          }),
          (u.prototype.once = function (e, t) {
            return a(t), this.on(e, h(this, e, t)), this;
          }),
          (u.prototype.prependOnceListener = function (e, t) {
            return a(t), this.prependListener(e, h(this, e, t)), this;
          }),
          (u.prototype.removeListener = function (e, t) {
            var n, r, o, i, s;
            if ((a(t), void 0 === (r = this._events))) return this;
            if (void 0 === (n = r[e])) return this;
            if (n === t || n.listener === t)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
              for (o = -1, i = n.length - 1; i >= 0; i--)
                if (n[i] === t || n[i].listener === t) {
                  (s = n[i].listener), (o = i);
                  break;
                }
              if (o < 0) return this;
              0 === o
                ? n.shift()
                : (function (e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop();
                  })(n, o),
                1 === n.length && (r[e] = n[0]),
                void 0 !== r.removeListener && this.emit("removeListener", e, s || t);
            }
            return this;
          }),
          (u.prototype.off = u.prototype.removeListener),
          (u.prototype.removeAllListeners = function (e) {
            var t, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                  : void 0 !== n[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[e]),
                this
              );
            if (0 === arguments.length) {
              var o,
                i = Object.keys(n);
              for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
              return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
            }
            if ("function" == typeof (t = n[e])) this.removeListener(e, t);
            else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
            return this;
          }),
          (u.prototype.listeners = function (e) {
            return b(this, e, !0);
          }),
          (u.prototype.rawListeners = function (e) {
            return b(this, e, !1);
          }),
          (u.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : v.call(e, t);
          }),
          (u.prototype.listenerCount = v),
          (u.prototype.eventNames = function () {
            return this._eventsCount > 0 ? r(this._events) : [];
          });
      },
      {}
    ],
    11: [
      function (e, t, n) {
        "use strict";
        t.exports = e("./src/ContentMessenger");
      },
      { "./src/ContentMessenger": 12 }
    ],
    12: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          o = r(e("@babel/runtime/helpers/classCallCheck")),
          i = r(e("@babel/runtime/helpers/createClass")),
          s = r(e("@babel/runtime/helpers/assertThisInitialized")),
          u = r(e("@babel/runtime/helpers/inherits")),
          l = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
          a = r(e("@babel/runtime/helpers/getPrototypeOf"));
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
            var n,
              r = (0, a.default)(e);
            if (t) {
              var o = (0, a.default)(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (0, l.default)(this, n);
          };
        }
        var f = e("./Messenger"),
          p = e("./ContentTopic"),
          h = e("./chrome"),
          b = (function (e) {
            (0, u.default)(n, e);
            var t = c(n);
            function n() {
              var e;
              (0, o.default)(this, n);
              var r = (e = t.call(this, p))._onMessage.bind((0, s.default)(e));
              return (
                h.runtime.onMessage.addListener(r),
                window.addEventListener("unload", function () {
                  h.runtime.onMessage.removeListener(r);
                }),
                h.runtime.connect({ name: "ContentMessenger" }).onDisconnect.addListener(e._onDisconnect.bind((0, s.default)(e))),
                e
              );
            }
            return (
              (0, i.default)(n, [
                {
                  key: "_onMessage",
                  value: function (e, t, n) {
                    if (!t.tab && e.publish) {
                      var r = this._getTopic(e.publish);
                      r && r.publish(e.message, n);
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
                  value: function (e, t, n) {
                    var r = 10;
                    !(function o() {
                      h.runtime.sendMessage({ publish: e, message: t }, function (e) {
                        var t = h.runtime.lastError;
                        t && "Could not establish connection. Receiving end does not exist." === t.message
                          ? (r -= 1) && setTimeout(o, 50)
                          : "function" == typeof n && n(e);
                      });
                    })();
                  }
                }
              ]),
              n
            );
          })(f);
        t.exports = b;
      },
      {
        "./ContentTopic": 13,
        "./Messenger": 14,
        "./chrome": 16,
        "@babel/runtime/helpers/assertThisInitialized": 1,
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/createClass": 3,
        "@babel/runtime/helpers/getPrototypeOf": 4,
        "@babel/runtime/helpers/inherits": 5,
        "@babel/runtime/helpers/interopRequireDefault": 6,
        "@babel/runtime/helpers/possibleConstructorReturn": 7
      }
    ],
    13: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          o = r(e("@babel/runtime/helpers/classCallCheck")),
          i = r(e("@babel/runtime/helpers/inherits")),
          s = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
          u = r(e("@babel/runtime/helpers/getPrototypeOf"));
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
            var n,
              r = (0, u.default)(e);
            if (t) {
              var o = (0, u.default)(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (0, s.default)(this, n);
          };
        }
        var a = e("./Topic"),
          c = e("./chrome"),
          f = (function (e) {
            (0, i.default)(n, e);
            var t = l(n);
            function n(e) {
              var r;
              return (0, o.default)(this, n), (r = t.call(this, e)), c.runtime.sendMessage({ subscribe: e }), r;
            }
            return n;
          })(a);
        t.exports = f;
      },
      {
        "./Topic": 15,
        "./chrome": 16,
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/getPrototypeOf": 4,
        "@babel/runtime/helpers/inherits": 5,
        "@babel/runtime/helpers/interopRequireDefault": 6,
        "@babel/runtime/helpers/possibleConstructorReturn": 7
      }
    ],
    14: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          o = r(e("@babel/runtime/helpers/classCallCheck")),
          i = r(e("@babel/runtime/helpers/createClass")),
          s = (function () {
            function e(t) {
              (0, o.default)(this, e), (this._topicClass = t), (this._topics = {});
            }
            return (
              (0, i.default)(
                e,
                [
                  {
                    key: "_getTopic",
                    value: function (e, t) {
                      var n = this._topics[e];
                      return !n && t && (this._topics[e] = n = new this._topicClass(e)), n;
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
                    value: function (e, t, n, r) {
                      var o = this._getTopic(e);
                      o && o.publish(t, n, r);
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
        t.exports = s;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/createClass": 3,
        "@babel/runtime/helpers/interopRequireDefault": 6
      }
    ],
    15: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          o = r(e("@babel/runtime/helpers/classCallCheck")),
          i = r(e("@babel/runtime/helpers/createClass")),
          s = (function () {
            function e(t) {
              (0, o.default)(this, e), (this._name = t), (this._callbacks = []);
            }
            return (
              (0, i.default)(e, [
                {
                  key: "publish",
                  value: function (e, t) {
                    var n = this._wrapCallback(t);
                    this._callbacks.forEach(function (t) {
                      return t(e, n);
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
        t.exports = s;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 2,
        "@babel/runtime/helpers/createClass": 3,
        "@babel/runtime/helpers/interopRequireDefault": 6
      }
    ],
    16: [
      function (e, t, n) {
        "use strict";
        "undefined" != typeof browser && browser.runtime ? (t.exports = browser) : (t.exports = chrome);
      },
      {}
    ],
    17: [
      function (e, t, n) {
        "use strict";
        const r = e("messenger/Content").getInstance(),
          { EventEmitter: o } = e("events");
        (window.ABS = { messenger: r, events: new o() }), r.publish("inject-content");
      },
      { events: 10, "messenger/Content": 11 }
    ]
  },
  {},
  [17]
);
