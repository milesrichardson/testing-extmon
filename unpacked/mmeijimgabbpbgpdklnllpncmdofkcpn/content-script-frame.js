!(function () {
  "use strict";
  function e(e) {
    return (
      'url("' +
      (function (e) {
        return "data:image/svg+xml;base64," + window.btoa(e);
      })(e) +
      '")'
    );
  }
  var t = window.navigator.userAgent.includes("Windows")
      ? '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#fff" fill-opacity=".506" d="M0 0h.5v.5H0z"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"/>',
    n = {
      default: {
        url: e(
          '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 18 24" width="18"><g fill="#fff" fill-rule="evenodd"><path d="M0 14.94V0l10.812 10.838H4.487l-.384.116z"/><path d="M8.474 15.568L5.111 17 .744 6.656l3.438-1.449z"/></g><g fill="#000023" fill-rule="evenodd"><path d="M7.23 14.933l-1.72.722-2.892-6.878 1.718-.723z"/><path d="M.933 2.245v10.437l2.77-2.674.399-.13h4.447z"/></g></svg>'
        ),
        offsetX: 0,
        offsetY: 0
      },
      pointer: {
        url: e(
          '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M9.444 17.57h6.817s2.844-6.964 2.452-7.797c-.392-.834-2.06-1.128-2.06-.442 0 .687 0 1.515-.098 1.324-.147-.245.098-2.403-.147-2.746-.343-.392-1.57-.343-1.765.05-.197.391-.3 1.825-.49 1.617-.14-.121-.08-1.726-.197-2.354-.637-.392-1.854-.397-2.354-.147-.333.167-.15 2.498-.358 2.55-.034.07.26-6.816-.427-7.16-.686-.343-2.353.197-2.353.49 0 .295.539 7.357.392 7.75-.49-.05-1.717-2.11-2.354-2.306-.638-.196-2.01.932-2.01 1.472 0 .54 2.598 3.236 2.647 3.727.05.49 2.06 3.972 2.305 3.972z" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width=".772" stroke-linecap="round" stroke-miterlimit="0"/></svg>'
        ),
        offsetX: 9,
        offsetY: 2
      },
      none: { url: e(t), offsetX: 0, offsetY: 0 }
    },
    r = (window.navigator.userAgent.includes("Macintosh"), window.chrome && !(!chrome.runtime || !chrome.runtime.id)),
    o = window.top === window,
    i = null;
  function a() {
    return (
      i ||
        (i = new Promise(function (e) {
          if (document.head) e();
          else {
            var t = document.documentElement,
              n = new MutationObserver(function () {
                document.head && (e(), n.disconnect());
              });
            n.observe(t, { childList: !0 });
          }
        })),
      i
    );
  }
  var u = function (e, t) {
    return (u =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      })(e, t);
  };
  function l(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function n() {
      this.constructor = e;
    }
    u(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
  }
  function s(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          l(r.next(e));
        } catch (t) {
          i(t);
        }
      }
      function u(e) {
        try {
          l(r.throw(e));
        } catch (t) {
          i(t);
        }
      }
      function l(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(a, u);
      }
      l((r = r.apply(e, t || [])).next());
    });
  }
  function c(e, t) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function u(i) {
      return function (u) {
        return (function (i) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; a; )
            try {
              if (
                ((n = 1),
                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, { value: i[1], done: !1 };
                case 5:
                  a.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    (a.label = o[1]), (o = i);
                    break;
                  }
                  if (o && a.label < o[2]) {
                    (a.label = o[2]), a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              i = t.call(e, a);
            } catch (u) {
              (i = [6, u]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, u]);
      };
    }
  }
  function f(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length)
      return {
        next: function () {
          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
        }
      };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function d(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      a = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
    } catch (u) {
      o = { error: u };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return a;
  }
  function p(e, t) {
    for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
    return e;
  }
  function h(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  Error,
    "undefined" != typeof globalThis && globalThis,
    "undefined" != typeof window && window,
    "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
    "undefined" != typeof global && global;
  var y = (function () {
    function e(t, n) {
      var r;
      (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this._desc = t),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        "number" == typeof n
          ? (this.__NG_ELEMENT_ID__ = n)
          : void 0 !== n &&
            (this.ɵprov = {
              token: (r = { token: this, providedIn: n.providedIn || "root", factory: n.factory }).token,
              providedIn: r.providedIn || null,
              factory: r.factory,
              value: void 0
            });
    }
    return (
      (t = e),
      (n = [
        {
          key: "toString",
          value: function () {
            return "InjectionToken ".concat(this._desc);
          }
        }
      ]) && h(t.prototype, n),
      r && h(t, r),
      e
    );
    var t, n, r;
  })();
  Symbol;
  var w = {
      "ALT+P": "key-pen",
      "ALT+M": "key-mouse",
      "ALT+E": "key-eraser",
      "ALT+Z": "key-clear",
      "ALT+F": "key-focus",
      "ALT+H": "key-hide",
      "ALT+T": "key-tools",
      "ALT+W": "key-cam",
      "ALT+C": "key-highlight-clicks",
      "ALT+K": "key-click",
      "ALT+R": "key-rectangle",
      "ALT+S": "key-stickers",
      "ALT+X": "key-fireworks"
    },
    v = { 27: "ESC", 37: "LEFT", 38: "UP", 39: "RIGHT", 40: "DOWN" };
  !(function (e) {
    var t,
      n,
      r = {};
    try {
      for (var o = f(Object.entries(e)), i = o.next(); !i.done; i = o.next()) {
        var a = d(i.value, 2);
        r[a[1]] = a[0];
      }
    } catch (u) {
      t = { error: u };
    } finally {
      try {
        i && !i.done && (n = o.return) && n.call(o);
      } finally {
        if (t) throw t.error;
      }
    }
  })(w);
  var m = window.crypto,
    g = "castifyParentMsg",
    b = (function () {
      function e() {
        this._listeners = new Map();
      }
      return (
        (e.prototype._fire = function (e) {
          var t, n;
          try {
            for (var r = f(this._listeners.entries()), o = r.next(); !o.done; o = r.next()) {
              var i = o.value;
              i[0].call(i[1], e);
            }
          } catch (a) {
            t = { error: a };
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r);
            } finally {
              if (t) throw t.error;
            }
          }
        }),
        (e.prototype.addListener = function (e, t) {
          this._listeners.set(e, t);
        }),
        (e.prototype.removeListener = function (e) {
          this._listeners.delete(e);
        }),
        e
      );
    })(),
    k = (function () {
      function e() {
        if (o) throw new Error();
      }
      return (
        (e.prototype.post = function (e) {
          this._wrapMessage(e).then(function (e) {
            window.parent.postMessage(e, "*");
          });
        }),
        (e.prototype._wrapMessage = function (e) {
          return s(this, void 0, void 0, function () {
            return c(this, function (t) {
              return [2, { type: g, data: e }];
            });
          });
        }),
        e
      );
    })(),
    x = (function (e) {
      function t() {
        var t = e.call(this) || this;
        return window.addEventListener("message", t._onMessage.bind(t)), t;
      }
      return (
        l(t, e),
        (t.prototype._onMessage = function (e) {
          var t = this;
          Promise.resolve(this._unwrapMessage(e)).then(function (n) {
            n && ((n.source = e.source), t._fire(n));
          });
        }),
        (t.prototype._unwrapMessage = function (e) {
          var t = e.data;
          return t && t.type === g ? (e.stopImmediatePropagation(), e.stopPropagation(), (t = t.data)) : null;
        }),
        t
      );
    })(b),
    T = null;
  function _() {
    return (
      T ||
        (T = new Promise(function (e, t) {
          chrome.runtime.sendMessage({ type: "castifyDrawGetMsgKey" }, {}, function (n) {
            "plain" === n
              ? e(n)
              : n
              ? e(
                  (function (e) {
                    return m.subtle.importKey("jwk", e, { name: "AES-GCM" }, !0, ["encrypt", "decrypt"]);
                  })(n)
                )
              : t("getChromeKeyPromise failed");
          });
        })),
      T.catch(function (e) {
        console.error("getChromeKeyPromise failed", e);
      }),
      T
    );
  }
  var C = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t._encoder = new TextEncoder()), t;
      }
      return (
        l(t, e),
        (t.prototype._wrapMessage = function (t) {
          return s(this, void 0, void 0, function () {
            var n, r;
            return c(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (n = this._encoder),
                    [
                      4,
                      _().then(function (e) {
                        return "plain" === e
                          ? t
                          : (function (e, t) {
                              var n = window.crypto.getRandomValues(new Uint8Array(16)),
                                r = new Uint8Array(0);
                              return m.subtle
                                .encrypt({ name: "AES-GCM", iv: n, additionalData: r, tagLength: 128 }, t, e)
                                .then(function (e) {
                                  return [n, r, e];
                                });
                            })(n.encode(JSON.stringify(t)), e);
                      })
                    ]
                  );
                case 1:
                  return (r = o.sent()), [2, e.prototype._wrapMessage.call(this, r)];
              }
            });
          });
        }),
        t
      );
    })(k),
    L = r
      ? (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._decoder = new TextDecoder("utf8")), t;
          }
          return (
            l(t, e),
            (t.prototype._unwrapMessage = function (e) {
              return s(this, void 0, void 0, function () {
                var t, n;
                return c(this, function (r) {
                  return (t = x.prototype._unwrapMessage(e))
                    ? ((n = this._decoder),
                      [
                        2,
                        _().then(function (e) {
                          return "plain" === e
                            ? t
                            : (function (e, t) {
                                return m.subtle.decrypt({ name: "AES-GCM", iv: e[0], additionalData: e[1], tagLength: 128 }, t, e[2]);
                              })(t, e).then(function (e) {
                                return JSON.parse(n.decode(e));
                              });
                        })
                      ])
                    : [2, null];
                });
              });
            }),
            t
          );
        })(x)
      : x,
    M = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return l(t, e), t;
    })(r ? C : k),
    S = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return l(t, e), t;
    })(L);
  new y("EventCapture");
  var E = {
    move: new Set(["mousemove", "touchmove"]),
    start: new Set(["mousedown", "touchstart"]),
    end: new Set(["mouseup", "touchend"]),
    all: null
  };
  E.all = new Set(p(p(p([], d(E.start)), d(E.end)), d(E.move)));
  var A = window;
  A._castifyDrawInjected ||
    ((A._castifyDrawInjected = !0),
    (function () {
      if (window.top === window) throw new Error("usage error: only inject this in frames");
      (function (e, t, n) {
        var r,
          i = new Set(["mousedown", "touchstart", "mousemove", "touchmove", "mouseup", "touchend"]),
          a = new S();
        o || (r = new M()), (n = n || w);
        var u = new WeakMap();
        function l(e) {
          var t,
            n,
            o = { type: e.type, isTouchDevice: !1 };
          if (
            i.has(e.type) &&
            ((o.x = e.x),
            (o.y = e.y),
            e.targetCursor && (o.targetCursor = e.targetCursor),
            e.isTouchDevice && (o.isTouchDevice = e.isTouchDevice),
            e.touches)
          ) {
            o.touches = [];
            try {
              for (var a = f(e.touches), u = a.next(); !u.done; u = a.next()) {
                var l = u.value;
                o.touches.push({ clientX: l.clientX, clientY: l.clientY });
              }
            } catch (s) {
              t = { error: s };
            } finally {
              try {
                u && !u.done && (n = a.return) && n.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
          }
          r.post({ type: "event", data: o });
        }
        function s(t) {
          window.top === window ? e.publish(t.type, t) : l(t);
        }
        function c(e) {
          if (e.touches && e.touches.length) {
            var t = e.touches[0];
            (e.x = t.clientX), (e.y = t.clientY);
          }
          (e.isTouchDevice = !(!e.sourceCapabilities || !e.sourceCapabilities.firesTouchEvents)),
            (function (e) {
              var t = Date.now(),
                n = (function (e, t, n) {
                  if (void 0 === t || void 0 === n) return e;
                  for (var r = e; e && e.shadowRoot; ) {
                    var o = e.shadowRoot.elementFromPoint(t, n);
                    if (o === e) break;
                    (e = o) && (r = e);
                  }
                  return r;
                })(e.target, e.x, e.y);
              if (
                (e.target.tagName && e.target.tagName.startsWith("castify-draw-container")) ||
                (n.tagName && n.tagName.startsWith("castify-draw-container"))
              )
                e.targetCursor = n.style.cursor;
              else {
                if (u.has(n)) {
                  var r = u.get(n);
                  t - r.timestamp < 5e3 && (e.targetCursor = r.cursor);
                }
                if (!e.targetCursor) {
                  var o = null;
                  o || n === document || (o = window.getComputedStyle(n).cursor),
                    o || (o = "default"),
                    u.set(n, { cursor: o, timestamp: t }),
                    (e.targetCursor = o);
                }
              }
            })(e),
            s(e);
        }
        function d(e) {
          var t,
            r,
            o =
              n[
                ((t = e),
                (r = []),
                t.altKey && r.push("ALT"),
                t.ctrlKey && r.push("CTRL"),
                t.shiftKey && r.push("SHIFT"),
                r.push(v[t.keyCode] ? v[t.keyCode] : String.fromCharCode(t.keyCode).toUpperCase()),
                r.join("+"))
              ];
          o &&
            ((function (e, t) {
              void 0 === t && (t = !0), e.stopImmediatePropagation(), e.stopPropagation(), !1 !== t && e.preventDefault();
            })(e),
            e.repeat || s({ type: o }));
        }
        function p(e) {
          return e.endsWith("px") ? parseFloat(e.substr(0, e.length - 2)) : 0;
        }
        function h(t) {
          var n = t.data,
            r = (function (e) {
              var t,
                n,
                r = document.querySelectorAll("iframe");
              try {
                for (var o = f(Array.from(r)), i = o.next(); !i.done; i = o.next()) {
                  var a = i.value;
                  if (a.contentWindow === e) return a;
                }
              } catch (u) {
                t = { error: u };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
              return null;
            })(t.source);
          if (!r) return null;
          var o = r.getBoundingClientRect(),
            i = window.getComputedStyle(r),
            a = p(i.paddingLeft) + p(i.borderLeftWidth) + o.left,
            u = p(i.paddingTop) + p(i.borderTopWidth) + o.top;
          (n.x += a),
            (n.y += u),
            n.touches &&
              n.touches.forEach(function (e) {
                (e.clientX += a), (e.clientY += u);
              }),
            window.top === window ? e.publish(n.type, n) : l(n);
        }
        return {
          start: function () {
            var e, t;
            try {
              for (var r = f(i), o = r.next(); !o.done; o = r.next()) window.addEventListener(o.value, c, !0);
            } catch (u) {
              e = { error: u };
            } finally {
              try {
                o && !o.done && (t = r.return) && t.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
            Object.keys(n).length && window.addEventListener("keydown", d, !0), a && a.addListener(h);
          },
          dispose: function () {
            var e, t;
            try {
              for (var n = f(i), r = n.next(); !r.done; r = n.next()) window.removeEventListener(r.value, c, !0);
            } catch (o) {
              e = { error: o };
            } finally {
              try {
                r && !r.done && (t = n.return) && t.call(n);
              } finally {
                if (e) throw e.error;
              }
            }
          }
        };
      })().start(),
        (function () {
          if (o) throw new Error();
          var e = {},
            t = !1,
            r = (function () {
              var e = {},
                t = null,
                r = !1;
              return (
                (e.enable = function () {
                  r ||
                    ((r = !0),
                    t ||
                      (t = document.createElement("style")).appendChild(
                        document.createTextNode(
                          '\nhtml * {\n  cursor: {{default}} !important;\n}\nhtml ::ng-deep * {\n  cursor: inherit !important;\n}\n\nhtml ::ng-deep input,\nhtml ::ng-deep textarea {\n cursor: {{text}} !important;\n}\n\nhtml,\nhtml ::ng-deep input[type="button" i],\nhtml ::ng-deep input[type="submit" i],\nhtml ::ng-deep input[type="reset" i],\nhtml ::ng-deep input[type="file" i]::-webkit-file-upload-button,\nhtml ::ng-deep button,\nhtml ::ng-deep select,\nhtml ::ng-deep label,\nhtml ::ng-deep input::-webkit-inner-spin-button {\n  cursor: {{default}} !important;\n}\n\nhtml ::ng-deep a:-webkit-any-link,\nhtml ::ng-deep a:-webkit-any-link *,\nhtml ::ng-deep area {\n cursor: {{pointer}} !important;\n}\n'.replace(
                            /{{([^}]+)}}/g,
                            function (e, t) {
                              var r = n.none;
                              return r.url + " " + r.offsetX + " " + r.offsetY + ", " + t;
                            }
                          )
                        )
                      ),
                    a().then(function () {
                      var e = document.head;
                      e.contains(t) || e.insertBefore(t, e.firstElementChild);
                    }));
                }),
                (e.disable = function () {
                  r &&
                    ((r = !1),
                    a().then(function () {
                      t && document.head.contains(t) && document.head.removeChild(t);
                    }));
                }),
                e
              );
            })();
          function i(e) {
            return e && "castifyDrawCursorService" === e.type && (e.data ? r.enable() : r.disable()), !1;
          }
          return (
            (e.start = function () {
              t || (chrome.runtime.onMessage.addListener(i), (t = !0));
            }),
            (e.stop = function () {
              t && ((t = !1), chrome.runtime.onMessage.removeListener(i), r.disable());
            }),
            e
          );
        })().start();
    })());
})();
