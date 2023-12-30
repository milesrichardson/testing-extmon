(function (a) {
  var l = {};
  function o(s) {
    if (l[s]) return l[s].exports;
    var u = (l[s] = { exports: {}, id: s, loaded: !1 });
    a[s].call(u.exports, u, u.exports, o);
    u.loaded = !0;
    return u.exports;
  }
  o.m = a;
  o.c = l;
  o.p = "";
  return o(0);
})([
  function (a, o, l) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 });
    var u = l(1),
      d = l(26),
      c = l(13),
      f = "meetNowContainer";
    u.default.onExtensionSessionStarted(origin);
    (function () {
      if (null !== localStorage.getItem(u.default.migrationKey)) {
        return;
      }
      sessionStorage.removeItem("sxt-user");
      ["sxt-profile-lastLog", "sxt-ecs", "skype_version", "sxt-fingerprint", "sxt-heartbeat-time"].forEach(function (S) {
        return localStorage.removeItem(S);
      });
      localStorage.setItem(u.default.migrationKey, new Date().toString());
    })();
    var y = u.default.getSkypeToken(origin),
      m = u.default.getEcsAsync(origin);
    document.onreadystatechange = function () {
      if ("complete" === document.readyState) {
        var h = document.getElementById("initialSpinner");
        (0, c.raceTimer)(Promise.allSettled([m, y]), u.default.silentLoginTimeout)
          .then(function (P) {
            var v, T, _, L, S;
            if (h) {
              h.style.display = "none";
            }
            var I = null === (v = P[1]) || void 0 === v ? void 0 : v.value;
            u.default.onSilentLoginCompleted(!!I);
            if (!!I) {
            }
            var C = null === (T = P[0]) || void 0 === T ? void 0 : T.value,
              w = void 0,
              N = void 0,
              A = C && !C.meetNowWidgetInfo;
            if (null !== (_ = null === C || void 0 === C ? void 0 : C.meetNowWidgetInfo) && void 0 !== _ ? _ : !1) {
              w = null === (L = null === C || void 0 === C ? void 0 : C.meetNowWidgetInfo) || void 0 === L ? void 0 : L.blobPath;
              N = null === (S = null === C || void 0 === C ? void 0 : C.meetNowWidgetInfo) || void 0 === S ? void 0 : S.version;
            } else if (A) {
            }
            (0, d.bootstrapMeetNowWidget)({
              meetNowWidgetBlobPath: null !== w && void 0 !== w ? w : u.default.defaultMeetNowWidgetBlobPath,
              meetNowWidgetVersion: null !== N && void 0 !== N ? N : u.default.defaultMeetNowWidgetVersion,
              meetNowWidgetContainerId: f,
              skypeToken: I
            });
          })
          .catch(function () {
            if (h) {
              h.style.display = "none";
            }
            (0, d.bootstrapMeetNowWidget)({
              meetNowWidgetBlobPath: u.default.defaultMeetNowWidgetBlobPath,
              meetNowWidgetVersion: u.default.defaultMeetNowWidgetVersion,
              meetNowWidgetContainerId: f
            });
          });
      }
    };
    window.addEventListener("pagehide", function () {
      u.default.onExtensionSessionEnded(origin);
    });
  },
  function (a, o, l) {
    "use strict";
    var u = (function () {
      function b(T, _) {
        for (var L = 0, S; L < _.length; L++) {
          S = _[L];
          S.enumerable = S.enumerable || !1;
          S.configurable = !0;
          if ("value" in S) S.writable = !0;
          Object.defineProperty(T, S.key, S);
        }
      }
      return function (T, _, L) {
        if (_) b(T.prototype, _);
        if (L) b(T, L);
        return T;
      };
    })();
    function s(b, T) {
      if (!(b instanceof T)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var d = l(2),
      c = l(3),
      g = l(7),
      f = l(14),
      y = l(23),
      m = l(24),
      h = l(25),
      v = (function () {
        function b() {
          s(this, b);
        }
        u(b, null, [
          {
            key: "onExtensionSessionStarted",
            value: function (_) {
              try {
                if (this.sessionInProgress) {
                  this.onExtensionSessionEnded(_);
                }
                this.sessionStartedTimestamp = new Date();
                this.sessionInProgress = !0;
                var L = new m.SessionStartedTelemetryEvent();
                L.origin = _;
                this.ariaPublisher.sendEvent(L);
              } catch (S) {}
            }
          },
          {
            key: "onExtensionSessionEnded",
            value: function (_) {
              try {
                var L;
                this.sessionInProgress = !1;
                if (this.sessionStartedTimestamp) {
                  var S = new Date();
                  L = this.sessionStartedTimestamp.valueOf() - S.valueOf();
                }
                var E = new h.SessionEndedTelemetryEvent();
                E.origin = _;
                if (L) {
                  E.sessionDurationInMs = L;
                }
                this.ariaPublisher.sendEvent(E);
              } catch (I) {}
            }
          },
          {
            key: "onSilentLoginCompleted",
            value: function (_) {
              this.isGuest = _;
            }
          },
          {
            key: "getSkypeToken",
            value: function (_) {
              return f.default.getSkypeToken(_, this.ariaPublisher);
            }
          },
          {
            key: "getEcsAsync",
            value: function () {
              var L = this;
              return new Promise(function (S) {
                if (L.ecs) {
                  S(L.ecs);
                } else {
                  c.default.fetchConfigAsync({ queryParams: { configOption: "PROD" } }).then(function (I) {
                    L.ecs = I;
                    I.featureFlags = I.featureFlags || {};
                    L.ecs = I;
                    L.scheduleEcsUpdate();
                    L.logEcsFetchedAriaEvent();
                    S(L.ecs);
                  });
                }
              });
            }
          },
          {
            key: "scheduleEcsUpdate",
            value: function () {
              var _ = this;
              if (this.ecs.ecsUpdateInMinutes) {
                var L = this.ecs.ecsUpdateInMinutes + Math.floor(10 * Math.random()) + 1;
                setTimeout(
                  function () {
                    return _.getEcsAsync("CTX_SCHEDULE");
                  },
                  1e3 * (60 * L)
                );
              }
            }
          },
          {
            key: "logEcsFetchedAriaEvent",
            value: function () {
              var _ = new y.EcsFetchTelemetryEvent();
              _.origin = origin;
              this.ariaPublisher.sendEvent(_);
            }
          },
          {
            key: "isGuestUser",
            get: function () {
              return this.isGuest;
            }
          }
        ]);
        return b;
      })();
    o.default = v;
    v.sessionInProgress = !1;
    v.ariaPublisher = new g.AriaPublisher();
    v.isGuest = !0;
    v.sessionId = d.default.create();
    v.defaultMeetNowWidgetBlobPath = "https://secure.skypeassets.com/apollo/0.0.0/meetnowwidget/";
    v.defaultMeetNowWidgetVersion = "1.0.150";
    v.origin = "MEET_NOW_WIDGET";
    v.silentLoginTimeout = 2e3;
    v.migrationKey = "sxt-migrated-to-meet-now-widget-integration";
  },
  function (a, o) {
    "use strict";
    var s = (function () {
      function d(c, g) {
        for (var f = 0, y; f < g.length; f++) {
          y = g[f];
          y.enumerable = y.enumerable || !1;
          y.configurable = !0;
          if ("value" in y) y.writable = !0;
          Object.defineProperty(c, y.key, y);
        }
      }
      return function (c, g, f) {
        if (g) d(c.prototype, g);
        if (f) d(c, f);
        return c;
      };
    })();
    function l(d, c) {
      if (!(d instanceof c)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var u = (function () {
      function d() {
        l(this, d);
      }
      s(d, null, [
        {
          key: "create",
          value: function () {
            for (var g = Array(8), f = 0, y; f < g.length; f += 2) {
              y = Math.floor(4294967296 * Math.random());
              g[f] = this.formatAsHex(65535 & y);
              g[f + 1] = this.formatAsHex(y >>> 16);
              if (3 == f + 1) {
                g[f + 1] = "4" + g[f + 1].substring(1);
              }
            }
            return g[0] + g[1] + "-" + g[2] + "-" + g[3] + "-" + g[4] + "-" + g[5] + g[6] + g[7];
          }
        },
        {
          key: "formatAsHex",
          value: function (g) {
            for (var f = g.toString(16), y = 4 - f.length, m = 0; m < y; m++) {
              f = "0" + f;
            }
            return f;
          }
        }
      ]);
      return d;
    })();
    o.default = u;
  },
  function (a, o, l) {
    "use strict";
    var u = (function () {
      function f(y, m) {
        for (var h = 0, P; h < m.length; h++) {
          P = m[h];
          P.enumerable = P.enumerable || !1;
          P.configurable = !0;
          if ("value" in P) P.writable = !0;
          Object.defineProperty(y, P.key, P);
        }
      }
      return function (y, m, h) {
        if (m) f(y.prototype, m);
        if (h) f(y, h);
        return y;
      };
    })();
    function s(f, y) {
      if (!(f instanceof y)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var d = l(4),
      c = l(5),
      g = (function () {
        function f() {
          s(this, f);
        }
        u(f, null, [
          {
            key: "fetchConfigAsync",
            value: function (m) {
              var h = this,
                v = "skype/1.00/skypext" + this.buildQueryString(m);
              this.urls = ["https://a.config.skype.com", "https://b.config.skype.com"].map(function (b) {
                return encodeURI(b) + "/config/v1/" + v;
              });
              return new Promise(function (b, T) {
                h.timeoutAwareFetchAsync(h.urls[0])
                  .then(function (_) {
                    d.default.getWindow().localStorage.setItem(h.CONFIG_CACHE_KEY, JSON.stringify(_));
                    b(_);
                  })
                  .catch(function () {
                    h.timeoutAwareFetchAsync(h.urls[1])
                      .then(function (L) {
                        d.default.getWindow().localStorage.setItem(h.CONFIG_CACHE_KEY, JSON.stringify(L));
                        b(L);
                      })
                      .catch(function () {
                        try {
                          var S = localStorage.getItem(h.CONFIG_CACHE_KEY);
                          if (S) {
                            b(JSON.parse(S));
                          }
                        } catch (E) {
                          T("Configuration service is unreachable and no valid cached config is available: " + E);
                        }
                      });
                  });
              });
            }
          },
          {
            key: "timeoutAwareFetchAsync",
            value: function (m) {
              return new Promise(function (h, P) {
                var v = void 0,
                  b = new Promise(function (_, L) {
                    v = setTimeout(function () {
                      return L(new Error("request timeout"));
                    }, 7500);
                  }),
                  T = new Promise(function (_, L) {
                    c.default
                      .getConfigAsync(m)
                      .then(function (S) {
                        clearTimeout(v);
                        _(S);
                      })
                      .catch(function (S) {
                        L(S);
                      });
                  });
                Promise.race([b, T])
                  .then(function (_) {
                    h(_);
                  })
                  .catch(function (_) {
                    P(_);
                  });
              });
            }
          },
          {
            key: "buildQueryString",
            value: function (m) {
              var h = [],
                P = m.queryParams || {};
              if (m.userId) {
                h.push("id=" + encodeURIComponent(m.userId));
              }
              if (m.clientId) {
                h.push("clientId=" + encodeURIComponent(m.clientId));
              }
              Object.keys(P)
                .sort()
                .forEach(function (v) {
                  h.push([encodeURIComponent(v), encodeURIComponent(P[v])].join("="));
                });
              return 0 === h.length ? "" : "?" + h.join("&");
            }
          }
        ]);
        return f;
      })();
    o.default = g;
    g.CONFIG_CACHE_KEY = "sxt-ecs";
  },
  function (a, o) {
    "use strict";
    var s = (function () {
      function d(c, g) {
        for (var f = 0, y; f < g.length; f++) {
          y = g[f];
          y.enumerable = y.enumerable || !1;
          y.configurable = !0;
          if ("value" in y) y.writable = !0;
          Object.defineProperty(c, y.key, y);
        }
      }
      return function (c, g, f) {
        if (g) d(c.prototype, g);
        if (f) d(c, f);
        return c;
      };
    })();
    function l(d, c) {
      if (!(d instanceof c)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var u = (function () {
      function d() {
        l(this, d);
      }
      s(d, null, [
        {
          key: "getWindow",
          value: function () {
            return window;
          }
        },
        {
          key: "getDocument",
          value: function () {
            return window.document;
          }
        }
      ]);
      return d;
    })();
    o.default = u;
  },
  function (a, o, l) {
    "use strict";
    var u = (function () {
      function g(f, y) {
        for (var m = 0, h; m < y.length; m++) {
          h = y[m];
          h.enumerable = h.enumerable || !1;
          h.configurable = !0;
          if ("value" in h) h.writable = !0;
          Object.defineProperty(f, h.key, h);
        }
      }
      return function (f, y, m) {
        if (y) g(f.prototype, y);
        if (m) g(f, m);
        return f;
      };
    })();
    function s(g, f) {
      if (!(g instanceof f)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var d = l(6),
      c = (function () {
        function g() {
          s(this, g);
        }
        u(g, null, [
          {
            key: "getConfigAsync",
            value: function (y) {
              return new Promise(function (m, h) {
                if (sessionStorage.getItem("sxt_ecs_jsonp")) {
                  d.fetch(y)
                    .then(function (P) {
                      m(P);
                    })
                    .catch(function (P) {
                      return h(P);
                    });
                } else {
                  fetch(y)
                    .then(function (P) {
                      P.json().then(function (v) {
                        return m(v);
                      });
                    })
                    .catch(function (P) {
                      h(P);
                    });
                }
              });
            }
          }
        ]);
        return g;
      })();
    o.default = c;
  },
  function (a, o, l) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.fetch = void 0;
    var y = l(4);
    o.fetch = function (h) {
      return new Promise(function (P, v) {
        try {
          var b =
            h +
            (/\?/.test(h) ? "&" : "?") +
            "callback=" +
            u(function (T) {
              return P(T);
            }, "skype_sxt_ecs_callback");
          f(b, function () {
            return v();
          });
        } catch (T) {
          v(T);
        }
      });
    };
    function u(h, P) {
      var v = y.default.getWindow();
      if (P) {
        return c(h, P, v);
      } else {
        return d(h, v);
      }
    }
    function d(h, P) {
      var v;
      do {
        v = (Math.random().toString(36) + "00000000000000000").slice(2, 12);
      } while (v in P);
      P[v] = h;
      return v;
    }
    function c(h, P, v) {
      var b = P.split("."),
        T = g(b.slice(0, -1), v),
        _ = b.pop();
      if (!_) {
        throw Error("Invalid name:" + P);
      }
      T[_] = h;
      return P;
    }
    function g(h, P) {
      var v = P;
      h.forEach(function (b) {
        if (!(b in v)) {
          v[b] = {};
        }
        v = v[b];
      });
      return v;
    }
    function f(h, P) {
      var v = y.default.getDocument(),
        b = v.createElement("script");
      b.src = h;
      b.type = "text/javascript";
      b.async = !0;
      b.onerror = P;
      v.getElementsByTagName("head")[0].appendChild(b);
    }
  },
  function (a, o, l) {
    "use strict";
    var u = (function () {
      function v(b, T) {
        for (var _ = 0, L; _ < T.length; _++) {
          L = T[_];
          L.enumerable = L.enumerable || !1;
          L.configurable = !0;
          if ("value" in L) L.writable = !0;
          Object.defineProperty(b, L.key, L);
        }
      }
      return function (b, T, _) {
        if (T) v(b.prototype, T);
        if (_) v(b, _);
        return b;
      };
    })();
    function s(v, b) {
      if (!(v instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.AriaPublisher = void 0;
    var d = l(8),
      c = l(2),
      g = l(9),
      f = l(10),
      y = l(11),
      m = l(1),
      h = l(12),
      P = (function () {
        function v() {
          s(this, v);
        }
        u(v, [
          {
            key: "sendEvent",
            value: function (T) {
              this.sendTelemetryReport({ event: T, customProperties: T.getCustomProperties() });
            }
          },
          {
            key: "sendTelemetryReport",
            value: function (T) {
              var _ = this,
                L = window,
                S = !!L.microsoft && !!L.microsoft.applications && !!L.microsoft.applications.telemetry;
              if (!S) {
                var E = { type: f.SxtEventType.TelemetryEventReport, data: T };
                chrome.runtime.sendMessage(E);
                return;
              }
              if (v.disabled) {
                return;
              }
              var I = window.microsoft.applications.telemetry,
                C = new I.EventProperties();
              C.name = T.event.name;
              C.eventType = "general";
              C.timestamp = T.event.timestamp;
              m.default
                .getEcsAsync("ARIAPUB_SEND")
                .then(function (w) {
                  _.addSharedProperties(C, T.event, w);
                  if (T.customProperties) {
                    T.customProperties.forEach(function (x) {
                      _.addProperty(C, x);
                    });
                  }
                  var N = new Date();
                  if (v.anchor.getMinutes() < N.getMinutes()) {
                    v.anchor = N;
                    v.counter = 0;
                  }
                  v.counter++;
                  var A = w.spinningTreshold || 100;
                  if (v.counter > A) {
                    v.disabled = !0;
                    C.name = "qos_errors_spinning";
                  }
                  _.getLogger(w).logEvent(C);
                })
                .catch(function () {
                  return void 0;
                });
            }
          },
          {
            key: "addSharedProperties",
            value: function (T, _, L) {
              var S = new h.UserProfile();
              this.addProperty(T, y.TelemetryPropertyValue.Create("sessionId", m.default.sessionId, g.PIIType.NotSet));
              this.addProperty(T, y.TelemetryPropertyValue.Create("origin", _.origin, g.PIIType.NotSet));
              this.addProperty(T, y.TelemetryPropertyValue.Create("platform", _.platform, g.PIIType.NotSet));
              this.addProperty(T, y.TelemetryPropertyValue.Create("environment", _.environment, g.PIIType.NotSet));
              this.addProperty(T, y.TelemetryPropertyValue.Create("screenHeight", window.screen.height, g.PIIType.NotSet));
              this.addProperty(T, y.TelemetryPropertyValue.Create("screenWidth", window.screen.width, g.PIIType.NotSet));
              this.addProperty(T, y.TelemetryPropertyValue.Create("version", d.appVersion, g.PIIType.NotSet));
              this.addProperty(T, y.TelemetryPropertyValue.Create("ecsVersion", L.version, g.PIIType.NotSet));
              this.addProperty(T, y.TelemetryPropertyValue.Create("hasLoggedIn", !!S.lastLoggedDate, g.PIIType.NotSet));
              var E = localStorage.getItem("sxt-fingerprint");
              if (!E) {
                E = c.default.create();
                localStorage.setItem("sxt-fingerprint", E);
              }
              this.addProperty(T, y.TelemetryPropertyValue.Create("fingerprint", E, g.PIIType.Identity));
              var I = "N/A";
              if (m.default.isGuestUser) {
                I = "guest";
              } else {
                I = "user";
              }
              this.addProperty(T, y.TelemetryPropertyValue.Create("identityType", I, g.PIIType.NotSet));
            }
          },
          {
            key: "getLogger",
            value: function (T) {
              if (v.logger) {
                return v.logger;
              }
              var _ = window.microsoft.applications.telemetry;
              _.LogManager.initialize(T.tenantId);
              v.logger = new _.Logger(T.tenantId);
              return v.logger;
            }
          },
          {
            key: "addProperty",
            value: function (T, _) {
              T.setProperty(_.key, _.value + "", _.type);
            }
          }
        ]);
        return v;
      })();
    o.AriaPublisher = P;
    P.disabled = !1;
    P.counter = 0;
    P.anchor = new Date();
  },
  function (a) {
    a.exports = {
      appVersion: "10.2.0.9952",
      appName: "Skype",
      sharedUrl: "https://web.skype.com/share?",
      webclientUrl: "https://web.skype.com/?source=extension",
      chromeExIdInt: "inbfohgcbjphenhfbjfhimjilokapola",
      chromeExIdDf: "clglfmgepokkgaddcmgapckmiflodiaa",
      chromeExIdProd: "lifbcibllhkdhoafpjfnlhfpfgnpldfl",
      firefoxExId: "82AF8DCA-6DE9-405D-BD5E-43525BDAD38A"
    };
  },
  function (a, o) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.PIIType = void 0;
    var l;
    (function (s) {
      s[(s.NotSet = 0)] = "NotSet";
      s[(s.DistinguishedName = 1)] = "DistinguishedName";
      s[(s.Identity = 10)] = "Identity";
    })((l = o.PIIType || (o.PIIType = {})));
  },
  function (a, o) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.SxtEventType = void 0;
    var l;
    (function (s) {
      s[(s.ContentScriptReady = 1)] = "ContentScriptReady";
      s[(s.PopupScriptReady = 2)] = "PopupScriptReady";
      s[(s.LoginSuccess = 3)] = "LoginSuccess";
      s[(s.LoginFailed = 4)] = "LoginFailed";
      s[(s.SilentLoginRequested = 5)] = "SilentLoginRequested";
      s[(s.SilentLoginSuccess = 6)] = "SilentLoginSuccess";
      s[(s.SilentLoginFailed = 7)] = "SilentLoginFailed";
      s[(s.Logout = 8)] = "Logout";
      s[(s.RequestMeetingLink = 9)] = "RequestMeetingLink";
      s[(s.TelemetryEventReport = 10)] = "TelemetryEventReport";
      s[(s.DocumentEventDispatch = 11)] = "DocumentEventDispatch";
      s[(s.MessageBusDispatch = 12)] = "MessageBusDispatch";
    })((l = o.SxtEventType || (o.SxtEventType = {})));
  },
  function (a, o) {
    "use strict";
    var s = (function () {
      function d(c, g) {
        for (var f = 0, y; f < g.length; f++) {
          y = g[f];
          y.enumerable = y.enumerable || !1;
          y.configurable = !0;
          if ("value" in y) y.writable = !0;
          Object.defineProperty(c, y.key, y);
        }
      }
      return function (c, g, f) {
        if (g) d(c.prototype, g);
        if (f) d(c, f);
        return c;
      };
    })();
    function l(d, c) {
      if (!(d instanceof c)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.TelemetryPropertyValue = void 0;
    var u = (function () {
      function d() {
        l(this, d);
      }
      s(d, null, [
        {
          key: "Create",
          value: function (g, f, y) {
            var m = new d();
            m.key = g;
            m.value = f;
            m.type = y;
            return m;
          }
        }
      ]);
      return d;
    })();
    o.TelemetryPropertyValue = u;
  },
  function (a, o, l) {
    "use strict";
    var u = (function () {
      function g(f, y) {
        for (var m = 0, h; m < y.length; m++) {
          h = y[m];
          h.enumerable = h.enumerable || !1;
          h.configurable = !0;
          if ("value" in h) h.writable = !0;
          Object.defineProperty(f, h.key, h);
        }
      }
      return function (f, y, m) {
        if (y) g(f.prototype, y);
        if (m) g(f, m);
        return f;
      };
    })();
    function s(g, f) {
      if (!(g instanceof f)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.UserProfile = void 0;
    var d = l(13),
      c = (function () {
        function g() {
          s(this, g);
          this.ACT_LASTLOGIN = "sxt-profile-lastLog";
        }
        u(
          g,
          [
            {
              key: "lastLoggedDate",
              get: function () {
                var y = localStorage.getItem(this.ACT_LASTLOGIN);
                if (!y) {
                  return;
                }
                return new Date(JSON.parse(y));
              },
              set: function (y) {
                if (y) {
                  localStorage.setItem(this.ACT_LASTLOGIN, JSON.stringify(y));
                }
              }
            }
          ],
          [
            {
              key: "getProfileAsync",
              value: function (y) {
                var h = fetch(this.PROFILE_SELF_API, { credentials: "include", headers: { "x-skypetoken": y } }).then(function (P) {
                  return P.text()
                    .then(
                      function (v) {
                        if (v) {
                          return JSON.parse(v);
                        }
                      },
                      function () {}
                    )
                    .catch(function () {});
                });
                return (0, d.raceTimer)(h, 2e3);
              }
            }
          ]
        );
        return g;
      })();
    o.UserProfile = c;
    c.PROFILE_SELF_API = "https://profile.skype.com/profile/v1/users/self/profile";
  },
  function (a, o) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.raceTimer = void 0;
    o.raceTimer = function (s, u) {
      return new Promise(function (d, c) {
        var g = setTimeout(function () {
          c(new Error("Timeout after " + u + "ms"));
        }, u);
        return null === s || void 0 === s
          ? void 0
          : s.then(
              function (f) {
                clearTimeout(g);
                d(f);
              },
              function (f) {
                clearTimeout(g);
                c(f);
              }
            );
      });
    };
  },
  function (a, o, l) {
    "use strict";
    var u = (function () {
      function P(v, b) {
        for (var T = 0, _; T < b.length; T++) {
          _ = b[T];
          _.enumerable = _.enumerable || !1;
          _.configurable = !0;
          if ("value" in _) _.writable = !0;
          Object.defineProperty(v, _.key, _);
        }
      }
      return function (v, b, T) {
        if (b) P(v.prototype, b);
        if (T) P(v, T);
        return v;
      };
    })();
    function s(P, v) {
      if (!(P instanceof v)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var d = l(15),
      c = l(17),
      g = l(4),
      f = l(19),
      y = l(20),
      m = l(21),
      h = (function () {
        function P() {
          s(this, P);
        }
        u(P, null, [
          {
            key: "getMeSkypeId",
            value: function (b, T) {
              return m.default.getSkypeId(T);
            }
          },
          {
            key: "getSkypeToken",
            value: function (b, T) {
              var _ = this,
                L = Date.now();
              return new Promise(function (S, E) {
                var I = _.getTokenDataFromCache();
                if (I && I.token) {
                  S(I.token);
                } else {
                  c.default
                    .fetchAsync({
                      client_id: f.default.SILENT_LOGIN_CLIENT_ID,
                      redirect_uri: f.default.SILENT_LOGIN_REDIRECT_PAGE_URI,
                      microsoft: !0,
                      use_azure: !0,
                      env: "live"
                    })
                    .then(function (C) {
                      _.setTokenDataToCache(C, 36000);
                      var w = new d.AutoLoginTelemetryEvent();
                      w.result = "AUTH_OK";
                      w.ttc = Date.now() - L;
                      w.origin = b;
                      null === T || void 0 === T ? void 0 : T.sendEvent(w);
                      S(C);
                    })
                    .catch(function (C) {
                      var w = new d.AutoLoginTelemetryEvent();
                      w.result = "AUTH_FAILED";
                      w.ttc = Date.now() - L;
                      w.origin = b;
                      null === T || void 0 === T ? void 0 : T.sendEvent(w);
                      E(C);
                    });
                }
              });
            }
          },
          {
            key: "clearLoginDataFromCache",
            value: function () {
              this.tokenData = null;
              this.session.clear();
            }
          },
          {
            key: "logout",
            value: function (b) {
              var T = this.LOGOUT_PAGE_URL;
              T += "?";
              T += "&client_id=" + f.default.SILENT_LOGIN_CLIENT_ID;
              T += "&redirect_uri=" + f.default.SILENT_LOGIN_REDIRECT_PAGE_URI;
              T += "&redirect=false";
              T += "&response_type=token";
              window.location.href = T;
              var _ = new y.LogoutTelemetryEvent();
              null === b || void 0 === b ? void 0 : b.sendEvent(_);
            }
          },
          {
            key: "setTokenDataToCache",
            value: function (b, T, _) {
              var L = 0;
              if (T) {
                L = Date.now() + 1e3 * T;
              }
              this.session.setItem(f.default.SKYPE_TOKEN_KEY, JSON.stringify({ token: b, expiresAt: L, isGuest: _ }));
            }
          },
          {
            key: "getTokenDataFromCache",
            value: function () {
              if (!this.tokenData) {
                try {
                  var b = this.session.getItem(f.default.SKYPE_TOKEN_KEY);
                  if (b) {
                    this.tokenData = JSON.parse(b);
                  }
                } catch (T) {
                  this.clearLoginDataFromCache();
                  return null;
                }
              }
              if (!this.tokenData) {
                return null;
              }
              if (this.tokenData.expiresAt > Date.now()) {
                return this.tokenData;
              } else {
                this.tokenData = null;
                this.clearLoginDataFromCache();
                return null;
              }
            }
          }
        ]);
        return P;
      })();
    o.default = h;
    h.session = g.default.getWindow().sessionStorage;
    h.LOGOUT_PAGE_URL = "https://login.skype.com/logout";
  },
  function (a, o, l) {
    "use strict";
    var c = (function () {
      function h(P, v) {
        for (var b = 0, T; b < v.length; b++) {
          T = v[b];
          T.enumerable = T.enumerable || !1;
          T.configurable = !0;
          if ("value" in T) T.writable = !0;
          Object.defineProperty(P, T.key, T);
        }
      }
      return function (P, v, b) {
        if (v) h(P.prototype, v);
        if (b) h(P, b);
        return P;
      };
    })();
    function s(h, P) {
      if (!(h instanceof P)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function u(h, P) {
      if (!h) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return P && ("object" == typeof P || "function" == typeof P) ? P : h;
    }
    function d(h, P) {
      if ("function" != typeof P && null !== P) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof P);
      }
      h.prototype = Object.create(P && P.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } });
      if (P) Object.setPrototypeOf ? Object.setPrototypeOf(h, P) : (h.__proto__ = P);
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.AutoLoginTelemetryEvent = void 0;
    var g = l(9),
      f = l(16),
      y = l(11),
      m = (function (h) {
        d(P, h);
        function P() {
          s(this, P);
          return u(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, "qos_autologin_complete", "popup"));
        }
        c(P, [
          {
            key: "getCustomProperties",
            value: function () {
              var b = [];
              b.push(y.TelemetryPropertyValue.Create("result", this.result, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("ttc", this.ttc, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("origin", this.origin, g.PIIType.NotSet));
              return b;
            }
          }
        ]);
        return P;
      })(f.TelemetryEvent);
    o.AutoLoginTelemetryEvent = m;
  },
  function (a, o) {
    "use strict";
    function s(g, f) {
      if (!(g instanceof f)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.TelemetryEvent = void 0;
    var d = "PROD";
    o.TelemetryEvent = function g(f, y) {
      s(this, g);
      this.name = f;
      this.timestamp = Date.now();
      this.origin = y;
      this.platform = "chrome";
      this.environment = d;
      this.environment = d;
    };
  },
  function (a, o, l) {
    "use strict";
    var u = (function () {
      function g(f, y) {
        for (var m = 0, h; m < y.length; m++) {
          h = y[m];
          h.enumerable = h.enumerable || !1;
          h.configurable = !0;
          if ("value" in h) h.writable = !0;
          Object.defineProperty(f, h.key, h);
        }
      }
      return function (f, y, m) {
        if (y) g(f.prototype, y);
        if (m) g(f, m);
        return f;
      };
    })();
    function s(g, f) {
      if (!(g instanceof f)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var d = l(18),
      c = (function () {
        function g() {
          s(this, g);
        }
        u(g, null, [
          {
            key: "fetchAsync",
            value: function (y) {
              this.settings = this.copyProperty(this.settings, y);
              return this.timeoutAwareFetchAsync(this.getUrl(this.endpoint));
            }
          },
          {
            key: "copyProperty",
            value: function (y, m) {
              for (var h in y) {
                if (m.hasOwnProperty(h)) {
                  y[h] = m[h];
                }
              }
              return y;
            }
          },
          {
            key: "getUrl",
            value: function (y) {
              var m = new Date().getTime(),
                h = this.loginDomains,
                v = {
                  response_type: "postmessage",
                  client_id: this.settings.client_id,
                  redirect_uri: this.settings.redirect_uri,
                  state: "silentloginsdk_" + m,
                  _accept: this.endpointVersion,
                  _nc: m,
                  site_name: "lw.skype.com",
                  wa: "wsignin1.0"
                };
              if (this.settings.microsoft) {
                v.partner = "999";
                h = this.settings.use_azure ? this.azureLoginDomains : this.loginDomains;
              }
              var b = h[this.settings.env] || h.live;
              return b + y + "?" + this.createQuery(v);
            }
          },
          {
            key: "createQuery",
            value: function (y) {
              var m = [];
              for (var h in y) {
                if (y.hasOwnProperty(h)) {
                  m.push(encodeURIComponent(h) + "=" + encodeURIComponent(y[h]));
                }
              }
              return m.join("&");
            }
          },
          {
            key: "timeoutAwareFetchAsync",
            value: function (y) {
              var m = this,
                h = this.timeout;
              return new Promise(function (P, v) {
                var b = void 0,
                  T = new Promise(function (L, S) {
                    b = setTimeout(function () {
                      return S(new Error("request timeout"));
                    }, h);
                  }),
                  _ = new Promise(function (L, S) {
                    fetch(y, { credentials: "include" })
                      .then(function (E) {
                        E.text().then(function (I) {
                          var C;
                          clearTimeout(b);
                          var w = new DOMParser(),
                            N = d.default.createOrUpdateTrustedTypesPolicy(void 0, function (V) {
                              return V;
                            }),
                            A = null !== (C = null === N || void 0 === N ? void 0 : N.createHTML(I)) && void 0 !== C ? C : I,
                            x = w.parseFromString(A, "text/html"),
                            M = x.getElementsByTagName("input"),
                            O = M.t,
                            D = M.ANON,
                            R = M.NAP;
                          if (O && D && R) {
                            m.msaCallBackAsync(O.value, D.value, R.value)
                              .then(function (V) {
                                L(V);
                              })
                              .catch(function (V) {
                                S(V);
                              });
                          } else {
                            S();
                          }
                        });
                      })
                      .catch(function (E) {
                        S(E);
                      });
                  });
                Promise.race([T, _])
                  .then(function (L) {
                    P(L);
                  })
                  .catch(function (L) {
                    v(L);
                  });
              });
            }
          },
          {
            key: "msaCallBackAsync",
            value: function (y, m, h) {
              var P = this;
              return new Promise(function (v, b) {
                var T = new FormData();
                T.append("NAP", h);
                T.append("ANON", m);
                T.append("t", y);
                var _ = P.getUrl(P.msaCallback);
                fetch(_, { method: "POST", body: T })
                  .then(function (L) {
                    return L.text();
                  })
                  .then(function (L) {
                    var S = /"skypetoken":"(.*?)"/g.exec(L);
                    if (S) {
                      v(S[1]);
                    } else {
                      b();
                    }
                  })
                  .catch(function (L) {
                    b(L);
                  });
              });
            }
          }
        ]);
        return g;
      })();
    o.default = c;
    c.loginDomains = { pre: "https://prelogin.skype.net", qa: "https://qalogin.skype.net", live: "https://login.skype.com" };
    c.azureLoginDomains = { pre: "https://a.pre.lw.skype.net", qa: "https://a.qa.lw.skype.net", live: "https://a.lw.skype.com" };
    c.endpoint = "/login/silent";
    c.msaCallback = "/login/silent/MsaCallback";
    c.endpointVersion = "1.0";
    c.timeout = 2e4;
    c.settings = { env: "live", client_id: "", redirect_uri: "", microsoft: !1, use_azure: !1 };
  },
  function (a, o) {
    "use strict";
    var s = (function () {
      function d(c, g) {
        for (var f = 0, y; f < g.length; f++) {
          y = g[f];
          y.enumerable = y.enumerable || !1;
          y.configurable = !0;
          if ("value" in y) y.writable = !0;
          Object.defineProperty(c, y.key, y);
        }
      }
      return function (c, g, f) {
        if (g) d(c.prototype, g);
        if (f) d(c, f);
        return c;
      };
    })();
    function l(d, c) {
      if (!(d instanceof c)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var u = (function () {
      function d() {
        l(this, d);
      }
      s(d, null, [
        {
          key: "createOrUpdateTrustedTypesPolicy",
          value: function (g, f, y) {
            var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : this.meetNowWidgetTrustedTypesPolicyName,
              h;
            if (!!this.supportsTrustedTypes) {
              return null === (h = window.trustedTypes) || void 0 === h
                ? void 0
                : h.createPolicy(m, { createScriptURL: g, createHTML: f, createScript: y });
            }
          }
        },
        {
          key: "supportsTrustedTypes",
          get: function () {
            return window.trustedTypes !== void 0;
          }
        }
      ]);
      return d;
    })();
    o.default = u;
    u.meetNowWidgetTrustedTypesPolicyName = "meetNowWidgetPolicy";
  },
  function (a, o) {
    "use strict";
    function l(u, d) {
      if (!(u instanceof d)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var s = function u() {
      l(this, u);
    };
    o.default = s;
    s.APP_ID = "sxt";
    s.SKYPE_TOKEN_KEY = "STX_SKYPE_TOKEN";
    s.HEARTBEAT_KEY = "sxt-heartbeat-time";
    s.FINGERPRINT_KEY = "sxt-fingerprint";
    s.HEARTBEAT_INTERVAL = 60000;
    s.SILENT_LOGIN_CLIENT_ID = "370873";
    s.SILENT_LOGIN_REDIRECT_PAGE_URI = "https://latest-swx.cdn.skype.com/lwc/connect.html?cbust=0.722";
    s.DEFAULT_LOCALE = "en-us";
  },
  function (a, o, l) {
    "use strict";
    var c = (function () {
      function h(P, v) {
        for (var b = 0, T; b < v.length; b++) {
          T = v[b];
          T.enumerable = T.enumerable || !1;
          T.configurable = !0;
          if ("value" in T) T.writable = !0;
          Object.defineProperty(P, T.key, T);
        }
      }
      return function (P, v, b) {
        if (v) h(P.prototype, v);
        if (b) h(P, b);
        return P;
      };
    })();
    function s(h, P) {
      if (!(h instanceof P)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function u(h, P) {
      if (!h) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return P && ("object" == typeof P || "function" == typeof P) ? P : h;
    }
    function d(h, P) {
      if ("function" != typeof P && null !== P) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof P);
      }
      h.prototype = Object.create(P && P.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } });
      if (P) Object.setPrototypeOf ? Object.setPrototypeOf(h, P) : (h.__proto__ = P);
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.LogoutTelemetryEvent = void 0;
    var g = l(9),
      f = l(16),
      y = l(11),
      m = (function (h) {
        d(P, h);
        function P() {
          s(this, P);
          var v = u(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, "qos_logout_options", "contentscript"));
          v.trigger = "OPTIONS";
          return v;
        }
        c(P, [
          {
            key: "getCustomProperties",
            value: function () {
              var b = [];
              b.push(y.TelemetryPropertyValue.Create("trigger", this.trigger, g.PIIType.NotSet));
              return b;
            }
          }
        ]);
        return P;
      })(f.TelemetryEvent);
    o.LogoutTelemetryEvent = m;
  },
  function (a, o, l) {
    "use strict";
    var u = (function () {
      function g(f, y) {
        for (var m = 0, h; m < y.length; m++) {
          h = y[m];
          h.enumerable = h.enumerable || !1;
          h.configurable = !0;
          if ("value" in h) h.writable = !0;
          Object.defineProperty(f, h.key, h);
        }
      }
      return function (f, y, m) {
        if (y) g(f.prototype, y);
        if (m) g(f, m);
        return f;
      };
    })();
    function s(g, f) {
      if (!(g instanceof f)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var d = l(22),
      c = (function () {
        function g() {
          s(this, g);
        }
        u(g, null, [
          {
            key: "getSkypeId",
            value: function (y) {
              var m = y.substring(y.indexOf(".") + 1);
              m = m.substring(0, m.indexOf("."));
              try {
                return JSON.parse(atob(m)).skypeid;
              } catch (h) {
                return "";
              }
            }
          },
          {
            key: "getLocale",
            value: function () {
              var y = navigator.language;
              if (document && document.documentElement.lang) {
                y = document.documentElement.lang;
              }
              return d.default.getNormalizedLocale(y);
            }
          },
          {
            key: "getSkypeIdWithoutPrefix",
            value: function (y) {
              if (!y) {
                return;
              }
              var m = /^\d{1,2}:(.*)/.exec(y);
              if (m && 1 < m.length) {
                return m[1];
              } else {
                return y;
              }
            }
          },
          {
            key: "areSame",
            value: function (y, m) {
              if (y) {
                if (m) {
                  if (y.length !== m.length) {
                    return !1;
                  }
                  for (var h = 0; h < y.length; h++) {
                    if (y[h] !== m[h]) {
                      return !1;
                    }
                  }
                  return !0;
                }
                return !1;
              }
              return !m;
            }
          },
          {
            key: "isOnline",
            value: function () {
              return window.navigator.onLine;
            }
          },
          {
            key: "getUrlPath",
            value: function (y) {
              var m = document.createElement("a");
              m.href = y;
              return m.port + m.host + m.pathname;
            }
          },
          {
            key: "getHost",
            value: function (y) {
              var m = document.createElement("a");
              m.href = y;
              return m.host;
            }
          },
          {
            key: "getHash",
            value: function (y) {
              var m = 0,
                h = void 0,
                P;
              if (0 === y.length) {
                return m;
              }
              for (h = 0; h < y.length; h++) {
                P = y.charCodeAt(h);
                m = (m << 5) - m + P;
                m |= 0;
              }
              return m;
            }
          },
          {
            key: "matches",
            value: function (y, m) {
              if (y.matches) {
                return y.matches(m);
              }
              if (y.webkitMatchesSelector) {
                return y.webkitMatchesSelector(m);
              }
              return null;
            }
          },
          { key: "debug", value: function () {} },
          {
            key: "oneTimeSubscribe",
            value: function (y, m, h) {
              var P = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : !1;
              if (y.getAttribute("sxt-click")) {
                return;
              }
              y.setAttribute("sxt-click", "true");
              y.addEventListener(m, h, P);
            }
          },
          {
            key: "unscribeEventListener",
            value: function (y, m, h) {
              var P = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : !1;
              if (y.getAttribute("sxt-click")) {
                y.removeAttribute("sxt-click");
              }
              y.removeEventListener(m, h, P);
            }
          },
          {
            key: "findMostRelevantElement",
            value: function (y, m) {
              if (0 === m.length) {
                return null;
              }
              if (1 === m.length) {
                return m[0];
              }
              for (var h = m[0], P = this.getNearestCommonAncestorDistance(y, h), v = 1, b; v < m.length; v++) {
                b = this.getNearestCommonAncestorDistance(y, m[v]);
                if (0 > b) {
                  continue;
                }
                if (0 > P || b < P) {
                  h = m[v];
                  P = b;
                }
              }
              return h;
            }
          },
          {
            key: "getAncestors",
            value: function (y) {
              var m = [];
              for (; y; y = y.parentElement) {
                m.unshift(y);
              }
              return m;
            }
          },
          {
            key: "getEcsConfigVariableValue",
            value: function (y, m, h) {
              var P;
              if (y.configVariablesDelta) {
                P = y.configVariablesDelta.find(function (v) {
                  return v.key === m;
                });
                if (P) {
                  return P.value;
                }
              }
              if (y.configVariablesGama) {
                P = y.configVariablesGama.find(function (v) {
                  return v.key === m;
                });
                if (P) {
                  return P.value;
                }
              }
              if (y.configVariablesBeta) {
                P = y.configVariablesBeta.find(function (v) {
                  return v.key === m;
                });
                if (P) {
                  return P.value;
                }
              }
              if (y.configVariablesAlpha) {
                P = y.configVariablesAlpha.find(function (v) {
                  return v.key === m;
                });
                if (P) {
                  return P.value;
                }
              }
              if (y.configVariables) {
                P = y.configVariables.find(function (v) {
                  return v.key === m;
                });
                if (P) {
                  return P.value;
                }
              }
              if (h) {
                return h;
              }
            }
          },
          {
            key: "getBrowserLocale",
            value: function () {
              return navigator.language.toLowerCase();
            }
          },
          {
            key: "getNearestCommonAncestorDistance",
            value: function (y, m) {
              var h = this.getAncestors(y),
                P = this.getAncestors(m);
              if (h[0] !== P[0]) {
                return -1;
              }
              for (var v = h.length - 1, b = v; 0 <= b; b--) {
                if (-1 < P.indexOf(h[b])) {
                  return v - b;
                }
              }
              return -1;
            }
          }
        ]);
        return g;
      })();
    o.default = c;
  },
  function (a, o) {
    "use strict";
    var s = (function () {
      function c(g, f) {
        for (var y = 0, m; y < f.length; y++) {
          m = f[y];
          m.enumerable = m.enumerable || !1;
          m.configurable = !0;
          if ("value" in m) m.writable = !0;
          Object.defineProperty(g, m.key, m);
        }
      }
      return function (g, f, y) {
        if (f) c(g.prototype, f);
        if (y) c(g, y);
        return g;
      };
    })();
    function l(c, g) {
      if (!(c instanceof g)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    var u = [
        { language: "am", defaultLocale: "am-et" },
        { language: "ar", defaultLocale: "ar-sa" },
        { language: "az", defaultLocale: "az-latn-az" },
        { language: "be", defaultLocale: "be-by" },
        { language: "bg", defaultLocale: "bg-bg" },
        { language: "bn", defaultLocale: "bn-in" },
        { language: "bs", defaultLocale: "bs-latn_ba" },
        { language: "ca", defaultLocale: "ca-es" },
        { language: "cs", defaultLocale: "cs-cz" },
        { language: "cy", defaultLocale: "cy-gb" },
        { language: "da", defaultLocale: "da-dk" },
        { language: "de", defaultLocale: "de-de" },
        { language: "el", defaultLocale: "el-gr" },
        { language: "en", defaultLocale: "en-us" },
        { language: "es", defaultLocale: "es-es" },
        { language: "et", defaultLocale: "et-ee" },
        { language: "eu", defaultLocale: "eu-es" },
        { language: "fa", defaultLocale: "fa-ir" },
        { language: "fi", defaultLocale: "fi-fi" },
        { language: "fil", defaultLocale: "fil-ph" },
        { language: "fr", defaultLocale: "fr-fr" },
        { language: "gd", defaultLocale: "gd-gb" },
        { language: "gl", defaultLocale: "gl-es" },
        { language: "gu", defaultLocale: "gu-in" },
        { language: "he", defaultLocale: "he-il" },
        { language: "iw", defaultLocale: "he-iw" },
        { language: "hi", defaultLocale: "hi-in" },
        { language: "hr", defaultLocale: "hr-hr" },
        { language: "hu", defaultLocale: "hu-hu" },
        { language: "id", defaultLocale: "id-id" },
        { language: "is", defaultLocale: "is-is" },
        { language: "it", defaultLocale: "it-it" },
        { language: "ja", defaultLocale: "ja-jp" },
        { language: "ka", defaultLocale: "ka-ge" },
        { language: "kk", defaultLocale: "kk-kz" },
        { language: "kn", defaultLocale: "kn-in" },
        { language: "ko", defaultLocale: "ko-kr" },
        { language: "ku", defaultLocale: "ku-arab-iq" },
        { language: "lb", defaultLocale: "lb-lu" },
        { language: "lt", defaultLocale: "lt-lt" },
        { language: "lv", defaultLocale: "lv-lv" },
        { language: "mk", defaultLocale: "mk-mk" },
        { language: "ml", defaultLocale: "ml-in" },
        { language: "mr", defaultLocale: "mr-in" },
        { language: "ms", defaultLocale: "ms-my" },
        { language: "nb", defaultLocale: "nb-no" },
        { language: "no", defaultLocale: "nb-NO" },
        { language: "nl", defaultLocale: "nl-nl" },
        { language: "nn", defaultLocale: "nn-no" },
        { language: "or", defaultLocale: "or-in" },
        { language: "pl", defaultLocale: "pl-pl" },
        { language: "pt", defaultLocale: "pt-PT" },
        { language: "pt-BR", defaultLocale: "pt-br" },
        { language: "ro", defaultLocale: "ro-ro" },
        { language: "ru", defaultLocale: "ru-ru" },
        { language: "sk", defaultLocale: "sk-sk" },
        { language: "sl", defaultLocale: "sl-si" },
        { language: "sr", defaultLocale: "sr-cyrl-rs" },
        { language: "sr-cyrl", defaultLocale: "sr-cyrl-rs" },
        { language: "sr-latn", defaultLocale: "sr-latn-rs" },
        { language: "sv", defaultLocale: "sv-se" },
        { language: "sq", defaultLocale: "sq-al" },
        { language: "sw", defaultLocale: "sw-ke" },
        { language: "ta", defaultLocale: "ta-in" },
        { language: "te", defaultLocale: "te-in" },
        { language: "th", defaultLocale: "th-th" },
        { language: "tr", defaultLocale: "tr-tr" },
        { language: "uk", defaultLocale: "uk-ua" },
        { language: "ur", defaultLocale: "ur-pk" },
        { language: "vi", defaultLocale: "vi-vn" },
        { language: "zh", defaultLocale: "zh-cn" },
        { language: "zh-hant", defaultLocale: "zh-tw" },
        { language: "zh-TW", defaultLocale: "zh-tw" },
        { language: "zh-cht", defaultLocale: "zh-tw" },
        { language: "zh-hk", defaultLocale: "zh-tw" },
        { language: "zh-mo", defaultLocale: "zh-tw" }
      ],
      d = (function () {
        function c() {
          l(this, c);
        }
        s(c, null, [
          {
            key: "getNormalizedLocale",
            value: function (f) {
              var y = this.getMappingByLanguage(f);
              if (y) {
                return y.defaultLocale;
              } else {
                var m = f.lastIndexOf("-");
                if (-1 < m) {
                  return this.getNormalizedLocale(f.substring(0, m));
                }
              }
              return f;
            }
          },
          {
            key: "getMappingByLanguage",
            value: function (f) {
              for (var y = 0; y < u.length; y++) {
                if (u[y].language.toLowerCase() === f.toLowerCase()) {
                  return u[y];
                }
              }
              return null;
            }
          }
        ]);
        return c;
      })();
    o.default = d;
  },
  function (a, o, l) {
    "use strict";
    var c = (function () {
      function h(P, v) {
        for (var b = 0, T; b < v.length; b++) {
          T = v[b];
          T.enumerable = T.enumerable || !1;
          T.configurable = !0;
          if ("value" in T) T.writable = !0;
          Object.defineProperty(P, T.key, T);
        }
      }
      return function (P, v, b) {
        if (v) h(P.prototype, v);
        if (b) h(P, b);
        return P;
      };
    })();
    function s(h, P) {
      if (!(h instanceof P)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function u(h, P) {
      if (!h) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return P && ("object" == typeof P || "function" == typeof P) ? P : h;
    }
    function d(h, P) {
      if ("function" != typeof P && null !== P) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof P);
      }
      h.prototype = Object.create(P && P.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } });
      if (P) Object.setPrototypeOf ? Object.setPrototypeOf(h, P) : (h.__proto__ = P);
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.EcsFetchTelemetryEvent = void 0;
    var g = l(9),
      f = l(16),
      y = l(11),
      m = (function (h) {
        d(P, h);
        function P() {
          s(this, P);
          return u(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, "kpi_extension_ecsfetch", "popup"));
        }
        c(P, [
          {
            key: "getCustomProperties",
            value: function () {
              var b = [];
              b.push(y.TelemetryPropertyValue.Create("origin", this.origin, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("period", this.period, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("version", this.version, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("featureBackpack", this.featureBackpack, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("featureCards", this.featureCards, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("featureChat", this.featureChat, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("featureSwc", this.featureSwc, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("featureOnboarding", this.featureOnboarding, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("featureFeedback", this.featureFeedback, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("featureLegacyShare", this.featureLegacyShare, g.PIIType.NotSet));
              return b;
            }
          }
        ]);
        return P;
      })(f.TelemetryEvent);
    o.EcsFetchTelemetryEvent = m;
  },
  function (a, o, l) {
    "use strict";
    var c = (function () {
      function h(P, v) {
        for (var b = 0, T; b < v.length; b++) {
          T = v[b];
          T.enumerable = T.enumerable || !1;
          T.configurable = !0;
          if ("value" in T) T.writable = !0;
          Object.defineProperty(P, T.key, T);
        }
      }
      return function (P, v, b) {
        if (v) h(P.prototype, v);
        if (b) h(P, b);
        return P;
      };
    })();
    function s(h, P) {
      if (!(h instanceof P)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function u(h, P) {
      if (!h) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return P && ("object" == typeof P || "function" == typeof P) ? P : h;
    }
    function d(h, P) {
      if ("function" != typeof P && null !== P) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof P);
      }
      h.prototype = Object.create(P && P.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } });
      if (P) Object.setPrototypeOf ? Object.setPrototypeOf(h, P) : (h.__proto__ = P);
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.SessionStartedTelemetryEvent = void 0;
    var g = l(9),
      f = l(16),
      y = l(11),
      m = (function (h) {
        d(P, h);
        function P() {
          s(this, P);
          return u(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, "kpi_session_started", "popup"));
        }
        c(P, [
          {
            key: "getCustomProperties",
            value: function () {
              var b = [];
              b.push(y.TelemetryPropertyValue.Create("origin", this.origin, g.PIIType.NotSet));
              return b;
            }
          }
        ]);
        return P;
      })(f.TelemetryEvent);
    o.SessionStartedTelemetryEvent = m;
  },
  function (a, o, l) {
    "use strict";
    var c = (function () {
      function h(P, v) {
        for (var b = 0, T; b < v.length; b++) {
          T = v[b];
          T.enumerable = T.enumerable || !1;
          T.configurable = !0;
          if ("value" in T) T.writable = !0;
          Object.defineProperty(P, T.key, T);
        }
      }
      return function (P, v, b) {
        if (v) h(P.prototype, v);
        if (b) h(P, b);
        return P;
      };
    })();
    function s(h, P) {
      if (!(h instanceof P)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function u(h, P) {
      if (!h) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return P && ("object" == typeof P || "function" == typeof P) ? P : h;
    }
    function d(h, P) {
      if ("function" != typeof P && null !== P) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof P);
      }
      h.prototype = Object.create(P && P.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } });
      if (P) Object.setPrototypeOf ? Object.setPrototypeOf(h, P) : (h.__proto__ = P);
    }
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.SessionEndedTelemetryEvent = void 0;
    var g = l(9),
      f = l(16),
      y = l(11),
      m = (function (h) {
        d(P, h);
        function P() {
          s(this, P);
          return u(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, "kpi_session_started", "popup"));
        }
        c(P, [
          {
            key: "getCustomProperties",
            value: function () {
              var b = [];
              b.push(y.TelemetryPropertyValue.Create("origin", this.origin, g.PIIType.NotSet));
              b.push(y.TelemetryPropertyValue.Create("duration", this.sessionDurationInMs, g.PIIType.NotSet));
              return b;
            }
          }
        ]);
        return P;
      })(f.TelemetryEvent);
    o.SessionEndedTelemetryEvent = m;
  },
  function (a, o, l) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.bootstrapMeetNowWidget = void 0;
    var d = l(18),
      c = l(27),
      g = l(28),
      f = void 0;
    o.bootstrapMeetNowWidget = function (y) {
      var m = y.meetNowWidgetBlobPath,
        h = y.meetNowWidgetVersion,
        P = y.meetNowWidgetContainerId,
        v = y.skypeToken,
        b = m + h + "/";
      var T = d.default.createOrUpdateTrustedTypesPolicy(function (E) {
          return b + E;
        }),
        _ = document.createElement("script");
      _.type = "text/javascript";
      _.src = d.default.supportsTrustedTypes && T ? T.createScriptURL("static/js/main.js") : b + "static/js/main.js";
      _.async = !0;
      var L = document.createElement("link");
      L.type = "text/css";
      L.rel = "stylesheet";
      L.href = b + "static/css/main.css";
      L.media = "all";
      var S = document.getElementById(P);
      _.addEventListener("load", function () {
        if (S && window.MeetNowWidget && "function" == typeof window.MeetNowWidget.init) {
          u(P, {
            ConsumerType: "chrome",
            SkypeToken: v,
            ConfigDetails: {
              ShouldRespectBrowserTheme: !0,
              ShouldShowTermsOfUseFooter: v === void 0,
              AllowConsoleLogging: !0,
              TranslationsHost: b + "translations/",
              CdnHost: b + "images/",
              LanguageOverride: navigator.language,
              SilentLoginOverrides: { ShouldSkipSilentLogin: !0 }
            },
            WidgetControlStateListener: {
              onWidgetStateUpdated: function (I, C) {
                switch (I) {
                  case c.WidgetState.MeetingCreationSuccessful:
                    if (null === C || void 0 === C ? void 0 : C.meetingJoinLink) {
                      f = C.meetingJoinLink;
                    }
                    break;
                  case c.WidgetState.MeetingStartRequested:
                  case c.WidgetState.MeetingJoinRequested:
                    if (null === C || void 0 === C ? void 0 : C.meetingStartRedirectPayload) {
                      (0, g.onMeetingStartRequested)(C.meetingStartRedirectPayload, f);
                    }
                    break;
                }
              }
            }
          });
        }
      });
      document.head.appendChild(L);
      document.body.appendChild(_);
    };
    function u(y, m) {
      window.MeetNowWidget.init(y, m);
    }
  },
  function (a, o) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.WidgetState = void 0;
    var l;
    (function (s) {
      s.Loaded = "Loaded";
      s.MeetingCreationStarted = "MeetingCreationStarted";
      s.MeetingCreationSuccessful = "MeetingCreationSuccessful";
      s.MeetingJoinRequested = "MeetingJoinRequested";
      s.MeetingCreationFailed = "MeetingCreationFailed";
      s.MeetingLinkCopied = "MeetingLinkCopied";
      s.MeetingLinkShareOptionSelected = "MeetingLinkShareOptionSelected";
      s.MeetingStartRequested = "MeetingStartRequested";
      s.ForceClose = "Close";
    })((l = o.WidgetState || (o.WidgetState = {})));
  },
  function (a, o) {
    "use strict";
    var s = (function () {
      function h(P, v) {
        var b = [],
          T = !0,
          _ = !1,
          L = void 0;
        try {
          for (var S = P[Symbol.iterator](), E; !(T = (E = S.next()).done); T = !0) {
            b.push(E.value);
            if (v && b.length === v) break;
          }
        } catch (I) {
          _ = !0;
          L = I;
        } finally {
          try {
            if (!T && S["return"]) S["return"]();
          } finally {
            if (_) throw L;
          }
        }
        return b;
      }
      return function (P, v) {
        if (Array.isArray(P)) {
          return P;
        } else if (Symbol.iterator in Object(P)) {
          return h(P, v);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    })();
    Object.defineProperty(o, "__esModule", { value: !0 });
    o.onMeetingStartRequested = void 0;
    o.onMeetingStartRequested = function (h, P) {
      var v = f(function (b) {
        if (b) {
          d(h, v);
        } else {
          if (P) {
            window.open(P, "_blank");
          }
        }
      });
    };
    var d = function (P, v) {
        P.postRedirectParams.state = v;
        var b = c("https://web.skype.com/" + P.threadIdUrlParam + "?" + P.urlQueryParams, P.postRedirectParams);
        document.body.appendChild(b);
        b.submit();
      },
      c = function (P, v) {
        var b = document.createElement("form");
        b.method = "POST";
        b.style.display = "none";
        b.action = P;
        b.target = "untrusted-iframe";
        b.setAttribute("rel", "noopener noreferrer");
        g(b, v);
        return b;
      },
      g = function (P, v) {
        var b = !0,
          T = !1,
          _ = void 0;
        try {
          for (var L = Object.entries(v)[Symbol.iterator](), S; !(b = (S = L.next()).done); b = !0) {
            var E = s(S.value, 2),
              I = E[0],
              C = E[1],
              w = document.createElement("input");
            w.type = "hidden";
            w.name = I;
            w.value = C;
            P.appendChild(w);
          }
        } catch (N) {
          T = !0;
          _ = N;
        } finally {
          try {
            if (!b && L.return) {
              L.return();
            }
          } finally {
            if (T) {
              throw _;
            }
          }
        }
      },
      f = function (P) {
        var v = Math.random().toString(16).substr(2, 8),
          b = y(v);
        m(b, P);
        return v;
      },
      y = function (P) {
        return { value: P, name: "x-csrf-token", path: "/", maxAge: 86400, domain: ".skype.com", secure: !0 };
      },
      m = function (P, v) {
        chrome.cookies.set(
          {
            name: P.name,
            value: P.value,
            url: "https://web.skype.com/",
            path: P.path,
            domain: P.domain,
            expirationDate: new Date(1e3 * P.maxAge + Date.now()).getTime(),
            secure: P.secure
          },
          function (b) {
            v(b !== void 0 && null !== b);
          }
        );
      };
  }
]);
