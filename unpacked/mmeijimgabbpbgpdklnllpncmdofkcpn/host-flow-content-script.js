!(function () {
  var e = {
      16886: function (e) {
        (e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      12693: function (e) {
        (e.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      71459: function (e) {
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        (e.exports = function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      2153: function (e, t, n) {
        var r = n(10381);
        (e.exports = function (e, t) {
          var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (!n) {
            if (Array.isArray(e) || (n = r(e)) || (t && e && "number" == typeof e.length)) {
              n && (e = n);
              var o = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                },
                e: function (e) {
                  throw e;
                },
                f: i
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var a,
            s = !0,
            u = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (s = e.done), e;
            },
            e: function (e) {
              (u = !0), (a = e);
            },
            f: function () {
              try {
                s || null == n.return || n.return();
              } finally {
                if (u) throw a;
              }
            }
          };
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      10381: function (e, t, n) {
        var r = n(16886);
        (e.exports = function (e, t) {
          if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(e, t)
                : void 0
            );
          }
        }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0);
      },
      66723: function (e, t) {
        "use strict";
        t.N = void 0;
        var n = /^([^\w]*)(javascript|data|vbscript)/im,
          r = /&#(\w+)(^\w|;)?/g,
          o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
          i = /^([^:]+):/gm,
          a = [".", "/"];
        t.N = function (e) {
          var t,
            s = ((t = e || ""),
            t.replace(r, function (e, t) {
              return String.fromCharCode(t);
            }))
              .replace(o, "")
              .trim();
          if (!s) return "about:blank";
          if (
            (function (e) {
              return a.indexOf(e[0]) > -1;
            })(s)
          )
            return s;
          var u = s.match(i);
          return u && n.test(u[0]) ? "about:blank" : s;
        };
      },
      98981: function (e, t, n) {
        "use strict";
        var r = n(2153).default,
          o = n(12693).default,
          i = n(71459).default,
          a =
            ((function (e) {
              var t = e.performance;
              function n(e) {
                t && t.mark && t.mark(e);
              }
              function r(e, n) {
                t && t.measure && t.measure(e, n);
              }
              n("Zone");
              var a = e.__Zone_symbol_prefix || "__zone_symbol__";
              function s(e) {
                return a + e;
              }
              var u = !0 === e[s("forceDuplicateZoneCheck")];
              if (e.Zone) {
                if (u || "function" != typeof e.Zone.__symbol__) throw new Error("Zone already loaded.");
                return e.Zone;
              }
              var c = (function () {
                function t(e, n) {
                  o(this, t),
                    (this._parent = e),
                    (this._name = n ? n.name || "unnamed" : "<root>"),
                    (this._properties = (n && n.properties) || {}),
                    (this._zoneDelegate = new h(this, this._parent && this._parent._zoneDelegate, n));
                }
                return (
                  i(
                    t,
                    [
                      {
                        key: "parent",
                        get: function () {
                          return this._parent;
                        }
                      },
                      {
                        key: "name",
                        get: function () {
                          return this._name;
                        }
                      },
                      {
                        key: "get",
                        value: function (e) {
                          var t = this.getZoneWith(e);
                          if (t) return t._properties[e];
                        }
                      },
                      {
                        key: "getZoneWith",
                        value: function (e) {
                          for (var t = this; t; ) {
                            if (t._properties.hasOwnProperty(e)) return t;
                            t = t._parent;
                          }
                          return null;
                        }
                      },
                      {
                        key: "fork",
                        value: function (e) {
                          if (!e) throw new Error("ZoneSpec required!");
                          return this._zoneDelegate.fork(this, e);
                        }
                      },
                      {
                        key: "wrap",
                        value: function (e, t) {
                          if ("function" != typeof e) throw new Error("Expecting function got: " + e);
                          var n = this._zoneDelegate.intercept(this, e, t),
                            r = this;
                          return function () {
                            return r.runGuarded(n, this, arguments, t);
                          };
                        }
                      },
                      {
                        key: "run",
                        value: function (e, t, n, r) {
                          j = { parent: j, zone: this };
                          try {
                            return this._zoneDelegate.invoke(this, e, t, n, r);
                          } finally {
                            j = j.parent;
                          }
                        }
                      },
                      {
                        key: "runGuarded",
                        value: function (e) {
                          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = arguments.length > 3 ? arguments[3] : void 0;
                          j = { parent: j, zone: this };
                          try {
                            try {
                              return this._zoneDelegate.invoke(this, e, t, n, r);
                            } catch (o) {
                              if (this._zoneDelegate.handleError(this, o)) throw o;
                            }
                          } finally {
                            j = j.parent;
                          }
                        }
                      },
                      {
                        key: "runTask",
                        value: function (e, t, n) {
                          if (e.zone != this)
                            throw new Error(
                              "A task can only be run in the zone of creation! (Creation: " +
                                (e.zone || m).name +
                                "; Execution: " +
                                this.name +
                                ")"
                            );
                          if (e.state !== w || (e.type !== D && e.type !== Z)) {
                            var r = e.state != S;
                            r && e._transitionTo(S, E), e.runCount++;
                            var o = z;
                            (z = e), (j = { parent: j, zone: this });
                            try {
                              e.type == Z && e.data && !e.data.isPeriodic && (e.cancelFn = void 0);
                              try {
                                return this._zoneDelegate.invokeTask(this, e, t, n);
                              } catch (i) {
                                if (this._zoneDelegate.handleError(this, i)) throw i;
                              }
                            } finally {
                              e.state !== w &&
                                e.state !== O &&
                                (e.type == D || (e.data && e.data.isPeriodic)
                                  ? r && e._transitionTo(E, S)
                                  : ((e.runCount = 0), this._updateTaskCount(e, -1), r && e._transitionTo(w, S, w))),
                                (j = j.parent),
                                (z = o);
                            }
                          }
                        }
                      },
                      {
                        key: "scheduleTask",
                        value: function (e) {
                          if (e.zone && e.zone !== this)
                            for (var t = this; t; ) {
                              if (t === e.zone)
                                throw Error(
                                  "can not reschedule task to "
                                    .concat(this.name, " which is descendants of the original zone ")
                                    .concat(e.zone.name)
                                );
                              t = t.parent;
                            }
                          e._transitionTo(T, w);
                          var n = [];
                          (e._zoneDelegates = n), (e._zone = this);
                          try {
                            e = this._zoneDelegate.scheduleTask(this, e);
                          } catch (r) {
                            throw (e._transitionTo(O, T, w), this._zoneDelegate.handleError(this, r), r);
                          }
                          return e._zoneDelegates === n && this._updateTaskCount(e, 1), e.state == T && e._transitionTo(E, T), e;
                        }
                      },
                      {
                        key: "scheduleMicroTask",
                        value: function (e, t, n, r) {
                          return this.scheduleTask(new p(P, e, t, n, r, void 0));
                        }
                      },
                      {
                        key: "scheduleMacroTask",
                        value: function (e, t, n, r, o) {
                          return this.scheduleTask(new p(Z, e, t, n, r, o));
                        }
                      },
                      {
                        key: "scheduleEventTask",
                        value: function (e, t, n, r, o) {
                          return this.scheduleTask(new p(D, e, t, n, r, o));
                        }
                      },
                      {
                        key: "cancelTask",
                        value: function (e) {
                          if (e.zone != this)
                            throw new Error(
                              "A task can only be cancelled in the zone of creation! (Creation: " +
                                (e.zone || m).name +
                                "; Execution: " +
                                this.name +
                                ")"
                            );
                          e._transitionTo(x, E, S);
                          try {
                            this._zoneDelegate.cancelTask(this, e);
                          } catch (t) {
                            throw (e._transitionTo(O, x), this._zoneDelegate.handleError(this, t), t);
                          }
                          return this._updateTaskCount(e, -1), e._transitionTo(w, x), (e.runCount = 0), e;
                        }
                      },
                      {
                        key: "_updateTaskCount",
                        value: function (e, t) {
                          var n = e._zoneDelegates;
                          -1 == t && (e._zoneDelegates = null);
                          for (var r = 0; r < n.length; r++) n[r]._updateTaskCount(e.type, t);
                        }
                      }
                    ],
                    [
                      {
                        key: "assertZonePatched",
                        value: function () {
                          if (e.Promise !== C.ZoneAwarePromise)
                            throw new Error(
                              "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                            );
                        }
                      },
                      {
                        key: "root",
                        get: function () {
                          for (var e = t.current; e.parent; ) e = e.parent;
                          return e;
                        }
                      },
                      {
                        key: "current",
                        get: function () {
                          return j.zone;
                        }
                      },
                      {
                        key: "currentTask",
                        get: function () {
                          return z;
                        }
                      },
                      {
                        key: "__load_patch",
                        value: function (o, i) {
                          var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          if (C.hasOwnProperty(o)) {
                            if (!a && u) throw Error("Already loaded patch: " + o);
                          } else if (!e["__Zone_disable_" + o]) {
                            var s = "Zone:" + o;
                            n(s), (C[o] = i(e, t, I)), r(s, s);
                          }
                        }
                      }
                    ]
                  ),
                  t
                );
              })();
              c.__symbol__ = s;
              var l,
                f = {
                  name: "",
                  onHasTask: function (e, t, n, r) {
                    return e.hasTask(n, r);
                  },
                  onScheduleTask: function (e, t, n, r) {
                    return e.scheduleTask(n, r);
                  },
                  onInvokeTask: function (e, t, n, r, o, i) {
                    return e.invokeTask(n, r, o, i);
                  },
                  onCancelTask: function (e, t, n, r) {
                    return e.cancelTask(n, r);
                  }
                },
                h = (function () {
                  function e(t, n, r) {
                    o(this, e),
                      (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
                      (this.zone = t),
                      (this._parentDelegate = n),
                      (this._forkZS = r && (r && r.onFork ? r : n._forkZS)),
                      (this._forkDlgt = r && (r.onFork ? n : n._forkDlgt)),
                      (this._forkCurrZone = r && (r.onFork ? this.zone : n._forkCurrZone)),
                      (this._interceptZS = r && (r.onIntercept ? r : n._interceptZS)),
                      (this._interceptDlgt = r && (r.onIntercept ? n : n._interceptDlgt)),
                      (this._interceptCurrZone = r && (r.onIntercept ? this.zone : n._interceptCurrZone)),
                      (this._invokeZS = r && (r.onInvoke ? r : n._invokeZS)),
                      (this._invokeDlgt = r && (r.onInvoke ? n : n._invokeDlgt)),
                      (this._invokeCurrZone = r && (r.onInvoke ? this.zone : n._invokeCurrZone)),
                      (this._handleErrorZS = r && (r.onHandleError ? r : n._handleErrorZS)),
                      (this._handleErrorDlgt = r && (r.onHandleError ? n : n._handleErrorDlgt)),
                      (this._handleErrorCurrZone = r && (r.onHandleError ? this.zone : n._handleErrorCurrZone)),
                      (this._scheduleTaskZS = r && (r.onScheduleTask ? r : n._scheduleTaskZS)),
                      (this._scheduleTaskDlgt = r && (r.onScheduleTask ? n : n._scheduleTaskDlgt)),
                      (this._scheduleTaskCurrZone = r && (r.onScheduleTask ? this.zone : n._scheduleTaskCurrZone)),
                      (this._invokeTaskZS = r && (r.onInvokeTask ? r : n._invokeTaskZS)),
                      (this._invokeTaskDlgt = r && (r.onInvokeTask ? n : n._invokeTaskDlgt)),
                      (this._invokeTaskCurrZone = r && (r.onInvokeTask ? this.zone : n._invokeTaskCurrZone)),
                      (this._cancelTaskZS = r && (r.onCancelTask ? r : n._cancelTaskZS)),
                      (this._cancelTaskDlgt = r && (r.onCancelTask ? n : n._cancelTaskDlgt)),
                      (this._cancelTaskCurrZone = r && (r.onCancelTask ? this.zone : n._cancelTaskCurrZone)),
                      (this._hasTaskZS = null),
                      (this._hasTaskDlgt = null),
                      (this._hasTaskDlgtOwner = null),
                      (this._hasTaskCurrZone = null);
                    var i = r && r.onHasTask;
                    (i || (n && n._hasTaskZS)) &&
                      ((this._hasTaskZS = i ? r : f),
                      (this._hasTaskDlgt = n),
                      (this._hasTaskDlgtOwner = this),
                      (this._hasTaskCurrZone = t),
                      r.onScheduleTask ||
                        ((this._scheduleTaskZS = f), (this._scheduleTaskDlgt = n), (this._scheduleTaskCurrZone = this.zone)),
                      r.onInvokeTask || ((this._invokeTaskZS = f), (this._invokeTaskDlgt = n), (this._invokeTaskCurrZone = this.zone)),
                      r.onCancelTask || ((this._cancelTaskZS = f), (this._cancelTaskDlgt = n), (this._cancelTaskCurrZone = this.zone)));
                  }
                  return (
                    i(e, [
                      {
                        key: "fork",
                        value: function (e, t) {
                          return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, e, t) : new c(e, t);
                        }
                      },
                      {
                        key: "intercept",
                        value: function (e, t, n) {
                          return this._interceptZS
                            ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, e, t, n)
                            : t;
                        }
                      },
                      {
                        key: "invoke",
                        value: function (e, t, n, r, o) {
                          return this._invokeZS
                            ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, e, t, n, r, o)
                            : t.apply(n, r);
                        }
                      },
                      {
                        key: "handleError",
                        value: function (e, t) {
                          return (
                            !this._handleErrorZS ||
                            this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, e, t)
                          );
                        }
                      },
                      {
                        key: "scheduleTask",
                        value: function (e, t) {
                          var n = t;
                          if (this._scheduleTaskZS)
                            this._hasTaskZS && n._zoneDelegates.push(this._hasTaskDlgtOwner),
                              (n = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, e, t)) ||
                                (n = t);
                          else if (t.scheduleFn) t.scheduleFn(t);
                          else {
                            if (t.type != P) throw new Error("Task is missing scheduleFn.");
                            g(t);
                          }
                          return n;
                        }
                      },
                      {
                        key: "invokeTask",
                        value: function (e, t, n, r) {
                          return this._invokeTaskZS
                            ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, e, t, n, r)
                            : t.callback.apply(n, r);
                        }
                      },
                      {
                        key: "cancelTask",
                        value: function (e, t) {
                          var n;
                          if (this._cancelTaskZS) n = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, e, t);
                          else {
                            if (!t.cancelFn) throw Error("Task is not cancelable");
                            n = t.cancelFn(t);
                          }
                          return n;
                        }
                      },
                      {
                        key: "hasTask",
                        value: function (e, t) {
                          try {
                            this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, e, t);
                          } catch (n) {
                            this.handleError(e, n);
                          }
                        }
                      },
                      {
                        key: "_updateTaskCount",
                        value: function (e, t) {
                          var n = this._taskCounts,
                            r = n[e],
                            o = (n[e] = r + t);
                          if (o < 0) throw new Error("More tasks executed then were scheduled.");
                          (0 != r && 0 != o) ||
                            this.hasTask(this.zone, {
                              microTask: n.microTask > 0,
                              macroTask: n.macroTask > 0,
                              eventTask: n.eventTask > 0,
                              change: e
                            });
                        }
                      }
                    ]),
                    e
                  );
                })(),
                p = (function () {
                  function t(n, r, i, a, s, u) {
                    if (
                      (o(this, t),
                      (this._zone = null),
                      (this.runCount = 0),
                      (this._zoneDelegates = null),
                      (this._state = "notScheduled"),
                      (this.type = n),
                      (this.source = r),
                      (this.data = a),
                      (this.scheduleFn = s),
                      (this.cancelFn = u),
                      !i)
                    )
                      throw new Error("callback is not defined");
                    this.callback = i;
                    var c = this;
                    this.invoke =
                      n === D && a && a.useG
                        ? t.invokeTask
                        : function () {
                            return t.invokeTask.call(e, c, this, arguments);
                          };
                  }
                  return (
                    i(
                      t,
                      [
                        {
                          key: "zone",
                          get: function () {
                            return this._zone;
                          }
                        },
                        {
                          key: "state",
                          get: function () {
                            return this._state;
                          }
                        },
                        {
                          key: "cancelScheduleRequest",
                          value: function () {
                            this._transitionTo(w, T);
                          }
                        },
                        {
                          key: "_transitionTo",
                          value: function (e, t, n) {
                            if (this._state !== t && this._state !== n)
                              throw new Error(
                                ""
                                  .concat(this.type, " '")
                                  .concat(this.source, "': can not transition to '")
                                  .concat(e, "', expecting state '")
                                  .concat(t, "'")
                                  .concat(n ? " or '" + n + "'" : "", ", was '")
                                  .concat(this._state, "'.")
                              );
                            (this._state = e), e == w && (this._zoneDelegates = null);
                          }
                        },
                        {
                          key: "toString",
                          value: function () {
                            return this.data && void 0 !== this.data.handleId
                              ? this.data.handleId.toString()
                              : Object.prototype.toString.call(this);
                          }
                        },
                        {
                          key: "toJSON",
                          value: function () {
                            return {
                              type: this.type,
                              state: this.state,
                              source: this.source,
                              zone: this.zone.name,
                              runCount: this.runCount
                            };
                          }
                        }
                      ],
                      [
                        {
                          key: "invokeTask",
                          value: function (e, t, n) {
                            e || (e = this), N++;
                            try {
                              return e.runCount++, e.zone.runTask(e, t, n);
                            } finally {
                              1 == N && _(), N--;
                            }
                          }
                        }
                      ]
                    ),
                    t
                  );
                })(),
                d = s("setTimeout"),
                v = s("Promise"),
                y = s("then"),
                b = [],
                k = !1;
              function g(t) {
                if (0 === N && 0 === b.length)
                  if ((l || (e[v] && (l = e[v].resolve(0))), l)) {
                    var n = l[y];
                    n || (n = l.then), n.call(l, _);
                  } else e[d](_, 0);
                t && b.push(t);
              }
              function _() {
                if (!k) {
                  for (k = !0; b.length; ) {
                    var e = b;
                    b = [];
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      try {
                        n.zone.runTask(n, null, null);
                      } catch (r) {
                        I.onUnhandledError(r);
                      }
                    }
                  }
                  I.microtaskDrainDone(), (k = !1);
                }
              }
              var m = { name: "NO ZONE" },
                w = "notScheduled",
                T = "scheduling",
                E = "scheduled",
                S = "running",
                x = "canceling",
                O = "unknown",
                P = "microTask",
                Z = "macroTask",
                D = "eventTask",
                C = {},
                I = {
                  symbol: s,
                  currentZoneFrame: function () {
                    return j;
                  },
                  onUnhandledError: A,
                  microtaskDrainDone: A,
                  scheduleMicroTask: g,
                  showUncaughtError: function () {
                    return !c[s("ignoreConsoleErrorUncaughtError")];
                  },
                  patchEventTarget: function () {
                    return [];
                  },
                  patchOnProperties: A,
                  patchMethod: function () {
                    return A;
                  },
                  bindArguments: function () {
                    return [];
                  },
                  patchThen: function () {
                    return A;
                  },
                  patchMacroTask: function () {
                    return A;
                  },
                  patchEventPrototype: function () {
                    return A;
                  },
                  isIEOrEdge: function () {
                    return !1;
                  },
                  getGlobalObjects: function () {},
                  ObjectDefineProperty: function () {
                    return A;
                  },
                  ObjectGetOwnPropertyDescriptor: function () {},
                  ObjectCreate: function () {},
                  ArraySlice: function () {
                    return [];
                  },
                  patchClass: function () {
                    return A;
                  },
                  wrapWithCurrentZone: function () {
                    return A;
                  },
                  filterProperties: function () {
                    return [];
                  },
                  attachOriginToPatched: function () {
                    return A;
                  },
                  _redefineProperty: function () {
                    return A;
                  },
                  patchCallbacks: function () {
                    return A;
                  }
                },
                j = { parent: null, zone: new c(null, null) },
                z = null,
                N = 0;
              function A() {}
              r("Zone", "Zone"), (e.Zone = c);
            })(("undefined" != typeof window && window) || ("undefined" != typeof self && self) || global),
            Object.getOwnPropertyDescriptor),
          s = Object.defineProperty,
          u = Object.getPrototypeOf,
          c = Object.create,
          l = Array.prototype.slice,
          f = "addEventListener",
          h = "removeEventListener",
          p = Zone.__symbol__(f),
          d = Zone.__symbol__(h),
          v = "true",
          y = "false",
          b = Zone.__symbol__("");
        function k(e, t) {
          return Zone.current.wrap(e, t);
        }
        function g(e, t, n, r, o) {
          return Zone.current.scheduleMacroTask(e, t, n, r, o);
        }
        var _ = Zone.__symbol__,
          m = "undefined" != typeof window,
          w = m ? window : void 0,
          T = (m && w) || ("object" == typeof self && self) || global,
          E = [null];
        function S(e, t) {
          for (var n = e.length - 1; n >= 0; n--) "function" == typeof e[n] && (e[n] = k(e[n], t + "_" + n));
          return e;
        }
        function x(e) {
          return !e || (!1 !== e.writable && !("function" == typeof e.get && void 0 === e.set));
        }
        var O = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
          P = !("nw" in T) && void 0 !== T.process && "[object process]" === {}.toString.call(T.process),
          Z = !P && !O && !(!m || !w.HTMLElement),
          D = void 0 !== T.process && "[object process]" === {}.toString.call(T.process) && !O && !(!m || !w.HTMLElement),
          C = {},
          I = function (e) {
            if ((e = e || T.event)) {
              var t = C[e.type];
              t || (t = C[e.type] = _("ON_PROPERTY" + e.type));
              var n,
                r = this || e.target || T,
                o = r[t];
              if (Z && r === w && "error" === e.type) {
                var i = e;
                !0 === (n = o && o.call(this, i.message, i.filename, i.lineno, i.colno, i.error)) && e.preventDefault();
              } else null == (n = o && o.apply(this, arguments)) || n || e.preventDefault();
              return n;
            }
          };
        function j(e, t, n) {
          var r = a(e, t);
          if ((!r && n && a(n, t) && (r = { enumerable: !0, configurable: !0 }), r && r.configurable)) {
            var o = _("on" + t + "patched");
            if (!e.hasOwnProperty(o) || !e[o]) {
              delete r.writable, delete r.value;
              var i = r.get,
                u = r.set,
                c = t.substr(2),
                l = C[c];
              l || (l = C[c] = _("ON_PROPERTY" + c)),
                (r.set = function (t) {
                  var n = this;
                  n || e !== T || (n = T),
                    n &&
                      (n[l] && n.removeEventListener(c, I),
                      u && u.apply(n, E),
                      "function" == typeof t ? ((n[l] = t), n.addEventListener(c, I, !1)) : (n[l] = null));
                }),
                (r.get = function () {
                  var n = this;
                  if ((n || e !== T || (n = T), !n)) return null;
                  var o = n[l];
                  if (o) return o;
                  if (i) {
                    var a = i && i.call(this);
                    if (a) return r.set.call(this, a), "function" == typeof n.removeAttribute && n.removeAttribute(t), a;
                  }
                  return null;
                }),
                s(e, t, r),
                (e[o] = !0);
            }
          }
        }
        function z(e, t, n) {
          if (t) for (var r = 0; r < t.length; r++) j(e, "on" + t[r], n);
          else {
            var o = [];
            for (var i in e) "on" == i.substr(0, 2) && o.push(i);
            for (var a = 0; a < o.length; a++) j(e, o[a], n);
          }
        }
        var N = _("originalInstance");
        function A(e) {
          var t = T[e];
          if (t) {
            (T[_(e)] = t),
              (T[e] = function () {
                var n = S(arguments, e);
                switch (n.length) {
                  case 0:
                    this[N] = new t();
                    break;
                  case 1:
                    this[N] = new t(n[0]);
                    break;
                  case 2:
                    this[N] = new t(n[0], n[1]);
                    break;
                  case 3:
                    this[N] = new t(n[0], n[1], n[2]);
                    break;
                  case 4:
                    this[N] = new t(n[0], n[1], n[2], n[3]);
                    break;
                  default:
                    throw new Error("Arg list too long.");
                }
              }),
              F(T[e], t);
            var n,
              r = new t(function () {});
            for (n in r)
              ("XMLHttpRequest" === e && "responseBlob" === n) ||
                (function (t) {
                  "function" == typeof r[t]
                    ? (T[e].prototype[t] = function () {
                        return this[N][t].apply(this[N], arguments);
                      })
                    : s(T[e].prototype, t, {
                        set: function (n) {
                          "function" == typeof n ? ((this[N][t] = k(n, e + "." + t)), F(this[N][t], n)) : (this[N][t] = n);
                        },
                        get: function () {
                          return this[N][t];
                        }
                      });
                })(n);
            for (n in t) "prototype" !== n && t.hasOwnProperty(n) && (T[e][n] = t[n]);
          }
        }
        function M(e, t, n) {
          for (var r = e; r && !r.hasOwnProperty(t); ) r = u(r);
          !r && e[t] && (r = e);
          var o = _(t),
            i = null;
          if (r && (!(i = r[o]) || !r.hasOwnProperty(o)) && ((i = r[o] = r[t]), x(r && a(r, t)))) {
            var s = n(i, o, t);
            (r[t] = function () {
              return s(this, arguments);
            }),
              F(r[t], i);
          }
          return i;
        }
        function R(e, t, n) {
          var r = null;
          function o(e) {
            var t = e.data;
            return (
              (t.args[t.cbIdx] = function () {
                e.invoke.apply(this, arguments);
              }),
              r.apply(t.target, t.args),
              e
            );
          }
          r = M(e, t, function (e) {
            return function (t, r) {
              var i = n(t, r);
              return i.cbIdx >= 0 && "function" == typeof r[i.cbIdx] ? g(i.name, r[i.cbIdx], i, o) : e.apply(t, r);
            };
          });
        }
        function F(e, t) {
          e[_("OriginalDelegate")] = t;
        }
        var H = !1,
          L = !1;
        function V() {
          if (H) return L;
          H = !0;
          try {
            var e = w.navigator.userAgent;
            (-1 === e.indexOf("MSIE ") && -1 === e.indexOf("Trident/") && -1 === e.indexOf("Edge/")) || (L = !0);
          } catch (t) {}
          return L;
        }
        Zone.__load_patch("ZoneAwarePromise", function (e, t, n) {
          var a = Object.getOwnPropertyDescriptor,
            s = Object.defineProperty,
            u = n.symbol,
            c = [],
            l = !0 === e[u("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
            f = u("Promise"),
            h = u("then");
          (n.onUnhandledError = function (e) {
            if (n.showUncaughtError()) {
              var t = e && e.rejection;
              t
                ? console.error(
                    "Unhandled Promise rejection:",
                    t instanceof Error ? t.message : t,
                    "; Zone:",
                    e.zone.name,
                    "; Task:",
                    e.task && e.task.source,
                    "; Value:",
                    t,
                    t instanceof Error ? t.stack : void 0
                  )
                : console.error(e);
            }
          }),
            (n.microtaskDrainDone = function () {
              for (
                var e = function () {
                  var e = c.shift();
                  try {
                    e.zone.runGuarded(function () {
                      if (e.throwOriginal) throw e.rejection;
                      throw e;
                    });
                  } catch (r) {
                    !(function (e) {
                      n.onUnhandledError(e);
                      try {
                        var r = t[p];
                        "function" == typeof r && r.call(this, e);
                      } catch (o) {}
                    })(r);
                  }
                };
                c.length;

              )
                e();
            });
          var p = u("unhandledPromiseRejectionHandler");
          function d(e) {
            return e && e.then;
          }
          function v(e) {
            return e;
          }
          function y(e) {
            return I.reject(e);
          }
          var b = u("state"),
            k = u("value"),
            g = u("finally"),
            _ = u("parentPromiseValue"),
            m = u("parentPromiseState"),
            w = null,
            T = !0,
            E = !1;
          function S(e, t) {
            return function (n) {
              try {
                O(e, t, n);
              } catch (r) {
                O(e, !1, r);
              }
            };
          }
          var x = u("currentTaskTrace");
          function O(e, r, o) {
            var i,
              a,
              u =
                ((i = !1),
                function (e) {
                  return function () {
                    i || ((i = !0), e.apply(null, arguments));
                  };
                });
            if (e === o) throw new TypeError("Promise resolved with itself");
            if (e[b] === w) {
              var f = null;
              try {
                ("object" != typeof o && "function" != typeof o) || (f = o && o.then);
              } catch (y) {
                return (
                  u(function () {
                    O(e, !1, y);
                  })(),
                  e
                );
              }
              if (r !== E && o instanceof I && o.hasOwnProperty(b) && o.hasOwnProperty(k) && o[b] !== w) Z(o), O(e, o[b], o[k]);
              else if (r !== E && "function" == typeof f)
                try {
                  f.call(o, u(S(e, r)), u(S(e, !1)));
                } catch (y) {
                  u(function () {
                    O(e, !1, y);
                  })();
                }
              else {
                e[b] = r;
                var h = e[k];
                if (((e[k] = o), e[g] === g && r === T && ((e[b] = e[m]), (e[k] = e[_])), r === E && o instanceof Error)) {
                  var p = t.currentTask && t.currentTask.data && t.currentTask.data.__creationTrace__;
                  p && s(o, x, { configurable: !0, enumerable: !1, writable: !0, value: p });
                }
                for (var d = 0; d < h.length; ) D(e, h[d++], h[d++], h[d++], h[d++]);
                if (0 == h.length && r == E) {
                  e[b] = 0;
                  var v = o;
                  try {
                    throw new Error(
                      "Uncaught (in promise): " +
                        ((a = o) && a.toString === Object.prototype.toString
                          ? ((a.constructor && a.constructor.name) || "") + ": " + JSON.stringify(a)
                          : a
                          ? a.toString()
                          : Object.prototype.toString.call(a)) +
                        (o && o.stack ? "\n" + o.stack : "")
                    );
                  } catch (y) {
                    v = y;
                  }
                  l && (v.throwOriginal = !0),
                    (v.rejection = o),
                    (v.promise = e),
                    (v.zone = t.current),
                    (v.task = t.currentTask),
                    c.push(v),
                    n.scheduleMicroTask();
                }
              }
            }
            return e;
          }
          var P = u("rejectionHandledHandler");
          function Z(e) {
            if (0 === e[b]) {
              try {
                var n = t[P];
                n && "function" == typeof n && n.call(this, { rejection: e[k], promise: e });
              } catch (o) {}
              e[b] = E;
              for (var r = 0; r < c.length; r++) e === c[r].promise && c.splice(r, 1);
            }
          }
          function D(e, t, n, r, o) {
            Z(e);
            var i = e[b],
              a = i ? ("function" == typeof r ? r : v) : "function" == typeof o ? o : y;
            t.scheduleMicroTask(
              "Promise.then",
              function () {
                try {
                  var r = e[k],
                    o = !!n && g === n[g];
                  o && ((n[_] = r), (n[m] = i));
                  var s = t.run(a, void 0, o && a !== y && a !== v ? [] : [r]);
                  O(n, !0, s);
                } catch (u) {
                  O(n, !1, u);
                }
              },
              n
            );
          }
          var C = function () {},
            I = (function () {
              function e(t) {
                o(this, e);
                var n = this;
                if (!(n instanceof e)) throw new Error("Must be an instanceof Promise.");
                (n[b] = w), (n[k] = []);
                try {
                  t && t(S(n, T), S(n, E));
                } catch (r) {
                  O(n, !1, r);
                }
              }
              return (
                i(
                  e,
                  [
                    {
                      key: Symbol.toStringTag,
                      get: function () {
                        return "Promise";
                      }
                    },
                    {
                      key: Symbol.species,
                      get: function () {
                        return e;
                      }
                    },
                    {
                      key: "then",
                      value: function (n, r) {
                        var o = this.constructor[Symbol.species];
                        (o && "function" == typeof o) || (o = this.constructor || e);
                        var i = new o(C),
                          a = t.current;
                        return this[b] == w ? this[k].push(a, i, n, r) : D(this, a, i, n, r), i;
                      }
                    },
                    {
                      key: "catch",
                      value: function (e) {
                        return this.then(null, e);
                      }
                    },
                    {
                      key: "finally",
                      value: function (n) {
                        var r = this.constructor[Symbol.species];
                        (r && "function" == typeof r) || (r = e);
                        var o = new r(C);
                        o[g] = g;
                        var i = t.current;
                        return this[b] == w ? this[k].push(i, o, n, n) : D(this, i, o, n, n), o;
                      }
                    }
                  ],
                  [
                    {
                      key: "toString",
                      value: function () {
                        return "function ZoneAwarePromise() { [native code] }";
                      }
                    },
                    {
                      key: "resolve",
                      value: function (e) {
                        return O(new this(null), T, e);
                      }
                    },
                    {
                      key: "reject",
                      value: function (e) {
                        return O(new this(null), E, e);
                      }
                    },
                    {
                      key: "race",
                      value: function (e) {
                        var t,
                          n,
                          o = new this(function (e, r) {
                            (t = e), (n = r);
                          });
                        function i(e) {
                          t(e);
                        }
                        function a(e) {
                          n(e);
                        }
                        var s,
                          u = r(e);
                        try {
                          for (u.s(); !(s = u.n()).done; ) {
                            var c = s.value;
                            d(c) || (c = this.resolve(c)), c.then(i, a);
                          }
                        } catch (l) {
                          u.e(l);
                        } finally {
                          u.f();
                        }
                        return o;
                      }
                    },
                    {
                      key: "all",
                      value: function (t) {
                        return e.allWithCallback(t);
                      }
                    },
                    {
                      key: "allSettled",
                      value: function (t) {
                        return (this && this.prototype instanceof e ? this : e).allWithCallback(t, {
                          thenCallback: function (e) {
                            return { status: "fulfilled", value: e };
                          },
                          errorCallback: function (e) {
                            return { status: "rejected", reason: e };
                          }
                        });
                      }
                    },
                    {
                      key: "allWithCallback",
                      value: function (e, t) {
                        var n,
                          o,
                          i,
                          a = this,
                          s = new this(function (e, t) {
                            (n = e), (o = t);
                          }),
                          u = 2,
                          c = 0,
                          l = [],
                          f = r(e);
                        try {
                          var h = function () {
                            var e = i.value;
                            d(e) || (e = a.resolve(e));
                            var r = c;
                            try {
                              e.then(
                                function (e) {
                                  (l[r] = t ? t.thenCallback(e) : e), 0 == --u && n(l);
                                },
                                function (e) {
                                  t ? ((l[r] = t.errorCallback(e)), 0 == --u && n(l)) : o(e);
                                }
                              );
                            } catch (s) {
                              o(s);
                            }
                            u++, c++;
                          };
                          for (f.s(); !(i = f.n()).done; ) h();
                        } catch (p) {
                          f.e(p);
                        } finally {
                          f.f();
                        }
                        return 0 == (u -= 2) && n(l), s;
                      }
                    }
                  ]
                ),
                e
              );
            })();
          (I.resolve = I.resolve), (I.reject = I.reject), (I.race = I.race), (I.all = I.all);
          var j = (e[f] = e.Promise);
          e.Promise = I;
          var z = u("thenPatched");
          function N(e) {
            var t = e.prototype,
              n = a(t, "then");
            if (!n || (!1 !== n.writable && n.configurable)) {
              var r = t.then;
              (t[h] = r),
                (e.prototype.then = function (e, t) {
                  var n = this;
                  return new I(function (e, t) {
                    r.call(n, e, t);
                  }).then(e, t);
                }),
                (e[z] = !0);
            }
          }
          return (
            (n.patchThen = N),
            j &&
              (N(j),
              M(e, "fetch", function (e) {
                return (
                  (t = e),
                  function (e, n) {
                    var r = t.apply(e, n);
                    if (r instanceof I) return r;
                    var o = r.constructor;
                    return o[z] || N(o), r;
                  }
                );
                var t;
              })),
            (Promise[t.__symbol__("uncaughtPromiseErrors")] = c),
            I
          );
        }),
          Zone.__load_patch("toString", function (e) {
            var t = Function.prototype.toString,
              n = _("OriginalDelegate"),
              r = _("Promise"),
              o = _("Error"),
              i = function () {
                if ("function" == typeof this) {
                  var i = this[n];
                  if (i) return "function" == typeof i ? t.call(i) : Object.prototype.toString.call(i);
                  if (this === Promise) {
                    var a = e[r];
                    if (a) return t.call(a);
                  }
                  if (this === Error) {
                    var s = e[o];
                    if (s) return t.call(s);
                  }
                }
                return t.call(this);
              };
            (i[n] = t), (Function.prototype.toString = i);
            var a = Object.prototype.toString;
            Object.prototype.toString = function () {
              return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : a.call(this);
            };
          });
        var q = !1;
        if ("undefined" != typeof window)
          try {
            var G = Object.defineProperty({}, "passive", {
              get: function () {
                q = !0;
              }
            });
            window.addEventListener("test", G, G), window.removeEventListener("test", G, G);
          } catch (be) {
            q = !1;
          }
        var U = { useG: !0 },
          B = {},
          W = {},
          Y = new RegExp("^" + b + "(\\w+)(true|false)$"),
          X = _("propagationStopped");
        function J(e, t) {
          var n = (t ? t(e) : e) + y,
            r = (t ? t(e) : e) + v,
            o = b + n,
            i = b + r;
          (B[e] = {}), (B[e].false = o), (B[e].true = i);
        }
        function K(e, t, n) {
          var r = (n && n.add) || f,
            o = (n && n.rm) || h,
            i = (n && n.listeners) || "eventListeners",
            a = (n && n.rmAll) || "removeAllListeners",
            s = _(r),
            c = "." + r + ":",
            l = function (e, t, n) {
              if (!e.isRemoved) {
                var r = e.callback;
                "object" == typeof r &&
                  r.handleEvent &&
                  ((e.callback = function (e) {
                    return r.handleEvent(e);
                  }),
                  (e.originalDelegate = r)),
                  e.invoke(e, t, [n]);
                var i = e.options;
                i && "object" == typeof i && i.once && t[o].call(t, n.type, e.originalDelegate ? e.originalDelegate : e.callback, i);
              }
            },
            p = function (t) {
              if ((t = t || e.event)) {
                var n = this || t.target || e,
                  r = n[B[t.type].false];
                if (r)
                  if (1 === r.length) l(r[0], n, t);
                  else for (var o = r.slice(), i = 0; i < o.length && (!t || !0 !== t[X]); i++) l(o[i], n, t);
              }
            },
            d = function (t) {
              if ((t = t || e.event)) {
                var n = this || t.target || e,
                  r = n[B[t.type].true];
                if (r)
                  if (1 === r.length) l(r[0], n, t);
                  else for (var o = r.slice(), i = 0; i < o.length && (!t || !0 !== t[X]); i++) l(o[i], n, t);
              }
            };
          function k(t, n) {
            if (!t) return !1;
            var l = !0;
            n && void 0 !== n.useG && (l = n.useG);
            var f = n && n.vh,
              h = !0;
            n && void 0 !== n.chkDup && (h = n.chkDup);
            var k = !1;
            n && void 0 !== n.rt && (k = n.rt);
            for (var g = t; g && !g.hasOwnProperty(r); ) g = u(g);
            if ((!g && t[r] && (g = t), !g)) return !1;
            if (g[s]) return !1;
            var m,
              w = n && n.eventNameToString,
              T = {},
              E = (g[s] = g[r]),
              S = (g[_(o)] = g[o]),
              x = (g[_(i)] = g[i]),
              O = (g[_(a)] = g[a]);
            function Z(e, t) {
              return !q && "object" == typeof e && e
                ? !!e.capture
                : q && t
                ? "boolean" == typeof e
                  ? { capture: e, passive: !0 }
                  : e
                  ? "object" == typeof e && !1 !== e.passive
                    ? Object.assign(Object.assign({}, e), { passive: !0 })
                    : e
                  : { passive: !0 }
                : e;
            }
            n && n.prepend && (m = g[_(n.prepend)] = g[n.prepend]);
            var D = l
                ? function (e) {
                    if (!T.isExisting) return E.call(T.target, T.eventName, T.capture ? d : p, T.options);
                  }
                : function (e) {
                    return E.call(T.target, T.eventName, e.invoke, T.options);
                  },
              C = l
                ? function (e) {
                    if (!e.isRemoved) {
                      var t,
                        n = B[e.eventName];
                      n && (t = n[e.capture ? v : y]);
                      var r = t && e.target[t];
                      if (r)
                        for (var o = 0; o < r.length; o++)
                          if (r[o] === e) {
                            r.splice(o, 1), (e.isRemoved = !0), 0 === r.length && ((e.allRemoved = !0), (e.target[t] = null));
                            break;
                          }
                    }
                    if (e.allRemoved) return S.call(e.target, e.eventName, e.capture ? d : p, e.options);
                  }
                : function (e) {
                    return S.call(e.target, e.eventName, e.invoke, e.options);
                  },
              I =
                n && n.diff
                  ? n.diff
                  : function (e, t) {
                      var n = typeof t;
                      return ("function" === n && e.callback === t) || ("object" === n && e.originalDelegate === t);
                    },
              j = Zone[_("UNPATCHED_EVENTS")],
              z = e[_("PASSIVE_EVENTS")],
              N = function (t, r, o, i) {
                var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                  s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                return function () {
                  var u = this || e,
                    c = arguments[0];
                  n && n.transferEventName && (c = n.transferEventName(c));
                  var p = arguments[1];
                  if (!p) return t.apply(this, arguments);
                  if (P && "uncaughtException" === c) return t.apply(this, arguments);
                  var d = !1;
                  if ("function" != typeof p) {
                    if (!p.handleEvent) return t.apply(this, arguments);
                    d = !0;
                  }
                  if (!f || f(t, p, u, arguments)) {
                    var b = q && !!z && -1 !== z.indexOf(c),
                      k = Z(arguments[2], b);
                    if (j) for (var g = 0; g < j.length; g++) if (c === j[g]) return b ? t.call(u, c, p, k) : t.apply(this, arguments);
                    var _ = !!k && ("boolean" == typeof k || k.capture),
                      m = !(!k || "object" != typeof k) && k.once,
                      E = Zone.current,
                      S = B[c];
                    S || (J(c, w), (S = B[c]));
                    var x,
                      O = S[_ ? v : y],
                      D = u[O],
                      C = !1;
                    if (D) {
                      if (((C = !0), h)) for (var N = 0; N < D.length; N++) if (I(D[N], p)) return;
                    } else D = u[O] = [];
                    var A = u.constructor.name,
                      M = W[A];
                    M && (x = M[c]),
                      x || (x = A + r + (w ? w(c) : c)),
                      (T.options = k),
                      m && (T.options.once = !1),
                      (T.target = u),
                      (T.capture = _),
                      (T.eventName = c),
                      (T.isExisting = C);
                    var R = l ? U : void 0;
                    R && (R.taskData = T);
                    var F = E.scheduleEventTask(x, p, R, o, i);
                    return (
                      (T.target = null),
                      R && (R.taskData = null),
                      m && (k.once = !0),
                      (q || "boolean" != typeof F.options) && (F.options = k),
                      (F.target = u),
                      (F.capture = _),
                      (F.eventName = c),
                      d && (F.originalDelegate = p),
                      s ? D.unshift(F) : D.push(F),
                      a ? u : void 0
                    );
                  }
                };
              };
            return (
              (g[r] = N(E, c, D, C, k)),
              m &&
                (g.prependListener = N(
                  m,
                  ".prependListener:",
                  function (e) {
                    return m.call(T.target, T.eventName, e.invoke, T.options);
                  },
                  C,
                  k,
                  !0
                )),
              (g[o] = function () {
                var t = this || e,
                  r = arguments[0];
                n && n.transferEventName && (r = n.transferEventName(r));
                var o = arguments[2],
                  i = !!o && ("boolean" == typeof o || o.capture),
                  a = arguments[1];
                if (!a) return S.apply(this, arguments);
                if (!f || f(S, a, t, arguments)) {
                  var s,
                    u = B[r];
                  u && (s = u[i ? v : y]);
                  var c = s && t[s];
                  if (c)
                    for (var l = 0; l < c.length; l++) {
                      var h = c[l];
                      if (I(h, a)) {
                        if (
                          (c.splice(l, 1), (h.isRemoved = !0), 0 === c.length && ((h.allRemoved = !0), (t[s] = null), "string" == typeof r))
                        ) {
                          var p = b + "ON_PROPERTY" + r;
                          t[p] = null;
                        }
                        return h.zone.cancelTask(h), k ? t : void 0;
                      }
                    }
                  return S.apply(this, arguments);
                }
              }),
              (g[i] = function () {
                var t = this || e,
                  r = arguments[0];
                n && n.transferEventName && (r = n.transferEventName(r));
                for (var o = [], i = $(t, w ? w(r) : r), a = 0; a < i.length; a++) {
                  var s = i[a],
                    u = s.originalDelegate ? s.originalDelegate : s.callback;
                  o.push(u);
                }
                return o;
              }),
              (g[a] = function () {
                var t = this || e,
                  r = arguments[0];
                if (r) {
                  n && n.transferEventName && (r = n.transferEventName(r));
                  var i = B[r];
                  if (i) {
                    var s = i.false,
                      u = i.true,
                      c = t[s],
                      l = t[u];
                    if (c)
                      for (var f = c.slice(), h = 0; h < f.length; h++) {
                        var p = f[h],
                          d = p.originalDelegate ? p.originalDelegate : p.callback;
                        this[o].call(this, r, d, p.options);
                      }
                    if (l)
                      for (var v = l.slice(), y = 0; y < v.length; y++) {
                        var b = v[y],
                          g = b.originalDelegate ? b.originalDelegate : b.callback;
                        this[o].call(this, r, g, b.options);
                      }
                  }
                } else {
                  for (var _ = Object.keys(t), m = 0; m < _.length; m++) {
                    var w = _[m],
                      T = Y.exec(w),
                      E = T && T[1];
                    E && "removeListener" !== E && this[a].call(this, E);
                  }
                  this[a].call(this, "removeListener");
                }
                if (k) return this;
              }),
              F(g[r], E),
              F(g[o], S),
              O && F(g[a], O),
              x && F(g[i], x),
              !0
            );
          }
          for (var g = [], m = 0; m < t.length; m++) g[m] = k(t[m], n);
          return g;
        }
        function $(e, t) {
          if (!t) {
            var n = [];
            for (var r in e) {
              var o = Y.exec(r),
                i = o && o[1];
              if (i && (!t || i === t)) {
                var a = e[r];
                if (a) for (var s = 0; s < a.length; s++) n.push(a[s]);
              }
            }
            return n;
          }
          var u = B[t];
          u || (J(t), (u = B[t]));
          var c = e[u.false],
            l = e[u.true];
          return c ? (l ? c.concat(l) : c.slice()) : l ? l.slice() : [];
        }
        function Q(e, t) {
          var n = e.Event;
          n &&
            n.prototype &&
            t.patchMethod(n.prototype, "stopImmediatePropagation", function (e) {
              return function (t, n) {
                (t[X] = !0), e && e.apply(t, n);
              };
            });
        }
        function ee(e, t, n, r, o) {
          var i = Zone.__symbol__(r);
          if (!t[i]) {
            var a = (t[i] = t[r]);
            (t[r] = function (i, s, u) {
              return (
                s &&
                  s.prototype &&
                  o.forEach(function (t) {
                    var o = "".concat(n, ".").concat(r, "::") + t,
                      i = s.prototype;
                    if (i.hasOwnProperty(t)) {
                      var a = e.ObjectGetOwnPropertyDescriptor(i, t);
                      a && a.value
                        ? ((a.value = e.wrapWithCurrentZone(a.value, o)), e._redefineProperty(s.prototype, t, a))
                        : i[t] && (i[t] = e.wrapWithCurrentZone(i[t], o));
                    } else i[t] && (i[t] = e.wrapWithCurrentZone(i[t], o));
                  }),
                a.call(t, i, s, u)
              );
            }),
              e.attachOriginToPatched(t[r], a);
          }
        }
        var te = [
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
          ne = ["encrypted", "waitingforkey", "msneedkey", "mozinterruptbegin", "mozinterruptend"],
          re = ["load"],
          oe = ["blur", "error", "focus", "load", "resize", "scroll", "messageerror"],
          ie = ["bounce", "finish", "start"],
          ae = ["loadstart", "progress", "abort", "error", "load", "progress", "timeout", "loadend", "readystatechange"],
          se = ["upgradeneeded", "complete", "abort", "success", "error", "blocked", "versionchange", "close"],
          ue = ["close", "error", "open", "message"],
          ce = ["error", "message"],
          le = [
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
            te,
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
        function fe(e, t, n) {
          if (!n || 0 === n.length) return t;
          var r = n.filter(function (t) {
            return t.target === e;
          });
          if (!r || 0 === r.length) return t;
          var o = r[0].ignoreProperties;
          return t.filter(function (e) {
            return -1 === o.indexOf(e);
          });
        }
        function he(e, t, n, r) {
          e && z(e, fe(e, t, n), r);
        }
        function pe(e, t) {
          if ((!P || D) && !Zone[e.symbol("patchEvents")]) {
            var n = "undefined" != typeof WebSocket,
              r = t.__Zone_ignore_on_properties;
            if (Z) {
              var o = window,
                i = (function () {
                  try {
                    var e = w.navigator.userAgent;
                    if (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/")) return !0;
                  } catch (t) {}
                  return !1;
                })()
                  ? [{ target: o, ignoreProperties: ["error"] }]
                  : [];
              he(o, le.concat(["messageerror"]), r ? r.concat(i) : r, u(o)),
                he(Document.prototype, le, r),
                void 0 !== o.SVGElement && he(o.SVGElement.prototype, le, r),
                he(Element.prototype, le, r),
                he(HTMLElement.prototype, le, r),
                he(HTMLMediaElement.prototype, ne, r),
                he(HTMLFrameSetElement.prototype, te.concat(oe), r),
                he(HTMLBodyElement.prototype, te.concat(oe), r),
                he(HTMLFrameElement.prototype, re, r),
                he(HTMLIFrameElement.prototype, re, r);
              var a = o.HTMLMarqueeElement;
              a && he(a.prototype, ie, r);
              var s = o.Worker;
              s && he(s.prototype, ce, r);
            }
            var c = t.XMLHttpRequest;
            c && he(c.prototype, ae, r);
            var l = t.XMLHttpRequestEventTarget;
            l && he(l && l.prototype, ae, r),
              "undefined" != typeof IDBIndex &&
                (he(IDBIndex.prototype, se, r),
                he(IDBRequest.prototype, se, r),
                he(IDBOpenDBRequest.prototype, se, r),
                he(IDBDatabase.prototype, se, r),
                he(IDBTransaction.prototype, se, r),
                he(IDBCursor.prototype, se, r)),
              n && he(WebSocket.prototype, ue, r);
          }
        }
        Zone.__load_patch("util", function (e, t, n) {
          (n.patchOnProperties = z), (n.patchMethod = M), (n.bindArguments = S), (n.patchMacroTask = R);
          var r = t.__symbol__("BLACK_LISTED_EVENTS"),
            o = t.__symbol__("UNPATCHED_EVENTS");
          e[o] && (e[r] = e[o]),
            e[r] && (t[r] = t[o] = e[r]),
            (n.patchEventPrototype = Q),
            (n.patchEventTarget = K),
            (n.isIEOrEdge = V),
            (n.ObjectDefineProperty = s),
            (n.ObjectGetOwnPropertyDescriptor = a),
            (n.ObjectCreate = c),
            (n.ArraySlice = l),
            (n.patchClass = A),
            (n.wrapWithCurrentZone = k),
            (n.filterProperties = fe),
            (n.attachOriginToPatched = F),
            (n._redefineProperty = Object.defineProperty),
            (n.patchCallbacks = ee),
            (n.getGlobalObjects = function () {
              return {
                globalSources: W,
                zoneSymbolEventNames: B,
                eventNames: le,
                isBrowser: Z,
                isMix: D,
                isNode: P,
                TRUE_STR: v,
                FALSE_STR: y,
                ZONE_SYMBOL_PREFIX: b,
                ADD_EVENT_LISTENER_STR: f,
                REMOVE_EVENT_LISTENER_STR: h
              };
            });
        });
        var de = _("zoneTask");
        function ve(e, t, n, r) {
          var o = null,
            i = null;
          n += r;
          var a = {};
          function s(t) {
            var n = t.data;
            return (
              (n.args[0] = function () {
                return t.invoke.apply(this, arguments);
              }),
              (n.handleId = o.apply(e, n.args)),
              t
            );
          }
          function u(t) {
            return i.call(e, t.data.handleId);
          }
          (o = M(e, (t += r), function (n) {
            return function (o, i) {
              if ("function" == typeof i[0]) {
                var c = { isPeriodic: "Interval" === r, delay: "Timeout" === r || "Interval" === r ? i[1] || 0 : void 0, args: i },
                  l = i[0];
                i[0] = function () {
                  try {
                    return l.apply(this, arguments);
                  } finally {
                    c.isPeriodic || ("number" == typeof c.handleId ? delete a[c.handleId] : c.handleId && (c.handleId[de] = null));
                  }
                };
                var f = g(t, i[0], c, s, u);
                if (!f) return f;
                var h = f.data.handleId;
                return (
                  "number" == typeof h ? (a[h] = f) : h && (h[de] = f),
                  h &&
                    h.ref &&
                    h.unref &&
                    "function" == typeof h.ref &&
                    "function" == typeof h.unref &&
                    ((f.ref = h.ref.bind(h)), (f.unref = h.unref.bind(h))),
                  "number" == typeof h || h ? h : f
                );
              }
              return n.apply(e, i);
            };
          })),
            (i = M(e, n, function (t) {
              return function (n, r) {
                var o,
                  i = r[0];
                "number" == typeof i ? (o = a[i]) : (o = i && i[de]) || (o = i),
                  o && "string" == typeof o.type
                    ? "notScheduled" !== o.state &&
                      ((o.cancelFn && o.data.isPeriodic) || 0 === o.runCount) &&
                      ("number" == typeof i ? delete a[i] : i && (i[de] = null), o.zone.cancelTask(o))
                    : t.apply(e, r);
              };
            }));
        }
        function ye(e, t) {
          if (!Zone[t.symbol("patchEventTarget")]) {
            for (
              var n = t.getGlobalObjects(),
                r = n.eventNames,
                o = n.zoneSymbolEventNames,
                i = n.TRUE_STR,
                a = n.FALSE_STR,
                s = n.ZONE_SYMBOL_PREFIX,
                u = 0;
              u < r.length;
              u++
            ) {
              var c = r[u],
                l = s + (c + a),
                f = s + (c + i);
              (o[c] = {}), (o[c][a] = l), (o[c][i] = f);
            }
            var h = e.EventTarget;
            if (h && h.prototype) return t.patchEventTarget(e, [h && h.prototype]), !0;
          }
        }
        Zone.__load_patch("legacy", function (e) {
          var t = e[Zone.__symbol__("legacyPatch")];
          t && t();
        }),
          Zone.__load_patch("queueMicrotask", function (e, t, n) {
            n.patchMethod(e, "queueMicrotask", function (e) {
              return function (e, n) {
                t.current.scheduleMicroTask("queueMicrotask", n[0]);
              };
            });
          }),
          Zone.__load_patch("timers", function (e) {
            var t = "set",
              n = "clear";
            ve(e, t, n, "Timeout"), ve(e, t, n, "Interval"), ve(e, t, n, "Immediate");
          }),
          Zone.__load_patch("requestAnimationFrame", function (e) {
            ve(e, "request", "cancel", "AnimationFrame"),
              ve(e, "mozRequest", "mozCancel", "AnimationFrame"),
              ve(e, "webkitRequest", "webkitCancel", "AnimationFrame");
          }),
          Zone.__load_patch("blocking", function (e, t) {
            for (var n = ["alert", "prompt", "confirm"], r = 0; r < n.length; r++)
              M(e, n[r], function (n, r, o) {
                return function (r, i) {
                  return t.current.run(n, e, i, o);
                };
              });
          }),
          Zone.__load_patch("EventTarget", function (e, t, n) {
            !(function (e, t) {
              t.patchEventPrototype(e, t);
            })(e, n),
              ye(e, n);
            var r = e.XMLHttpRequestEventTarget;
            r && r.prototype && n.patchEventTarget(e, [r.prototype]);
          }),
          Zone.__load_patch("MutationObserver", function (e, t, n) {
            A("MutationObserver"), A("WebKitMutationObserver");
          }),
          Zone.__load_patch("IntersectionObserver", function (e, t, n) {
            A("IntersectionObserver");
          }),
          Zone.__load_patch("FileReader", function (e, t, n) {
            A("FileReader");
          }),
          Zone.__load_patch("on_property", function (e, t, n) {
            pe(n, e);
          }),
          Zone.__load_patch("customElements", function (e, t, n) {
            !(function (e, t) {
              var n = t.getGlobalObjects();
              (n.isBrowser || n.isMix) &&
                e.customElements &&
                "customElements" in e &&
                t.patchCallbacks(t, e.customElements, "customElements", "define", [
                  "connectedCallback",
                  "disconnectedCallback",
                  "adoptedCallback",
                  "attributeChangedCallback"
                ]);
            })(e, n);
          }),
          Zone.__load_patch("XHR", function (e, t) {
            !(function (e) {
              var u = e.XMLHttpRequest;
              if (u) {
                var c = u.prototype,
                  l = c[p],
                  f = c[d];
                if (!l) {
                  var h = e.XMLHttpRequestEventTarget;
                  if (h) {
                    var v = h.prototype;
                    (l = v[p]), (f = v[d]);
                  }
                }
                var y = "readystatechange",
                  b = "scheduled",
                  k = M(c, "open", function () {
                    return function (e, t) {
                      return (e[r] = 0 == t[2]), (e[a] = t[1]), k.apply(e, t);
                    };
                  }),
                  m = _("fetchTaskAborting"),
                  w = _("fetchTaskScheduling"),
                  T = M(c, "send", function () {
                    return function (e, n) {
                      if (!0 === t.current[w]) return T.apply(e, n);
                      if (e[r]) return T.apply(e, n);
                      var o = { target: e, url: e[a], isPeriodic: !1, args: n, aborted: !1 },
                        i = g("XMLHttpRequest.send", x, o, S, O);
                      e && !0 === e[s] && !o.aborted && i.state === b && i.invoke();
                    };
                  }),
                  E = M(c, "abort", function () {
                    return function (e, r) {
                      var o = e[n];
                      if (o && "string" == typeof o.type) {
                        if (null == o.cancelFn || (o.data && o.data.aborted)) return;
                        o.zone.cancelTask(o);
                      } else if (!0 === t.current[m]) return E.apply(e, r);
                    };
                  });
              }
              function S(e) {
                var r = e.data,
                  a = r.target;
                (a[i] = !1), (a[s] = !1);
                var u = a[o];
                l || ((l = a[p]), (f = a[d])), u && f.call(a, y, u);
                var c = (a[o] = function () {
                  if (a.readyState === a.DONE)
                    if (!r.aborted && a[i] && e.state === b) {
                      var n = a[t.__symbol__("loadfalse")];
                      if (0 !== a.status && n && n.length > 0) {
                        var o = e.invoke;
                        (e.invoke = function () {
                          for (var n = a[t.__symbol__("loadfalse")], i = 0; i < n.length; i++) n[i] === e && n.splice(i, 1);
                          r.aborted || e.state !== b || o.call(e);
                        }),
                          n.push(e);
                      } else e.invoke();
                    } else r.aborted || !1 !== a[i] || (a[s] = !0);
                });
                return l.call(a, y, c), a[n] || (a[n] = e), T.apply(a, r.args), (a[i] = !0), e;
              }
              function x() {}
              function O(e) {
                var t = e.data;
                return (t.aborted = !0), E.apply(t.target, t.args);
              }
            })(e);
            var n = _("xhrTask"),
              r = _("xhrSync"),
              o = _("xhrListener"),
              i = _("xhrScheduled"),
              a = _("xhrURL"),
              s = _("xhrErrorBeforeScheduled");
          }),
          Zone.__load_patch("geolocation", function (e) {
            e.navigator &&
              e.navigator.geolocation &&
              (function (e, t) {
                for (
                  var n = e.constructor.name,
                    r = function (r) {
                      var o = t[r],
                        i = e[o];
                      if (i) {
                        if (!x(a(e, o))) return "continue";
                        e[o] = (function (e) {
                          var t = function () {
                            return e.apply(this, S(arguments, n + "." + o));
                          };
                          return F(t, e), t;
                        })(i);
                      }
                    },
                    o = 0;
                  o < t.length;
                  o++
                )
                  r(o);
              })(e.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
          }),
          Zone.__load_patch("PromiseRejectionEvent", function (e, t) {
            function n(t) {
              return function (n) {
                $(e, t).forEach(function (r) {
                  var o = e.PromiseRejectionEvent;
                  if (o) {
                    var i = new o(t, { promise: n.promise, reason: n.rejection });
                    r.invoke(i);
                  }
                });
              };
            }
            e.PromiseRejectionEvent &&
              ((t[_("unhandledPromiseRejectionHandler")] = n("unhandledrejection")),
              (t[_("rejectionHandledHandler")] = n("rejectionhandled")));
          });
      }
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  !(function () {
    "use strict";
    function e(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function t(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function r(e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    }
    function o(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function i(e) {
      return (i = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function a(e, t, n) {
      return (a =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var r = (function (e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e)); );
                return e;
              })(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n) : o.value;
              }
            })(e, t, n || e);
    }
    function s(e, t) {
      return (s =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
    }
    function c(e) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
    }
    function l(e, t) {
      return !t || ("object" !== c(t) && "function" != typeof t) ? o(e) : t;
    }
    function f(e) {
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
          r = i(e);
        if (t) {
          var o = i(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return l(this, n);
      };
    }
    function h(e) {
      return "function" == typeof e;
    }
    n(98981);
    var p = !1,
      d = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            var t = new Error();
            console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack);
          } else p && console.log("RxJS: Back to a better error behavior. Thank you. <3");
          p = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return p;
        }
      };
    function v(e) {
      setTimeout(function () {
        throw e;
      }, 0);
    }
    var y = {
        closed: !0,
        next: function (e) {},
        error: function (e) {
          if (d.useDeprecatedSynchronousErrorHandling) throw e;
          v(e);
        },
        complete: function () {}
      },
      b = (function () {
        return (
          Array.isArray ||
          function (e) {
            return e && "number" == typeof e.length;
          }
        );
      })();
    function k(e) {
      return null !== e && "object" == typeof e;
    }
    var g = (function () {
        function e(e) {
          return (
            Error.call(this),
            (this.message = e
              ? "".concat(e.length, " errors occurred during unsubscription:\n").concat(
                  e
                    .map(function (e, t) {
                      return "".concat(t + 1, ") ").concat(e.toString());
                    })
                    .join("\n  ")
                )
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = e),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })(),
      _ = (function () {
        var t = (function () {
          function t(n) {
            e(this, t),
              (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n && ((this._ctorUnsubscribe = !0), (this._unsubscribe = n));
          }
          return (
            r(t, [
              {
                key: "unsubscribe",
                value: function () {
                  var e;
                  if (!this.closed) {
                    var n = this._parentOrParents,
                      r = this._ctorUnsubscribe,
                      o = this._unsubscribe,
                      i = this._subscriptions;
                    if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof t)) n.remove(this);
                    else if (null !== n) for (var a = 0; a < n.length; ++a) n[a].remove(this);
                    if (h(o)) {
                      r && (this._unsubscribe = void 0);
                      try {
                        o.call(this);
                      } catch (l) {
                        e = l instanceof g ? m(l.errors) : [l];
                      }
                    }
                    if (b(i))
                      for (var s = -1, u = i.length; ++s < u; ) {
                        var c = i[s];
                        if (k(c))
                          try {
                            c.unsubscribe();
                          } catch (l) {
                            (e = e || []), l instanceof g ? (e = e.concat(m(l.errors))) : e.push(l);
                          }
                      }
                    if (e) throw new g(e);
                  }
                }
              },
              {
                key: "add",
                value: function (e) {
                  var n = e;
                  if (!e) return t.EMPTY;
                  switch (typeof e) {
                    case "function":
                      n = new t(e);
                    case "object":
                      if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                      if (this.closed) return n.unsubscribe(), n;
                      if (!(n instanceof t)) {
                        var r = n;
                        (n = new t())._subscriptions = [r];
                      }
                      break;
                    default:
                      throw new Error("unrecognized teardown " + e + " added to Subscription.");
                  }
                  var o = n._parentOrParents;
                  if (null === o) n._parentOrParents = this;
                  else if (o instanceof t) {
                    if (o === this) return n;
                    n._parentOrParents = [o, this];
                  } else {
                    if (-1 !== o.indexOf(this)) return n;
                    o.push(this);
                  }
                  var i = this._subscriptions;
                  return null === i ? (this._subscriptions = [n]) : i.push(n), n;
                }
              },
              {
                key: "remove",
                value: function (e) {
                  var t = this._subscriptions;
                  if (t) {
                    var n = t.indexOf(e);
                    -1 !== n && t.splice(n, 1);
                  }
                }
              }
            ]),
            t
          );
        })();
        return (
          (t.EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new t())),
          t
        );
      })();
    function m(e) {
      return e.reduce(function (e, t) {
        return e.concat(t instanceof g ? t.errors : t);
      }, []);
    }
    var w = (function () {
        return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
      })(),
      T = (function (t) {
        u(s, t);
        var n = f(s);
        function s(t, r, i) {
          var a;
          switch (
            (e(this, s),
            ((a = n.call(this)).syncErrorValue = null),
            (a.syncErrorThrown = !1),
            (a.syncErrorThrowable = !1),
            (a.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              a.destination = y;
              break;
            case 1:
              if (!t) {
                a.destination = y;
                break;
              }
              if ("object" == typeof t) {
                t instanceof s
                  ? ((a.syncErrorThrowable = t.syncErrorThrowable), (a.destination = t), t.add(o(a)))
                  : ((a.syncErrorThrowable = !0), (a.destination = new E(o(a), t)));
                break;
              }
            default:
              (a.syncErrorThrowable = !0), (a.destination = new E(o(a), t, r, i));
          }
          return a;
        }
        return (
          r(
            s,
            [
              {
                key: w,
                value: function () {
                  return this;
                }
              },
              {
                key: "next",
                value: function (e) {
                  this.isStopped || this._next(e);
                }
              },
              {
                key: "error",
                value: function (e) {
                  this.isStopped || ((this.isStopped = !0), this._error(e));
                }
              },
              {
                key: "complete",
                value: function () {
                  this.isStopped || ((this.isStopped = !0), this._complete());
                }
              },
              {
                key: "unsubscribe",
                value: function () {
                  this.closed || ((this.isStopped = !0), a(i(s.prototype), "unsubscribe", this).call(this));
                }
              },
              {
                key: "_next",
                value: function (e) {
                  this.destination.next(e);
                }
              },
              {
                key: "_error",
                value: function (e) {
                  this.destination.error(e), this.unsubscribe();
                }
              },
              {
                key: "_complete",
                value: function () {
                  this.destination.complete(), this.unsubscribe();
                }
              },
              {
                key: "_unsubscribeAndRecycle",
                value: function () {
                  var e = this._parentOrParents;
                  return (
                    (this._parentOrParents = null),
                    this.unsubscribe(),
                    (this.closed = !1),
                    (this.isStopped = !1),
                    (this._parentOrParents = e),
                    this
                  );
                }
              }
            ],
            [
              {
                key: "create",
                value: function (e, t, n) {
                  var r = new s(e, t, n);
                  return (r.syncErrorThrowable = !1), r;
                }
              }
            ]
          ),
          s
        );
      })(_),
      E = (function (t) {
        u(i, t);
        var n = f(i);
        function i(t, r, a, s) {
          var u, c;
          e(this, i), ((u = n.call(this))._parentSubscriber = t);
          var l = o(u);
          return (
            h(r)
              ? (c = r)
              : r &&
                ((c = r.next),
                (a = r.error),
                (s = r.complete),
                r !== y &&
                  (h((l = Object.create(r)).unsubscribe) && u.add(l.unsubscribe.bind(l)), (l.unsubscribe = u.unsubscribe.bind(o(u))))),
            (u._context = l),
            (u._next = c),
            (u._error = a),
            (u._complete = s),
            u
          );
        }
        return (
          r(i, [
            {
              key: "next",
              value: function (e) {
                if (!this.isStopped && this._next) {
                  var t = this._parentSubscriber;
                  d.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                    ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                    : this.__tryOrUnsub(this._next, e);
                }
              }
            },
            {
              key: "error",
              value: function (e) {
                if (!this.isStopped) {
                  var t = this._parentSubscriber,
                    n = d.useDeprecatedSynchronousErrorHandling;
                  if (this._error)
                    n && t.syncErrorThrowable
                      ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                      : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                  else if (t.syncErrorThrowable) n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : v(e), this.unsubscribe();
                  else {
                    if ((this.unsubscribe(), n)) throw e;
                    v(e);
                  }
                }
              }
            },
            {
              key: "complete",
              value: function () {
                var e = this;
                if (!this.isStopped) {
                  var t = this._parentSubscriber;
                  if (this._complete) {
                    var n = function () {
                      return e._complete.call(e._context);
                    };
                    d.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                      ? (this.__tryOrSetError(t, n), this.unsubscribe())
                      : (this.__tryOrUnsub(n), this.unsubscribe());
                  } else this.unsubscribe();
                }
              }
            },
            {
              key: "__tryOrUnsub",
              value: function (e, t) {
                try {
                  e.call(this._context, t);
                } catch (n) {
                  if ((this.unsubscribe(), d.useDeprecatedSynchronousErrorHandling)) throw n;
                  v(n);
                }
              }
            },
            {
              key: "__tryOrSetError",
              value: function (e, t, n) {
                if (!d.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                  t.call(this._context, n);
                } catch (r) {
                  return d.useDeprecatedSynchronousErrorHandling ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0) : (v(r), !0);
                }
                return !1;
              }
            },
            {
              key: "_unsubscribe",
              value: function () {
                var e = this._parentSubscriber;
                (this._context = null), (this._parentSubscriber = null), e.unsubscribe();
              }
            }
          ]),
          i
        );
      })(T),
      S = (function () {
        return ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      })();
    function x(e) {
      return e;
    }
    function O(e) {
      return 0 === e.length
        ? x
        : 1 === e.length
        ? e[0]
        : function (t) {
            return e.reduce(function (e, t) {
              return t(e);
            }, t);
          };
    }
    var P = (function () {
      var t = (function () {
        function t(n) {
          e(this, t), (this._isScalar = !1), n && (this._subscribe = n);
        }
        return (
          r(t, [
            {
              key: "lift",
              value: function (e) {
                var n = new t();
                return (n.source = this), (n.operator = e), n;
              }
            },
            {
              key: "subscribe",
              value: function (e, t, n) {
                var r = this.operator,
                  o = (function (e, t, n) {
                    if (e) {
                      if (e instanceof T) return e;
                      if (e[w]) return e[w]();
                    }
                    return e || t || n ? new T(e, t, n) : new T(y);
                  })(e, t, n);
                if (
                  (o.add(
                    r
                      ? r.call(o, this.source)
                      : this.source || (d.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable)
                      ? this._subscribe(o)
                      : this._trySubscribe(o)
                  ),
                  d.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && ((o.syncErrorThrowable = !1), o.syncErrorThrown))
                )
                  throw o.syncErrorValue;
                return o;
              }
            },
            {
              key: "_trySubscribe",
              value: function (e) {
                try {
                  return this._subscribe(e);
                } catch (t) {
                  d.useDeprecatedSynchronousErrorHandling && ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                    (function (e) {
                      for (; e; ) {
                        var t = e.destination;
                        if (e.closed || e.isStopped) return !1;
                        e = t && t instanceof T ? t : null;
                      }
                      return !0;
                    })(e)
                      ? e.error(t)
                      : console.warn(t);
                }
              }
            },
            {
              key: "forEach",
              value: function (e, t) {
                var n = this;
                return new (t = Z(t))(function (t, r) {
                  var o;
                  o = n.subscribe(
                    function (t) {
                      try {
                        e(t);
                      } catch (n) {
                        r(n), o && o.unsubscribe();
                      }
                    },
                    r,
                    t
                  );
                });
              }
            },
            {
              key: "_subscribe",
              value: function (e) {
                var t = this.source;
                return t && t.subscribe(e);
              }
            },
            {
              key: S,
              value: function () {
                return this;
              }
            },
            {
              key: "pipe",
              value: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return 0 === t.length ? this : O(t)(this);
              }
            },
            {
              key: "toPromise",
              value: function (e) {
                var t = this;
                return new (e = Z(e))(function (e, n) {
                  var r;
                  t.subscribe(
                    function (e) {
                      return (r = e);
                    },
                    function (e) {
                      return n(e);
                    },
                    function () {
                      return e(r);
                    }
                  );
                });
              }
            }
          ]),
          t
        );
      })();
      return (
        (t.create = function (e) {
          return new t(e);
        }),
        t
      );
    })();
    function Z(e) {
      if ((e || (e = d.Promise || Promise), !e)) throw new Error("no Promise impl found");
      return e;
    }
    var D = function (e) {
      return function (t) {
        for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
        t.complete();
      };
    };
    function C() {
      return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    }
    var I = C(),
      j = function (e) {
        return e && "number" == typeof e.length && "function" != typeof e;
      };
    function z(e) {
      return !!e && "function" != typeof e.subscribe && "function" == typeof e.then;
    }
    var N = function (e) {
      if (e && "function" == typeof e[S])
        return (
          (r = e),
          function (e) {
            var t = r[S]();
            if ("function" != typeof t.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return t.subscribe(e);
          }
        );
      if (j(e)) return D(e);
      if (z(e))
        return (
          (n = e),
          function (e) {
            return (
              n
                .then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  }
                )
                .then(null, v),
              e
            );
          }
        );
      if (e && "function" == typeof e[I])
        return (
          (t = e),
          function (e) {
            for (var n = t[I](); ; ) {
              var r = void 0;
              try {
                r = n.next();
              } catch (o) {
                return e.error(o), e;
              }
              if (r.done) {
                e.complete();
                break;
              }
              if ((e.next(r.value), e.closed)) break;
            }
            return (
              "function" == typeof n.return &&
                e.add(function () {
                  n.return && n.return();
                }),
              e
            );
          }
        );
      var t,
        n,
        r,
        o = k(e) ? "an invalid object" : "'".concat(e, "'"),
        i = "You provided ".concat(o, " where a stream was expected.") + " You can provide an Observable, Promise, Array, or Iterable.";
      throw new TypeError(i);
    };
    function A(e, t) {
      return new P(function (n) {
        var r = new _(),
          o = 0;
        return (
          r.add(
            t.schedule(function () {
              o !== e.length ? (n.next(e[o++]), n.closed || r.add(this.schedule())) : n.complete();
            })
          ),
          r
        );
      });
    }
    function M(e, t) {
      return t
        ? (function (e, t) {
            if (null != e) {
              if (
                (function (e) {
                  return e && "function" == typeof e[S];
                })(e)
              )
                return (function (e, t) {
                  return new P(function (n) {
                    var r = new _();
                    return (
                      r.add(
                        t.schedule(function () {
                          var o = e[S]();
                          r.add(
                            o.subscribe({
                              next: function (e) {
                                r.add(
                                  t.schedule(function () {
                                    return n.next(e);
                                  })
                                );
                              },
                              error: function (e) {
                                r.add(
                                  t.schedule(function () {
                                    return n.error(e);
                                  })
                                );
                              },
                              complete: function () {
                                r.add(
                                  t.schedule(function () {
                                    return n.complete();
                                  })
                                );
                              }
                            })
                          );
                        })
                      ),
                      r
                    );
                  });
                })(e, t);
              if (z(e))
                return (function (e, t) {
                  return new P(function (n) {
                    var r = new _();
                    return (
                      r.add(
                        t.schedule(function () {
                          return e.then(
                            function (e) {
                              r.add(
                                t.schedule(function () {
                                  n.next(e),
                                    r.add(
                                      t.schedule(function () {
                                        return n.complete();
                                      })
                                    );
                                })
                              );
                            },
                            function (e) {
                              r.add(
                                t.schedule(function () {
                                  return n.error(e);
                                })
                              );
                            }
                          );
                        })
                      ),
                      r
                    );
                  });
                })(e, t);
              if (j(e)) return A(e, t);
              if (
                (function (e) {
                  return e && "function" == typeof e[I];
                })(e) ||
                "string" == typeof e
              )
                return (function (e, t) {
                  if (!e) throw new Error("Iterable cannot be null");
                  return new P(function (n) {
                    var r,
                      o = new _();
                    return (
                      o.add(function () {
                        r && "function" == typeof r.return && r.return();
                      }),
                      o.add(
                        t.schedule(function () {
                          (r = e[I]()),
                            o.add(
                              t.schedule(function () {
                                if (!n.closed) {
                                  var e, t;
                                  try {
                                    var o = r.next();
                                    (e = o.value), (t = o.done);
                                  } catch (i) {
                                    return void n.error(i);
                                  }
                                  t ? n.complete() : (n.next(e), this.schedule());
                                }
                              })
                            );
                        })
                      ),
                      o
                    );
                  });
                })(e, t);
            }
            throw new TypeError(((null !== e && typeof e) || e) + " is not observable");
          })(e, t)
        : e instanceof P
        ? e
        : new P(N(e));
    }
    var R = new P(function (e) {
      return e.complete();
    });
    function F(e) {
      return e
        ? (function (e) {
            return new P(function (t) {
              return e.schedule(function () {
                return t.complete();
              });
            });
          })(e)
        : R;
    }
    function H(e) {
      return e && "function" == typeof e.schedule;
    }
    function L(e, t) {
      return t ? A(e, t) : new P(D(e));
    }
    function V() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      var r = t[t.length - 1];
      return H(r) ? (t.pop(), A(t, r)) : L(t);
    }
    function q(e, t) {
      return function (n) {
        if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        return n.lift(new G(e, t));
      };
    }
    var G = (function () {
        function t(n, r) {
          e(this, t), (this.project = n), (this.thisArg = r);
        }
        return (
          r(t, [
            {
              key: "call",
              value: function (e, t) {
                return t.subscribe(new U(e, this.project, this.thisArg));
              }
            }
          ]),
          t
        );
      })(),
      U = (function (t) {
        u(i, t);
        var n = f(i);
        function i(t, r, a) {
          var s;
          return e(this, i), ((s = n.call(this, t)).project = r), (s.count = 0), (s.thisArg = a || o(s)), s;
        }
        return (
          r(i, [
            {
              key: "_next",
              value: function (e) {
                var t;
                try {
                  t = this.project.call(this.thisArg, e, this.count++);
                } catch (n) {
                  return void this.destination.error(n);
                }
                this.destination.next(t);
              }
            }
          ]),
          i
        );
      })(T),
      B = (function (t) {
        u(o, t);
        var n = f(o);
        function o(t) {
          var r;
          return e(this, o), ((r = n.call(this)).parent = t), r;
        }
        return (
          r(o, [
            {
              key: "_next",
              value: function (e) {
                this.parent.notifyNext(e);
              }
            },
            {
              key: "_error",
              value: function (e) {
                this.parent.notifyError(e), this.unsubscribe();
              }
            },
            {
              key: "_complete",
              value: function () {
                this.parent.notifyComplete(), this.unsubscribe();
              }
            }
          ]),
          o
        );
      })(T),
      W = (function (t) {
        u(o, t);
        var n = f(o);
        function o() {
          return e(this, o), n.apply(this, arguments);
        }
        return (
          r(o, [
            {
              key: "notifyNext",
              value: function (e) {
                this.destination.next(e);
              }
            },
            {
              key: "notifyError",
              value: function (e) {
                this.destination.error(e);
              }
            },
            {
              key: "notifyComplete",
              value: function () {
                this.destination.complete();
              }
            }
          ]),
          o
        );
      })(T);
    function Y(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
      return "function" == typeof t
        ? function (r) {
            return r.pipe(
              Y(function (n, r) {
                return M(e(n, r)).pipe(
                  q(function (e, o) {
                    return t(n, e, r, o);
                  })
                );
              }, n)
            );
          }
        : ("number" == typeof t && (n = t),
          function (t) {
            return t.lift(new X(e, n));
          });
    }
    var X = (function () {
        function t(n) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.POSITIVE_INFINITY;
          e(this, t), (this.project = n), (this.concurrent = r);
        }
        return (
          r(t, [
            {
              key: "call",
              value: function (e, t) {
                return t.subscribe(new J(e, this.project, this.concurrent));
              }
            }
          ]),
          t
        );
      })(),
      J = (function (t) {
        u(o, t);
        var n = f(o);
        function o(t, r) {
          var i,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
          return (
            e(this, o),
            ((i = n.call(this, t)).project = r),
            (i.concurrent = a),
            (i.hasCompleted = !1),
            (i.buffer = []),
            (i.active = 0),
            (i.index = 0),
            i
          );
        }
        return (
          r(o, [
            {
              key: "_next",
              value: function (e) {
                this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
              }
            },
            {
              key: "_tryNext",
              value: function (e) {
                var t,
                  n = this.index++;
                try {
                  t = this.project(e, n);
                } catch (r) {
                  return void this.destination.error(r);
                }
                this.active++, this._innerSub(t);
              }
            },
            {
              key: "_innerSub",
              value: function (e) {
                var t = new B(this),
                  n = this.destination;
                n.add(t);
                var r = (function (e, t) {
                  if (!t.closed) {
                    if (e instanceof P) return e.subscribe(t);
                    var n;
                    try {
                      n = N(e)(t);
                    } catch (r) {
                      t.error(r);
                    }
                    return n;
                  }
                })(e, t);
                r !== t && n.add(r);
              }
            },
            {
              key: "_complete",
              value: function () {
                (this.hasCompleted = !0), 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe();
              }
            },
            {
              key: "notifyNext",
              value: function (e) {
                this.destination.next(e);
              }
            },
            {
              key: "notifyComplete",
              value: function () {
                var e = this.buffer;
                this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
              }
            }
          ]),
          o
        );
      })(W);
    function K() {
      return (function () {
        return Y(x, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY);
      })(1);
    }
    var $ = (function (t) {
        u(o, t);
        var n = f(o);
        function o(t, r) {
          var i;
          return e(this, o), ((i = n.call(this, t, r)).scheduler = t), (i.work = r), i;
        }
        return (
          r(o, [
            {
              key: "requestAsyncId",
              value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return null !== n && n > 0
                  ? a(i(o.prototype), "requestAsyncId", this).call(this, e, t, n)
                  : (e.actions.push(this),
                    e.scheduled ||
                      (e.scheduled = requestAnimationFrame(function () {
                        return e.flush(null);
                      })));
              }
            },
            {
              key: "recycleAsyncId",
              value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if ((null !== n && n > 0) || (null === n && this.delay > 0))
                  return a(i(o.prototype), "recycleAsyncId", this).call(this, e, t, n);
                0 === e.actions.length && (cancelAnimationFrame(t), (e.scheduled = void 0));
              }
            }
          ]),
          o
        );
      })(
        (function (t) {
          u(o, t);
          var n = f(o);
          function o(t, r) {
            var i;
            return e(this, o), ((i = n.call(this, t, r)).scheduler = t), (i.work = r), (i.pending = !1), i;
          }
          return (
            r(o, [
              {
                key: "schedule",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  if (this.closed) return this;
                  this.state = e;
                  var n = this.id,
                    r = this.scheduler;
                  return (
                    null != n && (this.id = this.recycleAsyncId(r, n, t)),
                    (this.pending = !0),
                    (this.delay = t),
                    (this.id = this.id || this.requestAsyncId(r, this.id, t)),
                    this
                  );
                }
              },
              {
                key: "requestAsyncId",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  return setInterval(e.flush.bind(e, this), n);
                }
              },
              {
                key: "recycleAsyncId",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  if (null !== n && this.delay === n && !1 === this.pending) return t;
                  clearInterval(t);
                }
              },
              {
                key: "execute",
                value: function (e, t) {
                  if (this.closed) return new Error("executing a cancelled action");
                  this.pending = !1;
                  var n = this._execute(e, t);
                  if (n) return n;
                  !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
                }
              },
              {
                key: "_execute",
                value: function (e, t) {
                  var n = !1,
                    r = void 0;
                  try {
                    this.work(e);
                  } catch (o) {
                    (n = !0), (r = (!!o && o) || new Error(o));
                  }
                  if (n) return this.unsubscribe(), r;
                }
              },
              {
                key: "_unsubscribe",
                value: function () {
                  var e = this.id,
                    t = this.scheduler,
                    n = t.actions,
                    r = n.indexOf(this);
                  (this.work = null),
                    (this.state = null),
                    (this.pending = !1),
                    (this.scheduler = null),
                    -1 !== r && n.splice(r, 1),
                    null != e && (this.id = this.recycleAsyncId(t, e, null)),
                    (this.delay = null);
                }
              }
            ]),
            o
          );
        })(
          (function (t) {
            u(o, t);
            var n = f(o);
            function o(t, r) {
              return e(this, o), n.call(this);
            }
            return (
              r(o, [
                {
                  key: "schedule",
                  value: function (e) {
                    return this;
                  }
                }
              ]),
              o
            );
          })(_)
        )
      ),
      Q = (function () {
        var t = (function () {
          function t(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.now;
            e(this, t), (this.SchedulerAction = n), (this.now = r);
          }
          return (
            r(t, [
              {
                key: "schedule",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                  return new this.SchedulerAction(this, e).schedule(n, t);
                }
              }
            ]),
            t
          );
        })();
        return (
          (t.now = function () {
            return Date.now();
          }),
          t
        );
      })(),
      ee = new ((function (t) {
        u(o, t);
        var n = f(o);
        function o() {
          return e(this, o), n.apply(this, arguments);
        }
        return (
          r(o, [
            {
              key: "flush",
              value: function (e) {
                (this.active = !0), (this.scheduled = void 0);
                var t,
                  n = this.actions,
                  r = -1,
                  o = n.length;
                e = e || n.shift();
                do {
                  if ((t = e.execute(e.state, e.delay))) break;
                } while (++r < o && (e = n.shift()));
                if (((this.active = !1), t)) {
                  for (; ++r < o && (e = n.shift()); ) e.unsubscribe();
                  throw t;
                }
              }
            }
          ]),
          o
        );
      })(
        (function (t) {
          u(s, t);
          var n = f(s);
          function s(t) {
            var r,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q.now;
            return (
              e(this, s),
              ((r = n.call(this, t, function () {
                return s.delegate && s.delegate !== o(r) ? s.delegate.now() : i();
              })).actions = []),
              (r.active = !1),
              (r.scheduled = void 0),
              r
            );
          }
          return (
            r(s, [
              {
                key: "schedule",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                  return s.delegate && s.delegate !== this
                    ? s.delegate.schedule(e, t, n)
                    : a(i(s.prototype), "schedule", this).call(this, e, t, n);
                }
              },
              {
                key: "flush",
                value: function (e) {
                  var t = this.actions;
                  if (this.active) t.push(e);
                  else {
                    var n;
                    this.active = !0;
                    do {
                      if ((n = e.execute(e.state, e.delay))) break;
                    } while ((e = t.shift()));
                    if (((this.active = !1), n)) {
                      for (; (e = t.shift()); ) e.unsubscribe();
                      throw n;
                    }
                  }
                }
              }
            ]),
            s
          );
        })(Q)
      ))($),
      te = (function () {
        function t(n, r) {
          e(this, t), (this.predicate = n), (this.thisArg = r);
        }
        return (
          r(t, [
            {
              key: "call",
              value: function (e, t) {
                return t.subscribe(new ne(e, this.predicate, this.thisArg));
              }
            }
          ]),
          t
        );
      })(),
      ne = (function (t) {
        u(o, t);
        var n = f(o);
        function o(t, r, i) {
          var a;
          return e(this, o), ((a = n.call(this, t)).predicate = r), (a.thisArg = i), (a.count = 0), a;
        }
        return (
          r(o, [
            {
              key: "_next",
              value: function (e) {
                var t;
                try {
                  t = this.predicate.call(this.thisArg, e, this.count++);
                } catch (n) {
                  return void this.destination.error(n);
                }
                t && this.destination.next(e);
              }
            }
          ]),
          o
        );
      })(T);
    function re() {}
    var oe = (function () {
        function t(n, r, o) {
          e(this, t), (this.nextOrObserver = n), (this.error = r), (this.complete = o);
        }
        return (
          r(t, [
            {
              key: "call",
              value: function (e, t) {
                return t.subscribe(new ie(e, this.nextOrObserver, this.error, this.complete));
              }
            }
          ]),
          t
        );
      })(),
      ie = (function (t) {
        u(i, t);
        var n = f(i);
        function i(t, r, a, s) {
          var u;
          return (
            e(this, i),
            ((u = n.call(this, t))._tapNext = re),
            (u._tapError = re),
            (u._tapComplete = re),
            (u._tapError = a || re),
            (u._tapComplete = s || re),
            h(r)
              ? ((u._context = o(u)), (u._tapNext = r))
              : r && ((u._context = r), (u._tapNext = r.next || re), (u._tapError = r.error || re), (u._tapComplete = r.complete || re)),
            u
          );
        }
        return (
          r(i, [
            {
              key: "_next",
              value: function (e) {
                try {
                  this._tapNext.call(this._context, e);
                } catch (t) {
                  return void this.destination.error(t);
                }
                this.destination.next(e);
              }
            },
            {
              key: "_error",
              value: function (e) {
                try {
                  this._tapError.call(this._context, e);
                } catch (e) {
                  return void this.destination.error(e);
                }
                this.destination.error(e);
              }
            },
            {
              key: "_complete",
              value: function () {
                try {
                  this._tapComplete.call(this._context);
                } catch (e) {
                  return void this.destination.error(e);
                }
                return this.destination.complete();
              }
            }
          ]),
          i
        );
      })(T),
      ae = (function () {
        var t = (function () {
          function t(n, r, o) {
            e(this, t), (this.kind = n), (this.value = r), (this.error = o), (this.hasValue = "N" === n);
          }
          return (
            r(
              t,
              [
                {
                  key: "observe",
                  value: function (e) {
                    switch (this.kind) {
                      case "N":
                        return e.next && e.next(this.value);
                      case "E":
                        return e.error && e.error(this.error);
                      case "C":
                        return e.complete && e.complete();
                    }
                  }
                },
                {
                  key: "do",
                  value: function (e, t, n) {
                    switch (this.kind) {
                      case "N":
                        return e && e(this.value);
                      case "E":
                        return t && t(this.error);
                      case "C":
                        return n && n();
                    }
                  }
                },
                {
                  key: "accept",
                  value: function (e, t, n) {
                    return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, n);
                  }
                },
                {
                  key: "toObservable",
                  value: function () {
                    var e;
                    switch (this.kind) {
                      case "N":
                        return V(this.value);
                      case "E":
                        return (
                          (e = this.error),
                          new P(function (t) {
                            return t.error(e);
                          })
                        );
                      case "C":
                        return F();
                    }
                    throw new Error("unexpected notification kind value");
                  }
                }
              ],
              [
                {
                  key: "createNext",
                  value: function (e) {
                    return void 0 !== e ? new t("N", e) : t.undefinedValueNotification;
                  }
                },
                {
                  key: "createError",
                  value: function (e) {
                    return new t("E", void 0, e);
                  }
                },
                {
                  key: "createComplete",
                  value: function () {
                    return t.completeNotification;
                  }
                }
              ]
            ),
            t
          );
        })();
        return (t.completeNotification = new t("C")), (t.undefinedValueNotification = new t("N", void 0)), t;
      })(),
      se = (function () {
        function t(n) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          e(this, t), (this.scheduler = n), (this.delay = r);
        }
        return (
          r(t, [
            {
              key: "call",
              value: function (e, t) {
                return t.subscribe(new ue(e, this.scheduler, this.delay));
              }
            }
          ]),
          t
        );
      })(),
      ue = (function (t) {
        u(o, t);
        var n = f(o);
        function o(t, r) {
          var i,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return e(this, o), ((i = n.call(this, t)).scheduler = r), (i.delay = a), i;
        }
        return (
          r(
            o,
            [
              {
                key: "scheduleMessage",
                value: function (e) {
                  this.destination.add(this.scheduler.schedule(o.dispatch, this.delay, new ce(e, this.destination)));
                }
              },
              {
                key: "_next",
                value: function (e) {
                  this.scheduleMessage(ae.createNext(e));
                }
              },
              {
                key: "_error",
                value: function (e) {
                  this.scheduleMessage(ae.createError(e)), this.unsubscribe();
                }
              },
              {
                key: "_complete",
                value: function () {
                  this.scheduleMessage(ae.createComplete()), this.unsubscribe();
                }
              }
            ],
            [
              {
                key: "dispatch",
                value: function (e) {
                  e.notification.observe(e.destination), this.unsubscribe();
                }
              }
            ]
          ),
          o
        );
      })(T),
      ce = function t(n, r) {
        e(this, t), (this.notification = n), (this.destination = r);
      };
    var le,
      fe = n(66723);
    function he(e) {
      le.postMessage({ type: "pendo", data: { action: e } });
    }
    !(function () {
      var e, t, n;
      (e = this),
        (n = function () {
          return (function (e, t) {
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
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) &&
                          !(o = o.call(r, i[1])).done)
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
                    } catch (s) {
                      (i = [6, s]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          })(this, function (e) {
            return (
              (le = chrome.runtime.connect({ name: "submitButtonInClassroom" })),
              ((t = ".VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c"),
              (r = new P(function (e) {
                var n = new MutationObserver(function (n) {
                  var r,
                    o,
                    i = !1;
                  try {
                    for (
                      var a = (function (e) {
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
                        })(n),
                        s = a.next();
                      !s.done;
                      s = a.next()
                    ) {
                      var u = s.value;
                      if ("childList" === u.type)
                        for (var c = 0; c < u.addedNodes.length; ++c) 1 === (l = u.addedNodes[c]).nodeType && l.matches(t) && e.next(l);
                      if ("attributes" === u.type) {
                        var l;
                        if (1 !== (l = u.target).nodeType) continue;
                        i = !0;
                        break;
                      }
                    }
                  } catch (h) {
                    r = { error: h };
                  } finally {
                    try {
                      s && !s.done && (o = a.return) && o.call(a);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                  if (i) {
                    var f = document.querySelectorAll(t);
                    for (c = 0; c < f.length; c++) e.next(f[c]);
                  }
                });
                return (
                  n.observe(document.documentElement, { subtree: !0, attributes: !0, childList: !0 }),
                  function () {
                    return n.disconnect();
                  }
                );
              })),
              (function () {
                return K()(V.apply(void 0, arguments));
              })(
                ((n = function () {
                  return M(document.querySelectorAll(t));
                }),
                new P(function (e) {
                  var t;
                  try {
                    t = n();
                  } catch (r) {
                    return void e.error(r);
                  }
                  return (t ? M(t) : F()).subscribe(e);
                })),
                r.pipe(
                  (function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return function (n) {
                      return n.lift(new se(e, t));
                    };
                  })(ee),
                  function (e) {
                    var t,
                      n,
                      r = new WeakSet();
                    return e.pipe(
                      ((n = function (e) {
                        return !r.has(e);
                      }),
                      function (e) {
                        return e.lift(new te(n, void 0));
                      }),
                      ((t = function (e) {
                        return r.add(e);
                      }),
                      function (e) {
                        return e.lift(new oe(t, void 0, void 0));
                      })
                    );
                  }
                )
              )).subscribe(function (e) {
                return (function (e) {
                  var t = e.firstChild,
                    n = document.createElement("li");
                  n.classList.add("VfPpkd-StrnGf-rymPhb-ibnC6b"),
                    (n.innerHTML =
                      '<span class="VfPpkd-StrnGf-rymPhb-f7MjDc"><svg viewBox="0 0 38 30"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M11 8h12v13H11z"/><path fill="#FFF" d="M22 12l6-4v12l-6-3z"/><path d="M2 8L0 9v11l2 1h9V8H2zM36 13l-8-5-15-8-2 1v7h9l2 1v3l5-4v12l-5-3v3l-2 1h-9v6l2 2 15-9 8-4v-3z" fill="#FF8282" fill-rule="nonzero"/></g></svg>\n  </span>\n  <span class="VfPpkd-StrnGf-rymPhb-b9t22c">Video assignment</span>');
                  var r = document.querySelectorAll('[role="separator"]')[0];
                  t.insertBefore(n, r),
                    he("submit-button-shown"),
                    n.addEventListener("click", function () {
                      he("submit-button-clicked"), window.open((0, fe.N)("https://app.screencastify.com/submit"), void 0, void 0);
                    });
                })(e);
              }),
              [2]
            );
            var t, n, r;
          });
        }),
        new ((t = void 0) || (t = Promise))(function (r, o) {
          function i(e) {
            try {
              s(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            try {
              s(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            var n;
            e.done
              ? r(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })).then(i, a);
          }
          s((n = n.apply(e, [])).next());
        });
    })();
  })();
})();
