!(function (e) {
  var t, t;
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : ((t =
        "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Raven =
        e());
})(function () {
  var e, t, n;
  return (function r(o, a, i) {
    function s(n, e) {
      if (!a[n]) {
        if (!o[n]) {
          var t = "function" == typeof require && require;
          if (!e && t) return t(n, !0);
          if (l) return l(n, !0);
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        var t = (a[n] = { exports: {} });
        o[n][0].call(
          t.exports,
          function (e) {
            var t = o[n][1][e];
            return s(t || e);
          },
          t,
          t.exports,
          r,
          o,
          a,
          i
        );
      }
      return a[n].exports;
    }
    for (var l = "function" == typeof require && require, e = 0; e < i.length; e++) s(i[e]);
    return s;
  })(
    {
      1: [
        function (e, t, n) {
          function r(e) {
            (this.name = "RavenConfigError"), (this.message = e);
          }
          (r.prototype = new Error()), (t.exports = r.prototype.constructor = r);
        },
        {}
      ],
      2: [
        function (e, t, n) {
          var r;
          t.exports = {
            wrapMethod: function (e, r, o) {
              var a = e[r],
                i = e,
                s;
              r in e &&
                ((s = "warn" === r ? "warning" : r),
                (e[r] = function () {
                  var e = [].slice.call(arguments),
                    t = "" + e.join(" "),
                    n = { level: s, logger: "console", extra: { arguments: e } };
                  "assert" === r
                    ? !1 === e[0] &&
                      ((t = "Assertion failed: " + (e.slice(1).join(" ") || "console.assert")), (n.extra.arguments = e.slice(1)), o) &&
                      o(t, n)
                    : o && o(t, n),
                    a && Function.prototype.apply.call(a, i, e);
                }));
            }
          };
        },
        {}
      ],
      3: [
        function (D, B, e) {
          !function (e) {
            var i = D(6),
              o = D(7),
              a = D(1),
              t = D(5),
              s = t.isError,
              l = t.isObject,
              u = t.isErrorEvent,
              n = t.isUndefined,
              f = t.isFunction,
              c = t.isString,
              d = t.isArray,
              p = t.isEmptyObject,
              g = t.each,
              h = t.objectMerge,
              m = t.truncate,
              v = t.objectFrozen,
              _ = t.hasKey,
              b = t.joinRegExp,
              y = t.urlencode,
              r = t.uuid4,
              w = t.htmlTreeAsString,
              x = t.isSameException,
              E = t.isSameStacktrace,
              S = t.parseUrl,
              k = t.fill,
              P = D(2).wrapMethod,
              T = "source protocol user pass host port path".split(" "),
              O = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;
            function L() {
              return +new Date();
            }
            var C = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
              F = C.document,
              R = C.navigator;
            function A(t, n) {
              return f(n)
                ? function (e) {
                    return n(e, t);
                  }
                : n;
            }
            function I() {
              for (var e in ((this._hasJSON = !("object" != typeof JSON || !JSON.stringify)),
              (this._hasDocument = !n(F)),
              (this._hasNavigator = !n(R)),
              (this._lastCapturedException = null),
              (this._lastData = null),
              (this._lastEventId = null),
              (this._globalServer = null),
              (this._globalKey = null),
              (this._globalProject = null),
              (this._globalContext = {}),
              (this._globalOptions = {
                logger: "javascript",
                ignoreErrors: [],
                ignoreUrls: [],
                whitelistUrls: [],
                includePaths: [],
                collectWindowErrors: !0,
                maxMessageLength: 0,
                maxUrlLength: 250,
                stackTraceLimit: 50,
                autoBreadcrumbs: !0,
                instrument: !0,
                sampleRate: 1
              }),
              (this._ignoreOnError = 0),
              (this._isRavenInstalled = !1),
              (this._originalErrorStackTraceLimit = Error.stackTraceLimit),
              (this._originalConsole = C.console || {}),
              (this._originalConsoleMethods = {}),
              (this._plugins = []),
              (this._startTime = L()),
              (this._wrappedBuiltIns = []),
              (this._breadcrumbs = []),
              (this._lastCapturedEvent = null),
              this._keypressTimeout,
              (this._location = C.location),
              (this._lastHref = this._location && this._location.href),
              this._resetBackoff(),
              this._originalConsole))
                this._originalConsoleMethods[e] = this._originalConsole[e];
            }
            ((I.prototype = {
              VERSION: "3.20.1",
              debug: !1,
              TraceKit: i,
              config: function (e, t) {
                var n = this,
                  r,
                  t,
                  e,
                  t,
                  e;
                return (
                  n._globalServer
                    ? this._logDebug("error", "Error: Raven has already been configured")
                    : e &&
                      ((r = n._globalOptions),
                      t &&
                        g(t, function (e, t) {
                          "tags" === e || "extra" === e || "user" === e ? (n._globalContext[e] = t) : (r[e] = t);
                        }),
                      n.setDSN(e),
                      r.ignoreErrors.push(/^Script error\.?$/),
                      r.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),
                      (r.ignoreErrors = b(r.ignoreErrors)),
                      (r.ignoreUrls = !!r.ignoreUrls.length && b(r.ignoreUrls)),
                      (r.whitelistUrls = !!r.whitelistUrls.length && b(r.whitelistUrls)),
                      (r.includePaths = b(r.includePaths)),
                      (r.maxBreadcrumbs = Math.max(0, Math.min(r.maxBreadcrumbs || 100, 100))),
                      (t = { xhr: !0, console: !0, dom: !0, location: !0, sentry: !0 }),
                      (e = r.autoBreadcrumbs),
                      "[object Object]" === {}.toString.call(e) ? (e = h(t, e)) : !1 !== e && (e = t),
                      (r.autoBreadcrumbs = e),
                      (t = { tryCatch: !0 }),
                      (e = r.instrument),
                      "[object Object]" === {}.toString.call(e) ? (e = h(t, e)) : !1 !== e && (e = t),
                      (r.instrument = e),
                      (i.collectWindowErrors = !!r.collectWindowErrors)),
                  n
                );
              },
              install: function () {
                var e = this;
                return (
                  e.isSetup() &&
                    !e._isRavenInstalled &&
                    (i.report.subscribe(function () {
                      e._handleOnErrorStackInfo.apply(e, arguments);
                    }),
                    e._patchFunctionToString(),
                    e._globalOptions.instrument && e._globalOptions.instrument.tryCatch && e._instrumentTryCatch(),
                    e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(),
                    e._drainPlugins(),
                    (e._isRavenInstalled = !0)),
                  (Error.stackTraceLimit = e._globalOptions.stackTraceLimit),
                  this
                );
              },
              setDSN: function (e) {
                var t = this,
                  n = t._parseDSN(e),
                  r = n.path.lastIndexOf("/"),
                  o = n.path.substr(1, r);
                (t._dsn = e),
                  (t._globalKey = n.user),
                  (t._globalSecret = n.pass && n.pass.substr(1)),
                  (t._globalProject = n.path.substr(r + 1)),
                  (t._globalServer = t._getGlobalServer(n)),
                  (t._globalEndpoint = t._globalServer + "/" + o + "api/" + t._globalProject + "/store/"),
                  this._resetBackoff();
              },
              context: function (e, t, n) {
                return f(e) && ((n = t || []), (t = e), (e = void 0)), this.wrap(e, t).apply(this, n);
              },
              wrap: function (r, o, a) {
                var i = this,
                  e;
                if (n(o) && !f(r)) return r;
                if ((f(r) && ((o = r), (r = void 0)), !f(o))) return o;
                try {
                  if (o.__raven__) return o;
                  if (o.__raven_wrapper__) return o.__raven_wrapper__;
                } catch (e) {
                  return o;
                }
                function t() {
                  var e = [],
                    t = arguments.length,
                    n = !r || !1 !== r.deep;
                  for (a && f(a) && a.apply(this, arguments); t--; ) e[t] = n ? i.wrap(r, arguments[t]) : arguments[t];
                  try {
                    return o.apply(this, e);
                  } catch (e) {
                    throw (i._ignoreNextOnError(), i.captureException(e, r), e);
                  }
                }
                for (e in o) _(o, e) && (t[e] = o[e]);
                return (t.prototype = o.prototype), ((o.__raven_wrapper__ = t).__raven__ = !0), (t.__orig__ = o), t;
              },
              uninstall: function () {
                return (
                  i.report.uninstall(),
                  this._unpatchFunctionToString(),
                  this._restoreBuiltIns(),
                  (Error.stackTraceLimit = this._originalErrorStackTraceLimit),
                  (this._isRavenInstalled = !1),
                  this
                );
              },
              captureException: function (t, e) {
                var n = !s(t),
                  r = !u(t),
                  o = u(t) && !t.error;
                if ((n && r) || o) return this.captureMessage(t, h({ trimHeadFrames: 1, stacktrace: !0 }, e));
                u(t) && (t = t.error), (this._lastCapturedException = t);
                try {
                  var a = i.computeStackTrace(t);
                  this._handleStackInfo(a, e);
                } catch (e) {
                  if (t !== e) throw e;
                }
                return this;
              },
              captureMessage: function (e, t) {
                if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
                  var n = h({ message: e + "" }, (t = t || {})),
                    r;
                  try {
                    throw new Error(e);
                  } catch (e) {
                    r = e;
                  }
                  r.name = null;
                  var r = i.computeStackTrace(r),
                    o = d(r.stack) && r.stack[1],
                    o = (o && o.url) || "",
                    o;
                  if (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(o))
                    if (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(o))
                      return (
                        (this._globalOptions.stacktrace || (t && t.stacktrace)) &&
                          ((t = h({ fingerprint: e, trimHeadFrames: (t.trimHeadFrames || 0) + 1 }, t)),
                          (o = this._prepareFrames(r, t)),
                          (n.stacktrace = { frames: o.reverse() })),
                        this._send(n),
                        this
                      );
                }
              },
              captureBreadcrumb: function (e) {
                var e = h({ timestamp: L() / 1e3 }, e);
                if (f(this._globalOptions.breadcrumbCallback)) {
                  var t = this._globalOptions.breadcrumbCallback(e);
                  if (l(t) && !p(t)) e = t;
                  else if (!1 === t) return this;
                }
                return (
                  this._breadcrumbs.push(e),
                  this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(),
                  this
                );
              },
              addPlugin: function (e) {
                var t = [].slice.call(arguments, 1);
                return this._plugins.push([e, t]), this._isRavenInstalled && this._drainPlugins(), this;
              },
              setUserContext: function (e) {
                return (this._globalContext.user = e), this;
              },
              setExtraContext: function (e) {
                return this._mergeContext("extra", e), this;
              },
              setTagsContext: function (e) {
                return this._mergeContext("tags", e), this;
              },
              clearContext: function () {
                return (this._globalContext = {}), this;
              },
              getContext: function () {
                return JSON.parse(o(this._globalContext));
              },
              setEnvironment: function (e) {
                return (this._globalOptions.environment = e), this;
              },
              setRelease: function (e) {
                return (this._globalOptions.release = e), this;
              },
              setDataCallback: function (e) {
                var t = this._globalOptions.dataCallback;
                return (this._globalOptions.dataCallback = A(t, e)), this;
              },
              setBreadcrumbCallback: function (e) {
                var t = this._globalOptions.breadcrumbCallback;
                return (this._globalOptions.breadcrumbCallback = A(t, e)), this;
              },
              setShouldSendCallback: function (e) {
                var t = this._globalOptions.shouldSendCallback;
                return (this._globalOptions.shouldSendCallback = A(t, e)), this;
              },
              setTransport: function (e) {
                return (this._globalOptions.transport = e), this;
              },
              lastException: function () {
                return this._lastCapturedException;
              },
              lastEventId: function () {
                return this._lastEventId;
              },
              isSetup: function () {
                return !(
                  !this._hasJSON ||
                  (!this._globalServer &&
                    (this.ravenNotConfiguredError ||
                      ((this.ravenNotConfiguredError = !0), this._logDebug("error", "Error: Raven has not been configured.")),
                    1))
                );
              },
              afterLoad: function () {
                var e = C.RavenConfig;
                e && this.config(e.dsn, e.config).install();
              },
              showReportDialog: function (e) {
                if (F) {
                  var t = (e = e || {}).eventId || this.lastEventId();
                  if (!t) throw new a("Missing eventId");
                  var n = e.dsn || this._dsn;
                  if (!n) throw new a("Missing DSN");
                  var r = encodeURIComponent,
                    o = "",
                    t = ((o = (o += "?eventId=" + r(t)) + ("&dsn=" + r(n))), e.user || this._globalContext.user),
                    e =
                      (t && (t.name && (o += "&name=" + r(t.name)), t.email) && (o += "&email=" + r(t.email)),
                      this._getGlobalServer(this._parseDSN(n))),
                    r = F.createElement("script");
                  (r.async = !0), (r.src = e + "/api/embed/error-page/" + o), (F.head || F.body).appendChild(r);
                }
              },
              _ignoreNextOnError: function () {
                var e = this;
                (this._ignoreOnError += 1),
                  setTimeout(function () {
                    --e._ignoreOnError;
                  });
              },
              _triggerEvent: function (e, t) {
                var n, r;
                if (this._hasDocument) {
                  for (r in ((t = t || {}),
                  (e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1)),
                  F.createEvent ? (n = F.createEvent("HTMLEvents")).initEvent(e, !0, !0) : ((n = F.createEventObject()).eventType = e),
                  t))
                    _(t, r) && (n[r] = t[r]);
                  if (F.createEvent) F.dispatchEvent(n);
                  else
                    try {
                      F.fireEvent("on" + n.eventType.toLowerCase(), n);
                    } catch (e) {}
                }
              },
              _breadcrumbEventHandler: function (n) {
                var r = this;
                return function (e) {
                  if (((r._keypressTimeout = null), r._lastCapturedEvent !== e)) {
                    var t;
                    r._lastCapturedEvent = e;
                    try {
                      t = w(e.target);
                    } catch (e) {
                      t = "<unknown>";
                    }
                    r.captureBreadcrumb({ category: "ui." + n, message: t });
                  }
                };
              },
              _keypressEventHandler: function () {
                var r = this,
                  o = 1e3;
                return function (e) {
                  var t;
                  try {
                    t = e.target;
                  } catch (e) {
                    return;
                  }
                  var n = t && t.tagName,
                    n;
                  n &&
                    ("INPUT" === n || "TEXTAREA" === n || t.isContentEditable) &&
                    ((n = r._keypressTimeout) || r._breadcrumbEventHandler("input")(e),
                    clearTimeout(n),
                    (r._keypressTimeout = setTimeout(function () {
                      r._keypressTimeout = null;
                    }, o)));
                };
              },
              _captureUrlChange: function (e, t) {
                var n = S(this._location.href),
                  r = S(t),
                  o = S(e);
                (this._lastHref = t),
                  n.protocol === r.protocol && n.host === r.host && (t = r.relative),
                  n.protocol === o.protocol && n.host === o.host && (e = o.relative),
                  this.captureBreadcrumb({ category: "navigation", data: { to: t, from: e } });
              },
              _patchFunctionToString: function () {
                var e = this;
                (e._originalFunctionToString = Function.prototype.toString),
                  (Function.prototype.toString = function () {
                    return "function" == typeof this && this.__raven__
                      ? e._originalFunctionToString.apply(this.__orig__, arguments)
                      : e._originalFunctionToString.apply(this, arguments);
                  });
              },
              _unpatchFunctionToString: function () {
                this._originalFunctionToString && (Function.prototype.toString = this._originalFunctionToString);
              },
              _instrumentTryCatch: function () {
                var u = this,
                  t = u._wrappedBuiltIns;
                function e(a) {
                  return function (e, t) {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; ++r) n[r] = arguments[r];
                    var o = n[0];
                    return f(o) && (n[0] = u.wrap(o)), a.apply ? a.apply(this, n) : a(n[0], n[1]);
                  };
                }
                var c = this._globalOptions.autoBreadcrumbs;
                function n(l) {
                  var e = C[l] && C[l].prototype;
                  e &&
                    e.hasOwnProperty &&
                    e.hasOwnProperty("addEventListener") &&
                    (k(
                      e,
                      "addEventListener",
                      function (s) {
                        return function (e, t, n, r) {
                          try {
                            t && t.handleEvent && (t.handleEvent = u.wrap(t.handleEvent));
                          } catch (e) {}
                          var o, a, i;
                          return (
                            c &&
                              c.dom &&
                              ("EventTarget" === l || "Node" === l) &&
                              ((a = u._breadcrumbEventHandler("click")),
                              (i = u._keypressEventHandler()),
                              (o = function (e) {
                                if (e) {
                                  var t;
                                  try {
                                    t = e.type;
                                  } catch (e) {
                                    return;
                                  }
                                  return "click" === t ? a(e) : "keypress" === t ? i(e) : void 0;
                                }
                              })),
                            s.call(this, e, u.wrap(t, void 0, o), n, r)
                          );
                        };
                      },
                      t
                    ),
                    k(
                      e,
                      "removeEventListener",
                      function (o) {
                        return function (e, t, n, r) {
                          try {
                            t = t && (t.__raven_wrapper__ || t);
                          } catch (e) {}
                          return o.call(this, e, t, n, r);
                        };
                      },
                      t
                    ));
                }
                k(C, "setTimeout", e, t),
                  k(C, "setInterval", e, t),
                  C.requestAnimationFrame &&
                    k(
                      C,
                      "requestAnimationFrame",
                      function (t) {
                        return function (e) {
                          return t(u.wrap(e));
                        };
                      },
                      t
                    );
                for (
                  var r = [
                      "EventTarget",
                      "Window",
                      "Node",
                      "ApplicationCache",
                      "AudioTrackList",
                      "ChannelMergerNode",
                      "CryptoOperation",
                      "EventSource",
                      "FileReader",
                      "HTMLUnknownElement",
                      "IDBDatabase",
                      "IDBRequest",
                      "IDBTransaction",
                      "KeyOperation",
                      "MediaController",
                      "MessagePort",
                      "ModalWindow",
                      "Notification",
                      "SVGElementInstance",
                      "Screen",
                      "TextTrack",
                      "TextTrackCue",
                      "TextTrackList",
                      "WebSocket",
                      "WebSocketWorker",
                      "Worker",
                      "XMLHttpRequest",
                      "XMLHttpRequestEventTarget",
                      "XMLHttpRequestUpload"
                    ],
                    o = 0;
                  o < r.length;
                  o++
                )
                  n(r[o]);
              },
              _instrumentBreadcrumbs: function () {
                var u = this,
                  e = this._globalOptions.autoBreadcrumbs,
                  t = u._wrappedBuiltIns,
                  n;
                function i(e, t) {
                  e in t &&
                    f(t[e]) &&
                    k(t, e, function (e) {
                      return u.wrap(e);
                    });
                }
                e.xhr &&
                  "XMLHttpRequest" in C &&
                  ((n = XMLHttpRequest.prototype),
                  k(
                    n,
                    "open",
                    function (n) {
                      return function (e, t) {
                        return (
                          c(t) && -1 === t.indexOf(u._globalKey) && (this.__raven_xhr = { method: e, url: t, status_code: null }),
                          n.apply(this, arguments)
                        );
                      };
                    },
                    t
                  ),
                  k(
                    n,
                    "send",
                    function (a) {
                      return function (e) {
                        var t = this;
                        function n() {
                          if (t.__raven_xhr && 4 === t.readyState) {
                            try {
                              t.__raven_xhr.status_code = t.status;
                            } catch (e) {}
                            u.captureBreadcrumb({ type: "http", category: "xhr", data: t.__raven_xhr });
                          }
                        }
                        for (var r = ["onload", "onerror", "onprogress"], o = 0; o < r.length; o++) i(r[o], t);
                        return (
                          "onreadystatechange" in t && f(t.onreadystatechange)
                            ? k(t, "onreadystatechange", function (e) {
                                return u.wrap(e, void 0, n);
                              })
                            : (t.onreadystatechange = n),
                          a.apply(this, arguments)
                        );
                      };
                    },
                    t
                  )),
                  e.xhr &&
                    "fetch" in C &&
                    k(
                      C,
                      "fetch",
                      function (l) {
                        return function (e, t) {
                          for (var n = new Array(arguments.length), r = 0; r < n.length; ++r) n[r] = arguments[r];
                          var o = n[0],
                            a = "GET",
                            i,
                            s =
                              ("string" == typeof o
                                ? (i = o)
                                : "Request" in C && o instanceof C.Request
                                ? ((i = o.url), o.method && (a = o.method))
                                : (i = "" + o),
                              { method: (a = n[1] && n[1].method ? n[1].method : a), url: i, status_code: null });
                          return (
                            u.captureBreadcrumb({ type: "http", category: "fetch", data: s }),
                            l.apply(this, n).then(function (e) {
                              return (s.status_code = e.status), e;
                            })
                          );
                        };
                      },
                      t
                    ),
                  e.dom &&
                    this._hasDocument &&
                    (F.addEventListener
                      ? (F.addEventListener("click", u._breadcrumbEventHandler("click"), !1),
                        F.addEventListener("keypress", u._keypressEventHandler(), !1))
                      : (F.attachEvent("onclick", u._breadcrumbEventHandler("click")),
                        F.attachEvent("onkeypress", u._keypressEventHandler())));
                var n = C.chrome,
                  r,
                  n = !(n && n.app && n.app.runtime) && C.history && history.pushState && history.replaceState,
                  o,
                  n,
                  a;
                e.location &&
                  n &&
                  ((o = C.onpopstate),
                  (C.onpopstate = function () {
                    var e = u._location.href;
                    if ((u._captureUrlChange(u._lastHref, e), o)) return o.apply(this, arguments);
                  }),
                  (n = function (t) {
                    return function () {
                      var e = 2 < arguments.length ? arguments[2] : void 0;
                      return e && u._captureUrlChange(u._lastHref, e + ""), t.apply(this, arguments);
                    };
                  }),
                  k(history, "pushState", n, t),
                  k(history, "replaceState", n, t)),
                  e.console &&
                    "console" in C &&
                    console.log &&
                    ((a = function (e, t) {
                      u.captureBreadcrumb({ message: e, level: t.level, category: "console" });
                    }),
                    g(["debug", "info", "warn", "error", "log"], function (e, t) {
                      P(console, t, a);
                    }));
              },
              _restoreBuiltIns: function () {
                for (var e; this._wrappedBuiltIns.length; ) {
                  var e,
                    t = (e = this._wrappedBuiltIns.shift())[0],
                    n = e[1],
                    e = e[2];
                  t[n] = e;
                }
              },
              _drainPlugins: function () {
                var r = this;
                g(this._plugins, function (e, t) {
                  var n = t[0],
                    t = t[1];
                  n.apply(r, [r].concat(t));
                });
              },
              _parseDSN: function (t) {
                var e = O.exec(t),
                  n = {},
                  r = 7;
                try {
                  for (; r--; ) n[T[r]] = e[r] || "";
                } catch (e) {
                  throw new a("Invalid DSN: " + t);
                }
                if (n.pass && !this._globalOptions.allowSecretKey)
                  throw new a("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                return n;
              },
              _getGlobalServer: function (e) {
                var t = "//" + e.host + (e.port ? ":" + e.port : "");
                return (t = e.protocol ? e.protocol + ":" + t : t);
              },
              _handleOnErrorStackInfo: function () {
                this._ignoreOnError || this._handleStackInfo.apply(this, arguments);
              },
              _handleStackInfo: function (e, t) {
                var n = this._prepareFrames(e, t);
                this._triggerEvent("handle", { stackInfo: e, options: t }),
                  this._processException(e.name, e.message, e.url, e.lineno, n, t);
              },
              _prepareFrames: function (n, e) {
                var r = this,
                  o = [];
                if (
                  n.stack &&
                  n.stack.length &&
                  (g(n.stack, function (e, t) {
                    var t = r._normalizeFrame(t, n.url);
                    t && o.push(t);
                  }),
                  e) &&
                  e.trimHeadFrames
                )
                  for (var t = 0; t < e.trimHeadFrames && t < o.length; t++) o[t].in_app = !1;
                return (o = o.slice(0, this._globalOptions.stackTraceLimit));
              },
              _normalizeFrame: function (e, t) {
                var n = { filename: e.url, lineno: e.line, colno: e.column, function: e.func || "?" };
                return (
                  e.url || (n.filename = t),
                  (n.in_app = !(
                    (this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(n.filename)) ||
                    /(Raven|TraceKit)\./.test(n.function) ||
                    /raven\.(min\.)?js$/.test(n.filename)
                  )),
                  n
                );
              },
              _processException: function (e, t, n, r, o, a) {
                var i = (e ? e + ": " : "") + (t || ""),
                  s,
                  i;
                (this._globalOptions.ignoreErrors.test &&
                  (this._globalOptions.ignoreErrors.test(t) || this._globalOptions.ignoreErrors.test(i))) ||
                  (o && o.length
                    ? ((n = o[0].filename || n), o.reverse(), (s = { frames: o }))
                    : n && (s = { frames: [{ filename: n, lineno: r, in_app: !0 }] }),
                  this._globalOptions.ignoreUrls.test && this._globalOptions.ignoreUrls.test(n)) ||
                  (this._globalOptions.whitelistUrls.test && !this._globalOptions.whitelistUrls.test(n)) ||
                  ((i = h({ exception: { values: [{ type: e, value: t, stacktrace: s }] }, culprit: n }, a)), this._send(i));
              },
              _trimPacket: function (e) {
                var t = this._globalOptions.maxMessageLength,
                  n,
                  n =
                    (e.message && (e.message = m(e.message, t)),
                    e.exception && ((n = e.exception.values[0]).value = m(n.value, t)),
                    e.request);
                return (
                  n &&
                    (n.url && (n.url = m(n.url, this._globalOptions.maxUrlLength)), n.Referer) &&
                    (n.Referer = m(n.Referer, this._globalOptions.maxUrlLength)),
                  e.breadcrumbs && e.breadcrumbs.values && this._trimBreadcrumbs(e.breadcrumbs),
                  e
                );
              },
              _trimBreadcrumbs: function (e) {
                for (var t = ["to", "from", "url"], n, r, o, a = 0; a < e.values.length; ++a)
                  if ((r = e.values[a]).hasOwnProperty("data") && l(r.data) && !v(r.data)) {
                    for (var o = h({}, r.data), i = 0; i < t.length; ++i)
                      o.hasOwnProperty((n = t[i])) && o[n] && (o[n] = m(o[n], this._globalOptions.maxUrlLength));
                    e.values[a].data = o;
                  }
              },
              _getHttpData: function () {
                var e;
                if (this._hasNavigator || this._hasDocument)
                  return (
                    (e = {}),
                    this._hasNavigator && R.userAgent && (e.headers = { "User-Agent": navigator.userAgent }),
                    this._hasDocument &&
                      (F.location && F.location.href && (e.url = F.location.href), F.referrer) &&
                      (e.headers || (e.headers = {}), (e.headers.Referer = F.referrer)),
                    e
                  );
              },
              _resetBackoff: function () {
                (this._backoffDuration = 0), (this._backoffStart = null);
              },
              _shouldBackoff: function () {
                return this._backoffDuration && L() - this._backoffStart < this._backoffDuration;
              },
              _isRepeatData: function (e) {
                var t = this._lastData;
                return (
                  !(!t || e.message !== t.message || e.culprit !== t.culprit) &&
                  (e.stacktrace || t.stacktrace
                    ? E(e.stacktrace, t.stacktrace)
                    : (!e.exception && !t.exception) || x(e.exception, t.exception))
                );
              },
              _setBackoffState: function (e) {
                if (!this._shouldBackoff()) {
                  var t = e.status,
                    n;
                  if (400 === t || 401 === t || 429 === t) {
                    try {
                      (n = e.getResponseHeader("Retry-After")), (n = 1e3 * parseInt(n, 10));
                    } catch (e) {}
                    (this._backoffDuration = n || 2 * this._backoffDuration || 1e3), (this._backoffStart = L());
                  }
                }
              },
              _send: function (e) {
                var t = this._globalOptions,
                  n = { project: this._globalProject, logger: t.logger, platform: "javascript" },
                  r = this._getHttpData();
                r && (n.request = r),
                  e.trimHeadFrames && delete e.trimHeadFrames,
                  ((e = h(n, e)).tags = h(h({}, this._globalContext.tags), e.tags)),
                  (e.extra = h(h({}, this._globalContext.extra), e.extra)),
                  (e.extra["session:duration"] = L() - this._startTime),
                  this._breadcrumbs && 0 < this._breadcrumbs.length && (e.breadcrumbs = { values: [].slice.call(this._breadcrumbs, 0) }),
                  p(e.tags) && delete e.tags,
                  this._globalContext.user && (e.user = this._globalContext.user),
                  t.environment && (e.environment = t.environment),
                  t.release && (e.release = t.release),
                  t.serverName && (e.server_name = t.serverName),
                  !(e = f(t.dataCallback) ? t.dataCallback(e) || e : e) ||
                    p(e) ||
                    (f(t.shouldSendCallback) && !t.shouldSendCallback(e)) ||
                    (this._shouldBackoff()
                      ? this._logDebug("warn", "Raven dropped error due to backoff: ", e)
                      : ("number" != typeof t.sampleRate || Math.random() < t.sampleRate) && this._sendProcessedPayload(e));
              },
              _getUuid: function () {
                return r();
              },
              _sendProcessedPayload: function (n, r) {
                var o = this,
                  e = this._globalOptions,
                  t,
                  a,
                  i;
                this.isSetup() &&
                  ((n = this._trimPacket(n)),
                  !this._globalOptions.allowDuplicates && this._isRepeatData(n)
                    ? this._logDebug("warn", "Raven dropped repeat event: ", n)
                    : ((this._lastEventId = n.event_id || (n.event_id = this._getUuid())),
                      (this._lastData = n),
                      this._logDebug("debug", "Raven about to send:", n),
                      (t = { sentry_version: "7", sentry_client: "raven-js/" + this.VERSION, sentry_key: this._globalKey }),
                      this._globalSecret && (t.sentry_secret = this._globalSecret),
                      (a = n.exception && n.exception.values[0]),
                      this._globalOptions.autoBreadcrumbs &&
                        this._globalOptions.autoBreadcrumbs.sentry &&
                        this.captureBreadcrumb({
                          category: "sentry",
                          message: a ? (a.type ? a.type + ": " : "") + a.value : n.message,
                          event_id: n.event_id,
                          level: n.level || "error"
                        }),
                      (i = this._globalEndpoint),
                      (e.transport || this._makeRequest).call(this, {
                        url: i,
                        auth: t,
                        data: n,
                        options: e,
                        onSuccess: function e() {
                          o._resetBackoff(), o._triggerEvent("success", { data: n, src: i }), r && r();
                        },
                        onError: function e(t) {
                          o._logDebug("error", "Raven transport failed to send: ", t),
                            t.request && o._setBackoffState(t.request),
                            o._triggerEvent("failure", { data: n, src: i }),
                            (t = t || new Error("Raven send failed (no additional details provided)")),
                            r && r(t);
                        }
                      })));
              },
              _makeRequest: function (t) {
                var n = C.XMLHttpRequest && new C.XMLHttpRequest(),
                  e,
                  r;
                n &&
                  ("withCredentials" in n || "undefined" != typeof XDomainRequest) &&
                  ((r = t.url),
                  "withCredentials" in n
                    ? (n.onreadystatechange = function () {
                        var e;
                        4 === n.readyState &&
                          (200 === n.status
                            ? t.onSuccess && t.onSuccess()
                            : t.onError && (((e = new Error("Sentry error code: " + n.status)).request = n), t.onError(e)));
                      })
                    : ((n = new XDomainRequest()),
                      (r = r.replace(/^https?:/, "")),
                      t.onSuccess && (n.onload = t.onSuccess),
                      t.onError &&
                        (n.onerror = function () {
                          var e = new Error("Sentry error code: XDomainRequest");
                          (e.request = n), t.onError(e);
                        })),
                  n.open("POST", r + "?" + y(t.auth)),
                  n.send(o(t.data)));
              },
              _logDebug: function (e) {
                this._originalConsoleMethods[e] &&
                  this.debug &&
                  Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1));
              },
              _mergeContext: function (e, t) {
                n(t) ? delete this._globalContext[e] : (this._globalContext[e] = h(this._globalContext[e] || {}, t));
              }
            }).setUser = I.prototype.setUserContext),
              (I.prototype.setReleaseContext = I.prototype.setRelease),
              (B.exports = I);
          }.call(
            this,
            "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
          );
        },
        { 1: 1, 2: 2, 5: 5, 6: 6, 7: 7 }
      ],
      4: [
        function (a, i, e) {
          !function (e) {
            var t = a(3),
              n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
              r = n.Raven,
              o = new t();
            (o.noConflict = function () {
              return (n.Raven = r), o;
            }),
              o.afterLoad(),
              (i.exports = o);
          }.call(
            this,
            "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
          );
        },
        { 3: 3 }
      ],
      5: [
        function (e, T, t) {
          !function (e) {
            var n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
            function t(e) {
              return "object" == typeof e && null !== e;
            }
            function r(e) {
              switch ({}.toString.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                  return !0;
                default:
                  return e instanceof Error;
              }
            }
            function o(e) {
              return c() && "[object ErrorEvent]" === {}.toString.call(e);
            }
            function a(e) {
              return void 0 === e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function l(e) {
              return "[object String]" === Object.prototype.toString.call(e);
            }
            function s(e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            }
            function u(e) {
              for (var t in e) if (e.hasOwnProperty(t)) return !1;
              return !0;
            }
            function c() {
              try {
                return new ErrorEvent(""), !0;
              } catch (e) {
                return !1;
              }
            }
            function f(n) {
              function e(e, t) {
                var e = n(e) || e;
                return (t && t(e)) || e;
              }
              return e;
            }
            function d(e, t) {
              var n, r;
              if (a(e.length)) for (n in e) m(e, n) && t.call(null, n, e[n]);
              else if ((r = e.length)) for (n = 0; n < r; n++) t.call(null, n, e[n]);
            }
            function p(n, e) {
              return (
                e &&
                  d(e, function (e, t) {
                    n[e] = t;
                  }),
                n
              );
            }
            function g(e) {
              return !!Object.isFrozen && Object.isFrozen(e);
            }
            function h(e, t) {
              return !t || e.length <= t ? e : e.substr(0, t) + "…";
            }
            function m(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }
            function v(e) {
              for (var t = [], n = 0, r = e.length, o; n < r; n++)
                l((o = e[n])) ? t.push(o.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : o && o.source && t.push(o.source);
              return new RegExp(t.join("|"), "i");
            }
            function _(e) {
              var n = [];
              return (
                d(e, function (e, t) {
                  n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t));
                }),
                n.join("&")
              );
            }
            function b(e) {
              var e = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/),
                t,
                n;
              return e ? ((t = e[6] || ""), (n = e[8] || ""), { protocol: e[2], host: e[4], path: e[5], relative: e[5] + t + n }) : {};
            }
            function y() {
              var e = n.crypto || n.msCrypto,
                t,
                e;
              return !a(e) && e.getRandomValues
                ? ((t = new Uint16Array(8)),
                  e.getRandomValues(t),
                  (t[3] = (4095 & t[3]) | 16384),
                  (t[4] = (16383 & t[4]) | 32768),
                  (e = function (e) {
                    for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
                    return t;
                  })(t[0]) +
                    e(t[1]) +
                    e(t[2]) +
                    e(t[3]) +
                    e(t[4]) +
                    e(t[5]) +
                    e(t[6]) +
                    e(t[7]))
                : "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = (16 * Math.random()) | 0,
                      n;
                    return ("x" === e ? t : (3 & t) | 8).toString(16);
                  });
            }
            function w(e) {
              for (
                var t = 5, n = 80, r = [], o = 0, a = 0, i = " > ", s = i.length, l;
                e && o++ < 5 && !("html" === (l = x(e)) || (1 < o && 80 <= a + r.length * s + l.length));

              )
                r.push(l), (a += l.length), (e = e.parentNode);
              return r.reverse().join(i);
            }
            function x(e) {
              var t = [],
                n,
                r,
                o,
                a,
                i;
              if (!e || !e.tagName) return "";
              if ((t.push(e.tagName.toLowerCase()), e.id && t.push("#" + e.id), (n = e.className) && l(n)))
                for (r = n.split(/\s+/), i = 0; i < r.length; i++) t.push("." + r[i]);
              for (var s = ["type", "name", "title", "alt"], i = 0; i < s.length; i++)
                (a = e.getAttribute((o = s[i]))) && t.push("[" + o + '="' + a + '"]');
              return t.join("");
            }
            function E(e, t) {
              return !!e ^ !!t;
            }
            function S(e, t) {
              return (
                !(!!e ^ !!t) &&
                ((e = e.values[0]), (t = t.values[0]), e.type === t.type) &&
                e.value === t.value &&
                k(e.stacktrace, t.stacktrace)
              );
            }
            function k(e, t) {
              if (!!e ^ !!t) return !1;
              var n = e.frames,
                r = t.frames,
                o,
                a;
              if (n.length !== r.length) return !1;
              for (var i = 0; i < n.length; i++)
                if (
                  ((o = n[i]),
                  (a = r[i]),
                  o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function)
                )
                  return !1;
              return !0;
            }
            function P(e, t, n, r) {
              var o = e[t];
              (e[t] = n(o)), (e[t].__raven__ = !0), (e[t].__orig__ = o), r && r.push([e, t, o]);
            }
            T.exports = {
              isObject: t,
              isError: r,
              isErrorEvent: o,
              isUndefined: a,
              isFunction: i,
              isString: l,
              isArray: s,
              isEmptyObject: u,
              supportsErrorEvent: c,
              wrappedCallback: f,
              each: d,
              objectMerge: p,
              truncate: h,
              objectFrozen: g,
              hasKey: m,
              joinRegExp: v,
              urlencode: _,
              uuid4: y,
              htmlTreeAsString: w,
              htmlElementAsString: x,
              isSameException: S,
              isSameStacktrace: k,
              parseUrl: b,
              fill: P
            };
          }.call(
            this,
            "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
          );
        },
        {}
      ],
      6: [
        function (t, n, e) {
          !function (e) {
            var m = t(5),
              v = { collectWindowErrors: !0, debug: !1 },
              _ = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
              b = [].slice,
              y = "?",
              w = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
            function x() {
              return "undefined" == typeof document || null == document.location ? "" : document.location.href;
            }
            (v.report = (function e() {
              var o = [],
                a = null,
                i = null,
                c = null,
                f,
                t;
              function n(e) {
                u(), o.push(e);
              }
              function r(e) {
                for (var t = o.length - 1; 0 <= t; --t) o[t] === e && o.splice(t, 1);
              }
              function s() {
                p(), (o = []);
              }
              function d(e, t) {
                var n = null;
                if (!t || v.collectWindowErrors) {
                  for (var r in o)
                    if (o.hasOwnProperty(r))
                      try {
                        o[r].apply(null, [e].concat(b.call(arguments, 2)));
                      } catch (e) {
                        n = e;
                      }
                  if (n) throw n;
                }
              }
              function l(e, t, n, r, o) {
                var a = null,
                  i,
                  s,
                  l,
                  u,
                  u;
                return (
                  c
                    ? (v.computeStackTrace.augmentStackTraceWithInitialElement(c, t, n, e), g())
                    : o && m.isError(o)
                    ? d((a = v.computeStackTrace(o)), !0)
                    : ((i = { url: t, line: n, column: r }),
                      (s = void 0),
                      "[object String]" === {}.toString.call((l = e)) && (u = e.match(w)) && ((s = u[1]), (l = u[2])),
                      (i.func = y),
                      d((a = { name: s, message: l, url: x(), stack: [i] }), !0)),
                  !!f && f.apply(this, arguments)
                );
              }
              function u() {
                t || ((f = _.onerror), (_.onerror = l), (t = !0));
              }
              function p() {
                t && ((_.onerror = f), (t = !1), (f = void 0));
              }
              function g() {
                var e = c,
                  t = a;
                (i = c = a = null), d.apply(null, [e, !1].concat(t));
              }
              function h(e, t) {
                var n = b.call(arguments, 1);
                if (c) {
                  if (i === e) return;
                  g();
                }
                var r = v.computeStackTrace(e);
                if (
                  ((c = r),
                  (i = e),
                  (a = n),
                  setTimeout(
                    function () {
                      i === e && g();
                    },
                    r.incomplete ? 2e3 : 0
                  ),
                  !1 !== t)
                )
                  throw e;
              }
              return (h.subscribe = n), (h.unsubscribe = r), (h.uninstall = s), h;
            })()),
              (v.computeStackTrace = (function e() {
                function r(e) {
                  if (void 0 !== e.stack && e.stack) {
                    for (
                      var t =
                          /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                        n =
                          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                        r = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                        o = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                        a = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                        i = e.stack.split("\n"),
                        s = [],
                        l,
                        u,
                        c,
                        f = /^(.*) is undefined$/.exec(e.message),
                        d = 0,
                        p = i.length,
                        g;
                      d < p;
                      ++d
                    ) {
                      if ((u = t.exec(i[d]))) {
                        var c = u[2] && 0 === u[2].indexOf("native"),
                          g;
                        (g = u[2] && 0 === u[2].indexOf("eval")) && (l = a.exec(u[2])) && ((u[2] = l[1]), (u[3] = l[2]), (u[4] = l[3])),
                          (c = {
                            url: c ? null : u[2],
                            func: u[1] || y,
                            args: c ? [u[2]] : [],
                            line: u[3] ? +u[3] : null,
                            column: u[4] ? +u[4] : null
                          });
                      } else if ((u = r.exec(i[d]))) c = { url: u[2], func: u[1] || y, args: [], line: +u[3], column: u[4] ? +u[4] : null };
                      else {
                        if (!(u = n.exec(i[d]))) continue;
                        (g = u[3] && -1 < u[3].indexOf(" > eval")) && (l = o.exec(u[3]))
                          ? ((u[3] = l[1]), (u[4] = l[2]), (u[5] = null))
                          : 0 !== d || u[5] || void 0 === e.columnNumber || (s[0].column = e.columnNumber + 1),
                          (c = {
                            url: u[3],
                            func: u[1] || y,
                            args: u[2] ? u[2].split(",") : [],
                            line: u[4] ? +u[4] : null,
                            column: u[5] ? +u[5] : null
                          });
                      }
                      !c.func && c.line && (c.func = y), s.push(c);
                    }
                    return s.length ? { name: e.name, message: e.message, url: x(), stack: s } : null;
                  }
                }
                function c(e, t, n, r) {
                  var t = { url: t, line: n };
                  if (t.url && t.line) {
                    if (((e.incomplete = !1), t.func || (t.func = y), 0 < e.stack.length && e.stack[0].url === t.url)) {
                      if (e.stack[0].line === t.line) return !1;
                      if (!e.stack[0].line && e.stack[0].func === t.func) return (e.stack[0].line = t.line), !1;
                    }
                    return e.stack.unshift(t), (e.partial = !0);
                  }
                  return !(e.incomplete = !0);
                }
                function f(e, t) {
                  for (
                    var n = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
                      r = [],
                      o = {},
                      a = !1,
                      i,
                      s,
                      l,
                      u = f.caller;
                    u && !a;
                    u = u.caller
                  )
                    if (u !== d && u !== v.report) {
                      if (
                        ((s = { url: null, func: y, line: null, column: null }),
                        u.name ? (s.func = u.name) : (i = n.exec(u.toString())) && (s.func = i[1]),
                        void 0 === s.func)
                      )
                        try {
                          s.func = i.input.substring(0, i.input.indexOf("{"));
                        } catch (e) {}
                      o["" + u] ? (a = !0) : (o["" + u] = !0), r.push(s);
                    }
                  t && r.splice(0, t);
                  var t = { name: e.name, message: e.message, url: x(), stack: r };
                  return c(t, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), t;
                }
                function d(e, t) {
                  var n = null;
                  t = null == t ? 0 : +t;
                  try {
                    if ((n = r(e))) return n;
                  } catch (e) {
                    if (v.debug) throw e;
                  }
                  try {
                    if ((n = f(e, t + 1))) return n;
                  } catch (e) {
                    if (v.debug) throw e;
                  }
                  return { name: e.name, message: e.message, url: x() };
                }
                return (d.augmentStackTraceWithInitialElement = c), (d.computeStackTraceFromStackProp = r), d;
              })()),
              (n.exports = v);
          }.call(
            this,
            "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
          );
        },
        { 5: 5 }
      ],
      7: [
        function (e, t, n) {
          function s(e, t) {
            for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
            return -1;
          }
          function r(e, t, n, r) {
            return JSON.stringify(e, o(t, r), n);
          }
          function l(e) {
            var t = { stack: e.stack, message: e.message, name: e.name },
              n;
            for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t;
          }
          function o(r, o) {
            var a = [],
              i = [];
            return (
              null == o &&
                (o = function (e, t) {
                  return a[0] === t ? "[Circular ~]" : "[Circular ~." + i.slice(0, s(a, t)).join(".") + "]";
                }),
              function (e, t) {
                var n;
                return (
                  0 < a.length
                    ? (~(n = s(a, this)) ? a.splice(n + 1) : a.push(this),
                      ~n ? i.splice(n, 1 / 0, e) : i.push(e),
                      ~s(a, t) && (t = o.call(this, e, t)))
                    : a.push(t),
                  null == r ? (t instanceof Error ? l(t) : t) : r.call(this, e, t)
                );
              }
            );
          }
          (n = t.exports = r).getSerialize = o;
        },
        {}
      ]
    },
    {},
    [4]
  )(4);
}),
  (LPRavenSanitize = (function () {
    var n =
        /(([^<>()\[\]\\.,;:\s@"']+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
      t =
        /(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3})|(?:((?:[0-9a-fA-F]{1,4}:){7}(?:[0-9a-fA-F]{1,4}|:)|(?:[0-9a-fA-F]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[0-9a-fA-F]{1,4}|:)|(?:[0-9a-fA-F]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,2}|:)|(?:[0-9a-fA-F]{1,4}:){4}(?:(:[0-9a-fA-F]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,3}|:)|(?:[0-9a-fA-F]{1,4}:){3}(?:(:[0-9a-fA-F]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,4}|:)|(?:[0-9a-fA-F]{1,4}:){2}(?:(:[0-9a-fA-F]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,5}|:)|(?:[0-9a-fA-F]{1,4}:){1}(?:(:[0-9a-fA-F]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,6}|:)|(?::((?::[0-9a-fA-F]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[0-9a-fA-F]{1,4}){1,7}|:)))(%[0-9a-zA-Z]{1,})?)/,
      o = /^(?:(https?|ftp):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(?:[\/\w \.-]*)/i,
      a = function (e) {
        var t;
        return u.replaceEmail && (t = n.exec(e)) && t.length ? "[[*@*." + t.pop() + "]]" : e;
      },
      i = function (e) {
        return u.replaceIp && t.test(e) ? (-1 < e.indexOf(".") ? "[[ipv4 address]]" : "[[ipv6 address]]") : e;
      },
      s = function (e) {
        var t, n, r, t;
        return !u.replaceUrl || !(t = o.exec(e)) || !t.length || ((n = t[1]), (r = t[2]), (t = t[3]), -1 < r.indexOf("lastpass"))
          ? e
          : "[[" + (n || "") + r + "." + t + "]]";
      },
      l = { culprit: !0, stacktrace: !0 },
      u = { replaceUrl: !0, replaceEmail: !0, replaceIp: !0 },
      c = function (n) {
        var r = {};
        return (
          Object.keys(n).forEach(function (e) {
            var t, t;
            (r[e] = void 0),
              n[e] &&
                (l[e]
                  ? (r[e] = n[e])
                  : Array.isArray(n[e])
                  ? (r[e] = n[e].map(c))
                  : "object" == typeof n[e]
                  ? (r[e] = c(n[e]))
                  : "string" == typeof n[e] && ((t = n[e]), (t = a(t)), (t = i(t)), (t = s(t)), (r[e] = t)));
          }),
          r
        );
      };
    return { config: u, sanitize: c };
  })()),
  (function (t) {
    (t.setWebClientPopoverSize = function (e, t) {
      var n = parent.document.getElementById("popover-iframe");
      n && ((n.style.height = e + "px"), (n.style.width = t + "px"));
    }),
      (t.getExtensionDropdownDelay = function () {
        return -1;
      }),
      (t.closePopup = function (e) {
        (e || (0 === Dialog.prototype.getDialogCount() && 0 === LPDialog.getPendingCount())) && t.doClosePopup();
      }),
      (t.doClosePopup = function () {
        parent.close();
      }),
      (t.closeTab = function () {
        window.close();
      }),
      (t.updateProductPrice = function (e, t, n) {
        bg.LPPlatform.updateProductPrice(e, t, n);
      }),
      (t.move = function () {}),
      (t.checkBrowserPasswordManager = function (e) {}),
      (t.setupDropdownImportMenu = function (e) {
        $("#importMenuItemMain")
          .unbind("click")
          .bind("click", function (e) {
            bg.lpevent("m_i"), bg.openimport("ext_dropdown");
          }),
          $("#omarImportMenuItemMain")
            .unbind("click")
            .bind("click", function (e) {
              bg.lpevent("m_i"), bg.openimport("ext_dropdown");
            });
      }),
      (t.getUnavailablePreferences = function () {
        return {
          openpopoverHk: !t.canBackgroundOpenPopover(),
          pollServerVal: bg.get("g_nopoll"),
          storeLostOTP: "0" === bg.get("g_prefoverrides").account_recovery,
          showvault: bg.get("g_hidevault") || bg.get("g_hideshowvault"),
          homeHk: bg.get("g_hidevault") || bg.get("g_hideshowvault"),
          saveallHk: bg.get("g_hidesaedhotkey"),
          searchHk: bg.get("g_hidesearch"),
          usepopupfill: !bg.get("g_offer_popupfill"),
          recentUsedCount: bg.get("g_hiderecentlyusedlistsize"),
          searchNotes: bg.get("g_hidenotes"),
          enablenamedpipes:
            bg.get("lppassusernamehash") || !(bg.get("g_is_win") || bg.get("g_is_mac") || bg.get("g_is_linux")) || bg.is_chrome_portable(),
          enablenewlogin: !0
        };
      }),
      (t.getPreferencesRequiringBinary = function () {
        return { enablenamedpipes: !0 };
      }),
      (t.handlePreferenceChanges = function (e) {
        !1 === e.storeLostOTP && bg.DeleteOTP();
      }),
      (t.resizeTo = function (e, t) {
        window.resizeTo(e, t);
      }),
      (t.openCreateAccount = function () {
        bg.LPPlatform.openTabDialog("createAccount");
      }),
      (t.showIntroTutorial = function () {
        var e = bg.get("LPContentScriptFeatures"),
          e;
        LPProxy.isFamilyUser() || (e && "vault" !== e.intro_tutorial_version) || "US" !== bg.get("countryfromip")
          ? t.openTour()
          : 0 === (e = LPProxy.getModelCount())
          ? LPProxy.getPreference("showIntroTutorial", !0)
            ? dialogs.introTutorialWelcome.open()
            : t.openTour()
          : 1 === e &&
            bg.IntroTutorial.getState(function (e) {
              e.enabled
                ? (Topics.get(Topics.EXPAND_ALL).publish(), dialogs.introTutorialComplete.open({ tutorialState: e }))
                : t.openTour();
            });
      }),
      (t.onLoad = function (e, t) {
        "loading" === e.document.readyState ? e.addEventListener("DOMContentLoaded", t) : t();
      }),
      (t.installBinary = function (e, t) {
        bg.install_binary(e, t);
      }),
      (t.requestNativeMessaging = function (e) {
        bg.request_native_messaging(e);
      }),
      (t.isElectron = function () {
        return -1 < navigator.userAgent.indexOf("Electron") && "LastpassApp" in (top || window);
      });
  })(
    (LPPlatform = {
      openAcctsIframe: function (e, t) {
        var n = -1 !== document.location.href.indexOf("vault.php"),
          r = ((e.webvault = n ? "1" : "0"), LPTools.createElement("iframe", "acctsiframe"));
        (r.src = n ? "iframe.php" : LPPlatform.getResourcePath("iframe.html")),
          LPPlatform.addEventListener(r, "load", function () {
            r.contentWindow.goTo(LPProxy.getBaseURL() + "acctsiframe.php?" + $.param(e), t), LPTools.addClass(r, "loaded");
          }),
          document.body.appendChild(r),
          bg.onSettingsIframeClose(function () {
            try {
              document.body.removeChild(r);
            } catch (e) {
              LPPlatform.logException(e);
            }
          });
      },
      shouldShowVaultLoginButton: function () {
        return !0;
      },
      lpIsExtension: function () {
        return !0;
      },
      openURL: function (e) {
        bg.openURL(e);
      },
      getBaseURL: function () {
        return bg.get("base_url");
      },
      doAjax: function (e) {
        $.ajax(e);
      },
      ajax: function (e) {
        if (!bg.isOffline()) return LPPlatform.doAjax(e);
        e.error && e.error(null, null, "offline");
      },
      getOpenGroups: function () {
        var e;
        if (null === (e = bg.localStorage_getItem(bg.db_prepend(bg.get("g_username_hash") + ".savedtree")))) return null;
        for (var t = {}, e, n = 0, r = (e = LPProxy.decrypt(e).split(",")).length; n < r; ++n) {
          var o = e[n];
          t[(o = 0 === o.indexOf("_") ? o.substring(1) : o)] = !0;
        }
        return t;
      },
      setOpenGroups: function (e) {
        for (var t = 0, n = e.length; t < n; ++t) e[t] = "_" + e[t];
        var r = LPProxy.encrypt(e.join(","));
        bg.localStorage_setItem(bg.db_prepend(bg.get("g_username_hash") + ".savedtree"), r);
      },
      initialized: function () {
        return !0;
      },
      getHTML: function (e, t) {
        $.ajax({ url: e, success: t, dataType: "text" });
      },
      productType: { Premium: "Premium", Families: "Families" },
      isValidProductType: function (e) {
        return -1 < Object.values(LPPlatform.productType).indexOf(e);
      },
      updateProductPrice: function (e, n, t) {
        var r, o, a, i;
        LPPlatform.isValidProductType(e)
          ? ((r = function (e, t) {
              "function" == typeof n && n(e, t);
            }),
            "function" == typeof (o = bg.LPPlatform.updateProductPrice)
              ? o(e, r, t)
              : r(Strings.translateString("Local price"), Strings.translateString("Local currency")))
          : "function" == typeof t && t("Invalid 'productType' given");
      },
      purchasePremium: function (e) {
        switch (e) {
          case LPPlatform.productType.Premium:
            window.open(LPProxy.getBaseURL() + "premium/payment", "_blank");
            break;
          case LPPlatform.productType.Families:
            window.open(LPProxy.getBaseURL() + "families/payment", "_blank");
        }
      },
      hasBinary: function () {
        return bg.have_binary();
      },
      setupAddAttachmentButton: function (t, n) {
        var r = Strings.translateString("Your out-of-date browser won't let you do that! Switch to a modern browser and try again.");
        t.click(function (e) {
          e.stopImmediatePropagation(), t.find("#addAttachmentFileField").trigger("click");
        }),
          t
            .find("#addAttachmentFileField")
            .unbind("click.sendTrackingEvent")
            .bind("click.sendTrackingEvent", function (e) {
              e.stopImmediatePropagation(),
                bg.sendLpImprove("add_attachment_clicked", {
                  source: LPPlatform.lpIsExtension() ? "extension" : "webvault",
                  usingbinary: "0"
                });
            })
            .unbind("change.selectAttachmentFile")
            .bind("change.selectAttachmentFile", function (e) {
              bg.get("g_isedge") || bg.get("g_isie") ? ((e.target.value = ""), n(r)) : LPPlatform.handleSelectedAttachmentFile(e, n);
            });
      },
      handleSelectedAttachmentFile: function (n, r) {
        var o;
        void 0 !== n.target.files && n.target.files.length
          ? ((o = n.target.files[0]),
            LPPlatform.readFile(o, function (e, t) {
              var e;
              e ? ((n.target.value = ""), r(e)) : ((e = btoa(bg.ab2bin(t))), (n.target.value = ""), r(null, o.name, e));
            }))
          : r();
      },
      readFile: function (o, a) {
        var t = new FileReader(),
          i = Strings.translateString(
            "Something went wrong while reading the selected file. Confirm that the file exists and isn't corrupted and that you have permission to view it."
          );
        (t.onload = function (e) {
          var t, n, r, t;
          void 0 === e.target.result
            ? (LPPlatform.logError("Failed reading attachment, onload handler received empty result. uid=" + bg.get("g_uid")), a(i))
            : ((t = LPPlatform.validateFileName(o.name)),
              (n = LPPlatform.validateFileType(o.name)),
              (r = LPPlatform.validateFileSize(o.size)),
              a((t = t || n || r || null), t ? null : e.target.result));
        }),
          (t.onerror = function (e) {
            var e = e.target.error;
            t.readyState === FileReader.LOADING && t.abort(),
              LPPlatform.logError(
                "Failed reading attachment, error caught in onerror handler. uid=" +
                  bg.get("g_uid") +
                  " error=" +
                  e.name +
                  " message=" +
                  e.message
              ),
              a(i);
          }),
          t.readAsArrayBuffer(o);
      },
      validateFileName: function (e) {
        var t;
        if (bg.check_filename_badchars(e) !== bg.get("FILENAME_FRAGMENT_VALID"))
          return Strings.translateString(
            "File name contains special characters. Rename the file using only letters and numbers and try again."
          );
      },
      validateFileType: function (e) {
        var t;
        if (!bg.isAllowedFileExtension(e)) return bg.getInvalidFileExtensionMessageStrings();
      },
      validateFileSize: function (e) {
        var t;
        if (10485760 < e) return Strings.translateString("File is too big. Try again with a file smaller than 10MB.");
      },
      downloadAttachment: function (t) {
        var n, e, r, o;
        bg.get("g_isedge") || bg.get("g_isie")
          ? dialogs.alert.open({
              title: Strings.Vault.ERROR,
              text: Strings.translateString("Your out-of-date browser won't let you do that! Switch to a modern browser and try again.")
            })
          : (n = t.getStorageKey())
          ? ((r = (e = t.getParentNote()).getID()),
            (o = e.getAttachmentKey()),
            e.debugAttachmentKey("attachment_key_downloading", n, null),
            dialogs.note.getDialog().showInProcessOverlay(),
            bg.LPPlatform.downloadAttachment(n, o, r, function (e) {
              dialogs.note.getDialog().hideInProcessOverlay(),
                e
                  ? LPPlatform.openAttachment(t.getName(), e, n)
                  : dialogs.alert.open({
                      title: Strings.Vault.ERROR,
                      text: Strings.translateString(
                        "We couldn't download your attachment. If the problem persists, contact LastPass support."
                      )
                    });
            }))
          : dialogs.alert.open({
              title: Strings.Vault.ERROR,
              text: Strings.translateString("Save the item first to open the attachment.")
            });
      },
      openAttachment: function (e, t, n) {
        var t = bg.bin2ab(atob(t)),
          t = new Blob([t]),
          t = URL.createObjectURL(t),
          r;
        LPTools.createElement("a", { href: t, download: e }).click(),
          bg.sendLpImprove("attachment_downloaded", { source: LPPlatform.lpIsExtension() ? "extension" : "webvault", usingbinary: "0" });
      },
      logException: function (e) {
        var t = "string" == typeof e ? e : e.message;
        e.stack && (t += "\n" + e.stack), self.Raven && self.Raven.captureException(e), LPPlatform.logError(t);
      },
      logError: function (e) {
        e = "Page: " + window.location.href + " Error: " + e;
        try {
          console.error(e), logger.info("VAULT_4_0: " + e, { vault: "VAULT_4_0", message: e });
        } catch (e) {}
      },
      addEventListener: function (e) {
        if (e) {
          for (var t = [], n = 1; n < arguments.length; ++n) t.push(arguments[n]);
          e.addEventListener.apply(e, t);
        }
      },
      removeEventListener: function (e) {
        for (var t = [], n = 1; n < arguments.length; ++n) t.push(arguments[n]);
        e.removeEventListener.apply(e, t);
      },
      canBackgroundOpenPopover: function () {
        return !0;
      },
      generateSharingKeys: function (e) {
        bg.generateSharingKeys(e);
      },
      getResourcePath: function (e) {
        return e;
      },
      canPreventBlur: function () {
        return !0;
      },
      getBackgroundData: function (e) {
        return e;
      },
      showIntroTutorial: function () {
        LPPlatform.openTour();
      },
      setIntroTutorialDisable: function (e) {
        return !1;
      },
      supportsBinary: function () {
        return !0;
      },
      openKeyboard: function () {
        bg.LPPlatform.openTabDialog("login", { virtualKeyboard: !0 });
      },
      getImportHandler: function () {
        return "importerHandler";
      },
      showDownloader: function () {
        return !1;
      },
      openTour: function (e, t) {
        LPRequire.requireJS(
          [
            "lpPing",
            "lpTag",
            "Tour/lpPingManager",
            "Tour/lpTagManager",
            "Tour/introTourShade",
            "Tour/introTourPreferences",
            "Tour/FamilyOnboarding/familyOnboardingTour",
            "Tour/OmarMigrationTour/omarMigrationTour",
            "Tour/OmarVaultTour/omarVaultTour",
            "Tour/Vault41Tour/vault41Tour",
            "Tour/introTourData",
            "Tour/introTourFlow",
            "Tour/introTourQueue",
            "Tour/introTour"
          ],
          function () {
            IntroTour && IntroTour.start(e, t);
          }
        );
      },
      allowClipboardCopy: function () {
        return LPFeatures.allowClipboardCopy();
      },
      getVersion: function () {
        return bg.get("lpversion");
      },
      installBinary: function (e, t) {
        bg.install_binary(e, t);
      },
      requestNativeMessaging: function (e) {
        bg.request_native_messaging(e);
      },
      copyToClipboard: function (e) {
        bg.LPPlatform.copyToClipboard(e);
      }
    })
  );
