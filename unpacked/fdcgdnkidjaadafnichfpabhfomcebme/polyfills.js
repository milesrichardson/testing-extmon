(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    2: function (t, e, n) {
      t.exports = n("hN/g");
    },
    "8oxB": function (t, e) {
      var n,
        r,
        o = (t.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : i;
        } catch (t) {
          n = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (t) {
          r = s;
        }
      })();
      var c,
        u = [],
        l = !1,
        h = -1;
      function f() {
        l && c && ((l = !1), c.length ? (u = c.concat(u)) : (h = -1), u.length && p());
      }
      function p() {
        if (!l) {
          var t = a(f);
          l = !0;
          for (var e = u.length; e; ) {
            for (c = u, u = []; ++h < e; ) c && c[h].run();
            (h = -1), (e = u.length);
          }
          (c = null),
            (l = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === s || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function g() {}
      (o.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new d(t, e)), 1 !== u.length || l || a(p);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = g),
        (o.addListener = g),
        (o.once = g),
        (o.off = g),
        (o.removeListener = g),
        (o.removeAllListeners = g),
        (o.emit = g),
        (o.prependListener = g),
        (o.prependOnceListener = g),
        (o.listeners = function (t) {
          return [];
        }),
        (o.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    H7XF: function (t, e, n) {
      "use strict";
      (e.byteLength = function (t) {
        var e = u(t),
          n = e[1];
        return (3 * (e[0] + n)) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            n,
            r = u(t),
            s = r[0],
            a = r[1],
            c = new i(
              (function (t, e, n) {
                return (3 * (e + n)) / 4 - n;
              })(0, s, a)
            ),
            l = 0,
            h = a > 0 ? s - 4 : s;
          for (n = 0; n < h; n += 4)
            (e = (o[t.charCodeAt(n)] << 18) | (o[t.charCodeAt(n + 1)] << 12) | (o[t.charCodeAt(n + 2)] << 6) | o[t.charCodeAt(n + 3)]),
              (c[l++] = (e >> 16) & 255),
              (c[l++] = (e >> 8) & 255),
              (c[l++] = 255 & e);
          return (
            2 === a && ((e = (o[t.charCodeAt(n)] << 2) | (o[t.charCodeAt(n + 1)] >> 4)), (c[l++] = 255 & e)),
            1 === a &&
              ((e = (o[t.charCodeAt(n)] << 10) | (o[t.charCodeAt(n + 1)] << 4) | (o[t.charCodeAt(n + 2)] >> 2)),
              (c[l++] = (e >> 8) & 255),
              (c[l++] = 255 & e)),
            c
          );
        }),
        (e.fromByteArray = function (t) {
          for (var e, n = t.length, o = n % 3, i = [], s = 0, a = n - o; s < a; s += 16383) i.push(l(t, s, s + 16383 > a ? a : s + 16383));
          return (
            1 === o
              ? i.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
              : 2 === o && i.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="),
            i.join("")
          );
        });
      for (
        var r = [],
          o = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          c = s.length;
        a < c;
        ++a
      )
        (r[a] = s[a]), (o[s.charCodeAt(a)] = a);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function l(t, e, n) {
        for (var o, i = [], s = e; s < n; s += 3)
          i.push(
            r[((o = ((t[s] << 16) & 16711680) + ((t[s + 1] << 8) & 65280) + (255 & t[s + 2])) >> 18) & 63] +
              r[(o >> 12) & 63] +
              r[(o >> 6) & 63] +
              r[63 & o]
          );
        return i.join("");
      }
      (o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63);
    },
    "hN/g": function (t, e, n) {
      "use strict";
      n.r(e), n("pDpN"), n("yLV6");
      var r = n("8oxB"),
        o = n("tjlA");
      (window.global = window), (window.Buffer = o.Buffer), (window.process = r);
    },
    "kVK+": function (t, e) {
      (e.read = function (t, e, n, r, o) {
        var i,
          s,
          a = 8 * o - r - 1,
          c = (1 << a) - 1,
          u = c >> 1,
          l = -7,
          h = n ? o - 1 : 0,
          f = n ? -1 : 1,
          p = t[e + h];
        for (h += f, i = p & ((1 << -l) - 1), p >>= -l, l += a; l > 0; i = 256 * i + t[e + h], h += f, l -= 8);
        for (s = i & ((1 << -l) - 1), i >>= -l, l += r; l > 0; s = 256 * s + t[e + h], h += f, l -= 8);
        if (0 === i) i = 1 - u;
        else {
          if (i === c) return s ? NaN : (1 / 0) * (p ? -1 : 1);
          (s += Math.pow(2, r)), (i -= u);
        }
        return (p ? -1 : 1) * s * Math.pow(2, i - r);
      }),
        (e.write = function (t, e, n, r, o, i) {
          var s,
            a,
            c,
            u = 8 * i - o - 1,
            l = (1 << u) - 1,
            h = l >> 1,
            f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = r ? 0 : i - 1,
            d = r ? 1 : -1,
            g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (s = l))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
                  (e += s + h >= 1 ? f / c : f * Math.pow(2, 1 - h)) * c >= 2 && (s++, (c /= 2)),
                  s + h >= l
                    ? ((a = 0), (s = l))
                    : s + h >= 1
                    ? ((a = (e * c - 1) * Math.pow(2, o)), (s += h))
                    : ((a = e * Math.pow(2, h - 1) * Math.pow(2, o)), (s = 0)));
            o >= 8;
            t[n + p] = 255 & a, p += d, a /= 256, o -= 8
          );
          for (s = (s << o) | a, u += o; u > 0; t[n + p] = 255 & s, p += d, s /= 256, u -= 8);
          t[n + p - d] |= 128 * g;
        });
    },
    pDpN: function (t, e, n) {
      var r, o;
      void 0 ===
        (o =
          "function" ==
          typeof (r = function () {
            "use strict";
            !(function (t) {
              const e = t.performance;
              function n(t) {
                e && e.mark && e.mark(t);
              }
              function r(t, n) {
                e && e.measure && e.measure(t, n);
              }
              n("Zone");
              const o = t.__Zone_symbol_prefix || "__zone_symbol__";
              function i(t) {
                return o + t;
              }
              const s = !0 === t[i("forceDuplicateZoneCheck")];
              if (t.Zone) {
                if (s || "function" != typeof t.Zone.__symbol__) throw new Error("Zone already loaded.");
                return t.Zone;
              }
              class a {
                constructor(t, e) {
                  (this._parent = t),
                    (this._name = e ? e.name || "unnamed" : "<root>"),
                    (this._properties = (e && e.properties) || {}),
                    (this._zoneDelegate = new u(this, this._parent && this._parent._zoneDelegate, e));
                }
                static assertZonePatched() {
                  if (t.Promise !== I.ZoneAwarePromise)
                    throw new Error(
                      "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                    );
                }
                static get root() {
                  let t = a.current;
                  for (; t.parent; ) t = t.parent;
                  return t;
                }
                static get current() {
                  return D.zone;
                }
                static get currentTask() {
                  return Z;
                }
                static __load_patch(e, o) {
                  if (I.hasOwnProperty(e)) {
                    if (s) throw Error("Already loaded patch: " + e);
                  } else if (!t["__Zone_disable_" + e]) {
                    const i = "Zone:" + e;
                    n(i), (I[e] = o(t, a, O)), r(i, i);
                  }
                }
                get parent() {
                  return this._parent;
                }
                get name() {
                  return this._name;
                }
                get(t) {
                  const e = this.getZoneWith(t);
                  if (e) return e._properties[t];
                }
                getZoneWith(t) {
                  let e = this;
                  for (; e; ) {
                    if (e._properties.hasOwnProperty(t)) return e;
                    e = e._parent;
                  }
                  return null;
                }
                fork(t) {
                  if (!t) throw new Error("ZoneSpec required!");
                  return this._zoneDelegate.fork(this, t);
                }
                wrap(t, e) {
                  if ("function" != typeof t) throw new Error("Expecting function got: " + t);
                  const n = this._zoneDelegate.intercept(this, t, e),
                    r = this;
                  return function () {
                    return r.runGuarded(n, this, arguments, e);
                  };
                }
                run(t, e, n, r) {
                  D = { parent: D, zone: this };
                  try {
                    return this._zoneDelegate.invoke(this, t, e, n, r);
                  } finally {
                    D = D.parent;
                  }
                }
                runGuarded(t, e = null, n, r) {
                  D = { parent: D, zone: this };
                  try {
                    try {
                      return this._zoneDelegate.invoke(this, t, e, n, r);
                    } catch (o) {
                      if (this._zoneDelegate.handleError(this, o)) throw o;
                    }
                  } finally {
                    D = D.parent;
                  }
                }
                runTask(t, e, n) {
                  if (t.zone != this)
                    throw new Error(
                      "A task can only be run in the zone of creation! (Creation: " + (t.zone || T).name + "; Execution: " + this.name + ")"
                    );
                  if (t.state === b && (t.type === P || t.type === C)) return;
                  const r = t.state != E;
                  r && t._transitionTo(E, _), t.runCount++;
                  const o = Z;
                  (Z = t), (D = { parent: D, zone: this });
                  try {
                    t.type == C && t.data && !t.data.isPeriodic && (t.cancelFn = void 0);
                    try {
                      return this._zoneDelegate.invokeTask(this, t, e, n);
                    } catch (i) {
                      if (this._zoneDelegate.handleError(this, i)) throw i;
                    }
                  } finally {
                    t.state !== b &&
                      t.state !== S &&
                      (t.type == P || (t.data && t.data.isPeriodic)
                        ? r && t._transitionTo(_, E)
                        : ((t.runCount = 0), this._updateTaskCount(t, -1), r && t._transitionTo(b, E, b))),
                      (D = D.parent),
                      (Z = o);
                  }
                }
                scheduleTask(t) {
                  if (t.zone && t.zone !== this) {
                    let e = this;
                    for (; e; ) {
                      if (e === t.zone)
                        throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);
                      e = e.parent;
                    }
                  }
                  t._transitionTo(w, b);
                  const e = [];
                  (t._zoneDelegates = e), (t._zone = this);
                  try {
                    t = this._zoneDelegate.scheduleTask(this, t);
                  } catch (n) {
                    throw (t._transitionTo(S, w, b), this._zoneDelegate.handleError(this, n), n);
                  }
                  return t._zoneDelegates === e && this._updateTaskCount(t, 1), t.state == w && t._transitionTo(_, w), t;
                }
                scheduleMicroTask(t, e, n, r) {
                  return this.scheduleTask(new l(A, t, e, n, r, void 0));
                }
                scheduleMacroTask(t, e, n, r, o) {
                  return this.scheduleTask(new l(C, t, e, n, r, o));
                }
                scheduleEventTask(t, e, n, r, o) {
                  return this.scheduleTask(new l(P, t, e, n, r, o));
                }
                cancelTask(t) {
                  if (t.zone != this)
                    throw new Error(
                      "A task can only be cancelled in the zone of creation! (Creation: " +
                        (t.zone || T).name +
                        "; Execution: " +
                        this.name +
                        ")"
                    );
                  t._transitionTo(k, _, E);
                  try {
                    this._zoneDelegate.cancelTask(this, t);
                  } catch (e) {
                    throw (t._transitionTo(S, k), this._zoneDelegate.handleError(this, e), e);
                  }
                  return this._updateTaskCount(t, -1), t._transitionTo(b, k), (t.runCount = 0), t;
                }
                _updateTaskCount(t, e) {
                  const n = t._zoneDelegates;
                  -1 == e && (t._zoneDelegates = null);
                  for (let r = 0; r < n.length; r++) n[r]._updateTaskCount(t.type, e);
                }
              }
              a.__symbol__ = i;
              const c = {
                name: "",
                onHasTask: (t, e, n, r) => t.hasTask(n, r),
                onScheduleTask: (t, e, n, r) => t.scheduleTask(n, r),
                onInvokeTask: (t, e, n, r, o, i) => t.invokeTask(n, r, o, i),
                onCancelTask: (t, e, n, r) => t.cancelTask(n, r)
              };
              class u {
                constructor(t, e, n) {
                  (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
                    (this.zone = t),
                    (this._parentDelegate = e),
                    (this._forkZS = n && (n && n.onFork ? n : e._forkZS)),
                    (this._forkDlgt = n && (n.onFork ? e : e._forkDlgt)),
                    (this._forkCurrZone = n && (n.onFork ? this.zone : e._forkCurrZone)),
                    (this._interceptZS = n && (n.onIntercept ? n : e._interceptZS)),
                    (this._interceptDlgt = n && (n.onIntercept ? e : e._interceptDlgt)),
                    (this._interceptCurrZone = n && (n.onIntercept ? this.zone : e._interceptCurrZone)),
                    (this._invokeZS = n && (n.onInvoke ? n : e._invokeZS)),
                    (this._invokeDlgt = n && (n.onInvoke ? e : e._invokeDlgt)),
                    (this._invokeCurrZone = n && (n.onInvoke ? this.zone : e._invokeCurrZone)),
                    (this._handleErrorZS = n && (n.onHandleError ? n : e._handleErrorZS)),
                    (this._handleErrorDlgt = n && (n.onHandleError ? e : e._handleErrorDlgt)),
                    (this._handleErrorCurrZone = n && (n.onHandleError ? this.zone : e._handleErrorCurrZone)),
                    (this._scheduleTaskZS = n && (n.onScheduleTask ? n : e._scheduleTaskZS)),
                    (this._scheduleTaskDlgt = n && (n.onScheduleTask ? e : e._scheduleTaskDlgt)),
                    (this._scheduleTaskCurrZone = n && (n.onScheduleTask ? this.zone : e._scheduleTaskCurrZone)),
                    (this._invokeTaskZS = n && (n.onInvokeTask ? n : e._invokeTaskZS)),
                    (this._invokeTaskDlgt = n && (n.onInvokeTask ? e : e._invokeTaskDlgt)),
                    (this._invokeTaskCurrZone = n && (n.onInvokeTask ? this.zone : e._invokeTaskCurrZone)),
                    (this._cancelTaskZS = n && (n.onCancelTask ? n : e._cancelTaskZS)),
                    (this._cancelTaskDlgt = n && (n.onCancelTask ? e : e._cancelTaskDlgt)),
                    (this._cancelTaskCurrZone = n && (n.onCancelTask ? this.zone : e._cancelTaskCurrZone)),
                    (this._hasTaskZS = null),
                    (this._hasTaskDlgt = null),
                    (this._hasTaskDlgtOwner = null),
                    (this._hasTaskCurrZone = null);
                  const r = n && n.onHasTask;
                  (r || (e && e._hasTaskZS)) &&
                    ((this._hasTaskZS = r ? n : c),
                    (this._hasTaskDlgt = e),
                    (this._hasTaskDlgtOwner = this),
                    (this._hasTaskCurrZone = t),
                    n.onScheduleTask ||
                      ((this._scheduleTaskZS = c), (this._scheduleTaskDlgt = e), (this._scheduleTaskCurrZone = this.zone)),
                    n.onInvokeTask || ((this._invokeTaskZS = c), (this._invokeTaskDlgt = e), (this._invokeTaskCurrZone = this.zone)),
                    n.onCancelTask || ((this._cancelTaskZS = c), (this._cancelTaskDlgt = e), (this._cancelTaskCurrZone = this.zone)));
                }
                fork(t, e) {
                  return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, t, e) : new a(t, e);
                }
                intercept(t, e, n) {
                  return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, t, e, n) : e;
                }
                invoke(t, e, n, r, o) {
                  return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, t, e, n, r, o) : e.apply(n, r);
                }
                handleError(t, e) {
                  return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, t, e);
                }
                scheduleTask(t, e) {
                  let n = e;
                  if (this._scheduleTaskZS)
                    this._hasTaskZS && n._zoneDelegates.push(this._hasTaskDlgtOwner),
                      (n = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, t, e)),
                      n || (n = e);
                  else if (e.scheduleFn) e.scheduleFn(e);
                  else {
                    if (e.type != A) throw new Error("Task is missing scheduleFn.");
                    v(e);
                  }
                  return n;
                }
                invokeTask(t, e, n, r) {
                  return this._invokeTaskZS
                    ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, t, e, n, r)
                    : e.callback.apply(n, r);
                }
                cancelTask(t, e) {
                  let n;
                  if (this._cancelTaskZS) n = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, t, e);
                  else {
                    if (!e.cancelFn) throw Error("Task is not cancelable");
                    n = e.cancelFn(e);
                  }
                  return n;
                }
                hasTask(t, e) {
                  try {
                    this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, t, e);
                  } catch (n) {
                    this.handleError(t, n);
                  }
                }
                _updateTaskCount(t, e) {
                  const n = this._taskCounts,
                    r = n[t],
                    o = (n[t] = r + e);
                  if (o < 0) throw new Error("More tasks executed then were scheduled.");
                  (0 != r && 0 != o) ||
                    this.hasTask(this.zone, {
                      microTask: n.microTask > 0,
                      macroTask: n.macroTask > 0,
                      eventTask: n.eventTask > 0,
                      change: t
                    });
                }
              }
              class l {
                constructor(e, n, r, o, i, s) {
                  if (
                    ((this._zone = null),
                    (this.runCount = 0),
                    (this._zoneDelegates = null),
                    (this._state = "notScheduled"),
                    (this.type = e),
                    (this.source = n),
                    (this.data = o),
                    (this.scheduleFn = i),
                    (this.cancelFn = s),
                    !r)
                  )
                    throw new Error("callback is not defined");
                  this.callback = r;
                  const a = this;
                  this.invoke =
                    e === P && o && o.useG
                      ? l.invokeTask
                      : function () {
                          return l.invokeTask.call(t, a, this, arguments);
                        };
                }
                static invokeTask(t, e, n) {
                  t || (t = this), z++;
                  try {
                    return t.runCount++, t.zone.runTask(t, e, n);
                  } finally {
                    1 == z && m(), z--;
                  }
                }
                get zone() {
                  return this._zone;
                }
                get state() {
                  return this._state;
                }
                cancelScheduleRequest() {
                  this._transitionTo(b, w);
                }
                _transitionTo(t, e, n) {
                  if (this._state !== e && this._state !== n)
                    throw new Error(
                      `${this.type} '${this.source}': can not transition to '${t}', expecting state '${e}'${
                        n ? " or '" + n + "'" : ""
                      }, was '${this._state}'.`
                    );
                  (this._state = t), t == b && (this._zoneDelegates = null);
                }
                toString() {
                  return this.data && void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this);
                }
                toJSON() {
                  return { type: this.type, state: this.state, source: this.source, zone: this.zone.name, runCount: this.runCount };
                }
              }
              const h = i("setTimeout"),
                f = i("Promise"),
                p = i("then");
              let d,
                g = [],
                y = !1;
              function v(e) {
                if (0 === z && 0 === g.length)
                  if ((d || (t[f] && (d = t[f].resolve(0))), d)) {
                    let t = d[p];
                    t || (t = d.then), t.call(d, m);
                  } else t[h](m, 0);
                e && g.push(e);
              }
              function m() {
                if (!y) {
                  for (y = !0; g.length; ) {
                    const e = g;
                    g = [];
                    for (let n = 0; n < e.length; n++) {
                      const r = e[n];
                      try {
                        r.zone.runTask(r, null, null);
                      } catch (t) {
                        O.onUnhandledError(t);
                      }
                    }
                  }
                  O.microtaskDrainDone(), (y = !1);
                }
              }
              const T = { name: "NO ZONE" },
                b = "notScheduled",
                w = "scheduling",
                _ = "scheduled",
                E = "running",
                k = "canceling",
                S = "unknown",
                A = "microTask",
                C = "macroTask",
                P = "eventTask",
                I = {},
                O = {
                  symbol: i,
                  currentZoneFrame: () => D,
                  onUnhandledError: x,
                  microtaskDrainDone: x,
                  scheduleMicroTask: v,
                  showUncaughtError: () => !a[i("ignoreConsoleErrorUncaughtError")],
                  patchEventTarget: () => [],
                  patchOnProperties: x,
                  patchMethod: () => x,
                  bindArguments: () => [],
                  patchThen: () => x,
                  patchMacroTask: () => x,
                  setNativePromise: (t) => {
                    t && "function" == typeof t.resolve && (d = t.resolve(0));
                  },
                  patchEventPrototype: () => x,
                  isIEOrEdge: () => !1,
                  getGlobalObjects: () => {},
                  ObjectDefineProperty: () => x,
                  ObjectGetOwnPropertyDescriptor: () => {},
                  ObjectCreate: () => {},
                  ArraySlice: () => [],
                  patchClass: () => x,
                  wrapWithCurrentZone: () => x,
                  filterProperties: () => [],
                  attachOriginToPatched: () => x,
                  _redefineProperty: () => x,
                  patchCallbacks: () => x
                };
              let D = { parent: null, zone: new a(null, null) },
                Z = null,
                z = 0;
              function x() {}
              r("Zone", "Zone"), (t.Zone = a);
            })(("undefined" != typeof window && window) || ("undefined" != typeof self && self) || global),
              Zone.__load_patch("ZoneAwarePromise", (t, e, n) => {
                const r = Object.getOwnPropertyDescriptor,
                  o = Object.defineProperty,
                  i = n.symbol,
                  s = [],
                  a = !0 === t[i("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                  c = i("Promise"),
                  u = i("then");
                (n.onUnhandledError = (t) => {
                  if (n.showUncaughtError()) {
                    const e = t && t.rejection;
                    e
                      ? console.error(
                          "Unhandled Promise rejection:",
                          e instanceof Error ? e.message : e,
                          "; Zone:",
                          t.zone.name,
                          "; Task:",
                          t.task && t.task.source,
                          "; Value:",
                          e,
                          e instanceof Error ? e.stack : void 0
                        )
                      : console.error(t);
                  }
                }),
                  (n.microtaskDrainDone = () => {
                    for (; s.length; ) {
                      const e = s.shift();
                      try {
                        e.zone.runGuarded(() => {
                          throw e;
                        });
                      } catch (t) {
                        h(t);
                      }
                    }
                  });
                const l = i("unhandledPromiseRejectionHandler");
                function h(t) {
                  n.onUnhandledError(t);
                  try {
                    const n = e[l];
                    "function" == typeof n && n.call(this, t);
                  } catch (r) {}
                }
                function f(t) {
                  return t && t.then;
                }
                function p(t) {
                  return t;
                }
                function d(t) {
                  return C.reject(t);
                }
                const g = i("state"),
                  y = i("value"),
                  v = i("finally"),
                  m = i("parentPromiseValue"),
                  T = i("parentPromiseState");
                function b(t, e) {
                  return (n) => {
                    try {
                      _(t, e, n);
                    } catch (r) {
                      _(t, !1, r);
                    }
                  };
                }
                const w = i("currentTaskTrace");
                function _(t, r, i) {
                  const c = (function () {
                    let t = !1;
                    return function (e) {
                      return function () {
                        t || ((t = !0), e.apply(null, arguments));
                      };
                    };
                  })();
                  if (t === i) throw new TypeError("Promise resolved with itself");
                  if (null === t[g]) {
                    let h = null;
                    try {
                      ("object" != typeof i && "function" != typeof i) || (h = i && i.then);
                    } catch (l) {
                      return (
                        c(() => {
                          _(t, !1, l);
                        })(),
                        t
                      );
                    }
                    if (!1 !== r && i instanceof C && i.hasOwnProperty(g) && i.hasOwnProperty(y) && null !== i[g]) k(i), _(t, i[g], i[y]);
                    else if (!1 !== r && "function" == typeof h)
                      try {
                        h.call(i, c(b(t, r)), c(b(t, !1)));
                      } catch (l) {
                        c(() => {
                          _(t, !1, l);
                        })();
                      }
                    else {
                      t[g] = r;
                      const c = t[y];
                      if (((t[y] = i), t[v] === v && !0 === r && ((t[g] = t[T]), (t[y] = t[m])), !1 === r && i instanceof Error)) {
                        const t = e.currentTask && e.currentTask.data && e.currentTask.data.__creationTrace__;
                        t && o(i, w, { configurable: !0, enumerable: !1, writable: !0, value: t });
                      }
                      for (let e = 0; e < c.length; ) S(t, c[e++], c[e++], c[e++], c[e++]);
                      if (0 == c.length && 0 == r) {
                        t[g] = 0;
                        let r = i;
                        if (!a)
                          try {
                            throw new Error(
                              "Uncaught (in promise): " +
                                ((u = i) && u.toString === Object.prototype.toString
                                  ? ((u.constructor && u.constructor.name) || "") + ": " + JSON.stringify(u)
                                  : u
                                  ? u.toString()
                                  : Object.prototype.toString.call(u)) +
                                (i && i.stack ? "\n" + i.stack : "")
                            );
                          } catch (l) {
                            r = l;
                          }
                        (r.rejection = i),
                          (r.promise = t),
                          (r.zone = e.current),
                          (r.task = e.currentTask),
                          s.push(r),
                          n.scheduleMicroTask();
                      }
                    }
                  }
                  var u;
                  return t;
                }
                const E = i("rejectionHandledHandler");
                function k(t) {
                  if (0 === t[g]) {
                    try {
                      const n = e[E];
                      n && "function" == typeof n && n.call(this, { rejection: t[y], promise: t });
                    } catch (n) {}
                    t[g] = !1;
                    for (let e = 0; e < s.length; e++) t === s[e].promise && s.splice(e, 1);
                  }
                }
                function S(t, e, n, r, o) {
                  k(t);
                  const i = t[g],
                    s = i ? ("function" == typeof r ? r : p) : "function" == typeof o ? o : d;
                  e.scheduleMicroTask(
                    "Promise.then",
                    () => {
                      try {
                        const r = t[y],
                          o = !!n && v === n[v];
                        o && ((n[m] = r), (n[T] = i));
                        const a = e.run(s, void 0, o && s !== d && s !== p ? [] : [r]);
                        _(n, !0, a);
                      } catch (r) {
                        _(n, !1, r);
                      }
                    },
                    n
                  );
                }
                const A = function () {};
                class C {
                  static toString() {
                    return "function ZoneAwarePromise() { [native code] }";
                  }
                  static resolve(t) {
                    return _(new this(null), !0, t);
                  }
                  static reject(t) {
                    return _(new this(null), !1, t);
                  }
                  static race(t) {
                    let e,
                      n,
                      r = new this((t, r) => {
                        (e = t), (n = r);
                      });
                    function o(t) {
                      e(t);
                    }
                    function i(t) {
                      n(t);
                    }
                    for (let s of t) f(s) || (s = this.resolve(s)), s.then(o, i);
                    return r;
                  }
                  static all(t) {
                    return C.allWithCallback(t);
                  }
                  static allSettled(t) {
                    return (this && this.prototype instanceof C ? this : C).allWithCallback(t, {
                      thenCallback: (t) => ({ status: "fulfilled", value: t }),
                      errorCallback: (t) => ({ status: "rejected", reason: t })
                    });
                  }
                  static allWithCallback(t, e) {
                    let n,
                      r,
                      o = new this((t, e) => {
                        (n = t), (r = e);
                      }),
                      i = 2,
                      s = 0;
                    const a = [];
                    for (let u of t) {
                      f(u) || (u = this.resolve(u));
                      const t = s;
                      try {
                        u.then(
                          (r) => {
                            (a[t] = e ? e.thenCallback(r) : r), i--, 0 === i && n(a);
                          },
                          (o) => {
                            e ? ((a[t] = e.errorCallback(o)), i--, 0 === i && n(a)) : r(o);
                          }
                        );
                      } catch (c) {
                        r(c);
                      }
                      i++, s++;
                    }
                    return (i -= 2), 0 === i && n(a), o;
                  }
                  constructor(t) {
                    const e = this;
                    if (!(e instanceof C)) throw new Error("Must be an instanceof Promise.");
                    (e[g] = null), (e[y] = []);
                    try {
                      t && t(b(e, !0), b(e, !1));
                    } catch (n) {
                      _(e, !1, n);
                    }
                  }
                  get [Symbol.toStringTag]() {
                    return "Promise";
                  }
                  get [Symbol.species]() {
                    return C;
                  }
                  then(t, n) {
                    let r = this.constructor[Symbol.species];
                    (r && "function" == typeof r) || (r = this.constructor || C);
                    const o = new r(A),
                      i = e.current;
                    return null == this[g] ? this[y].push(i, o, t, n) : S(this, i, o, t, n), o;
                  }
                  catch(t) {
                    return this.then(null, t);
                  }
                  finally(t) {
                    let n = this.constructor[Symbol.species];
                    (n && "function" == typeof n) || (n = C);
                    const r = new n(A);
                    r[v] = v;
                    const o = e.current;
                    return null == this[g] ? this[y].push(o, r, t, t) : S(this, o, r, t, t), r;
                  }
                }
                (C.resolve = C.resolve), (C.reject = C.reject), (C.race = C.race), (C.all = C.all);
                const P = (t[c] = t.Promise),
                  I = e.__symbol__("ZoneAwarePromise");
                let O = r(t, "Promise");
                (O && !O.configurable) ||
                  (O && delete O.writable,
                  O && delete O.value,
                  O || (O = { configurable: !0, enumerable: !0 }),
                  (O.get = function () {
                    return t[I] ? t[I] : t[c];
                  }),
                  (O.set = function (e) {
                    e === C ? (t[I] = e) : ((t[c] = e), e.prototype[u] || Z(e), n.setNativePromise(e));
                  }),
                  o(t, "Promise", O)),
                  (t.Promise = C);
                const D = i("thenPatched");
                function Z(t) {
                  const e = t.prototype,
                    n = r(e, "then");
                  if (n && (!1 === n.writable || !n.configurable)) return;
                  const o = e.then;
                  (e[u] = o),
                    (t.prototype.then = function (t, e) {
                      return new C((t, e) => {
                        o.call(this, t, e);
                      }).then(t, e);
                    }),
                    (t[D] = !0);
                }
                if (((n.patchThen = Z), P)) {
                  Z(P);
                  const e = t.fetch;
                  "function" == typeof e &&
                    ((t[n.symbol("fetch")] = e),
                    (t.fetch =
                      ((z = e),
                      function () {
                        let t = z.apply(this, arguments);
                        if (t instanceof C) return t;
                        let e = t.constructor;
                        return e[D] || Z(e), t;
                      })));
                }
                var z;
                return (Promise[e.__symbol__("uncaughtPromiseErrors")] = s), C;
              });
            const t = Object.getOwnPropertyDescriptor,
              e = Object.defineProperty,
              n = Object.getPrototypeOf,
              r = Object.create,
              o = Array.prototype.slice,
              i = Zone.__symbol__("addEventListener"),
              s = Zone.__symbol__("removeEventListener"),
              a = Zone.__symbol__("");
            function c(t, e) {
              return Zone.current.wrap(t, e);
            }
            function u(t, e, n, r, o) {
              return Zone.current.scheduleMacroTask(t, e, n, r, o);
            }
            const l = Zone.__symbol__,
              h = "undefined" != typeof window,
              f = h ? window : void 0,
              p = (h && f) || ("object" == typeof self && self) || global,
              d = [null];
            function g(t, e) {
              for (let n = t.length - 1; n >= 0; n--) "function" == typeof t[n] && (t[n] = c(t[n], e + "_" + n));
              return t;
            }
            function y(t) {
              return !t || (!1 !== t.writable && !("function" == typeof t.get && void 0 === t.set));
            }
            const v = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
              m = !("nw" in p) && void 0 !== p.process && "[object process]" === {}.toString.call(p.process),
              T = !m && !v && !(!h || !f.HTMLElement),
              b = void 0 !== p.process && "[object process]" === {}.toString.call(p.process) && !v && !(!h || !f.HTMLElement),
              w = {},
              _ = function (t) {
                if (!(t = t || p.event)) return;
                let e = w[t.type];
                e || (e = w[t.type] = l("ON_PROPERTY" + t.type));
                const n = this || t.target || p,
                  r = n[e];
                let o;
                if (T && n === f && "error" === t.type) {
                  const e = t;
                  (o = r && r.call(this, e.message, e.filename, e.lineno, e.colno, e.error)), !0 === o && t.preventDefault();
                } else (o = r && r.apply(this, arguments)), null == o || o || t.preventDefault();
                return o;
              };
            function E(n, r, o) {
              let i = t(n, r);
              if ((!i && o && t(o, r) && (i = { enumerable: !0, configurable: !0 }), !i || !i.configurable)) return;
              const s = l("on" + r + "patched");
              if (n.hasOwnProperty(s) && n[s]) return;
              delete i.writable, delete i.value;
              const a = i.get,
                c = i.set,
                u = r.substr(2);
              let h = w[u];
              h || (h = w[u] = l("ON_PROPERTY" + u)),
                (i.set = function (t) {
                  let e = this;
                  e || n !== p || (e = p),
                    e &&
                      (e[h] && e.removeEventListener(u, _),
                      c && c.apply(e, d),
                      "function" == typeof t ? ((e[h] = t), e.addEventListener(u, _, !1)) : (e[h] = null));
                }),
                (i.get = function () {
                  let t = this;
                  if ((t || n !== p || (t = p), !t)) return null;
                  const e = t[h];
                  if (e) return e;
                  if (a) {
                    let e = a && a.call(this);
                    if (e) return i.set.call(this, e), "function" == typeof t.removeAttribute && t.removeAttribute(r), e;
                  }
                  return null;
                }),
                e(n, r, i),
                (n[s] = !0);
            }
            function k(t, e, n) {
              if (e) for (let r = 0; r < e.length; r++) E(t, "on" + e[r], n);
              else {
                const e = [];
                for (const n in t) "on" == n.substr(0, 2) && e.push(n);
                for (let r = 0; r < e.length; r++) E(t, e[r], n);
              }
            }
            const S = l("originalInstance");
            function A(t) {
              const n = p[t];
              if (!n) return;
              (p[l(t)] = n),
                (p[t] = function () {
                  const e = g(arguments, t);
                  switch (e.length) {
                    case 0:
                      this[S] = new n();
                      break;
                    case 1:
                      this[S] = new n(e[0]);
                      break;
                    case 2:
                      this[S] = new n(e[0], e[1]);
                      break;
                    case 3:
                      this[S] = new n(e[0], e[1], e[2]);
                      break;
                    case 4:
                      this[S] = new n(e[0], e[1], e[2], e[3]);
                      break;
                    default:
                      throw new Error("Arg list too long.");
                  }
                }),
                I(p[t], n);
              const r = new n(function () {});
              let o;
              for (o in r)
                ("XMLHttpRequest" === t && "responseBlob" === o) ||
                  (function (n) {
                    "function" == typeof r[n]
                      ? (p[t].prototype[n] = function () {
                          return this[S][n].apply(this[S], arguments);
                        })
                      : e(p[t].prototype, n, {
                          set: function (e) {
                            "function" == typeof e ? ((this[S][n] = c(e, t + "." + n)), I(this[S][n], e)) : (this[S][n] = e);
                          },
                          get: function () {
                            return this[S][n];
                          }
                        });
                  })(o);
              for (o in n) "prototype" !== o && n.hasOwnProperty(o) && (p[t][o] = n[o]);
            }
            function C(e, r, o) {
              let i = e;
              for (; i && !i.hasOwnProperty(r); ) i = n(i);
              !i && e[r] && (i = e);
              const s = l(r);
              let a = null;
              if (i && !(a = i[s]) && ((a = i[s] = i[r]), y(i && t(i, r)))) {
                const t = o(a, s, r);
                (i[r] = function () {
                  return t(this, arguments);
                }),
                  I(i[r], a);
              }
              return a;
            }
            function P(t, e, n) {
              let r = null;
              function o(t) {
                const e = t.data;
                return (
                  (e.args[e.cbIdx] = function () {
                    t.invoke.apply(this, arguments);
                  }),
                  r.apply(e.target, e.args),
                  t
                );
              }
              r = C(
                t,
                e,
                (t) =>
                  function (e, r) {
                    const i = n(e, r);
                    return i.cbIdx >= 0 && "function" == typeof r[i.cbIdx] ? u(i.name, r[i.cbIdx], i, o) : t.apply(e, r);
                  }
              );
            }
            function I(t, e) {
              t[l("OriginalDelegate")] = e;
            }
            let O = !1,
              D = !1;
            function Z() {
              try {
                const t = f.navigator.userAgent;
                if (-1 !== t.indexOf("MSIE ") || -1 !== t.indexOf("Trident/")) return !0;
              } catch (t) {}
              return !1;
            }
            function z() {
              if (O) return D;
              O = !0;
              try {
                const t = f.navigator.userAgent;
                (-1 === t.indexOf("MSIE ") && -1 === t.indexOf("Trident/") && -1 === t.indexOf("Edge/")) || (D = !0);
              } catch (t) {}
              return D;
            }
            Zone.__load_patch("toString", (t) => {
              const e = Function.prototype.toString,
                n = l("OriginalDelegate"),
                r = l("Promise"),
                o = l("Error"),
                i = function () {
                  if ("function" == typeof this) {
                    const i = this[n];
                    if (i) return "function" == typeof i ? e.call(i) : Object.prototype.toString.call(i);
                    if (this === Promise) {
                      const n = t[r];
                      if (n) return e.call(n);
                    }
                    if (this === Error) {
                      const n = t[o];
                      if (n) return e.call(n);
                    }
                  }
                  return e.call(this);
                };
              (i[n] = e), (Function.prototype.toString = i);
              const s = Object.prototype.toString;
              Object.prototype.toString = function () {
                return this instanceof Promise ? "[object Promise]" : s.call(this);
              };
            });
            let x = !1;
            if ("undefined" != typeof window)
              try {
                const t = Object.defineProperty({}, "passive", {
                  get: function () {
                    x = !0;
                  }
                });
                window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
              } catch (at) {
                x = !1;
              }
            const R = { useG: !0 },
              L = {},
              B = {},
              M = new RegExp("^" + a + "(\\w+)(true|false)$"),
              j = l("propagationStopped");
            function N(t, e) {
              const n = (e ? e(t) : t) + "false",
                r = (e ? e(t) : t) + "true",
                o = a + n,
                i = a + r;
              (L[t] = {}), (L[t].false = o), (L[t].true = i);
            }
            function U(t, e, r) {
              const o = (r && r.add) || "addEventListener",
                i = (r && r.rm) || "removeEventListener",
                s = (r && r.listeners) || "eventListeners",
                c = (r && r.rmAll) || "removeAllListeners",
                u = l(o),
                h = "." + o + ":",
                f = function (t, e, n) {
                  if (t.isRemoved) return;
                  const r = t.callback;
                  "object" == typeof r && r.handleEvent && ((t.callback = (t) => r.handleEvent(t)), (t.originalDelegate = r)),
                    t.invoke(t, e, [n]);
                  const o = t.options;
                  o && "object" == typeof o && o.once && e[i].call(e, n.type, t.originalDelegate ? t.originalDelegate : t.callback, o);
                },
                p = function (e) {
                  if (!(e = e || t.event)) return;
                  const n = this || e.target || t,
                    r = n[L[e.type].false];
                  if (r)
                    if (1 === r.length) f(r[0], n, e);
                    else {
                      const t = r.slice();
                      for (let r = 0; r < t.length && (!e || !0 !== e[j]); r++) f(t[r], n, e);
                    }
                },
                d = function (e) {
                  if (!(e = e || t.event)) return;
                  const n = this || e.target || t,
                    r = n[L[e.type].true];
                  if (r)
                    if (1 === r.length) f(r[0], n, e);
                    else {
                      const t = r.slice();
                      for (let r = 0; r < t.length && (!e || !0 !== e[j]); r++) f(t[r], n, e);
                    }
                };
              function g(e, r) {
                if (!e) return !1;
                let f = !0;
                r && void 0 !== r.useG && (f = r.useG);
                const g = r && r.vh;
                let y = !0;
                r && void 0 !== r.chkDup && (y = r.chkDup);
                let v = !1;
                r && void 0 !== r.rt && (v = r.rt);
                let T = e;
                for (; T && !T.hasOwnProperty(o); ) T = n(T);
                if ((!T && e[o] && (T = e), !T)) return !1;
                if (T[u]) return !1;
                const b = r && r.eventNameToString,
                  w = {},
                  _ = (T[u] = T[o]),
                  E = (T[l(i)] = T[i]),
                  k = (T[l(s)] = T[s]),
                  S = (T[l(c)] = T[c]);
                let A;
                function C(t, e) {
                  return !x && "object" == typeof t && t
                    ? !!t.capture
                    : x && e
                    ? "boolean" == typeof t
                      ? { capture: t, passive: !0 }
                      : t
                      ? "object" == typeof t && !1 !== t.passive
                        ? Object.assign(Object.assign({}, t), { passive: !0 })
                        : t
                      : { passive: !0 }
                    : t;
                }
                r && r.prepend && (A = T[l(r.prepend)] = T[r.prepend]);
                const P = f
                    ? function (t) {
                        if (!w.isExisting) return _.call(w.target, w.eventName, w.capture ? d : p, w.options);
                      }
                    : function (t) {
                        return _.call(w.target, w.eventName, t.invoke, w.options);
                      },
                  O = f
                    ? function (t) {
                        if (!t.isRemoved) {
                          const e = L[t.eventName];
                          let n;
                          e && (n = e[t.capture ? "true" : "false"]);
                          const r = n && t.target[n];
                          if (r)
                            for (let o = 0; o < r.length; o++)
                              if (r[o] === t) {
                                r.splice(o, 1), (t.isRemoved = !0), 0 === r.length && ((t.allRemoved = !0), (t.target[n] = null));
                                break;
                              }
                        }
                        if (t.allRemoved) return E.call(t.target, t.eventName, t.capture ? d : p, t.options);
                      }
                    : function (t) {
                        return E.call(t.target, t.eventName, t.invoke, t.options);
                      },
                  D =
                    r && r.diff
                      ? r.diff
                      : function (t, e) {
                          const n = typeof e;
                          return ("function" === n && t.callback === e) || ("object" === n && t.originalDelegate === e);
                        },
                  Z = Zone[l("BLACK_LISTED_EVENTS")],
                  z = t[l("PASSIVE_EVENTS")],
                  j = function (e, n, o, i, s = !1, a = !1) {
                    return function () {
                      const c = this || t;
                      let u = arguments[0];
                      r && r.transferEventName && (u = r.transferEventName(u));
                      let l = arguments[1];
                      if (!l) return e.apply(this, arguments);
                      if (m && "uncaughtException" === u) return e.apply(this, arguments);
                      let h = !1;
                      if ("function" != typeof l) {
                        if (!l.handleEvent) return e.apply(this, arguments);
                        h = !0;
                      }
                      if (g && !g(e, l, c, arguments)) return;
                      const p = x && !!z && -1 !== z.indexOf(u),
                        d = C(arguments[2], p);
                      if (Z) for (let t = 0; t < Z.length; t++) if (u === Z[t]) return p ? e.call(c, u, l, d) : e.apply(this, arguments);
                      const v = !!d && ("boolean" == typeof d || d.capture),
                        T = !(!d || "object" != typeof d) && d.once,
                        _ = Zone.current;
                      let E = L[u];
                      E || (N(u, b), (E = L[u]));
                      const k = E[v ? "true" : "false"];
                      let S,
                        A = c[k],
                        P = !1;
                      if (A) {
                        if (((P = !0), y)) for (let t = 0; t < A.length; t++) if (D(A[t], l)) return;
                      } else A = c[k] = [];
                      const I = c.constructor.name,
                        O = B[I];
                      O && (S = O[u]),
                        S || (S = I + n + (b ? b(u) : u)),
                        (w.options = d),
                        T && (w.options.once = !1),
                        (w.target = c),
                        (w.capture = v),
                        (w.eventName = u),
                        (w.isExisting = P);
                      const M = f ? R : void 0;
                      M && (M.taskData = w);
                      const j = _.scheduleEventTask(S, l, M, o, i);
                      return (
                        (w.target = null),
                        M && (M.taskData = null),
                        T && (d.once = !0),
                        (x || "boolean" != typeof j.options) && (j.options = d),
                        (j.target = c),
                        (j.capture = v),
                        (j.eventName = u),
                        h && (j.originalDelegate = l),
                        a ? A.unshift(j) : A.push(j),
                        s ? c : void 0
                      );
                    };
                  };
                return (
                  (T[o] = j(_, h, P, O, v)),
                  A &&
                    (T.prependListener = j(
                      A,
                      ".prependListener:",
                      function (t) {
                        return A.call(w.target, w.eventName, t.invoke, w.options);
                      },
                      O,
                      v,
                      !0
                    )),
                  (T[i] = function () {
                    const e = this || t;
                    let n = arguments[0];
                    r && r.transferEventName && (n = r.transferEventName(n));
                    const o = arguments[2],
                      i = !!o && ("boolean" == typeof o || o.capture),
                      s = arguments[1];
                    if (!s) return E.apply(this, arguments);
                    if (g && !g(E, s, e, arguments)) return;
                    const c = L[n];
                    let u;
                    c && (u = c[i ? "true" : "false"]);
                    const l = u && e[u];
                    if (l)
                      for (let t = 0; t < l.length; t++) {
                        const r = l[t];
                        if (D(r, s))
                          return (
                            l.splice(t, 1),
                            (r.isRemoved = !0),
                            0 === l.length &&
                              ((r.allRemoved = !0), (e[u] = null), "string" == typeof n) &&
                              (e[a + "ON_PROPERTY" + n] = null),
                            r.zone.cancelTask(r),
                            v ? e : void 0
                          );
                      }
                    return E.apply(this, arguments);
                  }),
                  (T[s] = function () {
                    const e = this || t;
                    let n = arguments[0];
                    r && r.transferEventName && (n = r.transferEventName(n));
                    const o = [],
                      i = F(e, b ? b(n) : n);
                    for (let t = 0; t < i.length; t++) {
                      const e = i[t];
                      o.push(e.originalDelegate ? e.originalDelegate : e.callback);
                    }
                    return o;
                  }),
                  (T[c] = function () {
                    const e = this || t;
                    let n = arguments[0];
                    if (n) {
                      r && r.transferEventName && (n = r.transferEventName(n));
                      const t = L[n];
                      if (t) {
                        const r = e[t.false],
                          o = e[t.true];
                        if (r) {
                          const t = r.slice();
                          for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            this[i].call(this, n, r.originalDelegate ? r.originalDelegate : r.callback, r.options);
                          }
                        }
                        if (o) {
                          const t = o.slice();
                          for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            this[i].call(this, n, r.originalDelegate ? r.originalDelegate : r.callback, r.options);
                          }
                        }
                      }
                    } else {
                      const t = Object.keys(e);
                      for (let e = 0; e < t.length; e++) {
                        const n = M.exec(t[e]);
                        let r = n && n[1];
                        r && "removeListener" !== r && this[c].call(this, r);
                      }
                      this[c].call(this, "removeListener");
                    }
                    if (v) return this;
                  }),
                  I(T[o], _),
                  I(T[i], E),
                  S && I(T[c], S),
                  k && I(T[s], k),
                  !0
                );
              }
              let y = [];
              for (let n = 0; n < e.length; n++) y[n] = g(e[n], r);
              return y;
            }
            function F(t, e) {
              if (!e) {
                const n = [];
                for (let r in t) {
                  const o = M.exec(r);
                  let i = o && o[1];
                  if (i && (!e || i === e)) {
                    const e = t[r];
                    if (e) for (let t = 0; t < e.length; t++) n.push(e[t]);
                  }
                }
                return n;
              }
              let n = L[e];
              n || (N(e), (n = L[e]));
              const r = t[n.false],
                o = t[n.true];
              return r ? (o ? r.concat(o) : r.slice()) : o ? o.slice() : [];
            }
            function H(t, e) {
              const n = t.Event;
              n &&
                n.prototype &&
                e.patchMethod(
                  n.prototype,
                  "stopImmediatePropagation",
                  (t) =>
                    function (e, n) {
                      (e[j] = !0), t && t.apply(e, n);
                    }
                );
            }
            function X(t, e, n, r, o) {
              const i = Zone.__symbol__(r);
              if (e[i]) return;
              const s = (e[i] = e[r]);
              (e[r] = function (i, a, c) {
                return (
                  a &&
                    a.prototype &&
                    o.forEach(function (e) {
                      const o = `${n}.${r}::` + e,
                        i = a.prototype;
                      if (i.hasOwnProperty(e)) {
                        const n = t.ObjectGetOwnPropertyDescriptor(i, e);
                        n && n.value
                          ? ((n.value = t.wrapWithCurrentZone(n.value, o)), t._redefineProperty(a.prototype, e, n))
                          : i[e] && (i[e] = t.wrapWithCurrentZone(i[e], o));
                      } else i[e] && (i[e] = t.wrapWithCurrentZone(i[e], o));
                    }),
                  s.call(e, i, a, c)
                );
              }),
                t.attachOriginToPatched(e[r], s);
            }
            const q = [
                "absolutedeviceorientation",
                "afterinput",
                "afterprint",
                "appinstalled",
                "beforeinstallprompt",
                "beforeprint",
                "beforeunload",
                "devicelight",
                "devicemotion",
                "deviceorientation",
                "deviceorientationabsolute",
                "deviceproximity",
                "hashchange",
                "languagechange",
                "message",
                "mozbeforepaint",
                "offline",
                "online",
                "paint",
                "pageshow",
                "pagehide",
                "popstate",
                "rejectionhandled",
                "storage",
                "unhandledrejection",
                "unload",
                "userproximity",
                "vrdisplayconnected",
                "vrdisplaydisconnected",
                "vrdisplaypresentchange"
              ],
              W = ["encrypted", "waitingforkey", "msneedkey", "mozinterruptbegin", "mozinterruptend"],
              Y = ["load"],
              V = ["blur", "error", "focus", "load", "resize", "scroll", "messageerror"],
              G = ["bounce", "finish", "start"],
              $ = ["loadstart", "progress", "abort", "error", "load", "progress", "timeout", "loadend", "readystatechange"],
              J = ["upgradeneeded", "complete", "abort", "success", "error", "blocked", "versionchange", "close"],
              K = ["close", "error", "open", "message"],
              Q = ["error", "message"],
              tt = [
                "abort",
                "animationcancel",
                "animationend",
                "animationiteration",
                "auxclick",
                "beforeinput",
                "blur",
                "cancel",
                "canplay",
                "canplaythrough",
                "change",
                "compositionstart",
                "compositionupdate",
                "compositionend",
                "cuechange",
                "click",
                "close",
                "contextmenu",
                "curechange",
                "dblclick",
                "drag",
                "dragend",
                "dragenter",
                "dragexit",
                "dragleave",
                "dragover",
                "drop",
                "durationchange",
                "emptied",
                "ended",
                "error",
                "focus",
                "focusin",
                "focusout",
                "gotpointercapture",
                "input",
                "invalid",
                "keydown",
                "keypress",
                "keyup",
                "load",
                "loadstart",
                "loadeddata",
                "loadedmetadata",
                "lostpointercapture",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseout",
                "mouseover",
                "mouseup",
                "mousewheel",
                "orientationchange",
                "pause",
                "play",
                "playing",
                "pointercancel",
                "pointerdown",
                "pointerenter",
                "pointerleave",
                "pointerlockchange",
                "mozpointerlockchange",
                "webkitpointerlockerchange",
                "pointerlockerror",
                "mozpointerlockerror",
                "webkitpointerlockerror",
                "pointermove",
                "pointout",
                "pointerover",
                "pointerup",
                "progress",
                "ratechange",
                "reset",
                "resize",
                "scroll",
                "seeked",
                "seeking",
                "select",
                "selectionchange",
                "selectstart",
                "show",
                "sort",
                "stalled",
                "submit",
                "suspend",
                "timeupdate",
                "volumechange",
                "touchcancel",
                "touchmove",
                "touchstart",
                "touchend",
                "transitioncancel",
                "transitionend",
                "waiting",
                "wheel"
              ].concat(
                ["webglcontextrestored", "webglcontextlost", "webglcontextcreationerror"],
                ["autocomplete", "autocompleteerror"],
                ["toggle"],
                [
                  "afterscriptexecute",
                  "beforescriptexecute",
                  "DOMContentLoaded",
                  "freeze",
                  "fullscreenchange",
                  "mozfullscreenchange",
                  "webkitfullscreenchange",
                  "msfullscreenchange",
                  "fullscreenerror",
                  "mozfullscreenerror",
                  "webkitfullscreenerror",
                  "msfullscreenerror",
                  "readystatechange",
                  "visibilitychange",
                  "resume"
                ],
                q,
                [
                  "beforecopy",
                  "beforecut",
                  "beforepaste",
                  "copy",
                  "cut",
                  "paste",
                  "dragstart",
                  "loadend",
                  "animationstart",
                  "search",
                  "transitionrun",
                  "transitionstart",
                  "webkitanimationend",
                  "webkitanimationiteration",
                  "webkitanimationstart",
                  "webkittransitionend"
                ],
                [
                  "activate",
                  "afterupdate",
                  "ariarequest",
                  "beforeactivate",
                  "beforedeactivate",
                  "beforeeditfocus",
                  "beforeupdate",
                  "cellchange",
                  "controlselect",
                  "dataavailable",
                  "datasetchanged",
                  "datasetcomplete",
                  "errorupdate",
                  "filterchange",
                  "layoutcomplete",
                  "losecapture",
                  "move",
                  "moveend",
                  "movestart",
                  "propertychange",
                  "resizeend",
                  "resizestart",
                  "rowenter",
                  "rowexit",
                  "rowsdelete",
                  "rowsinserted",
                  "command",
                  "compassneedscalibration",
                  "deactivate",
                  "help",
                  "mscontentzoom",
                  "msmanipulationstatechanged",
                  "msgesturechange",
                  "msgesturedoubletap",
                  "msgestureend",
                  "msgesturehold",
                  "msgesturestart",
                  "msgesturetap",
                  "msgotpointercapture",
                  "msinertiastart",
                  "mslostpointercapture",
                  "mspointercancel",
                  "mspointerdown",
                  "mspointerenter",
                  "mspointerhover",
                  "mspointerleave",
                  "mspointermove",
                  "mspointerout",
                  "mspointerover",
                  "mspointerup",
                  "pointerout",
                  "mssitemodejumplistitemremoved",
                  "msthumbnailclick",
                  "stop",
                  "storagecommit"
                ]
              );
            function et(t, e, n) {
              if (!n || 0 === n.length) return e;
              const r = n.filter((e) => e.target === t);
              if (!r || 0 === r.length) return e;
              const o = r[0].ignoreProperties;
              return e.filter((t) => -1 === o.indexOf(t));
            }
            function nt(t, e, n, r) {
              t && k(t, et(t, e, n), r);
            }
            function rt(t, e) {
              if (m && !b) return;
              if (Zone[t.symbol("patchEvents")]) return;
              const r = "undefined" != typeof WebSocket,
                o = e.__Zone_ignore_on_properties;
              if (T) {
                const t = window,
                  e = Z ? [{ target: t, ignoreProperties: ["error"] }] : [];
                nt(t, tt.concat(["messageerror"]), o ? o.concat(e) : o, n(t)),
                  nt(Document.prototype, tt, o),
                  void 0 !== t.SVGElement && nt(t.SVGElement.prototype, tt, o),
                  nt(Element.prototype, tt, o),
                  nt(HTMLElement.prototype, tt, o),
                  nt(HTMLMediaElement.prototype, W, o),
                  nt(HTMLFrameSetElement.prototype, q.concat(V), o),
                  nt(HTMLBodyElement.prototype, q.concat(V), o),
                  nt(HTMLFrameElement.prototype, Y, o),
                  nt(HTMLIFrameElement.prototype, Y, o);
                const r = t.HTMLMarqueeElement;
                r && nt(r.prototype, G, o);
                const i = t.Worker;
                i && nt(i.prototype, Q, o);
              }
              const i = e.XMLHttpRequest;
              i && nt(i.prototype, $, o);
              const s = e.XMLHttpRequestEventTarget;
              s && nt(s && s.prototype, $, o),
                "undefined" != typeof IDBIndex &&
                  (nt(IDBIndex.prototype, J, o),
                  nt(IDBRequest.prototype, J, o),
                  nt(IDBOpenDBRequest.prototype, J, o),
                  nt(IDBDatabase.prototype, J, o),
                  nt(IDBTransaction.prototype, J, o),
                  nt(IDBCursor.prototype, J, o)),
                r && nt(WebSocket.prototype, K, o);
            }
            Zone.__load_patch("util", (n, i, s) => {
              (s.patchOnProperties = k), (s.patchMethod = C), (s.bindArguments = g), (s.patchMacroTask = P);
              const u = i.__symbol__("BLACK_LISTED_EVENTS"),
                l = i.__symbol__("UNPATCHED_EVENTS");
              n[l] && (n[u] = n[l]),
                n[u] && (i[u] = i[l] = n[u]),
                (s.patchEventPrototype = H),
                (s.patchEventTarget = U),
                (s.isIEOrEdge = z),
                (s.ObjectDefineProperty = e),
                (s.ObjectGetOwnPropertyDescriptor = t),
                (s.ObjectCreate = r),
                (s.ArraySlice = o),
                (s.patchClass = A),
                (s.wrapWithCurrentZone = c),
                (s.filterProperties = et),
                (s.attachOriginToPatched = I),
                (s._redefineProperty = Object.defineProperty),
                (s.patchCallbacks = X),
                (s.getGlobalObjects = () => ({
                  globalSources: B,
                  zoneSymbolEventNames: L,
                  eventNames: tt,
                  isBrowser: T,
                  isMix: b,
                  isNode: m,
                  TRUE_STR: "true",
                  FALSE_STR: "false",
                  ZONE_SYMBOL_PREFIX: a,
                  ADD_EVENT_LISTENER_STR: "addEventListener",
                  REMOVE_EVENT_LISTENER_STR: "removeEventListener"
                }));
            });
            const ot = l("zoneTask");
            function it(t, e, n, r) {
              let o = null,
                i = null;
              n += r;
              const s = {};
              function a(e) {
                const n = e.data;
                return (
                  (n.args[0] = function () {
                    try {
                      e.invoke.apply(this, arguments);
                    } finally {
                      (e.data && e.data.isPeriodic) ||
                        ("number" == typeof n.handleId ? delete s[n.handleId] : n.handleId && (n.handleId[ot] = null));
                    }
                  }),
                  (n.handleId = o.apply(t, n.args)),
                  e
                );
              }
              function c(t) {
                return i(t.data.handleId);
              }
              (o = C(
                t,
                (e += r),
                (n) =>
                  function (o, i) {
                    if ("function" == typeof i[0]) {
                      const t = u(
                        e,
                        i[0],
                        { isPeriodic: "Interval" === r, delay: "Timeout" === r || "Interval" === r ? i[1] || 0 : void 0, args: i },
                        a,
                        c
                      );
                      if (!t) return t;
                      const n = t.data.handleId;
                      return (
                        "number" == typeof n ? (s[n] = t) : n && (n[ot] = t),
                        n &&
                          n.ref &&
                          n.unref &&
                          "function" == typeof n.ref &&
                          "function" == typeof n.unref &&
                          ((t.ref = n.ref.bind(n)), (t.unref = n.unref.bind(n))),
                        "number" == typeof n || n ? n : t
                      );
                    }
                    return n.apply(t, i);
                  }
              )),
                (i = C(
                  t,
                  n,
                  (e) =>
                    function (n, r) {
                      const o = r[0];
                      let i;
                      "number" == typeof o ? (i = s[o]) : ((i = o && o[ot]), i || (i = o)),
                        i && "string" == typeof i.type
                          ? "notScheduled" !== i.state &&
                            ((i.cancelFn && i.data.isPeriodic) || 0 === i.runCount) &&
                            ("number" == typeof o ? delete s[o] : o && (o[ot] = null), i.zone.cancelTask(i))
                          : e.apply(t, r);
                    }
                ));
            }
            function st(t, e) {
              if (Zone[e.symbol("patchEventTarget")]) return;
              const { eventNames: n, zoneSymbolEventNames: r, TRUE_STR: o, FALSE_STR: i, ZONE_SYMBOL_PREFIX: s } = e.getGlobalObjects();
              for (let c = 0; c < n.length; c++) {
                const t = n[c],
                  e = s + (t + i),
                  a = s + (t + o);
                (r[t] = {}), (r[t][i] = e), (r[t][o] = a);
              }
              const a = t.EventTarget;
              return a && a.prototype ? (e.patchEventTarget(t, [a && a.prototype]), !0) : void 0;
            }
            Zone.__load_patch("legacy", (t) => {
              const e = t[Zone.__symbol__("legacyPatch")];
              e && e();
            }),
              Zone.__load_patch("timers", (t) => {
                it(t, "set", "clear", "Timeout"), it(t, "set", "clear", "Interval"), it(t, "set", "clear", "Immediate");
              }),
              Zone.__load_patch("requestAnimationFrame", (t) => {
                it(t, "request", "cancel", "AnimationFrame"),
                  it(t, "mozRequest", "mozCancel", "AnimationFrame"),
                  it(t, "webkitRequest", "webkitCancel", "AnimationFrame");
              }),
              Zone.__load_patch("blocking", (t, e) => {
                const n = ["alert", "prompt", "confirm"];
                for (let r = 0; r < n.length; r++)
                  C(
                    t,
                    n[r],
                    (n, r, o) =>
                      function (r, i) {
                        return e.current.run(n, t, i, o);
                      }
                  );
              }),
              Zone.__load_patch("EventTarget", (t, e, n) => {
                !(function (t, e) {
                  e.patchEventPrototype(t, e);
                })(t, n),
                  st(t, n);
                const r = t.XMLHttpRequestEventTarget;
                r && r.prototype && n.patchEventTarget(t, [r.prototype]),
                  A("MutationObserver"),
                  A("WebKitMutationObserver"),
                  A("IntersectionObserver"),
                  A("FileReader");
              }),
              Zone.__load_patch("on_property", (t, e, n) => {
                rt(n, t);
              }),
              Zone.__load_patch("customElements", (t, e, n) => {
                !(function (t, e) {
                  const { isBrowser: n, isMix: r } = e.getGlobalObjects();
                  (n || r) &&
                    t.customElements &&
                    "customElements" in t &&
                    e.patchCallbacks(e, t.customElements, "customElements", "define", [
                      "connectedCallback",
                      "disconnectedCallback",
                      "adoptedCallback",
                      "attributeChangedCallback"
                    ]);
                })(t, n);
              }),
              Zone.__load_patch("XHR", (t, e) => {
                !(function (t) {
                  const f = t.XMLHttpRequest;
                  if (!f) return;
                  const p = f.prototype;
                  let d = p[i],
                    g = p[s];
                  if (!d) {
                    const e = t.XMLHttpRequestEventTarget;
                    if (e) {
                      const t = e.prototype;
                      (d = t[i]), (g = t[s]);
                    }
                  }
                  function y(t) {
                    const r = t.data,
                      c = r.target;
                    (c[a] = !1), (c[h] = !1);
                    const u = c[o];
                    d || ((d = c[i]), (g = c[s])), u && g.call(c, "readystatechange", u);
                    const l = (c[o] = () => {
                      if (c.readyState === c.DONE)
                        if (!r.aborted && c[a] && "scheduled" === t.state) {
                          const n = c[e.__symbol__("loadfalse")];
                          if (n && n.length > 0) {
                            const o = t.invoke;
                            (t.invoke = function () {
                              const n = c[e.__symbol__("loadfalse")];
                              for (let e = 0; e < n.length; e++) n[e] === t && n.splice(e, 1);
                              r.aborted || "scheduled" !== t.state || o.call(t);
                            }),
                              n.push(t);
                          } else t.invoke();
                        } else r.aborted || !1 !== c[a] || (c[h] = !0);
                    });
                    return d.call(c, "readystatechange", l), c[n] || (c[n] = t), _.apply(c, r.args), (c[a] = !0), t;
                  }
                  function v() {}
                  function m(t) {
                    const e = t.data;
                    return (e.aborted = !0), E.apply(e.target, e.args);
                  }
                  const T = C(
                      p,
                      "open",
                      () =>
                        function (t, e) {
                          return (t[r] = 0 == e[2]), (t[c] = e[1]), T.apply(t, e);
                        }
                    ),
                    b = l("fetchTaskAborting"),
                    w = l("fetchTaskScheduling"),
                    _ = C(
                      p,
                      "send",
                      () =>
                        function (t, n) {
                          if (!0 === e.current[w]) return _.apply(t, n);
                          if (t[r]) return _.apply(t, n);
                          {
                            const e = { target: t, url: t[c], isPeriodic: !1, args: n, aborted: !1 },
                              r = u("XMLHttpRequest.send", v, e, y, m);
                            t && !0 === t[h] && !e.aborted && "scheduled" === r.state && r.invoke();
                          }
                        }
                    ),
                    E = C(
                      p,
                      "abort",
                      () =>
                        function (t, r) {
                          const o = t[n];
                          if (o && "string" == typeof o.type) {
                            if (null == o.cancelFn || (o.data && o.data.aborted)) return;
                            o.zone.cancelTask(o);
                          } else if (!0 === e.current[b]) return E.apply(t, r);
                        }
                    );
                })(t);
                const n = l("xhrTask"),
                  r = l("xhrSync"),
                  o = l("xhrListener"),
                  a = l("xhrScheduled"),
                  c = l("xhrURL"),
                  h = l("xhrErrorBeforeScheduled");
              }),
              Zone.__load_patch("geolocation", (e) => {
                e.navigator &&
                  e.navigator.geolocation &&
                  (function (e, n) {
                    const r = e.constructor.name;
                    for (let o = 0; o < n.length; o++) {
                      const i = n[o],
                        s = e[i];
                      if (s) {
                        if (!y(t(e, i))) continue;
                        e[i] = ((t) => {
                          const e = function () {
                            return t.apply(this, g(arguments, r + "." + i));
                          };
                          return I(e, t), e;
                        })(s);
                      }
                    }
                  })(e.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
              }),
              Zone.__load_patch("PromiseRejectionEvent", (t, e) => {
                function n(e) {
                  return function (n) {
                    F(t, e).forEach((r) => {
                      const o = t.PromiseRejectionEvent;
                      if (o) {
                        const t = new o(e, { promise: n.promise, reason: n.rejection });
                        r.invoke(t);
                      }
                    });
                  };
                }
                t.PromiseRejectionEvent &&
                  ((e[l("unhandledPromiseRejectionHandler")] = n("unhandledrejection")),
                  (e[l("rejectionHandledHandler")] = n("rejectionhandled")));
              });
          })
            ? r.call(e, n, e, t)
            : r) || (t.exports = o);
    },
    tjlA: function (t, e, n) {
      "use strict";
      var r = n("H7XF"),
        o = n("kVK+"),
        i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
      function s(t) {
        if (t > 2147483647) throw new RangeError('The value "' + t + '" is invalid for option "size"');
        var e = new Uint8Array(t);
        return Object.setPrototypeOf(e, a.prototype), e;
      }
      function a(t, e, n) {
        if ("number" == typeof t) {
          if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
          return l(t);
        }
        return c(t, e, n);
      }
      function c(t, e, n) {
        if ("string" == typeof t)
          return (function (t, e) {
            if ((("string" == typeof e && "" !== e) || (e = "utf8"), !a.isEncoding(e))) throw new TypeError("Unknown encoding: " + e);
            var n = 0 | d(t, e),
              r = s(n),
              o = r.write(t, e);
            return o !== n && (r = r.slice(0, o)), r;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (j(t, Uint8Array)) {
              var e = new Uint8Array(t);
              return f(e.buffer, e.byteOffset, e.byteLength);
            }
            return h(t);
          })(t);
        if (null == t)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t
          );
        if (j(t, ArrayBuffer) || (t && j(t.buffer, ArrayBuffer))) return f(t, e, n);
        if ("undefined" != typeof SharedArrayBuffer && (j(t, SharedArrayBuffer) || (t && j(t.buffer, SharedArrayBuffer))))
          return f(t, e, n);
        if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
        var r = t.valueOf && t.valueOf();
        if (null != r && r !== t) return a.from(r, e, n);
        var o = (function (t) {
          if (a.isBuffer(t)) {
            var e = 0 | p(t.length),
              n = s(e);
            return 0 === n.length || t.copy(n, 0, 0, e), n;
          }
          return void 0 !== t.length
            ? "number" != typeof t.length || N(t.length)
              ? s(0)
              : h(t)
            : "Buffer" === t.type && Array.isArray(t.data)
            ? h(t.data)
            : void 0;
        })(t);
        if (o) return o;
        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive])
          return a.from(t[Symbol.toPrimitive]("string"), e, n);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t
        );
      }
      function u(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
        if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
      }
      function l(t) {
        return u(t), s(t < 0 ? 0 : 0 | p(t));
      }
      function h(t) {
        for (var e = t.length < 0 ? 0 : 0 | p(t.length), n = s(e), r = 0; r < e; r += 1) n[r] = 255 & t[r];
        return n;
      }
      function f(t, e, n) {
        if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var r;
        return (
          (r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n)),
          Object.setPrototypeOf(r, a.prototype),
          r
        );
      }
      function p(t) {
        if (t >= 2147483647)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + (2147483647).toString(16) + " bytes");
        return 0 | t;
      }
      function d(t, e) {
        if (a.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || j(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t)
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
        var n = t.length,
          r = arguments.length > 2 && !0 === arguments[2];
        if (!r && 0 === n) return 0;
        for (var o = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
              return L(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return B(t).length;
            default:
              if (o) return r ? -1 : L(t).length;
              (e = ("" + e).toLowerCase()), (o = !0);
          }
      }
      function g(t, e, n) {
        var r = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return "";
        if ((n >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return P(this, e, n);
            case "utf8":
            case "utf-8":
              return S(this, e, n);
            case "ascii":
              return A(this, e, n);
            case "latin1":
            case "binary":
              return C(this, e, n);
            case "base64":
              return k(this, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return I(this, e, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (r = !0);
          }
      }
      function y(t, e, n) {
        var r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      function v(t, e, n, r, o) {
        if (0 === t.length) return -1;
        if (
          ("string" == typeof n ? ((r = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648),
          N((n = +n)) && (n = o ? 0 : t.length - 1),
          n < 0 && (n = t.length + n),
          n >= t.length)
        ) {
          if (o) return -1;
          n = t.length - 1;
        } else if (n < 0) {
          if (!o) return -1;
          n = 0;
        }
        if (("string" == typeof e && (e = a.from(e, r)), a.isBuffer(e))) return 0 === e.length ? -1 : m(t, e, n, r, o);
        if ("number" == typeof e)
          return (
            (e &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(t, e, n)
                : Uint8Array.prototype.lastIndexOf.call(t, e, n)
              : m(t, [e], n, r, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function m(t, e, n, r, o) {
        var i,
          s = 1,
          a = t.length,
          c = e.length;
        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (c /= 2), (n /= 2);
        }
        function u(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (o) {
          var l = -1;
          for (i = n; i < a; i++)
            if (u(t, i) === u(e, -1 === l ? 0 : i - l)) {
              if ((-1 === l && (l = i), i - l + 1 === c)) return l * s;
            } else -1 !== l && (i -= i - l), (l = -1);
        } else
          for (n + c > a && (n = a - c), i = n; i >= 0; i--) {
            for (var h = !0, f = 0; f < c; f++)
              if (u(t, i + f) !== u(e, f)) {
                h = !1;
                break;
              }
            if (h) return i;
          }
        return -1;
      }
      function T(t, e, n, r) {
        n = Number(n) || 0;
        var o = t.length - n;
        r ? (r = Number(r)) > o && (r = o) : (r = o);
        var i = e.length;
        r > i / 2 && (r = i / 2);
        for (var s = 0; s < r; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16);
          if (N(a)) return s;
          t[n + s] = a;
        }
        return s;
      }
      function b(t, e, n, r) {
        return M(L(e, t.length - n), t, n, r);
      }
      function w(t, e, n, r) {
        return M(
          (function (t) {
            for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
            return e;
          })(e),
          t,
          n,
          r
        );
      }
      function _(t, e, n, r) {
        return M(B(e), t, n, r);
      }
      function E(t, e, n, r) {
        return M(
          (function (t, e) {
            for (var n, r, o = [], i = 0; i < t.length && !((e -= 2) < 0); ++i)
              (r = (n = t.charCodeAt(i)) >> 8), o.push(n % 256), o.push(r);
            return o;
          })(e, t.length - n),
          t,
          n,
          r
        );
      }
      function k(t, e, n) {
        return r.fromByteArray(0 === e && n === t.length ? t : t.slice(e, n));
      }
      function S(t, e, n) {
        n = Math.min(t.length, n);
        for (var r = [], o = e; o < n; ) {
          var i,
            s,
            a,
            c,
            u = t[o],
            l = null,
            h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (o + h <= n)
            switch (h) {
              case 1:
                u < 128 && (l = u);
                break;
              case 2:
                128 == (192 & (i = t[o + 1])) && (c = ((31 & u) << 6) | (63 & i)) > 127 && (l = c);
                break;
              case 3:
                (s = t[o + 2]),
                  128 == (192 & (i = t[o + 1])) &&
                    128 == (192 & s) &&
                    (c = ((15 & u) << 12) | ((63 & i) << 6) | (63 & s)) > 2047 &&
                    (c < 55296 || c > 57343) &&
                    (l = c);
                break;
              case 4:
                (s = t[o + 2]),
                  (a = t[o + 3]),
                  128 == (192 & (i = t[o + 1])) &&
                    128 == (192 & s) &&
                    128 == (192 & a) &&
                    (c = ((15 & u) << 18) | ((63 & i) << 12) | ((63 & s) << 6) | (63 & a)) > 65535 &&
                    c < 1114112 &&
                    (l = c);
            }
          null === l ? ((l = 65533), (h = 1)) : l > 65535 && (r.push((((l -= 65536) >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))),
            r.push(l),
            (o += h);
        }
        return (function (t) {
          var e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          for (var n = "", r = 0; r < e; ) n += String.fromCharCode.apply(String, t.slice(r, (r += 4096)));
          return n;
        })(r);
      }
      function A(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
        return r;
      }
      function C(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
        return r;
      }
      function P(t, e, n) {
        var r = t.length;
        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
        for (var o = "", i = e; i < n; ++i) o += U[t[i]];
        return o;
      }
      function I(t, e, n) {
        for (var r = t.slice(e, n), o = "", i = 0; i < r.length - 1; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
        return o;
      }
      function O(t, e, n) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
      }
      function D(t, e, n, r, o, i) {
        if (!a.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
        if (n + r > t.length) throw new RangeError("Index out of range");
      }
      function Z(t, e, n, r, o, i) {
        if (n + r > t.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function z(t, e, n, r, i) {
        return (e = +e), (n >>>= 0), i || Z(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4;
      }
      function x(t, e, n, r, i) {
        return (e = +e), (n >>>= 0), i || Z(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8;
      }
      (e.Buffer = a),
        (e.SlowBuffer = function (t) {
          return +t != t && (t = 0), a.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (e.kMaxLength = 2147483647),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                }
              };
            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
          } catch (n) {
            return !1;
          }
        })()) ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(a.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          }
        }),
        Object.defineProperty(a.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          }
        }),
        (a.poolSize = 8192),
        (a.from = function (t, e, n) {
          return c(t, e, n);
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (t, e, n) {
          return (function (t, e, n) {
            return u(t), t <= 0 ? s(t) : void 0 !== e ? ("string" == typeof n ? s(t).fill(e, n) : s(t).fill(e)) : s(t);
          })(t, e, n);
        }),
        (a.allocUnsafe = function (t) {
          return l(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          return l(t);
        }),
        (a.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== a.prototype;
        }),
        (a.compare = function (t, e) {
          if (
            (j(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            j(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(t) || !a.isBuffer(e))
          )
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (t === e) return 0;
          for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
            if (t[o] !== e[o]) {
              (n = t[o]), (r = e[o]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (a.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (t, e) {
          if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return a.alloc(0);
          var n;
          if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
          var r = a.allocUnsafe(e),
            o = 0;
          for (n = 0; n < t.length; ++n) {
            var i = t[n];
            if (j(i, Uint8Array)) o + i.length > r.length ? a.from(i).copy(r, o) : Uint8Array.prototype.set.call(r, i, o);
            else {
              if (!a.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
              i.copy(r, o);
            }
            o += i.length;
          }
          return r;
        }),
        (a.byteLength = d),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) y(this, e, e + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
          return this;
        }),
        (a.prototype.toLocaleString = a.prototype.toString =
          function () {
            var t = this.length;
            return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : g.apply(this, arguments);
          }),
        (a.prototype.equals = function (t) {
          if (!a.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === a.compare(this, t);
        }),
        (a.prototype.inspect = function () {
          var t = "",
            n = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, n)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > n && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        i && (a.prototype[i] = a.prototype.inspect),
        (a.prototype.compare = function (t, e, n, r, o) {
          if ((j(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t)))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = t ? t.length : 0),
            void 0 === r && (r = 0),
            void 0 === o && (o = this.length),
            e < 0 || n > t.length || r < 0 || o > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= o && e >= n) return 0;
          if (r >= o) return -1;
          if (e >= n) return 1;
          if (this === t) return 0;
          for (
            var i = (o >>>= 0) - (r >>>= 0),
              s = (n >>>= 0) - (e >>>= 0),
              c = Math.min(i, s),
              u = this.slice(r, o),
              l = t.slice(e, n),
              h = 0;
            h < c;
            ++h
          )
            if (u[h] !== l[h]) {
              (i = u[h]), (s = l[h]);
              break;
            }
          return i < s ? -1 : s < i ? 1 : 0;
        }),
        (a.prototype.includes = function (t, e, n) {
          return -1 !== this.indexOf(t, e, n);
        }),
        (a.prototype.indexOf = function (t, e, n) {
          return v(this, t, e, n, !0);
        }),
        (a.prototype.lastIndexOf = function (t, e, n) {
          return v(this, t, e, n, !1);
        }),
        (a.prototype.write = function (t, e, n, r) {
          if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
          else if (void 0 === n && "string" == typeof e) (r = e), (n = this.length), (e = 0);
          else {
            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            (e >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
          }
          var o = this.length - e;
          if (((void 0 === n || n > o) && (n = o), (t.length > 0 && (n < 0 || e < 0)) || e > this.length))
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var i = !1; ; )
            switch (r) {
              case "hex":
                return T(this, t, e, n);
              case "utf8":
              case "utf-8":
                return b(this, t, e, n);
              case "ascii":
              case "latin1":
              case "binary":
                return w(this, t, e, n);
              case "base64":
                return _(this, t, e, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return E(this, t, e, n);
              default:
                if (i) throw new TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (i = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        }),
        (a.prototype.slice = function (t, e) {
          var n = this.length;
          (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            e < t && (e = t);
          var r = this.subarray(t, e);
          return Object.setPrototypeOf(r, a.prototype), r;
        }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (t, e, n) {
            (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
            return r;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (t, e, n) {
            (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
            for (var r = this[t + --e], o = 1; e > 0 && (o *= 256); ) r += this[t + --e] * o;
            return r;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || O(t, 1, this.length), this[t];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (t, e) {
            return (t >>>= 0), e || O(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (t, e) {
            return (t >>>= 0), e || O(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (t, e) {
            return (t >>>= 0), e || O(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (t, e) {
            return (t >>>= 0), e || O(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
          }),
        (a.prototype.readIntLE = function (t, e, n) {
          (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
          for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
          return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r;
        }),
        (a.prototype.readIntBE = function (t, e, n) {
          (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
          for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256); ) i += this[t + --r] * o;
          return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
        }),
        (a.prototype.readInt8 = function (t, e) {
          return (t >>>= 0), e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
        }),
        (a.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || O(t, 2, this.length);
          var n = this[t] | (this[t + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (a.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || O(t, 2, this.length);
          var n = this[t + 1] | (this[t] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (a.prototype.readInt32LE = function (t, e) {
          return (t >>>= 0), e || O(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
        }),
        (a.prototype.readInt32BE = function (t, e) {
          return (t >>>= 0), e || O(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
        }),
        (a.prototype.readFloatLE = function (t, e) {
          return (t >>>= 0), e || O(t, 4, this.length), o.read(this, t, !0, 23, 4);
        }),
        (a.prototype.readFloatBE = function (t, e) {
          return (t >>>= 0), e || O(t, 4, this.length), o.read(this, t, !1, 23, 4);
        }),
        (a.prototype.readDoubleLE = function (t, e) {
          return (t >>>= 0), e || O(t, 8, this.length), o.read(this, t, !0, 52, 8);
        }),
        (a.prototype.readDoubleBE = function (t, e) {
          return (t >>>= 0), e || O(t, 8, this.length), o.read(this, t, !1, 52, 8);
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (t, e, n, r) {
            (t = +t), (e >>>= 0), (n >>>= 0), r || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = 1,
              i = 0;
            for (this[e] = 255 & t; ++i < n && (o *= 256); ) this[e + i] = (t / o) & 255;
            return e + n;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (t, e, n, r) {
            (t = +t), (e >>>= 0), (n >>>= 0), r || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = n - 1,
              i = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); ) this[e + o] = (t / i) & 255;
            return e + n;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (t, e, n) {
            return (t = +t), (e >>>= 0), n || D(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (t, e, n) {
            return (t = +t), (e >>>= 0), n || D(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (t, e, n) {
            return (t = +t), (e >>>= 0), n || D(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || D(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || D(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeIntLE = function (t, e, n, r) {
          if (((t = +t), (e >>>= 0), !r)) {
            var o = Math.pow(2, 8 * n - 1);
            D(this, t, e, n, o - 1, -o);
          }
          var i = 0,
            s = 1,
            a = 0;
          for (this[e] = 255 & t; ++i < n && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), (this[e + i] = (((t / s) >> 0) - a) & 255);
          return e + n;
        }),
        (a.prototype.writeIntBE = function (t, e, n, r) {
          if (((t = +t), (e >>>= 0), !r)) {
            var o = Math.pow(2, 8 * n - 1);
            D(this, t, e, n, o - 1, -o);
          }
          var i = n - 1,
            s = 1,
            a = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), (this[e + i] = (((t / s) >> 0) - a) & 255);
          return e + n;
        }),
        (a.prototype.writeInt8 = function (t, e, n) {
          return (t = +t), (e >>>= 0), n || D(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
        }),
        (a.prototype.writeInt16LE = function (t, e, n) {
          return (t = +t), (e >>>= 0), n || D(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
        }),
        (a.prototype.writeInt16BE = function (t, e, n) {
          return (t = +t), (e >>>= 0), n || D(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
        }),
        (a.prototype.writeInt32LE = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || D(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (a.prototype.writeInt32BE = function (t, e, n) {
          return (
            (t = +t),
            (e >>>= 0),
            n || D(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (a.prototype.writeFloatLE = function (t, e, n) {
          return z(this, t, e, !0, n);
        }),
        (a.prototype.writeFloatBE = function (t, e, n) {
          return z(this, t, e, !1, n);
        }),
        (a.prototype.writeDoubleLE = function (t, e, n) {
          return x(this, t, e, !0, n);
        }),
        (a.prototype.writeDoubleBE = function (t, e, n) {
          return x(this, t, e, !1, n);
        }),
        (a.prototype.copy = function (t, e, n, r) {
          if (!a.isBuffer(t)) throw new TypeError("argument should be a Buffer");
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
          var o = r - n;
          return (
            this === t && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, n, r)
              : Uint8Array.prototype.set.call(t, this.subarray(n, r), e),
            o
          );
        }),
        (a.prototype.fill = function (t, e, n, r) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e ? ((r = e), (e = 0), (n = this.length)) : "string" == typeof n && ((r = n), (n = this.length)),
              void 0 !== r && "string" != typeof r)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !a.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
            if (1 === t.length) {
              var o = t.charCodeAt(0);
              (("utf8" === r && o < 128) || "latin1" === r) && (t = o);
            }
          } else "number" == typeof t ? (t &= 255) : "boolean" == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
          if (n <= e) return this;
          var i;
          if (((e >>>= 0), (n = void 0 === n ? this.length : n >>> 0), t || (t = 0), "number" == typeof t))
            for (i = e; i < n; ++i) this[i] = t;
          else {
            var s = a.isBuffer(t) ? t : a.from(t, r),
              c = s.length;
            if (0 === c) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (i = 0; i < n - e; ++i) this[i + e] = s[i % c];
          }
          return this;
        });
      var R = /[^+/0-9A-Za-z-_]/g;
      function L(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
          if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
            if (!o) {
              if (n > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === r) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = n);
              continue;
            }
            n = 65536 + (((o - 55296) << 10) | (n - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), n < 128)) {
            if ((e -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
          }
        }
        return i;
      }
      function B(t) {
        return r.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(R, "")).length < 2) return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function M(t, e, n, r) {
        for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
        return o;
      }
      function j(t, e) {
        return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
      }
      function N(t) {
        return t != t;
      }
      var U = (function () {
        for (var t = new Array(256), e = 0; e < 16; ++e)
          for (var n = 16 * e, r = 0; r < 16; ++r) t[n + r] = "0123456789abcdef"[e] + "0123456789abcdef"[r];
        return t;
      })();
    },
    yLV6: function (t, e, n) {
      var r;
      !(function (o, i, s, a) {
        "use strict";
        var c,
          u = ["", "webkit", "Moz", "MS", "ms", "o"],
          l = i.createElement("div"),
          h = Math.round,
          f = Math.abs,
          p = Date.now;
        function d(t, e, n) {
          return setTimeout(w(t, n), e);
        }
        function g(t, e, n) {
          return !!Array.isArray(t) && (y(t, n[e], n), !0);
        }
        function y(t, e, n) {
          var r;
          if (t)
            if (t.forEach) t.forEach(e, n);
            else if (void 0 !== t.length) for (r = 0; r < t.length; ) e.call(n, t[r], r, t), r++;
            else for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
        }
        function v(t, e, n) {
          var r = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
          return function () {
            var e = new Error("get-stack-trace"),
              n =
                e && e.stack
                  ? e.stack
                      .replace(/^[^\(]+?[\n$]/gm, "")
                      .replace(/^\s+at\s+/gm, "")
                      .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                  : "Unknown Stack Trace",
              i = o.console && (o.console.warn || o.console.log);
            return i && i.call(o.console, r, n), t.apply(this, arguments);
          };
        }
        c =
          "function" != typeof Object.assign
            ? function (t) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                  var r = arguments[n];
                  if (null != r) for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o]);
                }
                return e;
              }
            : Object.assign;
        var m = v(
            function (t, e, n) {
              for (var r = Object.keys(e), o = 0; o < r.length; ) (!n || (n && void 0 === t[r[o]])) && (t[r[o]] = e[r[o]]), o++;
              return t;
            },
            "extend",
            "Use `assign`."
          ),
          T = v(
            function (t, e) {
              return m(t, e, !0);
            },
            "merge",
            "Use `assign`."
          );
        function b(t, e, n) {
          var r,
            o = e.prototype;
          ((r = t.prototype = Object.create(o)).constructor = t), (r._super = o), n && c(r, n);
        }
        function w(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        function _(t, e) {
          return "function" == typeof t ? t.apply((e && e[0]) || void 0, e) : t;
        }
        function E(t, e) {
          return void 0 === t ? e : t;
        }
        function k(t, e, n) {
          y(P(e), function (e) {
            t.addEventListener(e, n, !1);
          });
        }
        function S(t, e, n) {
          y(P(e), function (e) {
            t.removeEventListener(e, n, !1);
          });
        }
        function A(t, e) {
          for (; t; ) {
            if (t == e) return !0;
            t = t.parentNode;
          }
          return !1;
        }
        function C(t, e) {
          return t.indexOf(e) > -1;
        }
        function P(t) {
          return t.trim().split(/\s+/g);
        }
        function I(t, e, n) {
          if (t.indexOf && !n) return t.indexOf(e);
          for (var r = 0; r < t.length; ) {
            if ((n && t[r][n] == e) || (!n && t[r] === e)) return r;
            r++;
          }
          return -1;
        }
        function O(t) {
          return Array.prototype.slice.call(t, 0);
        }
        function D(t, e, n) {
          for (var r = [], o = [], i = 0; i < t.length; ) {
            var s = e ? t[i][e] : t[i];
            I(o, s) < 0 && r.push(t[i]), (o[i] = s), i++;
          }
          return (
            n &&
              (r = e
                ? r.sort(function (t, n) {
                    return t[e] > n[e];
                  })
                : r.sort()),
            r
          );
        }
        function Z(t, e) {
          for (var n, r, o = e[0].toUpperCase() + e.slice(1), i = 0; i < u.length; ) {
            if ((r = (n = u[i]) ? n + o : e) in t) return r;
            i++;
          }
        }
        var z = 1;
        function x(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || o;
        }
        var R = "ontouchstart" in o,
          L = void 0 !== Z(o, "PointerEvent"),
          B = R && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          M = ["x", "y"],
          j = ["clientX", "clientY"];
        function N(t, e) {
          var n = this;
          (this.manager = t),
            (this.callback = e),
            (this.element = t.element),
            (this.target = t.options.inputTarget),
            (this.domHandler = function (e) {
              _(t.options.enable, [t]) && n.handler(e);
            }),
            this.init();
        }
        function U(t, e, n) {
          var r = n.pointers.length,
            o = n.changedPointers.length,
            i = 1 & e && r - o == 0,
            s = 12 & e && r - o == 0;
          (n.isFirst = !!i),
            (n.isFinal = !!s),
            i && (t.session = {}),
            (n.eventType = e),
            (function (t, e) {
              var n = t.session,
                r = e.pointers,
                o = r.length;
              n.firstInput || (n.firstInput = F(e)),
                o > 1 && !n.firstMultiple ? (n.firstMultiple = F(e)) : 1 === o && (n.firstMultiple = !1);
              var i = n.firstInput,
                s = n.firstMultiple,
                a = s ? s.center : i.center,
                c = (e.center = H(r));
              (e.timeStamp = p()),
                (e.deltaTime = e.timeStamp - i.timeStamp),
                (e.angle = Y(a, c)),
                (e.distance = W(a, c)),
                (function (t, e) {
                  var n = e.center,
                    r = t.offsetDelta || {},
                    o = t.prevDelta || {},
                    i = t.prevInput || {};
                  (1 !== e.eventType && 4 !== i.eventType) ||
                    ((o = t.prevDelta = { x: i.deltaX || 0, y: i.deltaY || 0 }), (r = t.offsetDelta = { x: n.x, y: n.y })),
                    (e.deltaX = o.x + (n.x - r.x)),
                    (e.deltaY = o.y + (n.y - r.y));
                })(n, e),
                (e.offsetDirection = q(e.deltaX, e.deltaY));
              var u,
                l,
                h = X(e.deltaTime, e.deltaX, e.deltaY);
              (e.overallVelocityX = h.x),
                (e.overallVelocityY = h.y),
                (e.overallVelocity = f(h.x) > f(h.y) ? h.x : h.y),
                (e.scale = s ? ((u = s.pointers), W((l = r)[0], l[1], j) / W(u[0], u[1], j)) : 1),
                (e.rotation = s
                  ? (function (t, e) {
                      return Y(e[1], e[0], j) + Y(t[1], t[0], j);
                    })(s.pointers, r)
                  : 0),
                (e.maxPointers = n.prevInput
                  ? e.pointers.length > n.prevInput.maxPointers
                    ? e.pointers.length
                    : n.prevInput.maxPointers
                  : e.pointers.length),
                (function (t, e) {
                  var n,
                    r,
                    o,
                    i,
                    s = t.lastInterval || e,
                    a = e.timeStamp - s.timeStamp;
                  if (8 != e.eventType && (a > 25 || void 0 === s.velocity)) {
                    var c = e.deltaX - s.deltaX,
                      u = e.deltaY - s.deltaY,
                      l = X(a, c, u);
                    (r = l.x), (o = l.y), (n = f(l.x) > f(l.y) ? l.x : l.y), (i = q(c, u)), (t.lastInterval = e);
                  } else (n = s.velocity), (r = s.velocityX), (o = s.velocityY), (i = s.direction);
                  (e.velocity = n), (e.velocityX = r), (e.velocityY = o), (e.direction = i);
                })(n, e);
              var d = t.element;
              A(e.srcEvent.target, d) && (d = e.srcEvent.target), (e.target = d);
            })(t, n),
            t.emit("hammer.input", n),
            t.recognize(n),
            (t.session.prevInput = n);
        }
        function F(t) {
          for (var e = [], n = 0; n < t.pointers.length; )
            (e[n] = { clientX: h(t.pointers[n].clientX), clientY: h(t.pointers[n].clientY) }), n++;
          return { timeStamp: p(), pointers: e, center: H(e), deltaX: t.deltaX, deltaY: t.deltaY };
        }
        function H(t) {
          var e = t.length;
          if (1 === e) return { x: h(t[0].clientX), y: h(t[0].clientY) };
          for (var n = 0, r = 0, o = 0; o < e; ) (n += t[o].clientX), (r += t[o].clientY), o++;
          return { x: h(n / e), y: h(r / e) };
        }
        function X(t, e, n) {
          return { x: e / t || 0, y: n / t || 0 };
        }
        function q(t, e) {
          return t === e ? 1 : f(t) >= f(e) ? (t < 0 ? 2 : 4) : e < 0 ? 8 : 16;
        }
        function W(t, e, n) {
          n || (n = M);
          var r = e[n[0]] - t[n[0]],
            o = e[n[1]] - t[n[1]];
          return Math.sqrt(r * r + o * o);
        }
        function Y(t, e, n) {
          return n || (n = M), (180 * Math.atan2(e[n[1]] - t[n[1]], e[n[0]] - t[n[0]])) / Math.PI;
        }
        N.prototype = {
          handler: function () {},
          init: function () {
            this.evEl && k(this.element, this.evEl, this.domHandler),
              this.evTarget && k(this.target, this.evTarget, this.domHandler),
              this.evWin && k(x(this.element), this.evWin, this.domHandler);
          },
          destroy: function () {
            this.evEl && S(this.element, this.evEl, this.domHandler),
              this.evTarget && S(this.target, this.evTarget, this.domHandler),
              this.evWin && S(x(this.element), this.evWin, this.domHandler);
          }
        };
        var V = { mousedown: 1, mousemove: 2, mouseup: 4 };
        function G() {
          (this.evEl = "mousedown"), (this.evWin = "mousemove mouseup"), (this.pressed = !1), N.apply(this, arguments);
        }
        b(G, N, {
          handler: function (t) {
            var e = V[t.type];
            1 & e && 0 === t.button && (this.pressed = !0),
              2 & e && 1 !== t.which && (e = 4),
              this.pressed &&
                (4 & e && (this.pressed = !1),
                this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: "mouse", srcEvent: t }));
          }
        });
        var $ = { pointerdown: 1, pointermove: 2, pointerup: 4, pointercancel: 8, pointerout: 8 },
          J = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
          K = "pointerdown",
          Q = "pointermove pointerup pointercancel";
        function tt() {
          (this.evEl = K), (this.evWin = Q), N.apply(this, arguments), (this.store = this.manager.session.pointerEvents = []);
        }
        o.MSPointerEvent && !o.PointerEvent && ((K = "MSPointerDown"), (Q = "MSPointerMove MSPointerUp MSPointerCancel")),
          b(tt, N, {
            handler: function (t) {
              var e = this.store,
                n = !1,
                r = t.type.toLowerCase().replace("ms", ""),
                o = $[r],
                i = J[t.pointerType] || t.pointerType,
                s = "touch" == i,
                a = I(e, t.pointerId, "pointerId");
              1 & o && (0 === t.button || s) ? a < 0 && (e.push(t), (a = e.length - 1)) : 12 & o && (n = !0),
                a < 0 ||
                  ((e[a] = t),
                  this.callback(this.manager, o, { pointers: e, changedPointers: [t], pointerType: i, srcEvent: t }),
                  n && e.splice(a, 1));
            }
          });
        var et = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function nt() {
          (this.evTarget = "touchstart"),
            (this.evWin = "touchstart touchmove touchend touchcancel"),
            (this.started = !1),
            N.apply(this, arguments);
        }
        function rt(t, e) {
          var n = O(t.touches),
            r = O(t.changedTouches);
          return 12 & e && (n = D(n.concat(r), "identifier", !0)), [n, r];
        }
        b(nt, N, {
          handler: function (t) {
            var e = et[t.type];
            if ((1 === e && (this.started = !0), this.started)) {
              var n = rt.call(this, t, e);
              12 & e && n[0].length - n[1].length == 0 && (this.started = !1),
                this.callback(this.manager, e, { pointers: n[0], changedPointers: n[1], pointerType: "touch", srcEvent: t });
            }
          }
        });
        var ot = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function it() {
          (this.evTarget = "touchstart touchmove touchend touchcancel"), (this.targetIds = {}), N.apply(this, arguments);
        }
        function st(t, e) {
          var n = O(t.touches),
            r = this.targetIds;
          if (3 & e && 1 === n.length) return (r[n[0].identifier] = !0), [n, n];
          var o,
            i,
            s = O(t.changedTouches),
            a = [],
            c = this.target;
          if (
            ((i = n.filter(function (t) {
              return A(t.target, c);
            })),
            1 === e)
          )
            for (o = 0; o < i.length; ) (r[i[o].identifier] = !0), o++;
          for (o = 0; o < s.length; ) r[s[o].identifier] && a.push(s[o]), 12 & e && delete r[s[o].identifier], o++;
          return a.length ? [D(i.concat(a), "identifier", !0), a] : void 0;
        }
        function at() {
          N.apply(this, arguments);
          var t = w(this.handler, this);
          (this.touch = new it(this.manager, t)),
            (this.mouse = new G(this.manager, t)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function ct(t, e) {
          1 & t ? ((this.primaryTouch = e.changedPointers[0].identifier), ut.call(this, e)) : 12 & t && ut.call(this, e);
        }
        function ut(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var n = { x: e.clientX, y: e.clientY };
            this.lastTouches.push(n);
            var r = this.lastTouches;
            setTimeout(function () {
              var t = r.indexOf(n);
              t > -1 && r.splice(t, 1);
            }, 2500);
          }
        }
        function lt(t) {
          for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
            var o = this.lastTouches[r],
              i = Math.abs(e - o.x),
              s = Math.abs(n - o.y);
            if (i <= 25 && s <= 25) return !0;
          }
          return !1;
        }
        b(it, N, {
          handler: function (t) {
            var e = ot[t.type],
              n = st.call(this, t, e);
            n && this.callback(this.manager, e, { pointers: n[0], changedPointers: n[1], pointerType: "touch", srcEvent: t });
          }
        }),
          b(at, N, {
            handler: function (t, e, n) {
              var r = "mouse" == n.pointerType;
              if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if ("touch" == n.pointerType) ct.call(this, e, n);
                else if (r && lt.call(this, n)) return;
                this.callback(t, e, n);
              }
            },
            destroy: function () {
              this.touch.destroy(), this.mouse.destroy();
            }
          });
        var ht = Z(l.style, "touchAction"),
          ft = void 0 !== ht,
          pt = (function () {
            if (!ft) return !1;
            var t = {},
              e = o.CSS && o.CSS.supports;
            return (
              ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
                t[n] = !e || o.CSS.supports("touch-action", n);
              }),
              t
            );
          })();
        function dt(t, e) {
          (this.manager = t), this.set(e);
        }
        function gt(t) {
          (this.options = c({}, this.defaults, t || {})),
            (this.id = z++),
            (this.manager = null),
            (this.options.enable = E(this.options.enable, !0)),
            (this.state = 1),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function yt(t) {
          return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : "";
        }
        function vt(t) {
          return 16 == t ? "down" : 8 == t ? "up" : 2 == t ? "left" : 4 == t ? "right" : "";
        }
        function mt(t, e) {
          var n = e.manager;
          return n ? n.get(t) : t;
        }
        function Tt() {
          gt.apply(this, arguments);
        }
        function bt() {
          Tt.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function wt() {
          Tt.apply(this, arguments);
        }
        function _t() {
          gt.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function Et() {
          Tt.apply(this, arguments);
        }
        function kt() {
          Tt.apply(this, arguments);
        }
        function St() {
          gt.apply(this, arguments), (this.pTime = !1), (this.pCenter = !1), (this._timer = null), (this._input = null), (this.count = 0);
        }
        function At(t, e) {
          return ((e = e || {}).recognizers = E(e.recognizers, At.defaults.preset)), new Ct(t, e);
        }
        function Ct(t, e) {
          var n;
          (this.options = c({}, At.defaults, e || {})),
            (this.options.inputTarget = this.options.inputTarget || t),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = t),
            (this.input = new ((n = this).options.inputClass || (L ? tt : B ? it : R ? at : G))(n, U)),
            (this.touchAction = new dt(this, this.options.touchAction)),
            Pt(this, !0),
            y(
              this.options.recognizers,
              function (t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
              },
              this
            );
        }
        function Pt(t, e) {
          var n,
            r = t.element;
          r.style &&
            (y(t.options.cssProps, function (o, i) {
              (n = Z(r.style, i)), e ? ((t.oldCssProps[n] = r.style[n]), (r.style[n] = o)) : (r.style[n] = t.oldCssProps[n] || "");
            }),
            e || (t.oldCssProps = {}));
        }
        (dt.prototype = {
          set: function (t) {
            "compute" == t && (t = this.compute()),
              ft && this.manager.element.style && pt[t] && (this.manager.element.style[ht] = t),
              (this.actions = t.toLowerCase().trim());
          },
          update: function () {
            this.set(this.manager.options.touchAction);
          },
          compute: function () {
            var t = [];
            return (
              y(this.manager.recognizers, function (e) {
                _(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
              }),
              (function (t) {
                if (C(t, "none")) return "none";
                var e = C(t, "pan-x"),
                  n = C(t, "pan-y");
                return e && n ? "none" : e || n ? (e ? "pan-x" : "pan-y") : C(t, "manipulation") ? "manipulation" : "auto";
              })(t.join(" "))
            );
          },
          preventDefaults: function (t) {
            var e = t.srcEvent,
              n = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var r = this.actions,
                o = C(r, "none") && !pt.none,
                i = C(r, "pan-y") && !pt["pan-y"],
                s = C(r, "pan-x") && !pt["pan-x"];
              if (o && 1 === t.pointers.length && t.distance < 2 && t.deltaTime < 250) return;
              if (!s || !i) return o || (i && 6 & n) || (s && 24 & n) ? this.preventSrc(e) : void 0;
            }
          },
          preventSrc: function (t) {
            (this.manager.session.prevented = !0), t.preventDefault();
          }
        }),
          (gt.prototype = {
            defaults: {},
            set: function (t) {
              return c(this.options, t), this.manager && this.manager.touchAction.update(), this;
            },
            recognizeWith: function (t) {
              if (g(t, "recognizeWith", this)) return this;
              var e = this.simultaneous;
              return e[(t = mt(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this;
            },
            dropRecognizeWith: function (t) {
              return g(t, "dropRecognizeWith", this) || ((t = mt(t, this)), delete this.simultaneous[t.id]), this;
            },
            requireFailure: function (t) {
              if (g(t, "requireFailure", this)) return this;
              var e = this.requireFail;
              return -1 === I(e, (t = mt(t, this))) && (e.push(t), t.requireFailure(this)), this;
            },
            dropRequireFailure: function (t) {
              if (g(t, "dropRequireFailure", this)) return this;
              t = mt(t, this);
              var e = I(this.requireFail, t);
              return e > -1 && this.requireFail.splice(e, 1), this;
            },
            hasRequireFailures: function () {
              return this.requireFail.length > 0;
            },
            canRecognizeWith: function (t) {
              return !!this.simultaneous[t.id];
            },
            emit: function (t) {
              var e = this,
                n = this.state;
              function r(n) {
                e.manager.emit(n, t);
              }
              n < 8 && r(e.options.event + yt(n)),
                r(e.options.event),
                t.additionalEvent && r(t.additionalEvent),
                n >= 8 && r(e.options.event + yt(n));
            },
            tryEmit: function (t) {
              if (this.canEmit()) return this.emit(t);
              this.state = 32;
            },
            canEmit: function () {
              for (var t = 0; t < this.requireFail.length; ) {
                if (!(33 & this.requireFail[t].state)) return !1;
                t++;
              }
              return !0;
            },
            recognize: function (t) {
              var e = c({}, t);
              if (!_(this.options.enable, [this, e])) return this.reset(), void (this.state = 32);
              56 & this.state && (this.state = 1), (this.state = this.process(e)), 30 & this.state && this.tryEmit(e);
            },
            process: function (t) {},
            getTouchAction: function () {},
            reset: function () {}
          }),
          b(Tt, gt, {
            defaults: { pointers: 1 },
            attrTest: function (t) {
              var e = this.options.pointers;
              return 0 === e || t.pointers.length === e;
            },
            process: function (t) {
              var e = this.state,
                n = t.eventType,
                r = 6 & e,
                o = this.attrTest(t);
              return r && (8 & n || !o) ? 16 | e : r || o ? (4 & n ? 8 | e : 2 & e ? 4 | e : 2) : 32;
            }
          }),
          b(bt, Tt, {
            defaults: { event: "pan", threshold: 10, pointers: 1, direction: 30 },
            getTouchAction: function () {
              var t = this.options.direction,
                e = [];
              return 6 & t && e.push("pan-y"), 24 & t && e.push("pan-x"), e;
            },
            directionTest: function (t) {
              var e = this.options,
                n = !0,
                r = t.distance,
                o = t.direction,
                i = t.deltaX,
                s = t.deltaY;
              return (
                o & e.direction ||
                  (6 & e.direction
                    ? ((o = 0 === i ? 1 : i < 0 ? 2 : 4), (n = i != this.pX), (r = Math.abs(t.deltaX)))
                    : ((o = 0 === s ? 1 : s < 0 ? 8 : 16), (n = s != this.pY), (r = Math.abs(t.deltaY)))),
                (t.direction = o),
                n && r > e.threshold && o & e.direction
              );
            },
            attrTest: function (t) {
              return Tt.prototype.attrTest.call(this, t) && (2 & this.state || (!(2 & this.state) && this.directionTest(t)));
            },
            emit: function (t) {
              (this.pX = t.deltaX), (this.pY = t.deltaY);
              var e = vt(t.direction);
              e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
            }
          }),
          b(wt, Tt, {
            defaults: { event: "pinch", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ["none"];
            },
            attrTest: function (t) {
              return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state);
            },
            emit: function (t) {
              1 !== t.scale && (t.additionalEvent = this.options.event + (t.scale < 1 ? "in" : "out")), this._super.emit.call(this, t);
            }
          }),
          b(_t, gt, {
            defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function () {
              return ["auto"];
            },
            process: function (t) {
              var e = this.options,
                n = t.pointers.length === e.pointers,
                r = t.distance < e.threshold,
                o = t.deltaTime > e.time;
              if (((this._input = t), !r || !n || (12 & t.eventType && !o))) this.reset();
              else if (1 & t.eventType)
                this.reset(),
                  (this._timer = d(
                    function () {
                      (this.state = 8), this.tryEmit();
                    },
                    e.time,
                    this
                  ));
              else if (4 & t.eventType) return 8;
              return 32;
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function (t) {
              8 === this.state &&
                (t && 4 & t.eventType
                  ? this.manager.emit(this.options.event + "up", t)
                  : ((this._input.timeStamp = p()), this.manager.emit(this.options.event, this._input)));
            }
          }),
          b(Et, Tt, {
            defaults: { event: "rotate", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ["none"];
            },
            attrTest: function (t) {
              return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state);
            }
          }),
          b(kt, Tt, {
            defaults: { event: "swipe", threshold: 10, velocity: 0.3, direction: 30, pointers: 1 },
            getTouchAction: function () {
              return bt.prototype.getTouchAction.call(this);
            },
            attrTest: function (t) {
              var e,
                n = this.options.direction;
              return (
                30 & n ? (e = t.overallVelocity) : 6 & n ? (e = t.overallVelocityX) : 24 & n && (e = t.overallVelocityY),
                this._super.attrTest.call(this, t) &&
                  n & t.offsetDirection &&
                  t.distance > this.options.threshold &&
                  t.maxPointers == this.options.pointers &&
                  f(e) > this.options.velocity &&
                  4 & t.eventType
              );
            },
            emit: function (t) {
              var e = vt(t.offsetDirection);
              e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
            }
          }),
          b(St, gt, {
            defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 },
            getTouchAction: function () {
              return ["manipulation"];
            },
            process: function (t) {
              var e = this.options,
                n = t.pointers.length === e.pointers,
                r = t.distance < e.threshold,
                o = t.deltaTime < e.time;
              if ((this.reset(), 1 & t.eventType && 0 === this.count)) return this.failTimeout();
              if (r && o && n) {
                if (4 != t.eventType) return this.failTimeout();
                var i = !this.pTime || t.timeStamp - this.pTime < e.interval,
                  s = !this.pCenter || W(this.pCenter, t.center) < e.posThreshold;
                if (
                  ((this.pTime = t.timeStamp),
                  (this.pCenter = t.center),
                  s && i ? (this.count += 1) : (this.count = 1),
                  (this._input = t),
                  0 == this.count % e.taps)
                )
                  return this.hasRequireFailures()
                    ? ((this._timer = d(
                        function () {
                          (this.state = 8), this.tryEmit();
                        },
                        e.interval,
                        this
                      )),
                      2)
                    : 8;
              }
              return 32;
            },
            failTimeout: function () {
              return (
                (this._timer = d(
                  function () {
                    this.state = 32;
                  },
                  this.options.interval,
                  this
                )),
                32
              );
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function () {
              8 == this.state && ((this._input.tapCount = this.count), this.manager.emit(this.options.event, this._input));
            }
          }),
          (At.VERSION = "2.0.7"),
          (At.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [Et, { enable: !1 }],
              [wt, { enable: !1 }, ["rotate"]],
              [kt, { direction: 6 }],
              [bt, { direction: 6 }, ["swipe"]],
              [St],
              [St, { event: "doubletap", taps: 2 }, ["tap"]],
              [_t]
            ],
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)"
            }
          }),
          (Ct.prototype = {
            set: function (t) {
              return (
                c(this.options, t),
                t.touchAction && this.touchAction.update(),
                t.inputTarget && (this.input.destroy(), (this.input.target = t.inputTarget), this.input.init()),
                this
              );
            },
            stop: function (t) {
              this.session.stopped = t ? 2 : 1;
            },
            recognize: function (t) {
              var e = this.session;
              if (!e.stopped) {
                var n;
                this.touchAction.preventDefaults(t);
                var r = this.recognizers,
                  o = e.curRecognizer;
                (!o || (o && 8 & o.state)) && (o = e.curRecognizer = null);
                for (var i = 0; i < r.length; )
                  (n = r[i]),
                    2 === e.stopped || (o && n != o && !n.canRecognizeWith(o)) ? n.reset() : n.recognize(t),
                    !o && 14 & n.state && (o = e.curRecognizer = n),
                    i++;
              }
            },
            get: function (t) {
              if (t instanceof gt) return t;
              for (var e = this.recognizers, n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
              return null;
            },
            add: function (t) {
              if (g(t, "add", this)) return this;
              var e = this.get(t.options.event);
              return e && this.remove(e), this.recognizers.push(t), (t.manager = this), this.touchAction.update(), t;
            },
            remove: function (t) {
              if (g(t, "remove", this)) return this;
              if ((t = this.get(t))) {
                var e = this.recognizers,
                  n = I(e, t);
                -1 !== n && (e.splice(n, 1), this.touchAction.update());
              }
              return this;
            },
            on: function (t, e) {
              if (void 0 !== t && void 0 !== e) {
                var n = this.handlers;
                return (
                  y(P(t), function (t) {
                    (n[t] = n[t] || []), n[t].push(e);
                  }),
                  this
                );
              }
            },
            off: function (t, e) {
              if (void 0 !== t) {
                var n = this.handlers;
                return (
                  y(P(t), function (t) {
                    e ? n[t] && n[t].splice(I(n[t], e), 1) : delete n[t];
                  }),
                  this
                );
              }
            },
            emit: function (t, e) {
              this.options.domEvents &&
                (function (t, e) {
                  var n = i.createEvent("Event");
                  n.initEvent(t, !0, !0), (n.gesture = e), e.target.dispatchEvent(n);
                })(t, e);
              var n = this.handlers[t] && this.handlers[t].slice();
              if (n && n.length) {
                (e.type = t),
                  (e.preventDefault = function () {
                    e.srcEvent.preventDefault();
                  });
                for (var r = 0; r < n.length; ) n[r](e), r++;
              }
            },
            destroy: function () {
              this.element && Pt(this, !1), (this.handlers = {}), (this.session = {}), this.input.destroy(), (this.element = null);
            }
          }),
          c(At, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: Ct,
            Input: N,
            TouchAction: dt,
            TouchInput: it,
            MouseInput: G,
            PointerEventInput: tt,
            TouchMouseInput: at,
            SingleTouchInput: nt,
            Recognizer: gt,
            AttrRecognizer: Tt,
            Tap: St,
            Pan: bt,
            Swipe: kt,
            Pinch: wt,
            Rotate: Et,
            Press: _t,
            on: k,
            off: S,
            each: y,
            merge: T,
            extend: m,
            assign: c,
            inherit: b,
            bindFn: w,
            prefixed: Z
          }),
          ((void 0 !== o ? o : "undefined" != typeof self ? self : {}).Hammer = At),
          void 0 ===
            (r = function () {
              return At;
            }.call(e, n, e, t)) || (t.exports = r);
      })(window, document);
    }
  },
  [[2, 0]]
]);
